---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-24T23:33:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-24T23:33:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PE5RQS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCxxRkiX7Vl7VVlzIgBckElsnKpF%2Fmno9pSOZ6PUdjDAQIhAIXikhxGlkzXkpnUzT51%2B%2F5esTooZt7JaiDz908sOFvUKv8DCE4QABoMNjM3NDIzMTgzODA1IgwAff9PR2%2Bb9buMD7gq3AMQ0EOobphb43EhyHym60w3iS9lQZGF8q8L9uuelUgxy9gR42iqUrSNwnobrEYKVgKFv9VWXmRriGECzRFwN%2BXdoYTItKQ1FMUEXcBCv1%2FksnBiukfBpA5dPgopfMeJ%2BuntS7RlrrP3%2F0W8HGRo7xLeFPABzfGcImAlTMCIcsgymm0B5st8NBnORQf4mfPwUwJsfvr3T1xTeyVjLFLMI%2ByjA3%2F%2Fzw4s7sQFQYfIaCd7gL6ixUkA3kU%2B4Z8zs%2FWSwEsuYN5cNdhJljUFpVXGcOGk0UN38SRRfZkG3HueeyIgMADJWnZi9Hw%2BGgaMwuRTxKr854kBU3mTHYKDGoBmCrxQWdl0ouwRFDgaeF01yV3m4Hi35asgP%2Fj0PAWSFic%2BIp3HqMj5CRJNQtjGRSznJe3QB4TzmmM21QP%2Flw3QaFtX9ImPAdjFOzFaKWXPg0o2JJTJYr%2FaTKaJC4mBHd4CetqMWoGffwsymNNyUWBVZg3eCTpX8NjUJ0%2FZBNJoZ7O3QlRbLsMByBfRL1hG38CNeEWSFfwAwDt9Eduh%2BDkcOUBFMn8AprPQ8WCFHMioRYYL8DwZLVc%2BWE3lOVV5U9sdjAj59%2BvfRXaZkMt1hsb4wa4NfXpOOElrecXAn9TTSzCI0Y%2FEBjqkAShrod4l6QJVlYo2Stt%2BVHcijIJ2jQ31%2ByCcRY6Au1JYIcRN5gJy2MHlRbCzlRdkpurGC%2B%2F8nmYuDe61BeIkcRxjPJncdLejo2KPirVvOg2zvAPllYnTgFQDX0UBljpXuNmqDTpNh1T04PWrUbPJgGmn4HiwcVTj4fZEzoD7ro01X6BooFtGfAwDRLVPnewwurZa7%2B%2BRidz4R4LmAOHvdp6u%2FZ3z&X-Amz-Signature=7dcda6b489714b3ee9125f7b0a0cec73adc501a2d97388cc15a5a5b85e86dc7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PE5RQS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCxxRkiX7Vl7VVlzIgBckElsnKpF%2Fmno9pSOZ6PUdjDAQIhAIXikhxGlkzXkpnUzT51%2B%2F5esTooZt7JaiDz908sOFvUKv8DCE4QABoMNjM3NDIzMTgzODA1IgwAff9PR2%2Bb9buMD7gq3AMQ0EOobphb43EhyHym60w3iS9lQZGF8q8L9uuelUgxy9gR42iqUrSNwnobrEYKVgKFv9VWXmRriGECzRFwN%2BXdoYTItKQ1FMUEXcBCv1%2FksnBiukfBpA5dPgopfMeJ%2BuntS7RlrrP3%2F0W8HGRo7xLeFPABzfGcImAlTMCIcsgymm0B5st8NBnORQf4mfPwUwJsfvr3T1xTeyVjLFLMI%2ByjA3%2F%2Fzw4s7sQFQYfIaCd7gL6ixUkA3kU%2B4Z8zs%2FWSwEsuYN5cNdhJljUFpVXGcOGk0UN38SRRfZkG3HueeyIgMADJWnZi9Hw%2BGgaMwuRTxKr854kBU3mTHYKDGoBmCrxQWdl0ouwRFDgaeF01yV3m4Hi35asgP%2Fj0PAWSFic%2BIp3HqMj5CRJNQtjGRSznJe3QB4TzmmM21QP%2Flw3QaFtX9ImPAdjFOzFaKWXPg0o2JJTJYr%2FaTKaJC4mBHd4CetqMWoGffwsymNNyUWBVZg3eCTpX8NjUJ0%2FZBNJoZ7O3QlRbLsMByBfRL1hG38CNeEWSFfwAwDt9Eduh%2BDkcOUBFMn8AprPQ8WCFHMioRYYL8DwZLVc%2BWE3lOVV5U9sdjAj59%2BvfRXaZkMt1hsb4wa4NfXpOOElrecXAn9TTSzCI0Y%2FEBjqkAShrod4l6QJVlYo2Stt%2BVHcijIJ2jQ31%2ByCcRY6Au1JYIcRN5gJy2MHlRbCzlRdkpurGC%2B%2F8nmYuDe61BeIkcRxjPJncdLejo2KPirVvOg2zvAPllYnTgFQDX0UBljpXuNmqDTpNh1T04PWrUbPJgGmn4HiwcVTj4fZEzoD7ro01X6BooFtGfAwDRLVPnewwurZa7%2B%2BRidz4R4LmAOHvdp6u%2FZ3z&X-Amz-Signature=46225bb1090f02c8ca3563ac2d5629cbe51103cf8ada7e8b21037df92d1f2703&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PE5RQS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCxxRkiX7Vl7VVlzIgBckElsnKpF%2Fmno9pSOZ6PUdjDAQIhAIXikhxGlkzXkpnUzT51%2B%2F5esTooZt7JaiDz908sOFvUKv8DCE4QABoMNjM3NDIzMTgzODA1IgwAff9PR2%2Bb9buMD7gq3AMQ0EOobphb43EhyHym60w3iS9lQZGF8q8L9uuelUgxy9gR42iqUrSNwnobrEYKVgKFv9VWXmRriGECzRFwN%2BXdoYTItKQ1FMUEXcBCv1%2FksnBiukfBpA5dPgopfMeJ%2BuntS7RlrrP3%2F0W8HGRo7xLeFPABzfGcImAlTMCIcsgymm0B5st8NBnORQf4mfPwUwJsfvr3T1xTeyVjLFLMI%2ByjA3%2F%2Fzw4s7sQFQYfIaCd7gL6ixUkA3kU%2B4Z8zs%2FWSwEsuYN5cNdhJljUFpVXGcOGk0UN38SRRfZkG3HueeyIgMADJWnZi9Hw%2BGgaMwuRTxKr854kBU3mTHYKDGoBmCrxQWdl0ouwRFDgaeF01yV3m4Hi35asgP%2Fj0PAWSFic%2BIp3HqMj5CRJNQtjGRSznJe3QB4TzmmM21QP%2Flw3QaFtX9ImPAdjFOzFaKWXPg0o2JJTJYr%2FaTKaJC4mBHd4CetqMWoGffwsymNNyUWBVZg3eCTpX8NjUJ0%2FZBNJoZ7O3QlRbLsMByBfRL1hG38CNeEWSFfwAwDt9Eduh%2BDkcOUBFMn8AprPQ8WCFHMioRYYL8DwZLVc%2BWE3lOVV5U9sdjAj59%2BvfRXaZkMt1hsb4wa4NfXpOOElrecXAn9TTSzCI0Y%2FEBjqkAShrod4l6QJVlYo2Stt%2BVHcijIJ2jQ31%2ByCcRY6Au1JYIcRN5gJy2MHlRbCzlRdkpurGC%2B%2F8nmYuDe61BeIkcRxjPJncdLejo2KPirVvOg2zvAPllYnTgFQDX0UBljpXuNmqDTpNh1T04PWrUbPJgGmn4HiwcVTj4fZEzoD7ro01X6BooFtGfAwDRLVPnewwurZa7%2B%2BRidz4R4LmAOHvdp6u%2FZ3z&X-Amz-Signature=e6e5154c663184ce371489a9f546fd02bc14cfde6648bf6e8f0e5b0c208a9ba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PE5RQS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCxxRkiX7Vl7VVlzIgBckElsnKpF%2Fmno9pSOZ6PUdjDAQIhAIXikhxGlkzXkpnUzT51%2B%2F5esTooZt7JaiDz908sOFvUKv8DCE4QABoMNjM3NDIzMTgzODA1IgwAff9PR2%2Bb9buMD7gq3AMQ0EOobphb43EhyHym60w3iS9lQZGF8q8L9uuelUgxy9gR42iqUrSNwnobrEYKVgKFv9VWXmRriGECzRFwN%2BXdoYTItKQ1FMUEXcBCv1%2FksnBiukfBpA5dPgopfMeJ%2BuntS7RlrrP3%2F0W8HGRo7xLeFPABzfGcImAlTMCIcsgymm0B5st8NBnORQf4mfPwUwJsfvr3T1xTeyVjLFLMI%2ByjA3%2F%2Fzw4s7sQFQYfIaCd7gL6ixUkA3kU%2B4Z8zs%2FWSwEsuYN5cNdhJljUFpVXGcOGk0UN38SRRfZkG3HueeyIgMADJWnZi9Hw%2BGgaMwuRTxKr854kBU3mTHYKDGoBmCrxQWdl0ouwRFDgaeF01yV3m4Hi35asgP%2Fj0PAWSFic%2BIp3HqMj5CRJNQtjGRSznJe3QB4TzmmM21QP%2Flw3QaFtX9ImPAdjFOzFaKWXPg0o2JJTJYr%2FaTKaJC4mBHd4CetqMWoGffwsymNNyUWBVZg3eCTpX8NjUJ0%2FZBNJoZ7O3QlRbLsMByBfRL1hG38CNeEWSFfwAwDt9Eduh%2BDkcOUBFMn8AprPQ8WCFHMioRYYL8DwZLVc%2BWE3lOVV5U9sdjAj59%2BvfRXaZkMt1hsb4wa4NfXpOOElrecXAn9TTSzCI0Y%2FEBjqkAShrod4l6QJVlYo2Stt%2BVHcijIJ2jQ31%2ByCcRY6Au1JYIcRN5gJy2MHlRbCzlRdkpurGC%2B%2F8nmYuDe61BeIkcRxjPJncdLejo2KPirVvOg2zvAPllYnTgFQDX0UBljpXuNmqDTpNh1T04PWrUbPJgGmn4HiwcVTj4fZEzoD7ro01X6BooFtGfAwDRLVPnewwurZa7%2B%2BRidz4R4LmAOHvdp6u%2FZ3z&X-Amz-Signature=d1b125880d58a9dc7c6c19b22d73918b2c57d0a6a73efbacdd223f39dc93ded5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PE5RQS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCxxRkiX7Vl7VVlzIgBckElsnKpF%2Fmno9pSOZ6PUdjDAQIhAIXikhxGlkzXkpnUzT51%2B%2F5esTooZt7JaiDz908sOFvUKv8DCE4QABoMNjM3NDIzMTgzODA1IgwAff9PR2%2Bb9buMD7gq3AMQ0EOobphb43EhyHym60w3iS9lQZGF8q8L9uuelUgxy9gR42iqUrSNwnobrEYKVgKFv9VWXmRriGECzRFwN%2BXdoYTItKQ1FMUEXcBCv1%2FksnBiukfBpA5dPgopfMeJ%2BuntS7RlrrP3%2F0W8HGRo7xLeFPABzfGcImAlTMCIcsgymm0B5st8NBnORQf4mfPwUwJsfvr3T1xTeyVjLFLMI%2ByjA3%2F%2Fzw4s7sQFQYfIaCd7gL6ixUkA3kU%2B4Z8zs%2FWSwEsuYN5cNdhJljUFpVXGcOGk0UN38SRRfZkG3HueeyIgMADJWnZi9Hw%2BGgaMwuRTxKr854kBU3mTHYKDGoBmCrxQWdl0ouwRFDgaeF01yV3m4Hi35asgP%2Fj0PAWSFic%2BIp3HqMj5CRJNQtjGRSznJe3QB4TzmmM21QP%2Flw3QaFtX9ImPAdjFOzFaKWXPg0o2JJTJYr%2FaTKaJC4mBHd4CetqMWoGffwsymNNyUWBVZg3eCTpX8NjUJ0%2FZBNJoZ7O3QlRbLsMByBfRL1hG38CNeEWSFfwAwDt9Eduh%2BDkcOUBFMn8AprPQ8WCFHMioRYYL8DwZLVc%2BWE3lOVV5U9sdjAj59%2BvfRXaZkMt1hsb4wa4NfXpOOElrecXAn9TTSzCI0Y%2FEBjqkAShrod4l6QJVlYo2Stt%2BVHcijIJ2jQ31%2ByCcRY6Au1JYIcRN5gJy2MHlRbCzlRdkpurGC%2B%2F8nmYuDe61BeIkcRxjPJncdLejo2KPirVvOg2zvAPllYnTgFQDX0UBljpXuNmqDTpNh1T04PWrUbPJgGmn4HiwcVTj4fZEzoD7ro01X6BooFtGfAwDRLVPnewwurZa7%2B%2BRidz4R4LmAOHvdp6u%2FZ3z&X-Amz-Signature=3e84b48d269ae5fd927f3e9ef6912ff0b9229f9855c5e6735b1cc98583e22864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PE5RQS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCxxRkiX7Vl7VVlzIgBckElsnKpF%2Fmno9pSOZ6PUdjDAQIhAIXikhxGlkzXkpnUzT51%2B%2F5esTooZt7JaiDz908sOFvUKv8DCE4QABoMNjM3NDIzMTgzODA1IgwAff9PR2%2Bb9buMD7gq3AMQ0EOobphb43EhyHym60w3iS9lQZGF8q8L9uuelUgxy9gR42iqUrSNwnobrEYKVgKFv9VWXmRriGECzRFwN%2BXdoYTItKQ1FMUEXcBCv1%2FksnBiukfBpA5dPgopfMeJ%2BuntS7RlrrP3%2F0W8HGRo7xLeFPABzfGcImAlTMCIcsgymm0B5st8NBnORQf4mfPwUwJsfvr3T1xTeyVjLFLMI%2ByjA3%2F%2Fzw4s7sQFQYfIaCd7gL6ixUkA3kU%2B4Z8zs%2FWSwEsuYN5cNdhJljUFpVXGcOGk0UN38SRRfZkG3HueeyIgMADJWnZi9Hw%2BGgaMwuRTxKr854kBU3mTHYKDGoBmCrxQWdl0ouwRFDgaeF01yV3m4Hi35asgP%2Fj0PAWSFic%2BIp3HqMj5CRJNQtjGRSznJe3QB4TzmmM21QP%2Flw3QaFtX9ImPAdjFOzFaKWXPg0o2JJTJYr%2FaTKaJC4mBHd4CetqMWoGffwsymNNyUWBVZg3eCTpX8NjUJ0%2FZBNJoZ7O3QlRbLsMByBfRL1hG38CNeEWSFfwAwDt9Eduh%2BDkcOUBFMn8AprPQ8WCFHMioRYYL8DwZLVc%2BWE3lOVV5U9sdjAj59%2BvfRXaZkMt1hsb4wa4NfXpOOElrecXAn9TTSzCI0Y%2FEBjqkAShrod4l6QJVlYo2Stt%2BVHcijIJ2jQ31%2ByCcRY6Au1JYIcRN5gJy2MHlRbCzlRdkpurGC%2B%2F8nmYuDe61BeIkcRxjPJncdLejo2KPirVvOg2zvAPllYnTgFQDX0UBljpXuNmqDTpNh1T04PWrUbPJgGmn4HiwcVTj4fZEzoD7ro01X6BooFtGfAwDRLVPnewwurZa7%2B%2BRidz4R4LmAOHvdp6u%2FZ3z&X-Amz-Signature=36e36761989fc22e47aec124c9781f154d5a9489a9f980a3cf90dc7dd094be55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PE5RQS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCxxRkiX7Vl7VVlzIgBckElsnKpF%2Fmno9pSOZ6PUdjDAQIhAIXikhxGlkzXkpnUzT51%2B%2F5esTooZt7JaiDz908sOFvUKv8DCE4QABoMNjM3NDIzMTgzODA1IgwAff9PR2%2Bb9buMD7gq3AMQ0EOobphb43EhyHym60w3iS9lQZGF8q8L9uuelUgxy9gR42iqUrSNwnobrEYKVgKFv9VWXmRriGECzRFwN%2BXdoYTItKQ1FMUEXcBCv1%2FksnBiukfBpA5dPgopfMeJ%2BuntS7RlrrP3%2F0W8HGRo7xLeFPABzfGcImAlTMCIcsgymm0B5st8NBnORQf4mfPwUwJsfvr3T1xTeyVjLFLMI%2ByjA3%2F%2Fzw4s7sQFQYfIaCd7gL6ixUkA3kU%2B4Z8zs%2FWSwEsuYN5cNdhJljUFpVXGcOGk0UN38SRRfZkG3HueeyIgMADJWnZi9Hw%2BGgaMwuRTxKr854kBU3mTHYKDGoBmCrxQWdl0ouwRFDgaeF01yV3m4Hi35asgP%2Fj0PAWSFic%2BIp3HqMj5CRJNQtjGRSznJe3QB4TzmmM21QP%2Flw3QaFtX9ImPAdjFOzFaKWXPg0o2JJTJYr%2FaTKaJC4mBHd4CetqMWoGffwsymNNyUWBVZg3eCTpX8NjUJ0%2FZBNJoZ7O3QlRbLsMByBfRL1hG38CNeEWSFfwAwDt9Eduh%2BDkcOUBFMn8AprPQ8WCFHMioRYYL8DwZLVc%2BWE3lOVV5U9sdjAj59%2BvfRXaZkMt1hsb4wa4NfXpOOElrecXAn9TTSzCI0Y%2FEBjqkAShrod4l6QJVlYo2Stt%2BVHcijIJ2jQ31%2ByCcRY6Au1JYIcRN5gJy2MHlRbCzlRdkpurGC%2B%2F8nmYuDe61BeIkcRxjPJncdLejo2KPirVvOg2zvAPllYnTgFQDX0UBljpXuNmqDTpNh1T04PWrUbPJgGmn4HiwcVTj4fZEzoD7ro01X6BooFtGfAwDRLVPnewwurZa7%2B%2BRidz4R4LmAOHvdp6u%2FZ3z&X-Amz-Signature=7a85fcef3962c09d3c1e43282f51d63a9b7c039ed628123f33bd4696f10d4ab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PE5RQS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCxxRkiX7Vl7VVlzIgBckElsnKpF%2Fmno9pSOZ6PUdjDAQIhAIXikhxGlkzXkpnUzT51%2B%2F5esTooZt7JaiDz908sOFvUKv8DCE4QABoMNjM3NDIzMTgzODA1IgwAff9PR2%2Bb9buMD7gq3AMQ0EOobphb43EhyHym60w3iS9lQZGF8q8L9uuelUgxy9gR42iqUrSNwnobrEYKVgKFv9VWXmRriGECzRFwN%2BXdoYTItKQ1FMUEXcBCv1%2FksnBiukfBpA5dPgopfMeJ%2BuntS7RlrrP3%2F0W8HGRo7xLeFPABzfGcImAlTMCIcsgymm0B5st8NBnORQf4mfPwUwJsfvr3T1xTeyVjLFLMI%2ByjA3%2F%2Fzw4s7sQFQYfIaCd7gL6ixUkA3kU%2B4Z8zs%2FWSwEsuYN5cNdhJljUFpVXGcOGk0UN38SRRfZkG3HueeyIgMADJWnZi9Hw%2BGgaMwuRTxKr854kBU3mTHYKDGoBmCrxQWdl0ouwRFDgaeF01yV3m4Hi35asgP%2Fj0PAWSFic%2BIp3HqMj5CRJNQtjGRSznJe3QB4TzmmM21QP%2Flw3QaFtX9ImPAdjFOzFaKWXPg0o2JJTJYr%2FaTKaJC4mBHd4CetqMWoGffwsymNNyUWBVZg3eCTpX8NjUJ0%2FZBNJoZ7O3QlRbLsMByBfRL1hG38CNeEWSFfwAwDt9Eduh%2BDkcOUBFMn8AprPQ8WCFHMioRYYL8DwZLVc%2BWE3lOVV5U9sdjAj59%2BvfRXaZkMt1hsb4wa4NfXpOOElrecXAn9TTSzCI0Y%2FEBjqkAShrod4l6QJVlYo2Stt%2BVHcijIJ2jQ31%2ByCcRY6Au1JYIcRN5gJy2MHlRbCzlRdkpurGC%2B%2F8nmYuDe61BeIkcRxjPJncdLejo2KPirVvOg2zvAPllYnTgFQDX0UBljpXuNmqDTpNh1T04PWrUbPJgGmn4HiwcVTj4fZEzoD7ro01X6BooFtGfAwDRLVPnewwurZa7%2B%2BRidz4R4LmAOHvdp6u%2FZ3z&X-Amz-Signature=24152f3d1435cb611254c16af251946328d72b20d3e0f7d7ec460067ff3e6044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PE5RQS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCxxRkiX7Vl7VVlzIgBckElsnKpF%2Fmno9pSOZ6PUdjDAQIhAIXikhxGlkzXkpnUzT51%2B%2F5esTooZt7JaiDz908sOFvUKv8DCE4QABoMNjM3NDIzMTgzODA1IgwAff9PR2%2Bb9buMD7gq3AMQ0EOobphb43EhyHym60w3iS9lQZGF8q8L9uuelUgxy9gR42iqUrSNwnobrEYKVgKFv9VWXmRriGECzRFwN%2BXdoYTItKQ1FMUEXcBCv1%2FksnBiukfBpA5dPgopfMeJ%2BuntS7RlrrP3%2F0W8HGRo7xLeFPABzfGcImAlTMCIcsgymm0B5st8NBnORQf4mfPwUwJsfvr3T1xTeyVjLFLMI%2ByjA3%2F%2Fzw4s7sQFQYfIaCd7gL6ixUkA3kU%2B4Z8zs%2FWSwEsuYN5cNdhJljUFpVXGcOGk0UN38SRRfZkG3HueeyIgMADJWnZi9Hw%2BGgaMwuRTxKr854kBU3mTHYKDGoBmCrxQWdl0ouwRFDgaeF01yV3m4Hi35asgP%2Fj0PAWSFic%2BIp3HqMj5CRJNQtjGRSznJe3QB4TzmmM21QP%2Flw3QaFtX9ImPAdjFOzFaKWXPg0o2JJTJYr%2FaTKaJC4mBHd4CetqMWoGffwsymNNyUWBVZg3eCTpX8NjUJ0%2FZBNJoZ7O3QlRbLsMByBfRL1hG38CNeEWSFfwAwDt9Eduh%2BDkcOUBFMn8AprPQ8WCFHMioRYYL8DwZLVc%2BWE3lOVV5U9sdjAj59%2BvfRXaZkMt1hsb4wa4NfXpOOElrecXAn9TTSzCI0Y%2FEBjqkAShrod4l6QJVlYo2Stt%2BVHcijIJ2jQ31%2ByCcRY6Au1JYIcRN5gJy2MHlRbCzlRdkpurGC%2B%2F8nmYuDe61BeIkcRxjPJncdLejo2KPirVvOg2zvAPllYnTgFQDX0UBljpXuNmqDTpNh1T04PWrUbPJgGmn4HiwcVTj4fZEzoD7ro01X6BooFtGfAwDRLVPnewwurZa7%2B%2BRidz4R4LmAOHvdp6u%2FZ3z&X-Amz-Signature=655e26b23f1d722156a17c100dc3eb99a9198eae3f86e4357136928790500b7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PE5RQS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCxxRkiX7Vl7VVlzIgBckElsnKpF%2Fmno9pSOZ6PUdjDAQIhAIXikhxGlkzXkpnUzT51%2B%2F5esTooZt7JaiDz908sOFvUKv8DCE4QABoMNjM3NDIzMTgzODA1IgwAff9PR2%2Bb9buMD7gq3AMQ0EOobphb43EhyHym60w3iS9lQZGF8q8L9uuelUgxy9gR42iqUrSNwnobrEYKVgKFv9VWXmRriGECzRFwN%2BXdoYTItKQ1FMUEXcBCv1%2FksnBiukfBpA5dPgopfMeJ%2BuntS7RlrrP3%2F0W8HGRo7xLeFPABzfGcImAlTMCIcsgymm0B5st8NBnORQf4mfPwUwJsfvr3T1xTeyVjLFLMI%2ByjA3%2F%2Fzw4s7sQFQYfIaCd7gL6ixUkA3kU%2B4Z8zs%2FWSwEsuYN5cNdhJljUFpVXGcOGk0UN38SRRfZkG3HueeyIgMADJWnZi9Hw%2BGgaMwuRTxKr854kBU3mTHYKDGoBmCrxQWdl0ouwRFDgaeF01yV3m4Hi35asgP%2Fj0PAWSFic%2BIp3HqMj5CRJNQtjGRSznJe3QB4TzmmM21QP%2Flw3QaFtX9ImPAdjFOzFaKWXPg0o2JJTJYr%2FaTKaJC4mBHd4CetqMWoGffwsymNNyUWBVZg3eCTpX8NjUJ0%2FZBNJoZ7O3QlRbLsMByBfRL1hG38CNeEWSFfwAwDt9Eduh%2BDkcOUBFMn8AprPQ8WCFHMioRYYL8DwZLVc%2BWE3lOVV5U9sdjAj59%2BvfRXaZkMt1hsb4wa4NfXpOOElrecXAn9TTSzCI0Y%2FEBjqkAShrod4l6QJVlYo2Stt%2BVHcijIJ2jQ31%2ByCcRY6Au1JYIcRN5gJy2MHlRbCzlRdkpurGC%2B%2F8nmYuDe61BeIkcRxjPJncdLejo2KPirVvOg2zvAPllYnTgFQDX0UBljpXuNmqDTpNh1T04PWrUbPJgGmn4HiwcVTj4fZEzoD7ro01X6BooFtGfAwDRLVPnewwurZa7%2B%2BRidz4R4LmAOHvdp6u%2FZ3z&X-Amz-Signature=202d34eafebb7b93a4303f06eee91594ee8f22b6d98ae84af92510eab76f48de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

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
      
      <collision>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
          <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
      </collision>
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

