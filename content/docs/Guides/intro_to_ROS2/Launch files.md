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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TACLR4YF%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T181004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQC7dddbhnAOOF6NufVeOIuBSiJoJlojIg4BYp2wNFUj8wIhAOxSz7dfHmEifnsNQd167BBUEOKmCVp%2Ba0EHIiJIGjIDKv8DCHsQABoMNjM3NDIzMTgzODA1IgxGtYebTpVW9U%2Fl6Q0q3ANvreklh7gKWL7rIn4Aul1e7RxUvpIwhp%2BtUnd2Ahues5Vuhw5Wt2jh1W%2BTUEEoN%2B4%2FGsU936ojWEHOGqjPmd%2BM3Y3qq6W7Wl9d%2BoIuK%2BVgts%2BN5g7jtLuYcLSt4jays%2B2LAD%2FKpt2E%2Fq2n9VTV99NCCji9JEEvNCkCC1UqtXwii0LEd%2BghFgjLIBZ7p%2BMar4J4VLN4XGznCqH0TIrZbDw%2B62unb3UCHRtY3Au3ncRq%2FKLRyouK8meogcrRNAUEIIPf9uT%2B9yiURIcAHOYYSNXhVn2eHSK%2Bx2QujbgbqDN4F3XMT1PK43SR9k5OWuIqAyf9m0QplTQi1pQ%2Fk%2Fq6UR4hADmgTP2YJAhc%2Fn9gesDpR2Oqsftf5aDvvsqyuR6Ml7SHNSyWXHZsDpY1q5XLa2WGM33D0y%2FK%2BTt%2BPFgbeaIkD45gQDe9O1Py%2BMDY4X%2BXn11Xv8teeaUy3p2Zuv97ZUgX83P5PGyrRZn8WE8udHpOD7TQIJhyCVKOrxYfsSuslk7mJiBPIBX4V02T6906f9Tjc4ufmy0J%2FRVVh2LpubTDabptW2DXO86TjtsBtOlQh7oI1B6n3CnqwRI2nigfeJgOfE6bm3WefWoZvalZCZardrLIs%2BFls7pvbJk2pjDg9c29BjqkAabatwr0SBvWT1dzlf1mjYLiMs7MXYgPpYe0xeDdJMUcXUpJNX9ZG4Qn8qPagZrtyJRQltWRtN2gO6tDCyqYUAu5UvGAGIZyFToo9xU9xhB8T65bb2Nl1pZT6UFNz1Ei9ffBx5vbW5sIT%2F5cx9qPgqfJ3HpGZsf54I3L6K6AKV3mGrw%2Fq%2BGmDV%2FyfuDGWQ3R0pRRl3w%2BTwARJ5DSUHxDAR2L5bP2&X-Amz-Signature=8e3527ad6bc086412e5f8c0a3f3bcbb0ae5fa2dead4ccc6720ed42dbee16579f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TACLR4YF%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T181004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQC7dddbhnAOOF6NufVeOIuBSiJoJlojIg4BYp2wNFUj8wIhAOxSz7dfHmEifnsNQd167BBUEOKmCVp%2Ba0EHIiJIGjIDKv8DCHsQABoMNjM3NDIzMTgzODA1IgxGtYebTpVW9U%2Fl6Q0q3ANvreklh7gKWL7rIn4Aul1e7RxUvpIwhp%2BtUnd2Ahues5Vuhw5Wt2jh1W%2BTUEEoN%2B4%2FGsU936ojWEHOGqjPmd%2BM3Y3qq6W7Wl9d%2BoIuK%2BVgts%2BN5g7jtLuYcLSt4jays%2B2LAD%2FKpt2E%2Fq2n9VTV99NCCji9JEEvNCkCC1UqtXwii0LEd%2BghFgjLIBZ7p%2BMar4J4VLN4XGznCqH0TIrZbDw%2B62unb3UCHRtY3Au3ncRq%2FKLRyouK8meogcrRNAUEIIPf9uT%2B9yiURIcAHOYYSNXhVn2eHSK%2Bx2QujbgbqDN4F3XMT1PK43SR9k5OWuIqAyf9m0QplTQi1pQ%2Fk%2Fq6UR4hADmgTP2YJAhc%2Fn9gesDpR2Oqsftf5aDvvsqyuR6Ml7SHNSyWXHZsDpY1q5XLa2WGM33D0y%2FK%2BTt%2BPFgbeaIkD45gQDe9O1Py%2BMDY4X%2BXn11Xv8teeaUy3p2Zuv97ZUgX83P5PGyrRZn8WE8udHpOD7TQIJhyCVKOrxYfsSuslk7mJiBPIBX4V02T6906f9Tjc4ufmy0J%2FRVVh2LpubTDabptW2DXO86TjtsBtOlQh7oI1B6n3CnqwRI2nigfeJgOfE6bm3WefWoZvalZCZardrLIs%2BFls7pvbJk2pjDg9c29BjqkAabatwr0SBvWT1dzlf1mjYLiMs7MXYgPpYe0xeDdJMUcXUpJNX9ZG4Qn8qPagZrtyJRQltWRtN2gO6tDCyqYUAu5UvGAGIZyFToo9xU9xhB8T65bb2Nl1pZT6UFNz1Ei9ffBx5vbW5sIT%2F5cx9qPgqfJ3HpGZsf54I3L6K6AKV3mGrw%2Fq%2BGmDV%2FyfuDGWQ3R0pRRl3w%2BTwARJ5DSUHxDAR2L5bP2&X-Amz-Signature=6a460083a9c0f6ccecd02cadde4d7a3aa98329888833aaba1cee8c55efd102a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TACLR4YF%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T181004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQC7dddbhnAOOF6NufVeOIuBSiJoJlojIg4BYp2wNFUj8wIhAOxSz7dfHmEifnsNQd167BBUEOKmCVp%2Ba0EHIiJIGjIDKv8DCHsQABoMNjM3NDIzMTgzODA1IgxGtYebTpVW9U%2Fl6Q0q3ANvreklh7gKWL7rIn4Aul1e7RxUvpIwhp%2BtUnd2Ahues5Vuhw5Wt2jh1W%2BTUEEoN%2B4%2FGsU936ojWEHOGqjPmd%2BM3Y3qq6W7Wl9d%2BoIuK%2BVgts%2BN5g7jtLuYcLSt4jays%2B2LAD%2FKpt2E%2Fq2n9VTV99NCCji9JEEvNCkCC1UqtXwii0LEd%2BghFgjLIBZ7p%2BMar4J4VLN4XGznCqH0TIrZbDw%2B62unb3UCHRtY3Au3ncRq%2FKLRyouK8meogcrRNAUEIIPf9uT%2B9yiURIcAHOYYSNXhVn2eHSK%2Bx2QujbgbqDN4F3XMT1PK43SR9k5OWuIqAyf9m0QplTQi1pQ%2Fk%2Fq6UR4hADmgTP2YJAhc%2Fn9gesDpR2Oqsftf5aDvvsqyuR6Ml7SHNSyWXHZsDpY1q5XLa2WGM33D0y%2FK%2BTt%2BPFgbeaIkD45gQDe9O1Py%2BMDY4X%2BXn11Xv8teeaUy3p2Zuv97ZUgX83P5PGyrRZn8WE8udHpOD7TQIJhyCVKOrxYfsSuslk7mJiBPIBX4V02T6906f9Tjc4ufmy0J%2FRVVh2LpubTDabptW2DXO86TjtsBtOlQh7oI1B6n3CnqwRI2nigfeJgOfE6bm3WefWoZvalZCZardrLIs%2BFls7pvbJk2pjDg9c29BjqkAabatwr0SBvWT1dzlf1mjYLiMs7MXYgPpYe0xeDdJMUcXUpJNX9ZG4Qn8qPagZrtyJRQltWRtN2gO6tDCyqYUAu5UvGAGIZyFToo9xU9xhB8T65bb2Nl1pZT6UFNz1Ei9ffBx5vbW5sIT%2F5cx9qPgqfJ3HpGZsf54I3L6K6AKV3mGrw%2Fq%2BGmDV%2FyfuDGWQ3R0pRRl3w%2BTwARJ5DSUHxDAR2L5bP2&X-Amz-Signature=e283ea7f833adc33eeb2252acf8eb9274ea0a04e4ed1a5c0d1a49ce81ed964a3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
