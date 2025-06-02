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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466234MOOWN%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIENsNEoPtYYYZpiZBPBSOuEBuILofNu84xQ5L%2FPJeycpAiBTfr3uH5hxjTqe9%2BQvwIBXrRq6ce8882g%2FaebiGXiBqCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM20bKZ5VGjF6irqbcKtwDizbV0s0DQmqBy6kwLghwHi3AK8Gliq%2B0%2Bqu2IMGQw7XWPkOwZDmnj9%2FhaYk81WmBFrsXKfPz4ein34WU4a7fWlgNweLNWtFiJsWwJRXcFXrAqPmb7M%2F9WABV%2B8NRm%2FZChMLh6s%2BdZH7Bu1I90d3M2M7hypR60A1PC%2FtFjXe3RgjiTUxfGzbs0T18Gh48hLZYU9ZWZcjpPw0Ym99JgIaUxut2f4SB3Ck7mqIn2qAews5D%2FMeFHxPZj1HfyoxXjROu2iPN9kxNiTZ4z1sk%2FNJtydPk%2Fz05N1k9DuLEg8UUThXSy8BYxicKC46MeoDsDzel88Opo%2BZR%2FTml1aCLABA%2Buei3P9WUqC1JvoRjtGZb%2FK2eJnZBL8qt4UWwz2wWTzVqG35Oy31CRVMmCwERaCrGp33%2B11x%2B9IJQDcH%2Bpb1fTb%2BJPjXvu9i1smF%2FVlHZYDjn13H4Oiy44eqZvYNoc%2FxLiRHQ12Es1GpBDbISOKqochg0geiAKWMRVS9XTnbayox%2BqIW33Y7WQrpL8PTlRLyfV%2FhEtMfNGKN5AgWbFcHxPhR%2BHp4i4SLg7pL6HJ0GZ28CJ%2Fp5Pb4ipum6kYzEShTHYuQZ%2Bf1miRzNWSih%2BvVzP1onVTYWxEG%2Bo%2FfkTfcwlLX2wQY6pgFNWZtUnX6YSz9XL6MeQjUCadkT1KONdzTWq5izE7a23eopaI3e1L7eAmOJNktB9EabMx4aqo6l%2FGMq7C4p3vLHjve1qvANyDN7IeCsp9I1Hfa2usZgTN1zds7ZRjpZqv8n%2BaSnZVvyREUKZmKwIhtYniwSBydO43axqWjDRdAxfB8f4Jqk5MWhC%2BA5LtVICXENJHWzSujQraCY%2FTlHz0HiOd1t2D7R&X-Amz-Signature=4162268462486dfcedc5b00bf96b188b037531e2bf167beea065e134a6d78a90&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466234MOOWN%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIENsNEoPtYYYZpiZBPBSOuEBuILofNu84xQ5L%2FPJeycpAiBTfr3uH5hxjTqe9%2BQvwIBXrRq6ce8882g%2FaebiGXiBqCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM20bKZ5VGjF6irqbcKtwDizbV0s0DQmqBy6kwLghwHi3AK8Gliq%2B0%2Bqu2IMGQw7XWPkOwZDmnj9%2FhaYk81WmBFrsXKfPz4ein34WU4a7fWlgNweLNWtFiJsWwJRXcFXrAqPmb7M%2F9WABV%2B8NRm%2FZChMLh6s%2BdZH7Bu1I90d3M2M7hypR60A1PC%2FtFjXe3RgjiTUxfGzbs0T18Gh48hLZYU9ZWZcjpPw0Ym99JgIaUxut2f4SB3Ck7mqIn2qAews5D%2FMeFHxPZj1HfyoxXjROu2iPN9kxNiTZ4z1sk%2FNJtydPk%2Fz05N1k9DuLEg8UUThXSy8BYxicKC46MeoDsDzel88Opo%2BZR%2FTml1aCLABA%2Buei3P9WUqC1JvoRjtGZb%2FK2eJnZBL8qt4UWwz2wWTzVqG35Oy31CRVMmCwERaCrGp33%2B11x%2B9IJQDcH%2Bpb1fTb%2BJPjXvu9i1smF%2FVlHZYDjn13H4Oiy44eqZvYNoc%2FxLiRHQ12Es1GpBDbISOKqochg0geiAKWMRVS9XTnbayox%2BqIW33Y7WQrpL8PTlRLyfV%2FhEtMfNGKN5AgWbFcHxPhR%2BHp4i4SLg7pL6HJ0GZ28CJ%2Fp5Pb4ipum6kYzEShTHYuQZ%2Bf1miRzNWSih%2BvVzP1onVTYWxEG%2Bo%2FfkTfcwlLX2wQY6pgFNWZtUnX6YSz9XL6MeQjUCadkT1KONdzTWq5izE7a23eopaI3e1L7eAmOJNktB9EabMx4aqo6l%2FGMq7C4p3vLHjve1qvANyDN7IeCsp9I1Hfa2usZgTN1zds7ZRjpZqv8n%2BaSnZVvyREUKZmKwIhtYniwSBydO43axqWjDRdAxfB8f4Jqk5MWhC%2BA5LtVICXENJHWzSujQraCY%2FTlHz0HiOd1t2D7R&X-Amz-Signature=1229524d0077ca58ca617b31e3c5304a46d32468ac66b072e8da9a5cde89f7b1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466234MOOWN%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIENsNEoPtYYYZpiZBPBSOuEBuILofNu84xQ5L%2FPJeycpAiBTfr3uH5hxjTqe9%2BQvwIBXrRq6ce8882g%2FaebiGXiBqCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM20bKZ5VGjF6irqbcKtwDizbV0s0DQmqBy6kwLghwHi3AK8Gliq%2B0%2Bqu2IMGQw7XWPkOwZDmnj9%2FhaYk81WmBFrsXKfPz4ein34WU4a7fWlgNweLNWtFiJsWwJRXcFXrAqPmb7M%2F9WABV%2B8NRm%2FZChMLh6s%2BdZH7Bu1I90d3M2M7hypR60A1PC%2FtFjXe3RgjiTUxfGzbs0T18Gh48hLZYU9ZWZcjpPw0Ym99JgIaUxut2f4SB3Ck7mqIn2qAews5D%2FMeFHxPZj1HfyoxXjROu2iPN9kxNiTZ4z1sk%2FNJtydPk%2Fz05N1k9DuLEg8UUThXSy8BYxicKC46MeoDsDzel88Opo%2BZR%2FTml1aCLABA%2Buei3P9WUqC1JvoRjtGZb%2FK2eJnZBL8qt4UWwz2wWTzVqG35Oy31CRVMmCwERaCrGp33%2B11x%2B9IJQDcH%2Bpb1fTb%2BJPjXvu9i1smF%2FVlHZYDjn13H4Oiy44eqZvYNoc%2FxLiRHQ12Es1GpBDbISOKqochg0geiAKWMRVS9XTnbayox%2BqIW33Y7WQrpL8PTlRLyfV%2FhEtMfNGKN5AgWbFcHxPhR%2BHp4i4SLg7pL6HJ0GZ28CJ%2Fp5Pb4ipum6kYzEShTHYuQZ%2Bf1miRzNWSih%2BvVzP1onVTYWxEG%2Bo%2FfkTfcwlLX2wQY6pgFNWZtUnX6YSz9XL6MeQjUCadkT1KONdzTWq5izE7a23eopaI3e1L7eAmOJNktB9EabMx4aqo6l%2FGMq7C4p3vLHjve1qvANyDN7IeCsp9I1Hfa2usZgTN1zds7ZRjpZqv8n%2BaSnZVvyREUKZmKwIhtYniwSBydO43axqWjDRdAxfB8f4Jqk5MWhC%2BA5LtVICXENJHWzSujQraCY%2FTlHz0HiOd1t2D7R&X-Amz-Signature=9cccf23dad32ff29899cc8511d4d312c5aff571347a066f398592ff99de8898e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466234MOOWN%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIENsNEoPtYYYZpiZBPBSOuEBuILofNu84xQ5L%2FPJeycpAiBTfr3uH5hxjTqe9%2BQvwIBXrRq6ce8882g%2FaebiGXiBqCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM20bKZ5VGjF6irqbcKtwDizbV0s0DQmqBy6kwLghwHi3AK8Gliq%2B0%2Bqu2IMGQw7XWPkOwZDmnj9%2FhaYk81WmBFrsXKfPz4ein34WU4a7fWlgNweLNWtFiJsWwJRXcFXrAqPmb7M%2F9WABV%2B8NRm%2FZChMLh6s%2BdZH7Bu1I90d3M2M7hypR60A1PC%2FtFjXe3RgjiTUxfGzbs0T18Gh48hLZYU9ZWZcjpPw0Ym99JgIaUxut2f4SB3Ck7mqIn2qAews5D%2FMeFHxPZj1HfyoxXjROu2iPN9kxNiTZ4z1sk%2FNJtydPk%2Fz05N1k9DuLEg8UUThXSy8BYxicKC46MeoDsDzel88Opo%2BZR%2FTml1aCLABA%2Buei3P9WUqC1JvoRjtGZb%2FK2eJnZBL8qt4UWwz2wWTzVqG35Oy31CRVMmCwERaCrGp33%2B11x%2B9IJQDcH%2Bpb1fTb%2BJPjXvu9i1smF%2FVlHZYDjn13H4Oiy44eqZvYNoc%2FxLiRHQ12Es1GpBDbISOKqochg0geiAKWMRVS9XTnbayox%2BqIW33Y7WQrpL8PTlRLyfV%2FhEtMfNGKN5AgWbFcHxPhR%2BHp4i4SLg7pL6HJ0GZ28CJ%2Fp5Pb4ipum6kYzEShTHYuQZ%2Bf1miRzNWSih%2BvVzP1onVTYWxEG%2Bo%2FfkTfcwlLX2wQY6pgFNWZtUnX6YSz9XL6MeQjUCadkT1KONdzTWq5izE7a23eopaI3e1L7eAmOJNktB9EabMx4aqo6l%2FGMq7C4p3vLHjve1qvANyDN7IeCsp9I1Hfa2usZgTN1zds7ZRjpZqv8n%2BaSnZVvyREUKZmKwIhtYniwSBydO43axqWjDRdAxfB8f4Jqk5MWhC%2BA5LtVICXENJHWzSujQraCY%2FTlHz0HiOd1t2D7R&X-Amz-Signature=40bb7d41939ea437efad7cdd4c4b4fa6ae83a970f677d6a034442fb9f3de8dbe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466234MOOWN%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIENsNEoPtYYYZpiZBPBSOuEBuILofNu84xQ5L%2FPJeycpAiBTfr3uH5hxjTqe9%2BQvwIBXrRq6ce8882g%2FaebiGXiBqCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM20bKZ5VGjF6irqbcKtwDizbV0s0DQmqBy6kwLghwHi3AK8Gliq%2B0%2Bqu2IMGQw7XWPkOwZDmnj9%2FhaYk81WmBFrsXKfPz4ein34WU4a7fWlgNweLNWtFiJsWwJRXcFXrAqPmb7M%2F9WABV%2B8NRm%2FZChMLh6s%2BdZH7Bu1I90d3M2M7hypR60A1PC%2FtFjXe3RgjiTUxfGzbs0T18Gh48hLZYU9ZWZcjpPw0Ym99JgIaUxut2f4SB3Ck7mqIn2qAews5D%2FMeFHxPZj1HfyoxXjROu2iPN9kxNiTZ4z1sk%2FNJtydPk%2Fz05N1k9DuLEg8UUThXSy8BYxicKC46MeoDsDzel88Opo%2BZR%2FTml1aCLABA%2Buei3P9WUqC1JvoRjtGZb%2FK2eJnZBL8qt4UWwz2wWTzVqG35Oy31CRVMmCwERaCrGp33%2B11x%2B9IJQDcH%2Bpb1fTb%2BJPjXvu9i1smF%2FVlHZYDjn13H4Oiy44eqZvYNoc%2FxLiRHQ12Es1GpBDbISOKqochg0geiAKWMRVS9XTnbayox%2BqIW33Y7WQrpL8PTlRLyfV%2FhEtMfNGKN5AgWbFcHxPhR%2BHp4i4SLg7pL6HJ0GZ28CJ%2Fp5Pb4ipum6kYzEShTHYuQZ%2Bf1miRzNWSih%2BvVzP1onVTYWxEG%2Bo%2FfkTfcwlLX2wQY6pgFNWZtUnX6YSz9XL6MeQjUCadkT1KONdzTWq5izE7a23eopaI3e1L7eAmOJNktB9EabMx4aqo6l%2FGMq7C4p3vLHjve1qvANyDN7IeCsp9I1Hfa2usZgTN1zds7ZRjpZqv8n%2BaSnZVvyREUKZmKwIhtYniwSBydO43axqWjDRdAxfB8f4Jqk5MWhC%2BA5LtVICXENJHWzSujQraCY%2FTlHz0HiOd1t2D7R&X-Amz-Signature=751a88d25ec00cb94e9c240f58c251c57c1c12e4ea5111a3beafa76cff6a0ec2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466234MOOWN%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIENsNEoPtYYYZpiZBPBSOuEBuILofNu84xQ5L%2FPJeycpAiBTfr3uH5hxjTqe9%2BQvwIBXrRq6ce8882g%2FaebiGXiBqCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM20bKZ5VGjF6irqbcKtwDizbV0s0DQmqBy6kwLghwHi3AK8Gliq%2B0%2Bqu2IMGQw7XWPkOwZDmnj9%2FhaYk81WmBFrsXKfPz4ein34WU4a7fWlgNweLNWtFiJsWwJRXcFXrAqPmb7M%2F9WABV%2B8NRm%2FZChMLh6s%2BdZH7Bu1I90d3M2M7hypR60A1PC%2FtFjXe3RgjiTUxfGzbs0T18Gh48hLZYU9ZWZcjpPw0Ym99JgIaUxut2f4SB3Ck7mqIn2qAews5D%2FMeFHxPZj1HfyoxXjROu2iPN9kxNiTZ4z1sk%2FNJtydPk%2Fz05N1k9DuLEg8UUThXSy8BYxicKC46MeoDsDzel88Opo%2BZR%2FTml1aCLABA%2Buei3P9WUqC1JvoRjtGZb%2FK2eJnZBL8qt4UWwz2wWTzVqG35Oy31CRVMmCwERaCrGp33%2B11x%2B9IJQDcH%2Bpb1fTb%2BJPjXvu9i1smF%2FVlHZYDjn13H4Oiy44eqZvYNoc%2FxLiRHQ12Es1GpBDbISOKqochg0geiAKWMRVS9XTnbayox%2BqIW33Y7WQrpL8PTlRLyfV%2FhEtMfNGKN5AgWbFcHxPhR%2BHp4i4SLg7pL6HJ0GZ28CJ%2Fp5Pb4ipum6kYzEShTHYuQZ%2Bf1miRzNWSih%2BvVzP1onVTYWxEG%2Bo%2FfkTfcwlLX2wQY6pgFNWZtUnX6YSz9XL6MeQjUCadkT1KONdzTWq5izE7a23eopaI3e1L7eAmOJNktB9EabMx4aqo6l%2FGMq7C4p3vLHjve1qvANyDN7IeCsp9I1Hfa2usZgTN1zds7ZRjpZqv8n%2BaSnZVvyREUKZmKwIhtYniwSBydO43axqWjDRdAxfB8f4Jqk5MWhC%2BA5LtVICXENJHWzSujQraCY%2FTlHz0HiOd1t2D7R&X-Amz-Signature=45a5b72b5d679020680569cd5df17aa66b69d1d56c32d7d40a50df1c71999a67&X-Amz-SignedHeaders=host&x-id=GetObject)
