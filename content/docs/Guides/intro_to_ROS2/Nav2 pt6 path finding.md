---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-24T10:36:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-24T10:36:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 156
toc: false
icon: ""
---

This part of the guide shows how to finally add Nav2 to our setup.

## Install

```bash
sudo apt install ros-$ROS_DISTRO-navigation2
sudo apt install ros-$ROS_DISTRO-nav2-bringup
```

{{% alert icon=”👾” context="info" %}}

### **New Node** **`nav2_bringup`**

nav2_bring up actual spawns a lot of nodes and topics but I have just shown a few of the important ones.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HKFZ6CL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCSobNSvcSWp%2Fozp7%2FX8RqksjSTH983GJAH3WmCEPVp6gIhAPAp%2FFZHrJGebxReTgczlD2%2F6dM3gCNh%2ByUaKo0B9GmvKv8DCDIQABoMNjM3NDIzMTgzODA1IgxJ1YFguaQhV2hpfBYq3AMJsjPX6IQt8BZlCoTq2vDupWU92ijh7leYi8sSTykOVmi7M%2BY5Uhi1Bs3cth%2BlNi4XM6H3G3PvyzhaxMOa7jP3mN0SVjwxXkpkTpqYXaJNyDqhfiSQ%2BKqTysTLMDKVCTnIKYXK9NRtabmBC%2B4dueF80UsLNzAOXKh28fEtcddhq7uQ%2B271Iu%2FSHittrRaNgzRYU9Oife5fyEI1Sb1v47dT5k2BciDcVM922O4l9POWTJlKl3otsq7kWlGgBCugi1p8hqGJSPLBR5jzFcQ5Ow2OVcV%2Bg5T2M8R3LDDV1LI%2F2OiY%2B1FwuocoQ2V3M710EcbRzU%2FNnB5%2BP1YAx5PidALnsRKlSxdJr1%2FcENa0lsiYenhsUDSiwEngACTqx%2FgA0RIgBPe22k8joHqP%2FHIiJ77B0fhcGqaNSinlMybi55am1qXlLjujiNmCQizyuCTQLvwo%2FmSYCshxX%2Bbc5d1tv94lYTi%2F3Mlryg5yX2KFgwkxxjTrbI10mIAvUjNOcT1vCvnij0AipKzyGvV%2B6VDwrf0svhVe55q9Jy5yQKIFf%2FGaW0AtcqiQfURHpxDNh7UpRHs6SvzCKZhPuBWtJXgNS8FKtP8T4bTwHvKw9GmthRMWGm%2Fzapyv%2F4%2B%2FC2TKWzDl04nEBjqkAeNzdP20ZXgIjZO%2FpCKPGhj%2FNPBeDgDyWvqf3sSkTea2qTYuX0Ho4ybJfnr3sWVg9aghTyql2rx2iESW2KxMu%2BnpUDTJESaIl6pMuTNAPop7m1sccyPMSxiA6HW3%2FvkJ3TReplPEeDxIH8EVzR0K6nh9DhmZfQlLXiShlNgmj7EGep4ElaND9slr6y1EyOU2teSzF%2FtfitU8BY6SUHaLWiLL0X%2Fm&X-Amz-Signature=e34046bee3521ffddd49c109a6e9b45560249092843f3736c1598e4431a4e92c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**                |
| -------- | ----------------------- |
| `/tf`    | map ⇒ odom ⇒ base_link  |
| `/odom`  | nav_msgs/Odometry       |
| `/map`   | nav_mesgs/OccupancyGrid |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

{{< /table >}}

#### description:

