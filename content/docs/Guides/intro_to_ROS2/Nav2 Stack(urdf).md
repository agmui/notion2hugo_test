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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCN2WBLI%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAlqOcOiM7Q6C9owcIq4RdzMPG4TcV1mqv5UJYAZsQpFAiB59wdXDwUV8E9J1OLYVAEYmg6H3QCVX2swwsQj7JazACr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMtvGBL%2F%2BPSKjzufT2KtwDfnxooT2%2Bpc5J9mEKzEGvXK77oYsloYbHtTzf7ljcakpBA6aoCSldPtZywV%2BKcHxj73PQ21x59NWacy1ZDoF21zN%2FKp8iKH8YOd%2FOXT0FHR08M%2BIOM9RjTNZbyb6xX5dt9WKJs9I%2BOfVjD1M%2FOMzVIsRf79Md%2B%2Fd9gVZ4TXPqMCJfsjnLjeVIYeJ9xkmMQYFJOQsiJFF3aqxb6pStOzlJxdqLw2WIfz%2FC3fKlsP3Q69upoycw4Epgl7yJt1T3FmwBh2Js6Ts%2B%2BukvodSCUtFZMDRqPy4jHEWKO9CEimniWteUm0iLiysCz94qyNhg4B3uKTUtqIELfQCENWgg%2Bnv5JEH014WBPS6Hvq5wHBxso3uZzHYZWPpVXsTl%2BrUkLrIGzeBHF9WFTlRKLK47%2B1mBqSy5CXl4FBs%2B%2B%2BXHyz9bzGm2egWykJeCmgWsoK%2FygqvQVykOhhy7whlJTtAasnQVeAttp6vtjmwFVOD0BehU8uOp5UHh%2Fbuufz6yqjx5MIM0ECIr2Uc97TV9FBO5r9S20%2FKD2dmlm%2BovTNJOvSM%2BDNYC1EjpTAx0eAii1MF%2BUKwgXpebq9Ud0B4aDFZXgJ1ESnV1eO6IOlckRBHh52UiuU193MOyzojAlvjLLCIw0ZCgwQY6pgHuvAr4Cy6EekE7HO4TTK6rJ8AoZ69NrXjE4uwW3ssbhfjiAxuCw8vBGIo0UtA4pRg%2BlaaJVCxJLN1iX%2BZ8uISctjuF713J%2BXdWgak4wzILRWz9z%2B0AWjw%2BuMTQaLxkRmTP1M79GwoQOr79%2BE4H8%2FbFtVDjRM44qzTQSVc3Y%2FDYzn30ruTulhzetZsMvOKRRz5PVCXq%2B3jq0S2SWkPVAs53CA1LN35G&X-Amz-Signature=ab7f85c856dc48c7c47affaff87aa8ad631bc25417d94f64a3f13a37edbdf14c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCN2WBLI%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAlqOcOiM7Q6C9owcIq4RdzMPG4TcV1mqv5UJYAZsQpFAiB59wdXDwUV8E9J1OLYVAEYmg6H3QCVX2swwsQj7JazACr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMtvGBL%2F%2BPSKjzufT2KtwDfnxooT2%2Bpc5J9mEKzEGvXK77oYsloYbHtTzf7ljcakpBA6aoCSldPtZywV%2BKcHxj73PQ21x59NWacy1ZDoF21zN%2FKp8iKH8YOd%2FOXT0FHR08M%2BIOM9RjTNZbyb6xX5dt9WKJs9I%2BOfVjD1M%2FOMzVIsRf79Md%2B%2Fd9gVZ4TXPqMCJfsjnLjeVIYeJ9xkmMQYFJOQsiJFF3aqxb6pStOzlJxdqLw2WIfz%2FC3fKlsP3Q69upoycw4Epgl7yJt1T3FmwBh2Js6Ts%2B%2BukvodSCUtFZMDRqPy4jHEWKO9CEimniWteUm0iLiysCz94qyNhg4B3uKTUtqIELfQCENWgg%2Bnv5JEH014WBPS6Hvq5wHBxso3uZzHYZWPpVXsTl%2BrUkLrIGzeBHF9WFTlRKLK47%2B1mBqSy5CXl4FBs%2B%2B%2BXHyz9bzGm2egWykJeCmgWsoK%2FygqvQVykOhhy7whlJTtAasnQVeAttp6vtjmwFVOD0BehU8uOp5UHh%2Fbuufz6yqjx5MIM0ECIr2Uc97TV9FBO5r9S20%2FKD2dmlm%2BovTNJOvSM%2BDNYC1EjpTAx0eAii1MF%2BUKwgXpebq9Ud0B4aDFZXgJ1ESnV1eO6IOlckRBHh52UiuU193MOyzojAlvjLLCIw0ZCgwQY6pgHuvAr4Cy6EekE7HO4TTK6rJ8AoZ69NrXjE4uwW3ssbhfjiAxuCw8vBGIo0UtA4pRg%2BlaaJVCxJLN1iX%2BZ8uISctjuF713J%2BXdWgak4wzILRWz9z%2B0AWjw%2BuMTQaLxkRmTP1M79GwoQOr79%2BE4H8%2FbFtVDjRM44qzTQSVc3Y%2FDYzn30ruTulhzetZsMvOKRRz5PVCXq%2B3jq0S2SWkPVAs53CA1LN35G&X-Amz-Signature=d8fbf60ad066b8689bd627ff35bea5c91cdbfeb216e23ab358111a000e22bec1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCN2WBLI%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAlqOcOiM7Q6C9owcIq4RdzMPG4TcV1mqv5UJYAZsQpFAiB59wdXDwUV8E9J1OLYVAEYmg6H3QCVX2swwsQj7JazACr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMtvGBL%2F%2BPSKjzufT2KtwDfnxooT2%2Bpc5J9mEKzEGvXK77oYsloYbHtTzf7ljcakpBA6aoCSldPtZywV%2BKcHxj73PQ21x59NWacy1ZDoF21zN%2FKp8iKH8YOd%2FOXT0FHR08M%2BIOM9RjTNZbyb6xX5dt9WKJs9I%2BOfVjD1M%2FOMzVIsRf79Md%2B%2Fd9gVZ4TXPqMCJfsjnLjeVIYeJ9xkmMQYFJOQsiJFF3aqxb6pStOzlJxdqLw2WIfz%2FC3fKlsP3Q69upoycw4Epgl7yJt1T3FmwBh2Js6Ts%2B%2BukvodSCUtFZMDRqPy4jHEWKO9CEimniWteUm0iLiysCz94qyNhg4B3uKTUtqIELfQCENWgg%2Bnv5JEH014WBPS6Hvq5wHBxso3uZzHYZWPpVXsTl%2BrUkLrIGzeBHF9WFTlRKLK47%2B1mBqSy5CXl4FBs%2B%2B%2BXHyz9bzGm2egWykJeCmgWsoK%2FygqvQVykOhhy7whlJTtAasnQVeAttp6vtjmwFVOD0BehU8uOp5UHh%2Fbuufz6yqjx5MIM0ECIr2Uc97TV9FBO5r9S20%2FKD2dmlm%2BovTNJOvSM%2BDNYC1EjpTAx0eAii1MF%2BUKwgXpebq9Ud0B4aDFZXgJ1ESnV1eO6IOlckRBHh52UiuU193MOyzojAlvjLLCIw0ZCgwQY6pgHuvAr4Cy6EekE7HO4TTK6rJ8AoZ69NrXjE4uwW3ssbhfjiAxuCw8vBGIo0UtA4pRg%2BlaaJVCxJLN1iX%2BZ8uISctjuF713J%2BXdWgak4wzILRWz9z%2B0AWjw%2BuMTQaLxkRmTP1M79GwoQOr79%2BE4H8%2FbFtVDjRM44qzTQSVc3Y%2FDYzn30ruTulhzetZsMvOKRRz5PVCXq%2B3jq0S2SWkPVAs53CA1LN35G&X-Amz-Signature=97b3752591be70524fa6c6f0ff25fc74ec566215589e5ba31b7c87af5cb4ba6c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCN2WBLI%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAlqOcOiM7Q6C9owcIq4RdzMPG4TcV1mqv5UJYAZsQpFAiB59wdXDwUV8E9J1OLYVAEYmg6H3QCVX2swwsQj7JazACr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMtvGBL%2F%2BPSKjzufT2KtwDfnxooT2%2Bpc5J9mEKzEGvXK77oYsloYbHtTzf7ljcakpBA6aoCSldPtZywV%2BKcHxj73PQ21x59NWacy1ZDoF21zN%2FKp8iKH8YOd%2FOXT0FHR08M%2BIOM9RjTNZbyb6xX5dt9WKJs9I%2BOfVjD1M%2FOMzVIsRf79Md%2B%2Fd9gVZ4TXPqMCJfsjnLjeVIYeJ9xkmMQYFJOQsiJFF3aqxb6pStOzlJxdqLw2WIfz%2FC3fKlsP3Q69upoycw4Epgl7yJt1T3FmwBh2Js6Ts%2B%2BukvodSCUtFZMDRqPy4jHEWKO9CEimniWteUm0iLiysCz94qyNhg4B3uKTUtqIELfQCENWgg%2Bnv5JEH014WBPS6Hvq5wHBxso3uZzHYZWPpVXsTl%2BrUkLrIGzeBHF9WFTlRKLK47%2B1mBqSy5CXl4FBs%2B%2B%2BXHyz9bzGm2egWykJeCmgWsoK%2FygqvQVykOhhy7whlJTtAasnQVeAttp6vtjmwFVOD0BehU8uOp5UHh%2Fbuufz6yqjx5MIM0ECIr2Uc97TV9FBO5r9S20%2FKD2dmlm%2BovTNJOvSM%2BDNYC1EjpTAx0eAii1MF%2BUKwgXpebq9Ud0B4aDFZXgJ1ESnV1eO6IOlckRBHh52UiuU193MOyzojAlvjLLCIw0ZCgwQY6pgHuvAr4Cy6EekE7HO4TTK6rJ8AoZ69NrXjE4uwW3ssbhfjiAxuCw8vBGIo0UtA4pRg%2BlaaJVCxJLN1iX%2BZ8uISctjuF713J%2BXdWgak4wzILRWz9z%2B0AWjw%2BuMTQaLxkRmTP1M79GwoQOr79%2BE4H8%2FbFtVDjRM44qzTQSVc3Y%2FDYzn30ruTulhzetZsMvOKRRz5PVCXq%2B3jq0S2SWkPVAs53CA1LN35G&X-Amz-Signature=d6643cd865030491ec183e9859bc217db34fd801fbb07181e4fcc9992ebe77b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCN2WBLI%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAlqOcOiM7Q6C9owcIq4RdzMPG4TcV1mqv5UJYAZsQpFAiB59wdXDwUV8E9J1OLYVAEYmg6H3QCVX2swwsQj7JazACr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMtvGBL%2F%2BPSKjzufT2KtwDfnxooT2%2Bpc5J9mEKzEGvXK77oYsloYbHtTzf7ljcakpBA6aoCSldPtZywV%2BKcHxj73PQ21x59NWacy1ZDoF21zN%2FKp8iKH8YOd%2FOXT0FHR08M%2BIOM9RjTNZbyb6xX5dt9WKJs9I%2BOfVjD1M%2FOMzVIsRf79Md%2B%2Fd9gVZ4TXPqMCJfsjnLjeVIYeJ9xkmMQYFJOQsiJFF3aqxb6pStOzlJxdqLw2WIfz%2FC3fKlsP3Q69upoycw4Epgl7yJt1T3FmwBh2Js6Ts%2B%2BukvodSCUtFZMDRqPy4jHEWKO9CEimniWteUm0iLiysCz94qyNhg4B3uKTUtqIELfQCENWgg%2Bnv5JEH014WBPS6Hvq5wHBxso3uZzHYZWPpVXsTl%2BrUkLrIGzeBHF9WFTlRKLK47%2B1mBqSy5CXl4FBs%2B%2B%2BXHyz9bzGm2egWykJeCmgWsoK%2FygqvQVykOhhy7whlJTtAasnQVeAttp6vtjmwFVOD0BehU8uOp5UHh%2Fbuufz6yqjx5MIM0ECIr2Uc97TV9FBO5r9S20%2FKD2dmlm%2BovTNJOvSM%2BDNYC1EjpTAx0eAii1MF%2BUKwgXpebq9Ud0B4aDFZXgJ1ESnV1eO6IOlckRBHh52UiuU193MOyzojAlvjLLCIw0ZCgwQY6pgHuvAr4Cy6EekE7HO4TTK6rJ8AoZ69NrXjE4uwW3ssbhfjiAxuCw8vBGIo0UtA4pRg%2BlaaJVCxJLN1iX%2BZ8uISctjuF713J%2BXdWgak4wzILRWz9z%2B0AWjw%2BuMTQaLxkRmTP1M79GwoQOr79%2BE4H8%2FbFtVDjRM44qzTQSVc3Y%2FDYzn30ruTulhzetZsMvOKRRz5PVCXq%2B3jq0S2SWkPVAs53CA1LN35G&X-Amz-Signature=1e09cb51a6ac1c8896c907f1849b9bb92cc270d832952a523713ca0f7eea1193&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCN2WBLI%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAlqOcOiM7Q6C9owcIq4RdzMPG4TcV1mqv5UJYAZsQpFAiB59wdXDwUV8E9J1OLYVAEYmg6H3QCVX2swwsQj7JazACr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMtvGBL%2F%2BPSKjzufT2KtwDfnxooT2%2Bpc5J9mEKzEGvXK77oYsloYbHtTzf7ljcakpBA6aoCSldPtZywV%2BKcHxj73PQ21x59NWacy1ZDoF21zN%2FKp8iKH8YOd%2FOXT0FHR08M%2BIOM9RjTNZbyb6xX5dt9WKJs9I%2BOfVjD1M%2FOMzVIsRf79Md%2B%2Fd9gVZ4TXPqMCJfsjnLjeVIYeJ9xkmMQYFJOQsiJFF3aqxb6pStOzlJxdqLw2WIfz%2FC3fKlsP3Q69upoycw4Epgl7yJt1T3FmwBh2Js6Ts%2B%2BukvodSCUtFZMDRqPy4jHEWKO9CEimniWteUm0iLiysCz94qyNhg4B3uKTUtqIELfQCENWgg%2Bnv5JEH014WBPS6Hvq5wHBxso3uZzHYZWPpVXsTl%2BrUkLrIGzeBHF9WFTlRKLK47%2B1mBqSy5CXl4FBs%2B%2B%2BXHyz9bzGm2egWykJeCmgWsoK%2FygqvQVykOhhy7whlJTtAasnQVeAttp6vtjmwFVOD0BehU8uOp5UHh%2Fbuufz6yqjx5MIM0ECIr2Uc97TV9FBO5r9S20%2FKD2dmlm%2BovTNJOvSM%2BDNYC1EjpTAx0eAii1MF%2BUKwgXpebq9Ud0B4aDFZXgJ1ESnV1eO6IOlckRBHh52UiuU193MOyzojAlvjLLCIw0ZCgwQY6pgHuvAr4Cy6EekE7HO4TTK6rJ8AoZ69NrXjE4uwW3ssbhfjiAxuCw8vBGIo0UtA4pRg%2BlaaJVCxJLN1iX%2BZ8uISctjuF713J%2BXdWgak4wzILRWz9z%2B0AWjw%2BuMTQaLxkRmTP1M79GwoQOr79%2BE4H8%2FbFtVDjRM44qzTQSVc3Y%2FDYzn30ruTulhzetZsMvOKRRz5PVCXq%2B3jq0S2SWkPVAs53CA1LN35G&X-Amz-Signature=dbb528f75eb504132f672d79b0e61263558d96dace3a0c28deefc48a139eb350&X-Amz-SignedHeaders=host&x-id=GetObject)
