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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFBPIU7W%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjJwh3Ls%2Fd7ex23kQNv%2F%2Btuu1R6V5xoDuoLe5o0HxKLAiEA10JYZLAczljN4UYqwNeF0M9C66Uq%2FENW6JF3occ9jb4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDMxGDj%2BTK3MsGP5cGyrcA6OV2HdaVDHE2Bk35Uf7GQSrom9NjmFgQGOeTl513JuHD3OqU46ePSFs0CGL56ZRPpNeqGj%2FIXTJ%2BAm2N8ACHJLbx2fo5WExo7dCPLfzVGHhkWVtQ%2FQenfPjLeU5owvMxcHgRHS9kXG5fmSEXuRbR7qayfYljy1aBHDCAT4fmjLvEYqXwhkJEzSss3drmQsr%2Bjg%2BguwwFCWD9uZJAyKvB7UUb4w50hQ4nEuN6x6NNRAikbnMjM1QxXQl3VMJYHODU1m0W%2BWLpsVmMDCoLFpnAzes89oaecRaVvGZbgbUJMOUZZPZ1sPY89IrERhUa%2BWYhaCBwA3RyATXZpluYPifQ92mmQOHUZpWL8855HRHuD2e8vjaPZTJjawK5G59S6oHF5DJ2X7PJprXck%2BF6DZbfuZ58OH%2FQ36PscZGZSI%2FH9hnoknjlLR%2FN396WKNKHRP2r4Ojzhehlj3jFtEas%2BfEt4imtLOCq%2FjnwzfhWtMgC1ovAp07V%2FYo4Bbrc3eQClswez7%2FipMvWr2vnSiu4IF1kY2ihbbqIbelKbQTO8gHUeKzGQ9G%2Bl6Jr8I94ZPcU2SjOVQXuIomciUUjgM8DhKHm%2BisPjoaaLTHuZ2RTAUWlbh9WiR%2FcQaGp08QD8vrMKy57sAGOqUB9XJJcF630wndtKF4E0yKXodns0PuKvmFJulT0NEvdUFmPJNmqcsVl%2FxUly7%2Fk1b%2B5%2BWFBs%2FoYrDSw5qYxEU%2FZDVnsrTQcEoAEnoKlEx6%2B64nhtIfyaPYo9H6sN%2BckKGz1Id5anh%2FswVVlupDf%2FD5gowJObRitRTf4y8t%2FpwIRxeBS1yq5L%2FDMWfFtFWKSCePov%2FnOZTp%2F8bZYisHSbA5isMhwGtd&X-Amz-Signature=b0882c8b4f2b259a24b3270cdd55764b51a5f8f301b175739d5d607de9b30ad3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFBPIU7W%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjJwh3Ls%2Fd7ex23kQNv%2F%2Btuu1R6V5xoDuoLe5o0HxKLAiEA10JYZLAczljN4UYqwNeF0M9C66Uq%2FENW6JF3occ9jb4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDMxGDj%2BTK3MsGP5cGyrcA6OV2HdaVDHE2Bk35Uf7GQSrom9NjmFgQGOeTl513JuHD3OqU46ePSFs0CGL56ZRPpNeqGj%2FIXTJ%2BAm2N8ACHJLbx2fo5WExo7dCPLfzVGHhkWVtQ%2FQenfPjLeU5owvMxcHgRHS9kXG5fmSEXuRbR7qayfYljy1aBHDCAT4fmjLvEYqXwhkJEzSss3drmQsr%2Bjg%2BguwwFCWD9uZJAyKvB7UUb4w50hQ4nEuN6x6NNRAikbnMjM1QxXQl3VMJYHODU1m0W%2BWLpsVmMDCoLFpnAzes89oaecRaVvGZbgbUJMOUZZPZ1sPY89IrERhUa%2BWYhaCBwA3RyATXZpluYPifQ92mmQOHUZpWL8855HRHuD2e8vjaPZTJjawK5G59S6oHF5DJ2X7PJprXck%2BF6DZbfuZ58OH%2FQ36PscZGZSI%2FH9hnoknjlLR%2FN396WKNKHRP2r4Ojzhehlj3jFtEas%2BfEt4imtLOCq%2FjnwzfhWtMgC1ovAp07V%2FYo4Bbrc3eQClswez7%2FipMvWr2vnSiu4IF1kY2ihbbqIbelKbQTO8gHUeKzGQ9G%2Bl6Jr8I94ZPcU2SjOVQXuIomciUUjgM8DhKHm%2BisPjoaaLTHuZ2RTAUWlbh9WiR%2FcQaGp08QD8vrMKy57sAGOqUB9XJJcF630wndtKF4E0yKXodns0PuKvmFJulT0NEvdUFmPJNmqcsVl%2FxUly7%2Fk1b%2B5%2BWFBs%2FoYrDSw5qYxEU%2FZDVnsrTQcEoAEnoKlEx6%2B64nhtIfyaPYo9H6sN%2BckKGz1Id5anh%2FswVVlupDf%2FD5gowJObRitRTf4y8t%2FpwIRxeBS1yq5L%2FDMWfFtFWKSCePov%2FnOZTp%2F8bZYisHSbA5isMhwGtd&X-Amz-Signature=808654c6114983fba55cceb5b7eafbcf689e884b44fc34325fc23ca31c1e08b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFBPIU7W%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjJwh3Ls%2Fd7ex23kQNv%2F%2Btuu1R6V5xoDuoLe5o0HxKLAiEA10JYZLAczljN4UYqwNeF0M9C66Uq%2FENW6JF3occ9jb4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDMxGDj%2BTK3MsGP5cGyrcA6OV2HdaVDHE2Bk35Uf7GQSrom9NjmFgQGOeTl513JuHD3OqU46ePSFs0CGL56ZRPpNeqGj%2FIXTJ%2BAm2N8ACHJLbx2fo5WExo7dCPLfzVGHhkWVtQ%2FQenfPjLeU5owvMxcHgRHS9kXG5fmSEXuRbR7qayfYljy1aBHDCAT4fmjLvEYqXwhkJEzSss3drmQsr%2Bjg%2BguwwFCWD9uZJAyKvB7UUb4w50hQ4nEuN6x6NNRAikbnMjM1QxXQl3VMJYHODU1m0W%2BWLpsVmMDCoLFpnAzes89oaecRaVvGZbgbUJMOUZZPZ1sPY89IrERhUa%2BWYhaCBwA3RyATXZpluYPifQ92mmQOHUZpWL8855HRHuD2e8vjaPZTJjawK5G59S6oHF5DJ2X7PJprXck%2BF6DZbfuZ58OH%2FQ36PscZGZSI%2FH9hnoknjlLR%2FN396WKNKHRP2r4Ojzhehlj3jFtEas%2BfEt4imtLOCq%2FjnwzfhWtMgC1ovAp07V%2FYo4Bbrc3eQClswez7%2FipMvWr2vnSiu4IF1kY2ihbbqIbelKbQTO8gHUeKzGQ9G%2Bl6Jr8I94ZPcU2SjOVQXuIomciUUjgM8DhKHm%2BisPjoaaLTHuZ2RTAUWlbh9WiR%2FcQaGp08QD8vrMKy57sAGOqUB9XJJcF630wndtKF4E0yKXodns0PuKvmFJulT0NEvdUFmPJNmqcsVl%2FxUly7%2Fk1b%2B5%2BWFBs%2FoYrDSw5qYxEU%2FZDVnsrTQcEoAEnoKlEx6%2B64nhtIfyaPYo9H6sN%2BckKGz1Id5anh%2FswVVlupDf%2FD5gowJObRitRTf4y8t%2FpwIRxeBS1yq5L%2FDMWfFtFWKSCePov%2FnOZTp%2F8bZYisHSbA5isMhwGtd&X-Amz-Signature=d447227daf7943d6c163e2345e0f4f10b9f3a03dc4887965141724b7982269ac&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
