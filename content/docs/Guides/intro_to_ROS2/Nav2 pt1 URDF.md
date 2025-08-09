---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-02T09:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-02T09:55:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C2KBIUY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCKPa%2F4RlRNR9oJS2j%2FO1aypbmwFYAPQIOqFARYua6PWwIhAM2Ysm7o454qxb8N3FgKxo82kq3xoXhxoU8kVIuDQVIVKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4y5cAG1X5w5VACbgq3APXtwwrgiCnLZv9KYp3sdzk8VbmypYleojgteSFAXNwATXybWixApg%2FmpWrFOBct9auYM1pJzHB2MjNlwfPHmFV66hnFQRZSB9JdZgCbUXtLPfjzbp9SxpC40yyKWgwjt1XRQqOquR1dSe84cxt1gJftQEdeUv1OPe1nfI9GRyhyeKpjUpuPci7ntGJG2hfdXHyYxw12yuJIdcYF7BR%2B%2FBYXQeXtQV6KjShLCjsc6pZm7rpajkQJSdqLSr8ziLwIx0n%2FUeUQAv2KZG86uhTrt83ksBGYRdCj1LP6JZZ2gpLF6iDmv%2FUmr5OagIP%2BXWVRmcbavv0E25pNeldThmIUCs1Tvd0j%2BTasiqZ8h3R2qlBsIbMhBs8jwG1xggBGjaHVBAuFq%2BLcRWAQP7Il9d3s9UTGsBYuzxVhu%2FqaAP1M8PQ4jSpTzvGG7De6%2BW8t4bY9eQA9Jm1QOR0dPJ8OCNXY1OjYMWjOZa1VotC7UGYoDq1CwR9TgiUMzh4owa%2FTs%2FANfdS7T8aGg4dI4NJYIBXN0Mmb9u8t%2Bb2vtdVRywVS8KVOs3mGXiYRE6NpjfhtBbn%2B5SrsvAuY2ZoYtJqyodMT3bssUXbhh3xhZXJGYPrbNzMVCDaJW2sPyAMkeUNaDDKxNvEBjqkAWnVa9kPD9gywMg84tCUxWoKViQ1dPAAoU6RE6wFg9hIR%2Bm9H9w8o9L7mIuGQNbLqdADiShoVjcdm0XgwkywMp8w%2ByERStwaSZrTxgZ8pmsODzJREuVhKDq%2BTBGoG6mHqV7l1mNy1sIUi%2BIapxdIt6CR4Ks3R0wuFwm3%2BZvUNACAlNNEFwgZelQpmBvgir7kfPMaO5WsS8Lq1zsNlW8aFvmELuB4&X-Amz-Signature=5da7f306a1e4d540c1409cc3906ff3286ec175d454a950a4d673ae6037e0bea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C2KBIUY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCKPa%2F4RlRNR9oJS2j%2FO1aypbmwFYAPQIOqFARYua6PWwIhAM2Ysm7o454qxb8N3FgKxo82kq3xoXhxoU8kVIuDQVIVKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4y5cAG1X5w5VACbgq3APXtwwrgiCnLZv9KYp3sdzk8VbmypYleojgteSFAXNwATXybWixApg%2FmpWrFOBct9auYM1pJzHB2MjNlwfPHmFV66hnFQRZSB9JdZgCbUXtLPfjzbp9SxpC40yyKWgwjt1XRQqOquR1dSe84cxt1gJftQEdeUv1OPe1nfI9GRyhyeKpjUpuPci7ntGJG2hfdXHyYxw12yuJIdcYF7BR%2B%2FBYXQeXtQV6KjShLCjsc6pZm7rpajkQJSdqLSr8ziLwIx0n%2FUeUQAv2KZG86uhTrt83ksBGYRdCj1LP6JZZ2gpLF6iDmv%2FUmr5OagIP%2BXWVRmcbavv0E25pNeldThmIUCs1Tvd0j%2BTasiqZ8h3R2qlBsIbMhBs8jwG1xggBGjaHVBAuFq%2BLcRWAQP7Il9d3s9UTGsBYuzxVhu%2FqaAP1M8PQ4jSpTzvGG7De6%2BW8t4bY9eQA9Jm1QOR0dPJ8OCNXY1OjYMWjOZa1VotC7UGYoDq1CwR9TgiUMzh4owa%2FTs%2FANfdS7T8aGg4dI4NJYIBXN0Mmb9u8t%2Bb2vtdVRywVS8KVOs3mGXiYRE6NpjfhtBbn%2B5SrsvAuY2ZoYtJqyodMT3bssUXbhh3xhZXJGYPrbNzMVCDaJW2sPyAMkeUNaDDKxNvEBjqkAWnVa9kPD9gywMg84tCUxWoKViQ1dPAAoU6RE6wFg9hIR%2Bm9H9w8o9L7mIuGQNbLqdADiShoVjcdm0XgwkywMp8w%2ByERStwaSZrTxgZ8pmsODzJREuVhKDq%2BTBGoG6mHqV7l1mNy1sIUi%2BIapxdIt6CR4Ks3R0wuFwm3%2BZvUNACAlNNEFwgZelQpmBvgir7kfPMaO5WsS8Lq1zsNlW8aFvmELuB4&X-Amz-Signature=9f0e34158ed2ccdcaadafaa24d6b37db4614b00a90938ccc5e06a9cba39fb886&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C2KBIUY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCKPa%2F4RlRNR9oJS2j%2FO1aypbmwFYAPQIOqFARYua6PWwIhAM2Ysm7o454qxb8N3FgKxo82kq3xoXhxoU8kVIuDQVIVKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4y5cAG1X5w5VACbgq3APXtwwrgiCnLZv9KYp3sdzk8VbmypYleojgteSFAXNwATXybWixApg%2FmpWrFOBct9auYM1pJzHB2MjNlwfPHmFV66hnFQRZSB9JdZgCbUXtLPfjzbp9SxpC40yyKWgwjt1XRQqOquR1dSe84cxt1gJftQEdeUv1OPe1nfI9GRyhyeKpjUpuPci7ntGJG2hfdXHyYxw12yuJIdcYF7BR%2B%2FBYXQeXtQV6KjShLCjsc6pZm7rpajkQJSdqLSr8ziLwIx0n%2FUeUQAv2KZG86uhTrt83ksBGYRdCj1LP6JZZ2gpLF6iDmv%2FUmr5OagIP%2BXWVRmcbavv0E25pNeldThmIUCs1Tvd0j%2BTasiqZ8h3R2qlBsIbMhBs8jwG1xggBGjaHVBAuFq%2BLcRWAQP7Il9d3s9UTGsBYuzxVhu%2FqaAP1M8PQ4jSpTzvGG7De6%2BW8t4bY9eQA9Jm1QOR0dPJ8OCNXY1OjYMWjOZa1VotC7UGYoDq1CwR9TgiUMzh4owa%2FTs%2FANfdS7T8aGg4dI4NJYIBXN0Mmb9u8t%2Bb2vtdVRywVS8KVOs3mGXiYRE6NpjfhtBbn%2B5SrsvAuY2ZoYtJqyodMT3bssUXbhh3xhZXJGYPrbNzMVCDaJW2sPyAMkeUNaDDKxNvEBjqkAWnVa9kPD9gywMg84tCUxWoKViQ1dPAAoU6RE6wFg9hIR%2Bm9H9w8o9L7mIuGQNbLqdADiShoVjcdm0XgwkywMp8w%2ByERStwaSZrTxgZ8pmsODzJREuVhKDq%2BTBGoG6mHqV7l1mNy1sIUi%2BIapxdIt6CR4Ks3R0wuFwm3%2BZvUNACAlNNEFwgZelQpmBvgir7kfPMaO5WsS8Lq1zsNlW8aFvmELuB4&X-Amz-Signature=e42ff0e3305812bcb269929a428aa1479fdbfc8e7c465892e71fcf264f4ac825&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C2KBIUY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCKPa%2F4RlRNR9oJS2j%2FO1aypbmwFYAPQIOqFARYua6PWwIhAM2Ysm7o454qxb8N3FgKxo82kq3xoXhxoU8kVIuDQVIVKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4y5cAG1X5w5VACbgq3APXtwwrgiCnLZv9KYp3sdzk8VbmypYleojgteSFAXNwATXybWixApg%2FmpWrFOBct9auYM1pJzHB2MjNlwfPHmFV66hnFQRZSB9JdZgCbUXtLPfjzbp9SxpC40yyKWgwjt1XRQqOquR1dSe84cxt1gJftQEdeUv1OPe1nfI9GRyhyeKpjUpuPci7ntGJG2hfdXHyYxw12yuJIdcYF7BR%2B%2FBYXQeXtQV6KjShLCjsc6pZm7rpajkQJSdqLSr8ziLwIx0n%2FUeUQAv2KZG86uhTrt83ksBGYRdCj1LP6JZZ2gpLF6iDmv%2FUmr5OagIP%2BXWVRmcbavv0E25pNeldThmIUCs1Tvd0j%2BTasiqZ8h3R2qlBsIbMhBs8jwG1xggBGjaHVBAuFq%2BLcRWAQP7Il9d3s9UTGsBYuzxVhu%2FqaAP1M8PQ4jSpTzvGG7De6%2BW8t4bY9eQA9Jm1QOR0dPJ8OCNXY1OjYMWjOZa1VotC7UGYoDq1CwR9TgiUMzh4owa%2FTs%2FANfdS7T8aGg4dI4NJYIBXN0Mmb9u8t%2Bb2vtdVRywVS8KVOs3mGXiYRE6NpjfhtBbn%2B5SrsvAuY2ZoYtJqyodMT3bssUXbhh3xhZXJGYPrbNzMVCDaJW2sPyAMkeUNaDDKxNvEBjqkAWnVa9kPD9gywMg84tCUxWoKViQ1dPAAoU6RE6wFg9hIR%2Bm9H9w8o9L7mIuGQNbLqdADiShoVjcdm0XgwkywMp8w%2ByERStwaSZrTxgZ8pmsODzJREuVhKDq%2BTBGoG6mHqV7l1mNy1sIUi%2BIapxdIt6CR4Ks3R0wuFwm3%2BZvUNACAlNNEFwgZelQpmBvgir7kfPMaO5WsS8Lq1zsNlW8aFvmELuB4&X-Amz-Signature=c22db26bbe455672c30b78d800b7777c6b52ff13485116bff6d1eee3a92ec340&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C2KBIUY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCKPa%2F4RlRNR9oJS2j%2FO1aypbmwFYAPQIOqFARYua6PWwIhAM2Ysm7o454qxb8N3FgKxo82kq3xoXhxoU8kVIuDQVIVKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4y5cAG1X5w5VACbgq3APXtwwrgiCnLZv9KYp3sdzk8VbmypYleojgteSFAXNwATXybWixApg%2FmpWrFOBct9auYM1pJzHB2MjNlwfPHmFV66hnFQRZSB9JdZgCbUXtLPfjzbp9SxpC40yyKWgwjt1XRQqOquR1dSe84cxt1gJftQEdeUv1OPe1nfI9GRyhyeKpjUpuPci7ntGJG2hfdXHyYxw12yuJIdcYF7BR%2B%2FBYXQeXtQV6KjShLCjsc6pZm7rpajkQJSdqLSr8ziLwIx0n%2FUeUQAv2KZG86uhTrt83ksBGYRdCj1LP6JZZ2gpLF6iDmv%2FUmr5OagIP%2BXWVRmcbavv0E25pNeldThmIUCs1Tvd0j%2BTasiqZ8h3R2qlBsIbMhBs8jwG1xggBGjaHVBAuFq%2BLcRWAQP7Il9d3s9UTGsBYuzxVhu%2FqaAP1M8PQ4jSpTzvGG7De6%2BW8t4bY9eQA9Jm1QOR0dPJ8OCNXY1OjYMWjOZa1VotC7UGYoDq1CwR9TgiUMzh4owa%2FTs%2FANfdS7T8aGg4dI4NJYIBXN0Mmb9u8t%2Bb2vtdVRywVS8KVOs3mGXiYRE6NpjfhtBbn%2B5SrsvAuY2ZoYtJqyodMT3bssUXbhh3xhZXJGYPrbNzMVCDaJW2sPyAMkeUNaDDKxNvEBjqkAWnVa9kPD9gywMg84tCUxWoKViQ1dPAAoU6RE6wFg9hIR%2Bm9H9w8o9L7mIuGQNbLqdADiShoVjcdm0XgwkywMp8w%2ByERStwaSZrTxgZ8pmsODzJREuVhKDq%2BTBGoG6mHqV7l1mNy1sIUi%2BIapxdIt6CR4Ks3R0wuFwm3%2BZvUNACAlNNEFwgZelQpmBvgir7kfPMaO5WsS8Lq1zsNlW8aFvmELuB4&X-Amz-Signature=8c7869df26fc81a8c83b7739c207a18ff92fab08b9556816f4baa1debc8d9f3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C2KBIUY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCKPa%2F4RlRNR9oJS2j%2FO1aypbmwFYAPQIOqFARYua6PWwIhAM2Ysm7o454qxb8N3FgKxo82kq3xoXhxoU8kVIuDQVIVKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4y5cAG1X5w5VACbgq3APXtwwrgiCnLZv9KYp3sdzk8VbmypYleojgteSFAXNwATXybWixApg%2FmpWrFOBct9auYM1pJzHB2MjNlwfPHmFV66hnFQRZSB9JdZgCbUXtLPfjzbp9SxpC40yyKWgwjt1XRQqOquR1dSe84cxt1gJftQEdeUv1OPe1nfI9GRyhyeKpjUpuPci7ntGJG2hfdXHyYxw12yuJIdcYF7BR%2B%2FBYXQeXtQV6KjShLCjsc6pZm7rpajkQJSdqLSr8ziLwIx0n%2FUeUQAv2KZG86uhTrt83ksBGYRdCj1LP6JZZ2gpLF6iDmv%2FUmr5OagIP%2BXWVRmcbavv0E25pNeldThmIUCs1Tvd0j%2BTasiqZ8h3R2qlBsIbMhBs8jwG1xggBGjaHVBAuFq%2BLcRWAQP7Il9d3s9UTGsBYuzxVhu%2FqaAP1M8PQ4jSpTzvGG7De6%2BW8t4bY9eQA9Jm1QOR0dPJ8OCNXY1OjYMWjOZa1VotC7UGYoDq1CwR9TgiUMzh4owa%2FTs%2FANfdS7T8aGg4dI4NJYIBXN0Mmb9u8t%2Bb2vtdVRywVS8KVOs3mGXiYRE6NpjfhtBbn%2B5SrsvAuY2ZoYtJqyodMT3bssUXbhh3xhZXJGYPrbNzMVCDaJW2sPyAMkeUNaDDKxNvEBjqkAWnVa9kPD9gywMg84tCUxWoKViQ1dPAAoU6RE6wFg9hIR%2Bm9H9w8o9L7mIuGQNbLqdADiShoVjcdm0XgwkywMp8w%2ByERStwaSZrTxgZ8pmsODzJREuVhKDq%2BTBGoG6mHqV7l1mNy1sIUi%2BIapxdIt6CR4Ks3R0wuFwm3%2BZvUNACAlNNEFwgZelQpmBvgir7kfPMaO5WsS8Lq1zsNlW8aFvmELuB4&X-Amz-Signature=1061a495e1d3d51fa8c297c85de7a3ee41eccfcfb78fe5334faf1816b67df756&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C2KBIUY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCKPa%2F4RlRNR9oJS2j%2FO1aypbmwFYAPQIOqFARYua6PWwIhAM2Ysm7o454qxb8N3FgKxo82kq3xoXhxoU8kVIuDQVIVKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4y5cAG1X5w5VACbgq3APXtwwrgiCnLZv9KYp3sdzk8VbmypYleojgteSFAXNwATXybWixApg%2FmpWrFOBct9auYM1pJzHB2MjNlwfPHmFV66hnFQRZSB9JdZgCbUXtLPfjzbp9SxpC40yyKWgwjt1XRQqOquR1dSe84cxt1gJftQEdeUv1OPe1nfI9GRyhyeKpjUpuPci7ntGJG2hfdXHyYxw12yuJIdcYF7BR%2B%2FBYXQeXtQV6KjShLCjsc6pZm7rpajkQJSdqLSr8ziLwIx0n%2FUeUQAv2KZG86uhTrt83ksBGYRdCj1LP6JZZ2gpLF6iDmv%2FUmr5OagIP%2BXWVRmcbavv0E25pNeldThmIUCs1Tvd0j%2BTasiqZ8h3R2qlBsIbMhBs8jwG1xggBGjaHVBAuFq%2BLcRWAQP7Il9d3s9UTGsBYuzxVhu%2FqaAP1M8PQ4jSpTzvGG7De6%2BW8t4bY9eQA9Jm1QOR0dPJ8OCNXY1OjYMWjOZa1VotC7UGYoDq1CwR9TgiUMzh4owa%2FTs%2FANfdS7T8aGg4dI4NJYIBXN0Mmb9u8t%2Bb2vtdVRywVS8KVOs3mGXiYRE6NpjfhtBbn%2B5SrsvAuY2ZoYtJqyodMT3bssUXbhh3xhZXJGYPrbNzMVCDaJW2sPyAMkeUNaDDKxNvEBjqkAWnVa9kPD9gywMg84tCUxWoKViQ1dPAAoU6RE6wFg9hIR%2Bm9H9w8o9L7mIuGQNbLqdADiShoVjcdm0XgwkywMp8w%2ByERStwaSZrTxgZ8pmsODzJREuVhKDq%2BTBGoG6mHqV7l1mNy1sIUi%2BIapxdIt6CR4Ks3R0wuFwm3%2BZvUNACAlNNEFwgZelQpmBvgir7kfPMaO5WsS8Lq1zsNlW8aFvmELuB4&X-Amz-Signature=f1d54bb6f169f439ca51037505c6a2b14103e0a8a160c03b48a72e4667434c24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C2KBIUY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCKPa%2F4RlRNR9oJS2j%2FO1aypbmwFYAPQIOqFARYua6PWwIhAM2Ysm7o454qxb8N3FgKxo82kq3xoXhxoU8kVIuDQVIVKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4y5cAG1X5w5VACbgq3APXtwwrgiCnLZv9KYp3sdzk8VbmypYleojgteSFAXNwATXybWixApg%2FmpWrFOBct9auYM1pJzHB2MjNlwfPHmFV66hnFQRZSB9JdZgCbUXtLPfjzbp9SxpC40yyKWgwjt1XRQqOquR1dSe84cxt1gJftQEdeUv1OPe1nfI9GRyhyeKpjUpuPci7ntGJG2hfdXHyYxw12yuJIdcYF7BR%2B%2FBYXQeXtQV6KjShLCjsc6pZm7rpajkQJSdqLSr8ziLwIx0n%2FUeUQAv2KZG86uhTrt83ksBGYRdCj1LP6JZZ2gpLF6iDmv%2FUmr5OagIP%2BXWVRmcbavv0E25pNeldThmIUCs1Tvd0j%2BTasiqZ8h3R2qlBsIbMhBs8jwG1xggBGjaHVBAuFq%2BLcRWAQP7Il9d3s9UTGsBYuzxVhu%2FqaAP1M8PQ4jSpTzvGG7De6%2BW8t4bY9eQA9Jm1QOR0dPJ8OCNXY1OjYMWjOZa1VotC7UGYoDq1CwR9TgiUMzh4owa%2FTs%2FANfdS7T8aGg4dI4NJYIBXN0Mmb9u8t%2Bb2vtdVRywVS8KVOs3mGXiYRE6NpjfhtBbn%2B5SrsvAuY2ZoYtJqyodMT3bssUXbhh3xhZXJGYPrbNzMVCDaJW2sPyAMkeUNaDDKxNvEBjqkAWnVa9kPD9gywMg84tCUxWoKViQ1dPAAoU6RE6wFg9hIR%2Bm9H9w8o9L7mIuGQNbLqdADiShoVjcdm0XgwkywMp8w%2ByERStwaSZrTxgZ8pmsODzJREuVhKDq%2BTBGoG6mHqV7l1mNy1sIUi%2BIapxdIt6CR4Ks3R0wuFwm3%2BZvUNACAlNNEFwgZelQpmBvgir7kfPMaO5WsS8Lq1zsNlW8aFvmELuB4&X-Amz-Signature=db8c75ed313209d0f77d2d30155a4c226d58a85bc1162d90ff5c7d5ca419f291&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C2KBIUY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCKPa%2F4RlRNR9oJS2j%2FO1aypbmwFYAPQIOqFARYua6PWwIhAM2Ysm7o454qxb8N3FgKxo82kq3xoXhxoU8kVIuDQVIVKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4y5cAG1X5w5VACbgq3APXtwwrgiCnLZv9KYp3sdzk8VbmypYleojgteSFAXNwATXybWixApg%2FmpWrFOBct9auYM1pJzHB2MjNlwfPHmFV66hnFQRZSB9JdZgCbUXtLPfjzbp9SxpC40yyKWgwjt1XRQqOquR1dSe84cxt1gJftQEdeUv1OPe1nfI9GRyhyeKpjUpuPci7ntGJG2hfdXHyYxw12yuJIdcYF7BR%2B%2FBYXQeXtQV6KjShLCjsc6pZm7rpajkQJSdqLSr8ziLwIx0n%2FUeUQAv2KZG86uhTrt83ksBGYRdCj1LP6JZZ2gpLF6iDmv%2FUmr5OagIP%2BXWVRmcbavv0E25pNeldThmIUCs1Tvd0j%2BTasiqZ8h3R2qlBsIbMhBs8jwG1xggBGjaHVBAuFq%2BLcRWAQP7Il9d3s9UTGsBYuzxVhu%2FqaAP1M8PQ4jSpTzvGG7De6%2BW8t4bY9eQA9Jm1QOR0dPJ8OCNXY1OjYMWjOZa1VotC7UGYoDq1CwR9TgiUMzh4owa%2FTs%2FANfdS7T8aGg4dI4NJYIBXN0Mmb9u8t%2Bb2vtdVRywVS8KVOs3mGXiYRE6NpjfhtBbn%2B5SrsvAuY2ZoYtJqyodMT3bssUXbhh3xhZXJGYPrbNzMVCDaJW2sPyAMkeUNaDDKxNvEBjqkAWnVa9kPD9gywMg84tCUxWoKViQ1dPAAoU6RE6wFg9hIR%2Bm9H9w8o9L7mIuGQNbLqdADiShoVjcdm0XgwkywMp8w%2ByERStwaSZrTxgZ8pmsODzJREuVhKDq%2BTBGoG6mHqV7l1mNy1sIUi%2BIapxdIt6CR4Ks3R0wuFwm3%2BZvUNACAlNNEFwgZelQpmBvgir7kfPMaO5WsS8Lq1zsNlW8aFvmELuB4&X-Amz-Signature=6b56987c58f6a239fe1f37a295aad08b1c6a4850a34981b6d0c00297501b50ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C2KBIUY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCKPa%2F4RlRNR9oJS2j%2FO1aypbmwFYAPQIOqFARYua6PWwIhAM2Ysm7o454qxb8N3FgKxo82kq3xoXhxoU8kVIuDQVIVKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4y5cAG1X5w5VACbgq3APXtwwrgiCnLZv9KYp3sdzk8VbmypYleojgteSFAXNwATXybWixApg%2FmpWrFOBct9auYM1pJzHB2MjNlwfPHmFV66hnFQRZSB9JdZgCbUXtLPfjzbp9SxpC40yyKWgwjt1XRQqOquR1dSe84cxt1gJftQEdeUv1OPe1nfI9GRyhyeKpjUpuPci7ntGJG2hfdXHyYxw12yuJIdcYF7BR%2B%2FBYXQeXtQV6KjShLCjsc6pZm7rpajkQJSdqLSr8ziLwIx0n%2FUeUQAv2KZG86uhTrt83ksBGYRdCj1LP6JZZ2gpLF6iDmv%2FUmr5OagIP%2BXWVRmcbavv0E25pNeldThmIUCs1Tvd0j%2BTasiqZ8h3R2qlBsIbMhBs8jwG1xggBGjaHVBAuFq%2BLcRWAQP7Il9d3s9UTGsBYuzxVhu%2FqaAP1M8PQ4jSpTzvGG7De6%2BW8t4bY9eQA9Jm1QOR0dPJ8OCNXY1OjYMWjOZa1VotC7UGYoDq1CwR9TgiUMzh4owa%2FTs%2FANfdS7T8aGg4dI4NJYIBXN0Mmb9u8t%2Bb2vtdVRywVS8KVOs3mGXiYRE6NpjfhtBbn%2B5SrsvAuY2ZoYtJqyodMT3bssUXbhh3xhZXJGYPrbNzMVCDaJW2sPyAMkeUNaDDKxNvEBjqkAWnVa9kPD9gywMg84tCUxWoKViQ1dPAAoU6RE6wFg9hIR%2Bm9H9w8o9L7mIuGQNbLqdADiShoVjcdm0XgwkywMp8w%2ByERStwaSZrTxgZ8pmsODzJREuVhKDq%2BTBGoG6mHqV7l1mNy1sIUi%2BIapxdIt6CR4Ks3R0wuFwm3%2BZvUNACAlNNEFwgZelQpmBvgir7kfPMaO5WsS8Lq1zsNlW8aFvmELuB4&X-Amz-Signature=59856c1c8e9ea664266a2f5f0feec29cb6bbed91b426afde0938407f4d88a2be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> urdf can get complex to look at so I will be putting a “_scratch”_ like equivalent next to each example I put down.

