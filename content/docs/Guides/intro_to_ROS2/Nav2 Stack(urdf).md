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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTJBXUFH%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIEr4feacWM%2F8vCwcAXGwEyngCm6ada%2BuMaFAIQlKZpgYAiAOjkIXSnM8fGe11U3srFukOWEYVgscFjzFYIrNIk8dWiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHjwO7myaNetYbAHoKtwDVUcanCslvo%2FkiBj9EJB2Vzpv1p3OtYkakbiIGkh67yxJjh7T51Yat8fSltG%2FTETZzqlLNWb%2FeC0a4cCcMCJbjcZB1XD31LaODHHs5ZKMq9kEenDcljpmmsl66yJi0M6dSGpgdOGNVnUe2eYc6h3qpJ9ad%2FVPal9x7KEK7gY0XwhIMA5u4vKjlx7Lo56it4kPOq2oVquvJY89xK2Bs8cU%2B2vnEWEv8%2F4Klo2U7I%2BmghZpMZ2iKGzEZhbIzMjjPjaSfLLF%2BdjHlYTtY5mEu6DJUw%2BI1Fzt%2FU9dOPmwpPjaFQ8PDgF6sr4VP%2Fs1ubHRFjk0YyP8wLn3nsb6a4r8jbGOQntkSskcOtG0p2JvnRGJzAjh9N%2FsvPeHaV3lLeD8dUqgrVDi69VVi4VRA2p4drwVqTETB30lv77lly22tc8bpqGxHGiZdshCH%2BIF5IVnuYER19hlUBRqnsyet36HrZ6yPwQ1hl17IAUy1eXAfhPWmqrMEy2j8%2B3CJl4sN5mLw5jkFgR6316gvQwdHnIiadedYilknERcOtByCyAmxa%2FWCwAtfPg9GeTj8KeTklXh%2BWZWwPfgmy1LScEWTPbUmlaFs3gygMHziLMmFa02wunrSO2DM%2BTMVBJY7QaoufcwuPb6vgY6pgEV3RyrKFsUMap%2FWqQ3swt55vuCYZHD1tTGR0a3tGoR2NWuFcCNT5A9njnX4wbzIuMp3J3J8FPNkBDBWMJ5wF0MvtNNfQXK%2B41zNCvcAQQf1svszh9cig4GoeirwSCykGbJuIOvxkm%2BDCpCjM6vjCejRm8SePesnit8hW3KtGijsd%2BvFxDCY%2FAMWL4TNG3OIo7XVELhBCyH5ukx256RErfH6Btm%2Ftie&X-Amz-Signature=ad5f1e1405a309d31976b8e3b98519b55002f221d81db2b0dfeb6d08d04cfe01&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTJBXUFH%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIEr4feacWM%2F8vCwcAXGwEyngCm6ada%2BuMaFAIQlKZpgYAiAOjkIXSnM8fGe11U3srFukOWEYVgscFjzFYIrNIk8dWiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHjwO7myaNetYbAHoKtwDVUcanCslvo%2FkiBj9EJB2Vzpv1p3OtYkakbiIGkh67yxJjh7T51Yat8fSltG%2FTETZzqlLNWb%2FeC0a4cCcMCJbjcZB1XD31LaODHHs5ZKMq9kEenDcljpmmsl66yJi0M6dSGpgdOGNVnUe2eYc6h3qpJ9ad%2FVPal9x7KEK7gY0XwhIMA5u4vKjlx7Lo56it4kPOq2oVquvJY89xK2Bs8cU%2B2vnEWEv8%2F4Klo2U7I%2BmghZpMZ2iKGzEZhbIzMjjPjaSfLLF%2BdjHlYTtY5mEu6DJUw%2BI1Fzt%2FU9dOPmwpPjaFQ8PDgF6sr4VP%2Fs1ubHRFjk0YyP8wLn3nsb6a4r8jbGOQntkSskcOtG0p2JvnRGJzAjh9N%2FsvPeHaV3lLeD8dUqgrVDi69VVi4VRA2p4drwVqTETB30lv77lly22tc8bpqGxHGiZdshCH%2BIF5IVnuYER19hlUBRqnsyet36HrZ6yPwQ1hl17IAUy1eXAfhPWmqrMEy2j8%2B3CJl4sN5mLw5jkFgR6316gvQwdHnIiadedYilknERcOtByCyAmxa%2FWCwAtfPg9GeTj8KeTklXh%2BWZWwPfgmy1LScEWTPbUmlaFs3gygMHziLMmFa02wunrSO2DM%2BTMVBJY7QaoufcwuPb6vgY6pgEV3RyrKFsUMap%2FWqQ3swt55vuCYZHD1tTGR0a3tGoR2NWuFcCNT5A9njnX4wbzIuMp3J3J8FPNkBDBWMJ5wF0MvtNNfQXK%2B41zNCvcAQQf1svszh9cig4GoeirwSCykGbJuIOvxkm%2BDCpCjM6vjCejRm8SePesnit8hW3KtGijsd%2BvFxDCY%2FAMWL4TNG3OIo7XVELhBCyH5ukx256RErfH6Btm%2Ftie&X-Amz-Signature=d348e488007c1c7de4e654502530ed8c4b48cd9574421afb8b41b4f8fc440a1f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTJBXUFH%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIEr4feacWM%2F8vCwcAXGwEyngCm6ada%2BuMaFAIQlKZpgYAiAOjkIXSnM8fGe11U3srFukOWEYVgscFjzFYIrNIk8dWiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHjwO7myaNetYbAHoKtwDVUcanCslvo%2FkiBj9EJB2Vzpv1p3OtYkakbiIGkh67yxJjh7T51Yat8fSltG%2FTETZzqlLNWb%2FeC0a4cCcMCJbjcZB1XD31LaODHHs5ZKMq9kEenDcljpmmsl66yJi0M6dSGpgdOGNVnUe2eYc6h3qpJ9ad%2FVPal9x7KEK7gY0XwhIMA5u4vKjlx7Lo56it4kPOq2oVquvJY89xK2Bs8cU%2B2vnEWEv8%2F4Klo2U7I%2BmghZpMZ2iKGzEZhbIzMjjPjaSfLLF%2BdjHlYTtY5mEu6DJUw%2BI1Fzt%2FU9dOPmwpPjaFQ8PDgF6sr4VP%2Fs1ubHRFjk0YyP8wLn3nsb6a4r8jbGOQntkSskcOtG0p2JvnRGJzAjh9N%2FsvPeHaV3lLeD8dUqgrVDi69VVi4VRA2p4drwVqTETB30lv77lly22tc8bpqGxHGiZdshCH%2BIF5IVnuYER19hlUBRqnsyet36HrZ6yPwQ1hl17IAUy1eXAfhPWmqrMEy2j8%2B3CJl4sN5mLw5jkFgR6316gvQwdHnIiadedYilknERcOtByCyAmxa%2FWCwAtfPg9GeTj8KeTklXh%2BWZWwPfgmy1LScEWTPbUmlaFs3gygMHziLMmFa02wunrSO2DM%2BTMVBJY7QaoufcwuPb6vgY6pgEV3RyrKFsUMap%2FWqQ3swt55vuCYZHD1tTGR0a3tGoR2NWuFcCNT5A9njnX4wbzIuMp3J3J8FPNkBDBWMJ5wF0MvtNNfQXK%2B41zNCvcAQQf1svszh9cig4GoeirwSCykGbJuIOvxkm%2BDCpCjM6vjCejRm8SePesnit8hW3KtGijsd%2BvFxDCY%2FAMWL4TNG3OIo7XVELhBCyH5ukx256RErfH6Btm%2Ftie&X-Amz-Signature=9705f385c8e327500907b65997af48be0e82ed1c878bced720d67912aa39b67f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTJBXUFH%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIEr4feacWM%2F8vCwcAXGwEyngCm6ada%2BuMaFAIQlKZpgYAiAOjkIXSnM8fGe11U3srFukOWEYVgscFjzFYIrNIk8dWiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHjwO7myaNetYbAHoKtwDVUcanCslvo%2FkiBj9EJB2Vzpv1p3OtYkakbiIGkh67yxJjh7T51Yat8fSltG%2FTETZzqlLNWb%2FeC0a4cCcMCJbjcZB1XD31LaODHHs5ZKMq9kEenDcljpmmsl66yJi0M6dSGpgdOGNVnUe2eYc6h3qpJ9ad%2FVPal9x7KEK7gY0XwhIMA5u4vKjlx7Lo56it4kPOq2oVquvJY89xK2Bs8cU%2B2vnEWEv8%2F4Klo2U7I%2BmghZpMZ2iKGzEZhbIzMjjPjaSfLLF%2BdjHlYTtY5mEu6DJUw%2BI1Fzt%2FU9dOPmwpPjaFQ8PDgF6sr4VP%2Fs1ubHRFjk0YyP8wLn3nsb6a4r8jbGOQntkSskcOtG0p2JvnRGJzAjh9N%2FsvPeHaV3lLeD8dUqgrVDi69VVi4VRA2p4drwVqTETB30lv77lly22tc8bpqGxHGiZdshCH%2BIF5IVnuYER19hlUBRqnsyet36HrZ6yPwQ1hl17IAUy1eXAfhPWmqrMEy2j8%2B3CJl4sN5mLw5jkFgR6316gvQwdHnIiadedYilknERcOtByCyAmxa%2FWCwAtfPg9GeTj8KeTklXh%2BWZWwPfgmy1LScEWTPbUmlaFs3gygMHziLMmFa02wunrSO2DM%2BTMVBJY7QaoufcwuPb6vgY6pgEV3RyrKFsUMap%2FWqQ3swt55vuCYZHD1tTGR0a3tGoR2NWuFcCNT5A9njnX4wbzIuMp3J3J8FPNkBDBWMJ5wF0MvtNNfQXK%2B41zNCvcAQQf1svszh9cig4GoeirwSCykGbJuIOvxkm%2BDCpCjM6vjCejRm8SePesnit8hW3KtGijsd%2BvFxDCY%2FAMWL4TNG3OIo7XVELhBCyH5ukx256RErfH6Btm%2Ftie&X-Amz-Signature=7592cd65ff6ff81feb01c37fddac9caf94e3636b6b6f123ac17b9c21f78bffb1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTJBXUFH%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIEr4feacWM%2F8vCwcAXGwEyngCm6ada%2BuMaFAIQlKZpgYAiAOjkIXSnM8fGe11U3srFukOWEYVgscFjzFYIrNIk8dWiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHjwO7myaNetYbAHoKtwDVUcanCslvo%2FkiBj9EJB2Vzpv1p3OtYkakbiIGkh67yxJjh7T51Yat8fSltG%2FTETZzqlLNWb%2FeC0a4cCcMCJbjcZB1XD31LaODHHs5ZKMq9kEenDcljpmmsl66yJi0M6dSGpgdOGNVnUe2eYc6h3qpJ9ad%2FVPal9x7KEK7gY0XwhIMA5u4vKjlx7Lo56it4kPOq2oVquvJY89xK2Bs8cU%2B2vnEWEv8%2F4Klo2U7I%2BmghZpMZ2iKGzEZhbIzMjjPjaSfLLF%2BdjHlYTtY5mEu6DJUw%2BI1Fzt%2FU9dOPmwpPjaFQ8PDgF6sr4VP%2Fs1ubHRFjk0YyP8wLn3nsb6a4r8jbGOQntkSskcOtG0p2JvnRGJzAjh9N%2FsvPeHaV3lLeD8dUqgrVDi69VVi4VRA2p4drwVqTETB30lv77lly22tc8bpqGxHGiZdshCH%2BIF5IVnuYER19hlUBRqnsyet36HrZ6yPwQ1hl17IAUy1eXAfhPWmqrMEy2j8%2B3CJl4sN5mLw5jkFgR6316gvQwdHnIiadedYilknERcOtByCyAmxa%2FWCwAtfPg9GeTj8KeTklXh%2BWZWwPfgmy1LScEWTPbUmlaFs3gygMHziLMmFa02wunrSO2DM%2BTMVBJY7QaoufcwuPb6vgY6pgEV3RyrKFsUMap%2FWqQ3swt55vuCYZHD1tTGR0a3tGoR2NWuFcCNT5A9njnX4wbzIuMp3J3J8FPNkBDBWMJ5wF0MvtNNfQXK%2B41zNCvcAQQf1svszh9cig4GoeirwSCykGbJuIOvxkm%2BDCpCjM6vjCejRm8SePesnit8hW3KtGijsd%2BvFxDCY%2FAMWL4TNG3OIo7XVELhBCyH5ukx256RErfH6Btm%2Ftie&X-Amz-Signature=ce60021ec4050399d5e7af2f2974bde903d546ee09584720d44276cb4f8813e7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTJBXUFH%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIEr4feacWM%2F8vCwcAXGwEyngCm6ada%2BuMaFAIQlKZpgYAiAOjkIXSnM8fGe11U3srFukOWEYVgscFjzFYIrNIk8dWiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHjwO7myaNetYbAHoKtwDVUcanCslvo%2FkiBj9EJB2Vzpv1p3OtYkakbiIGkh67yxJjh7T51Yat8fSltG%2FTETZzqlLNWb%2FeC0a4cCcMCJbjcZB1XD31LaODHHs5ZKMq9kEenDcljpmmsl66yJi0M6dSGpgdOGNVnUe2eYc6h3qpJ9ad%2FVPal9x7KEK7gY0XwhIMA5u4vKjlx7Lo56it4kPOq2oVquvJY89xK2Bs8cU%2B2vnEWEv8%2F4Klo2U7I%2BmghZpMZ2iKGzEZhbIzMjjPjaSfLLF%2BdjHlYTtY5mEu6DJUw%2BI1Fzt%2FU9dOPmwpPjaFQ8PDgF6sr4VP%2Fs1ubHRFjk0YyP8wLn3nsb6a4r8jbGOQntkSskcOtG0p2JvnRGJzAjh9N%2FsvPeHaV3lLeD8dUqgrVDi69VVi4VRA2p4drwVqTETB30lv77lly22tc8bpqGxHGiZdshCH%2BIF5IVnuYER19hlUBRqnsyet36HrZ6yPwQ1hl17IAUy1eXAfhPWmqrMEy2j8%2B3CJl4sN5mLw5jkFgR6316gvQwdHnIiadedYilknERcOtByCyAmxa%2FWCwAtfPg9GeTj8KeTklXh%2BWZWwPfgmy1LScEWTPbUmlaFs3gygMHziLMmFa02wunrSO2DM%2BTMVBJY7QaoufcwuPb6vgY6pgEV3RyrKFsUMap%2FWqQ3swt55vuCYZHD1tTGR0a3tGoR2NWuFcCNT5A9njnX4wbzIuMp3J3J8FPNkBDBWMJ5wF0MvtNNfQXK%2B41zNCvcAQQf1svszh9cig4GoeirwSCykGbJuIOvxkm%2BDCpCjM6vjCejRm8SePesnit8hW3KtGijsd%2BvFxDCY%2FAMWL4TNG3OIo7XVELhBCyH5ukx256RErfH6Btm%2Ftie&X-Amz-Signature=d51b2e0d76e7a91ac06159eaa1d229b9445f5f68c3574c4f2d383c31a68d2ad7&X-Amz-SignedHeaders=host&x-id=GetObject)
