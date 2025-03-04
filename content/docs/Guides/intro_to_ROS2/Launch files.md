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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DC7DL62%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAxgr44aLjp0rShwzB29feCd34fCkgEokycOVtj51heAiEAwCwjRV5HwxDzybsqEkJEGanzpV%2F8Kyd08KgX6QMLpdYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGifUIlFtCxBBlQayrcAxq%2BN4%2B1AFn5PUeME%2FDUytxyXxOKPeZrwYflSIOgKUrb2vhpJrBP7FPM5C6LCp%2Fu%2FZKodWxgrjf26VwXfbetTQsgHcyU7aOHORaABta074Gv5mcsCPOSBR%2FkBIC6a0TgtSpByXLorflBM%2FZHVZqiqgtoMPNEYerF3L3ZObTfxx1dDCWG1LOfXT1ITF9T5f5xV3tdGH8e63KuNWrIb0skio%2Bt38Nvx8SCo%2BUa6PMEnG1%2BJ9kKwKqMvbpR89M1l8xHwmwuZTZgc44AmuYrcfU6KoF2PYrciQFco1EYq7n%2BDWcGliAY4Ms5fhr5UFj7g6lYCh1zrWDNkU2GlN1rSeS%2FPaKbLQn0PDlQ6EzpXj%2FikbqieiDTU36FOYXQfSuCjPWLdEJwxCisuKHMp4VRJb26PsslN248JfMKLdB%2BKuNPnVrXANDQSUGbXsksk%2B9sCnL5TB8w06y5XkFkAnuB1VMKooMOG1xT0oEqqlon0MGvzn21gPOzysKBjYf6tLP1NYVqxXJSm1xXZUOG1DcFZrhqXWFYydFA2w15XC4oRSjnZStm39D4v%2BvmMxUTb9JIwUKUd%2B4QP5x5Wh%2BL%2FXyUwNKufjcyqKwqxHVWxfBI6G6vdHsLWkO86lvUwzXihAdNMND2nL4GOqUBDqLvb7G%2B85xrXKA%2BrOHHdlSfyognFNwCn2Hb9V9v%2F5PaoNH5uNFVnFn5kOYcV%2B20J6%2BTxSoWON%2FZ4SzTDQUSo3hJOVmjUhBZPxChmvVFxHiicSq5yYhjen6%2Fsre6yNNyXnrVq6rhktKo6fWJakLvzDO9cWq0DtgQCt6b0obDR%2FM5gIF9x3sJt4R4MUhBayxH4DgeB5WI0v%2BoM1fb2cVhg2gbf7SG&X-Amz-Signature=28447be33cebb3eaa92401f1bc510b34a2bd4940a51aa90410bad33bb680024a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DC7DL62%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAxgr44aLjp0rShwzB29feCd34fCkgEokycOVtj51heAiEAwCwjRV5HwxDzybsqEkJEGanzpV%2F8Kyd08KgX6QMLpdYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGifUIlFtCxBBlQayrcAxq%2BN4%2B1AFn5PUeME%2FDUytxyXxOKPeZrwYflSIOgKUrb2vhpJrBP7FPM5C6LCp%2Fu%2FZKodWxgrjf26VwXfbetTQsgHcyU7aOHORaABta074Gv5mcsCPOSBR%2FkBIC6a0TgtSpByXLorflBM%2FZHVZqiqgtoMPNEYerF3L3ZObTfxx1dDCWG1LOfXT1ITF9T5f5xV3tdGH8e63KuNWrIb0skio%2Bt38Nvx8SCo%2BUa6PMEnG1%2BJ9kKwKqMvbpR89M1l8xHwmwuZTZgc44AmuYrcfU6KoF2PYrciQFco1EYq7n%2BDWcGliAY4Ms5fhr5UFj7g6lYCh1zrWDNkU2GlN1rSeS%2FPaKbLQn0PDlQ6EzpXj%2FikbqieiDTU36FOYXQfSuCjPWLdEJwxCisuKHMp4VRJb26PsslN248JfMKLdB%2BKuNPnVrXANDQSUGbXsksk%2B9sCnL5TB8w06y5XkFkAnuB1VMKooMOG1xT0oEqqlon0MGvzn21gPOzysKBjYf6tLP1NYVqxXJSm1xXZUOG1DcFZrhqXWFYydFA2w15XC4oRSjnZStm39D4v%2BvmMxUTb9JIwUKUd%2B4QP5x5Wh%2BL%2FXyUwNKufjcyqKwqxHVWxfBI6G6vdHsLWkO86lvUwzXihAdNMND2nL4GOqUBDqLvb7G%2B85xrXKA%2BrOHHdlSfyognFNwCn2Hb9V9v%2F5PaoNH5uNFVnFn5kOYcV%2B20J6%2BTxSoWON%2FZ4SzTDQUSo3hJOVmjUhBZPxChmvVFxHiicSq5yYhjen6%2Fsre6yNNyXnrVq6rhktKo6fWJakLvzDO9cWq0DtgQCt6b0obDR%2FM5gIF9x3sJt4R4MUhBayxH4DgeB5WI0v%2BoM1fb2cVhg2gbf7SG&X-Amz-Signature=15dc4e81f83a8c13a4cd7ad1afbddb36331e682d8d0b3c0e3e6bcd5e78998651&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DC7DL62%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAxgr44aLjp0rShwzB29feCd34fCkgEokycOVtj51heAiEAwCwjRV5HwxDzybsqEkJEGanzpV%2F8Kyd08KgX6QMLpdYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGifUIlFtCxBBlQayrcAxq%2BN4%2B1AFn5PUeME%2FDUytxyXxOKPeZrwYflSIOgKUrb2vhpJrBP7FPM5C6LCp%2Fu%2FZKodWxgrjf26VwXfbetTQsgHcyU7aOHORaABta074Gv5mcsCPOSBR%2FkBIC6a0TgtSpByXLorflBM%2FZHVZqiqgtoMPNEYerF3L3ZObTfxx1dDCWG1LOfXT1ITF9T5f5xV3tdGH8e63KuNWrIb0skio%2Bt38Nvx8SCo%2BUa6PMEnG1%2BJ9kKwKqMvbpR89M1l8xHwmwuZTZgc44AmuYrcfU6KoF2PYrciQFco1EYq7n%2BDWcGliAY4Ms5fhr5UFj7g6lYCh1zrWDNkU2GlN1rSeS%2FPaKbLQn0PDlQ6EzpXj%2FikbqieiDTU36FOYXQfSuCjPWLdEJwxCisuKHMp4VRJb26PsslN248JfMKLdB%2BKuNPnVrXANDQSUGbXsksk%2B9sCnL5TB8w06y5XkFkAnuB1VMKooMOG1xT0oEqqlon0MGvzn21gPOzysKBjYf6tLP1NYVqxXJSm1xXZUOG1DcFZrhqXWFYydFA2w15XC4oRSjnZStm39D4v%2BvmMxUTb9JIwUKUd%2B4QP5x5Wh%2BL%2FXyUwNKufjcyqKwqxHVWxfBI6G6vdHsLWkO86lvUwzXihAdNMND2nL4GOqUBDqLvb7G%2B85xrXKA%2BrOHHdlSfyognFNwCn2Hb9V9v%2F5PaoNH5uNFVnFn5kOYcV%2B20J6%2BTxSoWON%2FZ4SzTDQUSo3hJOVmjUhBZPxChmvVFxHiicSq5yYhjen6%2Fsre6yNNyXnrVq6rhktKo6fWJakLvzDO9cWq0DtgQCt6b0obDR%2FM5gIF9x3sJt4R4MUhBayxH4DgeB5WI0v%2BoM1fb2cVhg2gbf7SG&X-Amz-Signature=01ca64d5d92cad361ad6b95aa6363e3eff8bb9fd96c995b5a96d3a3ab8e7dee2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
