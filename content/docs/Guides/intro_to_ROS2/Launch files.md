---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZCJA4O%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXThs2r68BcoxLH6gHbGsSJRV9ANGcRC%2FIdH1LWD5AzAiBq%2Fh7SiArhHx9xasMNxIIBPgA%2F6uccE1G%2FYVoho6ykxCqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB%2FzuOKPRjQ01WvHpKtwDlkUOdnLFZycKVUMuiY%2B2NXnnA7BO6kpNUJujKEM0u809fMowhdx9UChP%2F4zMzwXpdMnxkv%2FPmHCWKBUUPzQCTcQS0UuVTMpnWl9ZExkKh36H2HSM0vQmGt%2BNvgSMynkfdu55dkNDvtENA%2BYRcIoq0%2BuY9%2BiVTNv2Bx7vNKQfqWTD%2FS3OcKlGm6W2eYlPQOetI8A37c8x2tLezXGx5YqLoWd5JJhZ1bbbcn2lmjNvt%2FKzHBzwiekb7j6pGLiz0qFJJlhXRjXUjyDTJCWkwCy2w1VRgG1hlBSQ8jBJEaY6nLQspuJQaXqMdxPQ85n1JNxjCv9DPzFpdmSSLcY36AZV4kmDOBc0B1uGEHEvxavmrO9TpBt%2B82igvoT73x0Ri523CrdAM3rWKfEOshx0Cw%2BkpTXextMfXgS8nR7NwPVwkkiqhkCcbLGNZLLpbuKPEfllOqWp8pKeOMBPneHvBwadA1J72lXjX5V0lXJ4FxxwVkXd9v2Y9NiVH9xlqNeWA65pA%2F243ncqkT1OlqBzi%2BYdO76%2BA4QGrcEERh2y5W5uOua0a7QB7%2BNWVD5ogihRJ1dbBb5UOnwVu4%2FXehsXCoHeGVre14GzcPDgdSu8eSNFlGzi%2BTAz6Wx4%2BCBZepYwh6KoxAY6pgGPG24LT%2BUIusgtjoY7bcjRSmg0ByvmchIjmGtfsWCB5Rvti8SoSfMOLMbbtyfNzlp5%2FoX6opyD0T3lTIXjXWiJqT3giHxqqBhpYJTMDCBLNkfZjXQtqrCnnZxkaPbaqq3Vy61keam5A491I4meMxKP3ZWx3gr26taIiARjFjdr9SlLovs6%2F%2Fy5XUr%2FL%2Fgg9WHnzwqNPmkQojWjZlLW6SpQSr2DS7pS&X-Amz-Signature=0098f741202876d4c6c1fb68f06415728b4c2aea9d503feb04749bf2869653e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZCJA4O%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXThs2r68BcoxLH6gHbGsSJRV9ANGcRC%2FIdH1LWD5AzAiBq%2Fh7SiArhHx9xasMNxIIBPgA%2F6uccE1G%2FYVoho6ykxCqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB%2FzuOKPRjQ01WvHpKtwDlkUOdnLFZycKVUMuiY%2B2NXnnA7BO6kpNUJujKEM0u809fMowhdx9UChP%2F4zMzwXpdMnxkv%2FPmHCWKBUUPzQCTcQS0UuVTMpnWl9ZExkKh36H2HSM0vQmGt%2BNvgSMynkfdu55dkNDvtENA%2BYRcIoq0%2BuY9%2BiVTNv2Bx7vNKQfqWTD%2FS3OcKlGm6W2eYlPQOetI8A37c8x2tLezXGx5YqLoWd5JJhZ1bbbcn2lmjNvt%2FKzHBzwiekb7j6pGLiz0qFJJlhXRjXUjyDTJCWkwCy2w1VRgG1hlBSQ8jBJEaY6nLQspuJQaXqMdxPQ85n1JNxjCv9DPzFpdmSSLcY36AZV4kmDOBc0B1uGEHEvxavmrO9TpBt%2B82igvoT73x0Ri523CrdAM3rWKfEOshx0Cw%2BkpTXextMfXgS8nR7NwPVwkkiqhkCcbLGNZLLpbuKPEfllOqWp8pKeOMBPneHvBwadA1J72lXjX5V0lXJ4FxxwVkXd9v2Y9NiVH9xlqNeWA65pA%2F243ncqkT1OlqBzi%2BYdO76%2BA4QGrcEERh2y5W5uOua0a7QB7%2BNWVD5ogihRJ1dbBb5UOnwVu4%2FXehsXCoHeGVre14GzcPDgdSu8eSNFlGzi%2BTAz6Wx4%2BCBZepYwh6KoxAY6pgGPG24LT%2BUIusgtjoY7bcjRSmg0ByvmchIjmGtfsWCB5Rvti8SoSfMOLMbbtyfNzlp5%2FoX6opyD0T3lTIXjXWiJqT3giHxqqBhpYJTMDCBLNkfZjXQtqrCnnZxkaPbaqq3Vy61keam5A491I4meMxKP3ZWx3gr26taIiARjFjdr9SlLovs6%2F%2Fy5XUr%2FL%2Fgg9WHnzwqNPmkQojWjZlLW6SpQSr2DS7pS&X-Amz-Signature=62187bdc0844bd095aa59669e73b1fb56ad9b37acd0cb3f7e3c756a2cf21fbe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZCJA4O%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXThs2r68BcoxLH6gHbGsSJRV9ANGcRC%2FIdH1LWD5AzAiBq%2Fh7SiArhHx9xasMNxIIBPgA%2F6uccE1G%2FYVoho6ykxCqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB%2FzuOKPRjQ01WvHpKtwDlkUOdnLFZycKVUMuiY%2B2NXnnA7BO6kpNUJujKEM0u809fMowhdx9UChP%2F4zMzwXpdMnxkv%2FPmHCWKBUUPzQCTcQS0UuVTMpnWl9ZExkKh36H2HSM0vQmGt%2BNvgSMynkfdu55dkNDvtENA%2BYRcIoq0%2BuY9%2BiVTNv2Bx7vNKQfqWTD%2FS3OcKlGm6W2eYlPQOetI8A37c8x2tLezXGx5YqLoWd5JJhZ1bbbcn2lmjNvt%2FKzHBzwiekb7j6pGLiz0qFJJlhXRjXUjyDTJCWkwCy2w1VRgG1hlBSQ8jBJEaY6nLQspuJQaXqMdxPQ85n1JNxjCv9DPzFpdmSSLcY36AZV4kmDOBc0B1uGEHEvxavmrO9TpBt%2B82igvoT73x0Ri523CrdAM3rWKfEOshx0Cw%2BkpTXextMfXgS8nR7NwPVwkkiqhkCcbLGNZLLpbuKPEfllOqWp8pKeOMBPneHvBwadA1J72lXjX5V0lXJ4FxxwVkXd9v2Y9NiVH9xlqNeWA65pA%2F243ncqkT1OlqBzi%2BYdO76%2BA4QGrcEERh2y5W5uOua0a7QB7%2BNWVD5ogihRJ1dbBb5UOnwVu4%2FXehsXCoHeGVre14GzcPDgdSu8eSNFlGzi%2BTAz6Wx4%2BCBZepYwh6KoxAY6pgGPG24LT%2BUIusgtjoY7bcjRSmg0ByvmchIjmGtfsWCB5Rvti8SoSfMOLMbbtyfNzlp5%2FoX6opyD0T3lTIXjXWiJqT3giHxqqBhpYJTMDCBLNkfZjXQtqrCnnZxkaPbaqq3Vy61keam5A491I4meMxKP3ZWx3gr26taIiARjFjdr9SlLovs6%2F%2Fy5XUr%2FL%2Fgg9WHnzwqNPmkQojWjZlLW6SpQSr2DS7pS&X-Amz-Signature=9574fe53979ef4ced3763f4233c9fffb6fdcc5abf0dbe183cb41f2bd86b433ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
