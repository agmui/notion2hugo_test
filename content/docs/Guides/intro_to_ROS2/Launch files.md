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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637LQZ4IO%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDTtjbbSQD5vvKX%2FKMjjauwEu5nksZ32KZi1Rm62SaO%2FAIgPJhkTiBnETRNqniRTXeaMSztcjB0h4M%2FDRplH%2FI10kQqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOI0FMxzRP5gm20iZSrcA6pWJzkxQpiz2FmZc5cP94klQ4tdqbM3oph2eOZjTa9VchgVrtCm2AqUm6QFR0QtGsj01sBD8qlGKb8u2kaSnBzsy5x7c3i7TsMd6LsX7nvvZnWeB3lErQI2GwP9z9E8o4JykvxpqOuiGSZMNFNqGjiunKlsVV%2Bcjh3ftcrDq88j2BjijrXfDLdIUQQE6o8CaiM3Qj86OixbvY4c%2BJNePQ7DGVOwh7jls0b8Qo4vECVjrMFkgaf%2BYOBIOelCecM3andUqjf3BIJTyZ%2Bf37NldH2N4Ae62wdzVWJbgMRY68rjYhzggZr5X%2F7Xwcp5z9iirzozWImwwmYqdVk2P7eZucWy2eOPAGsXyqnIPY2zEPpYeLr%2Bi%2FzrEEuRzJojxHfPeDsMUgQe0MaYcj1GXRV1xp0q5PCuGUHIkHD7%2Bq%2BuWGPh1OLbi2EXERLNd9XCv%2BT5Yot1%2BARecycxakSZbux%2FcAknRhgX6ZMtIy5voDCf%2Fu9AZzZIy6QpT6kjc73wmi484TsMY%2FoavDQQlBbpJPExG6eM3D9gT7K24utZ%2FpKE5hOykBLEV%2BDGxHxnDzUhz%2BexATVulSK60ghr5IGgbrpQybzGY3a9xr1h1X4GWnL4GNXrxjdjvODOBZacXGG%2FMOPcxb4GOqUB6OYtueu1cZC6FWrOA5nJ1ud0fvA%2BDIANwCiQTB6QIPcbL9LkM6Ih7ICxdApsaj5hNxaXxD4y29ljk1OuqcYE147X6jcQEQUwDBhg1fIZ7UfOsIs4tm%2B61TFYJW8gV%2BxZJ16l76KOe3A%2BHO9N30f8ktRKwWXzzenSGAP3UD%2BMG2amZYEvTrcB89LlNL5WdyBtxWtHw3MLrpbp1%2BMerh6F8SmuuSE%2F&X-Amz-Signature=075a61f715d103e2dce7dd8e927a417fd7acc0b43fc0e7e52035f290b51bf848&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637LQZ4IO%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDTtjbbSQD5vvKX%2FKMjjauwEu5nksZ32KZi1Rm62SaO%2FAIgPJhkTiBnETRNqniRTXeaMSztcjB0h4M%2FDRplH%2FI10kQqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOI0FMxzRP5gm20iZSrcA6pWJzkxQpiz2FmZc5cP94klQ4tdqbM3oph2eOZjTa9VchgVrtCm2AqUm6QFR0QtGsj01sBD8qlGKb8u2kaSnBzsy5x7c3i7TsMd6LsX7nvvZnWeB3lErQI2GwP9z9E8o4JykvxpqOuiGSZMNFNqGjiunKlsVV%2Bcjh3ftcrDq88j2BjijrXfDLdIUQQE6o8CaiM3Qj86OixbvY4c%2BJNePQ7DGVOwh7jls0b8Qo4vECVjrMFkgaf%2BYOBIOelCecM3andUqjf3BIJTyZ%2Bf37NldH2N4Ae62wdzVWJbgMRY68rjYhzggZr5X%2F7Xwcp5z9iirzozWImwwmYqdVk2P7eZucWy2eOPAGsXyqnIPY2zEPpYeLr%2Bi%2FzrEEuRzJojxHfPeDsMUgQe0MaYcj1GXRV1xp0q5PCuGUHIkHD7%2Bq%2BuWGPh1OLbi2EXERLNd9XCv%2BT5Yot1%2BARecycxakSZbux%2FcAknRhgX6ZMtIy5voDCf%2Fu9AZzZIy6QpT6kjc73wmi484TsMY%2FoavDQQlBbpJPExG6eM3D9gT7K24utZ%2FpKE5hOykBLEV%2BDGxHxnDzUhz%2BexATVulSK60ghr5IGgbrpQybzGY3a9xr1h1X4GWnL4GNXrxjdjvODOBZacXGG%2FMOPcxb4GOqUB6OYtueu1cZC6FWrOA5nJ1ud0fvA%2BDIANwCiQTB6QIPcbL9LkM6Ih7ICxdApsaj5hNxaXxD4y29ljk1OuqcYE147X6jcQEQUwDBhg1fIZ7UfOsIs4tm%2B61TFYJW8gV%2BxZJ16l76KOe3A%2BHO9N30f8ktRKwWXzzenSGAP3UD%2BMG2amZYEvTrcB89LlNL5WdyBtxWtHw3MLrpbp1%2BMerh6F8SmuuSE%2F&X-Amz-Signature=d503149a72c5180a1570dad50d58680139a4c0079b86b092333bff79501390b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637LQZ4IO%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDTtjbbSQD5vvKX%2FKMjjauwEu5nksZ32KZi1Rm62SaO%2FAIgPJhkTiBnETRNqniRTXeaMSztcjB0h4M%2FDRplH%2FI10kQqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOI0FMxzRP5gm20iZSrcA6pWJzkxQpiz2FmZc5cP94klQ4tdqbM3oph2eOZjTa9VchgVrtCm2AqUm6QFR0QtGsj01sBD8qlGKb8u2kaSnBzsy5x7c3i7TsMd6LsX7nvvZnWeB3lErQI2GwP9z9E8o4JykvxpqOuiGSZMNFNqGjiunKlsVV%2Bcjh3ftcrDq88j2BjijrXfDLdIUQQE6o8CaiM3Qj86OixbvY4c%2BJNePQ7DGVOwh7jls0b8Qo4vECVjrMFkgaf%2BYOBIOelCecM3andUqjf3BIJTyZ%2Bf37NldH2N4Ae62wdzVWJbgMRY68rjYhzggZr5X%2F7Xwcp5z9iirzozWImwwmYqdVk2P7eZucWy2eOPAGsXyqnIPY2zEPpYeLr%2Bi%2FzrEEuRzJojxHfPeDsMUgQe0MaYcj1GXRV1xp0q5PCuGUHIkHD7%2Bq%2BuWGPh1OLbi2EXERLNd9XCv%2BT5Yot1%2BARecycxakSZbux%2FcAknRhgX6ZMtIy5voDCf%2Fu9AZzZIy6QpT6kjc73wmi484TsMY%2FoavDQQlBbpJPExG6eM3D9gT7K24utZ%2FpKE5hOykBLEV%2BDGxHxnDzUhz%2BexATVulSK60ghr5IGgbrpQybzGY3a9xr1h1X4GWnL4GNXrxjdjvODOBZacXGG%2FMOPcxb4GOqUB6OYtueu1cZC6FWrOA5nJ1ud0fvA%2BDIANwCiQTB6QIPcbL9LkM6Ih7ICxdApsaj5hNxaXxD4y29ljk1OuqcYE147X6jcQEQUwDBhg1fIZ7UfOsIs4tm%2B61TFYJW8gV%2BxZJ16l76KOe3A%2BHO9N30f8ktRKwWXzzenSGAP3UD%2BMG2amZYEvTrcB89LlNL5WdyBtxWtHw3MLrpbp1%2BMerh6F8SmuuSE%2F&X-Amz-Signature=519c34380646e2ff964492b69a77288b75f8b70d84cd7da941c7023398e9a1ad&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
