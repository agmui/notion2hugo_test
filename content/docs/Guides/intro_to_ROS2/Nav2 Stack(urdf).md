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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQECNBZM%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFuTCggFDrncXS3WGtX%2B4fR%2FJm22S5JgOj9M38VfEWXuAiEAq%2Ffex5irjH8rkx1UcEyrHQsZgNMvHrokuYXfBFKegO4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDAP2YulAp88Kd1bGcCrcA%2FsPBwXCKhfEMgg5Epc3D%2BMXXejy0Q4velhoUR%2FycmxoSHXSEkE6xGstH1P20TwM3gloFERFbMAXbjQU3wEE3LweJqStAxop3wIgq7Dd89XuT%2BQENrMh3MaTNnNJ2MOSpEVDollKs3t2TZ9h0EOUl%2BVcKVLbRJmSQOZVV6657%2BHoQKgo5cvBUjo42TaHt79Jhj6AAjrvBZcRT%2BsX34%2FRTSZex5cOGrpf86%2ByLC6Y2e9Pq%2BcVXBM1H09JseLBwsgxTYCbshIMvVeS4k39hgqhdMB4%2FEq%2BCRXewZuVdCSsyFFFFPRQgw7Im1ZUtsIYNd15BEAsWtZIIr%2FXx5LdkE2XP%2F7FMe7UHb4PVb8Jhkq7i%2Bk9Euis55g%2FsNO%2B8L7CmawHbxJNagIIUz68aF0Ub1RZiUuTgWJ0EF8S6SNBpKvkfvZ07OMuOZpov%2BO9ewoVG6MhhlXWwTVVQ6nKxVjXkLvgMr%2B9ho326WkYXJIZ5iZhIZpiPHdStNa1ruuI060dNfMzt3Be2%2Fo858zeGGeOeAjlWFnS%2FTRFeqxyYLSgV10%2FHuO7A0lAOcBaEndZ3mE%2B909t7g8AbWUO%2Fx7XnFeFT3ZA9XKKfEsRP8XgMTdn0Z9YySnf880lrfT5AdMTT0ldMMjE2sEGOqUBTQEaSahfBPbNJvFi%2F6fvb91hqGzW0Qx1tKf9Jp0srkYDMDnZ61Mt0LtPTcMo18BLovFDR5eMLnmoF8n6tsb5w73Lwh%2BAf9W8CwRvVfgFsik3B0sfF1pyUl%2BPvv57wpw%2BkznEajuRpiPm1wFXwO1z85ZscKRbngGW9BGFVhs6epAUX2R72i%2FbxfRaBIajjrw%2FMsPa9GBJcyOYFZIh5WlJxkl7t73f&X-Amz-Signature=3ae1d365d0544e57b175d1e24a7565e1090ecb75dc94355836d7ea3320aff0dc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQECNBZM%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFuTCggFDrncXS3WGtX%2B4fR%2FJm22S5JgOj9M38VfEWXuAiEAq%2Ffex5irjH8rkx1UcEyrHQsZgNMvHrokuYXfBFKegO4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDAP2YulAp88Kd1bGcCrcA%2FsPBwXCKhfEMgg5Epc3D%2BMXXejy0Q4velhoUR%2FycmxoSHXSEkE6xGstH1P20TwM3gloFERFbMAXbjQU3wEE3LweJqStAxop3wIgq7Dd89XuT%2BQENrMh3MaTNnNJ2MOSpEVDollKs3t2TZ9h0EOUl%2BVcKVLbRJmSQOZVV6657%2BHoQKgo5cvBUjo42TaHt79Jhj6AAjrvBZcRT%2BsX34%2FRTSZex5cOGrpf86%2ByLC6Y2e9Pq%2BcVXBM1H09JseLBwsgxTYCbshIMvVeS4k39hgqhdMB4%2FEq%2BCRXewZuVdCSsyFFFFPRQgw7Im1ZUtsIYNd15BEAsWtZIIr%2FXx5LdkE2XP%2F7FMe7UHb4PVb8Jhkq7i%2Bk9Euis55g%2FsNO%2B8L7CmawHbxJNagIIUz68aF0Ub1RZiUuTgWJ0EF8S6SNBpKvkfvZ07OMuOZpov%2BO9ewoVG6MhhlXWwTVVQ6nKxVjXkLvgMr%2B9ho326WkYXJIZ5iZhIZpiPHdStNa1ruuI060dNfMzt3Be2%2Fo858zeGGeOeAjlWFnS%2FTRFeqxyYLSgV10%2FHuO7A0lAOcBaEndZ3mE%2B909t7g8AbWUO%2Fx7XnFeFT3ZA9XKKfEsRP8XgMTdn0Z9YySnf880lrfT5AdMTT0ldMMjE2sEGOqUBTQEaSahfBPbNJvFi%2F6fvb91hqGzW0Qx1tKf9Jp0srkYDMDnZ61Mt0LtPTcMo18BLovFDR5eMLnmoF8n6tsb5w73Lwh%2BAf9W8CwRvVfgFsik3B0sfF1pyUl%2BPvv57wpw%2BkznEajuRpiPm1wFXwO1z85ZscKRbngGW9BGFVhs6epAUX2R72i%2FbxfRaBIajjrw%2FMsPa9GBJcyOYFZIh5WlJxkl7t73f&X-Amz-Signature=9d31e65102d5f60f43a5547f803e0742f1fd33f2abe586510c9b289462379c8d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQECNBZM%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFuTCggFDrncXS3WGtX%2B4fR%2FJm22S5JgOj9M38VfEWXuAiEAq%2Ffex5irjH8rkx1UcEyrHQsZgNMvHrokuYXfBFKegO4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDAP2YulAp88Kd1bGcCrcA%2FsPBwXCKhfEMgg5Epc3D%2BMXXejy0Q4velhoUR%2FycmxoSHXSEkE6xGstH1P20TwM3gloFERFbMAXbjQU3wEE3LweJqStAxop3wIgq7Dd89XuT%2BQENrMh3MaTNnNJ2MOSpEVDollKs3t2TZ9h0EOUl%2BVcKVLbRJmSQOZVV6657%2BHoQKgo5cvBUjo42TaHt79Jhj6AAjrvBZcRT%2BsX34%2FRTSZex5cOGrpf86%2ByLC6Y2e9Pq%2BcVXBM1H09JseLBwsgxTYCbshIMvVeS4k39hgqhdMB4%2FEq%2BCRXewZuVdCSsyFFFFPRQgw7Im1ZUtsIYNd15BEAsWtZIIr%2FXx5LdkE2XP%2F7FMe7UHb4PVb8Jhkq7i%2Bk9Euis55g%2FsNO%2B8L7CmawHbxJNagIIUz68aF0Ub1RZiUuTgWJ0EF8S6SNBpKvkfvZ07OMuOZpov%2BO9ewoVG6MhhlXWwTVVQ6nKxVjXkLvgMr%2B9ho326WkYXJIZ5iZhIZpiPHdStNa1ruuI060dNfMzt3Be2%2Fo858zeGGeOeAjlWFnS%2FTRFeqxyYLSgV10%2FHuO7A0lAOcBaEndZ3mE%2B909t7g8AbWUO%2Fx7XnFeFT3ZA9XKKfEsRP8XgMTdn0Z9YySnf880lrfT5AdMTT0ldMMjE2sEGOqUBTQEaSahfBPbNJvFi%2F6fvb91hqGzW0Qx1tKf9Jp0srkYDMDnZ61Mt0LtPTcMo18BLovFDR5eMLnmoF8n6tsb5w73Lwh%2BAf9W8CwRvVfgFsik3B0sfF1pyUl%2BPvv57wpw%2BkznEajuRpiPm1wFXwO1z85ZscKRbngGW9BGFVhs6epAUX2R72i%2FbxfRaBIajjrw%2FMsPa9GBJcyOYFZIh5WlJxkl7t73f&X-Amz-Signature=08e746f195b735684c50b21ab9d82275db638adfc7d0ed59ea80981b09991d76&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQECNBZM%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFuTCggFDrncXS3WGtX%2B4fR%2FJm22S5JgOj9M38VfEWXuAiEAq%2Ffex5irjH8rkx1UcEyrHQsZgNMvHrokuYXfBFKegO4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDAP2YulAp88Kd1bGcCrcA%2FsPBwXCKhfEMgg5Epc3D%2BMXXejy0Q4velhoUR%2FycmxoSHXSEkE6xGstH1P20TwM3gloFERFbMAXbjQU3wEE3LweJqStAxop3wIgq7Dd89XuT%2BQENrMh3MaTNnNJ2MOSpEVDollKs3t2TZ9h0EOUl%2BVcKVLbRJmSQOZVV6657%2BHoQKgo5cvBUjo42TaHt79Jhj6AAjrvBZcRT%2BsX34%2FRTSZex5cOGrpf86%2ByLC6Y2e9Pq%2BcVXBM1H09JseLBwsgxTYCbshIMvVeS4k39hgqhdMB4%2FEq%2BCRXewZuVdCSsyFFFFPRQgw7Im1ZUtsIYNd15BEAsWtZIIr%2FXx5LdkE2XP%2F7FMe7UHb4PVb8Jhkq7i%2Bk9Euis55g%2FsNO%2B8L7CmawHbxJNagIIUz68aF0Ub1RZiUuTgWJ0EF8S6SNBpKvkfvZ07OMuOZpov%2BO9ewoVG6MhhlXWwTVVQ6nKxVjXkLvgMr%2B9ho326WkYXJIZ5iZhIZpiPHdStNa1ruuI060dNfMzt3Be2%2Fo858zeGGeOeAjlWFnS%2FTRFeqxyYLSgV10%2FHuO7A0lAOcBaEndZ3mE%2B909t7g8AbWUO%2Fx7XnFeFT3ZA9XKKfEsRP8XgMTdn0Z9YySnf880lrfT5AdMTT0ldMMjE2sEGOqUBTQEaSahfBPbNJvFi%2F6fvb91hqGzW0Qx1tKf9Jp0srkYDMDnZ61Mt0LtPTcMo18BLovFDR5eMLnmoF8n6tsb5w73Lwh%2BAf9W8CwRvVfgFsik3B0sfF1pyUl%2BPvv57wpw%2BkznEajuRpiPm1wFXwO1z85ZscKRbngGW9BGFVhs6epAUX2R72i%2FbxfRaBIajjrw%2FMsPa9GBJcyOYFZIh5WlJxkl7t73f&X-Amz-Signature=e89902eeae65e6a8aa147dab4ad5c246b37cfa1e41115e1fb7307923765356f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQECNBZM%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFuTCggFDrncXS3WGtX%2B4fR%2FJm22S5JgOj9M38VfEWXuAiEAq%2Ffex5irjH8rkx1UcEyrHQsZgNMvHrokuYXfBFKegO4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDAP2YulAp88Kd1bGcCrcA%2FsPBwXCKhfEMgg5Epc3D%2BMXXejy0Q4velhoUR%2FycmxoSHXSEkE6xGstH1P20TwM3gloFERFbMAXbjQU3wEE3LweJqStAxop3wIgq7Dd89XuT%2BQENrMh3MaTNnNJ2MOSpEVDollKs3t2TZ9h0EOUl%2BVcKVLbRJmSQOZVV6657%2BHoQKgo5cvBUjo42TaHt79Jhj6AAjrvBZcRT%2BsX34%2FRTSZex5cOGrpf86%2ByLC6Y2e9Pq%2BcVXBM1H09JseLBwsgxTYCbshIMvVeS4k39hgqhdMB4%2FEq%2BCRXewZuVdCSsyFFFFPRQgw7Im1ZUtsIYNd15BEAsWtZIIr%2FXx5LdkE2XP%2F7FMe7UHb4PVb8Jhkq7i%2Bk9Euis55g%2FsNO%2B8L7CmawHbxJNagIIUz68aF0Ub1RZiUuTgWJ0EF8S6SNBpKvkfvZ07OMuOZpov%2BO9ewoVG6MhhlXWwTVVQ6nKxVjXkLvgMr%2B9ho326WkYXJIZ5iZhIZpiPHdStNa1ruuI060dNfMzt3Be2%2Fo858zeGGeOeAjlWFnS%2FTRFeqxyYLSgV10%2FHuO7A0lAOcBaEndZ3mE%2B909t7g8AbWUO%2Fx7XnFeFT3ZA9XKKfEsRP8XgMTdn0Z9YySnf880lrfT5AdMTT0ldMMjE2sEGOqUBTQEaSahfBPbNJvFi%2F6fvb91hqGzW0Qx1tKf9Jp0srkYDMDnZ61Mt0LtPTcMo18BLovFDR5eMLnmoF8n6tsb5w73Lwh%2BAf9W8CwRvVfgFsik3B0sfF1pyUl%2BPvv57wpw%2BkznEajuRpiPm1wFXwO1z85ZscKRbngGW9BGFVhs6epAUX2R72i%2FbxfRaBIajjrw%2FMsPa9GBJcyOYFZIh5WlJxkl7t73f&X-Amz-Signature=42fe11d419934f5f0886a05692c77efaabb3a08920dab75a9f7dede045280bb0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQECNBZM%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFuTCggFDrncXS3WGtX%2B4fR%2FJm22S5JgOj9M38VfEWXuAiEAq%2Ffex5irjH8rkx1UcEyrHQsZgNMvHrokuYXfBFKegO4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDAP2YulAp88Kd1bGcCrcA%2FsPBwXCKhfEMgg5Epc3D%2BMXXejy0Q4velhoUR%2FycmxoSHXSEkE6xGstH1P20TwM3gloFERFbMAXbjQU3wEE3LweJqStAxop3wIgq7Dd89XuT%2BQENrMh3MaTNnNJ2MOSpEVDollKs3t2TZ9h0EOUl%2BVcKVLbRJmSQOZVV6657%2BHoQKgo5cvBUjo42TaHt79Jhj6AAjrvBZcRT%2BsX34%2FRTSZex5cOGrpf86%2ByLC6Y2e9Pq%2BcVXBM1H09JseLBwsgxTYCbshIMvVeS4k39hgqhdMB4%2FEq%2BCRXewZuVdCSsyFFFFPRQgw7Im1ZUtsIYNd15BEAsWtZIIr%2FXx5LdkE2XP%2F7FMe7UHb4PVb8Jhkq7i%2Bk9Euis55g%2FsNO%2B8L7CmawHbxJNagIIUz68aF0Ub1RZiUuTgWJ0EF8S6SNBpKvkfvZ07OMuOZpov%2BO9ewoVG6MhhlXWwTVVQ6nKxVjXkLvgMr%2B9ho326WkYXJIZ5iZhIZpiPHdStNa1ruuI060dNfMzt3Be2%2Fo858zeGGeOeAjlWFnS%2FTRFeqxyYLSgV10%2FHuO7A0lAOcBaEndZ3mE%2B909t7g8AbWUO%2Fx7XnFeFT3ZA9XKKfEsRP8XgMTdn0Z9YySnf880lrfT5AdMTT0ldMMjE2sEGOqUBTQEaSahfBPbNJvFi%2F6fvb91hqGzW0Qx1tKf9Jp0srkYDMDnZ61Mt0LtPTcMo18BLovFDR5eMLnmoF8n6tsb5w73Lwh%2BAf9W8CwRvVfgFsik3B0sfF1pyUl%2BPvv57wpw%2BkznEajuRpiPm1wFXwO1z85ZscKRbngGW9BGFVhs6epAUX2R72i%2FbxfRaBIajjrw%2FMsPa9GBJcyOYFZIh5WlJxkl7t73f&X-Amz-Signature=bf68872391342d823cfffd4afa2f785b93106a1b7a9fd24625840573eef42c9a&X-Amz-SignedHeaders=host&x-id=GetObject)
