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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BC5BWR7%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBI5%2B%2B4ygT5bCtkgpifn3diJrYGv939hyxf6s06axmV9AiAr5oLiGSokWCEndBJ1ig2BbWwSmUgrx5RuFS%2BqZ0vkbSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEbPrknngoAf0imp5KtwDWLyF4uDaMNhzSr932V2HqHheZ0J5vVmfk4INWtAy2kxM7SN1fEP%2BeuAPtmuRGHNeY2zOmwhrPAiKj%2B3IEHvAXrv5NUvfvwGDynq3TT%2FY%2Bw%2BZXzpZ4C7f2FHPBrR%2FJMHexf9YtCPdrfBqHoMZjmfCZMVS2rnmezUApRgvPGHLSFeUVujqhEht56oeCT1TcWuEXVBgfTdJanALP6do401nv23B23uxe6RMZM8npGHL46JnVysHZvN%2FL3tVuvynl5M7wOqPH%2F%2FiZIL%2BxtuW%2Bb99FlaREjsBxhDru8ttG9xoOkHtWpMKzuafUyfE%2Bpxv9WPFFkCHqx0FMIt3oGOIQujmPMA6%2BBUZSWXTf3t%2BV6W47m%2FeKJ5tSIoah02sdthjzixLxJF2j7kfjzVdXFt8jA4acHHVNj2wfsRL6Yj%2FBXHtGNQ0nzgiSbKbHZ8un%2FetQweiZGfPmaxYVkwUQfPdsx3Ew33R9fRDtiPr2sZyRIVH%2F%2BcenoTNm%2FkDR2cEzWl3bcHEHjscYf3WZQIvyCrBPAyuDL86XWigthcwQx7C7SUgDQUl6fhXVwd8p15N2NoIDjSxII2qQvUyoCak13YXt1fu9bNrv46RZL%2FFAi5To2Z0cKgXWpr%2F672pafWeORQwkaPuvwY6pgGAxtH%2BymeFSE5gyr6zUYkLBdrOkHnpABrQn59ighNgvUax072j%2Bic2%2FfpJaVkRxI2dr81sXG7v9bb8JIpxJZUm%2BEpac8ulO%2BQjHqJBPLunUctYUW5H88G26bLUWcF1wpsLU5qi%2B9HCeqOgbOs1%2BS0w6MCHwNlY8PIZzbnNRbzDHSObtodUFzukmDADlkuR66hTcKb7Ttiox0ZvRCf88qljzmkZxf7K&X-Amz-Signature=426ba2902a9cfd7d85cdba7097ae183f5b96bd1b9b677aaf786ac241c4a485bd&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BC5BWR7%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBI5%2B%2B4ygT5bCtkgpifn3diJrYGv939hyxf6s06axmV9AiAr5oLiGSokWCEndBJ1ig2BbWwSmUgrx5RuFS%2BqZ0vkbSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEbPrknngoAf0imp5KtwDWLyF4uDaMNhzSr932V2HqHheZ0J5vVmfk4INWtAy2kxM7SN1fEP%2BeuAPtmuRGHNeY2zOmwhrPAiKj%2B3IEHvAXrv5NUvfvwGDynq3TT%2FY%2Bw%2BZXzpZ4C7f2FHPBrR%2FJMHexf9YtCPdrfBqHoMZjmfCZMVS2rnmezUApRgvPGHLSFeUVujqhEht56oeCT1TcWuEXVBgfTdJanALP6do401nv23B23uxe6RMZM8npGHL46JnVysHZvN%2FL3tVuvynl5M7wOqPH%2F%2FiZIL%2BxtuW%2Bb99FlaREjsBxhDru8ttG9xoOkHtWpMKzuafUyfE%2Bpxv9WPFFkCHqx0FMIt3oGOIQujmPMA6%2BBUZSWXTf3t%2BV6W47m%2FeKJ5tSIoah02sdthjzixLxJF2j7kfjzVdXFt8jA4acHHVNj2wfsRL6Yj%2FBXHtGNQ0nzgiSbKbHZ8un%2FetQweiZGfPmaxYVkwUQfPdsx3Ew33R9fRDtiPr2sZyRIVH%2F%2BcenoTNm%2FkDR2cEzWl3bcHEHjscYf3WZQIvyCrBPAyuDL86XWigthcwQx7C7SUgDQUl6fhXVwd8p15N2NoIDjSxII2qQvUyoCak13YXt1fu9bNrv46RZL%2FFAi5To2Z0cKgXWpr%2F672pafWeORQwkaPuvwY6pgGAxtH%2BymeFSE5gyr6zUYkLBdrOkHnpABrQn59ighNgvUax072j%2Bic2%2FfpJaVkRxI2dr81sXG7v9bb8JIpxJZUm%2BEpac8ulO%2BQjHqJBPLunUctYUW5H88G26bLUWcF1wpsLU5qi%2B9HCeqOgbOs1%2BS0w6MCHwNlY8PIZzbnNRbzDHSObtodUFzukmDADlkuR66hTcKb7Ttiox0ZvRCf88qljzmkZxf7K&X-Amz-Signature=8e0d0a67bc025f94b89e980b353e210eb71265a5d277365e3267419bfc0f858e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BC5BWR7%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBI5%2B%2B4ygT5bCtkgpifn3diJrYGv939hyxf6s06axmV9AiAr5oLiGSokWCEndBJ1ig2BbWwSmUgrx5RuFS%2BqZ0vkbSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEbPrknngoAf0imp5KtwDWLyF4uDaMNhzSr932V2HqHheZ0J5vVmfk4INWtAy2kxM7SN1fEP%2BeuAPtmuRGHNeY2zOmwhrPAiKj%2B3IEHvAXrv5NUvfvwGDynq3TT%2FY%2Bw%2BZXzpZ4C7f2FHPBrR%2FJMHexf9YtCPdrfBqHoMZjmfCZMVS2rnmezUApRgvPGHLSFeUVujqhEht56oeCT1TcWuEXVBgfTdJanALP6do401nv23B23uxe6RMZM8npGHL46JnVysHZvN%2FL3tVuvynl5M7wOqPH%2F%2FiZIL%2BxtuW%2Bb99FlaREjsBxhDru8ttG9xoOkHtWpMKzuafUyfE%2Bpxv9WPFFkCHqx0FMIt3oGOIQujmPMA6%2BBUZSWXTf3t%2BV6W47m%2FeKJ5tSIoah02sdthjzixLxJF2j7kfjzVdXFt8jA4acHHVNj2wfsRL6Yj%2FBXHtGNQ0nzgiSbKbHZ8un%2FetQweiZGfPmaxYVkwUQfPdsx3Ew33R9fRDtiPr2sZyRIVH%2F%2BcenoTNm%2FkDR2cEzWl3bcHEHjscYf3WZQIvyCrBPAyuDL86XWigthcwQx7C7SUgDQUl6fhXVwd8p15N2NoIDjSxII2qQvUyoCak13YXt1fu9bNrv46RZL%2FFAi5To2Z0cKgXWpr%2F672pafWeORQwkaPuvwY6pgGAxtH%2BymeFSE5gyr6zUYkLBdrOkHnpABrQn59ighNgvUax072j%2Bic2%2FfpJaVkRxI2dr81sXG7v9bb8JIpxJZUm%2BEpac8ulO%2BQjHqJBPLunUctYUW5H88G26bLUWcF1wpsLU5qi%2B9HCeqOgbOs1%2BS0w6MCHwNlY8PIZzbnNRbzDHSObtodUFzukmDADlkuR66hTcKb7Ttiox0ZvRCf88qljzmkZxf7K&X-Amz-Signature=292c69e6cd56e9ead9b2b4232ef49e45e702d63244542d0cf5a7bf92e324344c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
