---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-03T21:37:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-03T21:37:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 154
toc: false
icon: ""
---

[Articulated Robotics guide](https://youtu.be/eJZXRncGaGM?si=p88bRTyt1R9TyuiY)

---

<details>
      <summary>What is Lidar?</summary>
      Lidar (light detection and ranging) is using lases to determine how far objects are.
  </details>

TODO:

[link to add other sensors (realsense)](https://docs.nav2.org/setup_guides/sensors/setup_sensors_gz.html)

Often in robotics Odometry is updates very quickly but is prone to drift.

On the other hand Lidar is effectively _“ground truth”_ because it can see the world around it however updates very slowly.

By using these two sensors together we can cover each others weaknesses.

In between the long update periods of Lidar we can use Odometry to get an accurate measurement of where we are. Then when the Lidar measurement eventually comes we correct the Odometry’s drift.

Just for this guide we will be sticking to a 2D Lidar but these instructions can be adapted to any kind of Lidar.

Nav2 expects Lidar data to be published on the `/scan` topic with type `sensor_msgs/LaserScan`

## Simulating Lidar in Gazebo

We must first add a Lidar link into our `urdf` to know where it is on the robot.

Also we have to add a Gazebo plugin to tell Gazebo simulate the Lidar

past this at the bottom of the file before the `</robot>` tag

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml

  <link name="lidar_link">
    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

    <xacro:cylinder_inertia m="0.125" r="0.0508" h="0.055"/>
  </link>

  <joint name="lidar_joint" type="fixed">
    <parent link="base_link"/>
    <child link="lidar_link"/>
    <origin xyz="0 0 0.12" rpy="0 0 0"/>
  </joint>



  <!-- 2D Lidar New Gazebo Sensor Plugin  -->
  <gazebo reference="lidar_link">
    <sensor name="lidar" type="gpu_lidar">
      <always_on>true</always_on>
      <visualize>true</visualize>
      <update_rate>5</update_rate>
      <topic>scan</topic>
      <gz_frame_id>lidar_link</gz_frame_id>
      <lidar>
        <scan>
          <horizontal>
            <samples>360</samples>
            <resolution>1.000000</resolution>
            <min_angle>0.000000</min_angle>
            <max_angle>6.280000</max_angle>
          </horizontal>
        </scan>
        <range>
          <min>0.120000</min>
          <max>12.0</max>
          <resolution>0.015000</resolution>
        </range>
        <noise>
          <type>gaussian</type>
          <mean>0.0</mean>
          <stddev>0.02</stddev>
        </noise>
      </lidar>
    </sensor>
  </gazebo>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIQAQURP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIAH%2FkJGNgQsZbK4MdQ8vnDEMKEwpXJ0556DvuPvG%2BWFzAiEAyFOEKLj4Hn9lkxeT1Oy3hWfIAAcUflGZ71fZ1VBD4YgqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtddh07d%2FA4ia3wKCrcA6JY9VLd5yfAMWbHEXwV9l4D4KNQ4AQyU5T04fJHe04smSvZmwNI%2BBLYSrBRUiT5rK8Xfi%2B0yRhihmtW0ghnUIiFaOBl2HbGRcAYgJbS%2FzCsS7mo5elu3TRlZ8mZD30BRggHeYG%2BNsZhZQayQjyEWzfnGWQt%2BiTe4%2FtFvOdonjGkHyoFFvGW9KkOxipttS7grG%2BeauKyo8hzRrVoON4brjuZ74n5lzTqQ2P%2B%2Fbz74U%2BJWSkeZTdHySUDVQwm6byvGZKRO0Lt132gM6o1qIyMBHGnNjl6vkVI77WO03gPdhxaOlKk3d2Rhl0TPYqulNXKg8UEQNby7txBH3OhebpO4w5jgxVzSrJsyr6Heh%2BCPk6nT6yrS0rNrO1sFTfLjWLulBgFjfML%2FBpa8MfFaOI5TChrvC9QL1aXc7fX1ZfgAfhaCpxGrb%2BOW434cTm3jXGr8kHEfujEKgwRS2%2BZf4AdmeMa%2BMIHJ02pq87ThbfoGe7KehQStnj%2FHEFBKiALTmlxk2bLtpyvvRdd%2Fzy9DhP%2FasLCIWJ2UUMDLWP%2BB5xpASdKEnA%2Buhcw5nlS4jDZ5dlayVy1%2BUNVQVwpJr1zsvPzcPMMZ2wtoJzq6jfxwK%2FbZLq8gLBas44LMgFqTySsMKan2MQGOqUBfG0YCwVRDoYuoj7HbtGC472%2FeGQ575%2FtASajgg8GyC0QTFTmbUxJhHHpM3o4iUO3WH0hyyTyll%2F3j6wurpmj9yvNFwtVO9TMfwS7W9ZmMJpAzX390Dnx6M5SRg4OyQ8tJFUhkgzj0ZwGB0rJKhcCehHgEgw%2B4JzVkHmozg6G0eosCb%2FGQsjicj0g3hohccRy3g91Ydh6O0svligqtuwR77kXmEvl&X-Amz-Signature=9f5cadb11271541ebc7e90aca4a24baf7d510ae149938f08fceb4b899a1dc291&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Adding `/scan` topic in `bridge_config.yaml`

We have to bridge over the `/scan` topic from Gazebo

```yaml
- ros_topic_name: "/scan"
	gz_topic_name: "/scan"
	ros_type_name: "sensor_msgs/msg/LaserScan"
	gz_type_name: "gz.msgs.LaserScan"
	direction: GZ_TO_ROS
```

**Run:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

### Lidar Rviz display

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN3CBX7V%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDB0B1I2mA8rsMZPCJrYXkZdhUkqOzcv82D6gjuMJO5CAIgQ7DvEf275Ewpodex%2B%2FngvVk%2B%2FHyWFrDKZdEeX6DuyTAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7xE4ych1LxEVIdkyrcAxpS5Q56lAQYIBLcqGICzj2355u4UMfKfFx4RlSbSRSe%2FOEiIHgkgwlhhayhsdcIlEJxQUZ790JiFz2tbWYEVpR16%2BZgL0KnhE3Lagzwhoq0fYCQo0w%2Ft6u4vXyYi%2FOaroXGn3BXv3ffwFUCTKcozMMPUwUy3Fs%2F7meJFHrjbAZNDDhrmiRB0SEn4fpJlfsmLYgNvJ4vhlyhEbH1uta2YkEZO7IkTXbcNUP8f7Phks9Y0q%2F1%2Bl6tU7%2FFeezXKTcprE3RbykfFf5TJkOqpSP00I1OiII%2FkP%2Bqz03C4xWSwmZS45s5HNlMeGIzi3QRVhSL3y5sIuKFQfbRuvUQ6BDsYHQhT0FRwyuK3huJ4%2BpS1E8ZeIGHa0e62MP1sSPQD0wv98HQOjeZhJ8biGTPPgojF32YngeG7iRcUp4%2FSiCrtTKaXSYRli4anX6llux68muO2WN%2Fif49z4MX3fth1CX3%2BjsTpxREy2DttZKByK5drbf7nmWaP8DHbFUksvOfHbZZ3etW5zabdDcpDy0i7HNu3Dk0hID8xIZ9MsZ2Plxazp0WES%2Bbh8WUCrDkVmyhn3AC4NaLz25Zvw%2BA5Sl5c4D8BW95QowTHnlMAOUvonij4D7UzS%2F3hCfiLaIajZSTMLen2MQGOqUBnbQuJePQnFJpNm7TN4jWohWFEp3mtlMu0d4yVim2xBP4Ep6EiJXKNZRnh9CQxPB2%2FfsHsmPX6YEXQeUQsPSpP817RW9c9bYOTJOdSY5pu%2BWMWDGqdLUHDYu0kFVMnJO8tVL%2BXyz0991eb2%2BguEDGUXTM1cGSuFruSq%2FpAYFrfy9axXGHMsouWnjioHMtPGKLvxwgwxRSXodFmyfDYa%2BEe%2BbPYm4M&X-Amz-Signature=bd8d3caf47673339d6186d682ae3674adba4681bafe3878fae593a8999e794af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN3CBX7V%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDB0B1I2mA8rsMZPCJrYXkZdhUkqOzcv82D6gjuMJO5CAIgQ7DvEf275Ewpodex%2B%2FngvVk%2B%2FHyWFrDKZdEeX6DuyTAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7xE4ych1LxEVIdkyrcAxpS5Q56lAQYIBLcqGICzj2355u4UMfKfFx4RlSbSRSe%2FOEiIHgkgwlhhayhsdcIlEJxQUZ790JiFz2tbWYEVpR16%2BZgL0KnhE3Lagzwhoq0fYCQo0w%2Ft6u4vXyYi%2FOaroXGn3BXv3ffwFUCTKcozMMPUwUy3Fs%2F7meJFHrjbAZNDDhrmiRB0SEn4fpJlfsmLYgNvJ4vhlyhEbH1uta2YkEZO7IkTXbcNUP8f7Phks9Y0q%2F1%2Bl6tU7%2FFeezXKTcprE3RbykfFf5TJkOqpSP00I1OiII%2FkP%2Bqz03C4xWSwmZS45s5HNlMeGIzi3QRVhSL3y5sIuKFQfbRuvUQ6BDsYHQhT0FRwyuK3huJ4%2BpS1E8ZeIGHa0e62MP1sSPQD0wv98HQOjeZhJ8biGTPPgojF32YngeG7iRcUp4%2FSiCrtTKaXSYRli4anX6llux68muO2WN%2Fif49z4MX3fth1CX3%2BjsTpxREy2DttZKByK5drbf7nmWaP8DHbFUksvOfHbZZ3etW5zabdDcpDy0i7HNu3Dk0hID8xIZ9MsZ2Plxazp0WES%2Bbh8WUCrDkVmyhn3AC4NaLz25Zvw%2BA5Sl5c4D8BW95QowTHnlMAOUvonij4D7UzS%2F3hCfiLaIajZSTMLen2MQGOqUBnbQuJePQnFJpNm7TN4jWohWFEp3mtlMu0d4yVim2xBP4Ep6EiJXKNZRnh9CQxPB2%2FfsHsmPX6YEXQeUQsPSpP817RW9c9bYOTJOdSY5pu%2BWMWDGqdLUHDYu0kFVMnJO8tVL%2BXyz0991eb2%2BguEDGUXTM1cGSuFruSq%2FpAYFrfy9axXGHMsouWnjioHMtPGKLvxwgwxRSXodFmyfDYa%2BEe%2BbPYm4M&X-Amz-Signature=70cff9266288d748a150453b6d661892630bd693bcfc4f05dacf9c0d47c36800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN3CBX7V%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDB0B1I2mA8rsMZPCJrYXkZdhUkqOzcv82D6gjuMJO5CAIgQ7DvEf275Ewpodex%2B%2FngvVk%2B%2FHyWFrDKZdEeX6DuyTAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7xE4ych1LxEVIdkyrcAxpS5Q56lAQYIBLcqGICzj2355u4UMfKfFx4RlSbSRSe%2FOEiIHgkgwlhhayhsdcIlEJxQUZ790JiFz2tbWYEVpR16%2BZgL0KnhE3Lagzwhoq0fYCQo0w%2Ft6u4vXyYi%2FOaroXGn3BXv3ffwFUCTKcozMMPUwUy3Fs%2F7meJFHrjbAZNDDhrmiRB0SEn4fpJlfsmLYgNvJ4vhlyhEbH1uta2YkEZO7IkTXbcNUP8f7Phks9Y0q%2F1%2Bl6tU7%2FFeezXKTcprE3RbykfFf5TJkOqpSP00I1OiII%2FkP%2Bqz03C4xWSwmZS45s5HNlMeGIzi3QRVhSL3y5sIuKFQfbRuvUQ6BDsYHQhT0FRwyuK3huJ4%2BpS1E8ZeIGHa0e62MP1sSPQD0wv98HQOjeZhJ8biGTPPgojF32YngeG7iRcUp4%2FSiCrtTKaXSYRli4anX6llux68muO2WN%2Fif49z4MX3fth1CX3%2BjsTpxREy2DttZKByK5drbf7nmWaP8DHbFUksvOfHbZZ3etW5zabdDcpDy0i7HNu3Dk0hID8xIZ9MsZ2Plxazp0WES%2Bbh8WUCrDkVmyhn3AC4NaLz25Zvw%2BA5Sl5c4D8BW95QowTHnlMAOUvonij4D7UzS%2F3hCfiLaIajZSTMLen2MQGOqUBnbQuJePQnFJpNm7TN4jWohWFEp3mtlMu0d4yVim2xBP4Ep6EiJXKNZRnh9CQxPB2%2FfsHsmPX6YEXQeUQsPSpP817RW9c9bYOTJOdSY5pu%2BWMWDGqdLUHDYu0kFVMnJO8tVL%2BXyz0991eb2%2BguEDGUXTM1cGSuFruSq%2FpAYFrfy9axXGHMsouWnjioHMtPGKLvxwgwxRSXodFmyfDYa%2BEe%2BbPYm4M&X-Amz-Signature=1ca5fc19e21fcc491d44edb0db0330f807a58fa5508d795cab18ec1f383c97ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN3CBX7V%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDB0B1I2mA8rsMZPCJrYXkZdhUkqOzcv82D6gjuMJO5CAIgQ7DvEf275Ewpodex%2B%2FngvVk%2B%2FHyWFrDKZdEeX6DuyTAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7xE4ych1LxEVIdkyrcAxpS5Q56lAQYIBLcqGICzj2355u4UMfKfFx4RlSbSRSe%2FOEiIHgkgwlhhayhsdcIlEJxQUZ790JiFz2tbWYEVpR16%2BZgL0KnhE3Lagzwhoq0fYCQo0w%2Ft6u4vXyYi%2FOaroXGn3BXv3ffwFUCTKcozMMPUwUy3Fs%2F7meJFHrjbAZNDDhrmiRB0SEn4fpJlfsmLYgNvJ4vhlyhEbH1uta2YkEZO7IkTXbcNUP8f7Phks9Y0q%2F1%2Bl6tU7%2FFeezXKTcprE3RbykfFf5TJkOqpSP00I1OiII%2FkP%2Bqz03C4xWSwmZS45s5HNlMeGIzi3QRVhSL3y5sIuKFQfbRuvUQ6BDsYHQhT0FRwyuK3huJ4%2BpS1E8ZeIGHa0e62MP1sSPQD0wv98HQOjeZhJ8biGTPPgojF32YngeG7iRcUp4%2FSiCrtTKaXSYRli4anX6llux68muO2WN%2Fif49z4MX3fth1CX3%2BjsTpxREy2DttZKByK5drbf7nmWaP8DHbFUksvOfHbZZ3etW5zabdDcpDy0i7HNu3Dk0hID8xIZ9MsZ2Plxazp0WES%2Bbh8WUCrDkVmyhn3AC4NaLz25Zvw%2BA5Sl5c4D8BW95QowTHnlMAOUvonij4D7UzS%2F3hCfiLaIajZSTMLen2MQGOqUBnbQuJePQnFJpNm7TN4jWohWFEp3mtlMu0d4yVim2xBP4Ep6EiJXKNZRnh9CQxPB2%2FfsHsmPX6YEXQeUQsPSpP817RW9c9bYOTJOdSY5pu%2BWMWDGqdLUHDYu0kFVMnJO8tVL%2BXyz0991eb2%2BguEDGUXTM1cGSuFruSq%2FpAYFrfy9axXGHMsouWnjioHMtPGKLvxwgwxRSXodFmyfDYa%2BEe%2BbPYm4M&X-Amz-Signature=9550d5bb24d0f05563d0b23dfd2666352aa8f30bfa0fb9d713ac312c4cf7594c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN3CBX7V%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDB0B1I2mA8rsMZPCJrYXkZdhUkqOzcv82D6gjuMJO5CAIgQ7DvEf275Ewpodex%2B%2FngvVk%2B%2FHyWFrDKZdEeX6DuyTAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7xE4ych1LxEVIdkyrcAxpS5Q56lAQYIBLcqGICzj2355u4UMfKfFx4RlSbSRSe%2FOEiIHgkgwlhhayhsdcIlEJxQUZ790JiFz2tbWYEVpR16%2BZgL0KnhE3Lagzwhoq0fYCQo0w%2Ft6u4vXyYi%2FOaroXGn3BXv3ffwFUCTKcozMMPUwUy3Fs%2F7meJFHrjbAZNDDhrmiRB0SEn4fpJlfsmLYgNvJ4vhlyhEbH1uta2YkEZO7IkTXbcNUP8f7Phks9Y0q%2F1%2Bl6tU7%2FFeezXKTcprE3RbykfFf5TJkOqpSP00I1OiII%2FkP%2Bqz03C4xWSwmZS45s5HNlMeGIzi3QRVhSL3y5sIuKFQfbRuvUQ6BDsYHQhT0FRwyuK3huJ4%2BpS1E8ZeIGHa0e62MP1sSPQD0wv98HQOjeZhJ8biGTPPgojF32YngeG7iRcUp4%2FSiCrtTKaXSYRli4anX6llux68muO2WN%2Fif49z4MX3fth1CX3%2BjsTpxREy2DttZKByK5drbf7nmWaP8DHbFUksvOfHbZZ3etW5zabdDcpDy0i7HNu3Dk0hID8xIZ9MsZ2Plxazp0WES%2Bbh8WUCrDkVmyhn3AC4NaLz25Zvw%2BA5Sl5c4D8BW95QowTHnlMAOUvonij4D7UzS%2F3hCfiLaIajZSTMLen2MQGOqUBnbQuJePQnFJpNm7TN4jWohWFEp3mtlMu0d4yVim2xBP4Ep6EiJXKNZRnh9CQxPB2%2FfsHsmPX6YEXQeUQsPSpP817RW9c9bYOTJOdSY5pu%2BWMWDGqdLUHDYu0kFVMnJO8tVL%2BXyz0991eb2%2BguEDGUXTM1cGSuFruSq%2FpAYFrfy9axXGHMsouWnjioHMtPGKLvxwgwxRSXodFmyfDYa%2BEe%2BbPYm4M&X-Amz-Signature=260f56bf51cd7e258f949eab65e4980b8f7bb0e1367177b635258fd95cddb029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN3CBX7V%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDB0B1I2mA8rsMZPCJrYXkZdhUkqOzcv82D6gjuMJO5CAIgQ7DvEf275Ewpodex%2B%2FngvVk%2B%2FHyWFrDKZdEeX6DuyTAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7xE4ych1LxEVIdkyrcAxpS5Q56lAQYIBLcqGICzj2355u4UMfKfFx4RlSbSRSe%2FOEiIHgkgwlhhayhsdcIlEJxQUZ790JiFz2tbWYEVpR16%2BZgL0KnhE3Lagzwhoq0fYCQo0w%2Ft6u4vXyYi%2FOaroXGn3BXv3ffwFUCTKcozMMPUwUy3Fs%2F7meJFHrjbAZNDDhrmiRB0SEn4fpJlfsmLYgNvJ4vhlyhEbH1uta2YkEZO7IkTXbcNUP8f7Phks9Y0q%2F1%2Bl6tU7%2FFeezXKTcprE3RbykfFf5TJkOqpSP00I1OiII%2FkP%2Bqz03C4xWSwmZS45s5HNlMeGIzi3QRVhSL3y5sIuKFQfbRuvUQ6BDsYHQhT0FRwyuK3huJ4%2BpS1E8ZeIGHa0e62MP1sSPQD0wv98HQOjeZhJ8biGTPPgojF32YngeG7iRcUp4%2FSiCrtTKaXSYRli4anX6llux68muO2WN%2Fif49z4MX3fth1CX3%2BjsTpxREy2DttZKByK5drbf7nmWaP8DHbFUksvOfHbZZ3etW5zabdDcpDy0i7HNu3Dk0hID8xIZ9MsZ2Plxazp0WES%2Bbh8WUCrDkVmyhn3AC4NaLz25Zvw%2BA5Sl5c4D8BW95QowTHnlMAOUvonij4D7UzS%2F3hCfiLaIajZSTMLen2MQGOqUBnbQuJePQnFJpNm7TN4jWohWFEp3mtlMu0d4yVim2xBP4Ep6EiJXKNZRnh9CQxPB2%2FfsHsmPX6YEXQeUQsPSpP817RW9c9bYOTJOdSY5pu%2BWMWDGqdLUHDYu0kFVMnJO8tVL%2BXyz0991eb2%2BguEDGUXTM1cGSuFruSq%2FpAYFrfy9axXGHMsouWnjioHMtPGKLvxwgwxRSXodFmyfDYa%2BEe%2BbPYm4M&X-Amz-Signature=13795685e7c9a24067baa6a3c2d0c7e0831f31d9b36295a3d226a01f601d00c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN3CBX7V%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDB0B1I2mA8rsMZPCJrYXkZdhUkqOzcv82D6gjuMJO5CAIgQ7DvEf275Ewpodex%2B%2FngvVk%2B%2FHyWFrDKZdEeX6DuyTAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7xE4ych1LxEVIdkyrcAxpS5Q56lAQYIBLcqGICzj2355u4UMfKfFx4RlSbSRSe%2FOEiIHgkgwlhhayhsdcIlEJxQUZ790JiFz2tbWYEVpR16%2BZgL0KnhE3Lagzwhoq0fYCQo0w%2Ft6u4vXyYi%2FOaroXGn3BXv3ffwFUCTKcozMMPUwUy3Fs%2F7meJFHrjbAZNDDhrmiRB0SEn4fpJlfsmLYgNvJ4vhlyhEbH1uta2YkEZO7IkTXbcNUP8f7Phks9Y0q%2F1%2Bl6tU7%2FFeezXKTcprE3RbykfFf5TJkOqpSP00I1OiII%2FkP%2Bqz03C4xWSwmZS45s5HNlMeGIzi3QRVhSL3y5sIuKFQfbRuvUQ6BDsYHQhT0FRwyuK3huJ4%2BpS1E8ZeIGHa0e62MP1sSPQD0wv98HQOjeZhJ8biGTPPgojF32YngeG7iRcUp4%2FSiCrtTKaXSYRli4anX6llux68muO2WN%2Fif49z4MX3fth1CX3%2BjsTpxREy2DttZKByK5drbf7nmWaP8DHbFUksvOfHbZZ3etW5zabdDcpDy0i7HNu3Dk0hID8xIZ9MsZ2Plxazp0WES%2Bbh8WUCrDkVmyhn3AC4NaLz25Zvw%2BA5Sl5c4D8BW95QowTHnlMAOUvonij4D7UzS%2F3hCfiLaIajZSTMLen2MQGOqUBnbQuJePQnFJpNm7TN4jWohWFEp3mtlMu0d4yVim2xBP4Ep6EiJXKNZRnh9CQxPB2%2FfsHsmPX6YEXQeUQsPSpP817RW9c9bYOTJOdSY5pu%2BWMWDGqdLUHDYu0kFVMnJO8tVL%2BXyz0991eb2%2BguEDGUXTM1cGSuFruSq%2FpAYFrfy9axXGHMsouWnjioHMtPGKLvxwgwxRSXodFmyfDYa%2BEe%2BbPYm4M&X-Amz-Signature=505a3931bbeada34cfea61ea317226d1f23abeb0ce4967138cf971584ad20758&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN3CBX7V%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDB0B1I2mA8rsMZPCJrYXkZdhUkqOzcv82D6gjuMJO5CAIgQ7DvEf275Ewpodex%2B%2FngvVk%2B%2FHyWFrDKZdEeX6DuyTAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7xE4ych1LxEVIdkyrcAxpS5Q56lAQYIBLcqGICzj2355u4UMfKfFx4RlSbSRSe%2FOEiIHgkgwlhhayhsdcIlEJxQUZ790JiFz2tbWYEVpR16%2BZgL0KnhE3Lagzwhoq0fYCQo0w%2Ft6u4vXyYi%2FOaroXGn3BXv3ffwFUCTKcozMMPUwUy3Fs%2F7meJFHrjbAZNDDhrmiRB0SEn4fpJlfsmLYgNvJ4vhlyhEbH1uta2YkEZO7IkTXbcNUP8f7Phks9Y0q%2F1%2Bl6tU7%2FFeezXKTcprE3RbykfFf5TJkOqpSP00I1OiII%2FkP%2Bqz03C4xWSwmZS45s5HNlMeGIzi3QRVhSL3y5sIuKFQfbRuvUQ6BDsYHQhT0FRwyuK3huJ4%2BpS1E8ZeIGHa0e62MP1sSPQD0wv98HQOjeZhJ8biGTPPgojF32YngeG7iRcUp4%2FSiCrtTKaXSYRli4anX6llux68muO2WN%2Fif49z4MX3fth1CX3%2BjsTpxREy2DttZKByK5drbf7nmWaP8DHbFUksvOfHbZZ3etW5zabdDcpDy0i7HNu3Dk0hID8xIZ9MsZ2Plxazp0WES%2Bbh8WUCrDkVmyhn3AC4NaLz25Zvw%2BA5Sl5c4D8BW95QowTHnlMAOUvonij4D7UzS%2F3hCfiLaIajZSTMLen2MQGOqUBnbQuJePQnFJpNm7TN4jWohWFEp3mtlMu0d4yVim2xBP4Ep6EiJXKNZRnh9CQxPB2%2FfsHsmPX6YEXQeUQsPSpP817RW9c9bYOTJOdSY5pu%2BWMWDGqdLUHDYu0kFVMnJO8tVL%2BXyz0991eb2%2BguEDGUXTM1cGSuFruSq%2FpAYFrfy9axXGHMsouWnjioHMtPGKLvxwgwxRSXodFmyfDYa%2BEe%2BbPYm4M&X-Amz-Signature=d91a19b6a6d68e6fb1cde1bd733f0201b6a6f2282636b045a7e97b4d49c8f723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

{{< /table >}}

#### description:

publishes the `/scan` topic for RPLIDAR products

[official docs link](https://github.com/Slamtec/rplidar_ros/tree/ros2#slamtec-lidar-ros2-package)

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

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
    ])
```

<details>
      <summary>Finding Lidar USB port:</summary>
      ```bash
ls /dev/ttyUSB*
```
  </details>

{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

To launch the Lidar node use this command below.

 

{{% alert context="warning" %}}

# NOTE: YOUR RPLIDAR MODEL MIGHT BE DIFFERENT

I am using the a2m8 model so I run the launch file below.

However, your model may be different so please look at this guide to find which launch file to run.

[https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz](https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz)

{{% /alert %}}

```bash
ros2 launch rplidar_ros view_rplidar_a2m8_launch.py scan_mode:=Boost serial_port:=/dev/ttyUSB0
```

```xml
ros2 launch mbot_pkg display.launch.py
```

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN3CBX7V%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDB0B1I2mA8rsMZPCJrYXkZdhUkqOzcv82D6gjuMJO5CAIgQ7DvEf275Ewpodex%2B%2FngvVk%2B%2FHyWFrDKZdEeX6DuyTAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7xE4ych1LxEVIdkyrcAxpS5Q56lAQYIBLcqGICzj2355u4UMfKfFx4RlSbSRSe%2FOEiIHgkgwlhhayhsdcIlEJxQUZ790JiFz2tbWYEVpR16%2BZgL0KnhE3Lagzwhoq0fYCQo0w%2Ft6u4vXyYi%2FOaroXGn3BXv3ffwFUCTKcozMMPUwUy3Fs%2F7meJFHrjbAZNDDhrmiRB0SEn4fpJlfsmLYgNvJ4vhlyhEbH1uta2YkEZO7IkTXbcNUP8f7Phks9Y0q%2F1%2Bl6tU7%2FFeezXKTcprE3RbykfFf5TJkOqpSP00I1OiII%2FkP%2Bqz03C4xWSwmZS45s5HNlMeGIzi3QRVhSL3y5sIuKFQfbRuvUQ6BDsYHQhT0FRwyuK3huJ4%2BpS1E8ZeIGHa0e62MP1sSPQD0wv98HQOjeZhJ8biGTPPgojF32YngeG7iRcUp4%2FSiCrtTKaXSYRli4anX6llux68muO2WN%2Fif49z4MX3fth1CX3%2BjsTpxREy2DttZKByK5drbf7nmWaP8DHbFUksvOfHbZZ3etW5zabdDcpDy0i7HNu3Dk0hID8xIZ9MsZ2Plxazp0WES%2Bbh8WUCrDkVmyhn3AC4NaLz25Zvw%2BA5Sl5c4D8BW95QowTHnlMAOUvonij4D7UzS%2F3hCfiLaIajZSTMLen2MQGOqUBnbQuJePQnFJpNm7TN4jWohWFEp3mtlMu0d4yVim2xBP4Ep6EiJXKNZRnh9CQxPB2%2FfsHsmPX6YEXQeUQsPSpP817RW9c9bYOTJOdSY5pu%2BWMWDGqdLUHDYu0kFVMnJO8tVL%2BXyz0991eb2%2BguEDGUXTM1cGSuFruSq%2FpAYFrfy9axXGHMsouWnjioHMtPGKLvxwgwxRSXodFmyfDYa%2BEe%2BbPYm4M&X-Amz-Signature=f4a7fbf7dce42e1265443645e9ee33920e30a07721275bbe68928984cbe469f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN3CBX7V%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDB0B1I2mA8rsMZPCJrYXkZdhUkqOzcv82D6gjuMJO5CAIgQ7DvEf275Ewpodex%2B%2FngvVk%2B%2FHyWFrDKZdEeX6DuyTAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7xE4ych1LxEVIdkyrcAxpS5Q56lAQYIBLcqGICzj2355u4UMfKfFx4RlSbSRSe%2FOEiIHgkgwlhhayhsdcIlEJxQUZ790JiFz2tbWYEVpR16%2BZgL0KnhE3Lagzwhoq0fYCQo0w%2Ft6u4vXyYi%2FOaroXGn3BXv3ffwFUCTKcozMMPUwUy3Fs%2F7meJFHrjbAZNDDhrmiRB0SEn4fpJlfsmLYgNvJ4vhlyhEbH1uta2YkEZO7IkTXbcNUP8f7Phks9Y0q%2F1%2Bl6tU7%2FFeezXKTcprE3RbykfFf5TJkOqpSP00I1OiII%2FkP%2Bqz03C4xWSwmZS45s5HNlMeGIzi3QRVhSL3y5sIuKFQfbRuvUQ6BDsYHQhT0FRwyuK3huJ4%2BpS1E8ZeIGHa0e62MP1sSPQD0wv98HQOjeZhJ8biGTPPgojF32YngeG7iRcUp4%2FSiCrtTKaXSYRli4anX6llux68muO2WN%2Fif49z4MX3fth1CX3%2BjsTpxREy2DttZKByK5drbf7nmWaP8DHbFUksvOfHbZZ3etW5zabdDcpDy0i7HNu3Dk0hID8xIZ9MsZ2Plxazp0WES%2Bbh8WUCrDkVmyhn3AC4NaLz25Zvw%2BA5Sl5c4D8BW95QowTHnlMAOUvonij4D7UzS%2F3hCfiLaIajZSTMLen2MQGOqUBnbQuJePQnFJpNm7TN4jWohWFEp3mtlMu0d4yVim2xBP4Ep6EiJXKNZRnh9CQxPB2%2FfsHsmPX6YEXQeUQsPSpP817RW9c9bYOTJOdSY5pu%2BWMWDGqdLUHDYu0kFVMnJO8tVL%2BXyz0991eb2%2BguEDGUXTM1cGSuFruSq%2FpAYFrfy9axXGHMsouWnjioHMtPGKLvxwgwxRSXodFmyfDYa%2BEe%2BbPYm4M&X-Amz-Signature=5b40b895dfb97eac6c3b70eb6c8b400740849241b0c39a987a9e3bad73ba7862&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Adding RPLidar to launch

idk tell them to look at the launch file to see which exact prams to put in

```python

 def generate_launch_description():
		 ...
		 
     lidar_node = Node(
        package='rplidar_ros',
        executable='rplidar_node',
        name='rplidar_node',
        parameters=[{'channel_type': 'serial',
                     'serial_port': '/dev/ttyUSB0', #recomended to do /dev/serial/by-path/...
                     'serial_baudrate': 115200,
                     'frame_id': 'lidar_link',
                     'scan_mode': 'Boost'}],
        output='screen')

 
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

**Result:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```
