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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W5EONOF%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDYI2r6OmpAQKTJWNh1cfh%2FXtjwcEfWxXSAvybc7yMJ0gIgEB%2B3KBwprcIwgg7S%2BqCNkRwHSTwBXQTtsxpH%2BQWLEcwq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMfDa9Pf%2FKrenX%2FRoircA9hYbXzzSj84RZaoTHSEOh1fFX%2Bfofr3ISle2%2F%2FLPeFyKtgxPhwqqljLMNiqSJnrCCgpD2W7Lp4qm3P40tOKcCIB4P3jUfQOG52Zr9eLAfYnpIs%2BY84rii0YltujzG6Tw47MqBojN3XFQGpt%2BK9K9ZMziBbjSwsSOgYVlDATMwdHwVO8CffQZveGjqrQxKgVV6Lit6Kb6zA2jnyQxdENYEFautKyR6n2TtCoqEFiRP8W8ujPFvdjH2C3TyLkIKmGrRfVjkZXKjmPMxqYUhLCDZhMo4XFhdwbsRWsK3fBC4Vy%2B7WQzclDTU6BVwRy1kHfQh3HZxuP24nYNdQ38%2BeNHBLDfZ5BZo64SyYY2cX0nMQQrpXaWd9XVpoNBvOIcNtp0teu7t5Hvz5R776tuokcaCyUS3FrmaWjJYrE4nQhsdIfGvWozJJ%2FNoNVkuLvtktjazOAwV8ax9hkutxbI9UhCPmB6Mbl8%2FUSTYRnk15%2BjTzaPotOjctZwEuc1KiIAbGuz3KiddtSDR0IZh4kHy5S20dntQbzMxMfCDYq6NGXo7V4seNlI9Nnt0DCI7FPaxIykcNPims9ebJmlehsWK5nwtmfx5RbeJXs%2BMV2SPElLKyMJvthbwIfU7lrD223MNDnoMMGOqUBz0dzaospKGgrm920B5AvWtNEAIQ%2BwqYYZBVmMjvmN5lqN1yc8XkGEbK%2B4S%2Bo%2FTISp%2BGuIg4fyRw%2F5egM14M8B7Z0YbC2vAPUytc3zisD%2BK7AzG%2B1lLJi%2BczC4py%2B%2Ff8g9I8JuQNqLqhv4Hoz3IGoslRAMjqOlijMZrdDy88IdDlBxecqPkYMZhKtCOqNa7%2BMN7wz4AziZtaofZS39OykP7vGVqd2&X-Amz-Signature=c498bb38bbbc6397fe3880aa54b676fa33bc88cb2edfc50118ad3cc6272b96e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W5EONOF%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDYI2r6OmpAQKTJWNh1cfh%2FXtjwcEfWxXSAvybc7yMJ0gIgEB%2B3KBwprcIwgg7S%2BqCNkRwHSTwBXQTtsxpH%2BQWLEcwq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMfDa9Pf%2FKrenX%2FRoircA9hYbXzzSj84RZaoTHSEOh1fFX%2Bfofr3ISle2%2F%2FLPeFyKtgxPhwqqljLMNiqSJnrCCgpD2W7Lp4qm3P40tOKcCIB4P3jUfQOG52Zr9eLAfYnpIs%2BY84rii0YltujzG6Tw47MqBojN3XFQGpt%2BK9K9ZMziBbjSwsSOgYVlDATMwdHwVO8CffQZveGjqrQxKgVV6Lit6Kb6zA2jnyQxdENYEFautKyR6n2TtCoqEFiRP8W8ujPFvdjH2C3TyLkIKmGrRfVjkZXKjmPMxqYUhLCDZhMo4XFhdwbsRWsK3fBC4Vy%2B7WQzclDTU6BVwRy1kHfQh3HZxuP24nYNdQ38%2BeNHBLDfZ5BZo64SyYY2cX0nMQQrpXaWd9XVpoNBvOIcNtp0teu7t5Hvz5R776tuokcaCyUS3FrmaWjJYrE4nQhsdIfGvWozJJ%2FNoNVkuLvtktjazOAwV8ax9hkutxbI9UhCPmB6Mbl8%2FUSTYRnk15%2BjTzaPotOjctZwEuc1KiIAbGuz3KiddtSDR0IZh4kHy5S20dntQbzMxMfCDYq6NGXo7V4seNlI9Nnt0DCI7FPaxIykcNPims9ebJmlehsWK5nwtmfx5RbeJXs%2BMV2SPElLKyMJvthbwIfU7lrD223MNDnoMMGOqUBz0dzaospKGgrm920B5AvWtNEAIQ%2BwqYYZBVmMjvmN5lqN1yc8XkGEbK%2B4S%2Bo%2FTISp%2BGuIg4fyRw%2F5egM14M8B7Z0YbC2vAPUytc3zisD%2BK7AzG%2B1lLJi%2BczC4py%2B%2Ff8g9I8JuQNqLqhv4Hoz3IGoslRAMjqOlijMZrdDy88IdDlBxecqPkYMZhKtCOqNa7%2BMN7wz4AziZtaofZS39OykP7vGVqd2&X-Amz-Signature=6acfafe4600ccca46e63b4dfe2373f3fa02e7b0eb7b0e67061321863476774e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W5EONOF%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDYI2r6OmpAQKTJWNh1cfh%2FXtjwcEfWxXSAvybc7yMJ0gIgEB%2B3KBwprcIwgg7S%2BqCNkRwHSTwBXQTtsxpH%2BQWLEcwq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMfDa9Pf%2FKrenX%2FRoircA9hYbXzzSj84RZaoTHSEOh1fFX%2Bfofr3ISle2%2F%2FLPeFyKtgxPhwqqljLMNiqSJnrCCgpD2W7Lp4qm3P40tOKcCIB4P3jUfQOG52Zr9eLAfYnpIs%2BY84rii0YltujzG6Tw47MqBojN3XFQGpt%2BK9K9ZMziBbjSwsSOgYVlDATMwdHwVO8CffQZveGjqrQxKgVV6Lit6Kb6zA2jnyQxdENYEFautKyR6n2TtCoqEFiRP8W8ujPFvdjH2C3TyLkIKmGrRfVjkZXKjmPMxqYUhLCDZhMo4XFhdwbsRWsK3fBC4Vy%2B7WQzclDTU6BVwRy1kHfQh3HZxuP24nYNdQ38%2BeNHBLDfZ5BZo64SyYY2cX0nMQQrpXaWd9XVpoNBvOIcNtp0teu7t5Hvz5R776tuokcaCyUS3FrmaWjJYrE4nQhsdIfGvWozJJ%2FNoNVkuLvtktjazOAwV8ax9hkutxbI9UhCPmB6Mbl8%2FUSTYRnk15%2BjTzaPotOjctZwEuc1KiIAbGuz3KiddtSDR0IZh4kHy5S20dntQbzMxMfCDYq6NGXo7V4seNlI9Nnt0DCI7FPaxIykcNPims9ebJmlehsWK5nwtmfx5RbeJXs%2BMV2SPElLKyMJvthbwIfU7lrD223MNDnoMMGOqUBz0dzaospKGgrm920B5AvWtNEAIQ%2BwqYYZBVmMjvmN5lqN1yc8XkGEbK%2B4S%2Bo%2FTISp%2BGuIg4fyRw%2F5egM14M8B7Z0YbC2vAPUytc3zisD%2BK7AzG%2B1lLJi%2BczC4py%2B%2Ff8g9I8JuQNqLqhv4Hoz3IGoslRAMjqOlijMZrdDy88IdDlBxecqPkYMZhKtCOqNa7%2BMN7wz4AziZtaofZS39OykP7vGVqd2&X-Amz-Signature=343ea96140ae5df5f7294ac64493912498b7005d92f094bcabc4dbd38fe3e68d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W5EONOF%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDYI2r6OmpAQKTJWNh1cfh%2FXtjwcEfWxXSAvybc7yMJ0gIgEB%2B3KBwprcIwgg7S%2BqCNkRwHSTwBXQTtsxpH%2BQWLEcwq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMfDa9Pf%2FKrenX%2FRoircA9hYbXzzSj84RZaoTHSEOh1fFX%2Bfofr3ISle2%2F%2FLPeFyKtgxPhwqqljLMNiqSJnrCCgpD2W7Lp4qm3P40tOKcCIB4P3jUfQOG52Zr9eLAfYnpIs%2BY84rii0YltujzG6Tw47MqBojN3XFQGpt%2BK9K9ZMziBbjSwsSOgYVlDATMwdHwVO8CffQZveGjqrQxKgVV6Lit6Kb6zA2jnyQxdENYEFautKyR6n2TtCoqEFiRP8W8ujPFvdjH2C3TyLkIKmGrRfVjkZXKjmPMxqYUhLCDZhMo4XFhdwbsRWsK3fBC4Vy%2B7WQzclDTU6BVwRy1kHfQh3HZxuP24nYNdQ38%2BeNHBLDfZ5BZo64SyYY2cX0nMQQrpXaWd9XVpoNBvOIcNtp0teu7t5Hvz5R776tuokcaCyUS3FrmaWjJYrE4nQhsdIfGvWozJJ%2FNoNVkuLvtktjazOAwV8ax9hkutxbI9UhCPmB6Mbl8%2FUSTYRnk15%2BjTzaPotOjctZwEuc1KiIAbGuz3KiddtSDR0IZh4kHy5S20dntQbzMxMfCDYq6NGXo7V4seNlI9Nnt0DCI7FPaxIykcNPims9ebJmlehsWK5nwtmfx5RbeJXs%2BMV2SPElLKyMJvthbwIfU7lrD223MNDnoMMGOqUBz0dzaospKGgrm920B5AvWtNEAIQ%2BwqYYZBVmMjvmN5lqN1yc8XkGEbK%2B4S%2Bo%2FTISp%2BGuIg4fyRw%2F5egM14M8B7Z0YbC2vAPUytc3zisD%2BK7AzG%2B1lLJi%2BczC4py%2B%2Ff8g9I8JuQNqLqhv4Hoz3IGoslRAMjqOlijMZrdDy88IdDlBxecqPkYMZhKtCOqNa7%2BMN7wz4AziZtaofZS39OykP7vGVqd2&X-Amz-Signature=ddd42afa5b85b0d9091187be06faa6430678e7f6c130140f897877d0ff2bb472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W5EONOF%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDYI2r6OmpAQKTJWNh1cfh%2FXtjwcEfWxXSAvybc7yMJ0gIgEB%2B3KBwprcIwgg7S%2BqCNkRwHSTwBXQTtsxpH%2BQWLEcwq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMfDa9Pf%2FKrenX%2FRoircA9hYbXzzSj84RZaoTHSEOh1fFX%2Bfofr3ISle2%2F%2FLPeFyKtgxPhwqqljLMNiqSJnrCCgpD2W7Lp4qm3P40tOKcCIB4P3jUfQOG52Zr9eLAfYnpIs%2BY84rii0YltujzG6Tw47MqBojN3XFQGpt%2BK9K9ZMziBbjSwsSOgYVlDATMwdHwVO8CffQZveGjqrQxKgVV6Lit6Kb6zA2jnyQxdENYEFautKyR6n2TtCoqEFiRP8W8ujPFvdjH2C3TyLkIKmGrRfVjkZXKjmPMxqYUhLCDZhMo4XFhdwbsRWsK3fBC4Vy%2B7WQzclDTU6BVwRy1kHfQh3HZxuP24nYNdQ38%2BeNHBLDfZ5BZo64SyYY2cX0nMQQrpXaWd9XVpoNBvOIcNtp0teu7t5Hvz5R776tuokcaCyUS3FrmaWjJYrE4nQhsdIfGvWozJJ%2FNoNVkuLvtktjazOAwV8ax9hkutxbI9UhCPmB6Mbl8%2FUSTYRnk15%2BjTzaPotOjctZwEuc1KiIAbGuz3KiddtSDR0IZh4kHy5S20dntQbzMxMfCDYq6NGXo7V4seNlI9Nnt0DCI7FPaxIykcNPims9ebJmlehsWK5nwtmfx5RbeJXs%2BMV2SPElLKyMJvthbwIfU7lrD223MNDnoMMGOqUBz0dzaospKGgrm920B5AvWtNEAIQ%2BwqYYZBVmMjvmN5lqN1yc8XkGEbK%2B4S%2Bo%2FTISp%2BGuIg4fyRw%2F5egM14M8B7Z0YbC2vAPUytc3zisD%2BK7AzG%2B1lLJi%2BczC4py%2B%2Ff8g9I8JuQNqLqhv4Hoz3IGoslRAMjqOlijMZrdDy88IdDlBxecqPkYMZhKtCOqNa7%2BMN7wz4AziZtaofZS39OykP7vGVqd2&X-Amz-Signature=f4f16392c4db621aa338239952499e5caf1ce1db6e1c4b2cab5eb7a32a7e8f38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W5EONOF%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDYI2r6OmpAQKTJWNh1cfh%2FXtjwcEfWxXSAvybc7yMJ0gIgEB%2B3KBwprcIwgg7S%2BqCNkRwHSTwBXQTtsxpH%2BQWLEcwq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMfDa9Pf%2FKrenX%2FRoircA9hYbXzzSj84RZaoTHSEOh1fFX%2Bfofr3ISle2%2F%2FLPeFyKtgxPhwqqljLMNiqSJnrCCgpD2W7Lp4qm3P40tOKcCIB4P3jUfQOG52Zr9eLAfYnpIs%2BY84rii0YltujzG6Tw47MqBojN3XFQGpt%2BK9K9ZMziBbjSwsSOgYVlDATMwdHwVO8CffQZveGjqrQxKgVV6Lit6Kb6zA2jnyQxdENYEFautKyR6n2TtCoqEFiRP8W8ujPFvdjH2C3TyLkIKmGrRfVjkZXKjmPMxqYUhLCDZhMo4XFhdwbsRWsK3fBC4Vy%2B7WQzclDTU6BVwRy1kHfQh3HZxuP24nYNdQ38%2BeNHBLDfZ5BZo64SyYY2cX0nMQQrpXaWd9XVpoNBvOIcNtp0teu7t5Hvz5R776tuokcaCyUS3FrmaWjJYrE4nQhsdIfGvWozJJ%2FNoNVkuLvtktjazOAwV8ax9hkutxbI9UhCPmB6Mbl8%2FUSTYRnk15%2BjTzaPotOjctZwEuc1KiIAbGuz3KiddtSDR0IZh4kHy5S20dntQbzMxMfCDYq6NGXo7V4seNlI9Nnt0DCI7FPaxIykcNPims9ebJmlehsWK5nwtmfx5RbeJXs%2BMV2SPElLKyMJvthbwIfU7lrD223MNDnoMMGOqUBz0dzaospKGgrm920B5AvWtNEAIQ%2BwqYYZBVmMjvmN5lqN1yc8XkGEbK%2B4S%2Bo%2FTISp%2BGuIg4fyRw%2F5egM14M8B7Z0YbC2vAPUytc3zisD%2BK7AzG%2B1lLJi%2BczC4py%2B%2Ff8g9I8JuQNqLqhv4Hoz3IGoslRAMjqOlijMZrdDy88IdDlBxecqPkYMZhKtCOqNa7%2BMN7wz4AziZtaofZS39OykP7vGVqd2&X-Amz-Signature=f2a585435469a94cd150364d7fb8e9469b708d16d43acac70de9eec697875f8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W5EONOF%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDYI2r6OmpAQKTJWNh1cfh%2FXtjwcEfWxXSAvybc7yMJ0gIgEB%2B3KBwprcIwgg7S%2BqCNkRwHSTwBXQTtsxpH%2BQWLEcwq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMfDa9Pf%2FKrenX%2FRoircA9hYbXzzSj84RZaoTHSEOh1fFX%2Bfofr3ISle2%2F%2FLPeFyKtgxPhwqqljLMNiqSJnrCCgpD2W7Lp4qm3P40tOKcCIB4P3jUfQOG52Zr9eLAfYnpIs%2BY84rii0YltujzG6Tw47MqBojN3XFQGpt%2BK9K9ZMziBbjSwsSOgYVlDATMwdHwVO8CffQZveGjqrQxKgVV6Lit6Kb6zA2jnyQxdENYEFautKyR6n2TtCoqEFiRP8W8ujPFvdjH2C3TyLkIKmGrRfVjkZXKjmPMxqYUhLCDZhMo4XFhdwbsRWsK3fBC4Vy%2B7WQzclDTU6BVwRy1kHfQh3HZxuP24nYNdQ38%2BeNHBLDfZ5BZo64SyYY2cX0nMQQrpXaWd9XVpoNBvOIcNtp0teu7t5Hvz5R776tuokcaCyUS3FrmaWjJYrE4nQhsdIfGvWozJJ%2FNoNVkuLvtktjazOAwV8ax9hkutxbI9UhCPmB6Mbl8%2FUSTYRnk15%2BjTzaPotOjctZwEuc1KiIAbGuz3KiddtSDR0IZh4kHy5S20dntQbzMxMfCDYq6NGXo7V4seNlI9Nnt0DCI7FPaxIykcNPims9ebJmlehsWK5nwtmfx5RbeJXs%2BMV2SPElLKyMJvthbwIfU7lrD223MNDnoMMGOqUBz0dzaospKGgrm920B5AvWtNEAIQ%2BwqYYZBVmMjvmN5lqN1yc8XkGEbK%2B4S%2Bo%2FTISp%2BGuIg4fyRw%2F5egM14M8B7Z0YbC2vAPUytc3zisD%2BK7AzG%2B1lLJi%2BczC4py%2B%2Ff8g9I8JuQNqLqhv4Hoz3IGoslRAMjqOlijMZrdDy88IdDlBxecqPkYMZhKtCOqNa7%2BMN7wz4AziZtaofZS39OykP7vGVqd2&X-Amz-Signature=00f794486be2d6b93da431fe63ca09a066d502e170ea9f51eb7ca550e02f77d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
