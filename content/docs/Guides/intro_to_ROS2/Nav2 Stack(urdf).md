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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QORICJF%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRFIdKd2wB5RyleB7Nr69bD7unsAm06LTgEHsvyfckvAIgPBaD%2BTTjpDVEH6tY3ImlBwcuUAp0KqS2RfwW9QZ5RGQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrvCdJWX5ppxCjWiircA7%2BVjI4OGLMEGzR9lOyySBRRUR%2BcugIDWTBwshtMu9nCE7%2FTuw3U5WsqSixvRQdv%2FNtXDNpdxtoBQGC5fGIHIr7M6yv4BoScBnha4%2BhxpKcgNsq4kvDEDVDbpHYeK8a232pb2S%2Bad8ThYen4CrKFIZSyet31yZ%2FDRfrTbip95gcOW4HPVLwJlhJD%2BIzMTnhYwiZLIWekmwty%2FqzgYe1Zh3DtftcYGF2rJy5rRn%2FzKcGJ8f2mTo%2B%2FVLYONg0Yw9m5xpHAZbxNmC%2FfA2hgliTeex%2Bl5M0Rj9BvC4DuyiBei2SCxd0AkzDqNfrVf3fXhVfw7OPxSajPnnuMQBfosRotBZdOg31bljPOieiYwBm0zkVuh%2FeUF0eLbTEMVVnhE8lROrrWTAV%2FaW4qoxUyNe4VUNm%2F9IYeQw9R%2FwHx75Jdyac6HXwAlH50m7jMXm0yB2mW%2FTVkzeEBe2mKUUEr%2FaaiR4OF3K9W7HY0SwRamTAht8no2VGlKA9hQErpcXEAZQap8AyU%2BdAkU5T3IlqRnhMuUkKb2kTNLqIS14ZOzJ9SRHryht6YNiRhqG%2BoSKM0OGp9%2Fdr3t12dmbz6CtYqM7fT1hMXDAqRjBgBesUTSnly5f8zb5wdcK4rrs7mtI82MInSiL8GOqUBEdCUzXiKIEXfXlB6Z60CrsRKbtRiAEloPDcjv58l2W6vpEmivzmXWPaC07OQ4UBgih22xCWqaHN%2BlfeLSQpo2vj336NvfQEEa7OX8LFi6f%2Fhd29azckeBif%2FrNilam%2BEAwi4ko9JP8I9QMsmoAJY%2FUv%2FWyGdBO0SfYkK93%2FANNM7MFvlBSwLRX6SKYTh2BlL3H33ENYpDceDn22PqkmLKZotDbbc&X-Amz-Signature=6e7405b9b120d2fedd283c822e43ca00277d4ded1c78493e4658fae29737d451&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QORICJF%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRFIdKd2wB5RyleB7Nr69bD7unsAm06LTgEHsvyfckvAIgPBaD%2BTTjpDVEH6tY3ImlBwcuUAp0KqS2RfwW9QZ5RGQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrvCdJWX5ppxCjWiircA7%2BVjI4OGLMEGzR9lOyySBRRUR%2BcugIDWTBwshtMu9nCE7%2FTuw3U5WsqSixvRQdv%2FNtXDNpdxtoBQGC5fGIHIr7M6yv4BoScBnha4%2BhxpKcgNsq4kvDEDVDbpHYeK8a232pb2S%2Bad8ThYen4CrKFIZSyet31yZ%2FDRfrTbip95gcOW4HPVLwJlhJD%2BIzMTnhYwiZLIWekmwty%2FqzgYe1Zh3DtftcYGF2rJy5rRn%2FzKcGJ8f2mTo%2B%2FVLYONg0Yw9m5xpHAZbxNmC%2FfA2hgliTeex%2Bl5M0Rj9BvC4DuyiBei2SCxd0AkzDqNfrVf3fXhVfw7OPxSajPnnuMQBfosRotBZdOg31bljPOieiYwBm0zkVuh%2FeUF0eLbTEMVVnhE8lROrrWTAV%2FaW4qoxUyNe4VUNm%2F9IYeQw9R%2FwHx75Jdyac6HXwAlH50m7jMXm0yB2mW%2FTVkzeEBe2mKUUEr%2FaaiR4OF3K9W7HY0SwRamTAht8no2VGlKA9hQErpcXEAZQap8AyU%2BdAkU5T3IlqRnhMuUkKb2kTNLqIS14ZOzJ9SRHryht6YNiRhqG%2BoSKM0OGp9%2Fdr3t12dmbz6CtYqM7fT1hMXDAqRjBgBesUTSnly5f8zb5wdcK4rrs7mtI82MInSiL8GOqUBEdCUzXiKIEXfXlB6Z60CrsRKbtRiAEloPDcjv58l2W6vpEmivzmXWPaC07OQ4UBgih22xCWqaHN%2BlfeLSQpo2vj336NvfQEEa7OX8LFi6f%2Fhd29azckeBif%2FrNilam%2BEAwi4ko9JP8I9QMsmoAJY%2FUv%2FWyGdBO0SfYkK93%2FANNM7MFvlBSwLRX6SKYTh2BlL3H33ENYpDceDn22PqkmLKZotDbbc&X-Amz-Signature=dd21bf778de93d9147e8415955ee7a07ac22c27f33daca54b7a1eff47da5c387&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QORICJF%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRFIdKd2wB5RyleB7Nr69bD7unsAm06LTgEHsvyfckvAIgPBaD%2BTTjpDVEH6tY3ImlBwcuUAp0KqS2RfwW9QZ5RGQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrvCdJWX5ppxCjWiircA7%2BVjI4OGLMEGzR9lOyySBRRUR%2BcugIDWTBwshtMu9nCE7%2FTuw3U5WsqSixvRQdv%2FNtXDNpdxtoBQGC5fGIHIr7M6yv4BoScBnha4%2BhxpKcgNsq4kvDEDVDbpHYeK8a232pb2S%2Bad8ThYen4CrKFIZSyet31yZ%2FDRfrTbip95gcOW4HPVLwJlhJD%2BIzMTnhYwiZLIWekmwty%2FqzgYe1Zh3DtftcYGF2rJy5rRn%2FzKcGJ8f2mTo%2B%2FVLYONg0Yw9m5xpHAZbxNmC%2FfA2hgliTeex%2Bl5M0Rj9BvC4DuyiBei2SCxd0AkzDqNfrVf3fXhVfw7OPxSajPnnuMQBfosRotBZdOg31bljPOieiYwBm0zkVuh%2FeUF0eLbTEMVVnhE8lROrrWTAV%2FaW4qoxUyNe4VUNm%2F9IYeQw9R%2FwHx75Jdyac6HXwAlH50m7jMXm0yB2mW%2FTVkzeEBe2mKUUEr%2FaaiR4OF3K9W7HY0SwRamTAht8no2VGlKA9hQErpcXEAZQap8AyU%2BdAkU5T3IlqRnhMuUkKb2kTNLqIS14ZOzJ9SRHryht6YNiRhqG%2BoSKM0OGp9%2Fdr3t12dmbz6CtYqM7fT1hMXDAqRjBgBesUTSnly5f8zb5wdcK4rrs7mtI82MInSiL8GOqUBEdCUzXiKIEXfXlB6Z60CrsRKbtRiAEloPDcjv58l2W6vpEmivzmXWPaC07OQ4UBgih22xCWqaHN%2BlfeLSQpo2vj336NvfQEEa7OX8LFi6f%2Fhd29azckeBif%2FrNilam%2BEAwi4ko9JP8I9QMsmoAJY%2FUv%2FWyGdBO0SfYkK93%2FANNM7MFvlBSwLRX6SKYTh2BlL3H33ENYpDceDn22PqkmLKZotDbbc&X-Amz-Signature=dec7e018d9be5cbd6d15ea31cfe4adeb1831480fe7f36445600b6ed906096930&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QORICJF%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRFIdKd2wB5RyleB7Nr69bD7unsAm06LTgEHsvyfckvAIgPBaD%2BTTjpDVEH6tY3ImlBwcuUAp0KqS2RfwW9QZ5RGQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrvCdJWX5ppxCjWiircA7%2BVjI4OGLMEGzR9lOyySBRRUR%2BcugIDWTBwshtMu9nCE7%2FTuw3U5WsqSixvRQdv%2FNtXDNpdxtoBQGC5fGIHIr7M6yv4BoScBnha4%2BhxpKcgNsq4kvDEDVDbpHYeK8a232pb2S%2Bad8ThYen4CrKFIZSyet31yZ%2FDRfrTbip95gcOW4HPVLwJlhJD%2BIzMTnhYwiZLIWekmwty%2FqzgYe1Zh3DtftcYGF2rJy5rRn%2FzKcGJ8f2mTo%2B%2FVLYONg0Yw9m5xpHAZbxNmC%2FfA2hgliTeex%2Bl5M0Rj9BvC4DuyiBei2SCxd0AkzDqNfrVf3fXhVfw7OPxSajPnnuMQBfosRotBZdOg31bljPOieiYwBm0zkVuh%2FeUF0eLbTEMVVnhE8lROrrWTAV%2FaW4qoxUyNe4VUNm%2F9IYeQw9R%2FwHx75Jdyac6HXwAlH50m7jMXm0yB2mW%2FTVkzeEBe2mKUUEr%2FaaiR4OF3K9W7HY0SwRamTAht8no2VGlKA9hQErpcXEAZQap8AyU%2BdAkU5T3IlqRnhMuUkKb2kTNLqIS14ZOzJ9SRHryht6YNiRhqG%2BoSKM0OGp9%2Fdr3t12dmbz6CtYqM7fT1hMXDAqRjBgBesUTSnly5f8zb5wdcK4rrs7mtI82MInSiL8GOqUBEdCUzXiKIEXfXlB6Z60CrsRKbtRiAEloPDcjv58l2W6vpEmivzmXWPaC07OQ4UBgih22xCWqaHN%2BlfeLSQpo2vj336NvfQEEa7OX8LFi6f%2Fhd29azckeBif%2FrNilam%2BEAwi4ko9JP8I9QMsmoAJY%2FUv%2FWyGdBO0SfYkK93%2FANNM7MFvlBSwLRX6SKYTh2BlL3H33ENYpDceDn22PqkmLKZotDbbc&X-Amz-Signature=53da08515400fb36ac1b8f445d7467ff97c87d6797e6173ae5fdfdbe07d28f25&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QORICJF%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRFIdKd2wB5RyleB7Nr69bD7unsAm06LTgEHsvyfckvAIgPBaD%2BTTjpDVEH6tY3ImlBwcuUAp0KqS2RfwW9QZ5RGQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrvCdJWX5ppxCjWiircA7%2BVjI4OGLMEGzR9lOyySBRRUR%2BcugIDWTBwshtMu9nCE7%2FTuw3U5WsqSixvRQdv%2FNtXDNpdxtoBQGC5fGIHIr7M6yv4BoScBnha4%2BhxpKcgNsq4kvDEDVDbpHYeK8a232pb2S%2Bad8ThYen4CrKFIZSyet31yZ%2FDRfrTbip95gcOW4HPVLwJlhJD%2BIzMTnhYwiZLIWekmwty%2FqzgYe1Zh3DtftcYGF2rJy5rRn%2FzKcGJ8f2mTo%2B%2FVLYONg0Yw9m5xpHAZbxNmC%2FfA2hgliTeex%2Bl5M0Rj9BvC4DuyiBei2SCxd0AkzDqNfrVf3fXhVfw7OPxSajPnnuMQBfosRotBZdOg31bljPOieiYwBm0zkVuh%2FeUF0eLbTEMVVnhE8lROrrWTAV%2FaW4qoxUyNe4VUNm%2F9IYeQw9R%2FwHx75Jdyac6HXwAlH50m7jMXm0yB2mW%2FTVkzeEBe2mKUUEr%2FaaiR4OF3K9W7HY0SwRamTAht8no2VGlKA9hQErpcXEAZQap8AyU%2BdAkU5T3IlqRnhMuUkKb2kTNLqIS14ZOzJ9SRHryht6YNiRhqG%2BoSKM0OGp9%2Fdr3t12dmbz6CtYqM7fT1hMXDAqRjBgBesUTSnly5f8zb5wdcK4rrs7mtI82MInSiL8GOqUBEdCUzXiKIEXfXlB6Z60CrsRKbtRiAEloPDcjv58l2W6vpEmivzmXWPaC07OQ4UBgih22xCWqaHN%2BlfeLSQpo2vj336NvfQEEa7OX8LFi6f%2Fhd29azckeBif%2FrNilam%2BEAwi4ko9JP8I9QMsmoAJY%2FUv%2FWyGdBO0SfYkK93%2FANNM7MFvlBSwLRX6SKYTh2BlL3H33ENYpDceDn22PqkmLKZotDbbc&X-Amz-Signature=d98b3efc841aa8d3d8fa5941c79d388a0e24a25552070b63447b491ebc7ddf7c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QORICJF%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRFIdKd2wB5RyleB7Nr69bD7unsAm06LTgEHsvyfckvAIgPBaD%2BTTjpDVEH6tY3ImlBwcuUAp0KqS2RfwW9QZ5RGQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrvCdJWX5ppxCjWiircA7%2BVjI4OGLMEGzR9lOyySBRRUR%2BcugIDWTBwshtMu9nCE7%2FTuw3U5WsqSixvRQdv%2FNtXDNpdxtoBQGC5fGIHIr7M6yv4BoScBnha4%2BhxpKcgNsq4kvDEDVDbpHYeK8a232pb2S%2Bad8ThYen4CrKFIZSyet31yZ%2FDRfrTbip95gcOW4HPVLwJlhJD%2BIzMTnhYwiZLIWekmwty%2FqzgYe1Zh3DtftcYGF2rJy5rRn%2FzKcGJ8f2mTo%2B%2FVLYONg0Yw9m5xpHAZbxNmC%2FfA2hgliTeex%2Bl5M0Rj9BvC4DuyiBei2SCxd0AkzDqNfrVf3fXhVfw7OPxSajPnnuMQBfosRotBZdOg31bljPOieiYwBm0zkVuh%2FeUF0eLbTEMVVnhE8lROrrWTAV%2FaW4qoxUyNe4VUNm%2F9IYeQw9R%2FwHx75Jdyac6HXwAlH50m7jMXm0yB2mW%2FTVkzeEBe2mKUUEr%2FaaiR4OF3K9W7HY0SwRamTAht8no2VGlKA9hQErpcXEAZQap8AyU%2BdAkU5T3IlqRnhMuUkKb2kTNLqIS14ZOzJ9SRHryht6YNiRhqG%2BoSKM0OGp9%2Fdr3t12dmbz6CtYqM7fT1hMXDAqRjBgBesUTSnly5f8zb5wdcK4rrs7mtI82MInSiL8GOqUBEdCUzXiKIEXfXlB6Z60CrsRKbtRiAEloPDcjv58l2W6vpEmivzmXWPaC07OQ4UBgih22xCWqaHN%2BlfeLSQpo2vj336NvfQEEa7OX8LFi6f%2Fhd29azckeBif%2FrNilam%2BEAwi4ko9JP8I9QMsmoAJY%2FUv%2FWyGdBO0SfYkK93%2FANNM7MFvlBSwLRX6SKYTh2BlL3H33ENYpDceDn22PqkmLKZotDbbc&X-Amz-Signature=329d97b369c65466bef2a912db8174fecb1d20895b7aa0bd103bbb27c6643575&X-Amz-SignedHeaders=host&x-id=GetObject)
