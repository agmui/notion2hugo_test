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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS7LPJCC%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRxUZui0%2F8%2Be31S4k7WRQERiv5LdA32g%2FxJIn%2FluwE0AiEAz8jmxEoRV9pKcIY9EKcUQUlPX0pZEna0e9B6XIjyE1wqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUHBPVhKkr52g9IdyrcA3gi8ydIJXXh8GOKHMjlaevsbUKOAdL6UXVl5%2FshIWR%2FhVRpXduXIy2d2HfsZepp0%2B32hLHs13qxcKKeC81m%2FJZr%2B7%2FLtrmqgDAL%2BkbgLVDH%2BjZpeXejW4267isoxRBuppb2pZ%2FV12TbMCdPHc9FmYHs03%2F7mFzndnodWUKJe4Eh6Av2n0%2FjXPSelMXrw0%2FEpFZxh0w%2F%2F3bxQEbGiBi2SuPQqJ9RiTIK4%2Bn3Y8YNTDpGjeJ0JxmOW8f%2BWgfRnCJlWoIzY04SioQzbkJI0EwBCAFkLmd1MNelH6Y0UttTNtfIvAfSdnBh4wQpOcchY5iL18QyMS33O27x8WjCh2dCdkan8hrSpm4rfaauKlr9srTub1X42jUG2fIE0vj4sT%2BhdMLB6IViLR25w1ALogHHyVCb1dDWkh1JCrhl0c4pJK38Zm%2B34yoA0jLA3u42PJIMo8uAeO%2FjWBuVfRpIhQz7QNd95hd%2FxSmdEoKyxIPvJPl5F78dG5Qd8WGi40FTdbSekIQp6HLrbC7yzsgEHW6Civuz6H2yUomMLVBfMsU%2FDyYFTRyg9LOWd0SJou9AddhWww3sr6AXh7qJyObCU3TIef7LhXPuCRwoNPRYo0thADGxAjIm6i2pr2vgfjb6MNKj%2BMAGOqUBA4%2F0yKj5DFhPRrJo4KWfwuAwV93HPtVeAT5E2sNk4aTjEjBoq50m0fXZVA83Wjfypza2zGf9QPs9%2BCDpRe%2BZaH12xpSlfcK8G1X64dU%2FyRojkOz48%2FPmohCKqlB7JMdbRJG4geFf%2FWp5H2P8uK1a6M9tl3K2PxWdCHSRLmKao6ju1ctjFnmA5hC2vF79ZaXpqh9CmGdaAbaFEwsa0ky1fwZjkU4q&X-Amz-Signature=6429b865a90056db07bbfd7a4c91cd65884b7362f707d88800a3f5aca33cbd79&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS7LPJCC%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRxUZui0%2F8%2Be31S4k7WRQERiv5LdA32g%2FxJIn%2FluwE0AiEAz8jmxEoRV9pKcIY9EKcUQUlPX0pZEna0e9B6XIjyE1wqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUHBPVhKkr52g9IdyrcA3gi8ydIJXXh8GOKHMjlaevsbUKOAdL6UXVl5%2FshIWR%2FhVRpXduXIy2d2HfsZepp0%2B32hLHs13qxcKKeC81m%2FJZr%2B7%2FLtrmqgDAL%2BkbgLVDH%2BjZpeXejW4267isoxRBuppb2pZ%2FV12TbMCdPHc9FmYHs03%2F7mFzndnodWUKJe4Eh6Av2n0%2FjXPSelMXrw0%2FEpFZxh0w%2F%2F3bxQEbGiBi2SuPQqJ9RiTIK4%2Bn3Y8YNTDpGjeJ0JxmOW8f%2BWgfRnCJlWoIzY04SioQzbkJI0EwBCAFkLmd1MNelH6Y0UttTNtfIvAfSdnBh4wQpOcchY5iL18QyMS33O27x8WjCh2dCdkan8hrSpm4rfaauKlr9srTub1X42jUG2fIE0vj4sT%2BhdMLB6IViLR25w1ALogHHyVCb1dDWkh1JCrhl0c4pJK38Zm%2B34yoA0jLA3u42PJIMo8uAeO%2FjWBuVfRpIhQz7QNd95hd%2FxSmdEoKyxIPvJPl5F78dG5Qd8WGi40FTdbSekIQp6HLrbC7yzsgEHW6Civuz6H2yUomMLVBfMsU%2FDyYFTRyg9LOWd0SJou9AddhWww3sr6AXh7qJyObCU3TIef7LhXPuCRwoNPRYo0thADGxAjIm6i2pr2vgfjb6MNKj%2BMAGOqUBA4%2F0yKj5DFhPRrJo4KWfwuAwV93HPtVeAT5E2sNk4aTjEjBoq50m0fXZVA83Wjfypza2zGf9QPs9%2BCDpRe%2BZaH12xpSlfcK8G1X64dU%2FyRojkOz48%2FPmohCKqlB7JMdbRJG4geFf%2FWp5H2P8uK1a6M9tl3K2PxWdCHSRLmKao6ju1ctjFnmA5hC2vF79ZaXpqh9CmGdaAbaFEwsa0ky1fwZjkU4q&X-Amz-Signature=c420fb43ade01ea4ceef62ed8e399094bee5002291a09574459b768641c02632&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS7LPJCC%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRxUZui0%2F8%2Be31S4k7WRQERiv5LdA32g%2FxJIn%2FluwE0AiEAz8jmxEoRV9pKcIY9EKcUQUlPX0pZEna0e9B6XIjyE1wqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUHBPVhKkr52g9IdyrcA3gi8ydIJXXh8GOKHMjlaevsbUKOAdL6UXVl5%2FshIWR%2FhVRpXduXIy2d2HfsZepp0%2B32hLHs13qxcKKeC81m%2FJZr%2B7%2FLtrmqgDAL%2BkbgLVDH%2BjZpeXejW4267isoxRBuppb2pZ%2FV12TbMCdPHc9FmYHs03%2F7mFzndnodWUKJe4Eh6Av2n0%2FjXPSelMXrw0%2FEpFZxh0w%2F%2F3bxQEbGiBi2SuPQqJ9RiTIK4%2Bn3Y8YNTDpGjeJ0JxmOW8f%2BWgfRnCJlWoIzY04SioQzbkJI0EwBCAFkLmd1MNelH6Y0UttTNtfIvAfSdnBh4wQpOcchY5iL18QyMS33O27x8WjCh2dCdkan8hrSpm4rfaauKlr9srTub1X42jUG2fIE0vj4sT%2BhdMLB6IViLR25w1ALogHHyVCb1dDWkh1JCrhl0c4pJK38Zm%2B34yoA0jLA3u42PJIMo8uAeO%2FjWBuVfRpIhQz7QNd95hd%2FxSmdEoKyxIPvJPl5F78dG5Qd8WGi40FTdbSekIQp6HLrbC7yzsgEHW6Civuz6H2yUomMLVBfMsU%2FDyYFTRyg9LOWd0SJou9AddhWww3sr6AXh7qJyObCU3TIef7LhXPuCRwoNPRYo0thADGxAjIm6i2pr2vgfjb6MNKj%2BMAGOqUBA4%2F0yKj5DFhPRrJo4KWfwuAwV93HPtVeAT5E2sNk4aTjEjBoq50m0fXZVA83Wjfypza2zGf9QPs9%2BCDpRe%2BZaH12xpSlfcK8G1X64dU%2FyRojkOz48%2FPmohCKqlB7JMdbRJG4geFf%2FWp5H2P8uK1a6M9tl3K2PxWdCHSRLmKao6ju1ctjFnmA5hC2vF79ZaXpqh9CmGdaAbaFEwsa0ky1fwZjkU4q&X-Amz-Signature=1479b3cbc5d9d89835403dcffe3881649be39fd8789ba1fe09c96f87d66e706f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
