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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THKN4GQ2%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGnLn9HpUspmx1fmr5tbshHs1tXwj4CZ%2FsP9glDVCrtvAiBDLKGHIR%2FYmfGkEogoFl0vcAxmC9D%2BdiOPb95K4zuHVCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMk6M9OYVcu%2F666cR1KtwD%2Fg2hfgGNAP5Jzask4X5BEEEp2Ybz69QsGAUK9dZSL6KYlL2pMBO26IpyA0AW38mRB5CENAY21DD47Sl8FJLsWtp0F5yJxkJTI9lnTZ8Sg2FqDR7sqa8cnmziipDbNG%2FmzNeXSSCvxCU6k39h%2BTAVI5jP%2BHyHseAxvhEFNEzcJhRnCTfErG9tpqwU3bV7j95OIZg%2BHWQa7u7fcBhsUOoMCYL8VAAYICR4QnnPdu0uuvGtRV4sYHjrPFxmV1d%2FN%2F7nizkppdDJTbFs2aNDLZTmpaqWOQsn6vFgc8u7SSF4GVjG8I3imlv%2FmsU%2BMvbUJ56v9yuC4j9ZjKX%2BKG3TjgJZhSh4mhY%2F%2B%2FF%2FrQK82isMOXm%2BXIUGH4VM8M3xLEkSWNrLEJCXw0h59whe8buWv7%2Bf6IYuZi0wCkoD0hQW%2BKc%2B9zdZ82zXBdDrgqGOuujUQ1e3gAz%2BMHzCYOayuygsDFCUpWR3axMMDbtMo2NBYoFFCzDW16zI8ZTKANkqzIc4t5ZS8KpIwEd%2BNzzyj6NOEsW8%2BQJi1HP4CVyLV7dPhZSfxik7JDvbvLYdQdctoF4kESD5jeHoulB4TanNfGDsAzRFnEBrt2knongAlG9VYPO8CuI2p1UKnNEAh00XBxMwsIbawwY6pgE2k1Az7TMek0FUw%2F%2BaDqV4dJffIoj%2Fns22H%2FypBj6dWXpfC4TqbrYd78MNEEfAqad7JLBvFgnvj%2F%2FqB51uR8YlBjm8%2Fwnb%2BZB1vHL%2FQADwaBQokdmntVUsbtFpi5HqQFgqN9RR78eKyQWlD8hqEthX25JDnK8bJODh%2Buu9PmZ5EuzQAtKCVcEvoglV83cYhsyyNbMhevFeiIm2AMrH7fzVJ9KPprCZ&X-Amz-Signature=907854ee821a0b96e45959e3b09a7a5430ce271b6660ff9cdc7985106a49b112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THKN4GQ2%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGnLn9HpUspmx1fmr5tbshHs1tXwj4CZ%2FsP9glDVCrtvAiBDLKGHIR%2FYmfGkEogoFl0vcAxmC9D%2BdiOPb95K4zuHVCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMk6M9OYVcu%2F666cR1KtwD%2Fg2hfgGNAP5Jzask4X5BEEEp2Ybz69QsGAUK9dZSL6KYlL2pMBO26IpyA0AW38mRB5CENAY21DD47Sl8FJLsWtp0F5yJxkJTI9lnTZ8Sg2FqDR7sqa8cnmziipDbNG%2FmzNeXSSCvxCU6k39h%2BTAVI5jP%2BHyHseAxvhEFNEzcJhRnCTfErG9tpqwU3bV7j95OIZg%2BHWQa7u7fcBhsUOoMCYL8VAAYICR4QnnPdu0uuvGtRV4sYHjrPFxmV1d%2FN%2F7nizkppdDJTbFs2aNDLZTmpaqWOQsn6vFgc8u7SSF4GVjG8I3imlv%2FmsU%2BMvbUJ56v9yuC4j9ZjKX%2BKG3TjgJZhSh4mhY%2F%2B%2FF%2FrQK82isMOXm%2BXIUGH4VM8M3xLEkSWNrLEJCXw0h59whe8buWv7%2Bf6IYuZi0wCkoD0hQW%2BKc%2B9zdZ82zXBdDrgqGOuujUQ1e3gAz%2BMHzCYOayuygsDFCUpWR3axMMDbtMo2NBYoFFCzDW16zI8ZTKANkqzIc4t5ZS8KpIwEd%2BNzzyj6NOEsW8%2BQJi1HP4CVyLV7dPhZSfxik7JDvbvLYdQdctoF4kESD5jeHoulB4TanNfGDsAzRFnEBrt2knongAlG9VYPO8CuI2p1UKnNEAh00XBxMwsIbawwY6pgE2k1Az7TMek0FUw%2F%2BaDqV4dJffIoj%2Fns22H%2FypBj6dWXpfC4TqbrYd78MNEEfAqad7JLBvFgnvj%2F%2FqB51uR8YlBjm8%2Fwnb%2BZB1vHL%2FQADwaBQokdmntVUsbtFpi5HqQFgqN9RR78eKyQWlD8hqEthX25JDnK8bJODh%2Buu9PmZ5EuzQAtKCVcEvoglV83cYhsyyNbMhevFeiIm2AMrH7fzVJ9KPprCZ&X-Amz-Signature=cdb2658a989ecf42728935c4bf7dd0f7451cc7b9bb290c1a59be39d4d8f35427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THKN4GQ2%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGnLn9HpUspmx1fmr5tbshHs1tXwj4CZ%2FsP9glDVCrtvAiBDLKGHIR%2FYmfGkEogoFl0vcAxmC9D%2BdiOPb95K4zuHVCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMk6M9OYVcu%2F666cR1KtwD%2Fg2hfgGNAP5Jzask4X5BEEEp2Ybz69QsGAUK9dZSL6KYlL2pMBO26IpyA0AW38mRB5CENAY21DD47Sl8FJLsWtp0F5yJxkJTI9lnTZ8Sg2FqDR7sqa8cnmziipDbNG%2FmzNeXSSCvxCU6k39h%2BTAVI5jP%2BHyHseAxvhEFNEzcJhRnCTfErG9tpqwU3bV7j95OIZg%2BHWQa7u7fcBhsUOoMCYL8VAAYICR4QnnPdu0uuvGtRV4sYHjrPFxmV1d%2FN%2F7nizkppdDJTbFs2aNDLZTmpaqWOQsn6vFgc8u7SSF4GVjG8I3imlv%2FmsU%2BMvbUJ56v9yuC4j9ZjKX%2BKG3TjgJZhSh4mhY%2F%2B%2FF%2FrQK82isMOXm%2BXIUGH4VM8M3xLEkSWNrLEJCXw0h59whe8buWv7%2Bf6IYuZi0wCkoD0hQW%2BKc%2B9zdZ82zXBdDrgqGOuujUQ1e3gAz%2BMHzCYOayuygsDFCUpWR3axMMDbtMo2NBYoFFCzDW16zI8ZTKANkqzIc4t5ZS8KpIwEd%2BNzzyj6NOEsW8%2BQJi1HP4CVyLV7dPhZSfxik7JDvbvLYdQdctoF4kESD5jeHoulB4TanNfGDsAzRFnEBrt2knongAlG9VYPO8CuI2p1UKnNEAh00XBxMwsIbawwY6pgE2k1Az7TMek0FUw%2F%2BaDqV4dJffIoj%2Fns22H%2FypBj6dWXpfC4TqbrYd78MNEEfAqad7JLBvFgnvj%2F%2FqB51uR8YlBjm8%2Fwnb%2BZB1vHL%2FQADwaBQokdmntVUsbtFpi5HqQFgqN9RR78eKyQWlD8hqEthX25JDnK8bJODh%2Buu9PmZ5EuzQAtKCVcEvoglV83cYhsyyNbMhevFeiIm2AMrH7fzVJ9KPprCZ&X-Amz-Signature=a18dd7619dbbf76bf072c081f0c38888f04c1d3b208cc8878a46c0ad9f785bb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THKN4GQ2%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGnLn9HpUspmx1fmr5tbshHs1tXwj4CZ%2FsP9glDVCrtvAiBDLKGHIR%2FYmfGkEogoFl0vcAxmC9D%2BdiOPb95K4zuHVCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMk6M9OYVcu%2F666cR1KtwD%2Fg2hfgGNAP5Jzask4X5BEEEp2Ybz69QsGAUK9dZSL6KYlL2pMBO26IpyA0AW38mRB5CENAY21DD47Sl8FJLsWtp0F5yJxkJTI9lnTZ8Sg2FqDR7sqa8cnmziipDbNG%2FmzNeXSSCvxCU6k39h%2BTAVI5jP%2BHyHseAxvhEFNEzcJhRnCTfErG9tpqwU3bV7j95OIZg%2BHWQa7u7fcBhsUOoMCYL8VAAYICR4QnnPdu0uuvGtRV4sYHjrPFxmV1d%2FN%2F7nizkppdDJTbFs2aNDLZTmpaqWOQsn6vFgc8u7SSF4GVjG8I3imlv%2FmsU%2BMvbUJ56v9yuC4j9ZjKX%2BKG3TjgJZhSh4mhY%2F%2B%2FF%2FrQK82isMOXm%2BXIUGH4VM8M3xLEkSWNrLEJCXw0h59whe8buWv7%2Bf6IYuZi0wCkoD0hQW%2BKc%2B9zdZ82zXBdDrgqGOuujUQ1e3gAz%2BMHzCYOayuygsDFCUpWR3axMMDbtMo2NBYoFFCzDW16zI8ZTKANkqzIc4t5ZS8KpIwEd%2BNzzyj6NOEsW8%2BQJi1HP4CVyLV7dPhZSfxik7JDvbvLYdQdctoF4kESD5jeHoulB4TanNfGDsAzRFnEBrt2knongAlG9VYPO8CuI2p1UKnNEAh00XBxMwsIbawwY6pgE2k1Az7TMek0FUw%2F%2BaDqV4dJffIoj%2Fns22H%2FypBj6dWXpfC4TqbrYd78MNEEfAqad7JLBvFgnvj%2F%2FqB51uR8YlBjm8%2Fwnb%2BZB1vHL%2FQADwaBQokdmntVUsbtFpi5HqQFgqN9RR78eKyQWlD8hqEthX25JDnK8bJODh%2Buu9PmZ5EuzQAtKCVcEvoglV83cYhsyyNbMhevFeiIm2AMrH7fzVJ9KPprCZ&X-Amz-Signature=cb3e623da222daaa84a2ede30158844fcc953067ab23b5cf7ce6eb7c9d51fa71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THKN4GQ2%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGnLn9HpUspmx1fmr5tbshHs1tXwj4CZ%2FsP9glDVCrtvAiBDLKGHIR%2FYmfGkEogoFl0vcAxmC9D%2BdiOPb95K4zuHVCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMk6M9OYVcu%2F666cR1KtwD%2Fg2hfgGNAP5Jzask4X5BEEEp2Ybz69QsGAUK9dZSL6KYlL2pMBO26IpyA0AW38mRB5CENAY21DD47Sl8FJLsWtp0F5yJxkJTI9lnTZ8Sg2FqDR7sqa8cnmziipDbNG%2FmzNeXSSCvxCU6k39h%2BTAVI5jP%2BHyHseAxvhEFNEzcJhRnCTfErG9tpqwU3bV7j95OIZg%2BHWQa7u7fcBhsUOoMCYL8VAAYICR4QnnPdu0uuvGtRV4sYHjrPFxmV1d%2FN%2F7nizkppdDJTbFs2aNDLZTmpaqWOQsn6vFgc8u7SSF4GVjG8I3imlv%2FmsU%2BMvbUJ56v9yuC4j9ZjKX%2BKG3TjgJZhSh4mhY%2F%2B%2FF%2FrQK82isMOXm%2BXIUGH4VM8M3xLEkSWNrLEJCXw0h59whe8buWv7%2Bf6IYuZi0wCkoD0hQW%2BKc%2B9zdZ82zXBdDrgqGOuujUQ1e3gAz%2BMHzCYOayuygsDFCUpWR3axMMDbtMo2NBYoFFCzDW16zI8ZTKANkqzIc4t5ZS8KpIwEd%2BNzzyj6NOEsW8%2BQJi1HP4CVyLV7dPhZSfxik7JDvbvLYdQdctoF4kESD5jeHoulB4TanNfGDsAzRFnEBrt2knongAlG9VYPO8CuI2p1UKnNEAh00XBxMwsIbawwY6pgE2k1Az7TMek0FUw%2F%2BaDqV4dJffIoj%2Fns22H%2FypBj6dWXpfC4TqbrYd78MNEEfAqad7JLBvFgnvj%2F%2FqB51uR8YlBjm8%2Fwnb%2BZB1vHL%2FQADwaBQokdmntVUsbtFpi5HqQFgqN9RR78eKyQWlD8hqEthX25JDnK8bJODh%2Buu9PmZ5EuzQAtKCVcEvoglV83cYhsyyNbMhevFeiIm2AMrH7fzVJ9KPprCZ&X-Amz-Signature=3610e8529638c6fc42eb40297ce9b8d1bffdd9a1faddf91c2c8f0ee8654e118a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THKN4GQ2%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGnLn9HpUspmx1fmr5tbshHs1tXwj4CZ%2FsP9glDVCrtvAiBDLKGHIR%2FYmfGkEogoFl0vcAxmC9D%2BdiOPb95K4zuHVCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMk6M9OYVcu%2F666cR1KtwD%2Fg2hfgGNAP5Jzask4X5BEEEp2Ybz69QsGAUK9dZSL6KYlL2pMBO26IpyA0AW38mRB5CENAY21DD47Sl8FJLsWtp0F5yJxkJTI9lnTZ8Sg2FqDR7sqa8cnmziipDbNG%2FmzNeXSSCvxCU6k39h%2BTAVI5jP%2BHyHseAxvhEFNEzcJhRnCTfErG9tpqwU3bV7j95OIZg%2BHWQa7u7fcBhsUOoMCYL8VAAYICR4QnnPdu0uuvGtRV4sYHjrPFxmV1d%2FN%2F7nizkppdDJTbFs2aNDLZTmpaqWOQsn6vFgc8u7SSF4GVjG8I3imlv%2FmsU%2BMvbUJ56v9yuC4j9ZjKX%2BKG3TjgJZhSh4mhY%2F%2B%2FF%2FrQK82isMOXm%2BXIUGH4VM8M3xLEkSWNrLEJCXw0h59whe8buWv7%2Bf6IYuZi0wCkoD0hQW%2BKc%2B9zdZ82zXBdDrgqGOuujUQ1e3gAz%2BMHzCYOayuygsDFCUpWR3axMMDbtMo2NBYoFFCzDW16zI8ZTKANkqzIc4t5ZS8KpIwEd%2BNzzyj6NOEsW8%2BQJi1HP4CVyLV7dPhZSfxik7JDvbvLYdQdctoF4kESD5jeHoulB4TanNfGDsAzRFnEBrt2knongAlG9VYPO8CuI2p1UKnNEAh00XBxMwsIbawwY6pgE2k1Az7TMek0FUw%2F%2BaDqV4dJffIoj%2Fns22H%2FypBj6dWXpfC4TqbrYd78MNEEfAqad7JLBvFgnvj%2F%2FqB51uR8YlBjm8%2Fwnb%2BZB1vHL%2FQADwaBQokdmntVUsbtFpi5HqQFgqN9RR78eKyQWlD8hqEthX25JDnK8bJODh%2Buu9PmZ5EuzQAtKCVcEvoglV83cYhsyyNbMhevFeiIm2AMrH7fzVJ9KPprCZ&X-Amz-Signature=dd60dbf3f53b5bf4e37f3a4bef8f615554ad5027bceca039004061ff27eaf333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
