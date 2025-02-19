---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-02-07T18:41:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-02-07T18:41:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

TODO: add rqt graphs for each time we add a node for the Nav2 Stack series

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKME5DGO%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCej%2FAYENBg8ozAbSZ0TYj%2Ffx8lw0yXyTW1h6aFhw62gQIgc32Cp2kH59meK6j9PgMQ8QQYJf1mlw6HTShFZeX%2FtewqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFg7kR8FjhPsXLjeSrcA6prLD%2FNvVpkB4sP20GkMZ2txYRfudGJQ1sTpNrPqSaP3j%2Bee5I7rRVneIadmPVrSz0CHFuwEipm5V%2FfdsPX4K8wFygCRWHG1O8D7OKbGoGIkNtQz9hFPgTaQPcTu%2FzBLDJk9w%2F06SnNDwlzJ%2BI2VyMvAQ2fXQc3faK7p8wOR7l389dLYA1zVq8iN9Ts%2B0ItbldyzDi%2BnmPDeB6zLG%2BbXDORTBH7AujLBCl%2FKDAkrXQskI2JrrCWMFP7CDdgpmK%2FcTnystaQw0wNcwEDKiH17hZgbulss%2F3fVaN9wr7w5bvddpDOIT%2FTKiQRKfcbyoei%2B7v53hJHA1AT4NiOPJhDvPSO8OlNZKswYe%2B%2Fl0E%2Fr87C1UHUTXcsSJJ%2BS2HiFP75M0VD4zXeggHlw1EosdSODngDAqnBjrS6HojMd6NdHhgeQtH1LGLbBZh4A4T0Hp4R1Om5jCrTVzW7TZr%2FJ0qcpcCGdc3EZcC85PA%2FHqtkT1hEAFI%2F7ia6UUKpaIfe6D3IyzLUK%2FyjQpbvRSrOdj8EFEaZdmP55%2F24hqAD0X%2Fbf3EKqTrXG2NfvdQ3mO8P4URQe7wVNG8%2BbfGME6670uXeec7ghRRhCX4yiGUQ%2BC7Du%2BS26V2qsNqmnam%2BgyCfMIzv2L0GOqUBDLAPrKlYALwbispoAulz%2F4L3VnvUIQsD5Wyr2LHI3cEw29El6JlDu8%2FZRP97DqXID9CXXTg1fwRnm6qaG9f%2FHUNHjxKuqpuILCEitly5T8UH6PB5rYPj7QO%2Bu0IVWPCu7xxP6fstfb2j3Rqadj1fgn4Z7D7OsiDSsmLP12fBECP4WX%2FEkdEfYhdOFQNoNI82C3TbedDqFtXONTrcMxmA4mnscOTP&X-Amz-Signature=340eb7aa27c1f5ec219745127754661c56cf84e889b022bcb662d48fa7389417&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKME5DGO%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCej%2FAYENBg8ozAbSZ0TYj%2Ffx8lw0yXyTW1h6aFhw62gQIgc32Cp2kH59meK6j9PgMQ8QQYJf1mlw6HTShFZeX%2FtewqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFg7kR8FjhPsXLjeSrcA6prLD%2FNvVpkB4sP20GkMZ2txYRfudGJQ1sTpNrPqSaP3j%2Bee5I7rRVneIadmPVrSz0CHFuwEipm5V%2FfdsPX4K8wFygCRWHG1O8D7OKbGoGIkNtQz9hFPgTaQPcTu%2FzBLDJk9w%2F06SnNDwlzJ%2BI2VyMvAQ2fXQc3faK7p8wOR7l389dLYA1zVq8iN9Ts%2B0ItbldyzDi%2BnmPDeB6zLG%2BbXDORTBH7AujLBCl%2FKDAkrXQskI2JrrCWMFP7CDdgpmK%2FcTnystaQw0wNcwEDKiH17hZgbulss%2F3fVaN9wr7w5bvddpDOIT%2FTKiQRKfcbyoei%2B7v53hJHA1AT4NiOPJhDvPSO8OlNZKswYe%2B%2Fl0E%2Fr87C1UHUTXcsSJJ%2BS2HiFP75M0VD4zXeggHlw1EosdSODngDAqnBjrS6HojMd6NdHhgeQtH1LGLbBZh4A4T0Hp4R1Om5jCrTVzW7TZr%2FJ0qcpcCGdc3EZcC85PA%2FHqtkT1hEAFI%2F7ia6UUKpaIfe6D3IyzLUK%2FyjQpbvRSrOdj8EFEaZdmP55%2F24hqAD0X%2Fbf3EKqTrXG2NfvdQ3mO8P4URQe7wVNG8%2BbfGME6670uXeec7ghRRhCX4yiGUQ%2BC7Du%2BS26V2qsNqmnam%2BgyCfMIzv2L0GOqUBDLAPrKlYALwbispoAulz%2F4L3VnvUIQsD5Wyr2LHI3cEw29El6JlDu8%2FZRP97DqXID9CXXTg1fwRnm6qaG9f%2FHUNHjxKuqpuILCEitly5T8UH6PB5rYPj7QO%2Bu0IVWPCu7xxP6fstfb2j3Rqadj1fgn4Z7D7OsiDSsmLP12fBECP4WX%2FEkdEfYhdOFQNoNI82C3TbedDqFtXONTrcMxmA4mnscOTP&X-Amz-Signature=c01b27107572575f62d33235bc7c7ec2e89ba6b7b4f41ab78fbbaeb20e43682e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKME5DGO%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCej%2FAYENBg8ozAbSZ0TYj%2Ffx8lw0yXyTW1h6aFhw62gQIgc32Cp2kH59meK6j9PgMQ8QQYJf1mlw6HTShFZeX%2FtewqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFg7kR8FjhPsXLjeSrcA6prLD%2FNvVpkB4sP20GkMZ2txYRfudGJQ1sTpNrPqSaP3j%2Bee5I7rRVneIadmPVrSz0CHFuwEipm5V%2FfdsPX4K8wFygCRWHG1O8D7OKbGoGIkNtQz9hFPgTaQPcTu%2FzBLDJk9w%2F06SnNDwlzJ%2BI2VyMvAQ2fXQc3faK7p8wOR7l389dLYA1zVq8iN9Ts%2B0ItbldyzDi%2BnmPDeB6zLG%2BbXDORTBH7AujLBCl%2FKDAkrXQskI2JrrCWMFP7CDdgpmK%2FcTnystaQw0wNcwEDKiH17hZgbulss%2F3fVaN9wr7w5bvddpDOIT%2FTKiQRKfcbyoei%2B7v53hJHA1AT4NiOPJhDvPSO8OlNZKswYe%2B%2Fl0E%2Fr87C1UHUTXcsSJJ%2BS2HiFP75M0VD4zXeggHlw1EosdSODngDAqnBjrS6HojMd6NdHhgeQtH1LGLbBZh4A4T0Hp4R1Om5jCrTVzW7TZr%2FJ0qcpcCGdc3EZcC85PA%2FHqtkT1hEAFI%2F7ia6UUKpaIfe6D3IyzLUK%2FyjQpbvRSrOdj8EFEaZdmP55%2F24hqAD0X%2Fbf3EKqTrXG2NfvdQ3mO8P4URQe7wVNG8%2BbfGME6670uXeec7ghRRhCX4yiGUQ%2BC7Du%2BS26V2qsNqmnam%2BgyCfMIzv2L0GOqUBDLAPrKlYALwbispoAulz%2F4L3VnvUIQsD5Wyr2LHI3cEw29El6JlDu8%2FZRP97DqXID9CXXTg1fwRnm6qaG9f%2FHUNHjxKuqpuILCEitly5T8UH6PB5rYPj7QO%2Bu0IVWPCu7xxP6fstfb2j3Rqadj1fgn4Z7D7OsiDSsmLP12fBECP4WX%2FEkdEfYhdOFQNoNI82C3TbedDqFtXONTrcMxmA4mnscOTP&X-Amz-Signature=06762f3757aae4a1aaaf7515bcac5ff06aa4304cf92e4e797fd6a83d797a4668&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKME5DGO%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCej%2FAYENBg8ozAbSZ0TYj%2Ffx8lw0yXyTW1h6aFhw62gQIgc32Cp2kH59meK6j9PgMQ8QQYJf1mlw6HTShFZeX%2FtewqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFg7kR8FjhPsXLjeSrcA6prLD%2FNvVpkB4sP20GkMZ2txYRfudGJQ1sTpNrPqSaP3j%2Bee5I7rRVneIadmPVrSz0CHFuwEipm5V%2FfdsPX4K8wFygCRWHG1O8D7OKbGoGIkNtQz9hFPgTaQPcTu%2FzBLDJk9w%2F06SnNDwlzJ%2BI2VyMvAQ2fXQc3faK7p8wOR7l389dLYA1zVq8iN9Ts%2B0ItbldyzDi%2BnmPDeB6zLG%2BbXDORTBH7AujLBCl%2FKDAkrXQskI2JrrCWMFP7CDdgpmK%2FcTnystaQw0wNcwEDKiH17hZgbulss%2F3fVaN9wr7w5bvddpDOIT%2FTKiQRKfcbyoei%2B7v53hJHA1AT4NiOPJhDvPSO8OlNZKswYe%2B%2Fl0E%2Fr87C1UHUTXcsSJJ%2BS2HiFP75M0VD4zXeggHlw1EosdSODngDAqnBjrS6HojMd6NdHhgeQtH1LGLbBZh4A4T0Hp4R1Om5jCrTVzW7TZr%2FJ0qcpcCGdc3EZcC85PA%2FHqtkT1hEAFI%2F7ia6UUKpaIfe6D3IyzLUK%2FyjQpbvRSrOdj8EFEaZdmP55%2F24hqAD0X%2Fbf3EKqTrXG2NfvdQ3mO8P4URQe7wVNG8%2BbfGME6670uXeec7ghRRhCX4yiGUQ%2BC7Du%2BS26V2qsNqmnam%2BgyCfMIzv2L0GOqUBDLAPrKlYALwbispoAulz%2F4L3VnvUIQsD5Wyr2LHI3cEw29El6JlDu8%2FZRP97DqXID9CXXTg1fwRnm6qaG9f%2FHUNHjxKuqpuILCEitly5T8UH6PB5rYPj7QO%2Bu0IVWPCu7xxP6fstfb2j3Rqadj1fgn4Z7D7OsiDSsmLP12fBECP4WX%2FEkdEfYhdOFQNoNI82C3TbedDqFtXONTrcMxmA4mnscOTP&X-Amz-Signature=dbb5a3663679dc76a7af1040d8f6e97bf2534e8e033f31fd1c4e9d2a87facb19&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKME5DGO%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCej%2FAYENBg8ozAbSZ0TYj%2Ffx8lw0yXyTW1h6aFhw62gQIgc32Cp2kH59meK6j9PgMQ8QQYJf1mlw6HTShFZeX%2FtewqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFg7kR8FjhPsXLjeSrcA6prLD%2FNvVpkB4sP20GkMZ2txYRfudGJQ1sTpNrPqSaP3j%2Bee5I7rRVneIadmPVrSz0CHFuwEipm5V%2FfdsPX4K8wFygCRWHG1O8D7OKbGoGIkNtQz9hFPgTaQPcTu%2FzBLDJk9w%2F06SnNDwlzJ%2BI2VyMvAQ2fXQc3faK7p8wOR7l389dLYA1zVq8iN9Ts%2B0ItbldyzDi%2BnmPDeB6zLG%2BbXDORTBH7AujLBCl%2FKDAkrXQskI2JrrCWMFP7CDdgpmK%2FcTnystaQw0wNcwEDKiH17hZgbulss%2F3fVaN9wr7w5bvddpDOIT%2FTKiQRKfcbyoei%2B7v53hJHA1AT4NiOPJhDvPSO8OlNZKswYe%2B%2Fl0E%2Fr87C1UHUTXcsSJJ%2BS2HiFP75M0VD4zXeggHlw1EosdSODngDAqnBjrS6HojMd6NdHhgeQtH1LGLbBZh4A4T0Hp4R1Om5jCrTVzW7TZr%2FJ0qcpcCGdc3EZcC85PA%2FHqtkT1hEAFI%2F7ia6UUKpaIfe6D3IyzLUK%2FyjQpbvRSrOdj8EFEaZdmP55%2F24hqAD0X%2Fbf3EKqTrXG2NfvdQ3mO8P4URQe7wVNG8%2BbfGME6670uXeec7ghRRhCX4yiGUQ%2BC7Du%2BS26V2qsNqmnam%2BgyCfMIzv2L0GOqUBDLAPrKlYALwbispoAulz%2F4L3VnvUIQsD5Wyr2LHI3cEw29El6JlDu8%2FZRP97DqXID9CXXTg1fwRnm6qaG9f%2FHUNHjxKuqpuILCEitly5T8UH6PB5rYPj7QO%2Bu0IVWPCu7xxP6fstfb2j3Rqadj1fgn4Z7D7OsiDSsmLP12fBECP4WX%2FEkdEfYhdOFQNoNI82C3TbedDqFtXONTrcMxmA4mnscOTP&X-Amz-Signature=a74730feceb5254e85f1eb88175c75d996cc6987dbe6fcfc749f8e87c451af98&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKME5DGO%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCej%2FAYENBg8ozAbSZ0TYj%2Ffx8lw0yXyTW1h6aFhw62gQIgc32Cp2kH59meK6j9PgMQ8QQYJf1mlw6HTShFZeX%2FtewqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFg7kR8FjhPsXLjeSrcA6prLD%2FNvVpkB4sP20GkMZ2txYRfudGJQ1sTpNrPqSaP3j%2Bee5I7rRVneIadmPVrSz0CHFuwEipm5V%2FfdsPX4K8wFygCRWHG1O8D7OKbGoGIkNtQz9hFPgTaQPcTu%2FzBLDJk9w%2F06SnNDwlzJ%2BI2VyMvAQ2fXQc3faK7p8wOR7l389dLYA1zVq8iN9Ts%2B0ItbldyzDi%2BnmPDeB6zLG%2BbXDORTBH7AujLBCl%2FKDAkrXQskI2JrrCWMFP7CDdgpmK%2FcTnystaQw0wNcwEDKiH17hZgbulss%2F3fVaN9wr7w5bvddpDOIT%2FTKiQRKfcbyoei%2B7v53hJHA1AT4NiOPJhDvPSO8OlNZKswYe%2B%2Fl0E%2Fr87C1UHUTXcsSJJ%2BS2HiFP75M0VD4zXeggHlw1EosdSODngDAqnBjrS6HojMd6NdHhgeQtH1LGLbBZh4A4T0Hp4R1Om5jCrTVzW7TZr%2FJ0qcpcCGdc3EZcC85PA%2FHqtkT1hEAFI%2F7ia6UUKpaIfe6D3IyzLUK%2FyjQpbvRSrOdj8EFEaZdmP55%2F24hqAD0X%2Fbf3EKqTrXG2NfvdQ3mO8P4URQe7wVNG8%2BbfGME6670uXeec7ghRRhCX4yiGUQ%2BC7Du%2BS26V2qsNqmnam%2BgyCfMIzv2L0GOqUBDLAPrKlYALwbispoAulz%2F4L3VnvUIQsD5Wyr2LHI3cEw29El6JlDu8%2FZRP97DqXID9CXXTg1fwRnm6qaG9f%2FHUNHjxKuqpuILCEitly5T8UH6PB5rYPj7QO%2Bu0IVWPCu7xxP6fstfb2j3Rqadj1fgn4Z7D7OsiDSsmLP12fBECP4WX%2FEkdEfYhdOFQNoNI82C3TbedDqFtXONTrcMxmA4mnscOTP&X-Amz-Signature=ada58efa08b4d115fc42a3bbb44373bc87b4cc807eb8469ec243cd7ce73b7152&X-Amz-SignedHeaders=host&x-id=GetObject)
