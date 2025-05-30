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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUDK6UFF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQZ29vMSEIUxV%2BkodlAeawStRR916RDWIq8m9%2FP3Do1gIgD8uUo43nkwZLq%2FEb%2FFs%2FgwaaZFesd2qdltfBHFRwsncqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd9EZej6YFz1eRdUCrcA%2FCLmqm0lcmMOyPGZ4p9DsJxtfGmQ6sRR3%2ByAn%2BrPF%2Fo2NbwdM3zybeWVtpNMP4agb1G5nk8aOH6fRi7TWoG5o2FRTFoxNERns0FkulNwvgrwRbeJq1KcRqE1XvKV%2BL2kYNpxHGSfxJj79HFSaeQCaLGfFu1RbcNKqfEJnAjEwTs0dKJVJ1L%2BWkART1Jng1zFJS61LqmXrp%2BEudoND5ntedzEg4rIYaUXJ%2FevL1s1fH6RtyLlOQqfvxMnbef%2Fpmx4ccCvrCkV2yxje1sEWBAc8%2BljGj%2FTGDLzSVQYCBVTCG%2Bgm73aw094JUbk8GuDfgBtW0UXWOXwOt8VuaN2ztwbnZotN5shh8wau9F1y2w%2BVZ0KmSicjlwQ3%2FR%2BWfxFyK7hx864224lzqBht%2B1uonxMTMVce25YMim4IeM7M7RcvMAV6DGIdOrlvKN%2FOyCI6qvCrL30XuygVx44oYHQ6K4PSEucg3TCtJ8G0AMuCIrOjTuXOuKTXHqCJYwfMhJ%2BnlQRoqPyaszvtFgmyBVF5bgIE2z%2B57J4kD690ZIX%2BUdZRez6yXw7r4%2FyIXPgX1tbrxw9KwmrUut1RsQiad94Hr5a%2FxbzNOk4g73H4mrA7u1dmTGUYNA72hlPwPcO4ScMPqN5sEGOqUBDo1dQrmuYlXhYoGqFNQrffhtBiRTsRA3fqnrGAKTOSz%2Byd%2F6ec%2FfarL7penDJ5k7jcpBlhlwQ%2FQ0SKBrwdJF0zu531hPIzuVmVjcPgZsarQJgSKFany0xCrak%2FsAMKFULzZ3gJyzdkFEbtqaiOCsXsAnFZkPyMEliOHYs3NEAaGVtWmOP7oFrrli6KU%2B8fTQl6yyolzUPx6WnBoQf5SvaXSCKnES&X-Amz-Signature=9b5e7cba3840fe6ed46eccef7364927bd3a9017f148aff235edd8ca3b8b6d499&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUDK6UFF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQZ29vMSEIUxV%2BkodlAeawStRR916RDWIq8m9%2FP3Do1gIgD8uUo43nkwZLq%2FEb%2FFs%2FgwaaZFesd2qdltfBHFRwsncqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd9EZej6YFz1eRdUCrcA%2FCLmqm0lcmMOyPGZ4p9DsJxtfGmQ6sRR3%2ByAn%2BrPF%2Fo2NbwdM3zybeWVtpNMP4agb1G5nk8aOH6fRi7TWoG5o2FRTFoxNERns0FkulNwvgrwRbeJq1KcRqE1XvKV%2BL2kYNpxHGSfxJj79HFSaeQCaLGfFu1RbcNKqfEJnAjEwTs0dKJVJ1L%2BWkART1Jng1zFJS61LqmXrp%2BEudoND5ntedzEg4rIYaUXJ%2FevL1s1fH6RtyLlOQqfvxMnbef%2Fpmx4ccCvrCkV2yxje1sEWBAc8%2BljGj%2FTGDLzSVQYCBVTCG%2Bgm73aw094JUbk8GuDfgBtW0UXWOXwOt8VuaN2ztwbnZotN5shh8wau9F1y2w%2BVZ0KmSicjlwQ3%2FR%2BWfxFyK7hx864224lzqBht%2B1uonxMTMVce25YMim4IeM7M7RcvMAV6DGIdOrlvKN%2FOyCI6qvCrL30XuygVx44oYHQ6K4PSEucg3TCtJ8G0AMuCIrOjTuXOuKTXHqCJYwfMhJ%2BnlQRoqPyaszvtFgmyBVF5bgIE2z%2B57J4kD690ZIX%2BUdZRez6yXw7r4%2FyIXPgX1tbrxw9KwmrUut1RsQiad94Hr5a%2FxbzNOk4g73H4mrA7u1dmTGUYNA72hlPwPcO4ScMPqN5sEGOqUBDo1dQrmuYlXhYoGqFNQrffhtBiRTsRA3fqnrGAKTOSz%2Byd%2F6ec%2FfarL7penDJ5k7jcpBlhlwQ%2FQ0SKBrwdJF0zu531hPIzuVmVjcPgZsarQJgSKFany0xCrak%2FsAMKFULzZ3gJyzdkFEbtqaiOCsXsAnFZkPyMEliOHYs3NEAaGVtWmOP7oFrrli6KU%2B8fTQl6yyolzUPx6WnBoQf5SvaXSCKnES&X-Amz-Signature=036312f3acce85993958fd913622e46885307ff55df6c83fa6935c9a4449d8ea&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUDK6UFF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQZ29vMSEIUxV%2BkodlAeawStRR916RDWIq8m9%2FP3Do1gIgD8uUo43nkwZLq%2FEb%2FFs%2FgwaaZFesd2qdltfBHFRwsncqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd9EZej6YFz1eRdUCrcA%2FCLmqm0lcmMOyPGZ4p9DsJxtfGmQ6sRR3%2ByAn%2BrPF%2Fo2NbwdM3zybeWVtpNMP4agb1G5nk8aOH6fRi7TWoG5o2FRTFoxNERns0FkulNwvgrwRbeJq1KcRqE1XvKV%2BL2kYNpxHGSfxJj79HFSaeQCaLGfFu1RbcNKqfEJnAjEwTs0dKJVJ1L%2BWkART1Jng1zFJS61LqmXrp%2BEudoND5ntedzEg4rIYaUXJ%2FevL1s1fH6RtyLlOQqfvxMnbef%2Fpmx4ccCvrCkV2yxje1sEWBAc8%2BljGj%2FTGDLzSVQYCBVTCG%2Bgm73aw094JUbk8GuDfgBtW0UXWOXwOt8VuaN2ztwbnZotN5shh8wau9F1y2w%2BVZ0KmSicjlwQ3%2FR%2BWfxFyK7hx864224lzqBht%2B1uonxMTMVce25YMim4IeM7M7RcvMAV6DGIdOrlvKN%2FOyCI6qvCrL30XuygVx44oYHQ6K4PSEucg3TCtJ8G0AMuCIrOjTuXOuKTXHqCJYwfMhJ%2BnlQRoqPyaszvtFgmyBVF5bgIE2z%2B57J4kD690ZIX%2BUdZRez6yXw7r4%2FyIXPgX1tbrxw9KwmrUut1RsQiad94Hr5a%2FxbzNOk4g73H4mrA7u1dmTGUYNA72hlPwPcO4ScMPqN5sEGOqUBDo1dQrmuYlXhYoGqFNQrffhtBiRTsRA3fqnrGAKTOSz%2Byd%2F6ec%2FfarL7penDJ5k7jcpBlhlwQ%2FQ0SKBrwdJF0zu531hPIzuVmVjcPgZsarQJgSKFany0xCrak%2FsAMKFULzZ3gJyzdkFEbtqaiOCsXsAnFZkPyMEliOHYs3NEAaGVtWmOP7oFrrli6KU%2B8fTQl6yyolzUPx6WnBoQf5SvaXSCKnES&X-Amz-Signature=abf1ef7d4298b6910ad2c0828fef75a55d0d1195bbf968cb46de88dbed70070f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUDK6UFF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQZ29vMSEIUxV%2BkodlAeawStRR916RDWIq8m9%2FP3Do1gIgD8uUo43nkwZLq%2FEb%2FFs%2FgwaaZFesd2qdltfBHFRwsncqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd9EZej6YFz1eRdUCrcA%2FCLmqm0lcmMOyPGZ4p9DsJxtfGmQ6sRR3%2ByAn%2BrPF%2Fo2NbwdM3zybeWVtpNMP4agb1G5nk8aOH6fRi7TWoG5o2FRTFoxNERns0FkulNwvgrwRbeJq1KcRqE1XvKV%2BL2kYNpxHGSfxJj79HFSaeQCaLGfFu1RbcNKqfEJnAjEwTs0dKJVJ1L%2BWkART1Jng1zFJS61LqmXrp%2BEudoND5ntedzEg4rIYaUXJ%2FevL1s1fH6RtyLlOQqfvxMnbef%2Fpmx4ccCvrCkV2yxje1sEWBAc8%2BljGj%2FTGDLzSVQYCBVTCG%2Bgm73aw094JUbk8GuDfgBtW0UXWOXwOt8VuaN2ztwbnZotN5shh8wau9F1y2w%2BVZ0KmSicjlwQ3%2FR%2BWfxFyK7hx864224lzqBht%2B1uonxMTMVce25YMim4IeM7M7RcvMAV6DGIdOrlvKN%2FOyCI6qvCrL30XuygVx44oYHQ6K4PSEucg3TCtJ8G0AMuCIrOjTuXOuKTXHqCJYwfMhJ%2BnlQRoqPyaszvtFgmyBVF5bgIE2z%2B57J4kD690ZIX%2BUdZRez6yXw7r4%2FyIXPgX1tbrxw9KwmrUut1RsQiad94Hr5a%2FxbzNOk4g73H4mrA7u1dmTGUYNA72hlPwPcO4ScMPqN5sEGOqUBDo1dQrmuYlXhYoGqFNQrffhtBiRTsRA3fqnrGAKTOSz%2Byd%2F6ec%2FfarL7penDJ5k7jcpBlhlwQ%2FQ0SKBrwdJF0zu531hPIzuVmVjcPgZsarQJgSKFany0xCrak%2FsAMKFULzZ3gJyzdkFEbtqaiOCsXsAnFZkPyMEliOHYs3NEAaGVtWmOP7oFrrli6KU%2B8fTQl6yyolzUPx6WnBoQf5SvaXSCKnES&X-Amz-Signature=cb58ecf1a5f86b479b695eee37b06c949b080fb2a36623cb0a3ad26bc6b3bcf3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUDK6UFF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQZ29vMSEIUxV%2BkodlAeawStRR916RDWIq8m9%2FP3Do1gIgD8uUo43nkwZLq%2FEb%2FFs%2FgwaaZFesd2qdltfBHFRwsncqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd9EZej6YFz1eRdUCrcA%2FCLmqm0lcmMOyPGZ4p9DsJxtfGmQ6sRR3%2ByAn%2BrPF%2Fo2NbwdM3zybeWVtpNMP4agb1G5nk8aOH6fRi7TWoG5o2FRTFoxNERns0FkulNwvgrwRbeJq1KcRqE1XvKV%2BL2kYNpxHGSfxJj79HFSaeQCaLGfFu1RbcNKqfEJnAjEwTs0dKJVJ1L%2BWkART1Jng1zFJS61LqmXrp%2BEudoND5ntedzEg4rIYaUXJ%2FevL1s1fH6RtyLlOQqfvxMnbef%2Fpmx4ccCvrCkV2yxje1sEWBAc8%2BljGj%2FTGDLzSVQYCBVTCG%2Bgm73aw094JUbk8GuDfgBtW0UXWOXwOt8VuaN2ztwbnZotN5shh8wau9F1y2w%2BVZ0KmSicjlwQ3%2FR%2BWfxFyK7hx864224lzqBht%2B1uonxMTMVce25YMim4IeM7M7RcvMAV6DGIdOrlvKN%2FOyCI6qvCrL30XuygVx44oYHQ6K4PSEucg3TCtJ8G0AMuCIrOjTuXOuKTXHqCJYwfMhJ%2BnlQRoqPyaszvtFgmyBVF5bgIE2z%2B57J4kD690ZIX%2BUdZRez6yXw7r4%2FyIXPgX1tbrxw9KwmrUut1RsQiad94Hr5a%2FxbzNOk4g73H4mrA7u1dmTGUYNA72hlPwPcO4ScMPqN5sEGOqUBDo1dQrmuYlXhYoGqFNQrffhtBiRTsRA3fqnrGAKTOSz%2Byd%2F6ec%2FfarL7penDJ5k7jcpBlhlwQ%2FQ0SKBrwdJF0zu531hPIzuVmVjcPgZsarQJgSKFany0xCrak%2FsAMKFULzZ3gJyzdkFEbtqaiOCsXsAnFZkPyMEliOHYs3NEAaGVtWmOP7oFrrli6KU%2B8fTQl6yyolzUPx6WnBoQf5SvaXSCKnES&X-Amz-Signature=688ccdedbaac7c7b3d944fb28a92a93794939c5f0e69c1d3cda6088280e7e0e3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUDK6UFF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQZ29vMSEIUxV%2BkodlAeawStRR916RDWIq8m9%2FP3Do1gIgD8uUo43nkwZLq%2FEb%2FFs%2FgwaaZFesd2qdltfBHFRwsncqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd9EZej6YFz1eRdUCrcA%2FCLmqm0lcmMOyPGZ4p9DsJxtfGmQ6sRR3%2ByAn%2BrPF%2Fo2NbwdM3zybeWVtpNMP4agb1G5nk8aOH6fRi7TWoG5o2FRTFoxNERns0FkulNwvgrwRbeJq1KcRqE1XvKV%2BL2kYNpxHGSfxJj79HFSaeQCaLGfFu1RbcNKqfEJnAjEwTs0dKJVJ1L%2BWkART1Jng1zFJS61LqmXrp%2BEudoND5ntedzEg4rIYaUXJ%2FevL1s1fH6RtyLlOQqfvxMnbef%2Fpmx4ccCvrCkV2yxje1sEWBAc8%2BljGj%2FTGDLzSVQYCBVTCG%2Bgm73aw094JUbk8GuDfgBtW0UXWOXwOt8VuaN2ztwbnZotN5shh8wau9F1y2w%2BVZ0KmSicjlwQ3%2FR%2BWfxFyK7hx864224lzqBht%2B1uonxMTMVce25YMim4IeM7M7RcvMAV6DGIdOrlvKN%2FOyCI6qvCrL30XuygVx44oYHQ6K4PSEucg3TCtJ8G0AMuCIrOjTuXOuKTXHqCJYwfMhJ%2BnlQRoqPyaszvtFgmyBVF5bgIE2z%2B57J4kD690ZIX%2BUdZRez6yXw7r4%2FyIXPgX1tbrxw9KwmrUut1RsQiad94Hr5a%2FxbzNOk4g73H4mrA7u1dmTGUYNA72hlPwPcO4ScMPqN5sEGOqUBDo1dQrmuYlXhYoGqFNQrffhtBiRTsRA3fqnrGAKTOSz%2Byd%2F6ec%2FfarL7penDJ5k7jcpBlhlwQ%2FQ0SKBrwdJF0zu531hPIzuVmVjcPgZsarQJgSKFany0xCrak%2FsAMKFULzZ3gJyzdkFEbtqaiOCsXsAnFZkPyMEliOHYs3NEAaGVtWmOP7oFrrli6KU%2B8fTQl6yyolzUPx6WnBoQf5SvaXSCKnES&X-Amz-Signature=c830c8a5f694ddaee3334291fabbaee570d6e97f224db56ee9a33352098149bc&X-Amz-SignedHeaders=host&x-id=GetObject)
