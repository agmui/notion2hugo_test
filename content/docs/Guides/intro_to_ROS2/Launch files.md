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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFRZU23R%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIA50UpaIS7E7Z9Z4dC4ADETtCm0c40fYnEUUSeoMPVFsAiAfY2C6FI7sATW%2B34JjBSy%2BjHDMjTegSxXrLA%2BJ5TjPByr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMeIDonowUsx7y3LAQKtwDM7JKoJI5cZqVkQeRUNsLsao85cmBVgI6UUD2dLoC2toGQha3gKStkxSaxgjv0sMNwU80mVxTaWW%2ByQqNluPsbGnQ1Alc7lCkeUAwW%2BNLETpwlxVl6NgZz%2FOhC0kC9SmE8bemR48%2B1J%2BU0U7Kq0PoVV1858htqFoGfg220R46wglmglJdJi%2BlPunuFS9zezkyAYn9%2FhnxeH9VT9uwGdeddGNvwtu5XSxHNoEswLNjYRT9VzwMIZvUpsQCmZFC7Gv81SPRLaTGmNfP31iYADM0mKDRDZfTYfaucbeSitsLaVCxxM%2BCRdWp1mf7eE3YFVYldyGS0azD8qrGgNIQN%2FRQ8YWDTUkyfoc1vKyeWmW%2FveDdFV6%2FCh1y0K5jaP%2BqVBPdrYUzdC5aTzN0SwkzhiB1nNV%2Fgkm%2BpZuhG9CKytZpXa1or5ecUvo60nM87BBUYpHv21B%2F2gqooDMN5Z2dk7%2FNaa7L3xmDdqLhQLggIL3Afnr318Ebfen6xpPN2zj7OZ6uKHO4qLbs60SZ7z9wARpHmWDIN%2FAPfZWXLggscDti1OLzzann3TrSNS%2BWkaFGxCzgx8c9CdS00svHOPwsm33jKIepvT3M0urmNIzFPaObTlAHEGD%2FshncV46ewkEwpMChwwY6pgHox%2BFm8cGdS2g%2BtljSglTU0n9W97%2By57yey1vvMkRTTZgUIuZAJ4eY7ufzNvWsmucqR2etepQo1xUmJGcDAr4tRb%2F4Hj4Pao6OWN5hrZxT%2FPAy1Fge9XU8o6WuwQqngoD8M7iO4CoJFaRQ19LNkRwd8mRSeNCIDBjkoy9GvLMzMTfqdjI%2F%2BWsrR2y37JKxMLlHrzurHUA2XMYMOZTW4c%2B42Y8Xq%2Br8&X-Amz-Signature=ef6113450c23bb8dc357abddfad6383ca907f617a917d6aff13f85ff15e8b5e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFRZU23R%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIA50UpaIS7E7Z9Z4dC4ADETtCm0c40fYnEUUSeoMPVFsAiAfY2C6FI7sATW%2B34JjBSy%2BjHDMjTegSxXrLA%2BJ5TjPByr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMeIDonowUsx7y3LAQKtwDM7JKoJI5cZqVkQeRUNsLsao85cmBVgI6UUD2dLoC2toGQha3gKStkxSaxgjv0sMNwU80mVxTaWW%2ByQqNluPsbGnQ1Alc7lCkeUAwW%2BNLETpwlxVl6NgZz%2FOhC0kC9SmE8bemR48%2B1J%2BU0U7Kq0PoVV1858htqFoGfg220R46wglmglJdJi%2BlPunuFS9zezkyAYn9%2FhnxeH9VT9uwGdeddGNvwtu5XSxHNoEswLNjYRT9VzwMIZvUpsQCmZFC7Gv81SPRLaTGmNfP31iYADM0mKDRDZfTYfaucbeSitsLaVCxxM%2BCRdWp1mf7eE3YFVYldyGS0azD8qrGgNIQN%2FRQ8YWDTUkyfoc1vKyeWmW%2FveDdFV6%2FCh1y0K5jaP%2BqVBPdrYUzdC5aTzN0SwkzhiB1nNV%2Fgkm%2BpZuhG9CKytZpXa1or5ecUvo60nM87BBUYpHv21B%2F2gqooDMN5Z2dk7%2FNaa7L3xmDdqLhQLggIL3Afnr318Ebfen6xpPN2zj7OZ6uKHO4qLbs60SZ7z9wARpHmWDIN%2FAPfZWXLggscDti1OLzzann3TrSNS%2BWkaFGxCzgx8c9CdS00svHOPwsm33jKIepvT3M0urmNIzFPaObTlAHEGD%2FshncV46ewkEwpMChwwY6pgHox%2BFm8cGdS2g%2BtljSglTU0n9W97%2By57yey1vvMkRTTZgUIuZAJ4eY7ufzNvWsmucqR2etepQo1xUmJGcDAr4tRb%2F4Hj4Pao6OWN5hrZxT%2FPAy1Fge9XU8o6WuwQqngoD8M7iO4CoJFaRQ19LNkRwd8mRSeNCIDBjkoy9GvLMzMTfqdjI%2F%2BWsrR2y37JKxMLlHrzurHUA2XMYMOZTW4c%2B42Y8Xq%2Br8&X-Amz-Signature=450177d0e2cd39f983a2f6ef038c84f6d55bd02bddcdcb8d1af70599ce440191&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFRZU23R%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIA50UpaIS7E7Z9Z4dC4ADETtCm0c40fYnEUUSeoMPVFsAiAfY2C6FI7sATW%2B34JjBSy%2BjHDMjTegSxXrLA%2BJ5TjPByr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMeIDonowUsx7y3LAQKtwDM7JKoJI5cZqVkQeRUNsLsao85cmBVgI6UUD2dLoC2toGQha3gKStkxSaxgjv0sMNwU80mVxTaWW%2ByQqNluPsbGnQ1Alc7lCkeUAwW%2BNLETpwlxVl6NgZz%2FOhC0kC9SmE8bemR48%2B1J%2BU0U7Kq0PoVV1858htqFoGfg220R46wglmglJdJi%2BlPunuFS9zezkyAYn9%2FhnxeH9VT9uwGdeddGNvwtu5XSxHNoEswLNjYRT9VzwMIZvUpsQCmZFC7Gv81SPRLaTGmNfP31iYADM0mKDRDZfTYfaucbeSitsLaVCxxM%2BCRdWp1mf7eE3YFVYldyGS0azD8qrGgNIQN%2FRQ8YWDTUkyfoc1vKyeWmW%2FveDdFV6%2FCh1y0K5jaP%2BqVBPdrYUzdC5aTzN0SwkzhiB1nNV%2Fgkm%2BpZuhG9CKytZpXa1or5ecUvo60nM87BBUYpHv21B%2F2gqooDMN5Z2dk7%2FNaa7L3xmDdqLhQLggIL3Afnr318Ebfen6xpPN2zj7OZ6uKHO4qLbs60SZ7z9wARpHmWDIN%2FAPfZWXLggscDti1OLzzann3TrSNS%2BWkaFGxCzgx8c9CdS00svHOPwsm33jKIepvT3M0urmNIzFPaObTlAHEGD%2FshncV46ewkEwpMChwwY6pgHox%2BFm8cGdS2g%2BtljSglTU0n9W97%2By57yey1vvMkRTTZgUIuZAJ4eY7ufzNvWsmucqR2etepQo1xUmJGcDAr4tRb%2F4Hj4Pao6OWN5hrZxT%2FPAy1Fge9XU8o6WuwQqngoD8M7iO4CoJFaRQ19LNkRwd8mRSeNCIDBjkoy9GvLMzMTfqdjI%2F%2BWsrR2y37JKxMLlHrzurHUA2XMYMOZTW4c%2B42Y8Xq%2Br8&X-Amz-Signature=98f6f2add40af36727908e854c4fc5f5b755a8419bafa4261a7fd39374318d22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
