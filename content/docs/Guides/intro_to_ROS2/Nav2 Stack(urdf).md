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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IS4XNLC%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQC6vW%2F66D4s79dFQ7voEPKUqEjizOMa9Fr468pSokBjUwIgeHoTCbkS4I2YsgP0PSsKDxW58DmbpT52WmHi%2FQ1ojaUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHund29r4BRKOHfG7ircAyuxCtgrJoyvwu7wlssQbu6ZvhnWmE6Bj3%2BKk3Tbf6rrr7UJLdRgh4K%2BViLWxdAjTE3f6xyF3yxTQBlUM0gX48Kid3rtc8qcwctZ7atKuy2mrE4LXWEvsNbvQkNhV5qQRmgwjAKciks3ZSyflK%2FyV%2Fo8lMI4sP6aBR1uPA4yj2hKB9eHvAB%2BqZ5nYYRaDoACORBBjYdspZnuf4H7v3syr3SE7vpLMS8SwUq06L%2FcNC0F%2BXWdh%2BnLkh%2BIkQMnZLzmKyHNfwvGDwiZhLflLjdlddWI9eIaaF5%2Fo43Ogb2GtpZvX%2BGjrnmujpSyKyT0rriXblkPv6xAzry0bB5zDdQmg56lGGP6so1kH8u%2F2V8s213ei9Rcr2%2B4NzMI0MZsrMSVFsgaHhWkw0DJfu%2FjNcBkSlvpXWR0i0fV8BkN6yzc7UOL5EGbptJG%2BnoEMsFYz8dzog%2BrMEZICIYFyUbLQw9Ecasd7u%2BQtCBMz05yMOMs6q2Weq%2FbZhfit1eE6xrQNjjyKrA76mN9%2B5j4W7Z2s5W0OXUAFbH%2F%2F936JbDtyvwEHJpXS%2BaeElvtukKcShKkq6%2B%2FyHaJae729rHK17BeM1%2Fd8t2WbTdB%2FVbWmW3LQNTrYsk60j1rKDLZUxVv68OCML%2Fe18AGOqUBoJTiA0c8gYo%2BGHA4deodztOfRT%2BM8oWdxBZF5Ntc5AQHt7daBdKHfqA%2BQoTjze0NzruITNeJ8fQprZuSwSjwOncfAKRE5aV43UJ%2F4%2FR0WLSpzFPR5Y92WMFN59nrTlOCcKa%2BjyGdAxKierPj79upggh36saIR%2FwcbZIUUaUYHipHfWwuEQ4tvzDvX6em4gn2wDtjBO4ZhVPNt4Y6xAxliygKt6IV&X-Amz-Signature=bcebf0b96da032bd951a95f8320918d5ce2f1a51c06f4ed5dba6185c62d6fe54&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IS4XNLC%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQC6vW%2F66D4s79dFQ7voEPKUqEjizOMa9Fr468pSokBjUwIgeHoTCbkS4I2YsgP0PSsKDxW58DmbpT52WmHi%2FQ1ojaUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHund29r4BRKOHfG7ircAyuxCtgrJoyvwu7wlssQbu6ZvhnWmE6Bj3%2BKk3Tbf6rrr7UJLdRgh4K%2BViLWxdAjTE3f6xyF3yxTQBlUM0gX48Kid3rtc8qcwctZ7atKuy2mrE4LXWEvsNbvQkNhV5qQRmgwjAKciks3ZSyflK%2FyV%2Fo8lMI4sP6aBR1uPA4yj2hKB9eHvAB%2BqZ5nYYRaDoACORBBjYdspZnuf4H7v3syr3SE7vpLMS8SwUq06L%2FcNC0F%2BXWdh%2BnLkh%2BIkQMnZLzmKyHNfwvGDwiZhLflLjdlddWI9eIaaF5%2Fo43Ogb2GtpZvX%2BGjrnmujpSyKyT0rriXblkPv6xAzry0bB5zDdQmg56lGGP6so1kH8u%2F2V8s213ei9Rcr2%2B4NzMI0MZsrMSVFsgaHhWkw0DJfu%2FjNcBkSlvpXWR0i0fV8BkN6yzc7UOL5EGbptJG%2BnoEMsFYz8dzog%2BrMEZICIYFyUbLQw9Ecasd7u%2BQtCBMz05yMOMs6q2Weq%2FbZhfit1eE6xrQNjjyKrA76mN9%2B5j4W7Z2s5W0OXUAFbH%2F%2F936JbDtyvwEHJpXS%2BaeElvtukKcShKkq6%2B%2FyHaJae729rHK17BeM1%2Fd8t2WbTdB%2FVbWmW3LQNTrYsk60j1rKDLZUxVv68OCML%2Fe18AGOqUBoJTiA0c8gYo%2BGHA4deodztOfRT%2BM8oWdxBZF5Ntc5AQHt7daBdKHfqA%2BQoTjze0NzruITNeJ8fQprZuSwSjwOncfAKRE5aV43UJ%2F4%2FR0WLSpzFPR5Y92WMFN59nrTlOCcKa%2BjyGdAxKierPj79upggh36saIR%2FwcbZIUUaUYHipHfWwuEQ4tvzDvX6em4gn2wDtjBO4ZhVPNt4Y6xAxliygKt6IV&X-Amz-Signature=09725b72fe39d51bb02d225fbee3ca55a39500f4136de3004474a72fef09de6e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IS4XNLC%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQC6vW%2F66D4s79dFQ7voEPKUqEjizOMa9Fr468pSokBjUwIgeHoTCbkS4I2YsgP0PSsKDxW58DmbpT52WmHi%2FQ1ojaUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHund29r4BRKOHfG7ircAyuxCtgrJoyvwu7wlssQbu6ZvhnWmE6Bj3%2BKk3Tbf6rrr7UJLdRgh4K%2BViLWxdAjTE3f6xyF3yxTQBlUM0gX48Kid3rtc8qcwctZ7atKuy2mrE4LXWEvsNbvQkNhV5qQRmgwjAKciks3ZSyflK%2FyV%2Fo8lMI4sP6aBR1uPA4yj2hKB9eHvAB%2BqZ5nYYRaDoACORBBjYdspZnuf4H7v3syr3SE7vpLMS8SwUq06L%2FcNC0F%2BXWdh%2BnLkh%2BIkQMnZLzmKyHNfwvGDwiZhLflLjdlddWI9eIaaF5%2Fo43Ogb2GtpZvX%2BGjrnmujpSyKyT0rriXblkPv6xAzry0bB5zDdQmg56lGGP6so1kH8u%2F2V8s213ei9Rcr2%2B4NzMI0MZsrMSVFsgaHhWkw0DJfu%2FjNcBkSlvpXWR0i0fV8BkN6yzc7UOL5EGbptJG%2BnoEMsFYz8dzog%2BrMEZICIYFyUbLQw9Ecasd7u%2BQtCBMz05yMOMs6q2Weq%2FbZhfit1eE6xrQNjjyKrA76mN9%2B5j4W7Z2s5W0OXUAFbH%2F%2F936JbDtyvwEHJpXS%2BaeElvtukKcShKkq6%2B%2FyHaJae729rHK17BeM1%2Fd8t2WbTdB%2FVbWmW3LQNTrYsk60j1rKDLZUxVv68OCML%2Fe18AGOqUBoJTiA0c8gYo%2BGHA4deodztOfRT%2BM8oWdxBZF5Ntc5AQHt7daBdKHfqA%2BQoTjze0NzruITNeJ8fQprZuSwSjwOncfAKRE5aV43UJ%2F4%2FR0WLSpzFPR5Y92WMFN59nrTlOCcKa%2BjyGdAxKierPj79upggh36saIR%2FwcbZIUUaUYHipHfWwuEQ4tvzDvX6em4gn2wDtjBO4ZhVPNt4Y6xAxliygKt6IV&X-Amz-Signature=961b208406bae013c108dc6103324d92536600e51513a6469217499d7e1c9825&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IS4XNLC%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQC6vW%2F66D4s79dFQ7voEPKUqEjizOMa9Fr468pSokBjUwIgeHoTCbkS4I2YsgP0PSsKDxW58DmbpT52WmHi%2FQ1ojaUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHund29r4BRKOHfG7ircAyuxCtgrJoyvwu7wlssQbu6ZvhnWmE6Bj3%2BKk3Tbf6rrr7UJLdRgh4K%2BViLWxdAjTE3f6xyF3yxTQBlUM0gX48Kid3rtc8qcwctZ7atKuy2mrE4LXWEvsNbvQkNhV5qQRmgwjAKciks3ZSyflK%2FyV%2Fo8lMI4sP6aBR1uPA4yj2hKB9eHvAB%2BqZ5nYYRaDoACORBBjYdspZnuf4H7v3syr3SE7vpLMS8SwUq06L%2FcNC0F%2BXWdh%2BnLkh%2BIkQMnZLzmKyHNfwvGDwiZhLflLjdlddWI9eIaaF5%2Fo43Ogb2GtpZvX%2BGjrnmujpSyKyT0rriXblkPv6xAzry0bB5zDdQmg56lGGP6so1kH8u%2F2V8s213ei9Rcr2%2B4NzMI0MZsrMSVFsgaHhWkw0DJfu%2FjNcBkSlvpXWR0i0fV8BkN6yzc7UOL5EGbptJG%2BnoEMsFYz8dzog%2BrMEZICIYFyUbLQw9Ecasd7u%2BQtCBMz05yMOMs6q2Weq%2FbZhfit1eE6xrQNjjyKrA76mN9%2B5j4W7Z2s5W0OXUAFbH%2F%2F936JbDtyvwEHJpXS%2BaeElvtukKcShKkq6%2B%2FyHaJae729rHK17BeM1%2Fd8t2WbTdB%2FVbWmW3LQNTrYsk60j1rKDLZUxVv68OCML%2Fe18AGOqUBoJTiA0c8gYo%2BGHA4deodztOfRT%2BM8oWdxBZF5Ntc5AQHt7daBdKHfqA%2BQoTjze0NzruITNeJ8fQprZuSwSjwOncfAKRE5aV43UJ%2F4%2FR0WLSpzFPR5Y92WMFN59nrTlOCcKa%2BjyGdAxKierPj79upggh36saIR%2FwcbZIUUaUYHipHfWwuEQ4tvzDvX6em4gn2wDtjBO4ZhVPNt4Y6xAxliygKt6IV&X-Amz-Signature=f19e2ce052245ede9fee6730b7df009e123227c874f679f7b325050fed70affe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IS4XNLC%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQC6vW%2F66D4s79dFQ7voEPKUqEjizOMa9Fr468pSokBjUwIgeHoTCbkS4I2YsgP0PSsKDxW58DmbpT52WmHi%2FQ1ojaUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHund29r4BRKOHfG7ircAyuxCtgrJoyvwu7wlssQbu6ZvhnWmE6Bj3%2BKk3Tbf6rrr7UJLdRgh4K%2BViLWxdAjTE3f6xyF3yxTQBlUM0gX48Kid3rtc8qcwctZ7atKuy2mrE4LXWEvsNbvQkNhV5qQRmgwjAKciks3ZSyflK%2FyV%2Fo8lMI4sP6aBR1uPA4yj2hKB9eHvAB%2BqZ5nYYRaDoACORBBjYdspZnuf4H7v3syr3SE7vpLMS8SwUq06L%2FcNC0F%2BXWdh%2BnLkh%2BIkQMnZLzmKyHNfwvGDwiZhLflLjdlddWI9eIaaF5%2Fo43Ogb2GtpZvX%2BGjrnmujpSyKyT0rriXblkPv6xAzry0bB5zDdQmg56lGGP6so1kH8u%2F2V8s213ei9Rcr2%2B4NzMI0MZsrMSVFsgaHhWkw0DJfu%2FjNcBkSlvpXWR0i0fV8BkN6yzc7UOL5EGbptJG%2BnoEMsFYz8dzog%2BrMEZICIYFyUbLQw9Ecasd7u%2BQtCBMz05yMOMs6q2Weq%2FbZhfit1eE6xrQNjjyKrA76mN9%2B5j4W7Z2s5W0OXUAFbH%2F%2F936JbDtyvwEHJpXS%2BaeElvtukKcShKkq6%2B%2FyHaJae729rHK17BeM1%2Fd8t2WbTdB%2FVbWmW3LQNTrYsk60j1rKDLZUxVv68OCML%2Fe18AGOqUBoJTiA0c8gYo%2BGHA4deodztOfRT%2BM8oWdxBZF5Ntc5AQHt7daBdKHfqA%2BQoTjze0NzruITNeJ8fQprZuSwSjwOncfAKRE5aV43UJ%2F4%2FR0WLSpzFPR5Y92WMFN59nrTlOCcKa%2BjyGdAxKierPj79upggh36saIR%2FwcbZIUUaUYHipHfWwuEQ4tvzDvX6em4gn2wDtjBO4ZhVPNt4Y6xAxliygKt6IV&X-Amz-Signature=91abcba58262614c3e976f2c8b3bbb9efb7197b20533794dec747b89732761c9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IS4XNLC%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQC6vW%2F66D4s79dFQ7voEPKUqEjizOMa9Fr468pSokBjUwIgeHoTCbkS4I2YsgP0PSsKDxW58DmbpT52WmHi%2FQ1ojaUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHund29r4BRKOHfG7ircAyuxCtgrJoyvwu7wlssQbu6ZvhnWmE6Bj3%2BKk3Tbf6rrr7UJLdRgh4K%2BViLWxdAjTE3f6xyF3yxTQBlUM0gX48Kid3rtc8qcwctZ7atKuy2mrE4LXWEvsNbvQkNhV5qQRmgwjAKciks3ZSyflK%2FyV%2Fo8lMI4sP6aBR1uPA4yj2hKB9eHvAB%2BqZ5nYYRaDoACORBBjYdspZnuf4H7v3syr3SE7vpLMS8SwUq06L%2FcNC0F%2BXWdh%2BnLkh%2BIkQMnZLzmKyHNfwvGDwiZhLflLjdlddWI9eIaaF5%2Fo43Ogb2GtpZvX%2BGjrnmujpSyKyT0rriXblkPv6xAzry0bB5zDdQmg56lGGP6so1kH8u%2F2V8s213ei9Rcr2%2B4NzMI0MZsrMSVFsgaHhWkw0DJfu%2FjNcBkSlvpXWR0i0fV8BkN6yzc7UOL5EGbptJG%2BnoEMsFYz8dzog%2BrMEZICIYFyUbLQw9Ecasd7u%2BQtCBMz05yMOMs6q2Weq%2FbZhfit1eE6xrQNjjyKrA76mN9%2B5j4W7Z2s5W0OXUAFbH%2F%2F936JbDtyvwEHJpXS%2BaeElvtukKcShKkq6%2B%2FyHaJae729rHK17BeM1%2Fd8t2WbTdB%2FVbWmW3LQNTrYsk60j1rKDLZUxVv68OCML%2Fe18AGOqUBoJTiA0c8gYo%2BGHA4deodztOfRT%2BM8oWdxBZF5Ntc5AQHt7daBdKHfqA%2BQoTjze0NzruITNeJ8fQprZuSwSjwOncfAKRE5aV43UJ%2F4%2FR0WLSpzFPR5Y92WMFN59nrTlOCcKa%2BjyGdAxKierPj79upggh36saIR%2FwcbZIUUaUYHipHfWwuEQ4tvzDvX6em4gn2wDtjBO4ZhVPNt4Y6xAxliygKt6IV&X-Amz-Signature=8101ae97fd4d0bbbc519e16a99dda5c6be5d629ce3cc5963bbc2cb947707ceef&X-Amz-SignedHeaders=host&x-id=GetObject)
