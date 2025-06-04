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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CV65D2L%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T132647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIEYxZ91DrX%2FPycHkiYC%2BYnmrIvexsZyP2JlJfED2qVR%2FAiEAl1i5i2h8npUTefjjsckmQsoFyHP57njpPn%2FMbqIMbt8q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDGutCNwM8V2kgg2Y%2BCrcA0%2BGosMfmkZLD8qJoxQH%2BVdEI5vZi9ShVavP3GIeunAS1pTVSOk%2BtAV6%2BGt3WhBW8WRT%2FVnNaziRwwh7TkRVpqJCWPSPwMAUgS7LXyC58bWAajc6rMPcZJGGocwBYl7UKBP0DzY2uJ%2BVnZw1sGdqea%2BedNZCW4qATL7Kvrdy1SstUD70WU2tgSwtLQdKuPc0ehy8Lu3uPzeHEJW8Hs1cv8guDWDQSxPnLgoETmYVuDNKdhS%2BugT9ZHTAe0v9iBXLGyX%2FOCmg145I5mDDY8XMXbvU8s38psVW2Wf2joX9AKxP2f5fh8RseOwyZSH0A2XeaSu3%2FRfK3F1SVECCbRz%2B9k6GgL7NeiUYtmMngEhqE%2BczNJ%2F5lIBcw7MHLozuRBkE%2FWsVyk1mFXWpPEDDS2PrX47gXKbdgxWniUg3%2BxiGg%2BYUvvm4kpcWX8PNX2GzWlk8mJNHPmuC7Z5Qw0sl3RAiC24JaQCk9WUBP1EibJC1PzbR0VWoGKZOTfg6E8kzvmrjsy4dtzveWJwC5%2B8NXrpFXB1YeoaJSNlEF5XAsEYjqJPu4uYmDbipW0sak2IHV2jrc9j4YjbwuZAB0fZ5Wgj%2FWd5U3vQC9GSNuNtQG1Fx%2Bo5pUssB%2FanjYHrwVHwnMJqAgcIGOqUBqBSc8pv1pSkaBf46K64fv5bxIWRcfGjh3xUySJ7tSZUKT2a7ZqAHgDSFSk5Q381RJZqopaWuPob%2FzGtbrizsGT20F4OBCt1ugnmzKxHbcHSIvFC1uNk0%2FEHBEBMkie4wYbSA3NVjGZGMjKXxpVzZsVMuc1vTSnF8Ks6sVWw35AROuvnk2DcQWfjME0Xqnn5QAyaLfcvezuhzD5Ye%2BLLO5j0ADCX8&X-Amz-Signature=77b034d7dfb6ab0ad1a947c5208cacb8020c54876aeb680df34b55d7effbfdf8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CV65D2L%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T132647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIEYxZ91DrX%2FPycHkiYC%2BYnmrIvexsZyP2JlJfED2qVR%2FAiEAl1i5i2h8npUTefjjsckmQsoFyHP57njpPn%2FMbqIMbt8q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDGutCNwM8V2kgg2Y%2BCrcA0%2BGosMfmkZLD8qJoxQH%2BVdEI5vZi9ShVavP3GIeunAS1pTVSOk%2BtAV6%2BGt3WhBW8WRT%2FVnNaziRwwh7TkRVpqJCWPSPwMAUgS7LXyC58bWAajc6rMPcZJGGocwBYl7UKBP0DzY2uJ%2BVnZw1sGdqea%2BedNZCW4qATL7Kvrdy1SstUD70WU2tgSwtLQdKuPc0ehy8Lu3uPzeHEJW8Hs1cv8guDWDQSxPnLgoETmYVuDNKdhS%2BugT9ZHTAe0v9iBXLGyX%2FOCmg145I5mDDY8XMXbvU8s38psVW2Wf2joX9AKxP2f5fh8RseOwyZSH0A2XeaSu3%2FRfK3F1SVECCbRz%2B9k6GgL7NeiUYtmMngEhqE%2BczNJ%2F5lIBcw7MHLozuRBkE%2FWsVyk1mFXWpPEDDS2PrX47gXKbdgxWniUg3%2BxiGg%2BYUvvm4kpcWX8PNX2GzWlk8mJNHPmuC7Z5Qw0sl3RAiC24JaQCk9WUBP1EibJC1PzbR0VWoGKZOTfg6E8kzvmrjsy4dtzveWJwC5%2B8NXrpFXB1YeoaJSNlEF5XAsEYjqJPu4uYmDbipW0sak2IHV2jrc9j4YjbwuZAB0fZ5Wgj%2FWd5U3vQC9GSNuNtQG1Fx%2Bo5pUssB%2FanjYHrwVHwnMJqAgcIGOqUBqBSc8pv1pSkaBf46K64fv5bxIWRcfGjh3xUySJ7tSZUKT2a7ZqAHgDSFSk5Q381RJZqopaWuPob%2FzGtbrizsGT20F4OBCt1ugnmzKxHbcHSIvFC1uNk0%2FEHBEBMkie4wYbSA3NVjGZGMjKXxpVzZsVMuc1vTSnF8Ks6sVWw35AROuvnk2DcQWfjME0Xqnn5QAyaLfcvezuhzD5Ye%2BLLO5j0ADCX8&X-Amz-Signature=c7da57b39253780bbe23f75813f0a507575b002c601ab2cb6b03e592379a9974&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CV65D2L%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T132647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIEYxZ91DrX%2FPycHkiYC%2BYnmrIvexsZyP2JlJfED2qVR%2FAiEAl1i5i2h8npUTefjjsckmQsoFyHP57njpPn%2FMbqIMbt8q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDGutCNwM8V2kgg2Y%2BCrcA0%2BGosMfmkZLD8qJoxQH%2BVdEI5vZi9ShVavP3GIeunAS1pTVSOk%2BtAV6%2BGt3WhBW8WRT%2FVnNaziRwwh7TkRVpqJCWPSPwMAUgS7LXyC58bWAajc6rMPcZJGGocwBYl7UKBP0DzY2uJ%2BVnZw1sGdqea%2BedNZCW4qATL7Kvrdy1SstUD70WU2tgSwtLQdKuPc0ehy8Lu3uPzeHEJW8Hs1cv8guDWDQSxPnLgoETmYVuDNKdhS%2BugT9ZHTAe0v9iBXLGyX%2FOCmg145I5mDDY8XMXbvU8s38psVW2Wf2joX9AKxP2f5fh8RseOwyZSH0A2XeaSu3%2FRfK3F1SVECCbRz%2B9k6GgL7NeiUYtmMngEhqE%2BczNJ%2F5lIBcw7MHLozuRBkE%2FWsVyk1mFXWpPEDDS2PrX47gXKbdgxWniUg3%2BxiGg%2BYUvvm4kpcWX8PNX2GzWlk8mJNHPmuC7Z5Qw0sl3RAiC24JaQCk9WUBP1EibJC1PzbR0VWoGKZOTfg6E8kzvmrjsy4dtzveWJwC5%2B8NXrpFXB1YeoaJSNlEF5XAsEYjqJPu4uYmDbipW0sak2IHV2jrc9j4YjbwuZAB0fZ5Wgj%2FWd5U3vQC9GSNuNtQG1Fx%2Bo5pUssB%2FanjYHrwVHwnMJqAgcIGOqUBqBSc8pv1pSkaBf46K64fv5bxIWRcfGjh3xUySJ7tSZUKT2a7ZqAHgDSFSk5Q381RJZqopaWuPob%2FzGtbrizsGT20F4OBCt1ugnmzKxHbcHSIvFC1uNk0%2FEHBEBMkie4wYbSA3NVjGZGMjKXxpVzZsVMuc1vTSnF8Ks6sVWw35AROuvnk2DcQWfjME0Xqnn5QAyaLfcvezuhzD5Ye%2BLLO5j0ADCX8&X-Amz-Signature=bfb04e48f15ef4c1f23c5ee8d1b64cd526e06db9b65df771ad493135756ccc1f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
