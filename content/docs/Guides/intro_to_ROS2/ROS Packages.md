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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645PC2BYY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIGd%2BdA3VPkd83CB6BflgppCx6Ym5pOnc3PF6cJFVlAW%2BAiEAgvsWZUfP4h%2B41VmoZ%2BQQZMvLG%2FLQ1NBI32slu2m3pU0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDCgtTljZ%2FqvUGXHFCyrcA1C8Xr6RpRZgub3gaCpsiUMPS9dPU63NMpCSXM9IU9zgYsnT09AIl75%2BkXvrEM5o0FcjzL050qeU%2B1NcPFWJJhYzGk%2FF0UPJIeQrGkgU%2B6K3IOAyCFSgNHsljHbqyRht1j8LvrcFUL2hzXFwauk6qkqaVYyQSk0Q9grmzFvTaTANwyNx%2ByOjdGT2VHAQVDpy6UBN%2BTl38za9mSwWPApjcAIbXy8C8zXxyuoXyNR033TIXC%2Fod9VB5HzWy%2F6wDqD5R5JMrfyHe4MeWYJN%2Ft7eWYacXU2U%2Bf0%2BgJNcQRlJ0jUYcAICMFnBw9UJpOa4x1yQkjj%2FtxkNEDq9zslz3eHHZ2QKOQRlCkIIMKJjyH1Sm3KfO0xFbYIdvxJrhoCwjOwQvwet7tjNljqCb%2B%2FyqqyZkDaKhyoilYKrpGiwlvhMlzc26GiWy%2BQcqyxLlGksnaPKM2KFD5%2Fi%2BLbkxkAvVXbp3%2FLnWmooOv2%2FoWijwpzp2AefrPChsNiUGfkb5OHmM4WroMeXLHVOn92iCiMfqBPjPnmsS76NqxO6%2F7Lp9UFi%2FRmitZpuUY6ieCn1i96d8kdo0hiHBaMMKoJb5sbSsUnEXQjbF5rvMIULm5IaUi31aoEisv2BpLLzDZ4wanXxMPa6l8EGOqUB8CuMnskfCDHGeqbuwOAIx7eYs47zRdiqYGbcbsUZJuJHDhNUs4ZitDDO%2F8F%2BaSVPaR5YpeP87H8QsPvxowoSTi8L5tnbRiZMG1tbNANhVK%2FvYK70utBtsEFrV7iOvyKNsXVo%2BrJfJ%2F7M3zbbpq%2BaBtnDv8Q88HEDzReyX2VL5hBot57Vr%2F9DnXl1zoPKCSVMo%2Bx7UzX4D7Kwm7RwMm2tTLfbLYQY&X-Amz-Signature=ba2b713e2a8504194c6cb881872b9c25beb2c7db2f8bd0a96460b76cba65742a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645PC2BYY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIGd%2BdA3VPkd83CB6BflgppCx6Ym5pOnc3PF6cJFVlAW%2BAiEAgvsWZUfP4h%2B41VmoZ%2BQQZMvLG%2FLQ1NBI32slu2m3pU0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDCgtTljZ%2FqvUGXHFCyrcA1C8Xr6RpRZgub3gaCpsiUMPS9dPU63NMpCSXM9IU9zgYsnT09AIl75%2BkXvrEM5o0FcjzL050qeU%2B1NcPFWJJhYzGk%2FF0UPJIeQrGkgU%2B6K3IOAyCFSgNHsljHbqyRht1j8LvrcFUL2hzXFwauk6qkqaVYyQSk0Q9grmzFvTaTANwyNx%2ByOjdGT2VHAQVDpy6UBN%2BTl38za9mSwWPApjcAIbXy8C8zXxyuoXyNR033TIXC%2Fod9VB5HzWy%2F6wDqD5R5JMrfyHe4MeWYJN%2Ft7eWYacXU2U%2Bf0%2BgJNcQRlJ0jUYcAICMFnBw9UJpOa4x1yQkjj%2FtxkNEDq9zslz3eHHZ2QKOQRlCkIIMKJjyH1Sm3KfO0xFbYIdvxJrhoCwjOwQvwet7tjNljqCb%2B%2FyqqyZkDaKhyoilYKrpGiwlvhMlzc26GiWy%2BQcqyxLlGksnaPKM2KFD5%2Fi%2BLbkxkAvVXbp3%2FLnWmooOv2%2FoWijwpzp2AefrPChsNiUGfkb5OHmM4WroMeXLHVOn92iCiMfqBPjPnmsS76NqxO6%2F7Lp9UFi%2FRmitZpuUY6ieCn1i96d8kdo0hiHBaMMKoJb5sbSsUnEXQjbF5rvMIULm5IaUi31aoEisv2BpLLzDZ4wanXxMPa6l8EGOqUB8CuMnskfCDHGeqbuwOAIx7eYs47zRdiqYGbcbsUZJuJHDhNUs4ZitDDO%2F8F%2BaSVPaR5YpeP87H8QsPvxowoSTi8L5tnbRiZMG1tbNANhVK%2FvYK70utBtsEFrV7iOvyKNsXVo%2BrJfJ%2F7M3zbbpq%2BaBtnDv8Q88HEDzReyX2VL5hBot57Vr%2F9DnXl1zoPKCSVMo%2Bx7UzX4D7Kwm7RwMm2tTLfbLYQY&X-Amz-Signature=618ca5fe34385678c134b9eb5f60e24200514bff334a1aff9291ed39443b507d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645PC2BYY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIGd%2BdA3VPkd83CB6BflgppCx6Ym5pOnc3PF6cJFVlAW%2BAiEAgvsWZUfP4h%2B41VmoZ%2BQQZMvLG%2FLQ1NBI32slu2m3pU0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDCgtTljZ%2FqvUGXHFCyrcA1C8Xr6RpRZgub3gaCpsiUMPS9dPU63NMpCSXM9IU9zgYsnT09AIl75%2BkXvrEM5o0FcjzL050qeU%2B1NcPFWJJhYzGk%2FF0UPJIeQrGkgU%2B6K3IOAyCFSgNHsljHbqyRht1j8LvrcFUL2hzXFwauk6qkqaVYyQSk0Q9grmzFvTaTANwyNx%2ByOjdGT2VHAQVDpy6UBN%2BTl38za9mSwWPApjcAIbXy8C8zXxyuoXyNR033TIXC%2Fod9VB5HzWy%2F6wDqD5R5JMrfyHe4MeWYJN%2Ft7eWYacXU2U%2Bf0%2BgJNcQRlJ0jUYcAICMFnBw9UJpOa4x1yQkjj%2FtxkNEDq9zslz3eHHZ2QKOQRlCkIIMKJjyH1Sm3KfO0xFbYIdvxJrhoCwjOwQvwet7tjNljqCb%2B%2FyqqyZkDaKhyoilYKrpGiwlvhMlzc26GiWy%2BQcqyxLlGksnaPKM2KFD5%2Fi%2BLbkxkAvVXbp3%2FLnWmooOv2%2FoWijwpzp2AefrPChsNiUGfkb5OHmM4WroMeXLHVOn92iCiMfqBPjPnmsS76NqxO6%2F7Lp9UFi%2FRmitZpuUY6ieCn1i96d8kdo0hiHBaMMKoJb5sbSsUnEXQjbF5rvMIULm5IaUi31aoEisv2BpLLzDZ4wanXxMPa6l8EGOqUB8CuMnskfCDHGeqbuwOAIx7eYs47zRdiqYGbcbsUZJuJHDhNUs4ZitDDO%2F8F%2BaSVPaR5YpeP87H8QsPvxowoSTi8L5tnbRiZMG1tbNANhVK%2FvYK70utBtsEFrV7iOvyKNsXVo%2BrJfJ%2F7M3zbbpq%2BaBtnDv8Q88HEDzReyX2VL5hBot57Vr%2F9DnXl1zoPKCSVMo%2Bx7UzX4D7Kwm7RwMm2tTLfbLYQY&X-Amz-Signature=a7741a2a42f36d24fc999a77194b984f4ea123104cf1b8c1db95669518385f9b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645PC2BYY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIGd%2BdA3VPkd83CB6BflgppCx6Ym5pOnc3PF6cJFVlAW%2BAiEAgvsWZUfP4h%2B41VmoZ%2BQQZMvLG%2FLQ1NBI32slu2m3pU0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDCgtTljZ%2FqvUGXHFCyrcA1C8Xr6RpRZgub3gaCpsiUMPS9dPU63NMpCSXM9IU9zgYsnT09AIl75%2BkXvrEM5o0FcjzL050qeU%2B1NcPFWJJhYzGk%2FF0UPJIeQrGkgU%2B6K3IOAyCFSgNHsljHbqyRht1j8LvrcFUL2hzXFwauk6qkqaVYyQSk0Q9grmzFvTaTANwyNx%2ByOjdGT2VHAQVDpy6UBN%2BTl38za9mSwWPApjcAIbXy8C8zXxyuoXyNR033TIXC%2Fod9VB5HzWy%2F6wDqD5R5JMrfyHe4MeWYJN%2Ft7eWYacXU2U%2Bf0%2BgJNcQRlJ0jUYcAICMFnBw9UJpOa4x1yQkjj%2FtxkNEDq9zslz3eHHZ2QKOQRlCkIIMKJjyH1Sm3KfO0xFbYIdvxJrhoCwjOwQvwet7tjNljqCb%2B%2FyqqyZkDaKhyoilYKrpGiwlvhMlzc26GiWy%2BQcqyxLlGksnaPKM2KFD5%2Fi%2BLbkxkAvVXbp3%2FLnWmooOv2%2FoWijwpzp2AefrPChsNiUGfkb5OHmM4WroMeXLHVOn92iCiMfqBPjPnmsS76NqxO6%2F7Lp9UFi%2FRmitZpuUY6ieCn1i96d8kdo0hiHBaMMKoJb5sbSsUnEXQjbF5rvMIULm5IaUi31aoEisv2BpLLzDZ4wanXxMPa6l8EGOqUB8CuMnskfCDHGeqbuwOAIx7eYs47zRdiqYGbcbsUZJuJHDhNUs4ZitDDO%2F8F%2BaSVPaR5YpeP87H8QsPvxowoSTi8L5tnbRiZMG1tbNANhVK%2FvYK70utBtsEFrV7iOvyKNsXVo%2BrJfJ%2F7M3zbbpq%2BaBtnDv8Q88HEDzReyX2VL5hBot57Vr%2F9DnXl1zoPKCSVMo%2Bx7UzX4D7Kwm7RwMm2tTLfbLYQY&X-Amz-Signature=b3d5fe5c968295ea194db21ab4cb1c8bd61ae78ece2a204ffac4fb670b73892f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645PC2BYY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIGd%2BdA3VPkd83CB6BflgppCx6Ym5pOnc3PF6cJFVlAW%2BAiEAgvsWZUfP4h%2B41VmoZ%2BQQZMvLG%2FLQ1NBI32slu2m3pU0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDCgtTljZ%2FqvUGXHFCyrcA1C8Xr6RpRZgub3gaCpsiUMPS9dPU63NMpCSXM9IU9zgYsnT09AIl75%2BkXvrEM5o0FcjzL050qeU%2B1NcPFWJJhYzGk%2FF0UPJIeQrGkgU%2B6K3IOAyCFSgNHsljHbqyRht1j8LvrcFUL2hzXFwauk6qkqaVYyQSk0Q9grmzFvTaTANwyNx%2ByOjdGT2VHAQVDpy6UBN%2BTl38za9mSwWPApjcAIbXy8C8zXxyuoXyNR033TIXC%2Fod9VB5HzWy%2F6wDqD5R5JMrfyHe4MeWYJN%2Ft7eWYacXU2U%2Bf0%2BgJNcQRlJ0jUYcAICMFnBw9UJpOa4x1yQkjj%2FtxkNEDq9zslz3eHHZ2QKOQRlCkIIMKJjyH1Sm3KfO0xFbYIdvxJrhoCwjOwQvwet7tjNljqCb%2B%2FyqqyZkDaKhyoilYKrpGiwlvhMlzc26GiWy%2BQcqyxLlGksnaPKM2KFD5%2Fi%2BLbkxkAvVXbp3%2FLnWmooOv2%2FoWijwpzp2AefrPChsNiUGfkb5OHmM4WroMeXLHVOn92iCiMfqBPjPnmsS76NqxO6%2F7Lp9UFi%2FRmitZpuUY6ieCn1i96d8kdo0hiHBaMMKoJb5sbSsUnEXQjbF5rvMIULm5IaUi31aoEisv2BpLLzDZ4wanXxMPa6l8EGOqUB8CuMnskfCDHGeqbuwOAIx7eYs47zRdiqYGbcbsUZJuJHDhNUs4ZitDDO%2F8F%2BaSVPaR5YpeP87H8QsPvxowoSTi8L5tnbRiZMG1tbNANhVK%2FvYK70utBtsEFrV7iOvyKNsXVo%2BrJfJ%2F7M3zbbpq%2BaBtnDv8Q88HEDzReyX2VL5hBot57Vr%2F9DnXl1zoPKCSVMo%2Bx7UzX4D7Kwm7RwMm2tTLfbLYQY&X-Amz-Signature=46ea6eb454884f94e2149f32065fbeed17449a0cdf9b05b51377ea7f1e7e7151&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645PC2BYY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIGd%2BdA3VPkd83CB6BflgppCx6Ym5pOnc3PF6cJFVlAW%2BAiEAgvsWZUfP4h%2B41VmoZ%2BQQZMvLG%2FLQ1NBI32slu2m3pU0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDCgtTljZ%2FqvUGXHFCyrcA1C8Xr6RpRZgub3gaCpsiUMPS9dPU63NMpCSXM9IU9zgYsnT09AIl75%2BkXvrEM5o0FcjzL050qeU%2B1NcPFWJJhYzGk%2FF0UPJIeQrGkgU%2B6K3IOAyCFSgNHsljHbqyRht1j8LvrcFUL2hzXFwauk6qkqaVYyQSk0Q9grmzFvTaTANwyNx%2ByOjdGT2VHAQVDpy6UBN%2BTl38za9mSwWPApjcAIbXy8C8zXxyuoXyNR033TIXC%2Fod9VB5HzWy%2F6wDqD5R5JMrfyHe4MeWYJN%2Ft7eWYacXU2U%2Bf0%2BgJNcQRlJ0jUYcAICMFnBw9UJpOa4x1yQkjj%2FtxkNEDq9zslz3eHHZ2QKOQRlCkIIMKJjyH1Sm3KfO0xFbYIdvxJrhoCwjOwQvwet7tjNljqCb%2B%2FyqqyZkDaKhyoilYKrpGiwlvhMlzc26GiWy%2BQcqyxLlGksnaPKM2KFD5%2Fi%2BLbkxkAvVXbp3%2FLnWmooOv2%2FoWijwpzp2AefrPChsNiUGfkb5OHmM4WroMeXLHVOn92iCiMfqBPjPnmsS76NqxO6%2F7Lp9UFi%2FRmitZpuUY6ieCn1i96d8kdo0hiHBaMMKoJb5sbSsUnEXQjbF5rvMIULm5IaUi31aoEisv2BpLLzDZ4wanXxMPa6l8EGOqUB8CuMnskfCDHGeqbuwOAIx7eYs47zRdiqYGbcbsUZJuJHDhNUs4ZitDDO%2F8F%2BaSVPaR5YpeP87H8QsPvxowoSTi8L5tnbRiZMG1tbNANhVK%2FvYK70utBtsEFrV7iOvyKNsXVo%2BrJfJ%2F7M3zbbpq%2BaBtnDv8Q88HEDzReyX2VL5hBot57Vr%2F9DnXl1zoPKCSVMo%2Bx7UzX4D7Kwm7RwMm2tTLfbLYQY&X-Amz-Signature=bd1cd7a5e157e91ff560847c53b31f28dfab45da962f579a98ed40098d52a7d1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645PC2BYY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIGd%2BdA3VPkd83CB6BflgppCx6Ym5pOnc3PF6cJFVlAW%2BAiEAgvsWZUfP4h%2B41VmoZ%2BQQZMvLG%2FLQ1NBI32slu2m3pU0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDCgtTljZ%2FqvUGXHFCyrcA1C8Xr6RpRZgub3gaCpsiUMPS9dPU63NMpCSXM9IU9zgYsnT09AIl75%2BkXvrEM5o0FcjzL050qeU%2B1NcPFWJJhYzGk%2FF0UPJIeQrGkgU%2B6K3IOAyCFSgNHsljHbqyRht1j8LvrcFUL2hzXFwauk6qkqaVYyQSk0Q9grmzFvTaTANwyNx%2ByOjdGT2VHAQVDpy6UBN%2BTl38za9mSwWPApjcAIbXy8C8zXxyuoXyNR033TIXC%2Fod9VB5HzWy%2F6wDqD5R5JMrfyHe4MeWYJN%2Ft7eWYacXU2U%2Bf0%2BgJNcQRlJ0jUYcAICMFnBw9UJpOa4x1yQkjj%2FtxkNEDq9zslz3eHHZ2QKOQRlCkIIMKJjyH1Sm3KfO0xFbYIdvxJrhoCwjOwQvwet7tjNljqCb%2B%2FyqqyZkDaKhyoilYKrpGiwlvhMlzc26GiWy%2BQcqyxLlGksnaPKM2KFD5%2Fi%2BLbkxkAvVXbp3%2FLnWmooOv2%2FoWijwpzp2AefrPChsNiUGfkb5OHmM4WroMeXLHVOn92iCiMfqBPjPnmsS76NqxO6%2F7Lp9UFi%2FRmitZpuUY6ieCn1i96d8kdo0hiHBaMMKoJb5sbSsUnEXQjbF5rvMIULm5IaUi31aoEisv2BpLLzDZ4wanXxMPa6l8EGOqUB8CuMnskfCDHGeqbuwOAIx7eYs47zRdiqYGbcbsUZJuJHDhNUs4ZitDDO%2F8F%2BaSVPaR5YpeP87H8QsPvxowoSTi8L5tnbRiZMG1tbNANhVK%2FvYK70utBtsEFrV7iOvyKNsXVo%2BrJfJ%2F7M3zbbpq%2BaBtnDv8Q88HEDzReyX2VL5hBot57Vr%2F9DnXl1zoPKCSVMo%2Bx7UzX4D7Kwm7RwMm2tTLfbLYQY&X-Amz-Signature=5608f3ce9c50368fbb34a09cf2e926f1d3a56f77e05f267ff23f956d958fe825&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
