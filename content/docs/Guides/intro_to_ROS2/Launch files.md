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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYG3S3RT%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T100220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIAaa2rbWiMIjUOn41XHzH9uHe%2BUHyESl2tvyXOBOLcQXAiEAuh1qWo8p954nZGM1Cu3n9g4oIhMxYTyw3%2FTvolAd2Ogq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEstUKzg7KC93OA7YircAx9ya0dy8svcRThbgp35NWm7obx1dSVuM5mAXi%2B2RCUKArByB3yX31ocPm1d0IF92U9W859B1NI5qoT1avytaYePDH5jjsmUjSkAoB2FvPF9BVg8TzNsqYz385Om8eqcRdeES38b5AQOLz%2FMuD4cfpPYC0CLNPJvpbtoyXr2Rjgghx3YQ3LbF8jqetBt4TqAMaQWQbfh2yUjrZZnkrMcqsMylAbz873PHSJ%2FCR45149mIzODvweOPLoIOrfabl%2BcwIfmY22GRRnXW0%2BWyOyycym6YSmcyA1dEyCRQfEvuvcL9%2F2MbGsSwmEEEH2v2oEq%2FrBfRSVI5yPi4xi5omKk%2FzeUsaqTHVhIjoTxeJ0FWBFOEKJeA58I3cbwwdmPrSlXwOLuwpoObIa4OMMhctXqQ0kQWxoYZ%2F88hTWYZrutGeiLBdZ3pegqdWmq1cCpAAN%2B75zXoKCpyNqe2U5RCvXdPUrPmSezHonXbeFrW2m12d6DuxkhI7iRUmb12TTrkdQty%2FadvHPh1KAS1%2Fi7zn%2FDsiyJdJE8fvTO7MWxug1oRzPS3fjpl6MOQaL17%2FzuoR4CG9nQcAxOB3RGwikFkjRMCJzOtIndkLddbHee9MCKyih97gCzTM4trfPgFJpdMLLrtL4GOqUBA%2Fxf3sAoebpxZO3dx7rWVGcq8JLUa1DWgLhIGW%2B2yHTrYbH2qE%2BcZsqG1CjBp0lWuxdDntyaajVK%2F4q7aTdkb8ecMV4rekZf6lltWUBMEPk%2BLLvUZAtSCsvmcdKsoNELobqylMfn1eVha2M1soB40YghVKI7snEdZrfdQNw54eEhc1X5rUnrtThWHDf3he22kWel1swe792mwiPgAnaLg73lfX0P&X-Amz-Signature=90ce4c76c25636a5b58441a0d224f98c5874446d427558bdd282f424a5bcd2a8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYG3S3RT%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T100220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIAaa2rbWiMIjUOn41XHzH9uHe%2BUHyESl2tvyXOBOLcQXAiEAuh1qWo8p954nZGM1Cu3n9g4oIhMxYTyw3%2FTvolAd2Ogq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEstUKzg7KC93OA7YircAx9ya0dy8svcRThbgp35NWm7obx1dSVuM5mAXi%2B2RCUKArByB3yX31ocPm1d0IF92U9W859B1NI5qoT1avytaYePDH5jjsmUjSkAoB2FvPF9BVg8TzNsqYz385Om8eqcRdeES38b5AQOLz%2FMuD4cfpPYC0CLNPJvpbtoyXr2Rjgghx3YQ3LbF8jqetBt4TqAMaQWQbfh2yUjrZZnkrMcqsMylAbz873PHSJ%2FCR45149mIzODvweOPLoIOrfabl%2BcwIfmY22GRRnXW0%2BWyOyycym6YSmcyA1dEyCRQfEvuvcL9%2F2MbGsSwmEEEH2v2oEq%2FrBfRSVI5yPi4xi5omKk%2FzeUsaqTHVhIjoTxeJ0FWBFOEKJeA58I3cbwwdmPrSlXwOLuwpoObIa4OMMhctXqQ0kQWxoYZ%2F88hTWYZrutGeiLBdZ3pegqdWmq1cCpAAN%2B75zXoKCpyNqe2U5RCvXdPUrPmSezHonXbeFrW2m12d6DuxkhI7iRUmb12TTrkdQty%2FadvHPh1KAS1%2Fi7zn%2FDsiyJdJE8fvTO7MWxug1oRzPS3fjpl6MOQaL17%2FzuoR4CG9nQcAxOB3RGwikFkjRMCJzOtIndkLddbHee9MCKyih97gCzTM4trfPgFJpdMLLrtL4GOqUBA%2Fxf3sAoebpxZO3dx7rWVGcq8JLUa1DWgLhIGW%2B2yHTrYbH2qE%2BcZsqG1CjBp0lWuxdDntyaajVK%2F4q7aTdkb8ecMV4rekZf6lltWUBMEPk%2BLLvUZAtSCsvmcdKsoNELobqylMfn1eVha2M1soB40YghVKI7snEdZrfdQNw54eEhc1X5rUnrtThWHDf3he22kWel1swe792mwiPgAnaLg73lfX0P&X-Amz-Signature=041c1c69184d55b6dc6272de5c7e21145f5e46fcf1f273e4df04c94a91efe8ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYG3S3RT%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T100220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIAaa2rbWiMIjUOn41XHzH9uHe%2BUHyESl2tvyXOBOLcQXAiEAuh1qWo8p954nZGM1Cu3n9g4oIhMxYTyw3%2FTvolAd2Ogq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEstUKzg7KC93OA7YircAx9ya0dy8svcRThbgp35NWm7obx1dSVuM5mAXi%2B2RCUKArByB3yX31ocPm1d0IF92U9W859B1NI5qoT1avytaYePDH5jjsmUjSkAoB2FvPF9BVg8TzNsqYz385Om8eqcRdeES38b5AQOLz%2FMuD4cfpPYC0CLNPJvpbtoyXr2Rjgghx3YQ3LbF8jqetBt4TqAMaQWQbfh2yUjrZZnkrMcqsMylAbz873PHSJ%2FCR45149mIzODvweOPLoIOrfabl%2BcwIfmY22GRRnXW0%2BWyOyycym6YSmcyA1dEyCRQfEvuvcL9%2F2MbGsSwmEEEH2v2oEq%2FrBfRSVI5yPi4xi5omKk%2FzeUsaqTHVhIjoTxeJ0FWBFOEKJeA58I3cbwwdmPrSlXwOLuwpoObIa4OMMhctXqQ0kQWxoYZ%2F88hTWYZrutGeiLBdZ3pegqdWmq1cCpAAN%2B75zXoKCpyNqe2U5RCvXdPUrPmSezHonXbeFrW2m12d6DuxkhI7iRUmb12TTrkdQty%2FadvHPh1KAS1%2Fi7zn%2FDsiyJdJE8fvTO7MWxug1oRzPS3fjpl6MOQaL17%2FzuoR4CG9nQcAxOB3RGwikFkjRMCJzOtIndkLddbHee9MCKyih97gCzTM4trfPgFJpdMLLrtL4GOqUBA%2Fxf3sAoebpxZO3dx7rWVGcq8JLUa1DWgLhIGW%2B2yHTrYbH2qE%2BcZsqG1CjBp0lWuxdDntyaajVK%2F4q7aTdkb8ecMV4rekZf6lltWUBMEPk%2BLLvUZAtSCsvmcdKsoNELobqylMfn1eVha2M1soB40YghVKI7snEdZrfdQNw54eEhc1X5rUnrtThWHDf3he22kWel1swe792mwiPgAnaLg73lfX0P&X-Amz-Signature=00925d27fc4481e21c8d2b4f8b7873f485c901f75c55cd9f0ce1fbe3a2c203e1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
