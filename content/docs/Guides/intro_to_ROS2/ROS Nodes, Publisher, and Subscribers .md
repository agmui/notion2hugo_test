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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643JM46CO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBn2HEJvosEJlmHfgpRk%2BPXR0FS%2Bgwe%2Br%2Ba7nQKOqe4hAiEAnmtXG6%2BUCzdyfnO%2FykhPVN%2B8kJiI4gXCztAd8%2F27e5MqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZcZqBOdAHhytJdBircA7wbR%2BUWHmcEy4vRKKqQyRwJIoxwlkv1VjXxm%2BY2fW0GOqzdjr2H6kJ0Bazfc3Y7JWWysAFK8GeJyUaRn5yhrr8IXjaLYdPEYJrWtknj3%2BCBYTk5MG2x%2FoTLuT6IdRfj593lPLoBRmvuLryq%2FA1ZbZsvb9vhOxKvkTSBT6UA%2BsTU6baYrEUhRI04Mkt4Y2A%2FJUKOvXXpzoKyP9PJFZv0oByBAvGl4Pq3rlcsuaCcVJxqnCM131W9ehKI6fMctEmPBUT%2BqeHoljs8JzIrgSdBDfNH%2FS%2Fe63%2BG7wJxJ3INL%2BG63q0AYx3WWDUGShF1IzZLcBxMyiKQRau17KI6F%2BifRASnq2X%2BYA9NXnMPVJOz9D8bb7tlYv%2BSP%2B9%2F4smgYq%2BU1JstmsjBvj5gmxbQ7LQYHYLYgK1eJF3ySQQjVOBJjpk5XZFDVDYznVQhkbfPZceEIJVtowKrnxHy6q6t%2BOoVGX6foP8dkBT9VbseM%2FEOJxCA7jb2v5r1XmDEH3nyQVeZVaSnhcRI367puyuJbpOtxlmiFpy5MYKqpmxdKJbAYNpxPrPPGzN0tsIjNloGyLWRj%2F2eKigDzmhVHG47A56tzOmoDBAHcWfOzOnK6kXTITY%2FdLHpcnXvYRPQWql%2FMOuNib8GOqUBitV4j3WNgoLjROiDHivaA0AbRpD8RR6z48d%2FHrvyzAqx2EZzEms8q74OIK3236%2FRUyBngeVp3hdjzSJ4xNCMAp%2B7XOFZJb%2B3Msme5MhC6xUNXOmQKCWwxJnwNbsHNYufe9npKpM16dgvERxTmZFWSxo6z%2B11PAgzVTyEYFI6qA8VmPbtD6GcsgyEPrt84dF95jh5lM6eiioUFaeTqi4NAcDCtoQ9&X-Amz-Signature=aab0da41a23e9f8414269c2c96302f5550bafe5a26fda4af224c5627fd1f8fd9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643JM46CO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBn2HEJvosEJlmHfgpRk%2BPXR0FS%2Bgwe%2Br%2Ba7nQKOqe4hAiEAnmtXG6%2BUCzdyfnO%2FykhPVN%2B8kJiI4gXCztAd8%2F27e5MqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZcZqBOdAHhytJdBircA7wbR%2BUWHmcEy4vRKKqQyRwJIoxwlkv1VjXxm%2BY2fW0GOqzdjr2H6kJ0Bazfc3Y7JWWysAFK8GeJyUaRn5yhrr8IXjaLYdPEYJrWtknj3%2BCBYTk5MG2x%2FoTLuT6IdRfj593lPLoBRmvuLryq%2FA1ZbZsvb9vhOxKvkTSBT6UA%2BsTU6baYrEUhRI04Mkt4Y2A%2FJUKOvXXpzoKyP9PJFZv0oByBAvGl4Pq3rlcsuaCcVJxqnCM131W9ehKI6fMctEmPBUT%2BqeHoljs8JzIrgSdBDfNH%2FS%2Fe63%2BG7wJxJ3INL%2BG63q0AYx3WWDUGShF1IzZLcBxMyiKQRau17KI6F%2BifRASnq2X%2BYA9NXnMPVJOz9D8bb7tlYv%2BSP%2B9%2F4smgYq%2BU1JstmsjBvj5gmxbQ7LQYHYLYgK1eJF3ySQQjVOBJjpk5XZFDVDYznVQhkbfPZceEIJVtowKrnxHy6q6t%2BOoVGX6foP8dkBT9VbseM%2FEOJxCA7jb2v5r1XmDEH3nyQVeZVaSnhcRI367puyuJbpOtxlmiFpy5MYKqpmxdKJbAYNpxPrPPGzN0tsIjNloGyLWRj%2F2eKigDzmhVHG47A56tzOmoDBAHcWfOzOnK6kXTITY%2FdLHpcnXvYRPQWql%2FMOuNib8GOqUBitV4j3WNgoLjROiDHivaA0AbRpD8RR6z48d%2FHrvyzAqx2EZzEms8q74OIK3236%2FRUyBngeVp3hdjzSJ4xNCMAp%2B7XOFZJb%2B3Msme5MhC6xUNXOmQKCWwxJnwNbsHNYufe9npKpM16dgvERxTmZFWSxo6z%2B11PAgzVTyEYFI6qA8VmPbtD6GcsgyEPrt84dF95jh5lM6eiioUFaeTqi4NAcDCtoQ9&X-Amz-Signature=1bb02b6b5b6c0571990bf10e29188f49f35164a90d9b69d94d1af76ed4721b5b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643JM46CO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBn2HEJvosEJlmHfgpRk%2BPXR0FS%2Bgwe%2Br%2Ba7nQKOqe4hAiEAnmtXG6%2BUCzdyfnO%2FykhPVN%2B8kJiI4gXCztAd8%2F27e5MqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZcZqBOdAHhytJdBircA7wbR%2BUWHmcEy4vRKKqQyRwJIoxwlkv1VjXxm%2BY2fW0GOqzdjr2H6kJ0Bazfc3Y7JWWysAFK8GeJyUaRn5yhrr8IXjaLYdPEYJrWtknj3%2BCBYTk5MG2x%2FoTLuT6IdRfj593lPLoBRmvuLryq%2FA1ZbZsvb9vhOxKvkTSBT6UA%2BsTU6baYrEUhRI04Mkt4Y2A%2FJUKOvXXpzoKyP9PJFZv0oByBAvGl4Pq3rlcsuaCcVJxqnCM131W9ehKI6fMctEmPBUT%2BqeHoljs8JzIrgSdBDfNH%2FS%2Fe63%2BG7wJxJ3INL%2BG63q0AYx3WWDUGShF1IzZLcBxMyiKQRau17KI6F%2BifRASnq2X%2BYA9NXnMPVJOz9D8bb7tlYv%2BSP%2B9%2F4smgYq%2BU1JstmsjBvj5gmxbQ7LQYHYLYgK1eJF3ySQQjVOBJjpk5XZFDVDYznVQhkbfPZceEIJVtowKrnxHy6q6t%2BOoVGX6foP8dkBT9VbseM%2FEOJxCA7jb2v5r1XmDEH3nyQVeZVaSnhcRI367puyuJbpOtxlmiFpy5MYKqpmxdKJbAYNpxPrPPGzN0tsIjNloGyLWRj%2F2eKigDzmhVHG47A56tzOmoDBAHcWfOzOnK6kXTITY%2FdLHpcnXvYRPQWql%2FMOuNib8GOqUBitV4j3WNgoLjROiDHivaA0AbRpD8RR6z48d%2FHrvyzAqx2EZzEms8q74OIK3236%2FRUyBngeVp3hdjzSJ4xNCMAp%2B7XOFZJb%2B3Msme5MhC6xUNXOmQKCWwxJnwNbsHNYufe9npKpM16dgvERxTmZFWSxo6z%2B11PAgzVTyEYFI6qA8VmPbtD6GcsgyEPrt84dF95jh5lM6eiioUFaeTqi4NAcDCtoQ9&X-Amz-Signature=ceae771d43104e5b0c827b21b28d00285811afb5c8dee93017225012900a7f26&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643JM46CO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBn2HEJvosEJlmHfgpRk%2BPXR0FS%2Bgwe%2Br%2Ba7nQKOqe4hAiEAnmtXG6%2BUCzdyfnO%2FykhPVN%2B8kJiI4gXCztAd8%2F27e5MqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZcZqBOdAHhytJdBircA7wbR%2BUWHmcEy4vRKKqQyRwJIoxwlkv1VjXxm%2BY2fW0GOqzdjr2H6kJ0Bazfc3Y7JWWysAFK8GeJyUaRn5yhrr8IXjaLYdPEYJrWtknj3%2BCBYTk5MG2x%2FoTLuT6IdRfj593lPLoBRmvuLryq%2FA1ZbZsvb9vhOxKvkTSBT6UA%2BsTU6baYrEUhRI04Mkt4Y2A%2FJUKOvXXpzoKyP9PJFZv0oByBAvGl4Pq3rlcsuaCcVJxqnCM131W9ehKI6fMctEmPBUT%2BqeHoljs8JzIrgSdBDfNH%2FS%2Fe63%2BG7wJxJ3INL%2BG63q0AYx3WWDUGShF1IzZLcBxMyiKQRau17KI6F%2BifRASnq2X%2BYA9NXnMPVJOz9D8bb7tlYv%2BSP%2B9%2F4smgYq%2BU1JstmsjBvj5gmxbQ7LQYHYLYgK1eJF3ySQQjVOBJjpk5XZFDVDYznVQhkbfPZceEIJVtowKrnxHy6q6t%2BOoVGX6foP8dkBT9VbseM%2FEOJxCA7jb2v5r1XmDEH3nyQVeZVaSnhcRI367puyuJbpOtxlmiFpy5MYKqpmxdKJbAYNpxPrPPGzN0tsIjNloGyLWRj%2F2eKigDzmhVHG47A56tzOmoDBAHcWfOzOnK6kXTITY%2FdLHpcnXvYRPQWql%2FMOuNib8GOqUBitV4j3WNgoLjROiDHivaA0AbRpD8RR6z48d%2FHrvyzAqx2EZzEms8q74OIK3236%2FRUyBngeVp3hdjzSJ4xNCMAp%2B7XOFZJb%2B3Msme5MhC6xUNXOmQKCWwxJnwNbsHNYufe9npKpM16dgvERxTmZFWSxo6z%2B11PAgzVTyEYFI6qA8VmPbtD6GcsgyEPrt84dF95jh5lM6eiioUFaeTqi4NAcDCtoQ9&X-Amz-Signature=259cefed4e494ffe76b07c6afac7bb5f2b3214bd817cfb05812272bbfa5257a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643JM46CO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBn2HEJvosEJlmHfgpRk%2BPXR0FS%2Bgwe%2Br%2Ba7nQKOqe4hAiEAnmtXG6%2BUCzdyfnO%2FykhPVN%2B8kJiI4gXCztAd8%2F27e5MqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZcZqBOdAHhytJdBircA7wbR%2BUWHmcEy4vRKKqQyRwJIoxwlkv1VjXxm%2BY2fW0GOqzdjr2H6kJ0Bazfc3Y7JWWysAFK8GeJyUaRn5yhrr8IXjaLYdPEYJrWtknj3%2BCBYTk5MG2x%2FoTLuT6IdRfj593lPLoBRmvuLryq%2FA1ZbZsvb9vhOxKvkTSBT6UA%2BsTU6baYrEUhRI04Mkt4Y2A%2FJUKOvXXpzoKyP9PJFZv0oByBAvGl4Pq3rlcsuaCcVJxqnCM131W9ehKI6fMctEmPBUT%2BqeHoljs8JzIrgSdBDfNH%2FS%2Fe63%2BG7wJxJ3INL%2BG63q0AYx3WWDUGShF1IzZLcBxMyiKQRau17KI6F%2BifRASnq2X%2BYA9NXnMPVJOz9D8bb7tlYv%2BSP%2B9%2F4smgYq%2BU1JstmsjBvj5gmxbQ7LQYHYLYgK1eJF3ySQQjVOBJjpk5XZFDVDYznVQhkbfPZceEIJVtowKrnxHy6q6t%2BOoVGX6foP8dkBT9VbseM%2FEOJxCA7jb2v5r1XmDEH3nyQVeZVaSnhcRI367puyuJbpOtxlmiFpy5MYKqpmxdKJbAYNpxPrPPGzN0tsIjNloGyLWRj%2F2eKigDzmhVHG47A56tzOmoDBAHcWfOzOnK6kXTITY%2FdLHpcnXvYRPQWql%2FMOuNib8GOqUBitV4j3WNgoLjROiDHivaA0AbRpD8RR6z48d%2FHrvyzAqx2EZzEms8q74OIK3236%2FRUyBngeVp3hdjzSJ4xNCMAp%2B7XOFZJb%2B3Msme5MhC6xUNXOmQKCWwxJnwNbsHNYufe9npKpM16dgvERxTmZFWSxo6z%2B11PAgzVTyEYFI6qA8VmPbtD6GcsgyEPrt84dF95jh5lM6eiioUFaeTqi4NAcDCtoQ9&X-Amz-Signature=ec1e951eeefc33d45fb0f444d1617a4871abc4f3e7348858c52c25aab904f170&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643JM46CO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBn2HEJvosEJlmHfgpRk%2BPXR0FS%2Bgwe%2Br%2Ba7nQKOqe4hAiEAnmtXG6%2BUCzdyfnO%2FykhPVN%2B8kJiI4gXCztAd8%2F27e5MqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZcZqBOdAHhytJdBircA7wbR%2BUWHmcEy4vRKKqQyRwJIoxwlkv1VjXxm%2BY2fW0GOqzdjr2H6kJ0Bazfc3Y7JWWysAFK8GeJyUaRn5yhrr8IXjaLYdPEYJrWtknj3%2BCBYTk5MG2x%2FoTLuT6IdRfj593lPLoBRmvuLryq%2FA1ZbZsvb9vhOxKvkTSBT6UA%2BsTU6baYrEUhRI04Mkt4Y2A%2FJUKOvXXpzoKyP9PJFZv0oByBAvGl4Pq3rlcsuaCcVJxqnCM131W9ehKI6fMctEmPBUT%2BqeHoljs8JzIrgSdBDfNH%2FS%2Fe63%2BG7wJxJ3INL%2BG63q0AYx3WWDUGShF1IzZLcBxMyiKQRau17KI6F%2BifRASnq2X%2BYA9NXnMPVJOz9D8bb7tlYv%2BSP%2B9%2F4smgYq%2BU1JstmsjBvj5gmxbQ7LQYHYLYgK1eJF3ySQQjVOBJjpk5XZFDVDYznVQhkbfPZceEIJVtowKrnxHy6q6t%2BOoVGX6foP8dkBT9VbseM%2FEOJxCA7jb2v5r1XmDEH3nyQVeZVaSnhcRI367puyuJbpOtxlmiFpy5MYKqpmxdKJbAYNpxPrPPGzN0tsIjNloGyLWRj%2F2eKigDzmhVHG47A56tzOmoDBAHcWfOzOnK6kXTITY%2FdLHpcnXvYRPQWql%2FMOuNib8GOqUBitV4j3WNgoLjROiDHivaA0AbRpD8RR6z48d%2FHrvyzAqx2EZzEms8q74OIK3236%2FRUyBngeVp3hdjzSJ4xNCMAp%2B7XOFZJb%2B3Msme5MhC6xUNXOmQKCWwxJnwNbsHNYufe9npKpM16dgvERxTmZFWSxo6z%2B11PAgzVTyEYFI6qA8VmPbtD6GcsgyEPrt84dF95jh5lM6eiioUFaeTqi4NAcDCtoQ9&X-Amz-Signature=6ba8a5ef7f9a94e1eadfc7bfc8e3f5df82ae96f041514c1d49dfc5e13cc94577&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643JM46CO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBn2HEJvosEJlmHfgpRk%2BPXR0FS%2Bgwe%2Br%2Ba7nQKOqe4hAiEAnmtXG6%2BUCzdyfnO%2FykhPVN%2B8kJiI4gXCztAd8%2F27e5MqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZcZqBOdAHhytJdBircA7wbR%2BUWHmcEy4vRKKqQyRwJIoxwlkv1VjXxm%2BY2fW0GOqzdjr2H6kJ0Bazfc3Y7JWWysAFK8GeJyUaRn5yhrr8IXjaLYdPEYJrWtknj3%2BCBYTk5MG2x%2FoTLuT6IdRfj593lPLoBRmvuLryq%2FA1ZbZsvb9vhOxKvkTSBT6UA%2BsTU6baYrEUhRI04Mkt4Y2A%2FJUKOvXXpzoKyP9PJFZv0oByBAvGl4Pq3rlcsuaCcVJxqnCM131W9ehKI6fMctEmPBUT%2BqeHoljs8JzIrgSdBDfNH%2FS%2Fe63%2BG7wJxJ3INL%2BG63q0AYx3WWDUGShF1IzZLcBxMyiKQRau17KI6F%2BifRASnq2X%2BYA9NXnMPVJOz9D8bb7tlYv%2BSP%2B9%2F4smgYq%2BU1JstmsjBvj5gmxbQ7LQYHYLYgK1eJF3ySQQjVOBJjpk5XZFDVDYznVQhkbfPZceEIJVtowKrnxHy6q6t%2BOoVGX6foP8dkBT9VbseM%2FEOJxCA7jb2v5r1XmDEH3nyQVeZVaSnhcRI367puyuJbpOtxlmiFpy5MYKqpmxdKJbAYNpxPrPPGzN0tsIjNloGyLWRj%2F2eKigDzmhVHG47A56tzOmoDBAHcWfOzOnK6kXTITY%2FdLHpcnXvYRPQWql%2FMOuNib8GOqUBitV4j3WNgoLjROiDHivaA0AbRpD8RR6z48d%2FHrvyzAqx2EZzEms8q74OIK3236%2FRUyBngeVp3hdjzSJ4xNCMAp%2B7XOFZJb%2B3Msme5MhC6xUNXOmQKCWwxJnwNbsHNYufe9npKpM16dgvERxTmZFWSxo6z%2B11PAgzVTyEYFI6qA8VmPbtD6GcsgyEPrt84dF95jh5lM6eiioUFaeTqi4NAcDCtoQ9&X-Amz-Signature=721ad5b55e7bc08a4cf60bd40cd53868b8b83e4484cc32864aab571b6f700003&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643JM46CO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBn2HEJvosEJlmHfgpRk%2BPXR0FS%2Bgwe%2Br%2Ba7nQKOqe4hAiEAnmtXG6%2BUCzdyfnO%2FykhPVN%2B8kJiI4gXCztAd8%2F27e5MqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZcZqBOdAHhytJdBircA7wbR%2BUWHmcEy4vRKKqQyRwJIoxwlkv1VjXxm%2BY2fW0GOqzdjr2H6kJ0Bazfc3Y7JWWysAFK8GeJyUaRn5yhrr8IXjaLYdPEYJrWtknj3%2BCBYTk5MG2x%2FoTLuT6IdRfj593lPLoBRmvuLryq%2FA1ZbZsvb9vhOxKvkTSBT6UA%2BsTU6baYrEUhRI04Mkt4Y2A%2FJUKOvXXpzoKyP9PJFZv0oByBAvGl4Pq3rlcsuaCcVJxqnCM131W9ehKI6fMctEmPBUT%2BqeHoljs8JzIrgSdBDfNH%2FS%2Fe63%2BG7wJxJ3INL%2BG63q0AYx3WWDUGShF1IzZLcBxMyiKQRau17KI6F%2BifRASnq2X%2BYA9NXnMPVJOz9D8bb7tlYv%2BSP%2B9%2F4smgYq%2BU1JstmsjBvj5gmxbQ7LQYHYLYgK1eJF3ySQQjVOBJjpk5XZFDVDYznVQhkbfPZceEIJVtowKrnxHy6q6t%2BOoVGX6foP8dkBT9VbseM%2FEOJxCA7jb2v5r1XmDEH3nyQVeZVaSnhcRI367puyuJbpOtxlmiFpy5MYKqpmxdKJbAYNpxPrPPGzN0tsIjNloGyLWRj%2F2eKigDzmhVHG47A56tzOmoDBAHcWfOzOnK6kXTITY%2FdLHpcnXvYRPQWql%2FMOuNib8GOqUBitV4j3WNgoLjROiDHivaA0AbRpD8RR6z48d%2FHrvyzAqx2EZzEms8q74OIK3236%2FRUyBngeVp3hdjzSJ4xNCMAp%2B7XOFZJb%2B3Msme5MhC6xUNXOmQKCWwxJnwNbsHNYufe9npKpM16dgvERxTmZFWSxo6z%2B11PAgzVTyEYFI6qA8VmPbtD6GcsgyEPrt84dF95jh5lM6eiioUFaeTqi4NAcDCtoQ9&X-Amz-Signature=60b5dbc5cab2c30655fe7444521f81936f48cdfdc65c0dc006af362ecf4ae957&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
