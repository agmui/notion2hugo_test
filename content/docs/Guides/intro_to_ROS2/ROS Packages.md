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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUJMNP2E%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEc2woUXehgkHzQPHqfOQ7XtHMqLjY2P2nGcgV3x%2FdQKAiEA%2FaD3Vsd5PXVmwUOWki6tmx07yOILU4elBnWlbVJGlhYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUg69zU4hQDzWliaCrcAykxikS%2BbaPPwFGZlszxUnKlJvBdMx8Oue7qk%2BBh2yx7i8jPzJacf6DJ8UZMrPnI2%2FV27tPhc%2BUykEw7%2BvnBYvthiJXaxKYPT9KNpR1xeWRAtBj7EqgWf%2BIDpwL1kMAM08Q%2FlaoS3BRvnhX92wta3TdGPxFtX82xPEs3ne%2FkqxeTMRQEWr0o27lO3QWCJO496QgVbUhxKn3TIauJAW48ewfKbrYoOwB6duZpH6%2Biw3bRVUo99io0u5ZpKC0Nxx20qM9IVb2xL5gWhaXd6s7TBPd0ynVGjrj%2BXg%2BwY0gI6k9mNeHJ9iuuHPfSLcSQABHtQk%2BZdj0%2FtnAm3%2Bz7csCgXKyC9aREkE0KLCwb26dWiJ6RxdQxopXE%2F7nMw%2BQzc%2Bp30whYejp8eMew0v44EhjVgtm%2F4%2Bm3gSpmhj3hcxJMEwwRQ9J%2FqowOMxZj27HsT2AJseUQ4vnm%2F5FnevcOq0VDJJQJHZ0xJCA2bPSmQVzQB0%2BE98Gx%2BxgsYTUAzNRH9GBm6%2BIh3S3jl7qZPTpddtz%2Bg7UaLYTDp723vMcLlK%2FrPKkQVDRwwVkVOnnuhdhkmdXPW6Z2ExBNNlK3e6ek54bglxID%2F9ILCmH2T%2BTsT51MFy9mLikPKRkN2Iw1AC2XMNv1kL4GOqUBuf%2F6XMUg1ncm9iVGLCwbrsN7BUJgt7TCo8Fwl%2F7NCGn7rK5q14vdaNbEJnzrsQX1GhvPCQX89htn4ZjWmH1uWJQSPCJrwJgvubLfxJ%2BFPiLwSEWIwccKkfTC5FRCzkttBhk3q8KdNgDyDkUinTDD1aqYSJwGsKM0pCnyT68ZQ8SM36aOMs0Ms2q3bylDJ%2F29Io%2F7rQH5r2NnrZlrTsCLVJEKwAmD&X-Amz-Signature=594de27299809b98169ecff2e8e5c0295c3255025c2ce9482de275354b8404cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUJMNP2E%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEc2woUXehgkHzQPHqfOQ7XtHMqLjY2P2nGcgV3x%2FdQKAiEA%2FaD3Vsd5PXVmwUOWki6tmx07yOILU4elBnWlbVJGlhYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUg69zU4hQDzWliaCrcAykxikS%2BbaPPwFGZlszxUnKlJvBdMx8Oue7qk%2BBh2yx7i8jPzJacf6DJ8UZMrPnI2%2FV27tPhc%2BUykEw7%2BvnBYvthiJXaxKYPT9KNpR1xeWRAtBj7EqgWf%2BIDpwL1kMAM08Q%2FlaoS3BRvnhX92wta3TdGPxFtX82xPEs3ne%2FkqxeTMRQEWr0o27lO3QWCJO496QgVbUhxKn3TIauJAW48ewfKbrYoOwB6duZpH6%2Biw3bRVUo99io0u5ZpKC0Nxx20qM9IVb2xL5gWhaXd6s7TBPd0ynVGjrj%2BXg%2BwY0gI6k9mNeHJ9iuuHPfSLcSQABHtQk%2BZdj0%2FtnAm3%2Bz7csCgXKyC9aREkE0KLCwb26dWiJ6RxdQxopXE%2F7nMw%2BQzc%2Bp30whYejp8eMew0v44EhjVgtm%2F4%2Bm3gSpmhj3hcxJMEwwRQ9J%2FqowOMxZj27HsT2AJseUQ4vnm%2F5FnevcOq0VDJJQJHZ0xJCA2bPSmQVzQB0%2BE98Gx%2BxgsYTUAzNRH9GBm6%2BIh3S3jl7qZPTpddtz%2Bg7UaLYTDp723vMcLlK%2FrPKkQVDRwwVkVOnnuhdhkmdXPW6Z2ExBNNlK3e6ek54bglxID%2F9ILCmH2T%2BTsT51MFy9mLikPKRkN2Iw1AC2XMNv1kL4GOqUBuf%2F6XMUg1ncm9iVGLCwbrsN7BUJgt7TCo8Fwl%2F7NCGn7rK5q14vdaNbEJnzrsQX1GhvPCQX89htn4ZjWmH1uWJQSPCJrwJgvubLfxJ%2BFPiLwSEWIwccKkfTC5FRCzkttBhk3q8KdNgDyDkUinTDD1aqYSJwGsKM0pCnyT68ZQ8SM36aOMs0Ms2q3bylDJ%2F29Io%2F7rQH5r2NnrZlrTsCLVJEKwAmD&X-Amz-Signature=14619553425ba3c0c4043ce686e756d9c4012b7b6cb485908d501f55445ad971&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUJMNP2E%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEc2woUXehgkHzQPHqfOQ7XtHMqLjY2P2nGcgV3x%2FdQKAiEA%2FaD3Vsd5PXVmwUOWki6tmx07yOILU4elBnWlbVJGlhYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUg69zU4hQDzWliaCrcAykxikS%2BbaPPwFGZlszxUnKlJvBdMx8Oue7qk%2BBh2yx7i8jPzJacf6DJ8UZMrPnI2%2FV27tPhc%2BUykEw7%2BvnBYvthiJXaxKYPT9KNpR1xeWRAtBj7EqgWf%2BIDpwL1kMAM08Q%2FlaoS3BRvnhX92wta3TdGPxFtX82xPEs3ne%2FkqxeTMRQEWr0o27lO3QWCJO496QgVbUhxKn3TIauJAW48ewfKbrYoOwB6duZpH6%2Biw3bRVUo99io0u5ZpKC0Nxx20qM9IVb2xL5gWhaXd6s7TBPd0ynVGjrj%2BXg%2BwY0gI6k9mNeHJ9iuuHPfSLcSQABHtQk%2BZdj0%2FtnAm3%2Bz7csCgXKyC9aREkE0KLCwb26dWiJ6RxdQxopXE%2F7nMw%2BQzc%2Bp30whYejp8eMew0v44EhjVgtm%2F4%2Bm3gSpmhj3hcxJMEwwRQ9J%2FqowOMxZj27HsT2AJseUQ4vnm%2F5FnevcOq0VDJJQJHZ0xJCA2bPSmQVzQB0%2BE98Gx%2BxgsYTUAzNRH9GBm6%2BIh3S3jl7qZPTpddtz%2Bg7UaLYTDp723vMcLlK%2FrPKkQVDRwwVkVOnnuhdhkmdXPW6Z2ExBNNlK3e6ek54bglxID%2F9ILCmH2T%2BTsT51MFy9mLikPKRkN2Iw1AC2XMNv1kL4GOqUBuf%2F6XMUg1ncm9iVGLCwbrsN7BUJgt7TCo8Fwl%2F7NCGn7rK5q14vdaNbEJnzrsQX1GhvPCQX89htn4ZjWmH1uWJQSPCJrwJgvubLfxJ%2BFPiLwSEWIwccKkfTC5FRCzkttBhk3q8KdNgDyDkUinTDD1aqYSJwGsKM0pCnyT68ZQ8SM36aOMs0Ms2q3bylDJ%2F29Io%2F7rQH5r2NnrZlrTsCLVJEKwAmD&X-Amz-Signature=55866366a1285a5fb3a5f7422ec608e9ba8e1175d6981396a3ddc384434e2a3f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUJMNP2E%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEc2woUXehgkHzQPHqfOQ7XtHMqLjY2P2nGcgV3x%2FdQKAiEA%2FaD3Vsd5PXVmwUOWki6tmx07yOILU4elBnWlbVJGlhYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUg69zU4hQDzWliaCrcAykxikS%2BbaPPwFGZlszxUnKlJvBdMx8Oue7qk%2BBh2yx7i8jPzJacf6DJ8UZMrPnI2%2FV27tPhc%2BUykEw7%2BvnBYvthiJXaxKYPT9KNpR1xeWRAtBj7EqgWf%2BIDpwL1kMAM08Q%2FlaoS3BRvnhX92wta3TdGPxFtX82xPEs3ne%2FkqxeTMRQEWr0o27lO3QWCJO496QgVbUhxKn3TIauJAW48ewfKbrYoOwB6duZpH6%2Biw3bRVUo99io0u5ZpKC0Nxx20qM9IVb2xL5gWhaXd6s7TBPd0ynVGjrj%2BXg%2BwY0gI6k9mNeHJ9iuuHPfSLcSQABHtQk%2BZdj0%2FtnAm3%2Bz7csCgXKyC9aREkE0KLCwb26dWiJ6RxdQxopXE%2F7nMw%2BQzc%2Bp30whYejp8eMew0v44EhjVgtm%2F4%2Bm3gSpmhj3hcxJMEwwRQ9J%2FqowOMxZj27HsT2AJseUQ4vnm%2F5FnevcOq0VDJJQJHZ0xJCA2bPSmQVzQB0%2BE98Gx%2BxgsYTUAzNRH9GBm6%2BIh3S3jl7qZPTpddtz%2Bg7UaLYTDp723vMcLlK%2FrPKkQVDRwwVkVOnnuhdhkmdXPW6Z2ExBNNlK3e6ek54bglxID%2F9ILCmH2T%2BTsT51MFy9mLikPKRkN2Iw1AC2XMNv1kL4GOqUBuf%2F6XMUg1ncm9iVGLCwbrsN7BUJgt7TCo8Fwl%2F7NCGn7rK5q14vdaNbEJnzrsQX1GhvPCQX89htn4ZjWmH1uWJQSPCJrwJgvubLfxJ%2BFPiLwSEWIwccKkfTC5FRCzkttBhk3q8KdNgDyDkUinTDD1aqYSJwGsKM0pCnyT68ZQ8SM36aOMs0Ms2q3bylDJ%2F29Io%2F7rQH5r2NnrZlrTsCLVJEKwAmD&X-Amz-Signature=f12285d5959321c741ba4981f3948ddd1a6903f4995bd5da7885d8c04c3f5f91&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUJMNP2E%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEc2woUXehgkHzQPHqfOQ7XtHMqLjY2P2nGcgV3x%2FdQKAiEA%2FaD3Vsd5PXVmwUOWki6tmx07yOILU4elBnWlbVJGlhYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUg69zU4hQDzWliaCrcAykxikS%2BbaPPwFGZlszxUnKlJvBdMx8Oue7qk%2BBh2yx7i8jPzJacf6DJ8UZMrPnI2%2FV27tPhc%2BUykEw7%2BvnBYvthiJXaxKYPT9KNpR1xeWRAtBj7EqgWf%2BIDpwL1kMAM08Q%2FlaoS3BRvnhX92wta3TdGPxFtX82xPEs3ne%2FkqxeTMRQEWr0o27lO3QWCJO496QgVbUhxKn3TIauJAW48ewfKbrYoOwB6duZpH6%2Biw3bRVUo99io0u5ZpKC0Nxx20qM9IVb2xL5gWhaXd6s7TBPd0ynVGjrj%2BXg%2BwY0gI6k9mNeHJ9iuuHPfSLcSQABHtQk%2BZdj0%2FtnAm3%2Bz7csCgXKyC9aREkE0KLCwb26dWiJ6RxdQxopXE%2F7nMw%2BQzc%2Bp30whYejp8eMew0v44EhjVgtm%2F4%2Bm3gSpmhj3hcxJMEwwRQ9J%2FqowOMxZj27HsT2AJseUQ4vnm%2F5FnevcOq0VDJJQJHZ0xJCA2bPSmQVzQB0%2BE98Gx%2BxgsYTUAzNRH9GBm6%2BIh3S3jl7qZPTpddtz%2Bg7UaLYTDp723vMcLlK%2FrPKkQVDRwwVkVOnnuhdhkmdXPW6Z2ExBNNlK3e6ek54bglxID%2F9ILCmH2T%2BTsT51MFy9mLikPKRkN2Iw1AC2XMNv1kL4GOqUBuf%2F6XMUg1ncm9iVGLCwbrsN7BUJgt7TCo8Fwl%2F7NCGn7rK5q14vdaNbEJnzrsQX1GhvPCQX89htn4ZjWmH1uWJQSPCJrwJgvubLfxJ%2BFPiLwSEWIwccKkfTC5FRCzkttBhk3q8KdNgDyDkUinTDD1aqYSJwGsKM0pCnyT68ZQ8SM36aOMs0Ms2q3bylDJ%2F29Io%2F7rQH5r2NnrZlrTsCLVJEKwAmD&X-Amz-Signature=06903f9304c88220dc9c23ee8ebe8c61cac0bc3923609216fa466ee59a0f7b41&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUJMNP2E%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEc2woUXehgkHzQPHqfOQ7XtHMqLjY2P2nGcgV3x%2FdQKAiEA%2FaD3Vsd5PXVmwUOWki6tmx07yOILU4elBnWlbVJGlhYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUg69zU4hQDzWliaCrcAykxikS%2BbaPPwFGZlszxUnKlJvBdMx8Oue7qk%2BBh2yx7i8jPzJacf6DJ8UZMrPnI2%2FV27tPhc%2BUykEw7%2BvnBYvthiJXaxKYPT9KNpR1xeWRAtBj7EqgWf%2BIDpwL1kMAM08Q%2FlaoS3BRvnhX92wta3TdGPxFtX82xPEs3ne%2FkqxeTMRQEWr0o27lO3QWCJO496QgVbUhxKn3TIauJAW48ewfKbrYoOwB6duZpH6%2Biw3bRVUo99io0u5ZpKC0Nxx20qM9IVb2xL5gWhaXd6s7TBPd0ynVGjrj%2BXg%2BwY0gI6k9mNeHJ9iuuHPfSLcSQABHtQk%2BZdj0%2FtnAm3%2Bz7csCgXKyC9aREkE0KLCwb26dWiJ6RxdQxopXE%2F7nMw%2BQzc%2Bp30whYejp8eMew0v44EhjVgtm%2F4%2Bm3gSpmhj3hcxJMEwwRQ9J%2FqowOMxZj27HsT2AJseUQ4vnm%2F5FnevcOq0VDJJQJHZ0xJCA2bPSmQVzQB0%2BE98Gx%2BxgsYTUAzNRH9GBm6%2BIh3S3jl7qZPTpddtz%2Bg7UaLYTDp723vMcLlK%2FrPKkQVDRwwVkVOnnuhdhkmdXPW6Z2ExBNNlK3e6ek54bglxID%2F9ILCmH2T%2BTsT51MFy9mLikPKRkN2Iw1AC2XMNv1kL4GOqUBuf%2F6XMUg1ncm9iVGLCwbrsN7BUJgt7TCo8Fwl%2F7NCGn7rK5q14vdaNbEJnzrsQX1GhvPCQX89htn4ZjWmH1uWJQSPCJrwJgvubLfxJ%2BFPiLwSEWIwccKkfTC5FRCzkttBhk3q8KdNgDyDkUinTDD1aqYSJwGsKM0pCnyT68ZQ8SM36aOMs0Ms2q3bylDJ%2F29Io%2F7rQH5r2NnrZlrTsCLVJEKwAmD&X-Amz-Signature=1cb8473dcef45ca80c131182cd35fb57351fa927e62cce69255e48c27fc93348&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUJMNP2E%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEc2woUXehgkHzQPHqfOQ7XtHMqLjY2P2nGcgV3x%2FdQKAiEA%2FaD3Vsd5PXVmwUOWki6tmx07yOILU4elBnWlbVJGlhYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUg69zU4hQDzWliaCrcAykxikS%2BbaPPwFGZlszxUnKlJvBdMx8Oue7qk%2BBh2yx7i8jPzJacf6DJ8UZMrPnI2%2FV27tPhc%2BUykEw7%2BvnBYvthiJXaxKYPT9KNpR1xeWRAtBj7EqgWf%2BIDpwL1kMAM08Q%2FlaoS3BRvnhX92wta3TdGPxFtX82xPEs3ne%2FkqxeTMRQEWr0o27lO3QWCJO496QgVbUhxKn3TIauJAW48ewfKbrYoOwB6duZpH6%2Biw3bRVUo99io0u5ZpKC0Nxx20qM9IVb2xL5gWhaXd6s7TBPd0ynVGjrj%2BXg%2BwY0gI6k9mNeHJ9iuuHPfSLcSQABHtQk%2BZdj0%2FtnAm3%2Bz7csCgXKyC9aREkE0KLCwb26dWiJ6RxdQxopXE%2F7nMw%2BQzc%2Bp30whYejp8eMew0v44EhjVgtm%2F4%2Bm3gSpmhj3hcxJMEwwRQ9J%2FqowOMxZj27HsT2AJseUQ4vnm%2F5FnevcOq0VDJJQJHZ0xJCA2bPSmQVzQB0%2BE98Gx%2BxgsYTUAzNRH9GBm6%2BIh3S3jl7qZPTpddtz%2Bg7UaLYTDp723vMcLlK%2FrPKkQVDRwwVkVOnnuhdhkmdXPW6Z2ExBNNlK3e6ek54bglxID%2F9ILCmH2T%2BTsT51MFy9mLikPKRkN2Iw1AC2XMNv1kL4GOqUBuf%2F6XMUg1ncm9iVGLCwbrsN7BUJgt7TCo8Fwl%2F7NCGn7rK5q14vdaNbEJnzrsQX1GhvPCQX89htn4ZjWmH1uWJQSPCJrwJgvubLfxJ%2BFPiLwSEWIwccKkfTC5FRCzkttBhk3q8KdNgDyDkUinTDD1aqYSJwGsKM0pCnyT68ZQ8SM36aOMs0Ms2q3bylDJ%2F29Io%2F7rQH5r2NnrZlrTsCLVJEKwAmD&X-Amz-Signature=2c18bf6e8059bed603d6b6293249217351246e803b8a41355956b5f49bf36a31&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
