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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULWTDXBV%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb65ftL2EkWBXpPm6R2FsW8K9WcO8qCa1K%2F9CKgCFmkgIhAIRBGuUGfEcvuJbqif6W5%2F9NcHDVsQRaEiLjJZ8oGsH%2FKv8DCBYQABoMNjM3NDIzMTgzODA1IgzSEY5LzleEo%2FfotMEq3AMGoSQpVCCkoeVLI4aMGLFs6FDTzUTGgHI1X2lKRwdbqK%2FYDZlKRtB5g%2B1SlgPaBPS%2BXoCWefhNB1XkszaUr9NWYGOfytSPFxK0LRh%2F12N8Vjf5eOXQqgvJMRjXJa%2BSxgGnIKa7u3CkkvdWFCdPYk8xm5HNbrgp5jnrf6dYbqaWIWPCUZBAV6OQl1UltNggjaiYhBG2iywEyTAFnB%2FfMhJOlvDVoljHGd%2BTB9mc6jL4dNy%2FsHh7YOmirDqtUXA5lVY5UYY5ctK9R8ombmyIeXzHHa0b8xJGC2LYxkCPYnl%2B2%2FNl03zlw6as%2F6HUfy%2BEL62RmXEVcUoEY3uu4NI8%2B6x56DlwqYZpxARppYFBYZz8DVZML2K62nxax1RDxZspDlFXzT%2Fg4gEfyQBbhuQyRD8YO936s2tU3hRYbj16UoxCt2PmWk4pwrVst%2Fti8YFxZM41ufcxXMEJdwcTd7kEg7N8%2Bd%2BvhQY5HlbJu1JBwAAnnOLRXMl2JCFzPzl7Sfqry8C5Vwcu%2F%2FPWtRVv0tI%2FXnpv7kRkgVkaTBqt1VR3UzCXlKKAdiHYnhLNYxgXenLTpwNCXCmm6fGLCuf0FnFDdpTDWW%2BvffC7zvoegxgiJ%2FnkvjKL6p%2FXU%2Bwj1Ro1SDCfjvS%2FBjqkAfFrJqiNbigpVaEY5Qt1Q8jS4OOhLcfuWSyREv2PM7FiGJfy67al7K7VoOHlmBrXS%2B2VC2tWn4wHpsZ19Ie%2F8YNyA8DVxSQxqlf6eLdDeMl2AGLYfect0ECOeORppL9%2FPqqh0F%2BzBeYZj7N7eso4pGDBZBC6oVXKCIXPyxcDT%2BhZzOAM0%2FBg450uIXnhnap%2FGBdrjCeyKABKsEiYdUR9hciuHslU&X-Amz-Signature=484af0091dd7b4de85048ec1a09f912aea8edcdac9d0d3fac41f34b1f37faeda&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULWTDXBV%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb65ftL2EkWBXpPm6R2FsW8K9WcO8qCa1K%2F9CKgCFmkgIhAIRBGuUGfEcvuJbqif6W5%2F9NcHDVsQRaEiLjJZ8oGsH%2FKv8DCBYQABoMNjM3NDIzMTgzODA1IgzSEY5LzleEo%2FfotMEq3AMGoSQpVCCkoeVLI4aMGLFs6FDTzUTGgHI1X2lKRwdbqK%2FYDZlKRtB5g%2B1SlgPaBPS%2BXoCWefhNB1XkszaUr9NWYGOfytSPFxK0LRh%2F12N8Vjf5eOXQqgvJMRjXJa%2BSxgGnIKa7u3CkkvdWFCdPYk8xm5HNbrgp5jnrf6dYbqaWIWPCUZBAV6OQl1UltNggjaiYhBG2iywEyTAFnB%2FfMhJOlvDVoljHGd%2BTB9mc6jL4dNy%2FsHh7YOmirDqtUXA5lVY5UYY5ctK9R8ombmyIeXzHHa0b8xJGC2LYxkCPYnl%2B2%2FNl03zlw6as%2F6HUfy%2BEL62RmXEVcUoEY3uu4NI8%2B6x56DlwqYZpxARppYFBYZz8DVZML2K62nxax1RDxZspDlFXzT%2Fg4gEfyQBbhuQyRD8YO936s2tU3hRYbj16UoxCt2PmWk4pwrVst%2Fti8YFxZM41ufcxXMEJdwcTd7kEg7N8%2Bd%2BvhQY5HlbJu1JBwAAnnOLRXMl2JCFzPzl7Sfqry8C5Vwcu%2F%2FPWtRVv0tI%2FXnpv7kRkgVkaTBqt1VR3UzCXlKKAdiHYnhLNYxgXenLTpwNCXCmm6fGLCuf0FnFDdpTDWW%2BvffC7zvoegxgiJ%2FnkvjKL6p%2FXU%2Bwj1Ro1SDCfjvS%2FBjqkAfFrJqiNbigpVaEY5Qt1Q8jS4OOhLcfuWSyREv2PM7FiGJfy67al7K7VoOHlmBrXS%2B2VC2tWn4wHpsZ19Ie%2F8YNyA8DVxSQxqlf6eLdDeMl2AGLYfect0ECOeORppL9%2FPqqh0F%2BzBeYZj7N7eso4pGDBZBC6oVXKCIXPyxcDT%2BhZzOAM0%2FBg450uIXnhnap%2FGBdrjCeyKABKsEiYdUR9hciuHslU&X-Amz-Signature=ce5437156888c1ddeca3d7d14b7bfe7da74c285e07d2c509361a5dcef6e8d661&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULWTDXBV%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb65ftL2EkWBXpPm6R2FsW8K9WcO8qCa1K%2F9CKgCFmkgIhAIRBGuUGfEcvuJbqif6W5%2F9NcHDVsQRaEiLjJZ8oGsH%2FKv8DCBYQABoMNjM3NDIzMTgzODA1IgzSEY5LzleEo%2FfotMEq3AMGoSQpVCCkoeVLI4aMGLFs6FDTzUTGgHI1X2lKRwdbqK%2FYDZlKRtB5g%2B1SlgPaBPS%2BXoCWefhNB1XkszaUr9NWYGOfytSPFxK0LRh%2F12N8Vjf5eOXQqgvJMRjXJa%2BSxgGnIKa7u3CkkvdWFCdPYk8xm5HNbrgp5jnrf6dYbqaWIWPCUZBAV6OQl1UltNggjaiYhBG2iywEyTAFnB%2FfMhJOlvDVoljHGd%2BTB9mc6jL4dNy%2FsHh7YOmirDqtUXA5lVY5UYY5ctK9R8ombmyIeXzHHa0b8xJGC2LYxkCPYnl%2B2%2FNl03zlw6as%2F6HUfy%2BEL62RmXEVcUoEY3uu4NI8%2B6x56DlwqYZpxARppYFBYZz8DVZML2K62nxax1RDxZspDlFXzT%2Fg4gEfyQBbhuQyRD8YO936s2tU3hRYbj16UoxCt2PmWk4pwrVst%2Fti8YFxZM41ufcxXMEJdwcTd7kEg7N8%2Bd%2BvhQY5HlbJu1JBwAAnnOLRXMl2JCFzPzl7Sfqry8C5Vwcu%2F%2FPWtRVv0tI%2FXnpv7kRkgVkaTBqt1VR3UzCXlKKAdiHYnhLNYxgXenLTpwNCXCmm6fGLCuf0FnFDdpTDWW%2BvffC7zvoegxgiJ%2FnkvjKL6p%2FXU%2Bwj1Ro1SDCfjvS%2FBjqkAfFrJqiNbigpVaEY5Qt1Q8jS4OOhLcfuWSyREv2PM7FiGJfy67al7K7VoOHlmBrXS%2B2VC2tWn4wHpsZ19Ie%2F8YNyA8DVxSQxqlf6eLdDeMl2AGLYfect0ECOeORppL9%2FPqqh0F%2BzBeYZj7N7eso4pGDBZBC6oVXKCIXPyxcDT%2BhZzOAM0%2FBg450uIXnhnap%2FGBdrjCeyKABKsEiYdUR9hciuHslU&X-Amz-Signature=54eacfc953321bc2b1b578ce8a71d4d7c1fa06630811c04d29e88f9819eb049e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULWTDXBV%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb65ftL2EkWBXpPm6R2FsW8K9WcO8qCa1K%2F9CKgCFmkgIhAIRBGuUGfEcvuJbqif6W5%2F9NcHDVsQRaEiLjJZ8oGsH%2FKv8DCBYQABoMNjM3NDIzMTgzODA1IgzSEY5LzleEo%2FfotMEq3AMGoSQpVCCkoeVLI4aMGLFs6FDTzUTGgHI1X2lKRwdbqK%2FYDZlKRtB5g%2B1SlgPaBPS%2BXoCWefhNB1XkszaUr9NWYGOfytSPFxK0LRh%2F12N8Vjf5eOXQqgvJMRjXJa%2BSxgGnIKa7u3CkkvdWFCdPYk8xm5HNbrgp5jnrf6dYbqaWIWPCUZBAV6OQl1UltNggjaiYhBG2iywEyTAFnB%2FfMhJOlvDVoljHGd%2BTB9mc6jL4dNy%2FsHh7YOmirDqtUXA5lVY5UYY5ctK9R8ombmyIeXzHHa0b8xJGC2LYxkCPYnl%2B2%2FNl03zlw6as%2F6HUfy%2BEL62RmXEVcUoEY3uu4NI8%2B6x56DlwqYZpxARppYFBYZz8DVZML2K62nxax1RDxZspDlFXzT%2Fg4gEfyQBbhuQyRD8YO936s2tU3hRYbj16UoxCt2PmWk4pwrVst%2Fti8YFxZM41ufcxXMEJdwcTd7kEg7N8%2Bd%2BvhQY5HlbJu1JBwAAnnOLRXMl2JCFzPzl7Sfqry8C5Vwcu%2F%2FPWtRVv0tI%2FXnpv7kRkgVkaTBqt1VR3UzCXlKKAdiHYnhLNYxgXenLTpwNCXCmm6fGLCuf0FnFDdpTDWW%2BvffC7zvoegxgiJ%2FnkvjKL6p%2FXU%2Bwj1Ro1SDCfjvS%2FBjqkAfFrJqiNbigpVaEY5Qt1Q8jS4OOhLcfuWSyREv2PM7FiGJfy67al7K7VoOHlmBrXS%2B2VC2tWn4wHpsZ19Ie%2F8YNyA8DVxSQxqlf6eLdDeMl2AGLYfect0ECOeORppL9%2FPqqh0F%2BzBeYZj7N7eso4pGDBZBC6oVXKCIXPyxcDT%2BhZzOAM0%2FBg450uIXnhnap%2FGBdrjCeyKABKsEiYdUR9hciuHslU&X-Amz-Signature=1703f213da36dde47e067a6bf82e5fa828cbd20c61ba6a95796ed25e49aaf79c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULWTDXBV%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb65ftL2EkWBXpPm6R2FsW8K9WcO8qCa1K%2F9CKgCFmkgIhAIRBGuUGfEcvuJbqif6W5%2F9NcHDVsQRaEiLjJZ8oGsH%2FKv8DCBYQABoMNjM3NDIzMTgzODA1IgzSEY5LzleEo%2FfotMEq3AMGoSQpVCCkoeVLI4aMGLFs6FDTzUTGgHI1X2lKRwdbqK%2FYDZlKRtB5g%2B1SlgPaBPS%2BXoCWefhNB1XkszaUr9NWYGOfytSPFxK0LRh%2F12N8Vjf5eOXQqgvJMRjXJa%2BSxgGnIKa7u3CkkvdWFCdPYk8xm5HNbrgp5jnrf6dYbqaWIWPCUZBAV6OQl1UltNggjaiYhBG2iywEyTAFnB%2FfMhJOlvDVoljHGd%2BTB9mc6jL4dNy%2FsHh7YOmirDqtUXA5lVY5UYY5ctK9R8ombmyIeXzHHa0b8xJGC2LYxkCPYnl%2B2%2FNl03zlw6as%2F6HUfy%2BEL62RmXEVcUoEY3uu4NI8%2B6x56DlwqYZpxARppYFBYZz8DVZML2K62nxax1RDxZspDlFXzT%2Fg4gEfyQBbhuQyRD8YO936s2tU3hRYbj16UoxCt2PmWk4pwrVst%2Fti8YFxZM41ufcxXMEJdwcTd7kEg7N8%2Bd%2BvhQY5HlbJu1JBwAAnnOLRXMl2JCFzPzl7Sfqry8C5Vwcu%2F%2FPWtRVv0tI%2FXnpv7kRkgVkaTBqt1VR3UzCXlKKAdiHYnhLNYxgXenLTpwNCXCmm6fGLCuf0FnFDdpTDWW%2BvffC7zvoegxgiJ%2FnkvjKL6p%2FXU%2Bwj1Ro1SDCfjvS%2FBjqkAfFrJqiNbigpVaEY5Qt1Q8jS4OOhLcfuWSyREv2PM7FiGJfy67al7K7VoOHlmBrXS%2B2VC2tWn4wHpsZ19Ie%2F8YNyA8DVxSQxqlf6eLdDeMl2AGLYfect0ECOeORppL9%2FPqqh0F%2BzBeYZj7N7eso4pGDBZBC6oVXKCIXPyxcDT%2BhZzOAM0%2FBg450uIXnhnap%2FGBdrjCeyKABKsEiYdUR9hciuHslU&X-Amz-Signature=b7e60ece30f6eda37f0d4cc07b5e0980c614c8edbdbb1ef91646da7bdb18a1fc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULWTDXBV%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb65ftL2EkWBXpPm6R2FsW8K9WcO8qCa1K%2F9CKgCFmkgIhAIRBGuUGfEcvuJbqif6W5%2F9NcHDVsQRaEiLjJZ8oGsH%2FKv8DCBYQABoMNjM3NDIzMTgzODA1IgzSEY5LzleEo%2FfotMEq3AMGoSQpVCCkoeVLI4aMGLFs6FDTzUTGgHI1X2lKRwdbqK%2FYDZlKRtB5g%2B1SlgPaBPS%2BXoCWefhNB1XkszaUr9NWYGOfytSPFxK0LRh%2F12N8Vjf5eOXQqgvJMRjXJa%2BSxgGnIKa7u3CkkvdWFCdPYk8xm5HNbrgp5jnrf6dYbqaWIWPCUZBAV6OQl1UltNggjaiYhBG2iywEyTAFnB%2FfMhJOlvDVoljHGd%2BTB9mc6jL4dNy%2FsHh7YOmirDqtUXA5lVY5UYY5ctK9R8ombmyIeXzHHa0b8xJGC2LYxkCPYnl%2B2%2FNl03zlw6as%2F6HUfy%2BEL62RmXEVcUoEY3uu4NI8%2B6x56DlwqYZpxARppYFBYZz8DVZML2K62nxax1RDxZspDlFXzT%2Fg4gEfyQBbhuQyRD8YO936s2tU3hRYbj16UoxCt2PmWk4pwrVst%2Fti8YFxZM41ufcxXMEJdwcTd7kEg7N8%2Bd%2BvhQY5HlbJu1JBwAAnnOLRXMl2JCFzPzl7Sfqry8C5Vwcu%2F%2FPWtRVv0tI%2FXnpv7kRkgVkaTBqt1VR3UzCXlKKAdiHYnhLNYxgXenLTpwNCXCmm6fGLCuf0FnFDdpTDWW%2BvffC7zvoegxgiJ%2FnkvjKL6p%2FXU%2Bwj1Ro1SDCfjvS%2FBjqkAfFrJqiNbigpVaEY5Qt1Q8jS4OOhLcfuWSyREv2PM7FiGJfy67al7K7VoOHlmBrXS%2B2VC2tWn4wHpsZ19Ie%2F8YNyA8DVxSQxqlf6eLdDeMl2AGLYfect0ECOeORppL9%2FPqqh0F%2BzBeYZj7N7eso4pGDBZBC6oVXKCIXPyxcDT%2BhZzOAM0%2FBg450uIXnhnap%2FGBdrjCeyKABKsEiYdUR9hciuHslU&X-Amz-Signature=8d6a24bd3fa8d0a7478215dac2887b6d19696153d21360bdb8265f6c878afcac&X-Amz-SignedHeaders=host&x-id=GetObject)
