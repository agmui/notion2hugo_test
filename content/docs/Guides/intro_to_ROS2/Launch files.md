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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5SP3J7X%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIDsfMrGBKGc%2BRvJrnffzvgLcDPsjIBCj7QPHcJE2GmLqAiEA3%2FVar%2B%2FOz4ZbsBky0uZ59Ub4M26AjCdDl6SUWvOU5coq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDFNf%2F2tryROOgW%2FEnyrcA4N4e%2F4b9yXDZJ9fQ29DZStu6AaJS8MO9U6%2F%2Fb8rIdgcpDy7exSRhqbcgwWAuoJJkBrWpcpfmK5fIhOfjQJbGeNtBRgZ0Rqsy1G0TiPqZRF3XzUHFUCbz7EkEG8FtM5oRp8KDYjiLd6GRIgVMznBWhvD1%2BVVbmBtk32cgCrrYp75wlKdSgmDEZw772fdmzHakF74jnHAkBLneE%2B1No90MX%2Bun9Q4tgrHbeuOcRWHYg7zLMQxWWZRA%2FcvBwAhmBE5C2L0fsaAU9zUr9ZlTnS71jf1BP44djCXca0M4SKBVF26j3wkgxHxgUGqsF7CsfoII%2FMqEct30nVmeAwj46Zmi71lcEG4Vi2TVz9rWLP8HnU%2Fz2JCVmhiObK8fbtLdmtzi2YubQ%2B2yL%2F%2BUZ%2FU78HnnoS4xN2r%2B4g1uh5p1Qft9xu0xsa2WhASyb0Gf7usV8ECFxkSqPG%2BpmLdQ1bEtBGht790GimwogFl0dPNOkWHeywp%2FN%2BDrl3UX%2F0X%2BGziY7zjxk9yaigAAS1ixC3bNxTL2ImwILHzlUQkqVimaBz12NESS8jEZzAjr%2BMCjMWw6Rk8O0yHHog78lyO0tG38wzA9p%2BqxwLwN%2BN03LHGCWmJHMM9aY0wzmrKV06QSsLFMKOilr0GOqUBoV5LlWkZN5VzxeZ5iqlHxjE%2Ff6bFbimKIsZrSSY3uh8WyKpiHdoD%2F4OBfR2p4T3fSnTmBO51l9Hfdiaek7bdrWiDa4qtNjWn6whBFJZJz6X9RFk64s%2FCg%2BIvrEc7z9iYF6EiMg%2BPUYw4IeKbEE%2BIrdPprAitJqqHRziwvqTRgy%2FwB7UxU45TICmSL0iSK9XnKtFh9RogxvzmF6CLpIw63cVriJyh&X-Amz-Signature=873ccebc40784891e063a7d9e5f208d723f41c2a42fdd5cf1bede5e802478d4b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5SP3J7X%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIDsfMrGBKGc%2BRvJrnffzvgLcDPsjIBCj7QPHcJE2GmLqAiEA3%2FVar%2B%2FOz4ZbsBky0uZ59Ub4M26AjCdDl6SUWvOU5coq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDFNf%2F2tryROOgW%2FEnyrcA4N4e%2F4b9yXDZJ9fQ29DZStu6AaJS8MO9U6%2F%2Fb8rIdgcpDy7exSRhqbcgwWAuoJJkBrWpcpfmK5fIhOfjQJbGeNtBRgZ0Rqsy1G0TiPqZRF3XzUHFUCbz7EkEG8FtM5oRp8KDYjiLd6GRIgVMznBWhvD1%2BVVbmBtk32cgCrrYp75wlKdSgmDEZw772fdmzHakF74jnHAkBLneE%2B1No90MX%2Bun9Q4tgrHbeuOcRWHYg7zLMQxWWZRA%2FcvBwAhmBE5C2L0fsaAU9zUr9ZlTnS71jf1BP44djCXca0M4SKBVF26j3wkgxHxgUGqsF7CsfoII%2FMqEct30nVmeAwj46Zmi71lcEG4Vi2TVz9rWLP8HnU%2Fz2JCVmhiObK8fbtLdmtzi2YubQ%2B2yL%2F%2BUZ%2FU78HnnoS4xN2r%2B4g1uh5p1Qft9xu0xsa2WhASyb0Gf7usV8ECFxkSqPG%2BpmLdQ1bEtBGht790GimwogFl0dPNOkWHeywp%2FN%2BDrl3UX%2F0X%2BGziY7zjxk9yaigAAS1ixC3bNxTL2ImwILHzlUQkqVimaBz12NESS8jEZzAjr%2BMCjMWw6Rk8O0yHHog78lyO0tG38wzA9p%2BqxwLwN%2BN03LHGCWmJHMM9aY0wzmrKV06QSsLFMKOilr0GOqUBoV5LlWkZN5VzxeZ5iqlHxjE%2Ff6bFbimKIsZrSSY3uh8WyKpiHdoD%2F4OBfR2p4T3fSnTmBO51l9Hfdiaek7bdrWiDa4qtNjWn6whBFJZJz6X9RFk64s%2FCg%2BIvrEc7z9iYF6EiMg%2BPUYw4IeKbEE%2BIrdPprAitJqqHRziwvqTRgy%2FwB7UxU45TICmSL0iSK9XnKtFh9RogxvzmF6CLpIw63cVriJyh&X-Amz-Signature=25fe7aff94508c1006c10568c6d58021aeffffc15c6ab73280d09f1b318488f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5SP3J7X%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIDsfMrGBKGc%2BRvJrnffzvgLcDPsjIBCj7QPHcJE2GmLqAiEA3%2FVar%2B%2FOz4ZbsBky0uZ59Ub4M26AjCdDl6SUWvOU5coq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDFNf%2F2tryROOgW%2FEnyrcA4N4e%2F4b9yXDZJ9fQ29DZStu6AaJS8MO9U6%2F%2Fb8rIdgcpDy7exSRhqbcgwWAuoJJkBrWpcpfmK5fIhOfjQJbGeNtBRgZ0Rqsy1G0TiPqZRF3XzUHFUCbz7EkEG8FtM5oRp8KDYjiLd6GRIgVMznBWhvD1%2BVVbmBtk32cgCrrYp75wlKdSgmDEZw772fdmzHakF74jnHAkBLneE%2B1No90MX%2Bun9Q4tgrHbeuOcRWHYg7zLMQxWWZRA%2FcvBwAhmBE5C2L0fsaAU9zUr9ZlTnS71jf1BP44djCXca0M4SKBVF26j3wkgxHxgUGqsF7CsfoII%2FMqEct30nVmeAwj46Zmi71lcEG4Vi2TVz9rWLP8HnU%2Fz2JCVmhiObK8fbtLdmtzi2YubQ%2B2yL%2F%2BUZ%2FU78HnnoS4xN2r%2B4g1uh5p1Qft9xu0xsa2WhASyb0Gf7usV8ECFxkSqPG%2BpmLdQ1bEtBGht790GimwogFl0dPNOkWHeywp%2FN%2BDrl3UX%2F0X%2BGziY7zjxk9yaigAAS1ixC3bNxTL2ImwILHzlUQkqVimaBz12NESS8jEZzAjr%2BMCjMWw6Rk8O0yHHog78lyO0tG38wzA9p%2BqxwLwN%2BN03LHGCWmJHMM9aY0wzmrKV06QSsLFMKOilr0GOqUBoV5LlWkZN5VzxeZ5iqlHxjE%2Ff6bFbimKIsZrSSY3uh8WyKpiHdoD%2F4OBfR2p4T3fSnTmBO51l9Hfdiaek7bdrWiDa4qtNjWn6whBFJZJz6X9RFk64s%2FCg%2BIvrEc7z9iYF6EiMg%2BPUYw4IeKbEE%2BIrdPprAitJqqHRziwvqTRgy%2FwB7UxU45TICmSL0iSK9XnKtFh9RogxvzmF6CLpIw63cVriJyh&X-Amz-Signature=7661bb605e004d523a38deecdbf7c9c7eb9a26ef91f1929d5a8e037be7aab184&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
