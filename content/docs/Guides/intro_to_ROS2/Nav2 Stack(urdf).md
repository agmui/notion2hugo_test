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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJQLGFQM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T121028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDYNN5tAhzmL7E3qSjXbkVT8MGrCioNT4BN5hFZPlvHIQIhAND9rt%2F6jZDOTETzmyFE23ydHjdhPMk%2FUUi1gk8aODxoKv8DCHQQABoMNjM3NDIzMTgzODA1Igwc7MSfUGCz1TDwBSgq3AOuTff2vykQP2pLEjkN3gWo8MZjBoufROyeMvtDgAMAr4f0kAtobc0joTj%2Fo6%2BY3grcDVXl2DQ2PagHEDu%2FNEDu11RmMDAEaZy3NNvxh16Xk7hfDeuTjzrMUeQabVekMnOzxX%2Bpk5pjlIubd3lgZEnaTIRLArNz7vdWJSeMwGX3G5zFrsEk7m2ENosx98rE7YiDNx4Krk1N3q3MFZnuJkyzbgCIgw2Q4d9STNc4Gvi2%2FPOSEoRg21tTpEE1y%2BT4GGSghzLvBhM6itucfnGSATYM%2BPtQOZyud4wZsIs7yUZyaQBoRXfcrCstiC4ZXPCoW3EUDwWFV07n0Pz2tWxY8LA04dHSYy4aclOQEIODxMyapVMR4PMbYgmdD9zc6%2F58wBPbi3EvmTkjZKkXa4wC684GgGgE49mMEzLo0Rk4UOWoxMvjWuUUEZvIl8Gx%2BLKek07FzS3Xveba5V3T6d3eCOiGzpvj29IEncnzCCxsOTi3zD08Aod9FBv7d%2F%2BjEm2ZM3x9xqvyxmTFwvLAUVWrEu9Otv8mW9Zvg9iWUq9kjekvd47VdFwPwhsH9KBoWBG87mWAWTyUAhRjXp26xrA2ant9Ked18f5VjWSo8Dm5dhFsD2Mv%2Bv4RFOqFPEMZyTCT37W%2BBjqkAY06UFbthWFCsbEPwdGDPYLliRc43n6kXTgMgSfLYwJi%2Bc5EIj0Oo4xWqggRoZQu50xXM0RowkeePZA0fm1UHYXJA0q2jN9jVSme9HN01pTwrrCLcPDiDnj%2FOeo5795FPJPotHlQixu4aDysXHhLFvRyBNKtI29PxK4y4BwLtxjreNdOyvPdmzvNAGqbSRO2OW06ZioIMDl2%2FSLolRgBFL0cnvNz&X-Amz-Signature=b03a20eace46b5c8f70d04b51f84db7e0bad3176fbbdd38d5ef1c4a477f59777&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJQLGFQM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T121028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDYNN5tAhzmL7E3qSjXbkVT8MGrCioNT4BN5hFZPlvHIQIhAND9rt%2F6jZDOTETzmyFE23ydHjdhPMk%2FUUi1gk8aODxoKv8DCHQQABoMNjM3NDIzMTgzODA1Igwc7MSfUGCz1TDwBSgq3AOuTff2vykQP2pLEjkN3gWo8MZjBoufROyeMvtDgAMAr4f0kAtobc0joTj%2Fo6%2BY3grcDVXl2DQ2PagHEDu%2FNEDu11RmMDAEaZy3NNvxh16Xk7hfDeuTjzrMUeQabVekMnOzxX%2Bpk5pjlIubd3lgZEnaTIRLArNz7vdWJSeMwGX3G5zFrsEk7m2ENosx98rE7YiDNx4Krk1N3q3MFZnuJkyzbgCIgw2Q4d9STNc4Gvi2%2FPOSEoRg21tTpEE1y%2BT4GGSghzLvBhM6itucfnGSATYM%2BPtQOZyud4wZsIs7yUZyaQBoRXfcrCstiC4ZXPCoW3EUDwWFV07n0Pz2tWxY8LA04dHSYy4aclOQEIODxMyapVMR4PMbYgmdD9zc6%2F58wBPbi3EvmTkjZKkXa4wC684GgGgE49mMEzLo0Rk4UOWoxMvjWuUUEZvIl8Gx%2BLKek07FzS3Xveba5V3T6d3eCOiGzpvj29IEncnzCCxsOTi3zD08Aod9FBv7d%2F%2BjEm2ZM3x9xqvyxmTFwvLAUVWrEu9Otv8mW9Zvg9iWUq9kjekvd47VdFwPwhsH9KBoWBG87mWAWTyUAhRjXp26xrA2ant9Ked18f5VjWSo8Dm5dhFsD2Mv%2Bv4RFOqFPEMZyTCT37W%2BBjqkAY06UFbthWFCsbEPwdGDPYLliRc43n6kXTgMgSfLYwJi%2Bc5EIj0Oo4xWqggRoZQu50xXM0RowkeePZA0fm1UHYXJA0q2jN9jVSme9HN01pTwrrCLcPDiDnj%2FOeo5795FPJPotHlQixu4aDysXHhLFvRyBNKtI29PxK4y4BwLtxjreNdOyvPdmzvNAGqbSRO2OW06ZioIMDl2%2FSLolRgBFL0cnvNz&X-Amz-Signature=ffeb29ce820aa060da8b3e366fd6c3fd2db4812478f952177911006ad9dbda5a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJQLGFQM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T121028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDYNN5tAhzmL7E3qSjXbkVT8MGrCioNT4BN5hFZPlvHIQIhAND9rt%2F6jZDOTETzmyFE23ydHjdhPMk%2FUUi1gk8aODxoKv8DCHQQABoMNjM3NDIzMTgzODA1Igwc7MSfUGCz1TDwBSgq3AOuTff2vykQP2pLEjkN3gWo8MZjBoufROyeMvtDgAMAr4f0kAtobc0joTj%2Fo6%2BY3grcDVXl2DQ2PagHEDu%2FNEDu11RmMDAEaZy3NNvxh16Xk7hfDeuTjzrMUeQabVekMnOzxX%2Bpk5pjlIubd3lgZEnaTIRLArNz7vdWJSeMwGX3G5zFrsEk7m2ENosx98rE7YiDNx4Krk1N3q3MFZnuJkyzbgCIgw2Q4d9STNc4Gvi2%2FPOSEoRg21tTpEE1y%2BT4GGSghzLvBhM6itucfnGSATYM%2BPtQOZyud4wZsIs7yUZyaQBoRXfcrCstiC4ZXPCoW3EUDwWFV07n0Pz2tWxY8LA04dHSYy4aclOQEIODxMyapVMR4PMbYgmdD9zc6%2F58wBPbi3EvmTkjZKkXa4wC684GgGgE49mMEzLo0Rk4UOWoxMvjWuUUEZvIl8Gx%2BLKek07FzS3Xveba5V3T6d3eCOiGzpvj29IEncnzCCxsOTi3zD08Aod9FBv7d%2F%2BjEm2ZM3x9xqvyxmTFwvLAUVWrEu9Otv8mW9Zvg9iWUq9kjekvd47VdFwPwhsH9KBoWBG87mWAWTyUAhRjXp26xrA2ant9Ked18f5VjWSo8Dm5dhFsD2Mv%2Bv4RFOqFPEMZyTCT37W%2BBjqkAY06UFbthWFCsbEPwdGDPYLliRc43n6kXTgMgSfLYwJi%2Bc5EIj0Oo4xWqggRoZQu50xXM0RowkeePZA0fm1UHYXJA0q2jN9jVSme9HN01pTwrrCLcPDiDnj%2FOeo5795FPJPotHlQixu4aDysXHhLFvRyBNKtI29PxK4y4BwLtxjreNdOyvPdmzvNAGqbSRO2OW06ZioIMDl2%2FSLolRgBFL0cnvNz&X-Amz-Signature=e59130e3e1044dc759e0333afcc1aeaf29e65b693fc99641dacf1bf6992fd503&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJQLGFQM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T121028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDYNN5tAhzmL7E3qSjXbkVT8MGrCioNT4BN5hFZPlvHIQIhAND9rt%2F6jZDOTETzmyFE23ydHjdhPMk%2FUUi1gk8aODxoKv8DCHQQABoMNjM3NDIzMTgzODA1Igwc7MSfUGCz1TDwBSgq3AOuTff2vykQP2pLEjkN3gWo8MZjBoufROyeMvtDgAMAr4f0kAtobc0joTj%2Fo6%2BY3grcDVXl2DQ2PagHEDu%2FNEDu11RmMDAEaZy3NNvxh16Xk7hfDeuTjzrMUeQabVekMnOzxX%2Bpk5pjlIubd3lgZEnaTIRLArNz7vdWJSeMwGX3G5zFrsEk7m2ENosx98rE7YiDNx4Krk1N3q3MFZnuJkyzbgCIgw2Q4d9STNc4Gvi2%2FPOSEoRg21tTpEE1y%2BT4GGSghzLvBhM6itucfnGSATYM%2BPtQOZyud4wZsIs7yUZyaQBoRXfcrCstiC4ZXPCoW3EUDwWFV07n0Pz2tWxY8LA04dHSYy4aclOQEIODxMyapVMR4PMbYgmdD9zc6%2F58wBPbi3EvmTkjZKkXa4wC684GgGgE49mMEzLo0Rk4UOWoxMvjWuUUEZvIl8Gx%2BLKek07FzS3Xveba5V3T6d3eCOiGzpvj29IEncnzCCxsOTi3zD08Aod9FBv7d%2F%2BjEm2ZM3x9xqvyxmTFwvLAUVWrEu9Otv8mW9Zvg9iWUq9kjekvd47VdFwPwhsH9KBoWBG87mWAWTyUAhRjXp26xrA2ant9Ked18f5VjWSo8Dm5dhFsD2Mv%2Bv4RFOqFPEMZyTCT37W%2BBjqkAY06UFbthWFCsbEPwdGDPYLliRc43n6kXTgMgSfLYwJi%2Bc5EIj0Oo4xWqggRoZQu50xXM0RowkeePZA0fm1UHYXJA0q2jN9jVSme9HN01pTwrrCLcPDiDnj%2FOeo5795FPJPotHlQixu4aDysXHhLFvRyBNKtI29PxK4y4BwLtxjreNdOyvPdmzvNAGqbSRO2OW06ZioIMDl2%2FSLolRgBFL0cnvNz&X-Amz-Signature=c7d98b5d92a48071c70083bf5b284319e20e1f522677636c1a7c6a6603542919&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJQLGFQM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T121028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDYNN5tAhzmL7E3qSjXbkVT8MGrCioNT4BN5hFZPlvHIQIhAND9rt%2F6jZDOTETzmyFE23ydHjdhPMk%2FUUi1gk8aODxoKv8DCHQQABoMNjM3NDIzMTgzODA1Igwc7MSfUGCz1TDwBSgq3AOuTff2vykQP2pLEjkN3gWo8MZjBoufROyeMvtDgAMAr4f0kAtobc0joTj%2Fo6%2BY3grcDVXl2DQ2PagHEDu%2FNEDu11RmMDAEaZy3NNvxh16Xk7hfDeuTjzrMUeQabVekMnOzxX%2Bpk5pjlIubd3lgZEnaTIRLArNz7vdWJSeMwGX3G5zFrsEk7m2ENosx98rE7YiDNx4Krk1N3q3MFZnuJkyzbgCIgw2Q4d9STNc4Gvi2%2FPOSEoRg21tTpEE1y%2BT4GGSghzLvBhM6itucfnGSATYM%2BPtQOZyud4wZsIs7yUZyaQBoRXfcrCstiC4ZXPCoW3EUDwWFV07n0Pz2tWxY8LA04dHSYy4aclOQEIODxMyapVMR4PMbYgmdD9zc6%2F58wBPbi3EvmTkjZKkXa4wC684GgGgE49mMEzLo0Rk4UOWoxMvjWuUUEZvIl8Gx%2BLKek07FzS3Xveba5V3T6d3eCOiGzpvj29IEncnzCCxsOTi3zD08Aod9FBv7d%2F%2BjEm2ZM3x9xqvyxmTFwvLAUVWrEu9Otv8mW9Zvg9iWUq9kjekvd47VdFwPwhsH9KBoWBG87mWAWTyUAhRjXp26xrA2ant9Ked18f5VjWSo8Dm5dhFsD2Mv%2Bv4RFOqFPEMZyTCT37W%2BBjqkAY06UFbthWFCsbEPwdGDPYLliRc43n6kXTgMgSfLYwJi%2Bc5EIj0Oo4xWqggRoZQu50xXM0RowkeePZA0fm1UHYXJA0q2jN9jVSme9HN01pTwrrCLcPDiDnj%2FOeo5795FPJPotHlQixu4aDysXHhLFvRyBNKtI29PxK4y4BwLtxjreNdOyvPdmzvNAGqbSRO2OW06ZioIMDl2%2FSLolRgBFL0cnvNz&X-Amz-Signature=a95497b8f365fde84a9a50f846421d99ee773950a8d8219e03cfecd9104262f0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJQLGFQM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T121028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDYNN5tAhzmL7E3qSjXbkVT8MGrCioNT4BN5hFZPlvHIQIhAND9rt%2F6jZDOTETzmyFE23ydHjdhPMk%2FUUi1gk8aODxoKv8DCHQQABoMNjM3NDIzMTgzODA1Igwc7MSfUGCz1TDwBSgq3AOuTff2vykQP2pLEjkN3gWo8MZjBoufROyeMvtDgAMAr4f0kAtobc0joTj%2Fo6%2BY3grcDVXl2DQ2PagHEDu%2FNEDu11RmMDAEaZy3NNvxh16Xk7hfDeuTjzrMUeQabVekMnOzxX%2Bpk5pjlIubd3lgZEnaTIRLArNz7vdWJSeMwGX3G5zFrsEk7m2ENosx98rE7YiDNx4Krk1N3q3MFZnuJkyzbgCIgw2Q4d9STNc4Gvi2%2FPOSEoRg21tTpEE1y%2BT4GGSghzLvBhM6itucfnGSATYM%2BPtQOZyud4wZsIs7yUZyaQBoRXfcrCstiC4ZXPCoW3EUDwWFV07n0Pz2tWxY8LA04dHSYy4aclOQEIODxMyapVMR4PMbYgmdD9zc6%2F58wBPbi3EvmTkjZKkXa4wC684GgGgE49mMEzLo0Rk4UOWoxMvjWuUUEZvIl8Gx%2BLKek07FzS3Xveba5V3T6d3eCOiGzpvj29IEncnzCCxsOTi3zD08Aod9FBv7d%2F%2BjEm2ZM3x9xqvyxmTFwvLAUVWrEu9Otv8mW9Zvg9iWUq9kjekvd47VdFwPwhsH9KBoWBG87mWAWTyUAhRjXp26xrA2ant9Ked18f5VjWSo8Dm5dhFsD2Mv%2Bv4RFOqFPEMZyTCT37W%2BBjqkAY06UFbthWFCsbEPwdGDPYLliRc43n6kXTgMgSfLYwJi%2Bc5EIj0Oo4xWqggRoZQu50xXM0RowkeePZA0fm1UHYXJA0q2jN9jVSme9HN01pTwrrCLcPDiDnj%2FOeo5795FPJPotHlQixu4aDysXHhLFvRyBNKtI29PxK4y4BwLtxjreNdOyvPdmzvNAGqbSRO2OW06ZioIMDl2%2FSLolRgBFL0cnvNz&X-Amz-Signature=2e3c09040d17b4ba0a88dc57da90ab7e618d6bb27edb5a0fe28db0cf137484e4&X-Amz-SignedHeaders=host&x-id=GetObject)
