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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQB6VV73%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpZy7OqmACLuR5sRUfGBCohd2FRH9PC9GS%2FjhFy4FCFAiEA%2BdXTqTMyy8WZ7OFDPUUXyijt6D2DRrFcA4HuL3dgU7QqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwiNuTFyiLcMs%2BNJircA5WL%2F8n80kM8h81qSV%2FtQfW4xXHDeHfgGFDZsgKag6TqmjPGwj1pF3QNl%2FCJmKVVEi4H%2BLfnFZeTEtnU%2Fx5NqpiBTLUB3idm25ZZeryIwAR%2F5ffKs%2F8axQx7rOTDIEzDQnEN5ONok0%2BgEamybj2tGm3npHTu8OjBmTfdvSI2P2Ay9OiomI4hfTWnsomT9DcHqXrV4yPi5X8Ul8JCLmKFlCECHOS5n6eX0zWkOvl%2FGzlElRkC2Nb7BjkjHfSo4Gzj%2BnagzSZ7MurALAnzP%2Fzs3b93xlp1qEMie15VxwGnyElmdSKxPe8aRZwphN8%2FitCFPGI0GifOez4pouLTSFutS1wUiYTZB%2Bw%2BnWH9JDfAysrSuVSUY%2FX04sBADfXIDwE8P77wGL70EDi2iywhsp5lcI9zxlEOB3198PuPzwYMcmH%2FOaTdhj0oHTn27wEvJJPDyNZaSU5swlMxNMs1kVUPjBtpW07hOSAf0Vd1j4Isjo1FMiZqVyyARovtT1jTa4O35jbXoGhMxL%2BWGhjLfGqBeQAUwCYJbecYkjKMDATz9PBgOpOL%2FDjpktO2wm1Crypguf1f4Y5%2FA2%2BQ6ygWEJYZVY1pMZoGtDzmE56rc7gZU45ESZA7LoNIiqte7hqQMNTig78GOqUBMaq3jwluMzzN6OcrQSoOJCzY7pPPkevV9%2Fx%2BObseUiVPu%2BmgewvSc0VyRvFmqvU0qyrKaF%2BmrFXKFLme%2FCHS5VN8%2Fpbtz5arSQLSgSt35a6qkLEiDfxL6Jje4Hr86lRXtxfYDv0JwSQZV1OJWxfX9L%2Bn3iXaF0cLqqps%2FL7LYBGIsWhlxaaKofFCrFR2EFtknKWVymJ4cy4vam52UEZIxiEX%2Bd12&X-Amz-Signature=421774ba71581f80cb03f6ef26f2c75b4a5cbd23f4f20e6bad3e5ebf1815f0aa&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQB6VV73%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpZy7OqmACLuR5sRUfGBCohd2FRH9PC9GS%2FjhFy4FCFAiEA%2BdXTqTMyy8WZ7OFDPUUXyijt6D2DRrFcA4HuL3dgU7QqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwiNuTFyiLcMs%2BNJircA5WL%2F8n80kM8h81qSV%2FtQfW4xXHDeHfgGFDZsgKag6TqmjPGwj1pF3QNl%2FCJmKVVEi4H%2BLfnFZeTEtnU%2Fx5NqpiBTLUB3idm25ZZeryIwAR%2F5ffKs%2F8axQx7rOTDIEzDQnEN5ONok0%2BgEamybj2tGm3npHTu8OjBmTfdvSI2P2Ay9OiomI4hfTWnsomT9DcHqXrV4yPi5X8Ul8JCLmKFlCECHOS5n6eX0zWkOvl%2FGzlElRkC2Nb7BjkjHfSo4Gzj%2BnagzSZ7MurALAnzP%2Fzs3b93xlp1qEMie15VxwGnyElmdSKxPe8aRZwphN8%2FitCFPGI0GifOez4pouLTSFutS1wUiYTZB%2Bw%2BnWH9JDfAysrSuVSUY%2FX04sBADfXIDwE8P77wGL70EDi2iywhsp5lcI9zxlEOB3198PuPzwYMcmH%2FOaTdhj0oHTn27wEvJJPDyNZaSU5swlMxNMs1kVUPjBtpW07hOSAf0Vd1j4Isjo1FMiZqVyyARovtT1jTa4O35jbXoGhMxL%2BWGhjLfGqBeQAUwCYJbecYkjKMDATz9PBgOpOL%2FDjpktO2wm1Crypguf1f4Y5%2FA2%2BQ6ygWEJYZVY1pMZoGtDzmE56rc7gZU45ESZA7LoNIiqte7hqQMNTig78GOqUBMaq3jwluMzzN6OcrQSoOJCzY7pPPkevV9%2Fx%2BObseUiVPu%2BmgewvSc0VyRvFmqvU0qyrKaF%2BmrFXKFLme%2FCHS5VN8%2Fpbtz5arSQLSgSt35a6qkLEiDfxL6Jje4Hr86lRXtxfYDv0JwSQZV1OJWxfX9L%2Bn3iXaF0cLqqps%2FL7LYBGIsWhlxaaKofFCrFR2EFtknKWVymJ4cy4vam52UEZIxiEX%2Bd12&X-Amz-Signature=91c37033f14b2dc56a65c989756d2dcde6d19c811fe67ac23da80481f0c763e0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQB6VV73%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpZy7OqmACLuR5sRUfGBCohd2FRH9PC9GS%2FjhFy4FCFAiEA%2BdXTqTMyy8WZ7OFDPUUXyijt6D2DRrFcA4HuL3dgU7QqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwiNuTFyiLcMs%2BNJircA5WL%2F8n80kM8h81qSV%2FtQfW4xXHDeHfgGFDZsgKag6TqmjPGwj1pF3QNl%2FCJmKVVEi4H%2BLfnFZeTEtnU%2Fx5NqpiBTLUB3idm25ZZeryIwAR%2F5ffKs%2F8axQx7rOTDIEzDQnEN5ONok0%2BgEamybj2tGm3npHTu8OjBmTfdvSI2P2Ay9OiomI4hfTWnsomT9DcHqXrV4yPi5X8Ul8JCLmKFlCECHOS5n6eX0zWkOvl%2FGzlElRkC2Nb7BjkjHfSo4Gzj%2BnagzSZ7MurALAnzP%2Fzs3b93xlp1qEMie15VxwGnyElmdSKxPe8aRZwphN8%2FitCFPGI0GifOez4pouLTSFutS1wUiYTZB%2Bw%2BnWH9JDfAysrSuVSUY%2FX04sBADfXIDwE8P77wGL70EDi2iywhsp5lcI9zxlEOB3198PuPzwYMcmH%2FOaTdhj0oHTn27wEvJJPDyNZaSU5swlMxNMs1kVUPjBtpW07hOSAf0Vd1j4Isjo1FMiZqVyyARovtT1jTa4O35jbXoGhMxL%2BWGhjLfGqBeQAUwCYJbecYkjKMDATz9PBgOpOL%2FDjpktO2wm1Crypguf1f4Y5%2FA2%2BQ6ygWEJYZVY1pMZoGtDzmE56rc7gZU45ESZA7LoNIiqte7hqQMNTig78GOqUBMaq3jwluMzzN6OcrQSoOJCzY7pPPkevV9%2Fx%2BObseUiVPu%2BmgewvSc0VyRvFmqvU0qyrKaF%2BmrFXKFLme%2FCHS5VN8%2Fpbtz5arSQLSgSt35a6qkLEiDfxL6Jje4Hr86lRXtxfYDv0JwSQZV1OJWxfX9L%2Bn3iXaF0cLqqps%2FL7LYBGIsWhlxaaKofFCrFR2EFtknKWVymJ4cy4vam52UEZIxiEX%2Bd12&X-Amz-Signature=ec720707e4241aa4c7c15ded47506c12c9641af186b5c52e8a999207d820f904&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQB6VV73%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpZy7OqmACLuR5sRUfGBCohd2FRH9PC9GS%2FjhFy4FCFAiEA%2BdXTqTMyy8WZ7OFDPUUXyijt6D2DRrFcA4HuL3dgU7QqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwiNuTFyiLcMs%2BNJircA5WL%2F8n80kM8h81qSV%2FtQfW4xXHDeHfgGFDZsgKag6TqmjPGwj1pF3QNl%2FCJmKVVEi4H%2BLfnFZeTEtnU%2Fx5NqpiBTLUB3idm25ZZeryIwAR%2F5ffKs%2F8axQx7rOTDIEzDQnEN5ONok0%2BgEamybj2tGm3npHTu8OjBmTfdvSI2P2Ay9OiomI4hfTWnsomT9DcHqXrV4yPi5X8Ul8JCLmKFlCECHOS5n6eX0zWkOvl%2FGzlElRkC2Nb7BjkjHfSo4Gzj%2BnagzSZ7MurALAnzP%2Fzs3b93xlp1qEMie15VxwGnyElmdSKxPe8aRZwphN8%2FitCFPGI0GifOez4pouLTSFutS1wUiYTZB%2Bw%2BnWH9JDfAysrSuVSUY%2FX04sBADfXIDwE8P77wGL70EDi2iywhsp5lcI9zxlEOB3198PuPzwYMcmH%2FOaTdhj0oHTn27wEvJJPDyNZaSU5swlMxNMs1kVUPjBtpW07hOSAf0Vd1j4Isjo1FMiZqVyyARovtT1jTa4O35jbXoGhMxL%2BWGhjLfGqBeQAUwCYJbecYkjKMDATz9PBgOpOL%2FDjpktO2wm1Crypguf1f4Y5%2FA2%2BQ6ygWEJYZVY1pMZoGtDzmE56rc7gZU45ESZA7LoNIiqte7hqQMNTig78GOqUBMaq3jwluMzzN6OcrQSoOJCzY7pPPkevV9%2Fx%2BObseUiVPu%2BmgewvSc0VyRvFmqvU0qyrKaF%2BmrFXKFLme%2FCHS5VN8%2Fpbtz5arSQLSgSt35a6qkLEiDfxL6Jje4Hr86lRXtxfYDv0JwSQZV1OJWxfX9L%2Bn3iXaF0cLqqps%2FL7LYBGIsWhlxaaKofFCrFR2EFtknKWVymJ4cy4vam52UEZIxiEX%2Bd12&X-Amz-Signature=2c28088e02e17a4048cffcc4d7131acb66568c76c331fbe94e4e80ca775b3576&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQB6VV73%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpZy7OqmACLuR5sRUfGBCohd2FRH9PC9GS%2FjhFy4FCFAiEA%2BdXTqTMyy8WZ7OFDPUUXyijt6D2DRrFcA4HuL3dgU7QqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwiNuTFyiLcMs%2BNJircA5WL%2F8n80kM8h81qSV%2FtQfW4xXHDeHfgGFDZsgKag6TqmjPGwj1pF3QNl%2FCJmKVVEi4H%2BLfnFZeTEtnU%2Fx5NqpiBTLUB3idm25ZZeryIwAR%2F5ffKs%2F8axQx7rOTDIEzDQnEN5ONok0%2BgEamybj2tGm3npHTu8OjBmTfdvSI2P2Ay9OiomI4hfTWnsomT9DcHqXrV4yPi5X8Ul8JCLmKFlCECHOS5n6eX0zWkOvl%2FGzlElRkC2Nb7BjkjHfSo4Gzj%2BnagzSZ7MurALAnzP%2Fzs3b93xlp1qEMie15VxwGnyElmdSKxPe8aRZwphN8%2FitCFPGI0GifOez4pouLTSFutS1wUiYTZB%2Bw%2BnWH9JDfAysrSuVSUY%2FX04sBADfXIDwE8P77wGL70EDi2iywhsp5lcI9zxlEOB3198PuPzwYMcmH%2FOaTdhj0oHTn27wEvJJPDyNZaSU5swlMxNMs1kVUPjBtpW07hOSAf0Vd1j4Isjo1FMiZqVyyARovtT1jTa4O35jbXoGhMxL%2BWGhjLfGqBeQAUwCYJbecYkjKMDATz9PBgOpOL%2FDjpktO2wm1Crypguf1f4Y5%2FA2%2BQ6ygWEJYZVY1pMZoGtDzmE56rc7gZU45ESZA7LoNIiqte7hqQMNTig78GOqUBMaq3jwluMzzN6OcrQSoOJCzY7pPPkevV9%2Fx%2BObseUiVPu%2BmgewvSc0VyRvFmqvU0qyrKaF%2BmrFXKFLme%2FCHS5VN8%2Fpbtz5arSQLSgSt35a6qkLEiDfxL6Jje4Hr86lRXtxfYDv0JwSQZV1OJWxfX9L%2Bn3iXaF0cLqqps%2FL7LYBGIsWhlxaaKofFCrFR2EFtknKWVymJ4cy4vam52UEZIxiEX%2Bd12&X-Amz-Signature=97ceccbb3297d2c61220a993179ae35eab7d2ee79fe33eac6147a570dc4c5de1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQB6VV73%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpZy7OqmACLuR5sRUfGBCohd2FRH9PC9GS%2FjhFy4FCFAiEA%2BdXTqTMyy8WZ7OFDPUUXyijt6D2DRrFcA4HuL3dgU7QqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwiNuTFyiLcMs%2BNJircA5WL%2F8n80kM8h81qSV%2FtQfW4xXHDeHfgGFDZsgKag6TqmjPGwj1pF3QNl%2FCJmKVVEi4H%2BLfnFZeTEtnU%2Fx5NqpiBTLUB3idm25ZZeryIwAR%2F5ffKs%2F8axQx7rOTDIEzDQnEN5ONok0%2BgEamybj2tGm3npHTu8OjBmTfdvSI2P2Ay9OiomI4hfTWnsomT9DcHqXrV4yPi5X8Ul8JCLmKFlCECHOS5n6eX0zWkOvl%2FGzlElRkC2Nb7BjkjHfSo4Gzj%2BnagzSZ7MurALAnzP%2Fzs3b93xlp1qEMie15VxwGnyElmdSKxPe8aRZwphN8%2FitCFPGI0GifOez4pouLTSFutS1wUiYTZB%2Bw%2BnWH9JDfAysrSuVSUY%2FX04sBADfXIDwE8P77wGL70EDi2iywhsp5lcI9zxlEOB3198PuPzwYMcmH%2FOaTdhj0oHTn27wEvJJPDyNZaSU5swlMxNMs1kVUPjBtpW07hOSAf0Vd1j4Isjo1FMiZqVyyARovtT1jTa4O35jbXoGhMxL%2BWGhjLfGqBeQAUwCYJbecYkjKMDATz9PBgOpOL%2FDjpktO2wm1Crypguf1f4Y5%2FA2%2BQ6ygWEJYZVY1pMZoGtDzmE56rc7gZU45ESZA7LoNIiqte7hqQMNTig78GOqUBMaq3jwluMzzN6OcrQSoOJCzY7pPPkevV9%2Fx%2BObseUiVPu%2BmgewvSc0VyRvFmqvU0qyrKaF%2BmrFXKFLme%2FCHS5VN8%2Fpbtz5arSQLSgSt35a6qkLEiDfxL6Jje4Hr86lRXtxfYDv0JwSQZV1OJWxfX9L%2Bn3iXaF0cLqqps%2FL7LYBGIsWhlxaaKofFCrFR2EFtknKWVymJ4cy4vam52UEZIxiEX%2Bd12&X-Amz-Signature=60d3087892b93ce18e9f10aff13cf9951a1e727c2c80b3fac3d517659e1e8b23&X-Amz-SignedHeaders=host&x-id=GetObject)
