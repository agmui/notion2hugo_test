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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7BNHS4F%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQLBQH7ufTBStmNpnk4a2qWX%2FkSSKoQYSissfiA%2BITfQIgbl4YVvhBVITiktuD2wr3qhtUhfP8Sr2D8Wt%2B7YwQOYAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDIdisxwbM6MzfL3P9ircAyFhM0Gt851UjxCUZOD91N%2BORERtQ8opfHMZdpILvQKSVEKKdheA54wyY06Y497ryST9RduBLW8TGQYMGYB4MFRkzV3RCILkfpV2Gscd4%2F5Vo%2FArFMpOzY3z8885gY6C8l9M%2BedfapTZ%2BjJI9i8qZAHDYCOzWKVsT9OHCbUONUBDY2rWdnXXdkH%2B2PRXHHAY%2Bepa%2BV6eN88GQqeV5mhhgbRv8IuAR2IQG282r6yAsp2Bw2y2IQhvnflapMclDnUFxnHIs%2FGlR65uz7sPKAId74%2Bd%2BIC8ucI2JYHbrAdW417UiPOp1G5W9DiQVNuUL%2BstgRjkKz%2BckTNRtQe7Nvm%2BNYQ8zI3jfXyrXqV2iEIDazDND1MGFzV3hOH42uyfSo3GtVYmZNrHPxFIpUEsW4ym1tzIDCrvUkUh96aUqJtk7g00RXvvOz15WDW5OQRbu3cKgY%2FNvpucGSoCtEKvc%2BBLJwd8EsT9KlFwDxoh6x1EKc0wtlwoQX7lcbS1FlJnTKmNcbr4lii18v%2FbfnfPXplOBuODicxtixnc5PmCCQrIJ23V6kVhdcRilZ9TdLso%2BZAqxhzhhhHUW4sWRz8vZ2Pa6ktpASRkQtU4JI5iRCIhqoDHBLY8RR%2BQ5%2Bg8O5%2BIMISO78AGOqUBSwXzMbBqcrmTTua%2BiwQ%2BwIWq%2FD3zR5G%2FTabOWmQItAh6PZffijsWOUXkC8LikEFn%2BF5GsK%2Fb66zVdnUe3awDk8UbUkMkO01eQM60W%2BoYg2X1UT08TqdgKwpIJliaED305USxZbmNivuTSd02L4hTtWjLMbyxTRWTsnL%2FjKHt7SwruKcM8A4pdbNh9doyhhAYou%2FMoyAOtFl%2BQm0Ffq9gGsX8%2F%2BCl&X-Amz-Signature=558065be39471e6b036c9a87ebef03cae541c21e4c7fde16ed22af6ff53efeee&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7BNHS4F%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQLBQH7ufTBStmNpnk4a2qWX%2FkSSKoQYSissfiA%2BITfQIgbl4YVvhBVITiktuD2wr3qhtUhfP8Sr2D8Wt%2B7YwQOYAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDIdisxwbM6MzfL3P9ircAyFhM0Gt851UjxCUZOD91N%2BORERtQ8opfHMZdpILvQKSVEKKdheA54wyY06Y497ryST9RduBLW8TGQYMGYB4MFRkzV3RCILkfpV2Gscd4%2F5Vo%2FArFMpOzY3z8885gY6C8l9M%2BedfapTZ%2BjJI9i8qZAHDYCOzWKVsT9OHCbUONUBDY2rWdnXXdkH%2B2PRXHHAY%2Bepa%2BV6eN88GQqeV5mhhgbRv8IuAR2IQG282r6yAsp2Bw2y2IQhvnflapMclDnUFxnHIs%2FGlR65uz7sPKAId74%2Bd%2BIC8ucI2JYHbrAdW417UiPOp1G5W9DiQVNuUL%2BstgRjkKz%2BckTNRtQe7Nvm%2BNYQ8zI3jfXyrXqV2iEIDazDND1MGFzV3hOH42uyfSo3GtVYmZNrHPxFIpUEsW4ym1tzIDCrvUkUh96aUqJtk7g00RXvvOz15WDW5OQRbu3cKgY%2FNvpucGSoCtEKvc%2BBLJwd8EsT9KlFwDxoh6x1EKc0wtlwoQX7lcbS1FlJnTKmNcbr4lii18v%2FbfnfPXplOBuODicxtixnc5PmCCQrIJ23V6kVhdcRilZ9TdLso%2BZAqxhzhhhHUW4sWRz8vZ2Pa6ktpASRkQtU4JI5iRCIhqoDHBLY8RR%2BQ5%2Bg8O5%2BIMISO78AGOqUBSwXzMbBqcrmTTua%2BiwQ%2BwIWq%2FD3zR5G%2FTabOWmQItAh6PZffijsWOUXkC8LikEFn%2BF5GsK%2Fb66zVdnUe3awDk8UbUkMkO01eQM60W%2BoYg2X1UT08TqdgKwpIJliaED305USxZbmNivuTSd02L4hTtWjLMbyxTRWTsnL%2FjKHt7SwruKcM8A4pdbNh9doyhhAYou%2FMoyAOtFl%2BQm0Ffq9gGsX8%2F%2BCl&X-Amz-Signature=5f7b5a29bfe9eb3a1fbac43ae79ef894538d728767b1b16865c8f5f681267286&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7BNHS4F%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQLBQH7ufTBStmNpnk4a2qWX%2FkSSKoQYSissfiA%2BITfQIgbl4YVvhBVITiktuD2wr3qhtUhfP8Sr2D8Wt%2B7YwQOYAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDIdisxwbM6MzfL3P9ircAyFhM0Gt851UjxCUZOD91N%2BORERtQ8opfHMZdpILvQKSVEKKdheA54wyY06Y497ryST9RduBLW8TGQYMGYB4MFRkzV3RCILkfpV2Gscd4%2F5Vo%2FArFMpOzY3z8885gY6C8l9M%2BedfapTZ%2BjJI9i8qZAHDYCOzWKVsT9OHCbUONUBDY2rWdnXXdkH%2B2PRXHHAY%2Bepa%2BV6eN88GQqeV5mhhgbRv8IuAR2IQG282r6yAsp2Bw2y2IQhvnflapMclDnUFxnHIs%2FGlR65uz7sPKAId74%2Bd%2BIC8ucI2JYHbrAdW417UiPOp1G5W9DiQVNuUL%2BstgRjkKz%2BckTNRtQe7Nvm%2BNYQ8zI3jfXyrXqV2iEIDazDND1MGFzV3hOH42uyfSo3GtVYmZNrHPxFIpUEsW4ym1tzIDCrvUkUh96aUqJtk7g00RXvvOz15WDW5OQRbu3cKgY%2FNvpucGSoCtEKvc%2BBLJwd8EsT9KlFwDxoh6x1EKc0wtlwoQX7lcbS1FlJnTKmNcbr4lii18v%2FbfnfPXplOBuODicxtixnc5PmCCQrIJ23V6kVhdcRilZ9TdLso%2BZAqxhzhhhHUW4sWRz8vZ2Pa6ktpASRkQtU4JI5iRCIhqoDHBLY8RR%2BQ5%2Bg8O5%2BIMISO78AGOqUBSwXzMbBqcrmTTua%2BiwQ%2BwIWq%2FD3zR5G%2FTabOWmQItAh6PZffijsWOUXkC8LikEFn%2BF5GsK%2Fb66zVdnUe3awDk8UbUkMkO01eQM60W%2BoYg2X1UT08TqdgKwpIJliaED305USxZbmNivuTSd02L4hTtWjLMbyxTRWTsnL%2FjKHt7SwruKcM8A4pdbNh9doyhhAYou%2FMoyAOtFl%2BQm0Ffq9gGsX8%2F%2BCl&X-Amz-Signature=107435cbe9f375af7c607469ddcc2d0bc2387ed53b4356797c5e87bd3f2de586&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
