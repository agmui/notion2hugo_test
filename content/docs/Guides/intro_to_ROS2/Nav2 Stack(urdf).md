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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCNRVVYK%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCNOzpwcKpm4EJXK90kLOOIvK7JgdNVAVj9M7sVhhkRjQIgO7rS%2FwSjekDij6LwnbVueQ0pLDFllGsIGNbheHmqBn4qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABvcFycR%2FOIJQLrwCrcA8ogwMQrq6M3AVEUO9NNaieaDCs1esIPKuTjePHSIs9lYwqA2r3v%2BZx469QJideBTUdQmSO5fSZst7y9CWmZqUj9f%2BFEK9MTWLb4cd1H%2Fzd%2BZCW9Lf3eov4yF9lv9OKWoWHNR70MgHFYxMm3en53CHODRJ8C%2FBLwgQFgfs%2BXa%2BIDmqFYzvM6LoF7o48dVcaLKUb4IscpQAIQ%2F%2BQPt9ZCRtwtDFM%2BfLJm77sTx55mD1wZ%2FUge28CO6y2l9MKGNg5ou6Vd3QoTloYUER30Oi0GHfP6IqrEX2cLLkIDWFgke%2BAV%2FJDje1b%2FwiwK2M1%2B2WMk%2Beln43HkCxVXD4EtbosR%2Fyv6XMYRzc4tMiiZ9HxHR0OVx3EnYpxxfPHJOPkAgeuuY5P8Ru%2FR3OQ6kzbOiLpVNxnXLf7rpXip7naiux9cz6XsB1LXmEDNkKGLkXL9jF5wtypZaSjtSz1%2B8JalVtU8y1tf5Smj02%2FNERQwGYvhwMhbj5JEaHCkIhLn3geYMlgY2nCEWsGvz5j7buJcOOx40e9T4bIuj2yGCrJ84RUmP8m1gUr8liMZYyXEjwspWOcsk1GoNv%2BuD4AxeUH%2FMXvMAbeuuZZo249057p%2Bl6rSYi3gDR96M4EjwsW5I3veMK%2FaxL4GOqUBcRay3uQqAUiYtbQWQVxE%2FER%2FxaX4uOz1HnIsVqVsf6jPS3%2FIFDCVnxJtgBrksMZ1PqwkSzyzUMzT1Ev%2Fb8KaaNlbnZFtkTvZiHoziELT%2B58ZhkgF1qIvy55FSxACPqTzoGHOB3nrmpAu9D%2FrWqTWOiPrcyI1d2r9OrNsitn6CeD7RfrywqsX4I2y6MaaK7XJS88M91jCKVxYvgF20LqWuK%2FCSD3G&X-Amz-Signature=32ae95d875cff7753b2c041ada64790c428f4305f3aee1d517af80677c873d6d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCNRVVYK%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCNOzpwcKpm4EJXK90kLOOIvK7JgdNVAVj9M7sVhhkRjQIgO7rS%2FwSjekDij6LwnbVueQ0pLDFllGsIGNbheHmqBn4qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABvcFycR%2FOIJQLrwCrcA8ogwMQrq6M3AVEUO9NNaieaDCs1esIPKuTjePHSIs9lYwqA2r3v%2BZx469QJideBTUdQmSO5fSZst7y9CWmZqUj9f%2BFEK9MTWLb4cd1H%2Fzd%2BZCW9Lf3eov4yF9lv9OKWoWHNR70MgHFYxMm3en53CHODRJ8C%2FBLwgQFgfs%2BXa%2BIDmqFYzvM6LoF7o48dVcaLKUb4IscpQAIQ%2F%2BQPt9ZCRtwtDFM%2BfLJm77sTx55mD1wZ%2FUge28CO6y2l9MKGNg5ou6Vd3QoTloYUER30Oi0GHfP6IqrEX2cLLkIDWFgke%2BAV%2FJDje1b%2FwiwK2M1%2B2WMk%2Beln43HkCxVXD4EtbosR%2Fyv6XMYRzc4tMiiZ9HxHR0OVx3EnYpxxfPHJOPkAgeuuY5P8Ru%2FR3OQ6kzbOiLpVNxnXLf7rpXip7naiux9cz6XsB1LXmEDNkKGLkXL9jF5wtypZaSjtSz1%2B8JalVtU8y1tf5Smj02%2FNERQwGYvhwMhbj5JEaHCkIhLn3geYMlgY2nCEWsGvz5j7buJcOOx40e9T4bIuj2yGCrJ84RUmP8m1gUr8liMZYyXEjwspWOcsk1GoNv%2BuD4AxeUH%2FMXvMAbeuuZZo249057p%2Bl6rSYi3gDR96M4EjwsW5I3veMK%2FaxL4GOqUBcRay3uQqAUiYtbQWQVxE%2FER%2FxaX4uOz1HnIsVqVsf6jPS3%2FIFDCVnxJtgBrksMZ1PqwkSzyzUMzT1Ev%2Fb8KaaNlbnZFtkTvZiHoziELT%2B58ZhkgF1qIvy55FSxACPqTzoGHOB3nrmpAu9D%2FrWqTWOiPrcyI1d2r9OrNsitn6CeD7RfrywqsX4I2y6MaaK7XJS88M91jCKVxYvgF20LqWuK%2FCSD3G&X-Amz-Signature=a02508a8a2a65ba870e3cd11f5b17ee9f8d68c20a2330e48be18ae86cf438c7a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCNRVVYK%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCNOzpwcKpm4EJXK90kLOOIvK7JgdNVAVj9M7sVhhkRjQIgO7rS%2FwSjekDij6LwnbVueQ0pLDFllGsIGNbheHmqBn4qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABvcFycR%2FOIJQLrwCrcA8ogwMQrq6M3AVEUO9NNaieaDCs1esIPKuTjePHSIs9lYwqA2r3v%2BZx469QJideBTUdQmSO5fSZst7y9CWmZqUj9f%2BFEK9MTWLb4cd1H%2Fzd%2BZCW9Lf3eov4yF9lv9OKWoWHNR70MgHFYxMm3en53CHODRJ8C%2FBLwgQFgfs%2BXa%2BIDmqFYzvM6LoF7o48dVcaLKUb4IscpQAIQ%2F%2BQPt9ZCRtwtDFM%2BfLJm77sTx55mD1wZ%2FUge28CO6y2l9MKGNg5ou6Vd3QoTloYUER30Oi0GHfP6IqrEX2cLLkIDWFgke%2BAV%2FJDje1b%2FwiwK2M1%2B2WMk%2Beln43HkCxVXD4EtbosR%2Fyv6XMYRzc4tMiiZ9HxHR0OVx3EnYpxxfPHJOPkAgeuuY5P8Ru%2FR3OQ6kzbOiLpVNxnXLf7rpXip7naiux9cz6XsB1LXmEDNkKGLkXL9jF5wtypZaSjtSz1%2B8JalVtU8y1tf5Smj02%2FNERQwGYvhwMhbj5JEaHCkIhLn3geYMlgY2nCEWsGvz5j7buJcOOx40e9T4bIuj2yGCrJ84RUmP8m1gUr8liMZYyXEjwspWOcsk1GoNv%2BuD4AxeUH%2FMXvMAbeuuZZo249057p%2Bl6rSYi3gDR96M4EjwsW5I3veMK%2FaxL4GOqUBcRay3uQqAUiYtbQWQVxE%2FER%2FxaX4uOz1HnIsVqVsf6jPS3%2FIFDCVnxJtgBrksMZ1PqwkSzyzUMzT1Ev%2Fb8KaaNlbnZFtkTvZiHoziELT%2B58ZhkgF1qIvy55FSxACPqTzoGHOB3nrmpAu9D%2FrWqTWOiPrcyI1d2r9OrNsitn6CeD7RfrywqsX4I2y6MaaK7XJS88M91jCKVxYvgF20LqWuK%2FCSD3G&X-Amz-Signature=c59e78e8993eca73c2ee6f7e8815cd0023e4016d152380bcf25fbaa6a13cfd92&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCNRVVYK%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCNOzpwcKpm4EJXK90kLOOIvK7JgdNVAVj9M7sVhhkRjQIgO7rS%2FwSjekDij6LwnbVueQ0pLDFllGsIGNbheHmqBn4qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABvcFycR%2FOIJQLrwCrcA8ogwMQrq6M3AVEUO9NNaieaDCs1esIPKuTjePHSIs9lYwqA2r3v%2BZx469QJideBTUdQmSO5fSZst7y9CWmZqUj9f%2BFEK9MTWLb4cd1H%2Fzd%2BZCW9Lf3eov4yF9lv9OKWoWHNR70MgHFYxMm3en53CHODRJ8C%2FBLwgQFgfs%2BXa%2BIDmqFYzvM6LoF7o48dVcaLKUb4IscpQAIQ%2F%2BQPt9ZCRtwtDFM%2BfLJm77sTx55mD1wZ%2FUge28CO6y2l9MKGNg5ou6Vd3QoTloYUER30Oi0GHfP6IqrEX2cLLkIDWFgke%2BAV%2FJDje1b%2FwiwK2M1%2B2WMk%2Beln43HkCxVXD4EtbosR%2Fyv6XMYRzc4tMiiZ9HxHR0OVx3EnYpxxfPHJOPkAgeuuY5P8Ru%2FR3OQ6kzbOiLpVNxnXLf7rpXip7naiux9cz6XsB1LXmEDNkKGLkXL9jF5wtypZaSjtSz1%2B8JalVtU8y1tf5Smj02%2FNERQwGYvhwMhbj5JEaHCkIhLn3geYMlgY2nCEWsGvz5j7buJcOOx40e9T4bIuj2yGCrJ84RUmP8m1gUr8liMZYyXEjwspWOcsk1GoNv%2BuD4AxeUH%2FMXvMAbeuuZZo249057p%2Bl6rSYi3gDR96M4EjwsW5I3veMK%2FaxL4GOqUBcRay3uQqAUiYtbQWQVxE%2FER%2FxaX4uOz1HnIsVqVsf6jPS3%2FIFDCVnxJtgBrksMZ1PqwkSzyzUMzT1Ev%2Fb8KaaNlbnZFtkTvZiHoziELT%2B58ZhkgF1qIvy55FSxACPqTzoGHOB3nrmpAu9D%2FrWqTWOiPrcyI1d2r9OrNsitn6CeD7RfrywqsX4I2y6MaaK7XJS88M91jCKVxYvgF20LqWuK%2FCSD3G&X-Amz-Signature=b88b162b5bb4f7dc659e9ce7925cecb84ff8aca97668423c8acb68ed335b6eac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCNRVVYK%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCNOzpwcKpm4EJXK90kLOOIvK7JgdNVAVj9M7sVhhkRjQIgO7rS%2FwSjekDij6LwnbVueQ0pLDFllGsIGNbheHmqBn4qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABvcFycR%2FOIJQLrwCrcA8ogwMQrq6M3AVEUO9NNaieaDCs1esIPKuTjePHSIs9lYwqA2r3v%2BZx469QJideBTUdQmSO5fSZst7y9CWmZqUj9f%2BFEK9MTWLb4cd1H%2Fzd%2BZCW9Lf3eov4yF9lv9OKWoWHNR70MgHFYxMm3en53CHODRJ8C%2FBLwgQFgfs%2BXa%2BIDmqFYzvM6LoF7o48dVcaLKUb4IscpQAIQ%2F%2BQPt9ZCRtwtDFM%2BfLJm77sTx55mD1wZ%2FUge28CO6y2l9MKGNg5ou6Vd3QoTloYUER30Oi0GHfP6IqrEX2cLLkIDWFgke%2BAV%2FJDje1b%2FwiwK2M1%2B2WMk%2Beln43HkCxVXD4EtbosR%2Fyv6XMYRzc4tMiiZ9HxHR0OVx3EnYpxxfPHJOPkAgeuuY5P8Ru%2FR3OQ6kzbOiLpVNxnXLf7rpXip7naiux9cz6XsB1LXmEDNkKGLkXL9jF5wtypZaSjtSz1%2B8JalVtU8y1tf5Smj02%2FNERQwGYvhwMhbj5JEaHCkIhLn3geYMlgY2nCEWsGvz5j7buJcOOx40e9T4bIuj2yGCrJ84RUmP8m1gUr8liMZYyXEjwspWOcsk1GoNv%2BuD4AxeUH%2FMXvMAbeuuZZo249057p%2Bl6rSYi3gDR96M4EjwsW5I3veMK%2FaxL4GOqUBcRay3uQqAUiYtbQWQVxE%2FER%2FxaX4uOz1HnIsVqVsf6jPS3%2FIFDCVnxJtgBrksMZ1PqwkSzyzUMzT1Ev%2Fb8KaaNlbnZFtkTvZiHoziELT%2B58ZhkgF1qIvy55FSxACPqTzoGHOB3nrmpAu9D%2FrWqTWOiPrcyI1d2r9OrNsitn6CeD7RfrywqsX4I2y6MaaK7XJS88M91jCKVxYvgF20LqWuK%2FCSD3G&X-Amz-Signature=00ce71b2b334b854fe19c293c683f7e56479412dc9305919fff34896b54badf9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCNRVVYK%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCNOzpwcKpm4EJXK90kLOOIvK7JgdNVAVj9M7sVhhkRjQIgO7rS%2FwSjekDij6LwnbVueQ0pLDFllGsIGNbheHmqBn4qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABvcFycR%2FOIJQLrwCrcA8ogwMQrq6M3AVEUO9NNaieaDCs1esIPKuTjePHSIs9lYwqA2r3v%2BZx469QJideBTUdQmSO5fSZst7y9CWmZqUj9f%2BFEK9MTWLb4cd1H%2Fzd%2BZCW9Lf3eov4yF9lv9OKWoWHNR70MgHFYxMm3en53CHODRJ8C%2FBLwgQFgfs%2BXa%2BIDmqFYzvM6LoF7o48dVcaLKUb4IscpQAIQ%2F%2BQPt9ZCRtwtDFM%2BfLJm77sTx55mD1wZ%2FUge28CO6y2l9MKGNg5ou6Vd3QoTloYUER30Oi0GHfP6IqrEX2cLLkIDWFgke%2BAV%2FJDje1b%2FwiwK2M1%2B2WMk%2Beln43HkCxVXD4EtbosR%2Fyv6XMYRzc4tMiiZ9HxHR0OVx3EnYpxxfPHJOPkAgeuuY5P8Ru%2FR3OQ6kzbOiLpVNxnXLf7rpXip7naiux9cz6XsB1LXmEDNkKGLkXL9jF5wtypZaSjtSz1%2B8JalVtU8y1tf5Smj02%2FNERQwGYvhwMhbj5JEaHCkIhLn3geYMlgY2nCEWsGvz5j7buJcOOx40e9T4bIuj2yGCrJ84RUmP8m1gUr8liMZYyXEjwspWOcsk1GoNv%2BuD4AxeUH%2FMXvMAbeuuZZo249057p%2Bl6rSYi3gDR96M4EjwsW5I3veMK%2FaxL4GOqUBcRay3uQqAUiYtbQWQVxE%2FER%2FxaX4uOz1HnIsVqVsf6jPS3%2FIFDCVnxJtgBrksMZ1PqwkSzyzUMzT1Ev%2Fb8KaaNlbnZFtkTvZiHoziELT%2B58ZhkgF1qIvy55FSxACPqTzoGHOB3nrmpAu9D%2FrWqTWOiPrcyI1d2r9OrNsitn6CeD7RfrywqsX4I2y6MaaK7XJS88M91jCKVxYvgF20LqWuK%2FCSD3G&X-Amz-Signature=dbac5d1c263d979945a49d25de42c8ec5c51c2aa54c73df1026edcff0f205c95&X-Amz-SignedHeaders=host&x-id=GetObject)
