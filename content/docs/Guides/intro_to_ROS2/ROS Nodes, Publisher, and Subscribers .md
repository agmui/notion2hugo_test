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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O644QHY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIHK%2F8fSlC8pmUQIwLKgU2wbNdFvYArjG%2BFXo80orxybOAiAkbDgTw4llAXumBVz2%2B95ljV7CVufztYW91SJzRg%2BFzCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM8Vg4Jm1u5MGZnZd4KtwDS5xuG9NEwoCHSq5%2FpIbeKlRNXM5%2Fbt3W4RC6%2ByKO6qRPJMtItpLqgl7Y4RwN0p63NlL6P7IRigkrJCxH761FFXTELgXzQYXgbsoe9KvrH0zn%2BS%2BnWDUu%2FpqlFsjSeEmzlHf28KEGDcAKnipZt7yzXO6WVUFYJ%2FCHe%2Fg5UhxbSxHWIC2IG4JhoK85DV%2BlFIK02GaU7SYC0C6YlpKvr2VCi6tw%2BI3Ek9YGEK0fZrZ6m9s%2BtEhEgPBhpaqPspVFOEbKIbYcrRqndgWpjLaZNWLfRBm3mKdWcE0csCRPa%2BccR0f4Jj0XYowgKbuaLkyFOa%2B27W9pPimSYbatBJz1t8LRBrnO5gBvahIPg3JNaLQmXgnXV0g1%2BkAidyptGXzk0zuCMF7ioQTjDfPr1JJYzVRfjbpUmdwPUREgEZl%2FLZ9kJHGjdpWQQmaZ0zfyijxtXcfI%2B06houjkkDSBJyv6Kp%2Fpo7dTkeGsLXJ4EGyipsEeRnEyvbJOaTekXZEshybFzIr%2BhegGv4JviLWaYzn4dYUyOHGECou9JLx9BKQ3EUPSrz%2Fsd7pDd7lODXkhgS%2FZ3F0OPc2AgFAes4Va7mArrYaaZZJoi339%2B8fIl9XPGqQPDPiFRRVJQCVLhqYP1wowio6cwwY6pgEsAKmN%2B786h7liCwi1rRMD2iPMEv8o%2Fdv%2BQPwNj%2B9XNNyx3Pse5uZevW1MiITx0h3i2lDXqR%2BTiVhj5zInpxpU26sQ3zSUYI120rp8HZ6lP4kL5P%2Bfvge2bDDr6qnQFtp0l%2F0efdSMHxHm2bAVpsU6nBpM5183LSjtcRUowdcwj36rtbGBJj4t%2FKj3%2FyLDsJj6DNtIYjcQNbXRC6HSjVDHXbalNM%2Ba&X-Amz-Signature=32bbb2ce7d025d29c238d2fe2007ea6220af789638a2ce3113293a7077b7de65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O644QHY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIHK%2F8fSlC8pmUQIwLKgU2wbNdFvYArjG%2BFXo80orxybOAiAkbDgTw4llAXumBVz2%2B95ljV7CVufztYW91SJzRg%2BFzCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM8Vg4Jm1u5MGZnZd4KtwDS5xuG9NEwoCHSq5%2FpIbeKlRNXM5%2Fbt3W4RC6%2ByKO6qRPJMtItpLqgl7Y4RwN0p63NlL6P7IRigkrJCxH761FFXTELgXzQYXgbsoe9KvrH0zn%2BS%2BnWDUu%2FpqlFsjSeEmzlHf28KEGDcAKnipZt7yzXO6WVUFYJ%2FCHe%2Fg5UhxbSxHWIC2IG4JhoK85DV%2BlFIK02GaU7SYC0C6YlpKvr2VCi6tw%2BI3Ek9YGEK0fZrZ6m9s%2BtEhEgPBhpaqPspVFOEbKIbYcrRqndgWpjLaZNWLfRBm3mKdWcE0csCRPa%2BccR0f4Jj0XYowgKbuaLkyFOa%2B27W9pPimSYbatBJz1t8LRBrnO5gBvahIPg3JNaLQmXgnXV0g1%2BkAidyptGXzk0zuCMF7ioQTjDfPr1JJYzVRfjbpUmdwPUREgEZl%2FLZ9kJHGjdpWQQmaZ0zfyijxtXcfI%2B06houjkkDSBJyv6Kp%2Fpo7dTkeGsLXJ4EGyipsEeRnEyvbJOaTekXZEshybFzIr%2BhegGv4JviLWaYzn4dYUyOHGECou9JLx9BKQ3EUPSrz%2Fsd7pDd7lODXkhgS%2FZ3F0OPc2AgFAes4Va7mArrYaaZZJoi339%2B8fIl9XPGqQPDPiFRRVJQCVLhqYP1wowio6cwwY6pgEsAKmN%2B786h7liCwi1rRMD2iPMEv8o%2Fdv%2BQPwNj%2B9XNNyx3Pse5uZevW1MiITx0h3i2lDXqR%2BTiVhj5zInpxpU26sQ3zSUYI120rp8HZ6lP4kL5P%2Bfvge2bDDr6qnQFtp0l%2F0efdSMHxHm2bAVpsU6nBpM5183LSjtcRUowdcwj36rtbGBJj4t%2FKj3%2FyLDsJj6DNtIYjcQNbXRC6HSjVDHXbalNM%2Ba&X-Amz-Signature=9ee186a1d60f3aa2f5c793366115df34c49eb3a5c8cf951d55c6c316f3e3c5cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O644QHY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIHK%2F8fSlC8pmUQIwLKgU2wbNdFvYArjG%2BFXo80orxybOAiAkbDgTw4llAXumBVz2%2B95ljV7CVufztYW91SJzRg%2BFzCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM8Vg4Jm1u5MGZnZd4KtwDS5xuG9NEwoCHSq5%2FpIbeKlRNXM5%2Fbt3W4RC6%2ByKO6qRPJMtItpLqgl7Y4RwN0p63NlL6P7IRigkrJCxH761FFXTELgXzQYXgbsoe9KvrH0zn%2BS%2BnWDUu%2FpqlFsjSeEmzlHf28KEGDcAKnipZt7yzXO6WVUFYJ%2FCHe%2Fg5UhxbSxHWIC2IG4JhoK85DV%2BlFIK02GaU7SYC0C6YlpKvr2VCi6tw%2BI3Ek9YGEK0fZrZ6m9s%2BtEhEgPBhpaqPspVFOEbKIbYcrRqndgWpjLaZNWLfRBm3mKdWcE0csCRPa%2BccR0f4Jj0XYowgKbuaLkyFOa%2B27W9pPimSYbatBJz1t8LRBrnO5gBvahIPg3JNaLQmXgnXV0g1%2BkAidyptGXzk0zuCMF7ioQTjDfPr1JJYzVRfjbpUmdwPUREgEZl%2FLZ9kJHGjdpWQQmaZ0zfyijxtXcfI%2B06houjkkDSBJyv6Kp%2Fpo7dTkeGsLXJ4EGyipsEeRnEyvbJOaTekXZEshybFzIr%2BhegGv4JviLWaYzn4dYUyOHGECou9JLx9BKQ3EUPSrz%2Fsd7pDd7lODXkhgS%2FZ3F0OPc2AgFAes4Va7mArrYaaZZJoi339%2B8fIl9XPGqQPDPiFRRVJQCVLhqYP1wowio6cwwY6pgEsAKmN%2B786h7liCwi1rRMD2iPMEv8o%2Fdv%2BQPwNj%2B9XNNyx3Pse5uZevW1MiITx0h3i2lDXqR%2BTiVhj5zInpxpU26sQ3zSUYI120rp8HZ6lP4kL5P%2Bfvge2bDDr6qnQFtp0l%2F0efdSMHxHm2bAVpsU6nBpM5183LSjtcRUowdcwj36rtbGBJj4t%2FKj3%2FyLDsJj6DNtIYjcQNbXRC6HSjVDHXbalNM%2Ba&X-Amz-Signature=07b9c93aad391565b71bba2559020a03f96812cb0d2b51d6ef66d32c18181b22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O644QHY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIHK%2F8fSlC8pmUQIwLKgU2wbNdFvYArjG%2BFXo80orxybOAiAkbDgTw4llAXumBVz2%2B95ljV7CVufztYW91SJzRg%2BFzCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM8Vg4Jm1u5MGZnZd4KtwDS5xuG9NEwoCHSq5%2FpIbeKlRNXM5%2Fbt3W4RC6%2ByKO6qRPJMtItpLqgl7Y4RwN0p63NlL6P7IRigkrJCxH761FFXTELgXzQYXgbsoe9KvrH0zn%2BS%2BnWDUu%2FpqlFsjSeEmzlHf28KEGDcAKnipZt7yzXO6WVUFYJ%2FCHe%2Fg5UhxbSxHWIC2IG4JhoK85DV%2BlFIK02GaU7SYC0C6YlpKvr2VCi6tw%2BI3Ek9YGEK0fZrZ6m9s%2BtEhEgPBhpaqPspVFOEbKIbYcrRqndgWpjLaZNWLfRBm3mKdWcE0csCRPa%2BccR0f4Jj0XYowgKbuaLkyFOa%2B27W9pPimSYbatBJz1t8LRBrnO5gBvahIPg3JNaLQmXgnXV0g1%2BkAidyptGXzk0zuCMF7ioQTjDfPr1JJYzVRfjbpUmdwPUREgEZl%2FLZ9kJHGjdpWQQmaZ0zfyijxtXcfI%2B06houjkkDSBJyv6Kp%2Fpo7dTkeGsLXJ4EGyipsEeRnEyvbJOaTekXZEshybFzIr%2BhegGv4JviLWaYzn4dYUyOHGECou9JLx9BKQ3EUPSrz%2Fsd7pDd7lODXkhgS%2FZ3F0OPc2AgFAes4Va7mArrYaaZZJoi339%2B8fIl9XPGqQPDPiFRRVJQCVLhqYP1wowio6cwwY6pgEsAKmN%2B786h7liCwi1rRMD2iPMEv8o%2Fdv%2BQPwNj%2B9XNNyx3Pse5uZevW1MiITx0h3i2lDXqR%2BTiVhj5zInpxpU26sQ3zSUYI120rp8HZ6lP4kL5P%2Bfvge2bDDr6qnQFtp0l%2F0efdSMHxHm2bAVpsU6nBpM5183LSjtcRUowdcwj36rtbGBJj4t%2FKj3%2FyLDsJj6DNtIYjcQNbXRC6HSjVDHXbalNM%2Ba&X-Amz-Signature=47c31f242235e3cc4b6fc08cf7a6d47b0a558b4fbaa8c09e567ec749e0e9b44c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O644QHY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIHK%2F8fSlC8pmUQIwLKgU2wbNdFvYArjG%2BFXo80orxybOAiAkbDgTw4llAXumBVz2%2B95ljV7CVufztYW91SJzRg%2BFzCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM8Vg4Jm1u5MGZnZd4KtwDS5xuG9NEwoCHSq5%2FpIbeKlRNXM5%2Fbt3W4RC6%2ByKO6qRPJMtItpLqgl7Y4RwN0p63NlL6P7IRigkrJCxH761FFXTELgXzQYXgbsoe9KvrH0zn%2BS%2BnWDUu%2FpqlFsjSeEmzlHf28KEGDcAKnipZt7yzXO6WVUFYJ%2FCHe%2Fg5UhxbSxHWIC2IG4JhoK85DV%2BlFIK02GaU7SYC0C6YlpKvr2VCi6tw%2BI3Ek9YGEK0fZrZ6m9s%2BtEhEgPBhpaqPspVFOEbKIbYcrRqndgWpjLaZNWLfRBm3mKdWcE0csCRPa%2BccR0f4Jj0XYowgKbuaLkyFOa%2B27W9pPimSYbatBJz1t8LRBrnO5gBvahIPg3JNaLQmXgnXV0g1%2BkAidyptGXzk0zuCMF7ioQTjDfPr1JJYzVRfjbpUmdwPUREgEZl%2FLZ9kJHGjdpWQQmaZ0zfyijxtXcfI%2B06houjkkDSBJyv6Kp%2Fpo7dTkeGsLXJ4EGyipsEeRnEyvbJOaTekXZEshybFzIr%2BhegGv4JviLWaYzn4dYUyOHGECou9JLx9BKQ3EUPSrz%2Fsd7pDd7lODXkhgS%2FZ3F0OPc2AgFAes4Va7mArrYaaZZJoi339%2B8fIl9XPGqQPDPiFRRVJQCVLhqYP1wowio6cwwY6pgEsAKmN%2B786h7liCwi1rRMD2iPMEv8o%2Fdv%2BQPwNj%2B9XNNyx3Pse5uZevW1MiITx0h3i2lDXqR%2BTiVhj5zInpxpU26sQ3zSUYI120rp8HZ6lP4kL5P%2Bfvge2bDDr6qnQFtp0l%2F0efdSMHxHm2bAVpsU6nBpM5183LSjtcRUowdcwj36rtbGBJj4t%2FKj3%2FyLDsJj6DNtIYjcQNbXRC6HSjVDHXbalNM%2Ba&X-Amz-Signature=5a92470d914795aa2584a62a68bc616d63128601a4a67533cd405e813532c532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O644QHY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIHK%2F8fSlC8pmUQIwLKgU2wbNdFvYArjG%2BFXo80orxybOAiAkbDgTw4llAXumBVz2%2B95ljV7CVufztYW91SJzRg%2BFzCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM8Vg4Jm1u5MGZnZd4KtwDS5xuG9NEwoCHSq5%2FpIbeKlRNXM5%2Fbt3W4RC6%2ByKO6qRPJMtItpLqgl7Y4RwN0p63NlL6P7IRigkrJCxH761FFXTELgXzQYXgbsoe9KvrH0zn%2BS%2BnWDUu%2FpqlFsjSeEmzlHf28KEGDcAKnipZt7yzXO6WVUFYJ%2FCHe%2Fg5UhxbSxHWIC2IG4JhoK85DV%2BlFIK02GaU7SYC0C6YlpKvr2VCi6tw%2BI3Ek9YGEK0fZrZ6m9s%2BtEhEgPBhpaqPspVFOEbKIbYcrRqndgWpjLaZNWLfRBm3mKdWcE0csCRPa%2BccR0f4Jj0XYowgKbuaLkyFOa%2B27W9pPimSYbatBJz1t8LRBrnO5gBvahIPg3JNaLQmXgnXV0g1%2BkAidyptGXzk0zuCMF7ioQTjDfPr1JJYzVRfjbpUmdwPUREgEZl%2FLZ9kJHGjdpWQQmaZ0zfyijxtXcfI%2B06houjkkDSBJyv6Kp%2Fpo7dTkeGsLXJ4EGyipsEeRnEyvbJOaTekXZEshybFzIr%2BhegGv4JviLWaYzn4dYUyOHGECou9JLx9BKQ3EUPSrz%2Fsd7pDd7lODXkhgS%2FZ3F0OPc2AgFAes4Va7mArrYaaZZJoi339%2B8fIl9XPGqQPDPiFRRVJQCVLhqYP1wowio6cwwY6pgEsAKmN%2B786h7liCwi1rRMD2iPMEv8o%2Fdv%2BQPwNj%2B9XNNyx3Pse5uZevW1MiITx0h3i2lDXqR%2BTiVhj5zInpxpU26sQ3zSUYI120rp8HZ6lP4kL5P%2Bfvge2bDDr6qnQFtp0l%2F0efdSMHxHm2bAVpsU6nBpM5183LSjtcRUowdcwj36rtbGBJj4t%2FKj3%2FyLDsJj6DNtIYjcQNbXRC6HSjVDHXbalNM%2Ba&X-Amz-Signature=88742ac8dd4eb56231b5cfe8da14af5784479da7a235a683201240559b557e79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O644QHY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIHK%2F8fSlC8pmUQIwLKgU2wbNdFvYArjG%2BFXo80orxybOAiAkbDgTw4llAXumBVz2%2B95ljV7CVufztYW91SJzRg%2BFzCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM8Vg4Jm1u5MGZnZd4KtwDS5xuG9NEwoCHSq5%2FpIbeKlRNXM5%2Fbt3W4RC6%2ByKO6qRPJMtItpLqgl7Y4RwN0p63NlL6P7IRigkrJCxH761FFXTELgXzQYXgbsoe9KvrH0zn%2BS%2BnWDUu%2FpqlFsjSeEmzlHf28KEGDcAKnipZt7yzXO6WVUFYJ%2FCHe%2Fg5UhxbSxHWIC2IG4JhoK85DV%2BlFIK02GaU7SYC0C6YlpKvr2VCi6tw%2BI3Ek9YGEK0fZrZ6m9s%2BtEhEgPBhpaqPspVFOEbKIbYcrRqndgWpjLaZNWLfRBm3mKdWcE0csCRPa%2BccR0f4Jj0XYowgKbuaLkyFOa%2B27W9pPimSYbatBJz1t8LRBrnO5gBvahIPg3JNaLQmXgnXV0g1%2BkAidyptGXzk0zuCMF7ioQTjDfPr1JJYzVRfjbpUmdwPUREgEZl%2FLZ9kJHGjdpWQQmaZ0zfyijxtXcfI%2B06houjkkDSBJyv6Kp%2Fpo7dTkeGsLXJ4EGyipsEeRnEyvbJOaTekXZEshybFzIr%2BhegGv4JviLWaYzn4dYUyOHGECou9JLx9BKQ3EUPSrz%2Fsd7pDd7lODXkhgS%2FZ3F0OPc2AgFAes4Va7mArrYaaZZJoi339%2B8fIl9XPGqQPDPiFRRVJQCVLhqYP1wowio6cwwY6pgEsAKmN%2B786h7liCwi1rRMD2iPMEv8o%2Fdv%2BQPwNj%2B9XNNyx3Pse5uZevW1MiITx0h3i2lDXqR%2BTiVhj5zInpxpU26sQ3zSUYI120rp8HZ6lP4kL5P%2Bfvge2bDDr6qnQFtp0l%2F0efdSMHxHm2bAVpsU6nBpM5183LSjtcRUowdcwj36rtbGBJj4t%2FKj3%2FyLDsJj6DNtIYjcQNbXRC6HSjVDHXbalNM%2Ba&X-Amz-Signature=633da0863ddbde62b820f9d8ce81f7f200d40bf1aa38ae9af58d765a41b2a009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O644QHY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIHK%2F8fSlC8pmUQIwLKgU2wbNdFvYArjG%2BFXo80orxybOAiAkbDgTw4llAXumBVz2%2B95ljV7CVufztYW91SJzRg%2BFzCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM8Vg4Jm1u5MGZnZd4KtwDS5xuG9NEwoCHSq5%2FpIbeKlRNXM5%2Fbt3W4RC6%2ByKO6qRPJMtItpLqgl7Y4RwN0p63NlL6P7IRigkrJCxH761FFXTELgXzQYXgbsoe9KvrH0zn%2BS%2BnWDUu%2FpqlFsjSeEmzlHf28KEGDcAKnipZt7yzXO6WVUFYJ%2FCHe%2Fg5UhxbSxHWIC2IG4JhoK85DV%2BlFIK02GaU7SYC0C6YlpKvr2VCi6tw%2BI3Ek9YGEK0fZrZ6m9s%2BtEhEgPBhpaqPspVFOEbKIbYcrRqndgWpjLaZNWLfRBm3mKdWcE0csCRPa%2BccR0f4Jj0XYowgKbuaLkyFOa%2B27W9pPimSYbatBJz1t8LRBrnO5gBvahIPg3JNaLQmXgnXV0g1%2BkAidyptGXzk0zuCMF7ioQTjDfPr1JJYzVRfjbpUmdwPUREgEZl%2FLZ9kJHGjdpWQQmaZ0zfyijxtXcfI%2B06houjkkDSBJyv6Kp%2Fpo7dTkeGsLXJ4EGyipsEeRnEyvbJOaTekXZEshybFzIr%2BhegGv4JviLWaYzn4dYUyOHGECou9JLx9BKQ3EUPSrz%2Fsd7pDd7lODXkhgS%2FZ3F0OPc2AgFAes4Va7mArrYaaZZJoi339%2B8fIl9XPGqQPDPiFRRVJQCVLhqYP1wowio6cwwY6pgEsAKmN%2B786h7liCwi1rRMD2iPMEv8o%2Fdv%2BQPwNj%2B9XNNyx3Pse5uZevW1MiITx0h3i2lDXqR%2BTiVhj5zInpxpU26sQ3zSUYI120rp8HZ6lP4kL5P%2Bfvge2bDDr6qnQFtp0l%2F0efdSMHxHm2bAVpsU6nBpM5183LSjtcRUowdcwj36rtbGBJj4t%2FKj3%2FyLDsJj6DNtIYjcQNbXRC6HSjVDHXbalNM%2Ba&X-Amz-Signature=82318580c403702b45c4f4f508acc42c7f0d1979c681ec6794b6df98cd1cc6ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
