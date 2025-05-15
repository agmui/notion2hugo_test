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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHRSSKVV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIAQfgGvrQ7WquAk2QQpexKBSEWYGOwJa9yS0NzuK1%2BAmAiEAu%2FjhYt24I67GxEN0XXNnGUKzk5ILczy7MYaC5zOCN%2Boq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNNQEOfnsz9GyksyFircA8KFsWs0ReMEFefji3q%2F0xA12RpJDKKKAsiuqL1%2BkQIcVcDN%2FuMEcTLsNN6D738FkZP9Ab1ehE0lVueHi3GW7DGrA01RuHWu7wvc7gjCfZsxm8wBsCwQ3m1qcOKHT7y2UxiiLENRWnhO7TbEbzfAvKcIXY6%2BosbFFUvu39CJ2FxCqReoEzdPXI6jzIxckZW%2FbnBe%2BbISzpKfsHXqr905Q%2Ff9qM%2BX1JlJgSCBxwNzkzVOVeJsLDQ2C2DsiiiB8iQc2x5zSE3M6dJlEEpwkrVhSmoNMkHH1QbVZidUR61ULRPJDq0oSJ6omjDenI%2FcXyXh25krvrTS7ydGh75WpXf7JJi%2FcFAcf2Lo0beIc97%2BjMhMsBXCAKXA8F2KRRb%2FC9QGVAj1SIZaMUTTclgCzpabmpJLoE90%2BlhJyNPc5A9ZFZkNfek%2F%2B3oGnnknPO%2B0D4ZwVdHQX%2F1KufnNh0atA%2BX6M3AolxYoEpUIHOz1IcQBBAwV8jBl62VpcQA5AXFRGFRO%2B7OOZL4kB4tdjABIB6hEWQ9GdAWtPOMQ%2BUwGmBFneGfBNwIOTjoSQMHSCgV05LqILJ5%2BUb%2BcybB5nC0yRvzUquA0ru3wgzGPwmAheMWUCKF2YDdBHUkeRNKm%2FryQMNK1lsEGOqUBgzZ3aDTMPdeIwNEwTbayXph7b67iDG%2F0QS7So%2FWcvM%2FaddGq90vXpS2AkaF1QjqIJ%2B3HG1nTlaL%2BmbAiKNTS5fAcEkHIx33to9mOfagk9jx4Qna9jssilpIXudjK%2F2sjHATXww0GTUrAFX51IXbcd9XNn4p7nnT8pYIyZECjRDBASsIGC8WaK8UKh5a%2B%2FLirnO3MOHhY9ANkFAG2QSEvg3mYB9SF&X-Amz-Signature=2e3fa6013f484fbda2c7ab549c4d8318b1be5b4e81528d47fa9b9e25d93d8be2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHRSSKVV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIAQfgGvrQ7WquAk2QQpexKBSEWYGOwJa9yS0NzuK1%2BAmAiEAu%2FjhYt24I67GxEN0XXNnGUKzk5ILczy7MYaC5zOCN%2Boq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNNQEOfnsz9GyksyFircA8KFsWs0ReMEFefji3q%2F0xA12RpJDKKKAsiuqL1%2BkQIcVcDN%2FuMEcTLsNN6D738FkZP9Ab1ehE0lVueHi3GW7DGrA01RuHWu7wvc7gjCfZsxm8wBsCwQ3m1qcOKHT7y2UxiiLENRWnhO7TbEbzfAvKcIXY6%2BosbFFUvu39CJ2FxCqReoEzdPXI6jzIxckZW%2FbnBe%2BbISzpKfsHXqr905Q%2Ff9qM%2BX1JlJgSCBxwNzkzVOVeJsLDQ2C2DsiiiB8iQc2x5zSE3M6dJlEEpwkrVhSmoNMkHH1QbVZidUR61ULRPJDq0oSJ6omjDenI%2FcXyXh25krvrTS7ydGh75WpXf7JJi%2FcFAcf2Lo0beIc97%2BjMhMsBXCAKXA8F2KRRb%2FC9QGVAj1SIZaMUTTclgCzpabmpJLoE90%2BlhJyNPc5A9ZFZkNfek%2F%2B3oGnnknPO%2B0D4ZwVdHQX%2F1KufnNh0atA%2BX6M3AolxYoEpUIHOz1IcQBBAwV8jBl62VpcQA5AXFRGFRO%2B7OOZL4kB4tdjABIB6hEWQ9GdAWtPOMQ%2BUwGmBFneGfBNwIOTjoSQMHSCgV05LqILJ5%2BUb%2BcybB5nC0yRvzUquA0ru3wgzGPwmAheMWUCKF2YDdBHUkeRNKm%2FryQMNK1lsEGOqUBgzZ3aDTMPdeIwNEwTbayXph7b67iDG%2F0QS7So%2FWcvM%2FaddGq90vXpS2AkaF1QjqIJ%2B3HG1nTlaL%2BmbAiKNTS5fAcEkHIx33to9mOfagk9jx4Qna9jssilpIXudjK%2F2sjHATXww0GTUrAFX51IXbcd9XNn4p7nnT8pYIyZECjRDBASsIGC8WaK8UKh5a%2B%2FLirnO3MOHhY9ANkFAG2QSEvg3mYB9SF&X-Amz-Signature=9b18336d0a569b0dc915b7f048cc187f06071da92e36a68bfbe2ba42cde3efba&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHRSSKVV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIAQfgGvrQ7WquAk2QQpexKBSEWYGOwJa9yS0NzuK1%2BAmAiEAu%2FjhYt24I67GxEN0XXNnGUKzk5ILczy7MYaC5zOCN%2Boq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNNQEOfnsz9GyksyFircA8KFsWs0ReMEFefji3q%2F0xA12RpJDKKKAsiuqL1%2BkQIcVcDN%2FuMEcTLsNN6D738FkZP9Ab1ehE0lVueHi3GW7DGrA01RuHWu7wvc7gjCfZsxm8wBsCwQ3m1qcOKHT7y2UxiiLENRWnhO7TbEbzfAvKcIXY6%2BosbFFUvu39CJ2FxCqReoEzdPXI6jzIxckZW%2FbnBe%2BbISzpKfsHXqr905Q%2Ff9qM%2BX1JlJgSCBxwNzkzVOVeJsLDQ2C2DsiiiB8iQc2x5zSE3M6dJlEEpwkrVhSmoNMkHH1QbVZidUR61ULRPJDq0oSJ6omjDenI%2FcXyXh25krvrTS7ydGh75WpXf7JJi%2FcFAcf2Lo0beIc97%2BjMhMsBXCAKXA8F2KRRb%2FC9QGVAj1SIZaMUTTclgCzpabmpJLoE90%2BlhJyNPc5A9ZFZkNfek%2F%2B3oGnnknPO%2B0D4ZwVdHQX%2F1KufnNh0atA%2BX6M3AolxYoEpUIHOz1IcQBBAwV8jBl62VpcQA5AXFRGFRO%2B7OOZL4kB4tdjABIB6hEWQ9GdAWtPOMQ%2BUwGmBFneGfBNwIOTjoSQMHSCgV05LqILJ5%2BUb%2BcybB5nC0yRvzUquA0ru3wgzGPwmAheMWUCKF2YDdBHUkeRNKm%2FryQMNK1lsEGOqUBgzZ3aDTMPdeIwNEwTbayXph7b67iDG%2F0QS7So%2FWcvM%2FaddGq90vXpS2AkaF1QjqIJ%2B3HG1nTlaL%2BmbAiKNTS5fAcEkHIx33to9mOfagk9jx4Qna9jssilpIXudjK%2F2sjHATXww0GTUrAFX51IXbcd9XNn4p7nnT8pYIyZECjRDBASsIGC8WaK8UKh5a%2B%2FLirnO3MOHhY9ANkFAG2QSEvg3mYB9SF&X-Amz-Signature=d60d8d15a90057790533cd55848e54bb071c8a090a517daa5054d293c6ec4a54&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHRSSKVV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIAQfgGvrQ7WquAk2QQpexKBSEWYGOwJa9yS0NzuK1%2BAmAiEAu%2FjhYt24I67GxEN0XXNnGUKzk5ILczy7MYaC5zOCN%2Boq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNNQEOfnsz9GyksyFircA8KFsWs0ReMEFefji3q%2F0xA12RpJDKKKAsiuqL1%2BkQIcVcDN%2FuMEcTLsNN6D738FkZP9Ab1ehE0lVueHi3GW7DGrA01RuHWu7wvc7gjCfZsxm8wBsCwQ3m1qcOKHT7y2UxiiLENRWnhO7TbEbzfAvKcIXY6%2BosbFFUvu39CJ2FxCqReoEzdPXI6jzIxckZW%2FbnBe%2BbISzpKfsHXqr905Q%2Ff9qM%2BX1JlJgSCBxwNzkzVOVeJsLDQ2C2DsiiiB8iQc2x5zSE3M6dJlEEpwkrVhSmoNMkHH1QbVZidUR61ULRPJDq0oSJ6omjDenI%2FcXyXh25krvrTS7ydGh75WpXf7JJi%2FcFAcf2Lo0beIc97%2BjMhMsBXCAKXA8F2KRRb%2FC9QGVAj1SIZaMUTTclgCzpabmpJLoE90%2BlhJyNPc5A9ZFZkNfek%2F%2B3oGnnknPO%2B0D4ZwVdHQX%2F1KufnNh0atA%2BX6M3AolxYoEpUIHOz1IcQBBAwV8jBl62VpcQA5AXFRGFRO%2B7OOZL4kB4tdjABIB6hEWQ9GdAWtPOMQ%2BUwGmBFneGfBNwIOTjoSQMHSCgV05LqILJ5%2BUb%2BcybB5nC0yRvzUquA0ru3wgzGPwmAheMWUCKF2YDdBHUkeRNKm%2FryQMNK1lsEGOqUBgzZ3aDTMPdeIwNEwTbayXph7b67iDG%2F0QS7So%2FWcvM%2FaddGq90vXpS2AkaF1QjqIJ%2B3HG1nTlaL%2BmbAiKNTS5fAcEkHIx33to9mOfagk9jx4Qna9jssilpIXudjK%2F2sjHATXww0GTUrAFX51IXbcd9XNn4p7nnT8pYIyZECjRDBASsIGC8WaK8UKh5a%2B%2FLirnO3MOHhY9ANkFAG2QSEvg3mYB9SF&X-Amz-Signature=c845b54d1aaa4122549c20758d524242c630e5b4423eb16399c0b2814904ffb8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHRSSKVV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIAQfgGvrQ7WquAk2QQpexKBSEWYGOwJa9yS0NzuK1%2BAmAiEAu%2FjhYt24I67GxEN0XXNnGUKzk5ILczy7MYaC5zOCN%2Boq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNNQEOfnsz9GyksyFircA8KFsWs0ReMEFefji3q%2F0xA12RpJDKKKAsiuqL1%2BkQIcVcDN%2FuMEcTLsNN6D738FkZP9Ab1ehE0lVueHi3GW7DGrA01RuHWu7wvc7gjCfZsxm8wBsCwQ3m1qcOKHT7y2UxiiLENRWnhO7TbEbzfAvKcIXY6%2BosbFFUvu39CJ2FxCqReoEzdPXI6jzIxckZW%2FbnBe%2BbISzpKfsHXqr905Q%2Ff9qM%2BX1JlJgSCBxwNzkzVOVeJsLDQ2C2DsiiiB8iQc2x5zSE3M6dJlEEpwkrVhSmoNMkHH1QbVZidUR61ULRPJDq0oSJ6omjDenI%2FcXyXh25krvrTS7ydGh75WpXf7JJi%2FcFAcf2Lo0beIc97%2BjMhMsBXCAKXA8F2KRRb%2FC9QGVAj1SIZaMUTTclgCzpabmpJLoE90%2BlhJyNPc5A9ZFZkNfek%2F%2B3oGnnknPO%2B0D4ZwVdHQX%2F1KufnNh0atA%2BX6M3AolxYoEpUIHOz1IcQBBAwV8jBl62VpcQA5AXFRGFRO%2B7OOZL4kB4tdjABIB6hEWQ9GdAWtPOMQ%2BUwGmBFneGfBNwIOTjoSQMHSCgV05LqILJ5%2BUb%2BcybB5nC0yRvzUquA0ru3wgzGPwmAheMWUCKF2YDdBHUkeRNKm%2FryQMNK1lsEGOqUBgzZ3aDTMPdeIwNEwTbayXph7b67iDG%2F0QS7So%2FWcvM%2FaddGq90vXpS2AkaF1QjqIJ%2B3HG1nTlaL%2BmbAiKNTS5fAcEkHIx33to9mOfagk9jx4Qna9jssilpIXudjK%2F2sjHATXww0GTUrAFX51IXbcd9XNn4p7nnT8pYIyZECjRDBASsIGC8WaK8UKh5a%2B%2FLirnO3MOHhY9ANkFAG2QSEvg3mYB9SF&X-Amz-Signature=3699bd021397e2c88a8b65e0eb7f33454d4385025d1d2689c13f969c2d0996bd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHRSSKVV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIAQfgGvrQ7WquAk2QQpexKBSEWYGOwJa9yS0NzuK1%2BAmAiEAu%2FjhYt24I67GxEN0XXNnGUKzk5ILczy7MYaC5zOCN%2Boq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNNQEOfnsz9GyksyFircA8KFsWs0ReMEFefji3q%2F0xA12RpJDKKKAsiuqL1%2BkQIcVcDN%2FuMEcTLsNN6D738FkZP9Ab1ehE0lVueHi3GW7DGrA01RuHWu7wvc7gjCfZsxm8wBsCwQ3m1qcOKHT7y2UxiiLENRWnhO7TbEbzfAvKcIXY6%2BosbFFUvu39CJ2FxCqReoEzdPXI6jzIxckZW%2FbnBe%2BbISzpKfsHXqr905Q%2Ff9qM%2BX1JlJgSCBxwNzkzVOVeJsLDQ2C2DsiiiB8iQc2x5zSE3M6dJlEEpwkrVhSmoNMkHH1QbVZidUR61ULRPJDq0oSJ6omjDenI%2FcXyXh25krvrTS7ydGh75WpXf7JJi%2FcFAcf2Lo0beIc97%2BjMhMsBXCAKXA8F2KRRb%2FC9QGVAj1SIZaMUTTclgCzpabmpJLoE90%2BlhJyNPc5A9ZFZkNfek%2F%2B3oGnnknPO%2B0D4ZwVdHQX%2F1KufnNh0atA%2BX6M3AolxYoEpUIHOz1IcQBBAwV8jBl62VpcQA5AXFRGFRO%2B7OOZL4kB4tdjABIB6hEWQ9GdAWtPOMQ%2BUwGmBFneGfBNwIOTjoSQMHSCgV05LqILJ5%2BUb%2BcybB5nC0yRvzUquA0ru3wgzGPwmAheMWUCKF2YDdBHUkeRNKm%2FryQMNK1lsEGOqUBgzZ3aDTMPdeIwNEwTbayXph7b67iDG%2F0QS7So%2FWcvM%2FaddGq90vXpS2AkaF1QjqIJ%2B3HG1nTlaL%2BmbAiKNTS5fAcEkHIx33to9mOfagk9jx4Qna9jssilpIXudjK%2F2sjHATXww0GTUrAFX51IXbcd9XNn4p7nnT8pYIyZECjRDBASsIGC8WaK8UKh5a%2B%2FLirnO3MOHhY9ANkFAG2QSEvg3mYB9SF&X-Amz-Signature=7ca6f28debd08a56a0c5cef5d3b76e3797ed306a17704eeb5718a1fd1413ee0b&X-Amz-SignedHeaders=host&x-id=GetObject)
