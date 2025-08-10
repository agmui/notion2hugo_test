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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZEM2CUM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHarPp%2FNl2cSnXEfLzI5OVdZ4KioVSnjwFxCk07vDNEgIhAOgFFW20Ez0p84s0jVTT5a0dmv4bx1ym9rG%2B1HnXhey8KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEj3o%2FJs99WXNKAWUq3ANEqoJe%2B0ivRxHqTLw30nQlJy538VnnKXjPey968FuDJOf6mtBxbvCR1Wx0MFP1%2BR%2FpZrUCMQSFGBCChc5rUQKqtvS0HlRgk98gDh%2FSjkkRQgzd2Mfmed0ZgGaFHZp6ArztbtO%2FMQfvcJEA647uIk55Q3azNdo%2FvNXZ3R92cZaKhT%2F4cdGpJMd6wvlq2ufibGOHYssSgFEKBw2bA6iSSmROiMu8mvGaYWLWWpfq65WFDtTyvsgkJg5EWSXHGi5sThQKO6245dHQuQ3h3qrY%2FFXuk8r44vkXjLc7N1yqEIlTtXVSrbwID7kceeZUcah7FRxm%2F0whRr8DynJsUINNuD4i9Q%2FU5lg9W%2B4BAcIRNlwQuUOZrjUygdPfkYqdcvKDyc7oGUWl%2FpTB7YRGVhojntw74TikGiix3qP0qe5KwkjKB652jzvjZkSKS%2BzEfHPE6lpc7SCR5iRUaR4%2Fo25vtGAu0lFMn%2FWKi%2FYs9weOOs%2BPHyrIQWIHVE1x3aorC2Ydw4Afnjm%2FM0Al%2FSXWDPvD75iintSwheoiiOcP4%2Fx%2BXZoJnCvuPXIe68LNiu7aHwzDy23to21B2vtrZRp5UhSRjCVbetvEa%2BmwXy%2FQYo5S9myIymTG1Pe5%2BSHwvxzukjCc7%2BHEBjqkAd5F3g0HpEk3i5Y4h%2FsZwmUjIHv1Mh3dSEMy%2BmjOxgxGGYKamOKoxWPFCTnAjnZQ91IITMtUj11TyOAtWmrxYAth4ZMKzTW86iD5ml0sSSzbgGBGB3t%2FP%2FAuIywaHCp3CxXWdK3WrQPy4dabEv8wB5GmAvEGmWCvMALuFXu7lnBVO%2FeL1AQB1eby7GdkgMuxaWIsJ2G%2Br9SfoR11VgSU2j2EWVrN&X-Amz-Signature=0989f4c2877c0f944c1cd8bad32cd3026ce3908ec35237ff4f91e44ac4c6e412&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZEM2CUM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHarPp%2FNl2cSnXEfLzI5OVdZ4KioVSnjwFxCk07vDNEgIhAOgFFW20Ez0p84s0jVTT5a0dmv4bx1ym9rG%2B1HnXhey8KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEj3o%2FJs99WXNKAWUq3ANEqoJe%2B0ivRxHqTLw30nQlJy538VnnKXjPey968FuDJOf6mtBxbvCR1Wx0MFP1%2BR%2FpZrUCMQSFGBCChc5rUQKqtvS0HlRgk98gDh%2FSjkkRQgzd2Mfmed0ZgGaFHZp6ArztbtO%2FMQfvcJEA647uIk55Q3azNdo%2FvNXZ3R92cZaKhT%2F4cdGpJMd6wvlq2ufibGOHYssSgFEKBw2bA6iSSmROiMu8mvGaYWLWWpfq65WFDtTyvsgkJg5EWSXHGi5sThQKO6245dHQuQ3h3qrY%2FFXuk8r44vkXjLc7N1yqEIlTtXVSrbwID7kceeZUcah7FRxm%2F0whRr8DynJsUINNuD4i9Q%2FU5lg9W%2B4BAcIRNlwQuUOZrjUygdPfkYqdcvKDyc7oGUWl%2FpTB7YRGVhojntw74TikGiix3qP0qe5KwkjKB652jzvjZkSKS%2BzEfHPE6lpc7SCR5iRUaR4%2Fo25vtGAu0lFMn%2FWKi%2FYs9weOOs%2BPHyrIQWIHVE1x3aorC2Ydw4Afnjm%2FM0Al%2FSXWDPvD75iintSwheoiiOcP4%2Fx%2BXZoJnCvuPXIe68LNiu7aHwzDy23to21B2vtrZRp5UhSRjCVbetvEa%2BmwXy%2FQYo5S9myIymTG1Pe5%2BSHwvxzukjCc7%2BHEBjqkAd5F3g0HpEk3i5Y4h%2FsZwmUjIHv1Mh3dSEMy%2BmjOxgxGGYKamOKoxWPFCTnAjnZQ91IITMtUj11TyOAtWmrxYAth4ZMKzTW86iD5ml0sSSzbgGBGB3t%2FP%2FAuIywaHCp3CxXWdK3WrQPy4dabEv8wB5GmAvEGmWCvMALuFXu7lnBVO%2FeL1AQB1eby7GdkgMuxaWIsJ2G%2Br9SfoR11VgSU2j2EWVrN&X-Amz-Signature=7d20ca86bdf6f5d47e42a9d19dc3aba8a70d600a5524d496418c1e765c2e4cfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZEM2CUM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHarPp%2FNl2cSnXEfLzI5OVdZ4KioVSnjwFxCk07vDNEgIhAOgFFW20Ez0p84s0jVTT5a0dmv4bx1ym9rG%2B1HnXhey8KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEj3o%2FJs99WXNKAWUq3ANEqoJe%2B0ivRxHqTLw30nQlJy538VnnKXjPey968FuDJOf6mtBxbvCR1Wx0MFP1%2BR%2FpZrUCMQSFGBCChc5rUQKqtvS0HlRgk98gDh%2FSjkkRQgzd2Mfmed0ZgGaFHZp6ArztbtO%2FMQfvcJEA647uIk55Q3azNdo%2FvNXZ3R92cZaKhT%2F4cdGpJMd6wvlq2ufibGOHYssSgFEKBw2bA6iSSmROiMu8mvGaYWLWWpfq65WFDtTyvsgkJg5EWSXHGi5sThQKO6245dHQuQ3h3qrY%2FFXuk8r44vkXjLc7N1yqEIlTtXVSrbwID7kceeZUcah7FRxm%2F0whRr8DynJsUINNuD4i9Q%2FU5lg9W%2B4BAcIRNlwQuUOZrjUygdPfkYqdcvKDyc7oGUWl%2FpTB7YRGVhojntw74TikGiix3qP0qe5KwkjKB652jzvjZkSKS%2BzEfHPE6lpc7SCR5iRUaR4%2Fo25vtGAu0lFMn%2FWKi%2FYs9weOOs%2BPHyrIQWIHVE1x3aorC2Ydw4Afnjm%2FM0Al%2FSXWDPvD75iintSwheoiiOcP4%2Fx%2BXZoJnCvuPXIe68LNiu7aHwzDy23to21B2vtrZRp5UhSRjCVbetvEa%2BmwXy%2FQYo5S9myIymTG1Pe5%2BSHwvxzukjCc7%2BHEBjqkAd5F3g0HpEk3i5Y4h%2FsZwmUjIHv1Mh3dSEMy%2BmjOxgxGGYKamOKoxWPFCTnAjnZQ91IITMtUj11TyOAtWmrxYAth4ZMKzTW86iD5ml0sSSzbgGBGB3t%2FP%2FAuIywaHCp3CxXWdK3WrQPy4dabEv8wB5GmAvEGmWCvMALuFXu7lnBVO%2FeL1AQB1eby7GdkgMuxaWIsJ2G%2Br9SfoR11VgSU2j2EWVrN&X-Amz-Signature=a7d596f5365f11916c61188084dbc9c8380549cc5449ea262496ecb185ca70f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
