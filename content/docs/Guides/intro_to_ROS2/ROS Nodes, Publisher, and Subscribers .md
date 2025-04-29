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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RWSEJO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBVHCIu7IhXOZ3f%2FnVFn%2FS98Vw5pOPpnYy%2Ftz%2FTauc7AIhAI2u28DQ9fj2haMNvmFkZCvYu2lhREIr4FONzlqm1ySCKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIln3cANIuubQrD4Aq3AORArrlQhzhsTKKdq3vvYxfabuTuuLBO1B5dRUKssDASEIFM9JUkEf26X5Dufjn2DfQAlUQHj%2FL0e4wD7BAFY6Icc5UlUzrAcIuXsUwJrMcPk6WD3EtX7jXu2p0OvEo2U%2BvuOf7MmkYwectbCiTTTsx3aWiPNbQKyvvpmkowgXJ7Q5t2pr10FVMdMdv7XEMqwnXe7bnXAqS1IJOkfKxv6aEHX0hXcbOJUebTKlhPtdkTY6AQRsM9JPH%2FLZ1xa8ZdfQEHKlWhwOMXbrrzZBvUxmSMgcrncN27z5%2FpOKVouyxaoLmhTFZDJcCCl7jdSLknSOKYHTFU4e%2FL5rASEXOwC7Q%2FFc1LMcFTrCgNdf0PUIyhaDZcY57YL0SWv1GpKgGt0nPjsV%2F278m3gIDOLUP0kaglItxOKnUP4tILFhs9kqQXpV%2B6beqoFdr5U0KV9hK0Z5jvsEW2sdojIycz0wPV9x8mr8W32ujnzB%2FdQ80HvDYdPEDIUE3ZpzuDh7PA4zt78otDVfFIItLS%2FBBrPsVC0t3BwCIXDiVzJMCtqIm2a8V3sVtoKJ39kXKckIe8by%2B6Q%2FlcreyCwALNXjoiqmdgSEn5uG2IB0gsmNilISIKa%2FzYn3qkhelQ8fbvauBrTCAz8TABjqkAViYy%2FbES7tRPMyGGecSEZJrlvsiKTtlsqByoiw%2BzpWpZMmmAqadcrbWApYUgl%2FzndXdei7f2jHJuLjwBO8SZIB5OhA6Sjod5PtxVwZilrrahQ5tVI1cJxSpwLvAKziFTSPXfnGzNuVCM5C4hDa3IZm5oYcqKt3PqqGIJcI4WthiIACTJy5vEE1pUMrP%2B%2B4X3uDdp1SCtYjFKpiHNCHFUBaxeSqV&X-Amz-Signature=6fd8199948c22464e3034d9b120b7fca06e7c25f04ce96a26da18c28ace1e203&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RWSEJO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBVHCIu7IhXOZ3f%2FnVFn%2FS98Vw5pOPpnYy%2Ftz%2FTauc7AIhAI2u28DQ9fj2haMNvmFkZCvYu2lhREIr4FONzlqm1ySCKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIln3cANIuubQrD4Aq3AORArrlQhzhsTKKdq3vvYxfabuTuuLBO1B5dRUKssDASEIFM9JUkEf26X5Dufjn2DfQAlUQHj%2FL0e4wD7BAFY6Icc5UlUzrAcIuXsUwJrMcPk6WD3EtX7jXu2p0OvEo2U%2BvuOf7MmkYwectbCiTTTsx3aWiPNbQKyvvpmkowgXJ7Q5t2pr10FVMdMdv7XEMqwnXe7bnXAqS1IJOkfKxv6aEHX0hXcbOJUebTKlhPtdkTY6AQRsM9JPH%2FLZ1xa8ZdfQEHKlWhwOMXbrrzZBvUxmSMgcrncN27z5%2FpOKVouyxaoLmhTFZDJcCCl7jdSLknSOKYHTFU4e%2FL5rASEXOwC7Q%2FFc1LMcFTrCgNdf0PUIyhaDZcY57YL0SWv1GpKgGt0nPjsV%2F278m3gIDOLUP0kaglItxOKnUP4tILFhs9kqQXpV%2B6beqoFdr5U0KV9hK0Z5jvsEW2sdojIycz0wPV9x8mr8W32ujnzB%2FdQ80HvDYdPEDIUE3ZpzuDh7PA4zt78otDVfFIItLS%2FBBrPsVC0t3BwCIXDiVzJMCtqIm2a8V3sVtoKJ39kXKckIe8by%2B6Q%2FlcreyCwALNXjoiqmdgSEn5uG2IB0gsmNilISIKa%2FzYn3qkhelQ8fbvauBrTCAz8TABjqkAViYy%2FbES7tRPMyGGecSEZJrlvsiKTtlsqByoiw%2BzpWpZMmmAqadcrbWApYUgl%2FzndXdei7f2jHJuLjwBO8SZIB5OhA6Sjod5PtxVwZilrrahQ5tVI1cJxSpwLvAKziFTSPXfnGzNuVCM5C4hDa3IZm5oYcqKt3PqqGIJcI4WthiIACTJy5vEE1pUMrP%2B%2B4X3uDdp1SCtYjFKpiHNCHFUBaxeSqV&X-Amz-Signature=2314725ac1f1a1dc913f6493bf441e59def2e75e11aa2f6e00d6e6c2e3a303a6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RWSEJO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBVHCIu7IhXOZ3f%2FnVFn%2FS98Vw5pOPpnYy%2Ftz%2FTauc7AIhAI2u28DQ9fj2haMNvmFkZCvYu2lhREIr4FONzlqm1ySCKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIln3cANIuubQrD4Aq3AORArrlQhzhsTKKdq3vvYxfabuTuuLBO1B5dRUKssDASEIFM9JUkEf26X5Dufjn2DfQAlUQHj%2FL0e4wD7BAFY6Icc5UlUzrAcIuXsUwJrMcPk6WD3EtX7jXu2p0OvEo2U%2BvuOf7MmkYwectbCiTTTsx3aWiPNbQKyvvpmkowgXJ7Q5t2pr10FVMdMdv7XEMqwnXe7bnXAqS1IJOkfKxv6aEHX0hXcbOJUebTKlhPtdkTY6AQRsM9JPH%2FLZ1xa8ZdfQEHKlWhwOMXbrrzZBvUxmSMgcrncN27z5%2FpOKVouyxaoLmhTFZDJcCCl7jdSLknSOKYHTFU4e%2FL5rASEXOwC7Q%2FFc1LMcFTrCgNdf0PUIyhaDZcY57YL0SWv1GpKgGt0nPjsV%2F278m3gIDOLUP0kaglItxOKnUP4tILFhs9kqQXpV%2B6beqoFdr5U0KV9hK0Z5jvsEW2sdojIycz0wPV9x8mr8W32ujnzB%2FdQ80HvDYdPEDIUE3ZpzuDh7PA4zt78otDVfFIItLS%2FBBrPsVC0t3BwCIXDiVzJMCtqIm2a8V3sVtoKJ39kXKckIe8by%2B6Q%2FlcreyCwALNXjoiqmdgSEn5uG2IB0gsmNilISIKa%2FzYn3qkhelQ8fbvauBrTCAz8TABjqkAViYy%2FbES7tRPMyGGecSEZJrlvsiKTtlsqByoiw%2BzpWpZMmmAqadcrbWApYUgl%2FzndXdei7f2jHJuLjwBO8SZIB5OhA6Sjod5PtxVwZilrrahQ5tVI1cJxSpwLvAKziFTSPXfnGzNuVCM5C4hDa3IZm5oYcqKt3PqqGIJcI4WthiIACTJy5vEE1pUMrP%2B%2B4X3uDdp1SCtYjFKpiHNCHFUBaxeSqV&X-Amz-Signature=942d80283a76520197e19959bafa4af2d31324f2a65eb97a10fe14a15e66b806&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RWSEJO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBVHCIu7IhXOZ3f%2FnVFn%2FS98Vw5pOPpnYy%2Ftz%2FTauc7AIhAI2u28DQ9fj2haMNvmFkZCvYu2lhREIr4FONzlqm1ySCKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIln3cANIuubQrD4Aq3AORArrlQhzhsTKKdq3vvYxfabuTuuLBO1B5dRUKssDASEIFM9JUkEf26X5Dufjn2DfQAlUQHj%2FL0e4wD7BAFY6Icc5UlUzrAcIuXsUwJrMcPk6WD3EtX7jXu2p0OvEo2U%2BvuOf7MmkYwectbCiTTTsx3aWiPNbQKyvvpmkowgXJ7Q5t2pr10FVMdMdv7XEMqwnXe7bnXAqS1IJOkfKxv6aEHX0hXcbOJUebTKlhPtdkTY6AQRsM9JPH%2FLZ1xa8ZdfQEHKlWhwOMXbrrzZBvUxmSMgcrncN27z5%2FpOKVouyxaoLmhTFZDJcCCl7jdSLknSOKYHTFU4e%2FL5rASEXOwC7Q%2FFc1LMcFTrCgNdf0PUIyhaDZcY57YL0SWv1GpKgGt0nPjsV%2F278m3gIDOLUP0kaglItxOKnUP4tILFhs9kqQXpV%2B6beqoFdr5U0KV9hK0Z5jvsEW2sdojIycz0wPV9x8mr8W32ujnzB%2FdQ80HvDYdPEDIUE3ZpzuDh7PA4zt78otDVfFIItLS%2FBBrPsVC0t3BwCIXDiVzJMCtqIm2a8V3sVtoKJ39kXKckIe8by%2B6Q%2FlcreyCwALNXjoiqmdgSEn5uG2IB0gsmNilISIKa%2FzYn3qkhelQ8fbvauBrTCAz8TABjqkAViYy%2FbES7tRPMyGGecSEZJrlvsiKTtlsqByoiw%2BzpWpZMmmAqadcrbWApYUgl%2FzndXdei7f2jHJuLjwBO8SZIB5OhA6Sjod5PtxVwZilrrahQ5tVI1cJxSpwLvAKziFTSPXfnGzNuVCM5C4hDa3IZm5oYcqKt3PqqGIJcI4WthiIACTJy5vEE1pUMrP%2B%2B4X3uDdp1SCtYjFKpiHNCHFUBaxeSqV&X-Amz-Signature=dfe90dfd9ce09a4094f9291e6aa3092d5fc6d5934f5c01ada1fc4cfab7521a26&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RWSEJO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBVHCIu7IhXOZ3f%2FnVFn%2FS98Vw5pOPpnYy%2Ftz%2FTauc7AIhAI2u28DQ9fj2haMNvmFkZCvYu2lhREIr4FONzlqm1ySCKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIln3cANIuubQrD4Aq3AORArrlQhzhsTKKdq3vvYxfabuTuuLBO1B5dRUKssDASEIFM9JUkEf26X5Dufjn2DfQAlUQHj%2FL0e4wD7BAFY6Icc5UlUzrAcIuXsUwJrMcPk6WD3EtX7jXu2p0OvEo2U%2BvuOf7MmkYwectbCiTTTsx3aWiPNbQKyvvpmkowgXJ7Q5t2pr10FVMdMdv7XEMqwnXe7bnXAqS1IJOkfKxv6aEHX0hXcbOJUebTKlhPtdkTY6AQRsM9JPH%2FLZ1xa8ZdfQEHKlWhwOMXbrrzZBvUxmSMgcrncN27z5%2FpOKVouyxaoLmhTFZDJcCCl7jdSLknSOKYHTFU4e%2FL5rASEXOwC7Q%2FFc1LMcFTrCgNdf0PUIyhaDZcY57YL0SWv1GpKgGt0nPjsV%2F278m3gIDOLUP0kaglItxOKnUP4tILFhs9kqQXpV%2B6beqoFdr5U0KV9hK0Z5jvsEW2sdojIycz0wPV9x8mr8W32ujnzB%2FdQ80HvDYdPEDIUE3ZpzuDh7PA4zt78otDVfFIItLS%2FBBrPsVC0t3BwCIXDiVzJMCtqIm2a8V3sVtoKJ39kXKckIe8by%2B6Q%2FlcreyCwALNXjoiqmdgSEn5uG2IB0gsmNilISIKa%2FzYn3qkhelQ8fbvauBrTCAz8TABjqkAViYy%2FbES7tRPMyGGecSEZJrlvsiKTtlsqByoiw%2BzpWpZMmmAqadcrbWApYUgl%2FzndXdei7f2jHJuLjwBO8SZIB5OhA6Sjod5PtxVwZilrrahQ5tVI1cJxSpwLvAKziFTSPXfnGzNuVCM5C4hDa3IZm5oYcqKt3PqqGIJcI4WthiIACTJy5vEE1pUMrP%2B%2B4X3uDdp1SCtYjFKpiHNCHFUBaxeSqV&X-Amz-Signature=894760831d971eab70142581f95fb057cb4242cf03188f1d7b85db83ac8ef23b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RWSEJO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBVHCIu7IhXOZ3f%2FnVFn%2FS98Vw5pOPpnYy%2Ftz%2FTauc7AIhAI2u28DQ9fj2haMNvmFkZCvYu2lhREIr4FONzlqm1ySCKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIln3cANIuubQrD4Aq3AORArrlQhzhsTKKdq3vvYxfabuTuuLBO1B5dRUKssDASEIFM9JUkEf26X5Dufjn2DfQAlUQHj%2FL0e4wD7BAFY6Icc5UlUzrAcIuXsUwJrMcPk6WD3EtX7jXu2p0OvEo2U%2BvuOf7MmkYwectbCiTTTsx3aWiPNbQKyvvpmkowgXJ7Q5t2pr10FVMdMdv7XEMqwnXe7bnXAqS1IJOkfKxv6aEHX0hXcbOJUebTKlhPtdkTY6AQRsM9JPH%2FLZ1xa8ZdfQEHKlWhwOMXbrrzZBvUxmSMgcrncN27z5%2FpOKVouyxaoLmhTFZDJcCCl7jdSLknSOKYHTFU4e%2FL5rASEXOwC7Q%2FFc1LMcFTrCgNdf0PUIyhaDZcY57YL0SWv1GpKgGt0nPjsV%2F278m3gIDOLUP0kaglItxOKnUP4tILFhs9kqQXpV%2B6beqoFdr5U0KV9hK0Z5jvsEW2sdojIycz0wPV9x8mr8W32ujnzB%2FdQ80HvDYdPEDIUE3ZpzuDh7PA4zt78otDVfFIItLS%2FBBrPsVC0t3BwCIXDiVzJMCtqIm2a8V3sVtoKJ39kXKckIe8by%2B6Q%2FlcreyCwALNXjoiqmdgSEn5uG2IB0gsmNilISIKa%2FzYn3qkhelQ8fbvauBrTCAz8TABjqkAViYy%2FbES7tRPMyGGecSEZJrlvsiKTtlsqByoiw%2BzpWpZMmmAqadcrbWApYUgl%2FzndXdei7f2jHJuLjwBO8SZIB5OhA6Sjod5PtxVwZilrrahQ5tVI1cJxSpwLvAKziFTSPXfnGzNuVCM5C4hDa3IZm5oYcqKt3PqqGIJcI4WthiIACTJy5vEE1pUMrP%2B%2B4X3uDdp1SCtYjFKpiHNCHFUBaxeSqV&X-Amz-Signature=2502e69007693658227c545568c344571fde92a9199c7f04bb6f2126cdceb32e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RWSEJO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBVHCIu7IhXOZ3f%2FnVFn%2FS98Vw5pOPpnYy%2Ftz%2FTauc7AIhAI2u28DQ9fj2haMNvmFkZCvYu2lhREIr4FONzlqm1ySCKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIln3cANIuubQrD4Aq3AORArrlQhzhsTKKdq3vvYxfabuTuuLBO1B5dRUKssDASEIFM9JUkEf26X5Dufjn2DfQAlUQHj%2FL0e4wD7BAFY6Icc5UlUzrAcIuXsUwJrMcPk6WD3EtX7jXu2p0OvEo2U%2BvuOf7MmkYwectbCiTTTsx3aWiPNbQKyvvpmkowgXJ7Q5t2pr10FVMdMdv7XEMqwnXe7bnXAqS1IJOkfKxv6aEHX0hXcbOJUebTKlhPtdkTY6AQRsM9JPH%2FLZ1xa8ZdfQEHKlWhwOMXbrrzZBvUxmSMgcrncN27z5%2FpOKVouyxaoLmhTFZDJcCCl7jdSLknSOKYHTFU4e%2FL5rASEXOwC7Q%2FFc1LMcFTrCgNdf0PUIyhaDZcY57YL0SWv1GpKgGt0nPjsV%2F278m3gIDOLUP0kaglItxOKnUP4tILFhs9kqQXpV%2B6beqoFdr5U0KV9hK0Z5jvsEW2sdojIycz0wPV9x8mr8W32ujnzB%2FdQ80HvDYdPEDIUE3ZpzuDh7PA4zt78otDVfFIItLS%2FBBrPsVC0t3BwCIXDiVzJMCtqIm2a8V3sVtoKJ39kXKckIe8by%2B6Q%2FlcreyCwALNXjoiqmdgSEn5uG2IB0gsmNilISIKa%2FzYn3qkhelQ8fbvauBrTCAz8TABjqkAViYy%2FbES7tRPMyGGecSEZJrlvsiKTtlsqByoiw%2BzpWpZMmmAqadcrbWApYUgl%2FzndXdei7f2jHJuLjwBO8SZIB5OhA6Sjod5PtxVwZilrrahQ5tVI1cJxSpwLvAKziFTSPXfnGzNuVCM5C4hDa3IZm5oYcqKt3PqqGIJcI4WthiIACTJy5vEE1pUMrP%2B%2B4X3uDdp1SCtYjFKpiHNCHFUBaxeSqV&X-Amz-Signature=36d16e5fee369bfd60d370dc5d82088c7e827326cc5fb5f5cc2cacd4c9ae5a00&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RWSEJO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBVHCIu7IhXOZ3f%2FnVFn%2FS98Vw5pOPpnYy%2Ftz%2FTauc7AIhAI2u28DQ9fj2haMNvmFkZCvYu2lhREIr4FONzlqm1ySCKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIln3cANIuubQrD4Aq3AORArrlQhzhsTKKdq3vvYxfabuTuuLBO1B5dRUKssDASEIFM9JUkEf26X5Dufjn2DfQAlUQHj%2FL0e4wD7BAFY6Icc5UlUzrAcIuXsUwJrMcPk6WD3EtX7jXu2p0OvEo2U%2BvuOf7MmkYwectbCiTTTsx3aWiPNbQKyvvpmkowgXJ7Q5t2pr10FVMdMdv7XEMqwnXe7bnXAqS1IJOkfKxv6aEHX0hXcbOJUebTKlhPtdkTY6AQRsM9JPH%2FLZ1xa8ZdfQEHKlWhwOMXbrrzZBvUxmSMgcrncN27z5%2FpOKVouyxaoLmhTFZDJcCCl7jdSLknSOKYHTFU4e%2FL5rASEXOwC7Q%2FFc1LMcFTrCgNdf0PUIyhaDZcY57YL0SWv1GpKgGt0nPjsV%2F278m3gIDOLUP0kaglItxOKnUP4tILFhs9kqQXpV%2B6beqoFdr5U0KV9hK0Z5jvsEW2sdojIycz0wPV9x8mr8W32ujnzB%2FdQ80HvDYdPEDIUE3ZpzuDh7PA4zt78otDVfFIItLS%2FBBrPsVC0t3BwCIXDiVzJMCtqIm2a8V3sVtoKJ39kXKckIe8by%2B6Q%2FlcreyCwALNXjoiqmdgSEn5uG2IB0gsmNilISIKa%2FzYn3qkhelQ8fbvauBrTCAz8TABjqkAViYy%2FbES7tRPMyGGecSEZJrlvsiKTtlsqByoiw%2BzpWpZMmmAqadcrbWApYUgl%2FzndXdei7f2jHJuLjwBO8SZIB5OhA6Sjod5PtxVwZilrrahQ5tVI1cJxSpwLvAKziFTSPXfnGzNuVCM5C4hDa3IZm5oYcqKt3PqqGIJcI4WthiIACTJy5vEE1pUMrP%2B%2B4X3uDdp1SCtYjFKpiHNCHFUBaxeSqV&X-Amz-Signature=b3223d9ccf28faed272187b2d8bd6b5d844d34bd1d192aa85127b63ec3d87714&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
