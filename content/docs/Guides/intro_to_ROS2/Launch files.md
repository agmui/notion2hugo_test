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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCS6I37E%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX%2Fn2buE%2Fq6rJNRZFh6MMKF0LYcF5QQ%2FcNtk94IVpwxQIgeab6fvXsd8WEwuoYEi34%2FSWn8vfzEjrBmkOF8wQpdycqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbziPLMuErZ54ooFyrcA%2BJQEjcrowLmAuFhziM6T2k1EudvfLcFzQH1fH7%2FqHqaXsrTEzPIafKqOYBkFfgcMo9%2BBubexnmzEB4zqdX%2FNqQx9orn2A%2BYp9CwuBirDfrL8ukHCfhM9Jh3tfEXhWI26aJSWB0EG4Gm9K%2BRFceU9k6uzS1DLYiEPi9%2BZ5XDT%2Bt86KBjcTPmZJW2Qthp0UpIp6bQdpKes%2FvFW9VXfN2BYGkl%2Flc5Ga%2FgDdQ7QowKlbdgzjoPsklJpGg65lYurLX3HWbb6fFYf1eK68H62JfxIoAw%2FfgHb2ij4R9KINb1j9FyBDGB9GA6iHX%2Bkk6pjMvMZcV7Lg3q75zpwfbsTW3pwGek%2FzaeA20WKuzOZGUUJ%2BQS2ereWfVdfB3JQdgmKI5QiwzyoGlH0UALF%2B%2BJeMesKyBiV4Le5JlRnejtXa60pqZUAJyUmYbH31F0URmi0zLxEFY1RXGDa%2FFJBpH8OKbJi3Em4jLso%2FojHnNYyy1rxV5t7ut7Gs045SJuSEvjchxNrSnMzK7iM6TZjStGSep2ljkR4AV%2BpkXBEiTTmVAwi%2F7H0HKa3gKZdu1sWzFGxPDnyQxv23ensAB8QNbzT5GgyiiOovewFxhTJxyBfCNQ1b6J%2FrcGkVeXUukXuvqjMPqt3L0GOqUB5Ah3e4N3L4uvL1agGKn2RZ9TqpFFpKsYBvqznG8Ynh47s88uPOUr4oPSg9gmXImw4an7l%2FiftVIV3KW8iaaEaM6Gv8bj1VHLwCLQRSIPeNiCZDWhGkm5GiTzTGo5wEILc5bGsjMkZnfXlrIQh%2FC%2F0K7ZkSxAnUHtZ71h6M%2BgCpGK00sB365Q2TClPdNjQN6zf7ap2%2BdXozt2M74GQA1NNnm68Kmd&X-Amz-Signature=4ea1e17a89bb8c4a67dbb38cc8421d577fb4252b24f873f2468cb473f9b0ba7e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCS6I37E%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX%2Fn2buE%2Fq6rJNRZFh6MMKF0LYcF5QQ%2FcNtk94IVpwxQIgeab6fvXsd8WEwuoYEi34%2FSWn8vfzEjrBmkOF8wQpdycqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbziPLMuErZ54ooFyrcA%2BJQEjcrowLmAuFhziM6T2k1EudvfLcFzQH1fH7%2FqHqaXsrTEzPIafKqOYBkFfgcMo9%2BBubexnmzEB4zqdX%2FNqQx9orn2A%2BYp9CwuBirDfrL8ukHCfhM9Jh3tfEXhWI26aJSWB0EG4Gm9K%2BRFceU9k6uzS1DLYiEPi9%2BZ5XDT%2Bt86KBjcTPmZJW2Qthp0UpIp6bQdpKes%2FvFW9VXfN2BYGkl%2Flc5Ga%2FgDdQ7QowKlbdgzjoPsklJpGg65lYurLX3HWbb6fFYf1eK68H62JfxIoAw%2FfgHb2ij4R9KINb1j9FyBDGB9GA6iHX%2Bkk6pjMvMZcV7Lg3q75zpwfbsTW3pwGek%2FzaeA20WKuzOZGUUJ%2BQS2ereWfVdfB3JQdgmKI5QiwzyoGlH0UALF%2B%2BJeMesKyBiV4Le5JlRnejtXa60pqZUAJyUmYbH31F0URmi0zLxEFY1RXGDa%2FFJBpH8OKbJi3Em4jLso%2FojHnNYyy1rxV5t7ut7Gs045SJuSEvjchxNrSnMzK7iM6TZjStGSep2ljkR4AV%2BpkXBEiTTmVAwi%2F7H0HKa3gKZdu1sWzFGxPDnyQxv23ensAB8QNbzT5GgyiiOovewFxhTJxyBfCNQ1b6J%2FrcGkVeXUukXuvqjMPqt3L0GOqUB5Ah3e4N3L4uvL1agGKn2RZ9TqpFFpKsYBvqznG8Ynh47s88uPOUr4oPSg9gmXImw4an7l%2FiftVIV3KW8iaaEaM6Gv8bj1VHLwCLQRSIPeNiCZDWhGkm5GiTzTGo5wEILc5bGsjMkZnfXlrIQh%2FC%2F0K7ZkSxAnUHtZ71h6M%2BgCpGK00sB365Q2TClPdNjQN6zf7ap2%2BdXozt2M74GQA1NNnm68Kmd&X-Amz-Signature=7ac3a361bee188eabc8cc84d20ce4c83891d930ff32c9176fccc6998cfdf7262&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCS6I37E%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX%2Fn2buE%2Fq6rJNRZFh6MMKF0LYcF5QQ%2FcNtk94IVpwxQIgeab6fvXsd8WEwuoYEi34%2FSWn8vfzEjrBmkOF8wQpdycqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbziPLMuErZ54ooFyrcA%2BJQEjcrowLmAuFhziM6T2k1EudvfLcFzQH1fH7%2FqHqaXsrTEzPIafKqOYBkFfgcMo9%2BBubexnmzEB4zqdX%2FNqQx9orn2A%2BYp9CwuBirDfrL8ukHCfhM9Jh3tfEXhWI26aJSWB0EG4Gm9K%2BRFceU9k6uzS1DLYiEPi9%2BZ5XDT%2Bt86KBjcTPmZJW2Qthp0UpIp6bQdpKes%2FvFW9VXfN2BYGkl%2Flc5Ga%2FgDdQ7QowKlbdgzjoPsklJpGg65lYurLX3HWbb6fFYf1eK68H62JfxIoAw%2FfgHb2ij4R9KINb1j9FyBDGB9GA6iHX%2Bkk6pjMvMZcV7Lg3q75zpwfbsTW3pwGek%2FzaeA20WKuzOZGUUJ%2BQS2ereWfVdfB3JQdgmKI5QiwzyoGlH0UALF%2B%2BJeMesKyBiV4Le5JlRnejtXa60pqZUAJyUmYbH31F0URmi0zLxEFY1RXGDa%2FFJBpH8OKbJi3Em4jLso%2FojHnNYyy1rxV5t7ut7Gs045SJuSEvjchxNrSnMzK7iM6TZjStGSep2ljkR4AV%2BpkXBEiTTmVAwi%2F7H0HKa3gKZdu1sWzFGxPDnyQxv23ensAB8QNbzT5GgyiiOovewFxhTJxyBfCNQ1b6J%2FrcGkVeXUukXuvqjMPqt3L0GOqUB5Ah3e4N3L4uvL1agGKn2RZ9TqpFFpKsYBvqznG8Ynh47s88uPOUr4oPSg9gmXImw4an7l%2FiftVIV3KW8iaaEaM6Gv8bj1VHLwCLQRSIPeNiCZDWhGkm5GiTzTGo5wEILc5bGsjMkZnfXlrIQh%2FC%2F0K7ZkSxAnUHtZ71h6M%2BgCpGK00sB365Q2TClPdNjQN6zf7ap2%2BdXozt2M74GQA1NNnm68Kmd&X-Amz-Signature=8301d9b86ac29a93a12c95bfd04cdc26ed754bde771ee5ece365134996189073&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
