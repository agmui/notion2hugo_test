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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKTGL4EU%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD7sH6iVk15SSIIweWcckXkRPxSK0ggbVAoxtYXbpQnQgIgZ29CQHnJGQtCt8CqCOiP2l1AjKFjckWB%2BFMmeZlMcoIq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNkAmIKJBaTNKgmGRyrcA8VCcwIirVUrmw%2B66VDOVLxTLDqnj2GpnabMWva2jSP8o0L%2FTqvTF%2FrwXmsBRx2h1ai6PYFQH6%2BRQ1S5KJVVMHsO1bjvD9XN93p0XOXUk%2F2myE6%2B9fUOc1CkqrCXQebjnBZb%2BdFM9MUDd4zO15eV1ynFM5T6qkxN0%2BC%2FM7oFkrjAyzgERUP9HAOW4NP83OVMOpjg7M%2B3Y1pryXgmGA2JIK6E5RTkVvARzsqk1FGD773oUN3kJBo9Rdm4Ur6tplFmwwLs1UDZ3oNGwUiffvmqOdfGyXkKihcVQZUvfeKCSD0YY7Dfl17IF0Lu9a%2Fue%2Be%2FT%2F80O2Cp8kTwe%2BQ9%2FV%2FR7Lo8OEpnHD65%2BKPTMs6cvTVg%2F%2FLGkhOhXTIyiSVXIDfs1Bh7kebaR4r9UvcsRIwbhXSOApEFqU5FCAd4l9qiVRVH3%2BJDAVD1XK%2BLUC4EmEIP1AvDkqz63RIJAyEW9mt8Qh3eEHu5DA%2FwPpy0ashAZeX60BxUptn9h3vfwAhMiMBDB2tbF5QTp%2F1BnzniEFl1UozjbgLRpuRnpsrfYPEDY9Y6OrL9x3cW85vdGg1Hfb3UWerf2bvVoflUUeFQ9MYqygSo0Cm7jMtOMRLyz%2B7eJpAlG15%2BJDTtA3jp%2BckPMLuMhsIGOqUBBSxOZdViEVNZB0tAKLjl5zDVzvofuJWWGTTEb0BMHdJy%2F91N6kpL5YjpUohjLfHf9SJzKy5PhjOPlfa%2BTbpZjVBVx1ueqPQMIcqHCfeipnzr11Mq%2BFc2cjUSB51UAz7vx3VhUOlTNqhnTULlFvagcbU4njyv5AavytNikXJz5A8pOrkI5TiNlP%2Fo0jEsDef0k%2FMF4qIvy8%2FdJKSCQfgYdwS2r%2Fv0&X-Amz-Signature=d500d150832fd44fcf2c1740d3b3332bfa010eb70fc6cfc99f8d42e24af31e27&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKTGL4EU%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD7sH6iVk15SSIIweWcckXkRPxSK0ggbVAoxtYXbpQnQgIgZ29CQHnJGQtCt8CqCOiP2l1AjKFjckWB%2BFMmeZlMcoIq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNkAmIKJBaTNKgmGRyrcA8VCcwIirVUrmw%2B66VDOVLxTLDqnj2GpnabMWva2jSP8o0L%2FTqvTF%2FrwXmsBRx2h1ai6PYFQH6%2BRQ1S5KJVVMHsO1bjvD9XN93p0XOXUk%2F2myE6%2B9fUOc1CkqrCXQebjnBZb%2BdFM9MUDd4zO15eV1ynFM5T6qkxN0%2BC%2FM7oFkrjAyzgERUP9HAOW4NP83OVMOpjg7M%2B3Y1pryXgmGA2JIK6E5RTkVvARzsqk1FGD773oUN3kJBo9Rdm4Ur6tplFmwwLs1UDZ3oNGwUiffvmqOdfGyXkKihcVQZUvfeKCSD0YY7Dfl17IF0Lu9a%2Fue%2Be%2FT%2F80O2Cp8kTwe%2BQ9%2FV%2FR7Lo8OEpnHD65%2BKPTMs6cvTVg%2F%2FLGkhOhXTIyiSVXIDfs1Bh7kebaR4r9UvcsRIwbhXSOApEFqU5FCAd4l9qiVRVH3%2BJDAVD1XK%2BLUC4EmEIP1AvDkqz63RIJAyEW9mt8Qh3eEHu5DA%2FwPpy0ashAZeX60BxUptn9h3vfwAhMiMBDB2tbF5QTp%2F1BnzniEFl1UozjbgLRpuRnpsrfYPEDY9Y6OrL9x3cW85vdGg1Hfb3UWerf2bvVoflUUeFQ9MYqygSo0Cm7jMtOMRLyz%2B7eJpAlG15%2BJDTtA3jp%2BckPMLuMhsIGOqUBBSxOZdViEVNZB0tAKLjl5zDVzvofuJWWGTTEb0BMHdJy%2F91N6kpL5YjpUohjLfHf9SJzKy5PhjOPlfa%2BTbpZjVBVx1ueqPQMIcqHCfeipnzr11Mq%2BFc2cjUSB51UAz7vx3VhUOlTNqhnTULlFvagcbU4njyv5AavytNikXJz5A8pOrkI5TiNlP%2Fo0jEsDef0k%2FMF4qIvy8%2FdJKSCQfgYdwS2r%2Fv0&X-Amz-Signature=0c85cca562679a5c2b85d0bab142562696edd64f61e907dca6e36338ac8f3a9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKTGL4EU%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD7sH6iVk15SSIIweWcckXkRPxSK0ggbVAoxtYXbpQnQgIgZ29CQHnJGQtCt8CqCOiP2l1AjKFjckWB%2BFMmeZlMcoIq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNkAmIKJBaTNKgmGRyrcA8VCcwIirVUrmw%2B66VDOVLxTLDqnj2GpnabMWva2jSP8o0L%2FTqvTF%2FrwXmsBRx2h1ai6PYFQH6%2BRQ1S5KJVVMHsO1bjvD9XN93p0XOXUk%2F2myE6%2B9fUOc1CkqrCXQebjnBZb%2BdFM9MUDd4zO15eV1ynFM5T6qkxN0%2BC%2FM7oFkrjAyzgERUP9HAOW4NP83OVMOpjg7M%2B3Y1pryXgmGA2JIK6E5RTkVvARzsqk1FGD773oUN3kJBo9Rdm4Ur6tplFmwwLs1UDZ3oNGwUiffvmqOdfGyXkKihcVQZUvfeKCSD0YY7Dfl17IF0Lu9a%2Fue%2Be%2FT%2F80O2Cp8kTwe%2BQ9%2FV%2FR7Lo8OEpnHD65%2BKPTMs6cvTVg%2F%2FLGkhOhXTIyiSVXIDfs1Bh7kebaR4r9UvcsRIwbhXSOApEFqU5FCAd4l9qiVRVH3%2BJDAVD1XK%2BLUC4EmEIP1AvDkqz63RIJAyEW9mt8Qh3eEHu5DA%2FwPpy0ashAZeX60BxUptn9h3vfwAhMiMBDB2tbF5QTp%2F1BnzniEFl1UozjbgLRpuRnpsrfYPEDY9Y6OrL9x3cW85vdGg1Hfb3UWerf2bvVoflUUeFQ9MYqygSo0Cm7jMtOMRLyz%2B7eJpAlG15%2BJDTtA3jp%2BckPMLuMhsIGOqUBBSxOZdViEVNZB0tAKLjl5zDVzvofuJWWGTTEb0BMHdJy%2F91N6kpL5YjpUohjLfHf9SJzKy5PhjOPlfa%2BTbpZjVBVx1ueqPQMIcqHCfeipnzr11Mq%2BFc2cjUSB51UAz7vx3VhUOlTNqhnTULlFvagcbU4njyv5AavytNikXJz5A8pOrkI5TiNlP%2Fo0jEsDef0k%2FMF4qIvy8%2FdJKSCQfgYdwS2r%2Fv0&X-Amz-Signature=b9d5d3fe7734060fb514f2eea4668895b3888f03933c85e5c232a265c482dec9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
