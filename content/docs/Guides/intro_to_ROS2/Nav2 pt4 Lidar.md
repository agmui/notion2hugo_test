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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHN4ZFHX%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDQvCtRWweE60DfmuoHaA6Ec3VFjYqO5VkGtWQo8eFtIgIhAJP1zgPjGTPW00MSBrBAJ9GQVKUJQYtANJnLO3L95wiRKv8DCD4QABoMNjM3NDIzMTgzODA1IgwtnHbxo0J125f6Htcq3AP6MQUaf6ynGZFy2ip%2FxtVnKsLL8m1R1NqX108HcL0mcnn6A%2Frdm3D6m8sDfXetNOwAHVlXdRbauqBz9iTjkBKD5rYcJP9O8RyEzGPxoAJhbJrZWNaAtv4NVzWle%2BSKEDBXzancc%2BqViEA2os8oXt7Y7XC%2FK2y8P7AD3oCvQjQQyH3hZ6NbLkfeaD7Ywgh6KBrcfdCYNe0HurlX%2F48q79qyC3FTPYAF0mdyyfoKKg5nl4A4B53JuaJMF3cizri0tZPRFGPw0M%2B2JbT8bhVuCVtNYNyQ3ZbdgehsQHVi08ZIPwo9IAkhrv1grP8zDlikJLRjOKj4Ylhlbd8G4eJv3UNvXmZIkSufqrG9E2%2FzgUrtGA3O9SOMiqDO6TeoZKDgN%2BWFVg3wcLbzm%2BkPb0EMHU6z2ibmTzRgI0vUxNxnOA4RDDxAmhll8Jl5p6sKlbaM%2BLN5WhgWI%2BuyHCkSl1%2Bv4KQuHXSyileRe4nGcrnstJRcKGm5SDsrfQycGLhFNvfzJ2xTpu1fb%2FdRZ5JOBFaeN94HatsIQZ6g0knoWYd4H2%2BLn4NRrYhojWsLIIvA2Z3Cp94Ukd4EZP83Hecd8HGZJjWzNQbXiEiT8SjOxiK4Yb0gHcn5aPF44CpNDEbJZzDp3fbNBjqkAQ8jj8E1sdvPOq6oRgELDkx1snchLws554V6pULqfAifBqi1RQxsp2dsbGP5DI13ZhZaszZeKIqXSNAJZ7XKGj%2FZC65NH3sEM37bJS6GTVeiHNxhO3UAdulk8rJxpwsy%2BsudkGzba03WW9Oqkgt%2BSvrbhpIR9dWAEMf1uQ6Q23hQDSWcQUHiawYchwuYwJWLIv3ot7oMnqVe0yJePJIUzIZn8s1v&X-Amz-Signature=9bdecc20b47faa8b38e7efe71bba0de23621d4a57e1210751826423c389b837c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5ULTTHW%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDXl5cFmLKINVP0IxUjTyfssjWooWvbJJCLdTObo367JwIhALzsoVZg6evtoQRu4RW8WOF8RkYTd1TeHBmWBy3tX%2BFwKv8DCD4QABoMNjM3NDIzMTgzODA1Igw7p6FhZERZL7r77XQq3AO3jVy5%2BK1l7tLNroyUjhGbWIt2GR9p%2F8sT8m%2B1nAzEJPEZRt2QcYIMD5Wx31TFe2sZvYABnv8c3Z5no18AiNrD3Rx2atFWIjGsMET2AbamnaVQVT9XKwqRu%2BMFlynurn8h7cVrKulnu60kzFHw5j4fmhVvG2PTClY%2B1Rt9ZE8WAKMWtWo5Tr8h5daAtyqjYGrKNMCTHYQ%2Bwo5iF%2FFPWXGh3IY4wwsbplPgJHpMscMl9WrTbI3tTMbGRl1xrjRQC%2F5xsoLcK%2FdUkqKn%2Fe2a1AIx9cBAJ73C%2FijtoPoR6z%2FimuKrnzHSUWESJ7W71lKYmSt9eQK%2BwBUjdfhmEfUxsZC63aISM5r1%2BSU2TQ%2BH9fmwILzZrZgZDtdu1kNpeq5LNQGCHi19N0J8pdz%2FQTdjqEiORYSiRfAcWu%2Bj2eIMQeFekYu%2BojuwsXFkeSO5DRE5Sj7G3ennJXdsfFzX7o1QM830%2BEdpaU7FJsk1R26gQWaj3swmp1DIob4jGGGvbWcVuIOdqvuhr6ok0ICsKNRCFUzjq4OStQ09i4WA8KTJtx6jHRQ%2F79KpHHAwgRm%2BMMVLH45B%2BYx244PheDw5nGjhiJInuU%2BGWCU4tZwR65OUw4p%2B9HyC2qkaNAETyNh1YTDi3vbNBjqkAQ841wEoWFnRUePdK8uRqGSvmhdAWEE7yTVBmHiFFsswIJvaI4bqG8XxSnluBkOqLnCECxZaoMF8sq5vjxewHQjBInpjpaWdqWo3j0ifOoylLwUjd09RAY0z4Z%2B62Lq4vtoAj1krFzssL8GRROdT779AylWMOhkfoEZbyVoQZktpMLi5w02vxp4530hWUapsSncdRZep98wSUXU6golgcXn0X0L5&X-Amz-Signature=304c95c1817e570b41b0448380216d354b2ed8eb5160f9128e89903cc84c412a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5ULTTHW%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDXl5cFmLKINVP0IxUjTyfssjWooWvbJJCLdTObo367JwIhALzsoVZg6evtoQRu4RW8WOF8RkYTd1TeHBmWBy3tX%2BFwKv8DCD4QABoMNjM3NDIzMTgzODA1Igw7p6FhZERZL7r77XQq3AO3jVy5%2BK1l7tLNroyUjhGbWIt2GR9p%2F8sT8m%2B1nAzEJPEZRt2QcYIMD5Wx31TFe2sZvYABnv8c3Z5no18AiNrD3Rx2atFWIjGsMET2AbamnaVQVT9XKwqRu%2BMFlynurn8h7cVrKulnu60kzFHw5j4fmhVvG2PTClY%2B1Rt9ZE8WAKMWtWo5Tr8h5daAtyqjYGrKNMCTHYQ%2Bwo5iF%2FFPWXGh3IY4wwsbplPgJHpMscMl9WrTbI3tTMbGRl1xrjRQC%2F5xsoLcK%2FdUkqKn%2Fe2a1AIx9cBAJ73C%2FijtoPoR6z%2FimuKrnzHSUWESJ7W71lKYmSt9eQK%2BwBUjdfhmEfUxsZC63aISM5r1%2BSU2TQ%2BH9fmwILzZrZgZDtdu1kNpeq5LNQGCHi19N0J8pdz%2FQTdjqEiORYSiRfAcWu%2Bj2eIMQeFekYu%2BojuwsXFkeSO5DRE5Sj7G3ennJXdsfFzX7o1QM830%2BEdpaU7FJsk1R26gQWaj3swmp1DIob4jGGGvbWcVuIOdqvuhr6ok0ICsKNRCFUzjq4OStQ09i4WA8KTJtx6jHRQ%2F79KpHHAwgRm%2BMMVLH45B%2BYx244PheDw5nGjhiJInuU%2BGWCU4tZwR65OUw4p%2B9HyC2qkaNAETyNh1YTDi3vbNBjqkAQ841wEoWFnRUePdK8uRqGSvmhdAWEE7yTVBmHiFFsswIJvaI4bqG8XxSnluBkOqLnCECxZaoMF8sq5vjxewHQjBInpjpaWdqWo3j0ifOoylLwUjd09RAY0z4Z%2B62Lq4vtoAj1krFzssL8GRROdT779AylWMOhkfoEZbyVoQZktpMLi5w02vxp4530hWUapsSncdRZep98wSUXU6golgcXn0X0L5&X-Amz-Signature=cea58315df64d5e44e3bfb5bfc1d218452be3ae4f129fa101793e2552675c9ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5ULTTHW%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDXl5cFmLKINVP0IxUjTyfssjWooWvbJJCLdTObo367JwIhALzsoVZg6evtoQRu4RW8WOF8RkYTd1TeHBmWBy3tX%2BFwKv8DCD4QABoMNjM3NDIzMTgzODA1Igw7p6FhZERZL7r77XQq3AO3jVy5%2BK1l7tLNroyUjhGbWIt2GR9p%2F8sT8m%2B1nAzEJPEZRt2QcYIMD5Wx31TFe2sZvYABnv8c3Z5no18AiNrD3Rx2atFWIjGsMET2AbamnaVQVT9XKwqRu%2BMFlynurn8h7cVrKulnu60kzFHw5j4fmhVvG2PTClY%2B1Rt9ZE8WAKMWtWo5Tr8h5daAtyqjYGrKNMCTHYQ%2Bwo5iF%2FFPWXGh3IY4wwsbplPgJHpMscMl9WrTbI3tTMbGRl1xrjRQC%2F5xsoLcK%2FdUkqKn%2Fe2a1AIx9cBAJ73C%2FijtoPoR6z%2FimuKrnzHSUWESJ7W71lKYmSt9eQK%2BwBUjdfhmEfUxsZC63aISM5r1%2BSU2TQ%2BH9fmwILzZrZgZDtdu1kNpeq5LNQGCHi19N0J8pdz%2FQTdjqEiORYSiRfAcWu%2Bj2eIMQeFekYu%2BojuwsXFkeSO5DRE5Sj7G3ennJXdsfFzX7o1QM830%2BEdpaU7FJsk1R26gQWaj3swmp1DIob4jGGGvbWcVuIOdqvuhr6ok0ICsKNRCFUzjq4OStQ09i4WA8KTJtx6jHRQ%2F79KpHHAwgRm%2BMMVLH45B%2BYx244PheDw5nGjhiJInuU%2BGWCU4tZwR65OUw4p%2B9HyC2qkaNAETyNh1YTDi3vbNBjqkAQ841wEoWFnRUePdK8uRqGSvmhdAWEE7yTVBmHiFFsswIJvaI4bqG8XxSnluBkOqLnCECxZaoMF8sq5vjxewHQjBInpjpaWdqWo3j0ifOoylLwUjd09RAY0z4Z%2B62Lq4vtoAj1krFzssL8GRROdT779AylWMOhkfoEZbyVoQZktpMLi5w02vxp4530hWUapsSncdRZep98wSUXU6golgcXn0X0L5&X-Amz-Signature=dc207a98fc3828fa68a3647fdd583277572776d845a95cea6ab8d7adadbec4f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5ULTTHW%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDXl5cFmLKINVP0IxUjTyfssjWooWvbJJCLdTObo367JwIhALzsoVZg6evtoQRu4RW8WOF8RkYTd1TeHBmWBy3tX%2BFwKv8DCD4QABoMNjM3NDIzMTgzODA1Igw7p6FhZERZL7r77XQq3AO3jVy5%2BK1l7tLNroyUjhGbWIt2GR9p%2F8sT8m%2B1nAzEJPEZRt2QcYIMD5Wx31TFe2sZvYABnv8c3Z5no18AiNrD3Rx2atFWIjGsMET2AbamnaVQVT9XKwqRu%2BMFlynurn8h7cVrKulnu60kzFHw5j4fmhVvG2PTClY%2B1Rt9ZE8WAKMWtWo5Tr8h5daAtyqjYGrKNMCTHYQ%2Bwo5iF%2FFPWXGh3IY4wwsbplPgJHpMscMl9WrTbI3tTMbGRl1xrjRQC%2F5xsoLcK%2FdUkqKn%2Fe2a1AIx9cBAJ73C%2FijtoPoR6z%2FimuKrnzHSUWESJ7W71lKYmSt9eQK%2BwBUjdfhmEfUxsZC63aISM5r1%2BSU2TQ%2BH9fmwILzZrZgZDtdu1kNpeq5LNQGCHi19N0J8pdz%2FQTdjqEiORYSiRfAcWu%2Bj2eIMQeFekYu%2BojuwsXFkeSO5DRE5Sj7G3ennJXdsfFzX7o1QM830%2BEdpaU7FJsk1R26gQWaj3swmp1DIob4jGGGvbWcVuIOdqvuhr6ok0ICsKNRCFUzjq4OStQ09i4WA8KTJtx6jHRQ%2F79KpHHAwgRm%2BMMVLH45B%2BYx244PheDw5nGjhiJInuU%2BGWCU4tZwR65OUw4p%2B9HyC2qkaNAETyNh1YTDi3vbNBjqkAQ841wEoWFnRUePdK8uRqGSvmhdAWEE7yTVBmHiFFsswIJvaI4bqG8XxSnluBkOqLnCECxZaoMF8sq5vjxewHQjBInpjpaWdqWo3j0ifOoylLwUjd09RAY0z4Z%2B62Lq4vtoAj1krFzssL8GRROdT779AylWMOhkfoEZbyVoQZktpMLi5w02vxp4530hWUapsSncdRZep98wSUXU6golgcXn0X0L5&X-Amz-Signature=ce4b05890d9b0aeef48c49f7dee1c19cc8bc88d61254e352ddef11b5820cb16a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5ULTTHW%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDXl5cFmLKINVP0IxUjTyfssjWooWvbJJCLdTObo367JwIhALzsoVZg6evtoQRu4RW8WOF8RkYTd1TeHBmWBy3tX%2BFwKv8DCD4QABoMNjM3NDIzMTgzODA1Igw7p6FhZERZL7r77XQq3AO3jVy5%2BK1l7tLNroyUjhGbWIt2GR9p%2F8sT8m%2B1nAzEJPEZRt2QcYIMD5Wx31TFe2sZvYABnv8c3Z5no18AiNrD3Rx2atFWIjGsMET2AbamnaVQVT9XKwqRu%2BMFlynurn8h7cVrKulnu60kzFHw5j4fmhVvG2PTClY%2B1Rt9ZE8WAKMWtWo5Tr8h5daAtyqjYGrKNMCTHYQ%2Bwo5iF%2FFPWXGh3IY4wwsbplPgJHpMscMl9WrTbI3tTMbGRl1xrjRQC%2F5xsoLcK%2FdUkqKn%2Fe2a1AIx9cBAJ73C%2FijtoPoR6z%2FimuKrnzHSUWESJ7W71lKYmSt9eQK%2BwBUjdfhmEfUxsZC63aISM5r1%2BSU2TQ%2BH9fmwILzZrZgZDtdu1kNpeq5LNQGCHi19N0J8pdz%2FQTdjqEiORYSiRfAcWu%2Bj2eIMQeFekYu%2BojuwsXFkeSO5DRE5Sj7G3ennJXdsfFzX7o1QM830%2BEdpaU7FJsk1R26gQWaj3swmp1DIob4jGGGvbWcVuIOdqvuhr6ok0ICsKNRCFUzjq4OStQ09i4WA8KTJtx6jHRQ%2F79KpHHAwgRm%2BMMVLH45B%2BYx244PheDw5nGjhiJInuU%2BGWCU4tZwR65OUw4p%2B9HyC2qkaNAETyNh1YTDi3vbNBjqkAQ841wEoWFnRUePdK8uRqGSvmhdAWEE7yTVBmHiFFsswIJvaI4bqG8XxSnluBkOqLnCECxZaoMF8sq5vjxewHQjBInpjpaWdqWo3j0ifOoylLwUjd09RAY0z4Z%2B62Lq4vtoAj1krFzssL8GRROdT779AylWMOhkfoEZbyVoQZktpMLi5w02vxp4530hWUapsSncdRZep98wSUXU6golgcXn0X0L5&X-Amz-Signature=57e8148d470c5e84d48583393faaac4045a7fe126ecb9b8bc1b362ffdd7662a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5ULTTHW%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDXl5cFmLKINVP0IxUjTyfssjWooWvbJJCLdTObo367JwIhALzsoVZg6evtoQRu4RW8WOF8RkYTd1TeHBmWBy3tX%2BFwKv8DCD4QABoMNjM3NDIzMTgzODA1Igw7p6FhZERZL7r77XQq3AO3jVy5%2BK1l7tLNroyUjhGbWIt2GR9p%2F8sT8m%2B1nAzEJPEZRt2QcYIMD5Wx31TFe2sZvYABnv8c3Z5no18AiNrD3Rx2atFWIjGsMET2AbamnaVQVT9XKwqRu%2BMFlynurn8h7cVrKulnu60kzFHw5j4fmhVvG2PTClY%2B1Rt9ZE8WAKMWtWo5Tr8h5daAtyqjYGrKNMCTHYQ%2Bwo5iF%2FFPWXGh3IY4wwsbplPgJHpMscMl9WrTbI3tTMbGRl1xrjRQC%2F5xsoLcK%2FdUkqKn%2Fe2a1AIx9cBAJ73C%2FijtoPoR6z%2FimuKrnzHSUWESJ7W71lKYmSt9eQK%2BwBUjdfhmEfUxsZC63aISM5r1%2BSU2TQ%2BH9fmwILzZrZgZDtdu1kNpeq5LNQGCHi19N0J8pdz%2FQTdjqEiORYSiRfAcWu%2Bj2eIMQeFekYu%2BojuwsXFkeSO5DRE5Sj7G3ennJXdsfFzX7o1QM830%2BEdpaU7FJsk1R26gQWaj3swmp1DIob4jGGGvbWcVuIOdqvuhr6ok0ICsKNRCFUzjq4OStQ09i4WA8KTJtx6jHRQ%2F79KpHHAwgRm%2BMMVLH45B%2BYx244PheDw5nGjhiJInuU%2BGWCU4tZwR65OUw4p%2B9HyC2qkaNAETyNh1YTDi3vbNBjqkAQ841wEoWFnRUePdK8uRqGSvmhdAWEE7yTVBmHiFFsswIJvaI4bqG8XxSnluBkOqLnCECxZaoMF8sq5vjxewHQjBInpjpaWdqWo3j0ifOoylLwUjd09RAY0z4Z%2B62Lq4vtoAj1krFzssL8GRROdT779AylWMOhkfoEZbyVoQZktpMLi5w02vxp4530hWUapsSncdRZep98wSUXU6golgcXn0X0L5&X-Amz-Signature=a26ece695b037b72d0d13f8d2c0013dcfb2c3e193b14a8f4d07f6ee670bdc1bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5ULTTHW%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDXl5cFmLKINVP0IxUjTyfssjWooWvbJJCLdTObo367JwIhALzsoVZg6evtoQRu4RW8WOF8RkYTd1TeHBmWBy3tX%2BFwKv8DCD4QABoMNjM3NDIzMTgzODA1Igw7p6FhZERZL7r77XQq3AO3jVy5%2BK1l7tLNroyUjhGbWIt2GR9p%2F8sT8m%2B1nAzEJPEZRt2QcYIMD5Wx31TFe2sZvYABnv8c3Z5no18AiNrD3Rx2atFWIjGsMET2AbamnaVQVT9XKwqRu%2BMFlynurn8h7cVrKulnu60kzFHw5j4fmhVvG2PTClY%2B1Rt9ZE8WAKMWtWo5Tr8h5daAtyqjYGrKNMCTHYQ%2Bwo5iF%2FFPWXGh3IY4wwsbplPgJHpMscMl9WrTbI3tTMbGRl1xrjRQC%2F5xsoLcK%2FdUkqKn%2Fe2a1AIx9cBAJ73C%2FijtoPoR6z%2FimuKrnzHSUWESJ7W71lKYmSt9eQK%2BwBUjdfhmEfUxsZC63aISM5r1%2BSU2TQ%2BH9fmwILzZrZgZDtdu1kNpeq5LNQGCHi19N0J8pdz%2FQTdjqEiORYSiRfAcWu%2Bj2eIMQeFekYu%2BojuwsXFkeSO5DRE5Sj7G3ennJXdsfFzX7o1QM830%2BEdpaU7FJsk1R26gQWaj3swmp1DIob4jGGGvbWcVuIOdqvuhr6ok0ICsKNRCFUzjq4OStQ09i4WA8KTJtx6jHRQ%2F79KpHHAwgRm%2BMMVLH45B%2BYx244PheDw5nGjhiJInuU%2BGWCU4tZwR65OUw4p%2B9HyC2qkaNAETyNh1YTDi3vbNBjqkAQ841wEoWFnRUePdK8uRqGSvmhdAWEE7yTVBmHiFFsswIJvaI4bqG8XxSnluBkOqLnCECxZaoMF8sq5vjxewHQjBInpjpaWdqWo3j0ifOoylLwUjd09RAY0z4Z%2B62Lq4vtoAj1krFzssL8GRROdT779AylWMOhkfoEZbyVoQZktpMLi5w02vxp4530hWUapsSncdRZep98wSUXU6golgcXn0X0L5&X-Amz-Signature=51f5ca8a2d6bd3624610caec1d590eeb93808dfe241fb03854226c232999b292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5ULTTHW%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDXl5cFmLKINVP0IxUjTyfssjWooWvbJJCLdTObo367JwIhALzsoVZg6evtoQRu4RW8WOF8RkYTd1TeHBmWBy3tX%2BFwKv8DCD4QABoMNjM3NDIzMTgzODA1Igw7p6FhZERZL7r77XQq3AO3jVy5%2BK1l7tLNroyUjhGbWIt2GR9p%2F8sT8m%2B1nAzEJPEZRt2QcYIMD5Wx31TFe2sZvYABnv8c3Z5no18AiNrD3Rx2atFWIjGsMET2AbamnaVQVT9XKwqRu%2BMFlynurn8h7cVrKulnu60kzFHw5j4fmhVvG2PTClY%2B1Rt9ZE8WAKMWtWo5Tr8h5daAtyqjYGrKNMCTHYQ%2Bwo5iF%2FFPWXGh3IY4wwsbplPgJHpMscMl9WrTbI3tTMbGRl1xrjRQC%2F5xsoLcK%2FdUkqKn%2Fe2a1AIx9cBAJ73C%2FijtoPoR6z%2FimuKrnzHSUWESJ7W71lKYmSt9eQK%2BwBUjdfhmEfUxsZC63aISM5r1%2BSU2TQ%2BH9fmwILzZrZgZDtdu1kNpeq5LNQGCHi19N0J8pdz%2FQTdjqEiORYSiRfAcWu%2Bj2eIMQeFekYu%2BojuwsXFkeSO5DRE5Sj7G3ennJXdsfFzX7o1QM830%2BEdpaU7FJsk1R26gQWaj3swmp1DIob4jGGGvbWcVuIOdqvuhr6ok0ICsKNRCFUzjq4OStQ09i4WA8KTJtx6jHRQ%2F79KpHHAwgRm%2BMMVLH45B%2BYx244PheDw5nGjhiJInuU%2BGWCU4tZwR65OUw4p%2B9HyC2qkaNAETyNh1YTDi3vbNBjqkAQ841wEoWFnRUePdK8uRqGSvmhdAWEE7yTVBmHiFFsswIJvaI4bqG8XxSnluBkOqLnCECxZaoMF8sq5vjxewHQjBInpjpaWdqWo3j0ifOoylLwUjd09RAY0z4Z%2B62Lq4vtoAj1krFzssL8GRROdT779AylWMOhkfoEZbyVoQZktpMLi5w02vxp4530hWUapsSncdRZep98wSUXU6golgcXn0X0L5&X-Amz-Signature=57972ff8421cf82d86dd690730cfd94d8ef5c3ae3d5894866b949c6aadff9eb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5ULTTHW%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDXl5cFmLKINVP0IxUjTyfssjWooWvbJJCLdTObo367JwIhALzsoVZg6evtoQRu4RW8WOF8RkYTd1TeHBmWBy3tX%2BFwKv8DCD4QABoMNjM3NDIzMTgzODA1Igw7p6FhZERZL7r77XQq3AO3jVy5%2BK1l7tLNroyUjhGbWIt2GR9p%2F8sT8m%2B1nAzEJPEZRt2QcYIMD5Wx31TFe2sZvYABnv8c3Z5no18AiNrD3Rx2atFWIjGsMET2AbamnaVQVT9XKwqRu%2BMFlynurn8h7cVrKulnu60kzFHw5j4fmhVvG2PTClY%2B1Rt9ZE8WAKMWtWo5Tr8h5daAtyqjYGrKNMCTHYQ%2Bwo5iF%2FFPWXGh3IY4wwsbplPgJHpMscMl9WrTbI3tTMbGRl1xrjRQC%2F5xsoLcK%2FdUkqKn%2Fe2a1AIx9cBAJ73C%2FijtoPoR6z%2FimuKrnzHSUWESJ7W71lKYmSt9eQK%2BwBUjdfhmEfUxsZC63aISM5r1%2BSU2TQ%2BH9fmwILzZrZgZDtdu1kNpeq5LNQGCHi19N0J8pdz%2FQTdjqEiORYSiRfAcWu%2Bj2eIMQeFekYu%2BojuwsXFkeSO5DRE5Sj7G3ennJXdsfFzX7o1QM830%2BEdpaU7FJsk1R26gQWaj3swmp1DIob4jGGGvbWcVuIOdqvuhr6ok0ICsKNRCFUzjq4OStQ09i4WA8KTJtx6jHRQ%2F79KpHHAwgRm%2BMMVLH45B%2BYx244PheDw5nGjhiJInuU%2BGWCU4tZwR65OUw4p%2B9HyC2qkaNAETyNh1YTDi3vbNBjqkAQ841wEoWFnRUePdK8uRqGSvmhdAWEE7yTVBmHiFFsswIJvaI4bqG8XxSnluBkOqLnCECxZaoMF8sq5vjxewHQjBInpjpaWdqWo3j0ifOoylLwUjd09RAY0z4Z%2B62Lq4vtoAj1krFzssL8GRROdT779AylWMOhkfoEZbyVoQZktpMLi5w02vxp4530hWUapsSncdRZep98wSUXU6golgcXn0X0L5&X-Amz-Signature=cd7ff6fe8d760a039c0b1d537091f574d7630880d6afcd363f2b85b7c3cf867d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5ULTTHW%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDXl5cFmLKINVP0IxUjTyfssjWooWvbJJCLdTObo367JwIhALzsoVZg6evtoQRu4RW8WOF8RkYTd1TeHBmWBy3tX%2BFwKv8DCD4QABoMNjM3NDIzMTgzODA1Igw7p6FhZERZL7r77XQq3AO3jVy5%2BK1l7tLNroyUjhGbWIt2GR9p%2F8sT8m%2B1nAzEJPEZRt2QcYIMD5Wx31TFe2sZvYABnv8c3Z5no18AiNrD3Rx2atFWIjGsMET2AbamnaVQVT9XKwqRu%2BMFlynurn8h7cVrKulnu60kzFHw5j4fmhVvG2PTClY%2B1Rt9ZE8WAKMWtWo5Tr8h5daAtyqjYGrKNMCTHYQ%2Bwo5iF%2FFPWXGh3IY4wwsbplPgJHpMscMl9WrTbI3tTMbGRl1xrjRQC%2F5xsoLcK%2FdUkqKn%2Fe2a1AIx9cBAJ73C%2FijtoPoR6z%2FimuKrnzHSUWESJ7W71lKYmSt9eQK%2BwBUjdfhmEfUxsZC63aISM5r1%2BSU2TQ%2BH9fmwILzZrZgZDtdu1kNpeq5LNQGCHi19N0J8pdz%2FQTdjqEiORYSiRfAcWu%2Bj2eIMQeFekYu%2BojuwsXFkeSO5DRE5Sj7G3ennJXdsfFzX7o1QM830%2BEdpaU7FJsk1R26gQWaj3swmp1DIob4jGGGvbWcVuIOdqvuhr6ok0ICsKNRCFUzjq4OStQ09i4WA8KTJtx6jHRQ%2F79KpHHAwgRm%2BMMVLH45B%2BYx244PheDw5nGjhiJInuU%2BGWCU4tZwR65OUw4p%2B9HyC2qkaNAETyNh1YTDi3vbNBjqkAQ841wEoWFnRUePdK8uRqGSvmhdAWEE7yTVBmHiFFsswIJvaI4bqG8XxSnluBkOqLnCECxZaoMF8sq5vjxewHQjBInpjpaWdqWo3j0ifOoylLwUjd09RAY0z4Z%2B62Lq4vtoAj1krFzssL8GRROdT779AylWMOhkfoEZbyVoQZktpMLi5w02vxp4530hWUapsSncdRZep98wSUXU6golgcXn0X0L5&X-Amz-Signature=ce4b05890d9b0aeef48c49f7dee1c19cc8bc88d61254e352ddef11b5820cb16a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
