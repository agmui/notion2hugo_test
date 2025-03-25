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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W5KDHN7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWcSw54Hgn5v4asYpN5lj8fOQ4PE4mJ%2BcaNL0g14UX4AiA4bP177KW00NVQGs%2B2cu1TiQSMJDEs4U8K5VsDnr4v%2FiqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVXwGQ9jfhlSbcMbTKtwDYrUiy5OCDhXfxoCw7OmHbYGwWkFd9vEN2rQLJFb0x4TiHivi44xuNwfTEbpbjxqaWgAj4mesuPk%2F7LSK9%2BFeaWcNULpXIgOxB2HGA80QkU5fkax9%2B9iDNMVsjRVflN%2BYd4ZXf4wAQf51GSY6lqg%2BAdGf6rJyAkXFAWWXcHDAt0WbptralYAe0VVvdstsHeyefT70s%2BAGQYcuK5pFQj8tmvZkojuqEg9DxdI1tnBaKzkllnK4ibhph7UiaFpL2lRw7J76c0AWQ6vSQHi2Tia1jkgsorPR7SDjpn7jg0xY9eqwTB6Qn%2FfAVoJD6dxSgWlGosgxjLG1xNKUhbLgdD3ZoeZAlhEi4yVP4W7d2U1aMjeW1Zz%2F1JNqv2A5iONfk6WZ1vvCWYMBcnb2u8Jo1UqaAYEOPr8x8U8JNUNFqMOa93OGFfYVIVGN70PK7OZ1v1XdV44%2BNcV%2FtnsbPRiEJ6E9VGDncO1QaLcpb9fBfwo7JvkLMNCHrFlTtx%2FsCH9WspV69uyqk2O2%2Ba0stlxNaYH%2BJFFicwn1GCYYi9H%2BVpGk6pbYQGXjosMKGOsEZI%2F7Nm%2BLmu1WD73HVhlord4dx%2Bc3Jc60GkDrpXer9E5lVqsCMciDLVimmMwali8n%2BaEwjrOIvwY6pgFKnBZmhnx0ZNfPNd%2FFNvqWzNrDUqH6HCIlm6MtSA6FIoeqH7mx7ksQviwdRZymbUSGp9mrHVMf6Gp%2BRaOi%2BS9bPFvDppVaOv8sbFrBNf4l6S6Xqy47HHHG8R0Kg88hIZdZN46EttOX83T2xVH7Ozzt8gGFX7y2lEa5C479u0NEXH480sA4XXMutgp0a9VQ3w6lhM69SXOC9hjT03sS0pniederKads&X-Amz-Signature=3bb1267d19e8037248ad6d585a8188ddb6e87ad7c6d079bbbdda132477ac126e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W5KDHN7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWcSw54Hgn5v4asYpN5lj8fOQ4PE4mJ%2BcaNL0g14UX4AiA4bP177KW00NVQGs%2B2cu1TiQSMJDEs4U8K5VsDnr4v%2FiqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVXwGQ9jfhlSbcMbTKtwDYrUiy5OCDhXfxoCw7OmHbYGwWkFd9vEN2rQLJFb0x4TiHivi44xuNwfTEbpbjxqaWgAj4mesuPk%2F7LSK9%2BFeaWcNULpXIgOxB2HGA80QkU5fkax9%2B9iDNMVsjRVflN%2BYd4ZXf4wAQf51GSY6lqg%2BAdGf6rJyAkXFAWWXcHDAt0WbptralYAe0VVvdstsHeyefT70s%2BAGQYcuK5pFQj8tmvZkojuqEg9DxdI1tnBaKzkllnK4ibhph7UiaFpL2lRw7J76c0AWQ6vSQHi2Tia1jkgsorPR7SDjpn7jg0xY9eqwTB6Qn%2FfAVoJD6dxSgWlGosgxjLG1xNKUhbLgdD3ZoeZAlhEi4yVP4W7d2U1aMjeW1Zz%2F1JNqv2A5iONfk6WZ1vvCWYMBcnb2u8Jo1UqaAYEOPr8x8U8JNUNFqMOa93OGFfYVIVGN70PK7OZ1v1XdV44%2BNcV%2FtnsbPRiEJ6E9VGDncO1QaLcpb9fBfwo7JvkLMNCHrFlTtx%2FsCH9WspV69uyqk2O2%2Ba0stlxNaYH%2BJFFicwn1GCYYi9H%2BVpGk6pbYQGXjosMKGOsEZI%2F7Nm%2BLmu1WD73HVhlord4dx%2Bc3Jc60GkDrpXer9E5lVqsCMciDLVimmMwali8n%2BaEwjrOIvwY6pgFKnBZmhnx0ZNfPNd%2FFNvqWzNrDUqH6HCIlm6MtSA6FIoeqH7mx7ksQviwdRZymbUSGp9mrHVMf6Gp%2BRaOi%2BS9bPFvDppVaOv8sbFrBNf4l6S6Xqy47HHHG8R0Kg88hIZdZN46EttOX83T2xVH7Ozzt8gGFX7y2lEa5C479u0NEXH480sA4XXMutgp0a9VQ3w6lhM69SXOC9hjT03sS0pniederKads&X-Amz-Signature=82a9fdbfd06c078076fe677afaec010508a39106ab56e850bcfd2139d1393865&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W5KDHN7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWcSw54Hgn5v4asYpN5lj8fOQ4PE4mJ%2BcaNL0g14UX4AiA4bP177KW00NVQGs%2B2cu1TiQSMJDEs4U8K5VsDnr4v%2FiqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVXwGQ9jfhlSbcMbTKtwDYrUiy5OCDhXfxoCw7OmHbYGwWkFd9vEN2rQLJFb0x4TiHivi44xuNwfTEbpbjxqaWgAj4mesuPk%2F7LSK9%2BFeaWcNULpXIgOxB2HGA80QkU5fkax9%2B9iDNMVsjRVflN%2BYd4ZXf4wAQf51GSY6lqg%2BAdGf6rJyAkXFAWWXcHDAt0WbptralYAe0VVvdstsHeyefT70s%2BAGQYcuK5pFQj8tmvZkojuqEg9DxdI1tnBaKzkllnK4ibhph7UiaFpL2lRw7J76c0AWQ6vSQHi2Tia1jkgsorPR7SDjpn7jg0xY9eqwTB6Qn%2FfAVoJD6dxSgWlGosgxjLG1xNKUhbLgdD3ZoeZAlhEi4yVP4W7d2U1aMjeW1Zz%2F1JNqv2A5iONfk6WZ1vvCWYMBcnb2u8Jo1UqaAYEOPr8x8U8JNUNFqMOa93OGFfYVIVGN70PK7OZ1v1XdV44%2BNcV%2FtnsbPRiEJ6E9VGDncO1QaLcpb9fBfwo7JvkLMNCHrFlTtx%2FsCH9WspV69uyqk2O2%2Ba0stlxNaYH%2BJFFicwn1GCYYi9H%2BVpGk6pbYQGXjosMKGOsEZI%2F7Nm%2BLmu1WD73HVhlord4dx%2Bc3Jc60GkDrpXer9E5lVqsCMciDLVimmMwali8n%2BaEwjrOIvwY6pgFKnBZmhnx0ZNfPNd%2FFNvqWzNrDUqH6HCIlm6MtSA6FIoeqH7mx7ksQviwdRZymbUSGp9mrHVMf6Gp%2BRaOi%2BS9bPFvDppVaOv8sbFrBNf4l6S6Xqy47HHHG8R0Kg88hIZdZN46EttOX83T2xVH7Ozzt8gGFX7y2lEa5C479u0NEXH480sA4XXMutgp0a9VQ3w6lhM69SXOC9hjT03sS0pniederKads&X-Amz-Signature=1ed9009c8cb0ed2f21030d620472d859a1307d3f036bc47f7dd2ea9f345a02d5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W5KDHN7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWcSw54Hgn5v4asYpN5lj8fOQ4PE4mJ%2BcaNL0g14UX4AiA4bP177KW00NVQGs%2B2cu1TiQSMJDEs4U8K5VsDnr4v%2FiqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVXwGQ9jfhlSbcMbTKtwDYrUiy5OCDhXfxoCw7OmHbYGwWkFd9vEN2rQLJFb0x4TiHivi44xuNwfTEbpbjxqaWgAj4mesuPk%2F7LSK9%2BFeaWcNULpXIgOxB2HGA80QkU5fkax9%2B9iDNMVsjRVflN%2BYd4ZXf4wAQf51GSY6lqg%2BAdGf6rJyAkXFAWWXcHDAt0WbptralYAe0VVvdstsHeyefT70s%2BAGQYcuK5pFQj8tmvZkojuqEg9DxdI1tnBaKzkllnK4ibhph7UiaFpL2lRw7J76c0AWQ6vSQHi2Tia1jkgsorPR7SDjpn7jg0xY9eqwTB6Qn%2FfAVoJD6dxSgWlGosgxjLG1xNKUhbLgdD3ZoeZAlhEi4yVP4W7d2U1aMjeW1Zz%2F1JNqv2A5iONfk6WZ1vvCWYMBcnb2u8Jo1UqaAYEOPr8x8U8JNUNFqMOa93OGFfYVIVGN70PK7OZ1v1XdV44%2BNcV%2FtnsbPRiEJ6E9VGDncO1QaLcpb9fBfwo7JvkLMNCHrFlTtx%2FsCH9WspV69uyqk2O2%2Ba0stlxNaYH%2BJFFicwn1GCYYi9H%2BVpGk6pbYQGXjosMKGOsEZI%2F7Nm%2BLmu1WD73HVhlord4dx%2Bc3Jc60GkDrpXer9E5lVqsCMciDLVimmMwali8n%2BaEwjrOIvwY6pgFKnBZmhnx0ZNfPNd%2FFNvqWzNrDUqH6HCIlm6MtSA6FIoeqH7mx7ksQviwdRZymbUSGp9mrHVMf6Gp%2BRaOi%2BS9bPFvDppVaOv8sbFrBNf4l6S6Xqy47HHHG8R0Kg88hIZdZN46EttOX83T2xVH7Ozzt8gGFX7y2lEa5C479u0NEXH480sA4XXMutgp0a9VQ3w6lhM69SXOC9hjT03sS0pniederKads&X-Amz-Signature=be16af500c8051d00c47ccb3748e6a871f0d098149c2649e59060fe8387e242e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W5KDHN7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWcSw54Hgn5v4asYpN5lj8fOQ4PE4mJ%2BcaNL0g14UX4AiA4bP177KW00NVQGs%2B2cu1TiQSMJDEs4U8K5VsDnr4v%2FiqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVXwGQ9jfhlSbcMbTKtwDYrUiy5OCDhXfxoCw7OmHbYGwWkFd9vEN2rQLJFb0x4TiHivi44xuNwfTEbpbjxqaWgAj4mesuPk%2F7LSK9%2BFeaWcNULpXIgOxB2HGA80QkU5fkax9%2B9iDNMVsjRVflN%2BYd4ZXf4wAQf51GSY6lqg%2BAdGf6rJyAkXFAWWXcHDAt0WbptralYAe0VVvdstsHeyefT70s%2BAGQYcuK5pFQj8tmvZkojuqEg9DxdI1tnBaKzkllnK4ibhph7UiaFpL2lRw7J76c0AWQ6vSQHi2Tia1jkgsorPR7SDjpn7jg0xY9eqwTB6Qn%2FfAVoJD6dxSgWlGosgxjLG1xNKUhbLgdD3ZoeZAlhEi4yVP4W7d2U1aMjeW1Zz%2F1JNqv2A5iONfk6WZ1vvCWYMBcnb2u8Jo1UqaAYEOPr8x8U8JNUNFqMOa93OGFfYVIVGN70PK7OZ1v1XdV44%2BNcV%2FtnsbPRiEJ6E9VGDncO1QaLcpb9fBfwo7JvkLMNCHrFlTtx%2FsCH9WspV69uyqk2O2%2Ba0stlxNaYH%2BJFFicwn1GCYYi9H%2BVpGk6pbYQGXjosMKGOsEZI%2F7Nm%2BLmu1WD73HVhlord4dx%2Bc3Jc60GkDrpXer9E5lVqsCMciDLVimmMwali8n%2BaEwjrOIvwY6pgFKnBZmhnx0ZNfPNd%2FFNvqWzNrDUqH6HCIlm6MtSA6FIoeqH7mx7ksQviwdRZymbUSGp9mrHVMf6Gp%2BRaOi%2BS9bPFvDppVaOv8sbFrBNf4l6S6Xqy47HHHG8R0Kg88hIZdZN46EttOX83T2xVH7Ozzt8gGFX7y2lEa5C479u0NEXH480sA4XXMutgp0a9VQ3w6lhM69SXOC9hjT03sS0pniederKads&X-Amz-Signature=f0a03028c3a705c2c280fc76dd2cc794430c1c0a5b2d86697d74a5f77e640e5f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W5KDHN7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWcSw54Hgn5v4asYpN5lj8fOQ4PE4mJ%2BcaNL0g14UX4AiA4bP177KW00NVQGs%2B2cu1TiQSMJDEs4U8K5VsDnr4v%2FiqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVXwGQ9jfhlSbcMbTKtwDYrUiy5OCDhXfxoCw7OmHbYGwWkFd9vEN2rQLJFb0x4TiHivi44xuNwfTEbpbjxqaWgAj4mesuPk%2F7LSK9%2BFeaWcNULpXIgOxB2HGA80QkU5fkax9%2B9iDNMVsjRVflN%2BYd4ZXf4wAQf51GSY6lqg%2BAdGf6rJyAkXFAWWXcHDAt0WbptralYAe0VVvdstsHeyefT70s%2BAGQYcuK5pFQj8tmvZkojuqEg9DxdI1tnBaKzkllnK4ibhph7UiaFpL2lRw7J76c0AWQ6vSQHi2Tia1jkgsorPR7SDjpn7jg0xY9eqwTB6Qn%2FfAVoJD6dxSgWlGosgxjLG1xNKUhbLgdD3ZoeZAlhEi4yVP4W7d2U1aMjeW1Zz%2F1JNqv2A5iONfk6WZ1vvCWYMBcnb2u8Jo1UqaAYEOPr8x8U8JNUNFqMOa93OGFfYVIVGN70PK7OZ1v1XdV44%2BNcV%2FtnsbPRiEJ6E9VGDncO1QaLcpb9fBfwo7JvkLMNCHrFlTtx%2FsCH9WspV69uyqk2O2%2Ba0stlxNaYH%2BJFFicwn1GCYYi9H%2BVpGk6pbYQGXjosMKGOsEZI%2F7Nm%2BLmu1WD73HVhlord4dx%2Bc3Jc60GkDrpXer9E5lVqsCMciDLVimmMwali8n%2BaEwjrOIvwY6pgFKnBZmhnx0ZNfPNd%2FFNvqWzNrDUqH6HCIlm6MtSA6FIoeqH7mx7ksQviwdRZymbUSGp9mrHVMf6Gp%2BRaOi%2BS9bPFvDppVaOv8sbFrBNf4l6S6Xqy47HHHG8R0Kg88hIZdZN46EttOX83T2xVH7Ozzt8gGFX7y2lEa5C479u0NEXH480sA4XXMutgp0a9VQ3w6lhM69SXOC9hjT03sS0pniederKads&X-Amz-Signature=d64af57b99930478ec5e1d3793275f08fa0a018d611e76062606d1de3e85e119&X-Amz-SignedHeaders=host&x-id=GetObject)
