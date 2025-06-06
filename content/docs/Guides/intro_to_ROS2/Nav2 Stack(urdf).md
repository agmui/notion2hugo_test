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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674K2LLFX%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHm0vy4F%2BBuaPD6780QY9yVrG3DeMPZ9hlnI%2F1pDALoAiBQYoMRvyJwAV%2BPgRW0zP19t5eJHnp8rz%2BFVgzkHO28Wyr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM7gKkHAflpm5onHP1KtwDBjSZ5jwoFciWAeENyluPublSlOYEJ8LYcgphNJNS%2Fin6JWG9sopCN%2Fixhki1gqlfupce%2BAIFy3%2B2xOdDKJ9uVJ2VEBW7ddrWci%2BkwgEsIcXihk06Mmu1W29GNyjybhxkvgoKThgql8KA6Q9wObSUzMfL2jjSaYVEU5hu5pef8RyGsBBQ2gV91dZtwwEDHPjR%2F4aEn%2BXOIq5eCUj%2F4kkVZ%2Fvf6HnALnc%2Fsfxezu0jCHMBF5umFLldzZrcXXfKm%2FQiax%2FCjf8lpon9W8YF96SA0SKgmVhwa67gmUimfPR%2FP2KY714VZt5OFe0E%2F1YMZPjDZCeecwmQ%2B74B8Abtb8cCUQ%2BkImlkFFfzHRaNHfDFK6RzMsmTkKDbI0gaoqEsbLHXiL1kGGZpcxh%2FkSVQ7Lyr203Yl2EX6kqc%2B6fnJVNNrGhbGv6B%2B7NALZrrF8g3ZYLN88gJcv4sEUkxwcybcTBbbVbyQ0NpC8kGgsbWYXbcQyqXiE4ovVN0vQBK%2BaB0MdQVcXg9vlpiLNf1GgwxlrjWPcFZ2bDPrpXVFe4gN95PHHiD5%2F1VCKIbfrfR23rHG20%2FulJo%2FGSS6CylOn1nWiYQxuhU6u0vbNF9MloIone7wdXsdM83OVIHJWGhkBwwvJGNwgY6pgHj716Vo4Cx0QHxCDnWAMUn%2BNtPGbCB%2BOEGN7zX1FaX%2Fm8y7A%2BA9TDbdqHnH83XQsrCciORW0eqcTThFOxMnfVAj6zZd8Db00A60r2wTTbPyO%2FhvPuAtgK1BG4Mhtqbv9og1cd%2FVHvhPYlYTGJh%2By%2F6wdlde7u%2BAAjt7Nb1ze81OEk6MgMoh1sNfnx6A3uVe4sTKX8jil%2FHKJsiGF4K%2Bsvnbt6fECT5&X-Amz-Signature=15f9e89844bdd2009349ff69f966a0eb99da34be577b93494d42379074e5ecb3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674K2LLFX%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHm0vy4F%2BBuaPD6780QY9yVrG3DeMPZ9hlnI%2F1pDALoAiBQYoMRvyJwAV%2BPgRW0zP19t5eJHnp8rz%2BFVgzkHO28Wyr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM7gKkHAflpm5onHP1KtwDBjSZ5jwoFciWAeENyluPublSlOYEJ8LYcgphNJNS%2Fin6JWG9sopCN%2Fixhki1gqlfupce%2BAIFy3%2B2xOdDKJ9uVJ2VEBW7ddrWci%2BkwgEsIcXihk06Mmu1W29GNyjybhxkvgoKThgql8KA6Q9wObSUzMfL2jjSaYVEU5hu5pef8RyGsBBQ2gV91dZtwwEDHPjR%2F4aEn%2BXOIq5eCUj%2F4kkVZ%2Fvf6HnALnc%2Fsfxezu0jCHMBF5umFLldzZrcXXfKm%2FQiax%2FCjf8lpon9W8YF96SA0SKgmVhwa67gmUimfPR%2FP2KY714VZt5OFe0E%2F1YMZPjDZCeecwmQ%2B74B8Abtb8cCUQ%2BkImlkFFfzHRaNHfDFK6RzMsmTkKDbI0gaoqEsbLHXiL1kGGZpcxh%2FkSVQ7Lyr203Yl2EX6kqc%2B6fnJVNNrGhbGv6B%2B7NALZrrF8g3ZYLN88gJcv4sEUkxwcybcTBbbVbyQ0NpC8kGgsbWYXbcQyqXiE4ovVN0vQBK%2BaB0MdQVcXg9vlpiLNf1GgwxlrjWPcFZ2bDPrpXVFe4gN95PHHiD5%2F1VCKIbfrfR23rHG20%2FulJo%2FGSS6CylOn1nWiYQxuhU6u0vbNF9MloIone7wdXsdM83OVIHJWGhkBwwvJGNwgY6pgHj716Vo4Cx0QHxCDnWAMUn%2BNtPGbCB%2BOEGN7zX1FaX%2Fm8y7A%2BA9TDbdqHnH83XQsrCciORW0eqcTThFOxMnfVAj6zZd8Db00A60r2wTTbPyO%2FhvPuAtgK1BG4Mhtqbv9og1cd%2FVHvhPYlYTGJh%2By%2F6wdlde7u%2BAAjt7Nb1ze81OEk6MgMoh1sNfnx6A3uVe4sTKX8jil%2FHKJsiGF4K%2Bsvnbt6fECT5&X-Amz-Signature=2e1a4b75348d02e82c1009cd45473be713183ed259d4a6c89ee4b67dcbfb1928&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674K2LLFX%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHm0vy4F%2BBuaPD6780QY9yVrG3DeMPZ9hlnI%2F1pDALoAiBQYoMRvyJwAV%2BPgRW0zP19t5eJHnp8rz%2BFVgzkHO28Wyr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM7gKkHAflpm5onHP1KtwDBjSZ5jwoFciWAeENyluPublSlOYEJ8LYcgphNJNS%2Fin6JWG9sopCN%2Fixhki1gqlfupce%2BAIFy3%2B2xOdDKJ9uVJ2VEBW7ddrWci%2BkwgEsIcXihk06Mmu1W29GNyjybhxkvgoKThgql8KA6Q9wObSUzMfL2jjSaYVEU5hu5pef8RyGsBBQ2gV91dZtwwEDHPjR%2F4aEn%2BXOIq5eCUj%2F4kkVZ%2Fvf6HnALnc%2Fsfxezu0jCHMBF5umFLldzZrcXXfKm%2FQiax%2FCjf8lpon9W8YF96SA0SKgmVhwa67gmUimfPR%2FP2KY714VZt5OFe0E%2F1YMZPjDZCeecwmQ%2B74B8Abtb8cCUQ%2BkImlkFFfzHRaNHfDFK6RzMsmTkKDbI0gaoqEsbLHXiL1kGGZpcxh%2FkSVQ7Lyr203Yl2EX6kqc%2B6fnJVNNrGhbGv6B%2B7NALZrrF8g3ZYLN88gJcv4sEUkxwcybcTBbbVbyQ0NpC8kGgsbWYXbcQyqXiE4ovVN0vQBK%2BaB0MdQVcXg9vlpiLNf1GgwxlrjWPcFZ2bDPrpXVFe4gN95PHHiD5%2F1VCKIbfrfR23rHG20%2FulJo%2FGSS6CylOn1nWiYQxuhU6u0vbNF9MloIone7wdXsdM83OVIHJWGhkBwwvJGNwgY6pgHj716Vo4Cx0QHxCDnWAMUn%2BNtPGbCB%2BOEGN7zX1FaX%2Fm8y7A%2BA9TDbdqHnH83XQsrCciORW0eqcTThFOxMnfVAj6zZd8Db00A60r2wTTbPyO%2FhvPuAtgK1BG4Mhtqbv9og1cd%2FVHvhPYlYTGJh%2By%2F6wdlde7u%2BAAjt7Nb1ze81OEk6MgMoh1sNfnx6A3uVe4sTKX8jil%2FHKJsiGF4K%2Bsvnbt6fECT5&X-Amz-Signature=d07f5457592f2eaee1c39d40819af1234be78e92abbbf2592ad1359258b550af&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674K2LLFX%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHm0vy4F%2BBuaPD6780QY9yVrG3DeMPZ9hlnI%2F1pDALoAiBQYoMRvyJwAV%2BPgRW0zP19t5eJHnp8rz%2BFVgzkHO28Wyr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM7gKkHAflpm5onHP1KtwDBjSZ5jwoFciWAeENyluPublSlOYEJ8LYcgphNJNS%2Fin6JWG9sopCN%2Fixhki1gqlfupce%2BAIFy3%2B2xOdDKJ9uVJ2VEBW7ddrWci%2BkwgEsIcXihk06Mmu1W29GNyjybhxkvgoKThgql8KA6Q9wObSUzMfL2jjSaYVEU5hu5pef8RyGsBBQ2gV91dZtwwEDHPjR%2F4aEn%2BXOIq5eCUj%2F4kkVZ%2Fvf6HnALnc%2Fsfxezu0jCHMBF5umFLldzZrcXXfKm%2FQiax%2FCjf8lpon9W8YF96SA0SKgmVhwa67gmUimfPR%2FP2KY714VZt5OFe0E%2F1YMZPjDZCeecwmQ%2B74B8Abtb8cCUQ%2BkImlkFFfzHRaNHfDFK6RzMsmTkKDbI0gaoqEsbLHXiL1kGGZpcxh%2FkSVQ7Lyr203Yl2EX6kqc%2B6fnJVNNrGhbGv6B%2B7NALZrrF8g3ZYLN88gJcv4sEUkxwcybcTBbbVbyQ0NpC8kGgsbWYXbcQyqXiE4ovVN0vQBK%2BaB0MdQVcXg9vlpiLNf1GgwxlrjWPcFZ2bDPrpXVFe4gN95PHHiD5%2F1VCKIbfrfR23rHG20%2FulJo%2FGSS6CylOn1nWiYQxuhU6u0vbNF9MloIone7wdXsdM83OVIHJWGhkBwwvJGNwgY6pgHj716Vo4Cx0QHxCDnWAMUn%2BNtPGbCB%2BOEGN7zX1FaX%2Fm8y7A%2BA9TDbdqHnH83XQsrCciORW0eqcTThFOxMnfVAj6zZd8Db00A60r2wTTbPyO%2FhvPuAtgK1BG4Mhtqbv9og1cd%2FVHvhPYlYTGJh%2By%2F6wdlde7u%2BAAjt7Nb1ze81OEk6MgMoh1sNfnx6A3uVe4sTKX8jil%2FHKJsiGF4K%2Bsvnbt6fECT5&X-Amz-Signature=9b80e80ae3b56353cf252d563484ad5a3de11cb78214c869cd59d1f8be99daac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674K2LLFX%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHm0vy4F%2BBuaPD6780QY9yVrG3DeMPZ9hlnI%2F1pDALoAiBQYoMRvyJwAV%2BPgRW0zP19t5eJHnp8rz%2BFVgzkHO28Wyr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM7gKkHAflpm5onHP1KtwDBjSZ5jwoFciWAeENyluPublSlOYEJ8LYcgphNJNS%2Fin6JWG9sopCN%2Fixhki1gqlfupce%2BAIFy3%2B2xOdDKJ9uVJ2VEBW7ddrWci%2BkwgEsIcXihk06Mmu1W29GNyjybhxkvgoKThgql8KA6Q9wObSUzMfL2jjSaYVEU5hu5pef8RyGsBBQ2gV91dZtwwEDHPjR%2F4aEn%2BXOIq5eCUj%2F4kkVZ%2Fvf6HnALnc%2Fsfxezu0jCHMBF5umFLldzZrcXXfKm%2FQiax%2FCjf8lpon9W8YF96SA0SKgmVhwa67gmUimfPR%2FP2KY714VZt5OFe0E%2F1YMZPjDZCeecwmQ%2B74B8Abtb8cCUQ%2BkImlkFFfzHRaNHfDFK6RzMsmTkKDbI0gaoqEsbLHXiL1kGGZpcxh%2FkSVQ7Lyr203Yl2EX6kqc%2B6fnJVNNrGhbGv6B%2B7NALZrrF8g3ZYLN88gJcv4sEUkxwcybcTBbbVbyQ0NpC8kGgsbWYXbcQyqXiE4ovVN0vQBK%2BaB0MdQVcXg9vlpiLNf1GgwxlrjWPcFZ2bDPrpXVFe4gN95PHHiD5%2F1VCKIbfrfR23rHG20%2FulJo%2FGSS6CylOn1nWiYQxuhU6u0vbNF9MloIone7wdXsdM83OVIHJWGhkBwwvJGNwgY6pgHj716Vo4Cx0QHxCDnWAMUn%2BNtPGbCB%2BOEGN7zX1FaX%2Fm8y7A%2BA9TDbdqHnH83XQsrCciORW0eqcTThFOxMnfVAj6zZd8Db00A60r2wTTbPyO%2FhvPuAtgK1BG4Mhtqbv9og1cd%2FVHvhPYlYTGJh%2By%2F6wdlde7u%2BAAjt7Nb1ze81OEk6MgMoh1sNfnx6A3uVe4sTKX8jil%2FHKJsiGF4K%2Bsvnbt6fECT5&X-Amz-Signature=059f4fe9f55e01253dc0d45da342bfeea42d4f3ab098b65bcdfc976bb0ba2d05&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674K2LLFX%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHm0vy4F%2BBuaPD6780QY9yVrG3DeMPZ9hlnI%2F1pDALoAiBQYoMRvyJwAV%2BPgRW0zP19t5eJHnp8rz%2BFVgzkHO28Wyr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM7gKkHAflpm5onHP1KtwDBjSZ5jwoFciWAeENyluPublSlOYEJ8LYcgphNJNS%2Fin6JWG9sopCN%2Fixhki1gqlfupce%2BAIFy3%2B2xOdDKJ9uVJ2VEBW7ddrWci%2BkwgEsIcXihk06Mmu1W29GNyjybhxkvgoKThgql8KA6Q9wObSUzMfL2jjSaYVEU5hu5pef8RyGsBBQ2gV91dZtwwEDHPjR%2F4aEn%2BXOIq5eCUj%2F4kkVZ%2Fvf6HnALnc%2Fsfxezu0jCHMBF5umFLldzZrcXXfKm%2FQiax%2FCjf8lpon9W8YF96SA0SKgmVhwa67gmUimfPR%2FP2KY714VZt5OFe0E%2F1YMZPjDZCeecwmQ%2B74B8Abtb8cCUQ%2BkImlkFFfzHRaNHfDFK6RzMsmTkKDbI0gaoqEsbLHXiL1kGGZpcxh%2FkSVQ7Lyr203Yl2EX6kqc%2B6fnJVNNrGhbGv6B%2B7NALZrrF8g3ZYLN88gJcv4sEUkxwcybcTBbbVbyQ0NpC8kGgsbWYXbcQyqXiE4ovVN0vQBK%2BaB0MdQVcXg9vlpiLNf1GgwxlrjWPcFZ2bDPrpXVFe4gN95PHHiD5%2F1VCKIbfrfR23rHG20%2FulJo%2FGSS6CylOn1nWiYQxuhU6u0vbNF9MloIone7wdXsdM83OVIHJWGhkBwwvJGNwgY6pgHj716Vo4Cx0QHxCDnWAMUn%2BNtPGbCB%2BOEGN7zX1FaX%2Fm8y7A%2BA9TDbdqHnH83XQsrCciORW0eqcTThFOxMnfVAj6zZd8Db00A60r2wTTbPyO%2FhvPuAtgK1BG4Mhtqbv9og1cd%2FVHvhPYlYTGJh%2By%2F6wdlde7u%2BAAjt7Nb1ze81OEk6MgMoh1sNfnx6A3uVe4sTKX8jil%2FHKJsiGF4K%2Bsvnbt6fECT5&X-Amz-Signature=b037bec97906e4344f44a9df1036b20f81ea6eb7e9411cb40d5316a64d360370&X-Amz-SignedHeaders=host&x-id=GetObject)
