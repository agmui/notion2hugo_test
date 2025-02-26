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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S5YPWZC%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCL%2BqM%2FjMQyAm4quiP%2Bh56CLDGXnL8sAfJEkJaeJN4d7AIhAJqU67axDJyGLOXIAkS6W7g02B%2BIFgI%2F%2BjvMPgkTmk%2FYKv8DCFcQABoMNjM3NDIzMTgzODA1IgyZUlX8vIpOisk8KFYq3ANj%2FA49A%2B3OVTqjuwliRcDwnt4aw1WQqF5wmHwqs2KTEAT6BnCqPLmqwKBPCSVT9ZZxsq%2B5Fxbd%2BW31SDMmzlvYQO8GIyW7dcBkBaa4qL%2BBH1VmJUT3KYooES6SVUlPVz%2Bx2pAHVqQMxL41TnL0Ruk4FeP4Wm5zU2Tp1NCxzxxmujem9IEc1mD80abIEDUtiuWUT8SuiySxrSxSfPQCIHGg4rVucWww7Z03uipZPoMAfLa67NEXpdApPyEgHQpd29CY7NYe15Xg64%2F285LeB%2F5Ab24PI9U3vOM5OqO29THbkE86PojnKErZobtQMRlzaoZyCxVB7ZqEcAcTDdZof6iVf6pLdDd5XeAfbGwxxOgVcHIrg4lJ4LyDQQp2xvLBqlMhxcc9z92o2fjoxTZVJYZC2y3rU1B3GUg37haQLtf9ZXrnZnby%2FzH09kQV%2BruKh9i%2BHElEykh3uzDg8b10B9Hk1R70xsFFe9ygW8zpGLVBCDXCl%2F4wQuhsk2g2%2BMFHnxksQkFR0eJ60GbjKWUugKhdATmXlI5nBSrPGzJX6ZYgmrl3idKFm1tWJsCHcyCoGBucjDDxVJ9xosB%2BqrTitedo17AmzBXb1tb3CY4UfguTtTZUpYNevVnfEZ0QfDDG4vq9BjqkAeBNQ3Cgf%2BKt5WRSW4uq2u%2BH%2F3CtH3m2Y%2FrPlySW%2B76CjavMat86zc%2BJj3FVZ0UR83PEAmTpWpazbHUJpUYo2VClljE9YkZ1saCWxiHCjx6tfBuIMTbMj3gaDeuVnmQHvl63hgjOJdspYNG9RZbRpL%2FPyuvexRUQF2wsxMnQQ%2BUcPP%2FOzUOdNUgiOrEavKK9KOfPogP3kUk4Z%2Bw18xcTDNgjgS%2Bg&X-Amz-Signature=ef0cd2bbc5d59415c7c05ad62c35a7495e40c1adf711b0ea122985d7f23b1bce&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S5YPWZC%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCL%2BqM%2FjMQyAm4quiP%2Bh56CLDGXnL8sAfJEkJaeJN4d7AIhAJqU67axDJyGLOXIAkS6W7g02B%2BIFgI%2F%2BjvMPgkTmk%2FYKv8DCFcQABoMNjM3NDIzMTgzODA1IgyZUlX8vIpOisk8KFYq3ANj%2FA49A%2B3OVTqjuwliRcDwnt4aw1WQqF5wmHwqs2KTEAT6BnCqPLmqwKBPCSVT9ZZxsq%2B5Fxbd%2BW31SDMmzlvYQO8GIyW7dcBkBaa4qL%2BBH1VmJUT3KYooES6SVUlPVz%2Bx2pAHVqQMxL41TnL0Ruk4FeP4Wm5zU2Tp1NCxzxxmujem9IEc1mD80abIEDUtiuWUT8SuiySxrSxSfPQCIHGg4rVucWww7Z03uipZPoMAfLa67NEXpdApPyEgHQpd29CY7NYe15Xg64%2F285LeB%2F5Ab24PI9U3vOM5OqO29THbkE86PojnKErZobtQMRlzaoZyCxVB7ZqEcAcTDdZof6iVf6pLdDd5XeAfbGwxxOgVcHIrg4lJ4LyDQQp2xvLBqlMhxcc9z92o2fjoxTZVJYZC2y3rU1B3GUg37haQLtf9ZXrnZnby%2FzH09kQV%2BruKh9i%2BHElEykh3uzDg8b10B9Hk1R70xsFFe9ygW8zpGLVBCDXCl%2F4wQuhsk2g2%2BMFHnxksQkFR0eJ60GbjKWUugKhdATmXlI5nBSrPGzJX6ZYgmrl3idKFm1tWJsCHcyCoGBucjDDxVJ9xosB%2BqrTitedo17AmzBXb1tb3CY4UfguTtTZUpYNevVnfEZ0QfDDG4vq9BjqkAeBNQ3Cgf%2BKt5WRSW4uq2u%2BH%2F3CtH3m2Y%2FrPlySW%2B76CjavMat86zc%2BJj3FVZ0UR83PEAmTpWpazbHUJpUYo2VClljE9YkZ1saCWxiHCjx6tfBuIMTbMj3gaDeuVnmQHvl63hgjOJdspYNG9RZbRpL%2FPyuvexRUQF2wsxMnQQ%2BUcPP%2FOzUOdNUgiOrEavKK9KOfPogP3kUk4Z%2Bw18xcTDNgjgS%2Bg&X-Amz-Signature=c95ab3bde494aab99c78c723e9f258a4eadc937a230f1fd7de31d1cc9a431ee8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S5YPWZC%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCL%2BqM%2FjMQyAm4quiP%2Bh56CLDGXnL8sAfJEkJaeJN4d7AIhAJqU67axDJyGLOXIAkS6W7g02B%2BIFgI%2F%2BjvMPgkTmk%2FYKv8DCFcQABoMNjM3NDIzMTgzODA1IgyZUlX8vIpOisk8KFYq3ANj%2FA49A%2B3OVTqjuwliRcDwnt4aw1WQqF5wmHwqs2KTEAT6BnCqPLmqwKBPCSVT9ZZxsq%2B5Fxbd%2BW31SDMmzlvYQO8GIyW7dcBkBaa4qL%2BBH1VmJUT3KYooES6SVUlPVz%2Bx2pAHVqQMxL41TnL0Ruk4FeP4Wm5zU2Tp1NCxzxxmujem9IEc1mD80abIEDUtiuWUT8SuiySxrSxSfPQCIHGg4rVucWww7Z03uipZPoMAfLa67NEXpdApPyEgHQpd29CY7NYe15Xg64%2F285LeB%2F5Ab24PI9U3vOM5OqO29THbkE86PojnKErZobtQMRlzaoZyCxVB7ZqEcAcTDdZof6iVf6pLdDd5XeAfbGwxxOgVcHIrg4lJ4LyDQQp2xvLBqlMhxcc9z92o2fjoxTZVJYZC2y3rU1B3GUg37haQLtf9ZXrnZnby%2FzH09kQV%2BruKh9i%2BHElEykh3uzDg8b10B9Hk1R70xsFFe9ygW8zpGLVBCDXCl%2F4wQuhsk2g2%2BMFHnxksQkFR0eJ60GbjKWUugKhdATmXlI5nBSrPGzJX6ZYgmrl3idKFm1tWJsCHcyCoGBucjDDxVJ9xosB%2BqrTitedo17AmzBXb1tb3CY4UfguTtTZUpYNevVnfEZ0QfDDG4vq9BjqkAeBNQ3Cgf%2BKt5WRSW4uq2u%2BH%2F3CtH3m2Y%2FrPlySW%2B76CjavMat86zc%2BJj3FVZ0UR83PEAmTpWpazbHUJpUYo2VClljE9YkZ1saCWxiHCjx6tfBuIMTbMj3gaDeuVnmQHvl63hgjOJdspYNG9RZbRpL%2FPyuvexRUQF2wsxMnQQ%2BUcPP%2FOzUOdNUgiOrEavKK9KOfPogP3kUk4Z%2Bw18xcTDNgjgS%2Bg&X-Amz-Signature=ea8a5883bcf0d2463e75bcdbf9554d1bae36c2796f09293eff567a410fa39170&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
