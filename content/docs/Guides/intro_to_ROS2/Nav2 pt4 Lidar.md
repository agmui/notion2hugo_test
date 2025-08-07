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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGHRKPRD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIFdRpeyzGl0jdVn%2BngBXyEXbxqxIf%2F%2BHLG%2FceTSDCmqjAiEAqa6ZQ8Qveh25%2FfYI534D18SmjUmT3DI6HqvjO%2Fy3zTQqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWG9KlgDuSVDEl%2FRSrcAxTekWbGeolr%2FO7lTPR956NAF3%2FIJ6dSRAAxt5RTNY%2FpZ7owltnxX3quh3R0cGeS59cEoluJV3edYse4ZHAavJCz1GVWdkc%2Bx3TRqtvroNc8bjPlGNXpWUmPustP2%2F8z5MkYy%2BtEP3Uv6s3v8AKWzOxcEHeWjPsSvgtMy3dSI5uLbTyV7bII3gHMpeJbEUzLTluh7HLJ7t%2FC5%2Bsxs7KxtVqs8%2B3q9DAbfgkAKoGu8%2FPh4etmnrdls5NrWKP6VaczvDqt6tsy7qgYkU0%2BO9d%2FW2obp3zOcUECrnY2YrZw2PK%2Bg3sOxyd2sQAW%2BbHjMClrilphqDqmfbgUZTrWZ1AJ07CQMxevfK8AJn88pxwokgo5FidIrLoajg%2FJOkLHL0tURXuPRvS4l6UP4HNLfVfM9t%2FSUNBJOKnNs12Z2dKf5CnWLA93Y1BhGH8J%2FAb8ZTD2g31JBVQc7Lc2BIv0jyyuIT104aKiHMYCCKNdauhrYZNnhSHbKfSepO71jyVqXTdXCMBJm4Kn%2FFJYWyn2VXw1psXubGug6eLifQXuNsmn9%2BrEcPWBslHyAVMQYvIdLcirWrN%2Fsj3l%2BfrFWmWf1SUzVCi4Ato6Djol4FkUyEqGcISVkGShvM6KSKiDS9YZMO2h08QGOqUBB7f6eF%2BvzCZfvEKjoItLURZf%2FK%2F0zyfcxWS%2BDm4NDrgHAmewIlqS0d%2FO4biO1LDAZSIkk0MuF%2FAAwRF%2BLleUsMl0a9SzuZiHiRxws%2B4ediQlIw4L1Q6uOD9xyVPyKb0GOfKfe6TQEQrEfrcAPafJlIx8ImtKb8OK7kIj3nerBQP71BmTs29WIweDh0bBIrSkRvB4E9g8ppRsPx6cj7dMaws6cRqc&X-Amz-Signature=6bf02df248cba7091f783a4e86c3943e377f88d1d8fc4cc710bc097cb944fc03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C74GN4J%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCID4lzm30jUinA%2B%2B%2BbDQZFAI1gdOw5WN5%2FAB3KHnmD3a6AiEAiFrVhsTGwJdibNV8YwnaxrVsy%2BHXcdG%2FxiE8IXhquMsqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ28HJf1I%2FsZ4AHF3yrcA1OGLO9BaxllnnPCNsqMHJhyiuIRw8QnFxxAF6DCfNlbqFcYEYdQ0M%2FdnyyXTjdSIAP5%2BS4qsd2pWIWZrqtNgIIy20LVV66GAlLA5Knzg%2FKdX3ON3ErFs3ywgUJ7XYTOCyE594WBpi8fXlIbdOjRYVop72Kk9%2FXx3Hbz3yc2sN1Z4D5NdKg%2BAXmUo63L8ML%2Bul%2FVdbmbYqil13RZIAn7kvBDFqOiGWE5dpKQbKt0MJ9nMHsi0%2FIv8On7W%2BViDMcgvUwJgLA9MYPQwMj3yN21WYmHeyV3FLL6jrLGYuCCNbPWL%2Fq%2BG0vPl7MUzUrGjF2csw6vVof8j6gqtSVF0d6a2eD9889TRLHML2TDoalWMHsNQdZLgjBXinh5i00XAjGxQcbhvIuAHFJc28XGWNwZTFvjOi8KEqILmiY85nX2pwDdT80gLi9nsph4gzPV8MKusbgD841faqYRSijjsB5wxx0jVLmhKPC5xtW7rUkvUtkz20hEZStC2nssrJrSGJT%2FZoAkKVki4itb6UftRP9yq8zu0gi0EfkZ%2FUz0LM8X68znnnXs6D1gK60PeS%2BcayXrSdPyrpjFFMFfwuIEj%2BrJbK8U%2BkjuJGE5aFsDM%2BY2cELgoJlRMtW4Sgqg8v5kMNai08QGOqUBaB1JT8ntkPo29BbRMB9M4OImCX24r45PZIfmNqiyO6soZzgjTacVeDHThQO064Q%2FCsRUKRJOyBq6%2Fl7dqdwUwlTCyxUscc93y8X%2FG6pkblP4sDPp1KUBcX2C%2Fn1Bh2EuJZIcXpgCAk9uUoB1anH7svRPHgywZLI9aoqR9d%2F1f97Q562MoyfliDoRvFcywzSGZCeVRRUI005dvgQWozU9WkmMZCbz&X-Amz-Signature=32fd6802e5dcc8e2224cc888f3b28944de0e90bce95b2ba49ca446d13b3b2ea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C74GN4J%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCID4lzm30jUinA%2B%2B%2BbDQZFAI1gdOw5WN5%2FAB3KHnmD3a6AiEAiFrVhsTGwJdibNV8YwnaxrVsy%2BHXcdG%2FxiE8IXhquMsqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ28HJf1I%2FsZ4AHF3yrcA1OGLO9BaxllnnPCNsqMHJhyiuIRw8QnFxxAF6DCfNlbqFcYEYdQ0M%2FdnyyXTjdSIAP5%2BS4qsd2pWIWZrqtNgIIy20LVV66GAlLA5Knzg%2FKdX3ON3ErFs3ywgUJ7XYTOCyE594WBpi8fXlIbdOjRYVop72Kk9%2FXx3Hbz3yc2sN1Z4D5NdKg%2BAXmUo63L8ML%2Bul%2FVdbmbYqil13RZIAn7kvBDFqOiGWE5dpKQbKt0MJ9nMHsi0%2FIv8On7W%2BViDMcgvUwJgLA9MYPQwMj3yN21WYmHeyV3FLL6jrLGYuCCNbPWL%2Fq%2BG0vPl7MUzUrGjF2csw6vVof8j6gqtSVF0d6a2eD9889TRLHML2TDoalWMHsNQdZLgjBXinh5i00XAjGxQcbhvIuAHFJc28XGWNwZTFvjOi8KEqILmiY85nX2pwDdT80gLi9nsph4gzPV8MKusbgD841faqYRSijjsB5wxx0jVLmhKPC5xtW7rUkvUtkz20hEZStC2nssrJrSGJT%2FZoAkKVki4itb6UftRP9yq8zu0gi0EfkZ%2FUz0LM8X68znnnXs6D1gK60PeS%2BcayXrSdPyrpjFFMFfwuIEj%2BrJbK8U%2BkjuJGE5aFsDM%2BY2cELgoJlRMtW4Sgqg8v5kMNai08QGOqUBaB1JT8ntkPo29BbRMB9M4OImCX24r45PZIfmNqiyO6soZzgjTacVeDHThQO064Q%2FCsRUKRJOyBq6%2Fl7dqdwUwlTCyxUscc93y8X%2FG6pkblP4sDPp1KUBcX2C%2Fn1Bh2EuJZIcXpgCAk9uUoB1anH7svRPHgywZLI9aoqR9d%2F1f97Q562MoyfliDoRvFcywzSGZCeVRRUI005dvgQWozU9WkmMZCbz&X-Amz-Signature=e75523f55a41da1a1a95524241d127242d6efb3b66eb5dcfd88cba1a0222f11d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C74GN4J%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCID4lzm30jUinA%2B%2B%2BbDQZFAI1gdOw5WN5%2FAB3KHnmD3a6AiEAiFrVhsTGwJdibNV8YwnaxrVsy%2BHXcdG%2FxiE8IXhquMsqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ28HJf1I%2FsZ4AHF3yrcA1OGLO9BaxllnnPCNsqMHJhyiuIRw8QnFxxAF6DCfNlbqFcYEYdQ0M%2FdnyyXTjdSIAP5%2BS4qsd2pWIWZrqtNgIIy20LVV66GAlLA5Knzg%2FKdX3ON3ErFs3ywgUJ7XYTOCyE594WBpi8fXlIbdOjRYVop72Kk9%2FXx3Hbz3yc2sN1Z4D5NdKg%2BAXmUo63L8ML%2Bul%2FVdbmbYqil13RZIAn7kvBDFqOiGWE5dpKQbKt0MJ9nMHsi0%2FIv8On7W%2BViDMcgvUwJgLA9MYPQwMj3yN21WYmHeyV3FLL6jrLGYuCCNbPWL%2Fq%2BG0vPl7MUzUrGjF2csw6vVof8j6gqtSVF0d6a2eD9889TRLHML2TDoalWMHsNQdZLgjBXinh5i00XAjGxQcbhvIuAHFJc28XGWNwZTFvjOi8KEqILmiY85nX2pwDdT80gLi9nsph4gzPV8MKusbgD841faqYRSijjsB5wxx0jVLmhKPC5xtW7rUkvUtkz20hEZStC2nssrJrSGJT%2FZoAkKVki4itb6UftRP9yq8zu0gi0EfkZ%2FUz0LM8X68znnnXs6D1gK60PeS%2BcayXrSdPyrpjFFMFfwuIEj%2BrJbK8U%2BkjuJGE5aFsDM%2BY2cELgoJlRMtW4Sgqg8v5kMNai08QGOqUBaB1JT8ntkPo29BbRMB9M4OImCX24r45PZIfmNqiyO6soZzgjTacVeDHThQO064Q%2FCsRUKRJOyBq6%2Fl7dqdwUwlTCyxUscc93y8X%2FG6pkblP4sDPp1KUBcX2C%2Fn1Bh2EuJZIcXpgCAk9uUoB1anH7svRPHgywZLI9aoqR9d%2F1f97Q562MoyfliDoRvFcywzSGZCeVRRUI005dvgQWozU9WkmMZCbz&X-Amz-Signature=c720ff53f2047011068b46c34e17cc03b03c67ccedc36825b398ad18deafb2ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C74GN4J%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCID4lzm30jUinA%2B%2B%2BbDQZFAI1gdOw5WN5%2FAB3KHnmD3a6AiEAiFrVhsTGwJdibNV8YwnaxrVsy%2BHXcdG%2FxiE8IXhquMsqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ28HJf1I%2FsZ4AHF3yrcA1OGLO9BaxllnnPCNsqMHJhyiuIRw8QnFxxAF6DCfNlbqFcYEYdQ0M%2FdnyyXTjdSIAP5%2BS4qsd2pWIWZrqtNgIIy20LVV66GAlLA5Knzg%2FKdX3ON3ErFs3ywgUJ7XYTOCyE594WBpi8fXlIbdOjRYVop72Kk9%2FXx3Hbz3yc2sN1Z4D5NdKg%2BAXmUo63L8ML%2Bul%2FVdbmbYqil13RZIAn7kvBDFqOiGWE5dpKQbKt0MJ9nMHsi0%2FIv8On7W%2BViDMcgvUwJgLA9MYPQwMj3yN21WYmHeyV3FLL6jrLGYuCCNbPWL%2Fq%2BG0vPl7MUzUrGjF2csw6vVof8j6gqtSVF0d6a2eD9889TRLHML2TDoalWMHsNQdZLgjBXinh5i00XAjGxQcbhvIuAHFJc28XGWNwZTFvjOi8KEqILmiY85nX2pwDdT80gLi9nsph4gzPV8MKusbgD841faqYRSijjsB5wxx0jVLmhKPC5xtW7rUkvUtkz20hEZStC2nssrJrSGJT%2FZoAkKVki4itb6UftRP9yq8zu0gi0EfkZ%2FUz0LM8X68znnnXs6D1gK60PeS%2BcayXrSdPyrpjFFMFfwuIEj%2BrJbK8U%2BkjuJGE5aFsDM%2BY2cELgoJlRMtW4Sgqg8v5kMNai08QGOqUBaB1JT8ntkPo29BbRMB9M4OImCX24r45PZIfmNqiyO6soZzgjTacVeDHThQO064Q%2FCsRUKRJOyBq6%2Fl7dqdwUwlTCyxUscc93y8X%2FG6pkblP4sDPp1KUBcX2C%2Fn1Bh2EuJZIcXpgCAk9uUoB1anH7svRPHgywZLI9aoqR9d%2F1f97Q562MoyfliDoRvFcywzSGZCeVRRUI005dvgQWozU9WkmMZCbz&X-Amz-Signature=8060cfd7a43d48b94b89c3cf75d18a6a4c29988ac2bac2e5db691be8f62d77aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C74GN4J%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCID4lzm30jUinA%2B%2B%2BbDQZFAI1gdOw5WN5%2FAB3KHnmD3a6AiEAiFrVhsTGwJdibNV8YwnaxrVsy%2BHXcdG%2FxiE8IXhquMsqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ28HJf1I%2FsZ4AHF3yrcA1OGLO9BaxllnnPCNsqMHJhyiuIRw8QnFxxAF6DCfNlbqFcYEYdQ0M%2FdnyyXTjdSIAP5%2BS4qsd2pWIWZrqtNgIIy20LVV66GAlLA5Knzg%2FKdX3ON3ErFs3ywgUJ7XYTOCyE594WBpi8fXlIbdOjRYVop72Kk9%2FXx3Hbz3yc2sN1Z4D5NdKg%2BAXmUo63L8ML%2Bul%2FVdbmbYqil13RZIAn7kvBDFqOiGWE5dpKQbKt0MJ9nMHsi0%2FIv8On7W%2BViDMcgvUwJgLA9MYPQwMj3yN21WYmHeyV3FLL6jrLGYuCCNbPWL%2Fq%2BG0vPl7MUzUrGjF2csw6vVof8j6gqtSVF0d6a2eD9889TRLHML2TDoalWMHsNQdZLgjBXinh5i00XAjGxQcbhvIuAHFJc28XGWNwZTFvjOi8KEqILmiY85nX2pwDdT80gLi9nsph4gzPV8MKusbgD841faqYRSijjsB5wxx0jVLmhKPC5xtW7rUkvUtkz20hEZStC2nssrJrSGJT%2FZoAkKVki4itb6UftRP9yq8zu0gi0EfkZ%2FUz0LM8X68znnnXs6D1gK60PeS%2BcayXrSdPyrpjFFMFfwuIEj%2BrJbK8U%2BkjuJGE5aFsDM%2BY2cELgoJlRMtW4Sgqg8v5kMNai08QGOqUBaB1JT8ntkPo29BbRMB9M4OImCX24r45PZIfmNqiyO6soZzgjTacVeDHThQO064Q%2FCsRUKRJOyBq6%2Fl7dqdwUwlTCyxUscc93y8X%2FG6pkblP4sDPp1KUBcX2C%2Fn1Bh2EuJZIcXpgCAk9uUoB1anH7svRPHgywZLI9aoqR9d%2F1f97Q562MoyfliDoRvFcywzSGZCeVRRUI005dvgQWozU9WkmMZCbz&X-Amz-Signature=3480e6a9fe2ab4422b55fe0ba3455625906c68d8366540891816820aa40ee8fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C74GN4J%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCID4lzm30jUinA%2B%2B%2BbDQZFAI1gdOw5WN5%2FAB3KHnmD3a6AiEAiFrVhsTGwJdibNV8YwnaxrVsy%2BHXcdG%2FxiE8IXhquMsqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ28HJf1I%2FsZ4AHF3yrcA1OGLO9BaxllnnPCNsqMHJhyiuIRw8QnFxxAF6DCfNlbqFcYEYdQ0M%2FdnyyXTjdSIAP5%2BS4qsd2pWIWZrqtNgIIy20LVV66GAlLA5Knzg%2FKdX3ON3ErFs3ywgUJ7XYTOCyE594WBpi8fXlIbdOjRYVop72Kk9%2FXx3Hbz3yc2sN1Z4D5NdKg%2BAXmUo63L8ML%2Bul%2FVdbmbYqil13RZIAn7kvBDFqOiGWE5dpKQbKt0MJ9nMHsi0%2FIv8On7W%2BViDMcgvUwJgLA9MYPQwMj3yN21WYmHeyV3FLL6jrLGYuCCNbPWL%2Fq%2BG0vPl7MUzUrGjF2csw6vVof8j6gqtSVF0d6a2eD9889TRLHML2TDoalWMHsNQdZLgjBXinh5i00XAjGxQcbhvIuAHFJc28XGWNwZTFvjOi8KEqILmiY85nX2pwDdT80gLi9nsph4gzPV8MKusbgD841faqYRSijjsB5wxx0jVLmhKPC5xtW7rUkvUtkz20hEZStC2nssrJrSGJT%2FZoAkKVki4itb6UftRP9yq8zu0gi0EfkZ%2FUz0LM8X68znnnXs6D1gK60PeS%2BcayXrSdPyrpjFFMFfwuIEj%2BrJbK8U%2BkjuJGE5aFsDM%2BY2cELgoJlRMtW4Sgqg8v5kMNai08QGOqUBaB1JT8ntkPo29BbRMB9M4OImCX24r45PZIfmNqiyO6soZzgjTacVeDHThQO064Q%2FCsRUKRJOyBq6%2Fl7dqdwUwlTCyxUscc93y8X%2FG6pkblP4sDPp1KUBcX2C%2Fn1Bh2EuJZIcXpgCAk9uUoB1anH7svRPHgywZLI9aoqR9d%2F1f97Q562MoyfliDoRvFcywzSGZCeVRRUI005dvgQWozU9WkmMZCbz&X-Amz-Signature=fc9938e3fd1a0283b1d9ca3394a73a48500d33c6264e141f6525509c7b2368d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C74GN4J%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCID4lzm30jUinA%2B%2B%2BbDQZFAI1gdOw5WN5%2FAB3KHnmD3a6AiEAiFrVhsTGwJdibNV8YwnaxrVsy%2BHXcdG%2FxiE8IXhquMsqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ28HJf1I%2FsZ4AHF3yrcA1OGLO9BaxllnnPCNsqMHJhyiuIRw8QnFxxAF6DCfNlbqFcYEYdQ0M%2FdnyyXTjdSIAP5%2BS4qsd2pWIWZrqtNgIIy20LVV66GAlLA5Knzg%2FKdX3ON3ErFs3ywgUJ7XYTOCyE594WBpi8fXlIbdOjRYVop72Kk9%2FXx3Hbz3yc2sN1Z4D5NdKg%2BAXmUo63L8ML%2Bul%2FVdbmbYqil13RZIAn7kvBDFqOiGWE5dpKQbKt0MJ9nMHsi0%2FIv8On7W%2BViDMcgvUwJgLA9MYPQwMj3yN21WYmHeyV3FLL6jrLGYuCCNbPWL%2Fq%2BG0vPl7MUzUrGjF2csw6vVof8j6gqtSVF0d6a2eD9889TRLHML2TDoalWMHsNQdZLgjBXinh5i00XAjGxQcbhvIuAHFJc28XGWNwZTFvjOi8KEqILmiY85nX2pwDdT80gLi9nsph4gzPV8MKusbgD841faqYRSijjsB5wxx0jVLmhKPC5xtW7rUkvUtkz20hEZStC2nssrJrSGJT%2FZoAkKVki4itb6UftRP9yq8zu0gi0EfkZ%2FUz0LM8X68znnnXs6D1gK60PeS%2BcayXrSdPyrpjFFMFfwuIEj%2BrJbK8U%2BkjuJGE5aFsDM%2BY2cELgoJlRMtW4Sgqg8v5kMNai08QGOqUBaB1JT8ntkPo29BbRMB9M4OImCX24r45PZIfmNqiyO6soZzgjTacVeDHThQO064Q%2FCsRUKRJOyBq6%2Fl7dqdwUwlTCyxUscc93y8X%2FG6pkblP4sDPp1KUBcX2C%2Fn1Bh2EuJZIcXpgCAk9uUoB1anH7svRPHgywZLI9aoqR9d%2F1f97Q562MoyfliDoRvFcywzSGZCeVRRUI005dvgQWozU9WkmMZCbz&X-Amz-Signature=e1c5944633bcaad0a31f3d17e367cef00b3238adec8e0cbe0e4844a76a1605d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C74GN4J%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCID4lzm30jUinA%2B%2B%2BbDQZFAI1gdOw5WN5%2FAB3KHnmD3a6AiEAiFrVhsTGwJdibNV8YwnaxrVsy%2BHXcdG%2FxiE8IXhquMsqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ28HJf1I%2FsZ4AHF3yrcA1OGLO9BaxllnnPCNsqMHJhyiuIRw8QnFxxAF6DCfNlbqFcYEYdQ0M%2FdnyyXTjdSIAP5%2BS4qsd2pWIWZrqtNgIIy20LVV66GAlLA5Knzg%2FKdX3ON3ErFs3ywgUJ7XYTOCyE594WBpi8fXlIbdOjRYVop72Kk9%2FXx3Hbz3yc2sN1Z4D5NdKg%2BAXmUo63L8ML%2Bul%2FVdbmbYqil13RZIAn7kvBDFqOiGWE5dpKQbKt0MJ9nMHsi0%2FIv8On7W%2BViDMcgvUwJgLA9MYPQwMj3yN21WYmHeyV3FLL6jrLGYuCCNbPWL%2Fq%2BG0vPl7MUzUrGjF2csw6vVof8j6gqtSVF0d6a2eD9889TRLHML2TDoalWMHsNQdZLgjBXinh5i00XAjGxQcbhvIuAHFJc28XGWNwZTFvjOi8KEqILmiY85nX2pwDdT80gLi9nsph4gzPV8MKusbgD841faqYRSijjsB5wxx0jVLmhKPC5xtW7rUkvUtkz20hEZStC2nssrJrSGJT%2FZoAkKVki4itb6UftRP9yq8zu0gi0EfkZ%2FUz0LM8X68znnnXs6D1gK60PeS%2BcayXrSdPyrpjFFMFfwuIEj%2BrJbK8U%2BkjuJGE5aFsDM%2BY2cELgoJlRMtW4Sgqg8v5kMNai08QGOqUBaB1JT8ntkPo29BbRMB9M4OImCX24r45PZIfmNqiyO6soZzgjTacVeDHThQO064Q%2FCsRUKRJOyBq6%2Fl7dqdwUwlTCyxUscc93y8X%2FG6pkblP4sDPp1KUBcX2C%2Fn1Bh2EuJZIcXpgCAk9uUoB1anH7svRPHgywZLI9aoqR9d%2F1f97Q562MoyfliDoRvFcywzSGZCeVRRUI005dvgQWozU9WkmMZCbz&X-Amz-Signature=7203c5346dc46de7325307c790c37714a2662f402bb89224a2a96fbbf0f3edfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C74GN4J%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCID4lzm30jUinA%2B%2B%2BbDQZFAI1gdOw5WN5%2FAB3KHnmD3a6AiEAiFrVhsTGwJdibNV8YwnaxrVsy%2BHXcdG%2FxiE8IXhquMsqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ28HJf1I%2FsZ4AHF3yrcA1OGLO9BaxllnnPCNsqMHJhyiuIRw8QnFxxAF6DCfNlbqFcYEYdQ0M%2FdnyyXTjdSIAP5%2BS4qsd2pWIWZrqtNgIIy20LVV66GAlLA5Knzg%2FKdX3ON3ErFs3ywgUJ7XYTOCyE594WBpi8fXlIbdOjRYVop72Kk9%2FXx3Hbz3yc2sN1Z4D5NdKg%2BAXmUo63L8ML%2Bul%2FVdbmbYqil13RZIAn7kvBDFqOiGWE5dpKQbKt0MJ9nMHsi0%2FIv8On7W%2BViDMcgvUwJgLA9MYPQwMj3yN21WYmHeyV3FLL6jrLGYuCCNbPWL%2Fq%2BG0vPl7MUzUrGjF2csw6vVof8j6gqtSVF0d6a2eD9889TRLHML2TDoalWMHsNQdZLgjBXinh5i00XAjGxQcbhvIuAHFJc28XGWNwZTFvjOi8KEqILmiY85nX2pwDdT80gLi9nsph4gzPV8MKusbgD841faqYRSijjsB5wxx0jVLmhKPC5xtW7rUkvUtkz20hEZStC2nssrJrSGJT%2FZoAkKVki4itb6UftRP9yq8zu0gi0EfkZ%2FUz0LM8X68znnnXs6D1gK60PeS%2BcayXrSdPyrpjFFMFfwuIEj%2BrJbK8U%2BkjuJGE5aFsDM%2BY2cELgoJlRMtW4Sgqg8v5kMNai08QGOqUBaB1JT8ntkPo29BbRMB9M4OImCX24r45PZIfmNqiyO6soZzgjTacVeDHThQO064Q%2FCsRUKRJOyBq6%2Fl7dqdwUwlTCyxUscc93y8X%2FG6pkblP4sDPp1KUBcX2C%2Fn1Bh2EuJZIcXpgCAk9uUoB1anH7svRPHgywZLI9aoqR9d%2F1f97Q562MoyfliDoRvFcywzSGZCeVRRUI005dvgQWozU9WkmMZCbz&X-Amz-Signature=68b26041abd117fff4d230057aebd720ceaf1725d2e8852c828fd15af3d3dcea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C74GN4J%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCID4lzm30jUinA%2B%2B%2BbDQZFAI1gdOw5WN5%2FAB3KHnmD3a6AiEAiFrVhsTGwJdibNV8YwnaxrVsy%2BHXcdG%2FxiE8IXhquMsqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ28HJf1I%2FsZ4AHF3yrcA1OGLO9BaxllnnPCNsqMHJhyiuIRw8QnFxxAF6DCfNlbqFcYEYdQ0M%2FdnyyXTjdSIAP5%2BS4qsd2pWIWZrqtNgIIy20LVV66GAlLA5Knzg%2FKdX3ON3ErFs3ywgUJ7XYTOCyE594WBpi8fXlIbdOjRYVop72Kk9%2FXx3Hbz3yc2sN1Z4D5NdKg%2BAXmUo63L8ML%2Bul%2FVdbmbYqil13RZIAn7kvBDFqOiGWE5dpKQbKt0MJ9nMHsi0%2FIv8On7W%2BViDMcgvUwJgLA9MYPQwMj3yN21WYmHeyV3FLL6jrLGYuCCNbPWL%2Fq%2BG0vPl7MUzUrGjF2csw6vVof8j6gqtSVF0d6a2eD9889TRLHML2TDoalWMHsNQdZLgjBXinh5i00XAjGxQcbhvIuAHFJc28XGWNwZTFvjOi8KEqILmiY85nX2pwDdT80gLi9nsph4gzPV8MKusbgD841faqYRSijjsB5wxx0jVLmhKPC5xtW7rUkvUtkz20hEZStC2nssrJrSGJT%2FZoAkKVki4itb6UftRP9yq8zu0gi0EfkZ%2FUz0LM8X68znnnXs6D1gK60PeS%2BcayXrSdPyrpjFFMFfwuIEj%2BrJbK8U%2BkjuJGE5aFsDM%2BY2cELgoJlRMtW4Sgqg8v5kMNai08QGOqUBaB1JT8ntkPo29BbRMB9M4OImCX24r45PZIfmNqiyO6soZzgjTacVeDHThQO064Q%2FCsRUKRJOyBq6%2Fl7dqdwUwlTCyxUscc93y8X%2FG6pkblP4sDPp1KUBcX2C%2Fn1Bh2EuJZIcXpgCAk9uUoB1anH7svRPHgywZLI9aoqR9d%2F1f97Q562MoyfliDoRvFcywzSGZCeVRRUI005dvgQWozU9WkmMZCbz&X-Amz-Signature=8060cfd7a43d48b94b89c3cf75d18a6a4c29988ac2bac2e5db691be8f62d77aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
