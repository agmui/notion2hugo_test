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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2WPX5OK%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIBRVbv5bgQXGpGeZOGTDI45viASqz8CNhAOSvfrOIjj%2BAiEAxJ5w8oauvumQyLjXl%2BZe54YTqxtrKo0DMuMFYKYRTe8qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyMvxBxz456K4ZOUSrcA%2BScDAu6v6XkkPcxa7FiEyHyYd6i7%2BeTeX6bmq8p1f7oHpYiLQ6s9tK47Wl%2FCOvLMZkOGsKClYFrSPTcxN03OVQBjWjV8xtLekcUEuIOc4lc5DlBv6MPne5ZGYErE2%2Foc45V9HLrpy5TBuIoLUj%2B%2FKIZ5oK6oLbbivRLWgBGe8YOONutdfI6knOgJtz1L8wuDtOXZAh21fvWnVkWVAG4sLk1P%2B3mob4Bb8DefT%2FTYR96ErneFndIK4I9PTZQFad4%2F2QkzjsDfaBqttMIrY8HiW20YmGmwUzqqh5oiAP7f00eBpcXZ3On5Xqheg0joxo20RVcbsfPt4yAPMG6g3h1aKNPDrLWi4rV0rjDZ9VmUEhwxj%2B6yIdJc5C%2BCV1qNHGzf0vSRiJaaCVJR59u6%2F7TApFxkg7Wwsb8fPIXXZp2BH7y8wVaYFhK3zKxt6GjsvLr%2F33usDsQ4%2BCQuE3NLQZ%2FbBOEqB%2B9VcEawwF2c%2FEr%2FCmWpMsXo%2FL8sby7pow0sxS42eiSXbEgpSG%2BQbUGuJzCL%2BNcHMvcfFX%2B5tLJvqkpQCKMMuZIYKpXUU3RCjheqv1dOMduHCJVEf8H%2F2eO5BvqiqW%2BirBGFSE798qp0%2Bnb7YCHPXNjUb291HBk0YQOMIqH1sAGOqUBS%2BJ7qt6%2BKUNQXJsqECmo1w2XLWq2pCdcsxbyn1v5lQ61MWi8cU4mGNeA1A8nDpThHlET4d92WqbKefVYkezDNRB8IDv%2BWwIby3OnnVdwXe8UUwUgoXEwwv6F3sh0bef6w9%2BwbQjPTzq9fjlDF8zy4Zru2fZrUAt%2F9BI7TpwFF54JvHUnjfRw6RVd0mK8PZ%2F%2Fqkh3MesY%2FOEk08YPy21Li%2F%2B50wAZ&X-Amz-Signature=ea5bad3929d3e6db764dd759e3c1007c550a7910c3f35fd12adc36477ca2a53c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2WPX5OK%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIBRVbv5bgQXGpGeZOGTDI45viASqz8CNhAOSvfrOIjj%2BAiEAxJ5w8oauvumQyLjXl%2BZe54YTqxtrKo0DMuMFYKYRTe8qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyMvxBxz456K4ZOUSrcA%2BScDAu6v6XkkPcxa7FiEyHyYd6i7%2BeTeX6bmq8p1f7oHpYiLQ6s9tK47Wl%2FCOvLMZkOGsKClYFrSPTcxN03OVQBjWjV8xtLekcUEuIOc4lc5DlBv6MPne5ZGYErE2%2Foc45V9HLrpy5TBuIoLUj%2B%2FKIZ5oK6oLbbivRLWgBGe8YOONutdfI6knOgJtz1L8wuDtOXZAh21fvWnVkWVAG4sLk1P%2B3mob4Bb8DefT%2FTYR96ErneFndIK4I9PTZQFad4%2F2QkzjsDfaBqttMIrY8HiW20YmGmwUzqqh5oiAP7f00eBpcXZ3On5Xqheg0joxo20RVcbsfPt4yAPMG6g3h1aKNPDrLWi4rV0rjDZ9VmUEhwxj%2B6yIdJc5C%2BCV1qNHGzf0vSRiJaaCVJR59u6%2F7TApFxkg7Wwsb8fPIXXZp2BH7y8wVaYFhK3zKxt6GjsvLr%2F33usDsQ4%2BCQuE3NLQZ%2FbBOEqB%2B9VcEawwF2c%2FEr%2FCmWpMsXo%2FL8sby7pow0sxS42eiSXbEgpSG%2BQbUGuJzCL%2BNcHMvcfFX%2B5tLJvqkpQCKMMuZIYKpXUU3RCjheqv1dOMduHCJVEf8H%2F2eO5BvqiqW%2BirBGFSE798qp0%2Bnb7YCHPXNjUb291HBk0YQOMIqH1sAGOqUBS%2BJ7qt6%2BKUNQXJsqECmo1w2XLWq2pCdcsxbyn1v5lQ61MWi8cU4mGNeA1A8nDpThHlET4d92WqbKefVYkezDNRB8IDv%2BWwIby3OnnVdwXe8UUwUgoXEwwv6F3sh0bef6w9%2BwbQjPTzq9fjlDF8zy4Zru2fZrUAt%2F9BI7TpwFF54JvHUnjfRw6RVd0mK8PZ%2F%2Fqkh3MesY%2FOEk08YPy21Li%2F%2B50wAZ&X-Amz-Signature=d4209703960bf1180657b33f2a87d701a6f3a861c886f53924fcac78204b2ec9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2WPX5OK%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIBRVbv5bgQXGpGeZOGTDI45viASqz8CNhAOSvfrOIjj%2BAiEAxJ5w8oauvumQyLjXl%2BZe54YTqxtrKo0DMuMFYKYRTe8qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyMvxBxz456K4ZOUSrcA%2BScDAu6v6XkkPcxa7FiEyHyYd6i7%2BeTeX6bmq8p1f7oHpYiLQ6s9tK47Wl%2FCOvLMZkOGsKClYFrSPTcxN03OVQBjWjV8xtLekcUEuIOc4lc5DlBv6MPne5ZGYErE2%2Foc45V9HLrpy5TBuIoLUj%2B%2FKIZ5oK6oLbbivRLWgBGe8YOONutdfI6knOgJtz1L8wuDtOXZAh21fvWnVkWVAG4sLk1P%2B3mob4Bb8DefT%2FTYR96ErneFndIK4I9PTZQFad4%2F2QkzjsDfaBqttMIrY8HiW20YmGmwUzqqh5oiAP7f00eBpcXZ3On5Xqheg0joxo20RVcbsfPt4yAPMG6g3h1aKNPDrLWi4rV0rjDZ9VmUEhwxj%2B6yIdJc5C%2BCV1qNHGzf0vSRiJaaCVJR59u6%2F7TApFxkg7Wwsb8fPIXXZp2BH7y8wVaYFhK3zKxt6GjsvLr%2F33usDsQ4%2BCQuE3NLQZ%2FbBOEqB%2B9VcEawwF2c%2FEr%2FCmWpMsXo%2FL8sby7pow0sxS42eiSXbEgpSG%2BQbUGuJzCL%2BNcHMvcfFX%2B5tLJvqkpQCKMMuZIYKpXUU3RCjheqv1dOMduHCJVEf8H%2F2eO5BvqiqW%2BirBGFSE798qp0%2Bnb7YCHPXNjUb291HBk0YQOMIqH1sAGOqUBS%2BJ7qt6%2BKUNQXJsqECmo1w2XLWq2pCdcsxbyn1v5lQ61MWi8cU4mGNeA1A8nDpThHlET4d92WqbKefVYkezDNRB8IDv%2BWwIby3OnnVdwXe8UUwUgoXEwwv6F3sh0bef6w9%2BwbQjPTzq9fjlDF8zy4Zru2fZrUAt%2F9BI7TpwFF54JvHUnjfRw6RVd0mK8PZ%2F%2Fqkh3MesY%2FOEk08YPy21Li%2F%2B50wAZ&X-Amz-Signature=ea191a00eb938fb8e685002e7c87c2b3f13927620c93cfb26c607ecfb66cc637&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
