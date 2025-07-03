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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVBQ7ZIU%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEx2zJqTSeo0kN%2FDRy%2Bc4vK%2B6L9NRLZEIQwOshhanxTuAiEAt4iEYGgFXgG2NTsSEnTIWJgcUy0Mvy%2BdlnjUhRDF%2BF8q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDBbWgq2ZlMsbT%2FV2tircA1dVA7SPoutSOqsOalmvthqaOn2LwIQznY6eKlam0g8A9CUddYwt3%2B8y4scZb9DkO2Pye3IKAGwrptOrCpqHF%2FzwDnmFmhGqkrETlHXs2la%2FGOA%2Fzh%2BCSJdys0wxn6IMGS41O7RSjuCVHRpLQwNVovt%2BiXsPps88WWSCr2IOUHmOY3XQ75%2FppSLwmrf2Op0hbIbn%2FxTdOP%2FgNJNw72Y%2FLnU%2FOCRNFhuhcdTWUeEEIdFHpvlpponmxx%2FRTdmIEnLHOsYHeQ52CKAuRw6XXNgfNjKHr7NAnk7%2B49nJYUiMvTXukmgaTwn0r%2FSsbbtzqPIy16NPrG0YOc6OyEbyOq5U7PxDtZ4BVOzS7Nh538tMIJmA%2BRlM9tGtJhkpzRdbtfVDP6IDdrOMIa9sssKf2EIcbN8WdXTZuF1%2BCqZdRfCq7oPFnT7pnrrOG4SSv5oqu%2F1QR%2FQ31L7%2Fbn2bo8zc3dEWjTTbwe0G%2BcLFiSIvh7xZgitDyq4iPElXDohcWMDljYGpXEhmO6sS%2FG%2Fm0JnLO4pJhW3WHLvENabURwzKaq5mAbZwz0CwAJ%2FyazroIcRQYip2fCZEe151VlCsE0LrB5Y8P7RKP4Okw4Cb7ZdFNey5sCw%2FuzP5PEGSv1DHFMLWMLK3mcMGOqUBPGNrJdie6cifFwq%2B60%2F1Si2C00CjpGkHWT4AN0idXfkOA0QdRfQnpIg3Wh7idbbr4Mfu52eb9AsXEuB1eMCSfepRfL%2Fwe6sNSPdieQAT5rm2Yyou6m2fXvpi%2FY5W964a6r8FO5bTrmoQhwKaeJBnl8BUbDMpdIkADLFeV6oNJOXeEQjgtftEkEMnx7YSehjeDhYG7wLljPO2MfsO%2FU%2FkSCvJC2ER&X-Amz-Signature=8ff63302b74903b60b26d4eedb34194bcb9782d08ae5936bb8cebfafdc5f954d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVBQ7ZIU%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEx2zJqTSeo0kN%2FDRy%2Bc4vK%2B6L9NRLZEIQwOshhanxTuAiEAt4iEYGgFXgG2NTsSEnTIWJgcUy0Mvy%2BdlnjUhRDF%2BF8q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDBbWgq2ZlMsbT%2FV2tircA1dVA7SPoutSOqsOalmvthqaOn2LwIQznY6eKlam0g8A9CUddYwt3%2B8y4scZb9DkO2Pye3IKAGwrptOrCpqHF%2FzwDnmFmhGqkrETlHXs2la%2FGOA%2Fzh%2BCSJdys0wxn6IMGS41O7RSjuCVHRpLQwNVovt%2BiXsPps88WWSCr2IOUHmOY3XQ75%2FppSLwmrf2Op0hbIbn%2FxTdOP%2FgNJNw72Y%2FLnU%2FOCRNFhuhcdTWUeEEIdFHpvlpponmxx%2FRTdmIEnLHOsYHeQ52CKAuRw6XXNgfNjKHr7NAnk7%2B49nJYUiMvTXukmgaTwn0r%2FSsbbtzqPIy16NPrG0YOc6OyEbyOq5U7PxDtZ4BVOzS7Nh538tMIJmA%2BRlM9tGtJhkpzRdbtfVDP6IDdrOMIa9sssKf2EIcbN8WdXTZuF1%2BCqZdRfCq7oPFnT7pnrrOG4SSv5oqu%2F1QR%2FQ31L7%2Fbn2bo8zc3dEWjTTbwe0G%2BcLFiSIvh7xZgitDyq4iPElXDohcWMDljYGpXEhmO6sS%2FG%2Fm0JnLO4pJhW3WHLvENabURwzKaq5mAbZwz0CwAJ%2FyazroIcRQYip2fCZEe151VlCsE0LrB5Y8P7RKP4Okw4Cb7ZdFNey5sCw%2FuzP5PEGSv1DHFMLWMLK3mcMGOqUBPGNrJdie6cifFwq%2B60%2F1Si2C00CjpGkHWT4AN0idXfkOA0QdRfQnpIg3Wh7idbbr4Mfu52eb9AsXEuB1eMCSfepRfL%2Fwe6sNSPdieQAT5rm2Yyou6m2fXvpi%2FY5W964a6r8FO5bTrmoQhwKaeJBnl8BUbDMpdIkADLFeV6oNJOXeEQjgtftEkEMnx7YSehjeDhYG7wLljPO2MfsO%2FU%2FkSCvJC2ER&X-Amz-Signature=c7ad665487bd37e5d26e7554cd63e409f748aa136973e4b3d0bbe74ae78e6c1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVBQ7ZIU%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEx2zJqTSeo0kN%2FDRy%2Bc4vK%2B6L9NRLZEIQwOshhanxTuAiEAt4iEYGgFXgG2NTsSEnTIWJgcUy0Mvy%2BdlnjUhRDF%2BF8q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDBbWgq2ZlMsbT%2FV2tircA1dVA7SPoutSOqsOalmvthqaOn2LwIQznY6eKlam0g8A9CUddYwt3%2B8y4scZb9DkO2Pye3IKAGwrptOrCpqHF%2FzwDnmFmhGqkrETlHXs2la%2FGOA%2Fzh%2BCSJdys0wxn6IMGS41O7RSjuCVHRpLQwNVovt%2BiXsPps88WWSCr2IOUHmOY3XQ75%2FppSLwmrf2Op0hbIbn%2FxTdOP%2FgNJNw72Y%2FLnU%2FOCRNFhuhcdTWUeEEIdFHpvlpponmxx%2FRTdmIEnLHOsYHeQ52CKAuRw6XXNgfNjKHr7NAnk7%2B49nJYUiMvTXukmgaTwn0r%2FSsbbtzqPIy16NPrG0YOc6OyEbyOq5U7PxDtZ4BVOzS7Nh538tMIJmA%2BRlM9tGtJhkpzRdbtfVDP6IDdrOMIa9sssKf2EIcbN8WdXTZuF1%2BCqZdRfCq7oPFnT7pnrrOG4SSv5oqu%2F1QR%2FQ31L7%2Fbn2bo8zc3dEWjTTbwe0G%2BcLFiSIvh7xZgitDyq4iPElXDohcWMDljYGpXEhmO6sS%2FG%2Fm0JnLO4pJhW3WHLvENabURwzKaq5mAbZwz0CwAJ%2FyazroIcRQYip2fCZEe151VlCsE0LrB5Y8P7RKP4Okw4Cb7ZdFNey5sCw%2FuzP5PEGSv1DHFMLWMLK3mcMGOqUBPGNrJdie6cifFwq%2B60%2F1Si2C00CjpGkHWT4AN0idXfkOA0QdRfQnpIg3Wh7idbbr4Mfu52eb9AsXEuB1eMCSfepRfL%2Fwe6sNSPdieQAT5rm2Yyou6m2fXvpi%2FY5W964a6r8FO5bTrmoQhwKaeJBnl8BUbDMpdIkADLFeV6oNJOXeEQjgtftEkEMnx7YSehjeDhYG7wLljPO2MfsO%2FU%2FkSCvJC2ER&X-Amz-Signature=6edfb8a5f9c16bb2be5a3c85ee2d12b401e69ebeecbd2750b75ecc7b87537d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
