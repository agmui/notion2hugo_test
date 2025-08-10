---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTWH6S6B%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICey3wFSpLBnF2qRFvCjHhGjonCi%2BdwHpWQo%2FYx37gbqAiEA%2F%2BYohHKJzgu4yAcDZQueHxVzLK%2Bn98qHK0ZV5HKAglgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDWnAJiybqJJad%2FjCrcA1gFWvzX0O%2Fbya4FSXBST%2BnPDZ4UQm%2FG7BZxNX6y0iH%2FgDMo86%2FTaEdhrSbd%2F1pNU8UYATpyvA%2F418QJYg5MU0b%2FdNInnB4qFIrr3qI8RrA%2FkUtv0tmIBz9b9vc0AdIiahjXjJ%2FuI9lXeNeCHXM1MtxlOOIuUA0YKWdjncA%2FDRglWP%2Be0yJAkNGHFgNOcSE8584UvtfFaU223NmgvHpdFpIBAkev7%2B3NmOrwSadHfhh2ybGa4mivFWwLSWxbjh38xTvogUv%2FpYubhA2MZ0TTLqkAmRrRKamyhqBlwAlzyhdmjTBDJgRx630BR%2BSnFcxSUSf590ojko%2FbEdmwRCrN4A%2FQaB8Nt%2Fdx5Z4DqajTLZSlTud8PMU6qaweO%2FOd%2BnjMV6ARRNpusirbuhD6DVWSEv8gPO78UumHAcW8DfqHP3oga522Efp2fzSnUgA4dhRqCMPiszjhwJhBNhfygrL3ssjaUC6ePNIg9WXgp81twIK29geYCs%2BFBvBlIAESOtwDB0iWda9KHgX%2FGtgzNtq%2BViobooUT6qvxE2zpLB5tlhLgcWnJojzQZJIMBygLmL1Ke%2Fga4yJASmb8fY25Dwv23lUJlkDM5sYJ26eUaDMLS1srb%2BjL7%2FnoUmbprs4MMM6648QGOqUBaxyxrba4EyUOwkvdMmpN91Ob2N3FHrXKLHL02tVfhI40qOiOYgV9xhPXXS26BwKWu5FmSGbcv05YY18NpUpxfT7OMq9TgYjqEFXWyCOzG42xTt7L%2F6r%2FG%2F4CAmeM5jNtyQeFacQmn9kJPJkLq4Yj58IjT0JOhz8unkVdVAknqSRZPQb7pLbNVv%2Fcvomhgj68qpZkKK4greh4voMgmI7qvGdS928E&X-Amz-Signature=4584ee666f31dd03043b0556baabcf25e1aecbf7684a3f171b591fae0680ee63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTWH6S6B%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICey3wFSpLBnF2qRFvCjHhGjonCi%2BdwHpWQo%2FYx37gbqAiEA%2F%2BYohHKJzgu4yAcDZQueHxVzLK%2Bn98qHK0ZV5HKAglgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDWnAJiybqJJad%2FjCrcA1gFWvzX0O%2Fbya4FSXBST%2BnPDZ4UQm%2FG7BZxNX6y0iH%2FgDMo86%2FTaEdhrSbd%2F1pNU8UYATpyvA%2F418QJYg5MU0b%2FdNInnB4qFIrr3qI8RrA%2FkUtv0tmIBz9b9vc0AdIiahjXjJ%2FuI9lXeNeCHXM1MtxlOOIuUA0YKWdjncA%2FDRglWP%2Be0yJAkNGHFgNOcSE8584UvtfFaU223NmgvHpdFpIBAkev7%2B3NmOrwSadHfhh2ybGa4mivFWwLSWxbjh38xTvogUv%2FpYubhA2MZ0TTLqkAmRrRKamyhqBlwAlzyhdmjTBDJgRx630BR%2BSnFcxSUSf590ojko%2FbEdmwRCrN4A%2FQaB8Nt%2Fdx5Z4DqajTLZSlTud8PMU6qaweO%2FOd%2BnjMV6ARRNpusirbuhD6DVWSEv8gPO78UumHAcW8DfqHP3oga522Efp2fzSnUgA4dhRqCMPiszjhwJhBNhfygrL3ssjaUC6ePNIg9WXgp81twIK29geYCs%2BFBvBlIAESOtwDB0iWda9KHgX%2FGtgzNtq%2BViobooUT6qvxE2zpLB5tlhLgcWnJojzQZJIMBygLmL1Ke%2Fga4yJASmb8fY25Dwv23lUJlkDM5sYJ26eUaDMLS1srb%2BjL7%2FnoUmbprs4MMM6648QGOqUBaxyxrba4EyUOwkvdMmpN91Ob2N3FHrXKLHL02tVfhI40qOiOYgV9xhPXXS26BwKWu5FmSGbcv05YY18NpUpxfT7OMq9TgYjqEFXWyCOzG42xTt7L%2F6r%2FG%2F4CAmeM5jNtyQeFacQmn9kJPJkLq4Yj58IjT0JOhz8unkVdVAknqSRZPQb7pLbNVv%2Fcvomhgj68qpZkKK4greh4voMgmI7qvGdS928E&X-Amz-Signature=0bc071bb0b0301bcc391adef8a5c4b377d948591d73f85cb0c0d36c808844fb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTWH6S6B%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICey3wFSpLBnF2qRFvCjHhGjonCi%2BdwHpWQo%2FYx37gbqAiEA%2F%2BYohHKJzgu4yAcDZQueHxVzLK%2Bn98qHK0ZV5HKAglgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDWnAJiybqJJad%2FjCrcA1gFWvzX0O%2Fbya4FSXBST%2BnPDZ4UQm%2FG7BZxNX6y0iH%2FgDMo86%2FTaEdhrSbd%2F1pNU8UYATpyvA%2F418QJYg5MU0b%2FdNInnB4qFIrr3qI8RrA%2FkUtv0tmIBz9b9vc0AdIiahjXjJ%2FuI9lXeNeCHXM1MtxlOOIuUA0YKWdjncA%2FDRglWP%2Be0yJAkNGHFgNOcSE8584UvtfFaU223NmgvHpdFpIBAkev7%2B3NmOrwSadHfhh2ybGa4mivFWwLSWxbjh38xTvogUv%2FpYubhA2MZ0TTLqkAmRrRKamyhqBlwAlzyhdmjTBDJgRx630BR%2BSnFcxSUSf590ojko%2FbEdmwRCrN4A%2FQaB8Nt%2Fdx5Z4DqajTLZSlTud8PMU6qaweO%2FOd%2BnjMV6ARRNpusirbuhD6DVWSEv8gPO78UumHAcW8DfqHP3oga522Efp2fzSnUgA4dhRqCMPiszjhwJhBNhfygrL3ssjaUC6ePNIg9WXgp81twIK29geYCs%2BFBvBlIAESOtwDB0iWda9KHgX%2FGtgzNtq%2BViobooUT6qvxE2zpLB5tlhLgcWnJojzQZJIMBygLmL1Ke%2Fga4yJASmb8fY25Dwv23lUJlkDM5sYJ26eUaDMLS1srb%2BjL7%2FnoUmbprs4MMM6648QGOqUBaxyxrba4EyUOwkvdMmpN91Ob2N3FHrXKLHL02tVfhI40qOiOYgV9xhPXXS26BwKWu5FmSGbcv05YY18NpUpxfT7OMq9TgYjqEFXWyCOzG42xTt7L%2F6r%2FG%2F4CAmeM5jNtyQeFacQmn9kJPJkLq4Yj58IjT0JOhz8unkVdVAknqSRZPQb7pLbNVv%2Fcvomhgj68qpZkKK4greh4voMgmI7qvGdS928E&X-Amz-Signature=27d1f5bc5d18c164f449e7199f07085ae55e3880adcc1d9efbb6f8c91770574a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
