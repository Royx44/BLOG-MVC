const a = async (b) => {
    b.preventDefault();
    const c = document.querySelector('#edit-post-btn').getAttribute('data-id');
    const d = document.querySelector('#edit-post-title').value;
    const e = document.querySelector('#edit-post-content').value.trim();
    if (c && d && e) {
        const f = await fetch(`/api/posts/${c}`, {
            method: 'PUT',
            body: JSON.stringify({ title: d, content: e }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (f.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to update post');
        }
    }
};

const g = async (h) => {
    if (h.target.hasAttribute('data-id')) {
        const i = h.target.getAttribute('data-id');
        const j = await fetch(`/api/posts/${i}`, {
            method: 'DELETE'
        });
        if (j.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete post');
        }
    }
}

document.querySelector('.edit-post-form').addEventListener('submit', a);
document.querySelector('#delete-btn').addEventListener('click', g);
