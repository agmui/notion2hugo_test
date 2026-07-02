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
  <summary>{{< markdownify >}}What is Lidar?{{< /markdownify >}}</summary>
  
Lidar (light detection and ranging) is using lases to determine how far objects are.

TODO

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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466566QRYW6%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIC8u3GKE1lFsnfCgPmf%2BqazSEKYzKqkaehvsVbCV70n4AiAc5ovQ%2FrftsBxscCPIKFK630Ig3jVKYw1GA9RbHhIyYSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5PBszcTnwz3X1%2B%2B6KtwD%2BXAQtGTeEjZMzNJEPxaXqcJIF7n3yzR1%2FYxaTnt1MckBs9tEhv90qWyh1wbX4pq6zDWPZaDNUFKUqrwPeZ3sbtVxqdNgu5GRsAfzR6Np0o%2FAg9tB74EDpdJdZUHWpkVqsSg%2FUN8Y8Kbryh6QPkYqBw4TmdIRD7d1gTPsmL1aVmyR7s7voHq8s4rqz8jYZ4dKQiR0vRz44tZYYs6QzsM72PPjTxv%2BBnyRxSzV1UsHnyGtylu0MLtgUTVO5U%2BJdNOQEPRYJCyOorBck0%2F1QAi6fVxObbOcUaJaB%2B4BHlGaoZKTRZOWl96SnDgNGmUiw7OTism7V9ymvkx8Q2n6i3LPKTQ2Y37m6GMJsG7iDcowd9%2BD%2BmhLyQWMhmzzuNnag12t05taubUof5b69HqFUretej59Kh828dahUFTCBjaI%2Feppr%2Fds349H3OANBwYA5jjj9JicAOX9I1FyNBwzJeK66PvcOCAqhVIAoig9jSeswvPerUiKaM5w0AltZf94z9DKRCAnZM%2F9X94gm2mB%2BsRqXAbnwiVIobG7fdL7qkpydRsgjtvitqP0JEKYPjdTFMlzEXAOMe8D85Yu7OLbW2f%2F83Y5VhmY5CSxRjBTq0hlAxLaD4dpVPjD6yYsSfAwyaSX0gY6pgHRHSknA6hSeDJu8u%2FkZlfQtQX6lPRTbG3tEO8WiqDTkJNms7cgQzpO46LHQcRzaOjHKlC0rN3JDg3eXo4991gra6rDPwwnDzbZTtWdQeH%2BQgd5pWAma49DsSgttQioV68S0DXcBjfB1bKgLn%2B3tSkUOdIEVW1aS2AZUUe1NrQtjr%2BvHM65ihfKhuEebWVQpsAyfTtg0EvFTQpjfswBbi4wzZcovtJU&X-Amz-Signature=cad936f3b6548c4b91cc462507bd9ada3367907184020a7d03e6982d9609fb79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNXTDPHY%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIH357y1jGREhZetFC32q%2BDMQpamutgLDdqf217b9NezGAiAOekTp2naGWSDdobtraNEbwhpBxb%2FDstfeij2m5aanmCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrfO4P%2F%2BSTUuqdAQOKtwDRjuVGVd%2FOX5L7Jsm0VfJXlvb9xXVYNUdBebk8C%2Bet8O%2F66FmdDhgdk2nxuDr7oXuQKzT5zVXgnZ5BdX%2F59tdQZnhNYa%2FtPe2Ajt1G0AoFkOYp%2BkarJPk25mFtnf14Qd2wtyiVfPbGou7YBoj3ZxS1qYq8K9bE2mpmGgVvNLW%2F6MGJJlQnVJvK9zI%2FE1DLhpZgfqP1WADOcUbliAeyl12ksmwvqqqQq9J1RT1vAct4c8m8j5DtrTJJ7C3WyETDr11zLqpNM96ZbC%2BA8ZRILxyYN0%2B5sfOwGVdGC03miuaf5vHa1slqZiIBoiRTBV3cOt0cSD3bNM38gpa7I1QnFoiSMQshW5pNT5iCc04sgdEOpLsU1LXrROo79kOz6%2BH7VfEYflCwz3g%2F4bo0lhkNbrnXgOEa3PsXkWEtXqvTkYOUqCTr65lL%2B8U43bwFcIkRWTl%2FnrpE6mLO7fiG9G4CVc9JWKvIh6HPmSuBl57JTSZBkEua3czW%2BcPV2jIOJ1I3qamRY5V493NeQD7AAkGODyOIcysFQlpJirb7HIWY2zhhtWuRXHg6k39IN700nNL4aL9WuqWfN5VBNiA3l%2BduP8DoL64dtc7rCMpdKoqhghWPT46CmacGjfXGwstlVowgqWX0gY6pgHaplBFqxyVcjYLiQSmKmeo9t4S%2BLpzxdX96VvjH3tW%2Bbe6kQYFWQ%2FEeBZDa9mUEEGlk0P2s0j2%2FRZzGxI7V20BmKoI1%2FIadxkujpJXnolmrKK%2BBl9pV51mgxAxqNF0RiLPq20v%2BXNddN%2BcBWnm5MVE0rLsV2Bd9YdwftmO7dl0VEAVvoUfVCK9HUq1VLklmbOcyVu%2BWsHeQhK9HpnVCAjuDLCiTeCW&X-Amz-Signature=e4e5eb24814cbff15026bbf3f81593c2c31e475398a992a259b9962d85f913b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNXTDPHY%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIH357y1jGREhZetFC32q%2BDMQpamutgLDdqf217b9NezGAiAOekTp2naGWSDdobtraNEbwhpBxb%2FDstfeij2m5aanmCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrfO4P%2F%2BSTUuqdAQOKtwDRjuVGVd%2FOX5L7Jsm0VfJXlvb9xXVYNUdBebk8C%2Bet8O%2F66FmdDhgdk2nxuDr7oXuQKzT5zVXgnZ5BdX%2F59tdQZnhNYa%2FtPe2Ajt1G0AoFkOYp%2BkarJPk25mFtnf14Qd2wtyiVfPbGou7YBoj3ZxS1qYq8K9bE2mpmGgVvNLW%2F6MGJJlQnVJvK9zI%2FE1DLhpZgfqP1WADOcUbliAeyl12ksmwvqqqQq9J1RT1vAct4c8m8j5DtrTJJ7C3WyETDr11zLqpNM96ZbC%2BA8ZRILxyYN0%2B5sfOwGVdGC03miuaf5vHa1slqZiIBoiRTBV3cOt0cSD3bNM38gpa7I1QnFoiSMQshW5pNT5iCc04sgdEOpLsU1LXrROo79kOz6%2BH7VfEYflCwz3g%2F4bo0lhkNbrnXgOEa3PsXkWEtXqvTkYOUqCTr65lL%2B8U43bwFcIkRWTl%2FnrpE6mLO7fiG9G4CVc9JWKvIh6HPmSuBl57JTSZBkEua3czW%2BcPV2jIOJ1I3qamRY5V493NeQD7AAkGODyOIcysFQlpJirb7HIWY2zhhtWuRXHg6k39IN700nNL4aL9WuqWfN5VBNiA3l%2BduP8DoL64dtc7rCMpdKoqhghWPT46CmacGjfXGwstlVowgqWX0gY6pgHaplBFqxyVcjYLiQSmKmeo9t4S%2BLpzxdX96VvjH3tW%2Bbe6kQYFWQ%2FEeBZDa9mUEEGlk0P2s0j2%2FRZzGxI7V20BmKoI1%2FIadxkujpJXnolmrKK%2BBl9pV51mgxAxqNF0RiLPq20v%2BXNddN%2BcBWnm5MVE0rLsV2Bd9YdwftmO7dl0VEAVvoUfVCK9HUq1VLklmbOcyVu%2BWsHeQhK9HpnVCAjuDLCiTeCW&X-Amz-Signature=560689709c0d7b5c5624013bdb79518845583daec8ec95a80cdae6fc1d2c2fcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNXTDPHY%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIH357y1jGREhZetFC32q%2BDMQpamutgLDdqf217b9NezGAiAOekTp2naGWSDdobtraNEbwhpBxb%2FDstfeij2m5aanmCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrfO4P%2F%2BSTUuqdAQOKtwDRjuVGVd%2FOX5L7Jsm0VfJXlvb9xXVYNUdBebk8C%2Bet8O%2F66FmdDhgdk2nxuDr7oXuQKzT5zVXgnZ5BdX%2F59tdQZnhNYa%2FtPe2Ajt1G0AoFkOYp%2BkarJPk25mFtnf14Qd2wtyiVfPbGou7YBoj3ZxS1qYq8K9bE2mpmGgVvNLW%2F6MGJJlQnVJvK9zI%2FE1DLhpZgfqP1WADOcUbliAeyl12ksmwvqqqQq9J1RT1vAct4c8m8j5DtrTJJ7C3WyETDr11zLqpNM96ZbC%2BA8ZRILxyYN0%2B5sfOwGVdGC03miuaf5vHa1slqZiIBoiRTBV3cOt0cSD3bNM38gpa7I1QnFoiSMQshW5pNT5iCc04sgdEOpLsU1LXrROo79kOz6%2BH7VfEYflCwz3g%2F4bo0lhkNbrnXgOEa3PsXkWEtXqvTkYOUqCTr65lL%2B8U43bwFcIkRWTl%2FnrpE6mLO7fiG9G4CVc9JWKvIh6HPmSuBl57JTSZBkEua3czW%2BcPV2jIOJ1I3qamRY5V493NeQD7AAkGODyOIcysFQlpJirb7HIWY2zhhtWuRXHg6k39IN700nNL4aL9WuqWfN5VBNiA3l%2BduP8DoL64dtc7rCMpdKoqhghWPT46CmacGjfXGwstlVowgqWX0gY6pgHaplBFqxyVcjYLiQSmKmeo9t4S%2BLpzxdX96VvjH3tW%2Bbe6kQYFWQ%2FEeBZDa9mUEEGlk0P2s0j2%2FRZzGxI7V20BmKoI1%2FIadxkujpJXnolmrKK%2BBl9pV51mgxAxqNF0RiLPq20v%2BXNddN%2BcBWnm5MVE0rLsV2Bd9YdwftmO7dl0VEAVvoUfVCK9HUq1VLklmbOcyVu%2BWsHeQhK9HpnVCAjuDLCiTeCW&X-Amz-Signature=b71e22bfd38f77b7167666ace82b67087b244542ffcffe331e773e6743ebad2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNXTDPHY%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIH357y1jGREhZetFC32q%2BDMQpamutgLDdqf217b9NezGAiAOekTp2naGWSDdobtraNEbwhpBxb%2FDstfeij2m5aanmCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrfO4P%2F%2BSTUuqdAQOKtwDRjuVGVd%2FOX5L7Jsm0VfJXlvb9xXVYNUdBebk8C%2Bet8O%2F66FmdDhgdk2nxuDr7oXuQKzT5zVXgnZ5BdX%2F59tdQZnhNYa%2FtPe2Ajt1G0AoFkOYp%2BkarJPk25mFtnf14Qd2wtyiVfPbGou7YBoj3ZxS1qYq8K9bE2mpmGgVvNLW%2F6MGJJlQnVJvK9zI%2FE1DLhpZgfqP1WADOcUbliAeyl12ksmwvqqqQq9J1RT1vAct4c8m8j5DtrTJJ7C3WyETDr11zLqpNM96ZbC%2BA8ZRILxyYN0%2B5sfOwGVdGC03miuaf5vHa1slqZiIBoiRTBV3cOt0cSD3bNM38gpa7I1QnFoiSMQshW5pNT5iCc04sgdEOpLsU1LXrROo79kOz6%2BH7VfEYflCwz3g%2F4bo0lhkNbrnXgOEa3PsXkWEtXqvTkYOUqCTr65lL%2B8U43bwFcIkRWTl%2FnrpE6mLO7fiG9G4CVc9JWKvIh6HPmSuBl57JTSZBkEua3czW%2BcPV2jIOJ1I3qamRY5V493NeQD7AAkGODyOIcysFQlpJirb7HIWY2zhhtWuRXHg6k39IN700nNL4aL9WuqWfN5VBNiA3l%2BduP8DoL64dtc7rCMpdKoqhghWPT46CmacGjfXGwstlVowgqWX0gY6pgHaplBFqxyVcjYLiQSmKmeo9t4S%2BLpzxdX96VvjH3tW%2Bbe6kQYFWQ%2FEeBZDa9mUEEGlk0P2s0j2%2FRZzGxI7V20BmKoI1%2FIadxkujpJXnolmrKK%2BBl9pV51mgxAxqNF0RiLPq20v%2BXNddN%2BcBWnm5MVE0rLsV2Bd9YdwftmO7dl0VEAVvoUfVCK9HUq1VLklmbOcyVu%2BWsHeQhK9HpnVCAjuDLCiTeCW&X-Amz-Signature=bfc3993b6b76fe9b2ca23b0bb8f1f34e603107204020a049c7117f539d377b49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNXTDPHY%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIH357y1jGREhZetFC32q%2BDMQpamutgLDdqf217b9NezGAiAOekTp2naGWSDdobtraNEbwhpBxb%2FDstfeij2m5aanmCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrfO4P%2F%2BSTUuqdAQOKtwDRjuVGVd%2FOX5L7Jsm0VfJXlvb9xXVYNUdBebk8C%2Bet8O%2F66FmdDhgdk2nxuDr7oXuQKzT5zVXgnZ5BdX%2F59tdQZnhNYa%2FtPe2Ajt1G0AoFkOYp%2BkarJPk25mFtnf14Qd2wtyiVfPbGou7YBoj3ZxS1qYq8K9bE2mpmGgVvNLW%2F6MGJJlQnVJvK9zI%2FE1DLhpZgfqP1WADOcUbliAeyl12ksmwvqqqQq9J1RT1vAct4c8m8j5DtrTJJ7C3WyETDr11zLqpNM96ZbC%2BA8ZRILxyYN0%2B5sfOwGVdGC03miuaf5vHa1slqZiIBoiRTBV3cOt0cSD3bNM38gpa7I1QnFoiSMQshW5pNT5iCc04sgdEOpLsU1LXrROo79kOz6%2BH7VfEYflCwz3g%2F4bo0lhkNbrnXgOEa3PsXkWEtXqvTkYOUqCTr65lL%2B8U43bwFcIkRWTl%2FnrpE6mLO7fiG9G4CVc9JWKvIh6HPmSuBl57JTSZBkEua3czW%2BcPV2jIOJ1I3qamRY5V493NeQD7AAkGODyOIcysFQlpJirb7HIWY2zhhtWuRXHg6k39IN700nNL4aL9WuqWfN5VBNiA3l%2BduP8DoL64dtc7rCMpdKoqhghWPT46CmacGjfXGwstlVowgqWX0gY6pgHaplBFqxyVcjYLiQSmKmeo9t4S%2BLpzxdX96VvjH3tW%2Bbe6kQYFWQ%2FEeBZDa9mUEEGlk0P2s0j2%2FRZzGxI7V20BmKoI1%2FIadxkujpJXnolmrKK%2BBl9pV51mgxAxqNF0RiLPq20v%2BXNddN%2BcBWnm5MVE0rLsV2Bd9YdwftmO7dl0VEAVvoUfVCK9HUq1VLklmbOcyVu%2BWsHeQhK9HpnVCAjuDLCiTeCW&X-Amz-Signature=dfb16767c4e68229f9f0d010e5bc10d5a291395bd955ca60dd186a427efe7106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNXTDPHY%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIH357y1jGREhZetFC32q%2BDMQpamutgLDdqf217b9NezGAiAOekTp2naGWSDdobtraNEbwhpBxb%2FDstfeij2m5aanmCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrfO4P%2F%2BSTUuqdAQOKtwDRjuVGVd%2FOX5L7Jsm0VfJXlvb9xXVYNUdBebk8C%2Bet8O%2F66FmdDhgdk2nxuDr7oXuQKzT5zVXgnZ5BdX%2F59tdQZnhNYa%2FtPe2Ajt1G0AoFkOYp%2BkarJPk25mFtnf14Qd2wtyiVfPbGou7YBoj3ZxS1qYq8K9bE2mpmGgVvNLW%2F6MGJJlQnVJvK9zI%2FE1DLhpZgfqP1WADOcUbliAeyl12ksmwvqqqQq9J1RT1vAct4c8m8j5DtrTJJ7C3WyETDr11zLqpNM96ZbC%2BA8ZRILxyYN0%2B5sfOwGVdGC03miuaf5vHa1slqZiIBoiRTBV3cOt0cSD3bNM38gpa7I1QnFoiSMQshW5pNT5iCc04sgdEOpLsU1LXrROo79kOz6%2BH7VfEYflCwz3g%2F4bo0lhkNbrnXgOEa3PsXkWEtXqvTkYOUqCTr65lL%2B8U43bwFcIkRWTl%2FnrpE6mLO7fiG9G4CVc9JWKvIh6HPmSuBl57JTSZBkEua3czW%2BcPV2jIOJ1I3qamRY5V493NeQD7AAkGODyOIcysFQlpJirb7HIWY2zhhtWuRXHg6k39IN700nNL4aL9WuqWfN5VBNiA3l%2BduP8DoL64dtc7rCMpdKoqhghWPT46CmacGjfXGwstlVowgqWX0gY6pgHaplBFqxyVcjYLiQSmKmeo9t4S%2BLpzxdX96VvjH3tW%2Bbe6kQYFWQ%2FEeBZDa9mUEEGlk0P2s0j2%2FRZzGxI7V20BmKoI1%2FIadxkujpJXnolmrKK%2BBl9pV51mgxAxqNF0RiLPq20v%2BXNddN%2BcBWnm5MVE0rLsV2Bd9YdwftmO7dl0VEAVvoUfVCK9HUq1VLklmbOcyVu%2BWsHeQhK9HpnVCAjuDLCiTeCW&X-Amz-Signature=5a2cd6850c365c1137f8920beaf3938da915d09febfb047992386b37133099bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNXTDPHY%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIH357y1jGREhZetFC32q%2BDMQpamutgLDdqf217b9NezGAiAOekTp2naGWSDdobtraNEbwhpBxb%2FDstfeij2m5aanmCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrfO4P%2F%2BSTUuqdAQOKtwDRjuVGVd%2FOX5L7Jsm0VfJXlvb9xXVYNUdBebk8C%2Bet8O%2F66FmdDhgdk2nxuDr7oXuQKzT5zVXgnZ5BdX%2F59tdQZnhNYa%2FtPe2Ajt1G0AoFkOYp%2BkarJPk25mFtnf14Qd2wtyiVfPbGou7YBoj3ZxS1qYq8K9bE2mpmGgVvNLW%2F6MGJJlQnVJvK9zI%2FE1DLhpZgfqP1WADOcUbliAeyl12ksmwvqqqQq9J1RT1vAct4c8m8j5DtrTJJ7C3WyETDr11zLqpNM96ZbC%2BA8ZRILxyYN0%2B5sfOwGVdGC03miuaf5vHa1slqZiIBoiRTBV3cOt0cSD3bNM38gpa7I1QnFoiSMQshW5pNT5iCc04sgdEOpLsU1LXrROo79kOz6%2BH7VfEYflCwz3g%2F4bo0lhkNbrnXgOEa3PsXkWEtXqvTkYOUqCTr65lL%2B8U43bwFcIkRWTl%2FnrpE6mLO7fiG9G4CVc9JWKvIh6HPmSuBl57JTSZBkEua3czW%2BcPV2jIOJ1I3qamRY5V493NeQD7AAkGODyOIcysFQlpJirb7HIWY2zhhtWuRXHg6k39IN700nNL4aL9WuqWfN5VBNiA3l%2BduP8DoL64dtc7rCMpdKoqhghWPT46CmacGjfXGwstlVowgqWX0gY6pgHaplBFqxyVcjYLiQSmKmeo9t4S%2BLpzxdX96VvjH3tW%2Bbe6kQYFWQ%2FEeBZDa9mUEEGlk0P2s0j2%2FRZzGxI7V20BmKoI1%2FIadxkujpJXnolmrKK%2BBl9pV51mgxAxqNF0RiLPq20v%2BXNddN%2BcBWnm5MVE0rLsV2Bd9YdwftmO7dl0VEAVvoUfVCK9HUq1VLklmbOcyVu%2BWsHeQhK9HpnVCAjuDLCiTeCW&X-Amz-Signature=11f593930e374dfd9b0999eba3a032494c0d80405b58071066d16d5ca8c362e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNXTDPHY%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIH357y1jGREhZetFC32q%2BDMQpamutgLDdqf217b9NezGAiAOekTp2naGWSDdobtraNEbwhpBxb%2FDstfeij2m5aanmCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrfO4P%2F%2BSTUuqdAQOKtwDRjuVGVd%2FOX5L7Jsm0VfJXlvb9xXVYNUdBebk8C%2Bet8O%2F66FmdDhgdk2nxuDr7oXuQKzT5zVXgnZ5BdX%2F59tdQZnhNYa%2FtPe2Ajt1G0AoFkOYp%2BkarJPk25mFtnf14Qd2wtyiVfPbGou7YBoj3ZxS1qYq8K9bE2mpmGgVvNLW%2F6MGJJlQnVJvK9zI%2FE1DLhpZgfqP1WADOcUbliAeyl12ksmwvqqqQq9J1RT1vAct4c8m8j5DtrTJJ7C3WyETDr11zLqpNM96ZbC%2BA8ZRILxyYN0%2B5sfOwGVdGC03miuaf5vHa1slqZiIBoiRTBV3cOt0cSD3bNM38gpa7I1QnFoiSMQshW5pNT5iCc04sgdEOpLsU1LXrROo79kOz6%2BH7VfEYflCwz3g%2F4bo0lhkNbrnXgOEa3PsXkWEtXqvTkYOUqCTr65lL%2B8U43bwFcIkRWTl%2FnrpE6mLO7fiG9G4CVc9JWKvIh6HPmSuBl57JTSZBkEua3czW%2BcPV2jIOJ1I3qamRY5V493NeQD7AAkGODyOIcysFQlpJirb7HIWY2zhhtWuRXHg6k39IN700nNL4aL9WuqWfN5VBNiA3l%2BduP8DoL64dtc7rCMpdKoqhghWPT46CmacGjfXGwstlVowgqWX0gY6pgHaplBFqxyVcjYLiQSmKmeo9t4S%2BLpzxdX96VvjH3tW%2Bbe6kQYFWQ%2FEeBZDa9mUEEGlk0P2s0j2%2FRZzGxI7V20BmKoI1%2FIadxkujpJXnolmrKK%2BBl9pV51mgxAxqNF0RiLPq20v%2BXNddN%2BcBWnm5MVE0rLsV2Bd9YdwftmO7dl0VEAVvoUfVCK9HUq1VLklmbOcyVu%2BWsHeQhK9HpnVCAjuDLCiTeCW&X-Amz-Signature=31bdb072630e7951b256fcb514371b81b4836e9a3fde92757781abd36efb8c24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Params:

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

