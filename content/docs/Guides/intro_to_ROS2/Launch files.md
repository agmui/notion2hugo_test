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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSIUOAXE%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T041004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2Yj8dkKMsExjC%2F5MNeh9UGfB%2FnsAIhfFka0a2kyxhVAiBMdfc6wS5TYcVA6HB35Bh32%2Fx9jRrGm4F2c51CAhTNrSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgmr1L1Uwp4fjqWghKtwDglg0pyIadEcH2EbsdpsDGaTU%2B5J0mEynteLwEM0ieI0NZaja1paR0tFPOlw77N52fQRT0lu31baDLRGViMQnC9%2FTEcPyoU376luq34rqlFhMNBcklOu4VWsn2HXsN4vSb037RnD3GpMWTR3R7JkSEaCt6LqZQz9%2FKUdWWD%2BCNj8hOAc8xuZExTvNMiFmVrjLGmvgYNWzEVjdl6ioTYFpzRQwfuJQwfZ2EE4Qf2cN2%2Bv8ihiyp1spGPAA6xYW0J5kyb1i%2FjQNd9FSGPgmhfdU75gS7Nw2XyqB9%2B%2BZxT%2B2X9%2Fw85dZuciCmirxuNOHtr26hnVfmIGjJyM5qLb663BWmKw3hAGE72YQ8ebRrDMC8DrB87Rmlzwir1Nfm%2Fkgzfm9qfeFWDJHGMx7dQDVEa%2FGB3bxuKZIr52drhD5bxGH319QzI8hqndWmFrw08mmv%2BWuihZ7eSaK2CvOMG8VpcOXFV60NoUSZcBgAj6BUq%2FwDh2wEFSXYvyFhwzoNK0y08Uedkvf3t%2BxeDHaVo4l73XqmUfrwSLAY5hJ4C1CzmKpfdxSAlLggAksc794WZsTGBVarvf7eaxyCqd7uyfigxARf0r4a%2Fl5tsvJRbR5UdoYPVErXDxQINFCKG4%2BePAw2%2BuvvQY6pgHR1eFGlH3A1seTWrEhMDL2nsCFjSV%2FVoFkt7qpP7eoPyhn3sGLgr2J8HAqlh%2BQcl%2F0mlfLWJrkwVJZGszOFNA0QB9tqovCLKOTMaTu6AUs1Ma7R5qNou%2BAmFQJr8thKYYBg6uma4Aet5cm2EYod6rfs8mNhUhr9MXmWniZlQgElHhKZizPDXPZSjDJUEHpF6cHlGJGFO8j0RVPT1QZSwvxQL1PCuzE&X-Amz-Signature=ca27989d039b8f9cc6021168efa058b3b616c469a955d0ad82323e46a0747bd3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSIUOAXE%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T041004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2Yj8dkKMsExjC%2F5MNeh9UGfB%2FnsAIhfFka0a2kyxhVAiBMdfc6wS5TYcVA6HB35Bh32%2Fx9jRrGm4F2c51CAhTNrSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgmr1L1Uwp4fjqWghKtwDglg0pyIadEcH2EbsdpsDGaTU%2B5J0mEynteLwEM0ieI0NZaja1paR0tFPOlw77N52fQRT0lu31baDLRGViMQnC9%2FTEcPyoU376luq34rqlFhMNBcklOu4VWsn2HXsN4vSb037RnD3GpMWTR3R7JkSEaCt6LqZQz9%2FKUdWWD%2BCNj8hOAc8xuZExTvNMiFmVrjLGmvgYNWzEVjdl6ioTYFpzRQwfuJQwfZ2EE4Qf2cN2%2Bv8ihiyp1spGPAA6xYW0J5kyb1i%2FjQNd9FSGPgmhfdU75gS7Nw2XyqB9%2B%2BZxT%2B2X9%2Fw85dZuciCmirxuNOHtr26hnVfmIGjJyM5qLb663BWmKw3hAGE72YQ8ebRrDMC8DrB87Rmlzwir1Nfm%2Fkgzfm9qfeFWDJHGMx7dQDVEa%2FGB3bxuKZIr52drhD5bxGH319QzI8hqndWmFrw08mmv%2BWuihZ7eSaK2CvOMG8VpcOXFV60NoUSZcBgAj6BUq%2FwDh2wEFSXYvyFhwzoNK0y08Uedkvf3t%2BxeDHaVo4l73XqmUfrwSLAY5hJ4C1CzmKpfdxSAlLggAksc794WZsTGBVarvf7eaxyCqd7uyfigxARf0r4a%2Fl5tsvJRbR5UdoYPVErXDxQINFCKG4%2BePAw2%2BuvvQY6pgHR1eFGlH3A1seTWrEhMDL2nsCFjSV%2FVoFkt7qpP7eoPyhn3sGLgr2J8HAqlh%2BQcl%2F0mlfLWJrkwVJZGszOFNA0QB9tqovCLKOTMaTu6AUs1Ma7R5qNou%2BAmFQJr8thKYYBg6uma4Aet5cm2EYod6rfs8mNhUhr9MXmWniZlQgElHhKZizPDXPZSjDJUEHpF6cHlGJGFO8j0RVPT1QZSwvxQL1PCuzE&X-Amz-Signature=71cee2fb28ee18ed2b563ffb8e7ea7e06c1e79c179cc0a50050bd91354ee33b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSIUOAXE%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T041004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2Yj8dkKMsExjC%2F5MNeh9UGfB%2FnsAIhfFka0a2kyxhVAiBMdfc6wS5TYcVA6HB35Bh32%2Fx9jRrGm4F2c51CAhTNrSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgmr1L1Uwp4fjqWghKtwDglg0pyIadEcH2EbsdpsDGaTU%2B5J0mEynteLwEM0ieI0NZaja1paR0tFPOlw77N52fQRT0lu31baDLRGViMQnC9%2FTEcPyoU376luq34rqlFhMNBcklOu4VWsn2HXsN4vSb037RnD3GpMWTR3R7JkSEaCt6LqZQz9%2FKUdWWD%2BCNj8hOAc8xuZExTvNMiFmVrjLGmvgYNWzEVjdl6ioTYFpzRQwfuJQwfZ2EE4Qf2cN2%2Bv8ihiyp1spGPAA6xYW0J5kyb1i%2FjQNd9FSGPgmhfdU75gS7Nw2XyqB9%2B%2BZxT%2B2X9%2Fw85dZuciCmirxuNOHtr26hnVfmIGjJyM5qLb663BWmKw3hAGE72YQ8ebRrDMC8DrB87Rmlzwir1Nfm%2Fkgzfm9qfeFWDJHGMx7dQDVEa%2FGB3bxuKZIr52drhD5bxGH319QzI8hqndWmFrw08mmv%2BWuihZ7eSaK2CvOMG8VpcOXFV60NoUSZcBgAj6BUq%2FwDh2wEFSXYvyFhwzoNK0y08Uedkvf3t%2BxeDHaVo4l73XqmUfrwSLAY5hJ4C1CzmKpfdxSAlLggAksc794WZsTGBVarvf7eaxyCqd7uyfigxARf0r4a%2Fl5tsvJRbR5UdoYPVErXDxQINFCKG4%2BePAw2%2BuvvQY6pgHR1eFGlH3A1seTWrEhMDL2nsCFjSV%2FVoFkt7qpP7eoPyhn3sGLgr2J8HAqlh%2BQcl%2F0mlfLWJrkwVJZGszOFNA0QB9tqovCLKOTMaTu6AUs1Ma7R5qNou%2BAmFQJr8thKYYBg6uma4Aet5cm2EYod6rfs8mNhUhr9MXmWniZlQgElHhKZizPDXPZSjDJUEHpF6cHlGJGFO8j0RVPT1QZSwvxQL1PCuzE&X-Amz-Signature=2799fe62b15cc3f7280fc694337d7a3429700f3c66b63c736a848bdb4c222ad6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
