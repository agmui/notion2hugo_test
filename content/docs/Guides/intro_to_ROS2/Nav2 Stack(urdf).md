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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EVATSLD%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCTJaZJ1F%2BCKXFqo92k8pSkt5CyPpU36%2FK5QAEwHQx4ZQIhAMtb3bVrlMYjXeUEEJ2IluHjIG0mZxf6fjAdqr0%2FoqdVKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkYEWFFIR2aacjfDcq3ANnkAKHLtCElDUNDcUItHGe7PRmWqGIPOnndtkVnuyQ5JfIO8h5oJHJhIJdGvM6wpTuy1UbeEWFS%2FcyjF0f%2Bm2MK6f1nfDreErdJenCzh7bj6b3FgvQTmNeIHJzrHiA0UzuePP3F6EtEQFw%2BrS9k3ZvOPu7DnfrB%2Fl0QcAZH%2FrXbExDOmpmPcvKgGvucjLUTIIqBwfZ9dbxrp4Ok%2FZ7QnEFSjAmqc8mRD6oiSqQpTN4zRqIZP%2FA5R2i0hx2Cb6pkuAsdeiLtfVGDbPfO6o%2F2TI%2F8oNSn4%2FZkWFHRNuquQuz%2F8bddXXVJBXdaxxdkeOI4yMeuz345pxBYcjz33SBGHZQP7Q9ZeQ02VXN7oDeW48q2wF5uE6pjT6yRUAwSV%2Fudi2BZg7%2BaccHTilIq1Zit4293dXIIVRJ56tb2Tctmlu0a4y3E%2FMfVLDmTX%2FhUMkI6PNkX6MiavOFjiIM%2BF6FZoy3cKaw01Ibjzit8zzmh%2BdjUJlK7ohp81y2gHrKYkG5ymETxPn8jmFOUg9qgxpCdgHAmIU%2BWa9Z1ySntsyGptSbRSAWt3FXcTOXqDXtwFTwGTCcHkYYUr65yRI2Iom4A3nPRQ5XTybaEInx7THuyv6r6IZB2C9iK6vT9CdGtTDlkIq%2BBjqkAZN5xqNVokEZ%2F0R3DIZlyM4NceGh%2Bs8d3tXkhF0iQ56I%2FtI9eXQv2OVaxRvHwhapqlMlBmwtJTuM7LWDZ1si1ZV%2FqL2fHPLIAinJMF3yTivfod165TyskEbG6ctx7KhAG40XvogUR1CLxywB8%2F40CVF%2FHm%2BRmjzasY%2FP5WxLyPlispEd7yxWaDT7zg3Q3DD1r5x7VVmkpmAxiM%2FfkplcIBO1Q8TS&X-Amz-Signature=f715f4a0571fec2e1b148b01630e03347c2e3232670d2259a1976562cd41d2dc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EVATSLD%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCTJaZJ1F%2BCKXFqo92k8pSkt5CyPpU36%2FK5QAEwHQx4ZQIhAMtb3bVrlMYjXeUEEJ2IluHjIG0mZxf6fjAdqr0%2FoqdVKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkYEWFFIR2aacjfDcq3ANnkAKHLtCElDUNDcUItHGe7PRmWqGIPOnndtkVnuyQ5JfIO8h5oJHJhIJdGvM6wpTuy1UbeEWFS%2FcyjF0f%2Bm2MK6f1nfDreErdJenCzh7bj6b3FgvQTmNeIHJzrHiA0UzuePP3F6EtEQFw%2BrS9k3ZvOPu7DnfrB%2Fl0QcAZH%2FrXbExDOmpmPcvKgGvucjLUTIIqBwfZ9dbxrp4Ok%2FZ7QnEFSjAmqc8mRD6oiSqQpTN4zRqIZP%2FA5R2i0hx2Cb6pkuAsdeiLtfVGDbPfO6o%2F2TI%2F8oNSn4%2FZkWFHRNuquQuz%2F8bddXXVJBXdaxxdkeOI4yMeuz345pxBYcjz33SBGHZQP7Q9ZeQ02VXN7oDeW48q2wF5uE6pjT6yRUAwSV%2Fudi2BZg7%2BaccHTilIq1Zit4293dXIIVRJ56tb2Tctmlu0a4y3E%2FMfVLDmTX%2FhUMkI6PNkX6MiavOFjiIM%2BF6FZoy3cKaw01Ibjzit8zzmh%2BdjUJlK7ohp81y2gHrKYkG5ymETxPn8jmFOUg9qgxpCdgHAmIU%2BWa9Z1ySntsyGptSbRSAWt3FXcTOXqDXtwFTwGTCcHkYYUr65yRI2Iom4A3nPRQ5XTybaEInx7THuyv6r6IZB2C9iK6vT9CdGtTDlkIq%2BBjqkAZN5xqNVokEZ%2F0R3DIZlyM4NceGh%2Bs8d3tXkhF0iQ56I%2FtI9eXQv2OVaxRvHwhapqlMlBmwtJTuM7LWDZ1si1ZV%2FqL2fHPLIAinJMF3yTivfod165TyskEbG6ctx7KhAG40XvogUR1CLxywB8%2F40CVF%2FHm%2BRmjzasY%2FP5WxLyPlispEd7yxWaDT7zg3Q3DD1r5x7VVmkpmAxiM%2FfkplcIBO1Q8TS&X-Amz-Signature=fc5ccc5b34279465649017b915c7a596a99bd3b835d7336c5f5fc2de4c8f6d88&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EVATSLD%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCTJaZJ1F%2BCKXFqo92k8pSkt5CyPpU36%2FK5QAEwHQx4ZQIhAMtb3bVrlMYjXeUEEJ2IluHjIG0mZxf6fjAdqr0%2FoqdVKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkYEWFFIR2aacjfDcq3ANnkAKHLtCElDUNDcUItHGe7PRmWqGIPOnndtkVnuyQ5JfIO8h5oJHJhIJdGvM6wpTuy1UbeEWFS%2FcyjF0f%2Bm2MK6f1nfDreErdJenCzh7bj6b3FgvQTmNeIHJzrHiA0UzuePP3F6EtEQFw%2BrS9k3ZvOPu7DnfrB%2Fl0QcAZH%2FrXbExDOmpmPcvKgGvucjLUTIIqBwfZ9dbxrp4Ok%2FZ7QnEFSjAmqc8mRD6oiSqQpTN4zRqIZP%2FA5R2i0hx2Cb6pkuAsdeiLtfVGDbPfO6o%2F2TI%2F8oNSn4%2FZkWFHRNuquQuz%2F8bddXXVJBXdaxxdkeOI4yMeuz345pxBYcjz33SBGHZQP7Q9ZeQ02VXN7oDeW48q2wF5uE6pjT6yRUAwSV%2Fudi2BZg7%2BaccHTilIq1Zit4293dXIIVRJ56tb2Tctmlu0a4y3E%2FMfVLDmTX%2FhUMkI6PNkX6MiavOFjiIM%2BF6FZoy3cKaw01Ibjzit8zzmh%2BdjUJlK7ohp81y2gHrKYkG5ymETxPn8jmFOUg9qgxpCdgHAmIU%2BWa9Z1ySntsyGptSbRSAWt3FXcTOXqDXtwFTwGTCcHkYYUr65yRI2Iom4A3nPRQ5XTybaEInx7THuyv6r6IZB2C9iK6vT9CdGtTDlkIq%2BBjqkAZN5xqNVokEZ%2F0R3DIZlyM4NceGh%2Bs8d3tXkhF0iQ56I%2FtI9eXQv2OVaxRvHwhapqlMlBmwtJTuM7LWDZ1si1ZV%2FqL2fHPLIAinJMF3yTivfod165TyskEbG6ctx7KhAG40XvogUR1CLxywB8%2F40CVF%2FHm%2BRmjzasY%2FP5WxLyPlispEd7yxWaDT7zg3Q3DD1r5x7VVmkpmAxiM%2FfkplcIBO1Q8TS&X-Amz-Signature=46e3ad4b6599b9b4913042d70251cd2e3aa22c48469adbc2f5fd6f35e9587bac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EVATSLD%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCTJaZJ1F%2BCKXFqo92k8pSkt5CyPpU36%2FK5QAEwHQx4ZQIhAMtb3bVrlMYjXeUEEJ2IluHjIG0mZxf6fjAdqr0%2FoqdVKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkYEWFFIR2aacjfDcq3ANnkAKHLtCElDUNDcUItHGe7PRmWqGIPOnndtkVnuyQ5JfIO8h5oJHJhIJdGvM6wpTuy1UbeEWFS%2FcyjF0f%2Bm2MK6f1nfDreErdJenCzh7bj6b3FgvQTmNeIHJzrHiA0UzuePP3F6EtEQFw%2BrS9k3ZvOPu7DnfrB%2Fl0QcAZH%2FrXbExDOmpmPcvKgGvucjLUTIIqBwfZ9dbxrp4Ok%2FZ7QnEFSjAmqc8mRD6oiSqQpTN4zRqIZP%2FA5R2i0hx2Cb6pkuAsdeiLtfVGDbPfO6o%2F2TI%2F8oNSn4%2FZkWFHRNuquQuz%2F8bddXXVJBXdaxxdkeOI4yMeuz345pxBYcjz33SBGHZQP7Q9ZeQ02VXN7oDeW48q2wF5uE6pjT6yRUAwSV%2Fudi2BZg7%2BaccHTilIq1Zit4293dXIIVRJ56tb2Tctmlu0a4y3E%2FMfVLDmTX%2FhUMkI6PNkX6MiavOFjiIM%2BF6FZoy3cKaw01Ibjzit8zzmh%2BdjUJlK7ohp81y2gHrKYkG5ymETxPn8jmFOUg9qgxpCdgHAmIU%2BWa9Z1ySntsyGptSbRSAWt3FXcTOXqDXtwFTwGTCcHkYYUr65yRI2Iom4A3nPRQ5XTybaEInx7THuyv6r6IZB2C9iK6vT9CdGtTDlkIq%2BBjqkAZN5xqNVokEZ%2F0R3DIZlyM4NceGh%2Bs8d3tXkhF0iQ56I%2FtI9eXQv2OVaxRvHwhapqlMlBmwtJTuM7LWDZ1si1ZV%2FqL2fHPLIAinJMF3yTivfod165TyskEbG6ctx7KhAG40XvogUR1CLxywB8%2F40CVF%2FHm%2BRmjzasY%2FP5WxLyPlispEd7yxWaDT7zg3Q3DD1r5x7VVmkpmAxiM%2FfkplcIBO1Q8TS&X-Amz-Signature=0f2f8c12fb0fc1ea93ea70c4763819f7c6c20193f766d41e80d13b726489e533&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EVATSLD%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCTJaZJ1F%2BCKXFqo92k8pSkt5CyPpU36%2FK5QAEwHQx4ZQIhAMtb3bVrlMYjXeUEEJ2IluHjIG0mZxf6fjAdqr0%2FoqdVKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkYEWFFIR2aacjfDcq3ANnkAKHLtCElDUNDcUItHGe7PRmWqGIPOnndtkVnuyQ5JfIO8h5oJHJhIJdGvM6wpTuy1UbeEWFS%2FcyjF0f%2Bm2MK6f1nfDreErdJenCzh7bj6b3FgvQTmNeIHJzrHiA0UzuePP3F6EtEQFw%2BrS9k3ZvOPu7DnfrB%2Fl0QcAZH%2FrXbExDOmpmPcvKgGvucjLUTIIqBwfZ9dbxrp4Ok%2FZ7QnEFSjAmqc8mRD6oiSqQpTN4zRqIZP%2FA5R2i0hx2Cb6pkuAsdeiLtfVGDbPfO6o%2F2TI%2F8oNSn4%2FZkWFHRNuquQuz%2F8bddXXVJBXdaxxdkeOI4yMeuz345pxBYcjz33SBGHZQP7Q9ZeQ02VXN7oDeW48q2wF5uE6pjT6yRUAwSV%2Fudi2BZg7%2BaccHTilIq1Zit4293dXIIVRJ56tb2Tctmlu0a4y3E%2FMfVLDmTX%2FhUMkI6PNkX6MiavOFjiIM%2BF6FZoy3cKaw01Ibjzit8zzmh%2BdjUJlK7ohp81y2gHrKYkG5ymETxPn8jmFOUg9qgxpCdgHAmIU%2BWa9Z1ySntsyGptSbRSAWt3FXcTOXqDXtwFTwGTCcHkYYUr65yRI2Iom4A3nPRQ5XTybaEInx7THuyv6r6IZB2C9iK6vT9CdGtTDlkIq%2BBjqkAZN5xqNVokEZ%2F0R3DIZlyM4NceGh%2Bs8d3tXkhF0iQ56I%2FtI9eXQv2OVaxRvHwhapqlMlBmwtJTuM7LWDZ1si1ZV%2FqL2fHPLIAinJMF3yTivfod165TyskEbG6ctx7KhAG40XvogUR1CLxywB8%2F40CVF%2FHm%2BRmjzasY%2FP5WxLyPlispEd7yxWaDT7zg3Q3DD1r5x7VVmkpmAxiM%2FfkplcIBO1Q8TS&X-Amz-Signature=83a2d218526e746b1ffeb7facf327831c31616648a49a9ed48036a2e18fc038e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EVATSLD%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCTJaZJ1F%2BCKXFqo92k8pSkt5CyPpU36%2FK5QAEwHQx4ZQIhAMtb3bVrlMYjXeUEEJ2IluHjIG0mZxf6fjAdqr0%2FoqdVKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkYEWFFIR2aacjfDcq3ANnkAKHLtCElDUNDcUItHGe7PRmWqGIPOnndtkVnuyQ5JfIO8h5oJHJhIJdGvM6wpTuy1UbeEWFS%2FcyjF0f%2Bm2MK6f1nfDreErdJenCzh7bj6b3FgvQTmNeIHJzrHiA0UzuePP3F6EtEQFw%2BrS9k3ZvOPu7DnfrB%2Fl0QcAZH%2FrXbExDOmpmPcvKgGvucjLUTIIqBwfZ9dbxrp4Ok%2FZ7QnEFSjAmqc8mRD6oiSqQpTN4zRqIZP%2FA5R2i0hx2Cb6pkuAsdeiLtfVGDbPfO6o%2F2TI%2F8oNSn4%2FZkWFHRNuquQuz%2F8bddXXVJBXdaxxdkeOI4yMeuz345pxBYcjz33SBGHZQP7Q9ZeQ02VXN7oDeW48q2wF5uE6pjT6yRUAwSV%2Fudi2BZg7%2BaccHTilIq1Zit4293dXIIVRJ56tb2Tctmlu0a4y3E%2FMfVLDmTX%2FhUMkI6PNkX6MiavOFjiIM%2BF6FZoy3cKaw01Ibjzit8zzmh%2BdjUJlK7ohp81y2gHrKYkG5ymETxPn8jmFOUg9qgxpCdgHAmIU%2BWa9Z1ySntsyGptSbRSAWt3FXcTOXqDXtwFTwGTCcHkYYUr65yRI2Iom4A3nPRQ5XTybaEInx7THuyv6r6IZB2C9iK6vT9CdGtTDlkIq%2BBjqkAZN5xqNVokEZ%2F0R3DIZlyM4NceGh%2Bs8d3tXkhF0iQ56I%2FtI9eXQv2OVaxRvHwhapqlMlBmwtJTuM7LWDZ1si1ZV%2FqL2fHPLIAinJMF3yTivfod165TyskEbG6ctx7KhAG40XvogUR1CLxywB8%2F40CVF%2FHm%2BRmjzasY%2FP5WxLyPlispEd7yxWaDT7zg3Q3DD1r5x7VVmkpmAxiM%2FfkplcIBO1Q8TS&X-Amz-Signature=ac41e548447e1d22f276267224ddba2188ddd590672b6c31e4cb38bd6f8d8642&X-Amz-SignedHeaders=host&x-id=GetObject)
