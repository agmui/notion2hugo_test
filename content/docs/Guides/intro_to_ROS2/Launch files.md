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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FAOVES6%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmRYe5c9U6aOrtytooRPZox726Fjq0fUuYe7H9W%2FSDxAiEAoo7Ofjbmazm4THb9DepMSl0W4gRNuK31qXpDVClj7zMq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJ0IES81ArTUuUeAmircA9EiLcc9IVP87qbC8s3dsIBATyAjAcfxCIU6gGAatAOJzYRN99HIowgZhbTwppjNK7pj8h5Iq3R4DQQoIX8PZ0fJjOq7ozKlKkRNEWtteBFkL33H4xm29mNvVhFE99mnvP7ijbUsVC54CLI5C2QC6Rkut3Jh5rBJy22tJ3hYEGifQG7FJ9yBE5WVDHu6Rxawul2ia%2BQmTC6OMWuggBVn5J7r01pR2xUJQE%2BJPo97DyzDolHQnWnvMt33Iuhftc2BjTDOf4CCygBNfYEt5TnlldsKqL1PjakT0ZLnErtG2qBS54s%2BzObRTJotPLMtXwwdO89vTB8G7IAv09xFLlcZYgCIcj7qtenuPYa7lRYOpIFGsXePOtYVk4FK%2BdV5G3qsrN%2FG4H%2FTyciQ4YkNvlj9tOimiHlXJ49f3YkerwVr7k58XA8Qm1XZkLDIA7jpEyUZsYnXTiMoZmWWOLhfwGpUfRlPS5klVHSku3R0cABuKzE9m%2FVdV0QAOXkXXwVVvJDcKgsIulxn%2FqcongCO3uwb97XDvLJFAxfvI0BK3fHnq8sVwo9X%2FHTciLb9Ex61euFGxLCvRhkrc7xWptyVTHXjYVFdsRoLrCY9h40l%2BYnBfS6DE%2Fa1rtDzTm5tmp%2FqMNPclr8GOqUBXgg6WyyawMRKACUuxCo4gbohnDasQ9xWCNFk6DLtVFkeNMrAAC4tsoHNRwTGA0TPtt4CEIPAxAlOiYAzaopj7hDe%2BLir%2B%2FB1KED9%2BapTKpV1xqL9SI58gEpzX%2BcUICNmMumFauD5zktA8l%2FC7xdPiiIIT7HvDta70pIY15SaNiIIEEzKMsdNW6M8ODQXYGw7t0W7aTNjh3hpCQfnQoPowmViXdoB&X-Amz-Signature=4a007d045ee8dd0453475487afeeb0e5ef1a0589eb83b58234983f76ad970643&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FAOVES6%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmRYe5c9U6aOrtytooRPZox726Fjq0fUuYe7H9W%2FSDxAiEAoo7Ofjbmazm4THb9DepMSl0W4gRNuK31qXpDVClj7zMq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJ0IES81ArTUuUeAmircA9EiLcc9IVP87qbC8s3dsIBATyAjAcfxCIU6gGAatAOJzYRN99HIowgZhbTwppjNK7pj8h5Iq3R4DQQoIX8PZ0fJjOq7ozKlKkRNEWtteBFkL33H4xm29mNvVhFE99mnvP7ijbUsVC54CLI5C2QC6Rkut3Jh5rBJy22tJ3hYEGifQG7FJ9yBE5WVDHu6Rxawul2ia%2BQmTC6OMWuggBVn5J7r01pR2xUJQE%2BJPo97DyzDolHQnWnvMt33Iuhftc2BjTDOf4CCygBNfYEt5TnlldsKqL1PjakT0ZLnErtG2qBS54s%2BzObRTJotPLMtXwwdO89vTB8G7IAv09xFLlcZYgCIcj7qtenuPYa7lRYOpIFGsXePOtYVk4FK%2BdV5G3qsrN%2FG4H%2FTyciQ4YkNvlj9tOimiHlXJ49f3YkerwVr7k58XA8Qm1XZkLDIA7jpEyUZsYnXTiMoZmWWOLhfwGpUfRlPS5klVHSku3R0cABuKzE9m%2FVdV0QAOXkXXwVVvJDcKgsIulxn%2FqcongCO3uwb97XDvLJFAxfvI0BK3fHnq8sVwo9X%2FHTciLb9Ex61euFGxLCvRhkrc7xWptyVTHXjYVFdsRoLrCY9h40l%2BYnBfS6DE%2Fa1rtDzTm5tmp%2FqMNPclr8GOqUBXgg6WyyawMRKACUuxCo4gbohnDasQ9xWCNFk6DLtVFkeNMrAAC4tsoHNRwTGA0TPtt4CEIPAxAlOiYAzaopj7hDe%2BLir%2B%2FB1KED9%2BapTKpV1xqL9SI58gEpzX%2BcUICNmMumFauD5zktA8l%2FC7xdPiiIIT7HvDta70pIY15SaNiIIEEzKMsdNW6M8ODQXYGw7t0W7aTNjh3hpCQfnQoPowmViXdoB&X-Amz-Signature=117244423ed995f3206a9c25e62e3c986032ce8be40e8be0708441940d4a4f9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FAOVES6%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmRYe5c9U6aOrtytooRPZox726Fjq0fUuYe7H9W%2FSDxAiEAoo7Ofjbmazm4THb9DepMSl0W4gRNuK31qXpDVClj7zMq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJ0IES81ArTUuUeAmircA9EiLcc9IVP87qbC8s3dsIBATyAjAcfxCIU6gGAatAOJzYRN99HIowgZhbTwppjNK7pj8h5Iq3R4DQQoIX8PZ0fJjOq7ozKlKkRNEWtteBFkL33H4xm29mNvVhFE99mnvP7ijbUsVC54CLI5C2QC6Rkut3Jh5rBJy22tJ3hYEGifQG7FJ9yBE5WVDHu6Rxawul2ia%2BQmTC6OMWuggBVn5J7r01pR2xUJQE%2BJPo97DyzDolHQnWnvMt33Iuhftc2BjTDOf4CCygBNfYEt5TnlldsKqL1PjakT0ZLnErtG2qBS54s%2BzObRTJotPLMtXwwdO89vTB8G7IAv09xFLlcZYgCIcj7qtenuPYa7lRYOpIFGsXePOtYVk4FK%2BdV5G3qsrN%2FG4H%2FTyciQ4YkNvlj9tOimiHlXJ49f3YkerwVr7k58XA8Qm1XZkLDIA7jpEyUZsYnXTiMoZmWWOLhfwGpUfRlPS5klVHSku3R0cABuKzE9m%2FVdV0QAOXkXXwVVvJDcKgsIulxn%2FqcongCO3uwb97XDvLJFAxfvI0BK3fHnq8sVwo9X%2FHTciLb9Ex61euFGxLCvRhkrc7xWptyVTHXjYVFdsRoLrCY9h40l%2BYnBfS6DE%2Fa1rtDzTm5tmp%2FqMNPclr8GOqUBXgg6WyyawMRKACUuxCo4gbohnDasQ9xWCNFk6DLtVFkeNMrAAC4tsoHNRwTGA0TPtt4CEIPAxAlOiYAzaopj7hDe%2BLir%2B%2FB1KED9%2BapTKpV1xqL9SI58gEpzX%2BcUICNmMumFauD5zktA8l%2FC7xdPiiIIT7HvDta70pIY15SaNiIIEEzKMsdNW6M8ODQXYGw7t0W7aTNjh3hpCQfnQoPowmViXdoB&X-Amz-Signature=1a782383629dc1094d85865406118ec2a5e6ff4da82a136d8b8972d41fc9a372&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
