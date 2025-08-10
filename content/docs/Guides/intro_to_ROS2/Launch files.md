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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6VGQOWX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrzl4rmJF5MBGhrFSDIyayk0s3HYLYCGYDGTAAs4wskwIhALkrOHLFAvropK87gYRyAKOxj7a0kWBWA6sOW%2FFqrm6kKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTh9mAyTWT0bso6dgq3AOIq%2BGHXam1Rx5ck0wAcU3kyMoNZbmwQlVxkKtNb4kRRypN1ygHn%2Bo6RWlQ859TZfo%2Fe3M5hDI9%2BUtzOiq69nSmVANY%2FFZQkZLA0%2FjF2Y4GB2b8hXilQi46RNeD%2FuhHx3Gf%2FFkZ16DHagoY%2FMuH6BdcT08sFAChVnWchwlpEHE036mWGPjjJk%2BTKVBRCQq3nUmmsP6ARN%2BoYYJv1YP2Z9THpkeJ4huD1CtX1muo%2FcNZ%2FA19b4PwX48xwYOHY3XL7vsY1loapmXBXGrnZUq2FSkDEUh8iDLPBdS7xnY1uccmvYPrNi9fEnnRAp%2F4Pwfm5tW6KYL0or65MWXZWmrcSMKpsU6zQsWeuEsjauUlCt6qbCcNH2yKI%2BTTqyguPzzt9Z%2F5rTqNeHzAC9LrhzCpum8xseO1TOdzqjC43pEFlN%2Bc3DeJiNFHMY%2BE3GcHhZXN7JNWYz271NPhVIe3YA%2BI9kleMA%2FBY9fE1PIK0evLgyEkMrEYhmRRguRe90ww4QZl8RrC1CAo4Hu1sEspNvVZ%2FP5lVXUTgrcfERalp%2F%2Bmh5Mg5stvrhM45GNenEGYfO1BTIlo65isoEj%2BQrNDZq30qzpTmpfDFTjP0YgnebwVVscaY6pA2TGDAovnhC%2BcRDDW9eDEBjqkAXpvdzKPVYeIYqhlDRcpcwCUoOxbmDaEjbnB4rtrwhdFAq4nNaZp%2B5J0myxohb0MJb3%2FUN7NGDUGbV2cK4pjusgQzsoBi7dY0KxTv9ewmT%2FVVg9lxgiy9fpuXdwMZvd6t8VkkaWW5cwH1UgAIErT8hT%2Bg0fkDS8iG4kSyRyDGIcrKN4pYO0aUmDVgFcpyRjAK2XGLm6v%2BbUT9yMu3yzXSnv%2BCBlx&X-Amz-Signature=9f90c08b5b4ca93465e1be6b12bdb47e9a9cb4cdd0cd312efa24bc680291e396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6VGQOWX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrzl4rmJF5MBGhrFSDIyayk0s3HYLYCGYDGTAAs4wskwIhALkrOHLFAvropK87gYRyAKOxj7a0kWBWA6sOW%2FFqrm6kKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTh9mAyTWT0bso6dgq3AOIq%2BGHXam1Rx5ck0wAcU3kyMoNZbmwQlVxkKtNb4kRRypN1ygHn%2Bo6RWlQ859TZfo%2Fe3M5hDI9%2BUtzOiq69nSmVANY%2FFZQkZLA0%2FjF2Y4GB2b8hXilQi46RNeD%2FuhHx3Gf%2FFkZ16DHagoY%2FMuH6BdcT08sFAChVnWchwlpEHE036mWGPjjJk%2BTKVBRCQq3nUmmsP6ARN%2BoYYJv1YP2Z9THpkeJ4huD1CtX1muo%2FcNZ%2FA19b4PwX48xwYOHY3XL7vsY1loapmXBXGrnZUq2FSkDEUh8iDLPBdS7xnY1uccmvYPrNi9fEnnRAp%2F4Pwfm5tW6KYL0or65MWXZWmrcSMKpsU6zQsWeuEsjauUlCt6qbCcNH2yKI%2BTTqyguPzzt9Z%2F5rTqNeHzAC9LrhzCpum8xseO1TOdzqjC43pEFlN%2Bc3DeJiNFHMY%2BE3GcHhZXN7JNWYz271NPhVIe3YA%2BI9kleMA%2FBY9fE1PIK0evLgyEkMrEYhmRRguRe90ww4QZl8RrC1CAo4Hu1sEspNvVZ%2FP5lVXUTgrcfERalp%2F%2Bmh5Mg5stvrhM45GNenEGYfO1BTIlo65isoEj%2BQrNDZq30qzpTmpfDFTjP0YgnebwVVscaY6pA2TGDAovnhC%2BcRDDW9eDEBjqkAXpvdzKPVYeIYqhlDRcpcwCUoOxbmDaEjbnB4rtrwhdFAq4nNaZp%2B5J0myxohb0MJb3%2FUN7NGDUGbV2cK4pjusgQzsoBi7dY0KxTv9ewmT%2FVVg9lxgiy9fpuXdwMZvd6t8VkkaWW5cwH1UgAIErT8hT%2Bg0fkDS8iG4kSyRyDGIcrKN4pYO0aUmDVgFcpyRjAK2XGLm6v%2BbUT9yMu3yzXSnv%2BCBlx&X-Amz-Signature=2b5acae0377c2e91c1820649df958258d89030badda144d9d997e43b5772b7e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6VGQOWX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrzl4rmJF5MBGhrFSDIyayk0s3HYLYCGYDGTAAs4wskwIhALkrOHLFAvropK87gYRyAKOxj7a0kWBWA6sOW%2FFqrm6kKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTh9mAyTWT0bso6dgq3AOIq%2BGHXam1Rx5ck0wAcU3kyMoNZbmwQlVxkKtNb4kRRypN1ygHn%2Bo6RWlQ859TZfo%2Fe3M5hDI9%2BUtzOiq69nSmVANY%2FFZQkZLA0%2FjF2Y4GB2b8hXilQi46RNeD%2FuhHx3Gf%2FFkZ16DHagoY%2FMuH6BdcT08sFAChVnWchwlpEHE036mWGPjjJk%2BTKVBRCQq3nUmmsP6ARN%2BoYYJv1YP2Z9THpkeJ4huD1CtX1muo%2FcNZ%2FA19b4PwX48xwYOHY3XL7vsY1loapmXBXGrnZUq2FSkDEUh8iDLPBdS7xnY1uccmvYPrNi9fEnnRAp%2F4Pwfm5tW6KYL0or65MWXZWmrcSMKpsU6zQsWeuEsjauUlCt6qbCcNH2yKI%2BTTqyguPzzt9Z%2F5rTqNeHzAC9LrhzCpum8xseO1TOdzqjC43pEFlN%2Bc3DeJiNFHMY%2BE3GcHhZXN7JNWYz271NPhVIe3YA%2BI9kleMA%2FBY9fE1PIK0evLgyEkMrEYhmRRguRe90ww4QZl8RrC1CAo4Hu1sEspNvVZ%2FP5lVXUTgrcfERalp%2F%2Bmh5Mg5stvrhM45GNenEGYfO1BTIlo65isoEj%2BQrNDZq30qzpTmpfDFTjP0YgnebwVVscaY6pA2TGDAovnhC%2BcRDDW9eDEBjqkAXpvdzKPVYeIYqhlDRcpcwCUoOxbmDaEjbnB4rtrwhdFAq4nNaZp%2B5J0myxohb0MJb3%2FUN7NGDUGbV2cK4pjusgQzsoBi7dY0KxTv9ewmT%2FVVg9lxgiy9fpuXdwMZvd6t8VkkaWW5cwH1UgAIErT8hT%2Bg0fkDS8iG4kSyRyDGIcrKN4pYO0aUmDVgFcpyRjAK2XGLm6v%2BbUT9yMu3yzXSnv%2BCBlx&X-Amz-Signature=58a1cc76a7751848324fb29e65d469dcb940b5871fd8d69333edfb8e9e17cfe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
