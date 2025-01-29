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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQWLQJOT%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdmm%2FIUMLQs9DYtujMBBOeopj0XFLtL28coo%2BrpFRwUgIhAO2%2BaZHhyFJqUF3lmt6xufGlJh7a%2FqihIu3EdUphbDzVKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbqjeH3pOziNP2gQ4q3AMxq3VttfEPbspEGcbtxk%2B8I8KkSauah9UW4RpB41jSTjgBAOX03wOCpiQfAh9ah4lPi2R%2FaUF%2FDCZv0Aoi7BAo75pNggaMR5USJCRV7teGyGvRvEgOjP%2BSMaBBc%2FOxS26BBOYlEX1pSsfJBRIm7SgWEg6DvP6ub264n0VTZVraJgj9CtxfPD7vm6Ajk1zs1v8MCSJ1%2BwvXIpxg82Uc2of896egE24UAYtHwQCVs8Rfc0BPUn9I4TASunYqekHq%2FaJSHtiZGfdn1%2FbnElYyxxy4tbwCV7dS5eKIwtDel1o0WQdJZiYNvcbNoUyeqfsZl6GIeCfwpdk00gaCWMagCZNoj3io1eChfu2oasW3omHbXbKwLZDc%2BeQ01SflfXLlirgOdiNRwwG3CqnvrKOx5uyOvMI94MtBtFWvZuuved36DTpGy6FNpqU0zfpLThGSJEPoKz60g5zGaxcZikJ%2FRQy1rQ6LqsOjk2ToJraHVJL7asgP5%2FXXtbwb%2Fe2Rl4xhdwQ494IcLAAnAqBO%2F0HgdtTxWSTAkXRPmWiXIMnPtsM91lvBHqm4IFZYpf3Kl4FVrwCeID%2FC815x4LzB5R7B2JBA2ynTEkuNGmMJDDH70qFBdMgEN8uknBw%2B3ZInSzDp2em8BjqkAego7RnyyoaIkX3u%2F%2FzFw9hy8iPHRIEmzkRF8WvWVgaEJgFVwut21YA3bEdg9mVB3tYONQuYkQfTLOdVvN2AjolxXQ%2B751SLdqmGvW2KGfYPNeAX97N6F0R1NBEzZGK4YI8nDZRbi%2B4EMAMOlfGE9zETinCGQNphDPPYoiZwIETrY5%2BHyI0Hn4jCgU1jd1weaX%2BUlm%2FSCMlM3vV6IWKbJNhHf1PO&X-Amz-Signature=54a810e7bf1ad230c8fa14b454a2e2b7bc6a2fd7336b2b305e1c62d4c9949a5c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQWLQJOT%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdmm%2FIUMLQs9DYtujMBBOeopj0XFLtL28coo%2BrpFRwUgIhAO2%2BaZHhyFJqUF3lmt6xufGlJh7a%2FqihIu3EdUphbDzVKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbqjeH3pOziNP2gQ4q3AMxq3VttfEPbspEGcbtxk%2B8I8KkSauah9UW4RpB41jSTjgBAOX03wOCpiQfAh9ah4lPi2R%2FaUF%2FDCZv0Aoi7BAo75pNggaMR5USJCRV7teGyGvRvEgOjP%2BSMaBBc%2FOxS26BBOYlEX1pSsfJBRIm7SgWEg6DvP6ub264n0VTZVraJgj9CtxfPD7vm6Ajk1zs1v8MCSJ1%2BwvXIpxg82Uc2of896egE24UAYtHwQCVs8Rfc0BPUn9I4TASunYqekHq%2FaJSHtiZGfdn1%2FbnElYyxxy4tbwCV7dS5eKIwtDel1o0WQdJZiYNvcbNoUyeqfsZl6GIeCfwpdk00gaCWMagCZNoj3io1eChfu2oasW3omHbXbKwLZDc%2BeQ01SflfXLlirgOdiNRwwG3CqnvrKOx5uyOvMI94MtBtFWvZuuved36DTpGy6FNpqU0zfpLThGSJEPoKz60g5zGaxcZikJ%2FRQy1rQ6LqsOjk2ToJraHVJL7asgP5%2FXXtbwb%2Fe2Rl4xhdwQ494IcLAAnAqBO%2F0HgdtTxWSTAkXRPmWiXIMnPtsM91lvBHqm4IFZYpf3Kl4FVrwCeID%2FC815x4LzB5R7B2JBA2ynTEkuNGmMJDDH70qFBdMgEN8uknBw%2B3ZInSzDp2em8BjqkAego7RnyyoaIkX3u%2F%2FzFw9hy8iPHRIEmzkRF8WvWVgaEJgFVwut21YA3bEdg9mVB3tYONQuYkQfTLOdVvN2AjolxXQ%2B751SLdqmGvW2KGfYPNeAX97N6F0R1NBEzZGK4YI8nDZRbi%2B4EMAMOlfGE9zETinCGQNphDPPYoiZwIETrY5%2BHyI0Hn4jCgU1jd1weaX%2BUlm%2FSCMlM3vV6IWKbJNhHf1PO&X-Amz-Signature=3cce452c77fef0c65ab50e96a68c6d48ee633684d7a6bb2d83b37b3d737c5c57&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQWLQJOT%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdmm%2FIUMLQs9DYtujMBBOeopj0XFLtL28coo%2BrpFRwUgIhAO2%2BaZHhyFJqUF3lmt6xufGlJh7a%2FqihIu3EdUphbDzVKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbqjeH3pOziNP2gQ4q3AMxq3VttfEPbspEGcbtxk%2B8I8KkSauah9UW4RpB41jSTjgBAOX03wOCpiQfAh9ah4lPi2R%2FaUF%2FDCZv0Aoi7BAo75pNggaMR5USJCRV7teGyGvRvEgOjP%2BSMaBBc%2FOxS26BBOYlEX1pSsfJBRIm7SgWEg6DvP6ub264n0VTZVraJgj9CtxfPD7vm6Ajk1zs1v8MCSJ1%2BwvXIpxg82Uc2of896egE24UAYtHwQCVs8Rfc0BPUn9I4TASunYqekHq%2FaJSHtiZGfdn1%2FbnElYyxxy4tbwCV7dS5eKIwtDel1o0WQdJZiYNvcbNoUyeqfsZl6GIeCfwpdk00gaCWMagCZNoj3io1eChfu2oasW3omHbXbKwLZDc%2BeQ01SflfXLlirgOdiNRwwG3CqnvrKOx5uyOvMI94MtBtFWvZuuved36DTpGy6FNpqU0zfpLThGSJEPoKz60g5zGaxcZikJ%2FRQy1rQ6LqsOjk2ToJraHVJL7asgP5%2FXXtbwb%2Fe2Rl4xhdwQ494IcLAAnAqBO%2F0HgdtTxWSTAkXRPmWiXIMnPtsM91lvBHqm4IFZYpf3Kl4FVrwCeID%2FC815x4LzB5R7B2JBA2ynTEkuNGmMJDDH70qFBdMgEN8uknBw%2B3ZInSzDp2em8BjqkAego7RnyyoaIkX3u%2F%2FzFw9hy8iPHRIEmzkRF8WvWVgaEJgFVwut21YA3bEdg9mVB3tYONQuYkQfTLOdVvN2AjolxXQ%2B751SLdqmGvW2KGfYPNeAX97N6F0R1NBEzZGK4YI8nDZRbi%2B4EMAMOlfGE9zETinCGQNphDPPYoiZwIETrY5%2BHyI0Hn4jCgU1jd1weaX%2BUlm%2FSCMlM3vV6IWKbJNhHf1PO&X-Amz-Signature=b00aba38e70d2d2d41f6ca615ccd8de49a1147a274e7de5a2bcc77746915c74e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
