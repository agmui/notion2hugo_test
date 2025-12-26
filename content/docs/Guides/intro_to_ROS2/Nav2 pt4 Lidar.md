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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KL4NLX3%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDejd1u4P%2F6%2BorWLY4h%2Br1bXy8t%2BXdapgpSwqipnoN75AiEAmSzQlnKeiRu8FgpOTya9kHUo7HZ9iF6wgD04XwL1Vp4q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNrPKi3WLDr86eXGoCrcA1ocQN%2BF98yqVFBpQPIyDASt2SkG1OTU%2FYbaJ%2BYfgz%2FwiHFmUzWuzoABX%2F%2Bx%2BpOLKfBd1%2F61293w6P%2FLHJO7f7U%2Fz4GC%2B%2BjVrRPN2tQJvrgPhO65XG%2Be%2BYNnFDj%2B6z7Ly0agRuebVatxon7oYeoa6zTUXJ%2BjYhoZxJhmFJpnOQpCm2JH9xJc4RpNEGLALAdAJ%2Fqidy9WBDeUIVIOZ6khLmrfi71DAOTnyiKHf4XlvNoIAq4VASeJVtZGkt91KMz2frQCyaPzdmh2%2FZ10zkspNLJKd9ibm%2BmAEUYgly98Z2zwskj0NiGoNTcMPBl%2FGnAFBtQrGmNkl2egbdNpAHIKzfpDKbV4yldbZNvbnsJXSGAWkKpxSGvn7Wu5F7N1U4RfS7Cf2JcrU5rgvDu5biboWoNIAsKpHRsz3F%2FXclw%2FwJpX5uPzkY2%2FJSePKjeKwYe3IjfI9tmE6xFn7Ail6es8YghhiitPJcCt9Zx57RgWlJKHkO9OAayLOdc7UsDQV4z7dxCYz%2FbcXU3Z35hdr64BqY1JISPI8pKDyfXViD2IHwLxbkvDFXHcnYEEm%2BCIceIafL9Da%2FFv4alkK4qGAnshCNNx9RBC%2BGAAfH%2FlZ%2BMaKPHVLsEOmLJ7RRIgy%2F8dMPautsoGOqUBbv8%2BT%2Bfw5PD%2BaVgoFSafa0e3FcW2SSwjJcV3zF%2FHy4ZX%2FxVdsXhY9v2w3CXXoobv7ZW2DMZZgssgZHNhb3wYzkvE0cd0KqGrWbqtWF5UavMK71GC5%2FcKBOSYKOYuLf4b7m4o%2FOlEMPzW2FAjv9LIvQ3mpXI0z5dJSYX4Nqi1Mz0Ujgt6AXNi4e5TJdFW3e6tPgJHfrhJtmVZJ1fwEwpCNnrvIOKC&X-Amz-Signature=23e84bc748045ca17c870017c6e4ba7bdbf564ee54e964a2333d3bd586788fbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466767PKNA2%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHjNW%2FOfIdubEhstMzIvpvEcENS1aSNwYSkVBwy52lhUAiEAukOzbf6mca0DxrBv92oJl3E0JLqZnlLaGbpcX53OaWcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLM8wrsS2ibtmvZDkircA9JCMjL%2FOwtpdHZzmjprB5BEbQroCthbdUlZ4%2BURjmL1sgAotddhmLIo7KnbUBHfRQKZKQvIYoTWfB6%2BkFDo2xr4WM%2BncRD%2B4LBM5KIb3fKr8Wg3IBriTyNUTau6QbsoNUBF5pJDqbjdTH2urbrB3e05iS78z3LIm78yeaW5wtNNMqZ0idFMSyCbfK9snnEFGtIMpZ%2FyMRe62sii%2FkkO963xDFtcfVjHQf7sAFi6raEM%2FBBT8ranoHP6gkiiqTl32ME%2FKBgAAaHfo%2B%2FPRkyWRYieSIxnDwAMfuvWfVwULgg6dkz6mk19SjMWXKzQGzNkTgTrpCcCX1h9pwth4O4Xrhi56tyWI%2F%2BtU6HS8yUPllK0JYyDY6GD8NlAsGQY2y87laNS0APyxPPwo0Yw%2BM0CyQ%2Bx%2F508btgEB0KJWZHW9Lf0kfYNT7o125C2nLTZ2la1q0atNqucysR4Fa58VJqrjAR%2BaS2e74MxbmcQT1S3TTTYq28gBGvSKcJIsUv7EVlVaEQDcz3dGK05Of4tDgGOf3lhr43hMEjIj6iweULgtAqpXYuqJRJKqJCqmyUoVPA9%2Fds%2FWhrg3A6WiunSjX1m6IQyCrgS6iKMiv2kd8MRF%2B5Xb5v%2Fvw5UU7bhp0j7MJGstsoGOqUB194LR%2BrGTL32UeZap1e1g8vtX%2FqgO1dJIuZCiMlY8Y5qj5tjPafcDNM3oXFofr5xZhdVDw%2FeSpfo5VvaWhlmSEG1QIJbyGTi0pY98rZzaN84B1j0qsVmb8%2B6GUVXqO91eetxb4OWUEqdW5B4kFH1K0EkjsK38kgngGuQ3ikF41W4Yj8rw0Q92qOmXkU84jcOpIfQvBBZfJjsMAh5fgS3lJYV9F8U&X-Amz-Signature=e69bbccdcf71dd85b5026c572fff2f2e611adba42d9f6c0d19bffa6362c1e3bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466767PKNA2%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHjNW%2FOfIdubEhstMzIvpvEcENS1aSNwYSkVBwy52lhUAiEAukOzbf6mca0DxrBv92oJl3E0JLqZnlLaGbpcX53OaWcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLM8wrsS2ibtmvZDkircA9JCMjL%2FOwtpdHZzmjprB5BEbQroCthbdUlZ4%2BURjmL1sgAotddhmLIo7KnbUBHfRQKZKQvIYoTWfB6%2BkFDo2xr4WM%2BncRD%2B4LBM5KIb3fKr8Wg3IBriTyNUTau6QbsoNUBF5pJDqbjdTH2urbrB3e05iS78z3LIm78yeaW5wtNNMqZ0idFMSyCbfK9snnEFGtIMpZ%2FyMRe62sii%2FkkO963xDFtcfVjHQf7sAFi6raEM%2FBBT8ranoHP6gkiiqTl32ME%2FKBgAAaHfo%2B%2FPRkyWRYieSIxnDwAMfuvWfVwULgg6dkz6mk19SjMWXKzQGzNkTgTrpCcCX1h9pwth4O4Xrhi56tyWI%2F%2BtU6HS8yUPllK0JYyDY6GD8NlAsGQY2y87laNS0APyxPPwo0Yw%2BM0CyQ%2Bx%2F508btgEB0KJWZHW9Lf0kfYNT7o125C2nLTZ2la1q0atNqucysR4Fa58VJqrjAR%2BaS2e74MxbmcQT1S3TTTYq28gBGvSKcJIsUv7EVlVaEQDcz3dGK05Of4tDgGOf3lhr43hMEjIj6iweULgtAqpXYuqJRJKqJCqmyUoVPA9%2Fds%2FWhrg3A6WiunSjX1m6IQyCrgS6iKMiv2kd8MRF%2B5Xb5v%2Fvw5UU7bhp0j7MJGstsoGOqUB194LR%2BrGTL32UeZap1e1g8vtX%2FqgO1dJIuZCiMlY8Y5qj5tjPafcDNM3oXFofr5xZhdVDw%2FeSpfo5VvaWhlmSEG1QIJbyGTi0pY98rZzaN84B1j0qsVmb8%2B6GUVXqO91eetxb4OWUEqdW5B4kFH1K0EkjsK38kgngGuQ3ikF41W4Yj8rw0Q92qOmXkU84jcOpIfQvBBZfJjsMAh5fgS3lJYV9F8U&X-Amz-Signature=3482febcb8f4737011b3eaaddf098448b3303d1a4d50f4a6064e8875c843c790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466767PKNA2%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHjNW%2FOfIdubEhstMzIvpvEcENS1aSNwYSkVBwy52lhUAiEAukOzbf6mca0DxrBv92oJl3E0JLqZnlLaGbpcX53OaWcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLM8wrsS2ibtmvZDkircA9JCMjL%2FOwtpdHZzmjprB5BEbQroCthbdUlZ4%2BURjmL1sgAotddhmLIo7KnbUBHfRQKZKQvIYoTWfB6%2BkFDo2xr4WM%2BncRD%2B4LBM5KIb3fKr8Wg3IBriTyNUTau6QbsoNUBF5pJDqbjdTH2urbrB3e05iS78z3LIm78yeaW5wtNNMqZ0idFMSyCbfK9snnEFGtIMpZ%2FyMRe62sii%2FkkO963xDFtcfVjHQf7sAFi6raEM%2FBBT8ranoHP6gkiiqTl32ME%2FKBgAAaHfo%2B%2FPRkyWRYieSIxnDwAMfuvWfVwULgg6dkz6mk19SjMWXKzQGzNkTgTrpCcCX1h9pwth4O4Xrhi56tyWI%2F%2BtU6HS8yUPllK0JYyDY6GD8NlAsGQY2y87laNS0APyxPPwo0Yw%2BM0CyQ%2Bx%2F508btgEB0KJWZHW9Lf0kfYNT7o125C2nLTZ2la1q0atNqucysR4Fa58VJqrjAR%2BaS2e74MxbmcQT1S3TTTYq28gBGvSKcJIsUv7EVlVaEQDcz3dGK05Of4tDgGOf3lhr43hMEjIj6iweULgtAqpXYuqJRJKqJCqmyUoVPA9%2Fds%2FWhrg3A6WiunSjX1m6IQyCrgS6iKMiv2kd8MRF%2B5Xb5v%2Fvw5UU7bhp0j7MJGstsoGOqUB194LR%2BrGTL32UeZap1e1g8vtX%2FqgO1dJIuZCiMlY8Y5qj5tjPafcDNM3oXFofr5xZhdVDw%2FeSpfo5VvaWhlmSEG1QIJbyGTi0pY98rZzaN84B1j0qsVmb8%2B6GUVXqO91eetxb4OWUEqdW5B4kFH1K0EkjsK38kgngGuQ3ikF41W4Yj8rw0Q92qOmXkU84jcOpIfQvBBZfJjsMAh5fgS3lJYV9F8U&X-Amz-Signature=bb38cc4148dac211241afd494f3a212d31398b61eb0ce7e8d69abe46a4813a6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466767PKNA2%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHjNW%2FOfIdubEhstMzIvpvEcENS1aSNwYSkVBwy52lhUAiEAukOzbf6mca0DxrBv92oJl3E0JLqZnlLaGbpcX53OaWcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLM8wrsS2ibtmvZDkircA9JCMjL%2FOwtpdHZzmjprB5BEbQroCthbdUlZ4%2BURjmL1sgAotddhmLIo7KnbUBHfRQKZKQvIYoTWfB6%2BkFDo2xr4WM%2BncRD%2B4LBM5KIb3fKr8Wg3IBriTyNUTau6QbsoNUBF5pJDqbjdTH2urbrB3e05iS78z3LIm78yeaW5wtNNMqZ0idFMSyCbfK9snnEFGtIMpZ%2FyMRe62sii%2FkkO963xDFtcfVjHQf7sAFi6raEM%2FBBT8ranoHP6gkiiqTl32ME%2FKBgAAaHfo%2B%2FPRkyWRYieSIxnDwAMfuvWfVwULgg6dkz6mk19SjMWXKzQGzNkTgTrpCcCX1h9pwth4O4Xrhi56tyWI%2F%2BtU6HS8yUPllK0JYyDY6GD8NlAsGQY2y87laNS0APyxPPwo0Yw%2BM0CyQ%2Bx%2F508btgEB0KJWZHW9Lf0kfYNT7o125C2nLTZ2la1q0atNqucysR4Fa58VJqrjAR%2BaS2e74MxbmcQT1S3TTTYq28gBGvSKcJIsUv7EVlVaEQDcz3dGK05Of4tDgGOf3lhr43hMEjIj6iweULgtAqpXYuqJRJKqJCqmyUoVPA9%2Fds%2FWhrg3A6WiunSjX1m6IQyCrgS6iKMiv2kd8MRF%2B5Xb5v%2Fvw5UU7bhp0j7MJGstsoGOqUB194LR%2BrGTL32UeZap1e1g8vtX%2FqgO1dJIuZCiMlY8Y5qj5tjPafcDNM3oXFofr5xZhdVDw%2FeSpfo5VvaWhlmSEG1QIJbyGTi0pY98rZzaN84B1j0qsVmb8%2B6GUVXqO91eetxb4OWUEqdW5B4kFH1K0EkjsK38kgngGuQ3ikF41W4Yj8rw0Q92qOmXkU84jcOpIfQvBBZfJjsMAh5fgS3lJYV9F8U&X-Amz-Signature=f4b8b9f21083389337d981a1b38308fa654c5efadb7f7992052e9c731f81c462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466767PKNA2%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHjNW%2FOfIdubEhstMzIvpvEcENS1aSNwYSkVBwy52lhUAiEAukOzbf6mca0DxrBv92oJl3E0JLqZnlLaGbpcX53OaWcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLM8wrsS2ibtmvZDkircA9JCMjL%2FOwtpdHZzmjprB5BEbQroCthbdUlZ4%2BURjmL1sgAotddhmLIo7KnbUBHfRQKZKQvIYoTWfB6%2BkFDo2xr4WM%2BncRD%2B4LBM5KIb3fKr8Wg3IBriTyNUTau6QbsoNUBF5pJDqbjdTH2urbrB3e05iS78z3LIm78yeaW5wtNNMqZ0idFMSyCbfK9snnEFGtIMpZ%2FyMRe62sii%2FkkO963xDFtcfVjHQf7sAFi6raEM%2FBBT8ranoHP6gkiiqTl32ME%2FKBgAAaHfo%2B%2FPRkyWRYieSIxnDwAMfuvWfVwULgg6dkz6mk19SjMWXKzQGzNkTgTrpCcCX1h9pwth4O4Xrhi56tyWI%2F%2BtU6HS8yUPllK0JYyDY6GD8NlAsGQY2y87laNS0APyxPPwo0Yw%2BM0CyQ%2Bx%2F508btgEB0KJWZHW9Lf0kfYNT7o125C2nLTZ2la1q0atNqucysR4Fa58VJqrjAR%2BaS2e74MxbmcQT1S3TTTYq28gBGvSKcJIsUv7EVlVaEQDcz3dGK05Of4tDgGOf3lhr43hMEjIj6iweULgtAqpXYuqJRJKqJCqmyUoVPA9%2Fds%2FWhrg3A6WiunSjX1m6IQyCrgS6iKMiv2kd8MRF%2B5Xb5v%2Fvw5UU7bhp0j7MJGstsoGOqUB194LR%2BrGTL32UeZap1e1g8vtX%2FqgO1dJIuZCiMlY8Y5qj5tjPafcDNM3oXFofr5xZhdVDw%2FeSpfo5VvaWhlmSEG1QIJbyGTi0pY98rZzaN84B1j0qsVmb8%2B6GUVXqO91eetxb4OWUEqdW5B4kFH1K0EkjsK38kgngGuQ3ikF41W4Yj8rw0Q92qOmXkU84jcOpIfQvBBZfJjsMAh5fgS3lJYV9F8U&X-Amz-Signature=653e2ea42018d053474ae5c0e2b94df9aaebc6bd7ae3c706082a2d5cbfb21c46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466767PKNA2%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHjNW%2FOfIdubEhstMzIvpvEcENS1aSNwYSkVBwy52lhUAiEAukOzbf6mca0DxrBv92oJl3E0JLqZnlLaGbpcX53OaWcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLM8wrsS2ibtmvZDkircA9JCMjL%2FOwtpdHZzmjprB5BEbQroCthbdUlZ4%2BURjmL1sgAotddhmLIo7KnbUBHfRQKZKQvIYoTWfB6%2BkFDo2xr4WM%2BncRD%2B4LBM5KIb3fKr8Wg3IBriTyNUTau6QbsoNUBF5pJDqbjdTH2urbrB3e05iS78z3LIm78yeaW5wtNNMqZ0idFMSyCbfK9snnEFGtIMpZ%2FyMRe62sii%2FkkO963xDFtcfVjHQf7sAFi6raEM%2FBBT8ranoHP6gkiiqTl32ME%2FKBgAAaHfo%2B%2FPRkyWRYieSIxnDwAMfuvWfVwULgg6dkz6mk19SjMWXKzQGzNkTgTrpCcCX1h9pwth4O4Xrhi56tyWI%2F%2BtU6HS8yUPllK0JYyDY6GD8NlAsGQY2y87laNS0APyxPPwo0Yw%2BM0CyQ%2Bx%2F508btgEB0KJWZHW9Lf0kfYNT7o125C2nLTZ2la1q0atNqucysR4Fa58VJqrjAR%2BaS2e74MxbmcQT1S3TTTYq28gBGvSKcJIsUv7EVlVaEQDcz3dGK05Of4tDgGOf3lhr43hMEjIj6iweULgtAqpXYuqJRJKqJCqmyUoVPA9%2Fds%2FWhrg3A6WiunSjX1m6IQyCrgS6iKMiv2kd8MRF%2B5Xb5v%2Fvw5UU7bhp0j7MJGstsoGOqUB194LR%2BrGTL32UeZap1e1g8vtX%2FqgO1dJIuZCiMlY8Y5qj5tjPafcDNM3oXFofr5xZhdVDw%2FeSpfo5VvaWhlmSEG1QIJbyGTi0pY98rZzaN84B1j0qsVmb8%2B6GUVXqO91eetxb4OWUEqdW5B4kFH1K0EkjsK38kgngGuQ3ikF41W4Yj8rw0Q92qOmXkU84jcOpIfQvBBZfJjsMAh5fgS3lJYV9F8U&X-Amz-Signature=1382466c3fef94c8b56b61f8ae5aa0fa30fca0efdec36248a0a380221270d880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466767PKNA2%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHjNW%2FOfIdubEhstMzIvpvEcENS1aSNwYSkVBwy52lhUAiEAukOzbf6mca0DxrBv92oJl3E0JLqZnlLaGbpcX53OaWcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLM8wrsS2ibtmvZDkircA9JCMjL%2FOwtpdHZzmjprB5BEbQroCthbdUlZ4%2BURjmL1sgAotddhmLIo7KnbUBHfRQKZKQvIYoTWfB6%2BkFDo2xr4WM%2BncRD%2B4LBM5KIb3fKr8Wg3IBriTyNUTau6QbsoNUBF5pJDqbjdTH2urbrB3e05iS78z3LIm78yeaW5wtNNMqZ0idFMSyCbfK9snnEFGtIMpZ%2FyMRe62sii%2FkkO963xDFtcfVjHQf7sAFi6raEM%2FBBT8ranoHP6gkiiqTl32ME%2FKBgAAaHfo%2B%2FPRkyWRYieSIxnDwAMfuvWfVwULgg6dkz6mk19SjMWXKzQGzNkTgTrpCcCX1h9pwth4O4Xrhi56tyWI%2F%2BtU6HS8yUPllK0JYyDY6GD8NlAsGQY2y87laNS0APyxPPwo0Yw%2BM0CyQ%2Bx%2F508btgEB0KJWZHW9Lf0kfYNT7o125C2nLTZ2la1q0atNqucysR4Fa58VJqrjAR%2BaS2e74MxbmcQT1S3TTTYq28gBGvSKcJIsUv7EVlVaEQDcz3dGK05Of4tDgGOf3lhr43hMEjIj6iweULgtAqpXYuqJRJKqJCqmyUoVPA9%2Fds%2FWhrg3A6WiunSjX1m6IQyCrgS6iKMiv2kd8MRF%2B5Xb5v%2Fvw5UU7bhp0j7MJGstsoGOqUB194LR%2BrGTL32UeZap1e1g8vtX%2FqgO1dJIuZCiMlY8Y5qj5tjPafcDNM3oXFofr5xZhdVDw%2FeSpfo5VvaWhlmSEG1QIJbyGTi0pY98rZzaN84B1j0qsVmb8%2B6GUVXqO91eetxb4OWUEqdW5B4kFH1K0EkjsK38kgngGuQ3ikF41W4Yj8rw0Q92qOmXkU84jcOpIfQvBBZfJjsMAh5fgS3lJYV9F8U&X-Amz-Signature=ae3048cd75920e8e7763d92f661960302cb7d9bc9b68d5a473496a07848daca5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466767PKNA2%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHjNW%2FOfIdubEhstMzIvpvEcENS1aSNwYSkVBwy52lhUAiEAukOzbf6mca0DxrBv92oJl3E0JLqZnlLaGbpcX53OaWcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLM8wrsS2ibtmvZDkircA9JCMjL%2FOwtpdHZzmjprB5BEbQroCthbdUlZ4%2BURjmL1sgAotddhmLIo7KnbUBHfRQKZKQvIYoTWfB6%2BkFDo2xr4WM%2BncRD%2B4LBM5KIb3fKr8Wg3IBriTyNUTau6QbsoNUBF5pJDqbjdTH2urbrB3e05iS78z3LIm78yeaW5wtNNMqZ0idFMSyCbfK9snnEFGtIMpZ%2FyMRe62sii%2FkkO963xDFtcfVjHQf7sAFi6raEM%2FBBT8ranoHP6gkiiqTl32ME%2FKBgAAaHfo%2B%2FPRkyWRYieSIxnDwAMfuvWfVwULgg6dkz6mk19SjMWXKzQGzNkTgTrpCcCX1h9pwth4O4Xrhi56tyWI%2F%2BtU6HS8yUPllK0JYyDY6GD8NlAsGQY2y87laNS0APyxPPwo0Yw%2BM0CyQ%2Bx%2F508btgEB0KJWZHW9Lf0kfYNT7o125C2nLTZ2la1q0atNqucysR4Fa58VJqrjAR%2BaS2e74MxbmcQT1S3TTTYq28gBGvSKcJIsUv7EVlVaEQDcz3dGK05Of4tDgGOf3lhr43hMEjIj6iweULgtAqpXYuqJRJKqJCqmyUoVPA9%2Fds%2FWhrg3A6WiunSjX1m6IQyCrgS6iKMiv2kd8MRF%2B5Xb5v%2Fvw5UU7bhp0j7MJGstsoGOqUB194LR%2BrGTL32UeZap1e1g8vtX%2FqgO1dJIuZCiMlY8Y5qj5tjPafcDNM3oXFofr5xZhdVDw%2FeSpfo5VvaWhlmSEG1QIJbyGTi0pY98rZzaN84B1j0qsVmb8%2B6GUVXqO91eetxb4OWUEqdW5B4kFH1K0EkjsK38kgngGuQ3ikF41W4Yj8rw0Q92qOmXkU84jcOpIfQvBBZfJjsMAh5fgS3lJYV9F8U&X-Amz-Signature=f11246dd5638e64d3ca71d1a10adae6348e36a1cc70798e94566145eaef018fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466767PKNA2%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHjNW%2FOfIdubEhstMzIvpvEcENS1aSNwYSkVBwy52lhUAiEAukOzbf6mca0DxrBv92oJl3E0JLqZnlLaGbpcX53OaWcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLM8wrsS2ibtmvZDkircA9JCMjL%2FOwtpdHZzmjprB5BEbQroCthbdUlZ4%2BURjmL1sgAotddhmLIo7KnbUBHfRQKZKQvIYoTWfB6%2BkFDo2xr4WM%2BncRD%2B4LBM5KIb3fKr8Wg3IBriTyNUTau6QbsoNUBF5pJDqbjdTH2urbrB3e05iS78z3LIm78yeaW5wtNNMqZ0idFMSyCbfK9snnEFGtIMpZ%2FyMRe62sii%2FkkO963xDFtcfVjHQf7sAFi6raEM%2FBBT8ranoHP6gkiiqTl32ME%2FKBgAAaHfo%2B%2FPRkyWRYieSIxnDwAMfuvWfVwULgg6dkz6mk19SjMWXKzQGzNkTgTrpCcCX1h9pwth4O4Xrhi56tyWI%2F%2BtU6HS8yUPllK0JYyDY6GD8NlAsGQY2y87laNS0APyxPPwo0Yw%2BM0CyQ%2Bx%2F508btgEB0KJWZHW9Lf0kfYNT7o125C2nLTZ2la1q0atNqucysR4Fa58VJqrjAR%2BaS2e74MxbmcQT1S3TTTYq28gBGvSKcJIsUv7EVlVaEQDcz3dGK05Of4tDgGOf3lhr43hMEjIj6iweULgtAqpXYuqJRJKqJCqmyUoVPA9%2Fds%2FWhrg3A6WiunSjX1m6IQyCrgS6iKMiv2kd8MRF%2B5Xb5v%2Fvw5UU7bhp0j7MJGstsoGOqUB194LR%2BrGTL32UeZap1e1g8vtX%2FqgO1dJIuZCiMlY8Y5qj5tjPafcDNM3oXFofr5xZhdVDw%2FeSpfo5VvaWhlmSEG1QIJbyGTi0pY98rZzaN84B1j0qsVmb8%2B6GUVXqO91eetxb4OWUEqdW5B4kFH1K0EkjsK38kgngGuQ3ikF41W4Yj8rw0Q92qOmXkU84jcOpIfQvBBZfJjsMAh5fgS3lJYV9F8U&X-Amz-Signature=32739ede8b23cfcd5b3917ad474d9719a673b0082f647f760bcf983c23e92e3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466767PKNA2%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHjNW%2FOfIdubEhstMzIvpvEcENS1aSNwYSkVBwy52lhUAiEAukOzbf6mca0DxrBv92oJl3E0JLqZnlLaGbpcX53OaWcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLM8wrsS2ibtmvZDkircA9JCMjL%2FOwtpdHZzmjprB5BEbQroCthbdUlZ4%2BURjmL1sgAotddhmLIo7KnbUBHfRQKZKQvIYoTWfB6%2BkFDo2xr4WM%2BncRD%2B4LBM5KIb3fKr8Wg3IBriTyNUTau6QbsoNUBF5pJDqbjdTH2urbrB3e05iS78z3LIm78yeaW5wtNNMqZ0idFMSyCbfK9snnEFGtIMpZ%2FyMRe62sii%2FkkO963xDFtcfVjHQf7sAFi6raEM%2FBBT8ranoHP6gkiiqTl32ME%2FKBgAAaHfo%2B%2FPRkyWRYieSIxnDwAMfuvWfVwULgg6dkz6mk19SjMWXKzQGzNkTgTrpCcCX1h9pwth4O4Xrhi56tyWI%2F%2BtU6HS8yUPllK0JYyDY6GD8NlAsGQY2y87laNS0APyxPPwo0Yw%2BM0CyQ%2Bx%2F508btgEB0KJWZHW9Lf0kfYNT7o125C2nLTZ2la1q0atNqucysR4Fa58VJqrjAR%2BaS2e74MxbmcQT1S3TTTYq28gBGvSKcJIsUv7EVlVaEQDcz3dGK05Of4tDgGOf3lhr43hMEjIj6iweULgtAqpXYuqJRJKqJCqmyUoVPA9%2Fds%2FWhrg3A6WiunSjX1m6IQyCrgS6iKMiv2kd8MRF%2B5Xb5v%2Fvw5UU7bhp0j7MJGstsoGOqUB194LR%2BrGTL32UeZap1e1g8vtX%2FqgO1dJIuZCiMlY8Y5qj5tjPafcDNM3oXFofr5xZhdVDw%2FeSpfo5VvaWhlmSEG1QIJbyGTi0pY98rZzaN84B1j0qsVmb8%2B6GUVXqO91eetxb4OWUEqdW5B4kFH1K0EkjsK38kgngGuQ3ikF41W4Yj8rw0Q92qOmXkU84jcOpIfQvBBZfJjsMAh5fgS3lJYV9F8U&X-Amz-Signature=5505e9f969374685117a5599f2c9d80713e6e386ffd6e9e47a16bb88c6f154fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
