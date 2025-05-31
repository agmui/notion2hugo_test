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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F72YI7C%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmLHyHSrRMrTiRk27itSQf%2FR1X2gL7mAgYDw7EnX%2F4cAIhAJq2L9%2BMoQF%2BL5ShBMo6UF%2Fjb2bl9yaCc6Ot33ELm020KogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzx96aLyvqQBHIWUtYq3APCh4KLjlnHXrpMHHvyfrNFYDYgJfEMtjH9YMScbWJh7%2FwYuYvtO9Voyf1DngXsYQS1xrYGFvM4TyU0UdIAOdQpgtllkBuz8uJGvxKKBdyAnYP9iMK5pi8R58fDCovYxmv2j5n1sbd09rlgbOBiZghTGWFCMD7dUMcF%2B7tKpU3SK648hPs46UzoY%2FPmth4fAVuGpuMQUWmnMrL1JfJ7M0mIEC8j43nM4ZNvIJ4g5Z8SNPt2CNdeDaqsyve%2BC319vdez%2FIy24blnqGjCzDxlAOaywTmXwuvWvxXw1LA1tnScxHZiziCR0nuP04TJKgzyeRqdofctqEXxa8QNsEZT8d2WhV%2BaTLe95UbGqqPBv5ipr%2BQ69tBKZpZYEvCtutpDIx%2BVaAO7Gip1VBRNKWwAu3wS%2F8b8Cf0eCF4RSypZpO6Cj2mLlWcHLVC%2B1HZ3uoNH5alN4fU3KmEHTDUCcN0ROCkjC4F%2FdSeMqCRqSKJjbBqfz74lGEtI8NyWCGajZNo0kPDu6CWxlGRgbn%2FmXDaosubi1AfAQSJHyU%2BW0I7aZapewgaxqkELKOiJKzFkU3QbnZrn2J6Pi6dKSzAPp7zNKSbjxRqObaffE2rXFPKW9CZ6X4rDbhmCW6HTV5Zp6zCf8uzBBjqkAQBiNicriqQxu%2F1cn%2BXYuF9GilYTMWGEYLO5ZRamxFhFVl3Tq1D67R2yZFczr5Qg3OGOuBazko0EjxHNDQdq2MxcUD9pdfNg3QmnR2LPj%2FaaHNw2y8xDW0EbeyB3L%2FbKXPA4bSRunzuxIZlbnWiGYJKmUiovXnuWWxXxx%2FxbwFl2iNkg9wgs8ks29MHbE%2FZGyS1JiFwPcHF0RSBcXNEg3D67LmHl&X-Amz-Signature=e81ac387791ae30964215cd6589d59b013de1f0035c9fe4e817e3d9197a5fb20&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F72YI7C%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmLHyHSrRMrTiRk27itSQf%2FR1X2gL7mAgYDw7EnX%2F4cAIhAJq2L9%2BMoQF%2BL5ShBMo6UF%2Fjb2bl9yaCc6Ot33ELm020KogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzx96aLyvqQBHIWUtYq3APCh4KLjlnHXrpMHHvyfrNFYDYgJfEMtjH9YMScbWJh7%2FwYuYvtO9Voyf1DngXsYQS1xrYGFvM4TyU0UdIAOdQpgtllkBuz8uJGvxKKBdyAnYP9iMK5pi8R58fDCovYxmv2j5n1sbd09rlgbOBiZghTGWFCMD7dUMcF%2B7tKpU3SK648hPs46UzoY%2FPmth4fAVuGpuMQUWmnMrL1JfJ7M0mIEC8j43nM4ZNvIJ4g5Z8SNPt2CNdeDaqsyve%2BC319vdez%2FIy24blnqGjCzDxlAOaywTmXwuvWvxXw1LA1tnScxHZiziCR0nuP04TJKgzyeRqdofctqEXxa8QNsEZT8d2WhV%2BaTLe95UbGqqPBv5ipr%2BQ69tBKZpZYEvCtutpDIx%2BVaAO7Gip1VBRNKWwAu3wS%2F8b8Cf0eCF4RSypZpO6Cj2mLlWcHLVC%2B1HZ3uoNH5alN4fU3KmEHTDUCcN0ROCkjC4F%2FdSeMqCRqSKJjbBqfz74lGEtI8NyWCGajZNo0kPDu6CWxlGRgbn%2FmXDaosubi1AfAQSJHyU%2BW0I7aZapewgaxqkELKOiJKzFkU3QbnZrn2J6Pi6dKSzAPp7zNKSbjxRqObaffE2rXFPKW9CZ6X4rDbhmCW6HTV5Zp6zCf8uzBBjqkAQBiNicriqQxu%2F1cn%2BXYuF9GilYTMWGEYLO5ZRamxFhFVl3Tq1D67R2yZFczr5Qg3OGOuBazko0EjxHNDQdq2MxcUD9pdfNg3QmnR2LPj%2FaaHNw2y8xDW0EbeyB3L%2FbKXPA4bSRunzuxIZlbnWiGYJKmUiovXnuWWxXxx%2FxbwFl2iNkg9wgs8ks29MHbE%2FZGyS1JiFwPcHF0RSBcXNEg3D67LmHl&X-Amz-Signature=a3689f207b0691a305b905785ef41ca92d2d5e23ce6f11850a328f23261e4528&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F72YI7C%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmLHyHSrRMrTiRk27itSQf%2FR1X2gL7mAgYDw7EnX%2F4cAIhAJq2L9%2BMoQF%2BL5ShBMo6UF%2Fjb2bl9yaCc6Ot33ELm020KogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzx96aLyvqQBHIWUtYq3APCh4KLjlnHXrpMHHvyfrNFYDYgJfEMtjH9YMScbWJh7%2FwYuYvtO9Voyf1DngXsYQS1xrYGFvM4TyU0UdIAOdQpgtllkBuz8uJGvxKKBdyAnYP9iMK5pi8R58fDCovYxmv2j5n1sbd09rlgbOBiZghTGWFCMD7dUMcF%2B7tKpU3SK648hPs46UzoY%2FPmth4fAVuGpuMQUWmnMrL1JfJ7M0mIEC8j43nM4ZNvIJ4g5Z8SNPt2CNdeDaqsyve%2BC319vdez%2FIy24blnqGjCzDxlAOaywTmXwuvWvxXw1LA1tnScxHZiziCR0nuP04TJKgzyeRqdofctqEXxa8QNsEZT8d2WhV%2BaTLe95UbGqqPBv5ipr%2BQ69tBKZpZYEvCtutpDIx%2BVaAO7Gip1VBRNKWwAu3wS%2F8b8Cf0eCF4RSypZpO6Cj2mLlWcHLVC%2B1HZ3uoNH5alN4fU3KmEHTDUCcN0ROCkjC4F%2FdSeMqCRqSKJjbBqfz74lGEtI8NyWCGajZNo0kPDu6CWxlGRgbn%2FmXDaosubi1AfAQSJHyU%2BW0I7aZapewgaxqkELKOiJKzFkU3QbnZrn2J6Pi6dKSzAPp7zNKSbjxRqObaffE2rXFPKW9CZ6X4rDbhmCW6HTV5Zp6zCf8uzBBjqkAQBiNicriqQxu%2F1cn%2BXYuF9GilYTMWGEYLO5ZRamxFhFVl3Tq1D67R2yZFczr5Qg3OGOuBazko0EjxHNDQdq2MxcUD9pdfNg3QmnR2LPj%2FaaHNw2y8xDW0EbeyB3L%2FbKXPA4bSRunzuxIZlbnWiGYJKmUiovXnuWWxXxx%2FxbwFl2iNkg9wgs8ks29MHbE%2FZGyS1JiFwPcHF0RSBcXNEg3D67LmHl&X-Amz-Signature=489bed5f5a467bfd61ca9fe5c959f1aabdbab406e49d0c57934ec82944d5e7a5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
