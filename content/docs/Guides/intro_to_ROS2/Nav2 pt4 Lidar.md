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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SNVIC6D%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FNstRUn5yuw5pXOOSd3kioj6nv%2Bxd1fV0E96DWV11kAiAn5Jaa6YJO%2F%2FS0y5lRiYa%2FD8jjP4wPse29KZD5rrAuIyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIM0yq27mtp9ZgrIGKGKtwD%2BjT%2BdK2gwgFpXz7Ej20jcGOjv418Ads8tMh3vhsNc%2FOu2d2ZNG113W8Fjpj3mzQmoBchX%2Ft%2FgQ9YZKe9jRCsNooWYqgYoOCfrHZYpHhBJIGqdD5Nel9NnKQdw%2FyGgLUtRxJFmzXIYHRiS27ic7xOcezjGhqnCWxmAPEsphD7KvFS7TK3SfapeJYXZaHWlWPIZZ6cLFkhVZ4behqbrwGf8epazeSYEJP2sGIbrGWGj7usCKaMbKQTZBxLLaW9wzDl6oFxSowZTlQeWPsUF3HghjbxFhSxZRT7nto52CmhxAyI1vqodO6sANo55lKhcnyze0bQWvz%2BYP4uW2161%2BdhjctjsOX8rRpZ7ycb4pS2qebTFo%2FBNLG3iEsFkTSRIfnChR9uRsBdktYNd6z6MSKeCHbTKJNQ66%2FRoA8GEd1oAZot5kxEql%2FJE8P6pxOO%2FxYAmJKbJAhvOpboIksoDSdBuJzHags2mzenYJpcYKOGLK1FmIXLlpwLoAM8lQe9avlI5iYsk%2FSBo93rTAITiyV3TTqXerPkGXwCarwSdi3D%2BrqrygZOvun3R5E1yCESpYozrApNP0ymzyaNN55aUnskNHcEUJrgjRimR4C1bl2JNkJqyoHmLVuoRefSbQwwm%2FWGxwY6pgGIMDaBtlMFppHK%2FkNM6k7bjvs78M1ygtjXSjVQ1QHOt7qUDPDUB8FurY%2Bt941n00O4hDnJ0ewcs%2F12kZw3GNiZ8jOh7Pnes3L2vDiOhvN7LGDlQ6hKTLEn6LqNYFEk9Va0oEaLE25gBaiyGBAruFoT4Jf1bar87RgJibaky9mjry0MPh0JDxAkzCQS%2FgT4fsj655yVeKjsu%2FRHR0MTUoCfsejBUnjm&X-Amz-Signature=f26f594d8c4abf6141c5c2d365840ec13cadc12eb20d463c9a17e5da6bb5586e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CEETXFZ%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKi%2Flc21NmXjk9t8tVrkdd%2BouA7lBiful3Rzr%2BgUvrwAiB%2FuU98AxnpFfKGfFq%2F7xs1WFzm%2BuKjKqkNJWyPE9KjPCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMAxUMafMGoV3MXIyOKtwDelDfI0emLueWuqCdSa8sa2gvVF696jZCkCsbb5PXnL3HAnRhM2rtagW3P7nf2m%2FGcPtyifHbniEOFQUiGX6bEqErUn8AaogK%2FreJ0C67bkrosxAliXsinI2mbxvHm0BBRc8VDHXiE2my%2BcefLHXMYQSru9PnXhPh0AvONRBnETbBZxXZ9NhK2cQZnqsGSy9PDpm7AGqzZvIOw%2BfIvwI%2BYPfWpoaSXWxYesOuD5Ct0Zy5HE5Bi7WCZg7BieaPzqGAu1dyjRvem7%2BMMPncXg33OwsyfZxTsdxrCwRfJlMR7PaOEvAsXlwAHbYIHqMsjgwhfsvfR%2FW%2FXIDhk0xFSMEhlj%2BBk0PELckI08rSv3R6Urw38aUE09w62Eqp2KhdKm8%2BzgG3RQ%2Bzl0%2FpGAfxzHQvblhS%2FwGqQGTJ8NIXaJjXLDIfd%2BfFbXsgQxfw3Gs%2FZ0pcUqHOR7hT87mr%2FErJHX4B%2BS4JDaGaFlV%2FDQTQ1I3X4OrFt82a7onCyUN%2B65tdMel1n8W7BjXBYN0IkNR1m6Br9bc%2B6gviqbCcwSTZ4TetA9NBQU6bVZLXAmyyz4Q9umYotl2F89INKBTlo8a2N8oRgBhCi4NUlVtJlR%2BM9PQ1FEdGcbS7Tj2b7okyqqwwlPWGxwY6pgFRFxqq2ks3fuTx8JiBagegQD0FLaAHgbd5MIMyMttvaBMdN5wOz2cOcWSDKmf02RtLnPbiz3FVrSZ3tZ4%2F7068bfjcJJgRhKTYxDj7DtRlNV58H1uF4VnnUHh2S7EnAo10abV1v4dsyQnTXpZrza3ruoAPa4soicC6xKqys%2Bb%2BrDk80JGwsWU2gi0cPfrH0wqBlHqk8%2BT0mQljUmJDQy8wPBP2elqV&X-Amz-Signature=ce3e6b3a1d9fdebd7c85f97dc02bc9619ce1d850002233ef385ae96239774d68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CEETXFZ%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKi%2Flc21NmXjk9t8tVrkdd%2BouA7lBiful3Rzr%2BgUvrwAiB%2FuU98AxnpFfKGfFq%2F7xs1WFzm%2BuKjKqkNJWyPE9KjPCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMAxUMafMGoV3MXIyOKtwDelDfI0emLueWuqCdSa8sa2gvVF696jZCkCsbb5PXnL3HAnRhM2rtagW3P7nf2m%2FGcPtyifHbniEOFQUiGX6bEqErUn8AaogK%2FreJ0C67bkrosxAliXsinI2mbxvHm0BBRc8VDHXiE2my%2BcefLHXMYQSru9PnXhPh0AvONRBnETbBZxXZ9NhK2cQZnqsGSy9PDpm7AGqzZvIOw%2BfIvwI%2BYPfWpoaSXWxYesOuD5Ct0Zy5HE5Bi7WCZg7BieaPzqGAu1dyjRvem7%2BMMPncXg33OwsyfZxTsdxrCwRfJlMR7PaOEvAsXlwAHbYIHqMsjgwhfsvfR%2FW%2FXIDhk0xFSMEhlj%2BBk0PELckI08rSv3R6Urw38aUE09w62Eqp2KhdKm8%2BzgG3RQ%2Bzl0%2FpGAfxzHQvblhS%2FwGqQGTJ8NIXaJjXLDIfd%2BfFbXsgQxfw3Gs%2FZ0pcUqHOR7hT87mr%2FErJHX4B%2BS4JDaGaFlV%2FDQTQ1I3X4OrFt82a7onCyUN%2B65tdMel1n8W7BjXBYN0IkNR1m6Br9bc%2B6gviqbCcwSTZ4TetA9NBQU6bVZLXAmyyz4Q9umYotl2F89INKBTlo8a2N8oRgBhCi4NUlVtJlR%2BM9PQ1FEdGcbS7Tj2b7okyqqwwlPWGxwY6pgFRFxqq2ks3fuTx8JiBagegQD0FLaAHgbd5MIMyMttvaBMdN5wOz2cOcWSDKmf02RtLnPbiz3FVrSZ3tZ4%2F7068bfjcJJgRhKTYxDj7DtRlNV58H1uF4VnnUHh2S7EnAo10abV1v4dsyQnTXpZrza3ruoAPa4soicC6xKqys%2Bb%2BrDk80JGwsWU2gi0cPfrH0wqBlHqk8%2BT0mQljUmJDQy8wPBP2elqV&X-Amz-Signature=2ecd7b706fbf639a35d6e56fb5296d6a5a09939edd54ea34eb3d0238770345d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CEETXFZ%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKi%2Flc21NmXjk9t8tVrkdd%2BouA7lBiful3Rzr%2BgUvrwAiB%2FuU98AxnpFfKGfFq%2F7xs1WFzm%2BuKjKqkNJWyPE9KjPCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMAxUMafMGoV3MXIyOKtwDelDfI0emLueWuqCdSa8sa2gvVF696jZCkCsbb5PXnL3HAnRhM2rtagW3P7nf2m%2FGcPtyifHbniEOFQUiGX6bEqErUn8AaogK%2FreJ0C67bkrosxAliXsinI2mbxvHm0BBRc8VDHXiE2my%2BcefLHXMYQSru9PnXhPh0AvONRBnETbBZxXZ9NhK2cQZnqsGSy9PDpm7AGqzZvIOw%2BfIvwI%2BYPfWpoaSXWxYesOuD5Ct0Zy5HE5Bi7WCZg7BieaPzqGAu1dyjRvem7%2BMMPncXg33OwsyfZxTsdxrCwRfJlMR7PaOEvAsXlwAHbYIHqMsjgwhfsvfR%2FW%2FXIDhk0xFSMEhlj%2BBk0PELckI08rSv3R6Urw38aUE09w62Eqp2KhdKm8%2BzgG3RQ%2Bzl0%2FpGAfxzHQvblhS%2FwGqQGTJ8NIXaJjXLDIfd%2BfFbXsgQxfw3Gs%2FZ0pcUqHOR7hT87mr%2FErJHX4B%2BS4JDaGaFlV%2FDQTQ1I3X4OrFt82a7onCyUN%2B65tdMel1n8W7BjXBYN0IkNR1m6Br9bc%2B6gviqbCcwSTZ4TetA9NBQU6bVZLXAmyyz4Q9umYotl2F89INKBTlo8a2N8oRgBhCi4NUlVtJlR%2BM9PQ1FEdGcbS7Tj2b7okyqqwwlPWGxwY6pgFRFxqq2ks3fuTx8JiBagegQD0FLaAHgbd5MIMyMttvaBMdN5wOz2cOcWSDKmf02RtLnPbiz3FVrSZ3tZ4%2F7068bfjcJJgRhKTYxDj7DtRlNV58H1uF4VnnUHh2S7EnAo10abV1v4dsyQnTXpZrza3ruoAPa4soicC6xKqys%2Bb%2BrDk80JGwsWU2gi0cPfrH0wqBlHqk8%2BT0mQljUmJDQy8wPBP2elqV&X-Amz-Signature=3b59035237cace15778f2fa0a01a8f9e5e60a4cf1bda5458c3e55e696a4ba270&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CEETXFZ%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKi%2Flc21NmXjk9t8tVrkdd%2BouA7lBiful3Rzr%2BgUvrwAiB%2FuU98AxnpFfKGfFq%2F7xs1WFzm%2BuKjKqkNJWyPE9KjPCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMAxUMafMGoV3MXIyOKtwDelDfI0emLueWuqCdSa8sa2gvVF696jZCkCsbb5PXnL3HAnRhM2rtagW3P7nf2m%2FGcPtyifHbniEOFQUiGX6bEqErUn8AaogK%2FreJ0C67bkrosxAliXsinI2mbxvHm0BBRc8VDHXiE2my%2BcefLHXMYQSru9PnXhPh0AvONRBnETbBZxXZ9NhK2cQZnqsGSy9PDpm7AGqzZvIOw%2BfIvwI%2BYPfWpoaSXWxYesOuD5Ct0Zy5HE5Bi7WCZg7BieaPzqGAu1dyjRvem7%2BMMPncXg33OwsyfZxTsdxrCwRfJlMR7PaOEvAsXlwAHbYIHqMsjgwhfsvfR%2FW%2FXIDhk0xFSMEhlj%2BBk0PELckI08rSv3R6Urw38aUE09w62Eqp2KhdKm8%2BzgG3RQ%2Bzl0%2FpGAfxzHQvblhS%2FwGqQGTJ8NIXaJjXLDIfd%2BfFbXsgQxfw3Gs%2FZ0pcUqHOR7hT87mr%2FErJHX4B%2BS4JDaGaFlV%2FDQTQ1I3X4OrFt82a7onCyUN%2B65tdMel1n8W7BjXBYN0IkNR1m6Br9bc%2B6gviqbCcwSTZ4TetA9NBQU6bVZLXAmyyz4Q9umYotl2F89INKBTlo8a2N8oRgBhCi4NUlVtJlR%2BM9PQ1FEdGcbS7Tj2b7okyqqwwlPWGxwY6pgFRFxqq2ks3fuTx8JiBagegQD0FLaAHgbd5MIMyMttvaBMdN5wOz2cOcWSDKmf02RtLnPbiz3FVrSZ3tZ4%2F7068bfjcJJgRhKTYxDj7DtRlNV58H1uF4VnnUHh2S7EnAo10abV1v4dsyQnTXpZrza3ruoAPa4soicC6xKqys%2Bb%2BrDk80JGwsWU2gi0cPfrH0wqBlHqk8%2BT0mQljUmJDQy8wPBP2elqV&X-Amz-Signature=9a9655d710413b49e050eb4d8dd048cf07b6ca9c628b690cbb90a074e250b7a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CEETXFZ%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKi%2Flc21NmXjk9t8tVrkdd%2BouA7lBiful3Rzr%2BgUvrwAiB%2FuU98AxnpFfKGfFq%2F7xs1WFzm%2BuKjKqkNJWyPE9KjPCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMAxUMafMGoV3MXIyOKtwDelDfI0emLueWuqCdSa8sa2gvVF696jZCkCsbb5PXnL3HAnRhM2rtagW3P7nf2m%2FGcPtyifHbniEOFQUiGX6bEqErUn8AaogK%2FreJ0C67bkrosxAliXsinI2mbxvHm0BBRc8VDHXiE2my%2BcefLHXMYQSru9PnXhPh0AvONRBnETbBZxXZ9NhK2cQZnqsGSy9PDpm7AGqzZvIOw%2BfIvwI%2BYPfWpoaSXWxYesOuD5Ct0Zy5HE5Bi7WCZg7BieaPzqGAu1dyjRvem7%2BMMPncXg33OwsyfZxTsdxrCwRfJlMR7PaOEvAsXlwAHbYIHqMsjgwhfsvfR%2FW%2FXIDhk0xFSMEhlj%2BBk0PELckI08rSv3R6Urw38aUE09w62Eqp2KhdKm8%2BzgG3RQ%2Bzl0%2FpGAfxzHQvblhS%2FwGqQGTJ8NIXaJjXLDIfd%2BfFbXsgQxfw3Gs%2FZ0pcUqHOR7hT87mr%2FErJHX4B%2BS4JDaGaFlV%2FDQTQ1I3X4OrFt82a7onCyUN%2B65tdMel1n8W7BjXBYN0IkNR1m6Br9bc%2B6gviqbCcwSTZ4TetA9NBQU6bVZLXAmyyz4Q9umYotl2F89INKBTlo8a2N8oRgBhCi4NUlVtJlR%2BM9PQ1FEdGcbS7Tj2b7okyqqwwlPWGxwY6pgFRFxqq2ks3fuTx8JiBagegQD0FLaAHgbd5MIMyMttvaBMdN5wOz2cOcWSDKmf02RtLnPbiz3FVrSZ3tZ4%2F7068bfjcJJgRhKTYxDj7DtRlNV58H1uF4VnnUHh2S7EnAo10abV1v4dsyQnTXpZrza3ruoAPa4soicC6xKqys%2Bb%2BrDk80JGwsWU2gi0cPfrH0wqBlHqk8%2BT0mQljUmJDQy8wPBP2elqV&X-Amz-Signature=0d45e82422e1eddd15593f7a82c1acbb0bb8555805c1646437aa2cf0db53a141&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CEETXFZ%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKi%2Flc21NmXjk9t8tVrkdd%2BouA7lBiful3Rzr%2BgUvrwAiB%2FuU98AxnpFfKGfFq%2F7xs1WFzm%2BuKjKqkNJWyPE9KjPCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMAxUMafMGoV3MXIyOKtwDelDfI0emLueWuqCdSa8sa2gvVF696jZCkCsbb5PXnL3HAnRhM2rtagW3P7nf2m%2FGcPtyifHbniEOFQUiGX6bEqErUn8AaogK%2FreJ0C67bkrosxAliXsinI2mbxvHm0BBRc8VDHXiE2my%2BcefLHXMYQSru9PnXhPh0AvONRBnETbBZxXZ9NhK2cQZnqsGSy9PDpm7AGqzZvIOw%2BfIvwI%2BYPfWpoaSXWxYesOuD5Ct0Zy5HE5Bi7WCZg7BieaPzqGAu1dyjRvem7%2BMMPncXg33OwsyfZxTsdxrCwRfJlMR7PaOEvAsXlwAHbYIHqMsjgwhfsvfR%2FW%2FXIDhk0xFSMEhlj%2BBk0PELckI08rSv3R6Urw38aUE09w62Eqp2KhdKm8%2BzgG3RQ%2Bzl0%2FpGAfxzHQvblhS%2FwGqQGTJ8NIXaJjXLDIfd%2BfFbXsgQxfw3Gs%2FZ0pcUqHOR7hT87mr%2FErJHX4B%2BS4JDaGaFlV%2FDQTQ1I3X4OrFt82a7onCyUN%2B65tdMel1n8W7BjXBYN0IkNR1m6Br9bc%2B6gviqbCcwSTZ4TetA9NBQU6bVZLXAmyyz4Q9umYotl2F89INKBTlo8a2N8oRgBhCi4NUlVtJlR%2BM9PQ1FEdGcbS7Tj2b7okyqqwwlPWGxwY6pgFRFxqq2ks3fuTx8JiBagegQD0FLaAHgbd5MIMyMttvaBMdN5wOz2cOcWSDKmf02RtLnPbiz3FVrSZ3tZ4%2F7068bfjcJJgRhKTYxDj7DtRlNV58H1uF4VnnUHh2S7EnAo10abV1v4dsyQnTXpZrza3ruoAPa4soicC6xKqys%2Bb%2BrDk80JGwsWU2gi0cPfrH0wqBlHqk8%2BT0mQljUmJDQy8wPBP2elqV&X-Amz-Signature=35d68f84ce36f5ecff7e038eb4871223940022373610ab03ff6005fb6eb6f372&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CEETXFZ%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKi%2Flc21NmXjk9t8tVrkdd%2BouA7lBiful3Rzr%2BgUvrwAiB%2FuU98AxnpFfKGfFq%2F7xs1WFzm%2BuKjKqkNJWyPE9KjPCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMAxUMafMGoV3MXIyOKtwDelDfI0emLueWuqCdSa8sa2gvVF696jZCkCsbb5PXnL3HAnRhM2rtagW3P7nf2m%2FGcPtyifHbniEOFQUiGX6bEqErUn8AaogK%2FreJ0C67bkrosxAliXsinI2mbxvHm0BBRc8VDHXiE2my%2BcefLHXMYQSru9PnXhPh0AvONRBnETbBZxXZ9NhK2cQZnqsGSy9PDpm7AGqzZvIOw%2BfIvwI%2BYPfWpoaSXWxYesOuD5Ct0Zy5HE5Bi7WCZg7BieaPzqGAu1dyjRvem7%2BMMPncXg33OwsyfZxTsdxrCwRfJlMR7PaOEvAsXlwAHbYIHqMsjgwhfsvfR%2FW%2FXIDhk0xFSMEhlj%2BBk0PELckI08rSv3R6Urw38aUE09w62Eqp2KhdKm8%2BzgG3RQ%2Bzl0%2FpGAfxzHQvblhS%2FwGqQGTJ8NIXaJjXLDIfd%2BfFbXsgQxfw3Gs%2FZ0pcUqHOR7hT87mr%2FErJHX4B%2BS4JDaGaFlV%2FDQTQ1I3X4OrFt82a7onCyUN%2B65tdMel1n8W7BjXBYN0IkNR1m6Br9bc%2B6gviqbCcwSTZ4TetA9NBQU6bVZLXAmyyz4Q9umYotl2F89INKBTlo8a2N8oRgBhCi4NUlVtJlR%2BM9PQ1FEdGcbS7Tj2b7okyqqwwlPWGxwY6pgFRFxqq2ks3fuTx8JiBagegQD0FLaAHgbd5MIMyMttvaBMdN5wOz2cOcWSDKmf02RtLnPbiz3FVrSZ3tZ4%2F7068bfjcJJgRhKTYxDj7DtRlNV58H1uF4VnnUHh2S7EnAo10abV1v4dsyQnTXpZrza3ruoAPa4soicC6xKqys%2Bb%2BrDk80JGwsWU2gi0cPfrH0wqBlHqk8%2BT0mQljUmJDQy8wPBP2elqV&X-Amz-Signature=5144f1d32894d2879e58505f6156fa7b5bfbf63ccd392616fb23b0b6a848de7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CEETXFZ%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKi%2Flc21NmXjk9t8tVrkdd%2BouA7lBiful3Rzr%2BgUvrwAiB%2FuU98AxnpFfKGfFq%2F7xs1WFzm%2BuKjKqkNJWyPE9KjPCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMAxUMafMGoV3MXIyOKtwDelDfI0emLueWuqCdSa8sa2gvVF696jZCkCsbb5PXnL3HAnRhM2rtagW3P7nf2m%2FGcPtyifHbniEOFQUiGX6bEqErUn8AaogK%2FreJ0C67bkrosxAliXsinI2mbxvHm0BBRc8VDHXiE2my%2BcefLHXMYQSru9PnXhPh0AvONRBnETbBZxXZ9NhK2cQZnqsGSy9PDpm7AGqzZvIOw%2BfIvwI%2BYPfWpoaSXWxYesOuD5Ct0Zy5HE5Bi7WCZg7BieaPzqGAu1dyjRvem7%2BMMPncXg33OwsyfZxTsdxrCwRfJlMR7PaOEvAsXlwAHbYIHqMsjgwhfsvfR%2FW%2FXIDhk0xFSMEhlj%2BBk0PELckI08rSv3R6Urw38aUE09w62Eqp2KhdKm8%2BzgG3RQ%2Bzl0%2FpGAfxzHQvblhS%2FwGqQGTJ8NIXaJjXLDIfd%2BfFbXsgQxfw3Gs%2FZ0pcUqHOR7hT87mr%2FErJHX4B%2BS4JDaGaFlV%2FDQTQ1I3X4OrFt82a7onCyUN%2B65tdMel1n8W7BjXBYN0IkNR1m6Br9bc%2B6gviqbCcwSTZ4TetA9NBQU6bVZLXAmyyz4Q9umYotl2F89INKBTlo8a2N8oRgBhCi4NUlVtJlR%2BM9PQ1FEdGcbS7Tj2b7okyqqwwlPWGxwY6pgFRFxqq2ks3fuTx8JiBagegQD0FLaAHgbd5MIMyMttvaBMdN5wOz2cOcWSDKmf02RtLnPbiz3FVrSZ3tZ4%2F7068bfjcJJgRhKTYxDj7DtRlNV58H1uF4VnnUHh2S7EnAo10abV1v4dsyQnTXpZrza3ruoAPa4soicC6xKqys%2Bb%2BrDk80JGwsWU2gi0cPfrH0wqBlHqk8%2BT0mQljUmJDQy8wPBP2elqV&X-Amz-Signature=a5a607607bc4d8a277a6ab64cbaf2482fa9d82f84411407e0cb61ead5647560d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CEETXFZ%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKi%2Flc21NmXjk9t8tVrkdd%2BouA7lBiful3Rzr%2BgUvrwAiB%2FuU98AxnpFfKGfFq%2F7xs1WFzm%2BuKjKqkNJWyPE9KjPCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMAxUMafMGoV3MXIyOKtwDelDfI0emLueWuqCdSa8sa2gvVF696jZCkCsbb5PXnL3HAnRhM2rtagW3P7nf2m%2FGcPtyifHbniEOFQUiGX6bEqErUn8AaogK%2FreJ0C67bkrosxAliXsinI2mbxvHm0BBRc8VDHXiE2my%2BcefLHXMYQSru9PnXhPh0AvONRBnETbBZxXZ9NhK2cQZnqsGSy9PDpm7AGqzZvIOw%2BfIvwI%2BYPfWpoaSXWxYesOuD5Ct0Zy5HE5Bi7WCZg7BieaPzqGAu1dyjRvem7%2BMMPncXg33OwsyfZxTsdxrCwRfJlMR7PaOEvAsXlwAHbYIHqMsjgwhfsvfR%2FW%2FXIDhk0xFSMEhlj%2BBk0PELckI08rSv3R6Urw38aUE09w62Eqp2KhdKm8%2BzgG3RQ%2Bzl0%2FpGAfxzHQvblhS%2FwGqQGTJ8NIXaJjXLDIfd%2BfFbXsgQxfw3Gs%2FZ0pcUqHOR7hT87mr%2FErJHX4B%2BS4JDaGaFlV%2FDQTQ1I3X4OrFt82a7onCyUN%2B65tdMel1n8W7BjXBYN0IkNR1m6Br9bc%2B6gviqbCcwSTZ4TetA9NBQU6bVZLXAmyyz4Q9umYotl2F89INKBTlo8a2N8oRgBhCi4NUlVtJlR%2BM9PQ1FEdGcbS7Tj2b7okyqqwwlPWGxwY6pgFRFxqq2ks3fuTx8JiBagegQD0FLaAHgbd5MIMyMttvaBMdN5wOz2cOcWSDKmf02RtLnPbiz3FVrSZ3tZ4%2F7068bfjcJJgRhKTYxDj7DtRlNV58H1uF4VnnUHh2S7EnAo10abV1v4dsyQnTXpZrza3ruoAPa4soicC6xKqys%2Bb%2BrDk80JGwsWU2gi0cPfrH0wqBlHqk8%2BT0mQljUmJDQy8wPBP2elqV&X-Amz-Signature=6bac8ec6f4c8efb7d18c8889a74efc226051099d59543134e924774c6962eba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CEETXFZ%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKi%2Flc21NmXjk9t8tVrkdd%2BouA7lBiful3Rzr%2BgUvrwAiB%2FuU98AxnpFfKGfFq%2F7xs1WFzm%2BuKjKqkNJWyPE9KjPCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMAxUMafMGoV3MXIyOKtwDelDfI0emLueWuqCdSa8sa2gvVF696jZCkCsbb5PXnL3HAnRhM2rtagW3P7nf2m%2FGcPtyifHbniEOFQUiGX6bEqErUn8AaogK%2FreJ0C67bkrosxAliXsinI2mbxvHm0BBRc8VDHXiE2my%2BcefLHXMYQSru9PnXhPh0AvONRBnETbBZxXZ9NhK2cQZnqsGSy9PDpm7AGqzZvIOw%2BfIvwI%2BYPfWpoaSXWxYesOuD5Ct0Zy5HE5Bi7WCZg7BieaPzqGAu1dyjRvem7%2BMMPncXg33OwsyfZxTsdxrCwRfJlMR7PaOEvAsXlwAHbYIHqMsjgwhfsvfR%2FW%2FXIDhk0xFSMEhlj%2BBk0PELckI08rSv3R6Urw38aUE09w62Eqp2KhdKm8%2BzgG3RQ%2Bzl0%2FpGAfxzHQvblhS%2FwGqQGTJ8NIXaJjXLDIfd%2BfFbXsgQxfw3Gs%2FZ0pcUqHOR7hT87mr%2FErJHX4B%2BS4JDaGaFlV%2FDQTQ1I3X4OrFt82a7onCyUN%2B65tdMel1n8W7BjXBYN0IkNR1m6Br9bc%2B6gviqbCcwSTZ4TetA9NBQU6bVZLXAmyyz4Q9umYotl2F89INKBTlo8a2N8oRgBhCi4NUlVtJlR%2BM9PQ1FEdGcbS7Tj2b7okyqqwwlPWGxwY6pgFRFxqq2ks3fuTx8JiBagegQD0FLaAHgbd5MIMyMttvaBMdN5wOz2cOcWSDKmf02RtLnPbiz3FVrSZ3tZ4%2F7068bfjcJJgRhKTYxDj7DtRlNV58H1uF4VnnUHh2S7EnAo10abV1v4dsyQnTXpZrza3ruoAPa4soicC6xKqys%2Bb%2BrDk80JGwsWU2gi0cPfrH0wqBlHqk8%2BT0mQljUmJDQy8wPBP2elqV&X-Amz-Signature=9a9655d710413b49e050eb4d8dd048cf07b6ca9c628b690cbb90a074e250b7a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
