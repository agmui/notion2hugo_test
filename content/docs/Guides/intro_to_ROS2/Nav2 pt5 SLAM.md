---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-30T06:25:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

[https://www.youtube.com/watch?v=saVZtgPyyJQ](https://www.youtube.com/watch?v=saVZtgPyyJQ)

<details>
      <summary>What is slam?</summary>
      TODO:
  </details>

ROS has a package for SLAM called `slam toolbox`.

If you have a Lidar and Odometry it is able to scan and map the room out.

---

## Install

```bash
sudo apt install ros-$ROS_DISTRO-slam-toolbox
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`online_async_launch`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RNZH2A%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T231006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD57AD2167EvjcnUSUpBVUaNrV1kfCY5LDfQKYwcdEjKgIhAPUk7RbCfTi7BUXWFxSlSHlQ3CcV%2Bw11bMcCJz2pccbyKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2agXgS1zNafW1a7wq3AO8OlUzjbnjRTP6Z2B48zXG7EfnIUzzAJgZtstpmjCnSMubDKtZHnetyhpK2Za3NcpkDkFS825dcz5yc%2F0kRWOgcUe1pDwPkfpnPavE3XteM24H9SJQvpBme7XtIsmMf1Fkh1A2rZSQRkwYNMUFb3XVMMT%2Bogs5xbzTtRaj6Jak2Br8u6OFP8cbNKbmivadY7igguzgdoZ%2BxVIdaoLjrQh1L2nYG5bsiwU5e3KRuvSGvre64OCN9MOxGRn6DG%2Bg9U7XsRPb4kmHHVHD%2FfxVwAFf%2FRquYdKAlSPaRd7RH67aVRGfVsdF9UOhAQ3nzSbKeO%2FB1%2Foq9i6SR032EiTx7vo%2FualFEU2I0mDex5BymuP8oc2VURIiV54gnjJGFdar%2Fi5WkEhcyMvOfaC7%2FfAxMPNGPnpgbiYm6wMX0zAT%2FKEUQQpQrH7UtaSZ3GqRECQyCr57Gee7HcmMMz9CnmT13FQGht97ob5BXEdBBr967fUHxB%2BlnRjHBhPo%2BHsAWPMeWiNVYpsS4qyW%2BYK3zJndZHq6YYXoMPxeQJFtEgxkwJbevhhhOhkcPeVW0ulIOYrdB2l8N4MxUMcEECJJdm5erljdlH66tnTUROWpwxlqyADtj5VQ%2F9z2QMUrxRXCPzDGoqrEBjqkAZQQhkIrNL0KnZQwOk9yE3IQsrjtnSZF1Ikw2PWt5FfdMPmubt1vOyPWhh0WMBKh%2FPQdLqCc5sOutQHJQMaHw08EZnpwd4tDdgXQl0fb4JbGnyrxK1V%2Bsh8%2FcEEMKW67hJNXqb%2BpBtoo30nr9HdWp1gwb%2BiMMZBIhhlfNB7DlUGxhiDyIR16fUTN8Wi410CTOwyl%2B4FLrN9XVi73WkCw9zz5qs3d&X-Amz-Signature=a8f50c710887acde20e7192577118f9f23f204f9df5ab985b77c4a74bcdc610e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

{{< /table >}}

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        # my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        gz_server,
        ros_gz_bridge,
        spawn_entity,
        
        # lidar_node # lidar for physical setup 
    ])
```

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `slam_toolbox` ran correctly, in logs wait for “Registering sensor”

### Viewing scanned SLAM map

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RNZH2A%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T231006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD57AD2167EvjcnUSUpBVUaNrV1kfCY5LDfQKYwcdEjKgIhAPUk7RbCfTi7BUXWFxSlSHlQ3CcV%2Bw11bMcCJz2pccbyKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2agXgS1zNafW1a7wq3AO8OlUzjbnjRTP6Z2B48zXG7EfnIUzzAJgZtstpmjCnSMubDKtZHnetyhpK2Za3NcpkDkFS825dcz5yc%2F0kRWOgcUe1pDwPkfpnPavE3XteM24H9SJQvpBme7XtIsmMf1Fkh1A2rZSQRkwYNMUFb3XVMMT%2Bogs5xbzTtRaj6Jak2Br8u6OFP8cbNKbmivadY7igguzgdoZ%2BxVIdaoLjrQh1L2nYG5bsiwU5e3KRuvSGvre64OCN9MOxGRn6DG%2Bg9U7XsRPb4kmHHVHD%2FfxVwAFf%2FRquYdKAlSPaRd7RH67aVRGfVsdF9UOhAQ3nzSbKeO%2FB1%2Foq9i6SR032EiTx7vo%2FualFEU2I0mDex5BymuP8oc2VURIiV54gnjJGFdar%2Fi5WkEhcyMvOfaC7%2FfAxMPNGPnpgbiYm6wMX0zAT%2FKEUQQpQrH7UtaSZ3GqRECQyCr57Gee7HcmMMz9CnmT13FQGht97ob5BXEdBBr967fUHxB%2BlnRjHBhPo%2BHsAWPMeWiNVYpsS4qyW%2BYK3zJndZHq6YYXoMPxeQJFtEgxkwJbevhhhOhkcPeVW0ulIOYrdB2l8N4MxUMcEECJJdm5erljdlH66tnTUROWpwxlqyADtj5VQ%2F9z2QMUrxRXCPzDGoqrEBjqkAZQQhkIrNL0KnZQwOk9yE3IQsrjtnSZF1Ikw2PWt5FfdMPmubt1vOyPWhh0WMBKh%2FPQdLqCc5sOutQHJQMaHw08EZnpwd4tDdgXQl0fb4JbGnyrxK1V%2Bsh8%2FcEEMKW67hJNXqb%2BpBtoo30nr9HdWp1gwb%2BiMMZBIhhlfNB7DlUGxhiDyIR16fUTN8Wi410CTOwyl%2B4FLrN9XVi73WkCw9zz5qs3d&X-Amz-Signature=75f825bf637fbe9091de53dd18012640c3ad64dd0d6651f720e0ff7eaa8970d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RNZH2A%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T231006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD57AD2167EvjcnUSUpBVUaNrV1kfCY5LDfQKYwcdEjKgIhAPUk7RbCfTi7BUXWFxSlSHlQ3CcV%2Bw11bMcCJz2pccbyKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2agXgS1zNafW1a7wq3AO8OlUzjbnjRTP6Z2B48zXG7EfnIUzzAJgZtstpmjCnSMubDKtZHnetyhpK2Za3NcpkDkFS825dcz5yc%2F0kRWOgcUe1pDwPkfpnPavE3XteM24H9SJQvpBme7XtIsmMf1Fkh1A2rZSQRkwYNMUFb3XVMMT%2Bogs5xbzTtRaj6Jak2Br8u6OFP8cbNKbmivadY7igguzgdoZ%2BxVIdaoLjrQh1L2nYG5bsiwU5e3KRuvSGvre64OCN9MOxGRn6DG%2Bg9U7XsRPb4kmHHVHD%2FfxVwAFf%2FRquYdKAlSPaRd7RH67aVRGfVsdF9UOhAQ3nzSbKeO%2FB1%2Foq9i6SR032EiTx7vo%2FualFEU2I0mDex5BymuP8oc2VURIiV54gnjJGFdar%2Fi5WkEhcyMvOfaC7%2FfAxMPNGPnpgbiYm6wMX0zAT%2FKEUQQpQrH7UtaSZ3GqRECQyCr57Gee7HcmMMz9CnmT13FQGht97ob5BXEdBBr967fUHxB%2BlnRjHBhPo%2BHsAWPMeWiNVYpsS4qyW%2BYK3zJndZHq6YYXoMPxeQJFtEgxkwJbevhhhOhkcPeVW0ulIOYrdB2l8N4MxUMcEECJJdm5erljdlH66tnTUROWpwxlqyADtj5VQ%2F9z2QMUrxRXCPzDGoqrEBjqkAZQQhkIrNL0KnZQwOk9yE3IQsrjtnSZF1Ikw2PWt5FfdMPmubt1vOyPWhh0WMBKh%2FPQdLqCc5sOutQHJQMaHw08EZnpwd4tDdgXQl0fb4JbGnyrxK1V%2Bsh8%2FcEEMKW67hJNXqb%2BpBtoo30nr9HdWp1gwb%2BiMMZBIhhlfNB7DlUGxhiDyIR16fUTN8Wi410CTOwyl%2B4FLrN9XVi73WkCw9zz5qs3d&X-Amz-Signature=e3e1a7f8eb1a589a3df3c57ba9bc29caae3850a126ed48def915b0c5ad3cfac0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RNZH2A%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T231006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD57AD2167EvjcnUSUpBVUaNrV1kfCY5LDfQKYwcdEjKgIhAPUk7RbCfTi7BUXWFxSlSHlQ3CcV%2Bw11bMcCJz2pccbyKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2agXgS1zNafW1a7wq3AO8OlUzjbnjRTP6Z2B48zXG7EfnIUzzAJgZtstpmjCnSMubDKtZHnetyhpK2Za3NcpkDkFS825dcz5yc%2F0kRWOgcUe1pDwPkfpnPavE3XteM24H9SJQvpBme7XtIsmMf1Fkh1A2rZSQRkwYNMUFb3XVMMT%2Bogs5xbzTtRaj6Jak2Br8u6OFP8cbNKbmivadY7igguzgdoZ%2BxVIdaoLjrQh1L2nYG5bsiwU5e3KRuvSGvre64OCN9MOxGRn6DG%2Bg9U7XsRPb4kmHHVHD%2FfxVwAFf%2FRquYdKAlSPaRd7RH67aVRGfVsdF9UOhAQ3nzSbKeO%2FB1%2Foq9i6SR032EiTx7vo%2FualFEU2I0mDex5BymuP8oc2VURIiV54gnjJGFdar%2Fi5WkEhcyMvOfaC7%2FfAxMPNGPnpgbiYm6wMX0zAT%2FKEUQQpQrH7UtaSZ3GqRECQyCr57Gee7HcmMMz9CnmT13FQGht97ob5BXEdBBr967fUHxB%2BlnRjHBhPo%2BHsAWPMeWiNVYpsS4qyW%2BYK3zJndZHq6YYXoMPxeQJFtEgxkwJbevhhhOhkcPeVW0ulIOYrdB2l8N4MxUMcEECJJdm5erljdlH66tnTUROWpwxlqyADtj5VQ%2F9z2QMUrxRXCPzDGoqrEBjqkAZQQhkIrNL0KnZQwOk9yE3IQsrjtnSZF1Ikw2PWt5FfdMPmubt1vOyPWhh0WMBKh%2FPQdLqCc5sOutQHJQMaHw08EZnpwd4tDdgXQl0fb4JbGnyrxK1V%2Bsh8%2FcEEMKW67hJNXqb%2BpBtoo30nr9HdWp1gwb%2BiMMZBIhhlfNB7DlUGxhiDyIR16fUTN8Wi410CTOwyl%2B4FLrN9XVi73WkCw9zz5qs3d&X-Amz-Signature=5091bf2fabd8d985b61fdd388dd7ca12c2ddb7eca4e2652c23326372b3381c2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RNZH2A%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T231006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD57AD2167EvjcnUSUpBVUaNrV1kfCY5LDfQKYwcdEjKgIhAPUk7RbCfTi7BUXWFxSlSHlQ3CcV%2Bw11bMcCJz2pccbyKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2agXgS1zNafW1a7wq3AO8OlUzjbnjRTP6Z2B48zXG7EfnIUzzAJgZtstpmjCnSMubDKtZHnetyhpK2Za3NcpkDkFS825dcz5yc%2F0kRWOgcUe1pDwPkfpnPavE3XteM24H9SJQvpBme7XtIsmMf1Fkh1A2rZSQRkwYNMUFb3XVMMT%2Bogs5xbzTtRaj6Jak2Br8u6OFP8cbNKbmivadY7igguzgdoZ%2BxVIdaoLjrQh1L2nYG5bsiwU5e3KRuvSGvre64OCN9MOxGRn6DG%2Bg9U7XsRPb4kmHHVHD%2FfxVwAFf%2FRquYdKAlSPaRd7RH67aVRGfVsdF9UOhAQ3nzSbKeO%2FB1%2Foq9i6SR032EiTx7vo%2FualFEU2I0mDex5BymuP8oc2VURIiV54gnjJGFdar%2Fi5WkEhcyMvOfaC7%2FfAxMPNGPnpgbiYm6wMX0zAT%2FKEUQQpQrH7UtaSZ3GqRECQyCr57Gee7HcmMMz9CnmT13FQGht97ob5BXEdBBr967fUHxB%2BlnRjHBhPo%2BHsAWPMeWiNVYpsS4qyW%2BYK3zJndZHq6YYXoMPxeQJFtEgxkwJbevhhhOhkcPeVW0ulIOYrdB2l8N4MxUMcEECJJdm5erljdlH66tnTUROWpwxlqyADtj5VQ%2F9z2QMUrxRXCPzDGoqrEBjqkAZQQhkIrNL0KnZQwOk9yE3IQsrjtnSZF1Ikw2PWt5FfdMPmubt1vOyPWhh0WMBKh%2FPQdLqCc5sOutQHJQMaHw08EZnpwd4tDdgXQl0fb4JbGnyrxK1V%2Bsh8%2FcEEMKW67hJNXqb%2BpBtoo30nr9HdWp1gwb%2BiMMZBIhhlfNB7DlUGxhiDyIR16fUTN8Wi410CTOwyl%2B4FLrN9XVi73WkCw9zz5qs3d&X-Amz-Signature=47c47c7905081790fda1bf33be4f3870600786d73566b9f5024147f0180c1ba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RNZH2A%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T231006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD57AD2167EvjcnUSUpBVUaNrV1kfCY5LDfQKYwcdEjKgIhAPUk7RbCfTi7BUXWFxSlSHlQ3CcV%2Bw11bMcCJz2pccbyKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2agXgS1zNafW1a7wq3AO8OlUzjbnjRTP6Z2B48zXG7EfnIUzzAJgZtstpmjCnSMubDKtZHnetyhpK2Za3NcpkDkFS825dcz5yc%2F0kRWOgcUe1pDwPkfpnPavE3XteM24H9SJQvpBme7XtIsmMf1Fkh1A2rZSQRkwYNMUFb3XVMMT%2Bogs5xbzTtRaj6Jak2Br8u6OFP8cbNKbmivadY7igguzgdoZ%2BxVIdaoLjrQh1L2nYG5bsiwU5e3KRuvSGvre64OCN9MOxGRn6DG%2Bg9U7XsRPb4kmHHVHD%2FfxVwAFf%2FRquYdKAlSPaRd7RH67aVRGfVsdF9UOhAQ3nzSbKeO%2FB1%2Foq9i6SR032EiTx7vo%2FualFEU2I0mDex5BymuP8oc2VURIiV54gnjJGFdar%2Fi5WkEhcyMvOfaC7%2FfAxMPNGPnpgbiYm6wMX0zAT%2FKEUQQpQrH7UtaSZ3GqRECQyCr57Gee7HcmMMz9CnmT13FQGht97ob5BXEdBBr967fUHxB%2BlnRjHBhPo%2BHsAWPMeWiNVYpsS4qyW%2BYK3zJndZHq6YYXoMPxeQJFtEgxkwJbevhhhOhkcPeVW0ulIOYrdB2l8N4MxUMcEECJJdm5erljdlH66tnTUROWpwxlqyADtj5VQ%2F9z2QMUrxRXCPzDGoqrEBjqkAZQQhkIrNL0KnZQwOk9yE3IQsrjtnSZF1Ikw2PWt5FfdMPmubt1vOyPWhh0WMBKh%2FPQdLqCc5sOutQHJQMaHw08EZnpwd4tDdgXQl0fb4JbGnyrxK1V%2Bsh8%2FcEEMKW67hJNXqb%2BpBtoo30nr9HdWp1gwb%2BiMMZBIhhlfNB7DlUGxhiDyIR16fUTN8Wi410CTOwyl%2B4FLrN9XVi73WkCw9zz5qs3d&X-Amz-Signature=534c8e285a1d1f241e01df4dc87f0c5144168de5b21675672fc6364d4e9f261f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RNZH2A%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T231006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD57AD2167EvjcnUSUpBVUaNrV1kfCY5LDfQKYwcdEjKgIhAPUk7RbCfTi7BUXWFxSlSHlQ3CcV%2Bw11bMcCJz2pccbyKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2agXgS1zNafW1a7wq3AO8OlUzjbnjRTP6Z2B48zXG7EfnIUzzAJgZtstpmjCnSMubDKtZHnetyhpK2Za3NcpkDkFS825dcz5yc%2F0kRWOgcUe1pDwPkfpnPavE3XteM24H9SJQvpBme7XtIsmMf1Fkh1A2rZSQRkwYNMUFb3XVMMT%2Bogs5xbzTtRaj6Jak2Br8u6OFP8cbNKbmivadY7igguzgdoZ%2BxVIdaoLjrQh1L2nYG5bsiwU5e3KRuvSGvre64OCN9MOxGRn6DG%2Bg9U7XsRPb4kmHHVHD%2FfxVwAFf%2FRquYdKAlSPaRd7RH67aVRGfVsdF9UOhAQ3nzSbKeO%2FB1%2Foq9i6SR032EiTx7vo%2FualFEU2I0mDex5BymuP8oc2VURIiV54gnjJGFdar%2Fi5WkEhcyMvOfaC7%2FfAxMPNGPnpgbiYm6wMX0zAT%2FKEUQQpQrH7UtaSZ3GqRECQyCr57Gee7HcmMMz9CnmT13FQGht97ob5BXEdBBr967fUHxB%2BlnRjHBhPo%2BHsAWPMeWiNVYpsS4qyW%2BYK3zJndZHq6YYXoMPxeQJFtEgxkwJbevhhhOhkcPeVW0ulIOYrdB2l8N4MxUMcEECJJdm5erljdlH66tnTUROWpwxlqyADtj5VQ%2F9z2QMUrxRXCPzDGoqrEBjqkAZQQhkIrNL0KnZQwOk9yE3IQsrjtnSZF1Ikw2PWt5FfdMPmubt1vOyPWhh0WMBKh%2FPQdLqCc5sOutQHJQMaHw08EZnpwd4tDdgXQl0fb4JbGnyrxK1V%2Bsh8%2FcEEMKW67hJNXqb%2BpBtoo30nr9HdWp1gwb%2BiMMZBIhhlfNB7DlUGxhiDyIR16fUTN8Wi410CTOwyl%2B4FLrN9XVi73WkCw9zz5qs3d&X-Amz-Signature=92d842f5e583b3e881277d38c08b8e1ea72f1b7c580e65f2690bff6d6c4e89e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python
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
    ])
