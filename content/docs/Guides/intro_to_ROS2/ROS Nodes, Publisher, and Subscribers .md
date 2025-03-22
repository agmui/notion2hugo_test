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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675GI4NMY%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCd6OaZfGS1GSIh%2F3vAVTYU15qb4fH88KCRvXWsxIBb4AIgNVMWuXOHoDG31vG0sYk8kQs88CgdJa9I8yPnmVU3jmkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTW%2BXEKX0W%2BC2QBzSrcA72UV%2FqrbtV75cxZ%2BoWfXCe89LqPq52iBXoOYA07%2F1sC3Dbgh7ktcL3N2wil7aGPlRvfqIfUoUb47Kz4mjnKTW0YlDTpDUcOTYd1baSNLiToooTx%2Bq837clMjFz79ZVsJJYD5Mhz3uB2dt5Ls1prHB5iDRFQSNgVU63J19MeFtKFVSF3I1%2B%2BVKHR6Agh%2FuNOZEBsQzqzDXhhZz8t%2Fvs6ZJRyOAg8XrwR94RThl%2B3yXZvd0wlmW%2BB73AneGjjsnE%2BxJfXCm62NG5HHl6dnLZ2iiglhlCeOmF4gcm%2FRulSJpqfkeg840e2rVYl1426UVIZFjxpB3jZsQzbVA4Ojm5%2F9dC293LYOHet9KZ5VVznojNwx0%2F7PuOAqqD2NTFY2f0Zmj6ui5DBDhi0gwkau%2F0Uukvc1swWXaJfsWCrdiQq0DA45KdoeL6wqvLkxp%2FXw2wt2Ma1b1%2B1o1hAbI6Meqr9tBasIiN94vKsOQ6XBnoC9SlBfcTeIm4UPlxsLozWyBUrP8RN1xePqGVizB0IYgGtjQQ4mqKWCKzlT%2BwUHtAbNyleOS9fo7GjOl4bIS68oubI4RViTwuqzXXyF3%2FnZPbFZc3HWnC4UoMcWGSokTxTFLYCQygmJ4yqpjz9uzjqMLOt%2Br4GOqUBDH8dDmtxqeu%2BjHD92UQ9X2H4Vf7fogbz2VOsyDP8iGvqQtmPhWvk2BXeL5hJ6WVT77WXn7GIqEsQhv5O4p9gcoRIX0Sxdv59YG6TyCZGeCdKHjNQ5V%2B6H6LkP8XnUWAU6ZSpyndDTiBuAnlnVSk6srJEw834V3Hd7xeaintw05T3WBYdeLWOmuFD7gsa0t3%2FO0OqFzWC8oUCm%2B2EDhsUbRLxNrKj&X-Amz-Signature=2f60bca01c2ef2e37f554ab2187318177b821b34800fb9e392d610f972cf4a99&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675GI4NMY%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCd6OaZfGS1GSIh%2F3vAVTYU15qb4fH88KCRvXWsxIBb4AIgNVMWuXOHoDG31vG0sYk8kQs88CgdJa9I8yPnmVU3jmkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTW%2BXEKX0W%2BC2QBzSrcA72UV%2FqrbtV75cxZ%2BoWfXCe89LqPq52iBXoOYA07%2F1sC3Dbgh7ktcL3N2wil7aGPlRvfqIfUoUb47Kz4mjnKTW0YlDTpDUcOTYd1baSNLiToooTx%2Bq837clMjFz79ZVsJJYD5Mhz3uB2dt5Ls1prHB5iDRFQSNgVU63J19MeFtKFVSF3I1%2B%2BVKHR6Agh%2FuNOZEBsQzqzDXhhZz8t%2Fvs6ZJRyOAg8XrwR94RThl%2B3yXZvd0wlmW%2BB73AneGjjsnE%2BxJfXCm62NG5HHl6dnLZ2iiglhlCeOmF4gcm%2FRulSJpqfkeg840e2rVYl1426UVIZFjxpB3jZsQzbVA4Ojm5%2F9dC293LYOHet9KZ5VVznojNwx0%2F7PuOAqqD2NTFY2f0Zmj6ui5DBDhi0gwkau%2F0Uukvc1swWXaJfsWCrdiQq0DA45KdoeL6wqvLkxp%2FXw2wt2Ma1b1%2B1o1hAbI6Meqr9tBasIiN94vKsOQ6XBnoC9SlBfcTeIm4UPlxsLozWyBUrP8RN1xePqGVizB0IYgGtjQQ4mqKWCKzlT%2BwUHtAbNyleOS9fo7GjOl4bIS68oubI4RViTwuqzXXyF3%2FnZPbFZc3HWnC4UoMcWGSokTxTFLYCQygmJ4yqpjz9uzjqMLOt%2Br4GOqUBDH8dDmtxqeu%2BjHD92UQ9X2H4Vf7fogbz2VOsyDP8iGvqQtmPhWvk2BXeL5hJ6WVT77WXn7GIqEsQhv5O4p9gcoRIX0Sxdv59YG6TyCZGeCdKHjNQ5V%2B6H6LkP8XnUWAU6ZSpyndDTiBuAnlnVSk6srJEw834V3Hd7xeaintw05T3WBYdeLWOmuFD7gsa0t3%2FO0OqFzWC8oUCm%2B2EDhsUbRLxNrKj&X-Amz-Signature=e3127e7fc6b31008d271f293cd30f483deaf254b59f046bc31a1e8d76122576b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675GI4NMY%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCd6OaZfGS1GSIh%2F3vAVTYU15qb4fH88KCRvXWsxIBb4AIgNVMWuXOHoDG31vG0sYk8kQs88CgdJa9I8yPnmVU3jmkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTW%2BXEKX0W%2BC2QBzSrcA72UV%2FqrbtV75cxZ%2BoWfXCe89LqPq52iBXoOYA07%2F1sC3Dbgh7ktcL3N2wil7aGPlRvfqIfUoUb47Kz4mjnKTW0YlDTpDUcOTYd1baSNLiToooTx%2Bq837clMjFz79ZVsJJYD5Mhz3uB2dt5Ls1prHB5iDRFQSNgVU63J19MeFtKFVSF3I1%2B%2BVKHR6Agh%2FuNOZEBsQzqzDXhhZz8t%2Fvs6ZJRyOAg8XrwR94RThl%2B3yXZvd0wlmW%2BB73AneGjjsnE%2BxJfXCm62NG5HHl6dnLZ2iiglhlCeOmF4gcm%2FRulSJpqfkeg840e2rVYl1426UVIZFjxpB3jZsQzbVA4Ojm5%2F9dC293LYOHet9KZ5VVznojNwx0%2F7PuOAqqD2NTFY2f0Zmj6ui5DBDhi0gwkau%2F0Uukvc1swWXaJfsWCrdiQq0DA45KdoeL6wqvLkxp%2FXw2wt2Ma1b1%2B1o1hAbI6Meqr9tBasIiN94vKsOQ6XBnoC9SlBfcTeIm4UPlxsLozWyBUrP8RN1xePqGVizB0IYgGtjQQ4mqKWCKzlT%2BwUHtAbNyleOS9fo7GjOl4bIS68oubI4RViTwuqzXXyF3%2FnZPbFZc3HWnC4UoMcWGSokTxTFLYCQygmJ4yqpjz9uzjqMLOt%2Br4GOqUBDH8dDmtxqeu%2BjHD92UQ9X2H4Vf7fogbz2VOsyDP8iGvqQtmPhWvk2BXeL5hJ6WVT77WXn7GIqEsQhv5O4p9gcoRIX0Sxdv59YG6TyCZGeCdKHjNQ5V%2B6H6LkP8XnUWAU6ZSpyndDTiBuAnlnVSk6srJEw834V3Hd7xeaintw05T3WBYdeLWOmuFD7gsa0t3%2FO0OqFzWC8oUCm%2B2EDhsUbRLxNrKj&X-Amz-Signature=f216a71112056d7612dffcae401acaa9f3827bc614843c6670987780619300a4&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675GI4NMY%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCd6OaZfGS1GSIh%2F3vAVTYU15qb4fH88KCRvXWsxIBb4AIgNVMWuXOHoDG31vG0sYk8kQs88CgdJa9I8yPnmVU3jmkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTW%2BXEKX0W%2BC2QBzSrcA72UV%2FqrbtV75cxZ%2BoWfXCe89LqPq52iBXoOYA07%2F1sC3Dbgh7ktcL3N2wil7aGPlRvfqIfUoUb47Kz4mjnKTW0YlDTpDUcOTYd1baSNLiToooTx%2Bq837clMjFz79ZVsJJYD5Mhz3uB2dt5Ls1prHB5iDRFQSNgVU63J19MeFtKFVSF3I1%2B%2BVKHR6Agh%2FuNOZEBsQzqzDXhhZz8t%2Fvs6ZJRyOAg8XrwR94RThl%2B3yXZvd0wlmW%2BB73AneGjjsnE%2BxJfXCm62NG5HHl6dnLZ2iiglhlCeOmF4gcm%2FRulSJpqfkeg840e2rVYl1426UVIZFjxpB3jZsQzbVA4Ojm5%2F9dC293LYOHet9KZ5VVznojNwx0%2F7PuOAqqD2NTFY2f0Zmj6ui5DBDhi0gwkau%2F0Uukvc1swWXaJfsWCrdiQq0DA45KdoeL6wqvLkxp%2FXw2wt2Ma1b1%2B1o1hAbI6Meqr9tBasIiN94vKsOQ6XBnoC9SlBfcTeIm4UPlxsLozWyBUrP8RN1xePqGVizB0IYgGtjQQ4mqKWCKzlT%2BwUHtAbNyleOS9fo7GjOl4bIS68oubI4RViTwuqzXXyF3%2FnZPbFZc3HWnC4UoMcWGSokTxTFLYCQygmJ4yqpjz9uzjqMLOt%2Br4GOqUBDH8dDmtxqeu%2BjHD92UQ9X2H4Vf7fogbz2VOsyDP8iGvqQtmPhWvk2BXeL5hJ6WVT77WXn7GIqEsQhv5O4p9gcoRIX0Sxdv59YG6TyCZGeCdKHjNQ5V%2B6H6LkP8XnUWAU6ZSpyndDTiBuAnlnVSk6srJEw834V3Hd7xeaintw05T3WBYdeLWOmuFD7gsa0t3%2FO0OqFzWC8oUCm%2B2EDhsUbRLxNrKj&X-Amz-Signature=16b4156432dc9e89b73b3c70e5762e1da44d15ddbaa454af9c839be888af4174&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675GI4NMY%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCd6OaZfGS1GSIh%2F3vAVTYU15qb4fH88KCRvXWsxIBb4AIgNVMWuXOHoDG31vG0sYk8kQs88CgdJa9I8yPnmVU3jmkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTW%2BXEKX0W%2BC2QBzSrcA72UV%2FqrbtV75cxZ%2BoWfXCe89LqPq52iBXoOYA07%2F1sC3Dbgh7ktcL3N2wil7aGPlRvfqIfUoUb47Kz4mjnKTW0YlDTpDUcOTYd1baSNLiToooTx%2Bq837clMjFz79ZVsJJYD5Mhz3uB2dt5Ls1prHB5iDRFQSNgVU63J19MeFtKFVSF3I1%2B%2BVKHR6Agh%2FuNOZEBsQzqzDXhhZz8t%2Fvs6ZJRyOAg8XrwR94RThl%2B3yXZvd0wlmW%2BB73AneGjjsnE%2BxJfXCm62NG5HHl6dnLZ2iiglhlCeOmF4gcm%2FRulSJpqfkeg840e2rVYl1426UVIZFjxpB3jZsQzbVA4Ojm5%2F9dC293LYOHet9KZ5VVznojNwx0%2F7PuOAqqD2NTFY2f0Zmj6ui5DBDhi0gwkau%2F0Uukvc1swWXaJfsWCrdiQq0DA45KdoeL6wqvLkxp%2FXw2wt2Ma1b1%2B1o1hAbI6Meqr9tBasIiN94vKsOQ6XBnoC9SlBfcTeIm4UPlxsLozWyBUrP8RN1xePqGVizB0IYgGtjQQ4mqKWCKzlT%2BwUHtAbNyleOS9fo7GjOl4bIS68oubI4RViTwuqzXXyF3%2FnZPbFZc3HWnC4UoMcWGSokTxTFLYCQygmJ4yqpjz9uzjqMLOt%2Br4GOqUBDH8dDmtxqeu%2BjHD92UQ9X2H4Vf7fogbz2VOsyDP8iGvqQtmPhWvk2BXeL5hJ6WVT77WXn7GIqEsQhv5O4p9gcoRIX0Sxdv59YG6TyCZGeCdKHjNQ5V%2B6H6LkP8XnUWAU6ZSpyndDTiBuAnlnVSk6srJEw834V3Hd7xeaintw05T3WBYdeLWOmuFD7gsa0t3%2FO0OqFzWC8oUCm%2B2EDhsUbRLxNrKj&X-Amz-Signature=ba980c4e5601998b250be82c43bc1766ed452c6669cfd593cd188682d64b31ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675GI4NMY%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCd6OaZfGS1GSIh%2F3vAVTYU15qb4fH88KCRvXWsxIBb4AIgNVMWuXOHoDG31vG0sYk8kQs88CgdJa9I8yPnmVU3jmkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTW%2BXEKX0W%2BC2QBzSrcA72UV%2FqrbtV75cxZ%2BoWfXCe89LqPq52iBXoOYA07%2F1sC3Dbgh7ktcL3N2wil7aGPlRvfqIfUoUb47Kz4mjnKTW0YlDTpDUcOTYd1baSNLiToooTx%2Bq837clMjFz79ZVsJJYD5Mhz3uB2dt5Ls1prHB5iDRFQSNgVU63J19MeFtKFVSF3I1%2B%2BVKHR6Agh%2FuNOZEBsQzqzDXhhZz8t%2Fvs6ZJRyOAg8XrwR94RThl%2B3yXZvd0wlmW%2BB73AneGjjsnE%2BxJfXCm62NG5HHl6dnLZ2iiglhlCeOmF4gcm%2FRulSJpqfkeg840e2rVYl1426UVIZFjxpB3jZsQzbVA4Ojm5%2F9dC293LYOHet9KZ5VVznojNwx0%2F7PuOAqqD2NTFY2f0Zmj6ui5DBDhi0gwkau%2F0Uukvc1swWXaJfsWCrdiQq0DA45KdoeL6wqvLkxp%2FXw2wt2Ma1b1%2B1o1hAbI6Meqr9tBasIiN94vKsOQ6XBnoC9SlBfcTeIm4UPlxsLozWyBUrP8RN1xePqGVizB0IYgGtjQQ4mqKWCKzlT%2BwUHtAbNyleOS9fo7GjOl4bIS68oubI4RViTwuqzXXyF3%2FnZPbFZc3HWnC4UoMcWGSokTxTFLYCQygmJ4yqpjz9uzjqMLOt%2Br4GOqUBDH8dDmtxqeu%2BjHD92UQ9X2H4Vf7fogbz2VOsyDP8iGvqQtmPhWvk2BXeL5hJ6WVT77WXn7GIqEsQhv5O4p9gcoRIX0Sxdv59YG6TyCZGeCdKHjNQ5V%2B6H6LkP8XnUWAU6ZSpyndDTiBuAnlnVSk6srJEw834V3Hd7xeaintw05T3WBYdeLWOmuFD7gsa0t3%2FO0OqFzWC8oUCm%2B2EDhsUbRLxNrKj&X-Amz-Signature=4ae635409fc127498255d1f919610238458df446f229c74167b2ef2205ca9b73&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675GI4NMY%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCd6OaZfGS1GSIh%2F3vAVTYU15qb4fH88KCRvXWsxIBb4AIgNVMWuXOHoDG31vG0sYk8kQs88CgdJa9I8yPnmVU3jmkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTW%2BXEKX0W%2BC2QBzSrcA72UV%2FqrbtV75cxZ%2BoWfXCe89LqPq52iBXoOYA07%2F1sC3Dbgh7ktcL3N2wil7aGPlRvfqIfUoUb47Kz4mjnKTW0YlDTpDUcOTYd1baSNLiToooTx%2Bq837clMjFz79ZVsJJYD5Mhz3uB2dt5Ls1prHB5iDRFQSNgVU63J19MeFtKFVSF3I1%2B%2BVKHR6Agh%2FuNOZEBsQzqzDXhhZz8t%2Fvs6ZJRyOAg8XrwR94RThl%2B3yXZvd0wlmW%2BB73AneGjjsnE%2BxJfXCm62NG5HHl6dnLZ2iiglhlCeOmF4gcm%2FRulSJpqfkeg840e2rVYl1426UVIZFjxpB3jZsQzbVA4Ojm5%2F9dC293LYOHet9KZ5VVznojNwx0%2F7PuOAqqD2NTFY2f0Zmj6ui5DBDhi0gwkau%2F0Uukvc1swWXaJfsWCrdiQq0DA45KdoeL6wqvLkxp%2FXw2wt2Ma1b1%2B1o1hAbI6Meqr9tBasIiN94vKsOQ6XBnoC9SlBfcTeIm4UPlxsLozWyBUrP8RN1xePqGVizB0IYgGtjQQ4mqKWCKzlT%2BwUHtAbNyleOS9fo7GjOl4bIS68oubI4RViTwuqzXXyF3%2FnZPbFZc3HWnC4UoMcWGSokTxTFLYCQygmJ4yqpjz9uzjqMLOt%2Br4GOqUBDH8dDmtxqeu%2BjHD92UQ9X2H4Vf7fogbz2VOsyDP8iGvqQtmPhWvk2BXeL5hJ6WVT77WXn7GIqEsQhv5O4p9gcoRIX0Sxdv59YG6TyCZGeCdKHjNQ5V%2B6H6LkP8XnUWAU6ZSpyndDTiBuAnlnVSk6srJEw834V3Hd7xeaintw05T3WBYdeLWOmuFD7gsa0t3%2FO0OqFzWC8oUCm%2B2EDhsUbRLxNrKj&X-Amz-Signature=ce409074c0ef01bc024003ce021d68f2d47fde2947527d611deb93c2d14e1070&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675GI4NMY%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCd6OaZfGS1GSIh%2F3vAVTYU15qb4fH88KCRvXWsxIBb4AIgNVMWuXOHoDG31vG0sYk8kQs88CgdJa9I8yPnmVU3jmkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTW%2BXEKX0W%2BC2QBzSrcA72UV%2FqrbtV75cxZ%2BoWfXCe89LqPq52iBXoOYA07%2F1sC3Dbgh7ktcL3N2wil7aGPlRvfqIfUoUb47Kz4mjnKTW0YlDTpDUcOTYd1baSNLiToooTx%2Bq837clMjFz79ZVsJJYD5Mhz3uB2dt5Ls1prHB5iDRFQSNgVU63J19MeFtKFVSF3I1%2B%2BVKHR6Agh%2FuNOZEBsQzqzDXhhZz8t%2Fvs6ZJRyOAg8XrwR94RThl%2B3yXZvd0wlmW%2BB73AneGjjsnE%2BxJfXCm62NG5HHl6dnLZ2iiglhlCeOmF4gcm%2FRulSJpqfkeg840e2rVYl1426UVIZFjxpB3jZsQzbVA4Ojm5%2F9dC293LYOHet9KZ5VVznojNwx0%2F7PuOAqqD2NTFY2f0Zmj6ui5DBDhi0gwkau%2F0Uukvc1swWXaJfsWCrdiQq0DA45KdoeL6wqvLkxp%2FXw2wt2Ma1b1%2B1o1hAbI6Meqr9tBasIiN94vKsOQ6XBnoC9SlBfcTeIm4UPlxsLozWyBUrP8RN1xePqGVizB0IYgGtjQQ4mqKWCKzlT%2BwUHtAbNyleOS9fo7GjOl4bIS68oubI4RViTwuqzXXyF3%2FnZPbFZc3HWnC4UoMcWGSokTxTFLYCQygmJ4yqpjz9uzjqMLOt%2Br4GOqUBDH8dDmtxqeu%2BjHD92UQ9X2H4Vf7fogbz2VOsyDP8iGvqQtmPhWvk2BXeL5hJ6WVT77WXn7GIqEsQhv5O4p9gcoRIX0Sxdv59YG6TyCZGeCdKHjNQ5V%2B6H6LkP8XnUWAU6ZSpyndDTiBuAnlnVSk6srJEw834V3Hd7xeaintw05T3WBYdeLWOmuFD7gsa0t3%2FO0OqFzWC8oUCm%2B2EDhsUbRLxNrKj&X-Amz-Signature=f22a36b2caa1cc018b53bf3fe21c0843e9d121a7247f5b7628a41030c22b9c15&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
