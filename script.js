function simplePromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise completed!');
    }, 1000);
  });
}
 
function fetchUserProfile(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = {
        id: N01617816,
        name: SmitPatel,
        email: smit272003mail.com,
        username: planetary,
      };
      resolve(user);
    }, 1000);
  });
}

const posts = [
  { postId: 1, userId: userId, title: '...', content: '...' },
  { postId: 2, userId: userId, title: '', content: ''},
  { postId: 3, userId: userId, title: '', content: ''}
];

async function fetchDataSequentially(userId) {
  console.log('Starting sequential fetch...');
  const startTime = Date.now();
}
  try {

    // TODO: Step 1 - Await fetchUserProfile
    // Log: "User profile retrieved"


    async function user(params) {
      console.log("Smit");
      console.log("smit272003mail");
      console.log("planetary");
    }

    user();
    
    
    // TODO: Step 2 - Await fetchUserPosts
    // Log: "Posts retrieved"
    
    await fetchUserPost();
    
    // TODO: Step 3 - Loop through posts and await fetchPostComments for each
    // Log: "Comments retrieved for post X"
    
    const endTime = Date.now();
    console.log(`Sequential fetch took ${endTime - startTime}ms`);
    
    // TODO: Return all data combined
    
  } catch (error) {
    console.error('Error in sequential fetch:', error.message);
  }


  async function fetchDataInParallel(userId) {
  console.log('Starting parallel fetch...');
  const startTime = Date.now();
  
  try {
    // TODO: Use Promise.all() to fetch user and posts simultaneously
    // Hint: const [user, posts] = await Promise.all([...]);
    
    console.log('User and posts retrieved simultaneously');
    
    // TODO: Fetch all comments for all posts in parallel
    // Hint: Use posts.map() with fetchPostComments, then Promise.all()
    
    const endTime = Date.now();
    console.log(`Parallel fetch took ${endTime - startTime}ms`);
    
    // TODO: Return all data combined
    
  } catch (error) {
    console.error('Error in parallel fetch:', error.message);
  }
}

function fetchPostComments(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Add random failure (30% chance of error)
      if (Math.random() < 0.3) {
        reject(new Error('Failed to fetch comments'));
        return;
      }
      
      // Your existing code here...

      resolve(comments);
    }, 2000);
  });
}

async function fetchDataWithErrorHandling(userId) {
  try {
    // Your fetching code here
    fetchDataWithErrorHandling();
  } catch (error) {
    // TODO: Log the error
    // TODO: Return partial data if some fetches succeeded
    // TODO: Display user-friendly error message
  }
}

async function getUserContent(userId) {
  console.log('=== Fetching all user content ===');
  
  try {
    // Step 1: Fetch user profile
    const user = await fetchUserProfile(userId);
    console.log('Step 1: User profile retrieved -', user.name);
    
    // Step 2: Fetch user's posts
    // TODO: Complete this step
    console.log('Step 2: Posts retrieved -', /* number of posts */);
    
    // Step 3: Fetch comments for all posts
    // TODO: Complete this step
    console.log('Step 3: Comments retrieved');
    
    // Step 4: Combine all data into one object
    const allContent = {
      // TODO: Structure your complete data
    };
    
    return allContent;
    
  } catch (error) {
    console.error('Failed to fetch user content:', error.message);
    throw error;
  }
}

document.getElementById('sequentialBtn').addEventListener('click', async () => {
  // TODO: Call fetchDataSequentially
  // TODO: Display results in the output div
});
 
document.getElementById('parallelBtn').addEventListener('click', async () => {
  // TODO: Call fetchDataInParallel
  // TODO: Display results in the output div
});

function displayResults(data, container) {
  // TODO: Clear the container
  // TODO: Create HTML elements to show:
  //   - User information
  //   - Each post with its title
  //   - Comments under each post
  // TODO: Append to container
}