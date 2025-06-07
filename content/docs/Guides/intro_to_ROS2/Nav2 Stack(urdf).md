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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SCHPKI2%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T131827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk%2FFMOvgn3ptuOPlMB%2FPsbzqEk7SdbsUx7P8UkxCtXGwIgXu0zKp5kgY2TmkLA7O%2FLlONwlG9ba9rp2CANPM8aab8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDJ3N3mkjOY9uKuHVsSrcA1Zf5%2BpaL96HKdZjZLw1%2FdD5Pu1%2FkYnY1xtTi%2BF5Gh2puqxSY4sCZyo24TRpDNLA1LsM%2BEm4V8pI7ornBxFRU5U%2BIu98tEiAsI3njz1OM0S3xMu54%2FxRg2VSJnENimIetBVIogICNIuMb352dOZTq%2FhJg8mIhX2Xlm8CT%2FI71qECObpGELBOCKv02QjJap0M8id%2Fl0hBh0DH17mGMq2mH5PYcPjBGsYQp95bkUiHUmJVtkjo9GPASrYVYhPQuUowiJL1TWdmeTjNFqrqqIoc1nA%2F1UdXynyMOvI5D7uby9kO8Rx5DFcngq4xhDV5ecoCXF45hdiywRsab2JzeI4PaPs0N5ALvYUidYIOgm3rNS%2BF52bl9ArsYTCuo4pbHLEMnQChTP117whiwBSavAXR0zNQ652UZJFD2oj2F61YG%2F5vI3d4pyKeREhc9oMXEVlr2W8%2B5zD5hEATyB7OGYB1zfRHq%2F%2B6hrvKiEqpetK5oMUKNSh8dcco0XOK3FixNrLZgnZSwKJoKBwIIliSroYGKGXKlAEBlakrDgixzbs%2FFDlOwQHNR%2FJ6WAHpZqY8GCpuC0MOKuPVPQNxpRqUANGMRN4zx%2Fn7is47IZPPal8kqWaLWGWnO78xGrMIeY6xMI7EkMIGOqUBG8smjIO73jf8JRmoVAGjjuIkx61tQXrcIwJ6P6FTjFW6tRG73f4lym422dfYt%2BgA7ygy08tXqUNQ%2BP8tBht%2B9411iYTasZUXtoGF4BHtNWw1Mw%2BjG0L9aeBccBl7UMc9NidR%2F0hBy2TBepKNqZmhNPe3HGZzRtn6iIfHNPG30DMFCkvbb8Mkll7fEdPvubwwSF9y1pQGRT5ea3%2Fsm0gWXpgs7mZk&X-Amz-Signature=a763d818504083cd6995c34297a6453afef9496d7771ef474be0ee49a858d1f8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SCHPKI2%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T131827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk%2FFMOvgn3ptuOPlMB%2FPsbzqEk7SdbsUx7P8UkxCtXGwIgXu0zKp5kgY2TmkLA7O%2FLlONwlG9ba9rp2CANPM8aab8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDJ3N3mkjOY9uKuHVsSrcA1Zf5%2BpaL96HKdZjZLw1%2FdD5Pu1%2FkYnY1xtTi%2BF5Gh2puqxSY4sCZyo24TRpDNLA1LsM%2BEm4V8pI7ornBxFRU5U%2BIu98tEiAsI3njz1OM0S3xMu54%2FxRg2VSJnENimIetBVIogICNIuMb352dOZTq%2FhJg8mIhX2Xlm8CT%2FI71qECObpGELBOCKv02QjJap0M8id%2Fl0hBh0DH17mGMq2mH5PYcPjBGsYQp95bkUiHUmJVtkjo9GPASrYVYhPQuUowiJL1TWdmeTjNFqrqqIoc1nA%2F1UdXynyMOvI5D7uby9kO8Rx5DFcngq4xhDV5ecoCXF45hdiywRsab2JzeI4PaPs0N5ALvYUidYIOgm3rNS%2BF52bl9ArsYTCuo4pbHLEMnQChTP117whiwBSavAXR0zNQ652UZJFD2oj2F61YG%2F5vI3d4pyKeREhc9oMXEVlr2W8%2B5zD5hEATyB7OGYB1zfRHq%2F%2B6hrvKiEqpetK5oMUKNSh8dcco0XOK3FixNrLZgnZSwKJoKBwIIliSroYGKGXKlAEBlakrDgixzbs%2FFDlOwQHNR%2FJ6WAHpZqY8GCpuC0MOKuPVPQNxpRqUANGMRN4zx%2Fn7is47IZPPal8kqWaLWGWnO78xGrMIeY6xMI7EkMIGOqUBG8smjIO73jf8JRmoVAGjjuIkx61tQXrcIwJ6P6FTjFW6tRG73f4lym422dfYt%2BgA7ygy08tXqUNQ%2BP8tBht%2B9411iYTasZUXtoGF4BHtNWw1Mw%2BjG0L9aeBccBl7UMc9NidR%2F0hBy2TBepKNqZmhNPe3HGZzRtn6iIfHNPG30DMFCkvbb8Mkll7fEdPvubwwSF9y1pQGRT5ea3%2Fsm0gWXpgs7mZk&X-Amz-Signature=fe4521001690577e13c18599f58e25c031857530010ad438bf80c99f042087fc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SCHPKI2%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T131827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk%2FFMOvgn3ptuOPlMB%2FPsbzqEk7SdbsUx7P8UkxCtXGwIgXu0zKp5kgY2TmkLA7O%2FLlONwlG9ba9rp2CANPM8aab8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDJ3N3mkjOY9uKuHVsSrcA1Zf5%2BpaL96HKdZjZLw1%2FdD5Pu1%2FkYnY1xtTi%2BF5Gh2puqxSY4sCZyo24TRpDNLA1LsM%2BEm4V8pI7ornBxFRU5U%2BIu98tEiAsI3njz1OM0S3xMu54%2FxRg2VSJnENimIetBVIogICNIuMb352dOZTq%2FhJg8mIhX2Xlm8CT%2FI71qECObpGELBOCKv02QjJap0M8id%2Fl0hBh0DH17mGMq2mH5PYcPjBGsYQp95bkUiHUmJVtkjo9GPASrYVYhPQuUowiJL1TWdmeTjNFqrqqIoc1nA%2F1UdXynyMOvI5D7uby9kO8Rx5DFcngq4xhDV5ecoCXF45hdiywRsab2JzeI4PaPs0N5ALvYUidYIOgm3rNS%2BF52bl9ArsYTCuo4pbHLEMnQChTP117whiwBSavAXR0zNQ652UZJFD2oj2F61YG%2F5vI3d4pyKeREhc9oMXEVlr2W8%2B5zD5hEATyB7OGYB1zfRHq%2F%2B6hrvKiEqpetK5oMUKNSh8dcco0XOK3FixNrLZgnZSwKJoKBwIIliSroYGKGXKlAEBlakrDgixzbs%2FFDlOwQHNR%2FJ6WAHpZqY8GCpuC0MOKuPVPQNxpRqUANGMRN4zx%2Fn7is47IZPPal8kqWaLWGWnO78xGrMIeY6xMI7EkMIGOqUBG8smjIO73jf8JRmoVAGjjuIkx61tQXrcIwJ6P6FTjFW6tRG73f4lym422dfYt%2BgA7ygy08tXqUNQ%2BP8tBht%2B9411iYTasZUXtoGF4BHtNWw1Mw%2BjG0L9aeBccBl7UMc9NidR%2F0hBy2TBepKNqZmhNPe3HGZzRtn6iIfHNPG30DMFCkvbb8Mkll7fEdPvubwwSF9y1pQGRT5ea3%2Fsm0gWXpgs7mZk&X-Amz-Signature=16510b069b9a5b77e8e302d8104ff3465499c179ad35b3aad618ac4e98621f4a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SCHPKI2%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T131827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk%2FFMOvgn3ptuOPlMB%2FPsbzqEk7SdbsUx7P8UkxCtXGwIgXu0zKp5kgY2TmkLA7O%2FLlONwlG9ba9rp2CANPM8aab8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDJ3N3mkjOY9uKuHVsSrcA1Zf5%2BpaL96HKdZjZLw1%2FdD5Pu1%2FkYnY1xtTi%2BF5Gh2puqxSY4sCZyo24TRpDNLA1LsM%2BEm4V8pI7ornBxFRU5U%2BIu98tEiAsI3njz1OM0S3xMu54%2FxRg2VSJnENimIetBVIogICNIuMb352dOZTq%2FhJg8mIhX2Xlm8CT%2FI71qECObpGELBOCKv02QjJap0M8id%2Fl0hBh0DH17mGMq2mH5PYcPjBGsYQp95bkUiHUmJVtkjo9GPASrYVYhPQuUowiJL1TWdmeTjNFqrqqIoc1nA%2F1UdXynyMOvI5D7uby9kO8Rx5DFcngq4xhDV5ecoCXF45hdiywRsab2JzeI4PaPs0N5ALvYUidYIOgm3rNS%2BF52bl9ArsYTCuo4pbHLEMnQChTP117whiwBSavAXR0zNQ652UZJFD2oj2F61YG%2F5vI3d4pyKeREhc9oMXEVlr2W8%2B5zD5hEATyB7OGYB1zfRHq%2F%2B6hrvKiEqpetK5oMUKNSh8dcco0XOK3FixNrLZgnZSwKJoKBwIIliSroYGKGXKlAEBlakrDgixzbs%2FFDlOwQHNR%2FJ6WAHpZqY8GCpuC0MOKuPVPQNxpRqUANGMRN4zx%2Fn7is47IZPPal8kqWaLWGWnO78xGrMIeY6xMI7EkMIGOqUBG8smjIO73jf8JRmoVAGjjuIkx61tQXrcIwJ6P6FTjFW6tRG73f4lym422dfYt%2BgA7ygy08tXqUNQ%2BP8tBht%2B9411iYTasZUXtoGF4BHtNWw1Mw%2BjG0L9aeBccBl7UMc9NidR%2F0hBy2TBepKNqZmhNPe3HGZzRtn6iIfHNPG30DMFCkvbb8Mkll7fEdPvubwwSF9y1pQGRT5ea3%2Fsm0gWXpgs7mZk&X-Amz-Signature=c6f127bb2e2a733e5f2e79bf8ecbe216fadb939dd6df29d2f51360d071a90487&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SCHPKI2%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T131827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk%2FFMOvgn3ptuOPlMB%2FPsbzqEk7SdbsUx7P8UkxCtXGwIgXu0zKp5kgY2TmkLA7O%2FLlONwlG9ba9rp2CANPM8aab8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDJ3N3mkjOY9uKuHVsSrcA1Zf5%2BpaL96HKdZjZLw1%2FdD5Pu1%2FkYnY1xtTi%2BF5Gh2puqxSY4sCZyo24TRpDNLA1LsM%2BEm4V8pI7ornBxFRU5U%2BIu98tEiAsI3njz1OM0S3xMu54%2FxRg2VSJnENimIetBVIogICNIuMb352dOZTq%2FhJg8mIhX2Xlm8CT%2FI71qECObpGELBOCKv02QjJap0M8id%2Fl0hBh0DH17mGMq2mH5PYcPjBGsYQp95bkUiHUmJVtkjo9GPASrYVYhPQuUowiJL1TWdmeTjNFqrqqIoc1nA%2F1UdXynyMOvI5D7uby9kO8Rx5DFcngq4xhDV5ecoCXF45hdiywRsab2JzeI4PaPs0N5ALvYUidYIOgm3rNS%2BF52bl9ArsYTCuo4pbHLEMnQChTP117whiwBSavAXR0zNQ652UZJFD2oj2F61YG%2F5vI3d4pyKeREhc9oMXEVlr2W8%2B5zD5hEATyB7OGYB1zfRHq%2F%2B6hrvKiEqpetK5oMUKNSh8dcco0XOK3FixNrLZgnZSwKJoKBwIIliSroYGKGXKlAEBlakrDgixzbs%2FFDlOwQHNR%2FJ6WAHpZqY8GCpuC0MOKuPVPQNxpRqUANGMRN4zx%2Fn7is47IZPPal8kqWaLWGWnO78xGrMIeY6xMI7EkMIGOqUBG8smjIO73jf8JRmoVAGjjuIkx61tQXrcIwJ6P6FTjFW6tRG73f4lym422dfYt%2BgA7ygy08tXqUNQ%2BP8tBht%2B9411iYTasZUXtoGF4BHtNWw1Mw%2BjG0L9aeBccBl7UMc9NidR%2F0hBy2TBepKNqZmhNPe3HGZzRtn6iIfHNPG30DMFCkvbb8Mkll7fEdPvubwwSF9y1pQGRT5ea3%2Fsm0gWXpgs7mZk&X-Amz-Signature=a64aaff3ee0bb12569bf95e0285cb518d16c42fc99321a3db502d948fb20f650&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SCHPKI2%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T131827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk%2FFMOvgn3ptuOPlMB%2FPsbzqEk7SdbsUx7P8UkxCtXGwIgXu0zKp5kgY2TmkLA7O%2FLlONwlG9ba9rp2CANPM8aab8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDJ3N3mkjOY9uKuHVsSrcA1Zf5%2BpaL96HKdZjZLw1%2FdD5Pu1%2FkYnY1xtTi%2BF5Gh2puqxSY4sCZyo24TRpDNLA1LsM%2BEm4V8pI7ornBxFRU5U%2BIu98tEiAsI3njz1OM0S3xMu54%2FxRg2VSJnENimIetBVIogICNIuMb352dOZTq%2FhJg8mIhX2Xlm8CT%2FI71qECObpGELBOCKv02QjJap0M8id%2Fl0hBh0DH17mGMq2mH5PYcPjBGsYQp95bkUiHUmJVtkjo9GPASrYVYhPQuUowiJL1TWdmeTjNFqrqqIoc1nA%2F1UdXynyMOvI5D7uby9kO8Rx5DFcngq4xhDV5ecoCXF45hdiywRsab2JzeI4PaPs0N5ALvYUidYIOgm3rNS%2BF52bl9ArsYTCuo4pbHLEMnQChTP117whiwBSavAXR0zNQ652UZJFD2oj2F61YG%2F5vI3d4pyKeREhc9oMXEVlr2W8%2B5zD5hEATyB7OGYB1zfRHq%2F%2B6hrvKiEqpetK5oMUKNSh8dcco0XOK3FixNrLZgnZSwKJoKBwIIliSroYGKGXKlAEBlakrDgixzbs%2FFDlOwQHNR%2FJ6WAHpZqY8GCpuC0MOKuPVPQNxpRqUANGMRN4zx%2Fn7is47IZPPal8kqWaLWGWnO78xGrMIeY6xMI7EkMIGOqUBG8smjIO73jf8JRmoVAGjjuIkx61tQXrcIwJ6P6FTjFW6tRG73f4lym422dfYt%2BgA7ygy08tXqUNQ%2BP8tBht%2B9411iYTasZUXtoGF4BHtNWw1Mw%2BjG0L9aeBccBl7UMc9NidR%2F0hBy2TBepKNqZmhNPe3HGZzRtn6iIfHNPG30DMFCkvbb8Mkll7fEdPvubwwSF9y1pQGRT5ea3%2Fsm0gWXpgs7mZk&X-Amz-Signature=ca8a246ea31b93eee9eb4c1b8ef01f8eb2fa17d4ca7886ecc363dbe0177f4886&X-Amz-SignedHeaders=host&x-id=GetObject)
