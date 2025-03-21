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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5KUKXV4%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIGyZCxd0tB6j6Sc9XJoG5BeC75UqC1bZivA5V36SCYcBAiEA1kGLsrsAiah9XAkgRXdCYkX%2FdZTuF1jqjXJSuy%2FvVIwqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKUm8oKs%2B4inEGp7uCrcAwux81kxhSCG5PRtlVKPj%2Fk247bRDtoStk8fCVQqZO0nyPJAACYXt2RPRT2FxAThxj8mup4dbbF58ftZlFrweyfbXWifJwlzVQn2UpTiNOpB6%2B5KIEnERyb5unuUxqDHMFDmdji63bkc6yvsQ9GvAFx4pb0d19xa8%2B%2BDhdV5spyzmS9U0JabvmOGzA1XwEg0td6HDx8BUunHoRgey9EHAyWftnmFj2XD8LxxV72LJMOGfBD8Sr7TSF%2B9QXL15DeD08zjTs%2B9XYqoCz4qL0VnDt7OspcFp0UANy%2BjE0yZdnAns7QbRvKav%2FBgRaoZS3%2FdJ9MwGLKTMHV9djGWBBtR40wbA8nDPHSdufifpvArD4zubhqtPKi%2Fyo%2BnFaelfPuQwQ77v6EAQZ3Ufu1nMw%2Fv9cbGzzn4LUqGtMZ%2BVLlV7veWOLF4ZLS%2FsJq63yhjGk%2FgmTMmaID2S2iRH%2Fuqdzz9lcmSs76LK0V3ZN6MOwKLh2Z%2BTkyfLj4IY13bZmhlN07U9QWE2YyELCVgX2DeS%2F6IRV5jyIcmC4h1upapcoLsRsoOAQ%2FGtsplf%2F7NwmfkRUuGZkQrerlCG1R1d0HfEjIjz3sGcqOvxcDwv0OaUMgg7tI1%2FPpaeuxVRJ76TRtOMJL5874GOqUB8gDQrY%2FfLTk2JkU0wl92kwlhIirKijdKiDekvzEvJ3n8kHWHlysLGVZuSkU%2B7p%2BxyVdcIotGp3bihZ8Kq3BI3FoMD7yBoRl%2F78lWm38OBgvjXz%2FtBNdJDr4EQWRylymtk0CEOjINTeIfausiGR681n9puqt16haiVUkGPJOe4gxDQyINR6KpI%2BCvgqQvztk7S8I%2B1WDHu%2BMwGdv3ymsQJK9jpC8f&X-Amz-Signature=7c5ea2951ea21378ed0b0e2b9ce0f36846d93aff87d547a0f74d23628de0d4ce&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5KUKXV4%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIGyZCxd0tB6j6Sc9XJoG5BeC75UqC1bZivA5V36SCYcBAiEA1kGLsrsAiah9XAkgRXdCYkX%2FdZTuF1jqjXJSuy%2FvVIwqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKUm8oKs%2B4inEGp7uCrcAwux81kxhSCG5PRtlVKPj%2Fk247bRDtoStk8fCVQqZO0nyPJAACYXt2RPRT2FxAThxj8mup4dbbF58ftZlFrweyfbXWifJwlzVQn2UpTiNOpB6%2B5KIEnERyb5unuUxqDHMFDmdji63bkc6yvsQ9GvAFx4pb0d19xa8%2B%2BDhdV5spyzmS9U0JabvmOGzA1XwEg0td6HDx8BUunHoRgey9EHAyWftnmFj2XD8LxxV72LJMOGfBD8Sr7TSF%2B9QXL15DeD08zjTs%2B9XYqoCz4qL0VnDt7OspcFp0UANy%2BjE0yZdnAns7QbRvKav%2FBgRaoZS3%2FdJ9MwGLKTMHV9djGWBBtR40wbA8nDPHSdufifpvArD4zubhqtPKi%2Fyo%2BnFaelfPuQwQ77v6EAQZ3Ufu1nMw%2Fv9cbGzzn4LUqGtMZ%2BVLlV7veWOLF4ZLS%2FsJq63yhjGk%2FgmTMmaID2S2iRH%2Fuqdzz9lcmSs76LK0V3ZN6MOwKLh2Z%2BTkyfLj4IY13bZmhlN07U9QWE2YyELCVgX2DeS%2F6IRV5jyIcmC4h1upapcoLsRsoOAQ%2FGtsplf%2F7NwmfkRUuGZkQrerlCG1R1d0HfEjIjz3sGcqOvxcDwv0OaUMgg7tI1%2FPpaeuxVRJ76TRtOMJL5874GOqUB8gDQrY%2FfLTk2JkU0wl92kwlhIirKijdKiDekvzEvJ3n8kHWHlysLGVZuSkU%2B7p%2BxyVdcIotGp3bihZ8Kq3BI3FoMD7yBoRl%2F78lWm38OBgvjXz%2FtBNdJDr4EQWRylymtk0CEOjINTeIfausiGR681n9puqt16haiVUkGPJOe4gxDQyINR6KpI%2BCvgqQvztk7S8I%2B1WDHu%2BMwGdv3ymsQJK9jpC8f&X-Amz-Signature=978f99c40c2e711c37f120259d1b2903076daec5c2e5fea3f7655003ed65bd30&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5KUKXV4%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIGyZCxd0tB6j6Sc9XJoG5BeC75UqC1bZivA5V36SCYcBAiEA1kGLsrsAiah9XAkgRXdCYkX%2FdZTuF1jqjXJSuy%2FvVIwqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKUm8oKs%2B4inEGp7uCrcAwux81kxhSCG5PRtlVKPj%2Fk247bRDtoStk8fCVQqZO0nyPJAACYXt2RPRT2FxAThxj8mup4dbbF58ftZlFrweyfbXWifJwlzVQn2UpTiNOpB6%2B5KIEnERyb5unuUxqDHMFDmdji63bkc6yvsQ9GvAFx4pb0d19xa8%2B%2BDhdV5spyzmS9U0JabvmOGzA1XwEg0td6HDx8BUunHoRgey9EHAyWftnmFj2XD8LxxV72LJMOGfBD8Sr7TSF%2B9QXL15DeD08zjTs%2B9XYqoCz4qL0VnDt7OspcFp0UANy%2BjE0yZdnAns7QbRvKav%2FBgRaoZS3%2FdJ9MwGLKTMHV9djGWBBtR40wbA8nDPHSdufifpvArD4zubhqtPKi%2Fyo%2BnFaelfPuQwQ77v6EAQZ3Ufu1nMw%2Fv9cbGzzn4LUqGtMZ%2BVLlV7veWOLF4ZLS%2FsJq63yhjGk%2FgmTMmaID2S2iRH%2Fuqdzz9lcmSs76LK0V3ZN6MOwKLh2Z%2BTkyfLj4IY13bZmhlN07U9QWE2YyELCVgX2DeS%2F6IRV5jyIcmC4h1upapcoLsRsoOAQ%2FGtsplf%2F7NwmfkRUuGZkQrerlCG1R1d0HfEjIjz3sGcqOvxcDwv0OaUMgg7tI1%2FPpaeuxVRJ76TRtOMJL5874GOqUB8gDQrY%2FfLTk2JkU0wl92kwlhIirKijdKiDekvzEvJ3n8kHWHlysLGVZuSkU%2B7p%2BxyVdcIotGp3bihZ8Kq3BI3FoMD7yBoRl%2F78lWm38OBgvjXz%2FtBNdJDr4EQWRylymtk0CEOjINTeIfausiGR681n9puqt16haiVUkGPJOe4gxDQyINR6KpI%2BCvgqQvztk7S8I%2B1WDHu%2BMwGdv3ymsQJK9jpC8f&X-Amz-Signature=7d9cd2941b99aec121d7f50669fc372775b352e607d2c7e169ebb9b039ef1fc4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
