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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZAQ45E5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmoCCH4Sjr%2FEvq5gdxiruWPGnsgrId5LbdOKVId3PR1QIhAJmqjmWOpHKK7lfjpfMSa1k%2Bil0scCBOM5NN7kB7WPlNKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqmRa3%2B1z8IA8oXxkq3AOTOgQvpQLLbb5C%2FHo%2B4UViOo3Wt5ogQl47TPjBULs7QDKb466VWG1IQRx8E%2BburBRhfzUPoKNZrlwcywuTAq2RGN3QOi5P1%2F6anb1rHatkhQvUK8NtpZ%2BOQ5CdZHfcfE1GyPJpTgpAZB2pgmn95Ns68wsSpNsFPJXwrrpbyOZJa9FYDMwk7qyder4%2BJkgQq9fAjFXrtvyW7Sol7JKYiZHyd%2BZnnRxDyXRlbSnaY48b6JKU3BPav%2FH55nkHKoTGW0GzOSoIoUf0hCTdC77BuD5Wk%2BvYtF8osaO5Fj%2BEZ0UC17cKjaTfLvRZO5OFgZQaKCO7%2FLmO3iARIJKxIPWtvcz9dhAcvvtlkXNE%2F5B1MD78ipN%2FzK72iEt3tFvBar7YD9COvqrFjfwrP6Q6ltPbIWiCtqS39%2FbmpwqstNOBHUkohF5K%2Fq8BOj2zlqrnGkUfwWt%2B%2BwBnfOpvWRjnnOBu6gXJlAh5QcqU8qFUKBsCgH97q2TgyCkQV6oXBiB4RoMw7ueJ%2BWnRm%2FTSvQw7YrrI7sTzcL19AI%2BV1CEFOOkM04VAjlA2bCv%2BYGP2psPVpSh65A%2BtpbEYzawhj3isWQSJz%2FXiaxTYJJpyYzCgh1abH%2FK7Nk%2BJBAlFCNRSko7MSjD8i9%2FEBjqkAfARGRDOffacqC8jvCutVS3H0py3LIqzZB4%2FpLbX6B3f%2FB0VJhWOtnngyb8yfnRhxsos5SwjVptmGziJj%2FjXb6KhpyYwHV3Q8QDtB1IQ0KQqGaUQPgyDqlP1Kj1TitpU0g5b7D9TCd9kMV%2FGb8t42QnSBKxVSL3Zouo4NSCDNjWrogWFEZs1CuyCLwAa%2Bxj2ePtzGVgawWhBeUHFz9oZgaTOYshE&X-Amz-Signature=c5dd0d83efc41e29ca07eb8d9d07e2d7dde31760d98f6739570a5651aeef7783&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZAQ45E5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmoCCH4Sjr%2FEvq5gdxiruWPGnsgrId5LbdOKVId3PR1QIhAJmqjmWOpHKK7lfjpfMSa1k%2Bil0scCBOM5NN7kB7WPlNKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqmRa3%2B1z8IA8oXxkq3AOTOgQvpQLLbb5C%2FHo%2B4UViOo3Wt5ogQl47TPjBULs7QDKb466VWG1IQRx8E%2BburBRhfzUPoKNZrlwcywuTAq2RGN3QOi5P1%2F6anb1rHatkhQvUK8NtpZ%2BOQ5CdZHfcfE1GyPJpTgpAZB2pgmn95Ns68wsSpNsFPJXwrrpbyOZJa9FYDMwk7qyder4%2BJkgQq9fAjFXrtvyW7Sol7JKYiZHyd%2BZnnRxDyXRlbSnaY48b6JKU3BPav%2FH55nkHKoTGW0GzOSoIoUf0hCTdC77BuD5Wk%2BvYtF8osaO5Fj%2BEZ0UC17cKjaTfLvRZO5OFgZQaKCO7%2FLmO3iARIJKxIPWtvcz9dhAcvvtlkXNE%2F5B1MD78ipN%2FzK72iEt3tFvBar7YD9COvqrFjfwrP6Q6ltPbIWiCtqS39%2FbmpwqstNOBHUkohF5K%2Fq8BOj2zlqrnGkUfwWt%2B%2BwBnfOpvWRjnnOBu6gXJlAh5QcqU8qFUKBsCgH97q2TgyCkQV6oXBiB4RoMw7ueJ%2BWnRm%2FTSvQw7YrrI7sTzcL19AI%2BV1CEFOOkM04VAjlA2bCv%2BYGP2psPVpSh65A%2BtpbEYzawhj3isWQSJz%2FXiaxTYJJpyYzCgh1abH%2FK7Nk%2BJBAlFCNRSko7MSjD8i9%2FEBjqkAfARGRDOffacqC8jvCutVS3H0py3LIqzZB4%2FpLbX6B3f%2FB0VJhWOtnngyb8yfnRhxsos5SwjVptmGziJj%2FjXb6KhpyYwHV3Q8QDtB1IQ0KQqGaUQPgyDqlP1Kj1TitpU0g5b7D9TCd9kMV%2FGb8t42QnSBKxVSL3Zouo4NSCDNjWrogWFEZs1CuyCLwAa%2Bxj2ePtzGVgawWhBeUHFz9oZgaTOYshE&X-Amz-Signature=74b5bbd89eb14c8f2dd425a6e8227d8f466b5e31e6889c8b2f39fed07f60ed64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZAQ45E5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmoCCH4Sjr%2FEvq5gdxiruWPGnsgrId5LbdOKVId3PR1QIhAJmqjmWOpHKK7lfjpfMSa1k%2Bil0scCBOM5NN7kB7WPlNKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqmRa3%2B1z8IA8oXxkq3AOTOgQvpQLLbb5C%2FHo%2B4UViOo3Wt5ogQl47TPjBULs7QDKb466VWG1IQRx8E%2BburBRhfzUPoKNZrlwcywuTAq2RGN3QOi5P1%2F6anb1rHatkhQvUK8NtpZ%2BOQ5CdZHfcfE1GyPJpTgpAZB2pgmn95Ns68wsSpNsFPJXwrrpbyOZJa9FYDMwk7qyder4%2BJkgQq9fAjFXrtvyW7Sol7JKYiZHyd%2BZnnRxDyXRlbSnaY48b6JKU3BPav%2FH55nkHKoTGW0GzOSoIoUf0hCTdC77BuD5Wk%2BvYtF8osaO5Fj%2BEZ0UC17cKjaTfLvRZO5OFgZQaKCO7%2FLmO3iARIJKxIPWtvcz9dhAcvvtlkXNE%2F5B1MD78ipN%2FzK72iEt3tFvBar7YD9COvqrFjfwrP6Q6ltPbIWiCtqS39%2FbmpwqstNOBHUkohF5K%2Fq8BOj2zlqrnGkUfwWt%2B%2BwBnfOpvWRjnnOBu6gXJlAh5QcqU8qFUKBsCgH97q2TgyCkQV6oXBiB4RoMw7ueJ%2BWnRm%2FTSvQw7YrrI7sTzcL19AI%2BV1CEFOOkM04VAjlA2bCv%2BYGP2psPVpSh65A%2BtpbEYzawhj3isWQSJz%2FXiaxTYJJpyYzCgh1abH%2FK7Nk%2BJBAlFCNRSko7MSjD8i9%2FEBjqkAfARGRDOffacqC8jvCutVS3H0py3LIqzZB4%2FpLbX6B3f%2FB0VJhWOtnngyb8yfnRhxsos5SwjVptmGziJj%2FjXb6KhpyYwHV3Q8QDtB1IQ0KQqGaUQPgyDqlP1Kj1TitpU0g5b7D9TCd9kMV%2FGb8t42QnSBKxVSL3Zouo4NSCDNjWrogWFEZs1CuyCLwAa%2Bxj2ePtzGVgawWhBeUHFz9oZgaTOYshE&X-Amz-Signature=fd92df987852902a1f46f4ba7dd27eba3a32c58f41e00e7e2051de95ea5c9ab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
