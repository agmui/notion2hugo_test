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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XP46WKH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCICYUf%2FS5iaSm456V1wbvvQmuVeDr3appaU8JuAVl2HtlAiEAmjVx%2Fc2AI1zoYnTE1JPssvjuV1Y2utgjLE%2BIQOOOjeEq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGyku24G%2F%2BB5u37ybyrcA8ebhaiR9nPneSFPie0dBKcXMOoplh8NrOMf73NfV%2B0uKODX1bf32pGOMJ2jl2nnbOnwdHanTy%2FD%2BZWYOItKE9460omDAAF2scjCLv7AybJHweuqnB2e3FtzUzL3jfeUzZh5CWkzHAptwfBEH29hg%2FFPaQ9rkfBqxuomYqPs6TvwYbZ6aSxphdVKds8Lj%2BRa%2BYvT%2BN%2FZ9pkNHwrWxg09WKx6MjVTxTUevHEbipUaljpca%2FyPDnHYaQshyZsui6Jw07HV738M%2BvcONQLwk4j1MTizx1IEAfmSTryvMaEm7mKZhCI3VyhlmvAnQN9Jbp%2FyXzXcCm5m1cUwksSjLZ5XTZZLmC01LjuB9v3LiGZuOXeJSFPqtAyNNdYZpQ%2BlgesLr0ZZsOWGmOxeUzG4auZIVRnDlAFoG0033O0fXrFAdedDUxDl%2BR83ncE3cL9nWmC06Wf0mnKZiVLMRpG61DODy%2Bk1Yyr0iW3L1wZ5siOu7QyDXdc%2BdN%2BpfzhiBsEqj40tBIuU38sM24XpDBMtFr5BAXGopX7IMoOCG5m%2FOWEgvLwrX60Y2EoRZB7ib1njhA9OHOHkKJ9ZhUBi5RdmcxDZPBaz5dmd0T%2Fmrqf3Xa5wkzeHlM5OP9Ktwn13u6JVMJiEyMQGOqUBioLk8Ccsti%2Bwnb7lc6SRtXH0mDTfndV4fuvMxR1UH5YxqS4dgEIQy7PIHpeHD27sX3tHDrE35MQ92KtsG%2BcGOu02v%2BFAio4AJHeI4CAOJ%2BAw1aoYMm0Gm01xvdTOGZZ25gAhNoweRkpC9iGIRuVBdxqT0cScyzhSPSGoNq1RF8MoEmWsEXBOa39hpHmrdCRpRaTNv8aDEMflHy%2Fzf6dYcRr8q%2BK%2B&X-Amz-Signature=8dae5b3a1204673bc9f5cf69735822feeb3fffa7b38c1577fbf1e00a1c2fc527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T32G4P2P%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCvO%2B%2Fl4p%2Fe1oFtuqWcCxy9YbJ%2BXzYAvWtMBPQMio40pgIhAI9soFVWDWmiPua79sv69T%2Fh2JkqDUSaUL%2FYKYNcupYjKv8DCF4QABoMNjM3NDIzMTgzODA1IgwAxOh3dJMmBNFfm6wq3AOgSPAHth4Mj3kfBnfpdd43AnzfvLPntiQi6%2Bc%2BmsAbb5RkMFOU9GvKAEcR%2FIDE%2FHePYpk%2F21%2FXK07SX7RHGXXmyxVjO0eFqRCwquEn7xlpzPUHk8ODYxUgQs2U21B6iFodef9%2BWOnkZQBhaZo%2FRSIi02CVEscTGalHET9eCEHBqMnekgTKzYzOoKOV8f8DKNLiLj1zrTN%2FtkJanRkj9xgSz0rUfUcncXFTy8KdvD60fwlwhyHDCdzbRqL0y%2FmoJ6moTH2lwVyYsV5%2B61T5crdgBTf%2BpjPa6dHKs3u551ylKDmT2aj0u7IR%2BP1txjtg%2FStkS%2BVRWLxT%2FE4AyToyhsfqvk%2FC%2FAadfy%2B7xb4cFOvoH8giuXwKIfEQTXL3gIfroCABr%2BGN5LNU6Z13U6p5IA%2Fk3mav2R3InyXTk683yE9WOYzyzNz6m1QfjcqS6GxlI0zbgd8V0DBhe7kalzEi8Lvn4nUHLT%2B4tKyEq6gfbwEijwV9%2FtOvKmAATnaljA7POXloPyqPxJ%2BKlEl7S7o5mxaVn%2F8TluH3W5OBoMsALo2vHrN5TL5fZelzq%2BGSAzQ3JV%2FU%2BrdX%2FZppOf3idGiZMa7jLSFAZxr55Pr9IfXxb6mjUSnSDBjH15HuFOBzOTCkg8jEBjqkAZTo0fiIudzITgTA9aw0%2Bxvv0u8%2FCu1gc5k3BrojeU86vQ7iIK%2BM35wNNAF42rq0D01bE8pvaFI7N6JiLdiuQp%2FhyX3%2BXyPaqBdQeA2igQj4uQgyI2Uf01Ejj52N6gdi2EGJVng%2FYrpfE9%2BHU9np%2FTMdNGDPwGjVmlEVasqEViZHorRH4seEm7x0R20dLPw9Np0X7fhhjKu%2BRn%2BIfnTbKUCjuZ5j&X-Amz-Signature=3d628aac2eacb3e36fc66ae683e649bcfd2a6de78c0d946c784f7688cd9518a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T32G4P2P%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCvO%2B%2Fl4p%2Fe1oFtuqWcCxy9YbJ%2BXzYAvWtMBPQMio40pgIhAI9soFVWDWmiPua79sv69T%2Fh2JkqDUSaUL%2FYKYNcupYjKv8DCF4QABoMNjM3NDIzMTgzODA1IgwAxOh3dJMmBNFfm6wq3AOgSPAHth4Mj3kfBnfpdd43AnzfvLPntiQi6%2Bc%2BmsAbb5RkMFOU9GvKAEcR%2FIDE%2FHePYpk%2F21%2FXK07SX7RHGXXmyxVjO0eFqRCwquEn7xlpzPUHk8ODYxUgQs2U21B6iFodef9%2BWOnkZQBhaZo%2FRSIi02CVEscTGalHET9eCEHBqMnekgTKzYzOoKOV8f8DKNLiLj1zrTN%2FtkJanRkj9xgSz0rUfUcncXFTy8KdvD60fwlwhyHDCdzbRqL0y%2FmoJ6moTH2lwVyYsV5%2B61T5crdgBTf%2BpjPa6dHKs3u551ylKDmT2aj0u7IR%2BP1txjtg%2FStkS%2BVRWLxT%2FE4AyToyhsfqvk%2FC%2FAadfy%2B7xb4cFOvoH8giuXwKIfEQTXL3gIfroCABr%2BGN5LNU6Z13U6p5IA%2Fk3mav2R3InyXTk683yE9WOYzyzNz6m1QfjcqS6GxlI0zbgd8V0DBhe7kalzEi8Lvn4nUHLT%2B4tKyEq6gfbwEijwV9%2FtOvKmAATnaljA7POXloPyqPxJ%2BKlEl7S7o5mxaVn%2F8TluH3W5OBoMsALo2vHrN5TL5fZelzq%2BGSAzQ3JV%2FU%2BrdX%2FZppOf3idGiZMa7jLSFAZxr55Pr9IfXxb6mjUSnSDBjH15HuFOBzOTCkg8jEBjqkAZTo0fiIudzITgTA9aw0%2Bxvv0u8%2FCu1gc5k3BrojeU86vQ7iIK%2BM35wNNAF42rq0D01bE8pvaFI7N6JiLdiuQp%2FhyX3%2BXyPaqBdQeA2igQj4uQgyI2Uf01Ejj52N6gdi2EGJVng%2FYrpfE9%2BHU9np%2FTMdNGDPwGjVmlEVasqEViZHorRH4seEm7x0R20dLPw9Np0X7fhhjKu%2BRn%2BIfnTbKUCjuZ5j&X-Amz-Signature=6846230f5b970bfb52aec9b062aca9b3d264a86ce1ede942b68b13cb4e3c07d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T32G4P2P%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCvO%2B%2Fl4p%2Fe1oFtuqWcCxy9YbJ%2BXzYAvWtMBPQMio40pgIhAI9soFVWDWmiPua79sv69T%2Fh2JkqDUSaUL%2FYKYNcupYjKv8DCF4QABoMNjM3NDIzMTgzODA1IgwAxOh3dJMmBNFfm6wq3AOgSPAHth4Mj3kfBnfpdd43AnzfvLPntiQi6%2Bc%2BmsAbb5RkMFOU9GvKAEcR%2FIDE%2FHePYpk%2F21%2FXK07SX7RHGXXmyxVjO0eFqRCwquEn7xlpzPUHk8ODYxUgQs2U21B6iFodef9%2BWOnkZQBhaZo%2FRSIi02CVEscTGalHET9eCEHBqMnekgTKzYzOoKOV8f8DKNLiLj1zrTN%2FtkJanRkj9xgSz0rUfUcncXFTy8KdvD60fwlwhyHDCdzbRqL0y%2FmoJ6moTH2lwVyYsV5%2B61T5crdgBTf%2BpjPa6dHKs3u551ylKDmT2aj0u7IR%2BP1txjtg%2FStkS%2BVRWLxT%2FE4AyToyhsfqvk%2FC%2FAadfy%2B7xb4cFOvoH8giuXwKIfEQTXL3gIfroCABr%2BGN5LNU6Z13U6p5IA%2Fk3mav2R3InyXTk683yE9WOYzyzNz6m1QfjcqS6GxlI0zbgd8V0DBhe7kalzEi8Lvn4nUHLT%2B4tKyEq6gfbwEijwV9%2FtOvKmAATnaljA7POXloPyqPxJ%2BKlEl7S7o5mxaVn%2F8TluH3W5OBoMsALo2vHrN5TL5fZelzq%2BGSAzQ3JV%2FU%2BrdX%2FZppOf3idGiZMa7jLSFAZxr55Pr9IfXxb6mjUSnSDBjH15HuFOBzOTCkg8jEBjqkAZTo0fiIudzITgTA9aw0%2Bxvv0u8%2FCu1gc5k3BrojeU86vQ7iIK%2BM35wNNAF42rq0D01bE8pvaFI7N6JiLdiuQp%2FhyX3%2BXyPaqBdQeA2igQj4uQgyI2Uf01Ejj52N6gdi2EGJVng%2FYrpfE9%2BHU9np%2FTMdNGDPwGjVmlEVasqEViZHorRH4seEm7x0R20dLPw9Np0X7fhhjKu%2BRn%2BIfnTbKUCjuZ5j&X-Amz-Signature=8688c0c645f01e5a3dc30d3f988fed63413dd19cec3a0843cea725eb556c7cc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T32G4P2P%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCvO%2B%2Fl4p%2Fe1oFtuqWcCxy9YbJ%2BXzYAvWtMBPQMio40pgIhAI9soFVWDWmiPua79sv69T%2Fh2JkqDUSaUL%2FYKYNcupYjKv8DCF4QABoMNjM3NDIzMTgzODA1IgwAxOh3dJMmBNFfm6wq3AOgSPAHth4Mj3kfBnfpdd43AnzfvLPntiQi6%2Bc%2BmsAbb5RkMFOU9GvKAEcR%2FIDE%2FHePYpk%2F21%2FXK07SX7RHGXXmyxVjO0eFqRCwquEn7xlpzPUHk8ODYxUgQs2U21B6iFodef9%2BWOnkZQBhaZo%2FRSIi02CVEscTGalHET9eCEHBqMnekgTKzYzOoKOV8f8DKNLiLj1zrTN%2FtkJanRkj9xgSz0rUfUcncXFTy8KdvD60fwlwhyHDCdzbRqL0y%2FmoJ6moTH2lwVyYsV5%2B61T5crdgBTf%2BpjPa6dHKs3u551ylKDmT2aj0u7IR%2BP1txjtg%2FStkS%2BVRWLxT%2FE4AyToyhsfqvk%2FC%2FAadfy%2B7xb4cFOvoH8giuXwKIfEQTXL3gIfroCABr%2BGN5LNU6Z13U6p5IA%2Fk3mav2R3InyXTk683yE9WOYzyzNz6m1QfjcqS6GxlI0zbgd8V0DBhe7kalzEi8Lvn4nUHLT%2B4tKyEq6gfbwEijwV9%2FtOvKmAATnaljA7POXloPyqPxJ%2BKlEl7S7o5mxaVn%2F8TluH3W5OBoMsALo2vHrN5TL5fZelzq%2BGSAzQ3JV%2FU%2BrdX%2FZppOf3idGiZMa7jLSFAZxr55Pr9IfXxb6mjUSnSDBjH15HuFOBzOTCkg8jEBjqkAZTo0fiIudzITgTA9aw0%2Bxvv0u8%2FCu1gc5k3BrojeU86vQ7iIK%2BM35wNNAF42rq0D01bE8pvaFI7N6JiLdiuQp%2FhyX3%2BXyPaqBdQeA2igQj4uQgyI2Uf01Ejj52N6gdi2EGJVng%2FYrpfE9%2BHU9np%2FTMdNGDPwGjVmlEVasqEViZHorRH4seEm7x0R20dLPw9Np0X7fhhjKu%2BRn%2BIfnTbKUCjuZ5j&X-Amz-Signature=9203b3972739dde320c3cc7840768220074648bd64dba46386c70eef2f6ff918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T32G4P2P%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCvO%2B%2Fl4p%2Fe1oFtuqWcCxy9YbJ%2BXzYAvWtMBPQMio40pgIhAI9soFVWDWmiPua79sv69T%2Fh2JkqDUSaUL%2FYKYNcupYjKv8DCF4QABoMNjM3NDIzMTgzODA1IgwAxOh3dJMmBNFfm6wq3AOgSPAHth4Mj3kfBnfpdd43AnzfvLPntiQi6%2Bc%2BmsAbb5RkMFOU9GvKAEcR%2FIDE%2FHePYpk%2F21%2FXK07SX7RHGXXmyxVjO0eFqRCwquEn7xlpzPUHk8ODYxUgQs2U21B6iFodef9%2BWOnkZQBhaZo%2FRSIi02CVEscTGalHET9eCEHBqMnekgTKzYzOoKOV8f8DKNLiLj1zrTN%2FtkJanRkj9xgSz0rUfUcncXFTy8KdvD60fwlwhyHDCdzbRqL0y%2FmoJ6moTH2lwVyYsV5%2B61T5crdgBTf%2BpjPa6dHKs3u551ylKDmT2aj0u7IR%2BP1txjtg%2FStkS%2BVRWLxT%2FE4AyToyhsfqvk%2FC%2FAadfy%2B7xb4cFOvoH8giuXwKIfEQTXL3gIfroCABr%2BGN5LNU6Z13U6p5IA%2Fk3mav2R3InyXTk683yE9WOYzyzNz6m1QfjcqS6GxlI0zbgd8V0DBhe7kalzEi8Lvn4nUHLT%2B4tKyEq6gfbwEijwV9%2FtOvKmAATnaljA7POXloPyqPxJ%2BKlEl7S7o5mxaVn%2F8TluH3W5OBoMsALo2vHrN5TL5fZelzq%2BGSAzQ3JV%2FU%2BrdX%2FZppOf3idGiZMa7jLSFAZxr55Pr9IfXxb6mjUSnSDBjH15HuFOBzOTCkg8jEBjqkAZTo0fiIudzITgTA9aw0%2Bxvv0u8%2FCu1gc5k3BrojeU86vQ7iIK%2BM35wNNAF42rq0D01bE8pvaFI7N6JiLdiuQp%2FhyX3%2BXyPaqBdQeA2igQj4uQgyI2Uf01Ejj52N6gdi2EGJVng%2FYrpfE9%2BHU9np%2FTMdNGDPwGjVmlEVasqEViZHorRH4seEm7x0R20dLPw9Np0X7fhhjKu%2BRn%2BIfnTbKUCjuZ5j&X-Amz-Signature=03a3cd23e9822326c70b5ff2cdfcc869c97c016a6c15792ae2784d81654b8bc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T32G4P2P%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCvO%2B%2Fl4p%2Fe1oFtuqWcCxy9YbJ%2BXzYAvWtMBPQMio40pgIhAI9soFVWDWmiPua79sv69T%2Fh2JkqDUSaUL%2FYKYNcupYjKv8DCF4QABoMNjM3NDIzMTgzODA1IgwAxOh3dJMmBNFfm6wq3AOgSPAHth4Mj3kfBnfpdd43AnzfvLPntiQi6%2Bc%2BmsAbb5RkMFOU9GvKAEcR%2FIDE%2FHePYpk%2F21%2FXK07SX7RHGXXmyxVjO0eFqRCwquEn7xlpzPUHk8ODYxUgQs2U21B6iFodef9%2BWOnkZQBhaZo%2FRSIi02CVEscTGalHET9eCEHBqMnekgTKzYzOoKOV8f8DKNLiLj1zrTN%2FtkJanRkj9xgSz0rUfUcncXFTy8KdvD60fwlwhyHDCdzbRqL0y%2FmoJ6moTH2lwVyYsV5%2B61T5crdgBTf%2BpjPa6dHKs3u551ylKDmT2aj0u7IR%2BP1txjtg%2FStkS%2BVRWLxT%2FE4AyToyhsfqvk%2FC%2FAadfy%2B7xb4cFOvoH8giuXwKIfEQTXL3gIfroCABr%2BGN5LNU6Z13U6p5IA%2Fk3mav2R3InyXTk683yE9WOYzyzNz6m1QfjcqS6GxlI0zbgd8V0DBhe7kalzEi8Lvn4nUHLT%2B4tKyEq6gfbwEijwV9%2FtOvKmAATnaljA7POXloPyqPxJ%2BKlEl7S7o5mxaVn%2F8TluH3W5OBoMsALo2vHrN5TL5fZelzq%2BGSAzQ3JV%2FU%2BrdX%2FZppOf3idGiZMa7jLSFAZxr55Pr9IfXxb6mjUSnSDBjH15HuFOBzOTCkg8jEBjqkAZTo0fiIudzITgTA9aw0%2Bxvv0u8%2FCu1gc5k3BrojeU86vQ7iIK%2BM35wNNAF42rq0D01bE8pvaFI7N6JiLdiuQp%2FhyX3%2BXyPaqBdQeA2igQj4uQgyI2Uf01Ejj52N6gdi2EGJVng%2FYrpfE9%2BHU9np%2FTMdNGDPwGjVmlEVasqEViZHorRH4seEm7x0R20dLPw9Np0X7fhhjKu%2BRn%2BIfnTbKUCjuZ5j&X-Amz-Signature=2a0e631e93122729894ba377bc4d1fca277a2a19ead991a630119b336239d865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T32G4P2P%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCvO%2B%2Fl4p%2Fe1oFtuqWcCxy9YbJ%2BXzYAvWtMBPQMio40pgIhAI9soFVWDWmiPua79sv69T%2Fh2JkqDUSaUL%2FYKYNcupYjKv8DCF4QABoMNjM3NDIzMTgzODA1IgwAxOh3dJMmBNFfm6wq3AOgSPAHth4Mj3kfBnfpdd43AnzfvLPntiQi6%2Bc%2BmsAbb5RkMFOU9GvKAEcR%2FIDE%2FHePYpk%2F21%2FXK07SX7RHGXXmyxVjO0eFqRCwquEn7xlpzPUHk8ODYxUgQs2U21B6iFodef9%2BWOnkZQBhaZo%2FRSIi02CVEscTGalHET9eCEHBqMnekgTKzYzOoKOV8f8DKNLiLj1zrTN%2FtkJanRkj9xgSz0rUfUcncXFTy8KdvD60fwlwhyHDCdzbRqL0y%2FmoJ6moTH2lwVyYsV5%2B61T5crdgBTf%2BpjPa6dHKs3u551ylKDmT2aj0u7IR%2BP1txjtg%2FStkS%2BVRWLxT%2FE4AyToyhsfqvk%2FC%2FAadfy%2B7xb4cFOvoH8giuXwKIfEQTXL3gIfroCABr%2BGN5LNU6Z13U6p5IA%2Fk3mav2R3InyXTk683yE9WOYzyzNz6m1QfjcqS6GxlI0zbgd8V0DBhe7kalzEi8Lvn4nUHLT%2B4tKyEq6gfbwEijwV9%2FtOvKmAATnaljA7POXloPyqPxJ%2BKlEl7S7o5mxaVn%2F8TluH3W5OBoMsALo2vHrN5TL5fZelzq%2BGSAzQ3JV%2FU%2BrdX%2FZppOf3idGiZMa7jLSFAZxr55Pr9IfXxb6mjUSnSDBjH15HuFOBzOTCkg8jEBjqkAZTo0fiIudzITgTA9aw0%2Bxvv0u8%2FCu1gc5k3BrojeU86vQ7iIK%2BM35wNNAF42rq0D01bE8pvaFI7N6JiLdiuQp%2FhyX3%2BXyPaqBdQeA2igQj4uQgyI2Uf01Ejj52N6gdi2EGJVng%2FYrpfE9%2BHU9np%2FTMdNGDPwGjVmlEVasqEViZHorRH4seEm7x0R20dLPw9Np0X7fhhjKu%2BRn%2BIfnTbKUCjuZ5j&X-Amz-Signature=8b1068b47791316cbbf613b3029ffe24d6aa5a87dfdac94e181f3854d20da1b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T32G4P2P%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCvO%2B%2Fl4p%2Fe1oFtuqWcCxy9YbJ%2BXzYAvWtMBPQMio40pgIhAI9soFVWDWmiPua79sv69T%2Fh2JkqDUSaUL%2FYKYNcupYjKv8DCF4QABoMNjM3NDIzMTgzODA1IgwAxOh3dJMmBNFfm6wq3AOgSPAHth4Mj3kfBnfpdd43AnzfvLPntiQi6%2Bc%2BmsAbb5RkMFOU9GvKAEcR%2FIDE%2FHePYpk%2F21%2FXK07SX7RHGXXmyxVjO0eFqRCwquEn7xlpzPUHk8ODYxUgQs2U21B6iFodef9%2BWOnkZQBhaZo%2FRSIi02CVEscTGalHET9eCEHBqMnekgTKzYzOoKOV8f8DKNLiLj1zrTN%2FtkJanRkj9xgSz0rUfUcncXFTy8KdvD60fwlwhyHDCdzbRqL0y%2FmoJ6moTH2lwVyYsV5%2B61T5crdgBTf%2BpjPa6dHKs3u551ylKDmT2aj0u7IR%2BP1txjtg%2FStkS%2BVRWLxT%2FE4AyToyhsfqvk%2FC%2FAadfy%2B7xb4cFOvoH8giuXwKIfEQTXL3gIfroCABr%2BGN5LNU6Z13U6p5IA%2Fk3mav2R3InyXTk683yE9WOYzyzNz6m1QfjcqS6GxlI0zbgd8V0DBhe7kalzEi8Lvn4nUHLT%2B4tKyEq6gfbwEijwV9%2FtOvKmAATnaljA7POXloPyqPxJ%2BKlEl7S7o5mxaVn%2F8TluH3W5OBoMsALo2vHrN5TL5fZelzq%2BGSAzQ3JV%2FU%2BrdX%2FZppOf3idGiZMa7jLSFAZxr55Pr9IfXxb6mjUSnSDBjH15HuFOBzOTCkg8jEBjqkAZTo0fiIudzITgTA9aw0%2Bxvv0u8%2FCu1gc5k3BrojeU86vQ7iIK%2BM35wNNAF42rq0D01bE8pvaFI7N6JiLdiuQp%2FhyX3%2BXyPaqBdQeA2igQj4uQgyI2Uf01Ejj52N6gdi2EGJVng%2FYrpfE9%2BHU9np%2FTMdNGDPwGjVmlEVasqEViZHorRH4seEm7x0R20dLPw9Np0X7fhhjKu%2BRn%2BIfnTbKUCjuZ5j&X-Amz-Signature=22e77af7eeee38d639d5f06c400e304885650a2e0ed0bf2b5cef2dafa428fb46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T32G4P2P%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCvO%2B%2Fl4p%2Fe1oFtuqWcCxy9YbJ%2BXzYAvWtMBPQMio40pgIhAI9soFVWDWmiPua79sv69T%2Fh2JkqDUSaUL%2FYKYNcupYjKv8DCF4QABoMNjM3NDIzMTgzODA1IgwAxOh3dJMmBNFfm6wq3AOgSPAHth4Mj3kfBnfpdd43AnzfvLPntiQi6%2Bc%2BmsAbb5RkMFOU9GvKAEcR%2FIDE%2FHePYpk%2F21%2FXK07SX7RHGXXmyxVjO0eFqRCwquEn7xlpzPUHk8ODYxUgQs2U21B6iFodef9%2BWOnkZQBhaZo%2FRSIi02CVEscTGalHET9eCEHBqMnekgTKzYzOoKOV8f8DKNLiLj1zrTN%2FtkJanRkj9xgSz0rUfUcncXFTy8KdvD60fwlwhyHDCdzbRqL0y%2FmoJ6moTH2lwVyYsV5%2B61T5crdgBTf%2BpjPa6dHKs3u551ylKDmT2aj0u7IR%2BP1txjtg%2FStkS%2BVRWLxT%2FE4AyToyhsfqvk%2FC%2FAadfy%2B7xb4cFOvoH8giuXwKIfEQTXL3gIfroCABr%2BGN5LNU6Z13U6p5IA%2Fk3mav2R3InyXTk683yE9WOYzyzNz6m1QfjcqS6GxlI0zbgd8V0DBhe7kalzEi8Lvn4nUHLT%2B4tKyEq6gfbwEijwV9%2FtOvKmAATnaljA7POXloPyqPxJ%2BKlEl7S7o5mxaVn%2F8TluH3W5OBoMsALo2vHrN5TL5fZelzq%2BGSAzQ3JV%2FU%2BrdX%2FZppOf3idGiZMa7jLSFAZxr55Pr9IfXxb6mjUSnSDBjH15HuFOBzOTCkg8jEBjqkAZTo0fiIudzITgTA9aw0%2Bxvv0u8%2FCu1gc5k3BrojeU86vQ7iIK%2BM35wNNAF42rq0D01bE8pvaFI7N6JiLdiuQp%2FhyX3%2BXyPaqBdQeA2igQj4uQgyI2Uf01Ejj52N6gdi2EGJVng%2FYrpfE9%2BHU9np%2FTMdNGDPwGjVmlEVasqEViZHorRH4seEm7x0R20dLPw9Np0X7fhhjKu%2BRn%2BIfnTbKUCjuZ5j&X-Amz-Signature=ae3c8d7bac526efd1e1cc97facb3fdf2b1bb1ba98413b544ba875d32f492862a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T32G4P2P%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCvO%2B%2Fl4p%2Fe1oFtuqWcCxy9YbJ%2BXzYAvWtMBPQMio40pgIhAI9soFVWDWmiPua79sv69T%2Fh2JkqDUSaUL%2FYKYNcupYjKv8DCF4QABoMNjM3NDIzMTgzODA1IgwAxOh3dJMmBNFfm6wq3AOgSPAHth4Mj3kfBnfpdd43AnzfvLPntiQi6%2Bc%2BmsAbb5RkMFOU9GvKAEcR%2FIDE%2FHePYpk%2F21%2FXK07SX7RHGXXmyxVjO0eFqRCwquEn7xlpzPUHk8ODYxUgQs2U21B6iFodef9%2BWOnkZQBhaZo%2FRSIi02CVEscTGalHET9eCEHBqMnekgTKzYzOoKOV8f8DKNLiLj1zrTN%2FtkJanRkj9xgSz0rUfUcncXFTy8KdvD60fwlwhyHDCdzbRqL0y%2FmoJ6moTH2lwVyYsV5%2B61T5crdgBTf%2BpjPa6dHKs3u551ylKDmT2aj0u7IR%2BP1txjtg%2FStkS%2BVRWLxT%2FE4AyToyhsfqvk%2FC%2FAadfy%2B7xb4cFOvoH8giuXwKIfEQTXL3gIfroCABr%2BGN5LNU6Z13U6p5IA%2Fk3mav2R3InyXTk683yE9WOYzyzNz6m1QfjcqS6GxlI0zbgd8V0DBhe7kalzEi8Lvn4nUHLT%2B4tKyEq6gfbwEijwV9%2FtOvKmAATnaljA7POXloPyqPxJ%2BKlEl7S7o5mxaVn%2F8TluH3W5OBoMsALo2vHrN5TL5fZelzq%2BGSAzQ3JV%2FU%2BrdX%2FZppOf3idGiZMa7jLSFAZxr55Pr9IfXxb6mjUSnSDBjH15HuFOBzOTCkg8jEBjqkAZTo0fiIudzITgTA9aw0%2Bxvv0u8%2FCu1gc5k3BrojeU86vQ7iIK%2BM35wNNAF42rq0D01bE8pvaFI7N6JiLdiuQp%2FhyX3%2BXyPaqBdQeA2igQj4uQgyI2Uf01Ejj52N6gdi2EGJVng%2FYrpfE9%2BHU9np%2FTMdNGDPwGjVmlEVasqEViZHorRH4seEm7x0R20dLPw9Np0X7fhhjKu%2BRn%2BIfnTbKUCjuZ5j&X-Amz-Signature=9203b3972739dde320c3cc7840768220074648bd64dba46386c70eef2f6ff918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
