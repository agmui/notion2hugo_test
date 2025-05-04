---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2024-09-22T21:34:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2024-09-22T21:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manual which may get tiring.

This is where `ROS` launch files come in.

`ROS` launch files are files where multiple nodes can be launched from all stored in one place.

First, create a folder called `launch` in the root folder of the package and inside launch create a file called `python_params_launch.py` 

inside we first import the `ROS` libraries

```docker
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node
```

Then we create a function called `generate_launch_description()`

in this function, we first define which nodes we want to run. In our case we want to replicate the command `ros2 run my_package param_test` and setting the parameter of that node to earth

```python
def generate_launch_description():
	  node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            {'my_parameter': 'earth'}
        ]
    )
```

 Then, we have to return a `LaunchDescription` object which takes a list of `ROS` nodes we want to run.

```python
def generate_launch_description():
    return LaunchDescription([
			node
    ])
```

**NOTE:** how this is basically the same as `ros2 run my_package param_test`

## Solution

```python
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node

def generate_launch_description():
    node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            {'my_parameter': 'earth'}
        ]
    )
    return LaunchDescription(
        [node]
        )
```

# Registering the launch file to the workspace

To register the launch file we have to go into `setup.py` and add in 3 different lines shown below:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TX5PD3D%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIETaZdViRCDIwJKeuCUK4DF%2F7WwoK2k8sC%2FBLQyPz1A1AiBouPt4ormmldfedxFc8gh0W9buiOwtpxUsNzLqaWVW7yr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMNHlqoHQI1t14B2FuKtwD3JbC0ogregrhxRkjLUwrDeG4pksRzHXGZnV%2Bxg2iRnDstnDEpGEE6SoXvqLy6d5UjAFtuEmbFOXQkgwmclb1bSdU0DlI0MLDfotcAEBc5vGrd9dU80OsyfGcJgsuQAAsP3kpj147cHhmwBPTl3EmK7LNVMmkBY7lKBHdb7nZSVR7Z%2BohPpuStk4kZo5t7cp%2FUxL%2BTxtxpR8q3cE6XlVn%2BTOjLqqp9JHpUJ0bRPm8NCVq7a154OJi%2B%2BLSVxe%2F4CP2samMqHytqJOp9791bvMdoYKGWSCTYoTm59ifh9KYoOuD4FrkQLVflXXz7wn98WxE2%2BlBwH1jvBCDRHJKRa%2Bn7Vr%2B%2FcETzotvhQ8X%2F276t8S%2BF5yJ7%2FlplnTxaKESuLlH%2FuRR%2FknV2kxg4dInVqUVdLr2UYK4urEc8L9tq0OItX8Gnw4uOlUV6E9meDBS09YEzE2ynmfkdbaf4k%2B9P%2Bh4JtEonFosWQ0ks4%2F2Yqk1UboJ%2FNkSvNIgc3r5z9q7cc9iv3dOn%2FquKKPaMwqnaPBqedw%2F0qtzTTw9%2Bo09pWMLWJdMKmsex00Hhvn79Yb6rgS5cCZMCZZGBD3WH4ixsLRTjFRE8mBVXU6IKtW6ngEv3G55xXKcuekbv87i5o8wkLvewAY6pgEuh1F5ALMrtVjfChp1g%2BZs0RDWUXY6NbklOs4fY1O9gv5LnYEYsuOpknWSQcncV0ODBquK9mT%2FQ80UP%2BnzOC57iOmc%2BVXXvIzG1EfEhlYVQliH7hj2V2DYAbO8MzQrfVunrKMKpTzayH08n5oEMhz%2FULoN%2FXg9VWhCZBBXkTKopCWqZcJUgrlTlBobTqoo9PhCK0xbbU0Eec%2F4%2FWjNACmT0qRO%2F0sm&X-Amz-Signature=371ad1258f61909cc37e03033b8b1e6322867efadfa3c6080601ac62727265f9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TX5PD3D%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIETaZdViRCDIwJKeuCUK4DF%2F7WwoK2k8sC%2FBLQyPz1A1AiBouPt4ormmldfedxFc8gh0W9buiOwtpxUsNzLqaWVW7yr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMNHlqoHQI1t14B2FuKtwD3JbC0ogregrhxRkjLUwrDeG4pksRzHXGZnV%2Bxg2iRnDstnDEpGEE6SoXvqLy6d5UjAFtuEmbFOXQkgwmclb1bSdU0DlI0MLDfotcAEBc5vGrd9dU80OsyfGcJgsuQAAsP3kpj147cHhmwBPTl3EmK7LNVMmkBY7lKBHdb7nZSVR7Z%2BohPpuStk4kZo5t7cp%2FUxL%2BTxtxpR8q3cE6XlVn%2BTOjLqqp9JHpUJ0bRPm8NCVq7a154OJi%2B%2BLSVxe%2F4CP2samMqHytqJOp9791bvMdoYKGWSCTYoTm59ifh9KYoOuD4FrkQLVflXXz7wn98WxE2%2BlBwH1jvBCDRHJKRa%2Bn7Vr%2B%2FcETzotvhQ8X%2F276t8S%2BF5yJ7%2FlplnTxaKESuLlH%2FuRR%2FknV2kxg4dInVqUVdLr2UYK4urEc8L9tq0OItX8Gnw4uOlUV6E9meDBS09YEzE2ynmfkdbaf4k%2B9P%2Bh4JtEonFosWQ0ks4%2F2Yqk1UboJ%2FNkSvNIgc3r5z9q7cc9iv3dOn%2FquKKPaMwqnaPBqedw%2F0qtzTTw9%2Bo09pWMLWJdMKmsex00Hhvn79Yb6rgS5cCZMCZZGBD3WH4ixsLRTjFRE8mBVXU6IKtW6ngEv3G55xXKcuekbv87i5o8wkLvewAY6pgEuh1F5ALMrtVjfChp1g%2BZs0RDWUXY6NbklOs4fY1O9gv5LnYEYsuOpknWSQcncV0ODBquK9mT%2FQ80UP%2BnzOC57iOmc%2BVXXvIzG1EfEhlYVQliH7hj2V2DYAbO8MzQrfVunrKMKpTzayH08n5oEMhz%2FULoN%2FXg9VWhCZBBXkTKopCWqZcJUgrlTlBobTqoo9PhCK0xbbU0Eec%2F4%2FWjNACmT0qRO%2F0sm&X-Amz-Signature=78f37c85d83f2554ff11befe88b8d8b2c4d88c1fa2b40631b088e053feb4bf68&X-Amz-SignedHeaders=host&x-id=GetObject)

