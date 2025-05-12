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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IESLN62%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T061343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEqnZ7dCQZ%2F256xvyS8zwgkiNVENG9WJJb5WsDk6JC5cAiEA1u7c8DZUDlptRUMIqg9idKUSpyUmEM7szB6NveT7jYgqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCf6k10d1Soz2qi4uCrcA7w0HIpfVNV36m8JWq%2BJJxb3UVWlomhvfRTm8b15Gfv%2F8OYZ3YmDW2jU1vXN%2FXtKofOpTnGs08ThGOr2fSZJRFfVGTiMyyG1w2J2UUiJwPTwSO8fjeNmm3yd6SAqXdDt%2FLtxvXjgWnVHc3vNXzMd7HmSJ5HIlggyh4N1xxXuSOjm5i4vrodEJrnmL7IO0k2cRTUDMuZCukUQW0pRZ%2BPWqVJHxzo4LvdIh9hhc1IHn%2BrJmw6SyYBrCi41q4jKa2c0Rz%2BvhVHlKqdCg8W2TmoRI7ILgJWj0bU%2BqtmlUPr8Vd%2BbrQANa7XOkEaWR8%2F5omj7XxbvAb5v4b6CCwmVpTqLDKA%2FO%2BGg%2FcaUvcYRfaZPoSWXe8qV14xZvMiNtRmmP7xOXSoywtTOJLR0XxrOU%2BgYGd8A4yz%2FEreVm%2BE6b%2BGTQxbkCLtcXtFJAf1UVlChAcj8wCnNe%2FcB1MrOM5rtA%2BqduxFHqc6YlVld9xJbQ6EfbaNAAbk0Gp6nv%2BfJonATnrm2FF1mhSmFXL%2BR3pbRelvhdkRgfwYPx2KVCRe0qs53s4%2BE2gaazOZdK8xZUjhRp5sJWkSJ2ush9NnfRkto2q%2B27o1sqE1ANdwKja9ZK3RjEd1mhSEKrKQ26HTsUa6fMNiFhsEGOqUBRdARDQt3pU5cuSSeK4ec0udrbXawpZ0qYMgWmBlplqDBW02pMAm37P7qQSFOcU38Mmnx0UmQmvbNEYXUC5oiJvmWjFMWkyt7TLM5aiwdnYctpniK1ZBtBniiGh70JEUSkXcxf%2BkafmYzkwJ2GnZTCc0gQGWg5HeTnzBq%2BO1FQxYMomwwA0%2BZA285kUcxgQliH6fs1Mg4Jc0NNVhdB7nNYQWSjefF&X-Amz-Signature=fa3e1725f16fb40f67b194e520bb6e0ee75e7a8d2d2671e0f2a9c8eee1f7c220&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IESLN62%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T061343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEqnZ7dCQZ%2F256xvyS8zwgkiNVENG9WJJb5WsDk6JC5cAiEA1u7c8DZUDlptRUMIqg9idKUSpyUmEM7szB6NveT7jYgqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCf6k10d1Soz2qi4uCrcA7w0HIpfVNV36m8JWq%2BJJxb3UVWlomhvfRTm8b15Gfv%2F8OYZ3YmDW2jU1vXN%2FXtKofOpTnGs08ThGOr2fSZJRFfVGTiMyyG1w2J2UUiJwPTwSO8fjeNmm3yd6SAqXdDt%2FLtxvXjgWnVHc3vNXzMd7HmSJ5HIlggyh4N1xxXuSOjm5i4vrodEJrnmL7IO0k2cRTUDMuZCukUQW0pRZ%2BPWqVJHxzo4LvdIh9hhc1IHn%2BrJmw6SyYBrCi41q4jKa2c0Rz%2BvhVHlKqdCg8W2TmoRI7ILgJWj0bU%2BqtmlUPr8Vd%2BbrQANa7XOkEaWR8%2F5omj7XxbvAb5v4b6CCwmVpTqLDKA%2FO%2BGg%2FcaUvcYRfaZPoSWXe8qV14xZvMiNtRmmP7xOXSoywtTOJLR0XxrOU%2BgYGd8A4yz%2FEreVm%2BE6b%2BGTQxbkCLtcXtFJAf1UVlChAcj8wCnNe%2FcB1MrOM5rtA%2BqduxFHqc6YlVld9xJbQ6EfbaNAAbk0Gp6nv%2BfJonATnrm2FF1mhSmFXL%2BR3pbRelvhdkRgfwYPx2KVCRe0qs53s4%2BE2gaazOZdK8xZUjhRp5sJWkSJ2ush9NnfRkto2q%2B27o1sqE1ANdwKja9ZK3RjEd1mhSEKrKQ26HTsUa6fMNiFhsEGOqUBRdARDQt3pU5cuSSeK4ec0udrbXawpZ0qYMgWmBlplqDBW02pMAm37P7qQSFOcU38Mmnx0UmQmvbNEYXUC5oiJvmWjFMWkyt7TLM5aiwdnYctpniK1ZBtBniiGh70JEUSkXcxf%2BkafmYzkwJ2GnZTCc0gQGWg5HeTnzBq%2BO1FQxYMomwwA0%2BZA285kUcxgQliH6fs1Mg4Jc0NNVhdB7nNYQWSjefF&X-Amz-Signature=cb84e9f486c7efe5bec6239fc5922d892e5624523f5f0f68145bc4fd264d913b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IESLN62%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T061343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEqnZ7dCQZ%2F256xvyS8zwgkiNVENG9WJJb5WsDk6JC5cAiEA1u7c8DZUDlptRUMIqg9idKUSpyUmEM7szB6NveT7jYgqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCf6k10d1Soz2qi4uCrcA7w0HIpfVNV36m8JWq%2BJJxb3UVWlomhvfRTm8b15Gfv%2F8OYZ3YmDW2jU1vXN%2FXtKofOpTnGs08ThGOr2fSZJRFfVGTiMyyG1w2J2UUiJwPTwSO8fjeNmm3yd6SAqXdDt%2FLtxvXjgWnVHc3vNXzMd7HmSJ5HIlggyh4N1xxXuSOjm5i4vrodEJrnmL7IO0k2cRTUDMuZCukUQW0pRZ%2BPWqVJHxzo4LvdIh9hhc1IHn%2BrJmw6SyYBrCi41q4jKa2c0Rz%2BvhVHlKqdCg8W2TmoRI7ILgJWj0bU%2BqtmlUPr8Vd%2BbrQANa7XOkEaWR8%2F5omj7XxbvAb5v4b6CCwmVpTqLDKA%2FO%2BGg%2FcaUvcYRfaZPoSWXe8qV14xZvMiNtRmmP7xOXSoywtTOJLR0XxrOU%2BgYGd8A4yz%2FEreVm%2BE6b%2BGTQxbkCLtcXtFJAf1UVlChAcj8wCnNe%2FcB1MrOM5rtA%2BqduxFHqc6YlVld9xJbQ6EfbaNAAbk0Gp6nv%2BfJonATnrm2FF1mhSmFXL%2BR3pbRelvhdkRgfwYPx2KVCRe0qs53s4%2BE2gaazOZdK8xZUjhRp5sJWkSJ2ush9NnfRkto2q%2B27o1sqE1ANdwKja9ZK3RjEd1mhSEKrKQ26HTsUa6fMNiFhsEGOqUBRdARDQt3pU5cuSSeK4ec0udrbXawpZ0qYMgWmBlplqDBW02pMAm37P7qQSFOcU38Mmnx0UmQmvbNEYXUC5oiJvmWjFMWkyt7TLM5aiwdnYctpniK1ZBtBniiGh70JEUSkXcxf%2BkafmYzkwJ2GnZTCc0gQGWg5HeTnzBq%2BO1FQxYMomwwA0%2BZA285kUcxgQliH6fs1Mg4Jc0NNVhdB7nNYQWSjefF&X-Amz-Signature=c60b50dc99580159e085824e6e2d57bda9c674f52dde2897dd9a7efd23ef0f30&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IESLN62%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T061343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEqnZ7dCQZ%2F256xvyS8zwgkiNVENG9WJJb5WsDk6JC5cAiEA1u7c8DZUDlptRUMIqg9idKUSpyUmEM7szB6NveT7jYgqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCf6k10d1Soz2qi4uCrcA7w0HIpfVNV36m8JWq%2BJJxb3UVWlomhvfRTm8b15Gfv%2F8OYZ3YmDW2jU1vXN%2FXtKofOpTnGs08ThGOr2fSZJRFfVGTiMyyG1w2J2UUiJwPTwSO8fjeNmm3yd6SAqXdDt%2FLtxvXjgWnVHc3vNXzMd7HmSJ5HIlggyh4N1xxXuSOjm5i4vrodEJrnmL7IO0k2cRTUDMuZCukUQW0pRZ%2BPWqVJHxzo4LvdIh9hhc1IHn%2BrJmw6SyYBrCi41q4jKa2c0Rz%2BvhVHlKqdCg8W2TmoRI7ILgJWj0bU%2BqtmlUPr8Vd%2BbrQANa7XOkEaWR8%2F5omj7XxbvAb5v4b6CCwmVpTqLDKA%2FO%2BGg%2FcaUvcYRfaZPoSWXe8qV14xZvMiNtRmmP7xOXSoywtTOJLR0XxrOU%2BgYGd8A4yz%2FEreVm%2BE6b%2BGTQxbkCLtcXtFJAf1UVlChAcj8wCnNe%2FcB1MrOM5rtA%2BqduxFHqc6YlVld9xJbQ6EfbaNAAbk0Gp6nv%2BfJonATnrm2FF1mhSmFXL%2BR3pbRelvhdkRgfwYPx2KVCRe0qs53s4%2BE2gaazOZdK8xZUjhRp5sJWkSJ2ush9NnfRkto2q%2B27o1sqE1ANdwKja9ZK3RjEd1mhSEKrKQ26HTsUa6fMNiFhsEGOqUBRdARDQt3pU5cuSSeK4ec0udrbXawpZ0qYMgWmBlplqDBW02pMAm37P7qQSFOcU38Mmnx0UmQmvbNEYXUC5oiJvmWjFMWkyt7TLM5aiwdnYctpniK1ZBtBniiGh70JEUSkXcxf%2BkafmYzkwJ2GnZTCc0gQGWg5HeTnzBq%2BO1FQxYMomwwA0%2BZA285kUcxgQliH6fs1Mg4Jc0NNVhdB7nNYQWSjefF&X-Amz-Signature=19756d51386fd225a440a0dd22ec1f014e44f6b3e2fa0258720027db97db911d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IESLN62%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T061343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEqnZ7dCQZ%2F256xvyS8zwgkiNVENG9WJJb5WsDk6JC5cAiEA1u7c8DZUDlptRUMIqg9idKUSpyUmEM7szB6NveT7jYgqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCf6k10d1Soz2qi4uCrcA7w0HIpfVNV36m8JWq%2BJJxb3UVWlomhvfRTm8b15Gfv%2F8OYZ3YmDW2jU1vXN%2FXtKofOpTnGs08ThGOr2fSZJRFfVGTiMyyG1w2J2UUiJwPTwSO8fjeNmm3yd6SAqXdDt%2FLtxvXjgWnVHc3vNXzMd7HmSJ5HIlggyh4N1xxXuSOjm5i4vrodEJrnmL7IO0k2cRTUDMuZCukUQW0pRZ%2BPWqVJHxzo4LvdIh9hhc1IHn%2BrJmw6SyYBrCi41q4jKa2c0Rz%2BvhVHlKqdCg8W2TmoRI7ILgJWj0bU%2BqtmlUPr8Vd%2BbrQANa7XOkEaWR8%2F5omj7XxbvAb5v4b6CCwmVpTqLDKA%2FO%2BGg%2FcaUvcYRfaZPoSWXe8qV14xZvMiNtRmmP7xOXSoywtTOJLR0XxrOU%2BgYGd8A4yz%2FEreVm%2BE6b%2BGTQxbkCLtcXtFJAf1UVlChAcj8wCnNe%2FcB1MrOM5rtA%2BqduxFHqc6YlVld9xJbQ6EfbaNAAbk0Gp6nv%2BfJonATnrm2FF1mhSmFXL%2BR3pbRelvhdkRgfwYPx2KVCRe0qs53s4%2BE2gaazOZdK8xZUjhRp5sJWkSJ2ush9NnfRkto2q%2B27o1sqE1ANdwKja9ZK3RjEd1mhSEKrKQ26HTsUa6fMNiFhsEGOqUBRdARDQt3pU5cuSSeK4ec0udrbXawpZ0qYMgWmBlplqDBW02pMAm37P7qQSFOcU38Mmnx0UmQmvbNEYXUC5oiJvmWjFMWkyt7TLM5aiwdnYctpniK1ZBtBniiGh70JEUSkXcxf%2BkafmYzkwJ2GnZTCc0gQGWg5HeTnzBq%2BO1FQxYMomwwA0%2BZA285kUcxgQliH6fs1Mg4Jc0NNVhdB7nNYQWSjefF&X-Amz-Signature=ed6a137cbc436e77dd87bbf4a5546f74fa53f192718622848fd1b0e8268d7b58&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IESLN62%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T061343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEqnZ7dCQZ%2F256xvyS8zwgkiNVENG9WJJb5WsDk6JC5cAiEA1u7c8DZUDlptRUMIqg9idKUSpyUmEM7szB6NveT7jYgqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCf6k10d1Soz2qi4uCrcA7w0HIpfVNV36m8JWq%2BJJxb3UVWlomhvfRTm8b15Gfv%2F8OYZ3YmDW2jU1vXN%2FXtKofOpTnGs08ThGOr2fSZJRFfVGTiMyyG1w2J2UUiJwPTwSO8fjeNmm3yd6SAqXdDt%2FLtxvXjgWnVHc3vNXzMd7HmSJ5HIlggyh4N1xxXuSOjm5i4vrodEJrnmL7IO0k2cRTUDMuZCukUQW0pRZ%2BPWqVJHxzo4LvdIh9hhc1IHn%2BrJmw6SyYBrCi41q4jKa2c0Rz%2BvhVHlKqdCg8W2TmoRI7ILgJWj0bU%2BqtmlUPr8Vd%2BbrQANa7XOkEaWR8%2F5omj7XxbvAb5v4b6CCwmVpTqLDKA%2FO%2BGg%2FcaUvcYRfaZPoSWXe8qV14xZvMiNtRmmP7xOXSoywtTOJLR0XxrOU%2BgYGd8A4yz%2FEreVm%2BE6b%2BGTQxbkCLtcXtFJAf1UVlChAcj8wCnNe%2FcB1MrOM5rtA%2BqduxFHqc6YlVld9xJbQ6EfbaNAAbk0Gp6nv%2BfJonATnrm2FF1mhSmFXL%2BR3pbRelvhdkRgfwYPx2KVCRe0qs53s4%2BE2gaazOZdK8xZUjhRp5sJWkSJ2ush9NnfRkto2q%2B27o1sqE1ANdwKja9ZK3RjEd1mhSEKrKQ26HTsUa6fMNiFhsEGOqUBRdARDQt3pU5cuSSeK4ec0udrbXawpZ0qYMgWmBlplqDBW02pMAm37P7qQSFOcU38Mmnx0UmQmvbNEYXUC5oiJvmWjFMWkyt7TLM5aiwdnYctpniK1ZBtBniiGh70JEUSkXcxf%2BkafmYzkwJ2GnZTCc0gQGWg5HeTnzBq%2BO1FQxYMomwwA0%2BZA285kUcxgQliH6fs1Mg4Jc0NNVhdB7nNYQWSjefF&X-Amz-Signature=00678a8faeedccedd42176c703470990badcd14d4b40fadd3137eda4aa2cd0f1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IESLN62%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T061343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEqnZ7dCQZ%2F256xvyS8zwgkiNVENG9WJJb5WsDk6JC5cAiEA1u7c8DZUDlptRUMIqg9idKUSpyUmEM7szB6NveT7jYgqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCf6k10d1Soz2qi4uCrcA7w0HIpfVNV36m8JWq%2BJJxb3UVWlomhvfRTm8b15Gfv%2F8OYZ3YmDW2jU1vXN%2FXtKofOpTnGs08ThGOr2fSZJRFfVGTiMyyG1w2J2UUiJwPTwSO8fjeNmm3yd6SAqXdDt%2FLtxvXjgWnVHc3vNXzMd7HmSJ5HIlggyh4N1xxXuSOjm5i4vrodEJrnmL7IO0k2cRTUDMuZCukUQW0pRZ%2BPWqVJHxzo4LvdIh9hhc1IHn%2BrJmw6SyYBrCi41q4jKa2c0Rz%2BvhVHlKqdCg8W2TmoRI7ILgJWj0bU%2BqtmlUPr8Vd%2BbrQANa7XOkEaWR8%2F5omj7XxbvAb5v4b6CCwmVpTqLDKA%2FO%2BGg%2FcaUvcYRfaZPoSWXe8qV14xZvMiNtRmmP7xOXSoywtTOJLR0XxrOU%2BgYGd8A4yz%2FEreVm%2BE6b%2BGTQxbkCLtcXtFJAf1UVlChAcj8wCnNe%2FcB1MrOM5rtA%2BqduxFHqc6YlVld9xJbQ6EfbaNAAbk0Gp6nv%2BfJonATnrm2FF1mhSmFXL%2BR3pbRelvhdkRgfwYPx2KVCRe0qs53s4%2BE2gaazOZdK8xZUjhRp5sJWkSJ2ush9NnfRkto2q%2B27o1sqE1ANdwKja9ZK3RjEd1mhSEKrKQ26HTsUa6fMNiFhsEGOqUBRdARDQt3pU5cuSSeK4ec0udrbXawpZ0qYMgWmBlplqDBW02pMAm37P7qQSFOcU38Mmnx0UmQmvbNEYXUC5oiJvmWjFMWkyt7TLM5aiwdnYctpniK1ZBtBniiGh70JEUSkXcxf%2BkafmYzkwJ2GnZTCc0gQGWg5HeTnzBq%2BO1FQxYMomwwA0%2BZA285kUcxgQliH6fs1Mg4Jc0NNVhdB7nNYQWSjefF&X-Amz-Signature=be05f7cad5c2491e872de09182a35560d3a245f0e6945d97e67a379de23042da&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
