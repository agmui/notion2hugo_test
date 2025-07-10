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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX5JNY67%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnaE9M%2BDueaDCHcU8fkMvKRkUoSDB%2Bd2ZkTqexVMJ7WAiEAr%2FrhA1njm1fp2eZ2tnWP66spQ8a2yUfpMTBpWGUl0CAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNe86gx2KTjctQgsgyrcA5nL3Hb1jlxCJqA0OJYI74ovsRRR9ypu9xTdhP9%2BQNLNdIecMBbqcCs2xgI6toiWXVRf9QyiZI4Y22kIoRWTZzNFrn%2FyXxdT3%2FkVlB95QyAmve2%2FwDGfwWQz%2F%2BqurSb0bt2Jf2HH2zQQtZg2bF6FX3ZBBC1%2Bt6Chzz7IIGMOBaqWDXBk%2FMEOiQjC6GXQOWQ3necKOWGL1afl7xTucGqIZGsmz3ljnJjasOealFAHKVPGQciHRVPWwSBWlV23mGCA2w5Zel22AHx0EETVop%2FzzDlXSKJOaJS0JULVoUe%2BeBuNImk2YeGXRB3LgaEiIPIcxTK5BOTL8zkzYelyR2%2FaXTuvsWB%2F%2FZDdBNDyv8RD4UJ99UdZod2KWiSB8X0NSXiQSJvYGU9sTaatqJJghKBpWnRD6gZ3hfLGk1q3hjcGisSBaGRwlp%2BUvgbOwCWDxQQUBvb0pSps0okdKyCJAeTSc8Kmw2UqKkpMG40yz2vnfEXAa%2FVYpORte3wse%2BJFp%2B45lEWIGC7MOamKCSZkRFZo4uutHWr3EwMftzLjElgSMGo1GreZzuyNhgyON5qGhLyqZTKPQSYnmoCWBeFqnc1cAXvcuC2%2FMLS2QYZB09YBbnEZNQfBQdipUl%2Bs02WeMPuovcMGOqUBdp8jMjbcufZvBmhvNixHUzwby8%2FTA5u%2FSGHQBvuczrjcQqHHXHpvGu4yY%2Bg87%2F8g6iUgBh2nc0w6ATUk70FkXCdD55vPtohWbDywYWtinBD3CfAE%2B2xjAF3wtxbOjeBag6pQ6p4CC9vVWXjFjAdtB3uXjAzb2hSuXUGWdhX7FCUOfHCwxNxPArIaQz2wvryT1FhQOGoS%2BgCJSoqxvbpePUwUqIZJ&X-Amz-Signature=a5269316a330d45cfd435e295854abefa8b808786005b96eb42404bf8360be65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX5JNY67%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnaE9M%2BDueaDCHcU8fkMvKRkUoSDB%2Bd2ZkTqexVMJ7WAiEAr%2FrhA1njm1fp2eZ2tnWP66spQ8a2yUfpMTBpWGUl0CAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNe86gx2KTjctQgsgyrcA5nL3Hb1jlxCJqA0OJYI74ovsRRR9ypu9xTdhP9%2BQNLNdIecMBbqcCs2xgI6toiWXVRf9QyiZI4Y22kIoRWTZzNFrn%2FyXxdT3%2FkVlB95QyAmve2%2FwDGfwWQz%2F%2BqurSb0bt2Jf2HH2zQQtZg2bF6FX3ZBBC1%2Bt6Chzz7IIGMOBaqWDXBk%2FMEOiQjC6GXQOWQ3necKOWGL1afl7xTucGqIZGsmz3ljnJjasOealFAHKVPGQciHRVPWwSBWlV23mGCA2w5Zel22AHx0EETVop%2FzzDlXSKJOaJS0JULVoUe%2BeBuNImk2YeGXRB3LgaEiIPIcxTK5BOTL8zkzYelyR2%2FaXTuvsWB%2F%2FZDdBNDyv8RD4UJ99UdZod2KWiSB8X0NSXiQSJvYGU9sTaatqJJghKBpWnRD6gZ3hfLGk1q3hjcGisSBaGRwlp%2BUvgbOwCWDxQQUBvb0pSps0okdKyCJAeTSc8Kmw2UqKkpMG40yz2vnfEXAa%2FVYpORte3wse%2BJFp%2B45lEWIGC7MOamKCSZkRFZo4uutHWr3EwMftzLjElgSMGo1GreZzuyNhgyON5qGhLyqZTKPQSYnmoCWBeFqnc1cAXvcuC2%2FMLS2QYZB09YBbnEZNQfBQdipUl%2Bs02WeMPuovcMGOqUBdp8jMjbcufZvBmhvNixHUzwby8%2FTA5u%2FSGHQBvuczrjcQqHHXHpvGu4yY%2Bg87%2F8g6iUgBh2nc0w6ATUk70FkXCdD55vPtohWbDywYWtinBD3CfAE%2B2xjAF3wtxbOjeBag6pQ6p4CC9vVWXjFjAdtB3uXjAzb2hSuXUGWdhX7FCUOfHCwxNxPArIaQz2wvryT1FhQOGoS%2BgCJSoqxvbpePUwUqIZJ&X-Amz-Signature=391a37ba89c8c65af7ae846d025276e38a84e17a060669425398152e6977ae72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX5JNY67%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnaE9M%2BDueaDCHcU8fkMvKRkUoSDB%2Bd2ZkTqexVMJ7WAiEAr%2FrhA1njm1fp2eZ2tnWP66spQ8a2yUfpMTBpWGUl0CAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNe86gx2KTjctQgsgyrcA5nL3Hb1jlxCJqA0OJYI74ovsRRR9ypu9xTdhP9%2BQNLNdIecMBbqcCs2xgI6toiWXVRf9QyiZI4Y22kIoRWTZzNFrn%2FyXxdT3%2FkVlB95QyAmve2%2FwDGfwWQz%2F%2BqurSb0bt2Jf2HH2zQQtZg2bF6FX3ZBBC1%2Bt6Chzz7IIGMOBaqWDXBk%2FMEOiQjC6GXQOWQ3necKOWGL1afl7xTucGqIZGsmz3ljnJjasOealFAHKVPGQciHRVPWwSBWlV23mGCA2w5Zel22AHx0EETVop%2FzzDlXSKJOaJS0JULVoUe%2BeBuNImk2YeGXRB3LgaEiIPIcxTK5BOTL8zkzYelyR2%2FaXTuvsWB%2F%2FZDdBNDyv8RD4UJ99UdZod2KWiSB8X0NSXiQSJvYGU9sTaatqJJghKBpWnRD6gZ3hfLGk1q3hjcGisSBaGRwlp%2BUvgbOwCWDxQQUBvb0pSps0okdKyCJAeTSc8Kmw2UqKkpMG40yz2vnfEXAa%2FVYpORte3wse%2BJFp%2B45lEWIGC7MOamKCSZkRFZo4uutHWr3EwMftzLjElgSMGo1GreZzuyNhgyON5qGhLyqZTKPQSYnmoCWBeFqnc1cAXvcuC2%2FMLS2QYZB09YBbnEZNQfBQdipUl%2Bs02WeMPuovcMGOqUBdp8jMjbcufZvBmhvNixHUzwby8%2FTA5u%2FSGHQBvuczrjcQqHHXHpvGu4yY%2Bg87%2F8g6iUgBh2nc0w6ATUk70FkXCdD55vPtohWbDywYWtinBD3CfAE%2B2xjAF3wtxbOjeBag6pQ6p4CC9vVWXjFjAdtB3uXjAzb2hSuXUGWdhX7FCUOfHCwxNxPArIaQz2wvryT1FhQOGoS%2BgCJSoqxvbpePUwUqIZJ&X-Amz-Signature=ad7126ebd34c9b6ede6adbc026fcc6d1595105472da99a558bbc724360d95f04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX5JNY67%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnaE9M%2BDueaDCHcU8fkMvKRkUoSDB%2Bd2ZkTqexVMJ7WAiEAr%2FrhA1njm1fp2eZ2tnWP66spQ8a2yUfpMTBpWGUl0CAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNe86gx2KTjctQgsgyrcA5nL3Hb1jlxCJqA0OJYI74ovsRRR9ypu9xTdhP9%2BQNLNdIecMBbqcCs2xgI6toiWXVRf9QyiZI4Y22kIoRWTZzNFrn%2FyXxdT3%2FkVlB95QyAmve2%2FwDGfwWQz%2F%2BqurSb0bt2Jf2HH2zQQtZg2bF6FX3ZBBC1%2Bt6Chzz7IIGMOBaqWDXBk%2FMEOiQjC6GXQOWQ3necKOWGL1afl7xTucGqIZGsmz3ljnJjasOealFAHKVPGQciHRVPWwSBWlV23mGCA2w5Zel22AHx0EETVop%2FzzDlXSKJOaJS0JULVoUe%2BeBuNImk2YeGXRB3LgaEiIPIcxTK5BOTL8zkzYelyR2%2FaXTuvsWB%2F%2FZDdBNDyv8RD4UJ99UdZod2KWiSB8X0NSXiQSJvYGU9sTaatqJJghKBpWnRD6gZ3hfLGk1q3hjcGisSBaGRwlp%2BUvgbOwCWDxQQUBvb0pSps0okdKyCJAeTSc8Kmw2UqKkpMG40yz2vnfEXAa%2FVYpORte3wse%2BJFp%2B45lEWIGC7MOamKCSZkRFZo4uutHWr3EwMftzLjElgSMGo1GreZzuyNhgyON5qGhLyqZTKPQSYnmoCWBeFqnc1cAXvcuC2%2FMLS2QYZB09YBbnEZNQfBQdipUl%2Bs02WeMPuovcMGOqUBdp8jMjbcufZvBmhvNixHUzwby8%2FTA5u%2FSGHQBvuczrjcQqHHXHpvGu4yY%2Bg87%2F8g6iUgBh2nc0w6ATUk70FkXCdD55vPtohWbDywYWtinBD3CfAE%2B2xjAF3wtxbOjeBag6pQ6p4CC9vVWXjFjAdtB3uXjAzb2hSuXUGWdhX7FCUOfHCwxNxPArIaQz2wvryT1FhQOGoS%2BgCJSoqxvbpePUwUqIZJ&X-Amz-Signature=441ed5823f6b9bbc2a5900827ac58805025fe4b24488d117c55025ad1f0b53e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX5JNY67%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnaE9M%2BDueaDCHcU8fkMvKRkUoSDB%2Bd2ZkTqexVMJ7WAiEAr%2FrhA1njm1fp2eZ2tnWP66spQ8a2yUfpMTBpWGUl0CAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNe86gx2KTjctQgsgyrcA5nL3Hb1jlxCJqA0OJYI74ovsRRR9ypu9xTdhP9%2BQNLNdIecMBbqcCs2xgI6toiWXVRf9QyiZI4Y22kIoRWTZzNFrn%2FyXxdT3%2FkVlB95QyAmve2%2FwDGfwWQz%2F%2BqurSb0bt2Jf2HH2zQQtZg2bF6FX3ZBBC1%2Bt6Chzz7IIGMOBaqWDXBk%2FMEOiQjC6GXQOWQ3necKOWGL1afl7xTucGqIZGsmz3ljnJjasOealFAHKVPGQciHRVPWwSBWlV23mGCA2w5Zel22AHx0EETVop%2FzzDlXSKJOaJS0JULVoUe%2BeBuNImk2YeGXRB3LgaEiIPIcxTK5BOTL8zkzYelyR2%2FaXTuvsWB%2F%2FZDdBNDyv8RD4UJ99UdZod2KWiSB8X0NSXiQSJvYGU9sTaatqJJghKBpWnRD6gZ3hfLGk1q3hjcGisSBaGRwlp%2BUvgbOwCWDxQQUBvb0pSps0okdKyCJAeTSc8Kmw2UqKkpMG40yz2vnfEXAa%2FVYpORte3wse%2BJFp%2B45lEWIGC7MOamKCSZkRFZo4uutHWr3EwMftzLjElgSMGo1GreZzuyNhgyON5qGhLyqZTKPQSYnmoCWBeFqnc1cAXvcuC2%2FMLS2QYZB09YBbnEZNQfBQdipUl%2Bs02WeMPuovcMGOqUBdp8jMjbcufZvBmhvNixHUzwby8%2FTA5u%2FSGHQBvuczrjcQqHHXHpvGu4yY%2Bg87%2F8g6iUgBh2nc0w6ATUk70FkXCdD55vPtohWbDywYWtinBD3CfAE%2B2xjAF3wtxbOjeBag6pQ6p4CC9vVWXjFjAdtB3uXjAzb2hSuXUGWdhX7FCUOfHCwxNxPArIaQz2wvryT1FhQOGoS%2BgCJSoqxvbpePUwUqIZJ&X-Amz-Signature=0b261b694c7cb922f11bc80a11257092fa261b30839f98b1b2ee858450232f7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX5JNY67%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnaE9M%2BDueaDCHcU8fkMvKRkUoSDB%2Bd2ZkTqexVMJ7WAiEAr%2FrhA1njm1fp2eZ2tnWP66spQ8a2yUfpMTBpWGUl0CAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNe86gx2KTjctQgsgyrcA5nL3Hb1jlxCJqA0OJYI74ovsRRR9ypu9xTdhP9%2BQNLNdIecMBbqcCs2xgI6toiWXVRf9QyiZI4Y22kIoRWTZzNFrn%2FyXxdT3%2FkVlB95QyAmve2%2FwDGfwWQz%2F%2BqurSb0bt2Jf2HH2zQQtZg2bF6FX3ZBBC1%2Bt6Chzz7IIGMOBaqWDXBk%2FMEOiQjC6GXQOWQ3necKOWGL1afl7xTucGqIZGsmz3ljnJjasOealFAHKVPGQciHRVPWwSBWlV23mGCA2w5Zel22AHx0EETVop%2FzzDlXSKJOaJS0JULVoUe%2BeBuNImk2YeGXRB3LgaEiIPIcxTK5BOTL8zkzYelyR2%2FaXTuvsWB%2F%2FZDdBNDyv8RD4UJ99UdZod2KWiSB8X0NSXiQSJvYGU9sTaatqJJghKBpWnRD6gZ3hfLGk1q3hjcGisSBaGRwlp%2BUvgbOwCWDxQQUBvb0pSps0okdKyCJAeTSc8Kmw2UqKkpMG40yz2vnfEXAa%2FVYpORte3wse%2BJFp%2B45lEWIGC7MOamKCSZkRFZo4uutHWr3EwMftzLjElgSMGo1GreZzuyNhgyON5qGhLyqZTKPQSYnmoCWBeFqnc1cAXvcuC2%2FMLS2QYZB09YBbnEZNQfBQdipUl%2Bs02WeMPuovcMGOqUBdp8jMjbcufZvBmhvNixHUzwby8%2FTA5u%2FSGHQBvuczrjcQqHHXHpvGu4yY%2Bg87%2F8g6iUgBh2nc0w6ATUk70FkXCdD55vPtohWbDywYWtinBD3CfAE%2B2xjAF3wtxbOjeBag6pQ6p4CC9vVWXjFjAdtB3uXjAzb2hSuXUGWdhX7FCUOfHCwxNxPArIaQz2wvryT1FhQOGoS%2BgCJSoqxvbpePUwUqIZJ&X-Amz-Signature=7120eb38bf882401a7f9edbca93b9afbcaf3df97cf627b181c2633d93fb47bb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
