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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VWGDPUA%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtaVUgKQmA6A3L9OOW3L1hrcMlvjmD%2FQjr10infncsRAiEA6oofvoGtoJg9aGUKyRMjHcwtVNOZa6B83f%2BzosahMBgqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2lboBFdWjtpsMz4CrcA4E8bpHgYAX4LO62tfyTlEYo0dv6aD0U%2FkN13hKbcau7JAw%2FqzXk0ObCH9f%2FxHycbkZjEYwOHBU9psB8bH7YoNARiAEvObdsWYCv%2F0lLaAVpUmT7fPdVVCZFTM7SudxQFwmxQdk%2BTjTRotNxAiOhe5Kw%2BRHTR7cpw6cySTmFrYuL%2FFZMnaJGGcF4wyIQNwBXOeUrlcK54uguJrmzKCJGxRzczmuhXjHzcfDYRtOAXriIsO2UIhRGmrjRZ5E142ivFHsGZn6traDGJbqsFoGMEYXc%2Bif58e9pSqKpBTJanYoGmVZF7cH2XNVUX5EgTQ2bGWR%2FYp6CRlnfp9ddeT3ZvJ0CQTAxwVfpo93TdjOKwxQ0PaKzoPNzH7Vvz%2FkOPlzN87cGVeTihojiPeZy6UO08yO36Q3qKGAprQiPwjiYOeovGSD7w%2FKU231%2FMSKlkccFFq6ksFipNJ0lkqML%2FHKuknWwJL%2FrEym0Bg0%2FVkhSqD49wzfWDc9mT6olDlzEIpDl5ng2bGiFvaD8lHvgy9erXHOy11OmtQnNUyp2y4zHM2cCkHTJ3szCLnWJ2lVGH5VQF9fJJhmkOr2nQMTjjrpcGtzQPTEiHG55BOcyTMG44wTstvdVPGR0YlgZnT2oMI%2FF7MMGOqUB90ID%2FJp%2FtfFce5DKuu5G8cSUYUeG61txW3LJudlswFzOD0VirzqYKRvUSSxL8U5kNc6PUtjNc%2B0PLeKoYRxnuAtcZBd30Dw%2BsXLUJO7WCkhUY4l%2FeZYQg4EXq8ij8%2BcOvC1l8zfSublhjh2LpyH4E0RmwtAqzHI54IptCS5Z2x%2FO2%2BPfQwxqNhMAmf%2FSDExDC3NIeF%2FZQMw1wQDeFobcGAwxs%2F8g&X-Amz-Signature=3524757f4dee7176fd5e6b3a52f85f266aa2d195c2a622f2444d89d09d1aa000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VWGDPUA%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtaVUgKQmA6A3L9OOW3L1hrcMlvjmD%2FQjr10infncsRAiEA6oofvoGtoJg9aGUKyRMjHcwtVNOZa6B83f%2BzosahMBgqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2lboBFdWjtpsMz4CrcA4E8bpHgYAX4LO62tfyTlEYo0dv6aD0U%2FkN13hKbcau7JAw%2FqzXk0ObCH9f%2FxHycbkZjEYwOHBU9psB8bH7YoNARiAEvObdsWYCv%2F0lLaAVpUmT7fPdVVCZFTM7SudxQFwmxQdk%2BTjTRotNxAiOhe5Kw%2BRHTR7cpw6cySTmFrYuL%2FFZMnaJGGcF4wyIQNwBXOeUrlcK54uguJrmzKCJGxRzczmuhXjHzcfDYRtOAXriIsO2UIhRGmrjRZ5E142ivFHsGZn6traDGJbqsFoGMEYXc%2Bif58e9pSqKpBTJanYoGmVZF7cH2XNVUX5EgTQ2bGWR%2FYp6CRlnfp9ddeT3ZvJ0CQTAxwVfpo93TdjOKwxQ0PaKzoPNzH7Vvz%2FkOPlzN87cGVeTihojiPeZy6UO08yO36Q3qKGAprQiPwjiYOeovGSD7w%2FKU231%2FMSKlkccFFq6ksFipNJ0lkqML%2FHKuknWwJL%2FrEym0Bg0%2FVkhSqD49wzfWDc9mT6olDlzEIpDl5ng2bGiFvaD8lHvgy9erXHOy11OmtQnNUyp2y4zHM2cCkHTJ3szCLnWJ2lVGH5VQF9fJJhmkOr2nQMTjjrpcGtzQPTEiHG55BOcyTMG44wTstvdVPGR0YlgZnT2oMI%2FF7MMGOqUB90ID%2FJp%2FtfFce5DKuu5G8cSUYUeG61txW3LJudlswFzOD0VirzqYKRvUSSxL8U5kNc6PUtjNc%2B0PLeKoYRxnuAtcZBd30Dw%2BsXLUJO7WCkhUY4l%2FeZYQg4EXq8ij8%2BcOvC1l8zfSublhjh2LpyH4E0RmwtAqzHI54IptCS5Z2x%2FO2%2BPfQwxqNhMAmf%2FSDExDC3NIeF%2FZQMw1wQDeFobcGAwxs%2F8g&X-Amz-Signature=afd8bc11bcd119776e52ee230cf09fbea1a6f825d89c542b3714696335b37bf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VWGDPUA%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtaVUgKQmA6A3L9OOW3L1hrcMlvjmD%2FQjr10infncsRAiEA6oofvoGtoJg9aGUKyRMjHcwtVNOZa6B83f%2BzosahMBgqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2lboBFdWjtpsMz4CrcA4E8bpHgYAX4LO62tfyTlEYo0dv6aD0U%2FkN13hKbcau7JAw%2FqzXk0ObCH9f%2FxHycbkZjEYwOHBU9psB8bH7YoNARiAEvObdsWYCv%2F0lLaAVpUmT7fPdVVCZFTM7SudxQFwmxQdk%2BTjTRotNxAiOhe5Kw%2BRHTR7cpw6cySTmFrYuL%2FFZMnaJGGcF4wyIQNwBXOeUrlcK54uguJrmzKCJGxRzczmuhXjHzcfDYRtOAXriIsO2UIhRGmrjRZ5E142ivFHsGZn6traDGJbqsFoGMEYXc%2Bif58e9pSqKpBTJanYoGmVZF7cH2XNVUX5EgTQ2bGWR%2FYp6CRlnfp9ddeT3ZvJ0CQTAxwVfpo93TdjOKwxQ0PaKzoPNzH7Vvz%2FkOPlzN87cGVeTihojiPeZy6UO08yO36Q3qKGAprQiPwjiYOeovGSD7w%2FKU231%2FMSKlkccFFq6ksFipNJ0lkqML%2FHKuknWwJL%2FrEym0Bg0%2FVkhSqD49wzfWDc9mT6olDlzEIpDl5ng2bGiFvaD8lHvgy9erXHOy11OmtQnNUyp2y4zHM2cCkHTJ3szCLnWJ2lVGH5VQF9fJJhmkOr2nQMTjjrpcGtzQPTEiHG55BOcyTMG44wTstvdVPGR0YlgZnT2oMI%2FF7MMGOqUB90ID%2FJp%2FtfFce5DKuu5G8cSUYUeG61txW3LJudlswFzOD0VirzqYKRvUSSxL8U5kNc6PUtjNc%2B0PLeKoYRxnuAtcZBd30Dw%2BsXLUJO7WCkhUY4l%2FeZYQg4EXq8ij8%2BcOvC1l8zfSublhjh2LpyH4E0RmwtAqzHI54IptCS5Z2x%2FO2%2BPfQwxqNhMAmf%2FSDExDC3NIeF%2FZQMw1wQDeFobcGAwxs%2F8g&X-Amz-Signature=e323fbdb71fd1a01300034bbfbf766cd84d2fc814ff5e604c2d993080df1499c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VWGDPUA%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtaVUgKQmA6A3L9OOW3L1hrcMlvjmD%2FQjr10infncsRAiEA6oofvoGtoJg9aGUKyRMjHcwtVNOZa6B83f%2BzosahMBgqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2lboBFdWjtpsMz4CrcA4E8bpHgYAX4LO62tfyTlEYo0dv6aD0U%2FkN13hKbcau7JAw%2FqzXk0ObCH9f%2FxHycbkZjEYwOHBU9psB8bH7YoNARiAEvObdsWYCv%2F0lLaAVpUmT7fPdVVCZFTM7SudxQFwmxQdk%2BTjTRotNxAiOhe5Kw%2BRHTR7cpw6cySTmFrYuL%2FFZMnaJGGcF4wyIQNwBXOeUrlcK54uguJrmzKCJGxRzczmuhXjHzcfDYRtOAXriIsO2UIhRGmrjRZ5E142ivFHsGZn6traDGJbqsFoGMEYXc%2Bif58e9pSqKpBTJanYoGmVZF7cH2XNVUX5EgTQ2bGWR%2FYp6CRlnfp9ddeT3ZvJ0CQTAxwVfpo93TdjOKwxQ0PaKzoPNzH7Vvz%2FkOPlzN87cGVeTihojiPeZy6UO08yO36Q3qKGAprQiPwjiYOeovGSD7w%2FKU231%2FMSKlkccFFq6ksFipNJ0lkqML%2FHKuknWwJL%2FrEym0Bg0%2FVkhSqD49wzfWDc9mT6olDlzEIpDl5ng2bGiFvaD8lHvgy9erXHOy11OmtQnNUyp2y4zHM2cCkHTJ3szCLnWJ2lVGH5VQF9fJJhmkOr2nQMTjjrpcGtzQPTEiHG55BOcyTMG44wTstvdVPGR0YlgZnT2oMI%2FF7MMGOqUB90ID%2FJp%2FtfFce5DKuu5G8cSUYUeG61txW3LJudlswFzOD0VirzqYKRvUSSxL8U5kNc6PUtjNc%2B0PLeKoYRxnuAtcZBd30Dw%2BsXLUJO7WCkhUY4l%2FeZYQg4EXq8ij8%2BcOvC1l8zfSublhjh2LpyH4E0RmwtAqzHI54IptCS5Z2x%2FO2%2BPfQwxqNhMAmf%2FSDExDC3NIeF%2FZQMw1wQDeFobcGAwxs%2F8g&X-Amz-Signature=fb6b7e19a2515136418591cdaf113aa08b6bdc027a9faf2910f7dd049caf3f9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VWGDPUA%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtaVUgKQmA6A3L9OOW3L1hrcMlvjmD%2FQjr10infncsRAiEA6oofvoGtoJg9aGUKyRMjHcwtVNOZa6B83f%2BzosahMBgqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2lboBFdWjtpsMz4CrcA4E8bpHgYAX4LO62tfyTlEYo0dv6aD0U%2FkN13hKbcau7JAw%2FqzXk0ObCH9f%2FxHycbkZjEYwOHBU9psB8bH7YoNARiAEvObdsWYCv%2F0lLaAVpUmT7fPdVVCZFTM7SudxQFwmxQdk%2BTjTRotNxAiOhe5Kw%2BRHTR7cpw6cySTmFrYuL%2FFZMnaJGGcF4wyIQNwBXOeUrlcK54uguJrmzKCJGxRzczmuhXjHzcfDYRtOAXriIsO2UIhRGmrjRZ5E142ivFHsGZn6traDGJbqsFoGMEYXc%2Bif58e9pSqKpBTJanYoGmVZF7cH2XNVUX5EgTQ2bGWR%2FYp6CRlnfp9ddeT3ZvJ0CQTAxwVfpo93TdjOKwxQ0PaKzoPNzH7Vvz%2FkOPlzN87cGVeTihojiPeZy6UO08yO36Q3qKGAprQiPwjiYOeovGSD7w%2FKU231%2FMSKlkccFFq6ksFipNJ0lkqML%2FHKuknWwJL%2FrEym0Bg0%2FVkhSqD49wzfWDc9mT6olDlzEIpDl5ng2bGiFvaD8lHvgy9erXHOy11OmtQnNUyp2y4zHM2cCkHTJ3szCLnWJ2lVGH5VQF9fJJhmkOr2nQMTjjrpcGtzQPTEiHG55BOcyTMG44wTstvdVPGR0YlgZnT2oMI%2FF7MMGOqUB90ID%2FJp%2FtfFce5DKuu5G8cSUYUeG61txW3LJudlswFzOD0VirzqYKRvUSSxL8U5kNc6PUtjNc%2B0PLeKoYRxnuAtcZBd30Dw%2BsXLUJO7WCkhUY4l%2FeZYQg4EXq8ij8%2BcOvC1l8zfSublhjh2LpyH4E0RmwtAqzHI54IptCS5Z2x%2FO2%2BPfQwxqNhMAmf%2FSDExDC3NIeF%2FZQMw1wQDeFobcGAwxs%2F8g&X-Amz-Signature=5ba4ab6740c5f623ad31fc64427b3030813315b37fcc71fc868b121365a72c00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VWGDPUA%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtaVUgKQmA6A3L9OOW3L1hrcMlvjmD%2FQjr10infncsRAiEA6oofvoGtoJg9aGUKyRMjHcwtVNOZa6B83f%2BzosahMBgqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2lboBFdWjtpsMz4CrcA4E8bpHgYAX4LO62tfyTlEYo0dv6aD0U%2FkN13hKbcau7JAw%2FqzXk0ObCH9f%2FxHycbkZjEYwOHBU9psB8bH7YoNARiAEvObdsWYCv%2F0lLaAVpUmT7fPdVVCZFTM7SudxQFwmxQdk%2BTjTRotNxAiOhe5Kw%2BRHTR7cpw6cySTmFrYuL%2FFZMnaJGGcF4wyIQNwBXOeUrlcK54uguJrmzKCJGxRzczmuhXjHzcfDYRtOAXriIsO2UIhRGmrjRZ5E142ivFHsGZn6traDGJbqsFoGMEYXc%2Bif58e9pSqKpBTJanYoGmVZF7cH2XNVUX5EgTQ2bGWR%2FYp6CRlnfp9ddeT3ZvJ0CQTAxwVfpo93TdjOKwxQ0PaKzoPNzH7Vvz%2FkOPlzN87cGVeTihojiPeZy6UO08yO36Q3qKGAprQiPwjiYOeovGSD7w%2FKU231%2FMSKlkccFFq6ksFipNJ0lkqML%2FHKuknWwJL%2FrEym0Bg0%2FVkhSqD49wzfWDc9mT6olDlzEIpDl5ng2bGiFvaD8lHvgy9erXHOy11OmtQnNUyp2y4zHM2cCkHTJ3szCLnWJ2lVGH5VQF9fJJhmkOr2nQMTjjrpcGtzQPTEiHG55BOcyTMG44wTstvdVPGR0YlgZnT2oMI%2FF7MMGOqUB90ID%2FJp%2FtfFce5DKuu5G8cSUYUeG61txW3LJudlswFzOD0VirzqYKRvUSSxL8U5kNc6PUtjNc%2B0PLeKoYRxnuAtcZBd30Dw%2BsXLUJO7WCkhUY4l%2FeZYQg4EXq8ij8%2BcOvC1l8zfSublhjh2LpyH4E0RmwtAqzHI54IptCS5Z2x%2FO2%2BPfQwxqNhMAmf%2FSDExDC3NIeF%2FZQMw1wQDeFobcGAwxs%2F8g&X-Amz-Signature=70781030a704b425328067e1f4603a98a3621fee5b6c9bac9eb59ad3aef5f455&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
