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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7666ZBO%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChm8kt4DMI8ZDB1V%2BRhHEmQpEKF5Ccw5JEWvEhaELOUAiEA3UrUruAvbNJKF7DwPyFX%2FTF%2B2dRIAQ3lpvheA%2FclV3oqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BmZhdAcaajx3XH%2FyrcA%2FC2NIZnzdfUo77JWRpilYLq%2F5YYnH8T%2FqUGuYdiGsBtJYMFOCEzOkWxuUdiwvHCyRnzBGPQvrSBpgv2ybhpl%2F0GlfDL7Qok7RX%2BFgrN2TnH0HHEizgfAbnpUCMryAfqGg9WjxyM%2BfVmzetKr%2BsAKAnW4AmyN8IbZWkhkKV%2Bb8ZWT%2F18oafBiKAwYIhyYHB9fXgOiQyffLuPD9xjf82P3a2yWa8PGqm4d1LLfuP5jCG7ZMEptIUCp1D8NihkZ%2FhdJgqmr62HnPMN4LswfgsFHPKDqqnhfqXQjW6dOLB1HN7EImvnzAVz5PSuLUiCF5rRYAOq1KBG6xs7HlEV8Ed9qKuBN9jx%2FS%2F9EWGO%2FhDqMChB7fJ51CVLjJH62cYFFyYUEivV5tTQMN1%2FML44Cwis1BzNGxMpxLp1PdZJgowAxKm3Pah6DYEO99ImwWXMFw6iQrSQbl%2Bkls8jpoG1LgCXnP684X%2BMKCcv70NEiVGUwBsepALf%2BL9cqGvEL1X6brUsJRHB%2BFkRneK3KeIAjGPeKlBHDu1AChDUJjfgvKkC2eQFzgmOq%2BcByv75XVFMlx6q197RYtqe2H0W7O3fuACPQapLuKsZafF%2BzHJYRdcj1jpWgGVFjRUCp63B4gzBMNKiyMMGOqUBE%2F3NmLFZHcTRRfMKpKfcm1Jzjd31Ja0U%2BQqcbUsaYjcbKWxPlVyJfpFzV9NeZWW04UOCCTHc2%2Fm%2FF%2FVmtAYYoKxn%2FoqD%2BwBZ62Omq22TyizbtugJmw27J9UPFpGiZg0LASv3bjOrc8ykM2T27%2F0efLQZmIUB7SXWtRsPsXZTVA5ejhbAAbYo6OwCtFXt9gMZCzjrlPoXFsPae52g%2FgGyy%2F0LYsAx&X-Amz-Signature=6bb91686bbcc98313319f406d81f88b2f405546eb6955f0b65d8364f85679200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7666ZBO%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChm8kt4DMI8ZDB1V%2BRhHEmQpEKF5Ccw5JEWvEhaELOUAiEA3UrUruAvbNJKF7DwPyFX%2FTF%2B2dRIAQ3lpvheA%2FclV3oqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BmZhdAcaajx3XH%2FyrcA%2FC2NIZnzdfUo77JWRpilYLq%2F5YYnH8T%2FqUGuYdiGsBtJYMFOCEzOkWxuUdiwvHCyRnzBGPQvrSBpgv2ybhpl%2F0GlfDL7Qok7RX%2BFgrN2TnH0HHEizgfAbnpUCMryAfqGg9WjxyM%2BfVmzetKr%2BsAKAnW4AmyN8IbZWkhkKV%2Bb8ZWT%2F18oafBiKAwYIhyYHB9fXgOiQyffLuPD9xjf82P3a2yWa8PGqm4d1LLfuP5jCG7ZMEptIUCp1D8NihkZ%2FhdJgqmr62HnPMN4LswfgsFHPKDqqnhfqXQjW6dOLB1HN7EImvnzAVz5PSuLUiCF5rRYAOq1KBG6xs7HlEV8Ed9qKuBN9jx%2FS%2F9EWGO%2FhDqMChB7fJ51CVLjJH62cYFFyYUEivV5tTQMN1%2FML44Cwis1BzNGxMpxLp1PdZJgowAxKm3Pah6DYEO99ImwWXMFw6iQrSQbl%2Bkls8jpoG1LgCXnP684X%2BMKCcv70NEiVGUwBsepALf%2BL9cqGvEL1X6brUsJRHB%2BFkRneK3KeIAjGPeKlBHDu1AChDUJjfgvKkC2eQFzgmOq%2BcByv75XVFMlx6q197RYtqe2H0W7O3fuACPQapLuKsZafF%2BzHJYRdcj1jpWgGVFjRUCp63B4gzBMNKiyMMGOqUBE%2F3NmLFZHcTRRfMKpKfcm1Jzjd31Ja0U%2BQqcbUsaYjcbKWxPlVyJfpFzV9NeZWW04UOCCTHc2%2Fm%2FF%2FVmtAYYoKxn%2FoqD%2BwBZ62Omq22TyizbtugJmw27J9UPFpGiZg0LASv3bjOrc8ykM2T27%2F0efLQZmIUB7SXWtRsPsXZTVA5ejhbAAbYo6OwCtFXt9gMZCzjrlPoXFsPae52g%2FgGyy%2F0LYsAx&X-Amz-Signature=41dac88973d5f11817b4b6c4f299d8231623feeaaf782c6c094af967b3e1cd5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7666ZBO%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChm8kt4DMI8ZDB1V%2BRhHEmQpEKF5Ccw5JEWvEhaELOUAiEA3UrUruAvbNJKF7DwPyFX%2FTF%2B2dRIAQ3lpvheA%2FclV3oqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BmZhdAcaajx3XH%2FyrcA%2FC2NIZnzdfUo77JWRpilYLq%2F5YYnH8T%2FqUGuYdiGsBtJYMFOCEzOkWxuUdiwvHCyRnzBGPQvrSBpgv2ybhpl%2F0GlfDL7Qok7RX%2BFgrN2TnH0HHEizgfAbnpUCMryAfqGg9WjxyM%2BfVmzetKr%2BsAKAnW4AmyN8IbZWkhkKV%2Bb8ZWT%2F18oafBiKAwYIhyYHB9fXgOiQyffLuPD9xjf82P3a2yWa8PGqm4d1LLfuP5jCG7ZMEptIUCp1D8NihkZ%2FhdJgqmr62HnPMN4LswfgsFHPKDqqnhfqXQjW6dOLB1HN7EImvnzAVz5PSuLUiCF5rRYAOq1KBG6xs7HlEV8Ed9qKuBN9jx%2FS%2F9EWGO%2FhDqMChB7fJ51CVLjJH62cYFFyYUEivV5tTQMN1%2FML44Cwis1BzNGxMpxLp1PdZJgowAxKm3Pah6DYEO99ImwWXMFw6iQrSQbl%2Bkls8jpoG1LgCXnP684X%2BMKCcv70NEiVGUwBsepALf%2BL9cqGvEL1X6brUsJRHB%2BFkRneK3KeIAjGPeKlBHDu1AChDUJjfgvKkC2eQFzgmOq%2BcByv75XVFMlx6q197RYtqe2H0W7O3fuACPQapLuKsZafF%2BzHJYRdcj1jpWgGVFjRUCp63B4gzBMNKiyMMGOqUBE%2F3NmLFZHcTRRfMKpKfcm1Jzjd31Ja0U%2BQqcbUsaYjcbKWxPlVyJfpFzV9NeZWW04UOCCTHc2%2Fm%2FF%2FVmtAYYoKxn%2FoqD%2BwBZ62Omq22TyizbtugJmw27J9UPFpGiZg0LASv3bjOrc8ykM2T27%2F0efLQZmIUB7SXWtRsPsXZTVA5ejhbAAbYo6OwCtFXt9gMZCzjrlPoXFsPae52g%2FgGyy%2F0LYsAx&X-Amz-Signature=39b920c3867b52dd665e94954f89bdf852a882a15145c392bc106f3e35f2c199&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7666ZBO%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChm8kt4DMI8ZDB1V%2BRhHEmQpEKF5Ccw5JEWvEhaELOUAiEA3UrUruAvbNJKF7DwPyFX%2FTF%2B2dRIAQ3lpvheA%2FclV3oqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BmZhdAcaajx3XH%2FyrcA%2FC2NIZnzdfUo77JWRpilYLq%2F5YYnH8T%2FqUGuYdiGsBtJYMFOCEzOkWxuUdiwvHCyRnzBGPQvrSBpgv2ybhpl%2F0GlfDL7Qok7RX%2BFgrN2TnH0HHEizgfAbnpUCMryAfqGg9WjxyM%2BfVmzetKr%2BsAKAnW4AmyN8IbZWkhkKV%2Bb8ZWT%2F18oafBiKAwYIhyYHB9fXgOiQyffLuPD9xjf82P3a2yWa8PGqm4d1LLfuP5jCG7ZMEptIUCp1D8NihkZ%2FhdJgqmr62HnPMN4LswfgsFHPKDqqnhfqXQjW6dOLB1HN7EImvnzAVz5PSuLUiCF5rRYAOq1KBG6xs7HlEV8Ed9qKuBN9jx%2FS%2F9EWGO%2FhDqMChB7fJ51CVLjJH62cYFFyYUEivV5tTQMN1%2FML44Cwis1BzNGxMpxLp1PdZJgowAxKm3Pah6DYEO99ImwWXMFw6iQrSQbl%2Bkls8jpoG1LgCXnP684X%2BMKCcv70NEiVGUwBsepALf%2BL9cqGvEL1X6brUsJRHB%2BFkRneK3KeIAjGPeKlBHDu1AChDUJjfgvKkC2eQFzgmOq%2BcByv75XVFMlx6q197RYtqe2H0W7O3fuACPQapLuKsZafF%2BzHJYRdcj1jpWgGVFjRUCp63B4gzBMNKiyMMGOqUBE%2F3NmLFZHcTRRfMKpKfcm1Jzjd31Ja0U%2BQqcbUsaYjcbKWxPlVyJfpFzV9NeZWW04UOCCTHc2%2Fm%2FF%2FVmtAYYoKxn%2FoqD%2BwBZ62Omq22TyizbtugJmw27J9UPFpGiZg0LASv3bjOrc8ykM2T27%2F0efLQZmIUB7SXWtRsPsXZTVA5ejhbAAbYo6OwCtFXt9gMZCzjrlPoXFsPae52g%2FgGyy%2F0LYsAx&X-Amz-Signature=9ad280467fb72044bb63c55101e962288de3f3f4bcbd21b56bcf169fc4232ab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7666ZBO%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChm8kt4DMI8ZDB1V%2BRhHEmQpEKF5Ccw5JEWvEhaELOUAiEA3UrUruAvbNJKF7DwPyFX%2FTF%2B2dRIAQ3lpvheA%2FclV3oqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BmZhdAcaajx3XH%2FyrcA%2FC2NIZnzdfUo77JWRpilYLq%2F5YYnH8T%2FqUGuYdiGsBtJYMFOCEzOkWxuUdiwvHCyRnzBGPQvrSBpgv2ybhpl%2F0GlfDL7Qok7RX%2BFgrN2TnH0HHEizgfAbnpUCMryAfqGg9WjxyM%2BfVmzetKr%2BsAKAnW4AmyN8IbZWkhkKV%2Bb8ZWT%2F18oafBiKAwYIhyYHB9fXgOiQyffLuPD9xjf82P3a2yWa8PGqm4d1LLfuP5jCG7ZMEptIUCp1D8NihkZ%2FhdJgqmr62HnPMN4LswfgsFHPKDqqnhfqXQjW6dOLB1HN7EImvnzAVz5PSuLUiCF5rRYAOq1KBG6xs7HlEV8Ed9qKuBN9jx%2FS%2F9EWGO%2FhDqMChB7fJ51CVLjJH62cYFFyYUEivV5tTQMN1%2FML44Cwis1BzNGxMpxLp1PdZJgowAxKm3Pah6DYEO99ImwWXMFw6iQrSQbl%2Bkls8jpoG1LgCXnP684X%2BMKCcv70NEiVGUwBsepALf%2BL9cqGvEL1X6brUsJRHB%2BFkRneK3KeIAjGPeKlBHDu1AChDUJjfgvKkC2eQFzgmOq%2BcByv75XVFMlx6q197RYtqe2H0W7O3fuACPQapLuKsZafF%2BzHJYRdcj1jpWgGVFjRUCp63B4gzBMNKiyMMGOqUBE%2F3NmLFZHcTRRfMKpKfcm1Jzjd31Ja0U%2BQqcbUsaYjcbKWxPlVyJfpFzV9NeZWW04UOCCTHc2%2Fm%2FF%2FVmtAYYoKxn%2FoqD%2BwBZ62Omq22TyizbtugJmw27J9UPFpGiZg0LASv3bjOrc8ykM2T27%2F0efLQZmIUB7SXWtRsPsXZTVA5ejhbAAbYo6OwCtFXt9gMZCzjrlPoXFsPae52g%2FgGyy%2F0LYsAx&X-Amz-Signature=34b90cf42a5dcdb0de11d7ecc9e74b60997b63854b82d46d0b1e1af1581f7e8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7666ZBO%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChm8kt4DMI8ZDB1V%2BRhHEmQpEKF5Ccw5JEWvEhaELOUAiEA3UrUruAvbNJKF7DwPyFX%2FTF%2B2dRIAQ3lpvheA%2FclV3oqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BmZhdAcaajx3XH%2FyrcA%2FC2NIZnzdfUo77JWRpilYLq%2F5YYnH8T%2FqUGuYdiGsBtJYMFOCEzOkWxuUdiwvHCyRnzBGPQvrSBpgv2ybhpl%2F0GlfDL7Qok7RX%2BFgrN2TnH0HHEizgfAbnpUCMryAfqGg9WjxyM%2BfVmzetKr%2BsAKAnW4AmyN8IbZWkhkKV%2Bb8ZWT%2F18oafBiKAwYIhyYHB9fXgOiQyffLuPD9xjf82P3a2yWa8PGqm4d1LLfuP5jCG7ZMEptIUCp1D8NihkZ%2FhdJgqmr62HnPMN4LswfgsFHPKDqqnhfqXQjW6dOLB1HN7EImvnzAVz5PSuLUiCF5rRYAOq1KBG6xs7HlEV8Ed9qKuBN9jx%2FS%2F9EWGO%2FhDqMChB7fJ51CVLjJH62cYFFyYUEivV5tTQMN1%2FML44Cwis1BzNGxMpxLp1PdZJgowAxKm3Pah6DYEO99ImwWXMFw6iQrSQbl%2Bkls8jpoG1LgCXnP684X%2BMKCcv70NEiVGUwBsepALf%2BL9cqGvEL1X6brUsJRHB%2BFkRneK3KeIAjGPeKlBHDu1AChDUJjfgvKkC2eQFzgmOq%2BcByv75XVFMlx6q197RYtqe2H0W7O3fuACPQapLuKsZafF%2BzHJYRdcj1jpWgGVFjRUCp63B4gzBMNKiyMMGOqUBE%2F3NmLFZHcTRRfMKpKfcm1Jzjd31Ja0U%2BQqcbUsaYjcbKWxPlVyJfpFzV9NeZWW04UOCCTHc2%2Fm%2FF%2FVmtAYYoKxn%2FoqD%2BwBZ62Omq22TyizbtugJmw27J9UPFpGiZg0LASv3bjOrc8ykM2T27%2F0efLQZmIUB7SXWtRsPsXZTVA5ejhbAAbYo6OwCtFXt9gMZCzjrlPoXFsPae52g%2FgGyy%2F0LYsAx&X-Amz-Signature=3bdd31d81149222b848f3e86c44c6ab667358a906f99b01bd7ce329d847e2faf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
