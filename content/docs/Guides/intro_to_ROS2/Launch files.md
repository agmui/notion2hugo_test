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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVIILGNQ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIG%2B%2B2vFx2Fb0iO%2FGCIrnGs795E9%2FzeyRSGMlt%2F7G0nuTAiAHhEevCHW1Cub0dJLID6OIbvq4CaTSkDH5hvGYe2mg5iqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMckYw1wiAXxaHLpoKKtwDlYEePMN%2BXSvj40XpriEG4opeIwHllK9MLFZmQBSfQyfEZrOk5%2F5TUrKH9d%2F1ycUAJkQMPgwl9kiI0Ldu8r2BgdFtSaff8PnlXhEjsckwYb6CSNymJYalUzL%2FQXCJ3z2uSAbmLbwD6Ww%2BITUZ%2Fk%2BZNn4i5cbQY0bvFkALZtnYu6iLU1iKHnV%2F7dzpJbN3U59n8YoZQQUDFTMp5qRBD8NsXVJrIm2BjxFMJxl4HkE%2BwdbLEnncwmlNVnrkgIgAjMygM0Fhj0LhuGK8Sze3wVufFwBHd1NaaGv7puPxsSjcOmlcSrZCTg%2FJk5JhnGEVIuZPvoD6awU0AIwMO3RrDRHRGCnGmVetAISMLX3Mr9aDOkhD4Nmjl8wb9uAJQRyjGyfaWrc7Pnl%2BbrDZtY2DxEFG09NEtJmkh9T66jit2WIIGP29rh7xi45KOhAf3IyBQKcBLnk9B3e6ctI20DPNkQGMPlPm5XokCOGGBqWAi2U1IDKx3%2BXbRQm1rc75y%2FfdE5RxZbzKhpRmkITD977qk99TyGsLZ5sVKk6634QJjx1ad56yDmh5bCE342TxhVK70XK%2FVyDA2m9954QWspbLDPIhLSXPQR1RrBml%2FapLgKqeoSfIsO9HFxEi41QwMyEwnerpwwY6pgGBCfCATtMkxPf7d6IS08CEU%2F%2FbINqg3XJcISKNIMfih4FgGkgNPNE7%2Ff4cAjY0bMw12APxqxq5Pj3JeMKequ3jhAWRrHg07Q0RoCQPNC1ozqHBiXOe%2BdJtNcrALW1faPMkZL5arD4lbbGqPHYnAJo%2BNpzoFtQ6UR%2BwYBPWv9myQpbVUr430qhO63lOgWCbQwM7MoZqkUtBgvzsws2QW7pycIFIYsOf&X-Amz-Signature=305164f9913c257d04f03c25acc9bd8d999aabbff0a9a7dad6567c6e8ae324dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVIILGNQ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIG%2B%2B2vFx2Fb0iO%2FGCIrnGs795E9%2FzeyRSGMlt%2F7G0nuTAiAHhEevCHW1Cub0dJLID6OIbvq4CaTSkDH5hvGYe2mg5iqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMckYw1wiAXxaHLpoKKtwDlYEePMN%2BXSvj40XpriEG4opeIwHllK9MLFZmQBSfQyfEZrOk5%2F5TUrKH9d%2F1ycUAJkQMPgwl9kiI0Ldu8r2BgdFtSaff8PnlXhEjsckwYb6CSNymJYalUzL%2FQXCJ3z2uSAbmLbwD6Ww%2BITUZ%2Fk%2BZNn4i5cbQY0bvFkALZtnYu6iLU1iKHnV%2F7dzpJbN3U59n8YoZQQUDFTMp5qRBD8NsXVJrIm2BjxFMJxl4HkE%2BwdbLEnncwmlNVnrkgIgAjMygM0Fhj0LhuGK8Sze3wVufFwBHd1NaaGv7puPxsSjcOmlcSrZCTg%2FJk5JhnGEVIuZPvoD6awU0AIwMO3RrDRHRGCnGmVetAISMLX3Mr9aDOkhD4Nmjl8wb9uAJQRyjGyfaWrc7Pnl%2BbrDZtY2DxEFG09NEtJmkh9T66jit2WIIGP29rh7xi45KOhAf3IyBQKcBLnk9B3e6ctI20DPNkQGMPlPm5XokCOGGBqWAi2U1IDKx3%2BXbRQm1rc75y%2FfdE5RxZbzKhpRmkITD977qk99TyGsLZ5sVKk6634QJjx1ad56yDmh5bCE342TxhVK70XK%2FVyDA2m9954QWspbLDPIhLSXPQR1RrBml%2FapLgKqeoSfIsO9HFxEi41QwMyEwnerpwwY6pgGBCfCATtMkxPf7d6IS08CEU%2F%2FbINqg3XJcISKNIMfih4FgGkgNPNE7%2Ff4cAjY0bMw12APxqxq5Pj3JeMKequ3jhAWRrHg07Q0RoCQPNC1ozqHBiXOe%2BdJtNcrALW1faPMkZL5arD4lbbGqPHYnAJo%2BNpzoFtQ6UR%2BwYBPWv9myQpbVUr430qhO63lOgWCbQwM7MoZqkUtBgvzsws2QW7pycIFIYsOf&X-Amz-Signature=aa6138d7f56f2c69e64254502a109f2fb916ff458ebdeee14f9246f380018141&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVIILGNQ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIG%2B%2B2vFx2Fb0iO%2FGCIrnGs795E9%2FzeyRSGMlt%2F7G0nuTAiAHhEevCHW1Cub0dJLID6OIbvq4CaTSkDH5hvGYe2mg5iqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMckYw1wiAXxaHLpoKKtwDlYEePMN%2BXSvj40XpriEG4opeIwHllK9MLFZmQBSfQyfEZrOk5%2F5TUrKH9d%2F1ycUAJkQMPgwl9kiI0Ldu8r2BgdFtSaff8PnlXhEjsckwYb6CSNymJYalUzL%2FQXCJ3z2uSAbmLbwD6Ww%2BITUZ%2Fk%2BZNn4i5cbQY0bvFkALZtnYu6iLU1iKHnV%2F7dzpJbN3U59n8YoZQQUDFTMp5qRBD8NsXVJrIm2BjxFMJxl4HkE%2BwdbLEnncwmlNVnrkgIgAjMygM0Fhj0LhuGK8Sze3wVufFwBHd1NaaGv7puPxsSjcOmlcSrZCTg%2FJk5JhnGEVIuZPvoD6awU0AIwMO3RrDRHRGCnGmVetAISMLX3Mr9aDOkhD4Nmjl8wb9uAJQRyjGyfaWrc7Pnl%2BbrDZtY2DxEFG09NEtJmkh9T66jit2WIIGP29rh7xi45KOhAf3IyBQKcBLnk9B3e6ctI20DPNkQGMPlPm5XokCOGGBqWAi2U1IDKx3%2BXbRQm1rc75y%2FfdE5RxZbzKhpRmkITD977qk99TyGsLZ5sVKk6634QJjx1ad56yDmh5bCE342TxhVK70XK%2FVyDA2m9954QWspbLDPIhLSXPQR1RrBml%2FapLgKqeoSfIsO9HFxEi41QwMyEwnerpwwY6pgGBCfCATtMkxPf7d6IS08CEU%2F%2FbINqg3XJcISKNIMfih4FgGkgNPNE7%2Ff4cAjY0bMw12APxqxq5Pj3JeMKequ3jhAWRrHg07Q0RoCQPNC1ozqHBiXOe%2BdJtNcrALW1faPMkZL5arD4lbbGqPHYnAJo%2BNpzoFtQ6UR%2BwYBPWv9myQpbVUr430qhO63lOgWCbQwM7MoZqkUtBgvzsws2QW7pycIFIYsOf&X-Amz-Signature=facd66feef190a96e904d6f5b6e0766a22011259b2f153a4f65634cd918be473&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
