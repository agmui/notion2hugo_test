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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S37CUHUZ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDsP3bc3kUwDbE2MxU47H%2Fv3wBG5H5AaQvXWmMaa5lg6wIgStRDYaSrLzjbFvGIairAYY3PoL9pwJHMI5BbSqkl55oq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFjC7blkLl52UxljGircA6kT3D1w153xSRF4a4oa%2FpxwgbrpNXyrgaNqWUlKm%2Fnu42R%2FNcbPtTNkPbegml78DbRCnj7JR3OKYAytCTAF04u72%2Bow7w7SJT5e6eKOxqUvCAg%2BcwQyIJsON5SsJc41t0V5%2BEuWkxrkKs4v%2BC8UrwA83sMnAGybD4H76fMeIjNEgEXyXQiFT55Hb9SMp3p0VCpK2rPt5x4nxc1bfAQSzIXrPMlazriAzM2AOB4CAx3U6I9awyQzGcM19AR9a0qD%2FEh1fXh0HcbG5OgCBNYcBtiswcP%2BWlO4NloN%2Fgf7Wf96CPkk8EeeBdEzCKJSfKC1JaMyaehNYq%2BxqTdt406uVEAOB7o6h9WZpxWaf7Q98R%2BVgV40t5Txrixh2frXweW%2FQg2ecfaOnps3upjBYCTQexOBljFwAJe6Sa16X8%2F2Z%2Bw32Rvz72efYhki5NIu6PQFiHBwg%2FFqjxIPRqYD0%2Bo3tohNqgsFOpTsEla2HcdcRqUthlmB0ZPWDUxENzA6fO1q%2FOPmVyoohbsnfD9s1IE9IIvtEDFHDYWOdPN0uGrFslD%2BYStjMbgBunNrWSwv5qSm9Bh8xhfnFtohbSXftRa2s3KXAo3hRZj1sCLFDBJWRvDgkPjo0uyFpRoGViPzMLnQgL4GOqUBJenBk8tSw1BvN0thqojLqCh6IIeCe4rM8sxiSk0v6ZyIvAkb7ea4aVS8n7D2DZ9ncFz1lxcLtW2Ydmymj2q4zfHCc9gEGmAkfFxiIzBIsVp%2FxYe6c8UqyWU05wxlRoAURlmdujtW%2FoSulAroSZMCOleWUHlCyJj2TfLMIub3NLfm%2FM9NZZXOIunCE8%2BsxBAjtP9kRxsCTGzYje893i6E3j1LQ07z&X-Amz-Signature=bdc7dba851a71a7d069997a490b1d79ba145dfd914ccfa5b324f621f17df5032&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S37CUHUZ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDsP3bc3kUwDbE2MxU47H%2Fv3wBG5H5AaQvXWmMaa5lg6wIgStRDYaSrLzjbFvGIairAYY3PoL9pwJHMI5BbSqkl55oq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFjC7blkLl52UxljGircA6kT3D1w153xSRF4a4oa%2FpxwgbrpNXyrgaNqWUlKm%2Fnu42R%2FNcbPtTNkPbegml78DbRCnj7JR3OKYAytCTAF04u72%2Bow7w7SJT5e6eKOxqUvCAg%2BcwQyIJsON5SsJc41t0V5%2BEuWkxrkKs4v%2BC8UrwA83sMnAGybD4H76fMeIjNEgEXyXQiFT55Hb9SMp3p0VCpK2rPt5x4nxc1bfAQSzIXrPMlazriAzM2AOB4CAx3U6I9awyQzGcM19AR9a0qD%2FEh1fXh0HcbG5OgCBNYcBtiswcP%2BWlO4NloN%2Fgf7Wf96CPkk8EeeBdEzCKJSfKC1JaMyaehNYq%2BxqTdt406uVEAOB7o6h9WZpxWaf7Q98R%2BVgV40t5Txrixh2frXweW%2FQg2ecfaOnps3upjBYCTQexOBljFwAJe6Sa16X8%2F2Z%2Bw32Rvz72efYhki5NIu6PQFiHBwg%2FFqjxIPRqYD0%2Bo3tohNqgsFOpTsEla2HcdcRqUthlmB0ZPWDUxENzA6fO1q%2FOPmVyoohbsnfD9s1IE9IIvtEDFHDYWOdPN0uGrFslD%2BYStjMbgBunNrWSwv5qSm9Bh8xhfnFtohbSXftRa2s3KXAo3hRZj1sCLFDBJWRvDgkPjo0uyFpRoGViPzMLnQgL4GOqUBJenBk8tSw1BvN0thqojLqCh6IIeCe4rM8sxiSk0v6ZyIvAkb7ea4aVS8n7D2DZ9ncFz1lxcLtW2Ydmymj2q4zfHCc9gEGmAkfFxiIzBIsVp%2FxYe6c8UqyWU05wxlRoAURlmdujtW%2FoSulAroSZMCOleWUHlCyJj2TfLMIub3NLfm%2FM9NZZXOIunCE8%2BsxBAjtP9kRxsCTGzYje893i6E3j1LQ07z&X-Amz-Signature=7163e2f4de79d83a91afbc29afb3247f9f083c64c46aa76f932993fc457463c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S37CUHUZ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDsP3bc3kUwDbE2MxU47H%2Fv3wBG5H5AaQvXWmMaa5lg6wIgStRDYaSrLzjbFvGIairAYY3PoL9pwJHMI5BbSqkl55oq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFjC7blkLl52UxljGircA6kT3D1w153xSRF4a4oa%2FpxwgbrpNXyrgaNqWUlKm%2Fnu42R%2FNcbPtTNkPbegml78DbRCnj7JR3OKYAytCTAF04u72%2Bow7w7SJT5e6eKOxqUvCAg%2BcwQyIJsON5SsJc41t0V5%2BEuWkxrkKs4v%2BC8UrwA83sMnAGybD4H76fMeIjNEgEXyXQiFT55Hb9SMp3p0VCpK2rPt5x4nxc1bfAQSzIXrPMlazriAzM2AOB4CAx3U6I9awyQzGcM19AR9a0qD%2FEh1fXh0HcbG5OgCBNYcBtiswcP%2BWlO4NloN%2Fgf7Wf96CPkk8EeeBdEzCKJSfKC1JaMyaehNYq%2BxqTdt406uVEAOB7o6h9WZpxWaf7Q98R%2BVgV40t5Txrixh2frXweW%2FQg2ecfaOnps3upjBYCTQexOBljFwAJe6Sa16X8%2F2Z%2Bw32Rvz72efYhki5NIu6PQFiHBwg%2FFqjxIPRqYD0%2Bo3tohNqgsFOpTsEla2HcdcRqUthlmB0ZPWDUxENzA6fO1q%2FOPmVyoohbsnfD9s1IE9IIvtEDFHDYWOdPN0uGrFslD%2BYStjMbgBunNrWSwv5qSm9Bh8xhfnFtohbSXftRa2s3KXAo3hRZj1sCLFDBJWRvDgkPjo0uyFpRoGViPzMLnQgL4GOqUBJenBk8tSw1BvN0thqojLqCh6IIeCe4rM8sxiSk0v6ZyIvAkb7ea4aVS8n7D2DZ9ncFz1lxcLtW2Ydmymj2q4zfHCc9gEGmAkfFxiIzBIsVp%2FxYe6c8UqyWU05wxlRoAURlmdujtW%2FoSulAroSZMCOleWUHlCyJj2TfLMIub3NLfm%2FM9NZZXOIunCE8%2BsxBAjtP9kRxsCTGzYje893i6E3j1LQ07z&X-Amz-Signature=2ff5b503d5887980e86cadb7e378fb6757b9015ab5b3fc3d15e7668da72f8182&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
