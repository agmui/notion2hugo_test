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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV6IPTA7%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcpxUeIsa1E3ZmNJ4Xcq9QItbg16pUTRpy8eDKS8wZqgIhAInxiNfiiRiz43hLWYMUfvEVFxvf1PR8bG5VDgvIxVDaKv8DCEIQABoMNjM3NDIzMTgzODA1IgyiPZ7mrs%2FALqze0BIq3AOO9evJ8n93dVGu18fWwqdY3BRScvjhf6VMovHDIhkI4AJNtgOUGcVUXkcoks1OZB5AqsthBhZw%2BGZdF7EKqIsUffPkOyWCjDQ2BguQnX1FPGGGiG8ODwAbntgZmKprRNSQF4yjKqxbZhlXENK89zHqhmUDxeYn1cRPADWp6QqAthog4cfSRCGDORiNuMev%2B3xmSaGSHNF5CV0qH%2BLz%2BBu3lYaid5VIB%2F1o1KuemyJykoaa16wgcG6cffHtNxlQ69ybWatQhQ99Ro40%2FlRiqIoP6CaSPguntt8%2Btv07iymU598PZF5ilct1POLHXEh%2BVbCyDZR6%2BBI%2F5a8vxS63%2FhlmjE6SkuWK%2FfOYlUw26zW2qV6O%2FEYZZIPaSL9111IklFjhPl6Xc1magyuV1m6uqVsQYxrfFv1Z51sS5dJg6TL85s7aY6x3Yleix7h9OWNAvELS1OoA77tyKxce9SL7tmgWzv5K4pr5SNsDqI8OIPRDrRxXfKMlGpXI66KC0UpyrS99M7iyuY8h3q1uBavrm2HxtWhckHHckg8mEOlincnCpwm7By4RVrSkiw3UA3%2Fw0gb9v8hJjz21DiL%2FMPAB965aqCOths%2ByuGc%2F%2F5uoFY4jxhjrblE4J2E3t%2BVEJDC3%2Fsi%2FBjqkASTl1nsr0R2EHn7LGrH369NAjeNfUS9%2FNyPIQTVLaXkhZq7mNKQ%2F7lPbh2%2FVpd5%2BJjA29excdOyiRrV7%2BTJi1HbKR71r0iy5NQ%2FM0Oqcivknyv1GLZnbRV8K58WS4hKg7HqD6KK0vDm65w4bCRdzpihXuaN5jB5amwjje6oDKGI%2Bo%2BiFG%2BYXBTsOdhTX8MJo1GTPeOGOL6%2FGamRkwYWSadzztVTI&X-Amz-Signature=70692394e75a1bc77f3e17710cb54c8f615f38c7739437cbf238ad251a9b35c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV6IPTA7%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcpxUeIsa1E3ZmNJ4Xcq9QItbg16pUTRpy8eDKS8wZqgIhAInxiNfiiRiz43hLWYMUfvEVFxvf1PR8bG5VDgvIxVDaKv8DCEIQABoMNjM3NDIzMTgzODA1IgyiPZ7mrs%2FALqze0BIq3AOO9evJ8n93dVGu18fWwqdY3BRScvjhf6VMovHDIhkI4AJNtgOUGcVUXkcoks1OZB5AqsthBhZw%2BGZdF7EKqIsUffPkOyWCjDQ2BguQnX1FPGGGiG8ODwAbntgZmKprRNSQF4yjKqxbZhlXENK89zHqhmUDxeYn1cRPADWp6QqAthog4cfSRCGDORiNuMev%2B3xmSaGSHNF5CV0qH%2BLz%2BBu3lYaid5VIB%2F1o1KuemyJykoaa16wgcG6cffHtNxlQ69ybWatQhQ99Ro40%2FlRiqIoP6CaSPguntt8%2Btv07iymU598PZF5ilct1POLHXEh%2BVbCyDZR6%2BBI%2F5a8vxS63%2FhlmjE6SkuWK%2FfOYlUw26zW2qV6O%2FEYZZIPaSL9111IklFjhPl6Xc1magyuV1m6uqVsQYxrfFv1Z51sS5dJg6TL85s7aY6x3Yleix7h9OWNAvELS1OoA77tyKxce9SL7tmgWzv5K4pr5SNsDqI8OIPRDrRxXfKMlGpXI66KC0UpyrS99M7iyuY8h3q1uBavrm2HxtWhckHHckg8mEOlincnCpwm7By4RVrSkiw3UA3%2Fw0gb9v8hJjz21DiL%2FMPAB965aqCOths%2ByuGc%2F%2F5uoFY4jxhjrblE4J2E3t%2BVEJDC3%2Fsi%2FBjqkASTl1nsr0R2EHn7LGrH369NAjeNfUS9%2FNyPIQTVLaXkhZq7mNKQ%2F7lPbh2%2FVpd5%2BJjA29excdOyiRrV7%2BTJi1HbKR71r0iy5NQ%2FM0Oqcivknyv1GLZnbRV8K58WS4hKg7HqD6KK0vDm65w4bCRdzpihXuaN5jB5amwjje6oDKGI%2Bo%2BiFG%2BYXBTsOdhTX8MJo1GTPeOGOL6%2FGamRkwYWSadzztVTI&X-Amz-Signature=cb2138dcd43f5bee904a7cd1e7e6bef0106d9ae1bc60a84ff9f8dc834a791740&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV6IPTA7%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcpxUeIsa1E3ZmNJ4Xcq9QItbg16pUTRpy8eDKS8wZqgIhAInxiNfiiRiz43hLWYMUfvEVFxvf1PR8bG5VDgvIxVDaKv8DCEIQABoMNjM3NDIzMTgzODA1IgyiPZ7mrs%2FALqze0BIq3AOO9evJ8n93dVGu18fWwqdY3BRScvjhf6VMovHDIhkI4AJNtgOUGcVUXkcoks1OZB5AqsthBhZw%2BGZdF7EKqIsUffPkOyWCjDQ2BguQnX1FPGGGiG8ODwAbntgZmKprRNSQF4yjKqxbZhlXENK89zHqhmUDxeYn1cRPADWp6QqAthog4cfSRCGDORiNuMev%2B3xmSaGSHNF5CV0qH%2BLz%2BBu3lYaid5VIB%2F1o1KuemyJykoaa16wgcG6cffHtNxlQ69ybWatQhQ99Ro40%2FlRiqIoP6CaSPguntt8%2Btv07iymU598PZF5ilct1POLHXEh%2BVbCyDZR6%2BBI%2F5a8vxS63%2FhlmjE6SkuWK%2FfOYlUw26zW2qV6O%2FEYZZIPaSL9111IklFjhPl6Xc1magyuV1m6uqVsQYxrfFv1Z51sS5dJg6TL85s7aY6x3Yleix7h9OWNAvELS1OoA77tyKxce9SL7tmgWzv5K4pr5SNsDqI8OIPRDrRxXfKMlGpXI66KC0UpyrS99M7iyuY8h3q1uBavrm2HxtWhckHHckg8mEOlincnCpwm7By4RVrSkiw3UA3%2Fw0gb9v8hJjz21DiL%2FMPAB965aqCOths%2ByuGc%2F%2F5uoFY4jxhjrblE4J2E3t%2BVEJDC3%2Fsi%2FBjqkASTl1nsr0R2EHn7LGrH369NAjeNfUS9%2FNyPIQTVLaXkhZq7mNKQ%2F7lPbh2%2FVpd5%2BJjA29excdOyiRrV7%2BTJi1HbKR71r0iy5NQ%2FM0Oqcivknyv1GLZnbRV8K58WS4hKg7HqD6KK0vDm65w4bCRdzpihXuaN5jB5amwjje6oDKGI%2Bo%2BiFG%2BYXBTsOdhTX8MJo1GTPeOGOL6%2FGamRkwYWSadzztVTI&X-Amz-Signature=56edb85b6c12e9dd39efd7f2657777fea569245ca9b1143277281b2cd4360020&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV6IPTA7%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcpxUeIsa1E3ZmNJ4Xcq9QItbg16pUTRpy8eDKS8wZqgIhAInxiNfiiRiz43hLWYMUfvEVFxvf1PR8bG5VDgvIxVDaKv8DCEIQABoMNjM3NDIzMTgzODA1IgyiPZ7mrs%2FALqze0BIq3AOO9evJ8n93dVGu18fWwqdY3BRScvjhf6VMovHDIhkI4AJNtgOUGcVUXkcoks1OZB5AqsthBhZw%2BGZdF7EKqIsUffPkOyWCjDQ2BguQnX1FPGGGiG8ODwAbntgZmKprRNSQF4yjKqxbZhlXENK89zHqhmUDxeYn1cRPADWp6QqAthog4cfSRCGDORiNuMev%2B3xmSaGSHNF5CV0qH%2BLz%2BBu3lYaid5VIB%2F1o1KuemyJykoaa16wgcG6cffHtNxlQ69ybWatQhQ99Ro40%2FlRiqIoP6CaSPguntt8%2Btv07iymU598PZF5ilct1POLHXEh%2BVbCyDZR6%2BBI%2F5a8vxS63%2FhlmjE6SkuWK%2FfOYlUw26zW2qV6O%2FEYZZIPaSL9111IklFjhPl6Xc1magyuV1m6uqVsQYxrfFv1Z51sS5dJg6TL85s7aY6x3Yleix7h9OWNAvELS1OoA77tyKxce9SL7tmgWzv5K4pr5SNsDqI8OIPRDrRxXfKMlGpXI66KC0UpyrS99M7iyuY8h3q1uBavrm2HxtWhckHHckg8mEOlincnCpwm7By4RVrSkiw3UA3%2Fw0gb9v8hJjz21DiL%2FMPAB965aqCOths%2ByuGc%2F%2F5uoFY4jxhjrblE4J2E3t%2BVEJDC3%2Fsi%2FBjqkASTl1nsr0R2EHn7LGrH369NAjeNfUS9%2FNyPIQTVLaXkhZq7mNKQ%2F7lPbh2%2FVpd5%2BJjA29excdOyiRrV7%2BTJi1HbKR71r0iy5NQ%2FM0Oqcivknyv1GLZnbRV8K58WS4hKg7HqD6KK0vDm65w4bCRdzpihXuaN5jB5amwjje6oDKGI%2Bo%2BiFG%2BYXBTsOdhTX8MJo1GTPeOGOL6%2FGamRkwYWSadzztVTI&X-Amz-Signature=9dc306e5c3c337326b8bf2cbafa15cd66b009f1f05d4df74963f88450c7763fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV6IPTA7%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcpxUeIsa1E3ZmNJ4Xcq9QItbg16pUTRpy8eDKS8wZqgIhAInxiNfiiRiz43hLWYMUfvEVFxvf1PR8bG5VDgvIxVDaKv8DCEIQABoMNjM3NDIzMTgzODA1IgyiPZ7mrs%2FALqze0BIq3AOO9evJ8n93dVGu18fWwqdY3BRScvjhf6VMovHDIhkI4AJNtgOUGcVUXkcoks1OZB5AqsthBhZw%2BGZdF7EKqIsUffPkOyWCjDQ2BguQnX1FPGGGiG8ODwAbntgZmKprRNSQF4yjKqxbZhlXENK89zHqhmUDxeYn1cRPADWp6QqAthog4cfSRCGDORiNuMev%2B3xmSaGSHNF5CV0qH%2BLz%2BBu3lYaid5VIB%2F1o1KuemyJykoaa16wgcG6cffHtNxlQ69ybWatQhQ99Ro40%2FlRiqIoP6CaSPguntt8%2Btv07iymU598PZF5ilct1POLHXEh%2BVbCyDZR6%2BBI%2F5a8vxS63%2FhlmjE6SkuWK%2FfOYlUw26zW2qV6O%2FEYZZIPaSL9111IklFjhPl6Xc1magyuV1m6uqVsQYxrfFv1Z51sS5dJg6TL85s7aY6x3Yleix7h9OWNAvELS1OoA77tyKxce9SL7tmgWzv5K4pr5SNsDqI8OIPRDrRxXfKMlGpXI66KC0UpyrS99M7iyuY8h3q1uBavrm2HxtWhckHHckg8mEOlincnCpwm7By4RVrSkiw3UA3%2Fw0gb9v8hJjz21DiL%2FMPAB965aqCOths%2ByuGc%2F%2F5uoFY4jxhjrblE4J2E3t%2BVEJDC3%2Fsi%2FBjqkASTl1nsr0R2EHn7LGrH369NAjeNfUS9%2FNyPIQTVLaXkhZq7mNKQ%2F7lPbh2%2FVpd5%2BJjA29excdOyiRrV7%2BTJi1HbKR71r0iy5NQ%2FM0Oqcivknyv1GLZnbRV8K58WS4hKg7HqD6KK0vDm65w4bCRdzpihXuaN5jB5amwjje6oDKGI%2Bo%2BiFG%2BYXBTsOdhTX8MJo1GTPeOGOL6%2FGamRkwYWSadzztVTI&X-Amz-Signature=976e159e9f80d31b7270e37a9e4ef2506a686ed266aa9dc1fab3d326935adf05&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV6IPTA7%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcpxUeIsa1E3ZmNJ4Xcq9QItbg16pUTRpy8eDKS8wZqgIhAInxiNfiiRiz43hLWYMUfvEVFxvf1PR8bG5VDgvIxVDaKv8DCEIQABoMNjM3NDIzMTgzODA1IgyiPZ7mrs%2FALqze0BIq3AOO9evJ8n93dVGu18fWwqdY3BRScvjhf6VMovHDIhkI4AJNtgOUGcVUXkcoks1OZB5AqsthBhZw%2BGZdF7EKqIsUffPkOyWCjDQ2BguQnX1FPGGGiG8ODwAbntgZmKprRNSQF4yjKqxbZhlXENK89zHqhmUDxeYn1cRPADWp6QqAthog4cfSRCGDORiNuMev%2B3xmSaGSHNF5CV0qH%2BLz%2BBu3lYaid5VIB%2F1o1KuemyJykoaa16wgcG6cffHtNxlQ69ybWatQhQ99Ro40%2FlRiqIoP6CaSPguntt8%2Btv07iymU598PZF5ilct1POLHXEh%2BVbCyDZR6%2BBI%2F5a8vxS63%2FhlmjE6SkuWK%2FfOYlUw26zW2qV6O%2FEYZZIPaSL9111IklFjhPl6Xc1magyuV1m6uqVsQYxrfFv1Z51sS5dJg6TL85s7aY6x3Yleix7h9OWNAvELS1OoA77tyKxce9SL7tmgWzv5K4pr5SNsDqI8OIPRDrRxXfKMlGpXI66KC0UpyrS99M7iyuY8h3q1uBavrm2HxtWhckHHckg8mEOlincnCpwm7By4RVrSkiw3UA3%2Fw0gb9v8hJjz21DiL%2FMPAB965aqCOths%2ByuGc%2F%2F5uoFY4jxhjrblE4J2E3t%2BVEJDC3%2Fsi%2FBjqkASTl1nsr0R2EHn7LGrH369NAjeNfUS9%2FNyPIQTVLaXkhZq7mNKQ%2F7lPbh2%2FVpd5%2BJjA29excdOyiRrV7%2BTJi1HbKR71r0iy5NQ%2FM0Oqcivknyv1GLZnbRV8K58WS4hKg7HqD6KK0vDm65w4bCRdzpihXuaN5jB5amwjje6oDKGI%2Bo%2BiFG%2BYXBTsOdhTX8MJo1GTPeOGOL6%2FGamRkwYWSadzztVTI&X-Amz-Signature=119e767a9ca600016e928326f680ebf3ed745165495f92017049ca6750d7e6be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV6IPTA7%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcpxUeIsa1E3ZmNJ4Xcq9QItbg16pUTRpy8eDKS8wZqgIhAInxiNfiiRiz43hLWYMUfvEVFxvf1PR8bG5VDgvIxVDaKv8DCEIQABoMNjM3NDIzMTgzODA1IgyiPZ7mrs%2FALqze0BIq3AOO9evJ8n93dVGu18fWwqdY3BRScvjhf6VMovHDIhkI4AJNtgOUGcVUXkcoks1OZB5AqsthBhZw%2BGZdF7EKqIsUffPkOyWCjDQ2BguQnX1FPGGGiG8ODwAbntgZmKprRNSQF4yjKqxbZhlXENK89zHqhmUDxeYn1cRPADWp6QqAthog4cfSRCGDORiNuMev%2B3xmSaGSHNF5CV0qH%2BLz%2BBu3lYaid5VIB%2F1o1KuemyJykoaa16wgcG6cffHtNxlQ69ybWatQhQ99Ro40%2FlRiqIoP6CaSPguntt8%2Btv07iymU598PZF5ilct1POLHXEh%2BVbCyDZR6%2BBI%2F5a8vxS63%2FhlmjE6SkuWK%2FfOYlUw26zW2qV6O%2FEYZZIPaSL9111IklFjhPl6Xc1magyuV1m6uqVsQYxrfFv1Z51sS5dJg6TL85s7aY6x3Yleix7h9OWNAvELS1OoA77tyKxce9SL7tmgWzv5K4pr5SNsDqI8OIPRDrRxXfKMlGpXI66KC0UpyrS99M7iyuY8h3q1uBavrm2HxtWhckHHckg8mEOlincnCpwm7By4RVrSkiw3UA3%2Fw0gb9v8hJjz21DiL%2FMPAB965aqCOths%2ByuGc%2F%2F5uoFY4jxhjrblE4J2E3t%2BVEJDC3%2Fsi%2FBjqkASTl1nsr0R2EHn7LGrH369NAjeNfUS9%2FNyPIQTVLaXkhZq7mNKQ%2F7lPbh2%2FVpd5%2BJjA29excdOyiRrV7%2BTJi1HbKR71r0iy5NQ%2FM0Oqcivknyv1GLZnbRV8K58WS4hKg7HqD6KK0vDm65w4bCRdzpihXuaN5jB5amwjje6oDKGI%2Bo%2BiFG%2BYXBTsOdhTX8MJo1GTPeOGOL6%2FGamRkwYWSadzztVTI&X-Amz-Signature=b92c9c644ba9bbaef38c26cd330b114bb7b9f0a13f17c8a344285e9090f91e9c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV6IPTA7%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcpxUeIsa1E3ZmNJ4Xcq9QItbg16pUTRpy8eDKS8wZqgIhAInxiNfiiRiz43hLWYMUfvEVFxvf1PR8bG5VDgvIxVDaKv8DCEIQABoMNjM3NDIzMTgzODA1IgyiPZ7mrs%2FALqze0BIq3AOO9evJ8n93dVGu18fWwqdY3BRScvjhf6VMovHDIhkI4AJNtgOUGcVUXkcoks1OZB5AqsthBhZw%2BGZdF7EKqIsUffPkOyWCjDQ2BguQnX1FPGGGiG8ODwAbntgZmKprRNSQF4yjKqxbZhlXENK89zHqhmUDxeYn1cRPADWp6QqAthog4cfSRCGDORiNuMev%2B3xmSaGSHNF5CV0qH%2BLz%2BBu3lYaid5VIB%2F1o1KuemyJykoaa16wgcG6cffHtNxlQ69ybWatQhQ99Ro40%2FlRiqIoP6CaSPguntt8%2Btv07iymU598PZF5ilct1POLHXEh%2BVbCyDZR6%2BBI%2F5a8vxS63%2FhlmjE6SkuWK%2FfOYlUw26zW2qV6O%2FEYZZIPaSL9111IklFjhPl6Xc1magyuV1m6uqVsQYxrfFv1Z51sS5dJg6TL85s7aY6x3Yleix7h9OWNAvELS1OoA77tyKxce9SL7tmgWzv5K4pr5SNsDqI8OIPRDrRxXfKMlGpXI66KC0UpyrS99M7iyuY8h3q1uBavrm2HxtWhckHHckg8mEOlincnCpwm7By4RVrSkiw3UA3%2Fw0gb9v8hJjz21DiL%2FMPAB965aqCOths%2ByuGc%2F%2F5uoFY4jxhjrblE4J2E3t%2BVEJDC3%2Fsi%2FBjqkASTl1nsr0R2EHn7LGrH369NAjeNfUS9%2FNyPIQTVLaXkhZq7mNKQ%2F7lPbh2%2FVpd5%2BJjA29excdOyiRrV7%2BTJi1HbKR71r0iy5NQ%2FM0Oqcivknyv1GLZnbRV8K58WS4hKg7HqD6KK0vDm65w4bCRdzpihXuaN5jB5amwjje6oDKGI%2Bo%2BiFG%2BYXBTsOdhTX8MJo1GTPeOGOL6%2FGamRkwYWSadzztVTI&X-Amz-Signature=3da18ad59085725cdd6d11b1f90adb4c178eeaea549d3149b7ecbdf9eab33b87&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
