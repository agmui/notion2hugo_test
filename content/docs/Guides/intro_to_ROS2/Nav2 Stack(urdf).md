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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOM4JT56%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiR3OBmCAL0u8kz%2FFhy7DSZNtGkLbKmD2vJA6XshG5MgIhAOsj7Na%2BbIRnrBmN581QpEbmbTjGdfeLdHZqfjcWBPFEKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwF15vCvlOw4zsJN9Yq3AMa8w%2FpZeBNdHc4Psl3zsd01WXz4sik09mCzvfpYFzdSSx9nIk7VCR2n7an9u6BI%2BGdAFwRpH57lZMu0tOD%2FPSA4nZPIxzGFRjBBe57AJKUp2nqVSKuKRvtzyDNxGhrWA6JilMF%2BtERn%2FgzNuEtnrLYHN3Nzb%2FWDYCwH7VRIDlcJnK8ARqhJbISLyRpKROkQ7lBOpqMAivbLpCjkepazxt92fHRFLV4yOum0DQIiWDK07hODvXpGYRIC1PIB1DKEM4GaQdfGVp9sEtB2%2FT1V6XS8JftNBt3%2FZYI8FoSPZpNlk%2FSTlBU%2FKMvFkeWuKPO4gYDype9RX8dmO515504IeN0TFyzeXzGqPJBlAlkwpvZ6yKnjXKbWpXEh62sh%2Fq%2Fyb5PPgbrsu%2BFSOAyzsDDwMNye6olciY6UDhnen9Mkr5jT4zB1cAyP2vUDX5UX65o9UqSbTbukGbZrlczCysB5bxujtJW7N6dMA2VjYU5CIV1LEXf%2BF2mXDhKESmWLT5qbDJm7wqbTReBkhxrKqaCq7fLcTfOOKqvo8XSzJpn9P%2B%2FgGK9wP2gi1vyhq9C%2FsnbytmK%2FHJ4nSvnTf3dK0cq0qIgKOxRsmnQJOxQ8ncCfA0NAQtdzZCwsquIKOTFUDCWzYbDBjqkAbQ95WCBN9Ry4IFx2PiLjnbzBe%2BCplwAYhOF43M8MPtu0c%2Bv63DDEyk4iyb%2FRLpWuJRJkqLBziZsWcL3t75JrDi6zdLU7RACC2tKkWUEBgyBVjZd3xrbMqL9y82nHXpnoroDboNMp2VXX3QKCURscKTdPQltBH8UeoEauQDfNBU4ryQg2y6Crs%2FCUGXWLioTzeKBDNG9WoAyFYhfXcufk7coBKVM&X-Amz-Signature=aa05ca987a599b86db2db1ef43b9c5a8a270d2d62622cfdc445a6f3d22a58c5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOM4JT56%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiR3OBmCAL0u8kz%2FFhy7DSZNtGkLbKmD2vJA6XshG5MgIhAOsj7Na%2BbIRnrBmN581QpEbmbTjGdfeLdHZqfjcWBPFEKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwF15vCvlOw4zsJN9Yq3AMa8w%2FpZeBNdHc4Psl3zsd01WXz4sik09mCzvfpYFzdSSx9nIk7VCR2n7an9u6BI%2BGdAFwRpH57lZMu0tOD%2FPSA4nZPIxzGFRjBBe57AJKUp2nqVSKuKRvtzyDNxGhrWA6JilMF%2BtERn%2FgzNuEtnrLYHN3Nzb%2FWDYCwH7VRIDlcJnK8ARqhJbISLyRpKROkQ7lBOpqMAivbLpCjkepazxt92fHRFLV4yOum0DQIiWDK07hODvXpGYRIC1PIB1DKEM4GaQdfGVp9sEtB2%2FT1V6XS8JftNBt3%2FZYI8FoSPZpNlk%2FSTlBU%2FKMvFkeWuKPO4gYDype9RX8dmO515504IeN0TFyzeXzGqPJBlAlkwpvZ6yKnjXKbWpXEh62sh%2Fq%2Fyb5PPgbrsu%2BFSOAyzsDDwMNye6olciY6UDhnen9Mkr5jT4zB1cAyP2vUDX5UX65o9UqSbTbukGbZrlczCysB5bxujtJW7N6dMA2VjYU5CIV1LEXf%2BF2mXDhKESmWLT5qbDJm7wqbTReBkhxrKqaCq7fLcTfOOKqvo8XSzJpn9P%2B%2FgGK9wP2gi1vyhq9C%2FsnbytmK%2FHJ4nSvnTf3dK0cq0qIgKOxRsmnQJOxQ8ncCfA0NAQtdzZCwsquIKOTFUDCWzYbDBjqkAbQ95WCBN9Ry4IFx2PiLjnbzBe%2BCplwAYhOF43M8MPtu0c%2Bv63DDEyk4iyb%2FRLpWuJRJkqLBziZsWcL3t75JrDi6zdLU7RACC2tKkWUEBgyBVjZd3xrbMqL9y82nHXpnoroDboNMp2VXX3QKCURscKTdPQltBH8UeoEauQDfNBU4ryQg2y6Crs%2FCUGXWLioTzeKBDNG9WoAyFYhfXcufk7coBKVM&X-Amz-Signature=1bdabee7ac86cf89a0a6234a43e06d70e7eb039bc59cadb530d04354e418eff2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOM4JT56%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiR3OBmCAL0u8kz%2FFhy7DSZNtGkLbKmD2vJA6XshG5MgIhAOsj7Na%2BbIRnrBmN581QpEbmbTjGdfeLdHZqfjcWBPFEKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwF15vCvlOw4zsJN9Yq3AMa8w%2FpZeBNdHc4Psl3zsd01WXz4sik09mCzvfpYFzdSSx9nIk7VCR2n7an9u6BI%2BGdAFwRpH57lZMu0tOD%2FPSA4nZPIxzGFRjBBe57AJKUp2nqVSKuKRvtzyDNxGhrWA6JilMF%2BtERn%2FgzNuEtnrLYHN3Nzb%2FWDYCwH7VRIDlcJnK8ARqhJbISLyRpKROkQ7lBOpqMAivbLpCjkepazxt92fHRFLV4yOum0DQIiWDK07hODvXpGYRIC1PIB1DKEM4GaQdfGVp9sEtB2%2FT1V6XS8JftNBt3%2FZYI8FoSPZpNlk%2FSTlBU%2FKMvFkeWuKPO4gYDype9RX8dmO515504IeN0TFyzeXzGqPJBlAlkwpvZ6yKnjXKbWpXEh62sh%2Fq%2Fyb5PPgbrsu%2BFSOAyzsDDwMNye6olciY6UDhnen9Mkr5jT4zB1cAyP2vUDX5UX65o9UqSbTbukGbZrlczCysB5bxujtJW7N6dMA2VjYU5CIV1LEXf%2BF2mXDhKESmWLT5qbDJm7wqbTReBkhxrKqaCq7fLcTfOOKqvo8XSzJpn9P%2B%2FgGK9wP2gi1vyhq9C%2FsnbytmK%2FHJ4nSvnTf3dK0cq0qIgKOxRsmnQJOxQ8ncCfA0NAQtdzZCwsquIKOTFUDCWzYbDBjqkAbQ95WCBN9Ry4IFx2PiLjnbzBe%2BCplwAYhOF43M8MPtu0c%2Bv63DDEyk4iyb%2FRLpWuJRJkqLBziZsWcL3t75JrDi6zdLU7RACC2tKkWUEBgyBVjZd3xrbMqL9y82nHXpnoroDboNMp2VXX3QKCURscKTdPQltBH8UeoEauQDfNBU4ryQg2y6Crs%2FCUGXWLioTzeKBDNG9WoAyFYhfXcufk7coBKVM&X-Amz-Signature=4114336260bb1c171bd58af2761c9ab28d67118496b85d11691a3ecda1e90e38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOM4JT56%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiR3OBmCAL0u8kz%2FFhy7DSZNtGkLbKmD2vJA6XshG5MgIhAOsj7Na%2BbIRnrBmN581QpEbmbTjGdfeLdHZqfjcWBPFEKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwF15vCvlOw4zsJN9Yq3AMa8w%2FpZeBNdHc4Psl3zsd01WXz4sik09mCzvfpYFzdSSx9nIk7VCR2n7an9u6BI%2BGdAFwRpH57lZMu0tOD%2FPSA4nZPIxzGFRjBBe57AJKUp2nqVSKuKRvtzyDNxGhrWA6JilMF%2BtERn%2FgzNuEtnrLYHN3Nzb%2FWDYCwH7VRIDlcJnK8ARqhJbISLyRpKROkQ7lBOpqMAivbLpCjkepazxt92fHRFLV4yOum0DQIiWDK07hODvXpGYRIC1PIB1DKEM4GaQdfGVp9sEtB2%2FT1V6XS8JftNBt3%2FZYI8FoSPZpNlk%2FSTlBU%2FKMvFkeWuKPO4gYDype9RX8dmO515504IeN0TFyzeXzGqPJBlAlkwpvZ6yKnjXKbWpXEh62sh%2Fq%2Fyb5PPgbrsu%2BFSOAyzsDDwMNye6olciY6UDhnen9Mkr5jT4zB1cAyP2vUDX5UX65o9UqSbTbukGbZrlczCysB5bxujtJW7N6dMA2VjYU5CIV1LEXf%2BF2mXDhKESmWLT5qbDJm7wqbTReBkhxrKqaCq7fLcTfOOKqvo8XSzJpn9P%2B%2FgGK9wP2gi1vyhq9C%2FsnbytmK%2FHJ4nSvnTf3dK0cq0qIgKOxRsmnQJOxQ8ncCfA0NAQtdzZCwsquIKOTFUDCWzYbDBjqkAbQ95WCBN9Ry4IFx2PiLjnbzBe%2BCplwAYhOF43M8MPtu0c%2Bv63DDEyk4iyb%2FRLpWuJRJkqLBziZsWcL3t75JrDi6zdLU7RACC2tKkWUEBgyBVjZd3xrbMqL9y82nHXpnoroDboNMp2VXX3QKCURscKTdPQltBH8UeoEauQDfNBU4ryQg2y6Crs%2FCUGXWLioTzeKBDNG9WoAyFYhfXcufk7coBKVM&X-Amz-Signature=8cda409222d58f2602de6a7a1cc2be1b42a760314dbf7ebdf73173c8b39fdc4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOM4JT56%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiR3OBmCAL0u8kz%2FFhy7DSZNtGkLbKmD2vJA6XshG5MgIhAOsj7Na%2BbIRnrBmN581QpEbmbTjGdfeLdHZqfjcWBPFEKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwF15vCvlOw4zsJN9Yq3AMa8w%2FpZeBNdHc4Psl3zsd01WXz4sik09mCzvfpYFzdSSx9nIk7VCR2n7an9u6BI%2BGdAFwRpH57lZMu0tOD%2FPSA4nZPIxzGFRjBBe57AJKUp2nqVSKuKRvtzyDNxGhrWA6JilMF%2BtERn%2FgzNuEtnrLYHN3Nzb%2FWDYCwH7VRIDlcJnK8ARqhJbISLyRpKROkQ7lBOpqMAivbLpCjkepazxt92fHRFLV4yOum0DQIiWDK07hODvXpGYRIC1PIB1DKEM4GaQdfGVp9sEtB2%2FT1V6XS8JftNBt3%2FZYI8FoSPZpNlk%2FSTlBU%2FKMvFkeWuKPO4gYDype9RX8dmO515504IeN0TFyzeXzGqPJBlAlkwpvZ6yKnjXKbWpXEh62sh%2Fq%2Fyb5PPgbrsu%2BFSOAyzsDDwMNye6olciY6UDhnen9Mkr5jT4zB1cAyP2vUDX5UX65o9UqSbTbukGbZrlczCysB5bxujtJW7N6dMA2VjYU5CIV1LEXf%2BF2mXDhKESmWLT5qbDJm7wqbTReBkhxrKqaCq7fLcTfOOKqvo8XSzJpn9P%2B%2FgGK9wP2gi1vyhq9C%2FsnbytmK%2FHJ4nSvnTf3dK0cq0qIgKOxRsmnQJOxQ8ncCfA0NAQtdzZCwsquIKOTFUDCWzYbDBjqkAbQ95WCBN9Ry4IFx2PiLjnbzBe%2BCplwAYhOF43M8MPtu0c%2Bv63DDEyk4iyb%2FRLpWuJRJkqLBziZsWcL3t75JrDi6zdLU7RACC2tKkWUEBgyBVjZd3xrbMqL9y82nHXpnoroDboNMp2VXX3QKCURscKTdPQltBH8UeoEauQDfNBU4ryQg2y6Crs%2FCUGXWLioTzeKBDNG9WoAyFYhfXcufk7coBKVM&X-Amz-Signature=e1317806ce8aea3bcd2fccc9999bcd3eeb0b6b7d76a575f1021fc753f613ca65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOM4JT56%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiR3OBmCAL0u8kz%2FFhy7DSZNtGkLbKmD2vJA6XshG5MgIhAOsj7Na%2BbIRnrBmN581QpEbmbTjGdfeLdHZqfjcWBPFEKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwF15vCvlOw4zsJN9Yq3AMa8w%2FpZeBNdHc4Psl3zsd01WXz4sik09mCzvfpYFzdSSx9nIk7VCR2n7an9u6BI%2BGdAFwRpH57lZMu0tOD%2FPSA4nZPIxzGFRjBBe57AJKUp2nqVSKuKRvtzyDNxGhrWA6JilMF%2BtERn%2FgzNuEtnrLYHN3Nzb%2FWDYCwH7VRIDlcJnK8ARqhJbISLyRpKROkQ7lBOpqMAivbLpCjkepazxt92fHRFLV4yOum0DQIiWDK07hODvXpGYRIC1PIB1DKEM4GaQdfGVp9sEtB2%2FT1V6XS8JftNBt3%2FZYI8FoSPZpNlk%2FSTlBU%2FKMvFkeWuKPO4gYDype9RX8dmO515504IeN0TFyzeXzGqPJBlAlkwpvZ6yKnjXKbWpXEh62sh%2Fq%2Fyb5PPgbrsu%2BFSOAyzsDDwMNye6olciY6UDhnen9Mkr5jT4zB1cAyP2vUDX5UX65o9UqSbTbukGbZrlczCysB5bxujtJW7N6dMA2VjYU5CIV1LEXf%2BF2mXDhKESmWLT5qbDJm7wqbTReBkhxrKqaCq7fLcTfOOKqvo8XSzJpn9P%2B%2FgGK9wP2gi1vyhq9C%2FsnbytmK%2FHJ4nSvnTf3dK0cq0qIgKOxRsmnQJOxQ8ncCfA0NAQtdzZCwsquIKOTFUDCWzYbDBjqkAbQ95WCBN9Ry4IFx2PiLjnbzBe%2BCplwAYhOF43M8MPtu0c%2Bv63DDEyk4iyb%2FRLpWuJRJkqLBziZsWcL3t75JrDi6zdLU7RACC2tKkWUEBgyBVjZd3xrbMqL9y82nHXpnoroDboNMp2VXX3QKCURscKTdPQltBH8UeoEauQDfNBU4ryQg2y6Crs%2FCUGXWLioTzeKBDNG9WoAyFYhfXcufk7coBKVM&X-Amz-Signature=6a89c779b5783875b344fdc986bc075bb3445b53a1dc77552b21d4b5d5f591c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
