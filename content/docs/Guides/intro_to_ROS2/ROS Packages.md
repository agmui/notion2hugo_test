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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRLKMAE6%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDJGXQrel3J0DK0frW2uSqkSweFpVQBL2RBPNk8SPkrmwIhAIkjwkCwCdXW1LeWKdJF%2Bk%2B%2BgVcfCp3yW6g5eVl%2Fq8ZbKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FRfWE2vbloQETKAgq3AMyvH3Ip39iW06k0GiZYdoG8q1CBmk%2BUbvPVPcbSw9xDUdTIZra7IuphZQA8sR9MsOVx0Q88%2BLwHdERWzJj5cO5gW62jybVfT7ZM9GJcs8oMsfOiRRy%2BwiwUCmHw7CdFAB7ENdLpocK10C3Br8upSKgoUFcjZDpzclbEZfXrtEwuimuXY0zJ8fzXLCTdqtKDGVDJWLuwpVMzv5WvvJ2VhL3bizGSXxxbSODjvMF01iTiMLI1ti4RLjRph2TnI37rrcfQYPUR4wWO09DKzxsGbBWvS99eybRbb0aPV0n9u%2BbOdx96F4r3wi7qurAOTlLjGA%2BPPu%2BjxqS9oqeHmCpWzUpkVNTyOn0BlrmI3spUvT71dJAvH3VZ17bGPHd%2Bli5TDRWd29xrD7d4h8LIuUsz3BIDB3Scdme0mYFCWtYZUXaY5%2F3N2VLr2DTEgrX%2F0mjVncF3%2B2%2BqQ%2BVHrnSV6yXDdPOBdiTpBd%2BoTfUJlknIKAnhxQsuyDHAlVQaC6ea61eDVzLMO4ii2GtE5lEJGgH96kgG1tQqv%2BRSxCiNt551Ii%2BiR9cSyuzX2XFuYUYpi54AsdiW36bPw3L6kDKOP0XEgZSr9eRhHzAi8MJLXQY0BBSYz0t7yTtZqWhty0ExTCh25XABjqkATt0rpcc2Pp50ZwKl0Yu62KvK0uKEVGc6bgLqVhLJVE5lZ9Znl9o3PpYzxAvXRawXt8wqNrxH2Q5D%2BVh9EDdXfEQ56N4qLcnI1pNCVxaI02HzuPu%2Bxs%2FBmesUypFWmNPc0SwFw3JdPf%2FH%2BONDGojjdV8AxlU7d0s4N2yjlgIm%2B6AMn4oqZTIzwYC6HMkAjJsxfIY2eJhlU%2F6avonbP00r0yjJdPq&X-Amz-Signature=b2f9cc06634c24eb2ba718c669de4eee05da661f76aec8cbf3c10e6fb9c03934&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRLKMAE6%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDJGXQrel3J0DK0frW2uSqkSweFpVQBL2RBPNk8SPkrmwIhAIkjwkCwCdXW1LeWKdJF%2Bk%2B%2BgVcfCp3yW6g5eVl%2Fq8ZbKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FRfWE2vbloQETKAgq3AMyvH3Ip39iW06k0GiZYdoG8q1CBmk%2BUbvPVPcbSw9xDUdTIZra7IuphZQA8sR9MsOVx0Q88%2BLwHdERWzJj5cO5gW62jybVfT7ZM9GJcs8oMsfOiRRy%2BwiwUCmHw7CdFAB7ENdLpocK10C3Br8upSKgoUFcjZDpzclbEZfXrtEwuimuXY0zJ8fzXLCTdqtKDGVDJWLuwpVMzv5WvvJ2VhL3bizGSXxxbSODjvMF01iTiMLI1ti4RLjRph2TnI37rrcfQYPUR4wWO09DKzxsGbBWvS99eybRbb0aPV0n9u%2BbOdx96F4r3wi7qurAOTlLjGA%2BPPu%2BjxqS9oqeHmCpWzUpkVNTyOn0BlrmI3spUvT71dJAvH3VZ17bGPHd%2Bli5TDRWd29xrD7d4h8LIuUsz3BIDB3Scdme0mYFCWtYZUXaY5%2F3N2VLr2DTEgrX%2F0mjVncF3%2B2%2BqQ%2BVHrnSV6yXDdPOBdiTpBd%2BoTfUJlknIKAnhxQsuyDHAlVQaC6ea61eDVzLMO4ii2GtE5lEJGgH96kgG1tQqv%2BRSxCiNt551Ii%2BiR9cSyuzX2XFuYUYpi54AsdiW36bPw3L6kDKOP0XEgZSr9eRhHzAi8MJLXQY0BBSYz0t7yTtZqWhty0ExTCh25XABjqkATt0rpcc2Pp50ZwKl0Yu62KvK0uKEVGc6bgLqVhLJVE5lZ9Znl9o3PpYzxAvXRawXt8wqNrxH2Q5D%2BVh9EDdXfEQ56N4qLcnI1pNCVxaI02HzuPu%2Bxs%2FBmesUypFWmNPc0SwFw3JdPf%2FH%2BONDGojjdV8AxlU7d0s4N2yjlgIm%2B6AMn4oqZTIzwYC6HMkAjJsxfIY2eJhlU%2F6avonbP00r0yjJdPq&X-Amz-Signature=c7aeceb69caacb802f599d249e09b434ff4c78a7a289496d6dd02555bedc675d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRLKMAE6%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDJGXQrel3J0DK0frW2uSqkSweFpVQBL2RBPNk8SPkrmwIhAIkjwkCwCdXW1LeWKdJF%2Bk%2B%2BgVcfCp3yW6g5eVl%2Fq8ZbKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FRfWE2vbloQETKAgq3AMyvH3Ip39iW06k0GiZYdoG8q1CBmk%2BUbvPVPcbSw9xDUdTIZra7IuphZQA8sR9MsOVx0Q88%2BLwHdERWzJj5cO5gW62jybVfT7ZM9GJcs8oMsfOiRRy%2BwiwUCmHw7CdFAB7ENdLpocK10C3Br8upSKgoUFcjZDpzclbEZfXrtEwuimuXY0zJ8fzXLCTdqtKDGVDJWLuwpVMzv5WvvJ2VhL3bizGSXxxbSODjvMF01iTiMLI1ti4RLjRph2TnI37rrcfQYPUR4wWO09DKzxsGbBWvS99eybRbb0aPV0n9u%2BbOdx96F4r3wi7qurAOTlLjGA%2BPPu%2BjxqS9oqeHmCpWzUpkVNTyOn0BlrmI3spUvT71dJAvH3VZ17bGPHd%2Bli5TDRWd29xrD7d4h8LIuUsz3BIDB3Scdme0mYFCWtYZUXaY5%2F3N2VLr2DTEgrX%2F0mjVncF3%2B2%2BqQ%2BVHrnSV6yXDdPOBdiTpBd%2BoTfUJlknIKAnhxQsuyDHAlVQaC6ea61eDVzLMO4ii2GtE5lEJGgH96kgG1tQqv%2BRSxCiNt551Ii%2BiR9cSyuzX2XFuYUYpi54AsdiW36bPw3L6kDKOP0XEgZSr9eRhHzAi8MJLXQY0BBSYz0t7yTtZqWhty0ExTCh25XABjqkATt0rpcc2Pp50ZwKl0Yu62KvK0uKEVGc6bgLqVhLJVE5lZ9Znl9o3PpYzxAvXRawXt8wqNrxH2Q5D%2BVh9EDdXfEQ56N4qLcnI1pNCVxaI02HzuPu%2Bxs%2FBmesUypFWmNPc0SwFw3JdPf%2FH%2BONDGojjdV8AxlU7d0s4N2yjlgIm%2B6AMn4oqZTIzwYC6HMkAjJsxfIY2eJhlU%2F6avonbP00r0yjJdPq&X-Amz-Signature=91f49b9be1baad127869568d3c9fb56eb728995e05b44196115eb5852ae599aa&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRLKMAE6%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDJGXQrel3J0DK0frW2uSqkSweFpVQBL2RBPNk8SPkrmwIhAIkjwkCwCdXW1LeWKdJF%2Bk%2B%2BgVcfCp3yW6g5eVl%2Fq8ZbKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FRfWE2vbloQETKAgq3AMyvH3Ip39iW06k0GiZYdoG8q1CBmk%2BUbvPVPcbSw9xDUdTIZra7IuphZQA8sR9MsOVx0Q88%2BLwHdERWzJj5cO5gW62jybVfT7ZM9GJcs8oMsfOiRRy%2BwiwUCmHw7CdFAB7ENdLpocK10C3Br8upSKgoUFcjZDpzclbEZfXrtEwuimuXY0zJ8fzXLCTdqtKDGVDJWLuwpVMzv5WvvJ2VhL3bizGSXxxbSODjvMF01iTiMLI1ti4RLjRph2TnI37rrcfQYPUR4wWO09DKzxsGbBWvS99eybRbb0aPV0n9u%2BbOdx96F4r3wi7qurAOTlLjGA%2BPPu%2BjxqS9oqeHmCpWzUpkVNTyOn0BlrmI3spUvT71dJAvH3VZ17bGPHd%2Bli5TDRWd29xrD7d4h8LIuUsz3BIDB3Scdme0mYFCWtYZUXaY5%2F3N2VLr2DTEgrX%2F0mjVncF3%2B2%2BqQ%2BVHrnSV6yXDdPOBdiTpBd%2BoTfUJlknIKAnhxQsuyDHAlVQaC6ea61eDVzLMO4ii2GtE5lEJGgH96kgG1tQqv%2BRSxCiNt551Ii%2BiR9cSyuzX2XFuYUYpi54AsdiW36bPw3L6kDKOP0XEgZSr9eRhHzAi8MJLXQY0BBSYz0t7yTtZqWhty0ExTCh25XABjqkATt0rpcc2Pp50ZwKl0Yu62KvK0uKEVGc6bgLqVhLJVE5lZ9Znl9o3PpYzxAvXRawXt8wqNrxH2Q5D%2BVh9EDdXfEQ56N4qLcnI1pNCVxaI02HzuPu%2Bxs%2FBmesUypFWmNPc0SwFw3JdPf%2FH%2BONDGojjdV8AxlU7d0s4N2yjlgIm%2B6AMn4oqZTIzwYC6HMkAjJsxfIY2eJhlU%2F6avonbP00r0yjJdPq&X-Amz-Signature=5ac5e71a6ab653639eb461c7d1b65b9cb4701c0bd9e11665186f8f243407235e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRLKMAE6%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDJGXQrel3J0DK0frW2uSqkSweFpVQBL2RBPNk8SPkrmwIhAIkjwkCwCdXW1LeWKdJF%2Bk%2B%2BgVcfCp3yW6g5eVl%2Fq8ZbKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FRfWE2vbloQETKAgq3AMyvH3Ip39iW06k0GiZYdoG8q1CBmk%2BUbvPVPcbSw9xDUdTIZra7IuphZQA8sR9MsOVx0Q88%2BLwHdERWzJj5cO5gW62jybVfT7ZM9GJcs8oMsfOiRRy%2BwiwUCmHw7CdFAB7ENdLpocK10C3Br8upSKgoUFcjZDpzclbEZfXrtEwuimuXY0zJ8fzXLCTdqtKDGVDJWLuwpVMzv5WvvJ2VhL3bizGSXxxbSODjvMF01iTiMLI1ti4RLjRph2TnI37rrcfQYPUR4wWO09DKzxsGbBWvS99eybRbb0aPV0n9u%2BbOdx96F4r3wi7qurAOTlLjGA%2BPPu%2BjxqS9oqeHmCpWzUpkVNTyOn0BlrmI3spUvT71dJAvH3VZ17bGPHd%2Bli5TDRWd29xrD7d4h8LIuUsz3BIDB3Scdme0mYFCWtYZUXaY5%2F3N2VLr2DTEgrX%2F0mjVncF3%2B2%2BqQ%2BVHrnSV6yXDdPOBdiTpBd%2BoTfUJlknIKAnhxQsuyDHAlVQaC6ea61eDVzLMO4ii2GtE5lEJGgH96kgG1tQqv%2BRSxCiNt551Ii%2BiR9cSyuzX2XFuYUYpi54AsdiW36bPw3L6kDKOP0XEgZSr9eRhHzAi8MJLXQY0BBSYz0t7yTtZqWhty0ExTCh25XABjqkATt0rpcc2Pp50ZwKl0Yu62KvK0uKEVGc6bgLqVhLJVE5lZ9Znl9o3PpYzxAvXRawXt8wqNrxH2Q5D%2BVh9EDdXfEQ56N4qLcnI1pNCVxaI02HzuPu%2Bxs%2FBmesUypFWmNPc0SwFw3JdPf%2FH%2BONDGojjdV8AxlU7d0s4N2yjlgIm%2B6AMn4oqZTIzwYC6HMkAjJsxfIY2eJhlU%2F6avonbP00r0yjJdPq&X-Amz-Signature=9517de116a543a540c468648200b512195078a312886ae3e6a7bbed111ef5f21&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRLKMAE6%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDJGXQrel3J0DK0frW2uSqkSweFpVQBL2RBPNk8SPkrmwIhAIkjwkCwCdXW1LeWKdJF%2Bk%2B%2BgVcfCp3yW6g5eVl%2Fq8ZbKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FRfWE2vbloQETKAgq3AMyvH3Ip39iW06k0GiZYdoG8q1CBmk%2BUbvPVPcbSw9xDUdTIZra7IuphZQA8sR9MsOVx0Q88%2BLwHdERWzJj5cO5gW62jybVfT7ZM9GJcs8oMsfOiRRy%2BwiwUCmHw7CdFAB7ENdLpocK10C3Br8upSKgoUFcjZDpzclbEZfXrtEwuimuXY0zJ8fzXLCTdqtKDGVDJWLuwpVMzv5WvvJ2VhL3bizGSXxxbSODjvMF01iTiMLI1ti4RLjRph2TnI37rrcfQYPUR4wWO09DKzxsGbBWvS99eybRbb0aPV0n9u%2BbOdx96F4r3wi7qurAOTlLjGA%2BPPu%2BjxqS9oqeHmCpWzUpkVNTyOn0BlrmI3spUvT71dJAvH3VZ17bGPHd%2Bli5TDRWd29xrD7d4h8LIuUsz3BIDB3Scdme0mYFCWtYZUXaY5%2F3N2VLr2DTEgrX%2F0mjVncF3%2B2%2BqQ%2BVHrnSV6yXDdPOBdiTpBd%2BoTfUJlknIKAnhxQsuyDHAlVQaC6ea61eDVzLMO4ii2GtE5lEJGgH96kgG1tQqv%2BRSxCiNt551Ii%2BiR9cSyuzX2XFuYUYpi54AsdiW36bPw3L6kDKOP0XEgZSr9eRhHzAi8MJLXQY0BBSYz0t7yTtZqWhty0ExTCh25XABjqkATt0rpcc2Pp50ZwKl0Yu62KvK0uKEVGc6bgLqVhLJVE5lZ9Znl9o3PpYzxAvXRawXt8wqNrxH2Q5D%2BVh9EDdXfEQ56N4qLcnI1pNCVxaI02HzuPu%2Bxs%2FBmesUypFWmNPc0SwFw3JdPf%2FH%2BONDGojjdV8AxlU7d0s4N2yjlgIm%2B6AMn4oqZTIzwYC6HMkAjJsxfIY2eJhlU%2F6avonbP00r0yjJdPq&X-Amz-Signature=22c5e19828e66c25599fe4973e1af6c4c60693e07b88c14027151e6f8caf144e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRLKMAE6%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDJGXQrel3J0DK0frW2uSqkSweFpVQBL2RBPNk8SPkrmwIhAIkjwkCwCdXW1LeWKdJF%2Bk%2B%2BgVcfCp3yW6g5eVl%2Fq8ZbKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FRfWE2vbloQETKAgq3AMyvH3Ip39iW06k0GiZYdoG8q1CBmk%2BUbvPVPcbSw9xDUdTIZra7IuphZQA8sR9MsOVx0Q88%2BLwHdERWzJj5cO5gW62jybVfT7ZM9GJcs8oMsfOiRRy%2BwiwUCmHw7CdFAB7ENdLpocK10C3Br8upSKgoUFcjZDpzclbEZfXrtEwuimuXY0zJ8fzXLCTdqtKDGVDJWLuwpVMzv5WvvJ2VhL3bizGSXxxbSODjvMF01iTiMLI1ti4RLjRph2TnI37rrcfQYPUR4wWO09DKzxsGbBWvS99eybRbb0aPV0n9u%2BbOdx96F4r3wi7qurAOTlLjGA%2BPPu%2BjxqS9oqeHmCpWzUpkVNTyOn0BlrmI3spUvT71dJAvH3VZ17bGPHd%2Bli5TDRWd29xrD7d4h8LIuUsz3BIDB3Scdme0mYFCWtYZUXaY5%2F3N2VLr2DTEgrX%2F0mjVncF3%2B2%2BqQ%2BVHrnSV6yXDdPOBdiTpBd%2BoTfUJlknIKAnhxQsuyDHAlVQaC6ea61eDVzLMO4ii2GtE5lEJGgH96kgG1tQqv%2BRSxCiNt551Ii%2BiR9cSyuzX2XFuYUYpi54AsdiW36bPw3L6kDKOP0XEgZSr9eRhHzAi8MJLXQY0BBSYz0t7yTtZqWhty0ExTCh25XABjqkATt0rpcc2Pp50ZwKl0Yu62KvK0uKEVGc6bgLqVhLJVE5lZ9Znl9o3PpYzxAvXRawXt8wqNrxH2Q5D%2BVh9EDdXfEQ56N4qLcnI1pNCVxaI02HzuPu%2Bxs%2FBmesUypFWmNPc0SwFw3JdPf%2FH%2BONDGojjdV8AxlU7d0s4N2yjlgIm%2B6AMn4oqZTIzwYC6HMkAjJsxfIY2eJhlU%2F6avonbP00r0yjJdPq&X-Amz-Signature=04c8fe5f0bbf149c9f97034cb7956bf196697c1974a4056d45de85aa2f269ac2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
