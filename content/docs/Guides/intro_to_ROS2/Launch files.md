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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEO65ECR%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDlAbUmsDMu7P0hMZURVoGkpn%2B7Ywm%2FNogwfSKnvL%2FAkAIhAJeJcbtxct3clYD5OIAS3Sfs24IbTyc2M3QllWJKy36GKv8DCDUQABoMNjM3NDIzMTgzODA1Igw0DCH5waGss8BUvlYq3AOpMUDFA%2BuBhOlCfICdUleF400O6%2ByQf0edvWlVvzlfOq9bNI5WvH%2Fhrf%2FBxiYS0GCHP0v79%2BaUWPc4IrOSS7oWtQsPMVY3F%2Bb%2Fd6Usra%2FDK4qkiXNkY0Vn5E%2Bz8J9%2FXzCEJkpVS%2BOd%2FX6McayUKCtslEp1OA5oJlpeskjlDIjCj%2Fisouw0PIJS%2FINuIPVzxFTr49oJy%2FFgaHe5LPTmnxbf5jLPqIk0c%2BFk556QAZEofqwSHBB%2F%2FmpMG2iu5FmeXtt2ibg58xE9c8YaTdR8FMdw2l50y52lYHwqDTAimM3mTjF9TFHJpRhtXiu2IqmJLDtFt%2FLyAQWv10KlDECh8%2FN6A8%2BiPit9eJYih8SHiqf0w%2BBgSPo5nubhNz5vT9iSxXquBYd5dxvhFYK017RO9Pz6q0jReotlkzAfQmlN%2B48J64jS0CTLeugjoVlonDxbDH7Dro0RiiafmXNmMcmpA7UpzkIW9lbeJFeMTVFydOwt8vDO1h5ewoG81WNR8W4WbL3m0YXaEQcvj0jR29eGYi9sA0Dzjr5jApTfRnwZ5b9XtquBxWWH2VMYzfSmMSPuumVUMWmju2FIwbLxJszME7ObclwiplSv4%2BrNiY7OzKCZPyGl3yfQx6fWnuqUFjDB1YLCBjqkAXcErMWikl5EIzhbxt9ktMuluPWEcAN8m6zU1l5D%2BImzsPrFlAvW7hVyRF71jpCo9LoE7m3Hu4z13QXcQZbzCKLzLlJwbuxggpuPl%2Fjjv1SyX1Cxq7QLy4AhybVNq8QPFxZbhBKYxUwTtgBJ%2FOnsCD8CP9UxY3u8R%2Fw3%2Bn1bNnCOWfSrtt4VcLz10LxcINquZiY71QPpo9qu9EoImsF3os9J36Zc&X-Amz-Signature=bc78f9fad688fade93ff798c74daac1a91c29d0cea74b40542e821a24d295e9c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEO65ECR%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDlAbUmsDMu7P0hMZURVoGkpn%2B7Ywm%2FNogwfSKnvL%2FAkAIhAJeJcbtxct3clYD5OIAS3Sfs24IbTyc2M3QllWJKy36GKv8DCDUQABoMNjM3NDIzMTgzODA1Igw0DCH5waGss8BUvlYq3AOpMUDFA%2BuBhOlCfICdUleF400O6%2ByQf0edvWlVvzlfOq9bNI5WvH%2Fhrf%2FBxiYS0GCHP0v79%2BaUWPc4IrOSS7oWtQsPMVY3F%2Bb%2Fd6Usra%2FDK4qkiXNkY0Vn5E%2Bz8J9%2FXzCEJkpVS%2BOd%2FX6McayUKCtslEp1OA5oJlpeskjlDIjCj%2Fisouw0PIJS%2FINuIPVzxFTr49oJy%2FFgaHe5LPTmnxbf5jLPqIk0c%2BFk556QAZEofqwSHBB%2F%2FmpMG2iu5FmeXtt2ibg58xE9c8YaTdR8FMdw2l50y52lYHwqDTAimM3mTjF9TFHJpRhtXiu2IqmJLDtFt%2FLyAQWv10KlDECh8%2FN6A8%2BiPit9eJYih8SHiqf0w%2BBgSPo5nubhNz5vT9iSxXquBYd5dxvhFYK017RO9Pz6q0jReotlkzAfQmlN%2B48J64jS0CTLeugjoVlonDxbDH7Dro0RiiafmXNmMcmpA7UpzkIW9lbeJFeMTVFydOwt8vDO1h5ewoG81WNR8W4WbL3m0YXaEQcvj0jR29eGYi9sA0Dzjr5jApTfRnwZ5b9XtquBxWWH2VMYzfSmMSPuumVUMWmju2FIwbLxJszME7ObclwiplSv4%2BrNiY7OzKCZPyGl3yfQx6fWnuqUFjDB1YLCBjqkAXcErMWikl5EIzhbxt9ktMuluPWEcAN8m6zU1l5D%2BImzsPrFlAvW7hVyRF71jpCo9LoE7m3Hu4z13QXcQZbzCKLzLlJwbuxggpuPl%2Fjjv1SyX1Cxq7QLy4AhybVNq8QPFxZbhBKYxUwTtgBJ%2FOnsCD8CP9UxY3u8R%2Fw3%2Bn1bNnCOWfSrtt4VcLz10LxcINquZiY71QPpo9qu9EoImsF3os9J36Zc&X-Amz-Signature=d86318f23002ac3527500dd3f01e5a9981aa38bfb27dde6a8a25eccabd6ec885&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEO65ECR%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDlAbUmsDMu7P0hMZURVoGkpn%2B7Ywm%2FNogwfSKnvL%2FAkAIhAJeJcbtxct3clYD5OIAS3Sfs24IbTyc2M3QllWJKy36GKv8DCDUQABoMNjM3NDIzMTgzODA1Igw0DCH5waGss8BUvlYq3AOpMUDFA%2BuBhOlCfICdUleF400O6%2ByQf0edvWlVvzlfOq9bNI5WvH%2Fhrf%2FBxiYS0GCHP0v79%2BaUWPc4IrOSS7oWtQsPMVY3F%2Bb%2Fd6Usra%2FDK4qkiXNkY0Vn5E%2Bz8J9%2FXzCEJkpVS%2BOd%2FX6McayUKCtslEp1OA5oJlpeskjlDIjCj%2Fisouw0PIJS%2FINuIPVzxFTr49oJy%2FFgaHe5LPTmnxbf5jLPqIk0c%2BFk556QAZEofqwSHBB%2F%2FmpMG2iu5FmeXtt2ibg58xE9c8YaTdR8FMdw2l50y52lYHwqDTAimM3mTjF9TFHJpRhtXiu2IqmJLDtFt%2FLyAQWv10KlDECh8%2FN6A8%2BiPit9eJYih8SHiqf0w%2BBgSPo5nubhNz5vT9iSxXquBYd5dxvhFYK017RO9Pz6q0jReotlkzAfQmlN%2B48J64jS0CTLeugjoVlonDxbDH7Dro0RiiafmXNmMcmpA7UpzkIW9lbeJFeMTVFydOwt8vDO1h5ewoG81WNR8W4WbL3m0YXaEQcvj0jR29eGYi9sA0Dzjr5jApTfRnwZ5b9XtquBxWWH2VMYzfSmMSPuumVUMWmju2FIwbLxJszME7ObclwiplSv4%2BrNiY7OzKCZPyGl3yfQx6fWnuqUFjDB1YLCBjqkAXcErMWikl5EIzhbxt9ktMuluPWEcAN8m6zU1l5D%2BImzsPrFlAvW7hVyRF71jpCo9LoE7m3Hu4z13QXcQZbzCKLzLlJwbuxggpuPl%2Fjjv1SyX1Cxq7QLy4AhybVNq8QPFxZbhBKYxUwTtgBJ%2FOnsCD8CP9UxY3u8R%2Fw3%2Bn1bNnCOWfSrtt4VcLz10LxcINquZiY71QPpo9qu9EoImsF3os9J36Zc&X-Amz-Signature=2aba81a47dce3515e560914ef61d9094e5e8c6c266fa8643ce046c038829650e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
