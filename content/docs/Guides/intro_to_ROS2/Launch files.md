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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYOKOFIJ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFYz3IdBNHCiBEpU7YGlfrpmSV6cJYtbO3MTqU3Y2rJQIgJWH0spekRu1QUQCe8o3CWjekj%2BBjZfcGQ40D6Fc103sqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSm5B%2FggxhSHLblWyrcAx1tkA0m4dbmnJBtleDDEFA6EIVXmnJPjIwESXYisu0d1%2FSaU0A%2BnZptIFanoAR%2Fsl1tVIB282geim9rCkt%2FXm3XSMplQ3jo1RxVp24OjJq2n%2FKRmudHWD%2BmPiVnurhkm9x69EubDGqb1r4M3XSRPDkXzPjdYtzZqCvulVuN8wm%2BQBRdv1VaPinGga%2FmYW3dPE66s9h3b49QXpvc2xTpTM0DlT2vLQORRHgQxRuXye%2BgJflPgWcQ%2FtyGyVDBAUjLFSGUebJvlZDim0BGKcOLj4ZcmgblEoTQhDbkFCllYDxQtFHVrO641u6lSvL8XmlRHtLsZgeu0NwjBP8kyvTm7PDVFtdyj%2FqmmocPCrV%2BXVKGl%2FsR0NoRZuPIkjP%2FQs7IvJwnh7uUOkCrcCa%2F1vXGzs4ttFkeJTFc%2FtmUo9HVxGHlAe11pJSlhObgaJtmk7PuWfdMlHAiQHhydRJD%2BKfDiXNcZ41TJNAD5m9CPLsiSlvwRKywsjhE5TNfO5EjfDj8ayyrr4Y2QdhWDf70GFY28mibnWt%2FRTG41HFvJa2xwPnbG1I%2BKx5lN%2Bjnu2fTUdgFwwIupfRzJ2KdoagHRpS%2BC%2B%2FlD8irKeiByaVkfoyCUUstBF2nZJf0O8PkLaNaMNHV08IGOqUB%2FfzN8dI%2BmEnZkfMH4j7b%2F8pCN1TjcAFZkiKL1ssQQkcC8OIzkbpJZdxk4TqebW3maVOZplhtJ5%2BpTZR2uJCjDuys0DH1D9xiG%2FPJ76Bdzttt1orN8fw2qhKtlnafuXSmg2lSdjC283lZRPXJ9o9ez0qkfx8CH27WV8jEzRwswcIIzhIAqEfASVlMwuOLquTtkEsnCKBgUty0OseGBd8Erm2VuuP7&X-Amz-Signature=223270b7345c77d272d573f88e878f6466b22e5e3e0321624bacae48c267789c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYOKOFIJ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFYz3IdBNHCiBEpU7YGlfrpmSV6cJYtbO3MTqU3Y2rJQIgJWH0spekRu1QUQCe8o3CWjekj%2BBjZfcGQ40D6Fc103sqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSm5B%2FggxhSHLblWyrcAx1tkA0m4dbmnJBtleDDEFA6EIVXmnJPjIwESXYisu0d1%2FSaU0A%2BnZptIFanoAR%2Fsl1tVIB282geim9rCkt%2FXm3XSMplQ3jo1RxVp24OjJq2n%2FKRmudHWD%2BmPiVnurhkm9x69EubDGqb1r4M3XSRPDkXzPjdYtzZqCvulVuN8wm%2BQBRdv1VaPinGga%2FmYW3dPE66s9h3b49QXpvc2xTpTM0DlT2vLQORRHgQxRuXye%2BgJflPgWcQ%2FtyGyVDBAUjLFSGUebJvlZDim0BGKcOLj4ZcmgblEoTQhDbkFCllYDxQtFHVrO641u6lSvL8XmlRHtLsZgeu0NwjBP8kyvTm7PDVFtdyj%2FqmmocPCrV%2BXVKGl%2FsR0NoRZuPIkjP%2FQs7IvJwnh7uUOkCrcCa%2F1vXGzs4ttFkeJTFc%2FtmUo9HVxGHlAe11pJSlhObgaJtmk7PuWfdMlHAiQHhydRJD%2BKfDiXNcZ41TJNAD5m9CPLsiSlvwRKywsjhE5TNfO5EjfDj8ayyrr4Y2QdhWDf70GFY28mibnWt%2FRTG41HFvJa2xwPnbG1I%2BKx5lN%2Bjnu2fTUdgFwwIupfRzJ2KdoagHRpS%2BC%2B%2FlD8irKeiByaVkfoyCUUstBF2nZJf0O8PkLaNaMNHV08IGOqUB%2FfzN8dI%2BmEnZkfMH4j7b%2F8pCN1TjcAFZkiKL1ssQQkcC8OIzkbpJZdxk4TqebW3maVOZplhtJ5%2BpTZR2uJCjDuys0DH1D9xiG%2FPJ76Bdzttt1orN8fw2qhKtlnafuXSmg2lSdjC283lZRPXJ9o9ez0qkfx8CH27WV8jEzRwswcIIzhIAqEfASVlMwuOLquTtkEsnCKBgUty0OseGBd8Erm2VuuP7&X-Amz-Signature=d177f9a03e69386a697cfaae5fd39a857845a7c4cc7b443213fad1956476c662&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYOKOFIJ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFYz3IdBNHCiBEpU7YGlfrpmSV6cJYtbO3MTqU3Y2rJQIgJWH0spekRu1QUQCe8o3CWjekj%2BBjZfcGQ40D6Fc103sqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSm5B%2FggxhSHLblWyrcAx1tkA0m4dbmnJBtleDDEFA6EIVXmnJPjIwESXYisu0d1%2FSaU0A%2BnZptIFanoAR%2Fsl1tVIB282geim9rCkt%2FXm3XSMplQ3jo1RxVp24OjJq2n%2FKRmudHWD%2BmPiVnurhkm9x69EubDGqb1r4M3XSRPDkXzPjdYtzZqCvulVuN8wm%2BQBRdv1VaPinGga%2FmYW3dPE66s9h3b49QXpvc2xTpTM0DlT2vLQORRHgQxRuXye%2BgJflPgWcQ%2FtyGyVDBAUjLFSGUebJvlZDim0BGKcOLj4ZcmgblEoTQhDbkFCllYDxQtFHVrO641u6lSvL8XmlRHtLsZgeu0NwjBP8kyvTm7PDVFtdyj%2FqmmocPCrV%2BXVKGl%2FsR0NoRZuPIkjP%2FQs7IvJwnh7uUOkCrcCa%2F1vXGzs4ttFkeJTFc%2FtmUo9HVxGHlAe11pJSlhObgaJtmk7PuWfdMlHAiQHhydRJD%2BKfDiXNcZ41TJNAD5m9CPLsiSlvwRKywsjhE5TNfO5EjfDj8ayyrr4Y2QdhWDf70GFY28mibnWt%2FRTG41HFvJa2xwPnbG1I%2BKx5lN%2Bjnu2fTUdgFwwIupfRzJ2KdoagHRpS%2BC%2B%2FlD8irKeiByaVkfoyCUUstBF2nZJf0O8PkLaNaMNHV08IGOqUB%2FfzN8dI%2BmEnZkfMH4j7b%2F8pCN1TjcAFZkiKL1ssQQkcC8OIzkbpJZdxk4TqebW3maVOZplhtJ5%2BpTZR2uJCjDuys0DH1D9xiG%2FPJ76Bdzttt1orN8fw2qhKtlnafuXSmg2lSdjC283lZRPXJ9o9ez0qkfx8CH27WV8jEzRwswcIIzhIAqEfASVlMwuOLquTtkEsnCKBgUty0OseGBd8Erm2VuuP7&X-Amz-Signature=41a98ee66d693fac1d85809f97132c82e78caea976d16a1e6f7b206ba877e3c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
