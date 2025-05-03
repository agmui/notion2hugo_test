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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDU7B3GG%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCU6z%2BnqbSEClzh0OESA50qNHUunFoEp%2FBoc9GfzCEdmwIgZUjOEv2mTW6rMm4yI0yFXflNXhRiYGPFjzAFQz3S1Y0qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKANcPEfq9M56eyLGSrcA%2Bd7EGZ4ZIgY5ie6VC5ssJHl2l3OoGeDQGAr9ZE8edYqTxnrKVDoZvngvNhWI3bJjwGR4s1wYTk3ByKAaiLPLj99erygLOqre5BoDoUW3UGZsORuCSM7raX%2B4yA3X9Il0kQ4iDBZDsXcF0NfS54xQv3ERqYZRUG%2FgFQuKz9fZszy7oLVEDOhAShPh1Efp8SzXTVJtwaJ54fjZIgvmU9Qs63R%2F40GnPEV43JJYy%2Fk4OuQeFdrlVsuwotHffBtYE1tUbU3nw990tjMqsv44%2BsHNxKkM7IioFtRyoRDOXKvtpYVLym22YR8VJ82pqx1BK1xsZOrCNuK5kJZFdzO8%2BMLvMsSydtujp1TFpVkbRrNVE%2FjHWibY0dVDOYx1rYICcz%2Bvy2ngLWhbDLJGklM8xRSnhi0xuQSUyrkW1NYPCgpBxBDuN7CbNFT2JeWxLfay%2B%2FXPJhTgejmvMDgDILGhs3KGAAjGbRqOTaUD2M6FUiVvdac4dbrtXPfZRQ8ExNUAZjvqKZlDxmTLyCLbPEzl3Bl2YK8pdvpChFQ%2F3miKpLV1FH38BvIoLuqSNupat78TveHL%2FjEz4Bx%2BaitWgzZ%2BX4q6x4uStWtz8oYXxr2071XhEH2cQNkI1LJf59iM%2BWeMPSG1sAGOqUB7XHWIZ%2FfedBY8Qog2bAFFuvhOsWHBsAuFugJCEyCRX%2BlI69BJPC%2FTMjtks2xLUnStGxzU21lyhKjfwmtZ6TSLVioNUh%2Fnw8hmu26ptFp9N3mOn375FoByvYbsfhaPNVRYCUJXnOR14Nac94elQKrmsIoXpBLtdsnYgSLcrkLB9jNEtluaM40ayIbvfwSxAR%2BoHhMKaWwV054KSfF9urnmqxNDlbV&X-Amz-Signature=a1a5520b42f3fccbb89af9769e66a33ea62694700cfba4b557a0fe34b839d040&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDU7B3GG%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCU6z%2BnqbSEClzh0OESA50qNHUunFoEp%2FBoc9GfzCEdmwIgZUjOEv2mTW6rMm4yI0yFXflNXhRiYGPFjzAFQz3S1Y0qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKANcPEfq9M56eyLGSrcA%2Bd7EGZ4ZIgY5ie6VC5ssJHl2l3OoGeDQGAr9ZE8edYqTxnrKVDoZvngvNhWI3bJjwGR4s1wYTk3ByKAaiLPLj99erygLOqre5BoDoUW3UGZsORuCSM7raX%2B4yA3X9Il0kQ4iDBZDsXcF0NfS54xQv3ERqYZRUG%2FgFQuKz9fZszy7oLVEDOhAShPh1Efp8SzXTVJtwaJ54fjZIgvmU9Qs63R%2F40GnPEV43JJYy%2Fk4OuQeFdrlVsuwotHffBtYE1tUbU3nw990tjMqsv44%2BsHNxKkM7IioFtRyoRDOXKvtpYVLym22YR8VJ82pqx1BK1xsZOrCNuK5kJZFdzO8%2BMLvMsSydtujp1TFpVkbRrNVE%2FjHWibY0dVDOYx1rYICcz%2Bvy2ngLWhbDLJGklM8xRSnhi0xuQSUyrkW1NYPCgpBxBDuN7CbNFT2JeWxLfay%2B%2FXPJhTgejmvMDgDILGhs3KGAAjGbRqOTaUD2M6FUiVvdac4dbrtXPfZRQ8ExNUAZjvqKZlDxmTLyCLbPEzl3Bl2YK8pdvpChFQ%2F3miKpLV1FH38BvIoLuqSNupat78TveHL%2FjEz4Bx%2BaitWgzZ%2BX4q6x4uStWtz8oYXxr2071XhEH2cQNkI1LJf59iM%2BWeMPSG1sAGOqUB7XHWIZ%2FfedBY8Qog2bAFFuvhOsWHBsAuFugJCEyCRX%2BlI69BJPC%2FTMjtks2xLUnStGxzU21lyhKjfwmtZ6TSLVioNUh%2Fnw8hmu26ptFp9N3mOn375FoByvYbsfhaPNVRYCUJXnOR14Nac94elQKrmsIoXpBLtdsnYgSLcrkLB9jNEtluaM40ayIbvfwSxAR%2BoHhMKaWwV054KSfF9urnmqxNDlbV&X-Amz-Signature=4bc72cfa7ba39da00593aba5f00da04ff429682a2a4d8b0e6684b70e8bc09ff3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDU7B3GG%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCU6z%2BnqbSEClzh0OESA50qNHUunFoEp%2FBoc9GfzCEdmwIgZUjOEv2mTW6rMm4yI0yFXflNXhRiYGPFjzAFQz3S1Y0qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKANcPEfq9M56eyLGSrcA%2Bd7EGZ4ZIgY5ie6VC5ssJHl2l3OoGeDQGAr9ZE8edYqTxnrKVDoZvngvNhWI3bJjwGR4s1wYTk3ByKAaiLPLj99erygLOqre5BoDoUW3UGZsORuCSM7raX%2B4yA3X9Il0kQ4iDBZDsXcF0NfS54xQv3ERqYZRUG%2FgFQuKz9fZszy7oLVEDOhAShPh1Efp8SzXTVJtwaJ54fjZIgvmU9Qs63R%2F40GnPEV43JJYy%2Fk4OuQeFdrlVsuwotHffBtYE1tUbU3nw990tjMqsv44%2BsHNxKkM7IioFtRyoRDOXKvtpYVLym22YR8VJ82pqx1BK1xsZOrCNuK5kJZFdzO8%2BMLvMsSydtujp1TFpVkbRrNVE%2FjHWibY0dVDOYx1rYICcz%2Bvy2ngLWhbDLJGklM8xRSnhi0xuQSUyrkW1NYPCgpBxBDuN7CbNFT2JeWxLfay%2B%2FXPJhTgejmvMDgDILGhs3KGAAjGbRqOTaUD2M6FUiVvdac4dbrtXPfZRQ8ExNUAZjvqKZlDxmTLyCLbPEzl3Bl2YK8pdvpChFQ%2F3miKpLV1FH38BvIoLuqSNupat78TveHL%2FjEz4Bx%2BaitWgzZ%2BX4q6x4uStWtz8oYXxr2071XhEH2cQNkI1LJf59iM%2BWeMPSG1sAGOqUB7XHWIZ%2FfedBY8Qog2bAFFuvhOsWHBsAuFugJCEyCRX%2BlI69BJPC%2FTMjtks2xLUnStGxzU21lyhKjfwmtZ6TSLVioNUh%2Fnw8hmu26ptFp9N3mOn375FoByvYbsfhaPNVRYCUJXnOR14Nac94elQKrmsIoXpBLtdsnYgSLcrkLB9jNEtluaM40ayIbvfwSxAR%2BoHhMKaWwV054KSfF9urnmqxNDlbV&X-Amz-Signature=dc8a45de80fd4ecad77f399cca4dc5d939b4d6ddb0b670150da6bc2cb8b775df&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDU7B3GG%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCU6z%2BnqbSEClzh0OESA50qNHUunFoEp%2FBoc9GfzCEdmwIgZUjOEv2mTW6rMm4yI0yFXflNXhRiYGPFjzAFQz3S1Y0qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKANcPEfq9M56eyLGSrcA%2Bd7EGZ4ZIgY5ie6VC5ssJHl2l3OoGeDQGAr9ZE8edYqTxnrKVDoZvngvNhWI3bJjwGR4s1wYTk3ByKAaiLPLj99erygLOqre5BoDoUW3UGZsORuCSM7raX%2B4yA3X9Il0kQ4iDBZDsXcF0NfS54xQv3ERqYZRUG%2FgFQuKz9fZszy7oLVEDOhAShPh1Efp8SzXTVJtwaJ54fjZIgvmU9Qs63R%2F40GnPEV43JJYy%2Fk4OuQeFdrlVsuwotHffBtYE1tUbU3nw990tjMqsv44%2BsHNxKkM7IioFtRyoRDOXKvtpYVLym22YR8VJ82pqx1BK1xsZOrCNuK5kJZFdzO8%2BMLvMsSydtujp1TFpVkbRrNVE%2FjHWibY0dVDOYx1rYICcz%2Bvy2ngLWhbDLJGklM8xRSnhi0xuQSUyrkW1NYPCgpBxBDuN7CbNFT2JeWxLfay%2B%2FXPJhTgejmvMDgDILGhs3KGAAjGbRqOTaUD2M6FUiVvdac4dbrtXPfZRQ8ExNUAZjvqKZlDxmTLyCLbPEzl3Bl2YK8pdvpChFQ%2F3miKpLV1FH38BvIoLuqSNupat78TveHL%2FjEz4Bx%2BaitWgzZ%2BX4q6x4uStWtz8oYXxr2071XhEH2cQNkI1LJf59iM%2BWeMPSG1sAGOqUB7XHWIZ%2FfedBY8Qog2bAFFuvhOsWHBsAuFugJCEyCRX%2BlI69BJPC%2FTMjtks2xLUnStGxzU21lyhKjfwmtZ6TSLVioNUh%2Fnw8hmu26ptFp9N3mOn375FoByvYbsfhaPNVRYCUJXnOR14Nac94elQKrmsIoXpBLtdsnYgSLcrkLB9jNEtluaM40ayIbvfwSxAR%2BoHhMKaWwV054KSfF9urnmqxNDlbV&X-Amz-Signature=de243291416b2aa3d3fd1988b7456005da83ceaa3084d2f368ad2b4d2f1dc9c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDU7B3GG%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCU6z%2BnqbSEClzh0OESA50qNHUunFoEp%2FBoc9GfzCEdmwIgZUjOEv2mTW6rMm4yI0yFXflNXhRiYGPFjzAFQz3S1Y0qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKANcPEfq9M56eyLGSrcA%2Bd7EGZ4ZIgY5ie6VC5ssJHl2l3OoGeDQGAr9ZE8edYqTxnrKVDoZvngvNhWI3bJjwGR4s1wYTk3ByKAaiLPLj99erygLOqre5BoDoUW3UGZsORuCSM7raX%2B4yA3X9Il0kQ4iDBZDsXcF0NfS54xQv3ERqYZRUG%2FgFQuKz9fZszy7oLVEDOhAShPh1Efp8SzXTVJtwaJ54fjZIgvmU9Qs63R%2F40GnPEV43JJYy%2Fk4OuQeFdrlVsuwotHffBtYE1tUbU3nw990tjMqsv44%2BsHNxKkM7IioFtRyoRDOXKvtpYVLym22YR8VJ82pqx1BK1xsZOrCNuK5kJZFdzO8%2BMLvMsSydtujp1TFpVkbRrNVE%2FjHWibY0dVDOYx1rYICcz%2Bvy2ngLWhbDLJGklM8xRSnhi0xuQSUyrkW1NYPCgpBxBDuN7CbNFT2JeWxLfay%2B%2FXPJhTgejmvMDgDILGhs3KGAAjGbRqOTaUD2M6FUiVvdac4dbrtXPfZRQ8ExNUAZjvqKZlDxmTLyCLbPEzl3Bl2YK8pdvpChFQ%2F3miKpLV1FH38BvIoLuqSNupat78TveHL%2FjEz4Bx%2BaitWgzZ%2BX4q6x4uStWtz8oYXxr2071XhEH2cQNkI1LJf59iM%2BWeMPSG1sAGOqUB7XHWIZ%2FfedBY8Qog2bAFFuvhOsWHBsAuFugJCEyCRX%2BlI69BJPC%2FTMjtks2xLUnStGxzU21lyhKjfwmtZ6TSLVioNUh%2Fnw8hmu26ptFp9N3mOn375FoByvYbsfhaPNVRYCUJXnOR14Nac94elQKrmsIoXpBLtdsnYgSLcrkLB9jNEtluaM40ayIbvfwSxAR%2BoHhMKaWwV054KSfF9urnmqxNDlbV&X-Amz-Signature=2be5c441d9b853db47ca762eab57af5181f07988ad12813a97e62ab03f273f57&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDU7B3GG%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCU6z%2BnqbSEClzh0OESA50qNHUunFoEp%2FBoc9GfzCEdmwIgZUjOEv2mTW6rMm4yI0yFXflNXhRiYGPFjzAFQz3S1Y0qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKANcPEfq9M56eyLGSrcA%2Bd7EGZ4ZIgY5ie6VC5ssJHl2l3OoGeDQGAr9ZE8edYqTxnrKVDoZvngvNhWI3bJjwGR4s1wYTk3ByKAaiLPLj99erygLOqre5BoDoUW3UGZsORuCSM7raX%2B4yA3X9Il0kQ4iDBZDsXcF0NfS54xQv3ERqYZRUG%2FgFQuKz9fZszy7oLVEDOhAShPh1Efp8SzXTVJtwaJ54fjZIgvmU9Qs63R%2F40GnPEV43JJYy%2Fk4OuQeFdrlVsuwotHffBtYE1tUbU3nw990tjMqsv44%2BsHNxKkM7IioFtRyoRDOXKvtpYVLym22YR8VJ82pqx1BK1xsZOrCNuK5kJZFdzO8%2BMLvMsSydtujp1TFpVkbRrNVE%2FjHWibY0dVDOYx1rYICcz%2Bvy2ngLWhbDLJGklM8xRSnhi0xuQSUyrkW1NYPCgpBxBDuN7CbNFT2JeWxLfay%2B%2FXPJhTgejmvMDgDILGhs3KGAAjGbRqOTaUD2M6FUiVvdac4dbrtXPfZRQ8ExNUAZjvqKZlDxmTLyCLbPEzl3Bl2YK8pdvpChFQ%2F3miKpLV1FH38BvIoLuqSNupat78TveHL%2FjEz4Bx%2BaitWgzZ%2BX4q6x4uStWtz8oYXxr2071XhEH2cQNkI1LJf59iM%2BWeMPSG1sAGOqUB7XHWIZ%2FfedBY8Qog2bAFFuvhOsWHBsAuFugJCEyCRX%2BlI69BJPC%2FTMjtks2xLUnStGxzU21lyhKjfwmtZ6TSLVioNUh%2Fnw8hmu26ptFp9N3mOn375FoByvYbsfhaPNVRYCUJXnOR14Nac94elQKrmsIoXpBLtdsnYgSLcrkLB9jNEtluaM40ayIbvfwSxAR%2BoHhMKaWwV054KSfF9urnmqxNDlbV&X-Amz-Signature=cc934fcfc88cbde27a514837e312e69b5c92c27c7fc335229f4eb4ee375843d5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDU7B3GG%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCU6z%2BnqbSEClzh0OESA50qNHUunFoEp%2FBoc9GfzCEdmwIgZUjOEv2mTW6rMm4yI0yFXflNXhRiYGPFjzAFQz3S1Y0qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKANcPEfq9M56eyLGSrcA%2Bd7EGZ4ZIgY5ie6VC5ssJHl2l3OoGeDQGAr9ZE8edYqTxnrKVDoZvngvNhWI3bJjwGR4s1wYTk3ByKAaiLPLj99erygLOqre5BoDoUW3UGZsORuCSM7raX%2B4yA3X9Il0kQ4iDBZDsXcF0NfS54xQv3ERqYZRUG%2FgFQuKz9fZszy7oLVEDOhAShPh1Efp8SzXTVJtwaJ54fjZIgvmU9Qs63R%2F40GnPEV43JJYy%2Fk4OuQeFdrlVsuwotHffBtYE1tUbU3nw990tjMqsv44%2BsHNxKkM7IioFtRyoRDOXKvtpYVLym22YR8VJ82pqx1BK1xsZOrCNuK5kJZFdzO8%2BMLvMsSydtujp1TFpVkbRrNVE%2FjHWibY0dVDOYx1rYICcz%2Bvy2ngLWhbDLJGklM8xRSnhi0xuQSUyrkW1NYPCgpBxBDuN7CbNFT2JeWxLfay%2B%2FXPJhTgejmvMDgDILGhs3KGAAjGbRqOTaUD2M6FUiVvdac4dbrtXPfZRQ8ExNUAZjvqKZlDxmTLyCLbPEzl3Bl2YK8pdvpChFQ%2F3miKpLV1FH38BvIoLuqSNupat78TveHL%2FjEz4Bx%2BaitWgzZ%2BX4q6x4uStWtz8oYXxr2071XhEH2cQNkI1LJf59iM%2BWeMPSG1sAGOqUB7XHWIZ%2FfedBY8Qog2bAFFuvhOsWHBsAuFugJCEyCRX%2BlI69BJPC%2FTMjtks2xLUnStGxzU21lyhKjfwmtZ6TSLVioNUh%2Fnw8hmu26ptFp9N3mOn375FoByvYbsfhaPNVRYCUJXnOR14Nac94elQKrmsIoXpBLtdsnYgSLcrkLB9jNEtluaM40ayIbvfwSxAR%2BoHhMKaWwV054KSfF9urnmqxNDlbV&X-Amz-Signature=e476db06feb4f25734912a3d0bfab7a34b922a2651975cb76515c3b1a347ecec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDU7B3GG%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCU6z%2BnqbSEClzh0OESA50qNHUunFoEp%2FBoc9GfzCEdmwIgZUjOEv2mTW6rMm4yI0yFXflNXhRiYGPFjzAFQz3S1Y0qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKANcPEfq9M56eyLGSrcA%2Bd7EGZ4ZIgY5ie6VC5ssJHl2l3OoGeDQGAr9ZE8edYqTxnrKVDoZvngvNhWI3bJjwGR4s1wYTk3ByKAaiLPLj99erygLOqre5BoDoUW3UGZsORuCSM7raX%2B4yA3X9Il0kQ4iDBZDsXcF0NfS54xQv3ERqYZRUG%2FgFQuKz9fZszy7oLVEDOhAShPh1Efp8SzXTVJtwaJ54fjZIgvmU9Qs63R%2F40GnPEV43JJYy%2Fk4OuQeFdrlVsuwotHffBtYE1tUbU3nw990tjMqsv44%2BsHNxKkM7IioFtRyoRDOXKvtpYVLym22YR8VJ82pqx1BK1xsZOrCNuK5kJZFdzO8%2BMLvMsSydtujp1TFpVkbRrNVE%2FjHWibY0dVDOYx1rYICcz%2Bvy2ngLWhbDLJGklM8xRSnhi0xuQSUyrkW1NYPCgpBxBDuN7CbNFT2JeWxLfay%2B%2FXPJhTgejmvMDgDILGhs3KGAAjGbRqOTaUD2M6FUiVvdac4dbrtXPfZRQ8ExNUAZjvqKZlDxmTLyCLbPEzl3Bl2YK8pdvpChFQ%2F3miKpLV1FH38BvIoLuqSNupat78TveHL%2FjEz4Bx%2BaitWgzZ%2BX4q6x4uStWtz8oYXxr2071XhEH2cQNkI1LJf59iM%2BWeMPSG1sAGOqUB7XHWIZ%2FfedBY8Qog2bAFFuvhOsWHBsAuFugJCEyCRX%2BlI69BJPC%2FTMjtks2xLUnStGxzU21lyhKjfwmtZ6TSLVioNUh%2Fnw8hmu26ptFp9N3mOn375FoByvYbsfhaPNVRYCUJXnOR14Nac94elQKrmsIoXpBLtdsnYgSLcrkLB9jNEtluaM40ayIbvfwSxAR%2BoHhMKaWwV054KSfF9urnmqxNDlbV&X-Amz-Signature=8882dc9650780fde680a602d36bfc643a22aa7355dc13a64df5c0943c7a5cda1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
