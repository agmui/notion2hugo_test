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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E5S6V4D%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGC6PEQxh8WwkEPfpiDqh5bf2GzBYFgZabDv%2F8AicoC7AiA2rdEIUoX1F1Q8q9yFGuyxuTcDHfcEXVjJDsL6az6nwir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMUldb7uXzF7GQAPw1KtwDJbV6sMTkFtvu95XzS52lF4aWI%2F7nNGa4NJIklpvBkxXKQ%2FW3fkO8P5Qv1iu3B%2BIhfJupvgw%2B4yOZ93FnTv2QPyqYLJJdRqKh4e1jxW6dLvPEOnPeHkwGQnrl5p%2BCELJut0hYPUeCaek1O%2F14yZealHmdp6fU7qQmXjpeEl67PC8iGm%2BltU53vBYMxabKbjZiaucll2nJe5gookMe%2F0j52HaJk4vdbMvG8SwouzUgZxNSLBf0Kzpy7l2rLMakLNKopiz0Bz12WL9%2Bl0YtPnSeMsdfPLTpdJGyAoeq28zfCa%2FeFG9SwdwCVP1gm1Kl01kio8tkTM%2BWitRnyFWO54hHFWPoFfPx%2BJAILK43bG6n8iIbJi3YS7RUhpUTU%2B9%2BG5yS7ZGlSxrpgias%2F96WuTopaBiHHWXKQmoebOmvgVjjRfOL8CNbGm3%2FHazJleUAKhZtAGObgtxny%2BWVJgoklLSrXpYwjgh%2BZBA1dwFVYSI%2F8ZOiI7%2FEkAoiVChI3gZETV9SVXdmNOiD%2F66wQF1jNqhAO4ti61wDhGOdVHqRZ14%2F8A5Lt8AimQv8XiA5S3ZaLvw6%2BZ3AtxncSR1C1rOELlOIUVxgaxLRe325OA3kjnYs0WFTDygEbdhKb0ueRp8w%2BtKxwgY6pgEpIzsx0P0%2Bxlc6P2z3mcYJs7RkL4e3vcjz8WUhHZ3k0rv24VkIqpyBeiTpbN3CNzYzANmQZCpUyR9ObUK0Gtc7mlG94JLl0GgtXakw7SuZIQgioihaddJrRoU7Cw0w1e0PR44LXFhzzzXeW%2BKC1y0Cl3j8IbPqk7dPdvQelEp0F8hff3zFAaMj%2BNEts4%2BeZbcF5XxqqpuQeEAhIt8A316U4rqf7yl9&X-Amz-Signature=a7f3ca6e82f8a3a56999bc874369ca6b054ea64a5ce59d0e1e8a907210536e21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E5S6V4D%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGC6PEQxh8WwkEPfpiDqh5bf2GzBYFgZabDv%2F8AicoC7AiA2rdEIUoX1F1Q8q9yFGuyxuTcDHfcEXVjJDsL6az6nwir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMUldb7uXzF7GQAPw1KtwDJbV6sMTkFtvu95XzS52lF4aWI%2F7nNGa4NJIklpvBkxXKQ%2FW3fkO8P5Qv1iu3B%2BIhfJupvgw%2B4yOZ93FnTv2QPyqYLJJdRqKh4e1jxW6dLvPEOnPeHkwGQnrl5p%2BCELJut0hYPUeCaek1O%2F14yZealHmdp6fU7qQmXjpeEl67PC8iGm%2BltU53vBYMxabKbjZiaucll2nJe5gookMe%2F0j52HaJk4vdbMvG8SwouzUgZxNSLBf0Kzpy7l2rLMakLNKopiz0Bz12WL9%2Bl0YtPnSeMsdfPLTpdJGyAoeq28zfCa%2FeFG9SwdwCVP1gm1Kl01kio8tkTM%2BWitRnyFWO54hHFWPoFfPx%2BJAILK43bG6n8iIbJi3YS7RUhpUTU%2B9%2BG5yS7ZGlSxrpgias%2F96WuTopaBiHHWXKQmoebOmvgVjjRfOL8CNbGm3%2FHazJleUAKhZtAGObgtxny%2BWVJgoklLSrXpYwjgh%2BZBA1dwFVYSI%2F8ZOiI7%2FEkAoiVChI3gZETV9SVXdmNOiD%2F66wQF1jNqhAO4ti61wDhGOdVHqRZ14%2F8A5Lt8AimQv8XiA5S3ZaLvw6%2BZ3AtxncSR1C1rOELlOIUVxgaxLRe325OA3kjnYs0WFTDygEbdhKb0ueRp8w%2BtKxwgY6pgEpIzsx0P0%2Bxlc6P2z3mcYJs7RkL4e3vcjz8WUhHZ3k0rv24VkIqpyBeiTpbN3CNzYzANmQZCpUyR9ObUK0Gtc7mlG94JLl0GgtXakw7SuZIQgioihaddJrRoU7Cw0w1e0PR44LXFhzzzXeW%2BKC1y0Cl3j8IbPqk7dPdvQelEp0F8hff3zFAaMj%2BNEts4%2BeZbcF5XxqqpuQeEAhIt8A316U4rqf7yl9&X-Amz-Signature=eec7bf4b4f1d5b8ccebce9a2265dc3df92812aa8107634c352021df969b17c6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E5S6V4D%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGC6PEQxh8WwkEPfpiDqh5bf2GzBYFgZabDv%2F8AicoC7AiA2rdEIUoX1F1Q8q9yFGuyxuTcDHfcEXVjJDsL6az6nwir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMUldb7uXzF7GQAPw1KtwDJbV6sMTkFtvu95XzS52lF4aWI%2F7nNGa4NJIklpvBkxXKQ%2FW3fkO8P5Qv1iu3B%2BIhfJupvgw%2B4yOZ93FnTv2QPyqYLJJdRqKh4e1jxW6dLvPEOnPeHkwGQnrl5p%2BCELJut0hYPUeCaek1O%2F14yZealHmdp6fU7qQmXjpeEl67PC8iGm%2BltU53vBYMxabKbjZiaucll2nJe5gookMe%2F0j52HaJk4vdbMvG8SwouzUgZxNSLBf0Kzpy7l2rLMakLNKopiz0Bz12WL9%2Bl0YtPnSeMsdfPLTpdJGyAoeq28zfCa%2FeFG9SwdwCVP1gm1Kl01kio8tkTM%2BWitRnyFWO54hHFWPoFfPx%2BJAILK43bG6n8iIbJi3YS7RUhpUTU%2B9%2BG5yS7ZGlSxrpgias%2F96WuTopaBiHHWXKQmoebOmvgVjjRfOL8CNbGm3%2FHazJleUAKhZtAGObgtxny%2BWVJgoklLSrXpYwjgh%2BZBA1dwFVYSI%2F8ZOiI7%2FEkAoiVChI3gZETV9SVXdmNOiD%2F66wQF1jNqhAO4ti61wDhGOdVHqRZ14%2F8A5Lt8AimQv8XiA5S3ZaLvw6%2BZ3AtxncSR1C1rOELlOIUVxgaxLRe325OA3kjnYs0WFTDygEbdhKb0ueRp8w%2BtKxwgY6pgEpIzsx0P0%2Bxlc6P2z3mcYJs7RkL4e3vcjz8WUhHZ3k0rv24VkIqpyBeiTpbN3CNzYzANmQZCpUyR9ObUK0Gtc7mlG94JLl0GgtXakw7SuZIQgioihaddJrRoU7Cw0w1e0PR44LXFhzzzXeW%2BKC1y0Cl3j8IbPqk7dPdvQelEp0F8hff3zFAaMj%2BNEts4%2BeZbcF5XxqqpuQeEAhIt8A316U4rqf7yl9&X-Amz-Signature=2225b5824264daa540f93240334fa8f3c657e97d8654ae143c0635682253b1a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E5S6V4D%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGC6PEQxh8WwkEPfpiDqh5bf2GzBYFgZabDv%2F8AicoC7AiA2rdEIUoX1F1Q8q9yFGuyxuTcDHfcEXVjJDsL6az6nwir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMUldb7uXzF7GQAPw1KtwDJbV6sMTkFtvu95XzS52lF4aWI%2F7nNGa4NJIklpvBkxXKQ%2FW3fkO8P5Qv1iu3B%2BIhfJupvgw%2B4yOZ93FnTv2QPyqYLJJdRqKh4e1jxW6dLvPEOnPeHkwGQnrl5p%2BCELJut0hYPUeCaek1O%2F14yZealHmdp6fU7qQmXjpeEl67PC8iGm%2BltU53vBYMxabKbjZiaucll2nJe5gookMe%2F0j52HaJk4vdbMvG8SwouzUgZxNSLBf0Kzpy7l2rLMakLNKopiz0Bz12WL9%2Bl0YtPnSeMsdfPLTpdJGyAoeq28zfCa%2FeFG9SwdwCVP1gm1Kl01kio8tkTM%2BWitRnyFWO54hHFWPoFfPx%2BJAILK43bG6n8iIbJi3YS7RUhpUTU%2B9%2BG5yS7ZGlSxrpgias%2F96WuTopaBiHHWXKQmoebOmvgVjjRfOL8CNbGm3%2FHazJleUAKhZtAGObgtxny%2BWVJgoklLSrXpYwjgh%2BZBA1dwFVYSI%2F8ZOiI7%2FEkAoiVChI3gZETV9SVXdmNOiD%2F66wQF1jNqhAO4ti61wDhGOdVHqRZ14%2F8A5Lt8AimQv8XiA5S3ZaLvw6%2BZ3AtxncSR1C1rOELlOIUVxgaxLRe325OA3kjnYs0WFTDygEbdhKb0ueRp8w%2BtKxwgY6pgEpIzsx0P0%2Bxlc6P2z3mcYJs7RkL4e3vcjz8WUhHZ3k0rv24VkIqpyBeiTpbN3CNzYzANmQZCpUyR9ObUK0Gtc7mlG94JLl0GgtXakw7SuZIQgioihaddJrRoU7Cw0w1e0PR44LXFhzzzXeW%2BKC1y0Cl3j8IbPqk7dPdvQelEp0F8hff3zFAaMj%2BNEts4%2BeZbcF5XxqqpuQeEAhIt8A316U4rqf7yl9&X-Amz-Signature=a8008dea570800692e9670b46fb7e5a5a987126a47440a3584f9bf5890c43cec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E5S6V4D%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGC6PEQxh8WwkEPfpiDqh5bf2GzBYFgZabDv%2F8AicoC7AiA2rdEIUoX1F1Q8q9yFGuyxuTcDHfcEXVjJDsL6az6nwir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMUldb7uXzF7GQAPw1KtwDJbV6sMTkFtvu95XzS52lF4aWI%2F7nNGa4NJIklpvBkxXKQ%2FW3fkO8P5Qv1iu3B%2BIhfJupvgw%2B4yOZ93FnTv2QPyqYLJJdRqKh4e1jxW6dLvPEOnPeHkwGQnrl5p%2BCELJut0hYPUeCaek1O%2F14yZealHmdp6fU7qQmXjpeEl67PC8iGm%2BltU53vBYMxabKbjZiaucll2nJe5gookMe%2F0j52HaJk4vdbMvG8SwouzUgZxNSLBf0Kzpy7l2rLMakLNKopiz0Bz12WL9%2Bl0YtPnSeMsdfPLTpdJGyAoeq28zfCa%2FeFG9SwdwCVP1gm1Kl01kio8tkTM%2BWitRnyFWO54hHFWPoFfPx%2BJAILK43bG6n8iIbJi3YS7RUhpUTU%2B9%2BG5yS7ZGlSxrpgias%2F96WuTopaBiHHWXKQmoebOmvgVjjRfOL8CNbGm3%2FHazJleUAKhZtAGObgtxny%2BWVJgoklLSrXpYwjgh%2BZBA1dwFVYSI%2F8ZOiI7%2FEkAoiVChI3gZETV9SVXdmNOiD%2F66wQF1jNqhAO4ti61wDhGOdVHqRZ14%2F8A5Lt8AimQv8XiA5S3ZaLvw6%2BZ3AtxncSR1C1rOELlOIUVxgaxLRe325OA3kjnYs0WFTDygEbdhKb0ueRp8w%2BtKxwgY6pgEpIzsx0P0%2Bxlc6P2z3mcYJs7RkL4e3vcjz8WUhHZ3k0rv24VkIqpyBeiTpbN3CNzYzANmQZCpUyR9ObUK0Gtc7mlG94JLl0GgtXakw7SuZIQgioihaddJrRoU7Cw0w1e0PR44LXFhzzzXeW%2BKC1y0Cl3j8IbPqk7dPdvQelEp0F8hff3zFAaMj%2BNEts4%2BeZbcF5XxqqpuQeEAhIt8A316U4rqf7yl9&X-Amz-Signature=b3498e9eff4a4065a097eff16a7030acc8b3febe99b21f798959c75a24228e57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E5S6V4D%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGC6PEQxh8WwkEPfpiDqh5bf2GzBYFgZabDv%2F8AicoC7AiA2rdEIUoX1F1Q8q9yFGuyxuTcDHfcEXVjJDsL6az6nwir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMUldb7uXzF7GQAPw1KtwDJbV6sMTkFtvu95XzS52lF4aWI%2F7nNGa4NJIklpvBkxXKQ%2FW3fkO8P5Qv1iu3B%2BIhfJupvgw%2B4yOZ93FnTv2QPyqYLJJdRqKh4e1jxW6dLvPEOnPeHkwGQnrl5p%2BCELJut0hYPUeCaek1O%2F14yZealHmdp6fU7qQmXjpeEl67PC8iGm%2BltU53vBYMxabKbjZiaucll2nJe5gookMe%2F0j52HaJk4vdbMvG8SwouzUgZxNSLBf0Kzpy7l2rLMakLNKopiz0Bz12WL9%2Bl0YtPnSeMsdfPLTpdJGyAoeq28zfCa%2FeFG9SwdwCVP1gm1Kl01kio8tkTM%2BWitRnyFWO54hHFWPoFfPx%2BJAILK43bG6n8iIbJi3YS7RUhpUTU%2B9%2BG5yS7ZGlSxrpgias%2F96WuTopaBiHHWXKQmoebOmvgVjjRfOL8CNbGm3%2FHazJleUAKhZtAGObgtxny%2BWVJgoklLSrXpYwjgh%2BZBA1dwFVYSI%2F8ZOiI7%2FEkAoiVChI3gZETV9SVXdmNOiD%2F66wQF1jNqhAO4ti61wDhGOdVHqRZ14%2F8A5Lt8AimQv8XiA5S3ZaLvw6%2BZ3AtxncSR1C1rOELlOIUVxgaxLRe325OA3kjnYs0WFTDygEbdhKb0ueRp8w%2BtKxwgY6pgEpIzsx0P0%2Bxlc6P2z3mcYJs7RkL4e3vcjz8WUhHZ3k0rv24VkIqpyBeiTpbN3CNzYzANmQZCpUyR9ObUK0Gtc7mlG94JLl0GgtXakw7SuZIQgioihaddJrRoU7Cw0w1e0PR44LXFhzzzXeW%2BKC1y0Cl3j8IbPqk7dPdvQelEp0F8hff3zFAaMj%2BNEts4%2BeZbcF5XxqqpuQeEAhIt8A316U4rqf7yl9&X-Amz-Signature=545acadc29cb0575d59ff9626f3d079ffb82cc9ae588672e24151e2a1c47954e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E5S6V4D%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGC6PEQxh8WwkEPfpiDqh5bf2GzBYFgZabDv%2F8AicoC7AiA2rdEIUoX1F1Q8q9yFGuyxuTcDHfcEXVjJDsL6az6nwir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMUldb7uXzF7GQAPw1KtwDJbV6sMTkFtvu95XzS52lF4aWI%2F7nNGa4NJIklpvBkxXKQ%2FW3fkO8P5Qv1iu3B%2BIhfJupvgw%2B4yOZ93FnTv2QPyqYLJJdRqKh4e1jxW6dLvPEOnPeHkwGQnrl5p%2BCELJut0hYPUeCaek1O%2F14yZealHmdp6fU7qQmXjpeEl67PC8iGm%2BltU53vBYMxabKbjZiaucll2nJe5gookMe%2F0j52HaJk4vdbMvG8SwouzUgZxNSLBf0Kzpy7l2rLMakLNKopiz0Bz12WL9%2Bl0YtPnSeMsdfPLTpdJGyAoeq28zfCa%2FeFG9SwdwCVP1gm1Kl01kio8tkTM%2BWitRnyFWO54hHFWPoFfPx%2BJAILK43bG6n8iIbJi3YS7RUhpUTU%2B9%2BG5yS7ZGlSxrpgias%2F96WuTopaBiHHWXKQmoebOmvgVjjRfOL8CNbGm3%2FHazJleUAKhZtAGObgtxny%2BWVJgoklLSrXpYwjgh%2BZBA1dwFVYSI%2F8ZOiI7%2FEkAoiVChI3gZETV9SVXdmNOiD%2F66wQF1jNqhAO4ti61wDhGOdVHqRZ14%2F8A5Lt8AimQv8XiA5S3ZaLvw6%2BZ3AtxncSR1C1rOELlOIUVxgaxLRe325OA3kjnYs0WFTDygEbdhKb0ueRp8w%2BtKxwgY6pgEpIzsx0P0%2Bxlc6P2z3mcYJs7RkL4e3vcjz8WUhHZ3k0rv24VkIqpyBeiTpbN3CNzYzANmQZCpUyR9ObUK0Gtc7mlG94JLl0GgtXakw7SuZIQgioihaddJrRoU7Cw0w1e0PR44LXFhzzzXeW%2BKC1y0Cl3j8IbPqk7dPdvQelEp0F8hff3zFAaMj%2BNEts4%2BeZbcF5XxqqpuQeEAhIt8A316U4rqf7yl9&X-Amz-Signature=0defd8ec136ce46f5e70c8b0affde63ea6b56237a4dfee90b3a906c294d6d5d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
