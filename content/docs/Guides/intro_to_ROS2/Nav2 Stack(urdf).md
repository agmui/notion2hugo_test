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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYFQTQ2L%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCslIUjEOE7YRGSVrdUim%2BFgnGirGTbpsUQQx0JihDATQIhAPfhpfHfR%2BlU%2FwdfuOYOTdc5UYGFjPwAt3nsAms3dRJJKv8DCEUQABoMNjM3NDIzMTgzODA1IgyCURE6HrZ%2BDricrqsq3APDDsKRcnEDLoTmId7yGetbr8OYvKXaf1N5kI3XZmDleqcAmE9UGI%2FDvIj%2F%2Fuw0y9SaJs4OI0zQHZXnOhlexO2uUmMybMZ6WpFPUtul3ZSDiLApEpiWyKnrLbT2oOPtmVxdeTvb%2BRcxNVhi%2FbnJfGxvvyl7xxkQzi1jN3DAe1ohiK7YAltXCGLtEJaK8Nrgkq1q9cOUr8mcsBlzAKebLDO56eTwJRlTWoJfKzp1pyebo3gI7tWgnUFcr5w8LaSW59wCQL0gC66N6PBjNY80mC6y5XaT2THeRWMDHDgcLmBOG%2B4oJIxNf6v38UvmpRrgtgH%2BCr96pPQrVuTmCyxJpZOpFHrU6W0ETw5RZ8Za%2BxyjmfjKC%2FyhNZHt51HFMT8l8D4dV92z5rRMMO53YQCzpoXPPYyEorsNl8yRnCMbzypnUpP5G6hNYF2ID2spLgtCV9fe%2FKj%2Fjen26SVKlmP%2Ba5ijlqnRKXQUsL28yVpid9zFIMn%2BgcGX%2ByhAU1sebG%2Fq4pTGOAI4Qs6yKAoG40RsFAfgkLGBLMtm5u6o%2BPm5oPqiClB8qZbcLSF4Q4VFWs5I9XoQX4pADyJ2mrNrgDxuifRDX1QCL0rT4LhQIsYXXwzxJnicU62%2B8vFIn8z6UzDMjIbCBjqkAXtjh3WXKNwbnSXUjfBbGMajxUKVAVIYXsUf%2Bm30rsqrl0AMkHVq%2B1rJJKNZLxm1wMQq5NrZwX7HogTG89grUaa7xNM4svitmjpk4qWua3o9jY9lRhCc%2Bj%2FJYMgPlXlZs5oTecGU%2FkL%2Bx5vBlxXWhXh%2BvpGBcKGCjp7%2FP6PyrmYsiqrEXa8Apoalq2kXj82TGKhqQ6AGQdr04byXJZtvQ5wx6MLH&X-Amz-Signature=e07c069ccec5c171d79023a6f59a586ed14b2ac9d30864e664c950eb235cb413&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYFQTQ2L%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCslIUjEOE7YRGSVrdUim%2BFgnGirGTbpsUQQx0JihDATQIhAPfhpfHfR%2BlU%2FwdfuOYOTdc5UYGFjPwAt3nsAms3dRJJKv8DCEUQABoMNjM3NDIzMTgzODA1IgyCURE6HrZ%2BDricrqsq3APDDsKRcnEDLoTmId7yGetbr8OYvKXaf1N5kI3XZmDleqcAmE9UGI%2FDvIj%2F%2Fuw0y9SaJs4OI0zQHZXnOhlexO2uUmMybMZ6WpFPUtul3ZSDiLApEpiWyKnrLbT2oOPtmVxdeTvb%2BRcxNVhi%2FbnJfGxvvyl7xxkQzi1jN3DAe1ohiK7YAltXCGLtEJaK8Nrgkq1q9cOUr8mcsBlzAKebLDO56eTwJRlTWoJfKzp1pyebo3gI7tWgnUFcr5w8LaSW59wCQL0gC66N6PBjNY80mC6y5XaT2THeRWMDHDgcLmBOG%2B4oJIxNf6v38UvmpRrgtgH%2BCr96pPQrVuTmCyxJpZOpFHrU6W0ETw5RZ8Za%2BxyjmfjKC%2FyhNZHt51HFMT8l8D4dV92z5rRMMO53YQCzpoXPPYyEorsNl8yRnCMbzypnUpP5G6hNYF2ID2spLgtCV9fe%2FKj%2Fjen26SVKlmP%2Ba5ijlqnRKXQUsL28yVpid9zFIMn%2BgcGX%2ByhAU1sebG%2Fq4pTGOAI4Qs6yKAoG40RsFAfgkLGBLMtm5u6o%2BPm5oPqiClB8qZbcLSF4Q4VFWs5I9XoQX4pADyJ2mrNrgDxuifRDX1QCL0rT4LhQIsYXXwzxJnicU62%2B8vFIn8z6UzDMjIbCBjqkAXtjh3WXKNwbnSXUjfBbGMajxUKVAVIYXsUf%2Bm30rsqrl0AMkHVq%2B1rJJKNZLxm1wMQq5NrZwX7HogTG89grUaa7xNM4svitmjpk4qWua3o9jY9lRhCc%2Bj%2FJYMgPlXlZs5oTecGU%2FkL%2Bx5vBlxXWhXh%2BvpGBcKGCjp7%2FP6PyrmYsiqrEXa8Apoalq2kXj82TGKhqQ6AGQdr04byXJZtvQ5wx6MLH&X-Amz-Signature=e422160e44bbac7800086d793900e8a943715282c79f5e11a043dc6a829957d4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYFQTQ2L%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCslIUjEOE7YRGSVrdUim%2BFgnGirGTbpsUQQx0JihDATQIhAPfhpfHfR%2BlU%2FwdfuOYOTdc5UYGFjPwAt3nsAms3dRJJKv8DCEUQABoMNjM3NDIzMTgzODA1IgyCURE6HrZ%2BDricrqsq3APDDsKRcnEDLoTmId7yGetbr8OYvKXaf1N5kI3XZmDleqcAmE9UGI%2FDvIj%2F%2Fuw0y9SaJs4OI0zQHZXnOhlexO2uUmMybMZ6WpFPUtul3ZSDiLApEpiWyKnrLbT2oOPtmVxdeTvb%2BRcxNVhi%2FbnJfGxvvyl7xxkQzi1jN3DAe1ohiK7YAltXCGLtEJaK8Nrgkq1q9cOUr8mcsBlzAKebLDO56eTwJRlTWoJfKzp1pyebo3gI7tWgnUFcr5w8LaSW59wCQL0gC66N6PBjNY80mC6y5XaT2THeRWMDHDgcLmBOG%2B4oJIxNf6v38UvmpRrgtgH%2BCr96pPQrVuTmCyxJpZOpFHrU6W0ETw5RZ8Za%2BxyjmfjKC%2FyhNZHt51HFMT8l8D4dV92z5rRMMO53YQCzpoXPPYyEorsNl8yRnCMbzypnUpP5G6hNYF2ID2spLgtCV9fe%2FKj%2Fjen26SVKlmP%2Ba5ijlqnRKXQUsL28yVpid9zFIMn%2BgcGX%2ByhAU1sebG%2Fq4pTGOAI4Qs6yKAoG40RsFAfgkLGBLMtm5u6o%2BPm5oPqiClB8qZbcLSF4Q4VFWs5I9XoQX4pADyJ2mrNrgDxuifRDX1QCL0rT4LhQIsYXXwzxJnicU62%2B8vFIn8z6UzDMjIbCBjqkAXtjh3WXKNwbnSXUjfBbGMajxUKVAVIYXsUf%2Bm30rsqrl0AMkHVq%2B1rJJKNZLxm1wMQq5NrZwX7HogTG89grUaa7xNM4svitmjpk4qWua3o9jY9lRhCc%2Bj%2FJYMgPlXlZs5oTecGU%2FkL%2Bx5vBlxXWhXh%2BvpGBcKGCjp7%2FP6PyrmYsiqrEXa8Apoalq2kXj82TGKhqQ6AGQdr04byXJZtvQ5wx6MLH&X-Amz-Signature=e3e6fc32e17f9bea8788c4d86b0def99baafc6922ea59ffb314e93b118a8f7fd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYFQTQ2L%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCslIUjEOE7YRGSVrdUim%2BFgnGirGTbpsUQQx0JihDATQIhAPfhpfHfR%2BlU%2FwdfuOYOTdc5UYGFjPwAt3nsAms3dRJJKv8DCEUQABoMNjM3NDIzMTgzODA1IgyCURE6HrZ%2BDricrqsq3APDDsKRcnEDLoTmId7yGetbr8OYvKXaf1N5kI3XZmDleqcAmE9UGI%2FDvIj%2F%2Fuw0y9SaJs4OI0zQHZXnOhlexO2uUmMybMZ6WpFPUtul3ZSDiLApEpiWyKnrLbT2oOPtmVxdeTvb%2BRcxNVhi%2FbnJfGxvvyl7xxkQzi1jN3DAe1ohiK7YAltXCGLtEJaK8Nrgkq1q9cOUr8mcsBlzAKebLDO56eTwJRlTWoJfKzp1pyebo3gI7tWgnUFcr5w8LaSW59wCQL0gC66N6PBjNY80mC6y5XaT2THeRWMDHDgcLmBOG%2B4oJIxNf6v38UvmpRrgtgH%2BCr96pPQrVuTmCyxJpZOpFHrU6W0ETw5RZ8Za%2BxyjmfjKC%2FyhNZHt51HFMT8l8D4dV92z5rRMMO53YQCzpoXPPYyEorsNl8yRnCMbzypnUpP5G6hNYF2ID2spLgtCV9fe%2FKj%2Fjen26SVKlmP%2Ba5ijlqnRKXQUsL28yVpid9zFIMn%2BgcGX%2ByhAU1sebG%2Fq4pTGOAI4Qs6yKAoG40RsFAfgkLGBLMtm5u6o%2BPm5oPqiClB8qZbcLSF4Q4VFWs5I9XoQX4pADyJ2mrNrgDxuifRDX1QCL0rT4LhQIsYXXwzxJnicU62%2B8vFIn8z6UzDMjIbCBjqkAXtjh3WXKNwbnSXUjfBbGMajxUKVAVIYXsUf%2Bm30rsqrl0AMkHVq%2B1rJJKNZLxm1wMQq5NrZwX7HogTG89grUaa7xNM4svitmjpk4qWua3o9jY9lRhCc%2Bj%2FJYMgPlXlZs5oTecGU%2FkL%2Bx5vBlxXWhXh%2BvpGBcKGCjp7%2FP6PyrmYsiqrEXa8Apoalq2kXj82TGKhqQ6AGQdr04byXJZtvQ5wx6MLH&X-Amz-Signature=e4442e74773fc2473e0e08ae1e67e3cb5690f610fd1516bbc2364e004380c2a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYFQTQ2L%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCslIUjEOE7YRGSVrdUim%2BFgnGirGTbpsUQQx0JihDATQIhAPfhpfHfR%2BlU%2FwdfuOYOTdc5UYGFjPwAt3nsAms3dRJJKv8DCEUQABoMNjM3NDIzMTgzODA1IgyCURE6HrZ%2BDricrqsq3APDDsKRcnEDLoTmId7yGetbr8OYvKXaf1N5kI3XZmDleqcAmE9UGI%2FDvIj%2F%2Fuw0y9SaJs4OI0zQHZXnOhlexO2uUmMybMZ6WpFPUtul3ZSDiLApEpiWyKnrLbT2oOPtmVxdeTvb%2BRcxNVhi%2FbnJfGxvvyl7xxkQzi1jN3DAe1ohiK7YAltXCGLtEJaK8Nrgkq1q9cOUr8mcsBlzAKebLDO56eTwJRlTWoJfKzp1pyebo3gI7tWgnUFcr5w8LaSW59wCQL0gC66N6PBjNY80mC6y5XaT2THeRWMDHDgcLmBOG%2B4oJIxNf6v38UvmpRrgtgH%2BCr96pPQrVuTmCyxJpZOpFHrU6W0ETw5RZ8Za%2BxyjmfjKC%2FyhNZHt51HFMT8l8D4dV92z5rRMMO53YQCzpoXPPYyEorsNl8yRnCMbzypnUpP5G6hNYF2ID2spLgtCV9fe%2FKj%2Fjen26SVKlmP%2Ba5ijlqnRKXQUsL28yVpid9zFIMn%2BgcGX%2ByhAU1sebG%2Fq4pTGOAI4Qs6yKAoG40RsFAfgkLGBLMtm5u6o%2BPm5oPqiClB8qZbcLSF4Q4VFWs5I9XoQX4pADyJ2mrNrgDxuifRDX1QCL0rT4LhQIsYXXwzxJnicU62%2B8vFIn8z6UzDMjIbCBjqkAXtjh3WXKNwbnSXUjfBbGMajxUKVAVIYXsUf%2Bm30rsqrl0AMkHVq%2B1rJJKNZLxm1wMQq5NrZwX7HogTG89grUaa7xNM4svitmjpk4qWua3o9jY9lRhCc%2Bj%2FJYMgPlXlZs5oTecGU%2FkL%2Bx5vBlxXWhXh%2BvpGBcKGCjp7%2FP6PyrmYsiqrEXa8Apoalq2kXj82TGKhqQ6AGQdr04byXJZtvQ5wx6MLH&X-Amz-Signature=875a6be001cde3fe085d54fad20c5042199d3f7e3a079b6270e55693a84a5a5c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYFQTQ2L%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCslIUjEOE7YRGSVrdUim%2BFgnGirGTbpsUQQx0JihDATQIhAPfhpfHfR%2BlU%2FwdfuOYOTdc5UYGFjPwAt3nsAms3dRJJKv8DCEUQABoMNjM3NDIzMTgzODA1IgyCURE6HrZ%2BDricrqsq3APDDsKRcnEDLoTmId7yGetbr8OYvKXaf1N5kI3XZmDleqcAmE9UGI%2FDvIj%2F%2Fuw0y9SaJs4OI0zQHZXnOhlexO2uUmMybMZ6WpFPUtul3ZSDiLApEpiWyKnrLbT2oOPtmVxdeTvb%2BRcxNVhi%2FbnJfGxvvyl7xxkQzi1jN3DAe1ohiK7YAltXCGLtEJaK8Nrgkq1q9cOUr8mcsBlzAKebLDO56eTwJRlTWoJfKzp1pyebo3gI7tWgnUFcr5w8LaSW59wCQL0gC66N6PBjNY80mC6y5XaT2THeRWMDHDgcLmBOG%2B4oJIxNf6v38UvmpRrgtgH%2BCr96pPQrVuTmCyxJpZOpFHrU6W0ETw5RZ8Za%2BxyjmfjKC%2FyhNZHt51HFMT8l8D4dV92z5rRMMO53YQCzpoXPPYyEorsNl8yRnCMbzypnUpP5G6hNYF2ID2spLgtCV9fe%2FKj%2Fjen26SVKlmP%2Ba5ijlqnRKXQUsL28yVpid9zFIMn%2BgcGX%2ByhAU1sebG%2Fq4pTGOAI4Qs6yKAoG40RsFAfgkLGBLMtm5u6o%2BPm5oPqiClB8qZbcLSF4Q4VFWs5I9XoQX4pADyJ2mrNrgDxuifRDX1QCL0rT4LhQIsYXXwzxJnicU62%2B8vFIn8z6UzDMjIbCBjqkAXtjh3WXKNwbnSXUjfBbGMajxUKVAVIYXsUf%2Bm30rsqrl0AMkHVq%2B1rJJKNZLxm1wMQq5NrZwX7HogTG89grUaa7xNM4svitmjpk4qWua3o9jY9lRhCc%2Bj%2FJYMgPlXlZs5oTecGU%2FkL%2Bx5vBlxXWhXh%2BvpGBcKGCjp7%2FP6PyrmYsiqrEXa8Apoalq2kXj82TGKhqQ6AGQdr04byXJZtvQ5wx6MLH&X-Amz-Signature=3f23578be17ca0795228c0536d759fc10215b4382a965cb0730447aebc7a75ed&X-Amz-SignedHeaders=host&x-id=GetObject)
