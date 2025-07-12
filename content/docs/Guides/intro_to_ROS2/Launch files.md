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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC34OCJM%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv7rYnZaRq6bPvjv9PuqTKcrLp61PUpeBF3sC%2FYB66nwIgccp3gK%2BSoudRU3rVVhvsvtppl%2FoWHoE5TlVrxU4rXMwqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPs6Y3P4ODmDrWhkhCrcA5d28YEsxc4evsmmKtQn0mVgiPq4xOujr9Yi1xkGkI6aGLHveusUcTuIewkWBarDNsR8O2cF5X3qcDR7lAcwKOxJHTmzRT7TPcnJ%2FGLIPAP54NNZCQuJQNef%2B2h8jNbGUrzGuwiTFNBk1yd%2F5MycoWIun1WVGDqpZtflfDtpYPEu%2Fvwki%2BMnfbeix2JJf%2Frwdz9pCIRbydJWf4Xxh%2BPxACu3ytFCvawwIhy%2FPb8eBvVIYeFDdxAjeCanNgDfJKwD%2F2GLvzYorF%2FtS77L8f788tis2rUc7CvfpqxBsBApAzc%2Bxn1OTdPx1jpwmwATsOLI5nppmCgGi3dGxMyb141kQIiGOi88N%2FJ%2FR4A9D28Wn1zGsR7R%2FYxA4eO6ss23dBMiiPC4wsdDbQgffjlMxfhiro4%2BOnxt9aBUl9mICbsLK5AWQouoWltCMbezpcnZJ7dWKOgspdoMt%2BMVmemTIFDfHnT4ua8%2Bli8y3Untt0CJHU4jK%2F0nrn3hmVBITE6IBVBuXkhwVoMleSDfOfoVw%2F0h26j9F%2BBWgC3GA%2FseKSPFZww7%2BBM1jXI9W77HZHU7ebD9WhdSJLsuh15N9cZnpL7M0%2FG%2Bu%2FmZMH7KUTfRFggdA3k9Ao%2FpINVlljKo2X15MNK1xsMGOqUBs78DJj7pTl1s0TviV6BKokIlpuZN2axWs1iQle%2B2iuRJt8Ke8k0riiBAqEyRmYPRt8VmFDyzAWLqA26%2B9EWd9ENPeVUPyhZiyQyWnfZj1XEdA2o0ibr9daXl9vjqX9vOJA9vALWixx57G8hDldyOw7xoIHUnHvFHIfhG3J3AIHE%2Bag4U0KYrSdF9vXRPg5toBo%2BYg2JUMf%2FPPGddrUt4VsAC8X1U&X-Amz-Signature=9972a03c62fbbf3892cb7d8a2149616f193e7975b5d7c4786163834d81a12baf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC34OCJM%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv7rYnZaRq6bPvjv9PuqTKcrLp61PUpeBF3sC%2FYB66nwIgccp3gK%2BSoudRU3rVVhvsvtppl%2FoWHoE5TlVrxU4rXMwqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPs6Y3P4ODmDrWhkhCrcA5d28YEsxc4evsmmKtQn0mVgiPq4xOujr9Yi1xkGkI6aGLHveusUcTuIewkWBarDNsR8O2cF5X3qcDR7lAcwKOxJHTmzRT7TPcnJ%2FGLIPAP54NNZCQuJQNef%2B2h8jNbGUrzGuwiTFNBk1yd%2F5MycoWIun1WVGDqpZtflfDtpYPEu%2Fvwki%2BMnfbeix2JJf%2Frwdz9pCIRbydJWf4Xxh%2BPxACu3ytFCvawwIhy%2FPb8eBvVIYeFDdxAjeCanNgDfJKwD%2F2GLvzYorF%2FtS77L8f788tis2rUc7CvfpqxBsBApAzc%2Bxn1OTdPx1jpwmwATsOLI5nppmCgGi3dGxMyb141kQIiGOi88N%2FJ%2FR4A9D28Wn1zGsR7R%2FYxA4eO6ss23dBMiiPC4wsdDbQgffjlMxfhiro4%2BOnxt9aBUl9mICbsLK5AWQouoWltCMbezpcnZJ7dWKOgspdoMt%2BMVmemTIFDfHnT4ua8%2Bli8y3Untt0CJHU4jK%2F0nrn3hmVBITE6IBVBuXkhwVoMleSDfOfoVw%2F0h26j9F%2BBWgC3GA%2FseKSPFZww7%2BBM1jXI9W77HZHU7ebD9WhdSJLsuh15N9cZnpL7M0%2FG%2Bu%2FmZMH7KUTfRFggdA3k9Ao%2FpINVlljKo2X15MNK1xsMGOqUBs78DJj7pTl1s0TviV6BKokIlpuZN2axWs1iQle%2B2iuRJt8Ke8k0riiBAqEyRmYPRt8VmFDyzAWLqA26%2B9EWd9ENPeVUPyhZiyQyWnfZj1XEdA2o0ibr9daXl9vjqX9vOJA9vALWixx57G8hDldyOw7xoIHUnHvFHIfhG3J3AIHE%2Bag4U0KYrSdF9vXRPg5toBo%2BYg2JUMf%2FPPGddrUt4VsAC8X1U&X-Amz-Signature=c30b7e2886215b52a3c6e204b87da2f92de6ed0180405116151e1f1442d2eb6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC34OCJM%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv7rYnZaRq6bPvjv9PuqTKcrLp61PUpeBF3sC%2FYB66nwIgccp3gK%2BSoudRU3rVVhvsvtppl%2FoWHoE5TlVrxU4rXMwqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPs6Y3P4ODmDrWhkhCrcA5d28YEsxc4evsmmKtQn0mVgiPq4xOujr9Yi1xkGkI6aGLHveusUcTuIewkWBarDNsR8O2cF5X3qcDR7lAcwKOxJHTmzRT7TPcnJ%2FGLIPAP54NNZCQuJQNef%2B2h8jNbGUrzGuwiTFNBk1yd%2F5MycoWIun1WVGDqpZtflfDtpYPEu%2Fvwki%2BMnfbeix2JJf%2Frwdz9pCIRbydJWf4Xxh%2BPxACu3ytFCvawwIhy%2FPb8eBvVIYeFDdxAjeCanNgDfJKwD%2F2GLvzYorF%2FtS77L8f788tis2rUc7CvfpqxBsBApAzc%2Bxn1OTdPx1jpwmwATsOLI5nppmCgGi3dGxMyb141kQIiGOi88N%2FJ%2FR4A9D28Wn1zGsR7R%2FYxA4eO6ss23dBMiiPC4wsdDbQgffjlMxfhiro4%2BOnxt9aBUl9mICbsLK5AWQouoWltCMbezpcnZJ7dWKOgspdoMt%2BMVmemTIFDfHnT4ua8%2Bli8y3Untt0CJHU4jK%2F0nrn3hmVBITE6IBVBuXkhwVoMleSDfOfoVw%2F0h26j9F%2BBWgC3GA%2FseKSPFZww7%2BBM1jXI9W77HZHU7ebD9WhdSJLsuh15N9cZnpL7M0%2FG%2Bu%2FmZMH7KUTfRFggdA3k9Ao%2FpINVlljKo2X15MNK1xsMGOqUBs78DJj7pTl1s0TviV6BKokIlpuZN2axWs1iQle%2B2iuRJt8Ke8k0riiBAqEyRmYPRt8VmFDyzAWLqA26%2B9EWd9ENPeVUPyhZiyQyWnfZj1XEdA2o0ibr9daXl9vjqX9vOJA9vALWixx57G8hDldyOw7xoIHUnHvFHIfhG3J3AIHE%2Bag4U0KYrSdF9vXRPg5toBo%2BYg2JUMf%2FPPGddrUt4VsAC8X1U&X-Amz-Signature=554e0da74823e17d0bcc80be4f3b34aeb8bb9362400e48e135998f8abc625088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
