---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XVIZLCK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHFzsQur0pXNfoBp4pyHceAIfyl1%2BEEkrnikKjTFvqRdAiATwJ%2FjFTuwIrE2N%2FJJfNWsSuPtIxWzQMXs9JIWfOoGdir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMk4KMQXhC1ZTl%2BB%2BtKtwDsOfTy9s2WA0%2BO1h%2B%2BzU5rRej5X%2BOnFeL0C%2Be4W04%2BOglmemwuH845ibs8hODntBjGexYOE%2FUDrsPk%2BM228B9uL6AA6pgyYbd81Aa6cBIYTZJcRYqZ35HfQpCW0lf0CQd766hmcGlkAZIv%2FE0daLez%2BLHYHykWxDCCuS9v8P8574tFUXTwbFBYP0BY0VuBgzJ0Nkf7CVxpzdnEwQv74VETwCMDUY5iQVmj9xUCZuQT0uKGDuQe2xBW0hY9tkyovjsie%2B%2BIsUpgk8CmjnumbKXC2Z9lX%2BqnLwcwjMi%2BzSenmCcWacNauKcsm40RzSCDm39lQIl%2BX83b66YxnH0CSViWPCBNBQJBDc%2BzpQmvcU890SHbiyFlPL7Zu251cuILMK8716ajfrsliHrIYvEIsKh2I%2F1mcXErR%2BeZkqUJmYTU2q1jscwACRjEIBdsKmlgmz48RX0tFef3fEPn4L2KbuhrXqLu0IshVbC7iKP82QJEO8F7Az%2FXRCqNYVgpysNdin8CA48RmZ7xlLuwUNIJvHX51iemP8aUj1M6vuOCYp9TMtLm5Bbea%2B4MHae9iE%2BzPVCBD%2BNWs8K1CDxxfqyj2bGO6vjJP95c0K574e2HoQ9dqf%2FoQRXWrsw%2FMgKBdAwqdr9xAY6pgEobvgl5ILnPrPGvQGyJJrKz%2FMrXoM3klgp7NTuiHvV0NtdFWc%2BtX5z8QcZ3ZlV9Xs6nbQhFoXTybTY9LHTT%2BGMrAGDCFAwb6Ht7SgdSx0WjLc6rV8BW6cq097d04BMUtkuyzA4dVSTN96CiD%2BwZ822WiR5kbFkn5ho4Q0qsOkFMCOs4g8jDU5mIIzO88ts%2BkQ6xxlMhRl2Nv5AwNsAZ0JeYR0nQUmL&X-Amz-Signature=440df33616b27898d71c70334b2e6624fd88cf0b592c5430e1a740d0e88d5a66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XVIZLCK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHFzsQur0pXNfoBp4pyHceAIfyl1%2BEEkrnikKjTFvqRdAiATwJ%2FjFTuwIrE2N%2FJJfNWsSuPtIxWzQMXs9JIWfOoGdir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMk4KMQXhC1ZTl%2BB%2BtKtwDsOfTy9s2WA0%2BO1h%2B%2BzU5rRej5X%2BOnFeL0C%2Be4W04%2BOglmemwuH845ibs8hODntBjGexYOE%2FUDrsPk%2BM228B9uL6AA6pgyYbd81Aa6cBIYTZJcRYqZ35HfQpCW0lf0CQd766hmcGlkAZIv%2FE0daLez%2BLHYHykWxDCCuS9v8P8574tFUXTwbFBYP0BY0VuBgzJ0Nkf7CVxpzdnEwQv74VETwCMDUY5iQVmj9xUCZuQT0uKGDuQe2xBW0hY9tkyovjsie%2B%2BIsUpgk8CmjnumbKXC2Z9lX%2BqnLwcwjMi%2BzSenmCcWacNauKcsm40RzSCDm39lQIl%2BX83b66YxnH0CSViWPCBNBQJBDc%2BzpQmvcU890SHbiyFlPL7Zu251cuILMK8716ajfrsliHrIYvEIsKh2I%2F1mcXErR%2BeZkqUJmYTU2q1jscwACRjEIBdsKmlgmz48RX0tFef3fEPn4L2KbuhrXqLu0IshVbC7iKP82QJEO8F7Az%2FXRCqNYVgpysNdin8CA48RmZ7xlLuwUNIJvHX51iemP8aUj1M6vuOCYp9TMtLm5Bbea%2B4MHae9iE%2BzPVCBD%2BNWs8K1CDxxfqyj2bGO6vjJP95c0K574e2HoQ9dqf%2FoQRXWrsw%2FMgKBdAwqdr9xAY6pgEobvgl5ILnPrPGvQGyJJrKz%2FMrXoM3klgp7NTuiHvV0NtdFWc%2BtX5z8QcZ3ZlV9Xs6nbQhFoXTybTY9LHTT%2BGMrAGDCFAwb6Ht7SgdSx0WjLc6rV8BW6cq097d04BMUtkuyzA4dVSTN96CiD%2BwZ822WiR5kbFkn5ho4Q0qsOkFMCOs4g8jDU5mIIzO88ts%2BkQ6xxlMhRl2Nv5AwNsAZ0JeYR0nQUmL&X-Amz-Signature=a7441e6d82f8fe6141ddb19aeb7feadfe30f57578d7b218008a7e87737383851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XVIZLCK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHFzsQur0pXNfoBp4pyHceAIfyl1%2BEEkrnikKjTFvqRdAiATwJ%2FjFTuwIrE2N%2FJJfNWsSuPtIxWzQMXs9JIWfOoGdir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMk4KMQXhC1ZTl%2BB%2BtKtwDsOfTy9s2WA0%2BO1h%2B%2BzU5rRej5X%2BOnFeL0C%2Be4W04%2BOglmemwuH845ibs8hODntBjGexYOE%2FUDrsPk%2BM228B9uL6AA6pgyYbd81Aa6cBIYTZJcRYqZ35HfQpCW0lf0CQd766hmcGlkAZIv%2FE0daLez%2BLHYHykWxDCCuS9v8P8574tFUXTwbFBYP0BY0VuBgzJ0Nkf7CVxpzdnEwQv74VETwCMDUY5iQVmj9xUCZuQT0uKGDuQe2xBW0hY9tkyovjsie%2B%2BIsUpgk8CmjnumbKXC2Z9lX%2BqnLwcwjMi%2BzSenmCcWacNauKcsm40RzSCDm39lQIl%2BX83b66YxnH0CSViWPCBNBQJBDc%2BzpQmvcU890SHbiyFlPL7Zu251cuILMK8716ajfrsliHrIYvEIsKh2I%2F1mcXErR%2BeZkqUJmYTU2q1jscwACRjEIBdsKmlgmz48RX0tFef3fEPn4L2KbuhrXqLu0IshVbC7iKP82QJEO8F7Az%2FXRCqNYVgpysNdin8CA48RmZ7xlLuwUNIJvHX51iemP8aUj1M6vuOCYp9TMtLm5Bbea%2B4MHae9iE%2BzPVCBD%2BNWs8K1CDxxfqyj2bGO6vjJP95c0K574e2HoQ9dqf%2FoQRXWrsw%2FMgKBdAwqdr9xAY6pgEobvgl5ILnPrPGvQGyJJrKz%2FMrXoM3klgp7NTuiHvV0NtdFWc%2BtX5z8QcZ3ZlV9Xs6nbQhFoXTybTY9LHTT%2BGMrAGDCFAwb6Ht7SgdSx0WjLc6rV8BW6cq097d04BMUtkuyzA4dVSTN96CiD%2BwZ822WiR5kbFkn5ho4Q0qsOkFMCOs4g8jDU5mIIzO88ts%2BkQ6xxlMhRl2Nv5AwNsAZ0JeYR0nQUmL&X-Amz-Signature=5f49cf592ded5e69f5689ab6dd42edec9e1bfd6ecb278d62bfb05363e668f4cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
