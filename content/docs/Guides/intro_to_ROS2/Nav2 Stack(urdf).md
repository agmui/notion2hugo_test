---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

# install pkg

# creating workspace + package

```bash
mkdir -p mbot_ws/src
cd mbot_ws/src
ros2 pkg create --build-type ament_python --license Apache-2.0 mbot_pkg 
```

### building 

```bash
cd ../../ # you should be in the mbot_ws folder after running this
colcon build --symlink-install  
source install/setup.bash
```

## Download

create rviz and urdf folder in `mbot_pkg` and download the rviz and urdf file:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A5P33S6%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxzieWjkkYvqPY8EC%2BIQN1kpICy0xaak%2B9dbOK3%2FavrAIhAM4ylExD4AjoRXFPFDlbSJ2I4eAJg%2B8pA%2BDBi08mBrftKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4m9xmiOCtaJDf76cq3AOhZrR2aqChWkhYq4mCg0qYSQU18ldLvAG8uuMk3DVoOQVb8%2FDDilIBVNp6M0v8qccXc%2FIQmwqMUOc0kgo7Hzlymiw1%2BY97YVPJmyEPDJKJthEVU3Kdri8K8x0scKctLl4OEPCFQpauvMzV%2FHxe1FIzq04ct2whmO8ZbSmq4ps7g9LFnDWnUUNagtbT%2F1TqvBWzR9uVahvRylphNjWI4wh%2FDZe%2FG6%2BmxxnvxZ4AsQoKfbJrvPJ0aH2XUCL%2BD9%2Fb0wvUcV14hp53l13mKwNXKPUKhcKc3QuPxePETt75rJVp%2BR7Dx%2FQn9pJxarAbE0nWHRJG4AlQOkfSlmwiTO0tcKv9m471F1T5zze8XiS8ZbUJkdI1y9dmwUvZP86K64PE52UnSt0EDfPsc5An24jOjbB%2BuAFoC6wlMFcHNPOYCjctJj%2Bqv62eAQpZO7IFZ4l3zsArWCdsZv6EU4CpiVEyHl9DzOa5ckS5d6QEFEi2aCOSyHFOXIejMmmMKlQvXCN9%2FcwCwwBb%2BGSVEg8Tmim2iHuqXhKKLQ1pKax9Mmefz6loO0sorDHoK%2BESR6%2FMAlzP9NK7IYgyDeP%2FJfAbmSgci6%2FqYUlNvtM9c%2B9CNbcPxfC4kLvLbX8QHuyFx5oWmjDPwYC9BjqkAbxkoRfhKCPR1yDAVWwHr3Ji5mbZDQ7YSj4AnXb3MBNSXOoNEcwBq1SQymxE15g85FxT8VEO2LMzrHkcSHDqP4I8r6seFDjpuC3oUB2kxiPx7AwngZJJoxr3ZiI3RQYy%2FMPjnxiZ3oD3qOP6re4%2BbkhARNdzddkO4QNCJJqxbHxSJ72TZoxpbV%2BLHa%2FtSwLCmYL4XiSBP%2Bdf82iSiVDnzDr0SKwT&X-Amz-Signature=668b8b20e347349900da3eebb4c4f153cbc0d8efe2902ef517bf615ac2e505cd&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A5P33S6%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxzieWjkkYvqPY8EC%2BIQN1kpICy0xaak%2B9dbOK3%2FavrAIhAM4ylExD4AjoRXFPFDlbSJ2I4eAJg%2B8pA%2BDBi08mBrftKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4m9xmiOCtaJDf76cq3AOhZrR2aqChWkhYq4mCg0qYSQU18ldLvAG8uuMk3DVoOQVb8%2FDDilIBVNp6M0v8qccXc%2FIQmwqMUOc0kgo7Hzlymiw1%2BY97YVPJmyEPDJKJthEVU3Kdri8K8x0scKctLl4OEPCFQpauvMzV%2FHxe1FIzq04ct2whmO8ZbSmq4ps7g9LFnDWnUUNagtbT%2F1TqvBWzR9uVahvRylphNjWI4wh%2FDZe%2FG6%2BmxxnvxZ4AsQoKfbJrvPJ0aH2XUCL%2BD9%2Fb0wvUcV14hp53l13mKwNXKPUKhcKc3QuPxePETt75rJVp%2BR7Dx%2FQn9pJxarAbE0nWHRJG4AlQOkfSlmwiTO0tcKv9m471F1T5zze8XiS8ZbUJkdI1y9dmwUvZP86K64PE52UnSt0EDfPsc5An24jOjbB%2BuAFoC6wlMFcHNPOYCjctJj%2Bqv62eAQpZO7IFZ4l3zsArWCdsZv6EU4CpiVEyHl9DzOa5ckS5d6QEFEi2aCOSyHFOXIejMmmMKlQvXCN9%2FcwCwwBb%2BGSVEg8Tmim2iHuqXhKKLQ1pKax9Mmefz6loO0sorDHoK%2BESR6%2FMAlzP9NK7IYgyDeP%2FJfAbmSgci6%2FqYUlNvtM9c%2B9CNbcPxfC4kLvLbX8QHuyFx5oWmjDPwYC9BjqkAbxkoRfhKCPR1yDAVWwHr3Ji5mbZDQ7YSj4AnXb3MBNSXOoNEcwBq1SQymxE15g85FxT8VEO2LMzrHkcSHDqP4I8r6seFDjpuC3oUB2kxiPx7AwngZJJoxr3ZiI3RQYy%2FMPjnxiZ3oD3qOP6re4%2BbkhARNdzddkO4QNCJJqxbHxSJ72TZoxpbV%2BLHa%2FtSwLCmYL4XiSBP%2Bdf82iSiVDnzDr0SKwT&X-Amz-Signature=0ebde9f791c34b9cc81add8845e82101f73d897eae3e40123383ad831ae3d743&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A5P33S6%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxzieWjkkYvqPY8EC%2BIQN1kpICy0xaak%2B9dbOK3%2FavrAIhAM4ylExD4AjoRXFPFDlbSJ2I4eAJg%2B8pA%2BDBi08mBrftKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4m9xmiOCtaJDf76cq3AOhZrR2aqChWkhYq4mCg0qYSQU18ldLvAG8uuMk3DVoOQVb8%2FDDilIBVNp6M0v8qccXc%2FIQmwqMUOc0kgo7Hzlymiw1%2BY97YVPJmyEPDJKJthEVU3Kdri8K8x0scKctLl4OEPCFQpauvMzV%2FHxe1FIzq04ct2whmO8ZbSmq4ps7g9LFnDWnUUNagtbT%2F1TqvBWzR9uVahvRylphNjWI4wh%2FDZe%2FG6%2BmxxnvxZ4AsQoKfbJrvPJ0aH2XUCL%2BD9%2Fb0wvUcV14hp53l13mKwNXKPUKhcKc3QuPxePETt75rJVp%2BR7Dx%2FQn9pJxarAbE0nWHRJG4AlQOkfSlmwiTO0tcKv9m471F1T5zze8XiS8ZbUJkdI1y9dmwUvZP86K64PE52UnSt0EDfPsc5An24jOjbB%2BuAFoC6wlMFcHNPOYCjctJj%2Bqv62eAQpZO7IFZ4l3zsArWCdsZv6EU4CpiVEyHl9DzOa5ckS5d6QEFEi2aCOSyHFOXIejMmmMKlQvXCN9%2FcwCwwBb%2BGSVEg8Tmim2iHuqXhKKLQ1pKax9Mmefz6loO0sorDHoK%2BESR6%2FMAlzP9NK7IYgyDeP%2FJfAbmSgci6%2FqYUlNvtM9c%2B9CNbcPxfC4kLvLbX8QHuyFx5oWmjDPwYC9BjqkAbxkoRfhKCPR1yDAVWwHr3Ji5mbZDQ7YSj4AnXb3MBNSXOoNEcwBq1SQymxE15g85FxT8VEO2LMzrHkcSHDqP4I8r6seFDjpuC3oUB2kxiPx7AwngZJJoxr3ZiI3RQYy%2FMPjnxiZ3oD3qOP6re4%2BbkhARNdzddkO4QNCJJqxbHxSJ72TZoxpbV%2BLHa%2FtSwLCmYL4XiSBP%2Bdf82iSiVDnzDr0SKwT&X-Amz-Signature=08940f18942a17e1e912ca495cd17b7a13bc45e2a7d9eb4b27f1366e1e0fbad4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A5P33S6%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxzieWjkkYvqPY8EC%2BIQN1kpICy0xaak%2B9dbOK3%2FavrAIhAM4ylExD4AjoRXFPFDlbSJ2I4eAJg%2B8pA%2BDBi08mBrftKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4m9xmiOCtaJDf76cq3AOhZrR2aqChWkhYq4mCg0qYSQU18ldLvAG8uuMk3DVoOQVb8%2FDDilIBVNp6M0v8qccXc%2FIQmwqMUOc0kgo7Hzlymiw1%2BY97YVPJmyEPDJKJthEVU3Kdri8K8x0scKctLl4OEPCFQpauvMzV%2FHxe1FIzq04ct2whmO8ZbSmq4ps7g9LFnDWnUUNagtbT%2F1TqvBWzR9uVahvRylphNjWI4wh%2FDZe%2FG6%2BmxxnvxZ4AsQoKfbJrvPJ0aH2XUCL%2BD9%2Fb0wvUcV14hp53l13mKwNXKPUKhcKc3QuPxePETt75rJVp%2BR7Dx%2FQn9pJxarAbE0nWHRJG4AlQOkfSlmwiTO0tcKv9m471F1T5zze8XiS8ZbUJkdI1y9dmwUvZP86K64PE52UnSt0EDfPsc5An24jOjbB%2BuAFoC6wlMFcHNPOYCjctJj%2Bqv62eAQpZO7IFZ4l3zsArWCdsZv6EU4CpiVEyHl9DzOa5ckS5d6QEFEi2aCOSyHFOXIejMmmMKlQvXCN9%2FcwCwwBb%2BGSVEg8Tmim2iHuqXhKKLQ1pKax9Mmefz6loO0sorDHoK%2BESR6%2FMAlzP9NK7IYgyDeP%2FJfAbmSgci6%2FqYUlNvtM9c%2B9CNbcPxfC4kLvLbX8QHuyFx5oWmjDPwYC9BjqkAbxkoRfhKCPR1yDAVWwHr3Ji5mbZDQ7YSj4AnXb3MBNSXOoNEcwBq1SQymxE15g85FxT8VEO2LMzrHkcSHDqP4I8r6seFDjpuC3oUB2kxiPx7AwngZJJoxr3ZiI3RQYy%2FMPjnxiZ3oD3qOP6re4%2BbkhARNdzddkO4QNCJJqxbHxSJ72TZoxpbV%2BLHa%2FtSwLCmYL4XiSBP%2Bdf82iSiVDnzDr0SKwT&X-Amz-Signature=7fc57b48e9590235567fb37d452ed6498eee0ce9d3364db8e71bff071b76ced4&X-Amz-SignedHeaders=host&x-id=GetObject)

