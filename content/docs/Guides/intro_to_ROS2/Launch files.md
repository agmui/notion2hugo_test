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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCN6HOZ3%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlsDCxITzQJNEKZBbvZM231s7HoBNL8NscJDuUugUXDAIgWlP5lvwNjA%2FvBxqPUcDtBfKPdAMVoLPhMEPvFE13zXkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApI66uJl5lTsq4lSCrcA1bO2t6rSUsgLbJEyW8T5z2aTRQklc8%2B302X3CQy5Phh2CASpA%2B8JEKtwS%2FEDYoZ9zVrjRlZtg5YAvWYt5lyhH1dtFkjiFFStGXriazszFb%2Fhchi7aEwsnCVAODfnGuvxm3q654xP%2FZGbUM%2BWw7YPyPkpF1U%2BY53oL%2F8dHLefbxSDhwRehonJ%2BWGt8bJtw%2B%2Fml9jooFKdL%2B7n8zOCM8efnWLTBQYi1B%2BPIk85L00BMePpw%2FPqmJKKTjBjmYjI2KJnxRRr1XjZOv%2BalLWc4mi13AMT7PMLUEOh3uc6nOlix38ATaXMcWzKJFYWTPd%2BF0W0HairKYigIccbgW7aX0XQqce3AXSO3bHAo%2B%2BXXZDbc4FvFEHm%2BiO2agomRdUiSXQv%2BhiqNS4ubkOqkbF2VmP6EIL7hCcqhr%2FKfmbWwziVo28kGRILfRSONDqX8HxmEH7%2BEVh7GHtrAXvV8KNahxfss%2Ba5bOQ6Vh61wnnpcSS5gQlKXemqsBslCHC%2Fhzlynhbnxd7lT0TWFZSkLOSenh2kL4wWJWj%2Brp6NKsPyAfKnhKgdR4HikI8nBBp5AgomSEWG1bv4GMRQVRJttfPNaZiYyZDZG9avsfZ1CIeK4kU7Lbp7FHSDgTjIuVuLJCsMKL%2Bw8MGOqUBAt2zT0eKIOm%2B8XToZGbEVmSjjPfkK%2Fwqos1BEPgL908X7JnAzwJ57iZSa6Pf4v7BWLRocNxVY%2BeZiz51mqedngmDvamPbrNZfgl%2FnbneOWyggFubeWS%2BfD9g2vbZ9bbISNZNuL5is2ErIi7qU9gajrXEGNrMiu7As8OW%2FDVTQwnYnoSbXy3OVN%2B7d4%2Belji%2BmJNPKhb4io7fUTrOtKL2at0HOTg8&X-Amz-Signature=a5d71287f88fcaeb9786924786b2944c9d56a1bea43c5933ce8a54462fdad92c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCN6HOZ3%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlsDCxITzQJNEKZBbvZM231s7HoBNL8NscJDuUugUXDAIgWlP5lvwNjA%2FvBxqPUcDtBfKPdAMVoLPhMEPvFE13zXkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApI66uJl5lTsq4lSCrcA1bO2t6rSUsgLbJEyW8T5z2aTRQklc8%2B302X3CQy5Phh2CASpA%2B8JEKtwS%2FEDYoZ9zVrjRlZtg5YAvWYt5lyhH1dtFkjiFFStGXriazszFb%2Fhchi7aEwsnCVAODfnGuvxm3q654xP%2FZGbUM%2BWw7YPyPkpF1U%2BY53oL%2F8dHLefbxSDhwRehonJ%2BWGt8bJtw%2B%2Fml9jooFKdL%2B7n8zOCM8efnWLTBQYi1B%2BPIk85L00BMePpw%2FPqmJKKTjBjmYjI2KJnxRRr1XjZOv%2BalLWc4mi13AMT7PMLUEOh3uc6nOlix38ATaXMcWzKJFYWTPd%2BF0W0HairKYigIccbgW7aX0XQqce3AXSO3bHAo%2B%2BXXZDbc4FvFEHm%2BiO2agomRdUiSXQv%2BhiqNS4ubkOqkbF2VmP6EIL7hCcqhr%2FKfmbWwziVo28kGRILfRSONDqX8HxmEH7%2BEVh7GHtrAXvV8KNahxfss%2Ba5bOQ6Vh61wnnpcSS5gQlKXemqsBslCHC%2Fhzlynhbnxd7lT0TWFZSkLOSenh2kL4wWJWj%2Brp6NKsPyAfKnhKgdR4HikI8nBBp5AgomSEWG1bv4GMRQVRJttfPNaZiYyZDZG9avsfZ1CIeK4kU7Lbp7FHSDgTjIuVuLJCsMKL%2Bw8MGOqUBAt2zT0eKIOm%2B8XToZGbEVmSjjPfkK%2Fwqos1BEPgL908X7JnAzwJ57iZSa6Pf4v7BWLRocNxVY%2BeZiz51mqedngmDvamPbrNZfgl%2FnbneOWyggFubeWS%2BfD9g2vbZ9bbISNZNuL5is2ErIi7qU9gajrXEGNrMiu7As8OW%2FDVTQwnYnoSbXy3OVN%2B7d4%2Belji%2BmJNPKhb4io7fUTrOtKL2at0HOTg8&X-Amz-Signature=83024f689b3c4abbe897882d7a6c14bb4201cc4c81aea94b582dd626434d7c0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCN6HOZ3%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlsDCxITzQJNEKZBbvZM231s7HoBNL8NscJDuUugUXDAIgWlP5lvwNjA%2FvBxqPUcDtBfKPdAMVoLPhMEPvFE13zXkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApI66uJl5lTsq4lSCrcA1bO2t6rSUsgLbJEyW8T5z2aTRQklc8%2B302X3CQy5Phh2CASpA%2B8JEKtwS%2FEDYoZ9zVrjRlZtg5YAvWYt5lyhH1dtFkjiFFStGXriazszFb%2Fhchi7aEwsnCVAODfnGuvxm3q654xP%2FZGbUM%2BWw7YPyPkpF1U%2BY53oL%2F8dHLefbxSDhwRehonJ%2BWGt8bJtw%2B%2Fml9jooFKdL%2B7n8zOCM8efnWLTBQYi1B%2BPIk85L00BMePpw%2FPqmJKKTjBjmYjI2KJnxRRr1XjZOv%2BalLWc4mi13AMT7PMLUEOh3uc6nOlix38ATaXMcWzKJFYWTPd%2BF0W0HairKYigIccbgW7aX0XQqce3AXSO3bHAo%2B%2BXXZDbc4FvFEHm%2BiO2agomRdUiSXQv%2BhiqNS4ubkOqkbF2VmP6EIL7hCcqhr%2FKfmbWwziVo28kGRILfRSONDqX8HxmEH7%2BEVh7GHtrAXvV8KNahxfss%2Ba5bOQ6Vh61wnnpcSS5gQlKXemqsBslCHC%2Fhzlynhbnxd7lT0TWFZSkLOSenh2kL4wWJWj%2Brp6NKsPyAfKnhKgdR4HikI8nBBp5AgomSEWG1bv4GMRQVRJttfPNaZiYyZDZG9avsfZ1CIeK4kU7Lbp7FHSDgTjIuVuLJCsMKL%2Bw8MGOqUBAt2zT0eKIOm%2B8XToZGbEVmSjjPfkK%2Fwqos1BEPgL908X7JnAzwJ57iZSa6Pf4v7BWLRocNxVY%2BeZiz51mqedngmDvamPbrNZfgl%2FnbneOWyggFubeWS%2BfD9g2vbZ9bbISNZNuL5is2ErIi7qU9gajrXEGNrMiu7As8OW%2FDVTQwnYnoSbXy3OVN%2B7d4%2Belji%2BmJNPKhb4io7fUTrOtKL2at0HOTg8&X-Amz-Signature=fee2d1543e1d3899f002d691a868e88f66db7998d82101246af1f777b44a22aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
