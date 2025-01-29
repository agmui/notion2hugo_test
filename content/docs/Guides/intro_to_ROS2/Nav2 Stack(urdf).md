---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YN4UNN4%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4OTO0yeuCSDJFGpF2ldxfMeGQVHHJy5xwj%2BeOUE3NHAiB0mCg0DJ65bAqibNls6ldnduxOvq0RzmtgV0zvBcY2MyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNv0%2FlgAh8ihn4T3nKtwDvs0YzE2yxHV4LkII0Qu7of6rgh419pg78AyBpRdnKPaFOj5%2FpTP3TuCM9HDGLY5A2WboM%2FJX7T05IynFd1qDZxo4OMDVcb6rDehC%2FoTvvVM8%2B8%2FPJ24Yef%2BxHzTNqydo32tk98yIw1IH05pKYtyeCEtHx3EOTL3uuWZWLjsZnRmCRZtwWJ%2FbiRSzy2Y2m2iRgdD6xmKoNIh4MUc%2FZvrMfIIAldP%2F9o4NrNup5qSFn%2FPfdHcpmekhaG24THSR4V7KSMQLRv%2BjsMFIsnNI7tOu0z7iKfpWTUhdFIcZu6ySUDm%2FgRbv3N8m34uqkE9gOFouxoGEcv%2B4p2JuJDurJCPrJ3s%2FQcEPUViG8GApDN5nWl0X0wzTXE11GH%2BOJI2H9wOh8eNkNWuBEDsjQKrP7%2Fdc3x3nXCHpo9SUN%2FCreUQqg3bji4hneWPQLVQjfY0%2FgpZKWIsUbXe%2FapflL364o8tI5jVnJBBzorCfU4qxmFjksXybi%2B8QUYj%2B%2BVXb0Rb00ZjTiuAK1TWALxQShyRkPXI2XWVCjJNQdH%2BGgkfqdlS16jjZNciiXR6lm8diZ50dzUjEtWzig8bfPUwxHLdKiYk3V9zKZ8782CwHQrCYgzAj1E4UI4wytiSZaGl%2FjnAwgKrqvAY6pgHeaL3dafPChoBDtPY6A8cpXxoHJ6v%2FjP0iBPNYbjQiAK7vuDoEHY%2BHG60aFtyTvuYIOzJysVRLYtCBDXTCFiKOqr%2FfJwKzNfDWRCgpGS2w2%2FcyKlJupeOBX7a6aswNC0ixoHRl0RjDlR48HOnGLNUq1cBm1oY4agpEqp4wZHsUvaPqR2kcw4TX%2BDERtI%2FvR%2F906wuuCZL9vuEGdaoF5oe5w0obJgGE&X-Amz-Signature=0e35e6170eab14016b524483d3dabbd150db2b25c71994658703275284ab17e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YN4UNN4%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4OTO0yeuCSDJFGpF2ldxfMeGQVHHJy5xwj%2BeOUE3NHAiB0mCg0DJ65bAqibNls6ldnduxOvq0RzmtgV0zvBcY2MyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNv0%2FlgAh8ihn4T3nKtwDvs0YzE2yxHV4LkII0Qu7of6rgh419pg78AyBpRdnKPaFOj5%2FpTP3TuCM9HDGLY5A2WboM%2FJX7T05IynFd1qDZxo4OMDVcb6rDehC%2FoTvvVM8%2B8%2FPJ24Yef%2BxHzTNqydo32tk98yIw1IH05pKYtyeCEtHx3EOTL3uuWZWLjsZnRmCRZtwWJ%2FbiRSzy2Y2m2iRgdD6xmKoNIh4MUc%2FZvrMfIIAldP%2F9o4NrNup5qSFn%2FPfdHcpmekhaG24THSR4V7KSMQLRv%2BjsMFIsnNI7tOu0z7iKfpWTUhdFIcZu6ySUDm%2FgRbv3N8m34uqkE9gOFouxoGEcv%2B4p2JuJDurJCPrJ3s%2FQcEPUViG8GApDN5nWl0X0wzTXE11GH%2BOJI2H9wOh8eNkNWuBEDsjQKrP7%2Fdc3x3nXCHpo9SUN%2FCreUQqg3bji4hneWPQLVQjfY0%2FgpZKWIsUbXe%2FapflL364o8tI5jVnJBBzorCfU4qxmFjksXybi%2B8QUYj%2B%2BVXb0Rb00ZjTiuAK1TWALxQShyRkPXI2XWVCjJNQdH%2BGgkfqdlS16jjZNciiXR6lm8diZ50dzUjEtWzig8bfPUwxHLdKiYk3V9zKZ8782CwHQrCYgzAj1E4UI4wytiSZaGl%2FjnAwgKrqvAY6pgHeaL3dafPChoBDtPY6A8cpXxoHJ6v%2FjP0iBPNYbjQiAK7vuDoEHY%2BHG60aFtyTvuYIOzJysVRLYtCBDXTCFiKOqr%2FfJwKzNfDWRCgpGS2w2%2FcyKlJupeOBX7a6aswNC0ixoHRl0RjDlR48HOnGLNUq1cBm1oY4agpEqp4wZHsUvaPqR2kcw4TX%2BDERtI%2FvR%2F906wuuCZL9vuEGdaoF5oe5w0obJgGE&X-Amz-Signature=fa43373d35fb890e08c67eb764ee0f96e13206b2a0408a180911081a73ab5679&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YN4UNN4%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4OTO0yeuCSDJFGpF2ldxfMeGQVHHJy5xwj%2BeOUE3NHAiB0mCg0DJ65bAqibNls6ldnduxOvq0RzmtgV0zvBcY2MyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNv0%2FlgAh8ihn4T3nKtwDvs0YzE2yxHV4LkII0Qu7of6rgh419pg78AyBpRdnKPaFOj5%2FpTP3TuCM9HDGLY5A2WboM%2FJX7T05IynFd1qDZxo4OMDVcb6rDehC%2FoTvvVM8%2B8%2FPJ24Yef%2BxHzTNqydo32tk98yIw1IH05pKYtyeCEtHx3EOTL3uuWZWLjsZnRmCRZtwWJ%2FbiRSzy2Y2m2iRgdD6xmKoNIh4MUc%2FZvrMfIIAldP%2F9o4NrNup5qSFn%2FPfdHcpmekhaG24THSR4V7KSMQLRv%2BjsMFIsnNI7tOu0z7iKfpWTUhdFIcZu6ySUDm%2FgRbv3N8m34uqkE9gOFouxoGEcv%2B4p2JuJDurJCPrJ3s%2FQcEPUViG8GApDN5nWl0X0wzTXE11GH%2BOJI2H9wOh8eNkNWuBEDsjQKrP7%2Fdc3x3nXCHpo9SUN%2FCreUQqg3bji4hneWPQLVQjfY0%2FgpZKWIsUbXe%2FapflL364o8tI5jVnJBBzorCfU4qxmFjksXybi%2B8QUYj%2B%2BVXb0Rb00ZjTiuAK1TWALxQShyRkPXI2XWVCjJNQdH%2BGgkfqdlS16jjZNciiXR6lm8diZ50dzUjEtWzig8bfPUwxHLdKiYk3V9zKZ8782CwHQrCYgzAj1E4UI4wytiSZaGl%2FjnAwgKrqvAY6pgHeaL3dafPChoBDtPY6A8cpXxoHJ6v%2FjP0iBPNYbjQiAK7vuDoEHY%2BHG60aFtyTvuYIOzJysVRLYtCBDXTCFiKOqr%2FfJwKzNfDWRCgpGS2w2%2FcyKlJupeOBX7a6aswNC0ixoHRl0RjDlR48HOnGLNUq1cBm1oY4agpEqp4wZHsUvaPqR2kcw4TX%2BDERtI%2FvR%2F906wuuCZL9vuEGdaoF5oe5w0obJgGE&X-Amz-Signature=cdbe1bc28c98d163a91684eb7279dfb4f05968278f4b99995876657e3238836f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YN4UNN4%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4OTO0yeuCSDJFGpF2ldxfMeGQVHHJy5xwj%2BeOUE3NHAiB0mCg0DJ65bAqibNls6ldnduxOvq0RzmtgV0zvBcY2MyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNv0%2FlgAh8ihn4T3nKtwDvs0YzE2yxHV4LkII0Qu7of6rgh419pg78AyBpRdnKPaFOj5%2FpTP3TuCM9HDGLY5A2WboM%2FJX7T05IynFd1qDZxo4OMDVcb6rDehC%2FoTvvVM8%2B8%2FPJ24Yef%2BxHzTNqydo32tk98yIw1IH05pKYtyeCEtHx3EOTL3uuWZWLjsZnRmCRZtwWJ%2FbiRSzy2Y2m2iRgdD6xmKoNIh4MUc%2FZvrMfIIAldP%2F9o4NrNup5qSFn%2FPfdHcpmekhaG24THSR4V7KSMQLRv%2BjsMFIsnNI7tOu0z7iKfpWTUhdFIcZu6ySUDm%2FgRbv3N8m34uqkE9gOFouxoGEcv%2B4p2JuJDurJCPrJ3s%2FQcEPUViG8GApDN5nWl0X0wzTXE11GH%2BOJI2H9wOh8eNkNWuBEDsjQKrP7%2Fdc3x3nXCHpo9SUN%2FCreUQqg3bji4hneWPQLVQjfY0%2FgpZKWIsUbXe%2FapflL364o8tI5jVnJBBzorCfU4qxmFjksXybi%2B8QUYj%2B%2BVXb0Rb00ZjTiuAK1TWALxQShyRkPXI2XWVCjJNQdH%2BGgkfqdlS16jjZNciiXR6lm8diZ50dzUjEtWzig8bfPUwxHLdKiYk3V9zKZ8782CwHQrCYgzAj1E4UI4wytiSZaGl%2FjnAwgKrqvAY6pgHeaL3dafPChoBDtPY6A8cpXxoHJ6v%2FjP0iBPNYbjQiAK7vuDoEHY%2BHG60aFtyTvuYIOzJysVRLYtCBDXTCFiKOqr%2FfJwKzNfDWRCgpGS2w2%2FcyKlJupeOBX7a6aswNC0ixoHRl0RjDlR48HOnGLNUq1cBm1oY4agpEqp4wZHsUvaPqR2kcw4TX%2BDERtI%2FvR%2F906wuuCZL9vuEGdaoF5oe5w0obJgGE&X-Amz-Signature=c7cdc495f3df8b27fcd97eda3aaf2c6f5707642d6c3cd3c530b00e31f8daff2d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YN4UNN4%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4OTO0yeuCSDJFGpF2ldxfMeGQVHHJy5xwj%2BeOUE3NHAiB0mCg0DJ65bAqibNls6ldnduxOvq0RzmtgV0zvBcY2MyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNv0%2FlgAh8ihn4T3nKtwDvs0YzE2yxHV4LkII0Qu7of6rgh419pg78AyBpRdnKPaFOj5%2FpTP3TuCM9HDGLY5A2WboM%2FJX7T05IynFd1qDZxo4OMDVcb6rDehC%2FoTvvVM8%2B8%2FPJ24Yef%2BxHzTNqydo32tk98yIw1IH05pKYtyeCEtHx3EOTL3uuWZWLjsZnRmCRZtwWJ%2FbiRSzy2Y2m2iRgdD6xmKoNIh4MUc%2FZvrMfIIAldP%2F9o4NrNup5qSFn%2FPfdHcpmekhaG24THSR4V7KSMQLRv%2BjsMFIsnNI7tOu0z7iKfpWTUhdFIcZu6ySUDm%2FgRbv3N8m34uqkE9gOFouxoGEcv%2B4p2JuJDurJCPrJ3s%2FQcEPUViG8GApDN5nWl0X0wzTXE11GH%2BOJI2H9wOh8eNkNWuBEDsjQKrP7%2Fdc3x3nXCHpo9SUN%2FCreUQqg3bji4hneWPQLVQjfY0%2FgpZKWIsUbXe%2FapflL364o8tI5jVnJBBzorCfU4qxmFjksXybi%2B8QUYj%2B%2BVXb0Rb00ZjTiuAK1TWALxQShyRkPXI2XWVCjJNQdH%2BGgkfqdlS16jjZNciiXR6lm8diZ50dzUjEtWzig8bfPUwxHLdKiYk3V9zKZ8782CwHQrCYgzAj1E4UI4wytiSZaGl%2FjnAwgKrqvAY6pgHeaL3dafPChoBDtPY6A8cpXxoHJ6v%2FjP0iBPNYbjQiAK7vuDoEHY%2BHG60aFtyTvuYIOzJysVRLYtCBDXTCFiKOqr%2FfJwKzNfDWRCgpGS2w2%2FcyKlJupeOBX7a6aswNC0ixoHRl0RjDlR48HOnGLNUq1cBm1oY4agpEqp4wZHsUvaPqR2kcw4TX%2BDERtI%2FvR%2F906wuuCZL9vuEGdaoF5oe5w0obJgGE&X-Amz-Signature=ee9318a6c798469b9e84ea09cd6e8d1259e9ba5169f375347a9b874a9f27bdb6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YN4UNN4%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4OTO0yeuCSDJFGpF2ldxfMeGQVHHJy5xwj%2BeOUE3NHAiB0mCg0DJ65bAqibNls6ldnduxOvq0RzmtgV0zvBcY2MyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNv0%2FlgAh8ihn4T3nKtwDvs0YzE2yxHV4LkII0Qu7of6rgh419pg78AyBpRdnKPaFOj5%2FpTP3TuCM9HDGLY5A2WboM%2FJX7T05IynFd1qDZxo4OMDVcb6rDehC%2FoTvvVM8%2B8%2FPJ24Yef%2BxHzTNqydo32tk98yIw1IH05pKYtyeCEtHx3EOTL3uuWZWLjsZnRmCRZtwWJ%2FbiRSzy2Y2m2iRgdD6xmKoNIh4MUc%2FZvrMfIIAldP%2F9o4NrNup5qSFn%2FPfdHcpmekhaG24THSR4V7KSMQLRv%2BjsMFIsnNI7tOu0z7iKfpWTUhdFIcZu6ySUDm%2FgRbv3N8m34uqkE9gOFouxoGEcv%2B4p2JuJDurJCPrJ3s%2FQcEPUViG8GApDN5nWl0X0wzTXE11GH%2BOJI2H9wOh8eNkNWuBEDsjQKrP7%2Fdc3x3nXCHpo9SUN%2FCreUQqg3bji4hneWPQLVQjfY0%2FgpZKWIsUbXe%2FapflL364o8tI5jVnJBBzorCfU4qxmFjksXybi%2B8QUYj%2B%2BVXb0Rb00ZjTiuAK1TWALxQShyRkPXI2XWVCjJNQdH%2BGgkfqdlS16jjZNciiXR6lm8diZ50dzUjEtWzig8bfPUwxHLdKiYk3V9zKZ8782CwHQrCYgzAj1E4UI4wytiSZaGl%2FjnAwgKrqvAY6pgHeaL3dafPChoBDtPY6A8cpXxoHJ6v%2FjP0iBPNYbjQiAK7vuDoEHY%2BHG60aFtyTvuYIOzJysVRLYtCBDXTCFiKOqr%2FfJwKzNfDWRCgpGS2w2%2FcyKlJupeOBX7a6aswNC0ixoHRl0RjDlR48HOnGLNUq1cBm1oY4agpEqp4wZHsUvaPqR2kcw4TX%2BDERtI%2FvR%2F906wuuCZL9vuEGdaoF5oe5w0obJgGE&X-Amz-Signature=ba1d304c39359b9fda62a3846173b31ad06d8cdfc4f21128d935abebdee9ec31&X-Amz-SignedHeaders=host&x-id=GetObject)
