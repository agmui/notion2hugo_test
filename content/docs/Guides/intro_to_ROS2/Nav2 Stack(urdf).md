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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q56ZA7VH%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIE9IxGWGg0qfFyiGL%2FRFMYpvlbYQemrlYqxUU5JQIOkwAiAd9U3PmQ6vVgl%2Bph8SL2FtzjOus%2F5CYbLMrKLdGzUxnSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV8zA%2FRR%2Fb1xaDyM1KtwDg0OP%2Fv5uzaLL6QkgKTz9POHjyX2P85DE1GCq51xzCix%2BQF5BBr09JK9QsOVCpJvcFX3c6bjYuOrCLCWYPIB0UWy5nTaZQgabSiiHOCflnI2l%2F%2BUWWSu63FGx%2Bs9Q7RNlL4q1pcPqou%2FyKPrkJ%2F%2FDrl%2BISy8k%2F8yta6wz2dUiFWCP8bW%2FoR97MlxxzuZwLX3ZwNoihXJCWPB9F6npqav7G9tatQb0xTB8ijXs%2F1fcsCEVHZp5VRRbtsiNosyF6qXuxaVMEG4n4ggKAXcE%2BoU4j1wXwEkYwDadjoSS%2FC1Umgo8Pu9r761rfJmqcDfrtPRFTzKtivIEo0%2BvfhGsvFdFyJY6Jq%2FS2GdvIsntyI%2FIyWiI%2BazH7yYDkQrpYR77Yy%2Bse8ejxVDWgq5qMtCabHazbHMYHUBfrcVt9%2FSSM3olRHtS5FSgccvWVOd9zD7qwLmho6c7DSdw%2FmW3384NrwO421z73E4SWytZhzzm%2BLyb92TWJQVrOaqajZtnEVoJJv1VGUPIFaNzkhtP5YUe8f2jv01t13gz8y2JRVTSbzCGs69LRmghh4UmsC8gJcETnr3lAG%2Ffl3a14t9M6gt0USEbd34p4EHM1PrGxyR8R%2FnKWLXE315IXOn%2FIDMJl4wwt4vevwY6pgEhPHz4plevMTLg6uITUVkOnl4dqx17GDUls5H7jpiSm2Wwo1JGdQ9hbKeK4nvI75zf8Azkm%2BvD1XfER7O7Xj%2BN%2BmoZ089ZnP3U7PYQYpeQQjrRvipxCkCFUrgwDGvT0Ojv2NbIrFJp%2F85%2B1pBn4FNe1JPRSTRWqgYF%2FPMn3eszwFavH7VKzdGu4gihzBQfcQiNG%2F25v7Y7sUCDHC2le96nfZcz3QQK&X-Amz-Signature=83e5f1cbc90d01bc5f0231fa046374c50ca9a5ede9eb5c860a897780c3b28492&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q56ZA7VH%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIE9IxGWGg0qfFyiGL%2FRFMYpvlbYQemrlYqxUU5JQIOkwAiAd9U3PmQ6vVgl%2Bph8SL2FtzjOus%2F5CYbLMrKLdGzUxnSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV8zA%2FRR%2Fb1xaDyM1KtwDg0OP%2Fv5uzaLL6QkgKTz9POHjyX2P85DE1GCq51xzCix%2BQF5BBr09JK9QsOVCpJvcFX3c6bjYuOrCLCWYPIB0UWy5nTaZQgabSiiHOCflnI2l%2F%2BUWWSu63FGx%2Bs9Q7RNlL4q1pcPqou%2FyKPrkJ%2F%2FDrl%2BISy8k%2F8yta6wz2dUiFWCP8bW%2FoR97MlxxzuZwLX3ZwNoihXJCWPB9F6npqav7G9tatQb0xTB8ijXs%2F1fcsCEVHZp5VRRbtsiNosyF6qXuxaVMEG4n4ggKAXcE%2BoU4j1wXwEkYwDadjoSS%2FC1Umgo8Pu9r761rfJmqcDfrtPRFTzKtivIEo0%2BvfhGsvFdFyJY6Jq%2FS2GdvIsntyI%2FIyWiI%2BazH7yYDkQrpYR77Yy%2Bse8ejxVDWgq5qMtCabHazbHMYHUBfrcVt9%2FSSM3olRHtS5FSgccvWVOd9zD7qwLmho6c7DSdw%2FmW3384NrwO421z73E4SWytZhzzm%2BLyb92TWJQVrOaqajZtnEVoJJv1VGUPIFaNzkhtP5YUe8f2jv01t13gz8y2JRVTSbzCGs69LRmghh4UmsC8gJcETnr3lAG%2Ffl3a14t9M6gt0USEbd34p4EHM1PrGxyR8R%2FnKWLXE315IXOn%2FIDMJl4wwt4vevwY6pgEhPHz4plevMTLg6uITUVkOnl4dqx17GDUls5H7jpiSm2Wwo1JGdQ9hbKeK4nvI75zf8Azkm%2BvD1XfER7O7Xj%2BN%2BmoZ089ZnP3U7PYQYpeQQjrRvipxCkCFUrgwDGvT0Ojv2NbIrFJp%2F85%2B1pBn4FNe1JPRSTRWqgYF%2FPMn3eszwFavH7VKzdGu4gihzBQfcQiNG%2F25v7Y7sUCDHC2le96nfZcz3QQK&X-Amz-Signature=dc9721c14a58646ca0f443b9c1a9d2abc65030b3cfa53a8dcdf08e375696e4e9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q56ZA7VH%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIE9IxGWGg0qfFyiGL%2FRFMYpvlbYQemrlYqxUU5JQIOkwAiAd9U3PmQ6vVgl%2Bph8SL2FtzjOus%2F5CYbLMrKLdGzUxnSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV8zA%2FRR%2Fb1xaDyM1KtwDg0OP%2Fv5uzaLL6QkgKTz9POHjyX2P85DE1GCq51xzCix%2BQF5BBr09JK9QsOVCpJvcFX3c6bjYuOrCLCWYPIB0UWy5nTaZQgabSiiHOCflnI2l%2F%2BUWWSu63FGx%2Bs9Q7RNlL4q1pcPqou%2FyKPrkJ%2F%2FDrl%2BISy8k%2F8yta6wz2dUiFWCP8bW%2FoR97MlxxzuZwLX3ZwNoihXJCWPB9F6npqav7G9tatQb0xTB8ijXs%2F1fcsCEVHZp5VRRbtsiNosyF6qXuxaVMEG4n4ggKAXcE%2BoU4j1wXwEkYwDadjoSS%2FC1Umgo8Pu9r761rfJmqcDfrtPRFTzKtivIEo0%2BvfhGsvFdFyJY6Jq%2FS2GdvIsntyI%2FIyWiI%2BazH7yYDkQrpYR77Yy%2Bse8ejxVDWgq5qMtCabHazbHMYHUBfrcVt9%2FSSM3olRHtS5FSgccvWVOd9zD7qwLmho6c7DSdw%2FmW3384NrwO421z73E4SWytZhzzm%2BLyb92TWJQVrOaqajZtnEVoJJv1VGUPIFaNzkhtP5YUe8f2jv01t13gz8y2JRVTSbzCGs69LRmghh4UmsC8gJcETnr3lAG%2Ffl3a14t9M6gt0USEbd34p4EHM1PrGxyR8R%2FnKWLXE315IXOn%2FIDMJl4wwt4vevwY6pgEhPHz4plevMTLg6uITUVkOnl4dqx17GDUls5H7jpiSm2Wwo1JGdQ9hbKeK4nvI75zf8Azkm%2BvD1XfER7O7Xj%2BN%2BmoZ089ZnP3U7PYQYpeQQjrRvipxCkCFUrgwDGvT0Ojv2NbIrFJp%2F85%2B1pBn4FNe1JPRSTRWqgYF%2FPMn3eszwFavH7VKzdGu4gihzBQfcQiNG%2F25v7Y7sUCDHC2le96nfZcz3QQK&X-Amz-Signature=2a7e7a103b13b6c8226783c12cbfdde901dc180199fada01f29c5c20597a0049&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q56ZA7VH%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIE9IxGWGg0qfFyiGL%2FRFMYpvlbYQemrlYqxUU5JQIOkwAiAd9U3PmQ6vVgl%2Bph8SL2FtzjOus%2F5CYbLMrKLdGzUxnSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV8zA%2FRR%2Fb1xaDyM1KtwDg0OP%2Fv5uzaLL6QkgKTz9POHjyX2P85DE1GCq51xzCix%2BQF5BBr09JK9QsOVCpJvcFX3c6bjYuOrCLCWYPIB0UWy5nTaZQgabSiiHOCflnI2l%2F%2BUWWSu63FGx%2Bs9Q7RNlL4q1pcPqou%2FyKPrkJ%2F%2FDrl%2BISy8k%2F8yta6wz2dUiFWCP8bW%2FoR97MlxxzuZwLX3ZwNoihXJCWPB9F6npqav7G9tatQb0xTB8ijXs%2F1fcsCEVHZp5VRRbtsiNosyF6qXuxaVMEG4n4ggKAXcE%2BoU4j1wXwEkYwDadjoSS%2FC1Umgo8Pu9r761rfJmqcDfrtPRFTzKtivIEo0%2BvfhGsvFdFyJY6Jq%2FS2GdvIsntyI%2FIyWiI%2BazH7yYDkQrpYR77Yy%2Bse8ejxVDWgq5qMtCabHazbHMYHUBfrcVt9%2FSSM3olRHtS5FSgccvWVOd9zD7qwLmho6c7DSdw%2FmW3384NrwO421z73E4SWytZhzzm%2BLyb92TWJQVrOaqajZtnEVoJJv1VGUPIFaNzkhtP5YUe8f2jv01t13gz8y2JRVTSbzCGs69LRmghh4UmsC8gJcETnr3lAG%2Ffl3a14t9M6gt0USEbd34p4EHM1PrGxyR8R%2FnKWLXE315IXOn%2FIDMJl4wwt4vevwY6pgEhPHz4plevMTLg6uITUVkOnl4dqx17GDUls5H7jpiSm2Wwo1JGdQ9hbKeK4nvI75zf8Azkm%2BvD1XfER7O7Xj%2BN%2BmoZ089ZnP3U7PYQYpeQQjrRvipxCkCFUrgwDGvT0Ojv2NbIrFJp%2F85%2B1pBn4FNe1JPRSTRWqgYF%2FPMn3eszwFavH7VKzdGu4gihzBQfcQiNG%2F25v7Y7sUCDHC2le96nfZcz3QQK&X-Amz-Signature=bb2ddfec1ead2bfa823e123a3a5b3960e74f6dc60bce54caed9468c01887117e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q56ZA7VH%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIE9IxGWGg0qfFyiGL%2FRFMYpvlbYQemrlYqxUU5JQIOkwAiAd9U3PmQ6vVgl%2Bph8SL2FtzjOus%2F5CYbLMrKLdGzUxnSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV8zA%2FRR%2Fb1xaDyM1KtwDg0OP%2Fv5uzaLL6QkgKTz9POHjyX2P85DE1GCq51xzCix%2BQF5BBr09JK9QsOVCpJvcFX3c6bjYuOrCLCWYPIB0UWy5nTaZQgabSiiHOCflnI2l%2F%2BUWWSu63FGx%2Bs9Q7RNlL4q1pcPqou%2FyKPrkJ%2F%2FDrl%2BISy8k%2F8yta6wz2dUiFWCP8bW%2FoR97MlxxzuZwLX3ZwNoihXJCWPB9F6npqav7G9tatQb0xTB8ijXs%2F1fcsCEVHZp5VRRbtsiNosyF6qXuxaVMEG4n4ggKAXcE%2BoU4j1wXwEkYwDadjoSS%2FC1Umgo8Pu9r761rfJmqcDfrtPRFTzKtivIEo0%2BvfhGsvFdFyJY6Jq%2FS2GdvIsntyI%2FIyWiI%2BazH7yYDkQrpYR77Yy%2Bse8ejxVDWgq5qMtCabHazbHMYHUBfrcVt9%2FSSM3olRHtS5FSgccvWVOd9zD7qwLmho6c7DSdw%2FmW3384NrwO421z73E4SWytZhzzm%2BLyb92TWJQVrOaqajZtnEVoJJv1VGUPIFaNzkhtP5YUe8f2jv01t13gz8y2JRVTSbzCGs69LRmghh4UmsC8gJcETnr3lAG%2Ffl3a14t9M6gt0USEbd34p4EHM1PrGxyR8R%2FnKWLXE315IXOn%2FIDMJl4wwt4vevwY6pgEhPHz4plevMTLg6uITUVkOnl4dqx17GDUls5H7jpiSm2Wwo1JGdQ9hbKeK4nvI75zf8Azkm%2BvD1XfER7O7Xj%2BN%2BmoZ089ZnP3U7PYQYpeQQjrRvipxCkCFUrgwDGvT0Ojv2NbIrFJp%2F85%2B1pBn4FNe1JPRSTRWqgYF%2FPMn3eszwFavH7VKzdGu4gihzBQfcQiNG%2F25v7Y7sUCDHC2le96nfZcz3QQK&X-Amz-Signature=d9b4e692a100ea04f04c1ebb909d6e22e9b37c941ac6f58f9a851fcaef6bbe35&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q56ZA7VH%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIE9IxGWGg0qfFyiGL%2FRFMYpvlbYQemrlYqxUU5JQIOkwAiAd9U3PmQ6vVgl%2Bph8SL2FtzjOus%2F5CYbLMrKLdGzUxnSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV8zA%2FRR%2Fb1xaDyM1KtwDg0OP%2Fv5uzaLL6QkgKTz9POHjyX2P85DE1GCq51xzCix%2BQF5BBr09JK9QsOVCpJvcFX3c6bjYuOrCLCWYPIB0UWy5nTaZQgabSiiHOCflnI2l%2F%2BUWWSu63FGx%2Bs9Q7RNlL4q1pcPqou%2FyKPrkJ%2F%2FDrl%2BISy8k%2F8yta6wz2dUiFWCP8bW%2FoR97MlxxzuZwLX3ZwNoihXJCWPB9F6npqav7G9tatQb0xTB8ijXs%2F1fcsCEVHZp5VRRbtsiNosyF6qXuxaVMEG4n4ggKAXcE%2BoU4j1wXwEkYwDadjoSS%2FC1Umgo8Pu9r761rfJmqcDfrtPRFTzKtivIEo0%2BvfhGsvFdFyJY6Jq%2FS2GdvIsntyI%2FIyWiI%2BazH7yYDkQrpYR77Yy%2Bse8ejxVDWgq5qMtCabHazbHMYHUBfrcVt9%2FSSM3olRHtS5FSgccvWVOd9zD7qwLmho6c7DSdw%2FmW3384NrwO421z73E4SWytZhzzm%2BLyb92TWJQVrOaqajZtnEVoJJv1VGUPIFaNzkhtP5YUe8f2jv01t13gz8y2JRVTSbzCGs69LRmghh4UmsC8gJcETnr3lAG%2Ffl3a14t9M6gt0USEbd34p4EHM1PrGxyR8R%2FnKWLXE315IXOn%2FIDMJl4wwt4vevwY6pgEhPHz4plevMTLg6uITUVkOnl4dqx17GDUls5H7jpiSm2Wwo1JGdQ9hbKeK4nvI75zf8Azkm%2BvD1XfER7O7Xj%2BN%2BmoZ089ZnP3U7PYQYpeQQjrRvipxCkCFUrgwDGvT0Ojv2NbIrFJp%2F85%2B1pBn4FNe1JPRSTRWqgYF%2FPMn3eszwFavH7VKzdGu4gihzBQfcQiNG%2F25v7Y7sUCDHC2le96nfZcz3QQK&X-Amz-Signature=a15505f07fd5c10cb3d45ee43a89f2b8046bfcb9096368e0687558530b6f08cd&X-Amz-SignedHeaders=host&x-id=GetObject)
