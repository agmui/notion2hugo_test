---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF6647UB%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIAPBLQ4110iszEqhJTzQfFcIpTEyDHpLKa4oWi9DUA3bAiEA%2Fov9IQ6RGcOwN9%2BAu0sED8rYZZJNF2K27IUxdQPvcCUq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDInRnvXCTDNSw%2FKK7CrcA6JJ6uc3P%2FjKHotNGrnHaukdF9UuAH%2B7q8zHGSo34W9m1S5wmHv%2F87rOAtmiryLkZPk6j5Nikx5k67Mu2c1SXYilIbAfkVQMJ%2BA6pJAaiq8JbiuPxZXq%2BOi4D0SadXLuHKY90ZpNu8Cg6%2Fywq6xjvmlkhMUVFjggOwvVsiY%2BBBmekLo3zc6NBv8R9RcjYeuJAgMPlxzmNaBezYVkEJBxAV0T1geIx6iuydfG4dAnASvXHINqt6fYH%2BsBX4NlHRCJTYONHn5Sj9dbLw3LnoV6ctuzes%2Bu4zWS0HVk10s9sBIDezXN0CvX0cUCfeBHYrKuYvONmCVu4P6FY%2FlWH2Q1HRNlSjBtVjaFwETM7zi0oAsMo0E4F7a1Fc5ShSZP4gSdmblrfIi3lc5CLM0cpPka8uszd4QmuZty4ayH7BaAatmGwCbsKJl42NqbEnMe5fApLN15hcRuYWT4uQHJmAsb6fEY%2FAj16GJ%2B4gLLZb4bJrpexP93e0FOgnCgXNW%2F8CuDEhDod%2BDodMWoIwFvdSvRT0cC%2FE0Q6w0q4R3y9m%2B7G9lrAOx8g7seLLtGXAJonj5p7lh1SbXqUkQ1sQtkRBoIsVYtVOyTTB8RkXaojhBZjB56b3SslangV%2BrPwl%2FLMLz%2Bib0GOqUBeOpNEfwRLB8asYXDLHtc4B3LORQSDUsk%2FSvY1GpKSadDL4%2BanUOEiQI%2BZWanf8jmc1cY6SQfGJA6HAVEea1E1E8n2ufdVdnmZAXqJqeUQ1PDHxLy1CfEMl468iEbjljBz9gyJTi7gVtomQUKCN6sVZjutMNT4DiwKqonijamZMXXtQF%2FbGdh8hkRVROR9vpvtYqHcKl7nZSqWvUeodEBklb21ZKU&X-Amz-Signature=443cbbec8ab2ef8a103aa2ba8ac0034b1fe5e380ca9c665e72eb37ff1b6705b1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF6647UB%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIAPBLQ4110iszEqhJTzQfFcIpTEyDHpLKa4oWi9DUA3bAiEA%2Fov9IQ6RGcOwN9%2BAu0sED8rYZZJNF2K27IUxdQPvcCUq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDInRnvXCTDNSw%2FKK7CrcA6JJ6uc3P%2FjKHotNGrnHaukdF9UuAH%2B7q8zHGSo34W9m1S5wmHv%2F87rOAtmiryLkZPk6j5Nikx5k67Mu2c1SXYilIbAfkVQMJ%2BA6pJAaiq8JbiuPxZXq%2BOi4D0SadXLuHKY90ZpNu8Cg6%2Fywq6xjvmlkhMUVFjggOwvVsiY%2BBBmekLo3zc6NBv8R9RcjYeuJAgMPlxzmNaBezYVkEJBxAV0T1geIx6iuydfG4dAnASvXHINqt6fYH%2BsBX4NlHRCJTYONHn5Sj9dbLw3LnoV6ctuzes%2Bu4zWS0HVk10s9sBIDezXN0CvX0cUCfeBHYrKuYvONmCVu4P6FY%2FlWH2Q1HRNlSjBtVjaFwETM7zi0oAsMo0E4F7a1Fc5ShSZP4gSdmblrfIi3lc5CLM0cpPka8uszd4QmuZty4ayH7BaAatmGwCbsKJl42NqbEnMe5fApLN15hcRuYWT4uQHJmAsb6fEY%2FAj16GJ%2B4gLLZb4bJrpexP93e0FOgnCgXNW%2F8CuDEhDod%2BDodMWoIwFvdSvRT0cC%2FE0Q6w0q4R3y9m%2B7G9lrAOx8g7seLLtGXAJonj5p7lh1SbXqUkQ1sQtkRBoIsVYtVOyTTB8RkXaojhBZjB56b3SslangV%2BrPwl%2FLMLz%2Bib0GOqUBeOpNEfwRLB8asYXDLHtc4B3LORQSDUsk%2FSvY1GpKSadDL4%2BanUOEiQI%2BZWanf8jmc1cY6SQfGJA6HAVEea1E1E8n2ufdVdnmZAXqJqeUQ1PDHxLy1CfEMl468iEbjljBz9gyJTi7gVtomQUKCN6sVZjutMNT4DiwKqonijamZMXXtQF%2FbGdh8hkRVROR9vpvtYqHcKl7nZSqWvUeodEBklb21ZKU&X-Amz-Signature=b9b7e1468f9b178970740e722ff1825741af684cd6b55d1dea988b1a0cfde45d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF6647UB%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIAPBLQ4110iszEqhJTzQfFcIpTEyDHpLKa4oWi9DUA3bAiEA%2Fov9IQ6RGcOwN9%2BAu0sED8rYZZJNF2K27IUxdQPvcCUq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDInRnvXCTDNSw%2FKK7CrcA6JJ6uc3P%2FjKHotNGrnHaukdF9UuAH%2B7q8zHGSo34W9m1S5wmHv%2F87rOAtmiryLkZPk6j5Nikx5k67Mu2c1SXYilIbAfkVQMJ%2BA6pJAaiq8JbiuPxZXq%2BOi4D0SadXLuHKY90ZpNu8Cg6%2Fywq6xjvmlkhMUVFjggOwvVsiY%2BBBmekLo3zc6NBv8R9RcjYeuJAgMPlxzmNaBezYVkEJBxAV0T1geIx6iuydfG4dAnASvXHINqt6fYH%2BsBX4NlHRCJTYONHn5Sj9dbLw3LnoV6ctuzes%2Bu4zWS0HVk10s9sBIDezXN0CvX0cUCfeBHYrKuYvONmCVu4P6FY%2FlWH2Q1HRNlSjBtVjaFwETM7zi0oAsMo0E4F7a1Fc5ShSZP4gSdmblrfIi3lc5CLM0cpPka8uszd4QmuZty4ayH7BaAatmGwCbsKJl42NqbEnMe5fApLN15hcRuYWT4uQHJmAsb6fEY%2FAj16GJ%2B4gLLZb4bJrpexP93e0FOgnCgXNW%2F8CuDEhDod%2BDodMWoIwFvdSvRT0cC%2FE0Q6w0q4R3y9m%2B7G9lrAOx8g7seLLtGXAJonj5p7lh1SbXqUkQ1sQtkRBoIsVYtVOyTTB8RkXaojhBZjB56b3SslangV%2BrPwl%2FLMLz%2Bib0GOqUBeOpNEfwRLB8asYXDLHtc4B3LORQSDUsk%2FSvY1GpKSadDL4%2BanUOEiQI%2BZWanf8jmc1cY6SQfGJA6HAVEea1E1E8n2ufdVdnmZAXqJqeUQ1PDHxLy1CfEMl468iEbjljBz9gyJTi7gVtomQUKCN6sVZjutMNT4DiwKqonijamZMXXtQF%2FbGdh8hkRVROR9vpvtYqHcKl7nZSqWvUeodEBklb21ZKU&X-Amz-Signature=5837c4c22ba107a2eaa3281025bd7d4d3a546bc0386d6ad63a1ca7ed75819bc2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF6647UB%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIAPBLQ4110iszEqhJTzQfFcIpTEyDHpLKa4oWi9DUA3bAiEA%2Fov9IQ6RGcOwN9%2BAu0sED8rYZZJNF2K27IUxdQPvcCUq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDInRnvXCTDNSw%2FKK7CrcA6JJ6uc3P%2FjKHotNGrnHaukdF9UuAH%2B7q8zHGSo34W9m1S5wmHv%2F87rOAtmiryLkZPk6j5Nikx5k67Mu2c1SXYilIbAfkVQMJ%2BA6pJAaiq8JbiuPxZXq%2BOi4D0SadXLuHKY90ZpNu8Cg6%2Fywq6xjvmlkhMUVFjggOwvVsiY%2BBBmekLo3zc6NBv8R9RcjYeuJAgMPlxzmNaBezYVkEJBxAV0T1geIx6iuydfG4dAnASvXHINqt6fYH%2BsBX4NlHRCJTYONHn5Sj9dbLw3LnoV6ctuzes%2Bu4zWS0HVk10s9sBIDezXN0CvX0cUCfeBHYrKuYvONmCVu4P6FY%2FlWH2Q1HRNlSjBtVjaFwETM7zi0oAsMo0E4F7a1Fc5ShSZP4gSdmblrfIi3lc5CLM0cpPka8uszd4QmuZty4ayH7BaAatmGwCbsKJl42NqbEnMe5fApLN15hcRuYWT4uQHJmAsb6fEY%2FAj16GJ%2B4gLLZb4bJrpexP93e0FOgnCgXNW%2F8CuDEhDod%2BDodMWoIwFvdSvRT0cC%2FE0Q6w0q4R3y9m%2B7G9lrAOx8g7seLLtGXAJonj5p7lh1SbXqUkQ1sQtkRBoIsVYtVOyTTB8RkXaojhBZjB56b3SslangV%2BrPwl%2FLMLz%2Bib0GOqUBeOpNEfwRLB8asYXDLHtc4B3LORQSDUsk%2FSvY1GpKSadDL4%2BanUOEiQI%2BZWanf8jmc1cY6SQfGJA6HAVEea1E1E8n2ufdVdnmZAXqJqeUQ1PDHxLy1CfEMl468iEbjljBz9gyJTi7gVtomQUKCN6sVZjutMNT4DiwKqonijamZMXXtQF%2FbGdh8hkRVROR9vpvtYqHcKl7nZSqWvUeodEBklb21ZKU&X-Amz-Signature=8b6816b2412e2081db484070cfcb6a2564e47fa3e11dad1cd5dc340977e583bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF6647UB%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIAPBLQ4110iszEqhJTzQfFcIpTEyDHpLKa4oWi9DUA3bAiEA%2Fov9IQ6RGcOwN9%2BAu0sED8rYZZJNF2K27IUxdQPvcCUq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDInRnvXCTDNSw%2FKK7CrcA6JJ6uc3P%2FjKHotNGrnHaukdF9UuAH%2B7q8zHGSo34W9m1S5wmHv%2F87rOAtmiryLkZPk6j5Nikx5k67Mu2c1SXYilIbAfkVQMJ%2BA6pJAaiq8JbiuPxZXq%2BOi4D0SadXLuHKY90ZpNu8Cg6%2Fywq6xjvmlkhMUVFjggOwvVsiY%2BBBmekLo3zc6NBv8R9RcjYeuJAgMPlxzmNaBezYVkEJBxAV0T1geIx6iuydfG4dAnASvXHINqt6fYH%2BsBX4NlHRCJTYONHn5Sj9dbLw3LnoV6ctuzes%2Bu4zWS0HVk10s9sBIDezXN0CvX0cUCfeBHYrKuYvONmCVu4P6FY%2FlWH2Q1HRNlSjBtVjaFwETM7zi0oAsMo0E4F7a1Fc5ShSZP4gSdmblrfIi3lc5CLM0cpPka8uszd4QmuZty4ayH7BaAatmGwCbsKJl42NqbEnMe5fApLN15hcRuYWT4uQHJmAsb6fEY%2FAj16GJ%2B4gLLZb4bJrpexP93e0FOgnCgXNW%2F8CuDEhDod%2BDodMWoIwFvdSvRT0cC%2FE0Q6w0q4R3y9m%2B7G9lrAOx8g7seLLtGXAJonj5p7lh1SbXqUkQ1sQtkRBoIsVYtVOyTTB8RkXaojhBZjB56b3SslangV%2BrPwl%2FLMLz%2Bib0GOqUBeOpNEfwRLB8asYXDLHtc4B3LORQSDUsk%2FSvY1GpKSadDL4%2BanUOEiQI%2BZWanf8jmc1cY6SQfGJA6HAVEea1E1E8n2ufdVdnmZAXqJqeUQ1PDHxLy1CfEMl468iEbjljBz9gyJTi7gVtomQUKCN6sVZjutMNT4DiwKqonijamZMXXtQF%2FbGdh8hkRVROR9vpvtYqHcKl7nZSqWvUeodEBklb21ZKU&X-Amz-Signature=452ebb87f1d8174f57d6857b4e53c36ae5ac14fbb67431cded8748214d7f7155&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF6647UB%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIAPBLQ4110iszEqhJTzQfFcIpTEyDHpLKa4oWi9DUA3bAiEA%2Fov9IQ6RGcOwN9%2BAu0sED8rYZZJNF2K27IUxdQPvcCUq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDInRnvXCTDNSw%2FKK7CrcA6JJ6uc3P%2FjKHotNGrnHaukdF9UuAH%2B7q8zHGSo34W9m1S5wmHv%2F87rOAtmiryLkZPk6j5Nikx5k67Mu2c1SXYilIbAfkVQMJ%2BA6pJAaiq8JbiuPxZXq%2BOi4D0SadXLuHKY90ZpNu8Cg6%2Fywq6xjvmlkhMUVFjggOwvVsiY%2BBBmekLo3zc6NBv8R9RcjYeuJAgMPlxzmNaBezYVkEJBxAV0T1geIx6iuydfG4dAnASvXHINqt6fYH%2BsBX4NlHRCJTYONHn5Sj9dbLw3LnoV6ctuzes%2Bu4zWS0HVk10s9sBIDezXN0CvX0cUCfeBHYrKuYvONmCVu4P6FY%2FlWH2Q1HRNlSjBtVjaFwETM7zi0oAsMo0E4F7a1Fc5ShSZP4gSdmblrfIi3lc5CLM0cpPka8uszd4QmuZty4ayH7BaAatmGwCbsKJl42NqbEnMe5fApLN15hcRuYWT4uQHJmAsb6fEY%2FAj16GJ%2B4gLLZb4bJrpexP93e0FOgnCgXNW%2F8CuDEhDod%2BDodMWoIwFvdSvRT0cC%2FE0Q6w0q4R3y9m%2B7G9lrAOx8g7seLLtGXAJonj5p7lh1SbXqUkQ1sQtkRBoIsVYtVOyTTB8RkXaojhBZjB56b3SslangV%2BrPwl%2FLMLz%2Bib0GOqUBeOpNEfwRLB8asYXDLHtc4B3LORQSDUsk%2FSvY1GpKSadDL4%2BanUOEiQI%2BZWanf8jmc1cY6SQfGJA6HAVEea1E1E8n2ufdVdnmZAXqJqeUQ1PDHxLy1CfEMl468iEbjljBz9gyJTi7gVtomQUKCN6sVZjutMNT4DiwKqonijamZMXXtQF%2FbGdh8hkRVROR9vpvtYqHcKl7nZSqWvUeodEBklb21ZKU&X-Amz-Signature=36a492265cd85fc8b429ec30c9e777a5592764be6aa5d7867bfa6f77bf7c7b30&X-Amz-SignedHeaders=host&x-id=GetObject)
