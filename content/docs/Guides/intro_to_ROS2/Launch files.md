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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHV5GYER%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEECAdcXd8akH8jL%2Bs7DbdYkHu%2F%2BTM3ny8PSlUh25XspAiEA0RzQHyNF8UGWSiGZcy8zJxBvgahkChhHN0zhRZ9Yx8Iq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDAjDNXPXEk4%2BFThEYircAwjjXbVByliaB71j0fQyxsZTfOzUqNtNtEMYOecquRNZraAciBiJGFhQ6lbRIA%2B9IL47Pdmt%2B8oLC7fujWMVtvbCmYFUBZuWCoXoqCOFAcHRPs6bw3guwYE9eGoIcJzTn6USr9qroGD7hceLNal6yfF1DXJmHH61so58HjCY2wG806ILwcO716p%2BYAwOf5CoGZA3wtEn19YWlBHG5dGPicrB4un2AqPwhOaPuG%2F4IdbS7ahnIVpieUwdvlS52pTPkAhVlwLJuM%2F1%2BN5MLnk%2FrlvIlVbMP5E0u3MZexOfRIi86T5So8FcxYqKGoVd7PaJH1u5i9mrVh3Wlu%2B8JbUZlS%2BAiT%2F3kQ9Cry6x9Ny%2BUOMJoScqyIFGuIkmSvhKxVPDtngtA6DV1i9%2F9dDnVtJTK6zNv1lElbrxLM9R8g4ourzdR6c4%2Fys3RA8GHmyc6jVtObA9RpICwnhUD9TIU%2BhW02kwoS0nFtCkMs4OUDKw8zxnNGVRycbDhwaHxgbt%2FzyOF2hffjO%2FzLbr6kBhwcril5FMMR00sA9sr%2B%2Bf7JEXwD0tkjMrXfDFhc0OFM9F%2FUKjc3qwadR2Tcl2C9na%2FQn%2BFWu1kPAZW%2BasV1nONimTYwkjnVlEoMhhj17OmaiTMIuUlb8GOqUB73z4Ru3ifowG2TyONezmubOiOvg2Y9QuoUoomo6pjXgH1W9oSOKSGbSx38scdEjJKCK5IRZ9yaRRk0PHDeSPVrcTjHg4UnxSwvJc3ojPwy77RBPVmPwJGnWWjzkrOmtb3TaY8voslx4HUCydwypvv2lG20QLVjRAC625m8XHs2tYcdYydV4gY500A2JDLRziTjBxruIISW%2FZl0WNpX%2BNvKdaZw%2Bg&X-Amz-Signature=b9d099596f289cf04c8d0ebcc0f65211eb5afab8ba32ab24ec0e9866abf4e28e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHV5GYER%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEECAdcXd8akH8jL%2Bs7DbdYkHu%2F%2BTM3ny8PSlUh25XspAiEA0RzQHyNF8UGWSiGZcy8zJxBvgahkChhHN0zhRZ9Yx8Iq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDAjDNXPXEk4%2BFThEYircAwjjXbVByliaB71j0fQyxsZTfOzUqNtNtEMYOecquRNZraAciBiJGFhQ6lbRIA%2B9IL47Pdmt%2B8oLC7fujWMVtvbCmYFUBZuWCoXoqCOFAcHRPs6bw3guwYE9eGoIcJzTn6USr9qroGD7hceLNal6yfF1DXJmHH61so58HjCY2wG806ILwcO716p%2BYAwOf5CoGZA3wtEn19YWlBHG5dGPicrB4un2AqPwhOaPuG%2F4IdbS7ahnIVpieUwdvlS52pTPkAhVlwLJuM%2F1%2BN5MLnk%2FrlvIlVbMP5E0u3MZexOfRIi86T5So8FcxYqKGoVd7PaJH1u5i9mrVh3Wlu%2B8JbUZlS%2BAiT%2F3kQ9Cry6x9Ny%2BUOMJoScqyIFGuIkmSvhKxVPDtngtA6DV1i9%2F9dDnVtJTK6zNv1lElbrxLM9R8g4ourzdR6c4%2Fys3RA8GHmyc6jVtObA9RpICwnhUD9TIU%2BhW02kwoS0nFtCkMs4OUDKw8zxnNGVRycbDhwaHxgbt%2FzyOF2hffjO%2FzLbr6kBhwcril5FMMR00sA9sr%2B%2Bf7JEXwD0tkjMrXfDFhc0OFM9F%2FUKjc3qwadR2Tcl2C9na%2FQn%2BFWu1kPAZW%2BasV1nONimTYwkjnVlEoMhhj17OmaiTMIuUlb8GOqUB73z4Ru3ifowG2TyONezmubOiOvg2Y9QuoUoomo6pjXgH1W9oSOKSGbSx38scdEjJKCK5IRZ9yaRRk0PHDeSPVrcTjHg4UnxSwvJc3ojPwy77RBPVmPwJGnWWjzkrOmtb3TaY8voslx4HUCydwypvv2lG20QLVjRAC625m8XHs2tYcdYydV4gY500A2JDLRziTjBxruIISW%2FZl0WNpX%2BNvKdaZw%2Bg&X-Amz-Signature=374e4199b555268a922f1866c9ce521869980a5565466fd5f0b3020638e16b23&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHV5GYER%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEECAdcXd8akH8jL%2Bs7DbdYkHu%2F%2BTM3ny8PSlUh25XspAiEA0RzQHyNF8UGWSiGZcy8zJxBvgahkChhHN0zhRZ9Yx8Iq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDAjDNXPXEk4%2BFThEYircAwjjXbVByliaB71j0fQyxsZTfOzUqNtNtEMYOecquRNZraAciBiJGFhQ6lbRIA%2B9IL47Pdmt%2B8oLC7fujWMVtvbCmYFUBZuWCoXoqCOFAcHRPs6bw3guwYE9eGoIcJzTn6USr9qroGD7hceLNal6yfF1DXJmHH61so58HjCY2wG806ILwcO716p%2BYAwOf5CoGZA3wtEn19YWlBHG5dGPicrB4un2AqPwhOaPuG%2F4IdbS7ahnIVpieUwdvlS52pTPkAhVlwLJuM%2F1%2BN5MLnk%2FrlvIlVbMP5E0u3MZexOfRIi86T5So8FcxYqKGoVd7PaJH1u5i9mrVh3Wlu%2B8JbUZlS%2BAiT%2F3kQ9Cry6x9Ny%2BUOMJoScqyIFGuIkmSvhKxVPDtngtA6DV1i9%2F9dDnVtJTK6zNv1lElbrxLM9R8g4ourzdR6c4%2Fys3RA8GHmyc6jVtObA9RpICwnhUD9TIU%2BhW02kwoS0nFtCkMs4OUDKw8zxnNGVRycbDhwaHxgbt%2FzyOF2hffjO%2FzLbr6kBhwcril5FMMR00sA9sr%2B%2Bf7JEXwD0tkjMrXfDFhc0OFM9F%2FUKjc3qwadR2Tcl2C9na%2FQn%2BFWu1kPAZW%2BasV1nONimTYwkjnVlEoMhhj17OmaiTMIuUlb8GOqUB73z4Ru3ifowG2TyONezmubOiOvg2Y9QuoUoomo6pjXgH1W9oSOKSGbSx38scdEjJKCK5IRZ9yaRRk0PHDeSPVrcTjHg4UnxSwvJc3ojPwy77RBPVmPwJGnWWjzkrOmtb3TaY8voslx4HUCydwypvv2lG20QLVjRAC625m8XHs2tYcdYydV4gY500A2JDLRziTjBxruIISW%2FZl0WNpX%2BNvKdaZw%2Bg&X-Amz-Signature=deaa0e92b8ba36db889f5432c158ac5005f3c80fe5d3cad6ffb581dbdba81bf3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
