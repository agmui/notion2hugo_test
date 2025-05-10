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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655T6BJLR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T121330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNXm1wojDLw0q81cogbLvPp%2BnGsdbTpBepwCrGMyd%2BsAIhAKmal%2F1%2FTuwiUD8oipitxr0pxMbTaw6DWTmSiMTrm7aGKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO6MjR6L2ZVaFYeyIq3AOjvyTP5VDEtP0PPHshaD3hnPZ%2FyQstdgqjnDszR2ekw%2B%2BjUJq3UzqjlUUhwSD0XTI1MbVniCo%2BmSPm43TK3Z5QBFNM2FA6ws0qVGtfMPdXLdSiB7RcVMx02Pq1lumQgab4fhm09ctji1uzR5nPpkSpvHZ%2BII39rL%2FHeqbce93%2BG5a0OCckh8SI%2FkJ%2Bg2xxczQhiZZA3xd5hDxjnsXVXdR3rdaVGyiWKVNSnwSTVw1CVtOCDY6k9sekGl2S70Tov%2Bh3dCG7idjcTjSSys5GZTtGxLZpgcDTuwvNHa4QLRLlouacIzpcymP%2FuCOd7PdKSANWzLNmizR350Wqd%2FQ5XS9hMsfBdRe4dnutP1dWiQHexvxbooDPBNMoHnDcwDFllCMgq534GVxHxCrsmo%2FQME0%2FH6Jr56jRLUufaDvSLKOkQ3IAgvjfY%2BEJttrhA6b3ED1t0hOrz3C6yz5PEKgVhhOa1yznLVQjuD%2FFat6Vorrfi97oRqaGJSlHRizWs9AOLNjiQtswexvTrghHao6NBIVSgZPa7U4P%2BF9n6eSdkab%2FOMBqO64v93Vgfkcq%2FYMR2ozR%2B5jDsDVFXNXml%2FhbNYJJPrZNdGw8boZIvjet7mQ25B7JArZlkTKYdzX2ijC1j%2FzABjqkAQNskgE1ncdXWutXPLubSqZU6FbN4r0PNi6RMJotHo20%2FsLpUEa8JlEJmlv9ZJcufairUjJsxHnKtnRkBfw4R2PEVfpNxUT0%2FHfdmIs3Aw2sS7rNEcNQ%2BVyKaLo9AOhRa%2BMokToKPgQoEQdshUL7z%2BoOamnds6VILjsBcpYrdI8cZIcpXvi6gxpgqTogg3UidcMrkKS%2BoGAjFxff%2BW7VJnzUjsBd&X-Amz-Signature=f0883c3ae1c9daccf6f821344ed12019d457825177bbc21bdd45ab810f969315&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655T6BJLR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T121330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNXm1wojDLw0q81cogbLvPp%2BnGsdbTpBepwCrGMyd%2BsAIhAKmal%2F1%2FTuwiUD8oipitxr0pxMbTaw6DWTmSiMTrm7aGKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO6MjR6L2ZVaFYeyIq3AOjvyTP5VDEtP0PPHshaD3hnPZ%2FyQstdgqjnDszR2ekw%2B%2BjUJq3UzqjlUUhwSD0XTI1MbVniCo%2BmSPm43TK3Z5QBFNM2FA6ws0qVGtfMPdXLdSiB7RcVMx02Pq1lumQgab4fhm09ctji1uzR5nPpkSpvHZ%2BII39rL%2FHeqbce93%2BG5a0OCckh8SI%2FkJ%2Bg2xxczQhiZZA3xd5hDxjnsXVXdR3rdaVGyiWKVNSnwSTVw1CVtOCDY6k9sekGl2S70Tov%2Bh3dCG7idjcTjSSys5GZTtGxLZpgcDTuwvNHa4QLRLlouacIzpcymP%2FuCOd7PdKSANWzLNmizR350Wqd%2FQ5XS9hMsfBdRe4dnutP1dWiQHexvxbooDPBNMoHnDcwDFllCMgq534GVxHxCrsmo%2FQME0%2FH6Jr56jRLUufaDvSLKOkQ3IAgvjfY%2BEJttrhA6b3ED1t0hOrz3C6yz5PEKgVhhOa1yznLVQjuD%2FFat6Vorrfi97oRqaGJSlHRizWs9AOLNjiQtswexvTrghHao6NBIVSgZPa7U4P%2BF9n6eSdkab%2FOMBqO64v93Vgfkcq%2FYMR2ozR%2B5jDsDVFXNXml%2FhbNYJJPrZNdGw8boZIvjet7mQ25B7JArZlkTKYdzX2ijC1j%2FzABjqkAQNskgE1ncdXWutXPLubSqZU6FbN4r0PNi6RMJotHo20%2FsLpUEa8JlEJmlv9ZJcufairUjJsxHnKtnRkBfw4R2PEVfpNxUT0%2FHfdmIs3Aw2sS7rNEcNQ%2BVyKaLo9AOhRa%2BMokToKPgQoEQdshUL7z%2BoOamnds6VILjsBcpYrdI8cZIcpXvi6gxpgqTogg3UidcMrkKS%2BoGAjFxff%2BW7VJnzUjsBd&X-Amz-Signature=4096cff7bef82eeaadcb15f18fce37a70b2167f0d2343250511b766affe1de5e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655T6BJLR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T121330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNXm1wojDLw0q81cogbLvPp%2BnGsdbTpBepwCrGMyd%2BsAIhAKmal%2F1%2FTuwiUD8oipitxr0pxMbTaw6DWTmSiMTrm7aGKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO6MjR6L2ZVaFYeyIq3AOjvyTP5VDEtP0PPHshaD3hnPZ%2FyQstdgqjnDszR2ekw%2B%2BjUJq3UzqjlUUhwSD0XTI1MbVniCo%2BmSPm43TK3Z5QBFNM2FA6ws0qVGtfMPdXLdSiB7RcVMx02Pq1lumQgab4fhm09ctji1uzR5nPpkSpvHZ%2BII39rL%2FHeqbce93%2BG5a0OCckh8SI%2FkJ%2Bg2xxczQhiZZA3xd5hDxjnsXVXdR3rdaVGyiWKVNSnwSTVw1CVtOCDY6k9sekGl2S70Tov%2Bh3dCG7idjcTjSSys5GZTtGxLZpgcDTuwvNHa4QLRLlouacIzpcymP%2FuCOd7PdKSANWzLNmizR350Wqd%2FQ5XS9hMsfBdRe4dnutP1dWiQHexvxbooDPBNMoHnDcwDFllCMgq534GVxHxCrsmo%2FQME0%2FH6Jr56jRLUufaDvSLKOkQ3IAgvjfY%2BEJttrhA6b3ED1t0hOrz3C6yz5PEKgVhhOa1yznLVQjuD%2FFat6Vorrfi97oRqaGJSlHRizWs9AOLNjiQtswexvTrghHao6NBIVSgZPa7U4P%2BF9n6eSdkab%2FOMBqO64v93Vgfkcq%2FYMR2ozR%2B5jDsDVFXNXml%2FhbNYJJPrZNdGw8boZIvjet7mQ25B7JArZlkTKYdzX2ijC1j%2FzABjqkAQNskgE1ncdXWutXPLubSqZU6FbN4r0PNi6RMJotHo20%2FsLpUEa8JlEJmlv9ZJcufairUjJsxHnKtnRkBfw4R2PEVfpNxUT0%2FHfdmIs3Aw2sS7rNEcNQ%2BVyKaLo9AOhRa%2BMokToKPgQoEQdshUL7z%2BoOamnds6VILjsBcpYrdI8cZIcpXvi6gxpgqTogg3UidcMrkKS%2BoGAjFxff%2BW7VJnzUjsBd&X-Amz-Signature=bef8b48d2f1b13e590d17f0d0ec977779fa46d9b525c31ffcc490a9c8b73099c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