# Nodes

Now that you have the `urdf` lets plug it in ROS

Here are some nodes to do so

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PE5RQS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCxxRkiX7Vl7VVlzIgBckElsnKpF%2Fmno9pSOZ6PUdjDAQIhAIXikhxGlkzXkpnUzT51%2B%2F5esTooZt7JaiDz908sOFvUKv8DCE4QABoMNjM3NDIzMTgzODA1IgwAff9PR2%2Bb9buMD7gq3AMQ0EOobphb43EhyHym60w3iS9lQZGF8q8L9uuelUgxy9gR42iqUrSNwnobrEYKVgKFv9VWXmRriGECzRFwN%2BXdoYTItKQ1FMUEXcBCv1%2FksnBiukfBpA5dPgopfMeJ%2BuntS7RlrrP3%2F0W8HGRo7xLeFPABzfGcImAlTMCIcsgymm0B5st8NBnORQf4mfPwUwJsfvr3T1xTeyVjLFLMI%2ByjA3%2F%2Fzw4s7sQFQYfIaCd7gL6ixUkA3kU%2B4Z8zs%2FWSwEsuYN5cNdhJljUFpVXGcOGk0UN38SRRfZkG3HueeyIgMADJWnZi9Hw%2BGgaMwuRTxKr854kBU3mTHYKDGoBmCrxQWdl0ouwRFDgaeF01yV3m4Hi35asgP%2Fj0PAWSFic%2BIp3HqMj5CRJNQtjGRSznJe3QB4TzmmM21QP%2Flw3QaFtX9ImPAdjFOzFaKWXPg0o2JJTJYr%2FaTKaJC4mBHd4CetqMWoGffwsymNNyUWBVZg3eCTpX8NjUJ0%2FZBNJoZ7O3QlRbLsMByBfRL1hG38CNeEWSFfwAwDt9Eduh%2BDkcOUBFMn8AprPQ8WCFHMioRYYL8DwZLVc%2BWE3lOVV5U9sdjAj59%2BvfRXaZkMt1hsb4wa4NfXpOOElrecXAn9TTSzCI0Y%2FEBjqkAShrod4l6QJVlYo2Stt%2BVHcijIJ2jQ31%2ByCcRY6Au1JYIcRN5gJy2MHlRbCzlRdkpurGC%2B%2F8nmYuDe61BeIkcRxjPJncdLejo2KPirVvOg2zvAPllYnTgFQDX0UBljpXuNmqDTpNh1T04PWrUbPJgGmn4HiwcVTj4fZEzoD7ro01X6BooFtGfAwDRLVPnewwurZa7%2B%2BRidz4R4LmAOHvdp6u%2FZ3z&X-Amz-Signature=e79982d194417f742b55bfe1c51d3d417575c96f73b91f9ee983976914f4b9aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**             | **Type** |
| -------------------- | -------- |
| `/tf`                |          |
| `/robot_description` |          |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**            | **Type** |
| ------------------- | -------- |
| `robot_description` | file     |
| `use_sim_time`      | bool     |

