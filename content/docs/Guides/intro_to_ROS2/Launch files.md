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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7L6VT37%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIAq2Pkh2LVDgOJfXSS6psAvbVLulBhOmLXIQNKN64lVvAiB%2B18%2FxhQF5V%2F4aSM2JmECa2wngsUdU6Wxr%2FkqgvsD7sir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMCphIzOKB5j6zajnIKtwDnzljg1vfS6oMlIP7rUPKG3oiSg4nzwcxt8lgbRgW6ae4NIURRxjPnmqiSnzLADdf%2FjphJHfepdx%2FgpLi%2B64sxBGcwoxRgwLtLll76HsKl0zOMReObdg0nM94hfJErypDfbFHahd8hz%2BUsT%2Bybuf2rPdqDO9fqHkK4NPN7Uwr6a6Qb2ILmq%2Bxx4m3bkREVTt0kguuoJh%2FTFC%2BWO6zm%2BYz9euYK91YdiG%2B7%2FJgAcwfM9B6SMvs3Y2YQmta5WzVfODbdbX%2F1YIJoc1%2FHsE0inUvLRoEsPVvpa9N2sjkvMe4e8ujk%2BS9SI7WbumwyQsxXUjDkxHNnMvDa7%2FaKhQt4%2F2DZszKCQvEN82RJZ7OymUpRNRLTOGnU0HC97BfBVedjvXT11TplCoiCpnB1Kt0LEBY%2BwGUW4tQn9bB2Lm5xYARzdd57unVYSDowdvTkoQYkGXHWyLsPQViX2ScA4yXFT%2F1%2FLUFO5lCqdZKRsDHD4eo9LVNmLuzxmbx6JVBXzXUsXy0VjMqVdUniKoXHCq%2B5wgBAzqCKPP03JCMoBZHhUDqtdnBPD8cPAerBJL3WFRMaF1glaE7nYjZJSfIwJMuSsPFuMBdiB3nO7HcodB%2BcpuLeXQ7nqo6%2F8DiiQ1yoPEw3e%2FVywY6pgHL12sxEpHzEC3URRu3GPcC1BNlThFjTim10a%2FDN3akWe5spyGKidDm%2FVKXgz%2FFN69CIE2Zc8XnH35Icci%2Fs%2FjmyZbEHvWeFGBgg27UkaNC2AudtLz8l2MUslM56qrty%2BTjPtdFRVTjyxu8z5WJB4szOkdWPPwE2PHfFE%2BuYna43LmqEE0hjSZ2uu8gjcUHR4BHycgZ6YFIg%2BtP2qUg4POKtpUvUbg3&X-Amz-Signature=5deccafa1e43b6d8626136114fdeeb989bdb2a93f4fdefdae92370849ed53380&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7L6VT37%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIAq2Pkh2LVDgOJfXSS6psAvbVLulBhOmLXIQNKN64lVvAiB%2B18%2FxhQF5V%2F4aSM2JmECa2wngsUdU6Wxr%2FkqgvsD7sir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMCphIzOKB5j6zajnIKtwDnzljg1vfS6oMlIP7rUPKG3oiSg4nzwcxt8lgbRgW6ae4NIURRxjPnmqiSnzLADdf%2FjphJHfepdx%2FgpLi%2B64sxBGcwoxRgwLtLll76HsKl0zOMReObdg0nM94hfJErypDfbFHahd8hz%2BUsT%2Bybuf2rPdqDO9fqHkK4NPN7Uwr6a6Qb2ILmq%2Bxx4m3bkREVTt0kguuoJh%2FTFC%2BWO6zm%2BYz9euYK91YdiG%2B7%2FJgAcwfM9B6SMvs3Y2YQmta5WzVfODbdbX%2F1YIJoc1%2FHsE0inUvLRoEsPVvpa9N2sjkvMe4e8ujk%2BS9SI7WbumwyQsxXUjDkxHNnMvDa7%2FaKhQt4%2F2DZszKCQvEN82RJZ7OymUpRNRLTOGnU0HC97BfBVedjvXT11TplCoiCpnB1Kt0LEBY%2BwGUW4tQn9bB2Lm5xYARzdd57unVYSDowdvTkoQYkGXHWyLsPQViX2ScA4yXFT%2F1%2FLUFO5lCqdZKRsDHD4eo9LVNmLuzxmbx6JVBXzXUsXy0VjMqVdUniKoXHCq%2B5wgBAzqCKPP03JCMoBZHhUDqtdnBPD8cPAerBJL3WFRMaF1glaE7nYjZJSfIwJMuSsPFuMBdiB3nO7HcodB%2BcpuLeXQ7nqo6%2F8DiiQ1yoPEw3e%2FVywY6pgHL12sxEpHzEC3URRu3GPcC1BNlThFjTim10a%2FDN3akWe5spyGKidDm%2FVKXgz%2FFN69CIE2Zc8XnH35Icci%2Fs%2FjmyZbEHvWeFGBgg27UkaNC2AudtLz8l2MUslM56qrty%2BTjPtdFRVTjyxu8z5WJB4szOkdWPPwE2PHfFE%2BuYna43LmqEE0hjSZ2uu8gjcUHR4BHycgZ6YFIg%2BtP2qUg4POKtpUvUbg3&X-Amz-Signature=f36ddf0e7daef6611a767416be5e8348515bae4df196a1f20564cab45452ad05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7L6VT37%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIAq2Pkh2LVDgOJfXSS6psAvbVLulBhOmLXIQNKN64lVvAiB%2B18%2FxhQF5V%2F4aSM2JmECa2wngsUdU6Wxr%2FkqgvsD7sir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMCphIzOKB5j6zajnIKtwDnzljg1vfS6oMlIP7rUPKG3oiSg4nzwcxt8lgbRgW6ae4NIURRxjPnmqiSnzLADdf%2FjphJHfepdx%2FgpLi%2B64sxBGcwoxRgwLtLll76HsKl0zOMReObdg0nM94hfJErypDfbFHahd8hz%2BUsT%2Bybuf2rPdqDO9fqHkK4NPN7Uwr6a6Qb2ILmq%2Bxx4m3bkREVTt0kguuoJh%2FTFC%2BWO6zm%2BYz9euYK91YdiG%2B7%2FJgAcwfM9B6SMvs3Y2YQmta5WzVfODbdbX%2F1YIJoc1%2FHsE0inUvLRoEsPVvpa9N2sjkvMe4e8ujk%2BS9SI7WbumwyQsxXUjDkxHNnMvDa7%2FaKhQt4%2F2DZszKCQvEN82RJZ7OymUpRNRLTOGnU0HC97BfBVedjvXT11TplCoiCpnB1Kt0LEBY%2BwGUW4tQn9bB2Lm5xYARzdd57unVYSDowdvTkoQYkGXHWyLsPQViX2ScA4yXFT%2F1%2FLUFO5lCqdZKRsDHD4eo9LVNmLuzxmbx6JVBXzXUsXy0VjMqVdUniKoXHCq%2B5wgBAzqCKPP03JCMoBZHhUDqtdnBPD8cPAerBJL3WFRMaF1glaE7nYjZJSfIwJMuSsPFuMBdiB3nO7HcodB%2BcpuLeXQ7nqo6%2F8DiiQ1yoPEw3e%2FVywY6pgHL12sxEpHzEC3URRu3GPcC1BNlThFjTim10a%2FDN3akWe5spyGKidDm%2FVKXgz%2FFN69CIE2Zc8XnH35Icci%2Fs%2FjmyZbEHvWeFGBgg27UkaNC2AudtLz8l2MUslM56qrty%2BTjPtdFRVTjyxu8z5WJB4szOkdWPPwE2PHfFE%2BuYna43LmqEE0hjSZ2uu8gjcUHR4BHycgZ6YFIg%2BtP2qUg4POKtpUvUbg3&X-Amz-Signature=c780948830d8443c8da8892e23885b07941dd357ecb229e4546478bc077901c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
