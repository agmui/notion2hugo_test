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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5BEAJ7%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T081301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIBkvzRtiHBRF6srLP0Th75FJoRYuWFzh2aBPyViDlAQrAiEA125rVWwBHaVW7LV9CcTlOj9vcIlh2wYVdUfhOyyqkG0qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKRsX3NEeOJpyAflCrcA0bTN%2Bh4Xy1kxc%2BVYunh4bmm14dnM%2BiOfHKz8EFGk9XhcCGokyvfu4e3RmuKeAk9Qgke1%2BgPaFV8Co3xsQRTGV5QHMqANb%2FHBKAi%2BbEm2x4rgEvVhu0gQkLHTE3Yxr90OcgNWrIMfKn5jqYVKKl9ixjIMH5f1%2FVaakohpvAT6MwzeBmggH%2BV%2BVIOYQil50zisU5jV2hTuh2OKX9JqPV%2BQ9TTjGaF5OExVCUrzRCikwVWSbygh961OfzlqeElQNlklnAxGL6fy2%2FCie0A3n2o8%2FSBOw4Cx9t%2FxxLNH%2FUglGs3NWPq07SAZi%2BPd1DQskkNoNO2EEzJW3bt37MMDpCOjIoNQfjMm4cf4WQ3haRYFqtMzCil58be7Qr3sIOByHrJ3SJnQIZ4Iz8NXswXftF0Okp7km3F4ui5qDAx4fqqBnICuu%2F8ZLTmxpgu9TedctAwB60YdoKsIwF3uTdApxMcoI4L7S7zBnYpnGN%2BZ262jDTvlMgGhcAuszQVYA%2FIGe6eLockGGg6FmNtYgi5yatgj2LMgOx59SjDf2s%2FiuxmGKcdDsTXu%2BeztAiBIJv%2BRLWNxJxy2RY15PRjQ%2Bvu7insTMHk7Cl17oKpzJhOEAKSARu93L%2BDXBuc711Uk2dJMLiIqsIGOqUBFr7G5IG7htMvPHnX2YxT1OxMXHcxk1oWRtnY%2BPzu2NtYi8OGIDRFTKjaetFSLZlm8M%2FMuPIEgC4J6iisMI7RnRL02T64CvAVoIMFe3qXUtAC7UKkTwj3Z%2B7SUf7FcBLBQ%2FktI4tzZ5ALGDjRiJiQS2XKRIOpvc08JdoOZb6vNZG4tg0D0%2BMdayOMYWVEu7X8wI%2FTtzyYuh9wKiUYHALbEpFGCcRB&X-Amz-Signature=5216c0801c0a345b69d777c5f1f389f324feb12cef67efbc43b67247f933a3bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5BEAJ7%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T081301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIBkvzRtiHBRF6srLP0Th75FJoRYuWFzh2aBPyViDlAQrAiEA125rVWwBHaVW7LV9CcTlOj9vcIlh2wYVdUfhOyyqkG0qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKRsX3NEeOJpyAflCrcA0bTN%2Bh4Xy1kxc%2BVYunh4bmm14dnM%2BiOfHKz8EFGk9XhcCGokyvfu4e3RmuKeAk9Qgke1%2BgPaFV8Co3xsQRTGV5QHMqANb%2FHBKAi%2BbEm2x4rgEvVhu0gQkLHTE3Yxr90OcgNWrIMfKn5jqYVKKl9ixjIMH5f1%2FVaakohpvAT6MwzeBmggH%2BV%2BVIOYQil50zisU5jV2hTuh2OKX9JqPV%2BQ9TTjGaF5OExVCUrzRCikwVWSbygh961OfzlqeElQNlklnAxGL6fy2%2FCie0A3n2o8%2FSBOw4Cx9t%2FxxLNH%2FUglGs3NWPq07SAZi%2BPd1DQskkNoNO2EEzJW3bt37MMDpCOjIoNQfjMm4cf4WQ3haRYFqtMzCil58be7Qr3sIOByHrJ3SJnQIZ4Iz8NXswXftF0Okp7km3F4ui5qDAx4fqqBnICuu%2F8ZLTmxpgu9TedctAwB60YdoKsIwF3uTdApxMcoI4L7S7zBnYpnGN%2BZ262jDTvlMgGhcAuszQVYA%2FIGe6eLockGGg6FmNtYgi5yatgj2LMgOx59SjDf2s%2FiuxmGKcdDsTXu%2BeztAiBIJv%2BRLWNxJxy2RY15PRjQ%2Bvu7insTMHk7Cl17oKpzJhOEAKSARu93L%2BDXBuc711Uk2dJMLiIqsIGOqUBFr7G5IG7htMvPHnX2YxT1OxMXHcxk1oWRtnY%2BPzu2NtYi8OGIDRFTKjaetFSLZlm8M%2FMuPIEgC4J6iisMI7RnRL02T64CvAVoIMFe3qXUtAC7UKkTwj3Z%2B7SUf7FcBLBQ%2FktI4tzZ5ALGDjRiJiQS2XKRIOpvc08JdoOZb6vNZG4tg0D0%2BMdayOMYWVEu7X8wI%2FTtzyYuh9wKiUYHALbEpFGCcRB&X-Amz-Signature=4658ea75ed0510e4a44b55bde555d55508472943814e315d25f2ae4b76813387&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5BEAJ7%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T081301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIBkvzRtiHBRF6srLP0Th75FJoRYuWFzh2aBPyViDlAQrAiEA125rVWwBHaVW7LV9CcTlOj9vcIlh2wYVdUfhOyyqkG0qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKRsX3NEeOJpyAflCrcA0bTN%2Bh4Xy1kxc%2BVYunh4bmm14dnM%2BiOfHKz8EFGk9XhcCGokyvfu4e3RmuKeAk9Qgke1%2BgPaFV8Co3xsQRTGV5QHMqANb%2FHBKAi%2BbEm2x4rgEvVhu0gQkLHTE3Yxr90OcgNWrIMfKn5jqYVKKl9ixjIMH5f1%2FVaakohpvAT6MwzeBmggH%2BV%2BVIOYQil50zisU5jV2hTuh2OKX9JqPV%2BQ9TTjGaF5OExVCUrzRCikwVWSbygh961OfzlqeElQNlklnAxGL6fy2%2FCie0A3n2o8%2FSBOw4Cx9t%2FxxLNH%2FUglGs3NWPq07SAZi%2BPd1DQskkNoNO2EEzJW3bt37MMDpCOjIoNQfjMm4cf4WQ3haRYFqtMzCil58be7Qr3sIOByHrJ3SJnQIZ4Iz8NXswXftF0Okp7km3F4ui5qDAx4fqqBnICuu%2F8ZLTmxpgu9TedctAwB60YdoKsIwF3uTdApxMcoI4L7S7zBnYpnGN%2BZ262jDTvlMgGhcAuszQVYA%2FIGe6eLockGGg6FmNtYgi5yatgj2LMgOx59SjDf2s%2FiuxmGKcdDsTXu%2BeztAiBIJv%2BRLWNxJxy2RY15PRjQ%2Bvu7insTMHk7Cl17oKpzJhOEAKSARu93L%2BDXBuc711Uk2dJMLiIqsIGOqUBFr7G5IG7htMvPHnX2YxT1OxMXHcxk1oWRtnY%2BPzu2NtYi8OGIDRFTKjaetFSLZlm8M%2FMuPIEgC4J6iisMI7RnRL02T64CvAVoIMFe3qXUtAC7UKkTwj3Z%2B7SUf7FcBLBQ%2FktI4tzZ5ALGDjRiJiQS2XKRIOpvc08JdoOZb6vNZG4tg0D0%2BMdayOMYWVEu7X8wI%2FTtzyYuh9wKiUYHALbEpFGCcRB&X-Amz-Signature=f089791bb71d8e2129ca326cb4cd3df9a29d3a7e12e5f37cd86817ef461c3c1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
