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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VH3F7Y7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgAG%2Bb0Wy1EMMGRMG6SdcT%2FnhTKMFB6dbhXVaBaqKDFAiEAq2%2BkGAkI0%2B%2FZfs7%2FSo7ANoNeQ2s15%2FJjUq6aamWHhiwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPI7%2FS5vD%2B2HUNb1MyrcAwcQt4z4QmQko6Be170FFhg5fS2BsHut3tcFmxhqmPzrJPvREgvdj9JzVQnfbALFDpzWXLFaWUcyM4AOrgoRW4d5V7tNJJ1q2UW3F5hyv4R8vDKzYajoCssSXnpcgcpa6wNod8v%2FLsn7rcVdieVH7any3kJouiYUXZTv%2BJ%2Boalw65xMghuzVfX13Xjf33RMnhR7mBdSsJstdmn1aD1J%2Bsuob%2FHlYfhy57f5Ygc0e9sMyGDXkwRRk59TdGIqLGRlc1pg3mlQ2k0%2BteHcSX5DBBWxYXKkXX0SyBNXRUg1%2BNfbzFwKTwEsytusHiuLz1t2lClm3Qkd%2FSEFBkaChpkPYdntZDR5DM5crrIAa7Yzxev353GjzbIs8mkk5FbVPWSEjNIKirkLLsG15zUrP8rz3ro8fRuJ1AN8TLfYntkw4WTSNhS51H3itE4%2BBfyeqdaiKfCb91YFfvQolSe8VqA19CVcw9MFGXOEdYMU%2FYZ5KDxAuz%2FzqdnE55r4JJq4G7qGyDecULjATu%2BmMPVWLkqwz7FF3hRivXoHkj87rYZlVntv93im73YPCsbx%2BX0Xdeflf2EiEwbU6U7cFW3akt58xKAC0i1S9PoCel2r18AiD%2FMCof0PGYDTaZ4GgeWBLMKn278MGOqUBkAexjfbRGJ4GRME8PtZ6SFJGe%2BJUz4lFcTwVVewaknyfw%2Bxu3rgSY5Erc%2FJxTriGitql0%2BGsgDBEEzU52I5Q2jyRCSE7t6YusFa%2BRA2G3FWBB2ilC5Np82TpiG3L0dZf8CCysYpIoQpjGOupm7Qbmcuibt0cpFxmOSXxONU62UGus9cK%2FLUx0RvbgkricKGkaEO%2FeRNY4khpiDWcaUxUd1RK0NuV&X-Amz-Signature=dc446053aed9d0acddb4f0e5d8fe94bb64d2ebb76a7145a0f0777b12f620949a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VH3F7Y7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgAG%2Bb0Wy1EMMGRMG6SdcT%2FnhTKMFB6dbhXVaBaqKDFAiEAq2%2BkGAkI0%2B%2FZfs7%2FSo7ANoNeQ2s15%2FJjUq6aamWHhiwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPI7%2FS5vD%2B2HUNb1MyrcAwcQt4z4QmQko6Be170FFhg5fS2BsHut3tcFmxhqmPzrJPvREgvdj9JzVQnfbALFDpzWXLFaWUcyM4AOrgoRW4d5V7tNJJ1q2UW3F5hyv4R8vDKzYajoCssSXnpcgcpa6wNod8v%2FLsn7rcVdieVH7any3kJouiYUXZTv%2BJ%2Boalw65xMghuzVfX13Xjf33RMnhR7mBdSsJstdmn1aD1J%2Bsuob%2FHlYfhy57f5Ygc0e9sMyGDXkwRRk59TdGIqLGRlc1pg3mlQ2k0%2BteHcSX5DBBWxYXKkXX0SyBNXRUg1%2BNfbzFwKTwEsytusHiuLz1t2lClm3Qkd%2FSEFBkaChpkPYdntZDR5DM5crrIAa7Yzxev353GjzbIs8mkk5FbVPWSEjNIKirkLLsG15zUrP8rz3ro8fRuJ1AN8TLfYntkw4WTSNhS51H3itE4%2BBfyeqdaiKfCb91YFfvQolSe8VqA19CVcw9MFGXOEdYMU%2FYZ5KDxAuz%2FzqdnE55r4JJq4G7qGyDecULjATu%2BmMPVWLkqwz7FF3hRivXoHkj87rYZlVntv93im73YPCsbx%2BX0Xdeflf2EiEwbU6U7cFW3akt58xKAC0i1S9PoCel2r18AiD%2FMCof0PGYDTaZ4GgeWBLMKn278MGOqUBkAexjfbRGJ4GRME8PtZ6SFJGe%2BJUz4lFcTwVVewaknyfw%2Bxu3rgSY5Erc%2FJxTriGitql0%2BGsgDBEEzU52I5Q2jyRCSE7t6YusFa%2BRA2G3FWBB2ilC5Np82TpiG3L0dZf8CCysYpIoQpjGOupm7Qbmcuibt0cpFxmOSXxONU62UGus9cK%2FLUx0RvbgkricKGkaEO%2FeRNY4khpiDWcaUxUd1RK0NuV&X-Amz-Signature=fe1259c2c923a6a6859f1c64257ccd385db40d3ef31b9b8235f73a74d882fe74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VH3F7Y7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgAG%2Bb0Wy1EMMGRMG6SdcT%2FnhTKMFB6dbhXVaBaqKDFAiEAq2%2BkGAkI0%2B%2FZfs7%2FSo7ANoNeQ2s15%2FJjUq6aamWHhiwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPI7%2FS5vD%2B2HUNb1MyrcAwcQt4z4QmQko6Be170FFhg5fS2BsHut3tcFmxhqmPzrJPvREgvdj9JzVQnfbALFDpzWXLFaWUcyM4AOrgoRW4d5V7tNJJ1q2UW3F5hyv4R8vDKzYajoCssSXnpcgcpa6wNod8v%2FLsn7rcVdieVH7any3kJouiYUXZTv%2BJ%2Boalw65xMghuzVfX13Xjf33RMnhR7mBdSsJstdmn1aD1J%2Bsuob%2FHlYfhy57f5Ygc0e9sMyGDXkwRRk59TdGIqLGRlc1pg3mlQ2k0%2BteHcSX5DBBWxYXKkXX0SyBNXRUg1%2BNfbzFwKTwEsytusHiuLz1t2lClm3Qkd%2FSEFBkaChpkPYdntZDR5DM5crrIAa7Yzxev353GjzbIs8mkk5FbVPWSEjNIKirkLLsG15zUrP8rz3ro8fRuJ1AN8TLfYntkw4WTSNhS51H3itE4%2BBfyeqdaiKfCb91YFfvQolSe8VqA19CVcw9MFGXOEdYMU%2FYZ5KDxAuz%2FzqdnE55r4JJq4G7qGyDecULjATu%2BmMPVWLkqwz7FF3hRivXoHkj87rYZlVntv93im73YPCsbx%2BX0Xdeflf2EiEwbU6U7cFW3akt58xKAC0i1S9PoCel2r18AiD%2FMCof0PGYDTaZ4GgeWBLMKn278MGOqUBkAexjfbRGJ4GRME8PtZ6SFJGe%2BJUz4lFcTwVVewaknyfw%2Bxu3rgSY5Erc%2FJxTriGitql0%2BGsgDBEEzU52I5Q2jyRCSE7t6YusFa%2BRA2G3FWBB2ilC5Np82TpiG3L0dZf8CCysYpIoQpjGOupm7Qbmcuibt0cpFxmOSXxONU62UGus9cK%2FLUx0RvbgkricKGkaEO%2FeRNY4khpiDWcaUxUd1RK0NuV&X-Amz-Signature=17de984fcbe43fe66139e6b897ae749360b2effacfdca10ceb8d4c6e1a14a722&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VH3F7Y7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgAG%2Bb0Wy1EMMGRMG6SdcT%2FnhTKMFB6dbhXVaBaqKDFAiEAq2%2BkGAkI0%2B%2FZfs7%2FSo7ANoNeQ2s15%2FJjUq6aamWHhiwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPI7%2FS5vD%2B2HUNb1MyrcAwcQt4z4QmQko6Be170FFhg5fS2BsHut3tcFmxhqmPzrJPvREgvdj9JzVQnfbALFDpzWXLFaWUcyM4AOrgoRW4d5V7tNJJ1q2UW3F5hyv4R8vDKzYajoCssSXnpcgcpa6wNod8v%2FLsn7rcVdieVH7any3kJouiYUXZTv%2BJ%2Boalw65xMghuzVfX13Xjf33RMnhR7mBdSsJstdmn1aD1J%2Bsuob%2FHlYfhy57f5Ygc0e9sMyGDXkwRRk59TdGIqLGRlc1pg3mlQ2k0%2BteHcSX5DBBWxYXKkXX0SyBNXRUg1%2BNfbzFwKTwEsytusHiuLz1t2lClm3Qkd%2FSEFBkaChpkPYdntZDR5DM5crrIAa7Yzxev353GjzbIs8mkk5FbVPWSEjNIKirkLLsG15zUrP8rz3ro8fRuJ1AN8TLfYntkw4WTSNhS51H3itE4%2BBfyeqdaiKfCb91YFfvQolSe8VqA19CVcw9MFGXOEdYMU%2FYZ5KDxAuz%2FzqdnE55r4JJq4G7qGyDecULjATu%2BmMPVWLkqwz7FF3hRivXoHkj87rYZlVntv93im73YPCsbx%2BX0Xdeflf2EiEwbU6U7cFW3akt58xKAC0i1S9PoCel2r18AiD%2FMCof0PGYDTaZ4GgeWBLMKn278MGOqUBkAexjfbRGJ4GRME8PtZ6SFJGe%2BJUz4lFcTwVVewaknyfw%2Bxu3rgSY5Erc%2FJxTriGitql0%2BGsgDBEEzU52I5Q2jyRCSE7t6YusFa%2BRA2G3FWBB2ilC5Np82TpiG3L0dZf8CCysYpIoQpjGOupm7Qbmcuibt0cpFxmOSXxONU62UGus9cK%2FLUx0RvbgkricKGkaEO%2FeRNY4khpiDWcaUxUd1RK0NuV&X-Amz-Signature=14b17645f818952f7ae2d86ac9cd4e01da7e478f6314de605383c08d95b9e715&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VH3F7Y7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgAG%2Bb0Wy1EMMGRMG6SdcT%2FnhTKMFB6dbhXVaBaqKDFAiEAq2%2BkGAkI0%2B%2FZfs7%2FSo7ANoNeQ2s15%2FJjUq6aamWHhiwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPI7%2FS5vD%2B2HUNb1MyrcAwcQt4z4QmQko6Be170FFhg5fS2BsHut3tcFmxhqmPzrJPvREgvdj9JzVQnfbALFDpzWXLFaWUcyM4AOrgoRW4d5V7tNJJ1q2UW3F5hyv4R8vDKzYajoCssSXnpcgcpa6wNod8v%2FLsn7rcVdieVH7any3kJouiYUXZTv%2BJ%2Boalw65xMghuzVfX13Xjf33RMnhR7mBdSsJstdmn1aD1J%2Bsuob%2FHlYfhy57f5Ygc0e9sMyGDXkwRRk59TdGIqLGRlc1pg3mlQ2k0%2BteHcSX5DBBWxYXKkXX0SyBNXRUg1%2BNfbzFwKTwEsytusHiuLz1t2lClm3Qkd%2FSEFBkaChpkPYdntZDR5DM5crrIAa7Yzxev353GjzbIs8mkk5FbVPWSEjNIKirkLLsG15zUrP8rz3ro8fRuJ1AN8TLfYntkw4WTSNhS51H3itE4%2BBfyeqdaiKfCb91YFfvQolSe8VqA19CVcw9MFGXOEdYMU%2FYZ5KDxAuz%2FzqdnE55r4JJq4G7qGyDecULjATu%2BmMPVWLkqwz7FF3hRivXoHkj87rYZlVntv93im73YPCsbx%2BX0Xdeflf2EiEwbU6U7cFW3akt58xKAC0i1S9PoCel2r18AiD%2FMCof0PGYDTaZ4GgeWBLMKn278MGOqUBkAexjfbRGJ4GRME8PtZ6SFJGe%2BJUz4lFcTwVVewaknyfw%2Bxu3rgSY5Erc%2FJxTriGitql0%2BGsgDBEEzU52I5Q2jyRCSE7t6YusFa%2BRA2G3FWBB2ilC5Np82TpiG3L0dZf8CCysYpIoQpjGOupm7Qbmcuibt0cpFxmOSXxONU62UGus9cK%2FLUx0RvbgkricKGkaEO%2FeRNY4khpiDWcaUxUd1RK0NuV&X-Amz-Signature=a9e1ca38b47993253099b44b771958442134900a6a116395949552b8d914ddfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VH3F7Y7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgAG%2Bb0Wy1EMMGRMG6SdcT%2FnhTKMFB6dbhXVaBaqKDFAiEAq2%2BkGAkI0%2B%2FZfs7%2FSo7ANoNeQ2s15%2FJjUq6aamWHhiwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPI7%2FS5vD%2B2HUNb1MyrcAwcQt4z4QmQko6Be170FFhg5fS2BsHut3tcFmxhqmPzrJPvREgvdj9JzVQnfbALFDpzWXLFaWUcyM4AOrgoRW4d5V7tNJJ1q2UW3F5hyv4R8vDKzYajoCssSXnpcgcpa6wNod8v%2FLsn7rcVdieVH7any3kJouiYUXZTv%2BJ%2Boalw65xMghuzVfX13Xjf33RMnhR7mBdSsJstdmn1aD1J%2Bsuob%2FHlYfhy57f5Ygc0e9sMyGDXkwRRk59TdGIqLGRlc1pg3mlQ2k0%2BteHcSX5DBBWxYXKkXX0SyBNXRUg1%2BNfbzFwKTwEsytusHiuLz1t2lClm3Qkd%2FSEFBkaChpkPYdntZDR5DM5crrIAa7Yzxev353GjzbIs8mkk5FbVPWSEjNIKirkLLsG15zUrP8rz3ro8fRuJ1AN8TLfYntkw4WTSNhS51H3itE4%2BBfyeqdaiKfCb91YFfvQolSe8VqA19CVcw9MFGXOEdYMU%2FYZ5KDxAuz%2FzqdnE55r4JJq4G7qGyDecULjATu%2BmMPVWLkqwz7FF3hRivXoHkj87rYZlVntv93im73YPCsbx%2BX0Xdeflf2EiEwbU6U7cFW3akt58xKAC0i1S9PoCel2r18AiD%2FMCof0PGYDTaZ4GgeWBLMKn278MGOqUBkAexjfbRGJ4GRME8PtZ6SFJGe%2BJUz4lFcTwVVewaknyfw%2Bxu3rgSY5Erc%2FJxTriGitql0%2BGsgDBEEzU52I5Q2jyRCSE7t6YusFa%2BRA2G3FWBB2ilC5Np82TpiG3L0dZf8CCysYpIoQpjGOupm7Qbmcuibt0cpFxmOSXxONU62UGus9cK%2FLUx0RvbgkricKGkaEO%2FeRNY4khpiDWcaUxUd1RK0NuV&X-Amz-Signature=bdc65f9f54a83419cf31383e99edfa7d5c9295a23453a67fb8f70a30eed16076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VH3F7Y7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgAG%2Bb0Wy1EMMGRMG6SdcT%2FnhTKMFB6dbhXVaBaqKDFAiEAq2%2BkGAkI0%2B%2FZfs7%2FSo7ANoNeQ2s15%2FJjUq6aamWHhiwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPI7%2FS5vD%2B2HUNb1MyrcAwcQt4z4QmQko6Be170FFhg5fS2BsHut3tcFmxhqmPzrJPvREgvdj9JzVQnfbALFDpzWXLFaWUcyM4AOrgoRW4d5V7tNJJ1q2UW3F5hyv4R8vDKzYajoCssSXnpcgcpa6wNod8v%2FLsn7rcVdieVH7any3kJouiYUXZTv%2BJ%2Boalw65xMghuzVfX13Xjf33RMnhR7mBdSsJstdmn1aD1J%2Bsuob%2FHlYfhy57f5Ygc0e9sMyGDXkwRRk59TdGIqLGRlc1pg3mlQ2k0%2BteHcSX5DBBWxYXKkXX0SyBNXRUg1%2BNfbzFwKTwEsytusHiuLz1t2lClm3Qkd%2FSEFBkaChpkPYdntZDR5DM5crrIAa7Yzxev353GjzbIs8mkk5FbVPWSEjNIKirkLLsG15zUrP8rz3ro8fRuJ1AN8TLfYntkw4WTSNhS51H3itE4%2BBfyeqdaiKfCb91YFfvQolSe8VqA19CVcw9MFGXOEdYMU%2FYZ5KDxAuz%2FzqdnE55r4JJq4G7qGyDecULjATu%2BmMPVWLkqwz7FF3hRivXoHkj87rYZlVntv93im73YPCsbx%2BX0Xdeflf2EiEwbU6U7cFW3akt58xKAC0i1S9PoCel2r18AiD%2FMCof0PGYDTaZ4GgeWBLMKn278MGOqUBkAexjfbRGJ4GRME8PtZ6SFJGe%2BJUz4lFcTwVVewaknyfw%2Bxu3rgSY5Erc%2FJxTriGitql0%2BGsgDBEEzU52I5Q2jyRCSE7t6YusFa%2BRA2G3FWBB2ilC5Np82TpiG3L0dZf8CCysYpIoQpjGOupm7Qbmcuibt0cpFxmOSXxONU62UGus9cK%2FLUx0RvbgkricKGkaEO%2FeRNY4khpiDWcaUxUd1RK0NuV&X-Amz-Signature=36d1a2a42a5be50516871ac147c37d2a569abdc7fcb676ea43d9838fdc17a283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VH3F7Y7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgAG%2Bb0Wy1EMMGRMG6SdcT%2FnhTKMFB6dbhXVaBaqKDFAiEAq2%2BkGAkI0%2B%2FZfs7%2FSo7ANoNeQ2s15%2FJjUq6aamWHhiwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPI7%2FS5vD%2B2HUNb1MyrcAwcQt4z4QmQko6Be170FFhg5fS2BsHut3tcFmxhqmPzrJPvREgvdj9JzVQnfbALFDpzWXLFaWUcyM4AOrgoRW4d5V7tNJJ1q2UW3F5hyv4R8vDKzYajoCssSXnpcgcpa6wNod8v%2FLsn7rcVdieVH7any3kJouiYUXZTv%2BJ%2Boalw65xMghuzVfX13Xjf33RMnhR7mBdSsJstdmn1aD1J%2Bsuob%2FHlYfhy57f5Ygc0e9sMyGDXkwRRk59TdGIqLGRlc1pg3mlQ2k0%2BteHcSX5DBBWxYXKkXX0SyBNXRUg1%2BNfbzFwKTwEsytusHiuLz1t2lClm3Qkd%2FSEFBkaChpkPYdntZDR5DM5crrIAa7Yzxev353GjzbIs8mkk5FbVPWSEjNIKirkLLsG15zUrP8rz3ro8fRuJ1AN8TLfYntkw4WTSNhS51H3itE4%2BBfyeqdaiKfCb91YFfvQolSe8VqA19CVcw9MFGXOEdYMU%2FYZ5KDxAuz%2FzqdnE55r4JJq4G7qGyDecULjATu%2BmMPVWLkqwz7FF3hRivXoHkj87rYZlVntv93im73YPCsbx%2BX0Xdeflf2EiEwbU6U7cFW3akt58xKAC0i1S9PoCel2r18AiD%2FMCof0PGYDTaZ4GgeWBLMKn278MGOqUBkAexjfbRGJ4GRME8PtZ6SFJGe%2BJUz4lFcTwVVewaknyfw%2Bxu3rgSY5Erc%2FJxTriGitql0%2BGsgDBEEzU52I5Q2jyRCSE7t6YusFa%2BRA2G3FWBB2ilC5Np82TpiG3L0dZf8CCysYpIoQpjGOupm7Qbmcuibt0cpFxmOSXxONU62UGus9cK%2FLUx0RvbgkricKGkaEO%2FeRNY4khpiDWcaUxUd1RK0NuV&X-Amz-Signature=46d75064675f13d15e1db4a6767dfe6ddb75758fc9bfa33f16f4c9d4cf280929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
