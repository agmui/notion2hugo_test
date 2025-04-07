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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXDBHM4%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJwRcSMdtki%2FC3VQIF1y6fbatgZibMaKXWsCL%2B8KP81AiEAq5H6S9bVSYkIphrAK6zDojBN5cnS5OZVDkKKyXnI9pkq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDNs98zOLwC3SST1gQCrcA6q3TfXfAUAKJSAnr%2B3BYHO2acb6C3Lp6q5E4dJKEGhSYT%2BCN3SiKw1wiJuNMip0scz3qAmKcEFbZmL3x3sWKxXFHhx1kzmOx17R%2B2Qir3L4BiI7afCj%2B%2FmmQKdx%2F26pIi8lYWUoJiLKfMwG1UWn4LaDi8qqaG5fF8U6DPG1jI1weTHUkRCjaevQzsMYYbKZWA4qz2EGIHcGFoPMWpTXvoI4P51OEkM%2FzkEQw%2BepqG6dyreMtRkqvFJadzdtTHC6uA1eeutbmUMwJaxmY6bmS0f6LFR6jQa6Zg2dhfSA1mV0NZogNkQa7bYmFFoUYeQjI88NQd74CSiubnnT38MzIqdcd2pLALsgN7xwrCgg3hR0BgQKM4isTqD3Vbr7B%2FIYJLnP6%2FSZa0auh1kbefffd9nVxLmBbzJsmgaBqE5sk6DRRbjjnHfA8t2HJgt6cNslRPZgFri4DfzxXm38BFFKGR2diQcpU5DGzYw%2BGNdkbf0xkgkKQGwJiI1MI1Ybxiq11NFe6Nynu9kIuvJE%2FO6gVqi2nBPxVO7sQ1TLAdMHQ8%2BMySU6OWJZnvSCCTEITFuSkRSlWsXwgG%2BRoZv%2BCR66mdqDVNu6DkAFWv14q6%2F8ZbEscWDd0gPurQogH%2F3cMMvUzr8GOqUBhfGVAtnL6CvTcFmB%2Fwmss%2FmHx8IFfeVWTKlz%2BFR65jepPWdckoKTntUuUweaDKJEq7okGUGF%2FwZ5wPljzsFAo0hf8TEm7IL%2FDloA0zBaJyDc4p6LId6mZiM1PgzQq5rw%2FQo36fyY4AdfVgFbSUwvAENcGecWE1HNdZPajTnVyWqGlm7ymTebitzpmZyVUQbyDtvGyZGZjDsJg%2FeG0f8aToCFlJIt&X-Amz-Signature=2e78769deb7dd51829fc43a033440f9a8d82b8dcc00de7663da17ce5107a3570&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXDBHM4%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJwRcSMdtki%2FC3VQIF1y6fbatgZibMaKXWsCL%2B8KP81AiEAq5H6S9bVSYkIphrAK6zDojBN5cnS5OZVDkKKyXnI9pkq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDNs98zOLwC3SST1gQCrcA6q3TfXfAUAKJSAnr%2B3BYHO2acb6C3Lp6q5E4dJKEGhSYT%2BCN3SiKw1wiJuNMip0scz3qAmKcEFbZmL3x3sWKxXFHhx1kzmOx17R%2B2Qir3L4BiI7afCj%2B%2FmmQKdx%2F26pIi8lYWUoJiLKfMwG1UWn4LaDi8qqaG5fF8U6DPG1jI1weTHUkRCjaevQzsMYYbKZWA4qz2EGIHcGFoPMWpTXvoI4P51OEkM%2FzkEQw%2BepqG6dyreMtRkqvFJadzdtTHC6uA1eeutbmUMwJaxmY6bmS0f6LFR6jQa6Zg2dhfSA1mV0NZogNkQa7bYmFFoUYeQjI88NQd74CSiubnnT38MzIqdcd2pLALsgN7xwrCgg3hR0BgQKM4isTqD3Vbr7B%2FIYJLnP6%2FSZa0auh1kbefffd9nVxLmBbzJsmgaBqE5sk6DRRbjjnHfA8t2HJgt6cNslRPZgFri4DfzxXm38BFFKGR2diQcpU5DGzYw%2BGNdkbf0xkgkKQGwJiI1MI1Ybxiq11NFe6Nynu9kIuvJE%2FO6gVqi2nBPxVO7sQ1TLAdMHQ8%2BMySU6OWJZnvSCCTEITFuSkRSlWsXwgG%2BRoZv%2BCR66mdqDVNu6DkAFWv14q6%2F8ZbEscWDd0gPurQogH%2F3cMMvUzr8GOqUBhfGVAtnL6CvTcFmB%2Fwmss%2FmHx8IFfeVWTKlz%2BFR65jepPWdckoKTntUuUweaDKJEq7okGUGF%2FwZ5wPljzsFAo0hf8TEm7IL%2FDloA0zBaJyDc4p6LId6mZiM1PgzQq5rw%2FQo36fyY4AdfVgFbSUwvAENcGecWE1HNdZPajTnVyWqGlm7ymTebitzpmZyVUQbyDtvGyZGZjDsJg%2FeG0f8aToCFlJIt&X-Amz-Signature=8b75069ca494ea0a2673b7207e0659e3fff1b988d6390e612d4e1dcf07e713cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXDBHM4%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJwRcSMdtki%2FC3VQIF1y6fbatgZibMaKXWsCL%2B8KP81AiEAq5H6S9bVSYkIphrAK6zDojBN5cnS5OZVDkKKyXnI9pkq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDNs98zOLwC3SST1gQCrcA6q3TfXfAUAKJSAnr%2B3BYHO2acb6C3Lp6q5E4dJKEGhSYT%2BCN3SiKw1wiJuNMip0scz3qAmKcEFbZmL3x3sWKxXFHhx1kzmOx17R%2B2Qir3L4BiI7afCj%2B%2FmmQKdx%2F26pIi8lYWUoJiLKfMwG1UWn4LaDi8qqaG5fF8U6DPG1jI1weTHUkRCjaevQzsMYYbKZWA4qz2EGIHcGFoPMWpTXvoI4P51OEkM%2FzkEQw%2BepqG6dyreMtRkqvFJadzdtTHC6uA1eeutbmUMwJaxmY6bmS0f6LFR6jQa6Zg2dhfSA1mV0NZogNkQa7bYmFFoUYeQjI88NQd74CSiubnnT38MzIqdcd2pLALsgN7xwrCgg3hR0BgQKM4isTqD3Vbr7B%2FIYJLnP6%2FSZa0auh1kbefffd9nVxLmBbzJsmgaBqE5sk6DRRbjjnHfA8t2HJgt6cNslRPZgFri4DfzxXm38BFFKGR2diQcpU5DGzYw%2BGNdkbf0xkgkKQGwJiI1MI1Ybxiq11NFe6Nynu9kIuvJE%2FO6gVqi2nBPxVO7sQ1TLAdMHQ8%2BMySU6OWJZnvSCCTEITFuSkRSlWsXwgG%2BRoZv%2BCR66mdqDVNu6DkAFWv14q6%2F8ZbEscWDd0gPurQogH%2F3cMMvUzr8GOqUBhfGVAtnL6CvTcFmB%2Fwmss%2FmHx8IFfeVWTKlz%2BFR65jepPWdckoKTntUuUweaDKJEq7okGUGF%2FwZ5wPljzsFAo0hf8TEm7IL%2FDloA0zBaJyDc4p6LId6mZiM1PgzQq5rw%2FQo36fyY4AdfVgFbSUwvAENcGecWE1HNdZPajTnVyWqGlm7ymTebitzpmZyVUQbyDtvGyZGZjDsJg%2FeG0f8aToCFlJIt&X-Amz-Signature=5e242d5cb5c901f629b49eeb2fe7d44845a4da1a8f75f826bfd2d4be931f0c5c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