#### description:

publishes the `/scan` topic for RPLIDAR products

[official docs link](https://github.com/Slamtec/rplidar_ros/tree/ros2#slamtec-lidar-ros2-package)

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

```python "5-5","10-13"

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
  <summary>{{< markdownify >}}Finding Lidar USB port:{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNXTDPHY%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIH357y1jGREhZetFC32q%2BDMQpamutgLDdqf217b9NezGAiAOekTp2naGWSDdobtraNEbwhpBxb%2FDstfeij2m5aanmCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrfO4P%2F%2BSTUuqdAQOKtwDRjuVGVd%2FOX5L7Jsm0VfJXlvb9xXVYNUdBebk8C%2Bet8O%2F66FmdDhgdk2nxuDr7oXuQKzT5zVXgnZ5BdX%2F59tdQZnhNYa%2FtPe2Ajt1G0AoFkOYp%2BkarJPk25mFtnf14Qd2wtyiVfPbGou7YBoj3ZxS1qYq8K9bE2mpmGgVvNLW%2F6MGJJlQnVJvK9zI%2FE1DLhpZgfqP1WADOcUbliAeyl12ksmwvqqqQq9J1RT1vAct4c8m8j5DtrTJJ7C3WyETDr11zLqpNM96ZbC%2BA8ZRILxyYN0%2B5sfOwGVdGC03miuaf5vHa1slqZiIBoiRTBV3cOt0cSD3bNM38gpa7I1QnFoiSMQshW5pNT5iCc04sgdEOpLsU1LXrROo79kOz6%2BH7VfEYflCwz3g%2F4bo0lhkNbrnXgOEa3PsXkWEtXqvTkYOUqCTr65lL%2B8U43bwFcIkRWTl%2FnrpE6mLO7fiG9G4CVc9JWKvIh6HPmSuBl57JTSZBkEua3czW%2BcPV2jIOJ1I3qamRY5V493NeQD7AAkGODyOIcysFQlpJirb7HIWY2zhhtWuRXHg6k39IN700nNL4aL9WuqWfN5VBNiA3l%2BduP8DoL64dtc7rCMpdKoqhghWPT46CmacGjfXGwstlVowgqWX0gY6pgHaplBFqxyVcjYLiQSmKmeo9t4S%2BLpzxdX96VvjH3tW%2Bbe6kQYFWQ%2FEeBZDa9mUEEGlk0P2s0j2%2FRZzGxI7V20BmKoI1%2FIadxkujpJXnolmrKK%2BBl9pV51mgxAxqNF0RiLPq20v%2BXNddN%2BcBWnm5MVE0rLsV2Bd9YdwftmO7dl0VEAVvoUfVCK9HUq1VLklmbOcyVu%2BWsHeQhK9HpnVCAjuDLCiTeCW&X-Amz-Signature=650322440d96fc4a9fc5ef18cbae5eb7d5c9111cec4fc820ada6621a40492cac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNXTDPHY%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIH357y1jGREhZetFC32q%2BDMQpamutgLDdqf217b9NezGAiAOekTp2naGWSDdobtraNEbwhpBxb%2FDstfeij2m5aanmCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrfO4P%2F%2BSTUuqdAQOKtwDRjuVGVd%2FOX5L7Jsm0VfJXlvb9xXVYNUdBebk8C%2Bet8O%2F66FmdDhgdk2nxuDr7oXuQKzT5zVXgnZ5BdX%2F59tdQZnhNYa%2FtPe2Ajt1G0AoFkOYp%2BkarJPk25mFtnf14Qd2wtyiVfPbGou7YBoj3ZxS1qYq8K9bE2mpmGgVvNLW%2F6MGJJlQnVJvK9zI%2FE1DLhpZgfqP1WADOcUbliAeyl12ksmwvqqqQq9J1RT1vAct4c8m8j5DtrTJJ7C3WyETDr11zLqpNM96ZbC%2BA8ZRILxyYN0%2B5sfOwGVdGC03miuaf5vHa1slqZiIBoiRTBV3cOt0cSD3bNM38gpa7I1QnFoiSMQshW5pNT5iCc04sgdEOpLsU1LXrROo79kOz6%2BH7VfEYflCwz3g%2F4bo0lhkNbrnXgOEa3PsXkWEtXqvTkYOUqCTr65lL%2B8U43bwFcIkRWTl%2FnrpE6mLO7fiG9G4CVc9JWKvIh6HPmSuBl57JTSZBkEua3czW%2BcPV2jIOJ1I3qamRY5V493NeQD7AAkGODyOIcysFQlpJirb7HIWY2zhhtWuRXHg6k39IN700nNL4aL9WuqWfN5VBNiA3l%2BduP8DoL64dtc7rCMpdKoqhghWPT46CmacGjfXGwstlVowgqWX0gY6pgHaplBFqxyVcjYLiQSmKmeo9t4S%2BLpzxdX96VvjH3tW%2Bbe6kQYFWQ%2FEeBZDa9mUEEGlk0P2s0j2%2FRZzGxI7V20BmKoI1%2FIadxkujpJXnolmrKK%2BBl9pV51mgxAxqNF0RiLPq20v%2BXNddN%2BcBWnm5MVE0rLsV2Bd9YdwftmO7dl0VEAVvoUfVCK9HUq1VLklmbOcyVu%2BWsHeQhK9HpnVCAjuDLCiTeCW&X-Amz-Signature=bfc3993b6b76fe9b2ca23b0bb8f1f34e603107204020a049c7117f539d377b49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Adding RPLidar to launch

idk tell them to look at the launch file to see which exact prams to put in

```python "5-14","30-30"

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
