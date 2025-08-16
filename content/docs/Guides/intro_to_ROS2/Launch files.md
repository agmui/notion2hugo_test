---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVSLUFWE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGHPMpA6%2BVnDKKqaVaVpraKoCvclqbDePKSA5b3W7gfDAiEA2vdKto65APa3UCSJf0w4bR%2F29r%2Bs1iQyE3C19scVoc0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMxjrFlzr07YD5oBoCrcAy%2BMvNweYENSqFonRijLnd1yhAsgo5eGOAHq9K2PQ0ecMRhzkgnRDBIB26jmHJHbYVZQyO9vMOXGivADiCUx7xiX1DQm6YVJaGaUbzrOwE13MKJckxZEFiaV2j6NH9L%2BpRtW%2F%2B9QOlZ1sfShXoa%2FHbCmO6u0EIwkI4F9xT4qdCw3v50E%2BX8ijEbfuVBf0XlYQW1OruwAu7qNHwOVVj8%2BNiRYrKkb7WnspRYUerik4TiyJkVB3LtVWno73aUznDLA4%2Bdhi4Jb8U4%2BrKelYjBb%2FqdWoUHt3QzSKuN9QS1w2c3Gp3nSV82H%2BsABNgVlG%2B1AroN3u88E3C3iSHEky14DLMwMHa39BfldK9IWMlXV1sfVvtz3bbDDTCGXU7WFcXlVZ46xdR3xfhrWpFYCnAxypIvE1POm3Cy2Rnmz9OsgNenOYF9bRl5SiinqY79b8Dct%2Fpv9nPIbNP%2BZ5c6eF9Cok04oHyYFjruCY8QfqOWm89G2c52BHfRqfX8wOYowCjeP59ZfOJvnd8QxjGUAY%2Bqm6ojwsMUgXrU44fNGl3H7aPvUba1negx9sXG3ppzMsv0%2FMbeR9I7q7R5fiUORxZfZSuDIXwTu4tRuU3nRo3VN%2FmPKJlBHYlLpvRcOobfjMKWZgsUGOqUBr0nHsr6lKxyg7Cx1kCA4WymHaOK%2FePv59bsW7Fun5egwLEtv2UkuaJjkx2tGtpUlYiw6M%2FvgatrRdxXv9pVXyvMyDdlotIJgu2x7zsrDnyXFjb7kjEGO4tW6s6cdk324MQ1yflCIfVT8kGI%2B%2FH6d%2FP%2BfJE3j%2BzPa9Y5wOqSqMEl6Zlx8z3%2BhlTUjj4mTEfG0vwPymtAApbDLFwB4zgwM69r4aLln&X-Amz-Signature=c899f467e319f48deecc92a823bb386020d5164f18478bbf5e1fc33bcbaf69ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVSLUFWE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGHPMpA6%2BVnDKKqaVaVpraKoCvclqbDePKSA5b3W7gfDAiEA2vdKto65APa3UCSJf0w4bR%2F29r%2Bs1iQyE3C19scVoc0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMxjrFlzr07YD5oBoCrcAy%2BMvNweYENSqFonRijLnd1yhAsgo5eGOAHq9K2PQ0ecMRhzkgnRDBIB26jmHJHbYVZQyO9vMOXGivADiCUx7xiX1DQm6YVJaGaUbzrOwE13MKJckxZEFiaV2j6NH9L%2BpRtW%2F%2B9QOlZ1sfShXoa%2FHbCmO6u0EIwkI4F9xT4qdCw3v50E%2BX8ijEbfuVBf0XlYQW1OruwAu7qNHwOVVj8%2BNiRYrKkb7WnspRYUerik4TiyJkVB3LtVWno73aUznDLA4%2Bdhi4Jb8U4%2BrKelYjBb%2FqdWoUHt3QzSKuN9QS1w2c3Gp3nSV82H%2BsABNgVlG%2B1AroN3u88E3C3iSHEky14DLMwMHa39BfldK9IWMlXV1sfVvtz3bbDDTCGXU7WFcXlVZ46xdR3xfhrWpFYCnAxypIvE1POm3Cy2Rnmz9OsgNenOYF9bRl5SiinqY79b8Dct%2Fpv9nPIbNP%2BZ5c6eF9Cok04oHyYFjruCY8QfqOWm89G2c52BHfRqfX8wOYowCjeP59ZfOJvnd8QxjGUAY%2Bqm6ojwsMUgXrU44fNGl3H7aPvUba1negx9sXG3ppzMsv0%2FMbeR9I7q7R5fiUORxZfZSuDIXwTu4tRuU3nRo3VN%2FmPKJlBHYlLpvRcOobfjMKWZgsUGOqUBr0nHsr6lKxyg7Cx1kCA4WymHaOK%2FePv59bsW7Fun5egwLEtv2UkuaJjkx2tGtpUlYiw6M%2FvgatrRdxXv9pVXyvMyDdlotIJgu2x7zsrDnyXFjb7kjEGO4tW6s6cdk324MQ1yflCIfVT8kGI%2B%2FH6d%2FP%2BfJE3j%2BzPa9Y5wOqSqMEl6Zlx8z3%2BhlTUjj4mTEfG0vwPymtAApbDLFwB4zgwM69r4aLln&X-Amz-Signature=9c50a631088bf9277763e5e394ff048c4096100df9bc16d3b4bc70d40ac87616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVSLUFWE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGHPMpA6%2BVnDKKqaVaVpraKoCvclqbDePKSA5b3W7gfDAiEA2vdKto65APa3UCSJf0w4bR%2F29r%2Bs1iQyE3C19scVoc0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMxjrFlzr07YD5oBoCrcAy%2BMvNweYENSqFonRijLnd1yhAsgo5eGOAHq9K2PQ0ecMRhzkgnRDBIB26jmHJHbYVZQyO9vMOXGivADiCUx7xiX1DQm6YVJaGaUbzrOwE13MKJckxZEFiaV2j6NH9L%2BpRtW%2F%2B9QOlZ1sfShXoa%2FHbCmO6u0EIwkI4F9xT4qdCw3v50E%2BX8ijEbfuVBf0XlYQW1OruwAu7qNHwOVVj8%2BNiRYrKkb7WnspRYUerik4TiyJkVB3LtVWno73aUznDLA4%2Bdhi4Jb8U4%2BrKelYjBb%2FqdWoUHt3QzSKuN9QS1w2c3Gp3nSV82H%2BsABNgVlG%2B1AroN3u88E3C3iSHEky14DLMwMHa39BfldK9IWMlXV1sfVvtz3bbDDTCGXU7WFcXlVZ46xdR3xfhrWpFYCnAxypIvE1POm3Cy2Rnmz9OsgNenOYF9bRl5SiinqY79b8Dct%2Fpv9nPIbNP%2BZ5c6eF9Cok04oHyYFjruCY8QfqOWm89G2c52BHfRqfX8wOYowCjeP59ZfOJvnd8QxjGUAY%2Bqm6ojwsMUgXrU44fNGl3H7aPvUba1negx9sXG3ppzMsv0%2FMbeR9I7q7R5fiUORxZfZSuDIXwTu4tRuU3nRo3VN%2FmPKJlBHYlLpvRcOobfjMKWZgsUGOqUBr0nHsr6lKxyg7Cx1kCA4WymHaOK%2FePv59bsW7Fun5egwLEtv2UkuaJjkx2tGtpUlYiw6M%2FvgatrRdxXv9pVXyvMyDdlotIJgu2x7zsrDnyXFjb7kjEGO4tW6s6cdk324MQ1yflCIfVT8kGI%2B%2FH6d%2FP%2BfJE3j%2BzPa9Y5wOqSqMEl6Zlx8z3%2BhlTUjj4mTEfG0vwPymtAApbDLFwB4zgwM69r4aLln&X-Amz-Signature=4501c8a22351ae12c769ea62a26ba22bc182669779126737a6b751dfc07fcfbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
