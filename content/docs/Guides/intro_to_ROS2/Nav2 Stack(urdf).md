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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TJ7YAGA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDnS2ijjfC7Okd3BbgsuGNDqovyEFa7mYFsgEVa9qu9AIgVfXeLXZ7etG1KArWeAkabGRdwNTGN10APpm%2BPT%2BK8%2FoqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FI5rT9A3G%2BxFGy1SrcA%2FJt33HPE05QZcRyPoz1cMxK2V1EUAo7Xg1HM5jfq0NcSR%2BD8MzHqFn3ZzdceHPbQBXP7q5xTUyKMGeut9%2B6gA9F%2F7NNWsrngcGvsk1N0fFR17u2KE5ux6XgsCoVB9ZNvsKrjKfJjadCYx4GfgL4MYLgf9dbcKql8gU823JbT7EZkg9mGd%2FWL9xAIrV6A9GmUXqRKkNmZxyrW5ndpicgir3wWiR7NpBYARelrpGGZM%2B8Ig6RoVHIz7Lwqn4G9pmg2n%2FsUID4sRc894uQbsEL3lTGF3426U3lFSIZEtO6Cpsy3okowp0FsMPkAciW73Cd%2FcvYk9DOhBAN%2FrhqfNAxzpV7S%2BTbdePSdMxjwWZBBtPW0z4dQ42M7%2FauNz7%2F4R2aTKrmyIc4BaT5sux9%2FTnOX2Kv5%2B5nYTGghUMbTTV15BB6qnHZK%2FjdbZ7Bn4blUBleTycCqEl%2F0M%2Fj61ZCy0yu6y8qBgh8wyqTkGWBcBuy7Pg57OJ0TYIT4IMNl2LxpFVGJsunMQjWGtktdT0StYc%2BtfaIgWTkVEk5fZI2%2BHEida51%2Bpd3bNdpff0fw3Blnc6QpKIwk5dYwucnYVYj%2BUu%2B9EYgZy9EOzg%2Fz0MpngONlsQpc1qPKE8xhIygWbMtMJzWxcMGOqUBNxdoO%2BEioY3NwNfmMgujCC77BRJoCvP5Yn4UHSwH2trvRSDUuurHECf8CBP46MjXR%2BeoqfX1EIBmU%2B2VrL3lYzl1oqDdKdCs0TBNKvsw7bay%2FpndHcntUVXeGw0Eid8UFEvod1zPqPqtfRkras8vPj5P%2FkCu9Fhm6YKvkbk8S6qjBX49ZrdVF6xOidMrfj4IdQirCJw9YhCTwn6l%2FGU%2Fp7ouQRAc&X-Amz-Signature=9cf666c236b0c5651d0f727e5d4deb1f2649bf4568c5714b42f5684c92c09f07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TJ7YAGA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDnS2ijjfC7Okd3BbgsuGNDqovyEFa7mYFsgEVa9qu9AIgVfXeLXZ7etG1KArWeAkabGRdwNTGN10APpm%2BPT%2BK8%2FoqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FI5rT9A3G%2BxFGy1SrcA%2FJt33HPE05QZcRyPoz1cMxK2V1EUAo7Xg1HM5jfq0NcSR%2BD8MzHqFn3ZzdceHPbQBXP7q5xTUyKMGeut9%2B6gA9F%2F7NNWsrngcGvsk1N0fFR17u2KE5ux6XgsCoVB9ZNvsKrjKfJjadCYx4GfgL4MYLgf9dbcKql8gU823JbT7EZkg9mGd%2FWL9xAIrV6A9GmUXqRKkNmZxyrW5ndpicgir3wWiR7NpBYARelrpGGZM%2B8Ig6RoVHIz7Lwqn4G9pmg2n%2FsUID4sRc894uQbsEL3lTGF3426U3lFSIZEtO6Cpsy3okowp0FsMPkAciW73Cd%2FcvYk9DOhBAN%2FrhqfNAxzpV7S%2BTbdePSdMxjwWZBBtPW0z4dQ42M7%2FauNz7%2F4R2aTKrmyIc4BaT5sux9%2FTnOX2Kv5%2B5nYTGghUMbTTV15BB6qnHZK%2FjdbZ7Bn4blUBleTycCqEl%2F0M%2Fj61ZCy0yu6y8qBgh8wyqTkGWBcBuy7Pg57OJ0TYIT4IMNl2LxpFVGJsunMQjWGtktdT0StYc%2BtfaIgWTkVEk5fZI2%2BHEida51%2Bpd3bNdpff0fw3Blnc6QpKIwk5dYwucnYVYj%2BUu%2B9EYgZy9EOzg%2Fz0MpngONlsQpc1qPKE8xhIygWbMtMJzWxcMGOqUBNxdoO%2BEioY3NwNfmMgujCC77BRJoCvP5Yn4UHSwH2trvRSDUuurHECf8CBP46MjXR%2BeoqfX1EIBmU%2B2VrL3lYzl1oqDdKdCs0TBNKvsw7bay%2FpndHcntUVXeGw0Eid8UFEvod1zPqPqtfRkras8vPj5P%2FkCu9Fhm6YKvkbk8S6qjBX49ZrdVF6xOidMrfj4IdQirCJw9YhCTwn6l%2FGU%2Fp7ouQRAc&X-Amz-Signature=a0b6ee273df363c7f41dd0969144cd115231111e7eba7ab96bc9395645b72935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TJ7YAGA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDnS2ijjfC7Okd3BbgsuGNDqovyEFa7mYFsgEVa9qu9AIgVfXeLXZ7etG1KArWeAkabGRdwNTGN10APpm%2BPT%2BK8%2FoqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FI5rT9A3G%2BxFGy1SrcA%2FJt33HPE05QZcRyPoz1cMxK2V1EUAo7Xg1HM5jfq0NcSR%2BD8MzHqFn3ZzdceHPbQBXP7q5xTUyKMGeut9%2B6gA9F%2F7NNWsrngcGvsk1N0fFR17u2KE5ux6XgsCoVB9ZNvsKrjKfJjadCYx4GfgL4MYLgf9dbcKql8gU823JbT7EZkg9mGd%2FWL9xAIrV6A9GmUXqRKkNmZxyrW5ndpicgir3wWiR7NpBYARelrpGGZM%2B8Ig6RoVHIz7Lwqn4G9pmg2n%2FsUID4sRc894uQbsEL3lTGF3426U3lFSIZEtO6Cpsy3okowp0FsMPkAciW73Cd%2FcvYk9DOhBAN%2FrhqfNAxzpV7S%2BTbdePSdMxjwWZBBtPW0z4dQ42M7%2FauNz7%2F4R2aTKrmyIc4BaT5sux9%2FTnOX2Kv5%2B5nYTGghUMbTTV15BB6qnHZK%2FjdbZ7Bn4blUBleTycCqEl%2F0M%2Fj61ZCy0yu6y8qBgh8wyqTkGWBcBuy7Pg57OJ0TYIT4IMNl2LxpFVGJsunMQjWGtktdT0StYc%2BtfaIgWTkVEk5fZI2%2BHEida51%2Bpd3bNdpff0fw3Blnc6QpKIwk5dYwucnYVYj%2BUu%2B9EYgZy9EOzg%2Fz0MpngONlsQpc1qPKE8xhIygWbMtMJzWxcMGOqUBNxdoO%2BEioY3NwNfmMgujCC77BRJoCvP5Yn4UHSwH2trvRSDUuurHECf8CBP46MjXR%2BeoqfX1EIBmU%2B2VrL3lYzl1oqDdKdCs0TBNKvsw7bay%2FpndHcntUVXeGw0Eid8UFEvod1zPqPqtfRkras8vPj5P%2FkCu9Fhm6YKvkbk8S6qjBX49ZrdVF6xOidMrfj4IdQirCJw9YhCTwn6l%2FGU%2Fp7ouQRAc&X-Amz-Signature=1723357b598d83982a69f3e44a569b9373fb8b78872a45e9bf3724ffc6d3f1b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TJ7YAGA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDnS2ijjfC7Okd3BbgsuGNDqovyEFa7mYFsgEVa9qu9AIgVfXeLXZ7etG1KArWeAkabGRdwNTGN10APpm%2BPT%2BK8%2FoqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FI5rT9A3G%2BxFGy1SrcA%2FJt33HPE05QZcRyPoz1cMxK2V1EUAo7Xg1HM5jfq0NcSR%2BD8MzHqFn3ZzdceHPbQBXP7q5xTUyKMGeut9%2B6gA9F%2F7NNWsrngcGvsk1N0fFR17u2KE5ux6XgsCoVB9ZNvsKrjKfJjadCYx4GfgL4MYLgf9dbcKql8gU823JbT7EZkg9mGd%2FWL9xAIrV6A9GmUXqRKkNmZxyrW5ndpicgir3wWiR7NpBYARelrpGGZM%2B8Ig6RoVHIz7Lwqn4G9pmg2n%2FsUID4sRc894uQbsEL3lTGF3426U3lFSIZEtO6Cpsy3okowp0FsMPkAciW73Cd%2FcvYk9DOhBAN%2FrhqfNAxzpV7S%2BTbdePSdMxjwWZBBtPW0z4dQ42M7%2FauNz7%2F4R2aTKrmyIc4BaT5sux9%2FTnOX2Kv5%2B5nYTGghUMbTTV15BB6qnHZK%2FjdbZ7Bn4blUBleTycCqEl%2F0M%2Fj61ZCy0yu6y8qBgh8wyqTkGWBcBuy7Pg57OJ0TYIT4IMNl2LxpFVGJsunMQjWGtktdT0StYc%2BtfaIgWTkVEk5fZI2%2BHEida51%2Bpd3bNdpff0fw3Blnc6QpKIwk5dYwucnYVYj%2BUu%2B9EYgZy9EOzg%2Fz0MpngONlsQpc1qPKE8xhIygWbMtMJzWxcMGOqUBNxdoO%2BEioY3NwNfmMgujCC77BRJoCvP5Yn4UHSwH2trvRSDUuurHECf8CBP46MjXR%2BeoqfX1EIBmU%2B2VrL3lYzl1oqDdKdCs0TBNKvsw7bay%2FpndHcntUVXeGw0Eid8UFEvod1zPqPqtfRkras8vPj5P%2FkCu9Fhm6YKvkbk8S6qjBX49ZrdVF6xOidMrfj4IdQirCJw9YhCTwn6l%2FGU%2Fp7ouQRAc&X-Amz-Signature=6ae3193d03071ce22ef1037311457a1bd4ab5ad00635a48d75edcc461f8a8edf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TJ7YAGA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDnS2ijjfC7Okd3BbgsuGNDqovyEFa7mYFsgEVa9qu9AIgVfXeLXZ7etG1KArWeAkabGRdwNTGN10APpm%2BPT%2BK8%2FoqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FI5rT9A3G%2BxFGy1SrcA%2FJt33HPE05QZcRyPoz1cMxK2V1EUAo7Xg1HM5jfq0NcSR%2BD8MzHqFn3ZzdceHPbQBXP7q5xTUyKMGeut9%2B6gA9F%2F7NNWsrngcGvsk1N0fFR17u2KE5ux6XgsCoVB9ZNvsKrjKfJjadCYx4GfgL4MYLgf9dbcKql8gU823JbT7EZkg9mGd%2FWL9xAIrV6A9GmUXqRKkNmZxyrW5ndpicgir3wWiR7NpBYARelrpGGZM%2B8Ig6RoVHIz7Lwqn4G9pmg2n%2FsUID4sRc894uQbsEL3lTGF3426U3lFSIZEtO6Cpsy3okowp0FsMPkAciW73Cd%2FcvYk9DOhBAN%2FrhqfNAxzpV7S%2BTbdePSdMxjwWZBBtPW0z4dQ42M7%2FauNz7%2F4R2aTKrmyIc4BaT5sux9%2FTnOX2Kv5%2B5nYTGghUMbTTV15BB6qnHZK%2FjdbZ7Bn4blUBleTycCqEl%2F0M%2Fj61ZCy0yu6y8qBgh8wyqTkGWBcBuy7Pg57OJ0TYIT4IMNl2LxpFVGJsunMQjWGtktdT0StYc%2BtfaIgWTkVEk5fZI2%2BHEida51%2Bpd3bNdpff0fw3Blnc6QpKIwk5dYwucnYVYj%2BUu%2B9EYgZy9EOzg%2Fz0MpngONlsQpc1qPKE8xhIygWbMtMJzWxcMGOqUBNxdoO%2BEioY3NwNfmMgujCC77BRJoCvP5Yn4UHSwH2trvRSDUuurHECf8CBP46MjXR%2BeoqfX1EIBmU%2B2VrL3lYzl1oqDdKdCs0TBNKvsw7bay%2FpndHcntUVXeGw0Eid8UFEvod1zPqPqtfRkras8vPj5P%2FkCu9Fhm6YKvkbk8S6qjBX49ZrdVF6xOidMrfj4IdQirCJw9YhCTwn6l%2FGU%2Fp7ouQRAc&X-Amz-Signature=f5acda27d8e225e4181242f8a718d5f62fc85897fba41c5c7af98d6624817229&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TJ7YAGA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDnS2ijjfC7Okd3BbgsuGNDqovyEFa7mYFsgEVa9qu9AIgVfXeLXZ7etG1KArWeAkabGRdwNTGN10APpm%2BPT%2BK8%2FoqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FI5rT9A3G%2BxFGy1SrcA%2FJt33HPE05QZcRyPoz1cMxK2V1EUAo7Xg1HM5jfq0NcSR%2BD8MzHqFn3ZzdceHPbQBXP7q5xTUyKMGeut9%2B6gA9F%2F7NNWsrngcGvsk1N0fFR17u2KE5ux6XgsCoVB9ZNvsKrjKfJjadCYx4GfgL4MYLgf9dbcKql8gU823JbT7EZkg9mGd%2FWL9xAIrV6A9GmUXqRKkNmZxyrW5ndpicgir3wWiR7NpBYARelrpGGZM%2B8Ig6RoVHIz7Lwqn4G9pmg2n%2FsUID4sRc894uQbsEL3lTGF3426U3lFSIZEtO6Cpsy3okowp0FsMPkAciW73Cd%2FcvYk9DOhBAN%2FrhqfNAxzpV7S%2BTbdePSdMxjwWZBBtPW0z4dQ42M7%2FauNz7%2F4R2aTKrmyIc4BaT5sux9%2FTnOX2Kv5%2B5nYTGghUMbTTV15BB6qnHZK%2FjdbZ7Bn4blUBleTycCqEl%2F0M%2Fj61ZCy0yu6y8qBgh8wyqTkGWBcBuy7Pg57OJ0TYIT4IMNl2LxpFVGJsunMQjWGtktdT0StYc%2BtfaIgWTkVEk5fZI2%2BHEida51%2Bpd3bNdpff0fw3Blnc6QpKIwk5dYwucnYVYj%2BUu%2B9EYgZy9EOzg%2Fz0MpngONlsQpc1qPKE8xhIygWbMtMJzWxcMGOqUBNxdoO%2BEioY3NwNfmMgujCC77BRJoCvP5Yn4UHSwH2trvRSDUuurHECf8CBP46MjXR%2BeoqfX1EIBmU%2B2VrL3lYzl1oqDdKdCs0TBNKvsw7bay%2FpndHcntUVXeGw0Eid8UFEvod1zPqPqtfRkras8vPj5P%2FkCu9Fhm6YKvkbk8S6qjBX49ZrdVF6xOidMrfj4IdQirCJw9YhCTwn6l%2FGU%2Fp7ouQRAc&X-Amz-Signature=12356291703a4d0f47dd1c5d82a88a46241a3e487c3b4a1eee05a33d4362ab6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
