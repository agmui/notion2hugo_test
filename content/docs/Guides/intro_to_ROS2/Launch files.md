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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I3Q3QG5%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T022410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBoQHwQaMQ6hAEexAD89ZhDfvaVboxhdn8A5I8jeAd8IAiEA8ZBBr5x%2FyTHk4oVkbhhFB3yri72OBqAY8xQi9p%2BJcecqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMwjuOIlDoK7vkUSCrcA8VuA4XJCDrXLzpfVGNsjvqREJ3LF32WI5s5hOn3OsLtWPGQ23fZmPQcAYxOi%2BtZOagiOwUallWxCcd%2FEk8v5k7gbf48VZ7msGiCbc%2Fk74KLn5xgtTCeO9uSGb2mD%2FIiEMa7GUVuLyC4znStP5PTEtrY0ybnVaPPQQUPAysX6n5bMOO6IdhhH8WReiW6t4u36VjLgg9ssNLez24e8JZC3B4xqQ5zDKz02%2B9b4Fn%2Bzk9t%2BJBrzI%2FDgOcUGtRc4Ry2Z7Bp%2FRWefEX75Fafz1iTuT%2FOOf9RbHT%2BLeAPowim%2BIaJINz3mY%2FeBQPoewyP63ZX7DCw4tcEqEFNG3ROS%2BClJkD%2BHh%2FG%2FDhEHZj3fUbW%2B2ON7wJoXFtYRScE5VKt4yBl2A2QU2kVZng4RYO6anFYswR%2F23nowpyyvG14noOcsUjm0YD%2BZRMPvtBKZmawzrTcx2DqYWSEPZcEpEEm4QaMFMxrirxTcd%2BTSjAZWVyY0z7dfBsT7rhSnqFi%2FY7ZnqBj9tlWeZUEaUWrfUTvRx2j2cdgmxi%2Bsx3SnpEAkCoWgeYtBo3ELcNsPbaqdVClUR1syelspJo3wG%2FYXlatukuR6U1yr7oBfruiLIqKhpxZtmdf3SPfq7UvkvxVObZQMNq58b8GOqUBrfkY90sHVUSvLYXmZDqXJf76GIJqnA0I80ehqdJ39xe3922LExOESDLOvuV9b8V7qqtUGOjPuiSxgVmvYOsLOScNAOTFsI20IUU4NjOwISQn4GPEoSBf47YuzV9T8qXCU9OZtMk04EeEOg1%2FDfx6eRl0EXLOl8BC2WAnO1d8%2Fz2mUm9ytnEvruOCJQgNC%2BLHuu7dLguAaMI90EcwurR0qsKT2zFE&X-Amz-Signature=2eaadcd712a921a9a0dbe5efcb82d2ff87af0285e95a3fd0cd39e0c226a779a0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I3Q3QG5%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T022410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBoQHwQaMQ6hAEexAD89ZhDfvaVboxhdn8A5I8jeAd8IAiEA8ZBBr5x%2FyTHk4oVkbhhFB3yri72OBqAY8xQi9p%2BJcecqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMwjuOIlDoK7vkUSCrcA8VuA4XJCDrXLzpfVGNsjvqREJ3LF32WI5s5hOn3OsLtWPGQ23fZmPQcAYxOi%2BtZOagiOwUallWxCcd%2FEk8v5k7gbf48VZ7msGiCbc%2Fk74KLn5xgtTCeO9uSGb2mD%2FIiEMa7GUVuLyC4znStP5PTEtrY0ybnVaPPQQUPAysX6n5bMOO6IdhhH8WReiW6t4u36VjLgg9ssNLez24e8JZC3B4xqQ5zDKz02%2B9b4Fn%2Bzk9t%2BJBrzI%2FDgOcUGtRc4Ry2Z7Bp%2FRWefEX75Fafz1iTuT%2FOOf9RbHT%2BLeAPowim%2BIaJINz3mY%2FeBQPoewyP63ZX7DCw4tcEqEFNG3ROS%2BClJkD%2BHh%2FG%2FDhEHZj3fUbW%2B2ON7wJoXFtYRScE5VKt4yBl2A2QU2kVZng4RYO6anFYswR%2F23nowpyyvG14noOcsUjm0YD%2BZRMPvtBKZmawzrTcx2DqYWSEPZcEpEEm4QaMFMxrirxTcd%2BTSjAZWVyY0z7dfBsT7rhSnqFi%2FY7ZnqBj9tlWeZUEaUWrfUTvRx2j2cdgmxi%2Bsx3SnpEAkCoWgeYtBo3ELcNsPbaqdVClUR1syelspJo3wG%2FYXlatukuR6U1yr7oBfruiLIqKhpxZtmdf3SPfq7UvkvxVObZQMNq58b8GOqUBrfkY90sHVUSvLYXmZDqXJf76GIJqnA0I80ehqdJ39xe3922LExOESDLOvuV9b8V7qqtUGOjPuiSxgVmvYOsLOScNAOTFsI20IUU4NjOwISQn4GPEoSBf47YuzV9T8qXCU9OZtMk04EeEOg1%2FDfx6eRl0EXLOl8BC2WAnO1d8%2Fz2mUm9ytnEvruOCJQgNC%2BLHuu7dLguAaMI90EcwurR0qsKT2zFE&X-Amz-Signature=a8d90bed3fa8b2cddd6c06336c41163a50f34d681ace20ab14294f6928d3e709&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I3Q3QG5%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T022410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBoQHwQaMQ6hAEexAD89ZhDfvaVboxhdn8A5I8jeAd8IAiEA8ZBBr5x%2FyTHk4oVkbhhFB3yri72OBqAY8xQi9p%2BJcecqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMwjuOIlDoK7vkUSCrcA8VuA4XJCDrXLzpfVGNsjvqREJ3LF32WI5s5hOn3OsLtWPGQ23fZmPQcAYxOi%2BtZOagiOwUallWxCcd%2FEk8v5k7gbf48VZ7msGiCbc%2Fk74KLn5xgtTCeO9uSGb2mD%2FIiEMa7GUVuLyC4znStP5PTEtrY0ybnVaPPQQUPAysX6n5bMOO6IdhhH8WReiW6t4u36VjLgg9ssNLez24e8JZC3B4xqQ5zDKz02%2B9b4Fn%2Bzk9t%2BJBrzI%2FDgOcUGtRc4Ry2Z7Bp%2FRWefEX75Fafz1iTuT%2FOOf9RbHT%2BLeAPowim%2BIaJINz3mY%2FeBQPoewyP63ZX7DCw4tcEqEFNG3ROS%2BClJkD%2BHh%2FG%2FDhEHZj3fUbW%2B2ON7wJoXFtYRScE5VKt4yBl2A2QU2kVZng4RYO6anFYswR%2F23nowpyyvG14noOcsUjm0YD%2BZRMPvtBKZmawzrTcx2DqYWSEPZcEpEEm4QaMFMxrirxTcd%2BTSjAZWVyY0z7dfBsT7rhSnqFi%2FY7ZnqBj9tlWeZUEaUWrfUTvRx2j2cdgmxi%2Bsx3SnpEAkCoWgeYtBo3ELcNsPbaqdVClUR1syelspJo3wG%2FYXlatukuR6U1yr7oBfruiLIqKhpxZtmdf3SPfq7UvkvxVObZQMNq58b8GOqUBrfkY90sHVUSvLYXmZDqXJf76GIJqnA0I80ehqdJ39xe3922LExOESDLOvuV9b8V7qqtUGOjPuiSxgVmvYOsLOScNAOTFsI20IUU4NjOwISQn4GPEoSBf47YuzV9T8qXCU9OZtMk04EeEOg1%2FDfx6eRl0EXLOl8BC2WAnO1d8%2Fz2mUm9ytnEvruOCJQgNC%2BLHuu7dLguAaMI90EcwurR0qsKT2zFE&X-Amz-Signature=eccfa9e91219ff0f93f331c093e2d60c50ed689bd7e1cb4cc5cf118ab3728e80&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
