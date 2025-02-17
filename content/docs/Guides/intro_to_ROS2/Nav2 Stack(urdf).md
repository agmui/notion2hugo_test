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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMP2D53S%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCh3mFFt6O%2FzJoZlceHg0IcAX035Hc3MSNhMrtCbcy%2FWgIgLtoADlUUy8FbsnGvJf3scUJ41YxkH2mDsqlJe0L%2B%2BNAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFitEmdc20Mk%2BoYDaircA%2FFMxG0r6o%2FHho9HGUSf5tm5cZO%2Fl2IYViMBf6y%2FnQldS1Ilo0%2BTGgGRlCxZ07IxueS9AoRp6bFXyOAPeFZZGr7dUluNdmJla9dr93OcVAx%2B3wvP4FUY7mjgJRM185n09LoJ3QzHfYZJRb74bRyNWeoBu701btoor1%2FqNYc%2FXno84whwpYOU90pWtaVMGDQp74mL3A4o8L1ItJPcoe%2FHSSMfC2UM%2F8V%2F%2B7Qg4tU5o%2BR2vHW3YeFfobcRPTRr9uWY%2BsHbgKNbWEbhwdmvxaLNa0EtW5KGfqVfQcR3dPl16xFKNKfoy57Gu53%2BhFY35RE6H8H67QlbBIl%2FHqHEXZFkuslLVOkqKMP2K2clcVrtLM96RYIg97nLjzZboeEWFWLxFUzbw7Cd7Y45NL8w3rGHihULkP%2BRRB0Q2Z8J8H68uvQyitMvcltXSeH%2Bq8F0mSQV8LVg%2B6udz8SAHgnFsraek1GuuCS1GM9a94S%2FHTpizawh7kqnQGHVL2lyqb323IqWa24I8y1PpmyFXDi9OREO5aQmBp1Lv4S0bFkr9Utecj8B613RKsv8t3KKBmZbRy3prlCaqDZxm5j%2B0ayDV5L1FN%2B1sRCAI8n0L6JHLdhF84lYxgFUx9SpggMukMVMMIOmzr0GOqUBfERhkLCEBRNb3Ra6Vo%2FVvFaY5ML2OVueJB2pJNRvspOCMo%2BzNu23MfHeYjD663ZjBuFHKymZfeDj2%2BUPtnLyv2M4gmu2PtptXa5Dij99OnP3Kuyr05Hr93jDCaguOkgjfs%2BP9CWtW4tPN45DCf1HgeecKuEjpFA5khao%2F0jUphistXEnibUBPaHAR1qxGA%2B3I9vKGodAJMUORr4xdOdZA2qBjndi&X-Amz-Signature=a9abcb0ab6bcd7bf6a1262bfbf6ba9cfe4b9008da7bd795371f6b3ad2bdbdac2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMP2D53S%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCh3mFFt6O%2FzJoZlceHg0IcAX035Hc3MSNhMrtCbcy%2FWgIgLtoADlUUy8FbsnGvJf3scUJ41YxkH2mDsqlJe0L%2B%2BNAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFitEmdc20Mk%2BoYDaircA%2FFMxG0r6o%2FHho9HGUSf5tm5cZO%2Fl2IYViMBf6y%2FnQldS1Ilo0%2BTGgGRlCxZ07IxueS9AoRp6bFXyOAPeFZZGr7dUluNdmJla9dr93OcVAx%2B3wvP4FUY7mjgJRM185n09LoJ3QzHfYZJRb74bRyNWeoBu701btoor1%2FqNYc%2FXno84whwpYOU90pWtaVMGDQp74mL3A4o8L1ItJPcoe%2FHSSMfC2UM%2F8V%2F%2B7Qg4tU5o%2BR2vHW3YeFfobcRPTRr9uWY%2BsHbgKNbWEbhwdmvxaLNa0EtW5KGfqVfQcR3dPl16xFKNKfoy57Gu53%2BhFY35RE6H8H67QlbBIl%2FHqHEXZFkuslLVOkqKMP2K2clcVrtLM96RYIg97nLjzZboeEWFWLxFUzbw7Cd7Y45NL8w3rGHihULkP%2BRRB0Q2Z8J8H68uvQyitMvcltXSeH%2Bq8F0mSQV8LVg%2B6udz8SAHgnFsraek1GuuCS1GM9a94S%2FHTpizawh7kqnQGHVL2lyqb323IqWa24I8y1PpmyFXDi9OREO5aQmBp1Lv4S0bFkr9Utecj8B613RKsv8t3KKBmZbRy3prlCaqDZxm5j%2B0ayDV5L1FN%2B1sRCAI8n0L6JHLdhF84lYxgFUx9SpggMukMVMMIOmzr0GOqUBfERhkLCEBRNb3Ra6Vo%2FVvFaY5ML2OVueJB2pJNRvspOCMo%2BzNu23MfHeYjD663ZjBuFHKymZfeDj2%2BUPtnLyv2M4gmu2PtptXa5Dij99OnP3Kuyr05Hr93jDCaguOkgjfs%2BP9CWtW4tPN45DCf1HgeecKuEjpFA5khao%2F0jUphistXEnibUBPaHAR1qxGA%2B3I9vKGodAJMUORr4xdOdZA2qBjndi&X-Amz-Signature=ef4a2f02dff45ff63cecc3846bdb48bb7697258e4b84825cf05ee0a6ae2cad6e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMP2D53S%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCh3mFFt6O%2FzJoZlceHg0IcAX035Hc3MSNhMrtCbcy%2FWgIgLtoADlUUy8FbsnGvJf3scUJ41YxkH2mDsqlJe0L%2B%2BNAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFitEmdc20Mk%2BoYDaircA%2FFMxG0r6o%2FHho9HGUSf5tm5cZO%2Fl2IYViMBf6y%2FnQldS1Ilo0%2BTGgGRlCxZ07IxueS9AoRp6bFXyOAPeFZZGr7dUluNdmJla9dr93OcVAx%2B3wvP4FUY7mjgJRM185n09LoJ3QzHfYZJRb74bRyNWeoBu701btoor1%2FqNYc%2FXno84whwpYOU90pWtaVMGDQp74mL3A4o8L1ItJPcoe%2FHSSMfC2UM%2F8V%2F%2B7Qg4tU5o%2BR2vHW3YeFfobcRPTRr9uWY%2BsHbgKNbWEbhwdmvxaLNa0EtW5KGfqVfQcR3dPl16xFKNKfoy57Gu53%2BhFY35RE6H8H67QlbBIl%2FHqHEXZFkuslLVOkqKMP2K2clcVrtLM96RYIg97nLjzZboeEWFWLxFUzbw7Cd7Y45NL8w3rGHihULkP%2BRRB0Q2Z8J8H68uvQyitMvcltXSeH%2Bq8F0mSQV8LVg%2B6udz8SAHgnFsraek1GuuCS1GM9a94S%2FHTpizawh7kqnQGHVL2lyqb323IqWa24I8y1PpmyFXDi9OREO5aQmBp1Lv4S0bFkr9Utecj8B613RKsv8t3KKBmZbRy3prlCaqDZxm5j%2B0ayDV5L1FN%2B1sRCAI8n0L6JHLdhF84lYxgFUx9SpggMukMVMMIOmzr0GOqUBfERhkLCEBRNb3Ra6Vo%2FVvFaY5ML2OVueJB2pJNRvspOCMo%2BzNu23MfHeYjD663ZjBuFHKymZfeDj2%2BUPtnLyv2M4gmu2PtptXa5Dij99OnP3Kuyr05Hr93jDCaguOkgjfs%2BP9CWtW4tPN45DCf1HgeecKuEjpFA5khao%2F0jUphistXEnibUBPaHAR1qxGA%2B3I9vKGodAJMUORr4xdOdZA2qBjndi&X-Amz-Signature=f30e073b27a250b91bab9eea0b055fdac46e4389e69ab6f17c33df673c26abdf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMP2D53S%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCh3mFFt6O%2FzJoZlceHg0IcAX035Hc3MSNhMrtCbcy%2FWgIgLtoADlUUy8FbsnGvJf3scUJ41YxkH2mDsqlJe0L%2B%2BNAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFitEmdc20Mk%2BoYDaircA%2FFMxG0r6o%2FHho9HGUSf5tm5cZO%2Fl2IYViMBf6y%2FnQldS1Ilo0%2BTGgGRlCxZ07IxueS9AoRp6bFXyOAPeFZZGr7dUluNdmJla9dr93OcVAx%2B3wvP4FUY7mjgJRM185n09LoJ3QzHfYZJRb74bRyNWeoBu701btoor1%2FqNYc%2FXno84whwpYOU90pWtaVMGDQp74mL3A4o8L1ItJPcoe%2FHSSMfC2UM%2F8V%2F%2B7Qg4tU5o%2BR2vHW3YeFfobcRPTRr9uWY%2BsHbgKNbWEbhwdmvxaLNa0EtW5KGfqVfQcR3dPl16xFKNKfoy57Gu53%2BhFY35RE6H8H67QlbBIl%2FHqHEXZFkuslLVOkqKMP2K2clcVrtLM96RYIg97nLjzZboeEWFWLxFUzbw7Cd7Y45NL8w3rGHihULkP%2BRRB0Q2Z8J8H68uvQyitMvcltXSeH%2Bq8F0mSQV8LVg%2B6udz8SAHgnFsraek1GuuCS1GM9a94S%2FHTpizawh7kqnQGHVL2lyqb323IqWa24I8y1PpmyFXDi9OREO5aQmBp1Lv4S0bFkr9Utecj8B613RKsv8t3KKBmZbRy3prlCaqDZxm5j%2B0ayDV5L1FN%2B1sRCAI8n0L6JHLdhF84lYxgFUx9SpggMukMVMMIOmzr0GOqUBfERhkLCEBRNb3Ra6Vo%2FVvFaY5ML2OVueJB2pJNRvspOCMo%2BzNu23MfHeYjD663ZjBuFHKymZfeDj2%2BUPtnLyv2M4gmu2PtptXa5Dij99OnP3Kuyr05Hr93jDCaguOkgjfs%2BP9CWtW4tPN45DCf1HgeecKuEjpFA5khao%2F0jUphistXEnibUBPaHAR1qxGA%2B3I9vKGodAJMUORr4xdOdZA2qBjndi&X-Amz-Signature=d2d39aefce81e4a37ee8df2c0e3e74e5018ce4a4778a3a8753c08d9524934fe4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMP2D53S%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCh3mFFt6O%2FzJoZlceHg0IcAX035Hc3MSNhMrtCbcy%2FWgIgLtoADlUUy8FbsnGvJf3scUJ41YxkH2mDsqlJe0L%2B%2BNAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFitEmdc20Mk%2BoYDaircA%2FFMxG0r6o%2FHho9HGUSf5tm5cZO%2Fl2IYViMBf6y%2FnQldS1Ilo0%2BTGgGRlCxZ07IxueS9AoRp6bFXyOAPeFZZGr7dUluNdmJla9dr93OcVAx%2B3wvP4FUY7mjgJRM185n09LoJ3QzHfYZJRb74bRyNWeoBu701btoor1%2FqNYc%2FXno84whwpYOU90pWtaVMGDQp74mL3A4o8L1ItJPcoe%2FHSSMfC2UM%2F8V%2F%2B7Qg4tU5o%2BR2vHW3YeFfobcRPTRr9uWY%2BsHbgKNbWEbhwdmvxaLNa0EtW5KGfqVfQcR3dPl16xFKNKfoy57Gu53%2BhFY35RE6H8H67QlbBIl%2FHqHEXZFkuslLVOkqKMP2K2clcVrtLM96RYIg97nLjzZboeEWFWLxFUzbw7Cd7Y45NL8w3rGHihULkP%2BRRB0Q2Z8J8H68uvQyitMvcltXSeH%2Bq8F0mSQV8LVg%2B6udz8SAHgnFsraek1GuuCS1GM9a94S%2FHTpizawh7kqnQGHVL2lyqb323IqWa24I8y1PpmyFXDi9OREO5aQmBp1Lv4S0bFkr9Utecj8B613RKsv8t3KKBmZbRy3prlCaqDZxm5j%2B0ayDV5L1FN%2B1sRCAI8n0L6JHLdhF84lYxgFUx9SpggMukMVMMIOmzr0GOqUBfERhkLCEBRNb3Ra6Vo%2FVvFaY5ML2OVueJB2pJNRvspOCMo%2BzNu23MfHeYjD663ZjBuFHKymZfeDj2%2BUPtnLyv2M4gmu2PtptXa5Dij99OnP3Kuyr05Hr93jDCaguOkgjfs%2BP9CWtW4tPN45DCf1HgeecKuEjpFA5khao%2F0jUphistXEnibUBPaHAR1qxGA%2B3I9vKGodAJMUORr4xdOdZA2qBjndi&X-Amz-Signature=2c0a89d354d8148de7f13a714577b6756c6e855a7ca68aceb1726c389e677121&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMP2D53S%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCh3mFFt6O%2FzJoZlceHg0IcAX035Hc3MSNhMrtCbcy%2FWgIgLtoADlUUy8FbsnGvJf3scUJ41YxkH2mDsqlJe0L%2B%2BNAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFitEmdc20Mk%2BoYDaircA%2FFMxG0r6o%2FHho9HGUSf5tm5cZO%2Fl2IYViMBf6y%2FnQldS1Ilo0%2BTGgGRlCxZ07IxueS9AoRp6bFXyOAPeFZZGr7dUluNdmJla9dr93OcVAx%2B3wvP4FUY7mjgJRM185n09LoJ3QzHfYZJRb74bRyNWeoBu701btoor1%2FqNYc%2FXno84whwpYOU90pWtaVMGDQp74mL3A4o8L1ItJPcoe%2FHSSMfC2UM%2F8V%2F%2B7Qg4tU5o%2BR2vHW3YeFfobcRPTRr9uWY%2BsHbgKNbWEbhwdmvxaLNa0EtW5KGfqVfQcR3dPl16xFKNKfoy57Gu53%2BhFY35RE6H8H67QlbBIl%2FHqHEXZFkuslLVOkqKMP2K2clcVrtLM96RYIg97nLjzZboeEWFWLxFUzbw7Cd7Y45NL8w3rGHihULkP%2BRRB0Q2Z8J8H68uvQyitMvcltXSeH%2Bq8F0mSQV8LVg%2B6udz8SAHgnFsraek1GuuCS1GM9a94S%2FHTpizawh7kqnQGHVL2lyqb323IqWa24I8y1PpmyFXDi9OREO5aQmBp1Lv4S0bFkr9Utecj8B613RKsv8t3KKBmZbRy3prlCaqDZxm5j%2B0ayDV5L1FN%2B1sRCAI8n0L6JHLdhF84lYxgFUx9SpggMukMVMMIOmzr0GOqUBfERhkLCEBRNb3Ra6Vo%2FVvFaY5ML2OVueJB2pJNRvspOCMo%2BzNu23MfHeYjD663ZjBuFHKymZfeDj2%2BUPtnLyv2M4gmu2PtptXa5Dij99OnP3Kuyr05Hr93jDCaguOkgjfs%2BP9CWtW4tPN45DCf1HgeecKuEjpFA5khao%2F0jUphistXEnibUBPaHAR1qxGA%2B3I9vKGodAJMUORr4xdOdZA2qBjndi&X-Amz-Signature=288bc547a6652dfbb38d8932092289a95cc414c39842c87c3eb57bc2dae9b469&X-Amz-SignedHeaders=host&x-id=GetObject)
