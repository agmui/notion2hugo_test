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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUB2WJWZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEcg%2Bvfc7j9QiKynxJteQkBxxfqBeAVGlQ5ajON2E0SAIgMQUmKGWmKfGdB7Ccm9sqvmglZw4SvAz6YUk5cCPp2mwq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBjsCZEw%2FbyyiX9C4ircA0WhtqXKXLUwaJATq0tsZ8g7J6QcnHvS%2FjrgGR2FLO4gPKAXDiHgF5%2FzbDrJkNrU9BdGh%2FGdXoSlXMnzq33xSHgbmeG9qJbVAxMfX%2FHSo4z%2FzRdeBs8rpnmI5aUTNysSmK4qjCP8Xm5DQuyzEA77IZjUiqo68ND%2Be%2F9Pud11ctrpqsi5ROXChNpYrjqTgz954DjlGP5cPzFL5uDUpEfxACdQp2jYbzXil13Gj1fOBLK%2FNQUNDCSw%2FbgkI5NEiuWpksNvCUB17JIRmDaapSDJC2YJ74lifLvAjUjtbIqqbepS6wxjRQ4AMP138J%2BKmoY7r%2BHq2T%2F%2FMbRfZQV661%2FzSSMrD%2FpPkW14KOwEwpHJ%2BKb1E%2FOrttKX9NmQfKtv9ct1uTfTbldFBuASA3LqYn%2Bg2F4Iux8TIEt8a8gocYk98VrLHkaXGxtPkzrmosTCOROB65s17eGObn9r%2B2IijXTx0Rk7VGsBL%2Btji80A2xvtLNzJ%2FBU1RV17Rqm7AH6HZ1WWIfnja3GomksykvDch%2FBDLx1WVqyC%2BQfJhluO7RQ6MhWk1fuxHxpLtmsnNVvvuiFh5p8B6Aw501UEnoDwjHA8hyryeqdabZWT%2FvP7BEsLznV6V112gtdmLwzMzh5RMILvxMIGOqUB8zNniKB6aB2dNnc9Tao2QhGfpH8EChyGo0T0jTp8iltUqkGjox5UunQDedZ13R5lbR%2FXf9I6TiSsxozpcUztSf8cUw70AgiQstiUNTEAp3eeALsCL0JYU49%2B6tyFGfBlvLTGfjCQYdqC3QU3sLG8%2FvZelTAqzFyfTaFzqKVvYTc3kTFT3xUWXymiEbwRrFCxH3Hmt7ztegtR1SLe252I%2FCyr7HTx&X-Amz-Signature=b398df73c9518b32c82348f600aa6ae4f6eca1be92d60fe2484cfd7e29b885c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUB2WJWZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEcg%2Bvfc7j9QiKynxJteQkBxxfqBeAVGlQ5ajON2E0SAIgMQUmKGWmKfGdB7Ccm9sqvmglZw4SvAz6YUk5cCPp2mwq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBjsCZEw%2FbyyiX9C4ircA0WhtqXKXLUwaJATq0tsZ8g7J6QcnHvS%2FjrgGR2FLO4gPKAXDiHgF5%2FzbDrJkNrU9BdGh%2FGdXoSlXMnzq33xSHgbmeG9qJbVAxMfX%2FHSo4z%2FzRdeBs8rpnmI5aUTNysSmK4qjCP8Xm5DQuyzEA77IZjUiqo68ND%2Be%2F9Pud11ctrpqsi5ROXChNpYrjqTgz954DjlGP5cPzFL5uDUpEfxACdQp2jYbzXil13Gj1fOBLK%2FNQUNDCSw%2FbgkI5NEiuWpksNvCUB17JIRmDaapSDJC2YJ74lifLvAjUjtbIqqbepS6wxjRQ4AMP138J%2BKmoY7r%2BHq2T%2F%2FMbRfZQV661%2FzSSMrD%2FpPkW14KOwEwpHJ%2BKb1E%2FOrttKX9NmQfKtv9ct1uTfTbldFBuASA3LqYn%2Bg2F4Iux8TIEt8a8gocYk98VrLHkaXGxtPkzrmosTCOROB65s17eGObn9r%2B2IijXTx0Rk7VGsBL%2Btji80A2xvtLNzJ%2FBU1RV17Rqm7AH6HZ1WWIfnja3GomksykvDch%2FBDLx1WVqyC%2BQfJhluO7RQ6MhWk1fuxHxpLtmsnNVvvuiFh5p8B6Aw501UEnoDwjHA8hyryeqdabZWT%2FvP7BEsLznV6V112gtdmLwzMzh5RMILvxMIGOqUB8zNniKB6aB2dNnc9Tao2QhGfpH8EChyGo0T0jTp8iltUqkGjox5UunQDedZ13R5lbR%2FXf9I6TiSsxozpcUztSf8cUw70AgiQstiUNTEAp3eeALsCL0JYU49%2B6tyFGfBlvLTGfjCQYdqC3QU3sLG8%2FvZelTAqzFyfTaFzqKVvYTc3kTFT3xUWXymiEbwRrFCxH3Hmt7ztegtR1SLe252I%2FCyr7HTx&X-Amz-Signature=3b7d37785d4e8d3800207eca06727d9ccbbacd33bedb95d80fde0f66344a00ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUB2WJWZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEcg%2Bvfc7j9QiKynxJteQkBxxfqBeAVGlQ5ajON2E0SAIgMQUmKGWmKfGdB7Ccm9sqvmglZw4SvAz6YUk5cCPp2mwq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBjsCZEw%2FbyyiX9C4ircA0WhtqXKXLUwaJATq0tsZ8g7J6QcnHvS%2FjrgGR2FLO4gPKAXDiHgF5%2FzbDrJkNrU9BdGh%2FGdXoSlXMnzq33xSHgbmeG9qJbVAxMfX%2FHSo4z%2FzRdeBs8rpnmI5aUTNysSmK4qjCP8Xm5DQuyzEA77IZjUiqo68ND%2Be%2F9Pud11ctrpqsi5ROXChNpYrjqTgz954DjlGP5cPzFL5uDUpEfxACdQp2jYbzXil13Gj1fOBLK%2FNQUNDCSw%2FbgkI5NEiuWpksNvCUB17JIRmDaapSDJC2YJ74lifLvAjUjtbIqqbepS6wxjRQ4AMP138J%2BKmoY7r%2BHq2T%2F%2FMbRfZQV661%2FzSSMrD%2FpPkW14KOwEwpHJ%2BKb1E%2FOrttKX9NmQfKtv9ct1uTfTbldFBuASA3LqYn%2Bg2F4Iux8TIEt8a8gocYk98VrLHkaXGxtPkzrmosTCOROB65s17eGObn9r%2B2IijXTx0Rk7VGsBL%2Btji80A2xvtLNzJ%2FBU1RV17Rqm7AH6HZ1WWIfnja3GomksykvDch%2FBDLx1WVqyC%2BQfJhluO7RQ6MhWk1fuxHxpLtmsnNVvvuiFh5p8B6Aw501UEnoDwjHA8hyryeqdabZWT%2FvP7BEsLznV6V112gtdmLwzMzh5RMILvxMIGOqUB8zNniKB6aB2dNnc9Tao2QhGfpH8EChyGo0T0jTp8iltUqkGjox5UunQDedZ13R5lbR%2FXf9I6TiSsxozpcUztSf8cUw70AgiQstiUNTEAp3eeALsCL0JYU49%2B6tyFGfBlvLTGfjCQYdqC3QU3sLG8%2FvZelTAqzFyfTaFzqKVvYTc3kTFT3xUWXymiEbwRrFCxH3Hmt7ztegtR1SLe252I%2FCyr7HTx&X-Amz-Signature=c219452bf7b0060337138f13206afb238f11388675301729b52339d1548867dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUB2WJWZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEcg%2Bvfc7j9QiKynxJteQkBxxfqBeAVGlQ5ajON2E0SAIgMQUmKGWmKfGdB7Ccm9sqvmglZw4SvAz6YUk5cCPp2mwq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBjsCZEw%2FbyyiX9C4ircA0WhtqXKXLUwaJATq0tsZ8g7J6QcnHvS%2FjrgGR2FLO4gPKAXDiHgF5%2FzbDrJkNrU9BdGh%2FGdXoSlXMnzq33xSHgbmeG9qJbVAxMfX%2FHSo4z%2FzRdeBs8rpnmI5aUTNysSmK4qjCP8Xm5DQuyzEA77IZjUiqo68ND%2Be%2F9Pud11ctrpqsi5ROXChNpYrjqTgz954DjlGP5cPzFL5uDUpEfxACdQp2jYbzXil13Gj1fOBLK%2FNQUNDCSw%2FbgkI5NEiuWpksNvCUB17JIRmDaapSDJC2YJ74lifLvAjUjtbIqqbepS6wxjRQ4AMP138J%2BKmoY7r%2BHq2T%2F%2FMbRfZQV661%2FzSSMrD%2FpPkW14KOwEwpHJ%2BKb1E%2FOrttKX9NmQfKtv9ct1uTfTbldFBuASA3LqYn%2Bg2F4Iux8TIEt8a8gocYk98VrLHkaXGxtPkzrmosTCOROB65s17eGObn9r%2B2IijXTx0Rk7VGsBL%2Btji80A2xvtLNzJ%2FBU1RV17Rqm7AH6HZ1WWIfnja3GomksykvDch%2FBDLx1WVqyC%2BQfJhluO7RQ6MhWk1fuxHxpLtmsnNVvvuiFh5p8B6Aw501UEnoDwjHA8hyryeqdabZWT%2FvP7BEsLznV6V112gtdmLwzMzh5RMILvxMIGOqUB8zNniKB6aB2dNnc9Tao2QhGfpH8EChyGo0T0jTp8iltUqkGjox5UunQDedZ13R5lbR%2FXf9I6TiSsxozpcUztSf8cUw70AgiQstiUNTEAp3eeALsCL0JYU49%2B6tyFGfBlvLTGfjCQYdqC3QU3sLG8%2FvZelTAqzFyfTaFzqKVvYTc3kTFT3xUWXymiEbwRrFCxH3Hmt7ztegtR1SLe252I%2FCyr7HTx&X-Amz-Signature=a69a12013811350542d2c6defcd25f34621855c4f02ff6f4be2b2afb499c6dca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUB2WJWZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEcg%2Bvfc7j9QiKynxJteQkBxxfqBeAVGlQ5ajON2E0SAIgMQUmKGWmKfGdB7Ccm9sqvmglZw4SvAz6YUk5cCPp2mwq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBjsCZEw%2FbyyiX9C4ircA0WhtqXKXLUwaJATq0tsZ8g7J6QcnHvS%2FjrgGR2FLO4gPKAXDiHgF5%2FzbDrJkNrU9BdGh%2FGdXoSlXMnzq33xSHgbmeG9qJbVAxMfX%2FHSo4z%2FzRdeBs8rpnmI5aUTNysSmK4qjCP8Xm5DQuyzEA77IZjUiqo68ND%2Be%2F9Pud11ctrpqsi5ROXChNpYrjqTgz954DjlGP5cPzFL5uDUpEfxACdQp2jYbzXil13Gj1fOBLK%2FNQUNDCSw%2FbgkI5NEiuWpksNvCUB17JIRmDaapSDJC2YJ74lifLvAjUjtbIqqbepS6wxjRQ4AMP138J%2BKmoY7r%2BHq2T%2F%2FMbRfZQV661%2FzSSMrD%2FpPkW14KOwEwpHJ%2BKb1E%2FOrttKX9NmQfKtv9ct1uTfTbldFBuASA3LqYn%2Bg2F4Iux8TIEt8a8gocYk98VrLHkaXGxtPkzrmosTCOROB65s17eGObn9r%2B2IijXTx0Rk7VGsBL%2Btji80A2xvtLNzJ%2FBU1RV17Rqm7AH6HZ1WWIfnja3GomksykvDch%2FBDLx1WVqyC%2BQfJhluO7RQ6MhWk1fuxHxpLtmsnNVvvuiFh5p8B6Aw501UEnoDwjHA8hyryeqdabZWT%2FvP7BEsLznV6V112gtdmLwzMzh5RMILvxMIGOqUB8zNniKB6aB2dNnc9Tao2QhGfpH8EChyGo0T0jTp8iltUqkGjox5UunQDedZ13R5lbR%2FXf9I6TiSsxozpcUztSf8cUw70AgiQstiUNTEAp3eeALsCL0JYU49%2B6tyFGfBlvLTGfjCQYdqC3QU3sLG8%2FvZelTAqzFyfTaFzqKVvYTc3kTFT3xUWXymiEbwRrFCxH3Hmt7ztegtR1SLe252I%2FCyr7HTx&X-Amz-Signature=72a94d3083b590755f10f113149e1aec628ae2431011d5d32b24cd0855ed8011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUB2WJWZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEcg%2Bvfc7j9QiKynxJteQkBxxfqBeAVGlQ5ajON2E0SAIgMQUmKGWmKfGdB7Ccm9sqvmglZw4SvAz6YUk5cCPp2mwq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBjsCZEw%2FbyyiX9C4ircA0WhtqXKXLUwaJATq0tsZ8g7J6QcnHvS%2FjrgGR2FLO4gPKAXDiHgF5%2FzbDrJkNrU9BdGh%2FGdXoSlXMnzq33xSHgbmeG9qJbVAxMfX%2FHSo4z%2FzRdeBs8rpnmI5aUTNysSmK4qjCP8Xm5DQuyzEA77IZjUiqo68ND%2Be%2F9Pud11ctrpqsi5ROXChNpYrjqTgz954DjlGP5cPzFL5uDUpEfxACdQp2jYbzXil13Gj1fOBLK%2FNQUNDCSw%2FbgkI5NEiuWpksNvCUB17JIRmDaapSDJC2YJ74lifLvAjUjtbIqqbepS6wxjRQ4AMP138J%2BKmoY7r%2BHq2T%2F%2FMbRfZQV661%2FzSSMrD%2FpPkW14KOwEwpHJ%2BKb1E%2FOrttKX9NmQfKtv9ct1uTfTbldFBuASA3LqYn%2Bg2F4Iux8TIEt8a8gocYk98VrLHkaXGxtPkzrmosTCOROB65s17eGObn9r%2B2IijXTx0Rk7VGsBL%2Btji80A2xvtLNzJ%2FBU1RV17Rqm7AH6HZ1WWIfnja3GomksykvDch%2FBDLx1WVqyC%2BQfJhluO7RQ6MhWk1fuxHxpLtmsnNVvvuiFh5p8B6Aw501UEnoDwjHA8hyryeqdabZWT%2FvP7BEsLznV6V112gtdmLwzMzh5RMILvxMIGOqUB8zNniKB6aB2dNnc9Tao2QhGfpH8EChyGo0T0jTp8iltUqkGjox5UunQDedZ13R5lbR%2FXf9I6TiSsxozpcUztSf8cUw70AgiQstiUNTEAp3eeALsCL0JYU49%2B6tyFGfBlvLTGfjCQYdqC3QU3sLG8%2FvZelTAqzFyfTaFzqKVvYTc3kTFT3xUWXymiEbwRrFCxH3Hmt7ztegtR1SLe252I%2FCyr7HTx&X-Amz-Signature=4887cef0d7e78a63e08ce8fc0abd7b35f1fadeb42e67f4d11f0f5fc7c2dd31f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