To start add these tags:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
**<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">



</robot>**
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNJG2BIE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD8O6kuVmMUSCek0CWYy8Fht1EzpZlkf%2BKzw0ZJ1bI2jQIgRjgOa%2Bpm37uFoPHsUDQZSOCaELoRiLr5%2BH2V%2FuKTQRoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFR%2FFa3rXZT62peiayrcA%2FAywnCu4rQXL%2BvKJuejeNmdk6nb30sPTprNr0Y6xs6m2OuInkQVF5Y%2BPDU31nUEkVdHSyh3oEuh%2BFAHMNTwYUJyZ1CHG97U5zN6A2%2FfJ8JTlM966yZYPQZaBO%2B%2BsL%2BkYVkD%2BQmAD%2FjewbafjEUFO54BwtFSa%2FsNjYBzJNOsEB8uSWwNXN4%2FgK%2B0V%2FMjcrpgqGHgvYenkoxykniC1jFHsjwg0Z2Ofcmx23z2gAiTTUZCzEhsFDcHhy8ELjLFCKKLKmP33IfEmnsL8qtT2HVRv9WxSDJnBqZmptiBls0pDnGGhL3ElTEp67phKGDYWJwAKM8ddJ76r8%2BT%2F6z5np608r%2B1JIu15b9UVALQX4jJZDQJdSiU76FLzf918ezPUAMkmoBTDls5hic7z%2BsFDi6uNtZuAvgRS3ooX91pnOOk3O9TKTaPE0sneeb%2F%2F6J6YHNwxfSncFEn6u%2BLszwCiJcavgesoKAxSFNipFXGwV%2BnQohlRfGGS5H1hKx88ieDT6Su%2FQKByFgqadB5f9%2BXbSyDrXI5iZ7vaLEVHqBo2VDCsztUjaWsd7q0wqVwuSZuVY8jm5g8xlErVjL%2BSt0c5aci%2FImax%2BJnZ1r2wjn6DVE4QJTOhurkTrR3GM1xWB4rMP%2FE28QGOqUBq5SfvLWOLSm4h3q%2FwCu9cYLwSdSEg%2FjjKm9sDdPiPivCspx%2FaOseeW9RDnlNQDA5LfkLswvt7uw2YZB4owUMzdm4XsMEJTyrWMThZ4WnyMWEidF5XulVE4FjZl%2FDQcTzFjS5IeHBXHlloABHlS34GGA1jt9B8ZdOT1cWn4ig7vCEGeRiqBLGBf%2FTKXcSR8MDxiAPyhuaqp%2BwJa%2F7yYBota%2BXxP%2B%2B&X-Amz-Signature=5bb909ceca542061ebed47b2850333f1f2defc79c556411a94b9342faa270d4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

