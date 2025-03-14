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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664F67PX2%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnwjEDYevagSv%2FL3edmwfzyXaak9N4GVZQM7csZ%2BtS4gIhAOb0jAUj4aia4S81A0J74lELcYI7XDOkb9kfsU5dM%2BHiKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuO%2B1D8015%2BuhTMrAq3AMtJ9KNAsxGxiRYMGT0e2kSGewsfBOuBYgs6cyDRjKzkffWK0NM54%2FSwNAAwM36WRBxE%2FatoE79JQbmE1811L8dKYnyi9437gZk5J6%2BygVEjTC1zWLdg4ZnmLqMSVKbcB06lwSXnE1RiS0kcJ40GtKhjqOCErIo26epeom%2FFqFATCXNvAHrhWB3PQ6YrB6%2BkVuQw5CXyKRM%2B7WXJmyeO1jSd1aRwarWIYfjofvZtesKTyDTfrshpnjB3W1HnZS1WxHsoWt0hULXBYNQ8o7kKP%2F4tTxoCnApTIkdrFh44rtr3%2FWjelGWO8dwT3mIdbhPmDWqKhMJx8ctswXZHbNnFkGQeqwuRL8qmVyJxMa3MYqUU%2FMN9c6r6ZYsYHGIyJMa6eASql1%2FsW8sHN0qS9ZwiNfXanNtEmOsVGvFeL7WHfivVRu4KcMCos5rPvOjR%2BrFkac69RqnA6p5Cb045IO70yAIetCTL9G6%2BR3wR5ZWMZeLk%2BwcdmU89RcNa7c4CH3CQK6KfxHARfrSamQ7nWfwbJbbHrDppuGwN%2FhO83Nj1NWSVNCz2LaVgdWC2MkgKAo7%2FvJEWs6QJKol3pEtspqfccW%2F2wKazm1los8wq63LCqclVkj5sVEecCu1iUu7zjCAudC%2BBjqkAQDXG%2B9JfO5NHmqidi3i%2FUC3%2FssfdENWp9ZO64VjngksJn0viXDSxt%2FZhwqwFDvPbeldY%2Bz7u35fvG185jOsq8pSyvdJnVCDrwWJZl06RkWNOrojH5nERxExdLglSnSRLC9JREnP1%2BSwMRWhlBlhu55LFAtn%2B1p3rXiGhVa9d2RiJ3QrMEoRDLiKmAOhNX4bRBenEEPRvtAarav9CIxza%2B%2FxVPLc&X-Amz-Signature=c76ccca344300c1a72cab5b664e44b5aca7d8cce5401e023f8c30e3c7e371f8b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664F67PX2%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnwjEDYevagSv%2FL3edmwfzyXaak9N4GVZQM7csZ%2BtS4gIhAOb0jAUj4aia4S81A0J74lELcYI7XDOkb9kfsU5dM%2BHiKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuO%2B1D8015%2BuhTMrAq3AMtJ9KNAsxGxiRYMGT0e2kSGewsfBOuBYgs6cyDRjKzkffWK0NM54%2FSwNAAwM36WRBxE%2FatoE79JQbmE1811L8dKYnyi9437gZk5J6%2BygVEjTC1zWLdg4ZnmLqMSVKbcB06lwSXnE1RiS0kcJ40GtKhjqOCErIo26epeom%2FFqFATCXNvAHrhWB3PQ6YrB6%2BkVuQw5CXyKRM%2B7WXJmyeO1jSd1aRwarWIYfjofvZtesKTyDTfrshpnjB3W1HnZS1WxHsoWt0hULXBYNQ8o7kKP%2F4tTxoCnApTIkdrFh44rtr3%2FWjelGWO8dwT3mIdbhPmDWqKhMJx8ctswXZHbNnFkGQeqwuRL8qmVyJxMa3MYqUU%2FMN9c6r6ZYsYHGIyJMa6eASql1%2FsW8sHN0qS9ZwiNfXanNtEmOsVGvFeL7WHfivVRu4KcMCos5rPvOjR%2BrFkac69RqnA6p5Cb045IO70yAIetCTL9G6%2BR3wR5ZWMZeLk%2BwcdmU89RcNa7c4CH3CQK6KfxHARfrSamQ7nWfwbJbbHrDppuGwN%2FhO83Nj1NWSVNCz2LaVgdWC2MkgKAo7%2FvJEWs6QJKol3pEtspqfccW%2F2wKazm1los8wq63LCqclVkj5sVEecCu1iUu7zjCAudC%2BBjqkAQDXG%2B9JfO5NHmqidi3i%2FUC3%2FssfdENWp9ZO64VjngksJn0viXDSxt%2FZhwqwFDvPbeldY%2Bz7u35fvG185jOsq8pSyvdJnVCDrwWJZl06RkWNOrojH5nERxExdLglSnSRLC9JREnP1%2BSwMRWhlBlhu55LFAtn%2B1p3rXiGhVa9d2RiJ3QrMEoRDLiKmAOhNX4bRBenEEPRvtAarav9CIxza%2B%2FxVPLc&X-Amz-Signature=447e9190c8cc53a15e1627dad7f2b2165362856d9df52ac2075e72f3b40456dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664F67PX2%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnwjEDYevagSv%2FL3edmwfzyXaak9N4GVZQM7csZ%2BtS4gIhAOb0jAUj4aia4S81A0J74lELcYI7XDOkb9kfsU5dM%2BHiKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuO%2B1D8015%2BuhTMrAq3AMtJ9KNAsxGxiRYMGT0e2kSGewsfBOuBYgs6cyDRjKzkffWK0NM54%2FSwNAAwM36WRBxE%2FatoE79JQbmE1811L8dKYnyi9437gZk5J6%2BygVEjTC1zWLdg4ZnmLqMSVKbcB06lwSXnE1RiS0kcJ40GtKhjqOCErIo26epeom%2FFqFATCXNvAHrhWB3PQ6YrB6%2BkVuQw5CXyKRM%2B7WXJmyeO1jSd1aRwarWIYfjofvZtesKTyDTfrshpnjB3W1HnZS1WxHsoWt0hULXBYNQ8o7kKP%2F4tTxoCnApTIkdrFh44rtr3%2FWjelGWO8dwT3mIdbhPmDWqKhMJx8ctswXZHbNnFkGQeqwuRL8qmVyJxMa3MYqUU%2FMN9c6r6ZYsYHGIyJMa6eASql1%2FsW8sHN0qS9ZwiNfXanNtEmOsVGvFeL7WHfivVRu4KcMCos5rPvOjR%2BrFkac69RqnA6p5Cb045IO70yAIetCTL9G6%2BR3wR5ZWMZeLk%2BwcdmU89RcNa7c4CH3CQK6KfxHARfrSamQ7nWfwbJbbHrDppuGwN%2FhO83Nj1NWSVNCz2LaVgdWC2MkgKAo7%2FvJEWs6QJKol3pEtspqfccW%2F2wKazm1los8wq63LCqclVkj5sVEecCu1iUu7zjCAudC%2BBjqkAQDXG%2B9JfO5NHmqidi3i%2FUC3%2FssfdENWp9ZO64VjngksJn0viXDSxt%2FZhwqwFDvPbeldY%2Bz7u35fvG185jOsq8pSyvdJnVCDrwWJZl06RkWNOrojH5nERxExdLglSnSRLC9JREnP1%2BSwMRWhlBlhu55LFAtn%2B1p3rXiGhVa9d2RiJ3QrMEoRDLiKmAOhNX4bRBenEEPRvtAarav9CIxza%2B%2FxVPLc&X-Amz-Signature=a2ce68bb25746a875e490a55de383ed8498be97a09b559632882138468e83ddd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
