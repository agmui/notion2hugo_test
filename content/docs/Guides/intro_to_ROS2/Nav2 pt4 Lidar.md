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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRFDJPAB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCF6%2Bgaqhws8jsVNikKg42XxkLYzvZlSyHNQMLiJ0VsCQIgKMetq%2BDgf56RjeSJ5QXy%2FiZ%2BBFNy9kNTofx4onpQ1KQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDG9OXRPFWQk2wRrW%2FSrcA%2FFDPFr4XwUgIE1beoZH%2FRuQP34LgcJMKt66DCTl%2Ft1%2FJ2LgVw6gadXN%2FIqRnPfddal4q%2BmtzB%2BVS4n4XG3TP1uIlM%2F0Nzo9%2BBP7349aHnPmr5x0vAPbByekQDfxm%2FWmGhC9cfmJLJ69XKxJPm3oTa1DLGgLAm5pgegnS%2FuDC51FaswvxbW5z0ybcp8YPhg%2F0R8Cz%2FyO99eEJ0%2BjCdIAVp6fsaYxtip5PnHaHbmfaDcjH8bmz5McbD%2FntsZ9NaMhhM5O9oDf25B58RMi1O4WSBE2HNmFsWgsM3yhRtiEO3Uksz18OekMl%2Ft4YFtMepgIyrVUhX%2F2Qc7IhSSIH89tIZdCMeWOmRwNxLYTD1HKySSZCf1B98r6CHmzCgccQbO2fHyEuLvHfKXjpuFYhsvTkHLpKa1%2BWffP195VxPUI7akGkYA22c6wUzAosxOcvTDXI5PJRnmdyCTNk%2B2j5s8Wi%2FFsCNqHJyWL1EMbFPZrJDXKjkWurBqRyufFXL9RuRiWYv%2FX6sQrSJKck2vACjpJSuLlakI5IPgcahKDyFGo8mPXVRCRYoNAxzfSpj%2FzqQQ2Ox1LDWSi67BWLPE%2BOTRoYEkTOftwLHge7b0A6QzoCzbk0WUe%2BkGeZ0nfMjoeMP3axsQGOqUB6QEvAeKIwnlbrasH1MPXkmZTcTsQ1BFroiLiH3pNUxf6J1NxunFTpHoGKjo1D9TiQucgKblN98AsNQG1U5ZbHue4sLO3WPxrgXAwaJSsXyIEe6hCOx2iDQHM6nzQIZgZqecmL6z1vvdHIfbg0qVtl2mc4O1ocGTqIfj7Ao2mIbNlGDbxfqbSu1bKdBTu%2F%2F1IHb2c1QQbC3BC2AsV4feeP4SQLlfd&X-Amz-Signature=a679a8c808cb81409519457897fcfc11541a6831587381186f0937cf7a150787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY3ECS5K%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIC5ZNFPoaXk0uv0MeSuxDSvvbxUMVH5XGpFav1%2FN4ghCAiBtQVaMoyidBPrwi5MG0Uj06HeH2%2FirWCUS6flABZFz8ir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMFNuYE3t02HHnMprrKtwDZqyG72TbqNslVQGRmefsIILlLZ4PxvrNlQLowsowQwxuAxWbMBILoX9Ukxa5TpZ32jnl4jFkMlgqLxScxMPykNRvHIHW1MqWYq%2FOfbYLHAe6GRqk7oVD07NEJ03nyCSl4xxGXFyOuAHNAGAG0jpNFL3qWGf4oyq1otW5dB5KkaqhoyXWpIMcQcaSDbdQwEHg%2BW%2B%2F90wZkfWIvf8oHSlyvAwwd9iJZdSXAXuO8MyQjOr3MdmWV8%2BCllXAPuxaXg7LAPVKtTyA6x0T%2BnnH0kBj029nK2r4fzqty13CPyfl%2BlC9zvD2UuRGtuLTU4TLmpOuf%2Fzoc685VdJeyJhUaRVVQx%2B81teXKgywR5ejro2kb%2FB6RfOBDmq0mY8p9adGFdBi1i8Gw2quSGb0nhIuumL8nuhBj1QYbrTUkpxd%2BJqEvkrUo2nVbn6i9p9tbxar8JPo61opWenkKB52fziaB6MZi6HdUAt0nFBFyMPS9Lge58IrjKU6ngUUEDYR9iSpMlUng%2Fhbd0%2F8i9KfSbcnIr4LDWdtrHXJdCX0MGEuCGnEys%2BGhjr9uwlJN4KjufNNGWn%2BLHNH00iBM4sw4E%2FJRyJl7Yd1wPGsNjtGEPH6zOxaY5N0yRPqOX%2B5JoGRPO4w5trGxAY6pgFnZ56ucEtyz9kJLGIfLv8nnWiQ3ECvFmOMITYxT313me9rvt6oJL5eVFba2GiYyQ9KxGz8tgAJ4dNwB6r9fJ6jh3eVLFyqSvaV8RPV7Mk%2FxRYstQzzoVGjjXJ74doqOTtTtDHW6MoYhMF5ixmoEoXfQnDmaWlC%2BMuXcGn%2BbennW1CxLrMvJw2Rak65463ygv2l3Yw%2BkZ3qYaKUNGI2u5vFZaAAtJLe&X-Amz-Signature=e44f35555fb0ae56aa743180ccd231fb96ddc33733080853b05b05c5b07165ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY3ECS5K%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIC5ZNFPoaXk0uv0MeSuxDSvvbxUMVH5XGpFav1%2FN4ghCAiBtQVaMoyidBPrwi5MG0Uj06HeH2%2FirWCUS6flABZFz8ir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMFNuYE3t02HHnMprrKtwDZqyG72TbqNslVQGRmefsIILlLZ4PxvrNlQLowsowQwxuAxWbMBILoX9Ukxa5TpZ32jnl4jFkMlgqLxScxMPykNRvHIHW1MqWYq%2FOfbYLHAe6GRqk7oVD07NEJ03nyCSl4xxGXFyOuAHNAGAG0jpNFL3qWGf4oyq1otW5dB5KkaqhoyXWpIMcQcaSDbdQwEHg%2BW%2B%2F90wZkfWIvf8oHSlyvAwwd9iJZdSXAXuO8MyQjOr3MdmWV8%2BCllXAPuxaXg7LAPVKtTyA6x0T%2BnnH0kBj029nK2r4fzqty13CPyfl%2BlC9zvD2UuRGtuLTU4TLmpOuf%2Fzoc685VdJeyJhUaRVVQx%2B81teXKgywR5ejro2kb%2FB6RfOBDmq0mY8p9adGFdBi1i8Gw2quSGb0nhIuumL8nuhBj1QYbrTUkpxd%2BJqEvkrUo2nVbn6i9p9tbxar8JPo61opWenkKB52fziaB6MZi6HdUAt0nFBFyMPS9Lge58IrjKU6ngUUEDYR9iSpMlUng%2Fhbd0%2F8i9KfSbcnIr4LDWdtrHXJdCX0MGEuCGnEys%2BGhjr9uwlJN4KjufNNGWn%2BLHNH00iBM4sw4E%2FJRyJl7Yd1wPGsNjtGEPH6zOxaY5N0yRPqOX%2B5JoGRPO4w5trGxAY6pgFnZ56ucEtyz9kJLGIfLv8nnWiQ3ECvFmOMITYxT313me9rvt6oJL5eVFba2GiYyQ9KxGz8tgAJ4dNwB6r9fJ6jh3eVLFyqSvaV8RPV7Mk%2FxRYstQzzoVGjjXJ74doqOTtTtDHW6MoYhMF5ixmoEoXfQnDmaWlC%2BMuXcGn%2BbennW1CxLrMvJw2Rak65463ygv2l3Yw%2BkZ3qYaKUNGI2u5vFZaAAtJLe&X-Amz-Signature=de056b280ac5a2b4b1669558dc78caec24f99f47e17e611463a20439cdcd0716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY3ECS5K%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIC5ZNFPoaXk0uv0MeSuxDSvvbxUMVH5XGpFav1%2FN4ghCAiBtQVaMoyidBPrwi5MG0Uj06HeH2%2FirWCUS6flABZFz8ir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMFNuYE3t02HHnMprrKtwDZqyG72TbqNslVQGRmefsIILlLZ4PxvrNlQLowsowQwxuAxWbMBILoX9Ukxa5TpZ32jnl4jFkMlgqLxScxMPykNRvHIHW1MqWYq%2FOfbYLHAe6GRqk7oVD07NEJ03nyCSl4xxGXFyOuAHNAGAG0jpNFL3qWGf4oyq1otW5dB5KkaqhoyXWpIMcQcaSDbdQwEHg%2BW%2B%2F90wZkfWIvf8oHSlyvAwwd9iJZdSXAXuO8MyQjOr3MdmWV8%2BCllXAPuxaXg7LAPVKtTyA6x0T%2BnnH0kBj029nK2r4fzqty13CPyfl%2BlC9zvD2UuRGtuLTU4TLmpOuf%2Fzoc685VdJeyJhUaRVVQx%2B81teXKgywR5ejro2kb%2FB6RfOBDmq0mY8p9adGFdBi1i8Gw2quSGb0nhIuumL8nuhBj1QYbrTUkpxd%2BJqEvkrUo2nVbn6i9p9tbxar8JPo61opWenkKB52fziaB6MZi6HdUAt0nFBFyMPS9Lge58IrjKU6ngUUEDYR9iSpMlUng%2Fhbd0%2F8i9KfSbcnIr4LDWdtrHXJdCX0MGEuCGnEys%2BGhjr9uwlJN4KjufNNGWn%2BLHNH00iBM4sw4E%2FJRyJl7Yd1wPGsNjtGEPH6zOxaY5N0yRPqOX%2B5JoGRPO4w5trGxAY6pgFnZ56ucEtyz9kJLGIfLv8nnWiQ3ECvFmOMITYxT313me9rvt6oJL5eVFba2GiYyQ9KxGz8tgAJ4dNwB6r9fJ6jh3eVLFyqSvaV8RPV7Mk%2FxRYstQzzoVGjjXJ74doqOTtTtDHW6MoYhMF5ixmoEoXfQnDmaWlC%2BMuXcGn%2BbennW1CxLrMvJw2Rak65463ygv2l3Yw%2BkZ3qYaKUNGI2u5vFZaAAtJLe&X-Amz-Signature=1ec63ca1576c9dcedafbec3b9d4c7c6685286516f3aeae7ad346aa9689a57773&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY3ECS5K%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIC5ZNFPoaXk0uv0MeSuxDSvvbxUMVH5XGpFav1%2FN4ghCAiBtQVaMoyidBPrwi5MG0Uj06HeH2%2FirWCUS6flABZFz8ir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMFNuYE3t02HHnMprrKtwDZqyG72TbqNslVQGRmefsIILlLZ4PxvrNlQLowsowQwxuAxWbMBILoX9Ukxa5TpZ32jnl4jFkMlgqLxScxMPykNRvHIHW1MqWYq%2FOfbYLHAe6GRqk7oVD07NEJ03nyCSl4xxGXFyOuAHNAGAG0jpNFL3qWGf4oyq1otW5dB5KkaqhoyXWpIMcQcaSDbdQwEHg%2BW%2B%2F90wZkfWIvf8oHSlyvAwwd9iJZdSXAXuO8MyQjOr3MdmWV8%2BCllXAPuxaXg7LAPVKtTyA6x0T%2BnnH0kBj029nK2r4fzqty13CPyfl%2BlC9zvD2UuRGtuLTU4TLmpOuf%2Fzoc685VdJeyJhUaRVVQx%2B81teXKgywR5ejro2kb%2FB6RfOBDmq0mY8p9adGFdBi1i8Gw2quSGb0nhIuumL8nuhBj1QYbrTUkpxd%2BJqEvkrUo2nVbn6i9p9tbxar8JPo61opWenkKB52fziaB6MZi6HdUAt0nFBFyMPS9Lge58IrjKU6ngUUEDYR9iSpMlUng%2Fhbd0%2F8i9KfSbcnIr4LDWdtrHXJdCX0MGEuCGnEys%2BGhjr9uwlJN4KjufNNGWn%2BLHNH00iBM4sw4E%2FJRyJl7Yd1wPGsNjtGEPH6zOxaY5N0yRPqOX%2B5JoGRPO4w5trGxAY6pgFnZ56ucEtyz9kJLGIfLv8nnWiQ3ECvFmOMITYxT313me9rvt6oJL5eVFba2GiYyQ9KxGz8tgAJ4dNwB6r9fJ6jh3eVLFyqSvaV8RPV7Mk%2FxRYstQzzoVGjjXJ74doqOTtTtDHW6MoYhMF5ixmoEoXfQnDmaWlC%2BMuXcGn%2BbennW1CxLrMvJw2Rak65463ygv2l3Yw%2BkZ3qYaKUNGI2u5vFZaAAtJLe&X-Amz-Signature=5712932f6f2e2652d66f99bf11013d4e5d5dc4197adc31c9b89351e7447f15bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY3ECS5K%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIC5ZNFPoaXk0uv0MeSuxDSvvbxUMVH5XGpFav1%2FN4ghCAiBtQVaMoyidBPrwi5MG0Uj06HeH2%2FirWCUS6flABZFz8ir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMFNuYE3t02HHnMprrKtwDZqyG72TbqNslVQGRmefsIILlLZ4PxvrNlQLowsowQwxuAxWbMBILoX9Ukxa5TpZ32jnl4jFkMlgqLxScxMPykNRvHIHW1MqWYq%2FOfbYLHAe6GRqk7oVD07NEJ03nyCSl4xxGXFyOuAHNAGAG0jpNFL3qWGf4oyq1otW5dB5KkaqhoyXWpIMcQcaSDbdQwEHg%2BW%2B%2F90wZkfWIvf8oHSlyvAwwd9iJZdSXAXuO8MyQjOr3MdmWV8%2BCllXAPuxaXg7LAPVKtTyA6x0T%2BnnH0kBj029nK2r4fzqty13CPyfl%2BlC9zvD2UuRGtuLTU4TLmpOuf%2Fzoc685VdJeyJhUaRVVQx%2B81teXKgywR5ejro2kb%2FB6RfOBDmq0mY8p9adGFdBi1i8Gw2quSGb0nhIuumL8nuhBj1QYbrTUkpxd%2BJqEvkrUo2nVbn6i9p9tbxar8JPo61opWenkKB52fziaB6MZi6HdUAt0nFBFyMPS9Lge58IrjKU6ngUUEDYR9iSpMlUng%2Fhbd0%2F8i9KfSbcnIr4LDWdtrHXJdCX0MGEuCGnEys%2BGhjr9uwlJN4KjufNNGWn%2BLHNH00iBM4sw4E%2FJRyJl7Yd1wPGsNjtGEPH6zOxaY5N0yRPqOX%2B5JoGRPO4w5trGxAY6pgFnZ56ucEtyz9kJLGIfLv8nnWiQ3ECvFmOMITYxT313me9rvt6oJL5eVFba2GiYyQ9KxGz8tgAJ4dNwB6r9fJ6jh3eVLFyqSvaV8RPV7Mk%2FxRYstQzzoVGjjXJ74doqOTtTtDHW6MoYhMF5ixmoEoXfQnDmaWlC%2BMuXcGn%2BbennW1CxLrMvJw2Rak65463ygv2l3Yw%2BkZ3qYaKUNGI2u5vFZaAAtJLe&X-Amz-Signature=4a01d9ed0223c9054fe34dc0119cfbf71e1769f058d5602253ea01094ab24a2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY3ECS5K%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIC5ZNFPoaXk0uv0MeSuxDSvvbxUMVH5XGpFav1%2FN4ghCAiBtQVaMoyidBPrwi5MG0Uj06HeH2%2FirWCUS6flABZFz8ir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMFNuYE3t02HHnMprrKtwDZqyG72TbqNslVQGRmefsIILlLZ4PxvrNlQLowsowQwxuAxWbMBILoX9Ukxa5TpZ32jnl4jFkMlgqLxScxMPykNRvHIHW1MqWYq%2FOfbYLHAe6GRqk7oVD07NEJ03nyCSl4xxGXFyOuAHNAGAG0jpNFL3qWGf4oyq1otW5dB5KkaqhoyXWpIMcQcaSDbdQwEHg%2BW%2B%2F90wZkfWIvf8oHSlyvAwwd9iJZdSXAXuO8MyQjOr3MdmWV8%2BCllXAPuxaXg7LAPVKtTyA6x0T%2BnnH0kBj029nK2r4fzqty13CPyfl%2BlC9zvD2UuRGtuLTU4TLmpOuf%2Fzoc685VdJeyJhUaRVVQx%2B81teXKgywR5ejro2kb%2FB6RfOBDmq0mY8p9adGFdBi1i8Gw2quSGb0nhIuumL8nuhBj1QYbrTUkpxd%2BJqEvkrUo2nVbn6i9p9tbxar8JPo61opWenkKB52fziaB6MZi6HdUAt0nFBFyMPS9Lge58IrjKU6ngUUEDYR9iSpMlUng%2Fhbd0%2F8i9KfSbcnIr4LDWdtrHXJdCX0MGEuCGnEys%2BGhjr9uwlJN4KjufNNGWn%2BLHNH00iBM4sw4E%2FJRyJl7Yd1wPGsNjtGEPH6zOxaY5N0yRPqOX%2B5JoGRPO4w5trGxAY6pgFnZ56ucEtyz9kJLGIfLv8nnWiQ3ECvFmOMITYxT313me9rvt6oJL5eVFba2GiYyQ9KxGz8tgAJ4dNwB6r9fJ6jh3eVLFyqSvaV8RPV7Mk%2FxRYstQzzoVGjjXJ74doqOTtTtDHW6MoYhMF5ixmoEoXfQnDmaWlC%2BMuXcGn%2BbennW1CxLrMvJw2Rak65463ygv2l3Yw%2BkZ3qYaKUNGI2u5vFZaAAtJLe&X-Amz-Signature=1a30a221a7fa69207baf236e25e46ed18a3e7efd57d8e8aa2c903da27f0278c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY3ECS5K%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIC5ZNFPoaXk0uv0MeSuxDSvvbxUMVH5XGpFav1%2FN4ghCAiBtQVaMoyidBPrwi5MG0Uj06HeH2%2FirWCUS6flABZFz8ir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMFNuYE3t02HHnMprrKtwDZqyG72TbqNslVQGRmefsIILlLZ4PxvrNlQLowsowQwxuAxWbMBILoX9Ukxa5TpZ32jnl4jFkMlgqLxScxMPykNRvHIHW1MqWYq%2FOfbYLHAe6GRqk7oVD07NEJ03nyCSl4xxGXFyOuAHNAGAG0jpNFL3qWGf4oyq1otW5dB5KkaqhoyXWpIMcQcaSDbdQwEHg%2BW%2B%2F90wZkfWIvf8oHSlyvAwwd9iJZdSXAXuO8MyQjOr3MdmWV8%2BCllXAPuxaXg7LAPVKtTyA6x0T%2BnnH0kBj029nK2r4fzqty13CPyfl%2BlC9zvD2UuRGtuLTU4TLmpOuf%2Fzoc685VdJeyJhUaRVVQx%2B81teXKgywR5ejro2kb%2FB6RfOBDmq0mY8p9adGFdBi1i8Gw2quSGb0nhIuumL8nuhBj1QYbrTUkpxd%2BJqEvkrUo2nVbn6i9p9tbxar8JPo61opWenkKB52fziaB6MZi6HdUAt0nFBFyMPS9Lge58IrjKU6ngUUEDYR9iSpMlUng%2Fhbd0%2F8i9KfSbcnIr4LDWdtrHXJdCX0MGEuCGnEys%2BGhjr9uwlJN4KjufNNGWn%2BLHNH00iBM4sw4E%2FJRyJl7Yd1wPGsNjtGEPH6zOxaY5N0yRPqOX%2B5JoGRPO4w5trGxAY6pgFnZ56ucEtyz9kJLGIfLv8nnWiQ3ECvFmOMITYxT313me9rvt6oJL5eVFba2GiYyQ9KxGz8tgAJ4dNwB6r9fJ6jh3eVLFyqSvaV8RPV7Mk%2FxRYstQzzoVGjjXJ74doqOTtTtDHW6MoYhMF5ixmoEoXfQnDmaWlC%2BMuXcGn%2BbennW1CxLrMvJw2Rak65463ygv2l3Yw%2BkZ3qYaKUNGI2u5vFZaAAtJLe&X-Amz-Signature=e55fdfb3dcc14d2dc9bf5d73fb16944431b2ba077f1b451f20419f756448561f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY3ECS5K%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIC5ZNFPoaXk0uv0MeSuxDSvvbxUMVH5XGpFav1%2FN4ghCAiBtQVaMoyidBPrwi5MG0Uj06HeH2%2FirWCUS6flABZFz8ir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMFNuYE3t02HHnMprrKtwDZqyG72TbqNslVQGRmefsIILlLZ4PxvrNlQLowsowQwxuAxWbMBILoX9Ukxa5TpZ32jnl4jFkMlgqLxScxMPykNRvHIHW1MqWYq%2FOfbYLHAe6GRqk7oVD07NEJ03nyCSl4xxGXFyOuAHNAGAG0jpNFL3qWGf4oyq1otW5dB5KkaqhoyXWpIMcQcaSDbdQwEHg%2BW%2B%2F90wZkfWIvf8oHSlyvAwwd9iJZdSXAXuO8MyQjOr3MdmWV8%2BCllXAPuxaXg7LAPVKtTyA6x0T%2BnnH0kBj029nK2r4fzqty13CPyfl%2BlC9zvD2UuRGtuLTU4TLmpOuf%2Fzoc685VdJeyJhUaRVVQx%2B81teXKgywR5ejro2kb%2FB6RfOBDmq0mY8p9adGFdBi1i8Gw2quSGb0nhIuumL8nuhBj1QYbrTUkpxd%2BJqEvkrUo2nVbn6i9p9tbxar8JPo61opWenkKB52fziaB6MZi6HdUAt0nFBFyMPS9Lge58IrjKU6ngUUEDYR9iSpMlUng%2Fhbd0%2F8i9KfSbcnIr4LDWdtrHXJdCX0MGEuCGnEys%2BGhjr9uwlJN4KjufNNGWn%2BLHNH00iBM4sw4E%2FJRyJl7Yd1wPGsNjtGEPH6zOxaY5N0yRPqOX%2B5JoGRPO4w5trGxAY6pgFnZ56ucEtyz9kJLGIfLv8nnWiQ3ECvFmOMITYxT313me9rvt6oJL5eVFba2GiYyQ9KxGz8tgAJ4dNwB6r9fJ6jh3eVLFyqSvaV8RPV7Mk%2FxRYstQzzoVGjjXJ74doqOTtTtDHW6MoYhMF5ixmoEoXfQnDmaWlC%2BMuXcGn%2BbennW1CxLrMvJw2Rak65463ygv2l3Yw%2BkZ3qYaKUNGI2u5vFZaAAtJLe&X-Amz-Signature=02e02c3bc1d3eac2719f4153f9c5a2c1b877826b0fa4e8d5ae563ccd38a21f03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY3ECS5K%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIC5ZNFPoaXk0uv0MeSuxDSvvbxUMVH5XGpFav1%2FN4ghCAiBtQVaMoyidBPrwi5MG0Uj06HeH2%2FirWCUS6flABZFz8ir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMFNuYE3t02HHnMprrKtwDZqyG72TbqNslVQGRmefsIILlLZ4PxvrNlQLowsowQwxuAxWbMBILoX9Ukxa5TpZ32jnl4jFkMlgqLxScxMPykNRvHIHW1MqWYq%2FOfbYLHAe6GRqk7oVD07NEJ03nyCSl4xxGXFyOuAHNAGAG0jpNFL3qWGf4oyq1otW5dB5KkaqhoyXWpIMcQcaSDbdQwEHg%2BW%2B%2F90wZkfWIvf8oHSlyvAwwd9iJZdSXAXuO8MyQjOr3MdmWV8%2BCllXAPuxaXg7LAPVKtTyA6x0T%2BnnH0kBj029nK2r4fzqty13CPyfl%2BlC9zvD2UuRGtuLTU4TLmpOuf%2Fzoc685VdJeyJhUaRVVQx%2B81teXKgywR5ejro2kb%2FB6RfOBDmq0mY8p9adGFdBi1i8Gw2quSGb0nhIuumL8nuhBj1QYbrTUkpxd%2BJqEvkrUo2nVbn6i9p9tbxar8JPo61opWenkKB52fziaB6MZi6HdUAt0nFBFyMPS9Lge58IrjKU6ngUUEDYR9iSpMlUng%2Fhbd0%2F8i9KfSbcnIr4LDWdtrHXJdCX0MGEuCGnEys%2BGhjr9uwlJN4KjufNNGWn%2BLHNH00iBM4sw4E%2FJRyJl7Yd1wPGsNjtGEPH6zOxaY5N0yRPqOX%2B5JoGRPO4w5trGxAY6pgFnZ56ucEtyz9kJLGIfLv8nnWiQ3ECvFmOMITYxT313me9rvt6oJL5eVFba2GiYyQ9KxGz8tgAJ4dNwB6r9fJ6jh3eVLFyqSvaV8RPV7Mk%2FxRYstQzzoVGjjXJ74doqOTtTtDHW6MoYhMF5ixmoEoXfQnDmaWlC%2BMuXcGn%2BbennW1CxLrMvJw2Rak65463ygv2l3Yw%2BkZ3qYaKUNGI2u5vFZaAAtJLe&X-Amz-Signature=8bebcd069b51752decdaab5af5fe205ceebf8a83d71d3adbb4fb38655d4a5922&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY3ECS5K%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIC5ZNFPoaXk0uv0MeSuxDSvvbxUMVH5XGpFav1%2FN4ghCAiBtQVaMoyidBPrwi5MG0Uj06HeH2%2FirWCUS6flABZFz8ir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMFNuYE3t02HHnMprrKtwDZqyG72TbqNslVQGRmefsIILlLZ4PxvrNlQLowsowQwxuAxWbMBILoX9Ukxa5TpZ32jnl4jFkMlgqLxScxMPykNRvHIHW1MqWYq%2FOfbYLHAe6GRqk7oVD07NEJ03nyCSl4xxGXFyOuAHNAGAG0jpNFL3qWGf4oyq1otW5dB5KkaqhoyXWpIMcQcaSDbdQwEHg%2BW%2B%2F90wZkfWIvf8oHSlyvAwwd9iJZdSXAXuO8MyQjOr3MdmWV8%2BCllXAPuxaXg7LAPVKtTyA6x0T%2BnnH0kBj029nK2r4fzqty13CPyfl%2BlC9zvD2UuRGtuLTU4TLmpOuf%2Fzoc685VdJeyJhUaRVVQx%2B81teXKgywR5ejro2kb%2FB6RfOBDmq0mY8p9adGFdBi1i8Gw2quSGb0nhIuumL8nuhBj1QYbrTUkpxd%2BJqEvkrUo2nVbn6i9p9tbxar8JPo61opWenkKB52fziaB6MZi6HdUAt0nFBFyMPS9Lge58IrjKU6ngUUEDYR9iSpMlUng%2Fhbd0%2F8i9KfSbcnIr4LDWdtrHXJdCX0MGEuCGnEys%2BGhjr9uwlJN4KjufNNGWn%2BLHNH00iBM4sw4E%2FJRyJl7Yd1wPGsNjtGEPH6zOxaY5N0yRPqOX%2B5JoGRPO4w5trGxAY6pgFnZ56ucEtyz9kJLGIfLv8nnWiQ3ECvFmOMITYxT313me9rvt6oJL5eVFba2GiYyQ9KxGz8tgAJ4dNwB6r9fJ6jh3eVLFyqSvaV8RPV7Mk%2FxRYstQzzoVGjjXJ74doqOTtTtDHW6MoYhMF5ixmoEoXfQnDmaWlC%2BMuXcGn%2BbennW1CxLrMvJw2Rak65463ygv2l3Yw%2BkZ3qYaKUNGI2u5vFZaAAtJLe&X-Amz-Signature=5712932f6f2e2652d66f99bf11013d4e5d5dc4197adc31c9b89351e7447f15bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
