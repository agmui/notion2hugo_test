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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB7TDXKP%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChqRzw4Y9I8SOs8L9nX1I6G0ITM6QW80GkPHm3BPU4nQIhALLf99d1HD765Y8I9JRS7ZMasSPp4DvBdXXMbmNfMbpnKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BNwUtCfrjcst1BzUq3AOFx8VudyjZNAv5L3A2gRq5dPyJtcdMdli74NlpS5Wajn%2F99oYooMg6ZQ8j%2FgTRKhJrBhUVVh3SEZu4X%2FiKBsrjt19kcJZgcOMSNmVRqP6PSXA3puYk3Z15o2Fno%2BjULJOQ9liDd%2F7c1W4HazzJ%2FN0T1e2N35LNf1RmDRaTJdem9IiFP4Ooo2A8NqM%2Bc0dtOyBqAE7gqNFaARrQqOOzQO6nh9WUmB3pCzx4DoemSBNaMogp6Tn1hzpMf1XcoXxkPUiSoC3blI3Ei%2BQIgtrYy63%2BiYsl3wGPKORD6q2hgBxkzPuhwvQriePdlLrysR53l0su6Xp94ivC%2BlSI76H0n9IdKX84n2KMmi90g4PEOH%2BtGqmNa%2B%2BlrVN%2FrvIPEN4BUFEOEHckRUODdGeY%2FX%2F%2B7sf66TezsjHynX8j4wrUBj9K2YTbYSxI2A2GKsJt%2FDwX6DBevYNo5AQ7n973U6ljnhbTXRWBzYquUpdu0inwmi%2B99rrIGBVODlisbsQTadncwmR4pmmpGEJ52p6kzkDBrnOnkQ5JVJEFMmZYK0rszSFEnAT2IzIVtbey0cAfMcE1v%2BT%2FZ1n8a02Ba5kLrFENmXozheJ9dG%2B3jsMuL44A8sJvHx0UDFr7qfo8jU4JszDX9um8BjqkAQv%2BYbMn%2FgE5xAarulFn6l%2FA3QX83c8qUTkfgAFIm8p6zQdTZRnOQXc4DKgPEnp4nndipcosSxXTgwYgE5CMO5YliXaqYpJ8lyH91ByWP%2FxI3gyM9l%2BkOvb7QQKNQ%2FKQR07pSn34g%2B5YBhK71ItoUd5CrcWv%2Bv%2B7s6IUuHdfbIHnGccDcn9TEJKo4L%2B%2FIuJZDKa8bSzR4qlc4u%2FCn4V%2BI2cBo6iz&X-Amz-Signature=641f54c721da022d68b94b87eb2839aade463f7951c6f964faf7bee476c9d4e8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB7TDXKP%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChqRzw4Y9I8SOs8L9nX1I6G0ITM6QW80GkPHm3BPU4nQIhALLf99d1HD765Y8I9JRS7ZMasSPp4DvBdXXMbmNfMbpnKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BNwUtCfrjcst1BzUq3AOFx8VudyjZNAv5L3A2gRq5dPyJtcdMdli74NlpS5Wajn%2F99oYooMg6ZQ8j%2FgTRKhJrBhUVVh3SEZu4X%2FiKBsrjt19kcJZgcOMSNmVRqP6PSXA3puYk3Z15o2Fno%2BjULJOQ9liDd%2F7c1W4HazzJ%2FN0T1e2N35LNf1RmDRaTJdem9IiFP4Ooo2A8NqM%2Bc0dtOyBqAE7gqNFaARrQqOOzQO6nh9WUmB3pCzx4DoemSBNaMogp6Tn1hzpMf1XcoXxkPUiSoC3blI3Ei%2BQIgtrYy63%2BiYsl3wGPKORD6q2hgBxkzPuhwvQriePdlLrysR53l0su6Xp94ivC%2BlSI76H0n9IdKX84n2KMmi90g4PEOH%2BtGqmNa%2B%2BlrVN%2FrvIPEN4BUFEOEHckRUODdGeY%2FX%2F%2B7sf66TezsjHynX8j4wrUBj9K2YTbYSxI2A2GKsJt%2FDwX6DBevYNo5AQ7n973U6ljnhbTXRWBzYquUpdu0inwmi%2B99rrIGBVODlisbsQTadncwmR4pmmpGEJ52p6kzkDBrnOnkQ5JVJEFMmZYK0rszSFEnAT2IzIVtbey0cAfMcE1v%2BT%2FZ1n8a02Ba5kLrFENmXozheJ9dG%2B3jsMuL44A8sJvHx0UDFr7qfo8jU4JszDX9um8BjqkAQv%2BYbMn%2FgE5xAarulFn6l%2FA3QX83c8qUTkfgAFIm8p6zQdTZRnOQXc4DKgPEnp4nndipcosSxXTgwYgE5CMO5YliXaqYpJ8lyH91ByWP%2FxI3gyM9l%2BkOvb7QQKNQ%2FKQR07pSn34g%2B5YBhK71ItoUd5CrcWv%2Bv%2B7s6IUuHdfbIHnGccDcn9TEJKo4L%2B%2FIuJZDKa8bSzR4qlc4u%2FCn4V%2BI2cBo6iz&X-Amz-Signature=665307092004fcc91495e455c59080312c2dc1abaff320f395763e4b93b4949a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB7TDXKP%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChqRzw4Y9I8SOs8L9nX1I6G0ITM6QW80GkPHm3BPU4nQIhALLf99d1HD765Y8I9JRS7ZMasSPp4DvBdXXMbmNfMbpnKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BNwUtCfrjcst1BzUq3AOFx8VudyjZNAv5L3A2gRq5dPyJtcdMdli74NlpS5Wajn%2F99oYooMg6ZQ8j%2FgTRKhJrBhUVVh3SEZu4X%2FiKBsrjt19kcJZgcOMSNmVRqP6PSXA3puYk3Z15o2Fno%2BjULJOQ9liDd%2F7c1W4HazzJ%2FN0T1e2N35LNf1RmDRaTJdem9IiFP4Ooo2A8NqM%2Bc0dtOyBqAE7gqNFaARrQqOOzQO6nh9WUmB3pCzx4DoemSBNaMogp6Tn1hzpMf1XcoXxkPUiSoC3blI3Ei%2BQIgtrYy63%2BiYsl3wGPKORD6q2hgBxkzPuhwvQriePdlLrysR53l0su6Xp94ivC%2BlSI76H0n9IdKX84n2KMmi90g4PEOH%2BtGqmNa%2B%2BlrVN%2FrvIPEN4BUFEOEHckRUODdGeY%2FX%2F%2B7sf66TezsjHynX8j4wrUBj9K2YTbYSxI2A2GKsJt%2FDwX6DBevYNo5AQ7n973U6ljnhbTXRWBzYquUpdu0inwmi%2B99rrIGBVODlisbsQTadncwmR4pmmpGEJ52p6kzkDBrnOnkQ5JVJEFMmZYK0rszSFEnAT2IzIVtbey0cAfMcE1v%2BT%2FZ1n8a02Ba5kLrFENmXozheJ9dG%2B3jsMuL44A8sJvHx0UDFr7qfo8jU4JszDX9um8BjqkAQv%2BYbMn%2FgE5xAarulFn6l%2FA3QX83c8qUTkfgAFIm8p6zQdTZRnOQXc4DKgPEnp4nndipcosSxXTgwYgE5CMO5YliXaqYpJ8lyH91ByWP%2FxI3gyM9l%2BkOvb7QQKNQ%2FKQR07pSn34g%2B5YBhK71ItoUd5CrcWv%2Bv%2B7s6IUuHdfbIHnGccDcn9TEJKo4L%2B%2FIuJZDKa8bSzR4qlc4u%2FCn4V%2BI2cBo6iz&X-Amz-Signature=77eea3d9dafba8e7e84fc35562a1784ee69dc2fe4c921569c3980ced6628b7b8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
