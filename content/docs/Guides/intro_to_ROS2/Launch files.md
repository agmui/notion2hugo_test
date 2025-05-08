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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJLDHL3R%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T041251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzdfbpiApB6dnl%2BCatgRi8CdXDcyq5KbTV3owXK5XznQIhAJ%2BVAPAvMJeLDtUM96IHyfdFyFZMn7IfMsOclzUn0Zo6Kv8DCGwQABoMNjM3NDIzMTgzODA1IgxeA%2FRjl2CnH6%2B896cq3AMFnDkq6Bop00c4UJMviwYxFEM%2BrExuugThddxyGuxcVo%2BEPUKv6slXjN3EbGWb858a3EIIEode02Yx8LKOjQWi5ng1ZIyAL%2BUE6h%2Fcl6Xm1DqGmWCo%2FGhtn2ABNjwdwISICdH%2FOmhx%2Fpi8gdyWUnINbhIcFoJ7VNh%2BwjBkAhQcPMjA6RAXKKLl%2BcTHoh%2FwgWH1YOiceJE%2BT9m4u1pTwbvH38Jbx089TZD6OjmEp9e2lX0quFk%2Ff3hqZJdGpzNK4GG%2FIXLfJue2UcgqvnZ6cr9EzaukCMG2HQny4fjb9ppqOAeOd45sOG6%2FaOvEeoYNkw6LJdobgx6gYaRpKlU%2Bkcasj7bXOka%2FR1nB8tYrgpYCsN3Lf85kJME2D6KQrap7RciSkxIYJfY6wuZT4YADN%2BQGXZ685n70oCDL550yEXTULhQ4MIyogh2W8ZO%2B9bGA4lR4AAsX0CAmnxUWlBnB80Iy4EB26fw9C25%2F%2FIsuyJWOLb8r%2FEeHG%2BpvUTiyo8UDJtg%2Bd2F8KhLeG7CUFuSbSNUKVDTA8Dyevqila0UXlbiQ8aROrHm7%2FL5F7NfUiQZnQEIdyfg0rOQqXWNFKnaXFH31gzjtnlNMb%2FSx9UDTBpqg3mQGZ2Br%2FtfhbsNX7zCNwvDABjqkAR2bIDPprPwpCZm4Fb8gR4hfrDplP26YSxCDpPz7JXl%2B%2Fullwk%2Bww6I73N1fjud6t%2BG2Cxd7v5mz%2BOYXacjklVb%2Fr2zyo2ZL4UfciHnhs79iJoJ3H9yEQ6YXbz4SLAoZpP0YAHWJ3BTtF11kwgZsp6SpTAXal2IDMsa%2BC403MsygdFBm%2FPl9kA8QGQS%2FTxg1XwyYNjhsDXheET9WdJHhyaPU4gA%2F&X-Amz-Signature=6f35c94712edca55712bdcbcde91ce4ea6832b5003f1fce4f30aafc0832f08ea&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJLDHL3R%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T041251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzdfbpiApB6dnl%2BCatgRi8CdXDcyq5KbTV3owXK5XznQIhAJ%2BVAPAvMJeLDtUM96IHyfdFyFZMn7IfMsOclzUn0Zo6Kv8DCGwQABoMNjM3NDIzMTgzODA1IgxeA%2FRjl2CnH6%2B896cq3AMFnDkq6Bop00c4UJMviwYxFEM%2BrExuugThddxyGuxcVo%2BEPUKv6slXjN3EbGWb858a3EIIEode02Yx8LKOjQWi5ng1ZIyAL%2BUE6h%2Fcl6Xm1DqGmWCo%2FGhtn2ABNjwdwISICdH%2FOmhx%2Fpi8gdyWUnINbhIcFoJ7VNh%2BwjBkAhQcPMjA6RAXKKLl%2BcTHoh%2FwgWH1YOiceJE%2BT9m4u1pTwbvH38Jbx089TZD6OjmEp9e2lX0quFk%2Ff3hqZJdGpzNK4GG%2FIXLfJue2UcgqvnZ6cr9EzaukCMG2HQny4fjb9ppqOAeOd45sOG6%2FaOvEeoYNkw6LJdobgx6gYaRpKlU%2Bkcasj7bXOka%2FR1nB8tYrgpYCsN3Lf85kJME2D6KQrap7RciSkxIYJfY6wuZT4YADN%2BQGXZ685n70oCDL550yEXTULhQ4MIyogh2W8ZO%2B9bGA4lR4AAsX0CAmnxUWlBnB80Iy4EB26fw9C25%2F%2FIsuyJWOLb8r%2FEeHG%2BpvUTiyo8UDJtg%2Bd2F8KhLeG7CUFuSbSNUKVDTA8Dyevqila0UXlbiQ8aROrHm7%2FL5F7NfUiQZnQEIdyfg0rOQqXWNFKnaXFH31gzjtnlNMb%2FSx9UDTBpqg3mQGZ2Br%2FtfhbsNX7zCNwvDABjqkAR2bIDPprPwpCZm4Fb8gR4hfrDplP26YSxCDpPz7JXl%2B%2Fullwk%2Bww6I73N1fjud6t%2BG2Cxd7v5mz%2BOYXacjklVb%2Fr2zyo2ZL4UfciHnhs79iJoJ3H9yEQ6YXbz4SLAoZpP0YAHWJ3BTtF11kwgZsp6SpTAXal2IDMsa%2BC403MsygdFBm%2FPl9kA8QGQS%2FTxg1XwyYNjhsDXheET9WdJHhyaPU4gA%2F&X-Amz-Signature=eb0ffe4101d1f87d9cc6525b9cce3e23d156b781bf181a1828f3247aa08d0d7d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJLDHL3R%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T041251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzdfbpiApB6dnl%2BCatgRi8CdXDcyq5KbTV3owXK5XznQIhAJ%2BVAPAvMJeLDtUM96IHyfdFyFZMn7IfMsOclzUn0Zo6Kv8DCGwQABoMNjM3NDIzMTgzODA1IgxeA%2FRjl2CnH6%2B896cq3AMFnDkq6Bop00c4UJMviwYxFEM%2BrExuugThddxyGuxcVo%2BEPUKv6slXjN3EbGWb858a3EIIEode02Yx8LKOjQWi5ng1ZIyAL%2BUE6h%2Fcl6Xm1DqGmWCo%2FGhtn2ABNjwdwISICdH%2FOmhx%2Fpi8gdyWUnINbhIcFoJ7VNh%2BwjBkAhQcPMjA6RAXKKLl%2BcTHoh%2FwgWH1YOiceJE%2BT9m4u1pTwbvH38Jbx089TZD6OjmEp9e2lX0quFk%2Ff3hqZJdGpzNK4GG%2FIXLfJue2UcgqvnZ6cr9EzaukCMG2HQny4fjb9ppqOAeOd45sOG6%2FaOvEeoYNkw6LJdobgx6gYaRpKlU%2Bkcasj7bXOka%2FR1nB8tYrgpYCsN3Lf85kJME2D6KQrap7RciSkxIYJfY6wuZT4YADN%2BQGXZ685n70oCDL550yEXTULhQ4MIyogh2W8ZO%2B9bGA4lR4AAsX0CAmnxUWlBnB80Iy4EB26fw9C25%2F%2FIsuyJWOLb8r%2FEeHG%2BpvUTiyo8UDJtg%2Bd2F8KhLeG7CUFuSbSNUKVDTA8Dyevqila0UXlbiQ8aROrHm7%2FL5F7NfUiQZnQEIdyfg0rOQqXWNFKnaXFH31gzjtnlNMb%2FSx9UDTBpqg3mQGZ2Br%2FtfhbsNX7zCNwvDABjqkAR2bIDPprPwpCZm4Fb8gR4hfrDplP26YSxCDpPz7JXl%2B%2Fullwk%2Bww6I73N1fjud6t%2BG2Cxd7v5mz%2BOYXacjklVb%2Fr2zyo2ZL4UfciHnhs79iJoJ3H9yEQ6YXbz4SLAoZpP0YAHWJ3BTtF11kwgZsp6SpTAXal2IDMsa%2BC403MsygdFBm%2FPl9kA8QGQS%2FTxg1XwyYNjhsDXheET9WdJHhyaPU4gA%2F&X-Amz-Signature=9e17649381c11bcb6b97deb870fc3204b271162bfce7cba569413cce04b622c7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
