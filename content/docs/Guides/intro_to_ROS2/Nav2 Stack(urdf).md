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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZPS5OOX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHeUlemv8qteRwcLX%2BfwSFQ%2Bd2q4Kgjndj59lCRGidgxAiAWTs8vb7ezZKJy3enwLimv2%2FjzqTrmGsDLfi6RfT63iyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhw21ro68US2lA6bkKtwD2xVPBd6Nd9xCwzvoh6nBqKfJ2wUuvT4lhlaLcPqipyDr7z11TPkZ6tYfOCfj32tS%2FgamLSqdb13Dn0CEJWn0f08FSdH77Zvq9JtS8SJBnj67D5KtPC4I%2Bv2ma0Mv9XS5UTgPouGRFCTEXkogniva9QKYbqYun947KfYDno2Cztx%2BBkEhs2xNO88TMAyrAVybXI9vcgAnsxsKHrrrKZPzfikZq%2BO7BA%2B1rl2w7PK%2B5KezaAvU39ggxgLpJ%2FdRQFIKkXLpk76BSpddgL38c0nf0eT%2Ff11IvK2rITwsKm9KZ1konxXnibuIz13reSp2RoDAvCfCGBqAvxk0HU6G1izdm%2BFZC7%2FSzasd3ax6U%2FhxSx3kFF1ma7eJ6e2rjIOcJ2jAe8NJSweE8djQ2bzoFjKS%2BKjJOT4nmPfuaXG7ToRaiuQjBWX2NPRAEOHU2IQvahc5k1CwRNs9dMr85AIj0xgUyXZVgtpvKp4%2BMdrvFdx5liThKaPZJO8%2BHsmJHoLTAAsrfqtN%2FFwFV6%2BtLAOoUkm0%2B9nQMcXo2KqKfi73h3GvMYUhoB42whsWV0zpbzcVQFvBQkF6VmgGNVHDj1c7E%2FVGse8aFuC4hTEfZhjLsyiLaayobGl0ufOI4JKxYY8wspCKvgY6pgE%2Bb3mFT4d6HYyNcQnCSqjlqk5ZHlTIGpWF4M8Sm7jW9D9W8jFwxH7PGPj%2FimBKGTGvZM2bM%2BWdlLuboNJ%2BEo9K3O5hQpueCobsE1MI6DMeWQ72KFbqlyojJV%2BXRimSEWkGrsTM%2Bp9vrroexWJ5kJZG2eQ%2BOg3gWnX3nX6eOqSne6Sx5Rz3KFWw0w1kjWsfZzaC9pDtgI1JscgSwSWedd5ceNPr4ixV&X-Amz-Signature=91ea4f128ebbaf6d76ac8f42e581f7b8bbcf522fa2f2971eb5ec7da62c41c9b7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZPS5OOX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHeUlemv8qteRwcLX%2BfwSFQ%2Bd2q4Kgjndj59lCRGidgxAiAWTs8vb7ezZKJy3enwLimv2%2FjzqTrmGsDLfi6RfT63iyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhw21ro68US2lA6bkKtwD2xVPBd6Nd9xCwzvoh6nBqKfJ2wUuvT4lhlaLcPqipyDr7z11TPkZ6tYfOCfj32tS%2FgamLSqdb13Dn0CEJWn0f08FSdH77Zvq9JtS8SJBnj67D5KtPC4I%2Bv2ma0Mv9XS5UTgPouGRFCTEXkogniva9QKYbqYun947KfYDno2Cztx%2BBkEhs2xNO88TMAyrAVybXI9vcgAnsxsKHrrrKZPzfikZq%2BO7BA%2B1rl2w7PK%2B5KezaAvU39ggxgLpJ%2FdRQFIKkXLpk76BSpddgL38c0nf0eT%2Ff11IvK2rITwsKm9KZ1konxXnibuIz13reSp2RoDAvCfCGBqAvxk0HU6G1izdm%2BFZC7%2FSzasd3ax6U%2FhxSx3kFF1ma7eJ6e2rjIOcJ2jAe8NJSweE8djQ2bzoFjKS%2BKjJOT4nmPfuaXG7ToRaiuQjBWX2NPRAEOHU2IQvahc5k1CwRNs9dMr85AIj0xgUyXZVgtpvKp4%2BMdrvFdx5liThKaPZJO8%2BHsmJHoLTAAsrfqtN%2FFwFV6%2BtLAOoUkm0%2B9nQMcXo2KqKfi73h3GvMYUhoB42whsWV0zpbzcVQFvBQkF6VmgGNVHDj1c7E%2FVGse8aFuC4hTEfZhjLsyiLaayobGl0ufOI4JKxYY8wspCKvgY6pgE%2Bb3mFT4d6HYyNcQnCSqjlqk5ZHlTIGpWF4M8Sm7jW9D9W8jFwxH7PGPj%2FimBKGTGvZM2bM%2BWdlLuboNJ%2BEo9K3O5hQpueCobsE1MI6DMeWQ72KFbqlyojJV%2BXRimSEWkGrsTM%2Bp9vrroexWJ5kJZG2eQ%2BOg3gWnX3nX6eOqSne6Sx5Rz3KFWw0w1kjWsfZzaC9pDtgI1JscgSwSWedd5ceNPr4ixV&X-Amz-Signature=1f2aabb92c156922018fd32802f31543872b63508067e553dff2dc670fded29a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZPS5OOX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHeUlemv8qteRwcLX%2BfwSFQ%2Bd2q4Kgjndj59lCRGidgxAiAWTs8vb7ezZKJy3enwLimv2%2FjzqTrmGsDLfi6RfT63iyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhw21ro68US2lA6bkKtwD2xVPBd6Nd9xCwzvoh6nBqKfJ2wUuvT4lhlaLcPqipyDr7z11TPkZ6tYfOCfj32tS%2FgamLSqdb13Dn0CEJWn0f08FSdH77Zvq9JtS8SJBnj67D5KtPC4I%2Bv2ma0Mv9XS5UTgPouGRFCTEXkogniva9QKYbqYun947KfYDno2Cztx%2BBkEhs2xNO88TMAyrAVybXI9vcgAnsxsKHrrrKZPzfikZq%2BO7BA%2B1rl2w7PK%2B5KezaAvU39ggxgLpJ%2FdRQFIKkXLpk76BSpddgL38c0nf0eT%2Ff11IvK2rITwsKm9KZ1konxXnibuIz13reSp2RoDAvCfCGBqAvxk0HU6G1izdm%2BFZC7%2FSzasd3ax6U%2FhxSx3kFF1ma7eJ6e2rjIOcJ2jAe8NJSweE8djQ2bzoFjKS%2BKjJOT4nmPfuaXG7ToRaiuQjBWX2NPRAEOHU2IQvahc5k1CwRNs9dMr85AIj0xgUyXZVgtpvKp4%2BMdrvFdx5liThKaPZJO8%2BHsmJHoLTAAsrfqtN%2FFwFV6%2BtLAOoUkm0%2B9nQMcXo2KqKfi73h3GvMYUhoB42whsWV0zpbzcVQFvBQkF6VmgGNVHDj1c7E%2FVGse8aFuC4hTEfZhjLsyiLaayobGl0ufOI4JKxYY8wspCKvgY6pgE%2Bb3mFT4d6HYyNcQnCSqjlqk5ZHlTIGpWF4M8Sm7jW9D9W8jFwxH7PGPj%2FimBKGTGvZM2bM%2BWdlLuboNJ%2BEo9K3O5hQpueCobsE1MI6DMeWQ72KFbqlyojJV%2BXRimSEWkGrsTM%2Bp9vrroexWJ5kJZG2eQ%2BOg3gWnX3nX6eOqSne6Sx5Rz3KFWw0w1kjWsfZzaC9pDtgI1JscgSwSWedd5ceNPr4ixV&X-Amz-Signature=dcdf4d7f688b6d94a8f615c88589c2278d4c3dd1ed967fc8d970e2a9a66686e3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZPS5OOX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHeUlemv8qteRwcLX%2BfwSFQ%2Bd2q4Kgjndj59lCRGidgxAiAWTs8vb7ezZKJy3enwLimv2%2FjzqTrmGsDLfi6RfT63iyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhw21ro68US2lA6bkKtwD2xVPBd6Nd9xCwzvoh6nBqKfJ2wUuvT4lhlaLcPqipyDr7z11TPkZ6tYfOCfj32tS%2FgamLSqdb13Dn0CEJWn0f08FSdH77Zvq9JtS8SJBnj67D5KtPC4I%2Bv2ma0Mv9XS5UTgPouGRFCTEXkogniva9QKYbqYun947KfYDno2Cztx%2BBkEhs2xNO88TMAyrAVybXI9vcgAnsxsKHrrrKZPzfikZq%2BO7BA%2B1rl2w7PK%2B5KezaAvU39ggxgLpJ%2FdRQFIKkXLpk76BSpddgL38c0nf0eT%2Ff11IvK2rITwsKm9KZ1konxXnibuIz13reSp2RoDAvCfCGBqAvxk0HU6G1izdm%2BFZC7%2FSzasd3ax6U%2FhxSx3kFF1ma7eJ6e2rjIOcJ2jAe8NJSweE8djQ2bzoFjKS%2BKjJOT4nmPfuaXG7ToRaiuQjBWX2NPRAEOHU2IQvahc5k1CwRNs9dMr85AIj0xgUyXZVgtpvKp4%2BMdrvFdx5liThKaPZJO8%2BHsmJHoLTAAsrfqtN%2FFwFV6%2BtLAOoUkm0%2B9nQMcXo2KqKfi73h3GvMYUhoB42whsWV0zpbzcVQFvBQkF6VmgGNVHDj1c7E%2FVGse8aFuC4hTEfZhjLsyiLaayobGl0ufOI4JKxYY8wspCKvgY6pgE%2Bb3mFT4d6HYyNcQnCSqjlqk5ZHlTIGpWF4M8Sm7jW9D9W8jFwxH7PGPj%2FimBKGTGvZM2bM%2BWdlLuboNJ%2BEo9K3O5hQpueCobsE1MI6DMeWQ72KFbqlyojJV%2BXRimSEWkGrsTM%2Bp9vrroexWJ5kJZG2eQ%2BOg3gWnX3nX6eOqSne6Sx5Rz3KFWw0w1kjWsfZzaC9pDtgI1JscgSwSWedd5ceNPr4ixV&X-Amz-Signature=b523101e4bf5ab10ae80988e75811fb1c9d4c73361a8fa873f295e1fd4876272&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZPS5OOX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHeUlemv8qteRwcLX%2BfwSFQ%2Bd2q4Kgjndj59lCRGidgxAiAWTs8vb7ezZKJy3enwLimv2%2FjzqTrmGsDLfi6RfT63iyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhw21ro68US2lA6bkKtwD2xVPBd6Nd9xCwzvoh6nBqKfJ2wUuvT4lhlaLcPqipyDr7z11TPkZ6tYfOCfj32tS%2FgamLSqdb13Dn0CEJWn0f08FSdH77Zvq9JtS8SJBnj67D5KtPC4I%2Bv2ma0Mv9XS5UTgPouGRFCTEXkogniva9QKYbqYun947KfYDno2Cztx%2BBkEhs2xNO88TMAyrAVybXI9vcgAnsxsKHrrrKZPzfikZq%2BO7BA%2B1rl2w7PK%2B5KezaAvU39ggxgLpJ%2FdRQFIKkXLpk76BSpddgL38c0nf0eT%2Ff11IvK2rITwsKm9KZ1konxXnibuIz13reSp2RoDAvCfCGBqAvxk0HU6G1izdm%2BFZC7%2FSzasd3ax6U%2FhxSx3kFF1ma7eJ6e2rjIOcJ2jAe8NJSweE8djQ2bzoFjKS%2BKjJOT4nmPfuaXG7ToRaiuQjBWX2NPRAEOHU2IQvahc5k1CwRNs9dMr85AIj0xgUyXZVgtpvKp4%2BMdrvFdx5liThKaPZJO8%2BHsmJHoLTAAsrfqtN%2FFwFV6%2BtLAOoUkm0%2B9nQMcXo2KqKfi73h3GvMYUhoB42whsWV0zpbzcVQFvBQkF6VmgGNVHDj1c7E%2FVGse8aFuC4hTEfZhjLsyiLaayobGl0ufOI4JKxYY8wspCKvgY6pgE%2Bb3mFT4d6HYyNcQnCSqjlqk5ZHlTIGpWF4M8Sm7jW9D9W8jFwxH7PGPj%2FimBKGTGvZM2bM%2BWdlLuboNJ%2BEo9K3O5hQpueCobsE1MI6DMeWQ72KFbqlyojJV%2BXRimSEWkGrsTM%2Bp9vrroexWJ5kJZG2eQ%2BOg3gWnX3nX6eOqSne6Sx5Rz3KFWw0w1kjWsfZzaC9pDtgI1JscgSwSWedd5ceNPr4ixV&X-Amz-Signature=359ed83bf14b95784833953f900819ebfe0a6708559a6de9a21ed1f75744101e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZPS5OOX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHeUlemv8qteRwcLX%2BfwSFQ%2Bd2q4Kgjndj59lCRGidgxAiAWTs8vb7ezZKJy3enwLimv2%2FjzqTrmGsDLfi6RfT63iyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhw21ro68US2lA6bkKtwD2xVPBd6Nd9xCwzvoh6nBqKfJ2wUuvT4lhlaLcPqipyDr7z11TPkZ6tYfOCfj32tS%2FgamLSqdb13Dn0CEJWn0f08FSdH77Zvq9JtS8SJBnj67D5KtPC4I%2Bv2ma0Mv9XS5UTgPouGRFCTEXkogniva9QKYbqYun947KfYDno2Cztx%2BBkEhs2xNO88TMAyrAVybXI9vcgAnsxsKHrrrKZPzfikZq%2BO7BA%2B1rl2w7PK%2B5KezaAvU39ggxgLpJ%2FdRQFIKkXLpk76BSpddgL38c0nf0eT%2Ff11IvK2rITwsKm9KZ1konxXnibuIz13reSp2RoDAvCfCGBqAvxk0HU6G1izdm%2BFZC7%2FSzasd3ax6U%2FhxSx3kFF1ma7eJ6e2rjIOcJ2jAe8NJSweE8djQ2bzoFjKS%2BKjJOT4nmPfuaXG7ToRaiuQjBWX2NPRAEOHU2IQvahc5k1CwRNs9dMr85AIj0xgUyXZVgtpvKp4%2BMdrvFdx5liThKaPZJO8%2BHsmJHoLTAAsrfqtN%2FFwFV6%2BtLAOoUkm0%2B9nQMcXo2KqKfi73h3GvMYUhoB42whsWV0zpbzcVQFvBQkF6VmgGNVHDj1c7E%2FVGse8aFuC4hTEfZhjLsyiLaayobGl0ufOI4JKxYY8wspCKvgY6pgE%2Bb3mFT4d6HYyNcQnCSqjlqk5ZHlTIGpWF4M8Sm7jW9D9W8jFwxH7PGPj%2FimBKGTGvZM2bM%2BWdlLuboNJ%2BEo9K3O5hQpueCobsE1MI6DMeWQ72KFbqlyojJV%2BXRimSEWkGrsTM%2Bp9vrroexWJ5kJZG2eQ%2BOg3gWnX3nX6eOqSne6Sx5Rz3KFWw0w1kjWsfZzaC9pDtgI1JscgSwSWedd5ceNPr4ixV&X-Amz-Signature=70200f8979f7bd25f4c6c59f86044f4adc2776128f414c41050d3c7c34b7bb67&X-Amz-SignedHeaders=host&x-id=GetObject)
