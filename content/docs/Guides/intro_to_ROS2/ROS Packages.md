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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WEO6PNO%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T190210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BI1PgUUCNxKa7cqBwkD8aMLKI0KydDfLpu8RtTXDqwwIgGiA5xQsu2dW1nJ6UHgXkThevQJbTZgzLou36H3pGmRUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDB7wga62EoHNXNxWhyrcA9KT0U%2FBH6T1C6KjOzKFZFMnzB7JcqeuzqvvJHtsqd4a7ZcAIUz7kORsHV%2FKtwrhhiQnLHF6wu%2Bxu2u%2F8xP2SHd6M4VFI5Irb2T3NF2yVAgp3BLkTb16RbXtHZBDPRgMY9yihPwCfFjHiYgOV3v0bdhvL%2FD0vI1EavpWhQXa0DE0OzlQh1OZIWG5us92lPxZDzcpc5HrdEIQDpxPIJ%2B8sym76ZVFotZe8GJfo8%2BTQI7o8UDEyM05I6dgw326Z9UjYZ67GRVNou9gJEQSPXjEcSvoVBcXxLg1DK4aOsleMDYq4vGoPObmygrqZQeR8A9E8wES4dZ1fPlb%2FaojvgInNrJ8jQhNuuuhGsBXoFoamzt8Wej32p7TvP6K0qoGJ%2BWSYrhzTyXLtxAspZkYimSvTDmp0UfbXX73EzfGoZKcmEDyicwgj1mrZ96r7FzYBK2don6XPtvKuLldyrGPUGtib5Eqah6R2nWd%2BLfjGOhj0h7F5sF2KCiVdejLcT781dB2%2FQzjT4ewxM1YpSHrAtVnhMr0n8NTYtLhPLkg1tIac2OFBib4VjTOMr1QX5eTsZoouEI2cF6st0FstC8GlNdD0ZmpSxNeh%2FrOOxANJzOpS%2FCfyYe3dwAa9mwqfRW%2FMMCVksIGOqUBTw7UjGoyZghtmRW98JVzHSFdWRhn%2BFOP6BNJUQGg5PqoFnaCAANA6hVvKcq2kvSEglZlt0HR5p31a%2FGJTFSI6%2F46KW3HAHoM6BIIiL%2Bti8B7FNZGQlc1qkZ2Abk1PDVBeMYbd0eLLrgnIEsYhahLA%2FgXwandDfLs5%2FxLFYj8xWlTDkZb5fG9agqt810zTDVTZUC0lMVhkXMJh2wE9c6b7ySjUsoZ&X-Amz-Signature=6f90a257ced909730d7733141eaaca1e5440dc53668d71fe177aa85bb13a3b0d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WEO6PNO%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T190210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BI1PgUUCNxKa7cqBwkD8aMLKI0KydDfLpu8RtTXDqwwIgGiA5xQsu2dW1nJ6UHgXkThevQJbTZgzLou36H3pGmRUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDB7wga62EoHNXNxWhyrcA9KT0U%2FBH6T1C6KjOzKFZFMnzB7JcqeuzqvvJHtsqd4a7ZcAIUz7kORsHV%2FKtwrhhiQnLHF6wu%2Bxu2u%2F8xP2SHd6M4VFI5Irb2T3NF2yVAgp3BLkTb16RbXtHZBDPRgMY9yihPwCfFjHiYgOV3v0bdhvL%2FD0vI1EavpWhQXa0DE0OzlQh1OZIWG5us92lPxZDzcpc5HrdEIQDpxPIJ%2B8sym76ZVFotZe8GJfo8%2BTQI7o8UDEyM05I6dgw326Z9UjYZ67GRVNou9gJEQSPXjEcSvoVBcXxLg1DK4aOsleMDYq4vGoPObmygrqZQeR8A9E8wES4dZ1fPlb%2FaojvgInNrJ8jQhNuuuhGsBXoFoamzt8Wej32p7TvP6K0qoGJ%2BWSYrhzTyXLtxAspZkYimSvTDmp0UfbXX73EzfGoZKcmEDyicwgj1mrZ96r7FzYBK2don6XPtvKuLldyrGPUGtib5Eqah6R2nWd%2BLfjGOhj0h7F5sF2KCiVdejLcT781dB2%2FQzjT4ewxM1YpSHrAtVnhMr0n8NTYtLhPLkg1tIac2OFBib4VjTOMr1QX5eTsZoouEI2cF6st0FstC8GlNdD0ZmpSxNeh%2FrOOxANJzOpS%2FCfyYe3dwAa9mwqfRW%2FMMCVksIGOqUBTw7UjGoyZghtmRW98JVzHSFdWRhn%2BFOP6BNJUQGg5PqoFnaCAANA6hVvKcq2kvSEglZlt0HR5p31a%2FGJTFSI6%2F46KW3HAHoM6BIIiL%2Bti8B7FNZGQlc1qkZ2Abk1PDVBeMYbd0eLLrgnIEsYhahLA%2FgXwandDfLs5%2FxLFYj8xWlTDkZb5fG9agqt810zTDVTZUC0lMVhkXMJh2wE9c6b7ySjUsoZ&X-Amz-Signature=0b43536ce0f9deb266d48e97ac424f532e26b9b19e2639683008fbe2d47cad5c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WEO6PNO%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T190210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BI1PgUUCNxKa7cqBwkD8aMLKI0KydDfLpu8RtTXDqwwIgGiA5xQsu2dW1nJ6UHgXkThevQJbTZgzLou36H3pGmRUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDB7wga62EoHNXNxWhyrcA9KT0U%2FBH6T1C6KjOzKFZFMnzB7JcqeuzqvvJHtsqd4a7ZcAIUz7kORsHV%2FKtwrhhiQnLHF6wu%2Bxu2u%2F8xP2SHd6M4VFI5Irb2T3NF2yVAgp3BLkTb16RbXtHZBDPRgMY9yihPwCfFjHiYgOV3v0bdhvL%2FD0vI1EavpWhQXa0DE0OzlQh1OZIWG5us92lPxZDzcpc5HrdEIQDpxPIJ%2B8sym76ZVFotZe8GJfo8%2BTQI7o8UDEyM05I6dgw326Z9UjYZ67GRVNou9gJEQSPXjEcSvoVBcXxLg1DK4aOsleMDYq4vGoPObmygrqZQeR8A9E8wES4dZ1fPlb%2FaojvgInNrJ8jQhNuuuhGsBXoFoamzt8Wej32p7TvP6K0qoGJ%2BWSYrhzTyXLtxAspZkYimSvTDmp0UfbXX73EzfGoZKcmEDyicwgj1mrZ96r7FzYBK2don6XPtvKuLldyrGPUGtib5Eqah6R2nWd%2BLfjGOhj0h7F5sF2KCiVdejLcT781dB2%2FQzjT4ewxM1YpSHrAtVnhMr0n8NTYtLhPLkg1tIac2OFBib4VjTOMr1QX5eTsZoouEI2cF6st0FstC8GlNdD0ZmpSxNeh%2FrOOxANJzOpS%2FCfyYe3dwAa9mwqfRW%2FMMCVksIGOqUBTw7UjGoyZghtmRW98JVzHSFdWRhn%2BFOP6BNJUQGg5PqoFnaCAANA6hVvKcq2kvSEglZlt0HR5p31a%2FGJTFSI6%2F46KW3HAHoM6BIIiL%2Bti8B7FNZGQlc1qkZ2Abk1PDVBeMYbd0eLLrgnIEsYhahLA%2FgXwandDfLs5%2FxLFYj8xWlTDkZb5fG9agqt810zTDVTZUC0lMVhkXMJh2wE9c6b7ySjUsoZ&X-Amz-Signature=27ed514ef28331dbb9d884f3c8cab659b6db6fdd389f997ea5fa4d896c7e228f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WEO6PNO%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T190210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BI1PgUUCNxKa7cqBwkD8aMLKI0KydDfLpu8RtTXDqwwIgGiA5xQsu2dW1nJ6UHgXkThevQJbTZgzLou36H3pGmRUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDB7wga62EoHNXNxWhyrcA9KT0U%2FBH6T1C6KjOzKFZFMnzB7JcqeuzqvvJHtsqd4a7ZcAIUz7kORsHV%2FKtwrhhiQnLHF6wu%2Bxu2u%2F8xP2SHd6M4VFI5Irb2T3NF2yVAgp3BLkTb16RbXtHZBDPRgMY9yihPwCfFjHiYgOV3v0bdhvL%2FD0vI1EavpWhQXa0DE0OzlQh1OZIWG5us92lPxZDzcpc5HrdEIQDpxPIJ%2B8sym76ZVFotZe8GJfo8%2BTQI7o8UDEyM05I6dgw326Z9UjYZ67GRVNou9gJEQSPXjEcSvoVBcXxLg1DK4aOsleMDYq4vGoPObmygrqZQeR8A9E8wES4dZ1fPlb%2FaojvgInNrJ8jQhNuuuhGsBXoFoamzt8Wej32p7TvP6K0qoGJ%2BWSYrhzTyXLtxAspZkYimSvTDmp0UfbXX73EzfGoZKcmEDyicwgj1mrZ96r7FzYBK2don6XPtvKuLldyrGPUGtib5Eqah6R2nWd%2BLfjGOhj0h7F5sF2KCiVdejLcT781dB2%2FQzjT4ewxM1YpSHrAtVnhMr0n8NTYtLhPLkg1tIac2OFBib4VjTOMr1QX5eTsZoouEI2cF6st0FstC8GlNdD0ZmpSxNeh%2FrOOxANJzOpS%2FCfyYe3dwAa9mwqfRW%2FMMCVksIGOqUBTw7UjGoyZghtmRW98JVzHSFdWRhn%2BFOP6BNJUQGg5PqoFnaCAANA6hVvKcq2kvSEglZlt0HR5p31a%2FGJTFSI6%2F46KW3HAHoM6BIIiL%2Bti8B7FNZGQlc1qkZ2Abk1PDVBeMYbd0eLLrgnIEsYhahLA%2FgXwandDfLs5%2FxLFYj8xWlTDkZb5fG9agqt810zTDVTZUC0lMVhkXMJh2wE9c6b7ySjUsoZ&X-Amz-Signature=89827ace6555af515e436e6c069e8eefd929966e90fa324c3c038c3748545198&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WEO6PNO%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T190210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BI1PgUUCNxKa7cqBwkD8aMLKI0KydDfLpu8RtTXDqwwIgGiA5xQsu2dW1nJ6UHgXkThevQJbTZgzLou36H3pGmRUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDB7wga62EoHNXNxWhyrcA9KT0U%2FBH6T1C6KjOzKFZFMnzB7JcqeuzqvvJHtsqd4a7ZcAIUz7kORsHV%2FKtwrhhiQnLHF6wu%2Bxu2u%2F8xP2SHd6M4VFI5Irb2T3NF2yVAgp3BLkTb16RbXtHZBDPRgMY9yihPwCfFjHiYgOV3v0bdhvL%2FD0vI1EavpWhQXa0DE0OzlQh1OZIWG5us92lPxZDzcpc5HrdEIQDpxPIJ%2B8sym76ZVFotZe8GJfo8%2BTQI7o8UDEyM05I6dgw326Z9UjYZ67GRVNou9gJEQSPXjEcSvoVBcXxLg1DK4aOsleMDYq4vGoPObmygrqZQeR8A9E8wES4dZ1fPlb%2FaojvgInNrJ8jQhNuuuhGsBXoFoamzt8Wej32p7TvP6K0qoGJ%2BWSYrhzTyXLtxAspZkYimSvTDmp0UfbXX73EzfGoZKcmEDyicwgj1mrZ96r7FzYBK2don6XPtvKuLldyrGPUGtib5Eqah6R2nWd%2BLfjGOhj0h7F5sF2KCiVdejLcT781dB2%2FQzjT4ewxM1YpSHrAtVnhMr0n8NTYtLhPLkg1tIac2OFBib4VjTOMr1QX5eTsZoouEI2cF6st0FstC8GlNdD0ZmpSxNeh%2FrOOxANJzOpS%2FCfyYe3dwAa9mwqfRW%2FMMCVksIGOqUBTw7UjGoyZghtmRW98JVzHSFdWRhn%2BFOP6BNJUQGg5PqoFnaCAANA6hVvKcq2kvSEglZlt0HR5p31a%2FGJTFSI6%2F46KW3HAHoM6BIIiL%2Bti8B7FNZGQlc1qkZ2Abk1PDVBeMYbd0eLLrgnIEsYhahLA%2FgXwandDfLs5%2FxLFYj8xWlTDkZb5fG9agqt810zTDVTZUC0lMVhkXMJh2wE9c6b7ySjUsoZ&X-Amz-Signature=a1f3b8782db13f6480b85a2220ccfb4b26a64dca5d5a034a435343136edfb693&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WEO6PNO%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T190210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BI1PgUUCNxKa7cqBwkD8aMLKI0KydDfLpu8RtTXDqwwIgGiA5xQsu2dW1nJ6UHgXkThevQJbTZgzLou36H3pGmRUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDB7wga62EoHNXNxWhyrcA9KT0U%2FBH6T1C6KjOzKFZFMnzB7JcqeuzqvvJHtsqd4a7ZcAIUz7kORsHV%2FKtwrhhiQnLHF6wu%2Bxu2u%2F8xP2SHd6M4VFI5Irb2T3NF2yVAgp3BLkTb16RbXtHZBDPRgMY9yihPwCfFjHiYgOV3v0bdhvL%2FD0vI1EavpWhQXa0DE0OzlQh1OZIWG5us92lPxZDzcpc5HrdEIQDpxPIJ%2B8sym76ZVFotZe8GJfo8%2BTQI7o8UDEyM05I6dgw326Z9UjYZ67GRVNou9gJEQSPXjEcSvoVBcXxLg1DK4aOsleMDYq4vGoPObmygrqZQeR8A9E8wES4dZ1fPlb%2FaojvgInNrJ8jQhNuuuhGsBXoFoamzt8Wej32p7TvP6K0qoGJ%2BWSYrhzTyXLtxAspZkYimSvTDmp0UfbXX73EzfGoZKcmEDyicwgj1mrZ96r7FzYBK2don6XPtvKuLldyrGPUGtib5Eqah6R2nWd%2BLfjGOhj0h7F5sF2KCiVdejLcT781dB2%2FQzjT4ewxM1YpSHrAtVnhMr0n8NTYtLhPLkg1tIac2OFBib4VjTOMr1QX5eTsZoouEI2cF6st0FstC8GlNdD0ZmpSxNeh%2FrOOxANJzOpS%2FCfyYe3dwAa9mwqfRW%2FMMCVksIGOqUBTw7UjGoyZghtmRW98JVzHSFdWRhn%2BFOP6BNJUQGg5PqoFnaCAANA6hVvKcq2kvSEglZlt0HR5p31a%2FGJTFSI6%2F46KW3HAHoM6BIIiL%2Bti8B7FNZGQlc1qkZ2Abk1PDVBeMYbd0eLLrgnIEsYhahLA%2FgXwandDfLs5%2FxLFYj8xWlTDkZb5fG9agqt810zTDVTZUC0lMVhkXMJh2wE9c6b7ySjUsoZ&X-Amz-Signature=6bd697d424a82cfee31f66e5f214ca34428f3f1d0d69d77df952e7d8e6f8c2d6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WEO6PNO%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T190210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BI1PgUUCNxKa7cqBwkD8aMLKI0KydDfLpu8RtTXDqwwIgGiA5xQsu2dW1nJ6UHgXkThevQJbTZgzLou36H3pGmRUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDB7wga62EoHNXNxWhyrcA9KT0U%2FBH6T1C6KjOzKFZFMnzB7JcqeuzqvvJHtsqd4a7ZcAIUz7kORsHV%2FKtwrhhiQnLHF6wu%2Bxu2u%2F8xP2SHd6M4VFI5Irb2T3NF2yVAgp3BLkTb16RbXtHZBDPRgMY9yihPwCfFjHiYgOV3v0bdhvL%2FD0vI1EavpWhQXa0DE0OzlQh1OZIWG5us92lPxZDzcpc5HrdEIQDpxPIJ%2B8sym76ZVFotZe8GJfo8%2BTQI7o8UDEyM05I6dgw326Z9UjYZ67GRVNou9gJEQSPXjEcSvoVBcXxLg1DK4aOsleMDYq4vGoPObmygrqZQeR8A9E8wES4dZ1fPlb%2FaojvgInNrJ8jQhNuuuhGsBXoFoamzt8Wej32p7TvP6K0qoGJ%2BWSYrhzTyXLtxAspZkYimSvTDmp0UfbXX73EzfGoZKcmEDyicwgj1mrZ96r7FzYBK2don6XPtvKuLldyrGPUGtib5Eqah6R2nWd%2BLfjGOhj0h7F5sF2KCiVdejLcT781dB2%2FQzjT4ewxM1YpSHrAtVnhMr0n8NTYtLhPLkg1tIac2OFBib4VjTOMr1QX5eTsZoouEI2cF6st0FstC8GlNdD0ZmpSxNeh%2FrOOxANJzOpS%2FCfyYe3dwAa9mwqfRW%2FMMCVksIGOqUBTw7UjGoyZghtmRW98JVzHSFdWRhn%2BFOP6BNJUQGg5PqoFnaCAANA6hVvKcq2kvSEglZlt0HR5p31a%2FGJTFSI6%2F46KW3HAHoM6BIIiL%2Bti8B7FNZGQlc1qkZ2Abk1PDVBeMYbd0eLLrgnIEsYhahLA%2FgXwandDfLs5%2FxLFYj8xWlTDkZb5fG9agqt810zTDVTZUC0lMVhkXMJh2wE9c6b7ySjUsoZ&X-Amz-Signature=ee7afedf078b3389edef8f743e98cb79320bfdc45cdd66562a3e87a0b6fa06d1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
