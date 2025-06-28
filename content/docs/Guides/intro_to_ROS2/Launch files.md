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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627A5F2XU%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGolDdUCC%2BUkJYhbQTv%2Fwv2eq%2FvA2BkbD%2FgFaltMMi9gIgUPiyKdAg3SGSutWUGULn77ZjGbTpwd77vbxbOfTr6Y0qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbWXQpso%2Frv7nh1XSrcA%2FLpUw4M2M%2BuM6JmdvMrA%2Buc6c1i49jJgI5qG36eskPmryLAeC9mrsyntAQXgym3fPajwNNCw%2F%2BQYVS9KCASFebkw2YyBqJf1HcVqEwwQbMGiX7WIuZkPlQK9LMH0jCldo1OUcAK2GsR1r8f9LtInyRFes07ZqOVTYCkdGV0viG8b%2FPmZEJOxbF3K4VAMtDslBHZv3mbdl8Os8oSyy4DV1rcAqththCjkO4jzC5faNnQWdraaG4vm7zffYoWv2r48y%2BmW7aBsHof6c1yy56k4Q%2FKPq%2Ba9sH1H9quMdMH6rJlNv8hlQkXQfbt%2FetcOe81LF8it%2FObAIACxStOBTBtEGxDoBSh0RaLvoHjq35HksaITlFP6HbI2t%2FsbI%2Bgodqq248rwyyFF9zvj4OaK795N8sBtjJSyGRlaJSZlmcjEK4hZ2wcOGHGiKlEnpjoqpqXyZbkZr4hzgN6HM0dzcX2rmpo61j4BAhDqaiMCZkOd2nWu3b%2BcCUy0F4PhAPkUyfBBWA9u7uhd2FsylKFiwD6BQUxVTrc2A83FI%2FDHIWKro7tYcb%2BKGZOrTTnui%2BzeSch0%2FDUY%2B2xb8ylIhAsXHppfPk5JTALCshH%2FSKsQslP5l8omCHfccmBId3Q8YAEMIGA%2FcIGOqUBP8eL0i0H%2FvUewF03jSwmsujAQis0OY062BlDKC1qw6PJGIOGfcYW0ANkizXvu%2B0FgCf5NfCh3QHIL4NIXrAin20WRDB9DAx2bfX%2BTmFl7v9Nkblo35Rzc7WDKh6ueZfdzHxflaq1uyMrKJbBOaoNE9WE9jcRgMSOjEMJvipgq%2BG%2FrHqlq6Rzhg%2BYANqFDvk%2B6lY4buVWQV8caXbwDKzqCeAfW8hs&X-Amz-Signature=eaaf9c2ce2f6c9c5204794dc4d222e3c9035f9fb3210d4a9f2a94edd67785558&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627A5F2XU%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGolDdUCC%2BUkJYhbQTv%2Fwv2eq%2FvA2BkbD%2FgFaltMMi9gIgUPiyKdAg3SGSutWUGULn77ZjGbTpwd77vbxbOfTr6Y0qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbWXQpso%2Frv7nh1XSrcA%2FLpUw4M2M%2BuM6JmdvMrA%2Buc6c1i49jJgI5qG36eskPmryLAeC9mrsyntAQXgym3fPajwNNCw%2F%2BQYVS9KCASFebkw2YyBqJf1HcVqEwwQbMGiX7WIuZkPlQK9LMH0jCldo1OUcAK2GsR1r8f9LtInyRFes07ZqOVTYCkdGV0viG8b%2FPmZEJOxbF3K4VAMtDslBHZv3mbdl8Os8oSyy4DV1rcAqththCjkO4jzC5faNnQWdraaG4vm7zffYoWv2r48y%2BmW7aBsHof6c1yy56k4Q%2FKPq%2Ba9sH1H9quMdMH6rJlNv8hlQkXQfbt%2FetcOe81LF8it%2FObAIACxStOBTBtEGxDoBSh0RaLvoHjq35HksaITlFP6HbI2t%2FsbI%2Bgodqq248rwyyFF9zvj4OaK795N8sBtjJSyGRlaJSZlmcjEK4hZ2wcOGHGiKlEnpjoqpqXyZbkZr4hzgN6HM0dzcX2rmpo61j4BAhDqaiMCZkOd2nWu3b%2BcCUy0F4PhAPkUyfBBWA9u7uhd2FsylKFiwD6BQUxVTrc2A83FI%2FDHIWKro7tYcb%2BKGZOrTTnui%2BzeSch0%2FDUY%2B2xb8ylIhAsXHppfPk5JTALCshH%2FSKsQslP5l8omCHfccmBId3Q8YAEMIGA%2FcIGOqUBP8eL0i0H%2FvUewF03jSwmsujAQis0OY062BlDKC1qw6PJGIOGfcYW0ANkizXvu%2B0FgCf5NfCh3QHIL4NIXrAin20WRDB9DAx2bfX%2BTmFl7v9Nkblo35Rzc7WDKh6ueZfdzHxflaq1uyMrKJbBOaoNE9WE9jcRgMSOjEMJvipgq%2BG%2FrHqlq6Rzhg%2BYANqFDvk%2B6lY4buVWQV8caXbwDKzqCeAfW8hs&X-Amz-Signature=afa8ca385b92d2e3862df4571012fb636216d778c836d7979179efd401c23937&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627A5F2XU%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGolDdUCC%2BUkJYhbQTv%2Fwv2eq%2FvA2BkbD%2FgFaltMMi9gIgUPiyKdAg3SGSutWUGULn77ZjGbTpwd77vbxbOfTr6Y0qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbWXQpso%2Frv7nh1XSrcA%2FLpUw4M2M%2BuM6JmdvMrA%2Buc6c1i49jJgI5qG36eskPmryLAeC9mrsyntAQXgym3fPajwNNCw%2F%2BQYVS9KCASFebkw2YyBqJf1HcVqEwwQbMGiX7WIuZkPlQK9LMH0jCldo1OUcAK2GsR1r8f9LtInyRFes07ZqOVTYCkdGV0viG8b%2FPmZEJOxbF3K4VAMtDslBHZv3mbdl8Os8oSyy4DV1rcAqththCjkO4jzC5faNnQWdraaG4vm7zffYoWv2r48y%2BmW7aBsHof6c1yy56k4Q%2FKPq%2Ba9sH1H9quMdMH6rJlNv8hlQkXQfbt%2FetcOe81LF8it%2FObAIACxStOBTBtEGxDoBSh0RaLvoHjq35HksaITlFP6HbI2t%2FsbI%2Bgodqq248rwyyFF9zvj4OaK795N8sBtjJSyGRlaJSZlmcjEK4hZ2wcOGHGiKlEnpjoqpqXyZbkZr4hzgN6HM0dzcX2rmpo61j4BAhDqaiMCZkOd2nWu3b%2BcCUy0F4PhAPkUyfBBWA9u7uhd2FsylKFiwD6BQUxVTrc2A83FI%2FDHIWKro7tYcb%2BKGZOrTTnui%2BzeSch0%2FDUY%2B2xb8ylIhAsXHppfPk5JTALCshH%2FSKsQslP5l8omCHfccmBId3Q8YAEMIGA%2FcIGOqUBP8eL0i0H%2FvUewF03jSwmsujAQis0OY062BlDKC1qw6PJGIOGfcYW0ANkizXvu%2B0FgCf5NfCh3QHIL4NIXrAin20WRDB9DAx2bfX%2BTmFl7v9Nkblo35Rzc7WDKh6ueZfdzHxflaq1uyMrKJbBOaoNE9WE9jcRgMSOjEMJvipgq%2BG%2FrHqlq6Rzhg%2BYANqFDvk%2B6lY4buVWQV8caXbwDKzqCeAfW8hs&X-Amz-Signature=dd955993c9bde3aa710d716c644b518be7b9665511029b22b7df40d694d56f83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
