---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-19T09:18:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-19T09:18:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide: [https://docs.nav2.org/setup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

---

This part of the guide goes over [Nav2](https://docs.nav2.org/index.html) which is a package in ROS that provides autonomous navigation.

In this guide we will build a simple differential drive (tank drive) robot

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YDFUQKT%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC5X6Cp6NXayByLlI0s55pgkHoBCP%2Brcc7J5%2FNx656AZwIgFCeHSBNfP4ctnvbVHOtqAr0l0UyBSYa4Lb9S4ULykjYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJYaZnUKkWKekHshyrcA5n2CIJxPZUHVHeXP2Yqmkf9%2B9Ugd8V4exGGwxHAkj4%2Fqwx7wXYV9mDkrETDiqI7umafUtZN5Orm1nMtCWT0gyPwbtag9pUN7QnuXNlqEGGIaWpVKzmkNM4BWmFpYVxvZFN7iMhk2dB%2Bw0X%2BAgNfLoHu0jalv4C8Xi%2BoKB1hH8ncZ45Zycl9gZPSz2k%2FNFVM7Z5yct3gH1zeBt57QRGkfTe1nmLTCfhZ0lP7WWUbYICaU9mMtDChNO2eo11u1U%2FRmlqXtqNkayaD2DIT%2FHC1hJmE7lnNKz0RzNHO1N%2BL8gs2KsPPYJ7Q9hWON%2Byj%2Fgra1yJoemfuEnO3IOBarCbZlSkZJ%2F35ecqUEArXlowzY4bmZ%2Fp49AmGbyLqu8HA%2FZ7JL1XR%2FO3G%2Bu%2Fs0CzIKcJdmnrO%2BZV8ewK8Ue%2Bee5BdNC1xEhLtfH61G3YQsENlGYdaETiLFJypm36YX7T63nOZ%2BwqBksqsjh1mjZgxgByM00RSTq2CwST49Zls552Awt21pEEDf41N36Vyo0GS%2F3JfCD4z3BvCDGC%2FqSCxquQBXGm1FAii5BGwh7VsnGv3lzQXWdaDzjNGyTtkOkxcbr0ab3Qtn17lT0ftIQkDzfdkVvpzk4dMPXbhcM6WzztaMNCMg8YGOqUBjQq9JvTumFHfU8CmDDMSJvw4325BvQCW4c6dmz3WufgR%2BvkHqjxWnVhwxoHHZ%2FArhEhljo%2FV%2BDnvlLftnyNf29tpio7H45bdFiR5hPpnmOaEyPRWoqaueE5cg4FF7ClgYWp6ehmCDpHH3tfGFf3kaM1QQ0gFDQWxHah2mndrosEruZtD%2Ft3hPASvC%2Fcjgvu6qUIwZ6gnRtDy3wusmXQgkC1U8mqG&X-Amz-Signature=ab09590a5a4bde1d43078889fbb78bd0b40d18bb77e243c7687a42b1db3b7855&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YDFUQKT%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC5X6Cp6NXayByLlI0s55pgkHoBCP%2Brcc7J5%2FNx656AZwIgFCeHSBNfP4ctnvbVHOtqAr0l0UyBSYa4Lb9S4ULykjYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJYaZnUKkWKekHshyrcA5n2CIJxPZUHVHeXP2Yqmkf9%2B9Ugd8V4exGGwxHAkj4%2Fqwx7wXYV9mDkrETDiqI7umafUtZN5Orm1nMtCWT0gyPwbtag9pUN7QnuXNlqEGGIaWpVKzmkNM4BWmFpYVxvZFN7iMhk2dB%2Bw0X%2BAgNfLoHu0jalv4C8Xi%2BoKB1hH8ncZ45Zycl9gZPSz2k%2FNFVM7Z5yct3gH1zeBt57QRGkfTe1nmLTCfhZ0lP7WWUbYICaU9mMtDChNO2eo11u1U%2FRmlqXtqNkayaD2DIT%2FHC1hJmE7lnNKz0RzNHO1N%2BL8gs2KsPPYJ7Q9hWON%2Byj%2Fgra1yJoemfuEnO3IOBarCbZlSkZJ%2F35ecqUEArXlowzY4bmZ%2Fp49AmGbyLqu8HA%2FZ7JL1XR%2FO3G%2Bu%2Fs0CzIKcJdmnrO%2BZV8ewK8Ue%2Bee5BdNC1xEhLtfH61G3YQsENlGYdaETiLFJypm36YX7T63nOZ%2BwqBksqsjh1mjZgxgByM00RSTq2CwST49Zls552Awt21pEEDf41N36Vyo0GS%2F3JfCD4z3BvCDGC%2FqSCxquQBXGm1FAii5BGwh7VsnGv3lzQXWdaDzjNGyTtkOkxcbr0ab3Qtn17lT0ftIQkDzfdkVvpzk4dMPXbhcM6WzztaMNCMg8YGOqUBjQq9JvTumFHfU8CmDDMSJvw4325BvQCW4c6dmz3WufgR%2BvkHqjxWnVhwxoHHZ%2FArhEhljo%2FV%2BDnvlLftnyNf29tpio7H45bdFiR5hPpnmOaEyPRWoqaueE5cg4FF7ClgYWp6ehmCDpHH3tfGFf3kaM1QQ0gFDQWxHah2mndrosEruZtD%2Ft3hPASvC%2Fcjgvu6qUIwZ6gnRtDy3wusmXQgkC1U8mqG&X-Amz-Signature=bd68a02526e2fd370861e1790890e96c2e69391a157eea7b5cc1b581890a4e49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YDFUQKT%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC5X6Cp6NXayByLlI0s55pgkHoBCP%2Brcc7J5%2FNx656AZwIgFCeHSBNfP4ctnvbVHOtqAr0l0UyBSYa4Lb9S4ULykjYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJYaZnUKkWKekHshyrcA5n2CIJxPZUHVHeXP2Yqmkf9%2B9Ugd8V4exGGwxHAkj4%2Fqwx7wXYV9mDkrETDiqI7umafUtZN5Orm1nMtCWT0gyPwbtag9pUN7QnuXNlqEGGIaWpVKzmkNM4BWmFpYVxvZFN7iMhk2dB%2Bw0X%2BAgNfLoHu0jalv4C8Xi%2BoKB1hH8ncZ45Zycl9gZPSz2k%2FNFVM7Z5yct3gH1zeBt57QRGkfTe1nmLTCfhZ0lP7WWUbYICaU9mMtDChNO2eo11u1U%2FRmlqXtqNkayaD2DIT%2FHC1hJmE7lnNKz0RzNHO1N%2BL8gs2KsPPYJ7Q9hWON%2Byj%2Fgra1yJoemfuEnO3IOBarCbZlSkZJ%2F35ecqUEArXlowzY4bmZ%2Fp49AmGbyLqu8HA%2FZ7JL1XR%2FO3G%2Bu%2Fs0CzIKcJdmnrO%2BZV8ewK8Ue%2Bee5BdNC1xEhLtfH61G3YQsENlGYdaETiLFJypm36YX7T63nOZ%2BwqBksqsjh1mjZgxgByM00RSTq2CwST49Zls552Awt21pEEDf41N36Vyo0GS%2F3JfCD4z3BvCDGC%2FqSCxquQBXGm1FAii5BGwh7VsnGv3lzQXWdaDzjNGyTtkOkxcbr0ab3Qtn17lT0ftIQkDzfdkVvpzk4dMPXbhcM6WzztaMNCMg8YGOqUBjQq9JvTumFHfU8CmDDMSJvw4325BvQCW4c6dmz3WufgR%2BvkHqjxWnVhwxoHHZ%2FArhEhljo%2FV%2BDnvlLftnyNf29tpio7H45bdFiR5hPpnmOaEyPRWoqaueE5cg4FF7ClgYWp6ehmCDpHH3tfGFf3kaM1QQ0gFDQWxHah2mndrosEruZtD%2Ft3hPASvC%2Fcjgvu6qUIwZ6gnRtDy3wusmXQgkC1U8mqG&X-Amz-Signature=1537393c616d39b05262149bac504817447a91401c5b125abcdaf36ecfa18a41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are many reasons for this because

- keeps all your code in one place
- You don’t need a monitor, mouse, and keyboard to connect to your Raspberry Pi
- Your laptop is much much faster than your Raspberry Pi so debugging is faster
- Once you are done developing on your laptop all you have to do is copy all the files over to the Pi and Docker will automatically make it work

{{% /alert %}}

## Creating workspace + package

[What are ROS workspaces/packages?](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-packages/)

```bash
mkdir -p mbot_ws/src
cd mbot_ws/src
ros2 pkg create --build-type ament_python --license Apache-2.0 --node-name my_node mbot_pkg
```

### Building 

```bash
cd ../ # you should be in the mbot_ws folder after running this
colcon build --symlink-install  
source install/setup.bash
```

## install pkg

{{< tabs tabTotal="2">}}
{{% tab tabName="Dev container" %}}

If you are doing the Dev container setup put these at the bottom of your `Dockerfile` in `.devcontainer/Dockerfile`

```bash

################################
## ADD ANY CUSTOM SETUP BELOW ##
################################

RUN sudo apt update

# Rosdep update
RUN rosdep update --rosdistro ${ROS_DISTRO}

# Install dependencies
RUN sudo apt-get install -y \
    python3-colcon-common-extensions \
    ros-${ROS_DISTRO}-xacro \
    ros-${ROS_DISTRO}-ament-cmake \
    ros-${ROS_DISTRO}-robot-localization \
    ros-${ROS_DISTRO}-joint-state-publisher-gui \
    ros-${ROS_DISTRO}-slam-toolbox \
    ros-${ROS_DISTRO}-navigation2 \
    ros-${ROS_DISTRO}-nav2-bringup \
    ros-${ROS_DISTRO}-tf-transformations \
    ros-${ROS_DISTRO}-librealsense2* \
    ros-${ROS_DISTRO}-realsense2-* \
    ros-${ROS_DISTRO}-rqt-tf-tree \
    ros-${ROS_DISTRO}-foxglove-bridge \
    ros-${ROS_DISTRO}-ros-gz 

RUN sudo apt-get install -y python3-pip \
    && sudo rm -rf /var/lib/apt/lists/*


# enable extra quality of life plugins
RUN echo "source /usr/share/colcon_argcomplete/hook/colcon-argcomplete.bash" >> ~/.bashrc
RUN echo "source /usr/share/colcon_cd/function/colcon_cd.sh" >> ~/.bashrc
RUN echo "export _colcon_cd_root=/opt/ros/${ROS_DISTRO}/" >> ~/.bashrc
RUN echo "export RCUTILS_COLORIZED_OUTPUT=1" >> ~/.bashrc


# Source the ROS setup file
RUN echo "source /<your root folder>/mbot_ws/install/setup.bash" >> ~/.bashrc
```

**Example:**

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YDFUQKT%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC5X6Cp6NXayByLlI0s55pgkHoBCP%2Brcc7J5%2FNx656AZwIgFCeHSBNfP4ctnvbVHOtqAr0l0UyBSYa4Lb9S4ULykjYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJYaZnUKkWKekHshyrcA5n2CIJxPZUHVHeXP2Yqmkf9%2B9Ugd8V4exGGwxHAkj4%2Fqwx7wXYV9mDkrETDiqI7umafUtZN5Orm1nMtCWT0gyPwbtag9pUN7QnuXNlqEGGIaWpVKzmkNM4BWmFpYVxvZFN7iMhk2dB%2Bw0X%2BAgNfLoHu0jalv4C8Xi%2BoKB1hH8ncZ45Zycl9gZPSz2k%2FNFVM7Z5yct3gH1zeBt57QRGkfTe1nmLTCfhZ0lP7WWUbYICaU9mMtDChNO2eo11u1U%2FRmlqXtqNkayaD2DIT%2FHC1hJmE7lnNKz0RzNHO1N%2BL8gs2KsPPYJ7Q9hWON%2Byj%2Fgra1yJoemfuEnO3IOBarCbZlSkZJ%2F35ecqUEArXlowzY4bmZ%2Fp49AmGbyLqu8HA%2FZ7JL1XR%2FO3G%2Bu%2Fs0CzIKcJdmnrO%2BZV8ewK8Ue%2Bee5BdNC1xEhLtfH61G3YQsENlGYdaETiLFJypm36YX7T63nOZ%2BwqBksqsjh1mjZgxgByM00RSTq2CwST49Zls552Awt21pEEDf41N36Vyo0GS%2F3JfCD4z3BvCDGC%2FqSCxquQBXGm1FAii5BGwh7VsnGv3lzQXWdaDzjNGyTtkOkxcbr0ab3Qtn17lT0ftIQkDzfdkVvpzk4dMPXbhcM6WzztaMNCMg8YGOqUBjQq9JvTumFHfU8CmDDMSJvw4325BvQCW4c6dmz3WufgR%2BvkHqjxWnVhwxoHHZ%2FArhEhljo%2FV%2BDnvlLftnyNf29tpio7H45bdFiR5hPpnmOaEyPRWoqaueE5cg4FF7ClgYWp6ehmCDpHH3tfGFf3kaM1QQ0gFDQWxHah2mndrosEruZtD%2Ft3hPASvC%2Fcjgvu6qUIwZ6gnRtDy3wusmXQgkC1U8mqG&X-Amz-Signature=be3643f71a99190db0ab8ed686298f249a4a202e1d2edffa5679983348b8835e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YDFUQKT%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC5X6Cp6NXayByLlI0s55pgkHoBCP%2Brcc7J5%2FNx656AZwIgFCeHSBNfP4ctnvbVHOtqAr0l0UyBSYa4Lb9S4ULykjYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJYaZnUKkWKekHshyrcA5n2CIJxPZUHVHeXP2Yqmkf9%2B9Ugd8V4exGGwxHAkj4%2Fqwx7wXYV9mDkrETDiqI7umafUtZN5Orm1nMtCWT0gyPwbtag9pUN7QnuXNlqEGGIaWpVKzmkNM4BWmFpYVxvZFN7iMhk2dB%2Bw0X%2BAgNfLoHu0jalv4C8Xi%2BoKB1hH8ncZ45Zycl9gZPSz2k%2FNFVM7Z5yct3gH1zeBt57QRGkfTe1nmLTCfhZ0lP7WWUbYICaU9mMtDChNO2eo11u1U%2FRmlqXtqNkayaD2DIT%2FHC1hJmE7lnNKz0RzNHO1N%2BL8gs2KsPPYJ7Q9hWON%2Byj%2Fgra1yJoemfuEnO3IOBarCbZlSkZJ%2F35ecqUEArXlowzY4bmZ%2Fp49AmGbyLqu8HA%2FZ7JL1XR%2FO3G%2Bu%2Fs0CzIKcJdmnrO%2BZV8ewK8Ue%2Bee5BdNC1xEhLtfH61G3YQsENlGYdaETiLFJypm36YX7T63nOZ%2BwqBksqsjh1mjZgxgByM00RSTq2CwST49Zls552Awt21pEEDf41N36Vyo0GS%2F3JfCD4z3BvCDGC%2FqSCxquQBXGm1FAii5BGwh7VsnGv3lzQXWdaDzjNGyTtkOkxcbr0ab3Qtn17lT0ftIQkDzfdkVvpzk4dMPXbhcM6WzztaMNCMg8YGOqUBjQq9JvTumFHfU8CmDDMSJvw4325BvQCW4c6dmz3WufgR%2BvkHqjxWnVhwxoHHZ%2FArhEhljo%2FV%2BDnvlLftnyNf29tpio7H45bdFiR5hPpnmOaEyPRWoqaueE5cg4FF7ClgYWp6ehmCDpHH3tfGFf3kaM1QQ0gFDQWxHah2mndrosEruZtD%2Ft3hPASvC%2Fcjgvu6qUIwZ6gnRtDy3wusmXQgkC1U8mqG&X-Amz-Signature=8c6d879bee4bc0117272cacda7bf0fbde2c0c5f7a2de19c7b279a85b02602bbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YDFUQKT%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC5X6Cp6NXayByLlI0s55pgkHoBCP%2Brcc7J5%2FNx656AZwIgFCeHSBNfP4ctnvbVHOtqAr0l0UyBSYa4Lb9S4ULykjYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJYaZnUKkWKekHshyrcA5n2CIJxPZUHVHeXP2Yqmkf9%2B9Ugd8V4exGGwxHAkj4%2Fqwx7wXYV9mDkrETDiqI7umafUtZN5Orm1nMtCWT0gyPwbtag9pUN7QnuXNlqEGGIaWpVKzmkNM4BWmFpYVxvZFN7iMhk2dB%2Bw0X%2BAgNfLoHu0jalv4C8Xi%2BoKB1hH8ncZ45Zycl9gZPSz2k%2FNFVM7Z5yct3gH1zeBt57QRGkfTe1nmLTCfhZ0lP7WWUbYICaU9mMtDChNO2eo11u1U%2FRmlqXtqNkayaD2DIT%2FHC1hJmE7lnNKz0RzNHO1N%2BL8gs2KsPPYJ7Q9hWON%2Byj%2Fgra1yJoemfuEnO3IOBarCbZlSkZJ%2F35ecqUEArXlowzY4bmZ%2Fp49AmGbyLqu8HA%2FZ7JL1XR%2FO3G%2Bu%2Fs0CzIKcJdmnrO%2BZV8ewK8Ue%2Bee5BdNC1xEhLtfH61G3YQsENlGYdaETiLFJypm36YX7T63nOZ%2BwqBksqsjh1mjZgxgByM00RSTq2CwST49Zls552Awt21pEEDf41N36Vyo0GS%2F3JfCD4z3BvCDGC%2FqSCxquQBXGm1FAii5BGwh7VsnGv3lzQXWdaDzjNGyTtkOkxcbr0ab3Qtn17lT0ftIQkDzfdkVvpzk4dMPXbhcM6WzztaMNCMg8YGOqUBjQq9JvTumFHfU8CmDDMSJvw4325BvQCW4c6dmz3WufgR%2BvkHqjxWnVhwxoHHZ%2FArhEhljo%2FV%2BDnvlLftnyNf29tpio7H45bdFiR5hPpnmOaEyPRWoqaueE5cg4FF7ClgYWp6ehmCDpHH3tfGFf3kaM1QQ0gFDQWxHah2mndrosEruZtD%2Ft3hPASvC%2Fcjgvu6qUIwZ6gnRtDy3wusmXQgkC1U8mqG&X-Amz-Signature=1221999801b88a5248aed9f65707364ecad0920dc0c20ec8dc2189820d119f5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> NOTE: every time you do an `apt install ...` you need to add it to the dev container to make it stay permanently

I also recommend you add these extensions to your dev container in `devcontainer.json`

```json
  "customizations": {
    "vscode": {
      "extensions": [
        "ms-python.python",
        "VisualStudioExptTeam.vscodeintellicode",
        "twxs.cmake",
        "zchrissirhcz.cmake-highlight",
        "Ranch-Hand-Robotics.urdf-editor"
      ]
    }
  }
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YDFUQKT%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC5X6Cp6NXayByLlI0s55pgkHoBCP%2Brcc7J5%2FNx656AZwIgFCeHSBNfP4ctnvbVHOtqAr0l0UyBSYa4Lb9S4ULykjYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJYaZnUKkWKekHshyrcA5n2CIJxPZUHVHeXP2Yqmkf9%2B9Ugd8V4exGGwxHAkj4%2Fqwx7wXYV9mDkrETDiqI7umafUtZN5Orm1nMtCWT0gyPwbtag9pUN7QnuXNlqEGGIaWpVKzmkNM4BWmFpYVxvZFN7iMhk2dB%2Bw0X%2BAgNfLoHu0jalv4C8Xi%2BoKB1hH8ncZ45Zycl9gZPSz2k%2FNFVM7Z5yct3gH1zeBt57QRGkfTe1nmLTCfhZ0lP7WWUbYICaU9mMtDChNO2eo11u1U%2FRmlqXtqNkayaD2DIT%2FHC1hJmE7lnNKz0RzNHO1N%2BL8gs2KsPPYJ7Q9hWON%2Byj%2Fgra1yJoemfuEnO3IOBarCbZlSkZJ%2F35ecqUEArXlowzY4bmZ%2Fp49AmGbyLqu8HA%2FZ7JL1XR%2FO3G%2Bu%2Fs0CzIKcJdmnrO%2BZV8ewK8Ue%2Bee5BdNC1xEhLtfH61G3YQsENlGYdaETiLFJypm36YX7T63nOZ%2BwqBksqsjh1mjZgxgByM00RSTq2CwST49Zls552Awt21pEEDf41N36Vyo0GS%2F3JfCD4z3BvCDGC%2FqSCxquQBXGm1FAii5BGwh7VsnGv3lzQXWdaDzjNGyTtkOkxcbr0ab3Qtn17lT0ftIQkDzfdkVvpzk4dMPXbhcM6WzztaMNCMg8YGOqUBjQq9JvTumFHfU8CmDDMSJvw4325BvQCW4c6dmz3WufgR%2BvkHqjxWnVhwxoHHZ%2FArhEhljo%2FV%2BDnvlLftnyNf29tpio7H45bdFiR5hPpnmOaEyPRWoqaueE5cg4FF7ClgYWp6ehmCDpHH3tfGFf3kaM1QQ0gFDQWxHah2mndrosEruZtD%2Ft3hPASvC%2Fcjgvu6qUIwZ6gnRtDy3wusmXQgkC1U8mqG&X-Amz-Signature=ea16c4a13a8d05dc018e8898b102269f46e943b085eec0dd23cad497c07f13a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% /tab %}}
{{% tab tabName="Linux" %}}

Install these packages (if you are not running the dev container setup)

```bash
sudo apt install ros-$ROS2_DISTRO-joint-state-publisher-gui
sudo apt install ros-$ROS2_DISTRO-xacro
```

{{% /tab %}}
{{< /tabs >}}

---

# Building your robot in URDF

make a folder in `mbot_pkg` called `description` and a file called `mbot_description.urdf`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YDFUQKT%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC5X6Cp6NXayByLlI0s55pgkHoBCP%2Brcc7J5%2FNx656AZwIgFCeHSBNfP4ctnvbVHOtqAr0l0UyBSYa4Lb9S4ULykjYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJYaZnUKkWKekHshyrcA5n2CIJxPZUHVHeXP2Yqmkf9%2B9Ugd8V4exGGwxHAkj4%2Fqwx7wXYV9mDkrETDiqI7umafUtZN5Orm1nMtCWT0gyPwbtag9pUN7QnuXNlqEGGIaWpVKzmkNM4BWmFpYVxvZFN7iMhk2dB%2Bw0X%2BAgNfLoHu0jalv4C8Xi%2BoKB1hH8ncZ45Zycl9gZPSz2k%2FNFVM7Z5yct3gH1zeBt57QRGkfTe1nmLTCfhZ0lP7WWUbYICaU9mMtDChNO2eo11u1U%2FRmlqXtqNkayaD2DIT%2FHC1hJmE7lnNKz0RzNHO1N%2BL8gs2KsPPYJ7Q9hWON%2Byj%2Fgra1yJoemfuEnO3IOBarCbZlSkZJ%2F35ecqUEArXlowzY4bmZ%2Fp49AmGbyLqu8HA%2FZ7JL1XR%2FO3G%2Bu%2Fs0CzIKcJdmnrO%2BZV8ewK8Ue%2Bee5BdNC1xEhLtfH61G3YQsENlGYdaETiLFJypm36YX7T63nOZ%2BwqBksqsjh1mjZgxgByM00RSTq2CwST49Zls552Awt21pEEDf41N36Vyo0GS%2F3JfCD4z3BvCDGC%2FqSCxquQBXGm1FAii5BGwh7VsnGv3lzQXWdaDzjNGyTtkOkxcbr0ab3Qtn17lT0ftIQkDzfdkVvpzk4dMPXbhcM6WzztaMNCMg8YGOqUBjQq9JvTumFHfU8CmDDMSJvw4325BvQCW4c6dmz3WufgR%2BvkHqjxWnVhwxoHHZ%2FArhEhljo%2FV%2BDnvlLftnyNf29tpio7H45bdFiR5hPpnmOaEyPRWoqaueE5cg4FF7ClgYWp6ehmCDpHH3tfGFf3kaM1QQ0gFDQWxHah2mndrosEruZtD%2Ft3hPASvC%2Fcjgvu6qUIwZ6gnRtDy3wusmXQgkC1U8mqG&X-Amz-Signature=5859c99932ed0cdce2cc4a85035d49631ff23dc9757a28af15a98a702cca2aee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YDFUQKT%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC5X6Cp6NXayByLlI0s55pgkHoBCP%2Brcc7J5%2FNx656AZwIgFCeHSBNfP4ctnvbVHOtqAr0l0UyBSYa4Lb9S4ULykjYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJYaZnUKkWKekHshyrcA5n2CIJxPZUHVHeXP2Yqmkf9%2B9Ugd8V4exGGwxHAkj4%2Fqwx7wXYV9mDkrETDiqI7umafUtZN5Orm1nMtCWT0gyPwbtag9pUN7QnuXNlqEGGIaWpVKzmkNM4BWmFpYVxvZFN7iMhk2dB%2Bw0X%2BAgNfLoHu0jalv4C8Xi%2BoKB1hH8ncZ45Zycl9gZPSz2k%2FNFVM7Z5yct3gH1zeBt57QRGkfTe1nmLTCfhZ0lP7WWUbYICaU9mMtDChNO2eo11u1U%2FRmlqXtqNkayaD2DIT%2FHC1hJmE7lnNKz0RzNHO1N%2BL8gs2KsPPYJ7Q9hWON%2Byj%2Fgra1yJoemfuEnO3IOBarCbZlSkZJ%2F35ecqUEArXlowzY4bmZ%2Fp49AmGbyLqu8HA%2FZ7JL1XR%2FO3G%2Bu%2Fs0CzIKcJdmnrO%2BZV8ewK8Ue%2Bee5BdNC1xEhLtfH61G3YQsENlGYdaETiLFJypm36YX7T63nOZ%2BwqBksqsjh1mjZgxgByM00RSTq2CwST49Zls552Awt21pEEDf41N36Vyo0GS%2F3JfCD4z3BvCDGC%2FqSCxquQBXGm1FAii5BGwh7VsnGv3lzQXWdaDzjNGyTtkOkxcbr0ab3Qtn17lT0ftIQkDzfdkVvpzk4dMPXbhcM6WzztaMNCMg8YGOqUBjQq9JvTumFHfU8CmDDMSJvw4325BvQCW4c6dmz3WufgR%2BvkHqjxWnVhwxoHHZ%2FArhEhljo%2FV%2BDnvlLftnyNf29tpio7H45bdFiR5hPpnmOaEyPRWoqaueE5cg4FF7ClgYWp6ehmCDpHH3tfGFf3kaM1QQ0gFDQWxHah2mndrosEruZtD%2Ft3hPASvC%2Fcjgvu6qUIwZ6gnRtDy3wusmXQgkC1U8mqG&X-Amz-Signature=a4e44892a24dab1d74961a96b7d55af2bd9793d4485134b4898a8bc80689ae66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YDFUQKT%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC5X6Cp6NXayByLlI0s55pgkHoBCP%2Brcc7J5%2FNx656AZwIgFCeHSBNfP4ctnvbVHOtqAr0l0UyBSYa4Lb9S4ULykjYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJYaZnUKkWKekHshyrcA5n2CIJxPZUHVHeXP2Yqmkf9%2B9Ugd8V4exGGwxHAkj4%2Fqwx7wXYV9mDkrETDiqI7umafUtZN5Orm1nMtCWT0gyPwbtag9pUN7QnuXNlqEGGIaWpVKzmkNM4BWmFpYVxvZFN7iMhk2dB%2Bw0X%2BAgNfLoHu0jalv4C8Xi%2BoKB1hH8ncZ45Zycl9gZPSz2k%2FNFVM7Z5yct3gH1zeBt57QRGkfTe1nmLTCfhZ0lP7WWUbYICaU9mMtDChNO2eo11u1U%2FRmlqXtqNkayaD2DIT%2FHC1hJmE7lnNKz0RzNHO1N%2BL8gs2KsPPYJ7Q9hWON%2Byj%2Fgra1yJoemfuEnO3IOBarCbZlSkZJ%2F35ecqUEArXlowzY4bmZ%2Fp49AmGbyLqu8HA%2FZ7JL1XR%2FO3G%2Bu%2Fs0CzIKcJdmnrO%2BZV8ewK8Ue%2Bee5BdNC1xEhLtfH61G3YQsENlGYdaETiLFJypm36YX7T63nOZ%2BwqBksqsjh1mjZgxgByM00RSTq2CwST49Zls552Awt21pEEDf41N36Vyo0GS%2F3JfCD4z3BvCDGC%2FqSCxquQBXGm1FAii5BGwh7VsnGv3lzQXWdaDzjNGyTtkOkxcbr0ab3Qtn17lT0ftIQkDzfdkVvpzk4dMPXbhcM6WzztaMNCMg8YGOqUBjQq9JvTumFHfU8CmDDMSJvw4325BvQCW4c6dmz3WufgR%2BvkHqjxWnVhwxoHHZ%2FArhEhljo%2FV%2BDnvlLftnyNf29tpio7H45bdFiR5hPpnmOaEyPRWoqaueE5cg4FF7ClgYWp6ehmCDpHH3tfGFf3kaM1QQ0gFDQWxHah2mndrosEruZtD%2Ft3hPASvC%2Fcjgvu6qUIwZ6gnRtDy3wusmXQgkC1U8mqG&X-Amz-Signature=e4a19acc6846ad39530e0d08feb1fd9eb92cbebbe575455f828482f92c536665&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> urdf can get complex to look at so I will be putting a “_scratch”_ like equivalent next to each example I put down.

To start add these tags:

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml
<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">



</robot>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ363275%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQD65MNMZR5bzldqbCeb6P8xwwSvlBRAr6sN2FbQf2mSegIgQIAs8liNmDCc1jT5K2iq9v75oiIm36fvLoFZ4adjc%2BgqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHoVpsQub5Lcb6OcSrcA1lrHtyLdsRXojRKxVZnTYWsKnSlR4M%2BU2hBZGwaHW%2FEYiZwZfBLbICuFNcFkPFv9aH337ZjtEAWgOMwmWyP16nCS1jaEcd6dyVjT%2FVVmb8x69U8OibBD9lW8N42ILm04njdg1xywQJUzNEtRUA1DU28mtisxqyNJ045Vdqk%2FJAdTUjKrMU1w88G%2Bknv3fQWB1B09BxFSGU6L6%2F9j9nh0W%2F%2BJYywQIs%2BAnakhR7MMvH7N9SlUWPoHAycAEffjA%2BS%2BU216cPFPBCJNjcvtIKo1OkG13yho6mNv5aVLQSUKGj4l9FRTaigZZcFvIF5tYnqxhpxPjF94ezFLYZ3MiaoS1aQ4GDbqXo%2BE%2FE26QmMr26P0G99JSP8YMkeQrmzz2PYcf27ZGxocFk%2B4b9RRHOFBEpN%2BdtX4hYIBpzNO4hRVMu4oXGPjQ13M1bvz10gOVnp%2Bi%2BG1jAYlsssPx%2B8VNM4MoyrMKpvNleCSsOoMMiFfJ6h9GbqGvEjGGO9ktEIdw%2B9meI6r91yWKaFdZaLU3lh1ySvL2mldjpiw3XseOapj1g7sUKu569r78WsqRtNsYHTcwmToun6HWN6b95i56Ny5WgcU4OPm1edTfOwbgLpCMsIjdivHvTmb4NhfesOMNWLg8YGOqUBhpYLTm8hPzoczzRr4Fw1XY5Q6YpC8MH%2FA8RBCdyTdZr9VQ1XTEnEm2MFAAo%2FBS1gFPISXXzuHurM8eBxl53mpD3hGROVqCzsl96zKX8H3ha0cp8KXof%2BLCxoRVDp3IgeeQVpZlv0xHPY4HWg2hlauW%2FGeuykDwb905sg%2Bcm2sW0kntlf0LDgycMu6jaPSr5%2BsLacvwxBQaPsQc7YhoxDnBM0cy42&X-Amz-Signature=1c827921674b91be52339c1e03c361ff34dab1b0648c9803c3feea04f559277f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

All urdf files must start with these tags to be valid urdf. All of our code will go in between the `<robot>` tags 

Next lets put down some constants we will use later

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml
<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">
  <!-- Define robot constants -->
  <xacro:property name="base_width" value="0.31"/>
  <xacro:property name="base_length" value="0.42"/>
  <xacro:property name="base_height" value="0.18"/>

  <xacro:property name="wheel_radius" value="0.10"/>
  <xacro:property name="wheel_width" value="0.04"/>
  <xacro:property name="wheel_ygap" value="0.025"/>
  <xacro:property name="wheel_zoff" value="0.05"/>
  <xacro:property name="wheel_xoff" value="0.12"/>

  <xacro:property name="caster_xoff" value="0.14"/>


</robot>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SRPQ27H%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDvsyT2RODgyhtbpRS9EusWNRWwm4V9txzicT%2F06QTuiQIgILdA3V8iELIdbpjDwQF3Ujk9YMkSxnYgBYcN86ewamsqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmf6CiaZc7aM1kk4SrcA8%2BaVPAeAZIHsiAitXEchpKGIc6SSN39lL5xOEco0dYlTFrqEwBFNqKzyGvzHoUukf%2FELYDdbT39B3k5TVxvulgfXoCfg%2FyBgTFi5gq2Q3hMne3OufcieerRedhJfKRoWz3ll8zTMcZiQQYHoXmgutirziJkDQB3tLzzuVcKFsqi68dDu5kIhCYffGxJFOcVL9Oh1CDqbK0ca%2FckxdJHyJAeIMZHpKS3YTNohQ1nMeXpdRnd%2F%2Bs2XHo7llHvqwAXI1Lsvl4JsgRYk4k3LOFulf3VF1KpBj4wH303OKPMkYluaWOFoko9Hrys8X0qj5QUYxCdCVEIU8GarOrhuZGz6VUw8nEPIQz5bE%2FoLsi1rGiKLEbe0jzlijhEQGlvuQjUuqgT7iS%2BOEO79gI%2F8%2BoYhefQYFr%2BZfXZiRbQHQHrtnbt5B52Hb8q4HRK9rWbhfwmG3ojnoPD%2FEPhb7FxRBtzMohsCrVE%2FmK0xcB523ZzRh6deEkR%2B96FKiSgP2rP6dS55BeUNay%2B5G5%2BZJXG5mBNREgs9KIOpA%2FbnV00RN5FiuuGpDrJCmBirrJef86gJ1i2jMhH%2ByAp89K%2FzaFnflzAkEyvb7E%2FGzoxIkW4roB9pQvlclyNHIWSFKJed0%2FSMMaMg8YGOqUBAr50U%2FLUXj6RVoN%2FygULwJwm30pZi2YLh9G9mQ0W2hD1Awjt1FC%2B50HHbP7Us3BgYbZya3TlCCoyV5Wb6gDeVT09gI52whQY1yp5mfecYJOnWDyoAtwrjf237i17v9RChCzeQBqYeXPJ9u%2FAAcPyyg6SI15lfNhLB7qdvoqsGfUJGc20O2inCMMBQx4K5yQywIqlUBxY8Jho6O%2FcE9ie7cNZE5cp&X-Amz-Signature=83ea0184fb2c41cb68c6811b889af158652e2d9a15362349b6ec4d5feaae90b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

You can think of these as **variables** but in the xacro language

<details>
  <summary>{{< markdownify >}}What do the variables represent?{{< /markdownify >}}</summary>
  
`base_width`, `base_length`, `base_height` are the dimensions of the main body of the robot.

`wheel_radius` and `wheel_width` are the dimensions of the 2 back wheels.

`wheel_ygap` is the gap between the chassis and wheel.

`wheel_zoff` and `wheel_xoff` is the offset between the z-axis and x-axis.

`caster_xoff` is the offset of the caster wheel (the little ball) along the x-axis.

</details>



Lets now make a link for the body and call it `base_link` to be the “_root” of our robot._ This is common convention in ROS and is required to be called `base_link` for later parts in this guide

For now we are only going to add the visual part of the link to see if our design is correct. Later we will add collision and inertia.

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml
  <!-- Robot Base -->
  <link name="base_link">
    <visual>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
      <material name="Cyan">
        <color rgba="0 1.0 1.0 1.0"/>
      </material>
    </visual>
    
  </link>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFHIMZLC%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIBMFfc6xlYz6XNuiXcSC%2BEmnkQqJxuWTIN5PuoRqGwR1AiEA802ySjj1amZVQPnB5rwv7j0hKlMJd3wcOx08xpC2ukcqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJfnNcj5BjSoGJ51yrcA01ZC9WoKzRxSIrRY3%2BggdBzXFqGutAkjRIV%2B3C9LlnTWxAozngphvM97DrDiePMjgvBmZSMZOf6NTLuA%2F79gNNrH4IaNQYxa89My%2FJ3D0cj8axLBa1JRiFNOBnXoUGri%2FhEZ1hlbrTz0aaVrr6uOnOHxWIV%2F65Ridn9WkkqczG6A8PkaklONv89G6c2qGYbZwldvISnaKBKpHlvjL5RYenucCGCk3Px3qnSPme0N%2FPpEq0zF3RnKqj6yhviZE4eXB13q4xQyrkUEn6laWK5ch8nGM5q3ncPfMKbVhHeJkngy5HjfnN3sLYQXcN2dvb142wK0hiwfjQ4y80ow%2FKVvClysKC4BuoowzA%2FCCUtIm%2BcbySAID6uGtFDrchHKE%2Bonp9qjCVyHpeiiVJMOBwvYhfx1mxIOoTsoEjGfvcUJtwoECTu%2BBujn9WdJRDagqKVJhhb8%2FL2idC94w4%2FmzwoohiYCKLWfW%2Fv%2FsSvY4CJkMZs3WHIVIUnAQi2msOpPpxPO42AxA%2Bj8u%2B%2B9edKCQyREyfmYNY97CL%2BX5MvVDSwB%2FDzOu6n7ceEsQeHGEfNkbkdFvqBHND2Lxj0ix1RmJWYu4aTiu%2BgMatUEwCmYOZIyFLwp0WI36uEfZWANls5MPmLg8YGOqUBcHZYjTTmdJlRVnq3Zpn523M3XZlnJEJhcjxKgRUvJ%2Bl69dJOHPFNgiV8Yk9zONao7MdJ5OZqz6clIpnsksY%2B9OxqvFhEuZEBPsAJDD7DZNu5AFzLrBhM7vcR30fe2cit44gke8oMPl7TBKmj8GTrNgXLYYcpkewDOtbJQbVWSfCuq%2FCXsKd1QxNu2USQr%2Bhchd80bR6FpCVQpdQTZFBnAowHgIGf&X-Amz-Signature=5d34f496be18c3fac8a14cd14112ae06995c994e7b357269ce297b937d8a5829&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YDFUQKT%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC5X6Cp6NXayByLlI0s55pgkHoBCP%2Brcc7J5%2FNx656AZwIgFCeHSBNfP4ctnvbVHOtqAr0l0UyBSYa4Lb9S4ULykjYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJYaZnUKkWKekHshyrcA5n2CIJxPZUHVHeXP2Yqmkf9%2B9Ugd8V4exGGwxHAkj4%2Fqwx7wXYV9mDkrETDiqI7umafUtZN5Orm1nMtCWT0gyPwbtag9pUN7QnuXNlqEGGIaWpVKzmkNM4BWmFpYVxvZFN7iMhk2dB%2Bw0X%2BAgNfLoHu0jalv4C8Xi%2BoKB1hH8ncZ45Zycl9gZPSz2k%2FNFVM7Z5yct3gH1zeBt57QRGkfTe1nmLTCfhZ0lP7WWUbYICaU9mMtDChNO2eo11u1U%2FRmlqXtqNkayaD2DIT%2FHC1hJmE7lnNKz0RzNHO1N%2BL8gs2KsPPYJ7Q9hWON%2Byj%2Fgra1yJoemfuEnO3IOBarCbZlSkZJ%2F35ecqUEArXlowzY4bmZ%2Fp49AmGbyLqu8HA%2FZ7JL1XR%2FO3G%2Bu%2Fs0CzIKcJdmnrO%2BZV8ewK8Ue%2Bee5BdNC1xEhLtfH61G3YQsENlGYdaETiLFJypm36YX7T63nOZ%2BwqBksqsjh1mjZgxgByM00RSTq2CwST49Zls552Awt21pEEDf41N36Vyo0GS%2F3JfCD4z3BvCDGC%2FqSCxquQBXGm1FAii5BGwh7VsnGv3lzQXWdaDzjNGyTtkOkxcbr0ab3Qtn17lT0ftIQkDzfdkVvpzk4dMPXbhcM6WzztaMNCMg8YGOqUBjQq9JvTumFHfU8CmDDMSJvw4325BvQCW4c6dmz3WufgR%2BvkHqjxWnVhwxoHHZ%2FArhEhljo%2FV%2BDnvlLftnyNf29tpio7H45bdFiR5hPpnmOaEyPRWoqaueE5cg4FF7ClgYWp6ehmCDpHH3tfGFf3kaM1QQ0gFDQWxHah2mndrosEruZtD%2Ft3hPASvC%2Fcjgvu6qUIwZ6gnRtDy3wusmXQgkC1U8mqG&X-Amz-Signature=c910189c66455079f028e28f5bdd39e672861261caf323541193bdec1ed0ed96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

under `</link>` lets define a link called `base_footprint`. This link is just used for path finding to know where the robot is on a 2D map.

Later on in this guide we will see how it gets used.

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml
  <!-- Robot Footprint -->
  <link name="base_footprint"/>

  <joint name="base_joint" type="fixed">
    <parent link="base_link"/>
    <child link="base_footprint"/>
    <origin xyz="0.0 0.0 ${-(wheel_radius+wheel_zoff)}" rpy="0 0 0"/>
  </joint>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XZ5IY4K%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIE5dssPGB48wMsWoBbF0o1yHLnCDSdCDIWafEsoPza1sAiA6jMAK0tsEr7I31FysqnGMUSMDnl7RYNXD0i8pW%2FIjcCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJSc69t3T7uQhjpoOKtwD3X%2Fz1bu8JIYoz%2FIjGK9GcUjD6SUA2Manr26I9%2Bgq8anexgtlx4jEn7I%2FIkGfvLFXYknVvslNYDdrkNT0ZtCJsv%2ByrngqBSejnTqSUMHF2mPwDTMT6RzNfKWR90VPts%2FNSdDQfoFXpBOMLaZ1nxMSOtTKUr6mfYBGz50tXRQser%2Fxcg4LpN5tkVjHbbo7ot40sSnODIbyiwnsfgh7tYLj8twvqZMthFO5%2BM3zoFeYmH5PJ3QoYJMNSPMQ7eISjAFtf6JCTZYZE4wxNA5NP36glR2HWMlJ5Z4jvnrqIe%2FoLqzLDEyy1epJY0vX7b7nkUmhJpv0H5%2F%2Bb4I%2F8j1eWFy1sZnSA9VqDOsyJB62fQq5dJZcLBXfp948fQ32yMCgy%2Bszaexo4VuobV5CQ%2BCguBhF%2BmoddQxLNmVAFobZ4UFrF63IBnOc%2BtpwE3T61n2eZhjGNVdKTcOwfDltzEHgBlndEZB%2FkPobq51NfI42nOKNWDMKhhz9oE3Wz4BTFu0WMxSaXfzZtptAssdxpWU%2BPJJSk1jiCesGvxDPNtwWlbA9oUYnyOzKhXo52eTF6jzLHm%2BmEb0fBg%2BRRBsrC7UlD9vslQlYj%2FyWMNVQloJUJ5Mvm9nAADepyCHOhNVeg24w9IuDxgY6pgFZfn0UrBHxtNBSrg0zj6e3WMsAAu342r%2FAx1oR%2BvRf7rYOj0J6971EgvHUaZgCDj4Dk0D31xMbDZkdoYzqXFlIYYmRIxrKdeOc3jMgAmZfB9WsHplpEa7gykTxTLOCipzazquUTvKND%2FEaWdp6Zjt6P%2F%2BNaYcJaJ3O0p%2BRwhytYEDEG5BAoiYw8X54psD3w%2FLUmJJ9mEWfE9ZCcjjp1ZIJfceLS1cJ&X-Amz-Signature=d1cc0e1872a482413418df285ef42e0d2fa11f25859b9c2906e1718497b9bcbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YDFUQKT%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC5X6Cp6NXayByLlI0s55pgkHoBCP%2Brcc7J5%2FNx656AZwIgFCeHSBNfP4ctnvbVHOtqAr0l0UyBSYa4Lb9S4ULykjYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJYaZnUKkWKekHshyrcA5n2CIJxPZUHVHeXP2Yqmkf9%2B9Ugd8V4exGGwxHAkj4%2Fqwx7wXYV9mDkrETDiqI7umafUtZN5Orm1nMtCWT0gyPwbtag9pUN7QnuXNlqEGGIaWpVKzmkNM4BWmFpYVxvZFN7iMhk2dB%2Bw0X%2BAgNfLoHu0jalv4C8Xi%2BoKB1hH8ncZ45Zycl9gZPSz2k%2FNFVM7Z5yct3gH1zeBt57QRGkfTe1nmLTCfhZ0lP7WWUbYICaU9mMtDChNO2eo11u1U%2FRmlqXtqNkayaD2DIT%2FHC1hJmE7lnNKz0RzNHO1N%2BL8gs2KsPPYJ7Q9hWON%2Byj%2Fgra1yJoemfuEnO3IOBarCbZlSkZJ%2F35ecqUEArXlowzY4bmZ%2Fp49AmGbyLqu8HA%2FZ7JL1XR%2FO3G%2Bu%2Fs0CzIKcJdmnrO%2BZV8ewK8Ue%2Bee5BdNC1xEhLtfH61G3YQsENlGYdaETiLFJypm36YX7T63nOZ%2BwqBksqsjh1mjZgxgByM00RSTq2CwST49Zls552Awt21pEEDf41N36Vyo0GS%2F3JfCD4z3BvCDGC%2FqSCxquQBXGm1FAii5BGwh7VsnGv3lzQXWdaDzjNGyTtkOkxcbr0ab3Qtn17lT0ftIQkDzfdkVvpzk4dMPXbhcM6WzztaMNCMg8YGOqUBjQq9JvTumFHfU8CmDDMSJvw4325BvQCW4c6dmz3WufgR%2BvkHqjxWnVhwxoHHZ%2FArhEhljo%2FV%2BDnvlLftnyNf29tpio7H45bdFiR5hPpnmOaEyPRWoqaueE5cg4FF7ClgYWp6ehmCDpHH3tfGFf3kaM1QQ0gFDQWxHah2mndrosEruZtD%2Ft3hPASvC%2Fcjgvu6qUIwZ6gnRtDy3wusmXQgkC1U8mqG&X-Amz-Signature=241f8d4169a2284f3f69f42114125647bd4d7b6836f71119d95740c54bfcfa9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

under `</joint>` to add wheels lets use a `xacro:macro` (basically a xacro function) to avoid duplicate code. The macro will take 3 functions `prefix`, `x_reflect`, and `y_reflect` so we can flip the wheel on the x or y axis. We also make the joint continuous so the wheel can rotate freely.

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml
  <!-- Wheels -->
  <xacro:macro name="wheel" params="prefix x_reflect y_reflect">
    <link name="${prefix}_link">
      <visual>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
            <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
        <material name="Gray">
          <color rgba="0.5 0.5 0.5 1.0"/>
        </material>
      </visual>
    </link>

    <joint name="${prefix}_joint" type="continuous">
      <parent link="base_link"/>
      <child link="${prefix}_link"/>
      <origin xyz="${x_reflect*wheel_xoff} ${y_reflect*(base_width/2+wheel_ygap)} ${-wheel_zoff}" rpy="0 0 0"/>
      <axis xyz="0 1 0"/>
    </joint>
  </xacro:macro>

  <xacro:wheel prefix="drivewhl_l" x_reflect="-1" y_reflect="1" />
  <xacro:wheel prefix="drivewhl_r" x_reflect="-1" y_reflect="-1" />
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HDNHFWZ%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCeEgYnSt%2BrPAalyW9IXK6vuRETDxKyGM%2Bg4N%2Fub%2FYwbQIgO70%2BTwKaeP%2B4GLmN0H%2BsyijkwHTqVWrHX50xVf6EzR4qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrWAJkynp59i2aNLCrcA92DbEthEUZWyQKSzlUjXdcVkv4WKGDb3G28HqfGXZqYhuWRG2pmfjupZFntHDVs7%2BzPRspv0EzDh6Zpuhjxavc7fxM%2B7o4GF4z3XfC5LYWUQxfPpnMWNJDocMI7VGcZ3mWCNhRkaA7k%2FoU1o%2F3tV%2FAZu3byKYvF1imVxLHjAJP1%2BeOcoyfjcYBr26hlLCFRSbb7exhks%2BGoibtK3S4WftxpmzG%2Fp%2BEMAjKxW1g%2B6ODu2eKTKL9u7sWT01ydt7PkmPqx4INHgS%2BJfN%2FT0FJ6Ef%2BMW3gVMUGdjz7omSiMZxihC6t9e71%2BHsA3T8wzezacSzYW9zAU0XsjO3%2BesaVXWWAu8vgnLgMgrBtEmZFY5qTYa2%2FILLZMZ61zJuurt93FqvFF14vdV2HL%2B5apPjQASsoyx2mcR4rPciY5Ewh%2BWIBdXm9WFx9M2ktDrOjV8APosvNDj2cYBA4z%2FlhPuQdlPteIXtj78UmVeYQ8qnuCe3f7YDs%2BrPN688XFBFPxOb9ncUZyeHQ2T31opnFRqppuxZv4dE547Wl1NdVuDH%2FEb2RxMkkqPvGY60SKm3fnbhfymurSF%2BdKsPtyXpdb8EVYxHCz%2FLWXhtL9fYngoQ5em1PFGAegQwZfka%2Fp7roQMJeMg8YGOqUBiwxHo8ibSYRVgp3yYW8EeH%2B9Nirob8Xt3GaDygWFXClezTwRZbVCMf%2BSe76jbjsjAJh1YUKVi0FiLJOxPxjV%2BonmNjC3BGDqRV3dCytCIsTcv0kHld0m67F1lAVg7sWH%2BYg6JIdvy0zHODaVWzrjp3JVF8uD8adyggLVrkwY8jRPaK%2Bb%2Bpm2Zru2EYI0wdv8SNIM3SBhxNBNUfXdTx3%2BPYA3C9JY&X-Amz-Signature=24e121488f4ff367eee103aadc48257cd11cd751a4992ea2a0ea69a7e5af4082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YDFUQKT%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC5X6Cp6NXayByLlI0s55pgkHoBCP%2Brcc7J5%2FNx656AZwIgFCeHSBNfP4ctnvbVHOtqAr0l0UyBSYa4Lb9S4ULykjYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJYaZnUKkWKekHshyrcA5n2CIJxPZUHVHeXP2Yqmkf9%2B9Ugd8V4exGGwxHAkj4%2Fqwx7wXYV9mDkrETDiqI7umafUtZN5Orm1nMtCWT0gyPwbtag9pUN7QnuXNlqEGGIaWpVKzmkNM4BWmFpYVxvZFN7iMhk2dB%2Bw0X%2BAgNfLoHu0jalv4C8Xi%2BoKB1hH8ncZ45Zycl9gZPSz2k%2FNFVM7Z5yct3gH1zeBt57QRGkfTe1nmLTCfhZ0lP7WWUbYICaU9mMtDChNO2eo11u1U%2FRmlqXtqNkayaD2DIT%2FHC1hJmE7lnNKz0RzNHO1N%2BL8gs2KsPPYJ7Q9hWON%2Byj%2Fgra1yJoemfuEnO3IOBarCbZlSkZJ%2F35ecqUEArXlowzY4bmZ%2Fp49AmGbyLqu8HA%2FZ7JL1XR%2FO3G%2Bu%2Fs0CzIKcJdmnrO%2BZV8ewK8Ue%2Bee5BdNC1xEhLtfH61G3YQsENlGYdaETiLFJypm36YX7T63nOZ%2BwqBksqsjh1mjZgxgByM00RSTq2CwST49Zls552Awt21pEEDf41N36Vyo0GS%2F3JfCD4z3BvCDGC%2FqSCxquQBXGm1FAii5BGwh7VsnGv3lzQXWdaDzjNGyTtkOkxcbr0ab3Qtn17lT0ftIQkDzfdkVvpzk4dMPXbhcM6WzztaMNCMg8YGOqUBjQq9JvTumFHfU8CmDDMSJvw4325BvQCW4c6dmz3WufgR%2BvkHqjxWnVhwxoHHZ%2FArhEhljo%2FV%2BDnvlLftnyNf29tpio7H45bdFiR5hPpnmOaEyPRWoqaueE5cg4FF7ClgYWp6ehmCDpHH3tfGFf3kaM1QQ0gFDQWxHah2mndrosEruZtD%2Ft3hPASvC%2Fcjgvu6qUIwZ6gnRtDy3wusmXQgkC1U8mqG&X-Amz-Signature=0c16f1663d56818abc51341942a485139eeb3304b9aaa4b1c265f9ae2de5aba6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Under `xacro:wheel` lets add the caster wheel at the front of the robot. The robot up until now should look like the image below

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml
  <!-- Caster Wheel -->
  <link name="front_caster">
    <visual>
      <geometry>
        <sphere radius="${(wheel_radius+wheel_zoff-(base_height/2))}"/>
      </geometry>
      <material name="Cyan">
        <color rgba="0 1.0 1.0 1.0"/>
      </material>
    </visual>
  </link>

  <joint name="caster_joint" type="fixed">
    <parent link="base_link"/>
    <child link="front_caster"/>
    <origin xyz="${caster_xoff} 0.0 ${-(base_height/2)}" rpy="0 0 0"/>
  </joint>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF5ZPIGR%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIAcun%2B37C1sEdCktnHbDE0YFZf71hhGjITA%2BcQLq%2F5mTAiBCl17YVuDMOIbAK8SY2TtGZrC%2FFAjCrifbg07FnpacjyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg2QgYpZPK82aV8LUKtwDOGIEbEwiyhZtHIymSR0eResIc6bl32%2BcP6Hka90hbGtDjNYXHD%2FQD%2BMY6s9IwCMcgaRgjngVKtRGTJo4aj4ofoUGQtyQD8MJ9ivaUZ4NtPRzjC7aLMrkMAuzD5rUcRq1IL0ZYo39d8kHwwj%2BXW4G6e5kZo83kEfbsPjKhR4%2BiN1h%2BwO640dOXBog7TYHkGCPGi%2B5plTNmAGk6b1%2FlOKHRPzWvOOVSZI25aCI4Os7lcWrGRNnxcADGYNjgUvBlVqMsCjFeqfcmr4qho9bIJ9HC2iocqbhm%2BwvVeWzdq8YyorKX46tJrWLy41pqDVOBWLbTbeK1QH5%2BZDGOrpLs2nDgvAAHkmXFvhlRSoMXReS0ZbCgqqXF2iCaWB3OBJgGS%2BxT%2F932Op9ENSuK9y83Id6nDXyYJvAjIPjIGIlRAVB3l4CPluDVXxnvaWh3xMQip%2BrnvokyTkrnRWXB2cFvulahx0Nk0s%2BlWL1z8PTts359xJ1ls%2Fnp%2FyJwVIxVkNiunEFUPWXVJqLRxKyCDJ26waNFT8sT%2Bp0sJoOczp%2FRYQGrBiJPGfuJfYOTbloe9jmOx2F8fyLEK0oKGu2cqfsS5RukzbZsOPX77SdvSCsXomZJMew2tLhiG5JZ6Kj7sEwxoyDxgY6pgGe1kNeHxh5zWVgWo6nQGacCWl6l973Xxl4OeU0KdbryRORuSnDpGmCWQhriMuT3Kq%2FdlDRfLo0i1yblibWah90v2fR3Q8bxg5brftq%2Bq0pwD2NPA35ZGGK6iuVYMYQZ7NZLLA8trgvsJdH%2BtU3Q7MD%2BDJtbN5P6J3BDQLLDB8QDBT5LKeWO1Rfp3hR6U8A8tVG5E0wQhur7ZDPlYkQdqOimchqst16&X-Amz-Signature=d578bebb58e924c2c6796152cb658d78e760bf0da0f5c9ebb25c7d58d05d4741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YDFUQKT%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC5X6Cp6NXayByLlI0s55pgkHoBCP%2Brcc7J5%2FNx656AZwIgFCeHSBNfP4ctnvbVHOtqAr0l0UyBSYa4Lb9S4ULykjYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJYaZnUKkWKekHshyrcA5n2CIJxPZUHVHeXP2Yqmkf9%2B9Ugd8V4exGGwxHAkj4%2Fqwx7wXYV9mDkrETDiqI7umafUtZN5Orm1nMtCWT0gyPwbtag9pUN7QnuXNlqEGGIaWpVKzmkNM4BWmFpYVxvZFN7iMhk2dB%2Bw0X%2BAgNfLoHu0jalv4C8Xi%2BoKB1hH8ncZ45Zycl9gZPSz2k%2FNFVM7Z5yct3gH1zeBt57QRGkfTe1nmLTCfhZ0lP7WWUbYICaU9mMtDChNO2eo11u1U%2FRmlqXtqNkayaD2DIT%2FHC1hJmE7lnNKz0RzNHO1N%2BL8gs2KsPPYJ7Q9hWON%2Byj%2Fgra1yJoemfuEnO3IOBarCbZlSkZJ%2F35ecqUEArXlowzY4bmZ%2Fp49AmGbyLqu8HA%2FZ7JL1XR%2FO3G%2Bu%2Fs0CzIKcJdmnrO%2BZV8ewK8Ue%2Bee5BdNC1xEhLtfH61G3YQsENlGYdaETiLFJypm36YX7T63nOZ%2BwqBksqsjh1mjZgxgByM00RSTq2CwST49Zls552Awt21pEEDf41N36Vyo0GS%2F3JfCD4z3BvCDGC%2FqSCxquQBXGm1FAii5BGwh7VsnGv3lzQXWdaDzjNGyTtkOkxcbr0ab3Qtn17lT0ftIQkDzfdkVvpzk4dMPXbhcM6WzztaMNCMg8YGOqUBjQq9JvTumFHfU8CmDDMSJvw4325BvQCW4c6dmz3WufgR%2BvkHqjxWnVhwxoHHZ%2FArhEhljo%2FV%2BDnvlLftnyNf29tpio7H45bdFiR5hPpnmOaEyPRWoqaueE5cg4FF7ClgYWp6ehmCDpHH3tfGFf3kaM1QQ0gFDQWxHah2mndrosEruZtD%2Ft3hPASvC%2Fcjgvu6qUIwZ6gnRtDy3wusmXQgkC1U8mqG&X-Amz-Signature=6dab29c2c59c86e79932142d0c6b970b3e89a1144200e07a31fcca86102ad3d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}code up until this point{{< /markdownify >}}</summary>
  
<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml
<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">

  <!-- Define robot constants -->
  <xacro:property name="base_width" value="0.31"/>
  <xacro:property name="base_length" value="0.42"/>
  <xacro:property name="base_height" value="0.18"/>

  <xacro:property name="wheel_radius" value="0.10"/>
  <xacro:property name="wheel_width" value="0.04"/>
  <xacro:property name="wheel_ygap" value="0.025"/>
  <xacro:property name="wheel_zoff" value="0.05"/>
  <xacro:property name="wheel_xoff" value="0.12"/>

  <xacro:property name="caster_xoff" value="0.14"/>

  <!-- Robot Base -->
  <link name="base_link">
    <visual>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
      <material name="Cyan">
        <color rgba="0 1.0 1.0 1.0"/>
      </material>
    </visual>
    
  </link>

  <!-- Robot Footprint -->
  <link name="base_footprint"/>

  <joint name="base_joint" type="fixed">
    <parent link="base_link"/>
    <child link="base_footprint"/>
    <origin xyz="0.0 0.0 ${-(wheel_radius+wheel_zoff)}" rpy="0 0 0"/>
  </joint>

  <!-- Wheels -->
  <xacro:macro name="wheel" params="prefix x_reflect y_reflect">
    <link name="${prefix}_link">
      <visual>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
            <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
        <material name="Gray">
          <color rgba="0.5 0.5 0.5 1.0"/>
        </material>
      </visual>
    </link>

    <joint name="${prefix}_joint" type="continuous">
      <parent link="base_link"/>
      <child link="${prefix}_link"/>
      <origin xyz="${x_reflect*wheel_xoff} ${y_reflect*(base_width/2+wheel_ygap)} ${-wheel_zoff}" rpy="0 0 0"/>
      <axis xyz="0 1 0"/>
    </joint>
  </xacro:macro>

  <xacro:wheel prefix="drivewhl_l" x_reflect="-1" y_reflect="1" />
  <xacro:wheel prefix="drivewhl_r" x_reflect="-1" y_reflect="-1" />

    <!-- Caster Wheel -->
  <link name="front_caster">
    <visual>
      <geometry>
        <sphere radius="${(wheel_radius+wheel_zoff-(base_height/2))}"/>
      </geometry>
      <material name="Cyan">
        <color rgba="0 1.0 1.0 1.0"/>
      </material>
    </visual>
  </link>

  <joint name="caster_joint" type="fixed">
    <parent link="base_link"/>
    <child link="front_caster"/>
    <origin xyz="${caster_xoff} 0.0 ${-(base_height/2)}" rpy="0 0 0"/>
  </joint>

</robot>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HSC5WHB%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCE%2Bvl5FiWB%2BPy8QJ4sVGBRvcCLnCQmttZpXqslAKCMzQIgarv8GeACjJU9ErX7tuT0b0jfoF2BighwBIennDgKaEsqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4SGjzAmiLPSj2qqyrcA6oHTgvl0zUtgvg%2FiRtFtDG8%2F86OLgxvpyzR%2Flf4HPNCN24SS%2FlP2y%2FCO7VbbAwcDradzOngJTXkvvzEkQJ8NgrkvqlrEc78eLpQs19njqrQS0vygzHkkwI6F%2B%2FmLb%2BYuCeoaic1DQ5sSALhhusvhLINqgUsW8o9SzDgxQtpIkiegDFeiDh53E%2F0ju6BHx1%2BhwDtQiOzhJtDLk9cAPCmobBAJNFCGXcGobMooJZ7%2BuJ0xLGYVDkVI8wSBRSgb3J%2Fw1mQlXqibD0y%2F%2F%2BCy4KDR4SaQxuz45H18nyf6vovKkf9NyxotxnYnwXvW5MK2Fh%2Bvx7f1OfH9IUq3l%2BaNqiZjaCGFQuHQR5Chupt4pdNulxpR4iINC7gAr1cjU6IJr6A0FY4s69J5ZZv8jd4RFbb8KS0Ln0eKW3zfisOF4Kg2l8E9Wh%2FzgiFX%2Ba8zy3Z5gy9GCVpCaUn%2BeqmBjYG8iFXBNuJqDRIJCvAoQObi88RKmIJ1loxVHU3Kp4rnOvdmFJZ7z0708rHIlDEPsBSVlwuFwg6snxdXg4j0%2BPPAr6fYUHnSYsHWuzdD0UXWRnT5AfdGX0bDz1zvqyfeVy6nAWGsDcNdxwbmwkO41KDIVpoHoQT7GAzSXO%2BcTt5XN78MIWMg8YGOqUB19qJZ7r1FsmXbeRIMSPzACWekctpuxVGZwSFp9GYXhEbBlSIe%2ByoSGlot6QI9FuiE%2FWGOjCIiQ1NA0S%2BoPMANeUXnvqZL3nlkiFtTzneFr1WLcQgDWVPh%2F0WxaHBNvIGoW6FqeibrGUfFRYr9vWMMIqvgOonOYj4sioX45OVH9KxekvttywlT00qNUhYpvGPHF2rXnIgycLQ1b42QU1%2FpCZuzHDy&X-Amz-Signature=3158465901f7ba0963e9340827357b8390f3e33843c94b653610b898eb55ffee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

</details>



### Adding Collision and Inertia

Next lets add collision and inertia to our robot. These attributes will be used in the robot simulator later in this guide.

To start lets make some `xacro:macro` to avoid repetitive code to make box, cylinder, and sphere inertia.

Place this under the constants section.

```xml
  <!-- Define inertial property macros  -->
  <xacro:macro name="box_inertia" params="m w h d">
    <inertial>
      <origin xyz="0 0 0" rpy="${pi/2} 0 ${pi/2}"/>
      <mass value="${m}"/>
      <inertia ixx="${(m/12) * (h*h + d*d)}" ixy="0.0" ixz="0.0" iyy="${(m/12) * (w*w + d*d)}" iyz="0.0" izz="${(m/12) * (w*w + h*h)}"/>
    </inertial>
  </xacro:macro>

  <xacro:macro name="cylinder_inertia" params="m r h">
    <inertial>
      <origin xyz="0 0 0" rpy="${pi/2} 0 0" />
      <mass value="${m}"/>
      <inertia ixx="${(m/12) * (3*r*r + h*h)}" ixy = "0" ixz = "0" iyy="${(m/12) * (3*r*r + h*h)}" iyz = "0" izz="${(m/2) * (r*r)}"/>
    </inertial>
  </xacro:macro>

  <xacro:macro name="sphere_inertia" params="m r">
    <inertial>
      <mass value="${m}"/>
      <inertia ixx="${(2/5) * m * (r*r)}" ixy="0.0" ixz="0.0" iyy="${(2/5) * m * (r*r)}" iyz="0.0" izz="${(2/5) * m * (r*r)}"/>
    </inertial>
  </xacro:macro>
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YDFUQKT%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC5X6Cp6NXayByLlI0s55pgkHoBCP%2Brcc7J5%2FNx656AZwIgFCeHSBNfP4ctnvbVHOtqAr0l0UyBSYa4Lb9S4ULykjYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJYaZnUKkWKekHshyrcA5n2CIJxPZUHVHeXP2Yqmkf9%2B9Ugd8V4exGGwxHAkj4%2Fqwx7wXYV9mDkrETDiqI7umafUtZN5Orm1nMtCWT0gyPwbtag9pUN7QnuXNlqEGGIaWpVKzmkNM4BWmFpYVxvZFN7iMhk2dB%2Bw0X%2BAgNfLoHu0jalv4C8Xi%2BoKB1hH8ncZ45Zycl9gZPSz2k%2FNFVM7Z5yct3gH1zeBt57QRGkfTe1nmLTCfhZ0lP7WWUbYICaU9mMtDChNO2eo11u1U%2FRmlqXtqNkayaD2DIT%2FHC1hJmE7lnNKz0RzNHO1N%2BL8gs2KsPPYJ7Q9hWON%2Byj%2Fgra1yJoemfuEnO3IOBarCbZlSkZJ%2F35ecqUEArXlowzY4bmZ%2Fp49AmGbyLqu8HA%2FZ7JL1XR%2FO3G%2Bu%2Fs0CzIKcJdmnrO%2BZV8ewK8Ue%2Bee5BdNC1xEhLtfH61G3YQsENlGYdaETiLFJypm36YX7T63nOZ%2BwqBksqsjh1mjZgxgByM00RSTq2CwST49Zls552Awt21pEEDf41N36Vyo0GS%2F3JfCD4z3BvCDGC%2FqSCxquQBXGm1FAii5BGwh7VsnGv3lzQXWdaDzjNGyTtkOkxcbr0ab3Qtn17lT0ftIQkDzfdkVvpzk4dMPXbhcM6WzztaMNCMg8YGOqUBjQq9JvTumFHfU8CmDDMSJvw4325BvQCW4c6dmz3WufgR%2BvkHqjxWnVhwxoHHZ%2FArhEhljo%2FV%2BDnvlLftnyNf29tpio7H45bdFiR5hPpnmOaEyPRWoqaueE5cg4FF7ClgYWp6ehmCDpHH3tfGFf3kaM1QQ0gFDQWxHah2mndrosEruZtD%2Ft3hPASvC%2Fcjgvu6qUIwZ6gnRtDy3wusmXQgkC1U8mqG&X-Amz-Signature=b9db4d60c7839c40c6a498d55bd699d74003330b9a5cf0a02b694c5b85787e90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Next go into our `base_link` and add the collision and inertia tags.

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml "12-16","18-18"
  <!-- Robot Base -->
  <link name="base_link">
    <visual>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
      <material name="Cyan">
        <color rgba="0 1.0 1.0 1.0"/>
      </material>
    </visual>
    
    <collision>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
    </collision>
    
    <xacro:box_inertia m="15" w="${base_width}" d="${base_length}" h="${base_height}"/>
  </link>
```

Same for our wheels:

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBYZMVSV%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDevK9zB15gHGc6US9szRYwx6B4tQHYVQOTXt%2Bd9dmXhwIgevB8iUk8jNBq5TGRo%2BP79aDZuNkMJTNqgVgXeOZvFo0qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP58MFAS2dGibW91FircA68iD%2FLSVsfJeJKmjCFbVt5%2BYkUXB%2FoDwWXLUflgCJ4B%2FeD%2BRilzm7wmWi%2BQg8gvIXiXsVw%2FQrRtuuWcAVZFuAMgLNg%2BK945ZhSRZ5gMWAlDeH73Jhio2IF9Ys9v0a7IHSsARiMTHElctLrlS6ghOIKbl9BRrZmjDBpCe8eAH1Q%2FpgofjAHzMaxs13DgwOvFN7k%2FNQ4ghXnUauRY%2FZBvc9SIBHqO7DZ9QAnVaCBVHejIYm%2Be3d%2BshzJzVtqvs4l%2FbnfRYI6B79yo3NiGPUNSOLw%2FyUihFxC13IkdIDsUq44yZ6u%2FuhUTygsb0f1BKd4Y%2BR%2Brqpofx4Gimmj55vopgh23Ud3QzUVdt4jXRJzFf4FF%2FuzB8Cxfde1pWlNgzoZQtOm2GJCzQOaG0Y8OOyVoVi6o5%2FPkGroorsz7Hv3Oyn1P5DzeVKX1iImuK%2FjZMKa%2F0XEnpoWDvmyqIIUUMmBQ5n2Mui9MuGxTOui8S%2BF9SM%2F%2BggXFg8yYhIHJ9KYZDOlzJK3hUo7%2BoAXDKrI%2Fs51SUnHgStc%2Fg3vIGzvZmb7YC0W3TXQA%2BBN%2B%2Ffjuj2EZEwO7JSXkXEdaGkAe53EaqKDXKaSHRWK1a%2FRqsKj8cfkd6SLOIEe9JziEoQpUdd6eMPyLg8YGOqUB4piE4uVGFBdMZcCZuYZCNLATIZn0567oV7Ik%2BmZEZJ51oZGfytuXi8a1U1Hy05Y%2BfBYoJiEXAeCfuaH3r6B5dYh4X2OxbQZskq94Z9pkTISj15Qm6l1LVCrmIJdtjQzNaNvne5ACJF%2BcDfDqqnlOliBVXsNVSYeTMZZWXdNjxVZ3Hlyp54Gea8Xn5XFwuQUj2VzhHPaNDDgRQG1OhL4wZJtnGPXP&X-Amz-Signature=9e735a4822fe63be108c83e5b9eab1d106014089607f28ec49e8e7575e0d8172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml "12-19"
    <link name="${prefix}_link">
      <visual>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
            <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
        <material name="Gray">
          <color rgba="0.5 0.5 0.5 1.0"/>
        </material>
      </visual>

      <collision>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
          <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
      </collision>

      <xacro:cylinder_inertia m="0.5" r="${wheel_radius}" h="${wheel_width}"/>
    </link>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLOBQB47%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQC%2B6GgjENwsIcsq6Yg0Q0G4BPXj2po2ZytrvHzFIRFHsAIhAN%2F58kskz5fFu%2BW5Oo2l9UsF%2BBYgToipPQ91IbhUM4dKKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbPp72ufSnHPwGoPAq3APGZLBvxMSAP4jH7jNiZ1K7Ar4%2BYZH%2BUs1rPolioHs8MVr3yBiw32sglZ2cOGhf5XXCO%2F0BhKCbLuJdvtyZkXAVgjlF86NTOwgQz5TKa0EKlgINgQnm%2FP8p31KpqEMoQsaQYJcibiNVGwftjSeSc%2BNjA5qBi6OFlwDDpzLx%2Ftots0%2BZ55eQs%2FTw59%2B%2Br3%2F2LlrJUDc1OMzqZjrQLLfwafG8feV%2B0JEnFChQbCAde8OEg50biLmIhe6xWgaxZv5XbvYXs94ldAfSZ6geMDF5y3lwP6bz4iMIQAhwL8vw4Q5%2FEuHQHu3y73iI7Bbv9dusi3xv%2BjXVSy69nYKQBTCnnNVMdqmZO5ypJ7aa62AxjYKWB0bRbf9ZwThlC1ljdNLVf3wqlyAZmL%2BHLHMlPuhRFk7mKD8hP64IP4HY3LQrY1j33CSY8sNf61K40RK%2FqUUOWZZnJ3SdGh%2F4uzqMDwRCg7V7ytZMyEFa6OWTgEcdD859BQY2ynxc7iC2xA2pw7SMqCcHw93%2B934F32XiQhNyYQ3Jf4LTVUizAswcFLf2hUYKVfKt%2BnS23TAW0%2FjJYd%2FWVjNqm5Ao1vk1KI8YhCY8i6Zqf%2FSJuLeA4UAxBMe2aofKYNZjXNy5VXg3p6KWBjD0i4PGBjqkAQiPUYpTOL%2FkGqf%2FKZnf3D%2Bz%2BtCnUdc9tWm%2B9TGPAASa6iw75zxu6bWalBntrs%2B7hCd%2B4kdiOGUMY%2Fj%2Fl6X1hDjDlv%2FE0o2jyXnwfQpTL5nMmZZ3b5vqY3LeRY3UDvpR5%2FsaU8F0raQYxFJULwoTpmEtCLoxowVIh0s0pbQ0a8L0RCiJ8UamCsUONr8TX2M5mJ1J%2BoI7Q4C7ztO60oU1MqdOJPtu&X-Amz-Signature=e92bf6577d9d1efe8198d3f787936e05e614ba14b49d598525b9b663fe910417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

and Same for the caster wheel:

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml "12-19"
  <!-- Caster Wheel -->
  <link name="front_caster">
    <visual>
      <geometry>
        <sphere radius="${(wheel_radius+wheel_zoff-(base_height/2))}"/>
      </geometry>
      <material name="Cyan">
        <color rgba="0 1.0 1.0 1.0"/>
      </material>
    </visual>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <sphere radius="${(wheel_radius+wheel_zoff-(base_height/2))}"/>
      </geometry>
    </collision>

    <xacro:sphere_inertia m="0.5" r="${(wheel_radius+wheel_zoff-(base_height/2))}"/>
  </link>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXRGF6YA%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIH%2BGjBGjpnGZR2yUDG6aoWirHdu1xnS093PWtZsReEDhAiAyKDOIcxoMaOWUAnde1DX4kJTbZfPOksLNdWI3nGy%2BSiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9FnwYvkWC7yFtKd3KtwDqyD44QG9MVmq3J5Cl0SAbdnl5%2FmOqs00gwiMGlXHfwHujdEZD2Q7oqkf%2BBXaAkyQgNpWFuw%2B60RMWEP1n9Y%2BQaQKjpveU%2BMmoo2BWiG2OamrWE83SlWLEfPh5MdN2Z53i9DgiDngbN70tqXifwdlYtSEZN%2BuHl02tocv1bISvEFs%2FDTcR3O54qd1VejHSn6qtwgNfWGRl0%2F3Pd5ILRAj8EzEZrV1R4TZK%2F07xfQa2DEj8q%2BJCj16cHWPr7XbPEZY25az2pbTz78tUpzkoCXZDDGyw7QEOeSm1sMZzISdvgsXV6MmCK%2BmTaeJscitEP8f8GciS5%2BnJF4WKDEnIX0i%2FSOoV6qZjwU8CixHA5TB9d1uXQL5AbQ%2FUajO2KBFEGy0f4yYsY2h0M5%2B1f6F%2BNc9LGGCbvDkrKijc7T0ASENHZ33QnRt8ZbHhdtvsM%2BmmnKDbAfNMuBHUnM7IV1vjSW0S620dXMv3gpT3VKcMeFStmfbQhosLAQEVS45X%2B7Z60UtOfSieDu7gSgRQi9nJJaBVwn86tSk21ESJMMSjvwir%2B8gfO7Q%2B8j7S0yFOP9pk7XmVmx0tKzetOwn5Ur%2BKmRRE84l3mcK2dVx5UqmOW8oxLZd8Mopj%2FqboXjIjBAw1ouDxgY6pgEG1ScWZG7h1pamkAbP0xW3ubA3muGJH%2F1H%2FWx2wq%2Bc5jiMard%2BJNc%2BAI8gTEN6cIqIgFXQFkizrFJ0sD9IdTOqf6MB4ChpVhrS%2FVQgrNbYaB9skdU4SB4J5vQntGVzZXruCYPCLsEQ03yI%2BfnXSI8Vh2b6Ow2yyTP8tRbKM534IXy2ISWgka9Fvz9oyK8%2FaOtmn2NqmXzuoDF2eDXqUiDU3sKDq%2BvL&X-Amz-Signature=81266da492ac53dd39f60bc3f4faa4cc25233276505d0722e45ca1df460ecc05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YDFUQKT%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC5X6Cp6NXayByLlI0s55pgkHoBCP%2Brcc7J5%2FNx656AZwIgFCeHSBNfP4ctnvbVHOtqAr0l0UyBSYa4Lb9S4ULykjYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJYaZnUKkWKekHshyrcA5n2CIJxPZUHVHeXP2Yqmkf9%2B9Ugd8V4exGGwxHAkj4%2Fqwx7wXYV9mDkrETDiqI7umafUtZN5Orm1nMtCWT0gyPwbtag9pUN7QnuXNlqEGGIaWpVKzmkNM4BWmFpYVxvZFN7iMhk2dB%2Bw0X%2BAgNfLoHu0jalv4C8Xi%2BoKB1hH8ncZ45Zycl9gZPSz2k%2FNFVM7Z5yct3gH1zeBt57QRGkfTe1nmLTCfhZ0lP7WWUbYICaU9mMtDChNO2eo11u1U%2FRmlqXtqNkayaD2DIT%2FHC1hJmE7lnNKz0RzNHO1N%2BL8gs2KsPPYJ7Q9hWON%2Byj%2Fgra1yJoemfuEnO3IOBarCbZlSkZJ%2F35ecqUEArXlowzY4bmZ%2Fp49AmGbyLqu8HA%2FZ7JL1XR%2FO3G%2Bu%2Fs0CzIKcJdmnrO%2BZV8ewK8Ue%2Bee5BdNC1xEhLtfH61G3YQsENlGYdaETiLFJypm36YX7T63nOZ%2BwqBksqsjh1mjZgxgByM00RSTq2CwST49Zls552Awt21pEEDf41N36Vyo0GS%2F3JfCD4z3BvCDGC%2FqSCxquQBXGm1FAii5BGwh7VsnGv3lzQXWdaDzjNGyTtkOkxcbr0ab3Qtn17lT0ftIQkDzfdkVvpzk4dMPXbhcM6WzztaMNCMg8YGOqUBjQq9JvTumFHfU8CmDDMSJvw4325BvQCW4c6dmz3WufgR%2BvkHqjxWnVhwxoHHZ%2FArhEhljo%2FV%2BDnvlLftnyNf29tpio7H45bdFiR5hPpnmOaEyPRWoqaueE5cg4FF7ClgYWp6ehmCDpHH3tfGFf3kaM1QQ0gFDQWxHah2mndrosEruZtD%2Ft3hPASvC%2Fcjgvu6qUIwZ6gnRtDy3wusmXQgkC1U8mqG&X-Amz-Signature=880c346c827088d1baccf039e56c1c9d7657731469594937ba039e1e80e1fa3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**final code:**{{< /markdownify >}}</summary>
  
```xml
<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">

  <!-- Define robot constants -->
  <xacro:property name="base_width" value="0.31"/>
  <xacro:property name="base_length" value="0.42"/>
  <xacro:property name="base_height" value="0.18"/>

  <xacro:property name="wheel_radius" value="0.10"/>
  <xacro:property name="wheel_width" value="0.04"/>
  <xacro:property name="wheel_ygap" value="0.025"/>
  <xacro:property name="wheel_zoff" value="0.05"/>
  <xacro:property name="wheel_xoff" value="0.12"/>

  <xacro:property name="caster_xoff" value="0.14"/>

	<!-- Define inertial property macros  -->
  <xacro:macro name="box_inertia" params="m w h d">
    <inertial>
      <origin xyz="0 0 0" rpy="${pi/2} 0 ${pi/2}"/>
      <mass value="${m}"/>
      <inertia ixx="${(m/12) * (h*h + d*d)}" ixy="0.0" ixz="0.0" iyy="${(m/12) * (w*w + d*d)}" iyz="0.0" izz="${(m/12) * (w*w + h*h)}"/>
    </inertial>
  </xacro:macro>

  <xacro:macro name="cylinder_inertia" params="m r h">
    <inertial>
      <origin xyz="0 0 0" rpy="${pi/2} 0 0" />
      <mass value="${m}"/>
      <inertia ixx="${(m/12) * (3*r*r + h*h)}" ixy = "0" ixz = "0" iyy="${(m/12) * (3*r*r + h*h)}" iyz = "0" izz="${(m/2) * (r*r)}"/>
    </inertial>
  </xacro:macro>

  <xacro:macro name="sphere_inertia" params="m r">
    <inertial>
      <mass value="${m}"/>
      <inertia ixx="${(2/5) * m * (r*r)}" ixy="0.0" ixz="0.0" iyy="${(2/5) * m * (r*r)}" iyz="0.0" izz="${(2/5) * m * (r*r)}"/>
    </inertial>
  </xacro:macro>


  <!-- Robot Base -->
  <link name="base_link">
    <visual>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
      <material name="Cyan">
        <color rgba="0 1.0 1.0 1.0"/>
      </material>
    </visual>
   
    <collision>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
    </collision>

    <xacro:box_inertia m="15" w="${base_width}" d="${base_length}" h="${base_height}"/>
  </link>

  <!-- Robot Footprint -->
  <link name="base_footprint">
    <xacro:box_inertia m="15" w="${base_width}" d="${base_length}" h="${base_height}"/>
  </link>

  <joint name="base_joint" type="fixed">
    <parent link="base_link"/>
    <child link="base_footprint"/>
    <origin xyz="0.0 0.0 ${-(wheel_radius+wheel_zoff)}" rpy="0 0 0"/>
  </joint>


  <!-- Wheels -->
  <xacro:macro name="wheel" params="prefix x_reflect y_reflect">
    <link name="${prefix}_link">
      <visual>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
            <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
        <material name="Gray">
          <color rgba="0.5 0.5 0.5 1.0"/>
        </material>
      </visual>
      
      <collision>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
          <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
      </collision>

      <xacro:cylinder_inertia m="0.5" r="${wheel_radius}" h="${wheel_width}"/>
    </link>

    <joint name="${prefix}_joint" type="continuous">
      <parent link="base_link"/>
      <child link="${prefix}_link"/>
      <origin xyz="${x_reflect*wheel_xoff} ${y_reflect*(base_width/2+wheel_ygap)} ${-wheel_zoff}" rpy="0 0 0"/>
      <axis xyz="0 1 0"/>
    </joint>
  </xacro:macro>

  <xacro:wheel prefix="drivewhl_l" x_reflect="-1" y_reflect="1" />
  <xacro:wheel prefix="drivewhl_r" x_reflect="-1" y_reflect="-1" />

    <!-- Caster Wheel -->
  <link name="front_caster">
    <visual>
      <geometry>
        <sphere radius="${(wheel_radius+wheel_zoff-(base_height/2))}"/>
      </geometry>
      <material name="Cyan">
        <color rgba="0 1.0 1.0 1.0"/>
      </material>
    </visual>
    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <sphere radius="${(wheel_radius+wheel_zoff-(base_height/2))}"/>
      </geometry>
    </collision>

  </link>

  <joint name="caster_joint" type="fixed">
    <parent link="base_link"/>
    <child link="front_caster"/>
    <origin xyz="${caster_xoff} 0.0 ${-(base_height/2)}" rpy="0 0 0"/>
  </joint>

</robot>
```

</details>



# Nodes

Now that you have the `urdf` lets plug it in ROS

Here are some nodes to do so

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YDFUQKT%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC5X6Cp6NXayByLlI0s55pgkHoBCP%2Brcc7J5%2FNx656AZwIgFCeHSBNfP4ctnvbVHOtqAr0l0UyBSYa4Lb9S4ULykjYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJYaZnUKkWKekHshyrcA5n2CIJxPZUHVHeXP2Yqmkf9%2B9Ugd8V4exGGwxHAkj4%2Fqwx7wXYV9mDkrETDiqI7umafUtZN5Orm1nMtCWT0gyPwbtag9pUN7QnuXNlqEGGIaWpVKzmkNM4BWmFpYVxvZFN7iMhk2dB%2Bw0X%2BAgNfLoHu0jalv4C8Xi%2BoKB1hH8ncZ45Zycl9gZPSz2k%2FNFVM7Z5yct3gH1zeBt57QRGkfTe1nmLTCfhZ0lP7WWUbYICaU9mMtDChNO2eo11u1U%2FRmlqXtqNkayaD2DIT%2FHC1hJmE7lnNKz0RzNHO1N%2BL8gs2KsPPYJ7Q9hWON%2Byj%2Fgra1yJoemfuEnO3IOBarCbZlSkZJ%2F35ecqUEArXlowzY4bmZ%2Fp49AmGbyLqu8HA%2FZ7JL1XR%2FO3G%2Bu%2Fs0CzIKcJdmnrO%2BZV8ewK8Ue%2Bee5BdNC1xEhLtfH61G3YQsENlGYdaETiLFJypm36YX7T63nOZ%2BwqBksqsjh1mjZgxgByM00RSTq2CwST49Zls552Awt21pEEDf41N36Vyo0GS%2F3JfCD4z3BvCDGC%2FqSCxquQBXGm1FAii5BGwh7VsnGv3lzQXWdaDzjNGyTtkOkxcbr0ab3Qtn17lT0ftIQkDzfdkVvpzk4dMPXbhcM6WzztaMNCMg8YGOqUBjQq9JvTumFHfU8CmDDMSJvw4325BvQCW4c6dmz3WufgR%2BvkHqjxWnVhwxoHHZ%2FArhEhljo%2FV%2BDnvlLftnyNf29tpio7H45bdFiR5hPpnmOaEyPRWoqaueE5cg4FF7ClgYWp6ehmCDpHH3tfGFf3kaM1QQ0gFDQWxHah2mndrosEruZtD%2Ft3hPASvC%2Fcjgvu6qUIwZ6gnRtDy3wusmXQgkC1U8mqG&X-Amz-Signature=ac56c48df67207d33cbab96842540c3e0360f1b3a3cc87480bebebc7876eb19d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

{{< /table >}}


#### Outputs:

| **Name**             | **Type** |
| -------------------- | -------- |
| `/tf`                |          |
| `/robot_description` |          |

#### Params:

| **Name**            | **Type** |
| ------------------- | -------- |
| `robot_description` | file     |
| `use_sim_time`      | bool     |

#### description:

Node that takes in the `urdf` and puts it into ROS

Takes 2 major inputs:

- `urdf` file and publishes all transforms in the `/tf` topic
- `/joint_states` topic that takes in all the states of joints in the `urdf`

{{% /alert %}}

{{% alert icon=”👾” context="success" %}}

### **New Node** **`joint`**_**`_`**_**`state_publisher_gui`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF4CC2CU%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDGgICikmng%2FbhGSm3vyqDqxDYgKUyRbe8tfjquRGAtsQIhAJVw%2BKxjKj3ciAJgEcYsB70r80hZ0NNI7pUMh5OrdzMeKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMZq0UFW4h%2FK%2FWjgQq3ANVfJss7FlN8Yb67zCUAbkkBPJFMyEhwEcmcRjEnzfUr2fddG1LQ01QJ2G0Ypfk6YF7Q3rTLusrk4fHvUQZII2auAs%2FVUzRCp9R4Aiq51tc1L91WNVB7m53u8UUqn0N4ONUAGMQT9zAA%2FswncrOOONMGizkRvubPCbjVofoLhDMwbuf43VwOSuZKNW5wq4wnk%2Fj4%2BO%2BOyV%2B2Zj1xNFl4alUHhXrtyRElMHGgyy%2FA4AitLrJDZ%2Bv2fiF5jzKLfLQ0YlewppiX0kPBVHLRBln7%2BoHPhpuEjF%2BgAmlK81rg%2FrKAsask7P91ohh8AtT0dSh3lLW4Ma63T38TaNJj9cQwTFbKSX3%2FU5Wv3kKoZMXmUTq8psuI1iNR1NQsJmLMPyiV1e9QJCthnoxmDDwa0nM%2BeFLXXLyNTYCFADokdOM5qykfu6c%2FkzAVbBz7m1WjtK8Ku59704Kl6KRauqm%2FOwgNpQ92wt8%2BSfI6gzyzq%2FOLgxj7Hy%2FXBlTXfK%2BkVJfhpJacZlU%2B%2BxKgI6JmcELxZxy9Ih6J4E%2FX40kCs87J7vbO33Y2OtY1terA6i%2BtE5Gdw2zlUhz8PwEabU511Pz7yypMxx5KxaMnTsjp%2BnhSQ3s3riMFp0z1tnEsRbpT8ExrTC%2Bi4PGBjqkATDt0qza5wO0Px9xkKGUmIvMjV%2B7NT9bXULCUCwQIiI13XdJK0FThwzdvAK2qv%2BvEk3qwoUdi5HfFMCpmGt59%2FS8u0HK%2BWphkede2zdO%2Bg2LVGEKhRi3LdRNoWPjVleYGluNv08p%2Bo66fGZ78miXMP8BM7S28WW0FSu3uayxLsVbEtPtW958fZih0amwl%2BID2gvXiRoZ%2FS0jKGEQ912abdwxopnZ&X-Amz-Signature=b794b1439463a6328341763ce93df295d673805db5183167745dca148be79245&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

| **Name**             | **Type** |
| -------------------- | -------- |
| `/robot_description` |          |

#### Outputs:

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

#### description:

lets you debug your `urdf` to see if all your joints work correctly.

Takes `/robot_description` from `robot_state_publisher` and outputs `/joint_states` with adjustable sliders

designed to be replaced by a physical robot or a simulated robot node

{{% /alert %}}

## Current Node diagram

With the two nodes we are going to make this diagram:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF4CC2CU%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDGgICikmng%2FbhGSm3vyqDqxDYgKUyRbe8tfjquRGAtsQIhAJVw%2BKxjKj3ciAJgEcYsB70r80hZ0NNI7pUMh5OrdzMeKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMZq0UFW4h%2FK%2FWjgQq3ANVfJss7FlN8Yb67zCUAbkkBPJFMyEhwEcmcRjEnzfUr2fddG1LQ01QJ2G0Ypfk6YF7Q3rTLusrk4fHvUQZII2auAs%2FVUzRCp9R4Aiq51tc1L91WNVB7m53u8UUqn0N4ONUAGMQT9zAA%2FswncrOOONMGizkRvubPCbjVofoLhDMwbuf43VwOSuZKNW5wq4wnk%2Fj4%2BO%2BOyV%2B2Zj1xNFl4alUHhXrtyRElMHGgyy%2FA4AitLrJDZ%2Bv2fiF5jzKLfLQ0YlewppiX0kPBVHLRBln7%2BoHPhpuEjF%2BgAmlK81rg%2FrKAsask7P91ohh8AtT0dSh3lLW4Ma63T38TaNJj9cQwTFbKSX3%2FU5Wv3kKoZMXmUTq8psuI1iNR1NQsJmLMPyiV1e9QJCthnoxmDDwa0nM%2BeFLXXLyNTYCFADokdOM5qykfu6c%2FkzAVbBz7m1WjtK8Ku59704Kl6KRauqm%2FOwgNpQ92wt8%2BSfI6gzyzq%2FOLgxj7Hy%2FXBlTXfK%2BkVJfhpJacZlU%2B%2BxKgI6JmcELxZxy9Ih6J4E%2FX40kCs87J7vbO33Y2OtY1terA6i%2BtE5Gdw2zlUhz8PwEabU511Pz7yypMxx5KxaMnTsjp%2BnhSQ3s3riMFp0z1tnEsRbpT8ExrTC%2Bi4PGBjqkATDt0qza5wO0Px9xkKGUmIvMjV%2B7NT9bXULCUCwQIiI13XdJK0FThwzdvAK2qv%2BvEk3qwoUdi5HfFMCpmGt59%2FS8u0HK%2BWphkede2zdO%2Bg2LVGEKhRi3LdRNoWPjVleYGluNv08p%2Bo66fGZ78miXMP8BM7S28WW0FSu3uayxLsVbEtPtW958fZih0amwl%2BID2gvXiRoZ%2FS0jKGEQ912abdwxopnZ&X-Amz-Signature=3c9b393a58b0b52be42f4c986dcd7611dc0317d9091ec7fe26a282e294324666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF4CC2CU%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDGgICikmng%2FbhGSm3vyqDqxDYgKUyRbe8tfjquRGAtsQIhAJVw%2BKxjKj3ciAJgEcYsB70r80hZ0NNI7pUMh5OrdzMeKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMZq0UFW4h%2FK%2FWjgQq3ANVfJss7FlN8Yb67zCUAbkkBPJFMyEhwEcmcRjEnzfUr2fddG1LQ01QJ2G0Ypfk6YF7Q3rTLusrk4fHvUQZII2auAs%2FVUzRCp9R4Aiq51tc1L91WNVB7m53u8UUqn0N4ONUAGMQT9zAA%2FswncrOOONMGizkRvubPCbjVofoLhDMwbuf43VwOSuZKNW5wq4wnk%2Fj4%2BO%2BOyV%2B2Zj1xNFl4alUHhXrtyRElMHGgyy%2FA4AitLrJDZ%2Bv2fiF5jzKLfLQ0YlewppiX0kPBVHLRBln7%2BoHPhpuEjF%2BgAmlK81rg%2FrKAsask7P91ohh8AtT0dSh3lLW4Ma63T38TaNJj9cQwTFbKSX3%2FU5Wv3kKoZMXmUTq8psuI1iNR1NQsJmLMPyiV1e9QJCthnoxmDDwa0nM%2BeFLXXLyNTYCFADokdOM5qykfu6c%2FkzAVbBz7m1WjtK8Ku59704Kl6KRauqm%2FOwgNpQ92wt8%2BSfI6gzyzq%2FOLgxj7Hy%2FXBlTXfK%2BkVJfhpJacZlU%2B%2BxKgI6JmcELxZxy9Ih6J4E%2FX40kCs87J7vbO33Y2OtY1terA6i%2BtE5Gdw2zlUhz8PwEabU511Pz7yypMxx5KxaMnTsjp%2BnhSQ3s3riMFp0z1tnEsRbpT8ExrTC%2Bi4PGBjqkATDt0qza5wO0Px9xkKGUmIvMjV%2B7NT9bXULCUCwQIiI13XdJK0FThwzdvAK2qv%2BvEk3qwoUdi5HfFMCpmGt59%2FS8u0HK%2BWphkede2zdO%2Bg2LVGEKhRi3LdRNoWPjVleYGluNv08p%2Bo66fGZ78miXMP8BM7S28WW0FSu3uayxLsVbEtPtW958fZih0amwl%2BID2gvXiRoZ%2FS0jKGEQ912abdwxopnZ&X-Amz-Signature=860b1ace693089c699d9e3cd96c9a2f0c747c6f116f99621c7f758a11750c431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF4CC2CU%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDGgICikmng%2FbhGSm3vyqDqxDYgKUyRbe8tfjquRGAtsQIhAJVw%2BKxjKj3ciAJgEcYsB70r80hZ0NNI7pUMh5OrdzMeKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMZq0UFW4h%2FK%2FWjgQq3ANVfJss7FlN8Yb67zCUAbkkBPJFMyEhwEcmcRjEnzfUr2fddG1LQ01QJ2G0Ypfk6YF7Q3rTLusrk4fHvUQZII2auAs%2FVUzRCp9R4Aiq51tc1L91WNVB7m53u8UUqn0N4ONUAGMQT9zAA%2FswncrOOONMGizkRvubPCbjVofoLhDMwbuf43VwOSuZKNW5wq4wnk%2Fj4%2BO%2BOyV%2B2Zj1xNFl4alUHhXrtyRElMHGgyy%2FA4AitLrJDZ%2Bv2fiF5jzKLfLQ0YlewppiX0kPBVHLRBln7%2BoHPhpuEjF%2BgAmlK81rg%2FrKAsask7P91ohh8AtT0dSh3lLW4Ma63T38TaNJj9cQwTFbKSX3%2FU5Wv3kKoZMXmUTq8psuI1iNR1NQsJmLMPyiV1e9QJCthnoxmDDwa0nM%2BeFLXXLyNTYCFADokdOM5qykfu6c%2FkzAVbBz7m1WjtK8Ku59704Kl6KRauqm%2FOwgNpQ92wt8%2BSfI6gzyzq%2FOLgxj7Hy%2FXBlTXfK%2BkVJfhpJacZlU%2B%2BxKgI6JmcELxZxy9Ih6J4E%2FX40kCs87J7vbO33Y2OtY1terA6i%2BtE5Gdw2zlUhz8PwEabU511Pz7yypMxx5KxaMnTsjp%2BnhSQ3s3riMFp0z1tnEsRbpT8ExrTC%2Bi4PGBjqkATDt0qza5wO0Px9xkKGUmIvMjV%2B7NT9bXULCUCwQIiI13XdJK0FThwzdvAK2qv%2BvEk3qwoUdi5HfFMCpmGt59%2FS8u0HK%2BWphkede2zdO%2Bg2LVGEKhRi3LdRNoWPjVleYGluNv08p%2Bo66fGZ78miXMP8BM7S28WW0FSu3uayxLsVbEtPtW958fZih0amwl%2BID2gvXiRoZ%2FS0jKGEQ912abdwxopnZ&X-Amz-Signature=a2960845e6eb58f8be9393a64b6fda36f307fa8a76d8aaafeb520dbcaec31c6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WF6GKPF%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBwYai0kYAwNrkK2EUXorAU%2FQeP7gTkrc%2FgicqEl9ivtAiBdLMnljv8V6BcfXaIu0lPmN7wHsRCSNiRFy7A1uZXauCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1WAf%2FiCIQ%2FsfbYY6KtwDCSMNPB1cv9M87XcSnBVDD6sBlAW5r6pyduoGhQQzFm0j5bN8aSaKVzFpe6LRMo17d%2BV%2Bb5ZgwejCdCh51l%2FYR4JyBbaYjoE8zRjXBkqAZBnJVsXsHDdeDCeac5LfGbmutPNWgVuLXkVO8%2B12ltzWIBAr7PL0xhUUT7F0n1m0fZIJvrvKtf%2BS%2Bk7cQu7Ls9oPUb93xwK%2FqPbaHy8hrFJxJRneyuSnSEHQPpgGTNTy9fZmfRoFY81K3LlEvBbGzKT2B37oAE8oKZn5HxwcDupfYG9QRemdDhnEHARyaYC5GMEsk69R1T%2BepZTw%2BLIirIoZbmRGNDWS2oBmU%2BE7xfK8CGG2v5SS%2FAO7M2bLFanWsQUhQolvx5UCUhLaseepJ0DvDg7C1%2B%2B%2Fu3bLraXdWQV%2BhbbYV8Sg0CAyRc%2FSe%2BgUoIQeCzc16jPMYfsvXGOXvEzwVoq12I9PRIc5i4xkox%2B8moqG3%2BSkVFZoSS4SAJfKvuvTa%2ByzSAM3W1%2FuSczgmj2rh3jzuiezzbbNGH4HBxkWS4oOV8MnjBO9W2YGVFghDfv7UrbIR6iulDo4T2jzjZcNJjX23VV32UchuLyCIP92SDAHbymrMm1BM7RBdeeZc1t9unzph8uZ6IUaf1wwmYyDxgY6pgFAu9kqPBY4TacacOUjpZxl29vHFEiyejbL7L9YTpJB4bKiDDSN36XwtLTGtQrLZdpt5jjvruDs3UemDrifcACx0dpzHzvGYhqzHLN6B9NzdlU1P1xuGFHvtSn8kgAjmgb7JR064m1roCU9a%2BchwFJu9Dxv%2BW90gxhfaxT1igV5wWkJlo1Zfkcknaja9FGsk1tzsw9E5bZ17ciWlCmIFkjJGvgZvyto&X-Amz-Signature=7b2c3cb000646d26a4d6943af816db27d1b837a0acabf9187619b8b3438fe8c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF4CC2CU%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDGgICikmng%2FbhGSm3vyqDqxDYgKUyRbe8tfjquRGAtsQIhAJVw%2BKxjKj3ciAJgEcYsB70r80hZ0NNI7pUMh5OrdzMeKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMZq0UFW4h%2FK%2FWjgQq3ANVfJss7FlN8Yb67zCUAbkkBPJFMyEhwEcmcRjEnzfUr2fddG1LQ01QJ2G0Ypfk6YF7Q3rTLusrk4fHvUQZII2auAs%2FVUzRCp9R4Aiq51tc1L91WNVB7m53u8UUqn0N4ONUAGMQT9zAA%2FswncrOOONMGizkRvubPCbjVofoLhDMwbuf43VwOSuZKNW5wq4wnk%2Fj4%2BO%2BOyV%2B2Zj1xNFl4alUHhXrtyRElMHGgyy%2FA4AitLrJDZ%2Bv2fiF5jzKLfLQ0YlewppiX0kPBVHLRBln7%2BoHPhpuEjF%2BgAmlK81rg%2FrKAsask7P91ohh8AtT0dSh3lLW4Ma63T38TaNJj9cQwTFbKSX3%2FU5Wv3kKoZMXmUTq8psuI1iNR1NQsJmLMPyiV1e9QJCthnoxmDDwa0nM%2BeFLXXLyNTYCFADokdOM5qykfu6c%2FkzAVbBz7m1WjtK8Ku59704Kl6KRauqm%2FOwgNpQ92wt8%2BSfI6gzyzq%2FOLgxj7Hy%2FXBlTXfK%2BkVJfhpJacZlU%2B%2BxKgI6JmcELxZxy9Ih6J4E%2FX40kCs87J7vbO33Y2OtY1terA6i%2BtE5Gdw2zlUhz8PwEabU511Pz7yypMxx5KxaMnTsjp%2BnhSQ3s3riMFp0z1tnEsRbpT8ExrTC%2Bi4PGBjqkATDt0qza5wO0Px9xkKGUmIvMjV%2B7NT9bXULCUCwQIiI13XdJK0FThwzdvAK2qv%2BvEk3qwoUdi5HfFMCpmGt59%2FS8u0HK%2BWphkede2zdO%2Bg2LVGEKhRi3LdRNoWPjVleYGluNv08p%2Bo66fGZ78miXMP8BM7S28WW0FSu3uayxLsVbEtPtW958fZih0amwl%2BID2gvXiRoZ%2FS0jKGEQ912abdwxopnZ&X-Amz-Signature=3b5308a70853077408e93c41a7698c148de29d6445b6e8a1c7682d2f0e41e36e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Move config.rviz

<details>
  <summary>{{< markdownify >}}What is rviz?{{< /markdownify >}}</summary>
  
TODO: explain rviz better (say how it is like ros2 echo but visual)

</details>



create `rviz` folder in `mbot_pkg` and move the `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF4CC2CU%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDGgICikmng%2FbhGSm3vyqDqxDYgKUyRbe8tfjquRGAtsQIhAJVw%2BKxjKj3ciAJgEcYsB70r80hZ0NNI7pUMh5OrdzMeKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMZq0UFW4h%2FK%2FWjgQq3ANVfJss7FlN8Yb67zCUAbkkBPJFMyEhwEcmcRjEnzfUr2fddG1LQ01QJ2G0Ypfk6YF7Q3rTLusrk4fHvUQZII2auAs%2FVUzRCp9R4Aiq51tc1L91WNVB7m53u8UUqn0N4ONUAGMQT9zAA%2FswncrOOONMGizkRvubPCbjVofoLhDMwbuf43VwOSuZKNW5wq4wnk%2Fj4%2BO%2BOyV%2B2Zj1xNFl4alUHhXrtyRElMHGgyy%2FA4AitLrJDZ%2Bv2fiF5jzKLfLQ0YlewppiX0kPBVHLRBln7%2BoHPhpuEjF%2BgAmlK81rg%2FrKAsask7P91ohh8AtT0dSh3lLW4Ma63T38TaNJj9cQwTFbKSX3%2FU5Wv3kKoZMXmUTq8psuI1iNR1NQsJmLMPyiV1e9QJCthnoxmDDwa0nM%2BeFLXXLyNTYCFADokdOM5qykfu6c%2FkzAVbBz7m1WjtK8Ku59704Kl6KRauqm%2FOwgNpQ92wt8%2BSfI6gzyzq%2FOLgxj7Hy%2FXBlTXfK%2BkVJfhpJacZlU%2B%2BxKgI6JmcELxZxy9Ih6J4E%2FX40kCs87J7vbO33Y2OtY1terA6i%2BtE5Gdw2zlUhz8PwEabU511Pz7yypMxx5KxaMnTsjp%2BnhSQ3s3riMFp0z1tnEsRbpT8ExrTC%2Bi4PGBjqkATDt0qza5wO0Px9xkKGUmIvMjV%2B7NT9bXULCUCwQIiI13XdJK0FThwzdvAK2qv%2BvEk3qwoUdi5HfFMCpmGt59%2FS8u0HK%2BWphkede2zdO%2Bg2LVGEKhRi3LdRNoWPjVleYGluNv08p%2Bo66fGZ78miXMP8BM7S28WW0FSu3uayxLsVbEtPtW958fZih0amwl%2BID2gvXiRoZ%2FS0jKGEQ912abdwxopnZ&X-Amz-Signature=231d510b08f714056fdce2ef0393a0d4eb233ddab6a1f8c3b06e903e2ed831cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF4CC2CU%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDGgICikmng%2FbhGSm3vyqDqxDYgKUyRbe8tfjquRGAtsQIhAJVw%2BKxjKj3ciAJgEcYsB70r80hZ0NNI7pUMh5OrdzMeKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMZq0UFW4h%2FK%2FWjgQq3ANVfJss7FlN8Yb67zCUAbkkBPJFMyEhwEcmcRjEnzfUr2fddG1LQ01QJ2G0Ypfk6YF7Q3rTLusrk4fHvUQZII2auAs%2FVUzRCp9R4Aiq51tc1L91WNVB7m53u8UUqn0N4ONUAGMQT9zAA%2FswncrOOONMGizkRvubPCbjVofoLhDMwbuf43VwOSuZKNW5wq4wnk%2Fj4%2BO%2BOyV%2B2Zj1xNFl4alUHhXrtyRElMHGgyy%2FA4AitLrJDZ%2Bv2fiF5jzKLfLQ0YlewppiX0kPBVHLRBln7%2BoHPhpuEjF%2BgAmlK81rg%2FrKAsask7P91ohh8AtT0dSh3lLW4Ma63T38TaNJj9cQwTFbKSX3%2FU5Wv3kKoZMXmUTq8psuI1iNR1NQsJmLMPyiV1e9QJCthnoxmDDwa0nM%2BeFLXXLyNTYCFADokdOM5qykfu6c%2FkzAVbBz7m1WjtK8Ku59704Kl6KRauqm%2FOwgNpQ92wt8%2BSfI6gzyzq%2FOLgxj7Hy%2FXBlTXfK%2BkVJfhpJacZlU%2B%2BxKgI6JmcELxZxy9Ih6J4E%2FX40kCs87J7vbO33Y2OtY1terA6i%2BtE5Gdw2zlUhz8PwEabU511Pz7yypMxx5KxaMnTsjp%2BnhSQ3s3riMFp0z1tnEsRbpT8ExrTC%2Bi4PGBjqkATDt0qza5wO0Px9xkKGUmIvMjV%2B7NT9bXULCUCwQIiI13XdJK0FThwzdvAK2qv%2BvEk3qwoUdi5HfFMCpmGt59%2FS8u0HK%2BWphkede2zdO%2Bg2LVGEKhRi3LdRNoWPjVleYGluNv08p%2Bo66fGZ78miXMP8BM7S28WW0FSu3uayxLsVbEtPtW958fZih0amwl%2BID2gvXiRoZ%2FS0jKGEQ912abdwxopnZ&X-Amz-Signature=860b1ace693089c699d9e3cd96c9a2f0c747c6f116f99621c7f758a11750c431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Launch file

<details>
  <summary>{{< markdownify >}}What is in this launch file?{{< /markdownify >}}</summary>
  
[launch files guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/launch-files/)

Launch files are just a scripted way of running multiple ROS nodes at the same time instead of opining multiple terminals.

</details>



This should do the same thing as running the three terminals from above

```python
import os
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument, ExecuteProcess, IncludeLaunchDescription
from launch.conditions import IfCondition, UnlessCondition
from launch.substitutions import Command, LaunchConfiguration
from launch_ros.actions import Node
from launch.launch_description_sources import PythonLaunchDescriptionSource
from ament_index_python.packages import get_package_share_directory
from ros_gz_bridge.actions import RosGzBridge
from ros_gz_sim.actions import GzServer
from launch_ros.substitutions import FindPackageShare


def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config

    robot_state_publisher_node = Node(
        package='robot_state_publisher',
        executable='robot_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', default_model_path])}]
    )
    joint_state_publisher_gui_node = Node(
        package='joint_state_publisher_gui',
        executable='joint_state_publisher_gui',
    )
    rviz_node = Node(
        package='rviz2',
        executable='rviz2',
        output='screen',
        arguments=['-d', default_rviz_config_path],
    )

    return LaunchDescription([
        joint_state_publisher_gui_node, # debugs urdf joints
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node # starts rviz
    ])
```

## Add new files to `setup.py` 

if we add new files types to the package we need to update the `setup.py` and rebuild

```python "3-6","6-6","6-13","24-24"

from setuptools import find_packages, setup
import os
from glob import glob

package_name = 'mbot_pkg'

files = []
for full_filepath in glob('**/*.*', recursive=True):
    filepath = os.path.split(full_filepath)
    if filepath[0] != '':
        result = (os.path.join('share', package_name, filepath[0]), [full_filepath])
        files.append(result)


setup(
    name=package_name,
    version='0.0.0',
    packages=find_packages(exclude=['test']),
    data_files=[
        ('share/ament_index/resource_index/packages',
            ['resource/' + package_name]),
        ('share/' + package_name, ['package.xml']),
    ] + files,


...

```

**Build:**

{{% alert context="danger" %}}

## MAKE SURE YOUR RUN `colcon build` in `mbot_ws` folder!

```bash
colcon build --symlink-install
```

{{% /alert %}}

## Running

To run the code we just need to do:

```bash
ros2 launch mbot_pkg display.launch.py
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF4CC2CU%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDGgICikmng%2FbhGSm3vyqDqxDYgKUyRbe8tfjquRGAtsQIhAJVw%2BKxjKj3ciAJgEcYsB70r80hZ0NNI7pUMh5OrdzMeKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMZq0UFW4h%2FK%2FWjgQq3ANVfJss7FlN8Yb67zCUAbkkBPJFMyEhwEcmcRjEnzfUr2fddG1LQ01QJ2G0Ypfk6YF7Q3rTLusrk4fHvUQZII2auAs%2FVUzRCp9R4Aiq51tc1L91WNVB7m53u8UUqn0N4ONUAGMQT9zAA%2FswncrOOONMGizkRvubPCbjVofoLhDMwbuf43VwOSuZKNW5wq4wnk%2Fj4%2BO%2BOyV%2B2Zj1xNFl4alUHhXrtyRElMHGgyy%2FA4AitLrJDZ%2Bv2fiF5jzKLfLQ0YlewppiX0kPBVHLRBln7%2BoHPhpuEjF%2BgAmlK81rg%2FrKAsask7P91ohh8AtT0dSh3lLW4Ma63T38TaNJj9cQwTFbKSX3%2FU5Wv3kKoZMXmUTq8psuI1iNR1NQsJmLMPyiV1e9QJCthnoxmDDwa0nM%2BeFLXXLyNTYCFADokdOM5qykfu6c%2FkzAVbBz7m1WjtK8Ku59704Kl6KRauqm%2FOwgNpQ92wt8%2BSfI6gzyzq%2FOLgxj7Hy%2FXBlTXfK%2BkVJfhpJacZlU%2B%2BxKgI6JmcELxZxy9Ih6J4E%2FX40kCs87J7vbO33Y2OtY1terA6i%2BtE5Gdw2zlUhz8PwEabU511Pz7yypMxx5KxaMnTsjp%2BnhSQ3s3riMFp0z1tnEsRbpT8ExrTC%2Bi4PGBjqkATDt0qza5wO0Px9xkKGUmIvMjV%2B7NT9bXULCUCwQIiI13XdJK0FThwzdvAK2qv%2BvEk3qwoUdi5HfFMCpmGt59%2FS8u0HK%2BWphkede2zdO%2Bg2LVGEKhRi3LdRNoWPjVleYGluNv08p%2Bo66fGZ78miXMP8BM7S28WW0FSu3uayxLsVbEtPtW958fZih0amwl%2BID2gvXiRoZ%2FS0jKGEQ912abdwxopnZ&X-Amz-Signature=75a5d871f98738a162ab5cbdf10cdd197116cf0c37ac8c12231f4f2e2ce375f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF4CC2CU%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDGgICikmng%2FbhGSm3vyqDqxDYgKUyRbe8tfjquRGAtsQIhAJVw%2BKxjKj3ciAJgEcYsB70r80hZ0NNI7pUMh5OrdzMeKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMZq0UFW4h%2FK%2FWjgQq3ANVfJss7FlN8Yb67zCUAbkkBPJFMyEhwEcmcRjEnzfUr2fddG1LQ01QJ2G0Ypfk6YF7Q3rTLusrk4fHvUQZII2auAs%2FVUzRCp9R4Aiq51tc1L91WNVB7m53u8UUqn0N4ONUAGMQT9zAA%2FswncrOOONMGizkRvubPCbjVofoLhDMwbuf43VwOSuZKNW5wq4wnk%2Fj4%2BO%2BOyV%2B2Zj1xNFl4alUHhXrtyRElMHGgyy%2FA4AitLrJDZ%2Bv2fiF5jzKLfLQ0YlewppiX0kPBVHLRBln7%2BoHPhpuEjF%2BgAmlK81rg%2FrKAsask7P91ohh8AtT0dSh3lLW4Ma63T38TaNJj9cQwTFbKSX3%2FU5Wv3kKoZMXmUTq8psuI1iNR1NQsJmLMPyiV1e9QJCthnoxmDDwa0nM%2BeFLXXLyNTYCFADokdOM5qykfu6c%2FkzAVbBz7m1WjtK8Ku59704Kl6KRauqm%2FOwgNpQ92wt8%2BSfI6gzyzq%2FOLgxj7Hy%2FXBlTXfK%2BkVJfhpJacZlU%2B%2BxKgI6JmcELxZxy9Ih6J4E%2FX40kCs87J7vbO33Y2OtY1terA6i%2BtE5Gdw2zlUhz8PwEabU511Pz7yypMxx5KxaMnTsjp%2BnhSQ3s3riMFp0z1tnEsRbpT8ExrTC%2Bi4PGBjqkATDt0qza5wO0Px9xkKGUmIvMjV%2B7NT9bXULCUCwQIiI13XdJK0FThwzdvAK2qv%2BvEk3qwoUdi5HfFMCpmGt59%2FS8u0HK%2BWphkede2zdO%2Bg2LVGEKhRi3LdRNoWPjVleYGluNv08p%2Bo66fGZ78miXMP8BM7S28WW0FSu3uayxLsVbEtPtW958fZih0amwl%2BID2gvXiRoZ%2FS0jKGEQ912abdwxopnZ&X-Amz-Signature=6872fad84500e49d3b8b2c8bee0e543b261fb090208404e66ed84443b60bc627&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF4CC2CU%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDGgICikmng%2FbhGSm3vyqDqxDYgKUyRbe8tfjquRGAtsQIhAJVw%2BKxjKj3ciAJgEcYsB70r80hZ0NNI7pUMh5OrdzMeKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMZq0UFW4h%2FK%2FWjgQq3ANVfJss7FlN8Yb67zCUAbkkBPJFMyEhwEcmcRjEnzfUr2fddG1LQ01QJ2G0Ypfk6YF7Q3rTLusrk4fHvUQZII2auAs%2FVUzRCp9R4Aiq51tc1L91WNVB7m53u8UUqn0N4ONUAGMQT9zAA%2FswncrOOONMGizkRvubPCbjVofoLhDMwbuf43VwOSuZKNW5wq4wnk%2Fj4%2BO%2BOyV%2B2Zj1xNFl4alUHhXrtyRElMHGgyy%2FA4AitLrJDZ%2Bv2fiF5jzKLfLQ0YlewppiX0kPBVHLRBln7%2BoHPhpuEjF%2BgAmlK81rg%2FrKAsask7P91ohh8AtT0dSh3lLW4Ma63T38TaNJj9cQwTFbKSX3%2FU5Wv3kKoZMXmUTq8psuI1iNR1NQsJmLMPyiV1e9QJCthnoxmDDwa0nM%2BeFLXXLyNTYCFADokdOM5qykfu6c%2FkzAVbBz7m1WjtK8Ku59704Kl6KRauqm%2FOwgNpQ92wt8%2BSfI6gzyzq%2FOLgxj7Hy%2FXBlTXfK%2BkVJfhpJacZlU%2B%2BxKgI6JmcELxZxy9Ih6J4E%2FX40kCs87J7vbO33Y2OtY1terA6i%2BtE5Gdw2zlUhz8PwEabU511Pz7yypMxx5KxaMnTsjp%2BnhSQ3s3riMFp0z1tnEsRbpT8ExrTC%2Bi4PGBjqkATDt0qza5wO0Px9xkKGUmIvMjV%2B7NT9bXULCUCwQIiI13XdJK0FThwzdvAK2qv%2BvEk3qwoUdi5HfFMCpmGt59%2FS8u0HK%2BWphkede2zdO%2Bg2LVGEKhRi3LdRNoWPjVleYGluNv08p%2Bo66fGZ78miXMP8BM7S28WW0FSu3uayxLsVbEtPtW958fZih0amwl%2BID2gvXiRoZ%2FS0jKGEQ912abdwxopnZ&X-Amz-Signature=cc808e16910813d679e3df87715ced8a49340a010a45695993630e47ac09c604&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


