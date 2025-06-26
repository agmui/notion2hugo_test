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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO6PXBBS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQD7YTRoX%2BC%2FW0Rj8eFzDbqf7acvaGbA6dzWUrMTnVYK1QIhAIX2IB8ihchIIVLObHowkEpr6a4ioqmoiuFzUimQkVzIKv8DCFwQABoMNjM3NDIzMTgzODA1IgznQqoDTC1p7dNQzC0q3AOMikhLXe3MqRZF5IzqviGLg3ZPVU%2BovvDCWI%2B3auvpEnGabR8R0XrfIf1NI7d%2BiY%2BrLHRljMrWuRN%2BRIWMx2VoanG9e46e0Vezj2G1gHI4wtUl2KU7CTDgQ2vEuk3f%2BlHHUxqeSwQ30%2FJCRUXL0zlWFE6KrNs0Yf0BpD2ilxbXzRePrGl7qepxbKk9Ay9Fxlx6JYJmX%2B%2FYi1ZgNL4POvvLeGajjCRsH2yrHw7sJ%2Fjyk0vPtc%2B59vfDl3FyQp59FC26PEfIbY7juEX9xPDidBcV3kHG9n9HTYh2NWwmsBOAz7a%2FA3BQmD5XquRPdB7Ry2MVYqbvvDj35G75O1wRT4SrkhP5lGQgZEaJx26%2BOVPMHxfi2UTk732XRElO5qO5X7uICtNIPh%2FmXxT%2F%2FxauS2C3NNgWiBipUT7x71XQv9%2F8%2FpS4SNsHrra%2BNgcwBSPx3QxsWJIkqBnysCv%2FNelA0lolrhn5YPwF4oQbwOdGA%2Bt%2FElTZaQw4wXXMSWmisGILTL8UIq4C7Xyyf2qSSyaa6vujspYQXXoRhhUd2hyMIf%2BiddxNYDT9jm8k%2BpHICxzU%2FxZIUqeQeehu4wdoBwJHBCItecrcR%2FQIlKol2iY4TCLTl7GhFr2cljReA6yktzC%2BwfTCBjqkAdba%2FbP2SjhGLRgtdaCm3cV5e%2Ff5Ic13ojVy2n%2FHo%2ByNHfK48BU2KnJcesX96mlKYHM3P2%2FjEdNpciUYVWm7HPTETVS%2BTNthALcvJYao4psfbE6Dw%2BHLYW0yAfVR5L%2BeuUrwYzOrRQj06rJcjIXUBEzEW8gXN4ntUUhVO%2BcWnLp2aFeuerFjEpv6Ur2gdmLobLtiiWhsCKz%2FKXA7W%2BQCO4fK3LCU&X-Amz-Signature=6977865671afe4ab2d73d2fba1f00dcbb2f6780585bb60646b81c3dd9ffd2187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO6PXBBS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQD7YTRoX%2BC%2FW0Rj8eFzDbqf7acvaGbA6dzWUrMTnVYK1QIhAIX2IB8ihchIIVLObHowkEpr6a4ioqmoiuFzUimQkVzIKv8DCFwQABoMNjM3NDIzMTgzODA1IgznQqoDTC1p7dNQzC0q3AOMikhLXe3MqRZF5IzqviGLg3ZPVU%2BovvDCWI%2B3auvpEnGabR8R0XrfIf1NI7d%2BiY%2BrLHRljMrWuRN%2BRIWMx2VoanG9e46e0Vezj2G1gHI4wtUl2KU7CTDgQ2vEuk3f%2BlHHUxqeSwQ30%2FJCRUXL0zlWFE6KrNs0Yf0BpD2ilxbXzRePrGl7qepxbKk9Ay9Fxlx6JYJmX%2B%2FYi1ZgNL4POvvLeGajjCRsH2yrHw7sJ%2Fjyk0vPtc%2B59vfDl3FyQp59FC26PEfIbY7juEX9xPDidBcV3kHG9n9HTYh2NWwmsBOAz7a%2FA3BQmD5XquRPdB7Ry2MVYqbvvDj35G75O1wRT4SrkhP5lGQgZEaJx26%2BOVPMHxfi2UTk732XRElO5qO5X7uICtNIPh%2FmXxT%2F%2FxauS2C3NNgWiBipUT7x71XQv9%2F8%2FpS4SNsHrra%2BNgcwBSPx3QxsWJIkqBnysCv%2FNelA0lolrhn5YPwF4oQbwOdGA%2Bt%2FElTZaQw4wXXMSWmisGILTL8UIq4C7Xyyf2qSSyaa6vujspYQXXoRhhUd2hyMIf%2BiddxNYDT9jm8k%2BpHICxzU%2FxZIUqeQeehu4wdoBwJHBCItecrcR%2FQIlKol2iY4TCLTl7GhFr2cljReA6yktzC%2BwfTCBjqkAdba%2FbP2SjhGLRgtdaCm3cV5e%2Ff5Ic13ojVy2n%2FHo%2ByNHfK48BU2KnJcesX96mlKYHM3P2%2FjEdNpciUYVWm7HPTETVS%2BTNthALcvJYao4psfbE6Dw%2BHLYW0yAfVR5L%2BeuUrwYzOrRQj06rJcjIXUBEzEW8gXN4ntUUhVO%2BcWnLp2aFeuerFjEpv6Ur2gdmLobLtiiWhsCKz%2FKXA7W%2BQCO4fK3LCU&X-Amz-Signature=cab2046b15ad39dc8b7afe25ea360906c87bc26e952d34288ab4178247d1cf6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO6PXBBS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQD7YTRoX%2BC%2FW0Rj8eFzDbqf7acvaGbA6dzWUrMTnVYK1QIhAIX2IB8ihchIIVLObHowkEpr6a4ioqmoiuFzUimQkVzIKv8DCFwQABoMNjM3NDIzMTgzODA1IgznQqoDTC1p7dNQzC0q3AOMikhLXe3MqRZF5IzqviGLg3ZPVU%2BovvDCWI%2B3auvpEnGabR8R0XrfIf1NI7d%2BiY%2BrLHRljMrWuRN%2BRIWMx2VoanG9e46e0Vezj2G1gHI4wtUl2KU7CTDgQ2vEuk3f%2BlHHUxqeSwQ30%2FJCRUXL0zlWFE6KrNs0Yf0BpD2ilxbXzRePrGl7qepxbKk9Ay9Fxlx6JYJmX%2B%2FYi1ZgNL4POvvLeGajjCRsH2yrHw7sJ%2Fjyk0vPtc%2B59vfDl3FyQp59FC26PEfIbY7juEX9xPDidBcV3kHG9n9HTYh2NWwmsBOAz7a%2FA3BQmD5XquRPdB7Ry2MVYqbvvDj35G75O1wRT4SrkhP5lGQgZEaJx26%2BOVPMHxfi2UTk732XRElO5qO5X7uICtNIPh%2FmXxT%2F%2FxauS2C3NNgWiBipUT7x71XQv9%2F8%2FpS4SNsHrra%2BNgcwBSPx3QxsWJIkqBnysCv%2FNelA0lolrhn5YPwF4oQbwOdGA%2Bt%2FElTZaQw4wXXMSWmisGILTL8UIq4C7Xyyf2qSSyaa6vujspYQXXoRhhUd2hyMIf%2BiddxNYDT9jm8k%2BpHICxzU%2FxZIUqeQeehu4wdoBwJHBCItecrcR%2FQIlKol2iY4TCLTl7GhFr2cljReA6yktzC%2BwfTCBjqkAdba%2FbP2SjhGLRgtdaCm3cV5e%2Ff5Ic13ojVy2n%2FHo%2ByNHfK48BU2KnJcesX96mlKYHM3P2%2FjEdNpciUYVWm7HPTETVS%2BTNthALcvJYao4psfbE6Dw%2BHLYW0yAfVR5L%2BeuUrwYzOrRQj06rJcjIXUBEzEW8gXN4ntUUhVO%2BcWnLp2aFeuerFjEpv6Ur2gdmLobLtiiWhsCKz%2FKXA7W%2BQCO4fK3LCU&X-Amz-Signature=b0c0117990da7b3e2d3124dc3b67b692ff8f85fef9222380f290da82ad2a3970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO6PXBBS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQD7YTRoX%2BC%2FW0Rj8eFzDbqf7acvaGbA6dzWUrMTnVYK1QIhAIX2IB8ihchIIVLObHowkEpr6a4ioqmoiuFzUimQkVzIKv8DCFwQABoMNjM3NDIzMTgzODA1IgznQqoDTC1p7dNQzC0q3AOMikhLXe3MqRZF5IzqviGLg3ZPVU%2BovvDCWI%2B3auvpEnGabR8R0XrfIf1NI7d%2BiY%2BrLHRljMrWuRN%2BRIWMx2VoanG9e46e0Vezj2G1gHI4wtUl2KU7CTDgQ2vEuk3f%2BlHHUxqeSwQ30%2FJCRUXL0zlWFE6KrNs0Yf0BpD2ilxbXzRePrGl7qepxbKk9Ay9Fxlx6JYJmX%2B%2FYi1ZgNL4POvvLeGajjCRsH2yrHw7sJ%2Fjyk0vPtc%2B59vfDl3FyQp59FC26PEfIbY7juEX9xPDidBcV3kHG9n9HTYh2NWwmsBOAz7a%2FA3BQmD5XquRPdB7Ry2MVYqbvvDj35G75O1wRT4SrkhP5lGQgZEaJx26%2BOVPMHxfi2UTk732XRElO5qO5X7uICtNIPh%2FmXxT%2F%2FxauS2C3NNgWiBipUT7x71XQv9%2F8%2FpS4SNsHrra%2BNgcwBSPx3QxsWJIkqBnysCv%2FNelA0lolrhn5YPwF4oQbwOdGA%2Bt%2FElTZaQw4wXXMSWmisGILTL8UIq4C7Xyyf2qSSyaa6vujspYQXXoRhhUd2hyMIf%2BiddxNYDT9jm8k%2BpHICxzU%2FxZIUqeQeehu4wdoBwJHBCItecrcR%2FQIlKol2iY4TCLTl7GhFr2cljReA6yktzC%2BwfTCBjqkAdba%2FbP2SjhGLRgtdaCm3cV5e%2Ff5Ic13ojVy2n%2FHo%2ByNHfK48BU2KnJcesX96mlKYHM3P2%2FjEdNpciUYVWm7HPTETVS%2BTNthALcvJYao4psfbE6Dw%2BHLYW0yAfVR5L%2BeuUrwYzOrRQj06rJcjIXUBEzEW8gXN4ntUUhVO%2BcWnLp2aFeuerFjEpv6Ur2gdmLobLtiiWhsCKz%2FKXA7W%2BQCO4fK3LCU&X-Amz-Signature=7c300e23eefd8ac459c8cb5270b449e827d84350f97ffbfd070f22bceb7d81c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO6PXBBS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQD7YTRoX%2BC%2FW0Rj8eFzDbqf7acvaGbA6dzWUrMTnVYK1QIhAIX2IB8ihchIIVLObHowkEpr6a4ioqmoiuFzUimQkVzIKv8DCFwQABoMNjM3NDIzMTgzODA1IgznQqoDTC1p7dNQzC0q3AOMikhLXe3MqRZF5IzqviGLg3ZPVU%2BovvDCWI%2B3auvpEnGabR8R0XrfIf1NI7d%2BiY%2BrLHRljMrWuRN%2BRIWMx2VoanG9e46e0Vezj2G1gHI4wtUl2KU7CTDgQ2vEuk3f%2BlHHUxqeSwQ30%2FJCRUXL0zlWFE6KrNs0Yf0BpD2ilxbXzRePrGl7qepxbKk9Ay9Fxlx6JYJmX%2B%2FYi1ZgNL4POvvLeGajjCRsH2yrHw7sJ%2Fjyk0vPtc%2B59vfDl3FyQp59FC26PEfIbY7juEX9xPDidBcV3kHG9n9HTYh2NWwmsBOAz7a%2FA3BQmD5XquRPdB7Ry2MVYqbvvDj35G75O1wRT4SrkhP5lGQgZEaJx26%2BOVPMHxfi2UTk732XRElO5qO5X7uICtNIPh%2FmXxT%2F%2FxauS2C3NNgWiBipUT7x71XQv9%2F8%2FpS4SNsHrra%2BNgcwBSPx3QxsWJIkqBnysCv%2FNelA0lolrhn5YPwF4oQbwOdGA%2Bt%2FElTZaQw4wXXMSWmisGILTL8UIq4C7Xyyf2qSSyaa6vujspYQXXoRhhUd2hyMIf%2BiddxNYDT9jm8k%2BpHICxzU%2FxZIUqeQeehu4wdoBwJHBCItecrcR%2FQIlKol2iY4TCLTl7GhFr2cljReA6yktzC%2BwfTCBjqkAdba%2FbP2SjhGLRgtdaCm3cV5e%2Ff5Ic13ojVy2n%2FHo%2ByNHfK48BU2KnJcesX96mlKYHM3P2%2FjEdNpciUYVWm7HPTETVS%2BTNthALcvJYao4psfbE6Dw%2BHLYW0yAfVR5L%2BeuUrwYzOrRQj06rJcjIXUBEzEW8gXN4ntUUhVO%2BcWnLp2aFeuerFjEpv6Ur2gdmLobLtiiWhsCKz%2FKXA7W%2BQCO4fK3LCU&X-Amz-Signature=a2ac104529a906624100fb051fb58fd3d2ee64884e3997fe903802df8cf2c818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO6PXBBS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQD7YTRoX%2BC%2FW0Rj8eFzDbqf7acvaGbA6dzWUrMTnVYK1QIhAIX2IB8ihchIIVLObHowkEpr6a4ioqmoiuFzUimQkVzIKv8DCFwQABoMNjM3NDIzMTgzODA1IgznQqoDTC1p7dNQzC0q3AOMikhLXe3MqRZF5IzqviGLg3ZPVU%2BovvDCWI%2B3auvpEnGabR8R0XrfIf1NI7d%2BiY%2BrLHRljMrWuRN%2BRIWMx2VoanG9e46e0Vezj2G1gHI4wtUl2KU7CTDgQ2vEuk3f%2BlHHUxqeSwQ30%2FJCRUXL0zlWFE6KrNs0Yf0BpD2ilxbXzRePrGl7qepxbKk9Ay9Fxlx6JYJmX%2B%2FYi1ZgNL4POvvLeGajjCRsH2yrHw7sJ%2Fjyk0vPtc%2B59vfDl3FyQp59FC26PEfIbY7juEX9xPDidBcV3kHG9n9HTYh2NWwmsBOAz7a%2FA3BQmD5XquRPdB7Ry2MVYqbvvDj35G75O1wRT4SrkhP5lGQgZEaJx26%2BOVPMHxfi2UTk732XRElO5qO5X7uICtNIPh%2FmXxT%2F%2FxauS2C3NNgWiBipUT7x71XQv9%2F8%2FpS4SNsHrra%2BNgcwBSPx3QxsWJIkqBnysCv%2FNelA0lolrhn5YPwF4oQbwOdGA%2Bt%2FElTZaQw4wXXMSWmisGILTL8UIq4C7Xyyf2qSSyaa6vujspYQXXoRhhUd2hyMIf%2BiddxNYDT9jm8k%2BpHICxzU%2FxZIUqeQeehu4wdoBwJHBCItecrcR%2FQIlKol2iY4TCLTl7GhFr2cljReA6yktzC%2BwfTCBjqkAdba%2FbP2SjhGLRgtdaCm3cV5e%2Ff5Ic13ojVy2n%2FHo%2ByNHfK48BU2KnJcesX96mlKYHM3P2%2FjEdNpciUYVWm7HPTETVS%2BTNthALcvJYao4psfbE6Dw%2BHLYW0yAfVR5L%2BeuUrwYzOrRQj06rJcjIXUBEzEW8gXN4ntUUhVO%2BcWnLp2aFeuerFjEpv6Ur2gdmLobLtiiWhsCKz%2FKXA7W%2BQCO4fK3LCU&X-Amz-Signature=f6ad9426b47029303fdcc98b54f01720a83047fabf9c94056d33a477e52cbd5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
