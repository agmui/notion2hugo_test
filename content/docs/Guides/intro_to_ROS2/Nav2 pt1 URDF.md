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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OVAFMW4%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDjuKaarh5X0GLp65kz1lkWLUg0LeXxqScyPFoVfBYr9gIgCFWP15QD6pQrNplLGVYdQEE5C2pva9xCsb5cd%2BdM0A8q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDNjbKIvYSYrGs7UQ1yrcA300ukMZ8NvcBfNDggaxgcaN37fy%2BflfjA7B25puYhaUubyPqv15TRX23Bf8d4lL3yCNAbjYSQHH3GiLwkWPeq03v87bdErK6HX4tCDF%2F0iEf5RpvnvhgYdYQ7grN3At1Y5%2BNJm0SMGxRf%2Fx6GJVEqVgtROaE%2F2S74qS%2FVOE6PRTLb8ORhyYSqmP7AuOsSVG9oAxxgbRKOKfZWuj3%2FcEHhWNslXQXF1H95yhHRmO%2FYFp2xfD2cVhc8FVPsRDhkNPn%2BYzhbT3FJdKSBvrx1mQleumMB9EJ8zAQwlcLiobfG96AMR83%2BF%2Fl45VNAMQNXFRNMrzfhq4i411Z%2B7kqsZJhNP6%2FguCSnRR61PFlMUH1iV9%2Fze1KFz1H9FLwxNTy7pFacBGy%2FrNkU6Q2oSMWnu10yG8vCc3EhkINuZAqsptxLpVaf%2BpzEJcy4MvAJTKXRU8VQphG%2FgVrJ3lfXHVk%2FLdGT%2F6Hd35o5wxthp%2Fjj0fzxSfpUTiX%2BJeiker4RH%2Fa5YrpnRGF1RhuMCsct4wWvnVHN6eu6YqoFy%2BZvLm%2BZkPax8tiQBHdaDvelGUjMeWICP%2BqNIogHMT%2Fs%2BX9TaBqzRrV2OvJEnrdXVQhJkMdZCQE966Yhij0KJ7rGi8lvoIMJSm89AGOqUBaS5pRFWnYZJ7y9ZTBd0D4PrUqTeGfuJs5%2FnbvlHG7t72ylu5jH58GJbeuNhgTUzbVsI0h6pwdh7z2pdpiIfGBZv5D0MvRuGySfHXUVhXCa8agVY3hiVAocJS3f5MX%2BZWXr2qHMqp%2BNyrxVpEmwkX6AMSsxpONFRliLH8k91wBKaYnF5DdfyrW7KwY0SCUiDVzjlGJ38iF%2Fa%2BU0DvkZ2YdJAF0YVN&X-Amz-Signature=fd6be1d8132c4b051af5550ab9461588d5b0255a610cafdc2318c827a652269b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OVAFMW4%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDjuKaarh5X0GLp65kz1lkWLUg0LeXxqScyPFoVfBYr9gIgCFWP15QD6pQrNplLGVYdQEE5C2pva9xCsb5cd%2BdM0A8q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDNjbKIvYSYrGs7UQ1yrcA300ukMZ8NvcBfNDggaxgcaN37fy%2BflfjA7B25puYhaUubyPqv15TRX23Bf8d4lL3yCNAbjYSQHH3GiLwkWPeq03v87bdErK6HX4tCDF%2F0iEf5RpvnvhgYdYQ7grN3At1Y5%2BNJm0SMGxRf%2Fx6GJVEqVgtROaE%2F2S74qS%2FVOE6PRTLb8ORhyYSqmP7AuOsSVG9oAxxgbRKOKfZWuj3%2FcEHhWNslXQXF1H95yhHRmO%2FYFp2xfD2cVhc8FVPsRDhkNPn%2BYzhbT3FJdKSBvrx1mQleumMB9EJ8zAQwlcLiobfG96AMR83%2BF%2Fl45VNAMQNXFRNMrzfhq4i411Z%2B7kqsZJhNP6%2FguCSnRR61PFlMUH1iV9%2Fze1KFz1H9FLwxNTy7pFacBGy%2FrNkU6Q2oSMWnu10yG8vCc3EhkINuZAqsptxLpVaf%2BpzEJcy4MvAJTKXRU8VQphG%2FgVrJ3lfXHVk%2FLdGT%2F6Hd35o5wxthp%2Fjj0fzxSfpUTiX%2BJeiker4RH%2Fa5YrpnRGF1RhuMCsct4wWvnVHN6eu6YqoFy%2BZvLm%2BZkPax8tiQBHdaDvelGUjMeWICP%2BqNIogHMT%2Fs%2BX9TaBqzRrV2OvJEnrdXVQhJkMdZCQE966Yhij0KJ7rGi8lvoIMJSm89AGOqUBaS5pRFWnYZJ7y9ZTBd0D4PrUqTeGfuJs5%2FnbvlHG7t72ylu5jH58GJbeuNhgTUzbVsI0h6pwdh7z2pdpiIfGBZv5D0MvRuGySfHXUVhXCa8agVY3hiVAocJS3f5MX%2BZWXr2qHMqp%2BNyrxVpEmwkX6AMSsxpONFRliLH8k91wBKaYnF5DdfyrW7KwY0SCUiDVzjlGJ38iF%2Fa%2BU0DvkZ2YdJAF0YVN&X-Amz-Signature=f9b34e154013ce3b2ab821f11604cf3ac448a5a047d78717d5b85e6cab003e96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OVAFMW4%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDjuKaarh5X0GLp65kz1lkWLUg0LeXxqScyPFoVfBYr9gIgCFWP15QD6pQrNplLGVYdQEE5C2pva9xCsb5cd%2BdM0A8q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDNjbKIvYSYrGs7UQ1yrcA300ukMZ8NvcBfNDggaxgcaN37fy%2BflfjA7B25puYhaUubyPqv15TRX23Bf8d4lL3yCNAbjYSQHH3GiLwkWPeq03v87bdErK6HX4tCDF%2F0iEf5RpvnvhgYdYQ7grN3At1Y5%2BNJm0SMGxRf%2Fx6GJVEqVgtROaE%2F2S74qS%2FVOE6PRTLb8ORhyYSqmP7AuOsSVG9oAxxgbRKOKfZWuj3%2FcEHhWNslXQXF1H95yhHRmO%2FYFp2xfD2cVhc8FVPsRDhkNPn%2BYzhbT3FJdKSBvrx1mQleumMB9EJ8zAQwlcLiobfG96AMR83%2BF%2Fl45VNAMQNXFRNMrzfhq4i411Z%2B7kqsZJhNP6%2FguCSnRR61PFlMUH1iV9%2Fze1KFz1H9FLwxNTy7pFacBGy%2FrNkU6Q2oSMWnu10yG8vCc3EhkINuZAqsptxLpVaf%2BpzEJcy4MvAJTKXRU8VQphG%2FgVrJ3lfXHVk%2FLdGT%2F6Hd35o5wxthp%2Fjj0fzxSfpUTiX%2BJeiker4RH%2Fa5YrpnRGF1RhuMCsct4wWvnVHN6eu6YqoFy%2BZvLm%2BZkPax8tiQBHdaDvelGUjMeWICP%2BqNIogHMT%2Fs%2BX9TaBqzRrV2OvJEnrdXVQhJkMdZCQE966Yhij0KJ7rGi8lvoIMJSm89AGOqUBaS5pRFWnYZJ7y9ZTBd0D4PrUqTeGfuJs5%2FnbvlHG7t72ylu5jH58GJbeuNhgTUzbVsI0h6pwdh7z2pdpiIfGBZv5D0MvRuGySfHXUVhXCa8agVY3hiVAocJS3f5MX%2BZWXr2qHMqp%2BNyrxVpEmwkX6AMSsxpONFRliLH8k91wBKaYnF5DdfyrW7KwY0SCUiDVzjlGJ38iF%2Fa%2BU0DvkZ2YdJAF0YVN&X-Amz-Signature=4e21be417372824af4a3ee292de8447b26d9abc5a2f6bc1b107f298c9babbc13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OVAFMW4%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDjuKaarh5X0GLp65kz1lkWLUg0LeXxqScyPFoVfBYr9gIgCFWP15QD6pQrNplLGVYdQEE5C2pva9xCsb5cd%2BdM0A8q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDNjbKIvYSYrGs7UQ1yrcA300ukMZ8NvcBfNDggaxgcaN37fy%2BflfjA7B25puYhaUubyPqv15TRX23Bf8d4lL3yCNAbjYSQHH3GiLwkWPeq03v87bdErK6HX4tCDF%2F0iEf5RpvnvhgYdYQ7grN3At1Y5%2BNJm0SMGxRf%2Fx6GJVEqVgtROaE%2F2S74qS%2FVOE6PRTLb8ORhyYSqmP7AuOsSVG9oAxxgbRKOKfZWuj3%2FcEHhWNslXQXF1H95yhHRmO%2FYFp2xfD2cVhc8FVPsRDhkNPn%2BYzhbT3FJdKSBvrx1mQleumMB9EJ8zAQwlcLiobfG96AMR83%2BF%2Fl45VNAMQNXFRNMrzfhq4i411Z%2B7kqsZJhNP6%2FguCSnRR61PFlMUH1iV9%2Fze1KFz1H9FLwxNTy7pFacBGy%2FrNkU6Q2oSMWnu10yG8vCc3EhkINuZAqsptxLpVaf%2BpzEJcy4MvAJTKXRU8VQphG%2FgVrJ3lfXHVk%2FLdGT%2F6Hd35o5wxthp%2Fjj0fzxSfpUTiX%2BJeiker4RH%2Fa5YrpnRGF1RhuMCsct4wWvnVHN6eu6YqoFy%2BZvLm%2BZkPax8tiQBHdaDvelGUjMeWICP%2BqNIogHMT%2Fs%2BX9TaBqzRrV2OvJEnrdXVQhJkMdZCQE966Yhij0KJ7rGi8lvoIMJSm89AGOqUBaS5pRFWnYZJ7y9ZTBd0D4PrUqTeGfuJs5%2FnbvlHG7t72ylu5jH58GJbeuNhgTUzbVsI0h6pwdh7z2pdpiIfGBZv5D0MvRuGySfHXUVhXCa8agVY3hiVAocJS3f5MX%2BZWXr2qHMqp%2BNyrxVpEmwkX6AMSsxpONFRliLH8k91wBKaYnF5DdfyrW7KwY0SCUiDVzjlGJ38iF%2Fa%2BU0DvkZ2YdJAF0YVN&X-Amz-Signature=2e4d8782ec53db8aa57258212baf5d8c291bb37df524a9062dd3e55880cdf263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OVAFMW4%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDjuKaarh5X0GLp65kz1lkWLUg0LeXxqScyPFoVfBYr9gIgCFWP15QD6pQrNplLGVYdQEE5C2pva9xCsb5cd%2BdM0A8q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDNjbKIvYSYrGs7UQ1yrcA300ukMZ8NvcBfNDggaxgcaN37fy%2BflfjA7B25puYhaUubyPqv15TRX23Bf8d4lL3yCNAbjYSQHH3GiLwkWPeq03v87bdErK6HX4tCDF%2F0iEf5RpvnvhgYdYQ7grN3At1Y5%2BNJm0SMGxRf%2Fx6GJVEqVgtROaE%2F2S74qS%2FVOE6PRTLb8ORhyYSqmP7AuOsSVG9oAxxgbRKOKfZWuj3%2FcEHhWNslXQXF1H95yhHRmO%2FYFp2xfD2cVhc8FVPsRDhkNPn%2BYzhbT3FJdKSBvrx1mQleumMB9EJ8zAQwlcLiobfG96AMR83%2BF%2Fl45VNAMQNXFRNMrzfhq4i411Z%2B7kqsZJhNP6%2FguCSnRR61PFlMUH1iV9%2Fze1KFz1H9FLwxNTy7pFacBGy%2FrNkU6Q2oSMWnu10yG8vCc3EhkINuZAqsptxLpVaf%2BpzEJcy4MvAJTKXRU8VQphG%2FgVrJ3lfXHVk%2FLdGT%2F6Hd35o5wxthp%2Fjj0fzxSfpUTiX%2BJeiker4RH%2Fa5YrpnRGF1RhuMCsct4wWvnVHN6eu6YqoFy%2BZvLm%2BZkPax8tiQBHdaDvelGUjMeWICP%2BqNIogHMT%2Fs%2BX9TaBqzRrV2OvJEnrdXVQhJkMdZCQE966Yhij0KJ7rGi8lvoIMJSm89AGOqUBaS5pRFWnYZJ7y9ZTBd0D4PrUqTeGfuJs5%2FnbvlHG7t72ylu5jH58GJbeuNhgTUzbVsI0h6pwdh7z2pdpiIfGBZv5D0MvRuGySfHXUVhXCa8agVY3hiVAocJS3f5MX%2BZWXr2qHMqp%2BNyrxVpEmwkX6AMSsxpONFRliLH8k91wBKaYnF5DdfyrW7KwY0SCUiDVzjlGJ38iF%2Fa%2BU0DvkZ2YdJAF0YVN&X-Amz-Signature=eb014435524f687d29c7e2c692a55f7b3fc533afc697794ef04d34c20f68d1fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OVAFMW4%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDjuKaarh5X0GLp65kz1lkWLUg0LeXxqScyPFoVfBYr9gIgCFWP15QD6pQrNplLGVYdQEE5C2pva9xCsb5cd%2BdM0A8q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDNjbKIvYSYrGs7UQ1yrcA300ukMZ8NvcBfNDggaxgcaN37fy%2BflfjA7B25puYhaUubyPqv15TRX23Bf8d4lL3yCNAbjYSQHH3GiLwkWPeq03v87bdErK6HX4tCDF%2F0iEf5RpvnvhgYdYQ7grN3At1Y5%2BNJm0SMGxRf%2Fx6GJVEqVgtROaE%2F2S74qS%2FVOE6PRTLb8ORhyYSqmP7AuOsSVG9oAxxgbRKOKfZWuj3%2FcEHhWNslXQXF1H95yhHRmO%2FYFp2xfD2cVhc8FVPsRDhkNPn%2BYzhbT3FJdKSBvrx1mQleumMB9EJ8zAQwlcLiobfG96AMR83%2BF%2Fl45VNAMQNXFRNMrzfhq4i411Z%2B7kqsZJhNP6%2FguCSnRR61PFlMUH1iV9%2Fze1KFz1H9FLwxNTy7pFacBGy%2FrNkU6Q2oSMWnu10yG8vCc3EhkINuZAqsptxLpVaf%2BpzEJcy4MvAJTKXRU8VQphG%2FgVrJ3lfXHVk%2FLdGT%2F6Hd35o5wxthp%2Fjj0fzxSfpUTiX%2BJeiker4RH%2Fa5YrpnRGF1RhuMCsct4wWvnVHN6eu6YqoFy%2BZvLm%2BZkPax8tiQBHdaDvelGUjMeWICP%2BqNIogHMT%2Fs%2BX9TaBqzRrV2OvJEnrdXVQhJkMdZCQE966Yhij0KJ7rGi8lvoIMJSm89AGOqUBaS5pRFWnYZJ7y9ZTBd0D4PrUqTeGfuJs5%2FnbvlHG7t72ylu5jH58GJbeuNhgTUzbVsI0h6pwdh7z2pdpiIfGBZv5D0MvRuGySfHXUVhXCa8agVY3hiVAocJS3f5MX%2BZWXr2qHMqp%2BNyrxVpEmwkX6AMSsxpONFRliLH8k91wBKaYnF5DdfyrW7KwY0SCUiDVzjlGJ38iF%2Fa%2BU0DvkZ2YdJAF0YVN&X-Amz-Signature=a4ebd62278048fabbaac0e58501390bb007793b125b6528b7764fc72b7c80f8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OVAFMW4%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDjuKaarh5X0GLp65kz1lkWLUg0LeXxqScyPFoVfBYr9gIgCFWP15QD6pQrNplLGVYdQEE5C2pva9xCsb5cd%2BdM0A8q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDNjbKIvYSYrGs7UQ1yrcA300ukMZ8NvcBfNDggaxgcaN37fy%2BflfjA7B25puYhaUubyPqv15TRX23Bf8d4lL3yCNAbjYSQHH3GiLwkWPeq03v87bdErK6HX4tCDF%2F0iEf5RpvnvhgYdYQ7grN3At1Y5%2BNJm0SMGxRf%2Fx6GJVEqVgtROaE%2F2S74qS%2FVOE6PRTLb8ORhyYSqmP7AuOsSVG9oAxxgbRKOKfZWuj3%2FcEHhWNslXQXF1H95yhHRmO%2FYFp2xfD2cVhc8FVPsRDhkNPn%2BYzhbT3FJdKSBvrx1mQleumMB9EJ8zAQwlcLiobfG96AMR83%2BF%2Fl45VNAMQNXFRNMrzfhq4i411Z%2B7kqsZJhNP6%2FguCSnRR61PFlMUH1iV9%2Fze1KFz1H9FLwxNTy7pFacBGy%2FrNkU6Q2oSMWnu10yG8vCc3EhkINuZAqsptxLpVaf%2BpzEJcy4MvAJTKXRU8VQphG%2FgVrJ3lfXHVk%2FLdGT%2F6Hd35o5wxthp%2Fjj0fzxSfpUTiX%2BJeiker4RH%2Fa5YrpnRGF1RhuMCsct4wWvnVHN6eu6YqoFy%2BZvLm%2BZkPax8tiQBHdaDvelGUjMeWICP%2BqNIogHMT%2Fs%2BX9TaBqzRrV2OvJEnrdXVQhJkMdZCQE966Yhij0KJ7rGi8lvoIMJSm89AGOqUBaS5pRFWnYZJ7y9ZTBd0D4PrUqTeGfuJs5%2FnbvlHG7t72ylu5jH58GJbeuNhgTUzbVsI0h6pwdh7z2pdpiIfGBZv5D0MvRuGySfHXUVhXCa8agVY3hiVAocJS3f5MX%2BZWXr2qHMqp%2BNyrxVpEmwkX6AMSsxpONFRliLH8k91wBKaYnF5DdfyrW7KwY0SCUiDVzjlGJ38iF%2Fa%2BU0DvkZ2YdJAF0YVN&X-Amz-Signature=028b3805121a9b97a42d191825456eb30cedf61d1b5503fc86ec271ce462f2c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OVAFMW4%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDjuKaarh5X0GLp65kz1lkWLUg0LeXxqScyPFoVfBYr9gIgCFWP15QD6pQrNplLGVYdQEE5C2pva9xCsb5cd%2BdM0A8q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDNjbKIvYSYrGs7UQ1yrcA300ukMZ8NvcBfNDggaxgcaN37fy%2BflfjA7B25puYhaUubyPqv15TRX23Bf8d4lL3yCNAbjYSQHH3GiLwkWPeq03v87bdErK6HX4tCDF%2F0iEf5RpvnvhgYdYQ7grN3At1Y5%2BNJm0SMGxRf%2Fx6GJVEqVgtROaE%2F2S74qS%2FVOE6PRTLb8ORhyYSqmP7AuOsSVG9oAxxgbRKOKfZWuj3%2FcEHhWNslXQXF1H95yhHRmO%2FYFp2xfD2cVhc8FVPsRDhkNPn%2BYzhbT3FJdKSBvrx1mQleumMB9EJ8zAQwlcLiobfG96AMR83%2BF%2Fl45VNAMQNXFRNMrzfhq4i411Z%2B7kqsZJhNP6%2FguCSnRR61PFlMUH1iV9%2Fze1KFz1H9FLwxNTy7pFacBGy%2FrNkU6Q2oSMWnu10yG8vCc3EhkINuZAqsptxLpVaf%2BpzEJcy4MvAJTKXRU8VQphG%2FgVrJ3lfXHVk%2FLdGT%2F6Hd35o5wxthp%2Fjj0fzxSfpUTiX%2BJeiker4RH%2Fa5YrpnRGF1RhuMCsct4wWvnVHN6eu6YqoFy%2BZvLm%2BZkPax8tiQBHdaDvelGUjMeWICP%2BqNIogHMT%2Fs%2BX9TaBqzRrV2OvJEnrdXVQhJkMdZCQE966Yhij0KJ7rGi8lvoIMJSm89AGOqUBaS5pRFWnYZJ7y9ZTBd0D4PrUqTeGfuJs5%2FnbvlHG7t72ylu5jH58GJbeuNhgTUzbVsI0h6pwdh7z2pdpiIfGBZv5D0MvRuGySfHXUVhXCa8agVY3hiVAocJS3f5MX%2BZWXr2qHMqp%2BNyrxVpEmwkX6AMSsxpONFRliLH8k91wBKaYnF5DdfyrW7KwY0SCUiDVzjlGJ38iF%2Fa%2BU0DvkZ2YdJAF0YVN&X-Amz-Signature=4088d4fde46da1e46aa3214a73fc3027e5c7f41533ad4c4c29ea8713c934e3c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OVAFMW4%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDjuKaarh5X0GLp65kz1lkWLUg0LeXxqScyPFoVfBYr9gIgCFWP15QD6pQrNplLGVYdQEE5C2pva9xCsb5cd%2BdM0A8q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDNjbKIvYSYrGs7UQ1yrcA300ukMZ8NvcBfNDggaxgcaN37fy%2BflfjA7B25puYhaUubyPqv15TRX23Bf8d4lL3yCNAbjYSQHH3GiLwkWPeq03v87bdErK6HX4tCDF%2F0iEf5RpvnvhgYdYQ7grN3At1Y5%2BNJm0SMGxRf%2Fx6GJVEqVgtROaE%2F2S74qS%2FVOE6PRTLb8ORhyYSqmP7AuOsSVG9oAxxgbRKOKfZWuj3%2FcEHhWNslXQXF1H95yhHRmO%2FYFp2xfD2cVhc8FVPsRDhkNPn%2BYzhbT3FJdKSBvrx1mQleumMB9EJ8zAQwlcLiobfG96AMR83%2BF%2Fl45VNAMQNXFRNMrzfhq4i411Z%2B7kqsZJhNP6%2FguCSnRR61PFlMUH1iV9%2Fze1KFz1H9FLwxNTy7pFacBGy%2FrNkU6Q2oSMWnu10yG8vCc3EhkINuZAqsptxLpVaf%2BpzEJcy4MvAJTKXRU8VQphG%2FgVrJ3lfXHVk%2FLdGT%2F6Hd35o5wxthp%2Fjj0fzxSfpUTiX%2BJeiker4RH%2Fa5YrpnRGF1RhuMCsct4wWvnVHN6eu6YqoFy%2BZvLm%2BZkPax8tiQBHdaDvelGUjMeWICP%2BqNIogHMT%2Fs%2BX9TaBqzRrV2OvJEnrdXVQhJkMdZCQE966Yhij0KJ7rGi8lvoIMJSm89AGOqUBaS5pRFWnYZJ7y9ZTBd0D4PrUqTeGfuJs5%2FnbvlHG7t72ylu5jH58GJbeuNhgTUzbVsI0h6pwdh7z2pdpiIfGBZv5D0MvRuGySfHXUVhXCa8agVY3hiVAocJS3f5MX%2BZWXr2qHMqp%2BNyrxVpEmwkX6AMSsxpONFRliLH8k91wBKaYnF5DdfyrW7KwY0SCUiDVzjlGJ38iF%2Fa%2BU0DvkZ2YdJAF0YVN&X-Amz-Signature=44fcf43438444eb484b5323181b811ed84cb8cf3e35eb2ce208e4d18b72dc124&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OVAFMW4%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDjuKaarh5X0GLp65kz1lkWLUg0LeXxqScyPFoVfBYr9gIgCFWP15QD6pQrNplLGVYdQEE5C2pva9xCsb5cd%2BdM0A8q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDNjbKIvYSYrGs7UQ1yrcA300ukMZ8NvcBfNDggaxgcaN37fy%2BflfjA7B25puYhaUubyPqv15TRX23Bf8d4lL3yCNAbjYSQHH3GiLwkWPeq03v87bdErK6HX4tCDF%2F0iEf5RpvnvhgYdYQ7grN3At1Y5%2BNJm0SMGxRf%2Fx6GJVEqVgtROaE%2F2S74qS%2FVOE6PRTLb8ORhyYSqmP7AuOsSVG9oAxxgbRKOKfZWuj3%2FcEHhWNslXQXF1H95yhHRmO%2FYFp2xfD2cVhc8FVPsRDhkNPn%2BYzhbT3FJdKSBvrx1mQleumMB9EJ8zAQwlcLiobfG96AMR83%2BF%2Fl45VNAMQNXFRNMrzfhq4i411Z%2B7kqsZJhNP6%2FguCSnRR61PFlMUH1iV9%2Fze1KFz1H9FLwxNTy7pFacBGy%2FrNkU6Q2oSMWnu10yG8vCc3EhkINuZAqsptxLpVaf%2BpzEJcy4MvAJTKXRU8VQphG%2FgVrJ3lfXHVk%2FLdGT%2F6Hd35o5wxthp%2Fjj0fzxSfpUTiX%2BJeiker4RH%2Fa5YrpnRGF1RhuMCsct4wWvnVHN6eu6YqoFy%2BZvLm%2BZkPax8tiQBHdaDvelGUjMeWICP%2BqNIogHMT%2Fs%2BX9TaBqzRrV2OvJEnrdXVQhJkMdZCQE966Yhij0KJ7rGi8lvoIMJSm89AGOqUBaS5pRFWnYZJ7y9ZTBd0D4PrUqTeGfuJs5%2FnbvlHG7t72ylu5jH58GJbeuNhgTUzbVsI0h6pwdh7z2pdpiIfGBZv5D0MvRuGySfHXUVhXCa8agVY3hiVAocJS3f5MX%2BZWXr2qHMqp%2BNyrxVpEmwkX6AMSsxpONFRliLH8k91wBKaYnF5DdfyrW7KwY0SCUiDVzjlGJ38iF%2Fa%2BU0DvkZ2YdJAF0YVN&X-Amz-Signature=e8daa9cf64e4e7a314b5f1eb3962c5529b3b6d39044f47151eaaf24187856aa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAGKJEBN%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIB4kec0dWnLbzuASZG6yABoTmX7mnYSe3owmMOGFz5xKAiEAiKZrATAyX6An4pW1VqGHXlAQnMViRfNJ9J6ZSW9qGJcq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDMlMkfNeetISRop%2FuSrcAy2DwAkWmXjSJJ%2Ft3MbPfnSfDv2HncX%2FfO%2FwnX%2FFlEnsar9zOepci3oiwEb3TDyQgQCiP3AjQVHPHoAINbWUrfU%2FB5Z62yaMdSDQda5uKGUyAOcGNoHGNPNJzQI8YCK6SpyJrICaIxsEw7CV6Nv7s3VE8wwUIy4A%2Bb0%2B%2B0%2BOU6U8p19sFDBtitGkTf1h1WKIBOcUaCPudOrC9ymC4s1740PiA0nOOhSVrJy0QbfD0XTc%2B3PXjYaKUY%2BaWuc%2F3ZOc63bU8H7dk7l8BWbgv58b3fqKlpAboik9SkGNc13JzjieRW98V98PuOT7KfRyRn8Cdiziq%2F2ePawrgRT1LAZSF3mOCEOEN8CdmnHxOahVwcO%2FJFIewDiUdZOilTyfY1PWbBI4mlBwEoe4S31VLxBwKt0RGNEU5s7iGqZjiPU%2BkEzFtucBpn2lA2wPeYDGhYm6yl4qyEBPg1P%2FJbrXXT2gl6C33SZqIICQZiKsxzmP1jhP82KOVJ3MKTlWOzsCRryAuMVCue8l4kzkz9GgWbQZ5HuQRHzviseqXcc4HP6F1yPXSumRr413zTTymC1woiQwvpdCgplESaoPCy98uGLoKzjvwiqRHlLE7dkXpNlMtPXPwqSAJTG%2Bc8E7%2F2lqMJ%2Bn89AGOqUBi0dubeWYCyP%2BrAEy68Yj12%2BRqeBvuwYsOO6ffIqAxWO2oE8Yv2b7RMT4TnGBZMaklIjPt0nWVE%2Fq13l56UHgP0UwNiqvIDczy5JxEILNkc6oitxMCNQN%2BQrJdbcP7llqjl%2BKhN1GDZ7fqB5T1ttwBc8p41vUZFiKGKdEf%2Bo%2F6t3jNjqDTIKdpR3RRwFzQIwo0RILP%2B2nIOyAluBP5ie3WnQ9OBzf&X-Amz-Signature=2af5f2e6ec5e857d5c5bd2cdcc493ebe51f722c4a1ba762321b4898cce7aee37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662UJQZ4Y%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHb3oQPSM4ZuK9HgvCW3Zn%2BUetVtnxg2Q6DEvUEhEOAQAiAOb8OPNueo7d1%2B%2FCizAQMITqLsA7u4wRNNMWq%2BQdPE1Cr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMgnntD%2BnUgkonQnMCKtwD%2BKaCI1qmlI9XIPknFA9F8lDme%2Bll4QlVblipS%2FHUsJ92WcBoQdXseECzO%2Fuzf7w6VcsMt1jrXH9701nPEa2kQIqxoN7WK1zEWZF6kInwQgHdZsRHekLef3lWdtggQwRt2OY3zqp%2BNFLo26RW9ngcU3QRSgUI3hOpJban4epzJQ%2Frb1oRHK6I1jyxhvbgTJuRl3juUYBe2FpMe0w90vyLjKZnSbHEuxsn%2FabhW6y813kAaPYvWTctLSJDtF%2FpvUS9GF%2F3cxvoRoC2NvnCOcApvaok8STywjH4c%2FnHg0%2B6rT2Kup4UzY9PDXzz67QacLJHRwenmcWPPUEg6BOQNoi3InL2yhT4I8jslA1cP9UjgVkpquH33zZJSA5F%2F8R9PkWVwkiMD8mUfbEiwQPX74APzplmzFlZ0g2GsFaN%2FsGVGJ0gCDxtcdcUAxjz25AdsKaX8ZHy2%2FZu2JVvJn0CO%2Bt5xHUg5PtUl0qFXH93Wdhp7fk2U8NyDkfWQ%2FUgG9hJjQ0UwXk8xTTKg7L5DSHY4ZfqpmxzSQs%2B3GjCsbYuYZCpi7fJxqbp16dPM%2BVROwyt25%2Fym%2FIEFd4BENHaGkApof9psJleNeR4FawQhF%2B%2BOcsfo2CW6seCq55erfgJZ9Ywq6bz0AY6pgFmNOVdGCh6RI7xAhsAWU5wLWfucCiNYpyU5qJrvUa4XTvG03E478BiSOJe4mpwvmJx5%2FNnoDF6R8kMQFBFR6mSihYmNvcnlEJ46zEsuonPtDX1Is11UPi%2BlxA5U7As38Ajq8tFEToM1Wue0e%2F6uRoY2lnFn9u0RWPEw%2BNgxMdkgaij5i%2FIXBamuHlctIDtJBoFy%2BcTbyHUjKEEg0pBkvWOosyKcItJ&X-Amz-Signature=8713a6d53ad31828de3130fe11f79bf26b40f6e1552be541806e7bdb08331e09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXSBL73R%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCPDce%2BYZ5Hmi74iF0Bn2OllteEzVE%2B2h0WSqyFGwhF%2FwIgKmuXHsSMq5QQRb0emskLHxa8EowylOV4RXulbAQbkvUq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDBgns%2B16UJD2mFFeBircA1JwFZ9zu5SQMHdiU8vh%2BhOmYG%2BtnAD7yWMW%2BsqM8t4jHb90ZCyVvLkC0nnBBFtNKcwIIvQMDYgW2xtTQbI4yJLKzFFTCG%2FApch%2B1ZR4R8g%2FzxmokMWgtxt3FE5UwuiB%2BaIGKR4u4j8enc1u0VbFiWvxyU3bRs%2FVdWm7xsGkGSy9C95b1iFxaD9xRtfd6Ve2cljM6LdBU75WAr3fuZ84PzTwUQgxLrbfyolaNez6z9ft3mSkmpMTFxumGiNTJTXtyUsKVSivRI9aXcnehXV%2F7gRYZveAAIRJ0g1dxpPcQ4LZteRvmEHIfMHLde6LrNwQvWqz8kvKcIJXEHhaV3mQtDH8cnH9IXrxyt0PSHZ2%2By4%2BlXLiqzvKKsWBVpBAdp999JVsMxDkBw%2Byt%2FCftMTsx7OxatMGMh%2BSZkPasSp3BupxGvVMieRa62M62NusXGpLhXS3cY%2B1nfy9N2YJDIycoWSslctn1DwDB7PN7JspcylAnVrZkJRxOHdzWX1CN%2F3jRbPTwVgpDEt6XlLWL11U9gpuLFOjr1VCEHe1PCLlCEv%2F6qckdKNXdBmZo3JPGCdeqF85x8zzKjDFd%2FmDxbBne6KLGI%2BaDrI0eDyOKYU%2B7iYKXxK3eVrwg0YX2sMDMIKl89AGOqUBI2zUKivrsvkjeQVzKoz%2BBX9vUOt%2BkIKYBRmXkKVp584CrtdoIh4bWwtYBY5DaRWXogQaXJPa9gGKwjQ64X%2FoJOGTXaUidnaIloBcJBSU0NWdUMluGIqAqkNh8B2Nt7B7a3aGLzJl55MQbbTpCyDmKpx%2BtmUI5H1omFATFFNuTLN4aPTe4cnM9djG0cmxxbnR3STKyWm2auc%2F4ioeSq8YWv4i%2Fpo%2B&X-Amz-Signature=a7919de16fa8e133e524423c3072459c43c3c6f7acaa2c6d919471faa588d744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OVAFMW4%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDjuKaarh5X0GLp65kz1lkWLUg0LeXxqScyPFoVfBYr9gIgCFWP15QD6pQrNplLGVYdQEE5C2pva9xCsb5cd%2BdM0A8q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDNjbKIvYSYrGs7UQ1yrcA300ukMZ8NvcBfNDggaxgcaN37fy%2BflfjA7B25puYhaUubyPqv15TRX23Bf8d4lL3yCNAbjYSQHH3GiLwkWPeq03v87bdErK6HX4tCDF%2F0iEf5RpvnvhgYdYQ7grN3At1Y5%2BNJm0SMGxRf%2Fx6GJVEqVgtROaE%2F2S74qS%2FVOE6PRTLb8ORhyYSqmP7AuOsSVG9oAxxgbRKOKfZWuj3%2FcEHhWNslXQXF1H95yhHRmO%2FYFp2xfD2cVhc8FVPsRDhkNPn%2BYzhbT3FJdKSBvrx1mQleumMB9EJ8zAQwlcLiobfG96AMR83%2BF%2Fl45VNAMQNXFRNMrzfhq4i411Z%2B7kqsZJhNP6%2FguCSnRR61PFlMUH1iV9%2Fze1KFz1H9FLwxNTy7pFacBGy%2FrNkU6Q2oSMWnu10yG8vCc3EhkINuZAqsptxLpVaf%2BpzEJcy4MvAJTKXRU8VQphG%2FgVrJ3lfXHVk%2FLdGT%2F6Hd35o5wxthp%2Fjj0fzxSfpUTiX%2BJeiker4RH%2Fa5YrpnRGF1RhuMCsct4wWvnVHN6eu6YqoFy%2BZvLm%2BZkPax8tiQBHdaDvelGUjMeWICP%2BqNIogHMT%2Fs%2BX9TaBqzRrV2OvJEnrdXVQhJkMdZCQE966Yhij0KJ7rGi8lvoIMJSm89AGOqUBaS5pRFWnYZJ7y9ZTBd0D4PrUqTeGfuJs5%2FnbvlHG7t72ylu5jH58GJbeuNhgTUzbVsI0h6pwdh7z2pdpiIfGBZv5D0MvRuGySfHXUVhXCa8agVY3hiVAocJS3f5MX%2BZWXr2qHMqp%2BNyrxVpEmwkX6AMSsxpONFRliLH8k91wBKaYnF5DdfyrW7KwY0SCUiDVzjlGJ38iF%2Fa%2BU0DvkZ2YdJAF0YVN&X-Amz-Signature=cfd1057955e47f10e2911c37a4c5f56cc8c986c70cc9ceab093dad130a0bca4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QQVQXXO%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDsJnV%2FVVlxBPJkc9A9SmoWp4MldsLge0Nvp1JFuwy7tAIhAP%2FgqAtN0tz%2B0T1zvMNe9ABW4HSbL2KKFF7xZ8U0ra3CKv8DCAIQABoMNjM3NDIzMTgzODA1IgwCS2Nbv00l5f7CsJoq3AMB3xzQQ5LdshwEEhtO75ZQVFPmWhSEOAB92WvvaSnI9Luo2zRzXxXeZYwdAXCfpm2RhW7qg7%2FYqlyZfW08QoNKrIjCWNMVRweZfmjv8NpJ2WaoayFhwdeIe9CekRmORJ7GQt8q9yCKey5r6wxbRSBoIWlKv2DszlhvdGyVzy0MkjzTRUJE382CO5fuG06okHdaSvUgH%2Fi0RWwmht%2BX%2FwJcnQjh1SoppJB2ocP9JOz3DMWcCzJM%2BgwKv32ZywmDOz9te0bxR8QD5KSk8BpCntArq7vVd8iJkb%2B0M2B7l22DoiNvMVuocZv0t%2FYQ%2FSlV15zGGgZa8jpSLPq2S2mMFKXIvvwzI6Fx8ZKg1ae97P28wT%2Fin6aeCQIhFIQZlKtG5J23gA7v6OdfbmiMlPEZWj%2BsH5kb51eGkVz6nMNP13io1oeLe8YiwvKsLh8n7Mk8OCnkc0NaS475hDlpnuMy3OJfu4iaoyFDqj%2Bu7ALemGQbY0UHA4IICHVewnfdrUPCA2b4fwBGDL5BVSERkZakMZAJ4tAcy%2Bhz3Gp4w46K9VlK8Hqc4p8fXA5xojota8BgzZB2jldAGkK3Vg3Q0oXT9C4joo2Li21Dk%2FVArxed5cJeMPM%2FoPg0KfUws4jekzDQpfPQBjqkASp2oJ7utoV%2FocD28I5i74xEuisG7umyZX64l98qJLocq8Uhme0hyIG6MPbFGptp21iO0g7ximlniF8XX4x%2FuIVzVSAcVocxt%2FZCIyySpAcSWHHJtv5EXa9eDrFFrGWRwuDvXOulcrc7rc34nweqorcPyDgqWo8sLrZE1L8UyNazzno9DZCrYmPJA14opNYiYfEJjJQoSns6cgzruG2l1PfgTsxT&X-Amz-Signature=c47164fb9491b5be7d0882650fad615774573ad9d1dd6cb4d1b19e73d4471cae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OVAFMW4%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDjuKaarh5X0GLp65kz1lkWLUg0LeXxqScyPFoVfBYr9gIgCFWP15QD6pQrNplLGVYdQEE5C2pva9xCsb5cd%2BdM0A8q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDNjbKIvYSYrGs7UQ1yrcA300ukMZ8NvcBfNDggaxgcaN37fy%2BflfjA7B25puYhaUubyPqv15TRX23Bf8d4lL3yCNAbjYSQHH3GiLwkWPeq03v87bdErK6HX4tCDF%2F0iEf5RpvnvhgYdYQ7grN3At1Y5%2BNJm0SMGxRf%2Fx6GJVEqVgtROaE%2F2S74qS%2FVOE6PRTLb8ORhyYSqmP7AuOsSVG9oAxxgbRKOKfZWuj3%2FcEHhWNslXQXF1H95yhHRmO%2FYFp2xfD2cVhc8FVPsRDhkNPn%2BYzhbT3FJdKSBvrx1mQleumMB9EJ8zAQwlcLiobfG96AMR83%2BF%2Fl45VNAMQNXFRNMrzfhq4i411Z%2B7kqsZJhNP6%2FguCSnRR61PFlMUH1iV9%2Fze1KFz1H9FLwxNTy7pFacBGy%2FrNkU6Q2oSMWnu10yG8vCc3EhkINuZAqsptxLpVaf%2BpzEJcy4MvAJTKXRU8VQphG%2FgVrJ3lfXHVk%2FLdGT%2F6Hd35o5wxthp%2Fjj0fzxSfpUTiX%2BJeiker4RH%2Fa5YrpnRGF1RhuMCsct4wWvnVHN6eu6YqoFy%2BZvLm%2BZkPax8tiQBHdaDvelGUjMeWICP%2BqNIogHMT%2Fs%2BX9TaBqzRrV2OvJEnrdXVQhJkMdZCQE966Yhij0KJ7rGi8lvoIMJSm89AGOqUBaS5pRFWnYZJ7y9ZTBd0D4PrUqTeGfuJs5%2FnbvlHG7t72ylu5jH58GJbeuNhgTUzbVsI0h6pwdh7z2pdpiIfGBZv5D0MvRuGySfHXUVhXCa8agVY3hiVAocJS3f5MX%2BZWXr2qHMqp%2BNyrxVpEmwkX6AMSsxpONFRliLH8k91wBKaYnF5DdfyrW7KwY0SCUiDVzjlGJ38iF%2Fa%2BU0DvkZ2YdJAF0YVN&X-Amz-Signature=01c79bc39e5794591e02de4356d36989abedb74932e3829e3f2717b754286619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMBSJ3DB%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGK8GoBB12ZSCDvflhJ9GaRWRrFcPd7atBQ%2BXS0cdHjbAiAw%2FZZssQDAImBMzttKUAaULoatv%2Fn%2FzjM%2BR4UgLykMnyr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMT8mh9S9vBdYxYF%2BBKtwDmIbMe688US3e%2FZ2x3TbhCyg%2F1UIpWE9ryNpm%2Ffrin9wwSAiHQ1vutYh%2FqiKuJdtW5NnD16AUJsi5reDjoJy3edYGb3UTpgaG9t2lHVlWJ0%2Fk%2FtxuGMj%2FHuWeXfgdNNsJ0h8%2FbjL7JQtnKCBh21F1dP98qOPlyGi10glYc2DrtI4Bud%2BzS6EaVHP5x%2FzG2YmB81QjLMFPZrXckdgV99b8LYl8lM9zgL4mZUonZxu%2BFRrOMQVCL%2FclX2rnD28SyzpIgk3ynDsyGwllU4jf93Wa2BWG%2FEQ057jvTJ3Tpkt8JXMuAn7oy8YoZWsMhFNYmfHE%2BP5BFgR0nociHkPawOpYQRS6XITxa6bcboYBFPFmC3CslRnikFjo1prU8Xn7c7rub5%2F0qaDZAsTiBIcmAqZonx2ByyxPO4qhLq2ql9YkZtNb%2Fhe8DL5xBIq07XxGXC3ZV5bPBZL1QhJjkFiXjeWIBQN9LvF%2Bv5GuLhnLTCU29nf3l4nToaE0cqXjI%2Fm%2FUJ%2FiC7eLgTOzuibmHP2t1CtK0pmTWCXKol44qnT86%2BrD9gDB1GYVzhKT8SDRvmd5S%2FRxSQjXmp0Mha57dL33pvfrlUFxaPTKVxBu10LGqr9l98DEQ72bVm%2F7UEAz%2F4ww%2Fqbz0AY6pgHgzZeepZ03ivA934n4oopFwJn7hVzbjOYxOIhicFZpfGcG4TCH2L%2BagR6rqQ%2FueWBHhMVj7ckdw%2FQ1oU58oBMfnqIV1m0F28I27%2BKVcaPxdBHSu2OnwFmriNvEdDMkb9ynMFXTQixE8Q9fo22XYqDVrdQMQxnKvZ7zFanvb5ujPRn8yXe9AzqwTHaiYTOqM6tQBwBJU8xj9hsy92HIya9ko1wD%2F0C9&X-Amz-Signature=a6ef697ad8fb4291cf8b7d6e41a267ce044b278ef60cbc95d2f9c3f3a9ccbfec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OVAFMW4%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDjuKaarh5X0GLp65kz1lkWLUg0LeXxqScyPFoVfBYr9gIgCFWP15QD6pQrNplLGVYdQEE5C2pva9xCsb5cd%2BdM0A8q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDNjbKIvYSYrGs7UQ1yrcA300ukMZ8NvcBfNDggaxgcaN37fy%2BflfjA7B25puYhaUubyPqv15TRX23Bf8d4lL3yCNAbjYSQHH3GiLwkWPeq03v87bdErK6HX4tCDF%2F0iEf5RpvnvhgYdYQ7grN3At1Y5%2BNJm0SMGxRf%2Fx6GJVEqVgtROaE%2F2S74qS%2FVOE6PRTLb8ORhyYSqmP7AuOsSVG9oAxxgbRKOKfZWuj3%2FcEHhWNslXQXF1H95yhHRmO%2FYFp2xfD2cVhc8FVPsRDhkNPn%2BYzhbT3FJdKSBvrx1mQleumMB9EJ8zAQwlcLiobfG96AMR83%2BF%2Fl45VNAMQNXFRNMrzfhq4i411Z%2B7kqsZJhNP6%2FguCSnRR61PFlMUH1iV9%2Fze1KFz1H9FLwxNTy7pFacBGy%2FrNkU6Q2oSMWnu10yG8vCc3EhkINuZAqsptxLpVaf%2BpzEJcy4MvAJTKXRU8VQphG%2FgVrJ3lfXHVk%2FLdGT%2F6Hd35o5wxthp%2Fjj0fzxSfpUTiX%2BJeiker4RH%2Fa5YrpnRGF1RhuMCsct4wWvnVHN6eu6YqoFy%2BZvLm%2BZkPax8tiQBHdaDvelGUjMeWICP%2BqNIogHMT%2Fs%2BX9TaBqzRrV2OvJEnrdXVQhJkMdZCQE966Yhij0KJ7rGi8lvoIMJSm89AGOqUBaS5pRFWnYZJ7y9ZTBd0D4PrUqTeGfuJs5%2FnbvlHG7t72ylu5jH58GJbeuNhgTUzbVsI0h6pwdh7z2pdpiIfGBZv5D0MvRuGySfHXUVhXCa8agVY3hiVAocJS3f5MX%2BZWXr2qHMqp%2BNyrxVpEmwkX6AMSsxpONFRliLH8k91wBKaYnF5DdfyrW7KwY0SCUiDVzjlGJ38iF%2Fa%2BU0DvkZ2YdJAF0YVN&X-Amz-Signature=b3874925002bbe7dfbd8383f04cfe619d7d461426dd24d413d8b14621bd72146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBVQ5AMF%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCvM9ESgYMPIkUI9Kf%2BWPRqDO2%2F07ph60k0CvwIB30C0gIgCHCqPUgMAHzyJrYUsPQI9qoYNuJNvUZ7iDI2jMD9mA8q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDLeZYkt254xVBZvEoSrcA88ifxJVk6Anqwr%2FanXdrH1EMwH8EEN6pbKftDvcfvX0ZSpNS5zX%2FMbsHG7kiR3Whl8l9bYCa5yB0r60FxbCuhmxctusyWEuCRC3CMNZHKhrYQanoqdUTmbX4%2BqT5JQkzsrp5v5vNSiBjQQH0S2Ntc5Pm2ZhbfCmSaJt1jaWfRWqOeo6NaHyU0Q88Mmec7CF4xWHYHNgYqZwM6LvDifHkecDubHJ5ihK9VUmEtm4qI45YnMXAs4K29dCKxiLRGsChcrw2Cchdfy2HCMjBWVlleArmBRHrVkXfKWsK434KXZMh47cMHYy8jTkaQhANN7Hh7ajjc5UxRVCgmXF3%2Fp%2ByU049FjwETbY0pOpLAPVg9ss2MJD9BDc8U4kR40xf6D7GHI%2Bw9arirMdej4rpUCMkRperaxNt4MZIUzx5to9Rme%2FFqPP0EuOJBu%2FdRs9056iLwoyMhNRjxHF0Ipkbm%2FDB4Pxy6DJCsqCpeBH0Ma1OlwfrvJMfSU%2FNhlHMiPmBxCehzWLpBswX5gkUI%2F6TjLqKzajctty3ReiKSlpClb8fTgdfYzPX%2F0YN7iwn%2BuaQ3VTVsh8A41ki6VcxyKia6Hv3jNQV96gp6io3W5W8noQTMkeYddZfpi%2FMrrP7GhDMPCl89AGOqUBbqwZGofW82nX5lMIojB78M3Stym5%2BJ%2B%2B25HbiEHZoMRm8GuMFNpdfNSohmivWfuF%2Fa3vO%2F2TESYBaSh0RRnTW4rLcViL6TBnxczZjof9xQ5sQWqO8Ul6RyvS9YKNlOwtnYT%2BES91%2BxzWVTY9ZoZjBWqn9o1utRdJ7jNHCqkp9lIMfLkhx6emIJbaonQXehkoY7Jl4U2ViajoyqSsnscrBAPgDkSg&X-Amz-Signature=c60c7b3a0c9ca6154a64d48cce33d8991ba1756bf559adcd1af94ff9dee82836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OVAFMW4%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDjuKaarh5X0GLp65kz1lkWLUg0LeXxqScyPFoVfBYr9gIgCFWP15QD6pQrNplLGVYdQEE5C2pva9xCsb5cd%2BdM0A8q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDNjbKIvYSYrGs7UQ1yrcA300ukMZ8NvcBfNDggaxgcaN37fy%2BflfjA7B25puYhaUubyPqv15TRX23Bf8d4lL3yCNAbjYSQHH3GiLwkWPeq03v87bdErK6HX4tCDF%2F0iEf5RpvnvhgYdYQ7grN3At1Y5%2BNJm0SMGxRf%2Fx6GJVEqVgtROaE%2F2S74qS%2FVOE6PRTLb8ORhyYSqmP7AuOsSVG9oAxxgbRKOKfZWuj3%2FcEHhWNslXQXF1H95yhHRmO%2FYFp2xfD2cVhc8FVPsRDhkNPn%2BYzhbT3FJdKSBvrx1mQleumMB9EJ8zAQwlcLiobfG96AMR83%2BF%2Fl45VNAMQNXFRNMrzfhq4i411Z%2B7kqsZJhNP6%2FguCSnRR61PFlMUH1iV9%2Fze1KFz1H9FLwxNTy7pFacBGy%2FrNkU6Q2oSMWnu10yG8vCc3EhkINuZAqsptxLpVaf%2BpzEJcy4MvAJTKXRU8VQphG%2FgVrJ3lfXHVk%2FLdGT%2F6Hd35o5wxthp%2Fjj0fzxSfpUTiX%2BJeiker4RH%2Fa5YrpnRGF1RhuMCsct4wWvnVHN6eu6YqoFy%2BZvLm%2BZkPax8tiQBHdaDvelGUjMeWICP%2BqNIogHMT%2Fs%2BX9TaBqzRrV2OvJEnrdXVQhJkMdZCQE966Yhij0KJ7rGi8lvoIMJSm89AGOqUBaS5pRFWnYZJ7y9ZTBd0D4PrUqTeGfuJs5%2FnbvlHG7t72ylu5jH58GJbeuNhgTUzbVsI0h6pwdh7z2pdpiIfGBZv5D0MvRuGySfHXUVhXCa8agVY3hiVAocJS3f5MX%2BZWXr2qHMqp%2BNyrxVpEmwkX6AMSsxpONFRliLH8k91wBKaYnF5DdfyrW7KwY0SCUiDVzjlGJ38iF%2Fa%2BU0DvkZ2YdJAF0YVN&X-Amz-Signature=5cb480e0a624792dca1cdfed573d5245312914ed6c95636d5553198c0b34eee7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWFI2WA2%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIELJcq3Y%2FpPXB7kD1astta4DrMhdkC9wbPv7OblHqkHhAiEAh959Ts%2FScpwgQ4lHTlmvjKWtBOqTYhBwRumbeqS8V%2FEq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDGCDFUp1NhR63qccZircA19tmrqXMFvAORQnQ2bEj5VpZZ6Mqgsh2Hu7ew3mFv2HkZeAigDQ5v11iwo9wQwjuba7%2F06dHfX%2FnjYoSRIXVx99VrcF6KqC0F3NuJblPHYLxDN3men26yR%2BmGFxczscOPms0GeXtFGlv4f2BWj62ZDgcMDIv15HrpsZ1a8dWnuIAoqW4MavtCwOohmaMtfESIMVf8MBw7VIL%2BTtHDTTo%2BdxxM00d9R7jSTwPnvFcXLQOfHNSRUMUb6Pt1Ul0wAIv%2BZN9ZzezWzafMmj9ZFonFQ%2B6xBItuq9AJbYIJngKMY4db55xSY2IY1txobMLorXkHjvo9yXc7ErK50QMUJamgf6LMiUjf5c5PJZb%2FJhs5nZ7ugA8j%2F9EeT43mym2GH9obEZEMT5U4JT5UrxL2PaGxT2lu8rf%2BZfzz8M3tDRzRBTl7QfP9MXJsmvYKuB57Z64u%2BKPQHZHMJpAfOx%2Bms%2BsX9IQdr3ewy2cRSQHFhPy7nIaABr3COWvPjpcN8SyK5CtQy8iTrgfAzw9xrNHU7AcWnCBOJqDSt2ZNVEFlcUHy2D5sDW98wdEe7%2Fa%2Fsha%2F7LByzCjRmhEhW2Fefaa4vJez6Zyi42FWS83PPtNdplp95SsCTgVlCc9Rgp2TmwMNOk89AGOqUBsSS5hMVSkxIdUVyOi56l9jCNHyqDaTw8HgCG9qsg9pzdZwL22CmVXmeniJfgLb5thKCirNirbSB01wvke60%2FyoWsxo8NxO8IBSvEUX5%2FV5AgtvuUPVwLJGcTtJEgj7zKVqylanApzNdltAzRQbqR7z%2BMkvM2kYVYZJpzLjt%2BIplhl9IXsqzVGJFxUmjXprJqop8%2Bi7%2Bkao54IWkeFX%2BYzaxtmYIg&X-Amz-Signature=00790e1bbbcd925de3ebcc2bab32c434ab04cf4d5f01d0c01d10f1c2b6b3e79b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OVAFMW4%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDjuKaarh5X0GLp65kz1lkWLUg0LeXxqScyPFoVfBYr9gIgCFWP15QD6pQrNplLGVYdQEE5C2pva9xCsb5cd%2BdM0A8q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDNjbKIvYSYrGs7UQ1yrcA300ukMZ8NvcBfNDggaxgcaN37fy%2BflfjA7B25puYhaUubyPqv15TRX23Bf8d4lL3yCNAbjYSQHH3GiLwkWPeq03v87bdErK6HX4tCDF%2F0iEf5RpvnvhgYdYQ7grN3At1Y5%2BNJm0SMGxRf%2Fx6GJVEqVgtROaE%2F2S74qS%2FVOE6PRTLb8ORhyYSqmP7AuOsSVG9oAxxgbRKOKfZWuj3%2FcEHhWNslXQXF1H95yhHRmO%2FYFp2xfD2cVhc8FVPsRDhkNPn%2BYzhbT3FJdKSBvrx1mQleumMB9EJ8zAQwlcLiobfG96AMR83%2BF%2Fl45VNAMQNXFRNMrzfhq4i411Z%2B7kqsZJhNP6%2FguCSnRR61PFlMUH1iV9%2Fze1KFz1H9FLwxNTy7pFacBGy%2FrNkU6Q2oSMWnu10yG8vCc3EhkINuZAqsptxLpVaf%2BpzEJcy4MvAJTKXRU8VQphG%2FgVrJ3lfXHVk%2FLdGT%2F6Hd35o5wxthp%2Fjj0fzxSfpUTiX%2BJeiker4RH%2Fa5YrpnRGF1RhuMCsct4wWvnVHN6eu6YqoFy%2BZvLm%2BZkPax8tiQBHdaDvelGUjMeWICP%2BqNIogHMT%2Fs%2BX9TaBqzRrV2OvJEnrdXVQhJkMdZCQE966Yhij0KJ7rGi8lvoIMJSm89AGOqUBaS5pRFWnYZJ7y9ZTBd0D4PrUqTeGfuJs5%2FnbvlHG7t72ylu5jH58GJbeuNhgTUzbVsI0h6pwdh7z2pdpiIfGBZv5D0MvRuGySfHXUVhXCa8agVY3hiVAocJS3f5MX%2BZWXr2qHMqp%2BNyrxVpEmwkX6AMSsxpONFRliLH8k91wBKaYnF5DdfyrW7KwY0SCUiDVzjlGJ38iF%2Fa%2BU0DvkZ2YdJAF0YVN&X-Amz-Signature=71cec596eba3d93f5cef8e960fae25359d8f9204e3d6c4fd892db76f7a32b8c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFP2ACHD%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGKS6RydpnAC2imADWEQPbNhkvtu4Ppbe8M5UmCwgKjmAiAmjuSXcNi5X%2BPKxZhUocU%2BCXfHLED9sQJjB%2F9OAmSV5Sr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM28DpkeY3UKKMm%2Bt3KtwDAm410pHGmI%2FmgoUxYeJ%2Ff000RsqsackHU4fMT2sM8xwg7d8W%2F62lxtfThR4IVFbShD6G37lNj2C0hLLnVaaNth2FZnupuAnD1404znoVxXdFDG3uf%2BEEBKzqp%2BEP9qGNiXpYXjwZz8BjW3fmpfP9d2KZwOVT2WblgBVaXRp1T2qcaB4w6s0W641oeEgByJC5oBnGFdLv3AbP2fDvWMAqt1zWt08aK9LKKBfihHxtpbL8qqDIDTetN1RbxyUjlLN846qCL9bS6Lcpq02NUXrgV4xHjO7bmM%2FbQxa23BqcGaJxkUDOBtaxnN3En6g9tOk71gwAOrYF7g5O035ZZayDk7j9pgRBBNkY3NMiZBEzn9pj9RQDTHRcZzS20yFbtmmSOtqMm6kArU7J0kciG40w6DautVT8ZsXuXFXNg3eCAoc%2By1Mitn%2FNROdpVk2xtBXe7GqTDmnKzqoFMo3qYnGjgeuTSNVuoPgNY8n40xtAYlsYf%2Bh4d6R2Pg3ddK8YFuTfyOcni54egu8ipB6tGLI4w6jaXMA%2FQe%2Fa3Z0XhlYdTZNzt3JSHRHo9q%2FqZOiW%2F4kksn8T6qbIBHzdD9%2FfIkG3iOM0jh0evt1zgeqJTVy9NCb8nv7uM3s6b5zgmb8wrKfz0AY6pgFWhdyv6SRYLueuVGeo7s0gPwGcn76xG8YNAQSnr7%2FCMnw4xLM1Yn%2B79ALcv6qU3akLDYmgD1%2FyNzgoofTKMIny41UP4LvdSjIYHG%2BqG1x7HTwqUBEjQyd%2B2EL%2BcRG7mRKbYQqfcM%2FLgX7Xx9AeYogdcCb5dJFc%2Fd%2BhmycFDBxuQAW4ZW%2FWGmDQ2KoQXhM5o0WD99lyVhNOkdK7bADD%2BKURC5IyN8WH&X-Amz-Signature=3016122aa07f03c958cbecc018619e38867ab8c499935c7fd9ae4cc554cccf37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWTSDASM%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIFBC0ogCaDP3iuVpGyTWJyoBsK8H%2FvB2NtCd5KjjCBZwAiBMBUpY8FCpSfcMICOLGEHEpOpK%2F8uF21H2I2m0TWDeWCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM2nu2AcmTJsRSRnttKtwDgwjTkP5Eqv2q8heLFQObvI7bHBXi6L3f9%2FauGCOmWu0ZaMEdZSoZCa%2B8csbDmlrT1mki9E0nwTx7CbGS2aUTu2PvIEIFw5AExd44PncEJXBLqykXJcQuBfbWGE0td0fg7fH%2FUKikqbwh55XsjGfGHzL2B7ednr6o6uWn8hiZDkKBq0XMW9MxSjoRSEHt2wpyBEBtagnn0AK7MBNHd1dQdhPW9ShUzXQbgYH0l9eYGjj%2F8HwlP73dZBRkv50ZMyqF6VY8CVJqwH41oImTXFK%2Bzl0eW8mozJXwo1HNJk6MK1QoGHKTlr17AtzFDSSLpQmSOCf%2F9rlvZEw0QI71FnAdcIgLYzMUcOZhPfAtSFCV9jn0qH8UQGl1P5ERt9Sy5zXyR0aO%2BUUeiM%2Fw%2Bw1YoYcsPcGatWziYvW6eclcJB%2BjwI4LzjZ0wtjn4mTshhq5c8qZ7I71y%2FzwX%2FtyntHQVonm%2BnAC6s9u43UshYOsKNAfJnZmv47OM%2BYyFceV9RAjcM5V3G5pfJqnZjqzBpc8tlfvoLfSxJ2qucOoO3us4ijLWwHPGK%2B%2BJ2H4e08VhtCIVvm7tWmY9C9LwME91csdbZ%2BdtdwiKdQN1QrvW6uKGooYbgwxhXoKGfULUZQYXtwwqqfz0AY6pgFaTC8%2Bx7esmp6xWIxW9yE2hi%2FibHLIYIVd62I46cEJN%2BN63OquvxpIO1KFzYhBTQy4nobU%2FpLCOOIj7X1YiKVT5Sjd087CgJ5%2BOabV8tkPErd61V1uKKnM1DiOa65YnMwlZSy3E5Icsht%2FGXg2Y0cew7y1rwW3v2rNNVv6PYiDOs8Nby1onHdmVfV2HJ9TdvM76UIE8jOxp5evwNT2uXaDuZ5%2BlCEY&X-Amz-Signature=8b55d1039eacea6591261d405115359c5b87a5aaa72c524bb048ce1d31111919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZSI4PWH%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCID0ki8h7yTaUEMrjrn0cxTYMTEXsTC5tFLjo%2BQB%2BVKj%2FAiB3ynHAZJmsFUnA78tsTbtspi1BIRROnDLG%2BnC1dL9ocir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMTMPoE7u4m%2FRs5bVqKtwD9ku8%2FSLqqMcbIlw7aGj4JAyhlC6DX5WB2ICF0cdgdmxG%2F%2ByrbR1CHCgKkVEIOeBoVESaMLx338UAwOvScOYRSimZN%2Bwb8LFqEGe0NI0Sl%2BBEAZce%2FkVvhCQ%2BckRZKdRDEkya0MuzBrr7ohbDJaS7c3U3Y1jeO5cBbJ3f8X3taDu9f2CO%2B5D4EdodokpBdfoBJvOm14PUjmX2HquFC0%2BDtp7hipO77PMu%2BFGKncRlszduFxmHGr1LKOv4H1x%2FzQDUSoHfr%2FsniU2QNmVzqKdHUWFGMS0vU%2FtvDDQYLIK9Ds6QnJBaniTxusL4XNecmDcStsGKOBcRv3cM79fvfJhYccYvdrsLS6Cgk%2B6IDIang06f7uGjBEbVOcxHybHm0%2Bhxa6Ij9HZ6%2BdiZX31J0m5fIHqA3Juas9QfJ1rIBITBPGxfPo7t9Z%2BzcLHdHEZkrXAFzuczRsY26Q72%2FuVobD8TNqfeal0095ZI0kXIRZxoYyRp1RmQeTNELFhaOXYDVMW9HMvHwU3%2B%2BSPLN9RwIjkjidaRnFGvrb1T%2B%2BSb4LF%2BJiz3iaj91tvc4px%2B4aoqRrYqF6ySn6LyEdIkfw3vPixvWPRej1kar2Mb47TGEU%2BUPlTrzCbGl0n1GhtfI5IwxKfz0AY6pgGNzaqptXFjNpqvHbDtTQTj1fY%2FmfvR64p7tbZHMIEeaKgMfCp0j0yukae%2FFq5GkMVhDMrdyQmKbBHMxaQWNpd3%2BMj0m3oOTKlueE1nEVU3J5NxVecxn8yfSrM%2BYhe6mr62LjiuRFcSKurI%2BmJ%2By278zY7sYhRIu63S8qLvozT%2BeFBD1r8lNlp8K4ZX7moLJPrzSO%2BZG%2BsT4UT%2FXS%2Flm6a30OUlM6o5&X-Amz-Signature=7a8ce4ace0c9e46a582a698e8f849e72a1d6220e07b10b56fde16ce0187b1d7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OVAFMW4%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDjuKaarh5X0GLp65kz1lkWLUg0LeXxqScyPFoVfBYr9gIgCFWP15QD6pQrNplLGVYdQEE5C2pva9xCsb5cd%2BdM0A8q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDNjbKIvYSYrGs7UQ1yrcA300ukMZ8NvcBfNDggaxgcaN37fy%2BflfjA7B25puYhaUubyPqv15TRX23Bf8d4lL3yCNAbjYSQHH3GiLwkWPeq03v87bdErK6HX4tCDF%2F0iEf5RpvnvhgYdYQ7grN3At1Y5%2BNJm0SMGxRf%2Fx6GJVEqVgtROaE%2F2S74qS%2FVOE6PRTLb8ORhyYSqmP7AuOsSVG9oAxxgbRKOKfZWuj3%2FcEHhWNslXQXF1H95yhHRmO%2FYFp2xfD2cVhc8FVPsRDhkNPn%2BYzhbT3FJdKSBvrx1mQleumMB9EJ8zAQwlcLiobfG96AMR83%2BF%2Fl45VNAMQNXFRNMrzfhq4i411Z%2B7kqsZJhNP6%2FguCSnRR61PFlMUH1iV9%2Fze1KFz1H9FLwxNTy7pFacBGy%2FrNkU6Q2oSMWnu10yG8vCc3EhkINuZAqsptxLpVaf%2BpzEJcy4MvAJTKXRU8VQphG%2FgVrJ3lfXHVk%2FLdGT%2F6Hd35o5wxthp%2Fjj0fzxSfpUTiX%2BJeiker4RH%2Fa5YrpnRGF1RhuMCsct4wWvnVHN6eu6YqoFy%2BZvLm%2BZkPax8tiQBHdaDvelGUjMeWICP%2BqNIogHMT%2Fs%2BX9TaBqzRrV2OvJEnrdXVQhJkMdZCQE966Yhij0KJ7rGi8lvoIMJSm89AGOqUBaS5pRFWnYZJ7y9ZTBd0D4PrUqTeGfuJs5%2FnbvlHG7t72ylu5jH58GJbeuNhgTUzbVsI0h6pwdh7z2pdpiIfGBZv5D0MvRuGySfHXUVhXCa8agVY3hiVAocJS3f5MX%2BZWXr2qHMqp%2BNyrxVpEmwkX6AMSsxpONFRliLH8k91wBKaYnF5DdfyrW7KwY0SCUiDVzjlGJ38iF%2Fa%2BU0DvkZ2YdJAF0YVN&X-Amz-Signature=30b4a2de515bd51cb4941bbb13b19faf12fc4292168ad7cfdf41338ed66a1cfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OVAFMW4%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDjuKaarh5X0GLp65kz1lkWLUg0LeXxqScyPFoVfBYr9gIgCFWP15QD6pQrNplLGVYdQEE5C2pva9xCsb5cd%2BdM0A8q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDNjbKIvYSYrGs7UQ1yrcA300ukMZ8NvcBfNDggaxgcaN37fy%2BflfjA7B25puYhaUubyPqv15TRX23Bf8d4lL3yCNAbjYSQHH3GiLwkWPeq03v87bdErK6HX4tCDF%2F0iEf5RpvnvhgYdYQ7grN3At1Y5%2BNJm0SMGxRf%2Fx6GJVEqVgtROaE%2F2S74qS%2FVOE6PRTLb8ORhyYSqmP7AuOsSVG9oAxxgbRKOKfZWuj3%2FcEHhWNslXQXF1H95yhHRmO%2FYFp2xfD2cVhc8FVPsRDhkNPn%2BYzhbT3FJdKSBvrx1mQleumMB9EJ8zAQwlcLiobfG96AMR83%2BF%2Fl45VNAMQNXFRNMrzfhq4i411Z%2B7kqsZJhNP6%2FguCSnRR61PFlMUH1iV9%2Fze1KFz1H9FLwxNTy7pFacBGy%2FrNkU6Q2oSMWnu10yG8vCc3EhkINuZAqsptxLpVaf%2BpzEJcy4MvAJTKXRU8VQphG%2FgVrJ3lfXHVk%2FLdGT%2F6Hd35o5wxthp%2Fjj0fzxSfpUTiX%2BJeiker4RH%2Fa5YrpnRGF1RhuMCsct4wWvnVHN6eu6YqoFy%2BZvLm%2BZkPax8tiQBHdaDvelGUjMeWICP%2BqNIogHMT%2Fs%2BX9TaBqzRrV2OvJEnrdXVQhJkMdZCQE966Yhij0KJ7rGi8lvoIMJSm89AGOqUBaS5pRFWnYZJ7y9ZTBd0D4PrUqTeGfuJs5%2FnbvlHG7t72ylu5jH58GJbeuNhgTUzbVsI0h6pwdh7z2pdpiIfGBZv5D0MvRuGySfHXUVhXCa8agVY3hiVAocJS3f5MX%2BZWXr2qHMqp%2BNyrxVpEmwkX6AMSsxpONFRliLH8k91wBKaYnF5DdfyrW7KwY0SCUiDVzjlGJ38iF%2Fa%2BU0DvkZ2YdJAF0YVN&X-Amz-Signature=1fa4af489d3dcebb6942603253b8b5d0cb8e13e8f4b13114ec048eb3214c4eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTDGSPS2%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBWUdJ4jwbCigaf3WJW1XsYqUUW5LC7%2Bcdb2o18XSgf4AiAyAbZlfAG3GmpY4fjjtkYwT4BkymJCaRQ%2FidoRSnOIJCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMr0rvNIA9cvq27RRXKtwDCRS7GcEugLjCQ7j0TvritRvOWWPOgWLp3%2FCbL3bpLkBWksWzA8U%2BehAEVs3G0NZcJQiuCEjIdR5UBv%2FuQySc5HF2hnHpcvcOVnwAFIaF5Vupmw%2BVG2xNbNIxsaMEeq%2Bv1Z4IQiTsEluktLwmaoCTtXfuZkc7IINa5GfBVO%2Fog5KT2Ll3drImljPNTBG%2BPNjiS%2B2nk0kGTXqCnVOTF7lfH%2BvMNnK2nonKKmdZY3FTlGwBj0UZAHL1H0ErXpqIq7AfqVweBqjTGA3dr%2FqAcVsFC9nhCvRqGqXWyCvvORYDEmpoOBq6UYqhHFwsnvQq3bzN%2FBBMFUO2Yu0ngDVL4En9qKUtjjr3yGUdyc5BG2BFedqspmHNWPQVDlTpDM40PrqnhY2nh%2FHC3ZOrLGtzP1ZCGfF%2FYtvXM3zsyMdNwnGvXeY0Sr2fKw11eRL%2FAneDaOOv2GHfR%2BDvERCre97%2FTdGVA5kMXJsKhQpdJ1hdExyww6uVRk1XyEooyosh4XXKtpHM%2FcZEeBbjFHCGkNDN3Jx1SJtm756G8u2CI5E9SRHUzKnGRbuPzJIwn%2BEm5ic9T5mjw97qwfiwoWGueDnoARLSJXj7qkMuKLXVQ8fTerecPi2eNIEZ77yPz49LT94w9aXz0AY6pgHpPCZ%2FHxGThebR08myRBW3HSdetx4Ygp%2FLBRZPhYgT5HUIKTQXURsYS5yeCzTZLSLGgLsaZED8E1vAQd65om7WaWWj%2B3W8ziiYpZJRw%2FsLdl73EumzCwWSE0Ti%2FImY4a%2F1ilrCKvE8qW57lGQKkCLAU%2Fb7y7MnOKVc9TScp48yx0uB0%2FHdaDx8lqbxVr5HsJrOWUXU3ceQ0G%2FBdt91iU6E47%2FQApEh&X-Amz-Signature=1481829bd8d3226f3aa5415e3aff83461181d185759423eaccef89950890ec49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTDGSPS2%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBWUdJ4jwbCigaf3WJW1XsYqUUW5LC7%2Bcdb2o18XSgf4AiAyAbZlfAG3GmpY4fjjtkYwT4BkymJCaRQ%2FidoRSnOIJCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMr0rvNIA9cvq27RRXKtwDCRS7GcEugLjCQ7j0TvritRvOWWPOgWLp3%2FCbL3bpLkBWksWzA8U%2BehAEVs3G0NZcJQiuCEjIdR5UBv%2FuQySc5HF2hnHpcvcOVnwAFIaF5Vupmw%2BVG2xNbNIxsaMEeq%2Bv1Z4IQiTsEluktLwmaoCTtXfuZkc7IINa5GfBVO%2Fog5KT2Ll3drImljPNTBG%2BPNjiS%2B2nk0kGTXqCnVOTF7lfH%2BvMNnK2nonKKmdZY3FTlGwBj0UZAHL1H0ErXpqIq7AfqVweBqjTGA3dr%2FqAcVsFC9nhCvRqGqXWyCvvORYDEmpoOBq6UYqhHFwsnvQq3bzN%2FBBMFUO2Yu0ngDVL4En9qKUtjjr3yGUdyc5BG2BFedqspmHNWPQVDlTpDM40PrqnhY2nh%2FHC3ZOrLGtzP1ZCGfF%2FYtvXM3zsyMdNwnGvXeY0Sr2fKw11eRL%2FAneDaOOv2GHfR%2BDvERCre97%2FTdGVA5kMXJsKhQpdJ1hdExyww6uVRk1XyEooyosh4XXKtpHM%2FcZEeBbjFHCGkNDN3Jx1SJtm756G8u2CI5E9SRHUzKnGRbuPzJIwn%2BEm5ic9T5mjw97qwfiwoWGueDnoARLSJXj7qkMuKLXVQ8fTerecPi2eNIEZ77yPz49LT94w9aXz0AY6pgHpPCZ%2FHxGThebR08myRBW3HSdetx4Ygp%2FLBRZPhYgT5HUIKTQXURsYS5yeCzTZLSLGgLsaZED8E1vAQd65om7WaWWj%2B3W8ziiYpZJRw%2FsLdl73EumzCwWSE0Ti%2FImY4a%2F1ilrCKvE8qW57lGQKkCLAU%2Fb7y7MnOKVc9TScp48yx0uB0%2FHdaDx8lqbxVr5HsJrOWUXU3ceQ0G%2FBdt91iU6E47%2FQApEh&X-Amz-Signature=499dfb304e648eec33e45a73b31d87bd5a91272dfa3cdb354f088efcfd563117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTDGSPS2%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBWUdJ4jwbCigaf3WJW1XsYqUUW5LC7%2Bcdb2o18XSgf4AiAyAbZlfAG3GmpY4fjjtkYwT4BkymJCaRQ%2FidoRSnOIJCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMr0rvNIA9cvq27RRXKtwDCRS7GcEugLjCQ7j0TvritRvOWWPOgWLp3%2FCbL3bpLkBWksWzA8U%2BehAEVs3G0NZcJQiuCEjIdR5UBv%2FuQySc5HF2hnHpcvcOVnwAFIaF5Vupmw%2BVG2xNbNIxsaMEeq%2Bv1Z4IQiTsEluktLwmaoCTtXfuZkc7IINa5GfBVO%2Fog5KT2Ll3drImljPNTBG%2BPNjiS%2B2nk0kGTXqCnVOTF7lfH%2BvMNnK2nonKKmdZY3FTlGwBj0UZAHL1H0ErXpqIq7AfqVweBqjTGA3dr%2FqAcVsFC9nhCvRqGqXWyCvvORYDEmpoOBq6UYqhHFwsnvQq3bzN%2FBBMFUO2Yu0ngDVL4En9qKUtjjr3yGUdyc5BG2BFedqspmHNWPQVDlTpDM40PrqnhY2nh%2FHC3ZOrLGtzP1ZCGfF%2FYtvXM3zsyMdNwnGvXeY0Sr2fKw11eRL%2FAneDaOOv2GHfR%2BDvERCre97%2FTdGVA5kMXJsKhQpdJ1hdExyww6uVRk1XyEooyosh4XXKtpHM%2FcZEeBbjFHCGkNDN3Jx1SJtm756G8u2CI5E9SRHUzKnGRbuPzJIwn%2BEm5ic9T5mjw97qwfiwoWGueDnoARLSJXj7qkMuKLXVQ8fTerecPi2eNIEZ77yPz49LT94w9aXz0AY6pgHpPCZ%2FHxGThebR08myRBW3HSdetx4Ygp%2FLBRZPhYgT5HUIKTQXURsYS5yeCzTZLSLGgLsaZED8E1vAQd65om7WaWWj%2B3W8ziiYpZJRw%2FsLdl73EumzCwWSE0Ti%2FImY4a%2F1ilrCKvE8qW57lGQKkCLAU%2Fb7y7MnOKVc9TScp48yx0uB0%2FHdaDx8lqbxVr5HsJrOWUXU3ceQ0G%2FBdt91iU6E47%2FQApEh&X-Amz-Signature=59a895a2022450fa6456d1768e9d27c7951f60e307d3922767f0cdb54dd5345e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTDGSPS2%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBWUdJ4jwbCigaf3WJW1XsYqUUW5LC7%2Bcdb2o18XSgf4AiAyAbZlfAG3GmpY4fjjtkYwT4BkymJCaRQ%2FidoRSnOIJCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMr0rvNIA9cvq27RRXKtwDCRS7GcEugLjCQ7j0TvritRvOWWPOgWLp3%2FCbL3bpLkBWksWzA8U%2BehAEVs3G0NZcJQiuCEjIdR5UBv%2FuQySc5HF2hnHpcvcOVnwAFIaF5Vupmw%2BVG2xNbNIxsaMEeq%2Bv1Z4IQiTsEluktLwmaoCTtXfuZkc7IINa5GfBVO%2Fog5KT2Ll3drImljPNTBG%2BPNjiS%2B2nk0kGTXqCnVOTF7lfH%2BvMNnK2nonKKmdZY3FTlGwBj0UZAHL1H0ErXpqIq7AfqVweBqjTGA3dr%2FqAcVsFC9nhCvRqGqXWyCvvORYDEmpoOBq6UYqhHFwsnvQq3bzN%2FBBMFUO2Yu0ngDVL4En9qKUtjjr3yGUdyc5BG2BFedqspmHNWPQVDlTpDM40PrqnhY2nh%2FHC3ZOrLGtzP1ZCGfF%2FYtvXM3zsyMdNwnGvXeY0Sr2fKw11eRL%2FAneDaOOv2GHfR%2BDvERCre97%2FTdGVA5kMXJsKhQpdJ1hdExyww6uVRk1XyEooyosh4XXKtpHM%2FcZEeBbjFHCGkNDN3Jx1SJtm756G8u2CI5E9SRHUzKnGRbuPzJIwn%2BEm5ic9T5mjw97qwfiwoWGueDnoARLSJXj7qkMuKLXVQ8fTerecPi2eNIEZ77yPz49LT94w9aXz0AY6pgHpPCZ%2FHxGThebR08myRBW3HSdetx4Ygp%2FLBRZPhYgT5HUIKTQXURsYS5yeCzTZLSLGgLsaZED8E1vAQd65om7WaWWj%2B3W8ziiYpZJRw%2FsLdl73EumzCwWSE0Ti%2FImY4a%2F1ilrCKvE8qW57lGQKkCLAU%2Fb7y7MnOKVc9TScp48yx0uB0%2FHdaDx8lqbxVr5HsJrOWUXU3ceQ0G%2FBdt91iU6E47%2FQApEh&X-Amz-Signature=7f49f8f914ea6846feea1431b2fd472ba951d010783aa5b6e13aeb9aa7d03c67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UJOG3JT%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIFbiEq2jPY57dIyw2uj0Dz1%2BFDb8up0xUpG3OWwxfWzNAiBSy4WTOUtHa33%2FWH3XE94Byi2TL%2Bjbho9oZ7fh36mtyCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMgq5KUhqW3qPm%2FP00KtwDbQgN1NGT8aRwnensRuVQWVxl8J%2FHtV1skweY8ds3Bxc1QFOegL33eyMm%2FKpsH%2Fvrh033M6c%2F5MvcTThYV3MqDhsznQQv0taJLMJuj%2FBc9NMHl9ak67jLwmlqzndAgXZyPMGwpLCHRbi4vjVadSQnHIh3QUN5v5vKdEPlbf9sWbKmV%2FxGPdRkIXx8JKgVpEmPbDYh30KYoWoqpwFvouVkQc2wTYoxXb7sgX6d4uNvfYybnrMdqTQg3Gnx36VKWr%2FhNL3KnyANSjNqg3OWoef%2BSmTWTJKwQtCaMxj6l4yKqYRPdazU6CZuebDD1%2BrFTa2zKj4p%2FE9YFOfQL8Yf1Yxv2YVqCzmkSDkwkuRsByPqQAA%2FTMUOLcPlW%2BJznLG03iq0PKoeBDksWId8hYZe3iDJyaeOpJhOavMiixYfpNf7XCyHmc3wcx0L5gqKikwBS2GGN1f2%2Fetu05Df0Btf8RkT8z1gZyGtpErfP70NLrqMcWEQEwRpEI62RVqplCnAeUY6biBX%2BalbmL%2BMQ9w%2B4xpFHjHeY1necIDNHG6UijLE1Dbpd16S1jzePaQPZ3uCpv2G1Qq%2F31%2B7ghRMvPBy6%2FeFjdfmEBEcG0GkfLBIBuZ3na7OhlF9U7qP2uN3crow7abz0AY6pgEF5K8hrynTDlqbZwlnT%2F3FhSadcODAFBa05EemrkcZFNXHZtPmzBUE1xi9MLCeh7Pvb8a9dkC6RkwWR18qpsgq%2FZHl%2BvaVeOCI%2B%2F%2FDjKDNefN6wnhpQ1wKX8mpo%2Flfmb58TSxZIlnHBbfwHmYDeAmNJb22kz7WdCGjaNWqKaHDO3XqwdRX4RUh%2FwOc3r0AiDNl0LWQVfbHP3tjGPX9GV5h3fuvXU4E&X-Amz-Signature=d36380bd5776089ee1feddca443a14211e2b3d6d02501d5b4be09f4ae0a4d3f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTDGSPS2%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBWUdJ4jwbCigaf3WJW1XsYqUUW5LC7%2Bcdb2o18XSgf4AiAyAbZlfAG3GmpY4fjjtkYwT4BkymJCaRQ%2FidoRSnOIJCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMr0rvNIA9cvq27RRXKtwDCRS7GcEugLjCQ7j0TvritRvOWWPOgWLp3%2FCbL3bpLkBWksWzA8U%2BehAEVs3G0NZcJQiuCEjIdR5UBv%2FuQySc5HF2hnHpcvcOVnwAFIaF5Vupmw%2BVG2xNbNIxsaMEeq%2Bv1Z4IQiTsEluktLwmaoCTtXfuZkc7IINa5GfBVO%2Fog5KT2Ll3drImljPNTBG%2BPNjiS%2B2nk0kGTXqCnVOTF7lfH%2BvMNnK2nonKKmdZY3FTlGwBj0UZAHL1H0ErXpqIq7AfqVweBqjTGA3dr%2FqAcVsFC9nhCvRqGqXWyCvvORYDEmpoOBq6UYqhHFwsnvQq3bzN%2FBBMFUO2Yu0ngDVL4En9qKUtjjr3yGUdyc5BG2BFedqspmHNWPQVDlTpDM40PrqnhY2nh%2FHC3ZOrLGtzP1ZCGfF%2FYtvXM3zsyMdNwnGvXeY0Sr2fKw11eRL%2FAneDaOOv2GHfR%2BDvERCre97%2FTdGVA5kMXJsKhQpdJ1hdExyww6uVRk1XyEooyosh4XXKtpHM%2FcZEeBbjFHCGkNDN3Jx1SJtm756G8u2CI5E9SRHUzKnGRbuPzJIwn%2BEm5ic9T5mjw97qwfiwoWGueDnoARLSJXj7qkMuKLXVQ8fTerecPi2eNIEZ77yPz49LT94w9aXz0AY6pgHpPCZ%2FHxGThebR08myRBW3HSdetx4Ygp%2FLBRZPhYgT5HUIKTQXURsYS5yeCzTZLSLGgLsaZED8E1vAQd65om7WaWWj%2B3W8ziiYpZJRw%2FsLdl73EumzCwWSE0Ti%2FImY4a%2F1ilrCKvE8qW57lGQKkCLAU%2Fb7y7MnOKVc9TScp48yx0uB0%2FHdaDx8lqbxVr5HsJrOWUXU3ceQ0G%2FBdt91iU6E47%2FQApEh&X-Amz-Signature=7d10adfbd6df2692ee687d63aff662cf624a23e2369672f60427494d45e0b990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTDGSPS2%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBWUdJ4jwbCigaf3WJW1XsYqUUW5LC7%2Bcdb2o18XSgf4AiAyAbZlfAG3GmpY4fjjtkYwT4BkymJCaRQ%2FidoRSnOIJCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMr0rvNIA9cvq27RRXKtwDCRS7GcEugLjCQ7j0TvritRvOWWPOgWLp3%2FCbL3bpLkBWksWzA8U%2BehAEVs3G0NZcJQiuCEjIdR5UBv%2FuQySc5HF2hnHpcvcOVnwAFIaF5Vupmw%2BVG2xNbNIxsaMEeq%2Bv1Z4IQiTsEluktLwmaoCTtXfuZkc7IINa5GfBVO%2Fog5KT2Ll3drImljPNTBG%2BPNjiS%2B2nk0kGTXqCnVOTF7lfH%2BvMNnK2nonKKmdZY3FTlGwBj0UZAHL1H0ErXpqIq7AfqVweBqjTGA3dr%2FqAcVsFC9nhCvRqGqXWyCvvORYDEmpoOBq6UYqhHFwsnvQq3bzN%2FBBMFUO2Yu0ngDVL4En9qKUtjjr3yGUdyc5BG2BFedqspmHNWPQVDlTpDM40PrqnhY2nh%2FHC3ZOrLGtzP1ZCGfF%2FYtvXM3zsyMdNwnGvXeY0Sr2fKw11eRL%2FAneDaOOv2GHfR%2BDvERCre97%2FTdGVA5kMXJsKhQpdJ1hdExyww6uVRk1XyEooyosh4XXKtpHM%2FcZEeBbjFHCGkNDN3Jx1SJtm756G8u2CI5E9SRHUzKnGRbuPzJIwn%2BEm5ic9T5mjw97qwfiwoWGueDnoARLSJXj7qkMuKLXVQ8fTerecPi2eNIEZ77yPz49LT94w9aXz0AY6pgHpPCZ%2FHxGThebR08myRBW3HSdetx4Ygp%2FLBRZPhYgT5HUIKTQXURsYS5yeCzTZLSLGgLsaZED8E1vAQd65om7WaWWj%2B3W8ziiYpZJRw%2FsLdl73EumzCwWSE0Ti%2FImY4a%2F1ilrCKvE8qW57lGQKkCLAU%2Fb7y7MnOKVc9TScp48yx0uB0%2FHdaDx8lqbxVr5HsJrOWUXU3ceQ0G%2FBdt91iU6E47%2FQApEh&X-Amz-Signature=b2f66c71e7c72e650ce898a01f202580e14f9cbd6fb985d7ed482f21c64b0a04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTDGSPS2%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBWUdJ4jwbCigaf3WJW1XsYqUUW5LC7%2Bcdb2o18XSgf4AiAyAbZlfAG3GmpY4fjjtkYwT4BkymJCaRQ%2FidoRSnOIJCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMr0rvNIA9cvq27RRXKtwDCRS7GcEugLjCQ7j0TvritRvOWWPOgWLp3%2FCbL3bpLkBWksWzA8U%2BehAEVs3G0NZcJQiuCEjIdR5UBv%2FuQySc5HF2hnHpcvcOVnwAFIaF5Vupmw%2BVG2xNbNIxsaMEeq%2Bv1Z4IQiTsEluktLwmaoCTtXfuZkc7IINa5GfBVO%2Fog5KT2Ll3drImljPNTBG%2BPNjiS%2B2nk0kGTXqCnVOTF7lfH%2BvMNnK2nonKKmdZY3FTlGwBj0UZAHL1H0ErXpqIq7AfqVweBqjTGA3dr%2FqAcVsFC9nhCvRqGqXWyCvvORYDEmpoOBq6UYqhHFwsnvQq3bzN%2FBBMFUO2Yu0ngDVL4En9qKUtjjr3yGUdyc5BG2BFedqspmHNWPQVDlTpDM40PrqnhY2nh%2FHC3ZOrLGtzP1ZCGfF%2FYtvXM3zsyMdNwnGvXeY0Sr2fKw11eRL%2FAneDaOOv2GHfR%2BDvERCre97%2FTdGVA5kMXJsKhQpdJ1hdExyww6uVRk1XyEooyosh4XXKtpHM%2FcZEeBbjFHCGkNDN3Jx1SJtm756G8u2CI5E9SRHUzKnGRbuPzJIwn%2BEm5ic9T5mjw97qwfiwoWGueDnoARLSJXj7qkMuKLXVQ8fTerecPi2eNIEZ77yPz49LT94w9aXz0AY6pgHpPCZ%2FHxGThebR08myRBW3HSdetx4Ygp%2FLBRZPhYgT5HUIKTQXURsYS5yeCzTZLSLGgLsaZED8E1vAQd65om7WaWWj%2B3W8ziiYpZJRw%2FsLdl73EumzCwWSE0Ti%2FImY4a%2F1ilrCKvE8qW57lGQKkCLAU%2Fb7y7MnOKVc9TScp48yx0uB0%2FHdaDx8lqbxVr5HsJrOWUXU3ceQ0G%2FBdt91iU6E47%2FQApEh&X-Amz-Signature=59a895a2022450fa6456d1768e9d27c7951f60e307d3922767f0cdb54dd5345e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTDGSPS2%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBWUdJ4jwbCigaf3WJW1XsYqUUW5LC7%2Bcdb2o18XSgf4AiAyAbZlfAG3GmpY4fjjtkYwT4BkymJCaRQ%2FidoRSnOIJCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMr0rvNIA9cvq27RRXKtwDCRS7GcEugLjCQ7j0TvritRvOWWPOgWLp3%2FCbL3bpLkBWksWzA8U%2BehAEVs3G0NZcJQiuCEjIdR5UBv%2FuQySc5HF2hnHpcvcOVnwAFIaF5Vupmw%2BVG2xNbNIxsaMEeq%2Bv1Z4IQiTsEluktLwmaoCTtXfuZkc7IINa5GfBVO%2Fog5KT2Ll3drImljPNTBG%2BPNjiS%2B2nk0kGTXqCnVOTF7lfH%2BvMNnK2nonKKmdZY3FTlGwBj0UZAHL1H0ErXpqIq7AfqVweBqjTGA3dr%2FqAcVsFC9nhCvRqGqXWyCvvORYDEmpoOBq6UYqhHFwsnvQq3bzN%2FBBMFUO2Yu0ngDVL4En9qKUtjjr3yGUdyc5BG2BFedqspmHNWPQVDlTpDM40PrqnhY2nh%2FHC3ZOrLGtzP1ZCGfF%2FYtvXM3zsyMdNwnGvXeY0Sr2fKw11eRL%2FAneDaOOv2GHfR%2BDvERCre97%2FTdGVA5kMXJsKhQpdJ1hdExyww6uVRk1XyEooyosh4XXKtpHM%2FcZEeBbjFHCGkNDN3Jx1SJtm756G8u2CI5E9SRHUzKnGRbuPzJIwn%2BEm5ic9T5mjw97qwfiwoWGueDnoARLSJXj7qkMuKLXVQ8fTerecPi2eNIEZ77yPz49LT94w9aXz0AY6pgHpPCZ%2FHxGThebR08myRBW3HSdetx4Ygp%2FLBRZPhYgT5HUIKTQXURsYS5yeCzTZLSLGgLsaZED8E1vAQd65om7WaWWj%2B3W8ziiYpZJRw%2FsLdl73EumzCwWSE0Ti%2FImY4a%2F1ilrCKvE8qW57lGQKkCLAU%2Fb7y7MnOKVc9TScp48yx0uB0%2FHdaDx8lqbxVr5HsJrOWUXU3ceQ0G%2FBdt91iU6E47%2FQApEh&X-Amz-Signature=685316c3f0369d08a80c173fa8640ac482eb2da3d95854837068e4736acfcc15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTDGSPS2%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBWUdJ4jwbCigaf3WJW1XsYqUUW5LC7%2Bcdb2o18XSgf4AiAyAbZlfAG3GmpY4fjjtkYwT4BkymJCaRQ%2FidoRSnOIJCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMr0rvNIA9cvq27RRXKtwDCRS7GcEugLjCQ7j0TvritRvOWWPOgWLp3%2FCbL3bpLkBWksWzA8U%2BehAEVs3G0NZcJQiuCEjIdR5UBv%2FuQySc5HF2hnHpcvcOVnwAFIaF5Vupmw%2BVG2xNbNIxsaMEeq%2Bv1Z4IQiTsEluktLwmaoCTtXfuZkc7IINa5GfBVO%2Fog5KT2Ll3drImljPNTBG%2BPNjiS%2B2nk0kGTXqCnVOTF7lfH%2BvMNnK2nonKKmdZY3FTlGwBj0UZAHL1H0ErXpqIq7AfqVweBqjTGA3dr%2FqAcVsFC9nhCvRqGqXWyCvvORYDEmpoOBq6UYqhHFwsnvQq3bzN%2FBBMFUO2Yu0ngDVL4En9qKUtjjr3yGUdyc5BG2BFedqspmHNWPQVDlTpDM40PrqnhY2nh%2FHC3ZOrLGtzP1ZCGfF%2FYtvXM3zsyMdNwnGvXeY0Sr2fKw11eRL%2FAneDaOOv2GHfR%2BDvERCre97%2FTdGVA5kMXJsKhQpdJ1hdExyww6uVRk1XyEooyosh4XXKtpHM%2FcZEeBbjFHCGkNDN3Jx1SJtm756G8u2CI5E9SRHUzKnGRbuPzJIwn%2BEm5ic9T5mjw97qwfiwoWGueDnoARLSJXj7qkMuKLXVQ8fTerecPi2eNIEZ77yPz49LT94w9aXz0AY6pgHpPCZ%2FHxGThebR08myRBW3HSdetx4Ygp%2FLBRZPhYgT5HUIKTQXURsYS5yeCzTZLSLGgLsaZED8E1vAQd65om7WaWWj%2B3W8ziiYpZJRw%2FsLdl73EumzCwWSE0Ti%2FImY4a%2F1ilrCKvE8qW57lGQKkCLAU%2Fb7y7MnOKVc9TScp48yx0uB0%2FHdaDx8lqbxVr5HsJrOWUXU3ceQ0G%2FBdt91iU6E47%2FQApEh&X-Amz-Signature=b7a634c6f998d352b0c917851aeef8a2050c84eabf696b945d1df05a01136b71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTDGSPS2%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBWUdJ4jwbCigaf3WJW1XsYqUUW5LC7%2Bcdb2o18XSgf4AiAyAbZlfAG3GmpY4fjjtkYwT4BkymJCaRQ%2FidoRSnOIJCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMr0rvNIA9cvq27RRXKtwDCRS7GcEugLjCQ7j0TvritRvOWWPOgWLp3%2FCbL3bpLkBWksWzA8U%2BehAEVs3G0NZcJQiuCEjIdR5UBv%2FuQySc5HF2hnHpcvcOVnwAFIaF5Vupmw%2BVG2xNbNIxsaMEeq%2Bv1Z4IQiTsEluktLwmaoCTtXfuZkc7IINa5GfBVO%2Fog5KT2Ll3drImljPNTBG%2BPNjiS%2B2nk0kGTXqCnVOTF7lfH%2BvMNnK2nonKKmdZY3FTlGwBj0UZAHL1H0ErXpqIq7AfqVweBqjTGA3dr%2FqAcVsFC9nhCvRqGqXWyCvvORYDEmpoOBq6UYqhHFwsnvQq3bzN%2FBBMFUO2Yu0ngDVL4En9qKUtjjr3yGUdyc5BG2BFedqspmHNWPQVDlTpDM40PrqnhY2nh%2FHC3ZOrLGtzP1ZCGfF%2FYtvXM3zsyMdNwnGvXeY0Sr2fKw11eRL%2FAneDaOOv2GHfR%2BDvERCre97%2FTdGVA5kMXJsKhQpdJ1hdExyww6uVRk1XyEooyosh4XXKtpHM%2FcZEeBbjFHCGkNDN3Jx1SJtm756G8u2CI5E9SRHUzKnGRbuPzJIwn%2BEm5ic9T5mjw97qwfiwoWGueDnoARLSJXj7qkMuKLXVQ8fTerecPi2eNIEZ77yPz49LT94w9aXz0AY6pgHpPCZ%2FHxGThebR08myRBW3HSdetx4Ygp%2FLBRZPhYgT5HUIKTQXURsYS5yeCzTZLSLGgLsaZED8E1vAQd65om7WaWWj%2B3W8ziiYpZJRw%2FsLdl73EumzCwWSE0Ti%2FImY4a%2F1ilrCKvE8qW57lGQKkCLAU%2Fb7y7MnOKVc9TScp48yx0uB0%2FHdaDx8lqbxVr5HsJrOWUXU3ceQ0G%2FBdt91iU6E47%2FQApEh&X-Amz-Signature=10bb1568285eaf6c5b48c449132ee527dc3268cae853f420f9421022398b203d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