```

in 3 different terminals run:

```xml
ros2 launch mbot_pkg display.launch.py
```

```xml
ros2 launch slam_toolbox online_async_launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

drive around with `teleop_twist_keyboard` to scan more of the map

## Adding `slam_toolbox` to launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RNZH2A%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T231006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD57AD2167EvjcnUSUpBVUaNrV1kfCY5LDfQKYwcdEjKgIhAPUk7RbCfTi7BUXWFxSlSHlQ3CcV%2Bw11bMcCJz2pccbyKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2agXgS1zNafW1a7wq3AO8OlUzjbnjRTP6Z2B48zXG7EfnIUzzAJgZtstpmjCnSMubDKtZHnetyhpK2Za3NcpkDkFS825dcz5yc%2F0kRWOgcUe1pDwPkfpnPavE3XteM24H9SJQvpBme7XtIsmMf1Fkh1A2rZSQRkwYNMUFb3XVMMT%2Bogs5xbzTtRaj6Jak2Br8u6OFP8cbNKbmivadY7igguzgdoZ%2BxVIdaoLjrQh1L2nYG5bsiwU5e3KRuvSGvre64OCN9MOxGRn6DG%2Bg9U7XsRPb4kmHHVHD%2FfxVwAFf%2FRquYdKAlSPaRd7RH67aVRGfVsdF9UOhAQ3nzSbKeO%2FB1%2Foq9i6SR032EiTx7vo%2FualFEU2I0mDex5BymuP8oc2VURIiV54gnjJGFdar%2Fi5WkEhcyMvOfaC7%2FfAxMPNGPnpgbiYm6wMX0zAT%2FKEUQQpQrH7UtaSZ3GqRECQyCr57Gee7HcmMMz9CnmT13FQGht97ob5BXEdBBr967fUHxB%2BlnRjHBhPo%2BHsAWPMeWiNVYpsS4qyW%2BYK3zJndZHq6YYXoMPxeQJFtEgxkwJbevhhhOhkcPeVW0ulIOYrdB2l8N4MxUMcEECJJdm5erljdlH66tnTUROWpwxlqyADtj5VQ%2F9z2QMUrxRXCPzDGoqrEBjqkAZQQhkIrNL0KnZQwOk9yE3IQsrjtnSZF1Ikw2PWt5FfdMPmubt1vOyPWhh0WMBKh%2FPQdLqCc5sOutQHJQMaHw08EZnpwd4tDdgXQl0fb4JbGnyrxK1V%2Bsh8%2FcEEMKW67hJNXqb%2BpBtoo30nr9HdWp1gwb%2BiMMZBIhhlfNB7DlUGxhiDyIR16fUTN8Wi410CTOwyl%2B4FLrN9XVi73WkCw9zz5qs3d&X-Amz-Signature=7f1d10612d37aa97103164133662f89844dedfc8374ee050e2951a2f43fcfb64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RNZH2A%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T231006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD57AD2167EvjcnUSUpBVUaNrV1kfCY5LDfQKYwcdEjKgIhAPUk7RbCfTi7BUXWFxSlSHlQ3CcV%2Bw11bMcCJz2pccbyKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2agXgS1zNafW1a7wq3AO8OlUzjbnjRTP6Z2B48zXG7EfnIUzzAJgZtstpmjCnSMubDKtZHnetyhpK2Za3NcpkDkFS825dcz5yc%2F0kRWOgcUe1pDwPkfpnPavE3XteM24H9SJQvpBme7XtIsmMf1Fkh1A2rZSQRkwYNMUFb3XVMMT%2Bogs5xbzTtRaj6Jak2Br8u6OFP8cbNKbmivadY7igguzgdoZ%2BxVIdaoLjrQh1L2nYG5bsiwU5e3KRuvSGvre64OCN9MOxGRn6DG%2Bg9U7XsRPb4kmHHVHD%2FfxVwAFf%2FRquYdKAlSPaRd7RH67aVRGfVsdF9UOhAQ3nzSbKeO%2FB1%2Foq9i6SR032EiTx7vo%2FualFEU2I0mDex5BymuP8oc2VURIiV54gnjJGFdar%2Fi5WkEhcyMvOfaC7%2FfAxMPNGPnpgbiYm6wMX0zAT%2FKEUQQpQrH7UtaSZ3GqRECQyCr57Gee7HcmMMz9CnmT13FQGht97ob5BXEdBBr967fUHxB%2BlnRjHBhPo%2BHsAWPMeWiNVYpsS4qyW%2BYK3zJndZHq6YYXoMPxeQJFtEgxkwJbevhhhOhkcPeVW0ulIOYrdB2l8N4MxUMcEECJJdm5erljdlH66tnTUROWpwxlqyADtj5VQ%2F9z2QMUrxRXCPzDGoqrEBjqkAZQQhkIrNL0KnZQwOk9yE3IQsrjtnSZF1Ikw2PWt5FfdMPmubt1vOyPWhh0WMBKh%2FPQdLqCc5sOutQHJQMaHw08EZnpwd4tDdgXQl0fb4JbGnyrxK1V%2Bsh8%2FcEEMKW67hJNXqb%2BpBtoo30nr9HdWp1gwb%2BiMMZBIhhlfNB7DlUGxhiDyIR16fUTN8Wi410CTOwyl%2B4FLrN9XVi73WkCw9zz5qs3d&X-Amz-Signature=5cafe6cc4ee7485559d90261dc1ae90a23eba55971e4ed02746a0c424712e056&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python

   
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file
    
    ...
    
    slam_toolbox_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("slam_toolbox"), '/launch', '/online_async_launch.py']),
        launch_arguments={
            'slam_params_file': slam_yaml_path,
            'use_sim_time': LaunchConfiguration('use_sim_time'),
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
        
        slam_toolbox_node #  providing the map => odom transform.
    ])
