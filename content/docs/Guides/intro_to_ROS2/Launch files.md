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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMSN6HJB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T141001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDbPuAhO%2FhvXWXElb%2FgWT1P63DHsHerRo96EbZu0knfwAIgfKGmAifFW4mDAxGBZYsf7RsG5pwBMRB0lJiupDut%2Fysq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNN3zLhIT5jLMcWe3ircAzi6dHacfggI9Y9mche5duWpkPGYQ9u3qEdVzzpbeo43fsPIch8Rv7mxMg5ml9bEF1FJ7Lkf57JmOquweelIdQZi4a%2BO13izlfsKj%2BHZsE%2B2fkic8QFmQmQCFo8Jw4jSj5rGwGKU0qTjmyp3okB31UOwcy2Hx58yPm935ntfeas8d4aFupO8jzI%2BUS3qfmR8Fqqs2XbDN0u2buZ%2B%2B5svGCp94DJnbmsLjxhWPOOHn7PzNHvVHd%2Fbq3xVEbOtuO%2B%2FbsnEjDPlxuUSymLATQuXxHtZNDz%2FoHESga793LY14nfyGZDlrSIEh4R4N%2FWKQWKrrrY1%2FKLgYl8%2BL8xDKSezB%2BYUJPE4CTAmkKvAqVLtXVIcoBHFzIQDM8FS8vHfHsw3%2FWwuMF7dmnjtRKgAM%2FLkQMKF%2Btl3C7sdbBrXc3WAK8gEGvYMn15VVSCBtGgczHWdns21K%2BgcA5nGR%2BChHBT6zWqLzop9tYo8lmjIlaZDFeRdSsb2tTgxlaF%2Fl7c%2Bw4x%2FOBkVzgqKAsedQ%2BGtl2czLeRwsHguRaYjNsRzw%2FOuxl8GLHnMNApS%2FEDU2U5ZChJ3aGESOWuZo9VqTmC8Vpq4qTn%2FlK4fS9h3TTJoXEqiFv%2Fy2R29P4qeEFWfTDOGMLDm%2B8EGOqUBYOiCJNOiMp0kfkef0LlBy5GMSG3OZVdvdVHO%2F8v5FaDE5oPEcjrdufCfgGUX0D2tDoBKdluBm1IRyCOsBpwLiCV%2FQ%2FAJJYmSMqgtj%2BP0UiyhS8R1yxCcRjOmcdG8RGXhIhKEebMUIKCFWtf9nmNdjuu9j9gV1%2B2VlAaXqGDTksTNsbesUK2rg7AkiI9VE140%2F08DBVNp8dCoshRGIlGbt3OEtiI8&X-Amz-Signature=7078297261266161c22181a0d38c20f68a70f5ddb174f931001602acb9b601b7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMSN6HJB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T141001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDbPuAhO%2FhvXWXElb%2FgWT1P63DHsHerRo96EbZu0knfwAIgfKGmAifFW4mDAxGBZYsf7RsG5pwBMRB0lJiupDut%2Fysq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNN3zLhIT5jLMcWe3ircAzi6dHacfggI9Y9mche5duWpkPGYQ9u3qEdVzzpbeo43fsPIch8Rv7mxMg5ml9bEF1FJ7Lkf57JmOquweelIdQZi4a%2BO13izlfsKj%2BHZsE%2B2fkic8QFmQmQCFo8Jw4jSj5rGwGKU0qTjmyp3okB31UOwcy2Hx58yPm935ntfeas8d4aFupO8jzI%2BUS3qfmR8Fqqs2XbDN0u2buZ%2B%2B5svGCp94DJnbmsLjxhWPOOHn7PzNHvVHd%2Fbq3xVEbOtuO%2B%2FbsnEjDPlxuUSymLATQuXxHtZNDz%2FoHESga793LY14nfyGZDlrSIEh4R4N%2FWKQWKrrrY1%2FKLgYl8%2BL8xDKSezB%2BYUJPE4CTAmkKvAqVLtXVIcoBHFzIQDM8FS8vHfHsw3%2FWwuMF7dmnjtRKgAM%2FLkQMKF%2Btl3C7sdbBrXc3WAK8gEGvYMn15VVSCBtGgczHWdns21K%2BgcA5nGR%2BChHBT6zWqLzop9tYo8lmjIlaZDFeRdSsb2tTgxlaF%2Fl7c%2Bw4x%2FOBkVzgqKAsedQ%2BGtl2czLeRwsHguRaYjNsRzw%2FOuxl8GLHnMNApS%2FEDU2U5ZChJ3aGESOWuZo9VqTmC8Vpq4qTn%2FlK4fS9h3TTJoXEqiFv%2Fy2R29P4qeEFWfTDOGMLDm%2B8EGOqUBYOiCJNOiMp0kfkef0LlBy5GMSG3OZVdvdVHO%2F8v5FaDE5oPEcjrdufCfgGUX0D2tDoBKdluBm1IRyCOsBpwLiCV%2FQ%2FAJJYmSMqgtj%2BP0UiyhS8R1yxCcRjOmcdG8RGXhIhKEebMUIKCFWtf9nmNdjuu9j9gV1%2B2VlAaXqGDTksTNsbesUK2rg7AkiI9VE140%2F08DBVNp8dCoshRGIlGbt3OEtiI8&X-Amz-Signature=44a1c5822b13ffc0a05de462db80cddea02e4a678d64d5dfca49289e221c5c89&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMSN6HJB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T141001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDbPuAhO%2FhvXWXElb%2FgWT1P63DHsHerRo96EbZu0knfwAIgfKGmAifFW4mDAxGBZYsf7RsG5pwBMRB0lJiupDut%2Fysq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNN3zLhIT5jLMcWe3ircAzi6dHacfggI9Y9mche5duWpkPGYQ9u3qEdVzzpbeo43fsPIch8Rv7mxMg5ml9bEF1FJ7Lkf57JmOquweelIdQZi4a%2BO13izlfsKj%2BHZsE%2B2fkic8QFmQmQCFo8Jw4jSj5rGwGKU0qTjmyp3okB31UOwcy2Hx58yPm935ntfeas8d4aFupO8jzI%2BUS3qfmR8Fqqs2XbDN0u2buZ%2B%2B5svGCp94DJnbmsLjxhWPOOHn7PzNHvVHd%2Fbq3xVEbOtuO%2B%2FbsnEjDPlxuUSymLATQuXxHtZNDz%2FoHESga793LY14nfyGZDlrSIEh4R4N%2FWKQWKrrrY1%2FKLgYl8%2BL8xDKSezB%2BYUJPE4CTAmkKvAqVLtXVIcoBHFzIQDM8FS8vHfHsw3%2FWwuMF7dmnjtRKgAM%2FLkQMKF%2Btl3C7sdbBrXc3WAK8gEGvYMn15VVSCBtGgczHWdns21K%2BgcA5nGR%2BChHBT6zWqLzop9tYo8lmjIlaZDFeRdSsb2tTgxlaF%2Fl7c%2Bw4x%2FOBkVzgqKAsedQ%2BGtl2czLeRwsHguRaYjNsRzw%2FOuxl8GLHnMNApS%2FEDU2U5ZChJ3aGESOWuZo9VqTmC8Vpq4qTn%2FlK4fS9h3TTJoXEqiFv%2Fy2R29P4qeEFWfTDOGMLDm%2B8EGOqUBYOiCJNOiMp0kfkef0LlBy5GMSG3OZVdvdVHO%2F8v5FaDE5oPEcjrdufCfgGUX0D2tDoBKdluBm1IRyCOsBpwLiCV%2FQ%2FAJJYmSMqgtj%2BP0UiyhS8R1yxCcRjOmcdG8RGXhIhKEebMUIKCFWtf9nmNdjuu9j9gV1%2B2VlAaXqGDTksTNsbesUK2rg7AkiI9VE140%2F08DBVNp8dCoshRGIlGbt3OEtiI8&X-Amz-Signature=6d6e302ca683993d7ccc1650d9ef574d051e999c2e1ee457ed517e494f38a38f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
