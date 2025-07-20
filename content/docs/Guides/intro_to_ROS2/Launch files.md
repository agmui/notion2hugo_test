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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT67AL5H%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvaMYYo03TU4SLcM8GLVkE9u%2BJiUjk3q6Vjv%2B5sxzHqAiByu0nUm3cPDqGDW8yDTrGM5WvagxzUQTlckdZVyanqYCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNOIGyHWw9jB8EWKLKtwD%2B%2Fh7DN%2BTSWzMyYIQAZ5aag%2F2K8Xq6et8zdoxFzgEfAx%2BkIHrFHpqdtBUSdKshH80h%2FHvNamHeXt7Qmm7O9gmaSmu5OC1I6612Bvn08Eqe2P5c9tcvYZjjmLVcpWYvqU4ppsNq5Wvc6fHbxVDEZSOZu33Gok%2FHmaHSeEPnu3yFzWLftSkGdLUjWiq5DVF2FgpkGArpq1xiu0f6NSO4fJJMRNHHampsiGsmU5OvZslIopsCLCX2h%2BXtE4zNn9pAuic8ennYyvi39eh7db2J%2FDwIXxzPW9ORZf6Tpu15ZSFktY1G9oyVe5E3c7jjMAyqtV1FH7YzxU7xKfpfRoKZ5ULSqkwS6UkVPzOEkFG%2FWOXKCtxIG%2FTy1gyuXJGLc%2BXfFWIBXiyw2WQatts%2BNzvZciyEe2iCgw4OwgSgxWW7gSNLVqRuyw1oO8RQmzuYZIFwxltEhEeP0VRPgnVA3CInjuqSJzudln1uBQOzU2mQUxqunWvRfkUa98gj6H7QkOA%2F8D2BB52UeQ%2B%2FJ0aG9uQrYByjn%2FSPmfHnqZYuKfHwLsleQXwQvzwT%2BZKxYPLkFQF16Iu81Rpt9DU01g6brgUGR77qPgW7%2BTtJPwS0vZu0PYkyDG%2FJhIGdtB3z63BBnQwoeDzwwY6pgG7mPmCAxXduy5NgbRKcdgfbwNCJFP516lRIsKP3LXo6y%2B9idi4k%2Bu8Swy6Gjq7AFP2jHrnqL6z%2FPPj0fxBsVN5JzIGdrCd9Ldy9SxC1I0bc1HQOBSke27suIpCy66f9fRb846W%2F48mv53ELCcIHnr%2FDgAYEV457E9J6garUSEzl5YKjDQlE2RtC2PfGOdxGB1ghl4llbQofN2Pz8TKn%2BNGkYTuU%2Fh1&X-Amz-Signature=cbb347f61840aec1da317a4bdcc876e56226f88c9400e9149af49d3bc2d20a50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT67AL5H%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvaMYYo03TU4SLcM8GLVkE9u%2BJiUjk3q6Vjv%2B5sxzHqAiByu0nUm3cPDqGDW8yDTrGM5WvagxzUQTlckdZVyanqYCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNOIGyHWw9jB8EWKLKtwD%2B%2Fh7DN%2BTSWzMyYIQAZ5aag%2F2K8Xq6et8zdoxFzgEfAx%2BkIHrFHpqdtBUSdKshH80h%2FHvNamHeXt7Qmm7O9gmaSmu5OC1I6612Bvn08Eqe2P5c9tcvYZjjmLVcpWYvqU4ppsNq5Wvc6fHbxVDEZSOZu33Gok%2FHmaHSeEPnu3yFzWLftSkGdLUjWiq5DVF2FgpkGArpq1xiu0f6NSO4fJJMRNHHampsiGsmU5OvZslIopsCLCX2h%2BXtE4zNn9pAuic8ennYyvi39eh7db2J%2FDwIXxzPW9ORZf6Tpu15ZSFktY1G9oyVe5E3c7jjMAyqtV1FH7YzxU7xKfpfRoKZ5ULSqkwS6UkVPzOEkFG%2FWOXKCtxIG%2FTy1gyuXJGLc%2BXfFWIBXiyw2WQatts%2BNzvZciyEe2iCgw4OwgSgxWW7gSNLVqRuyw1oO8RQmzuYZIFwxltEhEeP0VRPgnVA3CInjuqSJzudln1uBQOzU2mQUxqunWvRfkUa98gj6H7QkOA%2F8D2BB52UeQ%2B%2FJ0aG9uQrYByjn%2FSPmfHnqZYuKfHwLsleQXwQvzwT%2BZKxYPLkFQF16Iu81Rpt9DU01g6brgUGR77qPgW7%2BTtJPwS0vZu0PYkyDG%2FJhIGdtB3z63BBnQwoeDzwwY6pgG7mPmCAxXduy5NgbRKcdgfbwNCJFP516lRIsKP3LXo6y%2B9idi4k%2Bu8Swy6Gjq7AFP2jHrnqL6z%2FPPj0fxBsVN5JzIGdrCd9Ldy9SxC1I0bc1HQOBSke27suIpCy66f9fRb846W%2F48mv53ELCcIHnr%2FDgAYEV457E9J6garUSEzl5YKjDQlE2RtC2PfGOdxGB1ghl4llbQofN2Pz8TKn%2BNGkYTuU%2Fh1&X-Amz-Signature=52394a59346f376d75dde56abc6cb0d57cc680d7ae68cefaf0881c8d4bc8e598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT67AL5H%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvaMYYo03TU4SLcM8GLVkE9u%2BJiUjk3q6Vjv%2B5sxzHqAiByu0nUm3cPDqGDW8yDTrGM5WvagxzUQTlckdZVyanqYCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNOIGyHWw9jB8EWKLKtwD%2B%2Fh7DN%2BTSWzMyYIQAZ5aag%2F2K8Xq6et8zdoxFzgEfAx%2BkIHrFHpqdtBUSdKshH80h%2FHvNamHeXt7Qmm7O9gmaSmu5OC1I6612Bvn08Eqe2P5c9tcvYZjjmLVcpWYvqU4ppsNq5Wvc6fHbxVDEZSOZu33Gok%2FHmaHSeEPnu3yFzWLftSkGdLUjWiq5DVF2FgpkGArpq1xiu0f6NSO4fJJMRNHHampsiGsmU5OvZslIopsCLCX2h%2BXtE4zNn9pAuic8ennYyvi39eh7db2J%2FDwIXxzPW9ORZf6Tpu15ZSFktY1G9oyVe5E3c7jjMAyqtV1FH7YzxU7xKfpfRoKZ5ULSqkwS6UkVPzOEkFG%2FWOXKCtxIG%2FTy1gyuXJGLc%2BXfFWIBXiyw2WQatts%2BNzvZciyEe2iCgw4OwgSgxWW7gSNLVqRuyw1oO8RQmzuYZIFwxltEhEeP0VRPgnVA3CInjuqSJzudln1uBQOzU2mQUxqunWvRfkUa98gj6H7QkOA%2F8D2BB52UeQ%2B%2FJ0aG9uQrYByjn%2FSPmfHnqZYuKfHwLsleQXwQvzwT%2BZKxYPLkFQF16Iu81Rpt9DU01g6brgUGR77qPgW7%2BTtJPwS0vZu0PYkyDG%2FJhIGdtB3z63BBnQwoeDzwwY6pgG7mPmCAxXduy5NgbRKcdgfbwNCJFP516lRIsKP3LXo6y%2B9idi4k%2Bu8Swy6Gjq7AFP2jHrnqL6z%2FPPj0fxBsVN5JzIGdrCd9Ldy9SxC1I0bc1HQOBSke27suIpCy66f9fRb846W%2F48mv53ELCcIHnr%2FDgAYEV457E9J6garUSEzl5YKjDQlE2RtC2PfGOdxGB1ghl4llbQofN2Pz8TKn%2BNGkYTuU%2Fh1&X-Amz-Signature=d318581e4becc5ad307e567b1278953f59c1f2f94dd66fa56ae8484da15ef99e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
