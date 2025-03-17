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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X24KSTW%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEojbohcxAjROptbUiII6xsM%2F9DPJ%2Fe640e6w7M%2BwE72AiB09YptwOaPzEKqmiKLcqndnS54CkgCaX1ci9WJAfMsDSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMBUQ9CYR6WpYVcd3QKtwDYVoPzTMlcYilIyZC1T0OamLPsMcOuhRgagqAURs2ApAMSqYm%2FFTXhm8hdWZqzz9Bt9C%2BU28VyNAnGoTXDq2l4sXSPPOEu3gHHht2NNFUdK3tYTCbay%2B%2BqucJo9t0OKXD0pkTFgBcuNvvsqc6lklZWCjfVP0IegeAyUMR%2BesIq1qN5TWovHggUjb7lo1jQe1Py%2FdDqNJvEKhlzwhcV86v19X319Sl3Zu70dzhiWQRnkzgsu8U8cstT67YYZR5TFAe5XecK%2FVsEd81EX0zM5q4PKpNY%2Ft3x6Rtqh3%2F4DmiZqXDaUCW0OAzAh5xIBaXiG3pUDHTqBDJf9eLudKluLNbSfB17aUF62mvMAwYK7Kv7wYeRBn1UHz%2BLPfC%2FnZsRlgrTkM08sVvWGOsDIDpmAu7Lm1rFYsdxNRPrbSDhUqctfhrBFbl1DNXr5NDGlnv7zeZguSuudeGqhdu2tb2%2F7p4H9Kky%2Fp73YH%2BVKAtoDY3Yfnb4hi2yNkl82wDynYiMoEJR%2BA6w%2BXUizomkrIw0sfGYKYPlQFFmaYm9yXpfZgIZpB8SnuClIx2hpDpcWzBHHF0fNTD%2Br7PD6maEHMQqaoJn6DOLIBaBDAQHgg2DdIzG12J55oGHTd6Q%2Fv%2FUZ4w%2BpzdvgY6pgGyWlFCx7mPhD4%2BPqaeppuD03N%2B9hHqf0JAaccACp0IkWbaCTrhOI3yinK21FzaAAVs%2BnrvyHqxBQO6r%2FOfjHBeDm8Et%2BQ50BBTvFyrmkqkNkz%2FpuDNe1hlohxjc47ldJErHeZWyti0HLW4yt8I4kxQqfYYM6DNBqebl5uDKXHXmB4frNaAUoq1zl1B4WrD7Vyfw9iqY8e5gyd6GxkUtX0qr7QSNfo1&X-Amz-Signature=eb95705df6685659b9467a8cf24bb7f922790bacb9a275e44c23aec0eed5dccf&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X24KSTW%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEojbohcxAjROptbUiII6xsM%2F9DPJ%2Fe640e6w7M%2BwE72AiB09YptwOaPzEKqmiKLcqndnS54CkgCaX1ci9WJAfMsDSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMBUQ9CYR6WpYVcd3QKtwDYVoPzTMlcYilIyZC1T0OamLPsMcOuhRgagqAURs2ApAMSqYm%2FFTXhm8hdWZqzz9Bt9C%2BU28VyNAnGoTXDq2l4sXSPPOEu3gHHht2NNFUdK3tYTCbay%2B%2BqucJo9t0OKXD0pkTFgBcuNvvsqc6lklZWCjfVP0IegeAyUMR%2BesIq1qN5TWovHggUjb7lo1jQe1Py%2FdDqNJvEKhlzwhcV86v19X319Sl3Zu70dzhiWQRnkzgsu8U8cstT67YYZR5TFAe5XecK%2FVsEd81EX0zM5q4PKpNY%2Ft3x6Rtqh3%2F4DmiZqXDaUCW0OAzAh5xIBaXiG3pUDHTqBDJf9eLudKluLNbSfB17aUF62mvMAwYK7Kv7wYeRBn1UHz%2BLPfC%2FnZsRlgrTkM08sVvWGOsDIDpmAu7Lm1rFYsdxNRPrbSDhUqctfhrBFbl1DNXr5NDGlnv7zeZguSuudeGqhdu2tb2%2F7p4H9Kky%2Fp73YH%2BVKAtoDY3Yfnb4hi2yNkl82wDynYiMoEJR%2BA6w%2BXUizomkrIw0sfGYKYPlQFFmaYm9yXpfZgIZpB8SnuClIx2hpDpcWzBHHF0fNTD%2Br7PD6maEHMQqaoJn6DOLIBaBDAQHgg2DdIzG12J55oGHTd6Q%2Fv%2FUZ4w%2BpzdvgY6pgGyWlFCx7mPhD4%2BPqaeppuD03N%2B9hHqf0JAaccACp0IkWbaCTrhOI3yinK21FzaAAVs%2BnrvyHqxBQO6r%2FOfjHBeDm8Et%2BQ50BBTvFyrmkqkNkz%2FpuDNe1hlohxjc47ldJErHeZWyti0HLW4yt8I4kxQqfYYM6DNBqebl5uDKXHXmB4frNaAUoq1zl1B4WrD7Vyfw9iqY8e5gyd6GxkUtX0qr7QSNfo1&X-Amz-Signature=b79ad1c09312dd7881de41343aba8a4805d7167e91c73758c36b53ef601cdb54&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X24KSTW%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEojbohcxAjROptbUiII6xsM%2F9DPJ%2Fe640e6w7M%2BwE72AiB09YptwOaPzEKqmiKLcqndnS54CkgCaX1ci9WJAfMsDSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMBUQ9CYR6WpYVcd3QKtwDYVoPzTMlcYilIyZC1T0OamLPsMcOuhRgagqAURs2ApAMSqYm%2FFTXhm8hdWZqzz9Bt9C%2BU28VyNAnGoTXDq2l4sXSPPOEu3gHHht2NNFUdK3tYTCbay%2B%2BqucJo9t0OKXD0pkTFgBcuNvvsqc6lklZWCjfVP0IegeAyUMR%2BesIq1qN5TWovHggUjb7lo1jQe1Py%2FdDqNJvEKhlzwhcV86v19X319Sl3Zu70dzhiWQRnkzgsu8U8cstT67YYZR5TFAe5XecK%2FVsEd81EX0zM5q4PKpNY%2Ft3x6Rtqh3%2F4DmiZqXDaUCW0OAzAh5xIBaXiG3pUDHTqBDJf9eLudKluLNbSfB17aUF62mvMAwYK7Kv7wYeRBn1UHz%2BLPfC%2FnZsRlgrTkM08sVvWGOsDIDpmAu7Lm1rFYsdxNRPrbSDhUqctfhrBFbl1DNXr5NDGlnv7zeZguSuudeGqhdu2tb2%2F7p4H9Kky%2Fp73YH%2BVKAtoDY3Yfnb4hi2yNkl82wDynYiMoEJR%2BA6w%2BXUizomkrIw0sfGYKYPlQFFmaYm9yXpfZgIZpB8SnuClIx2hpDpcWzBHHF0fNTD%2Br7PD6maEHMQqaoJn6DOLIBaBDAQHgg2DdIzG12J55oGHTd6Q%2Fv%2FUZ4w%2BpzdvgY6pgGyWlFCx7mPhD4%2BPqaeppuD03N%2B9hHqf0JAaccACp0IkWbaCTrhOI3yinK21FzaAAVs%2BnrvyHqxBQO6r%2FOfjHBeDm8Et%2BQ50BBTvFyrmkqkNkz%2FpuDNe1hlohxjc47ldJErHeZWyti0HLW4yt8I4kxQqfYYM6DNBqebl5uDKXHXmB4frNaAUoq1zl1B4WrD7Vyfw9iqY8e5gyd6GxkUtX0qr7QSNfo1&X-Amz-Signature=0746e04f82935e5809c503f82cc3fcbe77f15cb855b90c33cd667db875f5b839&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X24KSTW%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEojbohcxAjROptbUiII6xsM%2F9DPJ%2Fe640e6w7M%2BwE72AiB09YptwOaPzEKqmiKLcqndnS54CkgCaX1ci9WJAfMsDSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMBUQ9CYR6WpYVcd3QKtwDYVoPzTMlcYilIyZC1T0OamLPsMcOuhRgagqAURs2ApAMSqYm%2FFTXhm8hdWZqzz9Bt9C%2BU28VyNAnGoTXDq2l4sXSPPOEu3gHHht2NNFUdK3tYTCbay%2B%2BqucJo9t0OKXD0pkTFgBcuNvvsqc6lklZWCjfVP0IegeAyUMR%2BesIq1qN5TWovHggUjb7lo1jQe1Py%2FdDqNJvEKhlzwhcV86v19X319Sl3Zu70dzhiWQRnkzgsu8U8cstT67YYZR5TFAe5XecK%2FVsEd81EX0zM5q4PKpNY%2Ft3x6Rtqh3%2F4DmiZqXDaUCW0OAzAh5xIBaXiG3pUDHTqBDJf9eLudKluLNbSfB17aUF62mvMAwYK7Kv7wYeRBn1UHz%2BLPfC%2FnZsRlgrTkM08sVvWGOsDIDpmAu7Lm1rFYsdxNRPrbSDhUqctfhrBFbl1DNXr5NDGlnv7zeZguSuudeGqhdu2tb2%2F7p4H9Kky%2Fp73YH%2BVKAtoDY3Yfnb4hi2yNkl82wDynYiMoEJR%2BA6w%2BXUizomkrIw0sfGYKYPlQFFmaYm9yXpfZgIZpB8SnuClIx2hpDpcWzBHHF0fNTD%2Br7PD6maEHMQqaoJn6DOLIBaBDAQHgg2DdIzG12J55oGHTd6Q%2Fv%2FUZ4w%2BpzdvgY6pgGyWlFCx7mPhD4%2BPqaeppuD03N%2B9hHqf0JAaccACp0IkWbaCTrhOI3yinK21FzaAAVs%2BnrvyHqxBQO6r%2FOfjHBeDm8Et%2BQ50BBTvFyrmkqkNkz%2FpuDNe1hlohxjc47ldJErHeZWyti0HLW4yt8I4kxQqfYYM6DNBqebl5uDKXHXmB4frNaAUoq1zl1B4WrD7Vyfw9iqY8e5gyd6GxkUtX0qr7QSNfo1&X-Amz-Signature=d4b8d77b5951058506f67b95087b8689d9f99980952e27cf3b543f88789f7090&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X24KSTW%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEojbohcxAjROptbUiII6xsM%2F9DPJ%2Fe640e6w7M%2BwE72AiB09YptwOaPzEKqmiKLcqndnS54CkgCaX1ci9WJAfMsDSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMBUQ9CYR6WpYVcd3QKtwDYVoPzTMlcYilIyZC1T0OamLPsMcOuhRgagqAURs2ApAMSqYm%2FFTXhm8hdWZqzz9Bt9C%2BU28VyNAnGoTXDq2l4sXSPPOEu3gHHht2NNFUdK3tYTCbay%2B%2BqucJo9t0OKXD0pkTFgBcuNvvsqc6lklZWCjfVP0IegeAyUMR%2BesIq1qN5TWovHggUjb7lo1jQe1Py%2FdDqNJvEKhlzwhcV86v19X319Sl3Zu70dzhiWQRnkzgsu8U8cstT67YYZR5TFAe5XecK%2FVsEd81EX0zM5q4PKpNY%2Ft3x6Rtqh3%2F4DmiZqXDaUCW0OAzAh5xIBaXiG3pUDHTqBDJf9eLudKluLNbSfB17aUF62mvMAwYK7Kv7wYeRBn1UHz%2BLPfC%2FnZsRlgrTkM08sVvWGOsDIDpmAu7Lm1rFYsdxNRPrbSDhUqctfhrBFbl1DNXr5NDGlnv7zeZguSuudeGqhdu2tb2%2F7p4H9Kky%2Fp73YH%2BVKAtoDY3Yfnb4hi2yNkl82wDynYiMoEJR%2BA6w%2BXUizomkrIw0sfGYKYPlQFFmaYm9yXpfZgIZpB8SnuClIx2hpDpcWzBHHF0fNTD%2Br7PD6maEHMQqaoJn6DOLIBaBDAQHgg2DdIzG12J55oGHTd6Q%2Fv%2FUZ4w%2BpzdvgY6pgGyWlFCx7mPhD4%2BPqaeppuD03N%2B9hHqf0JAaccACp0IkWbaCTrhOI3yinK21FzaAAVs%2BnrvyHqxBQO6r%2FOfjHBeDm8Et%2BQ50BBTvFyrmkqkNkz%2FpuDNe1hlohxjc47ldJErHeZWyti0HLW4yt8I4kxQqfYYM6DNBqebl5uDKXHXmB4frNaAUoq1zl1B4WrD7Vyfw9iqY8e5gyd6GxkUtX0qr7QSNfo1&X-Amz-Signature=5b9c652411aad1468397ed4dd9287dea0c49f5f65fcd9fa03cef7f9720416a5b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X24KSTW%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEojbohcxAjROptbUiII6xsM%2F9DPJ%2Fe640e6w7M%2BwE72AiB09YptwOaPzEKqmiKLcqndnS54CkgCaX1ci9WJAfMsDSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMBUQ9CYR6WpYVcd3QKtwDYVoPzTMlcYilIyZC1T0OamLPsMcOuhRgagqAURs2ApAMSqYm%2FFTXhm8hdWZqzz9Bt9C%2BU28VyNAnGoTXDq2l4sXSPPOEu3gHHht2NNFUdK3tYTCbay%2B%2BqucJo9t0OKXD0pkTFgBcuNvvsqc6lklZWCjfVP0IegeAyUMR%2BesIq1qN5TWovHggUjb7lo1jQe1Py%2FdDqNJvEKhlzwhcV86v19X319Sl3Zu70dzhiWQRnkzgsu8U8cstT67YYZR5TFAe5XecK%2FVsEd81EX0zM5q4PKpNY%2Ft3x6Rtqh3%2F4DmiZqXDaUCW0OAzAh5xIBaXiG3pUDHTqBDJf9eLudKluLNbSfB17aUF62mvMAwYK7Kv7wYeRBn1UHz%2BLPfC%2FnZsRlgrTkM08sVvWGOsDIDpmAu7Lm1rFYsdxNRPrbSDhUqctfhrBFbl1DNXr5NDGlnv7zeZguSuudeGqhdu2tb2%2F7p4H9Kky%2Fp73YH%2BVKAtoDY3Yfnb4hi2yNkl82wDynYiMoEJR%2BA6w%2BXUizomkrIw0sfGYKYPlQFFmaYm9yXpfZgIZpB8SnuClIx2hpDpcWzBHHF0fNTD%2Br7PD6maEHMQqaoJn6DOLIBaBDAQHgg2DdIzG12J55oGHTd6Q%2Fv%2FUZ4w%2BpzdvgY6pgGyWlFCx7mPhD4%2BPqaeppuD03N%2B9hHqf0JAaccACp0IkWbaCTrhOI3yinK21FzaAAVs%2BnrvyHqxBQO6r%2FOfjHBeDm8Et%2BQ50BBTvFyrmkqkNkz%2FpuDNe1hlohxjc47ldJErHeZWyti0HLW4yt8I4kxQqfYYM6DNBqebl5uDKXHXmB4frNaAUoq1zl1B4WrD7Vyfw9iqY8e5gyd6GxkUtX0qr7QSNfo1&X-Amz-Signature=2e0dd563206c9c8f93908b0253a551ab646ec0e3e88271dd1f8c7394ed6ca15f&X-Amz-SignedHeaders=host&x-id=GetObject)
