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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U247TL3K%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCObsYU6jgN2IhJNft%2B1WkksRE0xPQQsMofhGlhmkuWrQIhAMWMrYVgBDkxSiTxiuxQm7EPQlYx5yiVwnL75SR6H6ayKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH1hQu4o5MWJUX8soq3AOw4QcMOU085fxtTJYlEt1noCSDojqv2tgrH6%2FMBe%2BSl0ak9q7nno7c0YGiXmNSEEFW7GgUmYQqhnxR2%2B4dRvwcK9PYAagW6Fp0A52%2BogoTVkOEu2Rp4URct01zFXXvbiBDuDgslYTm3tK1AQi8uMic71l7T%2BlEHBzkwYVcyRYAmbgZSUnmuFpluJK96JXcIbLfUn5UUH2ygDu9fknT9THCrpTnFZQqDgzKoz%2FeHfT8zsce6X7ayPX179z2uL4NogkQFey3V4SV5dqAg8Sde4D5ye5J3hls6OmD8vbyZFBm8ESlSLHEhcjpLpIK55rhFdqUCcDHlKmqm1vXJMEu%2Bh%2F4tSvOKSfMYJjVXzpiGlOScYR8hP5V6W%2FHSTr7XDPflbPQblvNZWKIEoa0HSKHNnKIauiLME0of5GMZDlUNDmgtVjxji69X4dpZNykqjhctOyGnhS0q0t2cp4uIe2Yvu3%2F5JyhPdmKveaOmZi7Gtv2De%2Bua6v6gQs8sRHMesSFUVEXqU98m9adL5dP9vDf8GWLc6f2MVy4dIXq92xCZUCfWVMLzIYM10SjTPcywaR3KivyE3sIxxptOLDE8Q1oIZ1Wu691CdRfhPSZc8IXC%2FmKxeusfr6wP8OqoCmmwjCu367BBjqkAQ2cOONsOrq0azP1xrL2IDVrTd0XgYqZxzZAwNf%2FN8cLc3fWlcD8gODoNUvXS7bxrq0gDw3qJoa10LDD7Kn33Mqul4SNdlbqm6j07BzKgNeYfpBbI%2Fqup2ZS9%2FALFm2sD4jY5TDzV8v0AmunwdH9BangD1%2BJvzDKPkWusKVK9Au%2FUgrERXUsSSk0D4LMLyyJAdl2N0hVSq2%2FwDiKxmCMYrKKm8tQ&X-Amz-Signature=560abaaac36be367725f0da0df947f083b0b0f3cf865cfcc2e4945b799e49007&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U247TL3K%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCObsYU6jgN2IhJNft%2B1WkksRE0xPQQsMofhGlhmkuWrQIhAMWMrYVgBDkxSiTxiuxQm7EPQlYx5yiVwnL75SR6H6ayKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH1hQu4o5MWJUX8soq3AOw4QcMOU085fxtTJYlEt1noCSDojqv2tgrH6%2FMBe%2BSl0ak9q7nno7c0YGiXmNSEEFW7GgUmYQqhnxR2%2B4dRvwcK9PYAagW6Fp0A52%2BogoTVkOEu2Rp4URct01zFXXvbiBDuDgslYTm3tK1AQi8uMic71l7T%2BlEHBzkwYVcyRYAmbgZSUnmuFpluJK96JXcIbLfUn5UUH2ygDu9fknT9THCrpTnFZQqDgzKoz%2FeHfT8zsce6X7ayPX179z2uL4NogkQFey3V4SV5dqAg8Sde4D5ye5J3hls6OmD8vbyZFBm8ESlSLHEhcjpLpIK55rhFdqUCcDHlKmqm1vXJMEu%2Bh%2F4tSvOKSfMYJjVXzpiGlOScYR8hP5V6W%2FHSTr7XDPflbPQblvNZWKIEoa0HSKHNnKIauiLME0of5GMZDlUNDmgtVjxji69X4dpZNykqjhctOyGnhS0q0t2cp4uIe2Yvu3%2F5JyhPdmKveaOmZi7Gtv2De%2Bua6v6gQs8sRHMesSFUVEXqU98m9adL5dP9vDf8GWLc6f2MVy4dIXq92xCZUCfWVMLzIYM10SjTPcywaR3KivyE3sIxxptOLDE8Q1oIZ1Wu691CdRfhPSZc8IXC%2FmKxeusfr6wP8OqoCmmwjCu367BBjqkAQ2cOONsOrq0azP1xrL2IDVrTd0XgYqZxzZAwNf%2FN8cLc3fWlcD8gODoNUvXS7bxrq0gDw3qJoa10LDD7Kn33Mqul4SNdlbqm6j07BzKgNeYfpBbI%2Fqup2ZS9%2FALFm2sD4jY5TDzV8v0AmunwdH9BangD1%2BJvzDKPkWusKVK9Au%2FUgrERXUsSSk0D4LMLyyJAdl2N0hVSq2%2FwDiKxmCMYrKKm8tQ&X-Amz-Signature=5ea99a95a673cafac44d3bbc5005d64e3f9d01b599ab5fedbe71248e59b482a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U247TL3K%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCObsYU6jgN2IhJNft%2B1WkksRE0xPQQsMofhGlhmkuWrQIhAMWMrYVgBDkxSiTxiuxQm7EPQlYx5yiVwnL75SR6H6ayKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH1hQu4o5MWJUX8soq3AOw4QcMOU085fxtTJYlEt1noCSDojqv2tgrH6%2FMBe%2BSl0ak9q7nno7c0YGiXmNSEEFW7GgUmYQqhnxR2%2B4dRvwcK9PYAagW6Fp0A52%2BogoTVkOEu2Rp4URct01zFXXvbiBDuDgslYTm3tK1AQi8uMic71l7T%2BlEHBzkwYVcyRYAmbgZSUnmuFpluJK96JXcIbLfUn5UUH2ygDu9fknT9THCrpTnFZQqDgzKoz%2FeHfT8zsce6X7ayPX179z2uL4NogkQFey3V4SV5dqAg8Sde4D5ye5J3hls6OmD8vbyZFBm8ESlSLHEhcjpLpIK55rhFdqUCcDHlKmqm1vXJMEu%2Bh%2F4tSvOKSfMYJjVXzpiGlOScYR8hP5V6W%2FHSTr7XDPflbPQblvNZWKIEoa0HSKHNnKIauiLME0of5GMZDlUNDmgtVjxji69X4dpZNykqjhctOyGnhS0q0t2cp4uIe2Yvu3%2F5JyhPdmKveaOmZi7Gtv2De%2Bua6v6gQs8sRHMesSFUVEXqU98m9adL5dP9vDf8GWLc6f2MVy4dIXq92xCZUCfWVMLzIYM10SjTPcywaR3KivyE3sIxxptOLDE8Q1oIZ1Wu691CdRfhPSZc8IXC%2FmKxeusfr6wP8OqoCmmwjCu367BBjqkAQ2cOONsOrq0azP1xrL2IDVrTd0XgYqZxzZAwNf%2FN8cLc3fWlcD8gODoNUvXS7bxrq0gDw3qJoa10LDD7Kn33Mqul4SNdlbqm6j07BzKgNeYfpBbI%2Fqup2ZS9%2FALFm2sD4jY5TDzV8v0AmunwdH9BangD1%2BJvzDKPkWusKVK9Au%2FUgrERXUsSSk0D4LMLyyJAdl2N0hVSq2%2FwDiKxmCMYrKKm8tQ&X-Amz-Signature=0ed628f3f14872571730104dd6fee94d2780b086a2ce499f272ee2847a1e6d2b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
