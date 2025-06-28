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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI33ZOOJ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzOjIWLZ%2B2WuL%2B0oFr1huBSCMZ3n0lyHzj5EOFZfQtiAiEAtFLz1ahU78XvBF2n4shk15NJeGZH1gu5mfXvdih4YJ0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLo38mdxnjkQ%2Fj3dircA%2BJPDuVujxCf93UmfR4SXsIIDFUcVrGj%2BPWR3t%2FoQ6rihIuGM5G8okAo3c4Evx6HZlmK9lIyIE2N21ip9uotblC0bhIRISU6pYiVD7aYqZSiq1QiQDPy0tDIMipr8%2Fw7GcA8hn7UxGjD2YoGgYa9OMv%2FSra%2FLdfwWw3iINPEL3nsw0dtPSTk4Jxr%2Bv%2BwijutbEnsiTxfKvRz0MIxOq0ptwu9qG2FLtoNPHDzLQMxMNhpSRdhCuopbllMeikDnn6vaYX9JUsnpgwPEKZnCjUN%2BeZCsGcJafGp3u3E116PkO75T7KBx0EXIS%2BIK81hLse9yLwa9ecpnp5J0dPmLXkiyL8TPZo2O5ANFr797aniKsJEc3ijnkugBU0klupwAFQzi035hwMK7zgpoBX5A%2B8oSCeXRpLEilQtobMWWDJtxDD96BJnqUvP6%2B1a7rzOd5179v9H0ImBfVZyP4YA1v9wx2sGwVx6%2BcAjETA6Ylbs4Zk03rtADF%2BFmOQ6N31UAr5kmVII3J385SfLaHw%2FZCXzSVn%2FL6xiLqHW2wvJ6H7p15Y5kX%2BbSB4m0PZp%2BjNhMqDWjHo1zOaLWAtsFJJzQs%2B2RC22CVhN4wLDN0WExAnXmdRb4EHrEoQhb6eC7ucFMO%2B5gcMGOqUBhDPgCU54x3C%2Bhf5ZABEaDdLQ8oK1e0Cx4e5gUPkUwzp7KyjyCTyTenKWth01WHVoxDn3q8hhOWKjw06YXXDuhKblvaqVgB%2Bsff9zqcJa69JhQRr9%2FhmnzIIBUxKb%2BKFHNkQB06Jos%2FPi15ED%2B8MIg3IPkfWtEXjvvf768A1%2F1CRYeR5sWK6%2FbSd7OFMH4m4LhgZ54Y%2BZOYkC6DI%2FWVF6N9Csc1hX&X-Amz-Signature=5ca038e930b0f164364851a9675625f78ffcd01231ec847f39b8612a8353386f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI33ZOOJ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzOjIWLZ%2B2WuL%2B0oFr1huBSCMZ3n0lyHzj5EOFZfQtiAiEAtFLz1ahU78XvBF2n4shk15NJeGZH1gu5mfXvdih4YJ0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLo38mdxnjkQ%2Fj3dircA%2BJPDuVujxCf93UmfR4SXsIIDFUcVrGj%2BPWR3t%2FoQ6rihIuGM5G8okAo3c4Evx6HZlmK9lIyIE2N21ip9uotblC0bhIRISU6pYiVD7aYqZSiq1QiQDPy0tDIMipr8%2Fw7GcA8hn7UxGjD2YoGgYa9OMv%2FSra%2FLdfwWw3iINPEL3nsw0dtPSTk4Jxr%2Bv%2BwijutbEnsiTxfKvRz0MIxOq0ptwu9qG2FLtoNPHDzLQMxMNhpSRdhCuopbllMeikDnn6vaYX9JUsnpgwPEKZnCjUN%2BeZCsGcJafGp3u3E116PkO75T7KBx0EXIS%2BIK81hLse9yLwa9ecpnp5J0dPmLXkiyL8TPZo2O5ANFr797aniKsJEc3ijnkugBU0klupwAFQzi035hwMK7zgpoBX5A%2B8oSCeXRpLEilQtobMWWDJtxDD96BJnqUvP6%2B1a7rzOd5179v9H0ImBfVZyP4YA1v9wx2sGwVx6%2BcAjETA6Ylbs4Zk03rtADF%2BFmOQ6N31UAr5kmVII3J385SfLaHw%2FZCXzSVn%2FL6xiLqHW2wvJ6H7p15Y5kX%2BbSB4m0PZp%2BjNhMqDWjHo1zOaLWAtsFJJzQs%2B2RC22CVhN4wLDN0WExAnXmdRb4EHrEoQhb6eC7ucFMO%2B5gcMGOqUBhDPgCU54x3C%2Bhf5ZABEaDdLQ8oK1e0Cx4e5gUPkUwzp7KyjyCTyTenKWth01WHVoxDn3q8hhOWKjw06YXXDuhKblvaqVgB%2Bsff9zqcJa69JhQRr9%2FhmnzIIBUxKb%2BKFHNkQB06Jos%2FPi15ED%2B8MIg3IPkfWtEXjvvf768A1%2F1CRYeR5sWK6%2FbSd7OFMH4m4LhgZ54Y%2BZOYkC6DI%2FWVF6N9Csc1hX&X-Amz-Signature=c27a3088d13e3b1c6bfe58cf7ff5fcf6d2fe720d7fd2ab9a6de640a03a5868aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI33ZOOJ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzOjIWLZ%2B2WuL%2B0oFr1huBSCMZ3n0lyHzj5EOFZfQtiAiEAtFLz1ahU78XvBF2n4shk15NJeGZH1gu5mfXvdih4YJ0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLo38mdxnjkQ%2Fj3dircA%2BJPDuVujxCf93UmfR4SXsIIDFUcVrGj%2BPWR3t%2FoQ6rihIuGM5G8okAo3c4Evx6HZlmK9lIyIE2N21ip9uotblC0bhIRISU6pYiVD7aYqZSiq1QiQDPy0tDIMipr8%2Fw7GcA8hn7UxGjD2YoGgYa9OMv%2FSra%2FLdfwWw3iINPEL3nsw0dtPSTk4Jxr%2Bv%2BwijutbEnsiTxfKvRz0MIxOq0ptwu9qG2FLtoNPHDzLQMxMNhpSRdhCuopbllMeikDnn6vaYX9JUsnpgwPEKZnCjUN%2BeZCsGcJafGp3u3E116PkO75T7KBx0EXIS%2BIK81hLse9yLwa9ecpnp5J0dPmLXkiyL8TPZo2O5ANFr797aniKsJEc3ijnkugBU0klupwAFQzi035hwMK7zgpoBX5A%2B8oSCeXRpLEilQtobMWWDJtxDD96BJnqUvP6%2B1a7rzOd5179v9H0ImBfVZyP4YA1v9wx2sGwVx6%2BcAjETA6Ylbs4Zk03rtADF%2BFmOQ6N31UAr5kmVII3J385SfLaHw%2FZCXzSVn%2FL6xiLqHW2wvJ6H7p15Y5kX%2BbSB4m0PZp%2BjNhMqDWjHo1zOaLWAtsFJJzQs%2B2RC22CVhN4wLDN0WExAnXmdRb4EHrEoQhb6eC7ucFMO%2B5gcMGOqUBhDPgCU54x3C%2Bhf5ZABEaDdLQ8oK1e0Cx4e5gUPkUwzp7KyjyCTyTenKWth01WHVoxDn3q8hhOWKjw06YXXDuhKblvaqVgB%2Bsff9zqcJa69JhQRr9%2FhmnzIIBUxKb%2BKFHNkQB06Jos%2FPi15ED%2B8MIg3IPkfWtEXjvvf768A1%2F1CRYeR5sWK6%2FbSd7OFMH4m4LhgZ54Y%2BZOYkC6DI%2FWVF6N9Csc1hX&X-Amz-Signature=d12f7a851bd7caaefdd108f5a98324f212c0fc860f3eef92b01b5b21f8818af9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
