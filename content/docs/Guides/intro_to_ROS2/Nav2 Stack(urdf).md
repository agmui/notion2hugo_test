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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SPDLNBJ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqAOLKYegKY9W8yOAhROvr%2FJF9X9iBZW%2Fh3w09YHAaPAIgdsi%2F3yGyD0B8DMcXFFf8eWXlWA4FCsgTAUHHbTwOwY4q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJ0E828H28IUa9%2BA6CrcAzEmcPF55Lnrvs3L6ZvK39fVV%2BNRoScw8YZ1GgkCWSK06vifpbM09ULzyy%2F883tUHv1hk2KM7V9IuDeKRYLHv9D64nrLan1Bs3c91SHdbI6%2Fy55On0eb5x%2B4bW%2BiDTGAXQNV9T9OjJo1fzSAiy%2FbpRg%2BZyLVFOge7sET3mO%2BALmbj9ZrBpolxcWRbsZT13iWI5ilDb1xVd088lKi044ZrBZZU7KLzsmtROswIMdcKnHDBlCgkE5ZsLJh5OHJQ2t54N4D6vzhxcMkbnQ2ESCDKMOWrXYrRzK%2FAL3jZLoU8NytK1loQa7EjnqYFkcWXp6ZPkqV0EN56RsrsxZ45Q1wdX5Nlj43syxDtgC%2FuC3dczX9eWJkl0bf%2BHkpdC%2BExYYtUp4%2FuAN6UDnEEfSpsZ2aZ2cbmCStl9wFfsWvLyq9jp7mTaYvW6bMRf8EvcCZ7jMnega4%2FvKPOz%2Bk9rm1LzFKZGdKXaT8oi9FdHZ7alkgW9VuAYXgml5CFR%2FsQYu3xkw7v3VtejBdBVzNu87CiGHM%2BcSKD7X4Go%2BKDzPis2OXlZAUIc2UMc5s512QzKqVlybWKBP2ubo2UloaLmy2IHKnRbG6gsV56D3mo1bPsET59wZS%2BYjtntgB3GG5agNOMILSur0GOqUBGI0MoarYKjbHWQ1CdqeBhXplRthvuLEM14Z7JALsP65Uqto6x5DMCs82tZhiWmUGWAYzV8DLiUdpOODfiSztd2RGSg%2F%2Fe17z8KG5FuYBG0FKqhLRDHweNFAzL0TZQEg%2FmjKrrjPumLnw08UsSqdGXNPelAwttqSIOhM8EeupeRVui1QYNijrPztg431G4uHNEIhA8%2BRzfcNsyL1vM%2BKY%2BcTnJYSi&X-Amz-Signature=44168993945b81cb1c03460d48ac485515872dbb030253276d38090cd98930cd&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SPDLNBJ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqAOLKYegKY9W8yOAhROvr%2FJF9X9iBZW%2Fh3w09YHAaPAIgdsi%2F3yGyD0B8DMcXFFf8eWXlWA4FCsgTAUHHbTwOwY4q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJ0E828H28IUa9%2BA6CrcAzEmcPF55Lnrvs3L6ZvK39fVV%2BNRoScw8YZ1GgkCWSK06vifpbM09ULzyy%2F883tUHv1hk2KM7V9IuDeKRYLHv9D64nrLan1Bs3c91SHdbI6%2Fy55On0eb5x%2B4bW%2BiDTGAXQNV9T9OjJo1fzSAiy%2FbpRg%2BZyLVFOge7sET3mO%2BALmbj9ZrBpolxcWRbsZT13iWI5ilDb1xVd088lKi044ZrBZZU7KLzsmtROswIMdcKnHDBlCgkE5ZsLJh5OHJQ2t54N4D6vzhxcMkbnQ2ESCDKMOWrXYrRzK%2FAL3jZLoU8NytK1loQa7EjnqYFkcWXp6ZPkqV0EN56RsrsxZ45Q1wdX5Nlj43syxDtgC%2FuC3dczX9eWJkl0bf%2BHkpdC%2BExYYtUp4%2FuAN6UDnEEfSpsZ2aZ2cbmCStl9wFfsWvLyq9jp7mTaYvW6bMRf8EvcCZ7jMnega4%2FvKPOz%2Bk9rm1LzFKZGdKXaT8oi9FdHZ7alkgW9VuAYXgml5CFR%2FsQYu3xkw7v3VtejBdBVzNu87CiGHM%2BcSKD7X4Go%2BKDzPis2OXlZAUIc2UMc5s512QzKqVlybWKBP2ubo2UloaLmy2IHKnRbG6gsV56D3mo1bPsET59wZS%2BYjtntgB3GG5agNOMILSur0GOqUBGI0MoarYKjbHWQ1CdqeBhXplRthvuLEM14Z7JALsP65Uqto6x5DMCs82tZhiWmUGWAYzV8DLiUdpOODfiSztd2RGSg%2F%2Fe17z8KG5FuYBG0FKqhLRDHweNFAzL0TZQEg%2FmjKrrjPumLnw08UsSqdGXNPelAwttqSIOhM8EeupeRVui1QYNijrPztg431G4uHNEIhA8%2BRzfcNsyL1vM%2BKY%2BcTnJYSi&X-Amz-Signature=4221595fb195c9733181eea4acd21b89e70267aeb39ee8e93cf129ba0b368a7b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SPDLNBJ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqAOLKYegKY9W8yOAhROvr%2FJF9X9iBZW%2Fh3w09YHAaPAIgdsi%2F3yGyD0B8DMcXFFf8eWXlWA4FCsgTAUHHbTwOwY4q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJ0E828H28IUa9%2BA6CrcAzEmcPF55Lnrvs3L6ZvK39fVV%2BNRoScw8YZ1GgkCWSK06vifpbM09ULzyy%2F883tUHv1hk2KM7V9IuDeKRYLHv9D64nrLan1Bs3c91SHdbI6%2Fy55On0eb5x%2B4bW%2BiDTGAXQNV9T9OjJo1fzSAiy%2FbpRg%2BZyLVFOge7sET3mO%2BALmbj9ZrBpolxcWRbsZT13iWI5ilDb1xVd088lKi044ZrBZZU7KLzsmtROswIMdcKnHDBlCgkE5ZsLJh5OHJQ2t54N4D6vzhxcMkbnQ2ESCDKMOWrXYrRzK%2FAL3jZLoU8NytK1loQa7EjnqYFkcWXp6ZPkqV0EN56RsrsxZ45Q1wdX5Nlj43syxDtgC%2FuC3dczX9eWJkl0bf%2BHkpdC%2BExYYtUp4%2FuAN6UDnEEfSpsZ2aZ2cbmCStl9wFfsWvLyq9jp7mTaYvW6bMRf8EvcCZ7jMnega4%2FvKPOz%2Bk9rm1LzFKZGdKXaT8oi9FdHZ7alkgW9VuAYXgml5CFR%2FsQYu3xkw7v3VtejBdBVzNu87CiGHM%2BcSKD7X4Go%2BKDzPis2OXlZAUIc2UMc5s512QzKqVlybWKBP2ubo2UloaLmy2IHKnRbG6gsV56D3mo1bPsET59wZS%2BYjtntgB3GG5agNOMILSur0GOqUBGI0MoarYKjbHWQ1CdqeBhXplRthvuLEM14Z7JALsP65Uqto6x5DMCs82tZhiWmUGWAYzV8DLiUdpOODfiSztd2RGSg%2F%2Fe17z8KG5FuYBG0FKqhLRDHweNFAzL0TZQEg%2FmjKrrjPumLnw08UsSqdGXNPelAwttqSIOhM8EeupeRVui1QYNijrPztg431G4uHNEIhA8%2BRzfcNsyL1vM%2BKY%2BcTnJYSi&X-Amz-Signature=9a01151145fd7d9bf1a8488e5a3cb9b0ad5bdfaa1f537174430c3047885274c1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SPDLNBJ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqAOLKYegKY9W8yOAhROvr%2FJF9X9iBZW%2Fh3w09YHAaPAIgdsi%2F3yGyD0B8DMcXFFf8eWXlWA4FCsgTAUHHbTwOwY4q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJ0E828H28IUa9%2BA6CrcAzEmcPF55Lnrvs3L6ZvK39fVV%2BNRoScw8YZ1GgkCWSK06vifpbM09ULzyy%2F883tUHv1hk2KM7V9IuDeKRYLHv9D64nrLan1Bs3c91SHdbI6%2Fy55On0eb5x%2B4bW%2BiDTGAXQNV9T9OjJo1fzSAiy%2FbpRg%2BZyLVFOge7sET3mO%2BALmbj9ZrBpolxcWRbsZT13iWI5ilDb1xVd088lKi044ZrBZZU7KLzsmtROswIMdcKnHDBlCgkE5ZsLJh5OHJQ2t54N4D6vzhxcMkbnQ2ESCDKMOWrXYrRzK%2FAL3jZLoU8NytK1loQa7EjnqYFkcWXp6ZPkqV0EN56RsrsxZ45Q1wdX5Nlj43syxDtgC%2FuC3dczX9eWJkl0bf%2BHkpdC%2BExYYtUp4%2FuAN6UDnEEfSpsZ2aZ2cbmCStl9wFfsWvLyq9jp7mTaYvW6bMRf8EvcCZ7jMnega4%2FvKPOz%2Bk9rm1LzFKZGdKXaT8oi9FdHZ7alkgW9VuAYXgml5CFR%2FsQYu3xkw7v3VtejBdBVzNu87CiGHM%2BcSKD7X4Go%2BKDzPis2OXlZAUIc2UMc5s512QzKqVlybWKBP2ubo2UloaLmy2IHKnRbG6gsV56D3mo1bPsET59wZS%2BYjtntgB3GG5agNOMILSur0GOqUBGI0MoarYKjbHWQ1CdqeBhXplRthvuLEM14Z7JALsP65Uqto6x5DMCs82tZhiWmUGWAYzV8DLiUdpOODfiSztd2RGSg%2F%2Fe17z8KG5FuYBG0FKqhLRDHweNFAzL0TZQEg%2FmjKrrjPumLnw08UsSqdGXNPelAwttqSIOhM8EeupeRVui1QYNijrPztg431G4uHNEIhA8%2BRzfcNsyL1vM%2BKY%2BcTnJYSi&X-Amz-Signature=7abcb2c7aca6e227ff15f4eadb7eed73f5be1589f0e2e16d7d3175605df5d22d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SPDLNBJ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqAOLKYegKY9W8yOAhROvr%2FJF9X9iBZW%2Fh3w09YHAaPAIgdsi%2F3yGyD0B8DMcXFFf8eWXlWA4FCsgTAUHHbTwOwY4q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJ0E828H28IUa9%2BA6CrcAzEmcPF55Lnrvs3L6ZvK39fVV%2BNRoScw8YZ1GgkCWSK06vifpbM09ULzyy%2F883tUHv1hk2KM7V9IuDeKRYLHv9D64nrLan1Bs3c91SHdbI6%2Fy55On0eb5x%2B4bW%2BiDTGAXQNV9T9OjJo1fzSAiy%2FbpRg%2BZyLVFOge7sET3mO%2BALmbj9ZrBpolxcWRbsZT13iWI5ilDb1xVd088lKi044ZrBZZU7KLzsmtROswIMdcKnHDBlCgkE5ZsLJh5OHJQ2t54N4D6vzhxcMkbnQ2ESCDKMOWrXYrRzK%2FAL3jZLoU8NytK1loQa7EjnqYFkcWXp6ZPkqV0EN56RsrsxZ45Q1wdX5Nlj43syxDtgC%2FuC3dczX9eWJkl0bf%2BHkpdC%2BExYYtUp4%2FuAN6UDnEEfSpsZ2aZ2cbmCStl9wFfsWvLyq9jp7mTaYvW6bMRf8EvcCZ7jMnega4%2FvKPOz%2Bk9rm1LzFKZGdKXaT8oi9FdHZ7alkgW9VuAYXgml5CFR%2FsQYu3xkw7v3VtejBdBVzNu87CiGHM%2BcSKD7X4Go%2BKDzPis2OXlZAUIc2UMc5s512QzKqVlybWKBP2ubo2UloaLmy2IHKnRbG6gsV56D3mo1bPsET59wZS%2BYjtntgB3GG5agNOMILSur0GOqUBGI0MoarYKjbHWQ1CdqeBhXplRthvuLEM14Z7JALsP65Uqto6x5DMCs82tZhiWmUGWAYzV8DLiUdpOODfiSztd2RGSg%2F%2Fe17z8KG5FuYBG0FKqhLRDHweNFAzL0TZQEg%2FmjKrrjPumLnw08UsSqdGXNPelAwttqSIOhM8EeupeRVui1QYNijrPztg431G4uHNEIhA8%2BRzfcNsyL1vM%2BKY%2BcTnJYSi&X-Amz-Signature=1721d42a393ffd110e76efc528c2216bfeea496b4a04a3425f88455a37b787cd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SPDLNBJ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqAOLKYegKY9W8yOAhROvr%2FJF9X9iBZW%2Fh3w09YHAaPAIgdsi%2F3yGyD0B8DMcXFFf8eWXlWA4FCsgTAUHHbTwOwY4q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJ0E828H28IUa9%2BA6CrcAzEmcPF55Lnrvs3L6ZvK39fVV%2BNRoScw8YZ1GgkCWSK06vifpbM09ULzyy%2F883tUHv1hk2KM7V9IuDeKRYLHv9D64nrLan1Bs3c91SHdbI6%2Fy55On0eb5x%2B4bW%2BiDTGAXQNV9T9OjJo1fzSAiy%2FbpRg%2BZyLVFOge7sET3mO%2BALmbj9ZrBpolxcWRbsZT13iWI5ilDb1xVd088lKi044ZrBZZU7KLzsmtROswIMdcKnHDBlCgkE5ZsLJh5OHJQ2t54N4D6vzhxcMkbnQ2ESCDKMOWrXYrRzK%2FAL3jZLoU8NytK1loQa7EjnqYFkcWXp6ZPkqV0EN56RsrsxZ45Q1wdX5Nlj43syxDtgC%2FuC3dczX9eWJkl0bf%2BHkpdC%2BExYYtUp4%2FuAN6UDnEEfSpsZ2aZ2cbmCStl9wFfsWvLyq9jp7mTaYvW6bMRf8EvcCZ7jMnega4%2FvKPOz%2Bk9rm1LzFKZGdKXaT8oi9FdHZ7alkgW9VuAYXgml5CFR%2FsQYu3xkw7v3VtejBdBVzNu87CiGHM%2BcSKD7X4Go%2BKDzPis2OXlZAUIc2UMc5s512QzKqVlybWKBP2ubo2UloaLmy2IHKnRbG6gsV56D3mo1bPsET59wZS%2BYjtntgB3GG5agNOMILSur0GOqUBGI0MoarYKjbHWQ1CdqeBhXplRthvuLEM14Z7JALsP65Uqto6x5DMCs82tZhiWmUGWAYzV8DLiUdpOODfiSztd2RGSg%2F%2Fe17z8KG5FuYBG0FKqhLRDHweNFAzL0TZQEg%2FmjKrrjPumLnw08UsSqdGXNPelAwttqSIOhM8EeupeRVui1QYNijrPztg431G4uHNEIhA8%2BRzfcNsyL1vM%2BKY%2BcTnJYSi&X-Amz-Signature=3d5f7c314cad41b1f496641056c016cce13984a34091ece90d29737dd8f09101&X-Amz-SignedHeaders=host&x-id=GetObject)
