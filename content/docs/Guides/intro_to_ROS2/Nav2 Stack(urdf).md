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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQNILODE%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIGfBjDid3NryrzfoAyW1J45BFebyvJ3G2Tevut7IeGZYAiBc%2B89XwRR%2FRf7b1lZ16TfsxogZX%2BqVq%2BIaAPlp62JCSiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BkK69gJ2pSqbToAxKtwD4F8hm5mWoO3%2FIJHV2XnuUo2zy1FudgqgU%2BQMjQhR4%2BehGblrwhjWKpWc3oDEFhDr%2FkWLmB6XUb3%2B72er%2FCgKACIFdL75VF6DNVxyB5WaE%2BwDJDEdKbbJVcMjUE1G2dPmHG8E3xrnB6vFwOfm1dNqv6BID5pOZ6T1v9d%2B6SMeAECIDSMYSwPYGjY753GwKNhZ1CV8guJ8fTYFcyZE6S7ltu1J5rXFfrfWuRaZW9P%2BwaW5RqiKSOtDxSzNuOvCdGsGJW2c6ObIvJyb%2FFxlSlRwsc2i0qPCWOFSXxc2pRFt%2BllTxavbhUgdX08fmkse%2FsfaXm%2FVX3juiBtKwT2hLHKVY%2B4UAU49wGiKqKDDV2brhrljH9ptqDtksYTtoqxGhoL9GDvpp5HAU6puoQ5dDHGzWLEXZQf73JmXe1bb0sWHxglCa%2BCRCnRM0F2nfXFcshvQMybUMHZ756%2FpV9F8kE1Clly%2Fq93RbPrly6PfBZcHKaHMT30SDbQRW2Hc32jredvXcQ8BN9LeKd7nDXcBHAEVfP5pp6TZ77ikkBrNJrz6BHekKjYWN8cAhSsGoudflu%2Bwc0aVyx8hBVeSp1RE67EGUEzkNCbMZc7FlybyKyczsCdALhxFXx4cZkLijQYw%2Fo3tvwY6pgGkCNzKpBsE7Em0M2hohSUxd88skJWl4C8ci7RDtziL7PbVcft%2FIXQFwwunt7mFxDP7NWYOt5nWR1GpvY9OAlWzC1PePCa6XT8ljoJABO%2FLSNpopGtqEy8GVSA%2B87uaG9z2MP7d2UemJB1bD7x2aMsG8QyVI%2BtmbJ5bpjccQeFVa7CWvb%2BwZHMoeixsCRQYMWYnamDKc6GFeTaIjk2azp2EqLHbByaH&X-Amz-Signature=e0df493fd4eef40061e00a10146895ee3b127da965f04cef4f31f7e873bccbc6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQNILODE%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIGfBjDid3NryrzfoAyW1J45BFebyvJ3G2Tevut7IeGZYAiBc%2B89XwRR%2FRf7b1lZ16TfsxogZX%2BqVq%2BIaAPlp62JCSiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BkK69gJ2pSqbToAxKtwD4F8hm5mWoO3%2FIJHV2XnuUo2zy1FudgqgU%2BQMjQhR4%2BehGblrwhjWKpWc3oDEFhDr%2FkWLmB6XUb3%2B72er%2FCgKACIFdL75VF6DNVxyB5WaE%2BwDJDEdKbbJVcMjUE1G2dPmHG8E3xrnB6vFwOfm1dNqv6BID5pOZ6T1v9d%2B6SMeAECIDSMYSwPYGjY753GwKNhZ1CV8guJ8fTYFcyZE6S7ltu1J5rXFfrfWuRaZW9P%2BwaW5RqiKSOtDxSzNuOvCdGsGJW2c6ObIvJyb%2FFxlSlRwsc2i0qPCWOFSXxc2pRFt%2BllTxavbhUgdX08fmkse%2FsfaXm%2FVX3juiBtKwT2hLHKVY%2B4UAU49wGiKqKDDV2brhrljH9ptqDtksYTtoqxGhoL9GDvpp5HAU6puoQ5dDHGzWLEXZQf73JmXe1bb0sWHxglCa%2BCRCnRM0F2nfXFcshvQMybUMHZ756%2FpV9F8kE1Clly%2Fq93RbPrly6PfBZcHKaHMT30SDbQRW2Hc32jredvXcQ8BN9LeKd7nDXcBHAEVfP5pp6TZ77ikkBrNJrz6BHekKjYWN8cAhSsGoudflu%2Bwc0aVyx8hBVeSp1RE67EGUEzkNCbMZc7FlybyKyczsCdALhxFXx4cZkLijQYw%2Fo3tvwY6pgGkCNzKpBsE7Em0M2hohSUxd88skJWl4C8ci7RDtziL7PbVcft%2FIXQFwwunt7mFxDP7NWYOt5nWR1GpvY9OAlWzC1PePCa6XT8ljoJABO%2FLSNpopGtqEy8GVSA%2B87uaG9z2MP7d2UemJB1bD7x2aMsG8QyVI%2BtmbJ5bpjccQeFVa7CWvb%2BwZHMoeixsCRQYMWYnamDKc6GFeTaIjk2azp2EqLHbByaH&X-Amz-Signature=2c8fe3ffeaa8ee815a2754fd79e90eeae7ec42d0d0fd75d754943e015952773e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQNILODE%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIGfBjDid3NryrzfoAyW1J45BFebyvJ3G2Tevut7IeGZYAiBc%2B89XwRR%2FRf7b1lZ16TfsxogZX%2BqVq%2BIaAPlp62JCSiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BkK69gJ2pSqbToAxKtwD4F8hm5mWoO3%2FIJHV2XnuUo2zy1FudgqgU%2BQMjQhR4%2BehGblrwhjWKpWc3oDEFhDr%2FkWLmB6XUb3%2B72er%2FCgKACIFdL75VF6DNVxyB5WaE%2BwDJDEdKbbJVcMjUE1G2dPmHG8E3xrnB6vFwOfm1dNqv6BID5pOZ6T1v9d%2B6SMeAECIDSMYSwPYGjY753GwKNhZ1CV8guJ8fTYFcyZE6S7ltu1J5rXFfrfWuRaZW9P%2BwaW5RqiKSOtDxSzNuOvCdGsGJW2c6ObIvJyb%2FFxlSlRwsc2i0qPCWOFSXxc2pRFt%2BllTxavbhUgdX08fmkse%2FsfaXm%2FVX3juiBtKwT2hLHKVY%2B4UAU49wGiKqKDDV2brhrljH9ptqDtksYTtoqxGhoL9GDvpp5HAU6puoQ5dDHGzWLEXZQf73JmXe1bb0sWHxglCa%2BCRCnRM0F2nfXFcshvQMybUMHZ756%2FpV9F8kE1Clly%2Fq93RbPrly6PfBZcHKaHMT30SDbQRW2Hc32jredvXcQ8BN9LeKd7nDXcBHAEVfP5pp6TZ77ikkBrNJrz6BHekKjYWN8cAhSsGoudflu%2Bwc0aVyx8hBVeSp1RE67EGUEzkNCbMZc7FlybyKyczsCdALhxFXx4cZkLijQYw%2Fo3tvwY6pgGkCNzKpBsE7Em0M2hohSUxd88skJWl4C8ci7RDtziL7PbVcft%2FIXQFwwunt7mFxDP7NWYOt5nWR1GpvY9OAlWzC1PePCa6XT8ljoJABO%2FLSNpopGtqEy8GVSA%2B87uaG9z2MP7d2UemJB1bD7x2aMsG8QyVI%2BtmbJ5bpjccQeFVa7CWvb%2BwZHMoeixsCRQYMWYnamDKc6GFeTaIjk2azp2EqLHbByaH&X-Amz-Signature=07aa357b41d442245cdf2e285711b88bf3602080b338aa867e698ead3e012095&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQNILODE%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIGfBjDid3NryrzfoAyW1J45BFebyvJ3G2Tevut7IeGZYAiBc%2B89XwRR%2FRf7b1lZ16TfsxogZX%2BqVq%2BIaAPlp62JCSiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BkK69gJ2pSqbToAxKtwD4F8hm5mWoO3%2FIJHV2XnuUo2zy1FudgqgU%2BQMjQhR4%2BehGblrwhjWKpWc3oDEFhDr%2FkWLmB6XUb3%2B72er%2FCgKACIFdL75VF6DNVxyB5WaE%2BwDJDEdKbbJVcMjUE1G2dPmHG8E3xrnB6vFwOfm1dNqv6BID5pOZ6T1v9d%2B6SMeAECIDSMYSwPYGjY753GwKNhZ1CV8guJ8fTYFcyZE6S7ltu1J5rXFfrfWuRaZW9P%2BwaW5RqiKSOtDxSzNuOvCdGsGJW2c6ObIvJyb%2FFxlSlRwsc2i0qPCWOFSXxc2pRFt%2BllTxavbhUgdX08fmkse%2FsfaXm%2FVX3juiBtKwT2hLHKVY%2B4UAU49wGiKqKDDV2brhrljH9ptqDtksYTtoqxGhoL9GDvpp5HAU6puoQ5dDHGzWLEXZQf73JmXe1bb0sWHxglCa%2BCRCnRM0F2nfXFcshvQMybUMHZ756%2FpV9F8kE1Clly%2Fq93RbPrly6PfBZcHKaHMT30SDbQRW2Hc32jredvXcQ8BN9LeKd7nDXcBHAEVfP5pp6TZ77ikkBrNJrz6BHekKjYWN8cAhSsGoudflu%2Bwc0aVyx8hBVeSp1RE67EGUEzkNCbMZc7FlybyKyczsCdALhxFXx4cZkLijQYw%2Fo3tvwY6pgGkCNzKpBsE7Em0M2hohSUxd88skJWl4C8ci7RDtziL7PbVcft%2FIXQFwwunt7mFxDP7NWYOt5nWR1GpvY9OAlWzC1PePCa6XT8ljoJABO%2FLSNpopGtqEy8GVSA%2B87uaG9z2MP7d2UemJB1bD7x2aMsG8QyVI%2BtmbJ5bpjccQeFVa7CWvb%2BwZHMoeixsCRQYMWYnamDKc6GFeTaIjk2azp2EqLHbByaH&X-Amz-Signature=8c40a5831b15242308ef045223f995666c2df823c109b1ae8280b24320f13755&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQNILODE%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIGfBjDid3NryrzfoAyW1J45BFebyvJ3G2Tevut7IeGZYAiBc%2B89XwRR%2FRf7b1lZ16TfsxogZX%2BqVq%2BIaAPlp62JCSiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BkK69gJ2pSqbToAxKtwD4F8hm5mWoO3%2FIJHV2XnuUo2zy1FudgqgU%2BQMjQhR4%2BehGblrwhjWKpWc3oDEFhDr%2FkWLmB6XUb3%2B72er%2FCgKACIFdL75VF6DNVxyB5WaE%2BwDJDEdKbbJVcMjUE1G2dPmHG8E3xrnB6vFwOfm1dNqv6BID5pOZ6T1v9d%2B6SMeAECIDSMYSwPYGjY753GwKNhZ1CV8guJ8fTYFcyZE6S7ltu1J5rXFfrfWuRaZW9P%2BwaW5RqiKSOtDxSzNuOvCdGsGJW2c6ObIvJyb%2FFxlSlRwsc2i0qPCWOFSXxc2pRFt%2BllTxavbhUgdX08fmkse%2FsfaXm%2FVX3juiBtKwT2hLHKVY%2B4UAU49wGiKqKDDV2brhrljH9ptqDtksYTtoqxGhoL9GDvpp5HAU6puoQ5dDHGzWLEXZQf73JmXe1bb0sWHxglCa%2BCRCnRM0F2nfXFcshvQMybUMHZ756%2FpV9F8kE1Clly%2Fq93RbPrly6PfBZcHKaHMT30SDbQRW2Hc32jredvXcQ8BN9LeKd7nDXcBHAEVfP5pp6TZ77ikkBrNJrz6BHekKjYWN8cAhSsGoudflu%2Bwc0aVyx8hBVeSp1RE67EGUEzkNCbMZc7FlybyKyczsCdALhxFXx4cZkLijQYw%2Fo3tvwY6pgGkCNzKpBsE7Em0M2hohSUxd88skJWl4C8ci7RDtziL7PbVcft%2FIXQFwwunt7mFxDP7NWYOt5nWR1GpvY9OAlWzC1PePCa6XT8ljoJABO%2FLSNpopGtqEy8GVSA%2B87uaG9z2MP7d2UemJB1bD7x2aMsG8QyVI%2BtmbJ5bpjccQeFVa7CWvb%2BwZHMoeixsCRQYMWYnamDKc6GFeTaIjk2azp2EqLHbByaH&X-Amz-Signature=0ee4cea5ed94caefaa2493ea992ca738569274c189212602a7c7590cb1ec45fe&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQNILODE%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIGfBjDid3NryrzfoAyW1J45BFebyvJ3G2Tevut7IeGZYAiBc%2B89XwRR%2FRf7b1lZ16TfsxogZX%2BqVq%2BIaAPlp62JCSiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BkK69gJ2pSqbToAxKtwD4F8hm5mWoO3%2FIJHV2XnuUo2zy1FudgqgU%2BQMjQhR4%2BehGblrwhjWKpWc3oDEFhDr%2FkWLmB6XUb3%2B72er%2FCgKACIFdL75VF6DNVxyB5WaE%2BwDJDEdKbbJVcMjUE1G2dPmHG8E3xrnB6vFwOfm1dNqv6BID5pOZ6T1v9d%2B6SMeAECIDSMYSwPYGjY753GwKNhZ1CV8guJ8fTYFcyZE6S7ltu1J5rXFfrfWuRaZW9P%2BwaW5RqiKSOtDxSzNuOvCdGsGJW2c6ObIvJyb%2FFxlSlRwsc2i0qPCWOFSXxc2pRFt%2BllTxavbhUgdX08fmkse%2FsfaXm%2FVX3juiBtKwT2hLHKVY%2B4UAU49wGiKqKDDV2brhrljH9ptqDtksYTtoqxGhoL9GDvpp5HAU6puoQ5dDHGzWLEXZQf73JmXe1bb0sWHxglCa%2BCRCnRM0F2nfXFcshvQMybUMHZ756%2FpV9F8kE1Clly%2Fq93RbPrly6PfBZcHKaHMT30SDbQRW2Hc32jredvXcQ8BN9LeKd7nDXcBHAEVfP5pp6TZ77ikkBrNJrz6BHekKjYWN8cAhSsGoudflu%2Bwc0aVyx8hBVeSp1RE67EGUEzkNCbMZc7FlybyKyczsCdALhxFXx4cZkLijQYw%2Fo3tvwY6pgGkCNzKpBsE7Em0M2hohSUxd88skJWl4C8ci7RDtziL7PbVcft%2FIXQFwwunt7mFxDP7NWYOt5nWR1GpvY9OAlWzC1PePCa6XT8ljoJABO%2FLSNpopGtqEy8GVSA%2B87uaG9z2MP7d2UemJB1bD7x2aMsG8QyVI%2BtmbJ5bpjccQeFVa7CWvb%2BwZHMoeixsCRQYMWYnamDKc6GFeTaIjk2azp2EqLHbByaH&X-Amz-Signature=b1d56709daf05d4586a8f8149da71ae2a9ebcb21d192151175c7c4ef5baf6bd2&X-Amz-SignedHeaders=host&x-id=GetObject)
