---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622Q44YCB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDQGXF2hPLSR5bPhnesDVmpv037Y0R3Rl0jDifk7gs5YwIgC%2FWCvJ7%2FCKyzDdu94Oz6W5V6HI3NPbRKv0RCinjPf5Uq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDK%2FyXBi0Va6uv%2FKDPCrcA3KWzj6AeW%2Fbie3QLnreVLZyN7%2F0yCoYXHfO66SUz%2BjM%2FNE%2FcXfUBRrZAup7ne5xUyMzz2iJegF3O7oWcsyU2IJbpBe6F8Y%2B%2F8lIFHruFtKmpZrirCADN%2BHnHQ%2FzdZTX%2FkURaWmeGn6yxaOUM7pbRVYejd3p1kZo78hiT876DnhFDldlSqBRExFHUJQR5AsGREI2%2F8plx0PQFOEu0uIunf8TCgwXUlI3hZRm7%2F4Cxj16hWaB%2Ftw2SYz3q5oXxmlnZG%2FLFmQlh94vyXGmYmpU8Q394bRxhU5a7lClkj%2F267gUTysAeztGH9KGa4OdwXuyW2d0ANTTnwfpFXUkR%2Fhi4%2BD1g6JNp0712iM5rNP74voG4u1W783Isy33YiTaSK6VFyUG2tC%2BqkyoGCDXbmNsGvDXU5NAphQp7DuQ7PrCQtN7SGFfyjU0ZqPQi3Cw3zryZFek1Vy116JgcDQe%2Fcmu3NVwYGPBybtVn3aXA5wXmasq%2FjTccjG44CNzLU0%2FmDdjizVrhnxyNrklVXnSmaluN0DNo3thktEdKEn4iy%2BJYh%2FphZKatsQhgDMNnEjVkvwKsctB8vEwTSVn60md4QG7IratODVBzgRWduQZ4XPIyFJx50essK%2F04dymt0viMIe1isQGOqUB09rC0WYDdGeeau3Y8Vu4548lXCSMFcf2v%2B%2FnhBUkftm%2FSjaJS%2F9chebbpU%2BO%2FBj00v5Zlea7CT5TEFtlZYM3AjWKyZWKeZPL5%2B2nisWiAEdB1l2TlTmBEM0spEapvMzbP%2Bz6ac7gW91VleD2wknfHxv99%2FiYE7JPLPMGDtsyC%2BcTdy%2BBmhXZc%2BEK9a0xE7GIVB%2FogHGE%2FMHx%2BJVPIEjjfH9kNk2I&X-Amz-Signature=f1ff294de7a62227b513613cd5c5890c0fbd5b26629bd7768016cefbf003d87d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622Q44YCB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDQGXF2hPLSR5bPhnesDVmpv037Y0R3Rl0jDifk7gs5YwIgC%2FWCvJ7%2FCKyzDdu94Oz6W5V6HI3NPbRKv0RCinjPf5Uq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDK%2FyXBi0Va6uv%2FKDPCrcA3KWzj6AeW%2Fbie3QLnreVLZyN7%2F0yCoYXHfO66SUz%2BjM%2FNE%2FcXfUBRrZAup7ne5xUyMzz2iJegF3O7oWcsyU2IJbpBe6F8Y%2B%2F8lIFHruFtKmpZrirCADN%2BHnHQ%2FzdZTX%2FkURaWmeGn6yxaOUM7pbRVYejd3p1kZo78hiT876DnhFDldlSqBRExFHUJQR5AsGREI2%2F8plx0PQFOEu0uIunf8TCgwXUlI3hZRm7%2F4Cxj16hWaB%2Ftw2SYz3q5oXxmlnZG%2FLFmQlh94vyXGmYmpU8Q394bRxhU5a7lClkj%2F267gUTysAeztGH9KGa4OdwXuyW2d0ANTTnwfpFXUkR%2Fhi4%2BD1g6JNp0712iM5rNP74voG4u1W783Isy33YiTaSK6VFyUG2tC%2BqkyoGCDXbmNsGvDXU5NAphQp7DuQ7PrCQtN7SGFfyjU0ZqPQi3Cw3zryZFek1Vy116JgcDQe%2Fcmu3NVwYGPBybtVn3aXA5wXmasq%2FjTccjG44CNzLU0%2FmDdjizVrhnxyNrklVXnSmaluN0DNo3thktEdKEn4iy%2BJYh%2FphZKatsQhgDMNnEjVkvwKsctB8vEwTSVn60md4QG7IratODVBzgRWduQZ4XPIyFJx50essK%2F04dymt0viMIe1isQGOqUB09rC0WYDdGeeau3Y8Vu4548lXCSMFcf2v%2B%2FnhBUkftm%2FSjaJS%2F9chebbpU%2BO%2FBj00v5Zlea7CT5TEFtlZYM3AjWKyZWKeZPL5%2B2nisWiAEdB1l2TlTmBEM0spEapvMzbP%2Bz6ac7gW91VleD2wknfHxv99%2FiYE7JPLPMGDtsyC%2BcTdy%2BBmhXZc%2BEK9a0xE7GIVB%2FogHGE%2FMHx%2BJVPIEjjfH9kNk2I&X-Amz-Signature=5abfbbab7cd2b458b3a7da7013be237d9b849c8fffff5ded46f47ddb7f7ee7e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622Q44YCB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDQGXF2hPLSR5bPhnesDVmpv037Y0R3Rl0jDifk7gs5YwIgC%2FWCvJ7%2FCKyzDdu94Oz6W5V6HI3NPbRKv0RCinjPf5Uq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDK%2FyXBi0Va6uv%2FKDPCrcA3KWzj6AeW%2Fbie3QLnreVLZyN7%2F0yCoYXHfO66SUz%2BjM%2FNE%2FcXfUBRrZAup7ne5xUyMzz2iJegF3O7oWcsyU2IJbpBe6F8Y%2B%2F8lIFHruFtKmpZrirCADN%2BHnHQ%2FzdZTX%2FkURaWmeGn6yxaOUM7pbRVYejd3p1kZo78hiT876DnhFDldlSqBRExFHUJQR5AsGREI2%2F8plx0PQFOEu0uIunf8TCgwXUlI3hZRm7%2F4Cxj16hWaB%2Ftw2SYz3q5oXxmlnZG%2FLFmQlh94vyXGmYmpU8Q394bRxhU5a7lClkj%2F267gUTysAeztGH9KGa4OdwXuyW2d0ANTTnwfpFXUkR%2Fhi4%2BD1g6JNp0712iM5rNP74voG4u1W783Isy33YiTaSK6VFyUG2tC%2BqkyoGCDXbmNsGvDXU5NAphQp7DuQ7PrCQtN7SGFfyjU0ZqPQi3Cw3zryZFek1Vy116JgcDQe%2Fcmu3NVwYGPBybtVn3aXA5wXmasq%2FjTccjG44CNzLU0%2FmDdjizVrhnxyNrklVXnSmaluN0DNo3thktEdKEn4iy%2BJYh%2FphZKatsQhgDMNnEjVkvwKsctB8vEwTSVn60md4QG7IratODVBzgRWduQZ4XPIyFJx50essK%2F04dymt0viMIe1isQGOqUB09rC0WYDdGeeau3Y8Vu4548lXCSMFcf2v%2B%2FnhBUkftm%2FSjaJS%2F9chebbpU%2BO%2FBj00v5Zlea7CT5TEFtlZYM3AjWKyZWKeZPL5%2B2nisWiAEdB1l2TlTmBEM0spEapvMzbP%2Bz6ac7gW91VleD2wknfHxv99%2FiYE7JPLPMGDtsyC%2BcTdy%2BBmhXZc%2BEK9a0xE7GIVB%2FogHGE%2FMHx%2BJVPIEjjfH9kNk2I&X-Amz-Signature=6cd9bd3882d6388b0731d1933ad0ea01edeb1785da8a4793869c8b0212fced43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
