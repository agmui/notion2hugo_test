---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-01-28T20:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-01-28T20:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 142
toc: false
icon: ""
---

The basic building blocks of ROS are nodes. (referred to as ROS Nodes)

Here is a more in-depth description if interested: [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/ready-for-ros/ros-overview#2-nodes)

Think of them as online accounts where any node can publish posts to some topic and any account can subscribe to any topic to receive updates on new posts.

![Topic-SinglePublisherandSingleSubscriber.gif](https://docs.ros.org/en/humble/_images/Topic-SinglePublisherandSingleSubscriber.gif)

![Topic-MultiplePublisherandMultipleSubscriber.gif](https://docs.ros.org/en/humble/_images/Topic-MultiplePublisherandMultipleSubscriber.gif)

Let's create a basic example of one publisher node and one subscriber node.

All the publisher will do is send the message `Hello World` over and over again to a topic and the subscriber node will listen to the topic and print out the result.

# Publisher

create a file called `publisher.py` 

inside import the `ROS` libraries:

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String
```

Then create a class called `MinimalPublisher` and have it extend the `Node` class we imported.

Then in the constructor, we first run the parent class’s constructor, `Node`, with:

The string we pass in is the name of the node

```python
        super().__init__("minimal_publisher")
```

Then we create a publisher object and a timer object:

```python
        self.publisher_ = self.create_publisher(String, "my_topic", 10)
        self.timer = self.create_timer(0.5, self.timer_callback)
```

The publisher object is what actually sends the message `"Hello World"` to the topic `my_topic` it takes in the message type, the topic to publish to, and its QoS profile (don't worry about this).

The timer object is to call the function `timer_callback` every 0.5 seconds.

Now let us create the function `timer_callback` and have it send `"Hello World"`

```python
    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = "Hello World"                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info("Publishing: " + msg.data)   # print msg
```

We first create a `msg` object and fill it with the string `"Hello World"`

Then we actually publish the `msg` with `self.publisher_.publish(msg)`

finally we printout `self.get_logger().info("Publishing: " + msg.data)`

To run the node go outside of the class and add the following

```python
def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()

# makes it so that it only runs the main function
# when the file is being called directly
if __name__ == '__main__': 
    main()
```

## Solution

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10)
        self.timer = self.create_timer(0.5, self.timer_callback)

    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = 'Hello World'                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info('Publishing: ' + msg.data)   # print msg


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

run with: `python3 publisher.py` in the terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG26H4TW%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjnx%2FcMK8FfG8uC3Ycd2GRTTGKiQupTldj5EzXbDHD%2BgIgPv%2FrD39MJN0%2F2DUW8Y55mZpwK2qHXsMJlTf8I%2B46TpMqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMI%2BgZ%2B4htozJR7SSrcA0mgPMlRNqVVfdqKmIyP0gdK8PqBAX28f%2F7whlsoL7IxJ%2BfWm435PX82qXMRKV9w5jU7t6Tnj69IDqmPlbQXokGcT3pztjpLECUGCIX25zRrSk%2B0vWACTPYIE%2BH8jypJxvNG6KRMmkPHGOgWoz%2BXTCe2M8gt5391pdBK%2B2pAKHKvmFTkfMz5sy2ugK5NlvZjKIIjZIwgihp04pm04wG4tIVnzt61%2BOxtWXqIaS7fUsHhYmK5rUT5j5XPmqKZM7DhTtnSdRMIbBXL3DlYcA1N4UOFTtHmUu%2BUVeQ2Et%2FSMaiSMX5PE%2B1tN7Wa5GukZSz%2FOy%2FbfSsQKdqfNd5xOe8KgpA0gAwlCUTfmMmnJyAsn8AUmB%2FS2q3D9weWrgWQC724%2BYIYJ4RU4D35hyMW4Y0hRJMijc%2FAbR75avW8YhnBsLkbkuTWRtIuy6llI108h0536CwNT6eHhpe%2FuTWn7pjFmpJH6IQbq%2FOx56eh3mTwAuhKllxY5ZZEUey1qutixaRNJdVgBChomnEfTXt4poA9pFvZ87GWYG%2Bc%2B9vDWz9Mkzg4aJ%2BH0w%2BNjEN1S3u4AjAMwU8M%2B9Z%2B0yqyaLwSu8PtP4ejyc%2FHxyUHoyZ8HGb1TEvCFVVe60nJ2xOJOZCuMNHRz8IGOqUBXOhXCy3RN5RKe4iGdJlaSn0DhFRhi2fkCv8sUbwMnWWhVe%2FMO2v5wglzqw0XFPEYt%2FcopGZdS4H4Giv4ePgPhJx4xSDp%2BuaxVl0Y5jrNs%2Ff%2FprO04WArj4zPaUl%2BIsdqY1OHGBlR4FJDzgvTDRBaW549Zf6fgsZ9JX5Cc%2Fks%2BfsLN7FmC5sTJQMNg4EdDpp7J8GKKrNAMXDzoa6QLCZMV0UrbSa6&X-Amz-Signature=90da89fda4ea3542c51e5e97413de1b073b880e212b6c98f80647e0f2b94c700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To stop the programs do `ctrl+c`

# Subscribers

create a file called `subscriber.py` and paste the following

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalSubscriber(Node):

    def __init__(self):
        super().__init__('minimal_subscriber')
        self.subscription = self.create_subscription(String, 'my_topic', self.listener_callback, 10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info('I heard: "%s"' % msg.data)


def main():
    rclpy.init()                                # initializes the rclpy library

    minimal_subscriber = MinimalSubscriber()

    rclpy.spin(minimal_subscriber)

    # Destroy the node explicitly
    minimal_subscriber.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Then while running `python3` [`publisher.py`](http://publisher.py/)open a new terminal and run: `python3 subscriber.py` 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG26H4TW%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjnx%2FcMK8FfG8uC3Ycd2GRTTGKiQupTldj5EzXbDHD%2BgIgPv%2FrD39MJN0%2F2DUW8Y55mZpwK2qHXsMJlTf8I%2B46TpMqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMI%2BgZ%2B4htozJR7SSrcA0mgPMlRNqVVfdqKmIyP0gdK8PqBAX28f%2F7whlsoL7IxJ%2BfWm435PX82qXMRKV9w5jU7t6Tnj69IDqmPlbQXokGcT3pztjpLECUGCIX25zRrSk%2B0vWACTPYIE%2BH8jypJxvNG6KRMmkPHGOgWoz%2BXTCe2M8gt5391pdBK%2B2pAKHKvmFTkfMz5sy2ugK5NlvZjKIIjZIwgihp04pm04wG4tIVnzt61%2BOxtWXqIaS7fUsHhYmK5rUT5j5XPmqKZM7DhTtnSdRMIbBXL3DlYcA1N4UOFTtHmUu%2BUVeQ2Et%2FSMaiSMX5PE%2B1tN7Wa5GukZSz%2FOy%2FbfSsQKdqfNd5xOe8KgpA0gAwlCUTfmMmnJyAsn8AUmB%2FS2q3D9weWrgWQC724%2BYIYJ4RU4D35hyMW4Y0hRJMijc%2FAbR75avW8YhnBsLkbkuTWRtIuy6llI108h0536CwNT6eHhpe%2FuTWn7pjFmpJH6IQbq%2FOx56eh3mTwAuhKllxY5ZZEUey1qutixaRNJdVgBChomnEfTXt4poA9pFvZ87GWYG%2Bc%2B9vDWz9Mkzg4aJ%2BH0w%2BNjEN1S3u4AjAMwU8M%2B9Z%2B0yqyaLwSu8PtP4ejyc%2FHxyUHoyZ8HGb1TEvCFVVe60nJ2xOJOZCuMNHRz8IGOqUBXOhXCy3RN5RKe4iGdJlaSn0DhFRhi2fkCv8sUbwMnWWhVe%2FMO2v5wglzqw0XFPEYt%2FcopGZdS4H4Giv4ePgPhJx4xSDp%2BuaxVl0Y5jrNs%2Ff%2FprO04WArj4zPaUl%2BIsdqY1OHGBlR4FJDzgvTDRBaW549Zf6fgsZ9JX5Cc%2Fks%2BfsLN7FmC5sTJQMNg4EdDpp7J8GKKrNAMXDzoa6QLCZMV0UrbSa6&X-Amz-Signature=d9db7360f6bd40bfafc15a7ac82810e987e5f393af1a97064f352aaf813e894d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG26H4TW%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjnx%2FcMK8FfG8uC3Ycd2GRTTGKiQupTldj5EzXbDHD%2BgIgPv%2FrD39MJN0%2F2DUW8Y55mZpwK2qHXsMJlTf8I%2B46TpMqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMI%2BgZ%2B4htozJR7SSrcA0mgPMlRNqVVfdqKmIyP0gdK8PqBAX28f%2F7whlsoL7IxJ%2BfWm435PX82qXMRKV9w5jU7t6Tnj69IDqmPlbQXokGcT3pztjpLECUGCIX25zRrSk%2B0vWACTPYIE%2BH8jypJxvNG6KRMmkPHGOgWoz%2BXTCe2M8gt5391pdBK%2B2pAKHKvmFTkfMz5sy2ugK5NlvZjKIIjZIwgihp04pm04wG4tIVnzt61%2BOxtWXqIaS7fUsHhYmK5rUT5j5XPmqKZM7DhTtnSdRMIbBXL3DlYcA1N4UOFTtHmUu%2BUVeQ2Et%2FSMaiSMX5PE%2B1tN7Wa5GukZSz%2FOy%2FbfSsQKdqfNd5xOe8KgpA0gAwlCUTfmMmnJyAsn8AUmB%2FS2q3D9weWrgWQC724%2BYIYJ4RU4D35hyMW4Y0hRJMijc%2FAbR75avW8YhnBsLkbkuTWRtIuy6llI108h0536CwNT6eHhpe%2FuTWn7pjFmpJH6IQbq%2FOx56eh3mTwAuhKllxY5ZZEUey1qutixaRNJdVgBChomnEfTXt4poA9pFvZ87GWYG%2Bc%2B9vDWz9Mkzg4aJ%2BH0w%2BNjEN1S3u4AjAMwU8M%2B9Z%2B0yqyaLwSu8PtP4ejyc%2FHxyUHoyZ8HGb1TEvCFVVe60nJ2xOJOZCuMNHRz8IGOqUBXOhXCy3RN5RKe4iGdJlaSn0DhFRhi2fkCv8sUbwMnWWhVe%2FMO2v5wglzqw0XFPEYt%2FcopGZdS4H4Giv4ePgPhJx4xSDp%2BuaxVl0Y5jrNs%2Ff%2FprO04WArj4zPaUl%2BIsdqY1OHGBlR4FJDzgvTDRBaW549Zf6fgsZ9JX5Cc%2Fks%2BfsLN7FmC5sTJQMNg4EdDpp7J8GKKrNAMXDzoa6QLCZMV0UrbSa6&X-Amz-Signature=3e8e21cd3f8a474f9346b91b392cba857e00196ab3fbc41a58d40657adc043f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG26H4TW%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjnx%2FcMK8FfG8uC3Ycd2GRTTGKiQupTldj5EzXbDHD%2BgIgPv%2FrD39MJN0%2F2DUW8Y55mZpwK2qHXsMJlTf8I%2B46TpMqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMI%2BgZ%2B4htozJR7SSrcA0mgPMlRNqVVfdqKmIyP0gdK8PqBAX28f%2F7whlsoL7IxJ%2BfWm435PX82qXMRKV9w5jU7t6Tnj69IDqmPlbQXokGcT3pztjpLECUGCIX25zRrSk%2B0vWACTPYIE%2BH8jypJxvNG6KRMmkPHGOgWoz%2BXTCe2M8gt5391pdBK%2B2pAKHKvmFTkfMz5sy2ugK5NlvZjKIIjZIwgihp04pm04wG4tIVnzt61%2BOxtWXqIaS7fUsHhYmK5rUT5j5XPmqKZM7DhTtnSdRMIbBXL3DlYcA1N4UOFTtHmUu%2BUVeQ2Et%2FSMaiSMX5PE%2B1tN7Wa5GukZSz%2FOy%2FbfSsQKdqfNd5xOe8KgpA0gAwlCUTfmMmnJyAsn8AUmB%2FS2q3D9weWrgWQC724%2BYIYJ4RU4D35hyMW4Y0hRJMijc%2FAbR75avW8YhnBsLkbkuTWRtIuy6llI108h0536CwNT6eHhpe%2FuTWn7pjFmpJH6IQbq%2FOx56eh3mTwAuhKllxY5ZZEUey1qutixaRNJdVgBChomnEfTXt4poA9pFvZ87GWYG%2Bc%2B9vDWz9Mkzg4aJ%2BH0w%2BNjEN1S3u4AjAMwU8M%2B9Z%2B0yqyaLwSu8PtP4ejyc%2FHxyUHoyZ8HGb1TEvCFVVe60nJ2xOJOZCuMNHRz8IGOqUBXOhXCy3RN5RKe4iGdJlaSn0DhFRhi2fkCv8sUbwMnWWhVe%2FMO2v5wglzqw0XFPEYt%2FcopGZdS4H4Giv4ePgPhJx4xSDp%2BuaxVl0Y5jrNs%2Ff%2FprO04WArj4zPaUl%2BIsdqY1OHGBlR4FJDzgvTDRBaW549Zf6fgsZ9JX5Cc%2Fks%2BfsLN7FmC5sTJQMNg4EdDpp7J8GKKrNAMXDzoa6QLCZMV0UrbSa6&X-Amz-Signature=265a978af5924cd90e6dcf49d20108ea56f44f4bae64e8d3d62635639ad9bf99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG26H4TW%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjnx%2FcMK8FfG8uC3Ycd2GRTTGKiQupTldj5EzXbDHD%2BgIgPv%2FrD39MJN0%2F2DUW8Y55mZpwK2qHXsMJlTf8I%2B46TpMqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMI%2BgZ%2B4htozJR7SSrcA0mgPMlRNqVVfdqKmIyP0gdK8PqBAX28f%2F7whlsoL7IxJ%2BfWm435PX82qXMRKV9w5jU7t6Tnj69IDqmPlbQXokGcT3pztjpLECUGCIX25zRrSk%2B0vWACTPYIE%2BH8jypJxvNG6KRMmkPHGOgWoz%2BXTCe2M8gt5391pdBK%2B2pAKHKvmFTkfMz5sy2ugK5NlvZjKIIjZIwgihp04pm04wG4tIVnzt61%2BOxtWXqIaS7fUsHhYmK5rUT5j5XPmqKZM7DhTtnSdRMIbBXL3DlYcA1N4UOFTtHmUu%2BUVeQ2Et%2FSMaiSMX5PE%2B1tN7Wa5GukZSz%2FOy%2FbfSsQKdqfNd5xOe8KgpA0gAwlCUTfmMmnJyAsn8AUmB%2FS2q3D9weWrgWQC724%2BYIYJ4RU4D35hyMW4Y0hRJMijc%2FAbR75avW8YhnBsLkbkuTWRtIuy6llI108h0536CwNT6eHhpe%2FuTWn7pjFmpJH6IQbq%2FOx56eh3mTwAuhKllxY5ZZEUey1qutixaRNJdVgBChomnEfTXt4poA9pFvZ87GWYG%2Bc%2B9vDWz9Mkzg4aJ%2BH0w%2BNjEN1S3u4AjAMwU8M%2B9Z%2B0yqyaLwSu8PtP4ejyc%2FHxyUHoyZ8HGb1TEvCFVVe60nJ2xOJOZCuMNHRz8IGOqUBXOhXCy3RN5RKe4iGdJlaSn0DhFRhi2fkCv8sUbwMnWWhVe%2FMO2v5wglzqw0XFPEYt%2FcopGZdS4H4Giv4ePgPhJx4xSDp%2BuaxVl0Y5jrNs%2Ff%2FprO04WArj4zPaUl%2BIsdqY1OHGBlR4FJDzgvTDRBaW549Zf6fgsZ9JX5Cc%2Fks%2BfsLN7FmC5sTJQMNg4EdDpp7J8GKKrNAMXDzoa6QLCZMV0UrbSa6&X-Amz-Signature=6e786a6ab65a372cf32ecc81c7b5521e30642489c1a3fb4905d886f98641c866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG26H4TW%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjnx%2FcMK8FfG8uC3Ycd2GRTTGKiQupTldj5EzXbDHD%2BgIgPv%2FrD39MJN0%2F2DUW8Y55mZpwK2qHXsMJlTf8I%2B46TpMqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMI%2BgZ%2B4htozJR7SSrcA0mgPMlRNqVVfdqKmIyP0gdK8PqBAX28f%2F7whlsoL7IxJ%2BfWm435PX82qXMRKV9w5jU7t6Tnj69IDqmPlbQXokGcT3pztjpLECUGCIX25zRrSk%2B0vWACTPYIE%2BH8jypJxvNG6KRMmkPHGOgWoz%2BXTCe2M8gt5391pdBK%2B2pAKHKvmFTkfMz5sy2ugK5NlvZjKIIjZIwgihp04pm04wG4tIVnzt61%2BOxtWXqIaS7fUsHhYmK5rUT5j5XPmqKZM7DhTtnSdRMIbBXL3DlYcA1N4UOFTtHmUu%2BUVeQ2Et%2FSMaiSMX5PE%2B1tN7Wa5GukZSz%2FOy%2FbfSsQKdqfNd5xOe8KgpA0gAwlCUTfmMmnJyAsn8AUmB%2FS2q3D9weWrgWQC724%2BYIYJ4RU4D35hyMW4Y0hRJMijc%2FAbR75avW8YhnBsLkbkuTWRtIuy6llI108h0536CwNT6eHhpe%2FuTWn7pjFmpJH6IQbq%2FOx56eh3mTwAuhKllxY5ZZEUey1qutixaRNJdVgBChomnEfTXt4poA9pFvZ87GWYG%2Bc%2B9vDWz9Mkzg4aJ%2BH0w%2BNjEN1S3u4AjAMwU8M%2B9Z%2B0yqyaLwSu8PtP4ejyc%2FHxyUHoyZ8HGb1TEvCFVVe60nJ2xOJOZCuMNHRz8IGOqUBXOhXCy3RN5RKe4iGdJlaSn0DhFRhi2fkCv8sUbwMnWWhVe%2FMO2v5wglzqw0XFPEYt%2FcopGZdS4H4Giv4ePgPhJx4xSDp%2BuaxVl0Y5jrNs%2Ff%2FprO04WArj4zPaUl%2BIsdqY1OHGBlR4FJDzgvTDRBaW549Zf6fgsZ9JX5Cc%2Fks%2BfsLN7FmC5sTJQMNg4EdDpp7J8GKKrNAMXDzoa6QLCZMV0UrbSa6&X-Amz-Signature=ec2d8b745ec134773214ce07d899b49d47b603048d6e287459274d94a6ab3886&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG26H4TW%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjnx%2FcMK8FfG8uC3Ycd2GRTTGKiQupTldj5EzXbDHD%2BgIgPv%2FrD39MJN0%2F2DUW8Y55mZpwK2qHXsMJlTf8I%2B46TpMqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMI%2BgZ%2B4htozJR7SSrcA0mgPMlRNqVVfdqKmIyP0gdK8PqBAX28f%2F7whlsoL7IxJ%2BfWm435PX82qXMRKV9w5jU7t6Tnj69IDqmPlbQXokGcT3pztjpLECUGCIX25zRrSk%2B0vWACTPYIE%2BH8jypJxvNG6KRMmkPHGOgWoz%2BXTCe2M8gt5391pdBK%2B2pAKHKvmFTkfMz5sy2ugK5NlvZjKIIjZIwgihp04pm04wG4tIVnzt61%2BOxtWXqIaS7fUsHhYmK5rUT5j5XPmqKZM7DhTtnSdRMIbBXL3DlYcA1N4UOFTtHmUu%2BUVeQ2Et%2FSMaiSMX5PE%2B1tN7Wa5GukZSz%2FOy%2FbfSsQKdqfNd5xOe8KgpA0gAwlCUTfmMmnJyAsn8AUmB%2FS2q3D9weWrgWQC724%2BYIYJ4RU4D35hyMW4Y0hRJMijc%2FAbR75avW8YhnBsLkbkuTWRtIuy6llI108h0536CwNT6eHhpe%2FuTWn7pjFmpJH6IQbq%2FOx56eh3mTwAuhKllxY5ZZEUey1qutixaRNJdVgBChomnEfTXt4poA9pFvZ87GWYG%2Bc%2B9vDWz9Mkzg4aJ%2BH0w%2BNjEN1S3u4AjAMwU8M%2B9Z%2B0yqyaLwSu8PtP4ejyc%2FHxyUHoyZ8HGb1TEvCFVVe60nJ2xOJOZCuMNHRz8IGOqUBXOhXCy3RN5RKe4iGdJlaSn0DhFRhi2fkCv8sUbwMnWWhVe%2FMO2v5wglzqw0XFPEYt%2FcopGZdS4H4Giv4ePgPhJx4xSDp%2BuaxVl0Y5jrNs%2Ff%2FprO04WArj4zPaUl%2BIsdqY1OHGBlR4FJDzgvTDRBaW549Zf6fgsZ9JX5Cc%2Fks%2BfsLN7FmC5sTJQMNg4EdDpp7J8GKKrNAMXDzoa6QLCZMV0UrbSa6&X-Amz-Signature=47eb81f0841f26d33fbe2abc7e1c2309aecb6bfdeaa81d5792aa01f5f26749cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG26H4TW%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjnx%2FcMK8FfG8uC3Ycd2GRTTGKiQupTldj5EzXbDHD%2BgIgPv%2FrD39MJN0%2F2DUW8Y55mZpwK2qHXsMJlTf8I%2B46TpMqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMI%2BgZ%2B4htozJR7SSrcA0mgPMlRNqVVfdqKmIyP0gdK8PqBAX28f%2F7whlsoL7IxJ%2BfWm435PX82qXMRKV9w5jU7t6Tnj69IDqmPlbQXokGcT3pztjpLECUGCIX25zRrSk%2B0vWACTPYIE%2BH8jypJxvNG6KRMmkPHGOgWoz%2BXTCe2M8gt5391pdBK%2B2pAKHKvmFTkfMz5sy2ugK5NlvZjKIIjZIwgihp04pm04wG4tIVnzt61%2BOxtWXqIaS7fUsHhYmK5rUT5j5XPmqKZM7DhTtnSdRMIbBXL3DlYcA1N4UOFTtHmUu%2BUVeQ2Et%2FSMaiSMX5PE%2B1tN7Wa5GukZSz%2FOy%2FbfSsQKdqfNd5xOe8KgpA0gAwlCUTfmMmnJyAsn8AUmB%2FS2q3D9weWrgWQC724%2BYIYJ4RU4D35hyMW4Y0hRJMijc%2FAbR75avW8YhnBsLkbkuTWRtIuy6llI108h0536CwNT6eHhpe%2FuTWn7pjFmpJH6IQbq%2FOx56eh3mTwAuhKllxY5ZZEUey1qutixaRNJdVgBChomnEfTXt4poA9pFvZ87GWYG%2Bc%2B9vDWz9Mkzg4aJ%2BH0w%2BNjEN1S3u4AjAMwU8M%2B9Z%2B0yqyaLwSu8PtP4ejyc%2FHxyUHoyZ8HGb1TEvCFVVe60nJ2xOJOZCuMNHRz8IGOqUBXOhXCy3RN5RKe4iGdJlaSn0DhFRhi2fkCv8sUbwMnWWhVe%2FMO2v5wglzqw0XFPEYt%2FcopGZdS4H4Giv4ePgPhJx4xSDp%2BuaxVl0Y5jrNs%2Ff%2FprO04WArj4zPaUl%2BIsdqY1OHGBlR4FJDzgvTDRBaW549Zf6fgsZ9JX5Cc%2Fks%2BfsLN7FmC5sTJQMNg4EdDpp7J8GKKrNAMXDzoa6QLCZMV0UrbSa6&X-Amz-Signature=5da4a7617a79d2304afe4b77eb79678ee0a765f492a8628f255f60baa1c7ede2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
