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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVP44OKP%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T200926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIF3OIscB24NBiKRmIFpZPdY29hXREQmu6euOTN2IjcDaAiA116zws3nTovHM8W5fmx3p4S7buXNpfkXgZK77Aj9O4yr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMA3rk3ba2j8td9yxTKtwDb7%2Fpx4k14AQdDV9vkdc7Kg506B3mpXAQ6Ddi%2FpxLXC61uFOsQQY75gKw3uEFpuRPmFnNfbOOTr66peP9TmXuHzp1wQOd7jpud3h2R9Qt0VjEf%2BZYIWo8Ksj9cUse81TOYZPtryAKGJyMHkzLTYV9uaFaVCzTayjmkKlrADBYvrpS51c%2Fg%2B3uVR2v0xFs3SJ0cIUoK9LViVdghD%2Blnd79435X%2BZcuclOXOiYHYWZl2nxIa95%2BYKLeSFkx5mbeBjGe7xrC4I8nmiBh92sA%2FfRQowqGBuYPG8RzpqJP9y2Z%2BDZB3P1LG9QhysNR0yLVOQA1kABS4dJPN28ciTQ1SdEN0IE2D%2BjN2cLBjJphAJQObI3amlcjJwx6Os9Ny5NJ%2BlAdbkDK718w81wL6odrgpRfj9NXC423qp5%2Fle1xUI95Oxqv%2Bxt5t8QBa0uzOKvpgt5UH1ABoDUk8QkHZ4zJrnrmNoIUheViogPpDz1E2u6Xym%2F56cwx3w1CT792jySE2g7RTSFqb1bqKpSW6fo%2BqpSIa1Vyi06APSpXFjyCuaGNystuNZyFEiBWWyIhi4pjMVrgHhPUAkKUqw4GxOBEP9FIfdc%2F%2BNB41R7O8pzUAg57HBbKfg94gs9E%2B%2Fu9BoMwyJDQwwY6pgHGoZAvAaOZvTpGhU3fVtcbFFtFHDWDcykkaKHdsK1e9RbgfBI67QYG9l9kVdoY8xj1Xr86mg7G8s6qdMeFhqOIBo2GU8O8ZxPIZqSqnk0o5Dh8VxXZVvk85CKTfbpiWJZa1iMtctPfKcTJmtugZ7KsBAYDqEqbS4kVByjejCJBdJvouYd3cveX3CRMSluOSFYola2uBqsVNSu6WXQLdGiAW2BH2l3u&X-Amz-Signature=57ba89089f696458668ec17072cf6c6222f5fc49fee961ec9ac8bc646a768d7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVP44OKP%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T200926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIF3OIscB24NBiKRmIFpZPdY29hXREQmu6euOTN2IjcDaAiA116zws3nTovHM8W5fmx3p4S7buXNpfkXgZK77Aj9O4yr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMA3rk3ba2j8td9yxTKtwDb7%2Fpx4k14AQdDV9vkdc7Kg506B3mpXAQ6Ddi%2FpxLXC61uFOsQQY75gKw3uEFpuRPmFnNfbOOTr66peP9TmXuHzp1wQOd7jpud3h2R9Qt0VjEf%2BZYIWo8Ksj9cUse81TOYZPtryAKGJyMHkzLTYV9uaFaVCzTayjmkKlrADBYvrpS51c%2Fg%2B3uVR2v0xFs3SJ0cIUoK9LViVdghD%2Blnd79435X%2BZcuclOXOiYHYWZl2nxIa95%2BYKLeSFkx5mbeBjGe7xrC4I8nmiBh92sA%2FfRQowqGBuYPG8RzpqJP9y2Z%2BDZB3P1LG9QhysNR0yLVOQA1kABS4dJPN28ciTQ1SdEN0IE2D%2BjN2cLBjJphAJQObI3amlcjJwx6Os9Ny5NJ%2BlAdbkDK718w81wL6odrgpRfj9NXC423qp5%2Fle1xUI95Oxqv%2Bxt5t8QBa0uzOKvpgt5UH1ABoDUk8QkHZ4zJrnrmNoIUheViogPpDz1E2u6Xym%2F56cwx3w1CT792jySE2g7RTSFqb1bqKpSW6fo%2BqpSIa1Vyi06APSpXFjyCuaGNystuNZyFEiBWWyIhi4pjMVrgHhPUAkKUqw4GxOBEP9FIfdc%2F%2BNB41R7O8pzUAg57HBbKfg94gs9E%2B%2Fu9BoMwyJDQwwY6pgHGoZAvAaOZvTpGhU3fVtcbFFtFHDWDcykkaKHdsK1e9RbgfBI67QYG9l9kVdoY8xj1Xr86mg7G8s6qdMeFhqOIBo2GU8O8ZxPIZqSqnk0o5Dh8VxXZVvk85CKTfbpiWJZa1iMtctPfKcTJmtugZ7KsBAYDqEqbS4kVByjejCJBdJvouYd3cveX3CRMSluOSFYola2uBqsVNSu6WXQLdGiAW2BH2l3u&X-Amz-Signature=0a167bcbd42992f79abe2185f3451394864a13b61f2290d6a43ee4e2cfa40ba1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVP44OKP%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T200926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIF3OIscB24NBiKRmIFpZPdY29hXREQmu6euOTN2IjcDaAiA116zws3nTovHM8W5fmx3p4S7buXNpfkXgZK77Aj9O4yr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMA3rk3ba2j8td9yxTKtwDb7%2Fpx4k14AQdDV9vkdc7Kg506B3mpXAQ6Ddi%2FpxLXC61uFOsQQY75gKw3uEFpuRPmFnNfbOOTr66peP9TmXuHzp1wQOd7jpud3h2R9Qt0VjEf%2BZYIWo8Ksj9cUse81TOYZPtryAKGJyMHkzLTYV9uaFaVCzTayjmkKlrADBYvrpS51c%2Fg%2B3uVR2v0xFs3SJ0cIUoK9LViVdghD%2Blnd79435X%2BZcuclOXOiYHYWZl2nxIa95%2BYKLeSFkx5mbeBjGe7xrC4I8nmiBh92sA%2FfRQowqGBuYPG8RzpqJP9y2Z%2BDZB3P1LG9QhysNR0yLVOQA1kABS4dJPN28ciTQ1SdEN0IE2D%2BjN2cLBjJphAJQObI3amlcjJwx6Os9Ny5NJ%2BlAdbkDK718w81wL6odrgpRfj9NXC423qp5%2Fle1xUI95Oxqv%2Bxt5t8QBa0uzOKvpgt5UH1ABoDUk8QkHZ4zJrnrmNoIUheViogPpDz1E2u6Xym%2F56cwx3w1CT792jySE2g7RTSFqb1bqKpSW6fo%2BqpSIa1Vyi06APSpXFjyCuaGNystuNZyFEiBWWyIhi4pjMVrgHhPUAkKUqw4GxOBEP9FIfdc%2F%2BNB41R7O8pzUAg57HBbKfg94gs9E%2B%2Fu9BoMwyJDQwwY6pgHGoZAvAaOZvTpGhU3fVtcbFFtFHDWDcykkaKHdsK1e9RbgfBI67QYG9l9kVdoY8xj1Xr86mg7G8s6qdMeFhqOIBo2GU8O8ZxPIZqSqnk0o5Dh8VxXZVvk85CKTfbpiWJZa1iMtctPfKcTJmtugZ7KsBAYDqEqbS4kVByjejCJBdJvouYd3cveX3CRMSluOSFYola2uBqsVNSu6WXQLdGiAW2BH2l3u&X-Amz-Signature=3d7a417865bc69e1aa60b541b1bedc3e09a047d34377a8b8db7de3328dec3463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVP44OKP%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T200926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIF3OIscB24NBiKRmIFpZPdY29hXREQmu6euOTN2IjcDaAiA116zws3nTovHM8W5fmx3p4S7buXNpfkXgZK77Aj9O4yr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMA3rk3ba2j8td9yxTKtwDb7%2Fpx4k14AQdDV9vkdc7Kg506B3mpXAQ6Ddi%2FpxLXC61uFOsQQY75gKw3uEFpuRPmFnNfbOOTr66peP9TmXuHzp1wQOd7jpud3h2R9Qt0VjEf%2BZYIWo8Ksj9cUse81TOYZPtryAKGJyMHkzLTYV9uaFaVCzTayjmkKlrADBYvrpS51c%2Fg%2B3uVR2v0xFs3SJ0cIUoK9LViVdghD%2Blnd79435X%2BZcuclOXOiYHYWZl2nxIa95%2BYKLeSFkx5mbeBjGe7xrC4I8nmiBh92sA%2FfRQowqGBuYPG8RzpqJP9y2Z%2BDZB3P1LG9QhysNR0yLVOQA1kABS4dJPN28ciTQ1SdEN0IE2D%2BjN2cLBjJphAJQObI3amlcjJwx6Os9Ny5NJ%2BlAdbkDK718w81wL6odrgpRfj9NXC423qp5%2Fle1xUI95Oxqv%2Bxt5t8QBa0uzOKvpgt5UH1ABoDUk8QkHZ4zJrnrmNoIUheViogPpDz1E2u6Xym%2F56cwx3w1CT792jySE2g7RTSFqb1bqKpSW6fo%2BqpSIa1Vyi06APSpXFjyCuaGNystuNZyFEiBWWyIhi4pjMVrgHhPUAkKUqw4GxOBEP9FIfdc%2F%2BNB41R7O8pzUAg57HBbKfg94gs9E%2B%2Fu9BoMwyJDQwwY6pgHGoZAvAaOZvTpGhU3fVtcbFFtFHDWDcykkaKHdsK1e9RbgfBI67QYG9l9kVdoY8xj1Xr86mg7G8s6qdMeFhqOIBo2GU8O8ZxPIZqSqnk0o5Dh8VxXZVvk85CKTfbpiWJZa1iMtctPfKcTJmtugZ7KsBAYDqEqbS4kVByjejCJBdJvouYd3cveX3CRMSluOSFYola2uBqsVNSu6WXQLdGiAW2BH2l3u&X-Amz-Signature=04f50c89f64cd343312dd4fedbdad116dceda1e6341cb9a5b19065ec56710854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVP44OKP%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T200926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIF3OIscB24NBiKRmIFpZPdY29hXREQmu6euOTN2IjcDaAiA116zws3nTovHM8W5fmx3p4S7buXNpfkXgZK77Aj9O4yr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMA3rk3ba2j8td9yxTKtwDb7%2Fpx4k14AQdDV9vkdc7Kg506B3mpXAQ6Ddi%2FpxLXC61uFOsQQY75gKw3uEFpuRPmFnNfbOOTr66peP9TmXuHzp1wQOd7jpud3h2R9Qt0VjEf%2BZYIWo8Ksj9cUse81TOYZPtryAKGJyMHkzLTYV9uaFaVCzTayjmkKlrADBYvrpS51c%2Fg%2B3uVR2v0xFs3SJ0cIUoK9LViVdghD%2Blnd79435X%2BZcuclOXOiYHYWZl2nxIa95%2BYKLeSFkx5mbeBjGe7xrC4I8nmiBh92sA%2FfRQowqGBuYPG8RzpqJP9y2Z%2BDZB3P1LG9QhysNR0yLVOQA1kABS4dJPN28ciTQ1SdEN0IE2D%2BjN2cLBjJphAJQObI3amlcjJwx6Os9Ny5NJ%2BlAdbkDK718w81wL6odrgpRfj9NXC423qp5%2Fle1xUI95Oxqv%2Bxt5t8QBa0uzOKvpgt5UH1ABoDUk8QkHZ4zJrnrmNoIUheViogPpDz1E2u6Xym%2F56cwx3w1CT792jySE2g7RTSFqb1bqKpSW6fo%2BqpSIa1Vyi06APSpXFjyCuaGNystuNZyFEiBWWyIhi4pjMVrgHhPUAkKUqw4GxOBEP9FIfdc%2F%2BNB41R7O8pzUAg57HBbKfg94gs9E%2B%2Fu9BoMwyJDQwwY6pgHGoZAvAaOZvTpGhU3fVtcbFFtFHDWDcykkaKHdsK1e9RbgfBI67QYG9l9kVdoY8xj1Xr86mg7G8s6qdMeFhqOIBo2GU8O8ZxPIZqSqnk0o5Dh8VxXZVvk85CKTfbpiWJZa1iMtctPfKcTJmtugZ7KsBAYDqEqbS4kVByjejCJBdJvouYd3cveX3CRMSluOSFYola2uBqsVNSu6WXQLdGiAW2BH2l3u&X-Amz-Signature=a4fbf92b8344f2449f606af88ce22ab98e5e08ccff1f8621e15d77972f626d7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVP44OKP%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T200926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIF3OIscB24NBiKRmIFpZPdY29hXREQmu6euOTN2IjcDaAiA116zws3nTovHM8W5fmx3p4S7buXNpfkXgZK77Aj9O4yr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMA3rk3ba2j8td9yxTKtwDb7%2Fpx4k14AQdDV9vkdc7Kg506B3mpXAQ6Ddi%2FpxLXC61uFOsQQY75gKw3uEFpuRPmFnNfbOOTr66peP9TmXuHzp1wQOd7jpud3h2R9Qt0VjEf%2BZYIWo8Ksj9cUse81TOYZPtryAKGJyMHkzLTYV9uaFaVCzTayjmkKlrADBYvrpS51c%2Fg%2B3uVR2v0xFs3SJ0cIUoK9LViVdghD%2Blnd79435X%2BZcuclOXOiYHYWZl2nxIa95%2BYKLeSFkx5mbeBjGe7xrC4I8nmiBh92sA%2FfRQowqGBuYPG8RzpqJP9y2Z%2BDZB3P1LG9QhysNR0yLVOQA1kABS4dJPN28ciTQ1SdEN0IE2D%2BjN2cLBjJphAJQObI3amlcjJwx6Os9Ny5NJ%2BlAdbkDK718w81wL6odrgpRfj9NXC423qp5%2Fle1xUI95Oxqv%2Bxt5t8QBa0uzOKvpgt5UH1ABoDUk8QkHZ4zJrnrmNoIUheViogPpDz1E2u6Xym%2F56cwx3w1CT792jySE2g7RTSFqb1bqKpSW6fo%2BqpSIa1Vyi06APSpXFjyCuaGNystuNZyFEiBWWyIhi4pjMVrgHhPUAkKUqw4GxOBEP9FIfdc%2F%2BNB41R7O8pzUAg57HBbKfg94gs9E%2B%2Fu9BoMwyJDQwwY6pgHGoZAvAaOZvTpGhU3fVtcbFFtFHDWDcykkaKHdsK1e9RbgfBI67QYG9l9kVdoY8xj1Xr86mg7G8s6qdMeFhqOIBo2GU8O8ZxPIZqSqnk0o5Dh8VxXZVvk85CKTfbpiWJZa1iMtctPfKcTJmtugZ7KsBAYDqEqbS4kVByjejCJBdJvouYd3cveX3CRMSluOSFYola2uBqsVNSu6WXQLdGiAW2BH2l3u&X-Amz-Signature=8e36f044179c072ca6919b62c6fd3ff56fc9b9425a62a089f5545b4839da0950&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
