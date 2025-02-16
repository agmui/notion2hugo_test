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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T54RHO54%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T131151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCP93aNH7%2FXt219HdrQuHZaeBTRThcI860xCEQY6QdfCwIgXOh0E%2BWhGCOfDlDG8GSnNWte5zqHnD%2BeQNuox%2BuqHtoq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEcHYtZYo4gQ1JHllCrcA5bC8Ya92fJua13H12NKvWxSaKznt7l4ingwQCJtS%2FHcD9bxj1mi44WP61XUPNlHUvLzzdiIdh0jvAcDUPWQmPjt0K72el1%2BCvp4PXKUCiGvZxaQ0UIWHCY4oPikj3vo0%2B0sWDgfadOZjAZeKXIXaq6%2F06edsYpC1L5pJm0sibXIustcZHLCYCXmUFSIKLuSDEw%2BxGVM3YenAszwldIJ7RLkRWE%2BBeRK2Lik94pW4fauSInXFPzDENFZQgTs%2FimJtBNjyVD%2F7zdEnSK2LS2xLE%2FKKgx5P3UXZxWAWoa1aPbIlkqpR0dqnjFitrmbS1jV1wwi6MII6iujFpN%2Bx9qgmmA55saTjc0q4vXMGjRBqkp2goHTHE0HrWmCEPzKwgcyoJPYJXPWZR1zu%2BDmYU5GGd1hEwap%2FO7oRhMJjmucmsrdjzj4%2B6MjDwORhwz3W%2BBkV2fCJu11kRlRtm6mOohWIy5JdYJLFVY3DDMC%2FJUMNm%2BGWQXEA6vqCUOn6Z0QaiaZHkS72t2ffcMg3ylWgaRITBEvsJ1qJlfVsMWy%2Fsa%2FAptlDWC6m%2FCzDDuqCbtmBeqXyFgnyv%2FAS9Sy%2BMy%2FHbr0JulQHXPpPiEMUMWhjKnejkqKmo2S2LaPNy%2BBbaQXMPChx70GOqUBgHdD93zeeYHIXVENUhrv02N%2BYe9Sc0e%2FUDrqBD7GSwSr8PCZQq%2BLBiBfSIWt1%2FLyW8apx7t3FDLi41plI8X4GBDIjP8FBCVkF9EKhJeQsWNJMPHMFlkkwYvCNBFhNcH84mcTbjnfu6Ja0G%2FHUWxKihFU1%2B5XfFyeQsr%2FHhcooanSnUkawAL4mTraraB0On%2BnZw6kofvjbgtcbKLCjX0HSN4%2BD%2BZY&X-Amz-Signature=a4640fda3963f6d1ca7797a6e5d93f08f9c4181024eec9d313fd0d96a40393a5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T54RHO54%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T131151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCP93aNH7%2FXt219HdrQuHZaeBTRThcI860xCEQY6QdfCwIgXOh0E%2BWhGCOfDlDG8GSnNWte5zqHnD%2BeQNuox%2BuqHtoq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEcHYtZYo4gQ1JHllCrcA5bC8Ya92fJua13H12NKvWxSaKznt7l4ingwQCJtS%2FHcD9bxj1mi44WP61XUPNlHUvLzzdiIdh0jvAcDUPWQmPjt0K72el1%2BCvp4PXKUCiGvZxaQ0UIWHCY4oPikj3vo0%2B0sWDgfadOZjAZeKXIXaq6%2F06edsYpC1L5pJm0sibXIustcZHLCYCXmUFSIKLuSDEw%2BxGVM3YenAszwldIJ7RLkRWE%2BBeRK2Lik94pW4fauSInXFPzDENFZQgTs%2FimJtBNjyVD%2F7zdEnSK2LS2xLE%2FKKgx5P3UXZxWAWoa1aPbIlkqpR0dqnjFitrmbS1jV1wwi6MII6iujFpN%2Bx9qgmmA55saTjc0q4vXMGjRBqkp2goHTHE0HrWmCEPzKwgcyoJPYJXPWZR1zu%2BDmYU5GGd1hEwap%2FO7oRhMJjmucmsrdjzj4%2B6MjDwORhwz3W%2BBkV2fCJu11kRlRtm6mOohWIy5JdYJLFVY3DDMC%2FJUMNm%2BGWQXEA6vqCUOn6Z0QaiaZHkS72t2ffcMg3ylWgaRITBEvsJ1qJlfVsMWy%2Fsa%2FAptlDWC6m%2FCzDDuqCbtmBeqXyFgnyv%2FAS9Sy%2BMy%2FHbr0JulQHXPpPiEMUMWhjKnejkqKmo2S2LaPNy%2BBbaQXMPChx70GOqUBgHdD93zeeYHIXVENUhrv02N%2BYe9Sc0e%2FUDrqBD7GSwSr8PCZQq%2BLBiBfSIWt1%2FLyW8apx7t3FDLi41plI8X4GBDIjP8FBCVkF9EKhJeQsWNJMPHMFlkkwYvCNBFhNcH84mcTbjnfu6Ja0G%2FHUWxKihFU1%2B5XfFyeQsr%2FHhcooanSnUkawAL4mTraraB0On%2BnZw6kofvjbgtcbKLCjX0HSN4%2BD%2BZY&X-Amz-Signature=a17091298a7f714e473d9f3ff6c60e4d2ba1f7224c9236b7b13e65e743e94a35&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T54RHO54%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T131151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCP93aNH7%2FXt219HdrQuHZaeBTRThcI860xCEQY6QdfCwIgXOh0E%2BWhGCOfDlDG8GSnNWte5zqHnD%2BeQNuox%2BuqHtoq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEcHYtZYo4gQ1JHllCrcA5bC8Ya92fJua13H12NKvWxSaKznt7l4ingwQCJtS%2FHcD9bxj1mi44WP61XUPNlHUvLzzdiIdh0jvAcDUPWQmPjt0K72el1%2BCvp4PXKUCiGvZxaQ0UIWHCY4oPikj3vo0%2B0sWDgfadOZjAZeKXIXaq6%2F06edsYpC1L5pJm0sibXIustcZHLCYCXmUFSIKLuSDEw%2BxGVM3YenAszwldIJ7RLkRWE%2BBeRK2Lik94pW4fauSInXFPzDENFZQgTs%2FimJtBNjyVD%2F7zdEnSK2LS2xLE%2FKKgx5P3UXZxWAWoa1aPbIlkqpR0dqnjFitrmbS1jV1wwi6MII6iujFpN%2Bx9qgmmA55saTjc0q4vXMGjRBqkp2goHTHE0HrWmCEPzKwgcyoJPYJXPWZR1zu%2BDmYU5GGd1hEwap%2FO7oRhMJjmucmsrdjzj4%2B6MjDwORhwz3W%2BBkV2fCJu11kRlRtm6mOohWIy5JdYJLFVY3DDMC%2FJUMNm%2BGWQXEA6vqCUOn6Z0QaiaZHkS72t2ffcMg3ylWgaRITBEvsJ1qJlfVsMWy%2Fsa%2FAptlDWC6m%2FCzDDuqCbtmBeqXyFgnyv%2FAS9Sy%2BMy%2FHbr0JulQHXPpPiEMUMWhjKnejkqKmo2S2LaPNy%2BBbaQXMPChx70GOqUBgHdD93zeeYHIXVENUhrv02N%2BYe9Sc0e%2FUDrqBD7GSwSr8PCZQq%2BLBiBfSIWt1%2FLyW8apx7t3FDLi41plI8X4GBDIjP8FBCVkF9EKhJeQsWNJMPHMFlkkwYvCNBFhNcH84mcTbjnfu6Ja0G%2FHUWxKihFU1%2B5XfFyeQsr%2FHhcooanSnUkawAL4mTraraB0On%2BnZw6kofvjbgtcbKLCjX0HSN4%2BD%2BZY&X-Amz-Signature=965eeb278ab8fa837a88b4626188e0a66dc82a761d77f7f0c8b148e0ee5dae1e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T54RHO54%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T131151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCP93aNH7%2FXt219HdrQuHZaeBTRThcI860xCEQY6QdfCwIgXOh0E%2BWhGCOfDlDG8GSnNWte5zqHnD%2BeQNuox%2BuqHtoq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEcHYtZYo4gQ1JHllCrcA5bC8Ya92fJua13H12NKvWxSaKznt7l4ingwQCJtS%2FHcD9bxj1mi44WP61XUPNlHUvLzzdiIdh0jvAcDUPWQmPjt0K72el1%2BCvp4PXKUCiGvZxaQ0UIWHCY4oPikj3vo0%2B0sWDgfadOZjAZeKXIXaq6%2F06edsYpC1L5pJm0sibXIustcZHLCYCXmUFSIKLuSDEw%2BxGVM3YenAszwldIJ7RLkRWE%2BBeRK2Lik94pW4fauSInXFPzDENFZQgTs%2FimJtBNjyVD%2F7zdEnSK2LS2xLE%2FKKgx5P3UXZxWAWoa1aPbIlkqpR0dqnjFitrmbS1jV1wwi6MII6iujFpN%2Bx9qgmmA55saTjc0q4vXMGjRBqkp2goHTHE0HrWmCEPzKwgcyoJPYJXPWZR1zu%2BDmYU5GGd1hEwap%2FO7oRhMJjmucmsrdjzj4%2B6MjDwORhwz3W%2BBkV2fCJu11kRlRtm6mOohWIy5JdYJLFVY3DDMC%2FJUMNm%2BGWQXEA6vqCUOn6Z0QaiaZHkS72t2ffcMg3ylWgaRITBEvsJ1qJlfVsMWy%2Fsa%2FAptlDWC6m%2FCzDDuqCbtmBeqXyFgnyv%2FAS9Sy%2BMy%2FHbr0JulQHXPpPiEMUMWhjKnejkqKmo2S2LaPNy%2BBbaQXMPChx70GOqUBgHdD93zeeYHIXVENUhrv02N%2BYe9Sc0e%2FUDrqBD7GSwSr8PCZQq%2BLBiBfSIWt1%2FLyW8apx7t3FDLi41plI8X4GBDIjP8FBCVkF9EKhJeQsWNJMPHMFlkkwYvCNBFhNcH84mcTbjnfu6Ja0G%2FHUWxKihFU1%2B5XfFyeQsr%2FHhcooanSnUkawAL4mTraraB0On%2BnZw6kofvjbgtcbKLCjX0HSN4%2BD%2BZY&X-Amz-Signature=4b72f22bf49cf053a9fae8c0e6a922d086c625cc3e09efc7653b360c93b3a254&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T54RHO54%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T131151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCP93aNH7%2FXt219HdrQuHZaeBTRThcI860xCEQY6QdfCwIgXOh0E%2BWhGCOfDlDG8GSnNWte5zqHnD%2BeQNuox%2BuqHtoq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEcHYtZYo4gQ1JHllCrcA5bC8Ya92fJua13H12NKvWxSaKznt7l4ingwQCJtS%2FHcD9bxj1mi44WP61XUPNlHUvLzzdiIdh0jvAcDUPWQmPjt0K72el1%2BCvp4PXKUCiGvZxaQ0UIWHCY4oPikj3vo0%2B0sWDgfadOZjAZeKXIXaq6%2F06edsYpC1L5pJm0sibXIustcZHLCYCXmUFSIKLuSDEw%2BxGVM3YenAszwldIJ7RLkRWE%2BBeRK2Lik94pW4fauSInXFPzDENFZQgTs%2FimJtBNjyVD%2F7zdEnSK2LS2xLE%2FKKgx5P3UXZxWAWoa1aPbIlkqpR0dqnjFitrmbS1jV1wwi6MII6iujFpN%2Bx9qgmmA55saTjc0q4vXMGjRBqkp2goHTHE0HrWmCEPzKwgcyoJPYJXPWZR1zu%2BDmYU5GGd1hEwap%2FO7oRhMJjmucmsrdjzj4%2B6MjDwORhwz3W%2BBkV2fCJu11kRlRtm6mOohWIy5JdYJLFVY3DDMC%2FJUMNm%2BGWQXEA6vqCUOn6Z0QaiaZHkS72t2ffcMg3ylWgaRITBEvsJ1qJlfVsMWy%2Fsa%2FAptlDWC6m%2FCzDDuqCbtmBeqXyFgnyv%2FAS9Sy%2BMy%2FHbr0JulQHXPpPiEMUMWhjKnejkqKmo2S2LaPNy%2BBbaQXMPChx70GOqUBgHdD93zeeYHIXVENUhrv02N%2BYe9Sc0e%2FUDrqBD7GSwSr8PCZQq%2BLBiBfSIWt1%2FLyW8apx7t3FDLi41plI8X4GBDIjP8FBCVkF9EKhJeQsWNJMPHMFlkkwYvCNBFhNcH84mcTbjnfu6Ja0G%2FHUWxKihFU1%2B5XfFyeQsr%2FHhcooanSnUkawAL4mTraraB0On%2BnZw6kofvjbgtcbKLCjX0HSN4%2BD%2BZY&X-Amz-Signature=2ebf35764223946d765f0e3b2328361821dd3c8626ce4e59d4a5da90db01493c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T54RHO54%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T131151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCP93aNH7%2FXt219HdrQuHZaeBTRThcI860xCEQY6QdfCwIgXOh0E%2BWhGCOfDlDG8GSnNWte5zqHnD%2BeQNuox%2BuqHtoq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEcHYtZYo4gQ1JHllCrcA5bC8Ya92fJua13H12NKvWxSaKznt7l4ingwQCJtS%2FHcD9bxj1mi44WP61XUPNlHUvLzzdiIdh0jvAcDUPWQmPjt0K72el1%2BCvp4PXKUCiGvZxaQ0UIWHCY4oPikj3vo0%2B0sWDgfadOZjAZeKXIXaq6%2F06edsYpC1L5pJm0sibXIustcZHLCYCXmUFSIKLuSDEw%2BxGVM3YenAszwldIJ7RLkRWE%2BBeRK2Lik94pW4fauSInXFPzDENFZQgTs%2FimJtBNjyVD%2F7zdEnSK2LS2xLE%2FKKgx5P3UXZxWAWoa1aPbIlkqpR0dqnjFitrmbS1jV1wwi6MII6iujFpN%2Bx9qgmmA55saTjc0q4vXMGjRBqkp2goHTHE0HrWmCEPzKwgcyoJPYJXPWZR1zu%2BDmYU5GGd1hEwap%2FO7oRhMJjmucmsrdjzj4%2B6MjDwORhwz3W%2BBkV2fCJu11kRlRtm6mOohWIy5JdYJLFVY3DDMC%2FJUMNm%2BGWQXEA6vqCUOn6Z0QaiaZHkS72t2ffcMg3ylWgaRITBEvsJ1qJlfVsMWy%2Fsa%2FAptlDWC6m%2FCzDDuqCbtmBeqXyFgnyv%2FAS9Sy%2BMy%2FHbr0JulQHXPpPiEMUMWhjKnejkqKmo2S2LaPNy%2BBbaQXMPChx70GOqUBgHdD93zeeYHIXVENUhrv02N%2BYe9Sc0e%2FUDrqBD7GSwSr8PCZQq%2BLBiBfSIWt1%2FLyW8apx7t3FDLi41plI8X4GBDIjP8FBCVkF9EKhJeQsWNJMPHMFlkkwYvCNBFhNcH84mcTbjnfu6Ja0G%2FHUWxKihFU1%2B5XfFyeQsr%2FHhcooanSnUkawAL4mTraraB0On%2BnZw6kofvjbgtcbKLCjX0HSN4%2BD%2BZY&X-Amz-Signature=03e49501a8cb0802fdf7d4a75c3b7fff0c071cc29916d33f18ef3a8d5bd049a1&X-Amz-SignedHeaders=host&x-id=GetObject)
