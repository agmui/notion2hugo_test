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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3I7LGFL%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQD%2B6QZ3jBst%2Bn4967KVct3qmTKvqYZoSy4d8iUv%2FI3YbgIgdiMqaQD8q8IVSlAy%2F9I729Rpt29ySnR0YnAMw6WZIiAqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHz9R7oflO3C7rDJ1CrcA4hXDMMm73QCpUL8viodgqoKwEHY7rL4FtoUL33bss7PwI6oGCikqcCLRDjvEwyN316UPGs95s%2BrUCXlWkzFZK1ktIeqqnJDCpS1rPvp%2BfnXjrUuUcCganOtu86bfVR%2FGvz6b7AFAUcTGbIReywzu9yOnDGi%2BR0WKfjm3p5wu%2BV0H2%2FrkUZfbE%2F6ltSx2cZp2uqgYYGgg7%2BySysH2ZDlUhQ5zIQejM06Um1ZB7szolj8lbk0AJ%2BeBsbbwcFanM%2BOuJEf6NCjlN2OGMvo2T9eQlQj%2FGB2HcxX06m%2BnFSGLu5w3%2Fk01KX14epY38%2FuF4FQi%2BHzyJqyj6DikG6%2BgWnLcuHr3OeUDoKPbtaxN1AsfHUj3moBVpEezhF4R%2FltApLtg0NnyHPjyivveWBDpeVmv7T57Dx184f3gVcXasmWh%2BMyvpQt3%2FTNelaUU40upXy%2BmFDDcWJoQ6TTT0t8yzi7Kw1hT73dvgphE7VMRb9CqLkQeLebaCWjuku3mdZ%2Fdef50%2FrFcfTqheujh3sQ98jd7vz4y8XtWcaT54eGHigYpRR22VOzr5bc3VZr85%2Byz%2BPszdS1aH%2BEGhDNF%2FRAflwoTutOxnbkXC7H%2B0Y2PS7Z6z1XjBgaRfPIzGHnb4K1MJaNsb8GOqUB2I%2FYgbZdRgLIBY0rC4uIYKGCRHEe2k%2FePr4ufJIm%2BWyqD%2BoxkYRawlPLQUv4xw79PWrzl4Fn6vaNh0iKYGDI8FgXnBC6V%2BCkWFlRd57vpRL5sVvBQ8697MjFEPWQf6AsI2NK9Pqv9ejdKdkEf4gIZ4Z3RQRwOVwKIrUj4T5dR6wTvY67MiCdHfwPBCovLf20%2B5y7WOdDSEDpnU3RB2UQzHQvT%2FP8&X-Amz-Signature=ffcea1aff82fd367692d06e7919a98c2a0243c2b3dc6624ea58deda9d4209f95&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3I7LGFL%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQD%2B6QZ3jBst%2Bn4967KVct3qmTKvqYZoSy4d8iUv%2FI3YbgIgdiMqaQD8q8IVSlAy%2F9I729Rpt29ySnR0YnAMw6WZIiAqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHz9R7oflO3C7rDJ1CrcA4hXDMMm73QCpUL8viodgqoKwEHY7rL4FtoUL33bss7PwI6oGCikqcCLRDjvEwyN316UPGs95s%2BrUCXlWkzFZK1ktIeqqnJDCpS1rPvp%2BfnXjrUuUcCganOtu86bfVR%2FGvz6b7AFAUcTGbIReywzu9yOnDGi%2BR0WKfjm3p5wu%2BV0H2%2FrkUZfbE%2F6ltSx2cZp2uqgYYGgg7%2BySysH2ZDlUhQ5zIQejM06Um1ZB7szolj8lbk0AJ%2BeBsbbwcFanM%2BOuJEf6NCjlN2OGMvo2T9eQlQj%2FGB2HcxX06m%2BnFSGLu5w3%2Fk01KX14epY38%2FuF4FQi%2BHzyJqyj6DikG6%2BgWnLcuHr3OeUDoKPbtaxN1AsfHUj3moBVpEezhF4R%2FltApLtg0NnyHPjyivveWBDpeVmv7T57Dx184f3gVcXasmWh%2BMyvpQt3%2FTNelaUU40upXy%2BmFDDcWJoQ6TTT0t8yzi7Kw1hT73dvgphE7VMRb9CqLkQeLebaCWjuku3mdZ%2Fdef50%2FrFcfTqheujh3sQ98jd7vz4y8XtWcaT54eGHigYpRR22VOzr5bc3VZr85%2Byz%2BPszdS1aH%2BEGhDNF%2FRAflwoTutOxnbkXC7H%2B0Y2PS7Z6z1XjBgaRfPIzGHnb4K1MJaNsb8GOqUB2I%2FYgbZdRgLIBY0rC4uIYKGCRHEe2k%2FePr4ufJIm%2BWyqD%2BoxkYRawlPLQUv4xw79PWrzl4Fn6vaNh0iKYGDI8FgXnBC6V%2BCkWFlRd57vpRL5sVvBQ8697MjFEPWQf6AsI2NK9Pqv9ejdKdkEf4gIZ4Z3RQRwOVwKIrUj4T5dR6wTvY67MiCdHfwPBCovLf20%2B5y7WOdDSEDpnU3RB2UQzHQvT%2FP8&X-Amz-Signature=ad661ff5e2e007fef0de1d8195cab46df70065d37d8c5915dca18a42f80661fe&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3I7LGFL%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQD%2B6QZ3jBst%2Bn4967KVct3qmTKvqYZoSy4d8iUv%2FI3YbgIgdiMqaQD8q8IVSlAy%2F9I729Rpt29ySnR0YnAMw6WZIiAqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHz9R7oflO3C7rDJ1CrcA4hXDMMm73QCpUL8viodgqoKwEHY7rL4FtoUL33bss7PwI6oGCikqcCLRDjvEwyN316UPGs95s%2BrUCXlWkzFZK1ktIeqqnJDCpS1rPvp%2BfnXjrUuUcCganOtu86bfVR%2FGvz6b7AFAUcTGbIReywzu9yOnDGi%2BR0WKfjm3p5wu%2BV0H2%2FrkUZfbE%2F6ltSx2cZp2uqgYYGgg7%2BySysH2ZDlUhQ5zIQejM06Um1ZB7szolj8lbk0AJ%2BeBsbbwcFanM%2BOuJEf6NCjlN2OGMvo2T9eQlQj%2FGB2HcxX06m%2BnFSGLu5w3%2Fk01KX14epY38%2FuF4FQi%2BHzyJqyj6DikG6%2BgWnLcuHr3OeUDoKPbtaxN1AsfHUj3moBVpEezhF4R%2FltApLtg0NnyHPjyivveWBDpeVmv7T57Dx184f3gVcXasmWh%2BMyvpQt3%2FTNelaUU40upXy%2BmFDDcWJoQ6TTT0t8yzi7Kw1hT73dvgphE7VMRb9CqLkQeLebaCWjuku3mdZ%2Fdef50%2FrFcfTqheujh3sQ98jd7vz4y8XtWcaT54eGHigYpRR22VOzr5bc3VZr85%2Byz%2BPszdS1aH%2BEGhDNF%2FRAflwoTutOxnbkXC7H%2B0Y2PS7Z6z1XjBgaRfPIzGHnb4K1MJaNsb8GOqUB2I%2FYgbZdRgLIBY0rC4uIYKGCRHEe2k%2FePr4ufJIm%2BWyqD%2BoxkYRawlPLQUv4xw79PWrzl4Fn6vaNh0iKYGDI8FgXnBC6V%2BCkWFlRd57vpRL5sVvBQ8697MjFEPWQf6AsI2NK9Pqv9ejdKdkEf4gIZ4Z3RQRwOVwKIrUj4T5dR6wTvY67MiCdHfwPBCovLf20%2B5y7WOdDSEDpnU3RB2UQzHQvT%2FP8&X-Amz-Signature=9e8822927af22bd12f75f66edf5069935ce87033cf8cab48b3c447ccf1babb43&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3I7LGFL%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQD%2B6QZ3jBst%2Bn4967KVct3qmTKvqYZoSy4d8iUv%2FI3YbgIgdiMqaQD8q8IVSlAy%2F9I729Rpt29ySnR0YnAMw6WZIiAqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHz9R7oflO3C7rDJ1CrcA4hXDMMm73QCpUL8viodgqoKwEHY7rL4FtoUL33bss7PwI6oGCikqcCLRDjvEwyN316UPGs95s%2BrUCXlWkzFZK1ktIeqqnJDCpS1rPvp%2BfnXjrUuUcCganOtu86bfVR%2FGvz6b7AFAUcTGbIReywzu9yOnDGi%2BR0WKfjm3p5wu%2BV0H2%2FrkUZfbE%2F6ltSx2cZp2uqgYYGgg7%2BySysH2ZDlUhQ5zIQejM06Um1ZB7szolj8lbk0AJ%2BeBsbbwcFanM%2BOuJEf6NCjlN2OGMvo2T9eQlQj%2FGB2HcxX06m%2BnFSGLu5w3%2Fk01KX14epY38%2FuF4FQi%2BHzyJqyj6DikG6%2BgWnLcuHr3OeUDoKPbtaxN1AsfHUj3moBVpEezhF4R%2FltApLtg0NnyHPjyivveWBDpeVmv7T57Dx184f3gVcXasmWh%2BMyvpQt3%2FTNelaUU40upXy%2BmFDDcWJoQ6TTT0t8yzi7Kw1hT73dvgphE7VMRb9CqLkQeLebaCWjuku3mdZ%2Fdef50%2FrFcfTqheujh3sQ98jd7vz4y8XtWcaT54eGHigYpRR22VOzr5bc3VZr85%2Byz%2BPszdS1aH%2BEGhDNF%2FRAflwoTutOxnbkXC7H%2B0Y2PS7Z6z1XjBgaRfPIzGHnb4K1MJaNsb8GOqUB2I%2FYgbZdRgLIBY0rC4uIYKGCRHEe2k%2FePr4ufJIm%2BWyqD%2BoxkYRawlPLQUv4xw79PWrzl4Fn6vaNh0iKYGDI8FgXnBC6V%2BCkWFlRd57vpRL5sVvBQ8697MjFEPWQf6AsI2NK9Pqv9ejdKdkEf4gIZ4Z3RQRwOVwKIrUj4T5dR6wTvY67MiCdHfwPBCovLf20%2B5y7WOdDSEDpnU3RB2UQzHQvT%2FP8&X-Amz-Signature=262cce1a08779557c36b8611d1e763cf45914e9da64fbad8df3b0bf9d06951f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3I7LGFL%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQD%2B6QZ3jBst%2Bn4967KVct3qmTKvqYZoSy4d8iUv%2FI3YbgIgdiMqaQD8q8IVSlAy%2F9I729Rpt29ySnR0YnAMw6WZIiAqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHz9R7oflO3C7rDJ1CrcA4hXDMMm73QCpUL8viodgqoKwEHY7rL4FtoUL33bss7PwI6oGCikqcCLRDjvEwyN316UPGs95s%2BrUCXlWkzFZK1ktIeqqnJDCpS1rPvp%2BfnXjrUuUcCganOtu86bfVR%2FGvz6b7AFAUcTGbIReywzu9yOnDGi%2BR0WKfjm3p5wu%2BV0H2%2FrkUZfbE%2F6ltSx2cZp2uqgYYGgg7%2BySysH2ZDlUhQ5zIQejM06Um1ZB7szolj8lbk0AJ%2BeBsbbwcFanM%2BOuJEf6NCjlN2OGMvo2T9eQlQj%2FGB2HcxX06m%2BnFSGLu5w3%2Fk01KX14epY38%2FuF4FQi%2BHzyJqyj6DikG6%2BgWnLcuHr3OeUDoKPbtaxN1AsfHUj3moBVpEezhF4R%2FltApLtg0NnyHPjyivveWBDpeVmv7T57Dx184f3gVcXasmWh%2BMyvpQt3%2FTNelaUU40upXy%2BmFDDcWJoQ6TTT0t8yzi7Kw1hT73dvgphE7VMRb9CqLkQeLebaCWjuku3mdZ%2Fdef50%2FrFcfTqheujh3sQ98jd7vz4y8XtWcaT54eGHigYpRR22VOzr5bc3VZr85%2Byz%2BPszdS1aH%2BEGhDNF%2FRAflwoTutOxnbkXC7H%2B0Y2PS7Z6z1XjBgaRfPIzGHnb4K1MJaNsb8GOqUB2I%2FYgbZdRgLIBY0rC4uIYKGCRHEe2k%2FePr4ufJIm%2BWyqD%2BoxkYRawlPLQUv4xw79PWrzl4Fn6vaNh0iKYGDI8FgXnBC6V%2BCkWFlRd57vpRL5sVvBQ8697MjFEPWQf6AsI2NK9Pqv9ejdKdkEf4gIZ4Z3RQRwOVwKIrUj4T5dR6wTvY67MiCdHfwPBCovLf20%2B5y7WOdDSEDpnU3RB2UQzHQvT%2FP8&X-Amz-Signature=75c73dc8b21c77a4b597fde974f9d45d51121064f246962df25ccb809ec30b85&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3I7LGFL%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQD%2B6QZ3jBst%2Bn4967KVct3qmTKvqYZoSy4d8iUv%2FI3YbgIgdiMqaQD8q8IVSlAy%2F9I729Rpt29ySnR0YnAMw6WZIiAqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHz9R7oflO3C7rDJ1CrcA4hXDMMm73QCpUL8viodgqoKwEHY7rL4FtoUL33bss7PwI6oGCikqcCLRDjvEwyN316UPGs95s%2BrUCXlWkzFZK1ktIeqqnJDCpS1rPvp%2BfnXjrUuUcCganOtu86bfVR%2FGvz6b7AFAUcTGbIReywzu9yOnDGi%2BR0WKfjm3p5wu%2BV0H2%2FrkUZfbE%2F6ltSx2cZp2uqgYYGgg7%2BySysH2ZDlUhQ5zIQejM06Um1ZB7szolj8lbk0AJ%2BeBsbbwcFanM%2BOuJEf6NCjlN2OGMvo2T9eQlQj%2FGB2HcxX06m%2BnFSGLu5w3%2Fk01KX14epY38%2FuF4FQi%2BHzyJqyj6DikG6%2BgWnLcuHr3OeUDoKPbtaxN1AsfHUj3moBVpEezhF4R%2FltApLtg0NnyHPjyivveWBDpeVmv7T57Dx184f3gVcXasmWh%2BMyvpQt3%2FTNelaUU40upXy%2BmFDDcWJoQ6TTT0t8yzi7Kw1hT73dvgphE7VMRb9CqLkQeLebaCWjuku3mdZ%2Fdef50%2FrFcfTqheujh3sQ98jd7vz4y8XtWcaT54eGHigYpRR22VOzr5bc3VZr85%2Byz%2BPszdS1aH%2BEGhDNF%2FRAflwoTutOxnbkXC7H%2B0Y2PS7Z6z1XjBgaRfPIzGHnb4K1MJaNsb8GOqUB2I%2FYgbZdRgLIBY0rC4uIYKGCRHEe2k%2FePr4ufJIm%2BWyqD%2BoxkYRawlPLQUv4xw79PWrzl4Fn6vaNh0iKYGDI8FgXnBC6V%2BCkWFlRd57vpRL5sVvBQ8697MjFEPWQf6AsI2NK9Pqv9ejdKdkEf4gIZ4Z3RQRwOVwKIrUj4T5dR6wTvY67MiCdHfwPBCovLf20%2B5y7WOdDSEDpnU3RB2UQzHQvT%2FP8&X-Amz-Signature=267597acc6d0bf467bc32a889cf5cc05d925dd68e3a1a7617992ed7d12e0b543&X-Amz-SignedHeaders=host&x-id=GetObject)
