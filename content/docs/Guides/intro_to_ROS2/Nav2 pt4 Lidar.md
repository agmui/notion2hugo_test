---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-02T10:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-02T10:06:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XGVPD2Y%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBRVUcfIfUHGqaSyz4POtobL0GVFTifVlmzsERSrj7mwIgD5qcb2DkzuucSYFlaRv2gGKaAdX2PetmZGOVfE5%2F8dkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDFuGRM8fXvg0I9FRdyrcA9spUv2hIQlVsLOMgP9FYiJUbkVwZWfBuRxWSmjm%2BDhe05b0w6pYh3Yz1rp9iduFzNQ%2FIVc2R%2Fr%2FO9FPN1XoNZRd3wIRWUew1la6zamkFXt2S%2FhHqWJ8ufeLBvReh0FEhlsniECnwEHOQCdNYKsvj6vl7aNOnX8W0OVSZDWyYpaAQB9eIIsF0gD3duXSlcApEHugcIMFRGV4uk98JJf98pVqZN9zIeQBD8r5y51yFEWFIndTStjvWjBZcEnN7QSkkwjo2WSGL00h8%2FIVHTDk6Dbr9d9d37kxSBiPgfkefJJFxQT2CNm3giHFJHYkightAkL03aTpzG3fzpwh9lGjXZaSKna4j%2BHBq3jvAGWwDQsLmJSsTPr%2BWEnfeiEMWdBRYZzN%2FfzBWOOKYs1WgoyC7iTQA4%2Ftvy4yms6FVrgu8oDjYupwsPvlAipR5%2FWvcrsZ3Gn5fpN02Sd1Q5LzY8k04CskKkfdKwlkafnoKO1SwF%2BEOOZWbfk%2BF1rt5vWXd8iwfHzRLvj43oht39ADgm%2BRM1WSTMzf8r8g6P2qq73NKolPlsCBQ%2BVUdU8Du1PP3irIqTicwffOKEjocdMctXzomTuFRacFkG3Ml%2Fj8Xchlar2eHMyVNyQtv8aLCDyXMMaJuMQGOqUBJwXjEToHc1woZOohdQ1F7ZSiu78FJ9KLOa6nPwLvhEoz%2FDwIpCF538mL1JRQkAOSN1BuopyluVbt2oFOTiyrs66ymeaNNvtWExUhoRHrR%2BpAR2dC%2BtBt9VAkCU7Nzp7Qoo8fEPfpnTCPj0do%2F3H2QbSaGpDKEQMEtKTnCPETszG%2BoroX9jLdrSuZz8LBeERp3icxaD81p7ig4mpZgkk2W3CZZNGf&X-Amz-Signature=f844ce6dda109b947c54a2c24ab4c4f5d6e605bde3f08c274be4564dab51c5cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ52NIKA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzmXbvYN7Ud9GEMXjQxH07bE2508XOuPDS%2FwkSIxr1yAIgV%2BssKcdvw9z8%2BKA21VfIbpgct2iGE%2BS2PSPXqUCGbJIq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAGpwg9aEHK0uEms3CrcAwRfH4rwhxVavWb9NDLICj1Q85iNf1eag65hXqOCRQ2NXhNKEVsUH91pqWOMHQssmxmICBXfD66TljF8AuK2Ak1sjLQ1Bq1BxfTz4l%2BvjjHq6MMGrDBc4OxlWgctqfGTNEXCwfVDt%2Fc7pqJhlLrX7x4%2FS3Mw98Tq1KHpdy3e%2FanIKkFDv3Zrgm1KwaDK2WL2NaC35mPK9TaOadO2IqQQ1XrhhCStbVnskkADOMRH1%2FyQ2TPCEhH96hoBbdv%2FWktdomTLs%2BbURi%2BKZ4REpC%2BldB%2Fk5MRqstQfLA1%2FGMpfWhEW3Gvt0MaJGn7fbmFO0w26eOGnAtUKugEIO5rbUvl9bXR5NhDZ3p8qj5CaNU%2FeOgkNl1isYgWpXqmrgnQFa4%2FLnmk6Oroj8H3WaL%2Fy9sqXvVFQyrjBFBn%2BtTOlFLCG9w3zaLdyDiTD3UzDkT9g6HJiUENxOdQy3Htbh8Kww6l2HWQYzPxLTKzHHSLmt6z6X7x5q0Ye5LGClxJeorja8zQeAUEgfXR6WXEapTb1G0TnV86BlyQlHEvrxCJlEULNolBbPikdqabHbPWhRFUIgmUsoGoAacIpcxRm24jluBuaCcPHW%2FvhbxFR7tZRbbMuddz42hu3wWhNpH6%2BqUcQMNmLuMQGOqUBgDIgh4LZHVruZu%2Fr18sC922HYhq7XMDHW%2FUmU1YaAeB%2BGd3OWhE1tkFs%2FKFUIkN1Z%2F0dbHy3ACnsUEECKtPXbOrNWjqIxPAdJIbLnU16yw%2FkPiSzkrufwxDjo0w46k27NvMHs09hQcGELF59VN%2BrCYfQtF2GacQTtbRh6Mj9U7vpthYidnNsGPRGpJKN8ZIUoXQNxz5VD6b6y2Q98qmG5DgdGvz%2F&X-Amz-Signature=c9d13a971c708c5099d9f2cf633b49eb1826ba4d2ed319699cf2bd76c11c7528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ52NIKA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzmXbvYN7Ud9GEMXjQxH07bE2508XOuPDS%2FwkSIxr1yAIgV%2BssKcdvw9z8%2BKA21VfIbpgct2iGE%2BS2PSPXqUCGbJIq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAGpwg9aEHK0uEms3CrcAwRfH4rwhxVavWb9NDLICj1Q85iNf1eag65hXqOCRQ2NXhNKEVsUH91pqWOMHQssmxmICBXfD66TljF8AuK2Ak1sjLQ1Bq1BxfTz4l%2BvjjHq6MMGrDBc4OxlWgctqfGTNEXCwfVDt%2Fc7pqJhlLrX7x4%2FS3Mw98Tq1KHpdy3e%2FanIKkFDv3Zrgm1KwaDK2WL2NaC35mPK9TaOadO2IqQQ1XrhhCStbVnskkADOMRH1%2FyQ2TPCEhH96hoBbdv%2FWktdomTLs%2BbURi%2BKZ4REpC%2BldB%2Fk5MRqstQfLA1%2FGMpfWhEW3Gvt0MaJGn7fbmFO0w26eOGnAtUKugEIO5rbUvl9bXR5NhDZ3p8qj5CaNU%2FeOgkNl1isYgWpXqmrgnQFa4%2FLnmk6Oroj8H3WaL%2Fy9sqXvVFQyrjBFBn%2BtTOlFLCG9w3zaLdyDiTD3UzDkT9g6HJiUENxOdQy3Htbh8Kww6l2HWQYzPxLTKzHHSLmt6z6X7x5q0Ye5LGClxJeorja8zQeAUEgfXR6WXEapTb1G0TnV86BlyQlHEvrxCJlEULNolBbPikdqabHbPWhRFUIgmUsoGoAacIpcxRm24jluBuaCcPHW%2FvhbxFR7tZRbbMuddz42hu3wWhNpH6%2BqUcQMNmLuMQGOqUBgDIgh4LZHVruZu%2Fr18sC922HYhq7XMDHW%2FUmU1YaAeB%2BGd3OWhE1tkFs%2FKFUIkN1Z%2F0dbHy3ACnsUEECKtPXbOrNWjqIxPAdJIbLnU16yw%2FkPiSzkrufwxDjo0w46k27NvMHs09hQcGELF59VN%2BrCYfQtF2GacQTtbRh6Mj9U7vpthYidnNsGPRGpJKN8ZIUoXQNxz5VD6b6y2Q98qmG5DgdGvz%2F&X-Amz-Signature=179ff2ffa22098a4032f73b3a5f357de2085d10b1d3533163d5136062c2fcc2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ52NIKA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzmXbvYN7Ud9GEMXjQxH07bE2508XOuPDS%2FwkSIxr1yAIgV%2BssKcdvw9z8%2BKA21VfIbpgct2iGE%2BS2PSPXqUCGbJIq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAGpwg9aEHK0uEms3CrcAwRfH4rwhxVavWb9NDLICj1Q85iNf1eag65hXqOCRQ2NXhNKEVsUH91pqWOMHQssmxmICBXfD66TljF8AuK2Ak1sjLQ1Bq1BxfTz4l%2BvjjHq6MMGrDBc4OxlWgctqfGTNEXCwfVDt%2Fc7pqJhlLrX7x4%2FS3Mw98Tq1KHpdy3e%2FanIKkFDv3Zrgm1KwaDK2WL2NaC35mPK9TaOadO2IqQQ1XrhhCStbVnskkADOMRH1%2FyQ2TPCEhH96hoBbdv%2FWktdomTLs%2BbURi%2BKZ4REpC%2BldB%2Fk5MRqstQfLA1%2FGMpfWhEW3Gvt0MaJGn7fbmFO0w26eOGnAtUKugEIO5rbUvl9bXR5NhDZ3p8qj5CaNU%2FeOgkNl1isYgWpXqmrgnQFa4%2FLnmk6Oroj8H3WaL%2Fy9sqXvVFQyrjBFBn%2BtTOlFLCG9w3zaLdyDiTD3UzDkT9g6HJiUENxOdQy3Htbh8Kww6l2HWQYzPxLTKzHHSLmt6z6X7x5q0Ye5LGClxJeorja8zQeAUEgfXR6WXEapTb1G0TnV86BlyQlHEvrxCJlEULNolBbPikdqabHbPWhRFUIgmUsoGoAacIpcxRm24jluBuaCcPHW%2FvhbxFR7tZRbbMuddz42hu3wWhNpH6%2BqUcQMNmLuMQGOqUBgDIgh4LZHVruZu%2Fr18sC922HYhq7XMDHW%2FUmU1YaAeB%2BGd3OWhE1tkFs%2FKFUIkN1Z%2F0dbHy3ACnsUEECKtPXbOrNWjqIxPAdJIbLnU16yw%2FkPiSzkrufwxDjo0w46k27NvMHs09hQcGELF59VN%2BrCYfQtF2GacQTtbRh6Mj9U7vpthYidnNsGPRGpJKN8ZIUoXQNxz5VD6b6y2Q98qmG5DgdGvz%2F&X-Amz-Signature=ac6af4f4787ac6350fd18ba006a21eb53b3ef71b0ff07718cb898e26433f9f7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ52NIKA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzmXbvYN7Ud9GEMXjQxH07bE2508XOuPDS%2FwkSIxr1yAIgV%2BssKcdvw9z8%2BKA21VfIbpgct2iGE%2BS2PSPXqUCGbJIq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAGpwg9aEHK0uEms3CrcAwRfH4rwhxVavWb9NDLICj1Q85iNf1eag65hXqOCRQ2NXhNKEVsUH91pqWOMHQssmxmICBXfD66TljF8AuK2Ak1sjLQ1Bq1BxfTz4l%2BvjjHq6MMGrDBc4OxlWgctqfGTNEXCwfVDt%2Fc7pqJhlLrX7x4%2FS3Mw98Tq1KHpdy3e%2FanIKkFDv3Zrgm1KwaDK2WL2NaC35mPK9TaOadO2IqQQ1XrhhCStbVnskkADOMRH1%2FyQ2TPCEhH96hoBbdv%2FWktdomTLs%2BbURi%2BKZ4REpC%2BldB%2Fk5MRqstQfLA1%2FGMpfWhEW3Gvt0MaJGn7fbmFO0w26eOGnAtUKugEIO5rbUvl9bXR5NhDZ3p8qj5CaNU%2FeOgkNl1isYgWpXqmrgnQFa4%2FLnmk6Oroj8H3WaL%2Fy9sqXvVFQyrjBFBn%2BtTOlFLCG9w3zaLdyDiTD3UzDkT9g6HJiUENxOdQy3Htbh8Kww6l2HWQYzPxLTKzHHSLmt6z6X7x5q0Ye5LGClxJeorja8zQeAUEgfXR6WXEapTb1G0TnV86BlyQlHEvrxCJlEULNolBbPikdqabHbPWhRFUIgmUsoGoAacIpcxRm24jluBuaCcPHW%2FvhbxFR7tZRbbMuddz42hu3wWhNpH6%2BqUcQMNmLuMQGOqUBgDIgh4LZHVruZu%2Fr18sC922HYhq7XMDHW%2FUmU1YaAeB%2BGd3OWhE1tkFs%2FKFUIkN1Z%2F0dbHy3ACnsUEECKtPXbOrNWjqIxPAdJIbLnU16yw%2FkPiSzkrufwxDjo0w46k27NvMHs09hQcGELF59VN%2BrCYfQtF2GacQTtbRh6Mj9U7vpthYidnNsGPRGpJKN8ZIUoXQNxz5VD6b6y2Q98qmG5DgdGvz%2F&X-Amz-Signature=2f4474efd5d9e7dcd2a6bcda188d5718e9b207862f97dda012b66a87bfec840f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ52NIKA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzmXbvYN7Ud9GEMXjQxH07bE2508XOuPDS%2FwkSIxr1yAIgV%2BssKcdvw9z8%2BKA21VfIbpgct2iGE%2BS2PSPXqUCGbJIq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAGpwg9aEHK0uEms3CrcAwRfH4rwhxVavWb9NDLICj1Q85iNf1eag65hXqOCRQ2NXhNKEVsUH91pqWOMHQssmxmICBXfD66TljF8AuK2Ak1sjLQ1Bq1BxfTz4l%2BvjjHq6MMGrDBc4OxlWgctqfGTNEXCwfVDt%2Fc7pqJhlLrX7x4%2FS3Mw98Tq1KHpdy3e%2FanIKkFDv3Zrgm1KwaDK2WL2NaC35mPK9TaOadO2IqQQ1XrhhCStbVnskkADOMRH1%2FyQ2TPCEhH96hoBbdv%2FWktdomTLs%2BbURi%2BKZ4REpC%2BldB%2Fk5MRqstQfLA1%2FGMpfWhEW3Gvt0MaJGn7fbmFO0w26eOGnAtUKugEIO5rbUvl9bXR5NhDZ3p8qj5CaNU%2FeOgkNl1isYgWpXqmrgnQFa4%2FLnmk6Oroj8H3WaL%2Fy9sqXvVFQyrjBFBn%2BtTOlFLCG9w3zaLdyDiTD3UzDkT9g6HJiUENxOdQy3Htbh8Kww6l2HWQYzPxLTKzHHSLmt6z6X7x5q0Ye5LGClxJeorja8zQeAUEgfXR6WXEapTb1G0TnV86BlyQlHEvrxCJlEULNolBbPikdqabHbPWhRFUIgmUsoGoAacIpcxRm24jluBuaCcPHW%2FvhbxFR7tZRbbMuddz42hu3wWhNpH6%2BqUcQMNmLuMQGOqUBgDIgh4LZHVruZu%2Fr18sC922HYhq7XMDHW%2FUmU1YaAeB%2BGd3OWhE1tkFs%2FKFUIkN1Z%2F0dbHy3ACnsUEECKtPXbOrNWjqIxPAdJIbLnU16yw%2FkPiSzkrufwxDjo0w46k27NvMHs09hQcGELF59VN%2BrCYfQtF2GacQTtbRh6Mj9U7vpthYidnNsGPRGpJKN8ZIUoXQNxz5VD6b6y2Q98qmG5DgdGvz%2F&X-Amz-Signature=d7cc05a1c9644e51542d50f131b8501b3478005057590671f3fc7e9b8de8be3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ52NIKA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzmXbvYN7Ud9GEMXjQxH07bE2508XOuPDS%2FwkSIxr1yAIgV%2BssKcdvw9z8%2BKA21VfIbpgct2iGE%2BS2PSPXqUCGbJIq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAGpwg9aEHK0uEms3CrcAwRfH4rwhxVavWb9NDLICj1Q85iNf1eag65hXqOCRQ2NXhNKEVsUH91pqWOMHQssmxmICBXfD66TljF8AuK2Ak1sjLQ1Bq1BxfTz4l%2BvjjHq6MMGrDBc4OxlWgctqfGTNEXCwfVDt%2Fc7pqJhlLrX7x4%2FS3Mw98Tq1KHpdy3e%2FanIKkFDv3Zrgm1KwaDK2WL2NaC35mPK9TaOadO2IqQQ1XrhhCStbVnskkADOMRH1%2FyQ2TPCEhH96hoBbdv%2FWktdomTLs%2BbURi%2BKZ4REpC%2BldB%2Fk5MRqstQfLA1%2FGMpfWhEW3Gvt0MaJGn7fbmFO0w26eOGnAtUKugEIO5rbUvl9bXR5NhDZ3p8qj5CaNU%2FeOgkNl1isYgWpXqmrgnQFa4%2FLnmk6Oroj8H3WaL%2Fy9sqXvVFQyrjBFBn%2BtTOlFLCG9w3zaLdyDiTD3UzDkT9g6HJiUENxOdQy3Htbh8Kww6l2HWQYzPxLTKzHHSLmt6z6X7x5q0Ye5LGClxJeorja8zQeAUEgfXR6WXEapTb1G0TnV86BlyQlHEvrxCJlEULNolBbPikdqabHbPWhRFUIgmUsoGoAacIpcxRm24jluBuaCcPHW%2FvhbxFR7tZRbbMuddz42hu3wWhNpH6%2BqUcQMNmLuMQGOqUBgDIgh4LZHVruZu%2Fr18sC922HYhq7XMDHW%2FUmU1YaAeB%2BGd3OWhE1tkFs%2FKFUIkN1Z%2F0dbHy3ACnsUEECKtPXbOrNWjqIxPAdJIbLnU16yw%2FkPiSzkrufwxDjo0w46k27NvMHs09hQcGELF59VN%2BrCYfQtF2GacQTtbRh6Mj9U7vpthYidnNsGPRGpJKN8ZIUoXQNxz5VD6b6y2Q98qmG5DgdGvz%2F&X-Amz-Signature=d0f406af79d4c70978dd9d6cddab1066ac0e706ca5751c48dff4ae3b3979775f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ52NIKA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzmXbvYN7Ud9GEMXjQxH07bE2508XOuPDS%2FwkSIxr1yAIgV%2BssKcdvw9z8%2BKA21VfIbpgct2iGE%2BS2PSPXqUCGbJIq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAGpwg9aEHK0uEms3CrcAwRfH4rwhxVavWb9NDLICj1Q85iNf1eag65hXqOCRQ2NXhNKEVsUH91pqWOMHQssmxmICBXfD66TljF8AuK2Ak1sjLQ1Bq1BxfTz4l%2BvjjHq6MMGrDBc4OxlWgctqfGTNEXCwfVDt%2Fc7pqJhlLrX7x4%2FS3Mw98Tq1KHpdy3e%2FanIKkFDv3Zrgm1KwaDK2WL2NaC35mPK9TaOadO2IqQQ1XrhhCStbVnskkADOMRH1%2FyQ2TPCEhH96hoBbdv%2FWktdomTLs%2BbURi%2BKZ4REpC%2BldB%2Fk5MRqstQfLA1%2FGMpfWhEW3Gvt0MaJGn7fbmFO0w26eOGnAtUKugEIO5rbUvl9bXR5NhDZ3p8qj5CaNU%2FeOgkNl1isYgWpXqmrgnQFa4%2FLnmk6Oroj8H3WaL%2Fy9sqXvVFQyrjBFBn%2BtTOlFLCG9w3zaLdyDiTD3UzDkT9g6HJiUENxOdQy3Htbh8Kww6l2HWQYzPxLTKzHHSLmt6z6X7x5q0Ye5LGClxJeorja8zQeAUEgfXR6WXEapTb1G0TnV86BlyQlHEvrxCJlEULNolBbPikdqabHbPWhRFUIgmUsoGoAacIpcxRm24jluBuaCcPHW%2FvhbxFR7tZRbbMuddz42hu3wWhNpH6%2BqUcQMNmLuMQGOqUBgDIgh4LZHVruZu%2Fr18sC922HYhq7XMDHW%2FUmU1YaAeB%2BGd3OWhE1tkFs%2FKFUIkN1Z%2F0dbHy3ACnsUEECKtPXbOrNWjqIxPAdJIbLnU16yw%2FkPiSzkrufwxDjo0w46k27NvMHs09hQcGELF59VN%2BrCYfQtF2GacQTtbRh6Mj9U7vpthYidnNsGPRGpJKN8ZIUoXQNxz5VD6b6y2Q98qmG5DgdGvz%2F&X-Amz-Signature=fe24ce61cbc63574dd10bc19d30772741d9f827e0f5ceb1152e8b42739a18526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ52NIKA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzmXbvYN7Ud9GEMXjQxH07bE2508XOuPDS%2FwkSIxr1yAIgV%2BssKcdvw9z8%2BKA21VfIbpgct2iGE%2BS2PSPXqUCGbJIq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAGpwg9aEHK0uEms3CrcAwRfH4rwhxVavWb9NDLICj1Q85iNf1eag65hXqOCRQ2NXhNKEVsUH91pqWOMHQssmxmICBXfD66TljF8AuK2Ak1sjLQ1Bq1BxfTz4l%2BvjjHq6MMGrDBc4OxlWgctqfGTNEXCwfVDt%2Fc7pqJhlLrX7x4%2FS3Mw98Tq1KHpdy3e%2FanIKkFDv3Zrgm1KwaDK2WL2NaC35mPK9TaOadO2IqQQ1XrhhCStbVnskkADOMRH1%2FyQ2TPCEhH96hoBbdv%2FWktdomTLs%2BbURi%2BKZ4REpC%2BldB%2Fk5MRqstQfLA1%2FGMpfWhEW3Gvt0MaJGn7fbmFO0w26eOGnAtUKugEIO5rbUvl9bXR5NhDZ3p8qj5CaNU%2FeOgkNl1isYgWpXqmrgnQFa4%2FLnmk6Oroj8H3WaL%2Fy9sqXvVFQyrjBFBn%2BtTOlFLCG9w3zaLdyDiTD3UzDkT9g6HJiUENxOdQy3Htbh8Kww6l2HWQYzPxLTKzHHSLmt6z6X7x5q0Ye5LGClxJeorja8zQeAUEgfXR6WXEapTb1G0TnV86BlyQlHEvrxCJlEULNolBbPikdqabHbPWhRFUIgmUsoGoAacIpcxRm24jluBuaCcPHW%2FvhbxFR7tZRbbMuddz42hu3wWhNpH6%2BqUcQMNmLuMQGOqUBgDIgh4LZHVruZu%2Fr18sC922HYhq7XMDHW%2FUmU1YaAeB%2BGd3OWhE1tkFs%2FKFUIkN1Z%2F0dbHy3ACnsUEECKtPXbOrNWjqIxPAdJIbLnU16yw%2FkPiSzkrufwxDjo0w46k27NvMHs09hQcGELF59VN%2BrCYfQtF2GacQTtbRh6Mj9U7vpthYidnNsGPRGpJKN8ZIUoXQNxz5VD6b6y2Q98qmG5DgdGvz%2F&X-Amz-Signature=dc8f038d7fcb15ecc1d07dd285bcb72f2f13b87e7b22340189da23e2310ffa10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ52NIKA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzmXbvYN7Ud9GEMXjQxH07bE2508XOuPDS%2FwkSIxr1yAIgV%2BssKcdvw9z8%2BKA21VfIbpgct2iGE%2BS2PSPXqUCGbJIq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAGpwg9aEHK0uEms3CrcAwRfH4rwhxVavWb9NDLICj1Q85iNf1eag65hXqOCRQ2NXhNKEVsUH91pqWOMHQssmxmICBXfD66TljF8AuK2Ak1sjLQ1Bq1BxfTz4l%2BvjjHq6MMGrDBc4OxlWgctqfGTNEXCwfVDt%2Fc7pqJhlLrX7x4%2FS3Mw98Tq1KHpdy3e%2FanIKkFDv3Zrgm1KwaDK2WL2NaC35mPK9TaOadO2IqQQ1XrhhCStbVnskkADOMRH1%2FyQ2TPCEhH96hoBbdv%2FWktdomTLs%2BbURi%2BKZ4REpC%2BldB%2Fk5MRqstQfLA1%2FGMpfWhEW3Gvt0MaJGn7fbmFO0w26eOGnAtUKugEIO5rbUvl9bXR5NhDZ3p8qj5CaNU%2FeOgkNl1isYgWpXqmrgnQFa4%2FLnmk6Oroj8H3WaL%2Fy9sqXvVFQyrjBFBn%2BtTOlFLCG9w3zaLdyDiTD3UzDkT9g6HJiUENxOdQy3Htbh8Kww6l2HWQYzPxLTKzHHSLmt6z6X7x5q0Ye5LGClxJeorja8zQeAUEgfXR6WXEapTb1G0TnV86BlyQlHEvrxCJlEULNolBbPikdqabHbPWhRFUIgmUsoGoAacIpcxRm24jluBuaCcPHW%2FvhbxFR7tZRbbMuddz42hu3wWhNpH6%2BqUcQMNmLuMQGOqUBgDIgh4LZHVruZu%2Fr18sC922HYhq7XMDHW%2FUmU1YaAeB%2BGd3OWhE1tkFs%2FKFUIkN1Z%2F0dbHy3ACnsUEECKtPXbOrNWjqIxPAdJIbLnU16yw%2FkPiSzkrufwxDjo0w46k27NvMHs09hQcGELF59VN%2BrCYfQtF2GacQTtbRh6Mj9U7vpthYidnNsGPRGpJKN8ZIUoXQNxz5VD6b6y2Q98qmG5DgdGvz%2F&X-Amz-Signature=d436a16521d455913e4920077c153692a45ce7613a94ac8c0f34f1f9b8eabe8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ52NIKA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzmXbvYN7Ud9GEMXjQxH07bE2508XOuPDS%2FwkSIxr1yAIgV%2BssKcdvw9z8%2BKA21VfIbpgct2iGE%2BS2PSPXqUCGbJIq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAGpwg9aEHK0uEms3CrcAwRfH4rwhxVavWb9NDLICj1Q85iNf1eag65hXqOCRQ2NXhNKEVsUH91pqWOMHQssmxmICBXfD66TljF8AuK2Ak1sjLQ1Bq1BxfTz4l%2BvjjHq6MMGrDBc4OxlWgctqfGTNEXCwfVDt%2Fc7pqJhlLrX7x4%2FS3Mw98Tq1KHpdy3e%2FanIKkFDv3Zrgm1KwaDK2WL2NaC35mPK9TaOadO2IqQQ1XrhhCStbVnskkADOMRH1%2FyQ2TPCEhH96hoBbdv%2FWktdomTLs%2BbURi%2BKZ4REpC%2BldB%2Fk5MRqstQfLA1%2FGMpfWhEW3Gvt0MaJGn7fbmFO0w26eOGnAtUKugEIO5rbUvl9bXR5NhDZ3p8qj5CaNU%2FeOgkNl1isYgWpXqmrgnQFa4%2FLnmk6Oroj8H3WaL%2Fy9sqXvVFQyrjBFBn%2BtTOlFLCG9w3zaLdyDiTD3UzDkT9g6HJiUENxOdQy3Htbh8Kww6l2HWQYzPxLTKzHHSLmt6z6X7x5q0Ye5LGClxJeorja8zQeAUEgfXR6WXEapTb1G0TnV86BlyQlHEvrxCJlEULNolBbPikdqabHbPWhRFUIgmUsoGoAacIpcxRm24jluBuaCcPHW%2FvhbxFR7tZRbbMuddz42hu3wWhNpH6%2BqUcQMNmLuMQGOqUBgDIgh4LZHVruZu%2Fr18sC922HYhq7XMDHW%2FUmU1YaAeB%2BGd3OWhE1tkFs%2FKFUIkN1Z%2F0dbHy3ACnsUEECKtPXbOrNWjqIxPAdJIbLnU16yw%2FkPiSzkrufwxDjo0w46k27NvMHs09hQcGELF59VN%2BrCYfQtF2GacQTtbRh6Mj9U7vpthYidnNsGPRGpJKN8ZIUoXQNxz5VD6b6y2Q98qmG5DgdGvz%2F&X-Amz-Signature=70b4f0a48077843856b02504e1a9cb7b4905d13088c34653cfd94c98164aecc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
