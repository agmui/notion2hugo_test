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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U52SUNXN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDYpSaK4FYq4xehSUutap2PYPWX7zV%2FHCcDvE%2BnueSVJAiEA48CcA%2FDjwIcQhF52nVJmlGuLXHonOdJqMar52a72BqAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAAgMvdi34QLYMa5FSrcA7YNHTNmFyHg%2F1M%2BZkCIjkdOmvnxqwhKHnob%2FE0adsB7opWqEIf6ze3jp0PtneVrCMtKuRAndCG%2BvrxihWefpV0ymGAafjWrznDu8YYMnUwMD1sub390faCEd36E7UMDFMjqfASo3D7hZWb%2Bxe4e%2BKUjGzmOo6i0VbKI8RnW9MPzzwB10Or9rDXqDPuHfVbYZ5mXP7pX6EOjlV1zvxrJ14LYjGBw%2BN7C%2FohwxJQrmX4Urn4zG2R0Xk2Pehmn25RUXFkLZKkrOUyvbp3Cs54KZ6iSqt177vxnZp6bxYPJeJs3HU8ot0m5MJtgoOpl%2BmZ61yTC307iOluRL%2F0Ut2S%2F3bk6Y4BI7BAswIXyyrED6BoDLKKidJCcyTAEYnMZ1aucXCIItkhgAu0IHMdQ1j%2BFwCDl5TNxwz8d40UPiEaKn%2FZyF60r1zUmA1Dq8gBVNqQ75sJgETJwQIrRPg8rYtPEoz7tijpqxaraPmxGCXBpTaWV1lNfXcqFFzwCVCxRCt7Tr371UbaJ%2BzA%2FpWtqmyqzMkVO0TpmyX2IQI7LhMdLoZEWE5AtKNI64m1Wgqrlx%2Fm%2BJvBwhCzwi4EUeLVcqFiKMRx4RR2Kjm%2FYWhxSjkLaqxt7Ggd3C%2F8M6CvkU8ROMJzR2sQGOqUBytrIj1rlvyAH%2Bv5Mpt8T0koMjmdPpwloWZUJmRnzCj7e%2B42yx5PHnrQDihlM%2FVtj7gV%2BzLJsUuOBQQSraR6RHQ59TNeAkT%2Bj51jdwIts8kuDIl7dlhE69PgM1j8cgtBAqtRrO5dvBch%2FSWl7JK36y%2FinRi9iS5IY7cO1NxXC3d6D1c%2BzvqzGPRpK2yjFt0k2BeYMnISXpQmxQ4ZQDT5LocFhd2yi&X-Amz-Signature=c9c2a5ed1f52592591c0ef65f1dcfd01712708ad2503dacbcd658e447b15cd58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667MQW4CH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICWGhE%2BHkykn9RNGSLg7UQBzLo0mZtN7JLhz5kCVcMceAiEAlHtmyd3jrdqyko6FzJesEbZg%2BCjQ3hg%2FhcZ9j6obXfkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFzKxUTI90YOFF9gyrcA1%2FDxzI3wgrghau5q1HtZOIV7FeTm3cDp79eA%2F1iLFdOguUeijLzxRDrB%2BlcNagMtAz3qI3SzE6Kod6kvKeo15T7nq%2BAiqItnIxNr%2FxxMtG%2FtZnxTsxC4qklU8liDgelucf5PSW9JITA6TN%2Bd3g0vYrCyYw0A%2Bu0PciBKR1r70WJAKnAKfnslX44gffhf228gjSJoAxJSKYA%2BOBxd26w7Wfji4zlA5dISpZ9qZZOfLf7an%2FsKNQ03SVtCPUZB72g4iB81ZudgqIAQEXkQUb23ULc1nbo%2Bdtv9nWN8Sj6DesFCIgDoRMsa04ND7JVoh4hlZBRHtaUghq1tmIkYUKE%2BfF0JW%2Bn3WBFdF1oITTDlOXVUe4l2DLzvEJavtTw8eJtu4XeAN%2BJuGwjkz0eMQhuPlTPFG0IgaTC%2Ba5l1StYE5zAtfbDkKTsRsFkhFAOlmPvcmmyjsXlu5nZ%2FelPD7RXI2qzRZ3H4dKAdJlrsS7MqnZQWltaxiazkAHL4ChxN1gY6cSb7Kp5SpY%2FfDotRbZ3AI6H%2B5QOjuk8okMSN89mT1GGOsVjsP%2B2M6zvMbJZpO16J78xCN8fhD21D5LtG1C1xbZwRD3uVQbsCe4NFR5p9D5Mnt7AghHQcS9MORTkMObQ2sQGOqUBILmzODGFkBxlwjzmzzKO2TpyPQSNS4ivliBA%2BTPiUwafOyDwWOWyR0TW%2BVImIpQdS%2Fubol7O%2F0kEyD6ykGCkD0DCf70GIKgm0tyGQcpgEYL%2BhU8WFgKGAnflqxE4X9cyqKJROiecSP%2BOGIRE4gLaJTYBaWJRVhoCEYN%2FI6TWBYmuG1LagIH%2FkO0ttC4ns8skTsmPnNp4eq2s8DMehwSHvKqcU1ND&X-Amz-Signature=c69c09f6d58b15e742eec8c8314004d86caf4e6db343d5adb5cedf97a3f07655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667MQW4CH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICWGhE%2BHkykn9RNGSLg7UQBzLo0mZtN7JLhz5kCVcMceAiEAlHtmyd3jrdqyko6FzJesEbZg%2BCjQ3hg%2FhcZ9j6obXfkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFzKxUTI90YOFF9gyrcA1%2FDxzI3wgrghau5q1HtZOIV7FeTm3cDp79eA%2F1iLFdOguUeijLzxRDrB%2BlcNagMtAz3qI3SzE6Kod6kvKeo15T7nq%2BAiqItnIxNr%2FxxMtG%2FtZnxTsxC4qklU8liDgelucf5PSW9JITA6TN%2Bd3g0vYrCyYw0A%2Bu0PciBKR1r70WJAKnAKfnslX44gffhf228gjSJoAxJSKYA%2BOBxd26w7Wfji4zlA5dISpZ9qZZOfLf7an%2FsKNQ03SVtCPUZB72g4iB81ZudgqIAQEXkQUb23ULc1nbo%2Bdtv9nWN8Sj6DesFCIgDoRMsa04ND7JVoh4hlZBRHtaUghq1tmIkYUKE%2BfF0JW%2Bn3WBFdF1oITTDlOXVUe4l2DLzvEJavtTw8eJtu4XeAN%2BJuGwjkz0eMQhuPlTPFG0IgaTC%2Ba5l1StYE5zAtfbDkKTsRsFkhFAOlmPvcmmyjsXlu5nZ%2FelPD7RXI2qzRZ3H4dKAdJlrsS7MqnZQWltaxiazkAHL4ChxN1gY6cSb7Kp5SpY%2FfDotRbZ3AI6H%2B5QOjuk8okMSN89mT1GGOsVjsP%2B2M6zvMbJZpO16J78xCN8fhD21D5LtG1C1xbZwRD3uVQbsCe4NFR5p9D5Mnt7AghHQcS9MORTkMObQ2sQGOqUBILmzODGFkBxlwjzmzzKO2TpyPQSNS4ivliBA%2BTPiUwafOyDwWOWyR0TW%2BVImIpQdS%2Fubol7O%2F0kEyD6ykGCkD0DCf70GIKgm0tyGQcpgEYL%2BhU8WFgKGAnflqxE4X9cyqKJROiecSP%2BOGIRE4gLaJTYBaWJRVhoCEYN%2FI6TWBYmuG1LagIH%2FkO0ttC4ns8skTsmPnNp4eq2s8DMehwSHvKqcU1ND&X-Amz-Signature=57b8ea04b8a64cde789bc1dc55cd57f83cc9ce85a8dbcbe3a54cb35b84ad24a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667MQW4CH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICWGhE%2BHkykn9RNGSLg7UQBzLo0mZtN7JLhz5kCVcMceAiEAlHtmyd3jrdqyko6FzJesEbZg%2BCjQ3hg%2FhcZ9j6obXfkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFzKxUTI90YOFF9gyrcA1%2FDxzI3wgrghau5q1HtZOIV7FeTm3cDp79eA%2F1iLFdOguUeijLzxRDrB%2BlcNagMtAz3qI3SzE6Kod6kvKeo15T7nq%2BAiqItnIxNr%2FxxMtG%2FtZnxTsxC4qklU8liDgelucf5PSW9JITA6TN%2Bd3g0vYrCyYw0A%2Bu0PciBKR1r70WJAKnAKfnslX44gffhf228gjSJoAxJSKYA%2BOBxd26w7Wfji4zlA5dISpZ9qZZOfLf7an%2FsKNQ03SVtCPUZB72g4iB81ZudgqIAQEXkQUb23ULc1nbo%2Bdtv9nWN8Sj6DesFCIgDoRMsa04ND7JVoh4hlZBRHtaUghq1tmIkYUKE%2BfF0JW%2Bn3WBFdF1oITTDlOXVUe4l2DLzvEJavtTw8eJtu4XeAN%2BJuGwjkz0eMQhuPlTPFG0IgaTC%2Ba5l1StYE5zAtfbDkKTsRsFkhFAOlmPvcmmyjsXlu5nZ%2FelPD7RXI2qzRZ3H4dKAdJlrsS7MqnZQWltaxiazkAHL4ChxN1gY6cSb7Kp5SpY%2FfDotRbZ3AI6H%2B5QOjuk8okMSN89mT1GGOsVjsP%2B2M6zvMbJZpO16J78xCN8fhD21D5LtG1C1xbZwRD3uVQbsCe4NFR5p9D5Mnt7AghHQcS9MORTkMObQ2sQGOqUBILmzODGFkBxlwjzmzzKO2TpyPQSNS4ivliBA%2BTPiUwafOyDwWOWyR0TW%2BVImIpQdS%2Fubol7O%2F0kEyD6ykGCkD0DCf70GIKgm0tyGQcpgEYL%2BhU8WFgKGAnflqxE4X9cyqKJROiecSP%2BOGIRE4gLaJTYBaWJRVhoCEYN%2FI6TWBYmuG1LagIH%2FkO0ttC4ns8skTsmPnNp4eq2s8DMehwSHvKqcU1ND&X-Amz-Signature=757a2beb886b93d939b1f8cb8a635c68410866a3eeb859c2b51e36f6c5bdddd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667MQW4CH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICWGhE%2BHkykn9RNGSLg7UQBzLo0mZtN7JLhz5kCVcMceAiEAlHtmyd3jrdqyko6FzJesEbZg%2BCjQ3hg%2FhcZ9j6obXfkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFzKxUTI90YOFF9gyrcA1%2FDxzI3wgrghau5q1HtZOIV7FeTm3cDp79eA%2F1iLFdOguUeijLzxRDrB%2BlcNagMtAz3qI3SzE6Kod6kvKeo15T7nq%2BAiqItnIxNr%2FxxMtG%2FtZnxTsxC4qklU8liDgelucf5PSW9JITA6TN%2Bd3g0vYrCyYw0A%2Bu0PciBKR1r70WJAKnAKfnslX44gffhf228gjSJoAxJSKYA%2BOBxd26w7Wfji4zlA5dISpZ9qZZOfLf7an%2FsKNQ03SVtCPUZB72g4iB81ZudgqIAQEXkQUb23ULc1nbo%2Bdtv9nWN8Sj6DesFCIgDoRMsa04ND7JVoh4hlZBRHtaUghq1tmIkYUKE%2BfF0JW%2Bn3WBFdF1oITTDlOXVUe4l2DLzvEJavtTw8eJtu4XeAN%2BJuGwjkz0eMQhuPlTPFG0IgaTC%2Ba5l1StYE5zAtfbDkKTsRsFkhFAOlmPvcmmyjsXlu5nZ%2FelPD7RXI2qzRZ3H4dKAdJlrsS7MqnZQWltaxiazkAHL4ChxN1gY6cSb7Kp5SpY%2FfDotRbZ3AI6H%2B5QOjuk8okMSN89mT1GGOsVjsP%2B2M6zvMbJZpO16J78xCN8fhD21D5LtG1C1xbZwRD3uVQbsCe4NFR5p9D5Mnt7AghHQcS9MORTkMObQ2sQGOqUBILmzODGFkBxlwjzmzzKO2TpyPQSNS4ivliBA%2BTPiUwafOyDwWOWyR0TW%2BVImIpQdS%2Fubol7O%2F0kEyD6ykGCkD0DCf70GIKgm0tyGQcpgEYL%2BhU8WFgKGAnflqxE4X9cyqKJROiecSP%2BOGIRE4gLaJTYBaWJRVhoCEYN%2FI6TWBYmuG1LagIH%2FkO0ttC4ns8skTsmPnNp4eq2s8DMehwSHvKqcU1ND&X-Amz-Signature=54ff0e42adbf15981901c5eaff0f3c9ebcaeb3372f0e9a5f45f6a9d2ef3070e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667MQW4CH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICWGhE%2BHkykn9RNGSLg7UQBzLo0mZtN7JLhz5kCVcMceAiEAlHtmyd3jrdqyko6FzJesEbZg%2BCjQ3hg%2FhcZ9j6obXfkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFzKxUTI90YOFF9gyrcA1%2FDxzI3wgrghau5q1HtZOIV7FeTm3cDp79eA%2F1iLFdOguUeijLzxRDrB%2BlcNagMtAz3qI3SzE6Kod6kvKeo15T7nq%2BAiqItnIxNr%2FxxMtG%2FtZnxTsxC4qklU8liDgelucf5PSW9JITA6TN%2Bd3g0vYrCyYw0A%2Bu0PciBKR1r70WJAKnAKfnslX44gffhf228gjSJoAxJSKYA%2BOBxd26w7Wfji4zlA5dISpZ9qZZOfLf7an%2FsKNQ03SVtCPUZB72g4iB81ZudgqIAQEXkQUb23ULc1nbo%2Bdtv9nWN8Sj6DesFCIgDoRMsa04ND7JVoh4hlZBRHtaUghq1tmIkYUKE%2BfF0JW%2Bn3WBFdF1oITTDlOXVUe4l2DLzvEJavtTw8eJtu4XeAN%2BJuGwjkz0eMQhuPlTPFG0IgaTC%2Ba5l1StYE5zAtfbDkKTsRsFkhFAOlmPvcmmyjsXlu5nZ%2FelPD7RXI2qzRZ3H4dKAdJlrsS7MqnZQWltaxiazkAHL4ChxN1gY6cSb7Kp5SpY%2FfDotRbZ3AI6H%2B5QOjuk8okMSN89mT1GGOsVjsP%2B2M6zvMbJZpO16J78xCN8fhD21D5LtG1C1xbZwRD3uVQbsCe4NFR5p9D5Mnt7AghHQcS9MORTkMObQ2sQGOqUBILmzODGFkBxlwjzmzzKO2TpyPQSNS4ivliBA%2BTPiUwafOyDwWOWyR0TW%2BVImIpQdS%2Fubol7O%2F0kEyD6ykGCkD0DCf70GIKgm0tyGQcpgEYL%2BhU8WFgKGAnflqxE4X9cyqKJROiecSP%2BOGIRE4gLaJTYBaWJRVhoCEYN%2FI6TWBYmuG1LagIH%2FkO0ttC4ns8skTsmPnNp4eq2s8DMehwSHvKqcU1ND&X-Amz-Signature=9a44a3c438766825a18aca90789a0b9f1dd22be347f0ab4a984b9ff8d8d2da7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667MQW4CH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICWGhE%2BHkykn9RNGSLg7UQBzLo0mZtN7JLhz5kCVcMceAiEAlHtmyd3jrdqyko6FzJesEbZg%2BCjQ3hg%2FhcZ9j6obXfkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFzKxUTI90YOFF9gyrcA1%2FDxzI3wgrghau5q1HtZOIV7FeTm3cDp79eA%2F1iLFdOguUeijLzxRDrB%2BlcNagMtAz3qI3SzE6Kod6kvKeo15T7nq%2BAiqItnIxNr%2FxxMtG%2FtZnxTsxC4qklU8liDgelucf5PSW9JITA6TN%2Bd3g0vYrCyYw0A%2Bu0PciBKR1r70WJAKnAKfnslX44gffhf228gjSJoAxJSKYA%2BOBxd26w7Wfji4zlA5dISpZ9qZZOfLf7an%2FsKNQ03SVtCPUZB72g4iB81ZudgqIAQEXkQUb23ULc1nbo%2Bdtv9nWN8Sj6DesFCIgDoRMsa04ND7JVoh4hlZBRHtaUghq1tmIkYUKE%2BfF0JW%2Bn3WBFdF1oITTDlOXVUe4l2DLzvEJavtTw8eJtu4XeAN%2BJuGwjkz0eMQhuPlTPFG0IgaTC%2Ba5l1StYE5zAtfbDkKTsRsFkhFAOlmPvcmmyjsXlu5nZ%2FelPD7RXI2qzRZ3H4dKAdJlrsS7MqnZQWltaxiazkAHL4ChxN1gY6cSb7Kp5SpY%2FfDotRbZ3AI6H%2B5QOjuk8okMSN89mT1GGOsVjsP%2B2M6zvMbJZpO16J78xCN8fhD21D5LtG1C1xbZwRD3uVQbsCe4NFR5p9D5Mnt7AghHQcS9MORTkMObQ2sQGOqUBILmzODGFkBxlwjzmzzKO2TpyPQSNS4ivliBA%2BTPiUwafOyDwWOWyR0TW%2BVImIpQdS%2Fubol7O%2F0kEyD6ykGCkD0DCf70GIKgm0tyGQcpgEYL%2BhU8WFgKGAnflqxE4X9cyqKJROiecSP%2BOGIRE4gLaJTYBaWJRVhoCEYN%2FI6TWBYmuG1LagIH%2FkO0ttC4ns8skTsmPnNp4eq2s8DMehwSHvKqcU1ND&X-Amz-Signature=431bf58f2c72491ade599e7701c31bfa970984892ff4a2a95f5d2eb0020213ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667MQW4CH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICWGhE%2BHkykn9RNGSLg7UQBzLo0mZtN7JLhz5kCVcMceAiEAlHtmyd3jrdqyko6FzJesEbZg%2BCjQ3hg%2FhcZ9j6obXfkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFzKxUTI90YOFF9gyrcA1%2FDxzI3wgrghau5q1HtZOIV7FeTm3cDp79eA%2F1iLFdOguUeijLzxRDrB%2BlcNagMtAz3qI3SzE6Kod6kvKeo15T7nq%2BAiqItnIxNr%2FxxMtG%2FtZnxTsxC4qklU8liDgelucf5PSW9JITA6TN%2Bd3g0vYrCyYw0A%2Bu0PciBKR1r70WJAKnAKfnslX44gffhf228gjSJoAxJSKYA%2BOBxd26w7Wfji4zlA5dISpZ9qZZOfLf7an%2FsKNQ03SVtCPUZB72g4iB81ZudgqIAQEXkQUb23ULc1nbo%2Bdtv9nWN8Sj6DesFCIgDoRMsa04ND7JVoh4hlZBRHtaUghq1tmIkYUKE%2BfF0JW%2Bn3WBFdF1oITTDlOXVUe4l2DLzvEJavtTw8eJtu4XeAN%2BJuGwjkz0eMQhuPlTPFG0IgaTC%2Ba5l1StYE5zAtfbDkKTsRsFkhFAOlmPvcmmyjsXlu5nZ%2FelPD7RXI2qzRZ3H4dKAdJlrsS7MqnZQWltaxiazkAHL4ChxN1gY6cSb7Kp5SpY%2FfDotRbZ3AI6H%2B5QOjuk8okMSN89mT1GGOsVjsP%2B2M6zvMbJZpO16J78xCN8fhD21D5LtG1C1xbZwRD3uVQbsCe4NFR5p9D5Mnt7AghHQcS9MORTkMObQ2sQGOqUBILmzODGFkBxlwjzmzzKO2TpyPQSNS4ivliBA%2BTPiUwafOyDwWOWyR0TW%2BVImIpQdS%2Fubol7O%2F0kEyD6ykGCkD0DCf70GIKgm0tyGQcpgEYL%2BhU8WFgKGAnflqxE4X9cyqKJROiecSP%2BOGIRE4gLaJTYBaWJRVhoCEYN%2FI6TWBYmuG1LagIH%2FkO0ttC4ns8skTsmPnNp4eq2s8DMehwSHvKqcU1ND&X-Amz-Signature=2afc56aa4978c8700d77728a9e66f206236486d3f23280639e38410abfb5f3ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667MQW4CH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICWGhE%2BHkykn9RNGSLg7UQBzLo0mZtN7JLhz5kCVcMceAiEAlHtmyd3jrdqyko6FzJesEbZg%2BCjQ3hg%2FhcZ9j6obXfkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFzKxUTI90YOFF9gyrcA1%2FDxzI3wgrghau5q1HtZOIV7FeTm3cDp79eA%2F1iLFdOguUeijLzxRDrB%2BlcNagMtAz3qI3SzE6Kod6kvKeo15T7nq%2BAiqItnIxNr%2FxxMtG%2FtZnxTsxC4qklU8liDgelucf5PSW9JITA6TN%2Bd3g0vYrCyYw0A%2Bu0PciBKR1r70WJAKnAKfnslX44gffhf228gjSJoAxJSKYA%2BOBxd26w7Wfji4zlA5dISpZ9qZZOfLf7an%2FsKNQ03SVtCPUZB72g4iB81ZudgqIAQEXkQUb23ULc1nbo%2Bdtv9nWN8Sj6DesFCIgDoRMsa04ND7JVoh4hlZBRHtaUghq1tmIkYUKE%2BfF0JW%2Bn3WBFdF1oITTDlOXVUe4l2DLzvEJavtTw8eJtu4XeAN%2BJuGwjkz0eMQhuPlTPFG0IgaTC%2Ba5l1StYE5zAtfbDkKTsRsFkhFAOlmPvcmmyjsXlu5nZ%2FelPD7RXI2qzRZ3H4dKAdJlrsS7MqnZQWltaxiazkAHL4ChxN1gY6cSb7Kp5SpY%2FfDotRbZ3AI6H%2B5QOjuk8okMSN89mT1GGOsVjsP%2B2M6zvMbJZpO16J78xCN8fhD21D5LtG1C1xbZwRD3uVQbsCe4NFR5p9D5Mnt7AghHQcS9MORTkMObQ2sQGOqUBILmzODGFkBxlwjzmzzKO2TpyPQSNS4ivliBA%2BTPiUwafOyDwWOWyR0TW%2BVImIpQdS%2Fubol7O%2F0kEyD6ykGCkD0DCf70GIKgm0tyGQcpgEYL%2BhU8WFgKGAnflqxE4X9cyqKJROiecSP%2BOGIRE4gLaJTYBaWJRVhoCEYN%2FI6TWBYmuG1LagIH%2FkO0ttC4ns8skTsmPnNp4eq2s8DMehwSHvKqcU1ND&X-Amz-Signature=18e85e50810972942190d15df2cb191f52497c1413f788507dd21c5d7a8cee32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667MQW4CH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICWGhE%2BHkykn9RNGSLg7UQBzLo0mZtN7JLhz5kCVcMceAiEAlHtmyd3jrdqyko6FzJesEbZg%2BCjQ3hg%2FhcZ9j6obXfkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFzKxUTI90YOFF9gyrcA1%2FDxzI3wgrghau5q1HtZOIV7FeTm3cDp79eA%2F1iLFdOguUeijLzxRDrB%2BlcNagMtAz3qI3SzE6Kod6kvKeo15T7nq%2BAiqItnIxNr%2FxxMtG%2FtZnxTsxC4qklU8liDgelucf5PSW9JITA6TN%2Bd3g0vYrCyYw0A%2Bu0PciBKR1r70WJAKnAKfnslX44gffhf228gjSJoAxJSKYA%2BOBxd26w7Wfji4zlA5dISpZ9qZZOfLf7an%2FsKNQ03SVtCPUZB72g4iB81ZudgqIAQEXkQUb23ULc1nbo%2Bdtv9nWN8Sj6DesFCIgDoRMsa04ND7JVoh4hlZBRHtaUghq1tmIkYUKE%2BfF0JW%2Bn3WBFdF1oITTDlOXVUe4l2DLzvEJavtTw8eJtu4XeAN%2BJuGwjkz0eMQhuPlTPFG0IgaTC%2Ba5l1StYE5zAtfbDkKTsRsFkhFAOlmPvcmmyjsXlu5nZ%2FelPD7RXI2qzRZ3H4dKAdJlrsS7MqnZQWltaxiazkAHL4ChxN1gY6cSb7Kp5SpY%2FfDotRbZ3AI6H%2B5QOjuk8okMSN89mT1GGOsVjsP%2B2M6zvMbJZpO16J78xCN8fhD21D5LtG1C1xbZwRD3uVQbsCe4NFR5p9D5Mnt7AghHQcS9MORTkMObQ2sQGOqUBILmzODGFkBxlwjzmzzKO2TpyPQSNS4ivliBA%2BTPiUwafOyDwWOWyR0TW%2BVImIpQdS%2Fubol7O%2F0kEyD6ykGCkD0DCf70GIKgm0tyGQcpgEYL%2BhU8WFgKGAnflqxE4X9cyqKJROiecSP%2BOGIRE4gLaJTYBaWJRVhoCEYN%2FI6TWBYmuG1LagIH%2FkO0ttC4ns8skTsmPnNp4eq2s8DMehwSHvKqcU1ND&X-Amz-Signature=3706ab4ffaae9071658c6204aca80236a31588b7b3457bf6cb0efc6043ac0990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667MQW4CH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICWGhE%2BHkykn9RNGSLg7UQBzLo0mZtN7JLhz5kCVcMceAiEAlHtmyd3jrdqyko6FzJesEbZg%2BCjQ3hg%2FhcZ9j6obXfkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFzKxUTI90YOFF9gyrcA1%2FDxzI3wgrghau5q1HtZOIV7FeTm3cDp79eA%2F1iLFdOguUeijLzxRDrB%2BlcNagMtAz3qI3SzE6Kod6kvKeo15T7nq%2BAiqItnIxNr%2FxxMtG%2FtZnxTsxC4qklU8liDgelucf5PSW9JITA6TN%2Bd3g0vYrCyYw0A%2Bu0PciBKR1r70WJAKnAKfnslX44gffhf228gjSJoAxJSKYA%2BOBxd26w7Wfji4zlA5dISpZ9qZZOfLf7an%2FsKNQ03SVtCPUZB72g4iB81ZudgqIAQEXkQUb23ULc1nbo%2Bdtv9nWN8Sj6DesFCIgDoRMsa04ND7JVoh4hlZBRHtaUghq1tmIkYUKE%2BfF0JW%2Bn3WBFdF1oITTDlOXVUe4l2DLzvEJavtTw8eJtu4XeAN%2BJuGwjkz0eMQhuPlTPFG0IgaTC%2Ba5l1StYE5zAtfbDkKTsRsFkhFAOlmPvcmmyjsXlu5nZ%2FelPD7RXI2qzRZ3H4dKAdJlrsS7MqnZQWltaxiazkAHL4ChxN1gY6cSb7Kp5SpY%2FfDotRbZ3AI6H%2B5QOjuk8okMSN89mT1GGOsVjsP%2B2M6zvMbJZpO16J78xCN8fhD21D5LtG1C1xbZwRD3uVQbsCe4NFR5p9D5Mnt7AghHQcS9MORTkMObQ2sQGOqUBILmzODGFkBxlwjzmzzKO2TpyPQSNS4ivliBA%2BTPiUwafOyDwWOWyR0TW%2BVImIpQdS%2Fubol7O%2F0kEyD6ykGCkD0DCf70GIKgm0tyGQcpgEYL%2BhU8WFgKGAnflqxE4X9cyqKJROiecSP%2BOGIRE4gLaJTYBaWJRVhoCEYN%2FI6TWBYmuG1LagIH%2FkO0ttC4ns8skTsmPnNp4eq2s8DMehwSHvKqcU1ND&X-Amz-Signature=54ff0e42adbf15981901c5eaff0f3c9ebcaeb3372f0e9a5f45f6a9d2ef3070e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
