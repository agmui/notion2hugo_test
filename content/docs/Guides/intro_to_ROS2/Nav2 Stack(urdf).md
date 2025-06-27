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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BWMZBFF%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCWVPpuANSlVmHIE9C2m2u7bl06PAvZXUpwf7QoBQFbyQIhAIAk7f8YzC9qjyv3Ntwim6lqKOwxNWAhKH68nR1JkvdnKv8DCHMQABoMNjM3NDIzMTgzODA1IgznyxEnr7SqdkvFqTkq3ANINN8p%2Bj4D6uhq2xAO7jR0XKbSXeDrUdbJpBHhnamprjKH8nUTB787EVN43ceuJiHWDFGI8HoYsaQClBoCUzkIbEmyHu%2FvlGJExnApq87nPOYkItuy%2BesjhYqfrsLhRbkZ9AlozBy3ywPs8uAYqkP6P%2FS%2Bso2Xhr8KeiTFtSgocqwC20e2LzsGnUCZKzQQ1DuCb5kpYejmeoYbfyQtpB83InMYFfXoYNb02FZ1mFje1tGGK1i1KJI0eRW1Fx0%2FEPAqFP07F1h6tcX6EWrol%2Bl6IO1H5hDovy4taLwvTKWO%2BDXWYxB8lzoSSeFENmoBQpmXCk89CEd0wTiWfjEmNl29qt8GcV1CSldPPr35qG6qZaCf%2BrguyYKLOQLD%2BLbac7Q%2FZxWMOUDKvIbqDUpGEf0bA6zL7NXMKB92Zh7HIsW4cX1AQHsr%2BeClswNGCqvbtiFYXN0aQ%2BM5yp%2BJPG%2BAHlPEwsAAHOv1NQTntIIoiGxSPtrQlKqn7L8TiY%2BjjeKXYMDj3tzGiysh41P16Xy7CgFSIp45U33WHWfMIZeZmUsWr5YDWbh%2BvsRUATuMFPmTjTBZ0svQonfIlE80qYNh95%2BYTruUhxYGYt2hPi06efxZfv2R4Uge9crf7xkl3DCz0%2FnCBjqkAexqM%2FXpBY1eKyLXZZ0OhJTfYo0Ovph8q8K83V%2Be%2FivTc8uqtc%2FhQGAsZ6UHsr%2FLGu0MeeRlGCVm0jNFzGKogCj7ArsVps84rGudTjVojI0U26ACtrzZqcizyzu9T1SrSLGHMftxHI%2FEKw5%2BO57OEKnHjadQ6K%2Bi08D8IiXqbv1osHlGw5oXKlcmdeGLUiELIdRvKK%2B3bE2bV2AytCe6RsxMTHdL&X-Amz-Signature=6a103eb55eaecf53b8397b00203bec8536ba9cd1f20c194361214368203effde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BWMZBFF%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCWVPpuANSlVmHIE9C2m2u7bl06PAvZXUpwf7QoBQFbyQIhAIAk7f8YzC9qjyv3Ntwim6lqKOwxNWAhKH68nR1JkvdnKv8DCHMQABoMNjM3NDIzMTgzODA1IgznyxEnr7SqdkvFqTkq3ANINN8p%2Bj4D6uhq2xAO7jR0XKbSXeDrUdbJpBHhnamprjKH8nUTB787EVN43ceuJiHWDFGI8HoYsaQClBoCUzkIbEmyHu%2FvlGJExnApq87nPOYkItuy%2BesjhYqfrsLhRbkZ9AlozBy3ywPs8uAYqkP6P%2FS%2Bso2Xhr8KeiTFtSgocqwC20e2LzsGnUCZKzQQ1DuCb5kpYejmeoYbfyQtpB83InMYFfXoYNb02FZ1mFje1tGGK1i1KJI0eRW1Fx0%2FEPAqFP07F1h6tcX6EWrol%2Bl6IO1H5hDovy4taLwvTKWO%2BDXWYxB8lzoSSeFENmoBQpmXCk89CEd0wTiWfjEmNl29qt8GcV1CSldPPr35qG6qZaCf%2BrguyYKLOQLD%2BLbac7Q%2FZxWMOUDKvIbqDUpGEf0bA6zL7NXMKB92Zh7HIsW4cX1AQHsr%2BeClswNGCqvbtiFYXN0aQ%2BM5yp%2BJPG%2BAHlPEwsAAHOv1NQTntIIoiGxSPtrQlKqn7L8TiY%2BjjeKXYMDj3tzGiysh41P16Xy7CgFSIp45U33WHWfMIZeZmUsWr5YDWbh%2BvsRUATuMFPmTjTBZ0svQonfIlE80qYNh95%2BYTruUhxYGYt2hPi06efxZfv2R4Uge9crf7xkl3DCz0%2FnCBjqkAexqM%2FXpBY1eKyLXZZ0OhJTfYo0Ovph8q8K83V%2Be%2FivTc8uqtc%2FhQGAsZ6UHsr%2FLGu0MeeRlGCVm0jNFzGKogCj7ArsVps84rGudTjVojI0U26ACtrzZqcizyzu9T1SrSLGHMftxHI%2FEKw5%2BO57OEKnHjadQ6K%2Bi08D8IiXqbv1osHlGw5oXKlcmdeGLUiELIdRvKK%2B3bE2bV2AytCe6RsxMTHdL&X-Amz-Signature=5a16b90eb329b1a8661078b9b0707e81216fd282a3d9c0816d9d9f08c6886fc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BWMZBFF%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCWVPpuANSlVmHIE9C2m2u7bl06PAvZXUpwf7QoBQFbyQIhAIAk7f8YzC9qjyv3Ntwim6lqKOwxNWAhKH68nR1JkvdnKv8DCHMQABoMNjM3NDIzMTgzODA1IgznyxEnr7SqdkvFqTkq3ANINN8p%2Bj4D6uhq2xAO7jR0XKbSXeDrUdbJpBHhnamprjKH8nUTB787EVN43ceuJiHWDFGI8HoYsaQClBoCUzkIbEmyHu%2FvlGJExnApq87nPOYkItuy%2BesjhYqfrsLhRbkZ9AlozBy3ywPs8uAYqkP6P%2FS%2Bso2Xhr8KeiTFtSgocqwC20e2LzsGnUCZKzQQ1DuCb5kpYejmeoYbfyQtpB83InMYFfXoYNb02FZ1mFje1tGGK1i1KJI0eRW1Fx0%2FEPAqFP07F1h6tcX6EWrol%2Bl6IO1H5hDovy4taLwvTKWO%2BDXWYxB8lzoSSeFENmoBQpmXCk89CEd0wTiWfjEmNl29qt8GcV1CSldPPr35qG6qZaCf%2BrguyYKLOQLD%2BLbac7Q%2FZxWMOUDKvIbqDUpGEf0bA6zL7NXMKB92Zh7HIsW4cX1AQHsr%2BeClswNGCqvbtiFYXN0aQ%2BM5yp%2BJPG%2BAHlPEwsAAHOv1NQTntIIoiGxSPtrQlKqn7L8TiY%2BjjeKXYMDj3tzGiysh41P16Xy7CgFSIp45U33WHWfMIZeZmUsWr5YDWbh%2BvsRUATuMFPmTjTBZ0svQonfIlE80qYNh95%2BYTruUhxYGYt2hPi06efxZfv2R4Uge9crf7xkl3DCz0%2FnCBjqkAexqM%2FXpBY1eKyLXZZ0OhJTfYo0Ovph8q8K83V%2Be%2FivTc8uqtc%2FhQGAsZ6UHsr%2FLGu0MeeRlGCVm0jNFzGKogCj7ArsVps84rGudTjVojI0U26ACtrzZqcizyzu9T1SrSLGHMftxHI%2FEKw5%2BO57OEKnHjadQ6K%2Bi08D8IiXqbv1osHlGw5oXKlcmdeGLUiELIdRvKK%2B3bE2bV2AytCe6RsxMTHdL&X-Amz-Signature=aff89fea45abcc471b6bb648e48edadb1fc4ac76d45fd32f473c4b49a4918b6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BWMZBFF%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCWVPpuANSlVmHIE9C2m2u7bl06PAvZXUpwf7QoBQFbyQIhAIAk7f8YzC9qjyv3Ntwim6lqKOwxNWAhKH68nR1JkvdnKv8DCHMQABoMNjM3NDIzMTgzODA1IgznyxEnr7SqdkvFqTkq3ANINN8p%2Bj4D6uhq2xAO7jR0XKbSXeDrUdbJpBHhnamprjKH8nUTB787EVN43ceuJiHWDFGI8HoYsaQClBoCUzkIbEmyHu%2FvlGJExnApq87nPOYkItuy%2BesjhYqfrsLhRbkZ9AlozBy3ywPs8uAYqkP6P%2FS%2Bso2Xhr8KeiTFtSgocqwC20e2LzsGnUCZKzQQ1DuCb5kpYejmeoYbfyQtpB83InMYFfXoYNb02FZ1mFje1tGGK1i1KJI0eRW1Fx0%2FEPAqFP07F1h6tcX6EWrol%2Bl6IO1H5hDovy4taLwvTKWO%2BDXWYxB8lzoSSeFENmoBQpmXCk89CEd0wTiWfjEmNl29qt8GcV1CSldPPr35qG6qZaCf%2BrguyYKLOQLD%2BLbac7Q%2FZxWMOUDKvIbqDUpGEf0bA6zL7NXMKB92Zh7HIsW4cX1AQHsr%2BeClswNGCqvbtiFYXN0aQ%2BM5yp%2BJPG%2BAHlPEwsAAHOv1NQTntIIoiGxSPtrQlKqn7L8TiY%2BjjeKXYMDj3tzGiysh41P16Xy7CgFSIp45U33WHWfMIZeZmUsWr5YDWbh%2BvsRUATuMFPmTjTBZ0svQonfIlE80qYNh95%2BYTruUhxYGYt2hPi06efxZfv2R4Uge9crf7xkl3DCz0%2FnCBjqkAexqM%2FXpBY1eKyLXZZ0OhJTfYo0Ovph8q8K83V%2Be%2FivTc8uqtc%2FhQGAsZ6UHsr%2FLGu0MeeRlGCVm0jNFzGKogCj7ArsVps84rGudTjVojI0U26ACtrzZqcizyzu9T1SrSLGHMftxHI%2FEKw5%2BO57OEKnHjadQ6K%2Bi08D8IiXqbv1osHlGw5oXKlcmdeGLUiELIdRvKK%2B3bE2bV2AytCe6RsxMTHdL&X-Amz-Signature=1f7aa7bdd42f96434e5989cb05b5f308afd91c65eefd96e1f1884eac0782aaa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BWMZBFF%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCWVPpuANSlVmHIE9C2m2u7bl06PAvZXUpwf7QoBQFbyQIhAIAk7f8YzC9qjyv3Ntwim6lqKOwxNWAhKH68nR1JkvdnKv8DCHMQABoMNjM3NDIzMTgzODA1IgznyxEnr7SqdkvFqTkq3ANINN8p%2Bj4D6uhq2xAO7jR0XKbSXeDrUdbJpBHhnamprjKH8nUTB787EVN43ceuJiHWDFGI8HoYsaQClBoCUzkIbEmyHu%2FvlGJExnApq87nPOYkItuy%2BesjhYqfrsLhRbkZ9AlozBy3ywPs8uAYqkP6P%2FS%2Bso2Xhr8KeiTFtSgocqwC20e2LzsGnUCZKzQQ1DuCb5kpYejmeoYbfyQtpB83InMYFfXoYNb02FZ1mFje1tGGK1i1KJI0eRW1Fx0%2FEPAqFP07F1h6tcX6EWrol%2Bl6IO1H5hDovy4taLwvTKWO%2BDXWYxB8lzoSSeFENmoBQpmXCk89CEd0wTiWfjEmNl29qt8GcV1CSldPPr35qG6qZaCf%2BrguyYKLOQLD%2BLbac7Q%2FZxWMOUDKvIbqDUpGEf0bA6zL7NXMKB92Zh7HIsW4cX1AQHsr%2BeClswNGCqvbtiFYXN0aQ%2BM5yp%2BJPG%2BAHlPEwsAAHOv1NQTntIIoiGxSPtrQlKqn7L8TiY%2BjjeKXYMDj3tzGiysh41P16Xy7CgFSIp45U33WHWfMIZeZmUsWr5YDWbh%2BvsRUATuMFPmTjTBZ0svQonfIlE80qYNh95%2BYTruUhxYGYt2hPi06efxZfv2R4Uge9crf7xkl3DCz0%2FnCBjqkAexqM%2FXpBY1eKyLXZZ0OhJTfYo0Ovph8q8K83V%2Be%2FivTc8uqtc%2FhQGAsZ6UHsr%2FLGu0MeeRlGCVm0jNFzGKogCj7ArsVps84rGudTjVojI0U26ACtrzZqcizyzu9T1SrSLGHMftxHI%2FEKw5%2BO57OEKnHjadQ6K%2Bi08D8IiXqbv1osHlGw5oXKlcmdeGLUiELIdRvKK%2B3bE2bV2AytCe6RsxMTHdL&X-Amz-Signature=87979129d56c62dd4f4597145bc87a34390cf5881b1d80ff6373bfdd7800b70d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BWMZBFF%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCWVPpuANSlVmHIE9C2m2u7bl06PAvZXUpwf7QoBQFbyQIhAIAk7f8YzC9qjyv3Ntwim6lqKOwxNWAhKH68nR1JkvdnKv8DCHMQABoMNjM3NDIzMTgzODA1IgznyxEnr7SqdkvFqTkq3ANINN8p%2Bj4D6uhq2xAO7jR0XKbSXeDrUdbJpBHhnamprjKH8nUTB787EVN43ceuJiHWDFGI8HoYsaQClBoCUzkIbEmyHu%2FvlGJExnApq87nPOYkItuy%2BesjhYqfrsLhRbkZ9AlozBy3ywPs8uAYqkP6P%2FS%2Bso2Xhr8KeiTFtSgocqwC20e2LzsGnUCZKzQQ1DuCb5kpYejmeoYbfyQtpB83InMYFfXoYNb02FZ1mFje1tGGK1i1KJI0eRW1Fx0%2FEPAqFP07F1h6tcX6EWrol%2Bl6IO1H5hDovy4taLwvTKWO%2BDXWYxB8lzoSSeFENmoBQpmXCk89CEd0wTiWfjEmNl29qt8GcV1CSldPPr35qG6qZaCf%2BrguyYKLOQLD%2BLbac7Q%2FZxWMOUDKvIbqDUpGEf0bA6zL7NXMKB92Zh7HIsW4cX1AQHsr%2BeClswNGCqvbtiFYXN0aQ%2BM5yp%2BJPG%2BAHlPEwsAAHOv1NQTntIIoiGxSPtrQlKqn7L8TiY%2BjjeKXYMDj3tzGiysh41P16Xy7CgFSIp45U33WHWfMIZeZmUsWr5YDWbh%2BvsRUATuMFPmTjTBZ0svQonfIlE80qYNh95%2BYTruUhxYGYt2hPi06efxZfv2R4Uge9crf7xkl3DCz0%2FnCBjqkAexqM%2FXpBY1eKyLXZZ0OhJTfYo0Ovph8q8K83V%2Be%2FivTc8uqtc%2FhQGAsZ6UHsr%2FLGu0MeeRlGCVm0jNFzGKogCj7ArsVps84rGudTjVojI0U26ACtrzZqcizyzu9T1SrSLGHMftxHI%2FEKw5%2BO57OEKnHjadQ6K%2Bi08D8IiXqbv1osHlGw5oXKlcmdeGLUiELIdRvKK%2B3bE2bV2AytCe6RsxMTHdL&X-Amz-Signature=3ce464bc2a87f4ff2de40ff49e9c462e9c09f8a0de514a2cff8efe06b03cef87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
