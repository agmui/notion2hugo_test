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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645RCH2HG%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T070734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDsYpbYtzqfpTWFW7QYSjXk24xL7dFg9e0P6ZbbP2fNbQIgdl55KylsTNqfGl%2F%2BrME5ti%2B%2BgZo2pd83Joagx1yrU7sqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJkkixNsGxg%2FQPnACrcAyKxweL7E9hsQMd3NVL1XucbRhCYF%2Fo9%2FPOAezjb0XFNr4MKHDNJs7LEiCDLCLfH1wmvPXRplqPgM%2BZEOGXKtf%2B5zeWEwPTnc2zKZQEugA%2FjY3S64VzrMmJjeQUrGnMj%2FKOZEkNpMCy2ZCSEbY5kxv%2BdGEUIInyCBGTtWwybZ0zJNaW94olWKnHd%2FfyUVS%2FamdmWfkeswBMOX0wRxIsZ0Elq7QQAFs3geJcasTHTXo8SNHc6CB1ubFX%2BfjT%2F5Zmx8Z0c6QqY71CSpWx1ki0OkCJqpqt%2BYViYE6qosSXt3cNk5k57kBK0DQEH%2BSamqyoel%2FZFR6cqya56xWMaOpc5HyCoJRnFyX7n838JUFo2eaUmt3uuWazFir0HuOhqvCQDHB4T3sO9XyyU6NvDE0XmbQsFSBBdpxakNbKR8VCby%2BF9%2BIqToJk5h%2BQ4h7RLikkk5owbYcJCJt0750iVkyYCKrqf2ywp9Ppfz4XhBCUPeOiECUNahibBVP6eLogt6lfdMGL%2F9tvbvvINa0yD8G2ayMB8Xw1JueNnmsJLgMNMCl%2FTsROQRP9R3ftwyoBWNOuJCj8R3sviF%2F5HdFEzW9ERKLIZdUYWMq8eSM1g1oVWqZ0l%2Bb7DCfklx%2FHTAjiaMNCS57wGOqUBmw1FEdWyvfCWkqH%2BxJ8JwiIpuTGOHSgqjezroyGQ7w%2B5J8u5iC%2FE1ufbzjIwWplJ1zdYAIcsjRgUGQwX5AQPeU4tcAWWLANgpE1hw%2Fzx14FXT6aaGJZhmzdglSZBcAcfALVUTWt56Z6vBl7HUTspjrnYUzsijAEvGt%2BTyAh4X5nhf%2FAioPh4zbYmxHV0LS%2BKpOpLkOw1Yj0ocnV%2B0feacHiRvqNB&X-Amz-Signature=0655bc9b3f3697ad54e05da06188d3ebd68dd815e8c0248cbe741931cd1e6500&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645RCH2HG%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T070734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDsYpbYtzqfpTWFW7QYSjXk24xL7dFg9e0P6ZbbP2fNbQIgdl55KylsTNqfGl%2F%2BrME5ti%2B%2BgZo2pd83Joagx1yrU7sqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJkkixNsGxg%2FQPnACrcAyKxweL7E9hsQMd3NVL1XucbRhCYF%2Fo9%2FPOAezjb0XFNr4MKHDNJs7LEiCDLCLfH1wmvPXRplqPgM%2BZEOGXKtf%2B5zeWEwPTnc2zKZQEugA%2FjY3S64VzrMmJjeQUrGnMj%2FKOZEkNpMCy2ZCSEbY5kxv%2BdGEUIInyCBGTtWwybZ0zJNaW94olWKnHd%2FfyUVS%2FamdmWfkeswBMOX0wRxIsZ0Elq7QQAFs3geJcasTHTXo8SNHc6CB1ubFX%2BfjT%2F5Zmx8Z0c6QqY71CSpWx1ki0OkCJqpqt%2BYViYE6qosSXt3cNk5k57kBK0DQEH%2BSamqyoel%2FZFR6cqya56xWMaOpc5HyCoJRnFyX7n838JUFo2eaUmt3uuWazFir0HuOhqvCQDHB4T3sO9XyyU6NvDE0XmbQsFSBBdpxakNbKR8VCby%2BF9%2BIqToJk5h%2BQ4h7RLikkk5owbYcJCJt0750iVkyYCKrqf2ywp9Ppfz4XhBCUPeOiECUNahibBVP6eLogt6lfdMGL%2F9tvbvvINa0yD8G2ayMB8Xw1JueNnmsJLgMNMCl%2FTsROQRP9R3ftwyoBWNOuJCj8R3sviF%2F5HdFEzW9ERKLIZdUYWMq8eSM1g1oVWqZ0l%2Bb7DCfklx%2FHTAjiaMNCS57wGOqUBmw1FEdWyvfCWkqH%2BxJ8JwiIpuTGOHSgqjezroyGQ7w%2B5J8u5iC%2FE1ufbzjIwWplJ1zdYAIcsjRgUGQwX5AQPeU4tcAWWLANgpE1hw%2Fzx14FXT6aaGJZhmzdglSZBcAcfALVUTWt56Z6vBl7HUTspjrnYUzsijAEvGt%2BTyAh4X5nhf%2FAioPh4zbYmxHV0LS%2BKpOpLkOw1Yj0ocnV%2B0feacHiRvqNB&X-Amz-Signature=0f649ff1bac5591ae4e8f4d297365287b2f87207a96cb396653a69211c5b5c61&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645RCH2HG%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T070734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDsYpbYtzqfpTWFW7QYSjXk24xL7dFg9e0P6ZbbP2fNbQIgdl55KylsTNqfGl%2F%2BrME5ti%2B%2BgZo2pd83Joagx1yrU7sqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJkkixNsGxg%2FQPnACrcAyKxweL7E9hsQMd3NVL1XucbRhCYF%2Fo9%2FPOAezjb0XFNr4MKHDNJs7LEiCDLCLfH1wmvPXRplqPgM%2BZEOGXKtf%2B5zeWEwPTnc2zKZQEugA%2FjY3S64VzrMmJjeQUrGnMj%2FKOZEkNpMCy2ZCSEbY5kxv%2BdGEUIInyCBGTtWwybZ0zJNaW94olWKnHd%2FfyUVS%2FamdmWfkeswBMOX0wRxIsZ0Elq7QQAFs3geJcasTHTXo8SNHc6CB1ubFX%2BfjT%2F5Zmx8Z0c6QqY71CSpWx1ki0OkCJqpqt%2BYViYE6qosSXt3cNk5k57kBK0DQEH%2BSamqyoel%2FZFR6cqya56xWMaOpc5HyCoJRnFyX7n838JUFo2eaUmt3uuWazFir0HuOhqvCQDHB4T3sO9XyyU6NvDE0XmbQsFSBBdpxakNbKR8VCby%2BF9%2BIqToJk5h%2BQ4h7RLikkk5owbYcJCJt0750iVkyYCKrqf2ywp9Ppfz4XhBCUPeOiECUNahibBVP6eLogt6lfdMGL%2F9tvbvvINa0yD8G2ayMB8Xw1JueNnmsJLgMNMCl%2FTsROQRP9R3ftwyoBWNOuJCj8R3sviF%2F5HdFEzW9ERKLIZdUYWMq8eSM1g1oVWqZ0l%2Bb7DCfklx%2FHTAjiaMNCS57wGOqUBmw1FEdWyvfCWkqH%2BxJ8JwiIpuTGOHSgqjezroyGQ7w%2B5J8u5iC%2FE1ufbzjIwWplJ1zdYAIcsjRgUGQwX5AQPeU4tcAWWLANgpE1hw%2Fzx14FXT6aaGJZhmzdglSZBcAcfALVUTWt56Z6vBl7HUTspjrnYUzsijAEvGt%2BTyAh4X5nhf%2FAioPh4zbYmxHV0LS%2BKpOpLkOw1Yj0ocnV%2B0feacHiRvqNB&X-Amz-Signature=40026a14dbe034d33b64713041db1c29c76b47095a7f679879420d87bbd86333&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
