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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCL3QRFS%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T004230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDftiSfxmRB7w1kQ%2BbaDXm0upQ2zrs9eulgIUCSW1qxlAIhALUBYA8xbkjr9DzbyAFcOq4TZKDEXgv2HD3RYSi6B0x%2BKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQFVNR077yfNzSn%2BMq3AMs3IX7seMiaxNis3suTpmqRkN9PPzianGaqSqkIKyzleaZxrTuJG%2FtyST7xaRpUxgSE2WMZiIUHe5JGY1BRYwpkTQ4g5PnQgHoIieMDHKTmIIUKp8Y1l1n%2FF45zgaNnItCqrW9t8Hx%2Bs95nvvaVYNKiAcbkwVVfv8M%2Fp0IylabXHsAGahqLW8vPyRLkojAqb%2FA2BtgjnJHMmIWX7pIenUDLrrijqsiDeLxMmQ3HE0KvVTVe2k9qURADLc0AcT1clwvV%2F%2BYmcSWmeMYO1l2MqgUgGCCWOugGP5vskSg0yUnWdgN%2Fre4rfEv1w1p2N1ZyGIFhtlKye6CDsVx4wgeS912j4mGZSmL8zsjz%2Fl5PFIzq3GPa%2Fe%2BXaDNX6qmt4uEWrWMfQp%2Bn7DWDLh769RYSYN1tv4NJu4LClmEv3CnMAtpFrz1v%2BnOX5H0oP%2BBpNujw7%2FogJY4r0uw2ayStwqnOuqdD%2Fkgp8B%2Bct7rhVK6QQ0ci4GcGUTxsg%2FdtHpJkqmRmFGhDjOqFiwhLhPW424X8BVqmjFUXv9NKtV3T3M1q8LTX2srEqHCy6rzEHKIaFJC%2FeTQsDjAzVzLkv0A5SGNvqWbnpG3EKzcpOpldYY5p00enpKmQ0x4hSLwajVFDDDatajCBjqkAUGoVA6dLrxPfTiul82cMWteFJYa61dDBAJc%2B%2FO2%2BEfqxbgFOri8rDNDosfJ3LkamVn%2BpUJfo9bc1DbpW4Jn55uK3A%2F5x%2FAxVIsn3uWsIIqruMwoqWPmSBXyKE8vGNsbYc%2FQNw186nQaAP3IltC%2Bw83xc8f%2FCVYf8uAttnuPQr3%2FPSjLZrNzOvHSkBCmlq1%2BUe8c9dXHkbdpJdK5YAqxuAJyh7uR&X-Amz-Signature=c1a9c87ca5c55746e195b67e5b5ead4a56b277c8e96ecefd82269bc045dfac93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCL3QRFS%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T004230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDftiSfxmRB7w1kQ%2BbaDXm0upQ2zrs9eulgIUCSW1qxlAIhALUBYA8xbkjr9DzbyAFcOq4TZKDEXgv2HD3RYSi6B0x%2BKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQFVNR077yfNzSn%2BMq3AMs3IX7seMiaxNis3suTpmqRkN9PPzianGaqSqkIKyzleaZxrTuJG%2FtyST7xaRpUxgSE2WMZiIUHe5JGY1BRYwpkTQ4g5PnQgHoIieMDHKTmIIUKp8Y1l1n%2FF45zgaNnItCqrW9t8Hx%2Bs95nvvaVYNKiAcbkwVVfv8M%2Fp0IylabXHsAGahqLW8vPyRLkojAqb%2FA2BtgjnJHMmIWX7pIenUDLrrijqsiDeLxMmQ3HE0KvVTVe2k9qURADLc0AcT1clwvV%2F%2BYmcSWmeMYO1l2MqgUgGCCWOugGP5vskSg0yUnWdgN%2Fre4rfEv1w1p2N1ZyGIFhtlKye6CDsVx4wgeS912j4mGZSmL8zsjz%2Fl5PFIzq3GPa%2Fe%2BXaDNX6qmt4uEWrWMfQp%2Bn7DWDLh769RYSYN1tv4NJu4LClmEv3CnMAtpFrz1v%2BnOX5H0oP%2BBpNujw7%2FogJY4r0uw2ayStwqnOuqdD%2Fkgp8B%2Bct7rhVK6QQ0ci4GcGUTxsg%2FdtHpJkqmRmFGhDjOqFiwhLhPW424X8BVqmjFUXv9NKtV3T3M1q8LTX2srEqHCy6rzEHKIaFJC%2FeTQsDjAzVzLkv0A5SGNvqWbnpG3EKzcpOpldYY5p00enpKmQ0x4hSLwajVFDDDatajCBjqkAUGoVA6dLrxPfTiul82cMWteFJYa61dDBAJc%2B%2FO2%2BEfqxbgFOri8rDNDosfJ3LkamVn%2BpUJfo9bc1DbpW4Jn55uK3A%2F5x%2FAxVIsn3uWsIIqruMwoqWPmSBXyKE8vGNsbYc%2FQNw186nQaAP3IltC%2Bw83xc8f%2FCVYf8uAttnuPQr3%2FPSjLZrNzOvHSkBCmlq1%2BUe8c9dXHkbdpJdK5YAqxuAJyh7uR&X-Amz-Signature=f27d82d7880dc88c74467ce7b02666c5b55c1183bf515ce81e266ef82aad04f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCL3QRFS%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T004230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDftiSfxmRB7w1kQ%2BbaDXm0upQ2zrs9eulgIUCSW1qxlAIhALUBYA8xbkjr9DzbyAFcOq4TZKDEXgv2HD3RYSi6B0x%2BKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQFVNR077yfNzSn%2BMq3AMs3IX7seMiaxNis3suTpmqRkN9PPzianGaqSqkIKyzleaZxrTuJG%2FtyST7xaRpUxgSE2WMZiIUHe5JGY1BRYwpkTQ4g5PnQgHoIieMDHKTmIIUKp8Y1l1n%2FF45zgaNnItCqrW9t8Hx%2Bs95nvvaVYNKiAcbkwVVfv8M%2Fp0IylabXHsAGahqLW8vPyRLkojAqb%2FA2BtgjnJHMmIWX7pIenUDLrrijqsiDeLxMmQ3HE0KvVTVe2k9qURADLc0AcT1clwvV%2F%2BYmcSWmeMYO1l2MqgUgGCCWOugGP5vskSg0yUnWdgN%2Fre4rfEv1w1p2N1ZyGIFhtlKye6CDsVx4wgeS912j4mGZSmL8zsjz%2Fl5PFIzq3GPa%2Fe%2BXaDNX6qmt4uEWrWMfQp%2Bn7DWDLh769RYSYN1tv4NJu4LClmEv3CnMAtpFrz1v%2BnOX5H0oP%2BBpNujw7%2FogJY4r0uw2ayStwqnOuqdD%2Fkgp8B%2Bct7rhVK6QQ0ci4GcGUTxsg%2FdtHpJkqmRmFGhDjOqFiwhLhPW424X8BVqmjFUXv9NKtV3T3M1q8LTX2srEqHCy6rzEHKIaFJC%2FeTQsDjAzVzLkv0A5SGNvqWbnpG3EKzcpOpldYY5p00enpKmQ0x4hSLwajVFDDDatajCBjqkAUGoVA6dLrxPfTiul82cMWteFJYa61dDBAJc%2B%2FO2%2BEfqxbgFOri8rDNDosfJ3LkamVn%2BpUJfo9bc1DbpW4Jn55uK3A%2F5x%2FAxVIsn3uWsIIqruMwoqWPmSBXyKE8vGNsbYc%2FQNw186nQaAP3IltC%2Bw83xc8f%2FCVYf8uAttnuPQr3%2FPSjLZrNzOvHSkBCmlq1%2BUe8c9dXHkbdpJdK5YAqxuAJyh7uR&X-Amz-Signature=7051ea4fd786eb44fa3b766ede5975837f2fb17d3c1c83ec33cbfce8bf107c6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCL3QRFS%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T004230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDftiSfxmRB7w1kQ%2BbaDXm0upQ2zrs9eulgIUCSW1qxlAIhALUBYA8xbkjr9DzbyAFcOq4TZKDEXgv2HD3RYSi6B0x%2BKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQFVNR077yfNzSn%2BMq3AMs3IX7seMiaxNis3suTpmqRkN9PPzianGaqSqkIKyzleaZxrTuJG%2FtyST7xaRpUxgSE2WMZiIUHe5JGY1BRYwpkTQ4g5PnQgHoIieMDHKTmIIUKp8Y1l1n%2FF45zgaNnItCqrW9t8Hx%2Bs95nvvaVYNKiAcbkwVVfv8M%2Fp0IylabXHsAGahqLW8vPyRLkojAqb%2FA2BtgjnJHMmIWX7pIenUDLrrijqsiDeLxMmQ3HE0KvVTVe2k9qURADLc0AcT1clwvV%2F%2BYmcSWmeMYO1l2MqgUgGCCWOugGP5vskSg0yUnWdgN%2Fre4rfEv1w1p2N1ZyGIFhtlKye6CDsVx4wgeS912j4mGZSmL8zsjz%2Fl5PFIzq3GPa%2Fe%2BXaDNX6qmt4uEWrWMfQp%2Bn7DWDLh769RYSYN1tv4NJu4LClmEv3CnMAtpFrz1v%2BnOX5H0oP%2BBpNujw7%2FogJY4r0uw2ayStwqnOuqdD%2Fkgp8B%2Bct7rhVK6QQ0ci4GcGUTxsg%2FdtHpJkqmRmFGhDjOqFiwhLhPW424X8BVqmjFUXv9NKtV3T3M1q8LTX2srEqHCy6rzEHKIaFJC%2FeTQsDjAzVzLkv0A5SGNvqWbnpG3EKzcpOpldYY5p00enpKmQ0x4hSLwajVFDDDatajCBjqkAUGoVA6dLrxPfTiul82cMWteFJYa61dDBAJc%2B%2FO2%2BEfqxbgFOri8rDNDosfJ3LkamVn%2BpUJfo9bc1DbpW4Jn55uK3A%2F5x%2FAxVIsn3uWsIIqruMwoqWPmSBXyKE8vGNsbYc%2FQNw186nQaAP3IltC%2Bw83xc8f%2FCVYf8uAttnuPQr3%2FPSjLZrNzOvHSkBCmlq1%2BUe8c9dXHkbdpJdK5YAqxuAJyh7uR&X-Amz-Signature=fd175b81f8e1c38d1e59a5e9f045fb1c7407ed6130b738f7238581a3b1cfb100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCL3QRFS%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T004230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDftiSfxmRB7w1kQ%2BbaDXm0upQ2zrs9eulgIUCSW1qxlAIhALUBYA8xbkjr9DzbyAFcOq4TZKDEXgv2HD3RYSi6B0x%2BKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQFVNR077yfNzSn%2BMq3AMs3IX7seMiaxNis3suTpmqRkN9PPzianGaqSqkIKyzleaZxrTuJG%2FtyST7xaRpUxgSE2WMZiIUHe5JGY1BRYwpkTQ4g5PnQgHoIieMDHKTmIIUKp8Y1l1n%2FF45zgaNnItCqrW9t8Hx%2Bs95nvvaVYNKiAcbkwVVfv8M%2Fp0IylabXHsAGahqLW8vPyRLkojAqb%2FA2BtgjnJHMmIWX7pIenUDLrrijqsiDeLxMmQ3HE0KvVTVe2k9qURADLc0AcT1clwvV%2F%2BYmcSWmeMYO1l2MqgUgGCCWOugGP5vskSg0yUnWdgN%2Fre4rfEv1w1p2N1ZyGIFhtlKye6CDsVx4wgeS912j4mGZSmL8zsjz%2Fl5PFIzq3GPa%2Fe%2BXaDNX6qmt4uEWrWMfQp%2Bn7DWDLh769RYSYN1tv4NJu4LClmEv3CnMAtpFrz1v%2BnOX5H0oP%2BBpNujw7%2FogJY4r0uw2ayStwqnOuqdD%2Fkgp8B%2Bct7rhVK6QQ0ci4GcGUTxsg%2FdtHpJkqmRmFGhDjOqFiwhLhPW424X8BVqmjFUXv9NKtV3T3M1q8LTX2srEqHCy6rzEHKIaFJC%2FeTQsDjAzVzLkv0A5SGNvqWbnpG3EKzcpOpldYY5p00enpKmQ0x4hSLwajVFDDDatajCBjqkAUGoVA6dLrxPfTiul82cMWteFJYa61dDBAJc%2B%2FO2%2BEfqxbgFOri8rDNDosfJ3LkamVn%2BpUJfo9bc1DbpW4Jn55uK3A%2F5x%2FAxVIsn3uWsIIqruMwoqWPmSBXyKE8vGNsbYc%2FQNw186nQaAP3IltC%2Bw83xc8f%2FCVYf8uAttnuPQr3%2FPSjLZrNzOvHSkBCmlq1%2BUe8c9dXHkbdpJdK5YAqxuAJyh7uR&X-Amz-Signature=fd25a9210d3bd7a7e405b4825fe1ff1c1c4b7d53d44566a679b026dd3d53801e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCL3QRFS%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T004230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDftiSfxmRB7w1kQ%2BbaDXm0upQ2zrs9eulgIUCSW1qxlAIhALUBYA8xbkjr9DzbyAFcOq4TZKDEXgv2HD3RYSi6B0x%2BKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQFVNR077yfNzSn%2BMq3AMs3IX7seMiaxNis3suTpmqRkN9PPzianGaqSqkIKyzleaZxrTuJG%2FtyST7xaRpUxgSE2WMZiIUHe5JGY1BRYwpkTQ4g5PnQgHoIieMDHKTmIIUKp8Y1l1n%2FF45zgaNnItCqrW9t8Hx%2Bs95nvvaVYNKiAcbkwVVfv8M%2Fp0IylabXHsAGahqLW8vPyRLkojAqb%2FA2BtgjnJHMmIWX7pIenUDLrrijqsiDeLxMmQ3HE0KvVTVe2k9qURADLc0AcT1clwvV%2F%2BYmcSWmeMYO1l2MqgUgGCCWOugGP5vskSg0yUnWdgN%2Fre4rfEv1w1p2N1ZyGIFhtlKye6CDsVx4wgeS912j4mGZSmL8zsjz%2Fl5PFIzq3GPa%2Fe%2BXaDNX6qmt4uEWrWMfQp%2Bn7DWDLh769RYSYN1tv4NJu4LClmEv3CnMAtpFrz1v%2BnOX5H0oP%2BBpNujw7%2FogJY4r0uw2ayStwqnOuqdD%2Fkgp8B%2Bct7rhVK6QQ0ci4GcGUTxsg%2FdtHpJkqmRmFGhDjOqFiwhLhPW424X8BVqmjFUXv9NKtV3T3M1q8LTX2srEqHCy6rzEHKIaFJC%2FeTQsDjAzVzLkv0A5SGNvqWbnpG3EKzcpOpldYY5p00enpKmQ0x4hSLwajVFDDDatajCBjqkAUGoVA6dLrxPfTiul82cMWteFJYa61dDBAJc%2B%2FO2%2BEfqxbgFOri8rDNDosfJ3LkamVn%2BpUJfo9bc1DbpW4Jn55uK3A%2F5x%2FAxVIsn3uWsIIqruMwoqWPmSBXyKE8vGNsbYc%2FQNw186nQaAP3IltC%2Bw83xc8f%2FCVYf8uAttnuPQr3%2FPSjLZrNzOvHSkBCmlq1%2BUe8c9dXHkbdpJdK5YAqxuAJyh7uR&X-Amz-Signature=54628aae3e74b5ed78fe8d5557c7b513d2780a2de0c5fa7f0e740fe8b2833a3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
