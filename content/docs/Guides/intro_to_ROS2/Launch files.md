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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH6UGAFK%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAWfKM%2BpIusdt2L%2FRpXxbT%2BZj2t2p2F4NKY5wIL6FPoGAiB8oNmVTo9RyGx2GAobm1uzktjHDA8q4AW0VB4noRkecCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmNlqypewwT741AlmKtwDdFz6DwkERKfPQygeLq1G086Nw%2Bwu78McuglWduKpyCCEwm3xOdkB4dAl6aUe%2FBWRffiLUyGZ4scLC6ZKCBoCiRo84EWY56g%2BPKCWq2vOPjAlfHhTQZo83NMyx4FRmajJMSVWkzwcsc7mcMgRFBhBpsHbUbhxZofYnqXBJsOP%2F0IsZAhM3F9R1kWyE%2BPOIFp7Qh4RWd8FRETeMeZbHWE5cgUCSeYPQ%2B1%2F1n2xcRe89y%2FKWrix4mUVqWBtO3iH0fRTc9DD6dXtevJFKl69UpuhP95YX8zPqAyjyb%2F56lVks6OlSj1%2BtX4WtM7nVSrf%2FqX7GNWG7wswFGd4y%2FHdmlrTvMCzEsnzN9OH94rs5463QqEXTGfCiVXQr3W7xrLcX8lSq95LLM1AAw1ogdXFWy2SbaxywFVvTn3G95rwjz%2FC9c29M%2Fnc3wgQuO9jpyRToy9GPhj%2F8aEcJkSxbP4F3SKXa4YaDg%2FCR6tk6ycs3GpcodYunAX3GYEGi5kx8xpB8heotjxqonfgqGocnJk6NUGE9%2FGul5Sfqb5QoTGblA8%2Bgi4oYYPModpqfGmfZJl%2FduSZMSSgTqiiHhGn46tF%2BoTdXFpJJ7jWIePu%2B2yiovGbsprYciEu%2FUDMut3O%2F9ww1ruWvgY6pgH3T0AWFcjakamMSMtYwcaXjADuDWK3gkx4r0qqSDJqQZu%2FW8hpfpBkJrem%2FBpdHx5EzHTsWE1q86ktQ1kcCg2Fd36Iv69mcF01qhuXbToPRhLPVyXLncdWK4NpbbUPSWNT%2FXa7kPFDkVygK0pU13YTO0Q9lxnOdDVjKinqd2feMj5lyigVJ9GbDZ%2F1pIx5LnJRuiaEPq%2Be2Au6RMRQsiQqImwJbKkV&X-Amz-Signature=840e764aad044bb36976f9baa7f2c4dd7aa7639c3302e64f1e0af4ff2136fe49&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH6UGAFK%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAWfKM%2BpIusdt2L%2FRpXxbT%2BZj2t2p2F4NKY5wIL6FPoGAiB8oNmVTo9RyGx2GAobm1uzktjHDA8q4AW0VB4noRkecCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmNlqypewwT741AlmKtwDdFz6DwkERKfPQygeLq1G086Nw%2Bwu78McuglWduKpyCCEwm3xOdkB4dAl6aUe%2FBWRffiLUyGZ4scLC6ZKCBoCiRo84EWY56g%2BPKCWq2vOPjAlfHhTQZo83NMyx4FRmajJMSVWkzwcsc7mcMgRFBhBpsHbUbhxZofYnqXBJsOP%2F0IsZAhM3F9R1kWyE%2BPOIFp7Qh4RWd8FRETeMeZbHWE5cgUCSeYPQ%2B1%2F1n2xcRe89y%2FKWrix4mUVqWBtO3iH0fRTc9DD6dXtevJFKl69UpuhP95YX8zPqAyjyb%2F56lVks6OlSj1%2BtX4WtM7nVSrf%2FqX7GNWG7wswFGd4y%2FHdmlrTvMCzEsnzN9OH94rs5463QqEXTGfCiVXQr3W7xrLcX8lSq95LLM1AAw1ogdXFWy2SbaxywFVvTn3G95rwjz%2FC9c29M%2Fnc3wgQuO9jpyRToy9GPhj%2F8aEcJkSxbP4F3SKXa4YaDg%2FCR6tk6ycs3GpcodYunAX3GYEGi5kx8xpB8heotjxqonfgqGocnJk6NUGE9%2FGul5Sfqb5QoTGblA8%2Bgi4oYYPModpqfGmfZJl%2FduSZMSSgTqiiHhGn46tF%2BoTdXFpJJ7jWIePu%2B2yiovGbsprYciEu%2FUDMut3O%2F9ww1ruWvgY6pgH3T0AWFcjakamMSMtYwcaXjADuDWK3gkx4r0qqSDJqQZu%2FW8hpfpBkJrem%2FBpdHx5EzHTsWE1q86ktQ1kcCg2Fd36Iv69mcF01qhuXbToPRhLPVyXLncdWK4NpbbUPSWNT%2FXa7kPFDkVygK0pU13YTO0Q9lxnOdDVjKinqd2feMj5lyigVJ9GbDZ%2F1pIx5LnJRuiaEPq%2Be2Au6RMRQsiQqImwJbKkV&X-Amz-Signature=de53b0ba9d73506bc6e3ee9d2924dfc60e2ccd53940c884f52c7ef7a8b9e2dad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH6UGAFK%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAWfKM%2BpIusdt2L%2FRpXxbT%2BZj2t2p2F4NKY5wIL6FPoGAiB8oNmVTo9RyGx2GAobm1uzktjHDA8q4AW0VB4noRkecCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmNlqypewwT741AlmKtwDdFz6DwkERKfPQygeLq1G086Nw%2Bwu78McuglWduKpyCCEwm3xOdkB4dAl6aUe%2FBWRffiLUyGZ4scLC6ZKCBoCiRo84EWY56g%2BPKCWq2vOPjAlfHhTQZo83NMyx4FRmajJMSVWkzwcsc7mcMgRFBhBpsHbUbhxZofYnqXBJsOP%2F0IsZAhM3F9R1kWyE%2BPOIFp7Qh4RWd8FRETeMeZbHWE5cgUCSeYPQ%2B1%2F1n2xcRe89y%2FKWrix4mUVqWBtO3iH0fRTc9DD6dXtevJFKl69UpuhP95YX8zPqAyjyb%2F56lVks6OlSj1%2BtX4WtM7nVSrf%2FqX7GNWG7wswFGd4y%2FHdmlrTvMCzEsnzN9OH94rs5463QqEXTGfCiVXQr3W7xrLcX8lSq95LLM1AAw1ogdXFWy2SbaxywFVvTn3G95rwjz%2FC9c29M%2Fnc3wgQuO9jpyRToy9GPhj%2F8aEcJkSxbP4F3SKXa4YaDg%2FCR6tk6ycs3GpcodYunAX3GYEGi5kx8xpB8heotjxqonfgqGocnJk6NUGE9%2FGul5Sfqb5QoTGblA8%2Bgi4oYYPModpqfGmfZJl%2FduSZMSSgTqiiHhGn46tF%2BoTdXFpJJ7jWIePu%2B2yiovGbsprYciEu%2FUDMut3O%2F9ww1ruWvgY6pgH3T0AWFcjakamMSMtYwcaXjADuDWK3gkx4r0qqSDJqQZu%2FW8hpfpBkJrem%2FBpdHx5EzHTsWE1q86ktQ1kcCg2Fd36Iv69mcF01qhuXbToPRhLPVyXLncdWK4NpbbUPSWNT%2FXa7kPFDkVygK0pU13YTO0Q9lxnOdDVjKinqd2feMj5lyigVJ9GbDZ%2F1pIx5LnJRuiaEPq%2Be2Au6RMRQsiQqImwJbKkV&X-Amz-Signature=931f242ba732eb917793f39ecb0b77447f53fb6451fdfa3e4489dedb4fb982e5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
