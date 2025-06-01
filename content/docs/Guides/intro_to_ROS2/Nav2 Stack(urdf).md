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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRDIOIZE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYcta%2Bo%2FXnTQa%2B1BHc3Ux%2FGXJBBvGl1UECpH8gmxqE9AIgcSx8nBPBid3svGpgFKS%2Fv6RsCM41S9RG6HYfg5zpe6UqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKajxlasZ79850QOByrcA2z7fry9n850PMdDK1YR7uhIB9vqBBrom7X1PO%2FiSgRNISaHymBnq8Avca2HyjeV%2Bo7bb%2BBLOmZ1LFj9u2sjG6G8dRObulH8hwPJxOugelijTT7u9JOVumh4R3Aj3hIgw95eeFPwm5cCpceiRynvP3yzzmov%2B4MB1o9feFxwEqm%2BilB0y6K6z8zWYEXFKW8BeA8p57f8V%2F7zxvW1GyqjzoziBo1VVnUXQy0DYzyqE%2FOyt79RPuPvxklOfZRM%2Bu%2BW6SRursWh6KTCmTL5YXTpsqYhWcHDt4Yy2uDj737pWXAAcHrU0DMKZxGgm49uZVFE1sskvayF5YpEgoXjxSCrtBCuWw6Ckkv6hgv26iPkWtFtYeFJn%2BGokNANPxh3yg5GKCqC99YfhKTxAXswTkSksy3gAtrbJ47iHOmKnbRFNAVSH3RjC1U5Gf%2FXqdMKDUAMtSPLurOqFBvFZqJghyk6yfbtQAFRKqgBz0Q4ThhxPD4PmX%2BMRxDP%2ByP9jj3zDicezH8FXJfjwa6r87qXs6VVMM2ZdCTsCI%2FLcEThlOGfLsEA%2BG4KIYNgyHqN6Dl5zSDxEo4fUDEHoAL0PJWNK6PHbE3Tn4QGLRKmfY0w5%2B5GhmNZSbofAbHag4aG%2FM%2FWMLOU7sEGOqUB1QlXkIpqe2xwCAuJq7CBxaP3tQWJ%2Bx9%2BzvcWa58NlyifR%2BHdh4CHHDhqfdCCtA67q817JtsolyNMRVHAbP8lP6%2FqgoTUR2V1qDCXFdyBHvw33DJfJEb1dGUlt0by4EvZSKK6ukqFlbjhv83t4YoPMeaPLLITZleG33hsHgsjIl3DacKeV2c1vK34Go2143V6jX0lcqNesMWjgohm1Jzad5O02TBa&X-Amz-Signature=bdb00af9994cdd09ace6fab78ab86968765aa751320848014cef470eb8ac0df6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRDIOIZE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYcta%2Bo%2FXnTQa%2B1BHc3Ux%2FGXJBBvGl1UECpH8gmxqE9AIgcSx8nBPBid3svGpgFKS%2Fv6RsCM41S9RG6HYfg5zpe6UqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKajxlasZ79850QOByrcA2z7fry9n850PMdDK1YR7uhIB9vqBBrom7X1PO%2FiSgRNISaHymBnq8Avca2HyjeV%2Bo7bb%2BBLOmZ1LFj9u2sjG6G8dRObulH8hwPJxOugelijTT7u9JOVumh4R3Aj3hIgw95eeFPwm5cCpceiRynvP3yzzmov%2B4MB1o9feFxwEqm%2BilB0y6K6z8zWYEXFKW8BeA8p57f8V%2F7zxvW1GyqjzoziBo1VVnUXQy0DYzyqE%2FOyt79RPuPvxklOfZRM%2Bu%2BW6SRursWh6KTCmTL5YXTpsqYhWcHDt4Yy2uDj737pWXAAcHrU0DMKZxGgm49uZVFE1sskvayF5YpEgoXjxSCrtBCuWw6Ckkv6hgv26iPkWtFtYeFJn%2BGokNANPxh3yg5GKCqC99YfhKTxAXswTkSksy3gAtrbJ47iHOmKnbRFNAVSH3RjC1U5Gf%2FXqdMKDUAMtSPLurOqFBvFZqJghyk6yfbtQAFRKqgBz0Q4ThhxPD4PmX%2BMRxDP%2ByP9jj3zDicezH8FXJfjwa6r87qXs6VVMM2ZdCTsCI%2FLcEThlOGfLsEA%2BG4KIYNgyHqN6Dl5zSDxEo4fUDEHoAL0PJWNK6PHbE3Tn4QGLRKmfY0w5%2B5GhmNZSbofAbHag4aG%2FM%2FWMLOU7sEGOqUB1QlXkIpqe2xwCAuJq7CBxaP3tQWJ%2Bx9%2BzvcWa58NlyifR%2BHdh4CHHDhqfdCCtA67q817JtsolyNMRVHAbP8lP6%2FqgoTUR2V1qDCXFdyBHvw33DJfJEb1dGUlt0by4EvZSKK6ukqFlbjhv83t4YoPMeaPLLITZleG33hsHgsjIl3DacKeV2c1vK34Go2143V6jX0lcqNesMWjgohm1Jzad5O02TBa&X-Amz-Signature=87701a613f9d073c4404a56046e6daa46c4fb927a436700e273c3464c1971b9e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRDIOIZE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYcta%2Bo%2FXnTQa%2B1BHc3Ux%2FGXJBBvGl1UECpH8gmxqE9AIgcSx8nBPBid3svGpgFKS%2Fv6RsCM41S9RG6HYfg5zpe6UqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKajxlasZ79850QOByrcA2z7fry9n850PMdDK1YR7uhIB9vqBBrom7X1PO%2FiSgRNISaHymBnq8Avca2HyjeV%2Bo7bb%2BBLOmZ1LFj9u2sjG6G8dRObulH8hwPJxOugelijTT7u9JOVumh4R3Aj3hIgw95eeFPwm5cCpceiRynvP3yzzmov%2B4MB1o9feFxwEqm%2BilB0y6K6z8zWYEXFKW8BeA8p57f8V%2F7zxvW1GyqjzoziBo1VVnUXQy0DYzyqE%2FOyt79RPuPvxklOfZRM%2Bu%2BW6SRursWh6KTCmTL5YXTpsqYhWcHDt4Yy2uDj737pWXAAcHrU0DMKZxGgm49uZVFE1sskvayF5YpEgoXjxSCrtBCuWw6Ckkv6hgv26iPkWtFtYeFJn%2BGokNANPxh3yg5GKCqC99YfhKTxAXswTkSksy3gAtrbJ47iHOmKnbRFNAVSH3RjC1U5Gf%2FXqdMKDUAMtSPLurOqFBvFZqJghyk6yfbtQAFRKqgBz0Q4ThhxPD4PmX%2BMRxDP%2ByP9jj3zDicezH8FXJfjwa6r87qXs6VVMM2ZdCTsCI%2FLcEThlOGfLsEA%2BG4KIYNgyHqN6Dl5zSDxEo4fUDEHoAL0PJWNK6PHbE3Tn4QGLRKmfY0w5%2B5GhmNZSbofAbHag4aG%2FM%2FWMLOU7sEGOqUB1QlXkIpqe2xwCAuJq7CBxaP3tQWJ%2Bx9%2BzvcWa58NlyifR%2BHdh4CHHDhqfdCCtA67q817JtsolyNMRVHAbP8lP6%2FqgoTUR2V1qDCXFdyBHvw33DJfJEb1dGUlt0by4EvZSKK6ukqFlbjhv83t4YoPMeaPLLITZleG33hsHgsjIl3DacKeV2c1vK34Go2143V6jX0lcqNesMWjgohm1Jzad5O02TBa&X-Amz-Signature=4f92e27fc7d4ed0374bcfa5b9c87a053d3adb53e9ab20cbb5eb6552e9a64b8f9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRDIOIZE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYcta%2Bo%2FXnTQa%2B1BHc3Ux%2FGXJBBvGl1UECpH8gmxqE9AIgcSx8nBPBid3svGpgFKS%2Fv6RsCM41S9RG6HYfg5zpe6UqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKajxlasZ79850QOByrcA2z7fry9n850PMdDK1YR7uhIB9vqBBrom7X1PO%2FiSgRNISaHymBnq8Avca2HyjeV%2Bo7bb%2BBLOmZ1LFj9u2sjG6G8dRObulH8hwPJxOugelijTT7u9JOVumh4R3Aj3hIgw95eeFPwm5cCpceiRynvP3yzzmov%2B4MB1o9feFxwEqm%2BilB0y6K6z8zWYEXFKW8BeA8p57f8V%2F7zxvW1GyqjzoziBo1VVnUXQy0DYzyqE%2FOyt79RPuPvxklOfZRM%2Bu%2BW6SRursWh6KTCmTL5YXTpsqYhWcHDt4Yy2uDj737pWXAAcHrU0DMKZxGgm49uZVFE1sskvayF5YpEgoXjxSCrtBCuWw6Ckkv6hgv26iPkWtFtYeFJn%2BGokNANPxh3yg5GKCqC99YfhKTxAXswTkSksy3gAtrbJ47iHOmKnbRFNAVSH3RjC1U5Gf%2FXqdMKDUAMtSPLurOqFBvFZqJghyk6yfbtQAFRKqgBz0Q4ThhxPD4PmX%2BMRxDP%2ByP9jj3zDicezH8FXJfjwa6r87qXs6VVMM2ZdCTsCI%2FLcEThlOGfLsEA%2BG4KIYNgyHqN6Dl5zSDxEo4fUDEHoAL0PJWNK6PHbE3Tn4QGLRKmfY0w5%2B5GhmNZSbofAbHag4aG%2FM%2FWMLOU7sEGOqUB1QlXkIpqe2xwCAuJq7CBxaP3tQWJ%2Bx9%2BzvcWa58NlyifR%2BHdh4CHHDhqfdCCtA67q817JtsolyNMRVHAbP8lP6%2FqgoTUR2V1qDCXFdyBHvw33DJfJEb1dGUlt0by4EvZSKK6ukqFlbjhv83t4YoPMeaPLLITZleG33hsHgsjIl3DacKeV2c1vK34Go2143V6jX0lcqNesMWjgohm1Jzad5O02TBa&X-Amz-Signature=a4ac676ee18990200852711fd4f71e93f0cfba7f7bc6cb29823bea32a5d74b07&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRDIOIZE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYcta%2Bo%2FXnTQa%2B1BHc3Ux%2FGXJBBvGl1UECpH8gmxqE9AIgcSx8nBPBid3svGpgFKS%2Fv6RsCM41S9RG6HYfg5zpe6UqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKajxlasZ79850QOByrcA2z7fry9n850PMdDK1YR7uhIB9vqBBrom7X1PO%2FiSgRNISaHymBnq8Avca2HyjeV%2Bo7bb%2BBLOmZ1LFj9u2sjG6G8dRObulH8hwPJxOugelijTT7u9JOVumh4R3Aj3hIgw95eeFPwm5cCpceiRynvP3yzzmov%2B4MB1o9feFxwEqm%2BilB0y6K6z8zWYEXFKW8BeA8p57f8V%2F7zxvW1GyqjzoziBo1VVnUXQy0DYzyqE%2FOyt79RPuPvxklOfZRM%2Bu%2BW6SRursWh6KTCmTL5YXTpsqYhWcHDt4Yy2uDj737pWXAAcHrU0DMKZxGgm49uZVFE1sskvayF5YpEgoXjxSCrtBCuWw6Ckkv6hgv26iPkWtFtYeFJn%2BGokNANPxh3yg5GKCqC99YfhKTxAXswTkSksy3gAtrbJ47iHOmKnbRFNAVSH3RjC1U5Gf%2FXqdMKDUAMtSPLurOqFBvFZqJghyk6yfbtQAFRKqgBz0Q4ThhxPD4PmX%2BMRxDP%2ByP9jj3zDicezH8FXJfjwa6r87qXs6VVMM2ZdCTsCI%2FLcEThlOGfLsEA%2BG4KIYNgyHqN6Dl5zSDxEo4fUDEHoAL0PJWNK6PHbE3Tn4QGLRKmfY0w5%2B5GhmNZSbofAbHag4aG%2FM%2FWMLOU7sEGOqUB1QlXkIpqe2xwCAuJq7CBxaP3tQWJ%2Bx9%2BzvcWa58NlyifR%2BHdh4CHHDhqfdCCtA67q817JtsolyNMRVHAbP8lP6%2FqgoTUR2V1qDCXFdyBHvw33DJfJEb1dGUlt0by4EvZSKK6ukqFlbjhv83t4YoPMeaPLLITZleG33hsHgsjIl3DacKeV2c1vK34Go2143V6jX0lcqNesMWjgohm1Jzad5O02TBa&X-Amz-Signature=b1a7ca938a604280e3bb60e4a5edb879d532ffd1b0e8b4613518f4dfda42c893&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRDIOIZE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYcta%2Bo%2FXnTQa%2B1BHc3Ux%2FGXJBBvGl1UECpH8gmxqE9AIgcSx8nBPBid3svGpgFKS%2Fv6RsCM41S9RG6HYfg5zpe6UqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKajxlasZ79850QOByrcA2z7fry9n850PMdDK1YR7uhIB9vqBBrom7X1PO%2FiSgRNISaHymBnq8Avca2HyjeV%2Bo7bb%2BBLOmZ1LFj9u2sjG6G8dRObulH8hwPJxOugelijTT7u9JOVumh4R3Aj3hIgw95eeFPwm5cCpceiRynvP3yzzmov%2B4MB1o9feFxwEqm%2BilB0y6K6z8zWYEXFKW8BeA8p57f8V%2F7zxvW1GyqjzoziBo1VVnUXQy0DYzyqE%2FOyt79RPuPvxklOfZRM%2Bu%2BW6SRursWh6KTCmTL5YXTpsqYhWcHDt4Yy2uDj737pWXAAcHrU0DMKZxGgm49uZVFE1sskvayF5YpEgoXjxSCrtBCuWw6Ckkv6hgv26iPkWtFtYeFJn%2BGokNANPxh3yg5GKCqC99YfhKTxAXswTkSksy3gAtrbJ47iHOmKnbRFNAVSH3RjC1U5Gf%2FXqdMKDUAMtSPLurOqFBvFZqJghyk6yfbtQAFRKqgBz0Q4ThhxPD4PmX%2BMRxDP%2ByP9jj3zDicezH8FXJfjwa6r87qXs6VVMM2ZdCTsCI%2FLcEThlOGfLsEA%2BG4KIYNgyHqN6Dl5zSDxEo4fUDEHoAL0PJWNK6PHbE3Tn4QGLRKmfY0w5%2B5GhmNZSbofAbHag4aG%2FM%2FWMLOU7sEGOqUB1QlXkIpqe2xwCAuJq7CBxaP3tQWJ%2Bx9%2BzvcWa58NlyifR%2BHdh4CHHDhqfdCCtA67q817JtsolyNMRVHAbP8lP6%2FqgoTUR2V1qDCXFdyBHvw33DJfJEb1dGUlt0by4EvZSKK6ukqFlbjhv83t4YoPMeaPLLITZleG33hsHgsjIl3DacKeV2c1vK34Go2143V6jX0lcqNesMWjgohm1Jzad5O02TBa&X-Amz-Signature=7f52cc52fae5a569186471111e608ab3b7a92822ed5791bc397590410e41dd8b&X-Amz-SignedHeaders=host&x-id=GetObject)
