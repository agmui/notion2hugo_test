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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYJMIWY2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIE%2FZ8%2BCCe180CKswBlDnBADVg7B3jkMxCDl5qNdlSIagAiEAwrH2imOf7WVddFkOiz1ClM2BUd%2Fj03w25%2Ba8WVe79sQqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVrQwu0evHV6r%2BpHyrcAxojnwEwIEU6psvdepEuGUtehHIWnz1QBVHgnzkzyHYMk086aB0BxyC%2F0DeiLQKhjUb%2FsoFeZvYOuYCP%2F%2Ba0WWB7CNcomftN1UXg8m6h%2FjbOsOpVbjf69ToMgJFDwOdPOZmisrWiHDJsGBA5KfIHYUZMLm8ofldK90z3f1uShXfoe9nDeE1zihJ%2BqXUagwbVUT1B6gFCMB8jAYCp9EitdZDjkaGek7usCvlEbvo%2B2yEfHnQ7hx%2FjnQFvdTwnzl9cEq7bAyvCGDxmrx1jAUbKdB5fYxPk%2B6kWmW%2Bp4fczIFaEVRc23iYQf%2Bqn%2FosOJxdcyRtZFGGkyNh%2BYRYhH%2B9s6gmzlPc4AFHRWrzPuzJkJRGKBB3%2FiSbJiRJxkMme7P2R%2BVrV1DQ1aKa86hda4P7yyt6%2Bi1cLIHHfYuLInyyOCU0ZY9%2B6AHYnC3YAIjGHY%2FesqJQ83VbPnhIhKxXu5HnQaGJquKolNDbJNalng7LpNII6ZqnPWteszqYMqMFpjSfo66BTdyEY9MTN%2FKnHnvnao4I9dIdxc4r9WL4Z%2BnLtIkwwXMQRMSCz62eiG%2BL052F1NduvYYFMiBmpup9CsOQ41sJGHsdIESGN%2Bp%2FCC6SGBXEQ6FLy0DaYg1DaHi2tMPGQ0cQGOqUBIp9IVdM5nIIK7Ph2Xml1QUY%2F5Ssad5mpZczj1HoK7%2Ba6w08XFnM2Gg27gOKsjY7v2Tt37o%2BXwExGY8%2BktKzDpjfxQRIDnIDzfmeXnidYsOtoM104wie6l%2FZu%2FhsQ1vgzRxBJcpGztjcRtAVsxrAP1eTjBCPbgqHLBfsXO%2Ft1LMzHyWJj5q5oxAr5n9R7rXTS8yxrJmtV88%2B3%2BfQ31cXFdkit61GI&X-Amz-Signature=722316105d53a7cc0158256e6fc2b6787187d07c35f505613c906cc202060f64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USWUJ3Q5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCuJytvfxfga1wsAooKVtfM93%2FfOzBlxsVH9iu%2FxKUpuQIhAPBJZvcOsHXkHDZtF%2FE1DmUKeZ3N6sE3tzvzSqv6SscKKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwjEKPfttFy77j3Mkq3AOASUlB8ker3tcLAoZi%2Fjnw%2FajVtb4iram2oVl5CuPmh3kP0XriZkdeRMoIpUTjoGEvRKkyzz1tJjSrew9ykAb7qPBXO9lRWzH%2FkYHwrqRHupdXg7Fs7kOoO1jk86px97hJ7%2FCrpgtCQF%2FHhWaIDD%2FQorsg0GhnKcW7vUysto3dLdK5p3tvmOPkj4kXLZkM0BwVyeeCXO3XH%2BjWEliYQw0t7tFHi02EtopgufzMUWFBgsPTRnqz6jwWF89urDs4H3JaJ%2Fgc3x2%2BKG1rBd2oebRJooxULXVUMpq9IUJlCzmAuqamIXoSxy2Ikg2sLEfJUSmb9LQSiGEppgV2ae8Q1zo3XaRkI6PY4tFMG538xdEYJPddTg8fU6pZuMyqkiDewaiT1CkusQUN7NRjwgTyqVTsV6hPBIZa%2BzYS2Y1jeQAJcZVykNPVsv2IEQdrvSzvN2Ft1dWG7942jDOtGj6Hw79QXx0rdZ1HfEK7MypLmUA44wRHbzhDYwx9LYAO5JaALAKJArZ3JbqHhvkf39BDqKrGxTOyGlFnIJXhxFUeTLQzvHOSqnhlRbqrggA6SUaxIKRSJt%2BfnQ9MH8HX58ZAeBMPwdsEeyE2Ub0JB%2FfD4%2F2dyPMD34lonfUaZA0fNDD6j9HEBjqkAU2P60zPmIA0kAl0VkqBhg2ux5nmEVL5MZ1nMVA240PMRXxa9ZrSMmj4C%2Bhz32PPVBqVd6%2FlWwmsKUkgRz%2F9fEWZckPt7gd1YlHMjMMde6GFBMgdbFOORLThFc4UpcDI9suPsZwvH9jElVo7KA4lzNKOY1wMXra%2F8aEtiSU7oGjqAS%2FzQDFD9qGvRENZPcANAjvN0N4Ly1ZVwyoSmuOaDtklB%2BiI&X-Amz-Signature=a5c29aa3828ae952011b3b8ea49d9c00cb754d3ee6ab13b73b6d00ed0925b995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USWUJ3Q5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCuJytvfxfga1wsAooKVtfM93%2FfOzBlxsVH9iu%2FxKUpuQIhAPBJZvcOsHXkHDZtF%2FE1DmUKeZ3N6sE3tzvzSqv6SscKKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwjEKPfttFy77j3Mkq3AOASUlB8ker3tcLAoZi%2Fjnw%2FajVtb4iram2oVl5CuPmh3kP0XriZkdeRMoIpUTjoGEvRKkyzz1tJjSrew9ykAb7qPBXO9lRWzH%2FkYHwrqRHupdXg7Fs7kOoO1jk86px97hJ7%2FCrpgtCQF%2FHhWaIDD%2FQorsg0GhnKcW7vUysto3dLdK5p3tvmOPkj4kXLZkM0BwVyeeCXO3XH%2BjWEliYQw0t7tFHi02EtopgufzMUWFBgsPTRnqz6jwWF89urDs4H3JaJ%2Fgc3x2%2BKG1rBd2oebRJooxULXVUMpq9IUJlCzmAuqamIXoSxy2Ikg2sLEfJUSmb9LQSiGEppgV2ae8Q1zo3XaRkI6PY4tFMG538xdEYJPddTg8fU6pZuMyqkiDewaiT1CkusQUN7NRjwgTyqVTsV6hPBIZa%2BzYS2Y1jeQAJcZVykNPVsv2IEQdrvSzvN2Ft1dWG7942jDOtGj6Hw79QXx0rdZ1HfEK7MypLmUA44wRHbzhDYwx9LYAO5JaALAKJArZ3JbqHhvkf39BDqKrGxTOyGlFnIJXhxFUeTLQzvHOSqnhlRbqrggA6SUaxIKRSJt%2BfnQ9MH8HX58ZAeBMPwdsEeyE2Ub0JB%2FfD4%2F2dyPMD34lonfUaZA0fNDD6j9HEBjqkAU2P60zPmIA0kAl0VkqBhg2ux5nmEVL5MZ1nMVA240PMRXxa9ZrSMmj4C%2Bhz32PPVBqVd6%2FlWwmsKUkgRz%2F9fEWZckPt7gd1YlHMjMMde6GFBMgdbFOORLThFc4UpcDI9suPsZwvH9jElVo7KA4lzNKOY1wMXra%2F8aEtiSU7oGjqAS%2FzQDFD9qGvRENZPcANAjvN0N4Ly1ZVwyoSmuOaDtklB%2BiI&X-Amz-Signature=21c025b1e8d6c1ca058b2ddb102d3adfe3cd568ba05d45576fb6f67ed56a36e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USWUJ3Q5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCuJytvfxfga1wsAooKVtfM93%2FfOzBlxsVH9iu%2FxKUpuQIhAPBJZvcOsHXkHDZtF%2FE1DmUKeZ3N6sE3tzvzSqv6SscKKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwjEKPfttFy77j3Mkq3AOASUlB8ker3tcLAoZi%2Fjnw%2FajVtb4iram2oVl5CuPmh3kP0XriZkdeRMoIpUTjoGEvRKkyzz1tJjSrew9ykAb7qPBXO9lRWzH%2FkYHwrqRHupdXg7Fs7kOoO1jk86px97hJ7%2FCrpgtCQF%2FHhWaIDD%2FQorsg0GhnKcW7vUysto3dLdK5p3tvmOPkj4kXLZkM0BwVyeeCXO3XH%2BjWEliYQw0t7tFHi02EtopgufzMUWFBgsPTRnqz6jwWF89urDs4H3JaJ%2Fgc3x2%2BKG1rBd2oebRJooxULXVUMpq9IUJlCzmAuqamIXoSxy2Ikg2sLEfJUSmb9LQSiGEppgV2ae8Q1zo3XaRkI6PY4tFMG538xdEYJPddTg8fU6pZuMyqkiDewaiT1CkusQUN7NRjwgTyqVTsV6hPBIZa%2BzYS2Y1jeQAJcZVykNPVsv2IEQdrvSzvN2Ft1dWG7942jDOtGj6Hw79QXx0rdZ1HfEK7MypLmUA44wRHbzhDYwx9LYAO5JaALAKJArZ3JbqHhvkf39BDqKrGxTOyGlFnIJXhxFUeTLQzvHOSqnhlRbqrggA6SUaxIKRSJt%2BfnQ9MH8HX58ZAeBMPwdsEeyE2Ub0JB%2FfD4%2F2dyPMD34lonfUaZA0fNDD6j9HEBjqkAU2P60zPmIA0kAl0VkqBhg2ux5nmEVL5MZ1nMVA240PMRXxa9ZrSMmj4C%2Bhz32PPVBqVd6%2FlWwmsKUkgRz%2F9fEWZckPt7gd1YlHMjMMde6GFBMgdbFOORLThFc4UpcDI9suPsZwvH9jElVo7KA4lzNKOY1wMXra%2F8aEtiSU7oGjqAS%2FzQDFD9qGvRENZPcANAjvN0N4Ly1ZVwyoSmuOaDtklB%2BiI&X-Amz-Signature=c91ef30182449b58e0798af59fa0624176deddb5d267f8db70955935c9bd9503&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USWUJ3Q5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCuJytvfxfga1wsAooKVtfM93%2FfOzBlxsVH9iu%2FxKUpuQIhAPBJZvcOsHXkHDZtF%2FE1DmUKeZ3N6sE3tzvzSqv6SscKKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwjEKPfttFy77j3Mkq3AOASUlB8ker3tcLAoZi%2Fjnw%2FajVtb4iram2oVl5CuPmh3kP0XriZkdeRMoIpUTjoGEvRKkyzz1tJjSrew9ykAb7qPBXO9lRWzH%2FkYHwrqRHupdXg7Fs7kOoO1jk86px97hJ7%2FCrpgtCQF%2FHhWaIDD%2FQorsg0GhnKcW7vUysto3dLdK5p3tvmOPkj4kXLZkM0BwVyeeCXO3XH%2BjWEliYQw0t7tFHi02EtopgufzMUWFBgsPTRnqz6jwWF89urDs4H3JaJ%2Fgc3x2%2BKG1rBd2oebRJooxULXVUMpq9IUJlCzmAuqamIXoSxy2Ikg2sLEfJUSmb9LQSiGEppgV2ae8Q1zo3XaRkI6PY4tFMG538xdEYJPddTg8fU6pZuMyqkiDewaiT1CkusQUN7NRjwgTyqVTsV6hPBIZa%2BzYS2Y1jeQAJcZVykNPVsv2IEQdrvSzvN2Ft1dWG7942jDOtGj6Hw79QXx0rdZ1HfEK7MypLmUA44wRHbzhDYwx9LYAO5JaALAKJArZ3JbqHhvkf39BDqKrGxTOyGlFnIJXhxFUeTLQzvHOSqnhlRbqrggA6SUaxIKRSJt%2BfnQ9MH8HX58ZAeBMPwdsEeyE2Ub0JB%2FfD4%2F2dyPMD34lonfUaZA0fNDD6j9HEBjqkAU2P60zPmIA0kAl0VkqBhg2ux5nmEVL5MZ1nMVA240PMRXxa9ZrSMmj4C%2Bhz32PPVBqVd6%2FlWwmsKUkgRz%2F9fEWZckPt7gd1YlHMjMMde6GFBMgdbFOORLThFc4UpcDI9suPsZwvH9jElVo7KA4lzNKOY1wMXra%2F8aEtiSU7oGjqAS%2FzQDFD9qGvRENZPcANAjvN0N4Ly1ZVwyoSmuOaDtklB%2BiI&X-Amz-Signature=2b7c75cea439bdcaccfe66ff3682183decf1c7d1da5bec8bacfa11d4b39142aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USWUJ3Q5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCuJytvfxfga1wsAooKVtfM93%2FfOzBlxsVH9iu%2FxKUpuQIhAPBJZvcOsHXkHDZtF%2FE1DmUKeZ3N6sE3tzvzSqv6SscKKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwjEKPfttFy77j3Mkq3AOASUlB8ker3tcLAoZi%2Fjnw%2FajVtb4iram2oVl5CuPmh3kP0XriZkdeRMoIpUTjoGEvRKkyzz1tJjSrew9ykAb7qPBXO9lRWzH%2FkYHwrqRHupdXg7Fs7kOoO1jk86px97hJ7%2FCrpgtCQF%2FHhWaIDD%2FQorsg0GhnKcW7vUysto3dLdK5p3tvmOPkj4kXLZkM0BwVyeeCXO3XH%2BjWEliYQw0t7tFHi02EtopgufzMUWFBgsPTRnqz6jwWF89urDs4H3JaJ%2Fgc3x2%2BKG1rBd2oebRJooxULXVUMpq9IUJlCzmAuqamIXoSxy2Ikg2sLEfJUSmb9LQSiGEppgV2ae8Q1zo3XaRkI6PY4tFMG538xdEYJPddTg8fU6pZuMyqkiDewaiT1CkusQUN7NRjwgTyqVTsV6hPBIZa%2BzYS2Y1jeQAJcZVykNPVsv2IEQdrvSzvN2Ft1dWG7942jDOtGj6Hw79QXx0rdZ1HfEK7MypLmUA44wRHbzhDYwx9LYAO5JaALAKJArZ3JbqHhvkf39BDqKrGxTOyGlFnIJXhxFUeTLQzvHOSqnhlRbqrggA6SUaxIKRSJt%2BfnQ9MH8HX58ZAeBMPwdsEeyE2Ub0JB%2FfD4%2F2dyPMD34lonfUaZA0fNDD6j9HEBjqkAU2P60zPmIA0kAl0VkqBhg2ux5nmEVL5MZ1nMVA240PMRXxa9ZrSMmj4C%2Bhz32PPVBqVd6%2FlWwmsKUkgRz%2F9fEWZckPt7gd1YlHMjMMde6GFBMgdbFOORLThFc4UpcDI9suPsZwvH9jElVo7KA4lzNKOY1wMXra%2F8aEtiSU7oGjqAS%2FzQDFD9qGvRENZPcANAjvN0N4Ly1ZVwyoSmuOaDtklB%2BiI&X-Amz-Signature=63b7a81579bc13a169feb60d71baa54a35edc66361bba6c14d5d6c8e3777e875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USWUJ3Q5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCuJytvfxfga1wsAooKVtfM93%2FfOzBlxsVH9iu%2FxKUpuQIhAPBJZvcOsHXkHDZtF%2FE1DmUKeZ3N6sE3tzvzSqv6SscKKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwjEKPfttFy77j3Mkq3AOASUlB8ker3tcLAoZi%2Fjnw%2FajVtb4iram2oVl5CuPmh3kP0XriZkdeRMoIpUTjoGEvRKkyzz1tJjSrew9ykAb7qPBXO9lRWzH%2FkYHwrqRHupdXg7Fs7kOoO1jk86px97hJ7%2FCrpgtCQF%2FHhWaIDD%2FQorsg0GhnKcW7vUysto3dLdK5p3tvmOPkj4kXLZkM0BwVyeeCXO3XH%2BjWEliYQw0t7tFHi02EtopgufzMUWFBgsPTRnqz6jwWF89urDs4H3JaJ%2Fgc3x2%2BKG1rBd2oebRJooxULXVUMpq9IUJlCzmAuqamIXoSxy2Ikg2sLEfJUSmb9LQSiGEppgV2ae8Q1zo3XaRkI6PY4tFMG538xdEYJPddTg8fU6pZuMyqkiDewaiT1CkusQUN7NRjwgTyqVTsV6hPBIZa%2BzYS2Y1jeQAJcZVykNPVsv2IEQdrvSzvN2Ft1dWG7942jDOtGj6Hw79QXx0rdZ1HfEK7MypLmUA44wRHbzhDYwx9LYAO5JaALAKJArZ3JbqHhvkf39BDqKrGxTOyGlFnIJXhxFUeTLQzvHOSqnhlRbqrggA6SUaxIKRSJt%2BfnQ9MH8HX58ZAeBMPwdsEeyE2Ub0JB%2FfD4%2F2dyPMD34lonfUaZA0fNDD6j9HEBjqkAU2P60zPmIA0kAl0VkqBhg2ux5nmEVL5MZ1nMVA240PMRXxa9ZrSMmj4C%2Bhz32PPVBqVd6%2FlWwmsKUkgRz%2F9fEWZckPt7gd1YlHMjMMde6GFBMgdbFOORLThFc4UpcDI9suPsZwvH9jElVo7KA4lzNKOY1wMXra%2F8aEtiSU7oGjqAS%2FzQDFD9qGvRENZPcANAjvN0N4Ly1ZVwyoSmuOaDtklB%2BiI&X-Amz-Signature=c92b577d905b13ba53bb1a27658ee31cb75364f2b6b492e6571ba6d1777c1713&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USWUJ3Q5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCuJytvfxfga1wsAooKVtfM93%2FfOzBlxsVH9iu%2FxKUpuQIhAPBJZvcOsHXkHDZtF%2FE1DmUKeZ3N6sE3tzvzSqv6SscKKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwjEKPfttFy77j3Mkq3AOASUlB8ker3tcLAoZi%2Fjnw%2FajVtb4iram2oVl5CuPmh3kP0XriZkdeRMoIpUTjoGEvRKkyzz1tJjSrew9ykAb7qPBXO9lRWzH%2FkYHwrqRHupdXg7Fs7kOoO1jk86px97hJ7%2FCrpgtCQF%2FHhWaIDD%2FQorsg0GhnKcW7vUysto3dLdK5p3tvmOPkj4kXLZkM0BwVyeeCXO3XH%2BjWEliYQw0t7tFHi02EtopgufzMUWFBgsPTRnqz6jwWF89urDs4H3JaJ%2Fgc3x2%2BKG1rBd2oebRJooxULXVUMpq9IUJlCzmAuqamIXoSxy2Ikg2sLEfJUSmb9LQSiGEppgV2ae8Q1zo3XaRkI6PY4tFMG538xdEYJPddTg8fU6pZuMyqkiDewaiT1CkusQUN7NRjwgTyqVTsV6hPBIZa%2BzYS2Y1jeQAJcZVykNPVsv2IEQdrvSzvN2Ft1dWG7942jDOtGj6Hw79QXx0rdZ1HfEK7MypLmUA44wRHbzhDYwx9LYAO5JaALAKJArZ3JbqHhvkf39BDqKrGxTOyGlFnIJXhxFUeTLQzvHOSqnhlRbqrggA6SUaxIKRSJt%2BfnQ9MH8HX58ZAeBMPwdsEeyE2Ub0JB%2FfD4%2F2dyPMD34lonfUaZA0fNDD6j9HEBjqkAU2P60zPmIA0kAl0VkqBhg2ux5nmEVL5MZ1nMVA240PMRXxa9ZrSMmj4C%2Bhz32PPVBqVd6%2FlWwmsKUkgRz%2F9fEWZckPt7gd1YlHMjMMde6GFBMgdbFOORLThFc4UpcDI9suPsZwvH9jElVo7KA4lzNKOY1wMXra%2F8aEtiSU7oGjqAS%2FzQDFD9qGvRENZPcANAjvN0N4Ly1ZVwyoSmuOaDtklB%2BiI&X-Amz-Signature=c5c7d4a1dfca726035f9c56350a66618a821031bae536078d0b6c95aee62c12b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USWUJ3Q5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCuJytvfxfga1wsAooKVtfM93%2FfOzBlxsVH9iu%2FxKUpuQIhAPBJZvcOsHXkHDZtF%2FE1DmUKeZ3N6sE3tzvzSqv6SscKKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwjEKPfttFy77j3Mkq3AOASUlB8ker3tcLAoZi%2Fjnw%2FajVtb4iram2oVl5CuPmh3kP0XriZkdeRMoIpUTjoGEvRKkyzz1tJjSrew9ykAb7qPBXO9lRWzH%2FkYHwrqRHupdXg7Fs7kOoO1jk86px97hJ7%2FCrpgtCQF%2FHhWaIDD%2FQorsg0GhnKcW7vUysto3dLdK5p3tvmOPkj4kXLZkM0BwVyeeCXO3XH%2BjWEliYQw0t7tFHi02EtopgufzMUWFBgsPTRnqz6jwWF89urDs4H3JaJ%2Fgc3x2%2BKG1rBd2oebRJooxULXVUMpq9IUJlCzmAuqamIXoSxy2Ikg2sLEfJUSmb9LQSiGEppgV2ae8Q1zo3XaRkI6PY4tFMG538xdEYJPddTg8fU6pZuMyqkiDewaiT1CkusQUN7NRjwgTyqVTsV6hPBIZa%2BzYS2Y1jeQAJcZVykNPVsv2IEQdrvSzvN2Ft1dWG7942jDOtGj6Hw79QXx0rdZ1HfEK7MypLmUA44wRHbzhDYwx9LYAO5JaALAKJArZ3JbqHhvkf39BDqKrGxTOyGlFnIJXhxFUeTLQzvHOSqnhlRbqrggA6SUaxIKRSJt%2BfnQ9MH8HX58ZAeBMPwdsEeyE2Ub0JB%2FfD4%2F2dyPMD34lonfUaZA0fNDD6j9HEBjqkAU2P60zPmIA0kAl0VkqBhg2ux5nmEVL5MZ1nMVA240PMRXxa9ZrSMmj4C%2Bhz32PPVBqVd6%2FlWwmsKUkgRz%2F9fEWZckPt7gd1YlHMjMMde6GFBMgdbFOORLThFc4UpcDI9suPsZwvH9jElVo7KA4lzNKOY1wMXra%2F8aEtiSU7oGjqAS%2FzQDFD9qGvRENZPcANAjvN0N4Ly1ZVwyoSmuOaDtklB%2BiI&X-Amz-Signature=97ad9ddb2c82fa0fe6605c9cc6932ddc17ca1dbb19a72496756b619473d1accf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USWUJ3Q5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCuJytvfxfga1wsAooKVtfM93%2FfOzBlxsVH9iu%2FxKUpuQIhAPBJZvcOsHXkHDZtF%2FE1DmUKeZ3N6sE3tzvzSqv6SscKKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwjEKPfttFy77j3Mkq3AOASUlB8ker3tcLAoZi%2Fjnw%2FajVtb4iram2oVl5CuPmh3kP0XriZkdeRMoIpUTjoGEvRKkyzz1tJjSrew9ykAb7qPBXO9lRWzH%2FkYHwrqRHupdXg7Fs7kOoO1jk86px97hJ7%2FCrpgtCQF%2FHhWaIDD%2FQorsg0GhnKcW7vUysto3dLdK5p3tvmOPkj4kXLZkM0BwVyeeCXO3XH%2BjWEliYQw0t7tFHi02EtopgufzMUWFBgsPTRnqz6jwWF89urDs4H3JaJ%2Fgc3x2%2BKG1rBd2oebRJooxULXVUMpq9IUJlCzmAuqamIXoSxy2Ikg2sLEfJUSmb9LQSiGEppgV2ae8Q1zo3XaRkI6PY4tFMG538xdEYJPddTg8fU6pZuMyqkiDewaiT1CkusQUN7NRjwgTyqVTsV6hPBIZa%2BzYS2Y1jeQAJcZVykNPVsv2IEQdrvSzvN2Ft1dWG7942jDOtGj6Hw79QXx0rdZ1HfEK7MypLmUA44wRHbzhDYwx9LYAO5JaALAKJArZ3JbqHhvkf39BDqKrGxTOyGlFnIJXhxFUeTLQzvHOSqnhlRbqrggA6SUaxIKRSJt%2BfnQ9MH8HX58ZAeBMPwdsEeyE2Ub0JB%2FfD4%2F2dyPMD34lonfUaZA0fNDD6j9HEBjqkAU2P60zPmIA0kAl0VkqBhg2ux5nmEVL5MZ1nMVA240PMRXxa9ZrSMmj4C%2Bhz32PPVBqVd6%2FlWwmsKUkgRz%2F9fEWZckPt7gd1YlHMjMMde6GFBMgdbFOORLThFc4UpcDI9suPsZwvH9jElVo7KA4lzNKOY1wMXra%2F8aEtiSU7oGjqAS%2FzQDFD9qGvRENZPcANAjvN0N4Ly1ZVwyoSmuOaDtklB%2BiI&X-Amz-Signature=9a249c5075c5191b60091b0fa47ad97665baa94c73b70c7a0d39ef98fc2370db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USWUJ3Q5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCuJytvfxfga1wsAooKVtfM93%2FfOzBlxsVH9iu%2FxKUpuQIhAPBJZvcOsHXkHDZtF%2FE1DmUKeZ3N6sE3tzvzSqv6SscKKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwjEKPfttFy77j3Mkq3AOASUlB8ker3tcLAoZi%2Fjnw%2FajVtb4iram2oVl5CuPmh3kP0XriZkdeRMoIpUTjoGEvRKkyzz1tJjSrew9ykAb7qPBXO9lRWzH%2FkYHwrqRHupdXg7Fs7kOoO1jk86px97hJ7%2FCrpgtCQF%2FHhWaIDD%2FQorsg0GhnKcW7vUysto3dLdK5p3tvmOPkj4kXLZkM0BwVyeeCXO3XH%2BjWEliYQw0t7tFHi02EtopgufzMUWFBgsPTRnqz6jwWF89urDs4H3JaJ%2Fgc3x2%2BKG1rBd2oebRJooxULXVUMpq9IUJlCzmAuqamIXoSxy2Ikg2sLEfJUSmb9LQSiGEppgV2ae8Q1zo3XaRkI6PY4tFMG538xdEYJPddTg8fU6pZuMyqkiDewaiT1CkusQUN7NRjwgTyqVTsV6hPBIZa%2BzYS2Y1jeQAJcZVykNPVsv2IEQdrvSzvN2Ft1dWG7942jDOtGj6Hw79QXx0rdZ1HfEK7MypLmUA44wRHbzhDYwx9LYAO5JaALAKJArZ3JbqHhvkf39BDqKrGxTOyGlFnIJXhxFUeTLQzvHOSqnhlRbqrggA6SUaxIKRSJt%2BfnQ9MH8HX58ZAeBMPwdsEeyE2Ub0JB%2FfD4%2F2dyPMD34lonfUaZA0fNDD6j9HEBjqkAU2P60zPmIA0kAl0VkqBhg2ux5nmEVL5MZ1nMVA240PMRXxa9ZrSMmj4C%2Bhz32PPVBqVd6%2FlWwmsKUkgRz%2F9fEWZckPt7gd1YlHMjMMde6GFBMgdbFOORLThFc4UpcDI9suPsZwvH9jElVo7KA4lzNKOY1wMXra%2F8aEtiSU7oGjqAS%2FzQDFD9qGvRENZPcANAjvN0N4Ly1ZVwyoSmuOaDtklB%2BiI&X-Amz-Signature=2b7c75cea439bdcaccfe66ff3682183decf1c7d1da5bec8bacfa11d4b39142aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
