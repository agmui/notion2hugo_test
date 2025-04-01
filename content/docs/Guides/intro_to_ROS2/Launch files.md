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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOCTTD7Y%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIE%2B4KcuxkUBPfc%2Bay3H53UOtfITcLHA7wCnQdNKQB7q2AiEAuWrl8YvuxTBZqzu8tzJNCbX2yV16C7%2F3wqYNHgaBac8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdJsDAy2%2FYC5QfF%2BSrcA0mVpVNnOa9CmpOEMfXIE5x%2BDArbWgYnsAbmdNX47PQxBR3ISNODHT02CZ7Zpa9dc%2FwYN6AU7%2FzYBf81EXXiOCytlUBfuZ70VbbrkUqViEJxhlHlVJ94RQT4BuVttUvdo6PBPR%2F51e2b6RAzQq3445s2ncdVckS7jYodFzxZSeIw27ZTMZB0GsQoLX2ZdgI9TghFeLhAyRPsm8PrEyywSnzmUNrLe5iPH7sD%2F%2FoSu9jhe%2F9196mWJJg%2Fw934JSBFvlzyjlZK9%2B3CMsHU1yN5M3H05wdNVsHCPPpXzqC82y%2Bh30Ci9Ej9ZwrN7WBMnBnmuAB6NrcqRfpI2wWYtasqAKBYL%2FPp28B9rP0plGtvX6b%2BiL6ZnTSiZKSIfy4GimW8WdguKMdeLc2IQkj9LfPJvqqgdpE4DvRDCYWU9chu8E7ybctNwVfCpOxb5m3r%2FocCvIXs9KdQrMM6YNQon9LcYq9S2tAsZB1tsAw5yUX3EbqjzEsIRUVp6CbtNbCIdZo6pK2u0hvzOS6sd81GG6H9Udc65oWYdZrgWMpQvWUIN4CnRJ1NXnCh6vnKp%2B5FubXe5UgLyEkAXHxM3M40XzLsEZiFKH%2F5IZraWT1RBBmh%2BHcKPCrRSp6coMkSii6nMPDWsL8GOqUBGeEQxeCcYHZM0zvGOFeTGiRQNteYg7BpRx%2Fy1NK8lC70vtcULR2stV9rx4iZPXXVmGVQ6yCKHROksDztKdakGOdn4lAGzEsszndM%2B%2BGR8UxiHYH3OCcH67LSkMXP7npnA4ij2%2BJTmX1z8Jho75tMaxC6d%2BwSJy%2Fepc9Heo1mM2VAbK%2F4QujeMsnMkKbzgFmVBsZMC%2BqPF98O%2BiTRFbxx4sGqHcWF&X-Amz-Signature=d612a1457f8cd6559471751a71db056f369b53e3537e57d63cb107a8c4869278&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOCTTD7Y%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIE%2B4KcuxkUBPfc%2Bay3H53UOtfITcLHA7wCnQdNKQB7q2AiEAuWrl8YvuxTBZqzu8tzJNCbX2yV16C7%2F3wqYNHgaBac8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdJsDAy2%2FYC5QfF%2BSrcA0mVpVNnOa9CmpOEMfXIE5x%2BDArbWgYnsAbmdNX47PQxBR3ISNODHT02CZ7Zpa9dc%2FwYN6AU7%2FzYBf81EXXiOCytlUBfuZ70VbbrkUqViEJxhlHlVJ94RQT4BuVttUvdo6PBPR%2F51e2b6RAzQq3445s2ncdVckS7jYodFzxZSeIw27ZTMZB0GsQoLX2ZdgI9TghFeLhAyRPsm8PrEyywSnzmUNrLe5iPH7sD%2F%2FoSu9jhe%2F9196mWJJg%2Fw934JSBFvlzyjlZK9%2B3CMsHU1yN5M3H05wdNVsHCPPpXzqC82y%2Bh30Ci9Ej9ZwrN7WBMnBnmuAB6NrcqRfpI2wWYtasqAKBYL%2FPp28B9rP0plGtvX6b%2BiL6ZnTSiZKSIfy4GimW8WdguKMdeLc2IQkj9LfPJvqqgdpE4DvRDCYWU9chu8E7ybctNwVfCpOxb5m3r%2FocCvIXs9KdQrMM6YNQon9LcYq9S2tAsZB1tsAw5yUX3EbqjzEsIRUVp6CbtNbCIdZo6pK2u0hvzOS6sd81GG6H9Udc65oWYdZrgWMpQvWUIN4CnRJ1NXnCh6vnKp%2B5FubXe5UgLyEkAXHxM3M40XzLsEZiFKH%2F5IZraWT1RBBmh%2BHcKPCrRSp6coMkSii6nMPDWsL8GOqUBGeEQxeCcYHZM0zvGOFeTGiRQNteYg7BpRx%2Fy1NK8lC70vtcULR2stV9rx4iZPXXVmGVQ6yCKHROksDztKdakGOdn4lAGzEsszndM%2B%2BGR8UxiHYH3OCcH67LSkMXP7npnA4ij2%2BJTmX1z8Jho75tMaxC6d%2BwSJy%2Fepc9Heo1mM2VAbK%2F4QujeMsnMkKbzgFmVBsZMC%2BqPF98O%2BiTRFbxx4sGqHcWF&X-Amz-Signature=3619b5dc9e6582cdc0551a5d508bf71227e11bd476fc60452ebbf318a3927006&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOCTTD7Y%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIE%2B4KcuxkUBPfc%2Bay3H53UOtfITcLHA7wCnQdNKQB7q2AiEAuWrl8YvuxTBZqzu8tzJNCbX2yV16C7%2F3wqYNHgaBac8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdJsDAy2%2FYC5QfF%2BSrcA0mVpVNnOa9CmpOEMfXIE5x%2BDArbWgYnsAbmdNX47PQxBR3ISNODHT02CZ7Zpa9dc%2FwYN6AU7%2FzYBf81EXXiOCytlUBfuZ70VbbrkUqViEJxhlHlVJ94RQT4BuVttUvdo6PBPR%2F51e2b6RAzQq3445s2ncdVckS7jYodFzxZSeIw27ZTMZB0GsQoLX2ZdgI9TghFeLhAyRPsm8PrEyywSnzmUNrLe5iPH7sD%2F%2FoSu9jhe%2F9196mWJJg%2Fw934JSBFvlzyjlZK9%2B3CMsHU1yN5M3H05wdNVsHCPPpXzqC82y%2Bh30Ci9Ej9ZwrN7WBMnBnmuAB6NrcqRfpI2wWYtasqAKBYL%2FPp28B9rP0plGtvX6b%2BiL6ZnTSiZKSIfy4GimW8WdguKMdeLc2IQkj9LfPJvqqgdpE4DvRDCYWU9chu8E7ybctNwVfCpOxb5m3r%2FocCvIXs9KdQrMM6YNQon9LcYq9S2tAsZB1tsAw5yUX3EbqjzEsIRUVp6CbtNbCIdZo6pK2u0hvzOS6sd81GG6H9Udc65oWYdZrgWMpQvWUIN4CnRJ1NXnCh6vnKp%2B5FubXe5UgLyEkAXHxM3M40XzLsEZiFKH%2F5IZraWT1RBBmh%2BHcKPCrRSp6coMkSii6nMPDWsL8GOqUBGeEQxeCcYHZM0zvGOFeTGiRQNteYg7BpRx%2Fy1NK8lC70vtcULR2stV9rx4iZPXXVmGVQ6yCKHROksDztKdakGOdn4lAGzEsszndM%2B%2BGR8UxiHYH3OCcH67LSkMXP7npnA4ij2%2BJTmX1z8Jho75tMaxC6d%2BwSJy%2Fepc9Heo1mM2VAbK%2F4QujeMsnMkKbzgFmVBsZMC%2BqPF98O%2BiTRFbxx4sGqHcWF&X-Amz-Signature=caeb1b809c8ea3b2b8f024c5bdad7674110595ec0013a52e92f8edd3a8aacba7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
