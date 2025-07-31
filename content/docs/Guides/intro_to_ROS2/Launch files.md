---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WUBKT2P%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID66imCHwd3KXXvQAThBvFnRBE2RTBDFNidDkt%2FctDXPAiEAp2T2RausINIIEXAZrBJiydpa1AHgLkSi2It5C2RSYwYqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtlVi6%2FvE6beDyUgyrcA5I8LwV65FwLNkEBXVpfE7Gfo%2Bss%2FGnzWu49ZtNmfkVfckhlo8anPcZYhyhb7S94kk9alChzWbc9PrJ863KbQZJGDua01yXQWpjz2g%2BhfkfHJ%2FWolxv%2BjVbjAPD0lPyif7dmYdekKMP4Or4S3ga7HX%2B0xvU6Ku2X3SuSNgsztfsOUiPPEzLmM1NUgCF%2F0h9YM3etSGZzae6dr7lINRUPgr%2FdRg6TqEZ0T86YFx8EdIzjtF6SrJ6wwo6RPP%2BM1ub4NyN7jERMMCr0aV9exKrjngQGGD4jpKmBZ35PUd5uGxOi6%2BFFvkrmhOni9MxGBhcZ%2BSDjDW7nqML%2FCLQeW1PYr1dhuXLcPsLCHCr1EeXtXul4LXHrd8cPYvxJIwETstS4sLLBvo5s4eWT7QCVYP4lMCEADVdtdC4y51Ta%2BgB7xsSK8sr7b8zyJGkexa7LB7m82Xe3WyqZLDTdTzMiU%2FVo%2FvVo9yTWgKHHsP2Pp2goDyL%2FZr4f9Eyeauyh%2BfdWDUvyMek3l3SKBOxG3K6VvRW%2BoboW0kdIB4esmeOTiF9GTTCwnw2MYXdb8QuUrEmyomxbcVGFkKrn7pD2rpikR3UsyodDyoVbt%2BMlTikRH1oYrg8de11XsjlNp4Js%2BdtNMJKarMQGOqUBCg9havVcyI8bPfqr6KO36m96gZi2ZNNerM%2FeSiB0PuO477abbVTBtzsF5kbe5yZFOKO6lid2SKrfP5SG8lgOidZhMIVhlkAO%2FmeaKGxnoc%2F1c3VkgosyTMXMFoyt9l4uHYl66yVevvrc2b%2BO2BPgJmIt6bLf0qEBfi13S3%2BsDlixG4VDwXv3fu%2FzNLsSXiCooZqWZz30VJlMbu%2BNGp5Ss2rRAsFP&X-Amz-Signature=3cdcb05936df68ebe9955826719135431e17cf01e09909dcb3f0cb35d973cabd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WUBKT2P%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID66imCHwd3KXXvQAThBvFnRBE2RTBDFNidDkt%2FctDXPAiEAp2T2RausINIIEXAZrBJiydpa1AHgLkSi2It5C2RSYwYqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtlVi6%2FvE6beDyUgyrcA5I8LwV65FwLNkEBXVpfE7Gfo%2Bss%2FGnzWu49ZtNmfkVfckhlo8anPcZYhyhb7S94kk9alChzWbc9PrJ863KbQZJGDua01yXQWpjz2g%2BhfkfHJ%2FWolxv%2BjVbjAPD0lPyif7dmYdekKMP4Or4S3ga7HX%2B0xvU6Ku2X3SuSNgsztfsOUiPPEzLmM1NUgCF%2F0h9YM3etSGZzae6dr7lINRUPgr%2FdRg6TqEZ0T86YFx8EdIzjtF6SrJ6wwo6RPP%2BM1ub4NyN7jERMMCr0aV9exKrjngQGGD4jpKmBZ35PUd5uGxOi6%2BFFvkrmhOni9MxGBhcZ%2BSDjDW7nqML%2FCLQeW1PYr1dhuXLcPsLCHCr1EeXtXul4LXHrd8cPYvxJIwETstS4sLLBvo5s4eWT7QCVYP4lMCEADVdtdC4y51Ta%2BgB7xsSK8sr7b8zyJGkexa7LB7m82Xe3WyqZLDTdTzMiU%2FVo%2FvVo9yTWgKHHsP2Pp2goDyL%2FZr4f9Eyeauyh%2BfdWDUvyMek3l3SKBOxG3K6VvRW%2BoboW0kdIB4esmeOTiF9GTTCwnw2MYXdb8QuUrEmyomxbcVGFkKrn7pD2rpikR3UsyodDyoVbt%2BMlTikRH1oYrg8de11XsjlNp4Js%2BdtNMJKarMQGOqUBCg9havVcyI8bPfqr6KO36m96gZi2ZNNerM%2FeSiB0PuO477abbVTBtzsF5kbe5yZFOKO6lid2SKrfP5SG8lgOidZhMIVhlkAO%2FmeaKGxnoc%2F1c3VkgosyTMXMFoyt9l4uHYl66yVevvrc2b%2BO2BPgJmIt6bLf0qEBfi13S3%2BsDlixG4VDwXv3fu%2FzNLsSXiCooZqWZz30VJlMbu%2BNGp5Ss2rRAsFP&X-Amz-Signature=f08a41c7e0f5b0d0ca5a922b4e7b6618a9cae092df82bc3ec8fbd6753f1548e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WUBKT2P%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID66imCHwd3KXXvQAThBvFnRBE2RTBDFNidDkt%2FctDXPAiEAp2T2RausINIIEXAZrBJiydpa1AHgLkSi2It5C2RSYwYqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtlVi6%2FvE6beDyUgyrcA5I8LwV65FwLNkEBXVpfE7Gfo%2Bss%2FGnzWu49ZtNmfkVfckhlo8anPcZYhyhb7S94kk9alChzWbc9PrJ863KbQZJGDua01yXQWpjz2g%2BhfkfHJ%2FWolxv%2BjVbjAPD0lPyif7dmYdekKMP4Or4S3ga7HX%2B0xvU6Ku2X3SuSNgsztfsOUiPPEzLmM1NUgCF%2F0h9YM3etSGZzae6dr7lINRUPgr%2FdRg6TqEZ0T86YFx8EdIzjtF6SrJ6wwo6RPP%2BM1ub4NyN7jERMMCr0aV9exKrjngQGGD4jpKmBZ35PUd5uGxOi6%2BFFvkrmhOni9MxGBhcZ%2BSDjDW7nqML%2FCLQeW1PYr1dhuXLcPsLCHCr1EeXtXul4LXHrd8cPYvxJIwETstS4sLLBvo5s4eWT7QCVYP4lMCEADVdtdC4y51Ta%2BgB7xsSK8sr7b8zyJGkexa7LB7m82Xe3WyqZLDTdTzMiU%2FVo%2FvVo9yTWgKHHsP2Pp2goDyL%2FZr4f9Eyeauyh%2BfdWDUvyMek3l3SKBOxG3K6VvRW%2BoboW0kdIB4esmeOTiF9GTTCwnw2MYXdb8QuUrEmyomxbcVGFkKrn7pD2rpikR3UsyodDyoVbt%2BMlTikRH1oYrg8de11XsjlNp4Js%2BdtNMJKarMQGOqUBCg9havVcyI8bPfqr6KO36m96gZi2ZNNerM%2FeSiB0PuO477abbVTBtzsF5kbe5yZFOKO6lid2SKrfP5SG8lgOidZhMIVhlkAO%2FmeaKGxnoc%2F1c3VkgosyTMXMFoyt9l4uHYl66yVevvrc2b%2BO2BPgJmIt6bLf0qEBfi13S3%2BsDlixG4VDwXv3fu%2FzNLsSXiCooZqWZz30VJlMbu%2BNGp5Ss2rRAsFP&X-Amz-Signature=6d61cf3d85f899f8c7dbcbd50f33413b7183acb890ecea030380b33efb38cb3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
