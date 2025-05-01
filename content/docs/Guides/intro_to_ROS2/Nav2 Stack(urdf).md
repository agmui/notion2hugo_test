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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB3HS6JO%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T050952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCaplg3GJxftIkR2hWAHTpo9LBXXPOqaz9JOLpcpZ9duQIhAOMeVP%2BGo57UXpCfsUxBIPgIaqkSd3pUbrJUYGaZxn5uKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznDqATisrwYu7JKhkq3APomSUovFBTxbUoQrVLucB8NrCRth9JUYbyzhfIGS4q%2FotXzf7w6p%2FJuYQis2DvpD9xRKttdRICD01pU%2B%2B%2Fqeb%2Fc4n41ZFthYSDbZDuvknJhJDj7dFtI%2FVWjDYruFjbnW2A2U7LXLThnJ9O%2F0j%2BUm4q4rL2L725%2FW9wfko8NMSiAKP13s0GSoOUqh2CLDXs9UKXfnsEuVf1LpAAB0GacVfPIZCOTT2biR7O5yKc%2B%2F2r%2FP0nmJOXGLAql29LdNnt0quXasV5z8wJPHzzhs8kNsvJtugCNdf67JOnEcRTV0Zq0upbUWHLD2W1RXjGUqBPMEIE0z%2B8xmrogGiFL%2FE0gYR95SN0m8sFUuha0slK9ZPx57vyoKKRZVyQQTDCtZ4FeEGudjFzdOJDPasYhEKsQm6P6UVO%2Bmgugdq%2B7v3GlKCZkfj1yAKwNLnljnV0%2B2RwGrc4eS8L6087wri09ikBO8kV8z7YK4vKVL%2BxApuyt8wn5IsQvJOwzGVmaNlp5bPUJdzXNWpCDYb09Kbhlz4dVQq8mM%2FeeeynlO9t%2FogXEgU0dvLUEIhKIVss9%2BF8YJc%2Ft8ojkubSOsH5M3lMf6PWUt8P19wVI%2B4ayotYD7fQwTTLCLEWoBmkC91lC7j02zDv9cvABjqkAVsnluUFt99%2FHwOqRxjkRK3gw2K383%2BV23WbwQOQVa7uW8qbUxze5%2Fi5cUd%2BfgzHOtGVCu%2FrFxfwGvdZMX6MORCU9w843p6W8kktpPkSGcSw%2BejECTF%2Bv7l93EXGxskwgF4AZ6PCYHbWuHub%2B9GC2mptm0FUtsUTPoKguCc5T3lqKB%2F9v3GzKeBHLfixON8GiOuNYZsT3J8HDEi%2FmqOZpxiHiN%2Bg&X-Amz-Signature=7623ed15e0e806b25785b7400cc00a8e2362fbb2b1500658bd6d2b8dadacf754&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB3HS6JO%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T050952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCaplg3GJxftIkR2hWAHTpo9LBXXPOqaz9JOLpcpZ9duQIhAOMeVP%2BGo57UXpCfsUxBIPgIaqkSd3pUbrJUYGaZxn5uKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznDqATisrwYu7JKhkq3APomSUovFBTxbUoQrVLucB8NrCRth9JUYbyzhfIGS4q%2FotXzf7w6p%2FJuYQis2DvpD9xRKttdRICD01pU%2B%2B%2Fqeb%2Fc4n41ZFthYSDbZDuvknJhJDj7dFtI%2FVWjDYruFjbnW2A2U7LXLThnJ9O%2F0j%2BUm4q4rL2L725%2FW9wfko8NMSiAKP13s0GSoOUqh2CLDXs9UKXfnsEuVf1LpAAB0GacVfPIZCOTT2biR7O5yKc%2B%2F2r%2FP0nmJOXGLAql29LdNnt0quXasV5z8wJPHzzhs8kNsvJtugCNdf67JOnEcRTV0Zq0upbUWHLD2W1RXjGUqBPMEIE0z%2B8xmrogGiFL%2FE0gYR95SN0m8sFUuha0slK9ZPx57vyoKKRZVyQQTDCtZ4FeEGudjFzdOJDPasYhEKsQm6P6UVO%2Bmgugdq%2B7v3GlKCZkfj1yAKwNLnljnV0%2B2RwGrc4eS8L6087wri09ikBO8kV8z7YK4vKVL%2BxApuyt8wn5IsQvJOwzGVmaNlp5bPUJdzXNWpCDYb09Kbhlz4dVQq8mM%2FeeeynlO9t%2FogXEgU0dvLUEIhKIVss9%2BF8YJc%2Ft8ojkubSOsH5M3lMf6PWUt8P19wVI%2B4ayotYD7fQwTTLCLEWoBmkC91lC7j02zDv9cvABjqkAVsnluUFt99%2FHwOqRxjkRK3gw2K383%2BV23WbwQOQVa7uW8qbUxze5%2Fi5cUd%2BfgzHOtGVCu%2FrFxfwGvdZMX6MORCU9w843p6W8kktpPkSGcSw%2BejECTF%2Bv7l93EXGxskwgF4AZ6PCYHbWuHub%2B9GC2mptm0FUtsUTPoKguCc5T3lqKB%2F9v3GzKeBHLfixON8GiOuNYZsT3J8HDEi%2FmqOZpxiHiN%2Bg&X-Amz-Signature=c6e30d088cd3778dcaa42e9017b39e91802eeb7c16a04bffc4578cb12a048385&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB3HS6JO%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T050952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCaplg3GJxftIkR2hWAHTpo9LBXXPOqaz9JOLpcpZ9duQIhAOMeVP%2BGo57UXpCfsUxBIPgIaqkSd3pUbrJUYGaZxn5uKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznDqATisrwYu7JKhkq3APomSUovFBTxbUoQrVLucB8NrCRth9JUYbyzhfIGS4q%2FotXzf7w6p%2FJuYQis2DvpD9xRKttdRICD01pU%2B%2B%2Fqeb%2Fc4n41ZFthYSDbZDuvknJhJDj7dFtI%2FVWjDYruFjbnW2A2U7LXLThnJ9O%2F0j%2BUm4q4rL2L725%2FW9wfko8NMSiAKP13s0GSoOUqh2CLDXs9UKXfnsEuVf1LpAAB0GacVfPIZCOTT2biR7O5yKc%2B%2F2r%2FP0nmJOXGLAql29LdNnt0quXasV5z8wJPHzzhs8kNsvJtugCNdf67JOnEcRTV0Zq0upbUWHLD2W1RXjGUqBPMEIE0z%2B8xmrogGiFL%2FE0gYR95SN0m8sFUuha0slK9ZPx57vyoKKRZVyQQTDCtZ4FeEGudjFzdOJDPasYhEKsQm6P6UVO%2Bmgugdq%2B7v3GlKCZkfj1yAKwNLnljnV0%2B2RwGrc4eS8L6087wri09ikBO8kV8z7YK4vKVL%2BxApuyt8wn5IsQvJOwzGVmaNlp5bPUJdzXNWpCDYb09Kbhlz4dVQq8mM%2FeeeynlO9t%2FogXEgU0dvLUEIhKIVss9%2BF8YJc%2Ft8ojkubSOsH5M3lMf6PWUt8P19wVI%2B4ayotYD7fQwTTLCLEWoBmkC91lC7j02zDv9cvABjqkAVsnluUFt99%2FHwOqRxjkRK3gw2K383%2BV23WbwQOQVa7uW8qbUxze5%2Fi5cUd%2BfgzHOtGVCu%2FrFxfwGvdZMX6MORCU9w843p6W8kktpPkSGcSw%2BejECTF%2Bv7l93EXGxskwgF4AZ6PCYHbWuHub%2B9GC2mptm0FUtsUTPoKguCc5T3lqKB%2F9v3GzKeBHLfixON8GiOuNYZsT3J8HDEi%2FmqOZpxiHiN%2Bg&X-Amz-Signature=384d9e91386ebd56eba6407e475bed265ff1d0aac94b0f6f86897e791aa22908&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB3HS6JO%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T050952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCaplg3GJxftIkR2hWAHTpo9LBXXPOqaz9JOLpcpZ9duQIhAOMeVP%2BGo57UXpCfsUxBIPgIaqkSd3pUbrJUYGaZxn5uKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznDqATisrwYu7JKhkq3APomSUovFBTxbUoQrVLucB8NrCRth9JUYbyzhfIGS4q%2FotXzf7w6p%2FJuYQis2DvpD9xRKttdRICD01pU%2B%2B%2Fqeb%2Fc4n41ZFthYSDbZDuvknJhJDj7dFtI%2FVWjDYruFjbnW2A2U7LXLThnJ9O%2F0j%2BUm4q4rL2L725%2FW9wfko8NMSiAKP13s0GSoOUqh2CLDXs9UKXfnsEuVf1LpAAB0GacVfPIZCOTT2biR7O5yKc%2B%2F2r%2FP0nmJOXGLAql29LdNnt0quXasV5z8wJPHzzhs8kNsvJtugCNdf67JOnEcRTV0Zq0upbUWHLD2W1RXjGUqBPMEIE0z%2B8xmrogGiFL%2FE0gYR95SN0m8sFUuha0slK9ZPx57vyoKKRZVyQQTDCtZ4FeEGudjFzdOJDPasYhEKsQm6P6UVO%2Bmgugdq%2B7v3GlKCZkfj1yAKwNLnljnV0%2B2RwGrc4eS8L6087wri09ikBO8kV8z7YK4vKVL%2BxApuyt8wn5IsQvJOwzGVmaNlp5bPUJdzXNWpCDYb09Kbhlz4dVQq8mM%2FeeeynlO9t%2FogXEgU0dvLUEIhKIVss9%2BF8YJc%2Ft8ojkubSOsH5M3lMf6PWUt8P19wVI%2B4ayotYD7fQwTTLCLEWoBmkC91lC7j02zDv9cvABjqkAVsnluUFt99%2FHwOqRxjkRK3gw2K383%2BV23WbwQOQVa7uW8qbUxze5%2Fi5cUd%2BfgzHOtGVCu%2FrFxfwGvdZMX6MORCU9w843p6W8kktpPkSGcSw%2BejECTF%2Bv7l93EXGxskwgF4AZ6PCYHbWuHub%2B9GC2mptm0FUtsUTPoKguCc5T3lqKB%2F9v3GzKeBHLfixON8GiOuNYZsT3J8HDEi%2FmqOZpxiHiN%2Bg&X-Amz-Signature=e47760b0a9ad9f7d9d0c40963ad70ae237f9231838502fbfaf6d6005db06bd2f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB3HS6JO%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T050952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCaplg3GJxftIkR2hWAHTpo9LBXXPOqaz9JOLpcpZ9duQIhAOMeVP%2BGo57UXpCfsUxBIPgIaqkSd3pUbrJUYGaZxn5uKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznDqATisrwYu7JKhkq3APomSUovFBTxbUoQrVLucB8NrCRth9JUYbyzhfIGS4q%2FotXzf7w6p%2FJuYQis2DvpD9xRKttdRICD01pU%2B%2B%2Fqeb%2Fc4n41ZFthYSDbZDuvknJhJDj7dFtI%2FVWjDYruFjbnW2A2U7LXLThnJ9O%2F0j%2BUm4q4rL2L725%2FW9wfko8NMSiAKP13s0GSoOUqh2CLDXs9UKXfnsEuVf1LpAAB0GacVfPIZCOTT2biR7O5yKc%2B%2F2r%2FP0nmJOXGLAql29LdNnt0quXasV5z8wJPHzzhs8kNsvJtugCNdf67JOnEcRTV0Zq0upbUWHLD2W1RXjGUqBPMEIE0z%2B8xmrogGiFL%2FE0gYR95SN0m8sFUuha0slK9ZPx57vyoKKRZVyQQTDCtZ4FeEGudjFzdOJDPasYhEKsQm6P6UVO%2Bmgugdq%2B7v3GlKCZkfj1yAKwNLnljnV0%2B2RwGrc4eS8L6087wri09ikBO8kV8z7YK4vKVL%2BxApuyt8wn5IsQvJOwzGVmaNlp5bPUJdzXNWpCDYb09Kbhlz4dVQq8mM%2FeeeynlO9t%2FogXEgU0dvLUEIhKIVss9%2BF8YJc%2Ft8ojkubSOsH5M3lMf6PWUt8P19wVI%2B4ayotYD7fQwTTLCLEWoBmkC91lC7j02zDv9cvABjqkAVsnluUFt99%2FHwOqRxjkRK3gw2K383%2BV23WbwQOQVa7uW8qbUxze5%2Fi5cUd%2BfgzHOtGVCu%2FrFxfwGvdZMX6MORCU9w843p6W8kktpPkSGcSw%2BejECTF%2Bv7l93EXGxskwgF4AZ6PCYHbWuHub%2B9GC2mptm0FUtsUTPoKguCc5T3lqKB%2F9v3GzKeBHLfixON8GiOuNYZsT3J8HDEi%2FmqOZpxiHiN%2Bg&X-Amz-Signature=7019d5c7b1fd5cbb5e1388bd7cd514dbba9917e4043be503d042fc569aac71c2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB3HS6JO%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T050952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCaplg3GJxftIkR2hWAHTpo9LBXXPOqaz9JOLpcpZ9duQIhAOMeVP%2BGo57UXpCfsUxBIPgIaqkSd3pUbrJUYGaZxn5uKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznDqATisrwYu7JKhkq3APomSUovFBTxbUoQrVLucB8NrCRth9JUYbyzhfIGS4q%2FotXzf7w6p%2FJuYQis2DvpD9xRKttdRICD01pU%2B%2B%2Fqeb%2Fc4n41ZFthYSDbZDuvknJhJDj7dFtI%2FVWjDYruFjbnW2A2U7LXLThnJ9O%2F0j%2BUm4q4rL2L725%2FW9wfko8NMSiAKP13s0GSoOUqh2CLDXs9UKXfnsEuVf1LpAAB0GacVfPIZCOTT2biR7O5yKc%2B%2F2r%2FP0nmJOXGLAql29LdNnt0quXasV5z8wJPHzzhs8kNsvJtugCNdf67JOnEcRTV0Zq0upbUWHLD2W1RXjGUqBPMEIE0z%2B8xmrogGiFL%2FE0gYR95SN0m8sFUuha0slK9ZPx57vyoKKRZVyQQTDCtZ4FeEGudjFzdOJDPasYhEKsQm6P6UVO%2Bmgugdq%2B7v3GlKCZkfj1yAKwNLnljnV0%2B2RwGrc4eS8L6087wri09ikBO8kV8z7YK4vKVL%2BxApuyt8wn5IsQvJOwzGVmaNlp5bPUJdzXNWpCDYb09Kbhlz4dVQq8mM%2FeeeynlO9t%2FogXEgU0dvLUEIhKIVss9%2BF8YJc%2Ft8ojkubSOsH5M3lMf6PWUt8P19wVI%2B4ayotYD7fQwTTLCLEWoBmkC91lC7j02zDv9cvABjqkAVsnluUFt99%2FHwOqRxjkRK3gw2K383%2BV23WbwQOQVa7uW8qbUxze5%2Fi5cUd%2BfgzHOtGVCu%2FrFxfwGvdZMX6MORCU9w843p6W8kktpPkSGcSw%2BejECTF%2Bv7l93EXGxskwgF4AZ6PCYHbWuHub%2B9GC2mptm0FUtsUTPoKguCc5T3lqKB%2F9v3GzKeBHLfixON8GiOuNYZsT3J8HDEi%2FmqOZpxiHiN%2Bg&X-Amz-Signature=da316706042098acaa3a51149850f61dc782ae679da209041f47fb6360d8c0d3&X-Amz-SignedHeaders=host&x-id=GetObject)
