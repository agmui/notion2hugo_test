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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK2DYSHL%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T230837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIBjF8SdqVoxcSaoUVaBCwYp3D6gVX7B%2BIDF6dfF53p3RAiAy0Rh2vYBz3SLmSczTex8MJRRg4RdIPX02dQYJ0DJObir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMssJ%2BKu6pHVP21yr6KtwDpGWPiyoZVFx3YDr979IVJRM4gsbiuyfpeKs8YuvsmyeqCsGIq6u4EDbnPB1OAokgwsHCyF3nq0r6ClDNv3o9Lc6zM9eSf8TqWk1y84n6Gk6CUFGUAsOqM7NPhPngKrPiVZXIbSBkxjtbIWX957cerLqGcUrEDmLNOHXlX6%2BmrA56bAVXQK96CdPz9o%2FlvXm%2Bec2mcORLIEzZNdmPlFKPNd2U%2Fo9DtST7XM7irV%2F%2FQiWRfxx3qzolAIgY7V8XAmcl9gJsl3ZTVep0EeO4VUrUts62GFms3mZN0EmxaqW8b6VTGLT5w8LM%2BTXXI6wb17m2njC%2Fjgvd4S2izG%2Bb3F6Jax1Ahpm8mfHSTj72nR%2F5RN1jghtQPxc0Gm%2FexqPLn8NCfrHZzfEkHjlk7wIG%2FOYOC1ORfCtWoHbwBi1IrV%2FE4BbQ3fVPP7ix3a3qDvjHAixhLAlXcIVmdkp7UrHRnNlRX1lmA%2Bj8tJI3B2TNKZYa3X6GbQKOBZTMm00NdWSwcZWC%2F9ISUKVvhHt6svLxTcl8LR4t1aupGlFBBTss%2FSG7h%2B9Mu1XOIKbGlJbOjkyLjzy78JkLbUhJtPHMfwGc3gxYaMEo4xxsVmdJ9aupLK9FASi86odjqu82EIwZWwUwlKrOwQY6pgEV%2BRQWNCtYk3nXYGn1K1ZYh5oilLk2kY%2BH5A8jfO935Ibx8m6ORNwn7B6JZYvhdcijvaD99ohkLitg3bJzsAiaIBnxXKKzm4vXUoLUegq4g1lL3iIloGiWP31auAY2t%2FrfDqVfsx4dVQGS5QcZ3SbBkA9Khzo%2B5%2F7v2R1OkTd3KaiKm%2FWTJqsQpmwVkT0u3ceEAKzBLdoRzSUeOtnbRoq2s1rlsdSl&X-Amz-Signature=0c409da34ae31b1b62e2b032274f73535a0494e5865d6be79fc2721c46a5ab81&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK2DYSHL%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T230837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIBjF8SdqVoxcSaoUVaBCwYp3D6gVX7B%2BIDF6dfF53p3RAiAy0Rh2vYBz3SLmSczTex8MJRRg4RdIPX02dQYJ0DJObir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMssJ%2BKu6pHVP21yr6KtwDpGWPiyoZVFx3YDr979IVJRM4gsbiuyfpeKs8YuvsmyeqCsGIq6u4EDbnPB1OAokgwsHCyF3nq0r6ClDNv3o9Lc6zM9eSf8TqWk1y84n6Gk6CUFGUAsOqM7NPhPngKrPiVZXIbSBkxjtbIWX957cerLqGcUrEDmLNOHXlX6%2BmrA56bAVXQK96CdPz9o%2FlvXm%2Bec2mcORLIEzZNdmPlFKPNd2U%2Fo9DtST7XM7irV%2F%2FQiWRfxx3qzolAIgY7V8XAmcl9gJsl3ZTVep0EeO4VUrUts62GFms3mZN0EmxaqW8b6VTGLT5w8LM%2BTXXI6wb17m2njC%2Fjgvd4S2izG%2Bb3F6Jax1Ahpm8mfHSTj72nR%2F5RN1jghtQPxc0Gm%2FexqPLn8NCfrHZzfEkHjlk7wIG%2FOYOC1ORfCtWoHbwBi1IrV%2FE4BbQ3fVPP7ix3a3qDvjHAixhLAlXcIVmdkp7UrHRnNlRX1lmA%2Bj8tJI3B2TNKZYa3X6GbQKOBZTMm00NdWSwcZWC%2F9ISUKVvhHt6svLxTcl8LR4t1aupGlFBBTss%2FSG7h%2B9Mu1XOIKbGlJbOjkyLjzy78JkLbUhJtPHMfwGc3gxYaMEo4xxsVmdJ9aupLK9FASi86odjqu82EIwZWwUwlKrOwQY6pgEV%2BRQWNCtYk3nXYGn1K1ZYh5oilLk2kY%2BH5A8jfO935Ibx8m6ORNwn7B6JZYvhdcijvaD99ohkLitg3bJzsAiaIBnxXKKzm4vXUoLUegq4g1lL3iIloGiWP31auAY2t%2FrfDqVfsx4dVQGS5QcZ3SbBkA9Khzo%2B5%2F7v2R1OkTd3KaiKm%2FWTJqsQpmwVkT0u3ceEAKzBLdoRzSUeOtnbRoq2s1rlsdSl&X-Amz-Signature=485831a3d6f9f59a4d4800fa07797748356dd471b1c758a6a321495ef6069cdf&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK2DYSHL%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T230837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIBjF8SdqVoxcSaoUVaBCwYp3D6gVX7B%2BIDF6dfF53p3RAiAy0Rh2vYBz3SLmSczTex8MJRRg4RdIPX02dQYJ0DJObir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMssJ%2BKu6pHVP21yr6KtwDpGWPiyoZVFx3YDr979IVJRM4gsbiuyfpeKs8YuvsmyeqCsGIq6u4EDbnPB1OAokgwsHCyF3nq0r6ClDNv3o9Lc6zM9eSf8TqWk1y84n6Gk6CUFGUAsOqM7NPhPngKrPiVZXIbSBkxjtbIWX957cerLqGcUrEDmLNOHXlX6%2BmrA56bAVXQK96CdPz9o%2FlvXm%2Bec2mcORLIEzZNdmPlFKPNd2U%2Fo9DtST7XM7irV%2F%2FQiWRfxx3qzolAIgY7V8XAmcl9gJsl3ZTVep0EeO4VUrUts62GFms3mZN0EmxaqW8b6VTGLT5w8LM%2BTXXI6wb17m2njC%2Fjgvd4S2izG%2Bb3F6Jax1Ahpm8mfHSTj72nR%2F5RN1jghtQPxc0Gm%2FexqPLn8NCfrHZzfEkHjlk7wIG%2FOYOC1ORfCtWoHbwBi1IrV%2FE4BbQ3fVPP7ix3a3qDvjHAixhLAlXcIVmdkp7UrHRnNlRX1lmA%2Bj8tJI3B2TNKZYa3X6GbQKOBZTMm00NdWSwcZWC%2F9ISUKVvhHt6svLxTcl8LR4t1aupGlFBBTss%2FSG7h%2B9Mu1XOIKbGlJbOjkyLjzy78JkLbUhJtPHMfwGc3gxYaMEo4xxsVmdJ9aupLK9FASi86odjqu82EIwZWwUwlKrOwQY6pgEV%2BRQWNCtYk3nXYGn1K1ZYh5oilLk2kY%2BH5A8jfO935Ibx8m6ORNwn7B6JZYvhdcijvaD99ohkLitg3bJzsAiaIBnxXKKzm4vXUoLUegq4g1lL3iIloGiWP31auAY2t%2FrfDqVfsx4dVQGS5QcZ3SbBkA9Khzo%2B5%2F7v2R1OkTd3KaiKm%2FWTJqsQpmwVkT0u3ceEAKzBLdoRzSUeOtnbRoq2s1rlsdSl&X-Amz-Signature=ed4b25be3217120ba4c5646b829118efd8b195426ee14a66ccdf9a268b33aca3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK2DYSHL%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T230837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIBjF8SdqVoxcSaoUVaBCwYp3D6gVX7B%2BIDF6dfF53p3RAiAy0Rh2vYBz3SLmSczTex8MJRRg4RdIPX02dQYJ0DJObir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMssJ%2BKu6pHVP21yr6KtwDpGWPiyoZVFx3YDr979IVJRM4gsbiuyfpeKs8YuvsmyeqCsGIq6u4EDbnPB1OAokgwsHCyF3nq0r6ClDNv3o9Lc6zM9eSf8TqWk1y84n6Gk6CUFGUAsOqM7NPhPngKrPiVZXIbSBkxjtbIWX957cerLqGcUrEDmLNOHXlX6%2BmrA56bAVXQK96CdPz9o%2FlvXm%2Bec2mcORLIEzZNdmPlFKPNd2U%2Fo9DtST7XM7irV%2F%2FQiWRfxx3qzolAIgY7V8XAmcl9gJsl3ZTVep0EeO4VUrUts62GFms3mZN0EmxaqW8b6VTGLT5w8LM%2BTXXI6wb17m2njC%2Fjgvd4S2izG%2Bb3F6Jax1Ahpm8mfHSTj72nR%2F5RN1jghtQPxc0Gm%2FexqPLn8NCfrHZzfEkHjlk7wIG%2FOYOC1ORfCtWoHbwBi1IrV%2FE4BbQ3fVPP7ix3a3qDvjHAixhLAlXcIVmdkp7UrHRnNlRX1lmA%2Bj8tJI3B2TNKZYa3X6GbQKOBZTMm00NdWSwcZWC%2F9ISUKVvhHt6svLxTcl8LR4t1aupGlFBBTss%2FSG7h%2B9Mu1XOIKbGlJbOjkyLjzy78JkLbUhJtPHMfwGc3gxYaMEo4xxsVmdJ9aupLK9FASi86odjqu82EIwZWwUwlKrOwQY6pgEV%2BRQWNCtYk3nXYGn1K1ZYh5oilLk2kY%2BH5A8jfO935Ibx8m6ORNwn7B6JZYvhdcijvaD99ohkLitg3bJzsAiaIBnxXKKzm4vXUoLUegq4g1lL3iIloGiWP31auAY2t%2FrfDqVfsx4dVQGS5QcZ3SbBkA9Khzo%2B5%2F7v2R1OkTd3KaiKm%2FWTJqsQpmwVkT0u3ceEAKzBLdoRzSUeOtnbRoq2s1rlsdSl&X-Amz-Signature=b9fcb12d5beeee3d0b5ca77ae9734c516d23b88b65a459ce14cd5d2e8e55571f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK2DYSHL%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T230837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIBjF8SdqVoxcSaoUVaBCwYp3D6gVX7B%2BIDF6dfF53p3RAiAy0Rh2vYBz3SLmSczTex8MJRRg4RdIPX02dQYJ0DJObir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMssJ%2BKu6pHVP21yr6KtwDpGWPiyoZVFx3YDr979IVJRM4gsbiuyfpeKs8YuvsmyeqCsGIq6u4EDbnPB1OAokgwsHCyF3nq0r6ClDNv3o9Lc6zM9eSf8TqWk1y84n6Gk6CUFGUAsOqM7NPhPngKrPiVZXIbSBkxjtbIWX957cerLqGcUrEDmLNOHXlX6%2BmrA56bAVXQK96CdPz9o%2FlvXm%2Bec2mcORLIEzZNdmPlFKPNd2U%2Fo9DtST7XM7irV%2F%2FQiWRfxx3qzolAIgY7V8XAmcl9gJsl3ZTVep0EeO4VUrUts62GFms3mZN0EmxaqW8b6VTGLT5w8LM%2BTXXI6wb17m2njC%2Fjgvd4S2izG%2Bb3F6Jax1Ahpm8mfHSTj72nR%2F5RN1jghtQPxc0Gm%2FexqPLn8NCfrHZzfEkHjlk7wIG%2FOYOC1ORfCtWoHbwBi1IrV%2FE4BbQ3fVPP7ix3a3qDvjHAixhLAlXcIVmdkp7UrHRnNlRX1lmA%2Bj8tJI3B2TNKZYa3X6GbQKOBZTMm00NdWSwcZWC%2F9ISUKVvhHt6svLxTcl8LR4t1aupGlFBBTss%2FSG7h%2B9Mu1XOIKbGlJbOjkyLjzy78JkLbUhJtPHMfwGc3gxYaMEo4xxsVmdJ9aupLK9FASi86odjqu82EIwZWwUwlKrOwQY6pgEV%2BRQWNCtYk3nXYGn1K1ZYh5oilLk2kY%2BH5A8jfO935Ibx8m6ORNwn7B6JZYvhdcijvaD99ohkLitg3bJzsAiaIBnxXKKzm4vXUoLUegq4g1lL3iIloGiWP31auAY2t%2FrfDqVfsx4dVQGS5QcZ3SbBkA9Khzo%2B5%2F7v2R1OkTd3KaiKm%2FWTJqsQpmwVkT0u3ceEAKzBLdoRzSUeOtnbRoq2s1rlsdSl&X-Amz-Signature=bdbd829c660535785f32c22a99b722ce0dfd10deab89d41a32ac1212311c8ca9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK2DYSHL%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T230837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIBjF8SdqVoxcSaoUVaBCwYp3D6gVX7B%2BIDF6dfF53p3RAiAy0Rh2vYBz3SLmSczTex8MJRRg4RdIPX02dQYJ0DJObir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMssJ%2BKu6pHVP21yr6KtwDpGWPiyoZVFx3YDr979IVJRM4gsbiuyfpeKs8YuvsmyeqCsGIq6u4EDbnPB1OAokgwsHCyF3nq0r6ClDNv3o9Lc6zM9eSf8TqWk1y84n6Gk6CUFGUAsOqM7NPhPngKrPiVZXIbSBkxjtbIWX957cerLqGcUrEDmLNOHXlX6%2BmrA56bAVXQK96CdPz9o%2FlvXm%2Bec2mcORLIEzZNdmPlFKPNd2U%2Fo9DtST7XM7irV%2F%2FQiWRfxx3qzolAIgY7V8XAmcl9gJsl3ZTVep0EeO4VUrUts62GFms3mZN0EmxaqW8b6VTGLT5w8LM%2BTXXI6wb17m2njC%2Fjgvd4S2izG%2Bb3F6Jax1Ahpm8mfHSTj72nR%2F5RN1jghtQPxc0Gm%2FexqPLn8NCfrHZzfEkHjlk7wIG%2FOYOC1ORfCtWoHbwBi1IrV%2FE4BbQ3fVPP7ix3a3qDvjHAixhLAlXcIVmdkp7UrHRnNlRX1lmA%2Bj8tJI3B2TNKZYa3X6GbQKOBZTMm00NdWSwcZWC%2F9ISUKVvhHt6svLxTcl8LR4t1aupGlFBBTss%2FSG7h%2B9Mu1XOIKbGlJbOjkyLjzy78JkLbUhJtPHMfwGc3gxYaMEo4xxsVmdJ9aupLK9FASi86odjqu82EIwZWwUwlKrOwQY6pgEV%2BRQWNCtYk3nXYGn1K1ZYh5oilLk2kY%2BH5A8jfO935Ibx8m6ORNwn7B6JZYvhdcijvaD99ohkLitg3bJzsAiaIBnxXKKzm4vXUoLUegq4g1lL3iIloGiWP31auAY2t%2FrfDqVfsx4dVQGS5QcZ3SbBkA9Khzo%2B5%2F7v2R1OkTd3KaiKm%2FWTJqsQpmwVkT0u3ceEAKzBLdoRzSUeOtnbRoq2s1rlsdSl&X-Amz-Signature=7e50626f696dcaec12e880f6a9c44d04ff5894c1d465ae3022d297086977851d&X-Amz-SignedHeaders=host&x-id=GetObject)
