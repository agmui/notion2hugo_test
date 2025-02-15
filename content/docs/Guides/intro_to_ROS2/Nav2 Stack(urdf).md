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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GEWM2FO%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDn74bDIsW25QSxGFkSzpr0cRouoUsr3Dl1Al2tz6WdFAiBmSvvLZp5j%2FradlEmy%2Bi5EIS%2B44YAJvoNQsL8dG6FM6Cr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMu5lY3Y7iHm9FNWJuKtwDNhz%2B7lpDy6Y6K5vjF0Ik02iwoIjF7fwAJB0CaH4jTnz0fwy%2BceWCuSM86zeAhjeKInCOSDzahhYhkD7eKyCAbBvzsK%2BwxjIs2zR1GoWGtSF6xJfOio%2F2aSkZ45cVRF%2Bou02COIy1wkzaLXchEhi5%2F%2F5iGL3dKSyZ%2B5K8AAnmN4V2PXSrE7n6RLUYMebx80f83BIF4Q6Xg3d7bvIXzteSxIBuTp0j8iLvxxGf%2BwNmOV3JFH3N1IjUkosaoLKIY3LnFQjwu2VWy2capiWmxMdlW%2F%2BtCv%2BmVm5KnMv2h%2B%2FfNn4NhOTBF1zHRq6HVZu9jxCIodQiAIpKuRmGERu3s3EeUoF8G6E671zZlr2hiMvdukOHmeFWndmdiVxb835osDL30Cdg05%2FjaUWp3L%2F1NjQeTYNiOrIXEATDRk%2B4xiSu6TxHG%2F8sdIaUAl8z%2BHIxVXhk0qJnscU95TwJNrBNWPgoJJ%2FUp4m1Y4jZ9Kno1ifsXCoBWWbfcUExIBZCyQSaRvEjvxJ5MobNpCuMAlR5DJd0tApyZIczDKdrCBydfNg7xAAwKnana46ai4o0AoXYzGpXWJz68HMox5Nw%2BJnp%2B0tbmDqNpcaiXeXLayBaIqSqnEO5HB3EtK6PhocnBNUw3YTBvQY6pgHI%2Bgx7yV%2BmS1bWrqazTxm%2FD4PiapAknI5f9qv1yEfMLkR5XZybRs4ii7%2F%2F7D6VWs%2FKuOU%2FOTvSC8m1mmGDxggOTkwcdJ2npLKaaLagl2rThFS9FiAfpG1ZJ6nU%2BjOUKDJWjnkE7zyRVXdLV%2FWBj7RZAJS5PsnUjIMUa%2FJxHb5ba92LgWeGURORSQZw0xk%2BzN3QevFqfri2nrqytfY8j56%2By9LavJXp&X-Amz-Signature=5a051c03b55f3234f6f936ed37147262c04976d3a3269c76dee267d470566327&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GEWM2FO%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDn74bDIsW25QSxGFkSzpr0cRouoUsr3Dl1Al2tz6WdFAiBmSvvLZp5j%2FradlEmy%2Bi5EIS%2B44YAJvoNQsL8dG6FM6Cr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMu5lY3Y7iHm9FNWJuKtwDNhz%2B7lpDy6Y6K5vjF0Ik02iwoIjF7fwAJB0CaH4jTnz0fwy%2BceWCuSM86zeAhjeKInCOSDzahhYhkD7eKyCAbBvzsK%2BwxjIs2zR1GoWGtSF6xJfOio%2F2aSkZ45cVRF%2Bou02COIy1wkzaLXchEhi5%2F%2F5iGL3dKSyZ%2B5K8AAnmN4V2PXSrE7n6RLUYMebx80f83BIF4Q6Xg3d7bvIXzteSxIBuTp0j8iLvxxGf%2BwNmOV3JFH3N1IjUkosaoLKIY3LnFQjwu2VWy2capiWmxMdlW%2F%2BtCv%2BmVm5KnMv2h%2B%2FfNn4NhOTBF1zHRq6HVZu9jxCIodQiAIpKuRmGERu3s3EeUoF8G6E671zZlr2hiMvdukOHmeFWndmdiVxb835osDL30Cdg05%2FjaUWp3L%2F1NjQeTYNiOrIXEATDRk%2B4xiSu6TxHG%2F8sdIaUAl8z%2BHIxVXhk0qJnscU95TwJNrBNWPgoJJ%2FUp4m1Y4jZ9Kno1ifsXCoBWWbfcUExIBZCyQSaRvEjvxJ5MobNpCuMAlR5DJd0tApyZIczDKdrCBydfNg7xAAwKnana46ai4o0AoXYzGpXWJz68HMox5Nw%2BJnp%2B0tbmDqNpcaiXeXLayBaIqSqnEO5HB3EtK6PhocnBNUw3YTBvQY6pgHI%2Bgx7yV%2BmS1bWrqazTxm%2FD4PiapAknI5f9qv1yEfMLkR5XZybRs4ii7%2F%2F7D6VWs%2FKuOU%2FOTvSC8m1mmGDxggOTkwcdJ2npLKaaLagl2rThFS9FiAfpG1ZJ6nU%2BjOUKDJWjnkE7zyRVXdLV%2FWBj7RZAJS5PsnUjIMUa%2FJxHb5ba92LgWeGURORSQZw0xk%2BzN3QevFqfri2nrqytfY8j56%2By9LavJXp&X-Amz-Signature=ee7dfdcd8671cc912f4589d1a27f8984d394d0310f7c9a359098dfe350f9582c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GEWM2FO%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDn74bDIsW25QSxGFkSzpr0cRouoUsr3Dl1Al2tz6WdFAiBmSvvLZp5j%2FradlEmy%2Bi5EIS%2B44YAJvoNQsL8dG6FM6Cr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMu5lY3Y7iHm9FNWJuKtwDNhz%2B7lpDy6Y6K5vjF0Ik02iwoIjF7fwAJB0CaH4jTnz0fwy%2BceWCuSM86zeAhjeKInCOSDzahhYhkD7eKyCAbBvzsK%2BwxjIs2zR1GoWGtSF6xJfOio%2F2aSkZ45cVRF%2Bou02COIy1wkzaLXchEhi5%2F%2F5iGL3dKSyZ%2B5K8AAnmN4V2PXSrE7n6RLUYMebx80f83BIF4Q6Xg3d7bvIXzteSxIBuTp0j8iLvxxGf%2BwNmOV3JFH3N1IjUkosaoLKIY3LnFQjwu2VWy2capiWmxMdlW%2F%2BtCv%2BmVm5KnMv2h%2B%2FfNn4NhOTBF1zHRq6HVZu9jxCIodQiAIpKuRmGERu3s3EeUoF8G6E671zZlr2hiMvdukOHmeFWndmdiVxb835osDL30Cdg05%2FjaUWp3L%2F1NjQeTYNiOrIXEATDRk%2B4xiSu6TxHG%2F8sdIaUAl8z%2BHIxVXhk0qJnscU95TwJNrBNWPgoJJ%2FUp4m1Y4jZ9Kno1ifsXCoBWWbfcUExIBZCyQSaRvEjvxJ5MobNpCuMAlR5DJd0tApyZIczDKdrCBydfNg7xAAwKnana46ai4o0AoXYzGpXWJz68HMox5Nw%2BJnp%2B0tbmDqNpcaiXeXLayBaIqSqnEO5HB3EtK6PhocnBNUw3YTBvQY6pgHI%2Bgx7yV%2BmS1bWrqazTxm%2FD4PiapAknI5f9qv1yEfMLkR5XZybRs4ii7%2F%2F7D6VWs%2FKuOU%2FOTvSC8m1mmGDxggOTkwcdJ2npLKaaLagl2rThFS9FiAfpG1ZJ6nU%2BjOUKDJWjnkE7zyRVXdLV%2FWBj7RZAJS5PsnUjIMUa%2FJxHb5ba92LgWeGURORSQZw0xk%2BzN3QevFqfri2nrqytfY8j56%2By9LavJXp&X-Amz-Signature=ef1c199cadd71befb4d6e6d03576f6ce6bfe9010d2f9343c8b56c7740690b61a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GEWM2FO%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDn74bDIsW25QSxGFkSzpr0cRouoUsr3Dl1Al2tz6WdFAiBmSvvLZp5j%2FradlEmy%2Bi5EIS%2B44YAJvoNQsL8dG6FM6Cr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMu5lY3Y7iHm9FNWJuKtwDNhz%2B7lpDy6Y6K5vjF0Ik02iwoIjF7fwAJB0CaH4jTnz0fwy%2BceWCuSM86zeAhjeKInCOSDzahhYhkD7eKyCAbBvzsK%2BwxjIs2zR1GoWGtSF6xJfOio%2F2aSkZ45cVRF%2Bou02COIy1wkzaLXchEhi5%2F%2F5iGL3dKSyZ%2B5K8AAnmN4V2PXSrE7n6RLUYMebx80f83BIF4Q6Xg3d7bvIXzteSxIBuTp0j8iLvxxGf%2BwNmOV3JFH3N1IjUkosaoLKIY3LnFQjwu2VWy2capiWmxMdlW%2F%2BtCv%2BmVm5KnMv2h%2B%2FfNn4NhOTBF1zHRq6HVZu9jxCIodQiAIpKuRmGERu3s3EeUoF8G6E671zZlr2hiMvdukOHmeFWndmdiVxb835osDL30Cdg05%2FjaUWp3L%2F1NjQeTYNiOrIXEATDRk%2B4xiSu6TxHG%2F8sdIaUAl8z%2BHIxVXhk0qJnscU95TwJNrBNWPgoJJ%2FUp4m1Y4jZ9Kno1ifsXCoBWWbfcUExIBZCyQSaRvEjvxJ5MobNpCuMAlR5DJd0tApyZIczDKdrCBydfNg7xAAwKnana46ai4o0AoXYzGpXWJz68HMox5Nw%2BJnp%2B0tbmDqNpcaiXeXLayBaIqSqnEO5HB3EtK6PhocnBNUw3YTBvQY6pgHI%2Bgx7yV%2BmS1bWrqazTxm%2FD4PiapAknI5f9qv1yEfMLkR5XZybRs4ii7%2F%2F7D6VWs%2FKuOU%2FOTvSC8m1mmGDxggOTkwcdJ2npLKaaLagl2rThFS9FiAfpG1ZJ6nU%2BjOUKDJWjnkE7zyRVXdLV%2FWBj7RZAJS5PsnUjIMUa%2FJxHb5ba92LgWeGURORSQZw0xk%2BzN3QevFqfri2nrqytfY8j56%2By9LavJXp&X-Amz-Signature=d8b2a68a560608a335ae5bc949b23eaa323cf322a82a1f8ebe82fba3479a3b02&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GEWM2FO%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDn74bDIsW25QSxGFkSzpr0cRouoUsr3Dl1Al2tz6WdFAiBmSvvLZp5j%2FradlEmy%2Bi5EIS%2B44YAJvoNQsL8dG6FM6Cr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMu5lY3Y7iHm9FNWJuKtwDNhz%2B7lpDy6Y6K5vjF0Ik02iwoIjF7fwAJB0CaH4jTnz0fwy%2BceWCuSM86zeAhjeKInCOSDzahhYhkD7eKyCAbBvzsK%2BwxjIs2zR1GoWGtSF6xJfOio%2F2aSkZ45cVRF%2Bou02COIy1wkzaLXchEhi5%2F%2F5iGL3dKSyZ%2B5K8AAnmN4V2PXSrE7n6RLUYMebx80f83BIF4Q6Xg3d7bvIXzteSxIBuTp0j8iLvxxGf%2BwNmOV3JFH3N1IjUkosaoLKIY3LnFQjwu2VWy2capiWmxMdlW%2F%2BtCv%2BmVm5KnMv2h%2B%2FfNn4NhOTBF1zHRq6HVZu9jxCIodQiAIpKuRmGERu3s3EeUoF8G6E671zZlr2hiMvdukOHmeFWndmdiVxb835osDL30Cdg05%2FjaUWp3L%2F1NjQeTYNiOrIXEATDRk%2B4xiSu6TxHG%2F8sdIaUAl8z%2BHIxVXhk0qJnscU95TwJNrBNWPgoJJ%2FUp4m1Y4jZ9Kno1ifsXCoBWWbfcUExIBZCyQSaRvEjvxJ5MobNpCuMAlR5DJd0tApyZIczDKdrCBydfNg7xAAwKnana46ai4o0AoXYzGpXWJz68HMox5Nw%2BJnp%2B0tbmDqNpcaiXeXLayBaIqSqnEO5HB3EtK6PhocnBNUw3YTBvQY6pgHI%2Bgx7yV%2BmS1bWrqazTxm%2FD4PiapAknI5f9qv1yEfMLkR5XZybRs4ii7%2F%2F7D6VWs%2FKuOU%2FOTvSC8m1mmGDxggOTkwcdJ2npLKaaLagl2rThFS9FiAfpG1ZJ6nU%2BjOUKDJWjnkE7zyRVXdLV%2FWBj7RZAJS5PsnUjIMUa%2FJxHb5ba92LgWeGURORSQZw0xk%2BzN3QevFqfri2nrqytfY8j56%2By9LavJXp&X-Amz-Signature=308ef171e436f53b1c8807a45dcccd6415fb91a0d527227f2a78e0e9d5e65e03&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GEWM2FO%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDn74bDIsW25QSxGFkSzpr0cRouoUsr3Dl1Al2tz6WdFAiBmSvvLZp5j%2FradlEmy%2Bi5EIS%2B44YAJvoNQsL8dG6FM6Cr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMu5lY3Y7iHm9FNWJuKtwDNhz%2B7lpDy6Y6K5vjF0Ik02iwoIjF7fwAJB0CaH4jTnz0fwy%2BceWCuSM86zeAhjeKInCOSDzahhYhkD7eKyCAbBvzsK%2BwxjIs2zR1GoWGtSF6xJfOio%2F2aSkZ45cVRF%2Bou02COIy1wkzaLXchEhi5%2F%2F5iGL3dKSyZ%2B5K8AAnmN4V2PXSrE7n6RLUYMebx80f83BIF4Q6Xg3d7bvIXzteSxIBuTp0j8iLvxxGf%2BwNmOV3JFH3N1IjUkosaoLKIY3LnFQjwu2VWy2capiWmxMdlW%2F%2BtCv%2BmVm5KnMv2h%2B%2FfNn4NhOTBF1zHRq6HVZu9jxCIodQiAIpKuRmGERu3s3EeUoF8G6E671zZlr2hiMvdukOHmeFWndmdiVxb835osDL30Cdg05%2FjaUWp3L%2F1NjQeTYNiOrIXEATDRk%2B4xiSu6TxHG%2F8sdIaUAl8z%2BHIxVXhk0qJnscU95TwJNrBNWPgoJJ%2FUp4m1Y4jZ9Kno1ifsXCoBWWbfcUExIBZCyQSaRvEjvxJ5MobNpCuMAlR5DJd0tApyZIczDKdrCBydfNg7xAAwKnana46ai4o0AoXYzGpXWJz68HMox5Nw%2BJnp%2B0tbmDqNpcaiXeXLayBaIqSqnEO5HB3EtK6PhocnBNUw3YTBvQY6pgHI%2Bgx7yV%2BmS1bWrqazTxm%2FD4PiapAknI5f9qv1yEfMLkR5XZybRs4ii7%2F%2F7D6VWs%2FKuOU%2FOTvSC8m1mmGDxggOTkwcdJ2npLKaaLagl2rThFS9FiAfpG1ZJ6nU%2BjOUKDJWjnkE7zyRVXdLV%2FWBj7RZAJS5PsnUjIMUa%2FJxHb5ba92LgWeGURORSQZw0xk%2BzN3QevFqfri2nrqytfY8j56%2By9LavJXp&X-Amz-Signature=0135c20c7471f3a547520af6059677fddccaef3d04f173843ce9b5865e7ff93c&X-Amz-SignedHeaders=host&x-id=GetObject)
