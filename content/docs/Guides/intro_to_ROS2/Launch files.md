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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V3YUX6U%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIHTwcFfvjh1nVelKWl59gz5bLKOYhjfxlhpJT%2FprNxQDAiEA5uUvwuzUKwg3qTBsaIuIoDZ8U8zfux%2B%2BMqzfupFQWDgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPpBZbC%2BgMZT4AG%2FMyrcA1%2FzQtbx0Z3HG0lVfDpHVQ5mdUNlkiNPe%2B7oXuYKsfmHzZ1CtxI3Bpct5HlOt9Yt766ukPKOXGbP8U%2F7IxSKrEVOcyHf00td8eclgofp3TIss4lH%2F8EbXJJA7kcnX9zG8xivZIFj4WdOkcAODsgnqGnEMCaupdS4A0RNi0bi01OhbJGdmPKPKBqORKMdsTKrglq3edMG9PQN3v%2FsOhvKq5dmx9f8KPi7eswlaB0THVRRLl2bsDxceTekFsBXE0wddJavoaDGWDkSOhf23X2%2BxwlkWgL3KtEAHkk0fPOXspcJGmd0w%2BWRb3P8Rd%2BoAEcHs3Kj0plZDAA4tDTuM80bFE8zps2fHGQJQOLsrAdrMDlNp01BIggIXQDNVm0WHm7NG90v7iHPTf1SfIW0wfMS02DavH5Rgp9A1XIfB%2BBc1pIv6ubLmravUBpwzY04YKFjJpvYqxS83fD%2BcfEUQNvLX6gW5UqUZNG3B0eNOHQPEb51XLto8Gg2GfkGj%2FtggXER1KKFgKoKWTdAOzobVI95mgwCyUIVHEb9wMf9WrbbHfLMZfAghchqUhLhzTBib2lwlrbVHBegEKCPuJnQEnI5ijX17Xydc74l%2F7IVJOESdAm5gqCTsE5jeMBubmVcMKT22sMGOqUBb5D5HSM5XNZ5V0xJbDy4gS6RiTTp3VJZs6otApmms8HjC%2FUXT%2BuZxDaC%2BiQwI4auPIQuMPdc4UFDNiACB8Ku6zXkbQed9McpCVAF7%2FUk0bI74CkFzJkW%2Be9j4GusiDyGOAeeiImSQTbatTbOsxxr8sN8KnzSXHLP7aJXg8LucNa8knquwEGPfDkbYLdxVGTvN%2BgCIqnvKsSLQ%2FxPbV9lbdvsQmLb&X-Amz-Signature=b97658da0a35ccfe4766772bcb6ba727bae45c213f0794aa16114f16a4ca7041&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V3YUX6U%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIHTwcFfvjh1nVelKWl59gz5bLKOYhjfxlhpJT%2FprNxQDAiEA5uUvwuzUKwg3qTBsaIuIoDZ8U8zfux%2B%2BMqzfupFQWDgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPpBZbC%2BgMZT4AG%2FMyrcA1%2FzQtbx0Z3HG0lVfDpHVQ5mdUNlkiNPe%2B7oXuYKsfmHzZ1CtxI3Bpct5HlOt9Yt766ukPKOXGbP8U%2F7IxSKrEVOcyHf00td8eclgofp3TIss4lH%2F8EbXJJA7kcnX9zG8xivZIFj4WdOkcAODsgnqGnEMCaupdS4A0RNi0bi01OhbJGdmPKPKBqORKMdsTKrglq3edMG9PQN3v%2FsOhvKq5dmx9f8KPi7eswlaB0THVRRLl2bsDxceTekFsBXE0wddJavoaDGWDkSOhf23X2%2BxwlkWgL3KtEAHkk0fPOXspcJGmd0w%2BWRb3P8Rd%2BoAEcHs3Kj0plZDAA4tDTuM80bFE8zps2fHGQJQOLsrAdrMDlNp01BIggIXQDNVm0WHm7NG90v7iHPTf1SfIW0wfMS02DavH5Rgp9A1XIfB%2BBc1pIv6ubLmravUBpwzY04YKFjJpvYqxS83fD%2BcfEUQNvLX6gW5UqUZNG3B0eNOHQPEb51XLto8Gg2GfkGj%2FtggXER1KKFgKoKWTdAOzobVI95mgwCyUIVHEb9wMf9WrbbHfLMZfAghchqUhLhzTBib2lwlrbVHBegEKCPuJnQEnI5ijX17Xydc74l%2F7IVJOESdAm5gqCTsE5jeMBubmVcMKT22sMGOqUBb5D5HSM5XNZ5V0xJbDy4gS6RiTTp3VJZs6otApmms8HjC%2FUXT%2BuZxDaC%2BiQwI4auPIQuMPdc4UFDNiACB8Ku6zXkbQed9McpCVAF7%2FUk0bI74CkFzJkW%2Be9j4GusiDyGOAeeiImSQTbatTbOsxxr8sN8KnzSXHLP7aJXg8LucNa8knquwEGPfDkbYLdxVGTvN%2BgCIqnvKsSLQ%2FxPbV9lbdvsQmLb&X-Amz-Signature=c62b6a3aa08178c007302c5824e7a5e0df1578b98c96068ca4c28528dc825129&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V3YUX6U%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIHTwcFfvjh1nVelKWl59gz5bLKOYhjfxlhpJT%2FprNxQDAiEA5uUvwuzUKwg3qTBsaIuIoDZ8U8zfux%2B%2BMqzfupFQWDgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPpBZbC%2BgMZT4AG%2FMyrcA1%2FzQtbx0Z3HG0lVfDpHVQ5mdUNlkiNPe%2B7oXuYKsfmHzZ1CtxI3Bpct5HlOt9Yt766ukPKOXGbP8U%2F7IxSKrEVOcyHf00td8eclgofp3TIss4lH%2F8EbXJJA7kcnX9zG8xivZIFj4WdOkcAODsgnqGnEMCaupdS4A0RNi0bi01OhbJGdmPKPKBqORKMdsTKrglq3edMG9PQN3v%2FsOhvKq5dmx9f8KPi7eswlaB0THVRRLl2bsDxceTekFsBXE0wddJavoaDGWDkSOhf23X2%2BxwlkWgL3KtEAHkk0fPOXspcJGmd0w%2BWRb3P8Rd%2BoAEcHs3Kj0plZDAA4tDTuM80bFE8zps2fHGQJQOLsrAdrMDlNp01BIggIXQDNVm0WHm7NG90v7iHPTf1SfIW0wfMS02DavH5Rgp9A1XIfB%2BBc1pIv6ubLmravUBpwzY04YKFjJpvYqxS83fD%2BcfEUQNvLX6gW5UqUZNG3B0eNOHQPEb51XLto8Gg2GfkGj%2FtggXER1KKFgKoKWTdAOzobVI95mgwCyUIVHEb9wMf9WrbbHfLMZfAghchqUhLhzTBib2lwlrbVHBegEKCPuJnQEnI5ijX17Xydc74l%2F7IVJOESdAm5gqCTsE5jeMBubmVcMKT22sMGOqUBb5D5HSM5XNZ5V0xJbDy4gS6RiTTp3VJZs6otApmms8HjC%2FUXT%2BuZxDaC%2BiQwI4auPIQuMPdc4UFDNiACB8Ku6zXkbQed9McpCVAF7%2FUk0bI74CkFzJkW%2Be9j4GusiDyGOAeeiImSQTbatTbOsxxr8sN8KnzSXHLP7aJXg8LucNa8knquwEGPfDkbYLdxVGTvN%2BgCIqnvKsSLQ%2FxPbV9lbdvsQmLb&X-Amz-Signature=3ea46c505ab6cc8154360494cf2ad1b57744487d88f48b12849fa301a49da019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
