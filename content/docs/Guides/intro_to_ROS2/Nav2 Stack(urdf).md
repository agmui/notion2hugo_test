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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L2SZBIN%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDo7vhS%2FABHlGVrmVUP58ueiUvlS4h%2F6j3ZoAzYFTmTlgIgJ1tlKAWuUyblZqxRNE%2BhIQI4eLuSDlsZ9ZBd1wc9bj4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJAUyZK2ghi4IxJm8CrcA4fpWUX5OKM3P0cH8N7I00YXSVORF71ayGZSYajFoU02kr2%2F%2BoBCGdWG60HZRRQv8BzOui2yIP8QzzyemytSkmFKtpo7GbOkj%2Fc0Zt3QlfUTozj8JMx6PyyqD6ZB6QD33Sx8mDHd4iAOx0KjbtFmYA4dT7rp1yF7J7aL42qoKJA9CD7wJShjgSIjhAVwIy3M7GuKMHq4oumOZXd%2FwEuc%2BNIMcUEJvvlXeGWsVVkDKz607RnLVsNgHnEirTIDw52sSLU8AMOClXk109FeLBmIF2TTEL3s6d72EsFNdRFAO7FQUpyCi3L0pUUX9msDitJJcO0%2FQX24FiozX8JPBRzGNshRLwhBtjHI8zxVAibsjzreKsy0NZSwx4LTd3CrtX1TXhq1HypQVIWPWSTV5gVdHvmzgk2zXNMW3VQntwe%2FNBFY%2FLALlRuEj%2FAUqL07FEfss2SciyD3q6cZzOVm0vv7fy6pf0Zi9x8nQS6U368oJagC9SlQ9wedGeFtecvu17TllU4OifUOdU0rfClvB%2B9Os6hIY752%2FegWfPQ9At7FhC%2FOJAtR%2FcrpFTTh7EG6CqNr8SNCWBibkJwp5ZqQVBdbs3f58Yay2luDmKA%2BmS5LWHP1YqsLBG7egpADICrHMIa9rr4GOqUBauvBGIHcFCMeqqKbjD7nocNMHsUx1vdVewF%2B90%2BjUsSd06w0CSq%2BvAhN48IqNEPahIYmN7PQudFoWDGSDYCcbGyjcvJBbgdv3vLKUJ9sirpIb1EOPTgt5Mfl98Bjx1Ah8oQhdmQ6P6ZpCdKoDDC8Jk8QON1X6pzEuHNmXSzZVpC24xAbz6d6mMSEsyvLpGTrgUebQCcHZGVFVFX8k10iWia6ztDr&X-Amz-Signature=e1cc672a25caf4ebaebe4ad8b58539ff07b771b140ace36b55a49fe67d015acf&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L2SZBIN%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDo7vhS%2FABHlGVrmVUP58ueiUvlS4h%2F6j3ZoAzYFTmTlgIgJ1tlKAWuUyblZqxRNE%2BhIQI4eLuSDlsZ9ZBd1wc9bj4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJAUyZK2ghi4IxJm8CrcA4fpWUX5OKM3P0cH8N7I00YXSVORF71ayGZSYajFoU02kr2%2F%2BoBCGdWG60HZRRQv8BzOui2yIP8QzzyemytSkmFKtpo7GbOkj%2Fc0Zt3QlfUTozj8JMx6PyyqD6ZB6QD33Sx8mDHd4iAOx0KjbtFmYA4dT7rp1yF7J7aL42qoKJA9CD7wJShjgSIjhAVwIy3M7GuKMHq4oumOZXd%2FwEuc%2BNIMcUEJvvlXeGWsVVkDKz607RnLVsNgHnEirTIDw52sSLU8AMOClXk109FeLBmIF2TTEL3s6d72EsFNdRFAO7FQUpyCi3L0pUUX9msDitJJcO0%2FQX24FiozX8JPBRzGNshRLwhBtjHI8zxVAibsjzreKsy0NZSwx4LTd3CrtX1TXhq1HypQVIWPWSTV5gVdHvmzgk2zXNMW3VQntwe%2FNBFY%2FLALlRuEj%2FAUqL07FEfss2SciyD3q6cZzOVm0vv7fy6pf0Zi9x8nQS6U368oJagC9SlQ9wedGeFtecvu17TllU4OifUOdU0rfClvB%2B9Os6hIY752%2FegWfPQ9At7FhC%2FOJAtR%2FcrpFTTh7EG6CqNr8SNCWBibkJwp5ZqQVBdbs3f58Yay2luDmKA%2BmS5LWHP1YqsLBG7egpADICrHMIa9rr4GOqUBauvBGIHcFCMeqqKbjD7nocNMHsUx1vdVewF%2B90%2BjUsSd06w0CSq%2BvAhN48IqNEPahIYmN7PQudFoWDGSDYCcbGyjcvJBbgdv3vLKUJ9sirpIb1EOPTgt5Mfl98Bjx1Ah8oQhdmQ6P6ZpCdKoDDC8Jk8QON1X6pzEuHNmXSzZVpC24xAbz6d6mMSEsyvLpGTrgUebQCcHZGVFVFX8k10iWia6ztDr&X-Amz-Signature=ebed58bf62241f0ad67ee359cd90ec0ae24c267c4e56a4eb619b9378be63561c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L2SZBIN%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDo7vhS%2FABHlGVrmVUP58ueiUvlS4h%2F6j3ZoAzYFTmTlgIgJ1tlKAWuUyblZqxRNE%2BhIQI4eLuSDlsZ9ZBd1wc9bj4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJAUyZK2ghi4IxJm8CrcA4fpWUX5OKM3P0cH8N7I00YXSVORF71ayGZSYajFoU02kr2%2F%2BoBCGdWG60HZRRQv8BzOui2yIP8QzzyemytSkmFKtpo7GbOkj%2Fc0Zt3QlfUTozj8JMx6PyyqD6ZB6QD33Sx8mDHd4iAOx0KjbtFmYA4dT7rp1yF7J7aL42qoKJA9CD7wJShjgSIjhAVwIy3M7GuKMHq4oumOZXd%2FwEuc%2BNIMcUEJvvlXeGWsVVkDKz607RnLVsNgHnEirTIDw52sSLU8AMOClXk109FeLBmIF2TTEL3s6d72EsFNdRFAO7FQUpyCi3L0pUUX9msDitJJcO0%2FQX24FiozX8JPBRzGNshRLwhBtjHI8zxVAibsjzreKsy0NZSwx4LTd3CrtX1TXhq1HypQVIWPWSTV5gVdHvmzgk2zXNMW3VQntwe%2FNBFY%2FLALlRuEj%2FAUqL07FEfss2SciyD3q6cZzOVm0vv7fy6pf0Zi9x8nQS6U368oJagC9SlQ9wedGeFtecvu17TllU4OifUOdU0rfClvB%2B9Os6hIY752%2FegWfPQ9At7FhC%2FOJAtR%2FcrpFTTh7EG6CqNr8SNCWBibkJwp5ZqQVBdbs3f58Yay2luDmKA%2BmS5LWHP1YqsLBG7egpADICrHMIa9rr4GOqUBauvBGIHcFCMeqqKbjD7nocNMHsUx1vdVewF%2B90%2BjUsSd06w0CSq%2BvAhN48IqNEPahIYmN7PQudFoWDGSDYCcbGyjcvJBbgdv3vLKUJ9sirpIb1EOPTgt5Mfl98Bjx1Ah8oQhdmQ6P6ZpCdKoDDC8Jk8QON1X6pzEuHNmXSzZVpC24xAbz6d6mMSEsyvLpGTrgUebQCcHZGVFVFX8k10iWia6ztDr&X-Amz-Signature=1f9ef128599ee6096273aef163028d82f180de16347bb29d968855f356daeced&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L2SZBIN%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDo7vhS%2FABHlGVrmVUP58ueiUvlS4h%2F6j3ZoAzYFTmTlgIgJ1tlKAWuUyblZqxRNE%2BhIQI4eLuSDlsZ9ZBd1wc9bj4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJAUyZK2ghi4IxJm8CrcA4fpWUX5OKM3P0cH8N7I00YXSVORF71ayGZSYajFoU02kr2%2F%2BoBCGdWG60HZRRQv8BzOui2yIP8QzzyemytSkmFKtpo7GbOkj%2Fc0Zt3QlfUTozj8JMx6PyyqD6ZB6QD33Sx8mDHd4iAOx0KjbtFmYA4dT7rp1yF7J7aL42qoKJA9CD7wJShjgSIjhAVwIy3M7GuKMHq4oumOZXd%2FwEuc%2BNIMcUEJvvlXeGWsVVkDKz607RnLVsNgHnEirTIDw52sSLU8AMOClXk109FeLBmIF2TTEL3s6d72EsFNdRFAO7FQUpyCi3L0pUUX9msDitJJcO0%2FQX24FiozX8JPBRzGNshRLwhBtjHI8zxVAibsjzreKsy0NZSwx4LTd3CrtX1TXhq1HypQVIWPWSTV5gVdHvmzgk2zXNMW3VQntwe%2FNBFY%2FLALlRuEj%2FAUqL07FEfss2SciyD3q6cZzOVm0vv7fy6pf0Zi9x8nQS6U368oJagC9SlQ9wedGeFtecvu17TllU4OifUOdU0rfClvB%2B9Os6hIY752%2FegWfPQ9At7FhC%2FOJAtR%2FcrpFTTh7EG6CqNr8SNCWBibkJwp5ZqQVBdbs3f58Yay2luDmKA%2BmS5LWHP1YqsLBG7egpADICrHMIa9rr4GOqUBauvBGIHcFCMeqqKbjD7nocNMHsUx1vdVewF%2B90%2BjUsSd06w0CSq%2BvAhN48IqNEPahIYmN7PQudFoWDGSDYCcbGyjcvJBbgdv3vLKUJ9sirpIb1EOPTgt5Mfl98Bjx1Ah8oQhdmQ6P6ZpCdKoDDC8Jk8QON1X6pzEuHNmXSzZVpC24xAbz6d6mMSEsyvLpGTrgUebQCcHZGVFVFX8k10iWia6ztDr&X-Amz-Signature=529c25ba6c7fa61b6aa5ca3f5db43894e4668ce687bab9ef96a0ad566e582877&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L2SZBIN%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDo7vhS%2FABHlGVrmVUP58ueiUvlS4h%2F6j3ZoAzYFTmTlgIgJ1tlKAWuUyblZqxRNE%2BhIQI4eLuSDlsZ9ZBd1wc9bj4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJAUyZK2ghi4IxJm8CrcA4fpWUX5OKM3P0cH8N7I00YXSVORF71ayGZSYajFoU02kr2%2F%2BoBCGdWG60HZRRQv8BzOui2yIP8QzzyemytSkmFKtpo7GbOkj%2Fc0Zt3QlfUTozj8JMx6PyyqD6ZB6QD33Sx8mDHd4iAOx0KjbtFmYA4dT7rp1yF7J7aL42qoKJA9CD7wJShjgSIjhAVwIy3M7GuKMHq4oumOZXd%2FwEuc%2BNIMcUEJvvlXeGWsVVkDKz607RnLVsNgHnEirTIDw52sSLU8AMOClXk109FeLBmIF2TTEL3s6d72EsFNdRFAO7FQUpyCi3L0pUUX9msDitJJcO0%2FQX24FiozX8JPBRzGNshRLwhBtjHI8zxVAibsjzreKsy0NZSwx4LTd3CrtX1TXhq1HypQVIWPWSTV5gVdHvmzgk2zXNMW3VQntwe%2FNBFY%2FLALlRuEj%2FAUqL07FEfss2SciyD3q6cZzOVm0vv7fy6pf0Zi9x8nQS6U368oJagC9SlQ9wedGeFtecvu17TllU4OifUOdU0rfClvB%2B9Os6hIY752%2FegWfPQ9At7FhC%2FOJAtR%2FcrpFTTh7EG6CqNr8SNCWBibkJwp5ZqQVBdbs3f58Yay2luDmKA%2BmS5LWHP1YqsLBG7egpADICrHMIa9rr4GOqUBauvBGIHcFCMeqqKbjD7nocNMHsUx1vdVewF%2B90%2BjUsSd06w0CSq%2BvAhN48IqNEPahIYmN7PQudFoWDGSDYCcbGyjcvJBbgdv3vLKUJ9sirpIb1EOPTgt5Mfl98Bjx1Ah8oQhdmQ6P6ZpCdKoDDC8Jk8QON1X6pzEuHNmXSzZVpC24xAbz6d6mMSEsyvLpGTrgUebQCcHZGVFVFX8k10iWia6ztDr&X-Amz-Signature=5a313c3001ce3c7245111dac97ef94bc6d451ff2f281cfd23f79119a5b20dd46&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L2SZBIN%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDo7vhS%2FABHlGVrmVUP58ueiUvlS4h%2F6j3ZoAzYFTmTlgIgJ1tlKAWuUyblZqxRNE%2BhIQI4eLuSDlsZ9ZBd1wc9bj4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJAUyZK2ghi4IxJm8CrcA4fpWUX5OKM3P0cH8N7I00YXSVORF71ayGZSYajFoU02kr2%2F%2BoBCGdWG60HZRRQv8BzOui2yIP8QzzyemytSkmFKtpo7GbOkj%2Fc0Zt3QlfUTozj8JMx6PyyqD6ZB6QD33Sx8mDHd4iAOx0KjbtFmYA4dT7rp1yF7J7aL42qoKJA9CD7wJShjgSIjhAVwIy3M7GuKMHq4oumOZXd%2FwEuc%2BNIMcUEJvvlXeGWsVVkDKz607RnLVsNgHnEirTIDw52sSLU8AMOClXk109FeLBmIF2TTEL3s6d72EsFNdRFAO7FQUpyCi3L0pUUX9msDitJJcO0%2FQX24FiozX8JPBRzGNshRLwhBtjHI8zxVAibsjzreKsy0NZSwx4LTd3CrtX1TXhq1HypQVIWPWSTV5gVdHvmzgk2zXNMW3VQntwe%2FNBFY%2FLALlRuEj%2FAUqL07FEfss2SciyD3q6cZzOVm0vv7fy6pf0Zi9x8nQS6U368oJagC9SlQ9wedGeFtecvu17TllU4OifUOdU0rfClvB%2B9Os6hIY752%2FegWfPQ9At7FhC%2FOJAtR%2FcrpFTTh7EG6CqNr8SNCWBibkJwp5ZqQVBdbs3f58Yay2luDmKA%2BmS5LWHP1YqsLBG7egpADICrHMIa9rr4GOqUBauvBGIHcFCMeqqKbjD7nocNMHsUx1vdVewF%2B90%2BjUsSd06w0CSq%2BvAhN48IqNEPahIYmN7PQudFoWDGSDYCcbGyjcvJBbgdv3vLKUJ9sirpIb1EOPTgt5Mfl98Bjx1Ah8oQhdmQ6P6ZpCdKoDDC8Jk8QON1X6pzEuHNmXSzZVpC24xAbz6d6mMSEsyvLpGTrgUebQCcHZGVFVFX8k10iWia6ztDr&X-Amz-Signature=bd1eb7633480d14ef07c0fad5f59d294ea1d0d13a37e9009939d2bd7f1d65224&X-Amz-SignedHeaders=host&x-id=GetObject)
