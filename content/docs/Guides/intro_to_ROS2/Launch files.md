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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4NMXGIV%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD00BLl%2Bb%2FedkzwL%2BcWpzbQGFw4W5tvvH%2BXxH9p4zA2xwIhALAkrC9QiCnk8ch8TJAnBD7uyd%2BmTUbLhaf6%2F0AVEBPsKv8DCDEQABoMNjM3NDIzMTgzODA1Igw4bHktCDP6V2Ie8t8q3AMGVdx9%2ByaJrpkTvcAaTduF2%2F4lAS2VfU46cC%2FFRd9bRsGTA5C0kG1ZBPSYGSw3PelIZnW0z9AnnzzIvw3x02NG3RuzmNR5%2FNGWE6PFjNDMJEJCMYIfEc9Bobgf92BAOBoisLMaUNmBtE80C4%2B1IV5GOw6Nfb7EiYlFcOXpzXI0OAgZJBza4K7wgjGuSUXUlz5OSMQKMNOShzIddffDHAyMvywuXg0abmGlyEXueDMK9T8KbQVSO490gZBnfxhaHzhJw3Tta0LthgZbc4UV0p1Dq5b07yh7XY4eTFr0OBSHoKGDiwC8cns%2Bj%2B7jmuwiKwnM9mMSSYFEPuWMmWW8FStmzrAGwdasQyNHGgXg1Prpl0Fkq9lsW%2FKrDL3d0nukx6aSPkQ%2Fbg95STjXqk25QtUINFTMdi41jy8JOVvzWMOLf3Tf4REI58RJHfhOzKTueWnlIVO166k%2BsvADs0MnPn4GX6mk7uWRtlhq3GDoSivaX69DvSHWP%2FqF7cjtS%2BUknFhqzf5mLn9tfCX6fqMDeCrJyaAa5e8nat8r1SUy4pwre5naADvSkqrz7nkIDvfVJa%2FnMElpM0qhVgkJNEcmAUhBrU1UCbPhk8xILbkeCxaST%2FS%2BWoiBNNHbBO8lejCQ3oHCBjqkAbf7ibZ2Z86lpLbEZRYKYBFHBkw7yOyPec3fOb1tcJtCkDuN75IdhXhulqQZyNf6fKSTzmt5Bu6U8Z8AEuX7PUKTfy5KvsayDa1hrhfo%2B5zWamEur%2Fte33OZxdlQ9LzbDWdKjLXoffAnTerJlTtO1suoqqvh5y2NWbhw8efPmQ2cy9iJtVOb9rFhV82TI%2BAQkCBrd1AYtKXnA7rrnYQyp%2FKjJz4v&X-Amz-Signature=576665dfa8cbfe22ca328e1527ac687af884f8ac48d865cf86fb93bf10693561&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4NMXGIV%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD00BLl%2Bb%2FedkzwL%2BcWpzbQGFw4W5tvvH%2BXxH9p4zA2xwIhALAkrC9QiCnk8ch8TJAnBD7uyd%2BmTUbLhaf6%2F0AVEBPsKv8DCDEQABoMNjM3NDIzMTgzODA1Igw4bHktCDP6V2Ie8t8q3AMGVdx9%2ByaJrpkTvcAaTduF2%2F4lAS2VfU46cC%2FFRd9bRsGTA5C0kG1ZBPSYGSw3PelIZnW0z9AnnzzIvw3x02NG3RuzmNR5%2FNGWE6PFjNDMJEJCMYIfEc9Bobgf92BAOBoisLMaUNmBtE80C4%2B1IV5GOw6Nfb7EiYlFcOXpzXI0OAgZJBza4K7wgjGuSUXUlz5OSMQKMNOShzIddffDHAyMvywuXg0abmGlyEXueDMK9T8KbQVSO490gZBnfxhaHzhJw3Tta0LthgZbc4UV0p1Dq5b07yh7XY4eTFr0OBSHoKGDiwC8cns%2Bj%2B7jmuwiKwnM9mMSSYFEPuWMmWW8FStmzrAGwdasQyNHGgXg1Prpl0Fkq9lsW%2FKrDL3d0nukx6aSPkQ%2Fbg95STjXqk25QtUINFTMdi41jy8JOVvzWMOLf3Tf4REI58RJHfhOzKTueWnlIVO166k%2BsvADs0MnPn4GX6mk7uWRtlhq3GDoSivaX69DvSHWP%2FqF7cjtS%2BUknFhqzf5mLn9tfCX6fqMDeCrJyaAa5e8nat8r1SUy4pwre5naADvSkqrz7nkIDvfVJa%2FnMElpM0qhVgkJNEcmAUhBrU1UCbPhk8xILbkeCxaST%2FS%2BWoiBNNHbBO8lejCQ3oHCBjqkAbf7ibZ2Z86lpLbEZRYKYBFHBkw7yOyPec3fOb1tcJtCkDuN75IdhXhulqQZyNf6fKSTzmt5Bu6U8Z8AEuX7PUKTfy5KvsayDa1hrhfo%2B5zWamEur%2Fte33OZxdlQ9LzbDWdKjLXoffAnTerJlTtO1suoqqvh5y2NWbhw8efPmQ2cy9iJtVOb9rFhV82TI%2BAQkCBrd1AYtKXnA7rrnYQyp%2FKjJz4v&X-Amz-Signature=9b9f7e3d664a597247940bd12b129bcc463fc59bd3a65f8d8a3202900e9c5372&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4NMXGIV%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD00BLl%2Bb%2FedkzwL%2BcWpzbQGFw4W5tvvH%2BXxH9p4zA2xwIhALAkrC9QiCnk8ch8TJAnBD7uyd%2BmTUbLhaf6%2F0AVEBPsKv8DCDEQABoMNjM3NDIzMTgzODA1Igw4bHktCDP6V2Ie8t8q3AMGVdx9%2ByaJrpkTvcAaTduF2%2F4lAS2VfU46cC%2FFRd9bRsGTA5C0kG1ZBPSYGSw3PelIZnW0z9AnnzzIvw3x02NG3RuzmNR5%2FNGWE6PFjNDMJEJCMYIfEc9Bobgf92BAOBoisLMaUNmBtE80C4%2B1IV5GOw6Nfb7EiYlFcOXpzXI0OAgZJBza4K7wgjGuSUXUlz5OSMQKMNOShzIddffDHAyMvywuXg0abmGlyEXueDMK9T8KbQVSO490gZBnfxhaHzhJw3Tta0LthgZbc4UV0p1Dq5b07yh7XY4eTFr0OBSHoKGDiwC8cns%2Bj%2B7jmuwiKwnM9mMSSYFEPuWMmWW8FStmzrAGwdasQyNHGgXg1Prpl0Fkq9lsW%2FKrDL3d0nukx6aSPkQ%2Fbg95STjXqk25QtUINFTMdi41jy8JOVvzWMOLf3Tf4REI58RJHfhOzKTueWnlIVO166k%2BsvADs0MnPn4GX6mk7uWRtlhq3GDoSivaX69DvSHWP%2FqF7cjtS%2BUknFhqzf5mLn9tfCX6fqMDeCrJyaAa5e8nat8r1SUy4pwre5naADvSkqrz7nkIDvfVJa%2FnMElpM0qhVgkJNEcmAUhBrU1UCbPhk8xILbkeCxaST%2FS%2BWoiBNNHbBO8lejCQ3oHCBjqkAbf7ibZ2Z86lpLbEZRYKYBFHBkw7yOyPec3fOb1tcJtCkDuN75IdhXhulqQZyNf6fKSTzmt5Bu6U8Z8AEuX7PUKTfy5KvsayDa1hrhfo%2B5zWamEur%2Fte33OZxdlQ9LzbDWdKjLXoffAnTerJlTtO1suoqqvh5y2NWbhw8efPmQ2cy9iJtVOb9rFhV82TI%2BAQkCBrd1AYtKXnA7rrnYQyp%2FKjJz4v&X-Amz-Signature=7c22649006346555ed9c9f594e23d93d241701e58b4df0a50ef64f3dd163937b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
