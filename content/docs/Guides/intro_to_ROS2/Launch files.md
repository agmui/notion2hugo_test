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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEZ47BCG%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIH8Y9xpcoI1GpGm3dCJyHIzfpKdISCbXckI29XNfzKHCAiEA1s8rRmiz9zRrZbAbQVN19uJpQgLpnN2I%2FaCjQ0wFMiQqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpI5ULcMSRlrzmVNyrcA%2Bg5sHd%2FkIg8BUQobJdN6z1RgRuV81s7qGaBHHiyAhIakb14UTnFPbsm4pj3SsnOBW7XZGhWv%2FDXjx1gHH13ErbSI379yk4zq6dTMiBxG1Zs02Zjy2NPnCMybf%2B1XrBVDHez0%2FUcpemr8Zat8xZ7x4mj%2BfRORkeU7si%2FaJsO0Fw60sDM5rlUr51HIRmu4iw7zIxej6hykY%2BQBI017wcsV8qrad%2FQjmOhmrbo8NKelivJFpXq7nDc6jMrjrOmVRBPtGnKKHexX%2B4cI0Hz%2B%2FGD9fEzrUmFn%2FYD68dJl4fCXSv1OQkCS0BeGim42o9p859wb%2FHslv5xhWXwiAh4NPVJtVRZAOg7VySMOZ0NQXiV3hBTi3RvtxoBlDcbXCSQP08mpFJp%2FgJ3xTnmpYxLnfrObSZ7lyi%2B6haIwAKXTTsv009h58iAROqrGh7gWxlh4hEsEC279kRDJKR7zlLyPML7PIMNipyVJ9328eKJEEcVYwwVDhse%2F6Z7VEc8oGjR7AU3kaiPPgU7jvnhHEPrmiQAm5YIMNIYulg7M6suvs4%2B0qbhD%2FRKRCMsHZb0E7sqhMeA%2BcHSdCPvB%2BmaiKC8zB8u9CriO1JWw4uL1p5LDhZY3PP2lvgXvWdisSU2b89hMPm75rwGOqUB8ACYMDIZC04O%2F3%2B%2Fdm2vJYSasVcN%2FpUaTOzuxsAWmUwehX9FpvTY8V%2BBEk%2Bg%2FlxK4OHpMn5%2FM9c4hg4vdgm1IKqVkCOTgfRE%2F8Oy5ayCyRIYB9GFxINzaK%2BchASJrO2yCIJRIGYioKOTZ%2FTJsoT9puX56rMR81oHxSDBQg1JGUguzZd%2Brwl87sCJmf2J3xK25tnHkzG%2FIVSW7yrmCTQd1aEUrCuo&X-Amz-Signature=98b971a18be37a5dabda1bbde1ea5a3c90ceb320ede7e84509351a9185d41905&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEZ47BCG%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIH8Y9xpcoI1GpGm3dCJyHIzfpKdISCbXckI29XNfzKHCAiEA1s8rRmiz9zRrZbAbQVN19uJpQgLpnN2I%2FaCjQ0wFMiQqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpI5ULcMSRlrzmVNyrcA%2Bg5sHd%2FkIg8BUQobJdN6z1RgRuV81s7qGaBHHiyAhIakb14UTnFPbsm4pj3SsnOBW7XZGhWv%2FDXjx1gHH13ErbSI379yk4zq6dTMiBxG1Zs02Zjy2NPnCMybf%2B1XrBVDHez0%2FUcpemr8Zat8xZ7x4mj%2BfRORkeU7si%2FaJsO0Fw60sDM5rlUr51HIRmu4iw7zIxej6hykY%2BQBI017wcsV8qrad%2FQjmOhmrbo8NKelivJFpXq7nDc6jMrjrOmVRBPtGnKKHexX%2B4cI0Hz%2B%2FGD9fEzrUmFn%2FYD68dJl4fCXSv1OQkCS0BeGim42o9p859wb%2FHslv5xhWXwiAh4NPVJtVRZAOg7VySMOZ0NQXiV3hBTi3RvtxoBlDcbXCSQP08mpFJp%2FgJ3xTnmpYxLnfrObSZ7lyi%2B6haIwAKXTTsv009h58iAROqrGh7gWxlh4hEsEC279kRDJKR7zlLyPML7PIMNipyVJ9328eKJEEcVYwwVDhse%2F6Z7VEc8oGjR7AU3kaiPPgU7jvnhHEPrmiQAm5YIMNIYulg7M6suvs4%2B0qbhD%2FRKRCMsHZb0E7sqhMeA%2BcHSdCPvB%2BmaiKC8zB8u9CriO1JWw4uL1p5LDhZY3PP2lvgXvWdisSU2b89hMPm75rwGOqUB8ACYMDIZC04O%2F3%2B%2Fdm2vJYSasVcN%2FpUaTOzuxsAWmUwehX9FpvTY8V%2BBEk%2Bg%2FlxK4OHpMn5%2FM9c4hg4vdgm1IKqVkCOTgfRE%2F8Oy5ayCyRIYB9GFxINzaK%2BchASJrO2yCIJRIGYioKOTZ%2FTJsoT9puX56rMR81oHxSDBQg1JGUguzZd%2Brwl87sCJmf2J3xK25tnHkzG%2FIVSW7yrmCTQd1aEUrCuo&X-Amz-Signature=08610187248485b3f070fa90ff3e4dc02e75bc734462cc95500777b9f1910ac7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEZ47BCG%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIH8Y9xpcoI1GpGm3dCJyHIzfpKdISCbXckI29XNfzKHCAiEA1s8rRmiz9zRrZbAbQVN19uJpQgLpnN2I%2FaCjQ0wFMiQqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpI5ULcMSRlrzmVNyrcA%2Bg5sHd%2FkIg8BUQobJdN6z1RgRuV81s7qGaBHHiyAhIakb14UTnFPbsm4pj3SsnOBW7XZGhWv%2FDXjx1gHH13ErbSI379yk4zq6dTMiBxG1Zs02Zjy2NPnCMybf%2B1XrBVDHez0%2FUcpemr8Zat8xZ7x4mj%2BfRORkeU7si%2FaJsO0Fw60sDM5rlUr51HIRmu4iw7zIxej6hykY%2BQBI017wcsV8qrad%2FQjmOhmrbo8NKelivJFpXq7nDc6jMrjrOmVRBPtGnKKHexX%2B4cI0Hz%2B%2FGD9fEzrUmFn%2FYD68dJl4fCXSv1OQkCS0BeGim42o9p859wb%2FHslv5xhWXwiAh4NPVJtVRZAOg7VySMOZ0NQXiV3hBTi3RvtxoBlDcbXCSQP08mpFJp%2FgJ3xTnmpYxLnfrObSZ7lyi%2B6haIwAKXTTsv009h58iAROqrGh7gWxlh4hEsEC279kRDJKR7zlLyPML7PIMNipyVJ9328eKJEEcVYwwVDhse%2F6Z7VEc8oGjR7AU3kaiPPgU7jvnhHEPrmiQAm5YIMNIYulg7M6suvs4%2B0qbhD%2FRKRCMsHZb0E7sqhMeA%2BcHSdCPvB%2BmaiKC8zB8u9CriO1JWw4uL1p5LDhZY3PP2lvgXvWdisSU2b89hMPm75rwGOqUB8ACYMDIZC04O%2F3%2B%2Fdm2vJYSasVcN%2FpUaTOzuxsAWmUwehX9FpvTY8V%2BBEk%2Bg%2FlxK4OHpMn5%2FM9c4hg4vdgm1IKqVkCOTgfRE%2F8Oy5ayCyRIYB9GFxINzaK%2BchASJrO2yCIJRIGYioKOTZ%2FTJsoT9puX56rMR81oHxSDBQg1JGUguzZd%2Brwl87sCJmf2J3xK25tnHkzG%2FIVSW7yrmCTQd1aEUrCuo&X-Amz-Signature=8124809b7f38526bf2c3f3348631de4f4c45e8e2b7eac0d27c722e8a5e74277a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
