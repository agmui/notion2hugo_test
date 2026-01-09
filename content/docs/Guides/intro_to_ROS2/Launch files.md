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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEI4SUM5%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIALw8%2FS46aWRVk1mZCJCRbxdpWobQJefvswVzSLC%2BfLmAiEAodwSRrGWBPOXUioOKRh87sSiWLjPf7ZxAKF6bA7WeGAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgpLB%2FtCRW%2BXE4elSrcAzI2o2K6fd4k4%2Fc%2FHcjvAv24bMO8xfzPgEoIBRyv029XqWtVL%2B%2B4PJ2KHR0xwTiHL7NaUXLN4ndbOa%2Bc7cIU11H2E7Q13K38lEHKoTGY82RjBl7WX3MB1RlO2kNcol9jDghfYQf6pgfEGeRabF51voNzOCcmK4JiYDP6%2FC%2BTo8F0h4uH0rtjBmO58if4RBWlN8F5Hri8f4iZTRZ919ViZbMzEPm1a8b9SzVqoMgGQoXxBjhr%2ByD4Z9fwTFruSYF1MmlupQ3aclR4mXNQt1MTK34xDb%2FQSpZXnhy67U4gKW8YXgNPdTUtSem0Wfz4frUhgQKogRmNn%2B44fx4oaG2UIPUNd9MjnO2d1rEagR1bf%2F3%2B1c1fKcPAKSDmdIDBMCCnuieUR3UXIxJIfoYz4g34A5eKyMYlhPZuqwOJtHeHy2tjH%2FPqPcJw3UzgaRAVDNdZGJjyH%2BHMj02I8SvGaKO1sRVKlcrpR5zhqElaSnBPLvj2grCiXcYXZy3%2BEp4fcNDiUG%2BK5w%2Bj1QWZGWBtZTe2wOvhBTT9GgH3hWq0wZI1ZJFcnqK2W0xkkcgYBU%2FzjdhK%2B%2Fp1%2FYR0%2FkmpwCyDfxCkzrCde4thg%2BAOAIHnKQh0EUcuzZIWL5hk4ZCCbdLzMOSjgcsGOqUBPk2XeEfljQhhLHqC53D7NyyLrWa0Y6Nvn1SlnmCqDQtmZlkIFEk5L02uCgZqFfQz8bvwimAoLSLyIm1so0BKWKvekp0WxQofA9i8AVDWbDF7Zq14C1BVc8YVatW%2BnKQ7P97a2L4CzedIIKOjndWgUD4ohaXmS%2BZ4042ND5g1yPzHKQETc2VGdrRHQbYNSFx4tOLJuLKJszPZmAtJXBKkcv2YQVDX&X-Amz-Signature=70ee2eb6fe5cc1e19938018894220c31fcca603aa3e466d45af7460b59f90fa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEI4SUM5%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIALw8%2FS46aWRVk1mZCJCRbxdpWobQJefvswVzSLC%2BfLmAiEAodwSRrGWBPOXUioOKRh87sSiWLjPf7ZxAKF6bA7WeGAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgpLB%2FtCRW%2BXE4elSrcAzI2o2K6fd4k4%2Fc%2FHcjvAv24bMO8xfzPgEoIBRyv029XqWtVL%2B%2B4PJ2KHR0xwTiHL7NaUXLN4ndbOa%2Bc7cIU11H2E7Q13K38lEHKoTGY82RjBl7WX3MB1RlO2kNcol9jDghfYQf6pgfEGeRabF51voNzOCcmK4JiYDP6%2FC%2BTo8F0h4uH0rtjBmO58if4RBWlN8F5Hri8f4iZTRZ919ViZbMzEPm1a8b9SzVqoMgGQoXxBjhr%2ByD4Z9fwTFruSYF1MmlupQ3aclR4mXNQt1MTK34xDb%2FQSpZXnhy67U4gKW8YXgNPdTUtSem0Wfz4frUhgQKogRmNn%2B44fx4oaG2UIPUNd9MjnO2d1rEagR1bf%2F3%2B1c1fKcPAKSDmdIDBMCCnuieUR3UXIxJIfoYz4g34A5eKyMYlhPZuqwOJtHeHy2tjH%2FPqPcJw3UzgaRAVDNdZGJjyH%2BHMj02I8SvGaKO1sRVKlcrpR5zhqElaSnBPLvj2grCiXcYXZy3%2BEp4fcNDiUG%2BK5w%2Bj1QWZGWBtZTe2wOvhBTT9GgH3hWq0wZI1ZJFcnqK2W0xkkcgYBU%2FzjdhK%2B%2Fp1%2FYR0%2FkmpwCyDfxCkzrCde4thg%2BAOAIHnKQh0EUcuzZIWL5hk4ZCCbdLzMOSjgcsGOqUBPk2XeEfljQhhLHqC53D7NyyLrWa0Y6Nvn1SlnmCqDQtmZlkIFEk5L02uCgZqFfQz8bvwimAoLSLyIm1so0BKWKvekp0WxQofA9i8AVDWbDF7Zq14C1BVc8YVatW%2BnKQ7P97a2L4CzedIIKOjndWgUD4ohaXmS%2BZ4042ND5g1yPzHKQETc2VGdrRHQbYNSFx4tOLJuLKJszPZmAtJXBKkcv2YQVDX&X-Amz-Signature=c0eb96c1b4d0165750ed89eff0a4f76b12173e5b5240305f05d19feec31cb056&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEI4SUM5%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIALw8%2FS46aWRVk1mZCJCRbxdpWobQJefvswVzSLC%2BfLmAiEAodwSRrGWBPOXUioOKRh87sSiWLjPf7ZxAKF6bA7WeGAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgpLB%2FtCRW%2BXE4elSrcAzI2o2K6fd4k4%2Fc%2FHcjvAv24bMO8xfzPgEoIBRyv029XqWtVL%2B%2B4PJ2KHR0xwTiHL7NaUXLN4ndbOa%2Bc7cIU11H2E7Q13K38lEHKoTGY82RjBl7WX3MB1RlO2kNcol9jDghfYQf6pgfEGeRabF51voNzOCcmK4JiYDP6%2FC%2BTo8F0h4uH0rtjBmO58if4RBWlN8F5Hri8f4iZTRZ919ViZbMzEPm1a8b9SzVqoMgGQoXxBjhr%2ByD4Z9fwTFruSYF1MmlupQ3aclR4mXNQt1MTK34xDb%2FQSpZXnhy67U4gKW8YXgNPdTUtSem0Wfz4frUhgQKogRmNn%2B44fx4oaG2UIPUNd9MjnO2d1rEagR1bf%2F3%2B1c1fKcPAKSDmdIDBMCCnuieUR3UXIxJIfoYz4g34A5eKyMYlhPZuqwOJtHeHy2tjH%2FPqPcJw3UzgaRAVDNdZGJjyH%2BHMj02I8SvGaKO1sRVKlcrpR5zhqElaSnBPLvj2grCiXcYXZy3%2BEp4fcNDiUG%2BK5w%2Bj1QWZGWBtZTe2wOvhBTT9GgH3hWq0wZI1ZJFcnqK2W0xkkcgYBU%2FzjdhK%2B%2Fp1%2FYR0%2FkmpwCyDfxCkzrCde4thg%2BAOAIHnKQh0EUcuzZIWL5hk4ZCCbdLzMOSjgcsGOqUBPk2XeEfljQhhLHqC53D7NyyLrWa0Y6Nvn1SlnmCqDQtmZlkIFEk5L02uCgZqFfQz8bvwimAoLSLyIm1so0BKWKvekp0WxQofA9i8AVDWbDF7Zq14C1BVc8YVatW%2BnKQ7P97a2L4CzedIIKOjndWgUD4ohaXmS%2BZ4042ND5g1yPzHKQETc2VGdrRHQbYNSFx4tOLJuLKJszPZmAtJXBKkcv2YQVDX&X-Amz-Signature=ce4a2da00e8d9f0a7d9fb71e69008abae2f141c0fb64f0ac1341e5565d2cca74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
