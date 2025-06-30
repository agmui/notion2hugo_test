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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULEWRY4H%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T181238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2F8A5pS%2Fj05sOT9yEZlKO80GGvDgtfaOzQBqnjmki2PAiA8zDLluIIhbWvvr4zCL056ifJfdZvysnKVo7bXknquFyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaRx%2FC4mLHxwWEv8HKtwDlhAuT%2F0BMWs5l6OQni4I3CyMoKxrWBpaQWTpsR%2F1ZuAT5hXSkJsJ1W8pRcRrwOK1tJy7fjgJilRLpdkL3f6Sx5Uf5tGJxmEd28NEh6oBD97mZdtFRDI%2BugVy7%2BHT0j7SUTzVXOljwuBZf0ZDztSEw14mStO2E3ryWBE3aBAw2Ihh6cQiZAHLOeTW2MvaD4HxwSlIqqUTUu8lZ6HWcdHbCYbI%2F6j%2BmsPUXh8aIne%2BBG8%2Bb543VOh1qVNHUk65xmzeTDRLMBcEQkcxnBd8do7T%2Flvh2y1t8HE%2Bgl96xdbvJP3k9M0hWedPNwAdxGdZmFcKvpttoI8zUNMvx%2FUn3eaiXpEkbdo9NHrUMvTBiISOuQBfTjLnWol%2FAPNgjaenMHdp1j1fnrfdIh5pdCn4KOLJB4G9tbTJcBkB8VUFl7NkfZuPiersI0V95qNBo%2F%2B0G1G%2BzCtafr99LvhnASRFU4T9M9mOtdjLebk9Qs4l24YAW3HualsSWWvI%2BlCNKc1lPj%2BFeiaRAv9Uelps33mUHBEfXWc89QQf9sSARQ0fetJ9XCLya3bq7vJRMfZ%2F2kr%2B3EOcezYHuY%2BB4bDvtgF9sqIhNTnPLqi%2BnPBegWN%2F6DTbmBPf8ZZvalt22dJsM0kwlKOLwwY6pgEIrS3xl61wR28PnyGVE%2BrxVhg0PDg6HIdXncxZSRuKvoAj%2Bnc2aqjjcyq8kkFAfD%2F%2FFr9y9%2BkYwVevYK2ywqbMjwtr4jmNkmTAwPdtE5tSvT5O2GDP5YM2gOaCs51QdqOCe9tom%2BwHvnvIR90DSnxtNaxuYG0t%2BQI9PR20Kn7pma8K2EpVZUyArg2Wy7UNSeuxq6gfzM%2BqfQsolMbJPtBTXjs2uphT&X-Amz-Signature=0493307119cb4d88d9d87d46259bbe5c1574dc88fc0d3a7517351cd6fbfc4407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULEWRY4H%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T181238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2F8A5pS%2Fj05sOT9yEZlKO80GGvDgtfaOzQBqnjmki2PAiA8zDLluIIhbWvvr4zCL056ifJfdZvysnKVo7bXknquFyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaRx%2FC4mLHxwWEv8HKtwDlhAuT%2F0BMWs5l6OQni4I3CyMoKxrWBpaQWTpsR%2F1ZuAT5hXSkJsJ1W8pRcRrwOK1tJy7fjgJilRLpdkL3f6Sx5Uf5tGJxmEd28NEh6oBD97mZdtFRDI%2BugVy7%2BHT0j7SUTzVXOljwuBZf0ZDztSEw14mStO2E3ryWBE3aBAw2Ihh6cQiZAHLOeTW2MvaD4HxwSlIqqUTUu8lZ6HWcdHbCYbI%2F6j%2BmsPUXh8aIne%2BBG8%2Bb543VOh1qVNHUk65xmzeTDRLMBcEQkcxnBd8do7T%2Flvh2y1t8HE%2Bgl96xdbvJP3k9M0hWedPNwAdxGdZmFcKvpttoI8zUNMvx%2FUn3eaiXpEkbdo9NHrUMvTBiISOuQBfTjLnWol%2FAPNgjaenMHdp1j1fnrfdIh5pdCn4KOLJB4G9tbTJcBkB8VUFl7NkfZuPiersI0V95qNBo%2F%2B0G1G%2BzCtafr99LvhnASRFU4T9M9mOtdjLebk9Qs4l24YAW3HualsSWWvI%2BlCNKc1lPj%2BFeiaRAv9Uelps33mUHBEfXWc89QQf9sSARQ0fetJ9XCLya3bq7vJRMfZ%2F2kr%2B3EOcezYHuY%2BB4bDvtgF9sqIhNTnPLqi%2BnPBegWN%2F6DTbmBPf8ZZvalt22dJsM0kwlKOLwwY6pgEIrS3xl61wR28PnyGVE%2BrxVhg0PDg6HIdXncxZSRuKvoAj%2Bnc2aqjjcyq8kkFAfD%2F%2FFr9y9%2BkYwVevYK2ywqbMjwtr4jmNkmTAwPdtE5tSvT5O2GDP5YM2gOaCs51QdqOCe9tom%2BwHvnvIR90DSnxtNaxuYG0t%2BQI9PR20Kn7pma8K2EpVZUyArg2Wy7UNSeuxq6gfzM%2BqfQsolMbJPtBTXjs2uphT&X-Amz-Signature=82527fdd309bae1808cc6aa503e81db280057b6a2e7f54944f672de69ea672e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULEWRY4H%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T181238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2F8A5pS%2Fj05sOT9yEZlKO80GGvDgtfaOzQBqnjmki2PAiA8zDLluIIhbWvvr4zCL056ifJfdZvysnKVo7bXknquFyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaRx%2FC4mLHxwWEv8HKtwDlhAuT%2F0BMWs5l6OQni4I3CyMoKxrWBpaQWTpsR%2F1ZuAT5hXSkJsJ1W8pRcRrwOK1tJy7fjgJilRLpdkL3f6Sx5Uf5tGJxmEd28NEh6oBD97mZdtFRDI%2BugVy7%2BHT0j7SUTzVXOljwuBZf0ZDztSEw14mStO2E3ryWBE3aBAw2Ihh6cQiZAHLOeTW2MvaD4HxwSlIqqUTUu8lZ6HWcdHbCYbI%2F6j%2BmsPUXh8aIne%2BBG8%2Bb543VOh1qVNHUk65xmzeTDRLMBcEQkcxnBd8do7T%2Flvh2y1t8HE%2Bgl96xdbvJP3k9M0hWedPNwAdxGdZmFcKvpttoI8zUNMvx%2FUn3eaiXpEkbdo9NHrUMvTBiISOuQBfTjLnWol%2FAPNgjaenMHdp1j1fnrfdIh5pdCn4KOLJB4G9tbTJcBkB8VUFl7NkfZuPiersI0V95qNBo%2F%2B0G1G%2BzCtafr99LvhnASRFU4T9M9mOtdjLebk9Qs4l24YAW3HualsSWWvI%2BlCNKc1lPj%2BFeiaRAv9Uelps33mUHBEfXWc89QQf9sSARQ0fetJ9XCLya3bq7vJRMfZ%2F2kr%2B3EOcezYHuY%2BB4bDvtgF9sqIhNTnPLqi%2BnPBegWN%2F6DTbmBPf8ZZvalt22dJsM0kwlKOLwwY6pgEIrS3xl61wR28PnyGVE%2BrxVhg0PDg6HIdXncxZSRuKvoAj%2Bnc2aqjjcyq8kkFAfD%2F%2FFr9y9%2BkYwVevYK2ywqbMjwtr4jmNkmTAwPdtE5tSvT5O2GDP5YM2gOaCs51QdqOCe9tom%2BwHvnvIR90DSnxtNaxuYG0t%2BQI9PR20Kn7pma8K2EpVZUyArg2Wy7UNSeuxq6gfzM%2BqfQsolMbJPtBTXjs2uphT&X-Amz-Signature=d5d44aaa4ce8a9692ad46affb27814fd82d913c5f00055eca5b94e5722ab2fc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULEWRY4H%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T181238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2F8A5pS%2Fj05sOT9yEZlKO80GGvDgtfaOzQBqnjmki2PAiA8zDLluIIhbWvvr4zCL056ifJfdZvysnKVo7bXknquFyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaRx%2FC4mLHxwWEv8HKtwDlhAuT%2F0BMWs5l6OQni4I3CyMoKxrWBpaQWTpsR%2F1ZuAT5hXSkJsJ1W8pRcRrwOK1tJy7fjgJilRLpdkL3f6Sx5Uf5tGJxmEd28NEh6oBD97mZdtFRDI%2BugVy7%2BHT0j7SUTzVXOljwuBZf0ZDztSEw14mStO2E3ryWBE3aBAw2Ihh6cQiZAHLOeTW2MvaD4HxwSlIqqUTUu8lZ6HWcdHbCYbI%2F6j%2BmsPUXh8aIne%2BBG8%2Bb543VOh1qVNHUk65xmzeTDRLMBcEQkcxnBd8do7T%2Flvh2y1t8HE%2Bgl96xdbvJP3k9M0hWedPNwAdxGdZmFcKvpttoI8zUNMvx%2FUn3eaiXpEkbdo9NHrUMvTBiISOuQBfTjLnWol%2FAPNgjaenMHdp1j1fnrfdIh5pdCn4KOLJB4G9tbTJcBkB8VUFl7NkfZuPiersI0V95qNBo%2F%2B0G1G%2BzCtafr99LvhnASRFU4T9M9mOtdjLebk9Qs4l24YAW3HualsSWWvI%2BlCNKc1lPj%2BFeiaRAv9Uelps33mUHBEfXWc89QQf9sSARQ0fetJ9XCLya3bq7vJRMfZ%2F2kr%2B3EOcezYHuY%2BB4bDvtgF9sqIhNTnPLqi%2BnPBegWN%2F6DTbmBPf8ZZvalt22dJsM0kwlKOLwwY6pgEIrS3xl61wR28PnyGVE%2BrxVhg0PDg6HIdXncxZSRuKvoAj%2Bnc2aqjjcyq8kkFAfD%2F%2FFr9y9%2BkYwVevYK2ywqbMjwtr4jmNkmTAwPdtE5tSvT5O2GDP5YM2gOaCs51QdqOCe9tom%2BwHvnvIR90DSnxtNaxuYG0t%2BQI9PR20Kn7pma8K2EpVZUyArg2Wy7UNSeuxq6gfzM%2BqfQsolMbJPtBTXjs2uphT&X-Amz-Signature=5b79189c1eed0889e97a87f9d95b81d5e8883d44f000f350281e129e36e0d5ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULEWRY4H%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T181238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2F8A5pS%2Fj05sOT9yEZlKO80GGvDgtfaOzQBqnjmki2PAiA8zDLluIIhbWvvr4zCL056ifJfdZvysnKVo7bXknquFyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaRx%2FC4mLHxwWEv8HKtwDlhAuT%2F0BMWs5l6OQni4I3CyMoKxrWBpaQWTpsR%2F1ZuAT5hXSkJsJ1W8pRcRrwOK1tJy7fjgJilRLpdkL3f6Sx5Uf5tGJxmEd28NEh6oBD97mZdtFRDI%2BugVy7%2BHT0j7SUTzVXOljwuBZf0ZDztSEw14mStO2E3ryWBE3aBAw2Ihh6cQiZAHLOeTW2MvaD4HxwSlIqqUTUu8lZ6HWcdHbCYbI%2F6j%2BmsPUXh8aIne%2BBG8%2Bb543VOh1qVNHUk65xmzeTDRLMBcEQkcxnBd8do7T%2Flvh2y1t8HE%2Bgl96xdbvJP3k9M0hWedPNwAdxGdZmFcKvpttoI8zUNMvx%2FUn3eaiXpEkbdo9NHrUMvTBiISOuQBfTjLnWol%2FAPNgjaenMHdp1j1fnrfdIh5pdCn4KOLJB4G9tbTJcBkB8VUFl7NkfZuPiersI0V95qNBo%2F%2B0G1G%2BzCtafr99LvhnASRFU4T9M9mOtdjLebk9Qs4l24YAW3HualsSWWvI%2BlCNKc1lPj%2BFeiaRAv9Uelps33mUHBEfXWc89QQf9sSARQ0fetJ9XCLya3bq7vJRMfZ%2F2kr%2B3EOcezYHuY%2BB4bDvtgF9sqIhNTnPLqi%2BnPBegWN%2F6DTbmBPf8ZZvalt22dJsM0kwlKOLwwY6pgEIrS3xl61wR28PnyGVE%2BrxVhg0PDg6HIdXncxZSRuKvoAj%2Bnc2aqjjcyq8kkFAfD%2F%2FFr9y9%2BkYwVevYK2ywqbMjwtr4jmNkmTAwPdtE5tSvT5O2GDP5YM2gOaCs51QdqOCe9tom%2BwHvnvIR90DSnxtNaxuYG0t%2BQI9PR20Kn7pma8K2EpVZUyArg2Wy7UNSeuxq6gfzM%2BqfQsolMbJPtBTXjs2uphT&X-Amz-Signature=26291b6cc378f0955c11b9b2ef8c407dc814f6c363fae6d9fee8bc54bb2a2be8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULEWRY4H%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T181238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2F8A5pS%2Fj05sOT9yEZlKO80GGvDgtfaOzQBqnjmki2PAiA8zDLluIIhbWvvr4zCL056ifJfdZvysnKVo7bXknquFyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaRx%2FC4mLHxwWEv8HKtwDlhAuT%2F0BMWs5l6OQni4I3CyMoKxrWBpaQWTpsR%2F1ZuAT5hXSkJsJ1W8pRcRrwOK1tJy7fjgJilRLpdkL3f6Sx5Uf5tGJxmEd28NEh6oBD97mZdtFRDI%2BugVy7%2BHT0j7SUTzVXOljwuBZf0ZDztSEw14mStO2E3ryWBE3aBAw2Ihh6cQiZAHLOeTW2MvaD4HxwSlIqqUTUu8lZ6HWcdHbCYbI%2F6j%2BmsPUXh8aIne%2BBG8%2Bb543VOh1qVNHUk65xmzeTDRLMBcEQkcxnBd8do7T%2Flvh2y1t8HE%2Bgl96xdbvJP3k9M0hWedPNwAdxGdZmFcKvpttoI8zUNMvx%2FUn3eaiXpEkbdo9NHrUMvTBiISOuQBfTjLnWol%2FAPNgjaenMHdp1j1fnrfdIh5pdCn4KOLJB4G9tbTJcBkB8VUFl7NkfZuPiersI0V95qNBo%2F%2B0G1G%2BzCtafr99LvhnASRFU4T9M9mOtdjLebk9Qs4l24YAW3HualsSWWvI%2BlCNKc1lPj%2BFeiaRAv9Uelps33mUHBEfXWc89QQf9sSARQ0fetJ9XCLya3bq7vJRMfZ%2F2kr%2B3EOcezYHuY%2BB4bDvtgF9sqIhNTnPLqi%2BnPBegWN%2F6DTbmBPf8ZZvalt22dJsM0kwlKOLwwY6pgEIrS3xl61wR28PnyGVE%2BrxVhg0PDg6HIdXncxZSRuKvoAj%2Bnc2aqjjcyq8kkFAfD%2F%2FFr9y9%2BkYwVevYK2ywqbMjwtr4jmNkmTAwPdtE5tSvT5O2GDP5YM2gOaCs51QdqOCe9tom%2BwHvnvIR90DSnxtNaxuYG0t%2BQI9PR20Kn7pma8K2EpVZUyArg2Wy7UNSeuxq6gfzM%2BqfQsolMbJPtBTXjs2uphT&X-Amz-Signature=c58fcb7cdee1ff5e12683631047fd6621342c1c97f89654984525920db240916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
