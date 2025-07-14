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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHVMWLW5%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIA%2BnYVMKv7Xq4IRVxkH4jEWoh5noSN4M4hiWiuiwMhFpAiEAnVAeNvErax5uGbmeB89D31gbbUtV%2BQUJ6UXNaZ3Gsxcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDOGd6rW6BL0a2jBLTSrcA0o6Wqfo0c43QuUt2ZR9%2FCumpMRWOv7v96tf7LE%2BMxK3i3PH0EmqVZ7GmxQ4NWoNmKqWwoMZSKS1tvgAvvdhLqzV4YFeFYgyB6nNgw%2BCcF9LhN6g71CSw3yNw%2BYmkcU5XH7g6THw%2FZIT8dY29K5LHNS6hlsm%2B5HT4N%2BJTtdJi3pKrw12%2FcGMHeLZpTxb4D7EJ3pSkTXU%2Bpz2kxP8nEdL4TrTuA5MUbHTMtIwkDIxs28uKeyaCsSvFp%2BrUCwl23wi3T%2FzEyDss%2FtyUz5P239EGPrBvdakUGs4vipz1Iyk5qkO47wF0NRkd56bSr1kthK5HDkkY7b43sJC7Z6Xe4fIVnhmOyZlYyeC0oYRAvskXpW3KdHTOoyjTsptwNpe1tS5VPgqIlccqHEEx%2BTiqs1F1GQVqVDlK%2F%2FxO6HkuWAd8AjgVQlC3c0evlL6wItEsyFYdMDqC%2F2%2BoG2OCK0zESIcWKIq7s23GtWnmBuyyCtn%2B4hbabJo88bCY3Gwl0KsqVhrkTxwjQ5qMoIeVjLIc3E7r%2BcbsNraqQ8X1ghynikBZBXv9H0pJVqm3VXN%2BQNHeLxj0p5HkfxFdSRgIvjNFPz97Mq2xsfXQgF%2FYVn1MkrpT6nGcpwEDhH%2BiexddnbwMPyw0sMGOqUBYk3SgUcKwMgFLoPgE2v54r%2Fb8QKNPagrbCftjxInKhtzPe3k0x5%2BDnETfABJd1MUOivJEpLqoEHG4wbEWXU3wsFY7dUHhYxO7X0BjJtAx5AK74t35Ex2T%2B0BSU9cKpXoRcMbv%2FiH6tYCC%2BqsMX4eMCE6dSy%2F1a0zXGp2Ywv0o61LooURMtwClQZVu3cd5U69ZAK%2F6e%2F2NnSV2%2BwXhqULtUwY5%2BBp&X-Amz-Signature=be31e83e0e0bcebf63dc63dcaef69b3f85f3468837b18196e085d483046dc75c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHVMWLW5%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIA%2BnYVMKv7Xq4IRVxkH4jEWoh5noSN4M4hiWiuiwMhFpAiEAnVAeNvErax5uGbmeB89D31gbbUtV%2BQUJ6UXNaZ3Gsxcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDOGd6rW6BL0a2jBLTSrcA0o6Wqfo0c43QuUt2ZR9%2FCumpMRWOv7v96tf7LE%2BMxK3i3PH0EmqVZ7GmxQ4NWoNmKqWwoMZSKS1tvgAvvdhLqzV4YFeFYgyB6nNgw%2BCcF9LhN6g71CSw3yNw%2BYmkcU5XH7g6THw%2FZIT8dY29K5LHNS6hlsm%2B5HT4N%2BJTtdJi3pKrw12%2FcGMHeLZpTxb4D7EJ3pSkTXU%2Bpz2kxP8nEdL4TrTuA5MUbHTMtIwkDIxs28uKeyaCsSvFp%2BrUCwl23wi3T%2FzEyDss%2FtyUz5P239EGPrBvdakUGs4vipz1Iyk5qkO47wF0NRkd56bSr1kthK5HDkkY7b43sJC7Z6Xe4fIVnhmOyZlYyeC0oYRAvskXpW3KdHTOoyjTsptwNpe1tS5VPgqIlccqHEEx%2BTiqs1F1GQVqVDlK%2F%2FxO6HkuWAd8AjgVQlC3c0evlL6wItEsyFYdMDqC%2F2%2BoG2OCK0zESIcWKIq7s23GtWnmBuyyCtn%2B4hbabJo88bCY3Gwl0KsqVhrkTxwjQ5qMoIeVjLIc3E7r%2BcbsNraqQ8X1ghynikBZBXv9H0pJVqm3VXN%2BQNHeLxj0p5HkfxFdSRgIvjNFPz97Mq2xsfXQgF%2FYVn1MkrpT6nGcpwEDhH%2BiexddnbwMPyw0sMGOqUBYk3SgUcKwMgFLoPgE2v54r%2Fb8QKNPagrbCftjxInKhtzPe3k0x5%2BDnETfABJd1MUOivJEpLqoEHG4wbEWXU3wsFY7dUHhYxO7X0BjJtAx5AK74t35Ex2T%2B0BSU9cKpXoRcMbv%2FiH6tYCC%2BqsMX4eMCE6dSy%2F1a0zXGp2Ywv0o61LooURMtwClQZVu3cd5U69ZAK%2F6e%2F2NnSV2%2BwXhqULtUwY5%2BBp&X-Amz-Signature=e1a167079c656c00abaf4bbe001f3e69486745563d12c1e25ca61f71f8094ade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHVMWLW5%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIA%2BnYVMKv7Xq4IRVxkH4jEWoh5noSN4M4hiWiuiwMhFpAiEAnVAeNvErax5uGbmeB89D31gbbUtV%2BQUJ6UXNaZ3Gsxcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDOGd6rW6BL0a2jBLTSrcA0o6Wqfo0c43QuUt2ZR9%2FCumpMRWOv7v96tf7LE%2BMxK3i3PH0EmqVZ7GmxQ4NWoNmKqWwoMZSKS1tvgAvvdhLqzV4YFeFYgyB6nNgw%2BCcF9LhN6g71CSw3yNw%2BYmkcU5XH7g6THw%2FZIT8dY29K5LHNS6hlsm%2B5HT4N%2BJTtdJi3pKrw12%2FcGMHeLZpTxb4D7EJ3pSkTXU%2Bpz2kxP8nEdL4TrTuA5MUbHTMtIwkDIxs28uKeyaCsSvFp%2BrUCwl23wi3T%2FzEyDss%2FtyUz5P239EGPrBvdakUGs4vipz1Iyk5qkO47wF0NRkd56bSr1kthK5HDkkY7b43sJC7Z6Xe4fIVnhmOyZlYyeC0oYRAvskXpW3KdHTOoyjTsptwNpe1tS5VPgqIlccqHEEx%2BTiqs1F1GQVqVDlK%2F%2FxO6HkuWAd8AjgVQlC3c0evlL6wItEsyFYdMDqC%2F2%2BoG2OCK0zESIcWKIq7s23GtWnmBuyyCtn%2B4hbabJo88bCY3Gwl0KsqVhrkTxwjQ5qMoIeVjLIc3E7r%2BcbsNraqQ8X1ghynikBZBXv9H0pJVqm3VXN%2BQNHeLxj0p5HkfxFdSRgIvjNFPz97Mq2xsfXQgF%2FYVn1MkrpT6nGcpwEDhH%2BiexddnbwMPyw0sMGOqUBYk3SgUcKwMgFLoPgE2v54r%2Fb8QKNPagrbCftjxInKhtzPe3k0x5%2BDnETfABJd1MUOivJEpLqoEHG4wbEWXU3wsFY7dUHhYxO7X0BjJtAx5AK74t35Ex2T%2B0BSU9cKpXoRcMbv%2FiH6tYCC%2BqsMX4eMCE6dSy%2F1a0zXGp2Ywv0o61LooURMtwClQZVu3cd5U69ZAK%2F6e%2F2NnSV2%2BwXhqULtUwY5%2BBp&X-Amz-Signature=9d4603fe5bb3d46a3e35f507330bca84692cf0a4a5a8fbb507a92c38fdf6d8ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
