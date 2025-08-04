---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYA6X7FA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIHxKeN3dLTTdmfkJSnIGVx9Hnm38lplC7SIl1mwYrwmqAiEAxYoryTjnWt8tiadeAbbzEWoBUc37gD7N17qCFk%2BmFAsq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHlc7cYih8mhiJgtHCrcA6%2Bd7xh6dWt06fSAQ7gkO91QxMdqWBvN3NmvIDyANCOsh31v6cDgFqTmzoZGBDKtUBHaLeqtWGXtbn2NHF6UF%2FQVWljPdeKZfeh2AflEbpRGEb3KUYA4hzRRsXQqypbKt6GjOO5mjCwicPDGQUHWcCRthh8yQg47LXDy7QwL5pt%2BraxEDxVtgRWorxKLV8l6UueV%2BUVa5BVjhtEWb9Iv3DeHj0Hx0Am3143g4AdlRjplgibkzq6c6EqP2i6CxqNE3xOOMLljOYIksKTFcCVCjkZMG0p1rnCKHQZL05ctVgMvUUXSzSvdia547XSLyZl45YxvA%2FpLdX1p1pvFysU5WHEXVzN2FwJSERY0QSBnWMX8Bmb9cNjhJxr09EJuwkavK3OL79AXNxfigyb1Xn%2Fjq%2F7wnXAD0pCbYtCOoPPTkXisM3ZAn2GlkoNiDWP5mFXTWgA3%2BabciLaEw7S1fsaBg9xVoAxgeH1lJuuPZU18%2FU9uSpW4qsr8N%2BaDAFINbq67Vs6I8Ip%2FtfzISXJqn9IThvXHPmQeYtZSFJWhID4QdHmDCEdDLbLY8UWk%2BsxlW3RbFKCFfWwKUvR5dveuyWBQLS6Q7hTWAO%2Fwwv6VDd3CPUufZOCW2nYr4PzReRoRMMy3wcQGOqUBshEeesXNJmirZ9MFCHRcla2ZwWb9o7wzlJMqq0dqZzMc7zoFUbTEQB9kNZR4RQ2lzxi8Ig4gAR9%2B%2BRMAR18EA4G%2B5p3J6zYrUo2voYAp3tHPmU7nBBZcaach00pNTRdB%2BXp9ARe8dkGwSpEw29%2B0fYLcG83XtkNn0oIpU6f1VVw5TcBRIJVISib74Ef1JcuYSIAN%2BtEBHL0%2FQexMLHksiEjdc9MR&X-Amz-Signature=4b22d679b432bbcbe599ba764bcf28dc747d3aa4724d9345abf661e4ce311fa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYA6X7FA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIHxKeN3dLTTdmfkJSnIGVx9Hnm38lplC7SIl1mwYrwmqAiEAxYoryTjnWt8tiadeAbbzEWoBUc37gD7N17qCFk%2BmFAsq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHlc7cYih8mhiJgtHCrcA6%2Bd7xh6dWt06fSAQ7gkO91QxMdqWBvN3NmvIDyANCOsh31v6cDgFqTmzoZGBDKtUBHaLeqtWGXtbn2NHF6UF%2FQVWljPdeKZfeh2AflEbpRGEb3KUYA4hzRRsXQqypbKt6GjOO5mjCwicPDGQUHWcCRthh8yQg47LXDy7QwL5pt%2BraxEDxVtgRWorxKLV8l6UueV%2BUVa5BVjhtEWb9Iv3DeHj0Hx0Am3143g4AdlRjplgibkzq6c6EqP2i6CxqNE3xOOMLljOYIksKTFcCVCjkZMG0p1rnCKHQZL05ctVgMvUUXSzSvdia547XSLyZl45YxvA%2FpLdX1p1pvFysU5WHEXVzN2FwJSERY0QSBnWMX8Bmb9cNjhJxr09EJuwkavK3OL79AXNxfigyb1Xn%2Fjq%2F7wnXAD0pCbYtCOoPPTkXisM3ZAn2GlkoNiDWP5mFXTWgA3%2BabciLaEw7S1fsaBg9xVoAxgeH1lJuuPZU18%2FU9uSpW4qsr8N%2BaDAFINbq67Vs6I8Ip%2FtfzISXJqn9IThvXHPmQeYtZSFJWhID4QdHmDCEdDLbLY8UWk%2BsxlW3RbFKCFfWwKUvR5dveuyWBQLS6Q7hTWAO%2Fwwv6VDd3CPUufZOCW2nYr4PzReRoRMMy3wcQGOqUBshEeesXNJmirZ9MFCHRcla2ZwWb9o7wzlJMqq0dqZzMc7zoFUbTEQB9kNZR4RQ2lzxi8Ig4gAR9%2B%2BRMAR18EA4G%2B5p3J6zYrUo2voYAp3tHPmU7nBBZcaach00pNTRdB%2BXp9ARe8dkGwSpEw29%2B0fYLcG83XtkNn0oIpU6f1VVw5TcBRIJVISib74Ef1JcuYSIAN%2BtEBHL0%2FQexMLHksiEjdc9MR&X-Amz-Signature=60a35ddbf251576030f91637cf16ccf1a5ebc23419fbd32767c50f91c03fee2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYA6X7FA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIHxKeN3dLTTdmfkJSnIGVx9Hnm38lplC7SIl1mwYrwmqAiEAxYoryTjnWt8tiadeAbbzEWoBUc37gD7N17qCFk%2BmFAsq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHlc7cYih8mhiJgtHCrcA6%2Bd7xh6dWt06fSAQ7gkO91QxMdqWBvN3NmvIDyANCOsh31v6cDgFqTmzoZGBDKtUBHaLeqtWGXtbn2NHF6UF%2FQVWljPdeKZfeh2AflEbpRGEb3KUYA4hzRRsXQqypbKt6GjOO5mjCwicPDGQUHWcCRthh8yQg47LXDy7QwL5pt%2BraxEDxVtgRWorxKLV8l6UueV%2BUVa5BVjhtEWb9Iv3DeHj0Hx0Am3143g4AdlRjplgibkzq6c6EqP2i6CxqNE3xOOMLljOYIksKTFcCVCjkZMG0p1rnCKHQZL05ctVgMvUUXSzSvdia547XSLyZl45YxvA%2FpLdX1p1pvFysU5WHEXVzN2FwJSERY0QSBnWMX8Bmb9cNjhJxr09EJuwkavK3OL79AXNxfigyb1Xn%2Fjq%2F7wnXAD0pCbYtCOoPPTkXisM3ZAn2GlkoNiDWP5mFXTWgA3%2BabciLaEw7S1fsaBg9xVoAxgeH1lJuuPZU18%2FU9uSpW4qsr8N%2BaDAFINbq67Vs6I8Ip%2FtfzISXJqn9IThvXHPmQeYtZSFJWhID4QdHmDCEdDLbLY8UWk%2BsxlW3RbFKCFfWwKUvR5dveuyWBQLS6Q7hTWAO%2Fwwv6VDd3CPUufZOCW2nYr4PzReRoRMMy3wcQGOqUBshEeesXNJmirZ9MFCHRcla2ZwWb9o7wzlJMqq0dqZzMc7zoFUbTEQB9kNZR4RQ2lzxi8Ig4gAR9%2B%2BRMAR18EA4G%2B5p3J6zYrUo2voYAp3tHPmU7nBBZcaach00pNTRdB%2BXp9ARe8dkGwSpEw29%2B0fYLcG83XtkNn0oIpU6f1VVw5TcBRIJVISib74Ef1JcuYSIAN%2BtEBHL0%2FQexMLHksiEjdc9MR&X-Amz-Signature=f68b7618f30f19317e0c630c0b4e620d5a9eb0da0b011c89dba6168c8226d8ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
