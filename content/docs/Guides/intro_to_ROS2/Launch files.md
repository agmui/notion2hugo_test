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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4Y3RCYD%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDxNVFPJ3%2BjZQD2nvaZTPak6UdYWaQRNi3x3W5e6U41LAIhAN11H8dsbngfwt4wMg%2BXubHp06VqWcAc6ZgXg%2Bz6dmOyKv8DCBkQABoMNjM3NDIzMTgzODA1IgyLN7zDAypMmcdjGxEq3ANahDSDsKU%2FIOUQHNMWR3Obj76EzTu20HNWbjACAfI2pvBaFYzBnS7wgOT6ok4vWJCt0cOMS7IG6apVbm1NRoHlArY9d%2FoIxf2TWc%2FAvRh34EVZWzLbklb5YTttfa2Sc9v%2FOFyODUMeWX3HKEWyd%2FLb9fMV%2F8lPBuEUdTntGqUq6PKGvWkiOciet3cAKfA4MBj6iXjdcT6PPUfPfSPbJrdw5HtqhIu1vkVMtloqVYgWw0ZlD33oAXHYiEPlK%2BZwcKwKO9w9fVB5wsjIC3L1hcBug4ScmVCopFMgksdVlMxEqy5BO17mP3Y8TiOC5QL1wdb84gDRT%2FWyhEUsE31GI47Ui95rZoJsepOXaxh7p4urBUAcV17eceyzk5Xcj1D%2FbkpMHgfzz9mq2rtDcHjil2%2FoeIH5E%2FDGmMJVOK1YvaUmbD6wKBl2kDQ3FTXu1rlcODC%2B7OHegZSx%2Fhth2zSpGpE2HngfCT9U%2FSh%2Fid6LUUWE6m9ziNaqMA4DkYsPM3pjPSstml6cvj1BVF7Zf2v0SruAB4x%2FLcEWBlwbVNUzUP38qWMxTxr%2BNIvzH4L2KH97T5AGS8fw1S2DuvthlmLP5OjUjJfrq4Hdu6B3%2BSODyKM%2Bx2YNo26FAx%2ByA45CJjCZmbHCBjqkAaheXrFoLfYzkcf2JwJWaWVGw27ix%2BOHy0OIgDMFCh8aPfU80yaq4eDB1jzwgnUEmlofOr8arnfOWX831dWImVKu8fvFYyd2KCHF1MA%2BMXj4pG65evicsHEcRmT7TPvkxTZe%2FnrY%2F6qKE6wHtLLVXD5oxjIa4u1IPq%2FxVWnyn2dpvheEcowBRCvjGfpt5pPuWf3YdWzuWHSvlwoKZ%2FoNFIxszuGY&X-Amz-Signature=ef34170191232b9f13232a680302e7dff381a20563144ecf6e0cdee34f8059f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4Y3RCYD%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDxNVFPJ3%2BjZQD2nvaZTPak6UdYWaQRNi3x3W5e6U41LAIhAN11H8dsbngfwt4wMg%2BXubHp06VqWcAc6ZgXg%2Bz6dmOyKv8DCBkQABoMNjM3NDIzMTgzODA1IgyLN7zDAypMmcdjGxEq3ANahDSDsKU%2FIOUQHNMWR3Obj76EzTu20HNWbjACAfI2pvBaFYzBnS7wgOT6ok4vWJCt0cOMS7IG6apVbm1NRoHlArY9d%2FoIxf2TWc%2FAvRh34EVZWzLbklb5YTttfa2Sc9v%2FOFyODUMeWX3HKEWyd%2FLb9fMV%2F8lPBuEUdTntGqUq6PKGvWkiOciet3cAKfA4MBj6iXjdcT6PPUfPfSPbJrdw5HtqhIu1vkVMtloqVYgWw0ZlD33oAXHYiEPlK%2BZwcKwKO9w9fVB5wsjIC3L1hcBug4ScmVCopFMgksdVlMxEqy5BO17mP3Y8TiOC5QL1wdb84gDRT%2FWyhEUsE31GI47Ui95rZoJsepOXaxh7p4urBUAcV17eceyzk5Xcj1D%2FbkpMHgfzz9mq2rtDcHjil2%2FoeIH5E%2FDGmMJVOK1YvaUmbD6wKBl2kDQ3FTXu1rlcODC%2B7OHegZSx%2Fhth2zSpGpE2HngfCT9U%2FSh%2Fid6LUUWE6m9ziNaqMA4DkYsPM3pjPSstml6cvj1BVF7Zf2v0SruAB4x%2FLcEWBlwbVNUzUP38qWMxTxr%2BNIvzH4L2KH97T5AGS8fw1S2DuvthlmLP5OjUjJfrq4Hdu6B3%2BSODyKM%2Bx2YNo26FAx%2ByA45CJjCZmbHCBjqkAaheXrFoLfYzkcf2JwJWaWVGw27ix%2BOHy0OIgDMFCh8aPfU80yaq4eDB1jzwgnUEmlofOr8arnfOWX831dWImVKu8fvFYyd2KCHF1MA%2BMXj4pG65evicsHEcRmT7TPvkxTZe%2FnrY%2F6qKE6wHtLLVXD5oxjIa4u1IPq%2FxVWnyn2dpvheEcowBRCvjGfpt5pPuWf3YdWzuWHSvlwoKZ%2FoNFIxszuGY&X-Amz-Signature=9c8317dd04414c77b91fc99040c2449e4160ced37b3a29d0370f455b5aa6d563&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4Y3RCYD%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDxNVFPJ3%2BjZQD2nvaZTPak6UdYWaQRNi3x3W5e6U41LAIhAN11H8dsbngfwt4wMg%2BXubHp06VqWcAc6ZgXg%2Bz6dmOyKv8DCBkQABoMNjM3NDIzMTgzODA1IgyLN7zDAypMmcdjGxEq3ANahDSDsKU%2FIOUQHNMWR3Obj76EzTu20HNWbjACAfI2pvBaFYzBnS7wgOT6ok4vWJCt0cOMS7IG6apVbm1NRoHlArY9d%2FoIxf2TWc%2FAvRh34EVZWzLbklb5YTttfa2Sc9v%2FOFyODUMeWX3HKEWyd%2FLb9fMV%2F8lPBuEUdTntGqUq6PKGvWkiOciet3cAKfA4MBj6iXjdcT6PPUfPfSPbJrdw5HtqhIu1vkVMtloqVYgWw0ZlD33oAXHYiEPlK%2BZwcKwKO9w9fVB5wsjIC3L1hcBug4ScmVCopFMgksdVlMxEqy5BO17mP3Y8TiOC5QL1wdb84gDRT%2FWyhEUsE31GI47Ui95rZoJsepOXaxh7p4urBUAcV17eceyzk5Xcj1D%2FbkpMHgfzz9mq2rtDcHjil2%2FoeIH5E%2FDGmMJVOK1YvaUmbD6wKBl2kDQ3FTXu1rlcODC%2B7OHegZSx%2Fhth2zSpGpE2HngfCT9U%2FSh%2Fid6LUUWE6m9ziNaqMA4DkYsPM3pjPSstml6cvj1BVF7Zf2v0SruAB4x%2FLcEWBlwbVNUzUP38qWMxTxr%2BNIvzH4L2KH97T5AGS8fw1S2DuvthlmLP5OjUjJfrq4Hdu6B3%2BSODyKM%2Bx2YNo26FAx%2ByA45CJjCZmbHCBjqkAaheXrFoLfYzkcf2JwJWaWVGw27ix%2BOHy0OIgDMFCh8aPfU80yaq4eDB1jzwgnUEmlofOr8arnfOWX831dWImVKu8fvFYyd2KCHF1MA%2BMXj4pG65evicsHEcRmT7TPvkxTZe%2FnrY%2F6qKE6wHtLLVXD5oxjIa4u1IPq%2FxVWnyn2dpvheEcowBRCvjGfpt5pPuWf3YdWzuWHSvlwoKZ%2FoNFIxszuGY&X-Amz-Signature=33f4bb35df4f612b8572f8e7f522fe7e489561d6d098019f6ac7f5f6b34e24ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
