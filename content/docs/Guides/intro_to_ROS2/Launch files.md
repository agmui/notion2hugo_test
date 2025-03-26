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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXEP2LGQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGdFEJyctCwS2xLBA51UQYD9BmQfJfS4Fxxhas0r7CzAIhAKiK5XEm%2Bpkp0eZwZZVNDt8mCXHihNvYSjcXitjegCM3Kv8DCC8QABoMNjM3NDIzMTgzODA1IgxFY2opM4JpFzJ1ijQq3ANFKfOFrSFXXAUsbaFC9Kd477BQsOMtyOw0BzbzdDknoSd8viorRh7zPoMaavhWLBLIncoYC1N%2BcL4yICSPIlqZOu9KWUTNFFLLthtlv6rblJyGvE%2BjvfNRZ15ZoD%2FjtIrrq%2FyMeh2mkO6C%2FyrLbcvnxJVLHZnT5OcqW0FNwEFPVDhS4erm6FkXWlW5KdrN%2Fe6TbEHrTAX43cUTN3VWovoqddXHFr6WuiD6F%2BmM7R0EgNwhayXcpmJoLPJVDRAGW4KFYXRK2fncKONC%2BRAeDeGZ1PQzPJrJLDzr5L%2BUgEwDSGqq%2FKVbs2VH2lWV9eW0iExrUG%2FXSe38yrQZ72uvCdVx0xNm97XmKUUmNVexbEB1uXAkCSZjqH%2FBWGlTaJXxt7lW3GXIxkv1U%2Bl8D5iqRriS9E6ykFR1MUYKgeGNtUVhNCuXSvEBl4zrAxs5AXxWZjdDkYMPmKD7dE7d4Uu9uH68WxZVyES7C3GVh4gY7KAu%2FIKbC2yICnmAmu4lhq3fiyJVgFZA%2FYj8eErlcr257raxHeF6tRpKN3hZ2ve6LdjEJ6w6%2BWsnKu9NQkojJkcm3NYlivZ1Mf6mzSFGKm%2FGIReFsZj1htHcdcJML0XmsjoIJUarNcAp9Q4l0gHMMzDemZC%2FBjqkAZGyvhL4pZ8EUx00jkT5mlQ2RjZxfxBIvlzy6kDRfdtp1rBx26fE4PbyWo4trdzIb7lNdTEX%2BSjO0cnDmZ7SohA%2FfDGqAdkeGkza%2BBW4zJ3zMLuKvn5aok6yKEvpayN9%2FkWCgVxV7pTjWu6TdlL3dhwKCRoTnvROwzhTQUB9pn9YSg9TGtTYgJBiPVHkbbXFnM9RQ4%2FeXk8W8Gwbke%2Fw1BVokA%2FX&X-Amz-Signature=ccf66762ff431bff7f2bfb2e97f018bd76bfbf40e76caac671ffde3fb1cf63c2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXEP2LGQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGdFEJyctCwS2xLBA51UQYD9BmQfJfS4Fxxhas0r7CzAIhAKiK5XEm%2Bpkp0eZwZZVNDt8mCXHihNvYSjcXitjegCM3Kv8DCC8QABoMNjM3NDIzMTgzODA1IgxFY2opM4JpFzJ1ijQq3ANFKfOFrSFXXAUsbaFC9Kd477BQsOMtyOw0BzbzdDknoSd8viorRh7zPoMaavhWLBLIncoYC1N%2BcL4yICSPIlqZOu9KWUTNFFLLthtlv6rblJyGvE%2BjvfNRZ15ZoD%2FjtIrrq%2FyMeh2mkO6C%2FyrLbcvnxJVLHZnT5OcqW0FNwEFPVDhS4erm6FkXWlW5KdrN%2Fe6TbEHrTAX43cUTN3VWovoqddXHFr6WuiD6F%2BmM7R0EgNwhayXcpmJoLPJVDRAGW4KFYXRK2fncKONC%2BRAeDeGZ1PQzPJrJLDzr5L%2BUgEwDSGqq%2FKVbs2VH2lWV9eW0iExrUG%2FXSe38yrQZ72uvCdVx0xNm97XmKUUmNVexbEB1uXAkCSZjqH%2FBWGlTaJXxt7lW3GXIxkv1U%2Bl8D5iqRriS9E6ykFR1MUYKgeGNtUVhNCuXSvEBl4zrAxs5AXxWZjdDkYMPmKD7dE7d4Uu9uH68WxZVyES7C3GVh4gY7KAu%2FIKbC2yICnmAmu4lhq3fiyJVgFZA%2FYj8eErlcr257raxHeF6tRpKN3hZ2ve6LdjEJ6w6%2BWsnKu9NQkojJkcm3NYlivZ1Mf6mzSFGKm%2FGIReFsZj1htHcdcJML0XmsjoIJUarNcAp9Q4l0gHMMzDemZC%2FBjqkAZGyvhL4pZ8EUx00jkT5mlQ2RjZxfxBIvlzy6kDRfdtp1rBx26fE4PbyWo4trdzIb7lNdTEX%2BSjO0cnDmZ7SohA%2FfDGqAdkeGkza%2BBW4zJ3zMLuKvn5aok6yKEvpayN9%2FkWCgVxV7pTjWu6TdlL3dhwKCRoTnvROwzhTQUB9pn9YSg9TGtTYgJBiPVHkbbXFnM9RQ4%2FeXk8W8Gwbke%2Fw1BVokA%2FX&X-Amz-Signature=9fdb43ac94f5cb8aac0a5b158390e06329917dfa12494f8212d8e92e99fa78f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXEP2LGQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGdFEJyctCwS2xLBA51UQYD9BmQfJfS4Fxxhas0r7CzAIhAKiK5XEm%2Bpkp0eZwZZVNDt8mCXHihNvYSjcXitjegCM3Kv8DCC8QABoMNjM3NDIzMTgzODA1IgxFY2opM4JpFzJ1ijQq3ANFKfOFrSFXXAUsbaFC9Kd477BQsOMtyOw0BzbzdDknoSd8viorRh7zPoMaavhWLBLIncoYC1N%2BcL4yICSPIlqZOu9KWUTNFFLLthtlv6rblJyGvE%2BjvfNRZ15ZoD%2FjtIrrq%2FyMeh2mkO6C%2FyrLbcvnxJVLHZnT5OcqW0FNwEFPVDhS4erm6FkXWlW5KdrN%2Fe6TbEHrTAX43cUTN3VWovoqddXHFr6WuiD6F%2BmM7R0EgNwhayXcpmJoLPJVDRAGW4KFYXRK2fncKONC%2BRAeDeGZ1PQzPJrJLDzr5L%2BUgEwDSGqq%2FKVbs2VH2lWV9eW0iExrUG%2FXSe38yrQZ72uvCdVx0xNm97XmKUUmNVexbEB1uXAkCSZjqH%2FBWGlTaJXxt7lW3GXIxkv1U%2Bl8D5iqRriS9E6ykFR1MUYKgeGNtUVhNCuXSvEBl4zrAxs5AXxWZjdDkYMPmKD7dE7d4Uu9uH68WxZVyES7C3GVh4gY7KAu%2FIKbC2yICnmAmu4lhq3fiyJVgFZA%2FYj8eErlcr257raxHeF6tRpKN3hZ2ve6LdjEJ6w6%2BWsnKu9NQkojJkcm3NYlivZ1Mf6mzSFGKm%2FGIReFsZj1htHcdcJML0XmsjoIJUarNcAp9Q4l0gHMMzDemZC%2FBjqkAZGyvhL4pZ8EUx00jkT5mlQ2RjZxfxBIvlzy6kDRfdtp1rBx26fE4PbyWo4trdzIb7lNdTEX%2BSjO0cnDmZ7SohA%2FfDGqAdkeGkza%2BBW4zJ3zMLuKvn5aok6yKEvpayN9%2FkWCgVxV7pTjWu6TdlL3dhwKCRoTnvROwzhTQUB9pn9YSg9TGtTYgJBiPVHkbbXFnM9RQ4%2FeXk8W8Gwbke%2Fw1BVokA%2FX&X-Amz-Signature=098f9909059ec3b9675581607306181fd9ed98d190fff325090aa2c35f6bbfc4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
