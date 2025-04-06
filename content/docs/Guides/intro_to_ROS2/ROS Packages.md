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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S766QKDI%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD192lzGtpqws%2B%2BAGW5oA8ooBVHCYn%2F9Q710ZDiMeCDZAIgaBZc%2BGWxa8GmP%2B93S5WyvhxEvSZ4q6drCTwqqkCLHb8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDK3%2FkJapGG11pxqoSrcA%2Fwa24ICmQ01GxuH8Ik%2Fcg12qKca%2FOKfqK%2FEwdRQe6rM8aVHmaK%2F81niIaadOClUI9cB21Mua2vZl3htDr9uSI%2BdEAN1e7n9ANSkxp6dCRiiRrO4mkLqjR4FCAL2w4m0GSkMVq5VIM5hc6p%2BJgGEQVZ%2FAdctNLU7QvzeTPKyUNCAIOTwz7EyuF4JYlRNkl%2FCYkYEMn4PDYSt8SGio7WZod8t2w%2F4hY9XFSa6OeZ4hp3%2Ben%2BCPkhqZdUpsAdIxsr2dZYE%2Fy1lrJmk%2Br3ZCE4T%2Bnppyc32WwC6b7o2sEG9YXw0mZ5rrfLyrv3SVp4Xg6ue8lZ2%2FRHiFQzQPKKYnwkrByCId3pJs5By2bYpO6TIJoJxAlPGeyKVamWt7SFCf3h%2BxQQs%2Byy0Rk%2Bn1lBGXxPSc5DbHzvM5s%2F6VTvVa4mq%2BIyfUyXCcwOLiEzl285jqDwX%2F0UbKa%2FfaQHKYgD78je7GYJ0SYvRBO0atnIGdGGI%2FHttGy2Xh8U4Myr4vteWLfMaeAYYM%2FxOKl1g7tdKD8e%2BWgqWk2Jhfw61PQvpjX2q3gJQH7Yx6UuGu580zCSK0uUueWxviL2T9gGlgAM2IFm%2Fvo%2FeG4cg9QPoFBse8aaBgZClgjZbBpsU73M78bMMMIWey78GOqUBvCEkFravfZV5z9L4Ja818JaHoBPMFhDRI5xff5cZr6lPY2wR2HGNAdfcCswBh8qUFkW6aHEZDbBTUAHdxau7mGo%2BxIMXJoidkTU4kvbXTfeduDf8%2BJC9ZWhLtqEBivp0OhmhHvBOm3JuxkIaYNpLj5i7A9TRyGg2AF4dHEcSww6D%2F%2BHb5pliUzK4Z%2Bf335oZ2UdR%2FsRMGHQjYhW4OP2EK%2FjEhcNb&X-Amz-Signature=2bc99717f96408f1af0391a3c60d3f4ded5036dcc9a7b38be69d05067ae5ca19&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S766QKDI%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD192lzGtpqws%2B%2BAGW5oA8ooBVHCYn%2F9Q710ZDiMeCDZAIgaBZc%2BGWxa8GmP%2B93S5WyvhxEvSZ4q6drCTwqqkCLHb8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDK3%2FkJapGG11pxqoSrcA%2Fwa24ICmQ01GxuH8Ik%2Fcg12qKca%2FOKfqK%2FEwdRQe6rM8aVHmaK%2F81niIaadOClUI9cB21Mua2vZl3htDr9uSI%2BdEAN1e7n9ANSkxp6dCRiiRrO4mkLqjR4FCAL2w4m0GSkMVq5VIM5hc6p%2BJgGEQVZ%2FAdctNLU7QvzeTPKyUNCAIOTwz7EyuF4JYlRNkl%2FCYkYEMn4PDYSt8SGio7WZod8t2w%2F4hY9XFSa6OeZ4hp3%2Ben%2BCPkhqZdUpsAdIxsr2dZYE%2Fy1lrJmk%2Br3ZCE4T%2Bnppyc32WwC6b7o2sEG9YXw0mZ5rrfLyrv3SVp4Xg6ue8lZ2%2FRHiFQzQPKKYnwkrByCId3pJs5By2bYpO6TIJoJxAlPGeyKVamWt7SFCf3h%2BxQQs%2Byy0Rk%2Bn1lBGXxPSc5DbHzvM5s%2F6VTvVa4mq%2BIyfUyXCcwOLiEzl285jqDwX%2F0UbKa%2FfaQHKYgD78je7GYJ0SYvRBO0atnIGdGGI%2FHttGy2Xh8U4Myr4vteWLfMaeAYYM%2FxOKl1g7tdKD8e%2BWgqWk2Jhfw61PQvpjX2q3gJQH7Yx6UuGu580zCSK0uUueWxviL2T9gGlgAM2IFm%2Fvo%2FeG4cg9QPoFBse8aaBgZClgjZbBpsU73M78bMMMIWey78GOqUBvCEkFravfZV5z9L4Ja818JaHoBPMFhDRI5xff5cZr6lPY2wR2HGNAdfcCswBh8qUFkW6aHEZDbBTUAHdxau7mGo%2BxIMXJoidkTU4kvbXTfeduDf8%2BJC9ZWhLtqEBivp0OhmhHvBOm3JuxkIaYNpLj5i7A9TRyGg2AF4dHEcSww6D%2F%2BHb5pliUzK4Z%2Bf335oZ2UdR%2FsRMGHQjYhW4OP2EK%2FjEhcNb&X-Amz-Signature=5542530dbadac6e4b64108de172842113d0c047f2a6619cc68325cf192a64cea&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S766QKDI%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD192lzGtpqws%2B%2BAGW5oA8ooBVHCYn%2F9Q710ZDiMeCDZAIgaBZc%2BGWxa8GmP%2B93S5WyvhxEvSZ4q6drCTwqqkCLHb8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDK3%2FkJapGG11pxqoSrcA%2Fwa24ICmQ01GxuH8Ik%2Fcg12qKca%2FOKfqK%2FEwdRQe6rM8aVHmaK%2F81niIaadOClUI9cB21Mua2vZl3htDr9uSI%2BdEAN1e7n9ANSkxp6dCRiiRrO4mkLqjR4FCAL2w4m0GSkMVq5VIM5hc6p%2BJgGEQVZ%2FAdctNLU7QvzeTPKyUNCAIOTwz7EyuF4JYlRNkl%2FCYkYEMn4PDYSt8SGio7WZod8t2w%2F4hY9XFSa6OeZ4hp3%2Ben%2BCPkhqZdUpsAdIxsr2dZYE%2Fy1lrJmk%2Br3ZCE4T%2Bnppyc32WwC6b7o2sEG9YXw0mZ5rrfLyrv3SVp4Xg6ue8lZ2%2FRHiFQzQPKKYnwkrByCId3pJs5By2bYpO6TIJoJxAlPGeyKVamWt7SFCf3h%2BxQQs%2Byy0Rk%2Bn1lBGXxPSc5DbHzvM5s%2F6VTvVa4mq%2BIyfUyXCcwOLiEzl285jqDwX%2F0UbKa%2FfaQHKYgD78je7GYJ0SYvRBO0atnIGdGGI%2FHttGy2Xh8U4Myr4vteWLfMaeAYYM%2FxOKl1g7tdKD8e%2BWgqWk2Jhfw61PQvpjX2q3gJQH7Yx6UuGu580zCSK0uUueWxviL2T9gGlgAM2IFm%2Fvo%2FeG4cg9QPoFBse8aaBgZClgjZbBpsU73M78bMMMIWey78GOqUBvCEkFravfZV5z9L4Ja818JaHoBPMFhDRI5xff5cZr6lPY2wR2HGNAdfcCswBh8qUFkW6aHEZDbBTUAHdxau7mGo%2BxIMXJoidkTU4kvbXTfeduDf8%2BJC9ZWhLtqEBivp0OhmhHvBOm3JuxkIaYNpLj5i7A9TRyGg2AF4dHEcSww6D%2F%2BHb5pliUzK4Z%2Bf335oZ2UdR%2FsRMGHQjYhW4OP2EK%2FjEhcNb&X-Amz-Signature=14c7f6660d5c28ab776b6b95b7fc778b59d9806d5caf73e6d2393845da0bc162&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S766QKDI%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD192lzGtpqws%2B%2BAGW5oA8ooBVHCYn%2F9Q710ZDiMeCDZAIgaBZc%2BGWxa8GmP%2B93S5WyvhxEvSZ4q6drCTwqqkCLHb8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDK3%2FkJapGG11pxqoSrcA%2Fwa24ICmQ01GxuH8Ik%2Fcg12qKca%2FOKfqK%2FEwdRQe6rM8aVHmaK%2F81niIaadOClUI9cB21Mua2vZl3htDr9uSI%2BdEAN1e7n9ANSkxp6dCRiiRrO4mkLqjR4FCAL2w4m0GSkMVq5VIM5hc6p%2BJgGEQVZ%2FAdctNLU7QvzeTPKyUNCAIOTwz7EyuF4JYlRNkl%2FCYkYEMn4PDYSt8SGio7WZod8t2w%2F4hY9XFSa6OeZ4hp3%2Ben%2BCPkhqZdUpsAdIxsr2dZYE%2Fy1lrJmk%2Br3ZCE4T%2Bnppyc32WwC6b7o2sEG9YXw0mZ5rrfLyrv3SVp4Xg6ue8lZ2%2FRHiFQzQPKKYnwkrByCId3pJs5By2bYpO6TIJoJxAlPGeyKVamWt7SFCf3h%2BxQQs%2Byy0Rk%2Bn1lBGXxPSc5DbHzvM5s%2F6VTvVa4mq%2BIyfUyXCcwOLiEzl285jqDwX%2F0UbKa%2FfaQHKYgD78je7GYJ0SYvRBO0atnIGdGGI%2FHttGy2Xh8U4Myr4vteWLfMaeAYYM%2FxOKl1g7tdKD8e%2BWgqWk2Jhfw61PQvpjX2q3gJQH7Yx6UuGu580zCSK0uUueWxviL2T9gGlgAM2IFm%2Fvo%2FeG4cg9QPoFBse8aaBgZClgjZbBpsU73M78bMMMIWey78GOqUBvCEkFravfZV5z9L4Ja818JaHoBPMFhDRI5xff5cZr6lPY2wR2HGNAdfcCswBh8qUFkW6aHEZDbBTUAHdxau7mGo%2BxIMXJoidkTU4kvbXTfeduDf8%2BJC9ZWhLtqEBivp0OhmhHvBOm3JuxkIaYNpLj5i7A9TRyGg2AF4dHEcSww6D%2F%2BHb5pliUzK4Z%2Bf335oZ2UdR%2FsRMGHQjYhW4OP2EK%2FjEhcNb&X-Amz-Signature=dacd034f11ea750d00f8f1aa621f94ed0ad00bc22f42fbf20a3d3b8c73b7691f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S766QKDI%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD192lzGtpqws%2B%2BAGW5oA8ooBVHCYn%2F9Q710ZDiMeCDZAIgaBZc%2BGWxa8GmP%2B93S5WyvhxEvSZ4q6drCTwqqkCLHb8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDK3%2FkJapGG11pxqoSrcA%2Fwa24ICmQ01GxuH8Ik%2Fcg12qKca%2FOKfqK%2FEwdRQe6rM8aVHmaK%2F81niIaadOClUI9cB21Mua2vZl3htDr9uSI%2BdEAN1e7n9ANSkxp6dCRiiRrO4mkLqjR4FCAL2w4m0GSkMVq5VIM5hc6p%2BJgGEQVZ%2FAdctNLU7QvzeTPKyUNCAIOTwz7EyuF4JYlRNkl%2FCYkYEMn4PDYSt8SGio7WZod8t2w%2F4hY9XFSa6OeZ4hp3%2Ben%2BCPkhqZdUpsAdIxsr2dZYE%2Fy1lrJmk%2Br3ZCE4T%2Bnppyc32WwC6b7o2sEG9YXw0mZ5rrfLyrv3SVp4Xg6ue8lZ2%2FRHiFQzQPKKYnwkrByCId3pJs5By2bYpO6TIJoJxAlPGeyKVamWt7SFCf3h%2BxQQs%2Byy0Rk%2Bn1lBGXxPSc5DbHzvM5s%2F6VTvVa4mq%2BIyfUyXCcwOLiEzl285jqDwX%2F0UbKa%2FfaQHKYgD78je7GYJ0SYvRBO0atnIGdGGI%2FHttGy2Xh8U4Myr4vteWLfMaeAYYM%2FxOKl1g7tdKD8e%2BWgqWk2Jhfw61PQvpjX2q3gJQH7Yx6UuGu580zCSK0uUueWxviL2T9gGlgAM2IFm%2Fvo%2FeG4cg9QPoFBse8aaBgZClgjZbBpsU73M78bMMMIWey78GOqUBvCEkFravfZV5z9L4Ja818JaHoBPMFhDRI5xff5cZr6lPY2wR2HGNAdfcCswBh8qUFkW6aHEZDbBTUAHdxau7mGo%2BxIMXJoidkTU4kvbXTfeduDf8%2BJC9ZWhLtqEBivp0OhmhHvBOm3JuxkIaYNpLj5i7A9TRyGg2AF4dHEcSww6D%2F%2BHb5pliUzK4Z%2Bf335oZ2UdR%2FsRMGHQjYhW4OP2EK%2FjEhcNb&X-Amz-Signature=7d9d04666a7cabd39562955b0d318fc29858c4e0abd445c07c70e8f4b58fe865&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S766QKDI%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD192lzGtpqws%2B%2BAGW5oA8ooBVHCYn%2F9Q710ZDiMeCDZAIgaBZc%2BGWxa8GmP%2B93S5WyvhxEvSZ4q6drCTwqqkCLHb8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDK3%2FkJapGG11pxqoSrcA%2Fwa24ICmQ01GxuH8Ik%2Fcg12qKca%2FOKfqK%2FEwdRQe6rM8aVHmaK%2F81niIaadOClUI9cB21Mua2vZl3htDr9uSI%2BdEAN1e7n9ANSkxp6dCRiiRrO4mkLqjR4FCAL2w4m0GSkMVq5VIM5hc6p%2BJgGEQVZ%2FAdctNLU7QvzeTPKyUNCAIOTwz7EyuF4JYlRNkl%2FCYkYEMn4PDYSt8SGio7WZod8t2w%2F4hY9XFSa6OeZ4hp3%2Ben%2BCPkhqZdUpsAdIxsr2dZYE%2Fy1lrJmk%2Br3ZCE4T%2Bnppyc32WwC6b7o2sEG9YXw0mZ5rrfLyrv3SVp4Xg6ue8lZ2%2FRHiFQzQPKKYnwkrByCId3pJs5By2bYpO6TIJoJxAlPGeyKVamWt7SFCf3h%2BxQQs%2Byy0Rk%2Bn1lBGXxPSc5DbHzvM5s%2F6VTvVa4mq%2BIyfUyXCcwOLiEzl285jqDwX%2F0UbKa%2FfaQHKYgD78je7GYJ0SYvRBO0atnIGdGGI%2FHttGy2Xh8U4Myr4vteWLfMaeAYYM%2FxOKl1g7tdKD8e%2BWgqWk2Jhfw61PQvpjX2q3gJQH7Yx6UuGu580zCSK0uUueWxviL2T9gGlgAM2IFm%2Fvo%2FeG4cg9QPoFBse8aaBgZClgjZbBpsU73M78bMMMIWey78GOqUBvCEkFravfZV5z9L4Ja818JaHoBPMFhDRI5xff5cZr6lPY2wR2HGNAdfcCswBh8qUFkW6aHEZDbBTUAHdxau7mGo%2BxIMXJoidkTU4kvbXTfeduDf8%2BJC9ZWhLtqEBivp0OhmhHvBOm3JuxkIaYNpLj5i7A9TRyGg2AF4dHEcSww6D%2F%2BHb5pliUzK4Z%2Bf335oZ2UdR%2FsRMGHQjYhW4OP2EK%2FjEhcNb&X-Amz-Signature=c71f03d038078383ef7e2ea2cfd4f05166cb504460d7f6c87797a76b8bf64c48&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S766QKDI%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD192lzGtpqws%2B%2BAGW5oA8ooBVHCYn%2F9Q710ZDiMeCDZAIgaBZc%2BGWxa8GmP%2B93S5WyvhxEvSZ4q6drCTwqqkCLHb8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDK3%2FkJapGG11pxqoSrcA%2Fwa24ICmQ01GxuH8Ik%2Fcg12qKca%2FOKfqK%2FEwdRQe6rM8aVHmaK%2F81niIaadOClUI9cB21Mua2vZl3htDr9uSI%2BdEAN1e7n9ANSkxp6dCRiiRrO4mkLqjR4FCAL2w4m0GSkMVq5VIM5hc6p%2BJgGEQVZ%2FAdctNLU7QvzeTPKyUNCAIOTwz7EyuF4JYlRNkl%2FCYkYEMn4PDYSt8SGio7WZod8t2w%2F4hY9XFSa6OeZ4hp3%2Ben%2BCPkhqZdUpsAdIxsr2dZYE%2Fy1lrJmk%2Br3ZCE4T%2Bnppyc32WwC6b7o2sEG9YXw0mZ5rrfLyrv3SVp4Xg6ue8lZ2%2FRHiFQzQPKKYnwkrByCId3pJs5By2bYpO6TIJoJxAlPGeyKVamWt7SFCf3h%2BxQQs%2Byy0Rk%2Bn1lBGXxPSc5DbHzvM5s%2F6VTvVa4mq%2BIyfUyXCcwOLiEzl285jqDwX%2F0UbKa%2FfaQHKYgD78je7GYJ0SYvRBO0atnIGdGGI%2FHttGy2Xh8U4Myr4vteWLfMaeAYYM%2FxOKl1g7tdKD8e%2BWgqWk2Jhfw61PQvpjX2q3gJQH7Yx6UuGu580zCSK0uUueWxviL2T9gGlgAM2IFm%2Fvo%2FeG4cg9QPoFBse8aaBgZClgjZbBpsU73M78bMMMIWey78GOqUBvCEkFravfZV5z9L4Ja818JaHoBPMFhDRI5xff5cZr6lPY2wR2HGNAdfcCswBh8qUFkW6aHEZDbBTUAHdxau7mGo%2BxIMXJoidkTU4kvbXTfeduDf8%2BJC9ZWhLtqEBivp0OhmhHvBOm3JuxkIaYNpLj5i7A9TRyGg2AF4dHEcSww6D%2F%2BHb5pliUzK4Z%2Bf335oZ2UdR%2FsRMGHQjYhW4OP2EK%2FjEhcNb&X-Amz-Signature=fe8f3214922884fee6a1867dd65aaa8a042fb0481e6cab8d723231269e9c9716&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
