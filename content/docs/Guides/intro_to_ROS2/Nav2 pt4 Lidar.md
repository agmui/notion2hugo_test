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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WV5MKBU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpLhO3sRzAktaqj7uMBIxIoVPJ6g%2BuyPH9OQ3FuOvM%2FAiAwcyDpoXL4%2FelrIqkStuaF%2F6wsyClnU%2BT4hhrKTS1RWyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMfmBnzySV4OnpJLF0KtwDk2IRHAouwUUJBDW6efkMCn51c3Zee3x81GNJuoV%2BEA9dBehGZ3CIaPqlhdJN6NK%2FUo9MSWDl1TBBYjPPLqdiQYyLEk3GKu7KunMD8%2F%2FqIjnWhtxOY0CBWvRYsx3%2BD0IGjB7wFeDuQAewbx21N7CX88VtyAhxaveDeazVSRKW6eSop6dIkAs1Cu6BHLH3yg07bGXB9f525tyw2GzUVXBInJgRhtWH3VzIb%2BwXNkO2umlOyqfYypPNiRS2YYob7ITP6feABzLHtniVjkA8zqJOHgPau9vHQYqB%2B5NqBrKXuVybCtUJumrhEw6xElyhieNbDPiCBo%2FPaK2sD5%2BYeeveMSlGZgsdONE4BJFq2k5a1pAhK29sCXRSQ3icmvtr5MXrXeMPgF7gVVEc3xH4883G6s6CyVpoijcj1F1tiEVINoygYz9cYVGnNrZ5JGZxge9CnHdfGrQwrZ0vfReTJRpB6Dk26I5q190vK3DNEwW1RJkrXme%2Ffk3sNu2JRA825XNtGSf2TXO2F4ZdX%2B3Cuyd9D42iT4Od6QW9ItmTywU3aONVbopOnVvPyjvtifbV3L%2BPxbViWTlvhQngMSFfKu0OsB%2B4OLzilHIi014pa8Pxcna2%2Fk91GTZmn74znHgw6In2xAY6pgFbbh9rveYmMGp0NoIagdx9ITEqO9MSLAibRqQOAyPvMFtTZNClHcefggNhLKVnzh99xnrgOtl6qWNgFDTZwuyp8EnbToMUHCq9KMh6Z2y%2Be5mCdzfE8U5B4MTqRXTYs%2F7Yk84O8Yw2Kepv6uo51r%2BetWieYvH%2F0EYbmZuXU%2Fe%2Bm6jO2RnevZKkGurv9l89cEtrazJv7VZCldw5JVxXwAIakTwPIvRW&X-Amz-Signature=cf19fe364af575fe80afc61bed1d3a6c12ec1c6acfed5e74ef9666679d4abb32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXOVOUDS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FT45bHJZbSlhJKKkIx5m3IHGNs99AIcO%2FTPmTTJJ9EwIgfwIr%2B4sAtVnjhze2HJc2MMA1C%2BjEdtgli%2BDKJtohc8Eq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDN2SPRwQNaYgnPl8gSrcA6P0%2FR%2Bwu%2FjC%2FZae%2BmQ9cG5b4no1y31GHt8AWTp9p6x9VIUeMtLjNZV8B55RI3rHmUuIgwDbta3RNrnzZrTLl%2FFK6g7mbUD1i9VCX0C0X21z5JfZyKH1mzdsDeS4%2BSvRb3wQosIwqU9SaXMyS06ZKuU3zUaSe0TG6oai8H0f03n%2FtmCMWhnJcmYCU%2FldqNmg8mX7m2rvKtIkbIDvgIb7XH4D7AhcdGRPnipdaeUJvFOAXcumvFZxnXnGXfpkNIxeZwbL4onfTt%2Fe7kfjR55EEw3Izl11T1sVX8o7SgYtOkWpx%2Bcmr9jOQTawLFOfadgsqVxFIsXITwMCFU2WEjmQKXe3UGOkxSAJJMF0R8vc2W2P8s90pySd4GfBypdFKZ9SdwHBlhjLvQfbtxBrHxoEqDKnB0DDiOKIvIhHUV0bdn4CFgeyca5nLgj4L9vRft7moqIvkLbNKuswpulNJaTJVsx3VGow%2FKpZ2lrMEh0SQRSkwAzNAQE07cLC6D3X5SNGAgk1XAi4r3fPgV0y0IBMx%2Fh%2BScnHMtq05v6W29ZEuLOyzX4B6ppMaiJa3SMx%2FafZT9CGqMjWJkkx5Luf2bD%2BKxrICPOddKZ4gTOc%2FSPvieXKjCemO8cAJxcRLRtRMLGJ9sQGOqUBXHhmouOnXpqtF4vwPKAXtvu8xtk20WVpD%2FhlLwUb2i1ld%2Ba1uTzkHeP6kTlLhvu9i4jZXaUjz9N6uzE%2BAtJbfnT62CPAlpuXe%2FQ0JzLYT%2FsmJYBPHBI7Nd1e6EthNx%2Fa%2FwQN7kdeB7DtNbqm%2Fxlf0e%2BxRZyhvzxyD6ho11r%2FSXAwQuWLy7pRmi2yOJRm0tZhmjhQMvD5Pt8cE3o%2B2NfRmiVzlw01&X-Amz-Signature=c320b6a24533f7af466853e874b849d2a0b86475486f7501fac6e2bf18196ba1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXOVOUDS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FT45bHJZbSlhJKKkIx5m3IHGNs99AIcO%2FTPmTTJJ9EwIgfwIr%2B4sAtVnjhze2HJc2MMA1C%2BjEdtgli%2BDKJtohc8Eq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDN2SPRwQNaYgnPl8gSrcA6P0%2FR%2Bwu%2FjC%2FZae%2BmQ9cG5b4no1y31GHt8AWTp9p6x9VIUeMtLjNZV8B55RI3rHmUuIgwDbta3RNrnzZrTLl%2FFK6g7mbUD1i9VCX0C0X21z5JfZyKH1mzdsDeS4%2BSvRb3wQosIwqU9SaXMyS06ZKuU3zUaSe0TG6oai8H0f03n%2FtmCMWhnJcmYCU%2FldqNmg8mX7m2rvKtIkbIDvgIb7XH4D7AhcdGRPnipdaeUJvFOAXcumvFZxnXnGXfpkNIxeZwbL4onfTt%2Fe7kfjR55EEw3Izl11T1sVX8o7SgYtOkWpx%2Bcmr9jOQTawLFOfadgsqVxFIsXITwMCFU2WEjmQKXe3UGOkxSAJJMF0R8vc2W2P8s90pySd4GfBypdFKZ9SdwHBlhjLvQfbtxBrHxoEqDKnB0DDiOKIvIhHUV0bdn4CFgeyca5nLgj4L9vRft7moqIvkLbNKuswpulNJaTJVsx3VGow%2FKpZ2lrMEh0SQRSkwAzNAQE07cLC6D3X5SNGAgk1XAi4r3fPgV0y0IBMx%2Fh%2BScnHMtq05v6W29ZEuLOyzX4B6ppMaiJa3SMx%2FafZT9CGqMjWJkkx5Luf2bD%2BKxrICPOddKZ4gTOc%2FSPvieXKjCemO8cAJxcRLRtRMLGJ9sQGOqUBXHhmouOnXpqtF4vwPKAXtvu8xtk20WVpD%2FhlLwUb2i1ld%2Ba1uTzkHeP6kTlLhvu9i4jZXaUjz9N6uzE%2BAtJbfnT62CPAlpuXe%2FQ0JzLYT%2FsmJYBPHBI7Nd1e6EthNx%2Fa%2FwQN7kdeB7DtNbqm%2Fxlf0e%2BxRZyhvzxyD6ho11r%2FSXAwQuWLy7pRmi2yOJRm0tZhmjhQMvD5Pt8cE3o%2B2NfRmiVzlw01&X-Amz-Signature=6bf462990696d33cb403b3d1c70e408c84089acd8e63415616e5df3c309e0e93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXOVOUDS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FT45bHJZbSlhJKKkIx5m3IHGNs99AIcO%2FTPmTTJJ9EwIgfwIr%2B4sAtVnjhze2HJc2MMA1C%2BjEdtgli%2BDKJtohc8Eq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDN2SPRwQNaYgnPl8gSrcA6P0%2FR%2Bwu%2FjC%2FZae%2BmQ9cG5b4no1y31GHt8AWTp9p6x9VIUeMtLjNZV8B55RI3rHmUuIgwDbta3RNrnzZrTLl%2FFK6g7mbUD1i9VCX0C0X21z5JfZyKH1mzdsDeS4%2BSvRb3wQosIwqU9SaXMyS06ZKuU3zUaSe0TG6oai8H0f03n%2FtmCMWhnJcmYCU%2FldqNmg8mX7m2rvKtIkbIDvgIb7XH4D7AhcdGRPnipdaeUJvFOAXcumvFZxnXnGXfpkNIxeZwbL4onfTt%2Fe7kfjR55EEw3Izl11T1sVX8o7SgYtOkWpx%2Bcmr9jOQTawLFOfadgsqVxFIsXITwMCFU2WEjmQKXe3UGOkxSAJJMF0R8vc2W2P8s90pySd4GfBypdFKZ9SdwHBlhjLvQfbtxBrHxoEqDKnB0DDiOKIvIhHUV0bdn4CFgeyca5nLgj4L9vRft7moqIvkLbNKuswpulNJaTJVsx3VGow%2FKpZ2lrMEh0SQRSkwAzNAQE07cLC6D3X5SNGAgk1XAi4r3fPgV0y0IBMx%2Fh%2BScnHMtq05v6W29ZEuLOyzX4B6ppMaiJa3SMx%2FafZT9CGqMjWJkkx5Luf2bD%2BKxrICPOddKZ4gTOc%2FSPvieXKjCemO8cAJxcRLRtRMLGJ9sQGOqUBXHhmouOnXpqtF4vwPKAXtvu8xtk20WVpD%2FhlLwUb2i1ld%2Ba1uTzkHeP6kTlLhvu9i4jZXaUjz9N6uzE%2BAtJbfnT62CPAlpuXe%2FQ0JzLYT%2FsmJYBPHBI7Nd1e6EthNx%2Fa%2FwQN7kdeB7DtNbqm%2Fxlf0e%2BxRZyhvzxyD6ho11r%2FSXAwQuWLy7pRmi2yOJRm0tZhmjhQMvD5Pt8cE3o%2B2NfRmiVzlw01&X-Amz-Signature=4a5d23e7edd233720a86bfa06bc7a773459bea0cb31a40d30fe6ad237eadd7a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXOVOUDS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FT45bHJZbSlhJKKkIx5m3IHGNs99AIcO%2FTPmTTJJ9EwIgfwIr%2B4sAtVnjhze2HJc2MMA1C%2BjEdtgli%2BDKJtohc8Eq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDN2SPRwQNaYgnPl8gSrcA6P0%2FR%2Bwu%2FjC%2FZae%2BmQ9cG5b4no1y31GHt8AWTp9p6x9VIUeMtLjNZV8B55RI3rHmUuIgwDbta3RNrnzZrTLl%2FFK6g7mbUD1i9VCX0C0X21z5JfZyKH1mzdsDeS4%2BSvRb3wQosIwqU9SaXMyS06ZKuU3zUaSe0TG6oai8H0f03n%2FtmCMWhnJcmYCU%2FldqNmg8mX7m2rvKtIkbIDvgIb7XH4D7AhcdGRPnipdaeUJvFOAXcumvFZxnXnGXfpkNIxeZwbL4onfTt%2Fe7kfjR55EEw3Izl11T1sVX8o7SgYtOkWpx%2Bcmr9jOQTawLFOfadgsqVxFIsXITwMCFU2WEjmQKXe3UGOkxSAJJMF0R8vc2W2P8s90pySd4GfBypdFKZ9SdwHBlhjLvQfbtxBrHxoEqDKnB0DDiOKIvIhHUV0bdn4CFgeyca5nLgj4L9vRft7moqIvkLbNKuswpulNJaTJVsx3VGow%2FKpZ2lrMEh0SQRSkwAzNAQE07cLC6D3X5SNGAgk1XAi4r3fPgV0y0IBMx%2Fh%2BScnHMtq05v6W29ZEuLOyzX4B6ppMaiJa3SMx%2FafZT9CGqMjWJkkx5Luf2bD%2BKxrICPOddKZ4gTOc%2FSPvieXKjCemO8cAJxcRLRtRMLGJ9sQGOqUBXHhmouOnXpqtF4vwPKAXtvu8xtk20WVpD%2FhlLwUb2i1ld%2Ba1uTzkHeP6kTlLhvu9i4jZXaUjz9N6uzE%2BAtJbfnT62CPAlpuXe%2FQ0JzLYT%2FsmJYBPHBI7Nd1e6EthNx%2Fa%2FwQN7kdeB7DtNbqm%2Fxlf0e%2BxRZyhvzxyD6ho11r%2FSXAwQuWLy7pRmi2yOJRm0tZhmjhQMvD5Pt8cE3o%2B2NfRmiVzlw01&X-Amz-Signature=fd6a1a3099cb2ee7ebff0318ab3cb84b0db31546e4bf733778d8f3434c7e22bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXOVOUDS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FT45bHJZbSlhJKKkIx5m3IHGNs99AIcO%2FTPmTTJJ9EwIgfwIr%2B4sAtVnjhze2HJc2MMA1C%2BjEdtgli%2BDKJtohc8Eq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDN2SPRwQNaYgnPl8gSrcA6P0%2FR%2Bwu%2FjC%2FZae%2BmQ9cG5b4no1y31GHt8AWTp9p6x9VIUeMtLjNZV8B55RI3rHmUuIgwDbta3RNrnzZrTLl%2FFK6g7mbUD1i9VCX0C0X21z5JfZyKH1mzdsDeS4%2BSvRb3wQosIwqU9SaXMyS06ZKuU3zUaSe0TG6oai8H0f03n%2FtmCMWhnJcmYCU%2FldqNmg8mX7m2rvKtIkbIDvgIb7XH4D7AhcdGRPnipdaeUJvFOAXcumvFZxnXnGXfpkNIxeZwbL4onfTt%2Fe7kfjR55EEw3Izl11T1sVX8o7SgYtOkWpx%2Bcmr9jOQTawLFOfadgsqVxFIsXITwMCFU2WEjmQKXe3UGOkxSAJJMF0R8vc2W2P8s90pySd4GfBypdFKZ9SdwHBlhjLvQfbtxBrHxoEqDKnB0DDiOKIvIhHUV0bdn4CFgeyca5nLgj4L9vRft7moqIvkLbNKuswpulNJaTJVsx3VGow%2FKpZ2lrMEh0SQRSkwAzNAQE07cLC6D3X5SNGAgk1XAi4r3fPgV0y0IBMx%2Fh%2BScnHMtq05v6W29ZEuLOyzX4B6ppMaiJa3SMx%2FafZT9CGqMjWJkkx5Luf2bD%2BKxrICPOddKZ4gTOc%2FSPvieXKjCemO8cAJxcRLRtRMLGJ9sQGOqUBXHhmouOnXpqtF4vwPKAXtvu8xtk20WVpD%2FhlLwUb2i1ld%2Ba1uTzkHeP6kTlLhvu9i4jZXaUjz9N6uzE%2BAtJbfnT62CPAlpuXe%2FQ0JzLYT%2FsmJYBPHBI7Nd1e6EthNx%2Fa%2FwQN7kdeB7DtNbqm%2Fxlf0e%2BxRZyhvzxyD6ho11r%2FSXAwQuWLy7pRmi2yOJRm0tZhmjhQMvD5Pt8cE3o%2B2NfRmiVzlw01&X-Amz-Signature=e97cb4ad2df0d46c49dd3c6784991a020462e924a6cb1669350551d82ffc6b52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXOVOUDS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FT45bHJZbSlhJKKkIx5m3IHGNs99AIcO%2FTPmTTJJ9EwIgfwIr%2B4sAtVnjhze2HJc2MMA1C%2BjEdtgli%2BDKJtohc8Eq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDN2SPRwQNaYgnPl8gSrcA6P0%2FR%2Bwu%2FjC%2FZae%2BmQ9cG5b4no1y31GHt8AWTp9p6x9VIUeMtLjNZV8B55RI3rHmUuIgwDbta3RNrnzZrTLl%2FFK6g7mbUD1i9VCX0C0X21z5JfZyKH1mzdsDeS4%2BSvRb3wQosIwqU9SaXMyS06ZKuU3zUaSe0TG6oai8H0f03n%2FtmCMWhnJcmYCU%2FldqNmg8mX7m2rvKtIkbIDvgIb7XH4D7AhcdGRPnipdaeUJvFOAXcumvFZxnXnGXfpkNIxeZwbL4onfTt%2Fe7kfjR55EEw3Izl11T1sVX8o7SgYtOkWpx%2Bcmr9jOQTawLFOfadgsqVxFIsXITwMCFU2WEjmQKXe3UGOkxSAJJMF0R8vc2W2P8s90pySd4GfBypdFKZ9SdwHBlhjLvQfbtxBrHxoEqDKnB0DDiOKIvIhHUV0bdn4CFgeyca5nLgj4L9vRft7moqIvkLbNKuswpulNJaTJVsx3VGow%2FKpZ2lrMEh0SQRSkwAzNAQE07cLC6D3X5SNGAgk1XAi4r3fPgV0y0IBMx%2Fh%2BScnHMtq05v6W29ZEuLOyzX4B6ppMaiJa3SMx%2FafZT9CGqMjWJkkx5Luf2bD%2BKxrICPOddKZ4gTOc%2FSPvieXKjCemO8cAJxcRLRtRMLGJ9sQGOqUBXHhmouOnXpqtF4vwPKAXtvu8xtk20WVpD%2FhlLwUb2i1ld%2Ba1uTzkHeP6kTlLhvu9i4jZXaUjz9N6uzE%2BAtJbfnT62CPAlpuXe%2FQ0JzLYT%2FsmJYBPHBI7Nd1e6EthNx%2Fa%2FwQN7kdeB7DtNbqm%2Fxlf0e%2BxRZyhvzxyD6ho11r%2FSXAwQuWLy7pRmi2yOJRm0tZhmjhQMvD5Pt8cE3o%2B2NfRmiVzlw01&X-Amz-Signature=bdaec856d2aa57ff03dc973ec4439456f928c00ab809b9f0251cb101d1ff20b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXOVOUDS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FT45bHJZbSlhJKKkIx5m3IHGNs99AIcO%2FTPmTTJJ9EwIgfwIr%2B4sAtVnjhze2HJc2MMA1C%2BjEdtgli%2BDKJtohc8Eq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDN2SPRwQNaYgnPl8gSrcA6P0%2FR%2Bwu%2FjC%2FZae%2BmQ9cG5b4no1y31GHt8AWTp9p6x9VIUeMtLjNZV8B55RI3rHmUuIgwDbta3RNrnzZrTLl%2FFK6g7mbUD1i9VCX0C0X21z5JfZyKH1mzdsDeS4%2BSvRb3wQosIwqU9SaXMyS06ZKuU3zUaSe0TG6oai8H0f03n%2FtmCMWhnJcmYCU%2FldqNmg8mX7m2rvKtIkbIDvgIb7XH4D7AhcdGRPnipdaeUJvFOAXcumvFZxnXnGXfpkNIxeZwbL4onfTt%2Fe7kfjR55EEw3Izl11T1sVX8o7SgYtOkWpx%2Bcmr9jOQTawLFOfadgsqVxFIsXITwMCFU2WEjmQKXe3UGOkxSAJJMF0R8vc2W2P8s90pySd4GfBypdFKZ9SdwHBlhjLvQfbtxBrHxoEqDKnB0DDiOKIvIhHUV0bdn4CFgeyca5nLgj4L9vRft7moqIvkLbNKuswpulNJaTJVsx3VGow%2FKpZ2lrMEh0SQRSkwAzNAQE07cLC6D3X5SNGAgk1XAi4r3fPgV0y0IBMx%2Fh%2BScnHMtq05v6W29ZEuLOyzX4B6ppMaiJa3SMx%2FafZT9CGqMjWJkkx5Luf2bD%2BKxrICPOddKZ4gTOc%2FSPvieXKjCemO8cAJxcRLRtRMLGJ9sQGOqUBXHhmouOnXpqtF4vwPKAXtvu8xtk20WVpD%2FhlLwUb2i1ld%2Ba1uTzkHeP6kTlLhvu9i4jZXaUjz9N6uzE%2BAtJbfnT62CPAlpuXe%2FQ0JzLYT%2FsmJYBPHBI7Nd1e6EthNx%2Fa%2FwQN7kdeB7DtNbqm%2Fxlf0e%2BxRZyhvzxyD6ho11r%2FSXAwQuWLy7pRmi2yOJRm0tZhmjhQMvD5Pt8cE3o%2B2NfRmiVzlw01&X-Amz-Signature=dbd558f53a5e2419bcc8e69b008616e8cf396c73d541e94506f7e7c587858e5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXOVOUDS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FT45bHJZbSlhJKKkIx5m3IHGNs99AIcO%2FTPmTTJJ9EwIgfwIr%2B4sAtVnjhze2HJc2MMA1C%2BjEdtgli%2BDKJtohc8Eq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDN2SPRwQNaYgnPl8gSrcA6P0%2FR%2Bwu%2FjC%2FZae%2BmQ9cG5b4no1y31GHt8AWTp9p6x9VIUeMtLjNZV8B55RI3rHmUuIgwDbta3RNrnzZrTLl%2FFK6g7mbUD1i9VCX0C0X21z5JfZyKH1mzdsDeS4%2BSvRb3wQosIwqU9SaXMyS06ZKuU3zUaSe0TG6oai8H0f03n%2FtmCMWhnJcmYCU%2FldqNmg8mX7m2rvKtIkbIDvgIb7XH4D7AhcdGRPnipdaeUJvFOAXcumvFZxnXnGXfpkNIxeZwbL4onfTt%2Fe7kfjR55EEw3Izl11T1sVX8o7SgYtOkWpx%2Bcmr9jOQTawLFOfadgsqVxFIsXITwMCFU2WEjmQKXe3UGOkxSAJJMF0R8vc2W2P8s90pySd4GfBypdFKZ9SdwHBlhjLvQfbtxBrHxoEqDKnB0DDiOKIvIhHUV0bdn4CFgeyca5nLgj4L9vRft7moqIvkLbNKuswpulNJaTJVsx3VGow%2FKpZ2lrMEh0SQRSkwAzNAQE07cLC6D3X5SNGAgk1XAi4r3fPgV0y0IBMx%2Fh%2BScnHMtq05v6W29ZEuLOyzX4B6ppMaiJa3SMx%2FafZT9CGqMjWJkkx5Luf2bD%2BKxrICPOddKZ4gTOc%2FSPvieXKjCemO8cAJxcRLRtRMLGJ9sQGOqUBXHhmouOnXpqtF4vwPKAXtvu8xtk20WVpD%2FhlLwUb2i1ld%2Ba1uTzkHeP6kTlLhvu9i4jZXaUjz9N6uzE%2BAtJbfnT62CPAlpuXe%2FQ0JzLYT%2FsmJYBPHBI7Nd1e6EthNx%2Fa%2FwQN7kdeB7DtNbqm%2Fxlf0e%2BxRZyhvzxyD6ho11r%2FSXAwQuWLy7pRmi2yOJRm0tZhmjhQMvD5Pt8cE3o%2B2NfRmiVzlw01&X-Amz-Signature=f13496230f0b82d67337bf7052713b5c8a868acfde79808e1b7b5d88f3b115b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXOVOUDS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FT45bHJZbSlhJKKkIx5m3IHGNs99AIcO%2FTPmTTJJ9EwIgfwIr%2B4sAtVnjhze2HJc2MMA1C%2BjEdtgli%2BDKJtohc8Eq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDN2SPRwQNaYgnPl8gSrcA6P0%2FR%2Bwu%2FjC%2FZae%2BmQ9cG5b4no1y31GHt8AWTp9p6x9VIUeMtLjNZV8B55RI3rHmUuIgwDbta3RNrnzZrTLl%2FFK6g7mbUD1i9VCX0C0X21z5JfZyKH1mzdsDeS4%2BSvRb3wQosIwqU9SaXMyS06ZKuU3zUaSe0TG6oai8H0f03n%2FtmCMWhnJcmYCU%2FldqNmg8mX7m2rvKtIkbIDvgIb7XH4D7AhcdGRPnipdaeUJvFOAXcumvFZxnXnGXfpkNIxeZwbL4onfTt%2Fe7kfjR55EEw3Izl11T1sVX8o7SgYtOkWpx%2Bcmr9jOQTawLFOfadgsqVxFIsXITwMCFU2WEjmQKXe3UGOkxSAJJMF0R8vc2W2P8s90pySd4GfBypdFKZ9SdwHBlhjLvQfbtxBrHxoEqDKnB0DDiOKIvIhHUV0bdn4CFgeyca5nLgj4L9vRft7moqIvkLbNKuswpulNJaTJVsx3VGow%2FKpZ2lrMEh0SQRSkwAzNAQE07cLC6D3X5SNGAgk1XAi4r3fPgV0y0IBMx%2Fh%2BScnHMtq05v6W29ZEuLOyzX4B6ppMaiJa3SMx%2FafZT9CGqMjWJkkx5Luf2bD%2BKxrICPOddKZ4gTOc%2FSPvieXKjCemO8cAJxcRLRtRMLGJ9sQGOqUBXHhmouOnXpqtF4vwPKAXtvu8xtk20WVpD%2FhlLwUb2i1ld%2Ba1uTzkHeP6kTlLhvu9i4jZXaUjz9N6uzE%2BAtJbfnT62CPAlpuXe%2FQ0JzLYT%2FsmJYBPHBI7Nd1e6EthNx%2Fa%2FwQN7kdeB7DtNbqm%2Fxlf0e%2BxRZyhvzxyD6ho11r%2FSXAwQuWLy7pRmi2yOJRm0tZhmjhQMvD5Pt8cE3o%2B2NfRmiVzlw01&X-Amz-Signature=81362d415bd274eb0ded630710f2a6b505121ddd4dddb87fb4c981f4c67beab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXOVOUDS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FT45bHJZbSlhJKKkIx5m3IHGNs99AIcO%2FTPmTTJJ9EwIgfwIr%2B4sAtVnjhze2HJc2MMA1C%2BjEdtgli%2BDKJtohc8Eq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDN2SPRwQNaYgnPl8gSrcA6P0%2FR%2Bwu%2FjC%2FZae%2BmQ9cG5b4no1y31GHt8AWTp9p6x9VIUeMtLjNZV8B55RI3rHmUuIgwDbta3RNrnzZrTLl%2FFK6g7mbUD1i9VCX0C0X21z5JfZyKH1mzdsDeS4%2BSvRb3wQosIwqU9SaXMyS06ZKuU3zUaSe0TG6oai8H0f03n%2FtmCMWhnJcmYCU%2FldqNmg8mX7m2rvKtIkbIDvgIb7XH4D7AhcdGRPnipdaeUJvFOAXcumvFZxnXnGXfpkNIxeZwbL4onfTt%2Fe7kfjR55EEw3Izl11T1sVX8o7SgYtOkWpx%2Bcmr9jOQTawLFOfadgsqVxFIsXITwMCFU2WEjmQKXe3UGOkxSAJJMF0R8vc2W2P8s90pySd4GfBypdFKZ9SdwHBlhjLvQfbtxBrHxoEqDKnB0DDiOKIvIhHUV0bdn4CFgeyca5nLgj4L9vRft7moqIvkLbNKuswpulNJaTJVsx3VGow%2FKpZ2lrMEh0SQRSkwAzNAQE07cLC6D3X5SNGAgk1XAi4r3fPgV0y0IBMx%2Fh%2BScnHMtq05v6W29ZEuLOyzX4B6ppMaiJa3SMx%2FafZT9CGqMjWJkkx5Luf2bD%2BKxrICPOddKZ4gTOc%2FSPvieXKjCemO8cAJxcRLRtRMLGJ9sQGOqUBXHhmouOnXpqtF4vwPKAXtvu8xtk20WVpD%2FhlLwUb2i1ld%2Ba1uTzkHeP6kTlLhvu9i4jZXaUjz9N6uzE%2BAtJbfnT62CPAlpuXe%2FQ0JzLYT%2FsmJYBPHBI7Nd1e6EthNx%2Fa%2FwQN7kdeB7DtNbqm%2Fxlf0e%2BxRZyhvzxyD6ho11r%2FSXAwQuWLy7pRmi2yOJRm0tZhmjhQMvD5Pt8cE3o%2B2NfRmiVzlw01&X-Amz-Signature=fd6a1a3099cb2ee7ebff0318ab3cb84b0db31546e4bf733778d8f3434c7e22bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
