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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7T46TOG%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmdt4eHruumjfQGRXMIdMv%2FSyf%2FAzzV%2FOCD1y9LG1bsAiEAsKShQaP5V6q5R3pakWy1%2B8aacAwhjuIoBGBTl%2B07vb0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJirjl5pieBwBSZaircA5maVPscing9PbA3yqMVPXC7MZl5%2B1uRwv44yT2gDAx3U63FHkRHAkjICTdvyKdtYtw2xhhyEm5LfKYrldmlJ6sslh17eRVrzHW2qLmIUA1WnlL9kjhHJBWtVZ0ZL6I2%2F3%2Byh6gencEwylA9SwMNSg2X2sKgCUd9Kma3yt1eMM%2FGs%2BIKPqDE44I9d5S1WVhDXUf8YFvpNKrejiAvX6lHGsOAZo6hoM4GadbjdeEjmZArSRahdg29uw94fj50YVM22lDENP9C9X%2BwHdT3OP6HCVDYXAwVD9QnPDDXKU6Cs1Uv5mqrASakf5uX69P70LS4MDLNs%2BMAV%2FGybClEGVV%2BvcgOlvmvtnNDWaMJbdHkb3COoS9oGDo6ZywOUs3BSXJx9zrd4Zk4WQyWETBb7TeDQ%2BiDmWdDK6xkvXmKU1G7ad5SPIDBYYcEkFn1Id7zCF%2BQg2p15LqR5J2oUGqmEiYVeVGVyJfOzT8tzLHmfIuaNjaHTLT7EjyaV%2FHNswi1FpzAVzJwfEjPvgdTRSdXCHVevdUIrGAFxAh5%2BuXfbXAr7jYcYknAolyhazb3NUtewjvNFFcO3OKAgBTQSlaShrm%2ByIREVeXwviN%2B%2FO7ElTzGpxtF4ytBl%2F%2FP%2Fo2VWsxVMKbF7MMGOqUBDbz1YoYBkJM0dgfMf9GT3XHLJRnhmDW9tez1jFVqe%2Ff%2BqiMNpw2JX3iqGHwqMaPYxK8HkmgB2%2Be9mFLHk3o12w8N8SaanHGyPTJTp9A%2FZOmkd7%2BOhhpYedoad3AlbxyW9s61NVcM7b2vDSeG5m8Lyn7TwAbeGlMgme1NlEY0tumrfO%2F6E008e7fY%2FRrZW6bvBU7J%2BiAvIQ5OOECURUbuqBuj6hIj&X-Amz-Signature=6250c21fcdb198316fc33f734ac5dc0ab526d918bedc323c7185ad58e516cced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7T46TOG%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmdt4eHruumjfQGRXMIdMv%2FSyf%2FAzzV%2FOCD1y9LG1bsAiEAsKShQaP5V6q5R3pakWy1%2B8aacAwhjuIoBGBTl%2B07vb0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJirjl5pieBwBSZaircA5maVPscing9PbA3yqMVPXC7MZl5%2B1uRwv44yT2gDAx3U63FHkRHAkjICTdvyKdtYtw2xhhyEm5LfKYrldmlJ6sslh17eRVrzHW2qLmIUA1WnlL9kjhHJBWtVZ0ZL6I2%2F3%2Byh6gencEwylA9SwMNSg2X2sKgCUd9Kma3yt1eMM%2FGs%2BIKPqDE44I9d5S1WVhDXUf8YFvpNKrejiAvX6lHGsOAZo6hoM4GadbjdeEjmZArSRahdg29uw94fj50YVM22lDENP9C9X%2BwHdT3OP6HCVDYXAwVD9QnPDDXKU6Cs1Uv5mqrASakf5uX69P70LS4MDLNs%2BMAV%2FGybClEGVV%2BvcgOlvmvtnNDWaMJbdHkb3COoS9oGDo6ZywOUs3BSXJx9zrd4Zk4WQyWETBb7TeDQ%2BiDmWdDK6xkvXmKU1G7ad5SPIDBYYcEkFn1Id7zCF%2BQg2p15LqR5J2oUGqmEiYVeVGVyJfOzT8tzLHmfIuaNjaHTLT7EjyaV%2FHNswi1FpzAVzJwfEjPvgdTRSdXCHVevdUIrGAFxAh5%2BuXfbXAr7jYcYknAolyhazb3NUtewjvNFFcO3OKAgBTQSlaShrm%2ByIREVeXwviN%2B%2FO7ElTzGpxtF4ytBl%2F%2FP%2Fo2VWsxVMKbF7MMGOqUBDbz1YoYBkJM0dgfMf9GT3XHLJRnhmDW9tez1jFVqe%2Ff%2BqiMNpw2JX3iqGHwqMaPYxK8HkmgB2%2Be9mFLHk3o12w8N8SaanHGyPTJTp9A%2FZOmkd7%2BOhhpYedoad3AlbxyW9s61NVcM7b2vDSeG5m8Lyn7TwAbeGlMgme1NlEY0tumrfO%2F6E008e7fY%2FRrZW6bvBU7J%2BiAvIQ5OOECURUbuqBuj6hIj&X-Amz-Signature=85fde35c4bd975033b896dab03db7cb1ea769207a63d65b66c71ef82b73e4653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7T46TOG%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmdt4eHruumjfQGRXMIdMv%2FSyf%2FAzzV%2FOCD1y9LG1bsAiEAsKShQaP5V6q5R3pakWy1%2B8aacAwhjuIoBGBTl%2B07vb0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJirjl5pieBwBSZaircA5maVPscing9PbA3yqMVPXC7MZl5%2B1uRwv44yT2gDAx3U63FHkRHAkjICTdvyKdtYtw2xhhyEm5LfKYrldmlJ6sslh17eRVrzHW2qLmIUA1WnlL9kjhHJBWtVZ0ZL6I2%2F3%2Byh6gencEwylA9SwMNSg2X2sKgCUd9Kma3yt1eMM%2FGs%2BIKPqDE44I9d5S1WVhDXUf8YFvpNKrejiAvX6lHGsOAZo6hoM4GadbjdeEjmZArSRahdg29uw94fj50YVM22lDENP9C9X%2BwHdT3OP6HCVDYXAwVD9QnPDDXKU6Cs1Uv5mqrASakf5uX69P70LS4MDLNs%2BMAV%2FGybClEGVV%2BvcgOlvmvtnNDWaMJbdHkb3COoS9oGDo6ZywOUs3BSXJx9zrd4Zk4WQyWETBb7TeDQ%2BiDmWdDK6xkvXmKU1G7ad5SPIDBYYcEkFn1Id7zCF%2BQg2p15LqR5J2oUGqmEiYVeVGVyJfOzT8tzLHmfIuaNjaHTLT7EjyaV%2FHNswi1FpzAVzJwfEjPvgdTRSdXCHVevdUIrGAFxAh5%2BuXfbXAr7jYcYknAolyhazb3NUtewjvNFFcO3OKAgBTQSlaShrm%2ByIREVeXwviN%2B%2FO7ElTzGpxtF4ytBl%2F%2FP%2Fo2VWsxVMKbF7MMGOqUBDbz1YoYBkJM0dgfMf9GT3XHLJRnhmDW9tez1jFVqe%2Ff%2BqiMNpw2JX3iqGHwqMaPYxK8HkmgB2%2Be9mFLHk3o12w8N8SaanHGyPTJTp9A%2FZOmkd7%2BOhhpYedoad3AlbxyW9s61NVcM7b2vDSeG5m8Lyn7TwAbeGlMgme1NlEY0tumrfO%2F6E008e7fY%2FRrZW6bvBU7J%2BiAvIQ5OOECURUbuqBuj6hIj&X-Amz-Signature=2742b17556738c3f7c240c9da0490fe74e50ea4f8a7ed96530b52b8e0ed9496d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7T46TOG%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmdt4eHruumjfQGRXMIdMv%2FSyf%2FAzzV%2FOCD1y9LG1bsAiEAsKShQaP5V6q5R3pakWy1%2B8aacAwhjuIoBGBTl%2B07vb0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJirjl5pieBwBSZaircA5maVPscing9PbA3yqMVPXC7MZl5%2B1uRwv44yT2gDAx3U63FHkRHAkjICTdvyKdtYtw2xhhyEm5LfKYrldmlJ6sslh17eRVrzHW2qLmIUA1WnlL9kjhHJBWtVZ0ZL6I2%2F3%2Byh6gencEwylA9SwMNSg2X2sKgCUd9Kma3yt1eMM%2FGs%2BIKPqDE44I9d5S1WVhDXUf8YFvpNKrejiAvX6lHGsOAZo6hoM4GadbjdeEjmZArSRahdg29uw94fj50YVM22lDENP9C9X%2BwHdT3OP6HCVDYXAwVD9QnPDDXKU6Cs1Uv5mqrASakf5uX69P70LS4MDLNs%2BMAV%2FGybClEGVV%2BvcgOlvmvtnNDWaMJbdHkb3COoS9oGDo6ZywOUs3BSXJx9zrd4Zk4WQyWETBb7TeDQ%2BiDmWdDK6xkvXmKU1G7ad5SPIDBYYcEkFn1Id7zCF%2BQg2p15LqR5J2oUGqmEiYVeVGVyJfOzT8tzLHmfIuaNjaHTLT7EjyaV%2FHNswi1FpzAVzJwfEjPvgdTRSdXCHVevdUIrGAFxAh5%2BuXfbXAr7jYcYknAolyhazb3NUtewjvNFFcO3OKAgBTQSlaShrm%2ByIREVeXwviN%2B%2FO7ElTzGpxtF4ytBl%2F%2FP%2Fo2VWsxVMKbF7MMGOqUBDbz1YoYBkJM0dgfMf9GT3XHLJRnhmDW9tez1jFVqe%2Ff%2BqiMNpw2JX3iqGHwqMaPYxK8HkmgB2%2Be9mFLHk3o12w8N8SaanHGyPTJTp9A%2FZOmkd7%2BOhhpYedoad3AlbxyW9s61NVcM7b2vDSeG5m8Lyn7TwAbeGlMgme1NlEY0tumrfO%2F6E008e7fY%2FRrZW6bvBU7J%2BiAvIQ5OOECURUbuqBuj6hIj&X-Amz-Signature=8da51d5154c39291a220b544f3a4a84d6a3c2b7c1e91b24e9e827f7426619bd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7T46TOG%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmdt4eHruumjfQGRXMIdMv%2FSyf%2FAzzV%2FOCD1y9LG1bsAiEAsKShQaP5V6q5R3pakWy1%2B8aacAwhjuIoBGBTl%2B07vb0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJirjl5pieBwBSZaircA5maVPscing9PbA3yqMVPXC7MZl5%2B1uRwv44yT2gDAx3U63FHkRHAkjICTdvyKdtYtw2xhhyEm5LfKYrldmlJ6sslh17eRVrzHW2qLmIUA1WnlL9kjhHJBWtVZ0ZL6I2%2F3%2Byh6gencEwylA9SwMNSg2X2sKgCUd9Kma3yt1eMM%2FGs%2BIKPqDE44I9d5S1WVhDXUf8YFvpNKrejiAvX6lHGsOAZo6hoM4GadbjdeEjmZArSRahdg29uw94fj50YVM22lDENP9C9X%2BwHdT3OP6HCVDYXAwVD9QnPDDXKU6Cs1Uv5mqrASakf5uX69P70LS4MDLNs%2BMAV%2FGybClEGVV%2BvcgOlvmvtnNDWaMJbdHkb3COoS9oGDo6ZywOUs3BSXJx9zrd4Zk4WQyWETBb7TeDQ%2BiDmWdDK6xkvXmKU1G7ad5SPIDBYYcEkFn1Id7zCF%2BQg2p15LqR5J2oUGqmEiYVeVGVyJfOzT8tzLHmfIuaNjaHTLT7EjyaV%2FHNswi1FpzAVzJwfEjPvgdTRSdXCHVevdUIrGAFxAh5%2BuXfbXAr7jYcYknAolyhazb3NUtewjvNFFcO3OKAgBTQSlaShrm%2ByIREVeXwviN%2B%2FO7ElTzGpxtF4ytBl%2F%2FP%2Fo2VWsxVMKbF7MMGOqUBDbz1YoYBkJM0dgfMf9GT3XHLJRnhmDW9tez1jFVqe%2Ff%2BqiMNpw2JX3iqGHwqMaPYxK8HkmgB2%2Be9mFLHk3o12w8N8SaanHGyPTJTp9A%2FZOmkd7%2BOhhpYedoad3AlbxyW9s61NVcM7b2vDSeG5m8Lyn7TwAbeGlMgme1NlEY0tumrfO%2F6E008e7fY%2FRrZW6bvBU7J%2BiAvIQ5OOECURUbuqBuj6hIj&X-Amz-Signature=678c0d771258d5c221ed168b3914f576fb6458376f5e06e8499aee46266d86f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7T46TOG%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmdt4eHruumjfQGRXMIdMv%2FSyf%2FAzzV%2FOCD1y9LG1bsAiEAsKShQaP5V6q5R3pakWy1%2B8aacAwhjuIoBGBTl%2B07vb0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJirjl5pieBwBSZaircA5maVPscing9PbA3yqMVPXC7MZl5%2B1uRwv44yT2gDAx3U63FHkRHAkjICTdvyKdtYtw2xhhyEm5LfKYrldmlJ6sslh17eRVrzHW2qLmIUA1WnlL9kjhHJBWtVZ0ZL6I2%2F3%2Byh6gencEwylA9SwMNSg2X2sKgCUd9Kma3yt1eMM%2FGs%2BIKPqDE44I9d5S1WVhDXUf8YFvpNKrejiAvX6lHGsOAZo6hoM4GadbjdeEjmZArSRahdg29uw94fj50YVM22lDENP9C9X%2BwHdT3OP6HCVDYXAwVD9QnPDDXKU6Cs1Uv5mqrASakf5uX69P70LS4MDLNs%2BMAV%2FGybClEGVV%2BvcgOlvmvtnNDWaMJbdHkb3COoS9oGDo6ZywOUs3BSXJx9zrd4Zk4WQyWETBb7TeDQ%2BiDmWdDK6xkvXmKU1G7ad5SPIDBYYcEkFn1Id7zCF%2BQg2p15LqR5J2oUGqmEiYVeVGVyJfOzT8tzLHmfIuaNjaHTLT7EjyaV%2FHNswi1FpzAVzJwfEjPvgdTRSdXCHVevdUIrGAFxAh5%2BuXfbXAr7jYcYknAolyhazb3NUtewjvNFFcO3OKAgBTQSlaShrm%2ByIREVeXwviN%2B%2FO7ElTzGpxtF4ytBl%2F%2FP%2Fo2VWsxVMKbF7MMGOqUBDbz1YoYBkJM0dgfMf9GT3XHLJRnhmDW9tez1jFVqe%2Ff%2BqiMNpw2JX3iqGHwqMaPYxK8HkmgB2%2Be9mFLHk3o12w8N8SaanHGyPTJTp9A%2FZOmkd7%2BOhhpYedoad3AlbxyW9s61NVcM7b2vDSeG5m8Lyn7TwAbeGlMgme1NlEY0tumrfO%2F6E008e7fY%2FRrZW6bvBU7J%2BiAvIQ5OOECURUbuqBuj6hIj&X-Amz-Signature=d4458a76150a93bd294891ebcd6b796a8537ab3cf035e3c727e5d58191ed3f20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7T46TOG%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmdt4eHruumjfQGRXMIdMv%2FSyf%2FAzzV%2FOCD1y9LG1bsAiEAsKShQaP5V6q5R3pakWy1%2B8aacAwhjuIoBGBTl%2B07vb0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJirjl5pieBwBSZaircA5maVPscing9PbA3yqMVPXC7MZl5%2B1uRwv44yT2gDAx3U63FHkRHAkjICTdvyKdtYtw2xhhyEm5LfKYrldmlJ6sslh17eRVrzHW2qLmIUA1WnlL9kjhHJBWtVZ0ZL6I2%2F3%2Byh6gencEwylA9SwMNSg2X2sKgCUd9Kma3yt1eMM%2FGs%2BIKPqDE44I9d5S1WVhDXUf8YFvpNKrejiAvX6lHGsOAZo6hoM4GadbjdeEjmZArSRahdg29uw94fj50YVM22lDENP9C9X%2BwHdT3OP6HCVDYXAwVD9QnPDDXKU6Cs1Uv5mqrASakf5uX69P70LS4MDLNs%2BMAV%2FGybClEGVV%2BvcgOlvmvtnNDWaMJbdHkb3COoS9oGDo6ZywOUs3BSXJx9zrd4Zk4WQyWETBb7TeDQ%2BiDmWdDK6xkvXmKU1G7ad5SPIDBYYcEkFn1Id7zCF%2BQg2p15LqR5J2oUGqmEiYVeVGVyJfOzT8tzLHmfIuaNjaHTLT7EjyaV%2FHNswi1FpzAVzJwfEjPvgdTRSdXCHVevdUIrGAFxAh5%2BuXfbXAr7jYcYknAolyhazb3NUtewjvNFFcO3OKAgBTQSlaShrm%2ByIREVeXwviN%2B%2FO7ElTzGpxtF4ytBl%2F%2FP%2Fo2VWsxVMKbF7MMGOqUBDbz1YoYBkJM0dgfMf9GT3XHLJRnhmDW9tez1jFVqe%2Ff%2BqiMNpw2JX3iqGHwqMaPYxK8HkmgB2%2Be9mFLHk3o12w8N8SaanHGyPTJTp9A%2FZOmkd7%2BOhhpYedoad3AlbxyW9s61NVcM7b2vDSeG5m8Lyn7TwAbeGlMgme1NlEY0tumrfO%2F6E008e7fY%2FRrZW6bvBU7J%2BiAvIQ5OOECURUbuqBuj6hIj&X-Amz-Signature=16b26d17e5c91cc0ba0677b9d38620a4d4145453540dd6044be95b0ecc3d35da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7T46TOG%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmdt4eHruumjfQGRXMIdMv%2FSyf%2FAzzV%2FOCD1y9LG1bsAiEAsKShQaP5V6q5R3pakWy1%2B8aacAwhjuIoBGBTl%2B07vb0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJirjl5pieBwBSZaircA5maVPscing9PbA3yqMVPXC7MZl5%2B1uRwv44yT2gDAx3U63FHkRHAkjICTdvyKdtYtw2xhhyEm5LfKYrldmlJ6sslh17eRVrzHW2qLmIUA1WnlL9kjhHJBWtVZ0ZL6I2%2F3%2Byh6gencEwylA9SwMNSg2X2sKgCUd9Kma3yt1eMM%2FGs%2BIKPqDE44I9d5S1WVhDXUf8YFvpNKrejiAvX6lHGsOAZo6hoM4GadbjdeEjmZArSRahdg29uw94fj50YVM22lDENP9C9X%2BwHdT3OP6HCVDYXAwVD9QnPDDXKU6Cs1Uv5mqrASakf5uX69P70LS4MDLNs%2BMAV%2FGybClEGVV%2BvcgOlvmvtnNDWaMJbdHkb3COoS9oGDo6ZywOUs3BSXJx9zrd4Zk4WQyWETBb7TeDQ%2BiDmWdDK6xkvXmKU1G7ad5SPIDBYYcEkFn1Id7zCF%2BQg2p15LqR5J2oUGqmEiYVeVGVyJfOzT8tzLHmfIuaNjaHTLT7EjyaV%2FHNswi1FpzAVzJwfEjPvgdTRSdXCHVevdUIrGAFxAh5%2BuXfbXAr7jYcYknAolyhazb3NUtewjvNFFcO3OKAgBTQSlaShrm%2ByIREVeXwviN%2B%2FO7ElTzGpxtF4ytBl%2F%2FP%2Fo2VWsxVMKbF7MMGOqUBDbz1YoYBkJM0dgfMf9GT3XHLJRnhmDW9tez1jFVqe%2Ff%2BqiMNpw2JX3iqGHwqMaPYxK8HkmgB2%2Be9mFLHk3o12w8N8SaanHGyPTJTp9A%2FZOmkd7%2BOhhpYedoad3AlbxyW9s61NVcM7b2vDSeG5m8Lyn7TwAbeGlMgme1NlEY0tumrfO%2F6E008e7fY%2FRrZW6bvBU7J%2BiAvIQ5OOECURUbuqBuj6hIj&X-Amz-Signature=33ecdc288fe45f4a35644d494c9b0e5cf7f9159029f3cb96977dc029a7858e75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
