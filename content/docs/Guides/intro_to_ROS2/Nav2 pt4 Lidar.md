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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDRI5DPT%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDE5PxXPOWlkG3nIsOIfSjUlB790P6KYhgZgIzHFtjYeAIhANwUb7yUB9bKhlmhGL4gcgkJoTvFN3CyZjSlwYnUwEuHKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYHqtac%2FAbwU5oqQAq3AOuUzmw2uonJY%2F8EGlZUAugM5VHEExRpYHadPfCtZBgDwO2xfQObhyh%2BQmKV%2B6PdPliI1sUSRbfaLIReRbQBVN2XEmfh%2Bi9e2P%2BGiAx3NwgYwEKaTszRlbtjDS9C%2FzUZMZzKttJFsg1bCR6hcOa9g4lrvBOKGJYWNXIQUlauk25grmXEYjKxYiHFUgDsDR1V2RuEoFmJ8v35bJcgWtDy%2B35b8DCH3agowa%2BQwnpACxDW08wWXCWkjJ0KCIcQ4r6HbTyjz1R0fVQ1SlsO9B7MX5C0wsJ7FkMd%2BhJ7jZAuS2Oc2Hg2wewkdsr%2F7sth%2F%2FbgDDNm5azlsFAPUV8wimzLNvQmQ8xZzeIj%2F0GNj%2BSTdvbVnWTC9ZbzUaO65B721OuX9ymT%2B0ZC6TUgqWgDYieEgdf9dx2GcwSJ7YLcqQ68Rk41p4I3xegOFEpF0GU6Y4qQayditf5xJjdYMuXuAq%2BZlunu7Z5rseCsDMGeEks%2BjdU51vDB6eVknblR8KDNhA%2B4IwDlAeMIa8jPEsJP%2FK1y6iiTvqsYm4Zp8LsZM4fc1m7o%2BXmEdAQGz8oIvAm8aMeRgM5P1LuJGbTx%2BpNV8jTDg%2FOcHP%2BNakY3FY1Zkb7pQVculfVQhU%2BiFbfk9TlCDDAurDPBjqkAaFKgbMmnzQPGmAFMsEtVsAIDphD1%2FZY45jhblvVkCCtikpe2t%2FlMJBlQOGriDtpIyJPQEY95oUtlILh%2BAd4ZI4TjqF%2Fgs4Hk1mc2ucOV1oYBDXT5GOJaZzUdJ8svf8a4eSjVd72Lp%2BEuv%2BUXIJYoj3ZB4E3Ua9SX%2FgxTDNAYTx8WjghgLHa8oF%2FqwNnkDjbR5ue0soY%2BDAdp2d%2F0Y0YEpfB2e5D&X-Amz-Signature=910cfb284cc2a10942744234e763ff9f59fda138c9dca63e67c46f9536ad65db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFBLQFBA%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyXqD%2FKeOBvMkBgr393wkNkTAg0LyvEJzSKyqQwU%2BIBQIgD%2FWRRnQij0cwYW5C0zXe8gHvjmRvQZf9BM6KWgVnP%2FMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4YOtAhwDUULpXyxircA4Z4Sgju%2Fj%2FvqVj%2B3Ks8HuTSwBRe8xEVm57nuZSxSb6EgiHg%2Btte0TxuYJTDgqKWtlnlFLutPuqMIIxsFAoxf%2BuUwn91B8ZfF78DqL4aZIEpyt5w1bBvNrm0vwxFBL3LxjFiJ%2Fo3TPsOtBTeLUS6YF11qguYbCDzOe9uCLlAdMR%2BjVnHtrKzrASvgYqK4nJhdA54MtcY%2Bu1KKCG%2BfG4zt4LD6nYp3vZgC3Cwpqe7EWXStyXiusemignwEAKgIrfTx7IMUN%2F6T7dcR2ro24RnO2YItSRcsQ1IKxpFLdC7M6Qds2wg0DD7wh5Nu8gKSnij3tFd9LO15kB5pi2oj8tMoZF5CE6XaUoLr6ytk6GapNWZXY6UF7cHnvdAkYUtwNQE40EiUyKxw2w7IW7FYQEFnDUml3zeCLfJPa0wRSseuOe%2BXmxKyCkjjv7DXl%2FYn4VxgYBan9VikK6aH5pIAHlFhMw%2FAmVFAZZLXRlpXMjJRGSDyphGJULIFlA6pO1Jm0PILoyOLYYESzM4xFjlLvA7%2FCDKxXwDu7h6SkfapbVT5Cq3fvZEc%2BR8rjx8eCFuELDZXi5NZBd5C9KqA1ADT%2BgDCgc%2BE5%2B5JKCFNM5mO0mRFwb0%2ByDEkEAUKZYXhNvtMP25sM8GOqUB5VSEHkl93VNioUpwzGFka1AXx9FYdLAAWOiMAdqRg2I2wkhscadPtiqICEYqTx2nxxZ%2BcGlZhixmMzAklMMhmjbHGjAPgVBQRelfR%2BpPPvtQfm50G8gYAcqH4AyWAvj5YdFnFvIn42CA9nPBZ342v61K9b0xurR3iz39%2FmveJQe4hV4wtXD1HY5H%2FGiOuIcyNidtHLN6tDOYQKVW07fkyJLGRmnm&X-Amz-Signature=a7ef478eff46bc398ed3374754cb9834216f1c05a9261c9daf58e67621e10c0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFBLQFBA%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyXqD%2FKeOBvMkBgr393wkNkTAg0LyvEJzSKyqQwU%2BIBQIgD%2FWRRnQij0cwYW5C0zXe8gHvjmRvQZf9BM6KWgVnP%2FMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4YOtAhwDUULpXyxircA4Z4Sgju%2Fj%2FvqVj%2B3Ks8HuTSwBRe8xEVm57nuZSxSb6EgiHg%2Btte0TxuYJTDgqKWtlnlFLutPuqMIIxsFAoxf%2BuUwn91B8ZfF78DqL4aZIEpyt5w1bBvNrm0vwxFBL3LxjFiJ%2Fo3TPsOtBTeLUS6YF11qguYbCDzOe9uCLlAdMR%2BjVnHtrKzrASvgYqK4nJhdA54MtcY%2Bu1KKCG%2BfG4zt4LD6nYp3vZgC3Cwpqe7EWXStyXiusemignwEAKgIrfTx7IMUN%2F6T7dcR2ro24RnO2YItSRcsQ1IKxpFLdC7M6Qds2wg0DD7wh5Nu8gKSnij3tFd9LO15kB5pi2oj8tMoZF5CE6XaUoLr6ytk6GapNWZXY6UF7cHnvdAkYUtwNQE40EiUyKxw2w7IW7FYQEFnDUml3zeCLfJPa0wRSseuOe%2BXmxKyCkjjv7DXl%2FYn4VxgYBan9VikK6aH5pIAHlFhMw%2FAmVFAZZLXRlpXMjJRGSDyphGJULIFlA6pO1Jm0PILoyOLYYESzM4xFjlLvA7%2FCDKxXwDu7h6SkfapbVT5Cq3fvZEc%2BR8rjx8eCFuELDZXi5NZBd5C9KqA1ADT%2BgDCgc%2BE5%2B5JKCFNM5mO0mRFwb0%2ByDEkEAUKZYXhNvtMP25sM8GOqUB5VSEHkl93VNioUpwzGFka1AXx9FYdLAAWOiMAdqRg2I2wkhscadPtiqICEYqTx2nxxZ%2BcGlZhixmMzAklMMhmjbHGjAPgVBQRelfR%2BpPPvtQfm50G8gYAcqH4AyWAvj5YdFnFvIn42CA9nPBZ342v61K9b0xurR3iz39%2FmveJQe4hV4wtXD1HY5H%2FGiOuIcyNidtHLN6tDOYQKVW07fkyJLGRmnm&X-Amz-Signature=368e8dc6518a75e1f8b14b6fba7b2e7738b132ab8fc6a9774d23aebfa652fe13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFBLQFBA%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyXqD%2FKeOBvMkBgr393wkNkTAg0LyvEJzSKyqQwU%2BIBQIgD%2FWRRnQij0cwYW5C0zXe8gHvjmRvQZf9BM6KWgVnP%2FMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4YOtAhwDUULpXyxircA4Z4Sgju%2Fj%2FvqVj%2B3Ks8HuTSwBRe8xEVm57nuZSxSb6EgiHg%2Btte0TxuYJTDgqKWtlnlFLutPuqMIIxsFAoxf%2BuUwn91B8ZfF78DqL4aZIEpyt5w1bBvNrm0vwxFBL3LxjFiJ%2Fo3TPsOtBTeLUS6YF11qguYbCDzOe9uCLlAdMR%2BjVnHtrKzrASvgYqK4nJhdA54MtcY%2Bu1KKCG%2BfG4zt4LD6nYp3vZgC3Cwpqe7EWXStyXiusemignwEAKgIrfTx7IMUN%2F6T7dcR2ro24RnO2YItSRcsQ1IKxpFLdC7M6Qds2wg0DD7wh5Nu8gKSnij3tFd9LO15kB5pi2oj8tMoZF5CE6XaUoLr6ytk6GapNWZXY6UF7cHnvdAkYUtwNQE40EiUyKxw2w7IW7FYQEFnDUml3zeCLfJPa0wRSseuOe%2BXmxKyCkjjv7DXl%2FYn4VxgYBan9VikK6aH5pIAHlFhMw%2FAmVFAZZLXRlpXMjJRGSDyphGJULIFlA6pO1Jm0PILoyOLYYESzM4xFjlLvA7%2FCDKxXwDu7h6SkfapbVT5Cq3fvZEc%2BR8rjx8eCFuELDZXi5NZBd5C9KqA1ADT%2BgDCgc%2BE5%2B5JKCFNM5mO0mRFwb0%2ByDEkEAUKZYXhNvtMP25sM8GOqUB5VSEHkl93VNioUpwzGFka1AXx9FYdLAAWOiMAdqRg2I2wkhscadPtiqICEYqTx2nxxZ%2BcGlZhixmMzAklMMhmjbHGjAPgVBQRelfR%2BpPPvtQfm50G8gYAcqH4AyWAvj5YdFnFvIn42CA9nPBZ342v61K9b0xurR3iz39%2FmveJQe4hV4wtXD1HY5H%2FGiOuIcyNidtHLN6tDOYQKVW07fkyJLGRmnm&X-Amz-Signature=2a2687e6a6cb292f1114e5df0c2a62e681d83fa7128a280f2efacf48b96cabe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFBLQFBA%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyXqD%2FKeOBvMkBgr393wkNkTAg0LyvEJzSKyqQwU%2BIBQIgD%2FWRRnQij0cwYW5C0zXe8gHvjmRvQZf9BM6KWgVnP%2FMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4YOtAhwDUULpXyxircA4Z4Sgju%2Fj%2FvqVj%2B3Ks8HuTSwBRe8xEVm57nuZSxSb6EgiHg%2Btte0TxuYJTDgqKWtlnlFLutPuqMIIxsFAoxf%2BuUwn91B8ZfF78DqL4aZIEpyt5w1bBvNrm0vwxFBL3LxjFiJ%2Fo3TPsOtBTeLUS6YF11qguYbCDzOe9uCLlAdMR%2BjVnHtrKzrASvgYqK4nJhdA54MtcY%2Bu1KKCG%2BfG4zt4LD6nYp3vZgC3Cwpqe7EWXStyXiusemignwEAKgIrfTx7IMUN%2F6T7dcR2ro24RnO2YItSRcsQ1IKxpFLdC7M6Qds2wg0DD7wh5Nu8gKSnij3tFd9LO15kB5pi2oj8tMoZF5CE6XaUoLr6ytk6GapNWZXY6UF7cHnvdAkYUtwNQE40EiUyKxw2w7IW7FYQEFnDUml3zeCLfJPa0wRSseuOe%2BXmxKyCkjjv7DXl%2FYn4VxgYBan9VikK6aH5pIAHlFhMw%2FAmVFAZZLXRlpXMjJRGSDyphGJULIFlA6pO1Jm0PILoyOLYYESzM4xFjlLvA7%2FCDKxXwDu7h6SkfapbVT5Cq3fvZEc%2BR8rjx8eCFuELDZXi5NZBd5C9KqA1ADT%2BgDCgc%2BE5%2B5JKCFNM5mO0mRFwb0%2ByDEkEAUKZYXhNvtMP25sM8GOqUB5VSEHkl93VNioUpwzGFka1AXx9FYdLAAWOiMAdqRg2I2wkhscadPtiqICEYqTx2nxxZ%2BcGlZhixmMzAklMMhmjbHGjAPgVBQRelfR%2BpPPvtQfm50G8gYAcqH4AyWAvj5YdFnFvIn42CA9nPBZ342v61K9b0xurR3iz39%2FmveJQe4hV4wtXD1HY5H%2FGiOuIcyNidtHLN6tDOYQKVW07fkyJLGRmnm&X-Amz-Signature=ab5bd93e17cf0df638c823f8f70e29ff3d2d9f7e246bbcb6950d5f5d5a3d18eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFBLQFBA%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyXqD%2FKeOBvMkBgr393wkNkTAg0LyvEJzSKyqQwU%2BIBQIgD%2FWRRnQij0cwYW5C0zXe8gHvjmRvQZf9BM6KWgVnP%2FMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4YOtAhwDUULpXyxircA4Z4Sgju%2Fj%2FvqVj%2B3Ks8HuTSwBRe8xEVm57nuZSxSb6EgiHg%2Btte0TxuYJTDgqKWtlnlFLutPuqMIIxsFAoxf%2BuUwn91B8ZfF78DqL4aZIEpyt5w1bBvNrm0vwxFBL3LxjFiJ%2Fo3TPsOtBTeLUS6YF11qguYbCDzOe9uCLlAdMR%2BjVnHtrKzrASvgYqK4nJhdA54MtcY%2Bu1KKCG%2BfG4zt4LD6nYp3vZgC3Cwpqe7EWXStyXiusemignwEAKgIrfTx7IMUN%2F6T7dcR2ro24RnO2YItSRcsQ1IKxpFLdC7M6Qds2wg0DD7wh5Nu8gKSnij3tFd9LO15kB5pi2oj8tMoZF5CE6XaUoLr6ytk6GapNWZXY6UF7cHnvdAkYUtwNQE40EiUyKxw2w7IW7FYQEFnDUml3zeCLfJPa0wRSseuOe%2BXmxKyCkjjv7DXl%2FYn4VxgYBan9VikK6aH5pIAHlFhMw%2FAmVFAZZLXRlpXMjJRGSDyphGJULIFlA6pO1Jm0PILoyOLYYESzM4xFjlLvA7%2FCDKxXwDu7h6SkfapbVT5Cq3fvZEc%2BR8rjx8eCFuELDZXi5NZBd5C9KqA1ADT%2BgDCgc%2BE5%2B5JKCFNM5mO0mRFwb0%2ByDEkEAUKZYXhNvtMP25sM8GOqUB5VSEHkl93VNioUpwzGFka1AXx9FYdLAAWOiMAdqRg2I2wkhscadPtiqICEYqTx2nxxZ%2BcGlZhixmMzAklMMhmjbHGjAPgVBQRelfR%2BpPPvtQfm50G8gYAcqH4AyWAvj5YdFnFvIn42CA9nPBZ342v61K9b0xurR3iz39%2FmveJQe4hV4wtXD1HY5H%2FGiOuIcyNidtHLN6tDOYQKVW07fkyJLGRmnm&X-Amz-Signature=622a665ca9dfc4c20873d7261441d052472dad878c661d588a19930056aace19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFBLQFBA%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyXqD%2FKeOBvMkBgr393wkNkTAg0LyvEJzSKyqQwU%2BIBQIgD%2FWRRnQij0cwYW5C0zXe8gHvjmRvQZf9BM6KWgVnP%2FMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4YOtAhwDUULpXyxircA4Z4Sgju%2Fj%2FvqVj%2B3Ks8HuTSwBRe8xEVm57nuZSxSb6EgiHg%2Btte0TxuYJTDgqKWtlnlFLutPuqMIIxsFAoxf%2BuUwn91B8ZfF78DqL4aZIEpyt5w1bBvNrm0vwxFBL3LxjFiJ%2Fo3TPsOtBTeLUS6YF11qguYbCDzOe9uCLlAdMR%2BjVnHtrKzrASvgYqK4nJhdA54MtcY%2Bu1KKCG%2BfG4zt4LD6nYp3vZgC3Cwpqe7EWXStyXiusemignwEAKgIrfTx7IMUN%2F6T7dcR2ro24RnO2YItSRcsQ1IKxpFLdC7M6Qds2wg0DD7wh5Nu8gKSnij3tFd9LO15kB5pi2oj8tMoZF5CE6XaUoLr6ytk6GapNWZXY6UF7cHnvdAkYUtwNQE40EiUyKxw2w7IW7FYQEFnDUml3zeCLfJPa0wRSseuOe%2BXmxKyCkjjv7DXl%2FYn4VxgYBan9VikK6aH5pIAHlFhMw%2FAmVFAZZLXRlpXMjJRGSDyphGJULIFlA6pO1Jm0PILoyOLYYESzM4xFjlLvA7%2FCDKxXwDu7h6SkfapbVT5Cq3fvZEc%2BR8rjx8eCFuELDZXi5NZBd5C9KqA1ADT%2BgDCgc%2BE5%2B5JKCFNM5mO0mRFwb0%2ByDEkEAUKZYXhNvtMP25sM8GOqUB5VSEHkl93VNioUpwzGFka1AXx9FYdLAAWOiMAdqRg2I2wkhscadPtiqICEYqTx2nxxZ%2BcGlZhixmMzAklMMhmjbHGjAPgVBQRelfR%2BpPPvtQfm50G8gYAcqH4AyWAvj5YdFnFvIn42CA9nPBZ342v61K9b0xurR3iz39%2FmveJQe4hV4wtXD1HY5H%2FGiOuIcyNidtHLN6tDOYQKVW07fkyJLGRmnm&X-Amz-Signature=de418636cb1c5d70ee6912eff094a02f2fb10c9102c3ddf151726aba7f8903fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFBLQFBA%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyXqD%2FKeOBvMkBgr393wkNkTAg0LyvEJzSKyqQwU%2BIBQIgD%2FWRRnQij0cwYW5C0zXe8gHvjmRvQZf9BM6KWgVnP%2FMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4YOtAhwDUULpXyxircA4Z4Sgju%2Fj%2FvqVj%2B3Ks8HuTSwBRe8xEVm57nuZSxSb6EgiHg%2Btte0TxuYJTDgqKWtlnlFLutPuqMIIxsFAoxf%2BuUwn91B8ZfF78DqL4aZIEpyt5w1bBvNrm0vwxFBL3LxjFiJ%2Fo3TPsOtBTeLUS6YF11qguYbCDzOe9uCLlAdMR%2BjVnHtrKzrASvgYqK4nJhdA54MtcY%2Bu1KKCG%2BfG4zt4LD6nYp3vZgC3Cwpqe7EWXStyXiusemignwEAKgIrfTx7IMUN%2F6T7dcR2ro24RnO2YItSRcsQ1IKxpFLdC7M6Qds2wg0DD7wh5Nu8gKSnij3tFd9LO15kB5pi2oj8tMoZF5CE6XaUoLr6ytk6GapNWZXY6UF7cHnvdAkYUtwNQE40EiUyKxw2w7IW7FYQEFnDUml3zeCLfJPa0wRSseuOe%2BXmxKyCkjjv7DXl%2FYn4VxgYBan9VikK6aH5pIAHlFhMw%2FAmVFAZZLXRlpXMjJRGSDyphGJULIFlA6pO1Jm0PILoyOLYYESzM4xFjlLvA7%2FCDKxXwDu7h6SkfapbVT5Cq3fvZEc%2BR8rjx8eCFuELDZXi5NZBd5C9KqA1ADT%2BgDCgc%2BE5%2B5JKCFNM5mO0mRFwb0%2ByDEkEAUKZYXhNvtMP25sM8GOqUB5VSEHkl93VNioUpwzGFka1AXx9FYdLAAWOiMAdqRg2I2wkhscadPtiqICEYqTx2nxxZ%2BcGlZhixmMzAklMMhmjbHGjAPgVBQRelfR%2BpPPvtQfm50G8gYAcqH4AyWAvj5YdFnFvIn42CA9nPBZ342v61K9b0xurR3iz39%2FmveJQe4hV4wtXD1HY5H%2FGiOuIcyNidtHLN6tDOYQKVW07fkyJLGRmnm&X-Amz-Signature=d58c0db57143b423c8acda3a0558abafa002de20a5eddeea359f775f25b174ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFBLQFBA%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyXqD%2FKeOBvMkBgr393wkNkTAg0LyvEJzSKyqQwU%2BIBQIgD%2FWRRnQij0cwYW5C0zXe8gHvjmRvQZf9BM6KWgVnP%2FMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4YOtAhwDUULpXyxircA4Z4Sgju%2Fj%2FvqVj%2B3Ks8HuTSwBRe8xEVm57nuZSxSb6EgiHg%2Btte0TxuYJTDgqKWtlnlFLutPuqMIIxsFAoxf%2BuUwn91B8ZfF78DqL4aZIEpyt5w1bBvNrm0vwxFBL3LxjFiJ%2Fo3TPsOtBTeLUS6YF11qguYbCDzOe9uCLlAdMR%2BjVnHtrKzrASvgYqK4nJhdA54MtcY%2Bu1KKCG%2BfG4zt4LD6nYp3vZgC3Cwpqe7EWXStyXiusemignwEAKgIrfTx7IMUN%2F6T7dcR2ro24RnO2YItSRcsQ1IKxpFLdC7M6Qds2wg0DD7wh5Nu8gKSnij3tFd9LO15kB5pi2oj8tMoZF5CE6XaUoLr6ytk6GapNWZXY6UF7cHnvdAkYUtwNQE40EiUyKxw2w7IW7FYQEFnDUml3zeCLfJPa0wRSseuOe%2BXmxKyCkjjv7DXl%2FYn4VxgYBan9VikK6aH5pIAHlFhMw%2FAmVFAZZLXRlpXMjJRGSDyphGJULIFlA6pO1Jm0PILoyOLYYESzM4xFjlLvA7%2FCDKxXwDu7h6SkfapbVT5Cq3fvZEc%2BR8rjx8eCFuELDZXi5NZBd5C9KqA1ADT%2BgDCgc%2BE5%2B5JKCFNM5mO0mRFwb0%2ByDEkEAUKZYXhNvtMP25sM8GOqUB5VSEHkl93VNioUpwzGFka1AXx9FYdLAAWOiMAdqRg2I2wkhscadPtiqICEYqTx2nxxZ%2BcGlZhixmMzAklMMhmjbHGjAPgVBQRelfR%2BpPPvtQfm50G8gYAcqH4AyWAvj5YdFnFvIn42CA9nPBZ342v61K9b0xurR3iz39%2FmveJQe4hV4wtXD1HY5H%2FGiOuIcyNidtHLN6tDOYQKVW07fkyJLGRmnm&X-Amz-Signature=be89f82474f2ac9cbdada95b187bd4eddb3f42fbb79ba773f84fb5cc98078455&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFBLQFBA%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyXqD%2FKeOBvMkBgr393wkNkTAg0LyvEJzSKyqQwU%2BIBQIgD%2FWRRnQij0cwYW5C0zXe8gHvjmRvQZf9BM6KWgVnP%2FMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4YOtAhwDUULpXyxircA4Z4Sgju%2Fj%2FvqVj%2B3Ks8HuTSwBRe8xEVm57nuZSxSb6EgiHg%2Btte0TxuYJTDgqKWtlnlFLutPuqMIIxsFAoxf%2BuUwn91B8ZfF78DqL4aZIEpyt5w1bBvNrm0vwxFBL3LxjFiJ%2Fo3TPsOtBTeLUS6YF11qguYbCDzOe9uCLlAdMR%2BjVnHtrKzrASvgYqK4nJhdA54MtcY%2Bu1KKCG%2BfG4zt4LD6nYp3vZgC3Cwpqe7EWXStyXiusemignwEAKgIrfTx7IMUN%2F6T7dcR2ro24RnO2YItSRcsQ1IKxpFLdC7M6Qds2wg0DD7wh5Nu8gKSnij3tFd9LO15kB5pi2oj8tMoZF5CE6XaUoLr6ytk6GapNWZXY6UF7cHnvdAkYUtwNQE40EiUyKxw2w7IW7FYQEFnDUml3zeCLfJPa0wRSseuOe%2BXmxKyCkjjv7DXl%2FYn4VxgYBan9VikK6aH5pIAHlFhMw%2FAmVFAZZLXRlpXMjJRGSDyphGJULIFlA6pO1Jm0PILoyOLYYESzM4xFjlLvA7%2FCDKxXwDu7h6SkfapbVT5Cq3fvZEc%2BR8rjx8eCFuELDZXi5NZBd5C9KqA1ADT%2BgDCgc%2BE5%2B5JKCFNM5mO0mRFwb0%2ByDEkEAUKZYXhNvtMP25sM8GOqUB5VSEHkl93VNioUpwzGFka1AXx9FYdLAAWOiMAdqRg2I2wkhscadPtiqICEYqTx2nxxZ%2BcGlZhixmMzAklMMhmjbHGjAPgVBQRelfR%2BpPPvtQfm50G8gYAcqH4AyWAvj5YdFnFvIn42CA9nPBZ342v61K9b0xurR3iz39%2FmveJQe4hV4wtXD1HY5H%2FGiOuIcyNidtHLN6tDOYQKVW07fkyJLGRmnm&X-Amz-Signature=119ea8d84f9be1a5194bd77de7af9fc83be7ccfd3bc9093d741f447aafcbaa23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFBLQFBA%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyXqD%2FKeOBvMkBgr393wkNkTAg0LyvEJzSKyqQwU%2BIBQIgD%2FWRRnQij0cwYW5C0zXe8gHvjmRvQZf9BM6KWgVnP%2FMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4YOtAhwDUULpXyxircA4Z4Sgju%2Fj%2FvqVj%2B3Ks8HuTSwBRe8xEVm57nuZSxSb6EgiHg%2Btte0TxuYJTDgqKWtlnlFLutPuqMIIxsFAoxf%2BuUwn91B8ZfF78DqL4aZIEpyt5w1bBvNrm0vwxFBL3LxjFiJ%2Fo3TPsOtBTeLUS6YF11qguYbCDzOe9uCLlAdMR%2BjVnHtrKzrASvgYqK4nJhdA54MtcY%2Bu1KKCG%2BfG4zt4LD6nYp3vZgC3Cwpqe7EWXStyXiusemignwEAKgIrfTx7IMUN%2F6T7dcR2ro24RnO2YItSRcsQ1IKxpFLdC7M6Qds2wg0DD7wh5Nu8gKSnij3tFd9LO15kB5pi2oj8tMoZF5CE6XaUoLr6ytk6GapNWZXY6UF7cHnvdAkYUtwNQE40EiUyKxw2w7IW7FYQEFnDUml3zeCLfJPa0wRSseuOe%2BXmxKyCkjjv7DXl%2FYn4VxgYBan9VikK6aH5pIAHlFhMw%2FAmVFAZZLXRlpXMjJRGSDyphGJULIFlA6pO1Jm0PILoyOLYYESzM4xFjlLvA7%2FCDKxXwDu7h6SkfapbVT5Cq3fvZEc%2BR8rjx8eCFuELDZXi5NZBd5C9KqA1ADT%2BgDCgc%2BE5%2B5JKCFNM5mO0mRFwb0%2ByDEkEAUKZYXhNvtMP25sM8GOqUB5VSEHkl93VNioUpwzGFka1AXx9FYdLAAWOiMAdqRg2I2wkhscadPtiqICEYqTx2nxxZ%2BcGlZhixmMzAklMMhmjbHGjAPgVBQRelfR%2BpPPvtQfm50G8gYAcqH4AyWAvj5YdFnFvIn42CA9nPBZ342v61K9b0xurR3iz39%2FmveJQe4hV4wtXD1HY5H%2FGiOuIcyNidtHLN6tDOYQKVW07fkyJLGRmnm&X-Amz-Signature=ab5bd93e17cf0df638c823f8f70e29ff3d2d9f7e246bbcb6950d5f5d5a3d18eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