# Launch arguments

We can also specify arguments to go into launch files for convenience

For example, we don’t want to reopen the launch file to change what `param_test` prints out every time.

First, at the top of `generate_launch_description()` we would declare a `LaunchConfiguration` and `DeclareLaunchArgument` object. 

`LaunchConfiguration` takes the parameter's name and `DeclareLaunchArgument` takes the name of the same parameter and its default value.

```python
 def generate_launch_description():
    some_arg = LaunchConfiguration('some_arg')
    launch_arg = DeclareLaunchArgument( 'some_arg', default_value='test') 
```

we then can pass the `LaunchConfiguration` object into the Node object and put the `DeclarationLaunchArgument` object into the return array.

```python
def generate_launch_description():
    some_arg = LaunchConfiguration('some_arg')
    launch_arg = DeclareLaunchArgument( 'some_arg', default_value='test')

    node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            # {'my_parameter': 'earth'}
            {'my_parameter': some_arg}
        ]
    )
    return LaunchDescription(
        [launch_arg, node]
        )
```

now we can simply change the parameter in `python_params_launch.py` by running 

```bash
ros2 launch my_package python_params_launch.py some_arg:=hi
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TX5PD3D%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIETaZdViRCDIwJKeuCUK4DF%2F7WwoK2k8sC%2FBLQyPz1A1AiBouPt4ormmldfedxFc8gh0W9buiOwtpxUsNzLqaWVW7yr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMNHlqoHQI1t14B2FuKtwD3JbC0ogregrhxRkjLUwrDeG4pksRzHXGZnV%2Bxg2iRnDstnDEpGEE6SoXvqLy6d5UjAFtuEmbFOXQkgwmclb1bSdU0DlI0MLDfotcAEBc5vGrd9dU80OsyfGcJgsuQAAsP3kpj147cHhmwBPTl3EmK7LNVMmkBY7lKBHdb7nZSVR7Z%2BohPpuStk4kZo5t7cp%2FUxL%2BTxtxpR8q3cE6XlVn%2BTOjLqqp9JHpUJ0bRPm8NCVq7a154OJi%2B%2BLSVxe%2F4CP2samMqHytqJOp9791bvMdoYKGWSCTYoTm59ifh9KYoOuD4FrkQLVflXXz7wn98WxE2%2BlBwH1jvBCDRHJKRa%2Bn7Vr%2B%2FcETzotvhQ8X%2F276t8S%2BF5yJ7%2FlplnTxaKESuLlH%2FuRR%2FknV2kxg4dInVqUVdLr2UYK4urEc8L9tq0OItX8Gnw4uOlUV6E9meDBS09YEzE2ynmfkdbaf4k%2B9P%2Bh4JtEonFosWQ0ks4%2F2Yqk1UboJ%2FNkSvNIgc3r5z9q7cc9iv3dOn%2FquKKPaMwqnaPBqedw%2F0qtzTTw9%2Bo09pWMLWJdMKmsex00Hhvn79Yb6rgS5cCZMCZZGBD3WH4ixsLRTjFRE8mBVXU6IKtW6ngEv3G55xXKcuekbv87i5o8wkLvewAY6pgEuh1F5ALMrtVjfChp1g%2BZs0RDWUXY6NbklOs4fY1O9gv5LnYEYsuOpknWSQcncV0ODBquK9mT%2FQ80UP%2BnzOC57iOmc%2BVXXvIzG1EfEhlYVQliH7hj2V2DYAbO8MzQrfVunrKMKpTzayH08n5oEMhz%2FULoN%2FXg9VWhCZBBXkTKopCWqZcJUgrlTlBobTqoo9PhCK0xbbU0Eec%2F4%2FWjNACmT0qRO%2F0sm&X-Amz-Signature=f71f148afe4b39f69aa4caa59d33f91fe0ce29d9e0b39b0776561222069700f4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