All urdf files must start with these tags to be valid urdf. All of our code will go in between the `<robot>` tags 

Next lets put down some constants we will use later

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7MMGKHU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICRPtN3PqOs4WrEtpYk6sKPp%2FI9YLwdRieHU%2F0ko%2Fj6CAiEAq7KF%2Fueejmhrrqpded%2FAVcoRirvzS%2FKlfpSoqUe%2BwboqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJj7dXsgUNe4wij7qircA%2FPRCf7D5Fr1U%2BVj%2BpEZ5lQxiQC3rUvsqv%2F2%2BeF91m6AZRlAR082j9h9mg5olABQRDy8RizOU1g7KW4TisinYoUtjwhf5PizqqiEs8D7h58lIQvr%2Fn4%2FIRwkgr9XFrmstZMRkghg%2FFJyug0uFgtmnwZAVwLPWOT8fPZZ9%2BQbZDcFY5pTzVMCUTZE%2ByNYwYRCdjrnEEfosF4J%2BcFZTcsvzxqtP1AFsK0dzQOnCh4PY8rUQWGuCosFu6lo6p0aQZ89S2z1%2F4G4pBoK%2FDiSTG5hzVGM8pDeTS27k4j2YFgdaK220k7JIcm9mIbp7u5WQnZh9Fji5UguvNq%2F3nIzGWOqJhcCtm8qc4S0uben6bv8NMHvt0uQ38VI6ONe9pj7CdVCydtQ2DPhkPFDbdEkxFTy1OWRxNEuaW1uto7V1s%2BO694IyWuA%2BBgUkAniyq0AykS910MzEYHS1VJBct0%2FNQK3ODnXSn%2BpdLR2BFVXziNf9s%2B%2B3FVmmB2x1tB5L8nWvKn042G6Xt35jp9MjAANU8Ca2iaIOPcBJHouVdSVenEub8TzbHnwNt85uNM46tt1E8sFBMb9VvZYax6V42Wl0TBJCfmmNl4Dv2BPtkqmUuFX%2Bwe7fCSKXiTvnGmh0tb8MOrE28QGOqUBnJFcbi3NAaN%2B%2FXKM7xiaXonUWqz0Ded6Z4i6ZArHQn8QMDHdbhrM2Jy3uOU9g1AxINAA8FzTpfXCx1vXMWL4%2F%2BPvAX7KP2LYccInWehtkqDhuEMoOx3oHBVS7yYi%2Bg2uQXiVM5PnumIZ5QfFe0puFJgKjoJc%2BXeshZKOYiQT3zEErndOlHJ8Ni1m%2FlvO7tCo4hZWpmXMhXgQbUYUHaRjHb90DJgD&X-Amz-Signature=7d63a0317413f6e4696b75d133f5fb5b4f92a7c00a6664e4491c3b4501e265ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

You can think of these as **variables** but in the xacro language

<details>
      <summary>What do the variables represent?</summary>
      `base_width`, `base_length`, `base_height` are the dimensions of the main body of the robot.
  </details>

Lets now make a link for the body and call it `base_link` to be the “_root” of our robot._ This is common convention in ROS and is required to be called `base_link` for later parts in this guide

For now we are only going to add the visual part of the link to see if our design is correct. Later we will add collision and inertia.

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HPMLZQK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHT2d87Y8O%2FFSIzy7fqayUK4lK1JsQQ9lOSmHZRolXAsAiEA6cnIAFSPZPZ0ZZkgBO0aaT6v%2F%2FjhVtdsz%2FU42pG0fjwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsd3%2FDSL575tlYFZCrcA338lHRGRj%2Bq31eAQ%2BcMTGi57%2Bccgm%2FkIdl2M0sND7G6bOIPXhSrXkLCYbbYdZQg%2BPPeq9zIPN9QnrPNsbAbMKmevod3vHbM3btP809HsuFqhKnl5bPYF1ZJU2jZkLFcAEpYn3%2FXX9Xwdcx4gTfPv8sWfYRYx%2Bokk729xsYoCg8C8KcxywLzcdJzrXRyVHWdZESRbrYfZbgeWVziLHtYYfwrfAOB4qI%2BUYejzbHeHAI9oQnH7lkZGdT5Px7x1Tfh1Wqz48rvwFZU%2FjmndOtbBJrorfu2ujGU4XgeVSamUMMBstF8kJeE70ruTN2Q8879vc0c63QGbPqWgLVapP2IPCm5XMbsSMNCAo4JA5FtBbqRly%2F2zkx5QdbiOQ7zuYQgMp0%2FWHfc7l4veyHp25PkS%2BqMfdAyVKuYPFSkF7xe9rpIeGyoSS4VmKL7YgP2WHU570EoqVjTn%2BCq%2Bro%2Bc5tWkqb%2Fr%2BFvmK3UkeAymIrKuXTbXB%2FSoyvIwzNK%2B9CcNtAZpTvuTbfew%2Bz5uqEW%2FRedmKZuQf52oV%2FDmXM3Yz3t1SeblBjcEbPGMqX27a1pLpAXcYq2mBq9oqLQkHT9beNvfWECGC4ShMQAcKfQ93Lu3DXPBB%2FFGE9vQcqLMrj3MOXE28QGOqUB9SxY3XqUfQIeNs7poBxC%2BG8%2FkDuynKxRon9oibEydYhuzpCIlW2Z5YeqtvGZJQLNuRyNvb89lbxsorNVG1fLIwayyAqabHvxWka1%2Fn4iCgtQqtBSBvLJ%2FI4d0sGnUSm0hLATpeGZGcgTIe8SGxSkHSbJIQ2TdHfW6hacoDuIs7eHLEF6vvCLy6j7jvO23Zn%2FmlVaJSIubQSiQdUFWaGI9ZdKpZ0k&X-Amz-Signature=796465751eb0832e6a123c81a9c83d2e03356e2e7ff0daa06410e8a48c26f6f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C2KBIUY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCKPa%2F4RlRNR9oJS2j%2FO1aypbmwFYAPQIOqFARYua6PWwIhAM2Ysm7o454qxb8N3FgKxo82kq3xoXhxoU8kVIuDQVIVKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4y5cAG1X5w5VACbgq3APXtwwrgiCnLZv9KYp3sdzk8VbmypYleojgteSFAXNwATXybWixApg%2FmpWrFOBct9auYM1pJzHB2MjNlwfPHmFV66hnFQRZSB9JdZgCbUXtLPfjzbp9SxpC40yyKWgwjt1XRQqOquR1dSe84cxt1gJftQEdeUv1OPe1nfI9GRyhyeKpjUpuPci7ntGJG2hfdXHyYxw12yuJIdcYF7BR%2B%2FBYXQeXtQV6KjShLCjsc6pZm7rpajkQJSdqLSr8ziLwIx0n%2FUeUQAv2KZG86uhTrt83ksBGYRdCj1LP6JZZ2gpLF6iDmv%2FUmr5OagIP%2BXWVRmcbavv0E25pNeldThmIUCs1Tvd0j%2BTasiqZ8h3R2qlBsIbMhBs8jwG1xggBGjaHVBAuFq%2BLcRWAQP7Il9d3s9UTGsBYuzxVhu%2FqaAP1M8PQ4jSpTzvGG7De6%2BW8t4bY9eQA9Jm1QOR0dPJ8OCNXY1OjYMWjOZa1VotC7UGYoDq1CwR9TgiUMzh4owa%2FTs%2FANfdS7T8aGg4dI4NJYIBXN0Mmb9u8t%2Bb2vtdVRywVS8KVOs3mGXiYRE6NpjfhtBbn%2B5SrsvAuY2ZoYtJqyodMT3bssUXbhh3xhZXJGYPrbNzMVCDaJW2sPyAMkeUNaDDKxNvEBjqkAWnVa9kPD9gywMg84tCUxWoKViQ1dPAAoU6RE6wFg9hIR%2Bm9H9w8o9L7mIuGQNbLqdADiShoVjcdm0XgwkywMp8w%2ByERStwaSZrTxgZ8pmsODzJREuVhKDq%2BTBGoG6mHqV7l1mNy1sIUi%2BIapxdIt6CR4Ks3R0wuFwm3%2BZvUNACAlNNEFwgZelQpmBvgir7kfPMaO5WsS8Lq1zsNlW8aFvmELuB4&X-Amz-Signature=360c8de13c6c2176494dd2fd4ea849891dd5a6417c18dd231444f7697566800c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

