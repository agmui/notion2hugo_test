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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYIVVPIG%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvAirCWLHTkiN1vu8kqiG82eJeBYFB5fhaaK%2FcRa0PNAiBEgvpogd6ov3sICSDdpMG4D7Fn0zEBVaVp3ck4mElh6iqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9uTQjcjHIhoeqOSPKtwDx6eGrL9AGZwDilaDGccgHVhY46ZigyvD8bFcnBARqhNxTlVktESmFc2UgeZnmpkqk2hBADURX7eqE13H%2B01YYb%2B8cj73at9DAU9b4lHSK1Ewf1sS8hhB6v%2BskafJ9F2erHZkmMfdmKP%2BuXL79rmkj8GmewyzPmS65jO2EyVhRiVPmjKOQjsjz6Uau0HCn7UMGwih7VhC6MZjDEovZfFkbKbKBXn1OLfegVKpaQV63bSYp94CxoqKM0Su3kElRjYoDDvCRdTxIxRj2a4UsYL0hPgTEu6uzVPIxoLDBIQhJUB6CYpA6mpMoareIH%2FFG79ZqiuR1apXVrrYDOxgbrsSVCrQvELlr8qXkYRgKi9Dl%2B%2BBUpmcNURiZoI82Iq1yziFDxb%2F3jrM0Y6mOq5f7OURstxhqw5PNvx1sKm%2BDbH%2BuQnaiRMT9FUbKiN1SI3CHAn0nhuUeSVnFA0R8F0ZxTZKwxolX5gwzb0TTnUbtIs0DNXC%2Busvt9JEDbkDb97fvmZVCNlqVp%2FnDkSIFE%2FqbOCG7ajjmwU%2BvAguDyuh0%2Bd2B82N8xy8MFXuCRUoTep7JQM3n8niag9jX0sCIDL%2B1nikMt7I0mcn9eIC1Dxo9jc7jTYL9x3cBTUbstDy34Iwvp3JvgY6pgHy8zUfTFXVYWejrvVXZX2wq%2FZkMs27H86HB88brMNjjo3EG2ece0TIj%2BT40nPIwYYk64QvjHrTyZGSn1kC9DLQMe%2Btuq0N7ROc1buz%2B5pqgCCR5W0Jy0wTDbpgdqr7USpDpQAbJXNoqMjlJ9rcg2CIxiSHIjdRtIdaE1dKz%2BCM3aMByXoRW0oGJHcRtEaye6I6nb57H6TjPMeUNef5DlWFJk4ZsTPP&X-Amz-Signature=80ade90919a283a88abd92b535fb09699342f1da49590c69e3ab947416a9808c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYIVVPIG%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvAirCWLHTkiN1vu8kqiG82eJeBYFB5fhaaK%2FcRa0PNAiBEgvpogd6ov3sICSDdpMG4D7Fn0zEBVaVp3ck4mElh6iqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9uTQjcjHIhoeqOSPKtwDx6eGrL9AGZwDilaDGccgHVhY46ZigyvD8bFcnBARqhNxTlVktESmFc2UgeZnmpkqk2hBADURX7eqE13H%2B01YYb%2B8cj73at9DAU9b4lHSK1Ewf1sS8hhB6v%2BskafJ9F2erHZkmMfdmKP%2BuXL79rmkj8GmewyzPmS65jO2EyVhRiVPmjKOQjsjz6Uau0HCn7UMGwih7VhC6MZjDEovZfFkbKbKBXn1OLfegVKpaQV63bSYp94CxoqKM0Su3kElRjYoDDvCRdTxIxRj2a4UsYL0hPgTEu6uzVPIxoLDBIQhJUB6CYpA6mpMoareIH%2FFG79ZqiuR1apXVrrYDOxgbrsSVCrQvELlr8qXkYRgKi9Dl%2B%2BBUpmcNURiZoI82Iq1yziFDxb%2F3jrM0Y6mOq5f7OURstxhqw5PNvx1sKm%2BDbH%2BuQnaiRMT9FUbKiN1SI3CHAn0nhuUeSVnFA0R8F0ZxTZKwxolX5gwzb0TTnUbtIs0DNXC%2Busvt9JEDbkDb97fvmZVCNlqVp%2FnDkSIFE%2FqbOCG7ajjmwU%2BvAguDyuh0%2Bd2B82N8xy8MFXuCRUoTep7JQM3n8niag9jX0sCIDL%2B1nikMt7I0mcn9eIC1Dxo9jc7jTYL9x3cBTUbstDy34Iwvp3JvgY6pgHy8zUfTFXVYWejrvVXZX2wq%2FZkMs27H86HB88brMNjjo3EG2ece0TIj%2BT40nPIwYYk64QvjHrTyZGSn1kC9DLQMe%2Btuq0N7ROc1buz%2B5pqgCCR5W0Jy0wTDbpgdqr7USpDpQAbJXNoqMjlJ9rcg2CIxiSHIjdRtIdaE1dKz%2BCM3aMByXoRW0oGJHcRtEaye6I6nb57H6TjPMeUNef5DlWFJk4ZsTPP&X-Amz-Signature=ff2fdbac06fc8f0bf778648be8323ae6397a6f6d718f80596c164528e858c2b9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYIVVPIG%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvAirCWLHTkiN1vu8kqiG82eJeBYFB5fhaaK%2FcRa0PNAiBEgvpogd6ov3sICSDdpMG4D7Fn0zEBVaVp3ck4mElh6iqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9uTQjcjHIhoeqOSPKtwDx6eGrL9AGZwDilaDGccgHVhY46ZigyvD8bFcnBARqhNxTlVktESmFc2UgeZnmpkqk2hBADURX7eqE13H%2B01YYb%2B8cj73at9DAU9b4lHSK1Ewf1sS8hhB6v%2BskafJ9F2erHZkmMfdmKP%2BuXL79rmkj8GmewyzPmS65jO2EyVhRiVPmjKOQjsjz6Uau0HCn7UMGwih7VhC6MZjDEovZfFkbKbKBXn1OLfegVKpaQV63bSYp94CxoqKM0Su3kElRjYoDDvCRdTxIxRj2a4UsYL0hPgTEu6uzVPIxoLDBIQhJUB6CYpA6mpMoareIH%2FFG79ZqiuR1apXVrrYDOxgbrsSVCrQvELlr8qXkYRgKi9Dl%2B%2BBUpmcNURiZoI82Iq1yziFDxb%2F3jrM0Y6mOq5f7OURstxhqw5PNvx1sKm%2BDbH%2BuQnaiRMT9FUbKiN1SI3CHAn0nhuUeSVnFA0R8F0ZxTZKwxolX5gwzb0TTnUbtIs0DNXC%2Busvt9JEDbkDb97fvmZVCNlqVp%2FnDkSIFE%2FqbOCG7ajjmwU%2BvAguDyuh0%2Bd2B82N8xy8MFXuCRUoTep7JQM3n8niag9jX0sCIDL%2B1nikMt7I0mcn9eIC1Dxo9jc7jTYL9x3cBTUbstDy34Iwvp3JvgY6pgHy8zUfTFXVYWejrvVXZX2wq%2FZkMs27H86HB88brMNjjo3EG2ece0TIj%2BT40nPIwYYk64QvjHrTyZGSn1kC9DLQMe%2Btuq0N7ROc1buz%2B5pqgCCR5W0Jy0wTDbpgdqr7USpDpQAbJXNoqMjlJ9rcg2CIxiSHIjdRtIdaE1dKz%2BCM3aMByXoRW0oGJHcRtEaye6I6nb57H6TjPMeUNef5DlWFJk4ZsTPP&X-Amz-Signature=d976033175b6b1ad2e1bfd947fc490ca9a8bc6973d2bb454c4a6cc2e723c3d9f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYIVVPIG%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvAirCWLHTkiN1vu8kqiG82eJeBYFB5fhaaK%2FcRa0PNAiBEgvpogd6ov3sICSDdpMG4D7Fn0zEBVaVp3ck4mElh6iqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9uTQjcjHIhoeqOSPKtwDx6eGrL9AGZwDilaDGccgHVhY46ZigyvD8bFcnBARqhNxTlVktESmFc2UgeZnmpkqk2hBADURX7eqE13H%2B01YYb%2B8cj73at9DAU9b4lHSK1Ewf1sS8hhB6v%2BskafJ9F2erHZkmMfdmKP%2BuXL79rmkj8GmewyzPmS65jO2EyVhRiVPmjKOQjsjz6Uau0HCn7UMGwih7VhC6MZjDEovZfFkbKbKBXn1OLfegVKpaQV63bSYp94CxoqKM0Su3kElRjYoDDvCRdTxIxRj2a4UsYL0hPgTEu6uzVPIxoLDBIQhJUB6CYpA6mpMoareIH%2FFG79ZqiuR1apXVrrYDOxgbrsSVCrQvELlr8qXkYRgKi9Dl%2B%2BBUpmcNURiZoI82Iq1yziFDxb%2F3jrM0Y6mOq5f7OURstxhqw5PNvx1sKm%2BDbH%2BuQnaiRMT9FUbKiN1SI3CHAn0nhuUeSVnFA0R8F0ZxTZKwxolX5gwzb0TTnUbtIs0DNXC%2Busvt9JEDbkDb97fvmZVCNlqVp%2FnDkSIFE%2FqbOCG7ajjmwU%2BvAguDyuh0%2Bd2B82N8xy8MFXuCRUoTep7JQM3n8niag9jX0sCIDL%2B1nikMt7I0mcn9eIC1Dxo9jc7jTYL9x3cBTUbstDy34Iwvp3JvgY6pgHy8zUfTFXVYWejrvVXZX2wq%2FZkMs27H86HB88brMNjjo3EG2ece0TIj%2BT40nPIwYYk64QvjHrTyZGSn1kC9DLQMe%2Btuq0N7ROc1buz%2B5pqgCCR5W0Jy0wTDbpgdqr7USpDpQAbJXNoqMjlJ9rcg2CIxiSHIjdRtIdaE1dKz%2BCM3aMByXoRW0oGJHcRtEaye6I6nb57H6TjPMeUNef5DlWFJk4ZsTPP&X-Amz-Signature=365861e4d87ca5e9a18b93e036b2446d2b82234c7bf829a51773cb1e6afb5801&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYIVVPIG%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvAirCWLHTkiN1vu8kqiG82eJeBYFB5fhaaK%2FcRa0PNAiBEgvpogd6ov3sICSDdpMG4D7Fn0zEBVaVp3ck4mElh6iqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9uTQjcjHIhoeqOSPKtwDx6eGrL9AGZwDilaDGccgHVhY46ZigyvD8bFcnBARqhNxTlVktESmFc2UgeZnmpkqk2hBADURX7eqE13H%2B01YYb%2B8cj73at9DAU9b4lHSK1Ewf1sS8hhB6v%2BskafJ9F2erHZkmMfdmKP%2BuXL79rmkj8GmewyzPmS65jO2EyVhRiVPmjKOQjsjz6Uau0HCn7UMGwih7VhC6MZjDEovZfFkbKbKBXn1OLfegVKpaQV63bSYp94CxoqKM0Su3kElRjYoDDvCRdTxIxRj2a4UsYL0hPgTEu6uzVPIxoLDBIQhJUB6CYpA6mpMoareIH%2FFG79ZqiuR1apXVrrYDOxgbrsSVCrQvELlr8qXkYRgKi9Dl%2B%2BBUpmcNURiZoI82Iq1yziFDxb%2F3jrM0Y6mOq5f7OURstxhqw5PNvx1sKm%2BDbH%2BuQnaiRMT9FUbKiN1SI3CHAn0nhuUeSVnFA0R8F0ZxTZKwxolX5gwzb0TTnUbtIs0DNXC%2Busvt9JEDbkDb97fvmZVCNlqVp%2FnDkSIFE%2FqbOCG7ajjmwU%2BvAguDyuh0%2Bd2B82N8xy8MFXuCRUoTep7JQM3n8niag9jX0sCIDL%2B1nikMt7I0mcn9eIC1Dxo9jc7jTYL9x3cBTUbstDy34Iwvp3JvgY6pgHy8zUfTFXVYWejrvVXZX2wq%2FZkMs27H86HB88brMNjjo3EG2ece0TIj%2BT40nPIwYYk64QvjHrTyZGSn1kC9DLQMe%2Btuq0N7ROc1buz%2B5pqgCCR5W0Jy0wTDbpgdqr7USpDpQAbJXNoqMjlJ9rcg2CIxiSHIjdRtIdaE1dKz%2BCM3aMByXoRW0oGJHcRtEaye6I6nb57H6TjPMeUNef5DlWFJk4ZsTPP&X-Amz-Signature=428d126a4be67a2eee22460655d764c6d50b37a71d1c0a0cc1948845f9783598&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYIVVPIG%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvAirCWLHTkiN1vu8kqiG82eJeBYFB5fhaaK%2FcRa0PNAiBEgvpogd6ov3sICSDdpMG4D7Fn0zEBVaVp3ck4mElh6iqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9uTQjcjHIhoeqOSPKtwDx6eGrL9AGZwDilaDGccgHVhY46ZigyvD8bFcnBARqhNxTlVktESmFc2UgeZnmpkqk2hBADURX7eqE13H%2B01YYb%2B8cj73at9DAU9b4lHSK1Ewf1sS8hhB6v%2BskafJ9F2erHZkmMfdmKP%2BuXL79rmkj8GmewyzPmS65jO2EyVhRiVPmjKOQjsjz6Uau0HCn7UMGwih7VhC6MZjDEovZfFkbKbKBXn1OLfegVKpaQV63bSYp94CxoqKM0Su3kElRjYoDDvCRdTxIxRj2a4UsYL0hPgTEu6uzVPIxoLDBIQhJUB6CYpA6mpMoareIH%2FFG79ZqiuR1apXVrrYDOxgbrsSVCrQvELlr8qXkYRgKi9Dl%2B%2BBUpmcNURiZoI82Iq1yziFDxb%2F3jrM0Y6mOq5f7OURstxhqw5PNvx1sKm%2BDbH%2BuQnaiRMT9FUbKiN1SI3CHAn0nhuUeSVnFA0R8F0ZxTZKwxolX5gwzb0TTnUbtIs0DNXC%2Busvt9JEDbkDb97fvmZVCNlqVp%2FnDkSIFE%2FqbOCG7ajjmwU%2BvAguDyuh0%2Bd2B82N8xy8MFXuCRUoTep7JQM3n8niag9jX0sCIDL%2B1nikMt7I0mcn9eIC1Dxo9jc7jTYL9x3cBTUbstDy34Iwvp3JvgY6pgHy8zUfTFXVYWejrvVXZX2wq%2FZkMs27H86HB88brMNjjo3EG2ece0TIj%2BT40nPIwYYk64QvjHrTyZGSn1kC9DLQMe%2Btuq0N7ROc1buz%2B5pqgCCR5W0Jy0wTDbpgdqr7USpDpQAbJXNoqMjlJ9rcg2CIxiSHIjdRtIdaE1dKz%2BCM3aMByXoRW0oGJHcRtEaye6I6nb57H6TjPMeUNef5DlWFJk4ZsTPP&X-Amz-Signature=1086d9b7f384c9abf9d4b17fb6262245e9d3eecd4239f82d81d5a7d87703864e&X-Amz-SignedHeaders=host&x-id=GetObject)
