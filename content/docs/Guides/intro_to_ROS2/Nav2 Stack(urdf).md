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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QTU3CAG%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T121414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDEraeT0MDdtcf53c4PeDEzZEwQ8dYsP%2BzWbI70sGsb1QIhAMr2AWn2JiCae9kKoCCJBWEcFIfo%2B1k%2FTbVCddNhlhOWKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf5%2FGAouwBAJvix6wq3AP2vY0ryda%2BdQoU8BZSLZ%2BLvkZJ4iWG74Ch2fMiaNj4jVM%2FwemrXDgOzwIFXJu5UQdhef3MWbablBacGCuCE9eY8%2FYLK5nLnLiz8DlUEEdpKZEYJZtCDG0YcljwF9sMMn6RHwtJ6UuxIBasFIKcLfrIhBeJytiQiaTs7yFqiTC5h9arp9D2pQJYlSN1xdHPaCgNxOWgmE3Z%2B%2FFk%2FZBu9EsFphNL87QZjx4EIdMT651BirXjt1XslF6igLmN1N%2B%2BLxcDrURETXJRDhC%2BylEPQaqAnktg8dYXPrrnRwLd9r6F%2FjYw1XjXs8NlCCCQOQBni05VQ4oNk19BIv6jJfFU6cRS8FKdijaJqiM73ioc3rtCCBIlVLTehM2jXBm2P1C3zMrJ764ZMmIYbpgMac4bGsLJe%2FEukt1jxgxM%2B066lLzBni3%2FAlPg0JVI3ibcEt9ILBH3gJjE9Lq%2BhNgQk81Un022b35vHigth7OWP7UvMh%2BMDg4HBdCNJpLwegE%2FiteG%2BT%2Fdqj4Q6bweyN8csk1poI8Kkl5pQZkAruAk%2FX%2FPeJs6pvnH%2B4GxHwCSKU%2F4%2FgZw3bw1Hu2U36UQEaNTQ8hfCSQsRmp6%2FZKdqWiOZ24Ek89eSgyhC64AuIPDheB2aTDd%2B9a9BjqkAS%2FSeM85jc6LJg3h8ZSfLd4txUjmJHxGn9eEkZnZ609ZIiK3Sp9eo%2FbXKrBxEnif8e4fusjECHjmZPUR8%2B%2B6GpTf9XdJ8%2FaqHIHUYoo%2BG8BR23RjFm9CwLSRp14Dqvus5eKZv6M4SdtkntCQnltF6yzPf5D49Iu1W27WxgrfE6ANpDN5tuTGhJ%2FJ34DVtCyPxKM5uvVio%2BNMdcNFWKZYj7r4LPR6&X-Amz-Signature=52aa4e74d08b843afb74c63cd71dceca1854bd39be6a600cf1d37d61511dd2d4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QTU3CAG%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T121414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDEraeT0MDdtcf53c4PeDEzZEwQ8dYsP%2BzWbI70sGsb1QIhAMr2AWn2JiCae9kKoCCJBWEcFIfo%2B1k%2FTbVCddNhlhOWKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf5%2FGAouwBAJvix6wq3AP2vY0ryda%2BdQoU8BZSLZ%2BLvkZJ4iWG74Ch2fMiaNj4jVM%2FwemrXDgOzwIFXJu5UQdhef3MWbablBacGCuCE9eY8%2FYLK5nLnLiz8DlUEEdpKZEYJZtCDG0YcljwF9sMMn6RHwtJ6UuxIBasFIKcLfrIhBeJytiQiaTs7yFqiTC5h9arp9D2pQJYlSN1xdHPaCgNxOWgmE3Z%2B%2FFk%2FZBu9EsFphNL87QZjx4EIdMT651BirXjt1XslF6igLmN1N%2B%2BLxcDrURETXJRDhC%2BylEPQaqAnktg8dYXPrrnRwLd9r6F%2FjYw1XjXs8NlCCCQOQBni05VQ4oNk19BIv6jJfFU6cRS8FKdijaJqiM73ioc3rtCCBIlVLTehM2jXBm2P1C3zMrJ764ZMmIYbpgMac4bGsLJe%2FEukt1jxgxM%2B066lLzBni3%2FAlPg0JVI3ibcEt9ILBH3gJjE9Lq%2BhNgQk81Un022b35vHigth7OWP7UvMh%2BMDg4HBdCNJpLwegE%2FiteG%2BT%2Fdqj4Q6bweyN8csk1poI8Kkl5pQZkAruAk%2FX%2FPeJs6pvnH%2B4GxHwCSKU%2F4%2FgZw3bw1Hu2U36UQEaNTQ8hfCSQsRmp6%2FZKdqWiOZ24Ek89eSgyhC64AuIPDheB2aTDd%2B9a9BjqkAS%2FSeM85jc6LJg3h8ZSfLd4txUjmJHxGn9eEkZnZ609ZIiK3Sp9eo%2FbXKrBxEnif8e4fusjECHjmZPUR8%2B%2B6GpTf9XdJ8%2FaqHIHUYoo%2BG8BR23RjFm9CwLSRp14Dqvus5eKZv6M4SdtkntCQnltF6yzPf5D49Iu1W27WxgrfE6ANpDN5tuTGhJ%2FJ34DVtCyPxKM5uvVio%2BNMdcNFWKZYj7r4LPR6&X-Amz-Signature=377acf167606de8411b8ca8192cd1dab399328aba7146a21f177cc790b78d206&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QTU3CAG%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T121414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDEraeT0MDdtcf53c4PeDEzZEwQ8dYsP%2BzWbI70sGsb1QIhAMr2AWn2JiCae9kKoCCJBWEcFIfo%2B1k%2FTbVCddNhlhOWKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf5%2FGAouwBAJvix6wq3AP2vY0ryda%2BdQoU8BZSLZ%2BLvkZJ4iWG74Ch2fMiaNj4jVM%2FwemrXDgOzwIFXJu5UQdhef3MWbablBacGCuCE9eY8%2FYLK5nLnLiz8DlUEEdpKZEYJZtCDG0YcljwF9sMMn6RHwtJ6UuxIBasFIKcLfrIhBeJytiQiaTs7yFqiTC5h9arp9D2pQJYlSN1xdHPaCgNxOWgmE3Z%2B%2FFk%2FZBu9EsFphNL87QZjx4EIdMT651BirXjt1XslF6igLmN1N%2B%2BLxcDrURETXJRDhC%2BylEPQaqAnktg8dYXPrrnRwLd9r6F%2FjYw1XjXs8NlCCCQOQBni05VQ4oNk19BIv6jJfFU6cRS8FKdijaJqiM73ioc3rtCCBIlVLTehM2jXBm2P1C3zMrJ764ZMmIYbpgMac4bGsLJe%2FEukt1jxgxM%2B066lLzBni3%2FAlPg0JVI3ibcEt9ILBH3gJjE9Lq%2BhNgQk81Un022b35vHigth7OWP7UvMh%2BMDg4HBdCNJpLwegE%2FiteG%2BT%2Fdqj4Q6bweyN8csk1poI8Kkl5pQZkAruAk%2FX%2FPeJs6pvnH%2B4GxHwCSKU%2F4%2FgZw3bw1Hu2U36UQEaNTQ8hfCSQsRmp6%2FZKdqWiOZ24Ek89eSgyhC64AuIPDheB2aTDd%2B9a9BjqkAS%2FSeM85jc6LJg3h8ZSfLd4txUjmJHxGn9eEkZnZ609ZIiK3Sp9eo%2FbXKrBxEnif8e4fusjECHjmZPUR8%2B%2B6GpTf9XdJ8%2FaqHIHUYoo%2BG8BR23RjFm9CwLSRp14Dqvus5eKZv6M4SdtkntCQnltF6yzPf5D49Iu1W27WxgrfE6ANpDN5tuTGhJ%2FJ34DVtCyPxKM5uvVio%2BNMdcNFWKZYj7r4LPR6&X-Amz-Signature=2075f578c7a096306bb9f2481a6f10881f0ffd69f167ec672e50c3e7981b86a3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QTU3CAG%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T121414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDEraeT0MDdtcf53c4PeDEzZEwQ8dYsP%2BzWbI70sGsb1QIhAMr2AWn2JiCae9kKoCCJBWEcFIfo%2B1k%2FTbVCddNhlhOWKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf5%2FGAouwBAJvix6wq3AP2vY0ryda%2BdQoU8BZSLZ%2BLvkZJ4iWG74Ch2fMiaNj4jVM%2FwemrXDgOzwIFXJu5UQdhef3MWbablBacGCuCE9eY8%2FYLK5nLnLiz8DlUEEdpKZEYJZtCDG0YcljwF9sMMn6RHwtJ6UuxIBasFIKcLfrIhBeJytiQiaTs7yFqiTC5h9arp9D2pQJYlSN1xdHPaCgNxOWgmE3Z%2B%2FFk%2FZBu9EsFphNL87QZjx4EIdMT651BirXjt1XslF6igLmN1N%2B%2BLxcDrURETXJRDhC%2BylEPQaqAnktg8dYXPrrnRwLd9r6F%2FjYw1XjXs8NlCCCQOQBni05VQ4oNk19BIv6jJfFU6cRS8FKdijaJqiM73ioc3rtCCBIlVLTehM2jXBm2P1C3zMrJ764ZMmIYbpgMac4bGsLJe%2FEukt1jxgxM%2B066lLzBni3%2FAlPg0JVI3ibcEt9ILBH3gJjE9Lq%2BhNgQk81Un022b35vHigth7OWP7UvMh%2BMDg4HBdCNJpLwegE%2FiteG%2BT%2Fdqj4Q6bweyN8csk1poI8Kkl5pQZkAruAk%2FX%2FPeJs6pvnH%2B4GxHwCSKU%2F4%2FgZw3bw1Hu2U36UQEaNTQ8hfCSQsRmp6%2FZKdqWiOZ24Ek89eSgyhC64AuIPDheB2aTDd%2B9a9BjqkAS%2FSeM85jc6LJg3h8ZSfLd4txUjmJHxGn9eEkZnZ609ZIiK3Sp9eo%2FbXKrBxEnif8e4fusjECHjmZPUR8%2B%2B6GpTf9XdJ8%2FaqHIHUYoo%2BG8BR23RjFm9CwLSRp14Dqvus5eKZv6M4SdtkntCQnltF6yzPf5D49Iu1W27WxgrfE6ANpDN5tuTGhJ%2FJ34DVtCyPxKM5uvVio%2BNMdcNFWKZYj7r4LPR6&X-Amz-Signature=abf37c7fb8ba835fa44e2fec9a0d63773d049536f4270d3911f0d281b9588748&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QTU3CAG%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T121414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDEraeT0MDdtcf53c4PeDEzZEwQ8dYsP%2BzWbI70sGsb1QIhAMr2AWn2JiCae9kKoCCJBWEcFIfo%2B1k%2FTbVCddNhlhOWKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf5%2FGAouwBAJvix6wq3AP2vY0ryda%2BdQoU8BZSLZ%2BLvkZJ4iWG74Ch2fMiaNj4jVM%2FwemrXDgOzwIFXJu5UQdhef3MWbablBacGCuCE9eY8%2FYLK5nLnLiz8DlUEEdpKZEYJZtCDG0YcljwF9sMMn6RHwtJ6UuxIBasFIKcLfrIhBeJytiQiaTs7yFqiTC5h9arp9D2pQJYlSN1xdHPaCgNxOWgmE3Z%2B%2FFk%2FZBu9EsFphNL87QZjx4EIdMT651BirXjt1XslF6igLmN1N%2B%2BLxcDrURETXJRDhC%2BylEPQaqAnktg8dYXPrrnRwLd9r6F%2FjYw1XjXs8NlCCCQOQBni05VQ4oNk19BIv6jJfFU6cRS8FKdijaJqiM73ioc3rtCCBIlVLTehM2jXBm2P1C3zMrJ764ZMmIYbpgMac4bGsLJe%2FEukt1jxgxM%2B066lLzBni3%2FAlPg0JVI3ibcEt9ILBH3gJjE9Lq%2BhNgQk81Un022b35vHigth7OWP7UvMh%2BMDg4HBdCNJpLwegE%2FiteG%2BT%2Fdqj4Q6bweyN8csk1poI8Kkl5pQZkAruAk%2FX%2FPeJs6pvnH%2B4GxHwCSKU%2F4%2FgZw3bw1Hu2U36UQEaNTQ8hfCSQsRmp6%2FZKdqWiOZ24Ek89eSgyhC64AuIPDheB2aTDd%2B9a9BjqkAS%2FSeM85jc6LJg3h8ZSfLd4txUjmJHxGn9eEkZnZ609ZIiK3Sp9eo%2FbXKrBxEnif8e4fusjECHjmZPUR8%2B%2B6GpTf9XdJ8%2FaqHIHUYoo%2BG8BR23RjFm9CwLSRp14Dqvus5eKZv6M4SdtkntCQnltF6yzPf5D49Iu1W27WxgrfE6ANpDN5tuTGhJ%2FJ34DVtCyPxKM5uvVio%2BNMdcNFWKZYj7r4LPR6&X-Amz-Signature=5de2e358b01d502e44c1e4614c696d4a83f2889390d31dde1a64fb132d61c686&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QTU3CAG%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T121414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDEraeT0MDdtcf53c4PeDEzZEwQ8dYsP%2BzWbI70sGsb1QIhAMr2AWn2JiCae9kKoCCJBWEcFIfo%2B1k%2FTbVCddNhlhOWKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf5%2FGAouwBAJvix6wq3AP2vY0ryda%2BdQoU8BZSLZ%2BLvkZJ4iWG74Ch2fMiaNj4jVM%2FwemrXDgOzwIFXJu5UQdhef3MWbablBacGCuCE9eY8%2FYLK5nLnLiz8DlUEEdpKZEYJZtCDG0YcljwF9sMMn6RHwtJ6UuxIBasFIKcLfrIhBeJytiQiaTs7yFqiTC5h9arp9D2pQJYlSN1xdHPaCgNxOWgmE3Z%2B%2FFk%2FZBu9EsFphNL87QZjx4EIdMT651BirXjt1XslF6igLmN1N%2B%2BLxcDrURETXJRDhC%2BylEPQaqAnktg8dYXPrrnRwLd9r6F%2FjYw1XjXs8NlCCCQOQBni05VQ4oNk19BIv6jJfFU6cRS8FKdijaJqiM73ioc3rtCCBIlVLTehM2jXBm2P1C3zMrJ764ZMmIYbpgMac4bGsLJe%2FEukt1jxgxM%2B066lLzBni3%2FAlPg0JVI3ibcEt9ILBH3gJjE9Lq%2BhNgQk81Un022b35vHigth7OWP7UvMh%2BMDg4HBdCNJpLwegE%2FiteG%2BT%2Fdqj4Q6bweyN8csk1poI8Kkl5pQZkAruAk%2FX%2FPeJs6pvnH%2B4GxHwCSKU%2F4%2FgZw3bw1Hu2U36UQEaNTQ8hfCSQsRmp6%2FZKdqWiOZ24Ek89eSgyhC64AuIPDheB2aTDd%2B9a9BjqkAS%2FSeM85jc6LJg3h8ZSfLd4txUjmJHxGn9eEkZnZ609ZIiK3Sp9eo%2FbXKrBxEnif8e4fusjECHjmZPUR8%2B%2B6GpTf9XdJ8%2FaqHIHUYoo%2BG8BR23RjFm9CwLSRp14Dqvus5eKZv6M4SdtkntCQnltF6yzPf5D49Iu1W27WxgrfE6ANpDN5tuTGhJ%2FJ34DVtCyPxKM5uvVio%2BNMdcNFWKZYj7r4LPR6&X-Amz-Signature=b73788bb5ea28592ea11d1fc016e7c7d30c8b982f722101b53f8f6fffab10077&X-Amz-SignedHeaders=host&x-id=GetObject)
