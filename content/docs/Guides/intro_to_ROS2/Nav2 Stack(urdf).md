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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BLIPOYV%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGEg%2FmB2hUsbhPLrN0fk4x0vFDTyhVbJfC22hmDwURt9AiEAmX9wI4N9KefsoIivEEDJbyuAgcWVBQb9MdxWCUqO7vUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDLENztQLHpuzFyeAoCrcAycQvjKvSOVePt%2FIh3IeoJE2JrcSTpIXzJRWDmjGn9U1HjvNRW93FDby0jBM33kctlXkBhV1szjIhpcvvH7PV5mVGu4x%2B3ETAbuFynOGlOxT8ls%2B8Ln0tZb0Vb5xZqkzjCVKFoQwTyQO7YcO1uo96o6SVnsv%2Fa9pyxWke9%2FsZlq%2FJyRXJ%2BTKXDwutkUVy9Pq%2FIR%2B7LmV2ZqRK%2FEatcaPE45Ads%2FQONER5UWGV0JtQzGnG9MFqtlZaKNGDRGx0Tnsx%2BewbZpDwxvqiWV%2F2rKD2Ib80Z3qmKNow7nVNOpkeXNloeEqVaPo4f8mJi6MMfAE12SW7nY8Lb13iDtz4Zi7Q%2FCYrNkrS2mA24JW2v0MJ4t9UpEVzfMazbn%2FoO6Ppan%2B5y%2FbcfkRAoeaHimxt9E3WMXFqOeX6Z83pIPjNKb6yhs54xsovWgCr4o93Sp80PAPSmPnF0CntvNyNiB5MOOJuTSyqeEdcXtCCTYWCcdtayBbKGUzocuYyVF%2BtVEQ9SNHxtjKybQnptkkfxVeEh2OH2WLGRFcfjkAxaGZY96ecIjoNyuhYRHBIsF8PZQEldn3vZDlC%2BCtYfGs9ssfivC5l5tNdISv%2F01XjUZesdBZlFw3RpQUgoLMeVjxXjJbMILJwMIGOqUBTuKlH2MOirelLeiDWr9P8AyaIub9qznzu0GedWDx%2Fxhn%2FUy5r864E%2BpdQvcQBtS5T6nvajIHl96QTGlXZSD5KUlFo%2FqwPrKgLEzvgDEgHwocwUA34vmJ7aebObq96HZLzyvJr%2BtvRL1dNgDGdOuE3xZkeVKZ0xjecLCWkiIGwS8Rp8I85HDZKMiTJ0ZXyHXbMLEfDkFPFy2BRZbQ%2FNwdi3tp2sWu&X-Amz-Signature=c428692fc5a667845af6d703d933604aa9851d9c735efcbeb50c78b030ebfa87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BLIPOYV%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGEg%2FmB2hUsbhPLrN0fk4x0vFDTyhVbJfC22hmDwURt9AiEAmX9wI4N9KefsoIivEEDJbyuAgcWVBQb9MdxWCUqO7vUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDLENztQLHpuzFyeAoCrcAycQvjKvSOVePt%2FIh3IeoJE2JrcSTpIXzJRWDmjGn9U1HjvNRW93FDby0jBM33kctlXkBhV1szjIhpcvvH7PV5mVGu4x%2B3ETAbuFynOGlOxT8ls%2B8Ln0tZb0Vb5xZqkzjCVKFoQwTyQO7YcO1uo96o6SVnsv%2Fa9pyxWke9%2FsZlq%2FJyRXJ%2BTKXDwutkUVy9Pq%2FIR%2B7LmV2ZqRK%2FEatcaPE45Ads%2FQONER5UWGV0JtQzGnG9MFqtlZaKNGDRGx0Tnsx%2BewbZpDwxvqiWV%2F2rKD2Ib80Z3qmKNow7nVNOpkeXNloeEqVaPo4f8mJi6MMfAE12SW7nY8Lb13iDtz4Zi7Q%2FCYrNkrS2mA24JW2v0MJ4t9UpEVzfMazbn%2FoO6Ppan%2B5y%2FbcfkRAoeaHimxt9E3WMXFqOeX6Z83pIPjNKb6yhs54xsovWgCr4o93Sp80PAPSmPnF0CntvNyNiB5MOOJuTSyqeEdcXtCCTYWCcdtayBbKGUzocuYyVF%2BtVEQ9SNHxtjKybQnptkkfxVeEh2OH2WLGRFcfjkAxaGZY96ecIjoNyuhYRHBIsF8PZQEldn3vZDlC%2BCtYfGs9ssfivC5l5tNdISv%2F01XjUZesdBZlFw3RpQUgoLMeVjxXjJbMILJwMIGOqUBTuKlH2MOirelLeiDWr9P8AyaIub9qznzu0GedWDx%2Fxhn%2FUy5r864E%2BpdQvcQBtS5T6nvajIHl96QTGlXZSD5KUlFo%2FqwPrKgLEzvgDEgHwocwUA34vmJ7aebObq96HZLzyvJr%2BtvRL1dNgDGdOuE3xZkeVKZ0xjecLCWkiIGwS8Rp8I85HDZKMiTJ0ZXyHXbMLEfDkFPFy2BRZbQ%2FNwdi3tp2sWu&X-Amz-Signature=8dcbe7e6318ea106c21f5f92d8c5935b567c611cbe34605787132c2f5813c7cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BLIPOYV%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGEg%2FmB2hUsbhPLrN0fk4x0vFDTyhVbJfC22hmDwURt9AiEAmX9wI4N9KefsoIivEEDJbyuAgcWVBQb9MdxWCUqO7vUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDLENztQLHpuzFyeAoCrcAycQvjKvSOVePt%2FIh3IeoJE2JrcSTpIXzJRWDmjGn9U1HjvNRW93FDby0jBM33kctlXkBhV1szjIhpcvvH7PV5mVGu4x%2B3ETAbuFynOGlOxT8ls%2B8Ln0tZb0Vb5xZqkzjCVKFoQwTyQO7YcO1uo96o6SVnsv%2Fa9pyxWke9%2FsZlq%2FJyRXJ%2BTKXDwutkUVy9Pq%2FIR%2B7LmV2ZqRK%2FEatcaPE45Ads%2FQONER5UWGV0JtQzGnG9MFqtlZaKNGDRGx0Tnsx%2BewbZpDwxvqiWV%2F2rKD2Ib80Z3qmKNow7nVNOpkeXNloeEqVaPo4f8mJi6MMfAE12SW7nY8Lb13iDtz4Zi7Q%2FCYrNkrS2mA24JW2v0MJ4t9UpEVzfMazbn%2FoO6Ppan%2B5y%2FbcfkRAoeaHimxt9E3WMXFqOeX6Z83pIPjNKb6yhs54xsovWgCr4o93Sp80PAPSmPnF0CntvNyNiB5MOOJuTSyqeEdcXtCCTYWCcdtayBbKGUzocuYyVF%2BtVEQ9SNHxtjKybQnptkkfxVeEh2OH2WLGRFcfjkAxaGZY96ecIjoNyuhYRHBIsF8PZQEldn3vZDlC%2BCtYfGs9ssfivC5l5tNdISv%2F01XjUZesdBZlFw3RpQUgoLMeVjxXjJbMILJwMIGOqUBTuKlH2MOirelLeiDWr9P8AyaIub9qznzu0GedWDx%2Fxhn%2FUy5r864E%2BpdQvcQBtS5T6nvajIHl96QTGlXZSD5KUlFo%2FqwPrKgLEzvgDEgHwocwUA34vmJ7aebObq96HZLzyvJr%2BtvRL1dNgDGdOuE3xZkeVKZ0xjecLCWkiIGwS8Rp8I85HDZKMiTJ0ZXyHXbMLEfDkFPFy2BRZbQ%2FNwdi3tp2sWu&X-Amz-Signature=6e041d09ec4456acd3e672ba8def55e78f5e578b7ea357e1a3055d670cb912f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BLIPOYV%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGEg%2FmB2hUsbhPLrN0fk4x0vFDTyhVbJfC22hmDwURt9AiEAmX9wI4N9KefsoIivEEDJbyuAgcWVBQb9MdxWCUqO7vUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDLENztQLHpuzFyeAoCrcAycQvjKvSOVePt%2FIh3IeoJE2JrcSTpIXzJRWDmjGn9U1HjvNRW93FDby0jBM33kctlXkBhV1szjIhpcvvH7PV5mVGu4x%2B3ETAbuFynOGlOxT8ls%2B8Ln0tZb0Vb5xZqkzjCVKFoQwTyQO7YcO1uo96o6SVnsv%2Fa9pyxWke9%2FsZlq%2FJyRXJ%2BTKXDwutkUVy9Pq%2FIR%2B7LmV2ZqRK%2FEatcaPE45Ads%2FQONER5UWGV0JtQzGnG9MFqtlZaKNGDRGx0Tnsx%2BewbZpDwxvqiWV%2F2rKD2Ib80Z3qmKNow7nVNOpkeXNloeEqVaPo4f8mJi6MMfAE12SW7nY8Lb13iDtz4Zi7Q%2FCYrNkrS2mA24JW2v0MJ4t9UpEVzfMazbn%2FoO6Ppan%2B5y%2FbcfkRAoeaHimxt9E3WMXFqOeX6Z83pIPjNKb6yhs54xsovWgCr4o93Sp80PAPSmPnF0CntvNyNiB5MOOJuTSyqeEdcXtCCTYWCcdtayBbKGUzocuYyVF%2BtVEQ9SNHxtjKybQnptkkfxVeEh2OH2WLGRFcfjkAxaGZY96ecIjoNyuhYRHBIsF8PZQEldn3vZDlC%2BCtYfGs9ssfivC5l5tNdISv%2F01XjUZesdBZlFw3RpQUgoLMeVjxXjJbMILJwMIGOqUBTuKlH2MOirelLeiDWr9P8AyaIub9qznzu0GedWDx%2Fxhn%2FUy5r864E%2BpdQvcQBtS5T6nvajIHl96QTGlXZSD5KUlFo%2FqwPrKgLEzvgDEgHwocwUA34vmJ7aebObq96HZLzyvJr%2BtvRL1dNgDGdOuE3xZkeVKZ0xjecLCWkiIGwS8Rp8I85HDZKMiTJ0ZXyHXbMLEfDkFPFy2BRZbQ%2FNwdi3tp2sWu&X-Amz-Signature=5c43e4be7d41fde1d7a1d312b928a9ede6e223db65316d264c240ef0c0599762&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BLIPOYV%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGEg%2FmB2hUsbhPLrN0fk4x0vFDTyhVbJfC22hmDwURt9AiEAmX9wI4N9KefsoIivEEDJbyuAgcWVBQb9MdxWCUqO7vUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDLENztQLHpuzFyeAoCrcAycQvjKvSOVePt%2FIh3IeoJE2JrcSTpIXzJRWDmjGn9U1HjvNRW93FDby0jBM33kctlXkBhV1szjIhpcvvH7PV5mVGu4x%2B3ETAbuFynOGlOxT8ls%2B8Ln0tZb0Vb5xZqkzjCVKFoQwTyQO7YcO1uo96o6SVnsv%2Fa9pyxWke9%2FsZlq%2FJyRXJ%2BTKXDwutkUVy9Pq%2FIR%2B7LmV2ZqRK%2FEatcaPE45Ads%2FQONER5UWGV0JtQzGnG9MFqtlZaKNGDRGx0Tnsx%2BewbZpDwxvqiWV%2F2rKD2Ib80Z3qmKNow7nVNOpkeXNloeEqVaPo4f8mJi6MMfAE12SW7nY8Lb13iDtz4Zi7Q%2FCYrNkrS2mA24JW2v0MJ4t9UpEVzfMazbn%2FoO6Ppan%2B5y%2FbcfkRAoeaHimxt9E3WMXFqOeX6Z83pIPjNKb6yhs54xsovWgCr4o93Sp80PAPSmPnF0CntvNyNiB5MOOJuTSyqeEdcXtCCTYWCcdtayBbKGUzocuYyVF%2BtVEQ9SNHxtjKybQnptkkfxVeEh2OH2WLGRFcfjkAxaGZY96ecIjoNyuhYRHBIsF8PZQEldn3vZDlC%2BCtYfGs9ssfivC5l5tNdISv%2F01XjUZesdBZlFw3RpQUgoLMeVjxXjJbMILJwMIGOqUBTuKlH2MOirelLeiDWr9P8AyaIub9qznzu0GedWDx%2Fxhn%2FUy5r864E%2BpdQvcQBtS5T6nvajIHl96QTGlXZSD5KUlFo%2FqwPrKgLEzvgDEgHwocwUA34vmJ7aebObq96HZLzyvJr%2BtvRL1dNgDGdOuE3xZkeVKZ0xjecLCWkiIGwS8Rp8I85HDZKMiTJ0ZXyHXbMLEfDkFPFy2BRZbQ%2FNwdi3tp2sWu&X-Amz-Signature=bcee0bad6ae874bcbb0893743615f68bb1d4a21f5aefff0f706adf86509de947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BLIPOYV%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGEg%2FmB2hUsbhPLrN0fk4x0vFDTyhVbJfC22hmDwURt9AiEAmX9wI4N9KefsoIivEEDJbyuAgcWVBQb9MdxWCUqO7vUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDLENztQLHpuzFyeAoCrcAycQvjKvSOVePt%2FIh3IeoJE2JrcSTpIXzJRWDmjGn9U1HjvNRW93FDby0jBM33kctlXkBhV1szjIhpcvvH7PV5mVGu4x%2B3ETAbuFynOGlOxT8ls%2B8Ln0tZb0Vb5xZqkzjCVKFoQwTyQO7YcO1uo96o6SVnsv%2Fa9pyxWke9%2FsZlq%2FJyRXJ%2BTKXDwutkUVy9Pq%2FIR%2B7LmV2ZqRK%2FEatcaPE45Ads%2FQONER5UWGV0JtQzGnG9MFqtlZaKNGDRGx0Tnsx%2BewbZpDwxvqiWV%2F2rKD2Ib80Z3qmKNow7nVNOpkeXNloeEqVaPo4f8mJi6MMfAE12SW7nY8Lb13iDtz4Zi7Q%2FCYrNkrS2mA24JW2v0MJ4t9UpEVzfMazbn%2FoO6Ppan%2B5y%2FbcfkRAoeaHimxt9E3WMXFqOeX6Z83pIPjNKb6yhs54xsovWgCr4o93Sp80PAPSmPnF0CntvNyNiB5MOOJuTSyqeEdcXtCCTYWCcdtayBbKGUzocuYyVF%2BtVEQ9SNHxtjKybQnptkkfxVeEh2OH2WLGRFcfjkAxaGZY96ecIjoNyuhYRHBIsF8PZQEldn3vZDlC%2BCtYfGs9ssfivC5l5tNdISv%2F01XjUZesdBZlFw3RpQUgoLMeVjxXjJbMILJwMIGOqUBTuKlH2MOirelLeiDWr9P8AyaIub9qznzu0GedWDx%2Fxhn%2FUy5r864E%2BpdQvcQBtS5T6nvajIHl96QTGlXZSD5KUlFo%2FqwPrKgLEzvgDEgHwocwUA34vmJ7aebObq96HZLzyvJr%2BtvRL1dNgDGdOuE3xZkeVKZ0xjecLCWkiIGwS8Rp8I85HDZKMiTJ0ZXyHXbMLEfDkFPFy2BRZbQ%2FNwdi3tp2sWu&X-Amz-Signature=10fd4638902669e9d53d9a5fb9b7337de1caf74e961d767a097e21862591e85b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
