---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JUGPAQN%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHTuyaFkwR6dQNclSIWsKLbt%2Fe%2FCB8zGCfVRHT89lk4QIhAOvdrFUEI41AF7ro%2FkfGSVudqNVwJOd31Ks8MpUs5ZJ1KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igww3utI7AmnFFMa0Rcq3ANiJvLbVHiudNxxJ2AF4GuS5NFT8ZT59VQ9aVW58cB9quY2H3KQiKgxOIgYlhJo%2By2u%2B7Ag7yqWqoDqdH2U%2F8JzKxzZhFqHN515WfIdK1Q3oLIE7ZFWRcNhif5QEmZsu9DN0zauYdRc5GUHiegCsjUrR2Swq%2Bs4uA%2B90WCBErNIdM07iKspX6wUOHGOKUTz2mAZjNtFqobJ6fnHyu3HKIb36bISV4RoDRWLUDiFXvmM5jd7uOQIx%2FQf6jjSlUu84oq4p7OTMus1cw4ojf%2FrfE7bnQP0r7Omj6k3OJPBhWvh5XpTCoYRCOcKKlCoOF39PV2LQx%2Bpjk6zuWDmw0LerMpTuvNpdmYRC%2BCWAVx6m1ojv3Uunfry76wq4vNPQ%2F3ugcFuo7pCd62Yu3LLCEKHvP72f8KC6vpMxLCWY6Vj5ssDSGhB7GW29O1OZubqtBmJ2geq2LVHvo6elCIx45N8IUcx0FLIYHd1bprzfW4VlVaDlga33nJEaYISQaX7sEvAREX7sX5BAcai%2BlPG8KenLcuP62csp3qvc7UowiFOkbh3TArPmvRof7RInNqDDwgKtgU0egrR2enICJ9KDwhkj4a%2Fjv0V%2BPxLpnom87mY6%2BAPb%2FevZgiIPxc24vFbEDDysszOBjqkAWwrSFVX69kfLihNxDSsXYepG5cGQusLLs7cUPOMixcYIDwUAQBstDOQuEHEeQ7qljuk4Fd%2F5Wlfd99MwezgXtUoT%2Bl2rTA0waojhYJSyjrEU4%2B%2FvtQ1ASt%2BSM9XPNshf9H0A92pyDlhraWwFKkAmxdzW8P0cIALq5J%2FspPCKG%2FWBXQWjHp5TzfVbsJ6Rjj%2FBAcolVjc2DaueMNgt7DywvQhpLON&X-Amz-Signature=d33af33a4c30ce45cdb98fc1e34e284292d08ff81a42ab3108d05eee93943a50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JUGPAQN%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHTuyaFkwR6dQNclSIWsKLbt%2Fe%2FCB8zGCfVRHT89lk4QIhAOvdrFUEI41AF7ro%2FkfGSVudqNVwJOd31Ks8MpUs5ZJ1KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igww3utI7AmnFFMa0Rcq3ANiJvLbVHiudNxxJ2AF4GuS5NFT8ZT59VQ9aVW58cB9quY2H3KQiKgxOIgYlhJo%2By2u%2B7Ag7yqWqoDqdH2U%2F8JzKxzZhFqHN515WfIdK1Q3oLIE7ZFWRcNhif5QEmZsu9DN0zauYdRc5GUHiegCsjUrR2Swq%2Bs4uA%2B90WCBErNIdM07iKspX6wUOHGOKUTz2mAZjNtFqobJ6fnHyu3HKIb36bISV4RoDRWLUDiFXvmM5jd7uOQIx%2FQf6jjSlUu84oq4p7OTMus1cw4ojf%2FrfE7bnQP0r7Omj6k3OJPBhWvh5XpTCoYRCOcKKlCoOF39PV2LQx%2Bpjk6zuWDmw0LerMpTuvNpdmYRC%2BCWAVx6m1ojv3Uunfry76wq4vNPQ%2F3ugcFuo7pCd62Yu3LLCEKHvP72f8KC6vpMxLCWY6Vj5ssDSGhB7GW29O1OZubqtBmJ2geq2LVHvo6elCIx45N8IUcx0FLIYHd1bprzfW4VlVaDlga33nJEaYISQaX7sEvAREX7sX5BAcai%2BlPG8KenLcuP62csp3qvc7UowiFOkbh3TArPmvRof7RInNqDDwgKtgU0egrR2enICJ9KDwhkj4a%2Fjv0V%2BPxLpnom87mY6%2BAPb%2FevZgiIPxc24vFbEDDysszOBjqkAWwrSFVX69kfLihNxDSsXYepG5cGQusLLs7cUPOMixcYIDwUAQBstDOQuEHEeQ7qljuk4Fd%2F5Wlfd99MwezgXtUoT%2Bl2rTA0waojhYJSyjrEU4%2B%2FvtQ1ASt%2BSM9XPNshf9H0A92pyDlhraWwFKkAmxdzW8P0cIALq5J%2FspPCKG%2FWBXQWjHp5TzfVbsJ6Rjj%2FBAcolVjc2DaueMNgt7DywvQhpLON&X-Amz-Signature=2f71e567fac2a95b6eeee9f741607abc467cc1bcc7135f76647afb642fbce077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JUGPAQN%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHTuyaFkwR6dQNclSIWsKLbt%2Fe%2FCB8zGCfVRHT89lk4QIhAOvdrFUEI41AF7ro%2FkfGSVudqNVwJOd31Ks8MpUs5ZJ1KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igww3utI7AmnFFMa0Rcq3ANiJvLbVHiudNxxJ2AF4GuS5NFT8ZT59VQ9aVW58cB9quY2H3KQiKgxOIgYlhJo%2By2u%2B7Ag7yqWqoDqdH2U%2F8JzKxzZhFqHN515WfIdK1Q3oLIE7ZFWRcNhif5QEmZsu9DN0zauYdRc5GUHiegCsjUrR2Swq%2Bs4uA%2B90WCBErNIdM07iKspX6wUOHGOKUTz2mAZjNtFqobJ6fnHyu3HKIb36bISV4RoDRWLUDiFXvmM5jd7uOQIx%2FQf6jjSlUu84oq4p7OTMus1cw4ojf%2FrfE7bnQP0r7Omj6k3OJPBhWvh5XpTCoYRCOcKKlCoOF39PV2LQx%2Bpjk6zuWDmw0LerMpTuvNpdmYRC%2BCWAVx6m1ojv3Uunfry76wq4vNPQ%2F3ugcFuo7pCd62Yu3LLCEKHvP72f8KC6vpMxLCWY6Vj5ssDSGhB7GW29O1OZubqtBmJ2geq2LVHvo6elCIx45N8IUcx0FLIYHd1bprzfW4VlVaDlga33nJEaYISQaX7sEvAREX7sX5BAcai%2BlPG8KenLcuP62csp3qvc7UowiFOkbh3TArPmvRof7RInNqDDwgKtgU0egrR2enICJ9KDwhkj4a%2Fjv0V%2BPxLpnom87mY6%2BAPb%2FevZgiIPxc24vFbEDDysszOBjqkAWwrSFVX69kfLihNxDSsXYepG5cGQusLLs7cUPOMixcYIDwUAQBstDOQuEHEeQ7qljuk4Fd%2F5Wlfd99MwezgXtUoT%2Bl2rTA0waojhYJSyjrEU4%2B%2FvtQ1ASt%2BSM9XPNshf9H0A92pyDlhraWwFKkAmxdzW8P0cIALq5J%2FspPCKG%2FWBXQWjHp5TzfVbsJ6Rjj%2FBAcolVjc2DaueMNgt7DywvQhpLON&X-Amz-Signature=824294c4398062c83a661803deb8e428d1595012e0e3f15c882aaba6898cf3bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
