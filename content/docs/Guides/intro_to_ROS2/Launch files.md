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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHMRXAKF%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjnVlltfSKVX5scvWekVQXTiRbfFScnJoToSbgrQYZ5gIhAKMi8R7anIQy%2B%2F7dvGZOnrrTeP4J4%2BsbjliErIsYZISOKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFA1%2F1vJyy1UgVemAq3AP9l578I7XclVmot0BSHy9GhmiKMU2bSYgD%2FLGJGZqLjQo9c8yUNk5AyCFBbSCKyu3bPSBzsM8jjKOZ%2BlslqUctWfqwEMa%2FMNDzV2Hf4CJL76MUVVTKazKVcojhHVXETvxPLz1x8aeHCLr7rvuADepmFTbaUgFMq9iXE0KVf%2BSlKF2PMY5CmiPO%2FveA0RSxpE%2B9ev5IlOnhOgG%2BKPmOJnN9nKzsJe2yFVR6qe4eNFf%2F3U2gzFF2%2BCbMBtq2%2BWamMDhh9%2BKz%2FhN6dHc%2F5ZulHpZ%2Be9C96men8J6s%2Bqv%2BryPWqE%2Bk6e0%2FtEPu9riuMF5FC5pDUAj5Cao3ajQyokRUJXubRT1bCPhDNtrkQjrbC20%2BZpW21AwOZsET1fvd0dRwkeD%2FoNaucd0mB0snQf%2Fl2XI7hKiInMecboYNl%2FNDZJRx56guPVCJU%2FvhbqNn%2B%2B9z9BoMY%2Bv5HwrpeJSUWzb1tkq5ITj4ZZOxdmK4IJUWgXfeub66S7sku56k8z3Hu%2Bymz65Skr4d9T9G4Q%2BNo9acnDq4c8t5bXll6m9FSknOzkFJtv4fSdJJJoe30QOKYTVAoA%2BQ6xR2lmkP1j7OAF9DCDWW8uYenYYB%2Fp%2F1srZWYolpOWFCuShsM0qDLHPM%2FTCho8DDBjqkAcsUaa09YyRMpEKyUuMs9x%2BNi0zVGG0yAGJ4mHQ%2BZbvIVO8Z27ezzrHprzady6rNnvZYahd7bEh%2F1hQO2fthxnIOxbCwqYcjT0VOgu3QphDvyFiv0Ico3O99Ix8h%2Ftl9%2BWYRqUMBsimyQUbFZmbxKR0vMJo6EWuNSslBYQ2ms3BoD%2BOub%2BXk33HvABwgLe5W4el%2FiLTqjH8mLyOaX8eXmw8hljRP&X-Amz-Signature=abcd22638a1ebfbc4f556cdd82ff518ce27c90cb841111a9e35631b8c9154782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHMRXAKF%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjnVlltfSKVX5scvWekVQXTiRbfFScnJoToSbgrQYZ5gIhAKMi8R7anIQy%2B%2F7dvGZOnrrTeP4J4%2BsbjliErIsYZISOKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFA1%2F1vJyy1UgVemAq3AP9l578I7XclVmot0BSHy9GhmiKMU2bSYgD%2FLGJGZqLjQo9c8yUNk5AyCFBbSCKyu3bPSBzsM8jjKOZ%2BlslqUctWfqwEMa%2FMNDzV2Hf4CJL76MUVVTKazKVcojhHVXETvxPLz1x8aeHCLr7rvuADepmFTbaUgFMq9iXE0KVf%2BSlKF2PMY5CmiPO%2FveA0RSxpE%2B9ev5IlOnhOgG%2BKPmOJnN9nKzsJe2yFVR6qe4eNFf%2F3U2gzFF2%2BCbMBtq2%2BWamMDhh9%2BKz%2FhN6dHc%2F5ZulHpZ%2Be9C96men8J6s%2Bqv%2BryPWqE%2Bk6e0%2FtEPu9riuMF5FC5pDUAj5Cao3ajQyokRUJXubRT1bCPhDNtrkQjrbC20%2BZpW21AwOZsET1fvd0dRwkeD%2FoNaucd0mB0snQf%2Fl2XI7hKiInMecboYNl%2FNDZJRx56guPVCJU%2FvhbqNn%2B%2B9z9BoMY%2Bv5HwrpeJSUWzb1tkq5ITj4ZZOxdmK4IJUWgXfeub66S7sku56k8z3Hu%2Bymz65Skr4d9T9G4Q%2BNo9acnDq4c8t5bXll6m9FSknOzkFJtv4fSdJJJoe30QOKYTVAoA%2BQ6xR2lmkP1j7OAF9DCDWW8uYenYYB%2Fp%2F1srZWYolpOWFCuShsM0qDLHPM%2FTCho8DDBjqkAcsUaa09YyRMpEKyUuMs9x%2BNi0zVGG0yAGJ4mHQ%2BZbvIVO8Z27ezzrHprzady6rNnvZYahd7bEh%2F1hQO2fthxnIOxbCwqYcjT0VOgu3QphDvyFiv0Ico3O99Ix8h%2Ftl9%2BWYRqUMBsimyQUbFZmbxKR0vMJo6EWuNSslBYQ2ms3BoD%2BOub%2BXk33HvABwgLe5W4el%2FiLTqjH8mLyOaX8eXmw8hljRP&X-Amz-Signature=fe7fec55255257e7ff48eccee0161a8aceeb782d7fea9ea76b9f89b16160be6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHMRXAKF%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjnVlltfSKVX5scvWekVQXTiRbfFScnJoToSbgrQYZ5gIhAKMi8R7anIQy%2B%2F7dvGZOnrrTeP4J4%2BsbjliErIsYZISOKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFA1%2F1vJyy1UgVemAq3AP9l578I7XclVmot0BSHy9GhmiKMU2bSYgD%2FLGJGZqLjQo9c8yUNk5AyCFBbSCKyu3bPSBzsM8jjKOZ%2BlslqUctWfqwEMa%2FMNDzV2Hf4CJL76MUVVTKazKVcojhHVXETvxPLz1x8aeHCLr7rvuADepmFTbaUgFMq9iXE0KVf%2BSlKF2PMY5CmiPO%2FveA0RSxpE%2B9ev5IlOnhOgG%2BKPmOJnN9nKzsJe2yFVR6qe4eNFf%2F3U2gzFF2%2BCbMBtq2%2BWamMDhh9%2BKz%2FhN6dHc%2F5ZulHpZ%2Be9C96men8J6s%2Bqv%2BryPWqE%2Bk6e0%2FtEPu9riuMF5FC5pDUAj5Cao3ajQyokRUJXubRT1bCPhDNtrkQjrbC20%2BZpW21AwOZsET1fvd0dRwkeD%2FoNaucd0mB0snQf%2Fl2XI7hKiInMecboYNl%2FNDZJRx56guPVCJU%2FvhbqNn%2B%2B9z9BoMY%2Bv5HwrpeJSUWzb1tkq5ITj4ZZOxdmK4IJUWgXfeub66S7sku56k8z3Hu%2Bymz65Skr4d9T9G4Q%2BNo9acnDq4c8t5bXll6m9FSknOzkFJtv4fSdJJJoe30QOKYTVAoA%2BQ6xR2lmkP1j7OAF9DCDWW8uYenYYB%2Fp%2F1srZWYolpOWFCuShsM0qDLHPM%2FTCho8DDBjqkAcsUaa09YyRMpEKyUuMs9x%2BNi0zVGG0yAGJ4mHQ%2BZbvIVO8Z27ezzrHprzady6rNnvZYahd7bEh%2F1hQO2fthxnIOxbCwqYcjT0VOgu3QphDvyFiv0Ico3O99Ix8h%2Ftl9%2BWYRqUMBsimyQUbFZmbxKR0vMJo6EWuNSslBYQ2ms3BoD%2BOub%2BXk33HvABwgLe5W4el%2FiLTqjH8mLyOaX8eXmw8hljRP&X-Amz-Signature=b670800a5f15c8238ffd339fe4affcda20dfee4936f3e2c12eddc241b80bb673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
