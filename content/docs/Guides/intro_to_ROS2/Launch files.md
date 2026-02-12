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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3HAZHTD%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIGKBdWnddAjN4jXAIXawr95jcBGDt1AwLLn0SBRsp%2B6ZAiEAp3k0OmdiFKS3ETl1HPwawFsLJuyjbeQ21PFXUUPTyzsqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCdIM2VHCypkN9OCSrcA04wXRevqhVkNI0DbklnTNTkx8fX%2F85NzSdNQEGfxKArh%2BglPLYDMNvaVgrQAiK%2B7UuiwmEjBuHFxy8pyxbhIa68qp1jrnXfwhskJ%2BWJv04hNlEhUvOFXXIGZlt4A025Cj4xAjcelG4KFwJLun7naiGC42raDdok2xj4khFulmlVwrze38gQwNzRrL%2FMabIiw5mNTAMS9S7GYFUQZKOk%2FpLJqGlqJm2bzGVeGzD77fdZGVgPMZn8NS1fDWlizRFnzPCIqDlPr5Ccm%2BGdRLNZniMHtE%2FtkUb7P00cKqVcBOLY64sGoI%2BTsyITTS2nvkXOdG4oHCcMC2txS5CgrLiAHWA65Cr2yraBc%2Fvu%2FPJCufl%2BHERGWMMvWt6pFMk6tYNjWvh3TlHMVpEAUsgoqc6VMJqdIRrttLXEQGXnwv3CPGbSL%2BUDjOJxL0OflMai5zIupFVbvLgdpCYsmXzggxjyPze1K960W8ke8WrzDchwpmm1VjWcbVkFNHO%2BbJbi22gsFXlaqe%2B%2FS047wdApsCjjTJbjULZiff%2Bw8LkZSEyI5uU9AOJlEkvnUnWu31GGL9BkkHPJjux4R4XpYVWts4ClGJWnwskymL%2FWxkhvTAY90KRGPgkQviPvR%2FrCmNNoMIDMtMwGOqUBdwyp%2FlV2xvB0KDVxeRescRLacZkF8PuUWsTs2SJ7toG4OxcYHreHkmqx1jRU3%2Bzp1Efzrvy773aC8o%2FUAef4aAxTbxRFRYoIdZb3vJxi1lmIw2roBpUK21WL8e6X%2Bo09jIbh%2F1jZlR4HFvKNFHjyh8qWszdFgGQzZPk8XohxcgLm4%2BPXosViySgV7hRB%2BALZPtq4UxgxusY69V2RSkiLHSTxKEio&X-Amz-Signature=3ce1cc50eccc87e9622c76162fc801c7fd2075440ae781e42db290b968a104e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3HAZHTD%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIGKBdWnddAjN4jXAIXawr95jcBGDt1AwLLn0SBRsp%2B6ZAiEAp3k0OmdiFKS3ETl1HPwawFsLJuyjbeQ21PFXUUPTyzsqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCdIM2VHCypkN9OCSrcA04wXRevqhVkNI0DbklnTNTkx8fX%2F85NzSdNQEGfxKArh%2BglPLYDMNvaVgrQAiK%2B7UuiwmEjBuHFxy8pyxbhIa68qp1jrnXfwhskJ%2BWJv04hNlEhUvOFXXIGZlt4A025Cj4xAjcelG4KFwJLun7naiGC42raDdok2xj4khFulmlVwrze38gQwNzRrL%2FMabIiw5mNTAMS9S7GYFUQZKOk%2FpLJqGlqJm2bzGVeGzD77fdZGVgPMZn8NS1fDWlizRFnzPCIqDlPr5Ccm%2BGdRLNZniMHtE%2FtkUb7P00cKqVcBOLY64sGoI%2BTsyITTS2nvkXOdG4oHCcMC2txS5CgrLiAHWA65Cr2yraBc%2Fvu%2FPJCufl%2BHERGWMMvWt6pFMk6tYNjWvh3TlHMVpEAUsgoqc6VMJqdIRrttLXEQGXnwv3CPGbSL%2BUDjOJxL0OflMai5zIupFVbvLgdpCYsmXzggxjyPze1K960W8ke8WrzDchwpmm1VjWcbVkFNHO%2BbJbi22gsFXlaqe%2B%2FS047wdApsCjjTJbjULZiff%2Bw8LkZSEyI5uU9AOJlEkvnUnWu31GGL9BkkHPJjux4R4XpYVWts4ClGJWnwskymL%2FWxkhvTAY90KRGPgkQviPvR%2FrCmNNoMIDMtMwGOqUBdwyp%2FlV2xvB0KDVxeRescRLacZkF8PuUWsTs2SJ7toG4OxcYHreHkmqx1jRU3%2Bzp1Efzrvy773aC8o%2FUAef4aAxTbxRFRYoIdZb3vJxi1lmIw2roBpUK21WL8e6X%2Bo09jIbh%2F1jZlR4HFvKNFHjyh8qWszdFgGQzZPk8XohxcgLm4%2BPXosViySgV7hRB%2BALZPtq4UxgxusY69V2RSkiLHSTxKEio&X-Amz-Signature=2f0f569dc1390732c3d60abc180ad495b9fb3d4ab89b741ca84b0800b526775c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3HAZHTD%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIGKBdWnddAjN4jXAIXawr95jcBGDt1AwLLn0SBRsp%2B6ZAiEAp3k0OmdiFKS3ETl1HPwawFsLJuyjbeQ21PFXUUPTyzsqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCdIM2VHCypkN9OCSrcA04wXRevqhVkNI0DbklnTNTkx8fX%2F85NzSdNQEGfxKArh%2BglPLYDMNvaVgrQAiK%2B7UuiwmEjBuHFxy8pyxbhIa68qp1jrnXfwhskJ%2BWJv04hNlEhUvOFXXIGZlt4A025Cj4xAjcelG4KFwJLun7naiGC42raDdok2xj4khFulmlVwrze38gQwNzRrL%2FMabIiw5mNTAMS9S7GYFUQZKOk%2FpLJqGlqJm2bzGVeGzD77fdZGVgPMZn8NS1fDWlizRFnzPCIqDlPr5Ccm%2BGdRLNZniMHtE%2FtkUb7P00cKqVcBOLY64sGoI%2BTsyITTS2nvkXOdG4oHCcMC2txS5CgrLiAHWA65Cr2yraBc%2Fvu%2FPJCufl%2BHERGWMMvWt6pFMk6tYNjWvh3TlHMVpEAUsgoqc6VMJqdIRrttLXEQGXnwv3CPGbSL%2BUDjOJxL0OflMai5zIupFVbvLgdpCYsmXzggxjyPze1K960W8ke8WrzDchwpmm1VjWcbVkFNHO%2BbJbi22gsFXlaqe%2B%2FS047wdApsCjjTJbjULZiff%2Bw8LkZSEyI5uU9AOJlEkvnUnWu31GGL9BkkHPJjux4R4XpYVWts4ClGJWnwskymL%2FWxkhvTAY90KRGPgkQviPvR%2FrCmNNoMIDMtMwGOqUBdwyp%2FlV2xvB0KDVxeRescRLacZkF8PuUWsTs2SJ7toG4OxcYHreHkmqx1jRU3%2Bzp1Efzrvy773aC8o%2FUAef4aAxTbxRFRYoIdZb3vJxi1lmIw2roBpUK21WL8e6X%2Bo09jIbh%2F1jZlR4HFvKNFHjyh8qWszdFgGQzZPk8XohxcgLm4%2BPXosViySgV7hRB%2BALZPtq4UxgxusY69V2RSkiLHSTxKEio&X-Amz-Signature=ecbce53a83f51a76ead5fbc8bfe3f4474bdc490ed3b2932d68426aee69937f0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
