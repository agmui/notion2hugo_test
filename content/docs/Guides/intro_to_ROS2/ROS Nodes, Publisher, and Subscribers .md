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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GNV2QDK%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV4qQ%2FVG%2Bz9Rv8gWrKON9w4RJ3Ri%2BYazGWz24VtIsPuwIgL3Rwjx6uSXK8f5M3gIQne%2FAKIy%2FJVSIFAUlkjWl6cqUqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8e1Yl29jUu1EA8JyrcAyoEQ6k0TgJ3BQJEt%2F1f6ytGyjUmfKZAf0CuvX%2BTzX8K8iwqXCyao1RLy%2Fx%2FxhsP5ug%2Bo6N1K5gPJwgJjbGe2FFACNM8R0grsT%2BXJzneGQ1tQQajqdIMSfeJ3a5CShibjHNgUvaon3JllEiBrvaxPzGdNjsTMg6bsSIokmIvJylk38pSLYZwpBVx47u1fsjH18v5%2FkD3UJn%2FpkzZPSRE5tFAs0yVbNqU0xRXJh9xmeuThtL59WFUMHFyj%2Fp2KIQmfL5f40dGvJ4Z3MRfWde2KJ4PYWA%2BN3jec%2F5OGdMhM7eX0TCUx5exappml8ysMtBIpRfssa7KStudNvo2Tx8J%2FhFr%2FIPI%2FxVp1PmFlmIuEIcNbsLwO6pSVUzxoIsl4W3K7hGsM8zyzsUZzj9ZcPl8fIxRDIdyIbjusi5Du7cNzOCIAsDh2xGaU34gCUB53RUcmXD9GF04m4Nie0DLZyoQHMqRL1Ew1ccoxAOVbhwOu4%2FWdZN8P4HeZE2OdLhW6dQrZmikm6%2F%2BLtRux0TkWwJmbvFnHDjcXoMOBuqR4j6ecQ5SKAIjHPi1SujQHqoPnwVxLN%2FuVOYprBxf3njfcN1%2B21DH2mP9uIvFEOl6Atre96f%2B%2BwCYDCcDz7WF%2BAuGMMqYssEGOqUBOBE8ikOSNXVashe%2FGx3tMRnjprOI6FS9FEHKlios8wVGvS0I3hGl0ZBZreasQ48OYoh6fCD0fvfHonE2iNB2vhAxnH68xpeKRRNEHRq%2BP5CtpsppZDuJcbN82dvYgSCtaOvP9qpPfQYA7V8YEMw2e6ETzmhuRwHp7mWkpXibphFsO9nx%2Fntosw%2FWjp7zarQQR%2BtrQt4KoNnwJAUYSOipmDKjTXn7&X-Amz-Signature=7c154f6aa68a2df260e10be538ae28b64e60165c2df82b1fe583f39ebcfcb7cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GNV2QDK%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV4qQ%2FVG%2Bz9Rv8gWrKON9w4RJ3Ri%2BYazGWz24VtIsPuwIgL3Rwjx6uSXK8f5M3gIQne%2FAKIy%2FJVSIFAUlkjWl6cqUqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8e1Yl29jUu1EA8JyrcAyoEQ6k0TgJ3BQJEt%2F1f6ytGyjUmfKZAf0CuvX%2BTzX8K8iwqXCyao1RLy%2Fx%2FxhsP5ug%2Bo6N1K5gPJwgJjbGe2FFACNM8R0grsT%2BXJzneGQ1tQQajqdIMSfeJ3a5CShibjHNgUvaon3JllEiBrvaxPzGdNjsTMg6bsSIokmIvJylk38pSLYZwpBVx47u1fsjH18v5%2FkD3UJn%2FpkzZPSRE5tFAs0yVbNqU0xRXJh9xmeuThtL59WFUMHFyj%2Fp2KIQmfL5f40dGvJ4Z3MRfWde2KJ4PYWA%2BN3jec%2F5OGdMhM7eX0TCUx5exappml8ysMtBIpRfssa7KStudNvo2Tx8J%2FhFr%2FIPI%2FxVp1PmFlmIuEIcNbsLwO6pSVUzxoIsl4W3K7hGsM8zyzsUZzj9ZcPl8fIxRDIdyIbjusi5Du7cNzOCIAsDh2xGaU34gCUB53RUcmXD9GF04m4Nie0DLZyoQHMqRL1Ew1ccoxAOVbhwOu4%2FWdZN8P4HeZE2OdLhW6dQrZmikm6%2F%2BLtRux0TkWwJmbvFnHDjcXoMOBuqR4j6ecQ5SKAIjHPi1SujQHqoPnwVxLN%2FuVOYprBxf3njfcN1%2B21DH2mP9uIvFEOl6Atre96f%2B%2BwCYDCcDz7WF%2BAuGMMqYssEGOqUBOBE8ikOSNXVashe%2FGx3tMRnjprOI6FS9FEHKlios8wVGvS0I3hGl0ZBZreasQ48OYoh6fCD0fvfHonE2iNB2vhAxnH68xpeKRRNEHRq%2BP5CtpsppZDuJcbN82dvYgSCtaOvP9qpPfQYA7V8YEMw2e6ETzmhuRwHp7mWkpXibphFsO9nx%2Fntosw%2FWjp7zarQQR%2BtrQt4KoNnwJAUYSOipmDKjTXn7&X-Amz-Signature=3ebd28fb8c579f9891a3bb35ccb5d61d30c385117a59535042373e30790b7082&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GNV2QDK%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV4qQ%2FVG%2Bz9Rv8gWrKON9w4RJ3Ri%2BYazGWz24VtIsPuwIgL3Rwjx6uSXK8f5M3gIQne%2FAKIy%2FJVSIFAUlkjWl6cqUqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8e1Yl29jUu1EA8JyrcAyoEQ6k0TgJ3BQJEt%2F1f6ytGyjUmfKZAf0CuvX%2BTzX8K8iwqXCyao1RLy%2Fx%2FxhsP5ug%2Bo6N1K5gPJwgJjbGe2FFACNM8R0grsT%2BXJzneGQ1tQQajqdIMSfeJ3a5CShibjHNgUvaon3JllEiBrvaxPzGdNjsTMg6bsSIokmIvJylk38pSLYZwpBVx47u1fsjH18v5%2FkD3UJn%2FpkzZPSRE5tFAs0yVbNqU0xRXJh9xmeuThtL59WFUMHFyj%2Fp2KIQmfL5f40dGvJ4Z3MRfWde2KJ4PYWA%2BN3jec%2F5OGdMhM7eX0TCUx5exappml8ysMtBIpRfssa7KStudNvo2Tx8J%2FhFr%2FIPI%2FxVp1PmFlmIuEIcNbsLwO6pSVUzxoIsl4W3K7hGsM8zyzsUZzj9ZcPl8fIxRDIdyIbjusi5Du7cNzOCIAsDh2xGaU34gCUB53RUcmXD9GF04m4Nie0DLZyoQHMqRL1Ew1ccoxAOVbhwOu4%2FWdZN8P4HeZE2OdLhW6dQrZmikm6%2F%2BLtRux0TkWwJmbvFnHDjcXoMOBuqR4j6ecQ5SKAIjHPi1SujQHqoPnwVxLN%2FuVOYprBxf3njfcN1%2B21DH2mP9uIvFEOl6Atre96f%2B%2BwCYDCcDz7WF%2BAuGMMqYssEGOqUBOBE8ikOSNXVashe%2FGx3tMRnjprOI6FS9FEHKlios8wVGvS0I3hGl0ZBZreasQ48OYoh6fCD0fvfHonE2iNB2vhAxnH68xpeKRRNEHRq%2BP5CtpsppZDuJcbN82dvYgSCtaOvP9qpPfQYA7V8YEMw2e6ETzmhuRwHp7mWkpXibphFsO9nx%2Fntosw%2FWjp7zarQQR%2BtrQt4KoNnwJAUYSOipmDKjTXn7&X-Amz-Signature=63303bb5cb6e5a5e29f1686785f5660221279e285c9e00883dd4ee3d358ed61d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GNV2QDK%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV4qQ%2FVG%2Bz9Rv8gWrKON9w4RJ3Ri%2BYazGWz24VtIsPuwIgL3Rwjx6uSXK8f5M3gIQne%2FAKIy%2FJVSIFAUlkjWl6cqUqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8e1Yl29jUu1EA8JyrcAyoEQ6k0TgJ3BQJEt%2F1f6ytGyjUmfKZAf0CuvX%2BTzX8K8iwqXCyao1RLy%2Fx%2FxhsP5ug%2Bo6N1K5gPJwgJjbGe2FFACNM8R0grsT%2BXJzneGQ1tQQajqdIMSfeJ3a5CShibjHNgUvaon3JllEiBrvaxPzGdNjsTMg6bsSIokmIvJylk38pSLYZwpBVx47u1fsjH18v5%2FkD3UJn%2FpkzZPSRE5tFAs0yVbNqU0xRXJh9xmeuThtL59WFUMHFyj%2Fp2KIQmfL5f40dGvJ4Z3MRfWde2KJ4PYWA%2BN3jec%2F5OGdMhM7eX0TCUx5exappml8ysMtBIpRfssa7KStudNvo2Tx8J%2FhFr%2FIPI%2FxVp1PmFlmIuEIcNbsLwO6pSVUzxoIsl4W3K7hGsM8zyzsUZzj9ZcPl8fIxRDIdyIbjusi5Du7cNzOCIAsDh2xGaU34gCUB53RUcmXD9GF04m4Nie0DLZyoQHMqRL1Ew1ccoxAOVbhwOu4%2FWdZN8P4HeZE2OdLhW6dQrZmikm6%2F%2BLtRux0TkWwJmbvFnHDjcXoMOBuqR4j6ecQ5SKAIjHPi1SujQHqoPnwVxLN%2FuVOYprBxf3njfcN1%2B21DH2mP9uIvFEOl6Atre96f%2B%2BwCYDCcDz7WF%2BAuGMMqYssEGOqUBOBE8ikOSNXVashe%2FGx3tMRnjprOI6FS9FEHKlios8wVGvS0I3hGl0ZBZreasQ48OYoh6fCD0fvfHonE2iNB2vhAxnH68xpeKRRNEHRq%2BP5CtpsppZDuJcbN82dvYgSCtaOvP9qpPfQYA7V8YEMw2e6ETzmhuRwHp7mWkpXibphFsO9nx%2Fntosw%2FWjp7zarQQR%2BtrQt4KoNnwJAUYSOipmDKjTXn7&X-Amz-Signature=5bd1f0128feca98e86517bca2623b8ef2ce0d855750da1d94a65a16bf4bcffb9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GNV2QDK%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV4qQ%2FVG%2Bz9Rv8gWrKON9w4RJ3Ri%2BYazGWz24VtIsPuwIgL3Rwjx6uSXK8f5M3gIQne%2FAKIy%2FJVSIFAUlkjWl6cqUqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8e1Yl29jUu1EA8JyrcAyoEQ6k0TgJ3BQJEt%2F1f6ytGyjUmfKZAf0CuvX%2BTzX8K8iwqXCyao1RLy%2Fx%2FxhsP5ug%2Bo6N1K5gPJwgJjbGe2FFACNM8R0grsT%2BXJzneGQ1tQQajqdIMSfeJ3a5CShibjHNgUvaon3JllEiBrvaxPzGdNjsTMg6bsSIokmIvJylk38pSLYZwpBVx47u1fsjH18v5%2FkD3UJn%2FpkzZPSRE5tFAs0yVbNqU0xRXJh9xmeuThtL59WFUMHFyj%2Fp2KIQmfL5f40dGvJ4Z3MRfWde2KJ4PYWA%2BN3jec%2F5OGdMhM7eX0TCUx5exappml8ysMtBIpRfssa7KStudNvo2Tx8J%2FhFr%2FIPI%2FxVp1PmFlmIuEIcNbsLwO6pSVUzxoIsl4W3K7hGsM8zyzsUZzj9ZcPl8fIxRDIdyIbjusi5Du7cNzOCIAsDh2xGaU34gCUB53RUcmXD9GF04m4Nie0DLZyoQHMqRL1Ew1ccoxAOVbhwOu4%2FWdZN8P4HeZE2OdLhW6dQrZmikm6%2F%2BLtRux0TkWwJmbvFnHDjcXoMOBuqR4j6ecQ5SKAIjHPi1SujQHqoPnwVxLN%2FuVOYprBxf3njfcN1%2B21DH2mP9uIvFEOl6Atre96f%2B%2BwCYDCcDz7WF%2BAuGMMqYssEGOqUBOBE8ikOSNXVashe%2FGx3tMRnjprOI6FS9FEHKlios8wVGvS0I3hGl0ZBZreasQ48OYoh6fCD0fvfHonE2iNB2vhAxnH68xpeKRRNEHRq%2BP5CtpsppZDuJcbN82dvYgSCtaOvP9qpPfQYA7V8YEMw2e6ETzmhuRwHp7mWkpXibphFsO9nx%2Fntosw%2FWjp7zarQQR%2BtrQt4KoNnwJAUYSOipmDKjTXn7&X-Amz-Signature=a0d1517fdd675c8a2b0bfc333a8bac6b347ac3d54d10f03688b80efcf9aa81b3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GNV2QDK%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV4qQ%2FVG%2Bz9Rv8gWrKON9w4RJ3Ri%2BYazGWz24VtIsPuwIgL3Rwjx6uSXK8f5M3gIQne%2FAKIy%2FJVSIFAUlkjWl6cqUqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8e1Yl29jUu1EA8JyrcAyoEQ6k0TgJ3BQJEt%2F1f6ytGyjUmfKZAf0CuvX%2BTzX8K8iwqXCyao1RLy%2Fx%2FxhsP5ug%2Bo6N1K5gPJwgJjbGe2FFACNM8R0grsT%2BXJzneGQ1tQQajqdIMSfeJ3a5CShibjHNgUvaon3JllEiBrvaxPzGdNjsTMg6bsSIokmIvJylk38pSLYZwpBVx47u1fsjH18v5%2FkD3UJn%2FpkzZPSRE5tFAs0yVbNqU0xRXJh9xmeuThtL59WFUMHFyj%2Fp2KIQmfL5f40dGvJ4Z3MRfWde2KJ4PYWA%2BN3jec%2F5OGdMhM7eX0TCUx5exappml8ysMtBIpRfssa7KStudNvo2Tx8J%2FhFr%2FIPI%2FxVp1PmFlmIuEIcNbsLwO6pSVUzxoIsl4W3K7hGsM8zyzsUZzj9ZcPl8fIxRDIdyIbjusi5Du7cNzOCIAsDh2xGaU34gCUB53RUcmXD9GF04m4Nie0DLZyoQHMqRL1Ew1ccoxAOVbhwOu4%2FWdZN8P4HeZE2OdLhW6dQrZmikm6%2F%2BLtRux0TkWwJmbvFnHDjcXoMOBuqR4j6ecQ5SKAIjHPi1SujQHqoPnwVxLN%2FuVOYprBxf3njfcN1%2B21DH2mP9uIvFEOl6Atre96f%2B%2BwCYDCcDz7WF%2BAuGMMqYssEGOqUBOBE8ikOSNXVashe%2FGx3tMRnjprOI6FS9FEHKlios8wVGvS0I3hGl0ZBZreasQ48OYoh6fCD0fvfHonE2iNB2vhAxnH68xpeKRRNEHRq%2BP5CtpsppZDuJcbN82dvYgSCtaOvP9qpPfQYA7V8YEMw2e6ETzmhuRwHp7mWkpXibphFsO9nx%2Fntosw%2FWjp7zarQQR%2BtrQt4KoNnwJAUYSOipmDKjTXn7&X-Amz-Signature=164454e718940066d971aa9c72e31a1fc8c3f712c577bc43bda6d6496ca9b1fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GNV2QDK%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV4qQ%2FVG%2Bz9Rv8gWrKON9w4RJ3Ri%2BYazGWz24VtIsPuwIgL3Rwjx6uSXK8f5M3gIQne%2FAKIy%2FJVSIFAUlkjWl6cqUqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8e1Yl29jUu1EA8JyrcAyoEQ6k0TgJ3BQJEt%2F1f6ytGyjUmfKZAf0CuvX%2BTzX8K8iwqXCyao1RLy%2Fx%2FxhsP5ug%2Bo6N1K5gPJwgJjbGe2FFACNM8R0grsT%2BXJzneGQ1tQQajqdIMSfeJ3a5CShibjHNgUvaon3JllEiBrvaxPzGdNjsTMg6bsSIokmIvJylk38pSLYZwpBVx47u1fsjH18v5%2FkD3UJn%2FpkzZPSRE5tFAs0yVbNqU0xRXJh9xmeuThtL59WFUMHFyj%2Fp2KIQmfL5f40dGvJ4Z3MRfWde2KJ4PYWA%2BN3jec%2F5OGdMhM7eX0TCUx5exappml8ysMtBIpRfssa7KStudNvo2Tx8J%2FhFr%2FIPI%2FxVp1PmFlmIuEIcNbsLwO6pSVUzxoIsl4W3K7hGsM8zyzsUZzj9ZcPl8fIxRDIdyIbjusi5Du7cNzOCIAsDh2xGaU34gCUB53RUcmXD9GF04m4Nie0DLZyoQHMqRL1Ew1ccoxAOVbhwOu4%2FWdZN8P4HeZE2OdLhW6dQrZmikm6%2F%2BLtRux0TkWwJmbvFnHDjcXoMOBuqR4j6ecQ5SKAIjHPi1SujQHqoPnwVxLN%2FuVOYprBxf3njfcN1%2B21DH2mP9uIvFEOl6Atre96f%2B%2BwCYDCcDz7WF%2BAuGMMqYssEGOqUBOBE8ikOSNXVashe%2FGx3tMRnjprOI6FS9FEHKlios8wVGvS0I3hGl0ZBZreasQ48OYoh6fCD0fvfHonE2iNB2vhAxnH68xpeKRRNEHRq%2BP5CtpsppZDuJcbN82dvYgSCtaOvP9qpPfQYA7V8YEMw2e6ETzmhuRwHp7mWkpXibphFsO9nx%2Fntosw%2FWjp7zarQQR%2BtrQt4KoNnwJAUYSOipmDKjTXn7&X-Amz-Signature=3be68707be227374f71f08da1b711afbc55dd85fcf1df3dff76bdab428e16330&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GNV2QDK%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV4qQ%2FVG%2Bz9Rv8gWrKON9w4RJ3Ri%2BYazGWz24VtIsPuwIgL3Rwjx6uSXK8f5M3gIQne%2FAKIy%2FJVSIFAUlkjWl6cqUqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8e1Yl29jUu1EA8JyrcAyoEQ6k0TgJ3BQJEt%2F1f6ytGyjUmfKZAf0CuvX%2BTzX8K8iwqXCyao1RLy%2Fx%2FxhsP5ug%2Bo6N1K5gPJwgJjbGe2FFACNM8R0grsT%2BXJzneGQ1tQQajqdIMSfeJ3a5CShibjHNgUvaon3JllEiBrvaxPzGdNjsTMg6bsSIokmIvJylk38pSLYZwpBVx47u1fsjH18v5%2FkD3UJn%2FpkzZPSRE5tFAs0yVbNqU0xRXJh9xmeuThtL59WFUMHFyj%2Fp2KIQmfL5f40dGvJ4Z3MRfWde2KJ4PYWA%2BN3jec%2F5OGdMhM7eX0TCUx5exappml8ysMtBIpRfssa7KStudNvo2Tx8J%2FhFr%2FIPI%2FxVp1PmFlmIuEIcNbsLwO6pSVUzxoIsl4W3K7hGsM8zyzsUZzj9ZcPl8fIxRDIdyIbjusi5Du7cNzOCIAsDh2xGaU34gCUB53RUcmXD9GF04m4Nie0DLZyoQHMqRL1Ew1ccoxAOVbhwOu4%2FWdZN8P4HeZE2OdLhW6dQrZmikm6%2F%2BLtRux0TkWwJmbvFnHDjcXoMOBuqR4j6ecQ5SKAIjHPi1SujQHqoPnwVxLN%2FuVOYprBxf3njfcN1%2B21DH2mP9uIvFEOl6Atre96f%2B%2BwCYDCcDz7WF%2BAuGMMqYssEGOqUBOBE8ikOSNXVashe%2FGx3tMRnjprOI6FS9FEHKlios8wVGvS0I3hGl0ZBZreasQ48OYoh6fCD0fvfHonE2iNB2vhAxnH68xpeKRRNEHRq%2BP5CtpsppZDuJcbN82dvYgSCtaOvP9qpPfQYA7V8YEMw2e6ETzmhuRwHp7mWkpXibphFsO9nx%2Fntosw%2FWjp7zarQQR%2BtrQt4KoNnwJAUYSOipmDKjTXn7&X-Amz-Signature=6a261375e43c7bca178b178bafc50e53ea8f5fa33ef76775655f22b18dfb3f53&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
