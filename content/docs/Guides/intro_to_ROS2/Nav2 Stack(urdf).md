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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYPV3KYZ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUlYD3Z0R1TxPTo447jr%2FqrgEnbk3dX%2BTv9vHO0W02yAiAmUxLsgCFU%2FAVLbHsTkJsM%2BCJ7%2BNWGYvltZ%2Br%2BsIRCBir%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMgFhZJDhR%2FC6ebgUWKtwDz8dfLRZyP4R3i7t7R1Zyb%2FXzUCoLwjkFZpvRLeqa8tBFM4DMP3%2BxhMcCNofr6nenK97qjb464%2BBVD1LfFFh%2B1npFK3%2BCn%2FT%2BHmFLp0htz7wzIabapkZR4RmZI5K0svnMzknKJjB88bMbiVE4leGAYlIhkEkj8fvSaHstWvSU26pykokFA7YCb%2FHRMFlbJC%2BXM1otARDwCIm%2Bv8ck5OnHwKmvGA7pxuprGg543iZFNYdKFfZsDJ4oNvpOcaCSu2tGof5OAB44B5xTo%2FUvham8rttdoytiYmZZEDRQ1LWohOZWY%2Feq7HiDnAgB%2FeEs8A3Dn1CQs0wmz0AxXC5cLWzmKcNqsfm2xNwj2k3KS6PqKn8v4k0mJTFxjqyLmn3sQ7lCHSG2D2GZWGgc8u8b52ERm6rqGB6Nc7Krn8qfIGx1J%2Ft5XEJPGogDEd3kyGi5jgWdTp1mK04hT2drUI%2FZvk5lgn8oo6ahm6z65a3bPwO5NNEOyMpdbYPTrYDqBAsvz%2FbWQd339h5pTEaPSzzu5dyQ4x50p4aHk6UasVIwyqYOd0CzJwEeuoRaHZ4ard317ZktqLaNTBjxVEL9prvd7thowkh2p8Osm3Enub6LpodPuk02s1e14m5S74dcadUwptq5vQY6pgESKhPb2QyI%2B31G0For7FZSWD8n9T4oM2h5rxM7tuZipE6bAOD806MglTvbUBNOwlKJAAqln5jHazAveEhRCXXk3L1ZjI9Qcx6WSG2QnBnMrIrom%2FqsasPuQul3Uz1%2FzSjHjwoOaTMVrWw6y4MbXLXILdjbnkF6i5pluMlBM1jjA7DPGc3Chx8Fl95DbXlyxbk7co%2FDdqw330pO%2F5kwg2EEuMz6Iwi6&X-Amz-Signature=377c926ccea509286b9bfb05264c8aee9821fcf617b5436ac36946885ca590fb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYPV3KYZ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUlYD3Z0R1TxPTo447jr%2FqrgEnbk3dX%2BTv9vHO0W02yAiAmUxLsgCFU%2FAVLbHsTkJsM%2BCJ7%2BNWGYvltZ%2Br%2BsIRCBir%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMgFhZJDhR%2FC6ebgUWKtwDz8dfLRZyP4R3i7t7R1Zyb%2FXzUCoLwjkFZpvRLeqa8tBFM4DMP3%2BxhMcCNofr6nenK97qjb464%2BBVD1LfFFh%2B1npFK3%2BCn%2FT%2BHmFLp0htz7wzIabapkZR4RmZI5K0svnMzknKJjB88bMbiVE4leGAYlIhkEkj8fvSaHstWvSU26pykokFA7YCb%2FHRMFlbJC%2BXM1otARDwCIm%2Bv8ck5OnHwKmvGA7pxuprGg543iZFNYdKFfZsDJ4oNvpOcaCSu2tGof5OAB44B5xTo%2FUvham8rttdoytiYmZZEDRQ1LWohOZWY%2Feq7HiDnAgB%2FeEs8A3Dn1CQs0wmz0AxXC5cLWzmKcNqsfm2xNwj2k3KS6PqKn8v4k0mJTFxjqyLmn3sQ7lCHSG2D2GZWGgc8u8b52ERm6rqGB6Nc7Krn8qfIGx1J%2Ft5XEJPGogDEd3kyGi5jgWdTp1mK04hT2drUI%2FZvk5lgn8oo6ahm6z65a3bPwO5NNEOyMpdbYPTrYDqBAsvz%2FbWQd339h5pTEaPSzzu5dyQ4x50p4aHk6UasVIwyqYOd0CzJwEeuoRaHZ4ard317ZktqLaNTBjxVEL9prvd7thowkh2p8Osm3Enub6LpodPuk02s1e14m5S74dcadUwptq5vQY6pgESKhPb2QyI%2B31G0For7FZSWD8n9T4oM2h5rxM7tuZipE6bAOD806MglTvbUBNOwlKJAAqln5jHazAveEhRCXXk3L1ZjI9Qcx6WSG2QnBnMrIrom%2FqsasPuQul3Uz1%2FzSjHjwoOaTMVrWw6y4MbXLXILdjbnkF6i5pluMlBM1jjA7DPGc3Chx8Fl95DbXlyxbk7co%2FDdqw330pO%2F5kwg2EEuMz6Iwi6&X-Amz-Signature=dc583419cef01a83953be9ff21c96802f74f7f96892a0cc69a7458b634b4feca&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYPV3KYZ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUlYD3Z0R1TxPTo447jr%2FqrgEnbk3dX%2BTv9vHO0W02yAiAmUxLsgCFU%2FAVLbHsTkJsM%2BCJ7%2BNWGYvltZ%2Br%2BsIRCBir%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMgFhZJDhR%2FC6ebgUWKtwDz8dfLRZyP4R3i7t7R1Zyb%2FXzUCoLwjkFZpvRLeqa8tBFM4DMP3%2BxhMcCNofr6nenK97qjb464%2BBVD1LfFFh%2B1npFK3%2BCn%2FT%2BHmFLp0htz7wzIabapkZR4RmZI5K0svnMzknKJjB88bMbiVE4leGAYlIhkEkj8fvSaHstWvSU26pykokFA7YCb%2FHRMFlbJC%2BXM1otARDwCIm%2Bv8ck5OnHwKmvGA7pxuprGg543iZFNYdKFfZsDJ4oNvpOcaCSu2tGof5OAB44B5xTo%2FUvham8rttdoytiYmZZEDRQ1LWohOZWY%2Feq7HiDnAgB%2FeEs8A3Dn1CQs0wmz0AxXC5cLWzmKcNqsfm2xNwj2k3KS6PqKn8v4k0mJTFxjqyLmn3sQ7lCHSG2D2GZWGgc8u8b52ERm6rqGB6Nc7Krn8qfIGx1J%2Ft5XEJPGogDEd3kyGi5jgWdTp1mK04hT2drUI%2FZvk5lgn8oo6ahm6z65a3bPwO5NNEOyMpdbYPTrYDqBAsvz%2FbWQd339h5pTEaPSzzu5dyQ4x50p4aHk6UasVIwyqYOd0CzJwEeuoRaHZ4ard317ZktqLaNTBjxVEL9prvd7thowkh2p8Osm3Enub6LpodPuk02s1e14m5S74dcadUwptq5vQY6pgESKhPb2QyI%2B31G0For7FZSWD8n9T4oM2h5rxM7tuZipE6bAOD806MglTvbUBNOwlKJAAqln5jHazAveEhRCXXk3L1ZjI9Qcx6WSG2QnBnMrIrom%2FqsasPuQul3Uz1%2FzSjHjwoOaTMVrWw6y4MbXLXILdjbnkF6i5pluMlBM1jjA7DPGc3Chx8Fl95DbXlyxbk7co%2FDdqw330pO%2F5kwg2EEuMz6Iwi6&X-Amz-Signature=335f259ac1a1b0e92cf9e28c49b514dfc5b358b73a50b2c3e18a423a97f84258&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYPV3KYZ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUlYD3Z0R1TxPTo447jr%2FqrgEnbk3dX%2BTv9vHO0W02yAiAmUxLsgCFU%2FAVLbHsTkJsM%2BCJ7%2BNWGYvltZ%2Br%2BsIRCBir%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMgFhZJDhR%2FC6ebgUWKtwDz8dfLRZyP4R3i7t7R1Zyb%2FXzUCoLwjkFZpvRLeqa8tBFM4DMP3%2BxhMcCNofr6nenK97qjb464%2BBVD1LfFFh%2B1npFK3%2BCn%2FT%2BHmFLp0htz7wzIabapkZR4RmZI5K0svnMzknKJjB88bMbiVE4leGAYlIhkEkj8fvSaHstWvSU26pykokFA7YCb%2FHRMFlbJC%2BXM1otARDwCIm%2Bv8ck5OnHwKmvGA7pxuprGg543iZFNYdKFfZsDJ4oNvpOcaCSu2tGof5OAB44B5xTo%2FUvham8rttdoytiYmZZEDRQ1LWohOZWY%2Feq7HiDnAgB%2FeEs8A3Dn1CQs0wmz0AxXC5cLWzmKcNqsfm2xNwj2k3KS6PqKn8v4k0mJTFxjqyLmn3sQ7lCHSG2D2GZWGgc8u8b52ERm6rqGB6Nc7Krn8qfIGx1J%2Ft5XEJPGogDEd3kyGi5jgWdTp1mK04hT2drUI%2FZvk5lgn8oo6ahm6z65a3bPwO5NNEOyMpdbYPTrYDqBAsvz%2FbWQd339h5pTEaPSzzu5dyQ4x50p4aHk6UasVIwyqYOd0CzJwEeuoRaHZ4ard317ZktqLaNTBjxVEL9prvd7thowkh2p8Osm3Enub6LpodPuk02s1e14m5S74dcadUwptq5vQY6pgESKhPb2QyI%2B31G0For7FZSWD8n9T4oM2h5rxM7tuZipE6bAOD806MglTvbUBNOwlKJAAqln5jHazAveEhRCXXk3L1ZjI9Qcx6WSG2QnBnMrIrom%2FqsasPuQul3Uz1%2FzSjHjwoOaTMVrWw6y4MbXLXILdjbnkF6i5pluMlBM1jjA7DPGc3Chx8Fl95DbXlyxbk7co%2FDdqw330pO%2F5kwg2EEuMz6Iwi6&X-Amz-Signature=824c6b2210cc9a9b379422e0b594a224b2e372a149a4d60301fc58c98dcc84c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYPV3KYZ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUlYD3Z0R1TxPTo447jr%2FqrgEnbk3dX%2BTv9vHO0W02yAiAmUxLsgCFU%2FAVLbHsTkJsM%2BCJ7%2BNWGYvltZ%2Br%2BsIRCBir%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMgFhZJDhR%2FC6ebgUWKtwDz8dfLRZyP4R3i7t7R1Zyb%2FXzUCoLwjkFZpvRLeqa8tBFM4DMP3%2BxhMcCNofr6nenK97qjb464%2BBVD1LfFFh%2B1npFK3%2BCn%2FT%2BHmFLp0htz7wzIabapkZR4RmZI5K0svnMzknKJjB88bMbiVE4leGAYlIhkEkj8fvSaHstWvSU26pykokFA7YCb%2FHRMFlbJC%2BXM1otARDwCIm%2Bv8ck5OnHwKmvGA7pxuprGg543iZFNYdKFfZsDJ4oNvpOcaCSu2tGof5OAB44B5xTo%2FUvham8rttdoytiYmZZEDRQ1LWohOZWY%2Feq7HiDnAgB%2FeEs8A3Dn1CQs0wmz0AxXC5cLWzmKcNqsfm2xNwj2k3KS6PqKn8v4k0mJTFxjqyLmn3sQ7lCHSG2D2GZWGgc8u8b52ERm6rqGB6Nc7Krn8qfIGx1J%2Ft5XEJPGogDEd3kyGi5jgWdTp1mK04hT2drUI%2FZvk5lgn8oo6ahm6z65a3bPwO5NNEOyMpdbYPTrYDqBAsvz%2FbWQd339h5pTEaPSzzu5dyQ4x50p4aHk6UasVIwyqYOd0CzJwEeuoRaHZ4ard317ZktqLaNTBjxVEL9prvd7thowkh2p8Osm3Enub6LpodPuk02s1e14m5S74dcadUwptq5vQY6pgESKhPb2QyI%2B31G0For7FZSWD8n9T4oM2h5rxM7tuZipE6bAOD806MglTvbUBNOwlKJAAqln5jHazAveEhRCXXk3L1ZjI9Qcx6WSG2QnBnMrIrom%2FqsasPuQul3Uz1%2FzSjHjwoOaTMVrWw6y4MbXLXILdjbnkF6i5pluMlBM1jjA7DPGc3Chx8Fl95DbXlyxbk7co%2FDdqw330pO%2F5kwg2EEuMz6Iwi6&X-Amz-Signature=13fd1f3ff17d64ad2362b5eb65e56cb116d8567680922925509855a953a628f7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYPV3KYZ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUlYD3Z0R1TxPTo447jr%2FqrgEnbk3dX%2BTv9vHO0W02yAiAmUxLsgCFU%2FAVLbHsTkJsM%2BCJ7%2BNWGYvltZ%2Br%2BsIRCBir%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMgFhZJDhR%2FC6ebgUWKtwDz8dfLRZyP4R3i7t7R1Zyb%2FXzUCoLwjkFZpvRLeqa8tBFM4DMP3%2BxhMcCNofr6nenK97qjb464%2BBVD1LfFFh%2B1npFK3%2BCn%2FT%2BHmFLp0htz7wzIabapkZR4RmZI5K0svnMzknKJjB88bMbiVE4leGAYlIhkEkj8fvSaHstWvSU26pykokFA7YCb%2FHRMFlbJC%2BXM1otARDwCIm%2Bv8ck5OnHwKmvGA7pxuprGg543iZFNYdKFfZsDJ4oNvpOcaCSu2tGof5OAB44B5xTo%2FUvham8rttdoytiYmZZEDRQ1LWohOZWY%2Feq7HiDnAgB%2FeEs8A3Dn1CQs0wmz0AxXC5cLWzmKcNqsfm2xNwj2k3KS6PqKn8v4k0mJTFxjqyLmn3sQ7lCHSG2D2GZWGgc8u8b52ERm6rqGB6Nc7Krn8qfIGx1J%2Ft5XEJPGogDEd3kyGi5jgWdTp1mK04hT2drUI%2FZvk5lgn8oo6ahm6z65a3bPwO5NNEOyMpdbYPTrYDqBAsvz%2FbWQd339h5pTEaPSzzu5dyQ4x50p4aHk6UasVIwyqYOd0CzJwEeuoRaHZ4ard317ZktqLaNTBjxVEL9prvd7thowkh2p8Osm3Enub6LpodPuk02s1e14m5S74dcadUwptq5vQY6pgESKhPb2QyI%2B31G0For7FZSWD8n9T4oM2h5rxM7tuZipE6bAOD806MglTvbUBNOwlKJAAqln5jHazAveEhRCXXk3L1ZjI9Qcx6WSG2QnBnMrIrom%2FqsasPuQul3Uz1%2FzSjHjwoOaTMVrWw6y4MbXLXILdjbnkF6i5pluMlBM1jjA7DPGc3Chx8Fl95DbXlyxbk7co%2FDdqw330pO%2F5kwg2EEuMz6Iwi6&X-Amz-Signature=29b6b3e0c68f783d3e796af988a928353a566cc7e2becc1d4da1b5e6e6386128&X-Amz-SignedHeaders=host&x-id=GetObject)
