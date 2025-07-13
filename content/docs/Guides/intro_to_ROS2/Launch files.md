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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3OSEUS2%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOVuGQXmnnsXWoQ4KlLKJoJLGO%2Fa%2BEFHfkdWQvL4eK8AIhALcB2EuNruqsumYrMgvai%2BHU4a7eHGe9weuWelaIO30oKv8DCBAQABoMNjM3NDIzMTgzODA1Igzho4UqYakHQ5%2FM7eIq3APWSyLZ38QhxiqXy7iH0kO%2FhclIh2iajF2P%2FbIeMKMOGM6B5Qw6OHIsCJecs25S5I7NliPNywee5DiSIwph%2Bbs9ViBlo%2BbpeZEf%2FZt%2BLAQA1jVT7u4x60ckjonIGiaZKIVXm3av%2BCPDDwVRzyy0ZAMATHiDw2qiaAB8ss51KB%2B0f%2B28GMRAFyGqRGGCgeUmuf5PP1vTnlDzecMC7rfrL3Fh3JPOxV5Z6m7uz1JDM8DtAYFyKRUkQce0PmOUUYD0kzI2Lfgxr6jvRoBpHbNhlHCgHV%2BYpblZdx3bIfr9GL2yEqJ3sTnTj9%2B%2Fwthq66Jn1cw%2BXk%2FIOMzubUZ0QpyXBgl4N6Ync0qXWEJSQIOJDNxCKvWj2Yfms6L8ZG1b9EtrS9KFLG6j5IzwAMC0CQ8kqYTvAB%2FB2q9LX0tZeWihn1hXRzGsMw0YJkze9MP7bmTTnEVI%2BWrdp%2Bo3Rv0ckWdM7HMuylBVeHPCZfG8sXDGJ3k0eqHyDXMZEE48LjMIq0PWs5WHJjtuh%2BDZJJ3HSxEj%2B%2F%2FABe0rMpSnQ6QyosB0RJLngawE%2BZEmt3Rcy7epmy07wRt%2Fjlr%2Brc14U%2F%2F3jIwaoUv6Lyv%2FVXp5xSgI%2Fdw1sRA6PezVP2kg3pe7PcZDYzDGpM3DBjqkAXcSgHsDu6NEDvw9axWvY9TkwvcKvCFkMdJ7Uc%2BxutM5amc%2B6KxPiROLXZY0m38JQIvOtNS08OHN%2B%2BoEJE0fjZTu%2BxHDA%2FCpoPOgrMhs7EieBQRb4f%2FDKvySE7rg3BEwYyqblAawxcDLBMGeZ729XmsAK6gSvBh0rW%2Bz0uk7vpOfFFIisZF1zvXIuFKIRcCFFt9PD5FGp29lHHoihoSsuAt23uDY&X-Amz-Signature=26b320fd816efa90effddb242aee63b94424b46e7bde85a95d9bfea5187cece2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3OSEUS2%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOVuGQXmnnsXWoQ4KlLKJoJLGO%2Fa%2BEFHfkdWQvL4eK8AIhALcB2EuNruqsumYrMgvai%2BHU4a7eHGe9weuWelaIO30oKv8DCBAQABoMNjM3NDIzMTgzODA1Igzho4UqYakHQ5%2FM7eIq3APWSyLZ38QhxiqXy7iH0kO%2FhclIh2iajF2P%2FbIeMKMOGM6B5Qw6OHIsCJecs25S5I7NliPNywee5DiSIwph%2Bbs9ViBlo%2BbpeZEf%2FZt%2BLAQA1jVT7u4x60ckjonIGiaZKIVXm3av%2BCPDDwVRzyy0ZAMATHiDw2qiaAB8ss51KB%2B0f%2B28GMRAFyGqRGGCgeUmuf5PP1vTnlDzecMC7rfrL3Fh3JPOxV5Z6m7uz1JDM8DtAYFyKRUkQce0PmOUUYD0kzI2Lfgxr6jvRoBpHbNhlHCgHV%2BYpblZdx3bIfr9GL2yEqJ3sTnTj9%2B%2Fwthq66Jn1cw%2BXk%2FIOMzubUZ0QpyXBgl4N6Ync0qXWEJSQIOJDNxCKvWj2Yfms6L8ZG1b9EtrS9KFLG6j5IzwAMC0CQ8kqYTvAB%2FB2q9LX0tZeWihn1hXRzGsMw0YJkze9MP7bmTTnEVI%2BWrdp%2Bo3Rv0ckWdM7HMuylBVeHPCZfG8sXDGJ3k0eqHyDXMZEE48LjMIq0PWs5WHJjtuh%2BDZJJ3HSxEj%2B%2F%2FABe0rMpSnQ6QyosB0RJLngawE%2BZEmt3Rcy7epmy07wRt%2Fjlr%2Brc14U%2F%2F3jIwaoUv6Lyv%2FVXp5xSgI%2Fdw1sRA6PezVP2kg3pe7PcZDYzDGpM3DBjqkAXcSgHsDu6NEDvw9axWvY9TkwvcKvCFkMdJ7Uc%2BxutM5amc%2B6KxPiROLXZY0m38JQIvOtNS08OHN%2B%2BoEJE0fjZTu%2BxHDA%2FCpoPOgrMhs7EieBQRb4f%2FDKvySE7rg3BEwYyqblAawxcDLBMGeZ729XmsAK6gSvBh0rW%2Bz0uk7vpOfFFIisZF1zvXIuFKIRcCFFt9PD5FGp29lHHoihoSsuAt23uDY&X-Amz-Signature=7879a916f749b5ab5b56261d5d4da1acc2855f2edb2b17f43ed35cbaa13db56a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3OSEUS2%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOVuGQXmnnsXWoQ4KlLKJoJLGO%2Fa%2BEFHfkdWQvL4eK8AIhALcB2EuNruqsumYrMgvai%2BHU4a7eHGe9weuWelaIO30oKv8DCBAQABoMNjM3NDIzMTgzODA1Igzho4UqYakHQ5%2FM7eIq3APWSyLZ38QhxiqXy7iH0kO%2FhclIh2iajF2P%2FbIeMKMOGM6B5Qw6OHIsCJecs25S5I7NliPNywee5DiSIwph%2Bbs9ViBlo%2BbpeZEf%2FZt%2BLAQA1jVT7u4x60ckjonIGiaZKIVXm3av%2BCPDDwVRzyy0ZAMATHiDw2qiaAB8ss51KB%2B0f%2B28GMRAFyGqRGGCgeUmuf5PP1vTnlDzecMC7rfrL3Fh3JPOxV5Z6m7uz1JDM8DtAYFyKRUkQce0PmOUUYD0kzI2Lfgxr6jvRoBpHbNhlHCgHV%2BYpblZdx3bIfr9GL2yEqJ3sTnTj9%2B%2Fwthq66Jn1cw%2BXk%2FIOMzubUZ0QpyXBgl4N6Ync0qXWEJSQIOJDNxCKvWj2Yfms6L8ZG1b9EtrS9KFLG6j5IzwAMC0CQ8kqYTvAB%2FB2q9LX0tZeWihn1hXRzGsMw0YJkze9MP7bmTTnEVI%2BWrdp%2Bo3Rv0ckWdM7HMuylBVeHPCZfG8sXDGJ3k0eqHyDXMZEE48LjMIq0PWs5WHJjtuh%2BDZJJ3HSxEj%2B%2F%2FABe0rMpSnQ6QyosB0RJLngawE%2BZEmt3Rcy7epmy07wRt%2Fjlr%2Brc14U%2F%2F3jIwaoUv6Lyv%2FVXp5xSgI%2Fdw1sRA6PezVP2kg3pe7PcZDYzDGpM3DBjqkAXcSgHsDu6NEDvw9axWvY9TkwvcKvCFkMdJ7Uc%2BxutM5amc%2B6KxPiROLXZY0m38JQIvOtNS08OHN%2B%2BoEJE0fjZTu%2BxHDA%2FCpoPOgrMhs7EieBQRb4f%2FDKvySE7rg3BEwYyqblAawxcDLBMGeZ729XmsAK6gSvBh0rW%2Bz0uk7vpOfFFIisZF1zvXIuFKIRcCFFt9PD5FGp29lHHoihoSsuAt23uDY&X-Amz-Signature=669e33ea3af9c5c455e318d9b940c7020c1858e1bd9522423767c3eaa25288b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
