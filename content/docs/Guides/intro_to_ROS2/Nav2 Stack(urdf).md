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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMAKSZFP%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T110126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC5Li9%2FFyUjopUhXSBsHO351882CbpA6Z5%2FzIbL42qb5gIhAKPXBENi3XqCu7CzTnQASGTsF25f2kCY1oKT8SMEABmdKv8DCEMQABoMNjM3NDIzMTgzODA1IgzNMkcaOXHCgspsZ0oq3APy3SV0ewm3sGVUIYdhB%2FIJ3wbrBZsiAr7CL8jaeQRxharIUmmYx9%2Fk88gIp%2F8ME4tUzonOTPZfXIp%2FqsIHWCq5squKFyGkkWPSOf6PxK%2B8Hmm%2FOn40beed1AfHkVzzhafi7L0mMdTZ3qA6s5iVuS7iu3vOeVdsDqIhDJ5EeDeDXK3zsRQJ8YKt%2FUKSbHgQoVpar3jmUiOFlJQvGNqySw26ddIwhhocKRmh0GH0l1Mgy%2BlbYenU7NW%2BekLN3dwq9aiLFdtoP2KyWQ6U4a%2Bu2zwGooeLYXLiAIqG4tT2daYqWRSYGpbxTpLGMVNJ%2F7xa5LNxEI%2Blz%2FmlBd%2FUmYe1IziaLBBbDQOnXBeswmupqsklOzNNHFxzXuYGyEo9VCK5HoRGzMUPzeNtHjhkJqfjhHlrLGIK2EkQqi5Hvw309%2F0%2Bfh6thT6gJAxifC8U2dz87G%2FA4Osa1A8ZYvbAEtfyh7RTCdscve9a0kytgmHDaPOe9hiXBh4rFEnp20nVPgd5iuU173DDPj%2FIZBvCDjiSH9lKuuwquhYilopJlgxqR0BASEkGKixHojRjpl81TsjU3XrKi5ErR1J7v10YmoBDbr3a%2BNzOs9uAxRmzUqf%2FETb%2FwdZUaBFUsgglt%2FnPtTCuvsG9BjqkAY3p6LCfzVFaW8Bhzvy9ilgyAxuRjzstD8Y%2F7mbcCdPuLSqmTn4%2FwigqpNvSIWCtFIF2KaJtW4r81REJ7Ymk8zH4wW0S26k64i6KW5EaeF2ZgcIokXv58LKnQSweg6pmuotN1zygKgam4JdL3jvi5ugNwnbtlvcCJKztYD0fqLY%2FBJs0HyY6uzRTB1n6%2BcHsS%2FFjfCwtGqukFH6tXpLITASXJKia&X-Amz-Signature=dc42b342817650cc65efec012bef269f077507a4555d6d3524634e6393cc04b4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMAKSZFP%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T110126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC5Li9%2FFyUjopUhXSBsHO351882CbpA6Z5%2FzIbL42qb5gIhAKPXBENi3XqCu7CzTnQASGTsF25f2kCY1oKT8SMEABmdKv8DCEMQABoMNjM3NDIzMTgzODA1IgzNMkcaOXHCgspsZ0oq3APy3SV0ewm3sGVUIYdhB%2FIJ3wbrBZsiAr7CL8jaeQRxharIUmmYx9%2Fk88gIp%2F8ME4tUzonOTPZfXIp%2FqsIHWCq5squKFyGkkWPSOf6PxK%2B8Hmm%2FOn40beed1AfHkVzzhafi7L0mMdTZ3qA6s5iVuS7iu3vOeVdsDqIhDJ5EeDeDXK3zsRQJ8YKt%2FUKSbHgQoVpar3jmUiOFlJQvGNqySw26ddIwhhocKRmh0GH0l1Mgy%2BlbYenU7NW%2BekLN3dwq9aiLFdtoP2KyWQ6U4a%2Bu2zwGooeLYXLiAIqG4tT2daYqWRSYGpbxTpLGMVNJ%2F7xa5LNxEI%2Blz%2FmlBd%2FUmYe1IziaLBBbDQOnXBeswmupqsklOzNNHFxzXuYGyEo9VCK5HoRGzMUPzeNtHjhkJqfjhHlrLGIK2EkQqi5Hvw309%2F0%2Bfh6thT6gJAxifC8U2dz87G%2FA4Osa1A8ZYvbAEtfyh7RTCdscve9a0kytgmHDaPOe9hiXBh4rFEnp20nVPgd5iuU173DDPj%2FIZBvCDjiSH9lKuuwquhYilopJlgxqR0BASEkGKixHojRjpl81TsjU3XrKi5ErR1J7v10YmoBDbr3a%2BNzOs9uAxRmzUqf%2FETb%2FwdZUaBFUsgglt%2FnPtTCuvsG9BjqkAY3p6LCfzVFaW8Bhzvy9ilgyAxuRjzstD8Y%2F7mbcCdPuLSqmTn4%2FwigqpNvSIWCtFIF2KaJtW4r81REJ7Ymk8zH4wW0S26k64i6KW5EaeF2ZgcIokXv58LKnQSweg6pmuotN1zygKgam4JdL3jvi5ugNwnbtlvcCJKztYD0fqLY%2FBJs0HyY6uzRTB1n6%2BcHsS%2FFjfCwtGqukFH6tXpLITASXJKia&X-Amz-Signature=f97ab27cdfe1a9a2170343c5df9f64e0bf46840c375b116a5bf1d587166a8332&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMAKSZFP%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T110126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC5Li9%2FFyUjopUhXSBsHO351882CbpA6Z5%2FzIbL42qb5gIhAKPXBENi3XqCu7CzTnQASGTsF25f2kCY1oKT8SMEABmdKv8DCEMQABoMNjM3NDIzMTgzODA1IgzNMkcaOXHCgspsZ0oq3APy3SV0ewm3sGVUIYdhB%2FIJ3wbrBZsiAr7CL8jaeQRxharIUmmYx9%2Fk88gIp%2F8ME4tUzonOTPZfXIp%2FqsIHWCq5squKFyGkkWPSOf6PxK%2B8Hmm%2FOn40beed1AfHkVzzhafi7L0mMdTZ3qA6s5iVuS7iu3vOeVdsDqIhDJ5EeDeDXK3zsRQJ8YKt%2FUKSbHgQoVpar3jmUiOFlJQvGNqySw26ddIwhhocKRmh0GH0l1Mgy%2BlbYenU7NW%2BekLN3dwq9aiLFdtoP2KyWQ6U4a%2Bu2zwGooeLYXLiAIqG4tT2daYqWRSYGpbxTpLGMVNJ%2F7xa5LNxEI%2Blz%2FmlBd%2FUmYe1IziaLBBbDQOnXBeswmupqsklOzNNHFxzXuYGyEo9VCK5HoRGzMUPzeNtHjhkJqfjhHlrLGIK2EkQqi5Hvw309%2F0%2Bfh6thT6gJAxifC8U2dz87G%2FA4Osa1A8ZYvbAEtfyh7RTCdscve9a0kytgmHDaPOe9hiXBh4rFEnp20nVPgd5iuU173DDPj%2FIZBvCDjiSH9lKuuwquhYilopJlgxqR0BASEkGKixHojRjpl81TsjU3XrKi5ErR1J7v10YmoBDbr3a%2BNzOs9uAxRmzUqf%2FETb%2FwdZUaBFUsgglt%2FnPtTCuvsG9BjqkAY3p6LCfzVFaW8Bhzvy9ilgyAxuRjzstD8Y%2F7mbcCdPuLSqmTn4%2FwigqpNvSIWCtFIF2KaJtW4r81REJ7Ymk8zH4wW0S26k64i6KW5EaeF2ZgcIokXv58LKnQSweg6pmuotN1zygKgam4JdL3jvi5ugNwnbtlvcCJKztYD0fqLY%2FBJs0HyY6uzRTB1n6%2BcHsS%2FFjfCwtGqukFH6tXpLITASXJKia&X-Amz-Signature=2a3b177e68e0e33d76f260c4764d69902170d0ca7e0b68917599dc1c01c8d841&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMAKSZFP%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T110126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC5Li9%2FFyUjopUhXSBsHO351882CbpA6Z5%2FzIbL42qb5gIhAKPXBENi3XqCu7CzTnQASGTsF25f2kCY1oKT8SMEABmdKv8DCEMQABoMNjM3NDIzMTgzODA1IgzNMkcaOXHCgspsZ0oq3APy3SV0ewm3sGVUIYdhB%2FIJ3wbrBZsiAr7CL8jaeQRxharIUmmYx9%2Fk88gIp%2F8ME4tUzonOTPZfXIp%2FqsIHWCq5squKFyGkkWPSOf6PxK%2B8Hmm%2FOn40beed1AfHkVzzhafi7L0mMdTZ3qA6s5iVuS7iu3vOeVdsDqIhDJ5EeDeDXK3zsRQJ8YKt%2FUKSbHgQoVpar3jmUiOFlJQvGNqySw26ddIwhhocKRmh0GH0l1Mgy%2BlbYenU7NW%2BekLN3dwq9aiLFdtoP2KyWQ6U4a%2Bu2zwGooeLYXLiAIqG4tT2daYqWRSYGpbxTpLGMVNJ%2F7xa5LNxEI%2Blz%2FmlBd%2FUmYe1IziaLBBbDQOnXBeswmupqsklOzNNHFxzXuYGyEo9VCK5HoRGzMUPzeNtHjhkJqfjhHlrLGIK2EkQqi5Hvw309%2F0%2Bfh6thT6gJAxifC8U2dz87G%2FA4Osa1A8ZYvbAEtfyh7RTCdscve9a0kytgmHDaPOe9hiXBh4rFEnp20nVPgd5iuU173DDPj%2FIZBvCDjiSH9lKuuwquhYilopJlgxqR0BASEkGKixHojRjpl81TsjU3XrKi5ErR1J7v10YmoBDbr3a%2BNzOs9uAxRmzUqf%2FETb%2FwdZUaBFUsgglt%2FnPtTCuvsG9BjqkAY3p6LCfzVFaW8Bhzvy9ilgyAxuRjzstD8Y%2F7mbcCdPuLSqmTn4%2FwigqpNvSIWCtFIF2KaJtW4r81REJ7Ymk8zH4wW0S26k64i6KW5EaeF2ZgcIokXv58LKnQSweg6pmuotN1zygKgam4JdL3jvi5ugNwnbtlvcCJKztYD0fqLY%2FBJs0HyY6uzRTB1n6%2BcHsS%2FFjfCwtGqukFH6tXpLITASXJKia&X-Amz-Signature=0ac6b7665d74208e8ef78662a3f4b44239f1aadc1aa3c9c7131dcf14fd82c862&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMAKSZFP%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T110126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC5Li9%2FFyUjopUhXSBsHO351882CbpA6Z5%2FzIbL42qb5gIhAKPXBENi3XqCu7CzTnQASGTsF25f2kCY1oKT8SMEABmdKv8DCEMQABoMNjM3NDIzMTgzODA1IgzNMkcaOXHCgspsZ0oq3APy3SV0ewm3sGVUIYdhB%2FIJ3wbrBZsiAr7CL8jaeQRxharIUmmYx9%2Fk88gIp%2F8ME4tUzonOTPZfXIp%2FqsIHWCq5squKFyGkkWPSOf6PxK%2B8Hmm%2FOn40beed1AfHkVzzhafi7L0mMdTZ3qA6s5iVuS7iu3vOeVdsDqIhDJ5EeDeDXK3zsRQJ8YKt%2FUKSbHgQoVpar3jmUiOFlJQvGNqySw26ddIwhhocKRmh0GH0l1Mgy%2BlbYenU7NW%2BekLN3dwq9aiLFdtoP2KyWQ6U4a%2Bu2zwGooeLYXLiAIqG4tT2daYqWRSYGpbxTpLGMVNJ%2F7xa5LNxEI%2Blz%2FmlBd%2FUmYe1IziaLBBbDQOnXBeswmupqsklOzNNHFxzXuYGyEo9VCK5HoRGzMUPzeNtHjhkJqfjhHlrLGIK2EkQqi5Hvw309%2F0%2Bfh6thT6gJAxifC8U2dz87G%2FA4Osa1A8ZYvbAEtfyh7RTCdscve9a0kytgmHDaPOe9hiXBh4rFEnp20nVPgd5iuU173DDPj%2FIZBvCDjiSH9lKuuwquhYilopJlgxqR0BASEkGKixHojRjpl81TsjU3XrKi5ErR1J7v10YmoBDbr3a%2BNzOs9uAxRmzUqf%2FETb%2FwdZUaBFUsgglt%2FnPtTCuvsG9BjqkAY3p6LCfzVFaW8Bhzvy9ilgyAxuRjzstD8Y%2F7mbcCdPuLSqmTn4%2FwigqpNvSIWCtFIF2KaJtW4r81REJ7Ymk8zH4wW0S26k64i6KW5EaeF2ZgcIokXv58LKnQSweg6pmuotN1zygKgam4JdL3jvi5ugNwnbtlvcCJKztYD0fqLY%2FBJs0HyY6uzRTB1n6%2BcHsS%2FFjfCwtGqukFH6tXpLITASXJKia&X-Amz-Signature=cec4ee4d0dc5328b340e338617b79861bc0dfde91bd1654ea6f770289007b278&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMAKSZFP%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T110126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC5Li9%2FFyUjopUhXSBsHO351882CbpA6Z5%2FzIbL42qb5gIhAKPXBENi3XqCu7CzTnQASGTsF25f2kCY1oKT8SMEABmdKv8DCEMQABoMNjM3NDIzMTgzODA1IgzNMkcaOXHCgspsZ0oq3APy3SV0ewm3sGVUIYdhB%2FIJ3wbrBZsiAr7CL8jaeQRxharIUmmYx9%2Fk88gIp%2F8ME4tUzonOTPZfXIp%2FqsIHWCq5squKFyGkkWPSOf6PxK%2B8Hmm%2FOn40beed1AfHkVzzhafi7L0mMdTZ3qA6s5iVuS7iu3vOeVdsDqIhDJ5EeDeDXK3zsRQJ8YKt%2FUKSbHgQoVpar3jmUiOFlJQvGNqySw26ddIwhhocKRmh0GH0l1Mgy%2BlbYenU7NW%2BekLN3dwq9aiLFdtoP2KyWQ6U4a%2Bu2zwGooeLYXLiAIqG4tT2daYqWRSYGpbxTpLGMVNJ%2F7xa5LNxEI%2Blz%2FmlBd%2FUmYe1IziaLBBbDQOnXBeswmupqsklOzNNHFxzXuYGyEo9VCK5HoRGzMUPzeNtHjhkJqfjhHlrLGIK2EkQqi5Hvw309%2F0%2Bfh6thT6gJAxifC8U2dz87G%2FA4Osa1A8ZYvbAEtfyh7RTCdscve9a0kytgmHDaPOe9hiXBh4rFEnp20nVPgd5iuU173DDPj%2FIZBvCDjiSH9lKuuwquhYilopJlgxqR0BASEkGKixHojRjpl81TsjU3XrKi5ErR1J7v10YmoBDbr3a%2BNzOs9uAxRmzUqf%2FETb%2FwdZUaBFUsgglt%2FnPtTCuvsG9BjqkAY3p6LCfzVFaW8Bhzvy9ilgyAxuRjzstD8Y%2F7mbcCdPuLSqmTn4%2FwigqpNvSIWCtFIF2KaJtW4r81REJ7Ymk8zH4wW0S26k64i6KW5EaeF2ZgcIokXv58LKnQSweg6pmuotN1zygKgam4JdL3jvi5ugNwnbtlvcCJKztYD0fqLY%2FBJs0HyY6uzRTB1n6%2BcHsS%2FFjfCwtGqukFH6tXpLITASXJKia&X-Amz-Signature=47d845404257a52d089ad2e7a72c84c37226cac669c56f12eefc2404dbdd7ecf&X-Amz-SignedHeaders=host&x-id=GetObject)
