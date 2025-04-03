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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OKX5CEK%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIFwUQIAjuxJhXTiOzTnCW%2BrMsp0Pbm5t6Pk3zjezgazGAiBLYHjAenF%2BgQVaCMc36tZ%2B2CtL4bnbSp4vi3ZSrm6rhSqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD7z%2FNgMUZ0iumJLwKtwDqq%2BCMe1xhkfgFcqgPvWbGQVTT0715IDwjb%2FKEEkL8WKMSqpV4VcAk81kiMVBgdtiNNNTGLKJxUKhaI1k%2FV3vEp3DTY4Pm7H9YHpEeQFchetovnk2EB%2BgEB3ZaSV%2BfUNRfaUlTuLJxbuea%2FQZFBW5PoEeNrJvN63Qwf1gBm5s6VnpMC6kI74hnn9%2FoAhXpArqkKWe2UsM25lWMlM4V2HgKDjeuXtttki1n%2BSv9QLVKQw1bVpId%2F7dr1AE54Ir2Y1ZuSeLTg%2FIBFT%2FV07zTzbBwfu2RQ1rlByihukWr7SPHL%2Bk9ar3Qzw1MFe9qOmT%2FP%2BOYHUlppzja9299MnSdfhVYkaYBCP%2B3jFCJQP6jlYLF5zKyscq6Tw38vmp%2BdalQCbUd09TYQs4KYBlv5i0%2F3Xxlp%2F0cNx%2BliqCkJzzmkfazfOZwC8LvmKH9zXocwb9ttLKPpL5Nq00NDq2rZUNkoVAEqFjCHly7UV6l8jFeSIx3Iebd0HuvzbqRWXyNfVya7JrZGkU%2FAhcITcHVoImL5I0vikHEDHmWueSaDlD79quz8hRb6nFVVbbbpDuOuf0FUerIzhzIzO1%2FypVCbgzQ2Fp50Dpc6sNtxE%2Few2rqoskhU%2Fem3DY%2BxvpQ4BQ6Kgw8uC4vwY6pgHlJ5OKp%2B5g2HFXTp%2ByhDpLR2rbjYgmw8gmVF4A6dldTlQTd%2BOwu9iDfWc3FgidAPs92yoRcq%2FnoVTm%2FB5bu%2BV%2FjI%2BLLKGYpvhT04matFkNZVsRbBj2BsKyo4iYBc1R%2BRGQS2mM00CQbYUFnQSn8h3Mh%2F%2BQvmzCYkh9h8v0fgUcUrxr5YIlDibnTMZ3l7hytDOOx2fMRjsuZJwpoUTUqoMYS2Yo1920&X-Amz-Signature=f11f485c5700363988d163708a13ff899c81fba8ee0abbb4acbb30ea87241486&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OKX5CEK%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIFwUQIAjuxJhXTiOzTnCW%2BrMsp0Pbm5t6Pk3zjezgazGAiBLYHjAenF%2BgQVaCMc36tZ%2B2CtL4bnbSp4vi3ZSrm6rhSqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD7z%2FNgMUZ0iumJLwKtwDqq%2BCMe1xhkfgFcqgPvWbGQVTT0715IDwjb%2FKEEkL8WKMSqpV4VcAk81kiMVBgdtiNNNTGLKJxUKhaI1k%2FV3vEp3DTY4Pm7H9YHpEeQFchetovnk2EB%2BgEB3ZaSV%2BfUNRfaUlTuLJxbuea%2FQZFBW5PoEeNrJvN63Qwf1gBm5s6VnpMC6kI74hnn9%2FoAhXpArqkKWe2UsM25lWMlM4V2HgKDjeuXtttki1n%2BSv9QLVKQw1bVpId%2F7dr1AE54Ir2Y1ZuSeLTg%2FIBFT%2FV07zTzbBwfu2RQ1rlByihukWr7SPHL%2Bk9ar3Qzw1MFe9qOmT%2FP%2BOYHUlppzja9299MnSdfhVYkaYBCP%2B3jFCJQP6jlYLF5zKyscq6Tw38vmp%2BdalQCbUd09TYQs4KYBlv5i0%2F3Xxlp%2F0cNx%2BliqCkJzzmkfazfOZwC8LvmKH9zXocwb9ttLKPpL5Nq00NDq2rZUNkoVAEqFjCHly7UV6l8jFeSIx3Iebd0HuvzbqRWXyNfVya7JrZGkU%2FAhcITcHVoImL5I0vikHEDHmWueSaDlD79quz8hRb6nFVVbbbpDuOuf0FUerIzhzIzO1%2FypVCbgzQ2Fp50Dpc6sNtxE%2Few2rqoskhU%2Fem3DY%2BxvpQ4BQ6Kgw8uC4vwY6pgHlJ5OKp%2B5g2HFXTp%2ByhDpLR2rbjYgmw8gmVF4A6dldTlQTd%2BOwu9iDfWc3FgidAPs92yoRcq%2FnoVTm%2FB5bu%2BV%2FjI%2BLLKGYpvhT04matFkNZVsRbBj2BsKyo4iYBc1R%2BRGQS2mM00CQbYUFnQSn8h3Mh%2F%2BQvmzCYkh9h8v0fgUcUrxr5YIlDibnTMZ3l7hytDOOx2fMRjsuZJwpoUTUqoMYS2Yo1920&X-Amz-Signature=b6a39cd383b2823d263321016cbbb4a12e5b9939af4751eb84da2b3de782e403&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OKX5CEK%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIFwUQIAjuxJhXTiOzTnCW%2BrMsp0Pbm5t6Pk3zjezgazGAiBLYHjAenF%2BgQVaCMc36tZ%2B2CtL4bnbSp4vi3ZSrm6rhSqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD7z%2FNgMUZ0iumJLwKtwDqq%2BCMe1xhkfgFcqgPvWbGQVTT0715IDwjb%2FKEEkL8WKMSqpV4VcAk81kiMVBgdtiNNNTGLKJxUKhaI1k%2FV3vEp3DTY4Pm7H9YHpEeQFchetovnk2EB%2BgEB3ZaSV%2BfUNRfaUlTuLJxbuea%2FQZFBW5PoEeNrJvN63Qwf1gBm5s6VnpMC6kI74hnn9%2FoAhXpArqkKWe2UsM25lWMlM4V2HgKDjeuXtttki1n%2BSv9QLVKQw1bVpId%2F7dr1AE54Ir2Y1ZuSeLTg%2FIBFT%2FV07zTzbBwfu2RQ1rlByihukWr7SPHL%2Bk9ar3Qzw1MFe9qOmT%2FP%2BOYHUlppzja9299MnSdfhVYkaYBCP%2B3jFCJQP6jlYLF5zKyscq6Tw38vmp%2BdalQCbUd09TYQs4KYBlv5i0%2F3Xxlp%2F0cNx%2BliqCkJzzmkfazfOZwC8LvmKH9zXocwb9ttLKPpL5Nq00NDq2rZUNkoVAEqFjCHly7UV6l8jFeSIx3Iebd0HuvzbqRWXyNfVya7JrZGkU%2FAhcITcHVoImL5I0vikHEDHmWueSaDlD79quz8hRb6nFVVbbbpDuOuf0FUerIzhzIzO1%2FypVCbgzQ2Fp50Dpc6sNtxE%2Few2rqoskhU%2Fem3DY%2BxvpQ4BQ6Kgw8uC4vwY6pgHlJ5OKp%2B5g2HFXTp%2ByhDpLR2rbjYgmw8gmVF4A6dldTlQTd%2BOwu9iDfWc3FgidAPs92yoRcq%2FnoVTm%2FB5bu%2BV%2FjI%2BLLKGYpvhT04matFkNZVsRbBj2BsKyo4iYBc1R%2BRGQS2mM00CQbYUFnQSn8h3Mh%2F%2BQvmzCYkh9h8v0fgUcUrxr5YIlDibnTMZ3l7hytDOOx2fMRjsuZJwpoUTUqoMYS2Yo1920&X-Amz-Signature=57b04caa87e291ae9db2a034a2fa7f935f4d0d41cbfcbb529ee33f6eca791100&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OKX5CEK%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIFwUQIAjuxJhXTiOzTnCW%2BrMsp0Pbm5t6Pk3zjezgazGAiBLYHjAenF%2BgQVaCMc36tZ%2B2CtL4bnbSp4vi3ZSrm6rhSqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD7z%2FNgMUZ0iumJLwKtwDqq%2BCMe1xhkfgFcqgPvWbGQVTT0715IDwjb%2FKEEkL8WKMSqpV4VcAk81kiMVBgdtiNNNTGLKJxUKhaI1k%2FV3vEp3DTY4Pm7H9YHpEeQFchetovnk2EB%2BgEB3ZaSV%2BfUNRfaUlTuLJxbuea%2FQZFBW5PoEeNrJvN63Qwf1gBm5s6VnpMC6kI74hnn9%2FoAhXpArqkKWe2UsM25lWMlM4V2HgKDjeuXtttki1n%2BSv9QLVKQw1bVpId%2F7dr1AE54Ir2Y1ZuSeLTg%2FIBFT%2FV07zTzbBwfu2RQ1rlByihukWr7SPHL%2Bk9ar3Qzw1MFe9qOmT%2FP%2BOYHUlppzja9299MnSdfhVYkaYBCP%2B3jFCJQP6jlYLF5zKyscq6Tw38vmp%2BdalQCbUd09TYQs4KYBlv5i0%2F3Xxlp%2F0cNx%2BliqCkJzzmkfazfOZwC8LvmKH9zXocwb9ttLKPpL5Nq00NDq2rZUNkoVAEqFjCHly7UV6l8jFeSIx3Iebd0HuvzbqRWXyNfVya7JrZGkU%2FAhcITcHVoImL5I0vikHEDHmWueSaDlD79quz8hRb6nFVVbbbpDuOuf0FUerIzhzIzO1%2FypVCbgzQ2Fp50Dpc6sNtxE%2Few2rqoskhU%2Fem3DY%2BxvpQ4BQ6Kgw8uC4vwY6pgHlJ5OKp%2B5g2HFXTp%2ByhDpLR2rbjYgmw8gmVF4A6dldTlQTd%2BOwu9iDfWc3FgidAPs92yoRcq%2FnoVTm%2FB5bu%2BV%2FjI%2BLLKGYpvhT04matFkNZVsRbBj2BsKyo4iYBc1R%2BRGQS2mM00CQbYUFnQSn8h3Mh%2F%2BQvmzCYkh9h8v0fgUcUrxr5YIlDibnTMZ3l7hytDOOx2fMRjsuZJwpoUTUqoMYS2Yo1920&X-Amz-Signature=f959e86c6d83a0c00e558bff945dfc162a59274988f1ad6b7fccd331d3cf5935&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OKX5CEK%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIFwUQIAjuxJhXTiOzTnCW%2BrMsp0Pbm5t6Pk3zjezgazGAiBLYHjAenF%2BgQVaCMc36tZ%2B2CtL4bnbSp4vi3ZSrm6rhSqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD7z%2FNgMUZ0iumJLwKtwDqq%2BCMe1xhkfgFcqgPvWbGQVTT0715IDwjb%2FKEEkL8WKMSqpV4VcAk81kiMVBgdtiNNNTGLKJxUKhaI1k%2FV3vEp3DTY4Pm7H9YHpEeQFchetovnk2EB%2BgEB3ZaSV%2BfUNRfaUlTuLJxbuea%2FQZFBW5PoEeNrJvN63Qwf1gBm5s6VnpMC6kI74hnn9%2FoAhXpArqkKWe2UsM25lWMlM4V2HgKDjeuXtttki1n%2BSv9QLVKQw1bVpId%2F7dr1AE54Ir2Y1ZuSeLTg%2FIBFT%2FV07zTzbBwfu2RQ1rlByihukWr7SPHL%2Bk9ar3Qzw1MFe9qOmT%2FP%2BOYHUlppzja9299MnSdfhVYkaYBCP%2B3jFCJQP6jlYLF5zKyscq6Tw38vmp%2BdalQCbUd09TYQs4KYBlv5i0%2F3Xxlp%2F0cNx%2BliqCkJzzmkfazfOZwC8LvmKH9zXocwb9ttLKPpL5Nq00NDq2rZUNkoVAEqFjCHly7UV6l8jFeSIx3Iebd0HuvzbqRWXyNfVya7JrZGkU%2FAhcITcHVoImL5I0vikHEDHmWueSaDlD79quz8hRb6nFVVbbbpDuOuf0FUerIzhzIzO1%2FypVCbgzQ2Fp50Dpc6sNtxE%2Few2rqoskhU%2Fem3DY%2BxvpQ4BQ6Kgw8uC4vwY6pgHlJ5OKp%2B5g2HFXTp%2ByhDpLR2rbjYgmw8gmVF4A6dldTlQTd%2BOwu9iDfWc3FgidAPs92yoRcq%2FnoVTm%2FB5bu%2BV%2FjI%2BLLKGYpvhT04matFkNZVsRbBj2BsKyo4iYBc1R%2BRGQS2mM00CQbYUFnQSn8h3Mh%2F%2BQvmzCYkh9h8v0fgUcUrxr5YIlDibnTMZ3l7hytDOOx2fMRjsuZJwpoUTUqoMYS2Yo1920&X-Amz-Signature=6f4bf3e0aa09c2f7be20dac526a0e7e5bec25d1b090913dcbe2eb6c4bede50f3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OKX5CEK%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIFwUQIAjuxJhXTiOzTnCW%2BrMsp0Pbm5t6Pk3zjezgazGAiBLYHjAenF%2BgQVaCMc36tZ%2B2CtL4bnbSp4vi3ZSrm6rhSqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD7z%2FNgMUZ0iumJLwKtwDqq%2BCMe1xhkfgFcqgPvWbGQVTT0715IDwjb%2FKEEkL8WKMSqpV4VcAk81kiMVBgdtiNNNTGLKJxUKhaI1k%2FV3vEp3DTY4Pm7H9YHpEeQFchetovnk2EB%2BgEB3ZaSV%2BfUNRfaUlTuLJxbuea%2FQZFBW5PoEeNrJvN63Qwf1gBm5s6VnpMC6kI74hnn9%2FoAhXpArqkKWe2UsM25lWMlM4V2HgKDjeuXtttki1n%2BSv9QLVKQw1bVpId%2F7dr1AE54Ir2Y1ZuSeLTg%2FIBFT%2FV07zTzbBwfu2RQ1rlByihukWr7SPHL%2Bk9ar3Qzw1MFe9qOmT%2FP%2BOYHUlppzja9299MnSdfhVYkaYBCP%2B3jFCJQP6jlYLF5zKyscq6Tw38vmp%2BdalQCbUd09TYQs4KYBlv5i0%2F3Xxlp%2F0cNx%2BliqCkJzzmkfazfOZwC8LvmKH9zXocwb9ttLKPpL5Nq00NDq2rZUNkoVAEqFjCHly7UV6l8jFeSIx3Iebd0HuvzbqRWXyNfVya7JrZGkU%2FAhcITcHVoImL5I0vikHEDHmWueSaDlD79quz8hRb6nFVVbbbpDuOuf0FUerIzhzIzO1%2FypVCbgzQ2Fp50Dpc6sNtxE%2Few2rqoskhU%2Fem3DY%2BxvpQ4BQ6Kgw8uC4vwY6pgHlJ5OKp%2B5g2HFXTp%2ByhDpLR2rbjYgmw8gmVF4A6dldTlQTd%2BOwu9iDfWc3FgidAPs92yoRcq%2FnoVTm%2FB5bu%2BV%2FjI%2BLLKGYpvhT04matFkNZVsRbBj2BsKyo4iYBc1R%2BRGQS2mM00CQbYUFnQSn8h3Mh%2F%2BQvmzCYkh9h8v0fgUcUrxr5YIlDibnTMZ3l7hytDOOx2fMRjsuZJwpoUTUqoMYS2Yo1920&X-Amz-Signature=4def758a3339f39c076acb270cd48e53d3e9cc4622f5565f8c2825659b1005c9&X-Amz-SignedHeaders=host&x-id=GetObject)
