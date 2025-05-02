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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD2HDGG6%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCvUZieuvRyhFCIwsb5pUnD7g%2BdLaG%2BCQMsKy81NeCNtQIgQphml%2FwbRSL0WajimsSoYJc4pwZSEus4nfgGRgJ4bVYqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpqSsnBqj%2FOWsaLuyrcA5ylqKP53x%2BDSbc8AgQE3W37EX2j%2BCbUkHbWZY2DXzXODC0pF%2Ft%2FNE8%2FRcJdH3KNex33lYbQOkVcVZocEHaFFuhNXB2SK0o1Q4HeE11Y4dY1BJ2CvMrhDQqr1HbKLV2bccc6DShMeeifQeA9Uku%2BoRANjpo6dT%2Ffcp1Z4k8jyy%2Bwzbuvl8wQgJ4KLkbRdEXFsjFmuYW1Wf7GLS2PXF4y1HX%2Br3MdvVY3fWAg12WSoT%2FqMf44D9Ukrar8zSRZQ%2BX38qcwm0itobyC9%2FFgnWgPhikrj1CS1fA36Shj7kQ522py%2BbzuyrzBDthbDg7I0Ui%2FekQe3CkBKjTVKcWvjbQArOcRy9El1UFmUwXkqj2vJGfCR0zkCRaSPuFQLK%2BKbVA3MnzMw0KUVa88tgOx%2FnKX2qYondJOWVwI5v4IaQt8JXadY%2F4Qb595W8x7CI6NLgo9qQNfc3AxzWbgoCv4L%2BFzu%2FcFw2TMK%2FFcwDIYO%2BkFTWr2KHq4GYTnBc6jdBP3uqIiFu9XcgZ51NVkf3vS1uHvvDQG8WUAvC8wfo3Q9A1XLZM%2F%2FJr63d0yvsQXExNIplJt8c5VAuzok4IKD2h3A3gMt3%2F97hTWvqP20E40IZkjejR%2FVtPs%2F%2FANiFnQSOAXMNGE1cAGOqUBi0UBd2AkxvuiVtaqkVmGEefGc3LZbE3oKkd3RSqT800SuAICIh06TBhjCB4uI%2F%2BVlGvNnb7dmJGsqDSE%2Ba9Tft5QqzWryKjZhxdgoPjgOg8NX%2BtXzGL1k1aLrUqGIHEZN5VSR%2Bn6qcXiZyqkn2O2TorRd00MzVlEMW7Zl%2BnCKxwdsOnbHgNFdYmwoVAFKnj8FrwFWghmPK4yW9gEjj12gYbsEelD&X-Amz-Signature=943078721288ce2517dda33ad0edd4c0ed25e92c55a647bc8d13eb50996cd658&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD2HDGG6%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCvUZieuvRyhFCIwsb5pUnD7g%2BdLaG%2BCQMsKy81NeCNtQIgQphml%2FwbRSL0WajimsSoYJc4pwZSEus4nfgGRgJ4bVYqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpqSsnBqj%2FOWsaLuyrcA5ylqKP53x%2BDSbc8AgQE3W37EX2j%2BCbUkHbWZY2DXzXODC0pF%2Ft%2FNE8%2FRcJdH3KNex33lYbQOkVcVZocEHaFFuhNXB2SK0o1Q4HeE11Y4dY1BJ2CvMrhDQqr1HbKLV2bccc6DShMeeifQeA9Uku%2BoRANjpo6dT%2Ffcp1Z4k8jyy%2Bwzbuvl8wQgJ4KLkbRdEXFsjFmuYW1Wf7GLS2PXF4y1HX%2Br3MdvVY3fWAg12WSoT%2FqMf44D9Ukrar8zSRZQ%2BX38qcwm0itobyC9%2FFgnWgPhikrj1CS1fA36Shj7kQ522py%2BbzuyrzBDthbDg7I0Ui%2FekQe3CkBKjTVKcWvjbQArOcRy9El1UFmUwXkqj2vJGfCR0zkCRaSPuFQLK%2BKbVA3MnzMw0KUVa88tgOx%2FnKX2qYondJOWVwI5v4IaQt8JXadY%2F4Qb595W8x7CI6NLgo9qQNfc3AxzWbgoCv4L%2BFzu%2FcFw2TMK%2FFcwDIYO%2BkFTWr2KHq4GYTnBc6jdBP3uqIiFu9XcgZ51NVkf3vS1uHvvDQG8WUAvC8wfo3Q9A1XLZM%2F%2FJr63d0yvsQXExNIplJt8c5VAuzok4IKD2h3A3gMt3%2F97hTWvqP20E40IZkjejR%2FVtPs%2F%2FANiFnQSOAXMNGE1cAGOqUBi0UBd2AkxvuiVtaqkVmGEefGc3LZbE3oKkd3RSqT800SuAICIh06TBhjCB4uI%2F%2BVlGvNnb7dmJGsqDSE%2Ba9Tft5QqzWryKjZhxdgoPjgOg8NX%2BtXzGL1k1aLrUqGIHEZN5VSR%2Bn6qcXiZyqkn2O2TorRd00MzVlEMW7Zl%2BnCKxwdsOnbHgNFdYmwoVAFKnj8FrwFWghmPK4yW9gEjj12gYbsEelD&X-Amz-Signature=15efd8fd0ef018734ff5aaa4a12506b8c63eae7fca5fa23076eaed23ae2918af&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD2HDGG6%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCvUZieuvRyhFCIwsb5pUnD7g%2BdLaG%2BCQMsKy81NeCNtQIgQphml%2FwbRSL0WajimsSoYJc4pwZSEus4nfgGRgJ4bVYqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpqSsnBqj%2FOWsaLuyrcA5ylqKP53x%2BDSbc8AgQE3W37EX2j%2BCbUkHbWZY2DXzXODC0pF%2Ft%2FNE8%2FRcJdH3KNex33lYbQOkVcVZocEHaFFuhNXB2SK0o1Q4HeE11Y4dY1BJ2CvMrhDQqr1HbKLV2bccc6DShMeeifQeA9Uku%2BoRANjpo6dT%2Ffcp1Z4k8jyy%2Bwzbuvl8wQgJ4KLkbRdEXFsjFmuYW1Wf7GLS2PXF4y1HX%2Br3MdvVY3fWAg12WSoT%2FqMf44D9Ukrar8zSRZQ%2BX38qcwm0itobyC9%2FFgnWgPhikrj1CS1fA36Shj7kQ522py%2BbzuyrzBDthbDg7I0Ui%2FekQe3CkBKjTVKcWvjbQArOcRy9El1UFmUwXkqj2vJGfCR0zkCRaSPuFQLK%2BKbVA3MnzMw0KUVa88tgOx%2FnKX2qYondJOWVwI5v4IaQt8JXadY%2F4Qb595W8x7CI6NLgo9qQNfc3AxzWbgoCv4L%2BFzu%2FcFw2TMK%2FFcwDIYO%2BkFTWr2KHq4GYTnBc6jdBP3uqIiFu9XcgZ51NVkf3vS1uHvvDQG8WUAvC8wfo3Q9A1XLZM%2F%2FJr63d0yvsQXExNIplJt8c5VAuzok4IKD2h3A3gMt3%2F97hTWvqP20E40IZkjejR%2FVtPs%2F%2FANiFnQSOAXMNGE1cAGOqUBi0UBd2AkxvuiVtaqkVmGEefGc3LZbE3oKkd3RSqT800SuAICIh06TBhjCB4uI%2F%2BVlGvNnb7dmJGsqDSE%2Ba9Tft5QqzWryKjZhxdgoPjgOg8NX%2BtXzGL1k1aLrUqGIHEZN5VSR%2Bn6qcXiZyqkn2O2TorRd00MzVlEMW7Zl%2BnCKxwdsOnbHgNFdYmwoVAFKnj8FrwFWghmPK4yW9gEjj12gYbsEelD&X-Amz-Signature=d3278148c45962ef7759a3d47bf9da573c2f6f1f512c2ee5f690b7bda5d7e9f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD2HDGG6%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCvUZieuvRyhFCIwsb5pUnD7g%2BdLaG%2BCQMsKy81NeCNtQIgQphml%2FwbRSL0WajimsSoYJc4pwZSEus4nfgGRgJ4bVYqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpqSsnBqj%2FOWsaLuyrcA5ylqKP53x%2BDSbc8AgQE3W37EX2j%2BCbUkHbWZY2DXzXODC0pF%2Ft%2FNE8%2FRcJdH3KNex33lYbQOkVcVZocEHaFFuhNXB2SK0o1Q4HeE11Y4dY1BJ2CvMrhDQqr1HbKLV2bccc6DShMeeifQeA9Uku%2BoRANjpo6dT%2Ffcp1Z4k8jyy%2Bwzbuvl8wQgJ4KLkbRdEXFsjFmuYW1Wf7GLS2PXF4y1HX%2Br3MdvVY3fWAg12WSoT%2FqMf44D9Ukrar8zSRZQ%2BX38qcwm0itobyC9%2FFgnWgPhikrj1CS1fA36Shj7kQ522py%2BbzuyrzBDthbDg7I0Ui%2FekQe3CkBKjTVKcWvjbQArOcRy9El1UFmUwXkqj2vJGfCR0zkCRaSPuFQLK%2BKbVA3MnzMw0KUVa88tgOx%2FnKX2qYondJOWVwI5v4IaQt8JXadY%2F4Qb595W8x7CI6NLgo9qQNfc3AxzWbgoCv4L%2BFzu%2FcFw2TMK%2FFcwDIYO%2BkFTWr2KHq4GYTnBc6jdBP3uqIiFu9XcgZ51NVkf3vS1uHvvDQG8WUAvC8wfo3Q9A1XLZM%2F%2FJr63d0yvsQXExNIplJt8c5VAuzok4IKD2h3A3gMt3%2F97hTWvqP20E40IZkjejR%2FVtPs%2F%2FANiFnQSOAXMNGE1cAGOqUBi0UBd2AkxvuiVtaqkVmGEefGc3LZbE3oKkd3RSqT800SuAICIh06TBhjCB4uI%2F%2BVlGvNnb7dmJGsqDSE%2Ba9Tft5QqzWryKjZhxdgoPjgOg8NX%2BtXzGL1k1aLrUqGIHEZN5VSR%2Bn6qcXiZyqkn2O2TorRd00MzVlEMW7Zl%2BnCKxwdsOnbHgNFdYmwoVAFKnj8FrwFWghmPK4yW9gEjj12gYbsEelD&X-Amz-Signature=d57c8ad0875c11b70585033b695279dd9ca0ce83ae1282a027a4f2c3dd74bf19&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD2HDGG6%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCvUZieuvRyhFCIwsb5pUnD7g%2BdLaG%2BCQMsKy81NeCNtQIgQphml%2FwbRSL0WajimsSoYJc4pwZSEus4nfgGRgJ4bVYqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpqSsnBqj%2FOWsaLuyrcA5ylqKP53x%2BDSbc8AgQE3W37EX2j%2BCbUkHbWZY2DXzXODC0pF%2Ft%2FNE8%2FRcJdH3KNex33lYbQOkVcVZocEHaFFuhNXB2SK0o1Q4HeE11Y4dY1BJ2CvMrhDQqr1HbKLV2bccc6DShMeeifQeA9Uku%2BoRANjpo6dT%2Ffcp1Z4k8jyy%2Bwzbuvl8wQgJ4KLkbRdEXFsjFmuYW1Wf7GLS2PXF4y1HX%2Br3MdvVY3fWAg12WSoT%2FqMf44D9Ukrar8zSRZQ%2BX38qcwm0itobyC9%2FFgnWgPhikrj1CS1fA36Shj7kQ522py%2BbzuyrzBDthbDg7I0Ui%2FekQe3CkBKjTVKcWvjbQArOcRy9El1UFmUwXkqj2vJGfCR0zkCRaSPuFQLK%2BKbVA3MnzMw0KUVa88tgOx%2FnKX2qYondJOWVwI5v4IaQt8JXadY%2F4Qb595W8x7CI6NLgo9qQNfc3AxzWbgoCv4L%2BFzu%2FcFw2TMK%2FFcwDIYO%2BkFTWr2KHq4GYTnBc6jdBP3uqIiFu9XcgZ51NVkf3vS1uHvvDQG8WUAvC8wfo3Q9A1XLZM%2F%2FJr63d0yvsQXExNIplJt8c5VAuzok4IKD2h3A3gMt3%2F97hTWvqP20E40IZkjejR%2FVtPs%2F%2FANiFnQSOAXMNGE1cAGOqUBi0UBd2AkxvuiVtaqkVmGEefGc3LZbE3oKkd3RSqT800SuAICIh06TBhjCB4uI%2F%2BVlGvNnb7dmJGsqDSE%2Ba9Tft5QqzWryKjZhxdgoPjgOg8NX%2BtXzGL1k1aLrUqGIHEZN5VSR%2Bn6qcXiZyqkn2O2TorRd00MzVlEMW7Zl%2BnCKxwdsOnbHgNFdYmwoVAFKnj8FrwFWghmPK4yW9gEjj12gYbsEelD&X-Amz-Signature=0c223f4fbb094fbb2f7f4bca2700f1b34486a7e143191e7107b470f94116bdaf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD2HDGG6%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCvUZieuvRyhFCIwsb5pUnD7g%2BdLaG%2BCQMsKy81NeCNtQIgQphml%2FwbRSL0WajimsSoYJc4pwZSEus4nfgGRgJ4bVYqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpqSsnBqj%2FOWsaLuyrcA5ylqKP53x%2BDSbc8AgQE3W37EX2j%2BCbUkHbWZY2DXzXODC0pF%2Ft%2FNE8%2FRcJdH3KNex33lYbQOkVcVZocEHaFFuhNXB2SK0o1Q4HeE11Y4dY1BJ2CvMrhDQqr1HbKLV2bccc6DShMeeifQeA9Uku%2BoRANjpo6dT%2Ffcp1Z4k8jyy%2Bwzbuvl8wQgJ4KLkbRdEXFsjFmuYW1Wf7GLS2PXF4y1HX%2Br3MdvVY3fWAg12WSoT%2FqMf44D9Ukrar8zSRZQ%2BX38qcwm0itobyC9%2FFgnWgPhikrj1CS1fA36Shj7kQ522py%2BbzuyrzBDthbDg7I0Ui%2FekQe3CkBKjTVKcWvjbQArOcRy9El1UFmUwXkqj2vJGfCR0zkCRaSPuFQLK%2BKbVA3MnzMw0KUVa88tgOx%2FnKX2qYondJOWVwI5v4IaQt8JXadY%2F4Qb595W8x7CI6NLgo9qQNfc3AxzWbgoCv4L%2BFzu%2FcFw2TMK%2FFcwDIYO%2BkFTWr2KHq4GYTnBc6jdBP3uqIiFu9XcgZ51NVkf3vS1uHvvDQG8WUAvC8wfo3Q9A1XLZM%2F%2FJr63d0yvsQXExNIplJt8c5VAuzok4IKD2h3A3gMt3%2F97hTWvqP20E40IZkjejR%2FVtPs%2F%2FANiFnQSOAXMNGE1cAGOqUBi0UBd2AkxvuiVtaqkVmGEefGc3LZbE3oKkd3RSqT800SuAICIh06TBhjCB4uI%2F%2BVlGvNnb7dmJGsqDSE%2Ba9Tft5QqzWryKjZhxdgoPjgOg8NX%2BtXzGL1k1aLrUqGIHEZN5VSR%2Bn6qcXiZyqkn2O2TorRd00MzVlEMW7Zl%2BnCKxwdsOnbHgNFdYmwoVAFKnj8FrwFWghmPK4yW9gEjj12gYbsEelD&X-Amz-Signature=01c4344270de9c5aeb8bf5434cf4dc2049c32541b0e33212b5e3bef86980415f&X-Amz-SignedHeaders=host&x-id=GetObject)
