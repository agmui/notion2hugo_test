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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X62GJ2TZ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCXerU%2FyF4C7YRlB%2Bl7K857PBfrKgdABqa5PVdetmTKYQIgMwqKjayoE%2FZ41bKrNLkoxw%2Fl%2BWE6IbyL1yyOkcwoBrMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPwd7O3ArItQrVQJqSrcA9YAfrTzH3k%2BjmwUESHXy5SG8OAkPZdx3rsVc85T7K7daBpmeqhxZ5qIU08JVh%2BOlbHngNaAJv9LaQH%2BNf4Iiy90KP3aFv9nrOjW0Sqhfw1X1JnuTtfI6t52pp3y90dswzs54mAAwps4ByANbJrXaa8TfeK1XRT7WTyXrNQWeY0qgapev0v981NnV31e8t3cY79NnftJl9%2BzET4TUH62nelcgupJJTwQ5jlEtQnm%2B7pQ3T%2BSIHAIVB479fnYIPZ0lumKXHGQaPbsGMx5Pmaiu0Fu1G%2BkE5SRyScIFTlkSdwJYM%2Bfgfdx3wn0sJu039gK5xG6E24Fr8Udtm5wPCTTsJn8QirXjAZBhwvvEjcsc5yMffbXetfRt%2BMNNibuyJslPfIuafr7iOd2snSyOnp4EDhAi7ZXSCu7nSb%2FA2hWD4yPdGlt73R4frvIXqqDVSsv0SZaLHXlm5O4GJIWoEzuFFxWDjWXd4FGcAa5FekVQM0p9n94LWdIgy4Ivk2kS1zARL%2FBLDe2fOXW4PoX%2F630xNvo7LxjYmORW4ZtOStg0w4vOxGSCpM1n%2F08k5%2F1e%2BzOclfz6llI5giksXARXSiuFbsjhbZb1nLWTosM%2FbyhtdzPTqzC7YZorDdtgvz6MJfVsr4GOqUBHsokTKpklqt2k7S2SKwI5d%2FWQIfvHqwPAl3eAXf0ulfsgXK4wf4gbY4TGS4nik03szwRLb3Bt4JuW1zv5Ph6AgV2Cg5kJacs4KOaFxawxZUMpYcJvzR4DdsXzqlTj4sT3JeGpM9ujfQ%2FUHKSP378DVvn8npHAXmLKLrpOFHLjRP1NaR%2FET%2FFhZABgKAKirafavlM6Dm3lNzyNoUxEAS6ymHCfBCN&X-Amz-Signature=4627be3c0a78a5a7ca86e6184681c85ea7c4aa69f7156a7d5a75490e01c9437a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X62GJ2TZ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCXerU%2FyF4C7YRlB%2Bl7K857PBfrKgdABqa5PVdetmTKYQIgMwqKjayoE%2FZ41bKrNLkoxw%2Fl%2BWE6IbyL1yyOkcwoBrMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPwd7O3ArItQrVQJqSrcA9YAfrTzH3k%2BjmwUESHXy5SG8OAkPZdx3rsVc85T7K7daBpmeqhxZ5qIU08JVh%2BOlbHngNaAJv9LaQH%2BNf4Iiy90KP3aFv9nrOjW0Sqhfw1X1JnuTtfI6t52pp3y90dswzs54mAAwps4ByANbJrXaa8TfeK1XRT7WTyXrNQWeY0qgapev0v981NnV31e8t3cY79NnftJl9%2BzET4TUH62nelcgupJJTwQ5jlEtQnm%2B7pQ3T%2BSIHAIVB479fnYIPZ0lumKXHGQaPbsGMx5Pmaiu0Fu1G%2BkE5SRyScIFTlkSdwJYM%2Bfgfdx3wn0sJu039gK5xG6E24Fr8Udtm5wPCTTsJn8QirXjAZBhwvvEjcsc5yMffbXetfRt%2BMNNibuyJslPfIuafr7iOd2snSyOnp4EDhAi7ZXSCu7nSb%2FA2hWD4yPdGlt73R4frvIXqqDVSsv0SZaLHXlm5O4GJIWoEzuFFxWDjWXd4FGcAa5FekVQM0p9n94LWdIgy4Ivk2kS1zARL%2FBLDe2fOXW4PoX%2F630xNvo7LxjYmORW4ZtOStg0w4vOxGSCpM1n%2F08k5%2F1e%2BzOclfz6llI5giksXARXSiuFbsjhbZb1nLWTosM%2FbyhtdzPTqzC7YZorDdtgvz6MJfVsr4GOqUBHsokTKpklqt2k7S2SKwI5d%2FWQIfvHqwPAl3eAXf0ulfsgXK4wf4gbY4TGS4nik03szwRLb3Bt4JuW1zv5Ph6AgV2Cg5kJacs4KOaFxawxZUMpYcJvzR4DdsXzqlTj4sT3JeGpM9ujfQ%2FUHKSP378DVvn8npHAXmLKLrpOFHLjRP1NaR%2FET%2FFhZABgKAKirafavlM6Dm3lNzyNoUxEAS6ymHCfBCN&X-Amz-Signature=f2517cc2b282b7b2a44d4fde5cbec07d5cc995c57781a2bc0f5203ab92d69ac4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X62GJ2TZ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCXerU%2FyF4C7YRlB%2Bl7K857PBfrKgdABqa5PVdetmTKYQIgMwqKjayoE%2FZ41bKrNLkoxw%2Fl%2BWE6IbyL1yyOkcwoBrMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPwd7O3ArItQrVQJqSrcA9YAfrTzH3k%2BjmwUESHXy5SG8OAkPZdx3rsVc85T7K7daBpmeqhxZ5qIU08JVh%2BOlbHngNaAJv9LaQH%2BNf4Iiy90KP3aFv9nrOjW0Sqhfw1X1JnuTtfI6t52pp3y90dswzs54mAAwps4ByANbJrXaa8TfeK1XRT7WTyXrNQWeY0qgapev0v981NnV31e8t3cY79NnftJl9%2BzET4TUH62nelcgupJJTwQ5jlEtQnm%2B7pQ3T%2BSIHAIVB479fnYIPZ0lumKXHGQaPbsGMx5Pmaiu0Fu1G%2BkE5SRyScIFTlkSdwJYM%2Bfgfdx3wn0sJu039gK5xG6E24Fr8Udtm5wPCTTsJn8QirXjAZBhwvvEjcsc5yMffbXetfRt%2BMNNibuyJslPfIuafr7iOd2snSyOnp4EDhAi7ZXSCu7nSb%2FA2hWD4yPdGlt73R4frvIXqqDVSsv0SZaLHXlm5O4GJIWoEzuFFxWDjWXd4FGcAa5FekVQM0p9n94LWdIgy4Ivk2kS1zARL%2FBLDe2fOXW4PoX%2F630xNvo7LxjYmORW4ZtOStg0w4vOxGSCpM1n%2F08k5%2F1e%2BzOclfz6llI5giksXARXSiuFbsjhbZb1nLWTosM%2FbyhtdzPTqzC7YZorDdtgvz6MJfVsr4GOqUBHsokTKpklqt2k7S2SKwI5d%2FWQIfvHqwPAl3eAXf0ulfsgXK4wf4gbY4TGS4nik03szwRLb3Bt4JuW1zv5Ph6AgV2Cg5kJacs4KOaFxawxZUMpYcJvzR4DdsXzqlTj4sT3JeGpM9ujfQ%2FUHKSP378DVvn8npHAXmLKLrpOFHLjRP1NaR%2FET%2FFhZABgKAKirafavlM6Dm3lNzyNoUxEAS6ymHCfBCN&X-Amz-Signature=0f7205dfdbc5b89c09be949d02f4f7af55438951f6b30f80ce461ee8f00c9118&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X62GJ2TZ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCXerU%2FyF4C7YRlB%2Bl7K857PBfrKgdABqa5PVdetmTKYQIgMwqKjayoE%2FZ41bKrNLkoxw%2Fl%2BWE6IbyL1yyOkcwoBrMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPwd7O3ArItQrVQJqSrcA9YAfrTzH3k%2BjmwUESHXy5SG8OAkPZdx3rsVc85T7K7daBpmeqhxZ5qIU08JVh%2BOlbHngNaAJv9LaQH%2BNf4Iiy90KP3aFv9nrOjW0Sqhfw1X1JnuTtfI6t52pp3y90dswzs54mAAwps4ByANbJrXaa8TfeK1XRT7WTyXrNQWeY0qgapev0v981NnV31e8t3cY79NnftJl9%2BzET4TUH62nelcgupJJTwQ5jlEtQnm%2B7pQ3T%2BSIHAIVB479fnYIPZ0lumKXHGQaPbsGMx5Pmaiu0Fu1G%2BkE5SRyScIFTlkSdwJYM%2Bfgfdx3wn0sJu039gK5xG6E24Fr8Udtm5wPCTTsJn8QirXjAZBhwvvEjcsc5yMffbXetfRt%2BMNNibuyJslPfIuafr7iOd2snSyOnp4EDhAi7ZXSCu7nSb%2FA2hWD4yPdGlt73R4frvIXqqDVSsv0SZaLHXlm5O4GJIWoEzuFFxWDjWXd4FGcAa5FekVQM0p9n94LWdIgy4Ivk2kS1zARL%2FBLDe2fOXW4PoX%2F630xNvo7LxjYmORW4ZtOStg0w4vOxGSCpM1n%2F08k5%2F1e%2BzOclfz6llI5giksXARXSiuFbsjhbZb1nLWTosM%2FbyhtdzPTqzC7YZorDdtgvz6MJfVsr4GOqUBHsokTKpklqt2k7S2SKwI5d%2FWQIfvHqwPAl3eAXf0ulfsgXK4wf4gbY4TGS4nik03szwRLb3Bt4JuW1zv5Ph6AgV2Cg5kJacs4KOaFxawxZUMpYcJvzR4DdsXzqlTj4sT3JeGpM9ujfQ%2FUHKSP378DVvn8npHAXmLKLrpOFHLjRP1NaR%2FET%2FFhZABgKAKirafavlM6Dm3lNzyNoUxEAS6ymHCfBCN&X-Amz-Signature=5c5752e9de04d65c7a4729991e13c53239d311720e2fbfdba4576b68ae65b2dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X62GJ2TZ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCXerU%2FyF4C7YRlB%2Bl7K857PBfrKgdABqa5PVdetmTKYQIgMwqKjayoE%2FZ41bKrNLkoxw%2Fl%2BWE6IbyL1yyOkcwoBrMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPwd7O3ArItQrVQJqSrcA9YAfrTzH3k%2BjmwUESHXy5SG8OAkPZdx3rsVc85T7K7daBpmeqhxZ5qIU08JVh%2BOlbHngNaAJv9LaQH%2BNf4Iiy90KP3aFv9nrOjW0Sqhfw1X1JnuTtfI6t52pp3y90dswzs54mAAwps4ByANbJrXaa8TfeK1XRT7WTyXrNQWeY0qgapev0v981NnV31e8t3cY79NnftJl9%2BzET4TUH62nelcgupJJTwQ5jlEtQnm%2B7pQ3T%2BSIHAIVB479fnYIPZ0lumKXHGQaPbsGMx5Pmaiu0Fu1G%2BkE5SRyScIFTlkSdwJYM%2Bfgfdx3wn0sJu039gK5xG6E24Fr8Udtm5wPCTTsJn8QirXjAZBhwvvEjcsc5yMffbXetfRt%2BMNNibuyJslPfIuafr7iOd2snSyOnp4EDhAi7ZXSCu7nSb%2FA2hWD4yPdGlt73R4frvIXqqDVSsv0SZaLHXlm5O4GJIWoEzuFFxWDjWXd4FGcAa5FekVQM0p9n94LWdIgy4Ivk2kS1zARL%2FBLDe2fOXW4PoX%2F630xNvo7LxjYmORW4ZtOStg0w4vOxGSCpM1n%2F08k5%2F1e%2BzOclfz6llI5giksXARXSiuFbsjhbZb1nLWTosM%2FbyhtdzPTqzC7YZorDdtgvz6MJfVsr4GOqUBHsokTKpklqt2k7S2SKwI5d%2FWQIfvHqwPAl3eAXf0ulfsgXK4wf4gbY4TGS4nik03szwRLb3Bt4JuW1zv5Ph6AgV2Cg5kJacs4KOaFxawxZUMpYcJvzR4DdsXzqlTj4sT3JeGpM9ujfQ%2FUHKSP378DVvn8npHAXmLKLrpOFHLjRP1NaR%2FET%2FFhZABgKAKirafavlM6Dm3lNzyNoUxEAS6ymHCfBCN&X-Amz-Signature=438f143ab8769c6456bafff6b935dfe23071dc6fb8c2b6fcbdd852a61115e09f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X62GJ2TZ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCXerU%2FyF4C7YRlB%2Bl7K857PBfrKgdABqa5PVdetmTKYQIgMwqKjayoE%2FZ41bKrNLkoxw%2Fl%2BWE6IbyL1yyOkcwoBrMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPwd7O3ArItQrVQJqSrcA9YAfrTzH3k%2BjmwUESHXy5SG8OAkPZdx3rsVc85T7K7daBpmeqhxZ5qIU08JVh%2BOlbHngNaAJv9LaQH%2BNf4Iiy90KP3aFv9nrOjW0Sqhfw1X1JnuTtfI6t52pp3y90dswzs54mAAwps4ByANbJrXaa8TfeK1XRT7WTyXrNQWeY0qgapev0v981NnV31e8t3cY79NnftJl9%2BzET4TUH62nelcgupJJTwQ5jlEtQnm%2B7pQ3T%2BSIHAIVB479fnYIPZ0lumKXHGQaPbsGMx5Pmaiu0Fu1G%2BkE5SRyScIFTlkSdwJYM%2Bfgfdx3wn0sJu039gK5xG6E24Fr8Udtm5wPCTTsJn8QirXjAZBhwvvEjcsc5yMffbXetfRt%2BMNNibuyJslPfIuafr7iOd2snSyOnp4EDhAi7ZXSCu7nSb%2FA2hWD4yPdGlt73R4frvIXqqDVSsv0SZaLHXlm5O4GJIWoEzuFFxWDjWXd4FGcAa5FekVQM0p9n94LWdIgy4Ivk2kS1zARL%2FBLDe2fOXW4PoX%2F630xNvo7LxjYmORW4ZtOStg0w4vOxGSCpM1n%2F08k5%2F1e%2BzOclfz6llI5giksXARXSiuFbsjhbZb1nLWTosM%2FbyhtdzPTqzC7YZorDdtgvz6MJfVsr4GOqUBHsokTKpklqt2k7S2SKwI5d%2FWQIfvHqwPAl3eAXf0ulfsgXK4wf4gbY4TGS4nik03szwRLb3Bt4JuW1zv5Ph6AgV2Cg5kJacs4KOaFxawxZUMpYcJvzR4DdsXzqlTj4sT3JeGpM9ujfQ%2FUHKSP378DVvn8npHAXmLKLrpOFHLjRP1NaR%2FET%2FFhZABgKAKirafavlM6Dm3lNzyNoUxEAS6ymHCfBCN&X-Amz-Signature=0d7620ebf78f02ded7c9d7d03dc2a604882886859616d97dbf54075ea71e0b8b&X-Amz-SignedHeaders=host&x-id=GetObject)
