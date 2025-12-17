---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-08-02T09:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-08-02T09:48:00.000Z"
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
  <summary>{{< markdownify >}}What is slam?{{< /markdownify >}}</summary>
  
TODO:

ROS has a package called `slam_toolbox` where …

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQ5PRGF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyvz3dzkUf8dgb63IpXz7Eaxxha6ILK32ngLwMcLF0mAiEAiG2tJqghFRbMAvbLT8i5BsUKdUFEffPJnvRwZkUXbGcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIIPYiacjzEUlgd9ryrcAzNy9ecQRYLWWA2is7FWf25OYfTIheq1VIPklOs%2B2bXiEGjNm%2B%2FJXEZGwCsBAwlymBa8VXZM7i9l%2BInBBcLV%2BNWl2thlkMYeBi8aOLXNHmNFh4eTmsZCyn9u3uCoIDLn0mtygMJ6I86TkgVoW4l6iX8W3MHI%2FFa%2FvgalqOLaDahfXAPm%2Bke0VOXK5FVtMMz9X%2BnxzMSs3u6KI8lD1yLUwn9DYnUTB3p4kZXbkkinDhpntkLN5mLNk6NBrlPPkY%2FEbpNB5JqJlek16vLQrWf9D1vCxcNwQC1AatwL807GFkuWDM7sj6l4Kj2Pb%2Fv8%2FDSgEqF%2BBMxeY5cn1gpmRjtsLfByPX5c2LHbNmV58FSQoZEif6Ie4wIY0D7vMhYpTg5mi34WB5lNOkghRvUeqyfE%2BdFLw7gP4humpxTXZo1hv%2BhneNFizfL28Rh8BBqzjlKhS50r6TKDYHHdc3yW84ozuUvKOGz95XZhomdNjlEy3UbEeXx4r1EMYpA%2BQPfY3eARWaZREUr859G7rIJ86F4TUCaqI4zJWtFfUSPTyqE9yRWc5qE6W8cTGZZmm72FR3fX1INj8H0hKBnpTFK3e0Ft1lamw7Poeei6T0HBZ7Kx562Ey9ZS5yfvjPTfaKTvMIv9h8oGOqUBvebrLswOV%2B2nJ%2BXymAXvRPNL6InwFlfIttACaQeERDNRLoRd4psJFkP9lnNSSacXYfc5uatus2Xbji7ncoy0WFSHsM8%2BLnqTw9f0QC%2BUbFq5MVY37jTMffD9ccrF%2F9LHvdSHbnvJBbPO4wwsRFcHk4UK2b1RPsdfDZCyBQQu2fRlUcg5QPC7taQEVvn6waVU9zH1fIGrovUGnb0S8YO5SKdKH7N1&X-Amz-Signature=bcbde931eb737da95e47a0a5584dc721610fe1a47bb17d1ebbfdffa65cb85c9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Outputs:

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

