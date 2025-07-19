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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV34V55V%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC746mP2Ks%2BSsyJ4Y4gP5TwtfuiZnySa8430XEiWV6mmAiBOWj9g80P%2B05QyaqlinUqwBYpmtYN%2FC7WV3IiPtLEfeyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgjZK5B8gopnFFea%2FKtwDWeHe6ryJSLnk97NVBc21iPG0PmRxn0sAnynGDEkL%2FPH1ttybPyM2wCF1cKJ5%2FYJkGJHrUHZ0j3iO6V05b8H76Ht8kW%2F6b4dou4%2BmYs9vIQf65%2BddH1vOkslVBWM8IaC4W0ZvvT9bcN6WXn0bASfcyJ6PUnnfxicOFoLxeQ84FDfihF7%2BK4eGz1jtwdOA2O03dIzp87UeWlda4m%2BuEMhynx%2Fs7GTDOctf43R6fMdXrs8G%2FiKr9Sa9bF1CyLvNP95CD168OM5iBNa6vcJUlcopTNoySKf7ET9IpTJ%2BLmLexXCJHidtLhIVmIw8BU2UdOMVeEULy1ec9%2BRK7rFNpkm7wN9PTWRdR%2FkFs%2FmoBb8ENBIkuS02Vzats0ZvEU5bVuPlagiLuhgu40TfIWfn%2BRYOtiNgKiHTpip8EiDmyMO9By22aEmf4gyD8pP4lKntVpiXW8AvvcCVLgqvMXvFtzoHlmrUY0b4BS%2Fg04%2FD%2BNrnuoaQ0fZKRVBHh7MPnkmM5C5fXw4bhAHtEQCfJYmd5hjobnAFjJPkyiaylL45VbyEFfEpu3OzWOHXILzZJXOluVqAevwVHlFVi%2BAEJxC8RsqOBcrgppWaE%2FJCWFfBxqu00nO0uFxiXMHerMHHvjQw%2FcTswwY6pgEK%2FSjtgoGF2GLjOpLHu1Qfjunh4iNIwzuIQfbGSQcv9YwZ1%2BfVWJ5vvgm4wtbNYjaiv%2BhUfTwjQSlq2yjoh9BwBiNCloe39sZWipptb4RUksl%2FlXL5Y12PvzeDHrxAvRabovjHuUkYr%2BeSNdS3hUoz%2Flx0kDRo2zbe%2BZkfajHvFKKWJ7iuBULN0DXc2XD4%2Bgr%2B7fmoYGkPikVCQmq2rt9BYeSED4G6&X-Amz-Signature=8f288a34d86e9c2c258e9011bba051f23d6bbadbbbd17c9ae463c4aa99581034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV34V55V%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC746mP2Ks%2BSsyJ4Y4gP5TwtfuiZnySa8430XEiWV6mmAiBOWj9g80P%2B05QyaqlinUqwBYpmtYN%2FC7WV3IiPtLEfeyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgjZK5B8gopnFFea%2FKtwDWeHe6ryJSLnk97NVBc21iPG0PmRxn0sAnynGDEkL%2FPH1ttybPyM2wCF1cKJ5%2FYJkGJHrUHZ0j3iO6V05b8H76Ht8kW%2F6b4dou4%2BmYs9vIQf65%2BddH1vOkslVBWM8IaC4W0ZvvT9bcN6WXn0bASfcyJ6PUnnfxicOFoLxeQ84FDfihF7%2BK4eGz1jtwdOA2O03dIzp87UeWlda4m%2BuEMhynx%2Fs7GTDOctf43R6fMdXrs8G%2FiKr9Sa9bF1CyLvNP95CD168OM5iBNa6vcJUlcopTNoySKf7ET9IpTJ%2BLmLexXCJHidtLhIVmIw8BU2UdOMVeEULy1ec9%2BRK7rFNpkm7wN9PTWRdR%2FkFs%2FmoBb8ENBIkuS02Vzats0ZvEU5bVuPlagiLuhgu40TfIWfn%2BRYOtiNgKiHTpip8EiDmyMO9By22aEmf4gyD8pP4lKntVpiXW8AvvcCVLgqvMXvFtzoHlmrUY0b4BS%2Fg04%2FD%2BNrnuoaQ0fZKRVBHh7MPnkmM5C5fXw4bhAHtEQCfJYmd5hjobnAFjJPkyiaylL45VbyEFfEpu3OzWOHXILzZJXOluVqAevwVHlFVi%2BAEJxC8RsqOBcrgppWaE%2FJCWFfBxqu00nO0uFxiXMHerMHHvjQw%2FcTswwY6pgEK%2FSjtgoGF2GLjOpLHu1Qfjunh4iNIwzuIQfbGSQcv9YwZ1%2BfVWJ5vvgm4wtbNYjaiv%2BhUfTwjQSlq2yjoh9BwBiNCloe39sZWipptb4RUksl%2FlXL5Y12PvzeDHrxAvRabovjHuUkYr%2BeSNdS3hUoz%2Flx0kDRo2zbe%2BZkfajHvFKKWJ7iuBULN0DXc2XD4%2Bgr%2B7fmoYGkPikVCQmq2rt9BYeSED4G6&X-Amz-Signature=7d003581bb631d75ce915b48d4c6895e24491615bc5bf0ddd23877ebf47daac9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV34V55V%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC746mP2Ks%2BSsyJ4Y4gP5TwtfuiZnySa8430XEiWV6mmAiBOWj9g80P%2B05QyaqlinUqwBYpmtYN%2FC7WV3IiPtLEfeyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgjZK5B8gopnFFea%2FKtwDWeHe6ryJSLnk97NVBc21iPG0PmRxn0sAnynGDEkL%2FPH1ttybPyM2wCF1cKJ5%2FYJkGJHrUHZ0j3iO6V05b8H76Ht8kW%2F6b4dou4%2BmYs9vIQf65%2BddH1vOkslVBWM8IaC4W0ZvvT9bcN6WXn0bASfcyJ6PUnnfxicOFoLxeQ84FDfihF7%2BK4eGz1jtwdOA2O03dIzp87UeWlda4m%2BuEMhynx%2Fs7GTDOctf43R6fMdXrs8G%2FiKr9Sa9bF1CyLvNP95CD168OM5iBNa6vcJUlcopTNoySKf7ET9IpTJ%2BLmLexXCJHidtLhIVmIw8BU2UdOMVeEULy1ec9%2BRK7rFNpkm7wN9PTWRdR%2FkFs%2FmoBb8ENBIkuS02Vzats0ZvEU5bVuPlagiLuhgu40TfIWfn%2BRYOtiNgKiHTpip8EiDmyMO9By22aEmf4gyD8pP4lKntVpiXW8AvvcCVLgqvMXvFtzoHlmrUY0b4BS%2Fg04%2FD%2BNrnuoaQ0fZKRVBHh7MPnkmM5C5fXw4bhAHtEQCfJYmd5hjobnAFjJPkyiaylL45VbyEFfEpu3OzWOHXILzZJXOluVqAevwVHlFVi%2BAEJxC8RsqOBcrgppWaE%2FJCWFfBxqu00nO0uFxiXMHerMHHvjQw%2FcTswwY6pgEK%2FSjtgoGF2GLjOpLHu1Qfjunh4iNIwzuIQfbGSQcv9YwZ1%2BfVWJ5vvgm4wtbNYjaiv%2BhUfTwjQSlq2yjoh9BwBiNCloe39sZWipptb4RUksl%2FlXL5Y12PvzeDHrxAvRabovjHuUkYr%2BeSNdS3hUoz%2Flx0kDRo2zbe%2BZkfajHvFKKWJ7iuBULN0DXc2XD4%2Bgr%2B7fmoYGkPikVCQmq2rt9BYeSED4G6&X-Amz-Signature=936c17314618c00c420315c47cfd5f5b5e29ac20d8994ba985ef0c531d91ec2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
