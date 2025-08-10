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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNOXAKVP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMmRyfqNCp4RZ4N7tSfN%2BFjbZvdoUl2GwqCXsu4vrOdAIgfC5mNjjn4uL2eCUmZkO2JkwoeZCigdKuzb4G%2FKtrToAqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2F%2BveNozqP6eapjyrcA1rk5gC0PlfE3Oi%2BPk%2BuQqJuQCwjoZxPuVWZzmCG5bAUoH5e8Y4za2o1oIQxDIHGeheEQLvRLL%2BnyFeDKmB63wy0DMCVHTRoJyrETiOgv7N8EwnLRBcxII%2BNP61%2BH2F7DOVTbxb%2FjiWICHg0JYr5oQuIh7RmtefMBZ0YdVb2hvRr2k%2B0JersOdpc%2BwLT2o5zwV87cOfKXUM3L8%2B6qg8mh8cVGt2Z0RlsxeoMPz%2BvEqGKi%2FwhL%2Fsmgl5q8AU2DK0utGMKS9qtztBp6hGQxnPfxYXsfa7twDXqgMuUzZ7PstmqUks%2BshYwetKzaArspd%2BmzizXij99b32rWLin%2BHMpNhK3%2FTOj6Gu7CNUHZDJVGeiKTZK2LvDF%2Fzz6jFMBwLm6zf2ftBypGNEBURtYYjGpu78aAJPcDqLjfYyWnw1VfhOikjUjX540IEHdqw4SOi3znwws5bNTogRcTLz6wGf8%2FOTt9zT%2BwoNvtg8gqjh%2BZ%2Bmg2wwaoJL9zDMxHPBiIjL9BD0wCHFx%2F8TDA3QbzqDTcTI%2B%2BbNR1Obocbc6HgEJU0WuFlURDqINbO3orb474qPjDIgAP3IvIHJfbcRVZ2ILb2GIDap76Adpy0fDU1TX0T4U%2B8RffGfcXTUNpE2nMPD04MQGOqUBJi59xwgotSIrEdoCCkKweUHIPWvchirSEQMJFBo3X4KrAF1TPcNvMgsr1EfKDGE0OCBaDCZiS4ya9vpQNL4O1wJT4ACiHykwkVXNh4jqjmPBe0hdY5OieTkGwT2b1rkQw0EDfNZSvikRShFBU8ER0xNLWmLltguueF6UOi3h2kDvV2pFkBo%2Fzdob5cZUUqyJye5eFqziZ86ynNIatRWfdg0NXhC%2B&X-Amz-Signature=fe3bfaeb3bc1a6786c10a31f834b746d94b0873d4128a8aa2ca8473452ce2c26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNOXAKVP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMmRyfqNCp4RZ4N7tSfN%2BFjbZvdoUl2GwqCXsu4vrOdAIgfC5mNjjn4uL2eCUmZkO2JkwoeZCigdKuzb4G%2FKtrToAqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2F%2BveNozqP6eapjyrcA1rk5gC0PlfE3Oi%2BPk%2BuQqJuQCwjoZxPuVWZzmCG5bAUoH5e8Y4za2o1oIQxDIHGeheEQLvRLL%2BnyFeDKmB63wy0DMCVHTRoJyrETiOgv7N8EwnLRBcxII%2BNP61%2BH2F7DOVTbxb%2FjiWICHg0JYr5oQuIh7RmtefMBZ0YdVb2hvRr2k%2B0JersOdpc%2BwLT2o5zwV87cOfKXUM3L8%2B6qg8mh8cVGt2Z0RlsxeoMPz%2BvEqGKi%2FwhL%2Fsmgl5q8AU2DK0utGMKS9qtztBp6hGQxnPfxYXsfa7twDXqgMuUzZ7PstmqUks%2BshYwetKzaArspd%2BmzizXij99b32rWLin%2BHMpNhK3%2FTOj6Gu7CNUHZDJVGeiKTZK2LvDF%2Fzz6jFMBwLm6zf2ftBypGNEBURtYYjGpu78aAJPcDqLjfYyWnw1VfhOikjUjX540IEHdqw4SOi3znwws5bNTogRcTLz6wGf8%2FOTt9zT%2BwoNvtg8gqjh%2BZ%2Bmg2wwaoJL9zDMxHPBiIjL9BD0wCHFx%2F8TDA3QbzqDTcTI%2B%2BbNR1Obocbc6HgEJU0WuFlURDqINbO3orb474qPjDIgAP3IvIHJfbcRVZ2ILb2GIDap76Adpy0fDU1TX0T4U%2B8RffGfcXTUNpE2nMPD04MQGOqUBJi59xwgotSIrEdoCCkKweUHIPWvchirSEQMJFBo3X4KrAF1TPcNvMgsr1EfKDGE0OCBaDCZiS4ya9vpQNL4O1wJT4ACiHykwkVXNh4jqjmPBe0hdY5OieTkGwT2b1rkQw0EDfNZSvikRShFBU8ER0xNLWmLltguueF6UOi3h2kDvV2pFkBo%2Fzdob5cZUUqyJye5eFqziZ86ynNIatRWfdg0NXhC%2B&X-Amz-Signature=c9376a0b0783cf44f4aac9869c6955190e9c2ef2fa751f081b9a391bcaaa5eb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNOXAKVP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMmRyfqNCp4RZ4N7tSfN%2BFjbZvdoUl2GwqCXsu4vrOdAIgfC5mNjjn4uL2eCUmZkO2JkwoeZCigdKuzb4G%2FKtrToAqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2F%2BveNozqP6eapjyrcA1rk5gC0PlfE3Oi%2BPk%2BuQqJuQCwjoZxPuVWZzmCG5bAUoH5e8Y4za2o1oIQxDIHGeheEQLvRLL%2BnyFeDKmB63wy0DMCVHTRoJyrETiOgv7N8EwnLRBcxII%2BNP61%2BH2F7DOVTbxb%2FjiWICHg0JYr5oQuIh7RmtefMBZ0YdVb2hvRr2k%2B0JersOdpc%2BwLT2o5zwV87cOfKXUM3L8%2B6qg8mh8cVGt2Z0RlsxeoMPz%2BvEqGKi%2FwhL%2Fsmgl5q8AU2DK0utGMKS9qtztBp6hGQxnPfxYXsfa7twDXqgMuUzZ7PstmqUks%2BshYwetKzaArspd%2BmzizXij99b32rWLin%2BHMpNhK3%2FTOj6Gu7CNUHZDJVGeiKTZK2LvDF%2Fzz6jFMBwLm6zf2ftBypGNEBURtYYjGpu78aAJPcDqLjfYyWnw1VfhOikjUjX540IEHdqw4SOi3znwws5bNTogRcTLz6wGf8%2FOTt9zT%2BwoNvtg8gqjh%2BZ%2Bmg2wwaoJL9zDMxHPBiIjL9BD0wCHFx%2F8TDA3QbzqDTcTI%2B%2BbNR1Obocbc6HgEJU0WuFlURDqINbO3orb474qPjDIgAP3IvIHJfbcRVZ2ILb2GIDap76Adpy0fDU1TX0T4U%2B8RffGfcXTUNpE2nMPD04MQGOqUBJi59xwgotSIrEdoCCkKweUHIPWvchirSEQMJFBo3X4KrAF1TPcNvMgsr1EfKDGE0OCBaDCZiS4ya9vpQNL4O1wJT4ACiHykwkVXNh4jqjmPBe0hdY5OieTkGwT2b1rkQw0EDfNZSvikRShFBU8ER0xNLWmLltguueF6UOi3h2kDvV2pFkBo%2Fzdob5cZUUqyJye5eFqziZ86ynNIatRWfdg0NXhC%2B&X-Amz-Signature=017ef8d0c8aa0a6f12c1939b1588f3f581eb0c0412e59556de187c449587f55a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
