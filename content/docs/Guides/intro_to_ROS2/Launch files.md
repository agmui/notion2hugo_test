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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5WE6BLM%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDLkk5L4B11cpe8lybOYF8OwBVdSZmdd8zQnPkNyijBPAIgWi9yNkzD4WPoL7gS77v7po2e0m3yLkzQY45T3u%2F3cSwqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqZE50xgNN6h867HSrcA45r0CmMfTLVHXrjgusGEQxDPtUo4paWJPtEop8%2FIUveFA%2FUkQOk5dAaIU7cE%2F4KBXisD9Dayl0fPj%2F9Fe18wDZpkLrd1jZ5ArCRuxXPXjAxVwFbfcqRJ3mfCUBzbxXfrrAQpKPnkBVfk1DOGH7GDdmWOclkY31nSi%2Bt%2F4uLMU3wZp4pEmsgaDOa60tEuNb1YPCJhkJafwlqP%2FJXu2tUFKFoFMKGdiqhem5wmbpPAtFpS1JkaJpRRGhhb8%2FfUSq05if%2FEdppTtjGTWeENu5c14ucHvvV9ZiFCLqV6AyP0eEU2IGYJsGjqfGNjTKXl4DfoEa4FxLf6ciMwE9%2F2Sg8kvl8er8bygnlRyEaXZ6QyjqP7skkyz9KI70MSgFdD1GeEyabm%2BU2hFa1TB%2BLNO4UXAVEzyPiWq7VxR6GWIHs5lbNKZS05q4wZDEnIIFldTgVg64V9y5R9LiQwqa0so12SW4nsk7PKdbGjXMI6iIEfQwNJfDduMt088jINJtjEVazpZgnl%2BEDIyGi885%2FkV5V5%2B0BbzbK7yB0VLSORWSYGp91qC7xZ3qwMpitu9FZmESao%2B%2BeiRfm1kf4u7vOVV85QxjQzBPeqxJndV88Z%2FMGbBidey7UVbspBMSap3w3MNLRr78GOqUBtihnWhTZwh7185hsTsGFV2td5lXLBkrgrqHczeD2fdUbWx1cUv5RvJNwd%2F8rBEYE%2Bdgm8JToTkRLVdBF8cIXcZ%2F8fpjuK1anLZs%2F2GfhvO4uAEPSiiRAApaPRKZyGDFmArC1%2BFnOJrXUXKGWxlEx43KaOKNFGgN8qHF%2Fee7mY9rQgMmzSdL4UYS%2F%2B01eDc5SL%2B2ERR%2BAN2Ca%2BsGby%2BnHE3IdgSBM&X-Amz-Signature=cfc5a5319084e19e7f513564d36f771f2f658d7642b668a2a3df8469e5d2ad7d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5WE6BLM%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDLkk5L4B11cpe8lybOYF8OwBVdSZmdd8zQnPkNyijBPAIgWi9yNkzD4WPoL7gS77v7po2e0m3yLkzQY45T3u%2F3cSwqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqZE50xgNN6h867HSrcA45r0CmMfTLVHXrjgusGEQxDPtUo4paWJPtEop8%2FIUveFA%2FUkQOk5dAaIU7cE%2F4KBXisD9Dayl0fPj%2F9Fe18wDZpkLrd1jZ5ArCRuxXPXjAxVwFbfcqRJ3mfCUBzbxXfrrAQpKPnkBVfk1DOGH7GDdmWOclkY31nSi%2Bt%2F4uLMU3wZp4pEmsgaDOa60tEuNb1YPCJhkJafwlqP%2FJXu2tUFKFoFMKGdiqhem5wmbpPAtFpS1JkaJpRRGhhb8%2FfUSq05if%2FEdppTtjGTWeENu5c14ucHvvV9ZiFCLqV6AyP0eEU2IGYJsGjqfGNjTKXl4DfoEa4FxLf6ciMwE9%2F2Sg8kvl8er8bygnlRyEaXZ6QyjqP7skkyz9KI70MSgFdD1GeEyabm%2BU2hFa1TB%2BLNO4UXAVEzyPiWq7VxR6GWIHs5lbNKZS05q4wZDEnIIFldTgVg64V9y5R9LiQwqa0so12SW4nsk7PKdbGjXMI6iIEfQwNJfDduMt088jINJtjEVazpZgnl%2BEDIyGi885%2FkV5V5%2B0BbzbK7yB0VLSORWSYGp91qC7xZ3qwMpitu9FZmESao%2B%2BeiRfm1kf4u7vOVV85QxjQzBPeqxJndV88Z%2FMGbBidey7UVbspBMSap3w3MNLRr78GOqUBtihnWhTZwh7185hsTsGFV2td5lXLBkrgrqHczeD2fdUbWx1cUv5RvJNwd%2F8rBEYE%2Bdgm8JToTkRLVdBF8cIXcZ%2F8fpjuK1anLZs%2F2GfhvO4uAEPSiiRAApaPRKZyGDFmArC1%2BFnOJrXUXKGWxlEx43KaOKNFGgN8qHF%2Fee7mY9rQgMmzSdL4UYS%2F%2B01eDc5SL%2B2ERR%2BAN2Ca%2BsGby%2BnHE3IdgSBM&X-Amz-Signature=2822ddfab8b7a424c7fdcebdc628a6ee491fcca74e66ebc3e4b1286fd1603966&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5WE6BLM%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDLkk5L4B11cpe8lybOYF8OwBVdSZmdd8zQnPkNyijBPAIgWi9yNkzD4WPoL7gS77v7po2e0m3yLkzQY45T3u%2F3cSwqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqZE50xgNN6h867HSrcA45r0CmMfTLVHXrjgusGEQxDPtUo4paWJPtEop8%2FIUveFA%2FUkQOk5dAaIU7cE%2F4KBXisD9Dayl0fPj%2F9Fe18wDZpkLrd1jZ5ArCRuxXPXjAxVwFbfcqRJ3mfCUBzbxXfrrAQpKPnkBVfk1DOGH7GDdmWOclkY31nSi%2Bt%2F4uLMU3wZp4pEmsgaDOa60tEuNb1YPCJhkJafwlqP%2FJXu2tUFKFoFMKGdiqhem5wmbpPAtFpS1JkaJpRRGhhb8%2FfUSq05if%2FEdppTtjGTWeENu5c14ucHvvV9ZiFCLqV6AyP0eEU2IGYJsGjqfGNjTKXl4DfoEa4FxLf6ciMwE9%2F2Sg8kvl8er8bygnlRyEaXZ6QyjqP7skkyz9KI70MSgFdD1GeEyabm%2BU2hFa1TB%2BLNO4UXAVEzyPiWq7VxR6GWIHs5lbNKZS05q4wZDEnIIFldTgVg64V9y5R9LiQwqa0so12SW4nsk7PKdbGjXMI6iIEfQwNJfDduMt088jINJtjEVazpZgnl%2BEDIyGi885%2FkV5V5%2B0BbzbK7yB0VLSORWSYGp91qC7xZ3qwMpitu9FZmESao%2B%2BeiRfm1kf4u7vOVV85QxjQzBPeqxJndV88Z%2FMGbBidey7UVbspBMSap3w3MNLRr78GOqUBtihnWhTZwh7185hsTsGFV2td5lXLBkrgrqHczeD2fdUbWx1cUv5RvJNwd%2F8rBEYE%2Bdgm8JToTkRLVdBF8cIXcZ%2F8fpjuK1anLZs%2F2GfhvO4uAEPSiiRAApaPRKZyGDFmArC1%2BFnOJrXUXKGWxlEx43KaOKNFGgN8qHF%2Fee7mY9rQgMmzSdL4UYS%2F%2B01eDc5SL%2B2ERR%2BAN2Ca%2BsGby%2BnHE3IdgSBM&X-Amz-Signature=85df78a9ef854e0db30613cde27601680197867fd29c0aa32d4618ca4575ef85&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
