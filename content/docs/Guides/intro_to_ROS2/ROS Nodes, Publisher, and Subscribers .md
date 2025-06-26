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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RWASQFS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCkrLecit9KNYVOHKNp7oX6bth4mGfq3kwvtAagBKtMZwIhAJhbdcwlDG4%2BZmgd6qviWATRGJyFJAil%2FPffiPp6lr2BKv8DCF8QABoMNjM3NDIzMTgzODA1IgzvNumqQ66oCQ0MK14q3AOUcJBOb3PK%2FZEScjZBFWDQN0Y8pPmP05hud8bWExd161%2FC75cdIrOXMcyT%2Bnn3R%2Fll8pSXNa2aXFmCYttpEac5zWjcQcTNq5GDRV9IrAwgpmqOUo8jUdje3fXy1FY8Oi%2FD%2FwgmaRZVdrxa75vsBxhDZag81SBupMBtpETcJd5bxnthtGWZEZsVoUSaN6Y9NutmIwobdpvGZbnN8WqWCR7oExNWf8y8HiQkZDL9IdE%2BDsEyJ7ZI%2BJbbrge8lCXRe1yGCCJ9NuT%2FLqdlwS8ShIDxV39Q%2F23beirbgJBJVD1I5IvnOQKp1p%2FJhFMl0OCqjP%2B%2F2%2BHbt7VJeZQiLFTieOxntcLjxX%2BaBSO5qlHpOqibnRaKw20hG%2Bz5coMebMDF%2FbJksyIcSqYZ6bss8iPci9QUEGx9otzBT%2FgRIfxpat4chz4Buz%2FYHkfX%2BZBFBQP7QjfJfl8A%2By2MEe%2FzbxaoV9ZadpV%2FTq6URBjO2%2FzFPHnJ9G7DXUUXs%2BoniYsaBRCS6ax%2FNHl4pzsizsXB33bXp%2FWhFIqXW9VhCEEhJNC7WMFRawrtWzxwMMm1Z1jtDuyfrJGBNQTkE0FC2YmH1w95%2B1LXO2uhphVGSKjoerTM1F8ec4UNbwtRlE3PB9r2HTDEm%2FXCBjqkAWGXNb0HBIMigfG5n4hYkfRXFRq1Lr8z1gah%2F3M0pwUGVlinCLKSp7shy%2BjZGqc1HzmwQwXJmTbAuuVghy3DAi9LRrbu9Ouho5HobzKoVsrZRUZJJkOh8wBCDL0ozfrrOIk1TTkCT1ctyOlLuvB7SGo6zs0P5KdkY3T8BMQpMO4o0d15Nzkn3QEWVDGX1NBGgq5fghJJXayIg1q%2BD%2BLD6nzTPUJ9&X-Amz-Signature=59e9cdbdd69cc52dd0710d68773e55a55f6945537d3074c6f21c14365620cc8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RWASQFS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCkrLecit9KNYVOHKNp7oX6bth4mGfq3kwvtAagBKtMZwIhAJhbdcwlDG4%2BZmgd6qviWATRGJyFJAil%2FPffiPp6lr2BKv8DCF8QABoMNjM3NDIzMTgzODA1IgzvNumqQ66oCQ0MK14q3AOUcJBOb3PK%2FZEScjZBFWDQN0Y8pPmP05hud8bWExd161%2FC75cdIrOXMcyT%2Bnn3R%2Fll8pSXNa2aXFmCYttpEac5zWjcQcTNq5GDRV9IrAwgpmqOUo8jUdje3fXy1FY8Oi%2FD%2FwgmaRZVdrxa75vsBxhDZag81SBupMBtpETcJd5bxnthtGWZEZsVoUSaN6Y9NutmIwobdpvGZbnN8WqWCR7oExNWf8y8HiQkZDL9IdE%2BDsEyJ7ZI%2BJbbrge8lCXRe1yGCCJ9NuT%2FLqdlwS8ShIDxV39Q%2F23beirbgJBJVD1I5IvnOQKp1p%2FJhFMl0OCqjP%2B%2F2%2BHbt7VJeZQiLFTieOxntcLjxX%2BaBSO5qlHpOqibnRaKw20hG%2Bz5coMebMDF%2FbJksyIcSqYZ6bss8iPci9QUEGx9otzBT%2FgRIfxpat4chz4Buz%2FYHkfX%2BZBFBQP7QjfJfl8A%2By2MEe%2FzbxaoV9ZadpV%2FTq6URBjO2%2FzFPHnJ9G7DXUUXs%2BoniYsaBRCS6ax%2FNHl4pzsizsXB33bXp%2FWhFIqXW9VhCEEhJNC7WMFRawrtWzxwMMm1Z1jtDuyfrJGBNQTkE0FC2YmH1w95%2B1LXO2uhphVGSKjoerTM1F8ec4UNbwtRlE3PB9r2HTDEm%2FXCBjqkAWGXNb0HBIMigfG5n4hYkfRXFRq1Lr8z1gah%2F3M0pwUGVlinCLKSp7shy%2BjZGqc1HzmwQwXJmTbAuuVghy3DAi9LRrbu9Ouho5HobzKoVsrZRUZJJkOh8wBCDL0ozfrrOIk1TTkCT1ctyOlLuvB7SGo6zs0P5KdkY3T8BMQpMO4o0d15Nzkn3QEWVDGX1NBGgq5fghJJXayIg1q%2BD%2BLD6nzTPUJ9&X-Amz-Signature=52381354bdf6ad98e2c4e957c605ee7385be7e5bdaf36e95866d20044f5d2bf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RWASQFS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCkrLecit9KNYVOHKNp7oX6bth4mGfq3kwvtAagBKtMZwIhAJhbdcwlDG4%2BZmgd6qviWATRGJyFJAil%2FPffiPp6lr2BKv8DCF8QABoMNjM3NDIzMTgzODA1IgzvNumqQ66oCQ0MK14q3AOUcJBOb3PK%2FZEScjZBFWDQN0Y8pPmP05hud8bWExd161%2FC75cdIrOXMcyT%2Bnn3R%2Fll8pSXNa2aXFmCYttpEac5zWjcQcTNq5GDRV9IrAwgpmqOUo8jUdje3fXy1FY8Oi%2FD%2FwgmaRZVdrxa75vsBxhDZag81SBupMBtpETcJd5bxnthtGWZEZsVoUSaN6Y9NutmIwobdpvGZbnN8WqWCR7oExNWf8y8HiQkZDL9IdE%2BDsEyJ7ZI%2BJbbrge8lCXRe1yGCCJ9NuT%2FLqdlwS8ShIDxV39Q%2F23beirbgJBJVD1I5IvnOQKp1p%2FJhFMl0OCqjP%2B%2F2%2BHbt7VJeZQiLFTieOxntcLjxX%2BaBSO5qlHpOqibnRaKw20hG%2Bz5coMebMDF%2FbJksyIcSqYZ6bss8iPci9QUEGx9otzBT%2FgRIfxpat4chz4Buz%2FYHkfX%2BZBFBQP7QjfJfl8A%2By2MEe%2FzbxaoV9ZadpV%2FTq6URBjO2%2FzFPHnJ9G7DXUUXs%2BoniYsaBRCS6ax%2FNHl4pzsizsXB33bXp%2FWhFIqXW9VhCEEhJNC7WMFRawrtWzxwMMm1Z1jtDuyfrJGBNQTkE0FC2YmH1w95%2B1LXO2uhphVGSKjoerTM1F8ec4UNbwtRlE3PB9r2HTDEm%2FXCBjqkAWGXNb0HBIMigfG5n4hYkfRXFRq1Lr8z1gah%2F3M0pwUGVlinCLKSp7shy%2BjZGqc1HzmwQwXJmTbAuuVghy3DAi9LRrbu9Ouho5HobzKoVsrZRUZJJkOh8wBCDL0ozfrrOIk1TTkCT1ctyOlLuvB7SGo6zs0P5KdkY3T8BMQpMO4o0d15Nzkn3QEWVDGX1NBGgq5fghJJXayIg1q%2BD%2BLD6nzTPUJ9&X-Amz-Signature=3a0be0e9265312db45d4e40589e77fabc148f5bdf7e076add14e1db442e3610b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RWASQFS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCkrLecit9KNYVOHKNp7oX6bth4mGfq3kwvtAagBKtMZwIhAJhbdcwlDG4%2BZmgd6qviWATRGJyFJAil%2FPffiPp6lr2BKv8DCF8QABoMNjM3NDIzMTgzODA1IgzvNumqQ66oCQ0MK14q3AOUcJBOb3PK%2FZEScjZBFWDQN0Y8pPmP05hud8bWExd161%2FC75cdIrOXMcyT%2Bnn3R%2Fll8pSXNa2aXFmCYttpEac5zWjcQcTNq5GDRV9IrAwgpmqOUo8jUdje3fXy1FY8Oi%2FD%2FwgmaRZVdrxa75vsBxhDZag81SBupMBtpETcJd5bxnthtGWZEZsVoUSaN6Y9NutmIwobdpvGZbnN8WqWCR7oExNWf8y8HiQkZDL9IdE%2BDsEyJ7ZI%2BJbbrge8lCXRe1yGCCJ9NuT%2FLqdlwS8ShIDxV39Q%2F23beirbgJBJVD1I5IvnOQKp1p%2FJhFMl0OCqjP%2B%2F2%2BHbt7VJeZQiLFTieOxntcLjxX%2BaBSO5qlHpOqibnRaKw20hG%2Bz5coMebMDF%2FbJksyIcSqYZ6bss8iPci9QUEGx9otzBT%2FgRIfxpat4chz4Buz%2FYHkfX%2BZBFBQP7QjfJfl8A%2By2MEe%2FzbxaoV9ZadpV%2FTq6URBjO2%2FzFPHnJ9G7DXUUXs%2BoniYsaBRCS6ax%2FNHl4pzsizsXB33bXp%2FWhFIqXW9VhCEEhJNC7WMFRawrtWzxwMMm1Z1jtDuyfrJGBNQTkE0FC2YmH1w95%2B1LXO2uhphVGSKjoerTM1F8ec4UNbwtRlE3PB9r2HTDEm%2FXCBjqkAWGXNb0HBIMigfG5n4hYkfRXFRq1Lr8z1gah%2F3M0pwUGVlinCLKSp7shy%2BjZGqc1HzmwQwXJmTbAuuVghy3DAi9LRrbu9Ouho5HobzKoVsrZRUZJJkOh8wBCDL0ozfrrOIk1TTkCT1ctyOlLuvB7SGo6zs0P5KdkY3T8BMQpMO4o0d15Nzkn3QEWVDGX1NBGgq5fghJJXayIg1q%2BD%2BLD6nzTPUJ9&X-Amz-Signature=79b46dc243abb89315af78b46fcc98d44d2a3a4e4883bb25f4133ebc77718943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RWASQFS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCkrLecit9KNYVOHKNp7oX6bth4mGfq3kwvtAagBKtMZwIhAJhbdcwlDG4%2BZmgd6qviWATRGJyFJAil%2FPffiPp6lr2BKv8DCF8QABoMNjM3NDIzMTgzODA1IgzvNumqQ66oCQ0MK14q3AOUcJBOb3PK%2FZEScjZBFWDQN0Y8pPmP05hud8bWExd161%2FC75cdIrOXMcyT%2Bnn3R%2Fll8pSXNa2aXFmCYttpEac5zWjcQcTNq5GDRV9IrAwgpmqOUo8jUdje3fXy1FY8Oi%2FD%2FwgmaRZVdrxa75vsBxhDZag81SBupMBtpETcJd5bxnthtGWZEZsVoUSaN6Y9NutmIwobdpvGZbnN8WqWCR7oExNWf8y8HiQkZDL9IdE%2BDsEyJ7ZI%2BJbbrge8lCXRe1yGCCJ9NuT%2FLqdlwS8ShIDxV39Q%2F23beirbgJBJVD1I5IvnOQKp1p%2FJhFMl0OCqjP%2B%2F2%2BHbt7VJeZQiLFTieOxntcLjxX%2BaBSO5qlHpOqibnRaKw20hG%2Bz5coMebMDF%2FbJksyIcSqYZ6bss8iPci9QUEGx9otzBT%2FgRIfxpat4chz4Buz%2FYHkfX%2BZBFBQP7QjfJfl8A%2By2MEe%2FzbxaoV9ZadpV%2FTq6URBjO2%2FzFPHnJ9G7DXUUXs%2BoniYsaBRCS6ax%2FNHl4pzsizsXB33bXp%2FWhFIqXW9VhCEEhJNC7WMFRawrtWzxwMMm1Z1jtDuyfrJGBNQTkE0FC2YmH1w95%2B1LXO2uhphVGSKjoerTM1F8ec4UNbwtRlE3PB9r2HTDEm%2FXCBjqkAWGXNb0HBIMigfG5n4hYkfRXFRq1Lr8z1gah%2F3M0pwUGVlinCLKSp7shy%2BjZGqc1HzmwQwXJmTbAuuVghy3DAi9LRrbu9Ouho5HobzKoVsrZRUZJJkOh8wBCDL0ozfrrOIk1TTkCT1ctyOlLuvB7SGo6zs0P5KdkY3T8BMQpMO4o0d15Nzkn3QEWVDGX1NBGgq5fghJJXayIg1q%2BD%2BLD6nzTPUJ9&X-Amz-Signature=04669066cc46d37221b813e5baacbb6e57d25894a532cb546d03c29c21f71c42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RWASQFS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCkrLecit9KNYVOHKNp7oX6bth4mGfq3kwvtAagBKtMZwIhAJhbdcwlDG4%2BZmgd6qviWATRGJyFJAil%2FPffiPp6lr2BKv8DCF8QABoMNjM3NDIzMTgzODA1IgzvNumqQ66oCQ0MK14q3AOUcJBOb3PK%2FZEScjZBFWDQN0Y8pPmP05hud8bWExd161%2FC75cdIrOXMcyT%2Bnn3R%2Fll8pSXNa2aXFmCYttpEac5zWjcQcTNq5GDRV9IrAwgpmqOUo8jUdje3fXy1FY8Oi%2FD%2FwgmaRZVdrxa75vsBxhDZag81SBupMBtpETcJd5bxnthtGWZEZsVoUSaN6Y9NutmIwobdpvGZbnN8WqWCR7oExNWf8y8HiQkZDL9IdE%2BDsEyJ7ZI%2BJbbrge8lCXRe1yGCCJ9NuT%2FLqdlwS8ShIDxV39Q%2F23beirbgJBJVD1I5IvnOQKp1p%2FJhFMl0OCqjP%2B%2F2%2BHbt7VJeZQiLFTieOxntcLjxX%2BaBSO5qlHpOqibnRaKw20hG%2Bz5coMebMDF%2FbJksyIcSqYZ6bss8iPci9QUEGx9otzBT%2FgRIfxpat4chz4Buz%2FYHkfX%2BZBFBQP7QjfJfl8A%2By2MEe%2FzbxaoV9ZadpV%2FTq6URBjO2%2FzFPHnJ9G7DXUUXs%2BoniYsaBRCS6ax%2FNHl4pzsizsXB33bXp%2FWhFIqXW9VhCEEhJNC7WMFRawrtWzxwMMm1Z1jtDuyfrJGBNQTkE0FC2YmH1w95%2B1LXO2uhphVGSKjoerTM1F8ec4UNbwtRlE3PB9r2HTDEm%2FXCBjqkAWGXNb0HBIMigfG5n4hYkfRXFRq1Lr8z1gah%2F3M0pwUGVlinCLKSp7shy%2BjZGqc1HzmwQwXJmTbAuuVghy3DAi9LRrbu9Ouho5HobzKoVsrZRUZJJkOh8wBCDL0ozfrrOIk1TTkCT1ctyOlLuvB7SGo6zs0P5KdkY3T8BMQpMO4o0d15Nzkn3QEWVDGX1NBGgq5fghJJXayIg1q%2BD%2BLD6nzTPUJ9&X-Amz-Signature=5d6b81b7938639e0a44f3db567e54de05abb365a286258adf540ac6a4053b483&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RWASQFS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCkrLecit9KNYVOHKNp7oX6bth4mGfq3kwvtAagBKtMZwIhAJhbdcwlDG4%2BZmgd6qviWATRGJyFJAil%2FPffiPp6lr2BKv8DCF8QABoMNjM3NDIzMTgzODA1IgzvNumqQ66oCQ0MK14q3AOUcJBOb3PK%2FZEScjZBFWDQN0Y8pPmP05hud8bWExd161%2FC75cdIrOXMcyT%2Bnn3R%2Fll8pSXNa2aXFmCYttpEac5zWjcQcTNq5GDRV9IrAwgpmqOUo8jUdje3fXy1FY8Oi%2FD%2FwgmaRZVdrxa75vsBxhDZag81SBupMBtpETcJd5bxnthtGWZEZsVoUSaN6Y9NutmIwobdpvGZbnN8WqWCR7oExNWf8y8HiQkZDL9IdE%2BDsEyJ7ZI%2BJbbrge8lCXRe1yGCCJ9NuT%2FLqdlwS8ShIDxV39Q%2F23beirbgJBJVD1I5IvnOQKp1p%2FJhFMl0OCqjP%2B%2F2%2BHbt7VJeZQiLFTieOxntcLjxX%2BaBSO5qlHpOqibnRaKw20hG%2Bz5coMebMDF%2FbJksyIcSqYZ6bss8iPci9QUEGx9otzBT%2FgRIfxpat4chz4Buz%2FYHkfX%2BZBFBQP7QjfJfl8A%2By2MEe%2FzbxaoV9ZadpV%2FTq6URBjO2%2FzFPHnJ9G7DXUUXs%2BoniYsaBRCS6ax%2FNHl4pzsizsXB33bXp%2FWhFIqXW9VhCEEhJNC7WMFRawrtWzxwMMm1Z1jtDuyfrJGBNQTkE0FC2YmH1w95%2B1LXO2uhphVGSKjoerTM1F8ec4UNbwtRlE3PB9r2HTDEm%2FXCBjqkAWGXNb0HBIMigfG5n4hYkfRXFRq1Lr8z1gah%2F3M0pwUGVlinCLKSp7shy%2BjZGqc1HzmwQwXJmTbAuuVghy3DAi9LRrbu9Ouho5HobzKoVsrZRUZJJkOh8wBCDL0ozfrrOIk1TTkCT1ctyOlLuvB7SGo6zs0P5KdkY3T8BMQpMO4o0d15Nzkn3QEWVDGX1NBGgq5fghJJXayIg1q%2BD%2BLD6nzTPUJ9&X-Amz-Signature=d57c56071136d003a87aab6fb445bf1d27da7ea2319e0a9a91a92b1292044ec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RWASQFS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCkrLecit9KNYVOHKNp7oX6bth4mGfq3kwvtAagBKtMZwIhAJhbdcwlDG4%2BZmgd6qviWATRGJyFJAil%2FPffiPp6lr2BKv8DCF8QABoMNjM3NDIzMTgzODA1IgzvNumqQ66oCQ0MK14q3AOUcJBOb3PK%2FZEScjZBFWDQN0Y8pPmP05hud8bWExd161%2FC75cdIrOXMcyT%2Bnn3R%2Fll8pSXNa2aXFmCYttpEac5zWjcQcTNq5GDRV9IrAwgpmqOUo8jUdje3fXy1FY8Oi%2FD%2FwgmaRZVdrxa75vsBxhDZag81SBupMBtpETcJd5bxnthtGWZEZsVoUSaN6Y9NutmIwobdpvGZbnN8WqWCR7oExNWf8y8HiQkZDL9IdE%2BDsEyJ7ZI%2BJbbrge8lCXRe1yGCCJ9NuT%2FLqdlwS8ShIDxV39Q%2F23beirbgJBJVD1I5IvnOQKp1p%2FJhFMl0OCqjP%2B%2F2%2BHbt7VJeZQiLFTieOxntcLjxX%2BaBSO5qlHpOqibnRaKw20hG%2Bz5coMebMDF%2FbJksyIcSqYZ6bss8iPci9QUEGx9otzBT%2FgRIfxpat4chz4Buz%2FYHkfX%2BZBFBQP7QjfJfl8A%2By2MEe%2FzbxaoV9ZadpV%2FTq6URBjO2%2FzFPHnJ9G7DXUUXs%2BoniYsaBRCS6ax%2FNHl4pzsizsXB33bXp%2FWhFIqXW9VhCEEhJNC7WMFRawrtWzxwMMm1Z1jtDuyfrJGBNQTkE0FC2YmH1w95%2B1LXO2uhphVGSKjoerTM1F8ec4UNbwtRlE3PB9r2HTDEm%2FXCBjqkAWGXNb0HBIMigfG5n4hYkfRXFRq1Lr8z1gah%2F3M0pwUGVlinCLKSp7shy%2BjZGqc1HzmwQwXJmTbAuuVghy3DAi9LRrbu9Ouho5HobzKoVsrZRUZJJkOh8wBCDL0ozfrrOIk1TTkCT1ctyOlLuvB7SGo6zs0P5KdkY3T8BMQpMO4o0d15Nzkn3QEWVDGX1NBGgq5fghJJXayIg1q%2BD%2BLD6nzTPUJ9&X-Amz-Signature=045d3e407a90febcff1a6f880bab404716b007f48d21bf872d0b0d0e18606794&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
