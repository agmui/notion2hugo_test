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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK2IFBUP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8Bn5sh5AFyzjZO3jqIU5PB5yKyd6GQromhSHQ3ywS6AiBKAfp6jkQTi%2Fa0bzB9PssgVJ3c2DoM%2BVNywTEvF8aLFyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu4HBcYi0yQO9gW8EKtwDjF40ni1ww9Hrkl2f3vSv3hTB16MGZyEP68tCtCS432k0gBXAR4H70PQb3EeaJ%2BeVgTijdwZzuONcYrgvVtIaT9Bz1dobHSQGtmtRWa%2FgVKRnQtIKpAxlYxvY7PwC9p8oywCoUv%2BHWCZU3%2Bx%2FlgR%2BgjJ3kOy9tRHn4VuaiYcJAzsy8qUfuvoaN4E9ZiaotvJKX7lf2hWmA2pSxr9aTHlCkmGQIYNn4tusgb0VMk7I100pwuclUt9Mvfesbex4FBdbNuhGpa5%2B%2BrHboQ3N%2BnCUTaAQZoyRMC0xeOM3HF3HFi1Auy6fjM8hdcPNjWCqAjtpbe6lfePg67JMLWMeACFjmuZjFu2BE09o7k9q1pP5G6QAl5zovX%2BwI1HYmkdb82%2BeHpoVawQvePLYAisYF5%2BpAhzmRy3X1O4tV1ibNdPAqDw%2BR2JQMXbMgyx4AaHRoDos7%2BeuwZr2sQxX39Mc471kDVEh9yt2UG6zPUb2nV2wUx9sdiAzA9n8dNPxeaM8bvkUot5AFUrxwozmGAAOubmEEXHh%2BOtd2Y0PKA61VzGmrWK%2FKO1IcIAbYkTTqUmVgrgN8zZAt3Ae9wQhPa3fiz8%2FhIuCxxCyNSaz4eY4bLRQbcMVkLtb%2B0sSb4l%2Bvcww9ZD%2FwgY6pgHEBQX5mV3iw3YRlwTSyEYXQ%2F3Mb8LdJ%2Fd0uRN8vVKh12fS1ESR6hczs3HNCq6GuYsjZPbLm6rTm1ZO9%2FMol%2FBpbZlL8N2V%2FiIRVrproB5jxJCaYyB2IM2SuLdkhEekgrbkweQHM%2BK7mX3EEti%2FfVcM8xz2dAOUW6nWUwYjJMXCP6U9dlcRNx1ZxEPsXtcMkh4LiE9mn71YqsGMVAmf5TcW4MiisFiT&X-Amz-Signature=4ee7cb233a4eade1610ae583898bbcb2cd100a3fbff54d7ec932821059635923&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK2IFBUP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8Bn5sh5AFyzjZO3jqIU5PB5yKyd6GQromhSHQ3ywS6AiBKAfp6jkQTi%2Fa0bzB9PssgVJ3c2DoM%2BVNywTEvF8aLFyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu4HBcYi0yQO9gW8EKtwDjF40ni1ww9Hrkl2f3vSv3hTB16MGZyEP68tCtCS432k0gBXAR4H70PQb3EeaJ%2BeVgTijdwZzuONcYrgvVtIaT9Bz1dobHSQGtmtRWa%2FgVKRnQtIKpAxlYxvY7PwC9p8oywCoUv%2BHWCZU3%2Bx%2FlgR%2BgjJ3kOy9tRHn4VuaiYcJAzsy8qUfuvoaN4E9ZiaotvJKX7lf2hWmA2pSxr9aTHlCkmGQIYNn4tusgb0VMk7I100pwuclUt9Mvfesbex4FBdbNuhGpa5%2B%2BrHboQ3N%2BnCUTaAQZoyRMC0xeOM3HF3HFi1Auy6fjM8hdcPNjWCqAjtpbe6lfePg67JMLWMeACFjmuZjFu2BE09o7k9q1pP5G6QAl5zovX%2BwI1HYmkdb82%2BeHpoVawQvePLYAisYF5%2BpAhzmRy3X1O4tV1ibNdPAqDw%2BR2JQMXbMgyx4AaHRoDos7%2BeuwZr2sQxX39Mc471kDVEh9yt2UG6zPUb2nV2wUx9sdiAzA9n8dNPxeaM8bvkUot5AFUrxwozmGAAOubmEEXHh%2BOtd2Y0PKA61VzGmrWK%2FKO1IcIAbYkTTqUmVgrgN8zZAt3Ae9wQhPa3fiz8%2FhIuCxxCyNSaz4eY4bLRQbcMVkLtb%2B0sSb4l%2Bvcww9ZD%2FwgY6pgHEBQX5mV3iw3YRlwTSyEYXQ%2F3Mb8LdJ%2Fd0uRN8vVKh12fS1ESR6hczs3HNCq6GuYsjZPbLm6rTm1ZO9%2FMol%2FBpbZlL8N2V%2FiIRVrproB5jxJCaYyB2IM2SuLdkhEekgrbkweQHM%2BK7mX3EEti%2FfVcM8xz2dAOUW6nWUwYjJMXCP6U9dlcRNx1ZxEPsXtcMkh4LiE9mn71YqsGMVAmf5TcW4MiisFiT&X-Amz-Signature=db869e344b80a5b5a9110df521f1db5df19ad4ec4e0b455ff808cad859ddbec0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK2IFBUP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8Bn5sh5AFyzjZO3jqIU5PB5yKyd6GQromhSHQ3ywS6AiBKAfp6jkQTi%2Fa0bzB9PssgVJ3c2DoM%2BVNywTEvF8aLFyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu4HBcYi0yQO9gW8EKtwDjF40ni1ww9Hrkl2f3vSv3hTB16MGZyEP68tCtCS432k0gBXAR4H70PQb3EeaJ%2BeVgTijdwZzuONcYrgvVtIaT9Bz1dobHSQGtmtRWa%2FgVKRnQtIKpAxlYxvY7PwC9p8oywCoUv%2BHWCZU3%2Bx%2FlgR%2BgjJ3kOy9tRHn4VuaiYcJAzsy8qUfuvoaN4E9ZiaotvJKX7lf2hWmA2pSxr9aTHlCkmGQIYNn4tusgb0VMk7I100pwuclUt9Mvfesbex4FBdbNuhGpa5%2B%2BrHboQ3N%2BnCUTaAQZoyRMC0xeOM3HF3HFi1Auy6fjM8hdcPNjWCqAjtpbe6lfePg67JMLWMeACFjmuZjFu2BE09o7k9q1pP5G6QAl5zovX%2BwI1HYmkdb82%2BeHpoVawQvePLYAisYF5%2BpAhzmRy3X1O4tV1ibNdPAqDw%2BR2JQMXbMgyx4AaHRoDos7%2BeuwZr2sQxX39Mc471kDVEh9yt2UG6zPUb2nV2wUx9sdiAzA9n8dNPxeaM8bvkUot5AFUrxwozmGAAOubmEEXHh%2BOtd2Y0PKA61VzGmrWK%2FKO1IcIAbYkTTqUmVgrgN8zZAt3Ae9wQhPa3fiz8%2FhIuCxxCyNSaz4eY4bLRQbcMVkLtb%2B0sSb4l%2Bvcww9ZD%2FwgY6pgHEBQX5mV3iw3YRlwTSyEYXQ%2F3Mb8LdJ%2Fd0uRN8vVKh12fS1ESR6hczs3HNCq6GuYsjZPbLm6rTm1ZO9%2FMol%2FBpbZlL8N2V%2FiIRVrproB5jxJCaYyB2IM2SuLdkhEekgrbkweQHM%2BK7mX3EEti%2FfVcM8xz2dAOUW6nWUwYjJMXCP6U9dlcRNx1ZxEPsXtcMkh4LiE9mn71YqsGMVAmf5TcW4MiisFiT&X-Amz-Signature=5f80c029647ad5692fb0d8fd89e996a92d3fde38dbd568957c17d42f06d7650b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
