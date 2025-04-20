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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM72MLTD%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCID%2BZubW5MUDQGTIUo2zqMu3JhdyO17ZJwJis3zXk28Q%2FAiEAx8NYLhUx4P2LF%2B2%2Bcni6YFKeNE7mPcLWu8JuMjlNyfkqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrK%2FrMjSXF6rPwuwircA8Pf7tG%2Fosb0LVTYtoYK8a04GIxkrDUj1y5AqyOUk2MOuJMA6FnIW0U1Nfd5u6TNNzKlUdLVxdSQPS9QO6jtMqXA2r0bNHm3ByOixUlxeyqHsVb%2FhOze%2B3GwXltrms2tGXY4Pu1IIKA00VkP4PYe%2BzAbtFCP5vM6hnWbYaF04wbMguA%2BV%2FKyDjCWxxWxCSQY6DhK6mGdyL%2F6uJRsXftUArmpth50PvVlUwnOczVJe%2FajJapvWbZpJPk1Sp5chsLmOLJtM1G70A7vO%2BCCfSSMrNjbB9I7ffZwGLYL8pHmp0UABZWRJ3QIhQcBaoTS4TKOSgC0AlKmdXeMjBztEEA1cYoxYb20zEm87RTHw4Yla7cOnGfNs%2FcZnIi9SN%2BHVKpLpzSvRiAY7Gab3UlSKgtVnrUPTALoJRGVOUFW7apnVoSVsJqUEPwAZgb58iGA4D91bI0oHeMp73eMJBfcmNdCOalN7Iqec55HpBI3sl5YX1KtA46oYqmsIFt4IsX3hmp9eR0lUbZsS8a5sVDYKNQbskszdJL77pELFNiM5%2BtJjfBMhRVSLTDNpigvPSkBx9XEmdWT4PrBAqndg0R%2BtkGW%2FZfFCMrSsWBq%2Fmuiowxr7m3bUnCORR%2BxR75h2DQPMLPDk8AGOqUBsf56WORl93fU6rL6grMk5otJKI%2BEsPJFZ6DmAM9NCQ8oSl1olSCo%2Bg73ivzG0zX3518vglZLUbj2%2BfBTbEnatFszRpatBpumESeUoy1krVszkcBf8UlxR5BsyW6UxeZ2ahxB2KZ%2Fo%2FLTclLoDejvcAutNE5mLotMCByWPFvgTFzc4bO9mEpFxZlvh4cJ09l%2F%2Bl6gJB04jBaUsHJynTjlNbrrWWLX&X-Amz-Signature=728d9e2132c4584db9a952844f50eb844cd291df83c1fa9bced240ddc8318869&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM72MLTD%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCID%2BZubW5MUDQGTIUo2zqMu3JhdyO17ZJwJis3zXk28Q%2FAiEAx8NYLhUx4P2LF%2B2%2Bcni6YFKeNE7mPcLWu8JuMjlNyfkqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrK%2FrMjSXF6rPwuwircA8Pf7tG%2Fosb0LVTYtoYK8a04GIxkrDUj1y5AqyOUk2MOuJMA6FnIW0U1Nfd5u6TNNzKlUdLVxdSQPS9QO6jtMqXA2r0bNHm3ByOixUlxeyqHsVb%2FhOze%2B3GwXltrms2tGXY4Pu1IIKA00VkP4PYe%2BzAbtFCP5vM6hnWbYaF04wbMguA%2BV%2FKyDjCWxxWxCSQY6DhK6mGdyL%2F6uJRsXftUArmpth50PvVlUwnOczVJe%2FajJapvWbZpJPk1Sp5chsLmOLJtM1G70A7vO%2BCCfSSMrNjbB9I7ffZwGLYL8pHmp0UABZWRJ3QIhQcBaoTS4TKOSgC0AlKmdXeMjBztEEA1cYoxYb20zEm87RTHw4Yla7cOnGfNs%2FcZnIi9SN%2BHVKpLpzSvRiAY7Gab3UlSKgtVnrUPTALoJRGVOUFW7apnVoSVsJqUEPwAZgb58iGA4D91bI0oHeMp73eMJBfcmNdCOalN7Iqec55HpBI3sl5YX1KtA46oYqmsIFt4IsX3hmp9eR0lUbZsS8a5sVDYKNQbskszdJL77pELFNiM5%2BtJjfBMhRVSLTDNpigvPSkBx9XEmdWT4PrBAqndg0R%2BtkGW%2FZfFCMrSsWBq%2Fmuiowxr7m3bUnCORR%2BxR75h2DQPMLPDk8AGOqUBsf56WORl93fU6rL6grMk5otJKI%2BEsPJFZ6DmAM9NCQ8oSl1olSCo%2Bg73ivzG0zX3518vglZLUbj2%2BfBTbEnatFszRpatBpumESeUoy1krVszkcBf8UlxR5BsyW6UxeZ2ahxB2KZ%2Fo%2FLTclLoDejvcAutNE5mLotMCByWPFvgTFzc4bO9mEpFxZlvh4cJ09l%2F%2Bl6gJB04jBaUsHJynTjlNbrrWWLX&X-Amz-Signature=088df37653aaec301068cab0d9527611a0af92630cb6180be1deff7eac059348&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM72MLTD%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCID%2BZubW5MUDQGTIUo2zqMu3JhdyO17ZJwJis3zXk28Q%2FAiEAx8NYLhUx4P2LF%2B2%2Bcni6YFKeNE7mPcLWu8JuMjlNyfkqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrK%2FrMjSXF6rPwuwircA8Pf7tG%2Fosb0LVTYtoYK8a04GIxkrDUj1y5AqyOUk2MOuJMA6FnIW0U1Nfd5u6TNNzKlUdLVxdSQPS9QO6jtMqXA2r0bNHm3ByOixUlxeyqHsVb%2FhOze%2B3GwXltrms2tGXY4Pu1IIKA00VkP4PYe%2BzAbtFCP5vM6hnWbYaF04wbMguA%2BV%2FKyDjCWxxWxCSQY6DhK6mGdyL%2F6uJRsXftUArmpth50PvVlUwnOczVJe%2FajJapvWbZpJPk1Sp5chsLmOLJtM1G70A7vO%2BCCfSSMrNjbB9I7ffZwGLYL8pHmp0UABZWRJ3QIhQcBaoTS4TKOSgC0AlKmdXeMjBztEEA1cYoxYb20zEm87RTHw4Yla7cOnGfNs%2FcZnIi9SN%2BHVKpLpzSvRiAY7Gab3UlSKgtVnrUPTALoJRGVOUFW7apnVoSVsJqUEPwAZgb58iGA4D91bI0oHeMp73eMJBfcmNdCOalN7Iqec55HpBI3sl5YX1KtA46oYqmsIFt4IsX3hmp9eR0lUbZsS8a5sVDYKNQbskszdJL77pELFNiM5%2BtJjfBMhRVSLTDNpigvPSkBx9XEmdWT4PrBAqndg0R%2BtkGW%2FZfFCMrSsWBq%2Fmuiowxr7m3bUnCORR%2BxR75h2DQPMLPDk8AGOqUBsf56WORl93fU6rL6grMk5otJKI%2BEsPJFZ6DmAM9NCQ8oSl1olSCo%2Bg73ivzG0zX3518vglZLUbj2%2BfBTbEnatFszRpatBpumESeUoy1krVszkcBf8UlxR5BsyW6UxeZ2ahxB2KZ%2Fo%2FLTclLoDejvcAutNE5mLotMCByWPFvgTFzc4bO9mEpFxZlvh4cJ09l%2F%2Bl6gJB04jBaUsHJynTjlNbrrWWLX&X-Amz-Signature=f58e7d91edc8597909016bb59620a2ef656bc902912231aa393ff6640fd8c434&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
