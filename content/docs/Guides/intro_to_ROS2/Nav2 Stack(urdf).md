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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQFADHS5%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCb4SRsJRJ%2F1KFcM4NGOp%2B%2BwvtHP0Kb5khEx2jGZk%2FW3gIgCgUPZYkTg18zq%2BKAUtUFXXmZqODasM0v%2Fj810LirafwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNB3dNljmKJBJGXnoircA1jY%2ForuRPgLpzBAR3Rwrk%2BgyS1t74xP45r3MWyojIJNLswSjujOh%2FgmhP41o6hQz7sJtU9DN%2FI0iy0JanfC46Q8UHe3e%2FV32Mg4qolcAhr74TdUMO%2BO6WdgWDKCh6yedSqQd%2BrWirnBPLPADfEHV3iHJoTxyC6vuN7%2FeOKwDFV%2Ffr50lYBirIkfy5c7Zkn6NaDdJASzCSW6ats5WfSQHwvtWUS6KM3%2BiUz7fZZLeQrWWZNyDCIPuRUDT%2B05RQsr5rQoAAFvlLTv%2B3yw2qNu4Yi7fw0vI84AXMXQQJXmTDENSFGhkzWb92filCahuicH7xXc2p9gG%2BcThU5mT8XAeRRXspaK2fr1kzcbEfdXJBVHo9493iPM%2Ff8ctoH7RwsqXaAq1LYbo1tkOcaON6eSzCv0m4GfQd6Jko4mS66BbFaD0l17ANnokSoLczkpQS%2FaVJ7LTi%2F4Tj3RmtF%2FzbC3QqKK8BgTFO03wLnZqEPqDQ2Wexogab82q2XFZdG7K8A8g5wzYhIsvf9Q%2F3ssvMv%2BuILD43M1ww4RW6HEq9vQB%2FihSrYrFP5DRLnTVL4GlVRw7Xq2hDF8fYsufIW5bnKZeigokw2S9MvLwmZRtViHSENr03VN8S8Z4%2BYUpOq1MIbY9L4GOqUBqaqV2t%2FF8GQWjl7uyhLlm5KY7oz8vp0nf05ydSbzW6Q%2BlmRo%2BlRMqryVNoMNBx1Ka%2Bu%2BnVzYPRmJ26KPBMbfy8g49WC81dmFEoy0jGiIqAvIiJ%2FYWTGTSsv9m6vwDcHzKJtiEYHT%2FrJMlEtO9HKhEatfEEaehHIohr%2FIsU72Qn3U0DwtBjr%2BSEAGLkohXQER9%2BXXNvFkojnXHIsRiBh7s5445NaA&X-Amz-Signature=8b194a242647956676e29772145abc3cda6efdecaa52a695fe3bb309ba3d8b91&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQFADHS5%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCb4SRsJRJ%2F1KFcM4NGOp%2B%2BwvtHP0Kb5khEx2jGZk%2FW3gIgCgUPZYkTg18zq%2BKAUtUFXXmZqODasM0v%2Fj810LirafwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNB3dNljmKJBJGXnoircA1jY%2ForuRPgLpzBAR3Rwrk%2BgyS1t74xP45r3MWyojIJNLswSjujOh%2FgmhP41o6hQz7sJtU9DN%2FI0iy0JanfC46Q8UHe3e%2FV32Mg4qolcAhr74TdUMO%2BO6WdgWDKCh6yedSqQd%2BrWirnBPLPADfEHV3iHJoTxyC6vuN7%2FeOKwDFV%2Ffr50lYBirIkfy5c7Zkn6NaDdJASzCSW6ats5WfSQHwvtWUS6KM3%2BiUz7fZZLeQrWWZNyDCIPuRUDT%2B05RQsr5rQoAAFvlLTv%2B3yw2qNu4Yi7fw0vI84AXMXQQJXmTDENSFGhkzWb92filCahuicH7xXc2p9gG%2BcThU5mT8XAeRRXspaK2fr1kzcbEfdXJBVHo9493iPM%2Ff8ctoH7RwsqXaAq1LYbo1tkOcaON6eSzCv0m4GfQd6Jko4mS66BbFaD0l17ANnokSoLczkpQS%2FaVJ7LTi%2F4Tj3RmtF%2FzbC3QqKK8BgTFO03wLnZqEPqDQ2Wexogab82q2XFZdG7K8A8g5wzYhIsvf9Q%2F3ssvMv%2BuILD43M1ww4RW6HEq9vQB%2FihSrYrFP5DRLnTVL4GlVRw7Xq2hDF8fYsufIW5bnKZeigokw2S9MvLwmZRtViHSENr03VN8S8Z4%2BYUpOq1MIbY9L4GOqUBqaqV2t%2FF8GQWjl7uyhLlm5KY7oz8vp0nf05ydSbzW6Q%2BlmRo%2BlRMqryVNoMNBx1Ka%2Bu%2BnVzYPRmJ26KPBMbfy8g49WC81dmFEoy0jGiIqAvIiJ%2FYWTGTSsv9m6vwDcHzKJtiEYHT%2FrJMlEtO9HKhEatfEEaehHIohr%2FIsU72Qn3U0DwtBjr%2BSEAGLkohXQER9%2BXXNvFkojnXHIsRiBh7s5445NaA&X-Amz-Signature=c59c9af03091271b95d4d4b712c63cea1665479337943f0211f1662e5fac4888&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQFADHS5%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCb4SRsJRJ%2F1KFcM4NGOp%2B%2BwvtHP0Kb5khEx2jGZk%2FW3gIgCgUPZYkTg18zq%2BKAUtUFXXmZqODasM0v%2Fj810LirafwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNB3dNljmKJBJGXnoircA1jY%2ForuRPgLpzBAR3Rwrk%2BgyS1t74xP45r3MWyojIJNLswSjujOh%2FgmhP41o6hQz7sJtU9DN%2FI0iy0JanfC46Q8UHe3e%2FV32Mg4qolcAhr74TdUMO%2BO6WdgWDKCh6yedSqQd%2BrWirnBPLPADfEHV3iHJoTxyC6vuN7%2FeOKwDFV%2Ffr50lYBirIkfy5c7Zkn6NaDdJASzCSW6ats5WfSQHwvtWUS6KM3%2BiUz7fZZLeQrWWZNyDCIPuRUDT%2B05RQsr5rQoAAFvlLTv%2B3yw2qNu4Yi7fw0vI84AXMXQQJXmTDENSFGhkzWb92filCahuicH7xXc2p9gG%2BcThU5mT8XAeRRXspaK2fr1kzcbEfdXJBVHo9493iPM%2Ff8ctoH7RwsqXaAq1LYbo1tkOcaON6eSzCv0m4GfQd6Jko4mS66BbFaD0l17ANnokSoLczkpQS%2FaVJ7LTi%2F4Tj3RmtF%2FzbC3QqKK8BgTFO03wLnZqEPqDQ2Wexogab82q2XFZdG7K8A8g5wzYhIsvf9Q%2F3ssvMv%2BuILD43M1ww4RW6HEq9vQB%2FihSrYrFP5DRLnTVL4GlVRw7Xq2hDF8fYsufIW5bnKZeigokw2S9MvLwmZRtViHSENr03VN8S8Z4%2BYUpOq1MIbY9L4GOqUBqaqV2t%2FF8GQWjl7uyhLlm5KY7oz8vp0nf05ydSbzW6Q%2BlmRo%2BlRMqryVNoMNBx1Ka%2Bu%2BnVzYPRmJ26KPBMbfy8g49WC81dmFEoy0jGiIqAvIiJ%2FYWTGTSsv9m6vwDcHzKJtiEYHT%2FrJMlEtO9HKhEatfEEaehHIohr%2FIsU72Qn3U0DwtBjr%2BSEAGLkohXQER9%2BXXNvFkojnXHIsRiBh7s5445NaA&X-Amz-Signature=e58f69b7d178b65dc3ebe6f313443353805763ffc73adafafed7ce7e33cff6a2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQFADHS5%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCb4SRsJRJ%2F1KFcM4NGOp%2B%2BwvtHP0Kb5khEx2jGZk%2FW3gIgCgUPZYkTg18zq%2BKAUtUFXXmZqODasM0v%2Fj810LirafwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNB3dNljmKJBJGXnoircA1jY%2ForuRPgLpzBAR3Rwrk%2BgyS1t74xP45r3MWyojIJNLswSjujOh%2FgmhP41o6hQz7sJtU9DN%2FI0iy0JanfC46Q8UHe3e%2FV32Mg4qolcAhr74TdUMO%2BO6WdgWDKCh6yedSqQd%2BrWirnBPLPADfEHV3iHJoTxyC6vuN7%2FeOKwDFV%2Ffr50lYBirIkfy5c7Zkn6NaDdJASzCSW6ats5WfSQHwvtWUS6KM3%2BiUz7fZZLeQrWWZNyDCIPuRUDT%2B05RQsr5rQoAAFvlLTv%2B3yw2qNu4Yi7fw0vI84AXMXQQJXmTDENSFGhkzWb92filCahuicH7xXc2p9gG%2BcThU5mT8XAeRRXspaK2fr1kzcbEfdXJBVHo9493iPM%2Ff8ctoH7RwsqXaAq1LYbo1tkOcaON6eSzCv0m4GfQd6Jko4mS66BbFaD0l17ANnokSoLczkpQS%2FaVJ7LTi%2F4Tj3RmtF%2FzbC3QqKK8BgTFO03wLnZqEPqDQ2Wexogab82q2XFZdG7K8A8g5wzYhIsvf9Q%2F3ssvMv%2BuILD43M1ww4RW6HEq9vQB%2FihSrYrFP5DRLnTVL4GlVRw7Xq2hDF8fYsufIW5bnKZeigokw2S9MvLwmZRtViHSENr03VN8S8Z4%2BYUpOq1MIbY9L4GOqUBqaqV2t%2FF8GQWjl7uyhLlm5KY7oz8vp0nf05ydSbzW6Q%2BlmRo%2BlRMqryVNoMNBx1Ka%2Bu%2BnVzYPRmJ26KPBMbfy8g49WC81dmFEoy0jGiIqAvIiJ%2FYWTGTSsv9m6vwDcHzKJtiEYHT%2FrJMlEtO9HKhEatfEEaehHIohr%2FIsU72Qn3U0DwtBjr%2BSEAGLkohXQER9%2BXXNvFkojnXHIsRiBh7s5445NaA&X-Amz-Signature=53778e1974351ce2999924237f532dd1118123a187515f9637df1c4c57eaffbe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQFADHS5%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCb4SRsJRJ%2F1KFcM4NGOp%2B%2BwvtHP0Kb5khEx2jGZk%2FW3gIgCgUPZYkTg18zq%2BKAUtUFXXmZqODasM0v%2Fj810LirafwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNB3dNljmKJBJGXnoircA1jY%2ForuRPgLpzBAR3Rwrk%2BgyS1t74xP45r3MWyojIJNLswSjujOh%2FgmhP41o6hQz7sJtU9DN%2FI0iy0JanfC46Q8UHe3e%2FV32Mg4qolcAhr74TdUMO%2BO6WdgWDKCh6yedSqQd%2BrWirnBPLPADfEHV3iHJoTxyC6vuN7%2FeOKwDFV%2Ffr50lYBirIkfy5c7Zkn6NaDdJASzCSW6ats5WfSQHwvtWUS6KM3%2BiUz7fZZLeQrWWZNyDCIPuRUDT%2B05RQsr5rQoAAFvlLTv%2B3yw2qNu4Yi7fw0vI84AXMXQQJXmTDENSFGhkzWb92filCahuicH7xXc2p9gG%2BcThU5mT8XAeRRXspaK2fr1kzcbEfdXJBVHo9493iPM%2Ff8ctoH7RwsqXaAq1LYbo1tkOcaON6eSzCv0m4GfQd6Jko4mS66BbFaD0l17ANnokSoLczkpQS%2FaVJ7LTi%2F4Tj3RmtF%2FzbC3QqKK8BgTFO03wLnZqEPqDQ2Wexogab82q2XFZdG7K8A8g5wzYhIsvf9Q%2F3ssvMv%2BuILD43M1ww4RW6HEq9vQB%2FihSrYrFP5DRLnTVL4GlVRw7Xq2hDF8fYsufIW5bnKZeigokw2S9MvLwmZRtViHSENr03VN8S8Z4%2BYUpOq1MIbY9L4GOqUBqaqV2t%2FF8GQWjl7uyhLlm5KY7oz8vp0nf05ydSbzW6Q%2BlmRo%2BlRMqryVNoMNBx1Ka%2Bu%2BnVzYPRmJ26KPBMbfy8g49WC81dmFEoy0jGiIqAvIiJ%2FYWTGTSsv9m6vwDcHzKJtiEYHT%2FrJMlEtO9HKhEatfEEaehHIohr%2FIsU72Qn3U0DwtBjr%2BSEAGLkohXQER9%2BXXNvFkojnXHIsRiBh7s5445NaA&X-Amz-Signature=5738e78b1b4802dff2ba54252b7685097674f00c32321b776fe7a040d23f6557&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQFADHS5%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCb4SRsJRJ%2F1KFcM4NGOp%2B%2BwvtHP0Kb5khEx2jGZk%2FW3gIgCgUPZYkTg18zq%2BKAUtUFXXmZqODasM0v%2Fj810LirafwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNB3dNljmKJBJGXnoircA1jY%2ForuRPgLpzBAR3Rwrk%2BgyS1t74xP45r3MWyojIJNLswSjujOh%2FgmhP41o6hQz7sJtU9DN%2FI0iy0JanfC46Q8UHe3e%2FV32Mg4qolcAhr74TdUMO%2BO6WdgWDKCh6yedSqQd%2BrWirnBPLPADfEHV3iHJoTxyC6vuN7%2FeOKwDFV%2Ffr50lYBirIkfy5c7Zkn6NaDdJASzCSW6ats5WfSQHwvtWUS6KM3%2BiUz7fZZLeQrWWZNyDCIPuRUDT%2B05RQsr5rQoAAFvlLTv%2B3yw2qNu4Yi7fw0vI84AXMXQQJXmTDENSFGhkzWb92filCahuicH7xXc2p9gG%2BcThU5mT8XAeRRXspaK2fr1kzcbEfdXJBVHo9493iPM%2Ff8ctoH7RwsqXaAq1LYbo1tkOcaON6eSzCv0m4GfQd6Jko4mS66BbFaD0l17ANnokSoLczkpQS%2FaVJ7LTi%2F4Tj3RmtF%2FzbC3QqKK8BgTFO03wLnZqEPqDQ2Wexogab82q2XFZdG7K8A8g5wzYhIsvf9Q%2F3ssvMv%2BuILD43M1ww4RW6HEq9vQB%2FihSrYrFP5DRLnTVL4GlVRw7Xq2hDF8fYsufIW5bnKZeigokw2S9MvLwmZRtViHSENr03VN8S8Z4%2BYUpOq1MIbY9L4GOqUBqaqV2t%2FF8GQWjl7uyhLlm5KY7oz8vp0nf05ydSbzW6Q%2BlmRo%2BlRMqryVNoMNBx1Ka%2Bu%2BnVzYPRmJ26KPBMbfy8g49WC81dmFEoy0jGiIqAvIiJ%2FYWTGTSsv9m6vwDcHzKJtiEYHT%2FrJMlEtO9HKhEatfEEaehHIohr%2FIsU72Qn3U0DwtBjr%2BSEAGLkohXQER9%2BXXNvFkojnXHIsRiBh7s5445NaA&X-Amz-Signature=7390efcd35a65eb6e8c726a9de08f928046a18bcdabf0b7bb03d8e9a92d68816&X-Amz-SignedHeaders=host&x-id=GetObject)
