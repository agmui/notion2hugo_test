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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V6EBAC2%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQC8H8PxGGUtelRd8fa9Kk6i63Xxp17zDxgVx8htZyGDlQIgdZ1FH08DYnOeGz9uMRW9MC2zz%2FTEO5WfKktf1tjTUtEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDKFGvjcEDFXgigHndircA6%2BF8jiY4dm%2FInFJbO%2BHuS4ecXdO9bNepRF5upzyx0tdwl87W4hX6uU5SYx4yupH369rfQw052dvG0%2F5C26rgL5CM%2F537A1VPdVLG9QJCmFVEUFVHRJ7Thv57FC7WrxR3TM1Z8vh4kgrZfPPRMkC1WElT4bzbA7USPQ6nbOwWLL%2F848ubfk7qAuh0pNeJY8A72jTksmjuntGEq8wSZCcvVg%2FUmmh%2F0MpqWzoEcKjLq9GkpmfwgQcg5K3hBoYw%2BC3L%2Fg1iFyr63EfRiaUZ%2FYW%2Ftz8Mkdq1ORIbfQMyV%2BaliwwHbsii8eBhLtj5%2BNoIBb5dDLVILGUNHlsz9BmVsZJTpeQXVJ47BkGe8lL0bIoSCPIbeSaZ1dMbkCbgRQSkn6GkeBYHSl%2FCrbh3449eb8wwqtZjYqYMZCexkCbN2dO8LtPm6ibI5S%2F3iGVCOZQnSuEPotMa9wt1IFRaR657IjIwujS9h1iJsffazafwjn5AgmiRrZrFiexkkUWS%2Bhk3OI7M83A9F46ZCaLE7bgzRfxJVFf9XDpefzvasH8OOPZJXPuOzxc8PDOMvjmMMXRjNHiql7ZoYHCy8zEZZeEz%2FRjrjO2uZsFo%2FOVQcjMmW8%2Fd5hZH7%2FmXlj47AIFpT6pMIeE2cMGOqUBDyBFnmR8b3J%2B0t4%2FXxe9vDqNzIDIyTajXNHC3MrtHh5tFmhm6rPOdZzokKWne3XqNeuxKuvsHk5pcohyuOkv0L0SanoZ9saRWY6YHW8aB9M%2B3aQ6Bom6BwI71DKqMg7KwPv%2BNbRd%2FmPUZSZ%2B28famirrwyNm9aqf2wBxPjPHCr19iVNKFSMU4m6jbfl497Zjc5NWSI%2F9ZEhRfgicbVzeaujxA4u0&X-Amz-Signature=9f2d06b1e6cc95d53e7b72e77687460eb1706f2d633e0d489723e90168842eea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V6EBAC2%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQC8H8PxGGUtelRd8fa9Kk6i63Xxp17zDxgVx8htZyGDlQIgdZ1FH08DYnOeGz9uMRW9MC2zz%2FTEO5WfKktf1tjTUtEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDKFGvjcEDFXgigHndircA6%2BF8jiY4dm%2FInFJbO%2BHuS4ecXdO9bNepRF5upzyx0tdwl87W4hX6uU5SYx4yupH369rfQw052dvG0%2F5C26rgL5CM%2F537A1VPdVLG9QJCmFVEUFVHRJ7Thv57FC7WrxR3TM1Z8vh4kgrZfPPRMkC1WElT4bzbA7USPQ6nbOwWLL%2F848ubfk7qAuh0pNeJY8A72jTksmjuntGEq8wSZCcvVg%2FUmmh%2F0MpqWzoEcKjLq9GkpmfwgQcg5K3hBoYw%2BC3L%2Fg1iFyr63EfRiaUZ%2FYW%2Ftz8Mkdq1ORIbfQMyV%2BaliwwHbsii8eBhLtj5%2BNoIBb5dDLVILGUNHlsz9BmVsZJTpeQXVJ47BkGe8lL0bIoSCPIbeSaZ1dMbkCbgRQSkn6GkeBYHSl%2FCrbh3449eb8wwqtZjYqYMZCexkCbN2dO8LtPm6ibI5S%2F3iGVCOZQnSuEPotMa9wt1IFRaR657IjIwujS9h1iJsffazafwjn5AgmiRrZrFiexkkUWS%2Bhk3OI7M83A9F46ZCaLE7bgzRfxJVFf9XDpefzvasH8OOPZJXPuOzxc8PDOMvjmMMXRjNHiql7ZoYHCy8zEZZeEz%2FRjrjO2uZsFo%2FOVQcjMmW8%2Fd5hZH7%2FmXlj47AIFpT6pMIeE2cMGOqUBDyBFnmR8b3J%2B0t4%2FXxe9vDqNzIDIyTajXNHC3MrtHh5tFmhm6rPOdZzokKWne3XqNeuxKuvsHk5pcohyuOkv0L0SanoZ9saRWY6YHW8aB9M%2B3aQ6Bom6BwI71DKqMg7KwPv%2BNbRd%2FmPUZSZ%2B28famirrwyNm9aqf2wBxPjPHCr19iVNKFSMU4m6jbfl497Zjc5NWSI%2F9ZEhRfgicbVzeaujxA4u0&X-Amz-Signature=34cfa10bde7ade73697682d1213065cd77e36e1fb5312335be2e4afa3c32e568&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V6EBAC2%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQC8H8PxGGUtelRd8fa9Kk6i63Xxp17zDxgVx8htZyGDlQIgdZ1FH08DYnOeGz9uMRW9MC2zz%2FTEO5WfKktf1tjTUtEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDKFGvjcEDFXgigHndircA6%2BF8jiY4dm%2FInFJbO%2BHuS4ecXdO9bNepRF5upzyx0tdwl87W4hX6uU5SYx4yupH369rfQw052dvG0%2F5C26rgL5CM%2F537A1VPdVLG9QJCmFVEUFVHRJ7Thv57FC7WrxR3TM1Z8vh4kgrZfPPRMkC1WElT4bzbA7USPQ6nbOwWLL%2F848ubfk7qAuh0pNeJY8A72jTksmjuntGEq8wSZCcvVg%2FUmmh%2F0MpqWzoEcKjLq9GkpmfwgQcg5K3hBoYw%2BC3L%2Fg1iFyr63EfRiaUZ%2FYW%2Ftz8Mkdq1ORIbfQMyV%2BaliwwHbsii8eBhLtj5%2BNoIBb5dDLVILGUNHlsz9BmVsZJTpeQXVJ47BkGe8lL0bIoSCPIbeSaZ1dMbkCbgRQSkn6GkeBYHSl%2FCrbh3449eb8wwqtZjYqYMZCexkCbN2dO8LtPm6ibI5S%2F3iGVCOZQnSuEPotMa9wt1IFRaR657IjIwujS9h1iJsffazafwjn5AgmiRrZrFiexkkUWS%2Bhk3OI7M83A9F46ZCaLE7bgzRfxJVFf9XDpefzvasH8OOPZJXPuOzxc8PDOMvjmMMXRjNHiql7ZoYHCy8zEZZeEz%2FRjrjO2uZsFo%2FOVQcjMmW8%2Fd5hZH7%2FmXlj47AIFpT6pMIeE2cMGOqUBDyBFnmR8b3J%2B0t4%2FXxe9vDqNzIDIyTajXNHC3MrtHh5tFmhm6rPOdZzokKWne3XqNeuxKuvsHk5pcohyuOkv0L0SanoZ9saRWY6YHW8aB9M%2B3aQ6Bom6BwI71DKqMg7KwPv%2BNbRd%2FmPUZSZ%2B28famirrwyNm9aqf2wBxPjPHCr19iVNKFSMU4m6jbfl497Zjc5NWSI%2F9ZEhRfgicbVzeaujxA4u0&X-Amz-Signature=303ae9b5708f997d9160fe5e26dac0930db0e9e0bb09c4f0526f045fd13e2e87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V6EBAC2%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQC8H8PxGGUtelRd8fa9Kk6i63Xxp17zDxgVx8htZyGDlQIgdZ1FH08DYnOeGz9uMRW9MC2zz%2FTEO5WfKktf1tjTUtEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDKFGvjcEDFXgigHndircA6%2BF8jiY4dm%2FInFJbO%2BHuS4ecXdO9bNepRF5upzyx0tdwl87W4hX6uU5SYx4yupH369rfQw052dvG0%2F5C26rgL5CM%2F537A1VPdVLG9QJCmFVEUFVHRJ7Thv57FC7WrxR3TM1Z8vh4kgrZfPPRMkC1WElT4bzbA7USPQ6nbOwWLL%2F848ubfk7qAuh0pNeJY8A72jTksmjuntGEq8wSZCcvVg%2FUmmh%2F0MpqWzoEcKjLq9GkpmfwgQcg5K3hBoYw%2BC3L%2Fg1iFyr63EfRiaUZ%2FYW%2Ftz8Mkdq1ORIbfQMyV%2BaliwwHbsii8eBhLtj5%2BNoIBb5dDLVILGUNHlsz9BmVsZJTpeQXVJ47BkGe8lL0bIoSCPIbeSaZ1dMbkCbgRQSkn6GkeBYHSl%2FCrbh3449eb8wwqtZjYqYMZCexkCbN2dO8LtPm6ibI5S%2F3iGVCOZQnSuEPotMa9wt1IFRaR657IjIwujS9h1iJsffazafwjn5AgmiRrZrFiexkkUWS%2Bhk3OI7M83A9F46ZCaLE7bgzRfxJVFf9XDpefzvasH8OOPZJXPuOzxc8PDOMvjmMMXRjNHiql7ZoYHCy8zEZZeEz%2FRjrjO2uZsFo%2FOVQcjMmW8%2Fd5hZH7%2FmXlj47AIFpT6pMIeE2cMGOqUBDyBFnmR8b3J%2B0t4%2FXxe9vDqNzIDIyTajXNHC3MrtHh5tFmhm6rPOdZzokKWne3XqNeuxKuvsHk5pcohyuOkv0L0SanoZ9saRWY6YHW8aB9M%2B3aQ6Bom6BwI71DKqMg7KwPv%2BNbRd%2FmPUZSZ%2B28famirrwyNm9aqf2wBxPjPHCr19iVNKFSMU4m6jbfl497Zjc5NWSI%2F9ZEhRfgicbVzeaujxA4u0&X-Amz-Signature=1145e49b495e2cbad9061c5dfbb8e8740a3c3de30e27e035e5be52192d3a7938&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V6EBAC2%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQC8H8PxGGUtelRd8fa9Kk6i63Xxp17zDxgVx8htZyGDlQIgdZ1FH08DYnOeGz9uMRW9MC2zz%2FTEO5WfKktf1tjTUtEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDKFGvjcEDFXgigHndircA6%2BF8jiY4dm%2FInFJbO%2BHuS4ecXdO9bNepRF5upzyx0tdwl87W4hX6uU5SYx4yupH369rfQw052dvG0%2F5C26rgL5CM%2F537A1VPdVLG9QJCmFVEUFVHRJ7Thv57FC7WrxR3TM1Z8vh4kgrZfPPRMkC1WElT4bzbA7USPQ6nbOwWLL%2F848ubfk7qAuh0pNeJY8A72jTksmjuntGEq8wSZCcvVg%2FUmmh%2F0MpqWzoEcKjLq9GkpmfwgQcg5K3hBoYw%2BC3L%2Fg1iFyr63EfRiaUZ%2FYW%2Ftz8Mkdq1ORIbfQMyV%2BaliwwHbsii8eBhLtj5%2BNoIBb5dDLVILGUNHlsz9BmVsZJTpeQXVJ47BkGe8lL0bIoSCPIbeSaZ1dMbkCbgRQSkn6GkeBYHSl%2FCrbh3449eb8wwqtZjYqYMZCexkCbN2dO8LtPm6ibI5S%2F3iGVCOZQnSuEPotMa9wt1IFRaR657IjIwujS9h1iJsffazafwjn5AgmiRrZrFiexkkUWS%2Bhk3OI7M83A9F46ZCaLE7bgzRfxJVFf9XDpefzvasH8OOPZJXPuOzxc8PDOMvjmMMXRjNHiql7ZoYHCy8zEZZeEz%2FRjrjO2uZsFo%2FOVQcjMmW8%2Fd5hZH7%2FmXlj47AIFpT6pMIeE2cMGOqUBDyBFnmR8b3J%2B0t4%2FXxe9vDqNzIDIyTajXNHC3MrtHh5tFmhm6rPOdZzokKWne3XqNeuxKuvsHk5pcohyuOkv0L0SanoZ9saRWY6YHW8aB9M%2B3aQ6Bom6BwI71DKqMg7KwPv%2BNbRd%2FmPUZSZ%2B28famirrwyNm9aqf2wBxPjPHCr19iVNKFSMU4m6jbfl497Zjc5NWSI%2F9ZEhRfgicbVzeaujxA4u0&X-Amz-Signature=0f2533a24441239e825b59ffec2a809cb6a0e33dc926dc2073c0045fae098b16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V6EBAC2%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQC8H8PxGGUtelRd8fa9Kk6i63Xxp17zDxgVx8htZyGDlQIgdZ1FH08DYnOeGz9uMRW9MC2zz%2FTEO5WfKktf1tjTUtEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDKFGvjcEDFXgigHndircA6%2BF8jiY4dm%2FInFJbO%2BHuS4ecXdO9bNepRF5upzyx0tdwl87W4hX6uU5SYx4yupH369rfQw052dvG0%2F5C26rgL5CM%2F537A1VPdVLG9QJCmFVEUFVHRJ7Thv57FC7WrxR3TM1Z8vh4kgrZfPPRMkC1WElT4bzbA7USPQ6nbOwWLL%2F848ubfk7qAuh0pNeJY8A72jTksmjuntGEq8wSZCcvVg%2FUmmh%2F0MpqWzoEcKjLq9GkpmfwgQcg5K3hBoYw%2BC3L%2Fg1iFyr63EfRiaUZ%2FYW%2Ftz8Mkdq1ORIbfQMyV%2BaliwwHbsii8eBhLtj5%2BNoIBb5dDLVILGUNHlsz9BmVsZJTpeQXVJ47BkGe8lL0bIoSCPIbeSaZ1dMbkCbgRQSkn6GkeBYHSl%2FCrbh3449eb8wwqtZjYqYMZCexkCbN2dO8LtPm6ibI5S%2F3iGVCOZQnSuEPotMa9wt1IFRaR657IjIwujS9h1iJsffazafwjn5AgmiRrZrFiexkkUWS%2Bhk3OI7M83A9F46ZCaLE7bgzRfxJVFf9XDpefzvasH8OOPZJXPuOzxc8PDOMvjmMMXRjNHiql7ZoYHCy8zEZZeEz%2FRjrjO2uZsFo%2FOVQcjMmW8%2Fd5hZH7%2FmXlj47AIFpT6pMIeE2cMGOqUBDyBFnmR8b3J%2B0t4%2FXxe9vDqNzIDIyTajXNHC3MrtHh5tFmhm6rPOdZzokKWne3XqNeuxKuvsHk5pcohyuOkv0L0SanoZ9saRWY6YHW8aB9M%2B3aQ6Bom6BwI71DKqMg7KwPv%2BNbRd%2FmPUZSZ%2B28famirrwyNm9aqf2wBxPjPHCr19iVNKFSMU4m6jbfl497Zjc5NWSI%2F9ZEhRfgicbVzeaujxA4u0&X-Amz-Signature=a560051ecb70fff22620ca9a3f5d29776f388f89018049877092d25f79f59a86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
