---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAUDUZHS%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEE7%2BtEoY%2B1oYMXfKl0TcqkeSt8EWJmhpTOb8UmYUCCHAiEApfYB0qvJiv%2BMdiQ809D3eZUqo1ZfNSplQlWY6f%2Fl9bsqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzPKNpTTWoN06pXESrcA75RBmzQJRnErE3AAt521TralDz3vqOS1ayABV%2BndKLlsionQujIgkBUE14mBayF6bBKJr1t4wl4bCcYIO1z11OimhDJqO36KBefGHH9CSPIvfbQfLQg0RauQp6uS3BfXiSmAilOuaw2KP7yAAPZ8hnsN7juoHXvRS8Jr98gfy53VH3ftNJjB%2FKD024Q4spvLejNgyLPngdFXW2gdKYDsZI%2BxNAb%2BP8qQJp5H8AjCqWYyf3D6sYjOcfXoXVFns2fAB0HOMWe8Q8JJdjYw%2FiPPfTbHS81vrE6CBUTqwPQHJcpqKd0sUmofQ3fW9yPGuxBGEtgI2j1dUYu7VarJ2Eesx%2FQNEJMvV71se1HjySmqAnLuiMWyPeFgyWt7ePhtchHWdFGD1gQkIg3Dy5jhywRvVdBYnENCopa%2FDIsOW2yF2IDDT%2F5b6fuBHJAz630r6n0x93TW019Ug%2BhkBAI7FsBeaOJkOfZXKIYZ52zYRAyt0POuy4QdkkVNAuRMVS14Z%2Frps6htOutDhSPoe2FA%2B%2BsWajp3bohGDODvaozL%2BPsaFhwdmuYgM%2Bc%2Fc9ql6wsohx3kXRLjGO3OKr%2FcSdypgNdUo6qwwzLOuFhas%2FIz0Dj2MQZMoOaF7Ij5DSeeiUvMNjE%2BcMGOqUB%2FwYLdD0ptZI0wmJzCnQcz16K1wJByvz3KHjydP1kONVkWtwxZ5vy4k2GVjY7IZH9RAFVjuABm7CzUfk%2FEkr0IARNTGg3F5f0fa5w5Gt%2Bt%2F%2F905XXuwFEnD25nuIlsA9nh62Tp2ZsCT7DdQXyaCLChcdS6bFDKk9VIkV5prXnX9VqAAFY1lBfAdJNfhii4bW4ICUBSkhzyvLRcxwG6KiDaR%2FyUWVv&X-Amz-Signature=89f1bee2d29a1cdec9ace44e9b354db34889dc71684de397de03d0559ec0ec3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAUDUZHS%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEE7%2BtEoY%2B1oYMXfKl0TcqkeSt8EWJmhpTOb8UmYUCCHAiEApfYB0qvJiv%2BMdiQ809D3eZUqo1ZfNSplQlWY6f%2Fl9bsqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzPKNpTTWoN06pXESrcA75RBmzQJRnErE3AAt521TralDz3vqOS1ayABV%2BndKLlsionQujIgkBUE14mBayF6bBKJr1t4wl4bCcYIO1z11OimhDJqO36KBefGHH9CSPIvfbQfLQg0RauQp6uS3BfXiSmAilOuaw2KP7yAAPZ8hnsN7juoHXvRS8Jr98gfy53VH3ftNJjB%2FKD024Q4spvLejNgyLPngdFXW2gdKYDsZI%2BxNAb%2BP8qQJp5H8AjCqWYyf3D6sYjOcfXoXVFns2fAB0HOMWe8Q8JJdjYw%2FiPPfTbHS81vrE6CBUTqwPQHJcpqKd0sUmofQ3fW9yPGuxBGEtgI2j1dUYu7VarJ2Eesx%2FQNEJMvV71se1HjySmqAnLuiMWyPeFgyWt7ePhtchHWdFGD1gQkIg3Dy5jhywRvVdBYnENCopa%2FDIsOW2yF2IDDT%2F5b6fuBHJAz630r6n0x93TW019Ug%2BhkBAI7FsBeaOJkOfZXKIYZ52zYRAyt0POuy4QdkkVNAuRMVS14Z%2Frps6htOutDhSPoe2FA%2B%2BsWajp3bohGDODvaozL%2BPsaFhwdmuYgM%2Bc%2Fc9ql6wsohx3kXRLjGO3OKr%2FcSdypgNdUo6qwwzLOuFhas%2FIz0Dj2MQZMoOaF7Ij5DSeeiUvMNjE%2BcMGOqUB%2FwYLdD0ptZI0wmJzCnQcz16K1wJByvz3KHjydP1kONVkWtwxZ5vy4k2GVjY7IZH9RAFVjuABm7CzUfk%2FEkr0IARNTGg3F5f0fa5w5Gt%2Bt%2F%2F905XXuwFEnD25nuIlsA9nh62Tp2ZsCT7DdQXyaCLChcdS6bFDKk9VIkV5prXnX9VqAAFY1lBfAdJNfhii4bW4ICUBSkhzyvLRcxwG6KiDaR%2FyUWVv&X-Amz-Signature=596e14e3417c4cb8ca8c8f496fe192d6fdb1287259c9a5380bc67816776628bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAUDUZHS%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEE7%2BtEoY%2B1oYMXfKl0TcqkeSt8EWJmhpTOb8UmYUCCHAiEApfYB0qvJiv%2BMdiQ809D3eZUqo1ZfNSplQlWY6f%2Fl9bsqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzPKNpTTWoN06pXESrcA75RBmzQJRnErE3AAt521TralDz3vqOS1ayABV%2BndKLlsionQujIgkBUE14mBayF6bBKJr1t4wl4bCcYIO1z11OimhDJqO36KBefGHH9CSPIvfbQfLQg0RauQp6uS3BfXiSmAilOuaw2KP7yAAPZ8hnsN7juoHXvRS8Jr98gfy53VH3ftNJjB%2FKD024Q4spvLejNgyLPngdFXW2gdKYDsZI%2BxNAb%2BP8qQJp5H8AjCqWYyf3D6sYjOcfXoXVFns2fAB0HOMWe8Q8JJdjYw%2FiPPfTbHS81vrE6CBUTqwPQHJcpqKd0sUmofQ3fW9yPGuxBGEtgI2j1dUYu7VarJ2Eesx%2FQNEJMvV71se1HjySmqAnLuiMWyPeFgyWt7ePhtchHWdFGD1gQkIg3Dy5jhywRvVdBYnENCopa%2FDIsOW2yF2IDDT%2F5b6fuBHJAz630r6n0x93TW019Ug%2BhkBAI7FsBeaOJkOfZXKIYZ52zYRAyt0POuy4QdkkVNAuRMVS14Z%2Frps6htOutDhSPoe2FA%2B%2BsWajp3bohGDODvaozL%2BPsaFhwdmuYgM%2Bc%2Fc9ql6wsohx3kXRLjGO3OKr%2FcSdypgNdUo6qwwzLOuFhas%2FIz0Dj2MQZMoOaF7Ij5DSeeiUvMNjE%2BcMGOqUB%2FwYLdD0ptZI0wmJzCnQcz16K1wJByvz3KHjydP1kONVkWtwxZ5vy4k2GVjY7IZH9RAFVjuABm7CzUfk%2FEkr0IARNTGg3F5f0fa5w5Gt%2Bt%2F%2F905XXuwFEnD25nuIlsA9nh62Tp2ZsCT7DdQXyaCLChcdS6bFDKk9VIkV5prXnX9VqAAFY1lBfAdJNfhii4bW4ICUBSkhzyvLRcxwG6KiDaR%2FyUWVv&X-Amz-Signature=dff07d1dc2deb0e60c3e4b798e64f0af435a73365ff1a711ed17a2f008d3560e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAUDUZHS%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEE7%2BtEoY%2B1oYMXfKl0TcqkeSt8EWJmhpTOb8UmYUCCHAiEApfYB0qvJiv%2BMdiQ809D3eZUqo1ZfNSplQlWY6f%2Fl9bsqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzPKNpTTWoN06pXESrcA75RBmzQJRnErE3AAt521TralDz3vqOS1ayABV%2BndKLlsionQujIgkBUE14mBayF6bBKJr1t4wl4bCcYIO1z11OimhDJqO36KBefGHH9CSPIvfbQfLQg0RauQp6uS3BfXiSmAilOuaw2KP7yAAPZ8hnsN7juoHXvRS8Jr98gfy53VH3ftNJjB%2FKD024Q4spvLejNgyLPngdFXW2gdKYDsZI%2BxNAb%2BP8qQJp5H8AjCqWYyf3D6sYjOcfXoXVFns2fAB0HOMWe8Q8JJdjYw%2FiPPfTbHS81vrE6CBUTqwPQHJcpqKd0sUmofQ3fW9yPGuxBGEtgI2j1dUYu7VarJ2Eesx%2FQNEJMvV71se1HjySmqAnLuiMWyPeFgyWt7ePhtchHWdFGD1gQkIg3Dy5jhywRvVdBYnENCopa%2FDIsOW2yF2IDDT%2F5b6fuBHJAz630r6n0x93TW019Ug%2BhkBAI7FsBeaOJkOfZXKIYZ52zYRAyt0POuy4QdkkVNAuRMVS14Z%2Frps6htOutDhSPoe2FA%2B%2BsWajp3bohGDODvaozL%2BPsaFhwdmuYgM%2Bc%2Fc9ql6wsohx3kXRLjGO3OKr%2FcSdypgNdUo6qwwzLOuFhas%2FIz0Dj2MQZMoOaF7Ij5DSeeiUvMNjE%2BcMGOqUB%2FwYLdD0ptZI0wmJzCnQcz16K1wJByvz3KHjydP1kONVkWtwxZ5vy4k2GVjY7IZH9RAFVjuABm7CzUfk%2FEkr0IARNTGg3F5f0fa5w5Gt%2Bt%2F%2F905XXuwFEnD25nuIlsA9nh62Tp2ZsCT7DdQXyaCLChcdS6bFDKk9VIkV5prXnX9VqAAFY1lBfAdJNfhii4bW4ICUBSkhzyvLRcxwG6KiDaR%2FyUWVv&X-Amz-Signature=6c052d53158ebecce93a54280a836f1f0e8663cf372c768cb7976eba6853d2f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAUDUZHS%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEE7%2BtEoY%2B1oYMXfKl0TcqkeSt8EWJmhpTOb8UmYUCCHAiEApfYB0qvJiv%2BMdiQ809D3eZUqo1ZfNSplQlWY6f%2Fl9bsqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzPKNpTTWoN06pXESrcA75RBmzQJRnErE3AAt521TralDz3vqOS1ayABV%2BndKLlsionQujIgkBUE14mBayF6bBKJr1t4wl4bCcYIO1z11OimhDJqO36KBefGHH9CSPIvfbQfLQg0RauQp6uS3BfXiSmAilOuaw2KP7yAAPZ8hnsN7juoHXvRS8Jr98gfy53VH3ftNJjB%2FKD024Q4spvLejNgyLPngdFXW2gdKYDsZI%2BxNAb%2BP8qQJp5H8AjCqWYyf3D6sYjOcfXoXVFns2fAB0HOMWe8Q8JJdjYw%2FiPPfTbHS81vrE6CBUTqwPQHJcpqKd0sUmofQ3fW9yPGuxBGEtgI2j1dUYu7VarJ2Eesx%2FQNEJMvV71se1HjySmqAnLuiMWyPeFgyWt7ePhtchHWdFGD1gQkIg3Dy5jhywRvVdBYnENCopa%2FDIsOW2yF2IDDT%2F5b6fuBHJAz630r6n0x93TW019Ug%2BhkBAI7FsBeaOJkOfZXKIYZ52zYRAyt0POuy4QdkkVNAuRMVS14Z%2Frps6htOutDhSPoe2FA%2B%2BsWajp3bohGDODvaozL%2BPsaFhwdmuYgM%2Bc%2Fc9ql6wsohx3kXRLjGO3OKr%2FcSdypgNdUo6qwwzLOuFhas%2FIz0Dj2MQZMoOaF7Ij5DSeeiUvMNjE%2BcMGOqUB%2FwYLdD0ptZI0wmJzCnQcz16K1wJByvz3KHjydP1kONVkWtwxZ5vy4k2GVjY7IZH9RAFVjuABm7CzUfk%2FEkr0IARNTGg3F5f0fa5w5Gt%2Bt%2F%2F905XXuwFEnD25nuIlsA9nh62Tp2ZsCT7DdQXyaCLChcdS6bFDKk9VIkV5prXnX9VqAAFY1lBfAdJNfhii4bW4ICUBSkhzyvLRcxwG6KiDaR%2FyUWVv&X-Amz-Signature=425707c9a5139bee316026e0ec95a932910f233ae158e2484bd159ed07a02963&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAUDUZHS%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEE7%2BtEoY%2B1oYMXfKl0TcqkeSt8EWJmhpTOb8UmYUCCHAiEApfYB0qvJiv%2BMdiQ809D3eZUqo1ZfNSplQlWY6f%2Fl9bsqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzPKNpTTWoN06pXESrcA75RBmzQJRnErE3AAt521TralDz3vqOS1ayABV%2BndKLlsionQujIgkBUE14mBayF6bBKJr1t4wl4bCcYIO1z11OimhDJqO36KBefGHH9CSPIvfbQfLQg0RauQp6uS3BfXiSmAilOuaw2KP7yAAPZ8hnsN7juoHXvRS8Jr98gfy53VH3ftNJjB%2FKD024Q4spvLejNgyLPngdFXW2gdKYDsZI%2BxNAb%2BP8qQJp5H8AjCqWYyf3D6sYjOcfXoXVFns2fAB0HOMWe8Q8JJdjYw%2FiPPfTbHS81vrE6CBUTqwPQHJcpqKd0sUmofQ3fW9yPGuxBGEtgI2j1dUYu7VarJ2Eesx%2FQNEJMvV71se1HjySmqAnLuiMWyPeFgyWt7ePhtchHWdFGD1gQkIg3Dy5jhywRvVdBYnENCopa%2FDIsOW2yF2IDDT%2F5b6fuBHJAz630r6n0x93TW019Ug%2BhkBAI7FsBeaOJkOfZXKIYZ52zYRAyt0POuy4QdkkVNAuRMVS14Z%2Frps6htOutDhSPoe2FA%2B%2BsWajp3bohGDODvaozL%2BPsaFhwdmuYgM%2Bc%2Fc9ql6wsohx3kXRLjGO3OKr%2FcSdypgNdUo6qwwzLOuFhas%2FIz0Dj2MQZMoOaF7Ij5DSeeiUvMNjE%2BcMGOqUB%2FwYLdD0ptZI0wmJzCnQcz16K1wJByvz3KHjydP1kONVkWtwxZ5vy4k2GVjY7IZH9RAFVjuABm7CzUfk%2FEkr0IARNTGg3F5f0fa5w5Gt%2Bt%2F%2F905XXuwFEnD25nuIlsA9nh62Tp2ZsCT7DdQXyaCLChcdS6bFDKk9VIkV5prXnX9VqAAFY1lBfAdJNfhii4bW4ICUBSkhzyvLRcxwG6KiDaR%2FyUWVv&X-Amz-Signature=4b88f26f174f5f534290e74e6e4743552fe9cb479c0597c8559f7c4e656f368e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAUDUZHS%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEE7%2BtEoY%2B1oYMXfKl0TcqkeSt8EWJmhpTOb8UmYUCCHAiEApfYB0qvJiv%2BMdiQ809D3eZUqo1ZfNSplQlWY6f%2Fl9bsqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzPKNpTTWoN06pXESrcA75RBmzQJRnErE3AAt521TralDz3vqOS1ayABV%2BndKLlsionQujIgkBUE14mBayF6bBKJr1t4wl4bCcYIO1z11OimhDJqO36KBefGHH9CSPIvfbQfLQg0RauQp6uS3BfXiSmAilOuaw2KP7yAAPZ8hnsN7juoHXvRS8Jr98gfy53VH3ftNJjB%2FKD024Q4spvLejNgyLPngdFXW2gdKYDsZI%2BxNAb%2BP8qQJp5H8AjCqWYyf3D6sYjOcfXoXVFns2fAB0HOMWe8Q8JJdjYw%2FiPPfTbHS81vrE6CBUTqwPQHJcpqKd0sUmofQ3fW9yPGuxBGEtgI2j1dUYu7VarJ2Eesx%2FQNEJMvV71se1HjySmqAnLuiMWyPeFgyWt7ePhtchHWdFGD1gQkIg3Dy5jhywRvVdBYnENCopa%2FDIsOW2yF2IDDT%2F5b6fuBHJAz630r6n0x93TW019Ug%2BhkBAI7FsBeaOJkOfZXKIYZ52zYRAyt0POuy4QdkkVNAuRMVS14Z%2Frps6htOutDhSPoe2FA%2B%2BsWajp3bohGDODvaozL%2BPsaFhwdmuYgM%2Bc%2Fc9ql6wsohx3kXRLjGO3OKr%2FcSdypgNdUo6qwwzLOuFhas%2FIz0Dj2MQZMoOaF7Ij5DSeeiUvMNjE%2BcMGOqUB%2FwYLdD0ptZI0wmJzCnQcz16K1wJByvz3KHjydP1kONVkWtwxZ5vy4k2GVjY7IZH9RAFVjuABm7CzUfk%2FEkr0IARNTGg3F5f0fa5w5Gt%2Bt%2F%2F905XXuwFEnD25nuIlsA9nh62Tp2ZsCT7DdQXyaCLChcdS6bFDKk9VIkV5prXnX9VqAAFY1lBfAdJNfhii4bW4ICUBSkhzyvLRcxwG6KiDaR%2FyUWVv&X-Amz-Signature=8a2121b156736a5e5d2d532107756eb3d58a36ffbd9e894c6e10e8287e92392d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
