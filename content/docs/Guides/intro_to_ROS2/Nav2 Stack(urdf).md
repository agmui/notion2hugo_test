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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UVKXYRU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1hzsF6TYkX1ttdZGIL6Y0tg5XYHrPaVvNhocMzy6FdAIhALpEbNiGmWu3sb5E0mNHM8O3DsVZ0LE1Ht2bZXcHYqKIKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiAPFKcVRcLoRnISYq3ANhQBPud%2BphWrVyXBS9KwRS1Osd1jOhs2npy6xA2sP0c97G8iddggJ4jwsMiyVp%2FnfXDVnzBz6Y9c0klDuVPGZU8%2BX5Mk%2ByNkK8bkSIp0r%2FvsWtuJg4GsAjS4vUwB43r9ex23qsWSxU5PLTNcaKagBNq1SD4HApjJIsMq6%2BqZeQd7zU3y9nV00NY0HfBWYfMNTbhimiukC4a%2BfiGkLN91R6e9qAHL5PBu1ekh5Xf0wv0C7Gam0mZVnwBC%2BP3JQ8z0OCWE8ptEJ3n8qxGwsUBcqE%2BuJhYSIrJQMm5mb3f7u2yVteOWWEzNMe%2BUEfAEr7Vq8fAhF%2FHEFCRjRPvfi9zDMiNXpGipUQhLvoUuWY9YQ5C8v34VDbReHUHWCdJYGz2J6c9IagRwSwbWMsFS%2F4C4Q5CBPZPLtNAL3hPYii3jg8XLqE9L%2FsBTBMmX%2FxyfalVXeOjcnufNXI0vOZw4Rji8shHW2Yn5ZcUWz6X%2FopkXJYJ0m0tlWsVsFNfyZKhJir9vl%2Fh7p58CzkjHYWUokARWNCAB3CuwuAizP3avDClKK8lIIg7cJre4mU8QjgdagKQuU2SaM0EiWbQBW4g7IRwzrBthCy3GOSbF%2Bu23%2BfmgjD2smmoS2JtL3W5U3cCjC15aXCBjqkARLdITORAA590RtI6CqtaTUw2aVh%2F9QCfjB58%2BADurMAiFTTTBanud1uBn%2BotpLJAPv2iEniMpESdCwsUYFqlJ2LKdbvBY6ot4lgY5PsmGAaExgrNieWHN7pqxx4JDjEc4ZMlVhILrkibifdyLxTHf%2FpZ094IM5BIziKQ1uQk0uUJqIMU0Rs11tH%2Fe91ZmH91ckiTkIaObupEPbCZaGPCnZqzsEf&X-Amz-Signature=fe8e23b0a537bcb003148681d32fd0d1bbc350d753caf07333f41686668d5bb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UVKXYRU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1hzsF6TYkX1ttdZGIL6Y0tg5XYHrPaVvNhocMzy6FdAIhALpEbNiGmWu3sb5E0mNHM8O3DsVZ0LE1Ht2bZXcHYqKIKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiAPFKcVRcLoRnISYq3ANhQBPud%2BphWrVyXBS9KwRS1Osd1jOhs2npy6xA2sP0c97G8iddggJ4jwsMiyVp%2FnfXDVnzBz6Y9c0klDuVPGZU8%2BX5Mk%2ByNkK8bkSIp0r%2FvsWtuJg4GsAjS4vUwB43r9ex23qsWSxU5PLTNcaKagBNq1SD4HApjJIsMq6%2BqZeQd7zU3y9nV00NY0HfBWYfMNTbhimiukC4a%2BfiGkLN91R6e9qAHL5PBu1ekh5Xf0wv0C7Gam0mZVnwBC%2BP3JQ8z0OCWE8ptEJ3n8qxGwsUBcqE%2BuJhYSIrJQMm5mb3f7u2yVteOWWEzNMe%2BUEfAEr7Vq8fAhF%2FHEFCRjRPvfi9zDMiNXpGipUQhLvoUuWY9YQ5C8v34VDbReHUHWCdJYGz2J6c9IagRwSwbWMsFS%2F4C4Q5CBPZPLtNAL3hPYii3jg8XLqE9L%2FsBTBMmX%2FxyfalVXeOjcnufNXI0vOZw4Rji8shHW2Yn5ZcUWz6X%2FopkXJYJ0m0tlWsVsFNfyZKhJir9vl%2Fh7p58CzkjHYWUokARWNCAB3CuwuAizP3avDClKK8lIIg7cJre4mU8QjgdagKQuU2SaM0EiWbQBW4g7IRwzrBthCy3GOSbF%2Bu23%2BfmgjD2smmoS2JtL3W5U3cCjC15aXCBjqkARLdITORAA590RtI6CqtaTUw2aVh%2F9QCfjB58%2BADurMAiFTTTBanud1uBn%2BotpLJAPv2iEniMpESdCwsUYFqlJ2LKdbvBY6ot4lgY5PsmGAaExgrNieWHN7pqxx4JDjEc4ZMlVhILrkibifdyLxTHf%2FpZ094IM5BIziKQ1uQk0uUJqIMU0Rs11tH%2Fe91ZmH91ckiTkIaObupEPbCZaGPCnZqzsEf&X-Amz-Signature=db85b0c42a8941d5a5454cd829c23c9586ab16fd0afd1e2eff42bb46c3127d4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UVKXYRU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1hzsF6TYkX1ttdZGIL6Y0tg5XYHrPaVvNhocMzy6FdAIhALpEbNiGmWu3sb5E0mNHM8O3DsVZ0LE1Ht2bZXcHYqKIKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiAPFKcVRcLoRnISYq3ANhQBPud%2BphWrVyXBS9KwRS1Osd1jOhs2npy6xA2sP0c97G8iddggJ4jwsMiyVp%2FnfXDVnzBz6Y9c0klDuVPGZU8%2BX5Mk%2ByNkK8bkSIp0r%2FvsWtuJg4GsAjS4vUwB43r9ex23qsWSxU5PLTNcaKagBNq1SD4HApjJIsMq6%2BqZeQd7zU3y9nV00NY0HfBWYfMNTbhimiukC4a%2BfiGkLN91R6e9qAHL5PBu1ekh5Xf0wv0C7Gam0mZVnwBC%2BP3JQ8z0OCWE8ptEJ3n8qxGwsUBcqE%2BuJhYSIrJQMm5mb3f7u2yVteOWWEzNMe%2BUEfAEr7Vq8fAhF%2FHEFCRjRPvfi9zDMiNXpGipUQhLvoUuWY9YQ5C8v34VDbReHUHWCdJYGz2J6c9IagRwSwbWMsFS%2F4C4Q5CBPZPLtNAL3hPYii3jg8XLqE9L%2FsBTBMmX%2FxyfalVXeOjcnufNXI0vOZw4Rji8shHW2Yn5ZcUWz6X%2FopkXJYJ0m0tlWsVsFNfyZKhJir9vl%2Fh7p58CzkjHYWUokARWNCAB3CuwuAizP3avDClKK8lIIg7cJre4mU8QjgdagKQuU2SaM0EiWbQBW4g7IRwzrBthCy3GOSbF%2Bu23%2BfmgjD2smmoS2JtL3W5U3cCjC15aXCBjqkARLdITORAA590RtI6CqtaTUw2aVh%2F9QCfjB58%2BADurMAiFTTTBanud1uBn%2BotpLJAPv2iEniMpESdCwsUYFqlJ2LKdbvBY6ot4lgY5PsmGAaExgrNieWHN7pqxx4JDjEc4ZMlVhILrkibifdyLxTHf%2FpZ094IM5BIziKQ1uQk0uUJqIMU0Rs11tH%2Fe91ZmH91ckiTkIaObupEPbCZaGPCnZqzsEf&X-Amz-Signature=37d279b96c1dbdfb70dbd09ffd55c2c4a56987bb8c7f88ba4ba8002c55794a92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UVKXYRU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1hzsF6TYkX1ttdZGIL6Y0tg5XYHrPaVvNhocMzy6FdAIhALpEbNiGmWu3sb5E0mNHM8O3DsVZ0LE1Ht2bZXcHYqKIKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiAPFKcVRcLoRnISYq3ANhQBPud%2BphWrVyXBS9KwRS1Osd1jOhs2npy6xA2sP0c97G8iddggJ4jwsMiyVp%2FnfXDVnzBz6Y9c0klDuVPGZU8%2BX5Mk%2ByNkK8bkSIp0r%2FvsWtuJg4GsAjS4vUwB43r9ex23qsWSxU5PLTNcaKagBNq1SD4HApjJIsMq6%2BqZeQd7zU3y9nV00NY0HfBWYfMNTbhimiukC4a%2BfiGkLN91R6e9qAHL5PBu1ekh5Xf0wv0C7Gam0mZVnwBC%2BP3JQ8z0OCWE8ptEJ3n8qxGwsUBcqE%2BuJhYSIrJQMm5mb3f7u2yVteOWWEzNMe%2BUEfAEr7Vq8fAhF%2FHEFCRjRPvfi9zDMiNXpGipUQhLvoUuWY9YQ5C8v34VDbReHUHWCdJYGz2J6c9IagRwSwbWMsFS%2F4C4Q5CBPZPLtNAL3hPYii3jg8XLqE9L%2FsBTBMmX%2FxyfalVXeOjcnufNXI0vOZw4Rji8shHW2Yn5ZcUWz6X%2FopkXJYJ0m0tlWsVsFNfyZKhJir9vl%2Fh7p58CzkjHYWUokARWNCAB3CuwuAizP3avDClKK8lIIg7cJre4mU8QjgdagKQuU2SaM0EiWbQBW4g7IRwzrBthCy3GOSbF%2Bu23%2BfmgjD2smmoS2JtL3W5U3cCjC15aXCBjqkARLdITORAA590RtI6CqtaTUw2aVh%2F9QCfjB58%2BADurMAiFTTTBanud1uBn%2BotpLJAPv2iEniMpESdCwsUYFqlJ2LKdbvBY6ot4lgY5PsmGAaExgrNieWHN7pqxx4JDjEc4ZMlVhILrkibifdyLxTHf%2FpZ094IM5BIziKQ1uQk0uUJqIMU0Rs11tH%2Fe91ZmH91ckiTkIaObupEPbCZaGPCnZqzsEf&X-Amz-Signature=3045f1bcf43ad77010458d6d95b3513e5ee0891f09011d10dd45ba4c099c8f01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UVKXYRU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1hzsF6TYkX1ttdZGIL6Y0tg5XYHrPaVvNhocMzy6FdAIhALpEbNiGmWu3sb5E0mNHM8O3DsVZ0LE1Ht2bZXcHYqKIKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiAPFKcVRcLoRnISYq3ANhQBPud%2BphWrVyXBS9KwRS1Osd1jOhs2npy6xA2sP0c97G8iddggJ4jwsMiyVp%2FnfXDVnzBz6Y9c0klDuVPGZU8%2BX5Mk%2ByNkK8bkSIp0r%2FvsWtuJg4GsAjS4vUwB43r9ex23qsWSxU5PLTNcaKagBNq1SD4HApjJIsMq6%2BqZeQd7zU3y9nV00NY0HfBWYfMNTbhimiukC4a%2BfiGkLN91R6e9qAHL5PBu1ekh5Xf0wv0C7Gam0mZVnwBC%2BP3JQ8z0OCWE8ptEJ3n8qxGwsUBcqE%2BuJhYSIrJQMm5mb3f7u2yVteOWWEzNMe%2BUEfAEr7Vq8fAhF%2FHEFCRjRPvfi9zDMiNXpGipUQhLvoUuWY9YQ5C8v34VDbReHUHWCdJYGz2J6c9IagRwSwbWMsFS%2F4C4Q5CBPZPLtNAL3hPYii3jg8XLqE9L%2FsBTBMmX%2FxyfalVXeOjcnufNXI0vOZw4Rji8shHW2Yn5ZcUWz6X%2FopkXJYJ0m0tlWsVsFNfyZKhJir9vl%2Fh7p58CzkjHYWUokARWNCAB3CuwuAizP3avDClKK8lIIg7cJre4mU8QjgdagKQuU2SaM0EiWbQBW4g7IRwzrBthCy3GOSbF%2Bu23%2BfmgjD2smmoS2JtL3W5U3cCjC15aXCBjqkARLdITORAA590RtI6CqtaTUw2aVh%2F9QCfjB58%2BADurMAiFTTTBanud1uBn%2BotpLJAPv2iEniMpESdCwsUYFqlJ2LKdbvBY6ot4lgY5PsmGAaExgrNieWHN7pqxx4JDjEc4ZMlVhILrkibifdyLxTHf%2FpZ094IM5BIziKQ1uQk0uUJqIMU0Rs11tH%2Fe91ZmH91ckiTkIaObupEPbCZaGPCnZqzsEf&X-Amz-Signature=60e3dd78ce9e01ed9a736d651f9bcd898c0f839b874cbe4a7de9530029017e31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UVKXYRU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1hzsF6TYkX1ttdZGIL6Y0tg5XYHrPaVvNhocMzy6FdAIhALpEbNiGmWu3sb5E0mNHM8O3DsVZ0LE1Ht2bZXcHYqKIKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiAPFKcVRcLoRnISYq3ANhQBPud%2BphWrVyXBS9KwRS1Osd1jOhs2npy6xA2sP0c97G8iddggJ4jwsMiyVp%2FnfXDVnzBz6Y9c0klDuVPGZU8%2BX5Mk%2ByNkK8bkSIp0r%2FvsWtuJg4GsAjS4vUwB43r9ex23qsWSxU5PLTNcaKagBNq1SD4HApjJIsMq6%2BqZeQd7zU3y9nV00NY0HfBWYfMNTbhimiukC4a%2BfiGkLN91R6e9qAHL5PBu1ekh5Xf0wv0C7Gam0mZVnwBC%2BP3JQ8z0OCWE8ptEJ3n8qxGwsUBcqE%2BuJhYSIrJQMm5mb3f7u2yVteOWWEzNMe%2BUEfAEr7Vq8fAhF%2FHEFCRjRPvfi9zDMiNXpGipUQhLvoUuWY9YQ5C8v34VDbReHUHWCdJYGz2J6c9IagRwSwbWMsFS%2F4C4Q5CBPZPLtNAL3hPYii3jg8XLqE9L%2FsBTBMmX%2FxyfalVXeOjcnufNXI0vOZw4Rji8shHW2Yn5ZcUWz6X%2FopkXJYJ0m0tlWsVsFNfyZKhJir9vl%2Fh7p58CzkjHYWUokARWNCAB3CuwuAizP3avDClKK8lIIg7cJre4mU8QjgdagKQuU2SaM0EiWbQBW4g7IRwzrBthCy3GOSbF%2Bu23%2BfmgjD2smmoS2JtL3W5U3cCjC15aXCBjqkARLdITORAA590RtI6CqtaTUw2aVh%2F9QCfjB58%2BADurMAiFTTTBanud1uBn%2BotpLJAPv2iEniMpESdCwsUYFqlJ2LKdbvBY6ot4lgY5PsmGAaExgrNieWHN7pqxx4JDjEc4ZMlVhILrkibifdyLxTHf%2FpZ094IM5BIziKQ1uQk0uUJqIMU0Rs11tH%2Fe91ZmH91ckiTkIaObupEPbCZaGPCnZqzsEf&X-Amz-Signature=8e96b66d8c7660193d1dd7fe80419f919c4e3a4557518bf2043d1861cdc20a89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
