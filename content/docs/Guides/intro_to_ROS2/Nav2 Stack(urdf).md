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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677SCDMOY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDIyb2%2BbfpVWljUcZfVnJcPMkRtzMTJjxd2TcIjTvgWvwIhAJIZhj5dzByd4PaHz8yodujZxa4C%2BRQ1GHwOSEdYwqfYKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxiiwm9eg0sHtFJcIcq3APXLxWj4XgehmL2vdj17Uz2Xl0ia1XplrPk2RK3K4gcqFYBreDV8xuLnCDGHMGQX%2FQn%2FTx9nZ9Uv7liI%2FJA63phUSEN%2FxyMns1PzeuWaRYq8mUfcaLxHV%2FzzL%2B1DZ9ee5Rdl8744QLM%2B%2BW6jcfGTTe0L%2FoTyeROYleTV6CZYUEC9hl65Q9SVJvnOpDLX0rXH8ijuxzu7KMd8zaSsxqKo87gLyC4YZb4aBCPk4cXLc04QK6Fm95p%2FPNACpjm2QL0mj%2BQA%2BvSzxko6z38fwelDNHTgutqlCH36oQ6cAJ79TLFE4kR1wz8n47Xd4PBEYyTAF6V5%2F39S99X59UFNjdKz%2FIupTrKfIR0F4dl95Y2sSZaP55aQ0W7a44lrKpV28%2F5H9ikJ0K5OpyyWci6%2FkolpM4QWQyXuVPM9NADBY1elwLX1oBgqAmMiUMCLwoWgR%2FNBAV6PVbvq1fps3NK%2B1QhGfEMUJn%2FXqy938LNVHkbdqOyGW%2BeJs%2Fk1Yfyea0wMnL%2F6676eREz%2BxnbMWZU2TqFf1sV%2FHf8u7OczK4463msLcd%2B5dcwOTyLDJ6%2BlAsjwlSn3fhCVQqERdh9nbpYaFU%2BvGPHQccxZiH0TZHzKoF7hQesF7KHqI567IZ6%2B4GbCTDX2sO%2BBjqkAbupcLg5tcaQiL8NUvsg%2F7%2FxpXxGbrhBpJi%2F3aRriQs79YGXx99g2S%2BO0KrP17kGWfISO8AzPzv6a9hAha1t4e5OTu2QdLuxcEdj5RmKeLK93pZGVbwZ4M2Tt5IXpM6eSIGbB6xchgrAa7IYBjfK80vw3rq6z3SpDlHZv5NdQ2U4UTpI8J8tcm%2BRC68XNsDEwFOI1AjZNIDYNfbVLlS3qn2CmJHo&X-Amz-Signature=b07bffdfefdfda9c1dd22dcd1d26df031712e2ae534113ee40b83bdbcbb4f09d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677SCDMOY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDIyb2%2BbfpVWljUcZfVnJcPMkRtzMTJjxd2TcIjTvgWvwIhAJIZhj5dzByd4PaHz8yodujZxa4C%2BRQ1GHwOSEdYwqfYKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxiiwm9eg0sHtFJcIcq3APXLxWj4XgehmL2vdj17Uz2Xl0ia1XplrPk2RK3K4gcqFYBreDV8xuLnCDGHMGQX%2FQn%2FTx9nZ9Uv7liI%2FJA63phUSEN%2FxyMns1PzeuWaRYq8mUfcaLxHV%2FzzL%2B1DZ9ee5Rdl8744QLM%2B%2BW6jcfGTTe0L%2FoTyeROYleTV6CZYUEC9hl65Q9SVJvnOpDLX0rXH8ijuxzu7KMd8zaSsxqKo87gLyC4YZb4aBCPk4cXLc04QK6Fm95p%2FPNACpjm2QL0mj%2BQA%2BvSzxko6z38fwelDNHTgutqlCH36oQ6cAJ79TLFE4kR1wz8n47Xd4PBEYyTAF6V5%2F39S99X59UFNjdKz%2FIupTrKfIR0F4dl95Y2sSZaP55aQ0W7a44lrKpV28%2F5H9ikJ0K5OpyyWci6%2FkolpM4QWQyXuVPM9NADBY1elwLX1oBgqAmMiUMCLwoWgR%2FNBAV6PVbvq1fps3NK%2B1QhGfEMUJn%2FXqy938LNVHkbdqOyGW%2BeJs%2Fk1Yfyea0wMnL%2F6676eREz%2BxnbMWZU2TqFf1sV%2FHf8u7OczK4463msLcd%2B5dcwOTyLDJ6%2BlAsjwlSn3fhCVQqERdh9nbpYaFU%2BvGPHQccxZiH0TZHzKoF7hQesF7KHqI567IZ6%2B4GbCTDX2sO%2BBjqkAbupcLg5tcaQiL8NUvsg%2F7%2FxpXxGbrhBpJi%2F3aRriQs79YGXx99g2S%2BO0KrP17kGWfISO8AzPzv6a9hAha1t4e5OTu2QdLuxcEdj5RmKeLK93pZGVbwZ4M2Tt5IXpM6eSIGbB6xchgrAa7IYBjfK80vw3rq6z3SpDlHZv5NdQ2U4UTpI8J8tcm%2BRC68XNsDEwFOI1AjZNIDYNfbVLlS3qn2CmJHo&X-Amz-Signature=8e38c6cc12a26ca014e44cc1e815d5e737e18237931b5817661900b24938d09c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677SCDMOY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDIyb2%2BbfpVWljUcZfVnJcPMkRtzMTJjxd2TcIjTvgWvwIhAJIZhj5dzByd4PaHz8yodujZxa4C%2BRQ1GHwOSEdYwqfYKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxiiwm9eg0sHtFJcIcq3APXLxWj4XgehmL2vdj17Uz2Xl0ia1XplrPk2RK3K4gcqFYBreDV8xuLnCDGHMGQX%2FQn%2FTx9nZ9Uv7liI%2FJA63phUSEN%2FxyMns1PzeuWaRYq8mUfcaLxHV%2FzzL%2B1DZ9ee5Rdl8744QLM%2B%2BW6jcfGTTe0L%2FoTyeROYleTV6CZYUEC9hl65Q9SVJvnOpDLX0rXH8ijuxzu7KMd8zaSsxqKo87gLyC4YZb4aBCPk4cXLc04QK6Fm95p%2FPNACpjm2QL0mj%2BQA%2BvSzxko6z38fwelDNHTgutqlCH36oQ6cAJ79TLFE4kR1wz8n47Xd4PBEYyTAF6V5%2F39S99X59UFNjdKz%2FIupTrKfIR0F4dl95Y2sSZaP55aQ0W7a44lrKpV28%2F5H9ikJ0K5OpyyWci6%2FkolpM4QWQyXuVPM9NADBY1elwLX1oBgqAmMiUMCLwoWgR%2FNBAV6PVbvq1fps3NK%2B1QhGfEMUJn%2FXqy938LNVHkbdqOyGW%2BeJs%2Fk1Yfyea0wMnL%2F6676eREz%2BxnbMWZU2TqFf1sV%2FHf8u7OczK4463msLcd%2B5dcwOTyLDJ6%2BlAsjwlSn3fhCVQqERdh9nbpYaFU%2BvGPHQccxZiH0TZHzKoF7hQesF7KHqI567IZ6%2B4GbCTDX2sO%2BBjqkAbupcLg5tcaQiL8NUvsg%2F7%2FxpXxGbrhBpJi%2F3aRriQs79YGXx99g2S%2BO0KrP17kGWfISO8AzPzv6a9hAha1t4e5OTu2QdLuxcEdj5RmKeLK93pZGVbwZ4M2Tt5IXpM6eSIGbB6xchgrAa7IYBjfK80vw3rq6z3SpDlHZv5NdQ2U4UTpI8J8tcm%2BRC68XNsDEwFOI1AjZNIDYNfbVLlS3qn2CmJHo&X-Amz-Signature=cf1d46da40a98e0bfa253652611cf93cf997f5ab2a6e36f4b72a921142159ca4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677SCDMOY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDIyb2%2BbfpVWljUcZfVnJcPMkRtzMTJjxd2TcIjTvgWvwIhAJIZhj5dzByd4PaHz8yodujZxa4C%2BRQ1GHwOSEdYwqfYKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxiiwm9eg0sHtFJcIcq3APXLxWj4XgehmL2vdj17Uz2Xl0ia1XplrPk2RK3K4gcqFYBreDV8xuLnCDGHMGQX%2FQn%2FTx9nZ9Uv7liI%2FJA63phUSEN%2FxyMns1PzeuWaRYq8mUfcaLxHV%2FzzL%2B1DZ9ee5Rdl8744QLM%2B%2BW6jcfGTTe0L%2FoTyeROYleTV6CZYUEC9hl65Q9SVJvnOpDLX0rXH8ijuxzu7KMd8zaSsxqKo87gLyC4YZb4aBCPk4cXLc04QK6Fm95p%2FPNACpjm2QL0mj%2BQA%2BvSzxko6z38fwelDNHTgutqlCH36oQ6cAJ79TLFE4kR1wz8n47Xd4PBEYyTAF6V5%2F39S99X59UFNjdKz%2FIupTrKfIR0F4dl95Y2sSZaP55aQ0W7a44lrKpV28%2F5H9ikJ0K5OpyyWci6%2FkolpM4QWQyXuVPM9NADBY1elwLX1oBgqAmMiUMCLwoWgR%2FNBAV6PVbvq1fps3NK%2B1QhGfEMUJn%2FXqy938LNVHkbdqOyGW%2BeJs%2Fk1Yfyea0wMnL%2F6676eREz%2BxnbMWZU2TqFf1sV%2FHf8u7OczK4463msLcd%2B5dcwOTyLDJ6%2BlAsjwlSn3fhCVQqERdh9nbpYaFU%2BvGPHQccxZiH0TZHzKoF7hQesF7KHqI567IZ6%2B4GbCTDX2sO%2BBjqkAbupcLg5tcaQiL8NUvsg%2F7%2FxpXxGbrhBpJi%2F3aRriQs79YGXx99g2S%2BO0KrP17kGWfISO8AzPzv6a9hAha1t4e5OTu2QdLuxcEdj5RmKeLK93pZGVbwZ4M2Tt5IXpM6eSIGbB6xchgrAa7IYBjfK80vw3rq6z3SpDlHZv5NdQ2U4UTpI8J8tcm%2BRC68XNsDEwFOI1AjZNIDYNfbVLlS3qn2CmJHo&X-Amz-Signature=6a15756803c217deecf190c60e3ab76b51fa29ba5378dc255ef3825be42eeab5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677SCDMOY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDIyb2%2BbfpVWljUcZfVnJcPMkRtzMTJjxd2TcIjTvgWvwIhAJIZhj5dzByd4PaHz8yodujZxa4C%2BRQ1GHwOSEdYwqfYKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxiiwm9eg0sHtFJcIcq3APXLxWj4XgehmL2vdj17Uz2Xl0ia1XplrPk2RK3K4gcqFYBreDV8xuLnCDGHMGQX%2FQn%2FTx9nZ9Uv7liI%2FJA63phUSEN%2FxyMns1PzeuWaRYq8mUfcaLxHV%2FzzL%2B1DZ9ee5Rdl8744QLM%2B%2BW6jcfGTTe0L%2FoTyeROYleTV6CZYUEC9hl65Q9SVJvnOpDLX0rXH8ijuxzu7KMd8zaSsxqKo87gLyC4YZb4aBCPk4cXLc04QK6Fm95p%2FPNACpjm2QL0mj%2BQA%2BvSzxko6z38fwelDNHTgutqlCH36oQ6cAJ79TLFE4kR1wz8n47Xd4PBEYyTAF6V5%2F39S99X59UFNjdKz%2FIupTrKfIR0F4dl95Y2sSZaP55aQ0W7a44lrKpV28%2F5H9ikJ0K5OpyyWci6%2FkolpM4QWQyXuVPM9NADBY1elwLX1oBgqAmMiUMCLwoWgR%2FNBAV6PVbvq1fps3NK%2B1QhGfEMUJn%2FXqy938LNVHkbdqOyGW%2BeJs%2Fk1Yfyea0wMnL%2F6676eREz%2BxnbMWZU2TqFf1sV%2FHf8u7OczK4463msLcd%2B5dcwOTyLDJ6%2BlAsjwlSn3fhCVQqERdh9nbpYaFU%2BvGPHQccxZiH0TZHzKoF7hQesF7KHqI567IZ6%2B4GbCTDX2sO%2BBjqkAbupcLg5tcaQiL8NUvsg%2F7%2FxpXxGbrhBpJi%2F3aRriQs79YGXx99g2S%2BO0KrP17kGWfISO8AzPzv6a9hAha1t4e5OTu2QdLuxcEdj5RmKeLK93pZGVbwZ4M2Tt5IXpM6eSIGbB6xchgrAa7IYBjfK80vw3rq6z3SpDlHZv5NdQ2U4UTpI8J8tcm%2BRC68XNsDEwFOI1AjZNIDYNfbVLlS3qn2CmJHo&X-Amz-Signature=f372652679255095f9ea06b3a4676fc0cf920fdc2df700b2e79b5af2d2c5257b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677SCDMOY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDIyb2%2BbfpVWljUcZfVnJcPMkRtzMTJjxd2TcIjTvgWvwIhAJIZhj5dzByd4PaHz8yodujZxa4C%2BRQ1GHwOSEdYwqfYKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxiiwm9eg0sHtFJcIcq3APXLxWj4XgehmL2vdj17Uz2Xl0ia1XplrPk2RK3K4gcqFYBreDV8xuLnCDGHMGQX%2FQn%2FTx9nZ9Uv7liI%2FJA63phUSEN%2FxyMns1PzeuWaRYq8mUfcaLxHV%2FzzL%2B1DZ9ee5Rdl8744QLM%2B%2BW6jcfGTTe0L%2FoTyeROYleTV6CZYUEC9hl65Q9SVJvnOpDLX0rXH8ijuxzu7KMd8zaSsxqKo87gLyC4YZb4aBCPk4cXLc04QK6Fm95p%2FPNACpjm2QL0mj%2BQA%2BvSzxko6z38fwelDNHTgutqlCH36oQ6cAJ79TLFE4kR1wz8n47Xd4PBEYyTAF6V5%2F39S99X59UFNjdKz%2FIupTrKfIR0F4dl95Y2sSZaP55aQ0W7a44lrKpV28%2F5H9ikJ0K5OpyyWci6%2FkolpM4QWQyXuVPM9NADBY1elwLX1oBgqAmMiUMCLwoWgR%2FNBAV6PVbvq1fps3NK%2B1QhGfEMUJn%2FXqy938LNVHkbdqOyGW%2BeJs%2Fk1Yfyea0wMnL%2F6676eREz%2BxnbMWZU2TqFf1sV%2FHf8u7OczK4463msLcd%2B5dcwOTyLDJ6%2BlAsjwlSn3fhCVQqERdh9nbpYaFU%2BvGPHQccxZiH0TZHzKoF7hQesF7KHqI567IZ6%2B4GbCTDX2sO%2BBjqkAbupcLg5tcaQiL8NUvsg%2F7%2FxpXxGbrhBpJi%2F3aRriQs79YGXx99g2S%2BO0KrP17kGWfISO8AzPzv6a9hAha1t4e5OTu2QdLuxcEdj5RmKeLK93pZGVbwZ4M2Tt5IXpM6eSIGbB6xchgrAa7IYBjfK80vw3rq6z3SpDlHZv5NdQ2U4UTpI8J8tcm%2BRC68XNsDEwFOI1AjZNIDYNfbVLlS3qn2CmJHo&X-Amz-Signature=1b3ddef6b04a03e552a0dbe3a6ee2f76997a58242d8a8fd4ca5fc71c61d2b79a&X-Amz-SignedHeaders=host&x-id=GetObject)
