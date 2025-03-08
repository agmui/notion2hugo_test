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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q736RI3I%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQD4fPJAQ3suWqvYrNsE%2BlckEMi0UiBXTx5lDFcjxHWOUgIhAMjgrL57NIhpQ84gN%2FmuKTvVuuxwx%2FsoVOFzTTPa8fwlKv8DCFcQABoMNjM3NDIzMTgzODA1IgySfYIYMajGI96hK6Eq3AM4TXwCLI%2BMZjQohlgieNqEOgMHoRYFOIRoCGbeHNA1NWw7I9MP3EWsypB%2BsgcYVCBZW1QjOPv2o2AAywfezTC3PWiUc1Jo5y3pKN3GYiT%2BoQCKk58iD9w%2FoduG2cifp6WYz8sT9YaFcw2N0QkqRv1kuC7RpDlSdphT9yIEJ7LiX%2FGxMbCo1xcf3pHksR7LTRDIzRKRGMPV%2FmUuGDp3o8Xw2dt7dzehRmhzfBTAXyW8RrpAo%2F4j7UC8BTSJ7EHBhcmZ%2BZHPBkfksEIj0%2F6GRpqqDE%2Bd1S8yf4zaANpei4MRai0r9bveT7r%2BTYjFGQn8QncDc4tOaTtBst7b5S4nAuHwHkwHRzMveKNFP1eEsdmnoYlWt1cOwmXSUEX7nKSOfo8jghc9Wg%2Bzx84o2FMxWq1RuvY10DVT3Gsbuk3NhsyGR6crLZxtHA8xWj5q1W%2FbaXWak1UWvF68pqTx43IUNnrW8e7AuyWA2VcQU%2BFrpxTPAQyDBp6tJtQAJ7Mz4Y0E%2FZDS53utjQVivdejDIerr98e40vLUzYHYxD8avHtyg%2FCloL52tryhzhm8dF0yAgXOWDpumhraON2jBI2F47pYpQqVP6sTAmcHGSl%2BZjrBADPNz9PYRGPyHUWbe%2B6EjC6va%2B%2BBjqkAUSujocvQqTbozCoq6lIKhIDNgmGaVbwNTLNxI3HdacHMKAf%2B8J9146FJIDw9Ktj1CleQdF2Fb%2F4L%2FWxw3SQ2TUYSliY2tuo5N0up1BJWIVRSKkX5Wx4WmapVeqJg7KsiiF2hn1lKPHLEDwEKhaxMQ3i%2Ftvvq1quSuWBaPG5UwJniiegqg0PouJYk8TsCWrDBQzZ0VWtdcQYxf24I5s7N%2BTNHJAI&X-Amz-Signature=210494b709b7d5627ca3dcb41365df91e4e7e89d634ee05f4c50654d6e9e8ecc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q736RI3I%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQD4fPJAQ3suWqvYrNsE%2BlckEMi0UiBXTx5lDFcjxHWOUgIhAMjgrL57NIhpQ84gN%2FmuKTvVuuxwx%2FsoVOFzTTPa8fwlKv8DCFcQABoMNjM3NDIzMTgzODA1IgySfYIYMajGI96hK6Eq3AM4TXwCLI%2BMZjQohlgieNqEOgMHoRYFOIRoCGbeHNA1NWw7I9MP3EWsypB%2BsgcYVCBZW1QjOPv2o2AAywfezTC3PWiUc1Jo5y3pKN3GYiT%2BoQCKk58iD9w%2FoduG2cifp6WYz8sT9YaFcw2N0QkqRv1kuC7RpDlSdphT9yIEJ7LiX%2FGxMbCo1xcf3pHksR7LTRDIzRKRGMPV%2FmUuGDp3o8Xw2dt7dzehRmhzfBTAXyW8RrpAo%2F4j7UC8BTSJ7EHBhcmZ%2BZHPBkfksEIj0%2F6GRpqqDE%2Bd1S8yf4zaANpei4MRai0r9bveT7r%2BTYjFGQn8QncDc4tOaTtBst7b5S4nAuHwHkwHRzMveKNFP1eEsdmnoYlWt1cOwmXSUEX7nKSOfo8jghc9Wg%2Bzx84o2FMxWq1RuvY10DVT3Gsbuk3NhsyGR6crLZxtHA8xWj5q1W%2FbaXWak1UWvF68pqTx43IUNnrW8e7AuyWA2VcQU%2BFrpxTPAQyDBp6tJtQAJ7Mz4Y0E%2FZDS53utjQVivdejDIerr98e40vLUzYHYxD8avHtyg%2FCloL52tryhzhm8dF0yAgXOWDpumhraON2jBI2F47pYpQqVP6sTAmcHGSl%2BZjrBADPNz9PYRGPyHUWbe%2B6EjC6va%2B%2BBjqkAUSujocvQqTbozCoq6lIKhIDNgmGaVbwNTLNxI3HdacHMKAf%2B8J9146FJIDw9Ktj1CleQdF2Fb%2F4L%2FWxw3SQ2TUYSliY2tuo5N0up1BJWIVRSKkX5Wx4WmapVeqJg7KsiiF2hn1lKPHLEDwEKhaxMQ3i%2Ftvvq1quSuWBaPG5UwJniiegqg0PouJYk8TsCWrDBQzZ0VWtdcQYxf24I5s7N%2BTNHJAI&X-Amz-Signature=6cf52dff052a29847fa18abebb5f1eeaffd705e245c79e1682e897c5d70ebe11&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q736RI3I%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQD4fPJAQ3suWqvYrNsE%2BlckEMi0UiBXTx5lDFcjxHWOUgIhAMjgrL57NIhpQ84gN%2FmuKTvVuuxwx%2FsoVOFzTTPa8fwlKv8DCFcQABoMNjM3NDIzMTgzODA1IgySfYIYMajGI96hK6Eq3AM4TXwCLI%2BMZjQohlgieNqEOgMHoRYFOIRoCGbeHNA1NWw7I9MP3EWsypB%2BsgcYVCBZW1QjOPv2o2AAywfezTC3PWiUc1Jo5y3pKN3GYiT%2BoQCKk58iD9w%2FoduG2cifp6WYz8sT9YaFcw2N0QkqRv1kuC7RpDlSdphT9yIEJ7LiX%2FGxMbCo1xcf3pHksR7LTRDIzRKRGMPV%2FmUuGDp3o8Xw2dt7dzehRmhzfBTAXyW8RrpAo%2F4j7UC8BTSJ7EHBhcmZ%2BZHPBkfksEIj0%2F6GRpqqDE%2Bd1S8yf4zaANpei4MRai0r9bveT7r%2BTYjFGQn8QncDc4tOaTtBst7b5S4nAuHwHkwHRzMveKNFP1eEsdmnoYlWt1cOwmXSUEX7nKSOfo8jghc9Wg%2Bzx84o2FMxWq1RuvY10DVT3Gsbuk3NhsyGR6crLZxtHA8xWj5q1W%2FbaXWak1UWvF68pqTx43IUNnrW8e7AuyWA2VcQU%2BFrpxTPAQyDBp6tJtQAJ7Mz4Y0E%2FZDS53utjQVivdejDIerr98e40vLUzYHYxD8avHtyg%2FCloL52tryhzhm8dF0yAgXOWDpumhraON2jBI2F47pYpQqVP6sTAmcHGSl%2BZjrBADPNz9PYRGPyHUWbe%2B6EjC6va%2B%2BBjqkAUSujocvQqTbozCoq6lIKhIDNgmGaVbwNTLNxI3HdacHMKAf%2B8J9146FJIDw9Ktj1CleQdF2Fb%2F4L%2FWxw3SQ2TUYSliY2tuo5N0up1BJWIVRSKkX5Wx4WmapVeqJg7KsiiF2hn1lKPHLEDwEKhaxMQ3i%2Ftvvq1quSuWBaPG5UwJniiegqg0PouJYk8TsCWrDBQzZ0VWtdcQYxf24I5s7N%2BTNHJAI&X-Amz-Signature=207401e46eb37e294f7689e6817efdca3060d4bc2169ec851c7da70476aebde4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
