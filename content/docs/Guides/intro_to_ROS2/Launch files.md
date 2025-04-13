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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKSVDG7Y%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIFjOfyl7g16hc8XUWuX954aGc%2B%2FGurtblbXHEzEI0XozAiEA10EB9yEgwz5KWB4t50xPusNr2aJIzHoZc4D49hZPraYqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMe%2FYZ2g1HnPudHOtSrcA5Mn%2BFBjKPFy7LCLNf%2FLUqiqMS27XlEdA77cE%2FYHjLOUPZG%2BPamHr1mZ9fu0YdqZNbcGXmPnB9d%2Bpmaaj9JPHE%2BaYhX1d%2FehXKxo6MFTWe4cMJce0ZtPCe3ToCiBuObOYBuRmdh9ccxMbiDxuYLPYRobIvXeg8joXMHEE1h1RM%2BXQyqWNCAdGK6Rhy5kXo%2Bt2CVcZQDVnfAzP%2B8D17kD0TKnnFBTGZar8n8roLmNMMAOlj90lA2tgPJw4IXulbfHEgMYo1eQBL%2Bg7Pmi%2F8YDQEOMWPVW8Li96T0wdRFHh8oHRTdQDlnenjCXNNAi2F8KDU%2FSAE8Yp%2Fo%2Fvo2nHHaNXA3%2BZ0JWl5bsGPPpyLQM%2BqNZBVsWGjg8Ey17KdLwv%2B5FRdL2CJ6%2BtNtt5X8%2FGeZLTl4hsRMh5ADr7JZ1YXBknhOefVGKyXvd33dN0A80T%2FghO5yxdQ%2Fd%2FaKmzpRwWg40Ivjf1GpOolFX3e4N3UJb8oQlYUl0Wbrm7Pn3VliQvLtmTvpbZu%2FdfYp0U%2B0wAbkXIlwX%2Fpm9wak9vpKBDSPBej26lKpBw2HmGJGlLIKkYfTmnkiCfq6wnR4lC5y1QSEeLGenLF4r9j1Ty%2Fd%2BNaekl7199LgpjTNM3LrEwyTsMNzT7L8GOqUBizBmPiDd58vs1vw%2FTQxPbdR9Ui0yCPJO8xd%2BxjBePs9rGGFafjA%2BP864byq0eNrQdx5qfaIO%2ByShHmiv7Wuzytskqs7Y3xMGp7KUQyNZUm87eZIXYqqH3BE8QuAZh6XVNXPf1ylyb3fZ8nrRtO5wEqfGPmBGi%2B9idt0DAWMW6EW%2FkqrKcWSXRs9jVTBtqe4oCCCoRm9ptUZF0Fr5Zi59FbB1lTQt&X-Amz-Signature=26ca74d89095fba673ec50aeb82b7d21d1ca740ae4bd8f6ca8d6c0e687f0257a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKSVDG7Y%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIFjOfyl7g16hc8XUWuX954aGc%2B%2FGurtblbXHEzEI0XozAiEA10EB9yEgwz5KWB4t50xPusNr2aJIzHoZc4D49hZPraYqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMe%2FYZ2g1HnPudHOtSrcA5Mn%2BFBjKPFy7LCLNf%2FLUqiqMS27XlEdA77cE%2FYHjLOUPZG%2BPamHr1mZ9fu0YdqZNbcGXmPnB9d%2Bpmaaj9JPHE%2BaYhX1d%2FehXKxo6MFTWe4cMJce0ZtPCe3ToCiBuObOYBuRmdh9ccxMbiDxuYLPYRobIvXeg8joXMHEE1h1RM%2BXQyqWNCAdGK6Rhy5kXo%2Bt2CVcZQDVnfAzP%2B8D17kD0TKnnFBTGZar8n8roLmNMMAOlj90lA2tgPJw4IXulbfHEgMYo1eQBL%2Bg7Pmi%2F8YDQEOMWPVW8Li96T0wdRFHh8oHRTdQDlnenjCXNNAi2F8KDU%2FSAE8Yp%2Fo%2Fvo2nHHaNXA3%2BZ0JWl5bsGPPpyLQM%2BqNZBVsWGjg8Ey17KdLwv%2B5FRdL2CJ6%2BtNtt5X8%2FGeZLTl4hsRMh5ADr7JZ1YXBknhOefVGKyXvd33dN0A80T%2FghO5yxdQ%2Fd%2FaKmzpRwWg40Ivjf1GpOolFX3e4N3UJb8oQlYUl0Wbrm7Pn3VliQvLtmTvpbZu%2FdfYp0U%2B0wAbkXIlwX%2Fpm9wak9vpKBDSPBej26lKpBw2HmGJGlLIKkYfTmnkiCfq6wnR4lC5y1QSEeLGenLF4r9j1Ty%2Fd%2BNaekl7199LgpjTNM3LrEwyTsMNzT7L8GOqUBizBmPiDd58vs1vw%2FTQxPbdR9Ui0yCPJO8xd%2BxjBePs9rGGFafjA%2BP864byq0eNrQdx5qfaIO%2ByShHmiv7Wuzytskqs7Y3xMGp7KUQyNZUm87eZIXYqqH3BE8QuAZh6XVNXPf1ylyb3fZ8nrRtO5wEqfGPmBGi%2B9idt0DAWMW6EW%2FkqrKcWSXRs9jVTBtqe4oCCCoRm9ptUZF0Fr5Zi59FbB1lTQt&X-Amz-Signature=f03b6af39c8bfc52ebb817dd344b1f0d2f75d1348467b2ca5f94e7549a393e10&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKSVDG7Y%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIFjOfyl7g16hc8XUWuX954aGc%2B%2FGurtblbXHEzEI0XozAiEA10EB9yEgwz5KWB4t50xPusNr2aJIzHoZc4D49hZPraYqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMe%2FYZ2g1HnPudHOtSrcA5Mn%2BFBjKPFy7LCLNf%2FLUqiqMS27XlEdA77cE%2FYHjLOUPZG%2BPamHr1mZ9fu0YdqZNbcGXmPnB9d%2Bpmaaj9JPHE%2BaYhX1d%2FehXKxo6MFTWe4cMJce0ZtPCe3ToCiBuObOYBuRmdh9ccxMbiDxuYLPYRobIvXeg8joXMHEE1h1RM%2BXQyqWNCAdGK6Rhy5kXo%2Bt2CVcZQDVnfAzP%2B8D17kD0TKnnFBTGZar8n8roLmNMMAOlj90lA2tgPJw4IXulbfHEgMYo1eQBL%2Bg7Pmi%2F8YDQEOMWPVW8Li96T0wdRFHh8oHRTdQDlnenjCXNNAi2F8KDU%2FSAE8Yp%2Fo%2Fvo2nHHaNXA3%2BZ0JWl5bsGPPpyLQM%2BqNZBVsWGjg8Ey17KdLwv%2B5FRdL2CJ6%2BtNtt5X8%2FGeZLTl4hsRMh5ADr7JZ1YXBknhOefVGKyXvd33dN0A80T%2FghO5yxdQ%2Fd%2FaKmzpRwWg40Ivjf1GpOolFX3e4N3UJb8oQlYUl0Wbrm7Pn3VliQvLtmTvpbZu%2FdfYp0U%2B0wAbkXIlwX%2Fpm9wak9vpKBDSPBej26lKpBw2HmGJGlLIKkYfTmnkiCfq6wnR4lC5y1QSEeLGenLF4r9j1Ty%2Fd%2BNaekl7199LgpjTNM3LrEwyTsMNzT7L8GOqUBizBmPiDd58vs1vw%2FTQxPbdR9Ui0yCPJO8xd%2BxjBePs9rGGFafjA%2BP864byq0eNrQdx5qfaIO%2ByShHmiv7Wuzytskqs7Y3xMGp7KUQyNZUm87eZIXYqqH3BE8QuAZh6XVNXPf1ylyb3fZ8nrRtO5wEqfGPmBGi%2B9idt0DAWMW6EW%2FkqrKcWSXRs9jVTBtqe4oCCCoRm9ptUZF0Fr5Zi59FbB1lTQt&X-Amz-Signature=335ddce0e865c465ab0974ad507468c1d3056971f2a33ecfab8fe863a046b4e4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
