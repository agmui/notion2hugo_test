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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBWTT7TU%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRSEfOt3kh6tvvanJEr9OuG0ruzdhr5pH9ouC6%2BV11KwIhAMeZvX1PrtQsktBGn%2FqeTyA1gsBcj3iazh9UxEvqIYP5KogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMwM2ie%2BnKzbg%2FuL0q3AMe8bNhU4rpxsQrpCbJmivO9qC6B8xlPzeYSnhPt2usOxmHXc1CqYX0622Lv%2BcIiVeNXsbrULVtHYwc6coTt8Wd6MXodP3ovpBdS7RckKIgKSq8%2FNbav%2B8t3L2fb1JeUAopNrH6abDs4TR8D0Us8Iox3Ara%2FObFh4%2BkrhUI79m9hi58SoqwIoimvuKJy7VKEnPnDNq%2FDdyovE12ZEEKr%2BIHdH1hniXVbNRGg46sRadeDauRNVGmLqkv078AfWHDk%2Fikmhjnnr1cHzLa55CCM5ymi1BKrlqt6wuANKB1iTPB0YIxoB2K1VFMGUIZpL1PsIDPndnjC3ZZCPddkgqJ%2Fq05eRSgXqop79cPZlgze2Z2v9inCoC4ODoKOBUuTn3LqoN7Ea27FzrpK5E%2BKuZm9L9q%2F7nV0ZrMlnvmxh%2FbXjCUyFHVqe07lrQuxYOgGA1myg2Waas0yDFHXSPXS0KBYYtuoncINKlXUPWNhyrnWtbnCDs%2BaEmMLoD0jdok0kXvJUXg%2BK92gQKeysbdrgpbprLKWDWW8xCl20khrfgPAR4xNRjWBzJK2QvmOz1QGsAWsc5GReyHgCZmPYdr%2BgVZDQbP14wUB0Z%2B818hrXU4fz1BIWL7GZuCMwnyiZvuojCXzOXBBjqkAYenkKYVfdFklZt2vTy%2FRDxVnhfGa0MJDNHN9Fkzxkmjy9sbZ%2FapsNOYAtiE38CfVfgmWPFGoJzdOg%2B31WMVx%2BhpWWkAUqeNaRZNo2DwOuDgV0yv6KFZZOPj%2FjAtV%2FWMMfrwD%2FijvR2B1jWP5N954AK6csVpCy9KXYwGOCsbRFXmKH9JdCOr%2FmuUUx7Un07P2TVtnFx9kk6bJpX2GIB6wtKG6MTl&X-Amz-Signature=38c05f47d76c68ee65330f826344c292c2299554b44bbcadea091bf40f6c01e2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBWTT7TU%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRSEfOt3kh6tvvanJEr9OuG0ruzdhr5pH9ouC6%2BV11KwIhAMeZvX1PrtQsktBGn%2FqeTyA1gsBcj3iazh9UxEvqIYP5KogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMwM2ie%2BnKzbg%2FuL0q3AMe8bNhU4rpxsQrpCbJmivO9qC6B8xlPzeYSnhPt2usOxmHXc1CqYX0622Lv%2BcIiVeNXsbrULVtHYwc6coTt8Wd6MXodP3ovpBdS7RckKIgKSq8%2FNbav%2B8t3L2fb1JeUAopNrH6abDs4TR8D0Us8Iox3Ara%2FObFh4%2BkrhUI79m9hi58SoqwIoimvuKJy7VKEnPnDNq%2FDdyovE12ZEEKr%2BIHdH1hniXVbNRGg46sRadeDauRNVGmLqkv078AfWHDk%2Fikmhjnnr1cHzLa55CCM5ymi1BKrlqt6wuANKB1iTPB0YIxoB2K1VFMGUIZpL1PsIDPndnjC3ZZCPddkgqJ%2Fq05eRSgXqop79cPZlgze2Z2v9inCoC4ODoKOBUuTn3LqoN7Ea27FzrpK5E%2BKuZm9L9q%2F7nV0ZrMlnvmxh%2FbXjCUyFHVqe07lrQuxYOgGA1myg2Waas0yDFHXSPXS0KBYYtuoncINKlXUPWNhyrnWtbnCDs%2BaEmMLoD0jdok0kXvJUXg%2BK92gQKeysbdrgpbprLKWDWW8xCl20khrfgPAR4xNRjWBzJK2QvmOz1QGsAWsc5GReyHgCZmPYdr%2BgVZDQbP14wUB0Z%2B818hrXU4fz1BIWL7GZuCMwnyiZvuojCXzOXBBjqkAYenkKYVfdFklZt2vTy%2FRDxVnhfGa0MJDNHN9Fkzxkmjy9sbZ%2FapsNOYAtiE38CfVfgmWPFGoJzdOg%2B31WMVx%2BhpWWkAUqeNaRZNo2DwOuDgV0yv6KFZZOPj%2FjAtV%2FWMMfrwD%2FijvR2B1jWP5N954AK6csVpCy9KXYwGOCsbRFXmKH9JdCOr%2FmuUUx7Un07P2TVtnFx9kk6bJpX2GIB6wtKG6MTl&X-Amz-Signature=ed3c0dc865ce254521c86e7a1a4dad94e3faedc3427dacf92ebc48c54829003f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBWTT7TU%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRSEfOt3kh6tvvanJEr9OuG0ruzdhr5pH9ouC6%2BV11KwIhAMeZvX1PrtQsktBGn%2FqeTyA1gsBcj3iazh9UxEvqIYP5KogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMwM2ie%2BnKzbg%2FuL0q3AMe8bNhU4rpxsQrpCbJmivO9qC6B8xlPzeYSnhPt2usOxmHXc1CqYX0622Lv%2BcIiVeNXsbrULVtHYwc6coTt8Wd6MXodP3ovpBdS7RckKIgKSq8%2FNbav%2B8t3L2fb1JeUAopNrH6abDs4TR8D0Us8Iox3Ara%2FObFh4%2BkrhUI79m9hi58SoqwIoimvuKJy7VKEnPnDNq%2FDdyovE12ZEEKr%2BIHdH1hniXVbNRGg46sRadeDauRNVGmLqkv078AfWHDk%2Fikmhjnnr1cHzLa55CCM5ymi1BKrlqt6wuANKB1iTPB0YIxoB2K1VFMGUIZpL1PsIDPndnjC3ZZCPddkgqJ%2Fq05eRSgXqop79cPZlgze2Z2v9inCoC4ODoKOBUuTn3LqoN7Ea27FzrpK5E%2BKuZm9L9q%2F7nV0ZrMlnvmxh%2FbXjCUyFHVqe07lrQuxYOgGA1myg2Waas0yDFHXSPXS0KBYYtuoncINKlXUPWNhyrnWtbnCDs%2BaEmMLoD0jdok0kXvJUXg%2BK92gQKeysbdrgpbprLKWDWW8xCl20khrfgPAR4xNRjWBzJK2QvmOz1QGsAWsc5GReyHgCZmPYdr%2BgVZDQbP14wUB0Z%2B818hrXU4fz1BIWL7GZuCMwnyiZvuojCXzOXBBjqkAYenkKYVfdFklZt2vTy%2FRDxVnhfGa0MJDNHN9Fkzxkmjy9sbZ%2FapsNOYAtiE38CfVfgmWPFGoJzdOg%2B31WMVx%2BhpWWkAUqeNaRZNo2DwOuDgV0yv6KFZZOPj%2FjAtV%2FWMMfrwD%2FijvR2B1jWP5N954AK6csVpCy9KXYwGOCsbRFXmKH9JdCOr%2FmuUUx7Un07P2TVtnFx9kk6bJpX2GIB6wtKG6MTl&X-Amz-Signature=4ebd8062378fc0249c4047c6aded18a1956be6fb506cd4495eac08568086434f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