{{< /table >}}

#### description:

Node that takes in the `urdf` and puts it into ROS

Takes 2 major inputs:

- `urdf` file and publishes all transforms in the `/tf` topic
- `/joint_states` topic that takes in all the states of joints in the `urdf`

{{% /alert %}}

{{% alert icon=”👾” context="success" %}}

### **New Node** **`joint`**_**`_`**_**`state_publisher_gui`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PE5RQS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCxxRkiX7Vl7VVlzIgBckElsnKpF%2Fmno9pSOZ6PUdjDAQIhAIXikhxGlkzXkpnUzT51%2B%2F5esTooZt7JaiDz908sOFvUKv8DCE4QABoMNjM3NDIzMTgzODA1IgwAff9PR2%2Bb9buMD7gq3AMQ0EOobphb43EhyHym60w3iS9lQZGF8q8L9uuelUgxy9gR42iqUrSNwnobrEYKVgKFv9VWXmRriGECzRFwN%2BXdoYTItKQ1FMUEXcBCv1%2FksnBiukfBpA5dPgopfMeJ%2BuntS7RlrrP3%2F0W8HGRo7xLeFPABzfGcImAlTMCIcsgymm0B5st8NBnORQf4mfPwUwJsfvr3T1xTeyVjLFLMI%2ByjA3%2F%2Fzw4s7sQFQYfIaCd7gL6ixUkA3kU%2B4Z8zs%2FWSwEsuYN5cNdhJljUFpVXGcOGk0UN38SRRfZkG3HueeyIgMADJWnZi9Hw%2BGgaMwuRTxKr854kBU3mTHYKDGoBmCrxQWdl0ouwRFDgaeF01yV3m4Hi35asgP%2Fj0PAWSFic%2BIp3HqMj5CRJNQtjGRSznJe3QB4TzmmM21QP%2Flw3QaFtX9ImPAdjFOzFaKWXPg0o2JJTJYr%2FaTKaJC4mBHd4CetqMWoGffwsymNNyUWBVZg3eCTpX8NjUJ0%2FZBNJoZ7O3QlRbLsMByBfRL1hG38CNeEWSFfwAwDt9Eduh%2BDkcOUBFMn8AprPQ8WCFHMioRYYL8DwZLVc%2BWE3lOVV5U9sdjAj59%2BvfRXaZkMt1hsb4wa4NfXpOOElrecXAn9TTSzCI0Y%2FEBjqkAShrod4l6QJVlYo2Stt%2BVHcijIJ2jQ31%2ByCcRY6Au1JYIcRN5gJy2MHlRbCzlRdkpurGC%2B%2F8nmYuDe61BeIkcRxjPJncdLejo2KPirVvOg2zvAPllYnTgFQDX0UBljpXuNmqDTpNh1T04PWrUbPJgGmn4HiwcVTj4fZEzoD7ro01X6BooFtGfAwDRLVPnewwurZa7%2B%2BRidz4R4LmAOHvdp6u%2FZ3z&X-Amz-Signature=56daba8526fa2531794fc87b5ac5a0b37176e3341410e2514f32fb711b983504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**             | **Type** |
| -------------------- | -------- |
| `/robot_description` |          |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

