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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466552SUVUD%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCLfWuCSSMoFSBhAXc%2F6U1H0F9SOJgzXGTO5Th%2B0W5rVAIgGKp7DVa%2BCc9Jeb7P96WqowP8nTco0CkR4RArKM7wwIUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEe0JSiH5h1KdLy4uyrcA%2BoX0Zt3x20r%2FfX5wLhJX4EV2%2F32XBm77jxXSeOmPj17Cki39KQ%2BHIG9uPQBWJBmrM6nIl%2FkkUXuF8rs5xR9jEZtTz1OPgWUo76uAwr7EoXNV%2BLc4PX2N94ToHgxtTBcAe%2Bv58tSrru%2BrbDOpY9vXHcfXIBiwBGqTUjT%2F7DMACJDT0rkeY4g5f%2B0hO8BCRWd3aAqpWV2fheE40SRGvgVqjK6qqgTPy%2FyXo0AZJLtZJKA3zqFBMgr57kEyGFOwbiKuUhMknmsyQPx0k78TvlhU7Ew%2B%2BtMeZmgNzYfEydI8Rd1IUNMEzSgszya2dOjw11WiEg%2BuwCPmx04DDfzKh9qx58zbqAfCVfW%2BBUDEugmK7k3SCGTHZwtjk1IiUYHfWRObLm02wdde45pmCUmAiRcEijyWn2qLPwGhuVwEFVZpRquEbDhqi9dqW1%2Bh%2FRUeoLVALIq8eQqCOIhCXq6CRvsfZfkn%2BDVcjzGaGe98IfdBbObxId3zWeABuL%2BKwxTrZCgrCd8J6HlReyWHH4aiE%2FIEOLzPyNwjnbSDze8ea0yFpu6AjT8EQOvtcHhxSepxoMFGL%2B2tYJj9%2Bxv5z7%2B5Hz4lFwLDcnNR5sN8i2KJojablbilrS%2B2Y6fMbs7j7XfMNi738IGOqUB%2FcQz1EL94FJEpkZm8baWb6%2FGTiNcfnPFBUgBdwdnvgb0FgSfFKNqz%2BRa2VBSYrSEJJrhvuHqva9hi9uoRwc12dUrR3LAkuHpgVkSGO%2BLlTo9YYoDoU0B%2F75NB%2BSDTS4sjfqnpO8sb4Q1iYS0heIgzdiiHcsRGQ3ip0esfTiuCsLEnufrCYtza7H%2BuYDDWiH%2F%2FvsSo2bh8D1jy5hrXZVvSIu%2B%2Fctz&X-Amz-Signature=a8031a1cd1d6ea2881c8bd853aa4e031923559186f4f56345b9a519d56156bb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466552SUVUD%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCLfWuCSSMoFSBhAXc%2F6U1H0F9SOJgzXGTO5Th%2B0W5rVAIgGKp7DVa%2BCc9Jeb7P96WqowP8nTco0CkR4RArKM7wwIUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEe0JSiH5h1KdLy4uyrcA%2BoX0Zt3x20r%2FfX5wLhJX4EV2%2F32XBm77jxXSeOmPj17Cki39KQ%2BHIG9uPQBWJBmrM6nIl%2FkkUXuF8rs5xR9jEZtTz1OPgWUo76uAwr7EoXNV%2BLc4PX2N94ToHgxtTBcAe%2Bv58tSrru%2BrbDOpY9vXHcfXIBiwBGqTUjT%2F7DMACJDT0rkeY4g5f%2B0hO8BCRWd3aAqpWV2fheE40SRGvgVqjK6qqgTPy%2FyXo0AZJLtZJKA3zqFBMgr57kEyGFOwbiKuUhMknmsyQPx0k78TvlhU7Ew%2B%2BtMeZmgNzYfEydI8Rd1IUNMEzSgszya2dOjw11WiEg%2BuwCPmx04DDfzKh9qx58zbqAfCVfW%2BBUDEugmK7k3SCGTHZwtjk1IiUYHfWRObLm02wdde45pmCUmAiRcEijyWn2qLPwGhuVwEFVZpRquEbDhqi9dqW1%2Bh%2FRUeoLVALIq8eQqCOIhCXq6CRvsfZfkn%2BDVcjzGaGe98IfdBbObxId3zWeABuL%2BKwxTrZCgrCd8J6HlReyWHH4aiE%2FIEOLzPyNwjnbSDze8ea0yFpu6AjT8EQOvtcHhxSepxoMFGL%2B2tYJj9%2Bxv5z7%2B5Hz4lFwLDcnNR5sN8i2KJojablbilrS%2B2Y6fMbs7j7XfMNi738IGOqUB%2FcQz1EL94FJEpkZm8baWb6%2FGTiNcfnPFBUgBdwdnvgb0FgSfFKNqz%2BRa2VBSYrSEJJrhvuHqva9hi9uoRwc12dUrR3LAkuHpgVkSGO%2BLlTo9YYoDoU0B%2F75NB%2BSDTS4sjfqnpO8sb4Q1iYS0heIgzdiiHcsRGQ3ip0esfTiuCsLEnufrCYtza7H%2BuYDDWiH%2F%2FvsSo2bh8D1jy5hrXZVvSIu%2B%2Fctz&X-Amz-Signature=7f2f336e1498557232b06fe93adc58ad76d18616d82d6ccc9ce56c9dac1b6465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466552SUVUD%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCLfWuCSSMoFSBhAXc%2F6U1H0F9SOJgzXGTO5Th%2B0W5rVAIgGKp7DVa%2BCc9Jeb7P96WqowP8nTco0CkR4RArKM7wwIUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEe0JSiH5h1KdLy4uyrcA%2BoX0Zt3x20r%2FfX5wLhJX4EV2%2F32XBm77jxXSeOmPj17Cki39KQ%2BHIG9uPQBWJBmrM6nIl%2FkkUXuF8rs5xR9jEZtTz1OPgWUo76uAwr7EoXNV%2BLc4PX2N94ToHgxtTBcAe%2Bv58tSrru%2BrbDOpY9vXHcfXIBiwBGqTUjT%2F7DMACJDT0rkeY4g5f%2B0hO8BCRWd3aAqpWV2fheE40SRGvgVqjK6qqgTPy%2FyXo0AZJLtZJKA3zqFBMgr57kEyGFOwbiKuUhMknmsyQPx0k78TvlhU7Ew%2B%2BtMeZmgNzYfEydI8Rd1IUNMEzSgszya2dOjw11WiEg%2BuwCPmx04DDfzKh9qx58zbqAfCVfW%2BBUDEugmK7k3SCGTHZwtjk1IiUYHfWRObLm02wdde45pmCUmAiRcEijyWn2qLPwGhuVwEFVZpRquEbDhqi9dqW1%2Bh%2FRUeoLVALIq8eQqCOIhCXq6CRvsfZfkn%2BDVcjzGaGe98IfdBbObxId3zWeABuL%2BKwxTrZCgrCd8J6HlReyWHH4aiE%2FIEOLzPyNwjnbSDze8ea0yFpu6AjT8EQOvtcHhxSepxoMFGL%2B2tYJj9%2Bxv5z7%2B5Hz4lFwLDcnNR5sN8i2KJojablbilrS%2B2Y6fMbs7j7XfMNi738IGOqUB%2FcQz1EL94FJEpkZm8baWb6%2FGTiNcfnPFBUgBdwdnvgb0FgSfFKNqz%2BRa2VBSYrSEJJrhvuHqva9hi9uoRwc12dUrR3LAkuHpgVkSGO%2BLlTo9YYoDoU0B%2F75NB%2BSDTS4sjfqnpO8sb4Q1iYS0heIgzdiiHcsRGQ3ip0esfTiuCsLEnufrCYtza7H%2BuYDDWiH%2F%2FvsSo2bh8D1jy5hrXZVvSIu%2B%2Fctz&X-Amz-Signature=48c97570a930188571eb9557984f4b5ea6ed5a9c80a56ec38f912b1d263efe24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466552SUVUD%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCLfWuCSSMoFSBhAXc%2F6U1H0F9SOJgzXGTO5Th%2B0W5rVAIgGKp7DVa%2BCc9Jeb7P96WqowP8nTco0CkR4RArKM7wwIUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEe0JSiH5h1KdLy4uyrcA%2BoX0Zt3x20r%2FfX5wLhJX4EV2%2F32XBm77jxXSeOmPj17Cki39KQ%2BHIG9uPQBWJBmrM6nIl%2FkkUXuF8rs5xR9jEZtTz1OPgWUo76uAwr7EoXNV%2BLc4PX2N94ToHgxtTBcAe%2Bv58tSrru%2BrbDOpY9vXHcfXIBiwBGqTUjT%2F7DMACJDT0rkeY4g5f%2B0hO8BCRWd3aAqpWV2fheE40SRGvgVqjK6qqgTPy%2FyXo0AZJLtZJKA3zqFBMgr57kEyGFOwbiKuUhMknmsyQPx0k78TvlhU7Ew%2B%2BtMeZmgNzYfEydI8Rd1IUNMEzSgszya2dOjw11WiEg%2BuwCPmx04DDfzKh9qx58zbqAfCVfW%2BBUDEugmK7k3SCGTHZwtjk1IiUYHfWRObLm02wdde45pmCUmAiRcEijyWn2qLPwGhuVwEFVZpRquEbDhqi9dqW1%2Bh%2FRUeoLVALIq8eQqCOIhCXq6CRvsfZfkn%2BDVcjzGaGe98IfdBbObxId3zWeABuL%2BKwxTrZCgrCd8J6HlReyWHH4aiE%2FIEOLzPyNwjnbSDze8ea0yFpu6AjT8EQOvtcHhxSepxoMFGL%2B2tYJj9%2Bxv5z7%2B5Hz4lFwLDcnNR5sN8i2KJojablbilrS%2B2Y6fMbs7j7XfMNi738IGOqUB%2FcQz1EL94FJEpkZm8baWb6%2FGTiNcfnPFBUgBdwdnvgb0FgSfFKNqz%2BRa2VBSYrSEJJrhvuHqva9hi9uoRwc12dUrR3LAkuHpgVkSGO%2BLlTo9YYoDoU0B%2F75NB%2BSDTS4sjfqnpO8sb4Q1iYS0heIgzdiiHcsRGQ3ip0esfTiuCsLEnufrCYtza7H%2BuYDDWiH%2F%2FvsSo2bh8D1jy5hrXZVvSIu%2B%2Fctz&X-Amz-Signature=413012d20c8f5915795890fd178b260272bded44fc22d630f7d2cf07194cbbd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466552SUVUD%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCLfWuCSSMoFSBhAXc%2F6U1H0F9SOJgzXGTO5Th%2B0W5rVAIgGKp7DVa%2BCc9Jeb7P96WqowP8nTco0CkR4RArKM7wwIUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEe0JSiH5h1KdLy4uyrcA%2BoX0Zt3x20r%2FfX5wLhJX4EV2%2F32XBm77jxXSeOmPj17Cki39KQ%2BHIG9uPQBWJBmrM6nIl%2FkkUXuF8rs5xR9jEZtTz1OPgWUo76uAwr7EoXNV%2BLc4PX2N94ToHgxtTBcAe%2Bv58tSrru%2BrbDOpY9vXHcfXIBiwBGqTUjT%2F7DMACJDT0rkeY4g5f%2B0hO8BCRWd3aAqpWV2fheE40SRGvgVqjK6qqgTPy%2FyXo0AZJLtZJKA3zqFBMgr57kEyGFOwbiKuUhMknmsyQPx0k78TvlhU7Ew%2B%2BtMeZmgNzYfEydI8Rd1IUNMEzSgszya2dOjw11WiEg%2BuwCPmx04DDfzKh9qx58zbqAfCVfW%2BBUDEugmK7k3SCGTHZwtjk1IiUYHfWRObLm02wdde45pmCUmAiRcEijyWn2qLPwGhuVwEFVZpRquEbDhqi9dqW1%2Bh%2FRUeoLVALIq8eQqCOIhCXq6CRvsfZfkn%2BDVcjzGaGe98IfdBbObxId3zWeABuL%2BKwxTrZCgrCd8J6HlReyWHH4aiE%2FIEOLzPyNwjnbSDze8ea0yFpu6AjT8EQOvtcHhxSepxoMFGL%2B2tYJj9%2Bxv5z7%2B5Hz4lFwLDcnNR5sN8i2KJojablbilrS%2B2Y6fMbs7j7XfMNi738IGOqUB%2FcQz1EL94FJEpkZm8baWb6%2FGTiNcfnPFBUgBdwdnvgb0FgSfFKNqz%2BRa2VBSYrSEJJrhvuHqva9hi9uoRwc12dUrR3LAkuHpgVkSGO%2BLlTo9YYoDoU0B%2F75NB%2BSDTS4sjfqnpO8sb4Q1iYS0heIgzdiiHcsRGQ3ip0esfTiuCsLEnufrCYtza7H%2BuYDDWiH%2F%2FvsSo2bh8D1jy5hrXZVvSIu%2B%2Fctz&X-Amz-Signature=8c9608db9a7a6aa335eb7edc386b0a23dc61e8de822d4019e61a2cbf67871f54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466552SUVUD%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCLfWuCSSMoFSBhAXc%2F6U1H0F9SOJgzXGTO5Th%2B0W5rVAIgGKp7DVa%2BCc9Jeb7P96WqowP8nTco0CkR4RArKM7wwIUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEe0JSiH5h1KdLy4uyrcA%2BoX0Zt3x20r%2FfX5wLhJX4EV2%2F32XBm77jxXSeOmPj17Cki39KQ%2BHIG9uPQBWJBmrM6nIl%2FkkUXuF8rs5xR9jEZtTz1OPgWUo76uAwr7EoXNV%2BLc4PX2N94ToHgxtTBcAe%2Bv58tSrru%2BrbDOpY9vXHcfXIBiwBGqTUjT%2F7DMACJDT0rkeY4g5f%2B0hO8BCRWd3aAqpWV2fheE40SRGvgVqjK6qqgTPy%2FyXo0AZJLtZJKA3zqFBMgr57kEyGFOwbiKuUhMknmsyQPx0k78TvlhU7Ew%2B%2BtMeZmgNzYfEydI8Rd1IUNMEzSgszya2dOjw11WiEg%2BuwCPmx04DDfzKh9qx58zbqAfCVfW%2BBUDEugmK7k3SCGTHZwtjk1IiUYHfWRObLm02wdde45pmCUmAiRcEijyWn2qLPwGhuVwEFVZpRquEbDhqi9dqW1%2Bh%2FRUeoLVALIq8eQqCOIhCXq6CRvsfZfkn%2BDVcjzGaGe98IfdBbObxId3zWeABuL%2BKwxTrZCgrCd8J6HlReyWHH4aiE%2FIEOLzPyNwjnbSDze8ea0yFpu6AjT8EQOvtcHhxSepxoMFGL%2B2tYJj9%2Bxv5z7%2B5Hz4lFwLDcnNR5sN8i2KJojablbilrS%2B2Y6fMbs7j7XfMNi738IGOqUB%2FcQz1EL94FJEpkZm8baWb6%2FGTiNcfnPFBUgBdwdnvgb0FgSfFKNqz%2BRa2VBSYrSEJJrhvuHqva9hi9uoRwc12dUrR3LAkuHpgVkSGO%2BLlTo9YYoDoU0B%2F75NB%2BSDTS4sjfqnpO8sb4Q1iYS0heIgzdiiHcsRGQ3ip0esfTiuCsLEnufrCYtza7H%2BuYDDWiH%2F%2FvsSo2bh8D1jy5hrXZVvSIu%2B%2Fctz&X-Amz-Signature=48f8b616af79e7020bce55cac321e39935a4e1b8ae6d0eba92f23113343f1018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
