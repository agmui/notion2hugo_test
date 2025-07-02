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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H7PC522%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2B7y%2FS1Sbf%2FdRCpR5I8WyRfL6R%2F1TqbPmhW8k%2FkSRy6AiEAj5UMD4ZBFDDfkavwJ5iX2IwH%2B88BrFbqLm2Gx%2FQd%2FVMqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOPNXOZGbIkXZGrCuCrcA9FfiKNKITnB7TrbBwFqfNxDZWhw0jViOzOjC3q7hqoA2jmiftkyk0JV8tsBikmr0yrJKGs6C8G6wV0E7%2BsmeMXhbcqHFXff%2BanSBfxA%2Fd7qQJwWeKUuCeBeXmJyu03bBWt30kcjYLL5xIs7OR3KrwB15yzWlCVn%2BXNQ4A2pMi7JeQEnlSUgsGNDvP%2F4Ixn4Xt6sYb5rZDCUSiV%2FzkEALLOfBMl44lXP06tFGLLYeErUxPfOQYn5l4Dh1Ehydbh4EEciBPq3vIRgYfHoDyP5Gw2W%2F05xeCmSS6lMmhf2fnnyBD7xEW0v%2BiY2ceSayRfW9Cx0ieREnah7yE1BiVMcRPU7AYOqyxID5QoYrH9Mo1%2FcrLv7x1Uhx5Dlrf86ChvuBkwXlwpQqxTTtqLhA66VESlvNJsrJ%2BwYaCYbJ98z2e4L6tevteYc0qZJTFWpl2jaJDdKxD3EUlkbYkRTpfawBe%2BEr7R7LTKH5CTfqeaTxqq%2FV%2BwJjEpSbjkJ1uASakzPWf58MW%2FNKNiHDuFedG3V0lympTSrwhIYgtWnxY6y7c%2Bv%2FwNfADtxfwDlsU54IPCqJN4npIytfXkI5mW3PM0fYXKwpIlQUxOJHhFp7zapKy4DNFX68Rf8uln8bqn5MOSeksMGOqUBWZTy47bX3FmGKITMT5YzboKG5RuzQ6EVs4tGEygHzH5Jyi3lmtFQpXdg9VBPqKbS7A2ktCSY5qnUke1vDhZvE5DVQQnRIBhg8TmzCcgx22v7rXhyqwR0XykjTC%2Bfp2ppEiUOtsNhvEEbmhe7asuxl%2Fp6%2Bc9oJx2x%2FGSSp7JR5Qrzihw61HTK75PgW7%2FSBfPZvkmZ%2BItJxyEb96HxWVZ7CGwIPHTe&X-Amz-Signature=dedc5efc7499b2eb0bd26817909a8243d765613d736120f0c9d19b4225abb8eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H7PC522%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2B7y%2FS1Sbf%2FdRCpR5I8WyRfL6R%2F1TqbPmhW8k%2FkSRy6AiEAj5UMD4ZBFDDfkavwJ5iX2IwH%2B88BrFbqLm2Gx%2FQd%2FVMqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOPNXOZGbIkXZGrCuCrcA9FfiKNKITnB7TrbBwFqfNxDZWhw0jViOzOjC3q7hqoA2jmiftkyk0JV8tsBikmr0yrJKGs6C8G6wV0E7%2BsmeMXhbcqHFXff%2BanSBfxA%2Fd7qQJwWeKUuCeBeXmJyu03bBWt30kcjYLL5xIs7OR3KrwB15yzWlCVn%2BXNQ4A2pMi7JeQEnlSUgsGNDvP%2F4Ixn4Xt6sYb5rZDCUSiV%2FzkEALLOfBMl44lXP06tFGLLYeErUxPfOQYn5l4Dh1Ehydbh4EEciBPq3vIRgYfHoDyP5Gw2W%2F05xeCmSS6lMmhf2fnnyBD7xEW0v%2BiY2ceSayRfW9Cx0ieREnah7yE1BiVMcRPU7AYOqyxID5QoYrH9Mo1%2FcrLv7x1Uhx5Dlrf86ChvuBkwXlwpQqxTTtqLhA66VESlvNJsrJ%2BwYaCYbJ98z2e4L6tevteYc0qZJTFWpl2jaJDdKxD3EUlkbYkRTpfawBe%2BEr7R7LTKH5CTfqeaTxqq%2FV%2BwJjEpSbjkJ1uASakzPWf58MW%2FNKNiHDuFedG3V0lympTSrwhIYgtWnxY6y7c%2Bv%2FwNfADtxfwDlsU54IPCqJN4npIytfXkI5mW3PM0fYXKwpIlQUxOJHhFp7zapKy4DNFX68Rf8uln8bqn5MOSeksMGOqUBWZTy47bX3FmGKITMT5YzboKG5RuzQ6EVs4tGEygHzH5Jyi3lmtFQpXdg9VBPqKbS7A2ktCSY5qnUke1vDhZvE5DVQQnRIBhg8TmzCcgx22v7rXhyqwR0XykjTC%2Bfp2ppEiUOtsNhvEEbmhe7asuxl%2Fp6%2Bc9oJx2x%2FGSSp7JR5Qrzihw61HTK75PgW7%2FSBfPZvkmZ%2BItJxyEb96HxWVZ7CGwIPHTe&X-Amz-Signature=a80e872893e584e1e6a3dd133219e933faa4cb5a777c7deb0f52007e351ea2bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H7PC522%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2B7y%2FS1Sbf%2FdRCpR5I8WyRfL6R%2F1TqbPmhW8k%2FkSRy6AiEAj5UMD4ZBFDDfkavwJ5iX2IwH%2B88BrFbqLm2Gx%2FQd%2FVMqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOPNXOZGbIkXZGrCuCrcA9FfiKNKITnB7TrbBwFqfNxDZWhw0jViOzOjC3q7hqoA2jmiftkyk0JV8tsBikmr0yrJKGs6C8G6wV0E7%2BsmeMXhbcqHFXff%2BanSBfxA%2Fd7qQJwWeKUuCeBeXmJyu03bBWt30kcjYLL5xIs7OR3KrwB15yzWlCVn%2BXNQ4A2pMi7JeQEnlSUgsGNDvP%2F4Ixn4Xt6sYb5rZDCUSiV%2FzkEALLOfBMl44lXP06tFGLLYeErUxPfOQYn5l4Dh1Ehydbh4EEciBPq3vIRgYfHoDyP5Gw2W%2F05xeCmSS6lMmhf2fnnyBD7xEW0v%2BiY2ceSayRfW9Cx0ieREnah7yE1BiVMcRPU7AYOqyxID5QoYrH9Mo1%2FcrLv7x1Uhx5Dlrf86ChvuBkwXlwpQqxTTtqLhA66VESlvNJsrJ%2BwYaCYbJ98z2e4L6tevteYc0qZJTFWpl2jaJDdKxD3EUlkbYkRTpfawBe%2BEr7R7LTKH5CTfqeaTxqq%2FV%2BwJjEpSbjkJ1uASakzPWf58MW%2FNKNiHDuFedG3V0lympTSrwhIYgtWnxY6y7c%2Bv%2FwNfADtxfwDlsU54IPCqJN4npIytfXkI5mW3PM0fYXKwpIlQUxOJHhFp7zapKy4DNFX68Rf8uln8bqn5MOSeksMGOqUBWZTy47bX3FmGKITMT5YzboKG5RuzQ6EVs4tGEygHzH5Jyi3lmtFQpXdg9VBPqKbS7A2ktCSY5qnUke1vDhZvE5DVQQnRIBhg8TmzCcgx22v7rXhyqwR0XykjTC%2Bfp2ppEiUOtsNhvEEbmhe7asuxl%2Fp6%2Bc9oJx2x%2FGSSp7JR5Qrzihw61HTK75PgW7%2FSBfPZvkmZ%2BItJxyEb96HxWVZ7CGwIPHTe&X-Amz-Signature=d37a2aaa82cc977677b00c9ef0740ff7a1935fddbf4510324d61c58a35c19bde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
