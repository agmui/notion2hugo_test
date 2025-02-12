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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJIZ7XGN%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1ubal3bG99gvLamk%2FSGDlmEnoFdUMQ4z4uJc%2FeIOJ3QIgET2Snh%2FPZ1RLjIk%2FUUddehehc4za%2BlDnq%2B1WsynjLEoqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvXCIFN2SV0sizZRyrcAzSj81lY1Gs97yiuYtjuZGaPbqwdyvAbieNZ46YQufLNU9dwY2Bw6hgMR6ZnL5G5KcKRBASe%2FwE%2FXoaG5uk3rGTFrBfme2DE4N8xvP3u0y2atemldrJbCh7AoKNOuegaVF%2FyepmgZlGWBQgUregbZGpqh0MzJ4c2fyxY6ThWMNgJKuciGC0tEb2zx67IkyUxutuNTNLOF%2B9G0k1ihELihZxCKuhr5thtzINSZECaYiYPkZWaU61EJxj9QKhRGqLdCSW%2BeKaWBuvy2nq1Bzb38i5%2BMO3I1W5nYdNzCNz%2FihawtWxe%2FU%2BEkP2qFO%2BVKL4309Igl1KzKdSbOGbQcCI%2BwIxRVv689Q7Bd4FZ7vwFIpHUJm7baJcQkN2ChKrh9LP92RoEgedYzzBDsiaGucKACGfxwBO27xXOXt9OQSVS86QwwJv0621ylvtHKdq0KwOLkKeKvV05ni%2Fla13S8eSFU1%2Btq6xuP29Top9dn01SVWsB0jw3xSIbZ%2FXUuMsy1Lzs3g8Re1umPlvaeiqz8rGAUvgKnMShZLElgubzpIGyoMfYhIDHIr%2BzKWr7WGn6UcKuxhSrgvpBmnht54OT4WQr5uavXDLhTEuFKBkrsQtpk2TKcovznog3ENzffsFgMIzur70GOqUBS8VSiNzSu5pwd9B8vBnvH9qLdxZGCOhpRz%2FPsSA2gsbe99mU%2B8P8CILo9MkKh73bsYk%2FUlYdX3WgxtdqSSyEqRZCq8xA%2BRPXBAaKUwjOkMhMpw5mpBDiFfMITEcCSCU90ijttiBFg%2BT8UM4LQ9ZIULIFRT2iThFlKAzu8INeiU%2BRiaESvpD7t8Al5H%2BDx7cHuK494Zd26dz9pUNNKzlnH01f4PHb&X-Amz-Signature=d791758eb841c41d9da5d718e30320e902b5521712938288accc669ead26c230&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJIZ7XGN%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1ubal3bG99gvLamk%2FSGDlmEnoFdUMQ4z4uJc%2FeIOJ3QIgET2Snh%2FPZ1RLjIk%2FUUddehehc4za%2BlDnq%2B1WsynjLEoqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvXCIFN2SV0sizZRyrcAzSj81lY1Gs97yiuYtjuZGaPbqwdyvAbieNZ46YQufLNU9dwY2Bw6hgMR6ZnL5G5KcKRBASe%2FwE%2FXoaG5uk3rGTFrBfme2DE4N8xvP3u0y2atemldrJbCh7AoKNOuegaVF%2FyepmgZlGWBQgUregbZGpqh0MzJ4c2fyxY6ThWMNgJKuciGC0tEb2zx67IkyUxutuNTNLOF%2B9G0k1ihELihZxCKuhr5thtzINSZECaYiYPkZWaU61EJxj9QKhRGqLdCSW%2BeKaWBuvy2nq1Bzb38i5%2BMO3I1W5nYdNzCNz%2FihawtWxe%2FU%2BEkP2qFO%2BVKL4309Igl1KzKdSbOGbQcCI%2BwIxRVv689Q7Bd4FZ7vwFIpHUJm7baJcQkN2ChKrh9LP92RoEgedYzzBDsiaGucKACGfxwBO27xXOXt9OQSVS86QwwJv0621ylvtHKdq0KwOLkKeKvV05ni%2Fla13S8eSFU1%2Btq6xuP29Top9dn01SVWsB0jw3xSIbZ%2FXUuMsy1Lzs3g8Re1umPlvaeiqz8rGAUvgKnMShZLElgubzpIGyoMfYhIDHIr%2BzKWr7WGn6UcKuxhSrgvpBmnht54OT4WQr5uavXDLhTEuFKBkrsQtpk2TKcovznog3ENzffsFgMIzur70GOqUBS8VSiNzSu5pwd9B8vBnvH9qLdxZGCOhpRz%2FPsSA2gsbe99mU%2B8P8CILo9MkKh73bsYk%2FUlYdX3WgxtdqSSyEqRZCq8xA%2BRPXBAaKUwjOkMhMpw5mpBDiFfMITEcCSCU90ijttiBFg%2BT8UM4LQ9ZIULIFRT2iThFlKAzu8INeiU%2BRiaESvpD7t8Al5H%2BDx7cHuK494Zd26dz9pUNNKzlnH01f4PHb&X-Amz-Signature=9ccd27b31c557b4b198faf829ac64eba9013cd0a86119300bc0019014b6f3294&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJIZ7XGN%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1ubal3bG99gvLamk%2FSGDlmEnoFdUMQ4z4uJc%2FeIOJ3QIgET2Snh%2FPZ1RLjIk%2FUUddehehc4za%2BlDnq%2B1WsynjLEoqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvXCIFN2SV0sizZRyrcAzSj81lY1Gs97yiuYtjuZGaPbqwdyvAbieNZ46YQufLNU9dwY2Bw6hgMR6ZnL5G5KcKRBASe%2FwE%2FXoaG5uk3rGTFrBfme2DE4N8xvP3u0y2atemldrJbCh7AoKNOuegaVF%2FyepmgZlGWBQgUregbZGpqh0MzJ4c2fyxY6ThWMNgJKuciGC0tEb2zx67IkyUxutuNTNLOF%2B9G0k1ihELihZxCKuhr5thtzINSZECaYiYPkZWaU61EJxj9QKhRGqLdCSW%2BeKaWBuvy2nq1Bzb38i5%2BMO3I1W5nYdNzCNz%2FihawtWxe%2FU%2BEkP2qFO%2BVKL4309Igl1KzKdSbOGbQcCI%2BwIxRVv689Q7Bd4FZ7vwFIpHUJm7baJcQkN2ChKrh9LP92RoEgedYzzBDsiaGucKACGfxwBO27xXOXt9OQSVS86QwwJv0621ylvtHKdq0KwOLkKeKvV05ni%2Fla13S8eSFU1%2Btq6xuP29Top9dn01SVWsB0jw3xSIbZ%2FXUuMsy1Lzs3g8Re1umPlvaeiqz8rGAUvgKnMShZLElgubzpIGyoMfYhIDHIr%2BzKWr7WGn6UcKuxhSrgvpBmnht54OT4WQr5uavXDLhTEuFKBkrsQtpk2TKcovznog3ENzffsFgMIzur70GOqUBS8VSiNzSu5pwd9B8vBnvH9qLdxZGCOhpRz%2FPsSA2gsbe99mU%2B8P8CILo9MkKh73bsYk%2FUlYdX3WgxtdqSSyEqRZCq8xA%2BRPXBAaKUwjOkMhMpw5mpBDiFfMITEcCSCU90ijttiBFg%2BT8UM4LQ9ZIULIFRT2iThFlKAzu8INeiU%2BRiaESvpD7t8Al5H%2BDx7cHuK494Zd26dz9pUNNKzlnH01f4PHb&X-Amz-Signature=7b98c4fa7f9a33be38e2f51e165d716c5d3f2eb90abe79f7e2b42ebae959116b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJIZ7XGN%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1ubal3bG99gvLamk%2FSGDlmEnoFdUMQ4z4uJc%2FeIOJ3QIgET2Snh%2FPZ1RLjIk%2FUUddehehc4za%2BlDnq%2B1WsynjLEoqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvXCIFN2SV0sizZRyrcAzSj81lY1Gs97yiuYtjuZGaPbqwdyvAbieNZ46YQufLNU9dwY2Bw6hgMR6ZnL5G5KcKRBASe%2FwE%2FXoaG5uk3rGTFrBfme2DE4N8xvP3u0y2atemldrJbCh7AoKNOuegaVF%2FyepmgZlGWBQgUregbZGpqh0MzJ4c2fyxY6ThWMNgJKuciGC0tEb2zx67IkyUxutuNTNLOF%2B9G0k1ihELihZxCKuhr5thtzINSZECaYiYPkZWaU61EJxj9QKhRGqLdCSW%2BeKaWBuvy2nq1Bzb38i5%2BMO3I1W5nYdNzCNz%2FihawtWxe%2FU%2BEkP2qFO%2BVKL4309Igl1KzKdSbOGbQcCI%2BwIxRVv689Q7Bd4FZ7vwFIpHUJm7baJcQkN2ChKrh9LP92RoEgedYzzBDsiaGucKACGfxwBO27xXOXt9OQSVS86QwwJv0621ylvtHKdq0KwOLkKeKvV05ni%2Fla13S8eSFU1%2Btq6xuP29Top9dn01SVWsB0jw3xSIbZ%2FXUuMsy1Lzs3g8Re1umPlvaeiqz8rGAUvgKnMShZLElgubzpIGyoMfYhIDHIr%2BzKWr7WGn6UcKuxhSrgvpBmnht54OT4WQr5uavXDLhTEuFKBkrsQtpk2TKcovznog3ENzffsFgMIzur70GOqUBS8VSiNzSu5pwd9B8vBnvH9qLdxZGCOhpRz%2FPsSA2gsbe99mU%2B8P8CILo9MkKh73bsYk%2FUlYdX3WgxtdqSSyEqRZCq8xA%2BRPXBAaKUwjOkMhMpw5mpBDiFfMITEcCSCU90ijttiBFg%2BT8UM4LQ9ZIULIFRT2iThFlKAzu8INeiU%2BRiaESvpD7t8Al5H%2BDx7cHuK494Zd26dz9pUNNKzlnH01f4PHb&X-Amz-Signature=56049b1caa67b63c36fcb7261605728ad42a45f22badee7ae6d6c6e4eebd0c07&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJIZ7XGN%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1ubal3bG99gvLamk%2FSGDlmEnoFdUMQ4z4uJc%2FeIOJ3QIgET2Snh%2FPZ1RLjIk%2FUUddehehc4za%2BlDnq%2B1WsynjLEoqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvXCIFN2SV0sizZRyrcAzSj81lY1Gs97yiuYtjuZGaPbqwdyvAbieNZ46YQufLNU9dwY2Bw6hgMR6ZnL5G5KcKRBASe%2FwE%2FXoaG5uk3rGTFrBfme2DE4N8xvP3u0y2atemldrJbCh7AoKNOuegaVF%2FyepmgZlGWBQgUregbZGpqh0MzJ4c2fyxY6ThWMNgJKuciGC0tEb2zx67IkyUxutuNTNLOF%2B9G0k1ihELihZxCKuhr5thtzINSZECaYiYPkZWaU61EJxj9QKhRGqLdCSW%2BeKaWBuvy2nq1Bzb38i5%2BMO3I1W5nYdNzCNz%2FihawtWxe%2FU%2BEkP2qFO%2BVKL4309Igl1KzKdSbOGbQcCI%2BwIxRVv689Q7Bd4FZ7vwFIpHUJm7baJcQkN2ChKrh9LP92RoEgedYzzBDsiaGucKACGfxwBO27xXOXt9OQSVS86QwwJv0621ylvtHKdq0KwOLkKeKvV05ni%2Fla13S8eSFU1%2Btq6xuP29Top9dn01SVWsB0jw3xSIbZ%2FXUuMsy1Lzs3g8Re1umPlvaeiqz8rGAUvgKnMShZLElgubzpIGyoMfYhIDHIr%2BzKWr7WGn6UcKuxhSrgvpBmnht54OT4WQr5uavXDLhTEuFKBkrsQtpk2TKcovznog3ENzffsFgMIzur70GOqUBS8VSiNzSu5pwd9B8vBnvH9qLdxZGCOhpRz%2FPsSA2gsbe99mU%2B8P8CILo9MkKh73bsYk%2FUlYdX3WgxtdqSSyEqRZCq8xA%2BRPXBAaKUwjOkMhMpw5mpBDiFfMITEcCSCU90ijttiBFg%2BT8UM4LQ9ZIULIFRT2iThFlKAzu8INeiU%2BRiaESvpD7t8Al5H%2BDx7cHuK494Zd26dz9pUNNKzlnH01f4PHb&X-Amz-Signature=695df2c11dab855640b3284a7a373629936988955a545a2aec2c1e4224ab4027&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJIZ7XGN%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1ubal3bG99gvLamk%2FSGDlmEnoFdUMQ4z4uJc%2FeIOJ3QIgET2Snh%2FPZ1RLjIk%2FUUddehehc4za%2BlDnq%2B1WsynjLEoqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvXCIFN2SV0sizZRyrcAzSj81lY1Gs97yiuYtjuZGaPbqwdyvAbieNZ46YQufLNU9dwY2Bw6hgMR6ZnL5G5KcKRBASe%2FwE%2FXoaG5uk3rGTFrBfme2DE4N8xvP3u0y2atemldrJbCh7AoKNOuegaVF%2FyepmgZlGWBQgUregbZGpqh0MzJ4c2fyxY6ThWMNgJKuciGC0tEb2zx67IkyUxutuNTNLOF%2B9G0k1ihELihZxCKuhr5thtzINSZECaYiYPkZWaU61EJxj9QKhRGqLdCSW%2BeKaWBuvy2nq1Bzb38i5%2BMO3I1W5nYdNzCNz%2FihawtWxe%2FU%2BEkP2qFO%2BVKL4309Igl1KzKdSbOGbQcCI%2BwIxRVv689Q7Bd4FZ7vwFIpHUJm7baJcQkN2ChKrh9LP92RoEgedYzzBDsiaGucKACGfxwBO27xXOXt9OQSVS86QwwJv0621ylvtHKdq0KwOLkKeKvV05ni%2Fla13S8eSFU1%2Btq6xuP29Top9dn01SVWsB0jw3xSIbZ%2FXUuMsy1Lzs3g8Re1umPlvaeiqz8rGAUvgKnMShZLElgubzpIGyoMfYhIDHIr%2BzKWr7WGn6UcKuxhSrgvpBmnht54OT4WQr5uavXDLhTEuFKBkrsQtpk2TKcovznog3ENzffsFgMIzur70GOqUBS8VSiNzSu5pwd9B8vBnvH9qLdxZGCOhpRz%2FPsSA2gsbe99mU%2B8P8CILo9MkKh73bsYk%2FUlYdX3WgxtdqSSyEqRZCq8xA%2BRPXBAaKUwjOkMhMpw5mpBDiFfMITEcCSCU90ijttiBFg%2BT8UM4LQ9ZIULIFRT2iThFlKAzu8INeiU%2BRiaESvpD7t8Al5H%2BDx7cHuK494Zd26dz9pUNNKzlnH01f4PHb&X-Amz-Signature=6f40fe654a91353419af7dd6db8383af30af4da1ceede76056272e646b5fb1bf&X-Amz-SignedHeaders=host&x-id=GetObject)
