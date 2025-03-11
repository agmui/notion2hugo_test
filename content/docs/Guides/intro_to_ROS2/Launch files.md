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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STXUOOGP%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQD7OvGW8KUNOKhOPOTOBbJpuW%2F3qgaVCPrs%2BTVaAIUyjwIhAPXonpsr7h20%2B8g%2Fot5nFlVIkTb%2Fc7elFY5OTSCbBS5DKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwOvz5PlW4sHVrf%2B4q3AO%2FpjwE8av6AM2tiy92xGcpfG2vPqnqb%2Bx%2FrC%2F%2BkZb8v9Dfx05bXTA3U0F40mqhNSdS5cYy%2FI%2BnUqj7aJoDKNRtpFg%2BBVIySjkkSDeYZBH1YCpdBwAP9hRqOJs%2BzBWya5tUXhGVB47awaUsDLfO9inJIquK%2B4%2FbeCsV4%2BKVUUyx9MEzKqVLdtCbP4m140K8lm0Tsg2bh%2BiGlFRTpPKJPQ47bNvDR2IUJnxkruoK6l1v4g984JJ4idpJE3yaDTsv%2BzWnbYLm8F%2F%2F9%2Bf5mKLeoCwMRBdByqBAWsP7YoqL2%2BfV1I%2Fee%2FbI7xMt4gaikAXA53lYyT9Op%2BuD%2FEEQDDx8nwkMQSCrZ9XbWJIcHMmh5GXE5Qo4XDXPUZpjrl%2Fp9%2BfeXfGn%2B21mdIAm7AFQsVO78X%2Fk2ZDOm2st6t4Md%2BZbJHhLn2J1W510CRE3G%2BtVWLfpWupaGD5El%2BD4m3lnII19P5TYswl07eXsThrj7Sj7dfQbEZMY6K3UpK%2FntnltU2GmU%2BiNxqEmjntZ3TtBqv1lGdmrPKvbCFrm%2BSoIVdwrj3buQ5Sut%2BSBLAQh5Bt4m2qoJk3a6p0ia9lCoVJzjFnjZU5KmMyMUpzJ1SXSU3EAZfAm%2F3aBeD9tAA1KJa5t4zCJ8L6%2BBjqkAcO%2F4KDV%2FxAibGyjen7iLbd4QmaKaKhOzfDrGpc0EawkOJ3x%2BijP7KBDWs2zgggA%2FKwjOsxU2tO376fZd9ZGFJqgBstdm%2Bio0bYp4UBk588VxtQnthcTbCXloK0xFbDhODOC31SX5eu4CKJcRjYkua9LvlEjfsYiPwU8%2Bt8dn8n0NpvfW7kNBdzm%2BmAbF7S6ib735SrKQ2YQpwhoHcIzHfpEfDsr&X-Amz-Signature=d7cf9a0ea1e53c5b3652005c346cd38632f4080349a2095b1e8134268d1f474c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STXUOOGP%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQD7OvGW8KUNOKhOPOTOBbJpuW%2F3qgaVCPrs%2BTVaAIUyjwIhAPXonpsr7h20%2B8g%2Fot5nFlVIkTb%2Fc7elFY5OTSCbBS5DKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwOvz5PlW4sHVrf%2B4q3AO%2FpjwE8av6AM2tiy92xGcpfG2vPqnqb%2Bx%2FrC%2F%2BkZb8v9Dfx05bXTA3U0F40mqhNSdS5cYy%2FI%2BnUqj7aJoDKNRtpFg%2BBVIySjkkSDeYZBH1YCpdBwAP9hRqOJs%2BzBWya5tUXhGVB47awaUsDLfO9inJIquK%2B4%2FbeCsV4%2BKVUUyx9MEzKqVLdtCbP4m140K8lm0Tsg2bh%2BiGlFRTpPKJPQ47bNvDR2IUJnxkruoK6l1v4g984JJ4idpJE3yaDTsv%2BzWnbYLm8F%2F%2F9%2Bf5mKLeoCwMRBdByqBAWsP7YoqL2%2BfV1I%2Fee%2FbI7xMt4gaikAXA53lYyT9Op%2BuD%2FEEQDDx8nwkMQSCrZ9XbWJIcHMmh5GXE5Qo4XDXPUZpjrl%2Fp9%2BfeXfGn%2B21mdIAm7AFQsVO78X%2Fk2ZDOm2st6t4Md%2BZbJHhLn2J1W510CRE3G%2BtVWLfpWupaGD5El%2BD4m3lnII19P5TYswl07eXsThrj7Sj7dfQbEZMY6K3UpK%2FntnltU2GmU%2BiNxqEmjntZ3TtBqv1lGdmrPKvbCFrm%2BSoIVdwrj3buQ5Sut%2BSBLAQh5Bt4m2qoJk3a6p0ia9lCoVJzjFnjZU5KmMyMUpzJ1SXSU3EAZfAm%2F3aBeD9tAA1KJa5t4zCJ8L6%2BBjqkAcO%2F4KDV%2FxAibGyjen7iLbd4QmaKaKhOzfDrGpc0EawkOJ3x%2BijP7KBDWs2zgggA%2FKwjOsxU2tO376fZd9ZGFJqgBstdm%2Bio0bYp4UBk588VxtQnthcTbCXloK0xFbDhODOC31SX5eu4CKJcRjYkua9LvlEjfsYiPwU8%2Bt8dn8n0NpvfW7kNBdzm%2BmAbF7S6ib735SrKQ2YQpwhoHcIzHfpEfDsr&X-Amz-Signature=5692818f832fac803612c6f9ea0ed89d83eec68de7499826e081f94f0923785f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STXUOOGP%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQD7OvGW8KUNOKhOPOTOBbJpuW%2F3qgaVCPrs%2BTVaAIUyjwIhAPXonpsr7h20%2B8g%2Fot5nFlVIkTb%2Fc7elFY5OTSCbBS5DKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwOvz5PlW4sHVrf%2B4q3AO%2FpjwE8av6AM2tiy92xGcpfG2vPqnqb%2Bx%2FrC%2F%2BkZb8v9Dfx05bXTA3U0F40mqhNSdS5cYy%2FI%2BnUqj7aJoDKNRtpFg%2BBVIySjkkSDeYZBH1YCpdBwAP9hRqOJs%2BzBWya5tUXhGVB47awaUsDLfO9inJIquK%2B4%2FbeCsV4%2BKVUUyx9MEzKqVLdtCbP4m140K8lm0Tsg2bh%2BiGlFRTpPKJPQ47bNvDR2IUJnxkruoK6l1v4g984JJ4idpJE3yaDTsv%2BzWnbYLm8F%2F%2F9%2Bf5mKLeoCwMRBdByqBAWsP7YoqL2%2BfV1I%2Fee%2FbI7xMt4gaikAXA53lYyT9Op%2BuD%2FEEQDDx8nwkMQSCrZ9XbWJIcHMmh5GXE5Qo4XDXPUZpjrl%2Fp9%2BfeXfGn%2B21mdIAm7AFQsVO78X%2Fk2ZDOm2st6t4Md%2BZbJHhLn2J1W510CRE3G%2BtVWLfpWupaGD5El%2BD4m3lnII19P5TYswl07eXsThrj7Sj7dfQbEZMY6K3UpK%2FntnltU2GmU%2BiNxqEmjntZ3TtBqv1lGdmrPKvbCFrm%2BSoIVdwrj3buQ5Sut%2BSBLAQh5Bt4m2qoJk3a6p0ia9lCoVJzjFnjZU5KmMyMUpzJ1SXSU3EAZfAm%2F3aBeD9tAA1KJa5t4zCJ8L6%2BBjqkAcO%2F4KDV%2FxAibGyjen7iLbd4QmaKaKhOzfDrGpc0EawkOJ3x%2BijP7KBDWs2zgggA%2FKwjOsxU2tO376fZd9ZGFJqgBstdm%2Bio0bYp4UBk588VxtQnthcTbCXloK0xFbDhODOC31SX5eu4CKJcRjYkua9LvlEjfsYiPwU8%2Bt8dn8n0NpvfW7kNBdzm%2BmAbF7S6ib735SrKQ2YQpwhoHcIzHfpEfDsr&X-Amz-Signature=ebe48f74d8a9fba7d360addea249cdc7b15e62dd62c4349f755da5d0261d636c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
