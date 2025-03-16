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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XZQ33AG%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwRyu2YFcxzWOvzQ5cQ6GjXLAlm16KiMdUlarZPq04xwIhAMkfldvd08qdgdMD2BNHrj9fOIqzEkNwOHCkitQamoKlKv8DCDEQABoMNjM3NDIzMTgzODA1IgwsnjMxBLFShk0S6qYq3AMHcLMw8aUCOWnkld2jslJ1BpnlMqMLZRO6WiqHlocatknEPOb16BtzXysjovy9Z8JGRpO8o1%2BQUlMlCJlbu%2Fvre43HHpxBW8JTgGQbIGy0JdqHTsbrG5TLXf9v7suoG8P5HOdO0Yl2V%2Bg1CeDO0NSWlSDBv4a7sQckaH%2FX%2Buk%2FjG59gzNQ0JlZ3baj2%2FfP%2F1jv%2FMxN91HOMBrnu2SoDqkIfeJ5HqMaf%2Fkn1fBLtWwKqQdcDNuwSY2YfFuyWOCyQ%2FWcRGva4PnJ1PuxF1iej8RLE5%2Fm0WbSzGJ9107PoFIoZ1dfyM%2B59YzUlgEJArU5oVGP543QjW0PRDY6%2Fh7ewU0g9BnqRXLlddicyUA9GalxcVv124i7jCVC1I8s0BGM0a6X8lARzIhaGqNKQkgBBcn1ySkFP%2F7fII7SNIdGmWuE7mt%2F7SdwpoJJjg82clFrusXf2QXnNP9rlKD5j2zK2cpAkKym3mvXMHcosyFYrxE%2B8UAAdGlY1xWcayR%2BLCMW9KI77J5usV2eT9Do952ikM85jUm3unLm5Lvtw8R%2F%2FAXe6Bt0PP%2BdoWx2cplQMwQnkhrI%2B39oPqActhoRA%2Bbx0Qb01dhWQRgNbkn3vUIHX%2BbsQLGWyqF5l9aUDkm5WzCh39u%2BBjqkAQgdxdqZGAseRIT8VlcXLMdA9oCTwU%2Bp%2BRncReRd16%2BPCDTfR389sdudAzdoGCnoUByDW27riPf2S0zM5CmOdHl7ljrlzPxPR0BAfKzyavuXqcPkt5E7836BKGgRwztUNVSVd7B42TaveYedD5tGT9MS0MABBXdn04yXYi1Zt%2BdEa8jC2gd29tDbFtWBPS8VB2ACa2gqmJmIYhQylfyw3LtBvIjp&X-Amz-Signature=83cd89a91faa144f7fa3e5f95f6425db4795cc47798f4849166c817bdd8f09ed&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XZQ33AG%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwRyu2YFcxzWOvzQ5cQ6GjXLAlm16KiMdUlarZPq04xwIhAMkfldvd08qdgdMD2BNHrj9fOIqzEkNwOHCkitQamoKlKv8DCDEQABoMNjM3NDIzMTgzODA1IgwsnjMxBLFShk0S6qYq3AMHcLMw8aUCOWnkld2jslJ1BpnlMqMLZRO6WiqHlocatknEPOb16BtzXysjovy9Z8JGRpO8o1%2BQUlMlCJlbu%2Fvre43HHpxBW8JTgGQbIGy0JdqHTsbrG5TLXf9v7suoG8P5HOdO0Yl2V%2Bg1CeDO0NSWlSDBv4a7sQckaH%2FX%2Buk%2FjG59gzNQ0JlZ3baj2%2FfP%2F1jv%2FMxN91HOMBrnu2SoDqkIfeJ5HqMaf%2Fkn1fBLtWwKqQdcDNuwSY2YfFuyWOCyQ%2FWcRGva4PnJ1PuxF1iej8RLE5%2Fm0WbSzGJ9107PoFIoZ1dfyM%2B59YzUlgEJArU5oVGP543QjW0PRDY6%2Fh7ewU0g9BnqRXLlddicyUA9GalxcVv124i7jCVC1I8s0BGM0a6X8lARzIhaGqNKQkgBBcn1ySkFP%2F7fII7SNIdGmWuE7mt%2F7SdwpoJJjg82clFrusXf2QXnNP9rlKD5j2zK2cpAkKym3mvXMHcosyFYrxE%2B8UAAdGlY1xWcayR%2BLCMW9KI77J5usV2eT9Do952ikM85jUm3unLm5Lvtw8R%2F%2FAXe6Bt0PP%2BdoWx2cplQMwQnkhrI%2B39oPqActhoRA%2Bbx0Qb01dhWQRgNbkn3vUIHX%2BbsQLGWyqF5l9aUDkm5WzCh39u%2BBjqkAQgdxdqZGAseRIT8VlcXLMdA9oCTwU%2Bp%2BRncReRd16%2BPCDTfR389sdudAzdoGCnoUByDW27riPf2S0zM5CmOdHl7ljrlzPxPR0BAfKzyavuXqcPkt5E7836BKGgRwztUNVSVd7B42TaveYedD5tGT9MS0MABBXdn04yXYi1Zt%2BdEa8jC2gd29tDbFtWBPS8VB2ACa2gqmJmIYhQylfyw3LtBvIjp&X-Amz-Signature=9e3d0f6ef1db1c501b719eaba871e35fb467c060d5b728c1ec1a4fd231a02ce1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XZQ33AG%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwRyu2YFcxzWOvzQ5cQ6GjXLAlm16KiMdUlarZPq04xwIhAMkfldvd08qdgdMD2BNHrj9fOIqzEkNwOHCkitQamoKlKv8DCDEQABoMNjM3NDIzMTgzODA1IgwsnjMxBLFShk0S6qYq3AMHcLMw8aUCOWnkld2jslJ1BpnlMqMLZRO6WiqHlocatknEPOb16BtzXysjovy9Z8JGRpO8o1%2BQUlMlCJlbu%2Fvre43HHpxBW8JTgGQbIGy0JdqHTsbrG5TLXf9v7suoG8P5HOdO0Yl2V%2Bg1CeDO0NSWlSDBv4a7sQckaH%2FX%2Buk%2FjG59gzNQ0JlZ3baj2%2FfP%2F1jv%2FMxN91HOMBrnu2SoDqkIfeJ5HqMaf%2Fkn1fBLtWwKqQdcDNuwSY2YfFuyWOCyQ%2FWcRGva4PnJ1PuxF1iej8RLE5%2Fm0WbSzGJ9107PoFIoZ1dfyM%2B59YzUlgEJArU5oVGP543QjW0PRDY6%2Fh7ewU0g9BnqRXLlddicyUA9GalxcVv124i7jCVC1I8s0BGM0a6X8lARzIhaGqNKQkgBBcn1ySkFP%2F7fII7SNIdGmWuE7mt%2F7SdwpoJJjg82clFrusXf2QXnNP9rlKD5j2zK2cpAkKym3mvXMHcosyFYrxE%2B8UAAdGlY1xWcayR%2BLCMW9KI77J5usV2eT9Do952ikM85jUm3unLm5Lvtw8R%2F%2FAXe6Bt0PP%2BdoWx2cplQMwQnkhrI%2B39oPqActhoRA%2Bbx0Qb01dhWQRgNbkn3vUIHX%2BbsQLGWyqF5l9aUDkm5WzCh39u%2BBjqkAQgdxdqZGAseRIT8VlcXLMdA9oCTwU%2Bp%2BRncReRd16%2BPCDTfR389sdudAzdoGCnoUByDW27riPf2S0zM5CmOdHl7ljrlzPxPR0BAfKzyavuXqcPkt5E7836BKGgRwztUNVSVd7B42TaveYedD5tGT9MS0MABBXdn04yXYi1Zt%2BdEa8jC2gd29tDbFtWBPS8VB2ACa2gqmJmIYhQylfyw3LtBvIjp&X-Amz-Signature=9742b819214395966fcd4f9392548c4d80ada173fcf718dfb19022679e59637e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
