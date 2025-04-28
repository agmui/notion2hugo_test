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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX2NCFVF%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T104301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXbhqIXlZgcW%2Fcmin6neR5huxjkHvsSZ8INc%2Fw7OHM7AiBKS6zmWZEvUaRp1lAb26C48rStIlfuKw4UlfCQfhFi6Sr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM1rLWvElMbS8uWAZcKtwDUowWXa4AQKlG7Q3dhRdNvViDHvBKd4j8ILBuER%2BKzGs1eyyTVtxwBwocGHqJOqz52EkJ%2Bvk3G5Twfpj0dI0McJL3Epkv8r3D3y6xrHhLH7ftSKw4TTW9vrul4KLibqL1FUUam%2BdMKSmehxW5uRL85aTd0%2BkjNav37o26JM3gP79gfih%2FYhrqSabQXb%2FjADpX1qeVDVhc7tOAVMG6Im2FgH7w90P6WoZWPAl0evvN02%2BZKwBgJEHMHiICPu8v8YynG3%2FyMNqmOZPMiEDmvTzATAdXyWD6JkwKcxgb5i9cdzQDs1SovwcNcu%2F13abvC%2Fx%2Bbx3VdHsOTsqcU7LuLoVBDfOV9%2B74hmTrNo76fJZKeRtf2F%2BEspzJCJj%2B%2FUYpWLbuYyDe2zKN4LN7YDY4%2F0jUugOHigpHqF0DhBxjF0yVuLanerEZjO8yPpmN%2FJWNKJJqGrrlkAX12iX7hT6%2FsxFHMpOYbtIiYQoIhwx8VZCKyqcQim59B7daxwVhY%2FckPhdvDT6a0ZfuMIZ2OEA%2B%2F%2BHUsAw3kfGLUgKyERhTi7BOYkMyHZ6xYqGTc6keczmvpTEi%2FA%2FdxqWw5IY94XFIA5SP%2Bzwp%2Fb%2Bdd6T8b%2Ff9iyeiQJy8mOukuhx69n%2BMBnEwo6u9wAY6pgGltTIfNqxC9ky7nTS3evBDPI%2FlhUZO8F1DAga1C05gygdiEHGsG1xNlov3XPh7piFBLGLBMjYrlSHvo43tAqSOicsyfzYUpSj9RJVke2dikBEPGYIT4mT74VFcZPEZ9byJD6%2BdhIVx%2BeGfVal%2B0L%2F4rnSu7nzl%2B4m1drhWpqI%2BmofltAkTjk13gZpBLIerJb3J3cuNocD1RmSqX24c%2BKr5GsMODF27&X-Amz-Signature=9f3641a312d6ac436420f1a936716fe0859df4cd8e5a6575dfea43cd0bfcdfa6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX2NCFVF%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T104301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXbhqIXlZgcW%2Fcmin6neR5huxjkHvsSZ8INc%2Fw7OHM7AiBKS6zmWZEvUaRp1lAb26C48rStIlfuKw4UlfCQfhFi6Sr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM1rLWvElMbS8uWAZcKtwDUowWXa4AQKlG7Q3dhRdNvViDHvBKd4j8ILBuER%2BKzGs1eyyTVtxwBwocGHqJOqz52EkJ%2Bvk3G5Twfpj0dI0McJL3Epkv8r3D3y6xrHhLH7ftSKw4TTW9vrul4KLibqL1FUUam%2BdMKSmehxW5uRL85aTd0%2BkjNav37o26JM3gP79gfih%2FYhrqSabQXb%2FjADpX1qeVDVhc7tOAVMG6Im2FgH7w90P6WoZWPAl0evvN02%2BZKwBgJEHMHiICPu8v8YynG3%2FyMNqmOZPMiEDmvTzATAdXyWD6JkwKcxgb5i9cdzQDs1SovwcNcu%2F13abvC%2Fx%2Bbx3VdHsOTsqcU7LuLoVBDfOV9%2B74hmTrNo76fJZKeRtf2F%2BEspzJCJj%2B%2FUYpWLbuYyDe2zKN4LN7YDY4%2F0jUugOHigpHqF0DhBxjF0yVuLanerEZjO8yPpmN%2FJWNKJJqGrrlkAX12iX7hT6%2FsxFHMpOYbtIiYQoIhwx8VZCKyqcQim59B7daxwVhY%2FckPhdvDT6a0ZfuMIZ2OEA%2B%2F%2BHUsAw3kfGLUgKyERhTi7BOYkMyHZ6xYqGTc6keczmvpTEi%2FA%2FdxqWw5IY94XFIA5SP%2Bzwp%2Fb%2Bdd6T8b%2Ff9iyeiQJy8mOukuhx69n%2BMBnEwo6u9wAY6pgGltTIfNqxC9ky7nTS3evBDPI%2FlhUZO8F1DAga1C05gygdiEHGsG1xNlov3XPh7piFBLGLBMjYrlSHvo43tAqSOicsyfzYUpSj9RJVke2dikBEPGYIT4mT74VFcZPEZ9byJD6%2BdhIVx%2BeGfVal%2B0L%2F4rnSu7nzl%2B4m1drhWpqI%2BmofltAkTjk13gZpBLIerJb3J3cuNocD1RmSqX24c%2BKr5GsMODF27&X-Amz-Signature=a9e288b3df77f52222b70777d61adfaad7dfcc00b66a0144fd1465d534fdaf31&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX2NCFVF%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T104301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXbhqIXlZgcW%2Fcmin6neR5huxjkHvsSZ8INc%2Fw7OHM7AiBKS6zmWZEvUaRp1lAb26C48rStIlfuKw4UlfCQfhFi6Sr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM1rLWvElMbS8uWAZcKtwDUowWXa4AQKlG7Q3dhRdNvViDHvBKd4j8ILBuER%2BKzGs1eyyTVtxwBwocGHqJOqz52EkJ%2Bvk3G5Twfpj0dI0McJL3Epkv8r3D3y6xrHhLH7ftSKw4TTW9vrul4KLibqL1FUUam%2BdMKSmehxW5uRL85aTd0%2BkjNav37o26JM3gP79gfih%2FYhrqSabQXb%2FjADpX1qeVDVhc7tOAVMG6Im2FgH7w90P6WoZWPAl0evvN02%2BZKwBgJEHMHiICPu8v8YynG3%2FyMNqmOZPMiEDmvTzATAdXyWD6JkwKcxgb5i9cdzQDs1SovwcNcu%2F13abvC%2Fx%2Bbx3VdHsOTsqcU7LuLoVBDfOV9%2B74hmTrNo76fJZKeRtf2F%2BEspzJCJj%2B%2FUYpWLbuYyDe2zKN4LN7YDY4%2F0jUugOHigpHqF0DhBxjF0yVuLanerEZjO8yPpmN%2FJWNKJJqGrrlkAX12iX7hT6%2FsxFHMpOYbtIiYQoIhwx8VZCKyqcQim59B7daxwVhY%2FckPhdvDT6a0ZfuMIZ2OEA%2B%2F%2BHUsAw3kfGLUgKyERhTi7BOYkMyHZ6xYqGTc6keczmvpTEi%2FA%2FdxqWw5IY94XFIA5SP%2Bzwp%2Fb%2Bdd6T8b%2Ff9iyeiQJy8mOukuhx69n%2BMBnEwo6u9wAY6pgGltTIfNqxC9ky7nTS3evBDPI%2FlhUZO8F1DAga1C05gygdiEHGsG1xNlov3XPh7piFBLGLBMjYrlSHvo43tAqSOicsyfzYUpSj9RJVke2dikBEPGYIT4mT74VFcZPEZ9byJD6%2BdhIVx%2BeGfVal%2B0L%2F4rnSu7nzl%2B4m1drhWpqI%2BmofltAkTjk13gZpBLIerJb3J3cuNocD1RmSqX24c%2BKr5GsMODF27&X-Amz-Signature=a49c7ae38bdc53d8690368d3b862ffef8c95f97af121946c965a72a70a754cd0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
