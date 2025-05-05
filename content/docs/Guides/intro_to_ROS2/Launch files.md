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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QBXL4VG%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChbiXs%2BEezK8ExaEUSXdF17nISVlzrYNqcQlbgBbNFbgIgeWCnicmO53YXrl26PlruOoXXU0W6aG%2FopwWZ3GkuTqUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMVC5%2BkLd8plmWIvKircA%2F63N79coGml%2B9hJHS7VT%2B345fkGjMkQ6RixExI8HlYIgfHnJaIP4emAv92H3NDGjSkNfzFFDupunYSTZQfB3Q15D75Z%2FtIruV9Q0db74dqlNeIJGBkFFhIZ%2BhEXgcIWgkEMEbJ7%2BLOF2BlLJqoEH0rqovzry6BdBiUmCMQiQ7sB79%2Fvs5eBs%2FXu71GaBdCHrFvWwic7UbOvo9Tpe5PrD3b0HrSv3WTCdFjs9c5XpDfdGloBzY5hzI1T%2FsoClyDijbkqHdJzKYxOT8OgVOvQ4ESiULSj77q7EV0qwhM5zE0WAY6mpOZhWxSTjkDCtXwtyb%2FkUi3CsuKqjj%2BgUcs%2FBh%2BRE7pvvNaRBn6hfsZ7OX2fghylaO3O2nxCS4lSmuvrBI7VmSYVbjMYZbbKMj4U61vtX40iGn2%2BtG4mGSIgl%2B5%2FmVs8xZtG3v1sWA7v1jYKG8nuLLvz32a8jFlq4Morq%2FdB2hicKKvRZjs2aK6Su3FJjksPBpgzyXNgz3wYggwACLafNlMyCjCBxOuQnkmRnfTv0HSRVkoUBwEZtQyT7z1l4QaIlaL%2FnSFqJ5F3ULwV%2BR7oDj%2BFaNiHGx%2F0fIdvSCoZGMKHTBZ5pSj4rYGx%2FvNubgTFjmFCVWaxq1V6MITQ4cAGOqUBpn%2Buap2%2F4NnvXDYQsl8B%2B2aUzf94%2FbCx%2FeTMpu23%2Fbj6axSOwxBHVZXGVywAh%2FE7qraQzgaGRgiZ7F%2Fyq%2F%2FOVWkwWvlQnF%2BvVzaeCCrWBJLavU7ZnfZkkG1i75IcWarQY4hgDQXL%2FHhL%2FxbfNFHxx1we2hUBYnyAcirIC%2F73T7gQbOrjN%2B1qkJH7IA%2FY1XqJsQmi%2FDOrHFzZEbPb4DidZvpwNhtQ&X-Amz-Signature=4e437191989b6e77a6244136b23b30fa8b0c40ccf9533e296f22103eb5f363fd&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QBXL4VG%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChbiXs%2BEezK8ExaEUSXdF17nISVlzrYNqcQlbgBbNFbgIgeWCnicmO53YXrl26PlruOoXXU0W6aG%2FopwWZ3GkuTqUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMVC5%2BkLd8plmWIvKircA%2F63N79coGml%2B9hJHS7VT%2B345fkGjMkQ6RixExI8HlYIgfHnJaIP4emAv92H3NDGjSkNfzFFDupunYSTZQfB3Q15D75Z%2FtIruV9Q0db74dqlNeIJGBkFFhIZ%2BhEXgcIWgkEMEbJ7%2BLOF2BlLJqoEH0rqovzry6BdBiUmCMQiQ7sB79%2Fvs5eBs%2FXu71GaBdCHrFvWwic7UbOvo9Tpe5PrD3b0HrSv3WTCdFjs9c5XpDfdGloBzY5hzI1T%2FsoClyDijbkqHdJzKYxOT8OgVOvQ4ESiULSj77q7EV0qwhM5zE0WAY6mpOZhWxSTjkDCtXwtyb%2FkUi3CsuKqjj%2BgUcs%2FBh%2BRE7pvvNaRBn6hfsZ7OX2fghylaO3O2nxCS4lSmuvrBI7VmSYVbjMYZbbKMj4U61vtX40iGn2%2BtG4mGSIgl%2B5%2FmVs8xZtG3v1sWA7v1jYKG8nuLLvz32a8jFlq4Morq%2FdB2hicKKvRZjs2aK6Su3FJjksPBpgzyXNgz3wYggwACLafNlMyCjCBxOuQnkmRnfTv0HSRVkoUBwEZtQyT7z1l4QaIlaL%2FnSFqJ5F3ULwV%2BR7oDj%2BFaNiHGx%2F0fIdvSCoZGMKHTBZ5pSj4rYGx%2FvNubgTFjmFCVWaxq1V6MITQ4cAGOqUBpn%2Buap2%2F4NnvXDYQsl8B%2B2aUzf94%2FbCx%2FeTMpu23%2Fbj6axSOwxBHVZXGVywAh%2FE7qraQzgaGRgiZ7F%2Fyq%2F%2FOVWkwWvlQnF%2BvVzaeCCrWBJLavU7ZnfZkkG1i75IcWarQY4hgDQXL%2FHhL%2FxbfNFHxx1we2hUBYnyAcirIC%2F73T7gQbOrjN%2B1qkJH7IA%2FY1XqJsQmi%2FDOrHFzZEbPb4DidZvpwNhtQ&X-Amz-Signature=862994654e3cebd651ed19b957ff3c7d59339d8060d19a83a3b84106e1eb49e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QBXL4VG%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChbiXs%2BEezK8ExaEUSXdF17nISVlzrYNqcQlbgBbNFbgIgeWCnicmO53YXrl26PlruOoXXU0W6aG%2FopwWZ3GkuTqUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMVC5%2BkLd8plmWIvKircA%2F63N79coGml%2B9hJHS7VT%2B345fkGjMkQ6RixExI8HlYIgfHnJaIP4emAv92H3NDGjSkNfzFFDupunYSTZQfB3Q15D75Z%2FtIruV9Q0db74dqlNeIJGBkFFhIZ%2BhEXgcIWgkEMEbJ7%2BLOF2BlLJqoEH0rqovzry6BdBiUmCMQiQ7sB79%2Fvs5eBs%2FXu71GaBdCHrFvWwic7UbOvo9Tpe5PrD3b0HrSv3WTCdFjs9c5XpDfdGloBzY5hzI1T%2FsoClyDijbkqHdJzKYxOT8OgVOvQ4ESiULSj77q7EV0qwhM5zE0WAY6mpOZhWxSTjkDCtXwtyb%2FkUi3CsuKqjj%2BgUcs%2FBh%2BRE7pvvNaRBn6hfsZ7OX2fghylaO3O2nxCS4lSmuvrBI7VmSYVbjMYZbbKMj4U61vtX40iGn2%2BtG4mGSIgl%2B5%2FmVs8xZtG3v1sWA7v1jYKG8nuLLvz32a8jFlq4Morq%2FdB2hicKKvRZjs2aK6Su3FJjksPBpgzyXNgz3wYggwACLafNlMyCjCBxOuQnkmRnfTv0HSRVkoUBwEZtQyT7z1l4QaIlaL%2FnSFqJ5F3ULwV%2BR7oDj%2BFaNiHGx%2F0fIdvSCoZGMKHTBZ5pSj4rYGx%2FvNubgTFjmFCVWaxq1V6MITQ4cAGOqUBpn%2Buap2%2F4NnvXDYQsl8B%2B2aUzf94%2FbCx%2FeTMpu23%2Fbj6axSOwxBHVZXGVywAh%2FE7qraQzgaGRgiZ7F%2Fyq%2F%2FOVWkwWvlQnF%2BvVzaeCCrWBJLavU7ZnfZkkG1i75IcWarQY4hgDQXL%2FHhL%2FxbfNFHxx1we2hUBYnyAcirIC%2F73T7gQbOrjN%2B1qkJH7IA%2FY1XqJsQmi%2FDOrHFzZEbPb4DidZvpwNhtQ&X-Amz-Signature=08999070f8d9b762b3c0e063c356d3ef4ebe026f8fb731720eeb5a881c88ddab&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
