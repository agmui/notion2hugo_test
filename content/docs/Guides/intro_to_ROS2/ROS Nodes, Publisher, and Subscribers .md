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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STX2EUCU%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDdJUOVG3ok0%2Fj40cWIgvDggv4XSoiDfGl3arjqMf8I%2FAIhANUs88LeRDqjZXqttcszvdwsIKpZlkeSNyvOkjV4uVnDKv8DCHAQABoMNjM3NDIzMTgzODA1IgzjuQcq8IYPgzC5W7sq3AO%2FVQCcnBDt2rduxswaymQ9dnI3g4IzTcKylk5lNsX14E1IM3tdSaZkOIbEGsbahgOYrKNitM8tZrGl6eE%2Far25MnfgcNoiUVZ0WKZxICAGTaoGVblNfPyzX9fPGLgotRSR2qlJ0Vrf7hZ5cq5ct%2FunQJCbVI8ONcwcRB0VyFEripYslB%2BHKZp%2BbC58XcxnntA7h0l2vym0zOSx0dr0RexlwQKtSeIGsJiZf8dcZeDUCjvcou5vu4SDJ9EkKGtFJ9aIVXcUksZ3BtNHVLVeMY97AHImXWWaZ0eDqX%2F9JII1W1knXK8WKo%2BcWXbXbLwuiLV98oSMmmKVKOlwvDwTjbPcw%2F4GGbs2EZ7eC%2BpvUqk%2FNJmZcexrn%2BXoJfiyIxZ5FC4bOwIPk2ROc6J54gNUwQXS9yLULkxXehp3PpJU3FoimdLsrUgOX%2BxqfIhyfaHC6UB6cbGiEpyRYxR2vWCmN%2BlT3TazJmMRMPZhxwkoMTyoFepnUuZmH3JaNodxgRrdfry7ksVdzkKziqJGY6f2wOYyHvCV9Ek3MiKNXiIBLYsFSxTB%2FINanWuRszC1n0k%2BdsFP2QeZGvhXF7%2Fs%2Bh93hwHUBTWPBFeh6GDCQuK1i7yaRGHavBaSmE%2FJrb2NtjD19%2FjCBjqkAbCwx1%2FCVP8znul64UU9LyB3tJM%2BMO3%2Fp1H7WFE8LQPfyhr7CVMFs8P8wVGERdEJ0XWm5zpI9ykMEHjMD55NjW3wF5PhgkO8Odo%2BptsIyvQn%2F3CTB9ZfJRs5hqnMSJW1K%2F9R6KdO4iNvYcbn1ofbiAx7I05fDVZcJQpyyPmkXDVsAWdm86Gw23KXGiNRZ7PbzQB2c7X09XMXoA3ZrMwXF8h3i5qM&X-Amz-Signature=ca5850b69f31c2dded0d2f1f927d708b7494ab5018bb46f27bec55d48d023c7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STX2EUCU%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDdJUOVG3ok0%2Fj40cWIgvDggv4XSoiDfGl3arjqMf8I%2FAIhANUs88LeRDqjZXqttcszvdwsIKpZlkeSNyvOkjV4uVnDKv8DCHAQABoMNjM3NDIzMTgzODA1IgzjuQcq8IYPgzC5W7sq3AO%2FVQCcnBDt2rduxswaymQ9dnI3g4IzTcKylk5lNsX14E1IM3tdSaZkOIbEGsbahgOYrKNitM8tZrGl6eE%2Far25MnfgcNoiUVZ0WKZxICAGTaoGVblNfPyzX9fPGLgotRSR2qlJ0Vrf7hZ5cq5ct%2FunQJCbVI8ONcwcRB0VyFEripYslB%2BHKZp%2BbC58XcxnntA7h0l2vym0zOSx0dr0RexlwQKtSeIGsJiZf8dcZeDUCjvcou5vu4SDJ9EkKGtFJ9aIVXcUksZ3BtNHVLVeMY97AHImXWWaZ0eDqX%2F9JII1W1knXK8WKo%2BcWXbXbLwuiLV98oSMmmKVKOlwvDwTjbPcw%2F4GGbs2EZ7eC%2BpvUqk%2FNJmZcexrn%2BXoJfiyIxZ5FC4bOwIPk2ROc6J54gNUwQXS9yLULkxXehp3PpJU3FoimdLsrUgOX%2BxqfIhyfaHC6UB6cbGiEpyRYxR2vWCmN%2BlT3TazJmMRMPZhxwkoMTyoFepnUuZmH3JaNodxgRrdfry7ksVdzkKziqJGY6f2wOYyHvCV9Ek3MiKNXiIBLYsFSxTB%2FINanWuRszC1n0k%2BdsFP2QeZGvhXF7%2Fs%2Bh93hwHUBTWPBFeh6GDCQuK1i7yaRGHavBaSmE%2FJrb2NtjD19%2FjCBjqkAbCwx1%2FCVP8znul64UU9LyB3tJM%2BMO3%2Fp1H7WFE8LQPfyhr7CVMFs8P8wVGERdEJ0XWm5zpI9ykMEHjMD55NjW3wF5PhgkO8Odo%2BptsIyvQn%2F3CTB9ZfJRs5hqnMSJW1K%2F9R6KdO4iNvYcbn1ofbiAx7I05fDVZcJQpyyPmkXDVsAWdm86Gw23KXGiNRZ7PbzQB2c7X09XMXoA3ZrMwXF8h3i5qM&X-Amz-Signature=0dc006464350ced6c1dc609ff023603fbf27ae69e6ec6f3a977d0f3c668eca23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STX2EUCU%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDdJUOVG3ok0%2Fj40cWIgvDggv4XSoiDfGl3arjqMf8I%2FAIhANUs88LeRDqjZXqttcszvdwsIKpZlkeSNyvOkjV4uVnDKv8DCHAQABoMNjM3NDIzMTgzODA1IgzjuQcq8IYPgzC5W7sq3AO%2FVQCcnBDt2rduxswaymQ9dnI3g4IzTcKylk5lNsX14E1IM3tdSaZkOIbEGsbahgOYrKNitM8tZrGl6eE%2Far25MnfgcNoiUVZ0WKZxICAGTaoGVblNfPyzX9fPGLgotRSR2qlJ0Vrf7hZ5cq5ct%2FunQJCbVI8ONcwcRB0VyFEripYslB%2BHKZp%2BbC58XcxnntA7h0l2vym0zOSx0dr0RexlwQKtSeIGsJiZf8dcZeDUCjvcou5vu4SDJ9EkKGtFJ9aIVXcUksZ3BtNHVLVeMY97AHImXWWaZ0eDqX%2F9JII1W1knXK8WKo%2BcWXbXbLwuiLV98oSMmmKVKOlwvDwTjbPcw%2F4GGbs2EZ7eC%2BpvUqk%2FNJmZcexrn%2BXoJfiyIxZ5FC4bOwIPk2ROc6J54gNUwQXS9yLULkxXehp3PpJU3FoimdLsrUgOX%2BxqfIhyfaHC6UB6cbGiEpyRYxR2vWCmN%2BlT3TazJmMRMPZhxwkoMTyoFepnUuZmH3JaNodxgRrdfry7ksVdzkKziqJGY6f2wOYyHvCV9Ek3MiKNXiIBLYsFSxTB%2FINanWuRszC1n0k%2BdsFP2QeZGvhXF7%2Fs%2Bh93hwHUBTWPBFeh6GDCQuK1i7yaRGHavBaSmE%2FJrb2NtjD19%2FjCBjqkAbCwx1%2FCVP8znul64UU9LyB3tJM%2BMO3%2Fp1H7WFE8LQPfyhr7CVMFs8P8wVGERdEJ0XWm5zpI9ykMEHjMD55NjW3wF5PhgkO8Odo%2BptsIyvQn%2F3CTB9ZfJRs5hqnMSJW1K%2F9R6KdO4iNvYcbn1ofbiAx7I05fDVZcJQpyyPmkXDVsAWdm86Gw23KXGiNRZ7PbzQB2c7X09XMXoA3ZrMwXF8h3i5qM&X-Amz-Signature=4816ead93bdd2b21191c18c81a73bee9bb98ba1317a15fc980a3c7b2926d87b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STX2EUCU%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDdJUOVG3ok0%2Fj40cWIgvDggv4XSoiDfGl3arjqMf8I%2FAIhANUs88LeRDqjZXqttcszvdwsIKpZlkeSNyvOkjV4uVnDKv8DCHAQABoMNjM3NDIzMTgzODA1IgzjuQcq8IYPgzC5W7sq3AO%2FVQCcnBDt2rduxswaymQ9dnI3g4IzTcKylk5lNsX14E1IM3tdSaZkOIbEGsbahgOYrKNitM8tZrGl6eE%2Far25MnfgcNoiUVZ0WKZxICAGTaoGVblNfPyzX9fPGLgotRSR2qlJ0Vrf7hZ5cq5ct%2FunQJCbVI8ONcwcRB0VyFEripYslB%2BHKZp%2BbC58XcxnntA7h0l2vym0zOSx0dr0RexlwQKtSeIGsJiZf8dcZeDUCjvcou5vu4SDJ9EkKGtFJ9aIVXcUksZ3BtNHVLVeMY97AHImXWWaZ0eDqX%2F9JII1W1knXK8WKo%2BcWXbXbLwuiLV98oSMmmKVKOlwvDwTjbPcw%2F4GGbs2EZ7eC%2BpvUqk%2FNJmZcexrn%2BXoJfiyIxZ5FC4bOwIPk2ROc6J54gNUwQXS9yLULkxXehp3PpJU3FoimdLsrUgOX%2BxqfIhyfaHC6UB6cbGiEpyRYxR2vWCmN%2BlT3TazJmMRMPZhxwkoMTyoFepnUuZmH3JaNodxgRrdfry7ksVdzkKziqJGY6f2wOYyHvCV9Ek3MiKNXiIBLYsFSxTB%2FINanWuRszC1n0k%2BdsFP2QeZGvhXF7%2Fs%2Bh93hwHUBTWPBFeh6GDCQuK1i7yaRGHavBaSmE%2FJrb2NtjD19%2FjCBjqkAbCwx1%2FCVP8znul64UU9LyB3tJM%2BMO3%2Fp1H7WFE8LQPfyhr7CVMFs8P8wVGERdEJ0XWm5zpI9ykMEHjMD55NjW3wF5PhgkO8Odo%2BptsIyvQn%2F3CTB9ZfJRs5hqnMSJW1K%2F9R6KdO4iNvYcbn1ofbiAx7I05fDVZcJQpyyPmkXDVsAWdm86Gw23KXGiNRZ7PbzQB2c7X09XMXoA3ZrMwXF8h3i5qM&X-Amz-Signature=72d7609fef7be7d544dfccb6cdbf9d62135acc02ff28d6b55efa131cb829fb62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STX2EUCU%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDdJUOVG3ok0%2Fj40cWIgvDggv4XSoiDfGl3arjqMf8I%2FAIhANUs88LeRDqjZXqttcszvdwsIKpZlkeSNyvOkjV4uVnDKv8DCHAQABoMNjM3NDIzMTgzODA1IgzjuQcq8IYPgzC5W7sq3AO%2FVQCcnBDt2rduxswaymQ9dnI3g4IzTcKylk5lNsX14E1IM3tdSaZkOIbEGsbahgOYrKNitM8tZrGl6eE%2Far25MnfgcNoiUVZ0WKZxICAGTaoGVblNfPyzX9fPGLgotRSR2qlJ0Vrf7hZ5cq5ct%2FunQJCbVI8ONcwcRB0VyFEripYslB%2BHKZp%2BbC58XcxnntA7h0l2vym0zOSx0dr0RexlwQKtSeIGsJiZf8dcZeDUCjvcou5vu4SDJ9EkKGtFJ9aIVXcUksZ3BtNHVLVeMY97AHImXWWaZ0eDqX%2F9JII1W1knXK8WKo%2BcWXbXbLwuiLV98oSMmmKVKOlwvDwTjbPcw%2F4GGbs2EZ7eC%2BpvUqk%2FNJmZcexrn%2BXoJfiyIxZ5FC4bOwIPk2ROc6J54gNUwQXS9yLULkxXehp3PpJU3FoimdLsrUgOX%2BxqfIhyfaHC6UB6cbGiEpyRYxR2vWCmN%2BlT3TazJmMRMPZhxwkoMTyoFepnUuZmH3JaNodxgRrdfry7ksVdzkKziqJGY6f2wOYyHvCV9Ek3MiKNXiIBLYsFSxTB%2FINanWuRszC1n0k%2BdsFP2QeZGvhXF7%2Fs%2Bh93hwHUBTWPBFeh6GDCQuK1i7yaRGHavBaSmE%2FJrb2NtjD19%2FjCBjqkAbCwx1%2FCVP8znul64UU9LyB3tJM%2BMO3%2Fp1H7WFE8LQPfyhr7CVMFs8P8wVGERdEJ0XWm5zpI9ykMEHjMD55NjW3wF5PhgkO8Odo%2BptsIyvQn%2F3CTB9ZfJRs5hqnMSJW1K%2F9R6KdO4iNvYcbn1ofbiAx7I05fDVZcJQpyyPmkXDVsAWdm86Gw23KXGiNRZ7PbzQB2c7X09XMXoA3ZrMwXF8h3i5qM&X-Amz-Signature=5e5eb0b29658d394043b6315c0b73512bb363b7760b2a5128c2c77fa6d211418&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STX2EUCU%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDdJUOVG3ok0%2Fj40cWIgvDggv4XSoiDfGl3arjqMf8I%2FAIhANUs88LeRDqjZXqttcszvdwsIKpZlkeSNyvOkjV4uVnDKv8DCHAQABoMNjM3NDIzMTgzODA1IgzjuQcq8IYPgzC5W7sq3AO%2FVQCcnBDt2rduxswaymQ9dnI3g4IzTcKylk5lNsX14E1IM3tdSaZkOIbEGsbahgOYrKNitM8tZrGl6eE%2Far25MnfgcNoiUVZ0WKZxICAGTaoGVblNfPyzX9fPGLgotRSR2qlJ0Vrf7hZ5cq5ct%2FunQJCbVI8ONcwcRB0VyFEripYslB%2BHKZp%2BbC58XcxnntA7h0l2vym0zOSx0dr0RexlwQKtSeIGsJiZf8dcZeDUCjvcou5vu4SDJ9EkKGtFJ9aIVXcUksZ3BtNHVLVeMY97AHImXWWaZ0eDqX%2F9JII1W1knXK8WKo%2BcWXbXbLwuiLV98oSMmmKVKOlwvDwTjbPcw%2F4GGbs2EZ7eC%2BpvUqk%2FNJmZcexrn%2BXoJfiyIxZ5FC4bOwIPk2ROc6J54gNUwQXS9yLULkxXehp3PpJU3FoimdLsrUgOX%2BxqfIhyfaHC6UB6cbGiEpyRYxR2vWCmN%2BlT3TazJmMRMPZhxwkoMTyoFepnUuZmH3JaNodxgRrdfry7ksVdzkKziqJGY6f2wOYyHvCV9Ek3MiKNXiIBLYsFSxTB%2FINanWuRszC1n0k%2BdsFP2QeZGvhXF7%2Fs%2Bh93hwHUBTWPBFeh6GDCQuK1i7yaRGHavBaSmE%2FJrb2NtjD19%2FjCBjqkAbCwx1%2FCVP8znul64UU9LyB3tJM%2BMO3%2Fp1H7WFE8LQPfyhr7CVMFs8P8wVGERdEJ0XWm5zpI9ykMEHjMD55NjW3wF5PhgkO8Odo%2BptsIyvQn%2F3CTB9ZfJRs5hqnMSJW1K%2F9R6KdO4iNvYcbn1ofbiAx7I05fDVZcJQpyyPmkXDVsAWdm86Gw23KXGiNRZ7PbzQB2c7X09XMXoA3ZrMwXF8h3i5qM&X-Amz-Signature=3a346431d6755f2988880aff8f66a00ff980048dc939296ba6fab8b15a5596cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STX2EUCU%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDdJUOVG3ok0%2Fj40cWIgvDggv4XSoiDfGl3arjqMf8I%2FAIhANUs88LeRDqjZXqttcszvdwsIKpZlkeSNyvOkjV4uVnDKv8DCHAQABoMNjM3NDIzMTgzODA1IgzjuQcq8IYPgzC5W7sq3AO%2FVQCcnBDt2rduxswaymQ9dnI3g4IzTcKylk5lNsX14E1IM3tdSaZkOIbEGsbahgOYrKNitM8tZrGl6eE%2Far25MnfgcNoiUVZ0WKZxICAGTaoGVblNfPyzX9fPGLgotRSR2qlJ0Vrf7hZ5cq5ct%2FunQJCbVI8ONcwcRB0VyFEripYslB%2BHKZp%2BbC58XcxnntA7h0l2vym0zOSx0dr0RexlwQKtSeIGsJiZf8dcZeDUCjvcou5vu4SDJ9EkKGtFJ9aIVXcUksZ3BtNHVLVeMY97AHImXWWaZ0eDqX%2F9JII1W1knXK8WKo%2BcWXbXbLwuiLV98oSMmmKVKOlwvDwTjbPcw%2F4GGbs2EZ7eC%2BpvUqk%2FNJmZcexrn%2BXoJfiyIxZ5FC4bOwIPk2ROc6J54gNUwQXS9yLULkxXehp3PpJU3FoimdLsrUgOX%2BxqfIhyfaHC6UB6cbGiEpyRYxR2vWCmN%2BlT3TazJmMRMPZhxwkoMTyoFepnUuZmH3JaNodxgRrdfry7ksVdzkKziqJGY6f2wOYyHvCV9Ek3MiKNXiIBLYsFSxTB%2FINanWuRszC1n0k%2BdsFP2QeZGvhXF7%2Fs%2Bh93hwHUBTWPBFeh6GDCQuK1i7yaRGHavBaSmE%2FJrb2NtjD19%2FjCBjqkAbCwx1%2FCVP8znul64UU9LyB3tJM%2BMO3%2Fp1H7WFE8LQPfyhr7CVMFs8P8wVGERdEJ0XWm5zpI9ykMEHjMD55NjW3wF5PhgkO8Odo%2BptsIyvQn%2F3CTB9ZfJRs5hqnMSJW1K%2F9R6KdO4iNvYcbn1ofbiAx7I05fDVZcJQpyyPmkXDVsAWdm86Gw23KXGiNRZ7PbzQB2c7X09XMXoA3ZrMwXF8h3i5qM&X-Amz-Signature=639dab1c032b9f2886a083c2cb52fcd54831620bf49b78ed8b1b13ad9acde704&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STX2EUCU%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDdJUOVG3ok0%2Fj40cWIgvDggv4XSoiDfGl3arjqMf8I%2FAIhANUs88LeRDqjZXqttcszvdwsIKpZlkeSNyvOkjV4uVnDKv8DCHAQABoMNjM3NDIzMTgzODA1IgzjuQcq8IYPgzC5W7sq3AO%2FVQCcnBDt2rduxswaymQ9dnI3g4IzTcKylk5lNsX14E1IM3tdSaZkOIbEGsbahgOYrKNitM8tZrGl6eE%2Far25MnfgcNoiUVZ0WKZxICAGTaoGVblNfPyzX9fPGLgotRSR2qlJ0Vrf7hZ5cq5ct%2FunQJCbVI8ONcwcRB0VyFEripYslB%2BHKZp%2BbC58XcxnntA7h0l2vym0zOSx0dr0RexlwQKtSeIGsJiZf8dcZeDUCjvcou5vu4SDJ9EkKGtFJ9aIVXcUksZ3BtNHVLVeMY97AHImXWWaZ0eDqX%2F9JII1W1knXK8WKo%2BcWXbXbLwuiLV98oSMmmKVKOlwvDwTjbPcw%2F4GGbs2EZ7eC%2BpvUqk%2FNJmZcexrn%2BXoJfiyIxZ5FC4bOwIPk2ROc6J54gNUwQXS9yLULkxXehp3PpJU3FoimdLsrUgOX%2BxqfIhyfaHC6UB6cbGiEpyRYxR2vWCmN%2BlT3TazJmMRMPZhxwkoMTyoFepnUuZmH3JaNodxgRrdfry7ksVdzkKziqJGY6f2wOYyHvCV9Ek3MiKNXiIBLYsFSxTB%2FINanWuRszC1n0k%2BdsFP2QeZGvhXF7%2Fs%2Bh93hwHUBTWPBFeh6GDCQuK1i7yaRGHavBaSmE%2FJrb2NtjD19%2FjCBjqkAbCwx1%2FCVP8znul64UU9LyB3tJM%2BMO3%2Fp1H7WFE8LQPfyhr7CVMFs8P8wVGERdEJ0XWm5zpI9ykMEHjMD55NjW3wF5PhgkO8Odo%2BptsIyvQn%2F3CTB9ZfJRs5hqnMSJW1K%2F9R6KdO4iNvYcbn1ofbiAx7I05fDVZcJQpyyPmkXDVsAWdm86Gw23KXGiNRZ7PbzQB2c7X09XMXoA3ZrMwXF8h3i5qM&X-Amz-Signature=9c89846a1977919b6663f80c1480dc58dd2347070911dc4b452032c6e4cd33f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
