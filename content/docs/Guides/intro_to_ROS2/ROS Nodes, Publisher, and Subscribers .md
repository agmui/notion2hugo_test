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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAW4XRC4%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDSEJ4Ll4LPV2JFVx84NBeBxaY1WZr%2BhPgboPojb2C7FQIhAJSicUG5N0PW%2F8T%2BCf%2BNsBSpIWeaQv1pdIaT68Ng%2BIJ%2BKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0vBMDB6TJPbiukh8q3APMn0yh6ROqNdHdP32OFvO2Y%2BO6zV1KHeJqC%2Byp9jmZ6S6QDWu4Xu%2FPPezb8YLswLgOpI7X3ie166I7ELmQG0FVyheizjEyq%2FHUDDk4YvPK289OjH3uwkUYtahoUk2vgzT%2BFKufZf26VPx8XKsSEB41vt9bL304kR6to2ZiOD2pYI2vTr%2BWURL9niupgGQ7W3lVAKFlgiWd0SVObpN2E2MHSLS0ocqI697EEIqHgf5BEKsNHWxKKjrh2YR7hyaajX71ZCXZGxTc2c%2FVN1g6JglM345QTl5%2BvuIqHyTv6Hauez77%2Bz0%2FtZp%2BOFhrvXaSKxL%2FaWrqrVo4ORXKuEQsmf%2FrbPg4uHgVYcDJNrdDgCJ6EQR6aiDRbY%2FVOCRtHZs3crtV7yJkMtf5NELhaes2OTr9VK%2F6m5cVlnNe0AnYfq9SRxpqRQNrumhyJHFn7DlaaRaAqKE8SsdJ6TSucTRYVRvya8o3eUPMI88oasaMM0TZcCpd80fegvO2JlxilG0izAIWEQd%2BA1%2BquszDL8MNfI%2Finmz%2B7Ck3rhjr3tmw61USZrrb9obqNhLG4l3OfUxegfIta6sluUYx7C0hyslLdqDqCndQbv42B2hFIjKrmogkghfPJrgacR3fQ0eyQTC9jY7BBjqkAYSLAZdhgv2zEmLePcqktE69g8rugbflT0d7V89RbHL3%2BalicAjNIog0Hn6VUInQdlQmpRfOZWQxaF8rdFeflRf%2B%2BdLAfRFYHdr5aAmjUF7%2Fv7RjeNJzc0NTXn23f8HroWIlCrxyY3c86AXyyTn2pDOqBVhDS6ILsc5595xuiG9poH0lK9eTwefMMNhOJqLpMf42hMs8n%2BVp21lRIoUJgZJgCp4A&X-Amz-Signature=57401731a5b96ff28ca6777c71476e09475e5b1459d45ee394322eb03dd26312&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAW4XRC4%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDSEJ4Ll4LPV2JFVx84NBeBxaY1WZr%2BhPgboPojb2C7FQIhAJSicUG5N0PW%2F8T%2BCf%2BNsBSpIWeaQv1pdIaT68Ng%2BIJ%2BKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0vBMDB6TJPbiukh8q3APMn0yh6ROqNdHdP32OFvO2Y%2BO6zV1KHeJqC%2Byp9jmZ6S6QDWu4Xu%2FPPezb8YLswLgOpI7X3ie166I7ELmQG0FVyheizjEyq%2FHUDDk4YvPK289OjH3uwkUYtahoUk2vgzT%2BFKufZf26VPx8XKsSEB41vt9bL304kR6to2ZiOD2pYI2vTr%2BWURL9niupgGQ7W3lVAKFlgiWd0SVObpN2E2MHSLS0ocqI697EEIqHgf5BEKsNHWxKKjrh2YR7hyaajX71ZCXZGxTc2c%2FVN1g6JglM345QTl5%2BvuIqHyTv6Hauez77%2Bz0%2FtZp%2BOFhrvXaSKxL%2FaWrqrVo4ORXKuEQsmf%2FrbPg4uHgVYcDJNrdDgCJ6EQR6aiDRbY%2FVOCRtHZs3crtV7yJkMtf5NELhaes2OTr9VK%2F6m5cVlnNe0AnYfq9SRxpqRQNrumhyJHFn7DlaaRaAqKE8SsdJ6TSucTRYVRvya8o3eUPMI88oasaMM0TZcCpd80fegvO2JlxilG0izAIWEQd%2BA1%2BquszDL8MNfI%2Finmz%2B7Ck3rhjr3tmw61USZrrb9obqNhLG4l3OfUxegfIta6sluUYx7C0hyslLdqDqCndQbv42B2hFIjKrmogkghfPJrgacR3fQ0eyQTC9jY7BBjqkAYSLAZdhgv2zEmLePcqktE69g8rugbflT0d7V89RbHL3%2BalicAjNIog0Hn6VUInQdlQmpRfOZWQxaF8rdFeflRf%2B%2BdLAfRFYHdr5aAmjUF7%2Fv7RjeNJzc0NTXn23f8HroWIlCrxyY3c86AXyyTn2pDOqBVhDS6ILsc5595xuiG9poH0lK9eTwefMMNhOJqLpMf42hMs8n%2BVp21lRIoUJgZJgCp4A&X-Amz-Signature=075d3e8f717a82b48d2da187ecfef048d42841455de67eb9725e17c339b8ded7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAW4XRC4%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDSEJ4Ll4LPV2JFVx84NBeBxaY1WZr%2BhPgboPojb2C7FQIhAJSicUG5N0PW%2F8T%2BCf%2BNsBSpIWeaQv1pdIaT68Ng%2BIJ%2BKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0vBMDB6TJPbiukh8q3APMn0yh6ROqNdHdP32OFvO2Y%2BO6zV1KHeJqC%2Byp9jmZ6S6QDWu4Xu%2FPPezb8YLswLgOpI7X3ie166I7ELmQG0FVyheizjEyq%2FHUDDk4YvPK289OjH3uwkUYtahoUk2vgzT%2BFKufZf26VPx8XKsSEB41vt9bL304kR6to2ZiOD2pYI2vTr%2BWURL9niupgGQ7W3lVAKFlgiWd0SVObpN2E2MHSLS0ocqI697EEIqHgf5BEKsNHWxKKjrh2YR7hyaajX71ZCXZGxTc2c%2FVN1g6JglM345QTl5%2BvuIqHyTv6Hauez77%2Bz0%2FtZp%2BOFhrvXaSKxL%2FaWrqrVo4ORXKuEQsmf%2FrbPg4uHgVYcDJNrdDgCJ6EQR6aiDRbY%2FVOCRtHZs3crtV7yJkMtf5NELhaes2OTr9VK%2F6m5cVlnNe0AnYfq9SRxpqRQNrumhyJHFn7DlaaRaAqKE8SsdJ6TSucTRYVRvya8o3eUPMI88oasaMM0TZcCpd80fegvO2JlxilG0izAIWEQd%2BA1%2BquszDL8MNfI%2Finmz%2B7Ck3rhjr3tmw61USZrrb9obqNhLG4l3OfUxegfIta6sluUYx7C0hyslLdqDqCndQbv42B2hFIjKrmogkghfPJrgacR3fQ0eyQTC9jY7BBjqkAYSLAZdhgv2zEmLePcqktE69g8rugbflT0d7V89RbHL3%2BalicAjNIog0Hn6VUInQdlQmpRfOZWQxaF8rdFeflRf%2B%2BdLAfRFYHdr5aAmjUF7%2Fv7RjeNJzc0NTXn23f8HroWIlCrxyY3c86AXyyTn2pDOqBVhDS6ILsc5595xuiG9poH0lK9eTwefMMNhOJqLpMf42hMs8n%2BVp21lRIoUJgZJgCp4A&X-Amz-Signature=5b1ece29fe24f3eb98e1d87e044e2bed95ed245f2becc000619e80ce020a16c0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAW4XRC4%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDSEJ4Ll4LPV2JFVx84NBeBxaY1WZr%2BhPgboPojb2C7FQIhAJSicUG5N0PW%2F8T%2BCf%2BNsBSpIWeaQv1pdIaT68Ng%2BIJ%2BKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0vBMDB6TJPbiukh8q3APMn0yh6ROqNdHdP32OFvO2Y%2BO6zV1KHeJqC%2Byp9jmZ6S6QDWu4Xu%2FPPezb8YLswLgOpI7X3ie166I7ELmQG0FVyheizjEyq%2FHUDDk4YvPK289OjH3uwkUYtahoUk2vgzT%2BFKufZf26VPx8XKsSEB41vt9bL304kR6to2ZiOD2pYI2vTr%2BWURL9niupgGQ7W3lVAKFlgiWd0SVObpN2E2MHSLS0ocqI697EEIqHgf5BEKsNHWxKKjrh2YR7hyaajX71ZCXZGxTc2c%2FVN1g6JglM345QTl5%2BvuIqHyTv6Hauez77%2Bz0%2FtZp%2BOFhrvXaSKxL%2FaWrqrVo4ORXKuEQsmf%2FrbPg4uHgVYcDJNrdDgCJ6EQR6aiDRbY%2FVOCRtHZs3crtV7yJkMtf5NELhaes2OTr9VK%2F6m5cVlnNe0AnYfq9SRxpqRQNrumhyJHFn7DlaaRaAqKE8SsdJ6TSucTRYVRvya8o3eUPMI88oasaMM0TZcCpd80fegvO2JlxilG0izAIWEQd%2BA1%2BquszDL8MNfI%2Finmz%2B7Ck3rhjr3tmw61USZrrb9obqNhLG4l3OfUxegfIta6sluUYx7C0hyslLdqDqCndQbv42B2hFIjKrmogkghfPJrgacR3fQ0eyQTC9jY7BBjqkAYSLAZdhgv2zEmLePcqktE69g8rugbflT0d7V89RbHL3%2BalicAjNIog0Hn6VUInQdlQmpRfOZWQxaF8rdFeflRf%2B%2BdLAfRFYHdr5aAmjUF7%2Fv7RjeNJzc0NTXn23f8HroWIlCrxyY3c86AXyyTn2pDOqBVhDS6ILsc5595xuiG9poH0lK9eTwefMMNhOJqLpMf42hMs8n%2BVp21lRIoUJgZJgCp4A&X-Amz-Signature=56c61c22508a941a9d5bdaf56573975abeb679d9260e3dc3b6c263142c655ed8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAW4XRC4%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDSEJ4Ll4LPV2JFVx84NBeBxaY1WZr%2BhPgboPojb2C7FQIhAJSicUG5N0PW%2F8T%2BCf%2BNsBSpIWeaQv1pdIaT68Ng%2BIJ%2BKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0vBMDB6TJPbiukh8q3APMn0yh6ROqNdHdP32OFvO2Y%2BO6zV1KHeJqC%2Byp9jmZ6S6QDWu4Xu%2FPPezb8YLswLgOpI7X3ie166I7ELmQG0FVyheizjEyq%2FHUDDk4YvPK289OjH3uwkUYtahoUk2vgzT%2BFKufZf26VPx8XKsSEB41vt9bL304kR6to2ZiOD2pYI2vTr%2BWURL9niupgGQ7W3lVAKFlgiWd0SVObpN2E2MHSLS0ocqI697EEIqHgf5BEKsNHWxKKjrh2YR7hyaajX71ZCXZGxTc2c%2FVN1g6JglM345QTl5%2BvuIqHyTv6Hauez77%2Bz0%2FtZp%2BOFhrvXaSKxL%2FaWrqrVo4ORXKuEQsmf%2FrbPg4uHgVYcDJNrdDgCJ6EQR6aiDRbY%2FVOCRtHZs3crtV7yJkMtf5NELhaes2OTr9VK%2F6m5cVlnNe0AnYfq9SRxpqRQNrumhyJHFn7DlaaRaAqKE8SsdJ6TSucTRYVRvya8o3eUPMI88oasaMM0TZcCpd80fegvO2JlxilG0izAIWEQd%2BA1%2BquszDL8MNfI%2Finmz%2B7Ck3rhjr3tmw61USZrrb9obqNhLG4l3OfUxegfIta6sluUYx7C0hyslLdqDqCndQbv42B2hFIjKrmogkghfPJrgacR3fQ0eyQTC9jY7BBjqkAYSLAZdhgv2zEmLePcqktE69g8rugbflT0d7V89RbHL3%2BalicAjNIog0Hn6VUInQdlQmpRfOZWQxaF8rdFeflRf%2B%2BdLAfRFYHdr5aAmjUF7%2Fv7RjeNJzc0NTXn23f8HroWIlCrxyY3c86AXyyTn2pDOqBVhDS6ILsc5595xuiG9poH0lK9eTwefMMNhOJqLpMf42hMs8n%2BVp21lRIoUJgZJgCp4A&X-Amz-Signature=824318520bbdb309dcee9f31f41a1220bfc20ea942ffb0d29c45311167889b21&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAW4XRC4%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDSEJ4Ll4LPV2JFVx84NBeBxaY1WZr%2BhPgboPojb2C7FQIhAJSicUG5N0PW%2F8T%2BCf%2BNsBSpIWeaQv1pdIaT68Ng%2BIJ%2BKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0vBMDB6TJPbiukh8q3APMn0yh6ROqNdHdP32OFvO2Y%2BO6zV1KHeJqC%2Byp9jmZ6S6QDWu4Xu%2FPPezb8YLswLgOpI7X3ie166I7ELmQG0FVyheizjEyq%2FHUDDk4YvPK289OjH3uwkUYtahoUk2vgzT%2BFKufZf26VPx8XKsSEB41vt9bL304kR6to2ZiOD2pYI2vTr%2BWURL9niupgGQ7W3lVAKFlgiWd0SVObpN2E2MHSLS0ocqI697EEIqHgf5BEKsNHWxKKjrh2YR7hyaajX71ZCXZGxTc2c%2FVN1g6JglM345QTl5%2BvuIqHyTv6Hauez77%2Bz0%2FtZp%2BOFhrvXaSKxL%2FaWrqrVo4ORXKuEQsmf%2FrbPg4uHgVYcDJNrdDgCJ6EQR6aiDRbY%2FVOCRtHZs3crtV7yJkMtf5NELhaes2OTr9VK%2F6m5cVlnNe0AnYfq9SRxpqRQNrumhyJHFn7DlaaRaAqKE8SsdJ6TSucTRYVRvya8o3eUPMI88oasaMM0TZcCpd80fegvO2JlxilG0izAIWEQd%2BA1%2BquszDL8MNfI%2Finmz%2B7Ck3rhjr3tmw61USZrrb9obqNhLG4l3OfUxegfIta6sluUYx7C0hyslLdqDqCndQbv42B2hFIjKrmogkghfPJrgacR3fQ0eyQTC9jY7BBjqkAYSLAZdhgv2zEmLePcqktE69g8rugbflT0d7V89RbHL3%2BalicAjNIog0Hn6VUInQdlQmpRfOZWQxaF8rdFeflRf%2B%2BdLAfRFYHdr5aAmjUF7%2Fv7RjeNJzc0NTXn23f8HroWIlCrxyY3c86AXyyTn2pDOqBVhDS6ILsc5595xuiG9poH0lK9eTwefMMNhOJqLpMf42hMs8n%2BVp21lRIoUJgZJgCp4A&X-Amz-Signature=f363db9b0664ceee558170dc6627aebe657fa2da38e46e34f4ac589baa2cca15&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAW4XRC4%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDSEJ4Ll4LPV2JFVx84NBeBxaY1WZr%2BhPgboPojb2C7FQIhAJSicUG5N0PW%2F8T%2BCf%2BNsBSpIWeaQv1pdIaT68Ng%2BIJ%2BKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0vBMDB6TJPbiukh8q3APMn0yh6ROqNdHdP32OFvO2Y%2BO6zV1KHeJqC%2Byp9jmZ6S6QDWu4Xu%2FPPezb8YLswLgOpI7X3ie166I7ELmQG0FVyheizjEyq%2FHUDDk4YvPK289OjH3uwkUYtahoUk2vgzT%2BFKufZf26VPx8XKsSEB41vt9bL304kR6to2ZiOD2pYI2vTr%2BWURL9niupgGQ7W3lVAKFlgiWd0SVObpN2E2MHSLS0ocqI697EEIqHgf5BEKsNHWxKKjrh2YR7hyaajX71ZCXZGxTc2c%2FVN1g6JglM345QTl5%2BvuIqHyTv6Hauez77%2Bz0%2FtZp%2BOFhrvXaSKxL%2FaWrqrVo4ORXKuEQsmf%2FrbPg4uHgVYcDJNrdDgCJ6EQR6aiDRbY%2FVOCRtHZs3crtV7yJkMtf5NELhaes2OTr9VK%2F6m5cVlnNe0AnYfq9SRxpqRQNrumhyJHFn7DlaaRaAqKE8SsdJ6TSucTRYVRvya8o3eUPMI88oasaMM0TZcCpd80fegvO2JlxilG0izAIWEQd%2BA1%2BquszDL8MNfI%2Finmz%2B7Ck3rhjr3tmw61USZrrb9obqNhLG4l3OfUxegfIta6sluUYx7C0hyslLdqDqCndQbv42B2hFIjKrmogkghfPJrgacR3fQ0eyQTC9jY7BBjqkAYSLAZdhgv2zEmLePcqktE69g8rugbflT0d7V89RbHL3%2BalicAjNIog0Hn6VUInQdlQmpRfOZWQxaF8rdFeflRf%2B%2BdLAfRFYHdr5aAmjUF7%2Fv7RjeNJzc0NTXn23f8HroWIlCrxyY3c86AXyyTn2pDOqBVhDS6ILsc5595xuiG9poH0lK9eTwefMMNhOJqLpMf42hMs8n%2BVp21lRIoUJgZJgCp4A&X-Amz-Signature=a9779b3ea039e3c7a256cc76740b0ad357dce797616ca4061cf83f3cf992ab4b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAW4XRC4%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDSEJ4Ll4LPV2JFVx84NBeBxaY1WZr%2BhPgboPojb2C7FQIhAJSicUG5N0PW%2F8T%2BCf%2BNsBSpIWeaQv1pdIaT68Ng%2BIJ%2BKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0vBMDB6TJPbiukh8q3APMn0yh6ROqNdHdP32OFvO2Y%2BO6zV1KHeJqC%2Byp9jmZ6S6QDWu4Xu%2FPPezb8YLswLgOpI7X3ie166I7ELmQG0FVyheizjEyq%2FHUDDk4YvPK289OjH3uwkUYtahoUk2vgzT%2BFKufZf26VPx8XKsSEB41vt9bL304kR6to2ZiOD2pYI2vTr%2BWURL9niupgGQ7W3lVAKFlgiWd0SVObpN2E2MHSLS0ocqI697EEIqHgf5BEKsNHWxKKjrh2YR7hyaajX71ZCXZGxTc2c%2FVN1g6JglM345QTl5%2BvuIqHyTv6Hauez77%2Bz0%2FtZp%2BOFhrvXaSKxL%2FaWrqrVo4ORXKuEQsmf%2FrbPg4uHgVYcDJNrdDgCJ6EQR6aiDRbY%2FVOCRtHZs3crtV7yJkMtf5NELhaes2OTr9VK%2F6m5cVlnNe0AnYfq9SRxpqRQNrumhyJHFn7DlaaRaAqKE8SsdJ6TSucTRYVRvya8o3eUPMI88oasaMM0TZcCpd80fegvO2JlxilG0izAIWEQd%2BA1%2BquszDL8MNfI%2Finmz%2B7Ck3rhjr3tmw61USZrrb9obqNhLG4l3OfUxegfIta6sluUYx7C0hyslLdqDqCndQbv42B2hFIjKrmogkghfPJrgacR3fQ0eyQTC9jY7BBjqkAYSLAZdhgv2zEmLePcqktE69g8rugbflT0d7V89RbHL3%2BalicAjNIog0Hn6VUInQdlQmpRfOZWQxaF8rdFeflRf%2B%2BdLAfRFYHdr5aAmjUF7%2Fv7RjeNJzc0NTXn23f8HroWIlCrxyY3c86AXyyTn2pDOqBVhDS6ILsc5595xuiG9poH0lK9eTwefMMNhOJqLpMf42hMs8n%2BVp21lRIoUJgZJgCp4A&X-Amz-Signature=4cc2323c9814558040f38a2b90efae7eb6757fb0eff67de22b8184ff2182fe77&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
