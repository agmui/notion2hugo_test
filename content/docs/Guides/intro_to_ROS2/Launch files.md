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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ3M7YEE%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICplrrBOPe2ChMDs9nmDMDNliN9yEO6xrm6f1F8DFm95AiEA4jFGoLu6ZsVtUEJ7rgb%2BY2rv%2F4ANl98fXGURfbb%2FQYQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9lq2N0pFyF%2BMUAJSrcAyBFI1cTUQjkgMmWjYQkraw5KOHm3m2gknN1CeDndp311y8zthLTQRHy9SYaKrv1KNPAlJVi2rutHJsZDtd1LpW8w8rgt1vZD0n79zDAZUSkspLobtGAb5pw7HN%2B9yaWNWijOzXJpJPWmKOhbrG7RPQwuRHYXnWyyczzSY%2BM1i1uHOnWk9Ua58Gp4vdwnd38oz9AUmHHW0unJtM8LWgVDFg9DRlxDRKFt5p6%2BiwFkaSWobLnrigF%2Bb27VoEWBFEOUZgZuKMR2CcfY0eJLa26atq9HsVn3RdOKoHrR5ZU7h0UMQQN9QJgERMkiX%2B69xnLQPIOhPNTsHC167vueyxHUIhd4BB309%2FICde6JxHma1Rv%2BTLMb%2B5UBihCneCRIeOA%2Fwgdn80mRxMxUgFrb%2BwVde86GHvtQvjNfpDwP%2BecinooFNCZcKwdeSSGjEh6%2FA9sD8rnkMhfctECYPU7ZNLIUDEYl7j9Ko1OJjma17m8M9DF9nJBheazYLciCDYqR3091nI4TNOnhnGMnlYuawc%2FATglAJjlfgaTJxWvRshtPWLPTF0K2nel37hVQ934tk4qj7BN7HiW5jY%2FwnvZZvEVpThjxWWQ2S1uSefbTLpj1VhxkGv0fC4GbYjM89hcMLOA6LwGOqUBQ67V4RHLwmi5xgRJMKorLSuDnxLWbAsS6rw5uwNzqropCBY%2B5Ym1IsxJLG9bG2HShIkuwsQvC4t4c07HGUaAjCSeVHM5ox%2BKWj6p%2F6l4XhRJMHGt%2Bb0hQ3HnwCE0TvGU7a6nzsmvMJw93xsW9RGweB6S68K2X65YF9dTnJ%2BhKgV%2BmtCA7sRxFc05QjKADUV74Hwo9TDBUKTdSOPdYLG8Ae7iSYL1&X-Amz-Signature=e456657a08bb68b37e0ce2d8a32fcd9ba7586276dfbeab2f132b48134a80b125&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ3M7YEE%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICplrrBOPe2ChMDs9nmDMDNliN9yEO6xrm6f1F8DFm95AiEA4jFGoLu6ZsVtUEJ7rgb%2BY2rv%2F4ANl98fXGURfbb%2FQYQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9lq2N0pFyF%2BMUAJSrcAyBFI1cTUQjkgMmWjYQkraw5KOHm3m2gknN1CeDndp311y8zthLTQRHy9SYaKrv1KNPAlJVi2rutHJsZDtd1LpW8w8rgt1vZD0n79zDAZUSkspLobtGAb5pw7HN%2B9yaWNWijOzXJpJPWmKOhbrG7RPQwuRHYXnWyyczzSY%2BM1i1uHOnWk9Ua58Gp4vdwnd38oz9AUmHHW0unJtM8LWgVDFg9DRlxDRKFt5p6%2BiwFkaSWobLnrigF%2Bb27VoEWBFEOUZgZuKMR2CcfY0eJLa26atq9HsVn3RdOKoHrR5ZU7h0UMQQN9QJgERMkiX%2B69xnLQPIOhPNTsHC167vueyxHUIhd4BB309%2FICde6JxHma1Rv%2BTLMb%2B5UBihCneCRIeOA%2Fwgdn80mRxMxUgFrb%2BwVde86GHvtQvjNfpDwP%2BecinooFNCZcKwdeSSGjEh6%2FA9sD8rnkMhfctECYPU7ZNLIUDEYl7j9Ko1OJjma17m8M9DF9nJBheazYLciCDYqR3091nI4TNOnhnGMnlYuawc%2FATglAJjlfgaTJxWvRshtPWLPTF0K2nel37hVQ934tk4qj7BN7HiW5jY%2FwnvZZvEVpThjxWWQ2S1uSefbTLpj1VhxkGv0fC4GbYjM89hcMLOA6LwGOqUBQ67V4RHLwmi5xgRJMKorLSuDnxLWbAsS6rw5uwNzqropCBY%2B5Ym1IsxJLG9bG2HShIkuwsQvC4t4c07HGUaAjCSeVHM5ox%2BKWj6p%2F6l4XhRJMHGt%2Bb0hQ3HnwCE0TvGU7a6nzsmvMJw93xsW9RGweB6S68K2X65YF9dTnJ%2BhKgV%2BmtCA7sRxFc05QjKADUV74Hwo9TDBUKTdSOPdYLG8Ae7iSYL1&X-Amz-Signature=90c7cceb5fb8ed65fb63e83c794daad9cff0909d5ebbbd6eb915ed0e72e55bac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ3M7YEE%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICplrrBOPe2ChMDs9nmDMDNliN9yEO6xrm6f1F8DFm95AiEA4jFGoLu6ZsVtUEJ7rgb%2BY2rv%2F4ANl98fXGURfbb%2FQYQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9lq2N0pFyF%2BMUAJSrcAyBFI1cTUQjkgMmWjYQkraw5KOHm3m2gknN1CeDndp311y8zthLTQRHy9SYaKrv1KNPAlJVi2rutHJsZDtd1LpW8w8rgt1vZD0n79zDAZUSkspLobtGAb5pw7HN%2B9yaWNWijOzXJpJPWmKOhbrG7RPQwuRHYXnWyyczzSY%2BM1i1uHOnWk9Ua58Gp4vdwnd38oz9AUmHHW0unJtM8LWgVDFg9DRlxDRKFt5p6%2BiwFkaSWobLnrigF%2Bb27VoEWBFEOUZgZuKMR2CcfY0eJLa26atq9HsVn3RdOKoHrR5ZU7h0UMQQN9QJgERMkiX%2B69xnLQPIOhPNTsHC167vueyxHUIhd4BB309%2FICde6JxHma1Rv%2BTLMb%2B5UBihCneCRIeOA%2Fwgdn80mRxMxUgFrb%2BwVde86GHvtQvjNfpDwP%2BecinooFNCZcKwdeSSGjEh6%2FA9sD8rnkMhfctECYPU7ZNLIUDEYl7j9Ko1OJjma17m8M9DF9nJBheazYLciCDYqR3091nI4TNOnhnGMnlYuawc%2FATglAJjlfgaTJxWvRshtPWLPTF0K2nel37hVQ934tk4qj7BN7HiW5jY%2FwnvZZvEVpThjxWWQ2S1uSefbTLpj1VhxkGv0fC4GbYjM89hcMLOA6LwGOqUBQ67V4RHLwmi5xgRJMKorLSuDnxLWbAsS6rw5uwNzqropCBY%2B5Ym1IsxJLG9bG2HShIkuwsQvC4t4c07HGUaAjCSeVHM5ox%2BKWj6p%2F6l4XhRJMHGt%2Bb0hQ3HnwCE0TvGU7a6nzsmvMJw93xsW9RGweB6S68K2X65YF9dTnJ%2BhKgV%2BmtCA7sRxFc05QjKADUV74Hwo9TDBUKTdSOPdYLG8Ae7iSYL1&X-Amz-Signature=74275b46ae1be7a4c8328c6b6f6fecc03a03fe8b2032649e5301e2c0aa9fb0f5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