under `</link>` lets define a link called `base_footprint`. This link is just used for path finding to know where the robot is on a 2D map.

Later on in this guide we will see how it gets used.

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTOYFDMY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCNYCpmkt0CatIv912lnBpbc5MxehfaVOEGktj83nppgQIhAII7e5RwZKHq4iBniAZcb4yfWHZ9WfRX3HTOTxxC0AhJKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzLpz3MG8e2Q3Qvz8q3AN9bhSAxApcWZNBwE11E9PQVan%2BGS6gpNQTRXrinv6eTwU1oYAJV9oKNHTPD0745RKS2ER6JusUT6C57JiTHao%2BMaLjlBokCGbroihbmuqm8UU68yiAQDzFjldY%2FT3zn0W4%2BX3GphOiKfryGY7hPtZFP0b6%2Fh58ffuH0iGhuhtuXTaco4E1qPKFAFAANLk7l1F6j%2BmmsHuVh8V8Nt7qKJ%2FMoTjykoXpg1%2FLj1IegF%2F1eqR2tnH3vCEn5US5zEbD8nkN6J9AgHJAVv%2FhuOxcuma71Slt0k8jUIjJj6dA%2FcJoBIwKGHba4OD3uikIwuIv%2FP1IFkKfYRGJbAfljiTOfh3PL5jQGJTpIvy5jNbsWGEZP%2F6lXW3Xw%2FgnX0XmlfTjIKGZ9C7VKSciROMYp3wkUI1s%2FGLDJc41zHFQ%2FPvbkCy3vLNH%2F5KuE5tYneUO9btIivZW%2BPewZgQy64w5IR9L5BhX7%2FIhzF3DJsdHFL0aYyCPQNci3E%2BZb5O1obWJRCI%2BusUqRkEOWea9G%2FnY%2FeO95oDa5ghZKkLK8%2Fvbl3SlrWd2OHzbyMo3VaN56dYNM6iqYwaPqxLPfFPsF%2F4YYZKawk7SD%2BxshvOUIZp7IauRET%2BziSn6xCikT7beMatgBDCKxdvEBjqkAcqEQdMr3SGQKDQLaPeis1ZTWuTbdYpka1iN9I3ox0QzYguKrgyZw3CLfD0fg1pfzm60oO7kZbW98rlBSDi%2FCTc4P3qRPWHOUzl00vLSlVYvR0QQP%2Fn97ejdjOOyDaQC4M0sCXKezI7xHgbaGS1Bg5pPFraeH2aBktdAWrW8K2O%2B2JM4wkSfCNG5TzzJSANFSPR8m0A4zFUGBncG7ypsDJvGswLl&X-Amz-Signature=6e43e29a86ae3bb6a94d7ec22c2702db5ad815d069f5dc47f0e41ef97915e6d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C2KBIUY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCKPa%2F4RlRNR9oJS2j%2FO1aypbmwFYAPQIOqFARYua6PWwIhAM2Ysm7o454qxb8N3FgKxo82kq3xoXhxoU8kVIuDQVIVKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4y5cAG1X5w5VACbgq3APXtwwrgiCnLZv9KYp3sdzk8VbmypYleojgteSFAXNwATXybWixApg%2FmpWrFOBct9auYM1pJzHB2MjNlwfPHmFV66hnFQRZSB9JdZgCbUXtLPfjzbp9SxpC40yyKWgwjt1XRQqOquR1dSe84cxt1gJftQEdeUv1OPe1nfI9GRyhyeKpjUpuPci7ntGJG2hfdXHyYxw12yuJIdcYF7BR%2B%2FBYXQeXtQV6KjShLCjsc6pZm7rpajkQJSdqLSr8ziLwIx0n%2FUeUQAv2KZG86uhTrt83ksBGYRdCj1LP6JZZ2gpLF6iDmv%2FUmr5OagIP%2BXWVRmcbavv0E25pNeldThmIUCs1Tvd0j%2BTasiqZ8h3R2qlBsIbMhBs8jwG1xggBGjaHVBAuFq%2BLcRWAQP7Il9d3s9UTGsBYuzxVhu%2FqaAP1M8PQ4jSpTzvGG7De6%2BW8t4bY9eQA9Jm1QOR0dPJ8OCNXY1OjYMWjOZa1VotC7UGYoDq1CwR9TgiUMzh4owa%2FTs%2FANfdS7T8aGg4dI4NJYIBXN0Mmb9u8t%2Bb2vtdVRywVS8KVOs3mGXiYRE6NpjfhtBbn%2B5SrsvAuY2ZoYtJqyodMT3bssUXbhh3xhZXJGYPrbNzMVCDaJW2sPyAMkeUNaDDKxNvEBjqkAWnVa9kPD9gywMg84tCUxWoKViQ1dPAAoU6RE6wFg9hIR%2Bm9H9w8o9L7mIuGQNbLqdADiShoVjcdm0XgwkywMp8w%2ByERStwaSZrTxgZ8pmsODzJREuVhKDq%2BTBGoG6mHqV7l1mNy1sIUi%2BIapxdIt6CR4Ks3R0wuFwm3%2BZvUNACAlNNEFwgZelQpmBvgir7kfPMaO5WsS8Lq1zsNlW8aFvmELuB4&X-Amz-Signature=2380777dca297957113f31dcd356de595023192eb14c27b79d372ae5f1232496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

