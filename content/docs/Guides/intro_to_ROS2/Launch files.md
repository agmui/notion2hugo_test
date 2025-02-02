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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLYZRGV6%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T080900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD53wVz%2BooKVdYTJ3CtkeLVYtwkZmfvoyxqjN6uc4JRTQIgJq3UHKMaa8QjS5U9H2UlxymzSOQPLTI9%2FzMmS%2BGNCcwqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYY5HThT4E6eLkgZCrcA2gQUlSZ%2FZ93N0PNUMsOkqShJjWR8NpoajekyW2Dts8dvg%2BAPxTmJFbqc08cs7aNyMNi6%2FhASPB2rpu5rU0nvFEYzv8J%2BJUjtVgDwkwORcBe2nuzwINgwfcYONluSb6m%2FqMO52j1MFbDg3OIV72RFc%2B9u9cNyznl9Z5X%2Bs4TyhP%2B%2Fgu%2F2D1ULbFQ%2BXvb5y0qPRrwNzqd%2F3pRWYfdPyia86owzFYeY91iQ4altLPwWpsZZlhdNe3glfR%2FW9ur5i9S2vmBK4LogMr4OPh49owlwtO4FBNFBPfevNbzMSHu75e0cZ0e1%2BmY0Va4eHD3w%2BcsuQVKUtqon%2BUtIcFgO2f0fNVEyeTDTUD7EpDGUp7waoiEiBaotjHrD1%2FpjSDna8kEafkSnHEnCFeZQhi2IBbZrPZMQBL5ECWJtnEiaje6d%2FQpbQA%2FpEZhuIWrs%2FVxhbdQFIQ9Z5gEhmDHMvfrYu2s9%2BOOG0xPrCfZqBFatvp8yM8wfAIWw4aHdiul6FOYLoDBR2PTZ0Qc8kttdyNBsaThCftGZjev5UebHGjGLGWaUjb9N2tJPf37vcmRbE49j18p%2BLmQ5a6no%2FhNS1sv7LGm61%2BTMmUBmFCA4cPT9DFuBjiSM%2F1Z8nFTZiJiDoGpMJmd%2FLwGOqUBa0GPtYm6lglqsfJUorjBiQrxDCw4SfRuM0E7Us8yLcyLRhBqcQzEhcNQfRQiVcpzY%2Fpv1BcUXQlpZCpR9Tse0NhT9T0iyEIazyRjM%2FoYh8UN25g8GvHoJPtSoWKZNOneoLYryASYQ1dmHy2bzd9yZz%2FkbArmez0vZUkgmBr46vUPr4ZvDXFNEZiCrQ5D8EZU33IWv2g%2BxSHUG657thkM%2BBWUl9DB&X-Amz-Signature=2b68a0215e75c4409514397622a8320b9c77baa4932a5b1a42279971f16c3ce8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLYZRGV6%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T080900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD53wVz%2BooKVdYTJ3CtkeLVYtwkZmfvoyxqjN6uc4JRTQIgJq3UHKMaa8QjS5U9H2UlxymzSOQPLTI9%2FzMmS%2BGNCcwqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYY5HThT4E6eLkgZCrcA2gQUlSZ%2FZ93N0PNUMsOkqShJjWR8NpoajekyW2Dts8dvg%2BAPxTmJFbqc08cs7aNyMNi6%2FhASPB2rpu5rU0nvFEYzv8J%2BJUjtVgDwkwORcBe2nuzwINgwfcYONluSb6m%2FqMO52j1MFbDg3OIV72RFc%2B9u9cNyznl9Z5X%2Bs4TyhP%2B%2Fgu%2F2D1ULbFQ%2BXvb5y0qPRrwNzqd%2F3pRWYfdPyia86owzFYeY91iQ4altLPwWpsZZlhdNe3glfR%2FW9ur5i9S2vmBK4LogMr4OPh49owlwtO4FBNFBPfevNbzMSHu75e0cZ0e1%2BmY0Va4eHD3w%2BcsuQVKUtqon%2BUtIcFgO2f0fNVEyeTDTUD7EpDGUp7waoiEiBaotjHrD1%2FpjSDna8kEafkSnHEnCFeZQhi2IBbZrPZMQBL5ECWJtnEiaje6d%2FQpbQA%2FpEZhuIWrs%2FVxhbdQFIQ9Z5gEhmDHMvfrYu2s9%2BOOG0xPrCfZqBFatvp8yM8wfAIWw4aHdiul6FOYLoDBR2PTZ0Qc8kttdyNBsaThCftGZjev5UebHGjGLGWaUjb9N2tJPf37vcmRbE49j18p%2BLmQ5a6no%2FhNS1sv7LGm61%2BTMmUBmFCA4cPT9DFuBjiSM%2F1Z8nFTZiJiDoGpMJmd%2FLwGOqUBa0GPtYm6lglqsfJUorjBiQrxDCw4SfRuM0E7Us8yLcyLRhBqcQzEhcNQfRQiVcpzY%2Fpv1BcUXQlpZCpR9Tse0NhT9T0iyEIazyRjM%2FoYh8UN25g8GvHoJPtSoWKZNOneoLYryASYQ1dmHy2bzd9yZz%2FkbArmez0vZUkgmBr46vUPr4ZvDXFNEZiCrQ5D8EZU33IWv2g%2BxSHUG657thkM%2BBWUl9DB&X-Amz-Signature=4367e1dfeca7ea1653da571dc94ebbbb7047994b3c2835a2d693c572c1f823f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLYZRGV6%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T080900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD53wVz%2BooKVdYTJ3CtkeLVYtwkZmfvoyxqjN6uc4JRTQIgJq3UHKMaa8QjS5U9H2UlxymzSOQPLTI9%2FzMmS%2BGNCcwqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYY5HThT4E6eLkgZCrcA2gQUlSZ%2FZ93N0PNUMsOkqShJjWR8NpoajekyW2Dts8dvg%2BAPxTmJFbqc08cs7aNyMNi6%2FhASPB2rpu5rU0nvFEYzv8J%2BJUjtVgDwkwORcBe2nuzwINgwfcYONluSb6m%2FqMO52j1MFbDg3OIV72RFc%2B9u9cNyznl9Z5X%2Bs4TyhP%2B%2Fgu%2F2D1ULbFQ%2BXvb5y0qPRrwNzqd%2F3pRWYfdPyia86owzFYeY91iQ4altLPwWpsZZlhdNe3glfR%2FW9ur5i9S2vmBK4LogMr4OPh49owlwtO4FBNFBPfevNbzMSHu75e0cZ0e1%2BmY0Va4eHD3w%2BcsuQVKUtqon%2BUtIcFgO2f0fNVEyeTDTUD7EpDGUp7waoiEiBaotjHrD1%2FpjSDna8kEafkSnHEnCFeZQhi2IBbZrPZMQBL5ECWJtnEiaje6d%2FQpbQA%2FpEZhuIWrs%2FVxhbdQFIQ9Z5gEhmDHMvfrYu2s9%2BOOG0xPrCfZqBFatvp8yM8wfAIWw4aHdiul6FOYLoDBR2PTZ0Qc8kttdyNBsaThCftGZjev5UebHGjGLGWaUjb9N2tJPf37vcmRbE49j18p%2BLmQ5a6no%2FhNS1sv7LGm61%2BTMmUBmFCA4cPT9DFuBjiSM%2F1Z8nFTZiJiDoGpMJmd%2FLwGOqUBa0GPtYm6lglqsfJUorjBiQrxDCw4SfRuM0E7Us8yLcyLRhBqcQzEhcNQfRQiVcpzY%2Fpv1BcUXQlpZCpR9Tse0NhT9T0iyEIazyRjM%2FoYh8UN25g8GvHoJPtSoWKZNOneoLYryASYQ1dmHy2bzd9yZz%2FkbArmez0vZUkgmBr46vUPr4ZvDXFNEZiCrQ5D8EZU33IWv2g%2BxSHUG657thkM%2BBWUl9DB&X-Amz-Signature=f383a49337e70a34a533b3e7b8d86c765d4575f9497033411e6c538c9d267b55&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
