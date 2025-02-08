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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZYVNCVJ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQC8S7AFnVnTeVKhf0d3Zw3zTuoNQ%2F0Sx3W%2BkoJc6EO7iAIhAOUkHwRljyAIN%2F5ovqtiO4494i7y2tyB5PnkS0bO1Dt2KogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvPcQMkUAuyfxUqFgq3AMP5FQZO996Ryl9g0OdfnXfLZACD%2Fx04eKAIrc9aOHd6ETjNXPunXg82nN%2Fb3gCY%2BRABg7%2Fh2Yy3pSE03SGs3pk9y7qs%2FTUZ%2FGAQmkbgMJj9Jwx1ODrXhUgsKB4EuPngbL5MuqlBCB5GTiK%2BNqnS4qWAD7y4xsTyQziAXB0sWqbF5AIYE34iV9cuYRtCaevA2s4ev1SNNsoMPVBjYm6BgarSHf1TKzTcLyGzlFhUc22vdwlLy29%2Bx%2FqKrXtpo2ey8lPglyAZ54zEbShe1yR3N6Q0OdiNLMLQH1ZlrXi6gRMAkcM07y6lFiaevir7cn0Lp2%2Be1JvOQ2drjUd1cUHMN56IBxLPtQ78STAI5O9tGpZ0moCAK1ibS2DXMyONjMX86cgDYJbmgG9qxkDb%2FfGRPAJQezr62toouJ4%2BTScdLaHBEBoY0Hlzx2iIfSQglz8%2B%2BIlxwgrYWwq7JBz0wRgTeA1sLcF4FnzeiAsMdp0H7xiayAVpsKlJ0xidBJA5wVkSVAaP0ydQlTZfPiwd%2BmlAxqU59rb93t28fPhTrDCV7zWxWGDmP%2B9XlQIwnXe7uryqYTREBST6vlN%2F%2FjhfGXTQumwGCldX5zVWSK%2BpT9Fzc%2FM%2FkWNYbiIYkKjNuBaFTDw4J69BjqkAesxfcpkrpeNG5seZA0vZTjzEkdBkNRPxyKx64JwUQd8f4NTQPPXe2X%2FFk%2FdBmXjbYQrWwhstQWdgPldC8rtFN3%2BjQfaGR0t3tRDZxe0QBXmPIKPQs5JCUMwdEL62e1Ft3ACcp5pakLLfgp%2FISVXEYI0Lm3HTIaGr96Yfef4qisL0mnfMWs50m6SOTuC1PI6KdAmaBrSIz3qe4KZrhPV4AAws2Z5&X-Amz-Signature=567b69f5269f67fc38753b4e1e5ff62a21a05f89891b59fcaf1bae2ef984c1c0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZYVNCVJ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQC8S7AFnVnTeVKhf0d3Zw3zTuoNQ%2F0Sx3W%2BkoJc6EO7iAIhAOUkHwRljyAIN%2F5ovqtiO4494i7y2tyB5PnkS0bO1Dt2KogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvPcQMkUAuyfxUqFgq3AMP5FQZO996Ryl9g0OdfnXfLZACD%2Fx04eKAIrc9aOHd6ETjNXPunXg82nN%2Fb3gCY%2BRABg7%2Fh2Yy3pSE03SGs3pk9y7qs%2FTUZ%2FGAQmkbgMJj9Jwx1ODrXhUgsKB4EuPngbL5MuqlBCB5GTiK%2BNqnS4qWAD7y4xsTyQziAXB0sWqbF5AIYE34iV9cuYRtCaevA2s4ev1SNNsoMPVBjYm6BgarSHf1TKzTcLyGzlFhUc22vdwlLy29%2Bx%2FqKrXtpo2ey8lPglyAZ54zEbShe1yR3N6Q0OdiNLMLQH1ZlrXi6gRMAkcM07y6lFiaevir7cn0Lp2%2Be1JvOQ2drjUd1cUHMN56IBxLPtQ78STAI5O9tGpZ0moCAK1ibS2DXMyONjMX86cgDYJbmgG9qxkDb%2FfGRPAJQezr62toouJ4%2BTScdLaHBEBoY0Hlzx2iIfSQglz8%2B%2BIlxwgrYWwq7JBz0wRgTeA1sLcF4FnzeiAsMdp0H7xiayAVpsKlJ0xidBJA5wVkSVAaP0ydQlTZfPiwd%2BmlAxqU59rb93t28fPhTrDCV7zWxWGDmP%2B9XlQIwnXe7uryqYTREBST6vlN%2F%2FjhfGXTQumwGCldX5zVWSK%2BpT9Fzc%2FM%2FkWNYbiIYkKjNuBaFTDw4J69BjqkAesxfcpkrpeNG5seZA0vZTjzEkdBkNRPxyKx64JwUQd8f4NTQPPXe2X%2FFk%2FdBmXjbYQrWwhstQWdgPldC8rtFN3%2BjQfaGR0t3tRDZxe0QBXmPIKPQs5JCUMwdEL62e1Ft3ACcp5pakLLfgp%2FISVXEYI0Lm3HTIaGr96Yfef4qisL0mnfMWs50m6SOTuC1PI6KdAmaBrSIz3qe4KZrhPV4AAws2Z5&X-Amz-Signature=23c18bf456fa0e639c6c3fed928d127d7bcb123a251850f17239be6a48ee959d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZYVNCVJ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQC8S7AFnVnTeVKhf0d3Zw3zTuoNQ%2F0Sx3W%2BkoJc6EO7iAIhAOUkHwRljyAIN%2F5ovqtiO4494i7y2tyB5PnkS0bO1Dt2KogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvPcQMkUAuyfxUqFgq3AMP5FQZO996Ryl9g0OdfnXfLZACD%2Fx04eKAIrc9aOHd6ETjNXPunXg82nN%2Fb3gCY%2BRABg7%2Fh2Yy3pSE03SGs3pk9y7qs%2FTUZ%2FGAQmkbgMJj9Jwx1ODrXhUgsKB4EuPngbL5MuqlBCB5GTiK%2BNqnS4qWAD7y4xsTyQziAXB0sWqbF5AIYE34iV9cuYRtCaevA2s4ev1SNNsoMPVBjYm6BgarSHf1TKzTcLyGzlFhUc22vdwlLy29%2Bx%2FqKrXtpo2ey8lPglyAZ54zEbShe1yR3N6Q0OdiNLMLQH1ZlrXi6gRMAkcM07y6lFiaevir7cn0Lp2%2Be1JvOQ2drjUd1cUHMN56IBxLPtQ78STAI5O9tGpZ0moCAK1ibS2DXMyONjMX86cgDYJbmgG9qxkDb%2FfGRPAJQezr62toouJ4%2BTScdLaHBEBoY0Hlzx2iIfSQglz8%2B%2BIlxwgrYWwq7JBz0wRgTeA1sLcF4FnzeiAsMdp0H7xiayAVpsKlJ0xidBJA5wVkSVAaP0ydQlTZfPiwd%2BmlAxqU59rb93t28fPhTrDCV7zWxWGDmP%2B9XlQIwnXe7uryqYTREBST6vlN%2F%2FjhfGXTQumwGCldX5zVWSK%2BpT9Fzc%2FM%2FkWNYbiIYkKjNuBaFTDw4J69BjqkAesxfcpkrpeNG5seZA0vZTjzEkdBkNRPxyKx64JwUQd8f4NTQPPXe2X%2FFk%2FdBmXjbYQrWwhstQWdgPldC8rtFN3%2BjQfaGR0t3tRDZxe0QBXmPIKPQs5JCUMwdEL62e1Ft3ACcp5pakLLfgp%2FISVXEYI0Lm3HTIaGr96Yfef4qisL0mnfMWs50m6SOTuC1PI6KdAmaBrSIz3qe4KZrhPV4AAws2Z5&X-Amz-Signature=1064d488f8c3e6b60ac535c4f8ee5351a56e524ba55c863eacc13ecb14bb18aa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
