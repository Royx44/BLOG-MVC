const a = async (b) => {
    b.preventDefault();
    const c = document.querySelector('#new-post-title').value.trim();
    const d = document.querySelector('#new-post-content').value.trim();
    if (c && d) {
        const e = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title: c, content: d }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (e.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create post');
        }
    }
};

document.querySelector('.new-post-form').addEventListener('submit', a);
