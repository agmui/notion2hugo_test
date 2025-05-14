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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OZVQVY5%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIHI3mRayRP3JIcbfhUMlMw60bMtBqJ1mtFqk2kN5WuFrAiEAsiiHZdOYVwoMs1ZPbaU2U3Nu4%2Fyjo2CeQGpIYwZRy0cq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDLVCvyCFml2%2Bq%2FHCgSrcA3tOX9%2FnBoLM7%2F5fpTmxDw0hjmnzRbxkQBXS1fwodwUMAO3aE3WKkDKzNGeFKd4%2F%2BvsZ%2Bhb6i20xFWNItrobDQw3foEzUKeez7zVgAoHB4AHf2bsG8pDqgp85UyxC%2FtmMbpwsM8pdNqOjKKh3K8S81VoCLd%2BQQ8sUJEOxMXLENOncvDpckIUnIqtHUhZSgkULKT1K%2BIc3L0%2BaIHaLRUzyLXwRUxRZdWMUYtmz59kgYOUxkzsMSWakPJ8I1G%2F4j5KmAXD8Z4ICnrkJGxyyBUI5UKDRaWesFgTCvh9Brp823zN63hT62iDUgqVROtLhG%2Brfj%2BelyaCCt7zCxwXFPIKZGpQIbsop%2FtXtldR%2Bh1fNdqppKkcSEwgXPABAQm7LRQ7XyCS8klFJ%2B0%2B63wtPXw69MHpujDVGMpBLAUyhED5Y3qPrtA0d974L3t%2BNZLZPQV9u08ahnHBJfiDXTrLRRC9o0KyOR63P7cvue6I9ml17uswDEiV6WrN%2FAMF0ycKSeHeIBffZAx%2FTKUET9ShgN7moly6atRGNPowAs68H1PLm0L102LlhH3skO4t6O2cc5DQF05hVAG1yHtHjgYshjmieHgRtMFPAdJIeGkPRDYRQgVQGnynhmm4Pkt%2B0wFCMMrWksEGOqUBqsxrcSGhR275D4SVijJ9GJOLQPYJ%2FtsnD2p%2F3gBvOCVz47Dk%2BAD3S923hce7TRaEaGq6oo2utGSISfHq352iQPVY5kl7KjO19rDETJ2f%2BSn1o2eudgbXBbdashm8jDbF3BQfBydKOFfujcyCx2jrcrHh4q0g1ECN9aasf63Iph0BMoyCOauqJRepoxqK3vXeuIRX9Zl0Gmav4wjCYmW8FcgL3EIt&X-Amz-Signature=e0ac7e12e65f0f19b2ded0e11263eaca7804930c64e6b98e83d79db7adb3dc73&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OZVQVY5%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIHI3mRayRP3JIcbfhUMlMw60bMtBqJ1mtFqk2kN5WuFrAiEAsiiHZdOYVwoMs1ZPbaU2U3Nu4%2Fyjo2CeQGpIYwZRy0cq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDLVCvyCFml2%2Bq%2FHCgSrcA3tOX9%2FnBoLM7%2F5fpTmxDw0hjmnzRbxkQBXS1fwodwUMAO3aE3WKkDKzNGeFKd4%2F%2BvsZ%2Bhb6i20xFWNItrobDQw3foEzUKeez7zVgAoHB4AHf2bsG8pDqgp85UyxC%2FtmMbpwsM8pdNqOjKKh3K8S81VoCLd%2BQQ8sUJEOxMXLENOncvDpckIUnIqtHUhZSgkULKT1K%2BIc3L0%2BaIHaLRUzyLXwRUxRZdWMUYtmz59kgYOUxkzsMSWakPJ8I1G%2F4j5KmAXD8Z4ICnrkJGxyyBUI5UKDRaWesFgTCvh9Brp823zN63hT62iDUgqVROtLhG%2Brfj%2BelyaCCt7zCxwXFPIKZGpQIbsop%2FtXtldR%2Bh1fNdqppKkcSEwgXPABAQm7LRQ7XyCS8klFJ%2B0%2B63wtPXw69MHpujDVGMpBLAUyhED5Y3qPrtA0d974L3t%2BNZLZPQV9u08ahnHBJfiDXTrLRRC9o0KyOR63P7cvue6I9ml17uswDEiV6WrN%2FAMF0ycKSeHeIBffZAx%2FTKUET9ShgN7moly6atRGNPowAs68H1PLm0L102LlhH3skO4t6O2cc5DQF05hVAG1yHtHjgYshjmieHgRtMFPAdJIeGkPRDYRQgVQGnynhmm4Pkt%2B0wFCMMrWksEGOqUBqsxrcSGhR275D4SVijJ9GJOLQPYJ%2FtsnD2p%2F3gBvOCVz47Dk%2BAD3S923hce7TRaEaGq6oo2utGSISfHq352iQPVY5kl7KjO19rDETJ2f%2BSn1o2eudgbXBbdashm8jDbF3BQfBydKOFfujcyCx2jrcrHh4q0g1ECN9aasf63Iph0BMoyCOauqJRepoxqK3vXeuIRX9Zl0Gmav4wjCYmW8FcgL3EIt&X-Amz-Signature=a2ca5a3e9509d44eb922a92f4f58edc04bdb482af88fea9f8349900e0ebd4dba&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OZVQVY5%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIHI3mRayRP3JIcbfhUMlMw60bMtBqJ1mtFqk2kN5WuFrAiEAsiiHZdOYVwoMs1ZPbaU2U3Nu4%2Fyjo2CeQGpIYwZRy0cq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDLVCvyCFml2%2Bq%2FHCgSrcA3tOX9%2FnBoLM7%2F5fpTmxDw0hjmnzRbxkQBXS1fwodwUMAO3aE3WKkDKzNGeFKd4%2F%2BvsZ%2Bhb6i20xFWNItrobDQw3foEzUKeez7zVgAoHB4AHf2bsG8pDqgp85UyxC%2FtmMbpwsM8pdNqOjKKh3K8S81VoCLd%2BQQ8sUJEOxMXLENOncvDpckIUnIqtHUhZSgkULKT1K%2BIc3L0%2BaIHaLRUzyLXwRUxRZdWMUYtmz59kgYOUxkzsMSWakPJ8I1G%2F4j5KmAXD8Z4ICnrkJGxyyBUI5UKDRaWesFgTCvh9Brp823zN63hT62iDUgqVROtLhG%2Brfj%2BelyaCCt7zCxwXFPIKZGpQIbsop%2FtXtldR%2Bh1fNdqppKkcSEwgXPABAQm7LRQ7XyCS8klFJ%2B0%2B63wtPXw69MHpujDVGMpBLAUyhED5Y3qPrtA0d974L3t%2BNZLZPQV9u08ahnHBJfiDXTrLRRC9o0KyOR63P7cvue6I9ml17uswDEiV6WrN%2FAMF0ycKSeHeIBffZAx%2FTKUET9ShgN7moly6atRGNPowAs68H1PLm0L102LlhH3skO4t6O2cc5DQF05hVAG1yHtHjgYshjmieHgRtMFPAdJIeGkPRDYRQgVQGnynhmm4Pkt%2B0wFCMMrWksEGOqUBqsxrcSGhR275D4SVijJ9GJOLQPYJ%2FtsnD2p%2F3gBvOCVz47Dk%2BAD3S923hce7TRaEaGq6oo2utGSISfHq352iQPVY5kl7KjO19rDETJ2f%2BSn1o2eudgbXBbdashm8jDbF3BQfBydKOFfujcyCx2jrcrHh4q0g1ECN9aasf63Iph0BMoyCOauqJRepoxqK3vXeuIRX9Zl0Gmav4wjCYmW8FcgL3EIt&X-Amz-Signature=eef2ad86165731b76d304744f00c0f1e472d8495fa24cd894c264ad67a5914e0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OZVQVY5%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIHI3mRayRP3JIcbfhUMlMw60bMtBqJ1mtFqk2kN5WuFrAiEAsiiHZdOYVwoMs1ZPbaU2U3Nu4%2Fyjo2CeQGpIYwZRy0cq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDLVCvyCFml2%2Bq%2FHCgSrcA3tOX9%2FnBoLM7%2F5fpTmxDw0hjmnzRbxkQBXS1fwodwUMAO3aE3WKkDKzNGeFKd4%2F%2BvsZ%2Bhb6i20xFWNItrobDQw3foEzUKeez7zVgAoHB4AHf2bsG8pDqgp85UyxC%2FtmMbpwsM8pdNqOjKKh3K8S81VoCLd%2BQQ8sUJEOxMXLENOncvDpckIUnIqtHUhZSgkULKT1K%2BIc3L0%2BaIHaLRUzyLXwRUxRZdWMUYtmz59kgYOUxkzsMSWakPJ8I1G%2F4j5KmAXD8Z4ICnrkJGxyyBUI5UKDRaWesFgTCvh9Brp823zN63hT62iDUgqVROtLhG%2Brfj%2BelyaCCt7zCxwXFPIKZGpQIbsop%2FtXtldR%2Bh1fNdqppKkcSEwgXPABAQm7LRQ7XyCS8klFJ%2B0%2B63wtPXw69MHpujDVGMpBLAUyhED5Y3qPrtA0d974L3t%2BNZLZPQV9u08ahnHBJfiDXTrLRRC9o0KyOR63P7cvue6I9ml17uswDEiV6WrN%2FAMF0ycKSeHeIBffZAx%2FTKUET9ShgN7moly6atRGNPowAs68H1PLm0L102LlhH3skO4t6O2cc5DQF05hVAG1yHtHjgYshjmieHgRtMFPAdJIeGkPRDYRQgVQGnynhmm4Pkt%2B0wFCMMrWksEGOqUBqsxrcSGhR275D4SVijJ9GJOLQPYJ%2FtsnD2p%2F3gBvOCVz47Dk%2BAD3S923hce7TRaEaGq6oo2utGSISfHq352iQPVY5kl7KjO19rDETJ2f%2BSn1o2eudgbXBbdashm8jDbF3BQfBydKOFfujcyCx2jrcrHh4q0g1ECN9aasf63Iph0BMoyCOauqJRepoxqK3vXeuIRX9Zl0Gmav4wjCYmW8FcgL3EIt&X-Amz-Signature=df48aa46c298792e617abb921a2a313eecd80ec0c37578aa50b1a3632722b130&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OZVQVY5%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIHI3mRayRP3JIcbfhUMlMw60bMtBqJ1mtFqk2kN5WuFrAiEAsiiHZdOYVwoMs1ZPbaU2U3Nu4%2Fyjo2CeQGpIYwZRy0cq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDLVCvyCFml2%2Bq%2FHCgSrcA3tOX9%2FnBoLM7%2F5fpTmxDw0hjmnzRbxkQBXS1fwodwUMAO3aE3WKkDKzNGeFKd4%2F%2BvsZ%2Bhb6i20xFWNItrobDQw3foEzUKeez7zVgAoHB4AHf2bsG8pDqgp85UyxC%2FtmMbpwsM8pdNqOjKKh3K8S81VoCLd%2BQQ8sUJEOxMXLENOncvDpckIUnIqtHUhZSgkULKT1K%2BIc3L0%2BaIHaLRUzyLXwRUxRZdWMUYtmz59kgYOUxkzsMSWakPJ8I1G%2F4j5KmAXD8Z4ICnrkJGxyyBUI5UKDRaWesFgTCvh9Brp823zN63hT62iDUgqVROtLhG%2Brfj%2BelyaCCt7zCxwXFPIKZGpQIbsop%2FtXtldR%2Bh1fNdqppKkcSEwgXPABAQm7LRQ7XyCS8klFJ%2B0%2B63wtPXw69MHpujDVGMpBLAUyhED5Y3qPrtA0d974L3t%2BNZLZPQV9u08ahnHBJfiDXTrLRRC9o0KyOR63P7cvue6I9ml17uswDEiV6WrN%2FAMF0ycKSeHeIBffZAx%2FTKUET9ShgN7moly6atRGNPowAs68H1PLm0L102LlhH3skO4t6O2cc5DQF05hVAG1yHtHjgYshjmieHgRtMFPAdJIeGkPRDYRQgVQGnynhmm4Pkt%2B0wFCMMrWksEGOqUBqsxrcSGhR275D4SVijJ9GJOLQPYJ%2FtsnD2p%2F3gBvOCVz47Dk%2BAD3S923hce7TRaEaGq6oo2utGSISfHq352iQPVY5kl7KjO19rDETJ2f%2BSn1o2eudgbXBbdashm8jDbF3BQfBydKOFfujcyCx2jrcrHh4q0g1ECN9aasf63Iph0BMoyCOauqJRepoxqK3vXeuIRX9Zl0Gmav4wjCYmW8FcgL3EIt&X-Amz-Signature=570f275db51a5863060a17d189f6df1e648816110f5a3bc516fb7653fe3eaecf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OZVQVY5%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIHI3mRayRP3JIcbfhUMlMw60bMtBqJ1mtFqk2kN5WuFrAiEAsiiHZdOYVwoMs1ZPbaU2U3Nu4%2Fyjo2CeQGpIYwZRy0cq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDLVCvyCFml2%2Bq%2FHCgSrcA3tOX9%2FnBoLM7%2F5fpTmxDw0hjmnzRbxkQBXS1fwodwUMAO3aE3WKkDKzNGeFKd4%2F%2BvsZ%2Bhb6i20xFWNItrobDQw3foEzUKeez7zVgAoHB4AHf2bsG8pDqgp85UyxC%2FtmMbpwsM8pdNqOjKKh3K8S81VoCLd%2BQQ8sUJEOxMXLENOncvDpckIUnIqtHUhZSgkULKT1K%2BIc3L0%2BaIHaLRUzyLXwRUxRZdWMUYtmz59kgYOUxkzsMSWakPJ8I1G%2F4j5KmAXD8Z4ICnrkJGxyyBUI5UKDRaWesFgTCvh9Brp823zN63hT62iDUgqVROtLhG%2Brfj%2BelyaCCt7zCxwXFPIKZGpQIbsop%2FtXtldR%2Bh1fNdqppKkcSEwgXPABAQm7LRQ7XyCS8klFJ%2B0%2B63wtPXw69MHpujDVGMpBLAUyhED5Y3qPrtA0d974L3t%2BNZLZPQV9u08ahnHBJfiDXTrLRRC9o0KyOR63P7cvue6I9ml17uswDEiV6WrN%2FAMF0ycKSeHeIBffZAx%2FTKUET9ShgN7moly6atRGNPowAs68H1PLm0L102LlhH3skO4t6O2cc5DQF05hVAG1yHtHjgYshjmieHgRtMFPAdJIeGkPRDYRQgVQGnynhmm4Pkt%2B0wFCMMrWksEGOqUBqsxrcSGhR275D4SVijJ9GJOLQPYJ%2FtsnD2p%2F3gBvOCVz47Dk%2BAD3S923hce7TRaEaGq6oo2utGSISfHq352iQPVY5kl7KjO19rDETJ2f%2BSn1o2eudgbXBbdashm8jDbF3BQfBydKOFfujcyCx2jrcrHh4q0g1ECN9aasf63Iph0BMoyCOauqJRepoxqK3vXeuIRX9Zl0Gmav4wjCYmW8FcgL3EIt&X-Amz-Signature=e4176c407fcfb9409291097dac5b5e901e99bf53e9ac11e7247cd61eb76201a4&X-Amz-SignedHeaders=host&x-id=GetObject)