(From Articulated Robotics)

# creating launch file

make a launch folder called `display.launch.py`

**Nodes we are adding:**

{{< table "table-striped table-hover table-responsive" >}}

|   |   |
| - | - |
|   |   |
|   |   |

{{< /table >}}

- robot_state_publisher_node (reads the URDF and publishes to `/robot_description` all non-fixed joints, static joints and links)
- joint_state_publisher_node (finds all of the non-fixed joints and publishes to `/joint_states`)
- joint_state_publisher_gui_node (the same as joint_state_publisher_node but with a gui on top)
- rviz_node

## launch file

```python
import launch
from launch.substitutions import Command, LaunchConfiguration
import launch_ros
import os

def generate_launch_description():
    pkg_share = launch_ros.substitutions.FindPackageShare(package='mbot_pkg').find('mbot_pkg')
    default_model_path = os.path.join(pkg_share, 'urdf/mbot_description.urdf')
    default_rviz_config_path = os.path.join(pkg_share, 'rviz/urdf_config.rviz')

    robot_state_publisher_node = launch_ros.actions.Node(
        package='robot_state_publisher',
        executable='robot_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', LaunchConfiguration('model')])}]
    )
    joint_state_publisher_node = launch_ros.actions.Node(
        package='joint_state_publisher',
        executable='joint_state_publisher',
        name='joint_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', default_model_path])}],
        condition=launch.conditions.UnlessCondition(LaunchConfiguration('gui'))
    )
    joint_state_publisher_gui_node = launch_ros.actions.Node(
        package='joint_state_publisher_gui',
        executable='joint_state_publisher_gui',
        name='joint_state_publisher_gui',
        condition=launch.conditions.IfCondition(LaunchConfiguration('gui'))
    )
    rviz_node = launch_ros.actions.Node(
        package='rviz2',
        executable='rviz2',
        name='rviz2',
        output='screen',
        arguments=['-d', LaunchConfiguration('rvizconfig')],
    )

    return launch.LaunchDescription([
        launch.actions.DeclareLaunchArgument(name='gui', default_value='True',
                                            description='Flag to enable joint_state_publisher_gui'),
        launch.actions.DeclareLaunchArgument(name='model', default_value=default_model_path,
                                            description='Absolute path to robot urdf file'),
        launch.actions.DeclareLaunchArgument(name='rvizconfig', default_value=default_rviz_config_path,
                                            description='Absolute path to rviz config file'),
        joint_state_publisher_node,
        joint_state_publisher_gui_node,
        robot_state_publisher_node,
        rviz_node
    ])
```