```

# Saving map

`slam_toolbox` also has the feature where you can pre scan a map and save it to load it again.

Press on Panels → Add New Panel

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RNZH2A%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T231006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD57AD2167EvjcnUSUpBVUaNrV1kfCY5LDfQKYwcdEjKgIhAPUk7RbCfTi7BUXWFxSlSHlQ3CcV%2Bw11bMcCJz2pccbyKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2agXgS1zNafW1a7wq3AO8OlUzjbnjRTP6Z2B48zXG7EfnIUzzAJgZtstpmjCnSMubDKtZHnetyhpK2Za3NcpkDkFS825dcz5yc%2F0kRWOgcUe1pDwPkfpnPavE3XteM24H9SJQvpBme7XtIsmMf1Fkh1A2rZSQRkwYNMUFb3XVMMT%2Bogs5xbzTtRaj6Jak2Br8u6OFP8cbNKbmivadY7igguzgdoZ%2BxVIdaoLjrQh1L2nYG5bsiwU5e3KRuvSGvre64OCN9MOxGRn6DG%2Bg9U7XsRPb4kmHHVHD%2FfxVwAFf%2FRquYdKAlSPaRd7RH67aVRGfVsdF9UOhAQ3nzSbKeO%2FB1%2Foq9i6SR032EiTx7vo%2FualFEU2I0mDex5BymuP8oc2VURIiV54gnjJGFdar%2Fi5WkEhcyMvOfaC7%2FfAxMPNGPnpgbiYm6wMX0zAT%2FKEUQQpQrH7UtaSZ3GqRECQyCr57Gee7HcmMMz9CnmT13FQGht97ob5BXEdBBr967fUHxB%2BlnRjHBhPo%2BHsAWPMeWiNVYpsS4qyW%2BYK3zJndZHq6YYXoMPxeQJFtEgxkwJbevhhhOhkcPeVW0ulIOYrdB2l8N4MxUMcEECJJdm5erljdlH66tnTUROWpwxlqyADtj5VQ%2F9z2QMUrxRXCPzDGoqrEBjqkAZQQhkIrNL0KnZQwOk9yE3IQsrjtnSZF1Ikw2PWt5FfdMPmubt1vOyPWhh0WMBKh%2FPQdLqCc5sOutQHJQMaHw08EZnpwd4tDdgXQl0fb4JbGnyrxK1V%2Bsh8%2FcEEMKW67hJNXqb%2BpBtoo30nr9HdWp1gwb%2BiMMZBIhhlfNB7DlUGxhiDyIR16fUTN8Wi410CTOwyl%2B4FLrN9XVi73WkCw9zz5qs3d&X-Amz-Signature=f74560bc2fe42820a165226b660cff822f8ac839039c0dc965437413a994e09a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RNZH2A%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T231006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD57AD2167EvjcnUSUpBVUaNrV1kfCY5LDfQKYwcdEjKgIhAPUk7RbCfTi7BUXWFxSlSHlQ3CcV%2Bw11bMcCJz2pccbyKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2agXgS1zNafW1a7wq3AO8OlUzjbnjRTP6Z2B48zXG7EfnIUzzAJgZtstpmjCnSMubDKtZHnetyhpK2Za3NcpkDkFS825dcz5yc%2F0kRWOgcUe1pDwPkfpnPavE3XteM24H9SJQvpBme7XtIsmMf1Fkh1A2rZSQRkwYNMUFb3XVMMT%2Bogs5xbzTtRaj6Jak2Br8u6OFP8cbNKbmivadY7igguzgdoZ%2BxVIdaoLjrQh1L2nYG5bsiwU5e3KRuvSGvre64OCN9MOxGRn6DG%2Bg9U7XsRPb4kmHHVHD%2FfxVwAFf%2FRquYdKAlSPaRd7RH67aVRGfVsdF9UOhAQ3nzSbKeO%2FB1%2Foq9i6SR032EiTx7vo%2FualFEU2I0mDex5BymuP8oc2VURIiV54gnjJGFdar%2Fi5WkEhcyMvOfaC7%2FfAxMPNGPnpgbiYm6wMX0zAT%2FKEUQQpQrH7UtaSZ3GqRECQyCr57Gee7HcmMMz9CnmT13FQGht97ob5BXEdBBr967fUHxB%2BlnRjHBhPo%2BHsAWPMeWiNVYpsS4qyW%2BYK3zJndZHq6YYXoMPxeQJFtEgxkwJbevhhhOhkcPeVW0ulIOYrdB2l8N4MxUMcEECJJdm5erljdlH66tnTUROWpwxlqyADtj5VQ%2F9z2QMUrxRXCPzDGoqrEBjqkAZQQhkIrNL0KnZQwOk9yE3IQsrjtnSZF1Ikw2PWt5FfdMPmubt1vOyPWhh0WMBKh%2FPQdLqCc5sOutQHJQMaHw08EZnpwd4tDdgXQl0fb4JbGnyrxK1V%2Bsh8%2FcEEMKW67hJNXqb%2BpBtoo30nr9HdWp1gwb%2BiMMZBIhhlfNB7DlUGxhiDyIR16fUTN8Wi410CTOwyl%2B4FLrN9XVi73WkCw9zz5qs3d&X-Amz-Signature=8e399c8fe8bfd8b2c74be145d13e1b4c77ef6c5fd27486a2737b4ff79a1b8861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RNZH2A%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T231006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD57AD2167EvjcnUSUpBVUaNrV1kfCY5LDfQKYwcdEjKgIhAPUk7RbCfTi7BUXWFxSlSHlQ3CcV%2Bw11bMcCJz2pccbyKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2agXgS1zNafW1a7wq3AO8OlUzjbnjRTP6Z2B48zXG7EfnIUzzAJgZtstpmjCnSMubDKtZHnetyhpK2Za3NcpkDkFS825dcz5yc%2F0kRWOgcUe1pDwPkfpnPavE3XteM24H9SJQvpBme7XtIsmMf1Fkh1A2rZSQRkwYNMUFb3XVMMT%2Bogs5xbzTtRaj6Jak2Br8u6OFP8cbNKbmivadY7igguzgdoZ%2BxVIdaoLjrQh1L2nYG5bsiwU5e3KRuvSGvre64OCN9MOxGRn6DG%2Bg9U7XsRPb4kmHHVHD%2FfxVwAFf%2FRquYdKAlSPaRd7RH67aVRGfVsdF9UOhAQ3nzSbKeO%2FB1%2Foq9i6SR032EiTx7vo%2FualFEU2I0mDex5BymuP8oc2VURIiV54gnjJGFdar%2Fi5WkEhcyMvOfaC7%2FfAxMPNGPnpgbiYm6wMX0zAT%2FKEUQQpQrH7UtaSZ3GqRECQyCr57Gee7HcmMMz9CnmT13FQGht97ob5BXEdBBr967fUHxB%2BlnRjHBhPo%2BHsAWPMeWiNVYpsS4qyW%2BYK3zJndZHq6YYXoMPxeQJFtEgxkwJbevhhhOhkcPeVW0ulIOYrdB2l8N4MxUMcEECJJdm5erljdlH66tnTUROWpwxlqyADtj5VQ%2F9z2QMUrxRXCPzDGoqrEBjqkAZQQhkIrNL0KnZQwOk9yE3IQsrjtnSZF1Ikw2PWt5FfdMPmubt1vOyPWhh0WMBKh%2FPQdLqCc5sOutQHJQMaHw08EZnpwd4tDdgXQl0fb4JbGnyrxK1V%2Bsh8%2FcEEMKW67hJNXqb%2BpBtoo30nr9HdWp1gwb%2BiMMZBIhhlfNB7DlUGxhiDyIR16fUTN8Wi410CTOwyl%2B4FLrN9XVi73WkCw9zz5qs3d&X-Amz-Signature=0de323be8d65039d9bcc70cb2fbc2197e0b24e7daf2569fcadc1bca0553f2f12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RNZH2A%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T231006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD57AD2167EvjcnUSUpBVUaNrV1kfCY5LDfQKYwcdEjKgIhAPUk7RbCfTi7BUXWFxSlSHlQ3CcV%2Bw11bMcCJz2pccbyKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2agXgS1zNafW1a7wq3AO8OlUzjbnjRTP6Z2B48zXG7EfnIUzzAJgZtstpmjCnSMubDKtZHnetyhpK2Za3NcpkDkFS825dcz5yc%2F0kRWOgcUe1pDwPkfpnPavE3XteM24H9SJQvpBme7XtIsmMf1Fkh1A2rZSQRkwYNMUFb3XVMMT%2Bogs5xbzTtRaj6Jak2Br8u6OFP8cbNKbmivadY7igguzgdoZ%2BxVIdaoLjrQh1L2nYG5bsiwU5e3KRuvSGvre64OCN9MOxGRn6DG%2Bg9U7XsRPb4kmHHVHD%2FfxVwAFf%2FRquYdKAlSPaRd7RH67aVRGfVsdF9UOhAQ3nzSbKeO%2FB1%2Foq9i6SR032EiTx7vo%2FualFEU2I0mDex5BymuP8oc2VURIiV54gnjJGFdar%2Fi5WkEhcyMvOfaC7%2FfAxMPNGPnpgbiYm6wMX0zAT%2FKEUQQpQrH7UtaSZ3GqRECQyCr57Gee7HcmMMz9CnmT13FQGht97ob5BXEdBBr967fUHxB%2BlnRjHBhPo%2BHsAWPMeWiNVYpsS4qyW%2BYK3zJndZHq6YYXoMPxeQJFtEgxkwJbevhhhOhkcPeVW0ulIOYrdB2l8N4MxUMcEECJJdm5erljdlH66tnTUROWpwxlqyADtj5VQ%2F9z2QMUrxRXCPzDGoqrEBjqkAZQQhkIrNL0KnZQwOk9yE3IQsrjtnSZF1Ikw2PWt5FfdMPmubt1vOyPWhh0WMBKh%2FPQdLqCc5sOutQHJQMaHw08EZnpwd4tDdgXQl0fb4JbGnyrxK1V%2Bsh8%2FcEEMKW67hJNXqb%2BpBtoo30nr9HdWp1gwb%2BiMMZBIhhlfNB7DlUGxhiDyIR16fUTN8Wi410CTOwyl%2B4FLrN9XVi73WkCw9zz5qs3d&X-Amz-Signature=238bc737e3767cb8e5841d3912c5c26a6caeeb5c6a2961c4f53e5d9b23fc4505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml
slam_toolbox:
  ros__parameters:

    # Plugin params
    solver_plugin: solver_plugins::CeresSolver
    ceres_linear_solver: SPARSE_NORMAL_CHOLESKY
    ceres_preconditioner: SCHUR_JACOBI
    ceres_trust_strategy: LEVENBERG_MARQUARDT
    ceres_dogleg_type: TRADITIONAL_DOGLEG
    ceres_loss_function: None

    # ROS Parameters
    odom_frame: odom
    map_frame: map
    base_frame: base_footprint
    scan_topic: /scan
    use_map_saver: true
    # mode: mapping 
    mode: localization 

    # if you'd like to immediately start continuing a map at a given pose
    # or at the dock, but they are mutually exclusive, if pose is given
    # will use pose
    map_file_name: /path/to/map/test # NOTE: no file extension
    # map_start_pose: [0.0, 0.0, 0.0]
    # map_start_at_dock: true

    debug_logging: false
```

