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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSTSNWVC%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEsClXvjJqxJLM8bwS3A5%2FQNwt51UAJjrJn6mQk8j79uAiEAqLyCs%2B4hbrAko6CFUCY9QLs%2BZSC0bUYDJ9Z8czZVANIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDOVQ6bTaPr9O8uAyzCrcA%2F7ut2G%2FKQ78APyYiaurrRoU%2F7Oz2sescV70Ouw0afNhpMjClik1R4g04yvs9OeIhp8t3CmIVBYRezydTu3Ss%2FcVPr84yyGEZ2qcAGZUl2JiWrT4UKuCXjte3FZDyurMHseMiRGdqhz6mZY2DCmhWk61tsmis51qQZfjhUtPV%2B7%2FOgt42A%2BGeytRGgAa4b2Q%2FIYhCopT%2BgSv6hUMWC2kAbGEKkcZbmHXtIyr0kiqyy6pXTgoaNeddb0FuvwT7c4Tb3lJ%2FJkW5KE909%2BIpFDJaI2334%2B2yLEHQdQC5Ncir5znDrJ8UKflD6wibAWXg9cd1dHc%2FiPaFkayvp5nnGdcH4Ugp%2BBXQvq%2BqExw0rBx%2Fsdk9VuZ14oYcu2FHxZNcLdg3vOnMpjbS95FhCwAM6dGinyHgn%2FAst8z7E5FIc3mdmd%2F7NMvT40uE%2FGNklzpZmhhOVuWgCp69Qz7sOe%2Bn4hlYCWNPEbIMILSXt7HhQG4zvPCLEFYtdaoCA6v9wqsf7xGvQKfH2wSRrOLiMFtByG9d6rCLp51z4WllYfU7tzzL6TCvFVutXDef4TnbYGNcepSlsMk2hey%2BNMrDmJ54T5hsBsYQb2kqyqntZ9%2BofpWK2jvWKw3VKd4KDjA9TwMMJDumr8GOqUBQywM4BxcDZJinnde2o9Sue3PrdPbkZnQCAJRFf%2FaSC%2BdbxZH3%2FbPuoJze%2BCvK8eCeT74ms6ZGN%2FUWCMoZhNWUkXACOuufScSkOo6FTYTuW9WBq0RLTrJdV9v5Ja0xy5%2Bnpy97%2FNkPbqJCptIXlb%2B%2BASMxHrYl1KU%2Ftc8ihQNlsFPgwlbAhaX6bckV%2FWw1cSuCQCwGGjPAU7dBAGfK8Jf7QSTZ21K&X-Amz-Signature=ccd5ffb4ba707cfba6f713b3d03108b58c65b20b9a882076bfde6f7c0222c2dc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSTSNWVC%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEsClXvjJqxJLM8bwS3A5%2FQNwt51UAJjrJn6mQk8j79uAiEAqLyCs%2B4hbrAko6CFUCY9QLs%2BZSC0bUYDJ9Z8czZVANIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDOVQ6bTaPr9O8uAyzCrcA%2F7ut2G%2FKQ78APyYiaurrRoU%2F7Oz2sescV70Ouw0afNhpMjClik1R4g04yvs9OeIhp8t3CmIVBYRezydTu3Ss%2FcVPr84yyGEZ2qcAGZUl2JiWrT4UKuCXjte3FZDyurMHseMiRGdqhz6mZY2DCmhWk61tsmis51qQZfjhUtPV%2B7%2FOgt42A%2BGeytRGgAa4b2Q%2FIYhCopT%2BgSv6hUMWC2kAbGEKkcZbmHXtIyr0kiqyy6pXTgoaNeddb0FuvwT7c4Tb3lJ%2FJkW5KE909%2BIpFDJaI2334%2B2yLEHQdQC5Ncir5znDrJ8UKflD6wibAWXg9cd1dHc%2FiPaFkayvp5nnGdcH4Ugp%2BBXQvq%2BqExw0rBx%2Fsdk9VuZ14oYcu2FHxZNcLdg3vOnMpjbS95FhCwAM6dGinyHgn%2FAst8z7E5FIc3mdmd%2F7NMvT40uE%2FGNklzpZmhhOVuWgCp69Qz7sOe%2Bn4hlYCWNPEbIMILSXt7HhQG4zvPCLEFYtdaoCA6v9wqsf7xGvQKfH2wSRrOLiMFtByG9d6rCLp51z4WllYfU7tzzL6TCvFVutXDef4TnbYGNcepSlsMk2hey%2BNMrDmJ54T5hsBsYQb2kqyqntZ9%2BofpWK2jvWKw3VKd4KDjA9TwMMJDumr8GOqUBQywM4BxcDZJinnde2o9Sue3PrdPbkZnQCAJRFf%2FaSC%2BdbxZH3%2FbPuoJze%2BCvK8eCeT74ms6ZGN%2FUWCMoZhNWUkXACOuufScSkOo6FTYTuW9WBq0RLTrJdV9v5Ja0xy5%2Bnpy97%2FNkPbqJCptIXlb%2B%2BASMxHrYl1KU%2Ftc8ihQNlsFPgwlbAhaX6bckV%2FWw1cSuCQCwGGjPAU7dBAGfK8Jf7QSTZ21K&X-Amz-Signature=8dc10ff8c9b1401d80be7aa40bf042e02f06cb9add80bbae8f4c7762f0dc59ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSTSNWVC%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEsClXvjJqxJLM8bwS3A5%2FQNwt51UAJjrJn6mQk8j79uAiEAqLyCs%2B4hbrAko6CFUCY9QLs%2BZSC0bUYDJ9Z8czZVANIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDOVQ6bTaPr9O8uAyzCrcA%2F7ut2G%2FKQ78APyYiaurrRoU%2F7Oz2sescV70Ouw0afNhpMjClik1R4g04yvs9OeIhp8t3CmIVBYRezydTu3Ss%2FcVPr84yyGEZ2qcAGZUl2JiWrT4UKuCXjte3FZDyurMHseMiRGdqhz6mZY2DCmhWk61tsmis51qQZfjhUtPV%2B7%2FOgt42A%2BGeytRGgAa4b2Q%2FIYhCopT%2BgSv6hUMWC2kAbGEKkcZbmHXtIyr0kiqyy6pXTgoaNeddb0FuvwT7c4Tb3lJ%2FJkW5KE909%2BIpFDJaI2334%2B2yLEHQdQC5Ncir5znDrJ8UKflD6wibAWXg9cd1dHc%2FiPaFkayvp5nnGdcH4Ugp%2BBXQvq%2BqExw0rBx%2Fsdk9VuZ14oYcu2FHxZNcLdg3vOnMpjbS95FhCwAM6dGinyHgn%2FAst8z7E5FIc3mdmd%2F7NMvT40uE%2FGNklzpZmhhOVuWgCp69Qz7sOe%2Bn4hlYCWNPEbIMILSXt7HhQG4zvPCLEFYtdaoCA6v9wqsf7xGvQKfH2wSRrOLiMFtByG9d6rCLp51z4WllYfU7tzzL6TCvFVutXDef4TnbYGNcepSlsMk2hey%2BNMrDmJ54T5hsBsYQb2kqyqntZ9%2BofpWK2jvWKw3VKd4KDjA9TwMMJDumr8GOqUBQywM4BxcDZJinnde2o9Sue3PrdPbkZnQCAJRFf%2FaSC%2BdbxZH3%2FbPuoJze%2BCvK8eCeT74ms6ZGN%2FUWCMoZhNWUkXACOuufScSkOo6FTYTuW9WBq0RLTrJdV9v5Ja0xy5%2Bnpy97%2FNkPbqJCptIXlb%2B%2BASMxHrYl1KU%2Ftc8ihQNlsFPgwlbAhaX6bckV%2FWw1cSuCQCwGGjPAU7dBAGfK8Jf7QSTZ21K&X-Amz-Signature=2b98563b65c078a87d9b130becc2b1d9d341f776eb92c13313f8273f5efc6263&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
