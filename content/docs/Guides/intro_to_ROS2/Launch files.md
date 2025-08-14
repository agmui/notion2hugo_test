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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNEFO3K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIDZb35nSY5B1DimqS5caaP%2BhZRdnm7brmwvycLY%2B1%2FThAiEA9%2Bent4VqDO6JYRoeeXP14wPmDYfUsOcpqQxC0sh3Ya8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDyTjLpS5Wc0UscsKSrcA9aQXn9yagJcKlGQafTl2XJHEJXr%2BB8iMXJF6e9ORpsgu0dzls3uWaS6sVrKfPw6V6%2FKYZEGmF73OpygXrXuo%2By1wYa2ZoOyVz1Sa36TnOForYg0waiKefaw3m5lyr8INx4V9qwWmSS%2Fhj%2FB5hZV7IGlVbkekkDp2wbYKzWfp7ntMtkDttKIR7%2F77pwvpIf7YnyCJoooc4V9lQT%2BeNmEiPgkmW%2BKFIsiy3oq5uRKAmhRyZaA1%2BEYOVec1sSds1DuSo%2Bft6rCZWg%2FpXqi6jfcnHIuNWKi%2FYJ5rEpNZ3lq9HbVSDWcXz9bpx8MX7AWZO5OXTxGsGBum%2BwO6j8zhrWf5H6Qo5Fy%2FBnt5r3vjfilZEeTGBy%2Bdl%2FYLEBBA2760kh3VDOFQvAAjjeny5YMd32CwcCUx9JraiEUQnsO4fzStPlVVVFBeSBiG7g9m3WIsoJ%2F5c5glQnJokbGTLTQXe8eP0iSJ0kWiGjtcUmwjhEB55iOnJCJ0nDdC5lyqAYFRsvpr522sI4NsyOkvqTuNCxp5ak6PDnkMqxQBVgrWKWqFbPUe05xtSApmVZhhVdngCOWcOUUVj%2FqZSVAg1Z46JOIylp3SzHbCoFzeB4%2B7NVQL7cACXfDmveMIwI%2F1FGoMJO0%2BcQGOqUBAF79hOaz4pO5xrkL%2BrTUx7ep61xbLRQCue54wb621b2pyBZYgpfy5euv74RMyeRMW0sBS1RZaPCnYa0mEhf7nqm8nqfTlc2XikWC5jH%2BbVRgc0ak4Nev22IOPE9P6M7Udr4Zr08v6SeWBMgu%2F7sToiVhMbb3Pgh8wPt%2FKMCCw3g1NPmYpTrxlogXgyN2NC5aB8MZboqub0bHMGjlzOXx4wzWhyDJ&X-Amz-Signature=6fed68ffabe09ce25fb1c2cd3a24e2e3251250785248ac4bfe3fffc877ce75fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNEFO3K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIDZb35nSY5B1DimqS5caaP%2BhZRdnm7brmwvycLY%2B1%2FThAiEA9%2Bent4VqDO6JYRoeeXP14wPmDYfUsOcpqQxC0sh3Ya8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDyTjLpS5Wc0UscsKSrcA9aQXn9yagJcKlGQafTl2XJHEJXr%2BB8iMXJF6e9ORpsgu0dzls3uWaS6sVrKfPw6V6%2FKYZEGmF73OpygXrXuo%2By1wYa2ZoOyVz1Sa36TnOForYg0waiKefaw3m5lyr8INx4V9qwWmSS%2Fhj%2FB5hZV7IGlVbkekkDp2wbYKzWfp7ntMtkDttKIR7%2F77pwvpIf7YnyCJoooc4V9lQT%2BeNmEiPgkmW%2BKFIsiy3oq5uRKAmhRyZaA1%2BEYOVec1sSds1DuSo%2Bft6rCZWg%2FpXqi6jfcnHIuNWKi%2FYJ5rEpNZ3lq9HbVSDWcXz9bpx8MX7AWZO5OXTxGsGBum%2BwO6j8zhrWf5H6Qo5Fy%2FBnt5r3vjfilZEeTGBy%2Bdl%2FYLEBBA2760kh3VDOFQvAAjjeny5YMd32CwcCUx9JraiEUQnsO4fzStPlVVVFBeSBiG7g9m3WIsoJ%2F5c5glQnJokbGTLTQXe8eP0iSJ0kWiGjtcUmwjhEB55iOnJCJ0nDdC5lyqAYFRsvpr522sI4NsyOkvqTuNCxp5ak6PDnkMqxQBVgrWKWqFbPUe05xtSApmVZhhVdngCOWcOUUVj%2FqZSVAg1Z46JOIylp3SzHbCoFzeB4%2B7NVQL7cACXfDmveMIwI%2F1FGoMJO0%2BcQGOqUBAF79hOaz4pO5xrkL%2BrTUx7ep61xbLRQCue54wb621b2pyBZYgpfy5euv74RMyeRMW0sBS1RZaPCnYa0mEhf7nqm8nqfTlc2XikWC5jH%2BbVRgc0ak4Nev22IOPE9P6M7Udr4Zr08v6SeWBMgu%2F7sToiVhMbb3Pgh8wPt%2FKMCCw3g1NPmYpTrxlogXgyN2NC5aB8MZboqub0bHMGjlzOXx4wzWhyDJ&X-Amz-Signature=d569b2cbef32358b25c9814e94de651fb0ee95b310555cdf984f73366800d9b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNEFO3K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIDZb35nSY5B1DimqS5caaP%2BhZRdnm7brmwvycLY%2B1%2FThAiEA9%2Bent4VqDO6JYRoeeXP14wPmDYfUsOcpqQxC0sh3Ya8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDyTjLpS5Wc0UscsKSrcA9aQXn9yagJcKlGQafTl2XJHEJXr%2BB8iMXJF6e9ORpsgu0dzls3uWaS6sVrKfPw6V6%2FKYZEGmF73OpygXrXuo%2By1wYa2ZoOyVz1Sa36TnOForYg0waiKefaw3m5lyr8INx4V9qwWmSS%2Fhj%2FB5hZV7IGlVbkekkDp2wbYKzWfp7ntMtkDttKIR7%2F77pwvpIf7YnyCJoooc4V9lQT%2BeNmEiPgkmW%2BKFIsiy3oq5uRKAmhRyZaA1%2BEYOVec1sSds1DuSo%2Bft6rCZWg%2FpXqi6jfcnHIuNWKi%2FYJ5rEpNZ3lq9HbVSDWcXz9bpx8MX7AWZO5OXTxGsGBum%2BwO6j8zhrWf5H6Qo5Fy%2FBnt5r3vjfilZEeTGBy%2Bdl%2FYLEBBA2760kh3VDOFQvAAjjeny5YMd32CwcCUx9JraiEUQnsO4fzStPlVVVFBeSBiG7g9m3WIsoJ%2F5c5glQnJokbGTLTQXe8eP0iSJ0kWiGjtcUmwjhEB55iOnJCJ0nDdC5lyqAYFRsvpr522sI4NsyOkvqTuNCxp5ak6PDnkMqxQBVgrWKWqFbPUe05xtSApmVZhhVdngCOWcOUUVj%2FqZSVAg1Z46JOIylp3SzHbCoFzeB4%2B7NVQL7cACXfDmveMIwI%2F1FGoMJO0%2BcQGOqUBAF79hOaz4pO5xrkL%2BrTUx7ep61xbLRQCue54wb621b2pyBZYgpfy5euv74RMyeRMW0sBS1RZaPCnYa0mEhf7nqm8nqfTlc2XikWC5jH%2BbVRgc0ak4Nev22IOPE9P6M7Udr4Zr08v6SeWBMgu%2F7sToiVhMbb3Pgh8wPt%2FKMCCw3g1NPmYpTrxlogXgyN2NC5aB8MZboqub0bHMGjlzOXx4wzWhyDJ&X-Amz-Signature=5603208c302c290fe7ad1f040c25a2a4259301f5a808601817ae0d4d2bab8578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
