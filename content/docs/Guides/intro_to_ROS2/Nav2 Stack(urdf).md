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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y4OKDZS%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T121318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsqdbHxeiku591lyDC0vkrdnBwCXsAYNgWqK%2BpAndyYAIhAO9XpKrrOxvHgEBm56H%2B814ppCI2t6ozBXWZl1Z0DybfKv8DCEMQABoMNjM3NDIzMTgzODA1Igw0I%2B%2Fo9KpZHa5bYaIq3AOzjs0AeyIHprlrJoXrTBItNpuwrPvdE%2Bhn93yU7g01N%2FREipgxZrJzs%2FktWvLdqXmJZl3wwcbjRsf71j0dp93blMD%2FMqNl6%2BMCcJiYL9mpouPkFn671TIq%2FBqfTz%2F7WLJZuTg%2BRK0U5yjClkSNNkKt40k4OJlA3OE%2B5whUyWMDC4S6rfjgIBTbRMRcSWcg9PF0kbxfUR9scJJd7k37s1HNOP0gyybqHCygDgQkbj49TnbDwCn3zKbuXEpb7Y7kajuMt5P0f%2FnZURGkP1Ta8n2zJp39SJ33Z15JrdkDiAjao4Ni4mFOSoVAMj1W8sJblRab7q1CnY0%2FqeIcrE5NAa3ROOgGM6nPcGqou0hO8VbRC16uA8A%2B1Za5Sy8xvh0EjwECcuPNme7q8J63LTYG7vl%2BrA4AQsLA076gdA5nore6MXQ8WArWbqJalYvq%2BxaiQlYFVQKAUMLnSNvydCO%2BtPNkbg6wy1u90FNClD2kyRG1j6gexGpk%2Fwq4BH5%2F%2Fzi4DjJt6Ibq%2BuTveQwPGmmO6xwCqeodc8WWF3HRZPKiOG9z%2Bx2bLwBRhs8hJw7s2r2YoI6ZM4Q5cesclDQ%2FjH1jKYg4R8SMA93leIpkg%2Ba70BiHqO5FpmQSgUsPyp9TmTDK0rLABjqkAe8gcoy8zZro0ipbEJR1h9hfQArGRnr7RnurJbo%2FiVFffjbBlx43CQA3tRWy%2Fjip6fmM%2Bm3WOQKEX%2F5iXCtIFDb5hjLEhkUHA3ifob492iuHvLp8So43h9%2F9tBVXRSqoto%2FN%2B4r7Q4%2F4iBvTR05FUGjEYiKDTf%2Fr6cnbPckrlDolESGCNgttDyaw0KcCQiTZuGQzx3Oz7Mk6s2tQv4aaXy1EZ976&X-Amz-Signature=3132367ab0a2c843ccaceba9c206e9d6741ab270477513f350c2f1dff40e9c0d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y4OKDZS%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T121318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsqdbHxeiku591lyDC0vkrdnBwCXsAYNgWqK%2BpAndyYAIhAO9XpKrrOxvHgEBm56H%2B814ppCI2t6ozBXWZl1Z0DybfKv8DCEMQABoMNjM3NDIzMTgzODA1Igw0I%2B%2Fo9KpZHa5bYaIq3AOzjs0AeyIHprlrJoXrTBItNpuwrPvdE%2Bhn93yU7g01N%2FREipgxZrJzs%2FktWvLdqXmJZl3wwcbjRsf71j0dp93blMD%2FMqNl6%2BMCcJiYL9mpouPkFn671TIq%2FBqfTz%2F7WLJZuTg%2BRK0U5yjClkSNNkKt40k4OJlA3OE%2B5whUyWMDC4S6rfjgIBTbRMRcSWcg9PF0kbxfUR9scJJd7k37s1HNOP0gyybqHCygDgQkbj49TnbDwCn3zKbuXEpb7Y7kajuMt5P0f%2FnZURGkP1Ta8n2zJp39SJ33Z15JrdkDiAjao4Ni4mFOSoVAMj1W8sJblRab7q1CnY0%2FqeIcrE5NAa3ROOgGM6nPcGqou0hO8VbRC16uA8A%2B1Za5Sy8xvh0EjwECcuPNme7q8J63LTYG7vl%2BrA4AQsLA076gdA5nore6MXQ8WArWbqJalYvq%2BxaiQlYFVQKAUMLnSNvydCO%2BtPNkbg6wy1u90FNClD2kyRG1j6gexGpk%2Fwq4BH5%2F%2Fzi4DjJt6Ibq%2BuTveQwPGmmO6xwCqeodc8WWF3HRZPKiOG9z%2Bx2bLwBRhs8hJw7s2r2YoI6ZM4Q5cesclDQ%2FjH1jKYg4R8SMA93leIpkg%2Ba70BiHqO5FpmQSgUsPyp9TmTDK0rLABjqkAe8gcoy8zZro0ipbEJR1h9hfQArGRnr7RnurJbo%2FiVFffjbBlx43CQA3tRWy%2Fjip6fmM%2Bm3WOQKEX%2F5iXCtIFDb5hjLEhkUHA3ifob492iuHvLp8So43h9%2F9tBVXRSqoto%2FN%2B4r7Q4%2F4iBvTR05FUGjEYiKDTf%2Fr6cnbPckrlDolESGCNgttDyaw0KcCQiTZuGQzx3Oz7Mk6s2tQv4aaXy1EZ976&X-Amz-Signature=1d8e02b1007b644617129a857d83b2913351d4c63024bbc66b3da1f207047f86&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y4OKDZS%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T121318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsqdbHxeiku591lyDC0vkrdnBwCXsAYNgWqK%2BpAndyYAIhAO9XpKrrOxvHgEBm56H%2B814ppCI2t6ozBXWZl1Z0DybfKv8DCEMQABoMNjM3NDIzMTgzODA1Igw0I%2B%2Fo9KpZHa5bYaIq3AOzjs0AeyIHprlrJoXrTBItNpuwrPvdE%2Bhn93yU7g01N%2FREipgxZrJzs%2FktWvLdqXmJZl3wwcbjRsf71j0dp93blMD%2FMqNl6%2BMCcJiYL9mpouPkFn671TIq%2FBqfTz%2F7WLJZuTg%2BRK0U5yjClkSNNkKt40k4OJlA3OE%2B5whUyWMDC4S6rfjgIBTbRMRcSWcg9PF0kbxfUR9scJJd7k37s1HNOP0gyybqHCygDgQkbj49TnbDwCn3zKbuXEpb7Y7kajuMt5P0f%2FnZURGkP1Ta8n2zJp39SJ33Z15JrdkDiAjao4Ni4mFOSoVAMj1W8sJblRab7q1CnY0%2FqeIcrE5NAa3ROOgGM6nPcGqou0hO8VbRC16uA8A%2B1Za5Sy8xvh0EjwECcuPNme7q8J63LTYG7vl%2BrA4AQsLA076gdA5nore6MXQ8WArWbqJalYvq%2BxaiQlYFVQKAUMLnSNvydCO%2BtPNkbg6wy1u90FNClD2kyRG1j6gexGpk%2Fwq4BH5%2F%2Fzi4DjJt6Ibq%2BuTveQwPGmmO6xwCqeodc8WWF3HRZPKiOG9z%2Bx2bLwBRhs8hJw7s2r2YoI6ZM4Q5cesclDQ%2FjH1jKYg4R8SMA93leIpkg%2Ba70BiHqO5FpmQSgUsPyp9TmTDK0rLABjqkAe8gcoy8zZro0ipbEJR1h9hfQArGRnr7RnurJbo%2FiVFffjbBlx43CQA3tRWy%2Fjip6fmM%2Bm3WOQKEX%2F5iXCtIFDb5hjLEhkUHA3ifob492iuHvLp8So43h9%2F9tBVXRSqoto%2FN%2B4r7Q4%2F4iBvTR05FUGjEYiKDTf%2Fr6cnbPckrlDolESGCNgttDyaw0KcCQiTZuGQzx3Oz7Mk6s2tQv4aaXy1EZ976&X-Amz-Signature=3ff1d832dfcc5a58aa4de9146d62e642cd278dbfaa560ba7934dfedc5f60eeae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y4OKDZS%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T121318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsqdbHxeiku591lyDC0vkrdnBwCXsAYNgWqK%2BpAndyYAIhAO9XpKrrOxvHgEBm56H%2B814ppCI2t6ozBXWZl1Z0DybfKv8DCEMQABoMNjM3NDIzMTgzODA1Igw0I%2B%2Fo9KpZHa5bYaIq3AOzjs0AeyIHprlrJoXrTBItNpuwrPvdE%2Bhn93yU7g01N%2FREipgxZrJzs%2FktWvLdqXmJZl3wwcbjRsf71j0dp93blMD%2FMqNl6%2BMCcJiYL9mpouPkFn671TIq%2FBqfTz%2F7WLJZuTg%2BRK0U5yjClkSNNkKt40k4OJlA3OE%2B5whUyWMDC4S6rfjgIBTbRMRcSWcg9PF0kbxfUR9scJJd7k37s1HNOP0gyybqHCygDgQkbj49TnbDwCn3zKbuXEpb7Y7kajuMt5P0f%2FnZURGkP1Ta8n2zJp39SJ33Z15JrdkDiAjao4Ni4mFOSoVAMj1W8sJblRab7q1CnY0%2FqeIcrE5NAa3ROOgGM6nPcGqou0hO8VbRC16uA8A%2B1Za5Sy8xvh0EjwECcuPNme7q8J63LTYG7vl%2BrA4AQsLA076gdA5nore6MXQ8WArWbqJalYvq%2BxaiQlYFVQKAUMLnSNvydCO%2BtPNkbg6wy1u90FNClD2kyRG1j6gexGpk%2Fwq4BH5%2F%2Fzi4DjJt6Ibq%2BuTveQwPGmmO6xwCqeodc8WWF3HRZPKiOG9z%2Bx2bLwBRhs8hJw7s2r2YoI6ZM4Q5cesclDQ%2FjH1jKYg4R8SMA93leIpkg%2Ba70BiHqO5FpmQSgUsPyp9TmTDK0rLABjqkAe8gcoy8zZro0ipbEJR1h9hfQArGRnr7RnurJbo%2FiVFffjbBlx43CQA3tRWy%2Fjip6fmM%2Bm3WOQKEX%2F5iXCtIFDb5hjLEhkUHA3ifob492iuHvLp8So43h9%2F9tBVXRSqoto%2FN%2B4r7Q4%2F4iBvTR05FUGjEYiKDTf%2Fr6cnbPckrlDolESGCNgttDyaw0KcCQiTZuGQzx3Oz7Mk6s2tQv4aaXy1EZ976&X-Amz-Signature=975cb2a2afaa9333b05ac6fa7795b4caceb72d981d946dca338f47240f8580a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y4OKDZS%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T121318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsqdbHxeiku591lyDC0vkrdnBwCXsAYNgWqK%2BpAndyYAIhAO9XpKrrOxvHgEBm56H%2B814ppCI2t6ozBXWZl1Z0DybfKv8DCEMQABoMNjM3NDIzMTgzODA1Igw0I%2B%2Fo9KpZHa5bYaIq3AOzjs0AeyIHprlrJoXrTBItNpuwrPvdE%2Bhn93yU7g01N%2FREipgxZrJzs%2FktWvLdqXmJZl3wwcbjRsf71j0dp93blMD%2FMqNl6%2BMCcJiYL9mpouPkFn671TIq%2FBqfTz%2F7WLJZuTg%2BRK0U5yjClkSNNkKt40k4OJlA3OE%2B5whUyWMDC4S6rfjgIBTbRMRcSWcg9PF0kbxfUR9scJJd7k37s1HNOP0gyybqHCygDgQkbj49TnbDwCn3zKbuXEpb7Y7kajuMt5P0f%2FnZURGkP1Ta8n2zJp39SJ33Z15JrdkDiAjao4Ni4mFOSoVAMj1W8sJblRab7q1CnY0%2FqeIcrE5NAa3ROOgGM6nPcGqou0hO8VbRC16uA8A%2B1Za5Sy8xvh0EjwECcuPNme7q8J63LTYG7vl%2BrA4AQsLA076gdA5nore6MXQ8WArWbqJalYvq%2BxaiQlYFVQKAUMLnSNvydCO%2BtPNkbg6wy1u90FNClD2kyRG1j6gexGpk%2Fwq4BH5%2F%2Fzi4DjJt6Ibq%2BuTveQwPGmmO6xwCqeodc8WWF3HRZPKiOG9z%2Bx2bLwBRhs8hJw7s2r2YoI6ZM4Q5cesclDQ%2FjH1jKYg4R8SMA93leIpkg%2Ba70BiHqO5FpmQSgUsPyp9TmTDK0rLABjqkAe8gcoy8zZro0ipbEJR1h9hfQArGRnr7RnurJbo%2FiVFffjbBlx43CQA3tRWy%2Fjip6fmM%2Bm3WOQKEX%2F5iXCtIFDb5hjLEhkUHA3ifob492iuHvLp8So43h9%2F9tBVXRSqoto%2FN%2B4r7Q4%2F4iBvTR05FUGjEYiKDTf%2Fr6cnbPckrlDolESGCNgttDyaw0KcCQiTZuGQzx3Oz7Mk6s2tQv4aaXy1EZ976&X-Amz-Signature=276aa7558710a767a8ea81ec3c00c7b66e00b8382a8b6a8d5faa0c40319e86c6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y4OKDZS%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T121318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsqdbHxeiku591lyDC0vkrdnBwCXsAYNgWqK%2BpAndyYAIhAO9XpKrrOxvHgEBm56H%2B814ppCI2t6ozBXWZl1Z0DybfKv8DCEMQABoMNjM3NDIzMTgzODA1Igw0I%2B%2Fo9KpZHa5bYaIq3AOzjs0AeyIHprlrJoXrTBItNpuwrPvdE%2Bhn93yU7g01N%2FREipgxZrJzs%2FktWvLdqXmJZl3wwcbjRsf71j0dp93blMD%2FMqNl6%2BMCcJiYL9mpouPkFn671TIq%2FBqfTz%2F7WLJZuTg%2BRK0U5yjClkSNNkKt40k4OJlA3OE%2B5whUyWMDC4S6rfjgIBTbRMRcSWcg9PF0kbxfUR9scJJd7k37s1HNOP0gyybqHCygDgQkbj49TnbDwCn3zKbuXEpb7Y7kajuMt5P0f%2FnZURGkP1Ta8n2zJp39SJ33Z15JrdkDiAjao4Ni4mFOSoVAMj1W8sJblRab7q1CnY0%2FqeIcrE5NAa3ROOgGM6nPcGqou0hO8VbRC16uA8A%2B1Za5Sy8xvh0EjwECcuPNme7q8J63LTYG7vl%2BrA4AQsLA076gdA5nore6MXQ8WArWbqJalYvq%2BxaiQlYFVQKAUMLnSNvydCO%2BtPNkbg6wy1u90FNClD2kyRG1j6gexGpk%2Fwq4BH5%2F%2Fzi4DjJt6Ibq%2BuTveQwPGmmO6xwCqeodc8WWF3HRZPKiOG9z%2Bx2bLwBRhs8hJw7s2r2YoI6ZM4Q5cesclDQ%2FjH1jKYg4R8SMA93leIpkg%2Ba70BiHqO5FpmQSgUsPyp9TmTDK0rLABjqkAe8gcoy8zZro0ipbEJR1h9hfQArGRnr7RnurJbo%2FiVFffjbBlx43CQA3tRWy%2Fjip6fmM%2Bm3WOQKEX%2F5iXCtIFDb5hjLEhkUHA3ifob492iuHvLp8So43h9%2F9tBVXRSqoto%2FN%2B4r7Q4%2F4iBvTR05FUGjEYiKDTf%2Fr6cnbPckrlDolESGCNgttDyaw0KcCQiTZuGQzx3Oz7Mk6s2tQv4aaXy1EZ976&X-Amz-Signature=5404c4b057b9a88524b11ad6e41c6ecacaf0c43dcb0fafb312a10ee74a125b3c&X-Amz-SignedHeaders=host&x-id=GetObject)
