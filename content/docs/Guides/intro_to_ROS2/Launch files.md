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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7GOOWAK%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQHfcEBiKu1%2F7vVB2aqRwgkGegt1kx4GLkiWMTBHP%2FhAiAXlXD7XyLlEwkirDGTT4FC9F7LZt9%2BMYV%2FBpju1SPgfSqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRrymVh5ZqfUE2b1eKtwD%2BcSOrmhQnDMPgj8B9n9SrvEHBKsIlNPpuP8UxKvz2DvqMQ7fuAkyx8fKqSUJeynEGIuEG6%2FXZvMRv3hHaoPNGvVi54bQr%2BMkK%2FE4%2BR38LHePJi9cslOEYCnkdwufYuZVBQyUh%2F9EKaGLUA6Nf91NflbvWrBMHHHFmtt7PUhXAKI%2BnLWigNdN42uqpze%2FM488neh%2F9ilH1O4rvQI3PIkARy0TRTStz8ox%2FiSUwlfzBysW63jK7KtlmJZPIlBOMjPlJV3Ap083ZhqwF9xWEMPpJnTYX0bL15QL6jYwXT%2Ba22MkBzb2XMTNLdQvW5tTCFYap8ONepuMQNkjq7Q1hWcw6fNmQKiO6vqSajZJ1VehsIbk6b3aj07Uw3aNxLlkzGs5LGCmVekbQneVBAcsiI5WO75KoDdPW%2B0ACnzyWME5c%2BlGQ8BNmxCw%2F6DBMJyh6eQXBf%2BvhqUKEc6CMPhUE%2B0znvCG%2BkIYXGd9FGopqN3U0QAyNPeyU9%2FQvK7bwHrqXo6hHsbcR42Ftzf6kbUkvh0CvyBmt%2BK49ZSvqbAlclCrjB23NyxNmQS15r2oQW7gErGaQ5pdhkNNqVAd9Nomg9ZI6gMaQMLqbYBSGaz6AgSEL8QzXFppWrTgNHhImuMwlM3AwwY6pgFyUcHla3EY14%2Bq61CFRfZGcPcGGbfw4rsIfaLFXMtG09i1iSvefTZAjcQ8UczKrjuwiVSBb%2B7dJ7T642hu2mYc8YW5MisWk995CaGpeQ%2BjOsWJfQ9m%2FU9alQOCCFGVefS9jlcgCQc6Jqicbj7rKoKoWyzVNF6dqRsBm215Vwq0Wk1imuC33MktOjWXbiX5ePyr%2B5hWRlTWIozqS4LNzSzycI9p7stt&X-Amz-Signature=71e86abefed7e5f2889809ec4e0872980f65575883e5bd1d01fd29665867ae44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7GOOWAK%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQHfcEBiKu1%2F7vVB2aqRwgkGegt1kx4GLkiWMTBHP%2FhAiAXlXD7XyLlEwkirDGTT4FC9F7LZt9%2BMYV%2FBpju1SPgfSqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRrymVh5ZqfUE2b1eKtwD%2BcSOrmhQnDMPgj8B9n9SrvEHBKsIlNPpuP8UxKvz2DvqMQ7fuAkyx8fKqSUJeynEGIuEG6%2FXZvMRv3hHaoPNGvVi54bQr%2BMkK%2FE4%2BR38LHePJi9cslOEYCnkdwufYuZVBQyUh%2F9EKaGLUA6Nf91NflbvWrBMHHHFmtt7PUhXAKI%2BnLWigNdN42uqpze%2FM488neh%2F9ilH1O4rvQI3PIkARy0TRTStz8ox%2FiSUwlfzBysW63jK7KtlmJZPIlBOMjPlJV3Ap083ZhqwF9xWEMPpJnTYX0bL15QL6jYwXT%2Ba22MkBzb2XMTNLdQvW5tTCFYap8ONepuMQNkjq7Q1hWcw6fNmQKiO6vqSajZJ1VehsIbk6b3aj07Uw3aNxLlkzGs5LGCmVekbQneVBAcsiI5WO75KoDdPW%2B0ACnzyWME5c%2BlGQ8BNmxCw%2F6DBMJyh6eQXBf%2BvhqUKEc6CMPhUE%2B0znvCG%2BkIYXGd9FGopqN3U0QAyNPeyU9%2FQvK7bwHrqXo6hHsbcR42Ftzf6kbUkvh0CvyBmt%2BK49ZSvqbAlclCrjB23NyxNmQS15r2oQW7gErGaQ5pdhkNNqVAd9Nomg9ZI6gMaQMLqbYBSGaz6AgSEL8QzXFppWrTgNHhImuMwlM3AwwY6pgFyUcHla3EY14%2Bq61CFRfZGcPcGGbfw4rsIfaLFXMtG09i1iSvefTZAjcQ8UczKrjuwiVSBb%2B7dJ7T642hu2mYc8YW5MisWk995CaGpeQ%2BjOsWJfQ9m%2FU9alQOCCFGVefS9jlcgCQc6Jqicbj7rKoKoWyzVNF6dqRsBm215Vwq0Wk1imuC33MktOjWXbiX5ePyr%2B5hWRlTWIozqS4LNzSzycI9p7stt&X-Amz-Signature=cf68962aca6531178e523cfb9942a6d3295c02d40bd7c935b1cfcce5a8205e05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7GOOWAK%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQHfcEBiKu1%2F7vVB2aqRwgkGegt1kx4GLkiWMTBHP%2FhAiAXlXD7XyLlEwkirDGTT4FC9F7LZt9%2BMYV%2FBpju1SPgfSqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRrymVh5ZqfUE2b1eKtwD%2BcSOrmhQnDMPgj8B9n9SrvEHBKsIlNPpuP8UxKvz2DvqMQ7fuAkyx8fKqSUJeynEGIuEG6%2FXZvMRv3hHaoPNGvVi54bQr%2BMkK%2FE4%2BR38LHePJi9cslOEYCnkdwufYuZVBQyUh%2F9EKaGLUA6Nf91NflbvWrBMHHHFmtt7PUhXAKI%2BnLWigNdN42uqpze%2FM488neh%2F9ilH1O4rvQI3PIkARy0TRTStz8ox%2FiSUwlfzBysW63jK7KtlmJZPIlBOMjPlJV3Ap083ZhqwF9xWEMPpJnTYX0bL15QL6jYwXT%2Ba22MkBzb2XMTNLdQvW5tTCFYap8ONepuMQNkjq7Q1hWcw6fNmQKiO6vqSajZJ1VehsIbk6b3aj07Uw3aNxLlkzGs5LGCmVekbQneVBAcsiI5WO75KoDdPW%2B0ACnzyWME5c%2BlGQ8BNmxCw%2F6DBMJyh6eQXBf%2BvhqUKEc6CMPhUE%2B0znvCG%2BkIYXGd9FGopqN3U0QAyNPeyU9%2FQvK7bwHrqXo6hHsbcR42Ftzf6kbUkvh0CvyBmt%2BK49ZSvqbAlclCrjB23NyxNmQS15r2oQW7gErGaQ5pdhkNNqVAd9Nomg9ZI6gMaQMLqbYBSGaz6AgSEL8QzXFppWrTgNHhImuMwlM3AwwY6pgFyUcHla3EY14%2Bq61CFRfZGcPcGGbfw4rsIfaLFXMtG09i1iSvefTZAjcQ8UczKrjuwiVSBb%2B7dJ7T642hu2mYc8YW5MisWk995CaGpeQ%2BjOsWJfQ9m%2FU9alQOCCFGVefS9jlcgCQc6Jqicbj7rKoKoWyzVNF6dqRsBm215Vwq0Wk1imuC33MktOjWXbiX5ePyr%2B5hWRlTWIozqS4LNzSzycI9p7stt&X-Amz-Signature=6b6a5e73178833c9b20a159f9dcf53ca4b7ffd67c0a1d522c43540d909ac7f07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
