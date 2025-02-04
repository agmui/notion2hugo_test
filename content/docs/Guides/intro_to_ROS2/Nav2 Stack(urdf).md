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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRXVSX6O%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIAwK2SgG801hROIbDZC%2Fl5Ihy5iq%2FbeEZ6Y%2F%2Fz8kaZ77AiAQWferxW4aL38opNughqRMQ43ED4xlQHpes1UFsjAJqir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMPey5K6ZaO%2FAD9YQHKtwDsMxFkHvcVxUiDBRV6XcSD%2F2babcKsMmYHMGZV2GkdtveChvscuA4hWBMCdsEKKv6ucouKZbxdMWZACvpLgGeRQBe%2BhAa6Dl6rHagJqx99eUJ5W7HXoDCwCY9xY2hK4ZfTn8fV23XDed%2FTCIyE2SPdmQLOEfZEbqTvfwOPfOT70OLhdZNSEDImKVViufyC4SgW2h4GhY5zFUZZzors4xuTQcEhQuftwS06t3hlqEcVV0bBmG%2FPTGkjigL6MQheuRqHvaMjYEuzBP27VtqNq9wdise49eEvdEAu%2FlZb2IQKp56PT12fHdWJO0VDefaElGmcy%2Boj%2F%2BkgG1dNsYzNvIwy6PLeE94gdOHXOnrXzh8%2FKVIBpBVyujJaJacZGh9wjJ%2F9pKy8HGZDmm9ECx%2Fh2FWAmlxqXtxWTPIbIGJrQ8UP1UxtFJDf8itXwHWsOCYrNpvyikWpdjQ2x1S47K2J5YqfbhNTAx14yFyvSnkaFXin8YXDaKfL2WULuv%2Fpr3sHW1c%2FIVcub4WdT0WGC%2F1KJ4iBJZ%2B50uIZtGh1cNU0yhdea60G5RR9mL8FdYPM%2FhSUfo6IzKZfLGOpmH0VVF9ZV8Qr75wcntukeKrodDroGh%2FfllM2bWknrRN4kPDQrkw%2BN2JvQY6pgE5zt%2B%2FD1hODIKfC7nJUFDSCwlA3pmFxLpt3n09OXOE0jfTpkamNZNARKsrgO%2FuzLI56fQnA61TMC3PhFH8lxK%2Fczd9uLiTuLwX%2B2gV2lOdtTNuEa2cRcclGxT7%2Ff4mld4ubyrDQ4JAWHQ9XJYWtsOoHxtO1GtSSLmtGRazdZ2uu8mxIiT6IZlFeU%2BHTqlP8r0KEXc02fpll4ljLt1gXBuZpItzSuRE&X-Amz-Signature=cb7b00ee0b92baf711a6d09351e83b1d73ad7bf5edee413ce7bf62efa4cce47c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRXVSX6O%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIAwK2SgG801hROIbDZC%2Fl5Ihy5iq%2FbeEZ6Y%2F%2Fz8kaZ77AiAQWferxW4aL38opNughqRMQ43ED4xlQHpes1UFsjAJqir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMPey5K6ZaO%2FAD9YQHKtwDsMxFkHvcVxUiDBRV6XcSD%2F2babcKsMmYHMGZV2GkdtveChvscuA4hWBMCdsEKKv6ucouKZbxdMWZACvpLgGeRQBe%2BhAa6Dl6rHagJqx99eUJ5W7HXoDCwCY9xY2hK4ZfTn8fV23XDed%2FTCIyE2SPdmQLOEfZEbqTvfwOPfOT70OLhdZNSEDImKVViufyC4SgW2h4GhY5zFUZZzors4xuTQcEhQuftwS06t3hlqEcVV0bBmG%2FPTGkjigL6MQheuRqHvaMjYEuzBP27VtqNq9wdise49eEvdEAu%2FlZb2IQKp56PT12fHdWJO0VDefaElGmcy%2Boj%2F%2BkgG1dNsYzNvIwy6PLeE94gdOHXOnrXzh8%2FKVIBpBVyujJaJacZGh9wjJ%2F9pKy8HGZDmm9ECx%2Fh2FWAmlxqXtxWTPIbIGJrQ8UP1UxtFJDf8itXwHWsOCYrNpvyikWpdjQ2x1S47K2J5YqfbhNTAx14yFyvSnkaFXin8YXDaKfL2WULuv%2Fpr3sHW1c%2FIVcub4WdT0WGC%2F1KJ4iBJZ%2B50uIZtGh1cNU0yhdea60G5RR9mL8FdYPM%2FhSUfo6IzKZfLGOpmH0VVF9ZV8Qr75wcntukeKrodDroGh%2FfllM2bWknrRN4kPDQrkw%2BN2JvQY6pgE5zt%2B%2FD1hODIKfC7nJUFDSCwlA3pmFxLpt3n09OXOE0jfTpkamNZNARKsrgO%2FuzLI56fQnA61TMC3PhFH8lxK%2Fczd9uLiTuLwX%2B2gV2lOdtTNuEa2cRcclGxT7%2Ff4mld4ubyrDQ4JAWHQ9XJYWtsOoHxtO1GtSSLmtGRazdZ2uu8mxIiT6IZlFeU%2BHTqlP8r0KEXc02fpll4ljLt1gXBuZpItzSuRE&X-Amz-Signature=264d38fa46cedada9750448383d70fdf06ebfbdd1b00168108dc96635e68250f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRXVSX6O%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIAwK2SgG801hROIbDZC%2Fl5Ihy5iq%2FbeEZ6Y%2F%2Fz8kaZ77AiAQWferxW4aL38opNughqRMQ43ED4xlQHpes1UFsjAJqir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMPey5K6ZaO%2FAD9YQHKtwDsMxFkHvcVxUiDBRV6XcSD%2F2babcKsMmYHMGZV2GkdtveChvscuA4hWBMCdsEKKv6ucouKZbxdMWZACvpLgGeRQBe%2BhAa6Dl6rHagJqx99eUJ5W7HXoDCwCY9xY2hK4ZfTn8fV23XDed%2FTCIyE2SPdmQLOEfZEbqTvfwOPfOT70OLhdZNSEDImKVViufyC4SgW2h4GhY5zFUZZzors4xuTQcEhQuftwS06t3hlqEcVV0bBmG%2FPTGkjigL6MQheuRqHvaMjYEuzBP27VtqNq9wdise49eEvdEAu%2FlZb2IQKp56PT12fHdWJO0VDefaElGmcy%2Boj%2F%2BkgG1dNsYzNvIwy6PLeE94gdOHXOnrXzh8%2FKVIBpBVyujJaJacZGh9wjJ%2F9pKy8HGZDmm9ECx%2Fh2FWAmlxqXtxWTPIbIGJrQ8UP1UxtFJDf8itXwHWsOCYrNpvyikWpdjQ2x1S47K2J5YqfbhNTAx14yFyvSnkaFXin8YXDaKfL2WULuv%2Fpr3sHW1c%2FIVcub4WdT0WGC%2F1KJ4iBJZ%2B50uIZtGh1cNU0yhdea60G5RR9mL8FdYPM%2FhSUfo6IzKZfLGOpmH0VVF9ZV8Qr75wcntukeKrodDroGh%2FfllM2bWknrRN4kPDQrkw%2BN2JvQY6pgE5zt%2B%2FD1hODIKfC7nJUFDSCwlA3pmFxLpt3n09OXOE0jfTpkamNZNARKsrgO%2FuzLI56fQnA61TMC3PhFH8lxK%2Fczd9uLiTuLwX%2B2gV2lOdtTNuEa2cRcclGxT7%2Ff4mld4ubyrDQ4JAWHQ9XJYWtsOoHxtO1GtSSLmtGRazdZ2uu8mxIiT6IZlFeU%2BHTqlP8r0KEXc02fpll4ljLt1gXBuZpItzSuRE&X-Amz-Signature=e9d1a818270302ec287a6bffa0c66d0716619edc1160f4e9cf3e02c86c93f453&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRXVSX6O%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIAwK2SgG801hROIbDZC%2Fl5Ihy5iq%2FbeEZ6Y%2F%2Fz8kaZ77AiAQWferxW4aL38opNughqRMQ43ED4xlQHpes1UFsjAJqir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMPey5K6ZaO%2FAD9YQHKtwDsMxFkHvcVxUiDBRV6XcSD%2F2babcKsMmYHMGZV2GkdtveChvscuA4hWBMCdsEKKv6ucouKZbxdMWZACvpLgGeRQBe%2BhAa6Dl6rHagJqx99eUJ5W7HXoDCwCY9xY2hK4ZfTn8fV23XDed%2FTCIyE2SPdmQLOEfZEbqTvfwOPfOT70OLhdZNSEDImKVViufyC4SgW2h4GhY5zFUZZzors4xuTQcEhQuftwS06t3hlqEcVV0bBmG%2FPTGkjigL6MQheuRqHvaMjYEuzBP27VtqNq9wdise49eEvdEAu%2FlZb2IQKp56PT12fHdWJO0VDefaElGmcy%2Boj%2F%2BkgG1dNsYzNvIwy6PLeE94gdOHXOnrXzh8%2FKVIBpBVyujJaJacZGh9wjJ%2F9pKy8HGZDmm9ECx%2Fh2FWAmlxqXtxWTPIbIGJrQ8UP1UxtFJDf8itXwHWsOCYrNpvyikWpdjQ2x1S47K2J5YqfbhNTAx14yFyvSnkaFXin8YXDaKfL2WULuv%2Fpr3sHW1c%2FIVcub4WdT0WGC%2F1KJ4iBJZ%2B50uIZtGh1cNU0yhdea60G5RR9mL8FdYPM%2FhSUfo6IzKZfLGOpmH0VVF9ZV8Qr75wcntukeKrodDroGh%2FfllM2bWknrRN4kPDQrkw%2BN2JvQY6pgE5zt%2B%2FD1hODIKfC7nJUFDSCwlA3pmFxLpt3n09OXOE0jfTpkamNZNARKsrgO%2FuzLI56fQnA61TMC3PhFH8lxK%2Fczd9uLiTuLwX%2B2gV2lOdtTNuEa2cRcclGxT7%2Ff4mld4ubyrDQ4JAWHQ9XJYWtsOoHxtO1GtSSLmtGRazdZ2uu8mxIiT6IZlFeU%2BHTqlP8r0KEXc02fpll4ljLt1gXBuZpItzSuRE&X-Amz-Signature=f9b37a18079304f127fa8b220e118b1e86fd0665f875bf79b97c73888ab28c79&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRXVSX6O%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIAwK2SgG801hROIbDZC%2Fl5Ihy5iq%2FbeEZ6Y%2F%2Fz8kaZ77AiAQWferxW4aL38opNughqRMQ43ED4xlQHpes1UFsjAJqir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMPey5K6ZaO%2FAD9YQHKtwDsMxFkHvcVxUiDBRV6XcSD%2F2babcKsMmYHMGZV2GkdtveChvscuA4hWBMCdsEKKv6ucouKZbxdMWZACvpLgGeRQBe%2BhAa6Dl6rHagJqx99eUJ5W7HXoDCwCY9xY2hK4ZfTn8fV23XDed%2FTCIyE2SPdmQLOEfZEbqTvfwOPfOT70OLhdZNSEDImKVViufyC4SgW2h4GhY5zFUZZzors4xuTQcEhQuftwS06t3hlqEcVV0bBmG%2FPTGkjigL6MQheuRqHvaMjYEuzBP27VtqNq9wdise49eEvdEAu%2FlZb2IQKp56PT12fHdWJO0VDefaElGmcy%2Boj%2F%2BkgG1dNsYzNvIwy6PLeE94gdOHXOnrXzh8%2FKVIBpBVyujJaJacZGh9wjJ%2F9pKy8HGZDmm9ECx%2Fh2FWAmlxqXtxWTPIbIGJrQ8UP1UxtFJDf8itXwHWsOCYrNpvyikWpdjQ2x1S47K2J5YqfbhNTAx14yFyvSnkaFXin8YXDaKfL2WULuv%2Fpr3sHW1c%2FIVcub4WdT0WGC%2F1KJ4iBJZ%2B50uIZtGh1cNU0yhdea60G5RR9mL8FdYPM%2FhSUfo6IzKZfLGOpmH0VVF9ZV8Qr75wcntukeKrodDroGh%2FfllM2bWknrRN4kPDQrkw%2BN2JvQY6pgE5zt%2B%2FD1hODIKfC7nJUFDSCwlA3pmFxLpt3n09OXOE0jfTpkamNZNARKsrgO%2FuzLI56fQnA61TMC3PhFH8lxK%2Fczd9uLiTuLwX%2B2gV2lOdtTNuEa2cRcclGxT7%2Ff4mld4ubyrDQ4JAWHQ9XJYWtsOoHxtO1GtSSLmtGRazdZ2uu8mxIiT6IZlFeU%2BHTqlP8r0KEXc02fpll4ljLt1gXBuZpItzSuRE&X-Amz-Signature=aaedbdca218b8a6816e917d2ecd7f2c7dd13ffce9fbdc752d7e2bce28473f7cf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRXVSX6O%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIAwK2SgG801hROIbDZC%2Fl5Ihy5iq%2FbeEZ6Y%2F%2Fz8kaZ77AiAQWferxW4aL38opNughqRMQ43ED4xlQHpes1UFsjAJqir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMPey5K6ZaO%2FAD9YQHKtwDsMxFkHvcVxUiDBRV6XcSD%2F2babcKsMmYHMGZV2GkdtveChvscuA4hWBMCdsEKKv6ucouKZbxdMWZACvpLgGeRQBe%2BhAa6Dl6rHagJqx99eUJ5W7HXoDCwCY9xY2hK4ZfTn8fV23XDed%2FTCIyE2SPdmQLOEfZEbqTvfwOPfOT70OLhdZNSEDImKVViufyC4SgW2h4GhY5zFUZZzors4xuTQcEhQuftwS06t3hlqEcVV0bBmG%2FPTGkjigL6MQheuRqHvaMjYEuzBP27VtqNq9wdise49eEvdEAu%2FlZb2IQKp56PT12fHdWJO0VDefaElGmcy%2Boj%2F%2BkgG1dNsYzNvIwy6PLeE94gdOHXOnrXzh8%2FKVIBpBVyujJaJacZGh9wjJ%2F9pKy8HGZDmm9ECx%2Fh2FWAmlxqXtxWTPIbIGJrQ8UP1UxtFJDf8itXwHWsOCYrNpvyikWpdjQ2x1S47K2J5YqfbhNTAx14yFyvSnkaFXin8YXDaKfL2WULuv%2Fpr3sHW1c%2FIVcub4WdT0WGC%2F1KJ4iBJZ%2B50uIZtGh1cNU0yhdea60G5RR9mL8FdYPM%2FhSUfo6IzKZfLGOpmH0VVF9ZV8Qr75wcntukeKrodDroGh%2FfllM2bWknrRN4kPDQrkw%2BN2JvQY6pgE5zt%2B%2FD1hODIKfC7nJUFDSCwlA3pmFxLpt3n09OXOE0jfTpkamNZNARKsrgO%2FuzLI56fQnA61TMC3PhFH8lxK%2Fczd9uLiTuLwX%2B2gV2lOdtTNuEa2cRcclGxT7%2Ff4mld4ubyrDQ4JAWHQ9XJYWtsOoHxtO1GtSSLmtGRazdZ2uu8mxIiT6IZlFeU%2BHTqlP8r0KEXc02fpll4ljLt1gXBuZpItzSuRE&X-Amz-Signature=6177f8dd8003a93d04d5713f7b32fdde14b6b904e5397eb90cc0d009640651da&X-Amz-SignedHeaders=host&x-id=GetObject)
