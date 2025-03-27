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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHG3ABLW%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP6qKQb%2B2rPRVZp4PwLRTvBlO1nCOEuJJZYLYi4GavrwIhAOr%2B%2F5CoqgQTuJf5UYxLfNzin3Hhzedw2Hdsbfo58mvGKv8DCD0QABoMNjM3NDIzMTgzODA1Igxd6D2SHAWcINab5Gkq3AMs4N7s3X5sVly43TxE8Tz%2BvVPqqm01eD3TYDHQ0fOGi6wfqBjNJsq74aVdtV5MVkfpv0CQWArI35ezaCcB7TLG5e6%2BPZjpNV%2Fyj3ykRxC%2Fw9nrdMMYR%2FBwhmUxcH6Cu%2BQh9w5Jc8HWtOrmlAV4MxYHTFz7FCFUxke27rGIfxd2GnFjKuLgcDMplZg5x2UuDN5GAU70CzId1IMK9OJb7Yn%2BsE2NUhPK%2FToQCwYImS6i%2FoKM0c5FkVF5QS%2Bu5AAR79GtOIDHQUVp1hq%2BjgXEdV%2FvunY69LS3s00V46TEr9LzSZj2TSb8XkwkSNGrx%2BJJve4iufpbLycAnpGCME2dTbiWL35tkYH%2FYNKwS8AnL57mOmtcz3zQMAu%2BFPxFYlg0F30bAa2kv%2Bab28TAKXgL2qAFuu38RqoiFl7qdEnO64sJWs7Tex2B%2Bff9YXbJ1Ff2hdp6DRJ1kZj1hF6sjArikHfkqX1m8HYrqVecZuFTI7S9uIQ6BZqW7yjWMOYiApt87VkFBdlgET32FpOvH%2BEqXp4Jwlz6Y0q%2BJmurmawsfoKFZkaTSn2tvY%2BgY5b7tPJmdEfsFMDAR8wx2ZJvRPhfaoag86dmRYWl167%2BP2d7BbJ4YG1oFvyvQ79GbhTgwzCbpZO%2FBjqkAXfYtflsz9C%2BtJkz3QBsjmRl8LBvFDNp%2FDwMIVlzevnW82eNF%2B0Ncz9NCOkc1unZoNyzqhxmiHTm%2FmjpqPFaukY3HipZA6XAqRyZrzKu%2FBgCpO4t%2FxZwbICQj%2BKYmsRQ7979B%2B8A9IH7Pq7J1leDnFe2XhSS82rHR9pdFvarYPqf2JQ259bVrKvNiiJzbP87Q6Hx2EMBRumjoQbLO0J8zxlBVrWs&X-Amz-Signature=3c9d68fbf88e3195962035d029d8776ae4a4d62af788b331886c286c1bf34fff&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHG3ABLW%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP6qKQb%2B2rPRVZp4PwLRTvBlO1nCOEuJJZYLYi4GavrwIhAOr%2B%2F5CoqgQTuJf5UYxLfNzin3Hhzedw2Hdsbfo58mvGKv8DCD0QABoMNjM3NDIzMTgzODA1Igxd6D2SHAWcINab5Gkq3AMs4N7s3X5sVly43TxE8Tz%2BvVPqqm01eD3TYDHQ0fOGi6wfqBjNJsq74aVdtV5MVkfpv0CQWArI35ezaCcB7TLG5e6%2BPZjpNV%2Fyj3ykRxC%2Fw9nrdMMYR%2FBwhmUxcH6Cu%2BQh9w5Jc8HWtOrmlAV4MxYHTFz7FCFUxke27rGIfxd2GnFjKuLgcDMplZg5x2UuDN5GAU70CzId1IMK9OJb7Yn%2BsE2NUhPK%2FToQCwYImS6i%2FoKM0c5FkVF5QS%2Bu5AAR79GtOIDHQUVp1hq%2BjgXEdV%2FvunY69LS3s00V46TEr9LzSZj2TSb8XkwkSNGrx%2BJJve4iufpbLycAnpGCME2dTbiWL35tkYH%2FYNKwS8AnL57mOmtcz3zQMAu%2BFPxFYlg0F30bAa2kv%2Bab28TAKXgL2qAFuu38RqoiFl7qdEnO64sJWs7Tex2B%2Bff9YXbJ1Ff2hdp6DRJ1kZj1hF6sjArikHfkqX1m8HYrqVecZuFTI7S9uIQ6BZqW7yjWMOYiApt87VkFBdlgET32FpOvH%2BEqXp4Jwlz6Y0q%2BJmurmawsfoKFZkaTSn2tvY%2BgY5b7tPJmdEfsFMDAR8wx2ZJvRPhfaoag86dmRYWl167%2BP2d7BbJ4YG1oFvyvQ79GbhTgwzCbpZO%2FBjqkAXfYtflsz9C%2BtJkz3QBsjmRl8LBvFDNp%2FDwMIVlzevnW82eNF%2B0Ncz9NCOkc1unZoNyzqhxmiHTm%2FmjpqPFaukY3HipZA6XAqRyZrzKu%2FBgCpO4t%2FxZwbICQj%2BKYmsRQ7979B%2B8A9IH7Pq7J1leDnFe2XhSS82rHR9pdFvarYPqf2JQ259bVrKvNiiJzbP87Q6Hx2EMBRumjoQbLO0J8zxlBVrWs&X-Amz-Signature=69719db321700774be0897e39d78a61a4338007fc67d7ccb0bb8c2a738cade52&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHG3ABLW%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP6qKQb%2B2rPRVZp4PwLRTvBlO1nCOEuJJZYLYi4GavrwIhAOr%2B%2F5CoqgQTuJf5UYxLfNzin3Hhzedw2Hdsbfo58mvGKv8DCD0QABoMNjM3NDIzMTgzODA1Igxd6D2SHAWcINab5Gkq3AMs4N7s3X5sVly43TxE8Tz%2BvVPqqm01eD3TYDHQ0fOGi6wfqBjNJsq74aVdtV5MVkfpv0CQWArI35ezaCcB7TLG5e6%2BPZjpNV%2Fyj3ykRxC%2Fw9nrdMMYR%2FBwhmUxcH6Cu%2BQh9w5Jc8HWtOrmlAV4MxYHTFz7FCFUxke27rGIfxd2GnFjKuLgcDMplZg5x2UuDN5GAU70CzId1IMK9OJb7Yn%2BsE2NUhPK%2FToQCwYImS6i%2FoKM0c5FkVF5QS%2Bu5AAR79GtOIDHQUVp1hq%2BjgXEdV%2FvunY69LS3s00V46TEr9LzSZj2TSb8XkwkSNGrx%2BJJve4iufpbLycAnpGCME2dTbiWL35tkYH%2FYNKwS8AnL57mOmtcz3zQMAu%2BFPxFYlg0F30bAa2kv%2Bab28TAKXgL2qAFuu38RqoiFl7qdEnO64sJWs7Tex2B%2Bff9YXbJ1Ff2hdp6DRJ1kZj1hF6sjArikHfkqX1m8HYrqVecZuFTI7S9uIQ6BZqW7yjWMOYiApt87VkFBdlgET32FpOvH%2BEqXp4Jwlz6Y0q%2BJmurmawsfoKFZkaTSn2tvY%2BgY5b7tPJmdEfsFMDAR8wx2ZJvRPhfaoag86dmRYWl167%2BP2d7BbJ4YG1oFvyvQ79GbhTgwzCbpZO%2FBjqkAXfYtflsz9C%2BtJkz3QBsjmRl8LBvFDNp%2FDwMIVlzevnW82eNF%2B0Ncz9NCOkc1unZoNyzqhxmiHTm%2FmjpqPFaukY3HipZA6XAqRyZrzKu%2FBgCpO4t%2FxZwbICQj%2BKYmsRQ7979B%2B8A9IH7Pq7J1leDnFe2XhSS82rHR9pdFvarYPqf2JQ259bVrKvNiiJzbP87Q6Hx2EMBRumjoQbLO0J8zxlBVrWs&X-Amz-Signature=ba7dd6b3fb40a7992106aa2e0a4a05ba9003ad8920e4e9dee8aeaea6243c9fdb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHG3ABLW%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP6qKQb%2B2rPRVZp4PwLRTvBlO1nCOEuJJZYLYi4GavrwIhAOr%2B%2F5CoqgQTuJf5UYxLfNzin3Hhzedw2Hdsbfo58mvGKv8DCD0QABoMNjM3NDIzMTgzODA1Igxd6D2SHAWcINab5Gkq3AMs4N7s3X5sVly43TxE8Tz%2BvVPqqm01eD3TYDHQ0fOGi6wfqBjNJsq74aVdtV5MVkfpv0CQWArI35ezaCcB7TLG5e6%2BPZjpNV%2Fyj3ykRxC%2Fw9nrdMMYR%2FBwhmUxcH6Cu%2BQh9w5Jc8HWtOrmlAV4MxYHTFz7FCFUxke27rGIfxd2GnFjKuLgcDMplZg5x2UuDN5GAU70CzId1IMK9OJb7Yn%2BsE2NUhPK%2FToQCwYImS6i%2FoKM0c5FkVF5QS%2Bu5AAR79GtOIDHQUVp1hq%2BjgXEdV%2FvunY69LS3s00V46TEr9LzSZj2TSb8XkwkSNGrx%2BJJve4iufpbLycAnpGCME2dTbiWL35tkYH%2FYNKwS8AnL57mOmtcz3zQMAu%2BFPxFYlg0F30bAa2kv%2Bab28TAKXgL2qAFuu38RqoiFl7qdEnO64sJWs7Tex2B%2Bff9YXbJ1Ff2hdp6DRJ1kZj1hF6sjArikHfkqX1m8HYrqVecZuFTI7S9uIQ6BZqW7yjWMOYiApt87VkFBdlgET32FpOvH%2BEqXp4Jwlz6Y0q%2BJmurmawsfoKFZkaTSn2tvY%2BgY5b7tPJmdEfsFMDAR8wx2ZJvRPhfaoag86dmRYWl167%2BP2d7BbJ4YG1oFvyvQ79GbhTgwzCbpZO%2FBjqkAXfYtflsz9C%2BtJkz3QBsjmRl8LBvFDNp%2FDwMIVlzevnW82eNF%2B0Ncz9NCOkc1unZoNyzqhxmiHTm%2FmjpqPFaukY3HipZA6XAqRyZrzKu%2FBgCpO4t%2FxZwbICQj%2BKYmsRQ7979B%2B8A9IH7Pq7J1leDnFe2XhSS82rHR9pdFvarYPqf2JQ259bVrKvNiiJzbP87Q6Hx2EMBRumjoQbLO0J8zxlBVrWs&X-Amz-Signature=1311571de42b9d4a0981f41ad63f02a623a48b850444373491e8db2500f20b18&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHG3ABLW%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP6qKQb%2B2rPRVZp4PwLRTvBlO1nCOEuJJZYLYi4GavrwIhAOr%2B%2F5CoqgQTuJf5UYxLfNzin3Hhzedw2Hdsbfo58mvGKv8DCD0QABoMNjM3NDIzMTgzODA1Igxd6D2SHAWcINab5Gkq3AMs4N7s3X5sVly43TxE8Tz%2BvVPqqm01eD3TYDHQ0fOGi6wfqBjNJsq74aVdtV5MVkfpv0CQWArI35ezaCcB7TLG5e6%2BPZjpNV%2Fyj3ykRxC%2Fw9nrdMMYR%2FBwhmUxcH6Cu%2BQh9w5Jc8HWtOrmlAV4MxYHTFz7FCFUxke27rGIfxd2GnFjKuLgcDMplZg5x2UuDN5GAU70CzId1IMK9OJb7Yn%2BsE2NUhPK%2FToQCwYImS6i%2FoKM0c5FkVF5QS%2Bu5AAR79GtOIDHQUVp1hq%2BjgXEdV%2FvunY69LS3s00V46TEr9LzSZj2TSb8XkwkSNGrx%2BJJve4iufpbLycAnpGCME2dTbiWL35tkYH%2FYNKwS8AnL57mOmtcz3zQMAu%2BFPxFYlg0F30bAa2kv%2Bab28TAKXgL2qAFuu38RqoiFl7qdEnO64sJWs7Tex2B%2Bff9YXbJ1Ff2hdp6DRJ1kZj1hF6sjArikHfkqX1m8HYrqVecZuFTI7S9uIQ6BZqW7yjWMOYiApt87VkFBdlgET32FpOvH%2BEqXp4Jwlz6Y0q%2BJmurmawsfoKFZkaTSn2tvY%2BgY5b7tPJmdEfsFMDAR8wx2ZJvRPhfaoag86dmRYWl167%2BP2d7BbJ4YG1oFvyvQ79GbhTgwzCbpZO%2FBjqkAXfYtflsz9C%2BtJkz3QBsjmRl8LBvFDNp%2FDwMIVlzevnW82eNF%2B0Ncz9NCOkc1unZoNyzqhxmiHTm%2FmjpqPFaukY3HipZA6XAqRyZrzKu%2FBgCpO4t%2FxZwbICQj%2BKYmsRQ7979B%2B8A9IH7Pq7J1leDnFe2XhSS82rHR9pdFvarYPqf2JQ259bVrKvNiiJzbP87Q6Hx2EMBRumjoQbLO0J8zxlBVrWs&X-Amz-Signature=6b91834bd6c7b218c09facfc2dd9445baf3da5f023b324d91de7b199aba69a6b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHG3ABLW%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP6qKQb%2B2rPRVZp4PwLRTvBlO1nCOEuJJZYLYi4GavrwIhAOr%2B%2F5CoqgQTuJf5UYxLfNzin3Hhzedw2Hdsbfo58mvGKv8DCD0QABoMNjM3NDIzMTgzODA1Igxd6D2SHAWcINab5Gkq3AMs4N7s3X5sVly43TxE8Tz%2BvVPqqm01eD3TYDHQ0fOGi6wfqBjNJsq74aVdtV5MVkfpv0CQWArI35ezaCcB7TLG5e6%2BPZjpNV%2Fyj3ykRxC%2Fw9nrdMMYR%2FBwhmUxcH6Cu%2BQh9w5Jc8HWtOrmlAV4MxYHTFz7FCFUxke27rGIfxd2GnFjKuLgcDMplZg5x2UuDN5GAU70CzId1IMK9OJb7Yn%2BsE2NUhPK%2FToQCwYImS6i%2FoKM0c5FkVF5QS%2Bu5AAR79GtOIDHQUVp1hq%2BjgXEdV%2FvunY69LS3s00V46TEr9LzSZj2TSb8XkwkSNGrx%2BJJve4iufpbLycAnpGCME2dTbiWL35tkYH%2FYNKwS8AnL57mOmtcz3zQMAu%2BFPxFYlg0F30bAa2kv%2Bab28TAKXgL2qAFuu38RqoiFl7qdEnO64sJWs7Tex2B%2Bff9YXbJ1Ff2hdp6DRJ1kZj1hF6sjArikHfkqX1m8HYrqVecZuFTI7S9uIQ6BZqW7yjWMOYiApt87VkFBdlgET32FpOvH%2BEqXp4Jwlz6Y0q%2BJmurmawsfoKFZkaTSn2tvY%2BgY5b7tPJmdEfsFMDAR8wx2ZJvRPhfaoag86dmRYWl167%2BP2d7BbJ4YG1oFvyvQ79GbhTgwzCbpZO%2FBjqkAXfYtflsz9C%2BtJkz3QBsjmRl8LBvFDNp%2FDwMIVlzevnW82eNF%2B0Ncz9NCOkc1unZoNyzqhxmiHTm%2FmjpqPFaukY3HipZA6XAqRyZrzKu%2FBgCpO4t%2FxZwbICQj%2BKYmsRQ7979B%2B8A9IH7Pq7J1leDnFe2XhSS82rHR9pdFvarYPqf2JQ259bVrKvNiiJzbP87Q6Hx2EMBRumjoQbLO0J8zxlBVrWs&X-Amz-Signature=505ab9de231ad82adef0baa4f9da3787bf3da503a82bcd81fa5e9fb3c47d0160&X-Amz-SignedHeaders=host&x-id=GetObject)
