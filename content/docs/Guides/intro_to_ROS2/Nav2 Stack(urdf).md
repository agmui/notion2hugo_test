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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ULVBYM%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH%2BHBX49J5ENc6XSNXglBVmuK5SSk79AdfFNDTKnKIiAIgCSuZArd51Qbgzyl47IX8ud7bY5iu9x9l5c3YU5mf9cAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDEOi0oeBrvWYE%2FbJrSrcA3RyD7snhyUgdJKI1lXXAkUwKYewe3bnPw6%2BAcGJu9wcpS3eho9cxl4Q9VFTdGTKhXKTFfYXKT%2FEiwyKppCqRGlFAQS%2FuJ9tNAdJdmwzCR7PRll6C9wiAwZ6yPd7GPVyiJag9veK9xPxPXoCly6o2eqbVV6wtpPCiAA166kScwaqR6LL3Ym0xa3jnkq0IfjdBfjk%2B%2Fu05dRQyPg2hKZaSKjBlQPY4OQf9t2HykLu6YM86hHYSRZ8eKLrnmxFhW%2FWF29JOayX%2Bv4IsbCFHUfB2R6mSBTZ1QHrfO4kRs0tpivKjJmrgKdg9CaZywGjxRo5kxQZcfnSA%2BEP5wUdteruMccIxeCesUocEuaenwI9HTj%2FHg0XUWcmpvfeNfYomOfgIIPcNSLZ10eb1Pwq1rrFpl0QQVOO4aqA9rWh2Ui2NHpZx3vaJQxqR%2F5TtpHypUXg2xndCxYXoYGB%2B1MlVZXlH77LtASX7a2IfHEvyaUwVquNMTHWmQH%2BsMsv5RYU686qFZCXa1%2ByhG0dKMmz4O8v7gQiUJyvsk38TIVMBp5WH94U2wNC5auVUMcuUATzima24H8A6AV1%2F4Aa7AItTUrdgnfNXAGCuxDENhkeQkQMqjewESVXOIrncKGFjM1RMMaWocEGOqUBiemPiU3uKvxtTKBCOy4Nx9ZjBHWqL5PEJutYKwFBvyB77n8uzQw2ydPRLNtWFFjyeISeIovbPIcvr5sUDOvAk7X8vPA29Rx4lg%2BNNF4r4piPbdtFHJoSKdLh0OllfZ6s9wkpMLVCgpj7hkFPu01%2FdppjsJEo1VMxs0x1UvrAICsIjzU03yfICdS96pEEbiC5EUb9eG2EjNrH%2BB7spXMCU7dlD70Y&X-Amz-Signature=f1a28950d3ccc4c7418412395feedce16594d0d131c040b0211c67134fac8f3d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ULVBYM%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH%2BHBX49J5ENc6XSNXglBVmuK5SSk79AdfFNDTKnKIiAIgCSuZArd51Qbgzyl47IX8ud7bY5iu9x9l5c3YU5mf9cAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDEOi0oeBrvWYE%2FbJrSrcA3RyD7snhyUgdJKI1lXXAkUwKYewe3bnPw6%2BAcGJu9wcpS3eho9cxl4Q9VFTdGTKhXKTFfYXKT%2FEiwyKppCqRGlFAQS%2FuJ9tNAdJdmwzCR7PRll6C9wiAwZ6yPd7GPVyiJag9veK9xPxPXoCly6o2eqbVV6wtpPCiAA166kScwaqR6LL3Ym0xa3jnkq0IfjdBfjk%2B%2Fu05dRQyPg2hKZaSKjBlQPY4OQf9t2HykLu6YM86hHYSRZ8eKLrnmxFhW%2FWF29JOayX%2Bv4IsbCFHUfB2R6mSBTZ1QHrfO4kRs0tpivKjJmrgKdg9CaZywGjxRo5kxQZcfnSA%2BEP5wUdteruMccIxeCesUocEuaenwI9HTj%2FHg0XUWcmpvfeNfYomOfgIIPcNSLZ10eb1Pwq1rrFpl0QQVOO4aqA9rWh2Ui2NHpZx3vaJQxqR%2F5TtpHypUXg2xndCxYXoYGB%2B1MlVZXlH77LtASX7a2IfHEvyaUwVquNMTHWmQH%2BsMsv5RYU686qFZCXa1%2ByhG0dKMmz4O8v7gQiUJyvsk38TIVMBp5WH94U2wNC5auVUMcuUATzima24H8A6AV1%2F4Aa7AItTUrdgnfNXAGCuxDENhkeQkQMqjewESVXOIrncKGFjM1RMMaWocEGOqUBiemPiU3uKvxtTKBCOy4Nx9ZjBHWqL5PEJutYKwFBvyB77n8uzQw2ydPRLNtWFFjyeISeIovbPIcvr5sUDOvAk7X8vPA29Rx4lg%2BNNF4r4piPbdtFHJoSKdLh0OllfZ6s9wkpMLVCgpj7hkFPu01%2FdppjsJEo1VMxs0x1UvrAICsIjzU03yfICdS96pEEbiC5EUb9eG2EjNrH%2BB7spXMCU7dlD70Y&X-Amz-Signature=e0da5daaa216d974421983676a6fb0107fc2a88edcb36876d135b5899f280fad&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ULVBYM%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH%2BHBX49J5ENc6XSNXglBVmuK5SSk79AdfFNDTKnKIiAIgCSuZArd51Qbgzyl47IX8ud7bY5iu9x9l5c3YU5mf9cAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDEOi0oeBrvWYE%2FbJrSrcA3RyD7snhyUgdJKI1lXXAkUwKYewe3bnPw6%2BAcGJu9wcpS3eho9cxl4Q9VFTdGTKhXKTFfYXKT%2FEiwyKppCqRGlFAQS%2FuJ9tNAdJdmwzCR7PRll6C9wiAwZ6yPd7GPVyiJag9veK9xPxPXoCly6o2eqbVV6wtpPCiAA166kScwaqR6LL3Ym0xa3jnkq0IfjdBfjk%2B%2Fu05dRQyPg2hKZaSKjBlQPY4OQf9t2HykLu6YM86hHYSRZ8eKLrnmxFhW%2FWF29JOayX%2Bv4IsbCFHUfB2R6mSBTZ1QHrfO4kRs0tpivKjJmrgKdg9CaZywGjxRo5kxQZcfnSA%2BEP5wUdteruMccIxeCesUocEuaenwI9HTj%2FHg0XUWcmpvfeNfYomOfgIIPcNSLZ10eb1Pwq1rrFpl0QQVOO4aqA9rWh2Ui2NHpZx3vaJQxqR%2F5TtpHypUXg2xndCxYXoYGB%2B1MlVZXlH77LtASX7a2IfHEvyaUwVquNMTHWmQH%2BsMsv5RYU686qFZCXa1%2ByhG0dKMmz4O8v7gQiUJyvsk38TIVMBp5WH94U2wNC5auVUMcuUATzima24H8A6AV1%2F4Aa7AItTUrdgnfNXAGCuxDENhkeQkQMqjewESVXOIrncKGFjM1RMMaWocEGOqUBiemPiU3uKvxtTKBCOy4Nx9ZjBHWqL5PEJutYKwFBvyB77n8uzQw2ydPRLNtWFFjyeISeIovbPIcvr5sUDOvAk7X8vPA29Rx4lg%2BNNF4r4piPbdtFHJoSKdLh0OllfZ6s9wkpMLVCgpj7hkFPu01%2FdppjsJEo1VMxs0x1UvrAICsIjzU03yfICdS96pEEbiC5EUb9eG2EjNrH%2BB7spXMCU7dlD70Y&X-Amz-Signature=2f448e8d206c166ce41d41e4fa1f0bc19cff21f2a696d87a3f197ba3c52ffeeb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ULVBYM%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH%2BHBX49J5ENc6XSNXglBVmuK5SSk79AdfFNDTKnKIiAIgCSuZArd51Qbgzyl47IX8ud7bY5iu9x9l5c3YU5mf9cAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDEOi0oeBrvWYE%2FbJrSrcA3RyD7snhyUgdJKI1lXXAkUwKYewe3bnPw6%2BAcGJu9wcpS3eho9cxl4Q9VFTdGTKhXKTFfYXKT%2FEiwyKppCqRGlFAQS%2FuJ9tNAdJdmwzCR7PRll6C9wiAwZ6yPd7GPVyiJag9veK9xPxPXoCly6o2eqbVV6wtpPCiAA166kScwaqR6LL3Ym0xa3jnkq0IfjdBfjk%2B%2Fu05dRQyPg2hKZaSKjBlQPY4OQf9t2HykLu6YM86hHYSRZ8eKLrnmxFhW%2FWF29JOayX%2Bv4IsbCFHUfB2R6mSBTZ1QHrfO4kRs0tpivKjJmrgKdg9CaZywGjxRo5kxQZcfnSA%2BEP5wUdteruMccIxeCesUocEuaenwI9HTj%2FHg0XUWcmpvfeNfYomOfgIIPcNSLZ10eb1Pwq1rrFpl0QQVOO4aqA9rWh2Ui2NHpZx3vaJQxqR%2F5TtpHypUXg2xndCxYXoYGB%2B1MlVZXlH77LtASX7a2IfHEvyaUwVquNMTHWmQH%2BsMsv5RYU686qFZCXa1%2ByhG0dKMmz4O8v7gQiUJyvsk38TIVMBp5WH94U2wNC5auVUMcuUATzima24H8A6AV1%2F4Aa7AItTUrdgnfNXAGCuxDENhkeQkQMqjewESVXOIrncKGFjM1RMMaWocEGOqUBiemPiU3uKvxtTKBCOy4Nx9ZjBHWqL5PEJutYKwFBvyB77n8uzQw2ydPRLNtWFFjyeISeIovbPIcvr5sUDOvAk7X8vPA29Rx4lg%2BNNF4r4piPbdtFHJoSKdLh0OllfZ6s9wkpMLVCgpj7hkFPu01%2FdppjsJEo1VMxs0x1UvrAICsIjzU03yfICdS96pEEbiC5EUb9eG2EjNrH%2BB7spXMCU7dlD70Y&X-Amz-Signature=06932dbb39fd5b9613c75eee587f3d45df46ae354f4eddf70bea511cab2015b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ULVBYM%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH%2BHBX49J5ENc6XSNXglBVmuK5SSk79AdfFNDTKnKIiAIgCSuZArd51Qbgzyl47IX8ud7bY5iu9x9l5c3YU5mf9cAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDEOi0oeBrvWYE%2FbJrSrcA3RyD7snhyUgdJKI1lXXAkUwKYewe3bnPw6%2BAcGJu9wcpS3eho9cxl4Q9VFTdGTKhXKTFfYXKT%2FEiwyKppCqRGlFAQS%2FuJ9tNAdJdmwzCR7PRll6C9wiAwZ6yPd7GPVyiJag9veK9xPxPXoCly6o2eqbVV6wtpPCiAA166kScwaqR6LL3Ym0xa3jnkq0IfjdBfjk%2B%2Fu05dRQyPg2hKZaSKjBlQPY4OQf9t2HykLu6YM86hHYSRZ8eKLrnmxFhW%2FWF29JOayX%2Bv4IsbCFHUfB2R6mSBTZ1QHrfO4kRs0tpivKjJmrgKdg9CaZywGjxRo5kxQZcfnSA%2BEP5wUdteruMccIxeCesUocEuaenwI9HTj%2FHg0XUWcmpvfeNfYomOfgIIPcNSLZ10eb1Pwq1rrFpl0QQVOO4aqA9rWh2Ui2NHpZx3vaJQxqR%2F5TtpHypUXg2xndCxYXoYGB%2B1MlVZXlH77LtASX7a2IfHEvyaUwVquNMTHWmQH%2BsMsv5RYU686qFZCXa1%2ByhG0dKMmz4O8v7gQiUJyvsk38TIVMBp5WH94U2wNC5auVUMcuUATzima24H8A6AV1%2F4Aa7AItTUrdgnfNXAGCuxDENhkeQkQMqjewESVXOIrncKGFjM1RMMaWocEGOqUBiemPiU3uKvxtTKBCOy4Nx9ZjBHWqL5PEJutYKwFBvyB77n8uzQw2ydPRLNtWFFjyeISeIovbPIcvr5sUDOvAk7X8vPA29Rx4lg%2BNNF4r4piPbdtFHJoSKdLh0OllfZ6s9wkpMLVCgpj7hkFPu01%2FdppjsJEo1VMxs0x1UvrAICsIjzU03yfICdS96pEEbiC5EUb9eG2EjNrH%2BB7spXMCU7dlD70Y&X-Amz-Signature=0ebf44ddf5792245219d7591091bb57fc85e92a04dce51bcf17ae7f9db931635&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ULVBYM%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH%2BHBX49J5ENc6XSNXglBVmuK5SSk79AdfFNDTKnKIiAIgCSuZArd51Qbgzyl47IX8ud7bY5iu9x9l5c3YU5mf9cAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDEOi0oeBrvWYE%2FbJrSrcA3RyD7snhyUgdJKI1lXXAkUwKYewe3bnPw6%2BAcGJu9wcpS3eho9cxl4Q9VFTdGTKhXKTFfYXKT%2FEiwyKppCqRGlFAQS%2FuJ9tNAdJdmwzCR7PRll6C9wiAwZ6yPd7GPVyiJag9veK9xPxPXoCly6o2eqbVV6wtpPCiAA166kScwaqR6LL3Ym0xa3jnkq0IfjdBfjk%2B%2Fu05dRQyPg2hKZaSKjBlQPY4OQf9t2HykLu6YM86hHYSRZ8eKLrnmxFhW%2FWF29JOayX%2Bv4IsbCFHUfB2R6mSBTZ1QHrfO4kRs0tpivKjJmrgKdg9CaZywGjxRo5kxQZcfnSA%2BEP5wUdteruMccIxeCesUocEuaenwI9HTj%2FHg0XUWcmpvfeNfYomOfgIIPcNSLZ10eb1Pwq1rrFpl0QQVOO4aqA9rWh2Ui2NHpZx3vaJQxqR%2F5TtpHypUXg2xndCxYXoYGB%2B1MlVZXlH77LtASX7a2IfHEvyaUwVquNMTHWmQH%2BsMsv5RYU686qFZCXa1%2ByhG0dKMmz4O8v7gQiUJyvsk38TIVMBp5WH94U2wNC5auVUMcuUATzima24H8A6AV1%2F4Aa7AItTUrdgnfNXAGCuxDENhkeQkQMqjewESVXOIrncKGFjM1RMMaWocEGOqUBiemPiU3uKvxtTKBCOy4Nx9ZjBHWqL5PEJutYKwFBvyB77n8uzQw2ydPRLNtWFFjyeISeIovbPIcvr5sUDOvAk7X8vPA29Rx4lg%2BNNF4r4piPbdtFHJoSKdLh0OllfZ6s9wkpMLVCgpj7hkFPu01%2FdppjsJEo1VMxs0x1UvrAICsIjzU03yfICdS96pEEbiC5EUb9eG2EjNrH%2BB7spXMCU7dlD70Y&X-Amz-Signature=b2904bf2d179bee6e1e50e369685597e58c0ada938742ffea40c01693adb7681&X-Amz-SignedHeaders=host&x-id=GetObject)
