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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KYCWQMH%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHR5SPFOlWmsB5g1jMLYsMLDmtNSLHC4sKwKgfVIdJi%2FAiBlSrn6M8jYarbrRsGv4HzDjcaIXD2uctGvTB8jnADK%2FiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM03611lt2bWQxbuIlKtwDwPc69sW7VAHPyNelNKUP9VFGQHjce56uLeLKr8gfYC%2F2sYe5vbf0XYLIldE6uUwSv%2F%2FmNMSElCdHEYD0GCXXHFRP5nAsPTSR%2FfjSfVYKWu7fcaDEMmmlKFt5nzKjfJ9rh6swzctaDOBI04hAOP46%2Fft8yOHQ8htKUcwS8o0vxHqgw4PlLqn0FiSjOPyZzRJ3IsQ5iS3biOW6dvZ731OqpUMhb3R7y0qI6NvwQLV5uZuEj1kXk%2BM8ZLAg1iFit7zXlcnmfGHi9gAEHRvxu%2BnaMqp%2BbgONHaGa%2FFwysOiIc9OrvExTGXBWBlCyPDxLqC6gad%2F2I7K8yWfBmfXeNJNZfKQDVJJk40S6ffOWcBz8AyZK6C799pxMpvNtBgaTihGQ6W0lyh1ul2O8nEfxOBZ4oaLaSdoZf31YgP8Ko0Tt%2FzkVcD1dwBl4re5io5Mi5TpE2geiwAWbgGq8aJw3rB42Qon2KH%2BDfHElRPYBZY27TsPZarWXUg9JcTT9BgYe1MSDa2qkezVVh4igVeTtOtajwN1fIr4sE16pIPTa9dSCr5IslQS9To%2Bat8dQrr79nn8LVuhW6HJBsqAWS0Ij7eZAI7dJknPC2WrZ7DDCWflSX9hDz1LmfVfrOdVV5l4w2tHwvAY6pgHdoFkqiTv4hnGEu8clXP%2BG92GyQQQZkyZfvaNTBnCVeHuT4mNqcbBxDdBxhI7Yvznor1kONgwE2t0UMxH44yftV60AV1sZj5mT%2Bkcxa77eMbuzlIYVCKPp%2FZzHABpJ3F9VroBvdGzPWQi8wGlIYft%2FW0s2KCbDsf%2Fa24kX3Qcq1F%2Bqt4ThKQN%2BcGhdmvI5FkIBZMXWdy%2FmKNze6wg7dFrku9rPCQ%2FM&X-Amz-Signature=ca883750132f8eaaa13242e1cada0c5c5ba085498a9168b925ae42daf8bbe11d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KYCWQMH%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHR5SPFOlWmsB5g1jMLYsMLDmtNSLHC4sKwKgfVIdJi%2FAiBlSrn6M8jYarbrRsGv4HzDjcaIXD2uctGvTB8jnADK%2FiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM03611lt2bWQxbuIlKtwDwPc69sW7VAHPyNelNKUP9VFGQHjce56uLeLKr8gfYC%2F2sYe5vbf0XYLIldE6uUwSv%2F%2FmNMSElCdHEYD0GCXXHFRP5nAsPTSR%2FfjSfVYKWu7fcaDEMmmlKFt5nzKjfJ9rh6swzctaDOBI04hAOP46%2Fft8yOHQ8htKUcwS8o0vxHqgw4PlLqn0FiSjOPyZzRJ3IsQ5iS3biOW6dvZ731OqpUMhb3R7y0qI6NvwQLV5uZuEj1kXk%2BM8ZLAg1iFit7zXlcnmfGHi9gAEHRvxu%2BnaMqp%2BbgONHaGa%2FFwysOiIc9OrvExTGXBWBlCyPDxLqC6gad%2F2I7K8yWfBmfXeNJNZfKQDVJJk40S6ffOWcBz8AyZK6C799pxMpvNtBgaTihGQ6W0lyh1ul2O8nEfxOBZ4oaLaSdoZf31YgP8Ko0Tt%2FzkVcD1dwBl4re5io5Mi5TpE2geiwAWbgGq8aJw3rB42Qon2KH%2BDfHElRPYBZY27TsPZarWXUg9JcTT9BgYe1MSDa2qkezVVh4igVeTtOtajwN1fIr4sE16pIPTa9dSCr5IslQS9To%2Bat8dQrr79nn8LVuhW6HJBsqAWS0Ij7eZAI7dJknPC2WrZ7DDCWflSX9hDz1LmfVfrOdVV5l4w2tHwvAY6pgHdoFkqiTv4hnGEu8clXP%2BG92GyQQQZkyZfvaNTBnCVeHuT4mNqcbBxDdBxhI7Yvznor1kONgwE2t0UMxH44yftV60AV1sZj5mT%2Bkcxa77eMbuzlIYVCKPp%2FZzHABpJ3F9VroBvdGzPWQi8wGlIYft%2FW0s2KCbDsf%2Fa24kX3Qcq1F%2Bqt4ThKQN%2BcGhdmvI5FkIBZMXWdy%2FmKNze6wg7dFrku9rPCQ%2FM&X-Amz-Signature=d9ad45c46b7617b8833bd7e15cc704329f7a27cca6b7abb807f2c565b4e50cdd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KYCWQMH%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHR5SPFOlWmsB5g1jMLYsMLDmtNSLHC4sKwKgfVIdJi%2FAiBlSrn6M8jYarbrRsGv4HzDjcaIXD2uctGvTB8jnADK%2FiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM03611lt2bWQxbuIlKtwDwPc69sW7VAHPyNelNKUP9VFGQHjce56uLeLKr8gfYC%2F2sYe5vbf0XYLIldE6uUwSv%2F%2FmNMSElCdHEYD0GCXXHFRP5nAsPTSR%2FfjSfVYKWu7fcaDEMmmlKFt5nzKjfJ9rh6swzctaDOBI04hAOP46%2Fft8yOHQ8htKUcwS8o0vxHqgw4PlLqn0FiSjOPyZzRJ3IsQ5iS3biOW6dvZ731OqpUMhb3R7y0qI6NvwQLV5uZuEj1kXk%2BM8ZLAg1iFit7zXlcnmfGHi9gAEHRvxu%2BnaMqp%2BbgONHaGa%2FFwysOiIc9OrvExTGXBWBlCyPDxLqC6gad%2F2I7K8yWfBmfXeNJNZfKQDVJJk40S6ffOWcBz8AyZK6C799pxMpvNtBgaTihGQ6W0lyh1ul2O8nEfxOBZ4oaLaSdoZf31YgP8Ko0Tt%2FzkVcD1dwBl4re5io5Mi5TpE2geiwAWbgGq8aJw3rB42Qon2KH%2BDfHElRPYBZY27TsPZarWXUg9JcTT9BgYe1MSDa2qkezVVh4igVeTtOtajwN1fIr4sE16pIPTa9dSCr5IslQS9To%2Bat8dQrr79nn8LVuhW6HJBsqAWS0Ij7eZAI7dJknPC2WrZ7DDCWflSX9hDz1LmfVfrOdVV5l4w2tHwvAY6pgHdoFkqiTv4hnGEu8clXP%2BG92GyQQQZkyZfvaNTBnCVeHuT4mNqcbBxDdBxhI7Yvznor1kONgwE2t0UMxH44yftV60AV1sZj5mT%2Bkcxa77eMbuzlIYVCKPp%2FZzHABpJ3F9VroBvdGzPWQi8wGlIYft%2FW0s2KCbDsf%2Fa24kX3Qcq1F%2Bqt4ThKQN%2BcGhdmvI5FkIBZMXWdy%2FmKNze6wg7dFrku9rPCQ%2FM&X-Amz-Signature=162cd5db136907552dae595473fd2fd4449c8dfde31078f9738ebfd61fdb98f1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
