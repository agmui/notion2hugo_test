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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLM2VONL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDawj6WqGUakY8ymL2vwCU%2BxMJqIrTFjaRqFBkJd3amvQIhAJGy%2BLGmfBsYjtd6yvOMkVCZdmoYPpjQ3QxytiepIOL5Kv8DCGUQABoMNjM3NDIzMTgzODA1Igxm%2BUweF99%2FIPqycQcq3AN579QNT4uIVGfUW6g2nb8O34NeCYMTji%2B22drJgLN6c68yGGKHXZBNjqDHS8cl7%2FMPvGG10%2BZVRP5rhFtNZxKIzReHSD41AlvlTB5RPQk8hdyxpBnr6l4lwuou4jtsMd%2BNn4wgWgucAMejbtoodvP2di6lvxJqbbVrQcxYv5UD%2BKXMsEO3RADOqzqg3WDiplA8GBFyvESpuDATnsZsT1Lm3dDziK%2F9j1B401hoWMFJl0BG83PY8PCt2XXZJeCnD3XvnZk9luVq0OtXGyOgkPzThE%2FkDTFJA08ObKcbgORQMvPNXFE%2BaBilXn6MMlKlyM4ojbeSXt1XMkHyOAs9akBRAS1JoeDOAG8sS7jwB2pD486Mi1VpYhpPSOXTA0g58VUS%2FKcuVGpjBHumW%2F9GRJpRCrdQkmm2y4P9sPlJlEyPQo%2Bq7mICgiIwinMgCtye7J7OPWtC%2BuN%2B4QmYUMdBNJKtLdwItFh3E8RhJz8HVUeFXmx0mjYkuMmfDeTCNJsFFxd6lx7R2%2B60UppggNMetTckA7sN3s5HuwBlfobdwV4rNBIvlBEl6heomhPAZDbwea7so%2F4g0OyAWIq90uLtGATJOp9JEaa0YelI1vLERiSMNPvhmkMg0yPilmSWWjDzyvbCBjqkAZaJBRv5y1S3%2Fv19tskKxVcVC4EH%2BfcLyThuzHSKJgNK1gumOhZg0Fb%2FFoDYuofx8gtCO3TnRU9sA9k5Yjx4fgJNGM1t7h6dJ8K73A%2FcEWyKUuvuY0EMBWRyU9GqsHxnT6lFBYEfolqndHO9S2fUwGRgcI6XfC5x%2BfXrqCE1SoC8ZSN00jhkARJ4F0SdzAJ9mPywFzCHomp7xxL%2BwXwEcf1gWz%2BJ&X-Amz-Signature=6a040ba62ed4c6a242561c89dc9ef3566686f47fd80f222929ee46c3997cec18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLM2VONL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDawj6WqGUakY8ymL2vwCU%2BxMJqIrTFjaRqFBkJd3amvQIhAJGy%2BLGmfBsYjtd6yvOMkVCZdmoYPpjQ3QxytiepIOL5Kv8DCGUQABoMNjM3NDIzMTgzODA1Igxm%2BUweF99%2FIPqycQcq3AN579QNT4uIVGfUW6g2nb8O34NeCYMTji%2B22drJgLN6c68yGGKHXZBNjqDHS8cl7%2FMPvGG10%2BZVRP5rhFtNZxKIzReHSD41AlvlTB5RPQk8hdyxpBnr6l4lwuou4jtsMd%2BNn4wgWgucAMejbtoodvP2di6lvxJqbbVrQcxYv5UD%2BKXMsEO3RADOqzqg3WDiplA8GBFyvESpuDATnsZsT1Lm3dDziK%2F9j1B401hoWMFJl0BG83PY8PCt2XXZJeCnD3XvnZk9luVq0OtXGyOgkPzThE%2FkDTFJA08ObKcbgORQMvPNXFE%2BaBilXn6MMlKlyM4ojbeSXt1XMkHyOAs9akBRAS1JoeDOAG8sS7jwB2pD486Mi1VpYhpPSOXTA0g58VUS%2FKcuVGpjBHumW%2F9GRJpRCrdQkmm2y4P9sPlJlEyPQo%2Bq7mICgiIwinMgCtye7J7OPWtC%2BuN%2B4QmYUMdBNJKtLdwItFh3E8RhJz8HVUeFXmx0mjYkuMmfDeTCNJsFFxd6lx7R2%2B60UppggNMetTckA7sN3s5HuwBlfobdwV4rNBIvlBEl6heomhPAZDbwea7so%2F4g0OyAWIq90uLtGATJOp9JEaa0YelI1vLERiSMNPvhmkMg0yPilmSWWjDzyvbCBjqkAZaJBRv5y1S3%2Fv19tskKxVcVC4EH%2BfcLyThuzHSKJgNK1gumOhZg0Fb%2FFoDYuofx8gtCO3TnRU9sA9k5Yjx4fgJNGM1t7h6dJ8K73A%2FcEWyKUuvuY0EMBWRyU9GqsHxnT6lFBYEfolqndHO9S2fUwGRgcI6XfC5x%2BfXrqCE1SoC8ZSN00jhkARJ4F0SdzAJ9mPywFzCHomp7xxL%2BwXwEcf1gWz%2BJ&X-Amz-Signature=94506ad9aac0b9d78d81c5f4885857e44e0f5857b8b1d406512fe56fd53371f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLM2VONL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDawj6WqGUakY8ymL2vwCU%2BxMJqIrTFjaRqFBkJd3amvQIhAJGy%2BLGmfBsYjtd6yvOMkVCZdmoYPpjQ3QxytiepIOL5Kv8DCGUQABoMNjM3NDIzMTgzODA1Igxm%2BUweF99%2FIPqycQcq3AN579QNT4uIVGfUW6g2nb8O34NeCYMTji%2B22drJgLN6c68yGGKHXZBNjqDHS8cl7%2FMPvGG10%2BZVRP5rhFtNZxKIzReHSD41AlvlTB5RPQk8hdyxpBnr6l4lwuou4jtsMd%2BNn4wgWgucAMejbtoodvP2di6lvxJqbbVrQcxYv5UD%2BKXMsEO3RADOqzqg3WDiplA8GBFyvESpuDATnsZsT1Lm3dDziK%2F9j1B401hoWMFJl0BG83PY8PCt2XXZJeCnD3XvnZk9luVq0OtXGyOgkPzThE%2FkDTFJA08ObKcbgORQMvPNXFE%2BaBilXn6MMlKlyM4ojbeSXt1XMkHyOAs9akBRAS1JoeDOAG8sS7jwB2pD486Mi1VpYhpPSOXTA0g58VUS%2FKcuVGpjBHumW%2F9GRJpRCrdQkmm2y4P9sPlJlEyPQo%2Bq7mICgiIwinMgCtye7J7OPWtC%2BuN%2B4QmYUMdBNJKtLdwItFh3E8RhJz8HVUeFXmx0mjYkuMmfDeTCNJsFFxd6lx7R2%2B60UppggNMetTckA7sN3s5HuwBlfobdwV4rNBIvlBEl6heomhPAZDbwea7so%2F4g0OyAWIq90uLtGATJOp9JEaa0YelI1vLERiSMNPvhmkMg0yPilmSWWjDzyvbCBjqkAZaJBRv5y1S3%2Fv19tskKxVcVC4EH%2BfcLyThuzHSKJgNK1gumOhZg0Fb%2FFoDYuofx8gtCO3TnRU9sA9k5Yjx4fgJNGM1t7h6dJ8K73A%2FcEWyKUuvuY0EMBWRyU9GqsHxnT6lFBYEfolqndHO9S2fUwGRgcI6XfC5x%2BfXrqCE1SoC8ZSN00jhkARJ4F0SdzAJ9mPywFzCHomp7xxL%2BwXwEcf1gWz%2BJ&X-Amz-Signature=87da158746a49711490e1e87d328e0496ad902811a5c4bc5b56ca63a6cd6584d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLM2VONL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDawj6WqGUakY8ymL2vwCU%2BxMJqIrTFjaRqFBkJd3amvQIhAJGy%2BLGmfBsYjtd6yvOMkVCZdmoYPpjQ3QxytiepIOL5Kv8DCGUQABoMNjM3NDIzMTgzODA1Igxm%2BUweF99%2FIPqycQcq3AN579QNT4uIVGfUW6g2nb8O34NeCYMTji%2B22drJgLN6c68yGGKHXZBNjqDHS8cl7%2FMPvGG10%2BZVRP5rhFtNZxKIzReHSD41AlvlTB5RPQk8hdyxpBnr6l4lwuou4jtsMd%2BNn4wgWgucAMejbtoodvP2di6lvxJqbbVrQcxYv5UD%2BKXMsEO3RADOqzqg3WDiplA8GBFyvESpuDATnsZsT1Lm3dDziK%2F9j1B401hoWMFJl0BG83PY8PCt2XXZJeCnD3XvnZk9luVq0OtXGyOgkPzThE%2FkDTFJA08ObKcbgORQMvPNXFE%2BaBilXn6MMlKlyM4ojbeSXt1XMkHyOAs9akBRAS1JoeDOAG8sS7jwB2pD486Mi1VpYhpPSOXTA0g58VUS%2FKcuVGpjBHumW%2F9GRJpRCrdQkmm2y4P9sPlJlEyPQo%2Bq7mICgiIwinMgCtye7J7OPWtC%2BuN%2B4QmYUMdBNJKtLdwItFh3E8RhJz8HVUeFXmx0mjYkuMmfDeTCNJsFFxd6lx7R2%2B60UppggNMetTckA7sN3s5HuwBlfobdwV4rNBIvlBEl6heomhPAZDbwea7so%2F4g0OyAWIq90uLtGATJOp9JEaa0YelI1vLERiSMNPvhmkMg0yPilmSWWjDzyvbCBjqkAZaJBRv5y1S3%2Fv19tskKxVcVC4EH%2BfcLyThuzHSKJgNK1gumOhZg0Fb%2FFoDYuofx8gtCO3TnRU9sA9k5Yjx4fgJNGM1t7h6dJ8K73A%2FcEWyKUuvuY0EMBWRyU9GqsHxnT6lFBYEfolqndHO9S2fUwGRgcI6XfC5x%2BfXrqCE1SoC8ZSN00jhkARJ4F0SdzAJ9mPywFzCHomp7xxL%2BwXwEcf1gWz%2BJ&X-Amz-Signature=cbeb110de3b0295de381a4ebec61ecc4ee1bde8db1b27dc899ea96c236310782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLM2VONL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDawj6WqGUakY8ymL2vwCU%2BxMJqIrTFjaRqFBkJd3amvQIhAJGy%2BLGmfBsYjtd6yvOMkVCZdmoYPpjQ3QxytiepIOL5Kv8DCGUQABoMNjM3NDIzMTgzODA1Igxm%2BUweF99%2FIPqycQcq3AN579QNT4uIVGfUW6g2nb8O34NeCYMTji%2B22drJgLN6c68yGGKHXZBNjqDHS8cl7%2FMPvGG10%2BZVRP5rhFtNZxKIzReHSD41AlvlTB5RPQk8hdyxpBnr6l4lwuou4jtsMd%2BNn4wgWgucAMejbtoodvP2di6lvxJqbbVrQcxYv5UD%2BKXMsEO3RADOqzqg3WDiplA8GBFyvESpuDATnsZsT1Lm3dDziK%2F9j1B401hoWMFJl0BG83PY8PCt2XXZJeCnD3XvnZk9luVq0OtXGyOgkPzThE%2FkDTFJA08ObKcbgORQMvPNXFE%2BaBilXn6MMlKlyM4ojbeSXt1XMkHyOAs9akBRAS1JoeDOAG8sS7jwB2pD486Mi1VpYhpPSOXTA0g58VUS%2FKcuVGpjBHumW%2F9GRJpRCrdQkmm2y4P9sPlJlEyPQo%2Bq7mICgiIwinMgCtye7J7OPWtC%2BuN%2B4QmYUMdBNJKtLdwItFh3E8RhJz8HVUeFXmx0mjYkuMmfDeTCNJsFFxd6lx7R2%2B60UppggNMetTckA7sN3s5HuwBlfobdwV4rNBIvlBEl6heomhPAZDbwea7so%2F4g0OyAWIq90uLtGATJOp9JEaa0YelI1vLERiSMNPvhmkMg0yPilmSWWjDzyvbCBjqkAZaJBRv5y1S3%2Fv19tskKxVcVC4EH%2BfcLyThuzHSKJgNK1gumOhZg0Fb%2FFoDYuofx8gtCO3TnRU9sA9k5Yjx4fgJNGM1t7h6dJ8K73A%2FcEWyKUuvuY0EMBWRyU9GqsHxnT6lFBYEfolqndHO9S2fUwGRgcI6XfC5x%2BfXrqCE1SoC8ZSN00jhkARJ4F0SdzAJ9mPywFzCHomp7xxL%2BwXwEcf1gWz%2BJ&X-Amz-Signature=bd8a2a73592086d2fbafdd7417b92bc753091f8b16fc4125461c58e2960cdd95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLM2VONL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDawj6WqGUakY8ymL2vwCU%2BxMJqIrTFjaRqFBkJd3amvQIhAJGy%2BLGmfBsYjtd6yvOMkVCZdmoYPpjQ3QxytiepIOL5Kv8DCGUQABoMNjM3NDIzMTgzODA1Igxm%2BUweF99%2FIPqycQcq3AN579QNT4uIVGfUW6g2nb8O34NeCYMTji%2B22drJgLN6c68yGGKHXZBNjqDHS8cl7%2FMPvGG10%2BZVRP5rhFtNZxKIzReHSD41AlvlTB5RPQk8hdyxpBnr6l4lwuou4jtsMd%2BNn4wgWgucAMejbtoodvP2di6lvxJqbbVrQcxYv5UD%2BKXMsEO3RADOqzqg3WDiplA8GBFyvESpuDATnsZsT1Lm3dDziK%2F9j1B401hoWMFJl0BG83PY8PCt2XXZJeCnD3XvnZk9luVq0OtXGyOgkPzThE%2FkDTFJA08ObKcbgORQMvPNXFE%2BaBilXn6MMlKlyM4ojbeSXt1XMkHyOAs9akBRAS1JoeDOAG8sS7jwB2pD486Mi1VpYhpPSOXTA0g58VUS%2FKcuVGpjBHumW%2F9GRJpRCrdQkmm2y4P9sPlJlEyPQo%2Bq7mICgiIwinMgCtye7J7OPWtC%2BuN%2B4QmYUMdBNJKtLdwItFh3E8RhJz8HVUeFXmx0mjYkuMmfDeTCNJsFFxd6lx7R2%2B60UppggNMetTckA7sN3s5HuwBlfobdwV4rNBIvlBEl6heomhPAZDbwea7so%2F4g0OyAWIq90uLtGATJOp9JEaa0YelI1vLERiSMNPvhmkMg0yPilmSWWjDzyvbCBjqkAZaJBRv5y1S3%2Fv19tskKxVcVC4EH%2BfcLyThuzHSKJgNK1gumOhZg0Fb%2FFoDYuofx8gtCO3TnRU9sA9k5Yjx4fgJNGM1t7h6dJ8K73A%2FcEWyKUuvuY0EMBWRyU9GqsHxnT6lFBYEfolqndHO9S2fUwGRgcI6XfC5x%2BfXrqCE1SoC8ZSN00jhkARJ4F0SdzAJ9mPywFzCHomp7xxL%2BwXwEcf1gWz%2BJ&X-Amz-Signature=ef744599b0d246a128ae33860f9494109ebed20af421ef345b217456a1a57848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
