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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K4B4ZHT%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCsoYQhSJ13OPwJjdZIG99hZiT6aC9aFpa7%2FWgithuRYQIhAKxHW9W4esLuTV7hfSrchoPGvl8hwRtQZ3sKKY5cbcMzKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQfXaz5v4Yv6ORcBwq3ANntQrfOJNKbHfCTfUlwJNaSq4h%2B8gro76fm47lO9NLm1k9F5powha8vTtqJa%2F7GAmRaTa1N8U3n9ga92FtMXi6y%2FkIUirJ5oRmy1fqMJUrOzCvsGrFryZPHo%2BZq0dUmY9Hst6ZOKA9uU8Z5N1SQrdsEqVCv7CQOyAXDXLSGwEj59qnccD2GBcXwxosfroPVqb%2FWUWDJcYArNamtI%2F9BuGKjxZQDvMHZkshzTSj9Ox%2FtxKtR9xBfuGZtqWSRhK9paug1TDzQvG%2ButnUErhcUFJe2pDp3Mck0f5HU%2BGysHdhORQs69mNPEKqKmdzO0UzJ4N1gXkOQTHZgUXSMc%2FpYEufeghXHoVvEz7GRPdPI0i%2BugrEFDjvnnf7RylVCBkPB%2BYk85lFbkRRPfaAVdGa%2Fu%2FyJIs2xY0nw2jJhhpCfluhKL45ZQcZAxnLHuuEo5g13GTccAgDY2UY1O93ev0M5ztVf1%2FhFpA5q4PE83SKaMHDrVqMIIXfJ7RVkgkOf0xmS%2FUs05ks%2FIzDjIlmi3QUHZI5GGYEGVjwo1SoETlGJO2WjBAAzi9%2FwonXbXxupi%2FVxaSY1kRxase%2BUisEOmQ6QzrGXAEyaA%2Fy7Yrlg%2BykHncBD4xkCzMsjhN2BY9Q3zCXi7O%2FBjqkAUlxMNiC11%2BUBbPr6%2BZd1BsMYoYG%2BywTNfkoBKfifiirnWcGR8SJEVFaw0yW2yhfA8cCjTyrHr5O2%2BPh6pN3%2B3JeLK1GzKTCY%2BytmpO5N1Ls6jd6DVm55922lADaVk2sRWi4oBY8Ynt4ZkByz1jnYP7aPiEdiOtHuVhfBAlBSQEZs0jjExuRcluJ6BIPY6HujETomKXs9kVDzzvuOJhZeswwIJO0&X-Amz-Signature=f103694d8c76feaaf5411cd737e29374ea41064a46091824083c44096e9bd8d3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K4B4ZHT%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCsoYQhSJ13OPwJjdZIG99hZiT6aC9aFpa7%2FWgithuRYQIhAKxHW9W4esLuTV7hfSrchoPGvl8hwRtQZ3sKKY5cbcMzKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQfXaz5v4Yv6ORcBwq3ANntQrfOJNKbHfCTfUlwJNaSq4h%2B8gro76fm47lO9NLm1k9F5powha8vTtqJa%2F7GAmRaTa1N8U3n9ga92FtMXi6y%2FkIUirJ5oRmy1fqMJUrOzCvsGrFryZPHo%2BZq0dUmY9Hst6ZOKA9uU8Z5N1SQrdsEqVCv7CQOyAXDXLSGwEj59qnccD2GBcXwxosfroPVqb%2FWUWDJcYArNamtI%2F9BuGKjxZQDvMHZkshzTSj9Ox%2FtxKtR9xBfuGZtqWSRhK9paug1TDzQvG%2ButnUErhcUFJe2pDp3Mck0f5HU%2BGysHdhORQs69mNPEKqKmdzO0UzJ4N1gXkOQTHZgUXSMc%2FpYEufeghXHoVvEz7GRPdPI0i%2BugrEFDjvnnf7RylVCBkPB%2BYk85lFbkRRPfaAVdGa%2Fu%2FyJIs2xY0nw2jJhhpCfluhKL45ZQcZAxnLHuuEo5g13GTccAgDY2UY1O93ev0M5ztVf1%2FhFpA5q4PE83SKaMHDrVqMIIXfJ7RVkgkOf0xmS%2FUs05ks%2FIzDjIlmi3QUHZI5GGYEGVjwo1SoETlGJO2WjBAAzi9%2FwonXbXxupi%2FVxaSY1kRxase%2BUisEOmQ6QzrGXAEyaA%2Fy7Yrlg%2BykHncBD4xkCzMsjhN2BY9Q3zCXi7O%2FBjqkAUlxMNiC11%2BUBbPr6%2BZd1BsMYoYG%2BywTNfkoBKfifiirnWcGR8SJEVFaw0yW2yhfA8cCjTyrHr5O2%2BPh6pN3%2B3JeLK1GzKTCY%2BytmpO5N1Ls6jd6DVm55922lADaVk2sRWi4oBY8Ynt4ZkByz1jnYP7aPiEdiOtHuVhfBAlBSQEZs0jjExuRcluJ6BIPY6HujETomKXs9kVDzzvuOJhZeswwIJO0&X-Amz-Signature=be7037f68016877383b65906822b83f80147a2f05d4e9aa540cbdacccfefda61&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K4B4ZHT%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCsoYQhSJ13OPwJjdZIG99hZiT6aC9aFpa7%2FWgithuRYQIhAKxHW9W4esLuTV7hfSrchoPGvl8hwRtQZ3sKKY5cbcMzKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQfXaz5v4Yv6ORcBwq3ANntQrfOJNKbHfCTfUlwJNaSq4h%2B8gro76fm47lO9NLm1k9F5powha8vTtqJa%2F7GAmRaTa1N8U3n9ga92FtMXi6y%2FkIUirJ5oRmy1fqMJUrOzCvsGrFryZPHo%2BZq0dUmY9Hst6ZOKA9uU8Z5N1SQrdsEqVCv7CQOyAXDXLSGwEj59qnccD2GBcXwxosfroPVqb%2FWUWDJcYArNamtI%2F9BuGKjxZQDvMHZkshzTSj9Ox%2FtxKtR9xBfuGZtqWSRhK9paug1TDzQvG%2ButnUErhcUFJe2pDp3Mck0f5HU%2BGysHdhORQs69mNPEKqKmdzO0UzJ4N1gXkOQTHZgUXSMc%2FpYEufeghXHoVvEz7GRPdPI0i%2BugrEFDjvnnf7RylVCBkPB%2BYk85lFbkRRPfaAVdGa%2Fu%2FyJIs2xY0nw2jJhhpCfluhKL45ZQcZAxnLHuuEo5g13GTccAgDY2UY1O93ev0M5ztVf1%2FhFpA5q4PE83SKaMHDrVqMIIXfJ7RVkgkOf0xmS%2FUs05ks%2FIzDjIlmi3QUHZI5GGYEGVjwo1SoETlGJO2WjBAAzi9%2FwonXbXxupi%2FVxaSY1kRxase%2BUisEOmQ6QzrGXAEyaA%2Fy7Yrlg%2BykHncBD4xkCzMsjhN2BY9Q3zCXi7O%2FBjqkAUlxMNiC11%2BUBbPr6%2BZd1BsMYoYG%2BywTNfkoBKfifiirnWcGR8SJEVFaw0yW2yhfA8cCjTyrHr5O2%2BPh6pN3%2B3JeLK1GzKTCY%2BytmpO5N1Ls6jd6DVm55922lADaVk2sRWi4oBY8Ynt4ZkByz1jnYP7aPiEdiOtHuVhfBAlBSQEZs0jjExuRcluJ6BIPY6HujETomKXs9kVDzzvuOJhZeswwIJO0&X-Amz-Signature=634cde66626464942a6c355ce818ea87a7303bd6a95ae7641e6fe3180280f596&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
