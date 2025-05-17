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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL7WW7VS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0EAB8vkSmWFl%2FAfQbkhHxgCLiUxGtUhYDh122ldUhJAiEA827nL4UfZKrwXPmWfRM7zHDhsvT%2FnTGw17sV%2BTcHcM8q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBpz%2BRqhhcZ1iAyZhircAzlyjaL8RmGD%2FUPkn1SYSrV4XO%2Fv1nRh4goqeSih%2FOrGHV87GhFY9oYSi6tTUb33RKoFJ4Vfxvh9DSHvOYx6%2B%2BVR6fs59FtDqmzyfxFz1K1Fv06w%2F9Fr20XFAYLt8PaMxTWvPKxmPhQpiKLSIXN4HkiNWwp4LPoxIYSfHBlZwFol8FzG4Prs4DwUQHgyYxqk5zZmYT2iB0j6q5QPxarxrkbUEMDfvoucWU9W8%2BASj6TwWcs3j0eVXyxbLqnHUxqXXccRxK9euJHGrLzfHbaxlsDkmGW8dg59x0BcNrAiPOYyqswgiZbbMXdcsYjbz8C9gmVb01AzGvHA9tjtR0KQjdMFWfOLwNo89Z%2F7x4y8NX1wAhfc2gjfYbKEymGRqZsLDHuvas93r4Fx4m4Cql5GMULKksYjopL6QbsuEDiJjLMwZ3m8Q2IK2lpEwC31Px38TYbu6xm9xp9tyCj8F%2FsnBT1MdMx3nf%2BmebGwE6wwynUKqw2PR3KvvMVmiE8bqKJAKFoohHZ%2F8%2BqkeUYlP%2BbKxIDbJEpdJGEekArNG8V0t7zD1ORSb0rfvJCqd6qZmt6CYBw9w7QZd0U1CxaWmgVzpT0xU1cygI%2FPeamE7ZL8YS45R7wsOUbvJePO0ngoMJPMo8EGOqUBXy723pj6UhLNBVigi3UW2g2ZdjgGCtDyGoebUTq5d4OGern0X20FrXYHBE2J%2BzT6FVlPdGD%2BsO4F3T70Snh3XS1hSBBXFGxeeEgX9EzqdnCEAxVZUqZPyviIASj4w%2BaS0KROsV%2B%2Fk4K6ItnHxgKCxAgDCzmIOMswzmX1WKbl%2FDciDcJ7t12I7yxFXwBPRF%2BShinA0F9tzwHC%2B%2F1k%2FwFVyuzMoeIu&X-Amz-Signature=9d6e7ac5dabf1464c8aac1ace6f8c6cfee2568e5f609330fb0bb6030a69583f8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL7WW7VS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0EAB8vkSmWFl%2FAfQbkhHxgCLiUxGtUhYDh122ldUhJAiEA827nL4UfZKrwXPmWfRM7zHDhsvT%2FnTGw17sV%2BTcHcM8q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBpz%2BRqhhcZ1iAyZhircAzlyjaL8RmGD%2FUPkn1SYSrV4XO%2Fv1nRh4goqeSih%2FOrGHV87GhFY9oYSi6tTUb33RKoFJ4Vfxvh9DSHvOYx6%2B%2BVR6fs59FtDqmzyfxFz1K1Fv06w%2F9Fr20XFAYLt8PaMxTWvPKxmPhQpiKLSIXN4HkiNWwp4LPoxIYSfHBlZwFol8FzG4Prs4DwUQHgyYxqk5zZmYT2iB0j6q5QPxarxrkbUEMDfvoucWU9W8%2BASj6TwWcs3j0eVXyxbLqnHUxqXXccRxK9euJHGrLzfHbaxlsDkmGW8dg59x0BcNrAiPOYyqswgiZbbMXdcsYjbz8C9gmVb01AzGvHA9tjtR0KQjdMFWfOLwNo89Z%2F7x4y8NX1wAhfc2gjfYbKEymGRqZsLDHuvas93r4Fx4m4Cql5GMULKksYjopL6QbsuEDiJjLMwZ3m8Q2IK2lpEwC31Px38TYbu6xm9xp9tyCj8F%2FsnBT1MdMx3nf%2BmebGwE6wwynUKqw2PR3KvvMVmiE8bqKJAKFoohHZ%2F8%2BqkeUYlP%2BbKxIDbJEpdJGEekArNG8V0t7zD1ORSb0rfvJCqd6qZmt6CYBw9w7QZd0U1CxaWmgVzpT0xU1cygI%2FPeamE7ZL8YS45R7wsOUbvJePO0ngoMJPMo8EGOqUBXy723pj6UhLNBVigi3UW2g2ZdjgGCtDyGoebUTq5d4OGern0X20FrXYHBE2J%2BzT6FVlPdGD%2BsO4F3T70Snh3XS1hSBBXFGxeeEgX9EzqdnCEAxVZUqZPyviIASj4w%2BaS0KROsV%2B%2Fk4K6ItnHxgKCxAgDCzmIOMswzmX1WKbl%2FDciDcJ7t12I7yxFXwBPRF%2BShinA0F9tzwHC%2B%2F1k%2FwFVyuzMoeIu&X-Amz-Signature=6989d45c44ec70d329888a508561d0999a78a526d33c2e3d0df714eaedbc2668&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL7WW7VS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0EAB8vkSmWFl%2FAfQbkhHxgCLiUxGtUhYDh122ldUhJAiEA827nL4UfZKrwXPmWfRM7zHDhsvT%2FnTGw17sV%2BTcHcM8q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBpz%2BRqhhcZ1iAyZhircAzlyjaL8RmGD%2FUPkn1SYSrV4XO%2Fv1nRh4goqeSih%2FOrGHV87GhFY9oYSi6tTUb33RKoFJ4Vfxvh9DSHvOYx6%2B%2BVR6fs59FtDqmzyfxFz1K1Fv06w%2F9Fr20XFAYLt8PaMxTWvPKxmPhQpiKLSIXN4HkiNWwp4LPoxIYSfHBlZwFol8FzG4Prs4DwUQHgyYxqk5zZmYT2iB0j6q5QPxarxrkbUEMDfvoucWU9W8%2BASj6TwWcs3j0eVXyxbLqnHUxqXXccRxK9euJHGrLzfHbaxlsDkmGW8dg59x0BcNrAiPOYyqswgiZbbMXdcsYjbz8C9gmVb01AzGvHA9tjtR0KQjdMFWfOLwNo89Z%2F7x4y8NX1wAhfc2gjfYbKEymGRqZsLDHuvas93r4Fx4m4Cql5GMULKksYjopL6QbsuEDiJjLMwZ3m8Q2IK2lpEwC31Px38TYbu6xm9xp9tyCj8F%2FsnBT1MdMx3nf%2BmebGwE6wwynUKqw2PR3KvvMVmiE8bqKJAKFoohHZ%2F8%2BqkeUYlP%2BbKxIDbJEpdJGEekArNG8V0t7zD1ORSb0rfvJCqd6qZmt6CYBw9w7QZd0U1CxaWmgVzpT0xU1cygI%2FPeamE7ZL8YS45R7wsOUbvJePO0ngoMJPMo8EGOqUBXy723pj6UhLNBVigi3UW2g2ZdjgGCtDyGoebUTq5d4OGern0X20FrXYHBE2J%2BzT6FVlPdGD%2BsO4F3T70Snh3XS1hSBBXFGxeeEgX9EzqdnCEAxVZUqZPyviIASj4w%2BaS0KROsV%2B%2Fk4K6ItnHxgKCxAgDCzmIOMswzmX1WKbl%2FDciDcJ7t12I7yxFXwBPRF%2BShinA0F9tzwHC%2B%2F1k%2FwFVyuzMoeIu&X-Amz-Signature=1e7a0a2091b8d2f3c32b5a08949283b99b90f57a65ce8e9d7a5438901712844a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
