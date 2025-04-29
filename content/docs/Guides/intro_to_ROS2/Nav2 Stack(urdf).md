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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EY4X6M7%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGEC4gORdxqFqFuZTGIIB1nN7imAVzxYplegUA0UGb3QIhAM9u2bzQOsm6a9IJ6xOedcfkbgwfrEvgAWj1RWay5OpFKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyInqYnti7V3%2FrWlpAq3AOFdVn9WBPjR%2FCwVcrBMpsMibIRdyvMt%2FdGsP9KiDHmMB2qh%2FmvRqM21o0bFglHXAdVuDMWnmVzncPWtMHnQrWsx8vVPVhHVmWQxL8tsABCOKLmGhtK%2BSTjonzqI1WgOWiRifTvRsaku%2F%2FDY0qhfVD2kGrOHDdL6fkv6Yh43ytDFZqFcaz0B%2BOTlR%2Bdn2xVyfuqaFh0Mpyw76q25c2YlJUJJcjjf5WqPeCcI34bEqPxjdzDN20zZMzH3zsuMYxehCbLKCXfyBwty%2F0dDGUUJ5zHu8MjDjThGrNoPZz2gtwDt0eUDWGrygiVVZ7rsEBg5tFkRrl%2BzMuuDN%2B0ppHCB9k7R1CCz%2Ff1%2FuHhU4GBqHlAsTscIN4PAiXcM%2BIwx%2Bu5AFFgP4UYmOPSpd9QxvYMI6ldzdCx60cC3OhyhSeyxb0FWXlFAZ4M00k12omSn%2FowaHnjZ6TCHUeo%2FTknQDLlLiKoflZz0X1kfHesNv8YuidMxPVH%2FvC3t71qmOcD%2Fcxtnc1w984cCJ81irIQrVeCHvf%2FsBx1ETgyKDuswdMrEGcNGEAgS%2Fahz%2BCY%2FhlFt5kMUIEQKTFwiVap634XTBWesnM2Zn8GKmYrELL%2FL48rz22n8TxNp6vxEKm4wR8ZAjDVv8DABjqkAfxzfwulngaYEma5xjKG4d7ZOoNpfv%2FGssIRkxjRSpODcLGzEd6Ll%2BiqC39e7ljI%2F7VAk%2BKU2XjFx8BD4FKewxDIumj5KKWrvhox4XJpqA83wzscjrXXcADThI%2FDlL7y7BtpyF9Zpq4S2oagHulrx2N%2BCZiGSE5YhiR%2FVRBCeFkxc8CLrO7E77EsgjWBDmTyBiaozoyD7zJvHkaPp6TWtmr%2BMO8u&X-Amz-Signature=033f9e75d80ddc8dbdbbd168d895f3d6e5c1142ff50f3d5b04247507062c7dcf&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EY4X6M7%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGEC4gORdxqFqFuZTGIIB1nN7imAVzxYplegUA0UGb3QIhAM9u2bzQOsm6a9IJ6xOedcfkbgwfrEvgAWj1RWay5OpFKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyInqYnti7V3%2FrWlpAq3AOFdVn9WBPjR%2FCwVcrBMpsMibIRdyvMt%2FdGsP9KiDHmMB2qh%2FmvRqM21o0bFglHXAdVuDMWnmVzncPWtMHnQrWsx8vVPVhHVmWQxL8tsABCOKLmGhtK%2BSTjonzqI1WgOWiRifTvRsaku%2F%2FDY0qhfVD2kGrOHDdL6fkv6Yh43ytDFZqFcaz0B%2BOTlR%2Bdn2xVyfuqaFh0Mpyw76q25c2YlJUJJcjjf5WqPeCcI34bEqPxjdzDN20zZMzH3zsuMYxehCbLKCXfyBwty%2F0dDGUUJ5zHu8MjDjThGrNoPZz2gtwDt0eUDWGrygiVVZ7rsEBg5tFkRrl%2BzMuuDN%2B0ppHCB9k7R1CCz%2Ff1%2FuHhU4GBqHlAsTscIN4PAiXcM%2BIwx%2Bu5AFFgP4UYmOPSpd9QxvYMI6ldzdCx60cC3OhyhSeyxb0FWXlFAZ4M00k12omSn%2FowaHnjZ6TCHUeo%2FTknQDLlLiKoflZz0X1kfHesNv8YuidMxPVH%2FvC3t71qmOcD%2Fcxtnc1w984cCJ81irIQrVeCHvf%2FsBx1ETgyKDuswdMrEGcNGEAgS%2Fahz%2BCY%2FhlFt5kMUIEQKTFwiVap634XTBWesnM2Zn8GKmYrELL%2FL48rz22n8TxNp6vxEKm4wR8ZAjDVv8DABjqkAfxzfwulngaYEma5xjKG4d7ZOoNpfv%2FGssIRkxjRSpODcLGzEd6Ll%2BiqC39e7ljI%2F7VAk%2BKU2XjFx8BD4FKewxDIumj5KKWrvhox4XJpqA83wzscjrXXcADThI%2FDlL7y7BtpyF9Zpq4S2oagHulrx2N%2BCZiGSE5YhiR%2FVRBCeFkxc8CLrO7E77EsgjWBDmTyBiaozoyD7zJvHkaPp6TWtmr%2BMO8u&X-Amz-Signature=609cc16dccbdc3bfba499bf1866988d5200f2a9bdee866bd7b86aeafc2c4e751&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EY4X6M7%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGEC4gORdxqFqFuZTGIIB1nN7imAVzxYplegUA0UGb3QIhAM9u2bzQOsm6a9IJ6xOedcfkbgwfrEvgAWj1RWay5OpFKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyInqYnti7V3%2FrWlpAq3AOFdVn9WBPjR%2FCwVcrBMpsMibIRdyvMt%2FdGsP9KiDHmMB2qh%2FmvRqM21o0bFglHXAdVuDMWnmVzncPWtMHnQrWsx8vVPVhHVmWQxL8tsABCOKLmGhtK%2BSTjonzqI1WgOWiRifTvRsaku%2F%2FDY0qhfVD2kGrOHDdL6fkv6Yh43ytDFZqFcaz0B%2BOTlR%2Bdn2xVyfuqaFh0Mpyw76q25c2YlJUJJcjjf5WqPeCcI34bEqPxjdzDN20zZMzH3zsuMYxehCbLKCXfyBwty%2F0dDGUUJ5zHu8MjDjThGrNoPZz2gtwDt0eUDWGrygiVVZ7rsEBg5tFkRrl%2BzMuuDN%2B0ppHCB9k7R1CCz%2Ff1%2FuHhU4GBqHlAsTscIN4PAiXcM%2BIwx%2Bu5AFFgP4UYmOPSpd9QxvYMI6ldzdCx60cC3OhyhSeyxb0FWXlFAZ4M00k12omSn%2FowaHnjZ6TCHUeo%2FTknQDLlLiKoflZz0X1kfHesNv8YuidMxPVH%2FvC3t71qmOcD%2Fcxtnc1w984cCJ81irIQrVeCHvf%2FsBx1ETgyKDuswdMrEGcNGEAgS%2Fahz%2BCY%2FhlFt5kMUIEQKTFwiVap634XTBWesnM2Zn8GKmYrELL%2FL48rz22n8TxNp6vxEKm4wR8ZAjDVv8DABjqkAfxzfwulngaYEma5xjKG4d7ZOoNpfv%2FGssIRkxjRSpODcLGzEd6Ll%2BiqC39e7ljI%2F7VAk%2BKU2XjFx8BD4FKewxDIumj5KKWrvhox4XJpqA83wzscjrXXcADThI%2FDlL7y7BtpyF9Zpq4S2oagHulrx2N%2BCZiGSE5YhiR%2FVRBCeFkxc8CLrO7E77EsgjWBDmTyBiaozoyD7zJvHkaPp6TWtmr%2BMO8u&X-Amz-Signature=55cf3e318793237702ba09aa8e39fe7e3a44b1d1274d87afa19ea0f119d46ec3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EY4X6M7%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGEC4gORdxqFqFuZTGIIB1nN7imAVzxYplegUA0UGb3QIhAM9u2bzQOsm6a9IJ6xOedcfkbgwfrEvgAWj1RWay5OpFKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyInqYnti7V3%2FrWlpAq3AOFdVn9WBPjR%2FCwVcrBMpsMibIRdyvMt%2FdGsP9KiDHmMB2qh%2FmvRqM21o0bFglHXAdVuDMWnmVzncPWtMHnQrWsx8vVPVhHVmWQxL8tsABCOKLmGhtK%2BSTjonzqI1WgOWiRifTvRsaku%2F%2FDY0qhfVD2kGrOHDdL6fkv6Yh43ytDFZqFcaz0B%2BOTlR%2Bdn2xVyfuqaFh0Mpyw76q25c2YlJUJJcjjf5WqPeCcI34bEqPxjdzDN20zZMzH3zsuMYxehCbLKCXfyBwty%2F0dDGUUJ5zHu8MjDjThGrNoPZz2gtwDt0eUDWGrygiVVZ7rsEBg5tFkRrl%2BzMuuDN%2B0ppHCB9k7R1CCz%2Ff1%2FuHhU4GBqHlAsTscIN4PAiXcM%2BIwx%2Bu5AFFgP4UYmOPSpd9QxvYMI6ldzdCx60cC3OhyhSeyxb0FWXlFAZ4M00k12omSn%2FowaHnjZ6TCHUeo%2FTknQDLlLiKoflZz0X1kfHesNv8YuidMxPVH%2FvC3t71qmOcD%2Fcxtnc1w984cCJ81irIQrVeCHvf%2FsBx1ETgyKDuswdMrEGcNGEAgS%2Fahz%2BCY%2FhlFt5kMUIEQKTFwiVap634XTBWesnM2Zn8GKmYrELL%2FL48rz22n8TxNp6vxEKm4wR8ZAjDVv8DABjqkAfxzfwulngaYEma5xjKG4d7ZOoNpfv%2FGssIRkxjRSpODcLGzEd6Ll%2BiqC39e7ljI%2F7VAk%2BKU2XjFx8BD4FKewxDIumj5KKWrvhox4XJpqA83wzscjrXXcADThI%2FDlL7y7BtpyF9Zpq4S2oagHulrx2N%2BCZiGSE5YhiR%2FVRBCeFkxc8CLrO7E77EsgjWBDmTyBiaozoyD7zJvHkaPp6TWtmr%2BMO8u&X-Amz-Signature=884b8b9f479e833f68588eb37da3059baae43e77623e52b25fbb3fc6b99e3c5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EY4X6M7%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGEC4gORdxqFqFuZTGIIB1nN7imAVzxYplegUA0UGb3QIhAM9u2bzQOsm6a9IJ6xOedcfkbgwfrEvgAWj1RWay5OpFKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyInqYnti7V3%2FrWlpAq3AOFdVn9WBPjR%2FCwVcrBMpsMibIRdyvMt%2FdGsP9KiDHmMB2qh%2FmvRqM21o0bFglHXAdVuDMWnmVzncPWtMHnQrWsx8vVPVhHVmWQxL8tsABCOKLmGhtK%2BSTjonzqI1WgOWiRifTvRsaku%2F%2FDY0qhfVD2kGrOHDdL6fkv6Yh43ytDFZqFcaz0B%2BOTlR%2Bdn2xVyfuqaFh0Mpyw76q25c2YlJUJJcjjf5WqPeCcI34bEqPxjdzDN20zZMzH3zsuMYxehCbLKCXfyBwty%2F0dDGUUJ5zHu8MjDjThGrNoPZz2gtwDt0eUDWGrygiVVZ7rsEBg5tFkRrl%2BzMuuDN%2B0ppHCB9k7R1CCz%2Ff1%2FuHhU4GBqHlAsTscIN4PAiXcM%2BIwx%2Bu5AFFgP4UYmOPSpd9QxvYMI6ldzdCx60cC3OhyhSeyxb0FWXlFAZ4M00k12omSn%2FowaHnjZ6TCHUeo%2FTknQDLlLiKoflZz0X1kfHesNv8YuidMxPVH%2FvC3t71qmOcD%2Fcxtnc1w984cCJ81irIQrVeCHvf%2FsBx1ETgyKDuswdMrEGcNGEAgS%2Fahz%2BCY%2FhlFt5kMUIEQKTFwiVap634XTBWesnM2Zn8GKmYrELL%2FL48rz22n8TxNp6vxEKm4wR8ZAjDVv8DABjqkAfxzfwulngaYEma5xjKG4d7ZOoNpfv%2FGssIRkxjRSpODcLGzEd6Ll%2BiqC39e7ljI%2F7VAk%2BKU2XjFx8BD4FKewxDIumj5KKWrvhox4XJpqA83wzscjrXXcADThI%2FDlL7y7BtpyF9Zpq4S2oagHulrx2N%2BCZiGSE5YhiR%2FVRBCeFkxc8CLrO7E77EsgjWBDmTyBiaozoyD7zJvHkaPp6TWtmr%2BMO8u&X-Amz-Signature=08213d87b7b91f3dcd9dee33e141cecfb22cc628a7fabf01cd0b24aa057cd1ff&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EY4X6M7%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGEC4gORdxqFqFuZTGIIB1nN7imAVzxYplegUA0UGb3QIhAM9u2bzQOsm6a9IJ6xOedcfkbgwfrEvgAWj1RWay5OpFKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyInqYnti7V3%2FrWlpAq3AOFdVn9WBPjR%2FCwVcrBMpsMibIRdyvMt%2FdGsP9KiDHmMB2qh%2FmvRqM21o0bFglHXAdVuDMWnmVzncPWtMHnQrWsx8vVPVhHVmWQxL8tsABCOKLmGhtK%2BSTjonzqI1WgOWiRifTvRsaku%2F%2FDY0qhfVD2kGrOHDdL6fkv6Yh43ytDFZqFcaz0B%2BOTlR%2Bdn2xVyfuqaFh0Mpyw76q25c2YlJUJJcjjf5WqPeCcI34bEqPxjdzDN20zZMzH3zsuMYxehCbLKCXfyBwty%2F0dDGUUJ5zHu8MjDjThGrNoPZz2gtwDt0eUDWGrygiVVZ7rsEBg5tFkRrl%2BzMuuDN%2B0ppHCB9k7R1CCz%2Ff1%2FuHhU4GBqHlAsTscIN4PAiXcM%2BIwx%2Bu5AFFgP4UYmOPSpd9QxvYMI6ldzdCx60cC3OhyhSeyxb0FWXlFAZ4M00k12omSn%2FowaHnjZ6TCHUeo%2FTknQDLlLiKoflZz0X1kfHesNv8YuidMxPVH%2FvC3t71qmOcD%2Fcxtnc1w984cCJ81irIQrVeCHvf%2FsBx1ETgyKDuswdMrEGcNGEAgS%2Fahz%2BCY%2FhlFt5kMUIEQKTFwiVap634XTBWesnM2Zn8GKmYrELL%2FL48rz22n8TxNp6vxEKm4wR8ZAjDVv8DABjqkAfxzfwulngaYEma5xjKG4d7ZOoNpfv%2FGssIRkxjRSpODcLGzEd6Ll%2BiqC39e7ljI%2F7VAk%2BKU2XjFx8BD4FKewxDIumj5KKWrvhox4XJpqA83wzscjrXXcADThI%2FDlL7y7BtpyF9Zpq4S2oagHulrx2N%2BCZiGSE5YhiR%2FVRBCeFkxc8CLrO7E77EsgjWBDmTyBiaozoyD7zJvHkaPp6TWtmr%2BMO8u&X-Amz-Signature=5e5072e3f0ebf4e81a25e9fa8115a2b566dfb04c208c022fbc4ce8a68efa2ee4&X-Amz-SignedHeaders=host&x-id=GetObject)
