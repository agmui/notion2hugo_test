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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NGIUAVR%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICEmDqEgGCnrLSosjyZP8uILSRXHYYq0wLhnDfT1seWmAiEAkA28siYYTpDGGsXbs%2BULkRAXab2lhQ6%2BbAj9fS102p4qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImih5ARbaPaT2ZLkyrcA4zVaCAcP%2Bf5XQMKt6jgqx6rgYApSsAU%2FOJN4ed%2B1uG2DOecRe0snKKqppjs%2FJ%2F2%2FtU0ZS0DOP7f0jGXCGlxufql2s%2BLmPzBuQpudFHzvuFLTRBI7iMpJEh4qvu%2BSpMnz9lS1PvFIsQLZ%2FWox27xeoA1xsRIqj5xlqWr5y38AJziQKhxDPu2pUc4WhBqQ9R0Nbk9xqUZ01cMSPgN4q4be2nk859kf446QQsgTyKbThPvGNZuCnmAO4BggHdTesTOGhco15Gi2Vcv0XU1i1Cwh%2Bwwunto700ZqrfJ1hg5LtPOIzHJssjwA570heGQh%2BGYubTuxdjvHY6korapv7ymHcUuB2jWbFag2KBUY7NjEY0Zt28Sl1roQEMeYp%2B5Z4WbRvygXsvyJlvqL%2FrR%2FkRPuRAZjHLpqvETDEZu8ixdDOs%2BaJtTMtSbkbuPGGBoDaQLb96ERkKthyIDjB6V40kK0EUQ6J5lY3XeXqiwL%2BZGDGgVe%2BE6wV71DulDbmAY5vl2%2B1OGOdGmPT3nGDrnEdgpyqUlrZtlPOjyYoRI8cpdSxnCgXP0q%2FtZBeiCHULJQ4h9jhnhcHCL1FXm8x8WZ%2BSihKY%2BfLNXnd27F60M11ufQS0r9nzjnjvgRebjSUZKMO7Mub4GOqUB0N6zOsp2XPU%2BgAU3xdBb08t01cyYrueLZMYZsI4ESwhtMC%2FXf27hbEHCTaRzxLYDf%2FaDJJKzmov3pP8TyFlBO70g1Sdz1SJ4B4BqVdBXoaFRA3Y3HQsM7hbAuqJF7eJWn5DHMvEjh6fgw0its7%2B9X0M7TxCEMxOJidD77Vn7cR0k5SCq9lacRQ0TAUfE6mQrXTDCTOuvFTk%2BnadJ7RcEA9rQlA1U&X-Amz-Signature=e719164c9bec843f10c3476e6a4d6bf61fea47d2491efe74c5eebce48419135b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NGIUAVR%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICEmDqEgGCnrLSosjyZP8uILSRXHYYq0wLhnDfT1seWmAiEAkA28siYYTpDGGsXbs%2BULkRAXab2lhQ6%2BbAj9fS102p4qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImih5ARbaPaT2ZLkyrcA4zVaCAcP%2Bf5XQMKt6jgqx6rgYApSsAU%2FOJN4ed%2B1uG2DOecRe0snKKqppjs%2FJ%2F2%2FtU0ZS0DOP7f0jGXCGlxufql2s%2BLmPzBuQpudFHzvuFLTRBI7iMpJEh4qvu%2BSpMnz9lS1PvFIsQLZ%2FWox27xeoA1xsRIqj5xlqWr5y38AJziQKhxDPu2pUc4WhBqQ9R0Nbk9xqUZ01cMSPgN4q4be2nk859kf446QQsgTyKbThPvGNZuCnmAO4BggHdTesTOGhco15Gi2Vcv0XU1i1Cwh%2Bwwunto700ZqrfJ1hg5LtPOIzHJssjwA570heGQh%2BGYubTuxdjvHY6korapv7ymHcUuB2jWbFag2KBUY7NjEY0Zt28Sl1roQEMeYp%2B5Z4WbRvygXsvyJlvqL%2FrR%2FkRPuRAZjHLpqvETDEZu8ixdDOs%2BaJtTMtSbkbuPGGBoDaQLb96ERkKthyIDjB6V40kK0EUQ6J5lY3XeXqiwL%2BZGDGgVe%2BE6wV71DulDbmAY5vl2%2B1OGOdGmPT3nGDrnEdgpyqUlrZtlPOjyYoRI8cpdSxnCgXP0q%2FtZBeiCHULJQ4h9jhnhcHCL1FXm8x8WZ%2BSihKY%2BfLNXnd27F60M11ufQS0r9nzjnjvgRebjSUZKMO7Mub4GOqUB0N6zOsp2XPU%2BgAU3xdBb08t01cyYrueLZMYZsI4ESwhtMC%2FXf27hbEHCTaRzxLYDf%2FaDJJKzmov3pP8TyFlBO70g1Sdz1SJ4B4BqVdBXoaFRA3Y3HQsM7hbAuqJF7eJWn5DHMvEjh6fgw0its7%2B9X0M7TxCEMxOJidD77Vn7cR0k5SCq9lacRQ0TAUfE6mQrXTDCTOuvFTk%2BnadJ7RcEA9rQlA1U&X-Amz-Signature=dc6ce8bc44093b066594ba2a7bf05ded0af10f182d3773e11d25f34f17459d9c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NGIUAVR%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICEmDqEgGCnrLSosjyZP8uILSRXHYYq0wLhnDfT1seWmAiEAkA28siYYTpDGGsXbs%2BULkRAXab2lhQ6%2BbAj9fS102p4qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImih5ARbaPaT2ZLkyrcA4zVaCAcP%2Bf5XQMKt6jgqx6rgYApSsAU%2FOJN4ed%2B1uG2DOecRe0snKKqppjs%2FJ%2F2%2FtU0ZS0DOP7f0jGXCGlxufql2s%2BLmPzBuQpudFHzvuFLTRBI7iMpJEh4qvu%2BSpMnz9lS1PvFIsQLZ%2FWox27xeoA1xsRIqj5xlqWr5y38AJziQKhxDPu2pUc4WhBqQ9R0Nbk9xqUZ01cMSPgN4q4be2nk859kf446QQsgTyKbThPvGNZuCnmAO4BggHdTesTOGhco15Gi2Vcv0XU1i1Cwh%2Bwwunto700ZqrfJ1hg5LtPOIzHJssjwA570heGQh%2BGYubTuxdjvHY6korapv7ymHcUuB2jWbFag2KBUY7NjEY0Zt28Sl1roQEMeYp%2B5Z4WbRvygXsvyJlvqL%2FrR%2FkRPuRAZjHLpqvETDEZu8ixdDOs%2BaJtTMtSbkbuPGGBoDaQLb96ERkKthyIDjB6V40kK0EUQ6J5lY3XeXqiwL%2BZGDGgVe%2BE6wV71DulDbmAY5vl2%2B1OGOdGmPT3nGDrnEdgpyqUlrZtlPOjyYoRI8cpdSxnCgXP0q%2FtZBeiCHULJQ4h9jhnhcHCL1FXm8x8WZ%2BSihKY%2BfLNXnd27F60M11ufQS0r9nzjnjvgRebjSUZKMO7Mub4GOqUB0N6zOsp2XPU%2BgAU3xdBb08t01cyYrueLZMYZsI4ESwhtMC%2FXf27hbEHCTaRzxLYDf%2FaDJJKzmov3pP8TyFlBO70g1Sdz1SJ4B4BqVdBXoaFRA3Y3HQsM7hbAuqJF7eJWn5DHMvEjh6fgw0its7%2B9X0M7TxCEMxOJidD77Vn7cR0k5SCq9lacRQ0TAUfE6mQrXTDCTOuvFTk%2BnadJ7RcEA9rQlA1U&X-Amz-Signature=9a339adf16f910fd4b5ec8deb1c97296463349135a1d5f3b16668d304399543f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NGIUAVR%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICEmDqEgGCnrLSosjyZP8uILSRXHYYq0wLhnDfT1seWmAiEAkA28siYYTpDGGsXbs%2BULkRAXab2lhQ6%2BbAj9fS102p4qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImih5ARbaPaT2ZLkyrcA4zVaCAcP%2Bf5XQMKt6jgqx6rgYApSsAU%2FOJN4ed%2B1uG2DOecRe0snKKqppjs%2FJ%2F2%2FtU0ZS0DOP7f0jGXCGlxufql2s%2BLmPzBuQpudFHzvuFLTRBI7iMpJEh4qvu%2BSpMnz9lS1PvFIsQLZ%2FWox27xeoA1xsRIqj5xlqWr5y38AJziQKhxDPu2pUc4WhBqQ9R0Nbk9xqUZ01cMSPgN4q4be2nk859kf446QQsgTyKbThPvGNZuCnmAO4BggHdTesTOGhco15Gi2Vcv0XU1i1Cwh%2Bwwunto700ZqrfJ1hg5LtPOIzHJssjwA570heGQh%2BGYubTuxdjvHY6korapv7ymHcUuB2jWbFag2KBUY7NjEY0Zt28Sl1roQEMeYp%2B5Z4WbRvygXsvyJlvqL%2FrR%2FkRPuRAZjHLpqvETDEZu8ixdDOs%2BaJtTMtSbkbuPGGBoDaQLb96ERkKthyIDjB6V40kK0EUQ6J5lY3XeXqiwL%2BZGDGgVe%2BE6wV71DulDbmAY5vl2%2B1OGOdGmPT3nGDrnEdgpyqUlrZtlPOjyYoRI8cpdSxnCgXP0q%2FtZBeiCHULJQ4h9jhnhcHCL1FXm8x8WZ%2BSihKY%2BfLNXnd27F60M11ufQS0r9nzjnjvgRebjSUZKMO7Mub4GOqUB0N6zOsp2XPU%2BgAU3xdBb08t01cyYrueLZMYZsI4ESwhtMC%2FXf27hbEHCTaRzxLYDf%2FaDJJKzmov3pP8TyFlBO70g1Sdz1SJ4B4BqVdBXoaFRA3Y3HQsM7hbAuqJF7eJWn5DHMvEjh6fgw0its7%2B9X0M7TxCEMxOJidD77Vn7cR0k5SCq9lacRQ0TAUfE6mQrXTDCTOuvFTk%2BnadJ7RcEA9rQlA1U&X-Amz-Signature=b8670025479c7ed7790a91dd10fc3803bf649b7df336b49d0f34271acb210558&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NGIUAVR%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICEmDqEgGCnrLSosjyZP8uILSRXHYYq0wLhnDfT1seWmAiEAkA28siYYTpDGGsXbs%2BULkRAXab2lhQ6%2BbAj9fS102p4qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImih5ARbaPaT2ZLkyrcA4zVaCAcP%2Bf5XQMKt6jgqx6rgYApSsAU%2FOJN4ed%2B1uG2DOecRe0snKKqppjs%2FJ%2F2%2FtU0ZS0DOP7f0jGXCGlxufql2s%2BLmPzBuQpudFHzvuFLTRBI7iMpJEh4qvu%2BSpMnz9lS1PvFIsQLZ%2FWox27xeoA1xsRIqj5xlqWr5y38AJziQKhxDPu2pUc4WhBqQ9R0Nbk9xqUZ01cMSPgN4q4be2nk859kf446QQsgTyKbThPvGNZuCnmAO4BggHdTesTOGhco15Gi2Vcv0XU1i1Cwh%2Bwwunto700ZqrfJ1hg5LtPOIzHJssjwA570heGQh%2BGYubTuxdjvHY6korapv7ymHcUuB2jWbFag2KBUY7NjEY0Zt28Sl1roQEMeYp%2B5Z4WbRvygXsvyJlvqL%2FrR%2FkRPuRAZjHLpqvETDEZu8ixdDOs%2BaJtTMtSbkbuPGGBoDaQLb96ERkKthyIDjB6V40kK0EUQ6J5lY3XeXqiwL%2BZGDGgVe%2BE6wV71DulDbmAY5vl2%2B1OGOdGmPT3nGDrnEdgpyqUlrZtlPOjyYoRI8cpdSxnCgXP0q%2FtZBeiCHULJQ4h9jhnhcHCL1FXm8x8WZ%2BSihKY%2BfLNXnd27F60M11ufQS0r9nzjnjvgRebjSUZKMO7Mub4GOqUB0N6zOsp2XPU%2BgAU3xdBb08t01cyYrueLZMYZsI4ESwhtMC%2FXf27hbEHCTaRzxLYDf%2FaDJJKzmov3pP8TyFlBO70g1Sdz1SJ4B4BqVdBXoaFRA3Y3HQsM7hbAuqJF7eJWn5DHMvEjh6fgw0its7%2B9X0M7TxCEMxOJidD77Vn7cR0k5SCq9lacRQ0TAUfE6mQrXTDCTOuvFTk%2BnadJ7RcEA9rQlA1U&X-Amz-Signature=3a5b45dc525a6deccc8ad3aefdd4f207f728062caa5d5121c00be9ae175db925&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NGIUAVR%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICEmDqEgGCnrLSosjyZP8uILSRXHYYq0wLhnDfT1seWmAiEAkA28siYYTpDGGsXbs%2BULkRAXab2lhQ6%2BbAj9fS102p4qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImih5ARbaPaT2ZLkyrcA4zVaCAcP%2Bf5XQMKt6jgqx6rgYApSsAU%2FOJN4ed%2B1uG2DOecRe0snKKqppjs%2FJ%2F2%2FtU0ZS0DOP7f0jGXCGlxufql2s%2BLmPzBuQpudFHzvuFLTRBI7iMpJEh4qvu%2BSpMnz9lS1PvFIsQLZ%2FWox27xeoA1xsRIqj5xlqWr5y38AJziQKhxDPu2pUc4WhBqQ9R0Nbk9xqUZ01cMSPgN4q4be2nk859kf446QQsgTyKbThPvGNZuCnmAO4BggHdTesTOGhco15Gi2Vcv0XU1i1Cwh%2Bwwunto700ZqrfJ1hg5LtPOIzHJssjwA570heGQh%2BGYubTuxdjvHY6korapv7ymHcUuB2jWbFag2KBUY7NjEY0Zt28Sl1roQEMeYp%2B5Z4WbRvygXsvyJlvqL%2FrR%2FkRPuRAZjHLpqvETDEZu8ixdDOs%2BaJtTMtSbkbuPGGBoDaQLb96ERkKthyIDjB6V40kK0EUQ6J5lY3XeXqiwL%2BZGDGgVe%2BE6wV71DulDbmAY5vl2%2B1OGOdGmPT3nGDrnEdgpyqUlrZtlPOjyYoRI8cpdSxnCgXP0q%2FtZBeiCHULJQ4h9jhnhcHCL1FXm8x8WZ%2BSihKY%2BfLNXnd27F60M11ufQS0r9nzjnjvgRebjSUZKMO7Mub4GOqUB0N6zOsp2XPU%2BgAU3xdBb08t01cyYrueLZMYZsI4ESwhtMC%2FXf27hbEHCTaRzxLYDf%2FaDJJKzmov3pP8TyFlBO70g1Sdz1SJ4B4BqVdBXoaFRA3Y3HQsM7hbAuqJF7eJWn5DHMvEjh6fgw0its7%2B9X0M7TxCEMxOJidD77Vn7cR0k5SCq9lacRQ0TAUfE6mQrXTDCTOuvFTk%2BnadJ7RcEA9rQlA1U&X-Amz-Signature=1af58b3d5df47a11808f472cd7fd3a4f592368c88eaa2fd15d4607fbedb83924&X-Amz-SignedHeaders=host&x-id=GetObject)
