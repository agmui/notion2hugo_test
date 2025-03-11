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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO7NUVDF%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDfktNvvF6WzIN8iFzkckv4WpXriEkxAx2zD0zx9VZudgIhAK%2FjGtDF3lGD3tzLov8e7PXN5fEJLgPG72tGhpTsFwIMKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyra5MBwQhgWqfBqfgq3AN0nxeeyG5GnjoE5ml%2FblARoZAXiXhw2biXFfXoaHn53fO7qM%2BgHGAd8SY0F7r951nmdC8Q7dj6O%2BjrCYy7m16CIqKlnkR2L8OWl9ldLiWvq8wfYLrdB1owG5fNzmH6KCM8ZJXgTqMKFhcRxSk2mCdm30Jw1yM1MdOqyqA0b01gIIlA9kNS%2Fq%2BCX4kBPMAHOlIZigMRHBY8TRgp%2FPMhj4gDfMp6rwMSmDukxB%2FWm5vBQkmfc1ffpXNpnI49MuQHffKGUDsbogO2y%2BQ6CwhMTGTjrWXIe%2BzulwlI2mSOf6TqgHivizxGnUlDpbG4b3DqfMi5fTssuguhTaP4H6t0G4x3k0t9XkTncu2pd546o6aBdSuiuS1%2B6Kss7%2BgHx2dwUGc%2B2ICQ7TpZBhVb5yO2wIbS3gSMeWen1iP4DVpmpZhcbEb2SY2oF23h6nltxTiFHdRsHc79YLNUhSttokvqPdkNxFdfFXE4Wczc1aHnD2sR4pGcLnDlk9wepUxGrYOnrNC7rS5ZNC4T4KVURBXGACUsL7GOe0GjCzWtBoAyqbOow%2FlOaC8%2BZHNJbqsYlWF6WfI%2Bc1ECRTBd3inJpRZXpm4Z7jK6X%2F3rM0epOldCllhsCa1rzPwmQxLW1PDZYzDXzsG%2BBjqkAR6LanjvBtKdVvsht308oeXTKksGH%2BsjuB%2BP6wTi0a%2BE3xfhXYN5yVz4lF%2B3nWjQgSDsWlwPbwi0LUxS%2FFni5YTexFZ%2FjhR0Wg16Yu06utQUu%2Bl9u6PcUSzu535N6BEUsq9VDCgpRISog7OIEB5jc6Qq0MqRdY%2BGdoQ%2FLeqjeXg0TNgQPH1X22c7iiNOCSjLfiZLJJ2Zj%2BZRB1dZpY%2BTVndcCPXk&X-Amz-Signature=102dbdffa4fc4813160b7fddade1572e5bbb5a934695facceadd647ca267aea1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO7NUVDF%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDfktNvvF6WzIN8iFzkckv4WpXriEkxAx2zD0zx9VZudgIhAK%2FjGtDF3lGD3tzLov8e7PXN5fEJLgPG72tGhpTsFwIMKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyra5MBwQhgWqfBqfgq3AN0nxeeyG5GnjoE5ml%2FblARoZAXiXhw2biXFfXoaHn53fO7qM%2BgHGAd8SY0F7r951nmdC8Q7dj6O%2BjrCYy7m16CIqKlnkR2L8OWl9ldLiWvq8wfYLrdB1owG5fNzmH6KCM8ZJXgTqMKFhcRxSk2mCdm30Jw1yM1MdOqyqA0b01gIIlA9kNS%2Fq%2BCX4kBPMAHOlIZigMRHBY8TRgp%2FPMhj4gDfMp6rwMSmDukxB%2FWm5vBQkmfc1ffpXNpnI49MuQHffKGUDsbogO2y%2BQ6CwhMTGTjrWXIe%2BzulwlI2mSOf6TqgHivizxGnUlDpbG4b3DqfMi5fTssuguhTaP4H6t0G4x3k0t9XkTncu2pd546o6aBdSuiuS1%2B6Kss7%2BgHx2dwUGc%2B2ICQ7TpZBhVb5yO2wIbS3gSMeWen1iP4DVpmpZhcbEb2SY2oF23h6nltxTiFHdRsHc79YLNUhSttokvqPdkNxFdfFXE4Wczc1aHnD2sR4pGcLnDlk9wepUxGrYOnrNC7rS5ZNC4T4KVURBXGACUsL7GOe0GjCzWtBoAyqbOow%2FlOaC8%2BZHNJbqsYlWF6WfI%2Bc1ECRTBd3inJpRZXpm4Z7jK6X%2F3rM0epOldCllhsCa1rzPwmQxLW1PDZYzDXzsG%2BBjqkAR6LanjvBtKdVvsht308oeXTKksGH%2BsjuB%2BP6wTi0a%2BE3xfhXYN5yVz4lF%2B3nWjQgSDsWlwPbwi0LUxS%2FFni5YTexFZ%2FjhR0Wg16Yu06utQUu%2Bl9u6PcUSzu535N6BEUsq9VDCgpRISog7OIEB5jc6Qq0MqRdY%2BGdoQ%2FLeqjeXg0TNgQPH1X22c7iiNOCSjLfiZLJJ2Zj%2BZRB1dZpY%2BTVndcCPXk&X-Amz-Signature=2e915523911ac9a7677d2476b95feadbcc3f77876f1a20b2018262229ab53445&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO7NUVDF%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDfktNvvF6WzIN8iFzkckv4WpXriEkxAx2zD0zx9VZudgIhAK%2FjGtDF3lGD3tzLov8e7PXN5fEJLgPG72tGhpTsFwIMKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyra5MBwQhgWqfBqfgq3AN0nxeeyG5GnjoE5ml%2FblARoZAXiXhw2biXFfXoaHn53fO7qM%2BgHGAd8SY0F7r951nmdC8Q7dj6O%2BjrCYy7m16CIqKlnkR2L8OWl9ldLiWvq8wfYLrdB1owG5fNzmH6KCM8ZJXgTqMKFhcRxSk2mCdm30Jw1yM1MdOqyqA0b01gIIlA9kNS%2Fq%2BCX4kBPMAHOlIZigMRHBY8TRgp%2FPMhj4gDfMp6rwMSmDukxB%2FWm5vBQkmfc1ffpXNpnI49MuQHffKGUDsbogO2y%2BQ6CwhMTGTjrWXIe%2BzulwlI2mSOf6TqgHivizxGnUlDpbG4b3DqfMi5fTssuguhTaP4H6t0G4x3k0t9XkTncu2pd546o6aBdSuiuS1%2B6Kss7%2BgHx2dwUGc%2B2ICQ7TpZBhVb5yO2wIbS3gSMeWen1iP4DVpmpZhcbEb2SY2oF23h6nltxTiFHdRsHc79YLNUhSttokvqPdkNxFdfFXE4Wczc1aHnD2sR4pGcLnDlk9wepUxGrYOnrNC7rS5ZNC4T4KVURBXGACUsL7GOe0GjCzWtBoAyqbOow%2FlOaC8%2BZHNJbqsYlWF6WfI%2Bc1ECRTBd3inJpRZXpm4Z7jK6X%2F3rM0epOldCllhsCa1rzPwmQxLW1PDZYzDXzsG%2BBjqkAR6LanjvBtKdVvsht308oeXTKksGH%2BsjuB%2BP6wTi0a%2BE3xfhXYN5yVz4lF%2B3nWjQgSDsWlwPbwi0LUxS%2FFni5YTexFZ%2FjhR0Wg16Yu06utQUu%2Bl9u6PcUSzu535N6BEUsq9VDCgpRISog7OIEB5jc6Qq0MqRdY%2BGdoQ%2FLeqjeXg0TNgQPH1X22c7iiNOCSjLfiZLJJ2Zj%2BZRB1dZpY%2BTVndcCPXk&X-Amz-Signature=7a06cb39dfe6ba186b8d999a1be686c48b7e1258ccccfdbc800c1c122b03bb5c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
