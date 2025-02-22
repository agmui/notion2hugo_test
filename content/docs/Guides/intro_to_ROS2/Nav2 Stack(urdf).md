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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROXWVUKE%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6hZ%2FFcgmxyVlIzgccmiioFbEKUXgbvcaTkZnsk1hXKAiEA97GBdxXIJo8eJOzNxd0ePbr5ZpQ65fbaZLLHr4fpgAIqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeQlK6F7khDFAyYwyrcAyh2K3FJsKyESis8pfquQ2dNemQ2qXg0Ve5Tvg2ALpglHEfsjIA3pdi3et8%2BGTD%2BAR%2B5gECFmk9G6rUmSxp1agt3OnjKJx1dBV866El%2F9x%2Fu2DXdBKEPyb5Jb7VIEpjq9PKSgB2uyXCdDyt%2F8XuNPurfaOxyp34YacNy6u4t0tJm9PD%2BGTpmzi68TxXGb4lrtrBT9fJDSMAoTgk9q9jxdxRqcCOL4%2B%2B3IuqK8pjJNqRjJtEbfnYZ4tiU2ylUBDq%2F629ATMk9S5W%2BcxRBOwFm8IANL7xmDJWhe1kT0KHdwPjYBHKDlv5hkinYzo%2FLeM1n9jNQi5f7jxZ%2FMRjtxAx5Eaa0%2FaVnC7HDdna3Zom6iOOkCJ3ZA59C0skUcztOjXm1w3zXmNceg6D%2FWneRYEz4yDSPtstmSqP9T5hIczh0AzhkV54%2BxyX4HvZOhf3PGgb5hKdnM4In0wVg9wx%2BsuVLdkctj2j3V2SVZM6DurRtZDiNV%2B%2FR5V1uFAzmVrMsyIeh3flKf8mLyFB3FZt3XaBH9YBrSTN%2FlO850n4iDgotroO71NNAPgpTrZtLA%2BWHjoNupZ1OExktbQySg2FpgsD2U%2BMjACIJwOalQkq5xga3Ewd40IPFoyBFPWLMsZT7MNGY6L0GOqUBfZB3PT0kJaap3nOxz8h9QX21k%2FKNQ6kt1vGO9il3dgvQyJYcf5XL%2Ba61FsPXftSeGPykDu3lGMvVVmb3NKOCPLAeTFid4p9dHydaCnUNDGyPor6DOOBOemTMlcOshowdzk6KeWTD054Fgzly9N8OjgQzbz%2FpUR%2FcmcWjHcBoFDamrYjXJRqPo1bUzzgx92%2FDc3N7XYi7uCMXZ5e6gae0WUfESr7A&X-Amz-Signature=ed723b27146c8a9cd0057c230d7a50dcce6541fe7b654e33e0239441ad54b73d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROXWVUKE%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6hZ%2FFcgmxyVlIzgccmiioFbEKUXgbvcaTkZnsk1hXKAiEA97GBdxXIJo8eJOzNxd0ePbr5ZpQ65fbaZLLHr4fpgAIqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeQlK6F7khDFAyYwyrcAyh2K3FJsKyESis8pfquQ2dNemQ2qXg0Ve5Tvg2ALpglHEfsjIA3pdi3et8%2BGTD%2BAR%2B5gECFmk9G6rUmSxp1agt3OnjKJx1dBV866El%2F9x%2Fu2DXdBKEPyb5Jb7VIEpjq9PKSgB2uyXCdDyt%2F8XuNPurfaOxyp34YacNy6u4t0tJm9PD%2BGTpmzi68TxXGb4lrtrBT9fJDSMAoTgk9q9jxdxRqcCOL4%2B%2B3IuqK8pjJNqRjJtEbfnYZ4tiU2ylUBDq%2F629ATMk9S5W%2BcxRBOwFm8IANL7xmDJWhe1kT0KHdwPjYBHKDlv5hkinYzo%2FLeM1n9jNQi5f7jxZ%2FMRjtxAx5Eaa0%2FaVnC7HDdna3Zom6iOOkCJ3ZA59C0skUcztOjXm1w3zXmNceg6D%2FWneRYEz4yDSPtstmSqP9T5hIczh0AzhkV54%2BxyX4HvZOhf3PGgb5hKdnM4In0wVg9wx%2BsuVLdkctj2j3V2SVZM6DurRtZDiNV%2B%2FR5V1uFAzmVrMsyIeh3flKf8mLyFB3FZt3XaBH9YBrSTN%2FlO850n4iDgotroO71NNAPgpTrZtLA%2BWHjoNupZ1OExktbQySg2FpgsD2U%2BMjACIJwOalQkq5xga3Ewd40IPFoyBFPWLMsZT7MNGY6L0GOqUBfZB3PT0kJaap3nOxz8h9QX21k%2FKNQ6kt1vGO9il3dgvQyJYcf5XL%2Ba61FsPXftSeGPykDu3lGMvVVmb3NKOCPLAeTFid4p9dHydaCnUNDGyPor6DOOBOemTMlcOshowdzk6KeWTD054Fgzly9N8OjgQzbz%2FpUR%2FcmcWjHcBoFDamrYjXJRqPo1bUzzgx92%2FDc3N7XYi7uCMXZ5e6gae0WUfESr7A&X-Amz-Signature=2eb25f6916c6c2a2e3586f4cf912b58fbb7cae38c03ca922a92e416f15f4ae34&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROXWVUKE%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6hZ%2FFcgmxyVlIzgccmiioFbEKUXgbvcaTkZnsk1hXKAiEA97GBdxXIJo8eJOzNxd0ePbr5ZpQ65fbaZLLHr4fpgAIqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeQlK6F7khDFAyYwyrcAyh2K3FJsKyESis8pfquQ2dNemQ2qXg0Ve5Tvg2ALpglHEfsjIA3pdi3et8%2BGTD%2BAR%2B5gECFmk9G6rUmSxp1agt3OnjKJx1dBV866El%2F9x%2Fu2DXdBKEPyb5Jb7VIEpjq9PKSgB2uyXCdDyt%2F8XuNPurfaOxyp34YacNy6u4t0tJm9PD%2BGTpmzi68TxXGb4lrtrBT9fJDSMAoTgk9q9jxdxRqcCOL4%2B%2B3IuqK8pjJNqRjJtEbfnYZ4tiU2ylUBDq%2F629ATMk9S5W%2BcxRBOwFm8IANL7xmDJWhe1kT0KHdwPjYBHKDlv5hkinYzo%2FLeM1n9jNQi5f7jxZ%2FMRjtxAx5Eaa0%2FaVnC7HDdna3Zom6iOOkCJ3ZA59C0skUcztOjXm1w3zXmNceg6D%2FWneRYEz4yDSPtstmSqP9T5hIczh0AzhkV54%2BxyX4HvZOhf3PGgb5hKdnM4In0wVg9wx%2BsuVLdkctj2j3V2SVZM6DurRtZDiNV%2B%2FR5V1uFAzmVrMsyIeh3flKf8mLyFB3FZt3XaBH9YBrSTN%2FlO850n4iDgotroO71NNAPgpTrZtLA%2BWHjoNupZ1OExktbQySg2FpgsD2U%2BMjACIJwOalQkq5xga3Ewd40IPFoyBFPWLMsZT7MNGY6L0GOqUBfZB3PT0kJaap3nOxz8h9QX21k%2FKNQ6kt1vGO9il3dgvQyJYcf5XL%2Ba61FsPXftSeGPykDu3lGMvVVmb3NKOCPLAeTFid4p9dHydaCnUNDGyPor6DOOBOemTMlcOshowdzk6KeWTD054Fgzly9N8OjgQzbz%2FpUR%2FcmcWjHcBoFDamrYjXJRqPo1bUzzgx92%2FDc3N7XYi7uCMXZ5e6gae0WUfESr7A&X-Amz-Signature=1d48c73768519fc97c62302177bbd0540e271e72c4ccae97278143cc0ffd1d44&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROXWVUKE%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6hZ%2FFcgmxyVlIzgccmiioFbEKUXgbvcaTkZnsk1hXKAiEA97GBdxXIJo8eJOzNxd0ePbr5ZpQ65fbaZLLHr4fpgAIqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeQlK6F7khDFAyYwyrcAyh2K3FJsKyESis8pfquQ2dNemQ2qXg0Ve5Tvg2ALpglHEfsjIA3pdi3et8%2BGTD%2BAR%2B5gECFmk9G6rUmSxp1agt3OnjKJx1dBV866El%2F9x%2Fu2DXdBKEPyb5Jb7VIEpjq9PKSgB2uyXCdDyt%2F8XuNPurfaOxyp34YacNy6u4t0tJm9PD%2BGTpmzi68TxXGb4lrtrBT9fJDSMAoTgk9q9jxdxRqcCOL4%2B%2B3IuqK8pjJNqRjJtEbfnYZ4tiU2ylUBDq%2F629ATMk9S5W%2BcxRBOwFm8IANL7xmDJWhe1kT0KHdwPjYBHKDlv5hkinYzo%2FLeM1n9jNQi5f7jxZ%2FMRjtxAx5Eaa0%2FaVnC7HDdna3Zom6iOOkCJ3ZA59C0skUcztOjXm1w3zXmNceg6D%2FWneRYEz4yDSPtstmSqP9T5hIczh0AzhkV54%2BxyX4HvZOhf3PGgb5hKdnM4In0wVg9wx%2BsuVLdkctj2j3V2SVZM6DurRtZDiNV%2B%2FR5V1uFAzmVrMsyIeh3flKf8mLyFB3FZt3XaBH9YBrSTN%2FlO850n4iDgotroO71NNAPgpTrZtLA%2BWHjoNupZ1OExktbQySg2FpgsD2U%2BMjACIJwOalQkq5xga3Ewd40IPFoyBFPWLMsZT7MNGY6L0GOqUBfZB3PT0kJaap3nOxz8h9QX21k%2FKNQ6kt1vGO9il3dgvQyJYcf5XL%2Ba61FsPXftSeGPykDu3lGMvVVmb3NKOCPLAeTFid4p9dHydaCnUNDGyPor6DOOBOemTMlcOshowdzk6KeWTD054Fgzly9N8OjgQzbz%2FpUR%2FcmcWjHcBoFDamrYjXJRqPo1bUzzgx92%2FDc3N7XYi7uCMXZ5e6gae0WUfESr7A&X-Amz-Signature=1f4c52e3abe7be4a02cc4b8bd4a3f5b03bb32aa061ad9db0df3435bc282d5299&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROXWVUKE%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6hZ%2FFcgmxyVlIzgccmiioFbEKUXgbvcaTkZnsk1hXKAiEA97GBdxXIJo8eJOzNxd0ePbr5ZpQ65fbaZLLHr4fpgAIqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeQlK6F7khDFAyYwyrcAyh2K3FJsKyESis8pfquQ2dNemQ2qXg0Ve5Tvg2ALpglHEfsjIA3pdi3et8%2BGTD%2BAR%2B5gECFmk9G6rUmSxp1agt3OnjKJx1dBV866El%2F9x%2Fu2DXdBKEPyb5Jb7VIEpjq9PKSgB2uyXCdDyt%2F8XuNPurfaOxyp34YacNy6u4t0tJm9PD%2BGTpmzi68TxXGb4lrtrBT9fJDSMAoTgk9q9jxdxRqcCOL4%2B%2B3IuqK8pjJNqRjJtEbfnYZ4tiU2ylUBDq%2F629ATMk9S5W%2BcxRBOwFm8IANL7xmDJWhe1kT0KHdwPjYBHKDlv5hkinYzo%2FLeM1n9jNQi5f7jxZ%2FMRjtxAx5Eaa0%2FaVnC7HDdna3Zom6iOOkCJ3ZA59C0skUcztOjXm1w3zXmNceg6D%2FWneRYEz4yDSPtstmSqP9T5hIczh0AzhkV54%2BxyX4HvZOhf3PGgb5hKdnM4In0wVg9wx%2BsuVLdkctj2j3V2SVZM6DurRtZDiNV%2B%2FR5V1uFAzmVrMsyIeh3flKf8mLyFB3FZt3XaBH9YBrSTN%2FlO850n4iDgotroO71NNAPgpTrZtLA%2BWHjoNupZ1OExktbQySg2FpgsD2U%2BMjACIJwOalQkq5xga3Ewd40IPFoyBFPWLMsZT7MNGY6L0GOqUBfZB3PT0kJaap3nOxz8h9QX21k%2FKNQ6kt1vGO9il3dgvQyJYcf5XL%2Ba61FsPXftSeGPykDu3lGMvVVmb3NKOCPLAeTFid4p9dHydaCnUNDGyPor6DOOBOemTMlcOshowdzk6KeWTD054Fgzly9N8OjgQzbz%2FpUR%2FcmcWjHcBoFDamrYjXJRqPo1bUzzgx92%2FDc3N7XYi7uCMXZ5e6gae0WUfESr7A&X-Amz-Signature=951297535443b8dc861747b068bcf755f47266f0651515011e280c9156ffbcca&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROXWVUKE%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6hZ%2FFcgmxyVlIzgccmiioFbEKUXgbvcaTkZnsk1hXKAiEA97GBdxXIJo8eJOzNxd0ePbr5ZpQ65fbaZLLHr4fpgAIqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeQlK6F7khDFAyYwyrcAyh2K3FJsKyESis8pfquQ2dNemQ2qXg0Ve5Tvg2ALpglHEfsjIA3pdi3et8%2BGTD%2BAR%2B5gECFmk9G6rUmSxp1agt3OnjKJx1dBV866El%2F9x%2Fu2DXdBKEPyb5Jb7VIEpjq9PKSgB2uyXCdDyt%2F8XuNPurfaOxyp34YacNy6u4t0tJm9PD%2BGTpmzi68TxXGb4lrtrBT9fJDSMAoTgk9q9jxdxRqcCOL4%2B%2B3IuqK8pjJNqRjJtEbfnYZ4tiU2ylUBDq%2F629ATMk9S5W%2BcxRBOwFm8IANL7xmDJWhe1kT0KHdwPjYBHKDlv5hkinYzo%2FLeM1n9jNQi5f7jxZ%2FMRjtxAx5Eaa0%2FaVnC7HDdna3Zom6iOOkCJ3ZA59C0skUcztOjXm1w3zXmNceg6D%2FWneRYEz4yDSPtstmSqP9T5hIczh0AzhkV54%2BxyX4HvZOhf3PGgb5hKdnM4In0wVg9wx%2BsuVLdkctj2j3V2SVZM6DurRtZDiNV%2B%2FR5V1uFAzmVrMsyIeh3flKf8mLyFB3FZt3XaBH9YBrSTN%2FlO850n4iDgotroO71NNAPgpTrZtLA%2BWHjoNupZ1OExktbQySg2FpgsD2U%2BMjACIJwOalQkq5xga3Ewd40IPFoyBFPWLMsZT7MNGY6L0GOqUBfZB3PT0kJaap3nOxz8h9QX21k%2FKNQ6kt1vGO9il3dgvQyJYcf5XL%2Ba61FsPXftSeGPykDu3lGMvVVmb3NKOCPLAeTFid4p9dHydaCnUNDGyPor6DOOBOemTMlcOshowdzk6KeWTD054Fgzly9N8OjgQzbz%2FpUR%2FcmcWjHcBoFDamrYjXJRqPo1bUzzgx92%2FDc3N7XYi7uCMXZ5e6gae0WUfESr7A&X-Amz-Signature=f67f5ff659879596567ceac813d7648661a77a747c4c6945c53ad13dfe90d6aa&X-Amz-SignedHeaders=host&x-id=GetObject)
