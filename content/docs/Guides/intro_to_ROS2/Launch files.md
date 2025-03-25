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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWG2R3MN%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWmV6Ker1u0BJDQ1R8eJB3hM9ZmeiKc2IwU07PcEZIwwIhAM1emSsQN4DOaOXQwXpQaWhVYhY66TXpKFr7Cu6JG39XKv8DCBYQABoMNjM3NDIzMTgzODA1IgzKiM6lDZyPmZDAtxQq3APNVM9k2j%2BvG2MmSpyTVrIpLb8dYoq5wS%2BLH4M4wMpSpr1e1svEBN%2BoFFUcQ3nUizLNZgugwS3Q4IAdAm98H8ovUjqnSxuufs7Izpav8Y16CTJmjsC1%2FwFQKIgTC9RoKJHMdSo8B121yV1GFVvsO5xzZN%2BcNwUdXegWuVOW%2BEGx%2FE%2BhExXQ6NfYnoY29WnIaNLc6NA1ugmSCFGlZwFljOqDi2AhmfrAwLTmUFTEcq9WzvsoW5ih1SY5lPNc%2BWpsVBew1jHKIBVvDWz7iZjfZKB%2BmBgEx9bhSHYws7FaTYvLDHfeq5UtvFJXHUucxGbmtKBP2%2FbbybrOtuHGDMu3h1e9Pn9XC0ksyDgTwQe6G%2B0QO21DqT5ueXtDbojwwYle3hywlGFBW9n6hGBQiY0S%2FzYqO79RekoKkkVcxx3Pv%2BrzXPtFaAfSj3ENHp%2Fk%2Fh%2FYSEV5gY2O25LTvtAlolpOrQOdfNqHc7%2BUQW4uv6gYe0PJrUT4EyAQPxYlATONCfRCCG4UxZNOG60tBwJ8V8KGqUrF%2BehD0R5han6fFLVJ8BuMJf3nkdb5LEQHOwY%2Fihkp2s69usjoDvR%2B3iOF2TZT4Emu3k0NUZ5VnyDoOYG3qRpciSHkUovagcmhgCqHgzDzxYq%2FBjqkASXkdsOcg8RmBJDrNQK8sFBCjjILKRTe8iPfMDCe8nz3JB8FZtw7m27dhAFjdLCfu61au4PYgC%2F483%2BBPRWh0SXmRXrPMYWtKDKkT4yji4oNTIVpdR4OVW6%2B73NmLkhEYXxwSvQQDpbO7i1bWgBtZtHWQFyDZC5m%2B%2BJ5y2fR8N3G9B1ZXrTG7D4%2B0wCZE3icjqq1zhmpC7523%2BNRbv3ZHs8%2FOFR2&X-Amz-Signature=d2845fe7ec9f857b3b46bb5ce841326a643823e14f2b46f09b48e5ebcb485fd5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWG2R3MN%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWmV6Ker1u0BJDQ1R8eJB3hM9ZmeiKc2IwU07PcEZIwwIhAM1emSsQN4DOaOXQwXpQaWhVYhY66TXpKFr7Cu6JG39XKv8DCBYQABoMNjM3NDIzMTgzODA1IgzKiM6lDZyPmZDAtxQq3APNVM9k2j%2BvG2MmSpyTVrIpLb8dYoq5wS%2BLH4M4wMpSpr1e1svEBN%2BoFFUcQ3nUizLNZgugwS3Q4IAdAm98H8ovUjqnSxuufs7Izpav8Y16CTJmjsC1%2FwFQKIgTC9RoKJHMdSo8B121yV1GFVvsO5xzZN%2BcNwUdXegWuVOW%2BEGx%2FE%2BhExXQ6NfYnoY29WnIaNLc6NA1ugmSCFGlZwFljOqDi2AhmfrAwLTmUFTEcq9WzvsoW5ih1SY5lPNc%2BWpsVBew1jHKIBVvDWz7iZjfZKB%2BmBgEx9bhSHYws7FaTYvLDHfeq5UtvFJXHUucxGbmtKBP2%2FbbybrOtuHGDMu3h1e9Pn9XC0ksyDgTwQe6G%2B0QO21DqT5ueXtDbojwwYle3hywlGFBW9n6hGBQiY0S%2FzYqO79RekoKkkVcxx3Pv%2BrzXPtFaAfSj3ENHp%2Fk%2Fh%2FYSEV5gY2O25LTvtAlolpOrQOdfNqHc7%2BUQW4uv6gYe0PJrUT4EyAQPxYlATONCfRCCG4UxZNOG60tBwJ8V8KGqUrF%2BehD0R5han6fFLVJ8BuMJf3nkdb5LEQHOwY%2Fihkp2s69usjoDvR%2B3iOF2TZT4Emu3k0NUZ5VnyDoOYG3qRpciSHkUovagcmhgCqHgzDzxYq%2FBjqkASXkdsOcg8RmBJDrNQK8sFBCjjILKRTe8iPfMDCe8nz3JB8FZtw7m27dhAFjdLCfu61au4PYgC%2F483%2BBPRWh0SXmRXrPMYWtKDKkT4yji4oNTIVpdR4OVW6%2B73NmLkhEYXxwSvQQDpbO7i1bWgBtZtHWQFyDZC5m%2B%2BJ5y2fR8N3G9B1ZXrTG7D4%2B0wCZE3icjqq1zhmpC7523%2BNRbv3ZHs8%2FOFR2&X-Amz-Signature=75c8106eb163d785382a3817e9c8a608d927ea435da0fc645726d7ec9b750680&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWG2R3MN%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWmV6Ker1u0BJDQ1R8eJB3hM9ZmeiKc2IwU07PcEZIwwIhAM1emSsQN4DOaOXQwXpQaWhVYhY66TXpKFr7Cu6JG39XKv8DCBYQABoMNjM3NDIzMTgzODA1IgzKiM6lDZyPmZDAtxQq3APNVM9k2j%2BvG2MmSpyTVrIpLb8dYoq5wS%2BLH4M4wMpSpr1e1svEBN%2BoFFUcQ3nUizLNZgugwS3Q4IAdAm98H8ovUjqnSxuufs7Izpav8Y16CTJmjsC1%2FwFQKIgTC9RoKJHMdSo8B121yV1GFVvsO5xzZN%2BcNwUdXegWuVOW%2BEGx%2FE%2BhExXQ6NfYnoY29WnIaNLc6NA1ugmSCFGlZwFljOqDi2AhmfrAwLTmUFTEcq9WzvsoW5ih1SY5lPNc%2BWpsVBew1jHKIBVvDWz7iZjfZKB%2BmBgEx9bhSHYws7FaTYvLDHfeq5UtvFJXHUucxGbmtKBP2%2FbbybrOtuHGDMu3h1e9Pn9XC0ksyDgTwQe6G%2B0QO21DqT5ueXtDbojwwYle3hywlGFBW9n6hGBQiY0S%2FzYqO79RekoKkkVcxx3Pv%2BrzXPtFaAfSj3ENHp%2Fk%2Fh%2FYSEV5gY2O25LTvtAlolpOrQOdfNqHc7%2BUQW4uv6gYe0PJrUT4EyAQPxYlATONCfRCCG4UxZNOG60tBwJ8V8KGqUrF%2BehD0R5han6fFLVJ8BuMJf3nkdb5LEQHOwY%2Fihkp2s69usjoDvR%2B3iOF2TZT4Emu3k0NUZ5VnyDoOYG3qRpciSHkUovagcmhgCqHgzDzxYq%2FBjqkASXkdsOcg8RmBJDrNQK8sFBCjjILKRTe8iPfMDCe8nz3JB8FZtw7m27dhAFjdLCfu61au4PYgC%2F483%2BBPRWh0SXmRXrPMYWtKDKkT4yji4oNTIVpdR4OVW6%2B73NmLkhEYXxwSvQQDpbO7i1bWgBtZtHWQFyDZC5m%2B%2BJ5y2fR8N3G9B1ZXrTG7D4%2B0wCZE3icjqq1zhmpC7523%2BNRbv3ZHs8%2FOFR2&X-Amz-Signature=39925d8c01f74c9f2377d97f04b951e1d9178d9f5c995cf716324e3f24bf78df&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