{{< /table >}}

#### description:

lets you debug your `urdf` to see if all your joints work correctly.

Takes `/robot_description` from `robot_state_publisher` and outputs `/joint_states` with adjustable sliders

designed to be replaced by a physical robot or a simulated robot node

{{% /alert %}}

## Current Node diagram

With the two nodes we are going to make this diagram:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PE5RQS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCxxRkiX7Vl7VVlzIgBckElsnKpF%2Fmno9pSOZ6PUdjDAQIhAIXikhxGlkzXkpnUzT51%2B%2F5esTooZt7JaiDz908sOFvUKv8DCE4QABoMNjM3NDIzMTgzODA1IgwAff9PR2%2Bb9buMD7gq3AMQ0EOobphb43EhyHym60w3iS9lQZGF8q8L9uuelUgxy9gR42iqUrSNwnobrEYKVgKFv9VWXmRriGECzRFwN%2BXdoYTItKQ1FMUEXcBCv1%2FksnBiukfBpA5dPgopfMeJ%2BuntS7RlrrP3%2F0W8HGRo7xLeFPABzfGcImAlTMCIcsgymm0B5st8NBnORQf4mfPwUwJsfvr3T1xTeyVjLFLMI%2ByjA3%2F%2Fzw4s7sQFQYfIaCd7gL6ixUkA3kU%2B4Z8zs%2FWSwEsuYN5cNdhJljUFpVXGcOGk0UN38SRRfZkG3HueeyIgMADJWnZi9Hw%2BGgaMwuRTxKr854kBU3mTHYKDGoBmCrxQWdl0ouwRFDgaeF01yV3m4Hi35asgP%2Fj0PAWSFic%2BIp3HqMj5CRJNQtjGRSznJe3QB4TzmmM21QP%2Flw3QaFtX9ImPAdjFOzFaKWXPg0o2JJTJYr%2FaTKaJC4mBHd4CetqMWoGffwsymNNyUWBVZg3eCTpX8NjUJ0%2FZBNJoZ7O3QlRbLsMByBfRL1hG38CNeEWSFfwAwDt9Eduh%2BDkcOUBFMn8AprPQ8WCFHMioRYYL8DwZLVc%2BWE3lOVV5U9sdjAj59%2BvfRXaZkMt1hsb4wa4NfXpOOElrecXAn9TTSzCI0Y%2FEBjqkAShrod4l6QJVlYo2Stt%2BVHcijIJ2jQ31%2ByCcRY6Au1JYIcRN5gJy2MHlRbCzlRdkpurGC%2B%2F8nmYuDe61BeIkcRxjPJncdLejo2KPirVvOg2zvAPllYnTgFQDX0UBljpXuNmqDTpNh1T04PWrUbPJgGmn4HiwcVTj4fZEzoD7ro01X6BooFtGfAwDRLVPnewwurZa7%2B%2BRidz4R4LmAOHvdp6u%2FZ3z&X-Amz-Signature=12f074d2d2192d01eec44065401275f6b5306b2542c75d0c572e844398791024&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PE5RQS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCxxRkiX7Vl7VVlzIgBckElsnKpF%2Fmno9pSOZ6PUdjDAQIhAIXikhxGlkzXkpnUzT51%2B%2F5esTooZt7JaiDz908sOFvUKv8DCE4QABoMNjM3NDIzMTgzODA1IgwAff9PR2%2Bb9buMD7gq3AMQ0EOobphb43EhyHym60w3iS9lQZGF8q8L9uuelUgxy9gR42iqUrSNwnobrEYKVgKFv9VWXmRriGECzRFwN%2BXdoYTItKQ1FMUEXcBCv1%2FksnBiukfBpA5dPgopfMeJ%2BuntS7RlrrP3%2F0W8HGRo7xLeFPABzfGcImAlTMCIcsgymm0B5st8NBnORQf4mfPwUwJsfvr3T1xTeyVjLFLMI%2ByjA3%2F%2Fzw4s7sQFQYfIaCd7gL6ixUkA3kU%2B4Z8zs%2FWSwEsuYN5cNdhJljUFpVXGcOGk0UN38SRRfZkG3HueeyIgMADJWnZi9Hw%2BGgaMwuRTxKr854kBU3mTHYKDGoBmCrxQWdl0ouwRFDgaeF01yV3m4Hi35asgP%2Fj0PAWSFic%2BIp3HqMj5CRJNQtjGRSznJe3QB4TzmmM21QP%2Flw3QaFtX9ImPAdjFOzFaKWXPg0o2JJTJYr%2FaTKaJC4mBHd4CetqMWoGffwsymNNyUWBVZg3eCTpX8NjUJ0%2FZBNJoZ7O3QlRbLsMByBfRL1hG38CNeEWSFfwAwDt9Eduh%2BDkcOUBFMn8AprPQ8WCFHMioRYYL8DwZLVc%2BWE3lOVV5U9sdjAj59%2BvfRXaZkMt1hsb4wa4NfXpOOElrecXAn9TTSzCI0Y%2FEBjqkAShrod4l6QJVlYo2Stt%2BVHcijIJ2jQ31%2ByCcRY6Au1JYIcRN5gJy2MHlRbCzlRdkpurGC%2B%2F8nmYuDe61BeIkcRxjPJncdLejo2KPirVvOg2zvAPllYnTgFQDX0UBljpXuNmqDTpNh1T04PWrUbPJgGmn4HiwcVTj4fZEzoD7ro01X6BooFtGfAwDRLVPnewwurZa7%2B%2BRidz4R4LmAOHvdp6u%2FZ3z&X-Amz-Signature=385450b29241426c2d0332219b4772d363fe2dab56bdd0e8572e634b5af987fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPBZXQSO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIGbL0Ga8YVj4ignLDA83rsrsVvEnr4kw4NRCvf2XLwPdAiEA2wGx%2FKLn7voi4bdXqXM%2FBLzG4hhFe4uUwxEMeCENxfIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPsI3wh%2FckuSJER9tSrcA9wzHp4Z3D1Zc4lvQCIbKe8AHGTmwsPb3nreu4wJWsEGGYmm%2FGG1hy1hn1Y6hNiJEaGywEBj%2F8Wq%2FYTdl6tHGmcCEk5crINQIf2WOl%2BLya%2B%2FdQ4kxNmcUjLrIzKgp5v8LnO%2F5PZMeKD3J3AZsiCiCGm07C7Dr3PJgAmRZdwQH0HINhCWlHbWBH4kM0OZtB%2FM6mreiAVETtMqBxw0IaJ89ULis1IHry8xrjIKZTKvcWRbNHj81F4kdkhsjPsto1At2DthB9vETqKcOzwH0PbaF3e9x%2FOmJyx2yN2yZ0UaHqkiXt10BK%2BQJTcvqi8kznOm%2FuyEgutkoOSNDB977pQCQnw6OhRGMTPet3zOEex4j6d%2Fh3r3ae793CXqgg8R%2FcnzT0OEvHwv%2FXZ471R12I4GNsUXAO%2BHMstq3vIp5dA3P58Jmuc9F2QWF44HJiwkZxpdpJeUvlq4szHSessyCqzvZdInMK2gNVOh%2FRb4S6qH05FZbPdCd2OHrL6fk0TJLxWtNh1rWODoQKIP61vbbuDLTsm2u3yHPPrIUG3hjLGwBlGmN1if6pZWe6njvW0KVLZvvn0KZOtu5uAjGzs5k0%2FpTyrBoAEG%2FGrqdf4tl4vV%2B8hw8LOCsBCAD27eopjNMKjRj8QGOqUBq1w5qJf%2FezbsLpKrr9%2FAoUeX1VCTeZfLiZ6fGojftlPvOXpR9V%2FnVBg5vDb2ubNvha%2BTwv44Ln9Xfbrkr7kQwyuABMzhGsKq8iCAPVhNEWdbXfZTpytUuBJfPY%2B9R6RnESQCEyzJKGzEFMSzkA0CWhpdqALIH3MjYiBGzRHdWETH%2BmmCx1oMXJ27SOoO%2FMncLxAqy6%2FNLvlyLRmxWtC6bnayt%2FWY&X-Amz-Signature=d7ce337ae32df74a36383b95a913237bdd65ff1bde25131d30b7d0c938d10a22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPBZXQSO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIGbL0Ga8YVj4ignLDA83rsrsVvEnr4kw4NRCvf2XLwPdAiEA2wGx%2FKLn7voi4bdXqXM%2FBLzG4hhFe4uUwxEMeCENxfIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPsI3wh%2FckuSJER9tSrcA9wzHp4Z3D1Zc4lvQCIbKe8AHGTmwsPb3nreu4wJWsEGGYmm%2FGG1hy1hn1Y6hNiJEaGywEBj%2F8Wq%2FYTdl6tHGmcCEk5crINQIf2WOl%2BLya%2B%2FdQ4kxNmcUjLrIzKgp5v8LnO%2F5PZMeKD3J3AZsiCiCGm07C7Dr3PJgAmRZdwQH0HINhCWlHbWBH4kM0OZtB%2FM6mreiAVETtMqBxw0IaJ89ULis1IHry8xrjIKZTKvcWRbNHj81F4kdkhsjPsto1At2DthB9vETqKcOzwH0PbaF3e9x%2FOmJyx2yN2yZ0UaHqkiXt10BK%2BQJTcvqi8kznOm%2FuyEgutkoOSNDB977pQCQnw6OhRGMTPet3zOEex4j6d%2Fh3r3ae793CXqgg8R%2FcnzT0OEvHwv%2FXZ471R12I4GNsUXAO%2BHMstq3vIp5dA3P58Jmuc9F2QWF44HJiwkZxpdpJeUvlq4szHSessyCqzvZdInMK2gNVOh%2FRb4S6qH05FZbPdCd2OHrL6fk0TJLxWtNh1rWODoQKIP61vbbuDLTsm2u3yHPPrIUG3hjLGwBlGmN1if6pZWe6njvW0KVLZvvn0KZOtu5uAjGzs5k0%2FpTyrBoAEG%2FGrqdf4tl4vV%2B8hw8LOCsBCAD27eopjNMKjRj8QGOqUBq1w5qJf%2FezbsLpKrr9%2FAoUeX1VCTeZfLiZ6fGojftlPvOXpR9V%2FnVBg5vDb2ubNvha%2BTwv44Ln9Xfbrkr7kQwyuABMzhGsKq8iCAPVhNEWdbXfZTpytUuBJfPY%2B9R6RnESQCEyzJKGzEFMSzkA0CWhpdqALIH3MjYiBGzRHdWETH%2BmmCx1oMXJ27SOoO%2FMncLxAqy6%2FNLvlyLRmxWtC6bnayt%2FWY&X-Amz-Signature=6833fabb11ee42f5ce6bb40492152873b534f37e21c7fd22e628f332361502b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Launch file

