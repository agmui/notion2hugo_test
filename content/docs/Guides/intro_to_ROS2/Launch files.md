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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ2QK2FH%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQC9sR2z6T9SygVTceXKjmyM1Zp4yvqpXZiG2wjjHY5Y5gIhAL%2B%2FpQnaJDebUe1D5k7kFBRzlbrmYFDvcrbhtsBCTE23Kv8DCG0QABoMNjM3NDIzMTgzODA1IgxazUBfPXq0KRiHHVcq3APGiUHWgEfMx%2FL%2B8ZdDIVVqdqTicxwujC4RoCQmz1hsdJi2MikIJUpA131RYVx2ga5Y5VtW%2BZPBGr5REz4DpXzfUfQJRMHY%2BEB%2BJF1OhXxL94DFoh9iV0i%2F8w5sl2pg2TKcQcokdaeqYFFByTY2kMfakW7TiNqY%2B9WLboQs749Vh5T1%2Bkiv1c50Djl%2FI36k4XQ3e0aqdVMOrj%2B0VXFHOcV40N8UfytA0WgwjrxnaiZDneOak1QmyR%2FmNWRVY006NOadRzMDiQG8bSDL%2BztE4qkQj%2F7w217PdIqH55Q%2BL93wyvAY1p0vO8%2BO8prnT1o5XYgBfNG8OzrDznemPTPEp7PeIZIfUM07xVYoByRVnMVph0azUFS%2BkY04mur2VWUfwoGftObSG8hDXLnGxV2ZpVvu%2B33FpBHwiOmAFIXWNQsRz7jhK0t4SPXpvS4ndSCQUQ5SQmt2UEAR6mb7AGiWuKb1EUyQGVh31MAnEGaSZY1QdVdhlhwuWphMjGu81ZEGrVFJyye9zzZtJgP18yZycqWwDbwuI6zelPFvWGueufDHH2mZ%2FAr39xECHHt%2BWEUwJvfqD%2FVunWoeRcw6d%2BPSBVoTGVWqjfu8C29qebznaoLtnj36a%2BwYuJL%2FMT79OzDi%2Fei%2BBjqkAXJaYYJpCFQ%2FRaiIm2D1ljcakIAd75L2usr1WV1HuVnwCVIAcHrjovmdxRlO2g88N%2FiTxi1rUpZJ53PQuww2I5wQt8EzzgyRyIHlJGldLgzqqAQLDPiSrvc19pprREjnHskafXpRXIX5T1wrBGSJ3aMXP09A5Zc%2BvENM0t1z1WqKCPFwEGAHUMnulPgfVE2o8VIeHR50iTIuHosz078w6%2B2ZSARy&X-Amz-Signature=093577aabd24dd649f54ac82c68fd9c407d0c7e9ce36a6eef85cc4791fe34e51&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ2QK2FH%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQC9sR2z6T9SygVTceXKjmyM1Zp4yvqpXZiG2wjjHY5Y5gIhAL%2B%2FpQnaJDebUe1D5k7kFBRzlbrmYFDvcrbhtsBCTE23Kv8DCG0QABoMNjM3NDIzMTgzODA1IgxazUBfPXq0KRiHHVcq3APGiUHWgEfMx%2FL%2B8ZdDIVVqdqTicxwujC4RoCQmz1hsdJi2MikIJUpA131RYVx2ga5Y5VtW%2BZPBGr5REz4DpXzfUfQJRMHY%2BEB%2BJF1OhXxL94DFoh9iV0i%2F8w5sl2pg2TKcQcokdaeqYFFByTY2kMfakW7TiNqY%2B9WLboQs749Vh5T1%2Bkiv1c50Djl%2FI36k4XQ3e0aqdVMOrj%2B0VXFHOcV40N8UfytA0WgwjrxnaiZDneOak1QmyR%2FmNWRVY006NOadRzMDiQG8bSDL%2BztE4qkQj%2F7w217PdIqH55Q%2BL93wyvAY1p0vO8%2BO8prnT1o5XYgBfNG8OzrDznemPTPEp7PeIZIfUM07xVYoByRVnMVph0azUFS%2BkY04mur2VWUfwoGftObSG8hDXLnGxV2ZpVvu%2B33FpBHwiOmAFIXWNQsRz7jhK0t4SPXpvS4ndSCQUQ5SQmt2UEAR6mb7AGiWuKb1EUyQGVh31MAnEGaSZY1QdVdhlhwuWphMjGu81ZEGrVFJyye9zzZtJgP18yZycqWwDbwuI6zelPFvWGueufDHH2mZ%2FAr39xECHHt%2BWEUwJvfqD%2FVunWoeRcw6d%2BPSBVoTGVWqjfu8C29qebznaoLtnj36a%2BwYuJL%2FMT79OzDi%2Fei%2BBjqkAXJaYYJpCFQ%2FRaiIm2D1ljcakIAd75L2usr1WV1HuVnwCVIAcHrjovmdxRlO2g88N%2FiTxi1rUpZJ53PQuww2I5wQt8EzzgyRyIHlJGldLgzqqAQLDPiSrvc19pprREjnHskafXpRXIX5T1wrBGSJ3aMXP09A5Zc%2BvENM0t1z1WqKCPFwEGAHUMnulPgfVE2o8VIeHR50iTIuHosz078w6%2B2ZSARy&X-Amz-Signature=4f53b24abc7780bdcf7ab54f8a467527d9adf58d1b663db304e8ad76b32d369b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ2QK2FH%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQC9sR2z6T9SygVTceXKjmyM1Zp4yvqpXZiG2wjjHY5Y5gIhAL%2B%2FpQnaJDebUe1D5k7kFBRzlbrmYFDvcrbhtsBCTE23Kv8DCG0QABoMNjM3NDIzMTgzODA1IgxazUBfPXq0KRiHHVcq3APGiUHWgEfMx%2FL%2B8ZdDIVVqdqTicxwujC4RoCQmz1hsdJi2MikIJUpA131RYVx2ga5Y5VtW%2BZPBGr5REz4DpXzfUfQJRMHY%2BEB%2BJF1OhXxL94DFoh9iV0i%2F8w5sl2pg2TKcQcokdaeqYFFByTY2kMfakW7TiNqY%2B9WLboQs749Vh5T1%2Bkiv1c50Djl%2FI36k4XQ3e0aqdVMOrj%2B0VXFHOcV40N8UfytA0WgwjrxnaiZDneOak1QmyR%2FmNWRVY006NOadRzMDiQG8bSDL%2BztE4qkQj%2F7w217PdIqH55Q%2BL93wyvAY1p0vO8%2BO8prnT1o5XYgBfNG8OzrDznemPTPEp7PeIZIfUM07xVYoByRVnMVph0azUFS%2BkY04mur2VWUfwoGftObSG8hDXLnGxV2ZpVvu%2B33FpBHwiOmAFIXWNQsRz7jhK0t4SPXpvS4ndSCQUQ5SQmt2UEAR6mb7AGiWuKb1EUyQGVh31MAnEGaSZY1QdVdhlhwuWphMjGu81ZEGrVFJyye9zzZtJgP18yZycqWwDbwuI6zelPFvWGueufDHH2mZ%2FAr39xECHHt%2BWEUwJvfqD%2FVunWoeRcw6d%2BPSBVoTGVWqjfu8C29qebznaoLtnj36a%2BwYuJL%2FMT79OzDi%2Fei%2BBjqkAXJaYYJpCFQ%2FRaiIm2D1ljcakIAd75L2usr1WV1HuVnwCVIAcHrjovmdxRlO2g88N%2FiTxi1rUpZJ53PQuww2I5wQt8EzzgyRyIHlJGldLgzqqAQLDPiSrvc19pprREjnHskafXpRXIX5T1wrBGSJ3aMXP09A5Zc%2BvENM0t1z1WqKCPFwEGAHUMnulPgfVE2o8VIeHR50iTIuHosz078w6%2B2ZSARy&X-Amz-Signature=ff00bb8a969831547b3e03c5c3871ba996180fc1246d05e0faa00808463e9718&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
