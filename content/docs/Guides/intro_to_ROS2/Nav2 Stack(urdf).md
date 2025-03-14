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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZYJ4BDI%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSapW2BIkruTdCt9hIpM1yEZswZOMhAOlCmBS07D4%2BuwIhAKapjHNMaFAtQSvkfanM3hb75Rnkr%2FoWTtPOEWKcwF%2FEKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyofAP0XQlgcC3uRfwq3AP%2BgwBlfU0gdLhY%2BzC%2BuGoSe%2BI%2BYCG2hmHUfJRDn2cJGDkkwH4JeMYVM76vH8UIIe0fblshBzjnLRkCgEmQOwGBtSfguRGs2QYP%2BsudRpyeANXbgfvIxqS4lTa7ewSyqpQQN%2Fv7Jb6fBhuTbKwLcNp1vQsx2H04s790Px%2BU2fKjmaGNGPR6DwtpHj%2B4pQ8kWAegUIFVYaWkMWQ90JG1cuNlcyPjlOx3uInckYVRB3AGoBKLd43cKI2bqjJpZynkATJHZpdnxDIoeR01wCpDxoAJuV51Hlsu8AKChNrGRT%2BemKZFnUMxJoDif7kxXhyA169VGw2hwPR18M918%2BD0wemhoOdDbruLg44CA3mo%2FGbFUxNd75XqObRVux8XgzCGsQlN2O4cVZ02c9%2BPRPAn4aBlOLhXswQzh4x%2FY9mY7P4DvO6KJK7EUBG0hKsslwuJ5g72MDonR3ib7Z9Br5eX0V7I2SsTF8%2FuKkkHeC0WGvW%2BGsMafnFNewQKks23amc9NY%2FWmCiJ9D94Mq34NHFs7P21dt16Ji22OT62zB%2BRmE802YNK6cpQn0o%2BtdzCj1O6gmOUba3%2ByD2vLDDWjkNkHqV%2F4zgKTlEeE7H1wZ7oWOasCHmbvXZ0ndBEsHthaTCQutC%2BBjqkAfXTcLxKYKr5aNPBQjlxyKD8bP718opiWQ1ayGWludXJFmaImM%2FmxgSf4%2FzGij764Jo%2Bo5R%2BQPxQ0eKMhuR9QDpdBm1EkiYBO4%2BVMLznOwYCG4jutvX6itMo4iHRThl9eykzfJ2IcaAs%2F20u0GzxUXjsM3Nm6%2BlepxT5NQPpTpArDKjVpALN3SFMPc%2Fho7%2B81SMsF5k%2Fa2qwkdtKD08fcdXJJoNE&X-Amz-Signature=fa5aab48e6b9811471eda3a04842ef508f07069f619d5c235e50bc4c4201d14e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZYJ4BDI%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSapW2BIkruTdCt9hIpM1yEZswZOMhAOlCmBS07D4%2BuwIhAKapjHNMaFAtQSvkfanM3hb75Rnkr%2FoWTtPOEWKcwF%2FEKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyofAP0XQlgcC3uRfwq3AP%2BgwBlfU0gdLhY%2BzC%2BuGoSe%2BI%2BYCG2hmHUfJRDn2cJGDkkwH4JeMYVM76vH8UIIe0fblshBzjnLRkCgEmQOwGBtSfguRGs2QYP%2BsudRpyeANXbgfvIxqS4lTa7ewSyqpQQN%2Fv7Jb6fBhuTbKwLcNp1vQsx2H04s790Px%2BU2fKjmaGNGPR6DwtpHj%2B4pQ8kWAegUIFVYaWkMWQ90JG1cuNlcyPjlOx3uInckYVRB3AGoBKLd43cKI2bqjJpZynkATJHZpdnxDIoeR01wCpDxoAJuV51Hlsu8AKChNrGRT%2BemKZFnUMxJoDif7kxXhyA169VGw2hwPR18M918%2BD0wemhoOdDbruLg44CA3mo%2FGbFUxNd75XqObRVux8XgzCGsQlN2O4cVZ02c9%2BPRPAn4aBlOLhXswQzh4x%2FY9mY7P4DvO6KJK7EUBG0hKsslwuJ5g72MDonR3ib7Z9Br5eX0V7I2SsTF8%2FuKkkHeC0WGvW%2BGsMafnFNewQKks23amc9NY%2FWmCiJ9D94Mq34NHFs7P21dt16Ji22OT62zB%2BRmE802YNK6cpQn0o%2BtdzCj1O6gmOUba3%2ByD2vLDDWjkNkHqV%2F4zgKTlEeE7H1wZ7oWOasCHmbvXZ0ndBEsHthaTCQutC%2BBjqkAfXTcLxKYKr5aNPBQjlxyKD8bP718opiWQ1ayGWludXJFmaImM%2FmxgSf4%2FzGij764Jo%2Bo5R%2BQPxQ0eKMhuR9QDpdBm1EkiYBO4%2BVMLznOwYCG4jutvX6itMo4iHRThl9eykzfJ2IcaAs%2F20u0GzxUXjsM3Nm6%2BlepxT5NQPpTpArDKjVpALN3SFMPc%2Fho7%2B81SMsF5k%2Fa2qwkdtKD08fcdXJJoNE&X-Amz-Signature=33d808288c2c32906a6738bcd2db12900e949f9d2025f6903b5f62eadaec0a11&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZYJ4BDI%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSapW2BIkruTdCt9hIpM1yEZswZOMhAOlCmBS07D4%2BuwIhAKapjHNMaFAtQSvkfanM3hb75Rnkr%2FoWTtPOEWKcwF%2FEKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyofAP0XQlgcC3uRfwq3AP%2BgwBlfU0gdLhY%2BzC%2BuGoSe%2BI%2BYCG2hmHUfJRDn2cJGDkkwH4JeMYVM76vH8UIIe0fblshBzjnLRkCgEmQOwGBtSfguRGs2QYP%2BsudRpyeANXbgfvIxqS4lTa7ewSyqpQQN%2Fv7Jb6fBhuTbKwLcNp1vQsx2H04s790Px%2BU2fKjmaGNGPR6DwtpHj%2B4pQ8kWAegUIFVYaWkMWQ90JG1cuNlcyPjlOx3uInckYVRB3AGoBKLd43cKI2bqjJpZynkATJHZpdnxDIoeR01wCpDxoAJuV51Hlsu8AKChNrGRT%2BemKZFnUMxJoDif7kxXhyA169VGw2hwPR18M918%2BD0wemhoOdDbruLg44CA3mo%2FGbFUxNd75XqObRVux8XgzCGsQlN2O4cVZ02c9%2BPRPAn4aBlOLhXswQzh4x%2FY9mY7P4DvO6KJK7EUBG0hKsslwuJ5g72MDonR3ib7Z9Br5eX0V7I2SsTF8%2FuKkkHeC0WGvW%2BGsMafnFNewQKks23amc9NY%2FWmCiJ9D94Mq34NHFs7P21dt16Ji22OT62zB%2BRmE802YNK6cpQn0o%2BtdzCj1O6gmOUba3%2ByD2vLDDWjkNkHqV%2F4zgKTlEeE7H1wZ7oWOasCHmbvXZ0ndBEsHthaTCQutC%2BBjqkAfXTcLxKYKr5aNPBQjlxyKD8bP718opiWQ1ayGWludXJFmaImM%2FmxgSf4%2FzGij764Jo%2Bo5R%2BQPxQ0eKMhuR9QDpdBm1EkiYBO4%2BVMLznOwYCG4jutvX6itMo4iHRThl9eykzfJ2IcaAs%2F20u0GzxUXjsM3Nm6%2BlepxT5NQPpTpArDKjVpALN3SFMPc%2Fho7%2B81SMsF5k%2Fa2qwkdtKD08fcdXJJoNE&X-Amz-Signature=0081fb7b5635a7fcc235c86d21dcfaed647bfae22cbe01b38987813ea0ff2a18&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZYJ4BDI%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSapW2BIkruTdCt9hIpM1yEZswZOMhAOlCmBS07D4%2BuwIhAKapjHNMaFAtQSvkfanM3hb75Rnkr%2FoWTtPOEWKcwF%2FEKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyofAP0XQlgcC3uRfwq3AP%2BgwBlfU0gdLhY%2BzC%2BuGoSe%2BI%2BYCG2hmHUfJRDn2cJGDkkwH4JeMYVM76vH8UIIe0fblshBzjnLRkCgEmQOwGBtSfguRGs2QYP%2BsudRpyeANXbgfvIxqS4lTa7ewSyqpQQN%2Fv7Jb6fBhuTbKwLcNp1vQsx2H04s790Px%2BU2fKjmaGNGPR6DwtpHj%2B4pQ8kWAegUIFVYaWkMWQ90JG1cuNlcyPjlOx3uInckYVRB3AGoBKLd43cKI2bqjJpZynkATJHZpdnxDIoeR01wCpDxoAJuV51Hlsu8AKChNrGRT%2BemKZFnUMxJoDif7kxXhyA169VGw2hwPR18M918%2BD0wemhoOdDbruLg44CA3mo%2FGbFUxNd75XqObRVux8XgzCGsQlN2O4cVZ02c9%2BPRPAn4aBlOLhXswQzh4x%2FY9mY7P4DvO6KJK7EUBG0hKsslwuJ5g72MDonR3ib7Z9Br5eX0V7I2SsTF8%2FuKkkHeC0WGvW%2BGsMafnFNewQKks23amc9NY%2FWmCiJ9D94Mq34NHFs7P21dt16Ji22OT62zB%2BRmE802YNK6cpQn0o%2BtdzCj1O6gmOUba3%2ByD2vLDDWjkNkHqV%2F4zgKTlEeE7H1wZ7oWOasCHmbvXZ0ndBEsHthaTCQutC%2BBjqkAfXTcLxKYKr5aNPBQjlxyKD8bP718opiWQ1ayGWludXJFmaImM%2FmxgSf4%2FzGij764Jo%2Bo5R%2BQPxQ0eKMhuR9QDpdBm1EkiYBO4%2BVMLznOwYCG4jutvX6itMo4iHRThl9eykzfJ2IcaAs%2F20u0GzxUXjsM3Nm6%2BlepxT5NQPpTpArDKjVpALN3SFMPc%2Fho7%2B81SMsF5k%2Fa2qwkdtKD08fcdXJJoNE&X-Amz-Signature=840d9691f119b09f239c4ab110dafc1cc6416de1efd5e0a437fb8809e5786a1e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZYJ4BDI%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSapW2BIkruTdCt9hIpM1yEZswZOMhAOlCmBS07D4%2BuwIhAKapjHNMaFAtQSvkfanM3hb75Rnkr%2FoWTtPOEWKcwF%2FEKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyofAP0XQlgcC3uRfwq3AP%2BgwBlfU0gdLhY%2BzC%2BuGoSe%2BI%2BYCG2hmHUfJRDn2cJGDkkwH4JeMYVM76vH8UIIe0fblshBzjnLRkCgEmQOwGBtSfguRGs2QYP%2BsudRpyeANXbgfvIxqS4lTa7ewSyqpQQN%2Fv7Jb6fBhuTbKwLcNp1vQsx2H04s790Px%2BU2fKjmaGNGPR6DwtpHj%2B4pQ8kWAegUIFVYaWkMWQ90JG1cuNlcyPjlOx3uInckYVRB3AGoBKLd43cKI2bqjJpZynkATJHZpdnxDIoeR01wCpDxoAJuV51Hlsu8AKChNrGRT%2BemKZFnUMxJoDif7kxXhyA169VGw2hwPR18M918%2BD0wemhoOdDbruLg44CA3mo%2FGbFUxNd75XqObRVux8XgzCGsQlN2O4cVZ02c9%2BPRPAn4aBlOLhXswQzh4x%2FY9mY7P4DvO6KJK7EUBG0hKsslwuJ5g72MDonR3ib7Z9Br5eX0V7I2SsTF8%2FuKkkHeC0WGvW%2BGsMafnFNewQKks23amc9NY%2FWmCiJ9D94Mq34NHFs7P21dt16Ji22OT62zB%2BRmE802YNK6cpQn0o%2BtdzCj1O6gmOUba3%2ByD2vLDDWjkNkHqV%2F4zgKTlEeE7H1wZ7oWOasCHmbvXZ0ndBEsHthaTCQutC%2BBjqkAfXTcLxKYKr5aNPBQjlxyKD8bP718opiWQ1ayGWludXJFmaImM%2FmxgSf4%2FzGij764Jo%2Bo5R%2BQPxQ0eKMhuR9QDpdBm1EkiYBO4%2BVMLznOwYCG4jutvX6itMo4iHRThl9eykzfJ2IcaAs%2F20u0GzxUXjsM3Nm6%2BlepxT5NQPpTpArDKjVpALN3SFMPc%2Fho7%2B81SMsF5k%2Fa2qwkdtKD08fcdXJJoNE&X-Amz-Signature=2bdf952845b3e984f32b59d28e5b7a51469f5ac88d22b6b8068745ef98da5bef&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZYJ4BDI%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSapW2BIkruTdCt9hIpM1yEZswZOMhAOlCmBS07D4%2BuwIhAKapjHNMaFAtQSvkfanM3hb75Rnkr%2FoWTtPOEWKcwF%2FEKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyofAP0XQlgcC3uRfwq3AP%2BgwBlfU0gdLhY%2BzC%2BuGoSe%2BI%2BYCG2hmHUfJRDn2cJGDkkwH4JeMYVM76vH8UIIe0fblshBzjnLRkCgEmQOwGBtSfguRGs2QYP%2BsudRpyeANXbgfvIxqS4lTa7ewSyqpQQN%2Fv7Jb6fBhuTbKwLcNp1vQsx2H04s790Px%2BU2fKjmaGNGPR6DwtpHj%2B4pQ8kWAegUIFVYaWkMWQ90JG1cuNlcyPjlOx3uInckYVRB3AGoBKLd43cKI2bqjJpZynkATJHZpdnxDIoeR01wCpDxoAJuV51Hlsu8AKChNrGRT%2BemKZFnUMxJoDif7kxXhyA169VGw2hwPR18M918%2BD0wemhoOdDbruLg44CA3mo%2FGbFUxNd75XqObRVux8XgzCGsQlN2O4cVZ02c9%2BPRPAn4aBlOLhXswQzh4x%2FY9mY7P4DvO6KJK7EUBG0hKsslwuJ5g72MDonR3ib7Z9Br5eX0V7I2SsTF8%2FuKkkHeC0WGvW%2BGsMafnFNewQKks23amc9NY%2FWmCiJ9D94Mq34NHFs7P21dt16Ji22OT62zB%2BRmE802YNK6cpQn0o%2BtdzCj1O6gmOUba3%2ByD2vLDDWjkNkHqV%2F4zgKTlEeE7H1wZ7oWOasCHmbvXZ0ndBEsHthaTCQutC%2BBjqkAfXTcLxKYKr5aNPBQjlxyKD8bP718opiWQ1ayGWludXJFmaImM%2FmxgSf4%2FzGij764Jo%2Bo5R%2BQPxQ0eKMhuR9QDpdBm1EkiYBO4%2BVMLznOwYCG4jutvX6itMo4iHRThl9eykzfJ2IcaAs%2F20u0GzxUXjsM3Nm6%2BlepxT5NQPpTpArDKjVpALN3SFMPc%2Fho7%2B81SMsF5k%2Fa2qwkdtKD08fcdXJJoNE&X-Amz-Signature=ff17a19574c1d62f195b5c170603cfd3da10200c9eefd0acc7a42a30a5d9758c&X-Amz-SignedHeaders=host&x-id=GetObject)
