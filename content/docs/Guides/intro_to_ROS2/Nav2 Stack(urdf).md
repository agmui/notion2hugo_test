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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO2B7Z74%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDlQSqd9x5PyZoDWt7X5JGZd8%2FZm2ldE5%2BGkRB293rR4gIgemPrIc%2BGUFTuFsI7sgAfwJOo8LDlbhKZ6o%2FesSExjCwqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVmWyJuOgBbD%2B54wircA0KIPPfh3dOEyd107fHPk2J2i7Kg3ZtDW5o1eT7UtqYk2Xu%2Fgp0lG7AtLRIKa6%2Fl3VI5nY6%2BfldCaIzNMsQty8VXQAsf3xl1ccgiJ4XyjaS%2Fza0tkn2AL%2Fi%2FdApC5pG6h%2BKYhizauO%2Fl3YUIBz8%2FPFVh8LNMH76yFQD40itXGXyWGTPrgonCCgs%2Bpd4GWhpb0mV5RVW5gn3o8%2BVk5UlogIMjMa0%2BYUqUVy%2BD4QsCtOHYzaRnDdAXwIs2uAMyEJdD3WZv7s6HIGwk6aEGzKYS1akoCJSzVNqKOAHvyo3yVc6swqGOqXzPjTWSXK5uaq7Mn6dhqgF5C6MhRDM19mmCo%2FSZadJHTFXeSaw7AxcHOPCG%2Be4J%2FNxt8uCu91hqAvFQ%2BC8Q9OtNxieTstihctG57RChfHWGbeDpDbGu940mkMQGEfxb4dvsy6ouvIQs%2FQmDzYVLO6GCrSa%2F8o4keAZGjyGrfqpx37CciNeKFDPAkrQHzaDp9gRCCZcTlr10vlQE1naPRw%2FZUE2yy6wnhrg6vrCIo%2FbPER8u4C7Rei6%2B8a5qzTxc23Lg%2BT2YCMu0SjLtJt5wiH1nAdGxTDh6yx%2BNx4qRJv7tvjCGNpz3gRwT8Ydqit3MKSrtUr2MC69VMLfJvsEGOqUBcNOwBwWdsutoqPUkW%2B0L%2B9q%2FIeyOLKPZCh4CZQ38ZC63rTWR5DscW0lhm7JmigzMNQCFoiTZSk399kEd%2FmjBVcISJlr3rXMHVLvJyCMfgGlOIi%2B6hIMfsaiRpp6ZmN%2B%2Bafukde708Fmud1EDwmbrb%2Bqmzz0xTJ6m%2BO%2BDJIUaps6MdS3z2KgU%2BKBDZz19hMqk3WRlYcVtnTxk4npHQSOyQrWMcdXK&X-Amz-Signature=45b18a24428993eb4c57d011ec1194ad0bce29efc3416de4b6bd91a53b0b61e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO2B7Z74%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDlQSqd9x5PyZoDWt7X5JGZd8%2FZm2ldE5%2BGkRB293rR4gIgemPrIc%2BGUFTuFsI7sgAfwJOo8LDlbhKZ6o%2FesSExjCwqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVmWyJuOgBbD%2B54wircA0KIPPfh3dOEyd107fHPk2J2i7Kg3ZtDW5o1eT7UtqYk2Xu%2Fgp0lG7AtLRIKa6%2Fl3VI5nY6%2BfldCaIzNMsQty8VXQAsf3xl1ccgiJ4XyjaS%2Fza0tkn2AL%2Fi%2FdApC5pG6h%2BKYhizauO%2Fl3YUIBz8%2FPFVh8LNMH76yFQD40itXGXyWGTPrgonCCgs%2Bpd4GWhpb0mV5RVW5gn3o8%2BVk5UlogIMjMa0%2BYUqUVy%2BD4QsCtOHYzaRnDdAXwIs2uAMyEJdD3WZv7s6HIGwk6aEGzKYS1akoCJSzVNqKOAHvyo3yVc6swqGOqXzPjTWSXK5uaq7Mn6dhqgF5C6MhRDM19mmCo%2FSZadJHTFXeSaw7AxcHOPCG%2Be4J%2FNxt8uCu91hqAvFQ%2BC8Q9OtNxieTstihctG57RChfHWGbeDpDbGu940mkMQGEfxb4dvsy6ouvIQs%2FQmDzYVLO6GCrSa%2F8o4keAZGjyGrfqpx37CciNeKFDPAkrQHzaDp9gRCCZcTlr10vlQE1naPRw%2FZUE2yy6wnhrg6vrCIo%2FbPER8u4C7Rei6%2B8a5qzTxc23Lg%2BT2YCMu0SjLtJt5wiH1nAdGxTDh6yx%2BNx4qRJv7tvjCGNpz3gRwT8Ydqit3MKSrtUr2MC69VMLfJvsEGOqUBcNOwBwWdsutoqPUkW%2B0L%2B9q%2FIeyOLKPZCh4CZQ38ZC63rTWR5DscW0lhm7JmigzMNQCFoiTZSk399kEd%2FmjBVcISJlr3rXMHVLvJyCMfgGlOIi%2B6hIMfsaiRpp6ZmN%2B%2Bafukde708Fmud1EDwmbrb%2Bqmzz0xTJ6m%2BO%2BDJIUaps6MdS3z2KgU%2BKBDZz19hMqk3WRlYcVtnTxk4npHQSOyQrWMcdXK&X-Amz-Signature=2bc2bc180966ae0948c764c8273bd3c7d9bef3822b6ec9a66e7127187e5e1e4f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO2B7Z74%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDlQSqd9x5PyZoDWt7X5JGZd8%2FZm2ldE5%2BGkRB293rR4gIgemPrIc%2BGUFTuFsI7sgAfwJOo8LDlbhKZ6o%2FesSExjCwqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVmWyJuOgBbD%2B54wircA0KIPPfh3dOEyd107fHPk2J2i7Kg3ZtDW5o1eT7UtqYk2Xu%2Fgp0lG7AtLRIKa6%2Fl3VI5nY6%2BfldCaIzNMsQty8VXQAsf3xl1ccgiJ4XyjaS%2Fza0tkn2AL%2Fi%2FdApC5pG6h%2BKYhizauO%2Fl3YUIBz8%2FPFVh8LNMH76yFQD40itXGXyWGTPrgonCCgs%2Bpd4GWhpb0mV5RVW5gn3o8%2BVk5UlogIMjMa0%2BYUqUVy%2BD4QsCtOHYzaRnDdAXwIs2uAMyEJdD3WZv7s6HIGwk6aEGzKYS1akoCJSzVNqKOAHvyo3yVc6swqGOqXzPjTWSXK5uaq7Mn6dhqgF5C6MhRDM19mmCo%2FSZadJHTFXeSaw7AxcHOPCG%2Be4J%2FNxt8uCu91hqAvFQ%2BC8Q9OtNxieTstihctG57RChfHWGbeDpDbGu940mkMQGEfxb4dvsy6ouvIQs%2FQmDzYVLO6GCrSa%2F8o4keAZGjyGrfqpx37CciNeKFDPAkrQHzaDp9gRCCZcTlr10vlQE1naPRw%2FZUE2yy6wnhrg6vrCIo%2FbPER8u4C7Rei6%2B8a5qzTxc23Lg%2BT2YCMu0SjLtJt5wiH1nAdGxTDh6yx%2BNx4qRJv7tvjCGNpz3gRwT8Ydqit3MKSrtUr2MC69VMLfJvsEGOqUBcNOwBwWdsutoqPUkW%2B0L%2B9q%2FIeyOLKPZCh4CZQ38ZC63rTWR5DscW0lhm7JmigzMNQCFoiTZSk399kEd%2FmjBVcISJlr3rXMHVLvJyCMfgGlOIi%2B6hIMfsaiRpp6ZmN%2B%2Bafukde708Fmud1EDwmbrb%2Bqmzz0xTJ6m%2BO%2BDJIUaps6MdS3z2KgU%2BKBDZz19hMqk3WRlYcVtnTxk4npHQSOyQrWMcdXK&X-Amz-Signature=776a6f82cd96b2ba8d7ae721fe6a7f6bd73056360e978902c9cb45c173cb06c8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO2B7Z74%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDlQSqd9x5PyZoDWt7X5JGZd8%2FZm2ldE5%2BGkRB293rR4gIgemPrIc%2BGUFTuFsI7sgAfwJOo8LDlbhKZ6o%2FesSExjCwqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVmWyJuOgBbD%2B54wircA0KIPPfh3dOEyd107fHPk2J2i7Kg3ZtDW5o1eT7UtqYk2Xu%2Fgp0lG7AtLRIKa6%2Fl3VI5nY6%2BfldCaIzNMsQty8VXQAsf3xl1ccgiJ4XyjaS%2Fza0tkn2AL%2Fi%2FdApC5pG6h%2BKYhizauO%2Fl3YUIBz8%2FPFVh8LNMH76yFQD40itXGXyWGTPrgonCCgs%2Bpd4GWhpb0mV5RVW5gn3o8%2BVk5UlogIMjMa0%2BYUqUVy%2BD4QsCtOHYzaRnDdAXwIs2uAMyEJdD3WZv7s6HIGwk6aEGzKYS1akoCJSzVNqKOAHvyo3yVc6swqGOqXzPjTWSXK5uaq7Mn6dhqgF5C6MhRDM19mmCo%2FSZadJHTFXeSaw7AxcHOPCG%2Be4J%2FNxt8uCu91hqAvFQ%2BC8Q9OtNxieTstihctG57RChfHWGbeDpDbGu940mkMQGEfxb4dvsy6ouvIQs%2FQmDzYVLO6GCrSa%2F8o4keAZGjyGrfqpx37CciNeKFDPAkrQHzaDp9gRCCZcTlr10vlQE1naPRw%2FZUE2yy6wnhrg6vrCIo%2FbPER8u4C7Rei6%2B8a5qzTxc23Lg%2BT2YCMu0SjLtJt5wiH1nAdGxTDh6yx%2BNx4qRJv7tvjCGNpz3gRwT8Ydqit3MKSrtUr2MC69VMLfJvsEGOqUBcNOwBwWdsutoqPUkW%2B0L%2B9q%2FIeyOLKPZCh4CZQ38ZC63rTWR5DscW0lhm7JmigzMNQCFoiTZSk399kEd%2FmjBVcISJlr3rXMHVLvJyCMfgGlOIi%2B6hIMfsaiRpp6ZmN%2B%2Bafukde708Fmud1EDwmbrb%2Bqmzz0xTJ6m%2BO%2BDJIUaps6MdS3z2KgU%2BKBDZz19hMqk3WRlYcVtnTxk4npHQSOyQrWMcdXK&X-Amz-Signature=abf0f073944d1def239a24213d133c55514ef053719b0e847c36c618b2935040&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO2B7Z74%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDlQSqd9x5PyZoDWt7X5JGZd8%2FZm2ldE5%2BGkRB293rR4gIgemPrIc%2BGUFTuFsI7sgAfwJOo8LDlbhKZ6o%2FesSExjCwqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVmWyJuOgBbD%2B54wircA0KIPPfh3dOEyd107fHPk2J2i7Kg3ZtDW5o1eT7UtqYk2Xu%2Fgp0lG7AtLRIKa6%2Fl3VI5nY6%2BfldCaIzNMsQty8VXQAsf3xl1ccgiJ4XyjaS%2Fza0tkn2AL%2Fi%2FdApC5pG6h%2BKYhizauO%2Fl3YUIBz8%2FPFVh8LNMH76yFQD40itXGXyWGTPrgonCCgs%2Bpd4GWhpb0mV5RVW5gn3o8%2BVk5UlogIMjMa0%2BYUqUVy%2BD4QsCtOHYzaRnDdAXwIs2uAMyEJdD3WZv7s6HIGwk6aEGzKYS1akoCJSzVNqKOAHvyo3yVc6swqGOqXzPjTWSXK5uaq7Mn6dhqgF5C6MhRDM19mmCo%2FSZadJHTFXeSaw7AxcHOPCG%2Be4J%2FNxt8uCu91hqAvFQ%2BC8Q9OtNxieTstihctG57RChfHWGbeDpDbGu940mkMQGEfxb4dvsy6ouvIQs%2FQmDzYVLO6GCrSa%2F8o4keAZGjyGrfqpx37CciNeKFDPAkrQHzaDp9gRCCZcTlr10vlQE1naPRw%2FZUE2yy6wnhrg6vrCIo%2FbPER8u4C7Rei6%2B8a5qzTxc23Lg%2BT2YCMu0SjLtJt5wiH1nAdGxTDh6yx%2BNx4qRJv7tvjCGNpz3gRwT8Ydqit3MKSrtUr2MC69VMLfJvsEGOqUBcNOwBwWdsutoqPUkW%2B0L%2B9q%2FIeyOLKPZCh4CZQ38ZC63rTWR5DscW0lhm7JmigzMNQCFoiTZSk399kEd%2FmjBVcISJlr3rXMHVLvJyCMfgGlOIi%2B6hIMfsaiRpp6ZmN%2B%2Bafukde708Fmud1EDwmbrb%2Bqmzz0xTJ6m%2BO%2BDJIUaps6MdS3z2KgU%2BKBDZz19hMqk3WRlYcVtnTxk4npHQSOyQrWMcdXK&X-Amz-Signature=73d8385d32984a6e9a6d650f4ba374af6bf5f390584425be48269f97ea773c2c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO2B7Z74%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDlQSqd9x5PyZoDWt7X5JGZd8%2FZm2ldE5%2BGkRB293rR4gIgemPrIc%2BGUFTuFsI7sgAfwJOo8LDlbhKZ6o%2FesSExjCwqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVmWyJuOgBbD%2B54wircA0KIPPfh3dOEyd107fHPk2J2i7Kg3ZtDW5o1eT7UtqYk2Xu%2Fgp0lG7AtLRIKa6%2Fl3VI5nY6%2BfldCaIzNMsQty8VXQAsf3xl1ccgiJ4XyjaS%2Fza0tkn2AL%2Fi%2FdApC5pG6h%2BKYhizauO%2Fl3YUIBz8%2FPFVh8LNMH76yFQD40itXGXyWGTPrgonCCgs%2Bpd4GWhpb0mV5RVW5gn3o8%2BVk5UlogIMjMa0%2BYUqUVy%2BD4QsCtOHYzaRnDdAXwIs2uAMyEJdD3WZv7s6HIGwk6aEGzKYS1akoCJSzVNqKOAHvyo3yVc6swqGOqXzPjTWSXK5uaq7Mn6dhqgF5C6MhRDM19mmCo%2FSZadJHTFXeSaw7AxcHOPCG%2Be4J%2FNxt8uCu91hqAvFQ%2BC8Q9OtNxieTstihctG57RChfHWGbeDpDbGu940mkMQGEfxb4dvsy6ouvIQs%2FQmDzYVLO6GCrSa%2F8o4keAZGjyGrfqpx37CciNeKFDPAkrQHzaDp9gRCCZcTlr10vlQE1naPRw%2FZUE2yy6wnhrg6vrCIo%2FbPER8u4C7Rei6%2B8a5qzTxc23Lg%2BT2YCMu0SjLtJt5wiH1nAdGxTDh6yx%2BNx4qRJv7tvjCGNpz3gRwT8Ydqit3MKSrtUr2MC69VMLfJvsEGOqUBcNOwBwWdsutoqPUkW%2B0L%2B9q%2FIeyOLKPZCh4CZQ38ZC63rTWR5DscW0lhm7JmigzMNQCFoiTZSk399kEd%2FmjBVcISJlr3rXMHVLvJyCMfgGlOIi%2B6hIMfsaiRpp6ZmN%2B%2Bafukde708Fmud1EDwmbrb%2Bqmzz0xTJ6m%2BO%2BDJIUaps6MdS3z2KgU%2BKBDZz19hMqk3WRlYcVtnTxk4npHQSOyQrWMcdXK&X-Amz-Signature=65dc969a8b99d22c07135f0d13c586f22e056f9b5a8c83801147c561bdf7e738&X-Amz-SignedHeaders=host&x-id=GetObject)
