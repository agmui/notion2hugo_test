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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMFXSXSQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICDZe4L%2B1koFGZQhvo2%2BEvD4jRhZbcs7nRT1pG7zbkhGAiEA%2BoDJONZgHOwYeHHH7nn92PQ3LwaibskIsZxRK939Y6Uq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDM5Gyf2ykdQu3XcQuyrcAweKpLkQ4XQFUBq4FYm4PjRAHKGyDvsfWJyLNvotXDBA7yrymAVHbju0KX%2FJNrkU9ZbHv%2Fojd9gdN7SdysZDOkRlscZisPXd5keQ4D0gaSSOMjtLlBHs4PdUvgeOLW4m61VvBp9%2Fno%2BTuwjV08Y4PrqD2Oyqg8iLrnc1V73t9GUn%2BRMXfStyvDQ1anJ5bwrKmFsdt76yNvVH3Kwwbm8ycXW8z6%2FQuhPyCfEMfhCIZ9WUKyIkep4NJE9LqZgxKqFg6QLcDUWYrcbTrgcR50VTNtjFm9vUO%2FPRC%2FyOtzfUzvPwL5myq4r%2B7K%2FeRRs%2FVenofKue4RGjlHW6BsA7TL%2BzfacddmooANNR8%2BRtoOg%2FuOrn8mSQ7x9f36qaetQLhnWHYgVrwc4jD9tQbJoA7x9Ji3hLxbousyv4aSUJsc29F4yErfmPMk44jYQBFwE6soUlWvD2bi%2Fc8%2BIHy5dB4BrU1TQZ6Aduqb0QsVVEpvWDkUjOhtZzlLEfPtFa9yes7wMrjC%2B7kDTGpRgr93iqagAZuF1R8AgkRvCwEtY8AqUOLCcC6aI1Am%2BfmpYqsFHmXjU05GPgvkgtm76sJohErMv5CXWj46Z1QhMA4NlHf91BqptwMOYl3peYtl3%2FDUkoMMGF%2FcEGOqUB%2B3JjRqxmpi5oiC843TG6HR2Tuc30mTf1xbX4%2BhyW4%2B9UL11G%2FErVlYo3gzkD3X5MfDozeQHz5E%2BCG2RBiUHBT5IHC%2BUi6KA0mUE%2FjwQlr40aI%2Fs2CxXIl2NM2I93fbpvFrbqr9Ap7QWUfLDEsxv9FEU547S9vmihBHWB3OWq%2B5gBXagJwgmAcHTD%2BpajxZX2SLNq8q5DDTOMuR5zo7zOM%2F3sQ00d&X-Amz-Signature=46608e97445d6bea6154aeaf7ddc8938ecf331bb4cc2eebbc2edbd0cd3e34672&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMFXSXSQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICDZe4L%2B1koFGZQhvo2%2BEvD4jRhZbcs7nRT1pG7zbkhGAiEA%2BoDJONZgHOwYeHHH7nn92PQ3LwaibskIsZxRK939Y6Uq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDM5Gyf2ykdQu3XcQuyrcAweKpLkQ4XQFUBq4FYm4PjRAHKGyDvsfWJyLNvotXDBA7yrymAVHbju0KX%2FJNrkU9ZbHv%2Fojd9gdN7SdysZDOkRlscZisPXd5keQ4D0gaSSOMjtLlBHs4PdUvgeOLW4m61VvBp9%2Fno%2BTuwjV08Y4PrqD2Oyqg8iLrnc1V73t9GUn%2BRMXfStyvDQ1anJ5bwrKmFsdt76yNvVH3Kwwbm8ycXW8z6%2FQuhPyCfEMfhCIZ9WUKyIkep4NJE9LqZgxKqFg6QLcDUWYrcbTrgcR50VTNtjFm9vUO%2FPRC%2FyOtzfUzvPwL5myq4r%2B7K%2FeRRs%2FVenofKue4RGjlHW6BsA7TL%2BzfacddmooANNR8%2BRtoOg%2FuOrn8mSQ7x9f36qaetQLhnWHYgVrwc4jD9tQbJoA7x9Ji3hLxbousyv4aSUJsc29F4yErfmPMk44jYQBFwE6soUlWvD2bi%2Fc8%2BIHy5dB4BrU1TQZ6Aduqb0QsVVEpvWDkUjOhtZzlLEfPtFa9yes7wMrjC%2B7kDTGpRgr93iqagAZuF1R8AgkRvCwEtY8AqUOLCcC6aI1Am%2BfmpYqsFHmXjU05GPgvkgtm76sJohErMv5CXWj46Z1QhMA4NlHf91BqptwMOYl3peYtl3%2FDUkoMMGF%2FcEGOqUB%2B3JjRqxmpi5oiC843TG6HR2Tuc30mTf1xbX4%2BhyW4%2B9UL11G%2FErVlYo3gzkD3X5MfDozeQHz5E%2BCG2RBiUHBT5IHC%2BUi6KA0mUE%2FjwQlr40aI%2Fs2CxXIl2NM2I93fbpvFrbqr9Ap7QWUfLDEsxv9FEU547S9vmihBHWB3OWq%2B5gBXagJwgmAcHTD%2BpajxZX2SLNq8q5DDTOMuR5zo7zOM%2F3sQ00d&X-Amz-Signature=8c53c1376b805ab54b1969d6e14b516a0b52f14f6f70f96524b07f18cab56c5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMFXSXSQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICDZe4L%2B1koFGZQhvo2%2BEvD4jRhZbcs7nRT1pG7zbkhGAiEA%2BoDJONZgHOwYeHHH7nn92PQ3LwaibskIsZxRK939Y6Uq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDM5Gyf2ykdQu3XcQuyrcAweKpLkQ4XQFUBq4FYm4PjRAHKGyDvsfWJyLNvotXDBA7yrymAVHbju0KX%2FJNrkU9ZbHv%2Fojd9gdN7SdysZDOkRlscZisPXd5keQ4D0gaSSOMjtLlBHs4PdUvgeOLW4m61VvBp9%2Fno%2BTuwjV08Y4PrqD2Oyqg8iLrnc1V73t9GUn%2BRMXfStyvDQ1anJ5bwrKmFsdt76yNvVH3Kwwbm8ycXW8z6%2FQuhPyCfEMfhCIZ9WUKyIkep4NJE9LqZgxKqFg6QLcDUWYrcbTrgcR50VTNtjFm9vUO%2FPRC%2FyOtzfUzvPwL5myq4r%2B7K%2FeRRs%2FVenofKue4RGjlHW6BsA7TL%2BzfacddmooANNR8%2BRtoOg%2FuOrn8mSQ7x9f36qaetQLhnWHYgVrwc4jD9tQbJoA7x9Ji3hLxbousyv4aSUJsc29F4yErfmPMk44jYQBFwE6soUlWvD2bi%2Fc8%2BIHy5dB4BrU1TQZ6Aduqb0QsVVEpvWDkUjOhtZzlLEfPtFa9yes7wMrjC%2B7kDTGpRgr93iqagAZuF1R8AgkRvCwEtY8AqUOLCcC6aI1Am%2BfmpYqsFHmXjU05GPgvkgtm76sJohErMv5CXWj46Z1QhMA4NlHf91BqptwMOYl3peYtl3%2FDUkoMMGF%2FcEGOqUB%2B3JjRqxmpi5oiC843TG6HR2Tuc30mTf1xbX4%2BhyW4%2B9UL11G%2FErVlYo3gzkD3X5MfDozeQHz5E%2BCG2RBiUHBT5IHC%2BUi6KA0mUE%2FjwQlr40aI%2Fs2CxXIl2NM2I93fbpvFrbqr9Ap7QWUfLDEsxv9FEU547S9vmihBHWB3OWq%2B5gBXagJwgmAcHTD%2BpajxZX2SLNq8q5DDTOMuR5zo7zOM%2F3sQ00d&X-Amz-Signature=a8b6b73177675c47d47383652e8489860f50b3026673ad8f53e0ad1df4b28456&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
