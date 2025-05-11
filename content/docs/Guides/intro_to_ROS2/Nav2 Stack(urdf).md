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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4QY6HYD%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDWim56wsqG%2FvCotqwUG3jM0l3fxEpyLJse4qs2bXx7BQIhAMqr%2BISIZa4E76j8gxpgC0p3XVv3a6byoE2zVyYiHDVQKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwr3rU1nQ1M%2B59D%2BlIq3APurKJoJeafztyykqq8IgeQz2CK81z5gzRCOLPybfUUYTRUOiuaY5jbJOf6YGUVIp5O0SzByQT9oDV7kJCgK6IQl0yPWY1Il9GetNcVAgXOKE9Ql8IiMsqiZs93FI6OTixHTE6of5m4xoDg7pgkMVKgTjQTL1Il9%2F7tt7VHanCk%2BaB9feUzk5Sh0dvypuC4ZbCymP58WSmQlsbgey9UH9eoZJNhTbrcA3GZgG5ChmZv5BmD4bExv6lyxY5nVm%2FoxYOk7p2Jyl0Pnmr%2BcCNHVDGqELWYARAW7skx8y845W4S%2BrTpN0lJGwKOFnWTs0weMh1%2FsJiCsGPOqpnAijA4M6w5poSMUSMU%2FnTc9sbtDY5j%2Fiy8Zk2gbcsxSrTWApUgJrrkCGMWN2v%2FWysQ%2BgvJPFFOwo7xOu1IDNpNKmP7%2F0rGrOyQRW%2Fv8aSnMEYsWyN%2BEWdJBxeD9YkOhib98LTaZvPPzPaC2VR0mXC%2BbbaqWsBw5SFsdSUEK5KYgSe6RcYIXDB98CFXZd9YaGLE5uITLlbBdrE6MyqTxBTMiN7K4Ucsw0gy9nVULZG3%2FpgiVypqhDtb6ytSYfmfI4FnKQf%2BexZ8627SDBncuiSNlpPffysl2jekMwzBxIuH7P8u2TDgoYPBBjqkAQgEsvBkTBU5YTqkLhoYizpt40HrhHCDhjyhGhBSSvatrVUWPH89DZTRmUjDcN3H1H0GvQ5Fvne8lnbs3UsmY1MAbX%2BjlMHnD5ipOGkTVMnaQU%2F0YfhOhVAPESZcIodqBUpWdZYf9YjMfqbBqlfW14%2BqaKEp06irEYseChSQuThebJ02C%2FxUfuRV%2Bo5lL2l6S2UXD4tJwsfdEWbhDB%2Ft7rmoODZd&X-Amz-Signature=d1c3745a2e335a102d55715f1901fa773fd7e94c3abac5e06e8113b2ee6e7646&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4QY6HYD%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDWim56wsqG%2FvCotqwUG3jM0l3fxEpyLJse4qs2bXx7BQIhAMqr%2BISIZa4E76j8gxpgC0p3XVv3a6byoE2zVyYiHDVQKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwr3rU1nQ1M%2B59D%2BlIq3APurKJoJeafztyykqq8IgeQz2CK81z5gzRCOLPybfUUYTRUOiuaY5jbJOf6YGUVIp5O0SzByQT9oDV7kJCgK6IQl0yPWY1Il9GetNcVAgXOKE9Ql8IiMsqiZs93FI6OTixHTE6of5m4xoDg7pgkMVKgTjQTL1Il9%2F7tt7VHanCk%2BaB9feUzk5Sh0dvypuC4ZbCymP58WSmQlsbgey9UH9eoZJNhTbrcA3GZgG5ChmZv5BmD4bExv6lyxY5nVm%2FoxYOk7p2Jyl0Pnmr%2BcCNHVDGqELWYARAW7skx8y845W4S%2BrTpN0lJGwKOFnWTs0weMh1%2FsJiCsGPOqpnAijA4M6w5poSMUSMU%2FnTc9sbtDY5j%2Fiy8Zk2gbcsxSrTWApUgJrrkCGMWN2v%2FWysQ%2BgvJPFFOwo7xOu1IDNpNKmP7%2F0rGrOyQRW%2Fv8aSnMEYsWyN%2BEWdJBxeD9YkOhib98LTaZvPPzPaC2VR0mXC%2BbbaqWsBw5SFsdSUEK5KYgSe6RcYIXDB98CFXZd9YaGLE5uITLlbBdrE6MyqTxBTMiN7K4Ucsw0gy9nVULZG3%2FpgiVypqhDtb6ytSYfmfI4FnKQf%2BexZ8627SDBncuiSNlpPffysl2jekMwzBxIuH7P8u2TDgoYPBBjqkAQgEsvBkTBU5YTqkLhoYizpt40HrhHCDhjyhGhBSSvatrVUWPH89DZTRmUjDcN3H1H0GvQ5Fvne8lnbs3UsmY1MAbX%2BjlMHnD5ipOGkTVMnaQU%2F0YfhOhVAPESZcIodqBUpWdZYf9YjMfqbBqlfW14%2BqaKEp06irEYseChSQuThebJ02C%2FxUfuRV%2Bo5lL2l6S2UXD4tJwsfdEWbhDB%2Ft7rmoODZd&X-Amz-Signature=00e1da3901a76a6dd4124fc7834b7f306a469d179cafaebc97dc314be69d7601&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4QY6HYD%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDWim56wsqG%2FvCotqwUG3jM0l3fxEpyLJse4qs2bXx7BQIhAMqr%2BISIZa4E76j8gxpgC0p3XVv3a6byoE2zVyYiHDVQKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwr3rU1nQ1M%2B59D%2BlIq3APurKJoJeafztyykqq8IgeQz2CK81z5gzRCOLPybfUUYTRUOiuaY5jbJOf6YGUVIp5O0SzByQT9oDV7kJCgK6IQl0yPWY1Il9GetNcVAgXOKE9Ql8IiMsqiZs93FI6OTixHTE6of5m4xoDg7pgkMVKgTjQTL1Il9%2F7tt7VHanCk%2BaB9feUzk5Sh0dvypuC4ZbCymP58WSmQlsbgey9UH9eoZJNhTbrcA3GZgG5ChmZv5BmD4bExv6lyxY5nVm%2FoxYOk7p2Jyl0Pnmr%2BcCNHVDGqELWYARAW7skx8y845W4S%2BrTpN0lJGwKOFnWTs0weMh1%2FsJiCsGPOqpnAijA4M6w5poSMUSMU%2FnTc9sbtDY5j%2Fiy8Zk2gbcsxSrTWApUgJrrkCGMWN2v%2FWysQ%2BgvJPFFOwo7xOu1IDNpNKmP7%2F0rGrOyQRW%2Fv8aSnMEYsWyN%2BEWdJBxeD9YkOhib98LTaZvPPzPaC2VR0mXC%2BbbaqWsBw5SFsdSUEK5KYgSe6RcYIXDB98CFXZd9YaGLE5uITLlbBdrE6MyqTxBTMiN7K4Ucsw0gy9nVULZG3%2FpgiVypqhDtb6ytSYfmfI4FnKQf%2BexZ8627SDBncuiSNlpPffysl2jekMwzBxIuH7P8u2TDgoYPBBjqkAQgEsvBkTBU5YTqkLhoYizpt40HrhHCDhjyhGhBSSvatrVUWPH89DZTRmUjDcN3H1H0GvQ5Fvne8lnbs3UsmY1MAbX%2BjlMHnD5ipOGkTVMnaQU%2F0YfhOhVAPESZcIodqBUpWdZYf9YjMfqbBqlfW14%2BqaKEp06irEYseChSQuThebJ02C%2FxUfuRV%2Bo5lL2l6S2UXD4tJwsfdEWbhDB%2Ft7rmoODZd&X-Amz-Signature=eac0f96b4f71140d7f765e6a736b622d950bc09598058bd7ee8a06658594ed2a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4QY6HYD%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDWim56wsqG%2FvCotqwUG3jM0l3fxEpyLJse4qs2bXx7BQIhAMqr%2BISIZa4E76j8gxpgC0p3XVv3a6byoE2zVyYiHDVQKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwr3rU1nQ1M%2B59D%2BlIq3APurKJoJeafztyykqq8IgeQz2CK81z5gzRCOLPybfUUYTRUOiuaY5jbJOf6YGUVIp5O0SzByQT9oDV7kJCgK6IQl0yPWY1Il9GetNcVAgXOKE9Ql8IiMsqiZs93FI6OTixHTE6of5m4xoDg7pgkMVKgTjQTL1Il9%2F7tt7VHanCk%2BaB9feUzk5Sh0dvypuC4ZbCymP58WSmQlsbgey9UH9eoZJNhTbrcA3GZgG5ChmZv5BmD4bExv6lyxY5nVm%2FoxYOk7p2Jyl0Pnmr%2BcCNHVDGqELWYARAW7skx8y845W4S%2BrTpN0lJGwKOFnWTs0weMh1%2FsJiCsGPOqpnAijA4M6w5poSMUSMU%2FnTc9sbtDY5j%2Fiy8Zk2gbcsxSrTWApUgJrrkCGMWN2v%2FWysQ%2BgvJPFFOwo7xOu1IDNpNKmP7%2F0rGrOyQRW%2Fv8aSnMEYsWyN%2BEWdJBxeD9YkOhib98LTaZvPPzPaC2VR0mXC%2BbbaqWsBw5SFsdSUEK5KYgSe6RcYIXDB98CFXZd9YaGLE5uITLlbBdrE6MyqTxBTMiN7K4Ucsw0gy9nVULZG3%2FpgiVypqhDtb6ytSYfmfI4FnKQf%2BexZ8627SDBncuiSNlpPffysl2jekMwzBxIuH7P8u2TDgoYPBBjqkAQgEsvBkTBU5YTqkLhoYizpt40HrhHCDhjyhGhBSSvatrVUWPH89DZTRmUjDcN3H1H0GvQ5Fvne8lnbs3UsmY1MAbX%2BjlMHnD5ipOGkTVMnaQU%2F0YfhOhVAPESZcIodqBUpWdZYf9YjMfqbBqlfW14%2BqaKEp06irEYseChSQuThebJ02C%2FxUfuRV%2Bo5lL2l6S2UXD4tJwsfdEWbhDB%2Ft7rmoODZd&X-Amz-Signature=261297515fa1aa173a63b7ce90b317e188cdfed2b681385269ead99b558c835e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4QY6HYD%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDWim56wsqG%2FvCotqwUG3jM0l3fxEpyLJse4qs2bXx7BQIhAMqr%2BISIZa4E76j8gxpgC0p3XVv3a6byoE2zVyYiHDVQKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwr3rU1nQ1M%2B59D%2BlIq3APurKJoJeafztyykqq8IgeQz2CK81z5gzRCOLPybfUUYTRUOiuaY5jbJOf6YGUVIp5O0SzByQT9oDV7kJCgK6IQl0yPWY1Il9GetNcVAgXOKE9Ql8IiMsqiZs93FI6OTixHTE6of5m4xoDg7pgkMVKgTjQTL1Il9%2F7tt7VHanCk%2BaB9feUzk5Sh0dvypuC4ZbCymP58WSmQlsbgey9UH9eoZJNhTbrcA3GZgG5ChmZv5BmD4bExv6lyxY5nVm%2FoxYOk7p2Jyl0Pnmr%2BcCNHVDGqELWYARAW7skx8y845W4S%2BrTpN0lJGwKOFnWTs0weMh1%2FsJiCsGPOqpnAijA4M6w5poSMUSMU%2FnTc9sbtDY5j%2Fiy8Zk2gbcsxSrTWApUgJrrkCGMWN2v%2FWysQ%2BgvJPFFOwo7xOu1IDNpNKmP7%2F0rGrOyQRW%2Fv8aSnMEYsWyN%2BEWdJBxeD9YkOhib98LTaZvPPzPaC2VR0mXC%2BbbaqWsBw5SFsdSUEK5KYgSe6RcYIXDB98CFXZd9YaGLE5uITLlbBdrE6MyqTxBTMiN7K4Ucsw0gy9nVULZG3%2FpgiVypqhDtb6ytSYfmfI4FnKQf%2BexZ8627SDBncuiSNlpPffysl2jekMwzBxIuH7P8u2TDgoYPBBjqkAQgEsvBkTBU5YTqkLhoYizpt40HrhHCDhjyhGhBSSvatrVUWPH89DZTRmUjDcN3H1H0GvQ5Fvne8lnbs3UsmY1MAbX%2BjlMHnD5ipOGkTVMnaQU%2F0YfhOhVAPESZcIodqBUpWdZYf9YjMfqbBqlfW14%2BqaKEp06irEYseChSQuThebJ02C%2FxUfuRV%2Bo5lL2l6S2UXD4tJwsfdEWbhDB%2Ft7rmoODZd&X-Amz-Signature=189e0b20595b44b8bb91228223ad5f222e1ce7bba84b00f4c547bdb82aefaf97&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4QY6HYD%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDWim56wsqG%2FvCotqwUG3jM0l3fxEpyLJse4qs2bXx7BQIhAMqr%2BISIZa4E76j8gxpgC0p3XVv3a6byoE2zVyYiHDVQKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwr3rU1nQ1M%2B59D%2BlIq3APurKJoJeafztyykqq8IgeQz2CK81z5gzRCOLPybfUUYTRUOiuaY5jbJOf6YGUVIp5O0SzByQT9oDV7kJCgK6IQl0yPWY1Il9GetNcVAgXOKE9Ql8IiMsqiZs93FI6OTixHTE6of5m4xoDg7pgkMVKgTjQTL1Il9%2F7tt7VHanCk%2BaB9feUzk5Sh0dvypuC4ZbCymP58WSmQlsbgey9UH9eoZJNhTbrcA3GZgG5ChmZv5BmD4bExv6lyxY5nVm%2FoxYOk7p2Jyl0Pnmr%2BcCNHVDGqELWYARAW7skx8y845W4S%2BrTpN0lJGwKOFnWTs0weMh1%2FsJiCsGPOqpnAijA4M6w5poSMUSMU%2FnTc9sbtDY5j%2Fiy8Zk2gbcsxSrTWApUgJrrkCGMWN2v%2FWysQ%2BgvJPFFOwo7xOu1IDNpNKmP7%2F0rGrOyQRW%2Fv8aSnMEYsWyN%2BEWdJBxeD9YkOhib98LTaZvPPzPaC2VR0mXC%2BbbaqWsBw5SFsdSUEK5KYgSe6RcYIXDB98CFXZd9YaGLE5uITLlbBdrE6MyqTxBTMiN7K4Ucsw0gy9nVULZG3%2FpgiVypqhDtb6ytSYfmfI4FnKQf%2BexZ8627SDBncuiSNlpPffysl2jekMwzBxIuH7P8u2TDgoYPBBjqkAQgEsvBkTBU5YTqkLhoYizpt40HrhHCDhjyhGhBSSvatrVUWPH89DZTRmUjDcN3H1H0GvQ5Fvne8lnbs3UsmY1MAbX%2BjlMHnD5ipOGkTVMnaQU%2F0YfhOhVAPESZcIodqBUpWdZYf9YjMfqbBqlfW14%2BqaKEp06irEYseChSQuThebJ02C%2FxUfuRV%2Bo5lL2l6S2UXD4tJwsfdEWbhDB%2Ft7rmoODZd&X-Amz-Signature=729aca7a340f569d1a37916128c463cfa8034b2a74657f4b08a7cdb1c320d54f&X-Amz-SignedHeaders=host&x-id=GetObject)
