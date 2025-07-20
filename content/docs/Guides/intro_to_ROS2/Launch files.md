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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG6VBMIA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGdOMts0G455d12R4gnexxbHALRipRdYYerMt0rd5smrAiA5ifnlU4dnzgRE15WJ8y%2FX9yp7rDKy%2BxPkgccGVoDykCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNhUkfOHfu1DHKcRmKtwDue8zNWnvaH0TyBUZhNm%2FtEFX2JHA%2B0dJHX736yRg%2BAqRkiGgxirmKqfgxOqU%2BjUJeETweyZEsC%2BiaIyblENzR1ZrlxjELbzQm5X%2FrqvaH218xodMT4qZSOLzZXsPlzNRkCXqW%2F1AKXnEGEDoz7DTH1%2BXexEe%2FETsZ5WW%2Bo3ElqgKpgMuHxk3FB3KdEipw0muOI4MDCKOomS3lydM4DfBS3DSmgowmY5I22yIpjQP6G8k9iIIt5v584nAzXGrg4RwF3LRNMGLg8NT290AzAuB%2BeAmqa10ckH1ouAftqp%2FwUgdp%2B%2B8LI1HfD6qu1G%2BK4jssI5Lc5NZXLsw0ImH8fPOPJ4QijjzyT8mX4cviUOa0akVg0QnDRRSitiXAPqlAoGylEW3u71m6S8cmi0DBFTS0ERo5ezTfSYqj74m24XRNy6TRLtJx3vH2kxelCfBLvE7zC%2Fl1xDVi6J9u0DL5OXUXwgbvJLZ%2BcA7eNssGxrendp1njG4zPc3RaGseL2mZFQ3EjMYUs3fuHDNN1wqY2rvZIN8OoMqrPC7zOUjzh0bMDT3eny%2BehDVRB3uEjgiOOzB6lJ5XHVUPkeh8ZwW7B%2FbYWesK9dlB3WvEQTGMjHY%2BBAqqL5HmUYQbvwMRXMwubvywwY6pgGF4ec%2BguTXMjGnDYsxtCUrBRVSUXFJX4o08M2oqKvJmmzFXQyE4J65N8IfJLpEdUxwVrXw40HpmS%2FNMAC352DU1bP2mM5Dqd7VTxmdHiuYW%2F3UvBA8VeuAQYQTznSdq9cEN93gDqDx5MfdwIzR1O3yGnsyS%2BZ2WMcjPfV0FMaWGGCw8KoO%2BmvsqEo6HY1zfthOhMJFXNhLor7e8IU9ld0DuJ%2FzIv1q&X-Amz-Signature=ee85813aad281c2312becff3d5f5ff299d7767f22815f66ed970be6f22e38424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG6VBMIA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGdOMts0G455d12R4gnexxbHALRipRdYYerMt0rd5smrAiA5ifnlU4dnzgRE15WJ8y%2FX9yp7rDKy%2BxPkgccGVoDykCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNhUkfOHfu1DHKcRmKtwDue8zNWnvaH0TyBUZhNm%2FtEFX2JHA%2B0dJHX736yRg%2BAqRkiGgxirmKqfgxOqU%2BjUJeETweyZEsC%2BiaIyblENzR1ZrlxjELbzQm5X%2FrqvaH218xodMT4qZSOLzZXsPlzNRkCXqW%2F1AKXnEGEDoz7DTH1%2BXexEe%2FETsZ5WW%2Bo3ElqgKpgMuHxk3FB3KdEipw0muOI4MDCKOomS3lydM4DfBS3DSmgowmY5I22yIpjQP6G8k9iIIt5v584nAzXGrg4RwF3LRNMGLg8NT290AzAuB%2BeAmqa10ckH1ouAftqp%2FwUgdp%2B%2B8LI1HfD6qu1G%2BK4jssI5Lc5NZXLsw0ImH8fPOPJ4QijjzyT8mX4cviUOa0akVg0QnDRRSitiXAPqlAoGylEW3u71m6S8cmi0DBFTS0ERo5ezTfSYqj74m24XRNy6TRLtJx3vH2kxelCfBLvE7zC%2Fl1xDVi6J9u0DL5OXUXwgbvJLZ%2BcA7eNssGxrendp1njG4zPc3RaGseL2mZFQ3EjMYUs3fuHDNN1wqY2rvZIN8OoMqrPC7zOUjzh0bMDT3eny%2BehDVRB3uEjgiOOzB6lJ5XHVUPkeh8ZwW7B%2FbYWesK9dlB3WvEQTGMjHY%2BBAqqL5HmUYQbvwMRXMwubvywwY6pgGF4ec%2BguTXMjGnDYsxtCUrBRVSUXFJX4o08M2oqKvJmmzFXQyE4J65N8IfJLpEdUxwVrXw40HpmS%2FNMAC352DU1bP2mM5Dqd7VTxmdHiuYW%2F3UvBA8VeuAQYQTznSdq9cEN93gDqDx5MfdwIzR1O3yGnsyS%2BZ2WMcjPfV0FMaWGGCw8KoO%2BmvsqEo6HY1zfthOhMJFXNhLor7e8IU9ld0DuJ%2FzIv1q&X-Amz-Signature=c405bf23c3f2546a51131c655f9483feea8e1fc77e5638becb78175517297e7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG6VBMIA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGdOMts0G455d12R4gnexxbHALRipRdYYerMt0rd5smrAiA5ifnlU4dnzgRE15WJ8y%2FX9yp7rDKy%2BxPkgccGVoDykCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNhUkfOHfu1DHKcRmKtwDue8zNWnvaH0TyBUZhNm%2FtEFX2JHA%2B0dJHX736yRg%2BAqRkiGgxirmKqfgxOqU%2BjUJeETweyZEsC%2BiaIyblENzR1ZrlxjELbzQm5X%2FrqvaH218xodMT4qZSOLzZXsPlzNRkCXqW%2F1AKXnEGEDoz7DTH1%2BXexEe%2FETsZ5WW%2Bo3ElqgKpgMuHxk3FB3KdEipw0muOI4MDCKOomS3lydM4DfBS3DSmgowmY5I22yIpjQP6G8k9iIIt5v584nAzXGrg4RwF3LRNMGLg8NT290AzAuB%2BeAmqa10ckH1ouAftqp%2FwUgdp%2B%2B8LI1HfD6qu1G%2BK4jssI5Lc5NZXLsw0ImH8fPOPJ4QijjzyT8mX4cviUOa0akVg0QnDRRSitiXAPqlAoGylEW3u71m6S8cmi0DBFTS0ERo5ezTfSYqj74m24XRNy6TRLtJx3vH2kxelCfBLvE7zC%2Fl1xDVi6J9u0DL5OXUXwgbvJLZ%2BcA7eNssGxrendp1njG4zPc3RaGseL2mZFQ3EjMYUs3fuHDNN1wqY2rvZIN8OoMqrPC7zOUjzh0bMDT3eny%2BehDVRB3uEjgiOOzB6lJ5XHVUPkeh8ZwW7B%2FbYWesK9dlB3WvEQTGMjHY%2BBAqqL5HmUYQbvwMRXMwubvywwY6pgGF4ec%2BguTXMjGnDYsxtCUrBRVSUXFJX4o08M2oqKvJmmzFXQyE4J65N8IfJLpEdUxwVrXw40HpmS%2FNMAC352DU1bP2mM5Dqd7VTxmdHiuYW%2F3UvBA8VeuAQYQTznSdq9cEN93gDqDx5MfdwIzR1O3yGnsyS%2BZ2WMcjPfV0FMaWGGCw8KoO%2BmvsqEo6HY1zfthOhMJFXNhLor7e8IU9ld0DuJ%2FzIv1q&X-Amz-Signature=729b1ea51373b0771fd27c238ffa827a04fec9f7a82b26793584cbf1c475197c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
