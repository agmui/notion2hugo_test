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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFSHIBTB%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC16FGjigZL5NT4y8d06PudH3k2y3%2FZ%2FFua5rA95IVjSwIhAM7sf%2Bo1PFLFaOhFkhBoeNKF3XtzWEebOKC09Tn90pNnKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4sqzejzvbjo7Fe8Mq3ANN7jYY%2FAfDjOQz1PgYt%2FUF%2BpSjcJZWlVm2B3EHkkPzjeEntqMrbHMK%2BLEvUIIpZyL8og0Js29qG2Cu6mLutPDjIlqWEsHPm2XqyOzbdzHj4NxMT91aoD5UE4HjcYb2jHYuLxwBTrQ0SRMXP8zy0Q538FB%2BXntnOq3L8x7tFD%2BA%2FnU0PjJdxuXL%2F9ZvWywe9eMMoi663%2BNp74rSVS2OVeBbFLfnkYz4A5fasgFBPTEw8wX8k7El4Q%2FXihj7J66PfU91oVUEjpP%2BM0JcGIuA0lKPaVxyenSLWCKZwEW3tJwBmOEDtuat0jVXHMG69U3510TCV7F6%2F27mCmexSaCAqBPTy4i52UWTVM796zt4nGwrwr5PTPjWbsS4rE%2FoqKFT3rorsxr54KKZ0tZOHvDcrlanN8SDla%2FCQufo0o1jF1YvIpymhOLYbfMKlCKvfdwK8fcScmRJnKMc1V8rbrFy7CcorCT%2BachGxckiBa9mzaCBDh7NMbjUvOethdhLOPM%2BnHc7qaZJYHovUPIiys6CwKVD7x1jv6ZrcAEC2GCGcNAdFE%2BqS%2F%2BAku5a7Vc%2FrRk8j49S0eu3WxLUcKR6brJkJrz%2FcZYx0FKZMuKaoU1tzJuhlbTsG7fwTvwtGApJwDCGzey%2FBjqkAQJ40khwTULl77Y0Gbg5EFLfvXyiQe0pZjlUXo7L5eQ50Zzu2CLHGslN%2FEN8jiZWe%2BQV8HeFO0TcCl27sGauP7AknRFwLl7NigZMQ3U26Wc7rBjlSZ%2Bv9E6J4wkvGBU9YRoETmxYBq65YHQoLETsRVDv4h6bMfVpGQco%2FOxn3xy6fGGv2YnYT7ll1V26UPViQt3Bu393Zc6CicC%2FTI3Kmdb4A7iz&X-Amz-Signature=fceb23901c2577ffed12a261e8bda6c34a6a9174d21452201e92e74f85c7f5e3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFSHIBTB%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC16FGjigZL5NT4y8d06PudH3k2y3%2FZ%2FFua5rA95IVjSwIhAM7sf%2Bo1PFLFaOhFkhBoeNKF3XtzWEebOKC09Tn90pNnKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4sqzejzvbjo7Fe8Mq3ANN7jYY%2FAfDjOQz1PgYt%2FUF%2BpSjcJZWlVm2B3EHkkPzjeEntqMrbHMK%2BLEvUIIpZyL8og0Js29qG2Cu6mLutPDjIlqWEsHPm2XqyOzbdzHj4NxMT91aoD5UE4HjcYb2jHYuLxwBTrQ0SRMXP8zy0Q538FB%2BXntnOq3L8x7tFD%2BA%2FnU0PjJdxuXL%2F9ZvWywe9eMMoi663%2BNp74rSVS2OVeBbFLfnkYz4A5fasgFBPTEw8wX8k7El4Q%2FXihj7J66PfU91oVUEjpP%2BM0JcGIuA0lKPaVxyenSLWCKZwEW3tJwBmOEDtuat0jVXHMG69U3510TCV7F6%2F27mCmexSaCAqBPTy4i52UWTVM796zt4nGwrwr5PTPjWbsS4rE%2FoqKFT3rorsxr54KKZ0tZOHvDcrlanN8SDla%2FCQufo0o1jF1YvIpymhOLYbfMKlCKvfdwK8fcScmRJnKMc1V8rbrFy7CcorCT%2BachGxckiBa9mzaCBDh7NMbjUvOethdhLOPM%2BnHc7qaZJYHovUPIiys6CwKVD7x1jv6ZrcAEC2GCGcNAdFE%2BqS%2F%2BAku5a7Vc%2FrRk8j49S0eu3WxLUcKR6brJkJrz%2FcZYx0FKZMuKaoU1tzJuhlbTsG7fwTvwtGApJwDCGzey%2FBjqkAQJ40khwTULl77Y0Gbg5EFLfvXyiQe0pZjlUXo7L5eQ50Zzu2CLHGslN%2FEN8jiZWe%2BQV8HeFO0TcCl27sGauP7AknRFwLl7NigZMQ3U26Wc7rBjlSZ%2Bv9E6J4wkvGBU9YRoETmxYBq65YHQoLETsRVDv4h6bMfVpGQco%2FOxn3xy6fGGv2YnYT7ll1V26UPViQt3Bu393Zc6CicC%2FTI3Kmdb4A7iz&X-Amz-Signature=18bf4f886aaee2fe5e1ab9c1a6ee474239a1af78349337da7c80a0dbce8c6a44&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFSHIBTB%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC16FGjigZL5NT4y8d06PudH3k2y3%2FZ%2FFua5rA95IVjSwIhAM7sf%2Bo1PFLFaOhFkhBoeNKF3XtzWEebOKC09Tn90pNnKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4sqzejzvbjo7Fe8Mq3ANN7jYY%2FAfDjOQz1PgYt%2FUF%2BpSjcJZWlVm2B3EHkkPzjeEntqMrbHMK%2BLEvUIIpZyL8og0Js29qG2Cu6mLutPDjIlqWEsHPm2XqyOzbdzHj4NxMT91aoD5UE4HjcYb2jHYuLxwBTrQ0SRMXP8zy0Q538FB%2BXntnOq3L8x7tFD%2BA%2FnU0PjJdxuXL%2F9ZvWywe9eMMoi663%2BNp74rSVS2OVeBbFLfnkYz4A5fasgFBPTEw8wX8k7El4Q%2FXihj7J66PfU91oVUEjpP%2BM0JcGIuA0lKPaVxyenSLWCKZwEW3tJwBmOEDtuat0jVXHMG69U3510TCV7F6%2F27mCmexSaCAqBPTy4i52UWTVM796zt4nGwrwr5PTPjWbsS4rE%2FoqKFT3rorsxr54KKZ0tZOHvDcrlanN8SDla%2FCQufo0o1jF1YvIpymhOLYbfMKlCKvfdwK8fcScmRJnKMc1V8rbrFy7CcorCT%2BachGxckiBa9mzaCBDh7NMbjUvOethdhLOPM%2BnHc7qaZJYHovUPIiys6CwKVD7x1jv6ZrcAEC2GCGcNAdFE%2BqS%2F%2BAku5a7Vc%2FrRk8j49S0eu3WxLUcKR6brJkJrz%2FcZYx0FKZMuKaoU1tzJuhlbTsG7fwTvwtGApJwDCGzey%2FBjqkAQJ40khwTULl77Y0Gbg5EFLfvXyiQe0pZjlUXo7L5eQ50Zzu2CLHGslN%2FEN8jiZWe%2BQV8HeFO0TcCl27sGauP7AknRFwLl7NigZMQ3U26Wc7rBjlSZ%2Bv9E6J4wkvGBU9YRoETmxYBq65YHQoLETsRVDv4h6bMfVpGQco%2FOxn3xy6fGGv2YnYT7ll1V26UPViQt3Bu393Zc6CicC%2FTI3Kmdb4A7iz&X-Amz-Signature=07094d4d6bfdb1191fcda2a183f3eface445b4d9116e928feee311d6de9ab405&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFSHIBTB%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC16FGjigZL5NT4y8d06PudH3k2y3%2FZ%2FFua5rA95IVjSwIhAM7sf%2Bo1PFLFaOhFkhBoeNKF3XtzWEebOKC09Tn90pNnKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4sqzejzvbjo7Fe8Mq3ANN7jYY%2FAfDjOQz1PgYt%2FUF%2BpSjcJZWlVm2B3EHkkPzjeEntqMrbHMK%2BLEvUIIpZyL8og0Js29qG2Cu6mLutPDjIlqWEsHPm2XqyOzbdzHj4NxMT91aoD5UE4HjcYb2jHYuLxwBTrQ0SRMXP8zy0Q538FB%2BXntnOq3L8x7tFD%2BA%2FnU0PjJdxuXL%2F9ZvWywe9eMMoi663%2BNp74rSVS2OVeBbFLfnkYz4A5fasgFBPTEw8wX8k7El4Q%2FXihj7J66PfU91oVUEjpP%2BM0JcGIuA0lKPaVxyenSLWCKZwEW3tJwBmOEDtuat0jVXHMG69U3510TCV7F6%2F27mCmexSaCAqBPTy4i52UWTVM796zt4nGwrwr5PTPjWbsS4rE%2FoqKFT3rorsxr54KKZ0tZOHvDcrlanN8SDla%2FCQufo0o1jF1YvIpymhOLYbfMKlCKvfdwK8fcScmRJnKMc1V8rbrFy7CcorCT%2BachGxckiBa9mzaCBDh7NMbjUvOethdhLOPM%2BnHc7qaZJYHovUPIiys6CwKVD7x1jv6ZrcAEC2GCGcNAdFE%2BqS%2F%2BAku5a7Vc%2FrRk8j49S0eu3WxLUcKR6brJkJrz%2FcZYx0FKZMuKaoU1tzJuhlbTsG7fwTvwtGApJwDCGzey%2FBjqkAQJ40khwTULl77Y0Gbg5EFLfvXyiQe0pZjlUXo7L5eQ50Zzu2CLHGslN%2FEN8jiZWe%2BQV8HeFO0TcCl27sGauP7AknRFwLl7NigZMQ3U26Wc7rBjlSZ%2Bv9E6J4wkvGBU9YRoETmxYBq65YHQoLETsRVDv4h6bMfVpGQco%2FOxn3xy6fGGv2YnYT7ll1V26UPViQt3Bu393Zc6CicC%2FTI3Kmdb4A7iz&X-Amz-Signature=0ff48e1d3beea8662014c661058fe875d4a680ff6636149db7b05f2eea34781b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFSHIBTB%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC16FGjigZL5NT4y8d06PudH3k2y3%2FZ%2FFua5rA95IVjSwIhAM7sf%2Bo1PFLFaOhFkhBoeNKF3XtzWEebOKC09Tn90pNnKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4sqzejzvbjo7Fe8Mq3ANN7jYY%2FAfDjOQz1PgYt%2FUF%2BpSjcJZWlVm2B3EHkkPzjeEntqMrbHMK%2BLEvUIIpZyL8og0Js29qG2Cu6mLutPDjIlqWEsHPm2XqyOzbdzHj4NxMT91aoD5UE4HjcYb2jHYuLxwBTrQ0SRMXP8zy0Q538FB%2BXntnOq3L8x7tFD%2BA%2FnU0PjJdxuXL%2F9ZvWywe9eMMoi663%2BNp74rSVS2OVeBbFLfnkYz4A5fasgFBPTEw8wX8k7El4Q%2FXihj7J66PfU91oVUEjpP%2BM0JcGIuA0lKPaVxyenSLWCKZwEW3tJwBmOEDtuat0jVXHMG69U3510TCV7F6%2F27mCmexSaCAqBPTy4i52UWTVM796zt4nGwrwr5PTPjWbsS4rE%2FoqKFT3rorsxr54KKZ0tZOHvDcrlanN8SDla%2FCQufo0o1jF1YvIpymhOLYbfMKlCKvfdwK8fcScmRJnKMc1V8rbrFy7CcorCT%2BachGxckiBa9mzaCBDh7NMbjUvOethdhLOPM%2BnHc7qaZJYHovUPIiys6CwKVD7x1jv6ZrcAEC2GCGcNAdFE%2BqS%2F%2BAku5a7Vc%2FrRk8j49S0eu3WxLUcKR6brJkJrz%2FcZYx0FKZMuKaoU1tzJuhlbTsG7fwTvwtGApJwDCGzey%2FBjqkAQJ40khwTULl77Y0Gbg5EFLfvXyiQe0pZjlUXo7L5eQ50Zzu2CLHGslN%2FEN8jiZWe%2BQV8HeFO0TcCl27sGauP7AknRFwLl7NigZMQ3U26Wc7rBjlSZ%2Bv9E6J4wkvGBU9YRoETmxYBq65YHQoLETsRVDv4h6bMfVpGQco%2FOxn3xy6fGGv2YnYT7ll1V26UPViQt3Bu393Zc6CicC%2FTI3Kmdb4A7iz&X-Amz-Signature=af7e87115740cf7fe5464ca86dfebe03a29b2dfad010703d14c092125a9cec8a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFSHIBTB%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC16FGjigZL5NT4y8d06PudH3k2y3%2FZ%2FFua5rA95IVjSwIhAM7sf%2Bo1PFLFaOhFkhBoeNKF3XtzWEebOKC09Tn90pNnKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4sqzejzvbjo7Fe8Mq3ANN7jYY%2FAfDjOQz1PgYt%2FUF%2BpSjcJZWlVm2B3EHkkPzjeEntqMrbHMK%2BLEvUIIpZyL8og0Js29qG2Cu6mLutPDjIlqWEsHPm2XqyOzbdzHj4NxMT91aoD5UE4HjcYb2jHYuLxwBTrQ0SRMXP8zy0Q538FB%2BXntnOq3L8x7tFD%2BA%2FnU0PjJdxuXL%2F9ZvWywe9eMMoi663%2BNp74rSVS2OVeBbFLfnkYz4A5fasgFBPTEw8wX8k7El4Q%2FXihj7J66PfU91oVUEjpP%2BM0JcGIuA0lKPaVxyenSLWCKZwEW3tJwBmOEDtuat0jVXHMG69U3510TCV7F6%2F27mCmexSaCAqBPTy4i52UWTVM796zt4nGwrwr5PTPjWbsS4rE%2FoqKFT3rorsxr54KKZ0tZOHvDcrlanN8SDla%2FCQufo0o1jF1YvIpymhOLYbfMKlCKvfdwK8fcScmRJnKMc1V8rbrFy7CcorCT%2BachGxckiBa9mzaCBDh7NMbjUvOethdhLOPM%2BnHc7qaZJYHovUPIiys6CwKVD7x1jv6ZrcAEC2GCGcNAdFE%2BqS%2F%2BAku5a7Vc%2FrRk8j49S0eu3WxLUcKR6brJkJrz%2FcZYx0FKZMuKaoU1tzJuhlbTsG7fwTvwtGApJwDCGzey%2FBjqkAQJ40khwTULl77Y0Gbg5EFLfvXyiQe0pZjlUXo7L5eQ50Zzu2CLHGslN%2FEN8jiZWe%2BQV8HeFO0TcCl27sGauP7AknRFwLl7NigZMQ3U26Wc7rBjlSZ%2Bv9E6J4wkvGBU9YRoETmxYBq65YHQoLETsRVDv4h6bMfVpGQco%2FOxn3xy6fGGv2YnYT7ll1V26UPViQt3Bu393Zc6CicC%2FTI3Kmdb4A7iz&X-Amz-Signature=dc5e5013dd4633b47ea3484a4b7b28167d1153cba5157a0ca7ece8a244733a1f&X-Amz-SignedHeaders=host&x-id=GetObject)
