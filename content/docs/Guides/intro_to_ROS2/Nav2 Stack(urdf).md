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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAHIWIFE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCePkifTMJeRofdqoh9DiTZpOoz91LRW7VWCuweRJ2H1QIhAIsvJ%2B73ZKTNMM36JPq1ChnXzc3zHtQqzGeNhcHeXAsuKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdzaQKll0C%2F5zXp5sq3AMKUh9hAea0supwncIyWLTAS7u%2BbVXvAsxRB9XYkZm%2BMGs0s2Xuc36p%2Fsp%2Fn7yq%2F06vJ%2FDeX9KlZICk775W84IuYOFtZx2QTLv2%2FEEs9jpr8YSNaT%2FopYJ4lJ75vuYZ8Txhtz8PCxYK4HG8Rc9FBphCNbcVeK%2BMr%2BI1E3F06Pk6GBfe0qIL6bgrPlFafbAjTGYq0A5g0Jk7oH97L2povB7z5AgwIxYd23agNmih0su5LclKU%2BPUl7FywKO5LG5%2BG3RgTyEPQURVHiNGVcUyWo8JugV0WSvl1HtebmkTETY4FvIBf3XI5cCrXz%2FV4rZKUq1hCzowpQgtKETQsJPPLe2eNQ30SyBap%2BmZIen7wwF1ywQYfXVV%2FkjyRpOGDZI7m5%2BzlwCMKvSa7815wiT071ifQm%2BRMtllSUWK%2FkDG0E5qjPLyNrcokmW1%2FS%2FjiWzn2e8yHT4tqu%2FL27gUpN%2FHl3dOx3vwKC0UMpDCRV3fpGc9XyVDaMGpgxWkfE33UKCq4mAd%2FyRs9IKZhba2JirDlpUBM6J6YIqlN%2Bi2SXzilk3bmUJ%2BCfe7avgDnOjuK79d%2BHysNwu494GrN%2B1CNZllPKuKWnNSuGLNtnjFcNSnMXvaJtbKimLwQJH7comCejDb8OW%2FBjqkAfgpwxwKPPeKnO6go4KcOW2DPIGsXTS8YpJXA9d7bLPztDZrZwDPuJvsRqDtG%2FxKgB6vxrrhHja84zKDpSD00BmzhEpV4DVvBxyrBNCU02KuTwGzxZqsRcVWcn8l9yiI0U5tz4jFogvmNSoV3%2FasBlmIQa5djdliIUWqnhlfgzAVMPLC578uQp5V41XYiZ0Fzo%2FWrE9ehySVKjpASpR81pJpOKrE&X-Amz-Signature=5e58d367a41a9099a7ce10f98701ca8a8b15636a388640ebcc5afcd0b605e26e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAHIWIFE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCePkifTMJeRofdqoh9DiTZpOoz91LRW7VWCuweRJ2H1QIhAIsvJ%2B73ZKTNMM36JPq1ChnXzc3zHtQqzGeNhcHeXAsuKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdzaQKll0C%2F5zXp5sq3AMKUh9hAea0supwncIyWLTAS7u%2BbVXvAsxRB9XYkZm%2BMGs0s2Xuc36p%2Fsp%2Fn7yq%2F06vJ%2FDeX9KlZICk775W84IuYOFtZx2QTLv2%2FEEs9jpr8YSNaT%2FopYJ4lJ75vuYZ8Txhtz8PCxYK4HG8Rc9FBphCNbcVeK%2BMr%2BI1E3F06Pk6GBfe0qIL6bgrPlFafbAjTGYq0A5g0Jk7oH97L2povB7z5AgwIxYd23agNmih0su5LclKU%2BPUl7FywKO5LG5%2BG3RgTyEPQURVHiNGVcUyWo8JugV0WSvl1HtebmkTETY4FvIBf3XI5cCrXz%2FV4rZKUq1hCzowpQgtKETQsJPPLe2eNQ30SyBap%2BmZIen7wwF1ywQYfXVV%2FkjyRpOGDZI7m5%2BzlwCMKvSa7815wiT071ifQm%2BRMtllSUWK%2FkDG0E5qjPLyNrcokmW1%2FS%2FjiWzn2e8yHT4tqu%2FL27gUpN%2FHl3dOx3vwKC0UMpDCRV3fpGc9XyVDaMGpgxWkfE33UKCq4mAd%2FyRs9IKZhba2JirDlpUBM6J6YIqlN%2Bi2SXzilk3bmUJ%2BCfe7avgDnOjuK79d%2BHysNwu494GrN%2B1CNZllPKuKWnNSuGLNtnjFcNSnMXvaJtbKimLwQJH7comCejDb8OW%2FBjqkAfgpwxwKPPeKnO6go4KcOW2DPIGsXTS8YpJXA9d7bLPztDZrZwDPuJvsRqDtG%2FxKgB6vxrrhHja84zKDpSD00BmzhEpV4DVvBxyrBNCU02KuTwGzxZqsRcVWcn8l9yiI0U5tz4jFogvmNSoV3%2FasBlmIQa5djdliIUWqnhlfgzAVMPLC578uQp5V41XYiZ0Fzo%2FWrE9ehySVKjpASpR81pJpOKrE&X-Amz-Signature=4b6bc9d47480a243c5c713e617502226abbdfe382c08d92f9254096d53053d83&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAHIWIFE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCePkifTMJeRofdqoh9DiTZpOoz91LRW7VWCuweRJ2H1QIhAIsvJ%2B73ZKTNMM36JPq1ChnXzc3zHtQqzGeNhcHeXAsuKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdzaQKll0C%2F5zXp5sq3AMKUh9hAea0supwncIyWLTAS7u%2BbVXvAsxRB9XYkZm%2BMGs0s2Xuc36p%2Fsp%2Fn7yq%2F06vJ%2FDeX9KlZICk775W84IuYOFtZx2QTLv2%2FEEs9jpr8YSNaT%2FopYJ4lJ75vuYZ8Txhtz8PCxYK4HG8Rc9FBphCNbcVeK%2BMr%2BI1E3F06Pk6GBfe0qIL6bgrPlFafbAjTGYq0A5g0Jk7oH97L2povB7z5AgwIxYd23agNmih0su5LclKU%2BPUl7FywKO5LG5%2BG3RgTyEPQURVHiNGVcUyWo8JugV0WSvl1HtebmkTETY4FvIBf3XI5cCrXz%2FV4rZKUq1hCzowpQgtKETQsJPPLe2eNQ30SyBap%2BmZIen7wwF1ywQYfXVV%2FkjyRpOGDZI7m5%2BzlwCMKvSa7815wiT071ifQm%2BRMtllSUWK%2FkDG0E5qjPLyNrcokmW1%2FS%2FjiWzn2e8yHT4tqu%2FL27gUpN%2FHl3dOx3vwKC0UMpDCRV3fpGc9XyVDaMGpgxWkfE33UKCq4mAd%2FyRs9IKZhba2JirDlpUBM6J6YIqlN%2Bi2SXzilk3bmUJ%2BCfe7avgDnOjuK79d%2BHysNwu494GrN%2B1CNZllPKuKWnNSuGLNtnjFcNSnMXvaJtbKimLwQJH7comCejDb8OW%2FBjqkAfgpwxwKPPeKnO6go4KcOW2DPIGsXTS8YpJXA9d7bLPztDZrZwDPuJvsRqDtG%2FxKgB6vxrrhHja84zKDpSD00BmzhEpV4DVvBxyrBNCU02KuTwGzxZqsRcVWcn8l9yiI0U5tz4jFogvmNSoV3%2FasBlmIQa5djdliIUWqnhlfgzAVMPLC578uQp5V41XYiZ0Fzo%2FWrE9ehySVKjpASpR81pJpOKrE&X-Amz-Signature=6e9d3888988bba8edcb10eb74880df960e153b06211668ede893ecde814797ab&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAHIWIFE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCePkifTMJeRofdqoh9DiTZpOoz91LRW7VWCuweRJ2H1QIhAIsvJ%2B73ZKTNMM36JPq1ChnXzc3zHtQqzGeNhcHeXAsuKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdzaQKll0C%2F5zXp5sq3AMKUh9hAea0supwncIyWLTAS7u%2BbVXvAsxRB9XYkZm%2BMGs0s2Xuc36p%2Fsp%2Fn7yq%2F06vJ%2FDeX9KlZICk775W84IuYOFtZx2QTLv2%2FEEs9jpr8YSNaT%2FopYJ4lJ75vuYZ8Txhtz8PCxYK4HG8Rc9FBphCNbcVeK%2BMr%2BI1E3F06Pk6GBfe0qIL6bgrPlFafbAjTGYq0A5g0Jk7oH97L2povB7z5AgwIxYd23agNmih0su5LclKU%2BPUl7FywKO5LG5%2BG3RgTyEPQURVHiNGVcUyWo8JugV0WSvl1HtebmkTETY4FvIBf3XI5cCrXz%2FV4rZKUq1hCzowpQgtKETQsJPPLe2eNQ30SyBap%2BmZIen7wwF1ywQYfXVV%2FkjyRpOGDZI7m5%2BzlwCMKvSa7815wiT071ifQm%2BRMtllSUWK%2FkDG0E5qjPLyNrcokmW1%2FS%2FjiWzn2e8yHT4tqu%2FL27gUpN%2FHl3dOx3vwKC0UMpDCRV3fpGc9XyVDaMGpgxWkfE33UKCq4mAd%2FyRs9IKZhba2JirDlpUBM6J6YIqlN%2Bi2SXzilk3bmUJ%2BCfe7avgDnOjuK79d%2BHysNwu494GrN%2B1CNZllPKuKWnNSuGLNtnjFcNSnMXvaJtbKimLwQJH7comCejDb8OW%2FBjqkAfgpwxwKPPeKnO6go4KcOW2DPIGsXTS8YpJXA9d7bLPztDZrZwDPuJvsRqDtG%2FxKgB6vxrrhHja84zKDpSD00BmzhEpV4DVvBxyrBNCU02KuTwGzxZqsRcVWcn8l9yiI0U5tz4jFogvmNSoV3%2FasBlmIQa5djdliIUWqnhlfgzAVMPLC578uQp5V41XYiZ0Fzo%2FWrE9ehySVKjpASpR81pJpOKrE&X-Amz-Signature=7e446b4025a2eeff8773b0a172bbd432993175a80fa900d65d8bdc237c7552a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAHIWIFE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCePkifTMJeRofdqoh9DiTZpOoz91LRW7VWCuweRJ2H1QIhAIsvJ%2B73ZKTNMM36JPq1ChnXzc3zHtQqzGeNhcHeXAsuKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdzaQKll0C%2F5zXp5sq3AMKUh9hAea0supwncIyWLTAS7u%2BbVXvAsxRB9XYkZm%2BMGs0s2Xuc36p%2Fsp%2Fn7yq%2F06vJ%2FDeX9KlZICk775W84IuYOFtZx2QTLv2%2FEEs9jpr8YSNaT%2FopYJ4lJ75vuYZ8Txhtz8PCxYK4HG8Rc9FBphCNbcVeK%2BMr%2BI1E3F06Pk6GBfe0qIL6bgrPlFafbAjTGYq0A5g0Jk7oH97L2povB7z5AgwIxYd23agNmih0su5LclKU%2BPUl7FywKO5LG5%2BG3RgTyEPQURVHiNGVcUyWo8JugV0WSvl1HtebmkTETY4FvIBf3XI5cCrXz%2FV4rZKUq1hCzowpQgtKETQsJPPLe2eNQ30SyBap%2BmZIen7wwF1ywQYfXVV%2FkjyRpOGDZI7m5%2BzlwCMKvSa7815wiT071ifQm%2BRMtllSUWK%2FkDG0E5qjPLyNrcokmW1%2FS%2FjiWzn2e8yHT4tqu%2FL27gUpN%2FHl3dOx3vwKC0UMpDCRV3fpGc9XyVDaMGpgxWkfE33UKCq4mAd%2FyRs9IKZhba2JirDlpUBM6J6YIqlN%2Bi2SXzilk3bmUJ%2BCfe7avgDnOjuK79d%2BHysNwu494GrN%2B1CNZllPKuKWnNSuGLNtnjFcNSnMXvaJtbKimLwQJH7comCejDb8OW%2FBjqkAfgpwxwKPPeKnO6go4KcOW2DPIGsXTS8YpJXA9d7bLPztDZrZwDPuJvsRqDtG%2FxKgB6vxrrhHja84zKDpSD00BmzhEpV4DVvBxyrBNCU02KuTwGzxZqsRcVWcn8l9yiI0U5tz4jFogvmNSoV3%2FasBlmIQa5djdliIUWqnhlfgzAVMPLC578uQp5V41XYiZ0Fzo%2FWrE9ehySVKjpASpR81pJpOKrE&X-Amz-Signature=065048bce32b56d431d914500aa2299ed18112331c3c7d409e10e901a15bbfab&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAHIWIFE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCePkifTMJeRofdqoh9DiTZpOoz91LRW7VWCuweRJ2H1QIhAIsvJ%2B73ZKTNMM36JPq1ChnXzc3zHtQqzGeNhcHeXAsuKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdzaQKll0C%2F5zXp5sq3AMKUh9hAea0supwncIyWLTAS7u%2BbVXvAsxRB9XYkZm%2BMGs0s2Xuc36p%2Fsp%2Fn7yq%2F06vJ%2FDeX9KlZICk775W84IuYOFtZx2QTLv2%2FEEs9jpr8YSNaT%2FopYJ4lJ75vuYZ8Txhtz8PCxYK4HG8Rc9FBphCNbcVeK%2BMr%2BI1E3F06Pk6GBfe0qIL6bgrPlFafbAjTGYq0A5g0Jk7oH97L2povB7z5AgwIxYd23agNmih0su5LclKU%2BPUl7FywKO5LG5%2BG3RgTyEPQURVHiNGVcUyWo8JugV0WSvl1HtebmkTETY4FvIBf3XI5cCrXz%2FV4rZKUq1hCzowpQgtKETQsJPPLe2eNQ30SyBap%2BmZIen7wwF1ywQYfXVV%2FkjyRpOGDZI7m5%2BzlwCMKvSa7815wiT071ifQm%2BRMtllSUWK%2FkDG0E5qjPLyNrcokmW1%2FS%2FjiWzn2e8yHT4tqu%2FL27gUpN%2FHl3dOx3vwKC0UMpDCRV3fpGc9XyVDaMGpgxWkfE33UKCq4mAd%2FyRs9IKZhba2JirDlpUBM6J6YIqlN%2Bi2SXzilk3bmUJ%2BCfe7avgDnOjuK79d%2BHysNwu494GrN%2B1CNZllPKuKWnNSuGLNtnjFcNSnMXvaJtbKimLwQJH7comCejDb8OW%2FBjqkAfgpwxwKPPeKnO6go4KcOW2DPIGsXTS8YpJXA9d7bLPztDZrZwDPuJvsRqDtG%2FxKgB6vxrrhHja84zKDpSD00BmzhEpV4DVvBxyrBNCU02KuTwGzxZqsRcVWcn8l9yiI0U5tz4jFogvmNSoV3%2FasBlmIQa5djdliIUWqnhlfgzAVMPLC578uQp5V41XYiZ0Fzo%2FWrE9ehySVKjpASpR81pJpOKrE&X-Amz-Signature=05629c764e43dfb8415ee00ba1aa95e03f6dba3b461c5cf60f5a3bafdfb613ee&X-Amz-SignedHeaders=host&x-id=GetObject)
