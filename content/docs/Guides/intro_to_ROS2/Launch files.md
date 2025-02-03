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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFTGZHD2%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrDi7FicBVgqaFJPLlsoXgaOINleoMA9f6ZN3Wz%2F2q0gIhAKFD%2F%2F8kEGxW9oS3Jfm47RjHmu1WM6ZlZ7l8a%2FNqc6qLKv8DCBUQABoMNjM3NDIzMTgzODA1Igz685lWzxQK%2FyCgjKgq3APaD4yhZKGwx91k8CkOwZ54r0wWT1wjLEI9Xg6%2FgMq4g0Ei97KKBKy%2FQsYPUsiAfGjIUzSawbWymcip%2BOGpBjFUc1UqQauwB9Wmwyd6GUVx%2FIzjAvqY3TeOgdvmNUNBVWpzrnrB4ip%2FHw%2FJrufJ4xGirWQ8YSRuYh868Ii%2BMLFp5Zva3AK5sxoHb3PeWOXlh6sLDCzyZZVEPtCRaQG4zZfQ22oFVyGgVUFrEJ5xPEZ%2FuzfQSzuiC1%2FDKC7VkKFCQ6KzbadKeD3nMzuHz0kb43A0GI1u57glwubeb146DfSb0Zqv%2BJ2PTe857U3Vxo%2B%2FnBYI4mkk6CaaL1hJcE1EbpV3y0affC5u9zhkmpPUc5a%2BL3a8rTEPVyQFXvYH7krgT0DJrp2RrgOYCvisVE09XYUw29lQtMgIC%2FpVkv9pFytuuk0%2F02H4DGsDzTmIPAIFyDcUE2%2B5cQsZmdKQq9DhSAu5xMd%2Fdr6MkGdXAvwGRYNkAGs%2BOkiCEXLLZ3ZO8VwrmwcfjmIPJzjGG%2BzGcsWJsG06WdHMIhoZs9F4Aw9t%2F4kK3YME%2FWPHeG6Kxm59G0gcLiTkmmSDuUYbyXHE4HSl%2B7P44RKjhBqjF3N5txpp1OJ3AMgnX5vAkTZUwtXaYjCj1YK9BjqkAanONDHPHorXeOwJLxRV4jBD%2Fm2DVtZsZXF7xyiqE8eBHUsMXjjHbwxembtHyE%2BA4N41dOnS4GXIgJIwu3d%2FiHbbAc0AI%2BgCM9DHjxFqwf27Do2pIUJV9v8iydegBlPpBTFW0%2B9zzjGjspTj%2F8JhJJOOO7fEyZvT5cacGQ2qrzECutsUvITuBDFmcwedqu%2FTlC%2BPOhpDDymOM2agpYxvDFNtNWe7&X-Amz-Signature=bb27c071f7800ad1f2dc91ab77b5676616b5cdf8bc6b43ae43ec45b86eee99fa&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFTGZHD2%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrDi7FicBVgqaFJPLlsoXgaOINleoMA9f6ZN3Wz%2F2q0gIhAKFD%2F%2F8kEGxW9oS3Jfm47RjHmu1WM6ZlZ7l8a%2FNqc6qLKv8DCBUQABoMNjM3NDIzMTgzODA1Igz685lWzxQK%2FyCgjKgq3APaD4yhZKGwx91k8CkOwZ54r0wWT1wjLEI9Xg6%2FgMq4g0Ei97KKBKy%2FQsYPUsiAfGjIUzSawbWymcip%2BOGpBjFUc1UqQauwB9Wmwyd6GUVx%2FIzjAvqY3TeOgdvmNUNBVWpzrnrB4ip%2FHw%2FJrufJ4xGirWQ8YSRuYh868Ii%2BMLFp5Zva3AK5sxoHb3PeWOXlh6sLDCzyZZVEPtCRaQG4zZfQ22oFVyGgVUFrEJ5xPEZ%2FuzfQSzuiC1%2FDKC7VkKFCQ6KzbadKeD3nMzuHz0kb43A0GI1u57glwubeb146DfSb0Zqv%2BJ2PTe857U3Vxo%2B%2FnBYI4mkk6CaaL1hJcE1EbpV3y0affC5u9zhkmpPUc5a%2BL3a8rTEPVyQFXvYH7krgT0DJrp2RrgOYCvisVE09XYUw29lQtMgIC%2FpVkv9pFytuuk0%2F02H4DGsDzTmIPAIFyDcUE2%2B5cQsZmdKQq9DhSAu5xMd%2Fdr6MkGdXAvwGRYNkAGs%2BOkiCEXLLZ3ZO8VwrmwcfjmIPJzjGG%2BzGcsWJsG06WdHMIhoZs9F4Aw9t%2F4kK3YME%2FWPHeG6Kxm59G0gcLiTkmmSDuUYbyXHE4HSl%2B7P44RKjhBqjF3N5txpp1OJ3AMgnX5vAkTZUwtXaYjCj1YK9BjqkAanONDHPHorXeOwJLxRV4jBD%2Fm2DVtZsZXF7xyiqE8eBHUsMXjjHbwxembtHyE%2BA4N41dOnS4GXIgJIwu3d%2FiHbbAc0AI%2BgCM9DHjxFqwf27Do2pIUJV9v8iydegBlPpBTFW0%2B9zzjGjspTj%2F8JhJJOOO7fEyZvT5cacGQ2qrzECutsUvITuBDFmcwedqu%2FTlC%2BPOhpDDymOM2agpYxvDFNtNWe7&X-Amz-Signature=bb948a344090bd8dbba2321668ce8e35acf9b0fa1626c0fb0aebd470d42105b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFTGZHD2%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrDi7FicBVgqaFJPLlsoXgaOINleoMA9f6ZN3Wz%2F2q0gIhAKFD%2F%2F8kEGxW9oS3Jfm47RjHmu1WM6ZlZ7l8a%2FNqc6qLKv8DCBUQABoMNjM3NDIzMTgzODA1Igz685lWzxQK%2FyCgjKgq3APaD4yhZKGwx91k8CkOwZ54r0wWT1wjLEI9Xg6%2FgMq4g0Ei97KKBKy%2FQsYPUsiAfGjIUzSawbWymcip%2BOGpBjFUc1UqQauwB9Wmwyd6GUVx%2FIzjAvqY3TeOgdvmNUNBVWpzrnrB4ip%2FHw%2FJrufJ4xGirWQ8YSRuYh868Ii%2BMLFp5Zva3AK5sxoHb3PeWOXlh6sLDCzyZZVEPtCRaQG4zZfQ22oFVyGgVUFrEJ5xPEZ%2FuzfQSzuiC1%2FDKC7VkKFCQ6KzbadKeD3nMzuHz0kb43A0GI1u57glwubeb146DfSb0Zqv%2BJ2PTe857U3Vxo%2B%2FnBYI4mkk6CaaL1hJcE1EbpV3y0affC5u9zhkmpPUc5a%2BL3a8rTEPVyQFXvYH7krgT0DJrp2RrgOYCvisVE09XYUw29lQtMgIC%2FpVkv9pFytuuk0%2F02H4DGsDzTmIPAIFyDcUE2%2B5cQsZmdKQq9DhSAu5xMd%2Fdr6MkGdXAvwGRYNkAGs%2BOkiCEXLLZ3ZO8VwrmwcfjmIPJzjGG%2BzGcsWJsG06WdHMIhoZs9F4Aw9t%2F4kK3YME%2FWPHeG6Kxm59G0gcLiTkmmSDuUYbyXHE4HSl%2B7P44RKjhBqjF3N5txpp1OJ3AMgnX5vAkTZUwtXaYjCj1YK9BjqkAanONDHPHorXeOwJLxRV4jBD%2Fm2DVtZsZXF7xyiqE8eBHUsMXjjHbwxembtHyE%2BA4N41dOnS4GXIgJIwu3d%2FiHbbAc0AI%2BgCM9DHjxFqwf27Do2pIUJV9v8iydegBlPpBTFW0%2B9zzjGjspTj%2F8JhJJOOO7fEyZvT5cacGQ2qrzECutsUvITuBDFmcwedqu%2FTlC%2BPOhpDDymOM2agpYxvDFNtNWe7&X-Amz-Signature=6d5bc2ae02f146114ac659f0cc83a1d074518c3a1228d60125c75dd1e868f533&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
