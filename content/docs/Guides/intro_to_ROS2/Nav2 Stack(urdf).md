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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYZD7XHZ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCZn2zKmsIhZcZMult36iU6lKUr1upjVM6Z8A%2B9OA5jbQIgWTSj%2BTQDr3839HWyftYC%2BPBPNpqLRc2kWR442gSCiOIqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMM1oGAhXxpXIiUl2CrcA7C%2Ba6KTVwZFPyUuyJzH1u%2FQUOx3GSdUMWn3RIpsGDiruAigTsvtiSvTNLncQCOtxCHJcOyJ8ru3C52%2Bvf3L4V8mFcLata43VokRbtn1XTtwsE%2FQamLxx8ba11nshAJ%2F%2FY72izCCxsPUJa5xw5kDsnPMB2nJuE21JUjtCQohHjmbYj25V6T8qXH5ltj%2FvZmbL6AFGIspVECdOGjn8djcfdo2j3oRzngE%2F8hJ1fWibvYH%2FLzntRykaAzibgcteCx772HsbAOmHL02b%2FDbnNfj3%2BoUk%2BMEJD7rj8BiH6VBPuJac1zeswpUqxguEOI3vPjD057ZisGdxCxA5JuItdoJxiuIrYnZWQ8G5YXJbHXY9rdBov0b4umS1obvJvqvzraJZ8sDB8SO5aSDRWSOWkqHUey7dy%2BpKJbN6ynn0%2BxDkCnj8qj75y9zRiCVB5IH6lYU3J60uJPtHw%2FHOKfOgqKw7UTQts4mHj9b9btHHw3hgxkJVeGGX1lmSpSyG2JobO71sNrqMkWeGFqvgTOCgk%2BxEUpvZ2TMe2DSKq%2Fj7CIlhlpm519w4YRnDf8LsHe923IRYEVccy4IP3FvFdSo2Ee03WGxrfVG9GYrzMJkIWSQczdiQ9n0UMW9p3g6g9f1MOf76b8GOqUBmmwxcecaK%2B6wGD5%2ByKfMwPcLdet07dKBQN3E6jdcSMxCm8hjdK0BcwS45Ui9xt37LYMjWvwJAGkpQTI2tL5AYJ9sgsZu%2BSxg1OU8yFyIWVDg588gWzDvXsiG5KTfiM%2BpAueHfhiRDElIRgNuT4oBlB%2FjD%2BzNauNTs4YG4y2ahM5VeI12U%2FbwKrvgjsZ2k9L19Q9L3608F6vi4pBvY57UHVa9qOE0&X-Amz-Signature=5dbd0a74706a155117c75fffa60c52d0b853234b0587e4a510f1430f753a006b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYZD7XHZ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCZn2zKmsIhZcZMult36iU6lKUr1upjVM6Z8A%2B9OA5jbQIgWTSj%2BTQDr3839HWyftYC%2BPBPNpqLRc2kWR442gSCiOIqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMM1oGAhXxpXIiUl2CrcA7C%2Ba6KTVwZFPyUuyJzH1u%2FQUOx3GSdUMWn3RIpsGDiruAigTsvtiSvTNLncQCOtxCHJcOyJ8ru3C52%2Bvf3L4V8mFcLata43VokRbtn1XTtwsE%2FQamLxx8ba11nshAJ%2F%2FY72izCCxsPUJa5xw5kDsnPMB2nJuE21JUjtCQohHjmbYj25V6T8qXH5ltj%2FvZmbL6AFGIspVECdOGjn8djcfdo2j3oRzngE%2F8hJ1fWibvYH%2FLzntRykaAzibgcteCx772HsbAOmHL02b%2FDbnNfj3%2BoUk%2BMEJD7rj8BiH6VBPuJac1zeswpUqxguEOI3vPjD057ZisGdxCxA5JuItdoJxiuIrYnZWQ8G5YXJbHXY9rdBov0b4umS1obvJvqvzraJZ8sDB8SO5aSDRWSOWkqHUey7dy%2BpKJbN6ynn0%2BxDkCnj8qj75y9zRiCVB5IH6lYU3J60uJPtHw%2FHOKfOgqKw7UTQts4mHj9b9btHHw3hgxkJVeGGX1lmSpSyG2JobO71sNrqMkWeGFqvgTOCgk%2BxEUpvZ2TMe2DSKq%2Fj7CIlhlpm519w4YRnDf8LsHe923IRYEVccy4IP3FvFdSo2Ee03WGxrfVG9GYrzMJkIWSQczdiQ9n0UMW9p3g6g9f1MOf76b8GOqUBmmwxcecaK%2B6wGD5%2ByKfMwPcLdet07dKBQN3E6jdcSMxCm8hjdK0BcwS45Ui9xt37LYMjWvwJAGkpQTI2tL5AYJ9sgsZu%2BSxg1OU8yFyIWVDg588gWzDvXsiG5KTfiM%2BpAueHfhiRDElIRgNuT4oBlB%2FjD%2BzNauNTs4YG4y2ahM5VeI12U%2FbwKrvgjsZ2k9L19Q9L3608F6vi4pBvY57UHVa9qOE0&X-Amz-Signature=809d8f9c45c1d53d34918e6077bd49b9a0a1da62a10d8a59bd1ffc5731473894&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYZD7XHZ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCZn2zKmsIhZcZMult36iU6lKUr1upjVM6Z8A%2B9OA5jbQIgWTSj%2BTQDr3839HWyftYC%2BPBPNpqLRc2kWR442gSCiOIqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMM1oGAhXxpXIiUl2CrcA7C%2Ba6KTVwZFPyUuyJzH1u%2FQUOx3GSdUMWn3RIpsGDiruAigTsvtiSvTNLncQCOtxCHJcOyJ8ru3C52%2Bvf3L4V8mFcLata43VokRbtn1XTtwsE%2FQamLxx8ba11nshAJ%2F%2FY72izCCxsPUJa5xw5kDsnPMB2nJuE21JUjtCQohHjmbYj25V6T8qXH5ltj%2FvZmbL6AFGIspVECdOGjn8djcfdo2j3oRzngE%2F8hJ1fWibvYH%2FLzntRykaAzibgcteCx772HsbAOmHL02b%2FDbnNfj3%2BoUk%2BMEJD7rj8BiH6VBPuJac1zeswpUqxguEOI3vPjD057ZisGdxCxA5JuItdoJxiuIrYnZWQ8G5YXJbHXY9rdBov0b4umS1obvJvqvzraJZ8sDB8SO5aSDRWSOWkqHUey7dy%2BpKJbN6ynn0%2BxDkCnj8qj75y9zRiCVB5IH6lYU3J60uJPtHw%2FHOKfOgqKw7UTQts4mHj9b9btHHw3hgxkJVeGGX1lmSpSyG2JobO71sNrqMkWeGFqvgTOCgk%2BxEUpvZ2TMe2DSKq%2Fj7CIlhlpm519w4YRnDf8LsHe923IRYEVccy4IP3FvFdSo2Ee03WGxrfVG9GYrzMJkIWSQczdiQ9n0UMW9p3g6g9f1MOf76b8GOqUBmmwxcecaK%2B6wGD5%2ByKfMwPcLdet07dKBQN3E6jdcSMxCm8hjdK0BcwS45Ui9xt37LYMjWvwJAGkpQTI2tL5AYJ9sgsZu%2BSxg1OU8yFyIWVDg588gWzDvXsiG5KTfiM%2BpAueHfhiRDElIRgNuT4oBlB%2FjD%2BzNauNTs4YG4y2ahM5VeI12U%2FbwKrvgjsZ2k9L19Q9L3608F6vi4pBvY57UHVa9qOE0&X-Amz-Signature=cd04b1142da9bb1e25eba23b8bf29923139b11c38535976bc579ce69e41c73e3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYZD7XHZ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCZn2zKmsIhZcZMult36iU6lKUr1upjVM6Z8A%2B9OA5jbQIgWTSj%2BTQDr3839HWyftYC%2BPBPNpqLRc2kWR442gSCiOIqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMM1oGAhXxpXIiUl2CrcA7C%2Ba6KTVwZFPyUuyJzH1u%2FQUOx3GSdUMWn3RIpsGDiruAigTsvtiSvTNLncQCOtxCHJcOyJ8ru3C52%2Bvf3L4V8mFcLata43VokRbtn1XTtwsE%2FQamLxx8ba11nshAJ%2F%2FY72izCCxsPUJa5xw5kDsnPMB2nJuE21JUjtCQohHjmbYj25V6T8qXH5ltj%2FvZmbL6AFGIspVECdOGjn8djcfdo2j3oRzngE%2F8hJ1fWibvYH%2FLzntRykaAzibgcteCx772HsbAOmHL02b%2FDbnNfj3%2BoUk%2BMEJD7rj8BiH6VBPuJac1zeswpUqxguEOI3vPjD057ZisGdxCxA5JuItdoJxiuIrYnZWQ8G5YXJbHXY9rdBov0b4umS1obvJvqvzraJZ8sDB8SO5aSDRWSOWkqHUey7dy%2BpKJbN6ynn0%2BxDkCnj8qj75y9zRiCVB5IH6lYU3J60uJPtHw%2FHOKfOgqKw7UTQts4mHj9b9btHHw3hgxkJVeGGX1lmSpSyG2JobO71sNrqMkWeGFqvgTOCgk%2BxEUpvZ2TMe2DSKq%2Fj7CIlhlpm519w4YRnDf8LsHe923IRYEVccy4IP3FvFdSo2Ee03WGxrfVG9GYrzMJkIWSQczdiQ9n0UMW9p3g6g9f1MOf76b8GOqUBmmwxcecaK%2B6wGD5%2ByKfMwPcLdet07dKBQN3E6jdcSMxCm8hjdK0BcwS45Ui9xt37LYMjWvwJAGkpQTI2tL5AYJ9sgsZu%2BSxg1OU8yFyIWVDg588gWzDvXsiG5KTfiM%2BpAueHfhiRDElIRgNuT4oBlB%2FjD%2BzNauNTs4YG4y2ahM5VeI12U%2FbwKrvgjsZ2k9L19Q9L3608F6vi4pBvY57UHVa9qOE0&X-Amz-Signature=592340238e9a6c793f7f3ed094a6c88eb425c0c758c0b3a3ff99064d31ad3643&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYZD7XHZ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCZn2zKmsIhZcZMult36iU6lKUr1upjVM6Z8A%2B9OA5jbQIgWTSj%2BTQDr3839HWyftYC%2BPBPNpqLRc2kWR442gSCiOIqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMM1oGAhXxpXIiUl2CrcA7C%2Ba6KTVwZFPyUuyJzH1u%2FQUOx3GSdUMWn3RIpsGDiruAigTsvtiSvTNLncQCOtxCHJcOyJ8ru3C52%2Bvf3L4V8mFcLata43VokRbtn1XTtwsE%2FQamLxx8ba11nshAJ%2F%2FY72izCCxsPUJa5xw5kDsnPMB2nJuE21JUjtCQohHjmbYj25V6T8qXH5ltj%2FvZmbL6AFGIspVECdOGjn8djcfdo2j3oRzngE%2F8hJ1fWibvYH%2FLzntRykaAzibgcteCx772HsbAOmHL02b%2FDbnNfj3%2BoUk%2BMEJD7rj8BiH6VBPuJac1zeswpUqxguEOI3vPjD057ZisGdxCxA5JuItdoJxiuIrYnZWQ8G5YXJbHXY9rdBov0b4umS1obvJvqvzraJZ8sDB8SO5aSDRWSOWkqHUey7dy%2BpKJbN6ynn0%2BxDkCnj8qj75y9zRiCVB5IH6lYU3J60uJPtHw%2FHOKfOgqKw7UTQts4mHj9b9btHHw3hgxkJVeGGX1lmSpSyG2JobO71sNrqMkWeGFqvgTOCgk%2BxEUpvZ2TMe2DSKq%2Fj7CIlhlpm519w4YRnDf8LsHe923IRYEVccy4IP3FvFdSo2Ee03WGxrfVG9GYrzMJkIWSQczdiQ9n0UMW9p3g6g9f1MOf76b8GOqUBmmwxcecaK%2B6wGD5%2ByKfMwPcLdet07dKBQN3E6jdcSMxCm8hjdK0BcwS45Ui9xt37LYMjWvwJAGkpQTI2tL5AYJ9sgsZu%2BSxg1OU8yFyIWVDg588gWzDvXsiG5KTfiM%2BpAueHfhiRDElIRgNuT4oBlB%2FjD%2BzNauNTs4YG4y2ahM5VeI12U%2FbwKrvgjsZ2k9L19Q9L3608F6vi4pBvY57UHVa9qOE0&X-Amz-Signature=56c0ee159349747e3b8f4d2a78c15c12e8d79b98fdaf4f7045fdc5c83db8c50e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYZD7XHZ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCZn2zKmsIhZcZMult36iU6lKUr1upjVM6Z8A%2B9OA5jbQIgWTSj%2BTQDr3839HWyftYC%2BPBPNpqLRc2kWR442gSCiOIqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMM1oGAhXxpXIiUl2CrcA7C%2Ba6KTVwZFPyUuyJzH1u%2FQUOx3GSdUMWn3RIpsGDiruAigTsvtiSvTNLncQCOtxCHJcOyJ8ru3C52%2Bvf3L4V8mFcLata43VokRbtn1XTtwsE%2FQamLxx8ba11nshAJ%2F%2FY72izCCxsPUJa5xw5kDsnPMB2nJuE21JUjtCQohHjmbYj25V6T8qXH5ltj%2FvZmbL6AFGIspVECdOGjn8djcfdo2j3oRzngE%2F8hJ1fWibvYH%2FLzntRykaAzibgcteCx772HsbAOmHL02b%2FDbnNfj3%2BoUk%2BMEJD7rj8BiH6VBPuJac1zeswpUqxguEOI3vPjD057ZisGdxCxA5JuItdoJxiuIrYnZWQ8G5YXJbHXY9rdBov0b4umS1obvJvqvzraJZ8sDB8SO5aSDRWSOWkqHUey7dy%2BpKJbN6ynn0%2BxDkCnj8qj75y9zRiCVB5IH6lYU3J60uJPtHw%2FHOKfOgqKw7UTQts4mHj9b9btHHw3hgxkJVeGGX1lmSpSyG2JobO71sNrqMkWeGFqvgTOCgk%2BxEUpvZ2TMe2DSKq%2Fj7CIlhlpm519w4YRnDf8LsHe923IRYEVccy4IP3FvFdSo2Ee03WGxrfVG9GYrzMJkIWSQczdiQ9n0UMW9p3g6g9f1MOf76b8GOqUBmmwxcecaK%2B6wGD5%2ByKfMwPcLdet07dKBQN3E6jdcSMxCm8hjdK0BcwS45Ui9xt37LYMjWvwJAGkpQTI2tL5AYJ9sgsZu%2BSxg1OU8yFyIWVDg588gWzDvXsiG5KTfiM%2BpAueHfhiRDElIRgNuT4oBlB%2FjD%2BzNauNTs4YG4y2ahM5VeI12U%2FbwKrvgjsZ2k9L19Q9L3608F6vi4pBvY57UHVa9qOE0&X-Amz-Signature=460b4fdbc3c0606b6453b2585c7888180b21daa0b4cfc11fc61660302d7d1d0a&X-Amz-SignedHeaders=host&x-id=GetObject)
