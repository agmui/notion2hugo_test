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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCI37VNC%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCzkECikOtWQgzZzPazSfnDMcCQnVJ%2FkYcQbqyL%2BvBTqQIhAOhucH0y1I2KScZKhjQaRtHcLDvCKztx7PDwIVKmgUnPKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytwdXGnyXyEt3b0xsq3AMp2q4DaW8hJ9n4bZgtc2z3kPqiqnZtmdSEuuA1gDClAcCclVvRUT%2B8P2u7ZjQ3nKWnr34dmHKNMuMo7rwZ%2FMEyX5VqZuG8w6t6aMyy%2BX6T7GoxCIjzskPvgtNIAKX7NYei5efj1dLByFl2VJ%2BHfnaKfZFyhyH5luQGbPn3gI8Kfbfyihv%2Bj9Mr0DZ017OTC7YAzqirKumRjQpjQ15vclKKBoHuB25nqE455%2Bl9hSTHrTkV3kp2MEZxM1b1QW45cwUSZ%2F4PuIfmYoNuR4UcaQBoczMnPMRimVtzwVAMhzEWUIgOhd56%2BJYnhz2Ph0oKpliSSGZLmrBEBtKS6OsJLIIqrZCIbuCfhbpE2VGgw%2F8G8GTdiXB4n%2F0%2BaCOCE8ydCk7gDpPAN6%2BkZu8X22NhBG68A7tA72Pb51TlLElFmiWs92Jp0k%2FpbxyfneLa24uX%2BUjqRwdxyKZducPiD9yLfTzmA2qUl0EF2CzdLjuFYPuuNPjjSAnzcwB2cmiP%2BDFH9sHiQCBx7fj%2FugASz7mLC5u1FIQVrEZL8CzkHvlpDwP0YLxV96Hg6%2Fhe1fBo%2F%2BEWNNjIVnjiM1%2FB1SFcyjk4LPtlXo3J9nk4zrRxCpJBHWMvvJHA09wtV2UF5qMXZTCY2MPBBjqkATZSXrsPIGNnnwrQ7EP5%2FNAsZgdGRuvERnbm%2FzOCZGIwNz%2F6n%2BxnygMaF6VniIv69hImLZCSl7%2Fx8KtETwFWEEG%2F%2FECByss9vBjnTHGgh1sDPNjUabmSwEoTPFo%2FAtFOHcusOBYAO0mPfQFm1tYFq1NX92nnldr8T12Mjt3%2FJ2MfNqBx3KVi2dukA%2FyMJJatyPfQJPoKfW2s62DuBf5qR50oPqsw&X-Amz-Signature=4728d465114a90a420c214969a110f54117860523848c1a4a0b1df06d9000c6b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCI37VNC%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCzkECikOtWQgzZzPazSfnDMcCQnVJ%2FkYcQbqyL%2BvBTqQIhAOhucH0y1I2KScZKhjQaRtHcLDvCKztx7PDwIVKmgUnPKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytwdXGnyXyEt3b0xsq3AMp2q4DaW8hJ9n4bZgtc2z3kPqiqnZtmdSEuuA1gDClAcCclVvRUT%2B8P2u7ZjQ3nKWnr34dmHKNMuMo7rwZ%2FMEyX5VqZuG8w6t6aMyy%2BX6T7GoxCIjzskPvgtNIAKX7NYei5efj1dLByFl2VJ%2BHfnaKfZFyhyH5luQGbPn3gI8Kfbfyihv%2Bj9Mr0DZ017OTC7YAzqirKumRjQpjQ15vclKKBoHuB25nqE455%2Bl9hSTHrTkV3kp2MEZxM1b1QW45cwUSZ%2F4PuIfmYoNuR4UcaQBoczMnPMRimVtzwVAMhzEWUIgOhd56%2BJYnhz2Ph0oKpliSSGZLmrBEBtKS6OsJLIIqrZCIbuCfhbpE2VGgw%2F8G8GTdiXB4n%2F0%2BaCOCE8ydCk7gDpPAN6%2BkZu8X22NhBG68A7tA72Pb51TlLElFmiWs92Jp0k%2FpbxyfneLa24uX%2BUjqRwdxyKZducPiD9yLfTzmA2qUl0EF2CzdLjuFYPuuNPjjSAnzcwB2cmiP%2BDFH9sHiQCBx7fj%2FugASz7mLC5u1FIQVrEZL8CzkHvlpDwP0YLxV96Hg6%2Fhe1fBo%2F%2BEWNNjIVnjiM1%2FB1SFcyjk4LPtlXo3J9nk4zrRxCpJBHWMvvJHA09wtV2UF5qMXZTCY2MPBBjqkATZSXrsPIGNnnwrQ7EP5%2FNAsZgdGRuvERnbm%2FzOCZGIwNz%2F6n%2BxnygMaF6VniIv69hImLZCSl7%2Fx8KtETwFWEEG%2F%2FECByss9vBjnTHGgh1sDPNjUabmSwEoTPFo%2FAtFOHcusOBYAO0mPfQFm1tYFq1NX92nnldr8T12Mjt3%2FJ2MfNqBx3KVi2dukA%2FyMJJatyPfQJPoKfW2s62DuBf5qR50oPqsw&X-Amz-Signature=8ab333d071e3ed55e61415d0a7b64dc52ebb5ef2ef714d945b4ba396ffefe7b2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCI37VNC%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCzkECikOtWQgzZzPazSfnDMcCQnVJ%2FkYcQbqyL%2BvBTqQIhAOhucH0y1I2KScZKhjQaRtHcLDvCKztx7PDwIVKmgUnPKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytwdXGnyXyEt3b0xsq3AMp2q4DaW8hJ9n4bZgtc2z3kPqiqnZtmdSEuuA1gDClAcCclVvRUT%2B8P2u7ZjQ3nKWnr34dmHKNMuMo7rwZ%2FMEyX5VqZuG8w6t6aMyy%2BX6T7GoxCIjzskPvgtNIAKX7NYei5efj1dLByFl2VJ%2BHfnaKfZFyhyH5luQGbPn3gI8Kfbfyihv%2Bj9Mr0DZ017OTC7YAzqirKumRjQpjQ15vclKKBoHuB25nqE455%2Bl9hSTHrTkV3kp2MEZxM1b1QW45cwUSZ%2F4PuIfmYoNuR4UcaQBoczMnPMRimVtzwVAMhzEWUIgOhd56%2BJYnhz2Ph0oKpliSSGZLmrBEBtKS6OsJLIIqrZCIbuCfhbpE2VGgw%2F8G8GTdiXB4n%2F0%2BaCOCE8ydCk7gDpPAN6%2BkZu8X22NhBG68A7tA72Pb51TlLElFmiWs92Jp0k%2FpbxyfneLa24uX%2BUjqRwdxyKZducPiD9yLfTzmA2qUl0EF2CzdLjuFYPuuNPjjSAnzcwB2cmiP%2BDFH9sHiQCBx7fj%2FugASz7mLC5u1FIQVrEZL8CzkHvlpDwP0YLxV96Hg6%2Fhe1fBo%2F%2BEWNNjIVnjiM1%2FB1SFcyjk4LPtlXo3J9nk4zrRxCpJBHWMvvJHA09wtV2UF5qMXZTCY2MPBBjqkATZSXrsPIGNnnwrQ7EP5%2FNAsZgdGRuvERnbm%2FzOCZGIwNz%2F6n%2BxnygMaF6VniIv69hImLZCSl7%2Fx8KtETwFWEEG%2F%2FECByss9vBjnTHGgh1sDPNjUabmSwEoTPFo%2FAtFOHcusOBYAO0mPfQFm1tYFq1NX92nnldr8T12Mjt3%2FJ2MfNqBx3KVi2dukA%2FyMJJatyPfQJPoKfW2s62DuBf5qR50oPqsw&X-Amz-Signature=68aff6707106531735dda34e86431cec4d4188e5360c5daa6fd06d3fccba38ea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCI37VNC%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCzkECikOtWQgzZzPazSfnDMcCQnVJ%2FkYcQbqyL%2BvBTqQIhAOhucH0y1I2KScZKhjQaRtHcLDvCKztx7PDwIVKmgUnPKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytwdXGnyXyEt3b0xsq3AMp2q4DaW8hJ9n4bZgtc2z3kPqiqnZtmdSEuuA1gDClAcCclVvRUT%2B8P2u7ZjQ3nKWnr34dmHKNMuMo7rwZ%2FMEyX5VqZuG8w6t6aMyy%2BX6T7GoxCIjzskPvgtNIAKX7NYei5efj1dLByFl2VJ%2BHfnaKfZFyhyH5luQGbPn3gI8Kfbfyihv%2Bj9Mr0DZ017OTC7YAzqirKumRjQpjQ15vclKKBoHuB25nqE455%2Bl9hSTHrTkV3kp2MEZxM1b1QW45cwUSZ%2F4PuIfmYoNuR4UcaQBoczMnPMRimVtzwVAMhzEWUIgOhd56%2BJYnhz2Ph0oKpliSSGZLmrBEBtKS6OsJLIIqrZCIbuCfhbpE2VGgw%2F8G8GTdiXB4n%2F0%2BaCOCE8ydCk7gDpPAN6%2BkZu8X22NhBG68A7tA72Pb51TlLElFmiWs92Jp0k%2FpbxyfneLa24uX%2BUjqRwdxyKZducPiD9yLfTzmA2qUl0EF2CzdLjuFYPuuNPjjSAnzcwB2cmiP%2BDFH9sHiQCBx7fj%2FugASz7mLC5u1FIQVrEZL8CzkHvlpDwP0YLxV96Hg6%2Fhe1fBo%2F%2BEWNNjIVnjiM1%2FB1SFcyjk4LPtlXo3J9nk4zrRxCpJBHWMvvJHA09wtV2UF5qMXZTCY2MPBBjqkATZSXrsPIGNnnwrQ7EP5%2FNAsZgdGRuvERnbm%2FzOCZGIwNz%2F6n%2BxnygMaF6VniIv69hImLZCSl7%2Fx8KtETwFWEEG%2F%2FECByss9vBjnTHGgh1sDPNjUabmSwEoTPFo%2FAtFOHcusOBYAO0mPfQFm1tYFq1NX92nnldr8T12Mjt3%2FJ2MfNqBx3KVi2dukA%2FyMJJatyPfQJPoKfW2s62DuBf5qR50oPqsw&X-Amz-Signature=ced121a0d7495ed9c510dcfbf215839668a7bb1ff8c41d8100631751b4ec8110&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCI37VNC%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCzkECikOtWQgzZzPazSfnDMcCQnVJ%2FkYcQbqyL%2BvBTqQIhAOhucH0y1I2KScZKhjQaRtHcLDvCKztx7PDwIVKmgUnPKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytwdXGnyXyEt3b0xsq3AMp2q4DaW8hJ9n4bZgtc2z3kPqiqnZtmdSEuuA1gDClAcCclVvRUT%2B8P2u7ZjQ3nKWnr34dmHKNMuMo7rwZ%2FMEyX5VqZuG8w6t6aMyy%2BX6T7GoxCIjzskPvgtNIAKX7NYei5efj1dLByFl2VJ%2BHfnaKfZFyhyH5luQGbPn3gI8Kfbfyihv%2Bj9Mr0DZ017OTC7YAzqirKumRjQpjQ15vclKKBoHuB25nqE455%2Bl9hSTHrTkV3kp2MEZxM1b1QW45cwUSZ%2F4PuIfmYoNuR4UcaQBoczMnPMRimVtzwVAMhzEWUIgOhd56%2BJYnhz2Ph0oKpliSSGZLmrBEBtKS6OsJLIIqrZCIbuCfhbpE2VGgw%2F8G8GTdiXB4n%2F0%2BaCOCE8ydCk7gDpPAN6%2BkZu8X22NhBG68A7tA72Pb51TlLElFmiWs92Jp0k%2FpbxyfneLa24uX%2BUjqRwdxyKZducPiD9yLfTzmA2qUl0EF2CzdLjuFYPuuNPjjSAnzcwB2cmiP%2BDFH9sHiQCBx7fj%2FugASz7mLC5u1FIQVrEZL8CzkHvlpDwP0YLxV96Hg6%2Fhe1fBo%2F%2BEWNNjIVnjiM1%2FB1SFcyjk4LPtlXo3J9nk4zrRxCpJBHWMvvJHA09wtV2UF5qMXZTCY2MPBBjqkATZSXrsPIGNnnwrQ7EP5%2FNAsZgdGRuvERnbm%2FzOCZGIwNz%2F6n%2BxnygMaF6VniIv69hImLZCSl7%2Fx8KtETwFWEEG%2F%2FECByss9vBjnTHGgh1sDPNjUabmSwEoTPFo%2FAtFOHcusOBYAO0mPfQFm1tYFq1NX92nnldr8T12Mjt3%2FJ2MfNqBx3KVi2dukA%2FyMJJatyPfQJPoKfW2s62DuBf5qR50oPqsw&X-Amz-Signature=c7cc5d0e81e0a225713e585865474bbab6097301e47443e0c7a4067948adaff1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCI37VNC%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCzkECikOtWQgzZzPazSfnDMcCQnVJ%2FkYcQbqyL%2BvBTqQIhAOhucH0y1I2KScZKhjQaRtHcLDvCKztx7PDwIVKmgUnPKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytwdXGnyXyEt3b0xsq3AMp2q4DaW8hJ9n4bZgtc2z3kPqiqnZtmdSEuuA1gDClAcCclVvRUT%2B8P2u7ZjQ3nKWnr34dmHKNMuMo7rwZ%2FMEyX5VqZuG8w6t6aMyy%2BX6T7GoxCIjzskPvgtNIAKX7NYei5efj1dLByFl2VJ%2BHfnaKfZFyhyH5luQGbPn3gI8Kfbfyihv%2Bj9Mr0DZ017OTC7YAzqirKumRjQpjQ15vclKKBoHuB25nqE455%2Bl9hSTHrTkV3kp2MEZxM1b1QW45cwUSZ%2F4PuIfmYoNuR4UcaQBoczMnPMRimVtzwVAMhzEWUIgOhd56%2BJYnhz2Ph0oKpliSSGZLmrBEBtKS6OsJLIIqrZCIbuCfhbpE2VGgw%2F8G8GTdiXB4n%2F0%2BaCOCE8ydCk7gDpPAN6%2BkZu8X22NhBG68A7tA72Pb51TlLElFmiWs92Jp0k%2FpbxyfneLa24uX%2BUjqRwdxyKZducPiD9yLfTzmA2qUl0EF2CzdLjuFYPuuNPjjSAnzcwB2cmiP%2BDFH9sHiQCBx7fj%2FugASz7mLC5u1FIQVrEZL8CzkHvlpDwP0YLxV96Hg6%2Fhe1fBo%2F%2BEWNNjIVnjiM1%2FB1SFcyjk4LPtlXo3J9nk4zrRxCpJBHWMvvJHA09wtV2UF5qMXZTCY2MPBBjqkATZSXrsPIGNnnwrQ7EP5%2FNAsZgdGRuvERnbm%2FzOCZGIwNz%2F6n%2BxnygMaF6VniIv69hImLZCSl7%2Fx8KtETwFWEEG%2F%2FECByss9vBjnTHGgh1sDPNjUabmSwEoTPFo%2FAtFOHcusOBYAO0mPfQFm1tYFq1NX92nnldr8T12Mjt3%2FJ2MfNqBx3KVi2dukA%2FyMJJatyPfQJPoKfW2s62DuBf5qR50oPqsw&X-Amz-Signature=7b4cacba96240a6ca7b3d1974aee77d7182e3f593160e33cdfa9722b3cb21f9a&X-Amz-SignedHeaders=host&x-id=GetObject)
