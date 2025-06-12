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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NF7XC2G%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T081306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDkwBFi4oU7SAOlQOgnPhvXXlPWYkyPkVZ52PeV4IU60QIhAPfWvIaH5I8ttLpFhRryIJgH778a0X6J1%2B7VhIy8G1%2FvKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9sOaxTc8iyFuEje0q3AOQNyq%2BWUm%2BrhsGkLxs7KfM1uGV8M6B6HKxaiNftE623cjuQaTcTiMshrrhO1L0HUKIF77v4f8%2BwEoQ2xXAJYBTgsA1BzGvIZJhjF5HYOoZun4cXpjM%2BvdxR4uAPyfEQTrauIbPPVmGgvWwUmJBGoe0oz4a024%2BxvVlgCCmChE0Cygq7iFswYMnwKBlfBDGge%2FtSkOQQE5X4w3uFhLjizatnk12k08LxbGk0IBYDehUdFxNUmphQgjP96spxgeSLMy2zbbPPLIe5AcG%2FaaOwxT5RHJEhImrSNqr9V2PEC3acASjEsDikC0kV02K8qXSVDuwAno6fprJsB4N3X0B9sgNr%2BC5hI6qaTR8TWXgDR3vlveI5ojHg3nUNRJRNoUC8igy5Kof0l9Kr1nuQVDUV3n3NlFoeQBqxnDk751WbQ1xtVA%2B%2FZgAceayboFns4GXteaoc4rMAqWfr3O6kHfZ5NBdr%2BK0CfEk7Nk51QKXjx4%2BTNP8RN5CDiTY3rjDD1GDOMb29hczXkBOuUUBi9%2BN%2F2ot5S9KPVsm6vPli6Wam2juDVQbzsbP1uhzu%2F8k8l4aHNoBUlCtNypnkfbDelUfVxg7tCr0eAsWSsxpH0RGFxes%2F2gqIR5G6CdoJ4TJ%2FjDFiKrCBjqkAYoBEVFoQhTrbG8zKL4o%2BEMalEfaz69%2BsiQ1WJ4KplhTkrvQiO93s9RFW5lVHIBP%2Fo7sozb76A%2F9ozHUbvZbM6Y699JYEJ%2BwnCl8Fa3lRJriJCtg%2BfcIlxD0PDsjV2UtY6KvVGxN5i%2FvcD8JZzQtCUsnkOz9bOzoIwiCOoyDn4aZdnHA057gsZouJQ58uvRr7Feljl0DEvBw59yrWwdkPrUtwr2D&X-Amz-Signature=54b011e90d0cbe611e26d38fb02a22ef9d44706ac7987563525fcd7b91f854ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NF7XC2G%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T081306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDkwBFi4oU7SAOlQOgnPhvXXlPWYkyPkVZ52PeV4IU60QIhAPfWvIaH5I8ttLpFhRryIJgH778a0X6J1%2B7VhIy8G1%2FvKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9sOaxTc8iyFuEje0q3AOQNyq%2BWUm%2BrhsGkLxs7KfM1uGV8M6B6HKxaiNftE623cjuQaTcTiMshrrhO1L0HUKIF77v4f8%2BwEoQ2xXAJYBTgsA1BzGvIZJhjF5HYOoZun4cXpjM%2BvdxR4uAPyfEQTrauIbPPVmGgvWwUmJBGoe0oz4a024%2BxvVlgCCmChE0Cygq7iFswYMnwKBlfBDGge%2FtSkOQQE5X4w3uFhLjizatnk12k08LxbGk0IBYDehUdFxNUmphQgjP96spxgeSLMy2zbbPPLIe5AcG%2FaaOwxT5RHJEhImrSNqr9V2PEC3acASjEsDikC0kV02K8qXSVDuwAno6fprJsB4N3X0B9sgNr%2BC5hI6qaTR8TWXgDR3vlveI5ojHg3nUNRJRNoUC8igy5Kof0l9Kr1nuQVDUV3n3NlFoeQBqxnDk751WbQ1xtVA%2B%2FZgAceayboFns4GXteaoc4rMAqWfr3O6kHfZ5NBdr%2BK0CfEk7Nk51QKXjx4%2BTNP8RN5CDiTY3rjDD1GDOMb29hczXkBOuUUBi9%2BN%2F2ot5S9KPVsm6vPli6Wam2juDVQbzsbP1uhzu%2F8k8l4aHNoBUlCtNypnkfbDelUfVxg7tCr0eAsWSsxpH0RGFxes%2F2gqIR5G6CdoJ4TJ%2FjDFiKrCBjqkAYoBEVFoQhTrbG8zKL4o%2BEMalEfaz69%2BsiQ1WJ4KplhTkrvQiO93s9RFW5lVHIBP%2Fo7sozb76A%2F9ozHUbvZbM6Y699JYEJ%2BwnCl8Fa3lRJriJCtg%2BfcIlxD0PDsjV2UtY6KvVGxN5i%2FvcD8JZzQtCUsnkOz9bOzoIwiCOoyDn4aZdnHA057gsZouJQ58uvRr7Feljl0DEvBw59yrWwdkPrUtwr2D&X-Amz-Signature=de9db1855cd0efee3c15e6df41e9e533d4b4fd0859408eaef99846eda6acb97a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NF7XC2G%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T081306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDkwBFi4oU7SAOlQOgnPhvXXlPWYkyPkVZ52PeV4IU60QIhAPfWvIaH5I8ttLpFhRryIJgH778a0X6J1%2B7VhIy8G1%2FvKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9sOaxTc8iyFuEje0q3AOQNyq%2BWUm%2BrhsGkLxs7KfM1uGV8M6B6HKxaiNftE623cjuQaTcTiMshrrhO1L0HUKIF77v4f8%2BwEoQ2xXAJYBTgsA1BzGvIZJhjF5HYOoZun4cXpjM%2BvdxR4uAPyfEQTrauIbPPVmGgvWwUmJBGoe0oz4a024%2BxvVlgCCmChE0Cygq7iFswYMnwKBlfBDGge%2FtSkOQQE5X4w3uFhLjizatnk12k08LxbGk0IBYDehUdFxNUmphQgjP96spxgeSLMy2zbbPPLIe5AcG%2FaaOwxT5RHJEhImrSNqr9V2PEC3acASjEsDikC0kV02K8qXSVDuwAno6fprJsB4N3X0B9sgNr%2BC5hI6qaTR8TWXgDR3vlveI5ojHg3nUNRJRNoUC8igy5Kof0l9Kr1nuQVDUV3n3NlFoeQBqxnDk751WbQ1xtVA%2B%2FZgAceayboFns4GXteaoc4rMAqWfr3O6kHfZ5NBdr%2BK0CfEk7Nk51QKXjx4%2BTNP8RN5CDiTY3rjDD1GDOMb29hczXkBOuUUBi9%2BN%2F2ot5S9KPVsm6vPli6Wam2juDVQbzsbP1uhzu%2F8k8l4aHNoBUlCtNypnkfbDelUfVxg7tCr0eAsWSsxpH0RGFxes%2F2gqIR5G6CdoJ4TJ%2FjDFiKrCBjqkAYoBEVFoQhTrbG8zKL4o%2BEMalEfaz69%2BsiQ1WJ4KplhTkrvQiO93s9RFW5lVHIBP%2Fo7sozb76A%2F9ozHUbvZbM6Y699JYEJ%2BwnCl8Fa3lRJriJCtg%2BfcIlxD0PDsjV2UtY6KvVGxN5i%2FvcD8JZzQtCUsnkOz9bOzoIwiCOoyDn4aZdnHA057gsZouJQ58uvRr7Feljl0DEvBw59yrWwdkPrUtwr2D&X-Amz-Signature=d920a3ba49c9728ed7a89b3b0828ee59dbd733bb90532da265c2bcca5d0c5034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NF7XC2G%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T081306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDkwBFi4oU7SAOlQOgnPhvXXlPWYkyPkVZ52PeV4IU60QIhAPfWvIaH5I8ttLpFhRryIJgH778a0X6J1%2B7VhIy8G1%2FvKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9sOaxTc8iyFuEje0q3AOQNyq%2BWUm%2BrhsGkLxs7KfM1uGV8M6B6HKxaiNftE623cjuQaTcTiMshrrhO1L0HUKIF77v4f8%2BwEoQ2xXAJYBTgsA1BzGvIZJhjF5HYOoZun4cXpjM%2BvdxR4uAPyfEQTrauIbPPVmGgvWwUmJBGoe0oz4a024%2BxvVlgCCmChE0Cygq7iFswYMnwKBlfBDGge%2FtSkOQQE5X4w3uFhLjizatnk12k08LxbGk0IBYDehUdFxNUmphQgjP96spxgeSLMy2zbbPPLIe5AcG%2FaaOwxT5RHJEhImrSNqr9V2PEC3acASjEsDikC0kV02K8qXSVDuwAno6fprJsB4N3X0B9sgNr%2BC5hI6qaTR8TWXgDR3vlveI5ojHg3nUNRJRNoUC8igy5Kof0l9Kr1nuQVDUV3n3NlFoeQBqxnDk751WbQ1xtVA%2B%2FZgAceayboFns4GXteaoc4rMAqWfr3O6kHfZ5NBdr%2BK0CfEk7Nk51QKXjx4%2BTNP8RN5CDiTY3rjDD1GDOMb29hczXkBOuUUBi9%2BN%2F2ot5S9KPVsm6vPli6Wam2juDVQbzsbP1uhzu%2F8k8l4aHNoBUlCtNypnkfbDelUfVxg7tCr0eAsWSsxpH0RGFxes%2F2gqIR5G6CdoJ4TJ%2FjDFiKrCBjqkAYoBEVFoQhTrbG8zKL4o%2BEMalEfaz69%2BsiQ1WJ4KplhTkrvQiO93s9RFW5lVHIBP%2Fo7sozb76A%2F9ozHUbvZbM6Y699JYEJ%2BwnCl8Fa3lRJriJCtg%2BfcIlxD0PDsjV2UtY6KvVGxN5i%2FvcD8JZzQtCUsnkOz9bOzoIwiCOoyDn4aZdnHA057gsZouJQ58uvRr7Feljl0DEvBw59yrWwdkPrUtwr2D&X-Amz-Signature=80520ff8d3fa9fe6f0dd92c8ccf5099139532f4e66b6687c16488ab79d2325a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NF7XC2G%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T081306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDkwBFi4oU7SAOlQOgnPhvXXlPWYkyPkVZ52PeV4IU60QIhAPfWvIaH5I8ttLpFhRryIJgH778a0X6J1%2B7VhIy8G1%2FvKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9sOaxTc8iyFuEje0q3AOQNyq%2BWUm%2BrhsGkLxs7KfM1uGV8M6B6HKxaiNftE623cjuQaTcTiMshrrhO1L0HUKIF77v4f8%2BwEoQ2xXAJYBTgsA1BzGvIZJhjF5HYOoZun4cXpjM%2BvdxR4uAPyfEQTrauIbPPVmGgvWwUmJBGoe0oz4a024%2BxvVlgCCmChE0Cygq7iFswYMnwKBlfBDGge%2FtSkOQQE5X4w3uFhLjizatnk12k08LxbGk0IBYDehUdFxNUmphQgjP96spxgeSLMy2zbbPPLIe5AcG%2FaaOwxT5RHJEhImrSNqr9V2PEC3acASjEsDikC0kV02K8qXSVDuwAno6fprJsB4N3X0B9sgNr%2BC5hI6qaTR8TWXgDR3vlveI5ojHg3nUNRJRNoUC8igy5Kof0l9Kr1nuQVDUV3n3NlFoeQBqxnDk751WbQ1xtVA%2B%2FZgAceayboFns4GXteaoc4rMAqWfr3O6kHfZ5NBdr%2BK0CfEk7Nk51QKXjx4%2BTNP8RN5CDiTY3rjDD1GDOMb29hczXkBOuUUBi9%2BN%2F2ot5S9KPVsm6vPli6Wam2juDVQbzsbP1uhzu%2F8k8l4aHNoBUlCtNypnkfbDelUfVxg7tCr0eAsWSsxpH0RGFxes%2F2gqIR5G6CdoJ4TJ%2FjDFiKrCBjqkAYoBEVFoQhTrbG8zKL4o%2BEMalEfaz69%2BsiQ1WJ4KplhTkrvQiO93s9RFW5lVHIBP%2Fo7sozb76A%2F9ozHUbvZbM6Y699JYEJ%2BwnCl8Fa3lRJriJCtg%2BfcIlxD0PDsjV2UtY6KvVGxN5i%2FvcD8JZzQtCUsnkOz9bOzoIwiCOoyDn4aZdnHA057gsZouJQ58uvRr7Feljl0DEvBw59yrWwdkPrUtwr2D&X-Amz-Signature=b47a056f9526a82363410e36d64e36322843fd6993a7348c62828a00ab3361af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NF7XC2G%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T081306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDkwBFi4oU7SAOlQOgnPhvXXlPWYkyPkVZ52PeV4IU60QIhAPfWvIaH5I8ttLpFhRryIJgH778a0X6J1%2B7VhIy8G1%2FvKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9sOaxTc8iyFuEje0q3AOQNyq%2BWUm%2BrhsGkLxs7KfM1uGV8M6B6HKxaiNftE623cjuQaTcTiMshrrhO1L0HUKIF77v4f8%2BwEoQ2xXAJYBTgsA1BzGvIZJhjF5HYOoZun4cXpjM%2BvdxR4uAPyfEQTrauIbPPVmGgvWwUmJBGoe0oz4a024%2BxvVlgCCmChE0Cygq7iFswYMnwKBlfBDGge%2FtSkOQQE5X4w3uFhLjizatnk12k08LxbGk0IBYDehUdFxNUmphQgjP96spxgeSLMy2zbbPPLIe5AcG%2FaaOwxT5RHJEhImrSNqr9V2PEC3acASjEsDikC0kV02K8qXSVDuwAno6fprJsB4N3X0B9sgNr%2BC5hI6qaTR8TWXgDR3vlveI5ojHg3nUNRJRNoUC8igy5Kof0l9Kr1nuQVDUV3n3NlFoeQBqxnDk751WbQ1xtVA%2B%2FZgAceayboFns4GXteaoc4rMAqWfr3O6kHfZ5NBdr%2BK0CfEk7Nk51QKXjx4%2BTNP8RN5CDiTY3rjDD1GDOMb29hczXkBOuUUBi9%2BN%2F2ot5S9KPVsm6vPli6Wam2juDVQbzsbP1uhzu%2F8k8l4aHNoBUlCtNypnkfbDelUfVxg7tCr0eAsWSsxpH0RGFxes%2F2gqIR5G6CdoJ4TJ%2FjDFiKrCBjqkAYoBEVFoQhTrbG8zKL4o%2BEMalEfaz69%2BsiQ1WJ4KplhTkrvQiO93s9RFW5lVHIBP%2Fo7sozb76A%2F9ozHUbvZbM6Y699JYEJ%2BwnCl8Fa3lRJriJCtg%2BfcIlxD0PDsjV2UtY6KvVGxN5i%2FvcD8JZzQtCUsnkOz9bOzoIwiCOoyDn4aZdnHA057gsZouJQ58uvRr7Feljl0DEvBw59yrWwdkPrUtwr2D&X-Amz-Signature=48550ffce7c464d7e0ee8c6f3135106deb22fff545a9f32c426bf48fe4285aaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
