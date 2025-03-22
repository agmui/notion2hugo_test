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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYMWRKV3%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCctQyifm5Dk0xLodBFQHcIimwDpXoJAsck0GD%2BAX22uQIhAJZ2q%2BgfyM721YfQkRCOnl7a%2B%2BhNuk8wiXlkbYMGdHXYKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8cRltklq62qsvoDkq3AMEeid2Hjjr7mRYtiFpQHBlzh%2FBs8xh54sAAeypPgSWGbgMyinKPuNqzQeiGAkJMNnC05COfem9ksNjouOKkDLszCz1Yw796XVBe4qpWOOrFi3eVQ52q7ZE6BNSmQzHlq5CNmzuC%2Fl7zPauV%2FO8fur18Zn2C8ubPPO7j1RU9%2FCIs7QYqpvdDjf59lJsjOZlzdxkHPHESYlWnlZkq9u9H9Jb%2FPhRCh2H1VvnJuFftSte0jKxY2bD7bRWLEkTnhC24uoxG0LqMU98hEPeyuP6ByAfEuFQxwtfeKdbMEZIb33s820qFu9aTT3vfPh9%2F99zljduO9Nn7I75NsuKKKvTD54W45ow7K3xPl0A8hTbVu2WXADzPZbIK%2FaIR2kYO%2FKdxL5x7CPkA3S%2ByZhfmSX%2B%2BKRffU%2FfOncIXT57Jjl9pUp2dEsYRXgfwkKD%2BY0lw%2F8E3emzavrxzUWEvyBkbVd8GzDvwoFOafdUn8Bs7KmvmLPoyAsVqqkWxlTyh6zqcaVv0ul6GPjLZtnwJKwF%2Fa9ILRKZZ8ex1ZU3u7PgeFtpdKOSNQk%2B%2BJAdGXxbufQGykWbV10Z%2FVC%2BgeCLv1O%2FuJncNWdZtY9YUbUyirjVhk40i7%2BUcksOwLz05kRy6fAw5jCLtvy%2BBjqkAfIk64Vy0QjPletFwywQa6OnipdiPXSSxP%2BQHw4hFXyjIOGFg9SVuaf2Uq2BKNPlyJ9ey%2Fq9En%2BGO%2FDNpztDX8KMj9JWPAGqJNunKDbMSJmbCioKkgL6Br8DVKydHhKMlz5O7HP%2ByOlW4geqpctapOZ4clQSlQZfp8qHlQB4p%2Bz0QqR5hrggXe9mxuxBTc6MMR4Q1jT%2BdgwS%2Fa22yUJlWQnw%2B0ck&X-Amz-Signature=30dfb19f95a9ebebcfd8cc36c9d8cae7b7b8c8347a3c0eefe48ac0b281a840f7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYMWRKV3%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCctQyifm5Dk0xLodBFQHcIimwDpXoJAsck0GD%2BAX22uQIhAJZ2q%2BgfyM721YfQkRCOnl7a%2B%2BhNuk8wiXlkbYMGdHXYKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8cRltklq62qsvoDkq3AMEeid2Hjjr7mRYtiFpQHBlzh%2FBs8xh54sAAeypPgSWGbgMyinKPuNqzQeiGAkJMNnC05COfem9ksNjouOKkDLszCz1Yw796XVBe4qpWOOrFi3eVQ52q7ZE6BNSmQzHlq5CNmzuC%2Fl7zPauV%2FO8fur18Zn2C8ubPPO7j1RU9%2FCIs7QYqpvdDjf59lJsjOZlzdxkHPHESYlWnlZkq9u9H9Jb%2FPhRCh2H1VvnJuFftSte0jKxY2bD7bRWLEkTnhC24uoxG0LqMU98hEPeyuP6ByAfEuFQxwtfeKdbMEZIb33s820qFu9aTT3vfPh9%2F99zljduO9Nn7I75NsuKKKvTD54W45ow7K3xPl0A8hTbVu2WXADzPZbIK%2FaIR2kYO%2FKdxL5x7CPkA3S%2ByZhfmSX%2B%2BKRffU%2FfOncIXT57Jjl9pUp2dEsYRXgfwkKD%2BY0lw%2F8E3emzavrxzUWEvyBkbVd8GzDvwoFOafdUn8Bs7KmvmLPoyAsVqqkWxlTyh6zqcaVv0ul6GPjLZtnwJKwF%2Fa9ILRKZZ8ex1ZU3u7PgeFtpdKOSNQk%2B%2BJAdGXxbufQGykWbV10Z%2FVC%2BgeCLv1O%2FuJncNWdZtY9YUbUyirjVhk40i7%2BUcksOwLz05kRy6fAw5jCLtvy%2BBjqkAfIk64Vy0QjPletFwywQa6OnipdiPXSSxP%2BQHw4hFXyjIOGFg9SVuaf2Uq2BKNPlyJ9ey%2Fq9En%2BGO%2FDNpztDX8KMj9JWPAGqJNunKDbMSJmbCioKkgL6Br8DVKydHhKMlz5O7HP%2ByOlW4geqpctapOZ4clQSlQZfp8qHlQB4p%2Bz0QqR5hrggXe9mxuxBTc6MMR4Q1jT%2BdgwS%2Fa22yUJlWQnw%2B0ck&X-Amz-Signature=4ee6a66648d432453c79e7fae70e44f9be22dcd4d2b15ae2cedf466852a5eca3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYMWRKV3%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCctQyifm5Dk0xLodBFQHcIimwDpXoJAsck0GD%2BAX22uQIhAJZ2q%2BgfyM721YfQkRCOnl7a%2B%2BhNuk8wiXlkbYMGdHXYKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8cRltklq62qsvoDkq3AMEeid2Hjjr7mRYtiFpQHBlzh%2FBs8xh54sAAeypPgSWGbgMyinKPuNqzQeiGAkJMNnC05COfem9ksNjouOKkDLszCz1Yw796XVBe4qpWOOrFi3eVQ52q7ZE6BNSmQzHlq5CNmzuC%2Fl7zPauV%2FO8fur18Zn2C8ubPPO7j1RU9%2FCIs7QYqpvdDjf59lJsjOZlzdxkHPHESYlWnlZkq9u9H9Jb%2FPhRCh2H1VvnJuFftSte0jKxY2bD7bRWLEkTnhC24uoxG0LqMU98hEPeyuP6ByAfEuFQxwtfeKdbMEZIb33s820qFu9aTT3vfPh9%2F99zljduO9Nn7I75NsuKKKvTD54W45ow7K3xPl0A8hTbVu2WXADzPZbIK%2FaIR2kYO%2FKdxL5x7CPkA3S%2ByZhfmSX%2B%2BKRffU%2FfOncIXT57Jjl9pUp2dEsYRXgfwkKD%2BY0lw%2F8E3emzavrxzUWEvyBkbVd8GzDvwoFOafdUn8Bs7KmvmLPoyAsVqqkWxlTyh6zqcaVv0ul6GPjLZtnwJKwF%2Fa9ILRKZZ8ex1ZU3u7PgeFtpdKOSNQk%2B%2BJAdGXxbufQGykWbV10Z%2FVC%2BgeCLv1O%2FuJncNWdZtY9YUbUyirjVhk40i7%2BUcksOwLz05kRy6fAw5jCLtvy%2BBjqkAfIk64Vy0QjPletFwywQa6OnipdiPXSSxP%2BQHw4hFXyjIOGFg9SVuaf2Uq2BKNPlyJ9ey%2Fq9En%2BGO%2FDNpztDX8KMj9JWPAGqJNunKDbMSJmbCioKkgL6Br8DVKydHhKMlz5O7HP%2ByOlW4geqpctapOZ4clQSlQZfp8qHlQB4p%2Bz0QqR5hrggXe9mxuxBTc6MMR4Q1jT%2BdgwS%2Fa22yUJlWQnw%2B0ck&X-Amz-Signature=6ae37c4b658f1c3fb984583bb8cf139821f928cdd5d9658d277376d80b6c401b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
