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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ITDNMTW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIALKCpfu3SOjPGJlag5MvMb3AyvKtiF00OVd8w0kjwv7AiAmPWGKrCrrrgrxlTS1O%2BXZU%2FOCjLch3nhkYq47s50qoiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsQ1E%2BY4rprtTxiEdKtwDWCQ6V5ffEfth4UUyOGIvxqcPZvDkZ%2BgCXzrWZ2iYxdj37NDit9%2FN36t9ze22O299pEiZxY%2By6yF9%2Flx0aoA54Lb9ygGfgcgMuKR%2F04nvWqxUTGtWKakdYQ9yLVKlkYUgeXW2nO6HuQLehIif9QQblIzCL84PiTO48SLGT%2B%2FopWSj5Iuk1kXKStVfuqtpjNXcoKYTdNlSlUBjr9Uj%2FR9ozMs5f%2FyaX8Bw4RvRfTmHUKl1FC9dPHc%2FPlpWEl6CPtdfrmHcYdm4qA3juT9t8%2BwDr4Fmn5rAkvmOydv1ynsEdNhVDdE%2BCj1NCTm8sUVrjHK5wRVP%2F11sCHWDemhTkWoRep8BdNePoml5i%2FA%2FXCSrnsDLrDd67nK0wrI%2FaN0v8V5Thv1SxU4HCDnib%2BSXZ2SPsIOmA3vDAoUs5LRS04p3KVE18Zrsp3jbIVKK7D20TknDI4SRtjdwWy76FO2q%2B7Vy6s6seewXRNP26fp0FqjWxr7IvXsuAEbd907AD2aqNN5zmGgtmSCoGfUjjdsE33k7kYd7yM4HgvJJPeuqOpj%2F6h3GpstL5HncSVrlebuAjWhzz4nVHvcKB%2BXOBNhfrQRGCjJF2utEbd6leoLLrPqvIxa%2BdNOHfuEgx1Jkv9kw9%2B3%2FvgY6pgH2aDcWaI%2F2HHAn3KpEN5amvBwQ4wumZTRAEtPdRlpP%2BeYMCCwaWKf14aTKek5k8dFk2UWfmZ%2BYODOR1eGCdZywGTO%2F0zo2oDcIXmJVs3UwrknGyv2xWskGMhN%2BIFKkQngPrFnYd5n%2FrYbuOmP%2FLeVrs5lENqlMq3Sn7F0i0xarnoAobHncwgQMBLE2Iq413OFkwqAJCePW7GQiufAxKmqZymdIJuGj&X-Amz-Signature=a27b00800bc204a8d9f3b3ca8a48e5bd28c907343865ad6ae5b78aa70cae9559&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ITDNMTW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIALKCpfu3SOjPGJlag5MvMb3AyvKtiF00OVd8w0kjwv7AiAmPWGKrCrrrgrxlTS1O%2BXZU%2FOCjLch3nhkYq47s50qoiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsQ1E%2BY4rprtTxiEdKtwDWCQ6V5ffEfth4UUyOGIvxqcPZvDkZ%2BgCXzrWZ2iYxdj37NDit9%2FN36t9ze22O299pEiZxY%2By6yF9%2Flx0aoA54Lb9ygGfgcgMuKR%2F04nvWqxUTGtWKakdYQ9yLVKlkYUgeXW2nO6HuQLehIif9QQblIzCL84PiTO48SLGT%2B%2FopWSj5Iuk1kXKStVfuqtpjNXcoKYTdNlSlUBjr9Uj%2FR9ozMs5f%2FyaX8Bw4RvRfTmHUKl1FC9dPHc%2FPlpWEl6CPtdfrmHcYdm4qA3juT9t8%2BwDr4Fmn5rAkvmOydv1ynsEdNhVDdE%2BCj1NCTm8sUVrjHK5wRVP%2F11sCHWDemhTkWoRep8BdNePoml5i%2FA%2FXCSrnsDLrDd67nK0wrI%2FaN0v8V5Thv1SxU4HCDnib%2BSXZ2SPsIOmA3vDAoUs5LRS04p3KVE18Zrsp3jbIVKK7D20TknDI4SRtjdwWy76FO2q%2B7Vy6s6seewXRNP26fp0FqjWxr7IvXsuAEbd907AD2aqNN5zmGgtmSCoGfUjjdsE33k7kYd7yM4HgvJJPeuqOpj%2F6h3GpstL5HncSVrlebuAjWhzz4nVHvcKB%2BXOBNhfrQRGCjJF2utEbd6leoLLrPqvIxa%2BdNOHfuEgx1Jkv9kw9%2B3%2FvgY6pgH2aDcWaI%2F2HHAn3KpEN5amvBwQ4wumZTRAEtPdRlpP%2BeYMCCwaWKf14aTKek5k8dFk2UWfmZ%2BYODOR1eGCdZywGTO%2F0zo2oDcIXmJVs3UwrknGyv2xWskGMhN%2BIFKkQngPrFnYd5n%2FrYbuOmP%2FLeVrs5lENqlMq3Sn7F0i0xarnoAobHncwgQMBLE2Iq413OFkwqAJCePW7GQiufAxKmqZymdIJuGj&X-Amz-Signature=9e8e757fab7fcbf742bc1899bcda44348bdf4c10e7e83e041e95b4f8ac65dc7a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ITDNMTW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIALKCpfu3SOjPGJlag5MvMb3AyvKtiF00OVd8w0kjwv7AiAmPWGKrCrrrgrxlTS1O%2BXZU%2FOCjLch3nhkYq47s50qoiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsQ1E%2BY4rprtTxiEdKtwDWCQ6V5ffEfth4UUyOGIvxqcPZvDkZ%2BgCXzrWZ2iYxdj37NDit9%2FN36t9ze22O299pEiZxY%2By6yF9%2Flx0aoA54Lb9ygGfgcgMuKR%2F04nvWqxUTGtWKakdYQ9yLVKlkYUgeXW2nO6HuQLehIif9QQblIzCL84PiTO48SLGT%2B%2FopWSj5Iuk1kXKStVfuqtpjNXcoKYTdNlSlUBjr9Uj%2FR9ozMs5f%2FyaX8Bw4RvRfTmHUKl1FC9dPHc%2FPlpWEl6CPtdfrmHcYdm4qA3juT9t8%2BwDr4Fmn5rAkvmOydv1ynsEdNhVDdE%2BCj1NCTm8sUVrjHK5wRVP%2F11sCHWDemhTkWoRep8BdNePoml5i%2FA%2FXCSrnsDLrDd67nK0wrI%2FaN0v8V5Thv1SxU4HCDnib%2BSXZ2SPsIOmA3vDAoUs5LRS04p3KVE18Zrsp3jbIVKK7D20TknDI4SRtjdwWy76FO2q%2B7Vy6s6seewXRNP26fp0FqjWxr7IvXsuAEbd907AD2aqNN5zmGgtmSCoGfUjjdsE33k7kYd7yM4HgvJJPeuqOpj%2F6h3GpstL5HncSVrlebuAjWhzz4nVHvcKB%2BXOBNhfrQRGCjJF2utEbd6leoLLrPqvIxa%2BdNOHfuEgx1Jkv9kw9%2B3%2FvgY6pgH2aDcWaI%2F2HHAn3KpEN5amvBwQ4wumZTRAEtPdRlpP%2BeYMCCwaWKf14aTKek5k8dFk2UWfmZ%2BYODOR1eGCdZywGTO%2F0zo2oDcIXmJVs3UwrknGyv2xWskGMhN%2BIFKkQngPrFnYd5n%2FrYbuOmP%2FLeVrs5lENqlMq3Sn7F0i0xarnoAobHncwgQMBLE2Iq413OFkwqAJCePW7GQiufAxKmqZymdIJuGj&X-Amz-Signature=042fc40ab850a4f2ef1bf1518c58403c3e08cbb196af2592042fe2a6531999cd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
