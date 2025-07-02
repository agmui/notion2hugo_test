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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667KOOGFI%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BxcU5xPGOAF%2FZmalQQlcPTipkm9FHVUZJAIzQLzgHTgIgP%2FCEOgBaSe%2FpQau7j3qkWSfKAdZC5TZw44nFwOI0PCoqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUyze3DwmFE%2BxzRVyrcA0eRs%2F%2BXsLNOpNzoDNSxqBpdSfRpoC22FVl5sVpWboESfXZCw9hFc7UTDtKiBjF74bMsrXXvhGtbR1fuKDV4y1xJm1nGJSLjQju83KILpMyfC13su3pTt0k2FITFW%2F41qrKHGyvncHHc37E8PZEg2lobwWQ6Bsk7Ky7GZt%2B%2FN5h2mILmhtn6CunYRRe%2FgYhvi9%2F5K3zzgksZeM98onMXO50%2BIKLPZh5%2FntI9WDxrqeRRCZaheYwXZNXtN%2FU8h97wUNx6E3FWA%2FzBDSbcUpwc4En9u2Cfx%2FX9tesFSZuShgtzv2kyl5VGQ6%2B1re9JZx4J8kdhHA%2Fz3nDv3pfCYcTRxvTlMklww36Ot4q%2FWO5b5TODa%2F%2Bxhvl8PjPwsG7CfdvuAzTwJ89HLNeG9vsNeWhgBaw%2BPUNr%2FRnnB8eaEoDDpRkodX1kKZPls2bTnthwgS5%2Fh9PHLyhdrzbKLdHDvcT3A2iaPc1O2wjnfnLnwqU5iRUbgTkpPaDiTyif8DLQmq%2FSJ4A4DCVxSOuoy452xKNc4ARNOT30tdw3BzTpCWDmBXZh%2BUHPJglSmCCegHgGoeKpJcH0F97KZjEPsZlEQLY2BEXJRAdPNAgPHQR5BP0TA5pjEqr7beJ0VikaDCXfMJiTlcMGOqUBNtdckocW58ShFbIUZOzoOwpZCDNTH31Fti4RM8irvwkTECfc9Bud3O80O2SGW9eho8vfpLtuVfeSCzZ3UsYTlBiKcr0b2vJB%2FsxILRuXATb85rlD1BFi5NxfjSVVicABCbbBvMI0jytMYbgbcSQCgvZaX7nClSPgQTIrK6xGJWiqME9bhMNLDAjS%2FYvCXVVFOri5qGoHZJfIeGmGIuA%2BxTFo0PKc&X-Amz-Signature=a491f7374daf76f557e541559631966f46cbe4ab0737a367e4d1a3f41af47c22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667KOOGFI%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BxcU5xPGOAF%2FZmalQQlcPTipkm9FHVUZJAIzQLzgHTgIgP%2FCEOgBaSe%2FpQau7j3qkWSfKAdZC5TZw44nFwOI0PCoqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUyze3DwmFE%2BxzRVyrcA0eRs%2F%2BXsLNOpNzoDNSxqBpdSfRpoC22FVl5sVpWboESfXZCw9hFc7UTDtKiBjF74bMsrXXvhGtbR1fuKDV4y1xJm1nGJSLjQju83KILpMyfC13su3pTt0k2FITFW%2F41qrKHGyvncHHc37E8PZEg2lobwWQ6Bsk7Ky7GZt%2B%2FN5h2mILmhtn6CunYRRe%2FgYhvi9%2F5K3zzgksZeM98onMXO50%2BIKLPZh5%2FntI9WDxrqeRRCZaheYwXZNXtN%2FU8h97wUNx6E3FWA%2FzBDSbcUpwc4En9u2Cfx%2FX9tesFSZuShgtzv2kyl5VGQ6%2B1re9JZx4J8kdhHA%2Fz3nDv3pfCYcTRxvTlMklww36Ot4q%2FWO5b5TODa%2F%2Bxhvl8PjPwsG7CfdvuAzTwJ89HLNeG9vsNeWhgBaw%2BPUNr%2FRnnB8eaEoDDpRkodX1kKZPls2bTnthwgS5%2Fh9PHLyhdrzbKLdHDvcT3A2iaPc1O2wjnfnLnwqU5iRUbgTkpPaDiTyif8DLQmq%2FSJ4A4DCVxSOuoy452xKNc4ARNOT30tdw3BzTpCWDmBXZh%2BUHPJglSmCCegHgGoeKpJcH0F97KZjEPsZlEQLY2BEXJRAdPNAgPHQR5BP0TA5pjEqr7beJ0VikaDCXfMJiTlcMGOqUBNtdckocW58ShFbIUZOzoOwpZCDNTH31Fti4RM8irvwkTECfc9Bud3O80O2SGW9eho8vfpLtuVfeSCzZ3UsYTlBiKcr0b2vJB%2FsxILRuXATb85rlD1BFi5NxfjSVVicABCbbBvMI0jytMYbgbcSQCgvZaX7nClSPgQTIrK6xGJWiqME9bhMNLDAjS%2FYvCXVVFOri5qGoHZJfIeGmGIuA%2BxTFo0PKc&X-Amz-Signature=85f904698544bf7944d311a03faf20725b511de021b95238921b25dce4e16047&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667KOOGFI%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BxcU5xPGOAF%2FZmalQQlcPTipkm9FHVUZJAIzQLzgHTgIgP%2FCEOgBaSe%2FpQau7j3qkWSfKAdZC5TZw44nFwOI0PCoqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUyze3DwmFE%2BxzRVyrcA0eRs%2F%2BXsLNOpNzoDNSxqBpdSfRpoC22FVl5sVpWboESfXZCw9hFc7UTDtKiBjF74bMsrXXvhGtbR1fuKDV4y1xJm1nGJSLjQju83KILpMyfC13su3pTt0k2FITFW%2F41qrKHGyvncHHc37E8PZEg2lobwWQ6Bsk7Ky7GZt%2B%2FN5h2mILmhtn6CunYRRe%2FgYhvi9%2F5K3zzgksZeM98onMXO50%2BIKLPZh5%2FntI9WDxrqeRRCZaheYwXZNXtN%2FU8h97wUNx6E3FWA%2FzBDSbcUpwc4En9u2Cfx%2FX9tesFSZuShgtzv2kyl5VGQ6%2B1re9JZx4J8kdhHA%2Fz3nDv3pfCYcTRxvTlMklww36Ot4q%2FWO5b5TODa%2F%2Bxhvl8PjPwsG7CfdvuAzTwJ89HLNeG9vsNeWhgBaw%2BPUNr%2FRnnB8eaEoDDpRkodX1kKZPls2bTnthwgS5%2Fh9PHLyhdrzbKLdHDvcT3A2iaPc1O2wjnfnLnwqU5iRUbgTkpPaDiTyif8DLQmq%2FSJ4A4DCVxSOuoy452xKNc4ARNOT30tdw3BzTpCWDmBXZh%2BUHPJglSmCCegHgGoeKpJcH0F97KZjEPsZlEQLY2BEXJRAdPNAgPHQR5BP0TA5pjEqr7beJ0VikaDCXfMJiTlcMGOqUBNtdckocW58ShFbIUZOzoOwpZCDNTH31Fti4RM8irvwkTECfc9Bud3O80O2SGW9eho8vfpLtuVfeSCzZ3UsYTlBiKcr0b2vJB%2FsxILRuXATb85rlD1BFi5NxfjSVVicABCbbBvMI0jytMYbgbcSQCgvZaX7nClSPgQTIrK6xGJWiqME9bhMNLDAjS%2FYvCXVVFOri5qGoHZJfIeGmGIuA%2BxTFo0PKc&X-Amz-Signature=e3b2da038e65d435ee2366f5534409edf7fc39313bf7febf57b14ae75e17c3b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
