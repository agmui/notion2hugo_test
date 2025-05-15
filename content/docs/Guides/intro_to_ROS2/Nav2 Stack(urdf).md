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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7QFBTS6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDpKakUARHJny%2Br0PSYywM74h%2B6zpz5DI4jhZTqz4uHYgIhAP9K47TdxcsTX68OO07lopZqB0jr05IGxRC8ZFySWw%2FXKv8DCDMQABoMNjM3NDIzMTgzODA1Igz%2FJlbJdmVHD3dQNCAq3AO0nFt6JiA4P9Lq8Ws9%2B%2FdiTou6AXhz90ykcXAjRmNF4zUqDhIE7hsLaGiauAAOf%2BI2fLucJzlQMJvjA4dkYgy5iiuI274V60eZVd3AX2K6xtjmw8Yf5328mksXdoxU%2FlOEBB%2FPuG1FWgQpv1FVGov5CprdxIuehZOZDZSYKQlo0JbHYn1skiTkXnTvl7Poz4KlGb6MHDrcKm7QxX2en%2BJgwivJTnsX9byWAr8w6L4KO8kBSRwkLVb8AGQ2UU%2B6ER5zC%2F2zR7NBcbj8CT9MxwqBfQt%2FXVzpfTcyiJGz8%2FGml9qAiWrfRCIQJbDRSulnGvStMkzdu9Ev%2BLfTKfFO6BHcCjPZ1PjOVmPXDBxxj58LuyXpphyBforN2ug65%2BDUmkiLMZvNzhOoQSvteOmzjO3EhWPyvToy9rCmYvn1D%2B9%2Bl6hGjhtC09J3L9r65VyGwTIBFHiyTll2uC511y6mZASwDQkmw8lXfDVLf9dOoqRV80XQVpKEYaUFidFUrAsSAeGJfnh1otgbhjGx4562IkPabGwgnN9NV6T0xWesyZVvsyfUaIY%2FsmPTjAO7XDmItIVDpyO3Po1jR33UsRsAAMLlAN3ZywTV2v2plxCcGnTQu%2F8ioFAJfKoM6uh4JzC335jBBjqkAeQJSSjHgnbq3Qa%2FN16N0LgXp7aNm7Qp%2FLdPVWXCcBEf7orARsw2ZegJ3HvTP0gYKUZBRYkFTk2eJNIELY14IOV8nCMdSHJWIKOX%2BiWmjbo7Y2v5z2M7sAGxkHzPrmKwKsairjvBZrNNi42jjnwr00bvi1tialTIlsS%2B%2Bp5G2%2F7GJ5%2F5QRk1a7TEyus5tjV9kshco61NJKW21lWXlXUBFAKkjtYX&X-Amz-Signature=f248f366f8729446019d9081f235b2abf7aed23b24a29180ebefdb8d8d989315&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7QFBTS6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDpKakUARHJny%2Br0PSYywM74h%2B6zpz5DI4jhZTqz4uHYgIhAP9K47TdxcsTX68OO07lopZqB0jr05IGxRC8ZFySWw%2FXKv8DCDMQABoMNjM3NDIzMTgzODA1Igz%2FJlbJdmVHD3dQNCAq3AO0nFt6JiA4P9Lq8Ws9%2B%2FdiTou6AXhz90ykcXAjRmNF4zUqDhIE7hsLaGiauAAOf%2BI2fLucJzlQMJvjA4dkYgy5iiuI274V60eZVd3AX2K6xtjmw8Yf5328mksXdoxU%2FlOEBB%2FPuG1FWgQpv1FVGov5CprdxIuehZOZDZSYKQlo0JbHYn1skiTkXnTvl7Poz4KlGb6MHDrcKm7QxX2en%2BJgwivJTnsX9byWAr8w6L4KO8kBSRwkLVb8AGQ2UU%2B6ER5zC%2F2zR7NBcbj8CT9MxwqBfQt%2FXVzpfTcyiJGz8%2FGml9qAiWrfRCIQJbDRSulnGvStMkzdu9Ev%2BLfTKfFO6BHcCjPZ1PjOVmPXDBxxj58LuyXpphyBforN2ug65%2BDUmkiLMZvNzhOoQSvteOmzjO3EhWPyvToy9rCmYvn1D%2B9%2Bl6hGjhtC09J3L9r65VyGwTIBFHiyTll2uC511y6mZASwDQkmw8lXfDVLf9dOoqRV80XQVpKEYaUFidFUrAsSAeGJfnh1otgbhjGx4562IkPabGwgnN9NV6T0xWesyZVvsyfUaIY%2FsmPTjAO7XDmItIVDpyO3Po1jR33UsRsAAMLlAN3ZywTV2v2plxCcGnTQu%2F8ioFAJfKoM6uh4JzC335jBBjqkAeQJSSjHgnbq3Qa%2FN16N0LgXp7aNm7Qp%2FLdPVWXCcBEf7orARsw2ZegJ3HvTP0gYKUZBRYkFTk2eJNIELY14IOV8nCMdSHJWIKOX%2BiWmjbo7Y2v5z2M7sAGxkHzPrmKwKsairjvBZrNNi42jjnwr00bvi1tialTIlsS%2B%2Bp5G2%2F7GJ5%2F5QRk1a7TEyus5tjV9kshco61NJKW21lWXlXUBFAKkjtYX&X-Amz-Signature=7e1b20b18ab792728dce0fcb743996c36e7a1ce58c9d7b3683a9018803e5ffe6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7QFBTS6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDpKakUARHJny%2Br0PSYywM74h%2B6zpz5DI4jhZTqz4uHYgIhAP9K47TdxcsTX68OO07lopZqB0jr05IGxRC8ZFySWw%2FXKv8DCDMQABoMNjM3NDIzMTgzODA1Igz%2FJlbJdmVHD3dQNCAq3AO0nFt6JiA4P9Lq8Ws9%2B%2FdiTou6AXhz90ykcXAjRmNF4zUqDhIE7hsLaGiauAAOf%2BI2fLucJzlQMJvjA4dkYgy5iiuI274V60eZVd3AX2K6xtjmw8Yf5328mksXdoxU%2FlOEBB%2FPuG1FWgQpv1FVGov5CprdxIuehZOZDZSYKQlo0JbHYn1skiTkXnTvl7Poz4KlGb6MHDrcKm7QxX2en%2BJgwivJTnsX9byWAr8w6L4KO8kBSRwkLVb8AGQ2UU%2B6ER5zC%2F2zR7NBcbj8CT9MxwqBfQt%2FXVzpfTcyiJGz8%2FGml9qAiWrfRCIQJbDRSulnGvStMkzdu9Ev%2BLfTKfFO6BHcCjPZ1PjOVmPXDBxxj58LuyXpphyBforN2ug65%2BDUmkiLMZvNzhOoQSvteOmzjO3EhWPyvToy9rCmYvn1D%2B9%2Bl6hGjhtC09J3L9r65VyGwTIBFHiyTll2uC511y6mZASwDQkmw8lXfDVLf9dOoqRV80XQVpKEYaUFidFUrAsSAeGJfnh1otgbhjGx4562IkPabGwgnN9NV6T0xWesyZVvsyfUaIY%2FsmPTjAO7XDmItIVDpyO3Po1jR33UsRsAAMLlAN3ZywTV2v2plxCcGnTQu%2F8ioFAJfKoM6uh4JzC335jBBjqkAeQJSSjHgnbq3Qa%2FN16N0LgXp7aNm7Qp%2FLdPVWXCcBEf7orARsw2ZegJ3HvTP0gYKUZBRYkFTk2eJNIELY14IOV8nCMdSHJWIKOX%2BiWmjbo7Y2v5z2M7sAGxkHzPrmKwKsairjvBZrNNi42jjnwr00bvi1tialTIlsS%2B%2Bp5G2%2F7GJ5%2F5QRk1a7TEyus5tjV9kshco61NJKW21lWXlXUBFAKkjtYX&X-Amz-Signature=ad43dca52460530e9eaed947e7a6c1586070403556eeec5aa2344d16a7006613&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7QFBTS6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDpKakUARHJny%2Br0PSYywM74h%2B6zpz5DI4jhZTqz4uHYgIhAP9K47TdxcsTX68OO07lopZqB0jr05IGxRC8ZFySWw%2FXKv8DCDMQABoMNjM3NDIzMTgzODA1Igz%2FJlbJdmVHD3dQNCAq3AO0nFt6JiA4P9Lq8Ws9%2B%2FdiTou6AXhz90ykcXAjRmNF4zUqDhIE7hsLaGiauAAOf%2BI2fLucJzlQMJvjA4dkYgy5iiuI274V60eZVd3AX2K6xtjmw8Yf5328mksXdoxU%2FlOEBB%2FPuG1FWgQpv1FVGov5CprdxIuehZOZDZSYKQlo0JbHYn1skiTkXnTvl7Poz4KlGb6MHDrcKm7QxX2en%2BJgwivJTnsX9byWAr8w6L4KO8kBSRwkLVb8AGQ2UU%2B6ER5zC%2F2zR7NBcbj8CT9MxwqBfQt%2FXVzpfTcyiJGz8%2FGml9qAiWrfRCIQJbDRSulnGvStMkzdu9Ev%2BLfTKfFO6BHcCjPZ1PjOVmPXDBxxj58LuyXpphyBforN2ug65%2BDUmkiLMZvNzhOoQSvteOmzjO3EhWPyvToy9rCmYvn1D%2B9%2Bl6hGjhtC09J3L9r65VyGwTIBFHiyTll2uC511y6mZASwDQkmw8lXfDVLf9dOoqRV80XQVpKEYaUFidFUrAsSAeGJfnh1otgbhjGx4562IkPabGwgnN9NV6T0xWesyZVvsyfUaIY%2FsmPTjAO7XDmItIVDpyO3Po1jR33UsRsAAMLlAN3ZywTV2v2plxCcGnTQu%2F8ioFAJfKoM6uh4JzC335jBBjqkAeQJSSjHgnbq3Qa%2FN16N0LgXp7aNm7Qp%2FLdPVWXCcBEf7orARsw2ZegJ3HvTP0gYKUZBRYkFTk2eJNIELY14IOV8nCMdSHJWIKOX%2BiWmjbo7Y2v5z2M7sAGxkHzPrmKwKsairjvBZrNNi42jjnwr00bvi1tialTIlsS%2B%2Bp5G2%2F7GJ5%2F5QRk1a7TEyus5tjV9kshco61NJKW21lWXlXUBFAKkjtYX&X-Amz-Signature=b75900273b7fdd8be862e8e2f5809089694a957d4dbfc5b6cee61a88b99b4ae4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7QFBTS6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDpKakUARHJny%2Br0PSYywM74h%2B6zpz5DI4jhZTqz4uHYgIhAP9K47TdxcsTX68OO07lopZqB0jr05IGxRC8ZFySWw%2FXKv8DCDMQABoMNjM3NDIzMTgzODA1Igz%2FJlbJdmVHD3dQNCAq3AO0nFt6JiA4P9Lq8Ws9%2B%2FdiTou6AXhz90ykcXAjRmNF4zUqDhIE7hsLaGiauAAOf%2BI2fLucJzlQMJvjA4dkYgy5iiuI274V60eZVd3AX2K6xtjmw8Yf5328mksXdoxU%2FlOEBB%2FPuG1FWgQpv1FVGov5CprdxIuehZOZDZSYKQlo0JbHYn1skiTkXnTvl7Poz4KlGb6MHDrcKm7QxX2en%2BJgwivJTnsX9byWAr8w6L4KO8kBSRwkLVb8AGQ2UU%2B6ER5zC%2F2zR7NBcbj8CT9MxwqBfQt%2FXVzpfTcyiJGz8%2FGml9qAiWrfRCIQJbDRSulnGvStMkzdu9Ev%2BLfTKfFO6BHcCjPZ1PjOVmPXDBxxj58LuyXpphyBforN2ug65%2BDUmkiLMZvNzhOoQSvteOmzjO3EhWPyvToy9rCmYvn1D%2B9%2Bl6hGjhtC09J3L9r65VyGwTIBFHiyTll2uC511y6mZASwDQkmw8lXfDVLf9dOoqRV80XQVpKEYaUFidFUrAsSAeGJfnh1otgbhjGx4562IkPabGwgnN9NV6T0xWesyZVvsyfUaIY%2FsmPTjAO7XDmItIVDpyO3Po1jR33UsRsAAMLlAN3ZywTV2v2plxCcGnTQu%2F8ioFAJfKoM6uh4JzC335jBBjqkAeQJSSjHgnbq3Qa%2FN16N0LgXp7aNm7Qp%2FLdPVWXCcBEf7orARsw2ZegJ3HvTP0gYKUZBRYkFTk2eJNIELY14IOV8nCMdSHJWIKOX%2BiWmjbo7Y2v5z2M7sAGxkHzPrmKwKsairjvBZrNNi42jjnwr00bvi1tialTIlsS%2B%2Bp5G2%2F7GJ5%2F5QRk1a7TEyus5tjV9kshco61NJKW21lWXlXUBFAKkjtYX&X-Amz-Signature=5b19693eff2b0c8a7bcbe14f21a21288b13fd3998019f3776d9104a26380f90c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7QFBTS6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDpKakUARHJny%2Br0PSYywM74h%2B6zpz5DI4jhZTqz4uHYgIhAP9K47TdxcsTX68OO07lopZqB0jr05IGxRC8ZFySWw%2FXKv8DCDMQABoMNjM3NDIzMTgzODA1Igz%2FJlbJdmVHD3dQNCAq3AO0nFt6JiA4P9Lq8Ws9%2B%2FdiTou6AXhz90ykcXAjRmNF4zUqDhIE7hsLaGiauAAOf%2BI2fLucJzlQMJvjA4dkYgy5iiuI274V60eZVd3AX2K6xtjmw8Yf5328mksXdoxU%2FlOEBB%2FPuG1FWgQpv1FVGov5CprdxIuehZOZDZSYKQlo0JbHYn1skiTkXnTvl7Poz4KlGb6MHDrcKm7QxX2en%2BJgwivJTnsX9byWAr8w6L4KO8kBSRwkLVb8AGQ2UU%2B6ER5zC%2F2zR7NBcbj8CT9MxwqBfQt%2FXVzpfTcyiJGz8%2FGml9qAiWrfRCIQJbDRSulnGvStMkzdu9Ev%2BLfTKfFO6BHcCjPZ1PjOVmPXDBxxj58LuyXpphyBforN2ug65%2BDUmkiLMZvNzhOoQSvteOmzjO3EhWPyvToy9rCmYvn1D%2B9%2Bl6hGjhtC09J3L9r65VyGwTIBFHiyTll2uC511y6mZASwDQkmw8lXfDVLf9dOoqRV80XQVpKEYaUFidFUrAsSAeGJfnh1otgbhjGx4562IkPabGwgnN9NV6T0xWesyZVvsyfUaIY%2FsmPTjAO7XDmItIVDpyO3Po1jR33UsRsAAMLlAN3ZywTV2v2plxCcGnTQu%2F8ioFAJfKoM6uh4JzC335jBBjqkAeQJSSjHgnbq3Qa%2FN16N0LgXp7aNm7Qp%2FLdPVWXCcBEf7orARsw2ZegJ3HvTP0gYKUZBRYkFTk2eJNIELY14IOV8nCMdSHJWIKOX%2BiWmjbo7Y2v5z2M7sAGxkHzPrmKwKsairjvBZrNNi42jjnwr00bvi1tialTIlsS%2B%2Bp5G2%2F7GJ5%2F5QRk1a7TEyus5tjV9kshco61NJKW21lWXlXUBFAKkjtYX&X-Amz-Signature=78bcca5234bd5a7241cf86b435c0845eaa8103b5fc4a5e3908723bd8a193be95&X-Amz-SignedHeaders=host&x-id=GetObject)
