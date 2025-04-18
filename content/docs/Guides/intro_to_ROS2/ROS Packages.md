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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X3T7U23%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFDM4ts7cJ4kVdaeZ32Gwlp%2BLrz4bOfaNIstOldgA24AiAUZb3yc9dxJ3t5O8rIg4tcda7A%2BksV8oM6hSalDNwB9ir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMA1G0PSLvQx8GphjMKtwDBM25qwbRFtzglEc9msLV2EUVFM3crU7p106xaEbi4%2FXVkBUZkpq6lODNrgDfkebnO96LVi%2FaMY%2FsB%2FtVeDr0LyqEoCBd%2BIiRnZwpexsEYvGnF7wflK6Fus%2FQ1Qm4F3eBtqwSsDesKTRP%2BjHJJ%2FgIWaQiGz%2FAl1hLmxgf3pQljRMfJF6ClHMfxwm8yuPOOrWOD3YmsDQ78Y6Vj%2Fm8E7KSDzdSgEZZllVfwc7g7BOYnV0p9SFLH4POl4O2yu2IUK7VpotLbp6%2FwGuT3Tcjy%2FVZrrBs6KlOf7HLJt9GZKptG%2FHTOZmI0CnJjKmWYqnGiZ1CUEVgWUk%2FpQsMzqx%2FD2Xm1nFC0jDAc%2F5BKKUY%2FQ9dax7iIvO5ufKB%2BhPMhNb2yKiuMSKRQveUdxZHDJUGZQNEv6rw%2B5bUgIMomsGsdJDGNXwluczQ8TR8yMucjpYBBYAxUHIaKpQH94VSNP%2FCImNwe4zT3FK0%2BOTxJntvGLxW8LKBoS7jHOo3ksjOMmVsmE7txVfle9zYUtHgtpT0D9uiZJrj6ERfTXanbcZmm5Y7hWM8j7hSrk7YE7p01h6BPkfNnVpv%2BVVJa0dzQBKJINSFJ9T4E7qWoUeUZhiwGTcCF4umiaMc1QAcfwx40D4wja2IwAY6pgHQcYESwiKw68SjOfCX7IwdYaxNyBsBDeKQlzIz4RgPNYSpRgtIu0YnVWYKpPDn3hZjJD81u7bPi14mjC9rbhdsWXiuTtpkvCUTJrBQCVjZ9W%2FRnf5sVc3MnsQtwFUuBKxbLXFVVauw7dckEYGt8P%2FOsqixl%2BAq4qMVjIq5fYER94imBUaPddHgRaefFacl3bo9QkcuMT5j4cPXzM31jwG4BFobX2vr&X-Amz-Signature=c9eb82054a338118c44325e875b52561d3f40805194e842b4db8451b61e8e13b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X3T7U23%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFDM4ts7cJ4kVdaeZ32Gwlp%2BLrz4bOfaNIstOldgA24AiAUZb3yc9dxJ3t5O8rIg4tcda7A%2BksV8oM6hSalDNwB9ir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMA1G0PSLvQx8GphjMKtwDBM25qwbRFtzglEc9msLV2EUVFM3crU7p106xaEbi4%2FXVkBUZkpq6lODNrgDfkebnO96LVi%2FaMY%2FsB%2FtVeDr0LyqEoCBd%2BIiRnZwpexsEYvGnF7wflK6Fus%2FQ1Qm4F3eBtqwSsDesKTRP%2BjHJJ%2FgIWaQiGz%2FAl1hLmxgf3pQljRMfJF6ClHMfxwm8yuPOOrWOD3YmsDQ78Y6Vj%2Fm8E7KSDzdSgEZZllVfwc7g7BOYnV0p9SFLH4POl4O2yu2IUK7VpotLbp6%2FwGuT3Tcjy%2FVZrrBs6KlOf7HLJt9GZKptG%2FHTOZmI0CnJjKmWYqnGiZ1CUEVgWUk%2FpQsMzqx%2FD2Xm1nFC0jDAc%2F5BKKUY%2FQ9dax7iIvO5ufKB%2BhPMhNb2yKiuMSKRQveUdxZHDJUGZQNEv6rw%2B5bUgIMomsGsdJDGNXwluczQ8TR8yMucjpYBBYAxUHIaKpQH94VSNP%2FCImNwe4zT3FK0%2BOTxJntvGLxW8LKBoS7jHOo3ksjOMmVsmE7txVfle9zYUtHgtpT0D9uiZJrj6ERfTXanbcZmm5Y7hWM8j7hSrk7YE7p01h6BPkfNnVpv%2BVVJa0dzQBKJINSFJ9T4E7qWoUeUZhiwGTcCF4umiaMc1QAcfwx40D4wja2IwAY6pgHQcYESwiKw68SjOfCX7IwdYaxNyBsBDeKQlzIz4RgPNYSpRgtIu0YnVWYKpPDn3hZjJD81u7bPi14mjC9rbhdsWXiuTtpkvCUTJrBQCVjZ9W%2FRnf5sVc3MnsQtwFUuBKxbLXFVVauw7dckEYGt8P%2FOsqixl%2BAq4qMVjIq5fYER94imBUaPddHgRaefFacl3bo9QkcuMT5j4cPXzM31jwG4BFobX2vr&X-Amz-Signature=be3096a32b9097b2d8dcb07a6a9117fd7d4dbb64af1f82391604b44dd3d0b59a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X3T7U23%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFDM4ts7cJ4kVdaeZ32Gwlp%2BLrz4bOfaNIstOldgA24AiAUZb3yc9dxJ3t5O8rIg4tcda7A%2BksV8oM6hSalDNwB9ir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMA1G0PSLvQx8GphjMKtwDBM25qwbRFtzglEc9msLV2EUVFM3crU7p106xaEbi4%2FXVkBUZkpq6lODNrgDfkebnO96LVi%2FaMY%2FsB%2FtVeDr0LyqEoCBd%2BIiRnZwpexsEYvGnF7wflK6Fus%2FQ1Qm4F3eBtqwSsDesKTRP%2BjHJJ%2FgIWaQiGz%2FAl1hLmxgf3pQljRMfJF6ClHMfxwm8yuPOOrWOD3YmsDQ78Y6Vj%2Fm8E7KSDzdSgEZZllVfwc7g7BOYnV0p9SFLH4POl4O2yu2IUK7VpotLbp6%2FwGuT3Tcjy%2FVZrrBs6KlOf7HLJt9GZKptG%2FHTOZmI0CnJjKmWYqnGiZ1CUEVgWUk%2FpQsMzqx%2FD2Xm1nFC0jDAc%2F5BKKUY%2FQ9dax7iIvO5ufKB%2BhPMhNb2yKiuMSKRQveUdxZHDJUGZQNEv6rw%2B5bUgIMomsGsdJDGNXwluczQ8TR8yMucjpYBBYAxUHIaKpQH94VSNP%2FCImNwe4zT3FK0%2BOTxJntvGLxW8LKBoS7jHOo3ksjOMmVsmE7txVfle9zYUtHgtpT0D9uiZJrj6ERfTXanbcZmm5Y7hWM8j7hSrk7YE7p01h6BPkfNnVpv%2BVVJa0dzQBKJINSFJ9T4E7qWoUeUZhiwGTcCF4umiaMc1QAcfwx40D4wja2IwAY6pgHQcYESwiKw68SjOfCX7IwdYaxNyBsBDeKQlzIz4RgPNYSpRgtIu0YnVWYKpPDn3hZjJD81u7bPi14mjC9rbhdsWXiuTtpkvCUTJrBQCVjZ9W%2FRnf5sVc3MnsQtwFUuBKxbLXFVVauw7dckEYGt8P%2FOsqixl%2BAq4qMVjIq5fYER94imBUaPddHgRaefFacl3bo9QkcuMT5j4cPXzM31jwG4BFobX2vr&X-Amz-Signature=340d4d8ef9dcdce3a899dc2ff602a3434f794182536a3d2ae79aa1df42265d93&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X3T7U23%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFDM4ts7cJ4kVdaeZ32Gwlp%2BLrz4bOfaNIstOldgA24AiAUZb3yc9dxJ3t5O8rIg4tcda7A%2BksV8oM6hSalDNwB9ir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMA1G0PSLvQx8GphjMKtwDBM25qwbRFtzglEc9msLV2EUVFM3crU7p106xaEbi4%2FXVkBUZkpq6lODNrgDfkebnO96LVi%2FaMY%2FsB%2FtVeDr0LyqEoCBd%2BIiRnZwpexsEYvGnF7wflK6Fus%2FQ1Qm4F3eBtqwSsDesKTRP%2BjHJJ%2FgIWaQiGz%2FAl1hLmxgf3pQljRMfJF6ClHMfxwm8yuPOOrWOD3YmsDQ78Y6Vj%2Fm8E7KSDzdSgEZZllVfwc7g7BOYnV0p9SFLH4POl4O2yu2IUK7VpotLbp6%2FwGuT3Tcjy%2FVZrrBs6KlOf7HLJt9GZKptG%2FHTOZmI0CnJjKmWYqnGiZ1CUEVgWUk%2FpQsMzqx%2FD2Xm1nFC0jDAc%2F5BKKUY%2FQ9dax7iIvO5ufKB%2BhPMhNb2yKiuMSKRQveUdxZHDJUGZQNEv6rw%2B5bUgIMomsGsdJDGNXwluczQ8TR8yMucjpYBBYAxUHIaKpQH94VSNP%2FCImNwe4zT3FK0%2BOTxJntvGLxW8LKBoS7jHOo3ksjOMmVsmE7txVfle9zYUtHgtpT0D9uiZJrj6ERfTXanbcZmm5Y7hWM8j7hSrk7YE7p01h6BPkfNnVpv%2BVVJa0dzQBKJINSFJ9T4E7qWoUeUZhiwGTcCF4umiaMc1QAcfwx40D4wja2IwAY6pgHQcYESwiKw68SjOfCX7IwdYaxNyBsBDeKQlzIz4RgPNYSpRgtIu0YnVWYKpPDn3hZjJD81u7bPi14mjC9rbhdsWXiuTtpkvCUTJrBQCVjZ9W%2FRnf5sVc3MnsQtwFUuBKxbLXFVVauw7dckEYGt8P%2FOsqixl%2BAq4qMVjIq5fYER94imBUaPddHgRaefFacl3bo9QkcuMT5j4cPXzM31jwG4BFobX2vr&X-Amz-Signature=4616e145f9c65d7ad90737a783576ed89fac29976ce92dc89f382e0578f306db&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X3T7U23%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFDM4ts7cJ4kVdaeZ32Gwlp%2BLrz4bOfaNIstOldgA24AiAUZb3yc9dxJ3t5O8rIg4tcda7A%2BksV8oM6hSalDNwB9ir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMA1G0PSLvQx8GphjMKtwDBM25qwbRFtzglEc9msLV2EUVFM3crU7p106xaEbi4%2FXVkBUZkpq6lODNrgDfkebnO96LVi%2FaMY%2FsB%2FtVeDr0LyqEoCBd%2BIiRnZwpexsEYvGnF7wflK6Fus%2FQ1Qm4F3eBtqwSsDesKTRP%2BjHJJ%2FgIWaQiGz%2FAl1hLmxgf3pQljRMfJF6ClHMfxwm8yuPOOrWOD3YmsDQ78Y6Vj%2Fm8E7KSDzdSgEZZllVfwc7g7BOYnV0p9SFLH4POl4O2yu2IUK7VpotLbp6%2FwGuT3Tcjy%2FVZrrBs6KlOf7HLJt9GZKptG%2FHTOZmI0CnJjKmWYqnGiZ1CUEVgWUk%2FpQsMzqx%2FD2Xm1nFC0jDAc%2F5BKKUY%2FQ9dax7iIvO5ufKB%2BhPMhNb2yKiuMSKRQveUdxZHDJUGZQNEv6rw%2B5bUgIMomsGsdJDGNXwluczQ8TR8yMucjpYBBYAxUHIaKpQH94VSNP%2FCImNwe4zT3FK0%2BOTxJntvGLxW8LKBoS7jHOo3ksjOMmVsmE7txVfle9zYUtHgtpT0D9uiZJrj6ERfTXanbcZmm5Y7hWM8j7hSrk7YE7p01h6BPkfNnVpv%2BVVJa0dzQBKJINSFJ9T4E7qWoUeUZhiwGTcCF4umiaMc1QAcfwx40D4wja2IwAY6pgHQcYESwiKw68SjOfCX7IwdYaxNyBsBDeKQlzIz4RgPNYSpRgtIu0YnVWYKpPDn3hZjJD81u7bPi14mjC9rbhdsWXiuTtpkvCUTJrBQCVjZ9W%2FRnf5sVc3MnsQtwFUuBKxbLXFVVauw7dckEYGt8P%2FOsqixl%2BAq4qMVjIq5fYER94imBUaPddHgRaefFacl3bo9QkcuMT5j4cPXzM31jwG4BFobX2vr&X-Amz-Signature=a2c8515f4acd920a38d50f26b192fc117c4484be91390e96731fd1b198b3e9c6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X3T7U23%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFDM4ts7cJ4kVdaeZ32Gwlp%2BLrz4bOfaNIstOldgA24AiAUZb3yc9dxJ3t5O8rIg4tcda7A%2BksV8oM6hSalDNwB9ir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMA1G0PSLvQx8GphjMKtwDBM25qwbRFtzglEc9msLV2EUVFM3crU7p106xaEbi4%2FXVkBUZkpq6lODNrgDfkebnO96LVi%2FaMY%2FsB%2FtVeDr0LyqEoCBd%2BIiRnZwpexsEYvGnF7wflK6Fus%2FQ1Qm4F3eBtqwSsDesKTRP%2BjHJJ%2FgIWaQiGz%2FAl1hLmxgf3pQljRMfJF6ClHMfxwm8yuPOOrWOD3YmsDQ78Y6Vj%2Fm8E7KSDzdSgEZZllVfwc7g7BOYnV0p9SFLH4POl4O2yu2IUK7VpotLbp6%2FwGuT3Tcjy%2FVZrrBs6KlOf7HLJt9GZKptG%2FHTOZmI0CnJjKmWYqnGiZ1CUEVgWUk%2FpQsMzqx%2FD2Xm1nFC0jDAc%2F5BKKUY%2FQ9dax7iIvO5ufKB%2BhPMhNb2yKiuMSKRQveUdxZHDJUGZQNEv6rw%2B5bUgIMomsGsdJDGNXwluczQ8TR8yMucjpYBBYAxUHIaKpQH94VSNP%2FCImNwe4zT3FK0%2BOTxJntvGLxW8LKBoS7jHOo3ksjOMmVsmE7txVfle9zYUtHgtpT0D9uiZJrj6ERfTXanbcZmm5Y7hWM8j7hSrk7YE7p01h6BPkfNnVpv%2BVVJa0dzQBKJINSFJ9T4E7qWoUeUZhiwGTcCF4umiaMc1QAcfwx40D4wja2IwAY6pgHQcYESwiKw68SjOfCX7IwdYaxNyBsBDeKQlzIz4RgPNYSpRgtIu0YnVWYKpPDn3hZjJD81u7bPi14mjC9rbhdsWXiuTtpkvCUTJrBQCVjZ9W%2FRnf5sVc3MnsQtwFUuBKxbLXFVVauw7dckEYGt8P%2FOsqixl%2BAq4qMVjIq5fYER94imBUaPddHgRaefFacl3bo9QkcuMT5j4cPXzM31jwG4BFobX2vr&X-Amz-Signature=f87f6340f538970bdc239b2a055e06781298a392f3b2493ca6795f3d134c98c8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X3T7U23%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFDM4ts7cJ4kVdaeZ32Gwlp%2BLrz4bOfaNIstOldgA24AiAUZb3yc9dxJ3t5O8rIg4tcda7A%2BksV8oM6hSalDNwB9ir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMA1G0PSLvQx8GphjMKtwDBM25qwbRFtzglEc9msLV2EUVFM3crU7p106xaEbi4%2FXVkBUZkpq6lODNrgDfkebnO96LVi%2FaMY%2FsB%2FtVeDr0LyqEoCBd%2BIiRnZwpexsEYvGnF7wflK6Fus%2FQ1Qm4F3eBtqwSsDesKTRP%2BjHJJ%2FgIWaQiGz%2FAl1hLmxgf3pQljRMfJF6ClHMfxwm8yuPOOrWOD3YmsDQ78Y6Vj%2Fm8E7KSDzdSgEZZllVfwc7g7BOYnV0p9SFLH4POl4O2yu2IUK7VpotLbp6%2FwGuT3Tcjy%2FVZrrBs6KlOf7HLJt9GZKptG%2FHTOZmI0CnJjKmWYqnGiZ1CUEVgWUk%2FpQsMzqx%2FD2Xm1nFC0jDAc%2F5BKKUY%2FQ9dax7iIvO5ufKB%2BhPMhNb2yKiuMSKRQveUdxZHDJUGZQNEv6rw%2B5bUgIMomsGsdJDGNXwluczQ8TR8yMucjpYBBYAxUHIaKpQH94VSNP%2FCImNwe4zT3FK0%2BOTxJntvGLxW8LKBoS7jHOo3ksjOMmVsmE7txVfle9zYUtHgtpT0D9uiZJrj6ERfTXanbcZmm5Y7hWM8j7hSrk7YE7p01h6BPkfNnVpv%2BVVJa0dzQBKJINSFJ9T4E7qWoUeUZhiwGTcCF4umiaMc1QAcfwx40D4wja2IwAY6pgHQcYESwiKw68SjOfCX7IwdYaxNyBsBDeKQlzIz4RgPNYSpRgtIu0YnVWYKpPDn3hZjJD81u7bPi14mjC9rbhdsWXiuTtpkvCUTJrBQCVjZ9W%2FRnf5sVc3MnsQtwFUuBKxbLXFVVauw7dckEYGt8P%2FOsqixl%2BAq4qMVjIq5fYER94imBUaPddHgRaefFacl3bo9QkcuMT5j4cPXzM31jwG4BFobX2vr&X-Amz-Signature=8a04559e2d6d957a00c42f6e7145cfd679a45ff073ebced708df7dd25e08951d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
