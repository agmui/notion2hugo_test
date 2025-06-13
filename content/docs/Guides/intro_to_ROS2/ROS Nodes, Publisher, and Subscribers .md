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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6B4JUV%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIDMIOYDAksXe2WN6mkDgUZEQZsl6SusT%2BQy2wdR6cNsaAiA3K%2Bux%2FA2pgovnaI19xRvlBt4hFqvCy2YWAbWX8tPRzir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMwTeYkZsgugvck2gxKtwD7iUVJddeVjnLOte0cCgluXoXbhVi6iekkkbexkbYIU3SKoiSDGw4pGc7gVRjSPQvU3%2FFXEjnU1clPKM%2BOyADyWVKNOBdQuoBtkhdnKkesEYcT444LoMeTfj1ZROZrkQ6z3i2o6QlOOBNoY4ea95Aw5rAZcZ1JPZd2rJhjJyZ7xN2wQXdqZCfBsk0TDI89Zxmb4sPntFh%2BUSmvyabzb0Z8Fo%2FwoKxFq8SBQQ1t8pD%2FI0pCnYg8IvWCo2XKUgUy%2Bh6t6LdZWPI4S9z43WtWgkTTxsquqoDvMaI%2FSssH3BBwjDhIlC5zKRKdcv7cXQamqfvSwUH%2Be4ZXpVPvZdlkAxCRh%2BMhExctKznhXY5Mx3PlUWhvHl2LTt2MojRvzH31MZl%2BrboFzoE3w7tmv3xIRhszzWh8aFV%2FsWtLu9Hs2NY36qlR6aSlG5GFeskwsevJkkp3rC2e7f7hNxdKleL7ORkRr5gyrQYA2UOqf%2BQGnWahgBx4SaWOBLdCSFFDdoNoCmGqQ3h6e1obH63s94wbZO9Hdce5t05zmy2LzhUMaV9Ksm408SS%2BvWKc4KKf1XQdK%2BtwmV4sjhzbi8aM6FpiXy95SoOM98K0VpsA0dxwoiy1JWIFBQpMfb6aK%2FXFH8w8duywgY6pgHZRSFyfC6JovoQ5aslgAsigV8DKvkFI%2FemnV%2BGvHQPSDf7peSNOslD2DeCQKGM5rT15y4pgbp%2FDiDwrYssrh%2BUmegp5Vq4BJTSxACsvFL8eB5nEfn%2BGtPONiT0PrLb6%2Fl%2BL1mu%2FUJelBw8U0rsjEJx84lZo5zsueBY3YGBiTsQi0Sz70VZm%2FurJN%2FbRgramQMLxXVRHnQayXv5BvQ3awK5CH7qmh54&X-Amz-Signature=b3efe89e64b3866a37a4fd9569ab21ddc96bf9e98efe525bd06b7bb98462da81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6B4JUV%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIDMIOYDAksXe2WN6mkDgUZEQZsl6SusT%2BQy2wdR6cNsaAiA3K%2Bux%2FA2pgovnaI19xRvlBt4hFqvCy2YWAbWX8tPRzir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMwTeYkZsgugvck2gxKtwD7iUVJddeVjnLOte0cCgluXoXbhVi6iekkkbexkbYIU3SKoiSDGw4pGc7gVRjSPQvU3%2FFXEjnU1clPKM%2BOyADyWVKNOBdQuoBtkhdnKkesEYcT444LoMeTfj1ZROZrkQ6z3i2o6QlOOBNoY4ea95Aw5rAZcZ1JPZd2rJhjJyZ7xN2wQXdqZCfBsk0TDI89Zxmb4sPntFh%2BUSmvyabzb0Z8Fo%2FwoKxFq8SBQQ1t8pD%2FI0pCnYg8IvWCo2XKUgUy%2Bh6t6LdZWPI4S9z43WtWgkTTxsquqoDvMaI%2FSssH3BBwjDhIlC5zKRKdcv7cXQamqfvSwUH%2Be4ZXpVPvZdlkAxCRh%2BMhExctKznhXY5Mx3PlUWhvHl2LTt2MojRvzH31MZl%2BrboFzoE3w7tmv3xIRhszzWh8aFV%2FsWtLu9Hs2NY36qlR6aSlG5GFeskwsevJkkp3rC2e7f7hNxdKleL7ORkRr5gyrQYA2UOqf%2BQGnWahgBx4SaWOBLdCSFFDdoNoCmGqQ3h6e1obH63s94wbZO9Hdce5t05zmy2LzhUMaV9Ksm408SS%2BvWKc4KKf1XQdK%2BtwmV4sjhzbi8aM6FpiXy95SoOM98K0VpsA0dxwoiy1JWIFBQpMfb6aK%2FXFH8w8duywgY6pgHZRSFyfC6JovoQ5aslgAsigV8DKvkFI%2FemnV%2BGvHQPSDf7peSNOslD2DeCQKGM5rT15y4pgbp%2FDiDwrYssrh%2BUmegp5Vq4BJTSxACsvFL8eB5nEfn%2BGtPONiT0PrLb6%2Fl%2BL1mu%2FUJelBw8U0rsjEJx84lZo5zsueBY3YGBiTsQi0Sz70VZm%2FurJN%2FbRgramQMLxXVRHnQayXv5BvQ3awK5CH7qmh54&X-Amz-Signature=bf354a371881656df668a480d85e1a3fdc5db863a4c11c5a4f7d3ec6fd787811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6B4JUV%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIDMIOYDAksXe2WN6mkDgUZEQZsl6SusT%2BQy2wdR6cNsaAiA3K%2Bux%2FA2pgovnaI19xRvlBt4hFqvCy2YWAbWX8tPRzir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMwTeYkZsgugvck2gxKtwD7iUVJddeVjnLOte0cCgluXoXbhVi6iekkkbexkbYIU3SKoiSDGw4pGc7gVRjSPQvU3%2FFXEjnU1clPKM%2BOyADyWVKNOBdQuoBtkhdnKkesEYcT444LoMeTfj1ZROZrkQ6z3i2o6QlOOBNoY4ea95Aw5rAZcZ1JPZd2rJhjJyZ7xN2wQXdqZCfBsk0TDI89Zxmb4sPntFh%2BUSmvyabzb0Z8Fo%2FwoKxFq8SBQQ1t8pD%2FI0pCnYg8IvWCo2XKUgUy%2Bh6t6LdZWPI4S9z43WtWgkTTxsquqoDvMaI%2FSssH3BBwjDhIlC5zKRKdcv7cXQamqfvSwUH%2Be4ZXpVPvZdlkAxCRh%2BMhExctKznhXY5Mx3PlUWhvHl2LTt2MojRvzH31MZl%2BrboFzoE3w7tmv3xIRhszzWh8aFV%2FsWtLu9Hs2NY36qlR6aSlG5GFeskwsevJkkp3rC2e7f7hNxdKleL7ORkRr5gyrQYA2UOqf%2BQGnWahgBx4SaWOBLdCSFFDdoNoCmGqQ3h6e1obH63s94wbZO9Hdce5t05zmy2LzhUMaV9Ksm408SS%2BvWKc4KKf1XQdK%2BtwmV4sjhzbi8aM6FpiXy95SoOM98K0VpsA0dxwoiy1JWIFBQpMfb6aK%2FXFH8w8duywgY6pgHZRSFyfC6JovoQ5aslgAsigV8DKvkFI%2FemnV%2BGvHQPSDf7peSNOslD2DeCQKGM5rT15y4pgbp%2FDiDwrYssrh%2BUmegp5Vq4BJTSxACsvFL8eB5nEfn%2BGtPONiT0PrLb6%2Fl%2BL1mu%2FUJelBw8U0rsjEJx84lZo5zsueBY3YGBiTsQi0Sz70VZm%2FurJN%2FbRgramQMLxXVRHnQayXv5BvQ3awK5CH7qmh54&X-Amz-Signature=5c9d0b06ef748c4139155983772237415a9e742778ac5cf4290e1114caca5c74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6B4JUV%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIDMIOYDAksXe2WN6mkDgUZEQZsl6SusT%2BQy2wdR6cNsaAiA3K%2Bux%2FA2pgovnaI19xRvlBt4hFqvCy2YWAbWX8tPRzir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMwTeYkZsgugvck2gxKtwD7iUVJddeVjnLOte0cCgluXoXbhVi6iekkkbexkbYIU3SKoiSDGw4pGc7gVRjSPQvU3%2FFXEjnU1clPKM%2BOyADyWVKNOBdQuoBtkhdnKkesEYcT444LoMeTfj1ZROZrkQ6z3i2o6QlOOBNoY4ea95Aw5rAZcZ1JPZd2rJhjJyZ7xN2wQXdqZCfBsk0TDI89Zxmb4sPntFh%2BUSmvyabzb0Z8Fo%2FwoKxFq8SBQQ1t8pD%2FI0pCnYg8IvWCo2XKUgUy%2Bh6t6LdZWPI4S9z43WtWgkTTxsquqoDvMaI%2FSssH3BBwjDhIlC5zKRKdcv7cXQamqfvSwUH%2Be4ZXpVPvZdlkAxCRh%2BMhExctKznhXY5Mx3PlUWhvHl2LTt2MojRvzH31MZl%2BrboFzoE3w7tmv3xIRhszzWh8aFV%2FsWtLu9Hs2NY36qlR6aSlG5GFeskwsevJkkp3rC2e7f7hNxdKleL7ORkRr5gyrQYA2UOqf%2BQGnWahgBx4SaWOBLdCSFFDdoNoCmGqQ3h6e1obH63s94wbZO9Hdce5t05zmy2LzhUMaV9Ksm408SS%2BvWKc4KKf1XQdK%2BtwmV4sjhzbi8aM6FpiXy95SoOM98K0VpsA0dxwoiy1JWIFBQpMfb6aK%2FXFH8w8duywgY6pgHZRSFyfC6JovoQ5aslgAsigV8DKvkFI%2FemnV%2BGvHQPSDf7peSNOslD2DeCQKGM5rT15y4pgbp%2FDiDwrYssrh%2BUmegp5Vq4BJTSxACsvFL8eB5nEfn%2BGtPONiT0PrLb6%2Fl%2BL1mu%2FUJelBw8U0rsjEJx84lZo5zsueBY3YGBiTsQi0Sz70VZm%2FurJN%2FbRgramQMLxXVRHnQayXv5BvQ3awK5CH7qmh54&X-Amz-Signature=d8955796bd63e54840d984a4cc96a1b173185ef93f156af007ecbfb208abc4c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6B4JUV%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIDMIOYDAksXe2WN6mkDgUZEQZsl6SusT%2BQy2wdR6cNsaAiA3K%2Bux%2FA2pgovnaI19xRvlBt4hFqvCy2YWAbWX8tPRzir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMwTeYkZsgugvck2gxKtwD7iUVJddeVjnLOte0cCgluXoXbhVi6iekkkbexkbYIU3SKoiSDGw4pGc7gVRjSPQvU3%2FFXEjnU1clPKM%2BOyADyWVKNOBdQuoBtkhdnKkesEYcT444LoMeTfj1ZROZrkQ6z3i2o6QlOOBNoY4ea95Aw5rAZcZ1JPZd2rJhjJyZ7xN2wQXdqZCfBsk0TDI89Zxmb4sPntFh%2BUSmvyabzb0Z8Fo%2FwoKxFq8SBQQ1t8pD%2FI0pCnYg8IvWCo2XKUgUy%2Bh6t6LdZWPI4S9z43WtWgkTTxsquqoDvMaI%2FSssH3BBwjDhIlC5zKRKdcv7cXQamqfvSwUH%2Be4ZXpVPvZdlkAxCRh%2BMhExctKznhXY5Mx3PlUWhvHl2LTt2MojRvzH31MZl%2BrboFzoE3w7tmv3xIRhszzWh8aFV%2FsWtLu9Hs2NY36qlR6aSlG5GFeskwsevJkkp3rC2e7f7hNxdKleL7ORkRr5gyrQYA2UOqf%2BQGnWahgBx4SaWOBLdCSFFDdoNoCmGqQ3h6e1obH63s94wbZO9Hdce5t05zmy2LzhUMaV9Ksm408SS%2BvWKc4KKf1XQdK%2BtwmV4sjhzbi8aM6FpiXy95SoOM98K0VpsA0dxwoiy1JWIFBQpMfb6aK%2FXFH8w8duywgY6pgHZRSFyfC6JovoQ5aslgAsigV8DKvkFI%2FemnV%2BGvHQPSDf7peSNOslD2DeCQKGM5rT15y4pgbp%2FDiDwrYssrh%2BUmegp5Vq4BJTSxACsvFL8eB5nEfn%2BGtPONiT0PrLb6%2Fl%2BL1mu%2FUJelBw8U0rsjEJx84lZo5zsueBY3YGBiTsQi0Sz70VZm%2FurJN%2FbRgramQMLxXVRHnQayXv5BvQ3awK5CH7qmh54&X-Amz-Signature=ba43c0a4719dba3401a8525837a1f593173a6efa38c3420f544721e3a59114e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6B4JUV%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIDMIOYDAksXe2WN6mkDgUZEQZsl6SusT%2BQy2wdR6cNsaAiA3K%2Bux%2FA2pgovnaI19xRvlBt4hFqvCy2YWAbWX8tPRzir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMwTeYkZsgugvck2gxKtwD7iUVJddeVjnLOte0cCgluXoXbhVi6iekkkbexkbYIU3SKoiSDGw4pGc7gVRjSPQvU3%2FFXEjnU1clPKM%2BOyADyWVKNOBdQuoBtkhdnKkesEYcT444LoMeTfj1ZROZrkQ6z3i2o6QlOOBNoY4ea95Aw5rAZcZ1JPZd2rJhjJyZ7xN2wQXdqZCfBsk0TDI89Zxmb4sPntFh%2BUSmvyabzb0Z8Fo%2FwoKxFq8SBQQ1t8pD%2FI0pCnYg8IvWCo2XKUgUy%2Bh6t6LdZWPI4S9z43WtWgkTTxsquqoDvMaI%2FSssH3BBwjDhIlC5zKRKdcv7cXQamqfvSwUH%2Be4ZXpVPvZdlkAxCRh%2BMhExctKznhXY5Mx3PlUWhvHl2LTt2MojRvzH31MZl%2BrboFzoE3w7tmv3xIRhszzWh8aFV%2FsWtLu9Hs2NY36qlR6aSlG5GFeskwsevJkkp3rC2e7f7hNxdKleL7ORkRr5gyrQYA2UOqf%2BQGnWahgBx4SaWOBLdCSFFDdoNoCmGqQ3h6e1obH63s94wbZO9Hdce5t05zmy2LzhUMaV9Ksm408SS%2BvWKc4KKf1XQdK%2BtwmV4sjhzbi8aM6FpiXy95SoOM98K0VpsA0dxwoiy1JWIFBQpMfb6aK%2FXFH8w8duywgY6pgHZRSFyfC6JovoQ5aslgAsigV8DKvkFI%2FemnV%2BGvHQPSDf7peSNOslD2DeCQKGM5rT15y4pgbp%2FDiDwrYssrh%2BUmegp5Vq4BJTSxACsvFL8eB5nEfn%2BGtPONiT0PrLb6%2Fl%2BL1mu%2FUJelBw8U0rsjEJx84lZo5zsueBY3YGBiTsQi0Sz70VZm%2FurJN%2FbRgramQMLxXVRHnQayXv5BvQ3awK5CH7qmh54&X-Amz-Signature=c287ef6a5bebd12740d6647ecc09cfeaf3db9292c1bcffad4f1402517cf64815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6B4JUV%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIDMIOYDAksXe2WN6mkDgUZEQZsl6SusT%2BQy2wdR6cNsaAiA3K%2Bux%2FA2pgovnaI19xRvlBt4hFqvCy2YWAbWX8tPRzir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMwTeYkZsgugvck2gxKtwD7iUVJddeVjnLOte0cCgluXoXbhVi6iekkkbexkbYIU3SKoiSDGw4pGc7gVRjSPQvU3%2FFXEjnU1clPKM%2BOyADyWVKNOBdQuoBtkhdnKkesEYcT444LoMeTfj1ZROZrkQ6z3i2o6QlOOBNoY4ea95Aw5rAZcZ1JPZd2rJhjJyZ7xN2wQXdqZCfBsk0TDI89Zxmb4sPntFh%2BUSmvyabzb0Z8Fo%2FwoKxFq8SBQQ1t8pD%2FI0pCnYg8IvWCo2XKUgUy%2Bh6t6LdZWPI4S9z43WtWgkTTxsquqoDvMaI%2FSssH3BBwjDhIlC5zKRKdcv7cXQamqfvSwUH%2Be4ZXpVPvZdlkAxCRh%2BMhExctKznhXY5Mx3PlUWhvHl2LTt2MojRvzH31MZl%2BrboFzoE3w7tmv3xIRhszzWh8aFV%2FsWtLu9Hs2NY36qlR6aSlG5GFeskwsevJkkp3rC2e7f7hNxdKleL7ORkRr5gyrQYA2UOqf%2BQGnWahgBx4SaWOBLdCSFFDdoNoCmGqQ3h6e1obH63s94wbZO9Hdce5t05zmy2LzhUMaV9Ksm408SS%2BvWKc4KKf1XQdK%2BtwmV4sjhzbi8aM6FpiXy95SoOM98K0VpsA0dxwoiy1JWIFBQpMfb6aK%2FXFH8w8duywgY6pgHZRSFyfC6JovoQ5aslgAsigV8DKvkFI%2FemnV%2BGvHQPSDf7peSNOslD2DeCQKGM5rT15y4pgbp%2FDiDwrYssrh%2BUmegp5Vq4BJTSxACsvFL8eB5nEfn%2BGtPONiT0PrLb6%2Fl%2BL1mu%2FUJelBw8U0rsjEJx84lZo5zsueBY3YGBiTsQi0Sz70VZm%2FurJN%2FbRgramQMLxXVRHnQayXv5BvQ3awK5CH7qmh54&X-Amz-Signature=7075ca90fb3a12f61b3af81e7e6045b76546161599b3187cf24d36be0807e3dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6B4JUV%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIDMIOYDAksXe2WN6mkDgUZEQZsl6SusT%2BQy2wdR6cNsaAiA3K%2Bux%2FA2pgovnaI19xRvlBt4hFqvCy2YWAbWX8tPRzir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMwTeYkZsgugvck2gxKtwD7iUVJddeVjnLOte0cCgluXoXbhVi6iekkkbexkbYIU3SKoiSDGw4pGc7gVRjSPQvU3%2FFXEjnU1clPKM%2BOyADyWVKNOBdQuoBtkhdnKkesEYcT444LoMeTfj1ZROZrkQ6z3i2o6QlOOBNoY4ea95Aw5rAZcZ1JPZd2rJhjJyZ7xN2wQXdqZCfBsk0TDI89Zxmb4sPntFh%2BUSmvyabzb0Z8Fo%2FwoKxFq8SBQQ1t8pD%2FI0pCnYg8IvWCo2XKUgUy%2Bh6t6LdZWPI4S9z43WtWgkTTxsquqoDvMaI%2FSssH3BBwjDhIlC5zKRKdcv7cXQamqfvSwUH%2Be4ZXpVPvZdlkAxCRh%2BMhExctKznhXY5Mx3PlUWhvHl2LTt2MojRvzH31MZl%2BrboFzoE3w7tmv3xIRhszzWh8aFV%2FsWtLu9Hs2NY36qlR6aSlG5GFeskwsevJkkp3rC2e7f7hNxdKleL7ORkRr5gyrQYA2UOqf%2BQGnWahgBx4SaWOBLdCSFFDdoNoCmGqQ3h6e1obH63s94wbZO9Hdce5t05zmy2LzhUMaV9Ksm408SS%2BvWKc4KKf1XQdK%2BtwmV4sjhzbi8aM6FpiXy95SoOM98K0VpsA0dxwoiy1JWIFBQpMfb6aK%2FXFH8w8duywgY6pgHZRSFyfC6JovoQ5aslgAsigV8DKvkFI%2FemnV%2BGvHQPSDf7peSNOslD2DeCQKGM5rT15y4pgbp%2FDiDwrYssrh%2BUmegp5Vq4BJTSxACsvFL8eB5nEfn%2BGtPONiT0PrLb6%2Fl%2BL1mu%2FUJelBw8U0rsjEJx84lZo5zsueBY3YGBiTsQi0Sz70VZm%2FurJN%2FbRgramQMLxXVRHnQayXv5BvQ3awK5CH7qmh54&X-Amz-Signature=21df2f7ebb782aa96a420c067df1b81a1720d4f4f55551f8ca2797e7e3b975c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