under `</joint>` to add wheels lets use a `xacro:macro` (basically a xacro function) to avoid duplicate code. The macro will take 3 functions `prefix`, `x_reflect`, and `y_reflect` so we can flip the wheel on the x or y axis. We also make the joint continuous so the wheel can rotate freely.

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRDSSOBG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIHai0K0Zp7XPUrtogtzNz%2Fr%2Bkj%2BdgBYNqFKgWbLwh0RsAiBXHKtmZ5TCg5zZlWRnqR4Wh6hk8OqUmOyVrujd5imEnSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg6oJS4RJqCrIVw7%2FKtwD7q57brw0jo9o28qZ8zRBbwBUDmuMEk56ilpAsgxLxItUGPQl6EEUhHl6Zt36DlLKGQvy1pXgxN6VWMPBhaC%2BSknzdHxGqN4tmm%2B3bjSfOu58PFMOaDA6SDxLP8x6YRhQfLLYNe7Ci2ErIlHOCrDxlHpeTdIENCOlB9KRzMEd6AhO7iiHhVWpe4E9mt7urcwhlq%2Fo2KNflVqA7MqgOOS15Dvr3sdsRyluiYHuSrRsm97Pk%2BPf59h7186XEs0B9UTJDGXTtUd6xKQo%2FMciIi6nRWIaK3jecRIUynY9HrGIFfvtSl7kyUYvjdDwtE1w%2FrC53ESBEBAdS2feLSPDUZxdnlSVJRU%2FZU6f5Ewd1GW0UWFK7PwGp%2FPd%2Bez74tyeTFhXkyUiRSRCp0VWw9QqnuVIxl6TLx%2B3%2FFs1Kk7etkGzgXqfa%2BtpiEJfIXdr1bqyfP5%2FbT%2FYAvGhht5hlQjmBRn9uTEOZMmh%2BgBz1lEm9DW0hrhSeZKRJ4VJ0YM74S%2F5rtiSQJq121WJTPMe5dheZ%2Bv9aHCGI%2F2Tik9RoN%2BMrAWqPxo5087LHI58kTLA859fwCObDv8U0MDI9iP4tO8HRI74QQ2D7WG9YY35OBb3bmOBhohwfULEhrOHKPnaAmIw5cTbxAY6pgHUm0aQlpYlOrcyessaJx7KWEA4xQIo9hwWycFIJ5%2FNtpJ3qWmgIje7tliIkysIpu2NSByF%2FP8Q8n%2FPGAOy40hXB%2F4dmT801DYmkzGvYVKoeUO6KWhzpIzVwlsO3wbvWjqwm8gbMjbo7M91QDr%2FF2zqVPzo04lPuhTKEsWO38JxBVvH4t%2B7%2BComCF0QFxqFSyGcetN%2BFOP9hl9t1gQSHK3j5uungFgi&X-Amz-Signature=73b75c3ab72b9769e114f1bbb89c6c33115674b05d3fb67bb7fbd3fedbed9af0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C2KBIUY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCKPa%2F4RlRNR9oJS2j%2FO1aypbmwFYAPQIOqFARYua6PWwIhAM2Ysm7o454qxb8N3FgKxo82kq3xoXhxoU8kVIuDQVIVKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4y5cAG1X5w5VACbgq3APXtwwrgiCnLZv9KYp3sdzk8VbmypYleojgteSFAXNwATXybWixApg%2FmpWrFOBct9auYM1pJzHB2MjNlwfPHmFV66hnFQRZSB9JdZgCbUXtLPfjzbp9SxpC40yyKWgwjt1XRQqOquR1dSe84cxt1gJftQEdeUv1OPe1nfI9GRyhyeKpjUpuPci7ntGJG2hfdXHyYxw12yuJIdcYF7BR%2B%2FBYXQeXtQV6KjShLCjsc6pZm7rpajkQJSdqLSr8ziLwIx0n%2FUeUQAv2KZG86uhTrt83ksBGYRdCj1LP6JZZ2gpLF6iDmv%2FUmr5OagIP%2BXWVRmcbavv0E25pNeldThmIUCs1Tvd0j%2BTasiqZ8h3R2qlBsIbMhBs8jwG1xggBGjaHVBAuFq%2BLcRWAQP7Il9d3s9UTGsBYuzxVhu%2FqaAP1M8PQ4jSpTzvGG7De6%2BW8t4bY9eQA9Jm1QOR0dPJ8OCNXY1OjYMWjOZa1VotC7UGYoDq1CwR9TgiUMzh4owa%2FTs%2FANfdS7T8aGg4dI4NJYIBXN0Mmb9u8t%2Bb2vtdVRywVS8KVOs3mGXiYRE6NpjfhtBbn%2B5SrsvAuY2ZoYtJqyodMT3bssUXbhh3xhZXJGYPrbNzMVCDaJW2sPyAMkeUNaDDKxNvEBjqkAWnVa9kPD9gywMg84tCUxWoKViQ1dPAAoU6RE6wFg9hIR%2Bm9H9w8o9L7mIuGQNbLqdADiShoVjcdm0XgwkywMp8w%2ByERStwaSZrTxgZ8pmsODzJREuVhKDq%2BTBGoG6mHqV7l1mNy1sIUi%2BIapxdIt6CR4Ks3R0wuFwm3%2BZvUNACAlNNEFwgZelQpmBvgir7kfPMaO5WsS8Lq1zsNlW8aFvmELuB4&X-Amz-Signature=8d940df45dfee63ebe51ec406e3d415d2e4f528f45fe557093c18930064d28a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Under `xacro:wheel` lets add the caster wheel at the front of the robot. The robot up until now should look like the image below

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRIWNRBH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFiIo1Ojy05v%2BFmP%2FzPB89hInve8cQHl7jm7UYJ3J96gAiBvNo5a3GaxFKQdcHxIvFpe28I%2Fk9nR31ix2a5v43Ry4SqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHxwIjIwWV4IXy7jkKtwDVSnWZayZgyyGFXJ380MCIsysxqCWguMxfKhswfhG8lsQ29D%2FIvZHrLjKEKmpeypmmlOnHTjH2sylVInWPuU0UJ2xz9vPPvQqWt%2FxaOT4d5XHubysaRn7EKaoqJztAZKQv9ePGbvY9buTqwZ4wqnAcbe7w1WZY9mNN2Kw%2FOV3cXCtjB5Iw6H4JYwxPIuv%2BWG6o7%2BQoOLBM9NzmKDmqe470ePmThNNx7l041T9aG6MBW8BOBHqWJLpzw6shRydv%2BN%2BdrlEUBxbLgMU7SUdVo9ZR%2BoB%2B9DZpJIldFR1nNfgaaVT22AkmMBYAzPMh7E3PJEpB439MADLmAm1Gm2vRpG%2FbUBWBhgmcHhfLNK7E3cqUO4ltKlUzwBUX2z73Fk7nzYhErfqzKwixaKm3PAtOXrKFF1zEBzj8HsvwsFA4ToH0LSa2wADzk%2BV7n2lZh4e3xkvAeKbiAiNdc%2FumrBBpr2Qn%2BDUB9JGoO0YNJgcThFj34y9KmXdVu9D7Zll2I2OHvzApy4k%2B3YBw2cBAZuS4ej8zcYlj9p5%2BZ12ybZ%2BR%2F7GWFI%2Flb2IV3WoMbh9MFONs2co20TSstmKXhfvUBMVErzdmbtKMNogRCAL4vminali5gS6dYtdklNfh3vP9Ocwl8XbxAY6pgEBXB%2FAmzU%2Fcqvk1p64MOyYohy2DlK%2BRmZPcaKZ0saQ%2BgqXZlqj6Gjw8uFNCeiojpTMTrTbWjmVoReiAOwEFRWX2UC0YETJwyyVoJePk57u5aUttNW6nOYJGCeNJLo1kq6%2BdB52NeXtS6XgFvOee7P5D04Dc5VsJm8dEoSTQWR1Ak6RYjn9Vbb9mTVuRGmWO7TUh%2F%2FqGkfams0TKQuYC0LW3gwKyB1b&X-Amz-Signature=edc7f2db444a89e8a5abe8cbcdfaa75575eeb718958861629f2184a7876ffa59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C2KBIUY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCKPa%2F4RlRNR9oJS2j%2FO1aypbmwFYAPQIOqFARYua6PWwIhAM2Ysm7o454qxb8N3FgKxo82kq3xoXhxoU8kVIuDQVIVKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4y5cAG1X5w5VACbgq3APXtwwrgiCnLZv9KYp3sdzk8VbmypYleojgteSFAXNwATXybWixApg%2FmpWrFOBct9auYM1pJzHB2MjNlwfPHmFV66hnFQRZSB9JdZgCbUXtLPfjzbp9SxpC40yyKWgwjt1XRQqOquR1dSe84cxt1gJftQEdeUv1OPe1nfI9GRyhyeKpjUpuPci7ntGJG2hfdXHyYxw12yuJIdcYF7BR%2B%2FBYXQeXtQV6KjShLCjsc6pZm7rpajkQJSdqLSr8ziLwIx0n%2FUeUQAv2KZG86uhTrt83ksBGYRdCj1LP6JZZ2gpLF6iDmv%2FUmr5OagIP%2BXWVRmcbavv0E25pNeldThmIUCs1Tvd0j%2BTasiqZ8h3R2qlBsIbMhBs8jwG1xggBGjaHVBAuFq%2BLcRWAQP7Il9d3s9UTGsBYuzxVhu%2FqaAP1M8PQ4jSpTzvGG7De6%2BW8t4bY9eQA9Jm1QOR0dPJ8OCNXY1OjYMWjOZa1VotC7UGYoDq1CwR9TgiUMzh4owa%2FTs%2FANfdS7T8aGg4dI4NJYIBXN0Mmb9u8t%2Bb2vtdVRywVS8KVOs3mGXiYRE6NpjfhtBbn%2B5SrsvAuY2ZoYtJqyodMT3bssUXbhh3xhZXJGYPrbNzMVCDaJW2sPyAMkeUNaDDKxNvEBjqkAWnVa9kPD9gywMg84tCUxWoKViQ1dPAAoU6RE6wFg9hIR%2Bm9H9w8o9L7mIuGQNbLqdADiShoVjcdm0XgwkywMp8w%2ByERStwaSZrTxgZ8pmsODzJREuVhKDq%2BTBGoG6mHqV7l1mNy1sIUi%2BIapxdIt6CR4Ks3R0wuFwm3%2BZvUNACAlNNEFwgZelQpmBvgir7kfPMaO5WsS8Lq1zsNlW8aFvmELuB4&X-Amz-Signature=5b7d5c939b6a1739f2644137cd4b8e414e1623ce0ee4b8bcb0f7ff2df222ac4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>code up until this point</summary>
      <div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YHKRJ3S%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQC8Yyk9JoOg3Io7AE5orz2fp2rMoM%2ByiKuEkZZJ3SnfiAIhAIKfy%2F3p%2FSEH1X7A2laSVkNSg87ONZCmSOYPvH2sNtz7KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztFqsDKsocmFIdZqoq3ANJLqunVDbaplYY16jJYvsa98GseXrFbkBqrcuFP3ZqVqbMdGaanl2CBbF6oqd36nKPxKHZn3GUSiTGbXLJSukywxzch2GwWfAVEwEjptkV3qPXTRnaU24%2BPXoaXW7NWQQyW2llmM%2BLbd87RXGS7M6npMxDyy3cJLb4ySnmwEja0J8yXMoJtAtObfc5eizjLrZxSQ3EpkJN7QnC78HpVGvCIZQnD0SOrbnJbxT9aIy33lfypM09qeakCTE4g8sRihgogT2C5P44nCWH2gjgzN7uZqEnM0ybKmb61knWS91uTQYqfGbFFk6vENF4f87VKo1diE0Ce2W0OEV%2FudTZjR2ypUQYVzZgONpiEARtRgv3O0kF8BxqvODwmfbVp79HGQWngEmJLdQ6YcJwf79w%2FR7IExYb9Yy0mbAba6SJY58pLyP8%2FyZTVPNrHJpwvlNVHfM9Gkj0nHktaXpXISH%2FTZCRxyU47ioPtwQDye1hDQZEKoTt3q0%2FDnycnPOySZg0fFlDh8C1rMcXPGOuZ2m51x3hgap68b5t8RPl28zgh84bIOCO5C6F6yfmjxP87m7fSHxDnf5C8I9T3n1H6%2FvnFQ8kZFfefE4%2ByVCwWVSYVrp071I%2F5GXYqYXd8NVFgzDexNvEBjqkAfPh8Eh5fGIbyFKurwopPVeoWmYmn%2Fxc3lUiqK%2FK9J0du9Y4cc2pVt0rS5j5cF8kwDzOddiC%2Fsgx0v1LDb9XajHT37DdJz96HXGamh70jL8%2BU2Q1FNNFqvF88rHb%2FKU71%2FLBZIiys2WK%2F%2FqyWW%2FXfya1YkDLWqHD9sHDnmpwvKG2XQjsjV2HBBY9BAoW8qK53%2Bkhd1seBU39AoisQDMjWgyZ4T1Y&X-Amz-Signature=bf5e92b867c4d177951ed4e2cda8140acc5b402cf1342480180e0ddc16e525e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>
  </details>

### Adding Collision and Inertia

Next lets add collision and inertia to our robot. These attributes will be used in the robot simulator later in this guide.

To start lets make some `xacro:macro` to avoid repetitive code to make box, cylinder, and sphere inertia.

Place this under the constants section.

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

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

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623XZKVT7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIEuJCF%2B%2FS2MGYd5Iv1rDgxDcpfmXaNuy1Xx%2BH%2FyFLvniAiEAjTOKXDA3B2mzA%2FNdMEBUovZjO93F23ZySNgTZnY3r9cqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHP%2BWHa9gygaKnNKbyrcA8fFVc7hwlPAO5wMNLAJ6boDe8XouDTlApPemRQmXGFVchzmFsXxKpVB3Witji7vWD%2BVbX5RAD47NjNLT7Oz3RkJcKPQ%2BB1s0Q3vCfwTAwT%2F2Is10ghzWm95irJrdtveIM14DxedhQtAcZCFgnbUOa8m6JIwJfQcT3NY%2FCTo%2FAy3Ssbnz8B6AtFMAO94UIYmDDeXxcntGGhXE5qX9QERI18dfDbljIkl1dMXn5bENpzJTMEXr8A6cFmn3P%2B9ujFxp%2BtxvUF2n3zHFodfSEgTVtlXvqY0GIzeg9q5p6076oneRgomXUSpapGNViJigflzORcZlqdlG5AMEBYnn17vEESkxDCSFlxK%2BIC%2FyhAKvPb6eZGMk2hy2FcgnP7xu1%2BQNXM%2FqWFWH24nmSmQxR6vSfXM2HgE66uV2leK9q463bJ2BIjlIj7b%2F9njMeCM31xmQIUn4jMxGDD9ML7ieeQPcQCQagcht6tuM%2Brf%2BpwJO%2FFu49zko0y4m%2Bx67vKiit0Cf428zHOLMXdyVveGf6Iwl%2BulfDzA5K93fI4mxQ4XUKCDa9mw252530W%2FmDnF8OdSPMUYTGo4x8jXzhF%2B2gMDI4blltMdgXt58pLlPMOC0EN9BhsEOP0Fy5zE70n4MJ3F28QGOqUBCN6VQopZgm1HAZjT3gaQa%2Fr13gw4kU1e6%2FBINeUYSQ5ATapJnx2QZpSMVO7oqC5zxYCDltQbUoWPHbxkFBwxvBZkWXCwaFAP8fe7IJIukqHCVEOcyfUuEu%2F4MiPAgaXqo%2FlfurS59aD0v07x2ikYGpCIonbnCf4O1CrWicaZFEKbwPYcLQK%2B6g73P2mJPAaj7N%2ByuxwkFBomFZArznFMQyy3gwSU&X-Amz-Signature=f52112959d1b00b3fc7a105dc95011a37050e50a1d3566ce0eeadc214a55f34f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

Next go into our `base_link` and add the collision and inertia tags.

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2VNJP4N%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIG%2BajQA%2BxGnqvVuB%2BH3M5HpWoMZPMSnrJfmul7N1%2B%2F9WAiEAhQR9X7td8mfzsXKV3ayHFY6RDtH%2BGbnamLsZ3Jv6OVMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDqCAMUlGg9hopMmiCrcA%2FTt9tp9EVUNLyQdXcdEXmfNZPNuzP6jG8Hw4hPVuKn6sMtQfkVtRVfwFw%2Brd1KmvmGGkdtwTDBhyzqt1zv40trU%2BOVHsydiMbd3PB4BsndsfUWkUy%2B7aK8gGx%2BtNm3X4GLIaBwMRRCzZh1W%2F3RfDtc4ZF7NR5QvSHPDzYwhqKWmbVvFsAmVuiZb3HTYf3eZ%2F%2FItchH0ygEZT06lSGr%2B8d86HH8ojE%2BECaBrkTnNCcWTCSYBdfGohYRwo%2F%2BMqTXKGs2Ld8g7XL7UYjmF%2FEISq8v%2FoLpEuX2JYr8QW7mhGJy6pv%2FkUFhpeA7Ukn5ajI1e5G64wGfNNsSthjZHmgjshg8fzFMTNRXKRPhTn%2BcXoCSmldGNyisDsRV4l%2FvrdnKnqkVRbEpxNCQCmOwiYBNHF3p9SPUWM4X9s4qChgZ9LGAWg97vcqAjtjufZAhd5cq4Zq%2BTWQb0S2X1MvuGZWyzJKp2H4%2B5LhKmFyuQOLxZ%2BnRmsx8mO8EPZruwiSqkH4pBdxi5spSXcnw9rA1L2T%2Fvbso3RBnxqmr2TdqPuadHSf07Ij0OaTB4dmWTgXe5aCSWXMDv19CGnFpke1sCaZDprG8IZcT1bMXHdmdNYjviIcN3A8Zu0isj6LE%2F3nWwMMHE28QGOqUB9obHaIp9mEjKbu2w2DOwpC6X0bDbywck8QRLkW95Rd7Yv3G1XHM6aqA7ICGxIv3hoyZv3qTeF74VmEMmKS2orgimI9JhuGs8RTlqa1f0URqE1e%2BWffvIzQS6c%2Bs6bONP6B%2FzxR4Dt2O5f23CrJ2NXAkerJYdXm7e7zE7qhRcE%2BG3MJio%2B708nXYwNXNMS1mNo4iHPEul9Vs5EgDYP2weXImJEEjS&X-Amz-Signature=42b7146640ec0a37b72b80d76591837b148d7b5e6337a2d8142ce0a8c6404368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RULOHOHP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCHYPlF8UlQP9oTqNQoeTJ%2F390D4GOl23sYV8b4dU%2BoGQIhAJo%2BcHER%2F%2BJXqjz90b4%2BhldGGnm%2Btc3hEaCUBQwB2rC%2BKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igypq8LCZussL%2Bx1dfMq3AOj9DdP0V6aC%2FRDwCYWVCjiCq%2F2qZtOzv0gPkBYeLfe4PLtwl7%2Bp8%2Fxmv0RQxo6eZ5Jnk2sE%2FrSxZu7GMUasURmZzydOeChOWKvfi3o4UL8EfAZbzqXUnJIKALLReC%2BQfP2fP3emBBEkXuFDENVK4ThMHl2mZ0kKHoDF1sBJNoxH1YVv5axQmDOgucb1U%2BU8mHWpZgnZ8CUPexm9JVLodtBsoI0d9972IO00z4FnV6YvJa0wHkpUNFyj6js%2BOUsXcywIdMlHfovEbAWKaoX8nhfxJrsz9YYf2VbeM%2Ftse3aoNAQBRwi6N2WFKcxmh8hKza5tYe%2BZy4CJP2Eaq%2BgEcRb81xHgVzcEp5o2QpY41ovv2ES7io6vfG1317mMsb0TqVnEPOWIRKbPNlrIcUuFdXtETlMdHuO%2BGOQfFBalgHBrPorcvK1bmxz7pDw7KrBpKUB77jJzM2Y%2B%2BqIAX3KJSjuC9APekGFzdj76xerNkdrZ0LpKwpRZ8tnQsxxIlsO%2Fv6bWqKpru8VIt6ftLVKS6ur2apr4hmhsRHRB4cHYzcDgmOztfbHxEBEhNN2wTW%2FAx9zxKQReeLcBC7r6EhIEvrdzJBqN2UJsBZeA9s9vA6yc38dZoivut8tZrW%2FHjDaxNvEBjqkAXG7g0iwoaPSaBxjtbKY1UXzaXOw8%2F7KUZUagLSXJOHQGU%2BZutXk3tFGWrfNLy8hRI3GlJ12ouka71bmBmmRXvXncpNga5R0uWIXM6mP%2B2HA8WfvhZ8WdcqwxVmonk5SHlCUqwr0aUMBW8HX68eqKo0ArHRnvJDohwA18pquHYXGbAkvo6ABREPunZW2y3J6br8shb2PBzvjK1qBDb7OVI7nwyI8&X-Amz-Signature=12b8be9b31b4f4396285ddc7dd75e5548f365a8799c36f86130085ef47256d44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

