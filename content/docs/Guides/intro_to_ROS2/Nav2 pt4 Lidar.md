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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JBZS3ZD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQD8Vg%2FuPj%2BGZuH5PGCuqhMU98KTqHjzFlLaKteDJ5XCWQIgPmqHJakWoJD8n8goZNkOmLXTeDv81WsO3IyxvcuCVMEq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDC3VHalTUYVghflqgyrcA6zZQThwDfbGylI9548dOWV5CDLnGw7WsQZYN5p0bYGmaAIN1vdLDy%2B1mMCUY1jCTWZQflOU%2BOHibj8DICDhVdtt%2F0nazZ5Pwf%2BWW4XMZcgyq2y22VR8RGZHAvOAvNAlHlBoNZxlNc1nqoUW18BlyjSkgxeovqOYwqKq902GFLNjmUWVu4WoNPaQ9D%2BBYplc20qB1AbLX6mjG%2BMZKUvAQUEgKTGtvjlKpONgpIZmAR8Y9WkSZNam%2BoS31Kh0dna1arY%2Fe05JzsDlRjre6v%2BVPMEOF2QN0I3742SRaXMw2jIZJb2Xlu6KfnwrQ7%2FLLm%2Fx0GaUfvV0cOAxHrp5FIC6pKX22elrIlUuf4ZGNP7%2BbMWbpgxu0Ndy0Y29ZU2sC7kfC4OQxnhTK0BLoEn7waXzT0fCKYiBgqiDG20V9TMx7Q%2BguwajqIGWU6yj1kgZwcvLzMITSH6iyQdxADEWoXSZ0vwIc6Oikk7k7LcPoQMwhUGE4ip%2FGtdOOSruinfpK1R%2FGh6wfb5deKzGn6XxgLSB3rJeop%2F5EeIzirjjQGIae485PMVfADbbu5WTcSJJZ9MG%2BjuLKELkn4ZPyo1HwLXI0yH%2BG7EfcN57YxjWv%2B3PQBLDEbid9FGtEhdRbNKbMJqN%2BcQGOqUBOnUSjDPVCOPXz%2F5xA1a4p0d7bNHsMgPh53Vy7l1t9xUCTz9AMMT9Wm9ce6rnTWzdsNjnRHyse4ETx50zd45LQFX%2BhF5tm4iKjLzVH4grPEBWXMI3UAcjZqXECNT1ztU9R619BumzAFIgxpWr1voCHOho8%2B0Xaxl4hZAN%2BWQm5Tazn84iQd7HMqoGCNJ%2BteOUfDWq7g%2BbrpiwlrfTR%2BB1xQZ%2BAFUm&X-Amz-Signature=4c25014f587a06ff8a8e5a091b0956082fbb7394c41a050d37caa4c6dc7dce9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRQVSUL6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQD%2BeH3qUGqiDJdtbZ%2FTHLY8Ioy7xOrahDVp%2BOWLSHwKAQIgZT5n6Zy8iAV8v9E0Ixe6YgG48DDZ1pL806plHZqXe9Uq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDJrhi8HORXTQSlfaEyrcA%2BqR4JHnf8KxWoXppXlc0vBWc1ku9Yuvj5oOlV4aTHheAjmvaCW7YaQTtKK627qSUAEeQ3SfihTukZZ4aidgHorzsYtuieIR6K8YUoIUiIp0COjHgzBIik5p%2FPj5ouSPBwTFGsvlPwqHfwmK4udPla%2BG73PVwsQYUeeNKNLQcoROq2n2p1lwMfFe1s1LydSTcNry8nBXoL1CCMVITxWwbNe9akvH90OzpsYyayPNg6qOCo8qAeNvulM9EE0OlWcKMQZ2UbgpCISg1ZFZ%2BoD%2FIF64zpdaumhcosBnLCoKsOMh8%2FfI648jmE15p1L%2BvUA%2FfEA%2B%2F4uRMyHhTEZPvlpd9%2FY%2BZk50QSLuwTpqFp%2FxltBdgUwzMVMF9phuMJb3wQJBD2P9UT8ipS1smb4UvXTmaAsCioInDarh%2FL%2FN2TtHzBnrreGPk41AM4TMnwuVa8XTSMP12G0mNTbzG2pptSCiiNNv2WqvQPvlQxd%2B6iItiy6saIvXBtbceXEOeDFWjUleYdCEr9ztGFQFpU7ZYhGMhBKFkSAldqWUU%2BodWCK3BezXMTMqM3zlJgDr3ALtDH0hvR%2BiCvheLO3vftgDt6ourelugqa7%2F6D1Yd1hLDH8H6VatSubhrqg4qgPwwESMJ6N%2BcQGOqUBUgBO9v%2Bo%2F2m8Lj0eDvcD%2FjpgHQ1V5EIs6oUtrb3RDF9eraV5B5rI6BfzjmKtPeWqOEdUbrMDLQNSjIldssUlPnVaUvKiq4sikakXWNCNTKEM%2BBdHZrzeZ1x12VKLQtGnkPveEGqfKZz0dVgK9Z9BN4hlefKu%2BUbRIdMTHndljMP11HBtb5%2Fo2EstFUPJmTxwVM6yfrZ%2BYJTIZPMvUSEewO10Clsl&X-Amz-Signature=ab585d0554dc19a5945d55695adb4be06aa86168fc8e3437a9d5d8420cd53db1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRQVSUL6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQD%2BeH3qUGqiDJdtbZ%2FTHLY8Ioy7xOrahDVp%2BOWLSHwKAQIgZT5n6Zy8iAV8v9E0Ixe6YgG48DDZ1pL806plHZqXe9Uq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDJrhi8HORXTQSlfaEyrcA%2BqR4JHnf8KxWoXppXlc0vBWc1ku9Yuvj5oOlV4aTHheAjmvaCW7YaQTtKK627qSUAEeQ3SfihTukZZ4aidgHorzsYtuieIR6K8YUoIUiIp0COjHgzBIik5p%2FPj5ouSPBwTFGsvlPwqHfwmK4udPla%2BG73PVwsQYUeeNKNLQcoROq2n2p1lwMfFe1s1LydSTcNry8nBXoL1CCMVITxWwbNe9akvH90OzpsYyayPNg6qOCo8qAeNvulM9EE0OlWcKMQZ2UbgpCISg1ZFZ%2BoD%2FIF64zpdaumhcosBnLCoKsOMh8%2FfI648jmE15p1L%2BvUA%2FfEA%2B%2F4uRMyHhTEZPvlpd9%2FY%2BZk50QSLuwTpqFp%2FxltBdgUwzMVMF9phuMJb3wQJBD2P9UT8ipS1smb4UvXTmaAsCioInDarh%2FL%2FN2TtHzBnrreGPk41AM4TMnwuVa8XTSMP12G0mNTbzG2pptSCiiNNv2WqvQPvlQxd%2B6iItiy6saIvXBtbceXEOeDFWjUleYdCEr9ztGFQFpU7ZYhGMhBKFkSAldqWUU%2BodWCK3BezXMTMqM3zlJgDr3ALtDH0hvR%2BiCvheLO3vftgDt6ourelugqa7%2F6D1Yd1hLDH8H6VatSubhrqg4qgPwwESMJ6N%2BcQGOqUBUgBO9v%2Bo%2F2m8Lj0eDvcD%2FjpgHQ1V5EIs6oUtrb3RDF9eraV5B5rI6BfzjmKtPeWqOEdUbrMDLQNSjIldssUlPnVaUvKiq4sikakXWNCNTKEM%2BBdHZrzeZ1x12VKLQtGnkPveEGqfKZz0dVgK9Z9BN4hlefKu%2BUbRIdMTHndljMP11HBtb5%2Fo2EstFUPJmTxwVM6yfrZ%2BYJTIZPMvUSEewO10Clsl&X-Amz-Signature=386756230c58b9e72a109c7eed00ec4d2268b85898ed5240f521c2f9ea41dced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRQVSUL6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQD%2BeH3qUGqiDJdtbZ%2FTHLY8Ioy7xOrahDVp%2BOWLSHwKAQIgZT5n6Zy8iAV8v9E0Ixe6YgG48DDZ1pL806plHZqXe9Uq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDJrhi8HORXTQSlfaEyrcA%2BqR4JHnf8KxWoXppXlc0vBWc1ku9Yuvj5oOlV4aTHheAjmvaCW7YaQTtKK627qSUAEeQ3SfihTukZZ4aidgHorzsYtuieIR6K8YUoIUiIp0COjHgzBIik5p%2FPj5ouSPBwTFGsvlPwqHfwmK4udPla%2BG73PVwsQYUeeNKNLQcoROq2n2p1lwMfFe1s1LydSTcNry8nBXoL1CCMVITxWwbNe9akvH90OzpsYyayPNg6qOCo8qAeNvulM9EE0OlWcKMQZ2UbgpCISg1ZFZ%2BoD%2FIF64zpdaumhcosBnLCoKsOMh8%2FfI648jmE15p1L%2BvUA%2FfEA%2B%2F4uRMyHhTEZPvlpd9%2FY%2BZk50QSLuwTpqFp%2FxltBdgUwzMVMF9phuMJb3wQJBD2P9UT8ipS1smb4UvXTmaAsCioInDarh%2FL%2FN2TtHzBnrreGPk41AM4TMnwuVa8XTSMP12G0mNTbzG2pptSCiiNNv2WqvQPvlQxd%2B6iItiy6saIvXBtbceXEOeDFWjUleYdCEr9ztGFQFpU7ZYhGMhBKFkSAldqWUU%2BodWCK3BezXMTMqM3zlJgDr3ALtDH0hvR%2BiCvheLO3vftgDt6ourelugqa7%2F6D1Yd1hLDH8H6VatSubhrqg4qgPwwESMJ6N%2BcQGOqUBUgBO9v%2Bo%2F2m8Lj0eDvcD%2FjpgHQ1V5EIs6oUtrb3RDF9eraV5B5rI6BfzjmKtPeWqOEdUbrMDLQNSjIldssUlPnVaUvKiq4sikakXWNCNTKEM%2BBdHZrzeZ1x12VKLQtGnkPveEGqfKZz0dVgK9Z9BN4hlefKu%2BUbRIdMTHndljMP11HBtb5%2Fo2EstFUPJmTxwVM6yfrZ%2BYJTIZPMvUSEewO10Clsl&X-Amz-Signature=280aa90aac9573601c398f317caee5d5bde901c9d1588cc177d51939ecb188e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRQVSUL6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQD%2BeH3qUGqiDJdtbZ%2FTHLY8Ioy7xOrahDVp%2BOWLSHwKAQIgZT5n6Zy8iAV8v9E0Ixe6YgG48DDZ1pL806plHZqXe9Uq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDJrhi8HORXTQSlfaEyrcA%2BqR4JHnf8KxWoXppXlc0vBWc1ku9Yuvj5oOlV4aTHheAjmvaCW7YaQTtKK627qSUAEeQ3SfihTukZZ4aidgHorzsYtuieIR6K8YUoIUiIp0COjHgzBIik5p%2FPj5ouSPBwTFGsvlPwqHfwmK4udPla%2BG73PVwsQYUeeNKNLQcoROq2n2p1lwMfFe1s1LydSTcNry8nBXoL1CCMVITxWwbNe9akvH90OzpsYyayPNg6qOCo8qAeNvulM9EE0OlWcKMQZ2UbgpCISg1ZFZ%2BoD%2FIF64zpdaumhcosBnLCoKsOMh8%2FfI648jmE15p1L%2BvUA%2FfEA%2B%2F4uRMyHhTEZPvlpd9%2FY%2BZk50QSLuwTpqFp%2FxltBdgUwzMVMF9phuMJb3wQJBD2P9UT8ipS1smb4UvXTmaAsCioInDarh%2FL%2FN2TtHzBnrreGPk41AM4TMnwuVa8XTSMP12G0mNTbzG2pptSCiiNNv2WqvQPvlQxd%2B6iItiy6saIvXBtbceXEOeDFWjUleYdCEr9ztGFQFpU7ZYhGMhBKFkSAldqWUU%2BodWCK3BezXMTMqM3zlJgDr3ALtDH0hvR%2BiCvheLO3vftgDt6ourelugqa7%2F6D1Yd1hLDH8H6VatSubhrqg4qgPwwESMJ6N%2BcQGOqUBUgBO9v%2Bo%2F2m8Lj0eDvcD%2FjpgHQ1V5EIs6oUtrb3RDF9eraV5B5rI6BfzjmKtPeWqOEdUbrMDLQNSjIldssUlPnVaUvKiq4sikakXWNCNTKEM%2BBdHZrzeZ1x12VKLQtGnkPveEGqfKZz0dVgK9Z9BN4hlefKu%2BUbRIdMTHndljMP11HBtb5%2Fo2EstFUPJmTxwVM6yfrZ%2BYJTIZPMvUSEewO10Clsl&X-Amz-Signature=6cd2b0386c6a1439690783cc4131cb15feb9cba110e3437f461288ab82df001c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRQVSUL6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQD%2BeH3qUGqiDJdtbZ%2FTHLY8Ioy7xOrahDVp%2BOWLSHwKAQIgZT5n6Zy8iAV8v9E0Ixe6YgG48DDZ1pL806plHZqXe9Uq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDJrhi8HORXTQSlfaEyrcA%2BqR4JHnf8KxWoXppXlc0vBWc1ku9Yuvj5oOlV4aTHheAjmvaCW7YaQTtKK627qSUAEeQ3SfihTukZZ4aidgHorzsYtuieIR6K8YUoIUiIp0COjHgzBIik5p%2FPj5ouSPBwTFGsvlPwqHfwmK4udPla%2BG73PVwsQYUeeNKNLQcoROq2n2p1lwMfFe1s1LydSTcNry8nBXoL1CCMVITxWwbNe9akvH90OzpsYyayPNg6qOCo8qAeNvulM9EE0OlWcKMQZ2UbgpCISg1ZFZ%2BoD%2FIF64zpdaumhcosBnLCoKsOMh8%2FfI648jmE15p1L%2BvUA%2FfEA%2B%2F4uRMyHhTEZPvlpd9%2FY%2BZk50QSLuwTpqFp%2FxltBdgUwzMVMF9phuMJb3wQJBD2P9UT8ipS1smb4UvXTmaAsCioInDarh%2FL%2FN2TtHzBnrreGPk41AM4TMnwuVa8XTSMP12G0mNTbzG2pptSCiiNNv2WqvQPvlQxd%2B6iItiy6saIvXBtbceXEOeDFWjUleYdCEr9ztGFQFpU7ZYhGMhBKFkSAldqWUU%2BodWCK3BezXMTMqM3zlJgDr3ALtDH0hvR%2BiCvheLO3vftgDt6ourelugqa7%2F6D1Yd1hLDH8H6VatSubhrqg4qgPwwESMJ6N%2BcQGOqUBUgBO9v%2Bo%2F2m8Lj0eDvcD%2FjpgHQ1V5EIs6oUtrb3RDF9eraV5B5rI6BfzjmKtPeWqOEdUbrMDLQNSjIldssUlPnVaUvKiq4sikakXWNCNTKEM%2BBdHZrzeZ1x12VKLQtGnkPveEGqfKZz0dVgK9Z9BN4hlefKu%2BUbRIdMTHndljMP11HBtb5%2Fo2EstFUPJmTxwVM6yfrZ%2BYJTIZPMvUSEewO10Clsl&X-Amz-Signature=7684c8a8e9b7c871e19bdfb365e07a734f75c309049b5fd6f2cbda6b35e3845c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRQVSUL6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQD%2BeH3qUGqiDJdtbZ%2FTHLY8Ioy7xOrahDVp%2BOWLSHwKAQIgZT5n6Zy8iAV8v9E0Ixe6YgG48DDZ1pL806plHZqXe9Uq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDJrhi8HORXTQSlfaEyrcA%2BqR4JHnf8KxWoXppXlc0vBWc1ku9Yuvj5oOlV4aTHheAjmvaCW7YaQTtKK627qSUAEeQ3SfihTukZZ4aidgHorzsYtuieIR6K8YUoIUiIp0COjHgzBIik5p%2FPj5ouSPBwTFGsvlPwqHfwmK4udPla%2BG73PVwsQYUeeNKNLQcoROq2n2p1lwMfFe1s1LydSTcNry8nBXoL1CCMVITxWwbNe9akvH90OzpsYyayPNg6qOCo8qAeNvulM9EE0OlWcKMQZ2UbgpCISg1ZFZ%2BoD%2FIF64zpdaumhcosBnLCoKsOMh8%2FfI648jmE15p1L%2BvUA%2FfEA%2B%2F4uRMyHhTEZPvlpd9%2FY%2BZk50QSLuwTpqFp%2FxltBdgUwzMVMF9phuMJb3wQJBD2P9UT8ipS1smb4UvXTmaAsCioInDarh%2FL%2FN2TtHzBnrreGPk41AM4TMnwuVa8XTSMP12G0mNTbzG2pptSCiiNNv2WqvQPvlQxd%2B6iItiy6saIvXBtbceXEOeDFWjUleYdCEr9ztGFQFpU7ZYhGMhBKFkSAldqWUU%2BodWCK3BezXMTMqM3zlJgDr3ALtDH0hvR%2BiCvheLO3vftgDt6ourelugqa7%2F6D1Yd1hLDH8H6VatSubhrqg4qgPwwESMJ6N%2BcQGOqUBUgBO9v%2Bo%2F2m8Lj0eDvcD%2FjpgHQ1V5EIs6oUtrb3RDF9eraV5B5rI6BfzjmKtPeWqOEdUbrMDLQNSjIldssUlPnVaUvKiq4sikakXWNCNTKEM%2BBdHZrzeZ1x12VKLQtGnkPveEGqfKZz0dVgK9Z9BN4hlefKu%2BUbRIdMTHndljMP11HBtb5%2Fo2EstFUPJmTxwVM6yfrZ%2BYJTIZPMvUSEewO10Clsl&X-Amz-Signature=c003d43a51f758a7756568cf2ca34ee024ca150d046b88f420f0add12ee2aef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRQVSUL6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQD%2BeH3qUGqiDJdtbZ%2FTHLY8Ioy7xOrahDVp%2BOWLSHwKAQIgZT5n6Zy8iAV8v9E0Ixe6YgG48DDZ1pL806plHZqXe9Uq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDJrhi8HORXTQSlfaEyrcA%2BqR4JHnf8KxWoXppXlc0vBWc1ku9Yuvj5oOlV4aTHheAjmvaCW7YaQTtKK627qSUAEeQ3SfihTukZZ4aidgHorzsYtuieIR6K8YUoIUiIp0COjHgzBIik5p%2FPj5ouSPBwTFGsvlPwqHfwmK4udPla%2BG73PVwsQYUeeNKNLQcoROq2n2p1lwMfFe1s1LydSTcNry8nBXoL1CCMVITxWwbNe9akvH90OzpsYyayPNg6qOCo8qAeNvulM9EE0OlWcKMQZ2UbgpCISg1ZFZ%2BoD%2FIF64zpdaumhcosBnLCoKsOMh8%2FfI648jmE15p1L%2BvUA%2FfEA%2B%2F4uRMyHhTEZPvlpd9%2FY%2BZk50QSLuwTpqFp%2FxltBdgUwzMVMF9phuMJb3wQJBD2P9UT8ipS1smb4UvXTmaAsCioInDarh%2FL%2FN2TtHzBnrreGPk41AM4TMnwuVa8XTSMP12G0mNTbzG2pptSCiiNNv2WqvQPvlQxd%2B6iItiy6saIvXBtbceXEOeDFWjUleYdCEr9ztGFQFpU7ZYhGMhBKFkSAldqWUU%2BodWCK3BezXMTMqM3zlJgDr3ALtDH0hvR%2BiCvheLO3vftgDt6ourelugqa7%2F6D1Yd1hLDH8H6VatSubhrqg4qgPwwESMJ6N%2BcQGOqUBUgBO9v%2Bo%2F2m8Lj0eDvcD%2FjpgHQ1V5EIs6oUtrb3RDF9eraV5B5rI6BfzjmKtPeWqOEdUbrMDLQNSjIldssUlPnVaUvKiq4sikakXWNCNTKEM%2BBdHZrzeZ1x12VKLQtGnkPveEGqfKZz0dVgK9Z9BN4hlefKu%2BUbRIdMTHndljMP11HBtb5%2Fo2EstFUPJmTxwVM6yfrZ%2BYJTIZPMvUSEewO10Clsl&X-Amz-Signature=c5d5e5adc6e1771590d165fa9e3868bbc7862e350fd45040d520f2d5174bcd20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRQVSUL6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQD%2BeH3qUGqiDJdtbZ%2FTHLY8Ioy7xOrahDVp%2BOWLSHwKAQIgZT5n6Zy8iAV8v9E0Ixe6YgG48DDZ1pL806plHZqXe9Uq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDJrhi8HORXTQSlfaEyrcA%2BqR4JHnf8KxWoXppXlc0vBWc1ku9Yuvj5oOlV4aTHheAjmvaCW7YaQTtKK627qSUAEeQ3SfihTukZZ4aidgHorzsYtuieIR6K8YUoIUiIp0COjHgzBIik5p%2FPj5ouSPBwTFGsvlPwqHfwmK4udPla%2BG73PVwsQYUeeNKNLQcoROq2n2p1lwMfFe1s1LydSTcNry8nBXoL1CCMVITxWwbNe9akvH90OzpsYyayPNg6qOCo8qAeNvulM9EE0OlWcKMQZ2UbgpCISg1ZFZ%2BoD%2FIF64zpdaumhcosBnLCoKsOMh8%2FfI648jmE15p1L%2BvUA%2FfEA%2B%2F4uRMyHhTEZPvlpd9%2FY%2BZk50QSLuwTpqFp%2FxltBdgUwzMVMF9phuMJb3wQJBD2P9UT8ipS1smb4UvXTmaAsCioInDarh%2FL%2FN2TtHzBnrreGPk41AM4TMnwuVa8XTSMP12G0mNTbzG2pptSCiiNNv2WqvQPvlQxd%2B6iItiy6saIvXBtbceXEOeDFWjUleYdCEr9ztGFQFpU7ZYhGMhBKFkSAldqWUU%2BodWCK3BezXMTMqM3zlJgDr3ALtDH0hvR%2BiCvheLO3vftgDt6ourelugqa7%2F6D1Yd1hLDH8H6VatSubhrqg4qgPwwESMJ6N%2BcQGOqUBUgBO9v%2Bo%2F2m8Lj0eDvcD%2FjpgHQ1V5EIs6oUtrb3RDF9eraV5B5rI6BfzjmKtPeWqOEdUbrMDLQNSjIldssUlPnVaUvKiq4sikakXWNCNTKEM%2BBdHZrzeZ1x12VKLQtGnkPveEGqfKZz0dVgK9Z9BN4hlefKu%2BUbRIdMTHndljMP11HBtb5%2Fo2EstFUPJmTxwVM6yfrZ%2BYJTIZPMvUSEewO10Clsl&X-Amz-Signature=1768628a6d6b5a99f8032b0826a1dafc5ca9b6c281baf35311c358a5c415e455&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRQVSUL6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQD%2BeH3qUGqiDJdtbZ%2FTHLY8Ioy7xOrahDVp%2BOWLSHwKAQIgZT5n6Zy8iAV8v9E0Ixe6YgG48DDZ1pL806plHZqXe9Uq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDJrhi8HORXTQSlfaEyrcA%2BqR4JHnf8KxWoXppXlc0vBWc1ku9Yuvj5oOlV4aTHheAjmvaCW7YaQTtKK627qSUAEeQ3SfihTukZZ4aidgHorzsYtuieIR6K8YUoIUiIp0COjHgzBIik5p%2FPj5ouSPBwTFGsvlPwqHfwmK4udPla%2BG73PVwsQYUeeNKNLQcoROq2n2p1lwMfFe1s1LydSTcNry8nBXoL1CCMVITxWwbNe9akvH90OzpsYyayPNg6qOCo8qAeNvulM9EE0OlWcKMQZ2UbgpCISg1ZFZ%2BoD%2FIF64zpdaumhcosBnLCoKsOMh8%2FfI648jmE15p1L%2BvUA%2FfEA%2B%2F4uRMyHhTEZPvlpd9%2FY%2BZk50QSLuwTpqFp%2FxltBdgUwzMVMF9phuMJb3wQJBD2P9UT8ipS1smb4UvXTmaAsCioInDarh%2FL%2FN2TtHzBnrreGPk41AM4TMnwuVa8XTSMP12G0mNTbzG2pptSCiiNNv2WqvQPvlQxd%2B6iItiy6saIvXBtbceXEOeDFWjUleYdCEr9ztGFQFpU7ZYhGMhBKFkSAldqWUU%2BodWCK3BezXMTMqM3zlJgDr3ALtDH0hvR%2BiCvheLO3vftgDt6ourelugqa7%2F6D1Yd1hLDH8H6VatSubhrqg4qgPwwESMJ6N%2BcQGOqUBUgBO9v%2Bo%2F2m8Lj0eDvcD%2FjpgHQ1V5EIs6oUtrb3RDF9eraV5B5rI6BfzjmKtPeWqOEdUbrMDLQNSjIldssUlPnVaUvKiq4sikakXWNCNTKEM%2BBdHZrzeZ1x12VKLQtGnkPveEGqfKZz0dVgK9Z9BN4hlefKu%2BUbRIdMTHndljMP11HBtb5%2Fo2EstFUPJmTxwVM6yfrZ%2BYJTIZPMvUSEewO10Clsl&X-Amz-Signature=aa2635040b035918672012fd6fb3362657946f900a646ffbd26b3756fcb3af23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRQVSUL6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQD%2BeH3qUGqiDJdtbZ%2FTHLY8Ioy7xOrahDVp%2BOWLSHwKAQIgZT5n6Zy8iAV8v9E0Ixe6YgG48DDZ1pL806plHZqXe9Uq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDJrhi8HORXTQSlfaEyrcA%2BqR4JHnf8KxWoXppXlc0vBWc1ku9Yuvj5oOlV4aTHheAjmvaCW7YaQTtKK627qSUAEeQ3SfihTukZZ4aidgHorzsYtuieIR6K8YUoIUiIp0COjHgzBIik5p%2FPj5ouSPBwTFGsvlPwqHfwmK4udPla%2BG73PVwsQYUeeNKNLQcoROq2n2p1lwMfFe1s1LydSTcNry8nBXoL1CCMVITxWwbNe9akvH90OzpsYyayPNg6qOCo8qAeNvulM9EE0OlWcKMQZ2UbgpCISg1ZFZ%2BoD%2FIF64zpdaumhcosBnLCoKsOMh8%2FfI648jmE15p1L%2BvUA%2FfEA%2B%2F4uRMyHhTEZPvlpd9%2FY%2BZk50QSLuwTpqFp%2FxltBdgUwzMVMF9phuMJb3wQJBD2P9UT8ipS1smb4UvXTmaAsCioInDarh%2FL%2FN2TtHzBnrreGPk41AM4TMnwuVa8XTSMP12G0mNTbzG2pptSCiiNNv2WqvQPvlQxd%2B6iItiy6saIvXBtbceXEOeDFWjUleYdCEr9ztGFQFpU7ZYhGMhBKFkSAldqWUU%2BodWCK3BezXMTMqM3zlJgDr3ALtDH0hvR%2BiCvheLO3vftgDt6ourelugqa7%2F6D1Yd1hLDH8H6VatSubhrqg4qgPwwESMJ6N%2BcQGOqUBUgBO9v%2Bo%2F2m8Lj0eDvcD%2FjpgHQ1V5EIs6oUtrb3RDF9eraV5B5rI6BfzjmKtPeWqOEdUbrMDLQNSjIldssUlPnVaUvKiq4sikakXWNCNTKEM%2BBdHZrzeZ1x12VKLQtGnkPveEGqfKZz0dVgK9Z9BN4hlefKu%2BUbRIdMTHndljMP11HBtb5%2Fo2EstFUPJmTxwVM6yfrZ%2BYJTIZPMvUSEewO10Clsl&X-Amz-Signature=6cd2b0386c6a1439690783cc4131cb15feb9cba110e3437f461288ab82df001c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
