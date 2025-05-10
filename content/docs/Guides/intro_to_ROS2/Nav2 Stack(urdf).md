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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673CH5A3G%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIFMuaZuG3SWg29Zs1synii1%2Byd73oASeTZH1%2B5oQ4X%2BFAiEAqWzPqSMI%2Fs8jy2xRxjL9APfnbhp7sUIR%2BNYoJI3UwLIqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbn2%2BYaLXbmSiRJ1yrcA8T28bWo4uOEjDqUf1%2FMB9iheIoKBu0ReyUxtr4W%2BSGNHdFSuUb%2FJIOkQGDVaOXJgbOCfzvamVT3HIIB%2BaxpVd7XGAYT8KxEwazwluoIzRks1%2BHAmfm%2B3xrLQjUfGtXG4MHUi9Dx5FKqAJZb%2BWoC4I5VCEm6UsFwWEZs2p7BFJAuvJ%2FLWiPcBPVBqwB9W60wzkyHX%2FKri6J%2FDC4gbQKTVSdQDScpfrSXQIeicvzZRsJfPsQSwN7rKsyn3qIXTbn%2FnPhhFfEW4UHahL3IXbWuO%2BWH9mD6KIzmsqfFhy91mbtKz%2Bl3iK4UZkHUURUxwgtvztWeFQxUjr4RlPOWlgvaeAlxYMbZ9r1N420PzeDj4Hkr4nyXaeNuNYbp5g9n2XHmv%2FJUsbj1n%2FkQDTbN076VJO9NnObR05OtT%2BQXNkbUFrn2%2BAfZtkCHUnLO0kJpcDm4nuSWrQ0vIKxjjloi6sy%2BfYzEkratsNp%2Bwq7Td%2F04yMHH%2B1Nj5CAX42ZLifHFaYLy2abc%2BmxCBTr372mbKZIVSABEa6hRv2ohc7sokGI7I8GtZW73zlkUgTvlE7G6xkVVPASWXfAylu1iPLvqbZw57rVTdDwn6BTdtLmxZnIbZqWViwYkx69%2FD7ysQf9UMOXS%2FsAGOqUBlLsACYKYA%2BMxjvUs7s5dKGxlAHy7RLYqz2kiDnjFmepZqKnQZXXzTfDqFxnzPu67i9mtioMi8bAjsh5QlTCfl%2Biqitp0lrGp%2Fa3rmnC0M3%2F%2BuV2AfVXGY20zIJvdB%2FSWzs1KC0bvdogSWwYb2sWCRfb7WsMa9Dz0V0NhlQKh9J3JnFmUF0RBPI%2Fx%2BbBkAcMh9o%2BpBIyfNxkyigtAIJU4A%2FYMN6K%2F&X-Amz-Signature=a54b1de4af2d15a6bb8e9d6820bea745b024f8c8be1d3348126d2d631b83f719&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673CH5A3G%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIFMuaZuG3SWg29Zs1synii1%2Byd73oASeTZH1%2B5oQ4X%2BFAiEAqWzPqSMI%2Fs8jy2xRxjL9APfnbhp7sUIR%2BNYoJI3UwLIqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbn2%2BYaLXbmSiRJ1yrcA8T28bWo4uOEjDqUf1%2FMB9iheIoKBu0ReyUxtr4W%2BSGNHdFSuUb%2FJIOkQGDVaOXJgbOCfzvamVT3HIIB%2BaxpVd7XGAYT8KxEwazwluoIzRks1%2BHAmfm%2B3xrLQjUfGtXG4MHUi9Dx5FKqAJZb%2BWoC4I5VCEm6UsFwWEZs2p7BFJAuvJ%2FLWiPcBPVBqwB9W60wzkyHX%2FKri6J%2FDC4gbQKTVSdQDScpfrSXQIeicvzZRsJfPsQSwN7rKsyn3qIXTbn%2FnPhhFfEW4UHahL3IXbWuO%2BWH9mD6KIzmsqfFhy91mbtKz%2Bl3iK4UZkHUURUxwgtvztWeFQxUjr4RlPOWlgvaeAlxYMbZ9r1N420PzeDj4Hkr4nyXaeNuNYbp5g9n2XHmv%2FJUsbj1n%2FkQDTbN076VJO9NnObR05OtT%2BQXNkbUFrn2%2BAfZtkCHUnLO0kJpcDm4nuSWrQ0vIKxjjloi6sy%2BfYzEkratsNp%2Bwq7Td%2F04yMHH%2B1Nj5CAX42ZLifHFaYLy2abc%2BmxCBTr372mbKZIVSABEa6hRv2ohc7sokGI7I8GtZW73zlkUgTvlE7G6xkVVPASWXfAylu1iPLvqbZw57rVTdDwn6BTdtLmxZnIbZqWViwYkx69%2FD7ysQf9UMOXS%2FsAGOqUBlLsACYKYA%2BMxjvUs7s5dKGxlAHy7RLYqz2kiDnjFmepZqKnQZXXzTfDqFxnzPu67i9mtioMi8bAjsh5QlTCfl%2Biqitp0lrGp%2Fa3rmnC0M3%2F%2BuV2AfVXGY20zIJvdB%2FSWzs1KC0bvdogSWwYb2sWCRfb7WsMa9Dz0V0NhlQKh9J3JnFmUF0RBPI%2Fx%2BbBkAcMh9o%2BpBIyfNxkyigtAIJU4A%2FYMN6K%2F&X-Amz-Signature=e1a845b6cfa085fa49f7079cd32d12e3a58e57c09128ac03f76ec5c1b93dd0be&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673CH5A3G%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIFMuaZuG3SWg29Zs1synii1%2Byd73oASeTZH1%2B5oQ4X%2BFAiEAqWzPqSMI%2Fs8jy2xRxjL9APfnbhp7sUIR%2BNYoJI3UwLIqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbn2%2BYaLXbmSiRJ1yrcA8T28bWo4uOEjDqUf1%2FMB9iheIoKBu0ReyUxtr4W%2BSGNHdFSuUb%2FJIOkQGDVaOXJgbOCfzvamVT3HIIB%2BaxpVd7XGAYT8KxEwazwluoIzRks1%2BHAmfm%2B3xrLQjUfGtXG4MHUi9Dx5FKqAJZb%2BWoC4I5VCEm6UsFwWEZs2p7BFJAuvJ%2FLWiPcBPVBqwB9W60wzkyHX%2FKri6J%2FDC4gbQKTVSdQDScpfrSXQIeicvzZRsJfPsQSwN7rKsyn3qIXTbn%2FnPhhFfEW4UHahL3IXbWuO%2BWH9mD6KIzmsqfFhy91mbtKz%2Bl3iK4UZkHUURUxwgtvztWeFQxUjr4RlPOWlgvaeAlxYMbZ9r1N420PzeDj4Hkr4nyXaeNuNYbp5g9n2XHmv%2FJUsbj1n%2FkQDTbN076VJO9NnObR05OtT%2BQXNkbUFrn2%2BAfZtkCHUnLO0kJpcDm4nuSWrQ0vIKxjjloi6sy%2BfYzEkratsNp%2Bwq7Td%2F04yMHH%2B1Nj5CAX42ZLifHFaYLy2abc%2BmxCBTr372mbKZIVSABEa6hRv2ohc7sokGI7I8GtZW73zlkUgTvlE7G6xkVVPASWXfAylu1iPLvqbZw57rVTdDwn6BTdtLmxZnIbZqWViwYkx69%2FD7ysQf9UMOXS%2FsAGOqUBlLsACYKYA%2BMxjvUs7s5dKGxlAHy7RLYqz2kiDnjFmepZqKnQZXXzTfDqFxnzPu67i9mtioMi8bAjsh5QlTCfl%2Biqitp0lrGp%2Fa3rmnC0M3%2F%2BuV2AfVXGY20zIJvdB%2FSWzs1KC0bvdogSWwYb2sWCRfb7WsMa9Dz0V0NhlQKh9J3JnFmUF0RBPI%2Fx%2BbBkAcMh9o%2BpBIyfNxkyigtAIJU4A%2FYMN6K%2F&X-Amz-Signature=509b8bf892d365e8d0741db984b3fa8114128ea23a39af045f56107bb392c3b4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673CH5A3G%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIFMuaZuG3SWg29Zs1synii1%2Byd73oASeTZH1%2B5oQ4X%2BFAiEAqWzPqSMI%2Fs8jy2xRxjL9APfnbhp7sUIR%2BNYoJI3UwLIqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbn2%2BYaLXbmSiRJ1yrcA8T28bWo4uOEjDqUf1%2FMB9iheIoKBu0ReyUxtr4W%2BSGNHdFSuUb%2FJIOkQGDVaOXJgbOCfzvamVT3HIIB%2BaxpVd7XGAYT8KxEwazwluoIzRks1%2BHAmfm%2B3xrLQjUfGtXG4MHUi9Dx5FKqAJZb%2BWoC4I5VCEm6UsFwWEZs2p7BFJAuvJ%2FLWiPcBPVBqwB9W60wzkyHX%2FKri6J%2FDC4gbQKTVSdQDScpfrSXQIeicvzZRsJfPsQSwN7rKsyn3qIXTbn%2FnPhhFfEW4UHahL3IXbWuO%2BWH9mD6KIzmsqfFhy91mbtKz%2Bl3iK4UZkHUURUxwgtvztWeFQxUjr4RlPOWlgvaeAlxYMbZ9r1N420PzeDj4Hkr4nyXaeNuNYbp5g9n2XHmv%2FJUsbj1n%2FkQDTbN076VJO9NnObR05OtT%2BQXNkbUFrn2%2BAfZtkCHUnLO0kJpcDm4nuSWrQ0vIKxjjloi6sy%2BfYzEkratsNp%2Bwq7Td%2F04yMHH%2B1Nj5CAX42ZLifHFaYLy2abc%2BmxCBTr372mbKZIVSABEa6hRv2ohc7sokGI7I8GtZW73zlkUgTvlE7G6xkVVPASWXfAylu1iPLvqbZw57rVTdDwn6BTdtLmxZnIbZqWViwYkx69%2FD7ysQf9UMOXS%2FsAGOqUBlLsACYKYA%2BMxjvUs7s5dKGxlAHy7RLYqz2kiDnjFmepZqKnQZXXzTfDqFxnzPu67i9mtioMi8bAjsh5QlTCfl%2Biqitp0lrGp%2Fa3rmnC0M3%2F%2BuV2AfVXGY20zIJvdB%2FSWzs1KC0bvdogSWwYb2sWCRfb7WsMa9Dz0V0NhlQKh9J3JnFmUF0RBPI%2Fx%2BbBkAcMh9o%2BpBIyfNxkyigtAIJU4A%2FYMN6K%2F&X-Amz-Signature=78c39bf2c0ac52beda67f14e4acdc846722309283c4492686fd981fa13132ebf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673CH5A3G%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIFMuaZuG3SWg29Zs1synii1%2Byd73oASeTZH1%2B5oQ4X%2BFAiEAqWzPqSMI%2Fs8jy2xRxjL9APfnbhp7sUIR%2BNYoJI3UwLIqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbn2%2BYaLXbmSiRJ1yrcA8T28bWo4uOEjDqUf1%2FMB9iheIoKBu0ReyUxtr4W%2BSGNHdFSuUb%2FJIOkQGDVaOXJgbOCfzvamVT3HIIB%2BaxpVd7XGAYT8KxEwazwluoIzRks1%2BHAmfm%2B3xrLQjUfGtXG4MHUi9Dx5FKqAJZb%2BWoC4I5VCEm6UsFwWEZs2p7BFJAuvJ%2FLWiPcBPVBqwB9W60wzkyHX%2FKri6J%2FDC4gbQKTVSdQDScpfrSXQIeicvzZRsJfPsQSwN7rKsyn3qIXTbn%2FnPhhFfEW4UHahL3IXbWuO%2BWH9mD6KIzmsqfFhy91mbtKz%2Bl3iK4UZkHUURUxwgtvztWeFQxUjr4RlPOWlgvaeAlxYMbZ9r1N420PzeDj4Hkr4nyXaeNuNYbp5g9n2XHmv%2FJUsbj1n%2FkQDTbN076VJO9NnObR05OtT%2BQXNkbUFrn2%2BAfZtkCHUnLO0kJpcDm4nuSWrQ0vIKxjjloi6sy%2BfYzEkratsNp%2Bwq7Td%2F04yMHH%2B1Nj5CAX42ZLifHFaYLy2abc%2BmxCBTr372mbKZIVSABEa6hRv2ohc7sokGI7I8GtZW73zlkUgTvlE7G6xkVVPASWXfAylu1iPLvqbZw57rVTdDwn6BTdtLmxZnIbZqWViwYkx69%2FD7ysQf9UMOXS%2FsAGOqUBlLsACYKYA%2BMxjvUs7s5dKGxlAHy7RLYqz2kiDnjFmepZqKnQZXXzTfDqFxnzPu67i9mtioMi8bAjsh5QlTCfl%2Biqitp0lrGp%2Fa3rmnC0M3%2F%2BuV2AfVXGY20zIJvdB%2FSWzs1KC0bvdogSWwYb2sWCRfb7WsMa9Dz0V0NhlQKh9J3JnFmUF0RBPI%2Fx%2BbBkAcMh9o%2BpBIyfNxkyigtAIJU4A%2FYMN6K%2F&X-Amz-Signature=28710243eb0bf62a595024518cbbea76d8edc56630c05a7cb9e92a34f533d5f5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673CH5A3G%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIFMuaZuG3SWg29Zs1synii1%2Byd73oASeTZH1%2B5oQ4X%2BFAiEAqWzPqSMI%2Fs8jy2xRxjL9APfnbhp7sUIR%2BNYoJI3UwLIqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbn2%2BYaLXbmSiRJ1yrcA8T28bWo4uOEjDqUf1%2FMB9iheIoKBu0ReyUxtr4W%2BSGNHdFSuUb%2FJIOkQGDVaOXJgbOCfzvamVT3HIIB%2BaxpVd7XGAYT8KxEwazwluoIzRks1%2BHAmfm%2B3xrLQjUfGtXG4MHUi9Dx5FKqAJZb%2BWoC4I5VCEm6UsFwWEZs2p7BFJAuvJ%2FLWiPcBPVBqwB9W60wzkyHX%2FKri6J%2FDC4gbQKTVSdQDScpfrSXQIeicvzZRsJfPsQSwN7rKsyn3qIXTbn%2FnPhhFfEW4UHahL3IXbWuO%2BWH9mD6KIzmsqfFhy91mbtKz%2Bl3iK4UZkHUURUxwgtvztWeFQxUjr4RlPOWlgvaeAlxYMbZ9r1N420PzeDj4Hkr4nyXaeNuNYbp5g9n2XHmv%2FJUsbj1n%2FkQDTbN076VJO9NnObR05OtT%2BQXNkbUFrn2%2BAfZtkCHUnLO0kJpcDm4nuSWrQ0vIKxjjloi6sy%2BfYzEkratsNp%2Bwq7Td%2F04yMHH%2B1Nj5CAX42ZLifHFaYLy2abc%2BmxCBTr372mbKZIVSABEa6hRv2ohc7sokGI7I8GtZW73zlkUgTvlE7G6xkVVPASWXfAylu1iPLvqbZw57rVTdDwn6BTdtLmxZnIbZqWViwYkx69%2FD7ysQf9UMOXS%2FsAGOqUBlLsACYKYA%2BMxjvUs7s5dKGxlAHy7RLYqz2kiDnjFmepZqKnQZXXzTfDqFxnzPu67i9mtioMi8bAjsh5QlTCfl%2Biqitp0lrGp%2Fa3rmnC0M3%2F%2BuV2AfVXGY20zIJvdB%2FSWzs1KC0bvdogSWwYb2sWCRfb7WsMa9Dz0V0NhlQKh9J3JnFmUF0RBPI%2Fx%2BbBkAcMh9o%2BpBIyfNxkyigtAIJU4A%2FYMN6K%2F&X-Amz-Signature=59356cfa840c4c58ddcad9ad8a011fe189daa07ca9aa883ed7e25315297328c3&X-Amz-SignedHeaders=host&x-id=GetObject)
