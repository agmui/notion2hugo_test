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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK5ENRMZ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T141128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC0QEf2mRsIMd6%2BMYhVtdJYhwAuTbT6SLN8kWrizEZtBAIgUfJM9nNl%2F3v3u2vEcMZKIX%2BPH7frgi6Hiee4l9WXAxsq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDGnnitkL4bEKMZcE8CrcAxHb9KFGPuLzEK7d5H9F9Qd3sMS6uLOxAnVdySBOTnYj6i8qt%2FdLzyS3xtG2rowsZd6zvIMqT%2FHbuLWKLanjq73w9kHCxJSAD7aqPrrq6dDNz83USMuz3AgxMDP1tZaIKvsNRue7DKRwFBWiKYFjEunSmxS7E7LEpW2kae1xWR5o1UEhBk2LXCR5iWmsrzHi6mrAh6VnGc3RAzrXVwtm5rD4jgmfXFbyW5Xke5H%2By5dExNnFFsBIAob%2FtD51MuvNgtHI1rbHQVjT%2FsUagynA1ulebFgS9hWFNwnMucDIAzC1uDALIO%2FexHG5zDbBZoQ8DSB1XS1n9zYunw8hYhPpVD0XPRo%2FZdJDb02qiCJh6fmD6sU4AG0W3KdNF9CbStUGwLiqNnxLe6hXvwcVrUnu1MssodIyib4PJ7LdxiCHZ9pqik0RgEbRBRtP6fpjb9W2jcOq2%2FEkY15Z8fWDag47hLTvdx0ZuQQDqclgKb%2F1lkbS%2BFgmOxzToBLJ21gFh9fjytMZHIaePg7omg6tLaNK%2Be%2B03bL8tPU688S303AYlke26bn7c2%2Fy0IgLQ%2BKC8H%2BUP35IDS5JcRjewmM28Z8lPkOGHque68f%2BDl8NmhmFsg9EPqi4llitpVan4gQPMNCu2cMGOqUBXT7M2zF0gwQBXJ53V2legPox0REfc%2FZ5IMB9ve%2BXv8QNv1JfTXJzsUG8osGQFaDR5uYwE8ymlRCyh2M7j8N5MvslolK4oauiMODIqDInhMOa%2BrfZnnJUotql3O8taEzYPdEL8TDz0C6aN1yIvwUy6IiTUSdXjMH7hJ2nnmOfgsk34XeDB2EmlHXL7OcSKC1VBSl95kQjASrheZtm4%2B0pnrebYAqD&X-Amz-Signature=d226a0071bb5f5465785e87b0fb1ddd4831c9f9ea5384ffde5d120462eafb280&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK5ENRMZ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T141128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC0QEf2mRsIMd6%2BMYhVtdJYhwAuTbT6SLN8kWrizEZtBAIgUfJM9nNl%2F3v3u2vEcMZKIX%2BPH7frgi6Hiee4l9WXAxsq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDGnnitkL4bEKMZcE8CrcAxHb9KFGPuLzEK7d5H9F9Qd3sMS6uLOxAnVdySBOTnYj6i8qt%2FdLzyS3xtG2rowsZd6zvIMqT%2FHbuLWKLanjq73w9kHCxJSAD7aqPrrq6dDNz83USMuz3AgxMDP1tZaIKvsNRue7DKRwFBWiKYFjEunSmxS7E7LEpW2kae1xWR5o1UEhBk2LXCR5iWmsrzHi6mrAh6VnGc3RAzrXVwtm5rD4jgmfXFbyW5Xke5H%2By5dExNnFFsBIAob%2FtD51MuvNgtHI1rbHQVjT%2FsUagynA1ulebFgS9hWFNwnMucDIAzC1uDALIO%2FexHG5zDbBZoQ8DSB1XS1n9zYunw8hYhPpVD0XPRo%2FZdJDb02qiCJh6fmD6sU4AG0W3KdNF9CbStUGwLiqNnxLe6hXvwcVrUnu1MssodIyib4PJ7LdxiCHZ9pqik0RgEbRBRtP6fpjb9W2jcOq2%2FEkY15Z8fWDag47hLTvdx0ZuQQDqclgKb%2F1lkbS%2BFgmOxzToBLJ21gFh9fjytMZHIaePg7omg6tLaNK%2Be%2B03bL8tPU688S303AYlke26bn7c2%2Fy0IgLQ%2BKC8H%2BUP35IDS5JcRjewmM28Z8lPkOGHque68f%2BDl8NmhmFsg9EPqi4llitpVan4gQPMNCu2cMGOqUBXT7M2zF0gwQBXJ53V2legPox0REfc%2FZ5IMB9ve%2BXv8QNv1JfTXJzsUG8osGQFaDR5uYwE8ymlRCyh2M7j8N5MvslolK4oauiMODIqDInhMOa%2BrfZnnJUotql3O8taEzYPdEL8TDz0C6aN1yIvwUy6IiTUSdXjMH7hJ2nnmOfgsk34XeDB2EmlHXL7OcSKC1VBSl95kQjASrheZtm4%2B0pnrebYAqD&X-Amz-Signature=33f93ad40a43388765d2dda1b7ee60b4c1ed714a4fd37693b6041bd5f2b8508f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK5ENRMZ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T141128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC0QEf2mRsIMd6%2BMYhVtdJYhwAuTbT6SLN8kWrizEZtBAIgUfJM9nNl%2F3v3u2vEcMZKIX%2BPH7frgi6Hiee4l9WXAxsq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDGnnitkL4bEKMZcE8CrcAxHb9KFGPuLzEK7d5H9F9Qd3sMS6uLOxAnVdySBOTnYj6i8qt%2FdLzyS3xtG2rowsZd6zvIMqT%2FHbuLWKLanjq73w9kHCxJSAD7aqPrrq6dDNz83USMuz3AgxMDP1tZaIKvsNRue7DKRwFBWiKYFjEunSmxS7E7LEpW2kae1xWR5o1UEhBk2LXCR5iWmsrzHi6mrAh6VnGc3RAzrXVwtm5rD4jgmfXFbyW5Xke5H%2By5dExNnFFsBIAob%2FtD51MuvNgtHI1rbHQVjT%2FsUagynA1ulebFgS9hWFNwnMucDIAzC1uDALIO%2FexHG5zDbBZoQ8DSB1XS1n9zYunw8hYhPpVD0XPRo%2FZdJDb02qiCJh6fmD6sU4AG0W3KdNF9CbStUGwLiqNnxLe6hXvwcVrUnu1MssodIyib4PJ7LdxiCHZ9pqik0RgEbRBRtP6fpjb9W2jcOq2%2FEkY15Z8fWDag47hLTvdx0ZuQQDqclgKb%2F1lkbS%2BFgmOxzToBLJ21gFh9fjytMZHIaePg7omg6tLaNK%2Be%2B03bL8tPU688S303AYlke26bn7c2%2Fy0IgLQ%2BKC8H%2BUP35IDS5JcRjewmM28Z8lPkOGHque68f%2BDl8NmhmFsg9EPqi4llitpVan4gQPMNCu2cMGOqUBXT7M2zF0gwQBXJ53V2legPox0REfc%2FZ5IMB9ve%2BXv8QNv1JfTXJzsUG8osGQFaDR5uYwE8ymlRCyh2M7j8N5MvslolK4oauiMODIqDInhMOa%2BrfZnnJUotql3O8taEzYPdEL8TDz0C6aN1yIvwUy6IiTUSdXjMH7hJ2nnmOfgsk34XeDB2EmlHXL7OcSKC1VBSl95kQjASrheZtm4%2B0pnrebYAqD&X-Amz-Signature=75115d8a6b4d1a3a2ca155ef69568f86e8f14c29e946878a0e7961e9023eaa90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
