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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JVOMZVZ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIFEjSjxlp1noJabiJOFAsVyM%2Bou1Im9lMlFbWsealZRdAiAeWysgDiecc%2FoL4LsblpraDEX26UOivZpsuvpgG5njTyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMilrTfGi8UD2h6I8qKtwDkj9T144rHAztbo4XUNdunffmub%2BbpmBCb%2FuseSiJSEcjd8fjuque8sb7zqKr4xLo1uSas3zBUtfiXrolrZr0eeOSaC5KMg3VKP83sgkZk1lCDFeUkyyM6SILmLS1bCAE%2B%2Fcf0wEhTi0JegMA6%2BWEl2LVNNqhlRUrzez9XSdlFkNHqIOp8tvYexUKYAZ6f8nidktWtm%2BoZuDO%2F6lOWHhxPA7zxOBiQywaoW50m7VznUTm%2Bkag66iBQT%2BHl04nLXTn0uNJMroZ4FwfSsvbCHi5eLRC3kFPpie5IB8y5Nlt%2BEFEBwwSYmisDHVsOEoWZZcF7umrrtJoYjfPk2m3VsJQjg5uxth93tDOW6T9miMLM8bvOweg2LnJXlerOSk7Psr%2BrvIyxzZHPEw%2FtUZZl%2Fk%2FFczYWo2KIA01qz%2Bk04sXS3QYh6Orm7mPmY95hEcpEQX7ezAfaEQopHe1hInHXXeo%2BEqjCSPXlmRfqj4EuRQbOzJYDWTy3pCNAU2yKW8%2B03rSrNESR7hXoN99e%2BkMruFatRaPweeyDSCr9PYkSCSy%2FapWelt%2BxN%2F%2FtNkSkdho2ovVgfEUOwPfsvOCtm2%2BmBFSBWsy2kxpkbLMFNMrsHS8xhbjWq7jTaT%2BfTL%2Boscw6qaEwgY6pgGt4ddAjIQOV9v20vWeMA8EYQV8%2FzSOvMc5CQpr9%2Fs%2FFs7Fale7v%2B7zzIUEbI1toaW5rIwy6fiquqVs8YHWhhmerkBnPejVuUexAh8yiTcdBc2bbMpydMU6rBEVVZ%2FXINkJ4ILh6O1VJQgLM%2FKrpszd90r4gHt3dItrZF7uvdDGnx66x2%2BkOy88MGps0WHCRkQIfdwRwL%2FQpTJsuo4HCW0oUoPuH8F2&X-Amz-Signature=2a27878659c5214fad2e28d2a21f59f4f3580643a2b069775c5bbbb9de5ae89b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JVOMZVZ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIFEjSjxlp1noJabiJOFAsVyM%2Bou1Im9lMlFbWsealZRdAiAeWysgDiecc%2FoL4LsblpraDEX26UOivZpsuvpgG5njTyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMilrTfGi8UD2h6I8qKtwDkj9T144rHAztbo4XUNdunffmub%2BbpmBCb%2FuseSiJSEcjd8fjuque8sb7zqKr4xLo1uSas3zBUtfiXrolrZr0eeOSaC5KMg3VKP83sgkZk1lCDFeUkyyM6SILmLS1bCAE%2B%2Fcf0wEhTi0JegMA6%2BWEl2LVNNqhlRUrzez9XSdlFkNHqIOp8tvYexUKYAZ6f8nidktWtm%2BoZuDO%2F6lOWHhxPA7zxOBiQywaoW50m7VznUTm%2Bkag66iBQT%2BHl04nLXTn0uNJMroZ4FwfSsvbCHi5eLRC3kFPpie5IB8y5Nlt%2BEFEBwwSYmisDHVsOEoWZZcF7umrrtJoYjfPk2m3VsJQjg5uxth93tDOW6T9miMLM8bvOweg2LnJXlerOSk7Psr%2BrvIyxzZHPEw%2FtUZZl%2Fk%2FFczYWo2KIA01qz%2Bk04sXS3QYh6Orm7mPmY95hEcpEQX7ezAfaEQopHe1hInHXXeo%2BEqjCSPXlmRfqj4EuRQbOzJYDWTy3pCNAU2yKW8%2B03rSrNESR7hXoN99e%2BkMruFatRaPweeyDSCr9PYkSCSy%2FapWelt%2BxN%2F%2FtNkSkdho2ovVgfEUOwPfsvOCtm2%2BmBFSBWsy2kxpkbLMFNMrsHS8xhbjWq7jTaT%2BfTL%2Boscw6qaEwgY6pgGt4ddAjIQOV9v20vWeMA8EYQV8%2FzSOvMc5CQpr9%2Fs%2FFs7Fale7v%2B7zzIUEbI1toaW5rIwy6fiquqVs8YHWhhmerkBnPejVuUexAh8yiTcdBc2bbMpydMU6rBEVVZ%2FXINkJ4ILh6O1VJQgLM%2FKrpszd90r4gHt3dItrZF7uvdDGnx66x2%2BkOy88MGps0WHCRkQIfdwRwL%2FQpTJsuo4HCW0oUoPuH8F2&X-Amz-Signature=f6d976c3e64c9b67726f2ac25357ce33d97cec3411d1e68d8e8fe07da26ff3cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JVOMZVZ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIFEjSjxlp1noJabiJOFAsVyM%2Bou1Im9lMlFbWsealZRdAiAeWysgDiecc%2FoL4LsblpraDEX26UOivZpsuvpgG5njTyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMilrTfGi8UD2h6I8qKtwDkj9T144rHAztbo4XUNdunffmub%2BbpmBCb%2FuseSiJSEcjd8fjuque8sb7zqKr4xLo1uSas3zBUtfiXrolrZr0eeOSaC5KMg3VKP83sgkZk1lCDFeUkyyM6SILmLS1bCAE%2B%2Fcf0wEhTi0JegMA6%2BWEl2LVNNqhlRUrzez9XSdlFkNHqIOp8tvYexUKYAZ6f8nidktWtm%2BoZuDO%2F6lOWHhxPA7zxOBiQywaoW50m7VznUTm%2Bkag66iBQT%2BHl04nLXTn0uNJMroZ4FwfSsvbCHi5eLRC3kFPpie5IB8y5Nlt%2BEFEBwwSYmisDHVsOEoWZZcF7umrrtJoYjfPk2m3VsJQjg5uxth93tDOW6T9miMLM8bvOweg2LnJXlerOSk7Psr%2BrvIyxzZHPEw%2FtUZZl%2Fk%2FFczYWo2KIA01qz%2Bk04sXS3QYh6Orm7mPmY95hEcpEQX7ezAfaEQopHe1hInHXXeo%2BEqjCSPXlmRfqj4EuRQbOzJYDWTy3pCNAU2yKW8%2B03rSrNESR7hXoN99e%2BkMruFatRaPweeyDSCr9PYkSCSy%2FapWelt%2BxN%2F%2FtNkSkdho2ovVgfEUOwPfsvOCtm2%2BmBFSBWsy2kxpkbLMFNMrsHS8xhbjWq7jTaT%2BfTL%2Boscw6qaEwgY6pgGt4ddAjIQOV9v20vWeMA8EYQV8%2FzSOvMc5CQpr9%2Fs%2FFs7Fale7v%2B7zzIUEbI1toaW5rIwy6fiquqVs8YHWhhmerkBnPejVuUexAh8yiTcdBc2bbMpydMU6rBEVVZ%2FXINkJ4ILh6O1VJQgLM%2FKrpszd90r4gHt3dItrZF7uvdDGnx66x2%2BkOy88MGps0WHCRkQIfdwRwL%2FQpTJsuo4HCW0oUoPuH8F2&X-Amz-Signature=296d3cca466e6320d49e9de8bad6502d60f56fc21d597a37a5a1eff36b22c949&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
