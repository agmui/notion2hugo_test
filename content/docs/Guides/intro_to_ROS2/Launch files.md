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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO72YJZP%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T181105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFSTccMezgJsaaUnyzxPwraVaopYGNvKSJwt6SZfm8j4AiEAj6%2BHxqKrpXz8OXfppn5WpNEHBwEr2WLySXMCxpBmHh4qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FQvQj9qw2c127v5ircA5EKupNJ%2FDC5z%2BVoP8GsD7dFdm5tQbDuzOscE79OH5sRqwZ8L%2FWfiV31pUWJmrmxHRZxT2dv5q84ka3izMYKoimkFFl%2FBcMFhF1%2FxmEflKHv7BWSynCGMg0oeoCV%2FfKQ5%2F1FLeEB%2FSNZ9Xd%2BeIS%2BY8j2aVXOmKiao3OMytd0A6WIf9XNk37NJZNT9DU16TkuWJ7BQ1twBLgwG8dHIwlo4GmULX34LhE3PWfAs8En33TQXh9LX0mHREBtgVcNfME6ss9DmbUPxZzrFATm5%2FB8f6wTkQp0cRfEkvfDOIkQR7HMfTAqgoA5sQfWNNeqfkpsmWJ3VABsq1TUXnxeqjEUQE8SM6ligvS70HEAD3aPfD4rQxKHW95CgPbMC9Qblr5TLAm7XtLpW0XXPZ4RESZXxPpG2CeVZhmsb2mfMqve%2FSMKbwWPXLv%2FoFLnG4%2FOgmrmpQUBkAg2QXeDfoQbuPi3lat13GoxjQUr0PGuMC0N4EAwUyd06T%2ByZsp5wEFplKV5L1eyU%2BM0Npz3jvitV%2Bam9eLtXEAtLUz%2FTI5%2FW4ul1XImwHlZHa3qMweSDsRnoBQilloRs36Cr0DWQSn6XhEi3mzVrVwd3B%2BW%2BEr3f6nWKXj1XEkyR5Cti6HCK0HxMMP90r0GOqUBVQdFl%2FgnlbktBRhY0Kbuw%2FlfqLS5rZsWOFo0JcLg2n%2BSfRmrOojWkRm3dCGP0YmmnuE%2FIA%2B9nQiD1FG2rdyv8Bj%2FM0pniXMnmik%2BjUo0rioLdHK9QzJt%2BXRMkisNMc0rhMW0S4abzynyuBqVWUC9AGiWQzk8mZz7ngyLD9tiT6EyvuGMz7TEMl8GnEowW84vB014nsYGAy8feOSByCw0fN0CVDql&X-Amz-Signature=f992c37ac4a220691b439952f6b9377459eb39ba7be6dac57b052acaed850d7e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO72YJZP%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T181105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFSTccMezgJsaaUnyzxPwraVaopYGNvKSJwt6SZfm8j4AiEAj6%2BHxqKrpXz8OXfppn5WpNEHBwEr2WLySXMCxpBmHh4qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FQvQj9qw2c127v5ircA5EKupNJ%2FDC5z%2BVoP8GsD7dFdm5tQbDuzOscE79OH5sRqwZ8L%2FWfiV31pUWJmrmxHRZxT2dv5q84ka3izMYKoimkFFl%2FBcMFhF1%2FxmEflKHv7BWSynCGMg0oeoCV%2FfKQ5%2F1FLeEB%2FSNZ9Xd%2BeIS%2BY8j2aVXOmKiao3OMytd0A6WIf9XNk37NJZNT9DU16TkuWJ7BQ1twBLgwG8dHIwlo4GmULX34LhE3PWfAs8En33TQXh9LX0mHREBtgVcNfME6ss9DmbUPxZzrFATm5%2FB8f6wTkQp0cRfEkvfDOIkQR7HMfTAqgoA5sQfWNNeqfkpsmWJ3VABsq1TUXnxeqjEUQE8SM6ligvS70HEAD3aPfD4rQxKHW95CgPbMC9Qblr5TLAm7XtLpW0XXPZ4RESZXxPpG2CeVZhmsb2mfMqve%2FSMKbwWPXLv%2FoFLnG4%2FOgmrmpQUBkAg2QXeDfoQbuPi3lat13GoxjQUr0PGuMC0N4EAwUyd06T%2ByZsp5wEFplKV5L1eyU%2BM0Npz3jvitV%2Bam9eLtXEAtLUz%2FTI5%2FW4ul1XImwHlZHa3qMweSDsRnoBQilloRs36Cr0DWQSn6XhEi3mzVrVwd3B%2BW%2BEr3f6nWKXj1XEkyR5Cti6HCK0HxMMP90r0GOqUBVQdFl%2FgnlbktBRhY0Kbuw%2FlfqLS5rZsWOFo0JcLg2n%2BSfRmrOojWkRm3dCGP0YmmnuE%2FIA%2B9nQiD1FG2rdyv8Bj%2FM0pniXMnmik%2BjUo0rioLdHK9QzJt%2BXRMkisNMc0rhMW0S4abzynyuBqVWUC9AGiWQzk8mZz7ngyLD9tiT6EyvuGMz7TEMl8GnEowW84vB014nsYGAy8feOSByCw0fN0CVDql&X-Amz-Signature=073bb1c0261484e1404459832b459f7cd676e526d03c3fd9c3710a7d3e141ce2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO72YJZP%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T181105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFSTccMezgJsaaUnyzxPwraVaopYGNvKSJwt6SZfm8j4AiEAj6%2BHxqKrpXz8OXfppn5WpNEHBwEr2WLySXMCxpBmHh4qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FQvQj9qw2c127v5ircA5EKupNJ%2FDC5z%2BVoP8GsD7dFdm5tQbDuzOscE79OH5sRqwZ8L%2FWfiV31pUWJmrmxHRZxT2dv5q84ka3izMYKoimkFFl%2FBcMFhF1%2FxmEflKHv7BWSynCGMg0oeoCV%2FfKQ5%2F1FLeEB%2FSNZ9Xd%2BeIS%2BY8j2aVXOmKiao3OMytd0A6WIf9XNk37NJZNT9DU16TkuWJ7BQ1twBLgwG8dHIwlo4GmULX34LhE3PWfAs8En33TQXh9LX0mHREBtgVcNfME6ss9DmbUPxZzrFATm5%2FB8f6wTkQp0cRfEkvfDOIkQR7HMfTAqgoA5sQfWNNeqfkpsmWJ3VABsq1TUXnxeqjEUQE8SM6ligvS70HEAD3aPfD4rQxKHW95CgPbMC9Qblr5TLAm7XtLpW0XXPZ4RESZXxPpG2CeVZhmsb2mfMqve%2FSMKbwWPXLv%2FoFLnG4%2FOgmrmpQUBkAg2QXeDfoQbuPi3lat13GoxjQUr0PGuMC0N4EAwUyd06T%2ByZsp5wEFplKV5L1eyU%2BM0Npz3jvitV%2Bam9eLtXEAtLUz%2FTI5%2FW4ul1XImwHlZHa3qMweSDsRnoBQilloRs36Cr0DWQSn6XhEi3mzVrVwd3B%2BW%2BEr3f6nWKXj1XEkyR5Cti6HCK0HxMMP90r0GOqUBVQdFl%2FgnlbktBRhY0Kbuw%2FlfqLS5rZsWOFo0JcLg2n%2BSfRmrOojWkRm3dCGP0YmmnuE%2FIA%2B9nQiD1FG2rdyv8Bj%2FM0pniXMnmik%2BjUo0rioLdHK9QzJt%2BXRMkisNMc0rhMW0S4abzynyuBqVWUC9AGiWQzk8mZz7ngyLD9tiT6EyvuGMz7TEMl8GnEowW84vB014nsYGAy8feOSByCw0fN0CVDql&X-Amz-Signature=1da371b6135a94b96a7bf3077c1bba45e055390123c2506e3c07c3397f43e2b9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
