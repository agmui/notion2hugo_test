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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643XU66RE%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAjZwl3F9ODcDrn8i8BBzwS0J6GVuBfvVPbA3kSFOQAQIgQDAY%2FnWpfJXITnJclzJvugbitqSIdochZWBWqMJt5Twq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGNr%2BfDm%2BJ38eIBQxSrcA6XJieYbQG6%2F2DRL4k3mSdj76PO8Axd2u9wDiBhoX1%2B1fe%2FCoPGlZ5obylndZ0h7%2B5jMsQ%2B4%2B0EJ7gIcJzq1bLmmL4BNFy5Er8ePuK5K9DvfWeayMSx7ylNgBqTHUBkpkqRp8VCWFo8VxhFibJQyH2VqifiBFPtwWRZ7POUqZBVHDa%2Bfry9nbIpbZKpMZsuCaNc8iUoLZyiHCb2OTh6jRyfx7Wg9UgBBFQUYkgs7OirBeXOEwtk44BLN0iohraujkHlx%2BmqJtrmuIsuiuaPvQzDvdqG8UkMgOr1NCGxERFeVDq1rqMVwAjZmuklCT5w9x6IphrpRw0MYuT%2BoRxhS9pOQVoUJhVMjq7pLcon4sxznaKOGazLyQuQwt3qNm%2BchXlhVVOFe9AI4GJj3%2FNnSrOQ6b1pIqtsncYxhuHQUooIhbrApDNIhcGykM%2BPy7EpBAfC5fC2ObfZJlAUobjN1ykg4o8RYusEmMrssKGhWHfLEt9YoZbylwqicYylGj3XCU8y9iUc0adjmdE3KjX%2FA6QkxDWwAIlVN0dKgJbuIEfi0mxA4Iz31GIm8yHMBWFKNEAcBsPTKR8cU8ZGgf2iMVu1%2Bb%2FeqjCuesPQiL3Fds2EvQpt6rcLYLkUErxb2MNyZ88AGOqUB9XT6hliaskUtSwyFOBTLcvIYPF6zMe6jBrBgOfPyXEiCfKfaepjDdS4ozs7s8AqxHSKtUnmhqg6hlyE2Ws1JROH31S5hPDtxk%2BpkiL44YqpSTS3hN6ZWuvVPzianwiFxto99yIA1S%2Fnv7TlHpjxWNYrPoGrL6YUjyD7PPo50dXEJe2z9KSuRerzQvb4wKePyROWNiflV0uZu%2F8NzoPO60JfjHNsI&X-Amz-Signature=512611507ff5c393bb56de91191c9ea738e64ff224afcbebaeffa60bfc2205e4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643XU66RE%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAjZwl3F9ODcDrn8i8BBzwS0J6GVuBfvVPbA3kSFOQAQIgQDAY%2FnWpfJXITnJclzJvugbitqSIdochZWBWqMJt5Twq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGNr%2BfDm%2BJ38eIBQxSrcA6XJieYbQG6%2F2DRL4k3mSdj76PO8Axd2u9wDiBhoX1%2B1fe%2FCoPGlZ5obylndZ0h7%2B5jMsQ%2B4%2B0EJ7gIcJzq1bLmmL4BNFy5Er8ePuK5K9DvfWeayMSx7ylNgBqTHUBkpkqRp8VCWFo8VxhFibJQyH2VqifiBFPtwWRZ7POUqZBVHDa%2Bfry9nbIpbZKpMZsuCaNc8iUoLZyiHCb2OTh6jRyfx7Wg9UgBBFQUYkgs7OirBeXOEwtk44BLN0iohraujkHlx%2BmqJtrmuIsuiuaPvQzDvdqG8UkMgOr1NCGxERFeVDq1rqMVwAjZmuklCT5w9x6IphrpRw0MYuT%2BoRxhS9pOQVoUJhVMjq7pLcon4sxznaKOGazLyQuQwt3qNm%2BchXlhVVOFe9AI4GJj3%2FNnSrOQ6b1pIqtsncYxhuHQUooIhbrApDNIhcGykM%2BPy7EpBAfC5fC2ObfZJlAUobjN1ykg4o8RYusEmMrssKGhWHfLEt9YoZbylwqicYylGj3XCU8y9iUc0adjmdE3KjX%2FA6QkxDWwAIlVN0dKgJbuIEfi0mxA4Iz31GIm8yHMBWFKNEAcBsPTKR8cU8ZGgf2iMVu1%2Bb%2FeqjCuesPQiL3Fds2EvQpt6rcLYLkUErxb2MNyZ88AGOqUB9XT6hliaskUtSwyFOBTLcvIYPF6zMe6jBrBgOfPyXEiCfKfaepjDdS4ozs7s8AqxHSKtUnmhqg6hlyE2Ws1JROH31S5hPDtxk%2BpkiL44YqpSTS3hN6ZWuvVPzianwiFxto99yIA1S%2Fnv7TlHpjxWNYrPoGrL6YUjyD7PPo50dXEJe2z9KSuRerzQvb4wKePyROWNiflV0uZu%2F8NzoPO60JfjHNsI&X-Amz-Signature=62ce16966cfea96723c1085329bf8b13874a14a0d970e13298983fcb98cc9ac9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643XU66RE%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAjZwl3F9ODcDrn8i8BBzwS0J6GVuBfvVPbA3kSFOQAQIgQDAY%2FnWpfJXITnJclzJvugbitqSIdochZWBWqMJt5Twq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGNr%2BfDm%2BJ38eIBQxSrcA6XJieYbQG6%2F2DRL4k3mSdj76PO8Axd2u9wDiBhoX1%2B1fe%2FCoPGlZ5obylndZ0h7%2B5jMsQ%2B4%2B0EJ7gIcJzq1bLmmL4BNFy5Er8ePuK5K9DvfWeayMSx7ylNgBqTHUBkpkqRp8VCWFo8VxhFibJQyH2VqifiBFPtwWRZ7POUqZBVHDa%2Bfry9nbIpbZKpMZsuCaNc8iUoLZyiHCb2OTh6jRyfx7Wg9UgBBFQUYkgs7OirBeXOEwtk44BLN0iohraujkHlx%2BmqJtrmuIsuiuaPvQzDvdqG8UkMgOr1NCGxERFeVDq1rqMVwAjZmuklCT5w9x6IphrpRw0MYuT%2BoRxhS9pOQVoUJhVMjq7pLcon4sxznaKOGazLyQuQwt3qNm%2BchXlhVVOFe9AI4GJj3%2FNnSrOQ6b1pIqtsncYxhuHQUooIhbrApDNIhcGykM%2BPy7EpBAfC5fC2ObfZJlAUobjN1ykg4o8RYusEmMrssKGhWHfLEt9YoZbylwqicYylGj3XCU8y9iUc0adjmdE3KjX%2FA6QkxDWwAIlVN0dKgJbuIEfi0mxA4Iz31GIm8yHMBWFKNEAcBsPTKR8cU8ZGgf2iMVu1%2Bb%2FeqjCuesPQiL3Fds2EvQpt6rcLYLkUErxb2MNyZ88AGOqUB9XT6hliaskUtSwyFOBTLcvIYPF6zMe6jBrBgOfPyXEiCfKfaepjDdS4ozs7s8AqxHSKtUnmhqg6hlyE2Ws1JROH31S5hPDtxk%2BpkiL44YqpSTS3hN6ZWuvVPzianwiFxto99yIA1S%2Fnv7TlHpjxWNYrPoGrL6YUjyD7PPo50dXEJe2z9KSuRerzQvb4wKePyROWNiflV0uZu%2F8NzoPO60JfjHNsI&X-Amz-Signature=f2121287bc3eb06eba18aac8df10b258f2cec9096efdc700ebcf8c9fe3900c17&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
