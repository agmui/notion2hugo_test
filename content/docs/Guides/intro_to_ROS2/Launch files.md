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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MYX2HES%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMw89q9h4HcnAdO5BDIupH6GgLKe%2BUzF2lKlvPRz17iAiEA%2FkwVD2EPB5WBOSajzKbKcfjwF6pbZtGHhzz3c9noujcqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjDknL%2FoGPNHcT5PircAw67t2ohvDrUdscZPw1X5hL9TTn4V3vrUeMpH6iJ%2BTu2PFPX5c1KcrxqPs6xOAwhRwIWvXpF58FND6rQlKmmzixNXPxdac52VLcaiKM2dfviCijoZWFfLexU9ITlJswt3I%2FhOsmdhfz%2FfbXGpXOA5NBMqXwSNtjOctV3OKpxZ5t0PCxpFw6nxGrp%2FHptiE1kcIscDVh3oyMorTOuEJNd80bAMKIiYFqTbzEtDh1x0ei0Z%2BNXT8XAq9144zX1CKlSt1yfnbCMwUiK8E0B47vkFUxNxb62ldAZdQePLUqa7I4ovXR1NOGdlFPpN5PEK%2FM15DSElSUtCCXfr7wkYnVheZukXDxPr4r93DfYS5nfWS0YqLKxhnMcQgBZ8bKso1zabVOqEPlA61qttLXYipSpxjRWnjpEqhJF4NncTtskm4a87fQgQ4wRd8oTFPQI0t%2BmYRevfOu61I1%2BZV%2BQ85X3JLU%2FKWg%2BmjjSazYwXKI%2Bf%2FjvL3JFeibnK54Qj%2FNuAKdlMOMVNSh7SA5IYOFcVd2w1g%2BD%2FNE4U8moH7ljQqdu6xSq%2B6fDj3HHlBVRN%2FHGgiW5Db%2Bs5qm1pY6FK1ULaMp8jZsbSsBRkFg92fb40FvQeAjxPdWvocMqI89zNsJUMK7K3L0GOqUBfW99Z5BryHSaw9RKxg%2FBBktEF68QCxA%2FOeJFzRUXf8mLxw7HOBgw8NMtcrxkbcTulwtvQUFTbury2%2FZnFKSC0HWGcTHyZBjmbT%2FpJ3P2cNP%2FNB7DtG6TBlv8Ksqdgc3B5v%2FZyU4i7yt1GCFLJDQ7vZpEz82yaiPzamuI2%2FBeK5flPuOv2IqsaY5eKSXjQdcCMdOuKR6vQKxrizSoq523e8LnQyil&X-Amz-Signature=f581ff329ca4d2421b7140c244f6f6f7030dda323db46dc53b18113526ef8193&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MYX2HES%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMw89q9h4HcnAdO5BDIupH6GgLKe%2BUzF2lKlvPRz17iAiEA%2FkwVD2EPB5WBOSajzKbKcfjwF6pbZtGHhzz3c9noujcqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjDknL%2FoGPNHcT5PircAw67t2ohvDrUdscZPw1X5hL9TTn4V3vrUeMpH6iJ%2BTu2PFPX5c1KcrxqPs6xOAwhRwIWvXpF58FND6rQlKmmzixNXPxdac52VLcaiKM2dfviCijoZWFfLexU9ITlJswt3I%2FhOsmdhfz%2FfbXGpXOA5NBMqXwSNtjOctV3OKpxZ5t0PCxpFw6nxGrp%2FHptiE1kcIscDVh3oyMorTOuEJNd80bAMKIiYFqTbzEtDh1x0ei0Z%2BNXT8XAq9144zX1CKlSt1yfnbCMwUiK8E0B47vkFUxNxb62ldAZdQePLUqa7I4ovXR1NOGdlFPpN5PEK%2FM15DSElSUtCCXfr7wkYnVheZukXDxPr4r93DfYS5nfWS0YqLKxhnMcQgBZ8bKso1zabVOqEPlA61qttLXYipSpxjRWnjpEqhJF4NncTtskm4a87fQgQ4wRd8oTFPQI0t%2BmYRevfOu61I1%2BZV%2BQ85X3JLU%2FKWg%2BmjjSazYwXKI%2Bf%2FjvL3JFeibnK54Qj%2FNuAKdlMOMVNSh7SA5IYOFcVd2w1g%2BD%2FNE4U8moH7ljQqdu6xSq%2B6fDj3HHlBVRN%2FHGgiW5Db%2Bs5qm1pY6FK1ULaMp8jZsbSsBRkFg92fb40FvQeAjxPdWvocMqI89zNsJUMK7K3L0GOqUBfW99Z5BryHSaw9RKxg%2FBBktEF68QCxA%2FOeJFzRUXf8mLxw7HOBgw8NMtcrxkbcTulwtvQUFTbury2%2FZnFKSC0HWGcTHyZBjmbT%2FpJ3P2cNP%2FNB7DtG6TBlv8Ksqdgc3B5v%2FZyU4i7yt1GCFLJDQ7vZpEz82yaiPzamuI2%2FBeK5flPuOv2IqsaY5eKSXjQdcCMdOuKR6vQKxrizSoq523e8LnQyil&X-Amz-Signature=e90f4daf4aa50bc4baa090221670ad9ee464fb51c7767154126b543f9c5a5b28&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MYX2HES%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMw89q9h4HcnAdO5BDIupH6GgLKe%2BUzF2lKlvPRz17iAiEA%2FkwVD2EPB5WBOSajzKbKcfjwF6pbZtGHhzz3c9noujcqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjDknL%2FoGPNHcT5PircAw67t2ohvDrUdscZPw1X5hL9TTn4V3vrUeMpH6iJ%2BTu2PFPX5c1KcrxqPs6xOAwhRwIWvXpF58FND6rQlKmmzixNXPxdac52VLcaiKM2dfviCijoZWFfLexU9ITlJswt3I%2FhOsmdhfz%2FfbXGpXOA5NBMqXwSNtjOctV3OKpxZ5t0PCxpFw6nxGrp%2FHptiE1kcIscDVh3oyMorTOuEJNd80bAMKIiYFqTbzEtDh1x0ei0Z%2BNXT8XAq9144zX1CKlSt1yfnbCMwUiK8E0B47vkFUxNxb62ldAZdQePLUqa7I4ovXR1NOGdlFPpN5PEK%2FM15DSElSUtCCXfr7wkYnVheZukXDxPr4r93DfYS5nfWS0YqLKxhnMcQgBZ8bKso1zabVOqEPlA61qttLXYipSpxjRWnjpEqhJF4NncTtskm4a87fQgQ4wRd8oTFPQI0t%2BmYRevfOu61I1%2BZV%2BQ85X3JLU%2FKWg%2BmjjSazYwXKI%2Bf%2FjvL3JFeibnK54Qj%2FNuAKdlMOMVNSh7SA5IYOFcVd2w1g%2BD%2FNE4U8moH7ljQqdu6xSq%2B6fDj3HHlBVRN%2FHGgiW5Db%2Bs5qm1pY6FK1ULaMp8jZsbSsBRkFg92fb40FvQeAjxPdWvocMqI89zNsJUMK7K3L0GOqUBfW99Z5BryHSaw9RKxg%2FBBktEF68QCxA%2FOeJFzRUXf8mLxw7HOBgw8NMtcrxkbcTulwtvQUFTbury2%2FZnFKSC0HWGcTHyZBjmbT%2FpJ3P2cNP%2FNB7DtG6TBlv8Ksqdgc3B5v%2FZyU4i7yt1GCFLJDQ7vZpEz82yaiPzamuI2%2FBeK5flPuOv2IqsaY5eKSXjQdcCMdOuKR6vQKxrizSoq523e8LnQyil&X-Amz-Signature=1e18aa6e001cc99e849cf69f6aacb3bec37195267b0cba842cbace9d897264ca&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