## add new files to `setup.py` 

```python
import os
from glob import glob

from setuptools import find_packages, setup

package_name = 'mbot_code'

setup(
    name=package_name,
    version='0.0.0',
    packages=find_packages(exclude=['test']),
    data_files=[
        ('share/ament_index/resource_index/packages',
            ['resource/' + package_name]),
        ('share/' + package_name, ['package.xml']),
        (os.path.join('share', package_name, 'urdf'), glob('urdf/*.urdf')),
        (os.path.join('share', package_name, 'rviz'), glob('rviz/*.rviz*')),
        (os.path.join('share', package_name), glob('launch/*launch.[pxy][yma]*')),
    ],
    ...
```

run:

```bash
colcon build --symlink-install
ros2 launch mbot_pkg display.launch.py
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A5P33S6%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxzieWjkkYvqPY8EC%2BIQN1kpICy0xaak%2B9dbOK3%2FavrAIhAM4ylExD4AjoRXFPFDlbSJ2I4eAJg%2B8pA%2BDBi08mBrftKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4m9xmiOCtaJDf76cq3AOhZrR2aqChWkhYq4mCg0qYSQU18ldLvAG8uuMk3DVoOQVb8%2FDDilIBVNp6M0v8qccXc%2FIQmwqMUOc0kgo7Hzlymiw1%2BY97YVPJmyEPDJKJthEVU3Kdri8K8x0scKctLl4OEPCFQpauvMzV%2FHxe1FIzq04ct2whmO8ZbSmq4ps7g9LFnDWnUUNagtbT%2F1TqvBWzR9uVahvRylphNjWI4wh%2FDZe%2FG6%2BmxxnvxZ4AsQoKfbJrvPJ0aH2XUCL%2BD9%2Fb0wvUcV14hp53l13mKwNXKPUKhcKc3QuPxePETt75rJVp%2BR7Dx%2FQn9pJxarAbE0nWHRJG4AlQOkfSlmwiTO0tcKv9m471F1T5zze8XiS8ZbUJkdI1y9dmwUvZP86K64PE52UnSt0EDfPsc5An24jOjbB%2BuAFoC6wlMFcHNPOYCjctJj%2Bqv62eAQpZO7IFZ4l3zsArWCdsZv6EU4CpiVEyHl9DzOa5ckS5d6QEFEi2aCOSyHFOXIejMmmMKlQvXCN9%2FcwCwwBb%2BGSVEg8Tmim2iHuqXhKKLQ1pKax9Mmefz6loO0sorDHoK%2BESR6%2FMAlzP9NK7IYgyDeP%2FJfAbmSgci6%2FqYUlNvtM9c%2B9CNbcPxfC4kLvLbX8QHuyFx5oWmjDPwYC9BjqkAbxkoRfhKCPR1yDAVWwHr3Ji5mbZDQ7YSj4AnXb3MBNSXOoNEcwBq1SQymxE15g85FxT8VEO2LMzrHkcSHDqP4I8r6seFDjpuC3oUB2kxiPx7AwngZJJoxr3ZiI3RQYy%2FMPjnxiZ3oD3qOP6re4%2BbkhARNdzddkO4QNCJJqxbHxSJ72TZoxpbV%2BLHa%2FtSwLCmYL4XiSBP%2Bdf82iSiVDnzDr0SKwT&X-Amz-Signature=433b02727a973c0e83ce7269d57c40b40036dd6a476c1b51fa2172dde976da13&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A5P33S6%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxzieWjkkYvqPY8EC%2BIQN1kpICy0xaak%2B9dbOK3%2FavrAIhAM4ylExD4AjoRXFPFDlbSJ2I4eAJg%2B8pA%2BDBi08mBrftKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4m9xmiOCtaJDf76cq3AOhZrR2aqChWkhYq4mCg0qYSQU18ldLvAG8uuMk3DVoOQVb8%2FDDilIBVNp6M0v8qccXc%2FIQmwqMUOc0kgo7Hzlymiw1%2BY97YVPJmyEPDJKJthEVU3Kdri8K8x0scKctLl4OEPCFQpauvMzV%2FHxe1FIzq04ct2whmO8ZbSmq4ps7g9LFnDWnUUNagtbT%2F1TqvBWzR9uVahvRylphNjWI4wh%2FDZe%2FG6%2BmxxnvxZ4AsQoKfbJrvPJ0aH2XUCL%2BD9%2Fb0wvUcV14hp53l13mKwNXKPUKhcKc3QuPxePETt75rJVp%2BR7Dx%2FQn9pJxarAbE0nWHRJG4AlQOkfSlmwiTO0tcKv9m471F1T5zze8XiS8ZbUJkdI1y9dmwUvZP86K64PE52UnSt0EDfPsc5An24jOjbB%2BuAFoC6wlMFcHNPOYCjctJj%2Bqv62eAQpZO7IFZ4l3zsArWCdsZv6EU4CpiVEyHl9DzOa5ckS5d6QEFEi2aCOSyHFOXIejMmmMKlQvXCN9%2FcwCwwBb%2BGSVEg8Tmim2iHuqXhKKLQ1pKax9Mmefz6loO0sorDHoK%2BESR6%2FMAlzP9NK7IYgyDeP%2FJfAbmSgci6%2FqYUlNvtM9c%2B9CNbcPxfC4kLvLbX8QHuyFx5oWmjDPwYC9BjqkAbxkoRfhKCPR1yDAVWwHr3Ji5mbZDQ7YSj4AnXb3MBNSXOoNEcwBq1SQymxE15g85FxT8VEO2LMzrHkcSHDqP4I8r6seFDjpuC3oUB2kxiPx7AwngZJJoxr3ZiI3RQYy%2FMPjnxiZ3oD3qOP6re4%2BbkhARNdzddkO4QNCJJqxbHxSJ72TZoxpbV%2BLHa%2FtSwLCmYL4XiSBP%2Bdf82iSiVDnzDr0SKwT&X-Amz-Signature=46dfbf87f02c885008a663c91be15587291095f741d23d38d29277fe36322544&X-Amz-SignedHeaders=host&x-id=GetObject)
