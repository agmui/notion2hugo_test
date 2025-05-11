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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZXEVDZT%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDExjeBqhpD%2B4o8QCItOqI7zw8WqVFOVmy2cOA43H2iygIhAPaexS0b3jKVOsKoqs836TZofOczFj1lIf5XOuEXRvZBKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTf9kogBl8ipbIVEwq3ANzO7yTHSqvQbKPy%2BOIyYcBXS3dqvgPSef7%2BeiCOTiFchNp0XbYmtJAC%2Bto%2FsMxLWxnzI1FGx1t1npsFOeRPfEEGjQEP1Qzt1vKhEEczAUPv%2FyRQ9MFohbkfLF%2ByK9FC2ltpGJgbZxX6%2FuAS2PpS6IorgcvNZK0vhqbRd8rmmeGXfiL6BBznVEbOtZn%2FbAGrPxh%2BdWlyhAN%2Bk%2FJ6SjfmCiZo3YOXQW7Rr%2BB6QIGRqQ1IBvQ6rsKLO3BkRC1UDIiPLG%2BT2LcaPYrLu2GIV3N02JdeQmSHvf8YlZsc7iYJ4aPbFlf5etyfv8b9Qc5lp8nsA4yQodgmzSVabzTsU0yNfCzdE7aPkPdWdenOBnwVRqXtiHOqGYNrQo8L3YY%2Fsg2dnrIPd25a35dDYyrZ0b3CQKM1ahc24deqIqxyTwITuPbJs4q0A3dpDr0szFUzbsZirLydXz0YAs%2BE%2BqfYPr2FQntiQ%2BQPIqepYfOtO0wCd8hhHJE2FhCX2oOKc94LxAIJytbeBOkEHlVJAVAqpht9%2BkqrYQXMZyQJ4eKJE8yCZfu%2FQI0CG7VdM%2BrbElsL%2FMHOlHtdnQc7dWzeL3IgXsQEYnhNz3XNuRPFgnV9ZXgoCgBG5NGwu5tBHw77IYLCTCN7IDBBjqkAQSRhPGRWxqzlu6Udig73Tfk7FPq5npfwb6w%2B0CZLGDlF7px%2F0ES%2B3ZWa25wfWUxB9n2DLH7f%2FHu4KqFEquZ75xOSmCafop%2FzALHtvEa715CcajEVfzNBbkTKqq9Vs3QNZwN5htxyFpBNVcGTj2%2BeUvm%2BeioRzDvEapeNrUn8u4TFBNdDWem10DUZiaQsgC8R5mWGMBDuX3Yyt8U%2FR4I%2FlnVVPSy&X-Amz-Signature=e422c307218fbcd00d9e3f75c929a9920599c74ea0be568a53b62da1e7b582be&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZXEVDZT%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDExjeBqhpD%2B4o8QCItOqI7zw8WqVFOVmy2cOA43H2iygIhAPaexS0b3jKVOsKoqs836TZofOczFj1lIf5XOuEXRvZBKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTf9kogBl8ipbIVEwq3ANzO7yTHSqvQbKPy%2BOIyYcBXS3dqvgPSef7%2BeiCOTiFchNp0XbYmtJAC%2Bto%2FsMxLWxnzI1FGx1t1npsFOeRPfEEGjQEP1Qzt1vKhEEczAUPv%2FyRQ9MFohbkfLF%2ByK9FC2ltpGJgbZxX6%2FuAS2PpS6IorgcvNZK0vhqbRd8rmmeGXfiL6BBznVEbOtZn%2FbAGrPxh%2BdWlyhAN%2Bk%2FJ6SjfmCiZo3YOXQW7Rr%2BB6QIGRqQ1IBvQ6rsKLO3BkRC1UDIiPLG%2BT2LcaPYrLu2GIV3N02JdeQmSHvf8YlZsc7iYJ4aPbFlf5etyfv8b9Qc5lp8nsA4yQodgmzSVabzTsU0yNfCzdE7aPkPdWdenOBnwVRqXtiHOqGYNrQo8L3YY%2Fsg2dnrIPd25a35dDYyrZ0b3CQKM1ahc24deqIqxyTwITuPbJs4q0A3dpDr0szFUzbsZirLydXz0YAs%2BE%2BqfYPr2FQntiQ%2BQPIqepYfOtO0wCd8hhHJE2FhCX2oOKc94LxAIJytbeBOkEHlVJAVAqpht9%2BkqrYQXMZyQJ4eKJE8yCZfu%2FQI0CG7VdM%2BrbElsL%2FMHOlHtdnQc7dWzeL3IgXsQEYnhNz3XNuRPFgnV9ZXgoCgBG5NGwu5tBHw77IYLCTCN7IDBBjqkAQSRhPGRWxqzlu6Udig73Tfk7FPq5npfwb6w%2B0CZLGDlF7px%2F0ES%2B3ZWa25wfWUxB9n2DLH7f%2FHu4KqFEquZ75xOSmCafop%2FzALHtvEa715CcajEVfzNBbkTKqq9Vs3QNZwN5htxyFpBNVcGTj2%2BeUvm%2BeioRzDvEapeNrUn8u4TFBNdDWem10DUZiaQsgC8R5mWGMBDuX3Yyt8U%2FR4I%2FlnVVPSy&X-Amz-Signature=1f921650851aaf51bc1602fb6c83c90e12d6739b5c003ea7a913f4fc5c2998df&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZXEVDZT%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDExjeBqhpD%2B4o8QCItOqI7zw8WqVFOVmy2cOA43H2iygIhAPaexS0b3jKVOsKoqs836TZofOczFj1lIf5XOuEXRvZBKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTf9kogBl8ipbIVEwq3ANzO7yTHSqvQbKPy%2BOIyYcBXS3dqvgPSef7%2BeiCOTiFchNp0XbYmtJAC%2Bto%2FsMxLWxnzI1FGx1t1npsFOeRPfEEGjQEP1Qzt1vKhEEczAUPv%2FyRQ9MFohbkfLF%2ByK9FC2ltpGJgbZxX6%2FuAS2PpS6IorgcvNZK0vhqbRd8rmmeGXfiL6BBznVEbOtZn%2FbAGrPxh%2BdWlyhAN%2Bk%2FJ6SjfmCiZo3YOXQW7Rr%2BB6QIGRqQ1IBvQ6rsKLO3BkRC1UDIiPLG%2BT2LcaPYrLu2GIV3N02JdeQmSHvf8YlZsc7iYJ4aPbFlf5etyfv8b9Qc5lp8nsA4yQodgmzSVabzTsU0yNfCzdE7aPkPdWdenOBnwVRqXtiHOqGYNrQo8L3YY%2Fsg2dnrIPd25a35dDYyrZ0b3CQKM1ahc24deqIqxyTwITuPbJs4q0A3dpDr0szFUzbsZirLydXz0YAs%2BE%2BqfYPr2FQntiQ%2BQPIqepYfOtO0wCd8hhHJE2FhCX2oOKc94LxAIJytbeBOkEHlVJAVAqpht9%2BkqrYQXMZyQJ4eKJE8yCZfu%2FQI0CG7VdM%2BrbElsL%2FMHOlHtdnQc7dWzeL3IgXsQEYnhNz3XNuRPFgnV9ZXgoCgBG5NGwu5tBHw77IYLCTCN7IDBBjqkAQSRhPGRWxqzlu6Udig73Tfk7FPq5npfwb6w%2B0CZLGDlF7px%2F0ES%2B3ZWa25wfWUxB9n2DLH7f%2FHu4KqFEquZ75xOSmCafop%2FzALHtvEa715CcajEVfzNBbkTKqq9Vs3QNZwN5htxyFpBNVcGTj2%2BeUvm%2BeioRzDvEapeNrUn8u4TFBNdDWem10DUZiaQsgC8R5mWGMBDuX3Yyt8U%2FR4I%2FlnVVPSy&X-Amz-Signature=308dc55fef6b405d4c91f977a9331285993ad0354a69f93bad2c3e059317dd22&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
