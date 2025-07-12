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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4BFAC2I%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1VtNKbL8RcoxH3t1E0YCqvbY6HymyqfF7o8a9Sg0B6AiEA2n3IC9QvFyJerMZ1gy%2BQM2Y3Gm3xUvJfFBjmc66CFPEqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAj6nageijxzYbSy%2FircA4SGMVp6MC7urUwmokBCCQND%2FphZC%2BQp79Ic9y4dGQDIDdEtcrTMY0HEqg71zUA5loHE2XEoanDdpIpJVDZqeksOUymb4Hue6DZ6f4owdKBluddFGhRMTIaKlqx8wmBObrMq8tTRyPhDxMZTaaLg%2FAg2J1cYWLpW%2FpT7q0vQdy0lVmQT8oQkzJLMXvZXHQnQb69YJSfp5UPmlTm%2FOlH%2FWGWeHng%2F75M9i126K7HRSUQV95oBaOhvcutwQ6oqC992k02YQAcj%2BOqNxUw58m9nbb5auWx6sKlniltDa1cQ42X2%2Baa1xagmfmI8Xq3MtEabw%2FI8kKPvSCmZb55PZzFq9ValVDCGQaCHS8YLz9vQfJDL5ncnYtkRWamUPeJi550uQTOlJrr5vyrnjUaFOD9j49EmT8FQobUNL%2BwUwVugO07XcFx7Vnl2HVIiW1E1GganbTUwRY5y6ecVO6ncmTiZue5ztdQOxt8TzaYZ7i4mYzkjBRN0QfQdfTy8Sk%2BHIzwj1z5o0Kfn9gSUfjMbTgM%2BidhSH26hr3TC3L7D5Odo%2B%2BoRnNFs3NT74HFJ2W%2BjAd14Vo%2BLSpEt0K51DvxMjAvYoT7V0drA56Duqz1R1ou%2FSGDPLK12qdUy%2F17t2yRGMKOtysMGOqUBK1y0mwYJqSItJdwYbV67N3psedAHEjYjEhltH7Z7JByq924%2FKtcRDoKjP1yya2hB9YqeDhbXwYOAMUKDAbjI258jcC6nkTwhJ6g06PpH1nYFXq2y25VDKjCJuOdVHJr%2F81CTDTbtD0L2vTpwNNVN5AsTxxJHR3aySsUubMvEc3o5kDp%2FD1bSzLj3ipBrnGAW5rJDAsbIzQVmWn5Ml1TXgSem5ACC&X-Amz-Signature=0ebb7332309c13b801941b580b1a95d2646a0fe573fecb6f146487e26afb7110&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4BFAC2I%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1VtNKbL8RcoxH3t1E0YCqvbY6HymyqfF7o8a9Sg0B6AiEA2n3IC9QvFyJerMZ1gy%2BQM2Y3Gm3xUvJfFBjmc66CFPEqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAj6nageijxzYbSy%2FircA4SGMVp6MC7urUwmokBCCQND%2FphZC%2BQp79Ic9y4dGQDIDdEtcrTMY0HEqg71zUA5loHE2XEoanDdpIpJVDZqeksOUymb4Hue6DZ6f4owdKBluddFGhRMTIaKlqx8wmBObrMq8tTRyPhDxMZTaaLg%2FAg2J1cYWLpW%2FpT7q0vQdy0lVmQT8oQkzJLMXvZXHQnQb69YJSfp5UPmlTm%2FOlH%2FWGWeHng%2F75M9i126K7HRSUQV95oBaOhvcutwQ6oqC992k02YQAcj%2BOqNxUw58m9nbb5auWx6sKlniltDa1cQ42X2%2Baa1xagmfmI8Xq3MtEabw%2FI8kKPvSCmZb55PZzFq9ValVDCGQaCHS8YLz9vQfJDL5ncnYtkRWamUPeJi550uQTOlJrr5vyrnjUaFOD9j49EmT8FQobUNL%2BwUwVugO07XcFx7Vnl2HVIiW1E1GganbTUwRY5y6ecVO6ncmTiZue5ztdQOxt8TzaYZ7i4mYzkjBRN0QfQdfTy8Sk%2BHIzwj1z5o0Kfn9gSUfjMbTgM%2BidhSH26hr3TC3L7D5Odo%2B%2BoRnNFs3NT74HFJ2W%2BjAd14Vo%2BLSpEt0K51DvxMjAvYoT7V0drA56Duqz1R1ou%2FSGDPLK12qdUy%2F17t2yRGMKOtysMGOqUBK1y0mwYJqSItJdwYbV67N3psedAHEjYjEhltH7Z7JByq924%2FKtcRDoKjP1yya2hB9YqeDhbXwYOAMUKDAbjI258jcC6nkTwhJ6g06PpH1nYFXq2y25VDKjCJuOdVHJr%2F81CTDTbtD0L2vTpwNNVN5AsTxxJHR3aySsUubMvEc3o5kDp%2FD1bSzLj3ipBrnGAW5rJDAsbIzQVmWn5Ml1TXgSem5ACC&X-Amz-Signature=ab0477d5d69a1a3b733d6420572b75605506de5addd26d7695a591a8e8f3f3eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4BFAC2I%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1VtNKbL8RcoxH3t1E0YCqvbY6HymyqfF7o8a9Sg0B6AiEA2n3IC9QvFyJerMZ1gy%2BQM2Y3Gm3xUvJfFBjmc66CFPEqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAj6nageijxzYbSy%2FircA4SGMVp6MC7urUwmokBCCQND%2FphZC%2BQp79Ic9y4dGQDIDdEtcrTMY0HEqg71zUA5loHE2XEoanDdpIpJVDZqeksOUymb4Hue6DZ6f4owdKBluddFGhRMTIaKlqx8wmBObrMq8tTRyPhDxMZTaaLg%2FAg2J1cYWLpW%2FpT7q0vQdy0lVmQT8oQkzJLMXvZXHQnQb69YJSfp5UPmlTm%2FOlH%2FWGWeHng%2F75M9i126K7HRSUQV95oBaOhvcutwQ6oqC992k02YQAcj%2BOqNxUw58m9nbb5auWx6sKlniltDa1cQ42X2%2Baa1xagmfmI8Xq3MtEabw%2FI8kKPvSCmZb55PZzFq9ValVDCGQaCHS8YLz9vQfJDL5ncnYtkRWamUPeJi550uQTOlJrr5vyrnjUaFOD9j49EmT8FQobUNL%2BwUwVugO07XcFx7Vnl2HVIiW1E1GganbTUwRY5y6ecVO6ncmTiZue5ztdQOxt8TzaYZ7i4mYzkjBRN0QfQdfTy8Sk%2BHIzwj1z5o0Kfn9gSUfjMbTgM%2BidhSH26hr3TC3L7D5Odo%2B%2BoRnNFs3NT74HFJ2W%2BjAd14Vo%2BLSpEt0K51DvxMjAvYoT7V0drA56Duqz1R1ou%2FSGDPLK12qdUy%2F17t2yRGMKOtysMGOqUBK1y0mwYJqSItJdwYbV67N3psedAHEjYjEhltH7Z7JByq924%2FKtcRDoKjP1yya2hB9YqeDhbXwYOAMUKDAbjI258jcC6nkTwhJ6g06PpH1nYFXq2y25VDKjCJuOdVHJr%2F81CTDTbtD0L2vTpwNNVN5AsTxxJHR3aySsUubMvEc3o5kDp%2FD1bSzLj3ipBrnGAW5rJDAsbIzQVmWn5Ml1TXgSem5ACC&X-Amz-Signature=16a78864cb5c3e0a89753f239a5b8bcd46dac55cb0a0ea8d04c9f8534d995fdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4BFAC2I%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1VtNKbL8RcoxH3t1E0YCqvbY6HymyqfF7o8a9Sg0B6AiEA2n3IC9QvFyJerMZ1gy%2BQM2Y3Gm3xUvJfFBjmc66CFPEqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAj6nageijxzYbSy%2FircA4SGMVp6MC7urUwmokBCCQND%2FphZC%2BQp79Ic9y4dGQDIDdEtcrTMY0HEqg71zUA5loHE2XEoanDdpIpJVDZqeksOUymb4Hue6DZ6f4owdKBluddFGhRMTIaKlqx8wmBObrMq8tTRyPhDxMZTaaLg%2FAg2J1cYWLpW%2FpT7q0vQdy0lVmQT8oQkzJLMXvZXHQnQb69YJSfp5UPmlTm%2FOlH%2FWGWeHng%2F75M9i126K7HRSUQV95oBaOhvcutwQ6oqC992k02YQAcj%2BOqNxUw58m9nbb5auWx6sKlniltDa1cQ42X2%2Baa1xagmfmI8Xq3MtEabw%2FI8kKPvSCmZb55PZzFq9ValVDCGQaCHS8YLz9vQfJDL5ncnYtkRWamUPeJi550uQTOlJrr5vyrnjUaFOD9j49EmT8FQobUNL%2BwUwVugO07XcFx7Vnl2HVIiW1E1GganbTUwRY5y6ecVO6ncmTiZue5ztdQOxt8TzaYZ7i4mYzkjBRN0QfQdfTy8Sk%2BHIzwj1z5o0Kfn9gSUfjMbTgM%2BidhSH26hr3TC3L7D5Odo%2B%2BoRnNFs3NT74HFJ2W%2BjAd14Vo%2BLSpEt0K51DvxMjAvYoT7V0drA56Duqz1R1ou%2FSGDPLK12qdUy%2F17t2yRGMKOtysMGOqUBK1y0mwYJqSItJdwYbV67N3psedAHEjYjEhltH7Z7JByq924%2FKtcRDoKjP1yya2hB9YqeDhbXwYOAMUKDAbjI258jcC6nkTwhJ6g06PpH1nYFXq2y25VDKjCJuOdVHJr%2F81CTDTbtD0L2vTpwNNVN5AsTxxJHR3aySsUubMvEc3o5kDp%2FD1bSzLj3ipBrnGAW5rJDAsbIzQVmWn5Ml1TXgSem5ACC&X-Amz-Signature=ac4614badbd83a548d2c421b02e46452fdfb42785facbb3e9bcdff6d965448ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4BFAC2I%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1VtNKbL8RcoxH3t1E0YCqvbY6HymyqfF7o8a9Sg0B6AiEA2n3IC9QvFyJerMZ1gy%2BQM2Y3Gm3xUvJfFBjmc66CFPEqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAj6nageijxzYbSy%2FircA4SGMVp6MC7urUwmokBCCQND%2FphZC%2BQp79Ic9y4dGQDIDdEtcrTMY0HEqg71zUA5loHE2XEoanDdpIpJVDZqeksOUymb4Hue6DZ6f4owdKBluddFGhRMTIaKlqx8wmBObrMq8tTRyPhDxMZTaaLg%2FAg2J1cYWLpW%2FpT7q0vQdy0lVmQT8oQkzJLMXvZXHQnQb69YJSfp5UPmlTm%2FOlH%2FWGWeHng%2F75M9i126K7HRSUQV95oBaOhvcutwQ6oqC992k02YQAcj%2BOqNxUw58m9nbb5auWx6sKlniltDa1cQ42X2%2Baa1xagmfmI8Xq3MtEabw%2FI8kKPvSCmZb55PZzFq9ValVDCGQaCHS8YLz9vQfJDL5ncnYtkRWamUPeJi550uQTOlJrr5vyrnjUaFOD9j49EmT8FQobUNL%2BwUwVugO07XcFx7Vnl2HVIiW1E1GganbTUwRY5y6ecVO6ncmTiZue5ztdQOxt8TzaYZ7i4mYzkjBRN0QfQdfTy8Sk%2BHIzwj1z5o0Kfn9gSUfjMbTgM%2BidhSH26hr3TC3L7D5Odo%2B%2BoRnNFs3NT74HFJ2W%2BjAd14Vo%2BLSpEt0K51DvxMjAvYoT7V0drA56Duqz1R1ou%2FSGDPLK12qdUy%2F17t2yRGMKOtysMGOqUBK1y0mwYJqSItJdwYbV67N3psedAHEjYjEhltH7Z7JByq924%2FKtcRDoKjP1yya2hB9YqeDhbXwYOAMUKDAbjI258jcC6nkTwhJ6g06PpH1nYFXq2y25VDKjCJuOdVHJr%2F81CTDTbtD0L2vTpwNNVN5AsTxxJHR3aySsUubMvEc3o5kDp%2FD1bSzLj3ipBrnGAW5rJDAsbIzQVmWn5Ml1TXgSem5ACC&X-Amz-Signature=b2dd921aa51d3ee0b4cb11a262323abbeb846af7245864dedb050d33db98e8d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4BFAC2I%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1VtNKbL8RcoxH3t1E0YCqvbY6HymyqfF7o8a9Sg0B6AiEA2n3IC9QvFyJerMZ1gy%2BQM2Y3Gm3xUvJfFBjmc66CFPEqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAj6nageijxzYbSy%2FircA4SGMVp6MC7urUwmokBCCQND%2FphZC%2BQp79Ic9y4dGQDIDdEtcrTMY0HEqg71zUA5loHE2XEoanDdpIpJVDZqeksOUymb4Hue6DZ6f4owdKBluddFGhRMTIaKlqx8wmBObrMq8tTRyPhDxMZTaaLg%2FAg2J1cYWLpW%2FpT7q0vQdy0lVmQT8oQkzJLMXvZXHQnQb69YJSfp5UPmlTm%2FOlH%2FWGWeHng%2F75M9i126K7HRSUQV95oBaOhvcutwQ6oqC992k02YQAcj%2BOqNxUw58m9nbb5auWx6sKlniltDa1cQ42X2%2Baa1xagmfmI8Xq3MtEabw%2FI8kKPvSCmZb55PZzFq9ValVDCGQaCHS8YLz9vQfJDL5ncnYtkRWamUPeJi550uQTOlJrr5vyrnjUaFOD9j49EmT8FQobUNL%2BwUwVugO07XcFx7Vnl2HVIiW1E1GganbTUwRY5y6ecVO6ncmTiZue5ztdQOxt8TzaYZ7i4mYzkjBRN0QfQdfTy8Sk%2BHIzwj1z5o0Kfn9gSUfjMbTgM%2BidhSH26hr3TC3L7D5Odo%2B%2BoRnNFs3NT74HFJ2W%2BjAd14Vo%2BLSpEt0K51DvxMjAvYoT7V0drA56Duqz1R1ou%2FSGDPLK12qdUy%2F17t2yRGMKOtysMGOqUBK1y0mwYJqSItJdwYbV67N3psedAHEjYjEhltH7Z7JByq924%2FKtcRDoKjP1yya2hB9YqeDhbXwYOAMUKDAbjI258jcC6nkTwhJ6g06PpH1nYFXq2y25VDKjCJuOdVHJr%2F81CTDTbtD0L2vTpwNNVN5AsTxxJHR3aySsUubMvEc3o5kDp%2FD1bSzLj3ipBrnGAW5rJDAsbIzQVmWn5Ml1TXgSem5ACC&X-Amz-Signature=cd2a0cf0b89129d99265f90fe2bc30c621261929200373e5a1acb583506f83b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
