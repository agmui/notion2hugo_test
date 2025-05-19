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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EKFMIRF%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtpEk7cdcyu3SZiGvxXJ5J5lDlzMvqWAXMaWhccLAr2QIhAJYiCOCFIFRsTmsiMDgyuc%2BD6EI3%2FF%2Fz%2BB8%2BU2GFHr4sKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfI7W8YtJGPetk9Lgq3ANxczr7BLtU42%2Fm2r9nnkTF8ky65sZm0jJYPunuQGEi3B3c%2Ff%2F8plcJ6E0bPsnF%2BWV6MusH3%2FnSEYxQpvpUTicu9m7rRTibjWMPcQx0ezwgEvmM0lgPtdTREcq9r2hjJsoqvKPvm%2FI%2BDn53K7lNsSCwAiSpa1h2NdjXYx9u%2BoAXb91heNaHpeZ8erJAPyTAyfZmDqVD68mQivEd4nezGn5joegDuZaRdVsu7TpAHVd5dIWLGbHB93eT%2BsOMGq6hY5Njcl3%2FHtmh1v9R0fOSWxaIoRC4L0hM1EcA%2B7sJB5o03OrJOIDSmP%2B%2F6zx4q3docxtATxIQHIkD49u697A17qnv%2BbIoQ0EcdNxnlzvc7zKitWIPYeNUJftOOd%2FZcGnj0YZkUXgft5Rr4osTNJSEzS3dB33ohZuXArEvvB%2BF91OeYyhMRGQeb0IlLJJ1BNNIOAHvjmhoy8rHcQcFXXP3guHSVVboU9eJ6nIeKbRwdwpiHStKTaQHL6MvMouv4Ec3fTTnXePWd6XVU%2FWOIoOMWm3%2FKXaAdfMrnm7Xx6VeXhzcDwK7pCkCW9YfEXm%2BaxG5vjUEKFiO8QVDkMYFiPS2YGM52qvKCLt7RBtL%2FDHk0L%2BSiZJA3tHoLdaMcusL0zDMsazBBjqkAWXMmTQu0bBiCKnfJcG9e0etTznL83jtjdGJOB0ocV7qkcWWWkhna2utFTI1snDW8BBkQpMu%2FFzrGP8hHIPYaDPRP33A67a0ofIO7HzSZcQXGj1xveG83xqnrbDOZQbYVIW6WwoMIb%2FhFJfyJHnICTpghdpxD9xTH%2B8g6WoMPnQaFs4peB%2BcQuA65YNoc8jCNh5QJoOxhNSO%2FTDn7VyA18Dcsljr&X-Amz-Signature=b5e7d6a9e2dcfb46503f74a10f92355632d62bb7de66add35a24740b627a08f7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EKFMIRF%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtpEk7cdcyu3SZiGvxXJ5J5lDlzMvqWAXMaWhccLAr2QIhAJYiCOCFIFRsTmsiMDgyuc%2BD6EI3%2FF%2Fz%2BB8%2BU2GFHr4sKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfI7W8YtJGPetk9Lgq3ANxczr7BLtU42%2Fm2r9nnkTF8ky65sZm0jJYPunuQGEi3B3c%2Ff%2F8plcJ6E0bPsnF%2BWV6MusH3%2FnSEYxQpvpUTicu9m7rRTibjWMPcQx0ezwgEvmM0lgPtdTREcq9r2hjJsoqvKPvm%2FI%2BDn53K7lNsSCwAiSpa1h2NdjXYx9u%2BoAXb91heNaHpeZ8erJAPyTAyfZmDqVD68mQivEd4nezGn5joegDuZaRdVsu7TpAHVd5dIWLGbHB93eT%2BsOMGq6hY5Njcl3%2FHtmh1v9R0fOSWxaIoRC4L0hM1EcA%2B7sJB5o03OrJOIDSmP%2B%2F6zx4q3docxtATxIQHIkD49u697A17qnv%2BbIoQ0EcdNxnlzvc7zKitWIPYeNUJftOOd%2FZcGnj0YZkUXgft5Rr4osTNJSEzS3dB33ohZuXArEvvB%2BF91OeYyhMRGQeb0IlLJJ1BNNIOAHvjmhoy8rHcQcFXXP3guHSVVboU9eJ6nIeKbRwdwpiHStKTaQHL6MvMouv4Ec3fTTnXePWd6XVU%2FWOIoOMWm3%2FKXaAdfMrnm7Xx6VeXhzcDwK7pCkCW9YfEXm%2BaxG5vjUEKFiO8QVDkMYFiPS2YGM52qvKCLt7RBtL%2FDHk0L%2BSiZJA3tHoLdaMcusL0zDMsazBBjqkAWXMmTQu0bBiCKnfJcG9e0etTznL83jtjdGJOB0ocV7qkcWWWkhna2utFTI1snDW8BBkQpMu%2FFzrGP8hHIPYaDPRP33A67a0ofIO7HzSZcQXGj1xveG83xqnrbDOZQbYVIW6WwoMIb%2FhFJfyJHnICTpghdpxD9xTH%2B8g6WoMPnQaFs4peB%2BcQuA65YNoc8jCNh5QJoOxhNSO%2FTDn7VyA18Dcsljr&X-Amz-Signature=3a84edb562494f0c120dccb157ee5e62b052b0056873eba937e8e95f2c9ad46e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EKFMIRF%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtpEk7cdcyu3SZiGvxXJ5J5lDlzMvqWAXMaWhccLAr2QIhAJYiCOCFIFRsTmsiMDgyuc%2BD6EI3%2FF%2Fz%2BB8%2BU2GFHr4sKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfI7W8YtJGPetk9Lgq3ANxczr7BLtU42%2Fm2r9nnkTF8ky65sZm0jJYPunuQGEi3B3c%2Ff%2F8plcJ6E0bPsnF%2BWV6MusH3%2FnSEYxQpvpUTicu9m7rRTibjWMPcQx0ezwgEvmM0lgPtdTREcq9r2hjJsoqvKPvm%2FI%2BDn53K7lNsSCwAiSpa1h2NdjXYx9u%2BoAXb91heNaHpeZ8erJAPyTAyfZmDqVD68mQivEd4nezGn5joegDuZaRdVsu7TpAHVd5dIWLGbHB93eT%2BsOMGq6hY5Njcl3%2FHtmh1v9R0fOSWxaIoRC4L0hM1EcA%2B7sJB5o03OrJOIDSmP%2B%2F6zx4q3docxtATxIQHIkD49u697A17qnv%2BbIoQ0EcdNxnlzvc7zKitWIPYeNUJftOOd%2FZcGnj0YZkUXgft5Rr4osTNJSEzS3dB33ohZuXArEvvB%2BF91OeYyhMRGQeb0IlLJJ1BNNIOAHvjmhoy8rHcQcFXXP3guHSVVboU9eJ6nIeKbRwdwpiHStKTaQHL6MvMouv4Ec3fTTnXePWd6XVU%2FWOIoOMWm3%2FKXaAdfMrnm7Xx6VeXhzcDwK7pCkCW9YfEXm%2BaxG5vjUEKFiO8QVDkMYFiPS2YGM52qvKCLt7RBtL%2FDHk0L%2BSiZJA3tHoLdaMcusL0zDMsazBBjqkAWXMmTQu0bBiCKnfJcG9e0etTznL83jtjdGJOB0ocV7qkcWWWkhna2utFTI1snDW8BBkQpMu%2FFzrGP8hHIPYaDPRP33A67a0ofIO7HzSZcQXGj1xveG83xqnrbDOZQbYVIW6WwoMIb%2FhFJfyJHnICTpghdpxD9xTH%2B8g6WoMPnQaFs4peB%2BcQuA65YNoc8jCNh5QJoOxhNSO%2FTDn7VyA18Dcsljr&X-Amz-Signature=f3084413a267544dceb5673475a479fde35c0489c94ec88245e86b4c9fbed545&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
