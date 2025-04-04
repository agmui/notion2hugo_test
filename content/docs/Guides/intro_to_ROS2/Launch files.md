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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUTTVG5O%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwKeDY3IvMBNXIXqhVsHgivqi9XRISnKjjmjIUqrOjoAIgRI34VzgoXjqM0G79g%2FNSY1DXqqM%2BZJCZotZqiEKj6%2F0q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDEiWspuSf6j%2Bn7zsDSrcA9YLOyJXbxdrDKw2emcu5HpAgvqYbWilfgHThi%2F3uyMstOOVqilfZBNQlEeQTICCkNfBeLq7aqFK9N%2BglAKjOsv3JACAO%2Fzq83RZE%2FOG4qSXCwsE6Jf%2FXJLQN929LOUYqWgS6tAblXvcmNfyfgFx2I6BV3tQ83oJCj%2B5fP1mB7dcaf6UMxEV9siNdReHIbwo3Sgtx3zwLfc0aGAxm%2BqgnWsidt8Lj3bogB%2FQG%2F9lRPTF53rp0vtDJWVp%2BcfQixpK9x0%2BmlKZ1rLU2qKr9gyh5rwORZvmv0JC2%2Fb31hmKZy4hzvc%2F%2BAoDVKEogLzGwPnZ%2FSYH%2B7mFXQ56vP5hYV8RZuV1FvVKCr%2BIv69D0rPIMnCJQ5eOBvbt9tzh91MDO1MvqG21dDmXH3pilLv9KMA%2B4zFCukseDDtug4qqAWb6TE%2Bi3kx3bpAKecIpy2U8Fi8GHxY03bxrCostu%2FF%2FYbw9hqffsQIqExXNOLxZoQQkYMGoVBuCrSvPS0vor0ryL%2Fvj4%2Bmw4hPbsfZenLqHJ2JjJNzNHpLVL7YKg%2FlsWVD72GkoJn0hhIxtqn3KSAbgkL8545CIQp4BIRU7cV3uDlI4XmMFw2dNs10NUHbvDdAid0nULFo%2BlCtFAq0Zqf9wMIDuwL8GOqUBs5VQ6Um9PGwJzhimWG32yBZVoHtcVxEo4FO2r9kGayz4mpsyvsgHCWVHMu4inhpRYWwToRuU2rSYOYNcw%2BirMK35CxcyvIwDdJrmfWDmsoBiunB6BBll1%2BbX16KDgG3cxdW7E7ine9ujyVDSe%2FpCxQm3b%2FbmPSrVi07qEf3vemFWdWxuYxivzBUS%2Fl3uU9qBTTRjTy4xE5evtMpEhBeA6gA3yIId&X-Amz-Signature=0b36fe91f03b4897f95182fe42ceb09abd54f293390f33a10520d911465c4d6e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUTTVG5O%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwKeDY3IvMBNXIXqhVsHgivqi9XRISnKjjmjIUqrOjoAIgRI34VzgoXjqM0G79g%2FNSY1DXqqM%2BZJCZotZqiEKj6%2F0q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDEiWspuSf6j%2Bn7zsDSrcA9YLOyJXbxdrDKw2emcu5HpAgvqYbWilfgHThi%2F3uyMstOOVqilfZBNQlEeQTICCkNfBeLq7aqFK9N%2BglAKjOsv3JACAO%2Fzq83RZE%2FOG4qSXCwsE6Jf%2FXJLQN929LOUYqWgS6tAblXvcmNfyfgFx2I6BV3tQ83oJCj%2B5fP1mB7dcaf6UMxEV9siNdReHIbwo3Sgtx3zwLfc0aGAxm%2BqgnWsidt8Lj3bogB%2FQG%2F9lRPTF53rp0vtDJWVp%2BcfQixpK9x0%2BmlKZ1rLU2qKr9gyh5rwORZvmv0JC2%2Fb31hmKZy4hzvc%2F%2BAoDVKEogLzGwPnZ%2FSYH%2B7mFXQ56vP5hYV8RZuV1FvVKCr%2BIv69D0rPIMnCJQ5eOBvbt9tzh91MDO1MvqG21dDmXH3pilLv9KMA%2B4zFCukseDDtug4qqAWb6TE%2Bi3kx3bpAKecIpy2U8Fi8GHxY03bxrCostu%2FF%2FYbw9hqffsQIqExXNOLxZoQQkYMGoVBuCrSvPS0vor0ryL%2Fvj4%2Bmw4hPbsfZenLqHJ2JjJNzNHpLVL7YKg%2FlsWVD72GkoJn0hhIxtqn3KSAbgkL8545CIQp4BIRU7cV3uDlI4XmMFw2dNs10NUHbvDdAid0nULFo%2BlCtFAq0Zqf9wMIDuwL8GOqUBs5VQ6Um9PGwJzhimWG32yBZVoHtcVxEo4FO2r9kGayz4mpsyvsgHCWVHMu4inhpRYWwToRuU2rSYOYNcw%2BirMK35CxcyvIwDdJrmfWDmsoBiunB6BBll1%2BbX16KDgG3cxdW7E7ine9ujyVDSe%2FpCxQm3b%2FbmPSrVi07qEf3vemFWdWxuYxivzBUS%2Fl3uU9qBTTRjTy4xE5evtMpEhBeA6gA3yIId&X-Amz-Signature=f59619960fc00b1916a28bf26697fc10f73d3947dc14fbff98ca67a93522b234&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUTTVG5O%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwKeDY3IvMBNXIXqhVsHgivqi9XRISnKjjmjIUqrOjoAIgRI34VzgoXjqM0G79g%2FNSY1DXqqM%2BZJCZotZqiEKj6%2F0q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDEiWspuSf6j%2Bn7zsDSrcA9YLOyJXbxdrDKw2emcu5HpAgvqYbWilfgHThi%2F3uyMstOOVqilfZBNQlEeQTICCkNfBeLq7aqFK9N%2BglAKjOsv3JACAO%2Fzq83RZE%2FOG4qSXCwsE6Jf%2FXJLQN929LOUYqWgS6tAblXvcmNfyfgFx2I6BV3tQ83oJCj%2B5fP1mB7dcaf6UMxEV9siNdReHIbwo3Sgtx3zwLfc0aGAxm%2BqgnWsidt8Lj3bogB%2FQG%2F9lRPTF53rp0vtDJWVp%2BcfQixpK9x0%2BmlKZ1rLU2qKr9gyh5rwORZvmv0JC2%2Fb31hmKZy4hzvc%2F%2BAoDVKEogLzGwPnZ%2FSYH%2B7mFXQ56vP5hYV8RZuV1FvVKCr%2BIv69D0rPIMnCJQ5eOBvbt9tzh91MDO1MvqG21dDmXH3pilLv9KMA%2B4zFCukseDDtug4qqAWb6TE%2Bi3kx3bpAKecIpy2U8Fi8GHxY03bxrCostu%2FF%2FYbw9hqffsQIqExXNOLxZoQQkYMGoVBuCrSvPS0vor0ryL%2Fvj4%2Bmw4hPbsfZenLqHJ2JjJNzNHpLVL7YKg%2FlsWVD72GkoJn0hhIxtqn3KSAbgkL8545CIQp4BIRU7cV3uDlI4XmMFw2dNs10NUHbvDdAid0nULFo%2BlCtFAq0Zqf9wMIDuwL8GOqUBs5VQ6Um9PGwJzhimWG32yBZVoHtcVxEo4FO2r9kGayz4mpsyvsgHCWVHMu4inhpRYWwToRuU2rSYOYNcw%2BirMK35CxcyvIwDdJrmfWDmsoBiunB6BBll1%2BbX16KDgG3cxdW7E7ine9ujyVDSe%2FpCxQm3b%2FbmPSrVi07qEf3vemFWdWxuYxivzBUS%2Fl3uU9qBTTRjTy4xE5evtMpEhBeA6gA3yIId&X-Amz-Signature=c29191fc8d8280c9f5ad4a28d86280c2f83a91fcf101f31ebf570acbd449652b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
