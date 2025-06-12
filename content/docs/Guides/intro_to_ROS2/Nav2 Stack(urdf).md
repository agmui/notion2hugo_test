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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3RQUMAX%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQC47dfZb4RV5Mi661OovCpag0V9fBQW1qHllmvRkfHHTwIhAI4J%2FRZlcIPvBtIZJ%2Bb7RXVGjCd%2FczbGTeU0w%2Fo3kNjQKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcyUMf57WC9pnkLe0q3APlXZNr2ZaagfjBp6K8ezzH2ghpmNVtY6jlAjjn0HnYfpbyWLLEJrGeTlK1yGJGlQlEzSSnyDYiIhdaUeTHlaIABj52GBUq2BcXnB2GnHUv9D1WWZnGU4VIrwvKTP2AflBs%2Bfy6FZXIPo9%2B%2FKSi3%2BWvt1EvVK76I67qI49dQVpm864cJgYPV9fbdkrveEPt8RnBkiLjbQC7e4LqZWG4QE2CimbBv%2BLB6wmAAz2RqZU%2F3odNIxcUaeM%2FcLZDg8wsYt3hQUNX6tNDUBYiwoeOIv%2BgkG7wXlwb8Y9jCjes%2F7iV9X1jHdFdWGSIHyalWiDnNL2qwF%2BY5qJAsBsVsVMqrnJi9A9jPbMl2KQDFlL82ksI3yJhpRyPSM2tz%2B9D9dnsTNweFmPTcOlHX70FdnM4ZKgyhsgATzE6YdOe2chQktb4WFhhv6wvfJtQ93u2lTROBzcIa3oKg3T7znRdUEagPAYH1Xupmrq4Ie7iheoC8oMSEbxDAWWpe7NqvgRupIS9rHGSTJ6UO70Pptoqlh4d2wtDRlDmhcTSw7sv%2BHGUjTflsmY3F728iKjoaYoMgfn%2BiNdIFqCpPxsd%2Bg2vAm%2Bf9z%2BKSkTV0vKGerhICKbVGc8fUQf8kBARwgixkh6vVTDtqavCBjqkAeoGEGOlTTAHlTLLhLqcYFM6CgHiCRM8xJD504BouX6ESK7PwMGDC0Pg%2BbR2hu8v9ywgNh6sVqLcdzm1iHX4fixDZKsB1DgZQYIG%2BKo7hPN26A%2FGxgy5UDZjOmd5gUqHiC1avzIRA9nFxdE71wm4Fc6e1K7tnw%2FeOCLzEt1LW%2B9Z0k2CW1oe0F3J2MzDTLYReAA4uOmZwa2VhK3jyaXSaZd5AcEB&X-Amz-Signature=2a23dccff86033e4a424ef689dd86a8d3d7de7a1160a2834722e56805acf30ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3RQUMAX%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQC47dfZb4RV5Mi661OovCpag0V9fBQW1qHllmvRkfHHTwIhAI4J%2FRZlcIPvBtIZJ%2Bb7RXVGjCd%2FczbGTeU0w%2Fo3kNjQKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcyUMf57WC9pnkLe0q3APlXZNr2ZaagfjBp6K8ezzH2ghpmNVtY6jlAjjn0HnYfpbyWLLEJrGeTlK1yGJGlQlEzSSnyDYiIhdaUeTHlaIABj52GBUq2BcXnB2GnHUv9D1WWZnGU4VIrwvKTP2AflBs%2Bfy6FZXIPo9%2B%2FKSi3%2BWvt1EvVK76I67qI49dQVpm864cJgYPV9fbdkrveEPt8RnBkiLjbQC7e4LqZWG4QE2CimbBv%2BLB6wmAAz2RqZU%2F3odNIxcUaeM%2FcLZDg8wsYt3hQUNX6tNDUBYiwoeOIv%2BgkG7wXlwb8Y9jCjes%2F7iV9X1jHdFdWGSIHyalWiDnNL2qwF%2BY5qJAsBsVsVMqrnJi9A9jPbMl2KQDFlL82ksI3yJhpRyPSM2tz%2B9D9dnsTNweFmPTcOlHX70FdnM4ZKgyhsgATzE6YdOe2chQktb4WFhhv6wvfJtQ93u2lTROBzcIa3oKg3T7znRdUEagPAYH1Xupmrq4Ie7iheoC8oMSEbxDAWWpe7NqvgRupIS9rHGSTJ6UO70Pptoqlh4d2wtDRlDmhcTSw7sv%2BHGUjTflsmY3F728iKjoaYoMgfn%2BiNdIFqCpPxsd%2Bg2vAm%2Bf9z%2BKSkTV0vKGerhICKbVGc8fUQf8kBARwgixkh6vVTDtqavCBjqkAeoGEGOlTTAHlTLLhLqcYFM6CgHiCRM8xJD504BouX6ESK7PwMGDC0Pg%2BbR2hu8v9ywgNh6sVqLcdzm1iHX4fixDZKsB1DgZQYIG%2BKo7hPN26A%2FGxgy5UDZjOmd5gUqHiC1avzIRA9nFxdE71wm4Fc6e1K7tnw%2FeOCLzEt1LW%2B9Z0k2CW1oe0F3J2MzDTLYReAA4uOmZwa2VhK3jyaXSaZd5AcEB&X-Amz-Signature=4a10fd634780e0ee58391306768f3597b6aa7fcba01bec96a005375ad2d6e99f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3RQUMAX%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQC47dfZb4RV5Mi661OovCpag0V9fBQW1qHllmvRkfHHTwIhAI4J%2FRZlcIPvBtIZJ%2Bb7RXVGjCd%2FczbGTeU0w%2Fo3kNjQKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcyUMf57WC9pnkLe0q3APlXZNr2ZaagfjBp6K8ezzH2ghpmNVtY6jlAjjn0HnYfpbyWLLEJrGeTlK1yGJGlQlEzSSnyDYiIhdaUeTHlaIABj52GBUq2BcXnB2GnHUv9D1WWZnGU4VIrwvKTP2AflBs%2Bfy6FZXIPo9%2B%2FKSi3%2BWvt1EvVK76I67qI49dQVpm864cJgYPV9fbdkrveEPt8RnBkiLjbQC7e4LqZWG4QE2CimbBv%2BLB6wmAAz2RqZU%2F3odNIxcUaeM%2FcLZDg8wsYt3hQUNX6tNDUBYiwoeOIv%2BgkG7wXlwb8Y9jCjes%2F7iV9X1jHdFdWGSIHyalWiDnNL2qwF%2BY5qJAsBsVsVMqrnJi9A9jPbMl2KQDFlL82ksI3yJhpRyPSM2tz%2B9D9dnsTNweFmPTcOlHX70FdnM4ZKgyhsgATzE6YdOe2chQktb4WFhhv6wvfJtQ93u2lTROBzcIa3oKg3T7znRdUEagPAYH1Xupmrq4Ie7iheoC8oMSEbxDAWWpe7NqvgRupIS9rHGSTJ6UO70Pptoqlh4d2wtDRlDmhcTSw7sv%2BHGUjTflsmY3F728iKjoaYoMgfn%2BiNdIFqCpPxsd%2Bg2vAm%2Bf9z%2BKSkTV0vKGerhICKbVGc8fUQf8kBARwgixkh6vVTDtqavCBjqkAeoGEGOlTTAHlTLLhLqcYFM6CgHiCRM8xJD504BouX6ESK7PwMGDC0Pg%2BbR2hu8v9ywgNh6sVqLcdzm1iHX4fixDZKsB1DgZQYIG%2BKo7hPN26A%2FGxgy5UDZjOmd5gUqHiC1avzIRA9nFxdE71wm4Fc6e1K7tnw%2FeOCLzEt1LW%2B9Z0k2CW1oe0F3J2MzDTLYReAA4uOmZwa2VhK3jyaXSaZd5AcEB&X-Amz-Signature=be70400432f320a7493fe433786be579c87c682a29a9ddd7a5aee637d22bcf85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3RQUMAX%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQC47dfZb4RV5Mi661OovCpag0V9fBQW1qHllmvRkfHHTwIhAI4J%2FRZlcIPvBtIZJ%2Bb7RXVGjCd%2FczbGTeU0w%2Fo3kNjQKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcyUMf57WC9pnkLe0q3APlXZNr2ZaagfjBp6K8ezzH2ghpmNVtY6jlAjjn0HnYfpbyWLLEJrGeTlK1yGJGlQlEzSSnyDYiIhdaUeTHlaIABj52GBUq2BcXnB2GnHUv9D1WWZnGU4VIrwvKTP2AflBs%2Bfy6FZXIPo9%2B%2FKSi3%2BWvt1EvVK76I67qI49dQVpm864cJgYPV9fbdkrveEPt8RnBkiLjbQC7e4LqZWG4QE2CimbBv%2BLB6wmAAz2RqZU%2F3odNIxcUaeM%2FcLZDg8wsYt3hQUNX6tNDUBYiwoeOIv%2BgkG7wXlwb8Y9jCjes%2F7iV9X1jHdFdWGSIHyalWiDnNL2qwF%2BY5qJAsBsVsVMqrnJi9A9jPbMl2KQDFlL82ksI3yJhpRyPSM2tz%2B9D9dnsTNweFmPTcOlHX70FdnM4ZKgyhsgATzE6YdOe2chQktb4WFhhv6wvfJtQ93u2lTROBzcIa3oKg3T7znRdUEagPAYH1Xupmrq4Ie7iheoC8oMSEbxDAWWpe7NqvgRupIS9rHGSTJ6UO70Pptoqlh4d2wtDRlDmhcTSw7sv%2BHGUjTflsmY3F728iKjoaYoMgfn%2BiNdIFqCpPxsd%2Bg2vAm%2Bf9z%2BKSkTV0vKGerhICKbVGc8fUQf8kBARwgixkh6vVTDtqavCBjqkAeoGEGOlTTAHlTLLhLqcYFM6CgHiCRM8xJD504BouX6ESK7PwMGDC0Pg%2BbR2hu8v9ywgNh6sVqLcdzm1iHX4fixDZKsB1DgZQYIG%2BKo7hPN26A%2FGxgy5UDZjOmd5gUqHiC1avzIRA9nFxdE71wm4Fc6e1K7tnw%2FeOCLzEt1LW%2B9Z0k2CW1oe0F3J2MzDTLYReAA4uOmZwa2VhK3jyaXSaZd5AcEB&X-Amz-Signature=b622267578ee80c81ceafa0764285e347d67900169a553ae8863c8eefbf74f63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3RQUMAX%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQC47dfZb4RV5Mi661OovCpag0V9fBQW1qHllmvRkfHHTwIhAI4J%2FRZlcIPvBtIZJ%2Bb7RXVGjCd%2FczbGTeU0w%2Fo3kNjQKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcyUMf57WC9pnkLe0q3APlXZNr2ZaagfjBp6K8ezzH2ghpmNVtY6jlAjjn0HnYfpbyWLLEJrGeTlK1yGJGlQlEzSSnyDYiIhdaUeTHlaIABj52GBUq2BcXnB2GnHUv9D1WWZnGU4VIrwvKTP2AflBs%2Bfy6FZXIPo9%2B%2FKSi3%2BWvt1EvVK76I67qI49dQVpm864cJgYPV9fbdkrveEPt8RnBkiLjbQC7e4LqZWG4QE2CimbBv%2BLB6wmAAz2RqZU%2F3odNIxcUaeM%2FcLZDg8wsYt3hQUNX6tNDUBYiwoeOIv%2BgkG7wXlwb8Y9jCjes%2F7iV9X1jHdFdWGSIHyalWiDnNL2qwF%2BY5qJAsBsVsVMqrnJi9A9jPbMl2KQDFlL82ksI3yJhpRyPSM2tz%2B9D9dnsTNweFmPTcOlHX70FdnM4ZKgyhsgATzE6YdOe2chQktb4WFhhv6wvfJtQ93u2lTROBzcIa3oKg3T7znRdUEagPAYH1Xupmrq4Ie7iheoC8oMSEbxDAWWpe7NqvgRupIS9rHGSTJ6UO70Pptoqlh4d2wtDRlDmhcTSw7sv%2BHGUjTflsmY3F728iKjoaYoMgfn%2BiNdIFqCpPxsd%2Bg2vAm%2Bf9z%2BKSkTV0vKGerhICKbVGc8fUQf8kBARwgixkh6vVTDtqavCBjqkAeoGEGOlTTAHlTLLhLqcYFM6CgHiCRM8xJD504BouX6ESK7PwMGDC0Pg%2BbR2hu8v9ywgNh6sVqLcdzm1iHX4fixDZKsB1DgZQYIG%2BKo7hPN26A%2FGxgy5UDZjOmd5gUqHiC1avzIRA9nFxdE71wm4Fc6e1K7tnw%2FeOCLzEt1LW%2B9Z0k2CW1oe0F3J2MzDTLYReAA4uOmZwa2VhK3jyaXSaZd5AcEB&X-Amz-Signature=b1e21ae390696b454bc087650bcbce2823f9368f70aa5349f739e062e0cab21f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3RQUMAX%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQC47dfZb4RV5Mi661OovCpag0V9fBQW1qHllmvRkfHHTwIhAI4J%2FRZlcIPvBtIZJ%2Bb7RXVGjCd%2FczbGTeU0w%2Fo3kNjQKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcyUMf57WC9pnkLe0q3APlXZNr2ZaagfjBp6K8ezzH2ghpmNVtY6jlAjjn0HnYfpbyWLLEJrGeTlK1yGJGlQlEzSSnyDYiIhdaUeTHlaIABj52GBUq2BcXnB2GnHUv9D1WWZnGU4VIrwvKTP2AflBs%2Bfy6FZXIPo9%2B%2FKSi3%2BWvt1EvVK76I67qI49dQVpm864cJgYPV9fbdkrveEPt8RnBkiLjbQC7e4LqZWG4QE2CimbBv%2BLB6wmAAz2RqZU%2F3odNIxcUaeM%2FcLZDg8wsYt3hQUNX6tNDUBYiwoeOIv%2BgkG7wXlwb8Y9jCjes%2F7iV9X1jHdFdWGSIHyalWiDnNL2qwF%2BY5qJAsBsVsVMqrnJi9A9jPbMl2KQDFlL82ksI3yJhpRyPSM2tz%2B9D9dnsTNweFmPTcOlHX70FdnM4ZKgyhsgATzE6YdOe2chQktb4WFhhv6wvfJtQ93u2lTROBzcIa3oKg3T7znRdUEagPAYH1Xupmrq4Ie7iheoC8oMSEbxDAWWpe7NqvgRupIS9rHGSTJ6UO70Pptoqlh4d2wtDRlDmhcTSw7sv%2BHGUjTflsmY3F728iKjoaYoMgfn%2BiNdIFqCpPxsd%2Bg2vAm%2Bf9z%2BKSkTV0vKGerhICKbVGc8fUQf8kBARwgixkh6vVTDtqavCBjqkAeoGEGOlTTAHlTLLhLqcYFM6CgHiCRM8xJD504BouX6ESK7PwMGDC0Pg%2BbR2hu8v9ywgNh6sVqLcdzm1iHX4fixDZKsB1DgZQYIG%2BKo7hPN26A%2FGxgy5UDZjOmd5gUqHiC1avzIRA9nFxdE71wm4Fc6e1K7tnw%2FeOCLzEt1LW%2B9Z0k2CW1oe0F3J2MzDTLYReAA4uOmZwa2VhK3jyaXSaZd5AcEB&X-Amz-Signature=d64f688d4dfa58cdba7f950ad7e69a8b4daf8e25eca0056bbc426c28ba76bf4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
