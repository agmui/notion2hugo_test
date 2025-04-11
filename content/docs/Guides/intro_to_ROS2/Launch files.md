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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCKQDKOU%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQC3iQY%2BBfUu75JLCbQEXxF8lBRkSs0K7YDoLyupxW1GhgIhAIX1U43ggPJ8NR6QLYNzbiEQUtodjF6Mx9Liki2JWy73KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykLK0kZkMFEXp9sSYq3APpxQ7OVayzb77g6AEzu3laL9Rj%2Fc%2F878mJWPaJcwcKupzQ%2FCQ%2BLXJqLq1hTcWrKZPfvI9KkQHus8Ichr2bdxd2uYj8SRVzm39dx%2BGW8JFCQQh4K9NWI4QT7f0jUaGOOKny0sQ8JMcVTB5c9v33%2Fido%2F%2FqddYRyPidkgpiX68jePUZxSFdUmMZQRFJx2mgGjtLB9P5QBxzGSqxU0t%2FACwU1kreQtYzFJOUGfLrS%2BBhAtSshGGO6SM7M1Fv0GcueFiXWd1LcAcZfgVe7amurn2dlJNgvkvrHxG4fT3JPfiWs87Rb8hxusmBT1Zsv93jZoIAAqObJ4N6UBLYgcuqj3HSkv5XJ0gUt1cKwKXZu0j%2BA5hEHQGl3lbD43v2OZKrpAUOQM2v8MU4%2Fhe1W%2Fq%2BpQYNKBmZFydnews6w%2F5I71O0gyceG8YQYdK9VbK9XpixQNcb5qAcYryp3MtM3uoGD8bYsXuRN7aq0msqlI9UmdwH8Z89AIvRl7Hulfbm%2FnDgYgZ2MMYXnzodO73W3v37vzbnu4cP%2Bp7Ec4WL1nUOj7JjK888mqLrGUUaXkTG2uV9Nc5wK3DyfucU9%2Fgmtf5hX1Zh9%2BlYMCSIfsp%2Bf2FrB68BDVhVrQq529IOdWfvTBjD3teS%2FBjqkAaNcpFh57W8WtndRt%2F9Cc%2BVnoccrbfjxlcP6Ai7JbMgwz0qJfiNGXb77MOntbb01%2B3nko%2B2Fw7MNPVxYjnOWkgLyyUo3OnKQgrmqpb3DN8o%2F1c0daWX27xhFfZA%2BTMBs3BG%2Fb%2BzTh5dLXTmu%2FZPTTJw%2FKglW8XZIZjgXOiUP24AVKJ6PKvlu8ekCHzWicZzJNI5V%2BdT%2BNUSfKlr10Ne9Cg%2F9df%2Fe&X-Amz-Signature=1405747573e803dd8d8f86269666079bed5374a61a06e5cc35d3e601ddd105c9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCKQDKOU%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQC3iQY%2BBfUu75JLCbQEXxF8lBRkSs0K7YDoLyupxW1GhgIhAIX1U43ggPJ8NR6QLYNzbiEQUtodjF6Mx9Liki2JWy73KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykLK0kZkMFEXp9sSYq3APpxQ7OVayzb77g6AEzu3laL9Rj%2Fc%2F878mJWPaJcwcKupzQ%2FCQ%2BLXJqLq1hTcWrKZPfvI9KkQHus8Ichr2bdxd2uYj8SRVzm39dx%2BGW8JFCQQh4K9NWI4QT7f0jUaGOOKny0sQ8JMcVTB5c9v33%2Fido%2F%2FqddYRyPidkgpiX68jePUZxSFdUmMZQRFJx2mgGjtLB9P5QBxzGSqxU0t%2FACwU1kreQtYzFJOUGfLrS%2BBhAtSshGGO6SM7M1Fv0GcueFiXWd1LcAcZfgVe7amurn2dlJNgvkvrHxG4fT3JPfiWs87Rb8hxusmBT1Zsv93jZoIAAqObJ4N6UBLYgcuqj3HSkv5XJ0gUt1cKwKXZu0j%2BA5hEHQGl3lbD43v2OZKrpAUOQM2v8MU4%2Fhe1W%2Fq%2BpQYNKBmZFydnews6w%2F5I71O0gyceG8YQYdK9VbK9XpixQNcb5qAcYryp3MtM3uoGD8bYsXuRN7aq0msqlI9UmdwH8Z89AIvRl7Hulfbm%2FnDgYgZ2MMYXnzodO73W3v37vzbnu4cP%2Bp7Ec4WL1nUOj7JjK888mqLrGUUaXkTG2uV9Nc5wK3DyfucU9%2Fgmtf5hX1Zh9%2BlYMCSIfsp%2Bf2FrB68BDVhVrQq529IOdWfvTBjD3teS%2FBjqkAaNcpFh57W8WtndRt%2F9Cc%2BVnoccrbfjxlcP6Ai7JbMgwz0qJfiNGXb77MOntbb01%2B3nko%2B2Fw7MNPVxYjnOWkgLyyUo3OnKQgrmqpb3DN8o%2F1c0daWX27xhFfZA%2BTMBs3BG%2Fb%2BzTh5dLXTmu%2FZPTTJw%2FKglW8XZIZjgXOiUP24AVKJ6PKvlu8ekCHzWicZzJNI5V%2BdT%2BNUSfKlr10Ne9Cg%2F9df%2Fe&X-Amz-Signature=8a3baf0407835316b18b3ff0e5e6885a5180652823a9167bb01e00ded427e386&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCKQDKOU%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQC3iQY%2BBfUu75JLCbQEXxF8lBRkSs0K7YDoLyupxW1GhgIhAIX1U43ggPJ8NR6QLYNzbiEQUtodjF6Mx9Liki2JWy73KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykLK0kZkMFEXp9sSYq3APpxQ7OVayzb77g6AEzu3laL9Rj%2Fc%2F878mJWPaJcwcKupzQ%2FCQ%2BLXJqLq1hTcWrKZPfvI9KkQHus8Ichr2bdxd2uYj8SRVzm39dx%2BGW8JFCQQh4K9NWI4QT7f0jUaGOOKny0sQ8JMcVTB5c9v33%2Fido%2F%2FqddYRyPidkgpiX68jePUZxSFdUmMZQRFJx2mgGjtLB9P5QBxzGSqxU0t%2FACwU1kreQtYzFJOUGfLrS%2BBhAtSshGGO6SM7M1Fv0GcueFiXWd1LcAcZfgVe7amurn2dlJNgvkvrHxG4fT3JPfiWs87Rb8hxusmBT1Zsv93jZoIAAqObJ4N6UBLYgcuqj3HSkv5XJ0gUt1cKwKXZu0j%2BA5hEHQGl3lbD43v2OZKrpAUOQM2v8MU4%2Fhe1W%2Fq%2BpQYNKBmZFydnews6w%2F5I71O0gyceG8YQYdK9VbK9XpixQNcb5qAcYryp3MtM3uoGD8bYsXuRN7aq0msqlI9UmdwH8Z89AIvRl7Hulfbm%2FnDgYgZ2MMYXnzodO73W3v37vzbnu4cP%2Bp7Ec4WL1nUOj7JjK888mqLrGUUaXkTG2uV9Nc5wK3DyfucU9%2Fgmtf5hX1Zh9%2BlYMCSIfsp%2Bf2FrB68BDVhVrQq529IOdWfvTBjD3teS%2FBjqkAaNcpFh57W8WtndRt%2F9Cc%2BVnoccrbfjxlcP6Ai7JbMgwz0qJfiNGXb77MOntbb01%2B3nko%2B2Fw7MNPVxYjnOWkgLyyUo3OnKQgrmqpb3DN8o%2F1c0daWX27xhFfZA%2BTMBs3BG%2Fb%2BzTh5dLXTmu%2FZPTTJw%2FKglW8XZIZjgXOiUP24AVKJ6PKvlu8ekCHzWicZzJNI5V%2BdT%2BNUSfKlr10Ne9Cg%2F9df%2Fe&X-Amz-Signature=d2e948b8140fd75f7e9b499f4458e26e4361690ffafe0fdaa8297986d652dbb2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
