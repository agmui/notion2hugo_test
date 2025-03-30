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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCETNC3X%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIAJWhH7I3mKfD%2FtQ%2FnnzB2liezaCzMj5SywycH5y%2BJLYAiEAwPRQz55oPJci4eKkx94HuP0oX7Xegh70YG6CQsKV8cwqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgIcoAQGDUVfTJj3ircAzXXymti90FFVt4x9i9tJTf%2BOVMMVBl5oVtxF16UQg0KAfoqVN%2BtM2k3WD00P1eQ80S9qDfoKU1WvKoUag%2BEeI8hWyhHmKWxhrAgeEcDaCXXtR%2B0ZHEAs%2BSUBvSEkGTgXtsjO64l%2FtWezjSzYwqi%2BCzHsCt3TcxKc22SggO8CY%2BSJXcoWkecoJGqGl4V0ii%2FyvFrmO9UlhE96nxSoCUYuOFAUcmFIcERNOj7geGqQetD1O%2FpWQQdPpAMD0wHW3ErD39REZgyQRhT42h4uHdgP74mgnJID2Mp9WnIN4aWaaQJtMMCBddPBMdGNYcVkH1fgaoeaPP4tdLilbOJhpUXG%2BFcXuDdMpRdhTcg%2FS6l4UoWAgr55gIRR%2F4Jv6pKL7D7IpkyE%2FW7CKewxv2%2FaEQzvu1FFFzGRAhp0vdZHrk6k3jbEEXQl%2F1t7AsWvLrWIfl52ZH3BMj6yGgId50yg65tzVMpNY0ux%2B3GGpo8dGW4xf6eNqufZDvwetoZnYA3IHoHk68wZDYav5gDAQfLkX870E7XiX41ghGNRkto39HLSM8JMoqa02lmnYYOF3xwDI7PmgKf3gT49QqCWWNthCFNay3eScdTCBV0Kc%2BVn9VRpB8rh8cW1DgLUmsV5QNUMJbqor8GOqUBVdIGABnd%2BaTcNH3P9ywKVnuKl4CGrIXvjD1k7hFbHNfH6oQtHzUELguR%2Fd7YEPZRZyzwc00%2BNVW6kVC64GN5463Zqam4ZP3k57R7ETBUMQnojzUvcILOfsAiI6uTK6khjfnw5wXto6DYCw0gtaz4O2wZTSHq%2F0%2FA2%2BlfrjSwZdbHy7vmYY1f1HvhGbW50JEUIQjFycPWLx9kCxWN5Qw9QuDiTHbD&X-Amz-Signature=3c22f1c3fffb71551ccbb70f57e7384d2dc2406a1c6053c8580534609b01c4b3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCETNC3X%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIAJWhH7I3mKfD%2FtQ%2FnnzB2liezaCzMj5SywycH5y%2BJLYAiEAwPRQz55oPJci4eKkx94HuP0oX7Xegh70YG6CQsKV8cwqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgIcoAQGDUVfTJj3ircAzXXymti90FFVt4x9i9tJTf%2BOVMMVBl5oVtxF16UQg0KAfoqVN%2BtM2k3WD00P1eQ80S9qDfoKU1WvKoUag%2BEeI8hWyhHmKWxhrAgeEcDaCXXtR%2B0ZHEAs%2BSUBvSEkGTgXtsjO64l%2FtWezjSzYwqi%2BCzHsCt3TcxKc22SggO8CY%2BSJXcoWkecoJGqGl4V0ii%2FyvFrmO9UlhE96nxSoCUYuOFAUcmFIcERNOj7geGqQetD1O%2FpWQQdPpAMD0wHW3ErD39REZgyQRhT42h4uHdgP74mgnJID2Mp9WnIN4aWaaQJtMMCBddPBMdGNYcVkH1fgaoeaPP4tdLilbOJhpUXG%2BFcXuDdMpRdhTcg%2FS6l4UoWAgr55gIRR%2F4Jv6pKL7D7IpkyE%2FW7CKewxv2%2FaEQzvu1FFFzGRAhp0vdZHrk6k3jbEEXQl%2F1t7AsWvLrWIfl52ZH3BMj6yGgId50yg65tzVMpNY0ux%2B3GGpo8dGW4xf6eNqufZDvwetoZnYA3IHoHk68wZDYav5gDAQfLkX870E7XiX41ghGNRkto39HLSM8JMoqa02lmnYYOF3xwDI7PmgKf3gT49QqCWWNthCFNay3eScdTCBV0Kc%2BVn9VRpB8rh8cW1DgLUmsV5QNUMJbqor8GOqUBVdIGABnd%2BaTcNH3P9ywKVnuKl4CGrIXvjD1k7hFbHNfH6oQtHzUELguR%2Fd7YEPZRZyzwc00%2BNVW6kVC64GN5463Zqam4ZP3k57R7ETBUMQnojzUvcILOfsAiI6uTK6khjfnw5wXto6DYCw0gtaz4O2wZTSHq%2F0%2FA2%2BlfrjSwZdbHy7vmYY1f1HvhGbW50JEUIQjFycPWLx9kCxWN5Qw9QuDiTHbD&X-Amz-Signature=8442e60d8f1688665bc3175fc0184921f23d1cd8a2af4bd448afd260557e7e89&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCETNC3X%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIAJWhH7I3mKfD%2FtQ%2FnnzB2liezaCzMj5SywycH5y%2BJLYAiEAwPRQz55oPJci4eKkx94HuP0oX7Xegh70YG6CQsKV8cwqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgIcoAQGDUVfTJj3ircAzXXymti90FFVt4x9i9tJTf%2BOVMMVBl5oVtxF16UQg0KAfoqVN%2BtM2k3WD00P1eQ80S9qDfoKU1WvKoUag%2BEeI8hWyhHmKWxhrAgeEcDaCXXtR%2B0ZHEAs%2BSUBvSEkGTgXtsjO64l%2FtWezjSzYwqi%2BCzHsCt3TcxKc22SggO8CY%2BSJXcoWkecoJGqGl4V0ii%2FyvFrmO9UlhE96nxSoCUYuOFAUcmFIcERNOj7geGqQetD1O%2FpWQQdPpAMD0wHW3ErD39REZgyQRhT42h4uHdgP74mgnJID2Mp9WnIN4aWaaQJtMMCBddPBMdGNYcVkH1fgaoeaPP4tdLilbOJhpUXG%2BFcXuDdMpRdhTcg%2FS6l4UoWAgr55gIRR%2F4Jv6pKL7D7IpkyE%2FW7CKewxv2%2FaEQzvu1FFFzGRAhp0vdZHrk6k3jbEEXQl%2F1t7AsWvLrWIfl52ZH3BMj6yGgId50yg65tzVMpNY0ux%2B3GGpo8dGW4xf6eNqufZDvwetoZnYA3IHoHk68wZDYav5gDAQfLkX870E7XiX41ghGNRkto39HLSM8JMoqa02lmnYYOF3xwDI7PmgKf3gT49QqCWWNthCFNay3eScdTCBV0Kc%2BVn9VRpB8rh8cW1DgLUmsV5QNUMJbqor8GOqUBVdIGABnd%2BaTcNH3P9ywKVnuKl4CGrIXvjD1k7hFbHNfH6oQtHzUELguR%2Fd7YEPZRZyzwc00%2BNVW6kVC64GN5463Zqam4ZP3k57R7ETBUMQnojzUvcILOfsAiI6uTK6khjfnw5wXto6DYCw0gtaz4O2wZTSHq%2F0%2FA2%2BlfrjSwZdbHy7vmYY1f1HvhGbW50JEUIQjFycPWLx9kCxWN5Qw9QuDiTHbD&X-Amz-Signature=c120c39daa2465be23513c21a1610e4527f2b2f2487ba92a532e774c1fe000d2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