and Same for the caster wheel:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NSJSEVY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIHnFtRbWtR7YXGalbJnSHr%2Fxa1xVRHO5PHVGMk53PM%2BdAiAOxnJJSMexp8yNdBg7GcZU3cfn%2BwgaiAZSwq5sSFL3siqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj1hw4Efqh%2Br9qZYmKtwDTy7lkQmhMr36t3WxOgqlEmqb8zHdIaXlhKlq%2B0bV8VsurktN43hdMlfaZrqvbUrQp42NyrtDcxQxnV11PPyQAdNrlqphZYH1A6qmSYypa3vmVnPRskArKBYxAlD5tR38tC3u0UJNDMLUI%2BVeTYxWZ2AsoIhZWhAlWfsc6JlLJsRGDfpG8MrDHUr6YEpxPToAUuQJ6ur%2F69WKkcitHv5Sya6GIDXkuWC43lS3BN7GvYtITrF8nA6nH04qY%2BlLEExVZP%2FNtAQvMq8WXR65xoqcsIBjbTEP7HuX%2B6cJ774gOCKoButLNusCYsfjEdjgUvGF3M7Ri1Lm24iDATq%2Bz3O6a3lYQ7pWXTCm6TIF8cmk%2BRrSmsDMypYyW3Lsy9WjmvDDJ8jX79AugJ%2FrD0nGIq%2FYqKxeON85ep9NFypiQ2ym9nY%2FNjD%2BSuh784vvcoZTSPYi8buNHh8YlzKTAdNtfn6ZVcmv2hNpuOKGNHlTuSRbku7Q71ryiOAo49IOY5e0eswNfJUuQfz%2BK1AYVTQiwDSsIH17LNxhX2i1F8bAm3CfmX8u2%2BTZ1IOkPI6SobbqFaLOS01wG2L2T6zIIRqIBKHbjmfIf%2FyAUhrq06%2BKgVn%2BNiS01c5ypgIBJxSYbFcwp8rbxAY6pgFBoQB2ZCzC%2F2O2Fkhy5eEKadRsxP8WVE7j8DXcyNgI5n5DJuaCCC23QhEIeDxwjCgDp0%2FjgPZsbXtkzPIet0DwFZg%2FNRBXkyY3%2FF3vVR9yi%2Bg4mK%2F3r60xAIq65dJMeJJfCIMaw05VQtUwkBvYNoqiPVcctGCV26Wnl%2BApGJPR6IXA2ptT85ESd9c1lx3%2FW1JIm5JqZA5PDZb3Xs2RRGSPzxn0m8N7&X-Amz-Signature=326ab6769373a36abeebb05f16e4bbd8a1631ea5a7424c9f0539b261a19b405a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C2KBIUY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCKPa%2F4RlRNR9oJS2j%2FO1aypbmwFYAPQIOqFARYua6PWwIhAM2Ysm7o454qxb8N3FgKxo82kq3xoXhxoU8kVIuDQVIVKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4y5cAG1X5w5VACbgq3APXtwwrgiCnLZv9KYp3sdzk8VbmypYleojgteSFAXNwATXybWixApg%2FmpWrFOBct9auYM1pJzHB2MjNlwfPHmFV66hnFQRZSB9JdZgCbUXtLPfjzbp9SxpC40yyKWgwjt1XRQqOquR1dSe84cxt1gJftQEdeUv1OPe1nfI9GRyhyeKpjUpuPci7ntGJG2hfdXHyYxw12yuJIdcYF7BR%2B%2FBYXQeXtQV6KjShLCjsc6pZm7rpajkQJSdqLSr8ziLwIx0n%2FUeUQAv2KZG86uhTrt83ksBGYRdCj1LP6JZZ2gpLF6iDmv%2FUmr5OagIP%2BXWVRmcbavv0E25pNeldThmIUCs1Tvd0j%2BTasiqZ8h3R2qlBsIbMhBs8jwG1xggBGjaHVBAuFq%2BLcRWAQP7Il9d3s9UTGsBYuzxVhu%2FqaAP1M8PQ4jSpTzvGG7De6%2BW8t4bY9eQA9Jm1QOR0dPJ8OCNXY1OjYMWjOZa1VotC7UGYoDq1CwR9TgiUMzh4owa%2FTs%2FANfdS7T8aGg4dI4NJYIBXN0Mmb9u8t%2Bb2vtdVRywVS8KVOs3mGXiYRE6NpjfhtBbn%2B5SrsvAuY2ZoYtJqyodMT3bssUXbhh3xhZXJGYPrbNzMVCDaJW2sPyAMkeUNaDDKxNvEBjqkAWnVa9kPD9gywMg84tCUxWoKViQ1dPAAoU6RE6wFg9hIR%2Bm9H9w8o9L7mIuGQNbLqdADiShoVjcdm0XgwkywMp8w%2ByERStwaSZrTxgZ8pmsODzJREuVhKDq%2BTBGoG6mHqV7l1mNy1sIUi%2BIapxdIt6CR4Ks3R0wuFwm3%2BZvUNACAlNNEFwgZelQpmBvgir7kfPMaO5WsS8Lq1zsNlW8aFvmELuB4&X-Amz-Signature=074296eeadafc48fde2024630c9d5a2e6a4b101893cd70820461507a829270e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>final code:</summary>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C2KBIUY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCKPa%2F4RlRNR9oJS2j%2FO1aypbmwFYAPQIOqFARYua6PWwIhAM2Ysm7o454qxb8N3FgKxo82kq3xoXhxoU8kVIuDQVIVKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4y5cAG1X5w5VACbgq3APXtwwrgiCnLZv9KYp3sdzk8VbmypYleojgteSFAXNwATXybWixApg%2FmpWrFOBct9auYM1pJzHB2MjNlwfPHmFV66hnFQRZSB9JdZgCbUXtLPfjzbp9SxpC40yyKWgwjt1XRQqOquR1dSe84cxt1gJftQEdeUv1OPe1nfI9GRyhyeKpjUpuPci7ntGJG2hfdXHyYxw12yuJIdcYF7BR%2B%2FBYXQeXtQV6KjShLCjsc6pZm7rpajkQJSdqLSr8ziLwIx0n%2FUeUQAv2KZG86uhTrt83ksBGYRdCj1LP6JZZ2gpLF6iDmv%2FUmr5OagIP%2BXWVRmcbavv0E25pNeldThmIUCs1Tvd0j%2BTasiqZ8h3R2qlBsIbMhBs8jwG1xggBGjaHVBAuFq%2BLcRWAQP7Il9d3s9UTGsBYuzxVhu%2FqaAP1M8PQ4jSpTzvGG7De6%2BW8t4bY9eQA9Jm1QOR0dPJ8OCNXY1OjYMWjOZa1VotC7UGYoDq1CwR9TgiUMzh4owa%2FTs%2FANfdS7T8aGg4dI4NJYIBXN0Mmb9u8t%2Bb2vtdVRywVS8KVOs3mGXiYRE6NpjfhtBbn%2B5SrsvAuY2ZoYtJqyodMT3bssUXbhh3xhZXJGYPrbNzMVCDaJW2sPyAMkeUNaDDKxNvEBjqkAWnVa9kPD9gywMg84tCUxWoKViQ1dPAAoU6RE6wFg9hIR%2Bm9H9w8o9L7mIuGQNbLqdADiShoVjcdm0XgwkywMp8w%2ByERStwaSZrTxgZ8pmsODzJREuVhKDq%2BTBGoG6mHqV7l1mNy1sIUi%2BIapxdIt6CR4Ks3R0wuFwm3%2BZvUNACAlNNEFwgZelQpmBvgir7kfPMaO5WsS8Lq1zsNlW8aFvmELuB4&X-Amz-Signature=709358dd468e747216564239360881cff55a9a055820acdd36d0cd354d4ed258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVIULSR2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIC3posInXDR6FwwXdNUS506JChnL8Z6e0%2Br5PWvSwCUYAiEAwGw2ekCm8CvujOGcyaiHBsHZfzhuDEw%2FmKtYPg%2FHxrwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2F7hnwgDl1T53ee1SrcA9v9pjIzdFqOuyn7%2Bi8a5MtJugMHPNNCSwdMi7BtDPhX7EY%2BHLmAM922w2sYh5HhqAM7vZ5x03xjkSp1kIjDrut2NAlL6Tc1uLhmJzhaODC3hSRJUNZhObnSsbehiTI5zAO%2BaaC3uN%2BUUPZQZOuSK6JIW0SCpDGO%2Ftb8VR4q%2Bts%2B%2FNuNaVqby6HaXYRGZ3xbx00tJx6NcvNAvjEE3zhjLW5S%2FGo15oTWIaK84ENd7eixXfo95yf4sdQM%2BAJE6ZBlpgyOCwy3BbN8vXKkdAh0OrbC02K1fIiwo1QXxamRHi56SA4sok6K5AQE4NnzbF2a1E7HM4MH4GKNWc%2B7JIjim5WyAGKXlEGUa5ZvrB4RpQrt52fXLD6E2YDZFg%2B3XSbhDaHX2gjZamHypM9ujR9Ay1qm17EglmVnfj7UpizpVqlTJkCBHoofXrMKWA%2FoUgLq9tnIqgOo8r1%2FDozI75oN3XSBJQFp%2BjmT7D2QHbni6HWVKLnQn5K3L8UUFKZvRCwpZf2o73Csj7NnIX%2BTy0Mpq1cuAex7BNG8lbVcU1%2FC95%2BORKwMnKoH05PTBrquaeC4UTXJLscF9GX0ifE03zn6TskFAaeIatt5uhbxSTD51XbjktK1S63M8%2FOUVqwHMN3E28QGOqUBPh58wSfGo1DOLLGdpo7oUW%2BWZHWVVx6K5%2BtJ0ybwl%2FuMj7zHYz50CG%2BlxZaI5JP9WoD5mxhi3YOjlc%2F%2FPbEnRYOGXeYNqtFqSwulznxzrUF629GMjU%2BiBnYOiVd0tqnzTMutfEAECCpYZKRpEcHwprqSkngsVKBQ44z5ZLRXBuc3hw5IdtzSZomMTkZ7tMP0yXEoyPdFLMvSxBkB%2B%2Fepr4V6M6Tu&X-Amz-Signature=f0cbbba30ee192496dccc1cc7341671da34169d42467f6f80d0c5b6faeb69225&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVIULSR2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIC3posInXDR6FwwXdNUS506JChnL8Z6e0%2Br5PWvSwCUYAiEAwGw2ekCm8CvujOGcyaiHBsHZfzhuDEw%2FmKtYPg%2FHxrwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2F7hnwgDl1T53ee1SrcA9v9pjIzdFqOuyn7%2Bi8a5MtJugMHPNNCSwdMi7BtDPhX7EY%2BHLmAM922w2sYh5HhqAM7vZ5x03xjkSp1kIjDrut2NAlL6Tc1uLhmJzhaODC3hSRJUNZhObnSsbehiTI5zAO%2BaaC3uN%2BUUPZQZOuSK6JIW0SCpDGO%2Ftb8VR4q%2Bts%2B%2FNuNaVqby6HaXYRGZ3xbx00tJx6NcvNAvjEE3zhjLW5S%2FGo15oTWIaK84ENd7eixXfo95yf4sdQM%2BAJE6ZBlpgyOCwy3BbN8vXKkdAh0OrbC02K1fIiwo1QXxamRHi56SA4sok6K5AQE4NnzbF2a1E7HM4MH4GKNWc%2B7JIjim5WyAGKXlEGUa5ZvrB4RpQrt52fXLD6E2YDZFg%2B3XSbhDaHX2gjZamHypM9ujR9Ay1qm17EglmVnfj7UpizpVqlTJkCBHoofXrMKWA%2FoUgLq9tnIqgOo8r1%2FDozI75oN3XSBJQFp%2BjmT7D2QHbni6HWVKLnQn5K3L8UUFKZvRCwpZf2o73Csj7NnIX%2BTy0Mpq1cuAex7BNG8lbVcU1%2FC95%2BORKwMnKoH05PTBrquaeC4UTXJLscF9GX0ifE03zn6TskFAaeIatt5uhbxSTD51XbjktK1S63M8%2FOUVqwHMN3E28QGOqUBPh58wSfGo1DOLLGdpo7oUW%2BWZHWVVx6K5%2BtJ0ybwl%2FuMj7zHYz50CG%2BlxZaI5JP9WoD5mxhi3YOjlc%2F%2FPbEnRYOGXeYNqtFqSwulznxzrUF629GMjU%2BiBnYOiVd0tqnzTMutfEAECCpYZKRpEcHwprqSkngsVKBQ44z5ZLRXBuc3hw5IdtzSZomMTkZ7tMP0yXEoyPdFLMvSxBkB%2B%2Fepr4V6M6Tu&X-Amz-Signature=418d3f68236aea0a6d045263ba6abbd8ae355dc52e422c83d4eec4a856e5b724&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVIULSR2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIC3posInXDR6FwwXdNUS506JChnL8Z6e0%2Br5PWvSwCUYAiEAwGw2ekCm8CvujOGcyaiHBsHZfzhuDEw%2FmKtYPg%2FHxrwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2F7hnwgDl1T53ee1SrcA9v9pjIzdFqOuyn7%2Bi8a5MtJugMHPNNCSwdMi7BtDPhX7EY%2BHLmAM922w2sYh5HhqAM7vZ5x03xjkSp1kIjDrut2NAlL6Tc1uLhmJzhaODC3hSRJUNZhObnSsbehiTI5zAO%2BaaC3uN%2BUUPZQZOuSK6JIW0SCpDGO%2Ftb8VR4q%2Bts%2B%2FNuNaVqby6HaXYRGZ3xbx00tJx6NcvNAvjEE3zhjLW5S%2FGo15oTWIaK84ENd7eixXfo95yf4sdQM%2BAJE6ZBlpgyOCwy3BbN8vXKkdAh0OrbC02K1fIiwo1QXxamRHi56SA4sok6K5AQE4NnzbF2a1E7HM4MH4GKNWc%2B7JIjim5WyAGKXlEGUa5ZvrB4RpQrt52fXLD6E2YDZFg%2B3XSbhDaHX2gjZamHypM9ujR9Ay1qm17EglmVnfj7UpizpVqlTJkCBHoofXrMKWA%2FoUgLq9tnIqgOo8r1%2FDozI75oN3XSBJQFp%2BjmT7D2QHbni6HWVKLnQn5K3L8UUFKZvRCwpZf2o73Csj7NnIX%2BTy0Mpq1cuAex7BNG8lbVcU1%2FC95%2BORKwMnKoH05PTBrquaeC4UTXJLscF9GX0ifE03zn6TskFAaeIatt5uhbxSTD51XbjktK1S63M8%2FOUVqwHMN3E28QGOqUBPh58wSfGo1DOLLGdpo7oUW%2BWZHWVVx6K5%2BtJ0ybwl%2FuMj7zHYz50CG%2BlxZaI5JP9WoD5mxhi3YOjlc%2F%2FPbEnRYOGXeYNqtFqSwulznxzrUF629GMjU%2BiBnYOiVd0tqnzTMutfEAECCpYZKRpEcHwprqSkngsVKBQ44z5ZLRXBuc3hw5IdtzSZomMTkZ7tMP0yXEoyPdFLMvSxBkB%2B%2Fepr4V6M6Tu&X-Amz-Signature=ca3f6374518246eed696d0de0d049f743b1c12e31ba31ad7a7153904fb7ceebc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVIULSR2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIC3posInXDR6FwwXdNUS506JChnL8Z6e0%2Br5PWvSwCUYAiEAwGw2ekCm8CvujOGcyaiHBsHZfzhuDEw%2FmKtYPg%2FHxrwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2F7hnwgDl1T53ee1SrcA9v9pjIzdFqOuyn7%2Bi8a5MtJugMHPNNCSwdMi7BtDPhX7EY%2BHLmAM922w2sYh5HhqAM7vZ5x03xjkSp1kIjDrut2NAlL6Tc1uLhmJzhaODC3hSRJUNZhObnSsbehiTI5zAO%2BaaC3uN%2BUUPZQZOuSK6JIW0SCpDGO%2Ftb8VR4q%2Bts%2B%2FNuNaVqby6HaXYRGZ3xbx00tJx6NcvNAvjEE3zhjLW5S%2FGo15oTWIaK84ENd7eixXfo95yf4sdQM%2BAJE6ZBlpgyOCwy3BbN8vXKkdAh0OrbC02K1fIiwo1QXxamRHi56SA4sok6K5AQE4NnzbF2a1E7HM4MH4GKNWc%2B7JIjim5WyAGKXlEGUa5ZvrB4RpQrt52fXLD6E2YDZFg%2B3XSbhDaHX2gjZamHypM9ujR9Ay1qm17EglmVnfj7UpizpVqlTJkCBHoofXrMKWA%2FoUgLq9tnIqgOo8r1%2FDozI75oN3XSBJQFp%2BjmT7D2QHbni6HWVKLnQn5K3L8UUFKZvRCwpZf2o73Csj7NnIX%2BTy0Mpq1cuAex7BNG8lbVcU1%2FC95%2BORKwMnKoH05PTBrquaeC4UTXJLscF9GX0ifE03zn6TskFAaeIatt5uhbxSTD51XbjktK1S63M8%2FOUVqwHMN3E28QGOqUBPh58wSfGo1DOLLGdpo7oUW%2BWZHWVVx6K5%2BtJ0ybwl%2FuMj7zHYz50CG%2BlxZaI5JP9WoD5mxhi3YOjlc%2F%2FPbEnRYOGXeYNqtFqSwulznxzrUF629GMjU%2BiBnYOiVd0tqnzTMutfEAECCpYZKRpEcHwprqSkngsVKBQ44z5ZLRXBuc3hw5IdtzSZomMTkZ7tMP0yXEoyPdFLMvSxBkB%2B%2Fepr4V6M6Tu&X-Amz-Signature=2e96289a7f1de9944d35e6125c757db77d9ef443b97f21f61283d63d2f0030f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVIULSR2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIC3posInXDR6FwwXdNUS506JChnL8Z6e0%2Br5PWvSwCUYAiEAwGw2ekCm8CvujOGcyaiHBsHZfzhuDEw%2FmKtYPg%2FHxrwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2F7hnwgDl1T53ee1SrcA9v9pjIzdFqOuyn7%2Bi8a5MtJugMHPNNCSwdMi7BtDPhX7EY%2BHLmAM922w2sYh5HhqAM7vZ5x03xjkSp1kIjDrut2NAlL6Tc1uLhmJzhaODC3hSRJUNZhObnSsbehiTI5zAO%2BaaC3uN%2BUUPZQZOuSK6JIW0SCpDGO%2Ftb8VR4q%2Bts%2B%2FNuNaVqby6HaXYRGZ3xbx00tJx6NcvNAvjEE3zhjLW5S%2FGo15oTWIaK84ENd7eixXfo95yf4sdQM%2BAJE6ZBlpgyOCwy3BbN8vXKkdAh0OrbC02K1fIiwo1QXxamRHi56SA4sok6K5AQE4NnzbF2a1E7HM4MH4GKNWc%2B7JIjim5WyAGKXlEGUa5ZvrB4RpQrt52fXLD6E2YDZFg%2B3XSbhDaHX2gjZamHypM9ujR9Ay1qm17EglmVnfj7UpizpVqlTJkCBHoofXrMKWA%2FoUgLq9tnIqgOo8r1%2FDozI75oN3XSBJQFp%2BjmT7D2QHbni6HWVKLnQn5K3L8UUFKZvRCwpZf2o73Csj7NnIX%2BTy0Mpq1cuAex7BNG8lbVcU1%2FC95%2BORKwMnKoH05PTBrquaeC4UTXJLscF9GX0ifE03zn6TskFAaeIatt5uhbxSTD51XbjktK1S63M8%2FOUVqwHMN3E28QGOqUBPh58wSfGo1DOLLGdpo7oUW%2BWZHWVVx6K5%2BtJ0ybwl%2FuMj7zHYz50CG%2BlxZaI5JP9WoD5mxhi3YOjlc%2F%2FPbEnRYOGXeYNqtFqSwulznxzrUF629GMjU%2BiBnYOiVd0tqnzTMutfEAECCpYZKRpEcHwprqSkngsVKBQ44z5ZLRXBuc3hw5IdtzSZomMTkZ7tMP0yXEoyPdFLMvSxBkB%2B%2Fepr4V6M6Tu&X-Amz-Signature=ba130d000cf7f1209327b2b81d0c111e0024b40c52a063ffb595bf3d17c4239e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Move config.rviz

