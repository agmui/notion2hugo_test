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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGAIYGXR%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdxlWINDVu8iNkLr8aemnIHrk5ZKO34tECiC6L%2B38qgQIhAOcghUfnjOopIMzv1564WeUX3gpQFnK8G1P1F3Us6KEWKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzw%2FgBpU1C9wMxyg04q3APgSwX73%2BMB1vA9kn6HNaSIoZNoSKOl4cGVgsqqhrCF%2B0AbGSrkXYvjjoz6RWVnXEjeJ8hsyMbHk562rhFqfRS9oD6bc5PIQVrMBuVndSS%2FmMT%2Fp4Z6F5UvuRb5b68%2BKUlP7C6P%2BvlzGNpR2Rb%2FJBbVuI9HQs%2FxJNPrfQlitmT0rLPrjNOcW0wDzCNegUQgTwNgM%2FOLQ6IF61ZPhQmMSR45wgY9b8k%2B2Ek4yg4a7oU7jVnmHI0qupNEWli9NrmZHdd1m8SwSox8rXHALEXJhPCImy06K%2Bav7szTI4eN3OgOLAvUjCrIbFEi81ZMLf3kk%2B3GU7Z0pd5I0zNyK214GIkSJ3R8%2B2zPHHW0ZpXF87cQ3HTG300cisOFaej012eYpvsuYS5EyIjeXupj06BbMPID5wwsXWTO2D6fwLuJWiFn6kyyzrpfKNoWlpZiguV4O6KMG9erSe%2FxlXe3Kn%2FDaKQK%2FBdlJUzNbhFkZ%2FKSgxou040Kp2Ut5JDnhZLdU4YMbPMLx4A%2B%2BiH290vWjXY5BS8R8B3r%2BcPB2Y2aor%2FfIXgUUAAKeO1udRzSAkTn17lnDRciY6t8DZbqNwXIvo9xRT%2FO4x3MHv2NwG2bzdN4yfj%2FStzivWxm8amzUN9AgDDMnLu%2FBjqkAZEl%2Bqg0xmRsW7oPQGLWUjW%2Bs0L4xaB%2F%2BCmWConozNp9iaYwh1XfmqJ1U6p%2BLsinq0IIShNyZKkkWBJGhtGxPO5McSLg02oy1fy9GdcRLLcIhR%2BreuQwLUwnPe%2BTq5%2Bz8gecDC5Qct%2FPaj2EnbCY8307VFRE1dXdrnua408%2B87oLmPIQRgIOzPgek%2FM%2BMDJOi7U%2FmYdAlm%2FSRpCxD8LD6DQ4x6ei&X-Amz-Signature=0070baa698eeee7e7b7cc3b04bfcd2482b644e38493a3627770438f0d7ddfcff&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGAIYGXR%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdxlWINDVu8iNkLr8aemnIHrk5ZKO34tECiC6L%2B38qgQIhAOcghUfnjOopIMzv1564WeUX3gpQFnK8G1P1F3Us6KEWKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzw%2FgBpU1C9wMxyg04q3APgSwX73%2BMB1vA9kn6HNaSIoZNoSKOl4cGVgsqqhrCF%2B0AbGSrkXYvjjoz6RWVnXEjeJ8hsyMbHk562rhFqfRS9oD6bc5PIQVrMBuVndSS%2FmMT%2Fp4Z6F5UvuRb5b68%2BKUlP7C6P%2BvlzGNpR2Rb%2FJBbVuI9HQs%2FxJNPrfQlitmT0rLPrjNOcW0wDzCNegUQgTwNgM%2FOLQ6IF61ZPhQmMSR45wgY9b8k%2B2Ek4yg4a7oU7jVnmHI0qupNEWli9NrmZHdd1m8SwSox8rXHALEXJhPCImy06K%2Bav7szTI4eN3OgOLAvUjCrIbFEi81ZMLf3kk%2B3GU7Z0pd5I0zNyK214GIkSJ3R8%2B2zPHHW0ZpXF87cQ3HTG300cisOFaej012eYpvsuYS5EyIjeXupj06BbMPID5wwsXWTO2D6fwLuJWiFn6kyyzrpfKNoWlpZiguV4O6KMG9erSe%2FxlXe3Kn%2FDaKQK%2FBdlJUzNbhFkZ%2FKSgxou040Kp2Ut5JDnhZLdU4YMbPMLx4A%2B%2BiH290vWjXY5BS8R8B3r%2BcPB2Y2aor%2FfIXgUUAAKeO1udRzSAkTn17lnDRciY6t8DZbqNwXIvo9xRT%2FO4x3MHv2NwG2bzdN4yfj%2FStzivWxm8amzUN9AgDDMnLu%2FBjqkAZEl%2Bqg0xmRsW7oPQGLWUjW%2Bs0L4xaB%2F%2BCmWConozNp9iaYwh1XfmqJ1U6p%2BLsinq0IIShNyZKkkWBJGhtGxPO5McSLg02oy1fy9GdcRLLcIhR%2BreuQwLUwnPe%2BTq5%2Bz8gecDC5Qct%2FPaj2EnbCY8307VFRE1dXdrnua408%2B87oLmPIQRgIOzPgek%2FM%2BMDJOi7U%2FmYdAlm%2FSRpCxD8LD6DQ4x6ei&X-Amz-Signature=aabcb8a1de684f9396ed7901a569c5cd919bfa085ddc011c39b48696f247d7fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGAIYGXR%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdxlWINDVu8iNkLr8aemnIHrk5ZKO34tECiC6L%2B38qgQIhAOcghUfnjOopIMzv1564WeUX3gpQFnK8G1P1F3Us6KEWKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzw%2FgBpU1C9wMxyg04q3APgSwX73%2BMB1vA9kn6HNaSIoZNoSKOl4cGVgsqqhrCF%2B0AbGSrkXYvjjoz6RWVnXEjeJ8hsyMbHk562rhFqfRS9oD6bc5PIQVrMBuVndSS%2FmMT%2Fp4Z6F5UvuRb5b68%2BKUlP7C6P%2BvlzGNpR2Rb%2FJBbVuI9HQs%2FxJNPrfQlitmT0rLPrjNOcW0wDzCNegUQgTwNgM%2FOLQ6IF61ZPhQmMSR45wgY9b8k%2B2Ek4yg4a7oU7jVnmHI0qupNEWli9NrmZHdd1m8SwSox8rXHALEXJhPCImy06K%2Bav7szTI4eN3OgOLAvUjCrIbFEi81ZMLf3kk%2B3GU7Z0pd5I0zNyK214GIkSJ3R8%2B2zPHHW0ZpXF87cQ3HTG300cisOFaej012eYpvsuYS5EyIjeXupj06BbMPID5wwsXWTO2D6fwLuJWiFn6kyyzrpfKNoWlpZiguV4O6KMG9erSe%2FxlXe3Kn%2FDaKQK%2FBdlJUzNbhFkZ%2FKSgxou040Kp2Ut5JDnhZLdU4YMbPMLx4A%2B%2BiH290vWjXY5BS8R8B3r%2BcPB2Y2aor%2FfIXgUUAAKeO1udRzSAkTn17lnDRciY6t8DZbqNwXIvo9xRT%2FO4x3MHv2NwG2bzdN4yfj%2FStzivWxm8amzUN9AgDDMnLu%2FBjqkAZEl%2Bqg0xmRsW7oPQGLWUjW%2Bs0L4xaB%2F%2BCmWConozNp9iaYwh1XfmqJ1U6p%2BLsinq0IIShNyZKkkWBJGhtGxPO5McSLg02oy1fy9GdcRLLcIhR%2BreuQwLUwnPe%2BTq5%2Bz8gecDC5Qct%2FPaj2EnbCY8307VFRE1dXdrnua408%2B87oLmPIQRgIOzPgek%2FM%2BMDJOi7U%2FmYdAlm%2FSRpCxD8LD6DQ4x6ei&X-Amz-Signature=d9ed7f4294a07fed493fe821aead535ce0c2dc36d688200b4fd87881a7162cb8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
