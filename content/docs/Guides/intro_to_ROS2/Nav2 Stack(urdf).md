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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQNRWACJ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDiMLTtUuYrTxa%2BET%2B7kM%2FRhkZLxh4dsUnHk%2B2JFMqAQIhAMyxL%2B3PLJaQ1Y0W47ceN%2BV27CvM6RG7Tz5uqpIFkEbOKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8P6M%2Ba%2Fp%2Bznt4uHkq3AM3bxzgdBRWLX8IKf4MWeUwKku633adN5B%2BuSI3A6gHpjQuoR7NC6yfd2WVOr0Nx1wE4N20oGcQhDMiLy5fY%2B0nHXZaybZ3V8XuM16h0L6RjSDGfGElBSb1kwCt0k2UzEdPPO%2F%2BU%2B1zZmGYH2eGvlyjejuJ%2FRSZX0vzzKNrd7rEsl3j1LgspktsW%2F2uickdNRXfNdnPesDgdJC3%2BcR3OUC0Gr3deLDZxYEut6Y5aEBcKgHO4v9fRIePawV0Io8BkCDRM701i0w%2FtwJ7V%2Bi7aS1b%2FrS73xq5u3gsKT4tSayOLXCLDwPYiMK4w9rKk9GUc6OQMBRfp68Ymwv6o2Iyt2zmH8nTDT0F7UkVbTHE3jaUTNqW2hM4L2EO9RPEgF0r3yhLRGL1DICR8z5Xh3HVYFegOPpZ55m1NZg7D2GpdSQDqXgXlIYlw2C65SceejEXRD8qyu%2BlEGlLuUWVJJpDOAUomE3QcT3Hl1XTjAjGUFnv7JZeAJnqqEgpDHV3sOxQ0m8TObaWRVCB7XJhFn57gWYoZQfhTyzXeV2y8nCKSvYwsIpv8gre7pswPIKsyXpwKKW1fGx02o%2F%2FPibEzPxk6WkcANwNiZYwJoO9zEmJJDIxvi%2BB0DHyjy8%2FD%2Fs6ATCAl%2BnBBjqkAdQbDj5k2PHOmgXcGajkMeKyBK99fR1fZJXinegdwyzUVUQgPPCNTqr%2BzYSeNnf11S1prMOx5Yo38fNHhSqRMHXu%2F%2FLDyKBvY5ZHt49DNlaziq3U62ggnQq3Y5ZAUOyu5QuGzRQocmlInONktGXPc%2FSu2YDKxgXq5loaIiWl1RHD7Xxp0B8BUuQvzbeoGl3GlG6qhkQx8k9CWYeOUlrwqo7Kx9lB&X-Amz-Signature=4d52be27d0d140df79be5012c89363d4ca7de27548130a74d1893f2481f220ff&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQNRWACJ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDiMLTtUuYrTxa%2BET%2B7kM%2FRhkZLxh4dsUnHk%2B2JFMqAQIhAMyxL%2B3PLJaQ1Y0W47ceN%2BV27CvM6RG7Tz5uqpIFkEbOKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8P6M%2Ba%2Fp%2Bznt4uHkq3AM3bxzgdBRWLX8IKf4MWeUwKku633adN5B%2BuSI3A6gHpjQuoR7NC6yfd2WVOr0Nx1wE4N20oGcQhDMiLy5fY%2B0nHXZaybZ3V8XuM16h0L6RjSDGfGElBSb1kwCt0k2UzEdPPO%2F%2BU%2B1zZmGYH2eGvlyjejuJ%2FRSZX0vzzKNrd7rEsl3j1LgspktsW%2F2uickdNRXfNdnPesDgdJC3%2BcR3OUC0Gr3deLDZxYEut6Y5aEBcKgHO4v9fRIePawV0Io8BkCDRM701i0w%2FtwJ7V%2Bi7aS1b%2FrS73xq5u3gsKT4tSayOLXCLDwPYiMK4w9rKk9GUc6OQMBRfp68Ymwv6o2Iyt2zmH8nTDT0F7UkVbTHE3jaUTNqW2hM4L2EO9RPEgF0r3yhLRGL1DICR8z5Xh3HVYFegOPpZ55m1NZg7D2GpdSQDqXgXlIYlw2C65SceejEXRD8qyu%2BlEGlLuUWVJJpDOAUomE3QcT3Hl1XTjAjGUFnv7JZeAJnqqEgpDHV3sOxQ0m8TObaWRVCB7XJhFn57gWYoZQfhTyzXeV2y8nCKSvYwsIpv8gre7pswPIKsyXpwKKW1fGx02o%2F%2FPibEzPxk6WkcANwNiZYwJoO9zEmJJDIxvi%2BB0DHyjy8%2FD%2Fs6ATCAl%2BnBBjqkAdQbDj5k2PHOmgXcGajkMeKyBK99fR1fZJXinegdwyzUVUQgPPCNTqr%2BzYSeNnf11S1prMOx5Yo38fNHhSqRMHXu%2F%2FLDyKBvY5ZHt49DNlaziq3U62ggnQq3Y5ZAUOyu5QuGzRQocmlInONktGXPc%2FSu2YDKxgXq5loaIiWl1RHD7Xxp0B8BUuQvzbeoGl3GlG6qhkQx8k9CWYeOUlrwqo7Kx9lB&X-Amz-Signature=a908f1dea30a9913e5ddb0ab4b2a09b613e31384ace25ca695c593a90c3ebc1d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQNRWACJ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDiMLTtUuYrTxa%2BET%2B7kM%2FRhkZLxh4dsUnHk%2B2JFMqAQIhAMyxL%2B3PLJaQ1Y0W47ceN%2BV27CvM6RG7Tz5uqpIFkEbOKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8P6M%2Ba%2Fp%2Bznt4uHkq3AM3bxzgdBRWLX8IKf4MWeUwKku633adN5B%2BuSI3A6gHpjQuoR7NC6yfd2WVOr0Nx1wE4N20oGcQhDMiLy5fY%2B0nHXZaybZ3V8XuM16h0L6RjSDGfGElBSb1kwCt0k2UzEdPPO%2F%2BU%2B1zZmGYH2eGvlyjejuJ%2FRSZX0vzzKNrd7rEsl3j1LgspktsW%2F2uickdNRXfNdnPesDgdJC3%2BcR3OUC0Gr3deLDZxYEut6Y5aEBcKgHO4v9fRIePawV0Io8BkCDRM701i0w%2FtwJ7V%2Bi7aS1b%2FrS73xq5u3gsKT4tSayOLXCLDwPYiMK4w9rKk9GUc6OQMBRfp68Ymwv6o2Iyt2zmH8nTDT0F7UkVbTHE3jaUTNqW2hM4L2EO9RPEgF0r3yhLRGL1DICR8z5Xh3HVYFegOPpZ55m1NZg7D2GpdSQDqXgXlIYlw2C65SceejEXRD8qyu%2BlEGlLuUWVJJpDOAUomE3QcT3Hl1XTjAjGUFnv7JZeAJnqqEgpDHV3sOxQ0m8TObaWRVCB7XJhFn57gWYoZQfhTyzXeV2y8nCKSvYwsIpv8gre7pswPIKsyXpwKKW1fGx02o%2F%2FPibEzPxk6WkcANwNiZYwJoO9zEmJJDIxvi%2BB0DHyjy8%2FD%2Fs6ATCAl%2BnBBjqkAdQbDj5k2PHOmgXcGajkMeKyBK99fR1fZJXinegdwyzUVUQgPPCNTqr%2BzYSeNnf11S1prMOx5Yo38fNHhSqRMHXu%2F%2FLDyKBvY5ZHt49DNlaziq3U62ggnQq3Y5ZAUOyu5QuGzRQocmlInONktGXPc%2FSu2YDKxgXq5loaIiWl1RHD7Xxp0B8BUuQvzbeoGl3GlG6qhkQx8k9CWYeOUlrwqo7Kx9lB&X-Amz-Signature=e7e31ac443a50a514fe00c39d02b153998eff93357108912a4da9ad485afb9e2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQNRWACJ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDiMLTtUuYrTxa%2BET%2B7kM%2FRhkZLxh4dsUnHk%2B2JFMqAQIhAMyxL%2B3PLJaQ1Y0W47ceN%2BV27CvM6RG7Tz5uqpIFkEbOKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8P6M%2Ba%2Fp%2Bznt4uHkq3AM3bxzgdBRWLX8IKf4MWeUwKku633adN5B%2BuSI3A6gHpjQuoR7NC6yfd2WVOr0Nx1wE4N20oGcQhDMiLy5fY%2B0nHXZaybZ3V8XuM16h0L6RjSDGfGElBSb1kwCt0k2UzEdPPO%2F%2BU%2B1zZmGYH2eGvlyjejuJ%2FRSZX0vzzKNrd7rEsl3j1LgspktsW%2F2uickdNRXfNdnPesDgdJC3%2BcR3OUC0Gr3deLDZxYEut6Y5aEBcKgHO4v9fRIePawV0Io8BkCDRM701i0w%2FtwJ7V%2Bi7aS1b%2FrS73xq5u3gsKT4tSayOLXCLDwPYiMK4w9rKk9GUc6OQMBRfp68Ymwv6o2Iyt2zmH8nTDT0F7UkVbTHE3jaUTNqW2hM4L2EO9RPEgF0r3yhLRGL1DICR8z5Xh3HVYFegOPpZ55m1NZg7D2GpdSQDqXgXlIYlw2C65SceejEXRD8qyu%2BlEGlLuUWVJJpDOAUomE3QcT3Hl1XTjAjGUFnv7JZeAJnqqEgpDHV3sOxQ0m8TObaWRVCB7XJhFn57gWYoZQfhTyzXeV2y8nCKSvYwsIpv8gre7pswPIKsyXpwKKW1fGx02o%2F%2FPibEzPxk6WkcANwNiZYwJoO9zEmJJDIxvi%2BB0DHyjy8%2FD%2Fs6ATCAl%2BnBBjqkAdQbDj5k2PHOmgXcGajkMeKyBK99fR1fZJXinegdwyzUVUQgPPCNTqr%2BzYSeNnf11S1prMOx5Yo38fNHhSqRMHXu%2F%2FLDyKBvY5ZHt49DNlaziq3U62ggnQq3Y5ZAUOyu5QuGzRQocmlInONktGXPc%2FSu2YDKxgXq5loaIiWl1RHD7Xxp0B8BUuQvzbeoGl3GlG6qhkQx8k9CWYeOUlrwqo7Kx9lB&X-Amz-Signature=d2fa8e45813a88b552199069322d645262d1307239920a3640b00b28bf26e87f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQNRWACJ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDiMLTtUuYrTxa%2BET%2B7kM%2FRhkZLxh4dsUnHk%2B2JFMqAQIhAMyxL%2B3PLJaQ1Y0W47ceN%2BV27CvM6RG7Tz5uqpIFkEbOKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8P6M%2Ba%2Fp%2Bznt4uHkq3AM3bxzgdBRWLX8IKf4MWeUwKku633adN5B%2BuSI3A6gHpjQuoR7NC6yfd2WVOr0Nx1wE4N20oGcQhDMiLy5fY%2B0nHXZaybZ3V8XuM16h0L6RjSDGfGElBSb1kwCt0k2UzEdPPO%2F%2BU%2B1zZmGYH2eGvlyjejuJ%2FRSZX0vzzKNrd7rEsl3j1LgspktsW%2F2uickdNRXfNdnPesDgdJC3%2BcR3OUC0Gr3deLDZxYEut6Y5aEBcKgHO4v9fRIePawV0Io8BkCDRM701i0w%2FtwJ7V%2Bi7aS1b%2FrS73xq5u3gsKT4tSayOLXCLDwPYiMK4w9rKk9GUc6OQMBRfp68Ymwv6o2Iyt2zmH8nTDT0F7UkVbTHE3jaUTNqW2hM4L2EO9RPEgF0r3yhLRGL1DICR8z5Xh3HVYFegOPpZ55m1NZg7D2GpdSQDqXgXlIYlw2C65SceejEXRD8qyu%2BlEGlLuUWVJJpDOAUomE3QcT3Hl1XTjAjGUFnv7JZeAJnqqEgpDHV3sOxQ0m8TObaWRVCB7XJhFn57gWYoZQfhTyzXeV2y8nCKSvYwsIpv8gre7pswPIKsyXpwKKW1fGx02o%2F%2FPibEzPxk6WkcANwNiZYwJoO9zEmJJDIxvi%2BB0DHyjy8%2FD%2Fs6ATCAl%2BnBBjqkAdQbDj5k2PHOmgXcGajkMeKyBK99fR1fZJXinegdwyzUVUQgPPCNTqr%2BzYSeNnf11S1prMOx5Yo38fNHhSqRMHXu%2F%2FLDyKBvY5ZHt49DNlaziq3U62ggnQq3Y5ZAUOyu5QuGzRQocmlInONktGXPc%2FSu2YDKxgXq5loaIiWl1RHD7Xxp0B8BUuQvzbeoGl3GlG6qhkQx8k9CWYeOUlrwqo7Kx9lB&X-Amz-Signature=0cb99582090b78d6cab72215639ebad66a6df40cac74ce56fbc562c4e7b78a8d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQNRWACJ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDiMLTtUuYrTxa%2BET%2B7kM%2FRhkZLxh4dsUnHk%2B2JFMqAQIhAMyxL%2B3PLJaQ1Y0W47ceN%2BV27CvM6RG7Tz5uqpIFkEbOKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8P6M%2Ba%2Fp%2Bznt4uHkq3AM3bxzgdBRWLX8IKf4MWeUwKku633adN5B%2BuSI3A6gHpjQuoR7NC6yfd2WVOr0Nx1wE4N20oGcQhDMiLy5fY%2B0nHXZaybZ3V8XuM16h0L6RjSDGfGElBSb1kwCt0k2UzEdPPO%2F%2BU%2B1zZmGYH2eGvlyjejuJ%2FRSZX0vzzKNrd7rEsl3j1LgspktsW%2F2uickdNRXfNdnPesDgdJC3%2BcR3OUC0Gr3deLDZxYEut6Y5aEBcKgHO4v9fRIePawV0Io8BkCDRM701i0w%2FtwJ7V%2Bi7aS1b%2FrS73xq5u3gsKT4tSayOLXCLDwPYiMK4w9rKk9GUc6OQMBRfp68Ymwv6o2Iyt2zmH8nTDT0F7UkVbTHE3jaUTNqW2hM4L2EO9RPEgF0r3yhLRGL1DICR8z5Xh3HVYFegOPpZ55m1NZg7D2GpdSQDqXgXlIYlw2C65SceejEXRD8qyu%2BlEGlLuUWVJJpDOAUomE3QcT3Hl1XTjAjGUFnv7JZeAJnqqEgpDHV3sOxQ0m8TObaWRVCB7XJhFn57gWYoZQfhTyzXeV2y8nCKSvYwsIpv8gre7pswPIKsyXpwKKW1fGx02o%2F%2FPibEzPxk6WkcANwNiZYwJoO9zEmJJDIxvi%2BB0DHyjy8%2FD%2Fs6ATCAl%2BnBBjqkAdQbDj5k2PHOmgXcGajkMeKyBK99fR1fZJXinegdwyzUVUQgPPCNTqr%2BzYSeNnf11S1prMOx5Yo38fNHhSqRMHXu%2F%2FLDyKBvY5ZHt49DNlaziq3U62ggnQq3Y5ZAUOyu5QuGzRQocmlInONktGXPc%2FSu2YDKxgXq5loaIiWl1RHD7Xxp0B8BUuQvzbeoGl3GlG6qhkQx8k9CWYeOUlrwqo7Kx9lB&X-Amz-Signature=56e4aac1e3301fbfc10cb841fb0bcc89a50df6aed5ae12ed82c078f1eaf44b16&X-Amz-SignedHeaders=host&x-id=GetObject)
