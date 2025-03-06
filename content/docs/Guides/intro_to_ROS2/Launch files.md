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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466464SZKJ3%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCACFxWTkvDoxIyMVwUhoecg2I0E%2FJRMhZCbgN6sxM%2B%2FAIhAKOcLK08NqGxPdt2iMimWF6NiYQ8d6WfCrOcXyIOd5idKv8DCDEQABoMNjM3NDIzMTgzODA1IgxJvkTnFSAU316QVMsq3AP%2FLCvZOia6F7UMPhYK0OO2ysjQSi3Eae4z9qB0VCWX2kVonkt2btVSsD%2FRh1vso2FzMlCpx8ukkSyl82cbatqfnkuCSVcZsmBWXHN%2F999ssTvhMUwfrI7P8jdLJt4pPGo%2FaZaYBLWmY6W3SiA2oyQ8a4CY%2Bq%2Bwp4xLfz1MWVkY1uiMDM%2FALseoDsVWm8PALxUp7fZLBr68F%2F5O6%2Fl%2BSGPDplYg0FCIwvA6xiPylCIjT%2FIVq29Pqqie4KNKSB9KTFU69zeIYw7kxgi1VE%2FlCNNTzGy0rFs4ivKC0EKZ4y841XD9pGsigNkNV15mpGR%2F5wJIPl2E8SD2bra675N%2BOzL%2BeCpUi49JZkYDw4prg4tlFXNXNAqDvCT%2FcEtBb47QMKoLIQ2LqL0Sr1w6UBhfnEPzRyzYhxHk2TJy1Ii%2BNQOTMoHFVTA6L5RnHmVNzE%2Bi4auLcHKcWPNTrLDZck3PDdPKjLmyoFWQlNTcuDud%2BBML%2F%2FYs1asOrvTIVGMfZBR1osRqN2bDqdmC0OOBkaoTgzswqjcp9zUb4WsnmHOgnxbLnonM9%2BpTxdsMcQVhi%2F3q54YJR7dGXsnh7WFQFqexgjC5N1D%2Feo%2FIqGaO1gJr8pqYsfrzLILLJAcsJAEnlTCUj6e%2BBjqkASVZg2u4S7nlj4HzxJbGVvhrFLEuJSKW7ZoCmjm1IRgS2taEnvAvWZcy48%2FBEt2mSXWfMkmm49dK44uvme9C1CLnjRppUSKbGPCgb8kPZhtNaHHoa595Mvsz5D7msvyGRt%2BGBeSWaVH%2FPg5avQSN2U5Y%2BIgrRL%2FUe8HnniKklfl5uA3XDF1jdt1IgLdJosfttbElhy1JV59trVC7HU2gG47pw0Yk&X-Amz-Signature=9cff77ba1def45bf5214b39963fd1d09253a248dea149db38f2add34695cecc4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466464SZKJ3%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCACFxWTkvDoxIyMVwUhoecg2I0E%2FJRMhZCbgN6sxM%2B%2FAIhAKOcLK08NqGxPdt2iMimWF6NiYQ8d6WfCrOcXyIOd5idKv8DCDEQABoMNjM3NDIzMTgzODA1IgxJvkTnFSAU316QVMsq3AP%2FLCvZOia6F7UMPhYK0OO2ysjQSi3Eae4z9qB0VCWX2kVonkt2btVSsD%2FRh1vso2FzMlCpx8ukkSyl82cbatqfnkuCSVcZsmBWXHN%2F999ssTvhMUwfrI7P8jdLJt4pPGo%2FaZaYBLWmY6W3SiA2oyQ8a4CY%2Bq%2Bwp4xLfz1MWVkY1uiMDM%2FALseoDsVWm8PALxUp7fZLBr68F%2F5O6%2Fl%2BSGPDplYg0FCIwvA6xiPylCIjT%2FIVq29Pqqie4KNKSB9KTFU69zeIYw7kxgi1VE%2FlCNNTzGy0rFs4ivKC0EKZ4y841XD9pGsigNkNV15mpGR%2F5wJIPl2E8SD2bra675N%2BOzL%2BeCpUi49JZkYDw4prg4tlFXNXNAqDvCT%2FcEtBb47QMKoLIQ2LqL0Sr1w6UBhfnEPzRyzYhxHk2TJy1Ii%2BNQOTMoHFVTA6L5RnHmVNzE%2Bi4auLcHKcWPNTrLDZck3PDdPKjLmyoFWQlNTcuDud%2BBML%2F%2FYs1asOrvTIVGMfZBR1osRqN2bDqdmC0OOBkaoTgzswqjcp9zUb4WsnmHOgnxbLnonM9%2BpTxdsMcQVhi%2F3q54YJR7dGXsnh7WFQFqexgjC5N1D%2Feo%2FIqGaO1gJr8pqYsfrzLILLJAcsJAEnlTCUj6e%2BBjqkASVZg2u4S7nlj4HzxJbGVvhrFLEuJSKW7ZoCmjm1IRgS2taEnvAvWZcy48%2FBEt2mSXWfMkmm49dK44uvme9C1CLnjRppUSKbGPCgb8kPZhtNaHHoa595Mvsz5D7msvyGRt%2BGBeSWaVH%2FPg5avQSN2U5Y%2BIgrRL%2FUe8HnniKklfl5uA3XDF1jdt1IgLdJosfttbElhy1JV59trVC7HU2gG47pw0Yk&X-Amz-Signature=21231ffd55e6979cd6118c0691e631fececbf521f0fbc5550723c4e8d8cc470b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466464SZKJ3%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCACFxWTkvDoxIyMVwUhoecg2I0E%2FJRMhZCbgN6sxM%2B%2FAIhAKOcLK08NqGxPdt2iMimWF6NiYQ8d6WfCrOcXyIOd5idKv8DCDEQABoMNjM3NDIzMTgzODA1IgxJvkTnFSAU316QVMsq3AP%2FLCvZOia6F7UMPhYK0OO2ysjQSi3Eae4z9qB0VCWX2kVonkt2btVSsD%2FRh1vso2FzMlCpx8ukkSyl82cbatqfnkuCSVcZsmBWXHN%2F999ssTvhMUwfrI7P8jdLJt4pPGo%2FaZaYBLWmY6W3SiA2oyQ8a4CY%2Bq%2Bwp4xLfz1MWVkY1uiMDM%2FALseoDsVWm8PALxUp7fZLBr68F%2F5O6%2Fl%2BSGPDplYg0FCIwvA6xiPylCIjT%2FIVq29Pqqie4KNKSB9KTFU69zeIYw7kxgi1VE%2FlCNNTzGy0rFs4ivKC0EKZ4y841XD9pGsigNkNV15mpGR%2F5wJIPl2E8SD2bra675N%2BOzL%2BeCpUi49JZkYDw4prg4tlFXNXNAqDvCT%2FcEtBb47QMKoLIQ2LqL0Sr1w6UBhfnEPzRyzYhxHk2TJy1Ii%2BNQOTMoHFVTA6L5RnHmVNzE%2Bi4auLcHKcWPNTrLDZck3PDdPKjLmyoFWQlNTcuDud%2BBML%2F%2FYs1asOrvTIVGMfZBR1osRqN2bDqdmC0OOBkaoTgzswqjcp9zUb4WsnmHOgnxbLnonM9%2BpTxdsMcQVhi%2F3q54YJR7dGXsnh7WFQFqexgjC5N1D%2Feo%2FIqGaO1gJr8pqYsfrzLILLJAcsJAEnlTCUj6e%2BBjqkASVZg2u4S7nlj4HzxJbGVvhrFLEuJSKW7ZoCmjm1IRgS2taEnvAvWZcy48%2FBEt2mSXWfMkmm49dK44uvme9C1CLnjRppUSKbGPCgb8kPZhtNaHHoa595Mvsz5D7msvyGRt%2BGBeSWaVH%2FPg5avQSN2U5Y%2BIgrRL%2FUe8HnniKklfl5uA3XDF1jdt1IgLdJosfttbElhy1JV59trVC7HU2gG47pw0Yk&X-Amz-Signature=086176dbd62ff20f5a590f0e3387a03b6a2b61a9aec6f20389613155c7898b0a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
