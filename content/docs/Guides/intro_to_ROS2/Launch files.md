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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGVATQKU%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDjZwu2NmFDRkarUq9rJLgQVRo0mDq%2Fgu9e2fPmCjpC6QIgB8GEQqLmRtb3yjlGC3PVJnVCf0U%2FbNZI6EAcCydTltsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPz49WZ31fHrzx8fdCrcA7QP32%2ByXopoBoTJMZbt2JlsnQ1FfbmiMPlDRnQWPzmToeJ6Xk0t8QWW5EknVdMsAWudnrY%2F0%2FAjL%2BxVu22t%2Fh1VIiujZh723hUepjK8Ec7%2BN%2BAHrTgjs6Kc3FPV%2FHcTOoHS9Xmups3J0az0rOdUPOyAO98Ow5dvmvhJ%2BkLBjjQOr6YUCBx%2Frloe1DzkTKqh75ZktUnyNGy07FkkmUnukyJQxc9Ldift%2FOzsRgOeEYJW3WSa99ITom9IAKWeeZEgZY30JzhHHem8zLd1LnAsPS207FI2T1E5dg4Nfw2y11MU5EoqUnAruhdC0kJcjjiHu5Mog4p69Z%2BeeTcJQTayha49d8FCE9H28AxE280d66F0zyG%2FKyuKNZd2Fc%2FMNGitLC%2Frmz93%2Flu8ZHJXbnPKxFiyodSdFCAd2L3HNIlXPa8xtNdq23MCM48VR1hYIKyYM5zt8boqOnc6vCjCppJYH8pT6VUBHhOGwloSwLfShsKQa84GnqQEbDl9eSFv860XOn82fqMAz9lopLgn5n6YHxQlfjnqC7wjN8EHUBniY71lRXczKXcokqGS5DyA5HsREpVFGSZ95jzFLmc0UZGn2W4%2BDBpdQDHr%2BhPbCZz3kjvhHPmG3qrYjAMziyMuMLaP9cEGOqUB7fKd5xGyQeK95TKJJALBLDK%2FEtwttdtMxWiWEcK5ngknNRCTyNOnLjZMKOhBcC9TNgdK1MilKyF1JJZwvLx74Z%2BGuhFk90VEkk0r0eSS6P%2B5ZpRZKHLV8dWTdoVFiSRHTJNRD6L%2BBlKLxacjOt20AZ%2B%2Fw%2BEO%2F3pyK%2FVfanNuwqGaeXo2VFLUVTsfL3A6F9MxmErGPN0GHzny9P4YBohP%2Fvg1I3xX&X-Amz-Signature=8dc654581cb5c6db3348d68c9f0db2a6c7d124674cd1191119f2122866fdf972&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGVATQKU%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDjZwu2NmFDRkarUq9rJLgQVRo0mDq%2Fgu9e2fPmCjpC6QIgB8GEQqLmRtb3yjlGC3PVJnVCf0U%2FbNZI6EAcCydTltsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPz49WZ31fHrzx8fdCrcA7QP32%2ByXopoBoTJMZbt2JlsnQ1FfbmiMPlDRnQWPzmToeJ6Xk0t8QWW5EknVdMsAWudnrY%2F0%2FAjL%2BxVu22t%2Fh1VIiujZh723hUepjK8Ec7%2BN%2BAHrTgjs6Kc3FPV%2FHcTOoHS9Xmups3J0az0rOdUPOyAO98Ow5dvmvhJ%2BkLBjjQOr6YUCBx%2Frloe1DzkTKqh75ZktUnyNGy07FkkmUnukyJQxc9Ldift%2FOzsRgOeEYJW3WSa99ITom9IAKWeeZEgZY30JzhHHem8zLd1LnAsPS207FI2T1E5dg4Nfw2y11MU5EoqUnAruhdC0kJcjjiHu5Mog4p69Z%2BeeTcJQTayha49d8FCE9H28AxE280d66F0zyG%2FKyuKNZd2Fc%2FMNGitLC%2Frmz93%2Flu8ZHJXbnPKxFiyodSdFCAd2L3HNIlXPa8xtNdq23MCM48VR1hYIKyYM5zt8boqOnc6vCjCppJYH8pT6VUBHhOGwloSwLfShsKQa84GnqQEbDl9eSFv860XOn82fqMAz9lopLgn5n6YHxQlfjnqC7wjN8EHUBniY71lRXczKXcokqGS5DyA5HsREpVFGSZ95jzFLmc0UZGn2W4%2BDBpdQDHr%2BhPbCZz3kjvhHPmG3qrYjAMziyMuMLaP9cEGOqUB7fKd5xGyQeK95TKJJALBLDK%2FEtwttdtMxWiWEcK5ngknNRCTyNOnLjZMKOhBcC9TNgdK1MilKyF1JJZwvLx74Z%2BGuhFk90VEkk0r0eSS6P%2B5ZpRZKHLV8dWTdoVFiSRHTJNRD6L%2BBlKLxacjOt20AZ%2B%2Fw%2BEO%2F3pyK%2FVfanNuwqGaeXo2VFLUVTsfL3A6F9MxmErGPN0GHzny9P4YBohP%2Fvg1I3xX&X-Amz-Signature=91b7f12821d5d8dec79c086d153f5baee65c4a7e1bc9d71fe8d8b7626e755872&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGVATQKU%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDjZwu2NmFDRkarUq9rJLgQVRo0mDq%2Fgu9e2fPmCjpC6QIgB8GEQqLmRtb3yjlGC3PVJnVCf0U%2FbNZI6EAcCydTltsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPz49WZ31fHrzx8fdCrcA7QP32%2ByXopoBoTJMZbt2JlsnQ1FfbmiMPlDRnQWPzmToeJ6Xk0t8QWW5EknVdMsAWudnrY%2F0%2FAjL%2BxVu22t%2Fh1VIiujZh723hUepjK8Ec7%2BN%2BAHrTgjs6Kc3FPV%2FHcTOoHS9Xmups3J0az0rOdUPOyAO98Ow5dvmvhJ%2BkLBjjQOr6YUCBx%2Frloe1DzkTKqh75ZktUnyNGy07FkkmUnukyJQxc9Ldift%2FOzsRgOeEYJW3WSa99ITom9IAKWeeZEgZY30JzhHHem8zLd1LnAsPS207FI2T1E5dg4Nfw2y11MU5EoqUnAruhdC0kJcjjiHu5Mog4p69Z%2BeeTcJQTayha49d8FCE9H28AxE280d66F0zyG%2FKyuKNZd2Fc%2FMNGitLC%2Frmz93%2Flu8ZHJXbnPKxFiyodSdFCAd2L3HNIlXPa8xtNdq23MCM48VR1hYIKyYM5zt8boqOnc6vCjCppJYH8pT6VUBHhOGwloSwLfShsKQa84GnqQEbDl9eSFv860XOn82fqMAz9lopLgn5n6YHxQlfjnqC7wjN8EHUBniY71lRXczKXcokqGS5DyA5HsREpVFGSZ95jzFLmc0UZGn2W4%2BDBpdQDHr%2BhPbCZz3kjvhHPmG3qrYjAMziyMuMLaP9cEGOqUB7fKd5xGyQeK95TKJJALBLDK%2FEtwttdtMxWiWEcK5ngknNRCTyNOnLjZMKOhBcC9TNgdK1MilKyF1JJZwvLx74Z%2BGuhFk90VEkk0r0eSS6P%2B5ZpRZKHLV8dWTdoVFiSRHTJNRD6L%2BBlKLxacjOt20AZ%2B%2Fw%2BEO%2F3pyK%2FVfanNuwqGaeXo2VFLUVTsfL3A6F9MxmErGPN0GHzny9P4YBohP%2Fvg1I3xX&X-Amz-Signature=7859ed322186a11c159deb43c3a00e85000ffa04ad382dd9473daaa9bb9fb241&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
