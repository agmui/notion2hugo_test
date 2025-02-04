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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T6BSRPP%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCICgjAq%2BKb0IE%2FPdn5lx7gecc6RGUG8K7QkzWKF60bQnXAiEAqwmFJBcuEXoqkcei%2FYFNuSlf1KS%2FYtWt%2FG6uPA5Ig7gq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOimzpuBD%2FkjjxAbuyrcAxLoyxmRSzM5nFO7LLq7af5gkYEqHsSF6QXt0%2FwSx2VC47LTxlGm6XzLJS%2FkJfOwtqZWbzEwVUY2spL%2F7KqgUj8l4Ybii%2FfkhqLo47kmm8kZTh2eL7DGRrNw59d4JF1sIHEO4fCcyhQS1qe%2FtJbdsmhU0QkBuIC2wIOFHjkqBDnKgJ0jQYlRep%2BA5hsuZRgbDhbKx52x0h03O1R3U%2FB0Z3qcEJo9TSDy1AT9fWaOwDJ%2BUESggZzNPmqmZbF54a8%2FMiFpkkqhBRZHAJxqI7Wmh3raK0kCK2XfjWLoUOiwjmvSXZJnvKT1kPEwQCXdvaaVxDV9HsilbzxTbSPn7k6FxoQ2s1DPyxObNtaQK3nzeP7AbigPNe2tn72CrxQAFXRYAt%2F18M4aMEPm%2BhgFmlNP37PuNS2cIbjHxOTSh5oYE%2FHSfChwMhbx2f4Gy8FYu%2BiPxLFDBLd3KiBODHFXpsTV0%2Fu47K74cowcwIxMnFxDXP7voMwubQnfYV2%2Bg%2FkF86C6FsdZ6PoP7oD6U9SwpFeP32E0dltTs90zM3k4pDd3LphEri%2Bcq9mJFeKJPgIBL1s7RddzWxD5kuAeTdw6Vm5KK5DzcDKdKfVwqo%2BUS1aVMdz1Mrb6ENi5tiCDMEw%2BMOfMh70GOqUBnDhVj1AwXM%2B3vywFYUpUPS4nUZ%2Fj3a2UxdJiieQFf1A2ud%2F5m8jTEG2hgO89DETx%2BFCcZQUyOJNSAJne3YqomPXoHVnEIyRqj4ICEOxMGA%2Fpm1W%2Bv6xd%2FAlDKkB%2B3EyldS1NZJNdj63h6jz4PP%2Bxc69U7maloSx5zY7mLMWI%2BzdRIaZNFIWJN5EN3f7J64KhvIyQqCjYURDeFRaj6Yr5a7IcecjC&X-Amz-Signature=e61bb21276a332dd4df3509d500c5e72e798874f2ee3cb3f5892fc8d5803d0dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T6BSRPP%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCICgjAq%2BKb0IE%2FPdn5lx7gecc6RGUG8K7QkzWKF60bQnXAiEAqwmFJBcuEXoqkcei%2FYFNuSlf1KS%2FYtWt%2FG6uPA5Ig7gq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOimzpuBD%2FkjjxAbuyrcAxLoyxmRSzM5nFO7LLq7af5gkYEqHsSF6QXt0%2FwSx2VC47LTxlGm6XzLJS%2FkJfOwtqZWbzEwVUY2spL%2F7KqgUj8l4Ybii%2FfkhqLo47kmm8kZTh2eL7DGRrNw59d4JF1sIHEO4fCcyhQS1qe%2FtJbdsmhU0QkBuIC2wIOFHjkqBDnKgJ0jQYlRep%2BA5hsuZRgbDhbKx52x0h03O1R3U%2FB0Z3qcEJo9TSDy1AT9fWaOwDJ%2BUESggZzNPmqmZbF54a8%2FMiFpkkqhBRZHAJxqI7Wmh3raK0kCK2XfjWLoUOiwjmvSXZJnvKT1kPEwQCXdvaaVxDV9HsilbzxTbSPn7k6FxoQ2s1DPyxObNtaQK3nzeP7AbigPNe2tn72CrxQAFXRYAt%2F18M4aMEPm%2BhgFmlNP37PuNS2cIbjHxOTSh5oYE%2FHSfChwMhbx2f4Gy8FYu%2BiPxLFDBLd3KiBODHFXpsTV0%2Fu47K74cowcwIxMnFxDXP7voMwubQnfYV2%2Bg%2FkF86C6FsdZ6PoP7oD6U9SwpFeP32E0dltTs90zM3k4pDd3LphEri%2Bcq9mJFeKJPgIBL1s7RddzWxD5kuAeTdw6Vm5KK5DzcDKdKfVwqo%2BUS1aVMdz1Mrb6ENi5tiCDMEw%2BMOfMh70GOqUBnDhVj1AwXM%2B3vywFYUpUPS4nUZ%2Fj3a2UxdJiieQFf1A2ud%2F5m8jTEG2hgO89DETx%2BFCcZQUyOJNSAJne3YqomPXoHVnEIyRqj4ICEOxMGA%2Fpm1W%2Bv6xd%2FAlDKkB%2B3EyldS1NZJNdj63h6jz4PP%2Bxc69U7maloSx5zY7mLMWI%2BzdRIaZNFIWJN5EN3f7J64KhvIyQqCjYURDeFRaj6Yr5a7IcecjC&X-Amz-Signature=46a40aa7fde45e80f279a74213df62276cccc65a3fcfb33248745c7b5040aeda&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T6BSRPP%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCICgjAq%2BKb0IE%2FPdn5lx7gecc6RGUG8K7QkzWKF60bQnXAiEAqwmFJBcuEXoqkcei%2FYFNuSlf1KS%2FYtWt%2FG6uPA5Ig7gq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOimzpuBD%2FkjjxAbuyrcAxLoyxmRSzM5nFO7LLq7af5gkYEqHsSF6QXt0%2FwSx2VC47LTxlGm6XzLJS%2FkJfOwtqZWbzEwVUY2spL%2F7KqgUj8l4Ybii%2FfkhqLo47kmm8kZTh2eL7DGRrNw59d4JF1sIHEO4fCcyhQS1qe%2FtJbdsmhU0QkBuIC2wIOFHjkqBDnKgJ0jQYlRep%2BA5hsuZRgbDhbKx52x0h03O1R3U%2FB0Z3qcEJo9TSDy1AT9fWaOwDJ%2BUESggZzNPmqmZbF54a8%2FMiFpkkqhBRZHAJxqI7Wmh3raK0kCK2XfjWLoUOiwjmvSXZJnvKT1kPEwQCXdvaaVxDV9HsilbzxTbSPn7k6FxoQ2s1DPyxObNtaQK3nzeP7AbigPNe2tn72CrxQAFXRYAt%2F18M4aMEPm%2BhgFmlNP37PuNS2cIbjHxOTSh5oYE%2FHSfChwMhbx2f4Gy8FYu%2BiPxLFDBLd3KiBODHFXpsTV0%2Fu47K74cowcwIxMnFxDXP7voMwubQnfYV2%2Bg%2FkF86C6FsdZ6PoP7oD6U9SwpFeP32E0dltTs90zM3k4pDd3LphEri%2Bcq9mJFeKJPgIBL1s7RddzWxD5kuAeTdw6Vm5KK5DzcDKdKfVwqo%2BUS1aVMdz1Mrb6ENi5tiCDMEw%2BMOfMh70GOqUBnDhVj1AwXM%2B3vywFYUpUPS4nUZ%2Fj3a2UxdJiieQFf1A2ud%2F5m8jTEG2hgO89DETx%2BFCcZQUyOJNSAJne3YqomPXoHVnEIyRqj4ICEOxMGA%2Fpm1W%2Bv6xd%2FAlDKkB%2B3EyldS1NZJNdj63h6jz4PP%2Bxc69U7maloSx5zY7mLMWI%2BzdRIaZNFIWJN5EN3f7J64KhvIyQqCjYURDeFRaj6Yr5a7IcecjC&X-Amz-Signature=b3d0d3d242f07f4a3719c15ce122f1f8617a0470cc823e0cab7826142a5d295a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T6BSRPP%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCICgjAq%2BKb0IE%2FPdn5lx7gecc6RGUG8K7QkzWKF60bQnXAiEAqwmFJBcuEXoqkcei%2FYFNuSlf1KS%2FYtWt%2FG6uPA5Ig7gq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOimzpuBD%2FkjjxAbuyrcAxLoyxmRSzM5nFO7LLq7af5gkYEqHsSF6QXt0%2FwSx2VC47LTxlGm6XzLJS%2FkJfOwtqZWbzEwVUY2spL%2F7KqgUj8l4Ybii%2FfkhqLo47kmm8kZTh2eL7DGRrNw59d4JF1sIHEO4fCcyhQS1qe%2FtJbdsmhU0QkBuIC2wIOFHjkqBDnKgJ0jQYlRep%2BA5hsuZRgbDhbKx52x0h03O1R3U%2FB0Z3qcEJo9TSDy1AT9fWaOwDJ%2BUESggZzNPmqmZbF54a8%2FMiFpkkqhBRZHAJxqI7Wmh3raK0kCK2XfjWLoUOiwjmvSXZJnvKT1kPEwQCXdvaaVxDV9HsilbzxTbSPn7k6FxoQ2s1DPyxObNtaQK3nzeP7AbigPNe2tn72CrxQAFXRYAt%2F18M4aMEPm%2BhgFmlNP37PuNS2cIbjHxOTSh5oYE%2FHSfChwMhbx2f4Gy8FYu%2BiPxLFDBLd3KiBODHFXpsTV0%2Fu47K74cowcwIxMnFxDXP7voMwubQnfYV2%2Bg%2FkF86C6FsdZ6PoP7oD6U9SwpFeP32E0dltTs90zM3k4pDd3LphEri%2Bcq9mJFeKJPgIBL1s7RddzWxD5kuAeTdw6Vm5KK5DzcDKdKfVwqo%2BUS1aVMdz1Mrb6ENi5tiCDMEw%2BMOfMh70GOqUBnDhVj1AwXM%2B3vywFYUpUPS4nUZ%2Fj3a2UxdJiieQFf1A2ud%2F5m8jTEG2hgO89DETx%2BFCcZQUyOJNSAJne3YqomPXoHVnEIyRqj4ICEOxMGA%2Fpm1W%2Bv6xd%2FAlDKkB%2B3EyldS1NZJNdj63h6jz4PP%2Bxc69U7maloSx5zY7mLMWI%2BzdRIaZNFIWJN5EN3f7J64KhvIyQqCjYURDeFRaj6Yr5a7IcecjC&X-Amz-Signature=2c9c65906506d38b5e0ecfbe8d202ffdf7d5a3593f7e932edd892e9721c463c8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T6BSRPP%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCICgjAq%2BKb0IE%2FPdn5lx7gecc6RGUG8K7QkzWKF60bQnXAiEAqwmFJBcuEXoqkcei%2FYFNuSlf1KS%2FYtWt%2FG6uPA5Ig7gq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOimzpuBD%2FkjjxAbuyrcAxLoyxmRSzM5nFO7LLq7af5gkYEqHsSF6QXt0%2FwSx2VC47LTxlGm6XzLJS%2FkJfOwtqZWbzEwVUY2spL%2F7KqgUj8l4Ybii%2FfkhqLo47kmm8kZTh2eL7DGRrNw59d4JF1sIHEO4fCcyhQS1qe%2FtJbdsmhU0QkBuIC2wIOFHjkqBDnKgJ0jQYlRep%2BA5hsuZRgbDhbKx52x0h03O1R3U%2FB0Z3qcEJo9TSDy1AT9fWaOwDJ%2BUESggZzNPmqmZbF54a8%2FMiFpkkqhBRZHAJxqI7Wmh3raK0kCK2XfjWLoUOiwjmvSXZJnvKT1kPEwQCXdvaaVxDV9HsilbzxTbSPn7k6FxoQ2s1DPyxObNtaQK3nzeP7AbigPNe2tn72CrxQAFXRYAt%2F18M4aMEPm%2BhgFmlNP37PuNS2cIbjHxOTSh5oYE%2FHSfChwMhbx2f4Gy8FYu%2BiPxLFDBLd3KiBODHFXpsTV0%2Fu47K74cowcwIxMnFxDXP7voMwubQnfYV2%2Bg%2FkF86C6FsdZ6PoP7oD6U9SwpFeP32E0dltTs90zM3k4pDd3LphEri%2Bcq9mJFeKJPgIBL1s7RddzWxD5kuAeTdw6Vm5KK5DzcDKdKfVwqo%2BUS1aVMdz1Mrb6ENi5tiCDMEw%2BMOfMh70GOqUBnDhVj1AwXM%2B3vywFYUpUPS4nUZ%2Fj3a2UxdJiieQFf1A2ud%2F5m8jTEG2hgO89DETx%2BFCcZQUyOJNSAJne3YqomPXoHVnEIyRqj4ICEOxMGA%2Fpm1W%2Bv6xd%2FAlDKkB%2B3EyldS1NZJNdj63h6jz4PP%2Bxc69U7maloSx5zY7mLMWI%2BzdRIaZNFIWJN5EN3f7J64KhvIyQqCjYURDeFRaj6Yr5a7IcecjC&X-Amz-Signature=b5b3749d0125198ebcf950ecde49c92d050877999c09d2a3ccc762e01e978aa4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T6BSRPP%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCICgjAq%2BKb0IE%2FPdn5lx7gecc6RGUG8K7QkzWKF60bQnXAiEAqwmFJBcuEXoqkcei%2FYFNuSlf1KS%2FYtWt%2FG6uPA5Ig7gq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOimzpuBD%2FkjjxAbuyrcAxLoyxmRSzM5nFO7LLq7af5gkYEqHsSF6QXt0%2FwSx2VC47LTxlGm6XzLJS%2FkJfOwtqZWbzEwVUY2spL%2F7KqgUj8l4Ybii%2FfkhqLo47kmm8kZTh2eL7DGRrNw59d4JF1sIHEO4fCcyhQS1qe%2FtJbdsmhU0QkBuIC2wIOFHjkqBDnKgJ0jQYlRep%2BA5hsuZRgbDhbKx52x0h03O1R3U%2FB0Z3qcEJo9TSDy1AT9fWaOwDJ%2BUESggZzNPmqmZbF54a8%2FMiFpkkqhBRZHAJxqI7Wmh3raK0kCK2XfjWLoUOiwjmvSXZJnvKT1kPEwQCXdvaaVxDV9HsilbzxTbSPn7k6FxoQ2s1DPyxObNtaQK3nzeP7AbigPNe2tn72CrxQAFXRYAt%2F18M4aMEPm%2BhgFmlNP37PuNS2cIbjHxOTSh5oYE%2FHSfChwMhbx2f4Gy8FYu%2BiPxLFDBLd3KiBODHFXpsTV0%2Fu47K74cowcwIxMnFxDXP7voMwubQnfYV2%2Bg%2FkF86C6FsdZ6PoP7oD6U9SwpFeP32E0dltTs90zM3k4pDd3LphEri%2Bcq9mJFeKJPgIBL1s7RddzWxD5kuAeTdw6Vm5KK5DzcDKdKfVwqo%2BUS1aVMdz1Mrb6ENi5tiCDMEw%2BMOfMh70GOqUBnDhVj1AwXM%2B3vywFYUpUPS4nUZ%2Fj3a2UxdJiieQFf1A2ud%2F5m8jTEG2hgO89DETx%2BFCcZQUyOJNSAJne3YqomPXoHVnEIyRqj4ICEOxMGA%2Fpm1W%2Bv6xd%2FAlDKkB%2B3EyldS1NZJNdj63h6jz4PP%2Bxc69U7maloSx5zY7mLMWI%2BzdRIaZNFIWJN5EN3f7J64KhvIyQqCjYURDeFRaj6Yr5a7IcecjC&X-Amz-Signature=d3feec04dc4bf49ba676d35b925033c684676da800a3a58cbcacdb7ca8c827af&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T6BSRPP%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCICgjAq%2BKb0IE%2FPdn5lx7gecc6RGUG8K7QkzWKF60bQnXAiEAqwmFJBcuEXoqkcei%2FYFNuSlf1KS%2FYtWt%2FG6uPA5Ig7gq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOimzpuBD%2FkjjxAbuyrcAxLoyxmRSzM5nFO7LLq7af5gkYEqHsSF6QXt0%2FwSx2VC47LTxlGm6XzLJS%2FkJfOwtqZWbzEwVUY2spL%2F7KqgUj8l4Ybii%2FfkhqLo47kmm8kZTh2eL7DGRrNw59d4JF1sIHEO4fCcyhQS1qe%2FtJbdsmhU0QkBuIC2wIOFHjkqBDnKgJ0jQYlRep%2BA5hsuZRgbDhbKx52x0h03O1R3U%2FB0Z3qcEJo9TSDy1AT9fWaOwDJ%2BUESggZzNPmqmZbF54a8%2FMiFpkkqhBRZHAJxqI7Wmh3raK0kCK2XfjWLoUOiwjmvSXZJnvKT1kPEwQCXdvaaVxDV9HsilbzxTbSPn7k6FxoQ2s1DPyxObNtaQK3nzeP7AbigPNe2tn72CrxQAFXRYAt%2F18M4aMEPm%2BhgFmlNP37PuNS2cIbjHxOTSh5oYE%2FHSfChwMhbx2f4Gy8FYu%2BiPxLFDBLd3KiBODHFXpsTV0%2Fu47K74cowcwIxMnFxDXP7voMwubQnfYV2%2Bg%2FkF86C6FsdZ6PoP7oD6U9SwpFeP32E0dltTs90zM3k4pDd3LphEri%2Bcq9mJFeKJPgIBL1s7RddzWxD5kuAeTdw6Vm5KK5DzcDKdKfVwqo%2BUS1aVMdz1Mrb6ENi5tiCDMEw%2BMOfMh70GOqUBnDhVj1AwXM%2B3vywFYUpUPS4nUZ%2Fj3a2UxdJiieQFf1A2ud%2F5m8jTEG2hgO89DETx%2BFCcZQUyOJNSAJne3YqomPXoHVnEIyRqj4ICEOxMGA%2Fpm1W%2Bv6xd%2FAlDKkB%2B3EyldS1NZJNdj63h6jz4PP%2Bxc69U7maloSx5zY7mLMWI%2BzdRIaZNFIWJN5EN3f7J64KhvIyQqCjYURDeFRaj6Yr5a7IcecjC&X-Amz-Signature=eb39a22ffda0b5136ddee1ef67684ad653ee33c2bf297348ab920c0e30a7f4ba&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
