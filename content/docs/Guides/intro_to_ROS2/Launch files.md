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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S772O7W%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQDHSwnwffU9OjotzE6VTUCMe9qG5GrZ7X60fi3TVxhmuQIgS8pGq%2BL2ew6W7ph9g3SQoatjW28Fnm3OWMcZAzcbU28qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBjnkPvYrw7Xfu5CircA4PZyMde2sg8SEPux%2BgpHc9jUqlckRC%2FmX%2Fb4V5RSS9rQfmEthEzevv3U1EQ4h2SNIfPCpMXxmPwsah%2BSEFzcSYdjIRcVVKq6lfpLfUqHf7QnQ62EPM%2BIHUwNYGBPXLSJzDYq%2FIljS%2Fj6J%2Bz7HAXs3dQFDj0nPUgOG5m6yL7%2FmjjL4jNrEPB%2Ba7kQwxCPHg%2BITgZImiAss2jiF0o%2BWM4W7a8KD0im1IAlGvu3zX1qd8ER%2BR8vp7Lszqv1vfq6QBPtuSvWtMnZrpEeJezb41rbVLqy1ejE3NI%2FGThhmzuOeqym%2Bt%2Bt%2F%2BsGKHiPYIirUJWb3UggEQoVmxOhIRVY8LhkkYxOJUhzXv6vmjAyGpIcWWkk04ZsNlTp%2BR9BScX4jScBQciTmzxxJbiT72W0KJqEA9IKM6QDqbsWxWCCtdyWlJSTZMseN1Y1dwNjD5j04O7kgsVTNyimskOQmjXge0owB2z5AUlWU7Dw%2FPK%2FDfHw5UtCG%2F9c17wJaBDRgMwzkRSgX98HaGhIFgPWmdnJkqOeP0M38c9BolVQlnhi9YEb%2BpxIuQlaLZV04j293qlRvN6cywOirPoUqCBc8tT%2BRP9EwSMoo3cHSGW9z2oAayyziRaAHKx8VW%2BS6XmzNwJMPrr0MAGOqUBHXmMbyBIqJ1TPGXb4ou%2FwP%2FFWa7ieGWkHL4oeCkrTwTg7EherXtHC4JlPsQ3OmfA4hFw%2FRXnyMwHRGEOenR6UEygvItuYKzmVXzyxsHtnB62Vg86yej7esd2Mv2%2FirH1lLDQ0z5jWYJDiGl7Yyl5TBjSPp0rXvkwJiFdHsH35eEI149p%2BSpRgwUP4a5Av%2BSpctgC1LsV4RR1fCyHyPIdlHTjfpX8&X-Amz-Signature=7bc15f4fd43f438bd0b1ec45b8d7897ef20581eedec5c42b0a4047c135ea4a12&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S772O7W%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQDHSwnwffU9OjotzE6VTUCMe9qG5GrZ7X60fi3TVxhmuQIgS8pGq%2BL2ew6W7ph9g3SQoatjW28Fnm3OWMcZAzcbU28qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBjnkPvYrw7Xfu5CircA4PZyMde2sg8SEPux%2BgpHc9jUqlckRC%2FmX%2Fb4V5RSS9rQfmEthEzevv3U1EQ4h2SNIfPCpMXxmPwsah%2BSEFzcSYdjIRcVVKq6lfpLfUqHf7QnQ62EPM%2BIHUwNYGBPXLSJzDYq%2FIljS%2Fj6J%2Bz7HAXs3dQFDj0nPUgOG5m6yL7%2FmjjL4jNrEPB%2Ba7kQwxCPHg%2BITgZImiAss2jiF0o%2BWM4W7a8KD0im1IAlGvu3zX1qd8ER%2BR8vp7Lszqv1vfq6QBPtuSvWtMnZrpEeJezb41rbVLqy1ejE3NI%2FGThhmzuOeqym%2Bt%2Bt%2F%2BsGKHiPYIirUJWb3UggEQoVmxOhIRVY8LhkkYxOJUhzXv6vmjAyGpIcWWkk04ZsNlTp%2BR9BScX4jScBQciTmzxxJbiT72W0KJqEA9IKM6QDqbsWxWCCtdyWlJSTZMseN1Y1dwNjD5j04O7kgsVTNyimskOQmjXge0owB2z5AUlWU7Dw%2FPK%2FDfHw5UtCG%2F9c17wJaBDRgMwzkRSgX98HaGhIFgPWmdnJkqOeP0M38c9BolVQlnhi9YEb%2BpxIuQlaLZV04j293qlRvN6cywOirPoUqCBc8tT%2BRP9EwSMoo3cHSGW9z2oAayyziRaAHKx8VW%2BS6XmzNwJMPrr0MAGOqUBHXmMbyBIqJ1TPGXb4ou%2FwP%2FFWa7ieGWkHL4oeCkrTwTg7EherXtHC4JlPsQ3OmfA4hFw%2FRXnyMwHRGEOenR6UEygvItuYKzmVXzyxsHtnB62Vg86yej7esd2Mv2%2FirH1lLDQ0z5jWYJDiGl7Yyl5TBjSPp0rXvkwJiFdHsH35eEI149p%2BSpRgwUP4a5Av%2BSpctgC1LsV4RR1fCyHyPIdlHTjfpX8&X-Amz-Signature=e81977a3c10fcc2b9ec09a7f2d1cf2bf936995746e4c64f6c916e3ec66811300&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S772O7W%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQDHSwnwffU9OjotzE6VTUCMe9qG5GrZ7X60fi3TVxhmuQIgS8pGq%2BL2ew6W7ph9g3SQoatjW28Fnm3OWMcZAzcbU28qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBjnkPvYrw7Xfu5CircA4PZyMde2sg8SEPux%2BgpHc9jUqlckRC%2FmX%2Fb4V5RSS9rQfmEthEzevv3U1EQ4h2SNIfPCpMXxmPwsah%2BSEFzcSYdjIRcVVKq6lfpLfUqHf7QnQ62EPM%2BIHUwNYGBPXLSJzDYq%2FIljS%2Fj6J%2Bz7HAXs3dQFDj0nPUgOG5m6yL7%2FmjjL4jNrEPB%2Ba7kQwxCPHg%2BITgZImiAss2jiF0o%2BWM4W7a8KD0im1IAlGvu3zX1qd8ER%2BR8vp7Lszqv1vfq6QBPtuSvWtMnZrpEeJezb41rbVLqy1ejE3NI%2FGThhmzuOeqym%2Bt%2Bt%2F%2BsGKHiPYIirUJWb3UggEQoVmxOhIRVY8LhkkYxOJUhzXv6vmjAyGpIcWWkk04ZsNlTp%2BR9BScX4jScBQciTmzxxJbiT72W0KJqEA9IKM6QDqbsWxWCCtdyWlJSTZMseN1Y1dwNjD5j04O7kgsVTNyimskOQmjXge0owB2z5AUlWU7Dw%2FPK%2FDfHw5UtCG%2F9c17wJaBDRgMwzkRSgX98HaGhIFgPWmdnJkqOeP0M38c9BolVQlnhi9YEb%2BpxIuQlaLZV04j293qlRvN6cywOirPoUqCBc8tT%2BRP9EwSMoo3cHSGW9z2oAayyziRaAHKx8VW%2BS6XmzNwJMPrr0MAGOqUBHXmMbyBIqJ1TPGXb4ou%2FwP%2FFWa7ieGWkHL4oeCkrTwTg7EherXtHC4JlPsQ3OmfA4hFw%2FRXnyMwHRGEOenR6UEygvItuYKzmVXzyxsHtnB62Vg86yej7esd2Mv2%2FirH1lLDQ0z5jWYJDiGl7Yyl5TBjSPp0rXvkwJiFdHsH35eEI149p%2BSpRgwUP4a5Av%2BSpctgC1LsV4RR1fCyHyPIdlHTjfpX8&X-Amz-Signature=cabd63135b934fe2b44237b296d6a04e15c110fe389a2a6f1d4582a4cfaa1671&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
