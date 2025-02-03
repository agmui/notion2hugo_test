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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CXKYMEH%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqRZcH4XspLrbZsMAfV5c%2B1PW4O1aeJHKIv8xl2PtSOQIgZ2d7I%2BUlv1gABcjp1O1DqPX3X6mtT2fGjAT7bZncLEoqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSTHeK2Od8Z3qyo%2FSrcAxzXjFv9SuQTi7NBAxlO2%2FDr7rg%2BgL1cVTISnhSkOfWXboG%2FSCMVhY%2BGZV%2BEwte06Be0mBT%2BYr6QPsJLM420ZH0ngGCgJS%2FgpxkTR%2FllkQ990ba8PnVKIXWZcjjOMRhqYSTf6klv9aDaRxwuT1yn8ovIptjNBrSQa3Fd0jjaTRxFltQV%2BqDjNODULs5kJ%2Bb%2FmoAb%2FPTeyXl37ptHZ5%2BMDO4MvrVeJcnUkqF5qO%2FjbV1vWwMqLk1v1pUcpXsf1Zo%2FZdLrBhWyAJkUJr24dQrRrRZ4lXXxt04X116XYoKbu3H6b0gUIPcfLP%2FUOR7XCLdW3Ya%2Fp7pxRDmOK9JtXXenWTfNTSGKC5YYeArD0XGku3UwdriuzwIqAf10X1Wdu4p6%2FKTJS00r3l%2FfB89bZ38A6Mr2zpj%2BWx1RgYZZbNK9rhldUY4Vx%2FlyYgPJtgQ9G2OQcE9bsHb69W%2BWUL8blcW8TnVrDAXBMjZ40C8jSiQcF1iRdt3Zrq9aaxsL4IxcVs5ga%2BWDNhKAvAKXyemk83ZMFCP0D9lUbMfCKNjocJP1ewJ%2Byc%2BHq8VGH57yjlj03XcPEZNYjmFcLHA%2FNvqEgQAmdDVHjLE1SYy70MZup%2BsUftsH2JbVeQwzpwYAe1u7MObBgL0GOqUBd%2BT1nohkT4oxMntl54qt5%2FKOdcN3pnxuH4BgYHfPHC%2F85MJBAGGh5IDs15e7ZuupOrJ%2FBzlXZyrhvjYZUKEcucy2ugKBFRMN%2BOP6uIXNaAfKHgJmNs%2FB%2BmIy4Hbp%2Fhmqrxk%2B4OEieSkn3qXIYpoEDPRmiCZHaQwtJ21RHJSm1CWPyVU4Rf%2B95DPuC3FqHFxkQKkNd%2BlAhaYbeM09XPfgqpnYgxxu&X-Amz-Signature=f8f53c1e6e4adf340796baa02cca06cf525c7a76c93ce7f5e12b0ad3d20ee86c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CXKYMEH%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqRZcH4XspLrbZsMAfV5c%2B1PW4O1aeJHKIv8xl2PtSOQIgZ2d7I%2BUlv1gABcjp1O1DqPX3X6mtT2fGjAT7bZncLEoqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSTHeK2Od8Z3qyo%2FSrcAxzXjFv9SuQTi7NBAxlO2%2FDr7rg%2BgL1cVTISnhSkOfWXboG%2FSCMVhY%2BGZV%2BEwte06Be0mBT%2BYr6QPsJLM420ZH0ngGCgJS%2FgpxkTR%2FllkQ990ba8PnVKIXWZcjjOMRhqYSTf6klv9aDaRxwuT1yn8ovIptjNBrSQa3Fd0jjaTRxFltQV%2BqDjNODULs5kJ%2Bb%2FmoAb%2FPTeyXl37ptHZ5%2BMDO4MvrVeJcnUkqF5qO%2FjbV1vWwMqLk1v1pUcpXsf1Zo%2FZdLrBhWyAJkUJr24dQrRrRZ4lXXxt04X116XYoKbu3H6b0gUIPcfLP%2FUOR7XCLdW3Ya%2Fp7pxRDmOK9JtXXenWTfNTSGKC5YYeArD0XGku3UwdriuzwIqAf10X1Wdu4p6%2FKTJS00r3l%2FfB89bZ38A6Mr2zpj%2BWx1RgYZZbNK9rhldUY4Vx%2FlyYgPJtgQ9G2OQcE9bsHb69W%2BWUL8blcW8TnVrDAXBMjZ40C8jSiQcF1iRdt3Zrq9aaxsL4IxcVs5ga%2BWDNhKAvAKXyemk83ZMFCP0D9lUbMfCKNjocJP1ewJ%2Byc%2BHq8VGH57yjlj03XcPEZNYjmFcLHA%2FNvqEgQAmdDVHjLE1SYy70MZup%2BsUftsH2JbVeQwzpwYAe1u7MObBgL0GOqUBd%2BT1nohkT4oxMntl54qt5%2FKOdcN3pnxuH4BgYHfPHC%2F85MJBAGGh5IDs15e7ZuupOrJ%2FBzlXZyrhvjYZUKEcucy2ugKBFRMN%2BOP6uIXNaAfKHgJmNs%2FB%2BmIy4Hbp%2Fhmqrxk%2B4OEieSkn3qXIYpoEDPRmiCZHaQwtJ21RHJSm1CWPyVU4Rf%2B95DPuC3FqHFxkQKkNd%2BlAhaYbeM09XPfgqpnYgxxu&X-Amz-Signature=98d1d6f2791a03fa93b4596b9b78a13b370a0391fa1a1c744ac6fc2436d1973a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CXKYMEH%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqRZcH4XspLrbZsMAfV5c%2B1PW4O1aeJHKIv8xl2PtSOQIgZ2d7I%2BUlv1gABcjp1O1DqPX3X6mtT2fGjAT7bZncLEoqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSTHeK2Od8Z3qyo%2FSrcAxzXjFv9SuQTi7NBAxlO2%2FDr7rg%2BgL1cVTISnhSkOfWXboG%2FSCMVhY%2BGZV%2BEwte06Be0mBT%2BYr6QPsJLM420ZH0ngGCgJS%2FgpxkTR%2FllkQ990ba8PnVKIXWZcjjOMRhqYSTf6klv9aDaRxwuT1yn8ovIptjNBrSQa3Fd0jjaTRxFltQV%2BqDjNODULs5kJ%2Bb%2FmoAb%2FPTeyXl37ptHZ5%2BMDO4MvrVeJcnUkqF5qO%2FjbV1vWwMqLk1v1pUcpXsf1Zo%2FZdLrBhWyAJkUJr24dQrRrRZ4lXXxt04X116XYoKbu3H6b0gUIPcfLP%2FUOR7XCLdW3Ya%2Fp7pxRDmOK9JtXXenWTfNTSGKC5YYeArD0XGku3UwdriuzwIqAf10X1Wdu4p6%2FKTJS00r3l%2FfB89bZ38A6Mr2zpj%2BWx1RgYZZbNK9rhldUY4Vx%2FlyYgPJtgQ9G2OQcE9bsHb69W%2BWUL8blcW8TnVrDAXBMjZ40C8jSiQcF1iRdt3Zrq9aaxsL4IxcVs5ga%2BWDNhKAvAKXyemk83ZMFCP0D9lUbMfCKNjocJP1ewJ%2Byc%2BHq8VGH57yjlj03XcPEZNYjmFcLHA%2FNvqEgQAmdDVHjLE1SYy70MZup%2BsUftsH2JbVeQwzpwYAe1u7MObBgL0GOqUBd%2BT1nohkT4oxMntl54qt5%2FKOdcN3pnxuH4BgYHfPHC%2F85MJBAGGh5IDs15e7ZuupOrJ%2FBzlXZyrhvjYZUKEcucy2ugKBFRMN%2BOP6uIXNaAfKHgJmNs%2FB%2BmIy4Hbp%2Fhmqrxk%2B4OEieSkn3qXIYpoEDPRmiCZHaQwtJ21RHJSm1CWPyVU4Rf%2B95DPuC3FqHFxkQKkNd%2BlAhaYbeM09XPfgqpnYgxxu&X-Amz-Signature=b863838f101ea64716beff4d4e1d8174a0f5d8158ecf6b3f59b45adb4aaafff2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CXKYMEH%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqRZcH4XspLrbZsMAfV5c%2B1PW4O1aeJHKIv8xl2PtSOQIgZ2d7I%2BUlv1gABcjp1O1DqPX3X6mtT2fGjAT7bZncLEoqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSTHeK2Od8Z3qyo%2FSrcAxzXjFv9SuQTi7NBAxlO2%2FDr7rg%2BgL1cVTISnhSkOfWXboG%2FSCMVhY%2BGZV%2BEwte06Be0mBT%2BYr6QPsJLM420ZH0ngGCgJS%2FgpxkTR%2FllkQ990ba8PnVKIXWZcjjOMRhqYSTf6klv9aDaRxwuT1yn8ovIptjNBrSQa3Fd0jjaTRxFltQV%2BqDjNODULs5kJ%2Bb%2FmoAb%2FPTeyXl37ptHZ5%2BMDO4MvrVeJcnUkqF5qO%2FjbV1vWwMqLk1v1pUcpXsf1Zo%2FZdLrBhWyAJkUJr24dQrRrRZ4lXXxt04X116XYoKbu3H6b0gUIPcfLP%2FUOR7XCLdW3Ya%2Fp7pxRDmOK9JtXXenWTfNTSGKC5YYeArD0XGku3UwdriuzwIqAf10X1Wdu4p6%2FKTJS00r3l%2FfB89bZ38A6Mr2zpj%2BWx1RgYZZbNK9rhldUY4Vx%2FlyYgPJtgQ9G2OQcE9bsHb69W%2BWUL8blcW8TnVrDAXBMjZ40C8jSiQcF1iRdt3Zrq9aaxsL4IxcVs5ga%2BWDNhKAvAKXyemk83ZMFCP0D9lUbMfCKNjocJP1ewJ%2Byc%2BHq8VGH57yjlj03XcPEZNYjmFcLHA%2FNvqEgQAmdDVHjLE1SYy70MZup%2BsUftsH2JbVeQwzpwYAe1u7MObBgL0GOqUBd%2BT1nohkT4oxMntl54qt5%2FKOdcN3pnxuH4BgYHfPHC%2F85MJBAGGh5IDs15e7ZuupOrJ%2FBzlXZyrhvjYZUKEcucy2ugKBFRMN%2BOP6uIXNaAfKHgJmNs%2FB%2BmIy4Hbp%2Fhmqrxk%2B4OEieSkn3qXIYpoEDPRmiCZHaQwtJ21RHJSm1CWPyVU4Rf%2B95DPuC3FqHFxkQKkNd%2BlAhaYbeM09XPfgqpnYgxxu&X-Amz-Signature=74255689931db5ba9a71d6a28d8d47a86cd65d0d824b35dab8ae2e5c13440f04&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CXKYMEH%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqRZcH4XspLrbZsMAfV5c%2B1PW4O1aeJHKIv8xl2PtSOQIgZ2d7I%2BUlv1gABcjp1O1DqPX3X6mtT2fGjAT7bZncLEoqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSTHeK2Od8Z3qyo%2FSrcAxzXjFv9SuQTi7NBAxlO2%2FDr7rg%2BgL1cVTISnhSkOfWXboG%2FSCMVhY%2BGZV%2BEwte06Be0mBT%2BYr6QPsJLM420ZH0ngGCgJS%2FgpxkTR%2FllkQ990ba8PnVKIXWZcjjOMRhqYSTf6klv9aDaRxwuT1yn8ovIptjNBrSQa3Fd0jjaTRxFltQV%2BqDjNODULs5kJ%2Bb%2FmoAb%2FPTeyXl37ptHZ5%2BMDO4MvrVeJcnUkqF5qO%2FjbV1vWwMqLk1v1pUcpXsf1Zo%2FZdLrBhWyAJkUJr24dQrRrRZ4lXXxt04X116XYoKbu3H6b0gUIPcfLP%2FUOR7XCLdW3Ya%2Fp7pxRDmOK9JtXXenWTfNTSGKC5YYeArD0XGku3UwdriuzwIqAf10X1Wdu4p6%2FKTJS00r3l%2FfB89bZ38A6Mr2zpj%2BWx1RgYZZbNK9rhldUY4Vx%2FlyYgPJtgQ9G2OQcE9bsHb69W%2BWUL8blcW8TnVrDAXBMjZ40C8jSiQcF1iRdt3Zrq9aaxsL4IxcVs5ga%2BWDNhKAvAKXyemk83ZMFCP0D9lUbMfCKNjocJP1ewJ%2Byc%2BHq8VGH57yjlj03XcPEZNYjmFcLHA%2FNvqEgQAmdDVHjLE1SYy70MZup%2BsUftsH2JbVeQwzpwYAe1u7MObBgL0GOqUBd%2BT1nohkT4oxMntl54qt5%2FKOdcN3pnxuH4BgYHfPHC%2F85MJBAGGh5IDs15e7ZuupOrJ%2FBzlXZyrhvjYZUKEcucy2ugKBFRMN%2BOP6uIXNaAfKHgJmNs%2FB%2BmIy4Hbp%2Fhmqrxk%2B4OEieSkn3qXIYpoEDPRmiCZHaQwtJ21RHJSm1CWPyVU4Rf%2B95DPuC3FqHFxkQKkNd%2BlAhaYbeM09XPfgqpnYgxxu&X-Amz-Signature=3d3f2c1dcd95b30645260b393d80458a6fa0927f241600cbb2f65e219cdc8d21&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CXKYMEH%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqRZcH4XspLrbZsMAfV5c%2B1PW4O1aeJHKIv8xl2PtSOQIgZ2d7I%2BUlv1gABcjp1O1DqPX3X6mtT2fGjAT7bZncLEoqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSTHeK2Od8Z3qyo%2FSrcAxzXjFv9SuQTi7NBAxlO2%2FDr7rg%2BgL1cVTISnhSkOfWXboG%2FSCMVhY%2BGZV%2BEwte06Be0mBT%2BYr6QPsJLM420ZH0ngGCgJS%2FgpxkTR%2FllkQ990ba8PnVKIXWZcjjOMRhqYSTf6klv9aDaRxwuT1yn8ovIptjNBrSQa3Fd0jjaTRxFltQV%2BqDjNODULs5kJ%2Bb%2FmoAb%2FPTeyXl37ptHZ5%2BMDO4MvrVeJcnUkqF5qO%2FjbV1vWwMqLk1v1pUcpXsf1Zo%2FZdLrBhWyAJkUJr24dQrRrRZ4lXXxt04X116XYoKbu3H6b0gUIPcfLP%2FUOR7XCLdW3Ya%2Fp7pxRDmOK9JtXXenWTfNTSGKC5YYeArD0XGku3UwdriuzwIqAf10X1Wdu4p6%2FKTJS00r3l%2FfB89bZ38A6Mr2zpj%2BWx1RgYZZbNK9rhldUY4Vx%2FlyYgPJtgQ9G2OQcE9bsHb69W%2BWUL8blcW8TnVrDAXBMjZ40C8jSiQcF1iRdt3Zrq9aaxsL4IxcVs5ga%2BWDNhKAvAKXyemk83ZMFCP0D9lUbMfCKNjocJP1ewJ%2Byc%2BHq8VGH57yjlj03XcPEZNYjmFcLHA%2FNvqEgQAmdDVHjLE1SYy70MZup%2BsUftsH2JbVeQwzpwYAe1u7MObBgL0GOqUBd%2BT1nohkT4oxMntl54qt5%2FKOdcN3pnxuH4BgYHfPHC%2F85MJBAGGh5IDs15e7ZuupOrJ%2FBzlXZyrhvjYZUKEcucy2ugKBFRMN%2BOP6uIXNaAfKHgJmNs%2FB%2BmIy4Hbp%2Fhmqrxk%2B4OEieSkn3qXIYpoEDPRmiCZHaQwtJ21RHJSm1CWPyVU4Rf%2B95DPuC3FqHFxkQKkNd%2BlAhaYbeM09XPfgqpnYgxxu&X-Amz-Signature=373269006b39a5ead2baac71fc8053ec4a5f1ac49f4d480fdcb049ccd308913a&X-Amz-SignedHeaders=host&x-id=GetObject)
