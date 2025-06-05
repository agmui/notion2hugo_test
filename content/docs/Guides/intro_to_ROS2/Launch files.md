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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466564BUXSK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T034018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCICs1xwh18e3iBr2F48T42xQCP6vFOimTwg3Zoc3KZtAdAiADk5S%2BHFHfyOAve%2BJKqYaOxceAkJbLSCSsNVXT%2BQ6nkSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMbFbT232WYW1Lr8lnKtwDEllhvSLEcSY7EMa71KMXqBk1qhTDuBiYaZ%2BAUevuecscJRNtS9OtPMW4XJYA9KhR3mhKTVhafyyhNgVpEVeiFM5b58YEmFWnXo3J0QTOqFUcMBPkgNcL4Rxcm8NdyS9JUXweLy5DHD94tc0McJamluX8KTaZq1CT3Wnmrkn8cEdO16sUqJjWqOfPP39qccygpdJYzGu00EgcAjFGYf%2FCq4l%2F9GcRnJJR0VBygmaVNt3fiF72lfmYdHkBmaMOJ1V9dpLN3DhV4fIrGYc6286d%2FsKKqKiAd2xajjQ8rt%2FpK2t%2BTD4NQQiyA%2FaGg555j0tHA4o55mx21pCrZMbaskBVMHZ7qFu7W2P5qBPPM5d8aRGx0SfiefiBTo%2BvLyt1i9VJZAj%2FoB%2ByJ8FpH2lXNFbH%2B3momYHHcyx1b3AWhmKhFuxP7GYYLwwNa7PEbB828lGhM8%2B4a8DmEcriNtEMV1Rj5iMgIoaZJd%2F%2B2JPRvMg1yE9Dl62KK25aCSz065uPFAIW2F4pp%2BfeQEOoJEz9wTvhJ0GGHfJhg0jr5NTFhSaKAwj53E3oeI5MGIUuCmqKsiAie%2BpJtM81TjN31i%2BDV2RQFQS7ptJqo5fpET9ThP0BKx4n%2FfwqCbPAXe3Guv8wuoqEwgY6pgHY%2F6K7HQnXkEOaDl51iOdw6Ze58Fmh2Spah352cyyoPK7rK0W0LU%2F7l%2BwNKK5JpXXZZGh4Zl3587V9dnAkqI6WgDXE9DYdve1O2rAFYZdJt4CowDeYfmbdxunaWTtMLSWjzp%2FRmZbMIYV6zktVd6h1Hrew6k7eGZ8FSNDw9Rta1zGHidXuFMq9B%2FRhp1JeCRYxDsA%2BFWBe%2BCJLt2gXFx6qKjWFSFuJ&X-Amz-Signature=a917ada54d6ea41efcabd17889b2c78715732ae2b46274f5e1073a811e6ac841&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466564BUXSK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T034018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCICs1xwh18e3iBr2F48T42xQCP6vFOimTwg3Zoc3KZtAdAiADk5S%2BHFHfyOAve%2BJKqYaOxceAkJbLSCSsNVXT%2BQ6nkSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMbFbT232WYW1Lr8lnKtwDEllhvSLEcSY7EMa71KMXqBk1qhTDuBiYaZ%2BAUevuecscJRNtS9OtPMW4XJYA9KhR3mhKTVhafyyhNgVpEVeiFM5b58YEmFWnXo3J0QTOqFUcMBPkgNcL4Rxcm8NdyS9JUXweLy5DHD94tc0McJamluX8KTaZq1CT3Wnmrkn8cEdO16sUqJjWqOfPP39qccygpdJYzGu00EgcAjFGYf%2FCq4l%2F9GcRnJJR0VBygmaVNt3fiF72lfmYdHkBmaMOJ1V9dpLN3DhV4fIrGYc6286d%2FsKKqKiAd2xajjQ8rt%2FpK2t%2BTD4NQQiyA%2FaGg555j0tHA4o55mx21pCrZMbaskBVMHZ7qFu7W2P5qBPPM5d8aRGx0SfiefiBTo%2BvLyt1i9VJZAj%2FoB%2ByJ8FpH2lXNFbH%2B3momYHHcyx1b3AWhmKhFuxP7GYYLwwNa7PEbB828lGhM8%2B4a8DmEcriNtEMV1Rj5iMgIoaZJd%2F%2B2JPRvMg1yE9Dl62KK25aCSz065uPFAIW2F4pp%2BfeQEOoJEz9wTvhJ0GGHfJhg0jr5NTFhSaKAwj53E3oeI5MGIUuCmqKsiAie%2BpJtM81TjN31i%2BDV2RQFQS7ptJqo5fpET9ThP0BKx4n%2FfwqCbPAXe3Guv8wuoqEwgY6pgHY%2F6K7HQnXkEOaDl51iOdw6Ze58Fmh2Spah352cyyoPK7rK0W0LU%2F7l%2BwNKK5JpXXZZGh4Zl3587V9dnAkqI6WgDXE9DYdve1O2rAFYZdJt4CowDeYfmbdxunaWTtMLSWjzp%2FRmZbMIYV6zktVd6h1Hrew6k7eGZ8FSNDw9Rta1zGHidXuFMq9B%2FRhp1JeCRYxDsA%2BFWBe%2BCJLt2gXFx6qKjWFSFuJ&X-Amz-Signature=1cd69c89549d9801de1d5c440350f69c6286d7b3d318ab958589d8442b72a229&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466564BUXSK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T034018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCICs1xwh18e3iBr2F48T42xQCP6vFOimTwg3Zoc3KZtAdAiADk5S%2BHFHfyOAve%2BJKqYaOxceAkJbLSCSsNVXT%2BQ6nkSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMbFbT232WYW1Lr8lnKtwDEllhvSLEcSY7EMa71KMXqBk1qhTDuBiYaZ%2BAUevuecscJRNtS9OtPMW4XJYA9KhR3mhKTVhafyyhNgVpEVeiFM5b58YEmFWnXo3J0QTOqFUcMBPkgNcL4Rxcm8NdyS9JUXweLy5DHD94tc0McJamluX8KTaZq1CT3Wnmrkn8cEdO16sUqJjWqOfPP39qccygpdJYzGu00EgcAjFGYf%2FCq4l%2F9GcRnJJR0VBygmaVNt3fiF72lfmYdHkBmaMOJ1V9dpLN3DhV4fIrGYc6286d%2FsKKqKiAd2xajjQ8rt%2FpK2t%2BTD4NQQiyA%2FaGg555j0tHA4o55mx21pCrZMbaskBVMHZ7qFu7W2P5qBPPM5d8aRGx0SfiefiBTo%2BvLyt1i9VJZAj%2FoB%2ByJ8FpH2lXNFbH%2B3momYHHcyx1b3AWhmKhFuxP7GYYLwwNa7PEbB828lGhM8%2B4a8DmEcriNtEMV1Rj5iMgIoaZJd%2F%2B2JPRvMg1yE9Dl62KK25aCSz065uPFAIW2F4pp%2BfeQEOoJEz9wTvhJ0GGHfJhg0jr5NTFhSaKAwj53E3oeI5MGIUuCmqKsiAie%2BpJtM81TjN31i%2BDV2RQFQS7ptJqo5fpET9ThP0BKx4n%2FfwqCbPAXe3Guv8wuoqEwgY6pgHY%2F6K7HQnXkEOaDl51iOdw6Ze58Fmh2Spah352cyyoPK7rK0W0LU%2F7l%2BwNKK5JpXXZZGh4Zl3587V9dnAkqI6WgDXE9DYdve1O2rAFYZdJt4CowDeYfmbdxunaWTtMLSWjzp%2FRmZbMIYV6zktVd6h1Hrew6k7eGZ8FSNDw9Rta1zGHidXuFMq9B%2FRhp1JeCRYxDsA%2BFWBe%2BCJLt2gXFx6qKjWFSFuJ&X-Amz-Signature=ce963154d7297795ed6fcff4f5303d02dde0a35e29d75d477a973b3fd0e17610&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
