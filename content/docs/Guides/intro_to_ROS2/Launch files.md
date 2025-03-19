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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624OZHKIR%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQC6nfO6PxOSD0h5%2BNiOxfwav5syz2OLP26qzqbUcxJDNgIgBxnmCie4XstXTKv0IkAuWtsb1GtjDWglV%2FMY9dkt92oq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDD1Notyo8BYandmNXSrcA9up12HwBRyerI3F%2FQtYKUeG%2B1YBxkFo98swUPljmFIpeEl2RyDoCuVcpEcKBrwvXgvYEbxJfRStZ%2FEjzANrSzZi0w3ySvgmkjEYvudNEjCtc5m7lDBhQfqqtzfYt2wEpRrLK7nvBmcC7BnBwoyxUztx8%2F8qWq6pvdGAf%2BMcZgm72ko2saL%2BT%2FXcDYoTazWKj3rjn97eOdJS0CmZ2chONags4JWan%2F7YT6XoPMRwab5U%2BSmvd%2FS%2BCO70JDsT6LFDlGSgZGOlGRUuNAZSURG9c6pk08tEgibmzN76bM1c4jGZDfR6dL1BfW1aOrO2cQ3lth%2B5KaoHDBhyG3UJ0P0BzotVh1gI9m0QyVI3FawoGhQy1c7nFgFc%2BK4Gr7R8uC7UaOBsbnFf2A%2Bf75Fnb8YIsM1zKxsuqG7CIXHnfhrucp7Bupwl16cgQXULYvtpkEaYSO7keYxsf87YtLgt%2Bq8Y0q5N7XIfkjjzrwl8jjjWW6IIQQMnRQCTc%2FUcV8yFq9HbnrRBtyAmnhwxvL0DGS9eJD%2FiJzPUWsY76H8IKDty%2B3OxuA8EeUWgHFrfh4rjzy%2BAVMBmPl%2BFLdhK4RlhHw6gewHElGMAomOiaOloIFoi2kycb22qKkeJCKY1W4xDMNWC6r4GOqUBQdxRhgnM8lVdnINKAL8rg3uyNpX%2FsKDPXjTKtMQOeqe%2BhW5qZV8av30kfSZIYQSkOVkJ5MQ9T4jQJLjoSILh%2B2W63AIoLjNK6KxU3niWaBn%2B0gWkp2gxe3Bdtx5V6kAw1PcJOENJBucQ15eK79KCnNS0Sty2P5SDIBOaheaQ6Jj1TE2thqlFuJcokH04zj21l4pzBTiCAHoscI2WkDvtAG0%2FYO4A&X-Amz-Signature=f372463cb21558d30640059858705c4650c27bdf8b9766bed1c21c3cd94ce256&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624OZHKIR%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQC6nfO6PxOSD0h5%2BNiOxfwav5syz2OLP26qzqbUcxJDNgIgBxnmCie4XstXTKv0IkAuWtsb1GtjDWglV%2FMY9dkt92oq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDD1Notyo8BYandmNXSrcA9up12HwBRyerI3F%2FQtYKUeG%2B1YBxkFo98swUPljmFIpeEl2RyDoCuVcpEcKBrwvXgvYEbxJfRStZ%2FEjzANrSzZi0w3ySvgmkjEYvudNEjCtc5m7lDBhQfqqtzfYt2wEpRrLK7nvBmcC7BnBwoyxUztx8%2F8qWq6pvdGAf%2BMcZgm72ko2saL%2BT%2FXcDYoTazWKj3rjn97eOdJS0CmZ2chONags4JWan%2F7YT6XoPMRwab5U%2BSmvd%2FS%2BCO70JDsT6LFDlGSgZGOlGRUuNAZSURG9c6pk08tEgibmzN76bM1c4jGZDfR6dL1BfW1aOrO2cQ3lth%2B5KaoHDBhyG3UJ0P0BzotVh1gI9m0QyVI3FawoGhQy1c7nFgFc%2BK4Gr7R8uC7UaOBsbnFf2A%2Bf75Fnb8YIsM1zKxsuqG7CIXHnfhrucp7Bupwl16cgQXULYvtpkEaYSO7keYxsf87YtLgt%2Bq8Y0q5N7XIfkjjzrwl8jjjWW6IIQQMnRQCTc%2FUcV8yFq9HbnrRBtyAmnhwxvL0DGS9eJD%2FiJzPUWsY76H8IKDty%2B3OxuA8EeUWgHFrfh4rjzy%2BAVMBmPl%2BFLdhK4RlhHw6gewHElGMAomOiaOloIFoi2kycb22qKkeJCKY1W4xDMNWC6r4GOqUBQdxRhgnM8lVdnINKAL8rg3uyNpX%2FsKDPXjTKtMQOeqe%2BhW5qZV8av30kfSZIYQSkOVkJ5MQ9T4jQJLjoSILh%2B2W63AIoLjNK6KxU3niWaBn%2B0gWkp2gxe3Bdtx5V6kAw1PcJOENJBucQ15eK79KCnNS0Sty2P5SDIBOaheaQ6Jj1TE2thqlFuJcokH04zj21l4pzBTiCAHoscI2WkDvtAG0%2FYO4A&X-Amz-Signature=7528c88186aadf2ac36f8e4c0560582803cf32840ced0aef03bcc43309da1652&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624OZHKIR%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQC6nfO6PxOSD0h5%2BNiOxfwav5syz2OLP26qzqbUcxJDNgIgBxnmCie4XstXTKv0IkAuWtsb1GtjDWglV%2FMY9dkt92oq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDD1Notyo8BYandmNXSrcA9up12HwBRyerI3F%2FQtYKUeG%2B1YBxkFo98swUPljmFIpeEl2RyDoCuVcpEcKBrwvXgvYEbxJfRStZ%2FEjzANrSzZi0w3ySvgmkjEYvudNEjCtc5m7lDBhQfqqtzfYt2wEpRrLK7nvBmcC7BnBwoyxUztx8%2F8qWq6pvdGAf%2BMcZgm72ko2saL%2BT%2FXcDYoTazWKj3rjn97eOdJS0CmZ2chONags4JWan%2F7YT6XoPMRwab5U%2BSmvd%2FS%2BCO70JDsT6LFDlGSgZGOlGRUuNAZSURG9c6pk08tEgibmzN76bM1c4jGZDfR6dL1BfW1aOrO2cQ3lth%2B5KaoHDBhyG3UJ0P0BzotVh1gI9m0QyVI3FawoGhQy1c7nFgFc%2BK4Gr7R8uC7UaOBsbnFf2A%2Bf75Fnb8YIsM1zKxsuqG7CIXHnfhrucp7Bupwl16cgQXULYvtpkEaYSO7keYxsf87YtLgt%2Bq8Y0q5N7XIfkjjzrwl8jjjWW6IIQQMnRQCTc%2FUcV8yFq9HbnrRBtyAmnhwxvL0DGS9eJD%2FiJzPUWsY76H8IKDty%2B3OxuA8EeUWgHFrfh4rjzy%2BAVMBmPl%2BFLdhK4RlhHw6gewHElGMAomOiaOloIFoi2kycb22qKkeJCKY1W4xDMNWC6r4GOqUBQdxRhgnM8lVdnINKAL8rg3uyNpX%2FsKDPXjTKtMQOeqe%2BhW5qZV8av30kfSZIYQSkOVkJ5MQ9T4jQJLjoSILh%2B2W63AIoLjNK6KxU3niWaBn%2B0gWkp2gxe3Bdtx5V6kAw1PcJOENJBucQ15eK79KCnNS0Sty2P5SDIBOaheaQ6Jj1TE2thqlFuJcokH04zj21l4pzBTiCAHoscI2WkDvtAG0%2FYO4A&X-Amz-Signature=9565497510e3fa411fa16d27537f5ac6b7dc408acc90938a27a65e24f2d0ea44&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
