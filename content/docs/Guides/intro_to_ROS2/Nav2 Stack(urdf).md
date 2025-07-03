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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAB2DDB2%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIEJzjROCX8Y2cAsJn1SdDT8BH5tgxIlpemg1IpaS10DCAiAIyR2EKPwM%2BzSK2b0ZTqfjjg9z1xXG01r815LPQEBrzyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMAZNeA78U%2BloAwz4wKtwDY8RiZhLGdTZCXD7F2q1TymPqgb3TmFBgMKAMDWyOOZGQEOyjTSnY%2BTVCwVWi0yHZQ5TxlvzMduCi9uPuS6flvoDNTgZZKVqHlAhhSWGuyUuo4%2B%2FRjCXeJxcI2QApQuMgzW196Ajx4NL%2Fao3JZWrDoefAHCRV5wlWAiBtlvmTeSSRbhTXHFqy3v3%2Bq93h16AI%2F%2BegDeliQfFmhOs%2BiNne0l2bxZsGhY9k1J5ey6qdd4H3eVcbDQBlxhnst0cLFkXvKWIHk6Bw%2F4T091%2BaIN54YmXlIUq7HwDEdMRYxlxbaBn6s3RwfNdsXVNSZWvkcJRAhF%2B5k3ZnTEQMntvnlrnsJ8MIWPNLMvkc3ba3pa9UuaYmWXwS5jnlezYx1fblotFzvNWN7stw7BMSo3e1ODzkaLlcCNxx%2FfXO2WG%2FDgijVygUlwFmUP1N1cNUSD5H5a3YdxWURfwh4O%2FJQet9SUL4Ykb9RFHhubQqjVmfJKs3q1WHQtxensivo31qr%2FMwKFo3bs4WKxUUZowBoxkF51MC%2FJUCexASi%2BIPbsPiJDMWS2N%2BfEGgtKLZBL6R%2FCbsmfW5vzbBqjQCbVVn501mR5TU5HjCmm7qSbrvqLw9ig1LXugcZX9avpgHhlOsvsYwwLmawwY6pgEnAp8tE7VwhqIVOb%2FRSNagLhd%2Ba1fnohuqHR02urZAoDUAV2L8dZAG8j4JCHBj7Y3MwZyBA6iUHNUqbOWui67G3EoaYoYS81XlEdkVSDyWyCgpagm3VYXkSRDAjk40KJxvimGubyTGE2SeseER8Rwp3CTM5mrUC4r18251G%2BcaWidcloF0clhfRenCx9JXx3WX3k21VeIRZbK0h2erm50YMGcvojO8&X-Amz-Signature=3140a362afe39d13aa119ecb7dce893cc4b456e1175de07ac4d79fd41dcce097&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAB2DDB2%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIEJzjROCX8Y2cAsJn1SdDT8BH5tgxIlpemg1IpaS10DCAiAIyR2EKPwM%2BzSK2b0ZTqfjjg9z1xXG01r815LPQEBrzyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMAZNeA78U%2BloAwz4wKtwDY8RiZhLGdTZCXD7F2q1TymPqgb3TmFBgMKAMDWyOOZGQEOyjTSnY%2BTVCwVWi0yHZQ5TxlvzMduCi9uPuS6flvoDNTgZZKVqHlAhhSWGuyUuo4%2B%2FRjCXeJxcI2QApQuMgzW196Ajx4NL%2Fao3JZWrDoefAHCRV5wlWAiBtlvmTeSSRbhTXHFqy3v3%2Bq93h16AI%2F%2BegDeliQfFmhOs%2BiNne0l2bxZsGhY9k1J5ey6qdd4H3eVcbDQBlxhnst0cLFkXvKWIHk6Bw%2F4T091%2BaIN54YmXlIUq7HwDEdMRYxlxbaBn6s3RwfNdsXVNSZWvkcJRAhF%2B5k3ZnTEQMntvnlrnsJ8MIWPNLMvkc3ba3pa9UuaYmWXwS5jnlezYx1fblotFzvNWN7stw7BMSo3e1ODzkaLlcCNxx%2FfXO2WG%2FDgijVygUlwFmUP1N1cNUSD5H5a3YdxWURfwh4O%2FJQet9SUL4Ykb9RFHhubQqjVmfJKs3q1WHQtxensivo31qr%2FMwKFo3bs4WKxUUZowBoxkF51MC%2FJUCexASi%2BIPbsPiJDMWS2N%2BfEGgtKLZBL6R%2FCbsmfW5vzbBqjQCbVVn501mR5TU5HjCmm7qSbrvqLw9ig1LXugcZX9avpgHhlOsvsYwwLmawwY6pgEnAp8tE7VwhqIVOb%2FRSNagLhd%2Ba1fnohuqHR02urZAoDUAV2L8dZAG8j4JCHBj7Y3MwZyBA6iUHNUqbOWui67G3EoaYoYS81XlEdkVSDyWyCgpagm3VYXkSRDAjk40KJxvimGubyTGE2SeseER8Rwp3CTM5mrUC4r18251G%2BcaWidcloF0clhfRenCx9JXx3WX3k21VeIRZbK0h2erm50YMGcvojO8&X-Amz-Signature=8230b03185622ee25d7dfac8a9608af388681d068e505b67694ed32d94cc24a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAB2DDB2%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIEJzjROCX8Y2cAsJn1SdDT8BH5tgxIlpemg1IpaS10DCAiAIyR2EKPwM%2BzSK2b0ZTqfjjg9z1xXG01r815LPQEBrzyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMAZNeA78U%2BloAwz4wKtwDY8RiZhLGdTZCXD7F2q1TymPqgb3TmFBgMKAMDWyOOZGQEOyjTSnY%2BTVCwVWi0yHZQ5TxlvzMduCi9uPuS6flvoDNTgZZKVqHlAhhSWGuyUuo4%2B%2FRjCXeJxcI2QApQuMgzW196Ajx4NL%2Fao3JZWrDoefAHCRV5wlWAiBtlvmTeSSRbhTXHFqy3v3%2Bq93h16AI%2F%2BegDeliQfFmhOs%2BiNne0l2bxZsGhY9k1J5ey6qdd4H3eVcbDQBlxhnst0cLFkXvKWIHk6Bw%2F4T091%2BaIN54YmXlIUq7HwDEdMRYxlxbaBn6s3RwfNdsXVNSZWvkcJRAhF%2B5k3ZnTEQMntvnlrnsJ8MIWPNLMvkc3ba3pa9UuaYmWXwS5jnlezYx1fblotFzvNWN7stw7BMSo3e1ODzkaLlcCNxx%2FfXO2WG%2FDgijVygUlwFmUP1N1cNUSD5H5a3YdxWURfwh4O%2FJQet9SUL4Ykb9RFHhubQqjVmfJKs3q1WHQtxensivo31qr%2FMwKFo3bs4WKxUUZowBoxkF51MC%2FJUCexASi%2BIPbsPiJDMWS2N%2BfEGgtKLZBL6R%2FCbsmfW5vzbBqjQCbVVn501mR5TU5HjCmm7qSbrvqLw9ig1LXugcZX9avpgHhlOsvsYwwLmawwY6pgEnAp8tE7VwhqIVOb%2FRSNagLhd%2Ba1fnohuqHR02urZAoDUAV2L8dZAG8j4JCHBj7Y3MwZyBA6iUHNUqbOWui67G3EoaYoYS81XlEdkVSDyWyCgpagm3VYXkSRDAjk40KJxvimGubyTGE2SeseER8Rwp3CTM5mrUC4r18251G%2BcaWidcloF0clhfRenCx9JXx3WX3k21VeIRZbK0h2erm50YMGcvojO8&X-Amz-Signature=fa621c5c329921bea6f6c8465cb7eaf80b390d5d96abeb2c386b83a5d66b3008&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAB2DDB2%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIEJzjROCX8Y2cAsJn1SdDT8BH5tgxIlpemg1IpaS10DCAiAIyR2EKPwM%2BzSK2b0ZTqfjjg9z1xXG01r815LPQEBrzyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMAZNeA78U%2BloAwz4wKtwDY8RiZhLGdTZCXD7F2q1TymPqgb3TmFBgMKAMDWyOOZGQEOyjTSnY%2BTVCwVWi0yHZQ5TxlvzMduCi9uPuS6flvoDNTgZZKVqHlAhhSWGuyUuo4%2B%2FRjCXeJxcI2QApQuMgzW196Ajx4NL%2Fao3JZWrDoefAHCRV5wlWAiBtlvmTeSSRbhTXHFqy3v3%2Bq93h16AI%2F%2BegDeliQfFmhOs%2BiNne0l2bxZsGhY9k1J5ey6qdd4H3eVcbDQBlxhnst0cLFkXvKWIHk6Bw%2F4T091%2BaIN54YmXlIUq7HwDEdMRYxlxbaBn6s3RwfNdsXVNSZWvkcJRAhF%2B5k3ZnTEQMntvnlrnsJ8MIWPNLMvkc3ba3pa9UuaYmWXwS5jnlezYx1fblotFzvNWN7stw7BMSo3e1ODzkaLlcCNxx%2FfXO2WG%2FDgijVygUlwFmUP1N1cNUSD5H5a3YdxWURfwh4O%2FJQet9SUL4Ykb9RFHhubQqjVmfJKs3q1WHQtxensivo31qr%2FMwKFo3bs4WKxUUZowBoxkF51MC%2FJUCexASi%2BIPbsPiJDMWS2N%2BfEGgtKLZBL6R%2FCbsmfW5vzbBqjQCbVVn501mR5TU5HjCmm7qSbrvqLw9ig1LXugcZX9avpgHhlOsvsYwwLmawwY6pgEnAp8tE7VwhqIVOb%2FRSNagLhd%2Ba1fnohuqHR02urZAoDUAV2L8dZAG8j4JCHBj7Y3MwZyBA6iUHNUqbOWui67G3EoaYoYS81XlEdkVSDyWyCgpagm3VYXkSRDAjk40KJxvimGubyTGE2SeseER8Rwp3CTM5mrUC4r18251G%2BcaWidcloF0clhfRenCx9JXx3WX3k21VeIRZbK0h2erm50YMGcvojO8&X-Amz-Signature=33ad888f8a189f8d190d4866811291965d347461a385e26663425e9c063f8b6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAB2DDB2%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIEJzjROCX8Y2cAsJn1SdDT8BH5tgxIlpemg1IpaS10DCAiAIyR2EKPwM%2BzSK2b0ZTqfjjg9z1xXG01r815LPQEBrzyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMAZNeA78U%2BloAwz4wKtwDY8RiZhLGdTZCXD7F2q1TymPqgb3TmFBgMKAMDWyOOZGQEOyjTSnY%2BTVCwVWi0yHZQ5TxlvzMduCi9uPuS6flvoDNTgZZKVqHlAhhSWGuyUuo4%2B%2FRjCXeJxcI2QApQuMgzW196Ajx4NL%2Fao3JZWrDoefAHCRV5wlWAiBtlvmTeSSRbhTXHFqy3v3%2Bq93h16AI%2F%2BegDeliQfFmhOs%2BiNne0l2bxZsGhY9k1J5ey6qdd4H3eVcbDQBlxhnst0cLFkXvKWIHk6Bw%2F4T091%2BaIN54YmXlIUq7HwDEdMRYxlxbaBn6s3RwfNdsXVNSZWvkcJRAhF%2B5k3ZnTEQMntvnlrnsJ8MIWPNLMvkc3ba3pa9UuaYmWXwS5jnlezYx1fblotFzvNWN7stw7BMSo3e1ODzkaLlcCNxx%2FfXO2WG%2FDgijVygUlwFmUP1N1cNUSD5H5a3YdxWURfwh4O%2FJQet9SUL4Ykb9RFHhubQqjVmfJKs3q1WHQtxensivo31qr%2FMwKFo3bs4WKxUUZowBoxkF51MC%2FJUCexASi%2BIPbsPiJDMWS2N%2BfEGgtKLZBL6R%2FCbsmfW5vzbBqjQCbVVn501mR5TU5HjCmm7qSbrvqLw9ig1LXugcZX9avpgHhlOsvsYwwLmawwY6pgEnAp8tE7VwhqIVOb%2FRSNagLhd%2Ba1fnohuqHR02urZAoDUAV2L8dZAG8j4JCHBj7Y3MwZyBA6iUHNUqbOWui67G3EoaYoYS81XlEdkVSDyWyCgpagm3VYXkSRDAjk40KJxvimGubyTGE2SeseER8Rwp3CTM5mrUC4r18251G%2BcaWidcloF0clhfRenCx9JXx3WX3k21VeIRZbK0h2erm50YMGcvojO8&X-Amz-Signature=50a2e6519806f0e90d4ae3c47cc5d7c3ef142d8ac4d3cf12c898630c8906a06c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAB2DDB2%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIEJzjROCX8Y2cAsJn1SdDT8BH5tgxIlpemg1IpaS10DCAiAIyR2EKPwM%2BzSK2b0ZTqfjjg9z1xXG01r815LPQEBrzyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMAZNeA78U%2BloAwz4wKtwDY8RiZhLGdTZCXD7F2q1TymPqgb3TmFBgMKAMDWyOOZGQEOyjTSnY%2BTVCwVWi0yHZQ5TxlvzMduCi9uPuS6flvoDNTgZZKVqHlAhhSWGuyUuo4%2B%2FRjCXeJxcI2QApQuMgzW196Ajx4NL%2Fao3JZWrDoefAHCRV5wlWAiBtlvmTeSSRbhTXHFqy3v3%2Bq93h16AI%2F%2BegDeliQfFmhOs%2BiNne0l2bxZsGhY9k1J5ey6qdd4H3eVcbDQBlxhnst0cLFkXvKWIHk6Bw%2F4T091%2BaIN54YmXlIUq7HwDEdMRYxlxbaBn6s3RwfNdsXVNSZWvkcJRAhF%2B5k3ZnTEQMntvnlrnsJ8MIWPNLMvkc3ba3pa9UuaYmWXwS5jnlezYx1fblotFzvNWN7stw7BMSo3e1ODzkaLlcCNxx%2FfXO2WG%2FDgijVygUlwFmUP1N1cNUSD5H5a3YdxWURfwh4O%2FJQet9SUL4Ykb9RFHhubQqjVmfJKs3q1WHQtxensivo31qr%2FMwKFo3bs4WKxUUZowBoxkF51MC%2FJUCexASi%2BIPbsPiJDMWS2N%2BfEGgtKLZBL6R%2FCbsmfW5vzbBqjQCbVVn501mR5TU5HjCmm7qSbrvqLw9ig1LXugcZX9avpgHhlOsvsYwwLmawwY6pgEnAp8tE7VwhqIVOb%2FRSNagLhd%2Ba1fnohuqHR02urZAoDUAV2L8dZAG8j4JCHBj7Y3MwZyBA6iUHNUqbOWui67G3EoaYoYS81XlEdkVSDyWyCgpagm3VYXkSRDAjk40KJxvimGubyTGE2SeseER8Rwp3CTM5mrUC4r18251G%2BcaWidcloF0clhfRenCx9JXx3WX3k21VeIRZbK0h2erm50YMGcvojO8&X-Amz-Signature=9a5a4f5bf1e608ed0f0dd554183909995b79c6851a025140f2f7c0101ce18167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
