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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZKMFG4D%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9bDsyjk4bm0kE5%2BbCszwckxlQLV8Kx7%2ByZZ4kMAefRAiAVwcl2oCM267JKYOSBrnRpsPuIY4DEPNdIS5zigrsQnyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMQitN3Gxn%2BzsVxbhKtwDMQjugQrSoEXj9ANO6hUeKaWmy1C2kacVQkpWiipW93s61jv9SOkopjWaphVqRYKzBeBTpwvbHCYSD5ZfZaQB0tDWypCJUpDRzBLNQW9iFrSjo0%2BjPxvcRLZ%2F7ja%2BM7xf6%2BiWcZisLHeUI41oqpbisF1q3Af%2BmuePsjwFXtAiGprhlwGj8yN4iBNyoJdN97VxF52zl1AeuSDGSSY3BWNKx3nwuo2k0w8lZLXMrLccjHerbUpMY13HtqJPc2XHpqixT8VRnuiFatwhlCGpT1IwXdmiJyvC%2Fx0lRSqfJZwumXKJ4CT5KPbULRgd4SLjUvDThy8EudBfMVBqsn8WTk879bA3aDGsTzdM2Lw8XaYcGN4PVlYldOTu6b02djh4ll7EJtsSWlcIMt9Luw4aNI%2BQyFu7lbCnnMDomJgayc%2FhHA8jvKJlAg9lcmTPJaLeQ9t18yA0i3RhyIJqyRh%2Fi0HQGDk5h1xVROxci%2BwdH8ArRzhu2IWcaLpm0SRTw6knheUA5poz6n3knlL8BBdKBEIFBiQGcSuGO%2BpTOmZaS%2F2HHq95GlfoA1NJXNtqqDtCW3ThrtBlHSFCAIpL2T8yRheFZrEvUaOu2gjeA599rJH8EfuxdJzE6LxUvKiRaRYw%2BYPfvQY6pgF7xsutB8BcSU4VwuVzykimBh6Wz5K7aXAaxmsafwCmjhnGGZN95Nklz9UfuPGf54DCWr1ExEQF8z8KW2%2BphvPI5PGz9OVTJHXvDcBeP36pzamjMmEf2IawJM8VInT%2BxSErKKPUEEO5V9UDCOHQsEvoBH4MytPYz%2B9e0ywgKGsy99w%2F0dfFbtuq6obLrbSRX8%2FEy9Ui%2BG%2F0K5tCkk1fuXdZW8T3%2B%2BFu&X-Amz-Signature=bbcd989e1cd6682de94f8e06cb618e48bd62ef711d81cd36bb7ac9446517bc58&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZKMFG4D%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9bDsyjk4bm0kE5%2BbCszwckxlQLV8Kx7%2ByZZ4kMAefRAiAVwcl2oCM267JKYOSBrnRpsPuIY4DEPNdIS5zigrsQnyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMQitN3Gxn%2BzsVxbhKtwDMQjugQrSoEXj9ANO6hUeKaWmy1C2kacVQkpWiipW93s61jv9SOkopjWaphVqRYKzBeBTpwvbHCYSD5ZfZaQB0tDWypCJUpDRzBLNQW9iFrSjo0%2BjPxvcRLZ%2F7ja%2BM7xf6%2BiWcZisLHeUI41oqpbisF1q3Af%2BmuePsjwFXtAiGprhlwGj8yN4iBNyoJdN97VxF52zl1AeuSDGSSY3BWNKx3nwuo2k0w8lZLXMrLccjHerbUpMY13HtqJPc2XHpqixT8VRnuiFatwhlCGpT1IwXdmiJyvC%2Fx0lRSqfJZwumXKJ4CT5KPbULRgd4SLjUvDThy8EudBfMVBqsn8WTk879bA3aDGsTzdM2Lw8XaYcGN4PVlYldOTu6b02djh4ll7EJtsSWlcIMt9Luw4aNI%2BQyFu7lbCnnMDomJgayc%2FhHA8jvKJlAg9lcmTPJaLeQ9t18yA0i3RhyIJqyRh%2Fi0HQGDk5h1xVROxci%2BwdH8ArRzhu2IWcaLpm0SRTw6knheUA5poz6n3knlL8BBdKBEIFBiQGcSuGO%2BpTOmZaS%2F2HHq95GlfoA1NJXNtqqDtCW3ThrtBlHSFCAIpL2T8yRheFZrEvUaOu2gjeA599rJH8EfuxdJzE6LxUvKiRaRYw%2BYPfvQY6pgF7xsutB8BcSU4VwuVzykimBh6Wz5K7aXAaxmsafwCmjhnGGZN95Nklz9UfuPGf54DCWr1ExEQF8z8KW2%2BphvPI5PGz9OVTJHXvDcBeP36pzamjMmEf2IawJM8VInT%2BxSErKKPUEEO5V9UDCOHQsEvoBH4MytPYz%2B9e0ywgKGsy99w%2F0dfFbtuq6obLrbSRX8%2FEy9Ui%2BG%2F0K5tCkk1fuXdZW8T3%2B%2BFu&X-Amz-Signature=32bd8c39976d4390bae9e025e82de6441b78b4e9b58296a15f5a1c6dc43f5b14&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZKMFG4D%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9bDsyjk4bm0kE5%2BbCszwckxlQLV8Kx7%2ByZZ4kMAefRAiAVwcl2oCM267JKYOSBrnRpsPuIY4DEPNdIS5zigrsQnyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMQitN3Gxn%2BzsVxbhKtwDMQjugQrSoEXj9ANO6hUeKaWmy1C2kacVQkpWiipW93s61jv9SOkopjWaphVqRYKzBeBTpwvbHCYSD5ZfZaQB0tDWypCJUpDRzBLNQW9iFrSjo0%2BjPxvcRLZ%2F7ja%2BM7xf6%2BiWcZisLHeUI41oqpbisF1q3Af%2BmuePsjwFXtAiGprhlwGj8yN4iBNyoJdN97VxF52zl1AeuSDGSSY3BWNKx3nwuo2k0w8lZLXMrLccjHerbUpMY13HtqJPc2XHpqixT8VRnuiFatwhlCGpT1IwXdmiJyvC%2Fx0lRSqfJZwumXKJ4CT5KPbULRgd4SLjUvDThy8EudBfMVBqsn8WTk879bA3aDGsTzdM2Lw8XaYcGN4PVlYldOTu6b02djh4ll7EJtsSWlcIMt9Luw4aNI%2BQyFu7lbCnnMDomJgayc%2FhHA8jvKJlAg9lcmTPJaLeQ9t18yA0i3RhyIJqyRh%2Fi0HQGDk5h1xVROxci%2BwdH8ArRzhu2IWcaLpm0SRTw6knheUA5poz6n3knlL8BBdKBEIFBiQGcSuGO%2BpTOmZaS%2F2HHq95GlfoA1NJXNtqqDtCW3ThrtBlHSFCAIpL2T8yRheFZrEvUaOu2gjeA599rJH8EfuxdJzE6LxUvKiRaRYw%2BYPfvQY6pgF7xsutB8BcSU4VwuVzykimBh6Wz5K7aXAaxmsafwCmjhnGGZN95Nklz9UfuPGf54DCWr1ExEQF8z8KW2%2BphvPI5PGz9OVTJHXvDcBeP36pzamjMmEf2IawJM8VInT%2BxSErKKPUEEO5V9UDCOHQsEvoBH4MytPYz%2B9e0ywgKGsy99w%2F0dfFbtuq6obLrbSRX8%2FEy9Ui%2BG%2F0K5tCkk1fuXdZW8T3%2B%2BFu&X-Amz-Signature=bc3620ece60ef2d8494297dba1d8cf12c369e37431872750b1276b517de150c1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZKMFG4D%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9bDsyjk4bm0kE5%2BbCszwckxlQLV8Kx7%2ByZZ4kMAefRAiAVwcl2oCM267JKYOSBrnRpsPuIY4DEPNdIS5zigrsQnyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMQitN3Gxn%2BzsVxbhKtwDMQjugQrSoEXj9ANO6hUeKaWmy1C2kacVQkpWiipW93s61jv9SOkopjWaphVqRYKzBeBTpwvbHCYSD5ZfZaQB0tDWypCJUpDRzBLNQW9iFrSjo0%2BjPxvcRLZ%2F7ja%2BM7xf6%2BiWcZisLHeUI41oqpbisF1q3Af%2BmuePsjwFXtAiGprhlwGj8yN4iBNyoJdN97VxF52zl1AeuSDGSSY3BWNKx3nwuo2k0w8lZLXMrLccjHerbUpMY13HtqJPc2XHpqixT8VRnuiFatwhlCGpT1IwXdmiJyvC%2Fx0lRSqfJZwumXKJ4CT5KPbULRgd4SLjUvDThy8EudBfMVBqsn8WTk879bA3aDGsTzdM2Lw8XaYcGN4PVlYldOTu6b02djh4ll7EJtsSWlcIMt9Luw4aNI%2BQyFu7lbCnnMDomJgayc%2FhHA8jvKJlAg9lcmTPJaLeQ9t18yA0i3RhyIJqyRh%2Fi0HQGDk5h1xVROxci%2BwdH8ArRzhu2IWcaLpm0SRTw6knheUA5poz6n3knlL8BBdKBEIFBiQGcSuGO%2BpTOmZaS%2F2HHq95GlfoA1NJXNtqqDtCW3ThrtBlHSFCAIpL2T8yRheFZrEvUaOu2gjeA599rJH8EfuxdJzE6LxUvKiRaRYw%2BYPfvQY6pgF7xsutB8BcSU4VwuVzykimBh6Wz5K7aXAaxmsafwCmjhnGGZN95Nklz9UfuPGf54DCWr1ExEQF8z8KW2%2BphvPI5PGz9OVTJHXvDcBeP36pzamjMmEf2IawJM8VInT%2BxSErKKPUEEO5V9UDCOHQsEvoBH4MytPYz%2B9e0ywgKGsy99w%2F0dfFbtuq6obLrbSRX8%2FEy9Ui%2BG%2F0K5tCkk1fuXdZW8T3%2B%2BFu&X-Amz-Signature=ec1c0ec3d5c84a36e5a0c15efab9ce66632c9d91eb5d5881b926a0a86c3c001f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZKMFG4D%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9bDsyjk4bm0kE5%2BbCszwckxlQLV8Kx7%2ByZZ4kMAefRAiAVwcl2oCM267JKYOSBrnRpsPuIY4DEPNdIS5zigrsQnyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMQitN3Gxn%2BzsVxbhKtwDMQjugQrSoEXj9ANO6hUeKaWmy1C2kacVQkpWiipW93s61jv9SOkopjWaphVqRYKzBeBTpwvbHCYSD5ZfZaQB0tDWypCJUpDRzBLNQW9iFrSjo0%2BjPxvcRLZ%2F7ja%2BM7xf6%2BiWcZisLHeUI41oqpbisF1q3Af%2BmuePsjwFXtAiGprhlwGj8yN4iBNyoJdN97VxF52zl1AeuSDGSSY3BWNKx3nwuo2k0w8lZLXMrLccjHerbUpMY13HtqJPc2XHpqixT8VRnuiFatwhlCGpT1IwXdmiJyvC%2Fx0lRSqfJZwumXKJ4CT5KPbULRgd4SLjUvDThy8EudBfMVBqsn8WTk879bA3aDGsTzdM2Lw8XaYcGN4PVlYldOTu6b02djh4ll7EJtsSWlcIMt9Luw4aNI%2BQyFu7lbCnnMDomJgayc%2FhHA8jvKJlAg9lcmTPJaLeQ9t18yA0i3RhyIJqyRh%2Fi0HQGDk5h1xVROxci%2BwdH8ArRzhu2IWcaLpm0SRTw6knheUA5poz6n3knlL8BBdKBEIFBiQGcSuGO%2BpTOmZaS%2F2HHq95GlfoA1NJXNtqqDtCW3ThrtBlHSFCAIpL2T8yRheFZrEvUaOu2gjeA599rJH8EfuxdJzE6LxUvKiRaRYw%2BYPfvQY6pgF7xsutB8BcSU4VwuVzykimBh6Wz5K7aXAaxmsafwCmjhnGGZN95Nklz9UfuPGf54DCWr1ExEQF8z8KW2%2BphvPI5PGz9OVTJHXvDcBeP36pzamjMmEf2IawJM8VInT%2BxSErKKPUEEO5V9UDCOHQsEvoBH4MytPYz%2B9e0ywgKGsy99w%2F0dfFbtuq6obLrbSRX8%2FEy9Ui%2BG%2F0K5tCkk1fuXdZW8T3%2B%2BFu&X-Amz-Signature=c0e1111b676e76116918655b220b23cec17f868c694c39a9e303092131a1e1a2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZKMFG4D%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9bDsyjk4bm0kE5%2BbCszwckxlQLV8Kx7%2ByZZ4kMAefRAiAVwcl2oCM267JKYOSBrnRpsPuIY4DEPNdIS5zigrsQnyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMQitN3Gxn%2BzsVxbhKtwDMQjugQrSoEXj9ANO6hUeKaWmy1C2kacVQkpWiipW93s61jv9SOkopjWaphVqRYKzBeBTpwvbHCYSD5ZfZaQB0tDWypCJUpDRzBLNQW9iFrSjo0%2BjPxvcRLZ%2F7ja%2BM7xf6%2BiWcZisLHeUI41oqpbisF1q3Af%2BmuePsjwFXtAiGprhlwGj8yN4iBNyoJdN97VxF52zl1AeuSDGSSY3BWNKx3nwuo2k0w8lZLXMrLccjHerbUpMY13HtqJPc2XHpqixT8VRnuiFatwhlCGpT1IwXdmiJyvC%2Fx0lRSqfJZwumXKJ4CT5KPbULRgd4SLjUvDThy8EudBfMVBqsn8WTk879bA3aDGsTzdM2Lw8XaYcGN4PVlYldOTu6b02djh4ll7EJtsSWlcIMt9Luw4aNI%2BQyFu7lbCnnMDomJgayc%2FhHA8jvKJlAg9lcmTPJaLeQ9t18yA0i3RhyIJqyRh%2Fi0HQGDk5h1xVROxci%2BwdH8ArRzhu2IWcaLpm0SRTw6knheUA5poz6n3knlL8BBdKBEIFBiQGcSuGO%2BpTOmZaS%2F2HHq95GlfoA1NJXNtqqDtCW3ThrtBlHSFCAIpL2T8yRheFZrEvUaOu2gjeA599rJH8EfuxdJzE6LxUvKiRaRYw%2BYPfvQY6pgF7xsutB8BcSU4VwuVzykimBh6Wz5K7aXAaxmsafwCmjhnGGZN95Nklz9UfuPGf54DCWr1ExEQF8z8KW2%2BphvPI5PGz9OVTJHXvDcBeP36pzamjMmEf2IawJM8VInT%2BxSErKKPUEEO5V9UDCOHQsEvoBH4MytPYz%2B9e0ywgKGsy99w%2F0dfFbtuq6obLrbSRX8%2FEy9Ui%2BG%2F0K5tCkk1fuXdZW8T3%2B%2BFu&X-Amz-Signature=f56fa51052e16d7ffbe157979534f4211579461d297785d2bfb8daaa2766aa90&X-Amz-SignedHeaders=host&x-id=GetObject)
