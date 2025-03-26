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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEOE3P42%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwH6AfDgC567hj%2F3%2Fr2d9OvSMko4%2BQgZIYfJHkbq5MRgIgRFW2ItkmEd0mvrsvEzFdzFQvVveckent47JBPeCiM7kq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDDXiAg2g72N2XwcmzircA1oYKnNuri8ZlZm9K06%2BGf%2FpwY0sAL%2BPKH%2FBlUMv1RYmMhg84gj8Fz1SzF%2FNnum0skwjF8U9%2BhZPmrwvrkvMFx%2FevD1OlGU5vftQhSMRlD1PQ%2BJK8qr7xK0Q%2Ba%2FBuhIRfKzVDTVfNIllebL%2FurbbkCsGO5PqxYN2WpyhBEnUQFhQVejbw9SMK0t2LSV%2F8hKVdAUtdk1z%2BnFCHtQcff%2BuXlsTqwmDI099NN9pz7EMEdQxiWuAKyXyYH2hkEjRue7wT7J1sKojPg2b6vTXibfPNYk9j3U0DTd7lSWVAif4yxU%2BDU6G5ViYKkaLhPksW6ZTH0Fnr1AV2S%2FRpDvFWR%2BPt3BucBbjIm6rR3mvVJRTTjb2HISiVhlbvp0gdAElMVOUynAPTAVKy%2BYY%2FgkipwNj9v6Tq2pW2Cyc5zvtB1XOo8g9oDBD%2BnQU63mw2ZrYL6haHK%2FqiHQ3pkEwZguvGyJ5a9N1P2HcPYmh%2FL99c6cIdLCOzclipbXrPCB%2Fn2gAz8%2BvCKy3plM8LlsGIyh6x9W5Mea0hrN0kPOUlYxLhwOM963pRzeH3Y793cNs8gyglS2%2B44%2BZTpCz7PpDcP1GUGfK5HVp5SALD5oXsnx77tbTpUAG4%2BasLFyV1QQFwLvpMJuNkr8GOqUBgJZ0qLvEr9zNhzfLZo2FM05DzgK%2FTJ20xnuC7emvd2HYT3kG%2BxKA9yU46bjEkaexpt497brsILyWpjb1D4cXdopmhWeB5AWknSCf%2BPFEWMW%2FCLb1X7jO35EyX3q8ZjTpr5rC%2B%2B6bMX2kQ55fKpmHJoBwldJTWYRebweNmmqCRtQXVSYS6D%2FPGPmxVJKDVc8fvqVeV6KyoN67x%2FYdA%2FCWbFE8I4E6&X-Amz-Signature=155d797d5e3649a2676449d10aa442266532b1e596319105f7523684767f5dbb&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEOE3P42%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwH6AfDgC567hj%2F3%2Fr2d9OvSMko4%2BQgZIYfJHkbq5MRgIgRFW2ItkmEd0mvrsvEzFdzFQvVveckent47JBPeCiM7kq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDDXiAg2g72N2XwcmzircA1oYKnNuri8ZlZm9K06%2BGf%2FpwY0sAL%2BPKH%2FBlUMv1RYmMhg84gj8Fz1SzF%2FNnum0skwjF8U9%2BhZPmrwvrkvMFx%2FevD1OlGU5vftQhSMRlD1PQ%2BJK8qr7xK0Q%2Ba%2FBuhIRfKzVDTVfNIllebL%2FurbbkCsGO5PqxYN2WpyhBEnUQFhQVejbw9SMK0t2LSV%2F8hKVdAUtdk1z%2BnFCHtQcff%2BuXlsTqwmDI099NN9pz7EMEdQxiWuAKyXyYH2hkEjRue7wT7J1sKojPg2b6vTXibfPNYk9j3U0DTd7lSWVAif4yxU%2BDU6G5ViYKkaLhPksW6ZTH0Fnr1AV2S%2FRpDvFWR%2BPt3BucBbjIm6rR3mvVJRTTjb2HISiVhlbvp0gdAElMVOUynAPTAVKy%2BYY%2FgkipwNj9v6Tq2pW2Cyc5zvtB1XOo8g9oDBD%2BnQU63mw2ZrYL6haHK%2FqiHQ3pkEwZguvGyJ5a9N1P2HcPYmh%2FL99c6cIdLCOzclipbXrPCB%2Fn2gAz8%2BvCKy3plM8LlsGIyh6x9W5Mea0hrN0kPOUlYxLhwOM963pRzeH3Y793cNs8gyglS2%2B44%2BZTpCz7PpDcP1GUGfK5HVp5SALD5oXsnx77tbTpUAG4%2BasLFyV1QQFwLvpMJuNkr8GOqUBgJZ0qLvEr9zNhzfLZo2FM05DzgK%2FTJ20xnuC7emvd2HYT3kG%2BxKA9yU46bjEkaexpt497brsILyWpjb1D4cXdopmhWeB5AWknSCf%2BPFEWMW%2FCLb1X7jO35EyX3q8ZjTpr5rC%2B%2B6bMX2kQ55fKpmHJoBwldJTWYRebweNmmqCRtQXVSYS6D%2FPGPmxVJKDVc8fvqVeV6KyoN67x%2FYdA%2FCWbFE8I4E6&X-Amz-Signature=92ca547ef29c285f2eca238bbb6fb65122b8e5f1656449aa56bc50bfd6bd23f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEOE3P42%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwH6AfDgC567hj%2F3%2Fr2d9OvSMko4%2BQgZIYfJHkbq5MRgIgRFW2ItkmEd0mvrsvEzFdzFQvVveckent47JBPeCiM7kq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDDXiAg2g72N2XwcmzircA1oYKnNuri8ZlZm9K06%2BGf%2FpwY0sAL%2BPKH%2FBlUMv1RYmMhg84gj8Fz1SzF%2FNnum0skwjF8U9%2BhZPmrwvrkvMFx%2FevD1OlGU5vftQhSMRlD1PQ%2BJK8qr7xK0Q%2Ba%2FBuhIRfKzVDTVfNIllebL%2FurbbkCsGO5PqxYN2WpyhBEnUQFhQVejbw9SMK0t2LSV%2F8hKVdAUtdk1z%2BnFCHtQcff%2BuXlsTqwmDI099NN9pz7EMEdQxiWuAKyXyYH2hkEjRue7wT7J1sKojPg2b6vTXibfPNYk9j3U0DTd7lSWVAif4yxU%2BDU6G5ViYKkaLhPksW6ZTH0Fnr1AV2S%2FRpDvFWR%2BPt3BucBbjIm6rR3mvVJRTTjb2HISiVhlbvp0gdAElMVOUynAPTAVKy%2BYY%2FgkipwNj9v6Tq2pW2Cyc5zvtB1XOo8g9oDBD%2BnQU63mw2ZrYL6haHK%2FqiHQ3pkEwZguvGyJ5a9N1P2HcPYmh%2FL99c6cIdLCOzclipbXrPCB%2Fn2gAz8%2BvCKy3plM8LlsGIyh6x9W5Mea0hrN0kPOUlYxLhwOM963pRzeH3Y793cNs8gyglS2%2B44%2BZTpCz7PpDcP1GUGfK5HVp5SALD5oXsnx77tbTpUAG4%2BasLFyV1QQFwLvpMJuNkr8GOqUBgJZ0qLvEr9zNhzfLZo2FM05DzgK%2FTJ20xnuC7emvd2HYT3kG%2BxKA9yU46bjEkaexpt497brsILyWpjb1D4cXdopmhWeB5AWknSCf%2BPFEWMW%2FCLb1X7jO35EyX3q8ZjTpr5rC%2B%2B6bMX2kQ55fKpmHJoBwldJTWYRebweNmmqCRtQXVSYS6D%2FPGPmxVJKDVc8fvqVeV6KyoN67x%2FYdA%2FCWbFE8I4E6&X-Amz-Signature=1ce052a3ae4438a9014502537c7a6aaf173d60401ce1bba9dbfb810f4ff8a071&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
