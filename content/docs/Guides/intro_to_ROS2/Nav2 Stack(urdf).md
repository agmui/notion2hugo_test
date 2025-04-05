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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NJZLZM3%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSgkBoaJCl5tLXbjMBfjefpRX4VyS0XCYH1RV6Yr0l3AiEA%2Bk6Z1p7hSYkjtRglWpNtfP3Bn2eVi91qQPT%2FxeVAZ6wq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEtikVye3BYGsyDu3yrcA9u0cZeYWy5m1%2BFsHDLBN86iFfzAYzn0RYQprlGoyTfruy4AlihLLu7lfPIV8%2BWx2g4uULWXqxAJ9xZAZhCbZbS9GxOOwpHgPRy%2FHD6LH%2BEkjJm9vVbg0vlYFWVQIPAb6L3nN5ffPutiwG4uK4UvWVewJqztMBsT%2FvxGYVw4DkxO2psqrYUIAcQgwoAsjrWNl5TxOaYpWDYqUyutqthPQUxwLsq7c3m%2B66UCMR0afFYCilB4sNH51knDopRSBWd%2FMKphhOsNDxMLXW7jvTLSNA5fthNlZNGEvT31AAjgwGCOijgbkRNCbjNgjK7boU3T1sW9wCMJ4chZIoZg8CVNtVIpzvNsh1%2BrnrUHpePB%2BfElHD9uwg2y5APjr4Qo7pBH4zJil9qyFfix0AW5D1PBuP8GLo7zqotCiQ%2BSbYVwNd0je5CE4Hi0%2B4netU9XMqLZZ11p%2Bw%2B6rkDHvhTTkr%2BWjQjZne%2BjrxL7%2FsZ8k%2BOfIpkYV7Oq%2F%2B4%2F9ml6vhyBInMPViPZImf1tH43BMG66RYDrqIeWPEFIKhgdKV%2B49Hc8Q3hvTq%2FKyca8NhQFnp3YscU2%2BPANRhdbigrnIPqoJeXuCZrjZqTpc%2BR8FnnlCSZ3UAG2%2BQivo2hLbqG14UlMOHjw78GOqUBkvc0o66eIQyLbYxHR3%2BWBF5uJszob%2FFy2P0QWRae9dy38hZt7dcoW6NcXQZUWiCMF7%2F%2F3fuKuDpqEdrhsc60zNdAZjyEqhxQSe9ppA3wEtJsn81oYKFc70lwtKJaWCN1pCFhZEnKBobV9EF3XLBsBCsfh3deki6PscmJoRMvEWr8XbD9SFdZ0G0k%2FrTL7WZm7%2BGkEO9U7KjTdBOkh8pcWx1VEiHf&X-Amz-Signature=246a2454e341f5aadf4e6bf5b29a48254686fb0b26e28511ffc66cd420b13eda&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NJZLZM3%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSgkBoaJCl5tLXbjMBfjefpRX4VyS0XCYH1RV6Yr0l3AiEA%2Bk6Z1p7hSYkjtRglWpNtfP3Bn2eVi91qQPT%2FxeVAZ6wq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEtikVye3BYGsyDu3yrcA9u0cZeYWy5m1%2BFsHDLBN86iFfzAYzn0RYQprlGoyTfruy4AlihLLu7lfPIV8%2BWx2g4uULWXqxAJ9xZAZhCbZbS9GxOOwpHgPRy%2FHD6LH%2BEkjJm9vVbg0vlYFWVQIPAb6L3nN5ffPutiwG4uK4UvWVewJqztMBsT%2FvxGYVw4DkxO2psqrYUIAcQgwoAsjrWNl5TxOaYpWDYqUyutqthPQUxwLsq7c3m%2B66UCMR0afFYCilB4sNH51knDopRSBWd%2FMKphhOsNDxMLXW7jvTLSNA5fthNlZNGEvT31AAjgwGCOijgbkRNCbjNgjK7boU3T1sW9wCMJ4chZIoZg8CVNtVIpzvNsh1%2BrnrUHpePB%2BfElHD9uwg2y5APjr4Qo7pBH4zJil9qyFfix0AW5D1PBuP8GLo7zqotCiQ%2BSbYVwNd0je5CE4Hi0%2B4netU9XMqLZZ11p%2Bw%2B6rkDHvhTTkr%2BWjQjZne%2BjrxL7%2FsZ8k%2BOfIpkYV7Oq%2F%2B4%2F9ml6vhyBInMPViPZImf1tH43BMG66RYDrqIeWPEFIKhgdKV%2B49Hc8Q3hvTq%2FKyca8NhQFnp3YscU2%2BPANRhdbigrnIPqoJeXuCZrjZqTpc%2BR8FnnlCSZ3UAG2%2BQivo2hLbqG14UlMOHjw78GOqUBkvc0o66eIQyLbYxHR3%2BWBF5uJszob%2FFy2P0QWRae9dy38hZt7dcoW6NcXQZUWiCMF7%2F%2F3fuKuDpqEdrhsc60zNdAZjyEqhxQSe9ppA3wEtJsn81oYKFc70lwtKJaWCN1pCFhZEnKBobV9EF3XLBsBCsfh3deki6PscmJoRMvEWr8XbD9SFdZ0G0k%2FrTL7WZm7%2BGkEO9U7KjTdBOkh8pcWx1VEiHf&X-Amz-Signature=180e1b95b08c51c90c4cd5e7cc0520f7acbd89c49d755690c0d38ed97a9ab798&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NJZLZM3%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSgkBoaJCl5tLXbjMBfjefpRX4VyS0XCYH1RV6Yr0l3AiEA%2Bk6Z1p7hSYkjtRglWpNtfP3Bn2eVi91qQPT%2FxeVAZ6wq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEtikVye3BYGsyDu3yrcA9u0cZeYWy5m1%2BFsHDLBN86iFfzAYzn0RYQprlGoyTfruy4AlihLLu7lfPIV8%2BWx2g4uULWXqxAJ9xZAZhCbZbS9GxOOwpHgPRy%2FHD6LH%2BEkjJm9vVbg0vlYFWVQIPAb6L3nN5ffPutiwG4uK4UvWVewJqztMBsT%2FvxGYVw4DkxO2psqrYUIAcQgwoAsjrWNl5TxOaYpWDYqUyutqthPQUxwLsq7c3m%2B66UCMR0afFYCilB4sNH51knDopRSBWd%2FMKphhOsNDxMLXW7jvTLSNA5fthNlZNGEvT31AAjgwGCOijgbkRNCbjNgjK7boU3T1sW9wCMJ4chZIoZg8CVNtVIpzvNsh1%2BrnrUHpePB%2BfElHD9uwg2y5APjr4Qo7pBH4zJil9qyFfix0AW5D1PBuP8GLo7zqotCiQ%2BSbYVwNd0je5CE4Hi0%2B4netU9XMqLZZ11p%2Bw%2B6rkDHvhTTkr%2BWjQjZne%2BjrxL7%2FsZ8k%2BOfIpkYV7Oq%2F%2B4%2F9ml6vhyBInMPViPZImf1tH43BMG66RYDrqIeWPEFIKhgdKV%2B49Hc8Q3hvTq%2FKyca8NhQFnp3YscU2%2BPANRhdbigrnIPqoJeXuCZrjZqTpc%2BR8FnnlCSZ3UAG2%2BQivo2hLbqG14UlMOHjw78GOqUBkvc0o66eIQyLbYxHR3%2BWBF5uJszob%2FFy2P0QWRae9dy38hZt7dcoW6NcXQZUWiCMF7%2F%2F3fuKuDpqEdrhsc60zNdAZjyEqhxQSe9ppA3wEtJsn81oYKFc70lwtKJaWCN1pCFhZEnKBobV9EF3XLBsBCsfh3deki6PscmJoRMvEWr8XbD9SFdZ0G0k%2FrTL7WZm7%2BGkEO9U7KjTdBOkh8pcWx1VEiHf&X-Amz-Signature=5f06144965ce76a646800fa4b185e759f3352716960953c15cbe6d554596f586&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NJZLZM3%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSgkBoaJCl5tLXbjMBfjefpRX4VyS0XCYH1RV6Yr0l3AiEA%2Bk6Z1p7hSYkjtRglWpNtfP3Bn2eVi91qQPT%2FxeVAZ6wq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEtikVye3BYGsyDu3yrcA9u0cZeYWy5m1%2BFsHDLBN86iFfzAYzn0RYQprlGoyTfruy4AlihLLu7lfPIV8%2BWx2g4uULWXqxAJ9xZAZhCbZbS9GxOOwpHgPRy%2FHD6LH%2BEkjJm9vVbg0vlYFWVQIPAb6L3nN5ffPutiwG4uK4UvWVewJqztMBsT%2FvxGYVw4DkxO2psqrYUIAcQgwoAsjrWNl5TxOaYpWDYqUyutqthPQUxwLsq7c3m%2B66UCMR0afFYCilB4sNH51knDopRSBWd%2FMKphhOsNDxMLXW7jvTLSNA5fthNlZNGEvT31AAjgwGCOijgbkRNCbjNgjK7boU3T1sW9wCMJ4chZIoZg8CVNtVIpzvNsh1%2BrnrUHpePB%2BfElHD9uwg2y5APjr4Qo7pBH4zJil9qyFfix0AW5D1PBuP8GLo7zqotCiQ%2BSbYVwNd0je5CE4Hi0%2B4netU9XMqLZZ11p%2Bw%2B6rkDHvhTTkr%2BWjQjZne%2BjrxL7%2FsZ8k%2BOfIpkYV7Oq%2F%2B4%2F9ml6vhyBInMPViPZImf1tH43BMG66RYDrqIeWPEFIKhgdKV%2B49Hc8Q3hvTq%2FKyca8NhQFnp3YscU2%2BPANRhdbigrnIPqoJeXuCZrjZqTpc%2BR8FnnlCSZ3UAG2%2BQivo2hLbqG14UlMOHjw78GOqUBkvc0o66eIQyLbYxHR3%2BWBF5uJszob%2FFy2P0QWRae9dy38hZt7dcoW6NcXQZUWiCMF7%2F%2F3fuKuDpqEdrhsc60zNdAZjyEqhxQSe9ppA3wEtJsn81oYKFc70lwtKJaWCN1pCFhZEnKBobV9EF3XLBsBCsfh3deki6PscmJoRMvEWr8XbD9SFdZ0G0k%2FrTL7WZm7%2BGkEO9U7KjTdBOkh8pcWx1VEiHf&X-Amz-Signature=8fdf66f9d23aa308f850d98cb43993c988e23b1515c1cdfa3535ab34db5ce5d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NJZLZM3%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSgkBoaJCl5tLXbjMBfjefpRX4VyS0XCYH1RV6Yr0l3AiEA%2Bk6Z1p7hSYkjtRglWpNtfP3Bn2eVi91qQPT%2FxeVAZ6wq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEtikVye3BYGsyDu3yrcA9u0cZeYWy5m1%2BFsHDLBN86iFfzAYzn0RYQprlGoyTfruy4AlihLLu7lfPIV8%2BWx2g4uULWXqxAJ9xZAZhCbZbS9GxOOwpHgPRy%2FHD6LH%2BEkjJm9vVbg0vlYFWVQIPAb6L3nN5ffPutiwG4uK4UvWVewJqztMBsT%2FvxGYVw4DkxO2psqrYUIAcQgwoAsjrWNl5TxOaYpWDYqUyutqthPQUxwLsq7c3m%2B66UCMR0afFYCilB4sNH51knDopRSBWd%2FMKphhOsNDxMLXW7jvTLSNA5fthNlZNGEvT31AAjgwGCOijgbkRNCbjNgjK7boU3T1sW9wCMJ4chZIoZg8CVNtVIpzvNsh1%2BrnrUHpePB%2BfElHD9uwg2y5APjr4Qo7pBH4zJil9qyFfix0AW5D1PBuP8GLo7zqotCiQ%2BSbYVwNd0je5CE4Hi0%2B4netU9XMqLZZ11p%2Bw%2B6rkDHvhTTkr%2BWjQjZne%2BjrxL7%2FsZ8k%2BOfIpkYV7Oq%2F%2B4%2F9ml6vhyBInMPViPZImf1tH43BMG66RYDrqIeWPEFIKhgdKV%2B49Hc8Q3hvTq%2FKyca8NhQFnp3YscU2%2BPANRhdbigrnIPqoJeXuCZrjZqTpc%2BR8FnnlCSZ3UAG2%2BQivo2hLbqG14UlMOHjw78GOqUBkvc0o66eIQyLbYxHR3%2BWBF5uJszob%2FFy2P0QWRae9dy38hZt7dcoW6NcXQZUWiCMF7%2F%2F3fuKuDpqEdrhsc60zNdAZjyEqhxQSe9ppA3wEtJsn81oYKFc70lwtKJaWCN1pCFhZEnKBobV9EF3XLBsBCsfh3deki6PscmJoRMvEWr8XbD9SFdZ0G0k%2FrTL7WZm7%2BGkEO9U7KjTdBOkh8pcWx1VEiHf&X-Amz-Signature=ba562e598c925b78ee65024841b08bc0ee16a6a9028a5650d373d5658d589069&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NJZLZM3%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSgkBoaJCl5tLXbjMBfjefpRX4VyS0XCYH1RV6Yr0l3AiEA%2Bk6Z1p7hSYkjtRglWpNtfP3Bn2eVi91qQPT%2FxeVAZ6wq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEtikVye3BYGsyDu3yrcA9u0cZeYWy5m1%2BFsHDLBN86iFfzAYzn0RYQprlGoyTfruy4AlihLLu7lfPIV8%2BWx2g4uULWXqxAJ9xZAZhCbZbS9GxOOwpHgPRy%2FHD6LH%2BEkjJm9vVbg0vlYFWVQIPAb6L3nN5ffPutiwG4uK4UvWVewJqztMBsT%2FvxGYVw4DkxO2psqrYUIAcQgwoAsjrWNl5TxOaYpWDYqUyutqthPQUxwLsq7c3m%2B66UCMR0afFYCilB4sNH51knDopRSBWd%2FMKphhOsNDxMLXW7jvTLSNA5fthNlZNGEvT31AAjgwGCOijgbkRNCbjNgjK7boU3T1sW9wCMJ4chZIoZg8CVNtVIpzvNsh1%2BrnrUHpePB%2BfElHD9uwg2y5APjr4Qo7pBH4zJil9qyFfix0AW5D1PBuP8GLo7zqotCiQ%2BSbYVwNd0je5CE4Hi0%2B4netU9XMqLZZ11p%2Bw%2B6rkDHvhTTkr%2BWjQjZne%2BjrxL7%2FsZ8k%2BOfIpkYV7Oq%2F%2B4%2F9ml6vhyBInMPViPZImf1tH43BMG66RYDrqIeWPEFIKhgdKV%2B49Hc8Q3hvTq%2FKyca8NhQFnp3YscU2%2BPANRhdbigrnIPqoJeXuCZrjZqTpc%2BR8FnnlCSZ3UAG2%2BQivo2hLbqG14UlMOHjw78GOqUBkvc0o66eIQyLbYxHR3%2BWBF5uJszob%2FFy2P0QWRae9dy38hZt7dcoW6NcXQZUWiCMF7%2F%2F3fuKuDpqEdrhsc60zNdAZjyEqhxQSe9ppA3wEtJsn81oYKFc70lwtKJaWCN1pCFhZEnKBobV9EF3XLBsBCsfh3deki6PscmJoRMvEWr8XbD9SFdZ0G0k%2FrTL7WZm7%2BGkEO9U7KjTdBOkh8pcWx1VEiHf&X-Amz-Signature=548b96019e794943aedf5a1b3fcfacb20d1d989588a63aecdf62f014409a1726&X-Amz-SignedHeaders=host&x-id=GetObject)
