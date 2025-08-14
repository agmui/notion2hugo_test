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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIISHVZL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQD3MPPVERBII5jIo5hTUGc6wmNwxCVWKuCfarHSDKlOcQIgeTZqfdth6c6uld8Pme0YRfyPri1qWwfJLIPuK0HFHXYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDNBH1TjOQE27YfsW2CrcAzPBruGhCzOP6utMoMZgAEyhGXQT543MtxL5gUodC%2B5wXsxEy3ocVxEclGL3BFf20yBRNVqJ%2FiJXdGML1tVX3edHpMiUk7HOkrR3h32fs0AHujTEOaZ%2B1nhGqRlIW5xu2uDXH40Aq37N3K28jbisIh%2FqRXJ1YW79IDSS8PvZIo36YAybzv3xnGytj%2Fd0%2BjjicUcB9IgxkSxbS5f1raquNVPUTBOVjItj4WcEVEDhYb0abelC3YknisQ9bArIy7e%2BYga4t8RXeHQ6h05wa7mg7Z4XiCHZg8%2BAnhmxOmxCFmCyVas9PzRDium3WBuqOihRI7nB%2FZJMi%2B8wmGEthtW9nRIHClscMZANkyhsB5YiWvviqtPQAVAJ0FSnVZjbVZIK3vSlaUsAtKhq7rZSgOKuYVOSCm7vgT3No8IfED6qSBuqdyOrLBulNtTjPZM%2B6Sn7gsWPHzUqcbc%2BAlhYJELzvr6dnv79qjd7wU17AtwgYLpihIxsYkbDte7843TZvpyoKN1SkJnI6ZpwmCdFeNYjq6hoTEETmeCw%2B78b%2BADCUTK5eAN7E13%2BtvhL087JX6QexvVMxkPthDT%2FlssqLww%2Bb63S1hl8MxmD%2BcldRqeAdDDnRyP7GtFUbSf3s55CMMrC%2BMQGOqUBTiM6HP6l6ZSFYvP4ctc4RMru0bvABSLjyf7V9TdUvFkd591Gbywx8J6pIPRmJqYlBs4cYNZ4Jf9DqxvuiAosa5xItoIRJl625lvjIH8wzAW%2FmrMD8vyX66qnMIe%2BE0EiBZRkAKK5zAEtx2fzSxi3ok2XfSAh5RqcK2cOxnKCSSMalrPet3lTfo0L5Z9T4bA4LXD5z4vpa0m5MHfPFehmQHsGA0Mk&X-Amz-Signature=931adf5f0a606ca12a981c72be528c0b78477ee35963a4ac13261638ac0ab3b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTMELDJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDOQe5UchMnHNNwThDUq%2BgQ9puApzUQjDIMmohS7HrEDQIgQfDPBplcNUgyFzgaJX91kZP59Rd%2FAtaDjX6SDZv2jiYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPbZJp1tBsABzw1h4yrcA3DqOYysmF7cxWLtBm2VXgFyJBvQAA27dwi2QUooQx1igZaPmDwltYSHTajy2RrROgGcvf7buUb6L4GIFj3oU3gqou%2BybyuzKxgg%2BKET04IFnsDA8jiFR%2BReSa0jLy5OQUOSCBJ2ghB%2BtPrs8yMeTcvRV7AscliZdwhroFLIFq8B6czI9MuB7n7Q9FxWpewlfG9LKOO%2F8Hbca0K9Eg%2BNmFV9P%2FwRDmepPJrby2GTuouCoc5AQlJR9jJuZ82vku321yal7aMex3YLHCiqBAUvrNWPJUUpAUT9tNW4NNepldhvfAEEHajtCN2WfXBy73Z1Pr9Gw6g1x4m%2FKJIVf3a62KW1766fRf%2FuoJvtZhPoLDXpH4ib0H815ylPVkDn94BkODDuJSIVLuvnXdxyFWQ0ymAnob4wyTnyZWiHiVj1w4ztXQd83JI%2FcjdDROVoP6ip4hT85w78wa6JR6DWnu2MpJjOnyUkrUMM4hyNRVhv7ZowZPUkLyu6PbhadH9bVUh7c33m4WNfXHn3altpzkyAA1%2Fyfsd2ioj2RULsAPZH3jWfiCqC8fEkfwXCw%2BhqlYT9xF6lB9USUGZaT0KeytCMuvDTJ1bHN4PzJXtKd1IEZOk6mqUnKXtspjrTMrJrMOnC%2BMQGOqUBIP75S%2B4027%2B2DH2Qtfnl%2BQWjdhhQGjFa4N3zft%2FtMBKVgKgG9W7WWhcenmG71978lD3hqoOvH2GxpNwvz3%2BlZl56%2FJFBnIy6HonoOT82pLs%2B6EHeyO8v3edK%2BQXD1psKYGZtCJmXikvrtMCPQNI4fiE0DHbv4e8qWdthUx%2F3E7CP0beh49dwGvw1s%2BZq%2FhnYVYVt8z0nRw%2FSowwUxaWU2ZeHHyiY&X-Amz-Signature=c37009b10154d305ac7146a7d589b2e2b62355b22fc00d88445616e017818cef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTMELDJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDOQe5UchMnHNNwThDUq%2BgQ9puApzUQjDIMmohS7HrEDQIgQfDPBplcNUgyFzgaJX91kZP59Rd%2FAtaDjX6SDZv2jiYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPbZJp1tBsABzw1h4yrcA3DqOYysmF7cxWLtBm2VXgFyJBvQAA27dwi2QUooQx1igZaPmDwltYSHTajy2RrROgGcvf7buUb6L4GIFj3oU3gqou%2BybyuzKxgg%2BKET04IFnsDA8jiFR%2BReSa0jLy5OQUOSCBJ2ghB%2BtPrs8yMeTcvRV7AscliZdwhroFLIFq8B6czI9MuB7n7Q9FxWpewlfG9LKOO%2F8Hbca0K9Eg%2BNmFV9P%2FwRDmepPJrby2GTuouCoc5AQlJR9jJuZ82vku321yal7aMex3YLHCiqBAUvrNWPJUUpAUT9tNW4NNepldhvfAEEHajtCN2WfXBy73Z1Pr9Gw6g1x4m%2FKJIVf3a62KW1766fRf%2FuoJvtZhPoLDXpH4ib0H815ylPVkDn94BkODDuJSIVLuvnXdxyFWQ0ymAnob4wyTnyZWiHiVj1w4ztXQd83JI%2FcjdDROVoP6ip4hT85w78wa6JR6DWnu2MpJjOnyUkrUMM4hyNRVhv7ZowZPUkLyu6PbhadH9bVUh7c33m4WNfXHn3altpzkyAA1%2Fyfsd2ioj2RULsAPZH3jWfiCqC8fEkfwXCw%2BhqlYT9xF6lB9USUGZaT0KeytCMuvDTJ1bHN4PzJXtKd1IEZOk6mqUnKXtspjrTMrJrMOnC%2BMQGOqUBIP75S%2B4027%2B2DH2Qtfnl%2BQWjdhhQGjFa4N3zft%2FtMBKVgKgG9W7WWhcenmG71978lD3hqoOvH2GxpNwvz3%2BlZl56%2FJFBnIy6HonoOT82pLs%2B6EHeyO8v3edK%2BQXD1psKYGZtCJmXikvrtMCPQNI4fiE0DHbv4e8qWdthUx%2F3E7CP0beh49dwGvw1s%2BZq%2FhnYVYVt8z0nRw%2FSowwUxaWU2ZeHHyiY&X-Amz-Signature=afb88594aedd33e968dae999f1047f7742996e4296b0ed60b1231c3b9c1d79bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTMELDJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDOQe5UchMnHNNwThDUq%2BgQ9puApzUQjDIMmohS7HrEDQIgQfDPBplcNUgyFzgaJX91kZP59Rd%2FAtaDjX6SDZv2jiYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPbZJp1tBsABzw1h4yrcA3DqOYysmF7cxWLtBm2VXgFyJBvQAA27dwi2QUooQx1igZaPmDwltYSHTajy2RrROgGcvf7buUb6L4GIFj3oU3gqou%2BybyuzKxgg%2BKET04IFnsDA8jiFR%2BReSa0jLy5OQUOSCBJ2ghB%2BtPrs8yMeTcvRV7AscliZdwhroFLIFq8B6czI9MuB7n7Q9FxWpewlfG9LKOO%2F8Hbca0K9Eg%2BNmFV9P%2FwRDmepPJrby2GTuouCoc5AQlJR9jJuZ82vku321yal7aMex3YLHCiqBAUvrNWPJUUpAUT9tNW4NNepldhvfAEEHajtCN2WfXBy73Z1Pr9Gw6g1x4m%2FKJIVf3a62KW1766fRf%2FuoJvtZhPoLDXpH4ib0H815ylPVkDn94BkODDuJSIVLuvnXdxyFWQ0ymAnob4wyTnyZWiHiVj1w4ztXQd83JI%2FcjdDROVoP6ip4hT85w78wa6JR6DWnu2MpJjOnyUkrUMM4hyNRVhv7ZowZPUkLyu6PbhadH9bVUh7c33m4WNfXHn3altpzkyAA1%2Fyfsd2ioj2RULsAPZH3jWfiCqC8fEkfwXCw%2BhqlYT9xF6lB9USUGZaT0KeytCMuvDTJ1bHN4PzJXtKd1IEZOk6mqUnKXtspjrTMrJrMOnC%2BMQGOqUBIP75S%2B4027%2B2DH2Qtfnl%2BQWjdhhQGjFa4N3zft%2FtMBKVgKgG9W7WWhcenmG71978lD3hqoOvH2GxpNwvz3%2BlZl56%2FJFBnIy6HonoOT82pLs%2B6EHeyO8v3edK%2BQXD1psKYGZtCJmXikvrtMCPQNI4fiE0DHbv4e8qWdthUx%2F3E7CP0beh49dwGvw1s%2BZq%2FhnYVYVt8z0nRw%2FSowwUxaWU2ZeHHyiY&X-Amz-Signature=3e99a3e80315a3adca9e11938613719c9d233fa2d106d145b048093e41cd2242&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTMELDJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDOQe5UchMnHNNwThDUq%2BgQ9puApzUQjDIMmohS7HrEDQIgQfDPBplcNUgyFzgaJX91kZP59Rd%2FAtaDjX6SDZv2jiYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPbZJp1tBsABzw1h4yrcA3DqOYysmF7cxWLtBm2VXgFyJBvQAA27dwi2QUooQx1igZaPmDwltYSHTajy2RrROgGcvf7buUb6L4GIFj3oU3gqou%2BybyuzKxgg%2BKET04IFnsDA8jiFR%2BReSa0jLy5OQUOSCBJ2ghB%2BtPrs8yMeTcvRV7AscliZdwhroFLIFq8B6czI9MuB7n7Q9FxWpewlfG9LKOO%2F8Hbca0K9Eg%2BNmFV9P%2FwRDmepPJrby2GTuouCoc5AQlJR9jJuZ82vku321yal7aMex3YLHCiqBAUvrNWPJUUpAUT9tNW4NNepldhvfAEEHajtCN2WfXBy73Z1Pr9Gw6g1x4m%2FKJIVf3a62KW1766fRf%2FuoJvtZhPoLDXpH4ib0H815ylPVkDn94BkODDuJSIVLuvnXdxyFWQ0ymAnob4wyTnyZWiHiVj1w4ztXQd83JI%2FcjdDROVoP6ip4hT85w78wa6JR6DWnu2MpJjOnyUkrUMM4hyNRVhv7ZowZPUkLyu6PbhadH9bVUh7c33m4WNfXHn3altpzkyAA1%2Fyfsd2ioj2RULsAPZH3jWfiCqC8fEkfwXCw%2BhqlYT9xF6lB9USUGZaT0KeytCMuvDTJ1bHN4PzJXtKd1IEZOk6mqUnKXtspjrTMrJrMOnC%2BMQGOqUBIP75S%2B4027%2B2DH2Qtfnl%2BQWjdhhQGjFa4N3zft%2FtMBKVgKgG9W7WWhcenmG71978lD3hqoOvH2GxpNwvz3%2BlZl56%2FJFBnIy6HonoOT82pLs%2B6EHeyO8v3edK%2BQXD1psKYGZtCJmXikvrtMCPQNI4fiE0DHbv4e8qWdthUx%2F3E7CP0beh49dwGvw1s%2BZq%2FhnYVYVt8z0nRw%2FSowwUxaWU2ZeHHyiY&X-Amz-Signature=f7373c3b726490a7f02b36e59a8ed32e7b8e87b82eae761d6c668e83e6976c95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTMELDJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDOQe5UchMnHNNwThDUq%2BgQ9puApzUQjDIMmohS7HrEDQIgQfDPBplcNUgyFzgaJX91kZP59Rd%2FAtaDjX6SDZv2jiYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPbZJp1tBsABzw1h4yrcA3DqOYysmF7cxWLtBm2VXgFyJBvQAA27dwi2QUooQx1igZaPmDwltYSHTajy2RrROgGcvf7buUb6L4GIFj3oU3gqou%2BybyuzKxgg%2BKET04IFnsDA8jiFR%2BReSa0jLy5OQUOSCBJ2ghB%2BtPrs8yMeTcvRV7AscliZdwhroFLIFq8B6czI9MuB7n7Q9FxWpewlfG9LKOO%2F8Hbca0K9Eg%2BNmFV9P%2FwRDmepPJrby2GTuouCoc5AQlJR9jJuZ82vku321yal7aMex3YLHCiqBAUvrNWPJUUpAUT9tNW4NNepldhvfAEEHajtCN2WfXBy73Z1Pr9Gw6g1x4m%2FKJIVf3a62KW1766fRf%2FuoJvtZhPoLDXpH4ib0H815ylPVkDn94BkODDuJSIVLuvnXdxyFWQ0ymAnob4wyTnyZWiHiVj1w4ztXQd83JI%2FcjdDROVoP6ip4hT85w78wa6JR6DWnu2MpJjOnyUkrUMM4hyNRVhv7ZowZPUkLyu6PbhadH9bVUh7c33m4WNfXHn3altpzkyAA1%2Fyfsd2ioj2RULsAPZH3jWfiCqC8fEkfwXCw%2BhqlYT9xF6lB9USUGZaT0KeytCMuvDTJ1bHN4PzJXtKd1IEZOk6mqUnKXtspjrTMrJrMOnC%2BMQGOqUBIP75S%2B4027%2B2DH2Qtfnl%2BQWjdhhQGjFa4N3zft%2FtMBKVgKgG9W7WWhcenmG71978lD3hqoOvH2GxpNwvz3%2BlZl56%2FJFBnIy6HonoOT82pLs%2B6EHeyO8v3edK%2BQXD1psKYGZtCJmXikvrtMCPQNI4fiE0DHbv4e8qWdthUx%2F3E7CP0beh49dwGvw1s%2BZq%2FhnYVYVt8z0nRw%2FSowwUxaWU2ZeHHyiY&X-Amz-Signature=7b678b89f0c8d91fcfda7cadbea07a8c7b745c2a7dece178c56e62e9f3ead795&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTMELDJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDOQe5UchMnHNNwThDUq%2BgQ9puApzUQjDIMmohS7HrEDQIgQfDPBplcNUgyFzgaJX91kZP59Rd%2FAtaDjX6SDZv2jiYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPbZJp1tBsABzw1h4yrcA3DqOYysmF7cxWLtBm2VXgFyJBvQAA27dwi2QUooQx1igZaPmDwltYSHTajy2RrROgGcvf7buUb6L4GIFj3oU3gqou%2BybyuzKxgg%2BKET04IFnsDA8jiFR%2BReSa0jLy5OQUOSCBJ2ghB%2BtPrs8yMeTcvRV7AscliZdwhroFLIFq8B6czI9MuB7n7Q9FxWpewlfG9LKOO%2F8Hbca0K9Eg%2BNmFV9P%2FwRDmepPJrby2GTuouCoc5AQlJR9jJuZ82vku321yal7aMex3YLHCiqBAUvrNWPJUUpAUT9tNW4NNepldhvfAEEHajtCN2WfXBy73Z1Pr9Gw6g1x4m%2FKJIVf3a62KW1766fRf%2FuoJvtZhPoLDXpH4ib0H815ylPVkDn94BkODDuJSIVLuvnXdxyFWQ0ymAnob4wyTnyZWiHiVj1w4ztXQd83JI%2FcjdDROVoP6ip4hT85w78wa6JR6DWnu2MpJjOnyUkrUMM4hyNRVhv7ZowZPUkLyu6PbhadH9bVUh7c33m4WNfXHn3altpzkyAA1%2Fyfsd2ioj2RULsAPZH3jWfiCqC8fEkfwXCw%2BhqlYT9xF6lB9USUGZaT0KeytCMuvDTJ1bHN4PzJXtKd1IEZOk6mqUnKXtspjrTMrJrMOnC%2BMQGOqUBIP75S%2B4027%2B2DH2Qtfnl%2BQWjdhhQGjFa4N3zft%2FtMBKVgKgG9W7WWhcenmG71978lD3hqoOvH2GxpNwvz3%2BlZl56%2FJFBnIy6HonoOT82pLs%2B6EHeyO8v3edK%2BQXD1psKYGZtCJmXikvrtMCPQNI4fiE0DHbv4e8qWdthUx%2F3E7CP0beh49dwGvw1s%2BZq%2FhnYVYVt8z0nRw%2FSowwUxaWU2ZeHHyiY&X-Amz-Signature=ac04621feed3b5b355b06f26959dd2323055bc9ffe3c07376bddea036f6cf1ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTMELDJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDOQe5UchMnHNNwThDUq%2BgQ9puApzUQjDIMmohS7HrEDQIgQfDPBplcNUgyFzgaJX91kZP59Rd%2FAtaDjX6SDZv2jiYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPbZJp1tBsABzw1h4yrcA3DqOYysmF7cxWLtBm2VXgFyJBvQAA27dwi2QUooQx1igZaPmDwltYSHTajy2RrROgGcvf7buUb6L4GIFj3oU3gqou%2BybyuzKxgg%2BKET04IFnsDA8jiFR%2BReSa0jLy5OQUOSCBJ2ghB%2BtPrs8yMeTcvRV7AscliZdwhroFLIFq8B6czI9MuB7n7Q9FxWpewlfG9LKOO%2F8Hbca0K9Eg%2BNmFV9P%2FwRDmepPJrby2GTuouCoc5AQlJR9jJuZ82vku321yal7aMex3YLHCiqBAUvrNWPJUUpAUT9tNW4NNepldhvfAEEHajtCN2WfXBy73Z1Pr9Gw6g1x4m%2FKJIVf3a62KW1766fRf%2FuoJvtZhPoLDXpH4ib0H815ylPVkDn94BkODDuJSIVLuvnXdxyFWQ0ymAnob4wyTnyZWiHiVj1w4ztXQd83JI%2FcjdDROVoP6ip4hT85w78wa6JR6DWnu2MpJjOnyUkrUMM4hyNRVhv7ZowZPUkLyu6PbhadH9bVUh7c33m4WNfXHn3altpzkyAA1%2Fyfsd2ioj2RULsAPZH3jWfiCqC8fEkfwXCw%2BhqlYT9xF6lB9USUGZaT0KeytCMuvDTJ1bHN4PzJXtKd1IEZOk6mqUnKXtspjrTMrJrMOnC%2BMQGOqUBIP75S%2B4027%2B2DH2Qtfnl%2BQWjdhhQGjFa4N3zft%2FtMBKVgKgG9W7WWhcenmG71978lD3hqoOvH2GxpNwvz3%2BlZl56%2FJFBnIy6HonoOT82pLs%2B6EHeyO8v3edK%2BQXD1psKYGZtCJmXikvrtMCPQNI4fiE0DHbv4e8qWdthUx%2F3E7CP0beh49dwGvw1s%2BZq%2FhnYVYVt8z0nRw%2FSowwUxaWU2ZeHHyiY&X-Amz-Signature=c744bddadf2c4f903a4f18cf36c69d4d3718bbc13e4200cbda615ba5d0ad1a14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTMELDJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDOQe5UchMnHNNwThDUq%2BgQ9puApzUQjDIMmohS7HrEDQIgQfDPBplcNUgyFzgaJX91kZP59Rd%2FAtaDjX6SDZv2jiYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPbZJp1tBsABzw1h4yrcA3DqOYysmF7cxWLtBm2VXgFyJBvQAA27dwi2QUooQx1igZaPmDwltYSHTajy2RrROgGcvf7buUb6L4GIFj3oU3gqou%2BybyuzKxgg%2BKET04IFnsDA8jiFR%2BReSa0jLy5OQUOSCBJ2ghB%2BtPrs8yMeTcvRV7AscliZdwhroFLIFq8B6czI9MuB7n7Q9FxWpewlfG9LKOO%2F8Hbca0K9Eg%2BNmFV9P%2FwRDmepPJrby2GTuouCoc5AQlJR9jJuZ82vku321yal7aMex3YLHCiqBAUvrNWPJUUpAUT9tNW4NNepldhvfAEEHajtCN2WfXBy73Z1Pr9Gw6g1x4m%2FKJIVf3a62KW1766fRf%2FuoJvtZhPoLDXpH4ib0H815ylPVkDn94BkODDuJSIVLuvnXdxyFWQ0ymAnob4wyTnyZWiHiVj1w4ztXQd83JI%2FcjdDROVoP6ip4hT85w78wa6JR6DWnu2MpJjOnyUkrUMM4hyNRVhv7ZowZPUkLyu6PbhadH9bVUh7c33m4WNfXHn3altpzkyAA1%2Fyfsd2ioj2RULsAPZH3jWfiCqC8fEkfwXCw%2BhqlYT9xF6lB9USUGZaT0KeytCMuvDTJ1bHN4PzJXtKd1IEZOk6mqUnKXtspjrTMrJrMOnC%2BMQGOqUBIP75S%2B4027%2B2DH2Qtfnl%2BQWjdhhQGjFa4N3zft%2FtMBKVgKgG9W7WWhcenmG71978lD3hqoOvH2GxpNwvz3%2BlZl56%2FJFBnIy6HonoOT82pLs%2B6EHeyO8v3edK%2BQXD1psKYGZtCJmXikvrtMCPQNI4fiE0DHbv4e8qWdthUx%2F3E7CP0beh49dwGvw1s%2BZq%2FhnYVYVt8z0nRw%2FSowwUxaWU2ZeHHyiY&X-Amz-Signature=fd9d4b9125f105274ba530ea71a604ebc6712904d9876903fdecbee63aee1dac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTMELDJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDOQe5UchMnHNNwThDUq%2BgQ9puApzUQjDIMmohS7HrEDQIgQfDPBplcNUgyFzgaJX91kZP59Rd%2FAtaDjX6SDZv2jiYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPbZJp1tBsABzw1h4yrcA3DqOYysmF7cxWLtBm2VXgFyJBvQAA27dwi2QUooQx1igZaPmDwltYSHTajy2RrROgGcvf7buUb6L4GIFj3oU3gqou%2BybyuzKxgg%2BKET04IFnsDA8jiFR%2BReSa0jLy5OQUOSCBJ2ghB%2BtPrs8yMeTcvRV7AscliZdwhroFLIFq8B6czI9MuB7n7Q9FxWpewlfG9LKOO%2F8Hbca0K9Eg%2BNmFV9P%2FwRDmepPJrby2GTuouCoc5AQlJR9jJuZ82vku321yal7aMex3YLHCiqBAUvrNWPJUUpAUT9tNW4NNepldhvfAEEHajtCN2WfXBy73Z1Pr9Gw6g1x4m%2FKJIVf3a62KW1766fRf%2FuoJvtZhPoLDXpH4ib0H815ylPVkDn94BkODDuJSIVLuvnXdxyFWQ0ymAnob4wyTnyZWiHiVj1w4ztXQd83JI%2FcjdDROVoP6ip4hT85w78wa6JR6DWnu2MpJjOnyUkrUMM4hyNRVhv7ZowZPUkLyu6PbhadH9bVUh7c33m4WNfXHn3altpzkyAA1%2Fyfsd2ioj2RULsAPZH3jWfiCqC8fEkfwXCw%2BhqlYT9xF6lB9USUGZaT0KeytCMuvDTJ1bHN4PzJXtKd1IEZOk6mqUnKXtspjrTMrJrMOnC%2BMQGOqUBIP75S%2B4027%2B2DH2Qtfnl%2BQWjdhhQGjFa4N3zft%2FtMBKVgKgG9W7WWhcenmG71978lD3hqoOvH2GxpNwvz3%2BlZl56%2FJFBnIy6HonoOT82pLs%2B6EHeyO8v3edK%2BQXD1psKYGZtCJmXikvrtMCPQNI4fiE0DHbv4e8qWdthUx%2F3E7CP0beh49dwGvw1s%2BZq%2FhnYVYVt8z0nRw%2FSowwUxaWU2ZeHHyiY&X-Amz-Signature=fa387c2cf8a79350ff5aee6e992714b4741bc3640e7d7a19db924dad51febeed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTMELDJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDOQe5UchMnHNNwThDUq%2BgQ9puApzUQjDIMmohS7HrEDQIgQfDPBplcNUgyFzgaJX91kZP59Rd%2FAtaDjX6SDZv2jiYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPbZJp1tBsABzw1h4yrcA3DqOYysmF7cxWLtBm2VXgFyJBvQAA27dwi2QUooQx1igZaPmDwltYSHTajy2RrROgGcvf7buUb6L4GIFj3oU3gqou%2BybyuzKxgg%2BKET04IFnsDA8jiFR%2BReSa0jLy5OQUOSCBJ2ghB%2BtPrs8yMeTcvRV7AscliZdwhroFLIFq8B6czI9MuB7n7Q9FxWpewlfG9LKOO%2F8Hbca0K9Eg%2BNmFV9P%2FwRDmepPJrby2GTuouCoc5AQlJR9jJuZ82vku321yal7aMex3YLHCiqBAUvrNWPJUUpAUT9tNW4NNepldhvfAEEHajtCN2WfXBy73Z1Pr9Gw6g1x4m%2FKJIVf3a62KW1766fRf%2FuoJvtZhPoLDXpH4ib0H815ylPVkDn94BkODDuJSIVLuvnXdxyFWQ0ymAnob4wyTnyZWiHiVj1w4ztXQd83JI%2FcjdDROVoP6ip4hT85w78wa6JR6DWnu2MpJjOnyUkrUMM4hyNRVhv7ZowZPUkLyu6PbhadH9bVUh7c33m4WNfXHn3altpzkyAA1%2Fyfsd2ioj2RULsAPZH3jWfiCqC8fEkfwXCw%2BhqlYT9xF6lB9USUGZaT0KeytCMuvDTJ1bHN4PzJXtKd1IEZOk6mqUnKXtspjrTMrJrMOnC%2BMQGOqUBIP75S%2B4027%2B2DH2Qtfnl%2BQWjdhhQGjFa4N3zft%2FtMBKVgKgG9W7WWhcenmG71978lD3hqoOvH2GxpNwvz3%2BlZl56%2FJFBnIy6HonoOT82pLs%2B6EHeyO8v3edK%2BQXD1psKYGZtCJmXikvrtMCPQNI4fiE0DHbv4e8qWdthUx%2F3E7CP0beh49dwGvw1s%2BZq%2FhnYVYVt8z0nRw%2FSowwUxaWU2ZeHHyiY&X-Amz-Signature=f7373c3b726490a7f02b36e59a8ed32e7b8e87b82eae761d6c668e83e6976c95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
