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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6B63ZIO%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXoZ%2BIxe0PQjbbLv%2FGNj4jVidDzfYckiskBop0NXcujwIgCTXQLLnLCGYlT1FSRNTuEUn5uiKy0%2BlgCH40T9p7HekqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCvnbRlhZVmKbQCFXCrcA%2BHqrDcB5NLXEBeDKdt5sXgFc84y3REOuyoFHYzmt2Nt%2FFeGkt%2BX5xqNOwEyy26Usl2ZE0M30AxS9lEmy7%2BMDWsPqAuQa1Uhaf4OLXdR%2BIWH%2FPHShjA7Tuo0o%2FDPtqCzgSY3ZNUUM5HJ8rBYCmDpmaZIsjkQwThMWbwEfSTkPhdX%2B%2F6%2FULEDb23p%2B5qh7ta%2BELgFhtWSEhQKzz41IgzHIZdlVKOmlT5edp0vmVSnqw%2FlzqDVcUPhmlKZmRM19Kl5CT9aaYqcjCJg%2FaxBmSbmx%2F%2BcX9VrNMauzATdDKP3Acjv2TuDxEf8%2B4Y12qTbnrGsK7tlmk%2F2ZYuv2MWde69cbOVeuxH6Yn1DR2Dj4uF%2B5vYm4xkCEt3zC%2FzFXk7TcNKZ7rVEPR%2BixtDXozRGzqUWA%2FKaymdiuJBrUetO5ZD80Pni5Rnftn4B39jI1jiPgHmnASfabyNryRMan3gPvwG7uXOJxJEiB0t%2BcqzldfuNQvcaW5IgO19%2B7pK9AUhmuogGDibPrZHwCkr7SS5%2BKlXg63wzYrzAa4r%2B9L0Uq79X1scn91w2YodwHgJnf9fxka4L1zMhigsb%2BIShYz%2FvixB%2BJLo1%2F987IvTOdOURNos412X52p647UQW3MAZBDHsMOvo074GOqUBMYhLSyAV7bFOrnjGfWkl1HVyV2d1qL3E8j90nsgRBLq8RCgQw2YZjakIa5ZWF8Qu8WhjWpHpaOpQ3tebQmhz8wfpiQSWV%2BL6vvwWkUhkw5yHZxN%2Bml%2BUvW3WP0ZDYvz50%2B4o0HYCDVqAMNKBgXVtrmsY2MCrO96086RdRoFwCslEL5VOFrIGBjTGZbEZ2ODM4epKEeIm6oo89YQXf6NHyzJJw1qr&X-Amz-Signature=36c6bc57974a85c0f51300b9bfb21b2b2c5fe3d802fbd8837d3a2c28844f9ff6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6B63ZIO%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXoZ%2BIxe0PQjbbLv%2FGNj4jVidDzfYckiskBop0NXcujwIgCTXQLLnLCGYlT1FSRNTuEUn5uiKy0%2BlgCH40T9p7HekqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCvnbRlhZVmKbQCFXCrcA%2BHqrDcB5NLXEBeDKdt5sXgFc84y3REOuyoFHYzmt2Nt%2FFeGkt%2BX5xqNOwEyy26Usl2ZE0M30AxS9lEmy7%2BMDWsPqAuQa1Uhaf4OLXdR%2BIWH%2FPHShjA7Tuo0o%2FDPtqCzgSY3ZNUUM5HJ8rBYCmDpmaZIsjkQwThMWbwEfSTkPhdX%2B%2F6%2FULEDb23p%2B5qh7ta%2BELgFhtWSEhQKzz41IgzHIZdlVKOmlT5edp0vmVSnqw%2FlzqDVcUPhmlKZmRM19Kl5CT9aaYqcjCJg%2FaxBmSbmx%2F%2BcX9VrNMauzATdDKP3Acjv2TuDxEf8%2B4Y12qTbnrGsK7tlmk%2F2ZYuv2MWde69cbOVeuxH6Yn1DR2Dj4uF%2B5vYm4xkCEt3zC%2FzFXk7TcNKZ7rVEPR%2BixtDXozRGzqUWA%2FKaymdiuJBrUetO5ZD80Pni5Rnftn4B39jI1jiPgHmnASfabyNryRMan3gPvwG7uXOJxJEiB0t%2BcqzldfuNQvcaW5IgO19%2B7pK9AUhmuogGDibPrZHwCkr7SS5%2BKlXg63wzYrzAa4r%2B9L0Uq79X1scn91w2YodwHgJnf9fxka4L1zMhigsb%2BIShYz%2FvixB%2BJLo1%2F987IvTOdOURNos412X52p647UQW3MAZBDHsMOvo074GOqUBMYhLSyAV7bFOrnjGfWkl1HVyV2d1qL3E8j90nsgRBLq8RCgQw2YZjakIa5ZWF8Qu8WhjWpHpaOpQ3tebQmhz8wfpiQSWV%2BL6vvwWkUhkw5yHZxN%2Bml%2BUvW3WP0ZDYvz50%2B4o0HYCDVqAMNKBgXVtrmsY2MCrO96086RdRoFwCslEL5VOFrIGBjTGZbEZ2ODM4epKEeIm6oo89YQXf6NHyzJJw1qr&X-Amz-Signature=d7d0fbb66c4349ec63c1b1db968f7c9677a02b7f09bc850dca642c305d96b392&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6B63ZIO%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXoZ%2BIxe0PQjbbLv%2FGNj4jVidDzfYckiskBop0NXcujwIgCTXQLLnLCGYlT1FSRNTuEUn5uiKy0%2BlgCH40T9p7HekqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCvnbRlhZVmKbQCFXCrcA%2BHqrDcB5NLXEBeDKdt5sXgFc84y3REOuyoFHYzmt2Nt%2FFeGkt%2BX5xqNOwEyy26Usl2ZE0M30AxS9lEmy7%2BMDWsPqAuQa1Uhaf4OLXdR%2BIWH%2FPHShjA7Tuo0o%2FDPtqCzgSY3ZNUUM5HJ8rBYCmDpmaZIsjkQwThMWbwEfSTkPhdX%2B%2F6%2FULEDb23p%2B5qh7ta%2BELgFhtWSEhQKzz41IgzHIZdlVKOmlT5edp0vmVSnqw%2FlzqDVcUPhmlKZmRM19Kl5CT9aaYqcjCJg%2FaxBmSbmx%2F%2BcX9VrNMauzATdDKP3Acjv2TuDxEf8%2B4Y12qTbnrGsK7tlmk%2F2ZYuv2MWde69cbOVeuxH6Yn1DR2Dj4uF%2B5vYm4xkCEt3zC%2FzFXk7TcNKZ7rVEPR%2BixtDXozRGzqUWA%2FKaymdiuJBrUetO5ZD80Pni5Rnftn4B39jI1jiPgHmnASfabyNryRMan3gPvwG7uXOJxJEiB0t%2BcqzldfuNQvcaW5IgO19%2B7pK9AUhmuogGDibPrZHwCkr7SS5%2BKlXg63wzYrzAa4r%2B9L0Uq79X1scn91w2YodwHgJnf9fxka4L1zMhigsb%2BIShYz%2FvixB%2BJLo1%2F987IvTOdOURNos412X52p647UQW3MAZBDHsMOvo074GOqUBMYhLSyAV7bFOrnjGfWkl1HVyV2d1qL3E8j90nsgRBLq8RCgQw2YZjakIa5ZWF8Qu8WhjWpHpaOpQ3tebQmhz8wfpiQSWV%2BL6vvwWkUhkw5yHZxN%2Bml%2BUvW3WP0ZDYvz50%2B4o0HYCDVqAMNKBgXVtrmsY2MCrO96086RdRoFwCslEL5VOFrIGBjTGZbEZ2ODM4epKEeIm6oo89YQXf6NHyzJJw1qr&X-Amz-Signature=4e99c83be26e8d133136fa7deec96c84a6c319e84f7f38c97b739cf6b87ddeba&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
