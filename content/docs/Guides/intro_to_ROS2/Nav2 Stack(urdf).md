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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633OGCXIO%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCmF%2BY5yjKrbAWKdzQ8gBL%2B43KNXm%2F6k3tm%2FcumBwpvBAIgFBFyYO9N9T2r7T%2FeofRAYkCeOmwMLzWSD8W1qXjUYZgqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGKtMdQZ7WGHxDQx0yrcA6VUi1yGSyyWVL0GHAXdJ72b40IFD%2FbzPGZwqzRKanUhg6xbpSms06gLzfFazL9vJ0BWqQ7CdQBohPi1RtOPDtDiSne4NAxEBP2SW4qXtMOF7z%2F7LfSD0LiV%2BZIb4%2Bjk4nTCJLsi4K1Lfnvczbi5A%2BpUdsQOm1v6G8bsfh5%2BRgKh6KBg12u8hAHsKHEmYPvVlZuZzyej3k4aC4UQpvUZ7%2FYMoHNCRKuDfA1BHcvU3RgMzTIo5z829mWw6xYBlBGf4NCSVzYi%2FuNm%2BdTAXQ7gOEGhdCpk2W0kV3DFYnMi8ytydFGmyMmUUyqsG5cBTqKbTtUmhT0RJozabJtkWfFQ0XiKEFJFvHlittLrliIit8VRQ%2Flh5G%2FvCKGKss4uBGk7D2h6dhFGsssFlc%2FlcSNnZCx9MTaJdcC21zEix77%2FxWU2R31r35y03hZNi%2FzuRxkoO43CIJIFRyZMyedQidoiLrND3onlNpBdIq9%2BMAdvtvPV7OitM2BdkAOpfTrBL8egN%2FVsDEkpsbqpIkAW5k27H99oYNDM%2BkW0nin6gJGw51rj%2FpLQEpS89I0cJjoDipUHxaLhpelZ5%2FYtQIDBCo0f3aV7UyTofGLaguMJreGOBUQcCifp7RGpHSiofEWTMNiAp8AGOqUBhKCJAYb5ZAW2wouNuOM7%2B7SGWInsCbgpXyMvvfqNt1z%2FnzqG3a29%2Fh%2FxQzIN2X64tbNXFRX3HKpF0BGJIliDQlrqwCagomcEXnZHKzMVcJLHon2sjQ%2FlY9xGoOWAl8i35%2BaLhzIJLbW75fu7JhAW9CRz%2BtahulLfFrN2LtqCS04Cm%2BDfYw9DTs0LCmtRX1xje16ytBMNVDKfNhAK6WBIisD5oWz0&X-Amz-Signature=35a209a346848aa984ba1cc7fbdb59f628197b6a4bc489c1bc5c3e20464f527a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633OGCXIO%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCmF%2BY5yjKrbAWKdzQ8gBL%2B43KNXm%2F6k3tm%2FcumBwpvBAIgFBFyYO9N9T2r7T%2FeofRAYkCeOmwMLzWSD8W1qXjUYZgqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGKtMdQZ7WGHxDQx0yrcA6VUi1yGSyyWVL0GHAXdJ72b40IFD%2FbzPGZwqzRKanUhg6xbpSms06gLzfFazL9vJ0BWqQ7CdQBohPi1RtOPDtDiSne4NAxEBP2SW4qXtMOF7z%2F7LfSD0LiV%2BZIb4%2Bjk4nTCJLsi4K1Lfnvczbi5A%2BpUdsQOm1v6G8bsfh5%2BRgKh6KBg12u8hAHsKHEmYPvVlZuZzyej3k4aC4UQpvUZ7%2FYMoHNCRKuDfA1BHcvU3RgMzTIo5z829mWw6xYBlBGf4NCSVzYi%2FuNm%2BdTAXQ7gOEGhdCpk2W0kV3DFYnMi8ytydFGmyMmUUyqsG5cBTqKbTtUmhT0RJozabJtkWfFQ0XiKEFJFvHlittLrliIit8VRQ%2Flh5G%2FvCKGKss4uBGk7D2h6dhFGsssFlc%2FlcSNnZCx9MTaJdcC21zEix77%2FxWU2R31r35y03hZNi%2FzuRxkoO43CIJIFRyZMyedQidoiLrND3onlNpBdIq9%2BMAdvtvPV7OitM2BdkAOpfTrBL8egN%2FVsDEkpsbqpIkAW5k27H99oYNDM%2BkW0nin6gJGw51rj%2FpLQEpS89I0cJjoDipUHxaLhpelZ5%2FYtQIDBCo0f3aV7UyTofGLaguMJreGOBUQcCifp7RGpHSiofEWTMNiAp8AGOqUBhKCJAYb5ZAW2wouNuOM7%2B7SGWInsCbgpXyMvvfqNt1z%2FnzqG3a29%2Fh%2FxQzIN2X64tbNXFRX3HKpF0BGJIliDQlrqwCagomcEXnZHKzMVcJLHon2sjQ%2FlY9xGoOWAl8i35%2BaLhzIJLbW75fu7JhAW9CRz%2BtahulLfFrN2LtqCS04Cm%2BDfYw9DTs0LCmtRX1xje16ytBMNVDKfNhAK6WBIisD5oWz0&X-Amz-Signature=da6f7aa58232f14bfc63ff3b1ec96e703cdc2f3536ce1ba01129769303c6aafe&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633OGCXIO%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCmF%2BY5yjKrbAWKdzQ8gBL%2B43KNXm%2F6k3tm%2FcumBwpvBAIgFBFyYO9N9T2r7T%2FeofRAYkCeOmwMLzWSD8W1qXjUYZgqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGKtMdQZ7WGHxDQx0yrcA6VUi1yGSyyWVL0GHAXdJ72b40IFD%2FbzPGZwqzRKanUhg6xbpSms06gLzfFazL9vJ0BWqQ7CdQBohPi1RtOPDtDiSne4NAxEBP2SW4qXtMOF7z%2F7LfSD0LiV%2BZIb4%2Bjk4nTCJLsi4K1Lfnvczbi5A%2BpUdsQOm1v6G8bsfh5%2BRgKh6KBg12u8hAHsKHEmYPvVlZuZzyej3k4aC4UQpvUZ7%2FYMoHNCRKuDfA1BHcvU3RgMzTIo5z829mWw6xYBlBGf4NCSVzYi%2FuNm%2BdTAXQ7gOEGhdCpk2W0kV3DFYnMi8ytydFGmyMmUUyqsG5cBTqKbTtUmhT0RJozabJtkWfFQ0XiKEFJFvHlittLrliIit8VRQ%2Flh5G%2FvCKGKss4uBGk7D2h6dhFGsssFlc%2FlcSNnZCx9MTaJdcC21zEix77%2FxWU2R31r35y03hZNi%2FzuRxkoO43CIJIFRyZMyedQidoiLrND3onlNpBdIq9%2BMAdvtvPV7OitM2BdkAOpfTrBL8egN%2FVsDEkpsbqpIkAW5k27H99oYNDM%2BkW0nin6gJGw51rj%2FpLQEpS89I0cJjoDipUHxaLhpelZ5%2FYtQIDBCo0f3aV7UyTofGLaguMJreGOBUQcCifp7RGpHSiofEWTMNiAp8AGOqUBhKCJAYb5ZAW2wouNuOM7%2B7SGWInsCbgpXyMvvfqNt1z%2FnzqG3a29%2Fh%2FxQzIN2X64tbNXFRX3HKpF0BGJIliDQlrqwCagomcEXnZHKzMVcJLHon2sjQ%2FlY9xGoOWAl8i35%2BaLhzIJLbW75fu7JhAW9CRz%2BtahulLfFrN2LtqCS04Cm%2BDfYw9DTs0LCmtRX1xje16ytBMNVDKfNhAK6WBIisD5oWz0&X-Amz-Signature=754e8297dcbbce50a1b82a6512c68c82ddbc12f8f3a94a55c090438e7284b3a6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633OGCXIO%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCmF%2BY5yjKrbAWKdzQ8gBL%2B43KNXm%2F6k3tm%2FcumBwpvBAIgFBFyYO9N9T2r7T%2FeofRAYkCeOmwMLzWSD8W1qXjUYZgqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGKtMdQZ7WGHxDQx0yrcA6VUi1yGSyyWVL0GHAXdJ72b40IFD%2FbzPGZwqzRKanUhg6xbpSms06gLzfFazL9vJ0BWqQ7CdQBohPi1RtOPDtDiSne4NAxEBP2SW4qXtMOF7z%2F7LfSD0LiV%2BZIb4%2Bjk4nTCJLsi4K1Lfnvczbi5A%2BpUdsQOm1v6G8bsfh5%2BRgKh6KBg12u8hAHsKHEmYPvVlZuZzyej3k4aC4UQpvUZ7%2FYMoHNCRKuDfA1BHcvU3RgMzTIo5z829mWw6xYBlBGf4NCSVzYi%2FuNm%2BdTAXQ7gOEGhdCpk2W0kV3DFYnMi8ytydFGmyMmUUyqsG5cBTqKbTtUmhT0RJozabJtkWfFQ0XiKEFJFvHlittLrliIit8VRQ%2Flh5G%2FvCKGKss4uBGk7D2h6dhFGsssFlc%2FlcSNnZCx9MTaJdcC21zEix77%2FxWU2R31r35y03hZNi%2FzuRxkoO43CIJIFRyZMyedQidoiLrND3onlNpBdIq9%2BMAdvtvPV7OitM2BdkAOpfTrBL8egN%2FVsDEkpsbqpIkAW5k27H99oYNDM%2BkW0nin6gJGw51rj%2FpLQEpS89I0cJjoDipUHxaLhpelZ5%2FYtQIDBCo0f3aV7UyTofGLaguMJreGOBUQcCifp7RGpHSiofEWTMNiAp8AGOqUBhKCJAYb5ZAW2wouNuOM7%2B7SGWInsCbgpXyMvvfqNt1z%2FnzqG3a29%2Fh%2FxQzIN2X64tbNXFRX3HKpF0BGJIliDQlrqwCagomcEXnZHKzMVcJLHon2sjQ%2FlY9xGoOWAl8i35%2BaLhzIJLbW75fu7JhAW9CRz%2BtahulLfFrN2LtqCS04Cm%2BDfYw9DTs0LCmtRX1xje16ytBMNVDKfNhAK6WBIisD5oWz0&X-Amz-Signature=f6b0c763e9e8e658e895abd5de712e332a017cce0b76f52256408af1f1cf7057&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633OGCXIO%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCmF%2BY5yjKrbAWKdzQ8gBL%2B43KNXm%2F6k3tm%2FcumBwpvBAIgFBFyYO9N9T2r7T%2FeofRAYkCeOmwMLzWSD8W1qXjUYZgqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGKtMdQZ7WGHxDQx0yrcA6VUi1yGSyyWVL0GHAXdJ72b40IFD%2FbzPGZwqzRKanUhg6xbpSms06gLzfFazL9vJ0BWqQ7CdQBohPi1RtOPDtDiSne4NAxEBP2SW4qXtMOF7z%2F7LfSD0LiV%2BZIb4%2Bjk4nTCJLsi4K1Lfnvczbi5A%2BpUdsQOm1v6G8bsfh5%2BRgKh6KBg12u8hAHsKHEmYPvVlZuZzyej3k4aC4UQpvUZ7%2FYMoHNCRKuDfA1BHcvU3RgMzTIo5z829mWw6xYBlBGf4NCSVzYi%2FuNm%2BdTAXQ7gOEGhdCpk2W0kV3DFYnMi8ytydFGmyMmUUyqsG5cBTqKbTtUmhT0RJozabJtkWfFQ0XiKEFJFvHlittLrliIit8VRQ%2Flh5G%2FvCKGKss4uBGk7D2h6dhFGsssFlc%2FlcSNnZCx9MTaJdcC21zEix77%2FxWU2R31r35y03hZNi%2FzuRxkoO43CIJIFRyZMyedQidoiLrND3onlNpBdIq9%2BMAdvtvPV7OitM2BdkAOpfTrBL8egN%2FVsDEkpsbqpIkAW5k27H99oYNDM%2BkW0nin6gJGw51rj%2FpLQEpS89I0cJjoDipUHxaLhpelZ5%2FYtQIDBCo0f3aV7UyTofGLaguMJreGOBUQcCifp7RGpHSiofEWTMNiAp8AGOqUBhKCJAYb5ZAW2wouNuOM7%2B7SGWInsCbgpXyMvvfqNt1z%2FnzqG3a29%2Fh%2FxQzIN2X64tbNXFRX3HKpF0BGJIliDQlrqwCagomcEXnZHKzMVcJLHon2sjQ%2FlY9xGoOWAl8i35%2BaLhzIJLbW75fu7JhAW9CRz%2BtahulLfFrN2LtqCS04Cm%2BDfYw9DTs0LCmtRX1xje16ytBMNVDKfNhAK6WBIisD5oWz0&X-Amz-Signature=32752dd5e5427b69600caa949bea5d67efb2e33e56babb4db44c5abc5f7a1d54&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633OGCXIO%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCmF%2BY5yjKrbAWKdzQ8gBL%2B43KNXm%2F6k3tm%2FcumBwpvBAIgFBFyYO9N9T2r7T%2FeofRAYkCeOmwMLzWSD8W1qXjUYZgqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGKtMdQZ7WGHxDQx0yrcA6VUi1yGSyyWVL0GHAXdJ72b40IFD%2FbzPGZwqzRKanUhg6xbpSms06gLzfFazL9vJ0BWqQ7CdQBohPi1RtOPDtDiSne4NAxEBP2SW4qXtMOF7z%2F7LfSD0LiV%2BZIb4%2Bjk4nTCJLsi4K1Lfnvczbi5A%2BpUdsQOm1v6G8bsfh5%2BRgKh6KBg12u8hAHsKHEmYPvVlZuZzyej3k4aC4UQpvUZ7%2FYMoHNCRKuDfA1BHcvU3RgMzTIo5z829mWw6xYBlBGf4NCSVzYi%2FuNm%2BdTAXQ7gOEGhdCpk2W0kV3DFYnMi8ytydFGmyMmUUyqsG5cBTqKbTtUmhT0RJozabJtkWfFQ0XiKEFJFvHlittLrliIit8VRQ%2Flh5G%2FvCKGKss4uBGk7D2h6dhFGsssFlc%2FlcSNnZCx9MTaJdcC21zEix77%2FxWU2R31r35y03hZNi%2FzuRxkoO43CIJIFRyZMyedQidoiLrND3onlNpBdIq9%2BMAdvtvPV7OitM2BdkAOpfTrBL8egN%2FVsDEkpsbqpIkAW5k27H99oYNDM%2BkW0nin6gJGw51rj%2FpLQEpS89I0cJjoDipUHxaLhpelZ5%2FYtQIDBCo0f3aV7UyTofGLaguMJreGOBUQcCifp7RGpHSiofEWTMNiAp8AGOqUBhKCJAYb5ZAW2wouNuOM7%2B7SGWInsCbgpXyMvvfqNt1z%2FnzqG3a29%2Fh%2FxQzIN2X64tbNXFRX3HKpF0BGJIliDQlrqwCagomcEXnZHKzMVcJLHon2sjQ%2FlY9xGoOWAl8i35%2BaLhzIJLbW75fu7JhAW9CRz%2BtahulLfFrN2LtqCS04Cm%2BDfYw9DTs0LCmtRX1xje16ytBMNVDKfNhAK6WBIisD5oWz0&X-Amz-Signature=59c23df72e5d665c35c0b8d7a1697201bd8470a92392e42cd4626e0b72d364be&X-Amz-SignedHeaders=host&x-id=GetObject)
