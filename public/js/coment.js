const a = async (b) => {
    b.preventDefault();
    const c = document.querySelector('#submit-comment').getAttribute('data-id');
    const d = document.querySelector('#new-comment-content').value.trim();
    console.log(c, d);
    if (c && d) {
        const e = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ post_id: c, content: d }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (e.ok) {
            document.location.replace(`/post/${c}`);
        } else {
            alert('Failed to create comment');
        }
    }
};

document.querySelector('#new-comment').addEventListener('submit', a);
