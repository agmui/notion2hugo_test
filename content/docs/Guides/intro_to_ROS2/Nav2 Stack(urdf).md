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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWBCIJIF%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdrUZnt4zfPopAMVJsBqbrKL5enfhh9rMAnT%2BvbY8KSQIhAIu%2BQEIXKtDIQW3jDhh5nRnJmm6I2eQVhmyri163fAoRKv8DCBAQABoMNjM3NDIzMTgzODA1Igx8TS1OFNhVW1lBZUwq3AMTOIqouisKdYCshCHfVf4bUcbynxlo9W2iv6k%2F4AWTpTykEhIdqHXZqAJ36b82HryYFer6D4xeKe9bdc5ZuAcTrj%2FBNvn5i5XGlEQezAPheUX%2BkZ1Ua%2BuX3KJi2fG5vvMd%2F8fYUWQ7xHRRDmOy5E5ngkDUJ9prAdLfojXj09jVz8PwCEog3DHGgZeXc9uIjOVEIJp7nlVo2JaXfuMDQYc2NvBhMPP94H0l00ICZ6LzYH02u43W72JNXf%2B4nltpe5hnOZHzQl3TU8Q1JowZai6ApAkwOaYrV2vxiZU7BTmUzHnBgbBO%2F7TtHjpZxHQgjJeE3ig%2Bb%2FhMraeAobxMqFK4T6yxOyf5%2FaKmb1hUyg7bwCpas5rOpC3rssO3eDzSh5vuPXG6CIVpF%2BCUm2FAhzul6FncS5RcFk3jASMZFR21mcBW8Inq4wCSjElevi43dcHflbtRY2G2hIEyt7wYPDDwfiFwvyai3vr5iVfWj4oJK%2FGyy2LjgdrQzBCDCPAOmfHRB0MI3xoEjyq04bahdmI7el%2BViNasFkS%2BDCVQJnRHo9daul4PP1iov03SLTIkX7PSDfCvvmAsui5m7okdsMdGHXRVFvrgA1HhHShtcOp04qLeUMJWv1jPU%2BX0ZTDwrom%2FBjqkAfcdtqjrtR%2Bk1FI4jH3W67nXh3nH%2BrPFQASew%2F0SJu9cuK1lxhnHUV6MXmFIKDKLRr0LTGGeqZnF986qdiygBoCXWsAjJo0S36Gaiz4UBA6dEk7UAVLz0%2B6sZvW4NUOS8DNvgX%2BAt3fF9tKnPb4%2BWxrj7l69pvWDJlb9OEIxLT3xMXRzjARI%2F0j%2FX53K8fbub%2FzxfAALI4whozccXMS28WFy50pA&X-Amz-Signature=4427ea7f4dfc23a86af1a0b57b93f46509730de096252ca527b373e5d01cb9d9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWBCIJIF%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdrUZnt4zfPopAMVJsBqbrKL5enfhh9rMAnT%2BvbY8KSQIhAIu%2BQEIXKtDIQW3jDhh5nRnJmm6I2eQVhmyri163fAoRKv8DCBAQABoMNjM3NDIzMTgzODA1Igx8TS1OFNhVW1lBZUwq3AMTOIqouisKdYCshCHfVf4bUcbynxlo9W2iv6k%2F4AWTpTykEhIdqHXZqAJ36b82HryYFer6D4xeKe9bdc5ZuAcTrj%2FBNvn5i5XGlEQezAPheUX%2BkZ1Ua%2BuX3KJi2fG5vvMd%2F8fYUWQ7xHRRDmOy5E5ngkDUJ9prAdLfojXj09jVz8PwCEog3DHGgZeXc9uIjOVEIJp7nlVo2JaXfuMDQYc2NvBhMPP94H0l00ICZ6LzYH02u43W72JNXf%2B4nltpe5hnOZHzQl3TU8Q1JowZai6ApAkwOaYrV2vxiZU7BTmUzHnBgbBO%2F7TtHjpZxHQgjJeE3ig%2Bb%2FhMraeAobxMqFK4T6yxOyf5%2FaKmb1hUyg7bwCpas5rOpC3rssO3eDzSh5vuPXG6CIVpF%2BCUm2FAhzul6FncS5RcFk3jASMZFR21mcBW8Inq4wCSjElevi43dcHflbtRY2G2hIEyt7wYPDDwfiFwvyai3vr5iVfWj4oJK%2FGyy2LjgdrQzBCDCPAOmfHRB0MI3xoEjyq04bahdmI7el%2BViNasFkS%2BDCVQJnRHo9daul4PP1iov03SLTIkX7PSDfCvvmAsui5m7okdsMdGHXRVFvrgA1HhHShtcOp04qLeUMJWv1jPU%2BX0ZTDwrom%2FBjqkAfcdtqjrtR%2Bk1FI4jH3W67nXh3nH%2BrPFQASew%2F0SJu9cuK1lxhnHUV6MXmFIKDKLRr0LTGGeqZnF986qdiygBoCXWsAjJo0S36Gaiz4UBA6dEk7UAVLz0%2B6sZvW4NUOS8DNvgX%2BAt3fF9tKnPb4%2BWxrj7l69pvWDJlb9OEIxLT3xMXRzjARI%2F0j%2FX53K8fbub%2FzxfAALI4whozccXMS28WFy50pA&X-Amz-Signature=604bdbff81356f9bb6a1486e370cb5571ce332213b6c2a3bd28db8339e0ad392&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWBCIJIF%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdrUZnt4zfPopAMVJsBqbrKL5enfhh9rMAnT%2BvbY8KSQIhAIu%2BQEIXKtDIQW3jDhh5nRnJmm6I2eQVhmyri163fAoRKv8DCBAQABoMNjM3NDIzMTgzODA1Igx8TS1OFNhVW1lBZUwq3AMTOIqouisKdYCshCHfVf4bUcbynxlo9W2iv6k%2F4AWTpTykEhIdqHXZqAJ36b82HryYFer6D4xeKe9bdc5ZuAcTrj%2FBNvn5i5XGlEQezAPheUX%2BkZ1Ua%2BuX3KJi2fG5vvMd%2F8fYUWQ7xHRRDmOy5E5ngkDUJ9prAdLfojXj09jVz8PwCEog3DHGgZeXc9uIjOVEIJp7nlVo2JaXfuMDQYc2NvBhMPP94H0l00ICZ6LzYH02u43W72JNXf%2B4nltpe5hnOZHzQl3TU8Q1JowZai6ApAkwOaYrV2vxiZU7BTmUzHnBgbBO%2F7TtHjpZxHQgjJeE3ig%2Bb%2FhMraeAobxMqFK4T6yxOyf5%2FaKmb1hUyg7bwCpas5rOpC3rssO3eDzSh5vuPXG6CIVpF%2BCUm2FAhzul6FncS5RcFk3jASMZFR21mcBW8Inq4wCSjElevi43dcHflbtRY2G2hIEyt7wYPDDwfiFwvyai3vr5iVfWj4oJK%2FGyy2LjgdrQzBCDCPAOmfHRB0MI3xoEjyq04bahdmI7el%2BViNasFkS%2BDCVQJnRHo9daul4PP1iov03SLTIkX7PSDfCvvmAsui5m7okdsMdGHXRVFvrgA1HhHShtcOp04qLeUMJWv1jPU%2BX0ZTDwrom%2FBjqkAfcdtqjrtR%2Bk1FI4jH3W67nXh3nH%2BrPFQASew%2F0SJu9cuK1lxhnHUV6MXmFIKDKLRr0LTGGeqZnF986qdiygBoCXWsAjJo0S36Gaiz4UBA6dEk7UAVLz0%2B6sZvW4NUOS8DNvgX%2BAt3fF9tKnPb4%2BWxrj7l69pvWDJlb9OEIxLT3xMXRzjARI%2F0j%2FX53K8fbub%2FzxfAALI4whozccXMS28WFy50pA&X-Amz-Signature=cde4d7e3a0ae1a6af08c925b7a007afb3656910bfd5847ea5a9d61f8bcd07c3c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWBCIJIF%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdrUZnt4zfPopAMVJsBqbrKL5enfhh9rMAnT%2BvbY8KSQIhAIu%2BQEIXKtDIQW3jDhh5nRnJmm6I2eQVhmyri163fAoRKv8DCBAQABoMNjM3NDIzMTgzODA1Igx8TS1OFNhVW1lBZUwq3AMTOIqouisKdYCshCHfVf4bUcbynxlo9W2iv6k%2F4AWTpTykEhIdqHXZqAJ36b82HryYFer6D4xeKe9bdc5ZuAcTrj%2FBNvn5i5XGlEQezAPheUX%2BkZ1Ua%2BuX3KJi2fG5vvMd%2F8fYUWQ7xHRRDmOy5E5ngkDUJ9prAdLfojXj09jVz8PwCEog3DHGgZeXc9uIjOVEIJp7nlVo2JaXfuMDQYc2NvBhMPP94H0l00ICZ6LzYH02u43W72JNXf%2B4nltpe5hnOZHzQl3TU8Q1JowZai6ApAkwOaYrV2vxiZU7BTmUzHnBgbBO%2F7TtHjpZxHQgjJeE3ig%2Bb%2FhMraeAobxMqFK4T6yxOyf5%2FaKmb1hUyg7bwCpas5rOpC3rssO3eDzSh5vuPXG6CIVpF%2BCUm2FAhzul6FncS5RcFk3jASMZFR21mcBW8Inq4wCSjElevi43dcHflbtRY2G2hIEyt7wYPDDwfiFwvyai3vr5iVfWj4oJK%2FGyy2LjgdrQzBCDCPAOmfHRB0MI3xoEjyq04bahdmI7el%2BViNasFkS%2BDCVQJnRHo9daul4PP1iov03SLTIkX7PSDfCvvmAsui5m7okdsMdGHXRVFvrgA1HhHShtcOp04qLeUMJWv1jPU%2BX0ZTDwrom%2FBjqkAfcdtqjrtR%2Bk1FI4jH3W67nXh3nH%2BrPFQASew%2F0SJu9cuK1lxhnHUV6MXmFIKDKLRr0LTGGeqZnF986qdiygBoCXWsAjJo0S36Gaiz4UBA6dEk7UAVLz0%2B6sZvW4NUOS8DNvgX%2BAt3fF9tKnPb4%2BWxrj7l69pvWDJlb9OEIxLT3xMXRzjARI%2F0j%2FX53K8fbub%2FzxfAALI4whozccXMS28WFy50pA&X-Amz-Signature=ab81b3de59123f0463a572a1475b4d636f6ce1e770b64133d4cbc06e9769b3b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWBCIJIF%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdrUZnt4zfPopAMVJsBqbrKL5enfhh9rMAnT%2BvbY8KSQIhAIu%2BQEIXKtDIQW3jDhh5nRnJmm6I2eQVhmyri163fAoRKv8DCBAQABoMNjM3NDIzMTgzODA1Igx8TS1OFNhVW1lBZUwq3AMTOIqouisKdYCshCHfVf4bUcbynxlo9W2iv6k%2F4AWTpTykEhIdqHXZqAJ36b82HryYFer6D4xeKe9bdc5ZuAcTrj%2FBNvn5i5XGlEQezAPheUX%2BkZ1Ua%2BuX3KJi2fG5vvMd%2F8fYUWQ7xHRRDmOy5E5ngkDUJ9prAdLfojXj09jVz8PwCEog3DHGgZeXc9uIjOVEIJp7nlVo2JaXfuMDQYc2NvBhMPP94H0l00ICZ6LzYH02u43W72JNXf%2B4nltpe5hnOZHzQl3TU8Q1JowZai6ApAkwOaYrV2vxiZU7BTmUzHnBgbBO%2F7TtHjpZxHQgjJeE3ig%2Bb%2FhMraeAobxMqFK4T6yxOyf5%2FaKmb1hUyg7bwCpas5rOpC3rssO3eDzSh5vuPXG6CIVpF%2BCUm2FAhzul6FncS5RcFk3jASMZFR21mcBW8Inq4wCSjElevi43dcHflbtRY2G2hIEyt7wYPDDwfiFwvyai3vr5iVfWj4oJK%2FGyy2LjgdrQzBCDCPAOmfHRB0MI3xoEjyq04bahdmI7el%2BViNasFkS%2BDCVQJnRHo9daul4PP1iov03SLTIkX7PSDfCvvmAsui5m7okdsMdGHXRVFvrgA1HhHShtcOp04qLeUMJWv1jPU%2BX0ZTDwrom%2FBjqkAfcdtqjrtR%2Bk1FI4jH3W67nXh3nH%2BrPFQASew%2F0SJu9cuK1lxhnHUV6MXmFIKDKLRr0LTGGeqZnF986qdiygBoCXWsAjJo0S36Gaiz4UBA6dEk7UAVLz0%2B6sZvW4NUOS8DNvgX%2BAt3fF9tKnPb4%2BWxrj7l69pvWDJlb9OEIxLT3xMXRzjARI%2F0j%2FX53K8fbub%2FzxfAALI4whozccXMS28WFy50pA&X-Amz-Signature=6bc924b666984ff3e35dd268f35fe1264b5aa7538b261d3c2cd75823a4f76349&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWBCIJIF%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdrUZnt4zfPopAMVJsBqbrKL5enfhh9rMAnT%2BvbY8KSQIhAIu%2BQEIXKtDIQW3jDhh5nRnJmm6I2eQVhmyri163fAoRKv8DCBAQABoMNjM3NDIzMTgzODA1Igx8TS1OFNhVW1lBZUwq3AMTOIqouisKdYCshCHfVf4bUcbynxlo9W2iv6k%2F4AWTpTykEhIdqHXZqAJ36b82HryYFer6D4xeKe9bdc5ZuAcTrj%2FBNvn5i5XGlEQezAPheUX%2BkZ1Ua%2BuX3KJi2fG5vvMd%2F8fYUWQ7xHRRDmOy5E5ngkDUJ9prAdLfojXj09jVz8PwCEog3DHGgZeXc9uIjOVEIJp7nlVo2JaXfuMDQYc2NvBhMPP94H0l00ICZ6LzYH02u43W72JNXf%2B4nltpe5hnOZHzQl3TU8Q1JowZai6ApAkwOaYrV2vxiZU7BTmUzHnBgbBO%2F7TtHjpZxHQgjJeE3ig%2Bb%2FhMraeAobxMqFK4T6yxOyf5%2FaKmb1hUyg7bwCpas5rOpC3rssO3eDzSh5vuPXG6CIVpF%2BCUm2FAhzul6FncS5RcFk3jASMZFR21mcBW8Inq4wCSjElevi43dcHflbtRY2G2hIEyt7wYPDDwfiFwvyai3vr5iVfWj4oJK%2FGyy2LjgdrQzBCDCPAOmfHRB0MI3xoEjyq04bahdmI7el%2BViNasFkS%2BDCVQJnRHo9daul4PP1iov03SLTIkX7PSDfCvvmAsui5m7okdsMdGHXRVFvrgA1HhHShtcOp04qLeUMJWv1jPU%2BX0ZTDwrom%2FBjqkAfcdtqjrtR%2Bk1FI4jH3W67nXh3nH%2BrPFQASew%2F0SJu9cuK1lxhnHUV6MXmFIKDKLRr0LTGGeqZnF986qdiygBoCXWsAjJo0S36Gaiz4UBA6dEk7UAVLz0%2B6sZvW4NUOS8DNvgX%2BAt3fF9tKnPb4%2BWxrj7l69pvWDJlb9OEIxLT3xMXRzjARI%2F0j%2FX53K8fbub%2FzxfAALI4whozccXMS28WFy50pA&X-Amz-Signature=488787c296041a7188183441e255ab8c533ab38bfe8b9ee357d61b899bcf91bc&X-Amz-SignedHeaders=host&x-id=GetObject)
