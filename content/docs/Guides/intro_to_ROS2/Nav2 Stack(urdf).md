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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVCHIJLD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLkqMOMkKYpevTC7z0G6LPjzKUBLaCyFStWYL%2FybLeLAiEAsqNxR36GAyHmSs5c%2FwUXMd0do%2Fm0Qf8h9%2BupC9uF9TkqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBL7VuGCP1uomb3RByrcA6VFQWPFQg6lxR3XgO%2FR8O3qoKdynWvw9dPULDhPtBCENnBMHYa1lFWEAPsUR00YO07ZH1lxDzFTU5xXTKYLrk%2F2xQt27iTj9zuE3NgbwcUbcjJkW5R3VEZhD04zBmQMmSUHBHH3KcKiF8itsDvjW14h6qbptG%2BAd7Vr5OyNpDre2MyRsYMlU8YgT0UXATekwqhG0hF92hlatGkW6xJTJ6RTRVvWtsw%2FNI29svTWrnYwfhlIC2cBmEu08YDcBTHAVRfv8avJEzcce0iwujqvfo3PmZI60Ly2YPPrALPaRE9XFyfthR858gLTCfxAq3hs9m3ofnQQOCOGsfngypU%2BuIGnpiudJkQtXaUwNehf%2FrRz6YTgvjTjCkWguoiFil9EaiJ0YhVCDVvAutMJ%2FdPt515BcL%2F5kq1mLEbMPTj0W2yhk%2BQOdgCXRENGTAnole5WMQbs3Hh%2BlLGLDNY6K2%2BZUofBzBjqBNk8GTfOKXfa3329RJYLdgJBpBOu2x797EOvAt5Hvsct1R%2B%2BsHbYsdGq%2BOZZxMsqMygexXFUwyvVdk6lpMtuKG30PtsGJcMmFKWNkNmB8e0SD%2B7qdTBFWKLKK8khorB0414BNm%2F7FcJ25Wy%2BX01A7ylDdjVOF69%2FMIDKocIGOqUB1cyKbUq4380Jf%2B7THBBrffncSxMGjoN05iZjULzaBN3mbJN61bWhEHKYt4RA2zWhIV1DY2OeQ6veXUhlrfLwifvOOs1pWJPGXLkCImAlozYjmlKC0WeY4YraVFeqTmcRuNSFYHdBpwHUA5%2By6nOTCn2FYGr9IMOCbpYqRug7pCO0dizvy8BRWQ41jfTyTWrwZMysBNfZBxaMp8lILt6TD2vzTwyY&X-Amz-Signature=bfc215f0bbdf14b774818cddaa57cfb1a8f94bc1b4dc67a141667e59e1d93055&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVCHIJLD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLkqMOMkKYpevTC7z0G6LPjzKUBLaCyFStWYL%2FybLeLAiEAsqNxR36GAyHmSs5c%2FwUXMd0do%2Fm0Qf8h9%2BupC9uF9TkqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBL7VuGCP1uomb3RByrcA6VFQWPFQg6lxR3XgO%2FR8O3qoKdynWvw9dPULDhPtBCENnBMHYa1lFWEAPsUR00YO07ZH1lxDzFTU5xXTKYLrk%2F2xQt27iTj9zuE3NgbwcUbcjJkW5R3VEZhD04zBmQMmSUHBHH3KcKiF8itsDvjW14h6qbptG%2BAd7Vr5OyNpDre2MyRsYMlU8YgT0UXATekwqhG0hF92hlatGkW6xJTJ6RTRVvWtsw%2FNI29svTWrnYwfhlIC2cBmEu08YDcBTHAVRfv8avJEzcce0iwujqvfo3PmZI60Ly2YPPrALPaRE9XFyfthR858gLTCfxAq3hs9m3ofnQQOCOGsfngypU%2BuIGnpiudJkQtXaUwNehf%2FrRz6YTgvjTjCkWguoiFil9EaiJ0YhVCDVvAutMJ%2FdPt515BcL%2F5kq1mLEbMPTj0W2yhk%2BQOdgCXRENGTAnole5WMQbs3Hh%2BlLGLDNY6K2%2BZUofBzBjqBNk8GTfOKXfa3329RJYLdgJBpBOu2x797EOvAt5Hvsct1R%2B%2BsHbYsdGq%2BOZZxMsqMygexXFUwyvVdk6lpMtuKG30PtsGJcMmFKWNkNmB8e0SD%2B7qdTBFWKLKK8khorB0414BNm%2F7FcJ25Wy%2BX01A7ylDdjVOF69%2FMIDKocIGOqUB1cyKbUq4380Jf%2B7THBBrffncSxMGjoN05iZjULzaBN3mbJN61bWhEHKYt4RA2zWhIV1DY2OeQ6veXUhlrfLwifvOOs1pWJPGXLkCImAlozYjmlKC0WeY4YraVFeqTmcRuNSFYHdBpwHUA5%2By6nOTCn2FYGr9IMOCbpYqRug7pCO0dizvy8BRWQ41jfTyTWrwZMysBNfZBxaMp8lILt6TD2vzTwyY&X-Amz-Signature=26159a7757e74be2a58f9a938ac17638833fd044d6ef72c64aa1fe7be6700244&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVCHIJLD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLkqMOMkKYpevTC7z0G6LPjzKUBLaCyFStWYL%2FybLeLAiEAsqNxR36GAyHmSs5c%2FwUXMd0do%2Fm0Qf8h9%2BupC9uF9TkqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBL7VuGCP1uomb3RByrcA6VFQWPFQg6lxR3XgO%2FR8O3qoKdynWvw9dPULDhPtBCENnBMHYa1lFWEAPsUR00YO07ZH1lxDzFTU5xXTKYLrk%2F2xQt27iTj9zuE3NgbwcUbcjJkW5R3VEZhD04zBmQMmSUHBHH3KcKiF8itsDvjW14h6qbptG%2BAd7Vr5OyNpDre2MyRsYMlU8YgT0UXATekwqhG0hF92hlatGkW6xJTJ6RTRVvWtsw%2FNI29svTWrnYwfhlIC2cBmEu08YDcBTHAVRfv8avJEzcce0iwujqvfo3PmZI60Ly2YPPrALPaRE9XFyfthR858gLTCfxAq3hs9m3ofnQQOCOGsfngypU%2BuIGnpiudJkQtXaUwNehf%2FrRz6YTgvjTjCkWguoiFil9EaiJ0YhVCDVvAutMJ%2FdPt515BcL%2F5kq1mLEbMPTj0W2yhk%2BQOdgCXRENGTAnole5WMQbs3Hh%2BlLGLDNY6K2%2BZUofBzBjqBNk8GTfOKXfa3329RJYLdgJBpBOu2x797EOvAt5Hvsct1R%2B%2BsHbYsdGq%2BOZZxMsqMygexXFUwyvVdk6lpMtuKG30PtsGJcMmFKWNkNmB8e0SD%2B7qdTBFWKLKK8khorB0414BNm%2F7FcJ25Wy%2BX01A7ylDdjVOF69%2FMIDKocIGOqUB1cyKbUq4380Jf%2B7THBBrffncSxMGjoN05iZjULzaBN3mbJN61bWhEHKYt4RA2zWhIV1DY2OeQ6veXUhlrfLwifvOOs1pWJPGXLkCImAlozYjmlKC0WeY4YraVFeqTmcRuNSFYHdBpwHUA5%2By6nOTCn2FYGr9IMOCbpYqRug7pCO0dizvy8BRWQ41jfTyTWrwZMysBNfZBxaMp8lILt6TD2vzTwyY&X-Amz-Signature=4a5f86e3e117e296b4521257619fc9836090177c9ecf8f9e17f3f4809df75c79&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVCHIJLD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLkqMOMkKYpevTC7z0G6LPjzKUBLaCyFStWYL%2FybLeLAiEAsqNxR36GAyHmSs5c%2FwUXMd0do%2Fm0Qf8h9%2BupC9uF9TkqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBL7VuGCP1uomb3RByrcA6VFQWPFQg6lxR3XgO%2FR8O3qoKdynWvw9dPULDhPtBCENnBMHYa1lFWEAPsUR00YO07ZH1lxDzFTU5xXTKYLrk%2F2xQt27iTj9zuE3NgbwcUbcjJkW5R3VEZhD04zBmQMmSUHBHH3KcKiF8itsDvjW14h6qbptG%2BAd7Vr5OyNpDre2MyRsYMlU8YgT0UXATekwqhG0hF92hlatGkW6xJTJ6RTRVvWtsw%2FNI29svTWrnYwfhlIC2cBmEu08YDcBTHAVRfv8avJEzcce0iwujqvfo3PmZI60Ly2YPPrALPaRE9XFyfthR858gLTCfxAq3hs9m3ofnQQOCOGsfngypU%2BuIGnpiudJkQtXaUwNehf%2FrRz6YTgvjTjCkWguoiFil9EaiJ0YhVCDVvAutMJ%2FdPt515BcL%2F5kq1mLEbMPTj0W2yhk%2BQOdgCXRENGTAnole5WMQbs3Hh%2BlLGLDNY6K2%2BZUofBzBjqBNk8GTfOKXfa3329RJYLdgJBpBOu2x797EOvAt5Hvsct1R%2B%2BsHbYsdGq%2BOZZxMsqMygexXFUwyvVdk6lpMtuKG30PtsGJcMmFKWNkNmB8e0SD%2B7qdTBFWKLKK8khorB0414BNm%2F7FcJ25Wy%2BX01A7ylDdjVOF69%2FMIDKocIGOqUB1cyKbUq4380Jf%2B7THBBrffncSxMGjoN05iZjULzaBN3mbJN61bWhEHKYt4RA2zWhIV1DY2OeQ6veXUhlrfLwifvOOs1pWJPGXLkCImAlozYjmlKC0WeY4YraVFeqTmcRuNSFYHdBpwHUA5%2By6nOTCn2FYGr9IMOCbpYqRug7pCO0dizvy8BRWQ41jfTyTWrwZMysBNfZBxaMp8lILt6TD2vzTwyY&X-Amz-Signature=f8971fbe542e70d82188e02ee93e994024358565aebb9b0eeb7fb216924c3de7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVCHIJLD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLkqMOMkKYpevTC7z0G6LPjzKUBLaCyFStWYL%2FybLeLAiEAsqNxR36GAyHmSs5c%2FwUXMd0do%2Fm0Qf8h9%2BupC9uF9TkqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBL7VuGCP1uomb3RByrcA6VFQWPFQg6lxR3XgO%2FR8O3qoKdynWvw9dPULDhPtBCENnBMHYa1lFWEAPsUR00YO07ZH1lxDzFTU5xXTKYLrk%2F2xQt27iTj9zuE3NgbwcUbcjJkW5R3VEZhD04zBmQMmSUHBHH3KcKiF8itsDvjW14h6qbptG%2BAd7Vr5OyNpDre2MyRsYMlU8YgT0UXATekwqhG0hF92hlatGkW6xJTJ6RTRVvWtsw%2FNI29svTWrnYwfhlIC2cBmEu08YDcBTHAVRfv8avJEzcce0iwujqvfo3PmZI60Ly2YPPrALPaRE9XFyfthR858gLTCfxAq3hs9m3ofnQQOCOGsfngypU%2BuIGnpiudJkQtXaUwNehf%2FrRz6YTgvjTjCkWguoiFil9EaiJ0YhVCDVvAutMJ%2FdPt515BcL%2F5kq1mLEbMPTj0W2yhk%2BQOdgCXRENGTAnole5WMQbs3Hh%2BlLGLDNY6K2%2BZUofBzBjqBNk8GTfOKXfa3329RJYLdgJBpBOu2x797EOvAt5Hvsct1R%2B%2BsHbYsdGq%2BOZZxMsqMygexXFUwyvVdk6lpMtuKG30PtsGJcMmFKWNkNmB8e0SD%2B7qdTBFWKLKK8khorB0414BNm%2F7FcJ25Wy%2BX01A7ylDdjVOF69%2FMIDKocIGOqUB1cyKbUq4380Jf%2B7THBBrffncSxMGjoN05iZjULzaBN3mbJN61bWhEHKYt4RA2zWhIV1DY2OeQ6veXUhlrfLwifvOOs1pWJPGXLkCImAlozYjmlKC0WeY4YraVFeqTmcRuNSFYHdBpwHUA5%2By6nOTCn2FYGr9IMOCbpYqRug7pCO0dizvy8BRWQ41jfTyTWrwZMysBNfZBxaMp8lILt6TD2vzTwyY&X-Amz-Signature=4cbe53a14af1f857111dc128fd6649ca9d666c3e1edc7f57ad110c3aa35b59c0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVCHIJLD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLkqMOMkKYpevTC7z0G6LPjzKUBLaCyFStWYL%2FybLeLAiEAsqNxR36GAyHmSs5c%2FwUXMd0do%2Fm0Qf8h9%2BupC9uF9TkqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBL7VuGCP1uomb3RByrcA6VFQWPFQg6lxR3XgO%2FR8O3qoKdynWvw9dPULDhPtBCENnBMHYa1lFWEAPsUR00YO07ZH1lxDzFTU5xXTKYLrk%2F2xQt27iTj9zuE3NgbwcUbcjJkW5R3VEZhD04zBmQMmSUHBHH3KcKiF8itsDvjW14h6qbptG%2BAd7Vr5OyNpDre2MyRsYMlU8YgT0UXATekwqhG0hF92hlatGkW6xJTJ6RTRVvWtsw%2FNI29svTWrnYwfhlIC2cBmEu08YDcBTHAVRfv8avJEzcce0iwujqvfo3PmZI60Ly2YPPrALPaRE9XFyfthR858gLTCfxAq3hs9m3ofnQQOCOGsfngypU%2BuIGnpiudJkQtXaUwNehf%2FrRz6YTgvjTjCkWguoiFil9EaiJ0YhVCDVvAutMJ%2FdPt515BcL%2F5kq1mLEbMPTj0W2yhk%2BQOdgCXRENGTAnole5WMQbs3Hh%2BlLGLDNY6K2%2BZUofBzBjqBNk8GTfOKXfa3329RJYLdgJBpBOu2x797EOvAt5Hvsct1R%2B%2BsHbYsdGq%2BOZZxMsqMygexXFUwyvVdk6lpMtuKG30PtsGJcMmFKWNkNmB8e0SD%2B7qdTBFWKLKK8khorB0414BNm%2F7FcJ25Wy%2BX01A7ylDdjVOF69%2FMIDKocIGOqUB1cyKbUq4380Jf%2B7THBBrffncSxMGjoN05iZjULzaBN3mbJN61bWhEHKYt4RA2zWhIV1DY2OeQ6veXUhlrfLwifvOOs1pWJPGXLkCImAlozYjmlKC0WeY4YraVFeqTmcRuNSFYHdBpwHUA5%2By6nOTCn2FYGr9IMOCbpYqRug7pCO0dizvy8BRWQ41jfTyTWrwZMysBNfZBxaMp8lILt6TD2vzTwyY&X-Amz-Signature=ff9dbd8a0e0b2aa9779e342a6306da79652abdabe001fb5291c93db3670f2fdb&X-Amz-SignedHeaders=host&x-id=GetObject)
