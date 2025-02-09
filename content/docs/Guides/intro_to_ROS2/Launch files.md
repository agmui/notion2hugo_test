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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNO7IQYS%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChVZb%2BmNmuwhfiTm%2FdDhXmKFqWNpri01glz7uQJLRdDQIgeRJHmnvDBU4MJvaDiBwOAtjWJ4rri%2BpwFPUjyj2YJFMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGP1k9KmQVlFkbqqCircA8JGyJTa%2BCKsLBpw5R%2FGjXLYQ%2FrL1KBrJAk7WAo7AF6AmJxwce7JE7OIGA%2Fx2u7weZpn5qvAMnfuMQiwnCFf2rJ%2FKvkMSLuPQbTN1xTR2jv8d3fSwZNxjLbECanEud73vkMfTQMB%2BaH8dnmxNwSzbJKoIdqfZMFHUepwn5TbVQJwVJsnOWH6FEzgqISv2abZJW2ZvTevnpJP7nvSaMIu0DHi0UgG4n6qDR%2FmcPYkAg4c2fcOlafRCv5z4oXPg5ho3d6FKtrpWEIRMpm9cVu%2FxgtKwHYNZVr9s0q3m5b6JwzUgFrmL4A%2FtqERy9kpI84ae5GEG%2BMF0U86QLTUGv919ftS1gB5AfeNFXJWJRkp%2FLfjD38osJCQsCQrHkbA95gh5MJu3OZLt9qAW%2Bdgq84%2BaBZcY%2FPtsLlK%2BHhPw36P4xj%2BDLAiKBrLZGbZMZiszC%2BS%2Ba2nn5d396Qs3rVvdMIy3ZB7I%2Fvn2iPxkaDdApilZ0W03aIW2hPtE6Po6MyZl0w0fjd%2B1UWEVjMYF8zXGWFbjiAj9GUS8naAOjdnviSbzjnKqWEg2lXdGreImOxpHgLQHZg5Mx0iE47PjHhxdtf7a7hLAl5To7O4fgU5Su7mm0CNWnkiIwSm%2BfOEKFhpMNm%2BoL0GOqUB7YRycfJ6U5pZVM5OhAMls83uuRqbJwD2BCLY2h7WViNE5mFdS5shH76q0NpeyguPxznMw4fCW6Axtg6xPgorxZ87qWSh2GF6igyEpZVKgJ7fv47r91aoJegFYs5VIbICEpMaGYUtQolLH0gcGORJ04Yeur2sqW%2BIqd6NkdA2duSidgxdttcyqjS4b%2Fl7Wx6szxQVkDiCiKja3wzUmOoAzvX7RFfc&X-Amz-Signature=dcca66cc4d249309ac04ab5c855a5161cf042094e62c8e4981bd7031fb2a7d7d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNO7IQYS%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChVZb%2BmNmuwhfiTm%2FdDhXmKFqWNpri01glz7uQJLRdDQIgeRJHmnvDBU4MJvaDiBwOAtjWJ4rri%2BpwFPUjyj2YJFMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGP1k9KmQVlFkbqqCircA8JGyJTa%2BCKsLBpw5R%2FGjXLYQ%2FrL1KBrJAk7WAo7AF6AmJxwce7JE7OIGA%2Fx2u7weZpn5qvAMnfuMQiwnCFf2rJ%2FKvkMSLuPQbTN1xTR2jv8d3fSwZNxjLbECanEud73vkMfTQMB%2BaH8dnmxNwSzbJKoIdqfZMFHUepwn5TbVQJwVJsnOWH6FEzgqISv2abZJW2ZvTevnpJP7nvSaMIu0DHi0UgG4n6qDR%2FmcPYkAg4c2fcOlafRCv5z4oXPg5ho3d6FKtrpWEIRMpm9cVu%2FxgtKwHYNZVr9s0q3m5b6JwzUgFrmL4A%2FtqERy9kpI84ae5GEG%2BMF0U86QLTUGv919ftS1gB5AfeNFXJWJRkp%2FLfjD38osJCQsCQrHkbA95gh5MJu3OZLt9qAW%2Bdgq84%2BaBZcY%2FPtsLlK%2BHhPw36P4xj%2BDLAiKBrLZGbZMZiszC%2BS%2Ba2nn5d396Qs3rVvdMIy3ZB7I%2Fvn2iPxkaDdApilZ0W03aIW2hPtE6Po6MyZl0w0fjd%2B1UWEVjMYF8zXGWFbjiAj9GUS8naAOjdnviSbzjnKqWEg2lXdGreImOxpHgLQHZg5Mx0iE47PjHhxdtf7a7hLAl5To7O4fgU5Su7mm0CNWnkiIwSm%2BfOEKFhpMNm%2BoL0GOqUB7YRycfJ6U5pZVM5OhAMls83uuRqbJwD2BCLY2h7WViNE5mFdS5shH76q0NpeyguPxznMw4fCW6Axtg6xPgorxZ87qWSh2GF6igyEpZVKgJ7fv47r91aoJegFYs5VIbICEpMaGYUtQolLH0gcGORJ04Yeur2sqW%2BIqd6NkdA2duSidgxdttcyqjS4b%2Fl7Wx6szxQVkDiCiKja3wzUmOoAzvX7RFfc&X-Amz-Signature=7e5c31fcf6fc50a335b3d53fbe3fe0f1e1af11150bd6bc52b7045a4325f098c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNO7IQYS%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChVZb%2BmNmuwhfiTm%2FdDhXmKFqWNpri01glz7uQJLRdDQIgeRJHmnvDBU4MJvaDiBwOAtjWJ4rri%2BpwFPUjyj2YJFMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGP1k9KmQVlFkbqqCircA8JGyJTa%2BCKsLBpw5R%2FGjXLYQ%2FrL1KBrJAk7WAo7AF6AmJxwce7JE7OIGA%2Fx2u7weZpn5qvAMnfuMQiwnCFf2rJ%2FKvkMSLuPQbTN1xTR2jv8d3fSwZNxjLbECanEud73vkMfTQMB%2BaH8dnmxNwSzbJKoIdqfZMFHUepwn5TbVQJwVJsnOWH6FEzgqISv2abZJW2ZvTevnpJP7nvSaMIu0DHi0UgG4n6qDR%2FmcPYkAg4c2fcOlafRCv5z4oXPg5ho3d6FKtrpWEIRMpm9cVu%2FxgtKwHYNZVr9s0q3m5b6JwzUgFrmL4A%2FtqERy9kpI84ae5GEG%2BMF0U86QLTUGv919ftS1gB5AfeNFXJWJRkp%2FLfjD38osJCQsCQrHkbA95gh5MJu3OZLt9qAW%2Bdgq84%2BaBZcY%2FPtsLlK%2BHhPw36P4xj%2BDLAiKBrLZGbZMZiszC%2BS%2Ba2nn5d396Qs3rVvdMIy3ZB7I%2Fvn2iPxkaDdApilZ0W03aIW2hPtE6Po6MyZl0w0fjd%2B1UWEVjMYF8zXGWFbjiAj9GUS8naAOjdnviSbzjnKqWEg2lXdGreImOxpHgLQHZg5Mx0iE47PjHhxdtf7a7hLAl5To7O4fgU5Su7mm0CNWnkiIwSm%2BfOEKFhpMNm%2BoL0GOqUB7YRycfJ6U5pZVM5OhAMls83uuRqbJwD2BCLY2h7WViNE5mFdS5shH76q0NpeyguPxznMw4fCW6Axtg6xPgorxZ87qWSh2GF6igyEpZVKgJ7fv47r91aoJegFYs5VIbICEpMaGYUtQolLH0gcGORJ04Yeur2sqW%2BIqd6NkdA2duSidgxdttcyqjS4b%2Fl7Wx6szxQVkDiCiKja3wzUmOoAzvX7RFfc&X-Amz-Signature=aed95e1a9c705d109a31945ceb74e14ad47ab0788e45d68a16aedfe4144c4b46&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
