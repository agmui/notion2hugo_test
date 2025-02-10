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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULZQBZKO%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFsGCK99h9%2FoL6iLYZV8N3GEELWEoZp%2Fy8pzOM22tAdUAiEA0VNW6IViOLdMfeDYTOvVV%2FEw3Fb%2B70Q58UtU8bm%2B4MUqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJM0d1SEab4sOAiPSrcA5N9eLbyxoC42j%2FvNw%2FCp5VJfIxpJDb67YIBliJMYO12cqd5wTYeVGHEyF0ZxYvZ%2BXYd34icb0HOxqOwxInlyfuQyq737f6dsciWv%2FI7cSL2%2FPPs4Jz%2BcZdqS7gVYjhJ8ffIzb2Rmmtaq5KzgLqj0AeWs23wffgCdxdx23vdRTz8kNZhtnixhQm5M9aW%2BMN6YCtL8h8kbdcrUb6ipqMfQPtT8koJjTjDrYFocKm1PtQsw9j6gf8gV%2BG0jYKssmIazIhv1zqkCB05dm8tlI6exB%2Fyexlb1EhgiyTMHSdOetUsUwwmWcT%2BTEUblDC8%2B3%2BREJL9q0Zv5MVjZyuzI%2ByrRqOisXp0d20cXW2GcAMAXN8BVhPt8rNnHBtlUIYzPReRJWCGSMPzzGzSka60GDvuyi7%2FuC2ha%2BAN9VOuOJ8lJ8G77PA9yMjn6F%2BPh1uVL4TLsya2%2B1GMKeW5TUxPfpoMkAZ5uR9QudxW4izw31olhfJsCOH5kF%2BT1LsZdJcHj%2BQAHzzeazq7u1xyxF61FPILxLEVATjTvfy6JVNmDKHJBpkZfhIvdKjxgeux%2FKHU9mCvo0eWuILdwWgFON2Ojr0Sldgddr5q1wHTldysZJeCNUQRPUV6mOzIdMNFRh5CMKeSp70GOqUBwaklaAwT3JWYz27daxr2i9DVNsuyM4u%2B2%2FhvYBpsQIixfsR0PkHKkcxcGb73H%2FnH7d2%2BjIgZ2%2BN0j54I3hiqRMPg9yuIEUB4YfqYaPSrgRwfWqZrEOUr5nLRD%2FXD7%2FKyYWzhbqaOlDGb0UFkh3vFH%2B4%2B3IM3C1seN%2FTSgqyS7MdBu05Wfc9B9Z3nh35SCX%2FW%2BFu50bwM%2BtqK9AdLUDSppn81CH8Y&X-Amz-Signature=19ed5fab5d57b35b3830f443ac928097c6e7bd4f40d9a511ba116afaf48573b7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULZQBZKO%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFsGCK99h9%2FoL6iLYZV8N3GEELWEoZp%2Fy8pzOM22tAdUAiEA0VNW6IViOLdMfeDYTOvVV%2FEw3Fb%2B70Q58UtU8bm%2B4MUqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJM0d1SEab4sOAiPSrcA5N9eLbyxoC42j%2FvNw%2FCp5VJfIxpJDb67YIBliJMYO12cqd5wTYeVGHEyF0ZxYvZ%2BXYd34icb0HOxqOwxInlyfuQyq737f6dsciWv%2FI7cSL2%2FPPs4Jz%2BcZdqS7gVYjhJ8ffIzb2Rmmtaq5KzgLqj0AeWs23wffgCdxdx23vdRTz8kNZhtnixhQm5M9aW%2BMN6YCtL8h8kbdcrUb6ipqMfQPtT8koJjTjDrYFocKm1PtQsw9j6gf8gV%2BG0jYKssmIazIhv1zqkCB05dm8tlI6exB%2Fyexlb1EhgiyTMHSdOetUsUwwmWcT%2BTEUblDC8%2B3%2BREJL9q0Zv5MVjZyuzI%2ByrRqOisXp0d20cXW2GcAMAXN8BVhPt8rNnHBtlUIYzPReRJWCGSMPzzGzSka60GDvuyi7%2FuC2ha%2BAN9VOuOJ8lJ8G77PA9yMjn6F%2BPh1uVL4TLsya2%2B1GMKeW5TUxPfpoMkAZ5uR9QudxW4izw31olhfJsCOH5kF%2BT1LsZdJcHj%2BQAHzzeazq7u1xyxF61FPILxLEVATjTvfy6JVNmDKHJBpkZfhIvdKjxgeux%2FKHU9mCvo0eWuILdwWgFON2Ojr0Sldgddr5q1wHTldysZJeCNUQRPUV6mOzIdMNFRh5CMKeSp70GOqUBwaklaAwT3JWYz27daxr2i9DVNsuyM4u%2B2%2FhvYBpsQIixfsR0PkHKkcxcGb73H%2FnH7d2%2BjIgZ2%2BN0j54I3hiqRMPg9yuIEUB4YfqYaPSrgRwfWqZrEOUr5nLRD%2FXD7%2FKyYWzhbqaOlDGb0UFkh3vFH%2B4%2B3IM3C1seN%2FTSgqyS7MdBu05Wfc9B9Z3nh35SCX%2FW%2BFu50bwM%2BtqK9AdLUDSppn81CH8Y&X-Amz-Signature=e8744f55379cd6f46c6828e189c0bd92116b7444127f702de5755968265d093e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULZQBZKO%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFsGCK99h9%2FoL6iLYZV8N3GEELWEoZp%2Fy8pzOM22tAdUAiEA0VNW6IViOLdMfeDYTOvVV%2FEw3Fb%2B70Q58UtU8bm%2B4MUqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJM0d1SEab4sOAiPSrcA5N9eLbyxoC42j%2FvNw%2FCp5VJfIxpJDb67YIBliJMYO12cqd5wTYeVGHEyF0ZxYvZ%2BXYd34icb0HOxqOwxInlyfuQyq737f6dsciWv%2FI7cSL2%2FPPs4Jz%2BcZdqS7gVYjhJ8ffIzb2Rmmtaq5KzgLqj0AeWs23wffgCdxdx23vdRTz8kNZhtnixhQm5M9aW%2BMN6YCtL8h8kbdcrUb6ipqMfQPtT8koJjTjDrYFocKm1PtQsw9j6gf8gV%2BG0jYKssmIazIhv1zqkCB05dm8tlI6exB%2Fyexlb1EhgiyTMHSdOetUsUwwmWcT%2BTEUblDC8%2B3%2BREJL9q0Zv5MVjZyuzI%2ByrRqOisXp0d20cXW2GcAMAXN8BVhPt8rNnHBtlUIYzPReRJWCGSMPzzGzSka60GDvuyi7%2FuC2ha%2BAN9VOuOJ8lJ8G77PA9yMjn6F%2BPh1uVL4TLsya2%2B1GMKeW5TUxPfpoMkAZ5uR9QudxW4izw31olhfJsCOH5kF%2BT1LsZdJcHj%2BQAHzzeazq7u1xyxF61FPILxLEVATjTvfy6JVNmDKHJBpkZfhIvdKjxgeux%2FKHU9mCvo0eWuILdwWgFON2Ojr0Sldgddr5q1wHTldysZJeCNUQRPUV6mOzIdMNFRh5CMKeSp70GOqUBwaklaAwT3JWYz27daxr2i9DVNsuyM4u%2B2%2FhvYBpsQIixfsR0PkHKkcxcGb73H%2FnH7d2%2BjIgZ2%2BN0j54I3hiqRMPg9yuIEUB4YfqYaPSrgRwfWqZrEOUr5nLRD%2FXD7%2FKyYWzhbqaOlDGb0UFkh3vFH%2B4%2B3IM3C1seN%2FTSgqyS7MdBu05Wfc9B9Z3nh35SCX%2FW%2BFu50bwM%2BtqK9AdLUDSppn81CH8Y&X-Amz-Signature=a779d9140b8832f6dff9cc909aeb3822e231cdfc4553e85e016f50fa282a11b5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
