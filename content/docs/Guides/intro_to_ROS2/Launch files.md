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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGW7LKH3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIEIvApqZF%2BZ75p5ndU5n%2FZ3XEbOXsJNRrGnLZ8IZapfLAiEArYAv2M84ZFLEwbPCa5qb3Y0K6QzSlsJdheEEHfZ0ylwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7VS6MCPVvD%2Bsih8yrcA2Sd4v53vC1rNvvOreZhp80b8O46Wu1XUBh5SFJbtyC7k2bVr4Z23oIuYxTLJ5CEwdouxQUDICBfN4iMqLWPMUEiUAPIqiLaVaoJZKKO4AAV0uEVnN%2FTq0EQe%2BeNJEY5OG4dpNc%2BVnk95BOM7Yx0cblSi07i1nAkKgMwLZtLxRcqg7%2FLuD1hDmloYZkGavy2d%2FG1FN7DPm6wpSZDMR4Tx0O4wQ8wd5AZKWtyOwPZ9GLvDMe3gryD2EBRD4ziCrOxfh60%2BKu74UetXEtlhj9KmfyvjzHnFK0ERIewvIQ6N2WZbrqxKijf0WYtYza9ojNWqwx9BJNkMQxomUezgdsw79aKhPFdQs%2FngcTE1fILUvT7X%2BAmkKOGFrStMA8bTwtvPZ7VRreMfygBofN7DzCQPX%2FZ7S8EElX7v6iib0Ro2CYyIzNoS93enDYSKZGXvH54hxxgq9YHT73yDNU%2FrmbwRi%2FpSExWpWkNG48q8T1GcT7VkyNOoszlzMnN8TAhKDQgvz3Lam2dRH9Qdo9acMikbUA2PDfTk1%2F9Frt8fqc06HLpKI7dW4EvOvsFJKxw1nmwQ4UDx8UXOZxjaGUIwiotLcAmGpJfv99s%2BcjcS834b4NV0N7CzMzoIeGZCQSjMOW5msAGOqUBI8t0PmI4V7%2BhQ8e62ErLiystzmGfujQZUmCRD24SiSnLD6ot4JsQOmJLZL%2Fr6osTUGd7KodZiOAkAy5cxJm7eriMonzOGdaatng34p55Qwq0dWbbnQFkDwF5hegXrNWC4TXEbPcP2FeZLD76wYbTOaCtPLdTVFBdpPXKvZyDenaQI2mfz0me%2Fvyq0rlQlCJpFdsYcal%2BqeMhOy2LdtSm1CechY4S&X-Amz-Signature=2f66646b37c3ed55f4a2c38bc7ef868b3a006f19db8f917f7b06d25d8e6cd980&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGW7LKH3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIEIvApqZF%2BZ75p5ndU5n%2FZ3XEbOXsJNRrGnLZ8IZapfLAiEArYAv2M84ZFLEwbPCa5qb3Y0K6QzSlsJdheEEHfZ0ylwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7VS6MCPVvD%2Bsih8yrcA2Sd4v53vC1rNvvOreZhp80b8O46Wu1XUBh5SFJbtyC7k2bVr4Z23oIuYxTLJ5CEwdouxQUDICBfN4iMqLWPMUEiUAPIqiLaVaoJZKKO4AAV0uEVnN%2FTq0EQe%2BeNJEY5OG4dpNc%2BVnk95BOM7Yx0cblSi07i1nAkKgMwLZtLxRcqg7%2FLuD1hDmloYZkGavy2d%2FG1FN7DPm6wpSZDMR4Tx0O4wQ8wd5AZKWtyOwPZ9GLvDMe3gryD2EBRD4ziCrOxfh60%2BKu74UetXEtlhj9KmfyvjzHnFK0ERIewvIQ6N2WZbrqxKijf0WYtYza9ojNWqwx9BJNkMQxomUezgdsw79aKhPFdQs%2FngcTE1fILUvT7X%2BAmkKOGFrStMA8bTwtvPZ7VRreMfygBofN7DzCQPX%2FZ7S8EElX7v6iib0Ro2CYyIzNoS93enDYSKZGXvH54hxxgq9YHT73yDNU%2FrmbwRi%2FpSExWpWkNG48q8T1GcT7VkyNOoszlzMnN8TAhKDQgvz3Lam2dRH9Qdo9acMikbUA2PDfTk1%2F9Frt8fqc06HLpKI7dW4EvOvsFJKxw1nmwQ4UDx8UXOZxjaGUIwiotLcAmGpJfv99s%2BcjcS834b4NV0N7CzMzoIeGZCQSjMOW5msAGOqUBI8t0PmI4V7%2BhQ8e62ErLiystzmGfujQZUmCRD24SiSnLD6ot4JsQOmJLZL%2Fr6osTUGd7KodZiOAkAy5cxJm7eriMonzOGdaatng34p55Qwq0dWbbnQFkDwF5hegXrNWC4TXEbPcP2FeZLD76wYbTOaCtPLdTVFBdpPXKvZyDenaQI2mfz0me%2Fvyq0rlQlCJpFdsYcal%2BqeMhOy2LdtSm1CechY4S&X-Amz-Signature=3a66b1bf9311101b9d8878b2d458b2ebc726fef5ef19028fd326fcc290d73a82&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGW7LKH3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIEIvApqZF%2BZ75p5ndU5n%2FZ3XEbOXsJNRrGnLZ8IZapfLAiEArYAv2M84ZFLEwbPCa5qb3Y0K6QzSlsJdheEEHfZ0ylwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7VS6MCPVvD%2Bsih8yrcA2Sd4v53vC1rNvvOreZhp80b8O46Wu1XUBh5SFJbtyC7k2bVr4Z23oIuYxTLJ5CEwdouxQUDICBfN4iMqLWPMUEiUAPIqiLaVaoJZKKO4AAV0uEVnN%2FTq0EQe%2BeNJEY5OG4dpNc%2BVnk95BOM7Yx0cblSi07i1nAkKgMwLZtLxRcqg7%2FLuD1hDmloYZkGavy2d%2FG1FN7DPm6wpSZDMR4Tx0O4wQ8wd5AZKWtyOwPZ9GLvDMe3gryD2EBRD4ziCrOxfh60%2BKu74UetXEtlhj9KmfyvjzHnFK0ERIewvIQ6N2WZbrqxKijf0WYtYza9ojNWqwx9BJNkMQxomUezgdsw79aKhPFdQs%2FngcTE1fILUvT7X%2BAmkKOGFrStMA8bTwtvPZ7VRreMfygBofN7DzCQPX%2FZ7S8EElX7v6iib0Ro2CYyIzNoS93enDYSKZGXvH54hxxgq9YHT73yDNU%2FrmbwRi%2FpSExWpWkNG48q8T1GcT7VkyNOoszlzMnN8TAhKDQgvz3Lam2dRH9Qdo9acMikbUA2PDfTk1%2F9Frt8fqc06HLpKI7dW4EvOvsFJKxw1nmwQ4UDx8UXOZxjaGUIwiotLcAmGpJfv99s%2BcjcS834b4NV0N7CzMzoIeGZCQSjMOW5msAGOqUBI8t0PmI4V7%2BhQ8e62ErLiystzmGfujQZUmCRD24SiSnLD6ot4JsQOmJLZL%2Fr6osTUGd7KodZiOAkAy5cxJm7eriMonzOGdaatng34p55Qwq0dWbbnQFkDwF5hegXrNWC4TXEbPcP2FeZLD76wYbTOaCtPLdTVFBdpPXKvZyDenaQI2mfz0me%2Fvyq0rlQlCJpFdsYcal%2BqeMhOy2LdtSm1CechY4S&X-Amz-Signature=376ee421381e1d5ebf7ec7db5d36902b887ef57c8c3493395058610c99465715&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
