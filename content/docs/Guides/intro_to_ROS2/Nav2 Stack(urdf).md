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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3WDXUKR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQChYq%2Bmn9qjHR35TdrhiHqetdR%2BGzpkI5RNABE5rZQNeQIgeUpUdJ7TMeL0EWBA59Tosw9IfcIjQoUPEFEGqwInyuwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDChNifh1gsEf%2Bq8WlSrcA3%2FIgj711LgxsleSBWfMnv19Q0toxGEMDwnPucDWzqWKx3TN%2BdR%2FWAG02KYZlr8Em8IJ8WWh7l%2FuOzs5RuUMA5tQtURHVnz8V%2F4eGQVXM29dwIAYwbeBMZAPF8JfSJKbI8CxxLjlSWMdPt8Btbr1Gg2vj9wbgFALkebNigPqWlKTJ9jiaPGvCvaAkjSt3ubReL0qWViS70AFJ9M1uj5IA4SFGgH2z%2BFQzoBpFL3UhQ%2BW389eXy1QppQWZGGgVw%2FTuQM7kgf5UiYxpHOJ%2FCjTXfcOb0adYhCKyEa6IalmzW5f2Hj5BOgNCuRJOt7Ynhiy0Qgg1CoB0Cbjpq9tdfnY7jgCYiLbHII2PwS7lFqKx2vfY2qiqxepKyHUS5RQsYo1zttYg0whTyVpqu%2Bh2JnZvV3hkvxytOZ4Qi%2BZvVVrjxykm80uiIXlhbTjx8OxsSqbleLtuTEaGO0LA%2F0JgJiRdcdWh2iD2PSwkibyOzOWQl6TYFE39NHrpqNLrZLKUw%2BznnoBd5sA57vojSyBaGqKfkYuor3Xe1%2FRq9dQA7Xhpb%2FWxoJHBfCrCOaz2IODiVgcCLQaQ7h717MAwUrOxEBNgTqegj4pdyMGb6%2BSI646MpE%2BLDGQg18rH0eEQ2y%2BMMHbssIGOqUBUSA65dk89K7YnlRXhis0xqbYzunVSDaI8E0%2FZvY67HEv3QFWJwxdHRujKxKApyJsfkZTJ9uNRmVhACKokNH965h6XjTtJMeNsjCy2P1cUm0D8Qi3Mj4NOCqNfC6KWifvpSA%2BHPblyUT4id4f%2B84GsJGFq%2FaQAG%2BvVdH0Z2zka1lfUvMHcaMahU8oIxyrbRzoYUichk0YVEBOvNhvhuyqcuQmGW1y&X-Amz-Signature=df8eaa09298ccb7be1687aa9a63b8debae513488971c84401ed5fc4697e9ce0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3WDXUKR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQChYq%2Bmn9qjHR35TdrhiHqetdR%2BGzpkI5RNABE5rZQNeQIgeUpUdJ7TMeL0EWBA59Tosw9IfcIjQoUPEFEGqwInyuwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDChNifh1gsEf%2Bq8WlSrcA3%2FIgj711LgxsleSBWfMnv19Q0toxGEMDwnPucDWzqWKx3TN%2BdR%2FWAG02KYZlr8Em8IJ8WWh7l%2FuOzs5RuUMA5tQtURHVnz8V%2F4eGQVXM29dwIAYwbeBMZAPF8JfSJKbI8CxxLjlSWMdPt8Btbr1Gg2vj9wbgFALkebNigPqWlKTJ9jiaPGvCvaAkjSt3ubReL0qWViS70AFJ9M1uj5IA4SFGgH2z%2BFQzoBpFL3UhQ%2BW389eXy1QppQWZGGgVw%2FTuQM7kgf5UiYxpHOJ%2FCjTXfcOb0adYhCKyEa6IalmzW5f2Hj5BOgNCuRJOt7Ynhiy0Qgg1CoB0Cbjpq9tdfnY7jgCYiLbHII2PwS7lFqKx2vfY2qiqxepKyHUS5RQsYo1zttYg0whTyVpqu%2Bh2JnZvV3hkvxytOZ4Qi%2BZvVVrjxykm80uiIXlhbTjx8OxsSqbleLtuTEaGO0LA%2F0JgJiRdcdWh2iD2PSwkibyOzOWQl6TYFE39NHrpqNLrZLKUw%2BznnoBd5sA57vojSyBaGqKfkYuor3Xe1%2FRq9dQA7Xhpb%2FWxoJHBfCrCOaz2IODiVgcCLQaQ7h717MAwUrOxEBNgTqegj4pdyMGb6%2BSI646MpE%2BLDGQg18rH0eEQ2y%2BMMHbssIGOqUBUSA65dk89K7YnlRXhis0xqbYzunVSDaI8E0%2FZvY67HEv3QFWJwxdHRujKxKApyJsfkZTJ9uNRmVhACKokNH965h6XjTtJMeNsjCy2P1cUm0D8Qi3Mj4NOCqNfC6KWifvpSA%2BHPblyUT4id4f%2B84GsJGFq%2FaQAG%2BvVdH0Z2zka1lfUvMHcaMahU8oIxyrbRzoYUichk0YVEBOvNhvhuyqcuQmGW1y&X-Amz-Signature=e43c2cf2e4a9d677306b085a124ec358d48fd2f3ce033c8a06e8d155b463a835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3WDXUKR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQChYq%2Bmn9qjHR35TdrhiHqetdR%2BGzpkI5RNABE5rZQNeQIgeUpUdJ7TMeL0EWBA59Tosw9IfcIjQoUPEFEGqwInyuwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDChNifh1gsEf%2Bq8WlSrcA3%2FIgj711LgxsleSBWfMnv19Q0toxGEMDwnPucDWzqWKx3TN%2BdR%2FWAG02KYZlr8Em8IJ8WWh7l%2FuOzs5RuUMA5tQtURHVnz8V%2F4eGQVXM29dwIAYwbeBMZAPF8JfSJKbI8CxxLjlSWMdPt8Btbr1Gg2vj9wbgFALkebNigPqWlKTJ9jiaPGvCvaAkjSt3ubReL0qWViS70AFJ9M1uj5IA4SFGgH2z%2BFQzoBpFL3UhQ%2BW389eXy1QppQWZGGgVw%2FTuQM7kgf5UiYxpHOJ%2FCjTXfcOb0adYhCKyEa6IalmzW5f2Hj5BOgNCuRJOt7Ynhiy0Qgg1CoB0Cbjpq9tdfnY7jgCYiLbHII2PwS7lFqKx2vfY2qiqxepKyHUS5RQsYo1zttYg0whTyVpqu%2Bh2JnZvV3hkvxytOZ4Qi%2BZvVVrjxykm80uiIXlhbTjx8OxsSqbleLtuTEaGO0LA%2F0JgJiRdcdWh2iD2PSwkibyOzOWQl6TYFE39NHrpqNLrZLKUw%2BznnoBd5sA57vojSyBaGqKfkYuor3Xe1%2FRq9dQA7Xhpb%2FWxoJHBfCrCOaz2IODiVgcCLQaQ7h717MAwUrOxEBNgTqegj4pdyMGb6%2BSI646MpE%2BLDGQg18rH0eEQ2y%2BMMHbssIGOqUBUSA65dk89K7YnlRXhis0xqbYzunVSDaI8E0%2FZvY67HEv3QFWJwxdHRujKxKApyJsfkZTJ9uNRmVhACKokNH965h6XjTtJMeNsjCy2P1cUm0D8Qi3Mj4NOCqNfC6KWifvpSA%2BHPblyUT4id4f%2B84GsJGFq%2FaQAG%2BvVdH0Z2zka1lfUvMHcaMahU8oIxyrbRzoYUichk0YVEBOvNhvhuyqcuQmGW1y&X-Amz-Signature=654d4995344b119d0c5d3032182ad5ded422499e07d19ade42910e64a90b294b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3WDXUKR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQChYq%2Bmn9qjHR35TdrhiHqetdR%2BGzpkI5RNABE5rZQNeQIgeUpUdJ7TMeL0EWBA59Tosw9IfcIjQoUPEFEGqwInyuwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDChNifh1gsEf%2Bq8WlSrcA3%2FIgj711LgxsleSBWfMnv19Q0toxGEMDwnPucDWzqWKx3TN%2BdR%2FWAG02KYZlr8Em8IJ8WWh7l%2FuOzs5RuUMA5tQtURHVnz8V%2F4eGQVXM29dwIAYwbeBMZAPF8JfSJKbI8CxxLjlSWMdPt8Btbr1Gg2vj9wbgFALkebNigPqWlKTJ9jiaPGvCvaAkjSt3ubReL0qWViS70AFJ9M1uj5IA4SFGgH2z%2BFQzoBpFL3UhQ%2BW389eXy1QppQWZGGgVw%2FTuQM7kgf5UiYxpHOJ%2FCjTXfcOb0adYhCKyEa6IalmzW5f2Hj5BOgNCuRJOt7Ynhiy0Qgg1CoB0Cbjpq9tdfnY7jgCYiLbHII2PwS7lFqKx2vfY2qiqxepKyHUS5RQsYo1zttYg0whTyVpqu%2Bh2JnZvV3hkvxytOZ4Qi%2BZvVVrjxykm80uiIXlhbTjx8OxsSqbleLtuTEaGO0LA%2F0JgJiRdcdWh2iD2PSwkibyOzOWQl6TYFE39NHrpqNLrZLKUw%2BznnoBd5sA57vojSyBaGqKfkYuor3Xe1%2FRq9dQA7Xhpb%2FWxoJHBfCrCOaz2IODiVgcCLQaQ7h717MAwUrOxEBNgTqegj4pdyMGb6%2BSI646MpE%2BLDGQg18rH0eEQ2y%2BMMHbssIGOqUBUSA65dk89K7YnlRXhis0xqbYzunVSDaI8E0%2FZvY67HEv3QFWJwxdHRujKxKApyJsfkZTJ9uNRmVhACKokNH965h6XjTtJMeNsjCy2P1cUm0D8Qi3Mj4NOCqNfC6KWifvpSA%2BHPblyUT4id4f%2B84GsJGFq%2FaQAG%2BvVdH0Z2zka1lfUvMHcaMahU8oIxyrbRzoYUichk0YVEBOvNhvhuyqcuQmGW1y&X-Amz-Signature=d393e1856a578193475d7d10d7ec9f3d5a7ba38d331be7f7e00387f63fc06d74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3WDXUKR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQChYq%2Bmn9qjHR35TdrhiHqetdR%2BGzpkI5RNABE5rZQNeQIgeUpUdJ7TMeL0EWBA59Tosw9IfcIjQoUPEFEGqwInyuwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDChNifh1gsEf%2Bq8WlSrcA3%2FIgj711LgxsleSBWfMnv19Q0toxGEMDwnPucDWzqWKx3TN%2BdR%2FWAG02KYZlr8Em8IJ8WWh7l%2FuOzs5RuUMA5tQtURHVnz8V%2F4eGQVXM29dwIAYwbeBMZAPF8JfSJKbI8CxxLjlSWMdPt8Btbr1Gg2vj9wbgFALkebNigPqWlKTJ9jiaPGvCvaAkjSt3ubReL0qWViS70AFJ9M1uj5IA4SFGgH2z%2BFQzoBpFL3UhQ%2BW389eXy1QppQWZGGgVw%2FTuQM7kgf5UiYxpHOJ%2FCjTXfcOb0adYhCKyEa6IalmzW5f2Hj5BOgNCuRJOt7Ynhiy0Qgg1CoB0Cbjpq9tdfnY7jgCYiLbHII2PwS7lFqKx2vfY2qiqxepKyHUS5RQsYo1zttYg0whTyVpqu%2Bh2JnZvV3hkvxytOZ4Qi%2BZvVVrjxykm80uiIXlhbTjx8OxsSqbleLtuTEaGO0LA%2F0JgJiRdcdWh2iD2PSwkibyOzOWQl6TYFE39NHrpqNLrZLKUw%2BznnoBd5sA57vojSyBaGqKfkYuor3Xe1%2FRq9dQA7Xhpb%2FWxoJHBfCrCOaz2IODiVgcCLQaQ7h717MAwUrOxEBNgTqegj4pdyMGb6%2BSI646MpE%2BLDGQg18rH0eEQ2y%2BMMHbssIGOqUBUSA65dk89K7YnlRXhis0xqbYzunVSDaI8E0%2FZvY67HEv3QFWJwxdHRujKxKApyJsfkZTJ9uNRmVhACKokNH965h6XjTtJMeNsjCy2P1cUm0D8Qi3Mj4NOCqNfC6KWifvpSA%2BHPblyUT4id4f%2B84GsJGFq%2FaQAG%2BvVdH0Z2zka1lfUvMHcaMahU8oIxyrbRzoYUichk0YVEBOvNhvhuyqcuQmGW1y&X-Amz-Signature=f128949aba1895a4197a647d286914b706846881e36c6f0682e412da57f90fce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3WDXUKR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQChYq%2Bmn9qjHR35TdrhiHqetdR%2BGzpkI5RNABE5rZQNeQIgeUpUdJ7TMeL0EWBA59Tosw9IfcIjQoUPEFEGqwInyuwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDChNifh1gsEf%2Bq8WlSrcA3%2FIgj711LgxsleSBWfMnv19Q0toxGEMDwnPucDWzqWKx3TN%2BdR%2FWAG02KYZlr8Em8IJ8WWh7l%2FuOzs5RuUMA5tQtURHVnz8V%2F4eGQVXM29dwIAYwbeBMZAPF8JfSJKbI8CxxLjlSWMdPt8Btbr1Gg2vj9wbgFALkebNigPqWlKTJ9jiaPGvCvaAkjSt3ubReL0qWViS70AFJ9M1uj5IA4SFGgH2z%2BFQzoBpFL3UhQ%2BW389eXy1QppQWZGGgVw%2FTuQM7kgf5UiYxpHOJ%2FCjTXfcOb0adYhCKyEa6IalmzW5f2Hj5BOgNCuRJOt7Ynhiy0Qgg1CoB0Cbjpq9tdfnY7jgCYiLbHII2PwS7lFqKx2vfY2qiqxepKyHUS5RQsYo1zttYg0whTyVpqu%2Bh2JnZvV3hkvxytOZ4Qi%2BZvVVrjxykm80uiIXlhbTjx8OxsSqbleLtuTEaGO0LA%2F0JgJiRdcdWh2iD2PSwkibyOzOWQl6TYFE39NHrpqNLrZLKUw%2BznnoBd5sA57vojSyBaGqKfkYuor3Xe1%2FRq9dQA7Xhpb%2FWxoJHBfCrCOaz2IODiVgcCLQaQ7h717MAwUrOxEBNgTqegj4pdyMGb6%2BSI646MpE%2BLDGQg18rH0eEQ2y%2BMMHbssIGOqUBUSA65dk89K7YnlRXhis0xqbYzunVSDaI8E0%2FZvY67HEv3QFWJwxdHRujKxKApyJsfkZTJ9uNRmVhACKokNH965h6XjTtJMeNsjCy2P1cUm0D8Qi3Mj4NOCqNfC6KWifvpSA%2BHPblyUT4id4f%2B84GsJGFq%2FaQAG%2BvVdH0Z2zka1lfUvMHcaMahU8oIxyrbRzoYUichk0YVEBOvNhvhuyqcuQmGW1y&X-Amz-Signature=fa9a8d20f1340c7f84944a6c8f9ef74fc04b9b0a5c532cc223042a730b8a3ad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
