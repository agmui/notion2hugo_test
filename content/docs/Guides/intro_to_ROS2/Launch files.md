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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW2RE23Y%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKBrD2wQXYPwcI%2FNOfM3fflid%2BgqYDiDiXOSDqWlofowIgOLHlRzFvsJN0VpexXgYZSSQAFEm%2BKvtZuONBtNAjIkQqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKfq075ighnQn%2BxcyrcA2MsfQPN3bNCFBNvrCSfiySGQCain6bM4lPuhjok9vVknzr1FoutxwxgZ9Ky4q%2Fnkz5%2FV%2B%2F0maJ2LWOJ2eqCdooLrHUiZRUfukry6icCo8brPN173V9ylSXZ99rHakFY%2B4YiBiFqLeLkfvdRGcRefjvRXm7D8GLXmOPHRx9otZboG%2Baik0Sdgsc7s1sbyW0vd5%2Fh9mK1FIUmI62teBgrQ2zy%2BVyS%2Fmkcia5cXtf8ERkWNtLSGaog3vE9Rrfp3vRWrbJdcyZfXsqM9%2FYuVhCEvXd8KyXDJYo8odBbAQtum5J6ZblZkhymHQmlPP7n0hyqtQdpkzcFDQdhJLQZkoBigQiyLC4RoknHj4o%2BRT%2BMW5pcBQy93w0Yu%2BkKQQ9fdkIGjtCXAsRPs0oMxgioXtaycK7v4sWo6USlamZyNgoEAqqnrD44BOgfWquUcM6pPhFiZ7%2FU5OKA1UF1tSXR1LpMhHpGEdae57Sg0%2FOKP8%2F41Lq2vbk0PPdqMpawMQNYQor8VDdmH%2B7FL%2FbWBTv%2FzVT6%2FGoKKydZ4bRgWLModl89IVhBldlhjGEgB2CSkTAyj9lc%2Bm%2BLRQ6ulPznc39g3duq9NQyaILhZgeVDFkN7cXEVabyEed%2Fjv4pyGgW26QuMPXqsMEGOqUBtNeWyd3G08UbhSJOY5W7krvDkDOrDUu4JwqsSqtx3lhh5ZNoUWnLDvTGa6EtbY86xemvb524EXWlWsxNa17jpxe3%2Bx%2BIKt%2Bef3%2F8OdlGqOMqIF8ZvG0n49Am1E5PXeNUwYAn9VB7Rr%2FlE93x4XPg2ssc2Aj40tAyM5m4mm1A5DsHyNsvMTU0weXFHqn1f8z8aVQbU6gsZWMHO7wkidh25kYHD24v&X-Amz-Signature=1be29d70172672341e8eaf8c1060eba5163f06f9fbce17c9c0a3664354a023e4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW2RE23Y%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKBrD2wQXYPwcI%2FNOfM3fflid%2BgqYDiDiXOSDqWlofowIgOLHlRzFvsJN0VpexXgYZSSQAFEm%2BKvtZuONBtNAjIkQqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKfq075ighnQn%2BxcyrcA2MsfQPN3bNCFBNvrCSfiySGQCain6bM4lPuhjok9vVknzr1FoutxwxgZ9Ky4q%2Fnkz5%2FV%2B%2F0maJ2LWOJ2eqCdooLrHUiZRUfukry6icCo8brPN173V9ylSXZ99rHakFY%2B4YiBiFqLeLkfvdRGcRefjvRXm7D8GLXmOPHRx9otZboG%2Baik0Sdgsc7s1sbyW0vd5%2Fh9mK1FIUmI62teBgrQ2zy%2BVyS%2Fmkcia5cXtf8ERkWNtLSGaog3vE9Rrfp3vRWrbJdcyZfXsqM9%2FYuVhCEvXd8KyXDJYo8odBbAQtum5J6ZblZkhymHQmlPP7n0hyqtQdpkzcFDQdhJLQZkoBigQiyLC4RoknHj4o%2BRT%2BMW5pcBQy93w0Yu%2BkKQQ9fdkIGjtCXAsRPs0oMxgioXtaycK7v4sWo6USlamZyNgoEAqqnrD44BOgfWquUcM6pPhFiZ7%2FU5OKA1UF1tSXR1LpMhHpGEdae57Sg0%2FOKP8%2F41Lq2vbk0PPdqMpawMQNYQor8VDdmH%2B7FL%2FbWBTv%2FzVT6%2FGoKKydZ4bRgWLModl89IVhBldlhjGEgB2CSkTAyj9lc%2Bm%2BLRQ6ulPznc39g3duq9NQyaILhZgeVDFkN7cXEVabyEed%2Fjv4pyGgW26QuMPXqsMEGOqUBtNeWyd3G08UbhSJOY5W7krvDkDOrDUu4JwqsSqtx3lhh5ZNoUWnLDvTGa6EtbY86xemvb524EXWlWsxNa17jpxe3%2Bx%2BIKt%2Bef3%2F8OdlGqOMqIF8ZvG0n49Am1E5PXeNUwYAn9VB7Rr%2FlE93x4XPg2ssc2Aj40tAyM5m4mm1A5DsHyNsvMTU0weXFHqn1f8z8aVQbU6gsZWMHO7wkidh25kYHD24v&X-Amz-Signature=7795df091466039cdcf244f680c7fd052e323dfde36321b829cb4a225f6ec171&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW2RE23Y%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKBrD2wQXYPwcI%2FNOfM3fflid%2BgqYDiDiXOSDqWlofowIgOLHlRzFvsJN0VpexXgYZSSQAFEm%2BKvtZuONBtNAjIkQqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKfq075ighnQn%2BxcyrcA2MsfQPN3bNCFBNvrCSfiySGQCain6bM4lPuhjok9vVknzr1FoutxwxgZ9Ky4q%2Fnkz5%2FV%2B%2F0maJ2LWOJ2eqCdooLrHUiZRUfukry6icCo8brPN173V9ylSXZ99rHakFY%2B4YiBiFqLeLkfvdRGcRefjvRXm7D8GLXmOPHRx9otZboG%2Baik0Sdgsc7s1sbyW0vd5%2Fh9mK1FIUmI62teBgrQ2zy%2BVyS%2Fmkcia5cXtf8ERkWNtLSGaog3vE9Rrfp3vRWrbJdcyZfXsqM9%2FYuVhCEvXd8KyXDJYo8odBbAQtum5J6ZblZkhymHQmlPP7n0hyqtQdpkzcFDQdhJLQZkoBigQiyLC4RoknHj4o%2BRT%2BMW5pcBQy93w0Yu%2BkKQQ9fdkIGjtCXAsRPs0oMxgioXtaycK7v4sWo6USlamZyNgoEAqqnrD44BOgfWquUcM6pPhFiZ7%2FU5OKA1UF1tSXR1LpMhHpGEdae57Sg0%2FOKP8%2F41Lq2vbk0PPdqMpawMQNYQor8VDdmH%2B7FL%2FbWBTv%2FzVT6%2FGoKKydZ4bRgWLModl89IVhBldlhjGEgB2CSkTAyj9lc%2Bm%2BLRQ6ulPznc39g3duq9NQyaILhZgeVDFkN7cXEVabyEed%2Fjv4pyGgW26QuMPXqsMEGOqUBtNeWyd3G08UbhSJOY5W7krvDkDOrDUu4JwqsSqtx3lhh5ZNoUWnLDvTGa6EtbY86xemvb524EXWlWsxNa17jpxe3%2Bx%2BIKt%2Bef3%2F8OdlGqOMqIF8ZvG0n49Am1E5PXeNUwYAn9VB7Rr%2FlE93x4XPg2ssc2Aj40tAyM5m4mm1A5DsHyNsvMTU0weXFHqn1f8z8aVQbU6gsZWMHO7wkidh25kYHD24v&X-Amz-Signature=9063790890e5ad85bc79aaecd9c777a3d06897d8e78cd2fac1674a9200ea6398&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
