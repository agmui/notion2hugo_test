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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K5HD2V2%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIs1igKfOVhPs%2BRkhZMtJGySwtTsvQJ1lVXmooxOlOKgIgBv2Fqy3VK2xMkTKHMRgFRkSdeHB0CuPZGUzM%2BWvwY3gq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJti0jO22yNErQkVLCrcA4aU9N61UROHJsYmwinzzgBltqp2dkAuywWtj9W2xSoeqDd8IxhXc40XMKrCRYT%2FFU7lW7H7tqeAevL97r93wQ9yYOv7NDJBFGCxTCgsQPjsjiAr9W78ae8UDDfEEY4DJVqDL1tgpQscWhsA%2B3FCJpjIvy8F1Wbr6kErgscRMjCVkYC5BITnWiXndeSuWbOM7mb1HNXyvG1G6S%2FeiZCNdXFvs169DTLGuqGk8OHM7fn1pcBzHMgykXj8XAPi5j9UBpA1U2jfIHuRh7FdgcapssFLzB2km51uFG%2B%2FohnH8uKnEk0oDAYlEDpq588dhYEVhlgWx8XbV0VSImw85svzlEx6wJL2mtBR8dNnmZU9o2NGkeI9K%2FOq%2FpzqI04s3D39TKc1qlzKPT4ROUFfopwATf61WZ2toULhhMNGTa7pRuFDg9OSQxkdAmGniSSKn9I4V3zCi8wJUilXY4exdcS1ebH9KMMR1q9TQW2YQrxnGjm%2FZ94Rk2hTZhl%2Bq1DFtEgj5JI3ya6d3MpHZQSHElCgklE11NCAYGrBFzrL8uyEIZffp5otZBTgnZX2nK5Iup9uFItm2LPtcibUjeOn%2Fl8teLYHMOoJiYlogy9zThMyk0yD1WiSIUAzCB%2FZP16eMMvP0sEGOqUBG4DoxlLq22PFV21NP5zmkmBa1YMz8S9nRZaVpF0T%2BO%2BkH75Qsqar4CkeyYxf9S04%2BtMxgR6MvyCBuT2TkBqHEu59SIO9NeQVCpqUUo5UK0q0ryfvmup7H9yR7neCzj6G7xFRfjp1CvF0B8Gvc7tt8ZNInZWD2OAch%2BRVBBg1alQ5kJB61YxtEIbYu4rE8UDZLHcv1wkZ8EntW50YKBhxCUnXj5qk&X-Amz-Signature=8d16a93cde841f8d6e1406e8c976ccceb17457774aff47acf5781be1f0eb2581&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K5HD2V2%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIs1igKfOVhPs%2BRkhZMtJGySwtTsvQJ1lVXmooxOlOKgIgBv2Fqy3VK2xMkTKHMRgFRkSdeHB0CuPZGUzM%2BWvwY3gq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJti0jO22yNErQkVLCrcA4aU9N61UROHJsYmwinzzgBltqp2dkAuywWtj9W2xSoeqDd8IxhXc40XMKrCRYT%2FFU7lW7H7tqeAevL97r93wQ9yYOv7NDJBFGCxTCgsQPjsjiAr9W78ae8UDDfEEY4DJVqDL1tgpQscWhsA%2B3FCJpjIvy8F1Wbr6kErgscRMjCVkYC5BITnWiXndeSuWbOM7mb1HNXyvG1G6S%2FeiZCNdXFvs169DTLGuqGk8OHM7fn1pcBzHMgykXj8XAPi5j9UBpA1U2jfIHuRh7FdgcapssFLzB2km51uFG%2B%2FohnH8uKnEk0oDAYlEDpq588dhYEVhlgWx8XbV0VSImw85svzlEx6wJL2mtBR8dNnmZU9o2NGkeI9K%2FOq%2FpzqI04s3D39TKc1qlzKPT4ROUFfopwATf61WZ2toULhhMNGTa7pRuFDg9OSQxkdAmGniSSKn9I4V3zCi8wJUilXY4exdcS1ebH9KMMR1q9TQW2YQrxnGjm%2FZ94Rk2hTZhl%2Bq1DFtEgj5JI3ya6d3MpHZQSHElCgklE11NCAYGrBFzrL8uyEIZffp5otZBTgnZX2nK5Iup9uFItm2LPtcibUjeOn%2Fl8teLYHMOoJiYlogy9zThMyk0yD1WiSIUAzCB%2FZP16eMMvP0sEGOqUBG4DoxlLq22PFV21NP5zmkmBa1YMz8S9nRZaVpF0T%2BO%2BkH75Qsqar4CkeyYxf9S04%2BtMxgR6MvyCBuT2TkBqHEu59SIO9NeQVCpqUUo5UK0q0ryfvmup7H9yR7neCzj6G7xFRfjp1CvF0B8Gvc7tt8ZNInZWD2OAch%2BRVBBg1alQ5kJB61YxtEIbYu4rE8UDZLHcv1wkZ8EntW50YKBhxCUnXj5qk&X-Amz-Signature=b3a9e3b2d389334eb974131e305f5fbe0bb90c4ba68236f4726ffb33877f13e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K5HD2V2%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIs1igKfOVhPs%2BRkhZMtJGySwtTsvQJ1lVXmooxOlOKgIgBv2Fqy3VK2xMkTKHMRgFRkSdeHB0CuPZGUzM%2BWvwY3gq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJti0jO22yNErQkVLCrcA4aU9N61UROHJsYmwinzzgBltqp2dkAuywWtj9W2xSoeqDd8IxhXc40XMKrCRYT%2FFU7lW7H7tqeAevL97r93wQ9yYOv7NDJBFGCxTCgsQPjsjiAr9W78ae8UDDfEEY4DJVqDL1tgpQscWhsA%2B3FCJpjIvy8F1Wbr6kErgscRMjCVkYC5BITnWiXndeSuWbOM7mb1HNXyvG1G6S%2FeiZCNdXFvs169DTLGuqGk8OHM7fn1pcBzHMgykXj8XAPi5j9UBpA1U2jfIHuRh7FdgcapssFLzB2km51uFG%2B%2FohnH8uKnEk0oDAYlEDpq588dhYEVhlgWx8XbV0VSImw85svzlEx6wJL2mtBR8dNnmZU9o2NGkeI9K%2FOq%2FpzqI04s3D39TKc1qlzKPT4ROUFfopwATf61WZ2toULhhMNGTa7pRuFDg9OSQxkdAmGniSSKn9I4V3zCi8wJUilXY4exdcS1ebH9KMMR1q9TQW2YQrxnGjm%2FZ94Rk2hTZhl%2Bq1DFtEgj5JI3ya6d3MpHZQSHElCgklE11NCAYGrBFzrL8uyEIZffp5otZBTgnZX2nK5Iup9uFItm2LPtcibUjeOn%2Fl8teLYHMOoJiYlogy9zThMyk0yD1WiSIUAzCB%2FZP16eMMvP0sEGOqUBG4DoxlLq22PFV21NP5zmkmBa1YMz8S9nRZaVpF0T%2BO%2BkH75Qsqar4CkeyYxf9S04%2BtMxgR6MvyCBuT2TkBqHEu59SIO9NeQVCpqUUo5UK0q0ryfvmup7H9yR7neCzj6G7xFRfjp1CvF0B8Gvc7tt8ZNInZWD2OAch%2BRVBBg1alQ5kJB61YxtEIbYu4rE8UDZLHcv1wkZ8EntW50YKBhxCUnXj5qk&X-Amz-Signature=ee93345affa2c5fd4211e5371c1e12987fd8120fa6c442391de2cca82cee5d07&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
