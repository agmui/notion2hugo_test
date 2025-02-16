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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSGJLGBA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCcXuPngci7qZqo%2FmaP%2FbGZ%2F2kJK1GzkxkB5ezkdcFCZAIhAMHmOU3aLbCEcL38e9iex6rgzNpxyjePASXv3O6q8eSYKv8DCGMQABoMNjM3NDIzMTgzODA1IgzV97IHQlrPMdIP7X8q3ANKYzBD51B158aFjfhwh78lzxAoBZdAFM0j6qWSk5SylC4IkLEH3udl936RgJ1xUPaNqMXPRf3ujZw02ZcSXe2tWgD7dMaWmp7sdkaTBAO2kFksZBbO36KW15QEGW1R7FFi%2F3SlItOhp81G9nwIyBNs4x%2FGS4TAzWYNkY2ErAD5OJWGKza2%2Bp2N9cjpMj0C3CcqjFrhrwgGt19u0iMMhiuyoOntl%2BKpFH%2F8De21d0cJ8j0d3nnaSpk0zxCIyqX48oBMtROMo4KXz05gQ8YeNIF7HLlNHU5UieMzW%2FY4tLrFdW1O%2F0DjuToajwgdhV8zj1FicNvVK7DdiUfTceqcH5iqMBCrW12MIkKF1iSNHAkxueHgPg2UlJSqclPgID3n5hZzxkSHcJvydk85zkRwPaJuziB2He7coCJNszvwAx3o1igp4hfwEv3vtAF%2FRJm9%2B4XeuXA8g3NHuUI91xK17Q5VdoGF4OSjLkqDw1Rur%2FYIUZUVOlVgTHP8bZ3eQsFdqMGFcXX9%2B6z5S0ekWnQADYerdg8AkhR9U3WkxLXUFtAkcGKbeBIrhcUzrR%2Bw9CGk1o84VSd5Pdfqy%2FNyczwU1yrimk6u8Zuc8FFmhEqiHtUDSjOfx6ky3%2FL82mAEhTClwci9BjqkAYQRB7nLb8WF8fbRMR9%2BWiHarEMfRga0AabYSD8lC3WjLiqGHOkKuC2%2Fpzha3uSubTzDbznqE5g%2B6BzD%2BxcMCKTd7obSyewd9zqN%2FNq1A%2FHTiISBeUW3HvqYayTEQGQSvu1AhFRFlON%2FpeMjvf1Vg6srX%2BlliMIImmifAlArZarI5sTKxshlnSw9eDWez0%2FHvYtpotz99NtGtYKwCvXDGrceHjHp&X-Amz-Signature=728d6a3ed374423cea487e84ee85ad7f224fe3198ba4cb992767caeb7209b995&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSGJLGBA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCcXuPngci7qZqo%2FmaP%2FbGZ%2F2kJK1GzkxkB5ezkdcFCZAIhAMHmOU3aLbCEcL38e9iex6rgzNpxyjePASXv3O6q8eSYKv8DCGMQABoMNjM3NDIzMTgzODA1IgzV97IHQlrPMdIP7X8q3ANKYzBD51B158aFjfhwh78lzxAoBZdAFM0j6qWSk5SylC4IkLEH3udl936RgJ1xUPaNqMXPRf3ujZw02ZcSXe2tWgD7dMaWmp7sdkaTBAO2kFksZBbO36KW15QEGW1R7FFi%2F3SlItOhp81G9nwIyBNs4x%2FGS4TAzWYNkY2ErAD5OJWGKza2%2Bp2N9cjpMj0C3CcqjFrhrwgGt19u0iMMhiuyoOntl%2BKpFH%2F8De21d0cJ8j0d3nnaSpk0zxCIyqX48oBMtROMo4KXz05gQ8YeNIF7HLlNHU5UieMzW%2FY4tLrFdW1O%2F0DjuToajwgdhV8zj1FicNvVK7DdiUfTceqcH5iqMBCrW12MIkKF1iSNHAkxueHgPg2UlJSqclPgID3n5hZzxkSHcJvydk85zkRwPaJuziB2He7coCJNszvwAx3o1igp4hfwEv3vtAF%2FRJm9%2B4XeuXA8g3NHuUI91xK17Q5VdoGF4OSjLkqDw1Rur%2FYIUZUVOlVgTHP8bZ3eQsFdqMGFcXX9%2B6z5S0ekWnQADYerdg8AkhR9U3WkxLXUFtAkcGKbeBIrhcUzrR%2Bw9CGk1o84VSd5Pdfqy%2FNyczwU1yrimk6u8Zuc8FFmhEqiHtUDSjOfx6ky3%2FL82mAEhTClwci9BjqkAYQRB7nLb8WF8fbRMR9%2BWiHarEMfRga0AabYSD8lC3WjLiqGHOkKuC2%2Fpzha3uSubTzDbznqE5g%2B6BzD%2BxcMCKTd7obSyewd9zqN%2FNq1A%2FHTiISBeUW3HvqYayTEQGQSvu1AhFRFlON%2FpeMjvf1Vg6srX%2BlliMIImmifAlArZarI5sTKxshlnSw9eDWez0%2FHvYtpotz99NtGtYKwCvXDGrceHjHp&X-Amz-Signature=36918a275dd02468e4722b7c1a91cc83225ff6c5ca968c1faaca48f285d9c227&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSGJLGBA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCcXuPngci7qZqo%2FmaP%2FbGZ%2F2kJK1GzkxkB5ezkdcFCZAIhAMHmOU3aLbCEcL38e9iex6rgzNpxyjePASXv3O6q8eSYKv8DCGMQABoMNjM3NDIzMTgzODA1IgzV97IHQlrPMdIP7X8q3ANKYzBD51B158aFjfhwh78lzxAoBZdAFM0j6qWSk5SylC4IkLEH3udl936RgJ1xUPaNqMXPRf3ujZw02ZcSXe2tWgD7dMaWmp7sdkaTBAO2kFksZBbO36KW15QEGW1R7FFi%2F3SlItOhp81G9nwIyBNs4x%2FGS4TAzWYNkY2ErAD5OJWGKza2%2Bp2N9cjpMj0C3CcqjFrhrwgGt19u0iMMhiuyoOntl%2BKpFH%2F8De21d0cJ8j0d3nnaSpk0zxCIyqX48oBMtROMo4KXz05gQ8YeNIF7HLlNHU5UieMzW%2FY4tLrFdW1O%2F0DjuToajwgdhV8zj1FicNvVK7DdiUfTceqcH5iqMBCrW12MIkKF1iSNHAkxueHgPg2UlJSqclPgID3n5hZzxkSHcJvydk85zkRwPaJuziB2He7coCJNszvwAx3o1igp4hfwEv3vtAF%2FRJm9%2B4XeuXA8g3NHuUI91xK17Q5VdoGF4OSjLkqDw1Rur%2FYIUZUVOlVgTHP8bZ3eQsFdqMGFcXX9%2B6z5S0ekWnQADYerdg8AkhR9U3WkxLXUFtAkcGKbeBIrhcUzrR%2Bw9CGk1o84VSd5Pdfqy%2FNyczwU1yrimk6u8Zuc8FFmhEqiHtUDSjOfx6ky3%2FL82mAEhTClwci9BjqkAYQRB7nLb8WF8fbRMR9%2BWiHarEMfRga0AabYSD8lC3WjLiqGHOkKuC2%2Fpzha3uSubTzDbznqE5g%2B6BzD%2BxcMCKTd7obSyewd9zqN%2FNq1A%2FHTiISBeUW3HvqYayTEQGQSvu1AhFRFlON%2FpeMjvf1Vg6srX%2BlliMIImmifAlArZarI5sTKxshlnSw9eDWez0%2FHvYtpotz99NtGtYKwCvXDGrceHjHp&X-Amz-Signature=fc8f69499af88383d16a7a6d3caa1636e610516bdfc302b107f58df160af732f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSGJLGBA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCcXuPngci7qZqo%2FmaP%2FbGZ%2F2kJK1GzkxkB5ezkdcFCZAIhAMHmOU3aLbCEcL38e9iex6rgzNpxyjePASXv3O6q8eSYKv8DCGMQABoMNjM3NDIzMTgzODA1IgzV97IHQlrPMdIP7X8q3ANKYzBD51B158aFjfhwh78lzxAoBZdAFM0j6qWSk5SylC4IkLEH3udl936RgJ1xUPaNqMXPRf3ujZw02ZcSXe2tWgD7dMaWmp7sdkaTBAO2kFksZBbO36KW15QEGW1R7FFi%2F3SlItOhp81G9nwIyBNs4x%2FGS4TAzWYNkY2ErAD5OJWGKza2%2Bp2N9cjpMj0C3CcqjFrhrwgGt19u0iMMhiuyoOntl%2BKpFH%2F8De21d0cJ8j0d3nnaSpk0zxCIyqX48oBMtROMo4KXz05gQ8YeNIF7HLlNHU5UieMzW%2FY4tLrFdW1O%2F0DjuToajwgdhV8zj1FicNvVK7DdiUfTceqcH5iqMBCrW12MIkKF1iSNHAkxueHgPg2UlJSqclPgID3n5hZzxkSHcJvydk85zkRwPaJuziB2He7coCJNszvwAx3o1igp4hfwEv3vtAF%2FRJm9%2B4XeuXA8g3NHuUI91xK17Q5VdoGF4OSjLkqDw1Rur%2FYIUZUVOlVgTHP8bZ3eQsFdqMGFcXX9%2B6z5S0ekWnQADYerdg8AkhR9U3WkxLXUFtAkcGKbeBIrhcUzrR%2Bw9CGk1o84VSd5Pdfqy%2FNyczwU1yrimk6u8Zuc8FFmhEqiHtUDSjOfx6ky3%2FL82mAEhTClwci9BjqkAYQRB7nLb8WF8fbRMR9%2BWiHarEMfRga0AabYSD8lC3WjLiqGHOkKuC2%2Fpzha3uSubTzDbznqE5g%2B6BzD%2BxcMCKTd7obSyewd9zqN%2FNq1A%2FHTiISBeUW3HvqYayTEQGQSvu1AhFRFlON%2FpeMjvf1Vg6srX%2BlliMIImmifAlArZarI5sTKxshlnSw9eDWez0%2FHvYtpotz99NtGtYKwCvXDGrceHjHp&X-Amz-Signature=43e0042d549caf04cbf1cdb52c6429e4ca0a54e67f23cca7b9370d9a19c4159b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSGJLGBA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCcXuPngci7qZqo%2FmaP%2FbGZ%2F2kJK1GzkxkB5ezkdcFCZAIhAMHmOU3aLbCEcL38e9iex6rgzNpxyjePASXv3O6q8eSYKv8DCGMQABoMNjM3NDIzMTgzODA1IgzV97IHQlrPMdIP7X8q3ANKYzBD51B158aFjfhwh78lzxAoBZdAFM0j6qWSk5SylC4IkLEH3udl936RgJ1xUPaNqMXPRf3ujZw02ZcSXe2tWgD7dMaWmp7sdkaTBAO2kFksZBbO36KW15QEGW1R7FFi%2F3SlItOhp81G9nwIyBNs4x%2FGS4TAzWYNkY2ErAD5OJWGKza2%2Bp2N9cjpMj0C3CcqjFrhrwgGt19u0iMMhiuyoOntl%2BKpFH%2F8De21d0cJ8j0d3nnaSpk0zxCIyqX48oBMtROMo4KXz05gQ8YeNIF7HLlNHU5UieMzW%2FY4tLrFdW1O%2F0DjuToajwgdhV8zj1FicNvVK7DdiUfTceqcH5iqMBCrW12MIkKF1iSNHAkxueHgPg2UlJSqclPgID3n5hZzxkSHcJvydk85zkRwPaJuziB2He7coCJNszvwAx3o1igp4hfwEv3vtAF%2FRJm9%2B4XeuXA8g3NHuUI91xK17Q5VdoGF4OSjLkqDw1Rur%2FYIUZUVOlVgTHP8bZ3eQsFdqMGFcXX9%2B6z5S0ekWnQADYerdg8AkhR9U3WkxLXUFtAkcGKbeBIrhcUzrR%2Bw9CGk1o84VSd5Pdfqy%2FNyczwU1yrimk6u8Zuc8FFmhEqiHtUDSjOfx6ky3%2FL82mAEhTClwci9BjqkAYQRB7nLb8WF8fbRMR9%2BWiHarEMfRga0AabYSD8lC3WjLiqGHOkKuC2%2Fpzha3uSubTzDbznqE5g%2B6BzD%2BxcMCKTd7obSyewd9zqN%2FNq1A%2FHTiISBeUW3HvqYayTEQGQSvu1AhFRFlON%2FpeMjvf1Vg6srX%2BlliMIImmifAlArZarI5sTKxshlnSw9eDWez0%2FHvYtpotz99NtGtYKwCvXDGrceHjHp&X-Amz-Signature=e9a1f0f133b98b288c98d173f3e58512032e39c7c0bac5f13f8d37f200922694&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSGJLGBA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCcXuPngci7qZqo%2FmaP%2FbGZ%2F2kJK1GzkxkB5ezkdcFCZAIhAMHmOU3aLbCEcL38e9iex6rgzNpxyjePASXv3O6q8eSYKv8DCGMQABoMNjM3NDIzMTgzODA1IgzV97IHQlrPMdIP7X8q3ANKYzBD51B158aFjfhwh78lzxAoBZdAFM0j6qWSk5SylC4IkLEH3udl936RgJ1xUPaNqMXPRf3ujZw02ZcSXe2tWgD7dMaWmp7sdkaTBAO2kFksZBbO36KW15QEGW1R7FFi%2F3SlItOhp81G9nwIyBNs4x%2FGS4TAzWYNkY2ErAD5OJWGKza2%2Bp2N9cjpMj0C3CcqjFrhrwgGt19u0iMMhiuyoOntl%2BKpFH%2F8De21d0cJ8j0d3nnaSpk0zxCIyqX48oBMtROMo4KXz05gQ8YeNIF7HLlNHU5UieMzW%2FY4tLrFdW1O%2F0DjuToajwgdhV8zj1FicNvVK7DdiUfTceqcH5iqMBCrW12MIkKF1iSNHAkxueHgPg2UlJSqclPgID3n5hZzxkSHcJvydk85zkRwPaJuziB2He7coCJNszvwAx3o1igp4hfwEv3vtAF%2FRJm9%2B4XeuXA8g3NHuUI91xK17Q5VdoGF4OSjLkqDw1Rur%2FYIUZUVOlVgTHP8bZ3eQsFdqMGFcXX9%2B6z5S0ekWnQADYerdg8AkhR9U3WkxLXUFtAkcGKbeBIrhcUzrR%2Bw9CGk1o84VSd5Pdfqy%2FNyczwU1yrimk6u8Zuc8FFmhEqiHtUDSjOfx6ky3%2FL82mAEhTClwci9BjqkAYQRB7nLb8WF8fbRMR9%2BWiHarEMfRga0AabYSD8lC3WjLiqGHOkKuC2%2Fpzha3uSubTzDbznqE5g%2B6BzD%2BxcMCKTd7obSyewd9zqN%2FNq1A%2FHTiISBeUW3HvqYayTEQGQSvu1AhFRFlON%2FpeMjvf1Vg6srX%2BlliMIImmifAlArZarI5sTKxshlnSw9eDWez0%2FHvYtpotz99NtGtYKwCvXDGrceHjHp&X-Amz-Signature=cefd6cdf831bfee1ccabfbb6b153be34adc7159786be7b822b2e7204c5830bdf&X-Amz-SignedHeaders=host&x-id=GetObject)
