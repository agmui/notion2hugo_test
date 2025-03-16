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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTCRM3WE%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCws3PkJ2gl9QTiOmrsSDrscJlkGsp7dJ8h4pnj4XC0dQIgGdREiYrJNukKENxP5hbMprwdlhFw9GCeFo%2Bo9R4ZbCcq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDcwP2oJ7h5Uy62taircA0FfB8XMkNtbmm2R5oCYLeVDdtgiwMtCfv12bw9tKXXip%2FmmPZDRZaok%2BBAIJvft7SKWyrT065Z0Zg%2FtCMrqn8LJOuMNufU6%2FPmxYOTuOTD35vSkb8q7RfOfXftN13BvPaWsAvtN%2BOlJ2XZqMqEmawQk4hdx0O%2BBgfwNsZAVYsDdBEIZURj55fx3m%2Fk59c5eu5wC2k0SoUHFQgLsKp4gx5CJTm4B%2F%2BDHHrxoYDP0dHQWvNDx9iWZCu7%2FYkrijTaTeFmhQlA4dlmlNnTF20fiEvyACU6%2FdUj8%2F9I4JWnzrXXuDFM00X95Qnf6Ay4LhSncAjWg2VJVL67dveOugv2Vf7AXJia5c4ZLpfKRbwoE0KMOkBglRdSpJ%2B74QlIXiqZLUyYSgBuaVpMDjknmZzuhv9LCuqsdHNGKGsZu8x8ra3x0Uy%2BJswQHNQRJwc%2BvZziBKuAOOjeLc4%2FAUGf5q75%2BsXU9hpGxnFpEYEGb94zAQustFc2of8K%2BmyA4Kc2YGwSR%2FJXSvf6n%2FELMcF%2BzXjb5lSNBwGLdIfZLDyr7cbd5GjIASuY%2BqUxBmeNDmLA5Vbh3shMcGmNF0SE%2BfuZnEIX2RADRg5%2FGcIauvb%2F7oVBa0I3o23AkGJTpc1RdvAugMLSB2L4GOqUBEIWDWIsJ6KYE5e7ggcS0PxIWopNdieKzZ009w5C3C6ySV%2BfpFMetyb4oYBYtCx6enL3G4VHz1Va7fcUk8dwrygDeUzT9YKtLMYO6d18iBJTaoOeqQTdIvNjGofAPmome6eIgxut3SXhR6CTbSp0bDzlY9mGtKE8fkt5ngMlVtraMBzT5egsFEFD51twDhON9MZq1G%2FCRgGQgOyh%2BPp2LKpdHNSh%2F&X-Amz-Signature=4d74c03d3b9ae321a1bf642019d904aa0312706d3aa317c03e99415f5f8bce32&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTCRM3WE%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCws3PkJ2gl9QTiOmrsSDrscJlkGsp7dJ8h4pnj4XC0dQIgGdREiYrJNukKENxP5hbMprwdlhFw9GCeFo%2Bo9R4ZbCcq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDcwP2oJ7h5Uy62taircA0FfB8XMkNtbmm2R5oCYLeVDdtgiwMtCfv12bw9tKXXip%2FmmPZDRZaok%2BBAIJvft7SKWyrT065Z0Zg%2FtCMrqn8LJOuMNufU6%2FPmxYOTuOTD35vSkb8q7RfOfXftN13BvPaWsAvtN%2BOlJ2XZqMqEmawQk4hdx0O%2BBgfwNsZAVYsDdBEIZURj55fx3m%2Fk59c5eu5wC2k0SoUHFQgLsKp4gx5CJTm4B%2F%2BDHHrxoYDP0dHQWvNDx9iWZCu7%2FYkrijTaTeFmhQlA4dlmlNnTF20fiEvyACU6%2FdUj8%2F9I4JWnzrXXuDFM00X95Qnf6Ay4LhSncAjWg2VJVL67dveOugv2Vf7AXJia5c4ZLpfKRbwoE0KMOkBglRdSpJ%2B74QlIXiqZLUyYSgBuaVpMDjknmZzuhv9LCuqsdHNGKGsZu8x8ra3x0Uy%2BJswQHNQRJwc%2BvZziBKuAOOjeLc4%2FAUGf5q75%2BsXU9hpGxnFpEYEGb94zAQustFc2of8K%2BmyA4Kc2YGwSR%2FJXSvf6n%2FELMcF%2BzXjb5lSNBwGLdIfZLDyr7cbd5GjIASuY%2BqUxBmeNDmLA5Vbh3shMcGmNF0SE%2BfuZnEIX2RADRg5%2FGcIauvb%2F7oVBa0I3o23AkGJTpc1RdvAugMLSB2L4GOqUBEIWDWIsJ6KYE5e7ggcS0PxIWopNdieKzZ009w5C3C6ySV%2BfpFMetyb4oYBYtCx6enL3G4VHz1Va7fcUk8dwrygDeUzT9YKtLMYO6d18iBJTaoOeqQTdIvNjGofAPmome6eIgxut3SXhR6CTbSp0bDzlY9mGtKE8fkt5ngMlVtraMBzT5egsFEFD51twDhON9MZq1G%2FCRgGQgOyh%2BPp2LKpdHNSh%2F&X-Amz-Signature=6ac52ef9537d9eb44bfc89066df7147ba7cfb9e0d333f5272f1b1daf2db0ec13&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTCRM3WE%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCws3PkJ2gl9QTiOmrsSDrscJlkGsp7dJ8h4pnj4XC0dQIgGdREiYrJNukKENxP5hbMprwdlhFw9GCeFo%2Bo9R4ZbCcq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDcwP2oJ7h5Uy62taircA0FfB8XMkNtbmm2R5oCYLeVDdtgiwMtCfv12bw9tKXXip%2FmmPZDRZaok%2BBAIJvft7SKWyrT065Z0Zg%2FtCMrqn8LJOuMNufU6%2FPmxYOTuOTD35vSkb8q7RfOfXftN13BvPaWsAvtN%2BOlJ2XZqMqEmawQk4hdx0O%2BBgfwNsZAVYsDdBEIZURj55fx3m%2Fk59c5eu5wC2k0SoUHFQgLsKp4gx5CJTm4B%2F%2BDHHrxoYDP0dHQWvNDx9iWZCu7%2FYkrijTaTeFmhQlA4dlmlNnTF20fiEvyACU6%2FdUj8%2F9I4JWnzrXXuDFM00X95Qnf6Ay4LhSncAjWg2VJVL67dveOugv2Vf7AXJia5c4ZLpfKRbwoE0KMOkBglRdSpJ%2B74QlIXiqZLUyYSgBuaVpMDjknmZzuhv9LCuqsdHNGKGsZu8x8ra3x0Uy%2BJswQHNQRJwc%2BvZziBKuAOOjeLc4%2FAUGf5q75%2BsXU9hpGxnFpEYEGb94zAQustFc2of8K%2BmyA4Kc2YGwSR%2FJXSvf6n%2FELMcF%2BzXjb5lSNBwGLdIfZLDyr7cbd5GjIASuY%2BqUxBmeNDmLA5Vbh3shMcGmNF0SE%2BfuZnEIX2RADRg5%2FGcIauvb%2F7oVBa0I3o23AkGJTpc1RdvAugMLSB2L4GOqUBEIWDWIsJ6KYE5e7ggcS0PxIWopNdieKzZ009w5C3C6ySV%2BfpFMetyb4oYBYtCx6enL3G4VHz1Va7fcUk8dwrygDeUzT9YKtLMYO6d18iBJTaoOeqQTdIvNjGofAPmome6eIgxut3SXhR6CTbSp0bDzlY9mGtKE8fkt5ngMlVtraMBzT5egsFEFD51twDhON9MZq1G%2FCRgGQgOyh%2BPp2LKpdHNSh%2F&X-Amz-Signature=105c7852abd5a969c7f92fe63389091025a048c2086f022b23f2f8af2892d059&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTCRM3WE%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCws3PkJ2gl9QTiOmrsSDrscJlkGsp7dJ8h4pnj4XC0dQIgGdREiYrJNukKENxP5hbMprwdlhFw9GCeFo%2Bo9R4ZbCcq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDcwP2oJ7h5Uy62taircA0FfB8XMkNtbmm2R5oCYLeVDdtgiwMtCfv12bw9tKXXip%2FmmPZDRZaok%2BBAIJvft7SKWyrT065Z0Zg%2FtCMrqn8LJOuMNufU6%2FPmxYOTuOTD35vSkb8q7RfOfXftN13BvPaWsAvtN%2BOlJ2XZqMqEmawQk4hdx0O%2BBgfwNsZAVYsDdBEIZURj55fx3m%2Fk59c5eu5wC2k0SoUHFQgLsKp4gx5CJTm4B%2F%2BDHHrxoYDP0dHQWvNDx9iWZCu7%2FYkrijTaTeFmhQlA4dlmlNnTF20fiEvyACU6%2FdUj8%2F9I4JWnzrXXuDFM00X95Qnf6Ay4LhSncAjWg2VJVL67dveOugv2Vf7AXJia5c4ZLpfKRbwoE0KMOkBglRdSpJ%2B74QlIXiqZLUyYSgBuaVpMDjknmZzuhv9LCuqsdHNGKGsZu8x8ra3x0Uy%2BJswQHNQRJwc%2BvZziBKuAOOjeLc4%2FAUGf5q75%2BsXU9hpGxnFpEYEGb94zAQustFc2of8K%2BmyA4Kc2YGwSR%2FJXSvf6n%2FELMcF%2BzXjb5lSNBwGLdIfZLDyr7cbd5GjIASuY%2BqUxBmeNDmLA5Vbh3shMcGmNF0SE%2BfuZnEIX2RADRg5%2FGcIauvb%2F7oVBa0I3o23AkGJTpc1RdvAugMLSB2L4GOqUBEIWDWIsJ6KYE5e7ggcS0PxIWopNdieKzZ009w5C3C6ySV%2BfpFMetyb4oYBYtCx6enL3G4VHz1Va7fcUk8dwrygDeUzT9YKtLMYO6d18iBJTaoOeqQTdIvNjGofAPmome6eIgxut3SXhR6CTbSp0bDzlY9mGtKE8fkt5ngMlVtraMBzT5egsFEFD51twDhON9MZq1G%2FCRgGQgOyh%2BPp2LKpdHNSh%2F&X-Amz-Signature=8afeb70ebe35f2801e12d3bbc59a7c467f00f4f57f4df9bf56e638c692cf5d40&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTCRM3WE%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCws3PkJ2gl9QTiOmrsSDrscJlkGsp7dJ8h4pnj4XC0dQIgGdREiYrJNukKENxP5hbMprwdlhFw9GCeFo%2Bo9R4ZbCcq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDcwP2oJ7h5Uy62taircA0FfB8XMkNtbmm2R5oCYLeVDdtgiwMtCfv12bw9tKXXip%2FmmPZDRZaok%2BBAIJvft7SKWyrT065Z0Zg%2FtCMrqn8LJOuMNufU6%2FPmxYOTuOTD35vSkb8q7RfOfXftN13BvPaWsAvtN%2BOlJ2XZqMqEmawQk4hdx0O%2BBgfwNsZAVYsDdBEIZURj55fx3m%2Fk59c5eu5wC2k0SoUHFQgLsKp4gx5CJTm4B%2F%2BDHHrxoYDP0dHQWvNDx9iWZCu7%2FYkrijTaTeFmhQlA4dlmlNnTF20fiEvyACU6%2FdUj8%2F9I4JWnzrXXuDFM00X95Qnf6Ay4LhSncAjWg2VJVL67dveOugv2Vf7AXJia5c4ZLpfKRbwoE0KMOkBglRdSpJ%2B74QlIXiqZLUyYSgBuaVpMDjknmZzuhv9LCuqsdHNGKGsZu8x8ra3x0Uy%2BJswQHNQRJwc%2BvZziBKuAOOjeLc4%2FAUGf5q75%2BsXU9hpGxnFpEYEGb94zAQustFc2of8K%2BmyA4Kc2YGwSR%2FJXSvf6n%2FELMcF%2BzXjb5lSNBwGLdIfZLDyr7cbd5GjIASuY%2BqUxBmeNDmLA5Vbh3shMcGmNF0SE%2BfuZnEIX2RADRg5%2FGcIauvb%2F7oVBa0I3o23AkGJTpc1RdvAugMLSB2L4GOqUBEIWDWIsJ6KYE5e7ggcS0PxIWopNdieKzZ009w5C3C6ySV%2BfpFMetyb4oYBYtCx6enL3G4VHz1Va7fcUk8dwrygDeUzT9YKtLMYO6d18iBJTaoOeqQTdIvNjGofAPmome6eIgxut3SXhR6CTbSp0bDzlY9mGtKE8fkt5ngMlVtraMBzT5egsFEFD51twDhON9MZq1G%2FCRgGQgOyh%2BPp2LKpdHNSh%2F&X-Amz-Signature=1f9fc83e8a531cc8dfea832fa1cfa398ef3551d00479e47f6eac6c361d9098f0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTCRM3WE%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCws3PkJ2gl9QTiOmrsSDrscJlkGsp7dJ8h4pnj4XC0dQIgGdREiYrJNukKENxP5hbMprwdlhFw9GCeFo%2Bo9R4ZbCcq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDcwP2oJ7h5Uy62taircA0FfB8XMkNtbmm2R5oCYLeVDdtgiwMtCfv12bw9tKXXip%2FmmPZDRZaok%2BBAIJvft7SKWyrT065Z0Zg%2FtCMrqn8LJOuMNufU6%2FPmxYOTuOTD35vSkb8q7RfOfXftN13BvPaWsAvtN%2BOlJ2XZqMqEmawQk4hdx0O%2BBgfwNsZAVYsDdBEIZURj55fx3m%2Fk59c5eu5wC2k0SoUHFQgLsKp4gx5CJTm4B%2F%2BDHHrxoYDP0dHQWvNDx9iWZCu7%2FYkrijTaTeFmhQlA4dlmlNnTF20fiEvyACU6%2FdUj8%2F9I4JWnzrXXuDFM00X95Qnf6Ay4LhSncAjWg2VJVL67dveOugv2Vf7AXJia5c4ZLpfKRbwoE0KMOkBglRdSpJ%2B74QlIXiqZLUyYSgBuaVpMDjknmZzuhv9LCuqsdHNGKGsZu8x8ra3x0Uy%2BJswQHNQRJwc%2BvZziBKuAOOjeLc4%2FAUGf5q75%2BsXU9hpGxnFpEYEGb94zAQustFc2of8K%2BmyA4Kc2YGwSR%2FJXSvf6n%2FELMcF%2BzXjb5lSNBwGLdIfZLDyr7cbd5GjIASuY%2BqUxBmeNDmLA5Vbh3shMcGmNF0SE%2BfuZnEIX2RADRg5%2FGcIauvb%2F7oVBa0I3o23AkGJTpc1RdvAugMLSB2L4GOqUBEIWDWIsJ6KYE5e7ggcS0PxIWopNdieKzZ009w5C3C6ySV%2BfpFMetyb4oYBYtCx6enL3G4VHz1Va7fcUk8dwrygDeUzT9YKtLMYO6d18iBJTaoOeqQTdIvNjGofAPmome6eIgxut3SXhR6CTbSp0bDzlY9mGtKE8fkt5ngMlVtraMBzT5egsFEFD51twDhON9MZq1G%2FCRgGQgOyh%2BPp2LKpdHNSh%2F&X-Amz-Signature=4b6f384ee8fa92d2f074fb20b602c4b52e51d914bf548fcc464cf695da59e180&X-Amz-SignedHeaders=host&x-id=GetObject)
