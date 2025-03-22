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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L3LM54Z%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIADoEKeYTmnvLXYKl%2FEHYWL7esK%2BVLgBEKP4SxFQ0Cu%2FAiBVhGCEIPQJFft6OHuoMFByn1KmyHl2XuU3uwK13YgWLCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtLdFb8s3hgkI%2BoqzKtwDWxg8RLS55NBZXMszSXNPYmpjqKdGQ9wxqUGETZ7zI%2FpjsKFxXaoJs7ZQSitOkJwlgiHTCM6m7mRsWz8s%2B1Mr9qEHPjKRkTRWBh75YCjX6GsJ4dNvcG%2BFnQYrT3I1RKCRnu9%2FJWRIGzJm%2FORZ0hODrAIfWRbgUaFcdSGpAGoGUS9d0WDnSABBkPdbc2ZqRvTIfQ894y4LDE6AoY%2F%2BkmZHaMnJLheFB2i5A%2BqqQnVr715Z04ss7l%2BJuS2m4sx7slvOBF%2FGj5r4NLcPG0WOnxdcwhGGVEv3NJ%2F5o%2BifgtOLl4LmO6GBpIf76DeckuS1nF4w1G16ZU3DmIePFH4Z0ZcUtvusihrFhHXYh4gftScTGoPOXTiwaXVUzwfLrHbuQuLp6a7lsQ5GsMYdSo82ix7coiBlcSQAHz1gR8%2FqnGLmwHvRVWP5Wu%2Bs8xPa7OcfYrL41WLRtsVuJyfMF6giv0ufmYkLyax3a0gWUB2u%2BkQDfDEZc8ytlQ95dYr64Jlo%2F3BNRkhZx4d3cDU5BFi1s4VoLnFkGqDx1A60K3zOHeRUcES462fkO2gam72FbAG7O%2B1haqPUAngdX2it4ygoSHdY5zL9GHwYMwGp6YxsduC%2F%2F2Y4vqaQz1YYX3YjkAkw%2BLb8vgY6pgF5462GLyJnI8xKZN4HpjtBow9ebM7Y4JvdTI8OiWHJ3uRT%2Fkm%2BcFsYon0C1XKEtvD9JIShA%2BVIioMOHeMppF0sCpMulDmcE6jeuUKakU1cE8YtVBEmOXKndjHXtJAXbzd0MLaOGXys2LbZ2q%2FS3Lr2AX%2BNu%2FxV9l6Dig53WR3OFCc2LCQr%2FjdE75XLc7U5Fbq5FQque3DlsomuECC4GcKg6KgPq%2BaO&X-Amz-Signature=b19266d7ca6b052841054b3bf6b038beeb085190cd4bd54b1524af0d9738009b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L3LM54Z%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIADoEKeYTmnvLXYKl%2FEHYWL7esK%2BVLgBEKP4SxFQ0Cu%2FAiBVhGCEIPQJFft6OHuoMFByn1KmyHl2XuU3uwK13YgWLCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtLdFb8s3hgkI%2BoqzKtwDWxg8RLS55NBZXMszSXNPYmpjqKdGQ9wxqUGETZ7zI%2FpjsKFxXaoJs7ZQSitOkJwlgiHTCM6m7mRsWz8s%2B1Mr9qEHPjKRkTRWBh75YCjX6GsJ4dNvcG%2BFnQYrT3I1RKCRnu9%2FJWRIGzJm%2FORZ0hODrAIfWRbgUaFcdSGpAGoGUS9d0WDnSABBkPdbc2ZqRvTIfQ894y4LDE6AoY%2F%2BkmZHaMnJLheFB2i5A%2BqqQnVr715Z04ss7l%2BJuS2m4sx7slvOBF%2FGj5r4NLcPG0WOnxdcwhGGVEv3NJ%2F5o%2BifgtOLl4LmO6GBpIf76DeckuS1nF4w1G16ZU3DmIePFH4Z0ZcUtvusihrFhHXYh4gftScTGoPOXTiwaXVUzwfLrHbuQuLp6a7lsQ5GsMYdSo82ix7coiBlcSQAHz1gR8%2FqnGLmwHvRVWP5Wu%2Bs8xPa7OcfYrL41WLRtsVuJyfMF6giv0ufmYkLyax3a0gWUB2u%2BkQDfDEZc8ytlQ95dYr64Jlo%2F3BNRkhZx4d3cDU5BFi1s4VoLnFkGqDx1A60K3zOHeRUcES462fkO2gam72FbAG7O%2B1haqPUAngdX2it4ygoSHdY5zL9GHwYMwGp6YxsduC%2F%2F2Y4vqaQz1YYX3YjkAkw%2BLb8vgY6pgF5462GLyJnI8xKZN4HpjtBow9ebM7Y4JvdTI8OiWHJ3uRT%2Fkm%2BcFsYon0C1XKEtvD9JIShA%2BVIioMOHeMppF0sCpMulDmcE6jeuUKakU1cE8YtVBEmOXKndjHXtJAXbzd0MLaOGXys2LbZ2q%2FS3Lr2AX%2BNu%2FxV9l6Dig53WR3OFCc2LCQr%2FjdE75XLc7U5Fbq5FQque3DlsomuECC4GcKg6KgPq%2BaO&X-Amz-Signature=4dd7f4a0f8716fb97d50d7b1722246d27eda96a90f509f32d86de76e8d89cd28&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L3LM54Z%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIADoEKeYTmnvLXYKl%2FEHYWL7esK%2BVLgBEKP4SxFQ0Cu%2FAiBVhGCEIPQJFft6OHuoMFByn1KmyHl2XuU3uwK13YgWLCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtLdFb8s3hgkI%2BoqzKtwDWxg8RLS55NBZXMszSXNPYmpjqKdGQ9wxqUGETZ7zI%2FpjsKFxXaoJs7ZQSitOkJwlgiHTCM6m7mRsWz8s%2B1Mr9qEHPjKRkTRWBh75YCjX6GsJ4dNvcG%2BFnQYrT3I1RKCRnu9%2FJWRIGzJm%2FORZ0hODrAIfWRbgUaFcdSGpAGoGUS9d0WDnSABBkPdbc2ZqRvTIfQ894y4LDE6AoY%2F%2BkmZHaMnJLheFB2i5A%2BqqQnVr715Z04ss7l%2BJuS2m4sx7slvOBF%2FGj5r4NLcPG0WOnxdcwhGGVEv3NJ%2F5o%2BifgtOLl4LmO6GBpIf76DeckuS1nF4w1G16ZU3DmIePFH4Z0ZcUtvusihrFhHXYh4gftScTGoPOXTiwaXVUzwfLrHbuQuLp6a7lsQ5GsMYdSo82ix7coiBlcSQAHz1gR8%2FqnGLmwHvRVWP5Wu%2Bs8xPa7OcfYrL41WLRtsVuJyfMF6giv0ufmYkLyax3a0gWUB2u%2BkQDfDEZc8ytlQ95dYr64Jlo%2F3BNRkhZx4d3cDU5BFi1s4VoLnFkGqDx1A60K3zOHeRUcES462fkO2gam72FbAG7O%2B1haqPUAngdX2it4ygoSHdY5zL9GHwYMwGp6YxsduC%2F%2F2Y4vqaQz1YYX3YjkAkw%2BLb8vgY6pgF5462GLyJnI8xKZN4HpjtBow9ebM7Y4JvdTI8OiWHJ3uRT%2Fkm%2BcFsYon0C1XKEtvD9JIShA%2BVIioMOHeMppF0sCpMulDmcE6jeuUKakU1cE8YtVBEmOXKndjHXtJAXbzd0MLaOGXys2LbZ2q%2FS3Lr2AX%2BNu%2FxV9l6Dig53WR3OFCc2LCQr%2FjdE75XLc7U5Fbq5FQque3DlsomuECC4GcKg6KgPq%2BaO&X-Amz-Signature=e1793e0c323bd6ef7f468480edca85e67598e668dbff7ccd78a1347a03282ade&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
