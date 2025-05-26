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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBPSE53E%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCNpDzgasp1BwCWpf1zQSFO12BUYxU2RkjCLV3ZLMaYlwIgA7SnvOQT%2BDOZSrV4lqaG28uKv7Cv7g6doyFKNcRXg8cq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDLAGZUJsj2CPhNgBbCrcAyTk3W5cbY6pjM6AQ8Hj4R2GkpW0j99anrCzBZ2INcRW9oyBnfELP%2BsSk%2FQtfUU9Wf5dFxQnnazPmVVkN6u8LbQc4zAj2ZnOMrZjmNHNQ0U5T4YoDuamGO4NxkoOqxto4MeNxeqkPL7NJvlxN9tYUZ%2BM0pby3xxdOl7ZttVp%2FcRkB%2FHs4LHeJFvQ0L1lVrOaLs9dq7NQrK73u0bB5m0UC6diPvcYJFF%2BezRJVaYYpelToxVoYbBrJ3JtIFo6HWqxvikhzb50U0RcuZOWb1YDLxnA8QGYX%2FBPt1hwK8%2FbctA%2FHemr2VPtcDapGBAtAieFDSAVq0WqM5Ra9X5nGGu8dbhuRtAaikrejzfoDXtiAmd%2BNOfAGAh8kIChVjY0vO6W0hsxNquBYzf8pNZnKU2XCXWmrmYVYeDSfVe7ZpAj%2F%2BzV5sHmW%2Flpxvflge9MA1WHSWz%2B4SZMOZQ4bWq1X02%2FaH3XuWBqBwpLh4SSFAM%2ByRfBQwg%2FBAnP6TtD6%2BXDt2bOkye5wimIYHwd70RL0tB6jribFJVZpIyOfatEY4H9wFETyVnqsu4HQTsvgrlKuV6aNQTdM8uMhYgPdj6%2BroamBs77Eb%2BMY7dfl1TQrDspg%2BqOGUOwHcMVP2GjHav6MNvA0cEGOqUBFPKSy4FHShzr3M1QufHIF%2FCpl%2BXZhzLmA5OzZ865nfXpkgnKiUiAnxzdHCUCDtN6Jrk5CDEzpRNQ%2BdaevQOb4oqn7YJKUuC0E2osyD45pxWw8sjRAeSq8TLmPAVKbTC9kKo9xBGZe27%2BY8Wi6SEdsJ2jn2VCudoY2mrKtSdtazoT0RunuYh2bdjnkGneFoRJ9huvzjiOoTshC6qIDVmU%2FkwTz%2FHF&X-Amz-Signature=04827b875bbb01f93bbd6ccf36ff3a082ec26aee2f929195213361c2a56c4e03&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBPSE53E%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCNpDzgasp1BwCWpf1zQSFO12BUYxU2RkjCLV3ZLMaYlwIgA7SnvOQT%2BDOZSrV4lqaG28uKv7Cv7g6doyFKNcRXg8cq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDLAGZUJsj2CPhNgBbCrcAyTk3W5cbY6pjM6AQ8Hj4R2GkpW0j99anrCzBZ2INcRW9oyBnfELP%2BsSk%2FQtfUU9Wf5dFxQnnazPmVVkN6u8LbQc4zAj2ZnOMrZjmNHNQ0U5T4YoDuamGO4NxkoOqxto4MeNxeqkPL7NJvlxN9tYUZ%2BM0pby3xxdOl7ZttVp%2FcRkB%2FHs4LHeJFvQ0L1lVrOaLs9dq7NQrK73u0bB5m0UC6diPvcYJFF%2BezRJVaYYpelToxVoYbBrJ3JtIFo6HWqxvikhzb50U0RcuZOWb1YDLxnA8QGYX%2FBPt1hwK8%2FbctA%2FHemr2VPtcDapGBAtAieFDSAVq0WqM5Ra9X5nGGu8dbhuRtAaikrejzfoDXtiAmd%2BNOfAGAh8kIChVjY0vO6W0hsxNquBYzf8pNZnKU2XCXWmrmYVYeDSfVe7ZpAj%2F%2BzV5sHmW%2Flpxvflge9MA1WHSWz%2B4SZMOZQ4bWq1X02%2FaH3XuWBqBwpLh4SSFAM%2ByRfBQwg%2FBAnP6TtD6%2BXDt2bOkye5wimIYHwd70RL0tB6jribFJVZpIyOfatEY4H9wFETyVnqsu4HQTsvgrlKuV6aNQTdM8uMhYgPdj6%2BroamBs77Eb%2BMY7dfl1TQrDspg%2BqOGUOwHcMVP2GjHav6MNvA0cEGOqUBFPKSy4FHShzr3M1QufHIF%2FCpl%2BXZhzLmA5OzZ865nfXpkgnKiUiAnxzdHCUCDtN6Jrk5CDEzpRNQ%2BdaevQOb4oqn7YJKUuC0E2osyD45pxWw8sjRAeSq8TLmPAVKbTC9kKo9xBGZe27%2BY8Wi6SEdsJ2jn2VCudoY2mrKtSdtazoT0RunuYh2bdjnkGneFoRJ9huvzjiOoTshC6qIDVmU%2FkwTz%2FHF&X-Amz-Signature=d92efddee62b9e9b37d4010b0484a0e7416c2c47234382504a39e5dd2cf538be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBPSE53E%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCNpDzgasp1BwCWpf1zQSFO12BUYxU2RkjCLV3ZLMaYlwIgA7SnvOQT%2BDOZSrV4lqaG28uKv7Cv7g6doyFKNcRXg8cq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDLAGZUJsj2CPhNgBbCrcAyTk3W5cbY6pjM6AQ8Hj4R2GkpW0j99anrCzBZ2INcRW9oyBnfELP%2BsSk%2FQtfUU9Wf5dFxQnnazPmVVkN6u8LbQc4zAj2ZnOMrZjmNHNQ0U5T4YoDuamGO4NxkoOqxto4MeNxeqkPL7NJvlxN9tYUZ%2BM0pby3xxdOl7ZttVp%2FcRkB%2FHs4LHeJFvQ0L1lVrOaLs9dq7NQrK73u0bB5m0UC6diPvcYJFF%2BezRJVaYYpelToxVoYbBrJ3JtIFo6HWqxvikhzb50U0RcuZOWb1YDLxnA8QGYX%2FBPt1hwK8%2FbctA%2FHemr2VPtcDapGBAtAieFDSAVq0WqM5Ra9X5nGGu8dbhuRtAaikrejzfoDXtiAmd%2BNOfAGAh8kIChVjY0vO6W0hsxNquBYzf8pNZnKU2XCXWmrmYVYeDSfVe7ZpAj%2F%2BzV5sHmW%2Flpxvflge9MA1WHSWz%2B4SZMOZQ4bWq1X02%2FaH3XuWBqBwpLh4SSFAM%2ByRfBQwg%2FBAnP6TtD6%2BXDt2bOkye5wimIYHwd70RL0tB6jribFJVZpIyOfatEY4H9wFETyVnqsu4HQTsvgrlKuV6aNQTdM8uMhYgPdj6%2BroamBs77Eb%2BMY7dfl1TQrDspg%2BqOGUOwHcMVP2GjHav6MNvA0cEGOqUBFPKSy4FHShzr3M1QufHIF%2FCpl%2BXZhzLmA5OzZ865nfXpkgnKiUiAnxzdHCUCDtN6Jrk5CDEzpRNQ%2BdaevQOb4oqn7YJKUuC0E2osyD45pxWw8sjRAeSq8TLmPAVKbTC9kKo9xBGZe27%2BY8Wi6SEdsJ2jn2VCudoY2mrKtSdtazoT0RunuYh2bdjnkGneFoRJ9huvzjiOoTshC6qIDVmU%2FkwTz%2FHF&X-Amz-Signature=34e1f18d2c8e7521f661f6a72123d22f5bd4aa86280eb1939ddad441d39a603d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
