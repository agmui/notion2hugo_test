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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAJNEWHS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBj6LBXZ4pYRi02J%2BWimVCBy%2B7W1hFFSsJVKvsZV6jJKAiEA1iML3aOKUMfBbVIT78nG09WpJAGvRZP3rBkgDF%2Fe2YMq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDK8AWGhxgMUlWyVZnyrcA7Q3msx9t575VZlI1YPrhif4K%2BdLcJJY4nNuaFrgrJlh6aUORlDGVbrLjP8%2Bar9dCAqkA4FaWZ5kz4cUqXhnBkDR6%2FvEoNiUUEO6XWEF1kamjtoBRscL4snyOo0mvFx6cdrikdqHGHKjS05i5U7SiOeplFyU0Pp3%2Fr4rPwCbXwOAU9eILLT3n0tR%2BBL3u%2FCkdNkMZUGTWvsBVpHRYskzm8FbCkr1q2WF5dUDaxGOXCyfoCvwHIdJHurQnF6t5%2BQCvOiVScivsgJR6jNNBQubOIEkrfeXRTPE8GQzt9iX0WwBep1VxAt25%2BzXzIRQ3QXewOXho692sdSRKofnRNSzMBy0t%2FiG3%2FxuQ8u8cr0CplCm1aq5XkpSAzOIn0wy%2B2W%2BE7vGvQh%2BNUZZZ1s703RoRFpZQ6WBBWJviINM%2FsUwsytTON18%2F%2BoB0SFSr0fd0VA3es0oTx%2B3EZQGVSx6YROp3Buk2czTAwr8LCwvA8Qem77Zb9JxtK7TO48I5gGuz%2B56%2Fa%2F2p0QtcnnSdESxIyuXY8rHYas7uRl%2BXuR7JdXp%2Fcz0O9GjU4tswyqvL5rJP8MNB1%2BsVmdBeFnj%2FutIoM9tlaPu8531egmhbeVqWn7p0rPfXKDGCai1mVge9r0fMITpwMQGOqUBbM5QPbMuIooDesXMBksYHmkZMWn7dRm0F36meltgx7yINc3nsP%2FPn2w5hsi44IyUBvhJM2JbA7sD0MZuRblQuaDlIFHwixTp3XRy2aI534sOET7hQTkwJ8Vk9ZlslVc84MMwxF3kJYCiOPpSVvtABv9alEnOLXHrmvptswTl%2BGDL8UG%2FjG0Pi0dEYuY4qdd6zrgjSLWospZr4FglfMbxyCLUtMEd&X-Amz-Signature=7f597508fa3bb3115c245e49fa3c292051e28b1530ceba7dff346b667969d386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAJNEWHS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBj6LBXZ4pYRi02J%2BWimVCBy%2B7W1hFFSsJVKvsZV6jJKAiEA1iML3aOKUMfBbVIT78nG09WpJAGvRZP3rBkgDF%2Fe2YMq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDK8AWGhxgMUlWyVZnyrcA7Q3msx9t575VZlI1YPrhif4K%2BdLcJJY4nNuaFrgrJlh6aUORlDGVbrLjP8%2Bar9dCAqkA4FaWZ5kz4cUqXhnBkDR6%2FvEoNiUUEO6XWEF1kamjtoBRscL4snyOo0mvFx6cdrikdqHGHKjS05i5U7SiOeplFyU0Pp3%2Fr4rPwCbXwOAU9eILLT3n0tR%2BBL3u%2FCkdNkMZUGTWvsBVpHRYskzm8FbCkr1q2WF5dUDaxGOXCyfoCvwHIdJHurQnF6t5%2BQCvOiVScivsgJR6jNNBQubOIEkrfeXRTPE8GQzt9iX0WwBep1VxAt25%2BzXzIRQ3QXewOXho692sdSRKofnRNSzMBy0t%2FiG3%2FxuQ8u8cr0CplCm1aq5XkpSAzOIn0wy%2B2W%2BE7vGvQh%2BNUZZZ1s703RoRFpZQ6WBBWJviINM%2FsUwsytTON18%2F%2BoB0SFSr0fd0VA3es0oTx%2B3EZQGVSx6YROp3Buk2czTAwr8LCwvA8Qem77Zb9JxtK7TO48I5gGuz%2B56%2Fa%2F2p0QtcnnSdESxIyuXY8rHYas7uRl%2BXuR7JdXp%2Fcz0O9GjU4tswyqvL5rJP8MNB1%2BsVmdBeFnj%2FutIoM9tlaPu8531egmhbeVqWn7p0rPfXKDGCai1mVge9r0fMITpwMQGOqUBbM5QPbMuIooDesXMBksYHmkZMWn7dRm0F36meltgx7yINc3nsP%2FPn2w5hsi44IyUBvhJM2JbA7sD0MZuRblQuaDlIFHwixTp3XRy2aI534sOET7hQTkwJ8Vk9ZlslVc84MMwxF3kJYCiOPpSVvtABv9alEnOLXHrmvptswTl%2BGDL8UG%2FjG0Pi0dEYuY4qdd6zrgjSLWospZr4FglfMbxyCLUtMEd&X-Amz-Signature=11f5af51e317b8a5b0036e585943025841cff63cd9f3a76ab2d4788c7bf6c34a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAJNEWHS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBj6LBXZ4pYRi02J%2BWimVCBy%2B7W1hFFSsJVKvsZV6jJKAiEA1iML3aOKUMfBbVIT78nG09WpJAGvRZP3rBkgDF%2Fe2YMq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDK8AWGhxgMUlWyVZnyrcA7Q3msx9t575VZlI1YPrhif4K%2BdLcJJY4nNuaFrgrJlh6aUORlDGVbrLjP8%2Bar9dCAqkA4FaWZ5kz4cUqXhnBkDR6%2FvEoNiUUEO6XWEF1kamjtoBRscL4snyOo0mvFx6cdrikdqHGHKjS05i5U7SiOeplFyU0Pp3%2Fr4rPwCbXwOAU9eILLT3n0tR%2BBL3u%2FCkdNkMZUGTWvsBVpHRYskzm8FbCkr1q2WF5dUDaxGOXCyfoCvwHIdJHurQnF6t5%2BQCvOiVScivsgJR6jNNBQubOIEkrfeXRTPE8GQzt9iX0WwBep1VxAt25%2BzXzIRQ3QXewOXho692sdSRKofnRNSzMBy0t%2FiG3%2FxuQ8u8cr0CplCm1aq5XkpSAzOIn0wy%2B2W%2BE7vGvQh%2BNUZZZ1s703RoRFpZQ6WBBWJviINM%2FsUwsytTON18%2F%2BoB0SFSr0fd0VA3es0oTx%2B3EZQGVSx6YROp3Buk2czTAwr8LCwvA8Qem77Zb9JxtK7TO48I5gGuz%2B56%2Fa%2F2p0QtcnnSdESxIyuXY8rHYas7uRl%2BXuR7JdXp%2Fcz0O9GjU4tswyqvL5rJP8MNB1%2BsVmdBeFnj%2FutIoM9tlaPu8531egmhbeVqWn7p0rPfXKDGCai1mVge9r0fMITpwMQGOqUBbM5QPbMuIooDesXMBksYHmkZMWn7dRm0F36meltgx7yINc3nsP%2FPn2w5hsi44IyUBvhJM2JbA7sD0MZuRblQuaDlIFHwixTp3XRy2aI534sOET7hQTkwJ8Vk9ZlslVc84MMwxF3kJYCiOPpSVvtABv9alEnOLXHrmvptswTl%2BGDL8UG%2FjG0Pi0dEYuY4qdd6zrgjSLWospZr4FglfMbxyCLUtMEd&X-Amz-Signature=7b4e7dd8c14dfaf5b8b516ea5c00f8f8d7b3115653155cf006218e2905e26d5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
