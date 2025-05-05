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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7OZ2W7B%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcbpD1mSIcuyqX5uWx87e453VQ%2BCtPaX22dojOHxg%2BHAiEA57%2FJvdN7n0fc4RCQVqW1xxRxCk5OD6EVj0UfRiRW4%2FYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJr0NW4xCxowaaGimCrcA1EJmNiMDWobYEiFgbbVBmpsPt7USU0Tf%2BLa3EVwmtDth31NzD8QMtOktLeOkiR58wfJqIQHLamtPdVu0MB923YjyvrDBDsBqX%2FRLEQPj7DbhDNqF8yWsJQfwJINl02OqAdu4owYlNHXSu6SzbgyRFYd2oBC2EJ7g5VHOu6NzdLBfo0Z%2BUKCnuv2eSD%2FS2cylawE%2B1FlSu4EOSc18CtSXL9pXYlUJFnccNZht2DRbdfwT4gc6Glqk4mxznHPGmZaFbFIpGmnnNrvG7me8Nn77ABDOASLnfmhIEKizbFA%2FPR7jECelJNM7E0mTWHkMHk4O%2BPcw0zLIWron0gFEgxRVcB6ZJncfnS9owKpp%2F04VVFYphlWh5jzebtfnHOFLbBN%2FUrJHYdj7NR2mDT3rOZYbH%2BX6bN91Uio56QfRbFvukM9ipNAqmfpt1fIqdlr%2B%2BHSUT%2BTgczY3rKJ6hjoeDA3XpKrc2WAPtBzELHprMd7k1DebDZVxwKbJwGtfrfSUDRo6icBQ4bk%2FqbIxQ4a7Zwp3kDPei66uvZsDHYD5So93dlbKmD%2FsTYUC3woEd25flntge6grV7LVd7AQvemyJDs9xhxbek1hFpquFi%2BEnQlHyeP8XrN2slUTzCyzrElMLbL4sAGOqUBOeMrVM6cc9vfWTfub%2F2Xyya9Z0I10pDlnIzXiHAHGJAxL9ppvn%2BG6Zbl%2BdXS05wr0AfUYrYG30uYFILWJ2rPmdOzfbXE%2F7TCVXRU1PI0XYLi%2BBXlanfjnyIiysNcFaf9OYmB6%2BNnAne4Bg%2FraDXJPrTtGcWFg%2BR5JCUk0YAFZ7pmDs6GyvAFWJ7LwtParDzweIzs1tJWCT%2BOr5PAoA8VIlEk0l8v&X-Amz-Signature=3ce5e549096d91b44b7d6a2bb2818ef0658ee84e45dfe5fe9920dd66aa63f290&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7OZ2W7B%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcbpD1mSIcuyqX5uWx87e453VQ%2BCtPaX22dojOHxg%2BHAiEA57%2FJvdN7n0fc4RCQVqW1xxRxCk5OD6EVj0UfRiRW4%2FYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJr0NW4xCxowaaGimCrcA1EJmNiMDWobYEiFgbbVBmpsPt7USU0Tf%2BLa3EVwmtDth31NzD8QMtOktLeOkiR58wfJqIQHLamtPdVu0MB923YjyvrDBDsBqX%2FRLEQPj7DbhDNqF8yWsJQfwJINl02OqAdu4owYlNHXSu6SzbgyRFYd2oBC2EJ7g5VHOu6NzdLBfo0Z%2BUKCnuv2eSD%2FS2cylawE%2B1FlSu4EOSc18CtSXL9pXYlUJFnccNZht2DRbdfwT4gc6Glqk4mxznHPGmZaFbFIpGmnnNrvG7me8Nn77ABDOASLnfmhIEKizbFA%2FPR7jECelJNM7E0mTWHkMHk4O%2BPcw0zLIWron0gFEgxRVcB6ZJncfnS9owKpp%2F04VVFYphlWh5jzebtfnHOFLbBN%2FUrJHYdj7NR2mDT3rOZYbH%2BX6bN91Uio56QfRbFvukM9ipNAqmfpt1fIqdlr%2B%2BHSUT%2BTgczY3rKJ6hjoeDA3XpKrc2WAPtBzELHprMd7k1DebDZVxwKbJwGtfrfSUDRo6icBQ4bk%2FqbIxQ4a7Zwp3kDPei66uvZsDHYD5So93dlbKmD%2FsTYUC3woEd25flntge6grV7LVd7AQvemyJDs9xhxbek1hFpquFi%2BEnQlHyeP8XrN2slUTzCyzrElMLbL4sAGOqUBOeMrVM6cc9vfWTfub%2F2Xyya9Z0I10pDlnIzXiHAHGJAxL9ppvn%2BG6Zbl%2BdXS05wr0AfUYrYG30uYFILWJ2rPmdOzfbXE%2F7TCVXRU1PI0XYLi%2BBXlanfjnyIiysNcFaf9OYmB6%2BNnAne4Bg%2FraDXJPrTtGcWFg%2BR5JCUk0YAFZ7pmDs6GyvAFWJ7LwtParDzweIzs1tJWCT%2BOr5PAoA8VIlEk0l8v&X-Amz-Signature=ea3136d9684c7096e5061f2e27541927162ded2ec80a951f6787eec3516b7136&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7OZ2W7B%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcbpD1mSIcuyqX5uWx87e453VQ%2BCtPaX22dojOHxg%2BHAiEA57%2FJvdN7n0fc4RCQVqW1xxRxCk5OD6EVj0UfRiRW4%2FYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJr0NW4xCxowaaGimCrcA1EJmNiMDWobYEiFgbbVBmpsPt7USU0Tf%2BLa3EVwmtDth31NzD8QMtOktLeOkiR58wfJqIQHLamtPdVu0MB923YjyvrDBDsBqX%2FRLEQPj7DbhDNqF8yWsJQfwJINl02OqAdu4owYlNHXSu6SzbgyRFYd2oBC2EJ7g5VHOu6NzdLBfo0Z%2BUKCnuv2eSD%2FS2cylawE%2B1FlSu4EOSc18CtSXL9pXYlUJFnccNZht2DRbdfwT4gc6Glqk4mxznHPGmZaFbFIpGmnnNrvG7me8Nn77ABDOASLnfmhIEKizbFA%2FPR7jECelJNM7E0mTWHkMHk4O%2BPcw0zLIWron0gFEgxRVcB6ZJncfnS9owKpp%2F04VVFYphlWh5jzebtfnHOFLbBN%2FUrJHYdj7NR2mDT3rOZYbH%2BX6bN91Uio56QfRbFvukM9ipNAqmfpt1fIqdlr%2B%2BHSUT%2BTgczY3rKJ6hjoeDA3XpKrc2WAPtBzELHprMd7k1DebDZVxwKbJwGtfrfSUDRo6icBQ4bk%2FqbIxQ4a7Zwp3kDPei66uvZsDHYD5So93dlbKmD%2FsTYUC3woEd25flntge6grV7LVd7AQvemyJDs9xhxbek1hFpquFi%2BEnQlHyeP8XrN2slUTzCyzrElMLbL4sAGOqUBOeMrVM6cc9vfWTfub%2F2Xyya9Z0I10pDlnIzXiHAHGJAxL9ppvn%2BG6Zbl%2BdXS05wr0AfUYrYG30uYFILWJ2rPmdOzfbXE%2F7TCVXRU1PI0XYLi%2BBXlanfjnyIiysNcFaf9OYmB6%2BNnAne4Bg%2FraDXJPrTtGcWFg%2BR5JCUk0YAFZ7pmDs6GyvAFWJ7LwtParDzweIzs1tJWCT%2BOr5PAoA8VIlEk0l8v&X-Amz-Signature=a0813db8bd38c63d623ac209c0ba55bfdbe09527ecd94d51412ba6468bfe65a3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
