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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB5JDJBQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCNVU8lPj3RDBM4yWMfZ3m9vJohFQSTDYn1E7hdrg1kEgIgaZFGqiOTZ5snjgaVEd01kNPWEpLt3eGBkBbBrOunh2gq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAmX1g9KIplL5K6RkSrcA1tfO2MPptxFVtBpKMlLyL5fc8tQQcd8byFCnzHoIAOgKi86KTDCag75OQ1jxaS3RcWW2HFZpT2zd6Rbb0cnPwczme9VHguf17P%2FtVBrovf%2FM3W92a1ID8JSTzyIv2jxRXEIiEPbG8bg4vkm18pM4VUZyYvWOfEofMUwucv1gyyf9R17hemRFko4TkZSI03azg5l2Co5WlPs%2B1l8SJRxdBd%2B04eK7TXpvIF2HHQB61XEWDky%2FphmeEMj5mrbU6AZr9pvL6zQXsLocNDAmGsnGhKosdK0TpcCuetumjgQXsnIktpK%2BEsxzZ74Nd4XqVX0vlanpryelArV5c0rdtY7%2BufEwU0in6F0zvg%2Fi5qZIy0mhAq2eCCWxatCCMmv9Hgc2NCb1F00ioMo8tyNu5ZSchAjmP9S6I5wIrB%2FIICwsAG%2BHgK2iQoWAr%2FewgsdN6lyaPfQ0WLYmkNryybyxBzmgZGtq3ZfgB1JnYldofcIHIGMqNS1n1uLQu4YqbA8JyR%2FwXuse69IXCUjst1LKJoclzRT8pOhklm2foGpAOM6XQrQ65cRQE%2BJC1GXXFQ6heS6sJHTmlrGUqP1D3JMZK4P8GNXdQy2heJO9g1gNq2cCFegR%2BzRSo3ATurx9wnjMKnOw8QGOqUBUL84SlHadWOB1GivwkI1DGhwsz%2BfdIW4ed0lU%2BXmnndKxO%2F0rod%2F0M5VePajzotiM7z%2Fiw5KMLHHvGCi4LwFsPrGWPiv5QLOm9eBvmNLR8urK4zXA2yBECjQKh6i8%2F8JKuIbQKQpaes%2BsOMkZ%2FauUgcSzlNel45fTnGFwHiVa2oqPVNYfHrtoQy2gxXSodm%2FDkrNP29EIp5Vy1KYRHKpCAvnPon7&X-Amz-Signature=df21898207c00ee3c1841ccd66bfc64fbb76cacf62a2184f4a1bdffad2d4c438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D4RNY2D%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCkavvgnFJ3Gk8nXunoygk8gAY6xL1wxrR9M6oH%2BgWFSQIhAI9clFW%2BnfXX3JEuCL%2F7aJ%2FrrflZ5C7y0%2B2enivIKe%2FAKv8DCEoQABoMNjM3NDIzMTgzODA1IgyJSHtyvTIvpUEhDY8q3AM0%2FmS51fP1uafwy8nKoXg4cZxRdrBnjrnOL88f5jMJPkoVrJsID4M30M21242GnRl%2B2RTb6vRrpICFySBezYvXQs%2Bh8oHgkAZBUeeDi1aJsuNgo35ZhHevOQsuKL19fx9ifP6XszsbLNNAHff6%2F8DFMo3N42S1g40sf8KrWnrkiYkxteWGeT5rAPQcpxuwuIFfyc81FgxLAr3kfTLxMUel0NpuxYNZs7dGHa6llhPU3N%2FbuOP8vMnrjOT79Jy3QFdrL0tktdWXBJpT9oRg6thuod%2F8ZVGSj6RYQlenNcU7%2FF25Ky85ERQgNzI7GeXNt%2BPHgABRBbUsIy0R%2BizpPo%2BlCRPBGG6GOYf3fLkIOaOXFwIT5sel0r4fWPQhW8SbUmxcqBU2gljfPj5NHrHeXaZupk%2FQt0JSr2n37N72WM3UZrmxBi18L5npne6XO0kX2ZsPjjFe%2B8DJC6wzZ%2BrnjIQ%2BziFlGUvvL2Ucqdi%2FNCG9LYw2rwEBARmCgOuJxCsasG8lbF4yeEJBhixKukydWCal29A5uZMOyb%2BCXhBaE16HhxSHOiyvNHP6XSFZKK1HpIwbNSe8pnMvORQlwCukKZemWElNLJnZyFkfohVoPb%2BZpE60%2Bhh2z3u2FDb%2BHTDFzsPEBjqkAc4vgWoREPh8XuKx%2F1zqbYnGF2iULPhmIDlV1d4aJh9z5iks0UDPTI8RfgVZ9wAaecUthg%2FDML151UfFNoJQOkxSq%2FFMA1PKheV7JCfdPBQ7bYLQUsX1q98%2FUemDTYO4ihd3ns6bbhKkHrQ0N1aX2%2FTdIhIGjVPQmKpI7x0qxB6SjPizMim7XsO8aAvl95JCS%2BzbijkFI%2BzZ5tPk9IwMEZh6Jbgb&X-Amz-Signature=a40173ffd2639070070e77b1df36e846a99ea6509d8d1c020c7641883a517520&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D4RNY2D%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCkavvgnFJ3Gk8nXunoygk8gAY6xL1wxrR9M6oH%2BgWFSQIhAI9clFW%2BnfXX3JEuCL%2F7aJ%2FrrflZ5C7y0%2B2enivIKe%2FAKv8DCEoQABoMNjM3NDIzMTgzODA1IgyJSHtyvTIvpUEhDY8q3AM0%2FmS51fP1uafwy8nKoXg4cZxRdrBnjrnOL88f5jMJPkoVrJsID4M30M21242GnRl%2B2RTb6vRrpICFySBezYvXQs%2Bh8oHgkAZBUeeDi1aJsuNgo35ZhHevOQsuKL19fx9ifP6XszsbLNNAHff6%2F8DFMo3N42S1g40sf8KrWnrkiYkxteWGeT5rAPQcpxuwuIFfyc81FgxLAr3kfTLxMUel0NpuxYNZs7dGHa6llhPU3N%2FbuOP8vMnrjOT79Jy3QFdrL0tktdWXBJpT9oRg6thuod%2F8ZVGSj6RYQlenNcU7%2FF25Ky85ERQgNzI7GeXNt%2BPHgABRBbUsIy0R%2BizpPo%2BlCRPBGG6GOYf3fLkIOaOXFwIT5sel0r4fWPQhW8SbUmxcqBU2gljfPj5NHrHeXaZupk%2FQt0JSr2n37N72WM3UZrmxBi18L5npne6XO0kX2ZsPjjFe%2B8DJC6wzZ%2BrnjIQ%2BziFlGUvvL2Ucqdi%2FNCG9LYw2rwEBARmCgOuJxCsasG8lbF4yeEJBhixKukydWCal29A5uZMOyb%2BCXhBaE16HhxSHOiyvNHP6XSFZKK1HpIwbNSe8pnMvORQlwCukKZemWElNLJnZyFkfohVoPb%2BZpE60%2Bhh2z3u2FDb%2BHTDFzsPEBjqkAc4vgWoREPh8XuKx%2F1zqbYnGF2iULPhmIDlV1d4aJh9z5iks0UDPTI8RfgVZ9wAaecUthg%2FDML151UfFNoJQOkxSq%2FFMA1PKheV7JCfdPBQ7bYLQUsX1q98%2FUemDTYO4ihd3ns6bbhKkHrQ0N1aX2%2FTdIhIGjVPQmKpI7x0qxB6SjPizMim7XsO8aAvl95JCS%2BzbijkFI%2BzZ5tPk9IwMEZh6Jbgb&X-Amz-Signature=b987e56280a6cb5e4b850740645969d802bdcf1df26ae774dd9dac9603148135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D4RNY2D%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCkavvgnFJ3Gk8nXunoygk8gAY6xL1wxrR9M6oH%2BgWFSQIhAI9clFW%2BnfXX3JEuCL%2F7aJ%2FrrflZ5C7y0%2B2enivIKe%2FAKv8DCEoQABoMNjM3NDIzMTgzODA1IgyJSHtyvTIvpUEhDY8q3AM0%2FmS51fP1uafwy8nKoXg4cZxRdrBnjrnOL88f5jMJPkoVrJsID4M30M21242GnRl%2B2RTb6vRrpICFySBezYvXQs%2Bh8oHgkAZBUeeDi1aJsuNgo35ZhHevOQsuKL19fx9ifP6XszsbLNNAHff6%2F8DFMo3N42S1g40sf8KrWnrkiYkxteWGeT5rAPQcpxuwuIFfyc81FgxLAr3kfTLxMUel0NpuxYNZs7dGHa6llhPU3N%2FbuOP8vMnrjOT79Jy3QFdrL0tktdWXBJpT9oRg6thuod%2F8ZVGSj6RYQlenNcU7%2FF25Ky85ERQgNzI7GeXNt%2BPHgABRBbUsIy0R%2BizpPo%2BlCRPBGG6GOYf3fLkIOaOXFwIT5sel0r4fWPQhW8SbUmxcqBU2gljfPj5NHrHeXaZupk%2FQt0JSr2n37N72WM3UZrmxBi18L5npne6XO0kX2ZsPjjFe%2B8DJC6wzZ%2BrnjIQ%2BziFlGUvvL2Ucqdi%2FNCG9LYw2rwEBARmCgOuJxCsasG8lbF4yeEJBhixKukydWCal29A5uZMOyb%2BCXhBaE16HhxSHOiyvNHP6XSFZKK1HpIwbNSe8pnMvORQlwCukKZemWElNLJnZyFkfohVoPb%2BZpE60%2Bhh2z3u2FDb%2BHTDFzsPEBjqkAc4vgWoREPh8XuKx%2F1zqbYnGF2iULPhmIDlV1d4aJh9z5iks0UDPTI8RfgVZ9wAaecUthg%2FDML151UfFNoJQOkxSq%2FFMA1PKheV7JCfdPBQ7bYLQUsX1q98%2FUemDTYO4ihd3ns6bbhKkHrQ0N1aX2%2FTdIhIGjVPQmKpI7x0qxB6SjPizMim7XsO8aAvl95JCS%2BzbijkFI%2BzZ5tPk9IwMEZh6Jbgb&X-Amz-Signature=e1300744b4432fa44cd63c47962bffcb6ff234ad347f1a9035900b73c2c2169d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D4RNY2D%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCkavvgnFJ3Gk8nXunoygk8gAY6xL1wxrR9M6oH%2BgWFSQIhAI9clFW%2BnfXX3JEuCL%2F7aJ%2FrrflZ5C7y0%2B2enivIKe%2FAKv8DCEoQABoMNjM3NDIzMTgzODA1IgyJSHtyvTIvpUEhDY8q3AM0%2FmS51fP1uafwy8nKoXg4cZxRdrBnjrnOL88f5jMJPkoVrJsID4M30M21242GnRl%2B2RTb6vRrpICFySBezYvXQs%2Bh8oHgkAZBUeeDi1aJsuNgo35ZhHevOQsuKL19fx9ifP6XszsbLNNAHff6%2F8DFMo3N42S1g40sf8KrWnrkiYkxteWGeT5rAPQcpxuwuIFfyc81FgxLAr3kfTLxMUel0NpuxYNZs7dGHa6llhPU3N%2FbuOP8vMnrjOT79Jy3QFdrL0tktdWXBJpT9oRg6thuod%2F8ZVGSj6RYQlenNcU7%2FF25Ky85ERQgNzI7GeXNt%2BPHgABRBbUsIy0R%2BizpPo%2BlCRPBGG6GOYf3fLkIOaOXFwIT5sel0r4fWPQhW8SbUmxcqBU2gljfPj5NHrHeXaZupk%2FQt0JSr2n37N72WM3UZrmxBi18L5npne6XO0kX2ZsPjjFe%2B8DJC6wzZ%2BrnjIQ%2BziFlGUvvL2Ucqdi%2FNCG9LYw2rwEBARmCgOuJxCsasG8lbF4yeEJBhixKukydWCal29A5uZMOyb%2BCXhBaE16HhxSHOiyvNHP6XSFZKK1HpIwbNSe8pnMvORQlwCukKZemWElNLJnZyFkfohVoPb%2BZpE60%2Bhh2z3u2FDb%2BHTDFzsPEBjqkAc4vgWoREPh8XuKx%2F1zqbYnGF2iULPhmIDlV1d4aJh9z5iks0UDPTI8RfgVZ9wAaecUthg%2FDML151UfFNoJQOkxSq%2FFMA1PKheV7JCfdPBQ7bYLQUsX1q98%2FUemDTYO4ihd3ns6bbhKkHrQ0N1aX2%2FTdIhIGjVPQmKpI7x0qxB6SjPizMim7XsO8aAvl95JCS%2BzbijkFI%2BzZ5tPk9IwMEZh6Jbgb&X-Amz-Signature=5e6bf29de4db4d88398b50750dc41bd530480b888e35afa2bc36dd11bfdb9e61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D4RNY2D%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCkavvgnFJ3Gk8nXunoygk8gAY6xL1wxrR9M6oH%2BgWFSQIhAI9clFW%2BnfXX3JEuCL%2F7aJ%2FrrflZ5C7y0%2B2enivIKe%2FAKv8DCEoQABoMNjM3NDIzMTgzODA1IgyJSHtyvTIvpUEhDY8q3AM0%2FmS51fP1uafwy8nKoXg4cZxRdrBnjrnOL88f5jMJPkoVrJsID4M30M21242GnRl%2B2RTb6vRrpICFySBezYvXQs%2Bh8oHgkAZBUeeDi1aJsuNgo35ZhHevOQsuKL19fx9ifP6XszsbLNNAHff6%2F8DFMo3N42S1g40sf8KrWnrkiYkxteWGeT5rAPQcpxuwuIFfyc81FgxLAr3kfTLxMUel0NpuxYNZs7dGHa6llhPU3N%2FbuOP8vMnrjOT79Jy3QFdrL0tktdWXBJpT9oRg6thuod%2F8ZVGSj6RYQlenNcU7%2FF25Ky85ERQgNzI7GeXNt%2BPHgABRBbUsIy0R%2BizpPo%2BlCRPBGG6GOYf3fLkIOaOXFwIT5sel0r4fWPQhW8SbUmxcqBU2gljfPj5NHrHeXaZupk%2FQt0JSr2n37N72WM3UZrmxBi18L5npne6XO0kX2ZsPjjFe%2B8DJC6wzZ%2BrnjIQ%2BziFlGUvvL2Ucqdi%2FNCG9LYw2rwEBARmCgOuJxCsasG8lbF4yeEJBhixKukydWCal29A5uZMOyb%2BCXhBaE16HhxSHOiyvNHP6XSFZKK1HpIwbNSe8pnMvORQlwCukKZemWElNLJnZyFkfohVoPb%2BZpE60%2Bhh2z3u2FDb%2BHTDFzsPEBjqkAc4vgWoREPh8XuKx%2F1zqbYnGF2iULPhmIDlV1d4aJh9z5iks0UDPTI8RfgVZ9wAaecUthg%2FDML151UfFNoJQOkxSq%2FFMA1PKheV7JCfdPBQ7bYLQUsX1q98%2FUemDTYO4ihd3ns6bbhKkHrQ0N1aX2%2FTdIhIGjVPQmKpI7x0qxB6SjPizMim7XsO8aAvl95JCS%2BzbijkFI%2BzZ5tPk9IwMEZh6Jbgb&X-Amz-Signature=f1b4678c29da04e1b301b91a68331db4405f07f2aa753737a2734e81926ca885&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D4RNY2D%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCkavvgnFJ3Gk8nXunoygk8gAY6xL1wxrR9M6oH%2BgWFSQIhAI9clFW%2BnfXX3JEuCL%2F7aJ%2FrrflZ5C7y0%2B2enivIKe%2FAKv8DCEoQABoMNjM3NDIzMTgzODA1IgyJSHtyvTIvpUEhDY8q3AM0%2FmS51fP1uafwy8nKoXg4cZxRdrBnjrnOL88f5jMJPkoVrJsID4M30M21242GnRl%2B2RTb6vRrpICFySBezYvXQs%2Bh8oHgkAZBUeeDi1aJsuNgo35ZhHevOQsuKL19fx9ifP6XszsbLNNAHff6%2F8DFMo3N42S1g40sf8KrWnrkiYkxteWGeT5rAPQcpxuwuIFfyc81FgxLAr3kfTLxMUel0NpuxYNZs7dGHa6llhPU3N%2FbuOP8vMnrjOT79Jy3QFdrL0tktdWXBJpT9oRg6thuod%2F8ZVGSj6RYQlenNcU7%2FF25Ky85ERQgNzI7GeXNt%2BPHgABRBbUsIy0R%2BizpPo%2BlCRPBGG6GOYf3fLkIOaOXFwIT5sel0r4fWPQhW8SbUmxcqBU2gljfPj5NHrHeXaZupk%2FQt0JSr2n37N72WM3UZrmxBi18L5npne6XO0kX2ZsPjjFe%2B8DJC6wzZ%2BrnjIQ%2BziFlGUvvL2Ucqdi%2FNCG9LYw2rwEBARmCgOuJxCsasG8lbF4yeEJBhixKukydWCal29A5uZMOyb%2BCXhBaE16HhxSHOiyvNHP6XSFZKK1HpIwbNSe8pnMvORQlwCukKZemWElNLJnZyFkfohVoPb%2BZpE60%2Bhh2z3u2FDb%2BHTDFzsPEBjqkAc4vgWoREPh8XuKx%2F1zqbYnGF2iULPhmIDlV1d4aJh9z5iks0UDPTI8RfgVZ9wAaecUthg%2FDML151UfFNoJQOkxSq%2FFMA1PKheV7JCfdPBQ7bYLQUsX1q98%2FUemDTYO4ihd3ns6bbhKkHrQ0N1aX2%2FTdIhIGjVPQmKpI7x0qxB6SjPizMim7XsO8aAvl95JCS%2BzbijkFI%2BzZ5tPk9IwMEZh6Jbgb&X-Amz-Signature=0832f9b82ed6af7d0a3e27e86b84440ce9dd3c1bca0d74c61797d7d14519db1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D4RNY2D%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCkavvgnFJ3Gk8nXunoygk8gAY6xL1wxrR9M6oH%2BgWFSQIhAI9clFW%2BnfXX3JEuCL%2F7aJ%2FrrflZ5C7y0%2B2enivIKe%2FAKv8DCEoQABoMNjM3NDIzMTgzODA1IgyJSHtyvTIvpUEhDY8q3AM0%2FmS51fP1uafwy8nKoXg4cZxRdrBnjrnOL88f5jMJPkoVrJsID4M30M21242GnRl%2B2RTb6vRrpICFySBezYvXQs%2Bh8oHgkAZBUeeDi1aJsuNgo35ZhHevOQsuKL19fx9ifP6XszsbLNNAHff6%2F8DFMo3N42S1g40sf8KrWnrkiYkxteWGeT5rAPQcpxuwuIFfyc81FgxLAr3kfTLxMUel0NpuxYNZs7dGHa6llhPU3N%2FbuOP8vMnrjOT79Jy3QFdrL0tktdWXBJpT9oRg6thuod%2F8ZVGSj6RYQlenNcU7%2FF25Ky85ERQgNzI7GeXNt%2BPHgABRBbUsIy0R%2BizpPo%2BlCRPBGG6GOYf3fLkIOaOXFwIT5sel0r4fWPQhW8SbUmxcqBU2gljfPj5NHrHeXaZupk%2FQt0JSr2n37N72WM3UZrmxBi18L5npne6XO0kX2ZsPjjFe%2B8DJC6wzZ%2BrnjIQ%2BziFlGUvvL2Ucqdi%2FNCG9LYw2rwEBARmCgOuJxCsasG8lbF4yeEJBhixKukydWCal29A5uZMOyb%2BCXhBaE16HhxSHOiyvNHP6XSFZKK1HpIwbNSe8pnMvORQlwCukKZemWElNLJnZyFkfohVoPb%2BZpE60%2Bhh2z3u2FDb%2BHTDFzsPEBjqkAc4vgWoREPh8XuKx%2F1zqbYnGF2iULPhmIDlV1d4aJh9z5iks0UDPTI8RfgVZ9wAaecUthg%2FDML151UfFNoJQOkxSq%2FFMA1PKheV7JCfdPBQ7bYLQUsX1q98%2FUemDTYO4ihd3ns6bbhKkHrQ0N1aX2%2FTdIhIGjVPQmKpI7x0qxB6SjPizMim7XsO8aAvl95JCS%2BzbijkFI%2BzZ5tPk9IwMEZh6Jbgb&X-Amz-Signature=6ac665b36cc2451103b922a749ec375478426bc29eddd1784b7b454ba13d705f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D4RNY2D%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCkavvgnFJ3Gk8nXunoygk8gAY6xL1wxrR9M6oH%2BgWFSQIhAI9clFW%2BnfXX3JEuCL%2F7aJ%2FrrflZ5C7y0%2B2enivIKe%2FAKv8DCEoQABoMNjM3NDIzMTgzODA1IgyJSHtyvTIvpUEhDY8q3AM0%2FmS51fP1uafwy8nKoXg4cZxRdrBnjrnOL88f5jMJPkoVrJsID4M30M21242GnRl%2B2RTb6vRrpICFySBezYvXQs%2Bh8oHgkAZBUeeDi1aJsuNgo35ZhHevOQsuKL19fx9ifP6XszsbLNNAHff6%2F8DFMo3N42S1g40sf8KrWnrkiYkxteWGeT5rAPQcpxuwuIFfyc81FgxLAr3kfTLxMUel0NpuxYNZs7dGHa6llhPU3N%2FbuOP8vMnrjOT79Jy3QFdrL0tktdWXBJpT9oRg6thuod%2F8ZVGSj6RYQlenNcU7%2FF25Ky85ERQgNzI7GeXNt%2BPHgABRBbUsIy0R%2BizpPo%2BlCRPBGG6GOYf3fLkIOaOXFwIT5sel0r4fWPQhW8SbUmxcqBU2gljfPj5NHrHeXaZupk%2FQt0JSr2n37N72WM3UZrmxBi18L5npne6XO0kX2ZsPjjFe%2B8DJC6wzZ%2BrnjIQ%2BziFlGUvvL2Ucqdi%2FNCG9LYw2rwEBARmCgOuJxCsasG8lbF4yeEJBhixKukydWCal29A5uZMOyb%2BCXhBaE16HhxSHOiyvNHP6XSFZKK1HpIwbNSe8pnMvORQlwCukKZemWElNLJnZyFkfohVoPb%2BZpE60%2Bhh2z3u2FDb%2BHTDFzsPEBjqkAc4vgWoREPh8XuKx%2F1zqbYnGF2iULPhmIDlV1d4aJh9z5iks0UDPTI8RfgVZ9wAaecUthg%2FDML151UfFNoJQOkxSq%2FFMA1PKheV7JCfdPBQ7bYLQUsX1q98%2FUemDTYO4ihd3ns6bbhKkHrQ0N1aX2%2FTdIhIGjVPQmKpI7x0qxB6SjPizMim7XsO8aAvl95JCS%2BzbijkFI%2BzZ5tPk9IwMEZh6Jbgb&X-Amz-Signature=89a1085f82cfa32f2d79bb8a7996d7f84bf77dfd99072a731c7c7f8c641692b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D4RNY2D%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCkavvgnFJ3Gk8nXunoygk8gAY6xL1wxrR9M6oH%2BgWFSQIhAI9clFW%2BnfXX3JEuCL%2F7aJ%2FrrflZ5C7y0%2B2enivIKe%2FAKv8DCEoQABoMNjM3NDIzMTgzODA1IgyJSHtyvTIvpUEhDY8q3AM0%2FmS51fP1uafwy8nKoXg4cZxRdrBnjrnOL88f5jMJPkoVrJsID4M30M21242GnRl%2B2RTb6vRrpICFySBezYvXQs%2Bh8oHgkAZBUeeDi1aJsuNgo35ZhHevOQsuKL19fx9ifP6XszsbLNNAHff6%2F8DFMo3N42S1g40sf8KrWnrkiYkxteWGeT5rAPQcpxuwuIFfyc81FgxLAr3kfTLxMUel0NpuxYNZs7dGHa6llhPU3N%2FbuOP8vMnrjOT79Jy3QFdrL0tktdWXBJpT9oRg6thuod%2F8ZVGSj6RYQlenNcU7%2FF25Ky85ERQgNzI7GeXNt%2BPHgABRBbUsIy0R%2BizpPo%2BlCRPBGG6GOYf3fLkIOaOXFwIT5sel0r4fWPQhW8SbUmxcqBU2gljfPj5NHrHeXaZupk%2FQt0JSr2n37N72WM3UZrmxBi18L5npne6XO0kX2ZsPjjFe%2B8DJC6wzZ%2BrnjIQ%2BziFlGUvvL2Ucqdi%2FNCG9LYw2rwEBARmCgOuJxCsasG8lbF4yeEJBhixKukydWCal29A5uZMOyb%2BCXhBaE16HhxSHOiyvNHP6XSFZKK1HpIwbNSe8pnMvORQlwCukKZemWElNLJnZyFkfohVoPb%2BZpE60%2Bhh2z3u2FDb%2BHTDFzsPEBjqkAc4vgWoREPh8XuKx%2F1zqbYnGF2iULPhmIDlV1d4aJh9z5iks0UDPTI8RfgVZ9wAaecUthg%2FDML151UfFNoJQOkxSq%2FFMA1PKheV7JCfdPBQ7bYLQUsX1q98%2FUemDTYO4ihd3ns6bbhKkHrQ0N1aX2%2FTdIhIGjVPQmKpI7x0qxB6SjPizMim7XsO8aAvl95JCS%2BzbijkFI%2BzZ5tPk9IwMEZh6Jbgb&X-Amz-Signature=136097734d8d995a9bb7e46f6aba87efd81fd3bd16cd887f86cfb4d3e28a5c5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D4RNY2D%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCkavvgnFJ3Gk8nXunoygk8gAY6xL1wxrR9M6oH%2BgWFSQIhAI9clFW%2BnfXX3JEuCL%2F7aJ%2FrrflZ5C7y0%2B2enivIKe%2FAKv8DCEoQABoMNjM3NDIzMTgzODA1IgyJSHtyvTIvpUEhDY8q3AM0%2FmS51fP1uafwy8nKoXg4cZxRdrBnjrnOL88f5jMJPkoVrJsID4M30M21242GnRl%2B2RTb6vRrpICFySBezYvXQs%2Bh8oHgkAZBUeeDi1aJsuNgo35ZhHevOQsuKL19fx9ifP6XszsbLNNAHff6%2F8DFMo3N42S1g40sf8KrWnrkiYkxteWGeT5rAPQcpxuwuIFfyc81FgxLAr3kfTLxMUel0NpuxYNZs7dGHa6llhPU3N%2FbuOP8vMnrjOT79Jy3QFdrL0tktdWXBJpT9oRg6thuod%2F8ZVGSj6RYQlenNcU7%2FF25Ky85ERQgNzI7GeXNt%2BPHgABRBbUsIy0R%2BizpPo%2BlCRPBGG6GOYf3fLkIOaOXFwIT5sel0r4fWPQhW8SbUmxcqBU2gljfPj5NHrHeXaZupk%2FQt0JSr2n37N72WM3UZrmxBi18L5npne6XO0kX2ZsPjjFe%2B8DJC6wzZ%2BrnjIQ%2BziFlGUvvL2Ucqdi%2FNCG9LYw2rwEBARmCgOuJxCsasG8lbF4yeEJBhixKukydWCal29A5uZMOyb%2BCXhBaE16HhxSHOiyvNHP6XSFZKK1HpIwbNSe8pnMvORQlwCukKZemWElNLJnZyFkfohVoPb%2BZpE60%2Bhh2z3u2FDb%2BHTDFzsPEBjqkAc4vgWoREPh8XuKx%2F1zqbYnGF2iULPhmIDlV1d4aJh9z5iks0UDPTI8RfgVZ9wAaecUthg%2FDML151UfFNoJQOkxSq%2FFMA1PKheV7JCfdPBQ7bYLQUsX1q98%2FUemDTYO4ihd3ns6bbhKkHrQ0N1aX2%2FTdIhIGjVPQmKpI7x0qxB6SjPizMim7XsO8aAvl95JCS%2BzbijkFI%2BzZ5tPk9IwMEZh6Jbgb&X-Amz-Signature=5e6bf29de4db4d88398b50750dc41bd530480b888e35afa2bc36dd11bfdb9e61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
