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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V6QIUGG%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCmtLUL%2FhF211Z6OGC%2BOnGpCcauMuFo1jOxAlQspxCc0wIhAIgsyK2wpY0nHpK1ETuyFfYJ2tmlKVJ5erojMvs%2B4BJuKv8DCHgQABoMNjM3NDIzMTgzODA1Igwx%2BHWlvcJMcylc%2FNQq3AN1N0H3GYUB1tnx%2Ff75hijP%2FUpqSo4Zmso0Ev5Biz4bgqOcFOq3a%2Bdo%2BrT8EJqBeDMP1kH7Z6JC7%2B3aYsCXtn00E6pF84AkvcJq1gC5xdTyd%2BtUCLhv997Q9PHWDI6QVEejronbcH1vq0kGMNp24M6u8JXivsHUNBGMdsHdqiPXjpUYqKwGWYRgkcX49Z58A8Tjqv%2BUtFYk9Vup8IWrJ4A6e88E6djLE0h3VPls84C4jzYXf1RPh1XszZksL3FJM80bon5rn57wfK2gjz6S4WoZwMpqulW5tz4R580zSt1nHkzAGGk9lZXXwBQpIXpY%2FmkE4B6TZIyCetnzytWMsI3KJZbYR9CIB%2Bsv9XqKRk3XEFDwIYLNWkfh%2FWt1RXqfbrDrdjWw9RZAeQeGwRy%2FNv4xMJ92Mj%2BGcE6jy%2Fv4iejU0zkmRS%2Fa3GQJAbx3ZI1SxQdS7uNkixgGrR329zwclD2wGPPefZN2ZXcvhIV0VvNOhbWFf1OiUCWbuJ4HrMuw10FLp6WUR5xYy0gfV0TR%2FARjlk8nsf4eIZQlsDylCtLjyfisSbH5WQcEtOcjLTPwGeFyllRV5WT7070qDDDq9TfgIqHUMtHkbYg2w0whaA4fWqlDxzQcTl24amZiXTDmgJnEBjqkAVI7Lm4JsXnZrVLRyv76ZMa0LRTYhAxyTfWNjfo1NkRnp8EKnA%2B3yeJqgn0Gsn6%2BvJk3Pv2Zv0BwvtWUngcGHP2Ho0URSPlbzJx8MqIEYXoHSE7zECv4zkCUM5NhlH2STda3sNAuc0nrMnzBOCnN70z3tXK15DPF6Ydgq%2BqiJ0%2B64cO5mngVnkWEnJPkT9903lpOaMirH1Waiui8c9vrV1EIHV6c&X-Amz-Signature=2a9dbc776f7c36ac27e2c2d959c7387cab4f6b42fcf07dffdd8523f08aefb428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V6QIUGG%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCmtLUL%2FhF211Z6OGC%2BOnGpCcauMuFo1jOxAlQspxCc0wIhAIgsyK2wpY0nHpK1ETuyFfYJ2tmlKVJ5erojMvs%2B4BJuKv8DCHgQABoMNjM3NDIzMTgzODA1Igwx%2BHWlvcJMcylc%2FNQq3AN1N0H3GYUB1tnx%2Ff75hijP%2FUpqSo4Zmso0Ev5Biz4bgqOcFOq3a%2Bdo%2BrT8EJqBeDMP1kH7Z6JC7%2B3aYsCXtn00E6pF84AkvcJq1gC5xdTyd%2BtUCLhv997Q9PHWDI6QVEejronbcH1vq0kGMNp24M6u8JXivsHUNBGMdsHdqiPXjpUYqKwGWYRgkcX49Z58A8Tjqv%2BUtFYk9Vup8IWrJ4A6e88E6djLE0h3VPls84C4jzYXf1RPh1XszZksL3FJM80bon5rn57wfK2gjz6S4WoZwMpqulW5tz4R580zSt1nHkzAGGk9lZXXwBQpIXpY%2FmkE4B6TZIyCetnzytWMsI3KJZbYR9CIB%2Bsv9XqKRk3XEFDwIYLNWkfh%2FWt1RXqfbrDrdjWw9RZAeQeGwRy%2FNv4xMJ92Mj%2BGcE6jy%2Fv4iejU0zkmRS%2Fa3GQJAbx3ZI1SxQdS7uNkixgGrR329zwclD2wGPPefZN2ZXcvhIV0VvNOhbWFf1OiUCWbuJ4HrMuw10FLp6WUR5xYy0gfV0TR%2FARjlk8nsf4eIZQlsDylCtLjyfisSbH5WQcEtOcjLTPwGeFyllRV5WT7070qDDDq9TfgIqHUMtHkbYg2w0whaA4fWqlDxzQcTl24amZiXTDmgJnEBjqkAVI7Lm4JsXnZrVLRyv76ZMa0LRTYhAxyTfWNjfo1NkRnp8EKnA%2B3yeJqgn0Gsn6%2BvJk3Pv2Zv0BwvtWUngcGHP2Ho0URSPlbzJx8MqIEYXoHSE7zECv4zkCUM5NhlH2STda3sNAuc0nrMnzBOCnN70z3tXK15DPF6Ydgq%2BqiJ0%2B64cO5mngVnkWEnJPkT9903lpOaMirH1Waiui8c9vrV1EIHV6c&X-Amz-Signature=8184cb9146366bfb541a3593aa896822613072b989228ba9009dbacce3142fe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V6QIUGG%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCmtLUL%2FhF211Z6OGC%2BOnGpCcauMuFo1jOxAlQspxCc0wIhAIgsyK2wpY0nHpK1ETuyFfYJ2tmlKVJ5erojMvs%2B4BJuKv8DCHgQABoMNjM3NDIzMTgzODA1Igwx%2BHWlvcJMcylc%2FNQq3AN1N0H3GYUB1tnx%2Ff75hijP%2FUpqSo4Zmso0Ev5Biz4bgqOcFOq3a%2Bdo%2BrT8EJqBeDMP1kH7Z6JC7%2B3aYsCXtn00E6pF84AkvcJq1gC5xdTyd%2BtUCLhv997Q9PHWDI6QVEejronbcH1vq0kGMNp24M6u8JXivsHUNBGMdsHdqiPXjpUYqKwGWYRgkcX49Z58A8Tjqv%2BUtFYk9Vup8IWrJ4A6e88E6djLE0h3VPls84C4jzYXf1RPh1XszZksL3FJM80bon5rn57wfK2gjz6S4WoZwMpqulW5tz4R580zSt1nHkzAGGk9lZXXwBQpIXpY%2FmkE4B6TZIyCetnzytWMsI3KJZbYR9CIB%2Bsv9XqKRk3XEFDwIYLNWkfh%2FWt1RXqfbrDrdjWw9RZAeQeGwRy%2FNv4xMJ92Mj%2BGcE6jy%2Fv4iejU0zkmRS%2Fa3GQJAbx3ZI1SxQdS7uNkixgGrR329zwclD2wGPPefZN2ZXcvhIV0VvNOhbWFf1OiUCWbuJ4HrMuw10FLp6WUR5xYy0gfV0TR%2FARjlk8nsf4eIZQlsDylCtLjyfisSbH5WQcEtOcjLTPwGeFyllRV5WT7070qDDDq9TfgIqHUMtHkbYg2w0whaA4fWqlDxzQcTl24amZiXTDmgJnEBjqkAVI7Lm4JsXnZrVLRyv76ZMa0LRTYhAxyTfWNjfo1NkRnp8EKnA%2B3yeJqgn0Gsn6%2BvJk3Pv2Zv0BwvtWUngcGHP2Ho0URSPlbzJx8MqIEYXoHSE7zECv4zkCUM5NhlH2STda3sNAuc0nrMnzBOCnN70z3tXK15DPF6Ydgq%2BqiJ0%2B64cO5mngVnkWEnJPkT9903lpOaMirH1Waiui8c9vrV1EIHV6c&X-Amz-Signature=816ddf2b03402404ec0c85daafa9a8d1eb9000a0a2923943d3d6c006431c213a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
