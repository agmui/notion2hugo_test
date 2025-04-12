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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637TAZMRX%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIAb9KETO2Yt24GI5eyDS6m80rRRIGRuxuCk62Gs4I%2F9WAiEA6cBvW1FP8G%2BupAeRsEidXEN5SuuGVRe4Kvjv%2Fa0eRu0qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCIfSv%2F3B8HmoI4LCrcAzmCIvu%2BHr77fCNZZonHeZrQb%2BkKfFqTUjogF%2BItcD9ogNCUmIZwwUaxulTvH96I9mN%2B18DB5mNrU1TIq9gqpf6oAHMdiDFguDBhmCbUQF838BmryAm1QpE5XQiHX2%2Fkn4UuEoaGXS%2BhsRh2xU0Um2AOWEG%2F6xQToLdoa9O%2BRsXlLQZkAyu9GqPoSuenHlzh0qDXmDFJ0gOgEs%2BBDyTLuHnZ0JsFHYbe3vforPgwXLF1L6GvsUau2%2FTr8qpPK8cOZnXW6JmLIuEyxPjPmVgElpW2qMdCybw8ei2PcGFJXYR%2BEiE%2FIEIAWbSVriqLO3yj1pvpLhfTaA6PunsZ7x7TTgG%2Bfr2xh90BdnxiVVs3XlBnFISBbfe0buSBfdITyyWqOv%2FbEzbG9TBLFIeJoCBWKZeAj8CkS4HsV%2FhmUDlGKgiYcYDseJlB%2FuGkOWlyr69I6LcZyGQtkIBso8hHdpaC%2FKeP%2FJjTJjXGrTEduKfKg13oxHUN9ShjcJ%2BhqvqoEhxB9l45Ioid2K%2FtCMbB9t5zFWblWSZgFPUqTryy9XT2SpTxjhBXIPwvlVaDY41iHvsh27g468W6ZfZM8E2pWQyl8x777CzMHjeRO7EtEHfU4VF8OQculkkPehH%2Ffgc%2FMMWN6L8GOqUBek7N5Kqb%2FM0lO2XJ%2BU5V3FDQGBkOMRnm0O7CjlGYU%2FGGb8dEo%2FVS1pyZZblz8UCMsLhVB7E%2BJwcAZ0F6pdcEmLP1sT56T98pyVDkLtDVSY%2B%2F9vy2n9zRIK1wediK4cgPBxf2whbGFiTcH0ex4evO%2Bd4nIXoaz3oM7SnsYIdXcksAmiqKxVkaQk5%2Bsv6%2F3jVj3aRIyWF1%2FkDNR5C4UNpn4sNPI%2FdM&X-Amz-Signature=578c7f00779025806b5c3d2d71818fd994239d63e66471380661b119edbc2954&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637TAZMRX%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIAb9KETO2Yt24GI5eyDS6m80rRRIGRuxuCk62Gs4I%2F9WAiEA6cBvW1FP8G%2BupAeRsEidXEN5SuuGVRe4Kvjv%2Fa0eRu0qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCIfSv%2F3B8HmoI4LCrcAzmCIvu%2BHr77fCNZZonHeZrQb%2BkKfFqTUjogF%2BItcD9ogNCUmIZwwUaxulTvH96I9mN%2B18DB5mNrU1TIq9gqpf6oAHMdiDFguDBhmCbUQF838BmryAm1QpE5XQiHX2%2Fkn4UuEoaGXS%2BhsRh2xU0Um2AOWEG%2F6xQToLdoa9O%2BRsXlLQZkAyu9GqPoSuenHlzh0qDXmDFJ0gOgEs%2BBDyTLuHnZ0JsFHYbe3vforPgwXLF1L6GvsUau2%2FTr8qpPK8cOZnXW6JmLIuEyxPjPmVgElpW2qMdCybw8ei2PcGFJXYR%2BEiE%2FIEIAWbSVriqLO3yj1pvpLhfTaA6PunsZ7x7TTgG%2Bfr2xh90BdnxiVVs3XlBnFISBbfe0buSBfdITyyWqOv%2FbEzbG9TBLFIeJoCBWKZeAj8CkS4HsV%2FhmUDlGKgiYcYDseJlB%2FuGkOWlyr69I6LcZyGQtkIBso8hHdpaC%2FKeP%2FJjTJjXGrTEduKfKg13oxHUN9ShjcJ%2BhqvqoEhxB9l45Ioid2K%2FtCMbB9t5zFWblWSZgFPUqTryy9XT2SpTxjhBXIPwvlVaDY41iHvsh27g468W6ZfZM8E2pWQyl8x777CzMHjeRO7EtEHfU4VF8OQculkkPehH%2Ffgc%2FMMWN6L8GOqUBek7N5Kqb%2FM0lO2XJ%2BU5V3FDQGBkOMRnm0O7CjlGYU%2FGGb8dEo%2FVS1pyZZblz8UCMsLhVB7E%2BJwcAZ0F6pdcEmLP1sT56T98pyVDkLtDVSY%2B%2F9vy2n9zRIK1wediK4cgPBxf2whbGFiTcH0ex4evO%2Bd4nIXoaz3oM7SnsYIdXcksAmiqKxVkaQk5%2Bsv6%2F3jVj3aRIyWF1%2FkDNR5C4UNpn4sNPI%2FdM&X-Amz-Signature=411a0a2563405b6cc13d9adf31f6df16d966d6aea953931e4242d416e4b10d48&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637TAZMRX%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIAb9KETO2Yt24GI5eyDS6m80rRRIGRuxuCk62Gs4I%2F9WAiEA6cBvW1FP8G%2BupAeRsEidXEN5SuuGVRe4Kvjv%2Fa0eRu0qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCIfSv%2F3B8HmoI4LCrcAzmCIvu%2BHr77fCNZZonHeZrQb%2BkKfFqTUjogF%2BItcD9ogNCUmIZwwUaxulTvH96I9mN%2B18DB5mNrU1TIq9gqpf6oAHMdiDFguDBhmCbUQF838BmryAm1QpE5XQiHX2%2Fkn4UuEoaGXS%2BhsRh2xU0Um2AOWEG%2F6xQToLdoa9O%2BRsXlLQZkAyu9GqPoSuenHlzh0qDXmDFJ0gOgEs%2BBDyTLuHnZ0JsFHYbe3vforPgwXLF1L6GvsUau2%2FTr8qpPK8cOZnXW6JmLIuEyxPjPmVgElpW2qMdCybw8ei2PcGFJXYR%2BEiE%2FIEIAWbSVriqLO3yj1pvpLhfTaA6PunsZ7x7TTgG%2Bfr2xh90BdnxiVVs3XlBnFISBbfe0buSBfdITyyWqOv%2FbEzbG9TBLFIeJoCBWKZeAj8CkS4HsV%2FhmUDlGKgiYcYDseJlB%2FuGkOWlyr69I6LcZyGQtkIBso8hHdpaC%2FKeP%2FJjTJjXGrTEduKfKg13oxHUN9ShjcJ%2BhqvqoEhxB9l45Ioid2K%2FtCMbB9t5zFWblWSZgFPUqTryy9XT2SpTxjhBXIPwvlVaDY41iHvsh27g468W6ZfZM8E2pWQyl8x777CzMHjeRO7EtEHfU4VF8OQculkkPehH%2Ffgc%2FMMWN6L8GOqUBek7N5Kqb%2FM0lO2XJ%2BU5V3FDQGBkOMRnm0O7CjlGYU%2FGGb8dEo%2FVS1pyZZblz8UCMsLhVB7E%2BJwcAZ0F6pdcEmLP1sT56T98pyVDkLtDVSY%2B%2F9vy2n9zRIK1wediK4cgPBxf2whbGFiTcH0ex4evO%2Bd4nIXoaz3oM7SnsYIdXcksAmiqKxVkaQk5%2Bsv6%2F3jVj3aRIyWF1%2FkDNR5C4UNpn4sNPI%2FdM&X-Amz-Signature=d652b42766ddf8832edcd1c941e857a92dfac4bd8c31211fb1299fcb20ec06ea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637TAZMRX%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIAb9KETO2Yt24GI5eyDS6m80rRRIGRuxuCk62Gs4I%2F9WAiEA6cBvW1FP8G%2BupAeRsEidXEN5SuuGVRe4Kvjv%2Fa0eRu0qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCIfSv%2F3B8HmoI4LCrcAzmCIvu%2BHr77fCNZZonHeZrQb%2BkKfFqTUjogF%2BItcD9ogNCUmIZwwUaxulTvH96I9mN%2B18DB5mNrU1TIq9gqpf6oAHMdiDFguDBhmCbUQF838BmryAm1QpE5XQiHX2%2Fkn4UuEoaGXS%2BhsRh2xU0Um2AOWEG%2F6xQToLdoa9O%2BRsXlLQZkAyu9GqPoSuenHlzh0qDXmDFJ0gOgEs%2BBDyTLuHnZ0JsFHYbe3vforPgwXLF1L6GvsUau2%2FTr8qpPK8cOZnXW6JmLIuEyxPjPmVgElpW2qMdCybw8ei2PcGFJXYR%2BEiE%2FIEIAWbSVriqLO3yj1pvpLhfTaA6PunsZ7x7TTgG%2Bfr2xh90BdnxiVVs3XlBnFISBbfe0buSBfdITyyWqOv%2FbEzbG9TBLFIeJoCBWKZeAj8CkS4HsV%2FhmUDlGKgiYcYDseJlB%2FuGkOWlyr69I6LcZyGQtkIBso8hHdpaC%2FKeP%2FJjTJjXGrTEduKfKg13oxHUN9ShjcJ%2BhqvqoEhxB9l45Ioid2K%2FtCMbB9t5zFWblWSZgFPUqTryy9XT2SpTxjhBXIPwvlVaDY41iHvsh27g468W6ZfZM8E2pWQyl8x777CzMHjeRO7EtEHfU4VF8OQculkkPehH%2Ffgc%2FMMWN6L8GOqUBek7N5Kqb%2FM0lO2XJ%2BU5V3FDQGBkOMRnm0O7CjlGYU%2FGGb8dEo%2FVS1pyZZblz8UCMsLhVB7E%2BJwcAZ0F6pdcEmLP1sT56T98pyVDkLtDVSY%2B%2F9vy2n9zRIK1wediK4cgPBxf2whbGFiTcH0ex4evO%2Bd4nIXoaz3oM7SnsYIdXcksAmiqKxVkaQk5%2Bsv6%2F3jVj3aRIyWF1%2FkDNR5C4UNpn4sNPI%2FdM&X-Amz-Signature=e06a6c3f08f44bdef0f0a33a791ca683af456d5c632f51dc02c1891b04324d43&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637TAZMRX%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIAb9KETO2Yt24GI5eyDS6m80rRRIGRuxuCk62Gs4I%2F9WAiEA6cBvW1FP8G%2BupAeRsEidXEN5SuuGVRe4Kvjv%2Fa0eRu0qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCIfSv%2F3B8HmoI4LCrcAzmCIvu%2BHr77fCNZZonHeZrQb%2BkKfFqTUjogF%2BItcD9ogNCUmIZwwUaxulTvH96I9mN%2B18DB5mNrU1TIq9gqpf6oAHMdiDFguDBhmCbUQF838BmryAm1QpE5XQiHX2%2Fkn4UuEoaGXS%2BhsRh2xU0Um2AOWEG%2F6xQToLdoa9O%2BRsXlLQZkAyu9GqPoSuenHlzh0qDXmDFJ0gOgEs%2BBDyTLuHnZ0JsFHYbe3vforPgwXLF1L6GvsUau2%2FTr8qpPK8cOZnXW6JmLIuEyxPjPmVgElpW2qMdCybw8ei2PcGFJXYR%2BEiE%2FIEIAWbSVriqLO3yj1pvpLhfTaA6PunsZ7x7TTgG%2Bfr2xh90BdnxiVVs3XlBnFISBbfe0buSBfdITyyWqOv%2FbEzbG9TBLFIeJoCBWKZeAj8CkS4HsV%2FhmUDlGKgiYcYDseJlB%2FuGkOWlyr69I6LcZyGQtkIBso8hHdpaC%2FKeP%2FJjTJjXGrTEduKfKg13oxHUN9ShjcJ%2BhqvqoEhxB9l45Ioid2K%2FtCMbB9t5zFWblWSZgFPUqTryy9XT2SpTxjhBXIPwvlVaDY41iHvsh27g468W6ZfZM8E2pWQyl8x777CzMHjeRO7EtEHfU4VF8OQculkkPehH%2Ffgc%2FMMWN6L8GOqUBek7N5Kqb%2FM0lO2XJ%2BU5V3FDQGBkOMRnm0O7CjlGYU%2FGGb8dEo%2FVS1pyZZblz8UCMsLhVB7E%2BJwcAZ0F6pdcEmLP1sT56T98pyVDkLtDVSY%2B%2F9vy2n9zRIK1wediK4cgPBxf2whbGFiTcH0ex4evO%2Bd4nIXoaz3oM7SnsYIdXcksAmiqKxVkaQk5%2Bsv6%2F3jVj3aRIyWF1%2FkDNR5C4UNpn4sNPI%2FdM&X-Amz-Signature=13136b82bdb732e1bfad28f9aa9dc24b971f3850657463bf4e7ddff637331306&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637TAZMRX%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIAb9KETO2Yt24GI5eyDS6m80rRRIGRuxuCk62Gs4I%2F9WAiEA6cBvW1FP8G%2BupAeRsEidXEN5SuuGVRe4Kvjv%2Fa0eRu0qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCIfSv%2F3B8HmoI4LCrcAzmCIvu%2BHr77fCNZZonHeZrQb%2BkKfFqTUjogF%2BItcD9ogNCUmIZwwUaxulTvH96I9mN%2B18DB5mNrU1TIq9gqpf6oAHMdiDFguDBhmCbUQF838BmryAm1QpE5XQiHX2%2Fkn4UuEoaGXS%2BhsRh2xU0Um2AOWEG%2F6xQToLdoa9O%2BRsXlLQZkAyu9GqPoSuenHlzh0qDXmDFJ0gOgEs%2BBDyTLuHnZ0JsFHYbe3vforPgwXLF1L6GvsUau2%2FTr8qpPK8cOZnXW6JmLIuEyxPjPmVgElpW2qMdCybw8ei2PcGFJXYR%2BEiE%2FIEIAWbSVriqLO3yj1pvpLhfTaA6PunsZ7x7TTgG%2Bfr2xh90BdnxiVVs3XlBnFISBbfe0buSBfdITyyWqOv%2FbEzbG9TBLFIeJoCBWKZeAj8CkS4HsV%2FhmUDlGKgiYcYDseJlB%2FuGkOWlyr69I6LcZyGQtkIBso8hHdpaC%2FKeP%2FJjTJjXGrTEduKfKg13oxHUN9ShjcJ%2BhqvqoEhxB9l45Ioid2K%2FtCMbB9t5zFWblWSZgFPUqTryy9XT2SpTxjhBXIPwvlVaDY41iHvsh27g468W6ZfZM8E2pWQyl8x777CzMHjeRO7EtEHfU4VF8OQculkkPehH%2Ffgc%2FMMWN6L8GOqUBek7N5Kqb%2FM0lO2XJ%2BU5V3FDQGBkOMRnm0O7CjlGYU%2FGGb8dEo%2FVS1pyZZblz8UCMsLhVB7E%2BJwcAZ0F6pdcEmLP1sT56T98pyVDkLtDVSY%2B%2F9vy2n9zRIK1wediK4cgPBxf2whbGFiTcH0ex4evO%2Bd4nIXoaz3oM7SnsYIdXcksAmiqKxVkaQk5%2Bsv6%2F3jVj3aRIyWF1%2FkDNR5C4UNpn4sNPI%2FdM&X-Amz-Signature=67e8c835108bf44efe74d6d7a714ca1a00c963ae989d26690c9739c0a51cc6f6&X-Amz-SignedHeaders=host&x-id=GetObject)
