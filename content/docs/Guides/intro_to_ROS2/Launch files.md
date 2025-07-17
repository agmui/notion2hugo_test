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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5EHQDXP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDBJksZTplwnMsjlStvcD2XUhlew11K%2FlJ%2F1hlRm325HgIhANFYKazCDsA7r2twcjrRJ5Gg9MoJuYCMAi0fHmoquwuyKv8DCHMQABoMNjM3NDIzMTgzODA1IgyDlAW13Jy52cHd7Ioq3APoeskacsdwtZ76VkzDe9rPeg7xXG2GX9oPgVXQixsteGa3ANu59fduesb8NJKvRwll4P1Wma2ZZOOLwnrXbhemxT3vglDQD6aZwi1%2B7qUAC3g%2Fcfke%2FL9cjXuNQ8xi3lPaRsTHzshQXX3BEk8MayQVsNdzFmBw%2F3WqRDboruNvSC96QqcN4v9SY4XthEOIjyVH898q5t7NGrwBGexqODfWaUeongUD1Wd0QWFOYMKA4JppYRHu%2B%2FVPxkpg4KnJzLrNM6qIZpw82SF%2F9%2BbdxLLiQR8BE%2FeAFmMr%2FExmQ7Al1AqKYgt4gUBB2CDvHTwqz6J646Pk88UsfvJ28aZi%2BAtZmP9AAgjAQ06dDWdHRLEvDFS3g1V2NbsCfhjzCliu4AU5hBdiyu19VWJhbXQFkIsFLsu8dTElaFUTfqQRjzcHPFOwSikA4iq%2FOF9fQrVim1KLDRPTtDeUagaeyueFH4ki%2BjXjHXNvQhpJVFm65m6Ssxmvwv9xH2rtaEZPz9jkn%2FqzIOF1XK3Ijf6JbQ9JJrUuPWFIKQOJ8evSNIFKIjlJttKrNWFpwczW%2BxZm51k60pCz3ewvhI4%2FV6Y3d%2Bl1dY71Lmir1ekKlS%2BCflZbDSTjFIFK6VnZUXk7CLRoZDDJkuPDBjqkAdyzDyK6VtpfISKZH3z%2BT4jfeh%2BnwrURXc82qvsmUhhp94iDc%2FUWLk%2FoCAi5cX4UjOQnNvXMmTi1aD%2B9q5ih1Ui7P%2FxiRbwz4zq6r4EwQdySFaRkOz5rfWA2sbr3x52%2FbDgkuOGmJTskkqnLf3zDmxTA0G%2FROn29slSr6lRGQqtOEFnmzXzg9ucbObXAQTRiKebsY7fFz6Jlfnx88GXkxJW4eQ6n&X-Amz-Signature=0fc74e1f15708c30db11a1d908e08d9dae35e1754f5500462b48ba2761b0cb1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5EHQDXP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDBJksZTplwnMsjlStvcD2XUhlew11K%2FlJ%2F1hlRm325HgIhANFYKazCDsA7r2twcjrRJ5Gg9MoJuYCMAi0fHmoquwuyKv8DCHMQABoMNjM3NDIzMTgzODA1IgyDlAW13Jy52cHd7Ioq3APoeskacsdwtZ76VkzDe9rPeg7xXG2GX9oPgVXQixsteGa3ANu59fduesb8NJKvRwll4P1Wma2ZZOOLwnrXbhemxT3vglDQD6aZwi1%2B7qUAC3g%2Fcfke%2FL9cjXuNQ8xi3lPaRsTHzshQXX3BEk8MayQVsNdzFmBw%2F3WqRDboruNvSC96QqcN4v9SY4XthEOIjyVH898q5t7NGrwBGexqODfWaUeongUD1Wd0QWFOYMKA4JppYRHu%2B%2FVPxkpg4KnJzLrNM6qIZpw82SF%2F9%2BbdxLLiQR8BE%2FeAFmMr%2FExmQ7Al1AqKYgt4gUBB2CDvHTwqz6J646Pk88UsfvJ28aZi%2BAtZmP9AAgjAQ06dDWdHRLEvDFS3g1V2NbsCfhjzCliu4AU5hBdiyu19VWJhbXQFkIsFLsu8dTElaFUTfqQRjzcHPFOwSikA4iq%2FOF9fQrVim1KLDRPTtDeUagaeyueFH4ki%2BjXjHXNvQhpJVFm65m6Ssxmvwv9xH2rtaEZPz9jkn%2FqzIOF1XK3Ijf6JbQ9JJrUuPWFIKQOJ8evSNIFKIjlJttKrNWFpwczW%2BxZm51k60pCz3ewvhI4%2FV6Y3d%2Bl1dY71Lmir1ekKlS%2BCflZbDSTjFIFK6VnZUXk7CLRoZDDJkuPDBjqkAdyzDyK6VtpfISKZH3z%2BT4jfeh%2BnwrURXc82qvsmUhhp94iDc%2FUWLk%2FoCAi5cX4UjOQnNvXMmTi1aD%2B9q5ih1Ui7P%2FxiRbwz4zq6r4EwQdySFaRkOz5rfWA2sbr3x52%2FbDgkuOGmJTskkqnLf3zDmxTA0G%2FROn29slSr6lRGQqtOEFnmzXzg9ucbObXAQTRiKebsY7fFz6Jlfnx88GXkxJW4eQ6n&X-Amz-Signature=b7f8331a9f4c0991e3cf9f7b13159e9de470d021ef3c3f6257c7d0a067fbe660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5EHQDXP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDBJksZTplwnMsjlStvcD2XUhlew11K%2FlJ%2F1hlRm325HgIhANFYKazCDsA7r2twcjrRJ5Gg9MoJuYCMAi0fHmoquwuyKv8DCHMQABoMNjM3NDIzMTgzODA1IgyDlAW13Jy52cHd7Ioq3APoeskacsdwtZ76VkzDe9rPeg7xXG2GX9oPgVXQixsteGa3ANu59fduesb8NJKvRwll4P1Wma2ZZOOLwnrXbhemxT3vglDQD6aZwi1%2B7qUAC3g%2Fcfke%2FL9cjXuNQ8xi3lPaRsTHzshQXX3BEk8MayQVsNdzFmBw%2F3WqRDboruNvSC96QqcN4v9SY4XthEOIjyVH898q5t7NGrwBGexqODfWaUeongUD1Wd0QWFOYMKA4JppYRHu%2B%2FVPxkpg4KnJzLrNM6qIZpw82SF%2F9%2BbdxLLiQR8BE%2FeAFmMr%2FExmQ7Al1AqKYgt4gUBB2CDvHTwqz6J646Pk88UsfvJ28aZi%2BAtZmP9AAgjAQ06dDWdHRLEvDFS3g1V2NbsCfhjzCliu4AU5hBdiyu19VWJhbXQFkIsFLsu8dTElaFUTfqQRjzcHPFOwSikA4iq%2FOF9fQrVim1KLDRPTtDeUagaeyueFH4ki%2BjXjHXNvQhpJVFm65m6Ssxmvwv9xH2rtaEZPz9jkn%2FqzIOF1XK3Ijf6JbQ9JJrUuPWFIKQOJ8evSNIFKIjlJttKrNWFpwczW%2BxZm51k60pCz3ewvhI4%2FV6Y3d%2Bl1dY71Lmir1ekKlS%2BCflZbDSTjFIFK6VnZUXk7CLRoZDDJkuPDBjqkAdyzDyK6VtpfISKZH3z%2BT4jfeh%2BnwrURXc82qvsmUhhp94iDc%2FUWLk%2FoCAi5cX4UjOQnNvXMmTi1aD%2B9q5ih1Ui7P%2FxiRbwz4zq6r4EwQdySFaRkOz5rfWA2sbr3x52%2FbDgkuOGmJTskkqnLf3zDmxTA0G%2FROn29slSr6lRGQqtOEFnmzXzg9ucbObXAQTRiKebsY7fFz6Jlfnx88GXkxJW4eQ6n&X-Amz-Signature=b813cd01b011d533446d37d646fd379d8487cdc59cd92d920809627e2294ee37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
