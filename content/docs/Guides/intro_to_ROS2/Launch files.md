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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF6CGJ5W%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQClKsPN6Um%2B%2BbIooz10UNbHAK3nMYECL8HfxbiaOYZmmAIhAL3W81Bk%2F7u4nuoWeRaZEx24AoTz7CobWH8%2B%2F7e9ixLQKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeIl4OVkag%2B6mL%2BSIq3AMrGp45ErlxqOGcZA7NBAuxtj9dUfncwXSIy6apoFM%2FFGLYw2DCI77IX%2FK3gZciPhy7olPquYzshn8HbvnA%2F%2Bet%2FzhjNd1PUjDJ9nyDpHFF4td9Gosc%2FNCJkNLcJZckl3N6icCNTxApShuC%2F%2FOUR8gC66Xex6lpuw3cISyBbitQ%2F6ubsHNxzTJcP4LWivIGGHtt5tUE%2FaKxWbjh3e5B8%2BGknv4WfdKDCTQqRDFgx5uSi%2B4wXfBc%2FmIpBUwTEAL6LA2Eqvxs2NfUd0rj6%2B9JTfbNFg%2B8WilpjeMOX04KukfNOfgROm%2FX8y8loPsLUCoJieGOlfwEjQliQPNUiVPUD3EZPP6w3VgwcXHKWXY0Tf9LRURjcm8sCnxJ7LR4Y0su0S%2BzWIN21725VhDLSgLAy8E%2Bxy4GJfcrRxzV6FyNzRsUW0LZ98MpWGCBYZD3%2B3ihS5atv%2Fn3iNyyHKvct8BVod19Y5uYioy%2BM19p4lhr49if%2BVRgLf9%2FBHtbmxKuWldPxlOnTiBEVNFTajBiN22Y%2FcTa7cPb%2FG4gTFNIx80TuWOZfyJnx9x%2FCqhqtLyrjvFK1yEufiAAsG0AB7IasiK3x%2FeqRE40DI1SgJOWCNc7UEGYaVc4wcEzX5Q8uXFKvDCe6dS9BjqkAWhKZoL5VFybWt1S4F42B9380j80aiRZgNI8r1gC87TIFz8FxlLgY2NNUv0cTyoK7yed%2Fk21p5Uby06qLaBm24RVyVsYOZS0zsnZvPh45zBEecviOPSGzYABUgwWiaUjiYRZklC4MiQW%2FUDrWwAOhQs9Q%2BHk4H9rhcH7QNA2r7HcQoLGfCbCO254FkRqxYx08ORBvGmADXh9DgbOpWXdFG1Eyhtk&X-Amz-Signature=3fe6318b1c1872100b19e409756484062ea80407266c8fd9b5fff99aef4f0c4d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF6CGJ5W%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQClKsPN6Um%2B%2BbIooz10UNbHAK3nMYECL8HfxbiaOYZmmAIhAL3W81Bk%2F7u4nuoWeRaZEx24AoTz7CobWH8%2B%2F7e9ixLQKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeIl4OVkag%2B6mL%2BSIq3AMrGp45ErlxqOGcZA7NBAuxtj9dUfncwXSIy6apoFM%2FFGLYw2DCI77IX%2FK3gZciPhy7olPquYzshn8HbvnA%2F%2Bet%2FzhjNd1PUjDJ9nyDpHFF4td9Gosc%2FNCJkNLcJZckl3N6icCNTxApShuC%2F%2FOUR8gC66Xex6lpuw3cISyBbitQ%2F6ubsHNxzTJcP4LWivIGGHtt5tUE%2FaKxWbjh3e5B8%2BGknv4WfdKDCTQqRDFgx5uSi%2B4wXfBc%2FmIpBUwTEAL6LA2Eqvxs2NfUd0rj6%2B9JTfbNFg%2B8WilpjeMOX04KukfNOfgROm%2FX8y8loPsLUCoJieGOlfwEjQliQPNUiVPUD3EZPP6w3VgwcXHKWXY0Tf9LRURjcm8sCnxJ7LR4Y0su0S%2BzWIN21725VhDLSgLAy8E%2Bxy4GJfcrRxzV6FyNzRsUW0LZ98MpWGCBYZD3%2B3ihS5atv%2Fn3iNyyHKvct8BVod19Y5uYioy%2BM19p4lhr49if%2BVRgLf9%2FBHtbmxKuWldPxlOnTiBEVNFTajBiN22Y%2FcTa7cPb%2FG4gTFNIx80TuWOZfyJnx9x%2FCqhqtLyrjvFK1yEufiAAsG0AB7IasiK3x%2FeqRE40DI1SgJOWCNc7UEGYaVc4wcEzX5Q8uXFKvDCe6dS9BjqkAWhKZoL5VFybWt1S4F42B9380j80aiRZgNI8r1gC87TIFz8FxlLgY2NNUv0cTyoK7yed%2Fk21p5Uby06qLaBm24RVyVsYOZS0zsnZvPh45zBEecviOPSGzYABUgwWiaUjiYRZklC4MiQW%2FUDrWwAOhQs9Q%2BHk4H9rhcH7QNA2r7HcQoLGfCbCO254FkRqxYx08ORBvGmADXh9DgbOpWXdFG1Eyhtk&X-Amz-Signature=c8cc0327230d1316ab4875656bf81e0a6acbc0bcc32224cb6400fc295d5a8e88&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF6CGJ5W%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQClKsPN6Um%2B%2BbIooz10UNbHAK3nMYECL8HfxbiaOYZmmAIhAL3W81Bk%2F7u4nuoWeRaZEx24AoTz7CobWH8%2B%2F7e9ixLQKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeIl4OVkag%2B6mL%2BSIq3AMrGp45ErlxqOGcZA7NBAuxtj9dUfncwXSIy6apoFM%2FFGLYw2DCI77IX%2FK3gZciPhy7olPquYzshn8HbvnA%2F%2Bet%2FzhjNd1PUjDJ9nyDpHFF4td9Gosc%2FNCJkNLcJZckl3N6icCNTxApShuC%2F%2FOUR8gC66Xex6lpuw3cISyBbitQ%2F6ubsHNxzTJcP4LWivIGGHtt5tUE%2FaKxWbjh3e5B8%2BGknv4WfdKDCTQqRDFgx5uSi%2B4wXfBc%2FmIpBUwTEAL6LA2Eqvxs2NfUd0rj6%2B9JTfbNFg%2B8WilpjeMOX04KukfNOfgROm%2FX8y8loPsLUCoJieGOlfwEjQliQPNUiVPUD3EZPP6w3VgwcXHKWXY0Tf9LRURjcm8sCnxJ7LR4Y0su0S%2BzWIN21725VhDLSgLAy8E%2Bxy4GJfcrRxzV6FyNzRsUW0LZ98MpWGCBYZD3%2B3ihS5atv%2Fn3iNyyHKvct8BVod19Y5uYioy%2BM19p4lhr49if%2BVRgLf9%2FBHtbmxKuWldPxlOnTiBEVNFTajBiN22Y%2FcTa7cPb%2FG4gTFNIx80TuWOZfyJnx9x%2FCqhqtLyrjvFK1yEufiAAsG0AB7IasiK3x%2FeqRE40DI1SgJOWCNc7UEGYaVc4wcEzX5Q8uXFKvDCe6dS9BjqkAWhKZoL5VFybWt1S4F42B9380j80aiRZgNI8r1gC87TIFz8FxlLgY2NNUv0cTyoK7yed%2Fk21p5Uby06qLaBm24RVyVsYOZS0zsnZvPh45zBEecviOPSGzYABUgwWiaUjiYRZklC4MiQW%2FUDrWwAOhQs9Q%2BHk4H9rhcH7QNA2r7HcQoLGfCbCO254FkRqxYx08ORBvGmADXh9DgbOpWXdFG1Eyhtk&X-Amz-Signature=376c7430f79a4e8b7189a40c64e9c4041c1be8fb9bed18460bc47db93a03d4d8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
