---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCQY3UYC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIC7GeGngrAECHO%2Fc9Y%2B00di4SL5LHJZ%2BURh57XmHy9n5AiEA8TWTisO%2BrqiKA1wtdNeBcl9xhesVyra8U6hFgETq4pgq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDBSp%2BW4Cleo6a6CW1SrcA2EcxPvKy7Qty41vtnnlM4TNlHOTM2tSsf%2FvbRjB066rRtpjQbQTnUlOoCCszKXj9x5JIMW4qAgjxFmjd72rrgj8G0OLBJqwuBU07HgmFX3Tbyn988yFw%2F%2BdH2Fwn%2Bi7XDA3e2BuX8owqiH2eo1SeEfCjoVo7th2avsDfNNtS36e4%2FKbSnEJp3AtKeE1mhn3i5odepgCSczSL%2FO4aHNLQ%2FxLUXKIfZpQn%2FJ0cADwEq87WydZY%2FwOiwIM%2F7GVtyM%2F9vhqX6Ium2Sg2ySdeMZW98MH7tOPVan%2Bb%2FnxE2M4FgIp8H9T9rvwxd98t3nBYiK6koACfTGcvAhL4Lr863Du62RfL9NbUauci9FacKgRjDQ5x0wUHmU%2BJVH4UM%2FYtYWk156ROd%2Bp3bldIqcsJdyWF9LkGOQonHGXC9YEQ53vRwTm7LENzZm1w7%2BlsaGq1iQnXUaYzYkcP%2F1zKas8FiHzX1SDtb1OYVwYwLp6KLEosnibQEWaTRmK%2BqrwdvvlG8HJ33tk4g9mlgpWGa8GVhlyGCfjlFxKLimMsTyBpfGCNdu2C0OS%2F1FRZo4RNv%2FAqnhADKyIYl4D2MhINgLrCh2RD0K2yd0r9hBk1FMu7SWKJ7edpBBv7dHKwOSV01o3MNjAjMQGOqUBEnf4MWWt7cQPMx6q8bsDY%2BavuE2tMdNXkZfe%2Fiexji5982nbO6tUrNRngaXgp0jflvodk%2BS8izxTLaUc9Kve4sl0frmuFJ0tLHTDv65M8P1NqsVdzjNgwfVyjUn7r8ezMPpmIbTGVoPYhbgZv7D6c1CjX2IV0GzPXh3nFbEaAZDoqfBV9mBA%2F1CAqvd0qyO5pvYSja4aDNSL%2BU1%2Bcty%2FNUYbMAKv&X-Amz-Signature=6628b25a7cbc289ca695894188a0c09dab14f4a1e3a00db423c9930ce24cd147&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCQY3UYC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIC7GeGngrAECHO%2Fc9Y%2B00di4SL5LHJZ%2BURh57XmHy9n5AiEA8TWTisO%2BrqiKA1wtdNeBcl9xhesVyra8U6hFgETq4pgq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDBSp%2BW4Cleo6a6CW1SrcA2EcxPvKy7Qty41vtnnlM4TNlHOTM2tSsf%2FvbRjB066rRtpjQbQTnUlOoCCszKXj9x5JIMW4qAgjxFmjd72rrgj8G0OLBJqwuBU07HgmFX3Tbyn988yFw%2F%2BdH2Fwn%2Bi7XDA3e2BuX8owqiH2eo1SeEfCjoVo7th2avsDfNNtS36e4%2FKbSnEJp3AtKeE1mhn3i5odepgCSczSL%2FO4aHNLQ%2FxLUXKIfZpQn%2FJ0cADwEq87WydZY%2FwOiwIM%2F7GVtyM%2F9vhqX6Ium2Sg2ySdeMZW98MH7tOPVan%2Bb%2FnxE2M4FgIp8H9T9rvwxd98t3nBYiK6koACfTGcvAhL4Lr863Du62RfL9NbUauci9FacKgRjDQ5x0wUHmU%2BJVH4UM%2FYtYWk156ROd%2Bp3bldIqcsJdyWF9LkGOQonHGXC9YEQ53vRwTm7LENzZm1w7%2BlsaGq1iQnXUaYzYkcP%2F1zKas8FiHzX1SDtb1OYVwYwLp6KLEosnibQEWaTRmK%2BqrwdvvlG8HJ33tk4g9mlgpWGa8GVhlyGCfjlFxKLimMsTyBpfGCNdu2C0OS%2F1FRZo4RNv%2FAqnhADKyIYl4D2MhINgLrCh2RD0K2yd0r9hBk1FMu7SWKJ7edpBBv7dHKwOSV01o3MNjAjMQGOqUBEnf4MWWt7cQPMx6q8bsDY%2BavuE2tMdNXkZfe%2Fiexji5982nbO6tUrNRngaXgp0jflvodk%2BS8izxTLaUc9Kve4sl0frmuFJ0tLHTDv65M8P1NqsVdzjNgwfVyjUn7r8ezMPpmIbTGVoPYhbgZv7D6c1CjX2IV0GzPXh3nFbEaAZDoqfBV9mBA%2F1CAqvd0qyO5pvYSja4aDNSL%2BU1%2Bcty%2FNUYbMAKv&X-Amz-Signature=ebb4822a079b96498dd1a5c091a74b1a897a3417bdf42979febb9bf8ab42f68f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCQY3UYC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIC7GeGngrAECHO%2Fc9Y%2B00di4SL5LHJZ%2BURh57XmHy9n5AiEA8TWTisO%2BrqiKA1wtdNeBcl9xhesVyra8U6hFgETq4pgq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDBSp%2BW4Cleo6a6CW1SrcA2EcxPvKy7Qty41vtnnlM4TNlHOTM2tSsf%2FvbRjB066rRtpjQbQTnUlOoCCszKXj9x5JIMW4qAgjxFmjd72rrgj8G0OLBJqwuBU07HgmFX3Tbyn988yFw%2F%2BdH2Fwn%2Bi7XDA3e2BuX8owqiH2eo1SeEfCjoVo7th2avsDfNNtS36e4%2FKbSnEJp3AtKeE1mhn3i5odepgCSczSL%2FO4aHNLQ%2FxLUXKIfZpQn%2FJ0cADwEq87WydZY%2FwOiwIM%2F7GVtyM%2F9vhqX6Ium2Sg2ySdeMZW98MH7tOPVan%2Bb%2FnxE2M4FgIp8H9T9rvwxd98t3nBYiK6koACfTGcvAhL4Lr863Du62RfL9NbUauci9FacKgRjDQ5x0wUHmU%2BJVH4UM%2FYtYWk156ROd%2Bp3bldIqcsJdyWF9LkGOQonHGXC9YEQ53vRwTm7LENzZm1w7%2BlsaGq1iQnXUaYzYkcP%2F1zKas8FiHzX1SDtb1OYVwYwLp6KLEosnibQEWaTRmK%2BqrwdvvlG8HJ33tk4g9mlgpWGa8GVhlyGCfjlFxKLimMsTyBpfGCNdu2C0OS%2F1FRZo4RNv%2FAqnhADKyIYl4D2MhINgLrCh2RD0K2yd0r9hBk1FMu7SWKJ7edpBBv7dHKwOSV01o3MNjAjMQGOqUBEnf4MWWt7cQPMx6q8bsDY%2BavuE2tMdNXkZfe%2Fiexji5982nbO6tUrNRngaXgp0jflvodk%2BS8izxTLaUc9Kve4sl0frmuFJ0tLHTDv65M8P1NqsVdzjNgwfVyjUn7r8ezMPpmIbTGVoPYhbgZv7D6c1CjX2IV0GzPXh3nFbEaAZDoqfBV9mBA%2F1CAqvd0qyO5pvYSja4aDNSL%2BU1%2Bcty%2FNUYbMAKv&X-Amz-Signature=96cab010bd3bde81066ea9642e2ba66a5882eb408f4c80698a4df3617dd5a885&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
