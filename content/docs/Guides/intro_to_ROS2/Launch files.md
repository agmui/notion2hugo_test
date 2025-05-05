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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH2HK3TN%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIBDa7tv%2BRyMBnwbUKVYm71E%2Fin378dojRrFx4aorxTbIAiEA3coTVjG9uqx2NysFkZBHO%2FIpgGINH4hoRCM1Dsnyu9Mq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDEfh9ErSpkstehLRlCrcA%2BXFAD3SjK4vE98PJUfvUgdITBdpfNiH6pLuc%2F2mUm5kaOME%2FuSHn9oOfeezkemTyR9qoz7YPlnzxUjKsvOYtcNPFNZJVUAB24eIa9eie0aVbrqhy8eCmQN7UtitSt%2BV5sAuNZ7mWLSJNbpvzQ92n1xv4a763EYR%2F4gZRd0tmVBBC2sG7%2BZs3%2BKH2X%2BzPANbxExs4z1ddRbHSVgxnkqLD2k7wMm3HnxtXZBHO23ckG5v8a1uipmqf8BldkCM5VBKMbEf6cgkqzoU7Eqw46XJgatknmFtAGujeH%2FltnLvohQqHGLWf55JHamgjzdHljyVrRzVWelFwc2EZg1WZffvL45b%2Fb3Il9hJjBORG45ieV115iTBpi%2FeKnbQalTkM%2BlbxK7Md%2BoMfqXRDlqqvn52mFY%2ByFmVUmyDSIRXkx48AwnX%2FYVkn5O3anuhN%2FuXuULUjT%2BxMIWT9AE5RxddO8nT4L6Xy%2FLzUS40zB5hab%2BBi3gzmd38RgpDRdZPSM%2BL3j7s7UB6hU0gsrcFqDIz%2B8HhQ0TY5orXbSOygzSGVQYG7cwVXgMcRRqtYzQruOoUdDflctShRfzp5OdrOjO9sDHOWJNQR91jW%2FytFru1DUZkpZXVI5Gg1ORVYs9Y8i60MPma4cAGOqUB7RroSaXcozCKV%2BcbLpn79v5P9ewdMd3JaFYHgZF3lMzuNUVqxpjZ6Mzh3FEltuvdrNzakFGRjKJHsZgWMUlHp6JcRg4iqlh1r0B1bC5k2GsoaPJmyIDFhg0l5YUhzD2wY0SOLVnssx%2FtNcndA%2F1XhTyfcOoSxuySgcDTVLkYcOmyjAowNtNElewb3mPDF1ficISSEdKuW1%2Bw6Ko8qr7PWvfyNBJF&X-Amz-Signature=1c5c6feb48249a06303d9ceea613a650191d04be8875b05287200b1c43061cef&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH2HK3TN%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIBDa7tv%2BRyMBnwbUKVYm71E%2Fin378dojRrFx4aorxTbIAiEA3coTVjG9uqx2NysFkZBHO%2FIpgGINH4hoRCM1Dsnyu9Mq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDEfh9ErSpkstehLRlCrcA%2BXFAD3SjK4vE98PJUfvUgdITBdpfNiH6pLuc%2F2mUm5kaOME%2FuSHn9oOfeezkemTyR9qoz7YPlnzxUjKsvOYtcNPFNZJVUAB24eIa9eie0aVbrqhy8eCmQN7UtitSt%2BV5sAuNZ7mWLSJNbpvzQ92n1xv4a763EYR%2F4gZRd0tmVBBC2sG7%2BZs3%2BKH2X%2BzPANbxExs4z1ddRbHSVgxnkqLD2k7wMm3HnxtXZBHO23ckG5v8a1uipmqf8BldkCM5VBKMbEf6cgkqzoU7Eqw46XJgatknmFtAGujeH%2FltnLvohQqHGLWf55JHamgjzdHljyVrRzVWelFwc2EZg1WZffvL45b%2Fb3Il9hJjBORG45ieV115iTBpi%2FeKnbQalTkM%2BlbxK7Md%2BoMfqXRDlqqvn52mFY%2ByFmVUmyDSIRXkx48AwnX%2FYVkn5O3anuhN%2FuXuULUjT%2BxMIWT9AE5RxddO8nT4L6Xy%2FLzUS40zB5hab%2BBi3gzmd38RgpDRdZPSM%2BL3j7s7UB6hU0gsrcFqDIz%2B8HhQ0TY5orXbSOygzSGVQYG7cwVXgMcRRqtYzQruOoUdDflctShRfzp5OdrOjO9sDHOWJNQR91jW%2FytFru1DUZkpZXVI5Gg1ORVYs9Y8i60MPma4cAGOqUB7RroSaXcozCKV%2BcbLpn79v5P9ewdMd3JaFYHgZF3lMzuNUVqxpjZ6Mzh3FEltuvdrNzakFGRjKJHsZgWMUlHp6JcRg4iqlh1r0B1bC5k2GsoaPJmyIDFhg0l5YUhzD2wY0SOLVnssx%2FtNcndA%2F1XhTyfcOoSxuySgcDTVLkYcOmyjAowNtNElewb3mPDF1ficISSEdKuW1%2Bw6Ko8qr7PWvfyNBJF&X-Amz-Signature=d04c1cf2c971110102140410b4548ec88f9268a61ced1bef04b077a8773e593e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH2HK3TN%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIBDa7tv%2BRyMBnwbUKVYm71E%2Fin378dojRrFx4aorxTbIAiEA3coTVjG9uqx2NysFkZBHO%2FIpgGINH4hoRCM1Dsnyu9Mq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDEfh9ErSpkstehLRlCrcA%2BXFAD3SjK4vE98PJUfvUgdITBdpfNiH6pLuc%2F2mUm5kaOME%2FuSHn9oOfeezkemTyR9qoz7YPlnzxUjKsvOYtcNPFNZJVUAB24eIa9eie0aVbrqhy8eCmQN7UtitSt%2BV5sAuNZ7mWLSJNbpvzQ92n1xv4a763EYR%2F4gZRd0tmVBBC2sG7%2BZs3%2BKH2X%2BzPANbxExs4z1ddRbHSVgxnkqLD2k7wMm3HnxtXZBHO23ckG5v8a1uipmqf8BldkCM5VBKMbEf6cgkqzoU7Eqw46XJgatknmFtAGujeH%2FltnLvohQqHGLWf55JHamgjzdHljyVrRzVWelFwc2EZg1WZffvL45b%2Fb3Il9hJjBORG45ieV115iTBpi%2FeKnbQalTkM%2BlbxK7Md%2BoMfqXRDlqqvn52mFY%2ByFmVUmyDSIRXkx48AwnX%2FYVkn5O3anuhN%2FuXuULUjT%2BxMIWT9AE5RxddO8nT4L6Xy%2FLzUS40zB5hab%2BBi3gzmd38RgpDRdZPSM%2BL3j7s7UB6hU0gsrcFqDIz%2B8HhQ0TY5orXbSOygzSGVQYG7cwVXgMcRRqtYzQruOoUdDflctShRfzp5OdrOjO9sDHOWJNQR91jW%2FytFru1DUZkpZXVI5Gg1ORVYs9Y8i60MPma4cAGOqUB7RroSaXcozCKV%2BcbLpn79v5P9ewdMd3JaFYHgZF3lMzuNUVqxpjZ6Mzh3FEltuvdrNzakFGRjKJHsZgWMUlHp6JcRg4iqlh1r0B1bC5k2GsoaPJmyIDFhg0l5YUhzD2wY0SOLVnssx%2FtNcndA%2F1XhTyfcOoSxuySgcDTVLkYcOmyjAowNtNElewb3mPDF1ficISSEdKuW1%2Bw6Ko8qr7PWvfyNBJF&X-Amz-Signature=ee0a85be1e8f0540a3fffadf6f9e45ffaaf31bde3bd1da095aaf4639cb716f56&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
