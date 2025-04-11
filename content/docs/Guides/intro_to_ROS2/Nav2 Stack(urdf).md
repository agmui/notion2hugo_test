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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654S277QI%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDYB1umVmXYb3BmEx%2FaGLQ72rqULb92DwCE0Pud7JIPIAIgTla7%2FtyVaURa%2B5sd7ztXNhjCVJdvw46lGdChGfLgMpEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtfrE7UVRMvvarUxyrcA5d5I%2F1%2BX6OLO%2BlpIylPFKUyVIQ%2BruMc%2FULuhqd43c2Qe1C9Ro9FaqFa%2FDzz%2F%2FP4W4CQhJLGp0sgrRxdIo%2FhxhS2GQ7sQs4XPl%2F83kkyLW0goiLGtWDOyOZ4%2FI2Ykz2wzGZylTbkbjqqlbgKxJCqRt9rqI%2BwOUCJ2oUsb3qQOhmI0EPcGdLMrWMAqtxJoD6088cxRzYWiR%2FcQBHlFKHUP5dy6y4DaLpx5i1Ykr3YgTD86lWjgtsWgYo6o2hkPczCLKfxzWQhLu%2FPAStNlfd1fscekZ3djxRYaz3pWbYHwXfIzGNj4gmN%2FmubzaFcnK%2Bsdf9XLlkc5BxXsWuZNk3sqNElAZO8AYaNFx7lNcVwM9TA2hbjGj4Y4yhJPqvkVxNb56GitMREZbpUElO9jSadUOcYnElkfmKyDD0ngxz%2BrE2NNYBmtMM9H9homHVGcTqCbcA5hCknaO43Z73HNgeK9kCm5NX1DjLcmNT9hgTzNm6BG0zxtMA1Zj7J%2FhRX9FKBo7D5P0AUOHySDYI0lhifV%2FvRoCFBt9v9lTVXBOK8e4q7vwnbWacolULm1M9%2Fltt0WD7BwP8f7tKhuY%2BTGPk3e8lsIeCeUzzp71oafxLrgVB1M18aJvCyn92lonElMPzd4b8GOqUBzsg8kpXuRYAyXHnlMKQavILubuMQCaXmBT3Vr3vw%2BUppiCjuRU0bktPZvHRyOUo6Pli67golOKveR0LvddZxkQRQqD7ZN4c6WPbgLAGb6zvNaEUmmSOcp5pHpj%2FNPFwgJf9HFoH5ASTJFYnR%2BWw1skvJwKkpVAHPM%2FS%2FfV1yxXG7XQHpvGC6QzhfulPGYm0YBd7GxL8K71xjxejZ8YYsJsSFQAPu&X-Amz-Signature=7dae46aa4c062f982f9d34980fb9f5d8e4935e12536adc605d8bb0f41c36164f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654S277QI%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDYB1umVmXYb3BmEx%2FaGLQ72rqULb92DwCE0Pud7JIPIAIgTla7%2FtyVaURa%2B5sd7ztXNhjCVJdvw46lGdChGfLgMpEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtfrE7UVRMvvarUxyrcA5d5I%2F1%2BX6OLO%2BlpIylPFKUyVIQ%2BruMc%2FULuhqd43c2Qe1C9Ro9FaqFa%2FDzz%2F%2FP4W4CQhJLGp0sgrRxdIo%2FhxhS2GQ7sQs4XPl%2F83kkyLW0goiLGtWDOyOZ4%2FI2Ykz2wzGZylTbkbjqqlbgKxJCqRt9rqI%2BwOUCJ2oUsb3qQOhmI0EPcGdLMrWMAqtxJoD6088cxRzYWiR%2FcQBHlFKHUP5dy6y4DaLpx5i1Ykr3YgTD86lWjgtsWgYo6o2hkPczCLKfxzWQhLu%2FPAStNlfd1fscekZ3djxRYaz3pWbYHwXfIzGNj4gmN%2FmubzaFcnK%2Bsdf9XLlkc5BxXsWuZNk3sqNElAZO8AYaNFx7lNcVwM9TA2hbjGj4Y4yhJPqvkVxNb56GitMREZbpUElO9jSadUOcYnElkfmKyDD0ngxz%2BrE2NNYBmtMM9H9homHVGcTqCbcA5hCknaO43Z73HNgeK9kCm5NX1DjLcmNT9hgTzNm6BG0zxtMA1Zj7J%2FhRX9FKBo7D5P0AUOHySDYI0lhifV%2FvRoCFBt9v9lTVXBOK8e4q7vwnbWacolULm1M9%2Fltt0WD7BwP8f7tKhuY%2BTGPk3e8lsIeCeUzzp71oafxLrgVB1M18aJvCyn92lonElMPzd4b8GOqUBzsg8kpXuRYAyXHnlMKQavILubuMQCaXmBT3Vr3vw%2BUppiCjuRU0bktPZvHRyOUo6Pli67golOKveR0LvddZxkQRQqD7ZN4c6WPbgLAGb6zvNaEUmmSOcp5pHpj%2FNPFwgJf9HFoH5ASTJFYnR%2BWw1skvJwKkpVAHPM%2FS%2FfV1yxXG7XQHpvGC6QzhfulPGYm0YBd7GxL8K71xjxejZ8YYsJsSFQAPu&X-Amz-Signature=3e3670fa7dd51724a5e1125bb7aba1da5e1a8c3d8ebf26d2007777ed60f56998&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654S277QI%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDYB1umVmXYb3BmEx%2FaGLQ72rqULb92DwCE0Pud7JIPIAIgTla7%2FtyVaURa%2B5sd7ztXNhjCVJdvw46lGdChGfLgMpEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtfrE7UVRMvvarUxyrcA5d5I%2F1%2BX6OLO%2BlpIylPFKUyVIQ%2BruMc%2FULuhqd43c2Qe1C9Ro9FaqFa%2FDzz%2F%2FP4W4CQhJLGp0sgrRxdIo%2FhxhS2GQ7sQs4XPl%2F83kkyLW0goiLGtWDOyOZ4%2FI2Ykz2wzGZylTbkbjqqlbgKxJCqRt9rqI%2BwOUCJ2oUsb3qQOhmI0EPcGdLMrWMAqtxJoD6088cxRzYWiR%2FcQBHlFKHUP5dy6y4DaLpx5i1Ykr3YgTD86lWjgtsWgYo6o2hkPczCLKfxzWQhLu%2FPAStNlfd1fscekZ3djxRYaz3pWbYHwXfIzGNj4gmN%2FmubzaFcnK%2Bsdf9XLlkc5BxXsWuZNk3sqNElAZO8AYaNFx7lNcVwM9TA2hbjGj4Y4yhJPqvkVxNb56GitMREZbpUElO9jSadUOcYnElkfmKyDD0ngxz%2BrE2NNYBmtMM9H9homHVGcTqCbcA5hCknaO43Z73HNgeK9kCm5NX1DjLcmNT9hgTzNm6BG0zxtMA1Zj7J%2FhRX9FKBo7D5P0AUOHySDYI0lhifV%2FvRoCFBt9v9lTVXBOK8e4q7vwnbWacolULm1M9%2Fltt0WD7BwP8f7tKhuY%2BTGPk3e8lsIeCeUzzp71oafxLrgVB1M18aJvCyn92lonElMPzd4b8GOqUBzsg8kpXuRYAyXHnlMKQavILubuMQCaXmBT3Vr3vw%2BUppiCjuRU0bktPZvHRyOUo6Pli67golOKveR0LvddZxkQRQqD7ZN4c6WPbgLAGb6zvNaEUmmSOcp5pHpj%2FNPFwgJf9HFoH5ASTJFYnR%2BWw1skvJwKkpVAHPM%2FS%2FfV1yxXG7XQHpvGC6QzhfulPGYm0YBd7GxL8K71xjxejZ8YYsJsSFQAPu&X-Amz-Signature=32c72c51b9a34ada126b0d36d274fb59e07c11ff68e0fb127896b67731da3c3c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654S277QI%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDYB1umVmXYb3BmEx%2FaGLQ72rqULb92DwCE0Pud7JIPIAIgTla7%2FtyVaURa%2B5sd7ztXNhjCVJdvw46lGdChGfLgMpEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtfrE7UVRMvvarUxyrcA5d5I%2F1%2BX6OLO%2BlpIylPFKUyVIQ%2BruMc%2FULuhqd43c2Qe1C9Ro9FaqFa%2FDzz%2F%2FP4W4CQhJLGp0sgrRxdIo%2FhxhS2GQ7sQs4XPl%2F83kkyLW0goiLGtWDOyOZ4%2FI2Ykz2wzGZylTbkbjqqlbgKxJCqRt9rqI%2BwOUCJ2oUsb3qQOhmI0EPcGdLMrWMAqtxJoD6088cxRzYWiR%2FcQBHlFKHUP5dy6y4DaLpx5i1Ykr3YgTD86lWjgtsWgYo6o2hkPczCLKfxzWQhLu%2FPAStNlfd1fscekZ3djxRYaz3pWbYHwXfIzGNj4gmN%2FmubzaFcnK%2Bsdf9XLlkc5BxXsWuZNk3sqNElAZO8AYaNFx7lNcVwM9TA2hbjGj4Y4yhJPqvkVxNb56GitMREZbpUElO9jSadUOcYnElkfmKyDD0ngxz%2BrE2NNYBmtMM9H9homHVGcTqCbcA5hCknaO43Z73HNgeK9kCm5NX1DjLcmNT9hgTzNm6BG0zxtMA1Zj7J%2FhRX9FKBo7D5P0AUOHySDYI0lhifV%2FvRoCFBt9v9lTVXBOK8e4q7vwnbWacolULm1M9%2Fltt0WD7BwP8f7tKhuY%2BTGPk3e8lsIeCeUzzp71oafxLrgVB1M18aJvCyn92lonElMPzd4b8GOqUBzsg8kpXuRYAyXHnlMKQavILubuMQCaXmBT3Vr3vw%2BUppiCjuRU0bktPZvHRyOUo6Pli67golOKveR0LvddZxkQRQqD7ZN4c6WPbgLAGb6zvNaEUmmSOcp5pHpj%2FNPFwgJf9HFoH5ASTJFYnR%2BWw1skvJwKkpVAHPM%2FS%2FfV1yxXG7XQHpvGC6QzhfulPGYm0YBd7GxL8K71xjxejZ8YYsJsSFQAPu&X-Amz-Signature=dac22b72b3152f3dfbb773efd940cebff23a87d6bcd48ed9cb7a1735f4811f0e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654S277QI%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDYB1umVmXYb3BmEx%2FaGLQ72rqULb92DwCE0Pud7JIPIAIgTla7%2FtyVaURa%2B5sd7ztXNhjCVJdvw46lGdChGfLgMpEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtfrE7UVRMvvarUxyrcA5d5I%2F1%2BX6OLO%2BlpIylPFKUyVIQ%2BruMc%2FULuhqd43c2Qe1C9Ro9FaqFa%2FDzz%2F%2FP4W4CQhJLGp0sgrRxdIo%2FhxhS2GQ7sQs4XPl%2F83kkyLW0goiLGtWDOyOZ4%2FI2Ykz2wzGZylTbkbjqqlbgKxJCqRt9rqI%2BwOUCJ2oUsb3qQOhmI0EPcGdLMrWMAqtxJoD6088cxRzYWiR%2FcQBHlFKHUP5dy6y4DaLpx5i1Ykr3YgTD86lWjgtsWgYo6o2hkPczCLKfxzWQhLu%2FPAStNlfd1fscekZ3djxRYaz3pWbYHwXfIzGNj4gmN%2FmubzaFcnK%2Bsdf9XLlkc5BxXsWuZNk3sqNElAZO8AYaNFx7lNcVwM9TA2hbjGj4Y4yhJPqvkVxNb56GitMREZbpUElO9jSadUOcYnElkfmKyDD0ngxz%2BrE2NNYBmtMM9H9homHVGcTqCbcA5hCknaO43Z73HNgeK9kCm5NX1DjLcmNT9hgTzNm6BG0zxtMA1Zj7J%2FhRX9FKBo7D5P0AUOHySDYI0lhifV%2FvRoCFBt9v9lTVXBOK8e4q7vwnbWacolULm1M9%2Fltt0WD7BwP8f7tKhuY%2BTGPk3e8lsIeCeUzzp71oafxLrgVB1M18aJvCyn92lonElMPzd4b8GOqUBzsg8kpXuRYAyXHnlMKQavILubuMQCaXmBT3Vr3vw%2BUppiCjuRU0bktPZvHRyOUo6Pli67golOKveR0LvddZxkQRQqD7ZN4c6WPbgLAGb6zvNaEUmmSOcp5pHpj%2FNPFwgJf9HFoH5ASTJFYnR%2BWw1skvJwKkpVAHPM%2FS%2FfV1yxXG7XQHpvGC6QzhfulPGYm0YBd7GxL8K71xjxejZ8YYsJsSFQAPu&X-Amz-Signature=01a45ee0ba887e73a441ba7e8aa750ce2d1dbd15a105b962f8954fb69069f0bb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654S277QI%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDYB1umVmXYb3BmEx%2FaGLQ72rqULb92DwCE0Pud7JIPIAIgTla7%2FtyVaURa%2B5sd7ztXNhjCVJdvw46lGdChGfLgMpEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtfrE7UVRMvvarUxyrcA5d5I%2F1%2BX6OLO%2BlpIylPFKUyVIQ%2BruMc%2FULuhqd43c2Qe1C9Ro9FaqFa%2FDzz%2F%2FP4W4CQhJLGp0sgrRxdIo%2FhxhS2GQ7sQs4XPl%2F83kkyLW0goiLGtWDOyOZ4%2FI2Ykz2wzGZylTbkbjqqlbgKxJCqRt9rqI%2BwOUCJ2oUsb3qQOhmI0EPcGdLMrWMAqtxJoD6088cxRzYWiR%2FcQBHlFKHUP5dy6y4DaLpx5i1Ykr3YgTD86lWjgtsWgYo6o2hkPczCLKfxzWQhLu%2FPAStNlfd1fscekZ3djxRYaz3pWbYHwXfIzGNj4gmN%2FmubzaFcnK%2Bsdf9XLlkc5BxXsWuZNk3sqNElAZO8AYaNFx7lNcVwM9TA2hbjGj4Y4yhJPqvkVxNb56GitMREZbpUElO9jSadUOcYnElkfmKyDD0ngxz%2BrE2NNYBmtMM9H9homHVGcTqCbcA5hCknaO43Z73HNgeK9kCm5NX1DjLcmNT9hgTzNm6BG0zxtMA1Zj7J%2FhRX9FKBo7D5P0AUOHySDYI0lhifV%2FvRoCFBt9v9lTVXBOK8e4q7vwnbWacolULm1M9%2Fltt0WD7BwP8f7tKhuY%2BTGPk3e8lsIeCeUzzp71oafxLrgVB1M18aJvCyn92lonElMPzd4b8GOqUBzsg8kpXuRYAyXHnlMKQavILubuMQCaXmBT3Vr3vw%2BUppiCjuRU0bktPZvHRyOUo6Pli67golOKveR0LvddZxkQRQqD7ZN4c6WPbgLAGb6zvNaEUmmSOcp5pHpj%2FNPFwgJf9HFoH5ASTJFYnR%2BWw1skvJwKkpVAHPM%2FS%2FfV1yxXG7XQHpvGC6QzhfulPGYm0YBd7GxL8K71xjxejZ8YYsJsSFQAPu&X-Amz-Signature=70b141864b46a1d42f00baaa51709e43c5ebd955da86b1ca0cebbf1cec71ad51&X-Amz-SignedHeaders=host&x-id=GetObject)
