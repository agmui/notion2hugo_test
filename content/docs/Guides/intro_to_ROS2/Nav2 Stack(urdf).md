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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VMC52DK%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0TCvRTswz5ieF%2FCulckamNrRGigPKw5vNrYtaXQuyNAiAYg7W9MdvcmwymH2bF6zapapVZ5InUyZv5E9E5cI1hZiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbTfI8uW7TBzM1dPrKtwDwhZfKwWEygMsNIegnkrkGHoejyBGuR9Qh3c9scj562Q32XxGA2CQqsJBP7pgsQ%2B5J9qKWRFuGbvh6bZcHv2r%2FrbWaFcxUKQRzrDDAcoJn64AEJitm0kVKUnhnzPyyhI01mrkEaWr01sS3YVzqjCeWAZagwEF6LDczfR93dUSMjdEy%2Fsc1OAjboPh7kuXKUJ4ih%2FCqsrA%2BEnAE09yg%2FBzcV%2BoV1fcMdd%2FJQZ41qCDSrbItxT6im301Ag6mJ9kfySrkgiUADYyeNnoM6HJ4Hd8DE47V7K9j86QN7uVxW4ICv0oqSXtuHUa0DNpTDL62mGSv8piwA8FA4Gu4L6WqFHTrBXE8K%2BKs3DClfCk5wJk7rHKnnWJhDGc3iIbr%2FIjKgaLYI3SK4iAKUoeNPK7ZImqQQOx4MzcVcLbJggs%2B%2FysK9iCQjzjSQfMTPsxfEQpjT9Au1jSdcQ8M2hiNhXZdPMxzViS%2F5jQkgHLNDS5J2ANczUq8VKJ%2FldCmvwWOC%2BFW5CZ9fqCdrLk9TBeeL84lxvGkmxoHQi7vQPLvtyBX94DVWcpNm41b0GXOYhczAHKJ4q273R0kEMqsBprqOBoupZb3GW2GPVla7pM%2FHsyjsgFiUyQFnsOwUhR6grLfnow2tb7wAY6pgH6Kxw0gmDBbooOgYFrSqmo%2BHgF4HnAbhtr6UCMGeJbOUwOW4aultwC3w3OK%2FWpDYlZmip9lH3m1AUMwEvV3oqQ2Dw3xhU0WXdEKE1xO5xiLW7391Agj9eXaAtt1N5%2FzQ1N8h9su3jZQiDcP%2F%2BtOyQjlA6xYTBDbhbtMDvcfgSc%2FaJofahXwCG5M6hMfGGXsFpjYnP9tCLCt%2FmSEIIGlJbehflSi8wH&X-Amz-Signature=7b23413daa026f86e1ab04435209de1eb31db898912b5ecbedb6d4433ab85797&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VMC52DK%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0TCvRTswz5ieF%2FCulckamNrRGigPKw5vNrYtaXQuyNAiAYg7W9MdvcmwymH2bF6zapapVZ5InUyZv5E9E5cI1hZiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbTfI8uW7TBzM1dPrKtwDwhZfKwWEygMsNIegnkrkGHoejyBGuR9Qh3c9scj562Q32XxGA2CQqsJBP7pgsQ%2B5J9qKWRFuGbvh6bZcHv2r%2FrbWaFcxUKQRzrDDAcoJn64AEJitm0kVKUnhnzPyyhI01mrkEaWr01sS3YVzqjCeWAZagwEF6LDczfR93dUSMjdEy%2Fsc1OAjboPh7kuXKUJ4ih%2FCqsrA%2BEnAE09yg%2FBzcV%2BoV1fcMdd%2FJQZ41qCDSrbItxT6im301Ag6mJ9kfySrkgiUADYyeNnoM6HJ4Hd8DE47V7K9j86QN7uVxW4ICv0oqSXtuHUa0DNpTDL62mGSv8piwA8FA4Gu4L6WqFHTrBXE8K%2BKs3DClfCk5wJk7rHKnnWJhDGc3iIbr%2FIjKgaLYI3SK4iAKUoeNPK7ZImqQQOx4MzcVcLbJggs%2B%2FysK9iCQjzjSQfMTPsxfEQpjT9Au1jSdcQ8M2hiNhXZdPMxzViS%2F5jQkgHLNDS5J2ANczUq8VKJ%2FldCmvwWOC%2BFW5CZ9fqCdrLk9TBeeL84lxvGkmxoHQi7vQPLvtyBX94DVWcpNm41b0GXOYhczAHKJ4q273R0kEMqsBprqOBoupZb3GW2GPVla7pM%2FHsyjsgFiUyQFnsOwUhR6grLfnow2tb7wAY6pgH6Kxw0gmDBbooOgYFrSqmo%2BHgF4HnAbhtr6UCMGeJbOUwOW4aultwC3w3OK%2FWpDYlZmip9lH3m1AUMwEvV3oqQ2Dw3xhU0WXdEKE1xO5xiLW7391Agj9eXaAtt1N5%2FzQ1N8h9su3jZQiDcP%2F%2BtOyQjlA6xYTBDbhbtMDvcfgSc%2FaJofahXwCG5M6hMfGGXsFpjYnP9tCLCt%2FmSEIIGlJbehflSi8wH&X-Amz-Signature=ba055308f2c2e777316abe0380655aaed0f7248327b459ffbf1435e684a20711&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VMC52DK%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0TCvRTswz5ieF%2FCulckamNrRGigPKw5vNrYtaXQuyNAiAYg7W9MdvcmwymH2bF6zapapVZ5InUyZv5E9E5cI1hZiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbTfI8uW7TBzM1dPrKtwDwhZfKwWEygMsNIegnkrkGHoejyBGuR9Qh3c9scj562Q32XxGA2CQqsJBP7pgsQ%2B5J9qKWRFuGbvh6bZcHv2r%2FrbWaFcxUKQRzrDDAcoJn64AEJitm0kVKUnhnzPyyhI01mrkEaWr01sS3YVzqjCeWAZagwEF6LDczfR93dUSMjdEy%2Fsc1OAjboPh7kuXKUJ4ih%2FCqsrA%2BEnAE09yg%2FBzcV%2BoV1fcMdd%2FJQZ41qCDSrbItxT6im301Ag6mJ9kfySrkgiUADYyeNnoM6HJ4Hd8DE47V7K9j86QN7uVxW4ICv0oqSXtuHUa0DNpTDL62mGSv8piwA8FA4Gu4L6WqFHTrBXE8K%2BKs3DClfCk5wJk7rHKnnWJhDGc3iIbr%2FIjKgaLYI3SK4iAKUoeNPK7ZImqQQOx4MzcVcLbJggs%2B%2FysK9iCQjzjSQfMTPsxfEQpjT9Au1jSdcQ8M2hiNhXZdPMxzViS%2F5jQkgHLNDS5J2ANczUq8VKJ%2FldCmvwWOC%2BFW5CZ9fqCdrLk9TBeeL84lxvGkmxoHQi7vQPLvtyBX94DVWcpNm41b0GXOYhczAHKJ4q273R0kEMqsBprqOBoupZb3GW2GPVla7pM%2FHsyjsgFiUyQFnsOwUhR6grLfnow2tb7wAY6pgH6Kxw0gmDBbooOgYFrSqmo%2BHgF4HnAbhtr6UCMGeJbOUwOW4aultwC3w3OK%2FWpDYlZmip9lH3m1AUMwEvV3oqQ2Dw3xhU0WXdEKE1xO5xiLW7391Agj9eXaAtt1N5%2FzQ1N8h9su3jZQiDcP%2F%2BtOyQjlA6xYTBDbhbtMDvcfgSc%2FaJofahXwCG5M6hMfGGXsFpjYnP9tCLCt%2FmSEIIGlJbehflSi8wH&X-Amz-Signature=a6dbead2643390e82a08140d7f6dc5317f8a7ed34f6ea6d0c6bcedc68fb54975&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VMC52DK%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0TCvRTswz5ieF%2FCulckamNrRGigPKw5vNrYtaXQuyNAiAYg7W9MdvcmwymH2bF6zapapVZ5InUyZv5E9E5cI1hZiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbTfI8uW7TBzM1dPrKtwDwhZfKwWEygMsNIegnkrkGHoejyBGuR9Qh3c9scj562Q32XxGA2CQqsJBP7pgsQ%2B5J9qKWRFuGbvh6bZcHv2r%2FrbWaFcxUKQRzrDDAcoJn64AEJitm0kVKUnhnzPyyhI01mrkEaWr01sS3YVzqjCeWAZagwEF6LDczfR93dUSMjdEy%2Fsc1OAjboPh7kuXKUJ4ih%2FCqsrA%2BEnAE09yg%2FBzcV%2BoV1fcMdd%2FJQZ41qCDSrbItxT6im301Ag6mJ9kfySrkgiUADYyeNnoM6HJ4Hd8DE47V7K9j86QN7uVxW4ICv0oqSXtuHUa0DNpTDL62mGSv8piwA8FA4Gu4L6WqFHTrBXE8K%2BKs3DClfCk5wJk7rHKnnWJhDGc3iIbr%2FIjKgaLYI3SK4iAKUoeNPK7ZImqQQOx4MzcVcLbJggs%2B%2FysK9iCQjzjSQfMTPsxfEQpjT9Au1jSdcQ8M2hiNhXZdPMxzViS%2F5jQkgHLNDS5J2ANczUq8VKJ%2FldCmvwWOC%2BFW5CZ9fqCdrLk9TBeeL84lxvGkmxoHQi7vQPLvtyBX94DVWcpNm41b0GXOYhczAHKJ4q273R0kEMqsBprqOBoupZb3GW2GPVla7pM%2FHsyjsgFiUyQFnsOwUhR6grLfnow2tb7wAY6pgH6Kxw0gmDBbooOgYFrSqmo%2BHgF4HnAbhtr6UCMGeJbOUwOW4aultwC3w3OK%2FWpDYlZmip9lH3m1AUMwEvV3oqQ2Dw3xhU0WXdEKE1xO5xiLW7391Agj9eXaAtt1N5%2FzQ1N8h9su3jZQiDcP%2F%2BtOyQjlA6xYTBDbhbtMDvcfgSc%2FaJofahXwCG5M6hMfGGXsFpjYnP9tCLCt%2FmSEIIGlJbehflSi8wH&X-Amz-Signature=94556c9b191e36aaef47967937fe949e88ecb2c982c73e23271d8cac58191774&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VMC52DK%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0TCvRTswz5ieF%2FCulckamNrRGigPKw5vNrYtaXQuyNAiAYg7W9MdvcmwymH2bF6zapapVZ5InUyZv5E9E5cI1hZiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbTfI8uW7TBzM1dPrKtwDwhZfKwWEygMsNIegnkrkGHoejyBGuR9Qh3c9scj562Q32XxGA2CQqsJBP7pgsQ%2B5J9qKWRFuGbvh6bZcHv2r%2FrbWaFcxUKQRzrDDAcoJn64AEJitm0kVKUnhnzPyyhI01mrkEaWr01sS3YVzqjCeWAZagwEF6LDczfR93dUSMjdEy%2Fsc1OAjboPh7kuXKUJ4ih%2FCqsrA%2BEnAE09yg%2FBzcV%2BoV1fcMdd%2FJQZ41qCDSrbItxT6im301Ag6mJ9kfySrkgiUADYyeNnoM6HJ4Hd8DE47V7K9j86QN7uVxW4ICv0oqSXtuHUa0DNpTDL62mGSv8piwA8FA4Gu4L6WqFHTrBXE8K%2BKs3DClfCk5wJk7rHKnnWJhDGc3iIbr%2FIjKgaLYI3SK4iAKUoeNPK7ZImqQQOx4MzcVcLbJggs%2B%2FysK9iCQjzjSQfMTPsxfEQpjT9Au1jSdcQ8M2hiNhXZdPMxzViS%2F5jQkgHLNDS5J2ANczUq8VKJ%2FldCmvwWOC%2BFW5CZ9fqCdrLk9TBeeL84lxvGkmxoHQi7vQPLvtyBX94DVWcpNm41b0GXOYhczAHKJ4q273R0kEMqsBprqOBoupZb3GW2GPVla7pM%2FHsyjsgFiUyQFnsOwUhR6grLfnow2tb7wAY6pgH6Kxw0gmDBbooOgYFrSqmo%2BHgF4HnAbhtr6UCMGeJbOUwOW4aultwC3w3OK%2FWpDYlZmip9lH3m1AUMwEvV3oqQ2Dw3xhU0WXdEKE1xO5xiLW7391Agj9eXaAtt1N5%2FzQ1N8h9su3jZQiDcP%2F%2BtOyQjlA6xYTBDbhbtMDvcfgSc%2FaJofahXwCG5M6hMfGGXsFpjYnP9tCLCt%2FmSEIIGlJbehflSi8wH&X-Amz-Signature=09abeaf7be01072a49a494b1d2c149499183645c845e1867966ffaa5dddf9078&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VMC52DK%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0TCvRTswz5ieF%2FCulckamNrRGigPKw5vNrYtaXQuyNAiAYg7W9MdvcmwymH2bF6zapapVZ5InUyZv5E9E5cI1hZiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbTfI8uW7TBzM1dPrKtwDwhZfKwWEygMsNIegnkrkGHoejyBGuR9Qh3c9scj562Q32XxGA2CQqsJBP7pgsQ%2B5J9qKWRFuGbvh6bZcHv2r%2FrbWaFcxUKQRzrDDAcoJn64AEJitm0kVKUnhnzPyyhI01mrkEaWr01sS3YVzqjCeWAZagwEF6LDczfR93dUSMjdEy%2Fsc1OAjboPh7kuXKUJ4ih%2FCqsrA%2BEnAE09yg%2FBzcV%2BoV1fcMdd%2FJQZ41qCDSrbItxT6im301Ag6mJ9kfySrkgiUADYyeNnoM6HJ4Hd8DE47V7K9j86QN7uVxW4ICv0oqSXtuHUa0DNpTDL62mGSv8piwA8FA4Gu4L6WqFHTrBXE8K%2BKs3DClfCk5wJk7rHKnnWJhDGc3iIbr%2FIjKgaLYI3SK4iAKUoeNPK7ZImqQQOx4MzcVcLbJggs%2B%2FysK9iCQjzjSQfMTPsxfEQpjT9Au1jSdcQ8M2hiNhXZdPMxzViS%2F5jQkgHLNDS5J2ANczUq8VKJ%2FldCmvwWOC%2BFW5CZ9fqCdrLk9TBeeL84lxvGkmxoHQi7vQPLvtyBX94DVWcpNm41b0GXOYhczAHKJ4q273R0kEMqsBprqOBoupZb3GW2GPVla7pM%2FHsyjsgFiUyQFnsOwUhR6grLfnow2tb7wAY6pgH6Kxw0gmDBbooOgYFrSqmo%2BHgF4HnAbhtr6UCMGeJbOUwOW4aultwC3w3OK%2FWpDYlZmip9lH3m1AUMwEvV3oqQ2Dw3xhU0WXdEKE1xO5xiLW7391Agj9eXaAtt1N5%2FzQ1N8h9su3jZQiDcP%2F%2BtOyQjlA6xYTBDbhbtMDvcfgSc%2FaJofahXwCG5M6hMfGGXsFpjYnP9tCLCt%2FmSEIIGlJbehflSi8wH&X-Amz-Signature=c630c1ac8204acb390c0dfe48a73996b7dde440efff72293af4027d8767af7cb&X-Amz-SignedHeaders=host&x-id=GetObject)