#### Params:

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python "4-4","9-12","14-14"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQ5PRGF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyvz3dzkUf8dgb63IpXz7Eaxxha6ILK32ngLwMcLF0mAiEAiG2tJqghFRbMAvbLT8i5BsUKdUFEffPJnvRwZkUXbGcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIIPYiacjzEUlgd9ryrcAzNy9ecQRYLWWA2is7FWf25OYfTIheq1VIPklOs%2B2bXiEGjNm%2B%2FJXEZGwCsBAwlymBa8VXZM7i9l%2BInBBcLV%2BNWl2thlkMYeBi8aOLXNHmNFh4eTmsZCyn9u3uCoIDLn0mtygMJ6I86TkgVoW4l6iX8W3MHI%2FFa%2FvgalqOLaDahfXAPm%2Bke0VOXK5FVtMMz9X%2BnxzMSs3u6KI8lD1yLUwn9DYnUTB3p4kZXbkkinDhpntkLN5mLNk6NBrlPPkY%2FEbpNB5JqJlek16vLQrWf9D1vCxcNwQC1AatwL807GFkuWDM7sj6l4Kj2Pb%2Fv8%2FDSgEqF%2BBMxeY5cn1gpmRjtsLfByPX5c2LHbNmV58FSQoZEif6Ie4wIY0D7vMhYpTg5mi34WB5lNOkghRvUeqyfE%2BdFLw7gP4humpxTXZo1hv%2BhneNFizfL28Rh8BBqzjlKhS50r6TKDYHHdc3yW84ozuUvKOGz95XZhomdNjlEy3UbEeXx4r1EMYpA%2BQPfY3eARWaZREUr859G7rIJ86F4TUCaqI4zJWtFfUSPTyqE9yRWc5qE6W8cTGZZmm72FR3fX1INj8H0hKBnpTFK3e0Ft1lamw7Poeei6T0HBZ7Kx562Ey9ZS5yfvjPTfaKTvMIv9h8oGOqUBvebrLswOV%2B2nJ%2BXymAXvRPNL6InwFlfIttACaQeERDNRLoRd4psJFkP9lnNSSacXYfc5uatus2Xbji7ncoy0WFSHsM8%2BLnqTw9f0QC%2BUbFq5MVY37jTMffD9ccrF%2F9LHvdSHbnvJBbPO4wwsRFcHk4UK2b1RPsdfDZCyBQQu2fRlUcg5QPC7taQEVvn6waVU9zH1fIGrovUGnb0S8YO5SKdKH7N1&X-Amz-Signature=595bae47a67ea21eccb90673d0b921ce469dfabe73fd3ace8d9df8acb421e3b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQ5PRGF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyvz3dzkUf8dgb63IpXz7Eaxxha6ILK32ngLwMcLF0mAiEAiG2tJqghFRbMAvbLT8i5BsUKdUFEffPJnvRwZkUXbGcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIIPYiacjzEUlgd9ryrcAzNy9ecQRYLWWA2is7FWf25OYfTIheq1VIPklOs%2B2bXiEGjNm%2B%2FJXEZGwCsBAwlymBa8VXZM7i9l%2BInBBcLV%2BNWl2thlkMYeBi8aOLXNHmNFh4eTmsZCyn9u3uCoIDLn0mtygMJ6I86TkgVoW4l6iX8W3MHI%2FFa%2FvgalqOLaDahfXAPm%2Bke0VOXK5FVtMMz9X%2BnxzMSs3u6KI8lD1yLUwn9DYnUTB3p4kZXbkkinDhpntkLN5mLNk6NBrlPPkY%2FEbpNB5JqJlek16vLQrWf9D1vCxcNwQC1AatwL807GFkuWDM7sj6l4Kj2Pb%2Fv8%2FDSgEqF%2BBMxeY5cn1gpmRjtsLfByPX5c2LHbNmV58FSQoZEif6Ie4wIY0D7vMhYpTg5mi34WB5lNOkghRvUeqyfE%2BdFLw7gP4humpxTXZo1hv%2BhneNFizfL28Rh8BBqzjlKhS50r6TKDYHHdc3yW84ozuUvKOGz95XZhomdNjlEy3UbEeXx4r1EMYpA%2BQPfY3eARWaZREUr859G7rIJ86F4TUCaqI4zJWtFfUSPTyqE9yRWc5qE6W8cTGZZmm72FR3fX1INj8H0hKBnpTFK3e0Ft1lamw7Poeei6T0HBZ7Kx562Ey9ZS5yfvjPTfaKTvMIv9h8oGOqUBvebrLswOV%2B2nJ%2BXymAXvRPNL6InwFlfIttACaQeERDNRLoRd4psJFkP9lnNSSacXYfc5uatus2Xbji7ncoy0WFSHsM8%2BLnqTw9f0QC%2BUbFq5MVY37jTMffD9ccrF%2F9LHvdSHbnvJBbPO4wwsRFcHk4UK2b1RPsdfDZCyBQQu2fRlUcg5QPC7taQEVvn6waVU9zH1fIGrovUGnb0S8YO5SKdKH7N1&X-Amz-Signature=d7dff2a68b9ba585231510ecadb8a42b81054a80b88e0cc914c3f2189ff6ed37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQ5PRGF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyvz3dzkUf8dgb63IpXz7Eaxxha6ILK32ngLwMcLF0mAiEAiG2tJqghFRbMAvbLT8i5BsUKdUFEffPJnvRwZkUXbGcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIIPYiacjzEUlgd9ryrcAzNy9ecQRYLWWA2is7FWf25OYfTIheq1VIPklOs%2B2bXiEGjNm%2B%2FJXEZGwCsBAwlymBa8VXZM7i9l%2BInBBcLV%2BNWl2thlkMYeBi8aOLXNHmNFh4eTmsZCyn9u3uCoIDLn0mtygMJ6I86TkgVoW4l6iX8W3MHI%2FFa%2FvgalqOLaDahfXAPm%2Bke0VOXK5FVtMMz9X%2BnxzMSs3u6KI8lD1yLUwn9DYnUTB3p4kZXbkkinDhpntkLN5mLNk6NBrlPPkY%2FEbpNB5JqJlek16vLQrWf9D1vCxcNwQC1AatwL807GFkuWDM7sj6l4Kj2Pb%2Fv8%2FDSgEqF%2BBMxeY5cn1gpmRjtsLfByPX5c2LHbNmV58FSQoZEif6Ie4wIY0D7vMhYpTg5mi34WB5lNOkghRvUeqyfE%2BdFLw7gP4humpxTXZo1hv%2BhneNFizfL28Rh8BBqzjlKhS50r6TKDYHHdc3yW84ozuUvKOGz95XZhomdNjlEy3UbEeXx4r1EMYpA%2BQPfY3eARWaZREUr859G7rIJ86F4TUCaqI4zJWtFfUSPTyqE9yRWc5qE6W8cTGZZmm72FR3fX1INj8H0hKBnpTFK3e0Ft1lamw7Poeei6T0HBZ7Kx562Ey9ZS5yfvjPTfaKTvMIv9h8oGOqUBvebrLswOV%2B2nJ%2BXymAXvRPNL6InwFlfIttACaQeERDNRLoRd4psJFkP9lnNSSacXYfc5uatus2Xbji7ncoy0WFSHsM8%2BLnqTw9f0QC%2BUbFq5MVY37jTMffD9ccrF%2F9LHvdSHbnvJBbPO4wwsRFcHk4UK2b1RPsdfDZCyBQQu2fRlUcg5QPC7taQEVvn6waVU9zH1fIGrovUGnb0S8YO5SKdKH7N1&X-Amz-Signature=55d0d218793e030c8c30e9f2cad48158ef0faf57edf0390dba4846471c465ebe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQ5PRGF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyvz3dzkUf8dgb63IpXz7Eaxxha6ILK32ngLwMcLF0mAiEAiG2tJqghFRbMAvbLT8i5BsUKdUFEffPJnvRwZkUXbGcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIIPYiacjzEUlgd9ryrcAzNy9ecQRYLWWA2is7FWf25OYfTIheq1VIPklOs%2B2bXiEGjNm%2B%2FJXEZGwCsBAwlymBa8VXZM7i9l%2BInBBcLV%2BNWl2thlkMYeBi8aOLXNHmNFh4eTmsZCyn9u3uCoIDLn0mtygMJ6I86TkgVoW4l6iX8W3MHI%2FFa%2FvgalqOLaDahfXAPm%2Bke0VOXK5FVtMMz9X%2BnxzMSs3u6KI8lD1yLUwn9DYnUTB3p4kZXbkkinDhpntkLN5mLNk6NBrlPPkY%2FEbpNB5JqJlek16vLQrWf9D1vCxcNwQC1AatwL807GFkuWDM7sj6l4Kj2Pb%2Fv8%2FDSgEqF%2BBMxeY5cn1gpmRjtsLfByPX5c2LHbNmV58FSQoZEif6Ie4wIY0D7vMhYpTg5mi34WB5lNOkghRvUeqyfE%2BdFLw7gP4humpxTXZo1hv%2BhneNFizfL28Rh8BBqzjlKhS50r6TKDYHHdc3yW84ozuUvKOGz95XZhomdNjlEy3UbEeXx4r1EMYpA%2BQPfY3eARWaZREUr859G7rIJ86F4TUCaqI4zJWtFfUSPTyqE9yRWc5qE6W8cTGZZmm72FR3fX1INj8H0hKBnpTFK3e0Ft1lamw7Poeei6T0HBZ7Kx562Ey9ZS5yfvjPTfaKTvMIv9h8oGOqUBvebrLswOV%2B2nJ%2BXymAXvRPNL6InwFlfIttACaQeERDNRLoRd4psJFkP9lnNSSacXYfc5uatus2Xbji7ncoy0WFSHsM8%2BLnqTw9f0QC%2BUbFq5MVY37jTMffD9ccrF%2F9LHvdSHbnvJBbPO4wwsRFcHk4UK2b1RPsdfDZCyBQQu2fRlUcg5QPC7taQEVvn6waVU9zH1fIGrovUGnb0S8YO5SKdKH7N1&X-Amz-Signature=5c78394adc1e737d41fbead92c4ac44bcdb3e0537af4dab2ae90d9430d0891b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQ5PRGF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyvz3dzkUf8dgb63IpXz7Eaxxha6ILK32ngLwMcLF0mAiEAiG2tJqghFRbMAvbLT8i5BsUKdUFEffPJnvRwZkUXbGcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIIPYiacjzEUlgd9ryrcAzNy9ecQRYLWWA2is7FWf25OYfTIheq1VIPklOs%2B2bXiEGjNm%2B%2FJXEZGwCsBAwlymBa8VXZM7i9l%2BInBBcLV%2BNWl2thlkMYeBi8aOLXNHmNFh4eTmsZCyn9u3uCoIDLn0mtygMJ6I86TkgVoW4l6iX8W3MHI%2FFa%2FvgalqOLaDahfXAPm%2Bke0VOXK5FVtMMz9X%2BnxzMSs3u6KI8lD1yLUwn9DYnUTB3p4kZXbkkinDhpntkLN5mLNk6NBrlPPkY%2FEbpNB5JqJlek16vLQrWf9D1vCxcNwQC1AatwL807GFkuWDM7sj6l4Kj2Pb%2Fv8%2FDSgEqF%2BBMxeY5cn1gpmRjtsLfByPX5c2LHbNmV58FSQoZEif6Ie4wIY0D7vMhYpTg5mi34WB5lNOkghRvUeqyfE%2BdFLw7gP4humpxTXZo1hv%2BhneNFizfL28Rh8BBqzjlKhS50r6TKDYHHdc3yW84ozuUvKOGz95XZhomdNjlEy3UbEeXx4r1EMYpA%2BQPfY3eARWaZREUr859G7rIJ86F4TUCaqI4zJWtFfUSPTyqE9yRWc5qE6W8cTGZZmm72FR3fX1INj8H0hKBnpTFK3e0Ft1lamw7Poeei6T0HBZ7Kx562Ey9ZS5yfvjPTfaKTvMIv9h8oGOqUBvebrLswOV%2B2nJ%2BXymAXvRPNL6InwFlfIttACaQeERDNRLoRd4psJFkP9lnNSSacXYfc5uatus2Xbji7ncoy0WFSHsM8%2BLnqTw9f0QC%2BUbFq5MVY37jTMffD9ccrF%2F9LHvdSHbnvJBbPO4wwsRFcHk4UK2b1RPsdfDZCyBQQu2fRlUcg5QPC7taQEVvn6waVU9zH1fIGrovUGnb0S8YO5SKdKH7N1&X-Amz-Signature=d8dc23c3787f05e3dafd395ff7ca1b6e8c3570d4a747c9b463acec5c0112c7e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQ5PRGF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyvz3dzkUf8dgb63IpXz7Eaxxha6ILK32ngLwMcLF0mAiEAiG2tJqghFRbMAvbLT8i5BsUKdUFEffPJnvRwZkUXbGcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIIPYiacjzEUlgd9ryrcAzNy9ecQRYLWWA2is7FWf25OYfTIheq1VIPklOs%2B2bXiEGjNm%2B%2FJXEZGwCsBAwlymBa8VXZM7i9l%2BInBBcLV%2BNWl2thlkMYeBi8aOLXNHmNFh4eTmsZCyn9u3uCoIDLn0mtygMJ6I86TkgVoW4l6iX8W3MHI%2FFa%2FvgalqOLaDahfXAPm%2Bke0VOXK5FVtMMz9X%2BnxzMSs3u6KI8lD1yLUwn9DYnUTB3p4kZXbkkinDhpntkLN5mLNk6NBrlPPkY%2FEbpNB5JqJlek16vLQrWf9D1vCxcNwQC1AatwL807GFkuWDM7sj6l4Kj2Pb%2Fv8%2FDSgEqF%2BBMxeY5cn1gpmRjtsLfByPX5c2LHbNmV58FSQoZEif6Ie4wIY0D7vMhYpTg5mi34WB5lNOkghRvUeqyfE%2BdFLw7gP4humpxTXZo1hv%2BhneNFizfL28Rh8BBqzjlKhS50r6TKDYHHdc3yW84ozuUvKOGz95XZhomdNjlEy3UbEeXx4r1EMYpA%2BQPfY3eARWaZREUr859G7rIJ86F4TUCaqI4zJWtFfUSPTyqE9yRWc5qE6W8cTGZZmm72FR3fX1INj8H0hKBnpTFK3e0Ft1lamw7Poeei6T0HBZ7Kx562Ey9ZS5yfvjPTfaKTvMIv9h8oGOqUBvebrLswOV%2B2nJ%2BXymAXvRPNL6InwFlfIttACaQeERDNRLoRd4psJFkP9lnNSSacXYfc5uatus2Xbji7ncoy0WFSHsM8%2BLnqTw9f0QC%2BUbFq5MVY37jTMffD9ccrF%2F9LHvdSHbnvJBbPO4wwsRFcHk4UK2b1RPsdfDZCyBQQu2fRlUcg5QPC7taQEVvn6waVU9zH1fIGrovUGnb0S8YO5SKdKH7N1&X-Amz-Signature=d3141dc4dfa2a67a029aaca5fc2a17fce46a7ecb2e813dc81b690b2df4b068eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python "4-4","9-12","14-14"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQ5PRGF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyvz3dzkUf8dgb63IpXz7Eaxxha6ILK32ngLwMcLF0mAiEAiG2tJqghFRbMAvbLT8i5BsUKdUFEffPJnvRwZkUXbGcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIIPYiacjzEUlgd9ryrcAzNy9ecQRYLWWA2is7FWf25OYfTIheq1VIPklOs%2B2bXiEGjNm%2B%2FJXEZGwCsBAwlymBa8VXZM7i9l%2BInBBcLV%2BNWl2thlkMYeBi8aOLXNHmNFh4eTmsZCyn9u3uCoIDLn0mtygMJ6I86TkgVoW4l6iX8W3MHI%2FFa%2FvgalqOLaDahfXAPm%2Bke0VOXK5FVtMMz9X%2BnxzMSs3u6KI8lD1yLUwn9DYnUTB3p4kZXbkkinDhpntkLN5mLNk6NBrlPPkY%2FEbpNB5JqJlek16vLQrWf9D1vCxcNwQC1AatwL807GFkuWDM7sj6l4Kj2Pb%2Fv8%2FDSgEqF%2BBMxeY5cn1gpmRjtsLfByPX5c2LHbNmV58FSQoZEif6Ie4wIY0D7vMhYpTg5mi34WB5lNOkghRvUeqyfE%2BdFLw7gP4humpxTXZo1hv%2BhneNFizfL28Rh8BBqzjlKhS50r6TKDYHHdc3yW84ozuUvKOGz95XZhomdNjlEy3UbEeXx4r1EMYpA%2BQPfY3eARWaZREUr859G7rIJ86F4TUCaqI4zJWtFfUSPTyqE9yRWc5qE6W8cTGZZmm72FR3fX1INj8H0hKBnpTFK3e0Ft1lamw7Poeei6T0HBZ7Kx562Ey9ZS5yfvjPTfaKTvMIv9h8oGOqUBvebrLswOV%2B2nJ%2BXymAXvRPNL6InwFlfIttACaQeERDNRLoRd4psJFkP9lnNSSacXYfc5uatus2Xbji7ncoy0WFSHsM8%2BLnqTw9f0QC%2BUbFq5MVY37jTMffD9ccrF%2F9LHvdSHbnvJBbPO4wwsRFcHk4UK2b1RPsdfDZCyBQQu2fRlUcg5QPC7taQEVvn6waVU9zH1fIGrovUGnb0S8YO5SKdKH7N1&X-Amz-Signature=d55928d68b2c9f60cd500a93b6a8e067451fdac44877301b15ebbc27cf1d40bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQ5PRGF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyvz3dzkUf8dgb63IpXz7Eaxxha6ILK32ngLwMcLF0mAiEAiG2tJqghFRbMAvbLT8i5BsUKdUFEffPJnvRwZkUXbGcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIIPYiacjzEUlgd9ryrcAzNy9ecQRYLWWA2is7FWf25OYfTIheq1VIPklOs%2B2bXiEGjNm%2B%2FJXEZGwCsBAwlymBa8VXZM7i9l%2BInBBcLV%2BNWl2thlkMYeBi8aOLXNHmNFh4eTmsZCyn9u3uCoIDLn0mtygMJ6I86TkgVoW4l6iX8W3MHI%2FFa%2FvgalqOLaDahfXAPm%2Bke0VOXK5FVtMMz9X%2BnxzMSs3u6KI8lD1yLUwn9DYnUTB3p4kZXbkkinDhpntkLN5mLNk6NBrlPPkY%2FEbpNB5JqJlek16vLQrWf9D1vCxcNwQC1AatwL807GFkuWDM7sj6l4Kj2Pb%2Fv8%2FDSgEqF%2BBMxeY5cn1gpmRjtsLfByPX5c2LHbNmV58FSQoZEif6Ie4wIY0D7vMhYpTg5mi34WB5lNOkghRvUeqyfE%2BdFLw7gP4humpxTXZo1hv%2BhneNFizfL28Rh8BBqzjlKhS50r6TKDYHHdc3yW84ozuUvKOGz95XZhomdNjlEy3UbEeXx4r1EMYpA%2BQPfY3eARWaZREUr859G7rIJ86F4TUCaqI4zJWtFfUSPTyqE9yRWc5qE6W8cTGZZmm72FR3fX1INj8H0hKBnpTFK3e0Ft1lamw7Poeei6T0HBZ7Kx562Ey9ZS5yfvjPTfaKTvMIv9h8oGOqUBvebrLswOV%2B2nJ%2BXymAXvRPNL6InwFlfIttACaQeERDNRLoRd4psJFkP9lnNSSacXYfc5uatus2Xbji7ncoy0WFSHsM8%2BLnqTw9f0QC%2BUbFq5MVY37jTMffD9ccrF%2F9LHvdSHbnvJBbPO4wwsRFcHk4UK2b1RPsdfDZCyBQQu2fRlUcg5QPC7taQEVvn6waVU9zH1fIGrovUGnb0S8YO5SKdKH7N1&X-Amz-Signature=e16ccfd01cb8856a252bcd50f20312b3e9e5c7fa523219643292389a349cf3ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python "9-9","13-20","38-38"

   
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQ5PRGF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyvz3dzkUf8dgb63IpXz7Eaxxha6ILK32ngLwMcLF0mAiEAiG2tJqghFRbMAvbLT8i5BsUKdUFEffPJnvRwZkUXbGcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIIPYiacjzEUlgd9ryrcAzNy9ecQRYLWWA2is7FWf25OYfTIheq1VIPklOs%2B2bXiEGjNm%2B%2FJXEZGwCsBAwlymBa8VXZM7i9l%2BInBBcLV%2BNWl2thlkMYeBi8aOLXNHmNFh4eTmsZCyn9u3uCoIDLn0mtygMJ6I86TkgVoW4l6iX8W3MHI%2FFa%2FvgalqOLaDahfXAPm%2Bke0VOXK5FVtMMz9X%2BnxzMSs3u6KI8lD1yLUwn9DYnUTB3p4kZXbkkinDhpntkLN5mLNk6NBrlPPkY%2FEbpNB5JqJlek16vLQrWf9D1vCxcNwQC1AatwL807GFkuWDM7sj6l4Kj2Pb%2Fv8%2FDSgEqF%2BBMxeY5cn1gpmRjtsLfByPX5c2LHbNmV58FSQoZEif6Ie4wIY0D7vMhYpTg5mi34WB5lNOkghRvUeqyfE%2BdFLw7gP4humpxTXZo1hv%2BhneNFizfL28Rh8BBqzjlKhS50r6TKDYHHdc3yW84ozuUvKOGz95XZhomdNjlEy3UbEeXx4r1EMYpA%2BQPfY3eARWaZREUr859G7rIJ86F4TUCaqI4zJWtFfUSPTyqE9yRWc5qE6W8cTGZZmm72FR3fX1INj8H0hKBnpTFK3e0Ft1lamw7Poeei6T0HBZ7Kx562Ey9ZS5yfvjPTfaKTvMIv9h8oGOqUBvebrLswOV%2B2nJ%2BXymAXvRPNL6InwFlfIttACaQeERDNRLoRd4psJFkP9lnNSSacXYfc5uatus2Xbji7ncoy0WFSHsM8%2BLnqTw9f0QC%2BUbFq5MVY37jTMffD9ccrF%2F9LHvdSHbnvJBbPO4wwsRFcHk4UK2b1RPsdfDZCyBQQu2fRlUcg5QPC7taQEVvn6waVU9zH1fIGrovUGnb0S8YO5SKdKH7N1&X-Amz-Signature=30db09fbc5465047a54bbbab6876cc67a17aad95e74d6136ad29c22e37d650bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQ5PRGF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyvz3dzkUf8dgb63IpXz7Eaxxha6ILK32ngLwMcLF0mAiEAiG2tJqghFRbMAvbLT8i5BsUKdUFEffPJnvRwZkUXbGcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIIPYiacjzEUlgd9ryrcAzNy9ecQRYLWWA2is7FWf25OYfTIheq1VIPklOs%2B2bXiEGjNm%2B%2FJXEZGwCsBAwlymBa8VXZM7i9l%2BInBBcLV%2BNWl2thlkMYeBi8aOLXNHmNFh4eTmsZCyn9u3uCoIDLn0mtygMJ6I86TkgVoW4l6iX8W3MHI%2FFa%2FvgalqOLaDahfXAPm%2Bke0VOXK5FVtMMz9X%2BnxzMSs3u6KI8lD1yLUwn9DYnUTB3p4kZXbkkinDhpntkLN5mLNk6NBrlPPkY%2FEbpNB5JqJlek16vLQrWf9D1vCxcNwQC1AatwL807GFkuWDM7sj6l4Kj2Pb%2Fv8%2FDSgEqF%2BBMxeY5cn1gpmRjtsLfByPX5c2LHbNmV58FSQoZEif6Ie4wIY0D7vMhYpTg5mi34WB5lNOkghRvUeqyfE%2BdFLw7gP4humpxTXZo1hv%2BhneNFizfL28Rh8BBqzjlKhS50r6TKDYHHdc3yW84ozuUvKOGz95XZhomdNjlEy3UbEeXx4r1EMYpA%2BQPfY3eARWaZREUr859G7rIJ86F4TUCaqI4zJWtFfUSPTyqE9yRWc5qE6W8cTGZZmm72FR3fX1INj8H0hKBnpTFK3e0Ft1lamw7Poeei6T0HBZ7Kx562Ey9ZS5yfvjPTfaKTvMIv9h8oGOqUBvebrLswOV%2B2nJ%2BXymAXvRPNL6InwFlfIttACaQeERDNRLoRd4psJFkP9lnNSSacXYfc5uatus2Xbji7ncoy0WFSHsM8%2BLnqTw9f0QC%2BUbFq5MVY37jTMffD9ccrF%2F9LHvdSHbnvJBbPO4wwsRFcHk4UK2b1RPsdfDZCyBQQu2fRlUcg5QPC7taQEVvn6waVU9zH1fIGrovUGnb0S8YO5SKdKH7N1&X-Amz-Signature=a323e2e025d80ab5c0ab8ba349d5766316adec5dcebab27cbeb566e92457ef67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQ5PRGF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyvz3dzkUf8dgb63IpXz7Eaxxha6ILK32ngLwMcLF0mAiEAiG2tJqghFRbMAvbLT8i5BsUKdUFEffPJnvRwZkUXbGcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIIPYiacjzEUlgd9ryrcAzNy9ecQRYLWWA2is7FWf25OYfTIheq1VIPklOs%2B2bXiEGjNm%2B%2FJXEZGwCsBAwlymBa8VXZM7i9l%2BInBBcLV%2BNWl2thlkMYeBi8aOLXNHmNFh4eTmsZCyn9u3uCoIDLn0mtygMJ6I86TkgVoW4l6iX8W3MHI%2FFa%2FvgalqOLaDahfXAPm%2Bke0VOXK5FVtMMz9X%2BnxzMSs3u6KI8lD1yLUwn9DYnUTB3p4kZXbkkinDhpntkLN5mLNk6NBrlPPkY%2FEbpNB5JqJlek16vLQrWf9D1vCxcNwQC1AatwL807GFkuWDM7sj6l4Kj2Pb%2Fv8%2FDSgEqF%2BBMxeY5cn1gpmRjtsLfByPX5c2LHbNmV58FSQoZEif6Ie4wIY0D7vMhYpTg5mi34WB5lNOkghRvUeqyfE%2BdFLw7gP4humpxTXZo1hv%2BhneNFizfL28Rh8BBqzjlKhS50r6TKDYHHdc3yW84ozuUvKOGz95XZhomdNjlEy3UbEeXx4r1EMYpA%2BQPfY3eARWaZREUr859G7rIJ86F4TUCaqI4zJWtFfUSPTyqE9yRWc5qE6W8cTGZZmm72FR3fX1INj8H0hKBnpTFK3e0Ft1lamw7Poeei6T0HBZ7Kx562Ey9ZS5yfvjPTfaKTvMIv9h8oGOqUBvebrLswOV%2B2nJ%2BXymAXvRPNL6InwFlfIttACaQeERDNRLoRd4psJFkP9lnNSSacXYfc5uatus2Xbji7ncoy0WFSHsM8%2BLnqTw9f0QC%2BUbFq5MVY37jTMffD9ccrF%2F9LHvdSHbnvJBbPO4wwsRFcHk4UK2b1RPsdfDZCyBQQu2fRlUcg5QPC7taQEVvn6waVU9zH1fIGrovUGnb0S8YO5SKdKH7N1&X-Amz-Signature=569d5f885f8319337be1172817c9177f97e3cb262ba0deb1fa866139e76ddd44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQ5PRGF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyvz3dzkUf8dgb63IpXz7Eaxxha6ILK32ngLwMcLF0mAiEAiG2tJqghFRbMAvbLT8i5BsUKdUFEffPJnvRwZkUXbGcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIIPYiacjzEUlgd9ryrcAzNy9ecQRYLWWA2is7FWf25OYfTIheq1VIPklOs%2B2bXiEGjNm%2B%2FJXEZGwCsBAwlymBa8VXZM7i9l%2BInBBcLV%2BNWl2thlkMYeBi8aOLXNHmNFh4eTmsZCyn9u3uCoIDLn0mtygMJ6I86TkgVoW4l6iX8W3MHI%2FFa%2FvgalqOLaDahfXAPm%2Bke0VOXK5FVtMMz9X%2BnxzMSs3u6KI8lD1yLUwn9DYnUTB3p4kZXbkkinDhpntkLN5mLNk6NBrlPPkY%2FEbpNB5JqJlek16vLQrWf9D1vCxcNwQC1AatwL807GFkuWDM7sj6l4Kj2Pb%2Fv8%2FDSgEqF%2BBMxeY5cn1gpmRjtsLfByPX5c2LHbNmV58FSQoZEif6Ie4wIY0D7vMhYpTg5mi34WB5lNOkghRvUeqyfE%2BdFLw7gP4humpxTXZo1hv%2BhneNFizfL28Rh8BBqzjlKhS50r6TKDYHHdc3yW84ozuUvKOGz95XZhomdNjlEy3UbEeXx4r1EMYpA%2BQPfY3eARWaZREUr859G7rIJ86F4TUCaqI4zJWtFfUSPTyqE9yRWc5qE6W8cTGZZmm72FR3fX1INj8H0hKBnpTFK3e0Ft1lamw7Poeei6T0HBZ7Kx562Ey9ZS5yfvjPTfaKTvMIv9h8oGOqUBvebrLswOV%2B2nJ%2BXymAXvRPNL6InwFlfIttACaQeERDNRLoRd4psJFkP9lnNSSacXYfc5uatus2Xbji7ncoy0WFSHsM8%2BLnqTw9f0QC%2BUbFq5MVY37jTMffD9ccrF%2F9LHvdSHbnvJBbPO4wwsRFcHk4UK2b1RPsdfDZCyBQQu2fRlUcg5QPC7taQEVvn6waVU9zH1fIGrovUGnb0S8YO5SKdKH7N1&X-Amz-Signature=baf0d5265334251c3826dbb427b830318327f434697f63fd8f81dab1149aa067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml "18-19","24-24"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQ5PRGF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyvz3dzkUf8dgb63IpXz7Eaxxha6ILK32ngLwMcLF0mAiEAiG2tJqghFRbMAvbLT8i5BsUKdUFEffPJnvRwZkUXbGcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIIPYiacjzEUlgd9ryrcAzNy9ecQRYLWWA2is7FWf25OYfTIheq1VIPklOs%2B2bXiEGjNm%2B%2FJXEZGwCsBAwlymBa8VXZM7i9l%2BInBBcLV%2BNWl2thlkMYeBi8aOLXNHmNFh4eTmsZCyn9u3uCoIDLn0mtygMJ6I86TkgVoW4l6iX8W3MHI%2FFa%2FvgalqOLaDahfXAPm%2Bke0VOXK5FVtMMz9X%2BnxzMSs3u6KI8lD1yLUwn9DYnUTB3p4kZXbkkinDhpntkLN5mLNk6NBrlPPkY%2FEbpNB5JqJlek16vLQrWf9D1vCxcNwQC1AatwL807GFkuWDM7sj6l4Kj2Pb%2Fv8%2FDSgEqF%2BBMxeY5cn1gpmRjtsLfByPX5c2LHbNmV58FSQoZEif6Ie4wIY0D7vMhYpTg5mi34WB5lNOkghRvUeqyfE%2BdFLw7gP4humpxTXZo1hv%2BhneNFizfL28Rh8BBqzjlKhS50r6TKDYHHdc3yW84ozuUvKOGz95XZhomdNjlEy3UbEeXx4r1EMYpA%2BQPfY3eARWaZREUr859G7rIJ86F4TUCaqI4zJWtFfUSPTyqE9yRWc5qE6W8cTGZZmm72FR3fX1INj8H0hKBnpTFK3e0Ft1lamw7Poeei6T0HBZ7Kx562Ey9ZS5yfvjPTfaKTvMIv9h8oGOqUBvebrLswOV%2B2nJ%2BXymAXvRPNL6InwFlfIttACaQeERDNRLoRd4psJFkP9lnNSSacXYfc5uatus2Xbji7ncoy0WFSHsM8%2BLnqTw9f0QC%2BUbFq5MVY37jTMffD9ccrF%2F9LHvdSHbnvJBbPO4wwsRFcHk4UK2b1RPsdfDZCyBQQu2fRlUcg5QPC7taQEVvn6waVU9zH1fIGrovUGnb0S8YO5SKdKH7N1&X-Amz-Signature=6fa0f4694834e1ff47f1125a0dc850109a915e39a6921c1bc0008111cabe1ccc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
