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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQJFXKS%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1NySW8gieIs3hQsH8EIqey4hNwM0o2yikRGAbaCRJygIgdRJHTYFwaAQ8ySHuuWYlQtGi7hhwOSCOe3%2FhyHc343gq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDOVdqCpXp8Z%2FYUkPPircA1Ocu2wgbwmXwT%2Fx25NSRpO%2Fwc43XCdBAfniG2oYSBCnGGKzbFBifyANOP9zezeH82I3eSf9N5%2FVATauu%2FAyfXZoIDP8BvxcmVJ7K69NSUJpza0m4yhrwFEbwPoLdYlM4QW025xbhwqM64n5IL4k6TBmRIfljZzUsjyPY9SKWawxNuDWwSSUlQlepAxyGGujaP%2BpdXjD1q2d2q6rjMpSckEOUCzREQf%2BIm%2BLo3aY16Rh8%2F2hAMmcXqX%2F4MpsCc9SSe3t7gIRKjsYhALWRX1Mp6PIbyU8oR3ww%2FxBuDqGD03EG8Z71FasC8MO55Z8ozlLRcFQsFm3IaqSHvw72iEU62QSUSH2ML%2FXfqiBY7nlG5N5SKIrEazp%2BAisLWSAoRmn7wVKAm02gF1NTNQ3K2W1r6uW9ILd7KSPXHjdgK%2BauSBGhlnQcy57jdyPxwUr0SdJBdUs9i2gNWeYIYFAlH8Dr9j40yAcDNsXljlk0ocnoM5L4wQfejFl%2BUX9L%2BznWcZ8HeyVSu3GvzRFXAF0XuUxf2%2BbPMf%2FCMXMyOI3PoRcUHTj3dxoArUF7GflVEmN68mp24mCrvzKCwMeSG66HU9OKhSDe%2BmVX8jnn5f3mRtYqqdRh3Bz8jQf9rvxpMsKMJ2Ulb8GOqUBSN9t%2BQnIkFJe01d31gmBE%2BegRZLVTzYLGC9hv%2Bgp6K%2BnJbCu%2FI5dVUUZ%2BOKIpbuVgKtGnw13SJvAR7sNeaAPU%2BKk2P18Tu43Dv8Wv2L7spXE17LFRy75EIPm2AbaGwUgo3dBvHRv9hZXn1IuiGbv%2Fjuy0Bdf7YGhSozXx4EX6YX4aCO3wQOQi8aMoXUDkvRPOsOv3cIpe364CqEaEBekDuZJVqOi&X-Amz-Signature=50604eff0003265b6b12a9ddd7186570f9fcb5bb35e35361473d11de0658cffc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQJFXKS%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1NySW8gieIs3hQsH8EIqey4hNwM0o2yikRGAbaCRJygIgdRJHTYFwaAQ8ySHuuWYlQtGi7hhwOSCOe3%2FhyHc343gq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDOVdqCpXp8Z%2FYUkPPircA1Ocu2wgbwmXwT%2Fx25NSRpO%2Fwc43XCdBAfniG2oYSBCnGGKzbFBifyANOP9zezeH82I3eSf9N5%2FVATauu%2FAyfXZoIDP8BvxcmVJ7K69NSUJpza0m4yhrwFEbwPoLdYlM4QW025xbhwqM64n5IL4k6TBmRIfljZzUsjyPY9SKWawxNuDWwSSUlQlepAxyGGujaP%2BpdXjD1q2d2q6rjMpSckEOUCzREQf%2BIm%2BLo3aY16Rh8%2F2hAMmcXqX%2F4MpsCc9SSe3t7gIRKjsYhALWRX1Mp6PIbyU8oR3ww%2FxBuDqGD03EG8Z71FasC8MO55Z8ozlLRcFQsFm3IaqSHvw72iEU62QSUSH2ML%2FXfqiBY7nlG5N5SKIrEazp%2BAisLWSAoRmn7wVKAm02gF1NTNQ3K2W1r6uW9ILd7KSPXHjdgK%2BauSBGhlnQcy57jdyPxwUr0SdJBdUs9i2gNWeYIYFAlH8Dr9j40yAcDNsXljlk0ocnoM5L4wQfejFl%2BUX9L%2BznWcZ8HeyVSu3GvzRFXAF0XuUxf2%2BbPMf%2FCMXMyOI3PoRcUHTj3dxoArUF7GflVEmN68mp24mCrvzKCwMeSG66HU9OKhSDe%2BmVX8jnn5f3mRtYqqdRh3Bz8jQf9rvxpMsKMJ2Ulb8GOqUBSN9t%2BQnIkFJe01d31gmBE%2BegRZLVTzYLGC9hv%2Bgp6K%2BnJbCu%2FI5dVUUZ%2BOKIpbuVgKtGnw13SJvAR7sNeaAPU%2BKk2P18Tu43Dv8Wv2L7spXE17LFRy75EIPm2AbaGwUgo3dBvHRv9hZXn1IuiGbv%2Fjuy0Bdf7YGhSozXx4EX6YX4aCO3wQOQi8aMoXUDkvRPOsOv3cIpe364CqEaEBekDuZJVqOi&X-Amz-Signature=11383629f5a094a739de29a901552ce25c56b01473ea59f9397c0b5f869df323&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQJFXKS%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1NySW8gieIs3hQsH8EIqey4hNwM0o2yikRGAbaCRJygIgdRJHTYFwaAQ8ySHuuWYlQtGi7hhwOSCOe3%2FhyHc343gq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDOVdqCpXp8Z%2FYUkPPircA1Ocu2wgbwmXwT%2Fx25NSRpO%2Fwc43XCdBAfniG2oYSBCnGGKzbFBifyANOP9zezeH82I3eSf9N5%2FVATauu%2FAyfXZoIDP8BvxcmVJ7K69NSUJpza0m4yhrwFEbwPoLdYlM4QW025xbhwqM64n5IL4k6TBmRIfljZzUsjyPY9SKWawxNuDWwSSUlQlepAxyGGujaP%2BpdXjD1q2d2q6rjMpSckEOUCzREQf%2BIm%2BLo3aY16Rh8%2F2hAMmcXqX%2F4MpsCc9SSe3t7gIRKjsYhALWRX1Mp6PIbyU8oR3ww%2FxBuDqGD03EG8Z71FasC8MO55Z8ozlLRcFQsFm3IaqSHvw72iEU62QSUSH2ML%2FXfqiBY7nlG5N5SKIrEazp%2BAisLWSAoRmn7wVKAm02gF1NTNQ3K2W1r6uW9ILd7KSPXHjdgK%2BauSBGhlnQcy57jdyPxwUr0SdJBdUs9i2gNWeYIYFAlH8Dr9j40yAcDNsXljlk0ocnoM5L4wQfejFl%2BUX9L%2BznWcZ8HeyVSu3GvzRFXAF0XuUxf2%2BbPMf%2FCMXMyOI3PoRcUHTj3dxoArUF7GflVEmN68mp24mCrvzKCwMeSG66HU9OKhSDe%2BmVX8jnn5f3mRtYqqdRh3Bz8jQf9rvxpMsKMJ2Ulb8GOqUBSN9t%2BQnIkFJe01d31gmBE%2BegRZLVTzYLGC9hv%2Bgp6K%2BnJbCu%2FI5dVUUZ%2BOKIpbuVgKtGnw13SJvAR7sNeaAPU%2BKk2P18Tu43Dv8Wv2L7spXE17LFRy75EIPm2AbaGwUgo3dBvHRv9hZXn1IuiGbv%2Fjuy0Bdf7YGhSozXx4EX6YX4aCO3wQOQi8aMoXUDkvRPOsOv3cIpe364CqEaEBekDuZJVqOi&X-Amz-Signature=3b3ba0043f720dbf07e1ef54337d47e394fafde4742c6077fd1417547d125ff5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQJFXKS%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1NySW8gieIs3hQsH8EIqey4hNwM0o2yikRGAbaCRJygIgdRJHTYFwaAQ8ySHuuWYlQtGi7hhwOSCOe3%2FhyHc343gq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDOVdqCpXp8Z%2FYUkPPircA1Ocu2wgbwmXwT%2Fx25NSRpO%2Fwc43XCdBAfniG2oYSBCnGGKzbFBifyANOP9zezeH82I3eSf9N5%2FVATauu%2FAyfXZoIDP8BvxcmVJ7K69NSUJpza0m4yhrwFEbwPoLdYlM4QW025xbhwqM64n5IL4k6TBmRIfljZzUsjyPY9SKWawxNuDWwSSUlQlepAxyGGujaP%2BpdXjD1q2d2q6rjMpSckEOUCzREQf%2BIm%2BLo3aY16Rh8%2F2hAMmcXqX%2F4MpsCc9SSe3t7gIRKjsYhALWRX1Mp6PIbyU8oR3ww%2FxBuDqGD03EG8Z71FasC8MO55Z8ozlLRcFQsFm3IaqSHvw72iEU62QSUSH2ML%2FXfqiBY7nlG5N5SKIrEazp%2BAisLWSAoRmn7wVKAm02gF1NTNQ3K2W1r6uW9ILd7KSPXHjdgK%2BauSBGhlnQcy57jdyPxwUr0SdJBdUs9i2gNWeYIYFAlH8Dr9j40yAcDNsXljlk0ocnoM5L4wQfejFl%2BUX9L%2BznWcZ8HeyVSu3GvzRFXAF0XuUxf2%2BbPMf%2FCMXMyOI3PoRcUHTj3dxoArUF7GflVEmN68mp24mCrvzKCwMeSG66HU9OKhSDe%2BmVX8jnn5f3mRtYqqdRh3Bz8jQf9rvxpMsKMJ2Ulb8GOqUBSN9t%2BQnIkFJe01d31gmBE%2BegRZLVTzYLGC9hv%2Bgp6K%2BnJbCu%2FI5dVUUZ%2BOKIpbuVgKtGnw13SJvAR7sNeaAPU%2BKk2P18Tu43Dv8Wv2L7spXE17LFRy75EIPm2AbaGwUgo3dBvHRv9hZXn1IuiGbv%2Fjuy0Bdf7YGhSozXx4EX6YX4aCO3wQOQi8aMoXUDkvRPOsOv3cIpe364CqEaEBekDuZJVqOi&X-Amz-Signature=e996935732027c2799ab9898e10134023e2dc49981f0e96e0252fd5b24ffae48&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQJFXKS%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1NySW8gieIs3hQsH8EIqey4hNwM0o2yikRGAbaCRJygIgdRJHTYFwaAQ8ySHuuWYlQtGi7hhwOSCOe3%2FhyHc343gq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDOVdqCpXp8Z%2FYUkPPircA1Ocu2wgbwmXwT%2Fx25NSRpO%2Fwc43XCdBAfniG2oYSBCnGGKzbFBifyANOP9zezeH82I3eSf9N5%2FVATauu%2FAyfXZoIDP8BvxcmVJ7K69NSUJpza0m4yhrwFEbwPoLdYlM4QW025xbhwqM64n5IL4k6TBmRIfljZzUsjyPY9SKWawxNuDWwSSUlQlepAxyGGujaP%2BpdXjD1q2d2q6rjMpSckEOUCzREQf%2BIm%2BLo3aY16Rh8%2F2hAMmcXqX%2F4MpsCc9SSe3t7gIRKjsYhALWRX1Mp6PIbyU8oR3ww%2FxBuDqGD03EG8Z71FasC8MO55Z8ozlLRcFQsFm3IaqSHvw72iEU62QSUSH2ML%2FXfqiBY7nlG5N5SKIrEazp%2BAisLWSAoRmn7wVKAm02gF1NTNQ3K2W1r6uW9ILd7KSPXHjdgK%2BauSBGhlnQcy57jdyPxwUr0SdJBdUs9i2gNWeYIYFAlH8Dr9j40yAcDNsXljlk0ocnoM5L4wQfejFl%2BUX9L%2BznWcZ8HeyVSu3GvzRFXAF0XuUxf2%2BbPMf%2FCMXMyOI3PoRcUHTj3dxoArUF7GflVEmN68mp24mCrvzKCwMeSG66HU9OKhSDe%2BmVX8jnn5f3mRtYqqdRh3Bz8jQf9rvxpMsKMJ2Ulb8GOqUBSN9t%2BQnIkFJe01d31gmBE%2BegRZLVTzYLGC9hv%2Bgp6K%2BnJbCu%2FI5dVUUZ%2BOKIpbuVgKtGnw13SJvAR7sNeaAPU%2BKk2P18Tu43Dv8Wv2L7spXE17LFRy75EIPm2AbaGwUgo3dBvHRv9hZXn1IuiGbv%2Fjuy0Bdf7YGhSozXx4EX6YX4aCO3wQOQi8aMoXUDkvRPOsOv3cIpe364CqEaEBekDuZJVqOi&X-Amz-Signature=8a8226c10ac95e7c0f687b0a8cd63489967f324e67e531c725eb8f05ff1204eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQJFXKS%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1NySW8gieIs3hQsH8EIqey4hNwM0o2yikRGAbaCRJygIgdRJHTYFwaAQ8ySHuuWYlQtGi7hhwOSCOe3%2FhyHc343gq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDOVdqCpXp8Z%2FYUkPPircA1Ocu2wgbwmXwT%2Fx25NSRpO%2Fwc43XCdBAfniG2oYSBCnGGKzbFBifyANOP9zezeH82I3eSf9N5%2FVATauu%2FAyfXZoIDP8BvxcmVJ7K69NSUJpza0m4yhrwFEbwPoLdYlM4QW025xbhwqM64n5IL4k6TBmRIfljZzUsjyPY9SKWawxNuDWwSSUlQlepAxyGGujaP%2BpdXjD1q2d2q6rjMpSckEOUCzREQf%2BIm%2BLo3aY16Rh8%2F2hAMmcXqX%2F4MpsCc9SSe3t7gIRKjsYhALWRX1Mp6PIbyU8oR3ww%2FxBuDqGD03EG8Z71FasC8MO55Z8ozlLRcFQsFm3IaqSHvw72iEU62QSUSH2ML%2FXfqiBY7nlG5N5SKIrEazp%2BAisLWSAoRmn7wVKAm02gF1NTNQ3K2W1r6uW9ILd7KSPXHjdgK%2BauSBGhlnQcy57jdyPxwUr0SdJBdUs9i2gNWeYIYFAlH8Dr9j40yAcDNsXljlk0ocnoM5L4wQfejFl%2BUX9L%2BznWcZ8HeyVSu3GvzRFXAF0XuUxf2%2BbPMf%2FCMXMyOI3PoRcUHTj3dxoArUF7GflVEmN68mp24mCrvzKCwMeSG66HU9OKhSDe%2BmVX8jnn5f3mRtYqqdRh3Bz8jQf9rvxpMsKMJ2Ulb8GOqUBSN9t%2BQnIkFJe01d31gmBE%2BegRZLVTzYLGC9hv%2Bgp6K%2BnJbCu%2FI5dVUUZ%2BOKIpbuVgKtGnw13SJvAR7sNeaAPU%2BKk2P18Tu43Dv8Wv2L7spXE17LFRy75EIPm2AbaGwUgo3dBvHRv9hZXn1IuiGbv%2Fjuy0Bdf7YGhSozXx4EX6YX4aCO3wQOQi8aMoXUDkvRPOsOv3cIpe364CqEaEBekDuZJVqOi&X-Amz-Signature=45155cafd78f85b76d3d0a1bc78d3e7d82276b7e6c8c16785effabed4eb29503&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQJFXKS%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1NySW8gieIs3hQsH8EIqey4hNwM0o2yikRGAbaCRJygIgdRJHTYFwaAQ8ySHuuWYlQtGi7hhwOSCOe3%2FhyHc343gq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDOVdqCpXp8Z%2FYUkPPircA1Ocu2wgbwmXwT%2Fx25NSRpO%2Fwc43XCdBAfniG2oYSBCnGGKzbFBifyANOP9zezeH82I3eSf9N5%2FVATauu%2FAyfXZoIDP8BvxcmVJ7K69NSUJpza0m4yhrwFEbwPoLdYlM4QW025xbhwqM64n5IL4k6TBmRIfljZzUsjyPY9SKWawxNuDWwSSUlQlepAxyGGujaP%2BpdXjD1q2d2q6rjMpSckEOUCzREQf%2BIm%2BLo3aY16Rh8%2F2hAMmcXqX%2F4MpsCc9SSe3t7gIRKjsYhALWRX1Mp6PIbyU8oR3ww%2FxBuDqGD03EG8Z71FasC8MO55Z8ozlLRcFQsFm3IaqSHvw72iEU62QSUSH2ML%2FXfqiBY7nlG5N5SKIrEazp%2BAisLWSAoRmn7wVKAm02gF1NTNQ3K2W1r6uW9ILd7KSPXHjdgK%2BauSBGhlnQcy57jdyPxwUr0SdJBdUs9i2gNWeYIYFAlH8Dr9j40yAcDNsXljlk0ocnoM5L4wQfejFl%2BUX9L%2BznWcZ8HeyVSu3GvzRFXAF0XuUxf2%2BbPMf%2FCMXMyOI3PoRcUHTj3dxoArUF7GflVEmN68mp24mCrvzKCwMeSG66HU9OKhSDe%2BmVX8jnn5f3mRtYqqdRh3Bz8jQf9rvxpMsKMJ2Ulb8GOqUBSN9t%2BQnIkFJe01d31gmBE%2BegRZLVTzYLGC9hv%2Bgp6K%2BnJbCu%2FI5dVUUZ%2BOKIpbuVgKtGnw13SJvAR7sNeaAPU%2BKk2P18Tu43Dv8Wv2L7spXE17LFRy75EIPm2AbaGwUgo3dBvHRv9hZXn1IuiGbv%2Fjuy0Bdf7YGhSozXx4EX6YX4aCO3wQOQi8aMoXUDkvRPOsOv3cIpe364CqEaEBekDuZJVqOi&X-Amz-Signature=53dd5af0471403a74a1f40e51d32b220f427d48930985b18cffd7d0c48a63fb8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQJFXKS%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1NySW8gieIs3hQsH8EIqey4hNwM0o2yikRGAbaCRJygIgdRJHTYFwaAQ8ySHuuWYlQtGi7hhwOSCOe3%2FhyHc343gq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDOVdqCpXp8Z%2FYUkPPircA1Ocu2wgbwmXwT%2Fx25NSRpO%2Fwc43XCdBAfniG2oYSBCnGGKzbFBifyANOP9zezeH82I3eSf9N5%2FVATauu%2FAyfXZoIDP8BvxcmVJ7K69NSUJpza0m4yhrwFEbwPoLdYlM4QW025xbhwqM64n5IL4k6TBmRIfljZzUsjyPY9SKWawxNuDWwSSUlQlepAxyGGujaP%2BpdXjD1q2d2q6rjMpSckEOUCzREQf%2BIm%2BLo3aY16Rh8%2F2hAMmcXqX%2F4MpsCc9SSe3t7gIRKjsYhALWRX1Mp6PIbyU8oR3ww%2FxBuDqGD03EG8Z71FasC8MO55Z8ozlLRcFQsFm3IaqSHvw72iEU62QSUSH2ML%2FXfqiBY7nlG5N5SKIrEazp%2BAisLWSAoRmn7wVKAm02gF1NTNQ3K2W1r6uW9ILd7KSPXHjdgK%2BauSBGhlnQcy57jdyPxwUr0SdJBdUs9i2gNWeYIYFAlH8Dr9j40yAcDNsXljlk0ocnoM5L4wQfejFl%2BUX9L%2BznWcZ8HeyVSu3GvzRFXAF0XuUxf2%2BbPMf%2FCMXMyOI3PoRcUHTj3dxoArUF7GflVEmN68mp24mCrvzKCwMeSG66HU9OKhSDe%2BmVX8jnn5f3mRtYqqdRh3Bz8jQf9rvxpMsKMJ2Ulb8GOqUBSN9t%2BQnIkFJe01d31gmBE%2BegRZLVTzYLGC9hv%2Bgp6K%2BnJbCu%2FI5dVUUZ%2BOKIpbuVgKtGnw13SJvAR7sNeaAPU%2BKk2P18Tu43Dv8Wv2L7spXE17LFRy75EIPm2AbaGwUgo3dBvHRv9hZXn1IuiGbv%2Fjuy0Bdf7YGhSozXx4EX6YX4aCO3wQOQi8aMoXUDkvRPOsOv3cIpe364CqEaEBekDuZJVqOi&X-Amz-Signature=23ca233b533a46bc5547168215a9270738bfcb6efd6bb408678a386ea6b81298&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
