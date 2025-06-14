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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SWLJQ6Q%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCwNbksUWwly2r8RO1KjL44rvvkh0UUTj%2Bi3xg1fPVRHwIgJNbeyjwSRfwtyk%2FOKR5%2BGdJSug9FisS9pi2ycdSJPVwq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDK59m5ROsxLKUPrGPSrcAzMPOm6STs6fVyQRt5PL5atbag23dN6IEaMjk%2BC01uBjrGQA5CvxZyTyTNw1hZOo%2FjIUiKuOTAU7C3MLsmsJBRVOOUDi4kNFfyqJxtTaZKsz9970aDrNj9KpsPV0jc%2FJdlIiFr8W9zNkeZBLXvXM3zJC9mWfIlnJTVakabyNDniamMViX8vWrI46B9VTj0NtN74n6HdNMD%2FIPkkwQpSNrxiTay4isVH9xpK537We%2Bur%2BwwjZuLz%2BwpAeHjU%2F2GYL17kWl0FPJctFhd6uTRTRpG3iX%2Bj%2FCBVX2oH9CO9aKfRu2AzdjUCxzPyOivakYajKZUSI31IoAEn1p5kQTObd6g7QCaJO3uRHEkFi%2FeotU1rEomcFY8Ra24D1bgaV3TEEXz9qmpFbVqblm7fEI1Mz3QnyA5DQEEVCRHu322fAzmlj%2Fve%2B2CJ%2FgmV%2BRxOr2onXuyXhjXFN7y%2FD9HFTloZtvx7%2FSdSXo9fEqLprvvlKx6EjUCIYw%2Fo6nheWDQhslCzv8O%2BsGKTfji1l%2BcXpJoA%2FZiAOVbitqH%2FqFPN%2FS6l7OBJo5o4xBEBp6oqB%2FMSRsAnb7eOesVhUPJeocFA%2BJGCS3uOaZOHhZUt%2FBLn9FrVyG9O7cU%2Bv%2Bfyetc2RmYoQMI28tMIGOqUBSK7eJ2xHHPjJ%2BgZoraiqGAOLvdz7mgxocgEW%2BG6DzsV407%2BaR79xjlxnub7PzLyLvs8G4gVnQGh%2FxHzch%2FeqNTdT8muCjYVDwlcSUZkzEqAjHYtsshmA50%2F%2FUa2MfZBj0tFJN6ccPu8r762o3FEztQzR4jTbJpWPYi5uLkt%2BKXxc1K9TnJMLHgw%2BU4LPyRXZ8F6lJFrnrBvLITjl8imXTgPIRHeR&X-Amz-Signature=4d91266fca37d86d1e81d1268aacdaff6e73c104876d2a0a35b84baa814e8237&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SWLJQ6Q%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCwNbksUWwly2r8RO1KjL44rvvkh0UUTj%2Bi3xg1fPVRHwIgJNbeyjwSRfwtyk%2FOKR5%2BGdJSug9FisS9pi2ycdSJPVwq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDK59m5ROsxLKUPrGPSrcAzMPOm6STs6fVyQRt5PL5atbag23dN6IEaMjk%2BC01uBjrGQA5CvxZyTyTNw1hZOo%2FjIUiKuOTAU7C3MLsmsJBRVOOUDi4kNFfyqJxtTaZKsz9970aDrNj9KpsPV0jc%2FJdlIiFr8W9zNkeZBLXvXM3zJC9mWfIlnJTVakabyNDniamMViX8vWrI46B9VTj0NtN74n6HdNMD%2FIPkkwQpSNrxiTay4isVH9xpK537We%2Bur%2BwwjZuLz%2BwpAeHjU%2F2GYL17kWl0FPJctFhd6uTRTRpG3iX%2Bj%2FCBVX2oH9CO9aKfRu2AzdjUCxzPyOivakYajKZUSI31IoAEn1p5kQTObd6g7QCaJO3uRHEkFi%2FeotU1rEomcFY8Ra24D1bgaV3TEEXz9qmpFbVqblm7fEI1Mz3QnyA5DQEEVCRHu322fAzmlj%2Fve%2B2CJ%2FgmV%2BRxOr2onXuyXhjXFN7y%2FD9HFTloZtvx7%2FSdSXo9fEqLprvvlKx6EjUCIYw%2Fo6nheWDQhslCzv8O%2BsGKTfji1l%2BcXpJoA%2FZiAOVbitqH%2FqFPN%2FS6l7OBJo5o4xBEBp6oqB%2FMSRsAnb7eOesVhUPJeocFA%2BJGCS3uOaZOHhZUt%2FBLn9FrVyG9O7cU%2Bv%2Bfyetc2RmYoQMI28tMIGOqUBSK7eJ2xHHPjJ%2BgZoraiqGAOLvdz7mgxocgEW%2BG6DzsV407%2BaR79xjlxnub7PzLyLvs8G4gVnQGh%2FxHzch%2FeqNTdT8muCjYVDwlcSUZkzEqAjHYtsshmA50%2F%2FUa2MfZBj0tFJN6ccPu8r762o3FEztQzR4jTbJpWPYi5uLkt%2BKXxc1K9TnJMLHgw%2BU4LPyRXZ8F6lJFrnrBvLITjl8imXTgPIRHeR&X-Amz-Signature=e23c89d0d0ee300932fc4300f10fbe54e2ed197fa23bd73bd512b897fd25dacf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SWLJQ6Q%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCwNbksUWwly2r8RO1KjL44rvvkh0UUTj%2Bi3xg1fPVRHwIgJNbeyjwSRfwtyk%2FOKR5%2BGdJSug9FisS9pi2ycdSJPVwq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDK59m5ROsxLKUPrGPSrcAzMPOm6STs6fVyQRt5PL5atbag23dN6IEaMjk%2BC01uBjrGQA5CvxZyTyTNw1hZOo%2FjIUiKuOTAU7C3MLsmsJBRVOOUDi4kNFfyqJxtTaZKsz9970aDrNj9KpsPV0jc%2FJdlIiFr8W9zNkeZBLXvXM3zJC9mWfIlnJTVakabyNDniamMViX8vWrI46B9VTj0NtN74n6HdNMD%2FIPkkwQpSNrxiTay4isVH9xpK537We%2Bur%2BwwjZuLz%2BwpAeHjU%2F2GYL17kWl0FPJctFhd6uTRTRpG3iX%2Bj%2FCBVX2oH9CO9aKfRu2AzdjUCxzPyOivakYajKZUSI31IoAEn1p5kQTObd6g7QCaJO3uRHEkFi%2FeotU1rEomcFY8Ra24D1bgaV3TEEXz9qmpFbVqblm7fEI1Mz3QnyA5DQEEVCRHu322fAzmlj%2Fve%2B2CJ%2FgmV%2BRxOr2onXuyXhjXFN7y%2FD9HFTloZtvx7%2FSdSXo9fEqLprvvlKx6EjUCIYw%2Fo6nheWDQhslCzv8O%2BsGKTfji1l%2BcXpJoA%2FZiAOVbitqH%2FqFPN%2FS6l7OBJo5o4xBEBp6oqB%2FMSRsAnb7eOesVhUPJeocFA%2BJGCS3uOaZOHhZUt%2FBLn9FrVyG9O7cU%2Bv%2Bfyetc2RmYoQMI28tMIGOqUBSK7eJ2xHHPjJ%2BgZoraiqGAOLvdz7mgxocgEW%2BG6DzsV407%2BaR79xjlxnub7PzLyLvs8G4gVnQGh%2FxHzch%2FeqNTdT8muCjYVDwlcSUZkzEqAjHYtsshmA50%2F%2FUa2MfZBj0tFJN6ccPu8r762o3FEztQzR4jTbJpWPYi5uLkt%2BKXxc1K9TnJMLHgw%2BU4LPyRXZ8F6lJFrnrBvLITjl8imXTgPIRHeR&X-Amz-Signature=112e5128baa0eb5e720abf36cdb6545c235e44aed5ff3bb259a55561bf9e6684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SWLJQ6Q%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCwNbksUWwly2r8RO1KjL44rvvkh0UUTj%2Bi3xg1fPVRHwIgJNbeyjwSRfwtyk%2FOKR5%2BGdJSug9FisS9pi2ycdSJPVwq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDK59m5ROsxLKUPrGPSrcAzMPOm6STs6fVyQRt5PL5atbag23dN6IEaMjk%2BC01uBjrGQA5CvxZyTyTNw1hZOo%2FjIUiKuOTAU7C3MLsmsJBRVOOUDi4kNFfyqJxtTaZKsz9970aDrNj9KpsPV0jc%2FJdlIiFr8W9zNkeZBLXvXM3zJC9mWfIlnJTVakabyNDniamMViX8vWrI46B9VTj0NtN74n6HdNMD%2FIPkkwQpSNrxiTay4isVH9xpK537We%2Bur%2BwwjZuLz%2BwpAeHjU%2F2GYL17kWl0FPJctFhd6uTRTRpG3iX%2Bj%2FCBVX2oH9CO9aKfRu2AzdjUCxzPyOivakYajKZUSI31IoAEn1p5kQTObd6g7QCaJO3uRHEkFi%2FeotU1rEomcFY8Ra24D1bgaV3TEEXz9qmpFbVqblm7fEI1Mz3QnyA5DQEEVCRHu322fAzmlj%2Fve%2B2CJ%2FgmV%2BRxOr2onXuyXhjXFN7y%2FD9HFTloZtvx7%2FSdSXo9fEqLprvvlKx6EjUCIYw%2Fo6nheWDQhslCzv8O%2BsGKTfji1l%2BcXpJoA%2FZiAOVbitqH%2FqFPN%2FS6l7OBJo5o4xBEBp6oqB%2FMSRsAnb7eOesVhUPJeocFA%2BJGCS3uOaZOHhZUt%2FBLn9FrVyG9O7cU%2Bv%2Bfyetc2RmYoQMI28tMIGOqUBSK7eJ2xHHPjJ%2BgZoraiqGAOLvdz7mgxocgEW%2BG6DzsV407%2BaR79xjlxnub7PzLyLvs8G4gVnQGh%2FxHzch%2FeqNTdT8muCjYVDwlcSUZkzEqAjHYtsshmA50%2F%2FUa2MfZBj0tFJN6ccPu8r762o3FEztQzR4jTbJpWPYi5uLkt%2BKXxc1K9TnJMLHgw%2BU4LPyRXZ8F6lJFrnrBvLITjl8imXTgPIRHeR&X-Amz-Signature=3f202456f9379a69f71c83af019e719a1e7d8d4c01a4e454d7d688bbcde9eedd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SWLJQ6Q%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCwNbksUWwly2r8RO1KjL44rvvkh0UUTj%2Bi3xg1fPVRHwIgJNbeyjwSRfwtyk%2FOKR5%2BGdJSug9FisS9pi2ycdSJPVwq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDK59m5ROsxLKUPrGPSrcAzMPOm6STs6fVyQRt5PL5atbag23dN6IEaMjk%2BC01uBjrGQA5CvxZyTyTNw1hZOo%2FjIUiKuOTAU7C3MLsmsJBRVOOUDi4kNFfyqJxtTaZKsz9970aDrNj9KpsPV0jc%2FJdlIiFr8W9zNkeZBLXvXM3zJC9mWfIlnJTVakabyNDniamMViX8vWrI46B9VTj0NtN74n6HdNMD%2FIPkkwQpSNrxiTay4isVH9xpK537We%2Bur%2BwwjZuLz%2BwpAeHjU%2F2GYL17kWl0FPJctFhd6uTRTRpG3iX%2Bj%2FCBVX2oH9CO9aKfRu2AzdjUCxzPyOivakYajKZUSI31IoAEn1p5kQTObd6g7QCaJO3uRHEkFi%2FeotU1rEomcFY8Ra24D1bgaV3TEEXz9qmpFbVqblm7fEI1Mz3QnyA5DQEEVCRHu322fAzmlj%2Fve%2B2CJ%2FgmV%2BRxOr2onXuyXhjXFN7y%2FD9HFTloZtvx7%2FSdSXo9fEqLprvvlKx6EjUCIYw%2Fo6nheWDQhslCzv8O%2BsGKTfji1l%2BcXpJoA%2FZiAOVbitqH%2FqFPN%2FS6l7OBJo5o4xBEBp6oqB%2FMSRsAnb7eOesVhUPJeocFA%2BJGCS3uOaZOHhZUt%2FBLn9FrVyG9O7cU%2Bv%2Bfyetc2RmYoQMI28tMIGOqUBSK7eJ2xHHPjJ%2BgZoraiqGAOLvdz7mgxocgEW%2BG6DzsV407%2BaR79xjlxnub7PzLyLvs8G4gVnQGh%2FxHzch%2FeqNTdT8muCjYVDwlcSUZkzEqAjHYtsshmA50%2F%2FUa2MfZBj0tFJN6ccPu8r762o3FEztQzR4jTbJpWPYi5uLkt%2BKXxc1K9TnJMLHgw%2BU4LPyRXZ8F6lJFrnrBvLITjl8imXTgPIRHeR&X-Amz-Signature=9c5753a137ace907a887f95b246aee1f82ee1ce92c6bed16c89f55224864410f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SWLJQ6Q%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCwNbksUWwly2r8RO1KjL44rvvkh0UUTj%2Bi3xg1fPVRHwIgJNbeyjwSRfwtyk%2FOKR5%2BGdJSug9FisS9pi2ycdSJPVwq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDK59m5ROsxLKUPrGPSrcAzMPOm6STs6fVyQRt5PL5atbag23dN6IEaMjk%2BC01uBjrGQA5CvxZyTyTNw1hZOo%2FjIUiKuOTAU7C3MLsmsJBRVOOUDi4kNFfyqJxtTaZKsz9970aDrNj9KpsPV0jc%2FJdlIiFr8W9zNkeZBLXvXM3zJC9mWfIlnJTVakabyNDniamMViX8vWrI46B9VTj0NtN74n6HdNMD%2FIPkkwQpSNrxiTay4isVH9xpK537We%2Bur%2BwwjZuLz%2BwpAeHjU%2F2GYL17kWl0FPJctFhd6uTRTRpG3iX%2Bj%2FCBVX2oH9CO9aKfRu2AzdjUCxzPyOivakYajKZUSI31IoAEn1p5kQTObd6g7QCaJO3uRHEkFi%2FeotU1rEomcFY8Ra24D1bgaV3TEEXz9qmpFbVqblm7fEI1Mz3QnyA5DQEEVCRHu322fAzmlj%2Fve%2B2CJ%2FgmV%2BRxOr2onXuyXhjXFN7y%2FD9HFTloZtvx7%2FSdSXo9fEqLprvvlKx6EjUCIYw%2Fo6nheWDQhslCzv8O%2BsGKTfji1l%2BcXpJoA%2FZiAOVbitqH%2FqFPN%2FS6l7OBJo5o4xBEBp6oqB%2FMSRsAnb7eOesVhUPJeocFA%2BJGCS3uOaZOHhZUt%2FBLn9FrVyG9O7cU%2Bv%2Bfyetc2RmYoQMI28tMIGOqUBSK7eJ2xHHPjJ%2BgZoraiqGAOLvdz7mgxocgEW%2BG6DzsV407%2BaR79xjlxnub7PzLyLvs8G4gVnQGh%2FxHzch%2FeqNTdT8muCjYVDwlcSUZkzEqAjHYtsshmA50%2F%2FUa2MfZBj0tFJN6ccPu8r762o3FEztQzR4jTbJpWPYi5uLkt%2BKXxc1K9TnJMLHgw%2BU4LPyRXZ8F6lJFrnrBvLITjl8imXTgPIRHeR&X-Amz-Signature=27b79c5dad5baffafac12915c6c5bc6b6564cdbb03417fb6714946d85d07d9ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
