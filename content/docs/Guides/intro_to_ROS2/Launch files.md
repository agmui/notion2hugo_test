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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624OPKOTI%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTp2TlAerwRKFuNaqPy7eBHcBUoyA%2FZqahDDMv0jU4hQIhAMseDxnBWGRgRjEmEDTPesUUZzIfxlBCdQbdAHkYanB7Kv8DCC0QABoMNjM3NDIzMTgzODA1Igyc13fntyxELsPppQgq3AMtHVu1kGQ4RdV4YmleviFjtz9qJ1e3rq%2FqM5z5pMKYFWvm6aCpaPX0reRl%2FGbmCDuJyyZRY6bCgLjS3MLxshxpYqtD4DtjxgzGY0tAqLMyJ9QoRpc2BgyFmUs2vsYhZCA1KjESqTFK25xvubaSGqxhx%2BatvdBdZWskce9awbef0%2FxQfpWBib8VaXzxUC%2F772yjCkNvelm4bDOTztXYfrqTTehivkHMbHK%2BaI5bv4CPRKGVTIaZe3q4k5ju0Aw92j%2BxVlFt5X7ilwsubPrxkhxZ%2BWJpvJ7Py%2BhJdL6ut9YKyTWk0WxLxYcHhOvRfX6GYQxJnpIYfs%2FWCAyBqXPgPPCopc4ukfgGGyolMKmHbPPz%2FYGFL%2BAYApcrxFTDF4lPsnBZEZ2kO4Uo5EtPY8qqRaI%2FvHQGQobFxXIAUBkLsFhB49dm3ehQ9V%2Bam9L43D9anWLAangxseRvKHgSM1T8M7qyBOjBA9xa8alyckA0oIQk0liaRdDFPnZPEAM6wvf78ZioidMvh7TYMuuGAxUYR7tGqe%2FS2NVQ2tNC3%2FUIXu4GxHBcNjeqtVMLDMO6XT9esUfOp2%2BJQIYkAf7L754RIV7urCF8Hli3YP62HjmRa8XMWQWG%2BlmkWKrYBkIIRDCDi%2Fm%2FBjqkASs5yRzpAf2S68BVNE%2FtsE3nu3tQvlp7S2xJwAHLOo6UOG4KHBkPcXB0wUfvKdmP7Wbexe7r6%2FMYaokwTqUJ2RbDkWasb2%2B8VdKF3WJm%2BJXpXgTsguQnTVaOnCTNIyUOn%2F3YD3QrR783wv7w5Kvjqy2BbHBwF6nMijOQa9Lyldd7g7z7wT%2F5plz51Z90sQuAMAPU5OvOsp%2FWXCxX7PdbqGdlaRJ5&X-Amz-Signature=207dc89802d35a64fbf8ef0936f00e27c76a0cf1369205f4b891199c6aae2342&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624OPKOTI%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTp2TlAerwRKFuNaqPy7eBHcBUoyA%2FZqahDDMv0jU4hQIhAMseDxnBWGRgRjEmEDTPesUUZzIfxlBCdQbdAHkYanB7Kv8DCC0QABoMNjM3NDIzMTgzODA1Igyc13fntyxELsPppQgq3AMtHVu1kGQ4RdV4YmleviFjtz9qJ1e3rq%2FqM5z5pMKYFWvm6aCpaPX0reRl%2FGbmCDuJyyZRY6bCgLjS3MLxshxpYqtD4DtjxgzGY0tAqLMyJ9QoRpc2BgyFmUs2vsYhZCA1KjESqTFK25xvubaSGqxhx%2BatvdBdZWskce9awbef0%2FxQfpWBib8VaXzxUC%2F772yjCkNvelm4bDOTztXYfrqTTehivkHMbHK%2BaI5bv4CPRKGVTIaZe3q4k5ju0Aw92j%2BxVlFt5X7ilwsubPrxkhxZ%2BWJpvJ7Py%2BhJdL6ut9YKyTWk0WxLxYcHhOvRfX6GYQxJnpIYfs%2FWCAyBqXPgPPCopc4ukfgGGyolMKmHbPPz%2FYGFL%2BAYApcrxFTDF4lPsnBZEZ2kO4Uo5EtPY8qqRaI%2FvHQGQobFxXIAUBkLsFhB49dm3ehQ9V%2Bam9L43D9anWLAangxseRvKHgSM1T8M7qyBOjBA9xa8alyckA0oIQk0liaRdDFPnZPEAM6wvf78ZioidMvh7TYMuuGAxUYR7tGqe%2FS2NVQ2tNC3%2FUIXu4GxHBcNjeqtVMLDMO6XT9esUfOp2%2BJQIYkAf7L754RIV7urCF8Hli3YP62HjmRa8XMWQWG%2BlmkWKrYBkIIRDCDi%2Fm%2FBjqkASs5yRzpAf2S68BVNE%2FtsE3nu3tQvlp7S2xJwAHLOo6UOG4KHBkPcXB0wUfvKdmP7Wbexe7r6%2FMYaokwTqUJ2RbDkWasb2%2B8VdKF3WJm%2BJXpXgTsguQnTVaOnCTNIyUOn%2F3YD3QrR783wv7w5Kvjqy2BbHBwF6nMijOQa9Lyldd7g7z7wT%2F5plz51Z90sQuAMAPU5OvOsp%2FWXCxX7PdbqGdlaRJ5&X-Amz-Signature=c03f751c46134a2ef53035d63793c900da3246ed6e311ef3d704cc040ddb16e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624OPKOTI%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTp2TlAerwRKFuNaqPy7eBHcBUoyA%2FZqahDDMv0jU4hQIhAMseDxnBWGRgRjEmEDTPesUUZzIfxlBCdQbdAHkYanB7Kv8DCC0QABoMNjM3NDIzMTgzODA1Igyc13fntyxELsPppQgq3AMtHVu1kGQ4RdV4YmleviFjtz9qJ1e3rq%2FqM5z5pMKYFWvm6aCpaPX0reRl%2FGbmCDuJyyZRY6bCgLjS3MLxshxpYqtD4DtjxgzGY0tAqLMyJ9QoRpc2BgyFmUs2vsYhZCA1KjESqTFK25xvubaSGqxhx%2BatvdBdZWskce9awbef0%2FxQfpWBib8VaXzxUC%2F772yjCkNvelm4bDOTztXYfrqTTehivkHMbHK%2BaI5bv4CPRKGVTIaZe3q4k5ju0Aw92j%2BxVlFt5X7ilwsubPrxkhxZ%2BWJpvJ7Py%2BhJdL6ut9YKyTWk0WxLxYcHhOvRfX6GYQxJnpIYfs%2FWCAyBqXPgPPCopc4ukfgGGyolMKmHbPPz%2FYGFL%2BAYApcrxFTDF4lPsnBZEZ2kO4Uo5EtPY8qqRaI%2FvHQGQobFxXIAUBkLsFhB49dm3ehQ9V%2Bam9L43D9anWLAangxseRvKHgSM1T8M7qyBOjBA9xa8alyckA0oIQk0liaRdDFPnZPEAM6wvf78ZioidMvh7TYMuuGAxUYR7tGqe%2FS2NVQ2tNC3%2FUIXu4GxHBcNjeqtVMLDMO6XT9esUfOp2%2BJQIYkAf7L754RIV7urCF8Hli3YP62HjmRa8XMWQWG%2BlmkWKrYBkIIRDCDi%2Fm%2FBjqkASs5yRzpAf2S68BVNE%2FtsE3nu3tQvlp7S2xJwAHLOo6UOG4KHBkPcXB0wUfvKdmP7Wbexe7r6%2FMYaokwTqUJ2RbDkWasb2%2B8VdKF3WJm%2BJXpXgTsguQnTVaOnCTNIyUOn%2F3YD3QrR783wv7w5Kvjqy2BbHBwF6nMijOQa9Lyldd7g7z7wT%2F5plz51Z90sQuAMAPU5OvOsp%2FWXCxX7PdbqGdlaRJ5&X-Amz-Signature=a388bed57c366c3029d997a0d17370a8b0ca01de89116ac04cfa77065011c24f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
