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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QMQJVKT%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDB6PN91wkqV18q1Ymq%2BEXH%2Baq0ENCUXxC4RqQc8z2MaQIgUMVMgJdvUfXLWcl3uyUL%2BYAeViYf7fLM0a2owod3AW4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsoIj8NeXqWYw4bMCrcAz0wsZfP1qpsRaYK9CkLW3Q%2BjzyZqaT690f1HcaFsfCihUcvVcN36wQF6mkma7FHhiccn2g1Slq%2BSeZl1Css%2Fo1T%2FYpz5qvZpBrwC0B00JIBr2GZWwUe%2BVC0pU%2Bn%2FizBn3SmYV%2F5kIwL5Ny2ujdZFNgpvE62GOgiGa6E217fNMACsr0HuGll900jH75A%2FbiH2GtHlV8H%2B4EFxlbeuQb2mTi8088jhGxe%2BHzIp8oJIhHNmzozI3EsYUNUkgJfSuJhPyTLxxF%2FMcJ3hKupsfZ%2B3G1XFghm8X2qHWJQ6LNfBnrHq7v%2B8m7KeJr3oOIROnoWADIgsIFbBssNy%2BoFZsjD4VwbZ%2FIhP6ikE%2FPl2lutKm8hGkiqxR802UK4FuDF9sRJVT%2FWQ0tYD3JFZEVBLz3wb9ytHVm8SS0mem8MQ8yTOPITNpZebAf19pbTR%2FH1vJL6x72KJ3Lie62AfcStRR5I4qXoBgxrE%2B69FUjaZDKxrztRZbBccdLH1CDs4vRK34L8bORzw%2BULV0pqYaBKkOaMhTkLcX26UEQJf1ByrCTL7g5kbE7OnjH95MR74OHNNaf4iZxfN7HgnoAw3CEJQbWgDmI7bMryx1gm1PGg%2BSEXKO%2FtRR4bRWgAo6I2kNIuMOGuvr4GOqUBfspW1g0qFhjRH5YmI5ztm%2F7tzgOZayKYfIsRQYvz0YbafdJ99HztJ9%2BclCloGHEVnC7izVgHDyUerkGct4A8fuEoNK6FQmWsyrnhem1C%2BCmGU%2F7%2BgbFSVo3ORBhu%2Ff6SeSOT7HzXnsWeY2xustbLGnhEUdcqIbGftOeTn8omkHzOKPhnJAgGoS1X2P3t8cmt%2B%2BZuxP9sGi79HVch8MEHu%2FhyuqxX&X-Amz-Signature=0494700beac33e328438dc640b8b3c06cd98a65ada48a46c7256d8f660b81fb6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QMQJVKT%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDB6PN91wkqV18q1Ymq%2BEXH%2Baq0ENCUXxC4RqQc8z2MaQIgUMVMgJdvUfXLWcl3uyUL%2BYAeViYf7fLM0a2owod3AW4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsoIj8NeXqWYw4bMCrcAz0wsZfP1qpsRaYK9CkLW3Q%2BjzyZqaT690f1HcaFsfCihUcvVcN36wQF6mkma7FHhiccn2g1Slq%2BSeZl1Css%2Fo1T%2FYpz5qvZpBrwC0B00JIBr2GZWwUe%2BVC0pU%2Bn%2FizBn3SmYV%2F5kIwL5Ny2ujdZFNgpvE62GOgiGa6E217fNMACsr0HuGll900jH75A%2FbiH2GtHlV8H%2B4EFxlbeuQb2mTi8088jhGxe%2BHzIp8oJIhHNmzozI3EsYUNUkgJfSuJhPyTLxxF%2FMcJ3hKupsfZ%2B3G1XFghm8X2qHWJQ6LNfBnrHq7v%2B8m7KeJr3oOIROnoWADIgsIFbBssNy%2BoFZsjD4VwbZ%2FIhP6ikE%2FPl2lutKm8hGkiqxR802UK4FuDF9sRJVT%2FWQ0tYD3JFZEVBLz3wb9ytHVm8SS0mem8MQ8yTOPITNpZebAf19pbTR%2FH1vJL6x72KJ3Lie62AfcStRR5I4qXoBgxrE%2B69FUjaZDKxrztRZbBccdLH1CDs4vRK34L8bORzw%2BULV0pqYaBKkOaMhTkLcX26UEQJf1ByrCTL7g5kbE7OnjH95MR74OHNNaf4iZxfN7HgnoAw3CEJQbWgDmI7bMryx1gm1PGg%2BSEXKO%2FtRR4bRWgAo6I2kNIuMOGuvr4GOqUBfspW1g0qFhjRH5YmI5ztm%2F7tzgOZayKYfIsRQYvz0YbafdJ99HztJ9%2BclCloGHEVnC7izVgHDyUerkGct4A8fuEoNK6FQmWsyrnhem1C%2BCmGU%2F7%2BgbFSVo3ORBhu%2Ff6SeSOT7HzXnsWeY2xustbLGnhEUdcqIbGftOeTn8omkHzOKPhnJAgGoS1X2P3t8cmt%2B%2BZuxP9sGi79HVch8MEHu%2FhyuqxX&X-Amz-Signature=7fdf8417a90ec6d588ebda84f179b09546bf848d71de590fa4f00f957166c05b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QMQJVKT%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDB6PN91wkqV18q1Ymq%2BEXH%2Baq0ENCUXxC4RqQc8z2MaQIgUMVMgJdvUfXLWcl3uyUL%2BYAeViYf7fLM0a2owod3AW4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsoIj8NeXqWYw4bMCrcAz0wsZfP1qpsRaYK9CkLW3Q%2BjzyZqaT690f1HcaFsfCihUcvVcN36wQF6mkma7FHhiccn2g1Slq%2BSeZl1Css%2Fo1T%2FYpz5qvZpBrwC0B00JIBr2GZWwUe%2BVC0pU%2Bn%2FizBn3SmYV%2F5kIwL5Ny2ujdZFNgpvE62GOgiGa6E217fNMACsr0HuGll900jH75A%2FbiH2GtHlV8H%2B4EFxlbeuQb2mTi8088jhGxe%2BHzIp8oJIhHNmzozI3EsYUNUkgJfSuJhPyTLxxF%2FMcJ3hKupsfZ%2B3G1XFghm8X2qHWJQ6LNfBnrHq7v%2B8m7KeJr3oOIROnoWADIgsIFbBssNy%2BoFZsjD4VwbZ%2FIhP6ikE%2FPl2lutKm8hGkiqxR802UK4FuDF9sRJVT%2FWQ0tYD3JFZEVBLz3wb9ytHVm8SS0mem8MQ8yTOPITNpZebAf19pbTR%2FH1vJL6x72KJ3Lie62AfcStRR5I4qXoBgxrE%2B69FUjaZDKxrztRZbBccdLH1CDs4vRK34L8bORzw%2BULV0pqYaBKkOaMhTkLcX26UEQJf1ByrCTL7g5kbE7OnjH95MR74OHNNaf4iZxfN7HgnoAw3CEJQbWgDmI7bMryx1gm1PGg%2BSEXKO%2FtRR4bRWgAo6I2kNIuMOGuvr4GOqUBfspW1g0qFhjRH5YmI5ztm%2F7tzgOZayKYfIsRQYvz0YbafdJ99HztJ9%2BclCloGHEVnC7izVgHDyUerkGct4A8fuEoNK6FQmWsyrnhem1C%2BCmGU%2F7%2BgbFSVo3ORBhu%2Ff6SeSOT7HzXnsWeY2xustbLGnhEUdcqIbGftOeTn8omkHzOKPhnJAgGoS1X2P3t8cmt%2B%2BZuxP9sGi79HVch8MEHu%2FhyuqxX&X-Amz-Signature=bee5778a355fb77355ab49303912097a16ac6a51e8bcf93de38b124446117b02&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
