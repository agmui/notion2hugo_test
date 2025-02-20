---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-01-12T15:12:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 145
toc: false
icon: ""
---

**official guide:** [https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html](https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html)

So far we have made multiple files and our folder is getting messy.

Let's structure our project by using ROS Packages.

<details>

<summary>What are ROS Packages?</summary>

ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.

They consist of a folder, `package.xml` file, and source code

```python
      cpp_package_1/
		      ... imagine much code files here ..
          package.xml
```

</details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFGDMMR4%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIYAFHCWuFm25ntlbIPTwRG3qAq6RBsK90yT3jZQQYUAIhAO48th9XNQbYIQQJlyf6sJVDNWK0XuNQ%2FyzQCY6psWzIKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaFbTULWHvEWqmH6oq3AOLSNrEhcP7LvF0gGtWVaBgEiMU%2BfLvF6MpL7ZUC%2FxCh2CqL6TffJX24hjPiRqIbpZulEU%2BfJ8QN8gecZxxvGPZdq%2F8a%2BNi%2FlkEROrAFUruFP7Gzin8zybJ%2Fm0JgIZqRW1zp2s3rCJ19DizsBjgE3WQd294JsN%2FHYN5ML3ut28x0ZCATv8%2B8EKGL9EYGpQjsGhXb9I7Bv8y%2F7RYyG8XwvMS%2BA9Nuz7unPg7sdmQ8fYUVtepahWDAyWIJ1f%2Fdv3H%2Fvb2yDKzn2g0t5w8ozOAnrlFnpaXQvzWPQICM6Ylo%2Bop6kNohhw7pu7w2hJ4kZztYqVJ%2FOJVwS4sBLgX2RYi%2BVMtNRV59CmHcLDbc33Eg4TGpvon9BaLG7SgWe8USFkd2DFLGhWZtuyHEv0Ahu9uJVG0XRGt24thKVzIOHFRap5sWWpYqsgPZ6iZ3z7jLBgOiBiQOhYqmlRItzFEeeBScNdA%2BN4alQ1gZu6SOY5jS5qNpDJG6yXZxgiXPUddPfq0y0QKefzzWLGPlasdS7QCT7LHuI5aHFVPNWxNEQJG0KxqCYnIwOo1WXHUAEycgvMQux8ZfR0y%2FCgYMR9ogFEV2vvNhK78Y70TV9tH8yfjMCYI1lg0wNh5BOjwa3%2BoMzDKrdy9BjqkAd7FtimFJnNMy7cujQChAwDkMviE39BqYzHgsMZbXFuNvp8QyFGv4Kq%2FfjLzFTP6FgtCamD5Opy89YPnyN7edWFfHRIDCOPRp6vPM0j80UUxN2yl8tVE8q0wjgYUP5%2FnNoMXAlD7ry3gp0NkWBz9H4UmeVY1TjeMoeAU%2FqqGa8Io2NjjdCKINXWCl7wiibm4Y4mY7Pzx2mNJdumTpkWxsEGexFb0&X-Amz-Signature=a2d2c96c759e2d4951a2084d3eaf7f2b86e0cd4d83417e80c2f7174be99c5a5f&X-Amz-SignedHeaders=host&x-id=GetObject)

Then inside this `src` folder is where we put all of our packages.

```python
ros_ws/
    src/
      cpp_package_1/
		      ...
          package.xml

      py_package_1/
		      ...
          package.xml

      ...
      cpp_package_n/
		      ...
          package.xml

```

<details>

<summary>package types</summary>

packages can be either `C++` or python.

the intern file structure is different for each but for this guide we will stick to creating python packages

</details>

# Creating a package

Let's go to the `src` folder to create the package

```bash
cd ros2_ws/src
```

to create a package we use this command:

```bash
ros2 pkg create --build-type ament_python --license Apache-2.0 --node-name my_node my_package
```