<details>
      <summary>What is in this launch file?</summary>
      TODO:
  </details>

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

```python

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

{{% alert context="warning" %}}

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPBZXQSO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIGbL0Ga8YVj4ignLDA83rsrsVvEnr4kw4NRCvf2XLwPdAiEA2wGx%2FKLn7voi4bdXqXM%2FBLzG4hhFe4uUwxEMeCENxfIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPsI3wh%2FckuSJER9tSrcA9wzHp4Z3D1Zc4lvQCIbKe8AHGTmwsPb3nreu4wJWsEGGYmm%2FGG1hy1hn1Y6hNiJEaGywEBj%2F8Wq%2FYTdl6tHGmcCEk5crINQIf2WOl%2BLya%2B%2FdQ4kxNmcUjLrIzKgp5v8LnO%2F5PZMeKD3J3AZsiCiCGm07C7Dr3PJgAmRZdwQH0HINhCWlHbWBH4kM0OZtB%2FM6mreiAVETtMqBxw0IaJ89ULis1IHry8xrjIKZTKvcWRbNHj81F4kdkhsjPsto1At2DthB9vETqKcOzwH0PbaF3e9x%2FOmJyx2yN2yZ0UaHqkiXt10BK%2BQJTcvqi8kznOm%2FuyEgutkoOSNDB977pQCQnw6OhRGMTPet3zOEex4j6d%2Fh3r3ae793CXqgg8R%2FcnzT0OEvHwv%2FXZ471R12I4GNsUXAO%2BHMstq3vIp5dA3P58Jmuc9F2QWF44HJiwkZxpdpJeUvlq4szHSessyCqzvZdInMK2gNVOh%2FRb4S6qH05FZbPdCd2OHrL6fk0TJLxWtNh1rWODoQKIP61vbbuDLTsm2u3yHPPrIUG3hjLGwBlGmN1if6pZWe6njvW0KVLZvvn0KZOtu5uAjGzs5k0%2FpTyrBoAEG%2FGrqdf4tl4vV%2B8hw8LOCsBCAD27eopjNMKjRj8QGOqUBq1w5qJf%2FezbsLpKrr9%2FAoUeX1VCTeZfLiZ6fGojftlPvOXpR9V%2FnVBg5vDb2ubNvha%2BTwv44Ln9Xfbrkr7kQwyuABMzhGsKq8iCAPVhNEWdbXfZTpytUuBJfPY%2B9R6RnESQCEyzJKGzEFMSzkA0CWhpdqALIH3MjYiBGzRHdWETH%2BmmCx1oMXJ27SOoO%2FMncLxAqy6%2FNLvlyLRmxWtC6bnayt%2FWY&X-Amz-Signature=06adf3b56755b267f9710b51d9e2ac80e1b0ed156fe42c34882978e4673cdb36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPBZXQSO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIGbL0Ga8YVj4ignLDA83rsrsVvEnr4kw4NRCvf2XLwPdAiEA2wGx%2FKLn7voi4bdXqXM%2FBLzG4hhFe4uUwxEMeCENxfIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPsI3wh%2FckuSJER9tSrcA9wzHp4Z3D1Zc4lvQCIbKe8AHGTmwsPb3nreu4wJWsEGGYmm%2FGG1hy1hn1Y6hNiJEaGywEBj%2F8Wq%2FYTdl6tHGmcCEk5crINQIf2WOl%2BLya%2B%2FdQ4kxNmcUjLrIzKgp5v8LnO%2F5PZMeKD3J3AZsiCiCGm07C7Dr3PJgAmRZdwQH0HINhCWlHbWBH4kM0OZtB%2FM6mreiAVETtMqBxw0IaJ89ULis1IHry8xrjIKZTKvcWRbNHj81F4kdkhsjPsto1At2DthB9vETqKcOzwH0PbaF3e9x%2FOmJyx2yN2yZ0UaHqkiXt10BK%2BQJTcvqi8kznOm%2FuyEgutkoOSNDB977pQCQnw6OhRGMTPet3zOEex4j6d%2Fh3r3ae793CXqgg8R%2FcnzT0OEvHwv%2FXZ471R12I4GNsUXAO%2BHMstq3vIp5dA3P58Jmuc9F2QWF44HJiwkZxpdpJeUvlq4szHSessyCqzvZdInMK2gNVOh%2FRb4S6qH05FZbPdCd2OHrL6fk0TJLxWtNh1rWODoQKIP61vbbuDLTsm2u3yHPPrIUG3hjLGwBlGmN1if6pZWe6njvW0KVLZvvn0KZOtu5uAjGzs5k0%2FpTyrBoAEG%2FGrqdf4tl4vV%2B8hw8LOCsBCAD27eopjNMKjRj8QGOqUBq1w5qJf%2FezbsLpKrr9%2FAoUeX1VCTeZfLiZ6fGojftlPvOXpR9V%2FnVBg5vDb2ubNvha%2BTwv44Ln9Xfbrkr7kQwyuABMzhGsKq8iCAPVhNEWdbXfZTpytUuBJfPY%2B9R6RnESQCEyzJKGzEFMSzkA0CWhpdqALIH3MjYiBGzRHdWETH%2BmmCx1oMXJ27SOoO%2FMncLxAqy6%2FNLvlyLRmxWtC6bnayt%2FWY&X-Amz-Signature=b9dc7bcfc15605a2ec18f2af68324f15594067b4c9e64938b37d6d0dd432640c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPBZXQSO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIGbL0Ga8YVj4ignLDA83rsrsVvEnr4kw4NRCvf2XLwPdAiEA2wGx%2FKLn7voi4bdXqXM%2FBLzG4hhFe4uUwxEMeCENxfIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPsI3wh%2FckuSJER9tSrcA9wzHp4Z3D1Zc4lvQCIbKe8AHGTmwsPb3nreu4wJWsEGGYmm%2FGG1hy1hn1Y6hNiJEaGywEBj%2F8Wq%2FYTdl6tHGmcCEk5crINQIf2WOl%2BLya%2B%2FdQ4kxNmcUjLrIzKgp5v8LnO%2F5PZMeKD3J3AZsiCiCGm07C7Dr3PJgAmRZdwQH0HINhCWlHbWBH4kM0OZtB%2FM6mreiAVETtMqBxw0IaJ89ULis1IHry8xrjIKZTKvcWRbNHj81F4kdkhsjPsto1At2DthB9vETqKcOzwH0PbaF3e9x%2FOmJyx2yN2yZ0UaHqkiXt10BK%2BQJTcvqi8kznOm%2FuyEgutkoOSNDB977pQCQnw6OhRGMTPet3zOEex4j6d%2Fh3r3ae793CXqgg8R%2FcnzT0OEvHwv%2FXZ471R12I4GNsUXAO%2BHMstq3vIp5dA3P58Jmuc9F2QWF44HJiwkZxpdpJeUvlq4szHSessyCqzvZdInMK2gNVOh%2FRb4S6qH05FZbPdCd2OHrL6fk0TJLxWtNh1rWODoQKIP61vbbuDLTsm2u3yHPPrIUG3hjLGwBlGmN1if6pZWe6njvW0KVLZvvn0KZOtu5uAjGzs5k0%2FpTyrBoAEG%2FGrqdf4tl4vV%2B8hw8LOCsBCAD27eopjNMKjRj8QGOqUBq1w5qJf%2FezbsLpKrr9%2FAoUeX1VCTeZfLiZ6fGojftlPvOXpR9V%2FnVBg5vDb2ubNvha%2BTwv44Ln9Xfbrkr7kQwyuABMzhGsKq8iCAPVhNEWdbXfZTpytUuBJfPY%2B9R6RnESQCEyzJKGzEFMSzkA0CWhpdqALIH3MjYiBGzRHdWETH%2BmmCx1oMXJ27SOoO%2FMncLxAqy6%2FNLvlyLRmxWtC6bnayt%2FWY&X-Amz-Signature=0b56108b49b30ec4fd3f0922a23d521d6d8557001d1f2dac7379f7b0afba826a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPBZXQSO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIGbL0Ga8YVj4ignLDA83rsrsVvEnr4kw4NRCvf2XLwPdAiEA2wGx%2FKLn7voi4bdXqXM%2FBLzG4hhFe4uUwxEMeCENxfIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPsI3wh%2FckuSJER9tSrcA9wzHp4Z3D1Zc4lvQCIbKe8AHGTmwsPb3nreu4wJWsEGGYmm%2FGG1hy1hn1Y6hNiJEaGywEBj%2F8Wq%2FYTdl6tHGmcCEk5crINQIf2WOl%2BLya%2B%2FdQ4kxNmcUjLrIzKgp5v8LnO%2F5PZMeKD3J3AZsiCiCGm07C7Dr3PJgAmRZdwQH0HINhCWlHbWBH4kM0OZtB%2FM6mreiAVETtMqBxw0IaJ89ULis1IHry8xrjIKZTKvcWRbNHj81F4kdkhsjPsto1At2DthB9vETqKcOzwH0PbaF3e9x%2FOmJyx2yN2yZ0UaHqkiXt10BK%2BQJTcvqi8kznOm%2FuyEgutkoOSNDB977pQCQnw6OhRGMTPet3zOEex4j6d%2Fh3r3ae793CXqgg8R%2FcnzT0OEvHwv%2FXZ471R12I4GNsUXAO%2BHMstq3vIp5dA3P58Jmuc9F2QWF44HJiwkZxpdpJeUvlq4szHSessyCqzvZdInMK2gNVOh%2FRb4S6qH05FZbPdCd2OHrL6fk0TJLxWtNh1rWODoQKIP61vbbuDLTsm2u3yHPPrIUG3hjLGwBlGmN1if6pZWe6njvW0KVLZvvn0KZOtu5uAjGzs5k0%2FpTyrBoAEG%2FGrqdf4tl4vV%2B8hw8LOCsBCAD27eopjNMKjRj8QGOqUBq1w5qJf%2FezbsLpKrr9%2FAoUeX1VCTeZfLiZ6fGojftlPvOXpR9V%2FnVBg5vDb2ubNvha%2BTwv44Ln9Xfbrkr7kQwyuABMzhGsKq8iCAPVhNEWdbXfZTpytUuBJfPY%2B9R6RnESQCEyzJKGzEFMSzkA0CWhpdqALIH3MjYiBGzRHdWETH%2BmmCx1oMXJ27SOoO%2FMncLxAqy6%2FNLvlyLRmxWtC6bnayt%2FWY&X-Amz-Signature=bc22c18fe57e118d47ff23b29f07292e77716dadd2428cae2604418cb4da7a32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