<details>
      <summary>What is rviz?</summary>
      TODO: explain rviz better (say how it is like ros2 echo but visual)
  </details>

create `rviz` folder in `mbot_pkg` and move the `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVIULSR2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIC3posInXDR6FwwXdNUS506JChnL8Z6e0%2Br5PWvSwCUYAiEAwGw2ekCm8CvujOGcyaiHBsHZfzhuDEw%2FmKtYPg%2FHxrwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2F7hnwgDl1T53ee1SrcA9v9pjIzdFqOuyn7%2Bi8a5MtJugMHPNNCSwdMi7BtDPhX7EY%2BHLmAM922w2sYh5HhqAM7vZ5x03xjkSp1kIjDrut2NAlL6Tc1uLhmJzhaODC3hSRJUNZhObnSsbehiTI5zAO%2BaaC3uN%2BUUPZQZOuSK6JIW0SCpDGO%2Ftb8VR4q%2Bts%2B%2FNuNaVqby6HaXYRGZ3xbx00tJx6NcvNAvjEE3zhjLW5S%2FGo15oTWIaK84ENd7eixXfo95yf4sdQM%2BAJE6ZBlpgyOCwy3BbN8vXKkdAh0OrbC02K1fIiwo1QXxamRHi56SA4sok6K5AQE4NnzbF2a1E7HM4MH4GKNWc%2B7JIjim5WyAGKXlEGUa5ZvrB4RpQrt52fXLD6E2YDZFg%2B3XSbhDaHX2gjZamHypM9ujR9Ay1qm17EglmVnfj7UpizpVqlTJkCBHoofXrMKWA%2FoUgLq9tnIqgOo8r1%2FDozI75oN3XSBJQFp%2BjmT7D2QHbni6HWVKLnQn5K3L8UUFKZvRCwpZf2o73Csj7NnIX%2BTy0Mpq1cuAex7BNG8lbVcU1%2FC95%2BORKwMnKoH05PTBrquaeC4UTXJLscF9GX0ifE03zn6TskFAaeIatt5uhbxSTD51XbjktK1S63M8%2FOUVqwHMN3E28QGOqUBPh58wSfGo1DOLLGdpo7oUW%2BWZHWVVx6K5%2BtJ0ybwl%2FuMj7zHYz50CG%2BlxZaI5JP9WoD5mxhi3YOjlc%2F%2FPbEnRYOGXeYNqtFqSwulznxzrUF629GMjU%2BiBnYOiVd0tqnzTMutfEAECCpYZKRpEcHwprqSkngsVKBQ44z5ZLRXBuc3hw5IdtzSZomMTkZ7tMP0yXEoyPdFLMvSxBkB%2B%2Fepr4V6M6Tu&X-Amz-Signature=b7f8084a5d28f3a18dcd4cbc939457b3ad8c49040a7f65639ffa3840d3b5b6e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVIULSR2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIC3posInXDR6FwwXdNUS506JChnL8Z6e0%2Br5PWvSwCUYAiEAwGw2ekCm8CvujOGcyaiHBsHZfzhuDEw%2FmKtYPg%2FHxrwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2F7hnwgDl1T53ee1SrcA9v9pjIzdFqOuyn7%2Bi8a5MtJugMHPNNCSwdMi7BtDPhX7EY%2BHLmAM922w2sYh5HhqAM7vZ5x03xjkSp1kIjDrut2NAlL6Tc1uLhmJzhaODC3hSRJUNZhObnSsbehiTI5zAO%2BaaC3uN%2BUUPZQZOuSK6JIW0SCpDGO%2Ftb8VR4q%2Bts%2B%2FNuNaVqby6HaXYRGZ3xbx00tJx6NcvNAvjEE3zhjLW5S%2FGo15oTWIaK84ENd7eixXfo95yf4sdQM%2BAJE6ZBlpgyOCwy3BbN8vXKkdAh0OrbC02K1fIiwo1QXxamRHi56SA4sok6K5AQE4NnzbF2a1E7HM4MH4GKNWc%2B7JIjim5WyAGKXlEGUa5ZvrB4RpQrt52fXLD6E2YDZFg%2B3XSbhDaHX2gjZamHypM9ujR9Ay1qm17EglmVnfj7UpizpVqlTJkCBHoofXrMKWA%2FoUgLq9tnIqgOo8r1%2FDozI75oN3XSBJQFp%2BjmT7D2QHbni6HWVKLnQn5K3L8UUFKZvRCwpZf2o73Csj7NnIX%2BTy0Mpq1cuAex7BNG8lbVcU1%2FC95%2BORKwMnKoH05PTBrquaeC4UTXJLscF9GX0ifE03zn6TskFAaeIatt5uhbxSTD51XbjktK1S63M8%2FOUVqwHMN3E28QGOqUBPh58wSfGo1DOLLGdpo7oUW%2BWZHWVVx6K5%2BtJ0ybwl%2FuMj7zHYz50CG%2BlxZaI5JP9WoD5mxhi3YOjlc%2F%2FPbEnRYOGXeYNqtFqSwulznxzrUF629GMjU%2BiBnYOiVd0tqnzTMutfEAECCpYZKRpEcHwprqSkngsVKBQ44z5ZLRXBuc3hw5IdtzSZomMTkZ7tMP0yXEoyPdFLMvSxBkB%2B%2Fepr4V6M6Tu&X-Amz-Signature=ca3f6374518246eed696d0de0d049f743b1c12e31ba31ad7a7153904fb7ceebc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Launch file

<details>
      <summary>What is in this launch file?</summary>
      [launch files guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/launch-files/)
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

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVIULSR2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIC3posInXDR6FwwXdNUS506JChnL8Z6e0%2Br5PWvSwCUYAiEAwGw2ekCm8CvujOGcyaiHBsHZfzhuDEw%2FmKtYPg%2FHxrwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2F7hnwgDl1T53ee1SrcA9v9pjIzdFqOuyn7%2Bi8a5MtJugMHPNNCSwdMi7BtDPhX7EY%2BHLmAM922w2sYh5HhqAM7vZ5x03xjkSp1kIjDrut2NAlL6Tc1uLhmJzhaODC3hSRJUNZhObnSsbehiTI5zAO%2BaaC3uN%2BUUPZQZOuSK6JIW0SCpDGO%2Ftb8VR4q%2Bts%2B%2FNuNaVqby6HaXYRGZ3xbx00tJx6NcvNAvjEE3zhjLW5S%2FGo15oTWIaK84ENd7eixXfo95yf4sdQM%2BAJE6ZBlpgyOCwy3BbN8vXKkdAh0OrbC02K1fIiwo1QXxamRHi56SA4sok6K5AQE4NnzbF2a1E7HM4MH4GKNWc%2B7JIjim5WyAGKXlEGUa5ZvrB4RpQrt52fXLD6E2YDZFg%2B3XSbhDaHX2gjZamHypM9ujR9Ay1qm17EglmVnfj7UpizpVqlTJkCBHoofXrMKWA%2FoUgLq9tnIqgOo8r1%2FDozI75oN3XSBJQFp%2BjmT7D2QHbni6HWVKLnQn5K3L8UUFKZvRCwpZf2o73Csj7NnIX%2BTy0Mpq1cuAex7BNG8lbVcU1%2FC95%2BORKwMnKoH05PTBrquaeC4UTXJLscF9GX0ifE03zn6TskFAaeIatt5uhbxSTD51XbjktK1S63M8%2FOUVqwHMN3E28QGOqUBPh58wSfGo1DOLLGdpo7oUW%2BWZHWVVx6K5%2BtJ0ybwl%2FuMj7zHYz50CG%2BlxZaI5JP9WoD5mxhi3YOjlc%2F%2FPbEnRYOGXeYNqtFqSwulznxzrUF629GMjU%2BiBnYOiVd0tqnzTMutfEAECCpYZKRpEcHwprqSkngsVKBQ44z5ZLRXBuc3hw5IdtzSZomMTkZ7tMP0yXEoyPdFLMvSxBkB%2B%2Fepr4V6M6Tu&X-Amz-Signature=86270082c66f5fc450b8ede5126334b42aeca9ea98ef14c1d82d5e53a31a43da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVIULSR2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIC3posInXDR6FwwXdNUS506JChnL8Z6e0%2Br5PWvSwCUYAiEAwGw2ekCm8CvujOGcyaiHBsHZfzhuDEw%2FmKtYPg%2FHxrwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2F7hnwgDl1T53ee1SrcA9v9pjIzdFqOuyn7%2Bi8a5MtJugMHPNNCSwdMi7BtDPhX7EY%2BHLmAM922w2sYh5HhqAM7vZ5x03xjkSp1kIjDrut2NAlL6Tc1uLhmJzhaODC3hSRJUNZhObnSsbehiTI5zAO%2BaaC3uN%2BUUPZQZOuSK6JIW0SCpDGO%2Ftb8VR4q%2Bts%2B%2FNuNaVqby6HaXYRGZ3xbx00tJx6NcvNAvjEE3zhjLW5S%2FGo15oTWIaK84ENd7eixXfo95yf4sdQM%2BAJE6ZBlpgyOCwy3BbN8vXKkdAh0OrbC02K1fIiwo1QXxamRHi56SA4sok6K5AQE4NnzbF2a1E7HM4MH4GKNWc%2B7JIjim5WyAGKXlEGUa5ZvrB4RpQrt52fXLD6E2YDZFg%2B3XSbhDaHX2gjZamHypM9ujR9Ay1qm17EglmVnfj7UpizpVqlTJkCBHoofXrMKWA%2FoUgLq9tnIqgOo8r1%2FDozI75oN3XSBJQFp%2BjmT7D2QHbni6HWVKLnQn5K3L8UUFKZvRCwpZf2o73Csj7NnIX%2BTy0Mpq1cuAex7BNG8lbVcU1%2FC95%2BORKwMnKoH05PTBrquaeC4UTXJLscF9GX0ifE03zn6TskFAaeIatt5uhbxSTD51XbjktK1S63M8%2FOUVqwHMN3E28QGOqUBPh58wSfGo1DOLLGdpo7oUW%2BWZHWVVx6K5%2BtJ0ybwl%2FuMj7zHYz50CG%2BlxZaI5JP9WoD5mxhi3YOjlc%2F%2FPbEnRYOGXeYNqtFqSwulznxzrUF629GMjU%2BiBnYOiVd0tqnzTMutfEAECCpYZKRpEcHwprqSkngsVKBQ44z5ZLRXBuc3hw5IdtzSZomMTkZ7tMP0yXEoyPdFLMvSxBkB%2B%2Fepr4V6M6Tu&X-Amz-Signature=772d5c65c51cebe454a9a1cb5535523df0502d8d2fcfa233cd68da74e5e9fcad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVIULSR2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIC3posInXDR6FwwXdNUS506JChnL8Z6e0%2Br5PWvSwCUYAiEAwGw2ekCm8CvujOGcyaiHBsHZfzhuDEw%2FmKtYPg%2FHxrwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2F7hnwgDl1T53ee1SrcA9v9pjIzdFqOuyn7%2Bi8a5MtJugMHPNNCSwdMi7BtDPhX7EY%2BHLmAM922w2sYh5HhqAM7vZ5x03xjkSp1kIjDrut2NAlL6Tc1uLhmJzhaODC3hSRJUNZhObnSsbehiTI5zAO%2BaaC3uN%2BUUPZQZOuSK6JIW0SCpDGO%2Ftb8VR4q%2Bts%2B%2FNuNaVqby6HaXYRGZ3xbx00tJx6NcvNAvjEE3zhjLW5S%2FGo15oTWIaK84ENd7eixXfo95yf4sdQM%2BAJE6ZBlpgyOCwy3BbN8vXKkdAh0OrbC02K1fIiwo1QXxamRHi56SA4sok6K5AQE4NnzbF2a1E7HM4MH4GKNWc%2B7JIjim5WyAGKXlEGUa5ZvrB4RpQrt52fXLD6E2YDZFg%2B3XSbhDaHX2gjZamHypM9ujR9Ay1qm17EglmVnfj7UpizpVqlTJkCBHoofXrMKWA%2FoUgLq9tnIqgOo8r1%2FDozI75oN3XSBJQFp%2BjmT7D2QHbni6HWVKLnQn5K3L8UUFKZvRCwpZf2o73Csj7NnIX%2BTy0Mpq1cuAex7BNG8lbVcU1%2FC95%2BORKwMnKoH05PTBrquaeC4UTXJLscF9GX0ifE03zn6TskFAaeIatt5uhbxSTD51XbjktK1S63M8%2FOUVqwHMN3E28QGOqUBPh58wSfGo1DOLLGdpo7oUW%2BWZHWVVx6K5%2BtJ0ybwl%2FuMj7zHYz50CG%2BlxZaI5JP9WoD5mxhi3YOjlc%2F%2FPbEnRYOGXeYNqtFqSwulznxzrUF629GMjU%2BiBnYOiVd0tqnzTMutfEAECCpYZKRpEcHwprqSkngsVKBQ44z5ZLRXBuc3hw5IdtzSZomMTkZ7tMP0yXEoyPdFLMvSxBkB%2B%2Fepr4V6M6Tu&X-Amz-Signature=86219610a933565fa1a9862177cf0c10da0456cf697cd200f787cbd643a27391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
