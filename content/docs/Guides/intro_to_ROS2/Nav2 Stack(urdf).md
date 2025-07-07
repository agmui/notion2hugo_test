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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4WL6NHH%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCKW5Nu2n8%2B3w3H600ctXxhPzFuCB5JOyXr3shurBOKXwIhAIXTI8Rnr8gxf1cyOMrbjauaSaUzhwVEsTmejvkVXW3vKv8DCHwQABoMNjM3NDIzMTgzODA1IgxqZC%2Fm6VjHU549h%2Fcq3ANPJzgK3noxvENVqUJi2zwkrSqBaItcgpkBrjfbiJwgZsud0JVKN6E7ll22qm%2FlesCunLBmCWtcrunzgZntawvCsSmW0goVccaAT4zh%2BfjaB%2Fojsvi%2BeXxPGEJPQXn3fQudIm2Kah3GpEF38sVuOhAsn7GsdXmYk9f2JrlSTHnGjJSW0%2Be8FflBy1aJUZVtgnEwbPS7iTKBegUkVpA2WcwqU1L3HKvdOEZ0XLU8wKuKJT7HArbd9m0dkQHhj8BKfnDgM3l6mDfBFujemVuWc2WqbDhL%2FIoJnoIu9LXlbxLNwFRnMJwWudEAE1EGlDju6UeleW2mMYvGBku6BHDkzlxyeST2YA%2FHRmTeTRJFEIrXVnDcbX9tX0NMPF2%2BoySLRBkGtNA5vhQ739zTKxmG4gPNZlDUxEf3sy%2B6xXWNQW523Y84QI0kkSdxNw6mCPUAptaiCjq7IKOoXDCVuboOIiMleDf8hZPMz8dAuh0ysAzgdflssN4%2F8jAZ9dcLwnAn4Zp1HzrF75jp8QGysmrwvTBqTC1ghnkoHS8Fr5z0ERNakdYw%2BItjLNrimPJdMIMtPW%2BCN4sGQYP6y1jmmKQTFPj8RHpv4Ao1qe7iKhVwzQAvfHdmimgdaryyM6ZQPzD5vbDDBjqkAbi73nG6TdKNUCfIb%2BBC5OJ6zjZndqjTLWUvL90ez%2BIBHCvNfxeSuXSD3NQJgpPfcokMfq7G8cnM9HSn8Yi29El5gyT0dS8%2Bc%2Fp5%2BaU7906yG1sbQW6ailhCzkZMBg4kQk82Iezp2YQf3T8q3tteXhfPXngUqMO3M8UIyuPH0TbhZXTnnS1fPWgs7grsR2U54mOgQOuhIWUpJ4IvHRynh3N9aU3I&X-Amz-Signature=ee48ad1c34c9c494fe9505488f5a3daf3876069a414f69734c1d4ff2361624c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4WL6NHH%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCKW5Nu2n8%2B3w3H600ctXxhPzFuCB5JOyXr3shurBOKXwIhAIXTI8Rnr8gxf1cyOMrbjauaSaUzhwVEsTmejvkVXW3vKv8DCHwQABoMNjM3NDIzMTgzODA1IgxqZC%2Fm6VjHU549h%2Fcq3ANPJzgK3noxvENVqUJi2zwkrSqBaItcgpkBrjfbiJwgZsud0JVKN6E7ll22qm%2FlesCunLBmCWtcrunzgZntawvCsSmW0goVccaAT4zh%2BfjaB%2Fojsvi%2BeXxPGEJPQXn3fQudIm2Kah3GpEF38sVuOhAsn7GsdXmYk9f2JrlSTHnGjJSW0%2Be8FflBy1aJUZVtgnEwbPS7iTKBegUkVpA2WcwqU1L3HKvdOEZ0XLU8wKuKJT7HArbd9m0dkQHhj8BKfnDgM3l6mDfBFujemVuWc2WqbDhL%2FIoJnoIu9LXlbxLNwFRnMJwWudEAE1EGlDju6UeleW2mMYvGBku6BHDkzlxyeST2YA%2FHRmTeTRJFEIrXVnDcbX9tX0NMPF2%2BoySLRBkGtNA5vhQ739zTKxmG4gPNZlDUxEf3sy%2B6xXWNQW523Y84QI0kkSdxNw6mCPUAptaiCjq7IKOoXDCVuboOIiMleDf8hZPMz8dAuh0ysAzgdflssN4%2F8jAZ9dcLwnAn4Zp1HzrF75jp8QGysmrwvTBqTC1ghnkoHS8Fr5z0ERNakdYw%2BItjLNrimPJdMIMtPW%2BCN4sGQYP6y1jmmKQTFPj8RHpv4Ao1qe7iKhVwzQAvfHdmimgdaryyM6ZQPzD5vbDDBjqkAbi73nG6TdKNUCfIb%2BBC5OJ6zjZndqjTLWUvL90ez%2BIBHCvNfxeSuXSD3NQJgpPfcokMfq7G8cnM9HSn8Yi29El5gyT0dS8%2Bc%2Fp5%2BaU7906yG1sbQW6ailhCzkZMBg4kQk82Iezp2YQf3T8q3tteXhfPXngUqMO3M8UIyuPH0TbhZXTnnS1fPWgs7grsR2U54mOgQOuhIWUpJ4IvHRynh3N9aU3I&X-Amz-Signature=8693435e20bf05f36c9c101f3008e28767969e37124d14b81f41ffc23157b7b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4WL6NHH%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCKW5Nu2n8%2B3w3H600ctXxhPzFuCB5JOyXr3shurBOKXwIhAIXTI8Rnr8gxf1cyOMrbjauaSaUzhwVEsTmejvkVXW3vKv8DCHwQABoMNjM3NDIzMTgzODA1IgxqZC%2Fm6VjHU549h%2Fcq3ANPJzgK3noxvENVqUJi2zwkrSqBaItcgpkBrjfbiJwgZsud0JVKN6E7ll22qm%2FlesCunLBmCWtcrunzgZntawvCsSmW0goVccaAT4zh%2BfjaB%2Fojsvi%2BeXxPGEJPQXn3fQudIm2Kah3GpEF38sVuOhAsn7GsdXmYk9f2JrlSTHnGjJSW0%2Be8FflBy1aJUZVtgnEwbPS7iTKBegUkVpA2WcwqU1L3HKvdOEZ0XLU8wKuKJT7HArbd9m0dkQHhj8BKfnDgM3l6mDfBFujemVuWc2WqbDhL%2FIoJnoIu9LXlbxLNwFRnMJwWudEAE1EGlDju6UeleW2mMYvGBku6BHDkzlxyeST2YA%2FHRmTeTRJFEIrXVnDcbX9tX0NMPF2%2BoySLRBkGtNA5vhQ739zTKxmG4gPNZlDUxEf3sy%2B6xXWNQW523Y84QI0kkSdxNw6mCPUAptaiCjq7IKOoXDCVuboOIiMleDf8hZPMz8dAuh0ysAzgdflssN4%2F8jAZ9dcLwnAn4Zp1HzrF75jp8QGysmrwvTBqTC1ghnkoHS8Fr5z0ERNakdYw%2BItjLNrimPJdMIMtPW%2BCN4sGQYP6y1jmmKQTFPj8RHpv4Ao1qe7iKhVwzQAvfHdmimgdaryyM6ZQPzD5vbDDBjqkAbi73nG6TdKNUCfIb%2BBC5OJ6zjZndqjTLWUvL90ez%2BIBHCvNfxeSuXSD3NQJgpPfcokMfq7G8cnM9HSn8Yi29El5gyT0dS8%2Bc%2Fp5%2BaU7906yG1sbQW6ailhCzkZMBg4kQk82Iezp2YQf3T8q3tteXhfPXngUqMO3M8UIyuPH0TbhZXTnnS1fPWgs7grsR2U54mOgQOuhIWUpJ4IvHRynh3N9aU3I&X-Amz-Signature=d15be50712748d419e97b056eecd4584f4549fcd631bb76243bbe80462173a8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4WL6NHH%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCKW5Nu2n8%2B3w3H600ctXxhPzFuCB5JOyXr3shurBOKXwIhAIXTI8Rnr8gxf1cyOMrbjauaSaUzhwVEsTmejvkVXW3vKv8DCHwQABoMNjM3NDIzMTgzODA1IgxqZC%2Fm6VjHU549h%2Fcq3ANPJzgK3noxvENVqUJi2zwkrSqBaItcgpkBrjfbiJwgZsud0JVKN6E7ll22qm%2FlesCunLBmCWtcrunzgZntawvCsSmW0goVccaAT4zh%2BfjaB%2Fojsvi%2BeXxPGEJPQXn3fQudIm2Kah3GpEF38sVuOhAsn7GsdXmYk9f2JrlSTHnGjJSW0%2Be8FflBy1aJUZVtgnEwbPS7iTKBegUkVpA2WcwqU1L3HKvdOEZ0XLU8wKuKJT7HArbd9m0dkQHhj8BKfnDgM3l6mDfBFujemVuWc2WqbDhL%2FIoJnoIu9LXlbxLNwFRnMJwWudEAE1EGlDju6UeleW2mMYvGBku6BHDkzlxyeST2YA%2FHRmTeTRJFEIrXVnDcbX9tX0NMPF2%2BoySLRBkGtNA5vhQ739zTKxmG4gPNZlDUxEf3sy%2B6xXWNQW523Y84QI0kkSdxNw6mCPUAptaiCjq7IKOoXDCVuboOIiMleDf8hZPMz8dAuh0ysAzgdflssN4%2F8jAZ9dcLwnAn4Zp1HzrF75jp8QGysmrwvTBqTC1ghnkoHS8Fr5z0ERNakdYw%2BItjLNrimPJdMIMtPW%2BCN4sGQYP6y1jmmKQTFPj8RHpv4Ao1qe7iKhVwzQAvfHdmimgdaryyM6ZQPzD5vbDDBjqkAbi73nG6TdKNUCfIb%2BBC5OJ6zjZndqjTLWUvL90ez%2BIBHCvNfxeSuXSD3NQJgpPfcokMfq7G8cnM9HSn8Yi29El5gyT0dS8%2Bc%2Fp5%2BaU7906yG1sbQW6ailhCzkZMBg4kQk82Iezp2YQf3T8q3tteXhfPXngUqMO3M8UIyuPH0TbhZXTnnS1fPWgs7grsR2U54mOgQOuhIWUpJ4IvHRynh3N9aU3I&X-Amz-Signature=cfef2c27fb27ba1a529585db32aac5ca4d098118bf091d53b9df7e0a75233490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4WL6NHH%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCKW5Nu2n8%2B3w3H600ctXxhPzFuCB5JOyXr3shurBOKXwIhAIXTI8Rnr8gxf1cyOMrbjauaSaUzhwVEsTmejvkVXW3vKv8DCHwQABoMNjM3NDIzMTgzODA1IgxqZC%2Fm6VjHU549h%2Fcq3ANPJzgK3noxvENVqUJi2zwkrSqBaItcgpkBrjfbiJwgZsud0JVKN6E7ll22qm%2FlesCunLBmCWtcrunzgZntawvCsSmW0goVccaAT4zh%2BfjaB%2Fojsvi%2BeXxPGEJPQXn3fQudIm2Kah3GpEF38sVuOhAsn7GsdXmYk9f2JrlSTHnGjJSW0%2Be8FflBy1aJUZVtgnEwbPS7iTKBegUkVpA2WcwqU1L3HKvdOEZ0XLU8wKuKJT7HArbd9m0dkQHhj8BKfnDgM3l6mDfBFujemVuWc2WqbDhL%2FIoJnoIu9LXlbxLNwFRnMJwWudEAE1EGlDju6UeleW2mMYvGBku6BHDkzlxyeST2YA%2FHRmTeTRJFEIrXVnDcbX9tX0NMPF2%2BoySLRBkGtNA5vhQ739zTKxmG4gPNZlDUxEf3sy%2B6xXWNQW523Y84QI0kkSdxNw6mCPUAptaiCjq7IKOoXDCVuboOIiMleDf8hZPMz8dAuh0ysAzgdflssN4%2F8jAZ9dcLwnAn4Zp1HzrF75jp8QGysmrwvTBqTC1ghnkoHS8Fr5z0ERNakdYw%2BItjLNrimPJdMIMtPW%2BCN4sGQYP6y1jmmKQTFPj8RHpv4Ao1qe7iKhVwzQAvfHdmimgdaryyM6ZQPzD5vbDDBjqkAbi73nG6TdKNUCfIb%2BBC5OJ6zjZndqjTLWUvL90ez%2BIBHCvNfxeSuXSD3NQJgpPfcokMfq7G8cnM9HSn8Yi29El5gyT0dS8%2Bc%2Fp5%2BaU7906yG1sbQW6ailhCzkZMBg4kQk82Iezp2YQf3T8q3tteXhfPXngUqMO3M8UIyuPH0TbhZXTnnS1fPWgs7grsR2U54mOgQOuhIWUpJ4IvHRynh3N9aU3I&X-Amz-Signature=aa7cc1ec7018dfe56b385bb07b72900b4704a221dcb0fb1c24bb81c24f482645&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4WL6NHH%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCKW5Nu2n8%2B3w3H600ctXxhPzFuCB5JOyXr3shurBOKXwIhAIXTI8Rnr8gxf1cyOMrbjauaSaUzhwVEsTmejvkVXW3vKv8DCHwQABoMNjM3NDIzMTgzODA1IgxqZC%2Fm6VjHU549h%2Fcq3ANPJzgK3noxvENVqUJi2zwkrSqBaItcgpkBrjfbiJwgZsud0JVKN6E7ll22qm%2FlesCunLBmCWtcrunzgZntawvCsSmW0goVccaAT4zh%2BfjaB%2Fojsvi%2BeXxPGEJPQXn3fQudIm2Kah3GpEF38sVuOhAsn7GsdXmYk9f2JrlSTHnGjJSW0%2Be8FflBy1aJUZVtgnEwbPS7iTKBegUkVpA2WcwqU1L3HKvdOEZ0XLU8wKuKJT7HArbd9m0dkQHhj8BKfnDgM3l6mDfBFujemVuWc2WqbDhL%2FIoJnoIu9LXlbxLNwFRnMJwWudEAE1EGlDju6UeleW2mMYvGBku6BHDkzlxyeST2YA%2FHRmTeTRJFEIrXVnDcbX9tX0NMPF2%2BoySLRBkGtNA5vhQ739zTKxmG4gPNZlDUxEf3sy%2B6xXWNQW523Y84QI0kkSdxNw6mCPUAptaiCjq7IKOoXDCVuboOIiMleDf8hZPMz8dAuh0ysAzgdflssN4%2F8jAZ9dcLwnAn4Zp1HzrF75jp8QGysmrwvTBqTC1ghnkoHS8Fr5z0ERNakdYw%2BItjLNrimPJdMIMtPW%2BCN4sGQYP6y1jmmKQTFPj8RHpv4Ao1qe7iKhVwzQAvfHdmimgdaryyM6ZQPzD5vbDDBjqkAbi73nG6TdKNUCfIb%2BBC5OJ6zjZndqjTLWUvL90ez%2BIBHCvNfxeSuXSD3NQJgpPfcokMfq7G8cnM9HSn8Yi29El5gyT0dS8%2Bc%2Fp5%2BaU7906yG1sbQW6ailhCzkZMBg4kQk82Iezp2YQf3T8q3tteXhfPXngUqMO3M8UIyuPH0TbhZXTnnS1fPWgs7grsR2U54mOgQOuhIWUpJ4IvHRynh3N9aU3I&X-Amz-Signature=a56a40af31758ddf10e878569510c05d072b1b1296a14fbca3460241d3b9cabc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
