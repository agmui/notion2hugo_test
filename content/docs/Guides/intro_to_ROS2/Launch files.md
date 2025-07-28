---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZERA6XEK%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIBhqOH4JIlKj8ru7tosGkaZMdovFS9n9FAjqe6jvwbzWAiAZBxqf7kKlCX2uFa%2BTZT%2FVr3v4bj68SRwfCWQlCr9ElyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT6N6yr%2FMq5fVLJePKtwDyk8I1jaOJP3q9B79EhKT6q9uNemA%2FXJOatkbOH%2B3ozmtQg%2BpgptwpwwA51wPXpWouBCb6HEDkl1dNciATT4icOZNaqpGIrxBKixeLIg0nnv4MglBhie4QjrV4zIaO17%2Fv12ECrEK1YLhSVvZJJIxAKt4%2BXp4LZpn5mUVA6iVF4SUCs09v6zzdx8gHVeJpgV5xv95IPwnR1E9EeOqMs9mi5MlYSK1AZQPVk1YfBVs2T9EUJbYcWpWadU3qJkNxKt2yk8Qg82Up2bZ3RtqkuCtQAjES0YNuHxiB2esqxsG2WnqX%2FN%2BEO%2FCN6yO%2BtjyRUVgTfIYtMuyoQ6Fh4AYu9bgJK%2Bvfu6frCZnPBKglLhiAVhiGWUd5BLrlpCv5XGyFn0W9nycEOchyISbE6YYGpRkuYW7sdbnVuKr186Bb8Tyor2MmV7iNOzsmo94IlGQn5ZqvmQMe3TqBQOcDIVfSsilHbllP1VEhaXPrD2y1OuYZxNbTh9TI%2FZ4poxS1gE0bEveCLE5ct4mJ5ftLOrL%2BHBlEFn3ISVAHkNRxsZl2w3tRtYdUpJTRiRs2jlFGaH9ZSZSm%2F6PQCr5SdlXl%2FvnNqwycI138WJ%2Bzrxz58BNTThbxwaYN2poj%2FW0PcK3CRAwysWcxAY6pgHa1BO2IdsSOUtP2xRz6z1wes3QhlS2AHlByTHfj2dPttarJUy2ob7sMEeQlj47c9ytwQhAnlSRX1Zf3aUEVbO27ESYeftiXkWdeIGgRmGK69drf6S6nf2tvSUsLb8EAKFHcNpULgZr%2FV8zVPWsHUJSi%2BQlwzNj16XF8hqR3Xrzp5GhV4A1dgdgp7X7SYVFFL5iGB82TQ6TSwDBxPtxvDsc4dqn4tVG&X-Amz-Signature=68d4f08d24e1c5c198e1f3021324a39410c01e318d8214fa827c7f1fa4423a3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZERA6XEK%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIBhqOH4JIlKj8ru7tosGkaZMdovFS9n9FAjqe6jvwbzWAiAZBxqf7kKlCX2uFa%2BTZT%2FVr3v4bj68SRwfCWQlCr9ElyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT6N6yr%2FMq5fVLJePKtwDyk8I1jaOJP3q9B79EhKT6q9uNemA%2FXJOatkbOH%2B3ozmtQg%2BpgptwpwwA51wPXpWouBCb6HEDkl1dNciATT4icOZNaqpGIrxBKixeLIg0nnv4MglBhie4QjrV4zIaO17%2Fv12ECrEK1YLhSVvZJJIxAKt4%2BXp4LZpn5mUVA6iVF4SUCs09v6zzdx8gHVeJpgV5xv95IPwnR1E9EeOqMs9mi5MlYSK1AZQPVk1YfBVs2T9EUJbYcWpWadU3qJkNxKt2yk8Qg82Up2bZ3RtqkuCtQAjES0YNuHxiB2esqxsG2WnqX%2FN%2BEO%2FCN6yO%2BtjyRUVgTfIYtMuyoQ6Fh4AYu9bgJK%2Bvfu6frCZnPBKglLhiAVhiGWUd5BLrlpCv5XGyFn0W9nycEOchyISbE6YYGpRkuYW7sdbnVuKr186Bb8Tyor2MmV7iNOzsmo94IlGQn5ZqvmQMe3TqBQOcDIVfSsilHbllP1VEhaXPrD2y1OuYZxNbTh9TI%2FZ4poxS1gE0bEveCLE5ct4mJ5ftLOrL%2BHBlEFn3ISVAHkNRxsZl2w3tRtYdUpJTRiRs2jlFGaH9ZSZSm%2F6PQCr5SdlXl%2FvnNqwycI138WJ%2Bzrxz58BNTThbxwaYN2poj%2FW0PcK3CRAwysWcxAY6pgHa1BO2IdsSOUtP2xRz6z1wes3QhlS2AHlByTHfj2dPttarJUy2ob7sMEeQlj47c9ytwQhAnlSRX1Zf3aUEVbO27ESYeftiXkWdeIGgRmGK69drf6S6nf2tvSUsLb8EAKFHcNpULgZr%2FV8zVPWsHUJSi%2BQlwzNj16XF8hqR3Xrzp5GhV4A1dgdgp7X7SYVFFL5iGB82TQ6TSwDBxPtxvDsc4dqn4tVG&X-Amz-Signature=586a697521059ff3acbfc07961d5ce211617f508ceba81eb78c1a2df3a07f5e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZERA6XEK%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIBhqOH4JIlKj8ru7tosGkaZMdovFS9n9FAjqe6jvwbzWAiAZBxqf7kKlCX2uFa%2BTZT%2FVr3v4bj68SRwfCWQlCr9ElyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT6N6yr%2FMq5fVLJePKtwDyk8I1jaOJP3q9B79EhKT6q9uNemA%2FXJOatkbOH%2B3ozmtQg%2BpgptwpwwA51wPXpWouBCb6HEDkl1dNciATT4icOZNaqpGIrxBKixeLIg0nnv4MglBhie4QjrV4zIaO17%2Fv12ECrEK1YLhSVvZJJIxAKt4%2BXp4LZpn5mUVA6iVF4SUCs09v6zzdx8gHVeJpgV5xv95IPwnR1E9EeOqMs9mi5MlYSK1AZQPVk1YfBVs2T9EUJbYcWpWadU3qJkNxKt2yk8Qg82Up2bZ3RtqkuCtQAjES0YNuHxiB2esqxsG2WnqX%2FN%2BEO%2FCN6yO%2BtjyRUVgTfIYtMuyoQ6Fh4AYu9bgJK%2Bvfu6frCZnPBKglLhiAVhiGWUd5BLrlpCv5XGyFn0W9nycEOchyISbE6YYGpRkuYW7sdbnVuKr186Bb8Tyor2MmV7iNOzsmo94IlGQn5ZqvmQMe3TqBQOcDIVfSsilHbllP1VEhaXPrD2y1OuYZxNbTh9TI%2FZ4poxS1gE0bEveCLE5ct4mJ5ftLOrL%2BHBlEFn3ISVAHkNRxsZl2w3tRtYdUpJTRiRs2jlFGaH9ZSZSm%2F6PQCr5SdlXl%2FvnNqwycI138WJ%2Bzrxz58BNTThbxwaYN2poj%2FW0PcK3CRAwysWcxAY6pgHa1BO2IdsSOUtP2xRz6z1wes3QhlS2AHlByTHfj2dPttarJUy2ob7sMEeQlj47c9ytwQhAnlSRX1Zf3aUEVbO27ESYeftiXkWdeIGgRmGK69drf6S6nf2tvSUsLb8EAKFHcNpULgZr%2FV8zVPWsHUJSi%2BQlwzNj16XF8hqR3Xrzp5GhV4A1dgdgp7X7SYVFFL5iGB82TQ6TSwDBxPtxvDsc4dqn4tVG&X-Amz-Signature=509b0856cc07fd69372d3586ce9c1765fed3a10a044cd6958357330b745b0f21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
