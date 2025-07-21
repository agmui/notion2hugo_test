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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DRK6O44%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSl%2Fvi8yXSDZ1i83RhO8kJ8zNMoVSr7wEGm08c89Wj8AIhANwOWfsYJ2N2etRurGcgGf3JTFqb7ogfw7E0bqJ1t1o8KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BCPuuTorZnz0mY%2B0q3AOAqm%2FCwLEVm20AV%2FnciKrEIX92lpIJhpeW9pdZXP8EMsF2sd5sPyhI0mwg8vJ2T4%2B36f5LARPxYpebigkpwhwK0Z96JOcX3eOfi90GJtuKCJXXorJupMgttRB9wd9IQWxTkuiTo7xkRDiDQK%2BqZDZ7ec%2Bg%2BeSz14xINUygvNoSQHcx%2F%2FOnjexVywcJPf6SjmeeutcoFlm5VAVdZT1ntFN5PQaV9fmFCFzE%2BtAmY9UpmhxY0s8nGveS%2FDh2ffc%2FkxIrKRvAUTea06HNQag0%2B%2FlY8NCacc0TWM%2Fgfk2AAysfM8j2U8kUYv96I9YvhP5Alwr0sgALZWkrYfUnmjaJE867XUh%2FLrs1hvHUrCNE2dP8Qeo%2FwNcximsYoq20BooObKx8sz7YC3K7MokaLzfy3MkF9Ty2m%2BR7qeSvCUrXPlqNg%2BaD1hK%2BrsZCNHiiwxQ1fcCDtFtV7g7pw4%2FP2SQ9rvQQB4bj7bvMOm1b4Bil9BGbCC8rm%2Bhw5Bsq7qLbLSTqYwFh2eH9Cyzl0VO1Slul9tmbxjIBnV%2BSlCX%2Bpc7fxqZraPTPjG2qYs94bqepsN4GdW2YWWJByxVO%2FQwHNUOdHeL6%2FCEJDLe99VcfYYGdktmyja08bHwaNllcSsy%2BNzCm1%2FrDBjqkARBof4imdvj0HV6IpX%2BDRNzvcDXLwgL%2BXwHIeaFywKNn8vbgMB3D0fTqL%2FRKCuR81%2Fye57lcdNqe6aiQxilui3YTisflJqYiIgSHj6CVcMFFsZSHgq1rU3Rx7eZh8ZORIsLCgOmk03tRCm2ofANyTUwdpE9Kh%2BzR0Aix%2FIth3twM%2FsEo81tnZiaZeUGV3A5%2FY5pjKHGQddCJbxZX4gx8uqa%2F2Sfo&X-Amz-Signature=3d37dd59e69b883a6d141515916757984a64969270215ed17b48346211a04486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DRK6O44%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSl%2Fvi8yXSDZ1i83RhO8kJ8zNMoVSr7wEGm08c89Wj8AIhANwOWfsYJ2N2etRurGcgGf3JTFqb7ogfw7E0bqJ1t1o8KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BCPuuTorZnz0mY%2B0q3AOAqm%2FCwLEVm20AV%2FnciKrEIX92lpIJhpeW9pdZXP8EMsF2sd5sPyhI0mwg8vJ2T4%2B36f5LARPxYpebigkpwhwK0Z96JOcX3eOfi90GJtuKCJXXorJupMgttRB9wd9IQWxTkuiTo7xkRDiDQK%2BqZDZ7ec%2Bg%2BeSz14xINUygvNoSQHcx%2F%2FOnjexVywcJPf6SjmeeutcoFlm5VAVdZT1ntFN5PQaV9fmFCFzE%2BtAmY9UpmhxY0s8nGveS%2FDh2ffc%2FkxIrKRvAUTea06HNQag0%2B%2FlY8NCacc0TWM%2Fgfk2AAysfM8j2U8kUYv96I9YvhP5Alwr0sgALZWkrYfUnmjaJE867XUh%2FLrs1hvHUrCNE2dP8Qeo%2FwNcximsYoq20BooObKx8sz7YC3K7MokaLzfy3MkF9Ty2m%2BR7qeSvCUrXPlqNg%2BaD1hK%2BrsZCNHiiwxQ1fcCDtFtV7g7pw4%2FP2SQ9rvQQB4bj7bvMOm1b4Bil9BGbCC8rm%2Bhw5Bsq7qLbLSTqYwFh2eH9Cyzl0VO1Slul9tmbxjIBnV%2BSlCX%2Bpc7fxqZraPTPjG2qYs94bqepsN4GdW2YWWJByxVO%2FQwHNUOdHeL6%2FCEJDLe99VcfYYGdktmyja08bHwaNllcSsy%2BNzCm1%2FrDBjqkARBof4imdvj0HV6IpX%2BDRNzvcDXLwgL%2BXwHIeaFywKNn8vbgMB3D0fTqL%2FRKCuR81%2Fye57lcdNqe6aiQxilui3YTisflJqYiIgSHj6CVcMFFsZSHgq1rU3Rx7eZh8ZORIsLCgOmk03tRCm2ofANyTUwdpE9Kh%2BzR0Aix%2FIth3twM%2FsEo81tnZiaZeUGV3A5%2FY5pjKHGQddCJbxZX4gx8uqa%2F2Sfo&X-Amz-Signature=6ce2df2e64431c3df901111fa2a3fd294f7577fcbbc5f312fcc764c7c2963f36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DRK6O44%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSl%2Fvi8yXSDZ1i83RhO8kJ8zNMoVSr7wEGm08c89Wj8AIhANwOWfsYJ2N2etRurGcgGf3JTFqb7ogfw7E0bqJ1t1o8KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BCPuuTorZnz0mY%2B0q3AOAqm%2FCwLEVm20AV%2FnciKrEIX92lpIJhpeW9pdZXP8EMsF2sd5sPyhI0mwg8vJ2T4%2B36f5LARPxYpebigkpwhwK0Z96JOcX3eOfi90GJtuKCJXXorJupMgttRB9wd9IQWxTkuiTo7xkRDiDQK%2BqZDZ7ec%2Bg%2BeSz14xINUygvNoSQHcx%2F%2FOnjexVywcJPf6SjmeeutcoFlm5VAVdZT1ntFN5PQaV9fmFCFzE%2BtAmY9UpmhxY0s8nGveS%2FDh2ffc%2FkxIrKRvAUTea06HNQag0%2B%2FlY8NCacc0TWM%2Fgfk2AAysfM8j2U8kUYv96I9YvhP5Alwr0sgALZWkrYfUnmjaJE867XUh%2FLrs1hvHUrCNE2dP8Qeo%2FwNcximsYoq20BooObKx8sz7YC3K7MokaLzfy3MkF9Ty2m%2BR7qeSvCUrXPlqNg%2BaD1hK%2BrsZCNHiiwxQ1fcCDtFtV7g7pw4%2FP2SQ9rvQQB4bj7bvMOm1b4Bil9BGbCC8rm%2Bhw5Bsq7qLbLSTqYwFh2eH9Cyzl0VO1Slul9tmbxjIBnV%2BSlCX%2Bpc7fxqZraPTPjG2qYs94bqepsN4GdW2YWWJByxVO%2FQwHNUOdHeL6%2FCEJDLe99VcfYYGdktmyja08bHwaNllcSsy%2BNzCm1%2FrDBjqkARBof4imdvj0HV6IpX%2BDRNzvcDXLwgL%2BXwHIeaFywKNn8vbgMB3D0fTqL%2FRKCuR81%2Fye57lcdNqe6aiQxilui3YTisflJqYiIgSHj6CVcMFFsZSHgq1rU3Rx7eZh8ZORIsLCgOmk03tRCm2ofANyTUwdpE9Kh%2BzR0Aix%2FIth3twM%2FsEo81tnZiaZeUGV3A5%2FY5pjKHGQddCJbxZX4gx8uqa%2F2Sfo&X-Amz-Signature=ad0b4724dbc676e97a90ed0cda53fe3f21a1652ac0e4233f7c5868b170d9e675&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
