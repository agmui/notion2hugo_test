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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWYOZPEE%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCVlczqpfQAXIaLwb1ZPy02wTR4UfsbrI4thybjrsBsRgIhAKJeHiZ%2FnnHLmgGzouYI6%2F4Gtpxeh%2FD7F%2F6qXj2k2f1dKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwDKRWixRZ6sgDEtAq3APNKDE4JnH%2BZj3fPMlu0IaKnkglPIP%2BoW0LzfDjjeszXs5mQCzPAnjUGjvVT%2B6FzX2eKDmWpfR11xhrtJBxSFyDCK9IByOOyian3O9v0cjJ4zwLUP0dS9yDl2loYgS0JYjN9TIAolOfoG2cCj6Z%2FQdGqw777aIz98fil9rWhnFilZEytQa5jiAPnC9nAYKUl%2FgtnLb4kQLDYrryqxkw7CSHrjYY3DzgPdQl2Qys9LRaauH88yvk8fwzp0FU8Xc6%2BVPWPEYik5xRmDfjoR2SUsq3rdJrX0gh5PbWY%2B1v541ABsJVwdVSnm2AejgyUbixxiFnyOTQ%2Fen4rJJSkzw1%2FILb0jGHxxwIMUVQJe%2F3yKT4dyNse6%2F3N9n0UqiFtH%2BbJu%2BR9U69xL0%2BFgGUWjiyiiVT4UgztuGfR7Od%2FRypyIUnOoLwfc4gPLonw0YnlJGJmT%2BvH4Zgb0ySDizzInHqo9BG0c%2Filfvh19vXdOaifPqF2gzjPP6dmUiTgd2DFumtWQsP6WyZj7DA4kp2c5GYdNzF4v3WZNxJk5fIS%2F4Ik6QBVogbjvd7c1pwqmPj1QeEkZZPj3PJDJDFsNdWdWYMCz6SIFiiS67Ab%2FZPVPyURSxlTAmB2Ok1F%2Fs2R2gufzD17NDEBjqkAYvbMx%2FAVt8TKMUHD6FR9m%2B3SAu9Ha7K4D%2B%2BeenyKwQ7hCrykDLf1fbCprSecEetY1tQHqAtfLEA3mWlyHtQYYhD9tmgiF5ePbmLKPI1LvC5koFLC8ahv64zwuF2Yq9%2Fe2bekFJiv3Zzp0YHbu8bFO%2Bm12P3qRcdWql%2BpP%2FUk1zyitT0GsW25A1Gpb45wEqAlL7%2BeaOXYT9DsfnH53CIsdHxwVC3&X-Amz-Signature=272986cbc7477b7db942f6f89a8ec05af05ad9f849e87fc3a09b38b139e07476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XIDBYXW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIDBDkZj0yvHLxYdPzpq0U5rLvoP5w5IGTCp%2BvIKRqGzJAiA1oXPU0IYiXR88ebLuuvn6cOe83rxdxtQ3cDpq4qC5oyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCTSSvZJhy7O6ELjfKtwDNjCPpL2I7z3ChJ5164CUnHysmwPMlhZNC52Jje7IwY6Hp%2Bh2RTaCnzA4Tv45giJ76EC3VnGmqhLxiWYx9WGheHoR0GYyygIXxmnzYIwOhVjkmU%2BLABYcZ9rSf7oGIg%2BIxF5X%2FveNlIwKUg%2FD1EIxBDI%2FOeuiZy95%2BK8M83TcVQBnocvWmsQJ1fjn%2B7ArVKgubPw8dBgfmokJCjdUK1khhIpo42f68ST2jkCRNqrQazhxJ0l7hetDnyv6l662kwvyQZUzcbAoIhAUnpMJOXP%2BQkKDNXZ2j%2BrFQtHqqIzv54T0JQT184eVf3b2XedWEdnvjXY%2BQ6O2zypcYnk%2Fk73erGVUOVPaAqk9SigJkMFYp0o5xGRxOoLN205pIMOy4myTRr2TqrL7pD2ctMF6cKscSR%2BWHZ%2FhJmyZQPbyEbkSSeSUabcR4rxc%2BIiK6Jfdpb%2F8c7un2XHNRMmeiSb%2B5bkb4hIae41Ad4GdyS7byfdEtymsIXugjf4le%2Bvvqw8rF6WYfl%2B9dcyEq66wH%2FKJiDYTK40towjzgzNCW33uUPiFWCHOz0AwKirRpkkLhUm2u4KCOxNn10v8aWQ7RpdTmLNsMY3k6qBoDAQiGiCqjqdhpaJTztcEnGXJwqpiegkwgO3QxAY6pgF2uXwwj3%2F17HZCYM%2FHUGyR%2FY%2FaBggWV1%2BAStN7%2BOCdWjlwF63rflABG2W96iB0Q9WS6H6OewdJbflr4n7aGoy4S5B7ua4NuAhh1qI4CTyXHSDPwV8OXlSfal8sbMztxtakFjjcEka6mLw7ToGbxQNDzIBFXlHaUmN9zwXTxhfrvUlO%2FMkMFRdMNV5eDieOVObGnWn%2BbasQzL2ULiTdY8GJSEKRSKTn&X-Amz-Signature=27f6b692a1e38fe0082133080ea681d929b30aaead3f49cde9cb0c76e593cf22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XIDBYXW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIDBDkZj0yvHLxYdPzpq0U5rLvoP5w5IGTCp%2BvIKRqGzJAiA1oXPU0IYiXR88ebLuuvn6cOe83rxdxtQ3cDpq4qC5oyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCTSSvZJhy7O6ELjfKtwDNjCPpL2I7z3ChJ5164CUnHysmwPMlhZNC52Jje7IwY6Hp%2Bh2RTaCnzA4Tv45giJ76EC3VnGmqhLxiWYx9WGheHoR0GYyygIXxmnzYIwOhVjkmU%2BLABYcZ9rSf7oGIg%2BIxF5X%2FveNlIwKUg%2FD1EIxBDI%2FOeuiZy95%2BK8M83TcVQBnocvWmsQJ1fjn%2B7ArVKgubPw8dBgfmokJCjdUK1khhIpo42f68ST2jkCRNqrQazhxJ0l7hetDnyv6l662kwvyQZUzcbAoIhAUnpMJOXP%2BQkKDNXZ2j%2BrFQtHqqIzv54T0JQT184eVf3b2XedWEdnvjXY%2BQ6O2zypcYnk%2Fk73erGVUOVPaAqk9SigJkMFYp0o5xGRxOoLN205pIMOy4myTRr2TqrL7pD2ctMF6cKscSR%2BWHZ%2FhJmyZQPbyEbkSSeSUabcR4rxc%2BIiK6Jfdpb%2F8c7un2XHNRMmeiSb%2B5bkb4hIae41Ad4GdyS7byfdEtymsIXugjf4le%2Bvvqw8rF6WYfl%2B9dcyEq66wH%2FKJiDYTK40towjzgzNCW33uUPiFWCHOz0AwKirRpkkLhUm2u4KCOxNn10v8aWQ7RpdTmLNsMY3k6qBoDAQiGiCqjqdhpaJTztcEnGXJwqpiegkwgO3QxAY6pgF2uXwwj3%2F17HZCYM%2FHUGyR%2FY%2FaBggWV1%2BAStN7%2BOCdWjlwF63rflABG2W96iB0Q9WS6H6OewdJbflr4n7aGoy4S5B7ua4NuAhh1qI4CTyXHSDPwV8OXlSfal8sbMztxtakFjjcEka6mLw7ToGbxQNDzIBFXlHaUmN9zwXTxhfrvUlO%2FMkMFRdMNV5eDieOVObGnWn%2BbasQzL2ULiTdY8GJSEKRSKTn&X-Amz-Signature=28857e1b2e063fddd8ea764b68ca221e1d9e478a4de73ed55226fcec7ab31588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XIDBYXW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIDBDkZj0yvHLxYdPzpq0U5rLvoP5w5IGTCp%2BvIKRqGzJAiA1oXPU0IYiXR88ebLuuvn6cOe83rxdxtQ3cDpq4qC5oyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCTSSvZJhy7O6ELjfKtwDNjCPpL2I7z3ChJ5164CUnHysmwPMlhZNC52Jje7IwY6Hp%2Bh2RTaCnzA4Tv45giJ76EC3VnGmqhLxiWYx9WGheHoR0GYyygIXxmnzYIwOhVjkmU%2BLABYcZ9rSf7oGIg%2BIxF5X%2FveNlIwKUg%2FD1EIxBDI%2FOeuiZy95%2BK8M83TcVQBnocvWmsQJ1fjn%2B7ArVKgubPw8dBgfmokJCjdUK1khhIpo42f68ST2jkCRNqrQazhxJ0l7hetDnyv6l662kwvyQZUzcbAoIhAUnpMJOXP%2BQkKDNXZ2j%2BrFQtHqqIzv54T0JQT184eVf3b2XedWEdnvjXY%2BQ6O2zypcYnk%2Fk73erGVUOVPaAqk9SigJkMFYp0o5xGRxOoLN205pIMOy4myTRr2TqrL7pD2ctMF6cKscSR%2BWHZ%2FhJmyZQPbyEbkSSeSUabcR4rxc%2BIiK6Jfdpb%2F8c7un2XHNRMmeiSb%2B5bkb4hIae41Ad4GdyS7byfdEtymsIXugjf4le%2Bvvqw8rF6WYfl%2B9dcyEq66wH%2FKJiDYTK40towjzgzNCW33uUPiFWCHOz0AwKirRpkkLhUm2u4KCOxNn10v8aWQ7RpdTmLNsMY3k6qBoDAQiGiCqjqdhpaJTztcEnGXJwqpiegkwgO3QxAY6pgF2uXwwj3%2F17HZCYM%2FHUGyR%2FY%2FaBggWV1%2BAStN7%2BOCdWjlwF63rflABG2W96iB0Q9WS6H6OewdJbflr4n7aGoy4S5B7ua4NuAhh1qI4CTyXHSDPwV8OXlSfal8sbMztxtakFjjcEka6mLw7ToGbxQNDzIBFXlHaUmN9zwXTxhfrvUlO%2FMkMFRdMNV5eDieOVObGnWn%2BbasQzL2ULiTdY8GJSEKRSKTn&X-Amz-Signature=d60c420e4b797d47d2e8490021e8608bab5b701821693a3190d80e6d3ead1e80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XIDBYXW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIDBDkZj0yvHLxYdPzpq0U5rLvoP5w5IGTCp%2BvIKRqGzJAiA1oXPU0IYiXR88ebLuuvn6cOe83rxdxtQ3cDpq4qC5oyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCTSSvZJhy7O6ELjfKtwDNjCPpL2I7z3ChJ5164CUnHysmwPMlhZNC52Jje7IwY6Hp%2Bh2RTaCnzA4Tv45giJ76EC3VnGmqhLxiWYx9WGheHoR0GYyygIXxmnzYIwOhVjkmU%2BLABYcZ9rSf7oGIg%2BIxF5X%2FveNlIwKUg%2FD1EIxBDI%2FOeuiZy95%2BK8M83TcVQBnocvWmsQJ1fjn%2B7ArVKgubPw8dBgfmokJCjdUK1khhIpo42f68ST2jkCRNqrQazhxJ0l7hetDnyv6l662kwvyQZUzcbAoIhAUnpMJOXP%2BQkKDNXZ2j%2BrFQtHqqIzv54T0JQT184eVf3b2XedWEdnvjXY%2BQ6O2zypcYnk%2Fk73erGVUOVPaAqk9SigJkMFYp0o5xGRxOoLN205pIMOy4myTRr2TqrL7pD2ctMF6cKscSR%2BWHZ%2FhJmyZQPbyEbkSSeSUabcR4rxc%2BIiK6Jfdpb%2F8c7un2XHNRMmeiSb%2B5bkb4hIae41Ad4GdyS7byfdEtymsIXugjf4le%2Bvvqw8rF6WYfl%2B9dcyEq66wH%2FKJiDYTK40towjzgzNCW33uUPiFWCHOz0AwKirRpkkLhUm2u4KCOxNn10v8aWQ7RpdTmLNsMY3k6qBoDAQiGiCqjqdhpaJTztcEnGXJwqpiegkwgO3QxAY6pgF2uXwwj3%2F17HZCYM%2FHUGyR%2FY%2FaBggWV1%2BAStN7%2BOCdWjlwF63rflABG2W96iB0Q9WS6H6OewdJbflr4n7aGoy4S5B7ua4NuAhh1qI4CTyXHSDPwV8OXlSfal8sbMztxtakFjjcEka6mLw7ToGbxQNDzIBFXlHaUmN9zwXTxhfrvUlO%2FMkMFRdMNV5eDieOVObGnWn%2BbasQzL2ULiTdY8GJSEKRSKTn&X-Amz-Signature=3b36ab58f25015979a286c7f3baf94727183ad4fb5407176b93554df0f524bf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XIDBYXW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIDBDkZj0yvHLxYdPzpq0U5rLvoP5w5IGTCp%2BvIKRqGzJAiA1oXPU0IYiXR88ebLuuvn6cOe83rxdxtQ3cDpq4qC5oyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCTSSvZJhy7O6ELjfKtwDNjCPpL2I7z3ChJ5164CUnHysmwPMlhZNC52Jje7IwY6Hp%2Bh2RTaCnzA4Tv45giJ76EC3VnGmqhLxiWYx9WGheHoR0GYyygIXxmnzYIwOhVjkmU%2BLABYcZ9rSf7oGIg%2BIxF5X%2FveNlIwKUg%2FD1EIxBDI%2FOeuiZy95%2BK8M83TcVQBnocvWmsQJ1fjn%2B7ArVKgubPw8dBgfmokJCjdUK1khhIpo42f68ST2jkCRNqrQazhxJ0l7hetDnyv6l662kwvyQZUzcbAoIhAUnpMJOXP%2BQkKDNXZ2j%2BrFQtHqqIzv54T0JQT184eVf3b2XedWEdnvjXY%2BQ6O2zypcYnk%2Fk73erGVUOVPaAqk9SigJkMFYp0o5xGRxOoLN205pIMOy4myTRr2TqrL7pD2ctMF6cKscSR%2BWHZ%2FhJmyZQPbyEbkSSeSUabcR4rxc%2BIiK6Jfdpb%2F8c7un2XHNRMmeiSb%2B5bkb4hIae41Ad4GdyS7byfdEtymsIXugjf4le%2Bvvqw8rF6WYfl%2B9dcyEq66wH%2FKJiDYTK40towjzgzNCW33uUPiFWCHOz0AwKirRpkkLhUm2u4KCOxNn10v8aWQ7RpdTmLNsMY3k6qBoDAQiGiCqjqdhpaJTztcEnGXJwqpiegkwgO3QxAY6pgF2uXwwj3%2F17HZCYM%2FHUGyR%2FY%2FaBggWV1%2BAStN7%2BOCdWjlwF63rflABG2W96iB0Q9WS6H6OewdJbflr4n7aGoy4S5B7ua4NuAhh1qI4CTyXHSDPwV8OXlSfal8sbMztxtakFjjcEka6mLw7ToGbxQNDzIBFXlHaUmN9zwXTxhfrvUlO%2FMkMFRdMNV5eDieOVObGnWn%2BbasQzL2ULiTdY8GJSEKRSKTn&X-Amz-Signature=369c3b1c14f48ea57a358e833b72f24091cc63c1db62f7cd3e03c1d8403c5205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XIDBYXW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIDBDkZj0yvHLxYdPzpq0U5rLvoP5w5IGTCp%2BvIKRqGzJAiA1oXPU0IYiXR88ebLuuvn6cOe83rxdxtQ3cDpq4qC5oyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCTSSvZJhy7O6ELjfKtwDNjCPpL2I7z3ChJ5164CUnHysmwPMlhZNC52Jje7IwY6Hp%2Bh2RTaCnzA4Tv45giJ76EC3VnGmqhLxiWYx9WGheHoR0GYyygIXxmnzYIwOhVjkmU%2BLABYcZ9rSf7oGIg%2BIxF5X%2FveNlIwKUg%2FD1EIxBDI%2FOeuiZy95%2BK8M83TcVQBnocvWmsQJ1fjn%2B7ArVKgubPw8dBgfmokJCjdUK1khhIpo42f68ST2jkCRNqrQazhxJ0l7hetDnyv6l662kwvyQZUzcbAoIhAUnpMJOXP%2BQkKDNXZ2j%2BrFQtHqqIzv54T0JQT184eVf3b2XedWEdnvjXY%2BQ6O2zypcYnk%2Fk73erGVUOVPaAqk9SigJkMFYp0o5xGRxOoLN205pIMOy4myTRr2TqrL7pD2ctMF6cKscSR%2BWHZ%2FhJmyZQPbyEbkSSeSUabcR4rxc%2BIiK6Jfdpb%2F8c7un2XHNRMmeiSb%2B5bkb4hIae41Ad4GdyS7byfdEtymsIXugjf4le%2Bvvqw8rF6WYfl%2B9dcyEq66wH%2FKJiDYTK40towjzgzNCW33uUPiFWCHOz0AwKirRpkkLhUm2u4KCOxNn10v8aWQ7RpdTmLNsMY3k6qBoDAQiGiCqjqdhpaJTztcEnGXJwqpiegkwgO3QxAY6pgF2uXwwj3%2F17HZCYM%2FHUGyR%2FY%2FaBggWV1%2BAStN7%2BOCdWjlwF63rflABG2W96iB0Q9WS6H6OewdJbflr4n7aGoy4S5B7ua4NuAhh1qI4CTyXHSDPwV8OXlSfal8sbMztxtakFjjcEka6mLw7ToGbxQNDzIBFXlHaUmN9zwXTxhfrvUlO%2FMkMFRdMNV5eDieOVObGnWn%2BbasQzL2ULiTdY8GJSEKRSKTn&X-Amz-Signature=d0a302a8aabe21783b2e469b77d831fb122797fc0e7b3207eb9892be8d282181&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XIDBYXW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIDBDkZj0yvHLxYdPzpq0U5rLvoP5w5IGTCp%2BvIKRqGzJAiA1oXPU0IYiXR88ebLuuvn6cOe83rxdxtQ3cDpq4qC5oyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCTSSvZJhy7O6ELjfKtwDNjCPpL2I7z3ChJ5164CUnHysmwPMlhZNC52Jje7IwY6Hp%2Bh2RTaCnzA4Tv45giJ76EC3VnGmqhLxiWYx9WGheHoR0GYyygIXxmnzYIwOhVjkmU%2BLABYcZ9rSf7oGIg%2BIxF5X%2FveNlIwKUg%2FD1EIxBDI%2FOeuiZy95%2BK8M83TcVQBnocvWmsQJ1fjn%2B7ArVKgubPw8dBgfmokJCjdUK1khhIpo42f68ST2jkCRNqrQazhxJ0l7hetDnyv6l662kwvyQZUzcbAoIhAUnpMJOXP%2BQkKDNXZ2j%2BrFQtHqqIzv54T0JQT184eVf3b2XedWEdnvjXY%2BQ6O2zypcYnk%2Fk73erGVUOVPaAqk9SigJkMFYp0o5xGRxOoLN205pIMOy4myTRr2TqrL7pD2ctMF6cKscSR%2BWHZ%2FhJmyZQPbyEbkSSeSUabcR4rxc%2BIiK6Jfdpb%2F8c7un2XHNRMmeiSb%2B5bkb4hIae41Ad4GdyS7byfdEtymsIXugjf4le%2Bvvqw8rF6WYfl%2B9dcyEq66wH%2FKJiDYTK40towjzgzNCW33uUPiFWCHOz0AwKirRpkkLhUm2u4KCOxNn10v8aWQ7RpdTmLNsMY3k6qBoDAQiGiCqjqdhpaJTztcEnGXJwqpiegkwgO3QxAY6pgF2uXwwj3%2F17HZCYM%2FHUGyR%2FY%2FaBggWV1%2BAStN7%2BOCdWjlwF63rflABG2W96iB0Q9WS6H6OewdJbflr4n7aGoy4S5B7ua4NuAhh1qI4CTyXHSDPwV8OXlSfal8sbMztxtakFjjcEka6mLw7ToGbxQNDzIBFXlHaUmN9zwXTxhfrvUlO%2FMkMFRdMNV5eDieOVObGnWn%2BbasQzL2ULiTdY8GJSEKRSKTn&X-Amz-Signature=fec4acc1026c9ad64cba3b195f7b8007a74e98ecbc2bd07c6aed34829398c6ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XIDBYXW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIDBDkZj0yvHLxYdPzpq0U5rLvoP5w5IGTCp%2BvIKRqGzJAiA1oXPU0IYiXR88ebLuuvn6cOe83rxdxtQ3cDpq4qC5oyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCTSSvZJhy7O6ELjfKtwDNjCPpL2I7z3ChJ5164CUnHysmwPMlhZNC52Jje7IwY6Hp%2Bh2RTaCnzA4Tv45giJ76EC3VnGmqhLxiWYx9WGheHoR0GYyygIXxmnzYIwOhVjkmU%2BLABYcZ9rSf7oGIg%2BIxF5X%2FveNlIwKUg%2FD1EIxBDI%2FOeuiZy95%2BK8M83TcVQBnocvWmsQJ1fjn%2B7ArVKgubPw8dBgfmokJCjdUK1khhIpo42f68ST2jkCRNqrQazhxJ0l7hetDnyv6l662kwvyQZUzcbAoIhAUnpMJOXP%2BQkKDNXZ2j%2BrFQtHqqIzv54T0JQT184eVf3b2XedWEdnvjXY%2BQ6O2zypcYnk%2Fk73erGVUOVPaAqk9SigJkMFYp0o5xGRxOoLN205pIMOy4myTRr2TqrL7pD2ctMF6cKscSR%2BWHZ%2FhJmyZQPbyEbkSSeSUabcR4rxc%2BIiK6Jfdpb%2F8c7un2XHNRMmeiSb%2B5bkb4hIae41Ad4GdyS7byfdEtymsIXugjf4le%2Bvvqw8rF6WYfl%2B9dcyEq66wH%2FKJiDYTK40towjzgzNCW33uUPiFWCHOz0AwKirRpkkLhUm2u4KCOxNn10v8aWQ7RpdTmLNsMY3k6qBoDAQiGiCqjqdhpaJTztcEnGXJwqpiegkwgO3QxAY6pgF2uXwwj3%2F17HZCYM%2FHUGyR%2FY%2FaBggWV1%2BAStN7%2BOCdWjlwF63rflABG2W96iB0Q9WS6H6OewdJbflr4n7aGoy4S5B7ua4NuAhh1qI4CTyXHSDPwV8OXlSfal8sbMztxtakFjjcEka6mLw7ToGbxQNDzIBFXlHaUmN9zwXTxhfrvUlO%2FMkMFRdMNV5eDieOVObGnWn%2BbasQzL2ULiTdY8GJSEKRSKTn&X-Amz-Signature=27578ad84a2aff804145e20ad5fbbff359f797b714e9b572caeebdc504654e67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XIDBYXW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIDBDkZj0yvHLxYdPzpq0U5rLvoP5w5IGTCp%2BvIKRqGzJAiA1oXPU0IYiXR88ebLuuvn6cOe83rxdxtQ3cDpq4qC5oyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCTSSvZJhy7O6ELjfKtwDNjCPpL2I7z3ChJ5164CUnHysmwPMlhZNC52Jje7IwY6Hp%2Bh2RTaCnzA4Tv45giJ76EC3VnGmqhLxiWYx9WGheHoR0GYyygIXxmnzYIwOhVjkmU%2BLABYcZ9rSf7oGIg%2BIxF5X%2FveNlIwKUg%2FD1EIxBDI%2FOeuiZy95%2BK8M83TcVQBnocvWmsQJ1fjn%2B7ArVKgubPw8dBgfmokJCjdUK1khhIpo42f68ST2jkCRNqrQazhxJ0l7hetDnyv6l662kwvyQZUzcbAoIhAUnpMJOXP%2BQkKDNXZ2j%2BrFQtHqqIzv54T0JQT184eVf3b2XedWEdnvjXY%2BQ6O2zypcYnk%2Fk73erGVUOVPaAqk9SigJkMFYp0o5xGRxOoLN205pIMOy4myTRr2TqrL7pD2ctMF6cKscSR%2BWHZ%2FhJmyZQPbyEbkSSeSUabcR4rxc%2BIiK6Jfdpb%2F8c7un2XHNRMmeiSb%2B5bkb4hIae41Ad4GdyS7byfdEtymsIXugjf4le%2Bvvqw8rF6WYfl%2B9dcyEq66wH%2FKJiDYTK40towjzgzNCW33uUPiFWCHOz0AwKirRpkkLhUm2u4KCOxNn10v8aWQ7RpdTmLNsMY3k6qBoDAQiGiCqjqdhpaJTztcEnGXJwqpiegkwgO3QxAY6pgF2uXwwj3%2F17HZCYM%2FHUGyR%2FY%2FaBggWV1%2BAStN7%2BOCdWjlwF63rflABG2W96iB0Q9WS6H6OewdJbflr4n7aGoy4S5B7ua4NuAhh1qI4CTyXHSDPwV8OXlSfal8sbMztxtakFjjcEka6mLw7ToGbxQNDzIBFXlHaUmN9zwXTxhfrvUlO%2FMkMFRdMNV5eDieOVObGnWn%2BbasQzL2ULiTdY8GJSEKRSKTn&X-Amz-Signature=0a5aed03fa05bff683af56b6d101fbc616440c81a2615b54c3bb2dcd82416cb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XIDBYXW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIDBDkZj0yvHLxYdPzpq0U5rLvoP5w5IGTCp%2BvIKRqGzJAiA1oXPU0IYiXR88ebLuuvn6cOe83rxdxtQ3cDpq4qC5oyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCTSSvZJhy7O6ELjfKtwDNjCPpL2I7z3ChJ5164CUnHysmwPMlhZNC52Jje7IwY6Hp%2Bh2RTaCnzA4Tv45giJ76EC3VnGmqhLxiWYx9WGheHoR0GYyygIXxmnzYIwOhVjkmU%2BLABYcZ9rSf7oGIg%2BIxF5X%2FveNlIwKUg%2FD1EIxBDI%2FOeuiZy95%2BK8M83TcVQBnocvWmsQJ1fjn%2B7ArVKgubPw8dBgfmokJCjdUK1khhIpo42f68ST2jkCRNqrQazhxJ0l7hetDnyv6l662kwvyQZUzcbAoIhAUnpMJOXP%2BQkKDNXZ2j%2BrFQtHqqIzv54T0JQT184eVf3b2XedWEdnvjXY%2BQ6O2zypcYnk%2Fk73erGVUOVPaAqk9SigJkMFYp0o5xGRxOoLN205pIMOy4myTRr2TqrL7pD2ctMF6cKscSR%2BWHZ%2FhJmyZQPbyEbkSSeSUabcR4rxc%2BIiK6Jfdpb%2F8c7un2XHNRMmeiSb%2B5bkb4hIae41Ad4GdyS7byfdEtymsIXugjf4le%2Bvvqw8rF6WYfl%2B9dcyEq66wH%2FKJiDYTK40towjzgzNCW33uUPiFWCHOz0AwKirRpkkLhUm2u4KCOxNn10v8aWQ7RpdTmLNsMY3k6qBoDAQiGiCqjqdhpaJTztcEnGXJwqpiegkwgO3QxAY6pgF2uXwwj3%2F17HZCYM%2FHUGyR%2FY%2FaBggWV1%2BAStN7%2BOCdWjlwF63rflABG2W96iB0Q9WS6H6OewdJbflr4n7aGoy4S5B7ua4NuAhh1qI4CTyXHSDPwV8OXlSfal8sbMztxtakFjjcEka6mLw7ToGbxQNDzIBFXlHaUmN9zwXTxhfrvUlO%2FMkMFRdMNV5eDieOVObGnWn%2BbasQzL2ULiTdY8GJSEKRSKTn&X-Amz-Signature=f155d7a90ce6b6fed9a413ec596ff1eabbfdaea6865dcf939930ffcd03b37259&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