Given `/odom`, `/map`, and `map => odom => base_link` outputs a path to the destination given in rviz on `/plan` and collision avoidance on `/cmd_vel` 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HKFZ6CL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCSobNSvcSWp%2Fozp7%2FX8RqksjSTH983GJAH3WmCEPVp6gIhAPAp%2FFZHrJGebxReTgczlD2%2F6dM3gCNh%2ByUaKo0B9GmvKv8DCDIQABoMNjM3NDIzMTgzODA1IgxJ1YFguaQhV2hpfBYq3AMJsjPX6IQt8BZlCoTq2vDupWU92ijh7leYi8sSTykOVmi7M%2BY5Uhi1Bs3cth%2BlNi4XM6H3G3PvyzhaxMOa7jP3mN0SVjwxXkpkTpqYXaJNyDqhfiSQ%2BKqTysTLMDKVCTnIKYXK9NRtabmBC%2B4dueF80UsLNzAOXKh28fEtcddhq7uQ%2B271Iu%2FSHittrRaNgzRYU9Oife5fyEI1Sb1v47dT5k2BciDcVM922O4l9POWTJlKl3otsq7kWlGgBCugi1p8hqGJSPLBR5jzFcQ5Ow2OVcV%2Bg5T2M8R3LDDV1LI%2F2OiY%2B1FwuocoQ2V3M710EcbRzU%2FNnB5%2BP1YAx5PidALnsRKlSxdJr1%2FcENa0lsiYenhsUDSiwEngACTqx%2FgA0RIgBPe22k8joHqP%2FHIiJ77B0fhcGqaNSinlMybi55am1qXlLjujiNmCQizyuCTQLvwo%2FmSYCshxX%2Bbc5d1tv94lYTi%2F3Mlryg5yX2KFgwkxxjTrbI10mIAvUjNOcT1vCvnij0AipKzyGvV%2B6VDwrf0svhVe55q9Jy5yQKIFf%2FGaW0AtcqiQfURHpxDNh7UpRHs6SvzCKZhPuBWtJXgNS8FKtP8T4bTwHvKw9GmthRMWGm%2Fzapyv%2F4%2B%2FC2TKWzDl04nEBjqkAeNzdP20ZXgIjZO%2FpCKPGhj%2FNPBeDgDyWvqf3sSkTea2qTYuX0Ho4ybJfnr3sWVg9aghTyql2rx2iESW2KxMu%2BnpUDTJESaIl6pMuTNAPop7m1sccyPMSxiA6HW3%2FvkJ3TReplPEeDxIH8EVzR0K6nh9DhmZfQlLXiShlNgmj7EGep4ElaND9slr6y1EyOU2teSzF%2FtfitU8BY6SUHaLWiLL0X%2Fm&X-Amz-Signature=1ed5dac226cba3db698958027ea3e3466b5c9982840e4ac3ecb9eb98c5f13c38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HKFZ6CL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCSobNSvcSWp%2Fozp7%2FX8RqksjSTH983GJAH3WmCEPVp6gIhAPAp%2FFZHrJGebxReTgczlD2%2F6dM3gCNh%2ByUaKo0B9GmvKv8DCDIQABoMNjM3NDIzMTgzODA1IgxJ1YFguaQhV2hpfBYq3AMJsjPX6IQt8BZlCoTq2vDupWU92ijh7leYi8sSTykOVmi7M%2BY5Uhi1Bs3cth%2BlNi4XM6H3G3PvyzhaxMOa7jP3mN0SVjwxXkpkTpqYXaJNyDqhfiSQ%2BKqTysTLMDKVCTnIKYXK9NRtabmBC%2B4dueF80UsLNzAOXKh28fEtcddhq7uQ%2B271Iu%2FSHittrRaNgzRYU9Oife5fyEI1Sb1v47dT5k2BciDcVM922O4l9POWTJlKl3otsq7kWlGgBCugi1p8hqGJSPLBR5jzFcQ5Ow2OVcV%2Bg5T2M8R3LDDV1LI%2F2OiY%2B1FwuocoQ2V3M710EcbRzU%2FNnB5%2BP1YAx5PidALnsRKlSxdJr1%2FcENa0lsiYenhsUDSiwEngACTqx%2FgA0RIgBPe22k8joHqP%2FHIiJ77B0fhcGqaNSinlMybi55am1qXlLjujiNmCQizyuCTQLvwo%2FmSYCshxX%2Bbc5d1tv94lYTi%2F3Mlryg5yX2KFgwkxxjTrbI10mIAvUjNOcT1vCvnij0AipKzyGvV%2B6VDwrf0svhVe55q9Jy5yQKIFf%2FGaW0AtcqiQfURHpxDNh7UpRHs6SvzCKZhPuBWtJXgNS8FKtP8T4bTwHvKw9GmthRMWGm%2Fzapyv%2F4%2B%2FC2TKWzDl04nEBjqkAeNzdP20ZXgIjZO%2FpCKPGhj%2FNPBeDgDyWvqf3sSkTea2qTYuX0Ho4ybJfnr3sWVg9aghTyql2rx2iESW2KxMu%2BnpUDTJESaIl6pMuTNAPop7m1sccyPMSxiA6HW3%2FvkJ3TReplPEeDxIH8EVzR0K6nh9DhmZfQlLXiShlNgmj7EGep4ElaND9slr6y1EyOU2teSzF%2FtfitU8BY6SUHaLWiLL0X%2Fm&X-Amz-Signature=0cabea6311d478fb6b2eac447051fd334599330b5e5540d33b3337297ecf2a48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HKFZ6CL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCSobNSvcSWp%2Fozp7%2FX8RqksjSTH983GJAH3WmCEPVp6gIhAPAp%2FFZHrJGebxReTgczlD2%2F6dM3gCNh%2ByUaKo0B9GmvKv8DCDIQABoMNjM3NDIzMTgzODA1IgxJ1YFguaQhV2hpfBYq3AMJsjPX6IQt8BZlCoTq2vDupWU92ijh7leYi8sSTykOVmi7M%2BY5Uhi1Bs3cth%2BlNi4XM6H3G3PvyzhaxMOa7jP3mN0SVjwxXkpkTpqYXaJNyDqhfiSQ%2BKqTysTLMDKVCTnIKYXK9NRtabmBC%2B4dueF80UsLNzAOXKh28fEtcddhq7uQ%2B271Iu%2FSHittrRaNgzRYU9Oife5fyEI1Sb1v47dT5k2BciDcVM922O4l9POWTJlKl3otsq7kWlGgBCugi1p8hqGJSPLBR5jzFcQ5Ow2OVcV%2Bg5T2M8R3LDDV1LI%2F2OiY%2B1FwuocoQ2V3M710EcbRzU%2FNnB5%2BP1YAx5PidALnsRKlSxdJr1%2FcENa0lsiYenhsUDSiwEngACTqx%2FgA0RIgBPe22k8joHqP%2FHIiJ77B0fhcGqaNSinlMybi55am1qXlLjujiNmCQizyuCTQLvwo%2FmSYCshxX%2Bbc5d1tv94lYTi%2F3Mlryg5yX2KFgwkxxjTrbI10mIAvUjNOcT1vCvnij0AipKzyGvV%2B6VDwrf0svhVe55q9Jy5yQKIFf%2FGaW0AtcqiQfURHpxDNh7UpRHs6SvzCKZhPuBWtJXgNS8FKtP8T4bTwHvKw9GmthRMWGm%2Fzapyv%2F4%2B%2FC2TKWzDl04nEBjqkAeNzdP20ZXgIjZO%2FpCKPGhj%2FNPBeDgDyWvqf3sSkTea2qTYuX0Ho4ybJfnr3sWVg9aghTyql2rx2iESW2KxMu%2BnpUDTJESaIl6pMuTNAPop7m1sccyPMSxiA6HW3%2FvkJ3TReplPEeDxIH8EVzR0K6nh9DhmZfQlLXiShlNgmj7EGep4ElaND9slr6y1EyOU2teSzF%2FtfitU8BY6SUHaLWiLL0X%2Fm&X-Amz-Signature=935a02e6a0bfbcf9b84362b2ca06e472e92996486076e01e959dda4d73e1fcc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert icon=”👾” context="info" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HKFZ6CL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCSobNSvcSWp%2Fozp7%2FX8RqksjSTH983GJAH3WmCEPVp6gIhAPAp%2FFZHrJGebxReTgczlD2%2F6dM3gCNh%2ByUaKo0B9GmvKv8DCDIQABoMNjM3NDIzMTgzODA1IgxJ1YFguaQhV2hpfBYq3AMJsjPX6IQt8BZlCoTq2vDupWU92ijh7leYi8sSTykOVmi7M%2BY5Uhi1Bs3cth%2BlNi4XM6H3G3PvyzhaxMOa7jP3mN0SVjwxXkpkTpqYXaJNyDqhfiSQ%2BKqTysTLMDKVCTnIKYXK9NRtabmBC%2B4dueF80UsLNzAOXKh28fEtcddhq7uQ%2B271Iu%2FSHittrRaNgzRYU9Oife5fyEI1Sb1v47dT5k2BciDcVM922O4l9POWTJlKl3otsq7kWlGgBCugi1p8hqGJSPLBR5jzFcQ5Ow2OVcV%2Bg5T2M8R3LDDV1LI%2F2OiY%2B1FwuocoQ2V3M710EcbRzU%2FNnB5%2BP1YAx5PidALnsRKlSxdJr1%2FcENa0lsiYenhsUDSiwEngACTqx%2FgA0RIgBPe22k8joHqP%2FHIiJ77B0fhcGqaNSinlMybi55am1qXlLjujiNmCQizyuCTQLvwo%2FmSYCshxX%2Bbc5d1tv94lYTi%2F3Mlryg5yX2KFgwkxxjTrbI10mIAvUjNOcT1vCvnij0AipKzyGvV%2B6VDwrf0svhVe55q9Jy5yQKIFf%2FGaW0AtcqiQfURHpxDNh7UpRHs6SvzCKZhPuBWtJXgNS8FKtP8T4bTwHvKw9GmthRMWGm%2Fzapyv%2F4%2B%2FC2TKWzDl04nEBjqkAeNzdP20ZXgIjZO%2FpCKPGhj%2FNPBeDgDyWvqf3sSkTea2qTYuX0Ho4ybJfnr3sWVg9aghTyql2rx2iESW2KxMu%2BnpUDTJESaIl6pMuTNAPop7m1sccyPMSxiA6HW3%2FvkJ3TReplPEeDxIH8EVzR0K6nh9DhmZfQlLXiShlNgmj7EGep4ElaND9slr6y1EyOU2teSzF%2FtfitU8BY6SUHaLWiLL0X%2Fm&X-Amz-Signature=ccfff8047ccecb7627c7504d81c0e4732f3538fca5207f59004ee3d95e3f55ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:
TODO get img

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

