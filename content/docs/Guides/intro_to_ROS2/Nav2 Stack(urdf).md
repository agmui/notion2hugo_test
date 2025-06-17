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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM6VAIG4%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgpKDNN5s3RpuO5skheq6SmfszoXwecF7AXeoq%2Br5cwAiEA4s5csoJb%2BxAP21jvm70E7lmJGhpq%2B2OWD3u0zNRkyH4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDBI8ZcLWdWBm1eo26SrcAzPOoEtOPe8D6CjNMlx9plANln9AUSgB8W5SEYJ%2F%2F%2FN1%2BKCNI8B5jH7pNPO0iZKbQX%2B%2Fj3k40YtYyUQ8rWEm4wGb4pL36d4JboQG0BXew63moKhGl8CsEkihBk58Bz2gNxWTy6UbkGsAdFi2CTFHfqW2S25h8XGOOBCCVawkuHGWF34zdGU61P8ZEd6ZTpOjmpeS%2BmJt7x%2BRaS%2BNCZxxgUvbw8H6xsDbbBfLEzidwOVUgCaMSPOBZpU8SiJA2%2BBTtncph%2FD%2B06ejTXAIfjBLGuV6EA6shtW2Xk00SJU88E%2BWsW9TNQANfWR8oZ7VkoC6LwUtB2Lk5%2FuYo1x9EQ1tI3VzQ6Evye6h466ZtvQEfLwTzKFpBL35igEBsvaqtwx02Lt5ids9tIN%2FUrprDBsVU4mtVo9Xs4U%2BFmnWoTXmTRIA3FeG%2FWmobA3dq2%2BpKlxZNNKYk80niEGehJV2rKxJORv5DHHPQm6nxut6Iv8n4uhz3WqMUpio%2FSHYQ3diaZ3Pr4acimgmp5y2U32zoQLi9yY1qdE%2F%2B3S18IsTRkMUsV%2B3dGutZ06ZfriaDU6pdX4KydU%2BGq8igTklGyXuwMYKc1S%2FURLr%2BKE1ycVTUk55Uu64im4IOMDoFc6xZTN2MOSIx8IGOqUBTvARc2O3y%2BTkBosAdgstFgPS%2FAzOGtqVMAUMp8I7bCGGCtOTR1qrz7TJ5o2Px6K4jfma80rRiHXlBxP3y9hGWyi8thgC3cec23hYjWdtB%2Fgi0irihKUV6mvY0Ufv0ubqP20ZfdPNqFapFnW6NYaai5WprgSkOu4l9%2Fv2HvQQ96gobduY5jOwahbcElPIpjhbmGioPJQZ2YMTh70sEuB%2BUuf4TFWe&X-Amz-Signature=5894b42dbbd19aab536a933e8988bb39839881ba82d21eec1639a57f21c99d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM6VAIG4%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgpKDNN5s3RpuO5skheq6SmfszoXwecF7AXeoq%2Br5cwAiEA4s5csoJb%2BxAP21jvm70E7lmJGhpq%2B2OWD3u0zNRkyH4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDBI8ZcLWdWBm1eo26SrcAzPOoEtOPe8D6CjNMlx9plANln9AUSgB8W5SEYJ%2F%2F%2FN1%2BKCNI8B5jH7pNPO0iZKbQX%2B%2Fj3k40YtYyUQ8rWEm4wGb4pL36d4JboQG0BXew63moKhGl8CsEkihBk58Bz2gNxWTy6UbkGsAdFi2CTFHfqW2S25h8XGOOBCCVawkuHGWF34zdGU61P8ZEd6ZTpOjmpeS%2BmJt7x%2BRaS%2BNCZxxgUvbw8H6xsDbbBfLEzidwOVUgCaMSPOBZpU8SiJA2%2BBTtncph%2FD%2B06ejTXAIfjBLGuV6EA6shtW2Xk00SJU88E%2BWsW9TNQANfWR8oZ7VkoC6LwUtB2Lk5%2FuYo1x9EQ1tI3VzQ6Evye6h466ZtvQEfLwTzKFpBL35igEBsvaqtwx02Lt5ids9tIN%2FUrprDBsVU4mtVo9Xs4U%2BFmnWoTXmTRIA3FeG%2FWmobA3dq2%2BpKlxZNNKYk80niEGehJV2rKxJORv5DHHPQm6nxut6Iv8n4uhz3WqMUpio%2FSHYQ3diaZ3Pr4acimgmp5y2U32zoQLi9yY1qdE%2F%2B3S18IsTRkMUsV%2B3dGutZ06ZfriaDU6pdX4KydU%2BGq8igTklGyXuwMYKc1S%2FURLr%2BKE1ycVTUk55Uu64im4IOMDoFc6xZTN2MOSIx8IGOqUBTvARc2O3y%2BTkBosAdgstFgPS%2FAzOGtqVMAUMp8I7bCGGCtOTR1qrz7TJ5o2Px6K4jfma80rRiHXlBxP3y9hGWyi8thgC3cec23hYjWdtB%2Fgi0irihKUV6mvY0Ufv0ubqP20ZfdPNqFapFnW6NYaai5WprgSkOu4l9%2Fv2HvQQ96gobduY5jOwahbcElPIpjhbmGioPJQZ2YMTh70sEuB%2BUuf4TFWe&X-Amz-Signature=c24a40f23b5d58d5451870bcb2e7980ffdc6aaf53dcffceea7d9c813d65b1bc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM6VAIG4%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgpKDNN5s3RpuO5skheq6SmfszoXwecF7AXeoq%2Br5cwAiEA4s5csoJb%2BxAP21jvm70E7lmJGhpq%2B2OWD3u0zNRkyH4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDBI8ZcLWdWBm1eo26SrcAzPOoEtOPe8D6CjNMlx9plANln9AUSgB8W5SEYJ%2F%2F%2FN1%2BKCNI8B5jH7pNPO0iZKbQX%2B%2Fj3k40YtYyUQ8rWEm4wGb4pL36d4JboQG0BXew63moKhGl8CsEkihBk58Bz2gNxWTy6UbkGsAdFi2CTFHfqW2S25h8XGOOBCCVawkuHGWF34zdGU61P8ZEd6ZTpOjmpeS%2BmJt7x%2BRaS%2BNCZxxgUvbw8H6xsDbbBfLEzidwOVUgCaMSPOBZpU8SiJA2%2BBTtncph%2FD%2B06ejTXAIfjBLGuV6EA6shtW2Xk00SJU88E%2BWsW9TNQANfWR8oZ7VkoC6LwUtB2Lk5%2FuYo1x9EQ1tI3VzQ6Evye6h466ZtvQEfLwTzKFpBL35igEBsvaqtwx02Lt5ids9tIN%2FUrprDBsVU4mtVo9Xs4U%2BFmnWoTXmTRIA3FeG%2FWmobA3dq2%2BpKlxZNNKYk80niEGehJV2rKxJORv5DHHPQm6nxut6Iv8n4uhz3WqMUpio%2FSHYQ3diaZ3Pr4acimgmp5y2U32zoQLi9yY1qdE%2F%2B3S18IsTRkMUsV%2B3dGutZ06ZfriaDU6pdX4KydU%2BGq8igTklGyXuwMYKc1S%2FURLr%2BKE1ycVTUk55Uu64im4IOMDoFc6xZTN2MOSIx8IGOqUBTvARc2O3y%2BTkBosAdgstFgPS%2FAzOGtqVMAUMp8I7bCGGCtOTR1qrz7TJ5o2Px6K4jfma80rRiHXlBxP3y9hGWyi8thgC3cec23hYjWdtB%2Fgi0irihKUV6mvY0Ufv0ubqP20ZfdPNqFapFnW6NYaai5WprgSkOu4l9%2Fv2HvQQ96gobduY5jOwahbcElPIpjhbmGioPJQZ2YMTh70sEuB%2BUuf4TFWe&X-Amz-Signature=602ea10b090f19f85ca41978231ad332a39c0612ce9b4391d7e26137fd6bcbe6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM6VAIG4%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgpKDNN5s3RpuO5skheq6SmfszoXwecF7AXeoq%2Br5cwAiEA4s5csoJb%2BxAP21jvm70E7lmJGhpq%2B2OWD3u0zNRkyH4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDBI8ZcLWdWBm1eo26SrcAzPOoEtOPe8D6CjNMlx9plANln9AUSgB8W5SEYJ%2F%2F%2FN1%2BKCNI8B5jH7pNPO0iZKbQX%2B%2Fj3k40YtYyUQ8rWEm4wGb4pL36d4JboQG0BXew63moKhGl8CsEkihBk58Bz2gNxWTy6UbkGsAdFi2CTFHfqW2S25h8XGOOBCCVawkuHGWF34zdGU61P8ZEd6ZTpOjmpeS%2BmJt7x%2BRaS%2BNCZxxgUvbw8H6xsDbbBfLEzidwOVUgCaMSPOBZpU8SiJA2%2BBTtncph%2FD%2B06ejTXAIfjBLGuV6EA6shtW2Xk00SJU88E%2BWsW9TNQANfWR8oZ7VkoC6LwUtB2Lk5%2FuYo1x9EQ1tI3VzQ6Evye6h466ZtvQEfLwTzKFpBL35igEBsvaqtwx02Lt5ids9tIN%2FUrprDBsVU4mtVo9Xs4U%2BFmnWoTXmTRIA3FeG%2FWmobA3dq2%2BpKlxZNNKYk80niEGehJV2rKxJORv5DHHPQm6nxut6Iv8n4uhz3WqMUpio%2FSHYQ3diaZ3Pr4acimgmp5y2U32zoQLi9yY1qdE%2F%2B3S18IsTRkMUsV%2B3dGutZ06ZfriaDU6pdX4KydU%2BGq8igTklGyXuwMYKc1S%2FURLr%2BKE1ycVTUk55Uu64im4IOMDoFc6xZTN2MOSIx8IGOqUBTvARc2O3y%2BTkBosAdgstFgPS%2FAzOGtqVMAUMp8I7bCGGCtOTR1qrz7TJ5o2Px6K4jfma80rRiHXlBxP3y9hGWyi8thgC3cec23hYjWdtB%2Fgi0irihKUV6mvY0Ufv0ubqP20ZfdPNqFapFnW6NYaai5WprgSkOu4l9%2Fv2HvQQ96gobduY5jOwahbcElPIpjhbmGioPJQZ2YMTh70sEuB%2BUuf4TFWe&X-Amz-Signature=777de885efa01afff1cf8638ea6b6e7d550bfde2a0864082e56598e289d45146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM6VAIG4%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgpKDNN5s3RpuO5skheq6SmfszoXwecF7AXeoq%2Br5cwAiEA4s5csoJb%2BxAP21jvm70E7lmJGhpq%2B2OWD3u0zNRkyH4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDBI8ZcLWdWBm1eo26SrcAzPOoEtOPe8D6CjNMlx9plANln9AUSgB8W5SEYJ%2F%2F%2FN1%2BKCNI8B5jH7pNPO0iZKbQX%2B%2Fj3k40YtYyUQ8rWEm4wGb4pL36d4JboQG0BXew63moKhGl8CsEkihBk58Bz2gNxWTy6UbkGsAdFi2CTFHfqW2S25h8XGOOBCCVawkuHGWF34zdGU61P8ZEd6ZTpOjmpeS%2BmJt7x%2BRaS%2BNCZxxgUvbw8H6xsDbbBfLEzidwOVUgCaMSPOBZpU8SiJA2%2BBTtncph%2FD%2B06ejTXAIfjBLGuV6EA6shtW2Xk00SJU88E%2BWsW9TNQANfWR8oZ7VkoC6LwUtB2Lk5%2FuYo1x9EQ1tI3VzQ6Evye6h466ZtvQEfLwTzKFpBL35igEBsvaqtwx02Lt5ids9tIN%2FUrprDBsVU4mtVo9Xs4U%2BFmnWoTXmTRIA3FeG%2FWmobA3dq2%2BpKlxZNNKYk80niEGehJV2rKxJORv5DHHPQm6nxut6Iv8n4uhz3WqMUpio%2FSHYQ3diaZ3Pr4acimgmp5y2U32zoQLi9yY1qdE%2F%2B3S18IsTRkMUsV%2B3dGutZ06ZfriaDU6pdX4KydU%2BGq8igTklGyXuwMYKc1S%2FURLr%2BKE1ycVTUk55Uu64im4IOMDoFc6xZTN2MOSIx8IGOqUBTvARc2O3y%2BTkBosAdgstFgPS%2FAzOGtqVMAUMp8I7bCGGCtOTR1qrz7TJ5o2Px6K4jfma80rRiHXlBxP3y9hGWyi8thgC3cec23hYjWdtB%2Fgi0irihKUV6mvY0Ufv0ubqP20ZfdPNqFapFnW6NYaai5WprgSkOu4l9%2Fv2HvQQ96gobduY5jOwahbcElPIpjhbmGioPJQZ2YMTh70sEuB%2BUuf4TFWe&X-Amz-Signature=2ad57c19454cd344d65cdfd1c56a75adea9d08c0a1248ad1ef510ed6a96e3788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM6VAIG4%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgpKDNN5s3RpuO5skheq6SmfszoXwecF7AXeoq%2Br5cwAiEA4s5csoJb%2BxAP21jvm70E7lmJGhpq%2B2OWD3u0zNRkyH4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDBI8ZcLWdWBm1eo26SrcAzPOoEtOPe8D6CjNMlx9plANln9AUSgB8W5SEYJ%2F%2F%2FN1%2BKCNI8B5jH7pNPO0iZKbQX%2B%2Fj3k40YtYyUQ8rWEm4wGb4pL36d4JboQG0BXew63moKhGl8CsEkihBk58Bz2gNxWTy6UbkGsAdFi2CTFHfqW2S25h8XGOOBCCVawkuHGWF34zdGU61P8ZEd6ZTpOjmpeS%2BmJt7x%2BRaS%2BNCZxxgUvbw8H6xsDbbBfLEzidwOVUgCaMSPOBZpU8SiJA2%2BBTtncph%2FD%2B06ejTXAIfjBLGuV6EA6shtW2Xk00SJU88E%2BWsW9TNQANfWR8oZ7VkoC6LwUtB2Lk5%2FuYo1x9EQ1tI3VzQ6Evye6h466ZtvQEfLwTzKFpBL35igEBsvaqtwx02Lt5ids9tIN%2FUrprDBsVU4mtVo9Xs4U%2BFmnWoTXmTRIA3FeG%2FWmobA3dq2%2BpKlxZNNKYk80niEGehJV2rKxJORv5DHHPQm6nxut6Iv8n4uhz3WqMUpio%2FSHYQ3diaZ3Pr4acimgmp5y2U32zoQLi9yY1qdE%2F%2B3S18IsTRkMUsV%2B3dGutZ06ZfriaDU6pdX4KydU%2BGq8igTklGyXuwMYKc1S%2FURLr%2BKE1ycVTUk55Uu64im4IOMDoFc6xZTN2MOSIx8IGOqUBTvARc2O3y%2BTkBosAdgstFgPS%2FAzOGtqVMAUMp8I7bCGGCtOTR1qrz7TJ5o2Px6K4jfma80rRiHXlBxP3y9hGWyi8thgC3cec23hYjWdtB%2Fgi0irihKUV6mvY0Ufv0ubqP20ZfdPNqFapFnW6NYaai5WprgSkOu4l9%2Fv2HvQQ96gobduY5jOwahbcElPIpjhbmGioPJQZ2YMTh70sEuB%2BUuf4TFWe&X-Amz-Signature=21c2d0ac62dc5a66f00cef1c92585cb623144c54b3114f51c5f95a1ad1db4790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
