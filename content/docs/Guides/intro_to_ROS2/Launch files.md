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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4WM3LRX%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzK%2BpQWY56ietL9pbL2Yc2QYfRX%2F0VOI4d0MDawZv1WAiEA1bHTgF28Eyxi7F8z1oCeXgeXLDWWyk4LUD7ROucuFO8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDrBAMTGG3qcs%2FEtCrcA1fvbNGm2SZxvbgCIcvSQ7sfNOjN53GQAyjNaLMkgwXDDH1x3twqWlpxUz6%2BCvufZuuhhd5%2BoUKDz65q%2BexPn0yL%2FJuw2yBd0u7ohjP%2Fnk73JbMGT3ZTGLYb1K2K%2BFg6XEkehbPBuZ6VBJzA0iL4oPexhDAMwzufxK%2FDXG3lb4EJJqtAl74GZZ3IPlccQNJhs0%2FnH7JmCLsRfMQE3t6HG1IkdZWOVvd%2Fk1fE530V6fwFXr0Pk0pjTtBFI8zrkVUA5KltFE2%2BmVPHQUZK03mcyyxeo9F%2Bv1IC2deoIgeom7cEzOBgYYNUk1pVJnCwBzIZY9NisQ3TfAK6%2BLwA3SRUHPKHrY2viXgbDqqLQt%2BVbYHt6cgAEUvqjfBRv%2FOco4n2KSWn%2BB9ANDWtqkg7FvdloS%2FOyZJ%2FlKL%2F59FTq9O14lGjzXDGgPWpxw57GYANoZoiTzc6%2FnCDhu7x1pX8JitcXoAwi4CMHBC9iisMRTnaLDWcuNmcSg4MFhqbkNdsP6nfQLvebwJ5TMhzRjtHZoDKRI3L59mm2gkXvBsslazzBqwMn4c7DGqDFnZjL3X%2Fw3p5xvkvLqVCaW%2FClS3DkbOaSS6UE4ncSNFR%2Bkzq6Vftg1PBpixmM78XbHGdg0Y%2BMI2TgsMGOqUB0RDk2wbyCdoaN7KGAZOOorwzKEX7CtjycYQgTjTOuGWepqYRnFQJeomcu%2B0gmRxUX66ihe0htfNFXeQNhchcNxAxV5JnPsURBq%2FGEJ3%2Fx5DW4yT2kjNJKW%2BSk6Zyc5OWbUZyTrd90fz9eNplKZKsZuqudTwN6uNLhaGHrpKmPFDaEXrQulMbpp1UEcKKnA7s%2FnXIZIExmD%2BBaXN0RaVVOS7Z7hRl&X-Amz-Signature=e50283a2477b006c5fdd2f77d8223408eab8ceb811ea051db8c6299f6b8ec2c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4WM3LRX%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzK%2BpQWY56ietL9pbL2Yc2QYfRX%2F0VOI4d0MDawZv1WAiEA1bHTgF28Eyxi7F8z1oCeXgeXLDWWyk4LUD7ROucuFO8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDrBAMTGG3qcs%2FEtCrcA1fvbNGm2SZxvbgCIcvSQ7sfNOjN53GQAyjNaLMkgwXDDH1x3twqWlpxUz6%2BCvufZuuhhd5%2BoUKDz65q%2BexPn0yL%2FJuw2yBd0u7ohjP%2Fnk73JbMGT3ZTGLYb1K2K%2BFg6XEkehbPBuZ6VBJzA0iL4oPexhDAMwzufxK%2FDXG3lb4EJJqtAl74GZZ3IPlccQNJhs0%2FnH7JmCLsRfMQE3t6HG1IkdZWOVvd%2Fk1fE530V6fwFXr0Pk0pjTtBFI8zrkVUA5KltFE2%2BmVPHQUZK03mcyyxeo9F%2Bv1IC2deoIgeom7cEzOBgYYNUk1pVJnCwBzIZY9NisQ3TfAK6%2BLwA3SRUHPKHrY2viXgbDqqLQt%2BVbYHt6cgAEUvqjfBRv%2FOco4n2KSWn%2BB9ANDWtqkg7FvdloS%2FOyZJ%2FlKL%2F59FTq9O14lGjzXDGgPWpxw57GYANoZoiTzc6%2FnCDhu7x1pX8JitcXoAwi4CMHBC9iisMRTnaLDWcuNmcSg4MFhqbkNdsP6nfQLvebwJ5TMhzRjtHZoDKRI3L59mm2gkXvBsslazzBqwMn4c7DGqDFnZjL3X%2Fw3p5xvkvLqVCaW%2FClS3DkbOaSS6UE4ncSNFR%2Bkzq6Vftg1PBpixmM78XbHGdg0Y%2BMI2TgsMGOqUB0RDk2wbyCdoaN7KGAZOOorwzKEX7CtjycYQgTjTOuGWepqYRnFQJeomcu%2B0gmRxUX66ihe0htfNFXeQNhchcNxAxV5JnPsURBq%2FGEJ3%2Fx5DW4yT2kjNJKW%2BSk6Zyc5OWbUZyTrd90fz9eNplKZKsZuqudTwN6uNLhaGHrpKmPFDaEXrQulMbpp1UEcKKnA7s%2FnXIZIExmD%2BBaXN0RaVVOS7Z7hRl&X-Amz-Signature=32d872ea39a9ed79920bcfe6031aa3d1af16f3333bd94693a9aa8c39cfea8941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4WM3LRX%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzK%2BpQWY56ietL9pbL2Yc2QYfRX%2F0VOI4d0MDawZv1WAiEA1bHTgF28Eyxi7F8z1oCeXgeXLDWWyk4LUD7ROucuFO8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDrBAMTGG3qcs%2FEtCrcA1fvbNGm2SZxvbgCIcvSQ7sfNOjN53GQAyjNaLMkgwXDDH1x3twqWlpxUz6%2BCvufZuuhhd5%2BoUKDz65q%2BexPn0yL%2FJuw2yBd0u7ohjP%2Fnk73JbMGT3ZTGLYb1K2K%2BFg6XEkehbPBuZ6VBJzA0iL4oPexhDAMwzufxK%2FDXG3lb4EJJqtAl74GZZ3IPlccQNJhs0%2FnH7JmCLsRfMQE3t6HG1IkdZWOVvd%2Fk1fE530V6fwFXr0Pk0pjTtBFI8zrkVUA5KltFE2%2BmVPHQUZK03mcyyxeo9F%2Bv1IC2deoIgeom7cEzOBgYYNUk1pVJnCwBzIZY9NisQ3TfAK6%2BLwA3SRUHPKHrY2viXgbDqqLQt%2BVbYHt6cgAEUvqjfBRv%2FOco4n2KSWn%2BB9ANDWtqkg7FvdloS%2FOyZJ%2FlKL%2F59FTq9O14lGjzXDGgPWpxw57GYANoZoiTzc6%2FnCDhu7x1pX8JitcXoAwi4CMHBC9iisMRTnaLDWcuNmcSg4MFhqbkNdsP6nfQLvebwJ5TMhzRjtHZoDKRI3L59mm2gkXvBsslazzBqwMn4c7DGqDFnZjL3X%2Fw3p5xvkvLqVCaW%2FClS3DkbOaSS6UE4ncSNFR%2Bkzq6Vftg1PBpixmM78XbHGdg0Y%2BMI2TgsMGOqUB0RDk2wbyCdoaN7KGAZOOorwzKEX7CtjycYQgTjTOuGWepqYRnFQJeomcu%2B0gmRxUX66ihe0htfNFXeQNhchcNxAxV5JnPsURBq%2FGEJ3%2Fx5DW4yT2kjNJKW%2BSk6Zyc5OWbUZyTrd90fz9eNplKZKsZuqudTwN6uNLhaGHrpKmPFDaEXrQulMbpp1UEcKKnA7s%2FnXIZIExmD%2BBaXN0RaVVOS7Z7hRl&X-Amz-Signature=c038cd98a0b26f2d0d43f7636b8baafff8d9d2b5c66e7cf6f571339630cc2011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
