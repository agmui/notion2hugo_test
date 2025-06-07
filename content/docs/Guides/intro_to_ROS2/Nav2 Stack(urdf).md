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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6CJIYAB%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMlkePDfncxSWXJVlstviMi8RtaNnPgV%2FnNg4AiIEctQIgbyjkURIKqoXMM3UPKyzxPZ0u3LAJeDbwtXFbuvClSlwq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDMV3UOYzdhcbs2GvgCrcA9n9vjjUhJrBer60GtbaZxoqZNxbbAWINP5d%2FnZehZbw%2BEqzH0NsFhVhzsSvJkAR2r6y2XAQjKvQvHndh2f8o%2BvEEyRWNWg0jrLc8F%2Bcs2m5shufjubGRjwHkjX6LjvF1LX9JwoctKuXwfKf0ZIOyok8Tr%2FLJr3X4O7f6eCLyGZM1yMGqC3XBQ2D1acM5oA5o5Snf%2F4gNCejRm2iYsGUEblF74pVnqPLZYwBO51q3oTQtx7oHvFReTEXN5X%2BVElog%2BAvP%2FqzQL7Fle1QnLK2m1v1xA%2Fn%2F7fDaK54mDTBLNjgnxdZu%2BZ%2FSX%2FFQqGPrWl69qVCyVA9lHtLzhU9ImlZdnUyOfWmmAxy97pC1iwfzyE2NB7dyaipir30lh22KfgG5%2FaD6gz48bdG7EAGbu9h5cxKqGiyODMN2P1ZDmD5MkgnveZH1YFsxJotmbPHSraXd2qGcFtnyjiQgvrmZk8eEoRY0%2Fzh6QXjSoFLeR%2Bn17v%2Fz4qiUfIPBY2Hu2NLc8UcoVjfgu02lXDBz6mzQJMM%2FJULLxmJy%2FMzwUMQh3l%2Bv930BnS7m0AYUs64cClTz3Gw%2Fblv0x4zi1FTYkxRAkSi1e2PqTH%2BI%2BO59KgLnk%2FS4GCojORGOq7BtjjvGWTrMOi3j8IGOqUBfNv6eZF7QhwgfS81qC4phN1XjQk5G0Zw1nWga7l9Iu0%2Fz8kPHzLXoMBYpLwFTxCYUc0E1ZKUFbUD7CQldDTOzQeFlPEvDaksme1L%2B%2F%2FvHloKtgeA9gO3Ef%2BBYUXLvkXIqreXVKAuPWemh3CF%2F23ojedk8m8johFnTFTzeKovm3cb%2BI8orVRU7Q5YZq6mwZYUWeog%2FczKYjUxfrmeJP9ewl%2BTO2mK&X-Amz-Signature=352989667504d8652bb51fdbc311c3506b06c793d78825c62d5ad0feebe0814f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6CJIYAB%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMlkePDfncxSWXJVlstviMi8RtaNnPgV%2FnNg4AiIEctQIgbyjkURIKqoXMM3UPKyzxPZ0u3LAJeDbwtXFbuvClSlwq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDMV3UOYzdhcbs2GvgCrcA9n9vjjUhJrBer60GtbaZxoqZNxbbAWINP5d%2FnZehZbw%2BEqzH0NsFhVhzsSvJkAR2r6y2XAQjKvQvHndh2f8o%2BvEEyRWNWg0jrLc8F%2Bcs2m5shufjubGRjwHkjX6LjvF1LX9JwoctKuXwfKf0ZIOyok8Tr%2FLJr3X4O7f6eCLyGZM1yMGqC3XBQ2D1acM5oA5o5Snf%2F4gNCejRm2iYsGUEblF74pVnqPLZYwBO51q3oTQtx7oHvFReTEXN5X%2BVElog%2BAvP%2FqzQL7Fle1QnLK2m1v1xA%2Fn%2F7fDaK54mDTBLNjgnxdZu%2BZ%2FSX%2FFQqGPrWl69qVCyVA9lHtLzhU9ImlZdnUyOfWmmAxy97pC1iwfzyE2NB7dyaipir30lh22KfgG5%2FaD6gz48bdG7EAGbu9h5cxKqGiyODMN2P1ZDmD5MkgnveZH1YFsxJotmbPHSraXd2qGcFtnyjiQgvrmZk8eEoRY0%2Fzh6QXjSoFLeR%2Bn17v%2Fz4qiUfIPBY2Hu2NLc8UcoVjfgu02lXDBz6mzQJMM%2FJULLxmJy%2FMzwUMQh3l%2Bv930BnS7m0AYUs64cClTz3Gw%2Fblv0x4zi1FTYkxRAkSi1e2PqTH%2BI%2BO59KgLnk%2FS4GCojORGOq7BtjjvGWTrMOi3j8IGOqUBfNv6eZF7QhwgfS81qC4phN1XjQk5G0Zw1nWga7l9Iu0%2Fz8kPHzLXoMBYpLwFTxCYUc0E1ZKUFbUD7CQldDTOzQeFlPEvDaksme1L%2B%2F%2FvHloKtgeA9gO3Ef%2BBYUXLvkXIqreXVKAuPWemh3CF%2F23ojedk8m8johFnTFTzeKovm3cb%2BI8orVRU7Q5YZq6mwZYUWeog%2FczKYjUxfrmeJP9ewl%2BTO2mK&X-Amz-Signature=31e2f68ddb5b65bc55bdba69f7f45f9cabef894089980aa98581f31ba03293fd&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6CJIYAB%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMlkePDfncxSWXJVlstviMi8RtaNnPgV%2FnNg4AiIEctQIgbyjkURIKqoXMM3UPKyzxPZ0u3LAJeDbwtXFbuvClSlwq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDMV3UOYzdhcbs2GvgCrcA9n9vjjUhJrBer60GtbaZxoqZNxbbAWINP5d%2FnZehZbw%2BEqzH0NsFhVhzsSvJkAR2r6y2XAQjKvQvHndh2f8o%2BvEEyRWNWg0jrLc8F%2Bcs2m5shufjubGRjwHkjX6LjvF1LX9JwoctKuXwfKf0ZIOyok8Tr%2FLJr3X4O7f6eCLyGZM1yMGqC3XBQ2D1acM5oA5o5Snf%2F4gNCejRm2iYsGUEblF74pVnqPLZYwBO51q3oTQtx7oHvFReTEXN5X%2BVElog%2BAvP%2FqzQL7Fle1QnLK2m1v1xA%2Fn%2F7fDaK54mDTBLNjgnxdZu%2BZ%2FSX%2FFQqGPrWl69qVCyVA9lHtLzhU9ImlZdnUyOfWmmAxy97pC1iwfzyE2NB7dyaipir30lh22KfgG5%2FaD6gz48bdG7EAGbu9h5cxKqGiyODMN2P1ZDmD5MkgnveZH1YFsxJotmbPHSraXd2qGcFtnyjiQgvrmZk8eEoRY0%2Fzh6QXjSoFLeR%2Bn17v%2Fz4qiUfIPBY2Hu2NLc8UcoVjfgu02lXDBz6mzQJMM%2FJULLxmJy%2FMzwUMQh3l%2Bv930BnS7m0AYUs64cClTz3Gw%2Fblv0x4zi1FTYkxRAkSi1e2PqTH%2BI%2BO59KgLnk%2FS4GCojORGOq7BtjjvGWTrMOi3j8IGOqUBfNv6eZF7QhwgfS81qC4phN1XjQk5G0Zw1nWga7l9Iu0%2Fz8kPHzLXoMBYpLwFTxCYUc0E1ZKUFbUD7CQldDTOzQeFlPEvDaksme1L%2B%2F%2FvHloKtgeA9gO3Ef%2BBYUXLvkXIqreXVKAuPWemh3CF%2F23ojedk8m8johFnTFTzeKovm3cb%2BI8orVRU7Q5YZq6mwZYUWeog%2FczKYjUxfrmeJP9ewl%2BTO2mK&X-Amz-Signature=cfabcb72885f9dbd1dff46fd3112982b609d15ed1a3e84f824cd2df42a6dc20c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6CJIYAB%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMlkePDfncxSWXJVlstviMi8RtaNnPgV%2FnNg4AiIEctQIgbyjkURIKqoXMM3UPKyzxPZ0u3LAJeDbwtXFbuvClSlwq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDMV3UOYzdhcbs2GvgCrcA9n9vjjUhJrBer60GtbaZxoqZNxbbAWINP5d%2FnZehZbw%2BEqzH0NsFhVhzsSvJkAR2r6y2XAQjKvQvHndh2f8o%2BvEEyRWNWg0jrLc8F%2Bcs2m5shufjubGRjwHkjX6LjvF1LX9JwoctKuXwfKf0ZIOyok8Tr%2FLJr3X4O7f6eCLyGZM1yMGqC3XBQ2D1acM5oA5o5Snf%2F4gNCejRm2iYsGUEblF74pVnqPLZYwBO51q3oTQtx7oHvFReTEXN5X%2BVElog%2BAvP%2FqzQL7Fle1QnLK2m1v1xA%2Fn%2F7fDaK54mDTBLNjgnxdZu%2BZ%2FSX%2FFQqGPrWl69qVCyVA9lHtLzhU9ImlZdnUyOfWmmAxy97pC1iwfzyE2NB7dyaipir30lh22KfgG5%2FaD6gz48bdG7EAGbu9h5cxKqGiyODMN2P1ZDmD5MkgnveZH1YFsxJotmbPHSraXd2qGcFtnyjiQgvrmZk8eEoRY0%2Fzh6QXjSoFLeR%2Bn17v%2Fz4qiUfIPBY2Hu2NLc8UcoVjfgu02lXDBz6mzQJMM%2FJULLxmJy%2FMzwUMQh3l%2Bv930BnS7m0AYUs64cClTz3Gw%2Fblv0x4zi1FTYkxRAkSi1e2PqTH%2BI%2BO59KgLnk%2FS4GCojORGOq7BtjjvGWTrMOi3j8IGOqUBfNv6eZF7QhwgfS81qC4phN1XjQk5G0Zw1nWga7l9Iu0%2Fz8kPHzLXoMBYpLwFTxCYUc0E1ZKUFbUD7CQldDTOzQeFlPEvDaksme1L%2B%2F%2FvHloKtgeA9gO3Ef%2BBYUXLvkXIqreXVKAuPWemh3CF%2F23ojedk8m8johFnTFTzeKovm3cb%2BI8orVRU7Q5YZq6mwZYUWeog%2FczKYjUxfrmeJP9ewl%2BTO2mK&X-Amz-Signature=9a1fa51b02ca9fe28107c265ff2d518cc949212539110716b6af8857be02db94&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6CJIYAB%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMlkePDfncxSWXJVlstviMi8RtaNnPgV%2FnNg4AiIEctQIgbyjkURIKqoXMM3UPKyzxPZ0u3LAJeDbwtXFbuvClSlwq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDMV3UOYzdhcbs2GvgCrcA9n9vjjUhJrBer60GtbaZxoqZNxbbAWINP5d%2FnZehZbw%2BEqzH0NsFhVhzsSvJkAR2r6y2XAQjKvQvHndh2f8o%2BvEEyRWNWg0jrLc8F%2Bcs2m5shufjubGRjwHkjX6LjvF1LX9JwoctKuXwfKf0ZIOyok8Tr%2FLJr3X4O7f6eCLyGZM1yMGqC3XBQ2D1acM5oA5o5Snf%2F4gNCejRm2iYsGUEblF74pVnqPLZYwBO51q3oTQtx7oHvFReTEXN5X%2BVElog%2BAvP%2FqzQL7Fle1QnLK2m1v1xA%2Fn%2F7fDaK54mDTBLNjgnxdZu%2BZ%2FSX%2FFQqGPrWl69qVCyVA9lHtLzhU9ImlZdnUyOfWmmAxy97pC1iwfzyE2NB7dyaipir30lh22KfgG5%2FaD6gz48bdG7EAGbu9h5cxKqGiyODMN2P1ZDmD5MkgnveZH1YFsxJotmbPHSraXd2qGcFtnyjiQgvrmZk8eEoRY0%2Fzh6QXjSoFLeR%2Bn17v%2Fz4qiUfIPBY2Hu2NLc8UcoVjfgu02lXDBz6mzQJMM%2FJULLxmJy%2FMzwUMQh3l%2Bv930BnS7m0AYUs64cClTz3Gw%2Fblv0x4zi1FTYkxRAkSi1e2PqTH%2BI%2BO59KgLnk%2FS4GCojORGOq7BtjjvGWTrMOi3j8IGOqUBfNv6eZF7QhwgfS81qC4phN1XjQk5G0Zw1nWga7l9Iu0%2Fz8kPHzLXoMBYpLwFTxCYUc0E1ZKUFbUD7CQldDTOzQeFlPEvDaksme1L%2B%2F%2FvHloKtgeA9gO3Ef%2BBYUXLvkXIqreXVKAuPWemh3CF%2F23ojedk8m8johFnTFTzeKovm3cb%2BI8orVRU7Q5YZq6mwZYUWeog%2FczKYjUxfrmeJP9ewl%2BTO2mK&X-Amz-Signature=821341b8e7e0fb831b861bd1689dbc15481aee7f964bc3508bd49065025d25df&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6CJIYAB%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMlkePDfncxSWXJVlstviMi8RtaNnPgV%2FnNg4AiIEctQIgbyjkURIKqoXMM3UPKyzxPZ0u3LAJeDbwtXFbuvClSlwq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDMV3UOYzdhcbs2GvgCrcA9n9vjjUhJrBer60GtbaZxoqZNxbbAWINP5d%2FnZehZbw%2BEqzH0NsFhVhzsSvJkAR2r6y2XAQjKvQvHndh2f8o%2BvEEyRWNWg0jrLc8F%2Bcs2m5shufjubGRjwHkjX6LjvF1LX9JwoctKuXwfKf0ZIOyok8Tr%2FLJr3X4O7f6eCLyGZM1yMGqC3XBQ2D1acM5oA5o5Snf%2F4gNCejRm2iYsGUEblF74pVnqPLZYwBO51q3oTQtx7oHvFReTEXN5X%2BVElog%2BAvP%2FqzQL7Fle1QnLK2m1v1xA%2Fn%2F7fDaK54mDTBLNjgnxdZu%2BZ%2FSX%2FFQqGPrWl69qVCyVA9lHtLzhU9ImlZdnUyOfWmmAxy97pC1iwfzyE2NB7dyaipir30lh22KfgG5%2FaD6gz48bdG7EAGbu9h5cxKqGiyODMN2P1ZDmD5MkgnveZH1YFsxJotmbPHSraXd2qGcFtnyjiQgvrmZk8eEoRY0%2Fzh6QXjSoFLeR%2Bn17v%2Fz4qiUfIPBY2Hu2NLc8UcoVjfgu02lXDBz6mzQJMM%2FJULLxmJy%2FMzwUMQh3l%2Bv930BnS7m0AYUs64cClTz3Gw%2Fblv0x4zi1FTYkxRAkSi1e2PqTH%2BI%2BO59KgLnk%2FS4GCojORGOq7BtjjvGWTrMOi3j8IGOqUBfNv6eZF7QhwgfS81qC4phN1XjQk5G0Zw1nWga7l9Iu0%2Fz8kPHzLXoMBYpLwFTxCYUc0E1ZKUFbUD7CQldDTOzQeFlPEvDaksme1L%2B%2F%2FvHloKtgeA9gO3Ef%2BBYUXLvkXIqreXVKAuPWemh3CF%2F23ojedk8m8johFnTFTzeKovm3cb%2BI8orVRU7Q5YZq6mwZYUWeog%2FczKYjUxfrmeJP9ewl%2BTO2mK&X-Amz-Signature=3bc9567ec3da35eae422337fe37748d6cac49dfe6dff749a8a0995a2fec2b088&X-Amz-SignedHeaders=host&x-id=GetObject)
