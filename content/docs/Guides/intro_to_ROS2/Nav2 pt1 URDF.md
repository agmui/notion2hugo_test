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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIZ3YGFS%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIBFVK6JWkU5OpQ36q2LokCm3jzz6Odoy48gRD%2BKrFd0DAiBmgt5OaWwqPokFk%2FE8HiJBC%2F1tStw6UP5TU%2ByE8rxDIiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt1C%2FsCgQFtbqHAVdKtwDTGirXWbFX8og2%2FFXIt1BOojjifnlINAxPyF3z7nf7Z75%2BW7Ht1gdEnqIsrT3RI9AXqyFIqawM0IBdw6nDeBH7dkLbepRMGWG9fw%2Fp2cMzfjnSh7Rz2UYcjBj1i6YOciV%2B6hJl4Ssc4zApQ0AY6N5CQa3ex%2FZpUBnax3jS4uFItZ22m521xIMpIQpSUjci8aVPDt9tf4X5mw9emVoJ4%2BLTSwbUVYji8fczjqNjw12nBXRs7JI6h8MN4hU0krro4pz3Y02mo7TwowxwR4xcepDd6zIzf1v8XHOhzSnm5yjia2S8AxemN0qyjdWAxLtbyPoUDI%2FjTKBasikThxDnuyX8%2FRTxb3kkA6Xfs4xv4nwAMFogMJBILeZz0VbPA459dCd1PbI4xRlkOcYDGBxKalU45Ji%2FMV4ECopSkKgNg8W4ENaSxVyk0s5Tc%2FHZJ9eJe9SSULMQxjrc5Qat22UtfofGPPNs18cfmFyHtBCalxOy5wD5AAL%2BIKjvLg%2FKK%2BoeLKqI3SoRbB5yyZKehJl30EHBEroF8Xm1cSMofDfkb3NQSzIwv0uc5NcmP0KwbhWFy0ca4hnIdciEtaL3x4I4CBb5bWPYUmbP9sPm599XAVysdb0uO%2FgbssKF4TVHcYwjIufxAY6pgG5VCGF%2FDDMRBy3LhsZbRSOo59vw2s3PMyRJ0JeKS241ctr6mL3%2B%2B%2FVvSNGDhAw4BIdw4VuVZbAylOwYr0ECwR3oEvIDW37d111SfYXe706cq2PsbZV0l2DnmxHcGzi%2FPAfYU7%2B8FyOmm%2Brx1VVrVlIM28e4wTAzg7MPE8XMXvFCOlrw3MM2Jzdvce6h5%2F1iY8AzpSabjeyrKoS%2FQ6Jcqkb1ZUC5FGv&X-Amz-Signature=3010b9f40ddd8e92a9ccbc0d917d4ba5ebaa6399c53a64f4d0b7f38cf72f45a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIZ3YGFS%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIBFVK6JWkU5OpQ36q2LokCm3jzz6Odoy48gRD%2BKrFd0DAiBmgt5OaWwqPokFk%2FE8HiJBC%2F1tStw6UP5TU%2ByE8rxDIiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt1C%2FsCgQFtbqHAVdKtwDTGirXWbFX8og2%2FFXIt1BOojjifnlINAxPyF3z7nf7Z75%2BW7Ht1gdEnqIsrT3RI9AXqyFIqawM0IBdw6nDeBH7dkLbepRMGWG9fw%2Fp2cMzfjnSh7Rz2UYcjBj1i6YOciV%2B6hJl4Ssc4zApQ0AY6N5CQa3ex%2FZpUBnax3jS4uFItZ22m521xIMpIQpSUjci8aVPDt9tf4X5mw9emVoJ4%2BLTSwbUVYji8fczjqNjw12nBXRs7JI6h8MN4hU0krro4pz3Y02mo7TwowxwR4xcepDd6zIzf1v8XHOhzSnm5yjia2S8AxemN0qyjdWAxLtbyPoUDI%2FjTKBasikThxDnuyX8%2FRTxb3kkA6Xfs4xv4nwAMFogMJBILeZz0VbPA459dCd1PbI4xRlkOcYDGBxKalU45Ji%2FMV4ECopSkKgNg8W4ENaSxVyk0s5Tc%2FHZJ9eJe9SSULMQxjrc5Qat22UtfofGPPNs18cfmFyHtBCalxOy5wD5AAL%2BIKjvLg%2FKK%2BoeLKqI3SoRbB5yyZKehJl30EHBEroF8Xm1cSMofDfkb3NQSzIwv0uc5NcmP0KwbhWFy0ca4hnIdciEtaL3x4I4CBb5bWPYUmbP9sPm599XAVysdb0uO%2FgbssKF4TVHcYwjIufxAY6pgG5VCGF%2FDDMRBy3LhsZbRSOo59vw2s3PMyRJ0JeKS241ctr6mL3%2B%2B%2FVvSNGDhAw4BIdw4VuVZbAylOwYr0ECwR3oEvIDW37d111SfYXe706cq2PsbZV0l2DnmxHcGzi%2FPAfYU7%2B8FyOmm%2Brx1VVrVlIM28e4wTAzg7MPE8XMXvFCOlrw3MM2Jzdvce6h5%2F1iY8AzpSabjeyrKoS%2FQ6Jcqkb1ZUC5FGv&X-Amz-Signature=0cde19157f734b0e2cc725d1d64fb81eae5940bb12834caef8d80524d9f1c5b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIZ3YGFS%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIBFVK6JWkU5OpQ36q2LokCm3jzz6Odoy48gRD%2BKrFd0DAiBmgt5OaWwqPokFk%2FE8HiJBC%2F1tStw6UP5TU%2ByE8rxDIiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt1C%2FsCgQFtbqHAVdKtwDTGirXWbFX8og2%2FFXIt1BOojjifnlINAxPyF3z7nf7Z75%2BW7Ht1gdEnqIsrT3RI9AXqyFIqawM0IBdw6nDeBH7dkLbepRMGWG9fw%2Fp2cMzfjnSh7Rz2UYcjBj1i6YOciV%2B6hJl4Ssc4zApQ0AY6N5CQa3ex%2FZpUBnax3jS4uFItZ22m521xIMpIQpSUjci8aVPDt9tf4X5mw9emVoJ4%2BLTSwbUVYji8fczjqNjw12nBXRs7JI6h8MN4hU0krro4pz3Y02mo7TwowxwR4xcepDd6zIzf1v8XHOhzSnm5yjia2S8AxemN0qyjdWAxLtbyPoUDI%2FjTKBasikThxDnuyX8%2FRTxb3kkA6Xfs4xv4nwAMFogMJBILeZz0VbPA459dCd1PbI4xRlkOcYDGBxKalU45Ji%2FMV4ECopSkKgNg8W4ENaSxVyk0s5Tc%2FHZJ9eJe9SSULMQxjrc5Qat22UtfofGPPNs18cfmFyHtBCalxOy5wD5AAL%2BIKjvLg%2FKK%2BoeLKqI3SoRbB5yyZKehJl30EHBEroF8Xm1cSMofDfkb3NQSzIwv0uc5NcmP0KwbhWFy0ca4hnIdciEtaL3x4I4CBb5bWPYUmbP9sPm599XAVysdb0uO%2FgbssKF4TVHcYwjIufxAY6pgG5VCGF%2FDDMRBy3LhsZbRSOo59vw2s3PMyRJ0JeKS241ctr6mL3%2B%2B%2FVvSNGDhAw4BIdw4VuVZbAylOwYr0ECwR3oEvIDW37d111SfYXe706cq2PsbZV0l2DnmxHcGzi%2FPAfYU7%2B8FyOmm%2Brx1VVrVlIM28e4wTAzg7MPE8XMXvFCOlrw3MM2Jzdvce6h5%2F1iY8AzpSabjeyrKoS%2FQ6Jcqkb1ZUC5FGv&X-Amz-Signature=e8ef17222a75dd3a9fc465e5e2bf6261e149b7bf1891744429f9bd6a44b8388c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIZ3YGFS%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIBFVK6JWkU5OpQ36q2LokCm3jzz6Odoy48gRD%2BKrFd0DAiBmgt5OaWwqPokFk%2FE8HiJBC%2F1tStw6UP5TU%2ByE8rxDIiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt1C%2FsCgQFtbqHAVdKtwDTGirXWbFX8og2%2FFXIt1BOojjifnlINAxPyF3z7nf7Z75%2BW7Ht1gdEnqIsrT3RI9AXqyFIqawM0IBdw6nDeBH7dkLbepRMGWG9fw%2Fp2cMzfjnSh7Rz2UYcjBj1i6YOciV%2B6hJl4Ssc4zApQ0AY6N5CQa3ex%2FZpUBnax3jS4uFItZ22m521xIMpIQpSUjci8aVPDt9tf4X5mw9emVoJ4%2BLTSwbUVYji8fczjqNjw12nBXRs7JI6h8MN4hU0krro4pz3Y02mo7TwowxwR4xcepDd6zIzf1v8XHOhzSnm5yjia2S8AxemN0qyjdWAxLtbyPoUDI%2FjTKBasikThxDnuyX8%2FRTxb3kkA6Xfs4xv4nwAMFogMJBILeZz0VbPA459dCd1PbI4xRlkOcYDGBxKalU45Ji%2FMV4ECopSkKgNg8W4ENaSxVyk0s5Tc%2FHZJ9eJe9SSULMQxjrc5Qat22UtfofGPPNs18cfmFyHtBCalxOy5wD5AAL%2BIKjvLg%2FKK%2BoeLKqI3SoRbB5yyZKehJl30EHBEroF8Xm1cSMofDfkb3NQSzIwv0uc5NcmP0KwbhWFy0ca4hnIdciEtaL3x4I4CBb5bWPYUmbP9sPm599XAVysdb0uO%2FgbssKF4TVHcYwjIufxAY6pgG5VCGF%2FDDMRBy3LhsZbRSOo59vw2s3PMyRJ0JeKS241ctr6mL3%2B%2B%2FVvSNGDhAw4BIdw4VuVZbAylOwYr0ECwR3oEvIDW37d111SfYXe706cq2PsbZV0l2DnmxHcGzi%2FPAfYU7%2B8FyOmm%2Brx1VVrVlIM28e4wTAzg7MPE8XMXvFCOlrw3MM2Jzdvce6h5%2F1iY8AzpSabjeyrKoS%2FQ6Jcqkb1ZUC5FGv&X-Amz-Signature=ecc367903c87b440b258418cb38d56a85cc936e35f0c2bb838853512b0588fae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIZ3YGFS%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIBFVK6JWkU5OpQ36q2LokCm3jzz6Odoy48gRD%2BKrFd0DAiBmgt5OaWwqPokFk%2FE8HiJBC%2F1tStw6UP5TU%2ByE8rxDIiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt1C%2FsCgQFtbqHAVdKtwDTGirXWbFX8og2%2FFXIt1BOojjifnlINAxPyF3z7nf7Z75%2BW7Ht1gdEnqIsrT3RI9AXqyFIqawM0IBdw6nDeBH7dkLbepRMGWG9fw%2Fp2cMzfjnSh7Rz2UYcjBj1i6YOciV%2B6hJl4Ssc4zApQ0AY6N5CQa3ex%2FZpUBnax3jS4uFItZ22m521xIMpIQpSUjci8aVPDt9tf4X5mw9emVoJ4%2BLTSwbUVYji8fczjqNjw12nBXRs7JI6h8MN4hU0krro4pz3Y02mo7TwowxwR4xcepDd6zIzf1v8XHOhzSnm5yjia2S8AxemN0qyjdWAxLtbyPoUDI%2FjTKBasikThxDnuyX8%2FRTxb3kkA6Xfs4xv4nwAMFogMJBILeZz0VbPA459dCd1PbI4xRlkOcYDGBxKalU45Ji%2FMV4ECopSkKgNg8W4ENaSxVyk0s5Tc%2FHZJ9eJe9SSULMQxjrc5Qat22UtfofGPPNs18cfmFyHtBCalxOy5wD5AAL%2BIKjvLg%2FKK%2BoeLKqI3SoRbB5yyZKehJl30EHBEroF8Xm1cSMofDfkb3NQSzIwv0uc5NcmP0KwbhWFy0ca4hnIdciEtaL3x4I4CBb5bWPYUmbP9sPm599XAVysdb0uO%2FgbssKF4TVHcYwjIufxAY6pgG5VCGF%2FDDMRBy3LhsZbRSOo59vw2s3PMyRJ0JeKS241ctr6mL3%2B%2B%2FVvSNGDhAw4BIdw4VuVZbAylOwYr0ECwR3oEvIDW37d111SfYXe706cq2PsbZV0l2DnmxHcGzi%2FPAfYU7%2B8FyOmm%2Brx1VVrVlIM28e4wTAzg7MPE8XMXvFCOlrw3MM2Jzdvce6h5%2F1iY8AzpSabjeyrKoS%2FQ6Jcqkb1ZUC5FGv&X-Amz-Signature=567d5c12548bf3c190bb9957c74f525644dbb68d3a22916f94c25321ad21c55e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIZ3YGFS%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIBFVK6JWkU5OpQ36q2LokCm3jzz6Odoy48gRD%2BKrFd0DAiBmgt5OaWwqPokFk%2FE8HiJBC%2F1tStw6UP5TU%2ByE8rxDIiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt1C%2FsCgQFtbqHAVdKtwDTGirXWbFX8og2%2FFXIt1BOojjifnlINAxPyF3z7nf7Z75%2BW7Ht1gdEnqIsrT3RI9AXqyFIqawM0IBdw6nDeBH7dkLbepRMGWG9fw%2Fp2cMzfjnSh7Rz2UYcjBj1i6YOciV%2B6hJl4Ssc4zApQ0AY6N5CQa3ex%2FZpUBnax3jS4uFItZ22m521xIMpIQpSUjci8aVPDt9tf4X5mw9emVoJ4%2BLTSwbUVYji8fczjqNjw12nBXRs7JI6h8MN4hU0krro4pz3Y02mo7TwowxwR4xcepDd6zIzf1v8XHOhzSnm5yjia2S8AxemN0qyjdWAxLtbyPoUDI%2FjTKBasikThxDnuyX8%2FRTxb3kkA6Xfs4xv4nwAMFogMJBILeZz0VbPA459dCd1PbI4xRlkOcYDGBxKalU45Ji%2FMV4ECopSkKgNg8W4ENaSxVyk0s5Tc%2FHZJ9eJe9SSULMQxjrc5Qat22UtfofGPPNs18cfmFyHtBCalxOy5wD5AAL%2BIKjvLg%2FKK%2BoeLKqI3SoRbB5yyZKehJl30EHBEroF8Xm1cSMofDfkb3NQSzIwv0uc5NcmP0KwbhWFy0ca4hnIdciEtaL3x4I4CBb5bWPYUmbP9sPm599XAVysdb0uO%2FgbssKF4TVHcYwjIufxAY6pgG5VCGF%2FDDMRBy3LhsZbRSOo59vw2s3PMyRJ0JeKS241ctr6mL3%2B%2B%2FVvSNGDhAw4BIdw4VuVZbAylOwYr0ECwR3oEvIDW37d111SfYXe706cq2PsbZV0l2DnmxHcGzi%2FPAfYU7%2B8FyOmm%2Brx1VVrVlIM28e4wTAzg7MPE8XMXvFCOlrw3MM2Jzdvce6h5%2F1iY8AzpSabjeyrKoS%2FQ6Jcqkb1ZUC5FGv&X-Amz-Signature=5a59c3749edc9cb6572f47749d560f1d7819d1d94831de59e6eddf54c5baaaa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIZ3YGFS%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIBFVK6JWkU5OpQ36q2LokCm3jzz6Odoy48gRD%2BKrFd0DAiBmgt5OaWwqPokFk%2FE8HiJBC%2F1tStw6UP5TU%2ByE8rxDIiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt1C%2FsCgQFtbqHAVdKtwDTGirXWbFX8og2%2FFXIt1BOojjifnlINAxPyF3z7nf7Z75%2BW7Ht1gdEnqIsrT3RI9AXqyFIqawM0IBdw6nDeBH7dkLbepRMGWG9fw%2Fp2cMzfjnSh7Rz2UYcjBj1i6YOciV%2B6hJl4Ssc4zApQ0AY6N5CQa3ex%2FZpUBnax3jS4uFItZ22m521xIMpIQpSUjci8aVPDt9tf4X5mw9emVoJ4%2BLTSwbUVYji8fczjqNjw12nBXRs7JI6h8MN4hU0krro4pz3Y02mo7TwowxwR4xcepDd6zIzf1v8XHOhzSnm5yjia2S8AxemN0qyjdWAxLtbyPoUDI%2FjTKBasikThxDnuyX8%2FRTxb3kkA6Xfs4xv4nwAMFogMJBILeZz0VbPA459dCd1PbI4xRlkOcYDGBxKalU45Ji%2FMV4ECopSkKgNg8W4ENaSxVyk0s5Tc%2FHZJ9eJe9SSULMQxjrc5Qat22UtfofGPPNs18cfmFyHtBCalxOy5wD5AAL%2BIKjvLg%2FKK%2BoeLKqI3SoRbB5yyZKehJl30EHBEroF8Xm1cSMofDfkb3NQSzIwv0uc5NcmP0KwbhWFy0ca4hnIdciEtaL3x4I4CBb5bWPYUmbP9sPm599XAVysdb0uO%2FgbssKF4TVHcYwjIufxAY6pgG5VCGF%2FDDMRBy3LhsZbRSOo59vw2s3PMyRJ0JeKS241ctr6mL3%2B%2B%2FVvSNGDhAw4BIdw4VuVZbAylOwYr0ECwR3oEvIDW37d111SfYXe706cq2PsbZV0l2DnmxHcGzi%2FPAfYU7%2B8FyOmm%2Brx1VVrVlIM28e4wTAzg7MPE8XMXvFCOlrw3MM2Jzdvce6h5%2F1iY8AzpSabjeyrKoS%2FQ6Jcqkb1ZUC5FGv&X-Amz-Signature=1ce6f18dfc836ae0012cc392e292d9c0ff8272a2e3da1bd54d5d45fee35f726d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIZ3YGFS%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIBFVK6JWkU5OpQ36q2LokCm3jzz6Odoy48gRD%2BKrFd0DAiBmgt5OaWwqPokFk%2FE8HiJBC%2F1tStw6UP5TU%2ByE8rxDIiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt1C%2FsCgQFtbqHAVdKtwDTGirXWbFX8og2%2FFXIt1BOojjifnlINAxPyF3z7nf7Z75%2BW7Ht1gdEnqIsrT3RI9AXqyFIqawM0IBdw6nDeBH7dkLbepRMGWG9fw%2Fp2cMzfjnSh7Rz2UYcjBj1i6YOciV%2B6hJl4Ssc4zApQ0AY6N5CQa3ex%2FZpUBnax3jS4uFItZ22m521xIMpIQpSUjci8aVPDt9tf4X5mw9emVoJ4%2BLTSwbUVYji8fczjqNjw12nBXRs7JI6h8MN4hU0krro4pz3Y02mo7TwowxwR4xcepDd6zIzf1v8XHOhzSnm5yjia2S8AxemN0qyjdWAxLtbyPoUDI%2FjTKBasikThxDnuyX8%2FRTxb3kkA6Xfs4xv4nwAMFogMJBILeZz0VbPA459dCd1PbI4xRlkOcYDGBxKalU45Ji%2FMV4ECopSkKgNg8W4ENaSxVyk0s5Tc%2FHZJ9eJe9SSULMQxjrc5Qat22UtfofGPPNs18cfmFyHtBCalxOy5wD5AAL%2BIKjvLg%2FKK%2BoeLKqI3SoRbB5yyZKehJl30EHBEroF8Xm1cSMofDfkb3NQSzIwv0uc5NcmP0KwbhWFy0ca4hnIdciEtaL3x4I4CBb5bWPYUmbP9sPm599XAVysdb0uO%2FgbssKF4TVHcYwjIufxAY6pgG5VCGF%2FDDMRBy3LhsZbRSOo59vw2s3PMyRJ0JeKS241ctr6mL3%2B%2B%2FVvSNGDhAw4BIdw4VuVZbAylOwYr0ECwR3oEvIDW37d111SfYXe706cq2PsbZV0l2DnmxHcGzi%2FPAfYU7%2B8FyOmm%2Brx1VVrVlIM28e4wTAzg7MPE8XMXvFCOlrw3MM2Jzdvce6h5%2F1iY8AzpSabjeyrKoS%2FQ6Jcqkb1ZUC5FGv&X-Amz-Signature=3106bf415a919eedee63783fc6c408f70e8f283ab94f705e1c490531f13e12a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIZ3YGFS%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIBFVK6JWkU5OpQ36q2LokCm3jzz6Odoy48gRD%2BKrFd0DAiBmgt5OaWwqPokFk%2FE8HiJBC%2F1tStw6UP5TU%2ByE8rxDIiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt1C%2FsCgQFtbqHAVdKtwDTGirXWbFX8og2%2FFXIt1BOojjifnlINAxPyF3z7nf7Z75%2BW7Ht1gdEnqIsrT3RI9AXqyFIqawM0IBdw6nDeBH7dkLbepRMGWG9fw%2Fp2cMzfjnSh7Rz2UYcjBj1i6YOciV%2B6hJl4Ssc4zApQ0AY6N5CQa3ex%2FZpUBnax3jS4uFItZ22m521xIMpIQpSUjci8aVPDt9tf4X5mw9emVoJ4%2BLTSwbUVYji8fczjqNjw12nBXRs7JI6h8MN4hU0krro4pz3Y02mo7TwowxwR4xcepDd6zIzf1v8XHOhzSnm5yjia2S8AxemN0qyjdWAxLtbyPoUDI%2FjTKBasikThxDnuyX8%2FRTxb3kkA6Xfs4xv4nwAMFogMJBILeZz0VbPA459dCd1PbI4xRlkOcYDGBxKalU45Ji%2FMV4ECopSkKgNg8W4ENaSxVyk0s5Tc%2FHZJ9eJe9SSULMQxjrc5Qat22UtfofGPPNs18cfmFyHtBCalxOy5wD5AAL%2BIKjvLg%2FKK%2BoeLKqI3SoRbB5yyZKehJl30EHBEroF8Xm1cSMofDfkb3NQSzIwv0uc5NcmP0KwbhWFy0ca4hnIdciEtaL3x4I4CBb5bWPYUmbP9sPm599XAVysdb0uO%2FgbssKF4TVHcYwjIufxAY6pgG5VCGF%2FDDMRBy3LhsZbRSOo59vw2s3PMyRJ0JeKS241ctr6mL3%2B%2B%2FVvSNGDhAw4BIdw4VuVZbAylOwYr0ECwR3oEvIDW37d111SfYXe706cq2PsbZV0l2DnmxHcGzi%2FPAfYU7%2B8FyOmm%2Brx1VVrVlIM28e4wTAzg7MPE8XMXvFCOlrw3MM2Jzdvce6h5%2F1iY8AzpSabjeyrKoS%2FQ6Jcqkb1ZUC5FGv&X-Amz-Signature=287039814007930884d258493950a020b78b274366316b4269cee2f1bf60985e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIZ3YGFS%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIBFVK6JWkU5OpQ36q2LokCm3jzz6Odoy48gRD%2BKrFd0DAiBmgt5OaWwqPokFk%2FE8HiJBC%2F1tStw6UP5TU%2ByE8rxDIiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt1C%2FsCgQFtbqHAVdKtwDTGirXWbFX8og2%2FFXIt1BOojjifnlINAxPyF3z7nf7Z75%2BW7Ht1gdEnqIsrT3RI9AXqyFIqawM0IBdw6nDeBH7dkLbepRMGWG9fw%2Fp2cMzfjnSh7Rz2UYcjBj1i6YOciV%2B6hJl4Ssc4zApQ0AY6N5CQa3ex%2FZpUBnax3jS4uFItZ22m521xIMpIQpSUjci8aVPDt9tf4X5mw9emVoJ4%2BLTSwbUVYji8fczjqNjw12nBXRs7JI6h8MN4hU0krro4pz3Y02mo7TwowxwR4xcepDd6zIzf1v8XHOhzSnm5yjia2S8AxemN0qyjdWAxLtbyPoUDI%2FjTKBasikThxDnuyX8%2FRTxb3kkA6Xfs4xv4nwAMFogMJBILeZz0VbPA459dCd1PbI4xRlkOcYDGBxKalU45Ji%2FMV4ECopSkKgNg8W4ENaSxVyk0s5Tc%2FHZJ9eJe9SSULMQxjrc5Qat22UtfofGPPNs18cfmFyHtBCalxOy5wD5AAL%2BIKjvLg%2FKK%2BoeLKqI3SoRbB5yyZKehJl30EHBEroF8Xm1cSMofDfkb3NQSzIwv0uc5NcmP0KwbhWFy0ca4hnIdciEtaL3x4I4CBb5bWPYUmbP9sPm599XAVysdb0uO%2FgbssKF4TVHcYwjIufxAY6pgG5VCGF%2FDDMRBy3LhsZbRSOo59vw2s3PMyRJ0JeKS241ctr6mL3%2B%2B%2FVvSNGDhAw4BIdw4VuVZbAylOwYr0ECwR3oEvIDW37d111SfYXe706cq2PsbZV0l2DnmxHcGzi%2FPAfYU7%2B8FyOmm%2Brx1VVrVlIM28e4wTAzg7MPE8XMXvFCOlrw3MM2Jzdvce6h5%2F1iY8AzpSabjeyrKoS%2FQ6Jcqkb1ZUC5FGv&X-Amz-Signature=29b83ed3ef77c21685aa652d5869e24e38387accc24aa65bc3049a27355e92f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIZ3YGFS%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIBFVK6JWkU5OpQ36q2LokCm3jzz6Odoy48gRD%2BKrFd0DAiBmgt5OaWwqPokFk%2FE8HiJBC%2F1tStw6UP5TU%2ByE8rxDIiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt1C%2FsCgQFtbqHAVdKtwDTGirXWbFX8og2%2FFXIt1BOojjifnlINAxPyF3z7nf7Z75%2BW7Ht1gdEnqIsrT3RI9AXqyFIqawM0IBdw6nDeBH7dkLbepRMGWG9fw%2Fp2cMzfjnSh7Rz2UYcjBj1i6YOciV%2B6hJl4Ssc4zApQ0AY6N5CQa3ex%2FZpUBnax3jS4uFItZ22m521xIMpIQpSUjci8aVPDt9tf4X5mw9emVoJ4%2BLTSwbUVYji8fczjqNjw12nBXRs7JI6h8MN4hU0krro4pz3Y02mo7TwowxwR4xcepDd6zIzf1v8XHOhzSnm5yjia2S8AxemN0qyjdWAxLtbyPoUDI%2FjTKBasikThxDnuyX8%2FRTxb3kkA6Xfs4xv4nwAMFogMJBILeZz0VbPA459dCd1PbI4xRlkOcYDGBxKalU45Ji%2FMV4ECopSkKgNg8W4ENaSxVyk0s5Tc%2FHZJ9eJe9SSULMQxjrc5Qat22UtfofGPPNs18cfmFyHtBCalxOy5wD5AAL%2BIKjvLg%2FKK%2BoeLKqI3SoRbB5yyZKehJl30EHBEroF8Xm1cSMofDfkb3NQSzIwv0uc5NcmP0KwbhWFy0ca4hnIdciEtaL3x4I4CBb5bWPYUmbP9sPm599XAVysdb0uO%2FgbssKF4TVHcYwjIufxAY6pgG5VCGF%2FDDMRBy3LhsZbRSOo59vw2s3PMyRJ0JeKS241ctr6mL3%2B%2B%2FVvSNGDhAw4BIdw4VuVZbAylOwYr0ECwR3oEvIDW37d111SfYXe706cq2PsbZV0l2DnmxHcGzi%2FPAfYU7%2B8FyOmm%2Brx1VVrVlIM28e4wTAzg7MPE8XMXvFCOlrw3MM2Jzdvce6h5%2F1iY8AzpSabjeyrKoS%2FQ6Jcqkb1ZUC5FGv&X-Amz-Signature=43ec4d8e4edcda88bf19e5372f2ce85fe2b65e73bb59e7ff520d28b8917b8de7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIZ3YGFS%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIBFVK6JWkU5OpQ36q2LokCm3jzz6Odoy48gRD%2BKrFd0DAiBmgt5OaWwqPokFk%2FE8HiJBC%2F1tStw6UP5TU%2ByE8rxDIiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt1C%2FsCgQFtbqHAVdKtwDTGirXWbFX8og2%2FFXIt1BOojjifnlINAxPyF3z7nf7Z75%2BW7Ht1gdEnqIsrT3RI9AXqyFIqawM0IBdw6nDeBH7dkLbepRMGWG9fw%2Fp2cMzfjnSh7Rz2UYcjBj1i6YOciV%2B6hJl4Ssc4zApQ0AY6N5CQa3ex%2FZpUBnax3jS4uFItZ22m521xIMpIQpSUjci8aVPDt9tf4X5mw9emVoJ4%2BLTSwbUVYji8fczjqNjw12nBXRs7JI6h8MN4hU0krro4pz3Y02mo7TwowxwR4xcepDd6zIzf1v8XHOhzSnm5yjia2S8AxemN0qyjdWAxLtbyPoUDI%2FjTKBasikThxDnuyX8%2FRTxb3kkA6Xfs4xv4nwAMFogMJBILeZz0VbPA459dCd1PbI4xRlkOcYDGBxKalU45Ji%2FMV4ECopSkKgNg8W4ENaSxVyk0s5Tc%2FHZJ9eJe9SSULMQxjrc5Qat22UtfofGPPNs18cfmFyHtBCalxOy5wD5AAL%2BIKjvLg%2FKK%2BoeLKqI3SoRbB5yyZKehJl30EHBEroF8Xm1cSMofDfkb3NQSzIwv0uc5NcmP0KwbhWFy0ca4hnIdciEtaL3x4I4CBb5bWPYUmbP9sPm599XAVysdb0uO%2FgbssKF4TVHcYwjIufxAY6pgG5VCGF%2FDDMRBy3LhsZbRSOo59vw2s3PMyRJ0JeKS241ctr6mL3%2B%2B%2FVvSNGDhAw4BIdw4VuVZbAylOwYr0ECwR3oEvIDW37d111SfYXe706cq2PsbZV0l2DnmxHcGzi%2FPAfYU7%2B8FyOmm%2Brx1VVrVlIM28e4wTAzg7MPE8XMXvFCOlrw3MM2Jzdvce6h5%2F1iY8AzpSabjeyrKoS%2FQ6Jcqkb1ZUC5FGv&X-Amz-Signature=14d6aadd77d33a5de7821ceaf26f9d1e93cfb4b928cd7dda8b857551d3502f80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIZ3YGFS%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIBFVK6JWkU5OpQ36q2LokCm3jzz6Odoy48gRD%2BKrFd0DAiBmgt5OaWwqPokFk%2FE8HiJBC%2F1tStw6UP5TU%2ByE8rxDIiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt1C%2FsCgQFtbqHAVdKtwDTGirXWbFX8og2%2FFXIt1BOojjifnlINAxPyF3z7nf7Z75%2BW7Ht1gdEnqIsrT3RI9AXqyFIqawM0IBdw6nDeBH7dkLbepRMGWG9fw%2Fp2cMzfjnSh7Rz2UYcjBj1i6YOciV%2B6hJl4Ssc4zApQ0AY6N5CQa3ex%2FZpUBnax3jS4uFItZ22m521xIMpIQpSUjci8aVPDt9tf4X5mw9emVoJ4%2BLTSwbUVYji8fczjqNjw12nBXRs7JI6h8MN4hU0krro4pz3Y02mo7TwowxwR4xcepDd6zIzf1v8XHOhzSnm5yjia2S8AxemN0qyjdWAxLtbyPoUDI%2FjTKBasikThxDnuyX8%2FRTxb3kkA6Xfs4xv4nwAMFogMJBILeZz0VbPA459dCd1PbI4xRlkOcYDGBxKalU45Ji%2FMV4ECopSkKgNg8W4ENaSxVyk0s5Tc%2FHZJ9eJe9SSULMQxjrc5Qat22UtfofGPPNs18cfmFyHtBCalxOy5wD5AAL%2BIKjvLg%2FKK%2BoeLKqI3SoRbB5yyZKehJl30EHBEroF8Xm1cSMofDfkb3NQSzIwv0uc5NcmP0KwbhWFy0ca4hnIdciEtaL3x4I4CBb5bWPYUmbP9sPm599XAVysdb0uO%2FgbssKF4TVHcYwjIufxAY6pgG5VCGF%2FDDMRBy3LhsZbRSOo59vw2s3PMyRJ0JeKS241ctr6mL3%2B%2B%2FVvSNGDhAw4BIdw4VuVZbAylOwYr0ECwR3oEvIDW37d111SfYXe706cq2PsbZV0l2DnmxHcGzi%2FPAfYU7%2B8FyOmm%2Brx1VVrVlIM28e4wTAzg7MPE8XMXvFCOlrw3MM2Jzdvce6h5%2F1iY8AzpSabjeyrKoS%2FQ6Jcqkb1ZUC5FGv&X-Amz-Signature=a018d239fb92b72bef4f0eec2fcaa1395505b5b76110d1b0496407683783b56b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIZ3YGFS%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIBFVK6JWkU5OpQ36q2LokCm3jzz6Odoy48gRD%2BKrFd0DAiBmgt5OaWwqPokFk%2FE8HiJBC%2F1tStw6UP5TU%2ByE8rxDIiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt1C%2FsCgQFtbqHAVdKtwDTGirXWbFX8og2%2FFXIt1BOojjifnlINAxPyF3z7nf7Z75%2BW7Ht1gdEnqIsrT3RI9AXqyFIqawM0IBdw6nDeBH7dkLbepRMGWG9fw%2Fp2cMzfjnSh7Rz2UYcjBj1i6YOciV%2B6hJl4Ssc4zApQ0AY6N5CQa3ex%2FZpUBnax3jS4uFItZ22m521xIMpIQpSUjci8aVPDt9tf4X5mw9emVoJ4%2BLTSwbUVYji8fczjqNjw12nBXRs7JI6h8MN4hU0krro4pz3Y02mo7TwowxwR4xcepDd6zIzf1v8XHOhzSnm5yjia2S8AxemN0qyjdWAxLtbyPoUDI%2FjTKBasikThxDnuyX8%2FRTxb3kkA6Xfs4xv4nwAMFogMJBILeZz0VbPA459dCd1PbI4xRlkOcYDGBxKalU45Ji%2FMV4ECopSkKgNg8W4ENaSxVyk0s5Tc%2FHZJ9eJe9SSULMQxjrc5Qat22UtfofGPPNs18cfmFyHtBCalxOy5wD5AAL%2BIKjvLg%2FKK%2BoeLKqI3SoRbB5yyZKehJl30EHBEroF8Xm1cSMofDfkb3NQSzIwv0uc5NcmP0KwbhWFy0ca4hnIdciEtaL3x4I4CBb5bWPYUmbP9sPm599XAVysdb0uO%2FgbssKF4TVHcYwjIufxAY6pgG5VCGF%2FDDMRBy3LhsZbRSOo59vw2s3PMyRJ0JeKS241ctr6mL3%2B%2B%2FVvSNGDhAw4BIdw4VuVZbAylOwYr0ECwR3oEvIDW37d111SfYXe706cq2PsbZV0l2DnmxHcGzi%2FPAfYU7%2B8FyOmm%2Brx1VVrVlIM28e4wTAzg7MPE8XMXvFCOlrw3MM2Jzdvce6h5%2F1iY8AzpSabjeyrKoS%2FQ6Jcqkb1ZUC5FGv&X-Amz-Signature=a5d972ad3ebcdbda8f7cebd9df689c5d10d4425f2cbbf81a09ca9c741c386248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZQ7675X%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDgkHoDDn1HfciH994YBFWl4QQreoeK%2FdtrbfrjdXoDdgIgQrwyhXVxxgZXaeQS61I8UkpMTWM68qKacyFmodekb5cqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5lO1tBvWyBB4AL9CrcA0lNNJkG0fsZnCWmRT0Ncsyxws1X182%2BgZK0NUe%2FyyV8huvBDV%2BGVmfdWzwp%2BWv%2FNcN%2FAFgEytX4%2FOyaZjGgziMiLr5gU7GwiHXqbAN86bjSjAUpAQJ25e9WbwPIYsOGJSvhgIGlDZkQlT%2BqEcuZivHVFIop7XtISHizY7yL9cdlpvtylprzRRkG7yVXke39iYKq54liV5fE7qQ3QKQZnTmWtHdPZ2NZodsAefEbWoZIipXbnUPlCzbBbKop4nzC8JDq0ajH2Qgv5%2Bwrhuyov%2FcNWWGEHlNc5pEDYf%2FKg5qsQQu5GebRLCHeXRHMIMZ%2BAh6XXMvZMoscTM76f7%2F0rIbQF5ODPud1%2FmwKhaq3PbUfVnQHT87k0QSyUU9Jq79Dv0ZHVXTNviAkpRmNeyDA8nAuNa9PRLh9pjiBiRCVRtCzgHISfdPsIAO%2F6WBDwGjSMLWSNhb9HfiGVPp%2FHWJvfa5DeM0KNsZUa%2F1CClwj7SzM2GWPZXgnJh3DOuKZEA3pMVndVpVPbCzsC9ukJwi%2BKNodnTOqTeNeqUyg0ZSN%2BXsmPU3DLIIv%2B48HpxEjEjfCuHGW3r5FPpigT5QIZGD%2Fzyb%2B6ovH4YzfTFOgBn06f%2BkTpcYL8QlyT6069ng3MPKKn8QGOqUBI4iEUNdE2h8PBSbyqzz%2FghhV69ySOynlpujVDBXcbNNgrAIN1YsepvfyqQzugbHQVQEwjhROOB7e7ZVDMUx8Ln%2BMiwokdGVG1Vh0jbPp1SS5ZSUqy4iWWuzTL82Ygsa5kyaKH%2FbfBtBbwd16Z6It92%2B8BFp7ZcR9GEJ6ojk8SCWqSf0eiZLxzGY5%2BenbI%2BkGvXPBkjYUouFd8JrlySRWqOZ2hSZV&X-Amz-Signature=1a4d8790487fdac3a0265aa70a08ac044a868ce96fcbe5530aa55f8e29c5727c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZQ7675X%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDgkHoDDn1HfciH994YBFWl4QQreoeK%2FdtrbfrjdXoDdgIgQrwyhXVxxgZXaeQS61I8UkpMTWM68qKacyFmodekb5cqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5lO1tBvWyBB4AL9CrcA0lNNJkG0fsZnCWmRT0Ncsyxws1X182%2BgZK0NUe%2FyyV8huvBDV%2BGVmfdWzwp%2BWv%2FNcN%2FAFgEytX4%2FOyaZjGgziMiLr5gU7GwiHXqbAN86bjSjAUpAQJ25e9WbwPIYsOGJSvhgIGlDZkQlT%2BqEcuZivHVFIop7XtISHizY7yL9cdlpvtylprzRRkG7yVXke39iYKq54liV5fE7qQ3QKQZnTmWtHdPZ2NZodsAefEbWoZIipXbnUPlCzbBbKop4nzC8JDq0ajH2Qgv5%2Bwrhuyov%2FcNWWGEHlNc5pEDYf%2FKg5qsQQu5GebRLCHeXRHMIMZ%2BAh6XXMvZMoscTM76f7%2F0rIbQF5ODPud1%2FmwKhaq3PbUfVnQHT87k0QSyUU9Jq79Dv0ZHVXTNviAkpRmNeyDA8nAuNa9PRLh9pjiBiRCVRtCzgHISfdPsIAO%2F6WBDwGjSMLWSNhb9HfiGVPp%2FHWJvfa5DeM0KNsZUa%2F1CClwj7SzM2GWPZXgnJh3DOuKZEA3pMVndVpVPbCzsC9ukJwi%2BKNodnTOqTeNeqUyg0ZSN%2BXsmPU3DLIIv%2B48HpxEjEjfCuHGW3r5FPpigT5QIZGD%2Fzyb%2B6ovH4YzfTFOgBn06f%2BkTpcYL8QlyT6069ng3MPKKn8QGOqUBI4iEUNdE2h8PBSbyqzz%2FghhV69ySOynlpujVDBXcbNNgrAIN1YsepvfyqQzugbHQVQEwjhROOB7e7ZVDMUx8Ln%2BMiwokdGVG1Vh0jbPp1SS5ZSUqy4iWWuzTL82Ygsa5kyaKH%2FbfBtBbwd16Z6It92%2B8BFp7ZcR9GEJ6ojk8SCWqSf0eiZLxzGY5%2BenbI%2BkGvXPBkjYUouFd8JrlySRWqOZ2hSZV&X-Amz-Signature=de134290a810bff4a1067ffaf67ff03bbd4eab2a09728baeeb7a8ce4f62869be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZQ7675X%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDgkHoDDn1HfciH994YBFWl4QQreoeK%2FdtrbfrjdXoDdgIgQrwyhXVxxgZXaeQS61I8UkpMTWM68qKacyFmodekb5cqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5lO1tBvWyBB4AL9CrcA0lNNJkG0fsZnCWmRT0Ncsyxws1X182%2BgZK0NUe%2FyyV8huvBDV%2BGVmfdWzwp%2BWv%2FNcN%2FAFgEytX4%2FOyaZjGgziMiLr5gU7GwiHXqbAN86bjSjAUpAQJ25e9WbwPIYsOGJSvhgIGlDZkQlT%2BqEcuZivHVFIop7XtISHizY7yL9cdlpvtylprzRRkG7yVXke39iYKq54liV5fE7qQ3QKQZnTmWtHdPZ2NZodsAefEbWoZIipXbnUPlCzbBbKop4nzC8JDq0ajH2Qgv5%2Bwrhuyov%2FcNWWGEHlNc5pEDYf%2FKg5qsQQu5GebRLCHeXRHMIMZ%2BAh6XXMvZMoscTM76f7%2F0rIbQF5ODPud1%2FmwKhaq3PbUfVnQHT87k0QSyUU9Jq79Dv0ZHVXTNviAkpRmNeyDA8nAuNa9PRLh9pjiBiRCVRtCzgHISfdPsIAO%2F6WBDwGjSMLWSNhb9HfiGVPp%2FHWJvfa5DeM0KNsZUa%2F1CClwj7SzM2GWPZXgnJh3DOuKZEA3pMVndVpVPbCzsC9ukJwi%2BKNodnTOqTeNeqUyg0ZSN%2BXsmPU3DLIIv%2B48HpxEjEjfCuHGW3r5FPpigT5QIZGD%2Fzyb%2B6ovH4YzfTFOgBn06f%2BkTpcYL8QlyT6069ng3MPKKn8QGOqUBI4iEUNdE2h8PBSbyqzz%2FghhV69ySOynlpujVDBXcbNNgrAIN1YsepvfyqQzugbHQVQEwjhROOB7e7ZVDMUx8Ln%2BMiwokdGVG1Vh0jbPp1SS5ZSUqy4iWWuzTL82Ygsa5kyaKH%2FbfBtBbwd16Z6It92%2B8BFp7ZcR9GEJ6ojk8SCWqSf0eiZLxzGY5%2BenbI%2BkGvXPBkjYUouFd8JrlySRWqOZ2hSZV&X-Amz-Signature=7c62edb401d78705c704f0571abc91e416bec741ae82a6309469b40f72e5d84e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZQ7675X%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDgkHoDDn1HfciH994YBFWl4QQreoeK%2FdtrbfrjdXoDdgIgQrwyhXVxxgZXaeQS61I8UkpMTWM68qKacyFmodekb5cqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5lO1tBvWyBB4AL9CrcA0lNNJkG0fsZnCWmRT0Ncsyxws1X182%2BgZK0NUe%2FyyV8huvBDV%2BGVmfdWzwp%2BWv%2FNcN%2FAFgEytX4%2FOyaZjGgziMiLr5gU7GwiHXqbAN86bjSjAUpAQJ25e9WbwPIYsOGJSvhgIGlDZkQlT%2BqEcuZivHVFIop7XtISHizY7yL9cdlpvtylprzRRkG7yVXke39iYKq54liV5fE7qQ3QKQZnTmWtHdPZ2NZodsAefEbWoZIipXbnUPlCzbBbKop4nzC8JDq0ajH2Qgv5%2Bwrhuyov%2FcNWWGEHlNc5pEDYf%2FKg5qsQQu5GebRLCHeXRHMIMZ%2BAh6XXMvZMoscTM76f7%2F0rIbQF5ODPud1%2FmwKhaq3PbUfVnQHT87k0QSyUU9Jq79Dv0ZHVXTNviAkpRmNeyDA8nAuNa9PRLh9pjiBiRCVRtCzgHISfdPsIAO%2F6WBDwGjSMLWSNhb9HfiGVPp%2FHWJvfa5DeM0KNsZUa%2F1CClwj7SzM2GWPZXgnJh3DOuKZEA3pMVndVpVPbCzsC9ukJwi%2BKNodnTOqTeNeqUyg0ZSN%2BXsmPU3DLIIv%2B48HpxEjEjfCuHGW3r5FPpigT5QIZGD%2Fzyb%2B6ovH4YzfTFOgBn06f%2BkTpcYL8QlyT6069ng3MPKKn8QGOqUBI4iEUNdE2h8PBSbyqzz%2FghhV69ySOynlpujVDBXcbNNgrAIN1YsepvfyqQzugbHQVQEwjhROOB7e7ZVDMUx8Ln%2BMiwokdGVG1Vh0jbPp1SS5ZSUqy4iWWuzTL82Ygsa5kyaKH%2FbfBtBbwd16Z6It92%2B8BFp7ZcR9GEJ6ojk8SCWqSf0eiZLxzGY5%2BenbI%2BkGvXPBkjYUouFd8JrlySRWqOZ2hSZV&X-Amz-Signature=f1943a456f3bb0c770794f417809c3280867ea26b0de6c5c6895e3b70f28f3be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZQ7675X%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDgkHoDDn1HfciH994YBFWl4QQreoeK%2FdtrbfrjdXoDdgIgQrwyhXVxxgZXaeQS61I8UkpMTWM68qKacyFmodekb5cqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5lO1tBvWyBB4AL9CrcA0lNNJkG0fsZnCWmRT0Ncsyxws1X182%2BgZK0NUe%2FyyV8huvBDV%2BGVmfdWzwp%2BWv%2FNcN%2FAFgEytX4%2FOyaZjGgziMiLr5gU7GwiHXqbAN86bjSjAUpAQJ25e9WbwPIYsOGJSvhgIGlDZkQlT%2BqEcuZivHVFIop7XtISHizY7yL9cdlpvtylprzRRkG7yVXke39iYKq54liV5fE7qQ3QKQZnTmWtHdPZ2NZodsAefEbWoZIipXbnUPlCzbBbKop4nzC8JDq0ajH2Qgv5%2Bwrhuyov%2FcNWWGEHlNc5pEDYf%2FKg5qsQQu5GebRLCHeXRHMIMZ%2BAh6XXMvZMoscTM76f7%2F0rIbQF5ODPud1%2FmwKhaq3PbUfVnQHT87k0QSyUU9Jq79Dv0ZHVXTNviAkpRmNeyDA8nAuNa9PRLh9pjiBiRCVRtCzgHISfdPsIAO%2F6WBDwGjSMLWSNhb9HfiGVPp%2FHWJvfa5DeM0KNsZUa%2F1CClwj7SzM2GWPZXgnJh3DOuKZEA3pMVndVpVPbCzsC9ukJwi%2BKNodnTOqTeNeqUyg0ZSN%2BXsmPU3DLIIv%2B48HpxEjEjfCuHGW3r5FPpigT5QIZGD%2Fzyb%2B6ovH4YzfTFOgBn06f%2BkTpcYL8QlyT6069ng3MPKKn8QGOqUBI4iEUNdE2h8PBSbyqzz%2FghhV69ySOynlpujVDBXcbNNgrAIN1YsepvfyqQzugbHQVQEwjhROOB7e7ZVDMUx8Ln%2BMiwokdGVG1Vh0jbPp1SS5ZSUqy4iWWuzTL82Ygsa5kyaKH%2FbfBtBbwd16Z6It92%2B8BFp7ZcR9GEJ6ojk8SCWqSf0eiZLxzGY5%2BenbI%2BkGvXPBkjYUouFd8JrlySRWqOZ2hSZV&X-Amz-Signature=8623952f6f2f193d5e7098d32e4c1f4a8d646c36d6b1d6d3494aaebebfe409f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZQ7675X%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDgkHoDDn1HfciH994YBFWl4QQreoeK%2FdtrbfrjdXoDdgIgQrwyhXVxxgZXaeQS61I8UkpMTWM68qKacyFmodekb5cqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5lO1tBvWyBB4AL9CrcA0lNNJkG0fsZnCWmRT0Ncsyxws1X182%2BgZK0NUe%2FyyV8huvBDV%2BGVmfdWzwp%2BWv%2FNcN%2FAFgEytX4%2FOyaZjGgziMiLr5gU7GwiHXqbAN86bjSjAUpAQJ25e9WbwPIYsOGJSvhgIGlDZkQlT%2BqEcuZivHVFIop7XtISHizY7yL9cdlpvtylprzRRkG7yVXke39iYKq54liV5fE7qQ3QKQZnTmWtHdPZ2NZodsAefEbWoZIipXbnUPlCzbBbKop4nzC8JDq0ajH2Qgv5%2Bwrhuyov%2FcNWWGEHlNc5pEDYf%2FKg5qsQQu5GebRLCHeXRHMIMZ%2BAh6XXMvZMoscTM76f7%2F0rIbQF5ODPud1%2FmwKhaq3PbUfVnQHT87k0QSyUU9Jq79Dv0ZHVXTNviAkpRmNeyDA8nAuNa9PRLh9pjiBiRCVRtCzgHISfdPsIAO%2F6WBDwGjSMLWSNhb9HfiGVPp%2FHWJvfa5DeM0KNsZUa%2F1CClwj7SzM2GWPZXgnJh3DOuKZEA3pMVndVpVPbCzsC9ukJwi%2BKNodnTOqTeNeqUyg0ZSN%2BXsmPU3DLIIv%2B48HpxEjEjfCuHGW3r5FPpigT5QIZGD%2Fzyb%2B6ovH4YzfTFOgBn06f%2BkTpcYL8QlyT6069ng3MPKKn8QGOqUBI4iEUNdE2h8PBSbyqzz%2FghhV69ySOynlpujVDBXcbNNgrAIN1YsepvfyqQzugbHQVQEwjhROOB7e7ZVDMUx8Ln%2BMiwokdGVG1Vh0jbPp1SS5ZSUqy4iWWuzTL82Ygsa5kyaKH%2FbfBtBbwd16Z6It92%2B8BFp7ZcR9GEJ6ojk8SCWqSf0eiZLxzGY5%2BenbI%2BkGvXPBkjYUouFd8JrlySRWqOZ2hSZV&X-Amz-Signature=68db379f0363ac1dda29f948e0a884da2d4409bbfe93493e7e78fa0d22704fb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
