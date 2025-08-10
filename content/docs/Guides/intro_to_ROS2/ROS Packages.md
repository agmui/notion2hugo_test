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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEL437OY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6nEP6RMWt5Ss2jZX%2Fy%2FuX9%2FKWTE5j5%2FLEap6gx1eUYAiAScKzsEUmqT9SmR0aPcAa85%2BsO9LtYJ16OzU8btw5vliqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWTEtTjshfexv%2F5d7KtwDdXxQIV8CglpyLC1oSEfc9akgcKZiZ3TzaOORCkkgLJFokShebOuE58kAs1RZK5YsVqQv88fqtHioxtWXNkgSWPZKwufQ2rllU0%2FS8X%2Fsfs9CgFeMTWu5GFp8%2Fu8rTMzM09jbH6%2Fbdz5RJM2cTkU5iLaT0k0RE6nkPLYR7ycu9DhN%2Fe5IxFxI0RIoepnMG9QvSpCn4ERP2ul2dZ2x1ofsnzgsSmHBqURfsGOgNA3KRJbntWZf2FpcxwQwQieZp0OSYKjNnAeShmBuXdFtpuO1IpwtOke1nBFDgvd8vYg7f5GPi7v0vcfpVIGX6H4t1WtaRd7pT2B3yaEWeDWcKy2flyi5%2BMb5YaxpvFwDNIE55Z%2Ft1XxFbGBjMwHoAlfhCSQ1wglcu6Hv8akx7jiyniIIVYd1jqTxIg6TgZwo%2BCB%2Bq8%2F7l1yHxQfDiZK4I3pNjgN4xAMGgBzJ%2BPIc9QTKUtUORC2qd2cOiENZLfq%2FdaF5FBOV1LUdBI5i03jodvOXdQdw3PE6QGLmHSE3W1NsMYo2rdh8Xq%2BcW%2Bz%2BsZc2r0mzxtmkVkWbDcu1%2B0gcDWQ2Vq8TUIuwondcGSt8p%2Bva6f9QFfekyq2VSxp7DpKtZ%2BbGoUZY8j4QopimJYlY%2B5wwsPXgxAY6pgHfyIR4yZ%2BGhPBIHxLzTsPD8duAj9qEQ%2FIw3wdLGlxTUjirLn89OXf31PUqzU5FFwLe9KkfgHvd5E9aJ4ks5k%2FdDoo52Afb630E3QGrq8%2BJgWXa9TRLWdGxfka%2Ff23joNfNIPuY498JYI%2B9ShcA5uzx7%2FYZTihnaN7NoVvs4t8U%2F1by%2B2rMMi7vjzA8B2g08Zpav%2BA5v5lbWR2L4tup6n6n8N5Exu7o&X-Amz-Signature=3620487fdedff1cdde62b9575f52d9a70026705eab67c9b04d288ce22902ab26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEL437OY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6nEP6RMWt5Ss2jZX%2Fy%2FuX9%2FKWTE5j5%2FLEap6gx1eUYAiAScKzsEUmqT9SmR0aPcAa85%2BsO9LtYJ16OzU8btw5vliqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWTEtTjshfexv%2F5d7KtwDdXxQIV8CglpyLC1oSEfc9akgcKZiZ3TzaOORCkkgLJFokShebOuE58kAs1RZK5YsVqQv88fqtHioxtWXNkgSWPZKwufQ2rllU0%2FS8X%2Fsfs9CgFeMTWu5GFp8%2Fu8rTMzM09jbH6%2Fbdz5RJM2cTkU5iLaT0k0RE6nkPLYR7ycu9DhN%2Fe5IxFxI0RIoepnMG9QvSpCn4ERP2ul2dZ2x1ofsnzgsSmHBqURfsGOgNA3KRJbntWZf2FpcxwQwQieZp0OSYKjNnAeShmBuXdFtpuO1IpwtOke1nBFDgvd8vYg7f5GPi7v0vcfpVIGX6H4t1WtaRd7pT2B3yaEWeDWcKy2flyi5%2BMb5YaxpvFwDNIE55Z%2Ft1XxFbGBjMwHoAlfhCSQ1wglcu6Hv8akx7jiyniIIVYd1jqTxIg6TgZwo%2BCB%2Bq8%2F7l1yHxQfDiZK4I3pNjgN4xAMGgBzJ%2BPIc9QTKUtUORC2qd2cOiENZLfq%2FdaF5FBOV1LUdBI5i03jodvOXdQdw3PE6QGLmHSE3W1NsMYo2rdh8Xq%2BcW%2Bz%2BsZc2r0mzxtmkVkWbDcu1%2B0gcDWQ2Vq8TUIuwondcGSt8p%2Bva6f9QFfekyq2VSxp7DpKtZ%2BbGoUZY8j4QopimJYlY%2B5wwsPXgxAY6pgHfyIR4yZ%2BGhPBIHxLzTsPD8duAj9qEQ%2FIw3wdLGlxTUjirLn89OXf31PUqzU5FFwLe9KkfgHvd5E9aJ4ks5k%2FdDoo52Afb630E3QGrq8%2BJgWXa9TRLWdGxfka%2Ff23joNfNIPuY498JYI%2B9ShcA5uzx7%2FYZTihnaN7NoVvs4t8U%2F1by%2B2rMMi7vjzA8B2g08Zpav%2BA5v5lbWR2L4tup6n6n8N5Exu7o&X-Amz-Signature=46da3ff86e9be55452fc7e9895a3e0081d3c41f92218d7ff9ec77d223302ce24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEL437OY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6nEP6RMWt5Ss2jZX%2Fy%2FuX9%2FKWTE5j5%2FLEap6gx1eUYAiAScKzsEUmqT9SmR0aPcAa85%2BsO9LtYJ16OzU8btw5vliqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWTEtTjshfexv%2F5d7KtwDdXxQIV8CglpyLC1oSEfc9akgcKZiZ3TzaOORCkkgLJFokShebOuE58kAs1RZK5YsVqQv88fqtHioxtWXNkgSWPZKwufQ2rllU0%2FS8X%2Fsfs9CgFeMTWu5GFp8%2Fu8rTMzM09jbH6%2Fbdz5RJM2cTkU5iLaT0k0RE6nkPLYR7ycu9DhN%2Fe5IxFxI0RIoepnMG9QvSpCn4ERP2ul2dZ2x1ofsnzgsSmHBqURfsGOgNA3KRJbntWZf2FpcxwQwQieZp0OSYKjNnAeShmBuXdFtpuO1IpwtOke1nBFDgvd8vYg7f5GPi7v0vcfpVIGX6H4t1WtaRd7pT2B3yaEWeDWcKy2flyi5%2BMb5YaxpvFwDNIE55Z%2Ft1XxFbGBjMwHoAlfhCSQ1wglcu6Hv8akx7jiyniIIVYd1jqTxIg6TgZwo%2BCB%2Bq8%2F7l1yHxQfDiZK4I3pNjgN4xAMGgBzJ%2BPIc9QTKUtUORC2qd2cOiENZLfq%2FdaF5FBOV1LUdBI5i03jodvOXdQdw3PE6QGLmHSE3W1NsMYo2rdh8Xq%2BcW%2Bz%2BsZc2r0mzxtmkVkWbDcu1%2B0gcDWQ2Vq8TUIuwondcGSt8p%2Bva6f9QFfekyq2VSxp7DpKtZ%2BbGoUZY8j4QopimJYlY%2B5wwsPXgxAY6pgHfyIR4yZ%2BGhPBIHxLzTsPD8duAj9qEQ%2FIw3wdLGlxTUjirLn89OXf31PUqzU5FFwLe9KkfgHvd5E9aJ4ks5k%2FdDoo52Afb630E3QGrq8%2BJgWXa9TRLWdGxfka%2Ff23joNfNIPuY498JYI%2B9ShcA5uzx7%2FYZTihnaN7NoVvs4t8U%2F1by%2B2rMMi7vjzA8B2g08Zpav%2BA5v5lbWR2L4tup6n6n8N5Exu7o&X-Amz-Signature=0e257cc4cfdc6f31527eff5e43055f016f34dae7834f1b30393ff2d3dd1dc7f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEL437OY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6nEP6RMWt5Ss2jZX%2Fy%2FuX9%2FKWTE5j5%2FLEap6gx1eUYAiAScKzsEUmqT9SmR0aPcAa85%2BsO9LtYJ16OzU8btw5vliqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWTEtTjshfexv%2F5d7KtwDdXxQIV8CglpyLC1oSEfc9akgcKZiZ3TzaOORCkkgLJFokShebOuE58kAs1RZK5YsVqQv88fqtHioxtWXNkgSWPZKwufQ2rllU0%2FS8X%2Fsfs9CgFeMTWu5GFp8%2Fu8rTMzM09jbH6%2Fbdz5RJM2cTkU5iLaT0k0RE6nkPLYR7ycu9DhN%2Fe5IxFxI0RIoepnMG9QvSpCn4ERP2ul2dZ2x1ofsnzgsSmHBqURfsGOgNA3KRJbntWZf2FpcxwQwQieZp0OSYKjNnAeShmBuXdFtpuO1IpwtOke1nBFDgvd8vYg7f5GPi7v0vcfpVIGX6H4t1WtaRd7pT2B3yaEWeDWcKy2flyi5%2BMb5YaxpvFwDNIE55Z%2Ft1XxFbGBjMwHoAlfhCSQ1wglcu6Hv8akx7jiyniIIVYd1jqTxIg6TgZwo%2BCB%2Bq8%2F7l1yHxQfDiZK4I3pNjgN4xAMGgBzJ%2BPIc9QTKUtUORC2qd2cOiENZLfq%2FdaF5FBOV1LUdBI5i03jodvOXdQdw3PE6QGLmHSE3W1NsMYo2rdh8Xq%2BcW%2Bz%2BsZc2r0mzxtmkVkWbDcu1%2B0gcDWQ2Vq8TUIuwondcGSt8p%2Bva6f9QFfekyq2VSxp7DpKtZ%2BbGoUZY8j4QopimJYlY%2B5wwsPXgxAY6pgHfyIR4yZ%2BGhPBIHxLzTsPD8duAj9qEQ%2FIw3wdLGlxTUjirLn89OXf31PUqzU5FFwLe9KkfgHvd5E9aJ4ks5k%2FdDoo52Afb630E3QGrq8%2BJgWXa9TRLWdGxfka%2Ff23joNfNIPuY498JYI%2B9ShcA5uzx7%2FYZTihnaN7NoVvs4t8U%2F1by%2B2rMMi7vjzA8B2g08Zpav%2BA5v5lbWR2L4tup6n6n8N5Exu7o&X-Amz-Signature=695c67349a8625325b9a580b51ba4e16a58831fbca21c7d4ca1a68d289488b5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEL437OY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6nEP6RMWt5Ss2jZX%2Fy%2FuX9%2FKWTE5j5%2FLEap6gx1eUYAiAScKzsEUmqT9SmR0aPcAa85%2BsO9LtYJ16OzU8btw5vliqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWTEtTjshfexv%2F5d7KtwDdXxQIV8CglpyLC1oSEfc9akgcKZiZ3TzaOORCkkgLJFokShebOuE58kAs1RZK5YsVqQv88fqtHioxtWXNkgSWPZKwufQ2rllU0%2FS8X%2Fsfs9CgFeMTWu5GFp8%2Fu8rTMzM09jbH6%2Fbdz5RJM2cTkU5iLaT0k0RE6nkPLYR7ycu9DhN%2Fe5IxFxI0RIoepnMG9QvSpCn4ERP2ul2dZ2x1ofsnzgsSmHBqURfsGOgNA3KRJbntWZf2FpcxwQwQieZp0OSYKjNnAeShmBuXdFtpuO1IpwtOke1nBFDgvd8vYg7f5GPi7v0vcfpVIGX6H4t1WtaRd7pT2B3yaEWeDWcKy2flyi5%2BMb5YaxpvFwDNIE55Z%2Ft1XxFbGBjMwHoAlfhCSQ1wglcu6Hv8akx7jiyniIIVYd1jqTxIg6TgZwo%2BCB%2Bq8%2F7l1yHxQfDiZK4I3pNjgN4xAMGgBzJ%2BPIc9QTKUtUORC2qd2cOiENZLfq%2FdaF5FBOV1LUdBI5i03jodvOXdQdw3PE6QGLmHSE3W1NsMYo2rdh8Xq%2BcW%2Bz%2BsZc2r0mzxtmkVkWbDcu1%2B0gcDWQ2Vq8TUIuwondcGSt8p%2Bva6f9QFfekyq2VSxp7DpKtZ%2BbGoUZY8j4QopimJYlY%2B5wwsPXgxAY6pgHfyIR4yZ%2BGhPBIHxLzTsPD8duAj9qEQ%2FIw3wdLGlxTUjirLn89OXf31PUqzU5FFwLe9KkfgHvd5E9aJ4ks5k%2FdDoo52Afb630E3QGrq8%2BJgWXa9TRLWdGxfka%2Ff23joNfNIPuY498JYI%2B9ShcA5uzx7%2FYZTihnaN7NoVvs4t8U%2F1by%2B2rMMi7vjzA8B2g08Zpav%2BA5v5lbWR2L4tup6n6n8N5Exu7o&X-Amz-Signature=ad888cef9bc22bb93d39252bed9f981eac1eb90ba8004b5d6b975401e569a994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEL437OY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6nEP6RMWt5Ss2jZX%2Fy%2FuX9%2FKWTE5j5%2FLEap6gx1eUYAiAScKzsEUmqT9SmR0aPcAa85%2BsO9LtYJ16OzU8btw5vliqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWTEtTjshfexv%2F5d7KtwDdXxQIV8CglpyLC1oSEfc9akgcKZiZ3TzaOORCkkgLJFokShebOuE58kAs1RZK5YsVqQv88fqtHioxtWXNkgSWPZKwufQ2rllU0%2FS8X%2Fsfs9CgFeMTWu5GFp8%2Fu8rTMzM09jbH6%2Fbdz5RJM2cTkU5iLaT0k0RE6nkPLYR7ycu9DhN%2Fe5IxFxI0RIoepnMG9QvSpCn4ERP2ul2dZ2x1ofsnzgsSmHBqURfsGOgNA3KRJbntWZf2FpcxwQwQieZp0OSYKjNnAeShmBuXdFtpuO1IpwtOke1nBFDgvd8vYg7f5GPi7v0vcfpVIGX6H4t1WtaRd7pT2B3yaEWeDWcKy2flyi5%2BMb5YaxpvFwDNIE55Z%2Ft1XxFbGBjMwHoAlfhCSQ1wglcu6Hv8akx7jiyniIIVYd1jqTxIg6TgZwo%2BCB%2Bq8%2F7l1yHxQfDiZK4I3pNjgN4xAMGgBzJ%2BPIc9QTKUtUORC2qd2cOiENZLfq%2FdaF5FBOV1LUdBI5i03jodvOXdQdw3PE6QGLmHSE3W1NsMYo2rdh8Xq%2BcW%2Bz%2BsZc2r0mzxtmkVkWbDcu1%2B0gcDWQ2Vq8TUIuwondcGSt8p%2Bva6f9QFfekyq2VSxp7DpKtZ%2BbGoUZY8j4QopimJYlY%2B5wwsPXgxAY6pgHfyIR4yZ%2BGhPBIHxLzTsPD8duAj9qEQ%2FIw3wdLGlxTUjirLn89OXf31PUqzU5FFwLe9KkfgHvd5E9aJ4ks5k%2FdDoo52Afb630E3QGrq8%2BJgWXa9TRLWdGxfka%2Ff23joNfNIPuY498JYI%2B9ShcA5uzx7%2FYZTihnaN7NoVvs4t8U%2F1by%2B2rMMi7vjzA8B2g08Zpav%2BA5v5lbWR2L4tup6n6n8N5Exu7o&X-Amz-Signature=20419ed69fef6230107830ffaa6afe0f5f296920fb6e849f47eefc67f8f63692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEL437OY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6nEP6RMWt5Ss2jZX%2Fy%2FuX9%2FKWTE5j5%2FLEap6gx1eUYAiAScKzsEUmqT9SmR0aPcAa85%2BsO9LtYJ16OzU8btw5vliqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWTEtTjshfexv%2F5d7KtwDdXxQIV8CglpyLC1oSEfc9akgcKZiZ3TzaOORCkkgLJFokShebOuE58kAs1RZK5YsVqQv88fqtHioxtWXNkgSWPZKwufQ2rllU0%2FS8X%2Fsfs9CgFeMTWu5GFp8%2Fu8rTMzM09jbH6%2Fbdz5RJM2cTkU5iLaT0k0RE6nkPLYR7ycu9DhN%2Fe5IxFxI0RIoepnMG9QvSpCn4ERP2ul2dZ2x1ofsnzgsSmHBqURfsGOgNA3KRJbntWZf2FpcxwQwQieZp0OSYKjNnAeShmBuXdFtpuO1IpwtOke1nBFDgvd8vYg7f5GPi7v0vcfpVIGX6H4t1WtaRd7pT2B3yaEWeDWcKy2flyi5%2BMb5YaxpvFwDNIE55Z%2Ft1XxFbGBjMwHoAlfhCSQ1wglcu6Hv8akx7jiyniIIVYd1jqTxIg6TgZwo%2BCB%2Bq8%2F7l1yHxQfDiZK4I3pNjgN4xAMGgBzJ%2BPIc9QTKUtUORC2qd2cOiENZLfq%2FdaF5FBOV1LUdBI5i03jodvOXdQdw3PE6QGLmHSE3W1NsMYo2rdh8Xq%2BcW%2Bz%2BsZc2r0mzxtmkVkWbDcu1%2B0gcDWQ2Vq8TUIuwondcGSt8p%2Bva6f9QFfekyq2VSxp7DpKtZ%2BbGoUZY8j4QopimJYlY%2B5wwsPXgxAY6pgHfyIR4yZ%2BGhPBIHxLzTsPD8duAj9qEQ%2FIw3wdLGlxTUjirLn89OXf31PUqzU5FFwLe9KkfgHvd5E9aJ4ks5k%2FdDoo52Afb630E3QGrq8%2BJgWXa9TRLWdGxfka%2Ff23joNfNIPuY498JYI%2B9ShcA5uzx7%2FYZTihnaN7NoVvs4t8U%2F1by%2B2rMMi7vjzA8B2g08Zpav%2BA5v5lbWR2L4tup6n6n8N5Exu7o&X-Amz-Signature=78152754a2d25e3ed95aca808c911b1f0a05f5e739a7e02365fc6bc94de2cf9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
