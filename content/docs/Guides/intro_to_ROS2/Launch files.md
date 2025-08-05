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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643HDNDWC%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDU9c0xQ4RB%2FtRNhZKKls38j67GAOH6dEkpLwJCZ2t%2FZQIhAMeZhD7e%2BmTHeUqhtJ731If7pVkmTsPJiufNNpBS9l1CKv8DCGUQABoMNjM3NDIzMTgzODA1IgwsB8MMa25NTymUl7gq3AP%2BN%2BoN2MqArI3Df%2FD9iFCcK%2FUSoxJB33VoYZPTHAooMqkTSMOd%2FVAaRXePLx6eib8gVekgUXZIPpuS6WiI1JAt%2FQzr6dopQ3MAUAuU4yOTTnB4c1DonycN6%2FQx%2FTM63akm8aC%2FibhH1edo0r1VopZ4hBt%2F1bRna5ojRRffP3b0rfIpaChEyV3sRnZ40UQu8GFbx0DJXmGZIe2h9aRSn6qYH3p0m%2FUpSTx%2BwDcnaf2%2FeWkjdq5J8bUt1jfhgN5AGyjiVRe6MTYQOH0wWdC4aV2l8RRApVNMdj8BfHHRU%2BANa%2FyLoKReAvLdw9hgwlx0ybmflX7WopF8V5WgCJ%2FfZEGFZReuOSEAjzMlRkX84zsMnkCc61VVVUrasFMIcueRr9bhBx%2BScAq7JkZ8GGh0HdOZlYkjaKy%2FaMAftjcI1ZRkrQjHmR4%2BvHPH1WPfs9M2oxpYIWRUANAmg0xkbQ21%2Fc0G1PlvYO0Rxn%2FIyrZ0y7ZaRJUosO6LhqeeflDaKU0gjk7Xc05DijbI1MlQliObhYIGqlmp5%2BHQjvVA%2FhJKOy7C%2B9%2Ba1aeiL%2FA41fvrXxwHV9jP198lY8omUOuw0EjA05Q7QANWVHo%2BQeN%2BXF4aMckPpNInkyIlQ9HOAfGIwjDuvMnEBjqkAapg%2FSBmGEwC5iFW42U1%2F6ZgK6ZG%2B4%2Bc5d16ji1IysC%2FgKnnC4y6V0%2BYdt%2Bqbzc06z8iYoDiWsJoudvzHNZK3zE0HaG%2FrfWZyQSlg2JHHunyIxO0N4kuLLL6sJs6kaLJNtRv16fxSvPcRaEZBdj%2BAqjVE%2Fr8bgLEkN4megAjM3W8lb5TT0r5aa0ZvxRd7jhnxV8CpnEhEdAl385pg2Dg%2BA7DeC%2BU&X-Amz-Signature=e9851be33d1b1166f8246113f79c2e64dc91f874d6094552d921e297c4220f79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643HDNDWC%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDU9c0xQ4RB%2FtRNhZKKls38j67GAOH6dEkpLwJCZ2t%2FZQIhAMeZhD7e%2BmTHeUqhtJ731If7pVkmTsPJiufNNpBS9l1CKv8DCGUQABoMNjM3NDIzMTgzODA1IgwsB8MMa25NTymUl7gq3AP%2BN%2BoN2MqArI3Df%2FD9iFCcK%2FUSoxJB33VoYZPTHAooMqkTSMOd%2FVAaRXePLx6eib8gVekgUXZIPpuS6WiI1JAt%2FQzr6dopQ3MAUAuU4yOTTnB4c1DonycN6%2FQx%2FTM63akm8aC%2FibhH1edo0r1VopZ4hBt%2F1bRna5ojRRffP3b0rfIpaChEyV3sRnZ40UQu8GFbx0DJXmGZIe2h9aRSn6qYH3p0m%2FUpSTx%2BwDcnaf2%2FeWkjdq5J8bUt1jfhgN5AGyjiVRe6MTYQOH0wWdC4aV2l8RRApVNMdj8BfHHRU%2BANa%2FyLoKReAvLdw9hgwlx0ybmflX7WopF8V5WgCJ%2FfZEGFZReuOSEAjzMlRkX84zsMnkCc61VVVUrasFMIcueRr9bhBx%2BScAq7JkZ8GGh0HdOZlYkjaKy%2FaMAftjcI1ZRkrQjHmR4%2BvHPH1WPfs9M2oxpYIWRUANAmg0xkbQ21%2Fc0G1PlvYO0Rxn%2FIyrZ0y7ZaRJUosO6LhqeeflDaKU0gjk7Xc05DijbI1MlQliObhYIGqlmp5%2BHQjvVA%2FhJKOy7C%2B9%2Ba1aeiL%2FA41fvrXxwHV9jP198lY8omUOuw0EjA05Q7QANWVHo%2BQeN%2BXF4aMckPpNInkyIlQ9HOAfGIwjDuvMnEBjqkAapg%2FSBmGEwC5iFW42U1%2F6ZgK6ZG%2B4%2Bc5d16ji1IysC%2FgKnnC4y6V0%2BYdt%2Bqbzc06z8iYoDiWsJoudvzHNZK3zE0HaG%2FrfWZyQSlg2JHHunyIxO0N4kuLLL6sJs6kaLJNtRv16fxSvPcRaEZBdj%2BAqjVE%2Fr8bgLEkN4megAjM3W8lb5TT0r5aa0ZvxRd7jhnxV8CpnEhEdAl385pg2Dg%2BA7DeC%2BU&X-Amz-Signature=1579987c9e452569f34a5fb783cd803d4c93881bb46f7a1b2b315d97f22f4674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643HDNDWC%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDU9c0xQ4RB%2FtRNhZKKls38j67GAOH6dEkpLwJCZ2t%2FZQIhAMeZhD7e%2BmTHeUqhtJ731If7pVkmTsPJiufNNpBS9l1CKv8DCGUQABoMNjM3NDIzMTgzODA1IgwsB8MMa25NTymUl7gq3AP%2BN%2BoN2MqArI3Df%2FD9iFCcK%2FUSoxJB33VoYZPTHAooMqkTSMOd%2FVAaRXePLx6eib8gVekgUXZIPpuS6WiI1JAt%2FQzr6dopQ3MAUAuU4yOTTnB4c1DonycN6%2FQx%2FTM63akm8aC%2FibhH1edo0r1VopZ4hBt%2F1bRna5ojRRffP3b0rfIpaChEyV3sRnZ40UQu8GFbx0DJXmGZIe2h9aRSn6qYH3p0m%2FUpSTx%2BwDcnaf2%2FeWkjdq5J8bUt1jfhgN5AGyjiVRe6MTYQOH0wWdC4aV2l8RRApVNMdj8BfHHRU%2BANa%2FyLoKReAvLdw9hgwlx0ybmflX7WopF8V5WgCJ%2FfZEGFZReuOSEAjzMlRkX84zsMnkCc61VVVUrasFMIcueRr9bhBx%2BScAq7JkZ8GGh0HdOZlYkjaKy%2FaMAftjcI1ZRkrQjHmR4%2BvHPH1WPfs9M2oxpYIWRUANAmg0xkbQ21%2Fc0G1PlvYO0Rxn%2FIyrZ0y7ZaRJUosO6LhqeeflDaKU0gjk7Xc05DijbI1MlQliObhYIGqlmp5%2BHQjvVA%2FhJKOy7C%2B9%2Ba1aeiL%2FA41fvrXxwHV9jP198lY8omUOuw0EjA05Q7QANWVHo%2BQeN%2BXF4aMckPpNInkyIlQ9HOAfGIwjDuvMnEBjqkAapg%2FSBmGEwC5iFW42U1%2F6ZgK6ZG%2B4%2Bc5d16ji1IysC%2FgKnnC4y6V0%2BYdt%2Bqbzc06z8iYoDiWsJoudvzHNZK3zE0HaG%2FrfWZyQSlg2JHHunyIxO0N4kuLLL6sJs6kaLJNtRv16fxSvPcRaEZBdj%2BAqjVE%2Fr8bgLEkN4megAjM3W8lb5TT0r5aa0ZvxRd7jhnxV8CpnEhEdAl385pg2Dg%2BA7DeC%2BU&X-Amz-Signature=9d168c0ddfe2266f6934a8cd425a228158018a7264b373c3397b2fdfc4f981d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
