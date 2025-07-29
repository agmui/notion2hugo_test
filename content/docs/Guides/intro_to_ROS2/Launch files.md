---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZAISXV6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCMPm1I3jey6pn%2Fcox1f8zHgroF%2BJISs83yyhyY1Hy34QIhALxn4uRZ02CgppIFaXx0YggAu%2BU%2BGG9G%2BFMatsOZM0AYKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAgNcGlMR737R8doYq3AMuYm%2FU3Eyae9Hce6m4BH2zadEJp5O3ySBlzy8FolJ0PFGwWczqzeG6PiOh2wKN%2FgQT2WsKuIrgc%2BVM%2BpPMdnhtJcODnVkVNQTm0P%2F0fyXJxgca8pVcyQDKy36wbXy%2FZ32OemWgrHBqa0oE7LSHpzXDLSE0sEbBoS30VHXmmeaZEILNeOVvvVyGrLsZXe9Q4jGXBE59i8y5ZN3nt%2B5gs5MKVsSb01sy3lO%2BOZbM12qNI9wkNDSiMInZVK%2BFHZ8D%2B9OhQvKcv2APFpb069HuZrmk8NNOPVNwCuf7yiTWGHL4CymS7JbhpWKXefoRVxOCjjpetyQiPpDKduZexKdL03Bc8Lb2i2lWOJwyHAsy1qdHcL49JGLyMpf5ErrrFYcbuGXe2PjR0G1M%2FyEg9ouGWC8c%2Bpb0BTJhQfojpEF2ro%2BOueL3MBFYCMdE7qA%2FRMwKZuOk13cS2KjgQA36H29z7iRG3opfspvPDtpkfd4bGK8u%2FT0n1p%2Fo5u6skEeNl9Q541neEHCYBZHBmv3FWY2gys40mNf4xM%2FfU2sUoKA%2BLlY7%2FyuqkVvK3diHo0igAxextGxtoaFpaRfcc4C8U3OofmS%2BtTbOdG6SSVnAHgVPH0h2IVHxxSaC4E0BSc5qFjCNhaLEBjqkAST2XWym84aW0I3tpDFYozh6FprWK7b2S7BQSCVl3cl8dYJmABXaKHLl37SJfGKBCRdSwyjdKqfz86FHtI89WcNmuzpo1%2F2YFwDt%2BITM3vrwRlL5VdZP%2FX3ZYbL7t1T7ailxGJvGYZ%2BCQmdIGNjiKw9Bmtd4o%2Faycmcs5FltaJfbR1nFKVDwXVjvTB9aCiDTQ35FkEfx1K3HcXwOShiAWXYLmdPI&X-Amz-Signature=2be6062a18e8af0d7a79c214b2aed8018710c470f7f5798b9ac045606906476a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZAISXV6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCMPm1I3jey6pn%2Fcox1f8zHgroF%2BJISs83yyhyY1Hy34QIhALxn4uRZ02CgppIFaXx0YggAu%2BU%2BGG9G%2BFMatsOZM0AYKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAgNcGlMR737R8doYq3AMuYm%2FU3Eyae9Hce6m4BH2zadEJp5O3ySBlzy8FolJ0PFGwWczqzeG6PiOh2wKN%2FgQT2WsKuIrgc%2BVM%2BpPMdnhtJcODnVkVNQTm0P%2F0fyXJxgca8pVcyQDKy36wbXy%2FZ32OemWgrHBqa0oE7LSHpzXDLSE0sEbBoS30VHXmmeaZEILNeOVvvVyGrLsZXe9Q4jGXBE59i8y5ZN3nt%2B5gs5MKVsSb01sy3lO%2BOZbM12qNI9wkNDSiMInZVK%2BFHZ8D%2B9OhQvKcv2APFpb069HuZrmk8NNOPVNwCuf7yiTWGHL4CymS7JbhpWKXefoRVxOCjjpetyQiPpDKduZexKdL03Bc8Lb2i2lWOJwyHAsy1qdHcL49JGLyMpf5ErrrFYcbuGXe2PjR0G1M%2FyEg9ouGWC8c%2Bpb0BTJhQfojpEF2ro%2BOueL3MBFYCMdE7qA%2FRMwKZuOk13cS2KjgQA36H29z7iRG3opfspvPDtpkfd4bGK8u%2FT0n1p%2Fo5u6skEeNl9Q541neEHCYBZHBmv3FWY2gys40mNf4xM%2FfU2sUoKA%2BLlY7%2FyuqkVvK3diHo0igAxextGxtoaFpaRfcc4C8U3OofmS%2BtTbOdG6SSVnAHgVPH0h2IVHxxSaC4E0BSc5qFjCNhaLEBjqkAST2XWym84aW0I3tpDFYozh6FprWK7b2S7BQSCVl3cl8dYJmABXaKHLl37SJfGKBCRdSwyjdKqfz86FHtI89WcNmuzpo1%2F2YFwDt%2BITM3vrwRlL5VdZP%2FX3ZYbL7t1T7ailxGJvGYZ%2BCQmdIGNjiKw9Bmtd4o%2Faycmcs5FltaJfbR1nFKVDwXVjvTB9aCiDTQ35FkEfx1K3HcXwOShiAWXYLmdPI&X-Amz-Signature=c249dcfd8cd1cd9376182c0c15e1f29111d52c90dcc44f21649a4f3f3fb68961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZAISXV6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCMPm1I3jey6pn%2Fcox1f8zHgroF%2BJISs83yyhyY1Hy34QIhALxn4uRZ02CgppIFaXx0YggAu%2BU%2BGG9G%2BFMatsOZM0AYKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAgNcGlMR737R8doYq3AMuYm%2FU3Eyae9Hce6m4BH2zadEJp5O3ySBlzy8FolJ0PFGwWczqzeG6PiOh2wKN%2FgQT2WsKuIrgc%2BVM%2BpPMdnhtJcODnVkVNQTm0P%2F0fyXJxgca8pVcyQDKy36wbXy%2FZ32OemWgrHBqa0oE7LSHpzXDLSE0sEbBoS30VHXmmeaZEILNeOVvvVyGrLsZXe9Q4jGXBE59i8y5ZN3nt%2B5gs5MKVsSb01sy3lO%2BOZbM12qNI9wkNDSiMInZVK%2BFHZ8D%2B9OhQvKcv2APFpb069HuZrmk8NNOPVNwCuf7yiTWGHL4CymS7JbhpWKXefoRVxOCjjpetyQiPpDKduZexKdL03Bc8Lb2i2lWOJwyHAsy1qdHcL49JGLyMpf5ErrrFYcbuGXe2PjR0G1M%2FyEg9ouGWC8c%2Bpb0BTJhQfojpEF2ro%2BOueL3MBFYCMdE7qA%2FRMwKZuOk13cS2KjgQA36H29z7iRG3opfspvPDtpkfd4bGK8u%2FT0n1p%2Fo5u6skEeNl9Q541neEHCYBZHBmv3FWY2gys40mNf4xM%2FfU2sUoKA%2BLlY7%2FyuqkVvK3diHo0igAxextGxtoaFpaRfcc4C8U3OofmS%2BtTbOdG6SSVnAHgVPH0h2IVHxxSaC4E0BSc5qFjCNhaLEBjqkAST2XWym84aW0I3tpDFYozh6FprWK7b2S7BQSCVl3cl8dYJmABXaKHLl37SJfGKBCRdSwyjdKqfz86FHtI89WcNmuzpo1%2F2YFwDt%2BITM3vrwRlL5VdZP%2FX3ZYbL7t1T7ailxGJvGYZ%2BCQmdIGNjiKw9Bmtd4o%2Faycmcs5FltaJfbR1nFKVDwXVjvTB9aCiDTQ35FkEfx1K3HcXwOShiAWXYLmdPI&X-Amz-Signature=ebeb7a9b2e7ead142408af289338f68df988282d78dd1832d9c5ff13496d5df0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
