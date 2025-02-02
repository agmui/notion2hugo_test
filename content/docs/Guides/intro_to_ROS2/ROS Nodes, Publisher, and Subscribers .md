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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK3BXUNN%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkXdxOWQFptVB3UehWoxf07D%2BRhxkasjSkZq6tpRPuYgIhAMc2r%2BVfebkDYQeKONHClQXnHDnmFjPRQt7ZQT%2FGkiR%2BKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6ghn4J3LcTn0jFrMq3AOmoc8YKbeYpeaTqcwkK6kJgupLJQ8qXrldi3lcsco12wnAYkkso4H4GZaYWREoWCWBHgCjjTBggOSpVfh1G3ycv3epPgc5ZGrzsfEY8vFm5bcqZuWE2pxfZh3WFtDx7%2B23m1x7A%2FqsCBoemta2K%2BduEyjNQnYqmxAK7Tp0SY95DDZCK2nRVjSD8caP%2BIZ6YowofGO7Uv92A1%2BJBSieTY77upDLzND%2F2CnUbO%2B7qlUOQbiUm%2F%2FMdLMkSenhJrIaP2DzKUDsMWOfLRwkSrRBPmM9J0cICQinr02XI4CPJE%2Bt2j4sA4jNDH%2FqMRxBtCV9kpzTLSlx%2BOrW76R0qKXFCSs9D577Qg4560YaIW1cg04Tz%2FcLKm2Ijyel3bXamZkihYHPx00CJk%2BGqnDGOlTMVqjsqAi2UtIz%2FHSl%2BnY9Ap1gkmca3QpvuBJ3rtx2KrrXqU085FVKPqTMIFd16qIwhMA%2BJXdITl%2BQUWCXz2cMtZ8eDTVMzZjV6GMjHuzFoefbhZG2PrcSR9ML0GjAHT6bBJ7iXsR%2BZ%2BvFTL8R6d1%2Bt8p6RJh3KU0CyHFI9pzYw55fPyRWKvNoimH%2B30cCOMaN5UYfYXU%2Bcg2BAuJMI02bOrl9AR0TQoRd0t6olq%2BgYTCj3P68BjqkAbHDqnBEwnrSWj2Sqwo4IiEEwoHQExTIxKwcQbm3NCKxp%2BS7aAZLOyBayVKtPmBRQGyV0ytOZKgi41iRLL7tMfPPgzOaJj9KvnkoV%2F1l66NjKFftXdf9Ev6QdkRGj9rzc36TzHx3ZDzhU4cw71s5D0LP49Fyg9YOU1u3fqAgEdH1oZ4OrHMgcJAOqcJo5KZC%2BwezOMlovjtMVwBFgVnKhVKqsg5c&X-Amz-Signature=7cefd0c808be28a6baf7e6bf3484790706e17df815096ff51ab4803a3d756ac8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK3BXUNN%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkXdxOWQFptVB3UehWoxf07D%2BRhxkasjSkZq6tpRPuYgIhAMc2r%2BVfebkDYQeKONHClQXnHDnmFjPRQt7ZQT%2FGkiR%2BKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6ghn4J3LcTn0jFrMq3AOmoc8YKbeYpeaTqcwkK6kJgupLJQ8qXrldi3lcsco12wnAYkkso4H4GZaYWREoWCWBHgCjjTBggOSpVfh1G3ycv3epPgc5ZGrzsfEY8vFm5bcqZuWE2pxfZh3WFtDx7%2B23m1x7A%2FqsCBoemta2K%2BduEyjNQnYqmxAK7Tp0SY95DDZCK2nRVjSD8caP%2BIZ6YowofGO7Uv92A1%2BJBSieTY77upDLzND%2F2CnUbO%2B7qlUOQbiUm%2F%2FMdLMkSenhJrIaP2DzKUDsMWOfLRwkSrRBPmM9J0cICQinr02XI4CPJE%2Bt2j4sA4jNDH%2FqMRxBtCV9kpzTLSlx%2BOrW76R0qKXFCSs9D577Qg4560YaIW1cg04Tz%2FcLKm2Ijyel3bXamZkihYHPx00CJk%2BGqnDGOlTMVqjsqAi2UtIz%2FHSl%2BnY9Ap1gkmca3QpvuBJ3rtx2KrrXqU085FVKPqTMIFd16qIwhMA%2BJXdITl%2BQUWCXz2cMtZ8eDTVMzZjV6GMjHuzFoefbhZG2PrcSR9ML0GjAHT6bBJ7iXsR%2BZ%2BvFTL8R6d1%2Bt8p6RJh3KU0CyHFI9pzYw55fPyRWKvNoimH%2B30cCOMaN5UYfYXU%2Bcg2BAuJMI02bOrl9AR0TQoRd0t6olq%2BgYTCj3P68BjqkAbHDqnBEwnrSWj2Sqwo4IiEEwoHQExTIxKwcQbm3NCKxp%2BS7aAZLOyBayVKtPmBRQGyV0ytOZKgi41iRLL7tMfPPgzOaJj9KvnkoV%2F1l66NjKFftXdf9Ev6QdkRGj9rzc36TzHx3ZDzhU4cw71s5D0LP49Fyg9YOU1u3fqAgEdH1oZ4OrHMgcJAOqcJo5KZC%2BwezOMlovjtMVwBFgVnKhVKqsg5c&X-Amz-Signature=f84b147e5fdfe4acc0e98b197f82269d070e67dc023d3c3e3a2d97551c48f0a1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK3BXUNN%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkXdxOWQFptVB3UehWoxf07D%2BRhxkasjSkZq6tpRPuYgIhAMc2r%2BVfebkDYQeKONHClQXnHDnmFjPRQt7ZQT%2FGkiR%2BKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6ghn4J3LcTn0jFrMq3AOmoc8YKbeYpeaTqcwkK6kJgupLJQ8qXrldi3lcsco12wnAYkkso4H4GZaYWREoWCWBHgCjjTBggOSpVfh1G3ycv3epPgc5ZGrzsfEY8vFm5bcqZuWE2pxfZh3WFtDx7%2B23m1x7A%2FqsCBoemta2K%2BduEyjNQnYqmxAK7Tp0SY95DDZCK2nRVjSD8caP%2BIZ6YowofGO7Uv92A1%2BJBSieTY77upDLzND%2F2CnUbO%2B7qlUOQbiUm%2F%2FMdLMkSenhJrIaP2DzKUDsMWOfLRwkSrRBPmM9J0cICQinr02XI4CPJE%2Bt2j4sA4jNDH%2FqMRxBtCV9kpzTLSlx%2BOrW76R0qKXFCSs9D577Qg4560YaIW1cg04Tz%2FcLKm2Ijyel3bXamZkihYHPx00CJk%2BGqnDGOlTMVqjsqAi2UtIz%2FHSl%2BnY9Ap1gkmca3QpvuBJ3rtx2KrrXqU085FVKPqTMIFd16qIwhMA%2BJXdITl%2BQUWCXz2cMtZ8eDTVMzZjV6GMjHuzFoefbhZG2PrcSR9ML0GjAHT6bBJ7iXsR%2BZ%2BvFTL8R6d1%2Bt8p6RJh3KU0CyHFI9pzYw55fPyRWKvNoimH%2B30cCOMaN5UYfYXU%2Bcg2BAuJMI02bOrl9AR0TQoRd0t6olq%2BgYTCj3P68BjqkAbHDqnBEwnrSWj2Sqwo4IiEEwoHQExTIxKwcQbm3NCKxp%2BS7aAZLOyBayVKtPmBRQGyV0ytOZKgi41iRLL7tMfPPgzOaJj9KvnkoV%2F1l66NjKFftXdf9Ev6QdkRGj9rzc36TzHx3ZDzhU4cw71s5D0LP49Fyg9YOU1u3fqAgEdH1oZ4OrHMgcJAOqcJo5KZC%2BwezOMlovjtMVwBFgVnKhVKqsg5c&X-Amz-Signature=7a36e7f63773e113bdf5563adf3c9ec1ae67ea36e1ed467259229adb013b9533&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK3BXUNN%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkXdxOWQFptVB3UehWoxf07D%2BRhxkasjSkZq6tpRPuYgIhAMc2r%2BVfebkDYQeKONHClQXnHDnmFjPRQt7ZQT%2FGkiR%2BKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6ghn4J3LcTn0jFrMq3AOmoc8YKbeYpeaTqcwkK6kJgupLJQ8qXrldi3lcsco12wnAYkkso4H4GZaYWREoWCWBHgCjjTBggOSpVfh1G3ycv3epPgc5ZGrzsfEY8vFm5bcqZuWE2pxfZh3WFtDx7%2B23m1x7A%2FqsCBoemta2K%2BduEyjNQnYqmxAK7Tp0SY95DDZCK2nRVjSD8caP%2BIZ6YowofGO7Uv92A1%2BJBSieTY77upDLzND%2F2CnUbO%2B7qlUOQbiUm%2F%2FMdLMkSenhJrIaP2DzKUDsMWOfLRwkSrRBPmM9J0cICQinr02XI4CPJE%2Bt2j4sA4jNDH%2FqMRxBtCV9kpzTLSlx%2BOrW76R0qKXFCSs9D577Qg4560YaIW1cg04Tz%2FcLKm2Ijyel3bXamZkihYHPx00CJk%2BGqnDGOlTMVqjsqAi2UtIz%2FHSl%2BnY9Ap1gkmca3QpvuBJ3rtx2KrrXqU085FVKPqTMIFd16qIwhMA%2BJXdITl%2BQUWCXz2cMtZ8eDTVMzZjV6GMjHuzFoefbhZG2PrcSR9ML0GjAHT6bBJ7iXsR%2BZ%2BvFTL8R6d1%2Bt8p6RJh3KU0CyHFI9pzYw55fPyRWKvNoimH%2B30cCOMaN5UYfYXU%2Bcg2BAuJMI02bOrl9AR0TQoRd0t6olq%2BgYTCj3P68BjqkAbHDqnBEwnrSWj2Sqwo4IiEEwoHQExTIxKwcQbm3NCKxp%2BS7aAZLOyBayVKtPmBRQGyV0ytOZKgi41iRLL7tMfPPgzOaJj9KvnkoV%2F1l66NjKFftXdf9Ev6QdkRGj9rzc36TzHx3ZDzhU4cw71s5D0LP49Fyg9YOU1u3fqAgEdH1oZ4OrHMgcJAOqcJo5KZC%2BwezOMlovjtMVwBFgVnKhVKqsg5c&X-Amz-Signature=0356519e170ce8837dc7cbe006786332c8dcf54fc674f900b9501bf06fa9e2c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK3BXUNN%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkXdxOWQFptVB3UehWoxf07D%2BRhxkasjSkZq6tpRPuYgIhAMc2r%2BVfebkDYQeKONHClQXnHDnmFjPRQt7ZQT%2FGkiR%2BKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6ghn4J3LcTn0jFrMq3AOmoc8YKbeYpeaTqcwkK6kJgupLJQ8qXrldi3lcsco12wnAYkkso4H4GZaYWREoWCWBHgCjjTBggOSpVfh1G3ycv3epPgc5ZGrzsfEY8vFm5bcqZuWE2pxfZh3WFtDx7%2B23m1x7A%2FqsCBoemta2K%2BduEyjNQnYqmxAK7Tp0SY95DDZCK2nRVjSD8caP%2BIZ6YowofGO7Uv92A1%2BJBSieTY77upDLzND%2F2CnUbO%2B7qlUOQbiUm%2F%2FMdLMkSenhJrIaP2DzKUDsMWOfLRwkSrRBPmM9J0cICQinr02XI4CPJE%2Bt2j4sA4jNDH%2FqMRxBtCV9kpzTLSlx%2BOrW76R0qKXFCSs9D577Qg4560YaIW1cg04Tz%2FcLKm2Ijyel3bXamZkihYHPx00CJk%2BGqnDGOlTMVqjsqAi2UtIz%2FHSl%2BnY9Ap1gkmca3QpvuBJ3rtx2KrrXqU085FVKPqTMIFd16qIwhMA%2BJXdITl%2BQUWCXz2cMtZ8eDTVMzZjV6GMjHuzFoefbhZG2PrcSR9ML0GjAHT6bBJ7iXsR%2BZ%2BvFTL8R6d1%2Bt8p6RJh3KU0CyHFI9pzYw55fPyRWKvNoimH%2B30cCOMaN5UYfYXU%2Bcg2BAuJMI02bOrl9AR0TQoRd0t6olq%2BgYTCj3P68BjqkAbHDqnBEwnrSWj2Sqwo4IiEEwoHQExTIxKwcQbm3NCKxp%2BS7aAZLOyBayVKtPmBRQGyV0ytOZKgi41iRLL7tMfPPgzOaJj9KvnkoV%2F1l66NjKFftXdf9Ev6QdkRGj9rzc36TzHx3ZDzhU4cw71s5D0LP49Fyg9YOU1u3fqAgEdH1oZ4OrHMgcJAOqcJo5KZC%2BwezOMlovjtMVwBFgVnKhVKqsg5c&X-Amz-Signature=30e66cbcc8e5ec65679cf6180d74bf841330c8142e780c7e8597ef7716b133de&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK3BXUNN%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkXdxOWQFptVB3UehWoxf07D%2BRhxkasjSkZq6tpRPuYgIhAMc2r%2BVfebkDYQeKONHClQXnHDnmFjPRQt7ZQT%2FGkiR%2BKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6ghn4J3LcTn0jFrMq3AOmoc8YKbeYpeaTqcwkK6kJgupLJQ8qXrldi3lcsco12wnAYkkso4H4GZaYWREoWCWBHgCjjTBggOSpVfh1G3ycv3epPgc5ZGrzsfEY8vFm5bcqZuWE2pxfZh3WFtDx7%2B23m1x7A%2FqsCBoemta2K%2BduEyjNQnYqmxAK7Tp0SY95DDZCK2nRVjSD8caP%2BIZ6YowofGO7Uv92A1%2BJBSieTY77upDLzND%2F2CnUbO%2B7qlUOQbiUm%2F%2FMdLMkSenhJrIaP2DzKUDsMWOfLRwkSrRBPmM9J0cICQinr02XI4CPJE%2Bt2j4sA4jNDH%2FqMRxBtCV9kpzTLSlx%2BOrW76R0qKXFCSs9D577Qg4560YaIW1cg04Tz%2FcLKm2Ijyel3bXamZkihYHPx00CJk%2BGqnDGOlTMVqjsqAi2UtIz%2FHSl%2BnY9Ap1gkmca3QpvuBJ3rtx2KrrXqU085FVKPqTMIFd16qIwhMA%2BJXdITl%2BQUWCXz2cMtZ8eDTVMzZjV6GMjHuzFoefbhZG2PrcSR9ML0GjAHT6bBJ7iXsR%2BZ%2BvFTL8R6d1%2Bt8p6RJh3KU0CyHFI9pzYw55fPyRWKvNoimH%2B30cCOMaN5UYfYXU%2Bcg2BAuJMI02bOrl9AR0TQoRd0t6olq%2BgYTCj3P68BjqkAbHDqnBEwnrSWj2Sqwo4IiEEwoHQExTIxKwcQbm3NCKxp%2BS7aAZLOyBayVKtPmBRQGyV0ytOZKgi41iRLL7tMfPPgzOaJj9KvnkoV%2F1l66NjKFftXdf9Ev6QdkRGj9rzc36TzHx3ZDzhU4cw71s5D0LP49Fyg9YOU1u3fqAgEdH1oZ4OrHMgcJAOqcJo5KZC%2BwezOMlovjtMVwBFgVnKhVKqsg5c&X-Amz-Signature=51291fc57bdbd3392ec4609db6ec12263034f9868e6dda841a6cd761e319c5c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK3BXUNN%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkXdxOWQFptVB3UehWoxf07D%2BRhxkasjSkZq6tpRPuYgIhAMc2r%2BVfebkDYQeKONHClQXnHDnmFjPRQt7ZQT%2FGkiR%2BKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6ghn4J3LcTn0jFrMq3AOmoc8YKbeYpeaTqcwkK6kJgupLJQ8qXrldi3lcsco12wnAYkkso4H4GZaYWREoWCWBHgCjjTBggOSpVfh1G3ycv3epPgc5ZGrzsfEY8vFm5bcqZuWE2pxfZh3WFtDx7%2B23m1x7A%2FqsCBoemta2K%2BduEyjNQnYqmxAK7Tp0SY95DDZCK2nRVjSD8caP%2BIZ6YowofGO7Uv92A1%2BJBSieTY77upDLzND%2F2CnUbO%2B7qlUOQbiUm%2F%2FMdLMkSenhJrIaP2DzKUDsMWOfLRwkSrRBPmM9J0cICQinr02XI4CPJE%2Bt2j4sA4jNDH%2FqMRxBtCV9kpzTLSlx%2BOrW76R0qKXFCSs9D577Qg4560YaIW1cg04Tz%2FcLKm2Ijyel3bXamZkihYHPx00CJk%2BGqnDGOlTMVqjsqAi2UtIz%2FHSl%2BnY9Ap1gkmca3QpvuBJ3rtx2KrrXqU085FVKPqTMIFd16qIwhMA%2BJXdITl%2BQUWCXz2cMtZ8eDTVMzZjV6GMjHuzFoefbhZG2PrcSR9ML0GjAHT6bBJ7iXsR%2BZ%2BvFTL8R6d1%2Bt8p6RJh3KU0CyHFI9pzYw55fPyRWKvNoimH%2B30cCOMaN5UYfYXU%2Bcg2BAuJMI02bOrl9AR0TQoRd0t6olq%2BgYTCj3P68BjqkAbHDqnBEwnrSWj2Sqwo4IiEEwoHQExTIxKwcQbm3NCKxp%2BS7aAZLOyBayVKtPmBRQGyV0ytOZKgi41iRLL7tMfPPgzOaJj9KvnkoV%2F1l66NjKFftXdf9Ev6QdkRGj9rzc36TzHx3ZDzhU4cw71s5D0LP49Fyg9YOU1u3fqAgEdH1oZ4OrHMgcJAOqcJo5KZC%2BwezOMlovjtMVwBFgVnKhVKqsg5c&X-Amz-Signature=d797aefd29bc1d3d95f3f09fefbffa305b2e053ebeb89bc95470e46f55267a00&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK3BXUNN%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkXdxOWQFptVB3UehWoxf07D%2BRhxkasjSkZq6tpRPuYgIhAMc2r%2BVfebkDYQeKONHClQXnHDnmFjPRQt7ZQT%2FGkiR%2BKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6ghn4J3LcTn0jFrMq3AOmoc8YKbeYpeaTqcwkK6kJgupLJQ8qXrldi3lcsco12wnAYkkso4H4GZaYWREoWCWBHgCjjTBggOSpVfh1G3ycv3epPgc5ZGrzsfEY8vFm5bcqZuWE2pxfZh3WFtDx7%2B23m1x7A%2FqsCBoemta2K%2BduEyjNQnYqmxAK7Tp0SY95DDZCK2nRVjSD8caP%2BIZ6YowofGO7Uv92A1%2BJBSieTY77upDLzND%2F2CnUbO%2B7qlUOQbiUm%2F%2FMdLMkSenhJrIaP2DzKUDsMWOfLRwkSrRBPmM9J0cICQinr02XI4CPJE%2Bt2j4sA4jNDH%2FqMRxBtCV9kpzTLSlx%2BOrW76R0qKXFCSs9D577Qg4560YaIW1cg04Tz%2FcLKm2Ijyel3bXamZkihYHPx00CJk%2BGqnDGOlTMVqjsqAi2UtIz%2FHSl%2BnY9Ap1gkmca3QpvuBJ3rtx2KrrXqU085FVKPqTMIFd16qIwhMA%2BJXdITl%2BQUWCXz2cMtZ8eDTVMzZjV6GMjHuzFoefbhZG2PrcSR9ML0GjAHT6bBJ7iXsR%2BZ%2BvFTL8R6d1%2Bt8p6RJh3KU0CyHFI9pzYw55fPyRWKvNoimH%2B30cCOMaN5UYfYXU%2Bcg2BAuJMI02bOrl9AR0TQoRd0t6olq%2BgYTCj3P68BjqkAbHDqnBEwnrSWj2Sqwo4IiEEwoHQExTIxKwcQbm3NCKxp%2BS7aAZLOyBayVKtPmBRQGyV0ytOZKgi41iRLL7tMfPPgzOaJj9KvnkoV%2F1l66NjKFftXdf9Ev6QdkRGj9rzc36TzHx3ZDzhU4cw71s5D0LP49Fyg9YOU1u3fqAgEdH1oZ4OrHMgcJAOqcJo5KZC%2BwezOMlovjtMVwBFgVnKhVKqsg5c&X-Amz-Signature=edf82388915695c1b1c2beb7b3f8222abdc81edf44362a3dc77456ed2a45caed&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
