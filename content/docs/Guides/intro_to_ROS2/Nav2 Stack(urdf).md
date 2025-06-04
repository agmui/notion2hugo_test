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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S7S3R2F%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIBnuOXEpJ8WIFqvb2Cg4Cwr5lx8w2B7dgq1aQsW1VAmYAiAQmafFpmLRiQv0Q4V%2B13BiFqbp9nua%2FqZYEUB2JcJICCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMP%2BdIaeWWQ1ypCwz5KtwDORXt%2B9fDoNtjK5XPJ%2FFnoUtBxo84mfeILhIP1BhGMcdm4OvTeTPdMyrBy6G1vLTWl6uzZcWpexs0ZM4pvqhHlE083S2t6GHapLrSuciE4c3uCWdf%2FBOLeMbDD%2FYXdrzYqm4Y43b9ArR6EwnMH1AXdCiTOcvEg%2FyY1hVa%2FhL6NX71AC2rutawerNuSbDbS%2BimT2JXyb7shgCoYbgx1CppWk74ZllQbqbuzI1ho7pBX7JCZNaDakhds9Wp1IoT2%2Bl1lyAIjV0ittZRf70nc%2Br9soyr5lPLtInB2Jt1fGJjRIr7YrNLIjdyfv3s2u9KdbGK3A9nUI1889l44dIxBrNQ5xl6TpAzJMQ1uDBmg18CeAQGnBdxvoE0DmOF5qyOgOdF9tONmE2305CKUmtHVm6FJhRX5hDDrU7GhTBFXPlwrhxz8b2RKe00y84D%2FaqfpTLSZwTFMvv5Du%2FWGs5U6uzwHGEVTJqrrFWVvgDTm5zXDlGtfryPz4oRk29KHtjwVLA7kUlFEnakwT%2Fp2nQFM5kWcb5gZRANKzS1JJcPTT1Pmy8CRHzDvjBD9gS69vVCeeHaQPwgKsXcNSMfpd0rFgnfKJNI25S5Ou%2F4FF8Kd8V%2FQj1q9FjTcfyQoZ7Ayasw%2FISDwgY6pgFDxpnqds54AfDacal9dmJ4oBvXDigrf0Bud41EhUmOl2fQj1Qkt3ITIGIs3jNAqfSFu7s%2BONvSwK%2Fj8k2xm66N8yZfVoUxB%2Btq4ykfU0uvmzQe1XwMqPP7LSTGgLxH1uYi0YBMZ4%2BSN20nIyW7IW19BGrtPqMuUB5GLwp6SibHZaBvQ6hUyRPwmjco1GFN75NWZBEdjTlBd0hae9kmCUmvL46ol3kf&X-Amz-Signature=eb0e3be460a841b8e4a1a55d90c33b115805157a2737b294c038c6075b8a6a20&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S7S3R2F%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIBnuOXEpJ8WIFqvb2Cg4Cwr5lx8w2B7dgq1aQsW1VAmYAiAQmafFpmLRiQv0Q4V%2B13BiFqbp9nua%2FqZYEUB2JcJICCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMP%2BdIaeWWQ1ypCwz5KtwDORXt%2B9fDoNtjK5XPJ%2FFnoUtBxo84mfeILhIP1BhGMcdm4OvTeTPdMyrBy6G1vLTWl6uzZcWpexs0ZM4pvqhHlE083S2t6GHapLrSuciE4c3uCWdf%2FBOLeMbDD%2FYXdrzYqm4Y43b9ArR6EwnMH1AXdCiTOcvEg%2FyY1hVa%2FhL6NX71AC2rutawerNuSbDbS%2BimT2JXyb7shgCoYbgx1CppWk74ZllQbqbuzI1ho7pBX7JCZNaDakhds9Wp1IoT2%2Bl1lyAIjV0ittZRf70nc%2Br9soyr5lPLtInB2Jt1fGJjRIr7YrNLIjdyfv3s2u9KdbGK3A9nUI1889l44dIxBrNQ5xl6TpAzJMQ1uDBmg18CeAQGnBdxvoE0DmOF5qyOgOdF9tONmE2305CKUmtHVm6FJhRX5hDDrU7GhTBFXPlwrhxz8b2RKe00y84D%2FaqfpTLSZwTFMvv5Du%2FWGs5U6uzwHGEVTJqrrFWVvgDTm5zXDlGtfryPz4oRk29KHtjwVLA7kUlFEnakwT%2Fp2nQFM5kWcb5gZRANKzS1JJcPTT1Pmy8CRHzDvjBD9gS69vVCeeHaQPwgKsXcNSMfpd0rFgnfKJNI25S5Ou%2F4FF8Kd8V%2FQj1q9FjTcfyQoZ7Ayasw%2FISDwgY6pgFDxpnqds54AfDacal9dmJ4oBvXDigrf0Bud41EhUmOl2fQj1Qkt3ITIGIs3jNAqfSFu7s%2BONvSwK%2Fj8k2xm66N8yZfVoUxB%2Btq4ykfU0uvmzQe1XwMqPP7LSTGgLxH1uYi0YBMZ4%2BSN20nIyW7IW19BGrtPqMuUB5GLwp6SibHZaBvQ6hUyRPwmjco1GFN75NWZBEdjTlBd0hae9kmCUmvL46ol3kf&X-Amz-Signature=9f0319471d2965f5e15b361bc56542638d94b47ae0d0f7b901f8eeb286f2fa3f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S7S3R2F%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIBnuOXEpJ8WIFqvb2Cg4Cwr5lx8w2B7dgq1aQsW1VAmYAiAQmafFpmLRiQv0Q4V%2B13BiFqbp9nua%2FqZYEUB2JcJICCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMP%2BdIaeWWQ1ypCwz5KtwDORXt%2B9fDoNtjK5XPJ%2FFnoUtBxo84mfeILhIP1BhGMcdm4OvTeTPdMyrBy6G1vLTWl6uzZcWpexs0ZM4pvqhHlE083S2t6GHapLrSuciE4c3uCWdf%2FBOLeMbDD%2FYXdrzYqm4Y43b9ArR6EwnMH1AXdCiTOcvEg%2FyY1hVa%2FhL6NX71AC2rutawerNuSbDbS%2BimT2JXyb7shgCoYbgx1CppWk74ZllQbqbuzI1ho7pBX7JCZNaDakhds9Wp1IoT2%2Bl1lyAIjV0ittZRf70nc%2Br9soyr5lPLtInB2Jt1fGJjRIr7YrNLIjdyfv3s2u9KdbGK3A9nUI1889l44dIxBrNQ5xl6TpAzJMQ1uDBmg18CeAQGnBdxvoE0DmOF5qyOgOdF9tONmE2305CKUmtHVm6FJhRX5hDDrU7GhTBFXPlwrhxz8b2RKe00y84D%2FaqfpTLSZwTFMvv5Du%2FWGs5U6uzwHGEVTJqrrFWVvgDTm5zXDlGtfryPz4oRk29KHtjwVLA7kUlFEnakwT%2Fp2nQFM5kWcb5gZRANKzS1JJcPTT1Pmy8CRHzDvjBD9gS69vVCeeHaQPwgKsXcNSMfpd0rFgnfKJNI25S5Ou%2F4FF8Kd8V%2FQj1q9FjTcfyQoZ7Ayasw%2FISDwgY6pgFDxpnqds54AfDacal9dmJ4oBvXDigrf0Bud41EhUmOl2fQj1Qkt3ITIGIs3jNAqfSFu7s%2BONvSwK%2Fj8k2xm66N8yZfVoUxB%2Btq4ykfU0uvmzQe1XwMqPP7LSTGgLxH1uYi0YBMZ4%2BSN20nIyW7IW19BGrtPqMuUB5GLwp6SibHZaBvQ6hUyRPwmjco1GFN75NWZBEdjTlBd0hae9kmCUmvL46ol3kf&X-Amz-Signature=cd28f6349a4f14cda8598a3558cebb3134b9405865aefaa9f99966deb06b0d7c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S7S3R2F%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIBnuOXEpJ8WIFqvb2Cg4Cwr5lx8w2B7dgq1aQsW1VAmYAiAQmafFpmLRiQv0Q4V%2B13BiFqbp9nua%2FqZYEUB2JcJICCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMP%2BdIaeWWQ1ypCwz5KtwDORXt%2B9fDoNtjK5XPJ%2FFnoUtBxo84mfeILhIP1BhGMcdm4OvTeTPdMyrBy6G1vLTWl6uzZcWpexs0ZM4pvqhHlE083S2t6GHapLrSuciE4c3uCWdf%2FBOLeMbDD%2FYXdrzYqm4Y43b9ArR6EwnMH1AXdCiTOcvEg%2FyY1hVa%2FhL6NX71AC2rutawerNuSbDbS%2BimT2JXyb7shgCoYbgx1CppWk74ZllQbqbuzI1ho7pBX7JCZNaDakhds9Wp1IoT2%2Bl1lyAIjV0ittZRf70nc%2Br9soyr5lPLtInB2Jt1fGJjRIr7YrNLIjdyfv3s2u9KdbGK3A9nUI1889l44dIxBrNQ5xl6TpAzJMQ1uDBmg18CeAQGnBdxvoE0DmOF5qyOgOdF9tONmE2305CKUmtHVm6FJhRX5hDDrU7GhTBFXPlwrhxz8b2RKe00y84D%2FaqfpTLSZwTFMvv5Du%2FWGs5U6uzwHGEVTJqrrFWVvgDTm5zXDlGtfryPz4oRk29KHtjwVLA7kUlFEnakwT%2Fp2nQFM5kWcb5gZRANKzS1JJcPTT1Pmy8CRHzDvjBD9gS69vVCeeHaQPwgKsXcNSMfpd0rFgnfKJNI25S5Ou%2F4FF8Kd8V%2FQj1q9FjTcfyQoZ7Ayasw%2FISDwgY6pgFDxpnqds54AfDacal9dmJ4oBvXDigrf0Bud41EhUmOl2fQj1Qkt3ITIGIs3jNAqfSFu7s%2BONvSwK%2Fj8k2xm66N8yZfVoUxB%2Btq4ykfU0uvmzQe1XwMqPP7LSTGgLxH1uYi0YBMZ4%2BSN20nIyW7IW19BGrtPqMuUB5GLwp6SibHZaBvQ6hUyRPwmjco1GFN75NWZBEdjTlBd0hae9kmCUmvL46ol3kf&X-Amz-Signature=0be93a5c571c2b7eb9e717dfd42f0e100c2465a999f6b934479ee382a071e800&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S7S3R2F%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIBnuOXEpJ8WIFqvb2Cg4Cwr5lx8w2B7dgq1aQsW1VAmYAiAQmafFpmLRiQv0Q4V%2B13BiFqbp9nua%2FqZYEUB2JcJICCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMP%2BdIaeWWQ1ypCwz5KtwDORXt%2B9fDoNtjK5XPJ%2FFnoUtBxo84mfeILhIP1BhGMcdm4OvTeTPdMyrBy6G1vLTWl6uzZcWpexs0ZM4pvqhHlE083S2t6GHapLrSuciE4c3uCWdf%2FBOLeMbDD%2FYXdrzYqm4Y43b9ArR6EwnMH1AXdCiTOcvEg%2FyY1hVa%2FhL6NX71AC2rutawerNuSbDbS%2BimT2JXyb7shgCoYbgx1CppWk74ZllQbqbuzI1ho7pBX7JCZNaDakhds9Wp1IoT2%2Bl1lyAIjV0ittZRf70nc%2Br9soyr5lPLtInB2Jt1fGJjRIr7YrNLIjdyfv3s2u9KdbGK3A9nUI1889l44dIxBrNQ5xl6TpAzJMQ1uDBmg18CeAQGnBdxvoE0DmOF5qyOgOdF9tONmE2305CKUmtHVm6FJhRX5hDDrU7GhTBFXPlwrhxz8b2RKe00y84D%2FaqfpTLSZwTFMvv5Du%2FWGs5U6uzwHGEVTJqrrFWVvgDTm5zXDlGtfryPz4oRk29KHtjwVLA7kUlFEnakwT%2Fp2nQFM5kWcb5gZRANKzS1JJcPTT1Pmy8CRHzDvjBD9gS69vVCeeHaQPwgKsXcNSMfpd0rFgnfKJNI25S5Ou%2F4FF8Kd8V%2FQj1q9FjTcfyQoZ7Ayasw%2FISDwgY6pgFDxpnqds54AfDacal9dmJ4oBvXDigrf0Bud41EhUmOl2fQj1Qkt3ITIGIs3jNAqfSFu7s%2BONvSwK%2Fj8k2xm66N8yZfVoUxB%2Btq4ykfU0uvmzQe1XwMqPP7LSTGgLxH1uYi0YBMZ4%2BSN20nIyW7IW19BGrtPqMuUB5GLwp6SibHZaBvQ6hUyRPwmjco1GFN75NWZBEdjTlBd0hae9kmCUmvL46ol3kf&X-Amz-Signature=0588ca48eba6d73a43341d97613c5317bf8a5075b4eec0ef05b17c405f23dc84&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S7S3R2F%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIBnuOXEpJ8WIFqvb2Cg4Cwr5lx8w2B7dgq1aQsW1VAmYAiAQmafFpmLRiQv0Q4V%2B13BiFqbp9nua%2FqZYEUB2JcJICCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMP%2BdIaeWWQ1ypCwz5KtwDORXt%2B9fDoNtjK5XPJ%2FFnoUtBxo84mfeILhIP1BhGMcdm4OvTeTPdMyrBy6G1vLTWl6uzZcWpexs0ZM4pvqhHlE083S2t6GHapLrSuciE4c3uCWdf%2FBOLeMbDD%2FYXdrzYqm4Y43b9ArR6EwnMH1AXdCiTOcvEg%2FyY1hVa%2FhL6NX71AC2rutawerNuSbDbS%2BimT2JXyb7shgCoYbgx1CppWk74ZllQbqbuzI1ho7pBX7JCZNaDakhds9Wp1IoT2%2Bl1lyAIjV0ittZRf70nc%2Br9soyr5lPLtInB2Jt1fGJjRIr7YrNLIjdyfv3s2u9KdbGK3A9nUI1889l44dIxBrNQ5xl6TpAzJMQ1uDBmg18CeAQGnBdxvoE0DmOF5qyOgOdF9tONmE2305CKUmtHVm6FJhRX5hDDrU7GhTBFXPlwrhxz8b2RKe00y84D%2FaqfpTLSZwTFMvv5Du%2FWGs5U6uzwHGEVTJqrrFWVvgDTm5zXDlGtfryPz4oRk29KHtjwVLA7kUlFEnakwT%2Fp2nQFM5kWcb5gZRANKzS1JJcPTT1Pmy8CRHzDvjBD9gS69vVCeeHaQPwgKsXcNSMfpd0rFgnfKJNI25S5Ou%2F4FF8Kd8V%2FQj1q9FjTcfyQoZ7Ayasw%2FISDwgY6pgFDxpnqds54AfDacal9dmJ4oBvXDigrf0Bud41EhUmOl2fQj1Qkt3ITIGIs3jNAqfSFu7s%2BONvSwK%2Fj8k2xm66N8yZfVoUxB%2Btq4ykfU0uvmzQe1XwMqPP7LSTGgLxH1uYi0YBMZ4%2BSN20nIyW7IW19BGrtPqMuUB5GLwp6SibHZaBvQ6hUyRPwmjco1GFN75NWZBEdjTlBd0hae9kmCUmvL46ol3kf&X-Amz-Signature=3ad5cff70ade69495936d7592339f20a03ad024debc5becd1f69dfe2bc41e4b2&X-Amz-SignedHeaders=host&x-id=GetObject)
