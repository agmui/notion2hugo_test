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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWXWU7JK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDzV7e3%2B7ihei5WnrFJGXlm4CNjOFVkp%2BpS7CLlkhrSRAIhAOne22LwhynGXBZWN29HH5pckiz3YrRp%2FSkozP0ewQSgKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz800cjfEmLSABGohAq3AOd%2BowPHxwxxU4DSpL9wJ1LkY3D5sFEKuEk4ndzUCMdEfGx9VvOIxSf2EqCdW8IutcQIMQ3e5%2Brt39sP0yhGIN9FmnJvS5Dq02IZshNgTBc2Kl9G7ZaeqMfx1NFlLVZt4GF1g%2Bhu5L4e6N1DOUC21YD5fITOy8HSd1D8FfvmZWa31DMp%2BfxtxMlib20BZKUa0bbHdoZS6Zt7PnqvozGnHJaZLui6HP4HQCoqHQm5zy0eQY9yX81d2DrukVkG2rvgdWB2JN%2BClMgLwiK0Cys3wCyeNoDSKzgzeWhXeJ4Onhlh2bo5AX3wS5VDxProvc%2F4uUEiE89rT%2FuRseH2OhXBmpd%2FjzqrOO2NGq9f6BSmy%2FT9FHZjJaL%2BUHjOY8xlVn2YZVJp4IzpG4KEAf%2BV37m2KSCjkIp9waYevseM%2F48MNPxFO12G6LPW382XL%2BydR%2FAYBU4cI67dE804VxUvmCOJnoXzwzNGVF5gRWaD8KNN%2BuaJ1vqgP%2B%2BxvYQQfUpzrrG7EvBjgT2kTqIDHniSlPt9EPd0pLmH8KVr6fCCOHKYNUZ%2BxgoI0N5EmvWXAd9A%2B%2FDoYHin4Qv7uFCdLh%2BGLJAInxfTO0YW9XGiGvKH1ZKkrmOELn0s%2BXmSKtmLEORkzDNl9m%2FBjqkAQCoyHuqPFkHxKEZVizX9OCiSEVVEtTekXzd%2BvGYO0Y4ZxC4G2%2BSU51kSlgph48SkSpxY0OMoyIGgh6fnP%2B%2BEx%2B3qFkKUqFpB0hBdI2slvWvRaEzRzzN2Ejo92Rk%2BMkBcrCkkR0ygUh%2BBlP2KF2PXxQPRVuM8nPOMAllDHlK6NOFaaOpgh1sdKiab%2BC3Ja5b2h5XyF%2FVDSrJP3txJ0PdUO3tWvmr&X-Amz-Signature=96f8363f6ff224b023533e0369cec1cfd38ce991ca48eab396df9fd55f56596b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWXWU7JK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDzV7e3%2B7ihei5WnrFJGXlm4CNjOFVkp%2BpS7CLlkhrSRAIhAOne22LwhynGXBZWN29HH5pckiz3YrRp%2FSkozP0ewQSgKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz800cjfEmLSABGohAq3AOd%2BowPHxwxxU4DSpL9wJ1LkY3D5sFEKuEk4ndzUCMdEfGx9VvOIxSf2EqCdW8IutcQIMQ3e5%2Brt39sP0yhGIN9FmnJvS5Dq02IZshNgTBc2Kl9G7ZaeqMfx1NFlLVZt4GF1g%2Bhu5L4e6N1DOUC21YD5fITOy8HSd1D8FfvmZWa31DMp%2BfxtxMlib20BZKUa0bbHdoZS6Zt7PnqvozGnHJaZLui6HP4HQCoqHQm5zy0eQY9yX81d2DrukVkG2rvgdWB2JN%2BClMgLwiK0Cys3wCyeNoDSKzgzeWhXeJ4Onhlh2bo5AX3wS5VDxProvc%2F4uUEiE89rT%2FuRseH2OhXBmpd%2FjzqrOO2NGq9f6BSmy%2FT9FHZjJaL%2BUHjOY8xlVn2YZVJp4IzpG4KEAf%2BV37m2KSCjkIp9waYevseM%2F48MNPxFO12G6LPW382XL%2BydR%2FAYBU4cI67dE804VxUvmCOJnoXzwzNGVF5gRWaD8KNN%2BuaJ1vqgP%2B%2BxvYQQfUpzrrG7EvBjgT2kTqIDHniSlPt9EPd0pLmH8KVr6fCCOHKYNUZ%2BxgoI0N5EmvWXAd9A%2B%2FDoYHin4Qv7uFCdLh%2BGLJAInxfTO0YW9XGiGvKH1ZKkrmOELn0s%2BXmSKtmLEORkzDNl9m%2FBjqkAQCoyHuqPFkHxKEZVizX9OCiSEVVEtTekXzd%2BvGYO0Y4ZxC4G2%2BSU51kSlgph48SkSpxY0OMoyIGgh6fnP%2B%2BEx%2B3qFkKUqFpB0hBdI2slvWvRaEzRzzN2Ejo92Rk%2BMkBcrCkkR0ygUh%2BBlP2KF2PXxQPRVuM8nPOMAllDHlK6NOFaaOpgh1sdKiab%2BC3Ja5b2h5XyF%2FVDSrJP3txJ0PdUO3tWvmr&X-Amz-Signature=cbe3d9ae2a408d30146d0d3156a2c474e8312b9b498db214cbc17e8560d89b48&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWXWU7JK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDzV7e3%2B7ihei5WnrFJGXlm4CNjOFVkp%2BpS7CLlkhrSRAIhAOne22LwhynGXBZWN29HH5pckiz3YrRp%2FSkozP0ewQSgKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz800cjfEmLSABGohAq3AOd%2BowPHxwxxU4DSpL9wJ1LkY3D5sFEKuEk4ndzUCMdEfGx9VvOIxSf2EqCdW8IutcQIMQ3e5%2Brt39sP0yhGIN9FmnJvS5Dq02IZshNgTBc2Kl9G7ZaeqMfx1NFlLVZt4GF1g%2Bhu5L4e6N1DOUC21YD5fITOy8HSd1D8FfvmZWa31DMp%2BfxtxMlib20BZKUa0bbHdoZS6Zt7PnqvozGnHJaZLui6HP4HQCoqHQm5zy0eQY9yX81d2DrukVkG2rvgdWB2JN%2BClMgLwiK0Cys3wCyeNoDSKzgzeWhXeJ4Onhlh2bo5AX3wS5VDxProvc%2F4uUEiE89rT%2FuRseH2OhXBmpd%2FjzqrOO2NGq9f6BSmy%2FT9FHZjJaL%2BUHjOY8xlVn2YZVJp4IzpG4KEAf%2BV37m2KSCjkIp9waYevseM%2F48MNPxFO12G6LPW382XL%2BydR%2FAYBU4cI67dE804VxUvmCOJnoXzwzNGVF5gRWaD8KNN%2BuaJ1vqgP%2B%2BxvYQQfUpzrrG7EvBjgT2kTqIDHniSlPt9EPd0pLmH8KVr6fCCOHKYNUZ%2BxgoI0N5EmvWXAd9A%2B%2FDoYHin4Qv7uFCdLh%2BGLJAInxfTO0YW9XGiGvKH1ZKkrmOELn0s%2BXmSKtmLEORkzDNl9m%2FBjqkAQCoyHuqPFkHxKEZVizX9OCiSEVVEtTekXzd%2BvGYO0Y4ZxC4G2%2BSU51kSlgph48SkSpxY0OMoyIGgh6fnP%2B%2BEx%2B3qFkKUqFpB0hBdI2slvWvRaEzRzzN2Ejo92Rk%2BMkBcrCkkR0ygUh%2BBlP2KF2PXxQPRVuM8nPOMAllDHlK6NOFaaOpgh1sdKiab%2BC3Ja5b2h5XyF%2FVDSrJP3txJ0PdUO3tWvmr&X-Amz-Signature=da3fa9d2860199b1d876df4964c9b732f79efa30ec5bd4445068a681726411ec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWXWU7JK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDzV7e3%2B7ihei5WnrFJGXlm4CNjOFVkp%2BpS7CLlkhrSRAIhAOne22LwhynGXBZWN29HH5pckiz3YrRp%2FSkozP0ewQSgKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz800cjfEmLSABGohAq3AOd%2BowPHxwxxU4DSpL9wJ1LkY3D5sFEKuEk4ndzUCMdEfGx9VvOIxSf2EqCdW8IutcQIMQ3e5%2Brt39sP0yhGIN9FmnJvS5Dq02IZshNgTBc2Kl9G7ZaeqMfx1NFlLVZt4GF1g%2Bhu5L4e6N1DOUC21YD5fITOy8HSd1D8FfvmZWa31DMp%2BfxtxMlib20BZKUa0bbHdoZS6Zt7PnqvozGnHJaZLui6HP4HQCoqHQm5zy0eQY9yX81d2DrukVkG2rvgdWB2JN%2BClMgLwiK0Cys3wCyeNoDSKzgzeWhXeJ4Onhlh2bo5AX3wS5VDxProvc%2F4uUEiE89rT%2FuRseH2OhXBmpd%2FjzqrOO2NGq9f6BSmy%2FT9FHZjJaL%2BUHjOY8xlVn2YZVJp4IzpG4KEAf%2BV37m2KSCjkIp9waYevseM%2F48MNPxFO12G6LPW382XL%2BydR%2FAYBU4cI67dE804VxUvmCOJnoXzwzNGVF5gRWaD8KNN%2BuaJ1vqgP%2B%2BxvYQQfUpzrrG7EvBjgT2kTqIDHniSlPt9EPd0pLmH8KVr6fCCOHKYNUZ%2BxgoI0N5EmvWXAd9A%2B%2FDoYHin4Qv7uFCdLh%2BGLJAInxfTO0YW9XGiGvKH1ZKkrmOELn0s%2BXmSKtmLEORkzDNl9m%2FBjqkAQCoyHuqPFkHxKEZVizX9OCiSEVVEtTekXzd%2BvGYO0Y4ZxC4G2%2BSU51kSlgph48SkSpxY0OMoyIGgh6fnP%2B%2BEx%2B3qFkKUqFpB0hBdI2slvWvRaEzRzzN2Ejo92Rk%2BMkBcrCkkR0ygUh%2BBlP2KF2PXxQPRVuM8nPOMAllDHlK6NOFaaOpgh1sdKiab%2BC3Ja5b2h5XyF%2FVDSrJP3txJ0PdUO3tWvmr&X-Amz-Signature=a50d29be0d791cd199c7d047fc3c856f713d9b972faaded4492b48efa4ec186d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWXWU7JK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDzV7e3%2B7ihei5WnrFJGXlm4CNjOFVkp%2BpS7CLlkhrSRAIhAOne22LwhynGXBZWN29HH5pckiz3YrRp%2FSkozP0ewQSgKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz800cjfEmLSABGohAq3AOd%2BowPHxwxxU4DSpL9wJ1LkY3D5sFEKuEk4ndzUCMdEfGx9VvOIxSf2EqCdW8IutcQIMQ3e5%2Brt39sP0yhGIN9FmnJvS5Dq02IZshNgTBc2Kl9G7ZaeqMfx1NFlLVZt4GF1g%2Bhu5L4e6N1DOUC21YD5fITOy8HSd1D8FfvmZWa31DMp%2BfxtxMlib20BZKUa0bbHdoZS6Zt7PnqvozGnHJaZLui6HP4HQCoqHQm5zy0eQY9yX81d2DrukVkG2rvgdWB2JN%2BClMgLwiK0Cys3wCyeNoDSKzgzeWhXeJ4Onhlh2bo5AX3wS5VDxProvc%2F4uUEiE89rT%2FuRseH2OhXBmpd%2FjzqrOO2NGq9f6BSmy%2FT9FHZjJaL%2BUHjOY8xlVn2YZVJp4IzpG4KEAf%2BV37m2KSCjkIp9waYevseM%2F48MNPxFO12G6LPW382XL%2BydR%2FAYBU4cI67dE804VxUvmCOJnoXzwzNGVF5gRWaD8KNN%2BuaJ1vqgP%2B%2BxvYQQfUpzrrG7EvBjgT2kTqIDHniSlPt9EPd0pLmH8KVr6fCCOHKYNUZ%2BxgoI0N5EmvWXAd9A%2B%2FDoYHin4Qv7uFCdLh%2BGLJAInxfTO0YW9XGiGvKH1ZKkrmOELn0s%2BXmSKtmLEORkzDNl9m%2FBjqkAQCoyHuqPFkHxKEZVizX9OCiSEVVEtTekXzd%2BvGYO0Y4ZxC4G2%2BSU51kSlgph48SkSpxY0OMoyIGgh6fnP%2B%2BEx%2B3qFkKUqFpB0hBdI2slvWvRaEzRzzN2Ejo92Rk%2BMkBcrCkkR0ygUh%2BBlP2KF2PXxQPRVuM8nPOMAllDHlK6NOFaaOpgh1sdKiab%2BC3Ja5b2h5XyF%2FVDSrJP3txJ0PdUO3tWvmr&X-Amz-Signature=775f709ebc8419d1ce0eed6cd58914f5737f82ea96922881dc5bd99637b09207&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWXWU7JK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDzV7e3%2B7ihei5WnrFJGXlm4CNjOFVkp%2BpS7CLlkhrSRAIhAOne22LwhynGXBZWN29HH5pckiz3YrRp%2FSkozP0ewQSgKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz800cjfEmLSABGohAq3AOd%2BowPHxwxxU4DSpL9wJ1LkY3D5sFEKuEk4ndzUCMdEfGx9VvOIxSf2EqCdW8IutcQIMQ3e5%2Brt39sP0yhGIN9FmnJvS5Dq02IZshNgTBc2Kl9G7ZaeqMfx1NFlLVZt4GF1g%2Bhu5L4e6N1DOUC21YD5fITOy8HSd1D8FfvmZWa31DMp%2BfxtxMlib20BZKUa0bbHdoZS6Zt7PnqvozGnHJaZLui6HP4HQCoqHQm5zy0eQY9yX81d2DrukVkG2rvgdWB2JN%2BClMgLwiK0Cys3wCyeNoDSKzgzeWhXeJ4Onhlh2bo5AX3wS5VDxProvc%2F4uUEiE89rT%2FuRseH2OhXBmpd%2FjzqrOO2NGq9f6BSmy%2FT9FHZjJaL%2BUHjOY8xlVn2YZVJp4IzpG4KEAf%2BV37m2KSCjkIp9waYevseM%2F48MNPxFO12G6LPW382XL%2BydR%2FAYBU4cI67dE804VxUvmCOJnoXzwzNGVF5gRWaD8KNN%2BuaJ1vqgP%2B%2BxvYQQfUpzrrG7EvBjgT2kTqIDHniSlPt9EPd0pLmH8KVr6fCCOHKYNUZ%2BxgoI0N5EmvWXAd9A%2B%2FDoYHin4Qv7uFCdLh%2BGLJAInxfTO0YW9XGiGvKH1ZKkrmOELn0s%2BXmSKtmLEORkzDNl9m%2FBjqkAQCoyHuqPFkHxKEZVizX9OCiSEVVEtTekXzd%2BvGYO0Y4ZxC4G2%2BSU51kSlgph48SkSpxY0OMoyIGgh6fnP%2B%2BEx%2B3qFkKUqFpB0hBdI2slvWvRaEzRzzN2Ejo92Rk%2BMkBcrCkkR0ygUh%2BBlP2KF2PXxQPRVuM8nPOMAllDHlK6NOFaaOpgh1sdKiab%2BC3Ja5b2h5XyF%2FVDSrJP3txJ0PdUO3tWvmr&X-Amz-Signature=25ca7f8c7179a1791119ed729717f9b5d3ecf677f7404fe6148a992191c6c126&X-Amz-SignedHeaders=host&x-id=GetObject)
