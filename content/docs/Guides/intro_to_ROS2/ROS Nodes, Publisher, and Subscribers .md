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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466645U4M2Z%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSgEumztjKv3DtBI7bukNfJ8bcNjsqfv8c3RsC8o99VAiEAomktGaXISycSP6XQIXZxHjrk00JnRPuq38t7pn670tsqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcQsFgiKVGz9PUrASrcAzQbD0DH72TKbFl9dkOX3%2F7a0oqkccWuw1Hlr33I3HF95JOgCmJnQuTS7PyWiFIE1n%2FvFw0bQJMpl6N%2FYQRSb%2Bxwc%2BtpM7PgEypSWKbKHsTBO67kG1KPIsY5YUh1lewjVpjoy5ziJVVfJVbCjAD3778IEUtBpte0o4gFagp5kQaa23QW303Uuqb25qbeM5JuBIpEt6mvzuB04tqSdDlUWNzBAXLZ3JYsJaN1IPCv0Fge096%2BL2pPdm1sG4%2FFKyyIRIkVoSYaSVxLkp5AMTv4kAOkOqKTN11Z46M4EHWog2mHzG7n3CW0ff76kHS6IB4Vzgg%2Bq8O%2BJyt2PwDQZWBAirjDRTWTtMXi69OZeq%2FCrJN0QrJgW1G4x9XwFfJ1wdO2iFrgZZbYTMjkFpuJvjiCtmyIulnypXgsSvCnk4HpbNUDYMkwoLY15dNnjXd9j%2BhCmEI8%2BKP0%2BfZkjvJ3uxqMsMbVHIvNcKCRQpBxIfuBEldkEQbxL4rCmjwou6GpRLKaL8x73ti6b087ajavc9wFJMiMqp0KHcbamjZBkq2YBBpcKPQ2CGS1OGminnBIyeLPwaM3bf%2Fnd2REIC0KUhv%2FAuvGC57ep%2Fi38bzIvJ9Ic9Pnr5CWzc8kwQEEB%2BGSMIX8jMAGOqUBQuIRNGCYj%2FKnsVZtv4voSR5lvxX0IzwE3qFLCKz3FJ4NthsCXR5YJWr1E5kd8RFZhtukBCHSC1%2B%2F%2BoQKQ1lKl7sOcjj2Y4cxaBYUDeoM3u6GS8ep1qQ3fqaTGutufuTdI8BkaGo95zn0rtmKhXqnnNE60h7KDautJ%2BMYYdFnIzUkSTyp8d4n5KkEysta2B%2FkEFq94P6hBSrfK%2FB3DC9bL7%2F7iKtI&X-Amz-Signature=ec920987c234e6bb408d813f3277a5ea28dcb96a9d5e9732c8e6587daa3e97fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466645U4M2Z%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSgEumztjKv3DtBI7bukNfJ8bcNjsqfv8c3RsC8o99VAiEAomktGaXISycSP6XQIXZxHjrk00JnRPuq38t7pn670tsqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcQsFgiKVGz9PUrASrcAzQbD0DH72TKbFl9dkOX3%2F7a0oqkccWuw1Hlr33I3HF95JOgCmJnQuTS7PyWiFIE1n%2FvFw0bQJMpl6N%2FYQRSb%2Bxwc%2BtpM7PgEypSWKbKHsTBO67kG1KPIsY5YUh1lewjVpjoy5ziJVVfJVbCjAD3778IEUtBpte0o4gFagp5kQaa23QW303Uuqb25qbeM5JuBIpEt6mvzuB04tqSdDlUWNzBAXLZ3JYsJaN1IPCv0Fge096%2BL2pPdm1sG4%2FFKyyIRIkVoSYaSVxLkp5AMTv4kAOkOqKTN11Z46M4EHWog2mHzG7n3CW0ff76kHS6IB4Vzgg%2Bq8O%2BJyt2PwDQZWBAirjDRTWTtMXi69OZeq%2FCrJN0QrJgW1G4x9XwFfJ1wdO2iFrgZZbYTMjkFpuJvjiCtmyIulnypXgsSvCnk4HpbNUDYMkwoLY15dNnjXd9j%2BhCmEI8%2BKP0%2BfZkjvJ3uxqMsMbVHIvNcKCRQpBxIfuBEldkEQbxL4rCmjwou6GpRLKaL8x73ti6b087ajavc9wFJMiMqp0KHcbamjZBkq2YBBpcKPQ2CGS1OGminnBIyeLPwaM3bf%2Fnd2REIC0KUhv%2FAuvGC57ep%2Fi38bzIvJ9Ic9Pnr5CWzc8kwQEEB%2BGSMIX8jMAGOqUBQuIRNGCYj%2FKnsVZtv4voSR5lvxX0IzwE3qFLCKz3FJ4NthsCXR5YJWr1E5kd8RFZhtukBCHSC1%2B%2F%2BoQKQ1lKl7sOcjj2Y4cxaBYUDeoM3u6GS8ep1qQ3fqaTGutufuTdI8BkaGo95zn0rtmKhXqnnNE60h7KDautJ%2BMYYdFnIzUkSTyp8d4n5KkEysta2B%2FkEFq94P6hBSrfK%2FB3DC9bL7%2F7iKtI&X-Amz-Signature=d5f75da25c74fb372b72538eb3e46088ab0b902164a955641928e38cf2616df3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466645U4M2Z%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSgEumztjKv3DtBI7bukNfJ8bcNjsqfv8c3RsC8o99VAiEAomktGaXISycSP6XQIXZxHjrk00JnRPuq38t7pn670tsqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcQsFgiKVGz9PUrASrcAzQbD0DH72TKbFl9dkOX3%2F7a0oqkccWuw1Hlr33I3HF95JOgCmJnQuTS7PyWiFIE1n%2FvFw0bQJMpl6N%2FYQRSb%2Bxwc%2BtpM7PgEypSWKbKHsTBO67kG1KPIsY5YUh1lewjVpjoy5ziJVVfJVbCjAD3778IEUtBpte0o4gFagp5kQaa23QW303Uuqb25qbeM5JuBIpEt6mvzuB04tqSdDlUWNzBAXLZ3JYsJaN1IPCv0Fge096%2BL2pPdm1sG4%2FFKyyIRIkVoSYaSVxLkp5AMTv4kAOkOqKTN11Z46M4EHWog2mHzG7n3CW0ff76kHS6IB4Vzgg%2Bq8O%2BJyt2PwDQZWBAirjDRTWTtMXi69OZeq%2FCrJN0QrJgW1G4x9XwFfJ1wdO2iFrgZZbYTMjkFpuJvjiCtmyIulnypXgsSvCnk4HpbNUDYMkwoLY15dNnjXd9j%2BhCmEI8%2BKP0%2BfZkjvJ3uxqMsMbVHIvNcKCRQpBxIfuBEldkEQbxL4rCmjwou6GpRLKaL8x73ti6b087ajavc9wFJMiMqp0KHcbamjZBkq2YBBpcKPQ2CGS1OGminnBIyeLPwaM3bf%2Fnd2REIC0KUhv%2FAuvGC57ep%2Fi38bzIvJ9Ic9Pnr5CWzc8kwQEEB%2BGSMIX8jMAGOqUBQuIRNGCYj%2FKnsVZtv4voSR5lvxX0IzwE3qFLCKz3FJ4NthsCXR5YJWr1E5kd8RFZhtukBCHSC1%2B%2F%2BoQKQ1lKl7sOcjj2Y4cxaBYUDeoM3u6GS8ep1qQ3fqaTGutufuTdI8BkaGo95zn0rtmKhXqnnNE60h7KDautJ%2BMYYdFnIzUkSTyp8d4n5KkEysta2B%2FkEFq94P6hBSrfK%2FB3DC9bL7%2F7iKtI&X-Amz-Signature=b593e1577ba4d509f018eeb21bea0fe1ead2673cf076aab8fc47a6b939c4f898&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466645U4M2Z%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSgEumztjKv3DtBI7bukNfJ8bcNjsqfv8c3RsC8o99VAiEAomktGaXISycSP6XQIXZxHjrk00JnRPuq38t7pn670tsqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcQsFgiKVGz9PUrASrcAzQbD0DH72TKbFl9dkOX3%2F7a0oqkccWuw1Hlr33I3HF95JOgCmJnQuTS7PyWiFIE1n%2FvFw0bQJMpl6N%2FYQRSb%2Bxwc%2BtpM7PgEypSWKbKHsTBO67kG1KPIsY5YUh1lewjVpjoy5ziJVVfJVbCjAD3778IEUtBpte0o4gFagp5kQaa23QW303Uuqb25qbeM5JuBIpEt6mvzuB04tqSdDlUWNzBAXLZ3JYsJaN1IPCv0Fge096%2BL2pPdm1sG4%2FFKyyIRIkVoSYaSVxLkp5AMTv4kAOkOqKTN11Z46M4EHWog2mHzG7n3CW0ff76kHS6IB4Vzgg%2Bq8O%2BJyt2PwDQZWBAirjDRTWTtMXi69OZeq%2FCrJN0QrJgW1G4x9XwFfJ1wdO2iFrgZZbYTMjkFpuJvjiCtmyIulnypXgsSvCnk4HpbNUDYMkwoLY15dNnjXd9j%2BhCmEI8%2BKP0%2BfZkjvJ3uxqMsMbVHIvNcKCRQpBxIfuBEldkEQbxL4rCmjwou6GpRLKaL8x73ti6b087ajavc9wFJMiMqp0KHcbamjZBkq2YBBpcKPQ2CGS1OGminnBIyeLPwaM3bf%2Fnd2REIC0KUhv%2FAuvGC57ep%2Fi38bzIvJ9Ic9Pnr5CWzc8kwQEEB%2BGSMIX8jMAGOqUBQuIRNGCYj%2FKnsVZtv4voSR5lvxX0IzwE3qFLCKz3FJ4NthsCXR5YJWr1E5kd8RFZhtukBCHSC1%2B%2F%2BoQKQ1lKl7sOcjj2Y4cxaBYUDeoM3u6GS8ep1qQ3fqaTGutufuTdI8BkaGo95zn0rtmKhXqnnNE60h7KDautJ%2BMYYdFnIzUkSTyp8d4n5KkEysta2B%2FkEFq94P6hBSrfK%2FB3DC9bL7%2F7iKtI&X-Amz-Signature=b676c56602b0a6765567eb24ea2572ef558f52af2e2bf77ecc1e66e5c92d3f20&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466645U4M2Z%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSgEumztjKv3DtBI7bukNfJ8bcNjsqfv8c3RsC8o99VAiEAomktGaXISycSP6XQIXZxHjrk00JnRPuq38t7pn670tsqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcQsFgiKVGz9PUrASrcAzQbD0DH72TKbFl9dkOX3%2F7a0oqkccWuw1Hlr33I3HF95JOgCmJnQuTS7PyWiFIE1n%2FvFw0bQJMpl6N%2FYQRSb%2Bxwc%2BtpM7PgEypSWKbKHsTBO67kG1KPIsY5YUh1lewjVpjoy5ziJVVfJVbCjAD3778IEUtBpte0o4gFagp5kQaa23QW303Uuqb25qbeM5JuBIpEt6mvzuB04tqSdDlUWNzBAXLZ3JYsJaN1IPCv0Fge096%2BL2pPdm1sG4%2FFKyyIRIkVoSYaSVxLkp5AMTv4kAOkOqKTN11Z46M4EHWog2mHzG7n3CW0ff76kHS6IB4Vzgg%2Bq8O%2BJyt2PwDQZWBAirjDRTWTtMXi69OZeq%2FCrJN0QrJgW1G4x9XwFfJ1wdO2iFrgZZbYTMjkFpuJvjiCtmyIulnypXgsSvCnk4HpbNUDYMkwoLY15dNnjXd9j%2BhCmEI8%2BKP0%2BfZkjvJ3uxqMsMbVHIvNcKCRQpBxIfuBEldkEQbxL4rCmjwou6GpRLKaL8x73ti6b087ajavc9wFJMiMqp0KHcbamjZBkq2YBBpcKPQ2CGS1OGminnBIyeLPwaM3bf%2Fnd2REIC0KUhv%2FAuvGC57ep%2Fi38bzIvJ9Ic9Pnr5CWzc8kwQEEB%2BGSMIX8jMAGOqUBQuIRNGCYj%2FKnsVZtv4voSR5lvxX0IzwE3qFLCKz3FJ4NthsCXR5YJWr1E5kd8RFZhtukBCHSC1%2B%2F%2BoQKQ1lKl7sOcjj2Y4cxaBYUDeoM3u6GS8ep1qQ3fqaTGutufuTdI8BkaGo95zn0rtmKhXqnnNE60h7KDautJ%2BMYYdFnIzUkSTyp8d4n5KkEysta2B%2FkEFq94P6hBSrfK%2FB3DC9bL7%2F7iKtI&X-Amz-Signature=6bf05341b1453395e696df1ce3491469d2e9e4db04f720f5f7dd45812986102e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466645U4M2Z%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSgEumztjKv3DtBI7bukNfJ8bcNjsqfv8c3RsC8o99VAiEAomktGaXISycSP6XQIXZxHjrk00JnRPuq38t7pn670tsqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcQsFgiKVGz9PUrASrcAzQbD0DH72TKbFl9dkOX3%2F7a0oqkccWuw1Hlr33I3HF95JOgCmJnQuTS7PyWiFIE1n%2FvFw0bQJMpl6N%2FYQRSb%2Bxwc%2BtpM7PgEypSWKbKHsTBO67kG1KPIsY5YUh1lewjVpjoy5ziJVVfJVbCjAD3778IEUtBpte0o4gFagp5kQaa23QW303Uuqb25qbeM5JuBIpEt6mvzuB04tqSdDlUWNzBAXLZ3JYsJaN1IPCv0Fge096%2BL2pPdm1sG4%2FFKyyIRIkVoSYaSVxLkp5AMTv4kAOkOqKTN11Z46M4EHWog2mHzG7n3CW0ff76kHS6IB4Vzgg%2Bq8O%2BJyt2PwDQZWBAirjDRTWTtMXi69OZeq%2FCrJN0QrJgW1G4x9XwFfJ1wdO2iFrgZZbYTMjkFpuJvjiCtmyIulnypXgsSvCnk4HpbNUDYMkwoLY15dNnjXd9j%2BhCmEI8%2BKP0%2BfZkjvJ3uxqMsMbVHIvNcKCRQpBxIfuBEldkEQbxL4rCmjwou6GpRLKaL8x73ti6b087ajavc9wFJMiMqp0KHcbamjZBkq2YBBpcKPQ2CGS1OGminnBIyeLPwaM3bf%2Fnd2REIC0KUhv%2FAuvGC57ep%2Fi38bzIvJ9Ic9Pnr5CWzc8kwQEEB%2BGSMIX8jMAGOqUBQuIRNGCYj%2FKnsVZtv4voSR5lvxX0IzwE3qFLCKz3FJ4NthsCXR5YJWr1E5kd8RFZhtukBCHSC1%2B%2F%2BoQKQ1lKl7sOcjj2Y4cxaBYUDeoM3u6GS8ep1qQ3fqaTGutufuTdI8BkaGo95zn0rtmKhXqnnNE60h7KDautJ%2BMYYdFnIzUkSTyp8d4n5KkEysta2B%2FkEFq94P6hBSrfK%2FB3DC9bL7%2F7iKtI&X-Amz-Signature=7c015a02f4520ca8f31ab17f73e725673c444da5acafc79f090b9131f871af8e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466645U4M2Z%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSgEumztjKv3DtBI7bukNfJ8bcNjsqfv8c3RsC8o99VAiEAomktGaXISycSP6XQIXZxHjrk00JnRPuq38t7pn670tsqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcQsFgiKVGz9PUrASrcAzQbD0DH72TKbFl9dkOX3%2F7a0oqkccWuw1Hlr33I3HF95JOgCmJnQuTS7PyWiFIE1n%2FvFw0bQJMpl6N%2FYQRSb%2Bxwc%2BtpM7PgEypSWKbKHsTBO67kG1KPIsY5YUh1lewjVpjoy5ziJVVfJVbCjAD3778IEUtBpte0o4gFagp5kQaa23QW303Uuqb25qbeM5JuBIpEt6mvzuB04tqSdDlUWNzBAXLZ3JYsJaN1IPCv0Fge096%2BL2pPdm1sG4%2FFKyyIRIkVoSYaSVxLkp5AMTv4kAOkOqKTN11Z46M4EHWog2mHzG7n3CW0ff76kHS6IB4Vzgg%2Bq8O%2BJyt2PwDQZWBAirjDRTWTtMXi69OZeq%2FCrJN0QrJgW1G4x9XwFfJ1wdO2iFrgZZbYTMjkFpuJvjiCtmyIulnypXgsSvCnk4HpbNUDYMkwoLY15dNnjXd9j%2BhCmEI8%2BKP0%2BfZkjvJ3uxqMsMbVHIvNcKCRQpBxIfuBEldkEQbxL4rCmjwou6GpRLKaL8x73ti6b087ajavc9wFJMiMqp0KHcbamjZBkq2YBBpcKPQ2CGS1OGminnBIyeLPwaM3bf%2Fnd2REIC0KUhv%2FAuvGC57ep%2Fi38bzIvJ9Ic9Pnr5CWzc8kwQEEB%2BGSMIX8jMAGOqUBQuIRNGCYj%2FKnsVZtv4voSR5lvxX0IzwE3qFLCKz3FJ4NthsCXR5YJWr1E5kd8RFZhtukBCHSC1%2B%2F%2BoQKQ1lKl7sOcjj2Y4cxaBYUDeoM3u6GS8ep1qQ3fqaTGutufuTdI8BkaGo95zn0rtmKhXqnnNE60h7KDautJ%2BMYYdFnIzUkSTyp8d4n5KkEysta2B%2FkEFq94P6hBSrfK%2FB3DC9bL7%2F7iKtI&X-Amz-Signature=943d1de4f0d33e1ba9c0daad4dd32e80b17344f82b039f894e43b1d258b9faea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466645U4M2Z%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSgEumztjKv3DtBI7bukNfJ8bcNjsqfv8c3RsC8o99VAiEAomktGaXISycSP6XQIXZxHjrk00JnRPuq38t7pn670tsqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcQsFgiKVGz9PUrASrcAzQbD0DH72TKbFl9dkOX3%2F7a0oqkccWuw1Hlr33I3HF95JOgCmJnQuTS7PyWiFIE1n%2FvFw0bQJMpl6N%2FYQRSb%2Bxwc%2BtpM7PgEypSWKbKHsTBO67kG1KPIsY5YUh1lewjVpjoy5ziJVVfJVbCjAD3778IEUtBpte0o4gFagp5kQaa23QW303Uuqb25qbeM5JuBIpEt6mvzuB04tqSdDlUWNzBAXLZ3JYsJaN1IPCv0Fge096%2BL2pPdm1sG4%2FFKyyIRIkVoSYaSVxLkp5AMTv4kAOkOqKTN11Z46M4EHWog2mHzG7n3CW0ff76kHS6IB4Vzgg%2Bq8O%2BJyt2PwDQZWBAirjDRTWTtMXi69OZeq%2FCrJN0QrJgW1G4x9XwFfJ1wdO2iFrgZZbYTMjkFpuJvjiCtmyIulnypXgsSvCnk4HpbNUDYMkwoLY15dNnjXd9j%2BhCmEI8%2BKP0%2BfZkjvJ3uxqMsMbVHIvNcKCRQpBxIfuBEldkEQbxL4rCmjwou6GpRLKaL8x73ti6b087ajavc9wFJMiMqp0KHcbamjZBkq2YBBpcKPQ2CGS1OGminnBIyeLPwaM3bf%2Fnd2REIC0KUhv%2FAuvGC57ep%2Fi38bzIvJ9Ic9Pnr5CWzc8kwQEEB%2BGSMIX8jMAGOqUBQuIRNGCYj%2FKnsVZtv4voSR5lvxX0IzwE3qFLCKz3FJ4NthsCXR5YJWr1E5kd8RFZhtukBCHSC1%2B%2F%2BoQKQ1lKl7sOcjj2Y4cxaBYUDeoM3u6GS8ep1qQ3fqaTGutufuTdI8BkaGo95zn0rtmKhXqnnNE60h7KDautJ%2BMYYdFnIzUkSTyp8d4n5KkEysta2B%2FkEFq94P6hBSrfK%2FB3DC9bL7%2F7iKtI&X-Amz-Signature=d318226aad5974b6d72698287d7d20b894762b74285e4289f8d5851b3d1f0f11&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
