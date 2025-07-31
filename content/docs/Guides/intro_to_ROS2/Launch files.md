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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ7LAJW2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQcWgP15Cc%2BsfQTim0W7LdgtlSJQ1czDLJt0FeM69WWAiEApB45qhhaPuFjp%2BZgpb3o4gieb%2FDqKvbrTF%2BequE5hEUqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvIyGlCnsR1G65uPCrcA3v5Ogufv6IACayVq9RrBgV5HFGaGj2%2FZZvc2Lx5DOfwDVQG29qzH5NbKoksm5J%2F8YxTbKDsGQTmVTIRxUqwpzkki0mXGnAhh6g3Oss3DHqSWwRTKuBpb%2FhQDmg6h1eL%2BBvZutwyqT0H2AZx1myWkZbs9HJCsv6hUcLKv4ImF8fAg7wUeiTVndd8iq9t%2BaDQvPeB9Xk3BrnT5N%2F%2BeewEopnZYQ7ebiULWYj8CXKeucHCmLb22RSKsa3v3iQH4gGRC3GYyliy3KOfsXAfafTFjOCgf5Rm4yvsrFab%2B5j3vy1Z7kHlccPFz5vAaMzE3oSnfNk38lVHvqycevYugjwkp2ldSE6u9pcoinogs2uO8cg80ypNY%2FnhMaMXSTked8YzpD4OhZQ%2FTwDg3DcrGJRJdFAsD6MYv3AmIsRkHTrK4wV2BQxFxNx%2FqZZiJqNK1UXfiqVi2j9JSNTcXShclAKyIf2jnV3S5Q3Wn82x%2BKERB1YYMUG9V3o5DRd7pq7lCS6BFID6MDt8IG7FfTlot5AwxIIEygFval38yYgwrzeDyk5XMrrkUkHTb4gfDEczb%2B0vlKTJSZARNLTFrl%2FWENlR43rLF%2BEbkkvfJacVoHs5%2FI8ue7FQyPIi79zerrIKMKPFrcQGOqUB%2FlvBh9RJjvQLEK%2FAi2eeBUEHkvNUlw2eqX07SenuqJSiMp3FRj6qZFRD9MBiBzqA85I2MqISjIFDeYcs9yXmO8wnyOHjUBQADCz41V5BST5pp9lEXCpdAKP0rSUWnLOOFgnWR%2BgAkJ9f8V0hYRA0wZbjtVLwPJgebwRcbjU3wwC3RcXEeLGrSjykYWUzEOKARRbwiAxQA0TEsX%2BzovUM%2BEd795ja&X-Amz-Signature=e6f960a29af142531c8f81822c876ac4609f91b08fa086bb6f347c2c691c7681&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ7LAJW2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQcWgP15Cc%2BsfQTim0W7LdgtlSJQ1czDLJt0FeM69WWAiEApB45qhhaPuFjp%2BZgpb3o4gieb%2FDqKvbrTF%2BequE5hEUqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvIyGlCnsR1G65uPCrcA3v5Ogufv6IACayVq9RrBgV5HFGaGj2%2FZZvc2Lx5DOfwDVQG29qzH5NbKoksm5J%2F8YxTbKDsGQTmVTIRxUqwpzkki0mXGnAhh6g3Oss3DHqSWwRTKuBpb%2FhQDmg6h1eL%2BBvZutwyqT0H2AZx1myWkZbs9HJCsv6hUcLKv4ImF8fAg7wUeiTVndd8iq9t%2BaDQvPeB9Xk3BrnT5N%2F%2BeewEopnZYQ7ebiULWYj8CXKeucHCmLb22RSKsa3v3iQH4gGRC3GYyliy3KOfsXAfafTFjOCgf5Rm4yvsrFab%2B5j3vy1Z7kHlccPFz5vAaMzE3oSnfNk38lVHvqycevYugjwkp2ldSE6u9pcoinogs2uO8cg80ypNY%2FnhMaMXSTked8YzpD4OhZQ%2FTwDg3DcrGJRJdFAsD6MYv3AmIsRkHTrK4wV2BQxFxNx%2FqZZiJqNK1UXfiqVi2j9JSNTcXShclAKyIf2jnV3S5Q3Wn82x%2BKERB1YYMUG9V3o5DRd7pq7lCS6BFID6MDt8IG7FfTlot5AwxIIEygFval38yYgwrzeDyk5XMrrkUkHTb4gfDEczb%2B0vlKTJSZARNLTFrl%2FWENlR43rLF%2BEbkkvfJacVoHs5%2FI8ue7FQyPIi79zerrIKMKPFrcQGOqUB%2FlvBh9RJjvQLEK%2FAi2eeBUEHkvNUlw2eqX07SenuqJSiMp3FRj6qZFRD9MBiBzqA85I2MqISjIFDeYcs9yXmO8wnyOHjUBQADCz41V5BST5pp9lEXCpdAKP0rSUWnLOOFgnWR%2BgAkJ9f8V0hYRA0wZbjtVLwPJgebwRcbjU3wwC3RcXEeLGrSjykYWUzEOKARRbwiAxQA0TEsX%2BzovUM%2BEd795ja&X-Amz-Signature=ae9421dc3555394a970d706f922f8ba0d2e920f02fb475447e1019b9b4f49d99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ7LAJW2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQcWgP15Cc%2BsfQTim0W7LdgtlSJQ1czDLJt0FeM69WWAiEApB45qhhaPuFjp%2BZgpb3o4gieb%2FDqKvbrTF%2BequE5hEUqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvIyGlCnsR1G65uPCrcA3v5Ogufv6IACayVq9RrBgV5HFGaGj2%2FZZvc2Lx5DOfwDVQG29qzH5NbKoksm5J%2F8YxTbKDsGQTmVTIRxUqwpzkki0mXGnAhh6g3Oss3DHqSWwRTKuBpb%2FhQDmg6h1eL%2BBvZutwyqT0H2AZx1myWkZbs9HJCsv6hUcLKv4ImF8fAg7wUeiTVndd8iq9t%2BaDQvPeB9Xk3BrnT5N%2F%2BeewEopnZYQ7ebiULWYj8CXKeucHCmLb22RSKsa3v3iQH4gGRC3GYyliy3KOfsXAfafTFjOCgf5Rm4yvsrFab%2B5j3vy1Z7kHlccPFz5vAaMzE3oSnfNk38lVHvqycevYugjwkp2ldSE6u9pcoinogs2uO8cg80ypNY%2FnhMaMXSTked8YzpD4OhZQ%2FTwDg3DcrGJRJdFAsD6MYv3AmIsRkHTrK4wV2BQxFxNx%2FqZZiJqNK1UXfiqVi2j9JSNTcXShclAKyIf2jnV3S5Q3Wn82x%2BKERB1YYMUG9V3o5DRd7pq7lCS6BFID6MDt8IG7FfTlot5AwxIIEygFval38yYgwrzeDyk5XMrrkUkHTb4gfDEczb%2B0vlKTJSZARNLTFrl%2FWENlR43rLF%2BEbkkvfJacVoHs5%2FI8ue7FQyPIi79zerrIKMKPFrcQGOqUB%2FlvBh9RJjvQLEK%2FAi2eeBUEHkvNUlw2eqX07SenuqJSiMp3FRj6qZFRD9MBiBzqA85I2MqISjIFDeYcs9yXmO8wnyOHjUBQADCz41V5BST5pp9lEXCpdAKP0rSUWnLOOFgnWR%2BgAkJ9f8V0hYRA0wZbjtVLwPJgebwRcbjU3wwC3RcXEeLGrSjykYWUzEOKARRbwiAxQA0TEsX%2BzovUM%2BEd795ja&X-Amz-Signature=8a78cddf838bc408c6a1cf9c8b98b10b8ab49a0962fc1660f03ccb4db15023ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
