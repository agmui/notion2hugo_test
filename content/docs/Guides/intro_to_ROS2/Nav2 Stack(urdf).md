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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NYVZR3P%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T151010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIH839Sx8EBz0vOx9X4X5wEqFLFyqbltZufk%2BpxX7WYEkAiACb7EGde3K%2BxCj5GnWF0pyjGMMShkbAc7Iv%2FakHfbWqyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQEA%2BkX8QNm4Rgo4KKtwDe3nxmFaiLWK1yJyrX7%2B3PlSy5yvyC23NrTbX8Mc6JQ21ptgZsSl%2BoBZARJUMzL61NFCyLUriePtiBCVA5zfdoTAQi%2B3URG%2F4V18DSCOGAETXT2YnhIrS%2FarGmhCIDZaBt2O%2FV0njvp2SdO2dSdWYgWMlTuDX0pv7%2B8bhpB4gtYHpM6YrP57aj9M6K6VdyQWyb83Hoi%2F2mq%2FIGKV5JqCGaLm5N8n6P7v8m836All6ykxT%2BwtZ%2Ba85Y5UZv%2FRx3ILMo%2FUhTLE41A9AXfkR3%2FC%2F0yuwsNf70Hn3XAamj89ziocIzFE%2F%2BfiMBrQPEKfSKZpivcnSbacGjN9tpZyd3m8CrmTyebpzM2mcmofbCLIqvsNRqTacolVFjnKmVmTKSUEymYSW5kQ%2BHQQ4S816mG4GeDl38OYkX%2FNZHk%2BMh5W1iTIQKSv6dQqJbIiCMRat7K551PU2w%2Fih4qTnfO%2FgeurPqhsvnuI9h0ng3eyoDCoas9YFg3hLdSxlyWem%2FbVWBpRy%2BeMwhkVTUt3QE1oy%2FWkdQNDEqRW0BZ4T46iPRFFc08BrDhFDUZgw0LNx6qfu2Xt7u77gVquc69nlz7CsgbADXww0llimruOWunlUf1taNQ0DXdeb2icX0QNCUhowx7T2wQY6pgH%2Bdpcu0zUUMUGQOpaT2teuMwDi3ccDz1%2FiC3eWRWyTd5St%2FJGvOx6yjU1%2FcE8i25X0xtREFVseEL4skcvp58QfIYgRuEDojQDOxOoXM4m1xdNCwE46XQnppmTpMWOwgwrzTO9def6%2B3yAhRHmBGG1D2iIaddtSK3%2FoBImNfOKf4njzXX4x%2Bh2IQnoM1CcwWmtLS7dg%2BVsB7VNm%2BmtiQzBK%2BISbAhNO&X-Amz-Signature=08b3ae27317111a410ffaff081eae5c2615de118ac45c5847fec820fb8b31c2b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NYVZR3P%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T151010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIH839Sx8EBz0vOx9X4X5wEqFLFyqbltZufk%2BpxX7WYEkAiACb7EGde3K%2BxCj5GnWF0pyjGMMShkbAc7Iv%2FakHfbWqyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQEA%2BkX8QNm4Rgo4KKtwDe3nxmFaiLWK1yJyrX7%2B3PlSy5yvyC23NrTbX8Mc6JQ21ptgZsSl%2BoBZARJUMzL61NFCyLUriePtiBCVA5zfdoTAQi%2B3URG%2F4V18DSCOGAETXT2YnhIrS%2FarGmhCIDZaBt2O%2FV0njvp2SdO2dSdWYgWMlTuDX0pv7%2B8bhpB4gtYHpM6YrP57aj9M6K6VdyQWyb83Hoi%2F2mq%2FIGKV5JqCGaLm5N8n6P7v8m836All6ykxT%2BwtZ%2Ba85Y5UZv%2FRx3ILMo%2FUhTLE41A9AXfkR3%2FC%2F0yuwsNf70Hn3XAamj89ziocIzFE%2F%2BfiMBrQPEKfSKZpivcnSbacGjN9tpZyd3m8CrmTyebpzM2mcmofbCLIqvsNRqTacolVFjnKmVmTKSUEymYSW5kQ%2BHQQ4S816mG4GeDl38OYkX%2FNZHk%2BMh5W1iTIQKSv6dQqJbIiCMRat7K551PU2w%2Fih4qTnfO%2FgeurPqhsvnuI9h0ng3eyoDCoas9YFg3hLdSxlyWem%2FbVWBpRy%2BeMwhkVTUt3QE1oy%2FWkdQNDEqRW0BZ4T46iPRFFc08BrDhFDUZgw0LNx6qfu2Xt7u77gVquc69nlz7CsgbADXww0llimruOWunlUf1taNQ0DXdeb2icX0QNCUhowx7T2wQY6pgH%2Bdpcu0zUUMUGQOpaT2teuMwDi3ccDz1%2FiC3eWRWyTd5St%2FJGvOx6yjU1%2FcE8i25X0xtREFVseEL4skcvp58QfIYgRuEDojQDOxOoXM4m1xdNCwE46XQnppmTpMWOwgwrzTO9def6%2B3yAhRHmBGG1D2iIaddtSK3%2FoBImNfOKf4njzXX4x%2Bh2IQnoM1CcwWmtLS7dg%2BVsB7VNm%2BmtiQzBK%2BISbAhNO&X-Amz-Signature=ddd49ef03ec1077559f947bc0e2826aad5f3f59fa98ba468e74f506e8395c3e8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NYVZR3P%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T151010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIH839Sx8EBz0vOx9X4X5wEqFLFyqbltZufk%2BpxX7WYEkAiACb7EGde3K%2BxCj5GnWF0pyjGMMShkbAc7Iv%2FakHfbWqyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQEA%2BkX8QNm4Rgo4KKtwDe3nxmFaiLWK1yJyrX7%2B3PlSy5yvyC23NrTbX8Mc6JQ21ptgZsSl%2BoBZARJUMzL61NFCyLUriePtiBCVA5zfdoTAQi%2B3URG%2F4V18DSCOGAETXT2YnhIrS%2FarGmhCIDZaBt2O%2FV0njvp2SdO2dSdWYgWMlTuDX0pv7%2B8bhpB4gtYHpM6YrP57aj9M6K6VdyQWyb83Hoi%2F2mq%2FIGKV5JqCGaLm5N8n6P7v8m836All6ykxT%2BwtZ%2Ba85Y5UZv%2FRx3ILMo%2FUhTLE41A9AXfkR3%2FC%2F0yuwsNf70Hn3XAamj89ziocIzFE%2F%2BfiMBrQPEKfSKZpivcnSbacGjN9tpZyd3m8CrmTyebpzM2mcmofbCLIqvsNRqTacolVFjnKmVmTKSUEymYSW5kQ%2BHQQ4S816mG4GeDl38OYkX%2FNZHk%2BMh5W1iTIQKSv6dQqJbIiCMRat7K551PU2w%2Fih4qTnfO%2FgeurPqhsvnuI9h0ng3eyoDCoas9YFg3hLdSxlyWem%2FbVWBpRy%2BeMwhkVTUt3QE1oy%2FWkdQNDEqRW0BZ4T46iPRFFc08BrDhFDUZgw0LNx6qfu2Xt7u77gVquc69nlz7CsgbADXww0llimruOWunlUf1taNQ0DXdeb2icX0QNCUhowx7T2wQY6pgH%2Bdpcu0zUUMUGQOpaT2teuMwDi3ccDz1%2FiC3eWRWyTd5St%2FJGvOx6yjU1%2FcE8i25X0xtREFVseEL4skcvp58QfIYgRuEDojQDOxOoXM4m1xdNCwE46XQnppmTpMWOwgwrzTO9def6%2B3yAhRHmBGG1D2iIaddtSK3%2FoBImNfOKf4njzXX4x%2Bh2IQnoM1CcwWmtLS7dg%2BVsB7VNm%2BmtiQzBK%2BISbAhNO&X-Amz-Signature=184bb5e8dcca2f815d6ba0c5ad35af73d778ba396f393bb672759753052356cc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NYVZR3P%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T151010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIH839Sx8EBz0vOx9X4X5wEqFLFyqbltZufk%2BpxX7WYEkAiACb7EGde3K%2BxCj5GnWF0pyjGMMShkbAc7Iv%2FakHfbWqyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQEA%2BkX8QNm4Rgo4KKtwDe3nxmFaiLWK1yJyrX7%2B3PlSy5yvyC23NrTbX8Mc6JQ21ptgZsSl%2BoBZARJUMzL61NFCyLUriePtiBCVA5zfdoTAQi%2B3URG%2F4V18DSCOGAETXT2YnhIrS%2FarGmhCIDZaBt2O%2FV0njvp2SdO2dSdWYgWMlTuDX0pv7%2B8bhpB4gtYHpM6YrP57aj9M6K6VdyQWyb83Hoi%2F2mq%2FIGKV5JqCGaLm5N8n6P7v8m836All6ykxT%2BwtZ%2Ba85Y5UZv%2FRx3ILMo%2FUhTLE41A9AXfkR3%2FC%2F0yuwsNf70Hn3XAamj89ziocIzFE%2F%2BfiMBrQPEKfSKZpivcnSbacGjN9tpZyd3m8CrmTyebpzM2mcmofbCLIqvsNRqTacolVFjnKmVmTKSUEymYSW5kQ%2BHQQ4S816mG4GeDl38OYkX%2FNZHk%2BMh5W1iTIQKSv6dQqJbIiCMRat7K551PU2w%2Fih4qTnfO%2FgeurPqhsvnuI9h0ng3eyoDCoas9YFg3hLdSxlyWem%2FbVWBpRy%2BeMwhkVTUt3QE1oy%2FWkdQNDEqRW0BZ4T46iPRFFc08BrDhFDUZgw0LNx6qfu2Xt7u77gVquc69nlz7CsgbADXww0llimruOWunlUf1taNQ0DXdeb2icX0QNCUhowx7T2wQY6pgH%2Bdpcu0zUUMUGQOpaT2teuMwDi3ccDz1%2FiC3eWRWyTd5St%2FJGvOx6yjU1%2FcE8i25X0xtREFVseEL4skcvp58QfIYgRuEDojQDOxOoXM4m1xdNCwE46XQnppmTpMWOwgwrzTO9def6%2B3yAhRHmBGG1D2iIaddtSK3%2FoBImNfOKf4njzXX4x%2Bh2IQnoM1CcwWmtLS7dg%2BVsB7VNm%2BmtiQzBK%2BISbAhNO&X-Amz-Signature=00511e371a9b3477a3663393f7c6b035f9e257730b7c6e77970185a90b30aa2a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NYVZR3P%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T151010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIH839Sx8EBz0vOx9X4X5wEqFLFyqbltZufk%2BpxX7WYEkAiACb7EGde3K%2BxCj5GnWF0pyjGMMShkbAc7Iv%2FakHfbWqyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQEA%2BkX8QNm4Rgo4KKtwDe3nxmFaiLWK1yJyrX7%2B3PlSy5yvyC23NrTbX8Mc6JQ21ptgZsSl%2BoBZARJUMzL61NFCyLUriePtiBCVA5zfdoTAQi%2B3URG%2F4V18DSCOGAETXT2YnhIrS%2FarGmhCIDZaBt2O%2FV0njvp2SdO2dSdWYgWMlTuDX0pv7%2B8bhpB4gtYHpM6YrP57aj9M6K6VdyQWyb83Hoi%2F2mq%2FIGKV5JqCGaLm5N8n6P7v8m836All6ykxT%2BwtZ%2Ba85Y5UZv%2FRx3ILMo%2FUhTLE41A9AXfkR3%2FC%2F0yuwsNf70Hn3XAamj89ziocIzFE%2F%2BfiMBrQPEKfSKZpivcnSbacGjN9tpZyd3m8CrmTyebpzM2mcmofbCLIqvsNRqTacolVFjnKmVmTKSUEymYSW5kQ%2BHQQ4S816mG4GeDl38OYkX%2FNZHk%2BMh5W1iTIQKSv6dQqJbIiCMRat7K551PU2w%2Fih4qTnfO%2FgeurPqhsvnuI9h0ng3eyoDCoas9YFg3hLdSxlyWem%2FbVWBpRy%2BeMwhkVTUt3QE1oy%2FWkdQNDEqRW0BZ4T46iPRFFc08BrDhFDUZgw0LNx6qfu2Xt7u77gVquc69nlz7CsgbADXww0llimruOWunlUf1taNQ0DXdeb2icX0QNCUhowx7T2wQY6pgH%2Bdpcu0zUUMUGQOpaT2teuMwDi3ccDz1%2FiC3eWRWyTd5St%2FJGvOx6yjU1%2FcE8i25X0xtREFVseEL4skcvp58QfIYgRuEDojQDOxOoXM4m1xdNCwE46XQnppmTpMWOwgwrzTO9def6%2B3yAhRHmBGG1D2iIaddtSK3%2FoBImNfOKf4njzXX4x%2Bh2IQnoM1CcwWmtLS7dg%2BVsB7VNm%2BmtiQzBK%2BISbAhNO&X-Amz-Signature=8725a71fb794cf2740519e53bc4e0451e6400a0d053b760cf88ea51a9febede3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NYVZR3P%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T151010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIH839Sx8EBz0vOx9X4X5wEqFLFyqbltZufk%2BpxX7WYEkAiACb7EGde3K%2BxCj5GnWF0pyjGMMShkbAc7Iv%2FakHfbWqyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQEA%2BkX8QNm4Rgo4KKtwDe3nxmFaiLWK1yJyrX7%2B3PlSy5yvyC23NrTbX8Mc6JQ21ptgZsSl%2BoBZARJUMzL61NFCyLUriePtiBCVA5zfdoTAQi%2B3URG%2F4V18DSCOGAETXT2YnhIrS%2FarGmhCIDZaBt2O%2FV0njvp2SdO2dSdWYgWMlTuDX0pv7%2B8bhpB4gtYHpM6YrP57aj9M6K6VdyQWyb83Hoi%2F2mq%2FIGKV5JqCGaLm5N8n6P7v8m836All6ykxT%2BwtZ%2Ba85Y5UZv%2FRx3ILMo%2FUhTLE41A9AXfkR3%2FC%2F0yuwsNf70Hn3XAamj89ziocIzFE%2F%2BfiMBrQPEKfSKZpivcnSbacGjN9tpZyd3m8CrmTyebpzM2mcmofbCLIqvsNRqTacolVFjnKmVmTKSUEymYSW5kQ%2BHQQ4S816mG4GeDl38OYkX%2FNZHk%2BMh5W1iTIQKSv6dQqJbIiCMRat7K551PU2w%2Fih4qTnfO%2FgeurPqhsvnuI9h0ng3eyoDCoas9YFg3hLdSxlyWem%2FbVWBpRy%2BeMwhkVTUt3QE1oy%2FWkdQNDEqRW0BZ4T46iPRFFc08BrDhFDUZgw0LNx6qfu2Xt7u77gVquc69nlz7CsgbADXww0llimruOWunlUf1taNQ0DXdeb2icX0QNCUhowx7T2wQY6pgH%2Bdpcu0zUUMUGQOpaT2teuMwDi3ccDz1%2FiC3eWRWyTd5St%2FJGvOx6yjU1%2FcE8i25X0xtREFVseEL4skcvp58QfIYgRuEDojQDOxOoXM4m1xdNCwE46XQnppmTpMWOwgwrzTO9def6%2B3yAhRHmBGG1D2iIaddtSK3%2FoBImNfOKf4njzXX4x%2Bh2IQnoM1CcwWmtLS7dg%2BVsB7VNm%2BmtiQzBK%2BISbAhNO&X-Amz-Signature=1edb783d53ba74354eddc334911ddad3c9027d402db514dc51ef51fc1c80960b&X-Amz-SignedHeaders=host&x-id=GetObject)
