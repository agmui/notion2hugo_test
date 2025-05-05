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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644IIPL7U%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICf1dolRAgLMIz5IOHZtsBMca2iDWHJCZzxEq44dFpt5AiEAm0JBylnJodeqU0stxaODN5pkYy6BjwCEC0GiwnNGCuYq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDMRbjXLlOcA6Vv0M7yrcA7NBGG%2FEsMB3WamlDrPfhLRy%2FAqlyNv%2BB6OtNrgfVQPywY0BHAjEiz9laYlnGV3FGM2y9N%2F2IiAkCqre%2Ffd98B4Q5ISWjnVcMvfrGGTRyroBZvKBSGu608w%2FFjQHheRF8WKsvF3J2rIPhEer5q4DEXQ%2BBuhguLDPboNjApQCLLt8WBVGj%2BLn0idW9ap0BFysJGATMFg3Xdu7XtBkezJ9OFlu2%2Fin2w7UiVqnyvqqHrTJmiZBwH%2FLhcjo3mOV6GU%2FWhjU517LcYzQGGYabqmPkCdsjcobEAgwT6qz9zt2S2gxA9DeWT0315HLUoyEGHEJteLSG8Y4DZuBwENn5S1uO6dbpagMbAFnPd03y5IoIorI19gkLweBywzMI%2FeglQXfsnnBcebaZ%2Bzp9yrXUMPyYvpTfY0r%2BtRkJwo4ysqNbAsjd8gvqT505pY3MjXK0CBJSmpNJGduxuTKxGI1u73ffBnqCcNFLiuMoIE1vcikFpU%2FvDEE8swE6uvdKCGjig1Iof%2BnbWliKXdjRgaGGD4iRtPVDwxUA%2BTntONDAtE6XpL4gApaO47TZf6tNMhgyBuGUO7ISYQZzJS%2FUODHjTqsyGyEtqQkn187lEIYx9rrz10axDlm81S9PW%2BpjohIMOv%2B5MAGOqUBkCuR8ULeCbSLz1twIwzbCWRo3nflHLXolzRQE%2B2d7BwYg2A%2FlyxvBCBTHW1BHqllFSn%2BtyEpywCcoRWpXOe5qazCzYnUpNN4PpA9uOcYCwSkmwjG23VAs1ThJYP85G57kRMGzYoD%2BsuYCrHh%2BdTu7ucL%2BidjL%2FgzbJg38H%2FVyY9Cj0UAqy44q%2BFkps2%2FNH8I1dHoJGDr3jyckE%2Bcm4aohCh3ca5%2F&X-Amz-Signature=38bb2207e9d5a3ab13092d7be6ed8fe4ab5d4be47dd41afecff6a2f957821d79&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644IIPL7U%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICf1dolRAgLMIz5IOHZtsBMca2iDWHJCZzxEq44dFpt5AiEAm0JBylnJodeqU0stxaODN5pkYy6BjwCEC0GiwnNGCuYq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDMRbjXLlOcA6Vv0M7yrcA7NBGG%2FEsMB3WamlDrPfhLRy%2FAqlyNv%2BB6OtNrgfVQPywY0BHAjEiz9laYlnGV3FGM2y9N%2F2IiAkCqre%2Ffd98B4Q5ISWjnVcMvfrGGTRyroBZvKBSGu608w%2FFjQHheRF8WKsvF3J2rIPhEer5q4DEXQ%2BBuhguLDPboNjApQCLLt8WBVGj%2BLn0idW9ap0BFysJGATMFg3Xdu7XtBkezJ9OFlu2%2Fin2w7UiVqnyvqqHrTJmiZBwH%2FLhcjo3mOV6GU%2FWhjU517LcYzQGGYabqmPkCdsjcobEAgwT6qz9zt2S2gxA9DeWT0315HLUoyEGHEJteLSG8Y4DZuBwENn5S1uO6dbpagMbAFnPd03y5IoIorI19gkLweBywzMI%2FeglQXfsnnBcebaZ%2Bzp9yrXUMPyYvpTfY0r%2BtRkJwo4ysqNbAsjd8gvqT505pY3MjXK0CBJSmpNJGduxuTKxGI1u73ffBnqCcNFLiuMoIE1vcikFpU%2FvDEE8swE6uvdKCGjig1Iof%2BnbWliKXdjRgaGGD4iRtPVDwxUA%2BTntONDAtE6XpL4gApaO47TZf6tNMhgyBuGUO7ISYQZzJS%2FUODHjTqsyGyEtqQkn187lEIYx9rrz10axDlm81S9PW%2BpjohIMOv%2B5MAGOqUBkCuR8ULeCbSLz1twIwzbCWRo3nflHLXolzRQE%2B2d7BwYg2A%2FlyxvBCBTHW1BHqllFSn%2BtyEpywCcoRWpXOe5qazCzYnUpNN4PpA9uOcYCwSkmwjG23VAs1ThJYP85G57kRMGzYoD%2BsuYCrHh%2BdTu7ucL%2BidjL%2FgzbJg38H%2FVyY9Cj0UAqy44q%2BFkps2%2FNH8I1dHoJGDr3jyckE%2Bcm4aohCh3ca5%2F&X-Amz-Signature=e3678dbcf1bbeda1ce53d2abf6c533210a630a592676e8d7a5740fe7d641cdd6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644IIPL7U%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICf1dolRAgLMIz5IOHZtsBMca2iDWHJCZzxEq44dFpt5AiEAm0JBylnJodeqU0stxaODN5pkYy6BjwCEC0GiwnNGCuYq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDMRbjXLlOcA6Vv0M7yrcA7NBGG%2FEsMB3WamlDrPfhLRy%2FAqlyNv%2BB6OtNrgfVQPywY0BHAjEiz9laYlnGV3FGM2y9N%2F2IiAkCqre%2Ffd98B4Q5ISWjnVcMvfrGGTRyroBZvKBSGu608w%2FFjQHheRF8WKsvF3J2rIPhEer5q4DEXQ%2BBuhguLDPboNjApQCLLt8WBVGj%2BLn0idW9ap0BFysJGATMFg3Xdu7XtBkezJ9OFlu2%2Fin2w7UiVqnyvqqHrTJmiZBwH%2FLhcjo3mOV6GU%2FWhjU517LcYzQGGYabqmPkCdsjcobEAgwT6qz9zt2S2gxA9DeWT0315HLUoyEGHEJteLSG8Y4DZuBwENn5S1uO6dbpagMbAFnPd03y5IoIorI19gkLweBywzMI%2FeglQXfsnnBcebaZ%2Bzp9yrXUMPyYvpTfY0r%2BtRkJwo4ysqNbAsjd8gvqT505pY3MjXK0CBJSmpNJGduxuTKxGI1u73ffBnqCcNFLiuMoIE1vcikFpU%2FvDEE8swE6uvdKCGjig1Iof%2BnbWliKXdjRgaGGD4iRtPVDwxUA%2BTntONDAtE6XpL4gApaO47TZf6tNMhgyBuGUO7ISYQZzJS%2FUODHjTqsyGyEtqQkn187lEIYx9rrz10axDlm81S9PW%2BpjohIMOv%2B5MAGOqUBkCuR8ULeCbSLz1twIwzbCWRo3nflHLXolzRQE%2B2d7BwYg2A%2FlyxvBCBTHW1BHqllFSn%2BtyEpywCcoRWpXOe5qazCzYnUpNN4PpA9uOcYCwSkmwjG23VAs1ThJYP85G57kRMGzYoD%2BsuYCrHh%2BdTu7ucL%2BidjL%2FgzbJg38H%2FVyY9Cj0UAqy44q%2BFkps2%2FNH8I1dHoJGDr3jyckE%2Bcm4aohCh3ca5%2F&X-Amz-Signature=65a5a56f3d9029f9d030b54618aee5f5d7543e022e3f6f1e6921d41fc821cf0d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
