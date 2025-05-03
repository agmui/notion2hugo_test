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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2TCQYK%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T081015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDsASYsuOUADvf2s%2Fv5buUzDCUJo4qQ0VRmrYq9YTKjhAiEAw0rnWNA7JOtzV2nTii%2BZN1eTiveQqc3C1EuWyQgQg0wqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUKnZt4qY7dLxOEwSrcAzSFpM8DKYd%2Bv35nCdhAmcP8kCiMmA%2Fo0jXE3q52BwqkHMnUugR%2F3DgOSyvGxJ53KVVTI7FuvGzOqxjJb1QxZGpEjZKy3%2FAR%2BzgNaAFTkFZ8WNNIOexXBXKrI47UnAyitzCy42hVh3jH6VsShuD5nERoR12OloUeE46o8AbwqcRBNsZqBxjYtR6QS3HoDsEmpc9bOrqrZCmQDAZH5AvH4dEfto3ndLC7a6iAV1IltvfxrOqrF6mfPUVEsYjonq2ajmxKlkvqkTEd2sTYDaTAMT5Prfmxnl9lwvIwBrYVtcNPEJQ0HQ%2B2amGw72ygOj%2FKOTofytGThTrhJR%2FVXAsoOeJdYB128cj6tVxuf1%2FiiqqRWzRsMsdty%2F55%2Fb5sXhe%2FwseCJwQKm2q%2FUwzzsC1So99fA%2BdLwMQWdQCw4Ne9HA9efQvU7Ib0IkfDw29zLL9WqbHSUbGRE8hIw8mMURifT8hqHfEP2mlxWrMCBBl9UsZU07jv1tM%2F01lOg9a4z8j%2F7eZpBVjbN9i921l%2BxKzfVvDXdFPPl86SOAiI8QrT2x%2BCmlBe0wZ%2BGhiiQHF2TB1eKkdoiBLq0fPckhMoNvoyMhvzsXEETjBjfGHOJ2UvJhJMptU92hkMFNvoz3WyMIaH1sAGOqUBKJAhsn9f%2FXyVKQumeUoUSXWegV3D1HQJgyyFC%2Bp16watCK7l3wboQG%2BA%2Bb8VguvNGjrgQ0QQ4knGzEstWlj%2F%2BpoPr5kudopUPlPGDl%2FayKTnoC%2FT9JqruWdeGC6okOCZN%2BuoUGrmWIzkdudggmGh7roGe55beya%2Flz09%2FtiGW0Hw40E6PPQetvbl3%2BqVYlzOzYXGeOeKWcrCI9tF4l4cQ9EDvQrp&X-Amz-Signature=b80b049d769e3a689a9b11df7516c25182cc71f7fd249945f529448ad92d3fb4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2TCQYK%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T081015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDsASYsuOUADvf2s%2Fv5buUzDCUJo4qQ0VRmrYq9YTKjhAiEAw0rnWNA7JOtzV2nTii%2BZN1eTiveQqc3C1EuWyQgQg0wqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUKnZt4qY7dLxOEwSrcAzSFpM8DKYd%2Bv35nCdhAmcP8kCiMmA%2Fo0jXE3q52BwqkHMnUugR%2F3DgOSyvGxJ53KVVTI7FuvGzOqxjJb1QxZGpEjZKy3%2FAR%2BzgNaAFTkFZ8WNNIOexXBXKrI47UnAyitzCy42hVh3jH6VsShuD5nERoR12OloUeE46o8AbwqcRBNsZqBxjYtR6QS3HoDsEmpc9bOrqrZCmQDAZH5AvH4dEfto3ndLC7a6iAV1IltvfxrOqrF6mfPUVEsYjonq2ajmxKlkvqkTEd2sTYDaTAMT5Prfmxnl9lwvIwBrYVtcNPEJQ0HQ%2B2amGw72ygOj%2FKOTofytGThTrhJR%2FVXAsoOeJdYB128cj6tVxuf1%2FiiqqRWzRsMsdty%2F55%2Fb5sXhe%2FwseCJwQKm2q%2FUwzzsC1So99fA%2BdLwMQWdQCw4Ne9HA9efQvU7Ib0IkfDw29zLL9WqbHSUbGRE8hIw8mMURifT8hqHfEP2mlxWrMCBBl9UsZU07jv1tM%2F01lOg9a4z8j%2F7eZpBVjbN9i921l%2BxKzfVvDXdFPPl86SOAiI8QrT2x%2BCmlBe0wZ%2BGhiiQHF2TB1eKkdoiBLq0fPckhMoNvoyMhvzsXEETjBjfGHOJ2UvJhJMptU92hkMFNvoz3WyMIaH1sAGOqUBKJAhsn9f%2FXyVKQumeUoUSXWegV3D1HQJgyyFC%2Bp16watCK7l3wboQG%2BA%2Bb8VguvNGjrgQ0QQ4knGzEstWlj%2F%2BpoPr5kudopUPlPGDl%2FayKTnoC%2FT9JqruWdeGC6okOCZN%2BuoUGrmWIzkdudggmGh7roGe55beya%2Flz09%2FtiGW0Hw40E6PPQetvbl3%2BqVYlzOzYXGeOeKWcrCI9tF4l4cQ9EDvQrp&X-Amz-Signature=aa5a6b5c268c74cdbccaa60994b4fbb3fa31e4606ca4722d4a8668d473bcdd9e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2TCQYK%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T081015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDsASYsuOUADvf2s%2Fv5buUzDCUJo4qQ0VRmrYq9YTKjhAiEAw0rnWNA7JOtzV2nTii%2BZN1eTiveQqc3C1EuWyQgQg0wqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUKnZt4qY7dLxOEwSrcAzSFpM8DKYd%2Bv35nCdhAmcP8kCiMmA%2Fo0jXE3q52BwqkHMnUugR%2F3DgOSyvGxJ53KVVTI7FuvGzOqxjJb1QxZGpEjZKy3%2FAR%2BzgNaAFTkFZ8WNNIOexXBXKrI47UnAyitzCy42hVh3jH6VsShuD5nERoR12OloUeE46o8AbwqcRBNsZqBxjYtR6QS3HoDsEmpc9bOrqrZCmQDAZH5AvH4dEfto3ndLC7a6iAV1IltvfxrOqrF6mfPUVEsYjonq2ajmxKlkvqkTEd2sTYDaTAMT5Prfmxnl9lwvIwBrYVtcNPEJQ0HQ%2B2amGw72ygOj%2FKOTofytGThTrhJR%2FVXAsoOeJdYB128cj6tVxuf1%2FiiqqRWzRsMsdty%2F55%2Fb5sXhe%2FwseCJwQKm2q%2FUwzzsC1So99fA%2BdLwMQWdQCw4Ne9HA9efQvU7Ib0IkfDw29zLL9WqbHSUbGRE8hIw8mMURifT8hqHfEP2mlxWrMCBBl9UsZU07jv1tM%2F01lOg9a4z8j%2F7eZpBVjbN9i921l%2BxKzfVvDXdFPPl86SOAiI8QrT2x%2BCmlBe0wZ%2BGhiiQHF2TB1eKkdoiBLq0fPckhMoNvoyMhvzsXEETjBjfGHOJ2UvJhJMptU92hkMFNvoz3WyMIaH1sAGOqUBKJAhsn9f%2FXyVKQumeUoUSXWegV3D1HQJgyyFC%2Bp16watCK7l3wboQG%2BA%2Bb8VguvNGjrgQ0QQ4knGzEstWlj%2F%2BpoPr5kudopUPlPGDl%2FayKTnoC%2FT9JqruWdeGC6okOCZN%2BuoUGrmWIzkdudggmGh7roGe55beya%2Flz09%2FtiGW0Hw40E6PPQetvbl3%2BqVYlzOzYXGeOeKWcrCI9tF4l4cQ9EDvQrp&X-Amz-Signature=bd37260cfda56802bfa6081b53dc124f7848ca1a9b655a9020a411be7000ca14&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2TCQYK%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T081015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDsASYsuOUADvf2s%2Fv5buUzDCUJo4qQ0VRmrYq9YTKjhAiEAw0rnWNA7JOtzV2nTii%2BZN1eTiveQqc3C1EuWyQgQg0wqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUKnZt4qY7dLxOEwSrcAzSFpM8DKYd%2Bv35nCdhAmcP8kCiMmA%2Fo0jXE3q52BwqkHMnUugR%2F3DgOSyvGxJ53KVVTI7FuvGzOqxjJb1QxZGpEjZKy3%2FAR%2BzgNaAFTkFZ8WNNIOexXBXKrI47UnAyitzCy42hVh3jH6VsShuD5nERoR12OloUeE46o8AbwqcRBNsZqBxjYtR6QS3HoDsEmpc9bOrqrZCmQDAZH5AvH4dEfto3ndLC7a6iAV1IltvfxrOqrF6mfPUVEsYjonq2ajmxKlkvqkTEd2sTYDaTAMT5Prfmxnl9lwvIwBrYVtcNPEJQ0HQ%2B2amGw72ygOj%2FKOTofytGThTrhJR%2FVXAsoOeJdYB128cj6tVxuf1%2FiiqqRWzRsMsdty%2F55%2Fb5sXhe%2FwseCJwQKm2q%2FUwzzsC1So99fA%2BdLwMQWdQCw4Ne9HA9efQvU7Ib0IkfDw29zLL9WqbHSUbGRE8hIw8mMURifT8hqHfEP2mlxWrMCBBl9UsZU07jv1tM%2F01lOg9a4z8j%2F7eZpBVjbN9i921l%2BxKzfVvDXdFPPl86SOAiI8QrT2x%2BCmlBe0wZ%2BGhiiQHF2TB1eKkdoiBLq0fPckhMoNvoyMhvzsXEETjBjfGHOJ2UvJhJMptU92hkMFNvoz3WyMIaH1sAGOqUBKJAhsn9f%2FXyVKQumeUoUSXWegV3D1HQJgyyFC%2Bp16watCK7l3wboQG%2BA%2Bb8VguvNGjrgQ0QQ4knGzEstWlj%2F%2BpoPr5kudopUPlPGDl%2FayKTnoC%2FT9JqruWdeGC6okOCZN%2BuoUGrmWIzkdudggmGh7roGe55beya%2Flz09%2FtiGW0Hw40E6PPQetvbl3%2BqVYlzOzYXGeOeKWcrCI9tF4l4cQ9EDvQrp&X-Amz-Signature=e4806101b7579c543522fb4df19d38131da4eb58bf0a6058e4e3c84f6f411287&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2TCQYK%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T081015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDsASYsuOUADvf2s%2Fv5buUzDCUJo4qQ0VRmrYq9YTKjhAiEAw0rnWNA7JOtzV2nTii%2BZN1eTiveQqc3C1EuWyQgQg0wqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUKnZt4qY7dLxOEwSrcAzSFpM8DKYd%2Bv35nCdhAmcP8kCiMmA%2Fo0jXE3q52BwqkHMnUugR%2F3DgOSyvGxJ53KVVTI7FuvGzOqxjJb1QxZGpEjZKy3%2FAR%2BzgNaAFTkFZ8WNNIOexXBXKrI47UnAyitzCy42hVh3jH6VsShuD5nERoR12OloUeE46o8AbwqcRBNsZqBxjYtR6QS3HoDsEmpc9bOrqrZCmQDAZH5AvH4dEfto3ndLC7a6iAV1IltvfxrOqrF6mfPUVEsYjonq2ajmxKlkvqkTEd2sTYDaTAMT5Prfmxnl9lwvIwBrYVtcNPEJQ0HQ%2B2amGw72ygOj%2FKOTofytGThTrhJR%2FVXAsoOeJdYB128cj6tVxuf1%2FiiqqRWzRsMsdty%2F55%2Fb5sXhe%2FwseCJwQKm2q%2FUwzzsC1So99fA%2BdLwMQWdQCw4Ne9HA9efQvU7Ib0IkfDw29zLL9WqbHSUbGRE8hIw8mMURifT8hqHfEP2mlxWrMCBBl9UsZU07jv1tM%2F01lOg9a4z8j%2F7eZpBVjbN9i921l%2BxKzfVvDXdFPPl86SOAiI8QrT2x%2BCmlBe0wZ%2BGhiiQHF2TB1eKkdoiBLq0fPckhMoNvoyMhvzsXEETjBjfGHOJ2UvJhJMptU92hkMFNvoz3WyMIaH1sAGOqUBKJAhsn9f%2FXyVKQumeUoUSXWegV3D1HQJgyyFC%2Bp16watCK7l3wboQG%2BA%2Bb8VguvNGjrgQ0QQ4knGzEstWlj%2F%2BpoPr5kudopUPlPGDl%2FayKTnoC%2FT9JqruWdeGC6okOCZN%2BuoUGrmWIzkdudggmGh7roGe55beya%2Flz09%2FtiGW0Hw40E6PPQetvbl3%2BqVYlzOzYXGeOeKWcrCI9tF4l4cQ9EDvQrp&X-Amz-Signature=8a79030bff82e70f5707e1f07da7eaa70352ee90da4a4ee86a89cc044a23a7b3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2TCQYK%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T081015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDsASYsuOUADvf2s%2Fv5buUzDCUJo4qQ0VRmrYq9YTKjhAiEAw0rnWNA7JOtzV2nTii%2BZN1eTiveQqc3C1EuWyQgQg0wqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUKnZt4qY7dLxOEwSrcAzSFpM8DKYd%2Bv35nCdhAmcP8kCiMmA%2Fo0jXE3q52BwqkHMnUugR%2F3DgOSyvGxJ53KVVTI7FuvGzOqxjJb1QxZGpEjZKy3%2FAR%2BzgNaAFTkFZ8WNNIOexXBXKrI47UnAyitzCy42hVh3jH6VsShuD5nERoR12OloUeE46o8AbwqcRBNsZqBxjYtR6QS3HoDsEmpc9bOrqrZCmQDAZH5AvH4dEfto3ndLC7a6iAV1IltvfxrOqrF6mfPUVEsYjonq2ajmxKlkvqkTEd2sTYDaTAMT5Prfmxnl9lwvIwBrYVtcNPEJQ0HQ%2B2amGw72ygOj%2FKOTofytGThTrhJR%2FVXAsoOeJdYB128cj6tVxuf1%2FiiqqRWzRsMsdty%2F55%2Fb5sXhe%2FwseCJwQKm2q%2FUwzzsC1So99fA%2BdLwMQWdQCw4Ne9HA9efQvU7Ib0IkfDw29zLL9WqbHSUbGRE8hIw8mMURifT8hqHfEP2mlxWrMCBBl9UsZU07jv1tM%2F01lOg9a4z8j%2F7eZpBVjbN9i921l%2BxKzfVvDXdFPPl86SOAiI8QrT2x%2BCmlBe0wZ%2BGhiiQHF2TB1eKkdoiBLq0fPckhMoNvoyMhvzsXEETjBjfGHOJ2UvJhJMptU92hkMFNvoz3WyMIaH1sAGOqUBKJAhsn9f%2FXyVKQumeUoUSXWegV3D1HQJgyyFC%2Bp16watCK7l3wboQG%2BA%2Bb8VguvNGjrgQ0QQ4knGzEstWlj%2F%2BpoPr5kudopUPlPGDl%2FayKTnoC%2FT9JqruWdeGC6okOCZN%2BuoUGrmWIzkdudggmGh7roGe55beya%2Flz09%2FtiGW0Hw40E6PPQetvbl3%2BqVYlzOzYXGeOeKWcrCI9tF4l4cQ9EDvQrp&X-Amz-Signature=307a72c69915305cb67e6da4c336ce550ef755e9e9ae6e6223255ab3fac30342&X-Amz-SignedHeaders=host&x-id=GetObject)
