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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUKSSPCN%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGxsd9b9o6olcCcveqCarADdCGfA27gOq9pHcuQ0NkrAiAqgyGRIYpKf2pDgdJHf5Hx%2F2LN8EPczyJwA9m%2BbhgbDSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd8vacUAePUA25ibAKtwDk%2B7Is1zQcluE7O4cEPovw%2BUKvDyn440Pd41Ua0W4yJrDWtkmqJ1sgO5xd0ZAKpG6zKXzjaf5Ew4U7Z9VuZVHNVVAJvzQQZxkCiyuaRl6CIB05GbgAKUSoMdmpA4hqGu1MeaKeZY8L5O%2B8SEX%2BJSeA80EO%2FSu56QYkWmU47McMgHYxpUUD3tRpodZRtoRhurFiyUyN9e4TcUm5CMnCX1k%2FltyAlV588Pbfq4wnqJ3f21ZR2ign2kmqJzFrYnzy0b3os2KtBSCcyPiSyjG%2BobtMAG3zvGNAmefioFSTbZvL06E%2Be9j4bjZQQ9Najh%2B2CpbJcft%2Fe%2F4R%2Fvln70ygRQ9g0TDX9iVhnbbWx50uAZFbeBnGq5ciGOUmOsQv0kaOiAtiANhLPIF4V3Ip7L1SHa31tmzVc6RW%2B4br8q78Lbq%2BUQd%2FlWwd4HaHsSk6GPKRW%2Fe45HLr1sor2vakuie%2Fk7zsBK%2F8yPgmO1GbX5PQlhnhJ%2BgX9p7cmux4VtI4PCvX%2F%2Bgt3CnV6SElHP2%2FQ9t%2F7AI6lwnHeSqhpTSPMD39dRuCyfiAhiA%2F8m4Vm%2Fh7JbkFpX6F3udv6T8v93zf4RKoHxgDBVfA1Kr1wXbtGp05OcBXT1x4SpHCIzQOwygpsgw9PXvwwY6pgGXMTrKi2mBzcOW%2BAzXtAtDpHciPMJerpVg1pG%2BT%2FrpKT1SbHwDxLqnU1vO2mVNcWGCYf0UD%2B1AV%2Bq%2BmL%2FAFa2CvhMqhEzR4ay91GRbYj2rLOLwB2w7YnWoqiWPEAfzxG07miKTF56sHS8pdm1zVhW2XD2BneOxFmbjdOFIOsX5uakpZN1cxykIsEQATjGL%2Fkc0bcJBkNM40HPKpBsbapu57Kytz%2Bnb&X-Amz-Signature=0e2af152e119ddd97ad96bc016a6b4787725a9134e41b777a186734d7f1c74e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUKSSPCN%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGxsd9b9o6olcCcveqCarADdCGfA27gOq9pHcuQ0NkrAiAqgyGRIYpKf2pDgdJHf5Hx%2F2LN8EPczyJwA9m%2BbhgbDSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd8vacUAePUA25ibAKtwDk%2B7Is1zQcluE7O4cEPovw%2BUKvDyn440Pd41Ua0W4yJrDWtkmqJ1sgO5xd0ZAKpG6zKXzjaf5Ew4U7Z9VuZVHNVVAJvzQQZxkCiyuaRl6CIB05GbgAKUSoMdmpA4hqGu1MeaKeZY8L5O%2B8SEX%2BJSeA80EO%2FSu56QYkWmU47McMgHYxpUUD3tRpodZRtoRhurFiyUyN9e4TcUm5CMnCX1k%2FltyAlV588Pbfq4wnqJ3f21ZR2ign2kmqJzFrYnzy0b3os2KtBSCcyPiSyjG%2BobtMAG3zvGNAmefioFSTbZvL06E%2Be9j4bjZQQ9Najh%2B2CpbJcft%2Fe%2F4R%2Fvln70ygRQ9g0TDX9iVhnbbWx50uAZFbeBnGq5ciGOUmOsQv0kaOiAtiANhLPIF4V3Ip7L1SHa31tmzVc6RW%2B4br8q78Lbq%2BUQd%2FlWwd4HaHsSk6GPKRW%2Fe45HLr1sor2vakuie%2Fk7zsBK%2F8yPgmO1GbX5PQlhnhJ%2BgX9p7cmux4VtI4PCvX%2F%2Bgt3CnV6SElHP2%2FQ9t%2F7AI6lwnHeSqhpTSPMD39dRuCyfiAhiA%2F8m4Vm%2Fh7JbkFpX6F3udv6T8v93zf4RKoHxgDBVfA1Kr1wXbtGp05OcBXT1x4SpHCIzQOwygpsgw9PXvwwY6pgGXMTrKi2mBzcOW%2BAzXtAtDpHciPMJerpVg1pG%2BT%2FrpKT1SbHwDxLqnU1vO2mVNcWGCYf0UD%2B1AV%2Bq%2BmL%2FAFa2CvhMqhEzR4ay91GRbYj2rLOLwB2w7YnWoqiWPEAfzxG07miKTF56sHS8pdm1zVhW2XD2BneOxFmbjdOFIOsX5uakpZN1cxykIsEQATjGL%2Fkc0bcJBkNM40HPKpBsbapu57Kytz%2Bnb&X-Amz-Signature=f0af5d0a2eb0c09c1a5c4a679f60b7a213316c53cf49763736cfe1a6b46e4de5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUKSSPCN%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGxsd9b9o6olcCcveqCarADdCGfA27gOq9pHcuQ0NkrAiAqgyGRIYpKf2pDgdJHf5Hx%2F2LN8EPczyJwA9m%2BbhgbDSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd8vacUAePUA25ibAKtwDk%2B7Is1zQcluE7O4cEPovw%2BUKvDyn440Pd41Ua0W4yJrDWtkmqJ1sgO5xd0ZAKpG6zKXzjaf5Ew4U7Z9VuZVHNVVAJvzQQZxkCiyuaRl6CIB05GbgAKUSoMdmpA4hqGu1MeaKeZY8L5O%2B8SEX%2BJSeA80EO%2FSu56QYkWmU47McMgHYxpUUD3tRpodZRtoRhurFiyUyN9e4TcUm5CMnCX1k%2FltyAlV588Pbfq4wnqJ3f21ZR2ign2kmqJzFrYnzy0b3os2KtBSCcyPiSyjG%2BobtMAG3zvGNAmefioFSTbZvL06E%2Be9j4bjZQQ9Najh%2B2CpbJcft%2Fe%2F4R%2Fvln70ygRQ9g0TDX9iVhnbbWx50uAZFbeBnGq5ciGOUmOsQv0kaOiAtiANhLPIF4V3Ip7L1SHa31tmzVc6RW%2B4br8q78Lbq%2BUQd%2FlWwd4HaHsSk6GPKRW%2Fe45HLr1sor2vakuie%2Fk7zsBK%2F8yPgmO1GbX5PQlhnhJ%2BgX9p7cmux4VtI4PCvX%2F%2Bgt3CnV6SElHP2%2FQ9t%2F7AI6lwnHeSqhpTSPMD39dRuCyfiAhiA%2F8m4Vm%2Fh7JbkFpX6F3udv6T8v93zf4RKoHxgDBVfA1Kr1wXbtGp05OcBXT1x4SpHCIzQOwygpsgw9PXvwwY6pgGXMTrKi2mBzcOW%2BAzXtAtDpHciPMJerpVg1pG%2BT%2FrpKT1SbHwDxLqnU1vO2mVNcWGCYf0UD%2B1AV%2Bq%2BmL%2FAFa2CvhMqhEzR4ay91GRbYj2rLOLwB2w7YnWoqiWPEAfzxG07miKTF56sHS8pdm1zVhW2XD2BneOxFmbjdOFIOsX5uakpZN1cxykIsEQATjGL%2Fkc0bcJBkNM40HPKpBsbapu57Kytz%2Bnb&X-Amz-Signature=62c944ab6bdde6c0775ca3604a73ec559efc58e84ae54643f1ba2baaa779b4a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