TODO: add rviz guide showing 

- view robot footprint
- how to view local and global cost map layers
- publish point to go to
- view path of going to that point in rviz
- publishing point when receive ref serial msg

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HKFZ6CL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCSobNSvcSWp%2Fozp7%2FX8RqksjSTH983GJAH3WmCEPVp6gIhAPAp%2FFZHrJGebxReTgczlD2%2F6dM3gCNh%2ByUaKo0B9GmvKv8DCDIQABoMNjM3NDIzMTgzODA1IgxJ1YFguaQhV2hpfBYq3AMJsjPX6IQt8BZlCoTq2vDupWU92ijh7leYi8sSTykOVmi7M%2BY5Uhi1Bs3cth%2BlNi4XM6H3G3PvyzhaxMOa7jP3mN0SVjwxXkpkTpqYXaJNyDqhfiSQ%2BKqTysTLMDKVCTnIKYXK9NRtabmBC%2B4dueF80UsLNzAOXKh28fEtcddhq7uQ%2B271Iu%2FSHittrRaNgzRYU9Oife5fyEI1Sb1v47dT5k2BciDcVM922O4l9POWTJlKl3otsq7kWlGgBCugi1p8hqGJSPLBR5jzFcQ5Ow2OVcV%2Bg5T2M8R3LDDV1LI%2F2OiY%2B1FwuocoQ2V3M710EcbRzU%2FNnB5%2BP1YAx5PidALnsRKlSxdJr1%2FcENa0lsiYenhsUDSiwEngACTqx%2FgA0RIgBPe22k8joHqP%2FHIiJ77B0fhcGqaNSinlMybi55am1qXlLjujiNmCQizyuCTQLvwo%2FmSYCshxX%2Bbc5d1tv94lYTi%2F3Mlryg5yX2KFgwkxxjTrbI10mIAvUjNOcT1vCvnij0AipKzyGvV%2B6VDwrf0svhVe55q9Jy5yQKIFf%2FGaW0AtcqiQfURHpxDNh7UpRHs6SvzCKZhPuBWtJXgNS8FKtP8T4bTwHvKw9GmthRMWGm%2Fzapyv%2F4%2B%2FC2TKWzDl04nEBjqkAeNzdP20ZXgIjZO%2FpCKPGhj%2FNPBeDgDyWvqf3sSkTea2qTYuX0Ho4ybJfnr3sWVg9aghTyql2rx2iESW2KxMu%2BnpUDTJESaIl6pMuTNAPop7m1sccyPMSxiA6HW3%2FvkJ3TReplPEeDxIH8EVzR0K6nh9DhmZfQlLXiShlNgmj7EGep4ElaND9slr6y1EyOU2teSzF%2FtfitU8BY6SUHaLWiLL0X%2Fm&X-Amz-Signature=7a0c64113992f2b35df7c253c12c6391db74aca87f0c4af40502fa0f78cee441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

## updating launch file

```python
  
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file 
    nav2_yaml = os.path.join(pkg_share, 'config', 'nav2_params.yaml') # gets the nav2 config file
     
     ...
     
    nav2_bringup_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("nav2_bringup"), '/launch', '/navigation_launch.py']),
        launch_arguments={
            'use_sim_time': LaunchConfiguration('use_sim_time')
            'params_file': nav2_yaml,
        }.items()
    )
    
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
        
        lidar_node # lidar for physical setup 
        
        slam_toolbox_node, # providing the map => odom transform.

        nav2_bringup_node, # starts nav2

    ])
```

# Nav2 settings

TODO: change footprint?
