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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKT3ECLH%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T150355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQD7jL4a%2FAkUPe4LCqZos%2FoG1bqx2mpbxjwM597JrMYSYwIgINbSGSmHh0LdkOxS%2FKNjRu19KMkOg3GHN1KrcTH%2Bd7QqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP71Bja2SUjuCKgpVircAyGrjMY6XNOd5h95uF5g6tCX47H4lZQ0fhhdSVEMR%2BrUreKuKftad4MTu2sQPHz%2FZhXMooB9kFvuegzKC3TaA%2FUqIsn9AoVorjd30alUyknjz%2BF%2FAnClpL2rOHJv4VBNIaEXocoCZOnRFx7uUIJ%2F%2FyCk6Y%2BGn3hkdEXDPm7l73sqfAhlY6g%2B1a2CWcVvjYozSVSU64wsNFKXNbfzm7eUYeOhU1tKl1223%2FLS77qnKKxjgyxVwwYySlZdEveqIePFga3W5fUJwUou3NanE1V0%2B%2BeDbK61Kyt2wW17xQJ%2Fw14RzPrpdn%2FfCijES1tYYEvZnj1aANOPnWxSEk8KJRgnEVWuZrehcl4D4orteAPqREhoNthioO3Ky6VsbRERYbyh8U28FzC1jMDvNADiXaAsqrTwlAQLV1njBJTsPcmqoh9hnnjMrH3Qv1M0g1C%2FCgK10tNcYIZhg6CqY8aMLq8o74X9h2REXfq85qj7G1bJmNVRJcKutVktoACNySePfbEXHyoHNe5KH8%2FfmQnmlX3TvF3F%2FfmfCgjRGUAfoxVDtNCXHrwp%2BXDfnkR3N%2BQFDAA0CRwLErEaRh4NPZf7gVlaQLloMwrLDDCYZZAEI8k3Pi7b%2FMncpGcXfwiJPIzRMIf3%2Br4GOqUBSf3a8p63jD3TonKo396lRDHmhwFLr8JzuUvD90xEMI6%2BnWPhkgW6cqRwj4lj3z0sINEjbE32SERc5VEEQ%2BdF76dE3hYpA7Qa%2BeaoIYBQyDDIVSUAJ%2BD0QTSVfxG%2BfVoEIlYlE54tzxrgDMLuK4QJTtdxGT8HJSRWPJK5DBy5pBGCzM6SASFRqqqvNNZq8ejIMCs6w82o%2BOrV2baIAwoA9JAzXuAm&X-Amz-Signature=1a0484dc00a30f048cebb59d59df369ec091586b6e4f270a33bddae6e248275a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKT3ECLH%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T150355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQD7jL4a%2FAkUPe4LCqZos%2FoG1bqx2mpbxjwM597JrMYSYwIgINbSGSmHh0LdkOxS%2FKNjRu19KMkOg3GHN1KrcTH%2Bd7QqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP71Bja2SUjuCKgpVircAyGrjMY6XNOd5h95uF5g6tCX47H4lZQ0fhhdSVEMR%2BrUreKuKftad4MTu2sQPHz%2FZhXMooB9kFvuegzKC3TaA%2FUqIsn9AoVorjd30alUyknjz%2BF%2FAnClpL2rOHJv4VBNIaEXocoCZOnRFx7uUIJ%2F%2FyCk6Y%2BGn3hkdEXDPm7l73sqfAhlY6g%2B1a2CWcVvjYozSVSU64wsNFKXNbfzm7eUYeOhU1tKl1223%2FLS77qnKKxjgyxVwwYySlZdEveqIePFga3W5fUJwUou3NanE1V0%2B%2BeDbK61Kyt2wW17xQJ%2Fw14RzPrpdn%2FfCijES1tYYEvZnj1aANOPnWxSEk8KJRgnEVWuZrehcl4D4orteAPqREhoNthioO3Ky6VsbRERYbyh8U28FzC1jMDvNADiXaAsqrTwlAQLV1njBJTsPcmqoh9hnnjMrH3Qv1M0g1C%2FCgK10tNcYIZhg6CqY8aMLq8o74X9h2REXfq85qj7G1bJmNVRJcKutVktoACNySePfbEXHyoHNe5KH8%2FfmQnmlX3TvF3F%2FfmfCgjRGUAfoxVDtNCXHrwp%2BXDfnkR3N%2BQFDAA0CRwLErEaRh4NPZf7gVlaQLloMwrLDDCYZZAEI8k3Pi7b%2FMncpGcXfwiJPIzRMIf3%2Br4GOqUBSf3a8p63jD3TonKo396lRDHmhwFLr8JzuUvD90xEMI6%2BnWPhkgW6cqRwj4lj3z0sINEjbE32SERc5VEEQ%2BdF76dE3hYpA7Qa%2BeaoIYBQyDDIVSUAJ%2BD0QTSVfxG%2BfVoEIlYlE54tzxrgDMLuK4QJTtdxGT8HJSRWPJK5DBy5pBGCzM6SASFRqqqvNNZq8ejIMCs6w82o%2BOrV2baIAwoA9JAzXuAm&X-Amz-Signature=7dce7c1e93ef12d094ff8be5be57187aae2e7b63b342d381bb5384b1ca01fe59&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKT3ECLH%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T150355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQD7jL4a%2FAkUPe4LCqZos%2FoG1bqx2mpbxjwM597JrMYSYwIgINbSGSmHh0LdkOxS%2FKNjRu19KMkOg3GHN1KrcTH%2Bd7QqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP71Bja2SUjuCKgpVircAyGrjMY6XNOd5h95uF5g6tCX47H4lZQ0fhhdSVEMR%2BrUreKuKftad4MTu2sQPHz%2FZhXMooB9kFvuegzKC3TaA%2FUqIsn9AoVorjd30alUyknjz%2BF%2FAnClpL2rOHJv4VBNIaEXocoCZOnRFx7uUIJ%2F%2FyCk6Y%2BGn3hkdEXDPm7l73sqfAhlY6g%2B1a2CWcVvjYozSVSU64wsNFKXNbfzm7eUYeOhU1tKl1223%2FLS77qnKKxjgyxVwwYySlZdEveqIePFga3W5fUJwUou3NanE1V0%2B%2BeDbK61Kyt2wW17xQJ%2Fw14RzPrpdn%2FfCijES1tYYEvZnj1aANOPnWxSEk8KJRgnEVWuZrehcl4D4orteAPqREhoNthioO3Ky6VsbRERYbyh8U28FzC1jMDvNADiXaAsqrTwlAQLV1njBJTsPcmqoh9hnnjMrH3Qv1M0g1C%2FCgK10tNcYIZhg6CqY8aMLq8o74X9h2REXfq85qj7G1bJmNVRJcKutVktoACNySePfbEXHyoHNe5KH8%2FfmQnmlX3TvF3F%2FfmfCgjRGUAfoxVDtNCXHrwp%2BXDfnkR3N%2BQFDAA0CRwLErEaRh4NPZf7gVlaQLloMwrLDDCYZZAEI8k3Pi7b%2FMncpGcXfwiJPIzRMIf3%2Br4GOqUBSf3a8p63jD3TonKo396lRDHmhwFLr8JzuUvD90xEMI6%2BnWPhkgW6cqRwj4lj3z0sINEjbE32SERc5VEEQ%2BdF76dE3hYpA7Qa%2BeaoIYBQyDDIVSUAJ%2BD0QTSVfxG%2BfVoEIlYlE54tzxrgDMLuK4QJTtdxGT8HJSRWPJK5DBy5pBGCzM6SASFRqqqvNNZq8ejIMCs6w82o%2BOrV2baIAwoA9JAzXuAm&X-Amz-Signature=c1eae2d8af9bb93a07c2f2f055cd180421c5e40f8930c5e8d657bdf3a5ee6016&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
