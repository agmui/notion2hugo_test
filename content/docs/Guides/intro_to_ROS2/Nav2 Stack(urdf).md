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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AAOHASU%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDNuNAkjM5rLFEfck%2Fmj3BP6c5KI5BQe8mrXuqiJQMG0AIhAKBsMwoLjQ34zHKtX0OM7K2LjzH8xoOpUuQ2v9bxdiIQKv8DCHgQABoMNjM3NDIzMTgzODA1IgyrsnoVjI%2BLvIIoVvYq3AP4AQ0J77UMQVlM%2F1Mqtmc7kMdq9IlssKvo8zICsfx7adzt2SXhTUFlyDoiRsu7UP%2FZxaz8dmAG2Q5C9fyKH8nDkTaLVaa%2FDhMwz%2BG06SlISbe9fWSXwK3j2j4AcRwNWr65jBKlQfTD8FN79UWM1DtwlMvqzx2oDz%2FXH4caMtAS1iBKgbGBeqhPVoRb%2BDEoeBxO%2FvE3cLSKcwJZ5AJeHaCThIv3KD%2Bxh6313LHPjRiJDgQrg61ehxzwjmkJPj6t3a3oyTR2noGYjCzGjqYdtstwDl7mEoshLmY0SpHhjC0Lz5rDRoYuG1kSLUpBdc1RU%2FEpPbZwWu7UQvuHGWtq%2F1iz78qqF6y00QcbeKRgsvVMzaK1hm3cWD%2B4%2F9afurS97xGeZX8d0XlbbPZCeWZ%2Bp%2BOHoIPhCa2krSV5wu%2BQRUMhNlCGMZP3Sd45aQKHd1Jkg0d1DaLY7OXTvTbOexlavXmg2MtoEdqqyVhYS0N4qDaMMHhbfLGu60rfPoGLo3F2job5TpRFmx3OV6qHhudj8g%2BW%2FqS5PL%2Be9YiVy2d8eRR16gIH2i7PbO02lhC08TGh6cUhod1%2Fdq3HOgGbSbtpeUsaTboE8JEVWryDLi%2FMCQ4ZOvokgB%2FphBEJGgWDITDduK%2FDBjqkATOLiwPvT5FEu1K%2B0BT6v%2BL49LsV7ULhxUsJC2xuPKrNqN1uc8AcifoU21dUvnoFyC4TTTQB6yVs%2B06YZR%2BrBgaJ87H9YgWmHuPvfiiwfopp3TGXraq9IDNwB7pUPK9pXP7IKnb4%2FOEkmSjtdaILrxOxkX5Osp2txo8QSf9BBkga1ATBsLat82oIPoYhZHAjIICvbLzniyzEd6mY49hsk8ygyCMX&X-Amz-Signature=4416489084757e6873476a171bdd2808b19f598fee18429f449210b30558748d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AAOHASU%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDNuNAkjM5rLFEfck%2Fmj3BP6c5KI5BQe8mrXuqiJQMG0AIhAKBsMwoLjQ34zHKtX0OM7K2LjzH8xoOpUuQ2v9bxdiIQKv8DCHgQABoMNjM3NDIzMTgzODA1IgyrsnoVjI%2BLvIIoVvYq3AP4AQ0J77UMQVlM%2F1Mqtmc7kMdq9IlssKvo8zICsfx7adzt2SXhTUFlyDoiRsu7UP%2FZxaz8dmAG2Q5C9fyKH8nDkTaLVaa%2FDhMwz%2BG06SlISbe9fWSXwK3j2j4AcRwNWr65jBKlQfTD8FN79UWM1DtwlMvqzx2oDz%2FXH4caMtAS1iBKgbGBeqhPVoRb%2BDEoeBxO%2FvE3cLSKcwJZ5AJeHaCThIv3KD%2Bxh6313LHPjRiJDgQrg61ehxzwjmkJPj6t3a3oyTR2noGYjCzGjqYdtstwDl7mEoshLmY0SpHhjC0Lz5rDRoYuG1kSLUpBdc1RU%2FEpPbZwWu7UQvuHGWtq%2F1iz78qqF6y00QcbeKRgsvVMzaK1hm3cWD%2B4%2F9afurS97xGeZX8d0XlbbPZCeWZ%2Bp%2BOHoIPhCa2krSV5wu%2BQRUMhNlCGMZP3Sd45aQKHd1Jkg0d1DaLY7OXTvTbOexlavXmg2MtoEdqqyVhYS0N4qDaMMHhbfLGu60rfPoGLo3F2job5TpRFmx3OV6qHhudj8g%2BW%2FqS5PL%2Be9YiVy2d8eRR16gIH2i7PbO02lhC08TGh6cUhod1%2Fdq3HOgGbSbtpeUsaTboE8JEVWryDLi%2FMCQ4ZOvokgB%2FphBEJGgWDITDduK%2FDBjqkATOLiwPvT5FEu1K%2B0BT6v%2BL49LsV7ULhxUsJC2xuPKrNqN1uc8AcifoU21dUvnoFyC4TTTQB6yVs%2B06YZR%2BrBgaJ87H9YgWmHuPvfiiwfopp3TGXraq9IDNwB7pUPK9pXP7IKnb4%2FOEkmSjtdaILrxOxkX5Osp2txo8QSf9BBkga1ATBsLat82oIPoYhZHAjIICvbLzniyzEd6mY49hsk8ygyCMX&X-Amz-Signature=bdf06750f6887fa40a8b3e334a164a1f0c117969ad96a1128ae75861ba1e707e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AAOHASU%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDNuNAkjM5rLFEfck%2Fmj3BP6c5KI5BQe8mrXuqiJQMG0AIhAKBsMwoLjQ34zHKtX0OM7K2LjzH8xoOpUuQ2v9bxdiIQKv8DCHgQABoMNjM3NDIzMTgzODA1IgyrsnoVjI%2BLvIIoVvYq3AP4AQ0J77UMQVlM%2F1Mqtmc7kMdq9IlssKvo8zICsfx7adzt2SXhTUFlyDoiRsu7UP%2FZxaz8dmAG2Q5C9fyKH8nDkTaLVaa%2FDhMwz%2BG06SlISbe9fWSXwK3j2j4AcRwNWr65jBKlQfTD8FN79UWM1DtwlMvqzx2oDz%2FXH4caMtAS1iBKgbGBeqhPVoRb%2BDEoeBxO%2FvE3cLSKcwJZ5AJeHaCThIv3KD%2Bxh6313LHPjRiJDgQrg61ehxzwjmkJPj6t3a3oyTR2noGYjCzGjqYdtstwDl7mEoshLmY0SpHhjC0Lz5rDRoYuG1kSLUpBdc1RU%2FEpPbZwWu7UQvuHGWtq%2F1iz78qqF6y00QcbeKRgsvVMzaK1hm3cWD%2B4%2F9afurS97xGeZX8d0XlbbPZCeWZ%2Bp%2BOHoIPhCa2krSV5wu%2BQRUMhNlCGMZP3Sd45aQKHd1Jkg0d1DaLY7OXTvTbOexlavXmg2MtoEdqqyVhYS0N4qDaMMHhbfLGu60rfPoGLo3F2job5TpRFmx3OV6qHhudj8g%2BW%2FqS5PL%2Be9YiVy2d8eRR16gIH2i7PbO02lhC08TGh6cUhod1%2Fdq3HOgGbSbtpeUsaTboE8JEVWryDLi%2FMCQ4ZOvokgB%2FphBEJGgWDITDduK%2FDBjqkATOLiwPvT5FEu1K%2B0BT6v%2BL49LsV7ULhxUsJC2xuPKrNqN1uc8AcifoU21dUvnoFyC4TTTQB6yVs%2B06YZR%2BrBgaJ87H9YgWmHuPvfiiwfopp3TGXraq9IDNwB7pUPK9pXP7IKnb4%2FOEkmSjtdaILrxOxkX5Osp2txo8QSf9BBkga1ATBsLat82oIPoYhZHAjIICvbLzniyzEd6mY49hsk8ygyCMX&X-Amz-Signature=db7dc84901ac9cf9a610cc97ff732cc7e293efdfc0e465603b652ba6193cde85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AAOHASU%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDNuNAkjM5rLFEfck%2Fmj3BP6c5KI5BQe8mrXuqiJQMG0AIhAKBsMwoLjQ34zHKtX0OM7K2LjzH8xoOpUuQ2v9bxdiIQKv8DCHgQABoMNjM3NDIzMTgzODA1IgyrsnoVjI%2BLvIIoVvYq3AP4AQ0J77UMQVlM%2F1Mqtmc7kMdq9IlssKvo8zICsfx7adzt2SXhTUFlyDoiRsu7UP%2FZxaz8dmAG2Q5C9fyKH8nDkTaLVaa%2FDhMwz%2BG06SlISbe9fWSXwK3j2j4AcRwNWr65jBKlQfTD8FN79UWM1DtwlMvqzx2oDz%2FXH4caMtAS1iBKgbGBeqhPVoRb%2BDEoeBxO%2FvE3cLSKcwJZ5AJeHaCThIv3KD%2Bxh6313LHPjRiJDgQrg61ehxzwjmkJPj6t3a3oyTR2noGYjCzGjqYdtstwDl7mEoshLmY0SpHhjC0Lz5rDRoYuG1kSLUpBdc1RU%2FEpPbZwWu7UQvuHGWtq%2F1iz78qqF6y00QcbeKRgsvVMzaK1hm3cWD%2B4%2F9afurS97xGeZX8d0XlbbPZCeWZ%2Bp%2BOHoIPhCa2krSV5wu%2BQRUMhNlCGMZP3Sd45aQKHd1Jkg0d1DaLY7OXTvTbOexlavXmg2MtoEdqqyVhYS0N4qDaMMHhbfLGu60rfPoGLo3F2job5TpRFmx3OV6qHhudj8g%2BW%2FqS5PL%2Be9YiVy2d8eRR16gIH2i7PbO02lhC08TGh6cUhod1%2Fdq3HOgGbSbtpeUsaTboE8JEVWryDLi%2FMCQ4ZOvokgB%2FphBEJGgWDITDduK%2FDBjqkATOLiwPvT5FEu1K%2B0BT6v%2BL49LsV7ULhxUsJC2xuPKrNqN1uc8AcifoU21dUvnoFyC4TTTQB6yVs%2B06YZR%2BrBgaJ87H9YgWmHuPvfiiwfopp3TGXraq9IDNwB7pUPK9pXP7IKnb4%2FOEkmSjtdaILrxOxkX5Osp2txo8QSf9BBkga1ATBsLat82oIPoYhZHAjIICvbLzniyzEd6mY49hsk8ygyCMX&X-Amz-Signature=0a205b46904ad503a5e5788296b99fa6e53621b5585d663954bec571c55a3c1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AAOHASU%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDNuNAkjM5rLFEfck%2Fmj3BP6c5KI5BQe8mrXuqiJQMG0AIhAKBsMwoLjQ34zHKtX0OM7K2LjzH8xoOpUuQ2v9bxdiIQKv8DCHgQABoMNjM3NDIzMTgzODA1IgyrsnoVjI%2BLvIIoVvYq3AP4AQ0J77UMQVlM%2F1Mqtmc7kMdq9IlssKvo8zICsfx7adzt2SXhTUFlyDoiRsu7UP%2FZxaz8dmAG2Q5C9fyKH8nDkTaLVaa%2FDhMwz%2BG06SlISbe9fWSXwK3j2j4AcRwNWr65jBKlQfTD8FN79UWM1DtwlMvqzx2oDz%2FXH4caMtAS1iBKgbGBeqhPVoRb%2BDEoeBxO%2FvE3cLSKcwJZ5AJeHaCThIv3KD%2Bxh6313LHPjRiJDgQrg61ehxzwjmkJPj6t3a3oyTR2noGYjCzGjqYdtstwDl7mEoshLmY0SpHhjC0Lz5rDRoYuG1kSLUpBdc1RU%2FEpPbZwWu7UQvuHGWtq%2F1iz78qqF6y00QcbeKRgsvVMzaK1hm3cWD%2B4%2F9afurS97xGeZX8d0XlbbPZCeWZ%2Bp%2BOHoIPhCa2krSV5wu%2BQRUMhNlCGMZP3Sd45aQKHd1Jkg0d1DaLY7OXTvTbOexlavXmg2MtoEdqqyVhYS0N4qDaMMHhbfLGu60rfPoGLo3F2job5TpRFmx3OV6qHhudj8g%2BW%2FqS5PL%2Be9YiVy2d8eRR16gIH2i7PbO02lhC08TGh6cUhod1%2Fdq3HOgGbSbtpeUsaTboE8JEVWryDLi%2FMCQ4ZOvokgB%2FphBEJGgWDITDduK%2FDBjqkATOLiwPvT5FEu1K%2B0BT6v%2BL49LsV7ULhxUsJC2xuPKrNqN1uc8AcifoU21dUvnoFyC4TTTQB6yVs%2B06YZR%2BrBgaJ87H9YgWmHuPvfiiwfopp3TGXraq9IDNwB7pUPK9pXP7IKnb4%2FOEkmSjtdaILrxOxkX5Osp2txo8QSf9BBkga1ATBsLat82oIPoYhZHAjIICvbLzniyzEd6mY49hsk8ygyCMX&X-Amz-Signature=0fd00335a0dfc0890734ff992bf5ff1be06d8d517f4731ae14210f45e0216f97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AAOHASU%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDNuNAkjM5rLFEfck%2Fmj3BP6c5KI5BQe8mrXuqiJQMG0AIhAKBsMwoLjQ34zHKtX0OM7K2LjzH8xoOpUuQ2v9bxdiIQKv8DCHgQABoMNjM3NDIzMTgzODA1IgyrsnoVjI%2BLvIIoVvYq3AP4AQ0J77UMQVlM%2F1Mqtmc7kMdq9IlssKvo8zICsfx7adzt2SXhTUFlyDoiRsu7UP%2FZxaz8dmAG2Q5C9fyKH8nDkTaLVaa%2FDhMwz%2BG06SlISbe9fWSXwK3j2j4AcRwNWr65jBKlQfTD8FN79UWM1DtwlMvqzx2oDz%2FXH4caMtAS1iBKgbGBeqhPVoRb%2BDEoeBxO%2FvE3cLSKcwJZ5AJeHaCThIv3KD%2Bxh6313LHPjRiJDgQrg61ehxzwjmkJPj6t3a3oyTR2noGYjCzGjqYdtstwDl7mEoshLmY0SpHhjC0Lz5rDRoYuG1kSLUpBdc1RU%2FEpPbZwWu7UQvuHGWtq%2F1iz78qqF6y00QcbeKRgsvVMzaK1hm3cWD%2B4%2F9afurS97xGeZX8d0XlbbPZCeWZ%2Bp%2BOHoIPhCa2krSV5wu%2BQRUMhNlCGMZP3Sd45aQKHd1Jkg0d1DaLY7OXTvTbOexlavXmg2MtoEdqqyVhYS0N4qDaMMHhbfLGu60rfPoGLo3F2job5TpRFmx3OV6qHhudj8g%2BW%2FqS5PL%2Be9YiVy2d8eRR16gIH2i7PbO02lhC08TGh6cUhod1%2Fdq3HOgGbSbtpeUsaTboE8JEVWryDLi%2FMCQ4ZOvokgB%2FphBEJGgWDITDduK%2FDBjqkATOLiwPvT5FEu1K%2B0BT6v%2BL49LsV7ULhxUsJC2xuPKrNqN1uc8AcifoU21dUvnoFyC4TTTQB6yVs%2B06YZR%2BrBgaJ87H9YgWmHuPvfiiwfopp3TGXraq9IDNwB7pUPK9pXP7IKnb4%2FOEkmSjtdaILrxOxkX5Osp2txo8QSf9BBkga1ATBsLat82oIPoYhZHAjIICvbLzniyzEd6mY49hsk8ygyCMX&X-Amz-Signature=b6cfc511881ef9e56088079e362b309059ac7b22e4a4bb2b00fd9431b69a5e65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
