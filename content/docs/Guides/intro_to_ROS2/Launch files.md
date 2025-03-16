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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR7YU3AB%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCawZwTiw%2FLURYK%2BBmFOPrUm1OMZrNpTcqQnxD%2FA0yYeAIgInMvkNTvuGxmIdExf8RMRnGftWYNSNM3044t4XxeQ7Uq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDKvNyiXMbg87GNyu8CrcA4qvpootPyiUxx%2B6abesYZCWwc0bi6zjFzl%2B2rvBcrk9F6JKi3zIe%2FAunmbgTw%2F8WwlTZBLHosvQZchrKDVFc6YT4UeWtAWQRWSmvT0OfLcnP%2BXJKC8JlMfU%2ByFfhGy80h%2B2o6Z%2FqJO%2FVmYVlXYGj3fmUn4Zi6b1edoWcG8eJdLSM3zU2p4weNL77A1%2FBSulZJvVgKMU3senR%2BgUDUIk8i%2Bqs1AD7qgdRfJ1R4yOJSi%2BFGpyltPKTNCQq7p%2BBTlPl7Nmion3yDqZhiKEsBcPRVngUcKVKOLLeyoTC6R6oK2U2T9%2FfIBe0begG%2FViCjjgYeiw0pwRM2xk3Ou%2BiPe7SVy86jyQsMH8EhgyIvHbhFYZK8j7PARFmzFQD%2FUuUSYDf2LlOKDIDS95VjRsuCKVaZdGEEhkTQu6A%2Bp6oykTn5PlAFyTu7AQONZgs%2B1mrpZIYS8cLj8W7c352ViLizH8q0S2OgggtuMdWovxassdoDb8xYzBmdjq33zcmBY1Ri4%2BwSXjzkXnF7yD4kdF%2FRJGRYNc5%2FfJZVOH3QaVTloWC05m%2FI76806qoCD3EwTMldMEFULGjvFYFSwP1AR8spXmm9cWvWjnVBuwLwsVNdRfo4rOAshTdpe%2FbPlllmm%2BMPqT2r4GOqUBGF%2FAoJU0F%2BAdqG%2BvGqr6p6S%2FnAa1ICsHneOyuQAtdQiqn3%2BmBtxyGvSlvi6O5BN%2FZ8C9DNfAUYFwZX38NHD1SLSDwKB%2Bzl5%2Fp23Z828UzK23srpNkqPfzbjrFn1wefXOCpCcxifxjoYUt8oxlOpKXo7HFdFSFKULYX02BdjuraniilPONX3YgAMNQ1EbDg5N994u5YFUq9GO%2FiFNojbdpk9eZSX%2F&X-Amz-Signature=9747da8a677bac6566b8fd4401361174fb35ef509ebccfb18652384690039ddb&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR7YU3AB%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCawZwTiw%2FLURYK%2BBmFOPrUm1OMZrNpTcqQnxD%2FA0yYeAIgInMvkNTvuGxmIdExf8RMRnGftWYNSNM3044t4XxeQ7Uq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDKvNyiXMbg87GNyu8CrcA4qvpootPyiUxx%2B6abesYZCWwc0bi6zjFzl%2B2rvBcrk9F6JKi3zIe%2FAunmbgTw%2F8WwlTZBLHosvQZchrKDVFc6YT4UeWtAWQRWSmvT0OfLcnP%2BXJKC8JlMfU%2ByFfhGy80h%2B2o6Z%2FqJO%2FVmYVlXYGj3fmUn4Zi6b1edoWcG8eJdLSM3zU2p4weNL77A1%2FBSulZJvVgKMU3senR%2BgUDUIk8i%2Bqs1AD7qgdRfJ1R4yOJSi%2BFGpyltPKTNCQq7p%2BBTlPl7Nmion3yDqZhiKEsBcPRVngUcKVKOLLeyoTC6R6oK2U2T9%2FfIBe0begG%2FViCjjgYeiw0pwRM2xk3Ou%2BiPe7SVy86jyQsMH8EhgyIvHbhFYZK8j7PARFmzFQD%2FUuUSYDf2LlOKDIDS95VjRsuCKVaZdGEEhkTQu6A%2Bp6oykTn5PlAFyTu7AQONZgs%2B1mrpZIYS8cLj8W7c352ViLizH8q0S2OgggtuMdWovxassdoDb8xYzBmdjq33zcmBY1Ri4%2BwSXjzkXnF7yD4kdF%2FRJGRYNc5%2FfJZVOH3QaVTloWC05m%2FI76806qoCD3EwTMldMEFULGjvFYFSwP1AR8spXmm9cWvWjnVBuwLwsVNdRfo4rOAshTdpe%2FbPlllmm%2BMPqT2r4GOqUBGF%2FAoJU0F%2BAdqG%2BvGqr6p6S%2FnAa1ICsHneOyuQAtdQiqn3%2BmBtxyGvSlvi6O5BN%2FZ8C9DNfAUYFwZX38NHD1SLSDwKB%2Bzl5%2Fp23Z828UzK23srpNkqPfzbjrFn1wefXOCpCcxifxjoYUt8oxlOpKXo7HFdFSFKULYX02BdjuraniilPONX3YgAMNQ1EbDg5N994u5YFUq9GO%2FiFNojbdpk9eZSX%2F&X-Amz-Signature=30bf2478f2d834ee67372f1a0388580074640a6a2a16c8f65f557d001a59325d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR7YU3AB%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCawZwTiw%2FLURYK%2BBmFOPrUm1OMZrNpTcqQnxD%2FA0yYeAIgInMvkNTvuGxmIdExf8RMRnGftWYNSNM3044t4XxeQ7Uq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDKvNyiXMbg87GNyu8CrcA4qvpootPyiUxx%2B6abesYZCWwc0bi6zjFzl%2B2rvBcrk9F6JKi3zIe%2FAunmbgTw%2F8WwlTZBLHosvQZchrKDVFc6YT4UeWtAWQRWSmvT0OfLcnP%2BXJKC8JlMfU%2ByFfhGy80h%2B2o6Z%2FqJO%2FVmYVlXYGj3fmUn4Zi6b1edoWcG8eJdLSM3zU2p4weNL77A1%2FBSulZJvVgKMU3senR%2BgUDUIk8i%2Bqs1AD7qgdRfJ1R4yOJSi%2BFGpyltPKTNCQq7p%2BBTlPl7Nmion3yDqZhiKEsBcPRVngUcKVKOLLeyoTC6R6oK2U2T9%2FfIBe0begG%2FViCjjgYeiw0pwRM2xk3Ou%2BiPe7SVy86jyQsMH8EhgyIvHbhFYZK8j7PARFmzFQD%2FUuUSYDf2LlOKDIDS95VjRsuCKVaZdGEEhkTQu6A%2Bp6oykTn5PlAFyTu7AQONZgs%2B1mrpZIYS8cLj8W7c352ViLizH8q0S2OgggtuMdWovxassdoDb8xYzBmdjq33zcmBY1Ri4%2BwSXjzkXnF7yD4kdF%2FRJGRYNc5%2FfJZVOH3QaVTloWC05m%2FI76806qoCD3EwTMldMEFULGjvFYFSwP1AR8spXmm9cWvWjnVBuwLwsVNdRfo4rOAshTdpe%2FbPlllmm%2BMPqT2r4GOqUBGF%2FAoJU0F%2BAdqG%2BvGqr6p6S%2FnAa1ICsHneOyuQAtdQiqn3%2BmBtxyGvSlvi6O5BN%2FZ8C9DNfAUYFwZX38NHD1SLSDwKB%2Bzl5%2Fp23Z828UzK23srpNkqPfzbjrFn1wefXOCpCcxifxjoYUt8oxlOpKXo7HFdFSFKULYX02BdjuraniilPONX3YgAMNQ1EbDg5N994u5YFUq9GO%2FiFNojbdpk9eZSX%2F&X-Amz-Signature=896303f4bc024dd027e18a3e3dfe366eb0e53cc27ae6bc9aac991b466b96b84e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
