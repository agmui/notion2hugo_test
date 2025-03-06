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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRLIJMZZ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSRErUMEr38nz4M9UKcebJuHJ5vS39QzYGGajaZeYe2AiEApVN0gT5NgstxBWniPOL3XCxF8pExUjpdVIxFdG3bM3Eq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDKE7Udkh5zfBmXj0cSrcA1Mj4CKPwJUc3kuR%2FGXGfowV1jHaqh6uEOBPhZ3qxMz8tjicKEpSUOokE%2Fi79qbEn%2FwZxhQYKNloYSRMXJtkWjAIk6qxWnCPTfnohfZ5iJ1TcmW8amj2kMOm8Q9TH0lPNYQM43dawj06DCNtChmvLaoc9JvGt9Y%2BEegY993qLiUmcle64FQ%2FsYG2lwXG8tb6jq%2Fj7en%2F3ihyU5DKWzCMra5kSFxvZbNwacGCBIrhHryxJfXn9iwRDB%2Fcl5Lg8Y3HYSQJL5jZP0VaOyBGxOIqCiSm%2FQXDEmHpMPoPmlGhDEJIs9mNkLBJL9JI37rLUIG2jCKRCBIlgmN5jsR%2BJlZF9ryckiVGlJSwZzeEHBfXim0%2F8c6NsZ5DKW753R49pSjUYTESsg6Ap0HJfyMIK1ewG9nq7e8%2FbrdOH1NpvJd9OVzS780HWSPoKjTJrZF27vzo%2BLQvENrFdrpOShGvBiPHGsE36sYFHmMvLzp6opkdck8VLbcRlJySyVwgQE9VM9TUXLjZz9kOus3QAkT3MqS1mo6ClnQA0jME39qrgoPs8joL6hCAHFjr0%2B7v1eLXeRHfvF62k95%2FQ6D2PeBadDzUVekiBv%2Frd4FdH1Ag3sp0JPvLAckb4PTVOg35cgQWMLWQp74GOqUBPONDTmMbLdDCl26gtyjROy15ruq6CixCrQW4dCN8Gp%2BPdp3n4IqmUTqpYGaNnIGRY9r4THA45YhXNEW6W2lmSax%2FB7R%2FierMI1DEhJhHbovKMHUnzjlG380BcXyu65PQjFEzZKmxf2q4RhbPO%2BeFZ0tlw1PzhBQBCSExxIz2Epg4DWQIRj1CIy3A%2FKnDYaRBrNQsF5OT4w4%2Fc0EI1jaj7g17iEwf&X-Amz-Signature=5b0a6131b02584f57d8fee35e4a1bfbf0f66932a4eb24ada18728e04c1187665&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRLIJMZZ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSRErUMEr38nz4M9UKcebJuHJ5vS39QzYGGajaZeYe2AiEApVN0gT5NgstxBWniPOL3XCxF8pExUjpdVIxFdG3bM3Eq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDKE7Udkh5zfBmXj0cSrcA1Mj4CKPwJUc3kuR%2FGXGfowV1jHaqh6uEOBPhZ3qxMz8tjicKEpSUOokE%2Fi79qbEn%2FwZxhQYKNloYSRMXJtkWjAIk6qxWnCPTfnohfZ5iJ1TcmW8amj2kMOm8Q9TH0lPNYQM43dawj06DCNtChmvLaoc9JvGt9Y%2BEegY993qLiUmcle64FQ%2FsYG2lwXG8tb6jq%2Fj7en%2F3ihyU5DKWzCMra5kSFxvZbNwacGCBIrhHryxJfXn9iwRDB%2Fcl5Lg8Y3HYSQJL5jZP0VaOyBGxOIqCiSm%2FQXDEmHpMPoPmlGhDEJIs9mNkLBJL9JI37rLUIG2jCKRCBIlgmN5jsR%2BJlZF9ryckiVGlJSwZzeEHBfXim0%2F8c6NsZ5DKW753R49pSjUYTESsg6Ap0HJfyMIK1ewG9nq7e8%2FbrdOH1NpvJd9OVzS780HWSPoKjTJrZF27vzo%2BLQvENrFdrpOShGvBiPHGsE36sYFHmMvLzp6opkdck8VLbcRlJySyVwgQE9VM9TUXLjZz9kOus3QAkT3MqS1mo6ClnQA0jME39qrgoPs8joL6hCAHFjr0%2B7v1eLXeRHfvF62k95%2FQ6D2PeBadDzUVekiBv%2Frd4FdH1Ag3sp0JPvLAckb4PTVOg35cgQWMLWQp74GOqUBPONDTmMbLdDCl26gtyjROy15ruq6CixCrQW4dCN8Gp%2BPdp3n4IqmUTqpYGaNnIGRY9r4THA45YhXNEW6W2lmSax%2FB7R%2FierMI1DEhJhHbovKMHUnzjlG380BcXyu65PQjFEzZKmxf2q4RhbPO%2BeFZ0tlw1PzhBQBCSExxIz2Epg4DWQIRj1CIy3A%2FKnDYaRBrNQsF5OT4w4%2Fc0EI1jaj7g17iEwf&X-Amz-Signature=5b0e29c76ce7fe1d2cde6caf43c2799b064a0c48532311120108c71cc8b9bdc6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRLIJMZZ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSRErUMEr38nz4M9UKcebJuHJ5vS39QzYGGajaZeYe2AiEApVN0gT5NgstxBWniPOL3XCxF8pExUjpdVIxFdG3bM3Eq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDKE7Udkh5zfBmXj0cSrcA1Mj4CKPwJUc3kuR%2FGXGfowV1jHaqh6uEOBPhZ3qxMz8tjicKEpSUOokE%2Fi79qbEn%2FwZxhQYKNloYSRMXJtkWjAIk6qxWnCPTfnohfZ5iJ1TcmW8amj2kMOm8Q9TH0lPNYQM43dawj06DCNtChmvLaoc9JvGt9Y%2BEegY993qLiUmcle64FQ%2FsYG2lwXG8tb6jq%2Fj7en%2F3ihyU5DKWzCMra5kSFxvZbNwacGCBIrhHryxJfXn9iwRDB%2Fcl5Lg8Y3HYSQJL5jZP0VaOyBGxOIqCiSm%2FQXDEmHpMPoPmlGhDEJIs9mNkLBJL9JI37rLUIG2jCKRCBIlgmN5jsR%2BJlZF9ryckiVGlJSwZzeEHBfXim0%2F8c6NsZ5DKW753R49pSjUYTESsg6Ap0HJfyMIK1ewG9nq7e8%2FbrdOH1NpvJd9OVzS780HWSPoKjTJrZF27vzo%2BLQvENrFdrpOShGvBiPHGsE36sYFHmMvLzp6opkdck8VLbcRlJySyVwgQE9VM9TUXLjZz9kOus3QAkT3MqS1mo6ClnQA0jME39qrgoPs8joL6hCAHFjr0%2B7v1eLXeRHfvF62k95%2FQ6D2PeBadDzUVekiBv%2Frd4FdH1Ag3sp0JPvLAckb4PTVOg35cgQWMLWQp74GOqUBPONDTmMbLdDCl26gtyjROy15ruq6CixCrQW4dCN8Gp%2BPdp3n4IqmUTqpYGaNnIGRY9r4THA45YhXNEW6W2lmSax%2FB7R%2FierMI1DEhJhHbovKMHUnzjlG380BcXyu65PQjFEzZKmxf2q4RhbPO%2BeFZ0tlw1PzhBQBCSExxIz2Epg4DWQIRj1CIy3A%2FKnDYaRBrNQsF5OT4w4%2Fc0EI1jaj7g17iEwf&X-Amz-Signature=a1ccf8173c0079fe8fb953410f9581846d597edd27917d9fd45dd7881f95a104&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
