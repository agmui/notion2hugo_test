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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CJC7MGB%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgMxLVSbtYp2Il7WK7LsSm2EE1e73YgIVaKTEmJZXF8QIhAOJHyPkunJJ1ytn%2FMMhd5AU2Blt8NEkz2uLHIVXNOJlBKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6NCpH5ioo0vLruF8q3APLqt11TAEByRwZFZnpuHbmvzvArJBympSN1uyttsF6HjAtsmBRByYhfHb3un%2FIQWEBqlUN9APCuj7XFY%2BZ%2F%2FPN4%2FfpsLNP%2FXsSv%2Fwu9hQ6Se7Ryg0RiswIqu1OhXYBYU7TswrZEaYnj0JUbpd%2FbA%2Fyxy4dBjKeeiAYzNpEu4eVSDHXclvpfVMYJVKey9SWuL0JPpil6D%2F779UOkryx7dR%2BpJMvMm%2FyHabRGGS%2BrTFJ315H5xrfGVgrwOjIg5eLzlSB7E3JCw2QiYMhivTcinYeksPvwN6ozwBRvbFyCAZH35tIz%2FoPi5AdWFHMjoSWbKOajuAx%2BkK%2FvychpAlbL7jO%2F5GPQ19wPeRrMqdLDr8VvOMAugV1hU42f4Qcc4jFUpfjp2gnPQ4jEnYPOcdE4qLRHI6vQoxbOhgMOCoE7SAxP7mhNtQp66Pk3AicE6cuweiAsrl7KHZquRibTMydi10olPIBS3YLroxAcx6BTsfpKV9KsbqSh4FvwnzYu%2BpFz3PZ40wHFXzQICGPIY4Kq%2Bp7ndfWx1XC9x46xrLq1lM0DJp562Mi2ceVwnYz54a3c4EqpEJj%2FIxpsukr1VzqG5zktsY%2B%2BXpwRvGsiMecp%2Bgj08sbmiDrNvfly8Y22zD4jdPCBjqkAcSe1BqdktHmyRoLe%2B%2FNtOQyWWF1uAPF8yQoFWaC7oUtVqra%2BvovxVDyKzIoH32yLBCQZnplsQhQOkvy9ua0Q%2BFbjnMerSOJcehlnaxfkw2EHYgpLruSXMxUmTwgZ29CGd8oO0D5ZveoQzlXDlisJSStFByIu%2B3zyaATSVDNzxqsAt%2Fu9taTdOIyyJW3gaxy5AZezoS%2Fj%2FfFtVbrd33nNGzpQMrw&X-Amz-Signature=46dc196720c5d42f1852edbcbe4ca9cd309a1ccfdf8492bec69a78db8443c5e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CJC7MGB%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgMxLVSbtYp2Il7WK7LsSm2EE1e73YgIVaKTEmJZXF8QIhAOJHyPkunJJ1ytn%2FMMhd5AU2Blt8NEkz2uLHIVXNOJlBKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6NCpH5ioo0vLruF8q3APLqt11TAEByRwZFZnpuHbmvzvArJBympSN1uyttsF6HjAtsmBRByYhfHb3un%2FIQWEBqlUN9APCuj7XFY%2BZ%2F%2FPN4%2FfpsLNP%2FXsSv%2Fwu9hQ6Se7Ryg0RiswIqu1OhXYBYU7TswrZEaYnj0JUbpd%2FbA%2Fyxy4dBjKeeiAYzNpEu4eVSDHXclvpfVMYJVKey9SWuL0JPpil6D%2F779UOkryx7dR%2BpJMvMm%2FyHabRGGS%2BrTFJ315H5xrfGVgrwOjIg5eLzlSB7E3JCw2QiYMhivTcinYeksPvwN6ozwBRvbFyCAZH35tIz%2FoPi5AdWFHMjoSWbKOajuAx%2BkK%2FvychpAlbL7jO%2F5GPQ19wPeRrMqdLDr8VvOMAugV1hU42f4Qcc4jFUpfjp2gnPQ4jEnYPOcdE4qLRHI6vQoxbOhgMOCoE7SAxP7mhNtQp66Pk3AicE6cuweiAsrl7KHZquRibTMydi10olPIBS3YLroxAcx6BTsfpKV9KsbqSh4FvwnzYu%2BpFz3PZ40wHFXzQICGPIY4Kq%2Bp7ndfWx1XC9x46xrLq1lM0DJp562Mi2ceVwnYz54a3c4EqpEJj%2FIxpsukr1VzqG5zktsY%2B%2BXpwRvGsiMecp%2Bgj08sbmiDrNvfly8Y22zD4jdPCBjqkAcSe1BqdktHmyRoLe%2B%2FNtOQyWWF1uAPF8yQoFWaC7oUtVqra%2BvovxVDyKzIoH32yLBCQZnplsQhQOkvy9ua0Q%2BFbjnMerSOJcehlnaxfkw2EHYgpLruSXMxUmTwgZ29CGd8oO0D5ZveoQzlXDlisJSStFByIu%2B3zyaATSVDNzxqsAt%2Fu9taTdOIyyJW3gaxy5AZezoS%2Fj%2FfFtVbrd33nNGzpQMrw&X-Amz-Signature=c21042388cf5fa36e3ac565b1cc3d4055a4b282343379bf5e0f58803365f1b21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CJC7MGB%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgMxLVSbtYp2Il7WK7LsSm2EE1e73YgIVaKTEmJZXF8QIhAOJHyPkunJJ1ytn%2FMMhd5AU2Blt8NEkz2uLHIVXNOJlBKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6NCpH5ioo0vLruF8q3APLqt11TAEByRwZFZnpuHbmvzvArJBympSN1uyttsF6HjAtsmBRByYhfHb3un%2FIQWEBqlUN9APCuj7XFY%2BZ%2F%2FPN4%2FfpsLNP%2FXsSv%2Fwu9hQ6Se7Ryg0RiswIqu1OhXYBYU7TswrZEaYnj0JUbpd%2FbA%2Fyxy4dBjKeeiAYzNpEu4eVSDHXclvpfVMYJVKey9SWuL0JPpil6D%2F779UOkryx7dR%2BpJMvMm%2FyHabRGGS%2BrTFJ315H5xrfGVgrwOjIg5eLzlSB7E3JCw2QiYMhivTcinYeksPvwN6ozwBRvbFyCAZH35tIz%2FoPi5AdWFHMjoSWbKOajuAx%2BkK%2FvychpAlbL7jO%2F5GPQ19wPeRrMqdLDr8VvOMAugV1hU42f4Qcc4jFUpfjp2gnPQ4jEnYPOcdE4qLRHI6vQoxbOhgMOCoE7SAxP7mhNtQp66Pk3AicE6cuweiAsrl7KHZquRibTMydi10olPIBS3YLroxAcx6BTsfpKV9KsbqSh4FvwnzYu%2BpFz3PZ40wHFXzQICGPIY4Kq%2Bp7ndfWx1XC9x46xrLq1lM0DJp562Mi2ceVwnYz54a3c4EqpEJj%2FIxpsukr1VzqG5zktsY%2B%2BXpwRvGsiMecp%2Bgj08sbmiDrNvfly8Y22zD4jdPCBjqkAcSe1BqdktHmyRoLe%2B%2FNtOQyWWF1uAPF8yQoFWaC7oUtVqra%2BvovxVDyKzIoH32yLBCQZnplsQhQOkvy9ua0Q%2BFbjnMerSOJcehlnaxfkw2EHYgpLruSXMxUmTwgZ29CGd8oO0D5ZveoQzlXDlisJSStFByIu%2B3zyaATSVDNzxqsAt%2Fu9taTdOIyyJW3gaxy5AZezoS%2Fj%2FfFtVbrd33nNGzpQMrw&X-Amz-Signature=29467dae1138a9f6578bed101cf0b9a9ecfe41d3af79a2d4acb62da54838e1e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