a bunch of text should have been printed out but the result should look something like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFGDMMR4%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIYAFHCWuFm25ntlbIPTwRG3qAq6RBsK90yT3jZQQYUAIhAO48th9XNQbYIQQJlyf6sJVDNWK0XuNQ%2FyzQCY6psWzIKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaFbTULWHvEWqmH6oq3AOLSNrEhcP7LvF0gGtWVaBgEiMU%2BfLvF6MpL7ZUC%2FxCh2CqL6TffJX24hjPiRqIbpZulEU%2BfJ8QN8gecZxxvGPZdq%2F8a%2BNi%2FlkEROrAFUruFP7Gzin8zybJ%2Fm0JgIZqRW1zp2s3rCJ19DizsBjgE3WQd294JsN%2FHYN5ML3ut28x0ZCATv8%2B8EKGL9EYGpQjsGhXb9I7Bv8y%2F7RYyG8XwvMS%2BA9Nuz7unPg7sdmQ8fYUVtepahWDAyWIJ1f%2Fdv3H%2Fvb2yDKzn2g0t5w8ozOAnrlFnpaXQvzWPQICM6Ylo%2Bop6kNohhw7pu7w2hJ4kZztYqVJ%2FOJVwS4sBLgX2RYi%2BVMtNRV59CmHcLDbc33Eg4TGpvon9BaLG7SgWe8USFkd2DFLGhWZtuyHEv0Ahu9uJVG0XRGt24thKVzIOHFRap5sWWpYqsgPZ6iZ3z7jLBgOiBiQOhYqmlRItzFEeeBScNdA%2BN4alQ1gZu6SOY5jS5qNpDJG6yXZxgiXPUddPfq0y0QKefzzWLGPlasdS7QCT7LHuI5aHFVPNWxNEQJG0KxqCYnIwOo1WXHUAEycgvMQux8ZfR0y%2FCgYMR9ogFEV2vvNhK78Y70TV9tH8yfjMCYI1lg0wNh5BOjwa3%2BoMzDKrdy9BjqkAd7FtimFJnNMy7cujQChAwDkMviE39BqYzHgsMZbXFuNvp8QyFGv4Kq%2FfjLzFTP6FgtCamD5Opy89YPnyN7edWFfHRIDCOPRp6vPM0j80UUxN2yl8tVE8q0wjgYUP5%2FnNoMXAlD7ry3gp0NkWBz9H4UmeVY1TjeMoeAU%2FqqGa8Io2NjjdCKINXWCl7wiibm4Y4mY7Pzx2mNJdumTpkWxsEGexFb0&X-Amz-Signature=4dd086aaca03b54e8f4c8fb8aa822c6419644352d7f7e9137b4838f8cace83d7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFGDMMR4%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIYAFHCWuFm25ntlbIPTwRG3qAq6RBsK90yT3jZQQYUAIhAO48th9XNQbYIQQJlyf6sJVDNWK0XuNQ%2FyzQCY6psWzIKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaFbTULWHvEWqmH6oq3AOLSNrEhcP7LvF0gGtWVaBgEiMU%2BfLvF6MpL7ZUC%2FxCh2CqL6TffJX24hjPiRqIbpZulEU%2BfJ8QN8gecZxxvGPZdq%2F8a%2BNi%2FlkEROrAFUruFP7Gzin8zybJ%2Fm0JgIZqRW1zp2s3rCJ19DizsBjgE3WQd294JsN%2FHYN5ML3ut28x0ZCATv8%2B8EKGL9EYGpQjsGhXb9I7Bv8y%2F7RYyG8XwvMS%2BA9Nuz7unPg7sdmQ8fYUVtepahWDAyWIJ1f%2Fdv3H%2Fvb2yDKzn2g0t5w8ozOAnrlFnpaXQvzWPQICM6Ylo%2Bop6kNohhw7pu7w2hJ4kZztYqVJ%2FOJVwS4sBLgX2RYi%2BVMtNRV59CmHcLDbc33Eg4TGpvon9BaLG7SgWe8USFkd2DFLGhWZtuyHEv0Ahu9uJVG0XRGt24thKVzIOHFRap5sWWpYqsgPZ6iZ3z7jLBgOiBiQOhYqmlRItzFEeeBScNdA%2BN4alQ1gZu6SOY5jS5qNpDJG6yXZxgiXPUddPfq0y0QKefzzWLGPlasdS7QCT7LHuI5aHFVPNWxNEQJG0KxqCYnIwOo1WXHUAEycgvMQux8ZfR0y%2FCgYMR9ogFEV2vvNhK78Y70TV9tH8yfjMCYI1lg0wNh5BOjwa3%2BoMzDKrdy9BjqkAd7FtimFJnNMy7cujQChAwDkMviE39BqYzHgsMZbXFuNvp8QyFGv4Kq%2FfjLzFTP6FgtCamD5Opy89YPnyN7edWFfHRIDCOPRp6vPM0j80UUxN2yl8tVE8q0wjgYUP5%2FnNoMXAlD7ry3gp0NkWBz9H4UmeVY1TjeMoeAU%2FqqGa8Io2NjjdCKINXWCl7wiibm4Y4mY7Pzx2mNJdumTpkWxsEGexFb0&X-Amz-Signature=7d14459e8ee4bf8b64f4c7a4bd87bc421a2992476927bac89960283dd419b33a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFGDMMR4%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIYAFHCWuFm25ntlbIPTwRG3qAq6RBsK90yT3jZQQYUAIhAO48th9XNQbYIQQJlyf6sJVDNWK0XuNQ%2FyzQCY6psWzIKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaFbTULWHvEWqmH6oq3AOLSNrEhcP7LvF0gGtWVaBgEiMU%2BfLvF6MpL7ZUC%2FxCh2CqL6TffJX24hjPiRqIbpZulEU%2BfJ8QN8gecZxxvGPZdq%2F8a%2BNi%2FlkEROrAFUruFP7Gzin8zybJ%2Fm0JgIZqRW1zp2s3rCJ19DizsBjgE3WQd294JsN%2FHYN5ML3ut28x0ZCATv8%2B8EKGL9EYGpQjsGhXb9I7Bv8y%2F7RYyG8XwvMS%2BA9Nuz7unPg7sdmQ8fYUVtepahWDAyWIJ1f%2Fdv3H%2Fvb2yDKzn2g0t5w8ozOAnrlFnpaXQvzWPQICM6Ylo%2Bop6kNohhw7pu7w2hJ4kZztYqVJ%2FOJVwS4sBLgX2RYi%2BVMtNRV59CmHcLDbc33Eg4TGpvon9BaLG7SgWe8USFkd2DFLGhWZtuyHEv0Ahu9uJVG0XRGt24thKVzIOHFRap5sWWpYqsgPZ6iZ3z7jLBgOiBiQOhYqmlRItzFEeeBScNdA%2BN4alQ1gZu6SOY5jS5qNpDJG6yXZxgiXPUddPfq0y0QKefzzWLGPlasdS7QCT7LHuI5aHFVPNWxNEQJG0KxqCYnIwOo1WXHUAEycgvMQux8ZfR0y%2FCgYMR9ogFEV2vvNhK78Y70TV9tH8yfjMCYI1lg0wNh5BOjwa3%2BoMzDKrdy9BjqkAd7FtimFJnNMy7cujQChAwDkMviE39BqYzHgsMZbXFuNvp8QyFGv4Kq%2FfjLzFTP6FgtCamD5Opy89YPnyN7edWFfHRIDCOPRp6vPM0j80UUxN2yl8tVE8q0wjgYUP5%2FnNoMXAlD7ry3gp0NkWBz9H4UmeVY1TjeMoeAU%2FqqGa8Io2NjjdCKINXWCl7wiibm4Y4mY7Pzx2mNJdumTpkWxsEGexFb0&X-Amz-Signature=b889cdf5d24daddb13382a324350d92d540c069ed59c58530a8cf0f952fecad9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFGDMMR4%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIYAFHCWuFm25ntlbIPTwRG3qAq6RBsK90yT3jZQQYUAIhAO48th9XNQbYIQQJlyf6sJVDNWK0XuNQ%2FyzQCY6psWzIKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaFbTULWHvEWqmH6oq3AOLSNrEhcP7LvF0gGtWVaBgEiMU%2BfLvF6MpL7ZUC%2FxCh2CqL6TffJX24hjPiRqIbpZulEU%2BfJ8QN8gecZxxvGPZdq%2F8a%2BNi%2FlkEROrAFUruFP7Gzin8zybJ%2Fm0JgIZqRW1zp2s3rCJ19DizsBjgE3WQd294JsN%2FHYN5ML3ut28x0ZCATv8%2B8EKGL9EYGpQjsGhXb9I7Bv8y%2F7RYyG8XwvMS%2BA9Nuz7unPg7sdmQ8fYUVtepahWDAyWIJ1f%2Fdv3H%2Fvb2yDKzn2g0t5w8ozOAnrlFnpaXQvzWPQICM6Ylo%2Bop6kNohhw7pu7w2hJ4kZztYqVJ%2FOJVwS4sBLgX2RYi%2BVMtNRV59CmHcLDbc33Eg4TGpvon9BaLG7SgWe8USFkd2DFLGhWZtuyHEv0Ahu9uJVG0XRGt24thKVzIOHFRap5sWWpYqsgPZ6iZ3z7jLBgOiBiQOhYqmlRItzFEeeBScNdA%2BN4alQ1gZu6SOY5jS5qNpDJG6yXZxgiXPUddPfq0y0QKefzzWLGPlasdS7QCT7LHuI5aHFVPNWxNEQJG0KxqCYnIwOo1WXHUAEycgvMQux8ZfR0y%2FCgYMR9ogFEV2vvNhK78Y70TV9tH8yfjMCYI1lg0wNh5BOjwa3%2BoMzDKrdy9BjqkAd7FtimFJnNMy7cujQChAwDkMviE39BqYzHgsMZbXFuNvp8QyFGv4Kq%2FfjLzFTP6FgtCamD5Opy89YPnyN7edWFfHRIDCOPRp6vPM0j80UUxN2yl8tVE8q0wjgYUP5%2FnNoMXAlD7ry3gp0NkWBz9H4UmeVY1TjeMoeAU%2FqqGa8Io2NjjdCKINXWCl7wiibm4Y4mY7Pzx2mNJdumTpkWxsEGexFb0&X-Amz-Signature=05518dd6b4360b1aa89acdcb8eb531296e9d2215c79e314f521826dbb05a2003&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFGDMMR4%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIYAFHCWuFm25ntlbIPTwRG3qAq6RBsK90yT3jZQQYUAIhAO48th9XNQbYIQQJlyf6sJVDNWK0XuNQ%2FyzQCY6psWzIKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaFbTULWHvEWqmH6oq3AOLSNrEhcP7LvF0gGtWVaBgEiMU%2BfLvF6MpL7ZUC%2FxCh2CqL6TffJX24hjPiRqIbpZulEU%2BfJ8QN8gecZxxvGPZdq%2F8a%2BNi%2FlkEROrAFUruFP7Gzin8zybJ%2Fm0JgIZqRW1zp2s3rCJ19DizsBjgE3WQd294JsN%2FHYN5ML3ut28x0ZCATv8%2B8EKGL9EYGpQjsGhXb9I7Bv8y%2F7RYyG8XwvMS%2BA9Nuz7unPg7sdmQ8fYUVtepahWDAyWIJ1f%2Fdv3H%2Fvb2yDKzn2g0t5w8ozOAnrlFnpaXQvzWPQICM6Ylo%2Bop6kNohhw7pu7w2hJ4kZztYqVJ%2FOJVwS4sBLgX2RYi%2BVMtNRV59CmHcLDbc33Eg4TGpvon9BaLG7SgWe8USFkd2DFLGhWZtuyHEv0Ahu9uJVG0XRGt24thKVzIOHFRap5sWWpYqsgPZ6iZ3z7jLBgOiBiQOhYqmlRItzFEeeBScNdA%2BN4alQ1gZu6SOY5jS5qNpDJG6yXZxgiXPUddPfq0y0QKefzzWLGPlasdS7QCT7LHuI5aHFVPNWxNEQJG0KxqCYnIwOo1WXHUAEycgvMQux8ZfR0y%2FCgYMR9ogFEV2vvNhK78Y70TV9tH8yfjMCYI1lg0wNh5BOjwa3%2BoMzDKrdy9BjqkAd7FtimFJnNMy7cujQChAwDkMviE39BqYzHgsMZbXFuNvp8QyFGv4Kq%2FfjLzFTP6FgtCamD5Opy89YPnyN7edWFfHRIDCOPRp6vPM0j80UUxN2yl8tVE8q0wjgYUP5%2FnNoMXAlD7ry3gp0NkWBz9H4UmeVY1TjeMoeAU%2FqqGa8Io2NjjdCKINXWCl7wiibm4Y4mY7Pzx2mNJdumTpkWxsEGexFb0&X-Amz-Signature=10b6d55ae67e5786eb3e8e32e494da01e4ed0de921a7f3da4a838575ac13333c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFGDMMR4%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIYAFHCWuFm25ntlbIPTwRG3qAq6RBsK90yT3jZQQYUAIhAO48th9XNQbYIQQJlyf6sJVDNWK0XuNQ%2FyzQCY6psWzIKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaFbTULWHvEWqmH6oq3AOLSNrEhcP7LvF0gGtWVaBgEiMU%2BfLvF6MpL7ZUC%2FxCh2CqL6TffJX24hjPiRqIbpZulEU%2BfJ8QN8gecZxxvGPZdq%2F8a%2BNi%2FlkEROrAFUruFP7Gzin8zybJ%2Fm0JgIZqRW1zp2s3rCJ19DizsBjgE3WQd294JsN%2FHYN5ML3ut28x0ZCATv8%2B8EKGL9EYGpQjsGhXb9I7Bv8y%2F7RYyG8XwvMS%2BA9Nuz7unPg7sdmQ8fYUVtepahWDAyWIJ1f%2Fdv3H%2Fvb2yDKzn2g0t5w8ozOAnrlFnpaXQvzWPQICM6Ylo%2Bop6kNohhw7pu7w2hJ4kZztYqVJ%2FOJVwS4sBLgX2RYi%2BVMtNRV59CmHcLDbc33Eg4TGpvon9BaLG7SgWe8USFkd2DFLGhWZtuyHEv0Ahu9uJVG0XRGt24thKVzIOHFRap5sWWpYqsgPZ6iZ3z7jLBgOiBiQOhYqmlRItzFEeeBScNdA%2BN4alQ1gZu6SOY5jS5qNpDJG6yXZxgiXPUddPfq0y0QKefzzWLGPlasdS7QCT7LHuI5aHFVPNWxNEQJG0KxqCYnIwOo1WXHUAEycgvMQux8ZfR0y%2FCgYMR9ogFEV2vvNhK78Y70TV9tH8yfjMCYI1lg0wNh5BOjwa3%2BoMzDKrdy9BjqkAd7FtimFJnNMy7cujQChAwDkMviE39BqYzHgsMZbXFuNvp8QyFGv4Kq%2FfjLzFTP6FgtCamD5Opy89YPnyN7edWFfHRIDCOPRp6vPM0j80UUxN2yl8tVE8q0wjgYUP5%2FnNoMXAlD7ry3gp0NkWBz9H4UmeVY1TjeMoeAU%2FqqGa8Io2NjjdCKINXWCl7wiibm4Y4mY7Pzx2mNJdumTpkWxsEGexFb0&X-Amz-Signature=cb064b37eccfc55a751c153376eca711eb9a647c68c10609def4f3c8ed835fd4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
