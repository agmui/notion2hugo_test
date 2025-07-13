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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZGHWUN6%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T042753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv%2BEOwe2JZdU2jTWwp47bq%2B3SsINjxdcKHB0waePvOOgIgKpAjyA0JU8xSRugoroFfeZeb7obZ0Z%2Fq7v5ynBFk8xUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyXeoEjxkhCzgXC6CrcA3SuPwdSpjDjcAlulDmM99mUX6FcAHpKqGrbpP2KtE39hjau8ggEuVlY1ksrhESEqFC%2FyZ4q5%2FHxEL3vxmmkgDWz6ZWCKiy8ibOoI6YfIPnNoAS0eRjkVi0u24URqh%2Bz%2BGJY7Ize1o3%2FgqMuUY4T6SUGWDOGygWPn6GLeZU5TH61AfCl2FN8xiq%2BDxkWDbx3xtz8Y1rFEtAOMvIp8dDaDS1uSAqyh%2F50iCFayrlYmxk5paC%2FwQNGj2T5PS7xGERi6wk7%2Ba9j%2FWyImmRW42Ov2HOMA%2FZgSsuZBh364Rnmqc8w4SaHqmeBnkEhpZJ8SrpAZlgb1tn45JO02UeIcqiBmwUCsmUkwyc%2FPXIsmuOz0lTKDUeHJNx81qY1SNdlCSYS6iNJFfh08NI5djGpgJXgL6y1Zb30ZzRHXiiQHhaoPlkwnWZEwEHeE707Q7g8LDLS8p88C4BxZiOqIy6O15SY5qbRxnNZkWvvCYGtx9DlbqOuXSCEIgznJjPg7UFaiKeEZ%2BzzU3RM1FmHEDwGRRfsyJARIKpmrtlxjtwCsy6eYzAesIO3fmfFlTcrWrVXU2ORkn6qVe3frmtq9D0a8ALXKqUSaXtQx%2FTh32A67w0os6t8Ubjs3PN0S3D%2B1KS3MPHYzMMGOqUBE%2FXr2XHfscSxNQta8%2BglilGwXhdHB2WYq3579oQkpD5CasBoLjAkyHcv7oa%2FwlAi8PuiFs7%2FZx2%2Bv94rHjyUjrimxhyTEc6S32%2BEvtMUfukKNKdIF%2B9vWUZSo9314p9m%2BCs7gL3zim50WjoqL1mFshc028zzQKuJH287%2FU3Mxw7XhD4mSx1FPRb8%2FLnQMyeQgz2OH7czOIdx7%2F4IlXzzqQ%2BqAvz4&X-Amz-Signature=190875a2ab0697d63fd8314e993733e07553b5214e876e591ff49c5cbb441897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZGHWUN6%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T042753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv%2BEOwe2JZdU2jTWwp47bq%2B3SsINjxdcKHB0waePvOOgIgKpAjyA0JU8xSRugoroFfeZeb7obZ0Z%2Fq7v5ynBFk8xUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyXeoEjxkhCzgXC6CrcA3SuPwdSpjDjcAlulDmM99mUX6FcAHpKqGrbpP2KtE39hjau8ggEuVlY1ksrhESEqFC%2FyZ4q5%2FHxEL3vxmmkgDWz6ZWCKiy8ibOoI6YfIPnNoAS0eRjkVi0u24URqh%2Bz%2BGJY7Ize1o3%2FgqMuUY4T6SUGWDOGygWPn6GLeZU5TH61AfCl2FN8xiq%2BDxkWDbx3xtz8Y1rFEtAOMvIp8dDaDS1uSAqyh%2F50iCFayrlYmxk5paC%2FwQNGj2T5PS7xGERi6wk7%2Ba9j%2FWyImmRW42Ov2HOMA%2FZgSsuZBh364Rnmqc8w4SaHqmeBnkEhpZJ8SrpAZlgb1tn45JO02UeIcqiBmwUCsmUkwyc%2FPXIsmuOz0lTKDUeHJNx81qY1SNdlCSYS6iNJFfh08NI5djGpgJXgL6y1Zb30ZzRHXiiQHhaoPlkwnWZEwEHeE707Q7g8LDLS8p88C4BxZiOqIy6O15SY5qbRxnNZkWvvCYGtx9DlbqOuXSCEIgznJjPg7UFaiKeEZ%2BzzU3RM1FmHEDwGRRfsyJARIKpmrtlxjtwCsy6eYzAesIO3fmfFlTcrWrVXU2ORkn6qVe3frmtq9D0a8ALXKqUSaXtQx%2FTh32A67w0os6t8Ubjs3PN0S3D%2B1KS3MPHYzMMGOqUBE%2FXr2XHfscSxNQta8%2BglilGwXhdHB2WYq3579oQkpD5CasBoLjAkyHcv7oa%2FwlAi8PuiFs7%2FZx2%2Bv94rHjyUjrimxhyTEc6S32%2BEvtMUfukKNKdIF%2B9vWUZSo9314p9m%2BCs7gL3zim50WjoqL1mFshc028zzQKuJH287%2FU3Mxw7XhD4mSx1FPRb8%2FLnQMyeQgz2OH7czOIdx7%2F4IlXzzqQ%2BqAvz4&X-Amz-Signature=8a6ffb1149dd155a752d9c5a85250c20c418118a1096c1da9d9d0b3bcb9c72dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZGHWUN6%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T042753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv%2BEOwe2JZdU2jTWwp47bq%2B3SsINjxdcKHB0waePvOOgIgKpAjyA0JU8xSRugoroFfeZeb7obZ0Z%2Fq7v5ynBFk8xUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyXeoEjxkhCzgXC6CrcA3SuPwdSpjDjcAlulDmM99mUX6FcAHpKqGrbpP2KtE39hjau8ggEuVlY1ksrhESEqFC%2FyZ4q5%2FHxEL3vxmmkgDWz6ZWCKiy8ibOoI6YfIPnNoAS0eRjkVi0u24URqh%2Bz%2BGJY7Ize1o3%2FgqMuUY4T6SUGWDOGygWPn6GLeZU5TH61AfCl2FN8xiq%2BDxkWDbx3xtz8Y1rFEtAOMvIp8dDaDS1uSAqyh%2F50iCFayrlYmxk5paC%2FwQNGj2T5PS7xGERi6wk7%2Ba9j%2FWyImmRW42Ov2HOMA%2FZgSsuZBh364Rnmqc8w4SaHqmeBnkEhpZJ8SrpAZlgb1tn45JO02UeIcqiBmwUCsmUkwyc%2FPXIsmuOz0lTKDUeHJNx81qY1SNdlCSYS6iNJFfh08NI5djGpgJXgL6y1Zb30ZzRHXiiQHhaoPlkwnWZEwEHeE707Q7g8LDLS8p88C4BxZiOqIy6O15SY5qbRxnNZkWvvCYGtx9DlbqOuXSCEIgznJjPg7UFaiKeEZ%2BzzU3RM1FmHEDwGRRfsyJARIKpmrtlxjtwCsy6eYzAesIO3fmfFlTcrWrVXU2ORkn6qVe3frmtq9D0a8ALXKqUSaXtQx%2FTh32A67w0os6t8Ubjs3PN0S3D%2B1KS3MPHYzMMGOqUBE%2FXr2XHfscSxNQta8%2BglilGwXhdHB2WYq3579oQkpD5CasBoLjAkyHcv7oa%2FwlAi8PuiFs7%2FZx2%2Bv94rHjyUjrimxhyTEc6S32%2BEvtMUfukKNKdIF%2B9vWUZSo9314p9m%2BCs7gL3zim50WjoqL1mFshc028zzQKuJH287%2FU3Mxw7XhD4mSx1FPRb8%2FLnQMyeQgz2OH7czOIdx7%2F4IlXzzqQ%2BqAvz4&X-Amz-Signature=93b587edb02c3b4d3e973d7dcedcd0d6d72457e7905c17443513e55a3aeae9a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
