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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFULOKGB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5Ii58OqjEd0qliYhPpqIKL9HVAjmU376iMt1bqxM%2B2AiAYXApMT%2FsPfanVFSFdC68HdCNtcNK6HmOwxxLCRtSZCyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI9m6vMNTM09KSJQ6KtwDqYerac3yxHU0iEXWu4%2B%2BFQrPObVhBa1%2BWm%2BlbsbdAnrGAEDrzSEVPW64SUKBgEyHQbQNB8ZJG%2Baxo4QJN7QIvSAQfp63eeVCVb%2BqO7549r5pqhseBoBVUWkbaNVlaHH6C6FSuTlD%2BC8JdHko31Pm%2BVCwMznZO0MC6v%2BX3deLWGdPUqIXdkSU7ljZ8dqUg3GuS29JfmPqd06ZfPaYfIHqkpkvHQdNjNA0JdZBd189BHcZJaDhkRcud2316KF65SDjtu6McZz49SoXd55RS46Tc5VR%2BHWr%2F3RssEmcULMV%2BUXqW7xYBxOZ6gXxA3MWQQb3errANmSFa3AlsDl%2FUP2YkxrlGrD8hmmwTh%2BALd9GcBCMLq%2FlR3MxV%2BcWGrZ2p5pF8J3psU%2BaoAIwlCwgm1zW2KZoRr0RfvSjPcDhgTVcwkdINkdRe%2BMIE1fHpRURyZm%2BKKDrS64%2F0gn7rJZ5MHMcqovRiBv7F8qiELMojV4prOzrrEhJCEGvttK2RiWk%2FClN2JLvxWhddy42gkN5hmWvieFoEoXbA9ZYeJ6C3pAGOFoubE%2Fd%2Fg6K90sV81F%2FkkPwweXjzW8odc6GzMKzTrpr9rPEuJoaStbojEGrgb%2Fpjr0U89yRsi3elPE3PMQwzZyTwgY6pgGiWiLlqiL52ezGbxzfLsU0vCxJH7pe3RAc3UYSNU3SQ047rpj4Tsh7zpLE9uS5ArKCwZaEugyKlDVp6k9CJHz4%2FMgwXQPaEoooUU5e33HKGFBEdOf0ZrRVGcbgqQHJknL%2Fo4mLB4l5RNfRm2OjRZeGdyudVw8g3F0HqlpNBWwTP7Uo9H5P4SyGn2pQnEBTxvZZm8dJZHGH4%2F0KNlaH1oJps9s3SEol&X-Amz-Signature=e347b4342c272194020f3863cd19a3102225b8cca9f6b0e6e464ae43359355cf&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFULOKGB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5Ii58OqjEd0qliYhPpqIKL9HVAjmU376iMt1bqxM%2B2AiAYXApMT%2FsPfanVFSFdC68HdCNtcNK6HmOwxxLCRtSZCyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI9m6vMNTM09KSJQ6KtwDqYerac3yxHU0iEXWu4%2B%2BFQrPObVhBa1%2BWm%2BlbsbdAnrGAEDrzSEVPW64SUKBgEyHQbQNB8ZJG%2Baxo4QJN7QIvSAQfp63eeVCVb%2BqO7549r5pqhseBoBVUWkbaNVlaHH6C6FSuTlD%2BC8JdHko31Pm%2BVCwMznZO0MC6v%2BX3deLWGdPUqIXdkSU7ljZ8dqUg3GuS29JfmPqd06ZfPaYfIHqkpkvHQdNjNA0JdZBd189BHcZJaDhkRcud2316KF65SDjtu6McZz49SoXd55RS46Tc5VR%2BHWr%2F3RssEmcULMV%2BUXqW7xYBxOZ6gXxA3MWQQb3errANmSFa3AlsDl%2FUP2YkxrlGrD8hmmwTh%2BALd9GcBCMLq%2FlR3MxV%2BcWGrZ2p5pF8J3psU%2BaoAIwlCwgm1zW2KZoRr0RfvSjPcDhgTVcwkdINkdRe%2BMIE1fHpRURyZm%2BKKDrS64%2F0gn7rJZ5MHMcqovRiBv7F8qiELMojV4prOzrrEhJCEGvttK2RiWk%2FClN2JLvxWhddy42gkN5hmWvieFoEoXbA9ZYeJ6C3pAGOFoubE%2Fd%2Fg6K90sV81F%2FkkPwweXjzW8odc6GzMKzTrpr9rPEuJoaStbojEGrgb%2Fpjr0U89yRsi3elPE3PMQwzZyTwgY6pgGiWiLlqiL52ezGbxzfLsU0vCxJH7pe3RAc3UYSNU3SQ047rpj4Tsh7zpLE9uS5ArKCwZaEugyKlDVp6k9CJHz4%2FMgwXQPaEoooUU5e33HKGFBEdOf0ZrRVGcbgqQHJknL%2Fo4mLB4l5RNfRm2OjRZeGdyudVw8g3F0HqlpNBWwTP7Uo9H5P4SyGn2pQnEBTxvZZm8dJZHGH4%2F0KNlaH1oJps9s3SEol&X-Amz-Signature=11c3b3f0c9f161ae7567a760aac6b2af9eb8892b3087f2571d8417478c1ff6a3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFULOKGB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5Ii58OqjEd0qliYhPpqIKL9HVAjmU376iMt1bqxM%2B2AiAYXApMT%2FsPfanVFSFdC68HdCNtcNK6HmOwxxLCRtSZCyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI9m6vMNTM09KSJQ6KtwDqYerac3yxHU0iEXWu4%2B%2BFQrPObVhBa1%2BWm%2BlbsbdAnrGAEDrzSEVPW64SUKBgEyHQbQNB8ZJG%2Baxo4QJN7QIvSAQfp63eeVCVb%2BqO7549r5pqhseBoBVUWkbaNVlaHH6C6FSuTlD%2BC8JdHko31Pm%2BVCwMznZO0MC6v%2BX3deLWGdPUqIXdkSU7ljZ8dqUg3GuS29JfmPqd06ZfPaYfIHqkpkvHQdNjNA0JdZBd189BHcZJaDhkRcud2316KF65SDjtu6McZz49SoXd55RS46Tc5VR%2BHWr%2F3RssEmcULMV%2BUXqW7xYBxOZ6gXxA3MWQQb3errANmSFa3AlsDl%2FUP2YkxrlGrD8hmmwTh%2BALd9GcBCMLq%2FlR3MxV%2BcWGrZ2p5pF8J3psU%2BaoAIwlCwgm1zW2KZoRr0RfvSjPcDhgTVcwkdINkdRe%2BMIE1fHpRURyZm%2BKKDrS64%2F0gn7rJZ5MHMcqovRiBv7F8qiELMojV4prOzrrEhJCEGvttK2RiWk%2FClN2JLvxWhddy42gkN5hmWvieFoEoXbA9ZYeJ6C3pAGOFoubE%2Fd%2Fg6K90sV81F%2FkkPwweXjzW8odc6GzMKzTrpr9rPEuJoaStbojEGrgb%2Fpjr0U89yRsi3elPE3PMQwzZyTwgY6pgGiWiLlqiL52ezGbxzfLsU0vCxJH7pe3RAc3UYSNU3SQ047rpj4Tsh7zpLE9uS5ArKCwZaEugyKlDVp6k9CJHz4%2FMgwXQPaEoooUU5e33HKGFBEdOf0ZrRVGcbgqQHJknL%2Fo4mLB4l5RNfRm2OjRZeGdyudVw8g3F0HqlpNBWwTP7Uo9H5P4SyGn2pQnEBTxvZZm8dJZHGH4%2F0KNlaH1oJps9s3SEol&X-Amz-Signature=48974eb4efb1b662dbd3811fbbf9961db4c8653422d87aba03fe76595f41312b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFULOKGB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5Ii58OqjEd0qliYhPpqIKL9HVAjmU376iMt1bqxM%2B2AiAYXApMT%2FsPfanVFSFdC68HdCNtcNK6HmOwxxLCRtSZCyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI9m6vMNTM09KSJQ6KtwDqYerac3yxHU0iEXWu4%2B%2BFQrPObVhBa1%2BWm%2BlbsbdAnrGAEDrzSEVPW64SUKBgEyHQbQNB8ZJG%2Baxo4QJN7QIvSAQfp63eeVCVb%2BqO7549r5pqhseBoBVUWkbaNVlaHH6C6FSuTlD%2BC8JdHko31Pm%2BVCwMznZO0MC6v%2BX3deLWGdPUqIXdkSU7ljZ8dqUg3GuS29JfmPqd06ZfPaYfIHqkpkvHQdNjNA0JdZBd189BHcZJaDhkRcud2316KF65SDjtu6McZz49SoXd55RS46Tc5VR%2BHWr%2F3RssEmcULMV%2BUXqW7xYBxOZ6gXxA3MWQQb3errANmSFa3AlsDl%2FUP2YkxrlGrD8hmmwTh%2BALd9GcBCMLq%2FlR3MxV%2BcWGrZ2p5pF8J3psU%2BaoAIwlCwgm1zW2KZoRr0RfvSjPcDhgTVcwkdINkdRe%2BMIE1fHpRURyZm%2BKKDrS64%2F0gn7rJZ5MHMcqovRiBv7F8qiELMojV4prOzrrEhJCEGvttK2RiWk%2FClN2JLvxWhddy42gkN5hmWvieFoEoXbA9ZYeJ6C3pAGOFoubE%2Fd%2Fg6K90sV81F%2FkkPwweXjzW8odc6GzMKzTrpr9rPEuJoaStbojEGrgb%2Fpjr0U89yRsi3elPE3PMQwzZyTwgY6pgGiWiLlqiL52ezGbxzfLsU0vCxJH7pe3RAc3UYSNU3SQ047rpj4Tsh7zpLE9uS5ArKCwZaEugyKlDVp6k9CJHz4%2FMgwXQPaEoooUU5e33HKGFBEdOf0ZrRVGcbgqQHJknL%2Fo4mLB4l5RNfRm2OjRZeGdyudVw8g3F0HqlpNBWwTP7Uo9H5P4SyGn2pQnEBTxvZZm8dJZHGH4%2F0KNlaH1oJps9s3SEol&X-Amz-Signature=acf01ec80064696d21c498e937b8e03c0da0a03336a45489eceddf9fb5924324&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFULOKGB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5Ii58OqjEd0qliYhPpqIKL9HVAjmU376iMt1bqxM%2B2AiAYXApMT%2FsPfanVFSFdC68HdCNtcNK6HmOwxxLCRtSZCyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI9m6vMNTM09KSJQ6KtwDqYerac3yxHU0iEXWu4%2B%2BFQrPObVhBa1%2BWm%2BlbsbdAnrGAEDrzSEVPW64SUKBgEyHQbQNB8ZJG%2Baxo4QJN7QIvSAQfp63eeVCVb%2BqO7549r5pqhseBoBVUWkbaNVlaHH6C6FSuTlD%2BC8JdHko31Pm%2BVCwMznZO0MC6v%2BX3deLWGdPUqIXdkSU7ljZ8dqUg3GuS29JfmPqd06ZfPaYfIHqkpkvHQdNjNA0JdZBd189BHcZJaDhkRcud2316KF65SDjtu6McZz49SoXd55RS46Tc5VR%2BHWr%2F3RssEmcULMV%2BUXqW7xYBxOZ6gXxA3MWQQb3errANmSFa3AlsDl%2FUP2YkxrlGrD8hmmwTh%2BALd9GcBCMLq%2FlR3MxV%2BcWGrZ2p5pF8J3psU%2BaoAIwlCwgm1zW2KZoRr0RfvSjPcDhgTVcwkdINkdRe%2BMIE1fHpRURyZm%2BKKDrS64%2F0gn7rJZ5MHMcqovRiBv7F8qiELMojV4prOzrrEhJCEGvttK2RiWk%2FClN2JLvxWhddy42gkN5hmWvieFoEoXbA9ZYeJ6C3pAGOFoubE%2Fd%2Fg6K90sV81F%2FkkPwweXjzW8odc6GzMKzTrpr9rPEuJoaStbojEGrgb%2Fpjr0U89yRsi3elPE3PMQwzZyTwgY6pgGiWiLlqiL52ezGbxzfLsU0vCxJH7pe3RAc3UYSNU3SQ047rpj4Tsh7zpLE9uS5ArKCwZaEugyKlDVp6k9CJHz4%2FMgwXQPaEoooUU5e33HKGFBEdOf0ZrRVGcbgqQHJknL%2Fo4mLB4l5RNfRm2OjRZeGdyudVw8g3F0HqlpNBWwTP7Uo9H5P4SyGn2pQnEBTxvZZm8dJZHGH4%2F0KNlaH1oJps9s3SEol&X-Amz-Signature=339d00601498df62e3047ce9959f8d60d160c245a2890b0f4bd6316c37938872&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFULOKGB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5Ii58OqjEd0qliYhPpqIKL9HVAjmU376iMt1bqxM%2B2AiAYXApMT%2FsPfanVFSFdC68HdCNtcNK6HmOwxxLCRtSZCyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI9m6vMNTM09KSJQ6KtwDqYerac3yxHU0iEXWu4%2B%2BFQrPObVhBa1%2BWm%2BlbsbdAnrGAEDrzSEVPW64SUKBgEyHQbQNB8ZJG%2Baxo4QJN7QIvSAQfp63eeVCVb%2BqO7549r5pqhseBoBVUWkbaNVlaHH6C6FSuTlD%2BC8JdHko31Pm%2BVCwMznZO0MC6v%2BX3deLWGdPUqIXdkSU7ljZ8dqUg3GuS29JfmPqd06ZfPaYfIHqkpkvHQdNjNA0JdZBd189BHcZJaDhkRcud2316KF65SDjtu6McZz49SoXd55RS46Tc5VR%2BHWr%2F3RssEmcULMV%2BUXqW7xYBxOZ6gXxA3MWQQb3errANmSFa3AlsDl%2FUP2YkxrlGrD8hmmwTh%2BALd9GcBCMLq%2FlR3MxV%2BcWGrZ2p5pF8J3psU%2BaoAIwlCwgm1zW2KZoRr0RfvSjPcDhgTVcwkdINkdRe%2BMIE1fHpRURyZm%2BKKDrS64%2F0gn7rJZ5MHMcqovRiBv7F8qiELMojV4prOzrrEhJCEGvttK2RiWk%2FClN2JLvxWhddy42gkN5hmWvieFoEoXbA9ZYeJ6C3pAGOFoubE%2Fd%2Fg6K90sV81F%2FkkPwweXjzW8odc6GzMKzTrpr9rPEuJoaStbojEGrgb%2Fpjr0U89yRsi3elPE3PMQwzZyTwgY6pgGiWiLlqiL52ezGbxzfLsU0vCxJH7pe3RAc3UYSNU3SQ047rpj4Tsh7zpLE9uS5ArKCwZaEugyKlDVp6k9CJHz4%2FMgwXQPaEoooUU5e33HKGFBEdOf0ZrRVGcbgqQHJknL%2Fo4mLB4l5RNfRm2OjRZeGdyudVw8g3F0HqlpNBWwTP7Uo9H5P4SyGn2pQnEBTxvZZm8dJZHGH4%2F0KNlaH1oJps9s3SEol&X-Amz-Signature=d443db5812963dc3b76e2003bb315efb915bf0a97d8c10a81ed80797ea2bd3b6&X-Amz-SignedHeaders=host&x-id=GetObject)
