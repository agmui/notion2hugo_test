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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TUGS7RR%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQD037TxfwvX42iRYwgSmakWvg05DzvyEdbllT%2Fkd33QBAIhAPSB5pl3Is86qib2Vad2OfXz%2BdLM%2FC4HGSTvm%2FzkBo6VKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlWhdh2kSrEDwh3uQq3APD0bEgcpjcwZ9crv9AEonhoOmvwxnlgyrU%2Bqg2ySk2imLztt0S%2FlEjfVPmGtrTS%2B2aOCpjuI139sALJJ2%2BwXLSH1czIvQi1D%2FCjINBHFSHNMBj4clwinaTvC7%2FTceyVWG%2BFqEVhZrRmo1Pgr5gbjer%2FiLL%2B9AxaI1cx20eDs4aiic%2FnhE08TkSp0%2BH9Ibyicn9wtIl1whAl0nCZsAKnLKbo6ZQOay%2Bdi7fNIXfOG2jNN%2FfJXoidJV%2Bu38mEkcM5C5dhMWImqFKg8B2hRQvdhseb4%2Bp6BJdT3CIXgX4zHt918MuDX6ua3wDvTMZGFF9ETlWV49FwS%2F8HudpM%2FQa6fwPSIPBpleViXp4RQzRtwRJv2j78MVcsbVUjQa7jV3XF6cX2Avom4VTSbzNAMV8iy6CuAggZkQarFBxEr0585afR%2Fl47ku6J95opqp%2B68HcFqYoIdd2QDo1CPN86CQhNVZxeQ9Lj76lNvTpXuwoEwUqEqj5ZbDT3HvTttgKzIz6jIyP%2B0CYuxC0a%2FlkNcHqWPdU0AHP%2BfaiOWLUmM6Xgc5ARGvumP6lPiA7ghk8%2B7TM1Hnj2N07tM90R%2FxtgI8NLF4bhzirnncDVzK9t7kVrbK2Mc2PaINpX3BKuqC4JDCyr%2FTBBjqkAWXl1W96MOigrzR510nuvAA2xf1%2FELqxQFt4xvFQdXW7pcb1Tm32hQI2yGHOOHQ90iyKPoLYehlTc%2F9inecIpzJOTvN4crJv%2FkRXoQ9cZHYfwu%2FXbiErPPYZOnNawr3RAw0V5AgH9FhLQeAPSzraS2WjUaUYeqrJtHt3S43oXb4dH6eJMW%2BDFG3P5DgA4xk7sa1bopjeaSyqIAWHoqhn7zThYlpm&X-Amz-Signature=08945088a3787a745b9494b8bc86a3c3a79c816ede1e66452b5486803d38a46a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TUGS7RR%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQD037TxfwvX42iRYwgSmakWvg05DzvyEdbllT%2Fkd33QBAIhAPSB5pl3Is86qib2Vad2OfXz%2BdLM%2FC4HGSTvm%2FzkBo6VKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlWhdh2kSrEDwh3uQq3APD0bEgcpjcwZ9crv9AEonhoOmvwxnlgyrU%2Bqg2ySk2imLztt0S%2FlEjfVPmGtrTS%2B2aOCpjuI139sALJJ2%2BwXLSH1czIvQi1D%2FCjINBHFSHNMBj4clwinaTvC7%2FTceyVWG%2BFqEVhZrRmo1Pgr5gbjer%2FiLL%2B9AxaI1cx20eDs4aiic%2FnhE08TkSp0%2BH9Ibyicn9wtIl1whAl0nCZsAKnLKbo6ZQOay%2Bdi7fNIXfOG2jNN%2FfJXoidJV%2Bu38mEkcM5C5dhMWImqFKg8B2hRQvdhseb4%2Bp6BJdT3CIXgX4zHt918MuDX6ua3wDvTMZGFF9ETlWV49FwS%2F8HudpM%2FQa6fwPSIPBpleViXp4RQzRtwRJv2j78MVcsbVUjQa7jV3XF6cX2Avom4VTSbzNAMV8iy6CuAggZkQarFBxEr0585afR%2Fl47ku6J95opqp%2B68HcFqYoIdd2QDo1CPN86CQhNVZxeQ9Lj76lNvTpXuwoEwUqEqj5ZbDT3HvTttgKzIz6jIyP%2B0CYuxC0a%2FlkNcHqWPdU0AHP%2BfaiOWLUmM6Xgc5ARGvumP6lPiA7ghk8%2B7TM1Hnj2N07tM90R%2FxtgI8NLF4bhzirnncDVzK9t7kVrbK2Mc2PaINpX3BKuqC4JDCyr%2FTBBjqkAWXl1W96MOigrzR510nuvAA2xf1%2FELqxQFt4xvFQdXW7pcb1Tm32hQI2yGHOOHQ90iyKPoLYehlTc%2F9inecIpzJOTvN4crJv%2FkRXoQ9cZHYfwu%2FXbiErPPYZOnNawr3RAw0V5AgH9FhLQeAPSzraS2WjUaUYeqrJtHt3S43oXb4dH6eJMW%2BDFG3P5DgA4xk7sa1bopjeaSyqIAWHoqhn7zThYlpm&X-Amz-Signature=cdb9109acfedfab815dc4ccb0f94706a8767d586ca94b3698554bc6a564ded38&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TUGS7RR%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQD037TxfwvX42iRYwgSmakWvg05DzvyEdbllT%2Fkd33QBAIhAPSB5pl3Is86qib2Vad2OfXz%2BdLM%2FC4HGSTvm%2FzkBo6VKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlWhdh2kSrEDwh3uQq3APD0bEgcpjcwZ9crv9AEonhoOmvwxnlgyrU%2Bqg2ySk2imLztt0S%2FlEjfVPmGtrTS%2B2aOCpjuI139sALJJ2%2BwXLSH1czIvQi1D%2FCjINBHFSHNMBj4clwinaTvC7%2FTceyVWG%2BFqEVhZrRmo1Pgr5gbjer%2FiLL%2B9AxaI1cx20eDs4aiic%2FnhE08TkSp0%2BH9Ibyicn9wtIl1whAl0nCZsAKnLKbo6ZQOay%2Bdi7fNIXfOG2jNN%2FfJXoidJV%2Bu38mEkcM5C5dhMWImqFKg8B2hRQvdhseb4%2Bp6BJdT3CIXgX4zHt918MuDX6ua3wDvTMZGFF9ETlWV49FwS%2F8HudpM%2FQa6fwPSIPBpleViXp4RQzRtwRJv2j78MVcsbVUjQa7jV3XF6cX2Avom4VTSbzNAMV8iy6CuAggZkQarFBxEr0585afR%2Fl47ku6J95opqp%2B68HcFqYoIdd2QDo1CPN86CQhNVZxeQ9Lj76lNvTpXuwoEwUqEqj5ZbDT3HvTttgKzIz6jIyP%2B0CYuxC0a%2FlkNcHqWPdU0AHP%2BfaiOWLUmM6Xgc5ARGvumP6lPiA7ghk8%2B7TM1Hnj2N07tM90R%2FxtgI8NLF4bhzirnncDVzK9t7kVrbK2Mc2PaINpX3BKuqC4JDCyr%2FTBBjqkAWXl1W96MOigrzR510nuvAA2xf1%2FELqxQFt4xvFQdXW7pcb1Tm32hQI2yGHOOHQ90iyKPoLYehlTc%2F9inecIpzJOTvN4crJv%2FkRXoQ9cZHYfwu%2FXbiErPPYZOnNawr3RAw0V5AgH9FhLQeAPSzraS2WjUaUYeqrJtHt3S43oXb4dH6eJMW%2BDFG3P5DgA4xk7sa1bopjeaSyqIAWHoqhn7zThYlpm&X-Amz-Signature=c08125dc921bbe690129d5c09876469fb70e11469d08ba8ea190106952edfc6c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TUGS7RR%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQD037TxfwvX42iRYwgSmakWvg05DzvyEdbllT%2Fkd33QBAIhAPSB5pl3Is86qib2Vad2OfXz%2BdLM%2FC4HGSTvm%2FzkBo6VKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlWhdh2kSrEDwh3uQq3APD0bEgcpjcwZ9crv9AEonhoOmvwxnlgyrU%2Bqg2ySk2imLztt0S%2FlEjfVPmGtrTS%2B2aOCpjuI139sALJJ2%2BwXLSH1czIvQi1D%2FCjINBHFSHNMBj4clwinaTvC7%2FTceyVWG%2BFqEVhZrRmo1Pgr5gbjer%2FiLL%2B9AxaI1cx20eDs4aiic%2FnhE08TkSp0%2BH9Ibyicn9wtIl1whAl0nCZsAKnLKbo6ZQOay%2Bdi7fNIXfOG2jNN%2FfJXoidJV%2Bu38mEkcM5C5dhMWImqFKg8B2hRQvdhseb4%2Bp6BJdT3CIXgX4zHt918MuDX6ua3wDvTMZGFF9ETlWV49FwS%2F8HudpM%2FQa6fwPSIPBpleViXp4RQzRtwRJv2j78MVcsbVUjQa7jV3XF6cX2Avom4VTSbzNAMV8iy6CuAggZkQarFBxEr0585afR%2Fl47ku6J95opqp%2B68HcFqYoIdd2QDo1CPN86CQhNVZxeQ9Lj76lNvTpXuwoEwUqEqj5ZbDT3HvTttgKzIz6jIyP%2B0CYuxC0a%2FlkNcHqWPdU0AHP%2BfaiOWLUmM6Xgc5ARGvumP6lPiA7ghk8%2B7TM1Hnj2N07tM90R%2FxtgI8NLF4bhzirnncDVzK9t7kVrbK2Mc2PaINpX3BKuqC4JDCyr%2FTBBjqkAWXl1W96MOigrzR510nuvAA2xf1%2FELqxQFt4xvFQdXW7pcb1Tm32hQI2yGHOOHQ90iyKPoLYehlTc%2F9inecIpzJOTvN4crJv%2FkRXoQ9cZHYfwu%2FXbiErPPYZOnNawr3RAw0V5AgH9FhLQeAPSzraS2WjUaUYeqrJtHt3S43oXb4dH6eJMW%2BDFG3P5DgA4xk7sa1bopjeaSyqIAWHoqhn7zThYlpm&X-Amz-Signature=1a7edf9a4c34a9b8542134faafef6f7c43a58f461a93e7fe6cb37c3709ba20e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TUGS7RR%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQD037TxfwvX42iRYwgSmakWvg05DzvyEdbllT%2Fkd33QBAIhAPSB5pl3Is86qib2Vad2OfXz%2BdLM%2FC4HGSTvm%2FzkBo6VKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlWhdh2kSrEDwh3uQq3APD0bEgcpjcwZ9crv9AEonhoOmvwxnlgyrU%2Bqg2ySk2imLztt0S%2FlEjfVPmGtrTS%2B2aOCpjuI139sALJJ2%2BwXLSH1czIvQi1D%2FCjINBHFSHNMBj4clwinaTvC7%2FTceyVWG%2BFqEVhZrRmo1Pgr5gbjer%2FiLL%2B9AxaI1cx20eDs4aiic%2FnhE08TkSp0%2BH9Ibyicn9wtIl1whAl0nCZsAKnLKbo6ZQOay%2Bdi7fNIXfOG2jNN%2FfJXoidJV%2Bu38mEkcM5C5dhMWImqFKg8B2hRQvdhseb4%2Bp6BJdT3CIXgX4zHt918MuDX6ua3wDvTMZGFF9ETlWV49FwS%2F8HudpM%2FQa6fwPSIPBpleViXp4RQzRtwRJv2j78MVcsbVUjQa7jV3XF6cX2Avom4VTSbzNAMV8iy6CuAggZkQarFBxEr0585afR%2Fl47ku6J95opqp%2B68HcFqYoIdd2QDo1CPN86CQhNVZxeQ9Lj76lNvTpXuwoEwUqEqj5ZbDT3HvTttgKzIz6jIyP%2B0CYuxC0a%2FlkNcHqWPdU0AHP%2BfaiOWLUmM6Xgc5ARGvumP6lPiA7ghk8%2B7TM1Hnj2N07tM90R%2FxtgI8NLF4bhzirnncDVzK9t7kVrbK2Mc2PaINpX3BKuqC4JDCyr%2FTBBjqkAWXl1W96MOigrzR510nuvAA2xf1%2FELqxQFt4xvFQdXW7pcb1Tm32hQI2yGHOOHQ90iyKPoLYehlTc%2F9inecIpzJOTvN4crJv%2FkRXoQ9cZHYfwu%2FXbiErPPYZOnNawr3RAw0V5AgH9FhLQeAPSzraS2WjUaUYeqrJtHt3S43oXb4dH6eJMW%2BDFG3P5DgA4xk7sa1bopjeaSyqIAWHoqhn7zThYlpm&X-Amz-Signature=4c41806f7c641e83fdac648cc7d9d5d839b2ef6b20cd34b0926130ed903a82d0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TUGS7RR%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQD037TxfwvX42iRYwgSmakWvg05DzvyEdbllT%2Fkd33QBAIhAPSB5pl3Is86qib2Vad2OfXz%2BdLM%2FC4HGSTvm%2FzkBo6VKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlWhdh2kSrEDwh3uQq3APD0bEgcpjcwZ9crv9AEonhoOmvwxnlgyrU%2Bqg2ySk2imLztt0S%2FlEjfVPmGtrTS%2B2aOCpjuI139sALJJ2%2BwXLSH1czIvQi1D%2FCjINBHFSHNMBj4clwinaTvC7%2FTceyVWG%2BFqEVhZrRmo1Pgr5gbjer%2FiLL%2B9AxaI1cx20eDs4aiic%2FnhE08TkSp0%2BH9Ibyicn9wtIl1whAl0nCZsAKnLKbo6ZQOay%2Bdi7fNIXfOG2jNN%2FfJXoidJV%2Bu38mEkcM5C5dhMWImqFKg8B2hRQvdhseb4%2Bp6BJdT3CIXgX4zHt918MuDX6ua3wDvTMZGFF9ETlWV49FwS%2F8HudpM%2FQa6fwPSIPBpleViXp4RQzRtwRJv2j78MVcsbVUjQa7jV3XF6cX2Avom4VTSbzNAMV8iy6CuAggZkQarFBxEr0585afR%2Fl47ku6J95opqp%2B68HcFqYoIdd2QDo1CPN86CQhNVZxeQ9Lj76lNvTpXuwoEwUqEqj5ZbDT3HvTttgKzIz6jIyP%2B0CYuxC0a%2FlkNcHqWPdU0AHP%2BfaiOWLUmM6Xgc5ARGvumP6lPiA7ghk8%2B7TM1Hnj2N07tM90R%2FxtgI8NLF4bhzirnncDVzK9t7kVrbK2Mc2PaINpX3BKuqC4JDCyr%2FTBBjqkAWXl1W96MOigrzR510nuvAA2xf1%2FELqxQFt4xvFQdXW7pcb1Tm32hQI2yGHOOHQ90iyKPoLYehlTc%2F9inecIpzJOTvN4crJv%2FkRXoQ9cZHYfwu%2FXbiErPPYZOnNawr3RAw0V5AgH9FhLQeAPSzraS2WjUaUYeqrJtHt3S43oXb4dH6eJMW%2BDFG3P5DgA4xk7sa1bopjeaSyqIAWHoqhn7zThYlpm&X-Amz-Signature=59da4cff0f0dffee462630bef59d667b13955d20810c53778e460ff144985128&X-Amz-SignedHeaders=host&x-id=GetObject)
