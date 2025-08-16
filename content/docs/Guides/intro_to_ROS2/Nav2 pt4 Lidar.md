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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMGUAOVJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIGq%2FuGNEQEtTg2etpB64W76JW5XUEyNEObPTEDcSjy8iAiEA%2FzNT3QiA%2FqXdSKHD9iF5seROH6uBopQmEodYgmrRz74q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCu3anjJRzPxELlotircA5VoT5Ww05K5inNDw9XEr%2BkP25rVJik5WYd4C1ljxFdFq3BARWIbj4Z8%2FALD7IbaAAMUeUmwKIQelabgypKQ0mveIBDDEye%2BG%2Fb5k7NmKsBkpfrUxYMii32vBWBIQfZCJVZAf7HSh6posCfclMkcDPW7f67usfTtnHhiKg7%2FyTzqMi2eEeVwLD7oLgAmMwjiqBnku7Tp5fC%2F1nG2GABwklLnNPW1KpRfpCy4DVrDwj0TbFLcFmDOSA6bxdWo4EwDq%2BLr3TEgLiuFJ2Hiqb44JHgS3KzR1dGN7VY5CLXotdDjSTh419%2Fdaig7Ajot3fdH2f%2FAJq%2FHDIJxl9zoJUPQw881lstYI%2BDEPc4AYVR4XUq3fuMnTNomRsyw4skTbXGbL628XPCfDqqpxqN%2Bur5CB5vgv3XecmFLxIBufCfN5vGhZgugXZoZGjbo3S4sSPPpIcipGVPIE6HdnbyUWQwPKxw5o0vCXnjCwgq750mNEi5mKn7nU%2Bc2fxlZUI7B7uUEGqMbcUvlcTuKO%2FDV%2BXhdJkWg9kHWC6R8ounA7gy5GwhvS9Tm6wuc8VgJol3MmcXY62F68CYRnIjMCDd4gfS7IY8uq7XmqJSopPgVb0NxvkkzynY9CJOtesZQKkXLMOSKgMUGOqUBNoUyBPp%2Bc71O%2Bz5TzxWkgbxEWwsMn8YeEk%2FPkUY2XAHrVGzjRX6Nkw%2Fw3Kj0DRNXBUilwCv872jV9jllDN%2ByVMFUKza6elvtjBKP%2BHOO9Wq1A3b5Mvsk6bFQ4SqZTEEP88whqujqOFnUdh7f4B5Wv7yzeTl2Me%2B7BXpoHI95%2FdpH%2BlVZeXk5Zl5w78Me6OSvVhU11ahtDBymV4SVb5i9jw6zxtB8&X-Amz-Signature=34f0b49099703da396718561e467cace8e49e4d0dc6195649d77bb99e19c276d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQDQHRIR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD%2B1%2FUmHy4D6q9MVQNUy28tuF77iPsgjN5s%2FL1nk0m7HgIhALmx8kBv%2FCgHKQv%2Fr5r8%2Bvukr2BKk0eNVectdWkaREg4Kv8DCG0QABoMNjM3NDIzMTgzODA1IgxQuhvav8CBXf6wx8oq3APv8eU18hZ4iQdwyN8YapkXL%2FnDevuVcvrLUwyL9%2Fw0xANP4xHBRYzCutaLAOvR%2F3AVqYsAA5N7RDLfKsVGkCF8xs09VgtsqmzRZz3CJ2%2BznWCt7HPMp13%2Bdno3giIwDwukx6Vcl0GzhpJQ5BPfWUkVUWHOkz9DHo2fKBH7lEqyS3qxOl5Erh1mm%2FfOAfDoxbU7opzp4Ua9qodqMiPFQYyyWTPiCUpxWOII1tFGWRELme9dhPNQuV%2FT2ml3mVBmDw46VDSTPK6oN4X7wMxOhv7khh7aJcymJCjBveB%2FcmbYbdE7gYjT3egf9ptg5v4U%2FebjlSm3TItg%2F5IbuO4yJt0aj53lDkn3fjX5mN6Wz8Q6aeLkcKObUHfFWKTW9pqwXUQdGEuEZoV5VtYd2C3ejEw7pb7NVMU4ViBX8m1sCVuCetybhNjckELMW3FVwJJVVkzZOruBsUiVy5R%2BjwM0YPNXjym1%2BtykbDADplVELru1nsvoeTheyAbUXR1JW3PRlFT%2FOv30ZkW3akmQ%2BEAsLrbScYP%2BPGQgVxez0Lf7BiLc9NXlnWXTF%2FqTbXbpuYePOb7jeDFMkLxlhxg0Fj5TY3X8iDUC1XBMW3dJwCP64WeXZPVscXd3HT72VZNbfTCfi4DFBjqkAQOUJUwr5DEhfpG1C4mPjd8WS%2B108E1X87F6YCg2NzErrRK76P13BlrfWNAMmL6Is4mnMQnQkMfJfB5qrBj8z9xvIHaSJsIc81br8ANgeGY0m%2F64twpvFwJJhbI0j3eIf7U7j7c95JCIg%2FuYMu0unso3lvsTkMwR4KCTYPpOELuIeQpvElgNAe8%2BYb6D6BXHK3q6H1WYVmdDAi6qMUEOHbnTOkGr&X-Amz-Signature=dc98381bb3458dfaba48a5788eb1661cd923f8739eeb79e08982166f77313989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQDQHRIR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD%2B1%2FUmHy4D6q9MVQNUy28tuF77iPsgjN5s%2FL1nk0m7HgIhALmx8kBv%2FCgHKQv%2Fr5r8%2Bvukr2BKk0eNVectdWkaREg4Kv8DCG0QABoMNjM3NDIzMTgzODA1IgxQuhvav8CBXf6wx8oq3APv8eU18hZ4iQdwyN8YapkXL%2FnDevuVcvrLUwyL9%2Fw0xANP4xHBRYzCutaLAOvR%2F3AVqYsAA5N7RDLfKsVGkCF8xs09VgtsqmzRZz3CJ2%2BznWCt7HPMp13%2Bdno3giIwDwukx6Vcl0GzhpJQ5BPfWUkVUWHOkz9DHo2fKBH7lEqyS3qxOl5Erh1mm%2FfOAfDoxbU7opzp4Ua9qodqMiPFQYyyWTPiCUpxWOII1tFGWRELme9dhPNQuV%2FT2ml3mVBmDw46VDSTPK6oN4X7wMxOhv7khh7aJcymJCjBveB%2FcmbYbdE7gYjT3egf9ptg5v4U%2FebjlSm3TItg%2F5IbuO4yJt0aj53lDkn3fjX5mN6Wz8Q6aeLkcKObUHfFWKTW9pqwXUQdGEuEZoV5VtYd2C3ejEw7pb7NVMU4ViBX8m1sCVuCetybhNjckELMW3FVwJJVVkzZOruBsUiVy5R%2BjwM0YPNXjym1%2BtykbDADplVELru1nsvoeTheyAbUXR1JW3PRlFT%2FOv30ZkW3akmQ%2BEAsLrbScYP%2BPGQgVxez0Lf7BiLc9NXlnWXTF%2FqTbXbpuYePOb7jeDFMkLxlhxg0Fj5TY3X8iDUC1XBMW3dJwCP64WeXZPVscXd3HT72VZNbfTCfi4DFBjqkAQOUJUwr5DEhfpG1C4mPjd8WS%2B108E1X87F6YCg2NzErrRK76P13BlrfWNAMmL6Is4mnMQnQkMfJfB5qrBj8z9xvIHaSJsIc81br8ANgeGY0m%2F64twpvFwJJhbI0j3eIf7U7j7c95JCIg%2FuYMu0unso3lvsTkMwR4KCTYPpOELuIeQpvElgNAe8%2BYb6D6BXHK3q6H1WYVmdDAi6qMUEOHbnTOkGr&X-Amz-Signature=c137a4c0ad31ba22a81d008bff6dbf28d3660ffc663e0d0be870531d68d579a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQDQHRIR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD%2B1%2FUmHy4D6q9MVQNUy28tuF77iPsgjN5s%2FL1nk0m7HgIhALmx8kBv%2FCgHKQv%2Fr5r8%2Bvukr2BKk0eNVectdWkaREg4Kv8DCG0QABoMNjM3NDIzMTgzODA1IgxQuhvav8CBXf6wx8oq3APv8eU18hZ4iQdwyN8YapkXL%2FnDevuVcvrLUwyL9%2Fw0xANP4xHBRYzCutaLAOvR%2F3AVqYsAA5N7RDLfKsVGkCF8xs09VgtsqmzRZz3CJ2%2BznWCt7HPMp13%2Bdno3giIwDwukx6Vcl0GzhpJQ5BPfWUkVUWHOkz9DHo2fKBH7lEqyS3qxOl5Erh1mm%2FfOAfDoxbU7opzp4Ua9qodqMiPFQYyyWTPiCUpxWOII1tFGWRELme9dhPNQuV%2FT2ml3mVBmDw46VDSTPK6oN4X7wMxOhv7khh7aJcymJCjBveB%2FcmbYbdE7gYjT3egf9ptg5v4U%2FebjlSm3TItg%2F5IbuO4yJt0aj53lDkn3fjX5mN6Wz8Q6aeLkcKObUHfFWKTW9pqwXUQdGEuEZoV5VtYd2C3ejEw7pb7NVMU4ViBX8m1sCVuCetybhNjckELMW3FVwJJVVkzZOruBsUiVy5R%2BjwM0YPNXjym1%2BtykbDADplVELru1nsvoeTheyAbUXR1JW3PRlFT%2FOv30ZkW3akmQ%2BEAsLrbScYP%2BPGQgVxez0Lf7BiLc9NXlnWXTF%2FqTbXbpuYePOb7jeDFMkLxlhxg0Fj5TY3X8iDUC1XBMW3dJwCP64WeXZPVscXd3HT72VZNbfTCfi4DFBjqkAQOUJUwr5DEhfpG1C4mPjd8WS%2B108E1X87F6YCg2NzErrRK76P13BlrfWNAMmL6Is4mnMQnQkMfJfB5qrBj8z9xvIHaSJsIc81br8ANgeGY0m%2F64twpvFwJJhbI0j3eIf7U7j7c95JCIg%2FuYMu0unso3lvsTkMwR4KCTYPpOELuIeQpvElgNAe8%2BYb6D6BXHK3q6H1WYVmdDAi6qMUEOHbnTOkGr&X-Amz-Signature=80bf4649092be88efa38f8ea61e51c74d12d788d5aaff7e846768215136e560d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQDQHRIR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD%2B1%2FUmHy4D6q9MVQNUy28tuF77iPsgjN5s%2FL1nk0m7HgIhALmx8kBv%2FCgHKQv%2Fr5r8%2Bvukr2BKk0eNVectdWkaREg4Kv8DCG0QABoMNjM3NDIzMTgzODA1IgxQuhvav8CBXf6wx8oq3APv8eU18hZ4iQdwyN8YapkXL%2FnDevuVcvrLUwyL9%2Fw0xANP4xHBRYzCutaLAOvR%2F3AVqYsAA5N7RDLfKsVGkCF8xs09VgtsqmzRZz3CJ2%2BznWCt7HPMp13%2Bdno3giIwDwukx6Vcl0GzhpJQ5BPfWUkVUWHOkz9DHo2fKBH7lEqyS3qxOl5Erh1mm%2FfOAfDoxbU7opzp4Ua9qodqMiPFQYyyWTPiCUpxWOII1tFGWRELme9dhPNQuV%2FT2ml3mVBmDw46VDSTPK6oN4X7wMxOhv7khh7aJcymJCjBveB%2FcmbYbdE7gYjT3egf9ptg5v4U%2FebjlSm3TItg%2F5IbuO4yJt0aj53lDkn3fjX5mN6Wz8Q6aeLkcKObUHfFWKTW9pqwXUQdGEuEZoV5VtYd2C3ejEw7pb7NVMU4ViBX8m1sCVuCetybhNjckELMW3FVwJJVVkzZOruBsUiVy5R%2BjwM0YPNXjym1%2BtykbDADplVELru1nsvoeTheyAbUXR1JW3PRlFT%2FOv30ZkW3akmQ%2BEAsLrbScYP%2BPGQgVxez0Lf7BiLc9NXlnWXTF%2FqTbXbpuYePOb7jeDFMkLxlhxg0Fj5TY3X8iDUC1XBMW3dJwCP64WeXZPVscXd3HT72VZNbfTCfi4DFBjqkAQOUJUwr5DEhfpG1C4mPjd8WS%2B108E1X87F6YCg2NzErrRK76P13BlrfWNAMmL6Is4mnMQnQkMfJfB5qrBj8z9xvIHaSJsIc81br8ANgeGY0m%2F64twpvFwJJhbI0j3eIf7U7j7c95JCIg%2FuYMu0unso3lvsTkMwR4KCTYPpOELuIeQpvElgNAe8%2BYb6D6BXHK3q6H1WYVmdDAi6qMUEOHbnTOkGr&X-Amz-Signature=ccb653286cfbba5dbdd3d15d54d0937a9fe357035963c335756eb2acd10561fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQDQHRIR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD%2B1%2FUmHy4D6q9MVQNUy28tuF77iPsgjN5s%2FL1nk0m7HgIhALmx8kBv%2FCgHKQv%2Fr5r8%2Bvukr2BKk0eNVectdWkaREg4Kv8DCG0QABoMNjM3NDIzMTgzODA1IgxQuhvav8CBXf6wx8oq3APv8eU18hZ4iQdwyN8YapkXL%2FnDevuVcvrLUwyL9%2Fw0xANP4xHBRYzCutaLAOvR%2F3AVqYsAA5N7RDLfKsVGkCF8xs09VgtsqmzRZz3CJ2%2BznWCt7HPMp13%2Bdno3giIwDwukx6Vcl0GzhpJQ5BPfWUkVUWHOkz9DHo2fKBH7lEqyS3qxOl5Erh1mm%2FfOAfDoxbU7opzp4Ua9qodqMiPFQYyyWTPiCUpxWOII1tFGWRELme9dhPNQuV%2FT2ml3mVBmDw46VDSTPK6oN4X7wMxOhv7khh7aJcymJCjBveB%2FcmbYbdE7gYjT3egf9ptg5v4U%2FebjlSm3TItg%2F5IbuO4yJt0aj53lDkn3fjX5mN6Wz8Q6aeLkcKObUHfFWKTW9pqwXUQdGEuEZoV5VtYd2C3ejEw7pb7NVMU4ViBX8m1sCVuCetybhNjckELMW3FVwJJVVkzZOruBsUiVy5R%2BjwM0YPNXjym1%2BtykbDADplVELru1nsvoeTheyAbUXR1JW3PRlFT%2FOv30ZkW3akmQ%2BEAsLrbScYP%2BPGQgVxez0Lf7BiLc9NXlnWXTF%2FqTbXbpuYePOb7jeDFMkLxlhxg0Fj5TY3X8iDUC1XBMW3dJwCP64WeXZPVscXd3HT72VZNbfTCfi4DFBjqkAQOUJUwr5DEhfpG1C4mPjd8WS%2B108E1X87F6YCg2NzErrRK76P13BlrfWNAMmL6Is4mnMQnQkMfJfB5qrBj8z9xvIHaSJsIc81br8ANgeGY0m%2F64twpvFwJJhbI0j3eIf7U7j7c95JCIg%2FuYMu0unso3lvsTkMwR4KCTYPpOELuIeQpvElgNAe8%2BYb6D6BXHK3q6H1WYVmdDAi6qMUEOHbnTOkGr&X-Amz-Signature=e49ff31c689e48922787cdc6e9b931e93bbbd9f3836757c6e3687f560caf5ebf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQDQHRIR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD%2B1%2FUmHy4D6q9MVQNUy28tuF77iPsgjN5s%2FL1nk0m7HgIhALmx8kBv%2FCgHKQv%2Fr5r8%2Bvukr2BKk0eNVectdWkaREg4Kv8DCG0QABoMNjM3NDIzMTgzODA1IgxQuhvav8CBXf6wx8oq3APv8eU18hZ4iQdwyN8YapkXL%2FnDevuVcvrLUwyL9%2Fw0xANP4xHBRYzCutaLAOvR%2F3AVqYsAA5N7RDLfKsVGkCF8xs09VgtsqmzRZz3CJ2%2BznWCt7HPMp13%2Bdno3giIwDwukx6Vcl0GzhpJQ5BPfWUkVUWHOkz9DHo2fKBH7lEqyS3qxOl5Erh1mm%2FfOAfDoxbU7opzp4Ua9qodqMiPFQYyyWTPiCUpxWOII1tFGWRELme9dhPNQuV%2FT2ml3mVBmDw46VDSTPK6oN4X7wMxOhv7khh7aJcymJCjBveB%2FcmbYbdE7gYjT3egf9ptg5v4U%2FebjlSm3TItg%2F5IbuO4yJt0aj53lDkn3fjX5mN6Wz8Q6aeLkcKObUHfFWKTW9pqwXUQdGEuEZoV5VtYd2C3ejEw7pb7NVMU4ViBX8m1sCVuCetybhNjckELMW3FVwJJVVkzZOruBsUiVy5R%2BjwM0YPNXjym1%2BtykbDADplVELru1nsvoeTheyAbUXR1JW3PRlFT%2FOv30ZkW3akmQ%2BEAsLrbScYP%2BPGQgVxez0Lf7BiLc9NXlnWXTF%2FqTbXbpuYePOb7jeDFMkLxlhxg0Fj5TY3X8iDUC1XBMW3dJwCP64WeXZPVscXd3HT72VZNbfTCfi4DFBjqkAQOUJUwr5DEhfpG1C4mPjd8WS%2B108E1X87F6YCg2NzErrRK76P13BlrfWNAMmL6Is4mnMQnQkMfJfB5qrBj8z9xvIHaSJsIc81br8ANgeGY0m%2F64twpvFwJJhbI0j3eIf7U7j7c95JCIg%2FuYMu0unso3lvsTkMwR4KCTYPpOELuIeQpvElgNAe8%2BYb6D6BXHK3q6H1WYVmdDAi6qMUEOHbnTOkGr&X-Amz-Signature=541460e711deb7c40da7bfa808c77ad9699e174520982ddadff2f24b00f979d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQDQHRIR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD%2B1%2FUmHy4D6q9MVQNUy28tuF77iPsgjN5s%2FL1nk0m7HgIhALmx8kBv%2FCgHKQv%2Fr5r8%2Bvukr2BKk0eNVectdWkaREg4Kv8DCG0QABoMNjM3NDIzMTgzODA1IgxQuhvav8CBXf6wx8oq3APv8eU18hZ4iQdwyN8YapkXL%2FnDevuVcvrLUwyL9%2Fw0xANP4xHBRYzCutaLAOvR%2F3AVqYsAA5N7RDLfKsVGkCF8xs09VgtsqmzRZz3CJ2%2BznWCt7HPMp13%2Bdno3giIwDwukx6Vcl0GzhpJQ5BPfWUkVUWHOkz9DHo2fKBH7lEqyS3qxOl5Erh1mm%2FfOAfDoxbU7opzp4Ua9qodqMiPFQYyyWTPiCUpxWOII1tFGWRELme9dhPNQuV%2FT2ml3mVBmDw46VDSTPK6oN4X7wMxOhv7khh7aJcymJCjBveB%2FcmbYbdE7gYjT3egf9ptg5v4U%2FebjlSm3TItg%2F5IbuO4yJt0aj53lDkn3fjX5mN6Wz8Q6aeLkcKObUHfFWKTW9pqwXUQdGEuEZoV5VtYd2C3ejEw7pb7NVMU4ViBX8m1sCVuCetybhNjckELMW3FVwJJVVkzZOruBsUiVy5R%2BjwM0YPNXjym1%2BtykbDADplVELru1nsvoeTheyAbUXR1JW3PRlFT%2FOv30ZkW3akmQ%2BEAsLrbScYP%2BPGQgVxez0Lf7BiLc9NXlnWXTF%2FqTbXbpuYePOb7jeDFMkLxlhxg0Fj5TY3X8iDUC1XBMW3dJwCP64WeXZPVscXd3HT72VZNbfTCfi4DFBjqkAQOUJUwr5DEhfpG1C4mPjd8WS%2B108E1X87F6YCg2NzErrRK76P13BlrfWNAMmL6Is4mnMQnQkMfJfB5qrBj8z9xvIHaSJsIc81br8ANgeGY0m%2F64twpvFwJJhbI0j3eIf7U7j7c95JCIg%2FuYMu0unso3lvsTkMwR4KCTYPpOELuIeQpvElgNAe8%2BYb6D6BXHK3q6H1WYVmdDAi6qMUEOHbnTOkGr&X-Amz-Signature=9bdae5b83a5269cc47530735a20508a615f81dcb55da9420332f0ce7b243767f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQDQHRIR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD%2B1%2FUmHy4D6q9MVQNUy28tuF77iPsgjN5s%2FL1nk0m7HgIhALmx8kBv%2FCgHKQv%2Fr5r8%2Bvukr2BKk0eNVectdWkaREg4Kv8DCG0QABoMNjM3NDIzMTgzODA1IgxQuhvav8CBXf6wx8oq3APv8eU18hZ4iQdwyN8YapkXL%2FnDevuVcvrLUwyL9%2Fw0xANP4xHBRYzCutaLAOvR%2F3AVqYsAA5N7RDLfKsVGkCF8xs09VgtsqmzRZz3CJ2%2BznWCt7HPMp13%2Bdno3giIwDwukx6Vcl0GzhpJQ5BPfWUkVUWHOkz9DHo2fKBH7lEqyS3qxOl5Erh1mm%2FfOAfDoxbU7opzp4Ua9qodqMiPFQYyyWTPiCUpxWOII1tFGWRELme9dhPNQuV%2FT2ml3mVBmDw46VDSTPK6oN4X7wMxOhv7khh7aJcymJCjBveB%2FcmbYbdE7gYjT3egf9ptg5v4U%2FebjlSm3TItg%2F5IbuO4yJt0aj53lDkn3fjX5mN6Wz8Q6aeLkcKObUHfFWKTW9pqwXUQdGEuEZoV5VtYd2C3ejEw7pb7NVMU4ViBX8m1sCVuCetybhNjckELMW3FVwJJVVkzZOruBsUiVy5R%2BjwM0YPNXjym1%2BtykbDADplVELru1nsvoeTheyAbUXR1JW3PRlFT%2FOv30ZkW3akmQ%2BEAsLrbScYP%2BPGQgVxez0Lf7BiLc9NXlnWXTF%2FqTbXbpuYePOb7jeDFMkLxlhxg0Fj5TY3X8iDUC1XBMW3dJwCP64WeXZPVscXd3HT72VZNbfTCfi4DFBjqkAQOUJUwr5DEhfpG1C4mPjd8WS%2B108E1X87F6YCg2NzErrRK76P13BlrfWNAMmL6Is4mnMQnQkMfJfB5qrBj8z9xvIHaSJsIc81br8ANgeGY0m%2F64twpvFwJJhbI0j3eIf7U7j7c95JCIg%2FuYMu0unso3lvsTkMwR4KCTYPpOELuIeQpvElgNAe8%2BYb6D6BXHK3q6H1WYVmdDAi6qMUEOHbnTOkGr&X-Amz-Signature=4cbce1881e35646f80a87cb548c7d6a9ce7566f04ae8ec783b64ff0c1420741e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQDQHRIR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD%2B1%2FUmHy4D6q9MVQNUy28tuF77iPsgjN5s%2FL1nk0m7HgIhALmx8kBv%2FCgHKQv%2Fr5r8%2Bvukr2BKk0eNVectdWkaREg4Kv8DCG0QABoMNjM3NDIzMTgzODA1IgxQuhvav8CBXf6wx8oq3APv8eU18hZ4iQdwyN8YapkXL%2FnDevuVcvrLUwyL9%2Fw0xANP4xHBRYzCutaLAOvR%2F3AVqYsAA5N7RDLfKsVGkCF8xs09VgtsqmzRZz3CJ2%2BznWCt7HPMp13%2Bdno3giIwDwukx6Vcl0GzhpJQ5BPfWUkVUWHOkz9DHo2fKBH7lEqyS3qxOl5Erh1mm%2FfOAfDoxbU7opzp4Ua9qodqMiPFQYyyWTPiCUpxWOII1tFGWRELme9dhPNQuV%2FT2ml3mVBmDw46VDSTPK6oN4X7wMxOhv7khh7aJcymJCjBveB%2FcmbYbdE7gYjT3egf9ptg5v4U%2FebjlSm3TItg%2F5IbuO4yJt0aj53lDkn3fjX5mN6Wz8Q6aeLkcKObUHfFWKTW9pqwXUQdGEuEZoV5VtYd2C3ejEw7pb7NVMU4ViBX8m1sCVuCetybhNjckELMW3FVwJJVVkzZOruBsUiVy5R%2BjwM0YPNXjym1%2BtykbDADplVELru1nsvoeTheyAbUXR1JW3PRlFT%2FOv30ZkW3akmQ%2BEAsLrbScYP%2BPGQgVxez0Lf7BiLc9NXlnWXTF%2FqTbXbpuYePOb7jeDFMkLxlhxg0Fj5TY3X8iDUC1XBMW3dJwCP64WeXZPVscXd3HT72VZNbfTCfi4DFBjqkAQOUJUwr5DEhfpG1C4mPjd8WS%2B108E1X87F6YCg2NzErrRK76P13BlrfWNAMmL6Is4mnMQnQkMfJfB5qrBj8z9xvIHaSJsIc81br8ANgeGY0m%2F64twpvFwJJhbI0j3eIf7U7j7c95JCIg%2FuYMu0unso3lvsTkMwR4KCTYPpOELuIeQpvElgNAe8%2BYb6D6BXHK3q6H1WYVmdDAi6qMUEOHbnTOkGr&X-Amz-Signature=5266e210144f329bf4f97c59151bc23c94abc51ed8c7289a5f494c74fc05c0a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQDQHRIR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD%2B1%2FUmHy4D6q9MVQNUy28tuF77iPsgjN5s%2FL1nk0m7HgIhALmx8kBv%2FCgHKQv%2Fr5r8%2Bvukr2BKk0eNVectdWkaREg4Kv8DCG0QABoMNjM3NDIzMTgzODA1IgxQuhvav8CBXf6wx8oq3APv8eU18hZ4iQdwyN8YapkXL%2FnDevuVcvrLUwyL9%2Fw0xANP4xHBRYzCutaLAOvR%2F3AVqYsAA5N7RDLfKsVGkCF8xs09VgtsqmzRZz3CJ2%2BznWCt7HPMp13%2Bdno3giIwDwukx6Vcl0GzhpJQ5BPfWUkVUWHOkz9DHo2fKBH7lEqyS3qxOl5Erh1mm%2FfOAfDoxbU7opzp4Ua9qodqMiPFQYyyWTPiCUpxWOII1tFGWRELme9dhPNQuV%2FT2ml3mVBmDw46VDSTPK6oN4X7wMxOhv7khh7aJcymJCjBveB%2FcmbYbdE7gYjT3egf9ptg5v4U%2FebjlSm3TItg%2F5IbuO4yJt0aj53lDkn3fjX5mN6Wz8Q6aeLkcKObUHfFWKTW9pqwXUQdGEuEZoV5VtYd2C3ejEw7pb7NVMU4ViBX8m1sCVuCetybhNjckELMW3FVwJJVVkzZOruBsUiVy5R%2BjwM0YPNXjym1%2BtykbDADplVELru1nsvoeTheyAbUXR1JW3PRlFT%2FOv30ZkW3akmQ%2BEAsLrbScYP%2BPGQgVxez0Lf7BiLc9NXlnWXTF%2FqTbXbpuYePOb7jeDFMkLxlhxg0Fj5TY3X8iDUC1XBMW3dJwCP64WeXZPVscXd3HT72VZNbfTCfi4DFBjqkAQOUJUwr5DEhfpG1C4mPjd8WS%2B108E1X87F6YCg2NzErrRK76P13BlrfWNAMmL6Is4mnMQnQkMfJfB5qrBj8z9xvIHaSJsIc81br8ANgeGY0m%2F64twpvFwJJhbI0j3eIf7U7j7c95JCIg%2FuYMu0unso3lvsTkMwR4KCTYPpOELuIeQpvElgNAe8%2BYb6D6BXHK3q6H1WYVmdDAi6qMUEOHbnTOkGr&X-Amz-Signature=ccb653286cfbba5dbdd3d15d54d0937a9fe357035963c335756eb2acd10561fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
