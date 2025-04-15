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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCI3HVDD%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5K8FWSy5jG9zri9edc6JgVMaor4%2FoaK9qXZyL%2FZaY%2BwIhAJlysn0xwHGgCWPIwORQE4FhQlttdXlCtrsxCS34NnMnKv8DCCgQABoMNjM3NDIzMTgzODA1Igyz%2BD%2BXtLAF42FJIKkq3AP7bAkyIcGahjAY46aq%2FWF92GQiKgyq7EquwGXfCqxx0OhgE6V9j6ovzgvlxkLdogpFpJJdb7dL%2FQuR2ZDDXKKj5u%2Fb5Q4KkbVNM6RtG%2BJSynkxBjJep72%2FaBnDfwHbriKKrlW7r%2B%2B58zMz9LtEzvgTAkNH%2FigRqB%2Boctkd%2B3ZMHkXMFHUAFopSxq5DIFmIBGzPz0qqT7IEJRStfNohfRVg1Gbwu4fVVJsEn1JMWBs83IAaqKGyPTTkTtZevmTxTEySirFnaaxj1Mk4NXXdRC2b0rbjso4EtR%2F4tC2NtOLhqr1Q96gGQPgagMFzrtusmvKNyQ3Tp9WKnnGKJk7jnlurb0lBPf%2BF5y%2FhOgo%2F4lvlQQwjZlYYTxzckPLuLFgqAotikP7Er43HhesVqm9%2B%2BKqCtFRUQabNKmAXScyPWV29rMJ5%2BQcQpmEjqveX0XiDelootzhxE5rasRugHx8iTT61iu%2BWp8fVrMBF0oRCtfELs076ii0vtoKlUKARmPnn3PrWcFbLJ9ax66LFj8oREaFiBQ0s%2Fc1vnG%2F4WKOtBKsNVO5286mhtrpD4lowWUt8Ed5JznqVXGVmkGUvwPbzPcXSShIPQIhzgvNY1DE2ozw8zzrerxpDRSgFmmttjDCcgvi%2FBjqkAUOlHwPgJmCAPx%2Bmf0Hq5qTnG%2FLPZME9J%2Fz2i%2BlU2IYPdCbTMcDJI87zRmGw%2FFvsi5fZTI9prMwnKfZxKQKsJammCXMp8pqywr2ueKlr6s9DT1RTGDWfZHEss4myPv89RtqbaEo23MLIXH66DbcnHmn%2Fl7o6DjIL21l1%2BVtizwsYO0h%2BpUbVCCjyq7uqiA%2Fw8Wp%2BFUXA1bZoHYAy81mg93VjodYk&X-Amz-Signature=c6f66591a09f94c03daab9a6d5b343b95270aab115f95170e203883aba482b12&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCI3HVDD%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5K8FWSy5jG9zri9edc6JgVMaor4%2FoaK9qXZyL%2FZaY%2BwIhAJlysn0xwHGgCWPIwORQE4FhQlttdXlCtrsxCS34NnMnKv8DCCgQABoMNjM3NDIzMTgzODA1Igyz%2BD%2BXtLAF42FJIKkq3AP7bAkyIcGahjAY46aq%2FWF92GQiKgyq7EquwGXfCqxx0OhgE6V9j6ovzgvlxkLdogpFpJJdb7dL%2FQuR2ZDDXKKj5u%2Fb5Q4KkbVNM6RtG%2BJSynkxBjJep72%2FaBnDfwHbriKKrlW7r%2B%2B58zMz9LtEzvgTAkNH%2FigRqB%2Boctkd%2B3ZMHkXMFHUAFopSxq5DIFmIBGzPz0qqT7IEJRStfNohfRVg1Gbwu4fVVJsEn1JMWBs83IAaqKGyPTTkTtZevmTxTEySirFnaaxj1Mk4NXXdRC2b0rbjso4EtR%2F4tC2NtOLhqr1Q96gGQPgagMFzrtusmvKNyQ3Tp9WKnnGKJk7jnlurb0lBPf%2BF5y%2FhOgo%2F4lvlQQwjZlYYTxzckPLuLFgqAotikP7Er43HhesVqm9%2B%2BKqCtFRUQabNKmAXScyPWV29rMJ5%2BQcQpmEjqveX0XiDelootzhxE5rasRugHx8iTT61iu%2BWp8fVrMBF0oRCtfELs076ii0vtoKlUKARmPnn3PrWcFbLJ9ax66LFj8oREaFiBQ0s%2Fc1vnG%2F4WKOtBKsNVO5286mhtrpD4lowWUt8Ed5JznqVXGVmkGUvwPbzPcXSShIPQIhzgvNY1DE2ozw8zzrerxpDRSgFmmttjDCcgvi%2FBjqkAUOlHwPgJmCAPx%2Bmf0Hq5qTnG%2FLPZME9J%2Fz2i%2BlU2IYPdCbTMcDJI87zRmGw%2FFvsi5fZTI9prMwnKfZxKQKsJammCXMp8pqywr2ueKlr6s9DT1RTGDWfZHEss4myPv89RtqbaEo23MLIXH66DbcnHmn%2Fl7o6DjIL21l1%2BVtizwsYO0h%2BpUbVCCjyq7uqiA%2Fw8Wp%2BFUXA1bZoHYAy81mg93VjodYk&X-Amz-Signature=972311947dce05b9a7d9107f7604a2304d05b8cd0eeee82134d31e9e6bb8aeae&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCI3HVDD%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5K8FWSy5jG9zri9edc6JgVMaor4%2FoaK9qXZyL%2FZaY%2BwIhAJlysn0xwHGgCWPIwORQE4FhQlttdXlCtrsxCS34NnMnKv8DCCgQABoMNjM3NDIzMTgzODA1Igyz%2BD%2BXtLAF42FJIKkq3AP7bAkyIcGahjAY46aq%2FWF92GQiKgyq7EquwGXfCqxx0OhgE6V9j6ovzgvlxkLdogpFpJJdb7dL%2FQuR2ZDDXKKj5u%2Fb5Q4KkbVNM6RtG%2BJSynkxBjJep72%2FaBnDfwHbriKKrlW7r%2B%2B58zMz9LtEzvgTAkNH%2FigRqB%2Boctkd%2B3ZMHkXMFHUAFopSxq5DIFmIBGzPz0qqT7IEJRStfNohfRVg1Gbwu4fVVJsEn1JMWBs83IAaqKGyPTTkTtZevmTxTEySirFnaaxj1Mk4NXXdRC2b0rbjso4EtR%2F4tC2NtOLhqr1Q96gGQPgagMFzrtusmvKNyQ3Tp9WKnnGKJk7jnlurb0lBPf%2BF5y%2FhOgo%2F4lvlQQwjZlYYTxzckPLuLFgqAotikP7Er43HhesVqm9%2B%2BKqCtFRUQabNKmAXScyPWV29rMJ5%2BQcQpmEjqveX0XiDelootzhxE5rasRugHx8iTT61iu%2BWp8fVrMBF0oRCtfELs076ii0vtoKlUKARmPnn3PrWcFbLJ9ax66LFj8oREaFiBQ0s%2Fc1vnG%2F4WKOtBKsNVO5286mhtrpD4lowWUt8Ed5JznqVXGVmkGUvwPbzPcXSShIPQIhzgvNY1DE2ozw8zzrerxpDRSgFmmttjDCcgvi%2FBjqkAUOlHwPgJmCAPx%2Bmf0Hq5qTnG%2FLPZME9J%2Fz2i%2BlU2IYPdCbTMcDJI87zRmGw%2FFvsi5fZTI9prMwnKfZxKQKsJammCXMp8pqywr2ueKlr6s9DT1RTGDWfZHEss4myPv89RtqbaEo23MLIXH66DbcnHmn%2Fl7o6DjIL21l1%2BVtizwsYO0h%2BpUbVCCjyq7uqiA%2Fw8Wp%2BFUXA1bZoHYAy81mg93VjodYk&X-Amz-Signature=9e7471483264dde47b042d967e14098ff371ca604730cd508ae2f9b49c51d05a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCI3HVDD%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5K8FWSy5jG9zri9edc6JgVMaor4%2FoaK9qXZyL%2FZaY%2BwIhAJlysn0xwHGgCWPIwORQE4FhQlttdXlCtrsxCS34NnMnKv8DCCgQABoMNjM3NDIzMTgzODA1Igyz%2BD%2BXtLAF42FJIKkq3AP7bAkyIcGahjAY46aq%2FWF92GQiKgyq7EquwGXfCqxx0OhgE6V9j6ovzgvlxkLdogpFpJJdb7dL%2FQuR2ZDDXKKj5u%2Fb5Q4KkbVNM6RtG%2BJSynkxBjJep72%2FaBnDfwHbriKKrlW7r%2B%2B58zMz9LtEzvgTAkNH%2FigRqB%2Boctkd%2B3ZMHkXMFHUAFopSxq5DIFmIBGzPz0qqT7IEJRStfNohfRVg1Gbwu4fVVJsEn1JMWBs83IAaqKGyPTTkTtZevmTxTEySirFnaaxj1Mk4NXXdRC2b0rbjso4EtR%2F4tC2NtOLhqr1Q96gGQPgagMFzrtusmvKNyQ3Tp9WKnnGKJk7jnlurb0lBPf%2BF5y%2FhOgo%2F4lvlQQwjZlYYTxzckPLuLFgqAotikP7Er43HhesVqm9%2B%2BKqCtFRUQabNKmAXScyPWV29rMJ5%2BQcQpmEjqveX0XiDelootzhxE5rasRugHx8iTT61iu%2BWp8fVrMBF0oRCtfELs076ii0vtoKlUKARmPnn3PrWcFbLJ9ax66LFj8oREaFiBQ0s%2Fc1vnG%2F4WKOtBKsNVO5286mhtrpD4lowWUt8Ed5JznqVXGVmkGUvwPbzPcXSShIPQIhzgvNY1DE2ozw8zzrerxpDRSgFmmttjDCcgvi%2FBjqkAUOlHwPgJmCAPx%2Bmf0Hq5qTnG%2FLPZME9J%2Fz2i%2BlU2IYPdCbTMcDJI87zRmGw%2FFvsi5fZTI9prMwnKfZxKQKsJammCXMp8pqywr2ueKlr6s9DT1RTGDWfZHEss4myPv89RtqbaEo23MLIXH66DbcnHmn%2Fl7o6DjIL21l1%2BVtizwsYO0h%2BpUbVCCjyq7uqiA%2Fw8Wp%2BFUXA1bZoHYAy81mg93VjodYk&X-Amz-Signature=60979f792d60f47a85f4155bf796d9a4cb1ed7c158a69ec9b3ffc2e47af9d580&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCI3HVDD%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5K8FWSy5jG9zri9edc6JgVMaor4%2FoaK9qXZyL%2FZaY%2BwIhAJlysn0xwHGgCWPIwORQE4FhQlttdXlCtrsxCS34NnMnKv8DCCgQABoMNjM3NDIzMTgzODA1Igyz%2BD%2BXtLAF42FJIKkq3AP7bAkyIcGahjAY46aq%2FWF92GQiKgyq7EquwGXfCqxx0OhgE6V9j6ovzgvlxkLdogpFpJJdb7dL%2FQuR2ZDDXKKj5u%2Fb5Q4KkbVNM6RtG%2BJSynkxBjJep72%2FaBnDfwHbriKKrlW7r%2B%2B58zMz9LtEzvgTAkNH%2FigRqB%2Boctkd%2B3ZMHkXMFHUAFopSxq5DIFmIBGzPz0qqT7IEJRStfNohfRVg1Gbwu4fVVJsEn1JMWBs83IAaqKGyPTTkTtZevmTxTEySirFnaaxj1Mk4NXXdRC2b0rbjso4EtR%2F4tC2NtOLhqr1Q96gGQPgagMFzrtusmvKNyQ3Tp9WKnnGKJk7jnlurb0lBPf%2BF5y%2FhOgo%2F4lvlQQwjZlYYTxzckPLuLFgqAotikP7Er43HhesVqm9%2B%2BKqCtFRUQabNKmAXScyPWV29rMJ5%2BQcQpmEjqveX0XiDelootzhxE5rasRugHx8iTT61iu%2BWp8fVrMBF0oRCtfELs076ii0vtoKlUKARmPnn3PrWcFbLJ9ax66LFj8oREaFiBQ0s%2Fc1vnG%2F4WKOtBKsNVO5286mhtrpD4lowWUt8Ed5JznqVXGVmkGUvwPbzPcXSShIPQIhzgvNY1DE2ozw8zzrerxpDRSgFmmttjDCcgvi%2FBjqkAUOlHwPgJmCAPx%2Bmf0Hq5qTnG%2FLPZME9J%2Fz2i%2BlU2IYPdCbTMcDJI87zRmGw%2FFvsi5fZTI9prMwnKfZxKQKsJammCXMp8pqywr2ueKlr6s9DT1RTGDWfZHEss4myPv89RtqbaEo23MLIXH66DbcnHmn%2Fl7o6DjIL21l1%2BVtizwsYO0h%2BpUbVCCjyq7uqiA%2Fw8Wp%2BFUXA1bZoHYAy81mg93VjodYk&X-Amz-Signature=77f6dfff5ecb1694286f835ae26fb81ee2cee77cca1f82d060009aa9e282288c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCI3HVDD%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5K8FWSy5jG9zri9edc6JgVMaor4%2FoaK9qXZyL%2FZaY%2BwIhAJlysn0xwHGgCWPIwORQE4FhQlttdXlCtrsxCS34NnMnKv8DCCgQABoMNjM3NDIzMTgzODA1Igyz%2BD%2BXtLAF42FJIKkq3AP7bAkyIcGahjAY46aq%2FWF92GQiKgyq7EquwGXfCqxx0OhgE6V9j6ovzgvlxkLdogpFpJJdb7dL%2FQuR2ZDDXKKj5u%2Fb5Q4KkbVNM6RtG%2BJSynkxBjJep72%2FaBnDfwHbriKKrlW7r%2B%2B58zMz9LtEzvgTAkNH%2FigRqB%2Boctkd%2B3ZMHkXMFHUAFopSxq5DIFmIBGzPz0qqT7IEJRStfNohfRVg1Gbwu4fVVJsEn1JMWBs83IAaqKGyPTTkTtZevmTxTEySirFnaaxj1Mk4NXXdRC2b0rbjso4EtR%2F4tC2NtOLhqr1Q96gGQPgagMFzrtusmvKNyQ3Tp9WKnnGKJk7jnlurb0lBPf%2BF5y%2FhOgo%2F4lvlQQwjZlYYTxzckPLuLFgqAotikP7Er43HhesVqm9%2B%2BKqCtFRUQabNKmAXScyPWV29rMJ5%2BQcQpmEjqveX0XiDelootzhxE5rasRugHx8iTT61iu%2BWp8fVrMBF0oRCtfELs076ii0vtoKlUKARmPnn3PrWcFbLJ9ax66LFj8oREaFiBQ0s%2Fc1vnG%2F4WKOtBKsNVO5286mhtrpD4lowWUt8Ed5JznqVXGVmkGUvwPbzPcXSShIPQIhzgvNY1DE2ozw8zzrerxpDRSgFmmttjDCcgvi%2FBjqkAUOlHwPgJmCAPx%2Bmf0Hq5qTnG%2FLPZME9J%2Fz2i%2BlU2IYPdCbTMcDJI87zRmGw%2FFvsi5fZTI9prMwnKfZxKQKsJammCXMp8pqywr2ueKlr6s9DT1RTGDWfZHEss4myPv89RtqbaEo23MLIXH66DbcnHmn%2Fl7o6DjIL21l1%2BVtizwsYO0h%2BpUbVCCjyq7uqiA%2Fw8Wp%2BFUXA1bZoHYAy81mg93VjodYk&X-Amz-Signature=769a6f2b4c75e503a71e42e941cc6cf0b48689cfd8c64a0bfc192e6175a5ac9b&X-Amz-SignedHeaders=host&x-id=GetObject)
