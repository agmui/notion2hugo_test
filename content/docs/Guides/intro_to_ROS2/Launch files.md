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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PFWAOSV%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T022303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDFiOBhughYHs5vuBfEz4icZy%2FjyK1MEpv7RP4shimYVAIgRagW3EERrODp5yAK3LHiALJ%2BKSn69xq%2BPnKTjSv8sZgqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfWCKA3ZZ1yXGKKUCrcA7S95%2BqG478v59H%2BKWZYBmxGFBEEWlZYQ%2BSqqvuCnnfbQ%2F%2FE5B3tiOCnvKGM8a4ZPpX26lL9Z5R8egheDQo8UMio9M0BzI10QP4oA60yFU%2B9L5Q0jtbrdqFDH4R9I02j4AjUEN21CSinhZWy%2BfKLZdZHXCTL3MyahEmqUgaRmrnRLJWSfXEFYHXfY90%2BgTbEry%2BcJ3dAcX09cLdg7fUyD%2Fi6Zm1ezsdieM7QhA6G4rQ49QEsJyFAp%2F98JFKwdQmO5wpxmHAEW%2BXZF9quqyfRRYCm4dAZzcOLD9MK6CNyacIod0xCrslJmitiAGNb8Hh10AcpqyA1KCr07daMddsI9BWx7tXk5vTjVC0QjeEa3emUEEvuADf4ldmD1QxaY2CW7OQS5agbswEnLQlK94wos%2F%2BH7H0O3F5wplKQIV30skgFg6GWZ71I97aQ0FHLXCsXbHjyivScT%2BaukWYyCmRn%2FW5Kc0HWZG7fdQ9tsOjtzXuPRJEErwCPF1%2FtRIQraiSLhM%2Fbp03CdN81%2FY8vDVetlnax1WrDhGnv%2FakbiDVF2i8Yw2uFcI55wegx77LXDjtcTQsWDAgTHyk7A5YRU%2FfA3%2FEluKBC6Q2bcoHoYsiIaALPdiuCbGcwnPHwZIgdMMGxpsAGOqUBaOmdVSeb8SptRNca9jmj4gF8SVPyaWsgSsxrCv3vlWorNKg%2B7eRXw9e99x7I7XCCWX4WnGlUJnMvpu67Kqmg31lrz6PXeQ5WxWKBho21bdrGqv1PCmWzck%2F7IYzam0wLkrco3St4%2BSEGlPYnWYzJi9IhsQXLSEgvqim9vKhT5uDupj%2B7ACo3DJr0%2BcqVti%2Bi7vDiPlL%2Byu2YIT16GqQkCDwyu4Hs&X-Amz-Signature=732a4b0f41de283f5505a8c98170b8345e4bb2d778ee83f91464c7a05a12949b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PFWAOSV%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T022303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDFiOBhughYHs5vuBfEz4icZy%2FjyK1MEpv7RP4shimYVAIgRagW3EERrODp5yAK3LHiALJ%2BKSn69xq%2BPnKTjSv8sZgqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfWCKA3ZZ1yXGKKUCrcA7S95%2BqG478v59H%2BKWZYBmxGFBEEWlZYQ%2BSqqvuCnnfbQ%2F%2FE5B3tiOCnvKGM8a4ZPpX26lL9Z5R8egheDQo8UMio9M0BzI10QP4oA60yFU%2B9L5Q0jtbrdqFDH4R9I02j4AjUEN21CSinhZWy%2BfKLZdZHXCTL3MyahEmqUgaRmrnRLJWSfXEFYHXfY90%2BgTbEry%2BcJ3dAcX09cLdg7fUyD%2Fi6Zm1ezsdieM7QhA6G4rQ49QEsJyFAp%2F98JFKwdQmO5wpxmHAEW%2BXZF9quqyfRRYCm4dAZzcOLD9MK6CNyacIod0xCrslJmitiAGNb8Hh10AcpqyA1KCr07daMddsI9BWx7tXk5vTjVC0QjeEa3emUEEvuADf4ldmD1QxaY2CW7OQS5agbswEnLQlK94wos%2F%2BH7H0O3F5wplKQIV30skgFg6GWZ71I97aQ0FHLXCsXbHjyivScT%2BaukWYyCmRn%2FW5Kc0HWZG7fdQ9tsOjtzXuPRJEErwCPF1%2FtRIQraiSLhM%2Fbp03CdN81%2FY8vDVetlnax1WrDhGnv%2FakbiDVF2i8Yw2uFcI55wegx77LXDjtcTQsWDAgTHyk7A5YRU%2FfA3%2FEluKBC6Q2bcoHoYsiIaALPdiuCbGcwnPHwZIgdMMGxpsAGOqUBaOmdVSeb8SptRNca9jmj4gF8SVPyaWsgSsxrCv3vlWorNKg%2B7eRXw9e99x7I7XCCWX4WnGlUJnMvpu67Kqmg31lrz6PXeQ5WxWKBho21bdrGqv1PCmWzck%2F7IYzam0wLkrco3St4%2BSEGlPYnWYzJi9IhsQXLSEgvqim9vKhT5uDupj%2B7ACo3DJr0%2BcqVti%2Bi7vDiPlL%2Byu2YIT16GqQkCDwyu4Hs&X-Amz-Signature=10bd9ea21de270cc2fe5437c9b25f75bb38ab887bb374f02f167c01aa7575719&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PFWAOSV%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T022303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDFiOBhughYHs5vuBfEz4icZy%2FjyK1MEpv7RP4shimYVAIgRagW3EERrODp5yAK3LHiALJ%2BKSn69xq%2BPnKTjSv8sZgqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfWCKA3ZZ1yXGKKUCrcA7S95%2BqG478v59H%2BKWZYBmxGFBEEWlZYQ%2BSqqvuCnnfbQ%2F%2FE5B3tiOCnvKGM8a4ZPpX26lL9Z5R8egheDQo8UMio9M0BzI10QP4oA60yFU%2B9L5Q0jtbrdqFDH4R9I02j4AjUEN21CSinhZWy%2BfKLZdZHXCTL3MyahEmqUgaRmrnRLJWSfXEFYHXfY90%2BgTbEry%2BcJ3dAcX09cLdg7fUyD%2Fi6Zm1ezsdieM7QhA6G4rQ49QEsJyFAp%2F98JFKwdQmO5wpxmHAEW%2BXZF9quqyfRRYCm4dAZzcOLD9MK6CNyacIod0xCrslJmitiAGNb8Hh10AcpqyA1KCr07daMddsI9BWx7tXk5vTjVC0QjeEa3emUEEvuADf4ldmD1QxaY2CW7OQS5agbswEnLQlK94wos%2F%2BH7H0O3F5wplKQIV30skgFg6GWZ71I97aQ0FHLXCsXbHjyivScT%2BaukWYyCmRn%2FW5Kc0HWZG7fdQ9tsOjtzXuPRJEErwCPF1%2FtRIQraiSLhM%2Fbp03CdN81%2FY8vDVetlnax1WrDhGnv%2FakbiDVF2i8Yw2uFcI55wegx77LXDjtcTQsWDAgTHyk7A5YRU%2FfA3%2FEluKBC6Q2bcoHoYsiIaALPdiuCbGcwnPHwZIgdMMGxpsAGOqUBaOmdVSeb8SptRNca9jmj4gF8SVPyaWsgSsxrCv3vlWorNKg%2B7eRXw9e99x7I7XCCWX4WnGlUJnMvpu67Kqmg31lrz6PXeQ5WxWKBho21bdrGqv1PCmWzck%2F7IYzam0wLkrco3St4%2BSEGlPYnWYzJi9IhsQXLSEgvqim9vKhT5uDupj%2B7ACo3DJr0%2BcqVti%2Bi7vDiPlL%2Byu2YIT16GqQkCDwyu4Hs&X-Amz-Signature=3359f9bb85abc8ee42ea25f66318df80c775c16688136ae8d4983915e7a2b035&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
