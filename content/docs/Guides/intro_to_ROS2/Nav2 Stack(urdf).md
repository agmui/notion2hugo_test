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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5TBJPYC%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDccjahDrO2zHnWxujz8E%2Ft%2F2KR2GxP4auDfnXRHxd4QwIhANj0o8c%2Fhd2%2F358fEdmhqdgeZmKL2EqhujroMey1fF%2B4KogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxJO3tPL13c30BRIMq3AN3ZLOzSW0EBI8J1DD4AhgEXnw1hyF%2BAHBdf199CY6GJdvujdPUSY3qZN8w3q1cY%2BhvgSYr7%2FQCgqMQ7JVyJxoYrAjhTi18HN0SAmy4BQ9ehp221KaM9nPXlR9rXJA%2B2RURlUdsbBmcvGyJOOybsRNzBPW0PQMBqrzfQ1WG87LUorBY2aBJ%2BCZZy0tzBHuKNnSVsCnUdirKa9otDITb7NmAPnCDDXkUt97mJDojRI%2Fy3V%2F%2F%2FYkrruEOpmNoVCDr8pVfngtOmOXmM6UCp%2BjFlafUD1n6UP1xfWerkNcfeTZQZsWlCdLCCcnX6gD6xgokMUPxqgC7iMadNR5TVXkp7yx3tq70mxkJaEXBM0WxqslurMu6KFN15OfepH3n6OyWVgaxW0FYfMSMpNmdrqcFhQ1e9QrrwxxZ0GpLnGAFc0md8K3XFMzcUQucq767M6pvdzJsw8n2fnitUr1K24K1tV8QVBV1Tq%2BO5oDnoqjAem7CqYqqRizfDXzw54FQYXUmNnlvIvTh6l8%2F%2FOmAd1lR0zQYzCMdGSDsG5X5twuisLrjRbrXlwz6GKZrMedk6hPoCT8YOxnToC5Cg0Sb43jXjpBTEmP%2FWXswI6sS69Ehb%2BvYDiq7l3creHVcl3m%2FhzCYyr7BBjqkARS2915kDiCG4XqEfUKpZDNWLou56SsQa5BuNGrezspIw7Y4ftt5xLPqE5tpScvAoCsNCZzjcyv2PKDbsqlqRnYiOXVTPMjExZtAujT5QDIACKfJwP7hStKfh3h2A2Wl0N6oAftc5fRia5GtjIPfUtXJUHslSx%2Bu7xP6%2FlEclZSy6go%2FLFPFe%2FjLk0q2c5dw2tFasV0MVxcgvqXOtowJ3Urbawe8&X-Amz-Signature=9e3165029b013c67e4ec1f5f77c8ad3a6c67c05c3e1a4978c17d1c962588159e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5TBJPYC%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDccjahDrO2zHnWxujz8E%2Ft%2F2KR2GxP4auDfnXRHxd4QwIhANj0o8c%2Fhd2%2F358fEdmhqdgeZmKL2EqhujroMey1fF%2B4KogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxJO3tPL13c30BRIMq3AN3ZLOzSW0EBI8J1DD4AhgEXnw1hyF%2BAHBdf199CY6GJdvujdPUSY3qZN8w3q1cY%2BhvgSYr7%2FQCgqMQ7JVyJxoYrAjhTi18HN0SAmy4BQ9ehp221KaM9nPXlR9rXJA%2B2RURlUdsbBmcvGyJOOybsRNzBPW0PQMBqrzfQ1WG87LUorBY2aBJ%2BCZZy0tzBHuKNnSVsCnUdirKa9otDITb7NmAPnCDDXkUt97mJDojRI%2Fy3V%2F%2F%2FYkrruEOpmNoVCDr8pVfngtOmOXmM6UCp%2BjFlafUD1n6UP1xfWerkNcfeTZQZsWlCdLCCcnX6gD6xgokMUPxqgC7iMadNR5TVXkp7yx3tq70mxkJaEXBM0WxqslurMu6KFN15OfepH3n6OyWVgaxW0FYfMSMpNmdrqcFhQ1e9QrrwxxZ0GpLnGAFc0md8K3XFMzcUQucq767M6pvdzJsw8n2fnitUr1K24K1tV8QVBV1Tq%2BO5oDnoqjAem7CqYqqRizfDXzw54FQYXUmNnlvIvTh6l8%2F%2FOmAd1lR0zQYzCMdGSDsG5X5twuisLrjRbrXlwz6GKZrMedk6hPoCT8YOxnToC5Cg0Sb43jXjpBTEmP%2FWXswI6sS69Ehb%2BvYDiq7l3creHVcl3m%2FhzCYyr7BBjqkARS2915kDiCG4XqEfUKpZDNWLou56SsQa5BuNGrezspIw7Y4ftt5xLPqE5tpScvAoCsNCZzjcyv2PKDbsqlqRnYiOXVTPMjExZtAujT5QDIACKfJwP7hStKfh3h2A2Wl0N6oAftc5fRia5GtjIPfUtXJUHslSx%2Bu7xP6%2FlEclZSy6go%2FLFPFe%2FjLk0q2c5dw2tFasV0MVxcgvqXOtowJ3Urbawe8&X-Amz-Signature=59d8390a9688d7473e0f42e4f657c42b083bbb81e0d31ec22c5fd36572fc6d71&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5TBJPYC%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDccjahDrO2zHnWxujz8E%2Ft%2F2KR2GxP4auDfnXRHxd4QwIhANj0o8c%2Fhd2%2F358fEdmhqdgeZmKL2EqhujroMey1fF%2B4KogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxJO3tPL13c30BRIMq3AN3ZLOzSW0EBI8J1DD4AhgEXnw1hyF%2BAHBdf199CY6GJdvujdPUSY3qZN8w3q1cY%2BhvgSYr7%2FQCgqMQ7JVyJxoYrAjhTi18HN0SAmy4BQ9ehp221KaM9nPXlR9rXJA%2B2RURlUdsbBmcvGyJOOybsRNzBPW0PQMBqrzfQ1WG87LUorBY2aBJ%2BCZZy0tzBHuKNnSVsCnUdirKa9otDITb7NmAPnCDDXkUt97mJDojRI%2Fy3V%2F%2F%2FYkrruEOpmNoVCDr8pVfngtOmOXmM6UCp%2BjFlafUD1n6UP1xfWerkNcfeTZQZsWlCdLCCcnX6gD6xgokMUPxqgC7iMadNR5TVXkp7yx3tq70mxkJaEXBM0WxqslurMu6KFN15OfepH3n6OyWVgaxW0FYfMSMpNmdrqcFhQ1e9QrrwxxZ0GpLnGAFc0md8K3XFMzcUQucq767M6pvdzJsw8n2fnitUr1K24K1tV8QVBV1Tq%2BO5oDnoqjAem7CqYqqRizfDXzw54FQYXUmNnlvIvTh6l8%2F%2FOmAd1lR0zQYzCMdGSDsG5X5twuisLrjRbrXlwz6GKZrMedk6hPoCT8YOxnToC5Cg0Sb43jXjpBTEmP%2FWXswI6sS69Ehb%2BvYDiq7l3creHVcl3m%2FhzCYyr7BBjqkARS2915kDiCG4XqEfUKpZDNWLou56SsQa5BuNGrezspIw7Y4ftt5xLPqE5tpScvAoCsNCZzjcyv2PKDbsqlqRnYiOXVTPMjExZtAujT5QDIACKfJwP7hStKfh3h2A2Wl0N6oAftc5fRia5GtjIPfUtXJUHslSx%2Bu7xP6%2FlEclZSy6go%2FLFPFe%2FjLk0q2c5dw2tFasV0MVxcgvqXOtowJ3Urbawe8&X-Amz-Signature=42708a9d65db6fa845266a2b2bd7497adf760bd5efc414afc24d6ccbf0d29358&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5TBJPYC%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDccjahDrO2zHnWxujz8E%2Ft%2F2KR2GxP4auDfnXRHxd4QwIhANj0o8c%2Fhd2%2F358fEdmhqdgeZmKL2EqhujroMey1fF%2B4KogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxJO3tPL13c30BRIMq3AN3ZLOzSW0EBI8J1DD4AhgEXnw1hyF%2BAHBdf199CY6GJdvujdPUSY3qZN8w3q1cY%2BhvgSYr7%2FQCgqMQ7JVyJxoYrAjhTi18HN0SAmy4BQ9ehp221KaM9nPXlR9rXJA%2B2RURlUdsbBmcvGyJOOybsRNzBPW0PQMBqrzfQ1WG87LUorBY2aBJ%2BCZZy0tzBHuKNnSVsCnUdirKa9otDITb7NmAPnCDDXkUt97mJDojRI%2Fy3V%2F%2F%2FYkrruEOpmNoVCDr8pVfngtOmOXmM6UCp%2BjFlafUD1n6UP1xfWerkNcfeTZQZsWlCdLCCcnX6gD6xgokMUPxqgC7iMadNR5TVXkp7yx3tq70mxkJaEXBM0WxqslurMu6KFN15OfepH3n6OyWVgaxW0FYfMSMpNmdrqcFhQ1e9QrrwxxZ0GpLnGAFc0md8K3XFMzcUQucq767M6pvdzJsw8n2fnitUr1K24K1tV8QVBV1Tq%2BO5oDnoqjAem7CqYqqRizfDXzw54FQYXUmNnlvIvTh6l8%2F%2FOmAd1lR0zQYzCMdGSDsG5X5twuisLrjRbrXlwz6GKZrMedk6hPoCT8YOxnToC5Cg0Sb43jXjpBTEmP%2FWXswI6sS69Ehb%2BvYDiq7l3creHVcl3m%2FhzCYyr7BBjqkARS2915kDiCG4XqEfUKpZDNWLou56SsQa5BuNGrezspIw7Y4ftt5xLPqE5tpScvAoCsNCZzjcyv2PKDbsqlqRnYiOXVTPMjExZtAujT5QDIACKfJwP7hStKfh3h2A2Wl0N6oAftc5fRia5GtjIPfUtXJUHslSx%2Bu7xP6%2FlEclZSy6go%2FLFPFe%2FjLk0q2c5dw2tFasV0MVxcgvqXOtowJ3Urbawe8&X-Amz-Signature=71cfd79a8992d8f9b8ff23f2c472568626b703cd05cdfb47270c644a6932b045&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5TBJPYC%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDccjahDrO2zHnWxujz8E%2Ft%2F2KR2GxP4auDfnXRHxd4QwIhANj0o8c%2Fhd2%2F358fEdmhqdgeZmKL2EqhujroMey1fF%2B4KogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxJO3tPL13c30BRIMq3AN3ZLOzSW0EBI8J1DD4AhgEXnw1hyF%2BAHBdf199CY6GJdvujdPUSY3qZN8w3q1cY%2BhvgSYr7%2FQCgqMQ7JVyJxoYrAjhTi18HN0SAmy4BQ9ehp221KaM9nPXlR9rXJA%2B2RURlUdsbBmcvGyJOOybsRNzBPW0PQMBqrzfQ1WG87LUorBY2aBJ%2BCZZy0tzBHuKNnSVsCnUdirKa9otDITb7NmAPnCDDXkUt97mJDojRI%2Fy3V%2F%2F%2FYkrruEOpmNoVCDr8pVfngtOmOXmM6UCp%2BjFlafUD1n6UP1xfWerkNcfeTZQZsWlCdLCCcnX6gD6xgokMUPxqgC7iMadNR5TVXkp7yx3tq70mxkJaEXBM0WxqslurMu6KFN15OfepH3n6OyWVgaxW0FYfMSMpNmdrqcFhQ1e9QrrwxxZ0GpLnGAFc0md8K3XFMzcUQucq767M6pvdzJsw8n2fnitUr1K24K1tV8QVBV1Tq%2BO5oDnoqjAem7CqYqqRizfDXzw54FQYXUmNnlvIvTh6l8%2F%2FOmAd1lR0zQYzCMdGSDsG5X5twuisLrjRbrXlwz6GKZrMedk6hPoCT8YOxnToC5Cg0Sb43jXjpBTEmP%2FWXswI6sS69Ehb%2BvYDiq7l3creHVcl3m%2FhzCYyr7BBjqkARS2915kDiCG4XqEfUKpZDNWLou56SsQa5BuNGrezspIw7Y4ftt5xLPqE5tpScvAoCsNCZzjcyv2PKDbsqlqRnYiOXVTPMjExZtAujT5QDIACKfJwP7hStKfh3h2A2Wl0N6oAftc5fRia5GtjIPfUtXJUHslSx%2Bu7xP6%2FlEclZSy6go%2FLFPFe%2FjLk0q2c5dw2tFasV0MVxcgvqXOtowJ3Urbawe8&X-Amz-Signature=0bf84d94261d174073e115356e1324cc81d597e2bba76b41b4397fec70561d8d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5TBJPYC%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDccjahDrO2zHnWxujz8E%2Ft%2F2KR2GxP4auDfnXRHxd4QwIhANj0o8c%2Fhd2%2F358fEdmhqdgeZmKL2EqhujroMey1fF%2B4KogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxJO3tPL13c30BRIMq3AN3ZLOzSW0EBI8J1DD4AhgEXnw1hyF%2BAHBdf199CY6GJdvujdPUSY3qZN8w3q1cY%2BhvgSYr7%2FQCgqMQ7JVyJxoYrAjhTi18HN0SAmy4BQ9ehp221KaM9nPXlR9rXJA%2B2RURlUdsbBmcvGyJOOybsRNzBPW0PQMBqrzfQ1WG87LUorBY2aBJ%2BCZZy0tzBHuKNnSVsCnUdirKa9otDITb7NmAPnCDDXkUt97mJDojRI%2Fy3V%2F%2F%2FYkrruEOpmNoVCDr8pVfngtOmOXmM6UCp%2BjFlafUD1n6UP1xfWerkNcfeTZQZsWlCdLCCcnX6gD6xgokMUPxqgC7iMadNR5TVXkp7yx3tq70mxkJaEXBM0WxqslurMu6KFN15OfepH3n6OyWVgaxW0FYfMSMpNmdrqcFhQ1e9QrrwxxZ0GpLnGAFc0md8K3XFMzcUQucq767M6pvdzJsw8n2fnitUr1K24K1tV8QVBV1Tq%2BO5oDnoqjAem7CqYqqRizfDXzw54FQYXUmNnlvIvTh6l8%2F%2FOmAd1lR0zQYzCMdGSDsG5X5twuisLrjRbrXlwz6GKZrMedk6hPoCT8YOxnToC5Cg0Sb43jXjpBTEmP%2FWXswI6sS69Ehb%2BvYDiq7l3creHVcl3m%2FhzCYyr7BBjqkARS2915kDiCG4XqEfUKpZDNWLou56SsQa5BuNGrezspIw7Y4ftt5xLPqE5tpScvAoCsNCZzjcyv2PKDbsqlqRnYiOXVTPMjExZtAujT5QDIACKfJwP7hStKfh3h2A2Wl0N6oAftc5fRia5GtjIPfUtXJUHslSx%2Bu7xP6%2FlEclZSy6go%2FLFPFe%2FjLk0q2c5dw2tFasV0MVxcgvqXOtowJ3Urbawe8&X-Amz-Signature=3304d4c652649424d5c8675a65cee7852a23102a30947590368dcb3dda35b4ee&X-Amz-SignedHeaders=host&x-id=GetObject)
