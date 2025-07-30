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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5U7U3SF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1T9WmHfTIgig6qnAGwprTyc%2B%2FtqfI%2B1PJ9jLdxu01YAiAfudbI7Feal9W%2FuWeS1KDMN%2FBU0XxeXr7QIqtdL9T0eCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG8gDPTDRUacWKVtEKtwDMMu9dIxT1JBOT%2BtPi1FFlsaAfyZIjVMhK3EznsOYBCtDuzdSL4gf7ra07MAn%2B24hdNbElIdQk0fLDVbzWMSsM5EOPVb3zJMYjt6WgKybK5wZhgAggJxIAEQ%2BNH%2BZiJqdI3Vu3qcGBxAU9nAQXe7BW6t%2Fu19cLB2KMwvRJU8CywEmyIqgFfP3CR1RhzbvVVKh9IpUmFU5Lp3FWKUnb4CHYKeU2BQ%2BbsC1LTeQpJHf67JK5EdvHnxdaazyX2Ib%2FeiVM1Eiqlg9vg%2F27EK4NvOmfLeIpiBtmxFuOykCPeduZxKFjskfDz4GpEayK861tzczxbTkzTR24zzUTt1X14eFJ%2F5aqIKMGqBJdKi1xQeHyNOXv1VLEVJevd154ruPmR4W%2BWY54toFFpqXaTDlN4W5G7X%2B6v2mAEbdLd37RBGXUy6l5NJ1d64sjxPcCtQ7SMRAuN5f9jPvpjHOHZUlnfFxLfdepIbRBM0mvH4tctWhpY1vJlfbX3fg2d9ms7pqDgU3uBUtzZf2UTDuE4b6ZPmtPwYLa1tzqgYnFlPI%2FSGX8h1nc7BBXB%2FqE3hYJjVI3uiYFrvAZJkxhe0pzsxD4JLy5MNy5qLwGlJkf2yI3CRp%2BdZxQtTFY1Coft0UsUgw9ZqmxAY6pgFrNgZdYJfoBV2pCJjEeegT2ffqF0V8QgeFR%2Fa1%2FceDWyen5EC6FCkj3d75QXilsA7Lkz%2Fhy2Ez1CVU%2FbwwhaN0RSUtubZErBQW%2BjweljXCZ%2BqW8SIvAjLDzLcamqXKXQihx87Rfd9SC4UCUj1EfsAeHKCHUrHyzWgA2xblz3z7uoQI1ldMC3RSpvp6Co7g8ee9LKHYmruLjeL3l3w6CCcwkiuSbprV&X-Amz-Signature=618a12b88ea4480620cd31af9155c0813faf1cbebe7e0644a9266bc7c4901059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5U7U3SF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1T9WmHfTIgig6qnAGwprTyc%2B%2FtqfI%2B1PJ9jLdxu01YAiAfudbI7Feal9W%2FuWeS1KDMN%2FBU0XxeXr7QIqtdL9T0eCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG8gDPTDRUacWKVtEKtwDMMu9dIxT1JBOT%2BtPi1FFlsaAfyZIjVMhK3EznsOYBCtDuzdSL4gf7ra07MAn%2B24hdNbElIdQk0fLDVbzWMSsM5EOPVb3zJMYjt6WgKybK5wZhgAggJxIAEQ%2BNH%2BZiJqdI3Vu3qcGBxAU9nAQXe7BW6t%2Fu19cLB2KMwvRJU8CywEmyIqgFfP3CR1RhzbvVVKh9IpUmFU5Lp3FWKUnb4CHYKeU2BQ%2BbsC1LTeQpJHf67JK5EdvHnxdaazyX2Ib%2FeiVM1Eiqlg9vg%2F27EK4NvOmfLeIpiBtmxFuOykCPeduZxKFjskfDz4GpEayK861tzczxbTkzTR24zzUTt1X14eFJ%2F5aqIKMGqBJdKi1xQeHyNOXv1VLEVJevd154ruPmR4W%2BWY54toFFpqXaTDlN4W5G7X%2B6v2mAEbdLd37RBGXUy6l5NJ1d64sjxPcCtQ7SMRAuN5f9jPvpjHOHZUlnfFxLfdepIbRBM0mvH4tctWhpY1vJlfbX3fg2d9ms7pqDgU3uBUtzZf2UTDuE4b6ZPmtPwYLa1tzqgYnFlPI%2FSGX8h1nc7BBXB%2FqE3hYJjVI3uiYFrvAZJkxhe0pzsxD4JLy5MNy5qLwGlJkf2yI3CRp%2BdZxQtTFY1Coft0UsUgw9ZqmxAY6pgFrNgZdYJfoBV2pCJjEeegT2ffqF0V8QgeFR%2Fa1%2FceDWyen5EC6FCkj3d75QXilsA7Lkz%2Fhy2Ez1CVU%2FbwwhaN0RSUtubZErBQW%2BjweljXCZ%2BqW8SIvAjLDzLcamqXKXQihx87Rfd9SC4UCUj1EfsAeHKCHUrHyzWgA2xblz3z7uoQI1ldMC3RSpvp6Co7g8ee9LKHYmruLjeL3l3w6CCcwkiuSbprV&X-Amz-Signature=177a5caa321d5ec93e388ba5e546c5f574ae68955a07e6ab196ac894ed2476b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5U7U3SF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1T9WmHfTIgig6qnAGwprTyc%2B%2FtqfI%2B1PJ9jLdxu01YAiAfudbI7Feal9W%2FuWeS1KDMN%2FBU0XxeXr7QIqtdL9T0eCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG8gDPTDRUacWKVtEKtwDMMu9dIxT1JBOT%2BtPi1FFlsaAfyZIjVMhK3EznsOYBCtDuzdSL4gf7ra07MAn%2B24hdNbElIdQk0fLDVbzWMSsM5EOPVb3zJMYjt6WgKybK5wZhgAggJxIAEQ%2BNH%2BZiJqdI3Vu3qcGBxAU9nAQXe7BW6t%2Fu19cLB2KMwvRJU8CywEmyIqgFfP3CR1RhzbvVVKh9IpUmFU5Lp3FWKUnb4CHYKeU2BQ%2BbsC1LTeQpJHf67JK5EdvHnxdaazyX2Ib%2FeiVM1Eiqlg9vg%2F27EK4NvOmfLeIpiBtmxFuOykCPeduZxKFjskfDz4GpEayK861tzczxbTkzTR24zzUTt1X14eFJ%2F5aqIKMGqBJdKi1xQeHyNOXv1VLEVJevd154ruPmR4W%2BWY54toFFpqXaTDlN4W5G7X%2B6v2mAEbdLd37RBGXUy6l5NJ1d64sjxPcCtQ7SMRAuN5f9jPvpjHOHZUlnfFxLfdepIbRBM0mvH4tctWhpY1vJlfbX3fg2d9ms7pqDgU3uBUtzZf2UTDuE4b6ZPmtPwYLa1tzqgYnFlPI%2FSGX8h1nc7BBXB%2FqE3hYJjVI3uiYFrvAZJkxhe0pzsxD4JLy5MNy5qLwGlJkf2yI3CRp%2BdZxQtTFY1Coft0UsUgw9ZqmxAY6pgFrNgZdYJfoBV2pCJjEeegT2ffqF0V8QgeFR%2Fa1%2FceDWyen5EC6FCkj3d75QXilsA7Lkz%2Fhy2Ez1CVU%2FbwwhaN0RSUtubZErBQW%2BjweljXCZ%2BqW8SIvAjLDzLcamqXKXQihx87Rfd9SC4UCUj1EfsAeHKCHUrHyzWgA2xblz3z7uoQI1ldMC3RSpvp6Co7g8ee9LKHYmruLjeL3l3w6CCcwkiuSbprV&X-Amz-Signature=0afce94f072d165c618b6f1526be1dba3d184a746d7bf336d248e791e4ee0200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5U7U3SF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1T9WmHfTIgig6qnAGwprTyc%2B%2FtqfI%2B1PJ9jLdxu01YAiAfudbI7Feal9W%2FuWeS1KDMN%2FBU0XxeXr7QIqtdL9T0eCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG8gDPTDRUacWKVtEKtwDMMu9dIxT1JBOT%2BtPi1FFlsaAfyZIjVMhK3EznsOYBCtDuzdSL4gf7ra07MAn%2B24hdNbElIdQk0fLDVbzWMSsM5EOPVb3zJMYjt6WgKybK5wZhgAggJxIAEQ%2BNH%2BZiJqdI3Vu3qcGBxAU9nAQXe7BW6t%2Fu19cLB2KMwvRJU8CywEmyIqgFfP3CR1RhzbvVVKh9IpUmFU5Lp3FWKUnb4CHYKeU2BQ%2BbsC1LTeQpJHf67JK5EdvHnxdaazyX2Ib%2FeiVM1Eiqlg9vg%2F27EK4NvOmfLeIpiBtmxFuOykCPeduZxKFjskfDz4GpEayK861tzczxbTkzTR24zzUTt1X14eFJ%2F5aqIKMGqBJdKi1xQeHyNOXv1VLEVJevd154ruPmR4W%2BWY54toFFpqXaTDlN4W5G7X%2B6v2mAEbdLd37RBGXUy6l5NJ1d64sjxPcCtQ7SMRAuN5f9jPvpjHOHZUlnfFxLfdepIbRBM0mvH4tctWhpY1vJlfbX3fg2d9ms7pqDgU3uBUtzZf2UTDuE4b6ZPmtPwYLa1tzqgYnFlPI%2FSGX8h1nc7BBXB%2FqE3hYJjVI3uiYFrvAZJkxhe0pzsxD4JLy5MNy5qLwGlJkf2yI3CRp%2BdZxQtTFY1Coft0UsUgw9ZqmxAY6pgFrNgZdYJfoBV2pCJjEeegT2ffqF0V8QgeFR%2Fa1%2FceDWyen5EC6FCkj3d75QXilsA7Lkz%2Fhy2Ez1CVU%2FbwwhaN0RSUtubZErBQW%2BjweljXCZ%2BqW8SIvAjLDzLcamqXKXQihx87Rfd9SC4UCUj1EfsAeHKCHUrHyzWgA2xblz3z7uoQI1ldMC3RSpvp6Co7g8ee9LKHYmruLjeL3l3w6CCcwkiuSbprV&X-Amz-Signature=f5fe7bc49a36b574e59a3cf7603000b0bc3b053a62e01af9f3762003e19b8244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5U7U3SF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1T9WmHfTIgig6qnAGwprTyc%2B%2FtqfI%2B1PJ9jLdxu01YAiAfudbI7Feal9W%2FuWeS1KDMN%2FBU0XxeXr7QIqtdL9T0eCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG8gDPTDRUacWKVtEKtwDMMu9dIxT1JBOT%2BtPi1FFlsaAfyZIjVMhK3EznsOYBCtDuzdSL4gf7ra07MAn%2B24hdNbElIdQk0fLDVbzWMSsM5EOPVb3zJMYjt6WgKybK5wZhgAggJxIAEQ%2BNH%2BZiJqdI3Vu3qcGBxAU9nAQXe7BW6t%2Fu19cLB2KMwvRJU8CywEmyIqgFfP3CR1RhzbvVVKh9IpUmFU5Lp3FWKUnb4CHYKeU2BQ%2BbsC1LTeQpJHf67JK5EdvHnxdaazyX2Ib%2FeiVM1Eiqlg9vg%2F27EK4NvOmfLeIpiBtmxFuOykCPeduZxKFjskfDz4GpEayK861tzczxbTkzTR24zzUTt1X14eFJ%2F5aqIKMGqBJdKi1xQeHyNOXv1VLEVJevd154ruPmR4W%2BWY54toFFpqXaTDlN4W5G7X%2B6v2mAEbdLd37RBGXUy6l5NJ1d64sjxPcCtQ7SMRAuN5f9jPvpjHOHZUlnfFxLfdepIbRBM0mvH4tctWhpY1vJlfbX3fg2d9ms7pqDgU3uBUtzZf2UTDuE4b6ZPmtPwYLa1tzqgYnFlPI%2FSGX8h1nc7BBXB%2FqE3hYJjVI3uiYFrvAZJkxhe0pzsxD4JLy5MNy5qLwGlJkf2yI3CRp%2BdZxQtTFY1Coft0UsUgw9ZqmxAY6pgFrNgZdYJfoBV2pCJjEeegT2ffqF0V8QgeFR%2Fa1%2FceDWyen5EC6FCkj3d75QXilsA7Lkz%2Fhy2Ez1CVU%2FbwwhaN0RSUtubZErBQW%2BjweljXCZ%2BqW8SIvAjLDzLcamqXKXQihx87Rfd9SC4UCUj1EfsAeHKCHUrHyzWgA2xblz3z7uoQI1ldMC3RSpvp6Co7g8ee9LKHYmruLjeL3l3w6CCcwkiuSbprV&X-Amz-Signature=62d3268449f78026bf034ba8e1a9aa00e6cfcaf77b4e18e85c52b528021c603a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5U7U3SF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1T9WmHfTIgig6qnAGwprTyc%2B%2FtqfI%2B1PJ9jLdxu01YAiAfudbI7Feal9W%2FuWeS1KDMN%2FBU0XxeXr7QIqtdL9T0eCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG8gDPTDRUacWKVtEKtwDMMu9dIxT1JBOT%2BtPi1FFlsaAfyZIjVMhK3EznsOYBCtDuzdSL4gf7ra07MAn%2B24hdNbElIdQk0fLDVbzWMSsM5EOPVb3zJMYjt6WgKybK5wZhgAggJxIAEQ%2BNH%2BZiJqdI3Vu3qcGBxAU9nAQXe7BW6t%2Fu19cLB2KMwvRJU8CywEmyIqgFfP3CR1RhzbvVVKh9IpUmFU5Lp3FWKUnb4CHYKeU2BQ%2BbsC1LTeQpJHf67JK5EdvHnxdaazyX2Ib%2FeiVM1Eiqlg9vg%2F27EK4NvOmfLeIpiBtmxFuOykCPeduZxKFjskfDz4GpEayK861tzczxbTkzTR24zzUTt1X14eFJ%2F5aqIKMGqBJdKi1xQeHyNOXv1VLEVJevd154ruPmR4W%2BWY54toFFpqXaTDlN4W5G7X%2B6v2mAEbdLd37RBGXUy6l5NJ1d64sjxPcCtQ7SMRAuN5f9jPvpjHOHZUlnfFxLfdepIbRBM0mvH4tctWhpY1vJlfbX3fg2d9ms7pqDgU3uBUtzZf2UTDuE4b6ZPmtPwYLa1tzqgYnFlPI%2FSGX8h1nc7BBXB%2FqE3hYJjVI3uiYFrvAZJkxhe0pzsxD4JLy5MNy5qLwGlJkf2yI3CRp%2BdZxQtTFY1Coft0UsUgw9ZqmxAY6pgFrNgZdYJfoBV2pCJjEeegT2ffqF0V8QgeFR%2Fa1%2FceDWyen5EC6FCkj3d75QXilsA7Lkz%2Fhy2Ez1CVU%2FbwwhaN0RSUtubZErBQW%2BjweljXCZ%2BqW8SIvAjLDzLcamqXKXQihx87Rfd9SC4UCUj1EfsAeHKCHUrHyzWgA2xblz3z7uoQI1ldMC3RSpvp6Co7g8ee9LKHYmruLjeL3l3w6CCcwkiuSbprV&X-Amz-Signature=b97df0516070b80fdc864a8231b64403af0cc90ad96bf0f4f092cfa51db2fdc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5U7U3SF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1T9WmHfTIgig6qnAGwprTyc%2B%2FtqfI%2B1PJ9jLdxu01YAiAfudbI7Feal9W%2FuWeS1KDMN%2FBU0XxeXr7QIqtdL9T0eCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG8gDPTDRUacWKVtEKtwDMMu9dIxT1JBOT%2BtPi1FFlsaAfyZIjVMhK3EznsOYBCtDuzdSL4gf7ra07MAn%2B24hdNbElIdQk0fLDVbzWMSsM5EOPVb3zJMYjt6WgKybK5wZhgAggJxIAEQ%2BNH%2BZiJqdI3Vu3qcGBxAU9nAQXe7BW6t%2Fu19cLB2KMwvRJU8CywEmyIqgFfP3CR1RhzbvVVKh9IpUmFU5Lp3FWKUnb4CHYKeU2BQ%2BbsC1LTeQpJHf67JK5EdvHnxdaazyX2Ib%2FeiVM1Eiqlg9vg%2F27EK4NvOmfLeIpiBtmxFuOykCPeduZxKFjskfDz4GpEayK861tzczxbTkzTR24zzUTt1X14eFJ%2F5aqIKMGqBJdKi1xQeHyNOXv1VLEVJevd154ruPmR4W%2BWY54toFFpqXaTDlN4W5G7X%2B6v2mAEbdLd37RBGXUy6l5NJ1d64sjxPcCtQ7SMRAuN5f9jPvpjHOHZUlnfFxLfdepIbRBM0mvH4tctWhpY1vJlfbX3fg2d9ms7pqDgU3uBUtzZf2UTDuE4b6ZPmtPwYLa1tzqgYnFlPI%2FSGX8h1nc7BBXB%2FqE3hYJjVI3uiYFrvAZJkxhe0pzsxD4JLy5MNy5qLwGlJkf2yI3CRp%2BdZxQtTFY1Coft0UsUgw9ZqmxAY6pgFrNgZdYJfoBV2pCJjEeegT2ffqF0V8QgeFR%2Fa1%2FceDWyen5EC6FCkj3d75QXilsA7Lkz%2Fhy2Ez1CVU%2FbwwhaN0RSUtubZErBQW%2BjweljXCZ%2BqW8SIvAjLDzLcamqXKXQihx87Rfd9SC4UCUj1EfsAeHKCHUrHyzWgA2xblz3z7uoQI1ldMC3RSpvp6Co7g8ee9LKHYmruLjeL3l3w6CCcwkiuSbprV&X-Amz-Signature=5eb0b3de3ab0a5a828a606e6106c44e9ce329ad6ca5e2de5110d7093e69b0f6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5U7U3SF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1T9WmHfTIgig6qnAGwprTyc%2B%2FtqfI%2B1PJ9jLdxu01YAiAfudbI7Feal9W%2FuWeS1KDMN%2FBU0XxeXr7QIqtdL9T0eCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG8gDPTDRUacWKVtEKtwDMMu9dIxT1JBOT%2BtPi1FFlsaAfyZIjVMhK3EznsOYBCtDuzdSL4gf7ra07MAn%2B24hdNbElIdQk0fLDVbzWMSsM5EOPVb3zJMYjt6WgKybK5wZhgAggJxIAEQ%2BNH%2BZiJqdI3Vu3qcGBxAU9nAQXe7BW6t%2Fu19cLB2KMwvRJU8CywEmyIqgFfP3CR1RhzbvVVKh9IpUmFU5Lp3FWKUnb4CHYKeU2BQ%2BbsC1LTeQpJHf67JK5EdvHnxdaazyX2Ib%2FeiVM1Eiqlg9vg%2F27EK4NvOmfLeIpiBtmxFuOykCPeduZxKFjskfDz4GpEayK861tzczxbTkzTR24zzUTt1X14eFJ%2F5aqIKMGqBJdKi1xQeHyNOXv1VLEVJevd154ruPmR4W%2BWY54toFFpqXaTDlN4W5G7X%2B6v2mAEbdLd37RBGXUy6l5NJ1d64sjxPcCtQ7SMRAuN5f9jPvpjHOHZUlnfFxLfdepIbRBM0mvH4tctWhpY1vJlfbX3fg2d9ms7pqDgU3uBUtzZf2UTDuE4b6ZPmtPwYLa1tzqgYnFlPI%2FSGX8h1nc7BBXB%2FqE3hYJjVI3uiYFrvAZJkxhe0pzsxD4JLy5MNy5qLwGlJkf2yI3CRp%2BdZxQtTFY1Coft0UsUgw9ZqmxAY6pgFrNgZdYJfoBV2pCJjEeegT2ffqF0V8QgeFR%2Fa1%2FceDWyen5EC6FCkj3d75QXilsA7Lkz%2Fhy2Ez1CVU%2FbwwhaN0RSUtubZErBQW%2BjweljXCZ%2BqW8SIvAjLDzLcamqXKXQihx87Rfd9SC4UCUj1EfsAeHKCHUrHyzWgA2xblz3z7uoQI1ldMC3RSpvp6Co7g8ee9LKHYmruLjeL3l3w6CCcwkiuSbprV&X-Amz-Signature=157324a4d9c6417677b0c98e7c8d028cc9be4070c4cd56e94039517d25b09de1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
