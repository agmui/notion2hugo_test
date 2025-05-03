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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BJOPG6H%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIC3CkidcHQRDBSYAQrQD9zMeKNXVjFeGmkDIjE1hgeLBAiBD4Asz1gfLGCrKTpbS5oypExxVAEovXUCw0gDpM8DqsiqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhsIH1ndUx1UzHPmjKtwDdJxOh0YMA5gO9YnBMy%2B8dN8qXtGNCcCAUzDP%2FTtRMCpMOssM7oJS09sxxzdiJ8XyvQatCxUvEtwPdcZ7FyIUiKRi5uWWdoGSo%2F2rEgjAGUbaH7zgdpTAxfoiKpXVTOWjWUj9FwzXFzFtz8W4Cm49zqGE8H2GIJ%2Bwdb07KpgXdt5w1EnkNb3YzL1IZTwzNZ4eZ8Z4Gz3pVDDbRKOpacgYB0rtqnLj9JKVDfySQz9oYMTR2%2FcdLXgigbNAyxfRcZh0iqgn5LMymIZjP6%2FIxMMCtBSkXFm%2BF005DQkktcsvn9CqBk%2BUy4fFMNumKP84wk0W5lcEaJKs53lqOqn8BArFAw3yl6%2B4ambHathrcXY0Esv8bwL%2BfKKuWvapAB%2FoxQh%2B4kjnPcfnOHo1ai%2Fc3JtePamMMhdB7zuS4N8LDRaHJg%2FK%2FXhlHrgtNBmdeQ8HFX2MAdw6AxsqucD2qzG4rdYwh4752E7HjCHaVjgMB8iK7l2K3CNi6gqQA49HfaKpiBdBRUhV%2FTId1plC02QXLGk6vg90goID1g8VKjIjUl9LXjQ6aloHKYOPBi7aI8FCMp07H9JjnoaCWqSm1KAepv%2FQ9BVcGyGql5x11dkQ55f0JW1kgueeWaJeHSCutKAw%2Bt7XwAY6pgGTZ7VFq%2FvFJtceCXe4z11JgM0VS6Hl6NvLn5yBDS8KOrvSYlCyOhDoIrX904Zv25rITRa5rSw59mCaup09xtJao7xoFC%2Bc%2BBytvtYtINcmJbtyrUgAYGCrzmA8o%2FFKAC8p3E3KB0HVRDULa0rYemOTsj58t8%2BRSN3n9wF3KAc1CqInSLh3r%2FDObTD%2FFKXmEejNhy8PO0TMDEEQU3EMtAtL4QDbnxNn&X-Amz-Signature=aa55f4db9705362fe3f6600748b63c805b4874025eb7b67409395f5fc93a56ca&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BJOPG6H%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIC3CkidcHQRDBSYAQrQD9zMeKNXVjFeGmkDIjE1hgeLBAiBD4Asz1gfLGCrKTpbS5oypExxVAEovXUCw0gDpM8DqsiqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhsIH1ndUx1UzHPmjKtwDdJxOh0YMA5gO9YnBMy%2B8dN8qXtGNCcCAUzDP%2FTtRMCpMOssM7oJS09sxxzdiJ8XyvQatCxUvEtwPdcZ7FyIUiKRi5uWWdoGSo%2F2rEgjAGUbaH7zgdpTAxfoiKpXVTOWjWUj9FwzXFzFtz8W4Cm49zqGE8H2GIJ%2Bwdb07KpgXdt5w1EnkNb3YzL1IZTwzNZ4eZ8Z4Gz3pVDDbRKOpacgYB0rtqnLj9JKVDfySQz9oYMTR2%2FcdLXgigbNAyxfRcZh0iqgn5LMymIZjP6%2FIxMMCtBSkXFm%2BF005DQkktcsvn9CqBk%2BUy4fFMNumKP84wk0W5lcEaJKs53lqOqn8BArFAw3yl6%2B4ambHathrcXY0Esv8bwL%2BfKKuWvapAB%2FoxQh%2B4kjnPcfnOHo1ai%2Fc3JtePamMMhdB7zuS4N8LDRaHJg%2FK%2FXhlHrgtNBmdeQ8HFX2MAdw6AxsqucD2qzG4rdYwh4752E7HjCHaVjgMB8iK7l2K3CNi6gqQA49HfaKpiBdBRUhV%2FTId1plC02QXLGk6vg90goID1g8VKjIjUl9LXjQ6aloHKYOPBi7aI8FCMp07H9JjnoaCWqSm1KAepv%2FQ9BVcGyGql5x11dkQ55f0JW1kgueeWaJeHSCutKAw%2Bt7XwAY6pgGTZ7VFq%2FvFJtceCXe4z11JgM0VS6Hl6NvLn5yBDS8KOrvSYlCyOhDoIrX904Zv25rITRa5rSw59mCaup09xtJao7xoFC%2Bc%2BBytvtYtINcmJbtyrUgAYGCrzmA8o%2FFKAC8p3E3KB0HVRDULa0rYemOTsj58t8%2BRSN3n9wF3KAc1CqInSLh3r%2FDObTD%2FFKXmEejNhy8PO0TMDEEQU3EMtAtL4QDbnxNn&X-Amz-Signature=04243b063b188a8fdc0819a86a30e3be397ebe8724d8ddccdef8c2ddaefdc0b0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BJOPG6H%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIC3CkidcHQRDBSYAQrQD9zMeKNXVjFeGmkDIjE1hgeLBAiBD4Asz1gfLGCrKTpbS5oypExxVAEovXUCw0gDpM8DqsiqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhsIH1ndUx1UzHPmjKtwDdJxOh0YMA5gO9YnBMy%2B8dN8qXtGNCcCAUzDP%2FTtRMCpMOssM7oJS09sxxzdiJ8XyvQatCxUvEtwPdcZ7FyIUiKRi5uWWdoGSo%2F2rEgjAGUbaH7zgdpTAxfoiKpXVTOWjWUj9FwzXFzFtz8W4Cm49zqGE8H2GIJ%2Bwdb07KpgXdt5w1EnkNb3YzL1IZTwzNZ4eZ8Z4Gz3pVDDbRKOpacgYB0rtqnLj9JKVDfySQz9oYMTR2%2FcdLXgigbNAyxfRcZh0iqgn5LMymIZjP6%2FIxMMCtBSkXFm%2BF005DQkktcsvn9CqBk%2BUy4fFMNumKP84wk0W5lcEaJKs53lqOqn8BArFAw3yl6%2B4ambHathrcXY0Esv8bwL%2BfKKuWvapAB%2FoxQh%2B4kjnPcfnOHo1ai%2Fc3JtePamMMhdB7zuS4N8LDRaHJg%2FK%2FXhlHrgtNBmdeQ8HFX2MAdw6AxsqucD2qzG4rdYwh4752E7HjCHaVjgMB8iK7l2K3CNi6gqQA49HfaKpiBdBRUhV%2FTId1plC02QXLGk6vg90goID1g8VKjIjUl9LXjQ6aloHKYOPBi7aI8FCMp07H9JjnoaCWqSm1KAepv%2FQ9BVcGyGql5x11dkQ55f0JW1kgueeWaJeHSCutKAw%2Bt7XwAY6pgGTZ7VFq%2FvFJtceCXe4z11JgM0VS6Hl6NvLn5yBDS8KOrvSYlCyOhDoIrX904Zv25rITRa5rSw59mCaup09xtJao7xoFC%2Bc%2BBytvtYtINcmJbtyrUgAYGCrzmA8o%2FFKAC8p3E3KB0HVRDULa0rYemOTsj58t8%2BRSN3n9wF3KAc1CqInSLh3r%2FDObTD%2FFKXmEejNhy8PO0TMDEEQU3EMtAtL4QDbnxNn&X-Amz-Signature=cde64595d5960d35fefbe769366551081a27d749f9cc68318c79d36b882486ee&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BJOPG6H%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIC3CkidcHQRDBSYAQrQD9zMeKNXVjFeGmkDIjE1hgeLBAiBD4Asz1gfLGCrKTpbS5oypExxVAEovXUCw0gDpM8DqsiqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhsIH1ndUx1UzHPmjKtwDdJxOh0YMA5gO9YnBMy%2B8dN8qXtGNCcCAUzDP%2FTtRMCpMOssM7oJS09sxxzdiJ8XyvQatCxUvEtwPdcZ7FyIUiKRi5uWWdoGSo%2F2rEgjAGUbaH7zgdpTAxfoiKpXVTOWjWUj9FwzXFzFtz8W4Cm49zqGE8H2GIJ%2Bwdb07KpgXdt5w1EnkNb3YzL1IZTwzNZ4eZ8Z4Gz3pVDDbRKOpacgYB0rtqnLj9JKVDfySQz9oYMTR2%2FcdLXgigbNAyxfRcZh0iqgn5LMymIZjP6%2FIxMMCtBSkXFm%2BF005DQkktcsvn9CqBk%2BUy4fFMNumKP84wk0W5lcEaJKs53lqOqn8BArFAw3yl6%2B4ambHathrcXY0Esv8bwL%2BfKKuWvapAB%2FoxQh%2B4kjnPcfnOHo1ai%2Fc3JtePamMMhdB7zuS4N8LDRaHJg%2FK%2FXhlHrgtNBmdeQ8HFX2MAdw6AxsqucD2qzG4rdYwh4752E7HjCHaVjgMB8iK7l2K3CNi6gqQA49HfaKpiBdBRUhV%2FTId1plC02QXLGk6vg90goID1g8VKjIjUl9LXjQ6aloHKYOPBi7aI8FCMp07H9JjnoaCWqSm1KAepv%2FQ9BVcGyGql5x11dkQ55f0JW1kgueeWaJeHSCutKAw%2Bt7XwAY6pgGTZ7VFq%2FvFJtceCXe4z11JgM0VS6Hl6NvLn5yBDS8KOrvSYlCyOhDoIrX904Zv25rITRa5rSw59mCaup09xtJao7xoFC%2Bc%2BBytvtYtINcmJbtyrUgAYGCrzmA8o%2FFKAC8p3E3KB0HVRDULa0rYemOTsj58t8%2BRSN3n9wF3KAc1CqInSLh3r%2FDObTD%2FFKXmEejNhy8PO0TMDEEQU3EMtAtL4QDbnxNn&X-Amz-Signature=214aa4455f943b1af3cc7c2e11a71f296ed7c4a60d0556ee2fcd9d7988cd9bbb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BJOPG6H%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIC3CkidcHQRDBSYAQrQD9zMeKNXVjFeGmkDIjE1hgeLBAiBD4Asz1gfLGCrKTpbS5oypExxVAEovXUCw0gDpM8DqsiqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhsIH1ndUx1UzHPmjKtwDdJxOh0YMA5gO9YnBMy%2B8dN8qXtGNCcCAUzDP%2FTtRMCpMOssM7oJS09sxxzdiJ8XyvQatCxUvEtwPdcZ7FyIUiKRi5uWWdoGSo%2F2rEgjAGUbaH7zgdpTAxfoiKpXVTOWjWUj9FwzXFzFtz8W4Cm49zqGE8H2GIJ%2Bwdb07KpgXdt5w1EnkNb3YzL1IZTwzNZ4eZ8Z4Gz3pVDDbRKOpacgYB0rtqnLj9JKVDfySQz9oYMTR2%2FcdLXgigbNAyxfRcZh0iqgn5LMymIZjP6%2FIxMMCtBSkXFm%2BF005DQkktcsvn9CqBk%2BUy4fFMNumKP84wk0W5lcEaJKs53lqOqn8BArFAw3yl6%2B4ambHathrcXY0Esv8bwL%2BfKKuWvapAB%2FoxQh%2B4kjnPcfnOHo1ai%2Fc3JtePamMMhdB7zuS4N8LDRaHJg%2FK%2FXhlHrgtNBmdeQ8HFX2MAdw6AxsqucD2qzG4rdYwh4752E7HjCHaVjgMB8iK7l2K3CNi6gqQA49HfaKpiBdBRUhV%2FTId1plC02QXLGk6vg90goID1g8VKjIjUl9LXjQ6aloHKYOPBi7aI8FCMp07H9JjnoaCWqSm1KAepv%2FQ9BVcGyGql5x11dkQ55f0JW1kgueeWaJeHSCutKAw%2Bt7XwAY6pgGTZ7VFq%2FvFJtceCXe4z11JgM0VS6Hl6NvLn5yBDS8KOrvSYlCyOhDoIrX904Zv25rITRa5rSw59mCaup09xtJao7xoFC%2Bc%2BBytvtYtINcmJbtyrUgAYGCrzmA8o%2FFKAC8p3E3KB0HVRDULa0rYemOTsj58t8%2BRSN3n9wF3KAc1CqInSLh3r%2FDObTD%2FFKXmEejNhy8PO0TMDEEQU3EMtAtL4QDbnxNn&X-Amz-Signature=a64a8b4e5746457a93beaa3ee4bd7d2375cd5bafc570a4cb1e6a3efd57968e2a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BJOPG6H%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIC3CkidcHQRDBSYAQrQD9zMeKNXVjFeGmkDIjE1hgeLBAiBD4Asz1gfLGCrKTpbS5oypExxVAEovXUCw0gDpM8DqsiqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhsIH1ndUx1UzHPmjKtwDdJxOh0YMA5gO9YnBMy%2B8dN8qXtGNCcCAUzDP%2FTtRMCpMOssM7oJS09sxxzdiJ8XyvQatCxUvEtwPdcZ7FyIUiKRi5uWWdoGSo%2F2rEgjAGUbaH7zgdpTAxfoiKpXVTOWjWUj9FwzXFzFtz8W4Cm49zqGE8H2GIJ%2Bwdb07KpgXdt5w1EnkNb3YzL1IZTwzNZ4eZ8Z4Gz3pVDDbRKOpacgYB0rtqnLj9JKVDfySQz9oYMTR2%2FcdLXgigbNAyxfRcZh0iqgn5LMymIZjP6%2FIxMMCtBSkXFm%2BF005DQkktcsvn9CqBk%2BUy4fFMNumKP84wk0W5lcEaJKs53lqOqn8BArFAw3yl6%2B4ambHathrcXY0Esv8bwL%2BfKKuWvapAB%2FoxQh%2B4kjnPcfnOHo1ai%2Fc3JtePamMMhdB7zuS4N8LDRaHJg%2FK%2FXhlHrgtNBmdeQ8HFX2MAdw6AxsqucD2qzG4rdYwh4752E7HjCHaVjgMB8iK7l2K3CNi6gqQA49HfaKpiBdBRUhV%2FTId1plC02QXLGk6vg90goID1g8VKjIjUl9LXjQ6aloHKYOPBi7aI8FCMp07H9JjnoaCWqSm1KAepv%2FQ9BVcGyGql5x11dkQ55f0JW1kgueeWaJeHSCutKAw%2Bt7XwAY6pgGTZ7VFq%2FvFJtceCXe4z11JgM0VS6Hl6NvLn5yBDS8KOrvSYlCyOhDoIrX904Zv25rITRa5rSw59mCaup09xtJao7xoFC%2Bc%2BBytvtYtINcmJbtyrUgAYGCrzmA8o%2FFKAC8p3E3KB0HVRDULa0rYemOTsj58t8%2BRSN3n9wF3KAc1CqInSLh3r%2FDObTD%2FFKXmEejNhy8PO0TMDEEQU3EMtAtL4QDbnxNn&X-Amz-Signature=5624c3a2fce098625ec45e1492eabd3998b91235478bbd91492e273126b9273d&X-Amz-SignedHeaders=host&x-id=GetObject)
