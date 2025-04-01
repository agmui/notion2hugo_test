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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NTIEON4%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T041140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDoLtZvZaPQJ%2BdJd0JfWa1HwHp7DXxLyYJCl26XGbLr7wIgap8SZH4vQcYhzdQQFGwgp9YXFX3wS9p3BTNtDOrzINgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLsNxVTHsWpd4Gw92ircAya5rha%2Bmjr%2B2fXVwZdvMeINp1Cg%2F0SeC6Z8dnGn%2Bs%2BGwXMm8hju51s3BNRhpWW5y6QjUfCUniH1VXtWeiOw7%2BdH1ImXoN6zGYrYfgs8Fsz3l03CEpr4zXw2%2Bljm9EKYEEVMms12J50baU8ST2o5wX3m%2FyCBKynxNi%2FVz6w%2BQy2XV0%2FnyxCm3HgxTnS7NVGXzWdYRl9qZfO9taJ50q4FEIGsLJIdpbdZy9hBJzM3SBOlgsxOpcuN5r36qWYwXTvut4oh3kRESfcL1MxX28Y5U%2FP8xvSzKu0gVivvSJq%2FO%2FAQv%2BsX4DmUaF62dK1s3iAF4PyvR6NAxlSKtlYm8hUvf8xXQuWNhlfZDXm7S7XRU7gRAEIdnC6kVNGCvFivDo7gOKBrxES0sgZ58Bz8nN5PrCRuJcPNq0lj%2BlVvgiUTv0p%2Fp39OYED806ZmeSQiNKhgWEduAV%2BND16H5RTwxjQ6DrXRiJsZH4nJd27GFBKFHIaYgu2p3%2Be2U9Rpt0yPIu8VaS5h%2BDMxuoH1oS%2Fi5CkC%2FWn9raWW1HxHsrHiGdCpRRrmwj%2FaQAypR%2BsvbZGl%2Fc4BIxK5ABgpcYsavSVVDH2L2wSIzy0%2B2QXFkBaugFuoicNapQ5JTZmD5tNqYIZMMM6krb8GOqUBvax0CbXFbDAoOz%2BryIzCwRu4R%2Fbg36CIhfJVoGJd94lyGLl5ZOErCShgfBXquXSBsvBNhulLxkh%2FFVa4Qrm9poACSPyaHCyTBsvJ6jiQbIHAgzR%2Bd7DcO06NUKMm5e5YzIemixbtQTl6ieFC5v%2BhUnvrrQrOQHsDn9UAMzB6OWSNp4vNn0gjIcCvj7UrSUd%2B%2BEAOYI6ca76%2BDkRov6i67%2Fa1zHQv&X-Amz-Signature=4233fa593a850360d7f270270ffeb3a73f1d6776ef5963bc754d256cd5a77464&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NTIEON4%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T041140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDoLtZvZaPQJ%2BdJd0JfWa1HwHp7DXxLyYJCl26XGbLr7wIgap8SZH4vQcYhzdQQFGwgp9YXFX3wS9p3BTNtDOrzINgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLsNxVTHsWpd4Gw92ircAya5rha%2Bmjr%2B2fXVwZdvMeINp1Cg%2F0SeC6Z8dnGn%2Bs%2BGwXMm8hju51s3BNRhpWW5y6QjUfCUniH1VXtWeiOw7%2BdH1ImXoN6zGYrYfgs8Fsz3l03CEpr4zXw2%2Bljm9EKYEEVMms12J50baU8ST2o5wX3m%2FyCBKynxNi%2FVz6w%2BQy2XV0%2FnyxCm3HgxTnS7NVGXzWdYRl9qZfO9taJ50q4FEIGsLJIdpbdZy9hBJzM3SBOlgsxOpcuN5r36qWYwXTvut4oh3kRESfcL1MxX28Y5U%2FP8xvSzKu0gVivvSJq%2FO%2FAQv%2BsX4DmUaF62dK1s3iAF4PyvR6NAxlSKtlYm8hUvf8xXQuWNhlfZDXm7S7XRU7gRAEIdnC6kVNGCvFivDo7gOKBrxES0sgZ58Bz8nN5PrCRuJcPNq0lj%2BlVvgiUTv0p%2Fp39OYED806ZmeSQiNKhgWEduAV%2BND16H5RTwxjQ6DrXRiJsZH4nJd27GFBKFHIaYgu2p3%2Be2U9Rpt0yPIu8VaS5h%2BDMxuoH1oS%2Fi5CkC%2FWn9raWW1HxHsrHiGdCpRRrmwj%2FaQAypR%2BsvbZGl%2Fc4BIxK5ABgpcYsavSVVDH2L2wSIzy0%2B2QXFkBaugFuoicNapQ5JTZmD5tNqYIZMMM6krb8GOqUBvax0CbXFbDAoOz%2BryIzCwRu4R%2Fbg36CIhfJVoGJd94lyGLl5ZOErCShgfBXquXSBsvBNhulLxkh%2FFVa4Qrm9poACSPyaHCyTBsvJ6jiQbIHAgzR%2Bd7DcO06NUKMm5e5YzIemixbtQTl6ieFC5v%2BhUnvrrQrOQHsDn9UAMzB6OWSNp4vNn0gjIcCvj7UrSUd%2B%2BEAOYI6ca76%2BDkRov6i67%2Fa1zHQv&X-Amz-Signature=b3f6ba9a1d299b39f2e15b13c3e32dcc813cb32144397f0b468762ca0deb260e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NTIEON4%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T041140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDoLtZvZaPQJ%2BdJd0JfWa1HwHp7DXxLyYJCl26XGbLr7wIgap8SZH4vQcYhzdQQFGwgp9YXFX3wS9p3BTNtDOrzINgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLsNxVTHsWpd4Gw92ircAya5rha%2Bmjr%2B2fXVwZdvMeINp1Cg%2F0SeC6Z8dnGn%2Bs%2BGwXMm8hju51s3BNRhpWW5y6QjUfCUniH1VXtWeiOw7%2BdH1ImXoN6zGYrYfgs8Fsz3l03CEpr4zXw2%2Bljm9EKYEEVMms12J50baU8ST2o5wX3m%2FyCBKynxNi%2FVz6w%2BQy2XV0%2FnyxCm3HgxTnS7NVGXzWdYRl9qZfO9taJ50q4FEIGsLJIdpbdZy9hBJzM3SBOlgsxOpcuN5r36qWYwXTvut4oh3kRESfcL1MxX28Y5U%2FP8xvSzKu0gVivvSJq%2FO%2FAQv%2BsX4DmUaF62dK1s3iAF4PyvR6NAxlSKtlYm8hUvf8xXQuWNhlfZDXm7S7XRU7gRAEIdnC6kVNGCvFivDo7gOKBrxES0sgZ58Bz8nN5PrCRuJcPNq0lj%2BlVvgiUTv0p%2Fp39OYED806ZmeSQiNKhgWEduAV%2BND16H5RTwxjQ6DrXRiJsZH4nJd27GFBKFHIaYgu2p3%2Be2U9Rpt0yPIu8VaS5h%2BDMxuoH1oS%2Fi5CkC%2FWn9raWW1HxHsrHiGdCpRRrmwj%2FaQAypR%2BsvbZGl%2Fc4BIxK5ABgpcYsavSVVDH2L2wSIzy0%2B2QXFkBaugFuoicNapQ5JTZmD5tNqYIZMMM6krb8GOqUBvax0CbXFbDAoOz%2BryIzCwRu4R%2Fbg36CIhfJVoGJd94lyGLl5ZOErCShgfBXquXSBsvBNhulLxkh%2FFVa4Qrm9poACSPyaHCyTBsvJ6jiQbIHAgzR%2Bd7DcO06NUKMm5e5YzIemixbtQTl6ieFC5v%2BhUnvrrQrOQHsDn9UAMzB6OWSNp4vNn0gjIcCvj7UrSUd%2B%2BEAOYI6ca76%2BDkRov6i67%2Fa1zHQv&X-Amz-Signature=818fed40e81ceec9e3248ac94cb5d7534e85812e69fa5ca8c5429ae0fe9a8fcb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
