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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HT7DS4O%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJbwJcAy1kRCQws%2FBNLz7Zo%2BNqGe1GO3FQEZVsz%2B0KrAiEA7GjWIYYi9uT6%2FaikK36H24%2FPcy6IdH8KGY97OEAwipIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDK%2BELif%2BuouD17pITCrcA8weQ8AM%2FDLBEP8TqydKiGw8I5sIPpXmI21BOFmi%2F%2FZaN0VTYd9vBJxydb%2Fze2ZxB9LUePAoP2xxT5RayhaVCatWhWcMFbRYabF7KlLTp3MgzCk%2B7AKOCHvDhgalqt0eeNKPXQUcU9kVz5yvl6WGNvdEb0JLwEYsJ9CaEc622m2mxxCUtENxJbF0QtFTgym6ak1%2Fg11892M2ZKMclC6Au7dAs6ukw1jzWIAs1uBIQx%2F4FPnY1TIdDOXWlXvLl%2Boq1oP6L6gzUrighZgXf9KX2knHNRCknVjMzT4zBGNkiiJbLO%2BxeMcA0Hcjj4OnM8tuKDUe1iFoAEidC%2F4NYAI4w6GFwZwemzXTpSoaAMTdvUpaNtT%2BW%2BpXsthx2zDQYEAn%2BR96yeFmWz%2BHiYqsnmgasKiDxyxjvgjGpD%2BnWa%2BC0UniwmhVASuiZ9a8aipggFUDQbUuxDpCfks8yIjmGrvdSQ8jFN2UHLVJf%2FshsJMb0mBqZ4is6pHegzKxU5WfGTBFjXivg9Blq92K0aBG0qpG68IurfwcF7WIn1%2Fjt8ul2nxfCgke8WgsKPt1NZRFnQi2I1G0Ue6N%2F%2BRdNPKi0WTSl%2FInEN25p5xquk69QKfaYKultd9eSd2J0x0mpXiEMK7v68AGOqUB3OWfadGZJOZeuUmlwREFsiIt%2Fty%2FJnpSzVsn3maeG%2FjDgzjm4oIuBYX3dA%2B7ZFiw5avStDCYcLW1Hvkh4CqZBwE5A348U%2Bw1vhBoUk6hCNjD2tSfKoM2jziIHu8zoLqRJ3BLty97CeutKJACtc%2BcKFTn5PUvMpnE%2B9K%2F%2BN17YpJenz%2Bdo3zyO8xHg2CPjyIGPsDYtqkXAktWmucJgcmiM%2FW8QC%2B5&X-Amz-Signature=5ed1868b2f025306a584f71f85fe6fc9b0558c92e72a8855d5998ccbf07fd7d0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HT7DS4O%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJbwJcAy1kRCQws%2FBNLz7Zo%2BNqGe1GO3FQEZVsz%2B0KrAiEA7GjWIYYi9uT6%2FaikK36H24%2FPcy6IdH8KGY97OEAwipIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDK%2BELif%2BuouD17pITCrcA8weQ8AM%2FDLBEP8TqydKiGw8I5sIPpXmI21BOFmi%2F%2FZaN0VTYd9vBJxydb%2Fze2ZxB9LUePAoP2xxT5RayhaVCatWhWcMFbRYabF7KlLTp3MgzCk%2B7AKOCHvDhgalqt0eeNKPXQUcU9kVz5yvl6WGNvdEb0JLwEYsJ9CaEc622m2mxxCUtENxJbF0QtFTgym6ak1%2Fg11892M2ZKMclC6Au7dAs6ukw1jzWIAs1uBIQx%2F4FPnY1TIdDOXWlXvLl%2Boq1oP6L6gzUrighZgXf9KX2knHNRCknVjMzT4zBGNkiiJbLO%2BxeMcA0Hcjj4OnM8tuKDUe1iFoAEidC%2F4NYAI4w6GFwZwemzXTpSoaAMTdvUpaNtT%2BW%2BpXsthx2zDQYEAn%2BR96yeFmWz%2BHiYqsnmgasKiDxyxjvgjGpD%2BnWa%2BC0UniwmhVASuiZ9a8aipggFUDQbUuxDpCfks8yIjmGrvdSQ8jFN2UHLVJf%2FshsJMb0mBqZ4is6pHegzKxU5WfGTBFjXivg9Blq92K0aBG0qpG68IurfwcF7WIn1%2Fjt8ul2nxfCgke8WgsKPt1NZRFnQi2I1G0Ue6N%2F%2BRdNPKi0WTSl%2FInEN25p5xquk69QKfaYKultd9eSd2J0x0mpXiEMK7v68AGOqUB3OWfadGZJOZeuUmlwREFsiIt%2Fty%2FJnpSzVsn3maeG%2FjDgzjm4oIuBYX3dA%2B7ZFiw5avStDCYcLW1Hvkh4CqZBwE5A348U%2Bw1vhBoUk6hCNjD2tSfKoM2jziIHu8zoLqRJ3BLty97CeutKJACtc%2BcKFTn5PUvMpnE%2B9K%2F%2BN17YpJenz%2Bdo3zyO8xHg2CPjyIGPsDYtqkXAktWmucJgcmiM%2FW8QC%2B5&X-Amz-Signature=440ce4ec8a8a71eca34d1b073e2c45cf3338ff8c5ec4101e7bc4b440a21cdd8b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HT7DS4O%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJbwJcAy1kRCQws%2FBNLz7Zo%2BNqGe1GO3FQEZVsz%2B0KrAiEA7GjWIYYi9uT6%2FaikK36H24%2FPcy6IdH8KGY97OEAwipIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDK%2BELif%2BuouD17pITCrcA8weQ8AM%2FDLBEP8TqydKiGw8I5sIPpXmI21BOFmi%2F%2FZaN0VTYd9vBJxydb%2Fze2ZxB9LUePAoP2xxT5RayhaVCatWhWcMFbRYabF7KlLTp3MgzCk%2B7AKOCHvDhgalqt0eeNKPXQUcU9kVz5yvl6WGNvdEb0JLwEYsJ9CaEc622m2mxxCUtENxJbF0QtFTgym6ak1%2Fg11892M2ZKMclC6Au7dAs6ukw1jzWIAs1uBIQx%2F4FPnY1TIdDOXWlXvLl%2Boq1oP6L6gzUrighZgXf9KX2knHNRCknVjMzT4zBGNkiiJbLO%2BxeMcA0Hcjj4OnM8tuKDUe1iFoAEidC%2F4NYAI4w6GFwZwemzXTpSoaAMTdvUpaNtT%2BW%2BpXsthx2zDQYEAn%2BR96yeFmWz%2BHiYqsnmgasKiDxyxjvgjGpD%2BnWa%2BC0UniwmhVASuiZ9a8aipggFUDQbUuxDpCfks8yIjmGrvdSQ8jFN2UHLVJf%2FshsJMb0mBqZ4is6pHegzKxU5WfGTBFjXivg9Blq92K0aBG0qpG68IurfwcF7WIn1%2Fjt8ul2nxfCgke8WgsKPt1NZRFnQi2I1G0Ue6N%2F%2BRdNPKi0WTSl%2FInEN25p5xquk69QKfaYKultd9eSd2J0x0mpXiEMK7v68AGOqUB3OWfadGZJOZeuUmlwREFsiIt%2Fty%2FJnpSzVsn3maeG%2FjDgzjm4oIuBYX3dA%2B7ZFiw5avStDCYcLW1Hvkh4CqZBwE5A348U%2Bw1vhBoUk6hCNjD2tSfKoM2jziIHu8zoLqRJ3BLty97CeutKJACtc%2BcKFTn5PUvMpnE%2B9K%2F%2BN17YpJenz%2Bdo3zyO8xHg2CPjyIGPsDYtqkXAktWmucJgcmiM%2FW8QC%2B5&X-Amz-Signature=8155527a76d2cdaa30bfc2b8fa5a3ad25daf9772f03dbf17947086cfdea93e81&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
