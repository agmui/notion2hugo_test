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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SOEAADM%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD92pr1%2B9bjE6yz%2Bpb7hGtRY1uBKoVL3tUp6hjGAkQvNgIhAOFgPygcSyi0o5iUYFcWFD02%2FzrMJ0nmisZBra5JWOQYKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKBywOR9UmC2kZEz4q3AO2E8mxzvjzPTE4HiTPZAGvrtcJO%2FSh6c3IKdh88Xlkrfk9AZeY1AxptRCEutwbi8zGsBmkJjTcxNWWOi7xQ8snCiOYdHEutMC9JWQcobhd5S0ZkcC28eHfk6ZcH3YouWhkjMtmVmQq1c37Uan%2Fv8weOv92Hu%2B%2F9lTvgq2bSJzUhOuy7eA06IzvlAsoqyg2UjPEjjYd6DwQMaQMsQfu453%2BKHbW3%2B1cHBlGfWMi5sLG7ukXySVvytr%2F1wUqzB4MRliygdJqmQYCxw4AIdc8MFGhc5B548%2FPnYIsDINN7q6dpkuTTSKDNtgoEXpSQpigIjy2LIU2B6dKAa1cJYAbTL5bKJNWX%2FMv0%2FXiYVTJovZYfIfRw67QgooXGIxS%2F%2Bnmq4Vop5MS9FbE0M30WeYNs%2F6n77uE81%2FwJucF%2FNfRX55O%2F%2F6rKp%2FhK0oaztl2dHpzBOqWDJmSlLBSVHNuVUdlGHLUZD8%2FYrNxxBrzdXWr%2BTccH7Ax2PXxFQ%2BTQwjIqlxqA7xjPKn8lLUBDXmJ73OiHJFh1gj4jB1OwVTK1ee0ZmPmLTANTzkKo%2F3O1m4%2BJrXLKQG5F%2BVhVVbrtXK5R7tQkkrj3ws5rVt0gNFDMyeey%2FXJ1StRbH4oaz0CO1NzvDCB9Z%2B9BjqkAVtbwNGpBUwlhjUFEYKFRpsyK1yLf0Ed3bIsHmlwYm5fo2QdL0NF3xQzj9SloecLG98q%2FkoksZRiC1Kp%2BTYbfKg%2BDRdbagMD518XMbvAvv%2FPGkA%2F8Dt%2BziWE6KhxyB1fC%2BL43v2FTxvXzgJGzjj1eQ858%2B1aB8E0w%2BtSYjmO3kfbGtDz6sai5i98kcNmFDVHBICKvMXNK1doReRQu6tJ3%2F5X2tFI&X-Amz-Signature=8151b5b3e9c35d0b9febc3a93ffd15711b84f98b2e1c7917271719212456bffe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SOEAADM%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD92pr1%2B9bjE6yz%2Bpb7hGtRY1uBKoVL3tUp6hjGAkQvNgIhAOFgPygcSyi0o5iUYFcWFD02%2FzrMJ0nmisZBra5JWOQYKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKBywOR9UmC2kZEz4q3AO2E8mxzvjzPTE4HiTPZAGvrtcJO%2FSh6c3IKdh88Xlkrfk9AZeY1AxptRCEutwbi8zGsBmkJjTcxNWWOi7xQ8snCiOYdHEutMC9JWQcobhd5S0ZkcC28eHfk6ZcH3YouWhkjMtmVmQq1c37Uan%2Fv8weOv92Hu%2B%2F9lTvgq2bSJzUhOuy7eA06IzvlAsoqyg2UjPEjjYd6DwQMaQMsQfu453%2BKHbW3%2B1cHBlGfWMi5sLG7ukXySVvytr%2F1wUqzB4MRliygdJqmQYCxw4AIdc8MFGhc5B548%2FPnYIsDINN7q6dpkuTTSKDNtgoEXpSQpigIjy2LIU2B6dKAa1cJYAbTL5bKJNWX%2FMv0%2FXiYVTJovZYfIfRw67QgooXGIxS%2F%2Bnmq4Vop5MS9FbE0M30WeYNs%2F6n77uE81%2FwJucF%2FNfRX55O%2F%2F6rKp%2FhK0oaztl2dHpzBOqWDJmSlLBSVHNuVUdlGHLUZD8%2FYrNxxBrzdXWr%2BTccH7Ax2PXxFQ%2BTQwjIqlxqA7xjPKn8lLUBDXmJ73OiHJFh1gj4jB1OwVTK1ee0ZmPmLTANTzkKo%2F3O1m4%2BJrXLKQG5F%2BVhVVbrtXK5R7tQkkrj3ws5rVt0gNFDMyeey%2FXJ1StRbH4oaz0CO1NzvDCB9Z%2B9BjqkAVtbwNGpBUwlhjUFEYKFRpsyK1yLf0Ed3bIsHmlwYm5fo2QdL0NF3xQzj9SloecLG98q%2FkoksZRiC1Kp%2BTYbfKg%2BDRdbagMD518XMbvAvv%2FPGkA%2F8Dt%2BziWE6KhxyB1fC%2BL43v2FTxvXzgJGzjj1eQ858%2B1aB8E0w%2BtSYjmO3kfbGtDz6sai5i98kcNmFDVHBICKvMXNK1doReRQu6tJ3%2F5X2tFI&X-Amz-Signature=4b0f68d52e92c82c88e0fdde1c66bc4082d6b5883a623c8389526b07056857c6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SOEAADM%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD92pr1%2B9bjE6yz%2Bpb7hGtRY1uBKoVL3tUp6hjGAkQvNgIhAOFgPygcSyi0o5iUYFcWFD02%2FzrMJ0nmisZBra5JWOQYKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKBywOR9UmC2kZEz4q3AO2E8mxzvjzPTE4HiTPZAGvrtcJO%2FSh6c3IKdh88Xlkrfk9AZeY1AxptRCEutwbi8zGsBmkJjTcxNWWOi7xQ8snCiOYdHEutMC9JWQcobhd5S0ZkcC28eHfk6ZcH3YouWhkjMtmVmQq1c37Uan%2Fv8weOv92Hu%2B%2F9lTvgq2bSJzUhOuy7eA06IzvlAsoqyg2UjPEjjYd6DwQMaQMsQfu453%2BKHbW3%2B1cHBlGfWMi5sLG7ukXySVvytr%2F1wUqzB4MRliygdJqmQYCxw4AIdc8MFGhc5B548%2FPnYIsDINN7q6dpkuTTSKDNtgoEXpSQpigIjy2LIU2B6dKAa1cJYAbTL5bKJNWX%2FMv0%2FXiYVTJovZYfIfRw67QgooXGIxS%2F%2Bnmq4Vop5MS9FbE0M30WeYNs%2F6n77uE81%2FwJucF%2FNfRX55O%2F%2F6rKp%2FhK0oaztl2dHpzBOqWDJmSlLBSVHNuVUdlGHLUZD8%2FYrNxxBrzdXWr%2BTccH7Ax2PXxFQ%2BTQwjIqlxqA7xjPKn8lLUBDXmJ73OiHJFh1gj4jB1OwVTK1ee0ZmPmLTANTzkKo%2F3O1m4%2BJrXLKQG5F%2BVhVVbrtXK5R7tQkkrj3ws5rVt0gNFDMyeey%2FXJ1StRbH4oaz0CO1NzvDCB9Z%2B9BjqkAVtbwNGpBUwlhjUFEYKFRpsyK1yLf0Ed3bIsHmlwYm5fo2QdL0NF3xQzj9SloecLG98q%2FkoksZRiC1Kp%2BTYbfKg%2BDRdbagMD518XMbvAvv%2FPGkA%2F8Dt%2BziWE6KhxyB1fC%2BL43v2FTxvXzgJGzjj1eQ858%2B1aB8E0w%2BtSYjmO3kfbGtDz6sai5i98kcNmFDVHBICKvMXNK1doReRQu6tJ3%2F5X2tFI&X-Amz-Signature=9f880dbba8e27cc10da0cdf837bee0095ffa4c445a864cbdbffe8a3bac61784b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SOEAADM%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD92pr1%2B9bjE6yz%2Bpb7hGtRY1uBKoVL3tUp6hjGAkQvNgIhAOFgPygcSyi0o5iUYFcWFD02%2FzrMJ0nmisZBra5JWOQYKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKBywOR9UmC2kZEz4q3AO2E8mxzvjzPTE4HiTPZAGvrtcJO%2FSh6c3IKdh88Xlkrfk9AZeY1AxptRCEutwbi8zGsBmkJjTcxNWWOi7xQ8snCiOYdHEutMC9JWQcobhd5S0ZkcC28eHfk6ZcH3YouWhkjMtmVmQq1c37Uan%2Fv8weOv92Hu%2B%2F9lTvgq2bSJzUhOuy7eA06IzvlAsoqyg2UjPEjjYd6DwQMaQMsQfu453%2BKHbW3%2B1cHBlGfWMi5sLG7ukXySVvytr%2F1wUqzB4MRliygdJqmQYCxw4AIdc8MFGhc5B548%2FPnYIsDINN7q6dpkuTTSKDNtgoEXpSQpigIjy2LIU2B6dKAa1cJYAbTL5bKJNWX%2FMv0%2FXiYVTJovZYfIfRw67QgooXGIxS%2F%2Bnmq4Vop5MS9FbE0M30WeYNs%2F6n77uE81%2FwJucF%2FNfRX55O%2F%2F6rKp%2FhK0oaztl2dHpzBOqWDJmSlLBSVHNuVUdlGHLUZD8%2FYrNxxBrzdXWr%2BTccH7Ax2PXxFQ%2BTQwjIqlxqA7xjPKn8lLUBDXmJ73OiHJFh1gj4jB1OwVTK1ee0ZmPmLTANTzkKo%2F3O1m4%2BJrXLKQG5F%2BVhVVbrtXK5R7tQkkrj3ws5rVt0gNFDMyeey%2FXJ1StRbH4oaz0CO1NzvDCB9Z%2B9BjqkAVtbwNGpBUwlhjUFEYKFRpsyK1yLf0Ed3bIsHmlwYm5fo2QdL0NF3xQzj9SloecLG98q%2FkoksZRiC1Kp%2BTYbfKg%2BDRdbagMD518XMbvAvv%2FPGkA%2F8Dt%2BziWE6KhxyB1fC%2BL43v2FTxvXzgJGzjj1eQ858%2B1aB8E0w%2BtSYjmO3kfbGtDz6sai5i98kcNmFDVHBICKvMXNK1doReRQu6tJ3%2F5X2tFI&X-Amz-Signature=d99e89d176119716a36300d7d3df434fcfb8acbd401bf59dd5149b2bd8249aed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SOEAADM%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD92pr1%2B9bjE6yz%2Bpb7hGtRY1uBKoVL3tUp6hjGAkQvNgIhAOFgPygcSyi0o5iUYFcWFD02%2FzrMJ0nmisZBra5JWOQYKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKBywOR9UmC2kZEz4q3AO2E8mxzvjzPTE4HiTPZAGvrtcJO%2FSh6c3IKdh88Xlkrfk9AZeY1AxptRCEutwbi8zGsBmkJjTcxNWWOi7xQ8snCiOYdHEutMC9JWQcobhd5S0ZkcC28eHfk6ZcH3YouWhkjMtmVmQq1c37Uan%2Fv8weOv92Hu%2B%2F9lTvgq2bSJzUhOuy7eA06IzvlAsoqyg2UjPEjjYd6DwQMaQMsQfu453%2BKHbW3%2B1cHBlGfWMi5sLG7ukXySVvytr%2F1wUqzB4MRliygdJqmQYCxw4AIdc8MFGhc5B548%2FPnYIsDINN7q6dpkuTTSKDNtgoEXpSQpigIjy2LIU2B6dKAa1cJYAbTL5bKJNWX%2FMv0%2FXiYVTJovZYfIfRw67QgooXGIxS%2F%2Bnmq4Vop5MS9FbE0M30WeYNs%2F6n77uE81%2FwJucF%2FNfRX55O%2F%2F6rKp%2FhK0oaztl2dHpzBOqWDJmSlLBSVHNuVUdlGHLUZD8%2FYrNxxBrzdXWr%2BTccH7Ax2PXxFQ%2BTQwjIqlxqA7xjPKn8lLUBDXmJ73OiHJFh1gj4jB1OwVTK1ee0ZmPmLTANTzkKo%2F3O1m4%2BJrXLKQG5F%2BVhVVbrtXK5R7tQkkrj3ws5rVt0gNFDMyeey%2FXJ1StRbH4oaz0CO1NzvDCB9Z%2B9BjqkAVtbwNGpBUwlhjUFEYKFRpsyK1yLf0Ed3bIsHmlwYm5fo2QdL0NF3xQzj9SloecLG98q%2FkoksZRiC1Kp%2BTYbfKg%2BDRdbagMD518XMbvAvv%2FPGkA%2F8Dt%2BziWE6KhxyB1fC%2BL43v2FTxvXzgJGzjj1eQ858%2B1aB8E0w%2BtSYjmO3kfbGtDz6sai5i98kcNmFDVHBICKvMXNK1doReRQu6tJ3%2F5X2tFI&X-Amz-Signature=d2be2ad5f395ee1ef350b0b543b8ea19fbfa731dbcb48dbb95873aaa6018a646&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SOEAADM%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD92pr1%2B9bjE6yz%2Bpb7hGtRY1uBKoVL3tUp6hjGAkQvNgIhAOFgPygcSyi0o5iUYFcWFD02%2FzrMJ0nmisZBra5JWOQYKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKBywOR9UmC2kZEz4q3AO2E8mxzvjzPTE4HiTPZAGvrtcJO%2FSh6c3IKdh88Xlkrfk9AZeY1AxptRCEutwbi8zGsBmkJjTcxNWWOi7xQ8snCiOYdHEutMC9JWQcobhd5S0ZkcC28eHfk6ZcH3YouWhkjMtmVmQq1c37Uan%2Fv8weOv92Hu%2B%2F9lTvgq2bSJzUhOuy7eA06IzvlAsoqyg2UjPEjjYd6DwQMaQMsQfu453%2BKHbW3%2B1cHBlGfWMi5sLG7ukXySVvytr%2F1wUqzB4MRliygdJqmQYCxw4AIdc8MFGhc5B548%2FPnYIsDINN7q6dpkuTTSKDNtgoEXpSQpigIjy2LIU2B6dKAa1cJYAbTL5bKJNWX%2FMv0%2FXiYVTJovZYfIfRw67QgooXGIxS%2F%2Bnmq4Vop5MS9FbE0M30WeYNs%2F6n77uE81%2FwJucF%2FNfRX55O%2F%2F6rKp%2FhK0oaztl2dHpzBOqWDJmSlLBSVHNuVUdlGHLUZD8%2FYrNxxBrzdXWr%2BTccH7Ax2PXxFQ%2BTQwjIqlxqA7xjPKn8lLUBDXmJ73OiHJFh1gj4jB1OwVTK1ee0ZmPmLTANTzkKo%2F3O1m4%2BJrXLKQG5F%2BVhVVbrtXK5R7tQkkrj3ws5rVt0gNFDMyeey%2FXJ1StRbH4oaz0CO1NzvDCB9Z%2B9BjqkAVtbwNGpBUwlhjUFEYKFRpsyK1yLf0Ed3bIsHmlwYm5fo2QdL0NF3xQzj9SloecLG98q%2FkoksZRiC1Kp%2BTYbfKg%2BDRdbagMD518XMbvAvv%2FPGkA%2F8Dt%2BziWE6KhxyB1fC%2BL43v2FTxvXzgJGzjj1eQ858%2B1aB8E0w%2BtSYjmO3kfbGtDz6sai5i98kcNmFDVHBICKvMXNK1doReRQu6tJ3%2F5X2tFI&X-Amz-Signature=e655ec8c9534fbc6b93bc75721fc59dcd7090a48dcc5a0e7f3937f85d54097d8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SOEAADM%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD92pr1%2B9bjE6yz%2Bpb7hGtRY1uBKoVL3tUp6hjGAkQvNgIhAOFgPygcSyi0o5iUYFcWFD02%2FzrMJ0nmisZBra5JWOQYKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKBywOR9UmC2kZEz4q3AO2E8mxzvjzPTE4HiTPZAGvrtcJO%2FSh6c3IKdh88Xlkrfk9AZeY1AxptRCEutwbi8zGsBmkJjTcxNWWOi7xQ8snCiOYdHEutMC9JWQcobhd5S0ZkcC28eHfk6ZcH3YouWhkjMtmVmQq1c37Uan%2Fv8weOv92Hu%2B%2F9lTvgq2bSJzUhOuy7eA06IzvlAsoqyg2UjPEjjYd6DwQMaQMsQfu453%2BKHbW3%2B1cHBlGfWMi5sLG7ukXySVvytr%2F1wUqzB4MRliygdJqmQYCxw4AIdc8MFGhc5B548%2FPnYIsDINN7q6dpkuTTSKDNtgoEXpSQpigIjy2LIU2B6dKAa1cJYAbTL5bKJNWX%2FMv0%2FXiYVTJovZYfIfRw67QgooXGIxS%2F%2Bnmq4Vop5MS9FbE0M30WeYNs%2F6n77uE81%2FwJucF%2FNfRX55O%2F%2F6rKp%2FhK0oaztl2dHpzBOqWDJmSlLBSVHNuVUdlGHLUZD8%2FYrNxxBrzdXWr%2BTccH7Ax2PXxFQ%2BTQwjIqlxqA7xjPKn8lLUBDXmJ73OiHJFh1gj4jB1OwVTK1ee0ZmPmLTANTzkKo%2F3O1m4%2BJrXLKQG5F%2BVhVVbrtXK5R7tQkkrj3ws5rVt0gNFDMyeey%2FXJ1StRbH4oaz0CO1NzvDCB9Z%2B9BjqkAVtbwNGpBUwlhjUFEYKFRpsyK1yLf0Ed3bIsHmlwYm5fo2QdL0NF3xQzj9SloecLG98q%2FkoksZRiC1Kp%2BTYbfKg%2BDRdbagMD518XMbvAvv%2FPGkA%2F8Dt%2BziWE6KhxyB1fC%2BL43v2FTxvXzgJGzjj1eQ858%2B1aB8E0w%2BtSYjmO3kfbGtDz6sai5i98kcNmFDVHBICKvMXNK1doReRQu6tJ3%2F5X2tFI&X-Amz-Signature=4481128ca9d7d7faca78da74652defeaa8d7a818340cbfc4e3294280f818769b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SOEAADM%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD92pr1%2B9bjE6yz%2Bpb7hGtRY1uBKoVL3tUp6hjGAkQvNgIhAOFgPygcSyi0o5iUYFcWFD02%2FzrMJ0nmisZBra5JWOQYKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKBywOR9UmC2kZEz4q3AO2E8mxzvjzPTE4HiTPZAGvrtcJO%2FSh6c3IKdh88Xlkrfk9AZeY1AxptRCEutwbi8zGsBmkJjTcxNWWOi7xQ8snCiOYdHEutMC9JWQcobhd5S0ZkcC28eHfk6ZcH3YouWhkjMtmVmQq1c37Uan%2Fv8weOv92Hu%2B%2F9lTvgq2bSJzUhOuy7eA06IzvlAsoqyg2UjPEjjYd6DwQMaQMsQfu453%2BKHbW3%2B1cHBlGfWMi5sLG7ukXySVvytr%2F1wUqzB4MRliygdJqmQYCxw4AIdc8MFGhc5B548%2FPnYIsDINN7q6dpkuTTSKDNtgoEXpSQpigIjy2LIU2B6dKAa1cJYAbTL5bKJNWX%2FMv0%2FXiYVTJovZYfIfRw67QgooXGIxS%2F%2Bnmq4Vop5MS9FbE0M30WeYNs%2F6n77uE81%2FwJucF%2FNfRX55O%2F%2F6rKp%2FhK0oaztl2dHpzBOqWDJmSlLBSVHNuVUdlGHLUZD8%2FYrNxxBrzdXWr%2BTccH7Ax2PXxFQ%2BTQwjIqlxqA7xjPKn8lLUBDXmJ73OiHJFh1gj4jB1OwVTK1ee0ZmPmLTANTzkKo%2F3O1m4%2BJrXLKQG5F%2BVhVVbrtXK5R7tQkkrj3ws5rVt0gNFDMyeey%2FXJ1StRbH4oaz0CO1NzvDCB9Z%2B9BjqkAVtbwNGpBUwlhjUFEYKFRpsyK1yLf0Ed3bIsHmlwYm5fo2QdL0NF3xQzj9SloecLG98q%2FkoksZRiC1Kp%2BTYbfKg%2BDRdbagMD518XMbvAvv%2FPGkA%2F8Dt%2BziWE6KhxyB1fC%2BL43v2FTxvXzgJGzjj1eQ858%2B1aB8E0w%2BtSYjmO3kfbGtDz6sai5i98kcNmFDVHBICKvMXNK1doReRQu6tJ3%2F5X2tFI&X-Amz-Signature=8cb003b447eb6eafb4ed3ade33c5bfba7cb3a541fd834206c7508633cdc3f6b8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
