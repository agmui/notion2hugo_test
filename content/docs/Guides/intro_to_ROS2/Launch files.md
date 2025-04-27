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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFM7ZD7C%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcNhNPB5IrH3sHOAXxmibo3qr0pVND8uBBHBxrajzTOAiBXWpqVD70c%2BCTvL6Wd%2FunVOQ3Cxd7seRHYjqrk9rOiyyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMRwHLwMyOXksxHYcTKtwDCBMclrLLvNrBsIlDoqaRS4OaRgQUsA2o8gbafVMR053G7K9PNNFC6r2AAQdFr%2BEsoPsLJmok4qtaeL%2BKdko8idn3jbh5gyPalRU2nPACftauOoG9%2BcumuN6Sl3RbWS68D8zu5TT%2BZp97aFDClqlQ%2BrQaw%2BPqr9sv1XUGBXCJ6Eh58XmQreCnodbpJbGLrpQbAjMPDAH58z3IlF0t5hO3iZNBTQYNW4yX9vUL%2F262osiObu9xzN%2BnOaSuPgd6QmTEYdAHMGPDEvtYwGTmUabv%2B%2FYEHQM0AlQzopbjY%2F0iheGYHOkHFwmWo0nWZXBHkfIa4hNp%2FMiMzqtMyy5i81GIFSwRoger%2Bi1Q3DNIjCbb3ytvaar0EqHfTGoiImV7J52ZOLaFW4TBdeCLFzctevFgkis%2BPL1%2B4oP0BanqlPH5MfxVaCt0QPDXFsJBrp1Sk86Zx9ntdFNC%2B4qIhBYEnZpxpbDanLuGrsg4%2Bdr74%2B5bj8YpQkTIlzjKyW0uykzSgpxiwTpJ1m%2FqCLEQryw488j7wmm58SvNLhHq4dw4fIzPxcghkBrMLfnYLOQy7YEpvfU8bBYIXz909YCahLV%2BgPKm4GJ%2FXBvfCo%2FnKDzsvxM6dxcjVFpH9XGbF1VC3qgwgYy4wAY6pgERM9cD2KHfWZkzziCKbFD31T3pXNrKEfmfyH4ygv9gwS4X%2Fw%2B3dfbJMw6WYGBbrvn0JUKh3NvNbDzUjj%2FOxQjYqQ%2FqJggz%2Fz6emFsIrERxVNeYEdz0uGXRNlsj6w7ZnLvQu%2BAC7Oyrfh8JCaxO77e76y0VQUr1r9QrYjXOpJT1xrim5DZRNN6etstMUghh7l32xManG6uabRLBc2c%2FazJj2lqFpaIh&X-Amz-Signature=8f6be682854098a96ecc4bd7c1c8fb35dfc379b85b959811163a332e1bc5be56&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFM7ZD7C%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcNhNPB5IrH3sHOAXxmibo3qr0pVND8uBBHBxrajzTOAiBXWpqVD70c%2BCTvL6Wd%2FunVOQ3Cxd7seRHYjqrk9rOiyyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMRwHLwMyOXksxHYcTKtwDCBMclrLLvNrBsIlDoqaRS4OaRgQUsA2o8gbafVMR053G7K9PNNFC6r2AAQdFr%2BEsoPsLJmok4qtaeL%2BKdko8idn3jbh5gyPalRU2nPACftauOoG9%2BcumuN6Sl3RbWS68D8zu5TT%2BZp97aFDClqlQ%2BrQaw%2BPqr9sv1XUGBXCJ6Eh58XmQreCnodbpJbGLrpQbAjMPDAH58z3IlF0t5hO3iZNBTQYNW4yX9vUL%2F262osiObu9xzN%2BnOaSuPgd6QmTEYdAHMGPDEvtYwGTmUabv%2B%2FYEHQM0AlQzopbjY%2F0iheGYHOkHFwmWo0nWZXBHkfIa4hNp%2FMiMzqtMyy5i81GIFSwRoger%2Bi1Q3DNIjCbb3ytvaar0EqHfTGoiImV7J52ZOLaFW4TBdeCLFzctevFgkis%2BPL1%2B4oP0BanqlPH5MfxVaCt0QPDXFsJBrp1Sk86Zx9ntdFNC%2B4qIhBYEnZpxpbDanLuGrsg4%2Bdr74%2B5bj8YpQkTIlzjKyW0uykzSgpxiwTpJ1m%2FqCLEQryw488j7wmm58SvNLhHq4dw4fIzPxcghkBrMLfnYLOQy7YEpvfU8bBYIXz909YCahLV%2BgPKm4GJ%2FXBvfCo%2FnKDzsvxM6dxcjVFpH9XGbF1VC3qgwgYy4wAY6pgERM9cD2KHfWZkzziCKbFD31T3pXNrKEfmfyH4ygv9gwS4X%2Fw%2B3dfbJMw6WYGBbrvn0JUKh3NvNbDzUjj%2FOxQjYqQ%2FqJggz%2Fz6emFsIrERxVNeYEdz0uGXRNlsj6w7ZnLvQu%2BAC7Oyrfh8JCaxO77e76y0VQUr1r9QrYjXOpJT1xrim5DZRNN6etstMUghh7l32xManG6uabRLBc2c%2FazJj2lqFpaIh&X-Amz-Signature=deaaba55dbcff87f4d13a09c5070dafc4020de70b740b1994356b24591922825&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFM7ZD7C%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcNhNPB5IrH3sHOAXxmibo3qr0pVND8uBBHBxrajzTOAiBXWpqVD70c%2BCTvL6Wd%2FunVOQ3Cxd7seRHYjqrk9rOiyyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMRwHLwMyOXksxHYcTKtwDCBMclrLLvNrBsIlDoqaRS4OaRgQUsA2o8gbafVMR053G7K9PNNFC6r2AAQdFr%2BEsoPsLJmok4qtaeL%2BKdko8idn3jbh5gyPalRU2nPACftauOoG9%2BcumuN6Sl3RbWS68D8zu5TT%2BZp97aFDClqlQ%2BrQaw%2BPqr9sv1XUGBXCJ6Eh58XmQreCnodbpJbGLrpQbAjMPDAH58z3IlF0t5hO3iZNBTQYNW4yX9vUL%2F262osiObu9xzN%2BnOaSuPgd6QmTEYdAHMGPDEvtYwGTmUabv%2B%2FYEHQM0AlQzopbjY%2F0iheGYHOkHFwmWo0nWZXBHkfIa4hNp%2FMiMzqtMyy5i81GIFSwRoger%2Bi1Q3DNIjCbb3ytvaar0EqHfTGoiImV7J52ZOLaFW4TBdeCLFzctevFgkis%2BPL1%2B4oP0BanqlPH5MfxVaCt0QPDXFsJBrp1Sk86Zx9ntdFNC%2B4qIhBYEnZpxpbDanLuGrsg4%2Bdr74%2B5bj8YpQkTIlzjKyW0uykzSgpxiwTpJ1m%2FqCLEQryw488j7wmm58SvNLhHq4dw4fIzPxcghkBrMLfnYLOQy7YEpvfU8bBYIXz909YCahLV%2BgPKm4GJ%2FXBvfCo%2FnKDzsvxM6dxcjVFpH9XGbF1VC3qgwgYy4wAY6pgERM9cD2KHfWZkzziCKbFD31T3pXNrKEfmfyH4ygv9gwS4X%2Fw%2B3dfbJMw6WYGBbrvn0JUKh3NvNbDzUjj%2FOxQjYqQ%2FqJggz%2Fz6emFsIrERxVNeYEdz0uGXRNlsj6w7ZnLvQu%2BAC7Oyrfh8JCaxO77e76y0VQUr1r9QrYjXOpJT1xrim5DZRNN6etstMUghh7l32xManG6uabRLBc2c%2FazJj2lqFpaIh&X-Amz-Signature=18ce12ea068dc00fed2d3b7da7af55046497cfc0c916b5e24c04e0da5a6be118&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
