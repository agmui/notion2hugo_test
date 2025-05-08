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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYKC6KMX%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZbsdqPlhl2mP1IdGQ6ZWb8I4kZU%2FFXagA5wONJbcR%2FAIhAI5jgB1v1wrxqGKzqRZ4ou4r85cmd%2BxlLQq%2FuuXNxEeGKv8DCHkQABoMNjM3NDIzMTgzODA1IgxGOapQnaP67cjy1ukq3AM0HmSo4SvuSTFceARSyUM1y%2Fi5U4youvPh5Htjmv3GRPXhpC5fBe6%2BEHopsLLyEGD7ySLujf2QR%2Fsx3tKDFuIdXhky%2BhanWF%2BMDUpD74YeYGNEnUR4Oc%2B8FmHO0KKFVpgoYzzWvr8w%2BELjevdpYoplXIePFdPl%2B%2BtBhRTPeQRCBM%2FkcY6ZFLwrSgzmm0MPSRz5k2ezCiiAffoV83YC5UfjWg%2BW%2BAr1Msbk7%2BUk96OznrOqTs1ZlRyK1wW5jE3ht92Ay92Wlobo%2ByOMcMRHGiTxJX0iclhIpmKBiG%2FOSgsQHe43lKU3TUFsgZw0Mfl7BtnNkZy8q%2BAL2FOZJhNku9kguLTLuYEkLmAScmuZGowHuATwYduDCRElStMYsTaxLZzed5r9MZoxKn798XaZ1cU5rLYNJoqYFnfT82RrwqW0X0YjW2cvr0cblnOgty4BrkWWddLCbRlc045ocSzgPktScCOsvKi9k2PzZXZFMfsLTT0oqT7MUrVz6S4PcJuF2kyiitM6Lz7kVo3WWGH4QkZ3AUha1d%2Bg%2Fi%2Fhw08Gcl5m8MItGDLK1XaLrRMJPu8S0MxLWOvZgR%2BcHFyg%2FoADglYZIpGVU48gDoYvMJGQq%2FxgbOVPZr7sh0cAg1qbBDDus%2FPABjqkAZgkIfxRo%2Fip03BfOFN4ofLM8AwuiMLI0IRiIciE%2FH2oOWHaIEpoKx4Q9VYtnMKeGkNcJBAuzbG9g%2BLhFICnwfNYoKQM3y4yN9I%2FSmy0Pk7NIjTM6StbA1ce5R%2BhUprQsNQgR9%2B87KrxQMahbNjfg8V3deYiaJGVvwGQ6579AXPnYk2rZBo%2BJsOVDo5YocceUDsrjm9mSnC5hO7XDuXG7Oi03zUa&X-Amz-Signature=a535617e5b0c593ba01e32fc9bdd5c42fae18ba9f27b5bb8420dd18c1a128f94&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYKC6KMX%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZbsdqPlhl2mP1IdGQ6ZWb8I4kZU%2FFXagA5wONJbcR%2FAIhAI5jgB1v1wrxqGKzqRZ4ou4r85cmd%2BxlLQq%2FuuXNxEeGKv8DCHkQABoMNjM3NDIzMTgzODA1IgxGOapQnaP67cjy1ukq3AM0HmSo4SvuSTFceARSyUM1y%2Fi5U4youvPh5Htjmv3GRPXhpC5fBe6%2BEHopsLLyEGD7ySLujf2QR%2Fsx3tKDFuIdXhky%2BhanWF%2BMDUpD74YeYGNEnUR4Oc%2B8FmHO0KKFVpgoYzzWvr8w%2BELjevdpYoplXIePFdPl%2B%2BtBhRTPeQRCBM%2FkcY6ZFLwrSgzmm0MPSRz5k2ezCiiAffoV83YC5UfjWg%2BW%2BAr1Msbk7%2BUk96OznrOqTs1ZlRyK1wW5jE3ht92Ay92Wlobo%2ByOMcMRHGiTxJX0iclhIpmKBiG%2FOSgsQHe43lKU3TUFsgZw0Mfl7BtnNkZy8q%2BAL2FOZJhNku9kguLTLuYEkLmAScmuZGowHuATwYduDCRElStMYsTaxLZzed5r9MZoxKn798XaZ1cU5rLYNJoqYFnfT82RrwqW0X0YjW2cvr0cblnOgty4BrkWWddLCbRlc045ocSzgPktScCOsvKi9k2PzZXZFMfsLTT0oqT7MUrVz6S4PcJuF2kyiitM6Lz7kVo3WWGH4QkZ3AUha1d%2Bg%2Fi%2Fhw08Gcl5m8MItGDLK1XaLrRMJPu8S0MxLWOvZgR%2BcHFyg%2FoADglYZIpGVU48gDoYvMJGQq%2FxgbOVPZr7sh0cAg1qbBDDus%2FPABjqkAZgkIfxRo%2Fip03BfOFN4ofLM8AwuiMLI0IRiIciE%2FH2oOWHaIEpoKx4Q9VYtnMKeGkNcJBAuzbG9g%2BLhFICnwfNYoKQM3y4yN9I%2FSmy0Pk7NIjTM6StbA1ce5R%2BhUprQsNQgR9%2B87KrxQMahbNjfg8V3deYiaJGVvwGQ6579AXPnYk2rZBo%2BJsOVDo5YocceUDsrjm9mSnC5hO7XDuXG7Oi03zUa&X-Amz-Signature=ee7a7d3ed49941f1efeae4412c49b9a360baf6c954128b44dadd22c7fd2655b8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYKC6KMX%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZbsdqPlhl2mP1IdGQ6ZWb8I4kZU%2FFXagA5wONJbcR%2FAIhAI5jgB1v1wrxqGKzqRZ4ou4r85cmd%2BxlLQq%2FuuXNxEeGKv8DCHkQABoMNjM3NDIzMTgzODA1IgxGOapQnaP67cjy1ukq3AM0HmSo4SvuSTFceARSyUM1y%2Fi5U4youvPh5Htjmv3GRPXhpC5fBe6%2BEHopsLLyEGD7ySLujf2QR%2Fsx3tKDFuIdXhky%2BhanWF%2BMDUpD74YeYGNEnUR4Oc%2B8FmHO0KKFVpgoYzzWvr8w%2BELjevdpYoplXIePFdPl%2B%2BtBhRTPeQRCBM%2FkcY6ZFLwrSgzmm0MPSRz5k2ezCiiAffoV83YC5UfjWg%2BW%2BAr1Msbk7%2BUk96OznrOqTs1ZlRyK1wW5jE3ht92Ay92Wlobo%2ByOMcMRHGiTxJX0iclhIpmKBiG%2FOSgsQHe43lKU3TUFsgZw0Mfl7BtnNkZy8q%2BAL2FOZJhNku9kguLTLuYEkLmAScmuZGowHuATwYduDCRElStMYsTaxLZzed5r9MZoxKn798XaZ1cU5rLYNJoqYFnfT82RrwqW0X0YjW2cvr0cblnOgty4BrkWWddLCbRlc045ocSzgPktScCOsvKi9k2PzZXZFMfsLTT0oqT7MUrVz6S4PcJuF2kyiitM6Lz7kVo3WWGH4QkZ3AUha1d%2Bg%2Fi%2Fhw08Gcl5m8MItGDLK1XaLrRMJPu8S0MxLWOvZgR%2BcHFyg%2FoADglYZIpGVU48gDoYvMJGQq%2FxgbOVPZr7sh0cAg1qbBDDus%2FPABjqkAZgkIfxRo%2Fip03BfOFN4ofLM8AwuiMLI0IRiIciE%2FH2oOWHaIEpoKx4Q9VYtnMKeGkNcJBAuzbG9g%2BLhFICnwfNYoKQM3y4yN9I%2FSmy0Pk7NIjTM6StbA1ce5R%2BhUprQsNQgR9%2B87KrxQMahbNjfg8V3deYiaJGVvwGQ6579AXPnYk2rZBo%2BJsOVDo5YocceUDsrjm9mSnC5hO7XDuXG7Oi03zUa&X-Amz-Signature=eb93c96c53132914c997b6aa2350b80480ede1f803fd27fc69f1c38367dab51b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYKC6KMX%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZbsdqPlhl2mP1IdGQ6ZWb8I4kZU%2FFXagA5wONJbcR%2FAIhAI5jgB1v1wrxqGKzqRZ4ou4r85cmd%2BxlLQq%2FuuXNxEeGKv8DCHkQABoMNjM3NDIzMTgzODA1IgxGOapQnaP67cjy1ukq3AM0HmSo4SvuSTFceARSyUM1y%2Fi5U4youvPh5Htjmv3GRPXhpC5fBe6%2BEHopsLLyEGD7ySLujf2QR%2Fsx3tKDFuIdXhky%2BhanWF%2BMDUpD74YeYGNEnUR4Oc%2B8FmHO0KKFVpgoYzzWvr8w%2BELjevdpYoplXIePFdPl%2B%2BtBhRTPeQRCBM%2FkcY6ZFLwrSgzmm0MPSRz5k2ezCiiAffoV83YC5UfjWg%2BW%2BAr1Msbk7%2BUk96OznrOqTs1ZlRyK1wW5jE3ht92Ay92Wlobo%2ByOMcMRHGiTxJX0iclhIpmKBiG%2FOSgsQHe43lKU3TUFsgZw0Mfl7BtnNkZy8q%2BAL2FOZJhNku9kguLTLuYEkLmAScmuZGowHuATwYduDCRElStMYsTaxLZzed5r9MZoxKn798XaZ1cU5rLYNJoqYFnfT82RrwqW0X0YjW2cvr0cblnOgty4BrkWWddLCbRlc045ocSzgPktScCOsvKi9k2PzZXZFMfsLTT0oqT7MUrVz6S4PcJuF2kyiitM6Lz7kVo3WWGH4QkZ3AUha1d%2Bg%2Fi%2Fhw08Gcl5m8MItGDLK1XaLrRMJPu8S0MxLWOvZgR%2BcHFyg%2FoADglYZIpGVU48gDoYvMJGQq%2FxgbOVPZr7sh0cAg1qbBDDus%2FPABjqkAZgkIfxRo%2Fip03BfOFN4ofLM8AwuiMLI0IRiIciE%2FH2oOWHaIEpoKx4Q9VYtnMKeGkNcJBAuzbG9g%2BLhFICnwfNYoKQM3y4yN9I%2FSmy0Pk7NIjTM6StbA1ce5R%2BhUprQsNQgR9%2B87KrxQMahbNjfg8V3deYiaJGVvwGQ6579AXPnYk2rZBo%2BJsOVDo5YocceUDsrjm9mSnC5hO7XDuXG7Oi03zUa&X-Amz-Signature=4e3568d0c0243ffb8702a0913a83077cc7954d487641b27eddb4d320ca35d135&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYKC6KMX%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZbsdqPlhl2mP1IdGQ6ZWb8I4kZU%2FFXagA5wONJbcR%2FAIhAI5jgB1v1wrxqGKzqRZ4ou4r85cmd%2BxlLQq%2FuuXNxEeGKv8DCHkQABoMNjM3NDIzMTgzODA1IgxGOapQnaP67cjy1ukq3AM0HmSo4SvuSTFceARSyUM1y%2Fi5U4youvPh5Htjmv3GRPXhpC5fBe6%2BEHopsLLyEGD7ySLujf2QR%2Fsx3tKDFuIdXhky%2BhanWF%2BMDUpD74YeYGNEnUR4Oc%2B8FmHO0KKFVpgoYzzWvr8w%2BELjevdpYoplXIePFdPl%2B%2BtBhRTPeQRCBM%2FkcY6ZFLwrSgzmm0MPSRz5k2ezCiiAffoV83YC5UfjWg%2BW%2BAr1Msbk7%2BUk96OznrOqTs1ZlRyK1wW5jE3ht92Ay92Wlobo%2ByOMcMRHGiTxJX0iclhIpmKBiG%2FOSgsQHe43lKU3TUFsgZw0Mfl7BtnNkZy8q%2BAL2FOZJhNku9kguLTLuYEkLmAScmuZGowHuATwYduDCRElStMYsTaxLZzed5r9MZoxKn798XaZ1cU5rLYNJoqYFnfT82RrwqW0X0YjW2cvr0cblnOgty4BrkWWddLCbRlc045ocSzgPktScCOsvKi9k2PzZXZFMfsLTT0oqT7MUrVz6S4PcJuF2kyiitM6Lz7kVo3WWGH4QkZ3AUha1d%2Bg%2Fi%2Fhw08Gcl5m8MItGDLK1XaLrRMJPu8S0MxLWOvZgR%2BcHFyg%2FoADglYZIpGVU48gDoYvMJGQq%2FxgbOVPZr7sh0cAg1qbBDDus%2FPABjqkAZgkIfxRo%2Fip03BfOFN4ofLM8AwuiMLI0IRiIciE%2FH2oOWHaIEpoKx4Q9VYtnMKeGkNcJBAuzbG9g%2BLhFICnwfNYoKQM3y4yN9I%2FSmy0Pk7NIjTM6StbA1ce5R%2BhUprQsNQgR9%2B87KrxQMahbNjfg8V3deYiaJGVvwGQ6579AXPnYk2rZBo%2BJsOVDo5YocceUDsrjm9mSnC5hO7XDuXG7Oi03zUa&X-Amz-Signature=8f93b791c4e2aafd93af0f2878767df048f8abf6c1394d38b3dc0ce2be0afac8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYKC6KMX%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZbsdqPlhl2mP1IdGQ6ZWb8I4kZU%2FFXagA5wONJbcR%2FAIhAI5jgB1v1wrxqGKzqRZ4ou4r85cmd%2BxlLQq%2FuuXNxEeGKv8DCHkQABoMNjM3NDIzMTgzODA1IgxGOapQnaP67cjy1ukq3AM0HmSo4SvuSTFceARSyUM1y%2Fi5U4youvPh5Htjmv3GRPXhpC5fBe6%2BEHopsLLyEGD7ySLujf2QR%2Fsx3tKDFuIdXhky%2BhanWF%2BMDUpD74YeYGNEnUR4Oc%2B8FmHO0KKFVpgoYzzWvr8w%2BELjevdpYoplXIePFdPl%2B%2BtBhRTPeQRCBM%2FkcY6ZFLwrSgzmm0MPSRz5k2ezCiiAffoV83YC5UfjWg%2BW%2BAr1Msbk7%2BUk96OznrOqTs1ZlRyK1wW5jE3ht92Ay92Wlobo%2ByOMcMRHGiTxJX0iclhIpmKBiG%2FOSgsQHe43lKU3TUFsgZw0Mfl7BtnNkZy8q%2BAL2FOZJhNku9kguLTLuYEkLmAScmuZGowHuATwYduDCRElStMYsTaxLZzed5r9MZoxKn798XaZ1cU5rLYNJoqYFnfT82RrwqW0X0YjW2cvr0cblnOgty4BrkWWddLCbRlc045ocSzgPktScCOsvKi9k2PzZXZFMfsLTT0oqT7MUrVz6S4PcJuF2kyiitM6Lz7kVo3WWGH4QkZ3AUha1d%2Bg%2Fi%2Fhw08Gcl5m8MItGDLK1XaLrRMJPu8S0MxLWOvZgR%2BcHFyg%2FoADglYZIpGVU48gDoYvMJGQq%2FxgbOVPZr7sh0cAg1qbBDDus%2FPABjqkAZgkIfxRo%2Fip03BfOFN4ofLM8AwuiMLI0IRiIciE%2FH2oOWHaIEpoKx4Q9VYtnMKeGkNcJBAuzbG9g%2BLhFICnwfNYoKQM3y4yN9I%2FSmy0Pk7NIjTM6StbA1ce5R%2BhUprQsNQgR9%2B87KrxQMahbNjfg8V3deYiaJGVvwGQ6579AXPnYk2rZBo%2BJsOVDo5YocceUDsrjm9mSnC5hO7XDuXG7Oi03zUa&X-Amz-Signature=572dc309964026232d366036a8ca6e8142f77bdb18eb0d7dacab5366a0464783&X-Amz-SignedHeaders=host&x-id=GetObject)
