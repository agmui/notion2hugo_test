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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ZF3DAL%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCSR6gW9aI3M1aSyNNKaFraFQrGyyZHI1EYbE80uFD3AiEA6o82KQituJnyAERy0ZP7fZwN3D6DomLkEY99UH5i60gqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPHrvYot%2FcDOGuIYOCrcA8ZY4qkoFnQL7tZ4kqYg3Wq%2FvHLvqxGjHE6pg%2FtrXakBxce9ZpWbWg%2BpUGJRV%2FuMrLtgxlioCOnee9K%2F8j7%2Fb8Kc2Ja7Lf8d%2FaIS1A8ko82XG7ZEofUlWyeybrcisZMzBIKk1gT0Ti9648qssmKwDRO2yKXqeX%2BuwOYW6BKPdUxMLFMsiHF6zivjRb%2FBmttPHpo2zYKTiZEx34byUTlwU9CD1fWtlTUnt5nrDLmp8y%2FzFG9tISea22nSR4BH0bopl%2B0ost8fZdwLQKgqNigOUK6Qb7Vi31uhwq0Fxyn%2B4JdZrMSDim8PDnRsMBRYRe2lHogK3i1TaeEpoK5V2wNm%2B0tJNIS2gPd3IV22hfxprpLlBPHcIaLct3er5%2BOQH4h41RUuayTSq0HdMPHLsP%2BmI986RFTNBrdSb1c1dp2LpqsrlBvdOes3vDHdyhdKCNcF3ii4Y7eofTkdObe%2FuIUL%2FbwdB1YtoGn6HKRW6bPFjz6ivPJ77B1TiP9Q3ICd6VSYzZpGh7ZrVwk8kchjYakS7z4huJO3L1ATDdPtXRL5eIH1GPMP4E5EZE8lataiAe63jJRIyK6oRgwfgSvyE7e4wMuM28KuD6fj1RePG5GPNnMIn0LwV9v43viq1sZZMODDkMMGOqUBKhn3JNp4SR%2BEHjjsuHr9%2FHTpsHNQ8320NEhcIpd4oaOdsdjiXA0s5h4CfLsrE6I5oeMSlYO5fc36daYOSitGipwPdUNPrdhxZbmqrmFn1H65g37Pv7%2F8HSHiCXA1MkQAk%2BIZOhg6fpA3Iia2dHlpdmmDhblCR50wYr8fTzjLIs%2FpflT2hDB7hrxp4XGDSTqZimBfirDOjTrUId%2FoO0cqvzXjgidI&X-Amz-Signature=cc438a7713d384514126f5babff30ef9b487240b91fdee033ff2873c7472252c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ZF3DAL%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCSR6gW9aI3M1aSyNNKaFraFQrGyyZHI1EYbE80uFD3AiEA6o82KQituJnyAERy0ZP7fZwN3D6DomLkEY99UH5i60gqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPHrvYot%2FcDOGuIYOCrcA8ZY4qkoFnQL7tZ4kqYg3Wq%2FvHLvqxGjHE6pg%2FtrXakBxce9ZpWbWg%2BpUGJRV%2FuMrLtgxlioCOnee9K%2F8j7%2Fb8Kc2Ja7Lf8d%2FaIS1A8ko82XG7ZEofUlWyeybrcisZMzBIKk1gT0Ti9648qssmKwDRO2yKXqeX%2BuwOYW6BKPdUxMLFMsiHF6zivjRb%2FBmttPHpo2zYKTiZEx34byUTlwU9CD1fWtlTUnt5nrDLmp8y%2FzFG9tISea22nSR4BH0bopl%2B0ost8fZdwLQKgqNigOUK6Qb7Vi31uhwq0Fxyn%2B4JdZrMSDim8PDnRsMBRYRe2lHogK3i1TaeEpoK5V2wNm%2B0tJNIS2gPd3IV22hfxprpLlBPHcIaLct3er5%2BOQH4h41RUuayTSq0HdMPHLsP%2BmI986RFTNBrdSb1c1dp2LpqsrlBvdOes3vDHdyhdKCNcF3ii4Y7eofTkdObe%2FuIUL%2FbwdB1YtoGn6HKRW6bPFjz6ivPJ77B1TiP9Q3ICd6VSYzZpGh7ZrVwk8kchjYakS7z4huJO3L1ATDdPtXRL5eIH1GPMP4E5EZE8lataiAe63jJRIyK6oRgwfgSvyE7e4wMuM28KuD6fj1RePG5GPNnMIn0LwV9v43viq1sZZMODDkMMGOqUBKhn3JNp4SR%2BEHjjsuHr9%2FHTpsHNQ8320NEhcIpd4oaOdsdjiXA0s5h4CfLsrE6I5oeMSlYO5fc36daYOSitGipwPdUNPrdhxZbmqrmFn1H65g37Pv7%2F8HSHiCXA1MkQAk%2BIZOhg6fpA3Iia2dHlpdmmDhblCR50wYr8fTzjLIs%2FpflT2hDB7hrxp4XGDSTqZimBfirDOjTrUId%2FoO0cqvzXjgidI&X-Amz-Signature=b6a0aaf324cb9c62f01e7075491a29a2824c58328eb0d240f4cd11b6df0043de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ZF3DAL%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCSR6gW9aI3M1aSyNNKaFraFQrGyyZHI1EYbE80uFD3AiEA6o82KQituJnyAERy0ZP7fZwN3D6DomLkEY99UH5i60gqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPHrvYot%2FcDOGuIYOCrcA8ZY4qkoFnQL7tZ4kqYg3Wq%2FvHLvqxGjHE6pg%2FtrXakBxce9ZpWbWg%2BpUGJRV%2FuMrLtgxlioCOnee9K%2F8j7%2Fb8Kc2Ja7Lf8d%2FaIS1A8ko82XG7ZEofUlWyeybrcisZMzBIKk1gT0Ti9648qssmKwDRO2yKXqeX%2BuwOYW6BKPdUxMLFMsiHF6zivjRb%2FBmttPHpo2zYKTiZEx34byUTlwU9CD1fWtlTUnt5nrDLmp8y%2FzFG9tISea22nSR4BH0bopl%2B0ost8fZdwLQKgqNigOUK6Qb7Vi31uhwq0Fxyn%2B4JdZrMSDim8PDnRsMBRYRe2lHogK3i1TaeEpoK5V2wNm%2B0tJNIS2gPd3IV22hfxprpLlBPHcIaLct3er5%2BOQH4h41RUuayTSq0HdMPHLsP%2BmI986RFTNBrdSb1c1dp2LpqsrlBvdOes3vDHdyhdKCNcF3ii4Y7eofTkdObe%2FuIUL%2FbwdB1YtoGn6HKRW6bPFjz6ivPJ77B1TiP9Q3ICd6VSYzZpGh7ZrVwk8kchjYakS7z4huJO3L1ATDdPtXRL5eIH1GPMP4E5EZE8lataiAe63jJRIyK6oRgwfgSvyE7e4wMuM28KuD6fj1RePG5GPNnMIn0LwV9v43viq1sZZMODDkMMGOqUBKhn3JNp4SR%2BEHjjsuHr9%2FHTpsHNQ8320NEhcIpd4oaOdsdjiXA0s5h4CfLsrE6I5oeMSlYO5fc36daYOSitGipwPdUNPrdhxZbmqrmFn1H65g37Pv7%2F8HSHiCXA1MkQAk%2BIZOhg6fpA3Iia2dHlpdmmDhblCR50wYr8fTzjLIs%2FpflT2hDB7hrxp4XGDSTqZimBfirDOjTrUId%2FoO0cqvzXjgidI&X-Amz-Signature=455a3c952a7739b7fbe635bdc03a001794d3753122921640a7c13b169d2354a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