Running the launch file again you will see your map preload into rviz

```yaml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RNZH2A%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T231006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD57AD2167EvjcnUSUpBVUaNrV1kfCY5LDfQKYwcdEjKgIhAPUk7RbCfTi7BUXWFxSlSHlQ3CcV%2Bw11bMcCJz2pccbyKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2agXgS1zNafW1a7wq3AO8OlUzjbnjRTP6Z2B48zXG7EfnIUzzAJgZtstpmjCnSMubDKtZHnetyhpK2Za3NcpkDkFS825dcz5yc%2F0kRWOgcUe1pDwPkfpnPavE3XteM24H9SJQvpBme7XtIsmMf1Fkh1A2rZSQRkwYNMUFb3XVMMT%2Bogs5xbzTtRaj6Jak2Br8u6OFP8cbNKbmivadY7igguzgdoZ%2BxVIdaoLjrQh1L2nYG5bsiwU5e3KRuvSGvre64OCN9MOxGRn6DG%2Bg9U7XsRPb4kmHHVHD%2FfxVwAFf%2FRquYdKAlSPaRd7RH67aVRGfVsdF9UOhAQ3nzSbKeO%2FB1%2Foq9i6SR032EiTx7vo%2FualFEU2I0mDex5BymuP8oc2VURIiV54gnjJGFdar%2Fi5WkEhcyMvOfaC7%2FfAxMPNGPnpgbiYm6wMX0zAT%2FKEUQQpQrH7UtaSZ3GqRECQyCr57Gee7HcmMMz9CnmT13FQGht97ob5BXEdBBr967fUHxB%2BlnRjHBhPo%2BHsAWPMeWiNVYpsS4qyW%2BYK3zJndZHq6YYXoMPxeQJFtEgxkwJbevhhhOhkcPeVW0ulIOYrdB2l8N4MxUMcEECJJdm5erljdlH66tnTUROWpwxlqyADtj5VQ%2F9z2QMUrxRXCPzDGoqrEBjqkAZQQhkIrNL0KnZQwOk9yE3IQsrjtnSZF1Ikw2PWt5FfdMPmubt1vOyPWhh0WMBKh%2FPQdLqCc5sOutQHJQMaHw08EZnpwd4tDdgXQl0fb4JbGnyrxK1V%2Bsh8%2FcEEMKW67hJNXqb%2BpBtoo30nr9HdWp1gwb%2BiMMZBIhhlfNB7DlUGxhiDyIR16fUTN8Wi410CTOwyl%2B4FLrN9XVi73WkCw9zz5qs3d&X-Amz-Signature=24787eb75aebc8af4060081298bebca76dd5bbef17c7cc89be5e947a7c7e13e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
