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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNEKWLBO%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T110704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCU2kovAFNkgZUaEwUYnhkwcnmcFgd3u2Aze%2F%2BK90eQnwIhAMtkmkTWhvbd1IqhjaXtCYOp408mcPZrYR%2BUDYuPr0xGKv8DCHIQABoMNjM3NDIzMTgzODA1IgygSo0YT53tvrSyCVQq3ANKnoVaCA5yOmU0YFfOIklUVm7kfEJ97dv%2FVVCdUhDX3CS7LcBXRG5jOAw1TSmqmtyddbZL3cjJfya4NEPJsxInQFSZHV4Dwd0JROjUJJul4L9aEKpdw9DC6ryEPPkqAEOui%2BpBiT2NSmke13aG6Uazb4P6IMxmSA%2BO3FdQo9NKDu9gDMtNkATo61znHt2C6qujYTyPIJPSLn94Q1OVlhtvsR3PpHSJzbWxig7aIwnopCbQvzLbTJOMG4VFO4Lv4o5ATmHLRuvBGQeiiCXmBqAs22LxGSmfwmVL5j19o7f0DedHmXbZTEvuWL7b0qSc6lu1KvHDGzjud3yrlNZ%2FfJkB6QzLmWXrGCzrf8OnFXPMpUTPieCr9DQYkke9hTKr7WIG8oa5QJx7zeT5ctd99KPdkyak0pk23uytzTtOUEK1FYx6VZJ2572v%2F25vJKaPggsHr3l8M7k4bZ%2FO6wecIzMB9iVqyKfW1HR3MPBSs%2BgXUv0G0pz9JuiN9QCXutEc6uI48zhsq%2BKrBt2t%2Br9sNS9buarur79NRXfxyA9DdHntEMuftykwEr5Z9%2B1xDIIPVE2afvaXidMXuZjGRTvMBp3MEEMuJ3eAp%2BwriSaNGQv6jn7sDy8B%2FmLLeLzHajDW0YC%2BBjqkAf%2FDCi5eY2WvAQG57yqcjohozUeeKmRbeY2vizV2AlvGmxlxQ9JxCot1ABldfe%2B6tfc3j8uiQF2FCqf2ecQg96pgH25ndCsy2C3ghrWWu%2Fko87lePfuabdG3BHjkxnW%2Fn%2B0dCdxM7H4a0COX9AbzyiDRsBWANFyxsTJBnPlI3%2FbNVuCP%2BdluyR3%2Bl8q4S%2FsjUHPl9Qkh6b8dXEaoVZBYQ6MSNgy7&X-Amz-Signature=d0d46add726624078e66c4207cac4180fc1ebf7670b211414f687e80f7f3a986&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNEKWLBO%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T110704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCU2kovAFNkgZUaEwUYnhkwcnmcFgd3u2Aze%2F%2BK90eQnwIhAMtkmkTWhvbd1IqhjaXtCYOp408mcPZrYR%2BUDYuPr0xGKv8DCHIQABoMNjM3NDIzMTgzODA1IgygSo0YT53tvrSyCVQq3ANKnoVaCA5yOmU0YFfOIklUVm7kfEJ97dv%2FVVCdUhDX3CS7LcBXRG5jOAw1TSmqmtyddbZL3cjJfya4NEPJsxInQFSZHV4Dwd0JROjUJJul4L9aEKpdw9DC6ryEPPkqAEOui%2BpBiT2NSmke13aG6Uazb4P6IMxmSA%2BO3FdQo9NKDu9gDMtNkATo61znHt2C6qujYTyPIJPSLn94Q1OVlhtvsR3PpHSJzbWxig7aIwnopCbQvzLbTJOMG4VFO4Lv4o5ATmHLRuvBGQeiiCXmBqAs22LxGSmfwmVL5j19o7f0DedHmXbZTEvuWL7b0qSc6lu1KvHDGzjud3yrlNZ%2FfJkB6QzLmWXrGCzrf8OnFXPMpUTPieCr9DQYkke9hTKr7WIG8oa5QJx7zeT5ctd99KPdkyak0pk23uytzTtOUEK1FYx6VZJ2572v%2F25vJKaPggsHr3l8M7k4bZ%2FO6wecIzMB9iVqyKfW1HR3MPBSs%2BgXUv0G0pz9JuiN9QCXutEc6uI48zhsq%2BKrBt2t%2Br9sNS9buarur79NRXfxyA9DdHntEMuftykwEr5Z9%2B1xDIIPVE2afvaXidMXuZjGRTvMBp3MEEMuJ3eAp%2BwriSaNGQv6jn7sDy8B%2FmLLeLzHajDW0YC%2BBjqkAf%2FDCi5eY2WvAQG57yqcjohozUeeKmRbeY2vizV2AlvGmxlxQ9JxCot1ABldfe%2B6tfc3j8uiQF2FCqf2ecQg96pgH25ndCsy2C3ghrWWu%2Fko87lePfuabdG3BHjkxnW%2Fn%2B0dCdxM7H4a0COX9AbzyiDRsBWANFyxsTJBnPlI3%2FbNVuCP%2BdluyR3%2Bl8q4S%2FsjUHPl9Qkh6b8dXEaoVZBYQ6MSNgy7&X-Amz-Signature=e0f839a7f4f1608999c0d76797b4c211aad1eedc2c31bdabaae862f7d6464190&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNEKWLBO%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T110705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCU2kovAFNkgZUaEwUYnhkwcnmcFgd3u2Aze%2F%2BK90eQnwIhAMtkmkTWhvbd1IqhjaXtCYOp408mcPZrYR%2BUDYuPr0xGKv8DCHIQABoMNjM3NDIzMTgzODA1IgygSo0YT53tvrSyCVQq3ANKnoVaCA5yOmU0YFfOIklUVm7kfEJ97dv%2FVVCdUhDX3CS7LcBXRG5jOAw1TSmqmtyddbZL3cjJfya4NEPJsxInQFSZHV4Dwd0JROjUJJul4L9aEKpdw9DC6ryEPPkqAEOui%2BpBiT2NSmke13aG6Uazb4P6IMxmSA%2BO3FdQo9NKDu9gDMtNkATo61znHt2C6qujYTyPIJPSLn94Q1OVlhtvsR3PpHSJzbWxig7aIwnopCbQvzLbTJOMG4VFO4Lv4o5ATmHLRuvBGQeiiCXmBqAs22LxGSmfwmVL5j19o7f0DedHmXbZTEvuWL7b0qSc6lu1KvHDGzjud3yrlNZ%2FfJkB6QzLmWXrGCzrf8OnFXPMpUTPieCr9DQYkke9hTKr7WIG8oa5QJx7zeT5ctd99KPdkyak0pk23uytzTtOUEK1FYx6VZJ2572v%2F25vJKaPggsHr3l8M7k4bZ%2FO6wecIzMB9iVqyKfW1HR3MPBSs%2BgXUv0G0pz9JuiN9QCXutEc6uI48zhsq%2BKrBt2t%2Br9sNS9buarur79NRXfxyA9DdHntEMuftykwEr5Z9%2B1xDIIPVE2afvaXidMXuZjGRTvMBp3MEEMuJ3eAp%2BwriSaNGQv6jn7sDy8B%2FmLLeLzHajDW0YC%2BBjqkAf%2FDCi5eY2WvAQG57yqcjohozUeeKmRbeY2vizV2AlvGmxlxQ9JxCot1ABldfe%2B6tfc3j8uiQF2FCqf2ecQg96pgH25ndCsy2C3ghrWWu%2Fko87lePfuabdG3BHjkxnW%2Fn%2B0dCdxM7H4a0COX9AbzyiDRsBWANFyxsTJBnPlI3%2FbNVuCP%2BdluyR3%2Bl8q4S%2FsjUHPl9Qkh6b8dXEaoVZBYQ6MSNgy7&X-Amz-Signature=db8c614f3081d0eb90ce2946cd6ee37f8e63ab18a6ff9bd5dd0ffd4cf291ac8f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNEKWLBO%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T110705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCU2kovAFNkgZUaEwUYnhkwcnmcFgd3u2Aze%2F%2BK90eQnwIhAMtkmkTWhvbd1IqhjaXtCYOp408mcPZrYR%2BUDYuPr0xGKv8DCHIQABoMNjM3NDIzMTgzODA1IgygSo0YT53tvrSyCVQq3ANKnoVaCA5yOmU0YFfOIklUVm7kfEJ97dv%2FVVCdUhDX3CS7LcBXRG5jOAw1TSmqmtyddbZL3cjJfya4NEPJsxInQFSZHV4Dwd0JROjUJJul4L9aEKpdw9DC6ryEPPkqAEOui%2BpBiT2NSmke13aG6Uazb4P6IMxmSA%2BO3FdQo9NKDu9gDMtNkATo61znHt2C6qujYTyPIJPSLn94Q1OVlhtvsR3PpHSJzbWxig7aIwnopCbQvzLbTJOMG4VFO4Lv4o5ATmHLRuvBGQeiiCXmBqAs22LxGSmfwmVL5j19o7f0DedHmXbZTEvuWL7b0qSc6lu1KvHDGzjud3yrlNZ%2FfJkB6QzLmWXrGCzrf8OnFXPMpUTPieCr9DQYkke9hTKr7WIG8oa5QJx7zeT5ctd99KPdkyak0pk23uytzTtOUEK1FYx6VZJ2572v%2F25vJKaPggsHr3l8M7k4bZ%2FO6wecIzMB9iVqyKfW1HR3MPBSs%2BgXUv0G0pz9JuiN9QCXutEc6uI48zhsq%2BKrBt2t%2Br9sNS9buarur79NRXfxyA9DdHntEMuftykwEr5Z9%2B1xDIIPVE2afvaXidMXuZjGRTvMBp3MEEMuJ3eAp%2BwriSaNGQv6jn7sDy8B%2FmLLeLzHajDW0YC%2BBjqkAf%2FDCi5eY2WvAQG57yqcjohozUeeKmRbeY2vizV2AlvGmxlxQ9JxCot1ABldfe%2B6tfc3j8uiQF2FCqf2ecQg96pgH25ndCsy2C3ghrWWu%2Fko87lePfuabdG3BHjkxnW%2Fn%2B0dCdxM7H4a0COX9AbzyiDRsBWANFyxsTJBnPlI3%2FbNVuCP%2BdluyR3%2Bl8q4S%2FsjUHPl9Qkh6b8dXEaoVZBYQ6MSNgy7&X-Amz-Signature=2e26ae8acbd26bce59a1de96deb70327d147ea547cb377409e2193d7272ca1b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNEKWLBO%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T110705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCU2kovAFNkgZUaEwUYnhkwcnmcFgd3u2Aze%2F%2BK90eQnwIhAMtkmkTWhvbd1IqhjaXtCYOp408mcPZrYR%2BUDYuPr0xGKv8DCHIQABoMNjM3NDIzMTgzODA1IgygSo0YT53tvrSyCVQq3ANKnoVaCA5yOmU0YFfOIklUVm7kfEJ97dv%2FVVCdUhDX3CS7LcBXRG5jOAw1TSmqmtyddbZL3cjJfya4NEPJsxInQFSZHV4Dwd0JROjUJJul4L9aEKpdw9DC6ryEPPkqAEOui%2BpBiT2NSmke13aG6Uazb4P6IMxmSA%2BO3FdQo9NKDu9gDMtNkATo61znHt2C6qujYTyPIJPSLn94Q1OVlhtvsR3PpHSJzbWxig7aIwnopCbQvzLbTJOMG4VFO4Lv4o5ATmHLRuvBGQeiiCXmBqAs22LxGSmfwmVL5j19o7f0DedHmXbZTEvuWL7b0qSc6lu1KvHDGzjud3yrlNZ%2FfJkB6QzLmWXrGCzrf8OnFXPMpUTPieCr9DQYkke9hTKr7WIG8oa5QJx7zeT5ctd99KPdkyak0pk23uytzTtOUEK1FYx6VZJ2572v%2F25vJKaPggsHr3l8M7k4bZ%2FO6wecIzMB9iVqyKfW1HR3MPBSs%2BgXUv0G0pz9JuiN9QCXutEc6uI48zhsq%2BKrBt2t%2Br9sNS9buarur79NRXfxyA9DdHntEMuftykwEr5Z9%2B1xDIIPVE2afvaXidMXuZjGRTvMBp3MEEMuJ3eAp%2BwriSaNGQv6jn7sDy8B%2FmLLeLzHajDW0YC%2BBjqkAf%2FDCi5eY2WvAQG57yqcjohozUeeKmRbeY2vizV2AlvGmxlxQ9JxCot1ABldfe%2B6tfc3j8uiQF2FCqf2ecQg96pgH25ndCsy2C3ghrWWu%2Fko87lePfuabdG3BHjkxnW%2Fn%2B0dCdxM7H4a0COX9AbzyiDRsBWANFyxsTJBnPlI3%2FbNVuCP%2BdluyR3%2Bl8q4S%2FsjUHPl9Qkh6b8dXEaoVZBYQ6MSNgy7&X-Amz-Signature=0e7c51bb1986a971392254aa4e2b91362250fbea648ef9c6107f3ec1b332bb54&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNEKWLBO%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T110705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCU2kovAFNkgZUaEwUYnhkwcnmcFgd3u2Aze%2F%2BK90eQnwIhAMtkmkTWhvbd1IqhjaXtCYOp408mcPZrYR%2BUDYuPr0xGKv8DCHIQABoMNjM3NDIzMTgzODA1IgygSo0YT53tvrSyCVQq3ANKnoVaCA5yOmU0YFfOIklUVm7kfEJ97dv%2FVVCdUhDX3CS7LcBXRG5jOAw1TSmqmtyddbZL3cjJfya4NEPJsxInQFSZHV4Dwd0JROjUJJul4L9aEKpdw9DC6ryEPPkqAEOui%2BpBiT2NSmke13aG6Uazb4P6IMxmSA%2BO3FdQo9NKDu9gDMtNkATo61znHt2C6qujYTyPIJPSLn94Q1OVlhtvsR3PpHSJzbWxig7aIwnopCbQvzLbTJOMG4VFO4Lv4o5ATmHLRuvBGQeiiCXmBqAs22LxGSmfwmVL5j19o7f0DedHmXbZTEvuWL7b0qSc6lu1KvHDGzjud3yrlNZ%2FfJkB6QzLmWXrGCzrf8OnFXPMpUTPieCr9DQYkke9hTKr7WIG8oa5QJx7zeT5ctd99KPdkyak0pk23uytzTtOUEK1FYx6VZJ2572v%2F25vJKaPggsHr3l8M7k4bZ%2FO6wecIzMB9iVqyKfW1HR3MPBSs%2BgXUv0G0pz9JuiN9QCXutEc6uI48zhsq%2BKrBt2t%2Br9sNS9buarur79NRXfxyA9DdHntEMuftykwEr5Z9%2B1xDIIPVE2afvaXidMXuZjGRTvMBp3MEEMuJ3eAp%2BwriSaNGQv6jn7sDy8B%2FmLLeLzHajDW0YC%2BBjqkAf%2FDCi5eY2WvAQG57yqcjohozUeeKmRbeY2vizV2AlvGmxlxQ9JxCot1ABldfe%2B6tfc3j8uiQF2FCqf2ecQg96pgH25ndCsy2C3ghrWWu%2Fko87lePfuabdG3BHjkxnW%2Fn%2B0dCdxM7H4a0COX9AbzyiDRsBWANFyxsTJBnPlI3%2FbNVuCP%2BdluyR3%2Bl8q4S%2FsjUHPl9Qkh6b8dXEaoVZBYQ6MSNgy7&X-Amz-Signature=e4808dfc851fb29452f0758bddbf6f39b50020c801e0211a21fd2125e0c16c9b&X-Amz-SignedHeaders=host&x-id=GetObject)
