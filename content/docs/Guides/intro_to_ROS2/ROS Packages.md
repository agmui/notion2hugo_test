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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WNMJOUK%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxybrWjK6%2B2RYJZGU%2FM3rqCg3m2eUalfwDCju9qUm5%2BAIgN4kQdUFdSB5yo3FkZp5XSNe5WbU71H8O%2FccGVRqBQBQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMCzai0mDJOLDYsW7SrcA8HI4z6Pw31Y5QPwX4vib7SyTc6hATyJnmH7gcUvvYVHF1Talag6HTvcbB2g%2BmLL2S5oSfMeO%2BVrUwcSbekiSc0Zp643ryPvaY0I%2Bt0KTyE4Rrjg6n7MGKiQlUamZwK4lzwBmSW%2FNhI0lbQbj69F0gzBBlZGLrtTUb5x1qjK811BisOVX9Pt1ZetNJnoGqe%2FAn2LktNkt4671%2F0U9NLotwIGzzZs1JDhWdBJtQrbbMf0SmY2ud82E49943ndlvkoPZPuOeBInWE3jA8Y0C0uHNh7YDGV3Mooa5BiJdePJ4p4OkknVYDeJrJBQU%2BuACYC7OjhE3NLws4NK9aEyuN1RLafwJikSYJkX3OANF%2FtGS0WFFvaHKQCuCyDlcIDXrDCGaURQ4kfqaNflubSWtxrmPxSyINjmou0MI2yb4XzYctPg40kVLFmZEjVq0nwQoxwJzHbcX3f49DI%2BC56q3%2F9S1azNjevYHKh31kFA3N1LvbFJtwM%2FE0lul9XorA3%2BUo0h%2B1RSbImcf0d%2BWG8GswJrVMfVgzhCiF694y6%2BuyHa0hub%2FBIt6S0hvtNg4Bm8IBhOaA3HrwqQ8iDzJ0nBEBVH1dpLmMEnysyX32OeZdSYqUsv5ptjcwPvTpeOhfyMI6dp8EGOqUBltZBhi%2BypYUS2Y0T99K0B220R8mX%2BqcFNmTt4U8N4SKQ5YzTZBqXj2reTp1pFuvLHsAghK1FXniKatRdcbVqZDwod1jVhcWswPDdyWxKfc8AYeqLFgPOTQ91bT3WRKIiatUwLwehMq7vc1C8MXCcecrGk7qw4Ykp8PP8cwDbIlyfcWwnqmCE%2BP05MYgnC9cc%2BkjDzBHvf%2FB3gc3ifsy50reN36tq&X-Amz-Signature=caf1941e35c67189c4d144dbc7478c1682608157f5be42396ceb5fc2c8624363&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WNMJOUK%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxybrWjK6%2B2RYJZGU%2FM3rqCg3m2eUalfwDCju9qUm5%2BAIgN4kQdUFdSB5yo3FkZp5XSNe5WbU71H8O%2FccGVRqBQBQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMCzai0mDJOLDYsW7SrcA8HI4z6Pw31Y5QPwX4vib7SyTc6hATyJnmH7gcUvvYVHF1Talag6HTvcbB2g%2BmLL2S5oSfMeO%2BVrUwcSbekiSc0Zp643ryPvaY0I%2Bt0KTyE4Rrjg6n7MGKiQlUamZwK4lzwBmSW%2FNhI0lbQbj69F0gzBBlZGLrtTUb5x1qjK811BisOVX9Pt1ZetNJnoGqe%2FAn2LktNkt4671%2F0U9NLotwIGzzZs1JDhWdBJtQrbbMf0SmY2ud82E49943ndlvkoPZPuOeBInWE3jA8Y0C0uHNh7YDGV3Mooa5BiJdePJ4p4OkknVYDeJrJBQU%2BuACYC7OjhE3NLws4NK9aEyuN1RLafwJikSYJkX3OANF%2FtGS0WFFvaHKQCuCyDlcIDXrDCGaURQ4kfqaNflubSWtxrmPxSyINjmou0MI2yb4XzYctPg40kVLFmZEjVq0nwQoxwJzHbcX3f49DI%2BC56q3%2F9S1azNjevYHKh31kFA3N1LvbFJtwM%2FE0lul9XorA3%2BUo0h%2B1RSbImcf0d%2BWG8GswJrVMfVgzhCiF694y6%2BuyHa0hub%2FBIt6S0hvtNg4Bm8IBhOaA3HrwqQ8iDzJ0nBEBVH1dpLmMEnysyX32OeZdSYqUsv5ptjcwPvTpeOhfyMI6dp8EGOqUBltZBhi%2BypYUS2Y0T99K0B220R8mX%2BqcFNmTt4U8N4SKQ5YzTZBqXj2reTp1pFuvLHsAghK1FXniKatRdcbVqZDwod1jVhcWswPDdyWxKfc8AYeqLFgPOTQ91bT3WRKIiatUwLwehMq7vc1C8MXCcecrGk7qw4Ykp8PP8cwDbIlyfcWwnqmCE%2BP05MYgnC9cc%2BkjDzBHvf%2FB3gc3ifsy50reN36tq&X-Amz-Signature=fb45b006cb671a185329cf70ad91cbb07f00fdee8d39250a8434f9176f790751&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WNMJOUK%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxybrWjK6%2B2RYJZGU%2FM3rqCg3m2eUalfwDCju9qUm5%2BAIgN4kQdUFdSB5yo3FkZp5XSNe5WbU71H8O%2FccGVRqBQBQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMCzai0mDJOLDYsW7SrcA8HI4z6Pw31Y5QPwX4vib7SyTc6hATyJnmH7gcUvvYVHF1Talag6HTvcbB2g%2BmLL2S5oSfMeO%2BVrUwcSbekiSc0Zp643ryPvaY0I%2Bt0KTyE4Rrjg6n7MGKiQlUamZwK4lzwBmSW%2FNhI0lbQbj69F0gzBBlZGLrtTUb5x1qjK811BisOVX9Pt1ZetNJnoGqe%2FAn2LktNkt4671%2F0U9NLotwIGzzZs1JDhWdBJtQrbbMf0SmY2ud82E49943ndlvkoPZPuOeBInWE3jA8Y0C0uHNh7YDGV3Mooa5BiJdePJ4p4OkknVYDeJrJBQU%2BuACYC7OjhE3NLws4NK9aEyuN1RLafwJikSYJkX3OANF%2FtGS0WFFvaHKQCuCyDlcIDXrDCGaURQ4kfqaNflubSWtxrmPxSyINjmou0MI2yb4XzYctPg40kVLFmZEjVq0nwQoxwJzHbcX3f49DI%2BC56q3%2F9S1azNjevYHKh31kFA3N1LvbFJtwM%2FE0lul9XorA3%2BUo0h%2B1RSbImcf0d%2BWG8GswJrVMfVgzhCiF694y6%2BuyHa0hub%2FBIt6S0hvtNg4Bm8IBhOaA3HrwqQ8iDzJ0nBEBVH1dpLmMEnysyX32OeZdSYqUsv5ptjcwPvTpeOhfyMI6dp8EGOqUBltZBhi%2BypYUS2Y0T99K0B220R8mX%2BqcFNmTt4U8N4SKQ5YzTZBqXj2reTp1pFuvLHsAghK1FXniKatRdcbVqZDwod1jVhcWswPDdyWxKfc8AYeqLFgPOTQ91bT3WRKIiatUwLwehMq7vc1C8MXCcecrGk7qw4Ykp8PP8cwDbIlyfcWwnqmCE%2BP05MYgnC9cc%2BkjDzBHvf%2FB3gc3ifsy50reN36tq&X-Amz-Signature=134a445a0b8ea7427cd6c030d305c51bec0af9bd2f6f4d1c13f05fc8dde8058d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WNMJOUK%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxybrWjK6%2B2RYJZGU%2FM3rqCg3m2eUalfwDCju9qUm5%2BAIgN4kQdUFdSB5yo3FkZp5XSNe5WbU71H8O%2FccGVRqBQBQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMCzai0mDJOLDYsW7SrcA8HI4z6Pw31Y5QPwX4vib7SyTc6hATyJnmH7gcUvvYVHF1Talag6HTvcbB2g%2BmLL2S5oSfMeO%2BVrUwcSbekiSc0Zp643ryPvaY0I%2Bt0KTyE4Rrjg6n7MGKiQlUamZwK4lzwBmSW%2FNhI0lbQbj69F0gzBBlZGLrtTUb5x1qjK811BisOVX9Pt1ZetNJnoGqe%2FAn2LktNkt4671%2F0U9NLotwIGzzZs1JDhWdBJtQrbbMf0SmY2ud82E49943ndlvkoPZPuOeBInWE3jA8Y0C0uHNh7YDGV3Mooa5BiJdePJ4p4OkknVYDeJrJBQU%2BuACYC7OjhE3NLws4NK9aEyuN1RLafwJikSYJkX3OANF%2FtGS0WFFvaHKQCuCyDlcIDXrDCGaURQ4kfqaNflubSWtxrmPxSyINjmou0MI2yb4XzYctPg40kVLFmZEjVq0nwQoxwJzHbcX3f49DI%2BC56q3%2F9S1azNjevYHKh31kFA3N1LvbFJtwM%2FE0lul9XorA3%2BUo0h%2B1RSbImcf0d%2BWG8GswJrVMfVgzhCiF694y6%2BuyHa0hub%2FBIt6S0hvtNg4Bm8IBhOaA3HrwqQ8iDzJ0nBEBVH1dpLmMEnysyX32OeZdSYqUsv5ptjcwPvTpeOhfyMI6dp8EGOqUBltZBhi%2BypYUS2Y0T99K0B220R8mX%2BqcFNmTt4U8N4SKQ5YzTZBqXj2reTp1pFuvLHsAghK1FXniKatRdcbVqZDwod1jVhcWswPDdyWxKfc8AYeqLFgPOTQ91bT3WRKIiatUwLwehMq7vc1C8MXCcecrGk7qw4Ykp8PP8cwDbIlyfcWwnqmCE%2BP05MYgnC9cc%2BkjDzBHvf%2FB3gc3ifsy50reN36tq&X-Amz-Signature=4b8ec2b073d51f9b82f59f6a5bebd3d99acd9b67c6263ca365e4924cc7109d8d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WNMJOUK%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxybrWjK6%2B2RYJZGU%2FM3rqCg3m2eUalfwDCju9qUm5%2BAIgN4kQdUFdSB5yo3FkZp5XSNe5WbU71H8O%2FccGVRqBQBQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMCzai0mDJOLDYsW7SrcA8HI4z6Pw31Y5QPwX4vib7SyTc6hATyJnmH7gcUvvYVHF1Talag6HTvcbB2g%2BmLL2S5oSfMeO%2BVrUwcSbekiSc0Zp643ryPvaY0I%2Bt0KTyE4Rrjg6n7MGKiQlUamZwK4lzwBmSW%2FNhI0lbQbj69F0gzBBlZGLrtTUb5x1qjK811BisOVX9Pt1ZetNJnoGqe%2FAn2LktNkt4671%2F0U9NLotwIGzzZs1JDhWdBJtQrbbMf0SmY2ud82E49943ndlvkoPZPuOeBInWE3jA8Y0C0uHNh7YDGV3Mooa5BiJdePJ4p4OkknVYDeJrJBQU%2BuACYC7OjhE3NLws4NK9aEyuN1RLafwJikSYJkX3OANF%2FtGS0WFFvaHKQCuCyDlcIDXrDCGaURQ4kfqaNflubSWtxrmPxSyINjmou0MI2yb4XzYctPg40kVLFmZEjVq0nwQoxwJzHbcX3f49DI%2BC56q3%2F9S1azNjevYHKh31kFA3N1LvbFJtwM%2FE0lul9XorA3%2BUo0h%2B1RSbImcf0d%2BWG8GswJrVMfVgzhCiF694y6%2BuyHa0hub%2FBIt6S0hvtNg4Bm8IBhOaA3HrwqQ8iDzJ0nBEBVH1dpLmMEnysyX32OeZdSYqUsv5ptjcwPvTpeOhfyMI6dp8EGOqUBltZBhi%2BypYUS2Y0T99K0B220R8mX%2BqcFNmTt4U8N4SKQ5YzTZBqXj2reTp1pFuvLHsAghK1FXniKatRdcbVqZDwod1jVhcWswPDdyWxKfc8AYeqLFgPOTQ91bT3WRKIiatUwLwehMq7vc1C8MXCcecrGk7qw4Ykp8PP8cwDbIlyfcWwnqmCE%2BP05MYgnC9cc%2BkjDzBHvf%2FB3gc3ifsy50reN36tq&X-Amz-Signature=1bcfb14a7bb9648c0ba05d89021674dfc0c87ac7e3f8e334e17e29bdefe59e96&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WNMJOUK%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxybrWjK6%2B2RYJZGU%2FM3rqCg3m2eUalfwDCju9qUm5%2BAIgN4kQdUFdSB5yo3FkZp5XSNe5WbU71H8O%2FccGVRqBQBQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMCzai0mDJOLDYsW7SrcA8HI4z6Pw31Y5QPwX4vib7SyTc6hATyJnmH7gcUvvYVHF1Talag6HTvcbB2g%2BmLL2S5oSfMeO%2BVrUwcSbekiSc0Zp643ryPvaY0I%2Bt0KTyE4Rrjg6n7MGKiQlUamZwK4lzwBmSW%2FNhI0lbQbj69F0gzBBlZGLrtTUb5x1qjK811BisOVX9Pt1ZetNJnoGqe%2FAn2LktNkt4671%2F0U9NLotwIGzzZs1JDhWdBJtQrbbMf0SmY2ud82E49943ndlvkoPZPuOeBInWE3jA8Y0C0uHNh7YDGV3Mooa5BiJdePJ4p4OkknVYDeJrJBQU%2BuACYC7OjhE3NLws4NK9aEyuN1RLafwJikSYJkX3OANF%2FtGS0WFFvaHKQCuCyDlcIDXrDCGaURQ4kfqaNflubSWtxrmPxSyINjmou0MI2yb4XzYctPg40kVLFmZEjVq0nwQoxwJzHbcX3f49DI%2BC56q3%2F9S1azNjevYHKh31kFA3N1LvbFJtwM%2FE0lul9XorA3%2BUo0h%2B1RSbImcf0d%2BWG8GswJrVMfVgzhCiF694y6%2BuyHa0hub%2FBIt6S0hvtNg4Bm8IBhOaA3HrwqQ8iDzJ0nBEBVH1dpLmMEnysyX32OeZdSYqUsv5ptjcwPvTpeOhfyMI6dp8EGOqUBltZBhi%2BypYUS2Y0T99K0B220R8mX%2BqcFNmTt4U8N4SKQ5YzTZBqXj2reTp1pFuvLHsAghK1FXniKatRdcbVqZDwod1jVhcWswPDdyWxKfc8AYeqLFgPOTQ91bT3WRKIiatUwLwehMq7vc1C8MXCcecrGk7qw4Ykp8PP8cwDbIlyfcWwnqmCE%2BP05MYgnC9cc%2BkjDzBHvf%2FB3gc3ifsy50reN36tq&X-Amz-Signature=3a007e0c4b148432491de58e866078b88660f3d6ea098952d2464eb6073e7ab9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WNMJOUK%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxybrWjK6%2B2RYJZGU%2FM3rqCg3m2eUalfwDCju9qUm5%2BAIgN4kQdUFdSB5yo3FkZp5XSNe5WbU71H8O%2FccGVRqBQBQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMCzai0mDJOLDYsW7SrcA8HI4z6Pw31Y5QPwX4vib7SyTc6hATyJnmH7gcUvvYVHF1Talag6HTvcbB2g%2BmLL2S5oSfMeO%2BVrUwcSbekiSc0Zp643ryPvaY0I%2Bt0KTyE4Rrjg6n7MGKiQlUamZwK4lzwBmSW%2FNhI0lbQbj69F0gzBBlZGLrtTUb5x1qjK811BisOVX9Pt1ZetNJnoGqe%2FAn2LktNkt4671%2F0U9NLotwIGzzZs1JDhWdBJtQrbbMf0SmY2ud82E49943ndlvkoPZPuOeBInWE3jA8Y0C0uHNh7YDGV3Mooa5BiJdePJ4p4OkknVYDeJrJBQU%2BuACYC7OjhE3NLws4NK9aEyuN1RLafwJikSYJkX3OANF%2FtGS0WFFvaHKQCuCyDlcIDXrDCGaURQ4kfqaNflubSWtxrmPxSyINjmou0MI2yb4XzYctPg40kVLFmZEjVq0nwQoxwJzHbcX3f49DI%2BC56q3%2F9S1azNjevYHKh31kFA3N1LvbFJtwM%2FE0lul9XorA3%2BUo0h%2B1RSbImcf0d%2BWG8GswJrVMfVgzhCiF694y6%2BuyHa0hub%2FBIt6S0hvtNg4Bm8IBhOaA3HrwqQ8iDzJ0nBEBVH1dpLmMEnysyX32OeZdSYqUsv5ptjcwPvTpeOhfyMI6dp8EGOqUBltZBhi%2BypYUS2Y0T99K0B220R8mX%2BqcFNmTt4U8N4SKQ5YzTZBqXj2reTp1pFuvLHsAghK1FXniKatRdcbVqZDwod1jVhcWswPDdyWxKfc8AYeqLFgPOTQ91bT3WRKIiatUwLwehMq7vc1C8MXCcecrGk7qw4Ykp8PP8cwDbIlyfcWwnqmCE%2BP05MYgnC9cc%2BkjDzBHvf%2FB3gc3ifsy50reN36tq&X-Amz-Signature=4be5bccdce410885558c7887653e273aff0ab0357abe774f42ced8c467da880e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
