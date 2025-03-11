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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUG5NGR2%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIFB2b1MB2ShNEzQpvKWAaeo4XixjpCDUXsav5qiihkpTAiA1PuVfvTdFMWpDKxBKzBRiQ%2FtMjJg7chTO2y0mJ5og%2BSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrfHFfSLqw47rSVGaKtwDHs9Fj7BWz4hzRX0sgaioDQYSI3ZxDRL6i%2BqAq6VPK67SteJIpPZUJM%2FDFmZkS3NgCRy9uZ1pVC8QS4toeXe6d9bOdlvp4b2klgaUy1e3%2FNOIHOGa%2FVIDp9N4zWZXOcW8rg27iwtg9Slj7%2B1gi2HB%2Blof5ay%2Fgee2ggO7f9SjTb94zxMammkTcyOOd%2FUMx5YtTIBNW8ak6wDxSXa365CGds00jcS225rg0OEDy53VYsBAShXsavSdiTqbHK8zNsPeieKpVm39Gew8bwizn1mlUpCI%2FKreABCilWOt4ifpNXj6bSkagSW9t%2BVt1jdeyWljKn7nDTtOwZhloGDmrMvbqlspvGbmMBjoGv%2FjaJfVBw10AVB%2BabcDZB1aMBqDTlFRciRdWCun04F6x5tIjvt6%2ByDQ9G4Vv3rxSUyti4Yta%2B8RLgqbJTqvX%2BqTrI4KrUl0Ac8nuRcAk5iXR2d104U0QgC4972bWtZaDGmttXjP5C0FW0q897KlQC9BvbKNRGMMaXV7SB8Lt1zsgYTSMoM%2FTYnc5h0W%2FYmGZzsNcaNMS465b717pfD6SM9VtuZs801tTc9zvk8jj%2FtTyzMx7VRFZCaENAT%2BvGVwmF8e6WwyljQIqXMU9uCvqYMxT68w3rC%2FvgY6pgGsBdZ%2BYUk2wVIq6uEsaPp8ZjpdDT1qIkYgj2P2Foa1RbjGB1KpRs%2FP%2BH0kWhYUvdIWx1PITGuqEZWkixfsoYYz%2BN9upKGgnZfMmaeZi0y%2FcepmCgOve5xX4H9Wuj%2FwvulwqffQwztyQQG4DkgzejWfZablNU%2Fn4PhhqGTxZ0GPI%2BB8pTQ%2Bmb9mcxt2vMAvwCpZo9ad3R2kvzrvggvPLcOiGmnEJhea&X-Amz-Signature=4af504581fa75be62291c6da3490b4d144c766314e01c69faab03c2404cd4aae&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUG5NGR2%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIFB2b1MB2ShNEzQpvKWAaeo4XixjpCDUXsav5qiihkpTAiA1PuVfvTdFMWpDKxBKzBRiQ%2FtMjJg7chTO2y0mJ5og%2BSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrfHFfSLqw47rSVGaKtwDHs9Fj7BWz4hzRX0sgaioDQYSI3ZxDRL6i%2BqAq6VPK67SteJIpPZUJM%2FDFmZkS3NgCRy9uZ1pVC8QS4toeXe6d9bOdlvp4b2klgaUy1e3%2FNOIHOGa%2FVIDp9N4zWZXOcW8rg27iwtg9Slj7%2B1gi2HB%2Blof5ay%2Fgee2ggO7f9SjTb94zxMammkTcyOOd%2FUMx5YtTIBNW8ak6wDxSXa365CGds00jcS225rg0OEDy53VYsBAShXsavSdiTqbHK8zNsPeieKpVm39Gew8bwizn1mlUpCI%2FKreABCilWOt4ifpNXj6bSkagSW9t%2BVt1jdeyWljKn7nDTtOwZhloGDmrMvbqlspvGbmMBjoGv%2FjaJfVBw10AVB%2BabcDZB1aMBqDTlFRciRdWCun04F6x5tIjvt6%2ByDQ9G4Vv3rxSUyti4Yta%2B8RLgqbJTqvX%2BqTrI4KrUl0Ac8nuRcAk5iXR2d104U0QgC4972bWtZaDGmttXjP5C0FW0q897KlQC9BvbKNRGMMaXV7SB8Lt1zsgYTSMoM%2FTYnc5h0W%2FYmGZzsNcaNMS465b717pfD6SM9VtuZs801tTc9zvk8jj%2FtTyzMx7VRFZCaENAT%2BvGVwmF8e6WwyljQIqXMU9uCvqYMxT68w3rC%2FvgY6pgGsBdZ%2BYUk2wVIq6uEsaPp8ZjpdDT1qIkYgj2P2Foa1RbjGB1KpRs%2FP%2BH0kWhYUvdIWx1PITGuqEZWkixfsoYYz%2BN9upKGgnZfMmaeZi0y%2FcepmCgOve5xX4H9Wuj%2FwvulwqffQwztyQQG4DkgzejWfZablNU%2Fn4PhhqGTxZ0GPI%2BB8pTQ%2Bmb9mcxt2vMAvwCpZo9ad3R2kvzrvggvPLcOiGmnEJhea&X-Amz-Signature=7a4fe0fb3bc41a3d272fdce3783f2c1d6d918789aa53d1dcafa3e2fd50744e13&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUG5NGR2%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIFB2b1MB2ShNEzQpvKWAaeo4XixjpCDUXsav5qiihkpTAiA1PuVfvTdFMWpDKxBKzBRiQ%2FtMjJg7chTO2y0mJ5og%2BSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrfHFfSLqw47rSVGaKtwDHs9Fj7BWz4hzRX0sgaioDQYSI3ZxDRL6i%2BqAq6VPK67SteJIpPZUJM%2FDFmZkS3NgCRy9uZ1pVC8QS4toeXe6d9bOdlvp4b2klgaUy1e3%2FNOIHOGa%2FVIDp9N4zWZXOcW8rg27iwtg9Slj7%2B1gi2HB%2Blof5ay%2Fgee2ggO7f9SjTb94zxMammkTcyOOd%2FUMx5YtTIBNW8ak6wDxSXa365CGds00jcS225rg0OEDy53VYsBAShXsavSdiTqbHK8zNsPeieKpVm39Gew8bwizn1mlUpCI%2FKreABCilWOt4ifpNXj6bSkagSW9t%2BVt1jdeyWljKn7nDTtOwZhloGDmrMvbqlspvGbmMBjoGv%2FjaJfVBw10AVB%2BabcDZB1aMBqDTlFRciRdWCun04F6x5tIjvt6%2ByDQ9G4Vv3rxSUyti4Yta%2B8RLgqbJTqvX%2BqTrI4KrUl0Ac8nuRcAk5iXR2d104U0QgC4972bWtZaDGmttXjP5C0FW0q897KlQC9BvbKNRGMMaXV7SB8Lt1zsgYTSMoM%2FTYnc5h0W%2FYmGZzsNcaNMS465b717pfD6SM9VtuZs801tTc9zvk8jj%2FtTyzMx7VRFZCaENAT%2BvGVwmF8e6WwyljQIqXMU9uCvqYMxT68w3rC%2FvgY6pgGsBdZ%2BYUk2wVIq6uEsaPp8ZjpdDT1qIkYgj2P2Foa1RbjGB1KpRs%2FP%2BH0kWhYUvdIWx1PITGuqEZWkixfsoYYz%2BN9upKGgnZfMmaeZi0y%2FcepmCgOve5xX4H9Wuj%2FwvulwqffQwztyQQG4DkgzejWfZablNU%2Fn4PhhqGTxZ0GPI%2BB8pTQ%2Bmb9mcxt2vMAvwCpZo9ad3R2kvzrvggvPLcOiGmnEJhea&X-Amz-Signature=0cb60a15adc73e84987c9a2d7b87144b7102b0369cd7a6da4deb6ee43a603488&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
