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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMKMYAZD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T190502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIGEb8XchUYX7d431qvtRn90jmCY8sdXyLZ1kSjh4Wd9MAiEAv9sCuAHNGyoYxRb3mQ6XsDCm9n2mtdUyljRsXPTSdJEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvi3F%2BF3bFDouwuICrcA4HSg91eF6%2FWjxZ6Ew3Lv3SvT3oFphT1IB2ZP40eciZj3j%2FVS5KIYd8sUZCw2elGrv7HWUTBLyNqwiuCt3BAtrbwQdzrr810%2BDxfSiB70qTwVfJ3eoJlsARhSoGv%2BWBDYCg%2BJmpPql%2Bl3tAEb4%2B8H1v5jSFA2iUVB7E8MQQERDvBtbtk7mfn8kgluCa7SnUzS%2FHdEDk2LfcZxg5nY8vp40Xm%2FjLhGh6pOMD03soGooRJiQYNpNSnkpbVrbMEKVzcQGxf8%2F19drBWA7bZdLtB6SwpnnQG1IJFIpjagUzYuJ5G4vM26rcOVB5wyBQ6cU66Vscdp7Cv716iw7uEMrCeCp%2Fhu1C0WSv62R3sLOMTrhXfP071BXVYG5%2BN%2BCeCRzKvVOv1onA5ky0P7Sa2OiQr%2FWsj5W0tPC%2BADTWweGx3aAWm02jO8%2FhrokpmbQnhRH0Cuc4tN7uHBcBQ4%2BYcsXNbSKWEbb3HjtcBffbHXlQp2O5PqFHmNVyMizNe8OFOByQSX78RQt1ys0visJBvAmARCo%2B3M8p46NI1WXGLPTklH9XgddZlN8RcIo9VABQ5gEbFVKnGgTIAHI5W%2Bv%2BilvYcJZgxSvZyp52w0uu%2BtoDdwOP97E0PPdfis3%2BGjQ9sMNbWsL8GOqUB5MMGYZEo3RhcO%2Fr1yaTihw9Pc5sT9xkoF9%2BrAHQXJjn2Enq%2Bw4Y0H4YIaKCNfafZ6wYr%2FugYFYa%2B9SCOAdASUOdAEFLkKVpoiSTAb02Y%2FgnQGom%2BFOnez%2Fw26%2FRCxr%2BsfwiBGxdvnDf6eMJOONYWr64O39MOJLIWpuKmHcJFSsMcUfBx1LytBd2w9ISV4J%2FbSxqWjz67sBPQwK9IkXbJCrFg6PJY&X-Amz-Signature=55da6cbd10b94da57de02f9250d28a55cc3530254305a4d48f55a23c557b49ca&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMKMYAZD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T190502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIGEb8XchUYX7d431qvtRn90jmCY8sdXyLZ1kSjh4Wd9MAiEAv9sCuAHNGyoYxRb3mQ6XsDCm9n2mtdUyljRsXPTSdJEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvi3F%2BF3bFDouwuICrcA4HSg91eF6%2FWjxZ6Ew3Lv3SvT3oFphT1IB2ZP40eciZj3j%2FVS5KIYd8sUZCw2elGrv7HWUTBLyNqwiuCt3BAtrbwQdzrr810%2BDxfSiB70qTwVfJ3eoJlsARhSoGv%2BWBDYCg%2BJmpPql%2Bl3tAEb4%2B8H1v5jSFA2iUVB7E8MQQERDvBtbtk7mfn8kgluCa7SnUzS%2FHdEDk2LfcZxg5nY8vp40Xm%2FjLhGh6pOMD03soGooRJiQYNpNSnkpbVrbMEKVzcQGxf8%2F19drBWA7bZdLtB6SwpnnQG1IJFIpjagUzYuJ5G4vM26rcOVB5wyBQ6cU66Vscdp7Cv716iw7uEMrCeCp%2Fhu1C0WSv62R3sLOMTrhXfP071BXVYG5%2BN%2BCeCRzKvVOv1onA5ky0P7Sa2OiQr%2FWsj5W0tPC%2BADTWweGx3aAWm02jO8%2FhrokpmbQnhRH0Cuc4tN7uHBcBQ4%2BYcsXNbSKWEbb3HjtcBffbHXlQp2O5PqFHmNVyMizNe8OFOByQSX78RQt1ys0visJBvAmARCo%2B3M8p46NI1WXGLPTklH9XgddZlN8RcIo9VABQ5gEbFVKnGgTIAHI5W%2Bv%2BilvYcJZgxSvZyp52w0uu%2BtoDdwOP97E0PPdfis3%2BGjQ9sMNbWsL8GOqUB5MMGYZEo3RhcO%2Fr1yaTihw9Pc5sT9xkoF9%2BrAHQXJjn2Enq%2Bw4Y0H4YIaKCNfafZ6wYr%2FugYFYa%2B9SCOAdASUOdAEFLkKVpoiSTAb02Y%2FgnQGom%2BFOnez%2Fw26%2FRCxr%2BsfwiBGxdvnDf6eMJOONYWr64O39MOJLIWpuKmHcJFSsMcUfBx1LytBd2w9ISV4J%2FbSxqWjz67sBPQwK9IkXbJCrFg6PJY&X-Amz-Signature=533718abd46f820d05ee0c5fe2dee62cc8f60377c46b1b712c528eb07df58def&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMKMYAZD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T190502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIGEb8XchUYX7d431qvtRn90jmCY8sdXyLZ1kSjh4Wd9MAiEAv9sCuAHNGyoYxRb3mQ6XsDCm9n2mtdUyljRsXPTSdJEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvi3F%2BF3bFDouwuICrcA4HSg91eF6%2FWjxZ6Ew3Lv3SvT3oFphT1IB2ZP40eciZj3j%2FVS5KIYd8sUZCw2elGrv7HWUTBLyNqwiuCt3BAtrbwQdzrr810%2BDxfSiB70qTwVfJ3eoJlsARhSoGv%2BWBDYCg%2BJmpPql%2Bl3tAEb4%2B8H1v5jSFA2iUVB7E8MQQERDvBtbtk7mfn8kgluCa7SnUzS%2FHdEDk2LfcZxg5nY8vp40Xm%2FjLhGh6pOMD03soGooRJiQYNpNSnkpbVrbMEKVzcQGxf8%2F19drBWA7bZdLtB6SwpnnQG1IJFIpjagUzYuJ5G4vM26rcOVB5wyBQ6cU66Vscdp7Cv716iw7uEMrCeCp%2Fhu1C0WSv62R3sLOMTrhXfP071BXVYG5%2BN%2BCeCRzKvVOv1onA5ky0P7Sa2OiQr%2FWsj5W0tPC%2BADTWweGx3aAWm02jO8%2FhrokpmbQnhRH0Cuc4tN7uHBcBQ4%2BYcsXNbSKWEbb3HjtcBffbHXlQp2O5PqFHmNVyMizNe8OFOByQSX78RQt1ys0visJBvAmARCo%2B3M8p46NI1WXGLPTklH9XgddZlN8RcIo9VABQ5gEbFVKnGgTIAHI5W%2Bv%2BilvYcJZgxSvZyp52w0uu%2BtoDdwOP97E0PPdfis3%2BGjQ9sMNbWsL8GOqUB5MMGYZEo3RhcO%2Fr1yaTihw9Pc5sT9xkoF9%2BrAHQXJjn2Enq%2Bw4Y0H4YIaKCNfafZ6wYr%2FugYFYa%2B9SCOAdASUOdAEFLkKVpoiSTAb02Y%2FgnQGom%2BFOnez%2Fw26%2FRCxr%2BsfwiBGxdvnDf6eMJOONYWr64O39MOJLIWpuKmHcJFSsMcUfBx1LytBd2w9ISV4J%2FbSxqWjz67sBPQwK9IkXbJCrFg6PJY&X-Amz-Signature=09bef801df3c708e0169cdb626bdc8893b85d91cbe9bcb616315181dde0355f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMKMYAZD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T190502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIGEb8XchUYX7d431qvtRn90jmCY8sdXyLZ1kSjh4Wd9MAiEAv9sCuAHNGyoYxRb3mQ6XsDCm9n2mtdUyljRsXPTSdJEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvi3F%2BF3bFDouwuICrcA4HSg91eF6%2FWjxZ6Ew3Lv3SvT3oFphT1IB2ZP40eciZj3j%2FVS5KIYd8sUZCw2elGrv7HWUTBLyNqwiuCt3BAtrbwQdzrr810%2BDxfSiB70qTwVfJ3eoJlsARhSoGv%2BWBDYCg%2BJmpPql%2Bl3tAEb4%2B8H1v5jSFA2iUVB7E8MQQERDvBtbtk7mfn8kgluCa7SnUzS%2FHdEDk2LfcZxg5nY8vp40Xm%2FjLhGh6pOMD03soGooRJiQYNpNSnkpbVrbMEKVzcQGxf8%2F19drBWA7bZdLtB6SwpnnQG1IJFIpjagUzYuJ5G4vM26rcOVB5wyBQ6cU66Vscdp7Cv716iw7uEMrCeCp%2Fhu1C0WSv62R3sLOMTrhXfP071BXVYG5%2BN%2BCeCRzKvVOv1onA5ky0P7Sa2OiQr%2FWsj5W0tPC%2BADTWweGx3aAWm02jO8%2FhrokpmbQnhRH0Cuc4tN7uHBcBQ4%2BYcsXNbSKWEbb3HjtcBffbHXlQp2O5PqFHmNVyMizNe8OFOByQSX78RQt1ys0visJBvAmARCo%2B3M8p46NI1WXGLPTklH9XgddZlN8RcIo9VABQ5gEbFVKnGgTIAHI5W%2Bv%2BilvYcJZgxSvZyp52w0uu%2BtoDdwOP97E0PPdfis3%2BGjQ9sMNbWsL8GOqUB5MMGYZEo3RhcO%2Fr1yaTihw9Pc5sT9xkoF9%2BrAHQXJjn2Enq%2Bw4Y0H4YIaKCNfafZ6wYr%2FugYFYa%2B9SCOAdASUOdAEFLkKVpoiSTAb02Y%2FgnQGom%2BFOnez%2Fw26%2FRCxr%2BsfwiBGxdvnDf6eMJOONYWr64O39MOJLIWpuKmHcJFSsMcUfBx1LytBd2w9ISV4J%2FbSxqWjz67sBPQwK9IkXbJCrFg6PJY&X-Amz-Signature=fbfb1ffdb08b59ac6db2a1511c38defd94715e7281aebb6c0cc90ccf0951eabd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMKMYAZD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T190502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIGEb8XchUYX7d431qvtRn90jmCY8sdXyLZ1kSjh4Wd9MAiEAv9sCuAHNGyoYxRb3mQ6XsDCm9n2mtdUyljRsXPTSdJEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvi3F%2BF3bFDouwuICrcA4HSg91eF6%2FWjxZ6Ew3Lv3SvT3oFphT1IB2ZP40eciZj3j%2FVS5KIYd8sUZCw2elGrv7HWUTBLyNqwiuCt3BAtrbwQdzrr810%2BDxfSiB70qTwVfJ3eoJlsARhSoGv%2BWBDYCg%2BJmpPql%2Bl3tAEb4%2B8H1v5jSFA2iUVB7E8MQQERDvBtbtk7mfn8kgluCa7SnUzS%2FHdEDk2LfcZxg5nY8vp40Xm%2FjLhGh6pOMD03soGooRJiQYNpNSnkpbVrbMEKVzcQGxf8%2F19drBWA7bZdLtB6SwpnnQG1IJFIpjagUzYuJ5G4vM26rcOVB5wyBQ6cU66Vscdp7Cv716iw7uEMrCeCp%2Fhu1C0WSv62R3sLOMTrhXfP071BXVYG5%2BN%2BCeCRzKvVOv1onA5ky0P7Sa2OiQr%2FWsj5W0tPC%2BADTWweGx3aAWm02jO8%2FhrokpmbQnhRH0Cuc4tN7uHBcBQ4%2BYcsXNbSKWEbb3HjtcBffbHXlQp2O5PqFHmNVyMizNe8OFOByQSX78RQt1ys0visJBvAmARCo%2B3M8p46NI1WXGLPTklH9XgddZlN8RcIo9VABQ5gEbFVKnGgTIAHI5W%2Bv%2BilvYcJZgxSvZyp52w0uu%2BtoDdwOP97E0PPdfis3%2BGjQ9sMNbWsL8GOqUB5MMGYZEo3RhcO%2Fr1yaTihw9Pc5sT9xkoF9%2BrAHQXJjn2Enq%2Bw4Y0H4YIaKCNfafZ6wYr%2FugYFYa%2B9SCOAdASUOdAEFLkKVpoiSTAb02Y%2FgnQGom%2BFOnez%2Fw26%2FRCxr%2BsfwiBGxdvnDf6eMJOONYWr64O39MOJLIWpuKmHcJFSsMcUfBx1LytBd2w9ISV4J%2FbSxqWjz67sBPQwK9IkXbJCrFg6PJY&X-Amz-Signature=4dd9da43acd2d0744e2735a2157d28e5c6686cd93a21126ea9e575af9226f6e0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMKMYAZD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T190502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIGEb8XchUYX7d431qvtRn90jmCY8sdXyLZ1kSjh4Wd9MAiEAv9sCuAHNGyoYxRb3mQ6XsDCm9n2mtdUyljRsXPTSdJEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvi3F%2BF3bFDouwuICrcA4HSg91eF6%2FWjxZ6Ew3Lv3SvT3oFphT1IB2ZP40eciZj3j%2FVS5KIYd8sUZCw2elGrv7HWUTBLyNqwiuCt3BAtrbwQdzrr810%2BDxfSiB70qTwVfJ3eoJlsARhSoGv%2BWBDYCg%2BJmpPql%2Bl3tAEb4%2B8H1v5jSFA2iUVB7E8MQQERDvBtbtk7mfn8kgluCa7SnUzS%2FHdEDk2LfcZxg5nY8vp40Xm%2FjLhGh6pOMD03soGooRJiQYNpNSnkpbVrbMEKVzcQGxf8%2F19drBWA7bZdLtB6SwpnnQG1IJFIpjagUzYuJ5G4vM26rcOVB5wyBQ6cU66Vscdp7Cv716iw7uEMrCeCp%2Fhu1C0WSv62R3sLOMTrhXfP071BXVYG5%2BN%2BCeCRzKvVOv1onA5ky0P7Sa2OiQr%2FWsj5W0tPC%2BADTWweGx3aAWm02jO8%2FhrokpmbQnhRH0Cuc4tN7uHBcBQ4%2BYcsXNbSKWEbb3HjtcBffbHXlQp2O5PqFHmNVyMizNe8OFOByQSX78RQt1ys0visJBvAmARCo%2B3M8p46NI1WXGLPTklH9XgddZlN8RcIo9VABQ5gEbFVKnGgTIAHI5W%2Bv%2BilvYcJZgxSvZyp52w0uu%2BtoDdwOP97E0PPdfis3%2BGjQ9sMNbWsL8GOqUB5MMGYZEo3RhcO%2Fr1yaTihw9Pc5sT9xkoF9%2BrAHQXJjn2Enq%2Bw4Y0H4YIaKCNfafZ6wYr%2FugYFYa%2B9SCOAdASUOdAEFLkKVpoiSTAb02Y%2FgnQGom%2BFOnez%2Fw26%2FRCxr%2BsfwiBGxdvnDf6eMJOONYWr64O39MOJLIWpuKmHcJFSsMcUfBx1LytBd2w9ISV4J%2FbSxqWjz67sBPQwK9IkXbJCrFg6PJY&X-Amz-Signature=0e83e057c1913c97c0cba85686793c4770c959cc8245f25499c55a93ccd1e0a6&X-Amz-SignedHeaders=host&x-id=GetObject)
