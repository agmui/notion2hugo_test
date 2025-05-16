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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GIISXCF%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNH6O%2B0QxGgZmUn%2Fcg8nulR30W%2ByiD05TFgT6LtDfF5AiBCCI%2FDSjz7HoUFv97fw2U6PrZhdkZCICQ6SCG6W34BOyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMfvxtgUbBi3le4jS6KtwDrCjFvKtAII7KP8%2BH3%2FfGtoVKI1%2Fx4z2PJCqVPJpGaHWadAtWFKePNPvBnDc2FqwJJ4d%2FcCawaM%2F%2F6bZeOjLxVdBuj8IreOFq07NTv86m3Frx5bYuoqtxp00Co81wLJ5dFb3xaxsyqY%2B2X5z6N90f%2B91OHNW8SjFOLtsdml934zM6QS1TLQRvgyOx9gSNVzcxWEmnwJ0CeFyDr7sn39WnZbOcsMj%2FEk7BjVnzHOJQLs2mgFkNbrActHG4jLDbQKIbgO0GQ7PYyME3FcWVieTmi48wOEqIDjfGXxXVfY215jn%2BDHZbLpEIn6sSZV07HjJokf%2FGFF9SvPpla7%2FatH%2FEKutNa%2FhU1KXhwTaK%2FHlzp%2B8yzNjW4P48U9bCgiE91NZXDPo91Lom0Ov3ipjeSw3yBcQJb6cnq5dedjgijEL%2BSudTgzE6hIx8kj51MXSFt20jilgm0HDLvChb7ya5MT6D1aSNC7Au269y2oxiRg7JId0oDEH7k4r0XHfTOB5aYlrSCWJhjT%2Bcf%2BcdoNc3L1sp5srx0QCjgN%2Bz0lNnpIzVESshqnEzRw7aiCrlfugtg4LPp%2FU%2FqoKWarzYIYseyOf24w6zbVCi4JKHyv%2FtISqhe%2FonsC9B8RSRpIwEd1cwxvWdwQY6pgE1DkhfeyKZ7KPvxDPiPv9Q44xyqqN0bjyHczgA%2BVLm7hBk6r6%2BAGTIHYYoVzXlTtz257F6pAjW4ZuE8RW2QgeIJV1WPnDOV%2FmJLqlSdKpkVZRecK5wZ%2FSgMN6AiCpA0UyTn%2FZFhqcAU0kLxnhyVWp%2FXm5pukYRoO73ciIO3DsWPaOXBl9A2pBs4rQRIT%2Bh0mdW4SPACcKOr5KRunETyvDKMO7X0QCs&X-Amz-Signature=e21625efcc4524fa9ec3e51f51d779f5e549b93eb4c5a062efc0a2ea9cb5d1c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GIISXCF%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNH6O%2B0QxGgZmUn%2Fcg8nulR30W%2ByiD05TFgT6LtDfF5AiBCCI%2FDSjz7HoUFv97fw2U6PrZhdkZCICQ6SCG6W34BOyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMfvxtgUbBi3le4jS6KtwDrCjFvKtAII7KP8%2BH3%2FfGtoVKI1%2Fx4z2PJCqVPJpGaHWadAtWFKePNPvBnDc2FqwJJ4d%2FcCawaM%2F%2F6bZeOjLxVdBuj8IreOFq07NTv86m3Frx5bYuoqtxp00Co81wLJ5dFb3xaxsyqY%2B2X5z6N90f%2B91OHNW8SjFOLtsdml934zM6QS1TLQRvgyOx9gSNVzcxWEmnwJ0CeFyDr7sn39WnZbOcsMj%2FEk7BjVnzHOJQLs2mgFkNbrActHG4jLDbQKIbgO0GQ7PYyME3FcWVieTmi48wOEqIDjfGXxXVfY215jn%2BDHZbLpEIn6sSZV07HjJokf%2FGFF9SvPpla7%2FatH%2FEKutNa%2FhU1KXhwTaK%2FHlzp%2B8yzNjW4P48U9bCgiE91NZXDPo91Lom0Ov3ipjeSw3yBcQJb6cnq5dedjgijEL%2BSudTgzE6hIx8kj51MXSFt20jilgm0HDLvChb7ya5MT6D1aSNC7Au269y2oxiRg7JId0oDEH7k4r0XHfTOB5aYlrSCWJhjT%2Bcf%2BcdoNc3L1sp5srx0QCjgN%2Bz0lNnpIzVESshqnEzRw7aiCrlfugtg4LPp%2FU%2FqoKWarzYIYseyOf24w6zbVCi4JKHyv%2FtISqhe%2FonsC9B8RSRpIwEd1cwxvWdwQY6pgE1DkhfeyKZ7KPvxDPiPv9Q44xyqqN0bjyHczgA%2BVLm7hBk6r6%2BAGTIHYYoVzXlTtz257F6pAjW4ZuE8RW2QgeIJV1WPnDOV%2FmJLqlSdKpkVZRecK5wZ%2FSgMN6AiCpA0UyTn%2FZFhqcAU0kLxnhyVWp%2FXm5pukYRoO73ciIO3DsWPaOXBl9A2pBs4rQRIT%2Bh0mdW4SPACcKOr5KRunETyvDKMO7X0QCs&X-Amz-Signature=5d8e9814b7453c9717e22b1107429f83ec8bf487ab06191a76ef6f9fb4ec1762&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GIISXCF%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNH6O%2B0QxGgZmUn%2Fcg8nulR30W%2ByiD05TFgT6LtDfF5AiBCCI%2FDSjz7HoUFv97fw2U6PrZhdkZCICQ6SCG6W34BOyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMfvxtgUbBi3le4jS6KtwDrCjFvKtAII7KP8%2BH3%2FfGtoVKI1%2Fx4z2PJCqVPJpGaHWadAtWFKePNPvBnDc2FqwJJ4d%2FcCawaM%2F%2F6bZeOjLxVdBuj8IreOFq07NTv86m3Frx5bYuoqtxp00Co81wLJ5dFb3xaxsyqY%2B2X5z6N90f%2B91OHNW8SjFOLtsdml934zM6QS1TLQRvgyOx9gSNVzcxWEmnwJ0CeFyDr7sn39WnZbOcsMj%2FEk7BjVnzHOJQLs2mgFkNbrActHG4jLDbQKIbgO0GQ7PYyME3FcWVieTmi48wOEqIDjfGXxXVfY215jn%2BDHZbLpEIn6sSZV07HjJokf%2FGFF9SvPpla7%2FatH%2FEKutNa%2FhU1KXhwTaK%2FHlzp%2B8yzNjW4P48U9bCgiE91NZXDPo91Lom0Ov3ipjeSw3yBcQJb6cnq5dedjgijEL%2BSudTgzE6hIx8kj51MXSFt20jilgm0HDLvChb7ya5MT6D1aSNC7Au269y2oxiRg7JId0oDEH7k4r0XHfTOB5aYlrSCWJhjT%2Bcf%2BcdoNc3L1sp5srx0QCjgN%2Bz0lNnpIzVESshqnEzRw7aiCrlfugtg4LPp%2FU%2FqoKWarzYIYseyOf24w6zbVCi4JKHyv%2FtISqhe%2FonsC9B8RSRpIwEd1cwxvWdwQY6pgE1DkhfeyKZ7KPvxDPiPv9Q44xyqqN0bjyHczgA%2BVLm7hBk6r6%2BAGTIHYYoVzXlTtz257F6pAjW4ZuE8RW2QgeIJV1WPnDOV%2FmJLqlSdKpkVZRecK5wZ%2FSgMN6AiCpA0UyTn%2FZFhqcAU0kLxnhyVWp%2FXm5pukYRoO73ciIO3DsWPaOXBl9A2pBs4rQRIT%2Bh0mdW4SPACcKOr5KRunETyvDKMO7X0QCs&X-Amz-Signature=d91d56d517d64d971d6d0764316e8e6ecec1649b3a515d177ab09e42a849528e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GIISXCF%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNH6O%2B0QxGgZmUn%2Fcg8nulR30W%2ByiD05TFgT6LtDfF5AiBCCI%2FDSjz7HoUFv97fw2U6PrZhdkZCICQ6SCG6W34BOyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMfvxtgUbBi3le4jS6KtwDrCjFvKtAII7KP8%2BH3%2FfGtoVKI1%2Fx4z2PJCqVPJpGaHWadAtWFKePNPvBnDc2FqwJJ4d%2FcCawaM%2F%2F6bZeOjLxVdBuj8IreOFq07NTv86m3Frx5bYuoqtxp00Co81wLJ5dFb3xaxsyqY%2B2X5z6N90f%2B91OHNW8SjFOLtsdml934zM6QS1TLQRvgyOx9gSNVzcxWEmnwJ0CeFyDr7sn39WnZbOcsMj%2FEk7BjVnzHOJQLs2mgFkNbrActHG4jLDbQKIbgO0GQ7PYyME3FcWVieTmi48wOEqIDjfGXxXVfY215jn%2BDHZbLpEIn6sSZV07HjJokf%2FGFF9SvPpla7%2FatH%2FEKutNa%2FhU1KXhwTaK%2FHlzp%2B8yzNjW4P48U9bCgiE91NZXDPo91Lom0Ov3ipjeSw3yBcQJb6cnq5dedjgijEL%2BSudTgzE6hIx8kj51MXSFt20jilgm0HDLvChb7ya5MT6D1aSNC7Au269y2oxiRg7JId0oDEH7k4r0XHfTOB5aYlrSCWJhjT%2Bcf%2BcdoNc3L1sp5srx0QCjgN%2Bz0lNnpIzVESshqnEzRw7aiCrlfugtg4LPp%2FU%2FqoKWarzYIYseyOf24w6zbVCi4JKHyv%2FtISqhe%2FonsC9B8RSRpIwEd1cwxvWdwQY6pgE1DkhfeyKZ7KPvxDPiPv9Q44xyqqN0bjyHczgA%2BVLm7hBk6r6%2BAGTIHYYoVzXlTtz257F6pAjW4ZuE8RW2QgeIJV1WPnDOV%2FmJLqlSdKpkVZRecK5wZ%2FSgMN6AiCpA0UyTn%2FZFhqcAU0kLxnhyVWp%2FXm5pukYRoO73ciIO3DsWPaOXBl9A2pBs4rQRIT%2Bh0mdW4SPACcKOr5KRunETyvDKMO7X0QCs&X-Amz-Signature=c697deb2e9da9775f3e4422115a16a34b2d5acba3b8c9f7dd7200bf70afdb23e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GIISXCF%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNH6O%2B0QxGgZmUn%2Fcg8nulR30W%2ByiD05TFgT6LtDfF5AiBCCI%2FDSjz7HoUFv97fw2U6PrZhdkZCICQ6SCG6W34BOyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMfvxtgUbBi3le4jS6KtwDrCjFvKtAII7KP8%2BH3%2FfGtoVKI1%2Fx4z2PJCqVPJpGaHWadAtWFKePNPvBnDc2FqwJJ4d%2FcCawaM%2F%2F6bZeOjLxVdBuj8IreOFq07NTv86m3Frx5bYuoqtxp00Co81wLJ5dFb3xaxsyqY%2B2X5z6N90f%2B91OHNW8SjFOLtsdml934zM6QS1TLQRvgyOx9gSNVzcxWEmnwJ0CeFyDr7sn39WnZbOcsMj%2FEk7BjVnzHOJQLs2mgFkNbrActHG4jLDbQKIbgO0GQ7PYyME3FcWVieTmi48wOEqIDjfGXxXVfY215jn%2BDHZbLpEIn6sSZV07HjJokf%2FGFF9SvPpla7%2FatH%2FEKutNa%2FhU1KXhwTaK%2FHlzp%2B8yzNjW4P48U9bCgiE91NZXDPo91Lom0Ov3ipjeSw3yBcQJb6cnq5dedjgijEL%2BSudTgzE6hIx8kj51MXSFt20jilgm0HDLvChb7ya5MT6D1aSNC7Au269y2oxiRg7JId0oDEH7k4r0XHfTOB5aYlrSCWJhjT%2Bcf%2BcdoNc3L1sp5srx0QCjgN%2Bz0lNnpIzVESshqnEzRw7aiCrlfugtg4LPp%2FU%2FqoKWarzYIYseyOf24w6zbVCi4JKHyv%2FtISqhe%2FonsC9B8RSRpIwEd1cwxvWdwQY6pgE1DkhfeyKZ7KPvxDPiPv9Q44xyqqN0bjyHczgA%2BVLm7hBk6r6%2BAGTIHYYoVzXlTtz257F6pAjW4ZuE8RW2QgeIJV1WPnDOV%2FmJLqlSdKpkVZRecK5wZ%2FSgMN6AiCpA0UyTn%2FZFhqcAU0kLxnhyVWp%2FXm5pukYRoO73ciIO3DsWPaOXBl9A2pBs4rQRIT%2Bh0mdW4SPACcKOr5KRunETyvDKMO7X0QCs&X-Amz-Signature=5984377277a3c70d6b74a3311261a4855460cecab57242a622b4cfea69665a65&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GIISXCF%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNH6O%2B0QxGgZmUn%2Fcg8nulR30W%2ByiD05TFgT6LtDfF5AiBCCI%2FDSjz7HoUFv97fw2U6PrZhdkZCICQ6SCG6W34BOyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMfvxtgUbBi3le4jS6KtwDrCjFvKtAII7KP8%2BH3%2FfGtoVKI1%2Fx4z2PJCqVPJpGaHWadAtWFKePNPvBnDc2FqwJJ4d%2FcCawaM%2F%2F6bZeOjLxVdBuj8IreOFq07NTv86m3Frx5bYuoqtxp00Co81wLJ5dFb3xaxsyqY%2B2X5z6N90f%2B91OHNW8SjFOLtsdml934zM6QS1TLQRvgyOx9gSNVzcxWEmnwJ0CeFyDr7sn39WnZbOcsMj%2FEk7BjVnzHOJQLs2mgFkNbrActHG4jLDbQKIbgO0GQ7PYyME3FcWVieTmi48wOEqIDjfGXxXVfY215jn%2BDHZbLpEIn6sSZV07HjJokf%2FGFF9SvPpla7%2FatH%2FEKutNa%2FhU1KXhwTaK%2FHlzp%2B8yzNjW4P48U9bCgiE91NZXDPo91Lom0Ov3ipjeSw3yBcQJb6cnq5dedjgijEL%2BSudTgzE6hIx8kj51MXSFt20jilgm0HDLvChb7ya5MT6D1aSNC7Au269y2oxiRg7JId0oDEH7k4r0XHfTOB5aYlrSCWJhjT%2Bcf%2BcdoNc3L1sp5srx0QCjgN%2Bz0lNnpIzVESshqnEzRw7aiCrlfugtg4LPp%2FU%2FqoKWarzYIYseyOf24w6zbVCi4JKHyv%2FtISqhe%2FonsC9B8RSRpIwEd1cwxvWdwQY6pgE1DkhfeyKZ7KPvxDPiPv9Q44xyqqN0bjyHczgA%2BVLm7hBk6r6%2BAGTIHYYoVzXlTtz257F6pAjW4ZuE8RW2QgeIJV1WPnDOV%2FmJLqlSdKpkVZRecK5wZ%2FSgMN6AiCpA0UyTn%2FZFhqcAU0kLxnhyVWp%2FXm5pukYRoO73ciIO3DsWPaOXBl9A2pBs4rQRIT%2Bh0mdW4SPACcKOr5KRunETyvDKMO7X0QCs&X-Amz-Signature=6e7bf9a39e2dbc781cc840cdc7a13ea6ae1bac0d72e52a138b780c1b30e5f84c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GIISXCF%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNH6O%2B0QxGgZmUn%2Fcg8nulR30W%2ByiD05TFgT6LtDfF5AiBCCI%2FDSjz7HoUFv97fw2U6PrZhdkZCICQ6SCG6W34BOyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMfvxtgUbBi3le4jS6KtwDrCjFvKtAII7KP8%2BH3%2FfGtoVKI1%2Fx4z2PJCqVPJpGaHWadAtWFKePNPvBnDc2FqwJJ4d%2FcCawaM%2F%2F6bZeOjLxVdBuj8IreOFq07NTv86m3Frx5bYuoqtxp00Co81wLJ5dFb3xaxsyqY%2B2X5z6N90f%2B91OHNW8SjFOLtsdml934zM6QS1TLQRvgyOx9gSNVzcxWEmnwJ0CeFyDr7sn39WnZbOcsMj%2FEk7BjVnzHOJQLs2mgFkNbrActHG4jLDbQKIbgO0GQ7PYyME3FcWVieTmi48wOEqIDjfGXxXVfY215jn%2BDHZbLpEIn6sSZV07HjJokf%2FGFF9SvPpla7%2FatH%2FEKutNa%2FhU1KXhwTaK%2FHlzp%2B8yzNjW4P48U9bCgiE91NZXDPo91Lom0Ov3ipjeSw3yBcQJb6cnq5dedjgijEL%2BSudTgzE6hIx8kj51MXSFt20jilgm0HDLvChb7ya5MT6D1aSNC7Au269y2oxiRg7JId0oDEH7k4r0XHfTOB5aYlrSCWJhjT%2Bcf%2BcdoNc3L1sp5srx0QCjgN%2Bz0lNnpIzVESshqnEzRw7aiCrlfugtg4LPp%2FU%2FqoKWarzYIYseyOf24w6zbVCi4JKHyv%2FtISqhe%2FonsC9B8RSRpIwEd1cwxvWdwQY6pgE1DkhfeyKZ7KPvxDPiPv9Q44xyqqN0bjyHczgA%2BVLm7hBk6r6%2BAGTIHYYoVzXlTtz257F6pAjW4ZuE8RW2QgeIJV1WPnDOV%2FmJLqlSdKpkVZRecK5wZ%2FSgMN6AiCpA0UyTn%2FZFhqcAU0kLxnhyVWp%2FXm5pukYRoO73ciIO3DsWPaOXBl9A2pBs4rQRIT%2Bh0mdW4SPACcKOr5KRunETyvDKMO7X0QCs&X-Amz-Signature=58a4a5d3702933f891e6a35c8209baa24d085f4a20f983b7bd208d07c23936d7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GIISXCF%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNH6O%2B0QxGgZmUn%2Fcg8nulR30W%2ByiD05TFgT6LtDfF5AiBCCI%2FDSjz7HoUFv97fw2U6PrZhdkZCICQ6SCG6W34BOyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMfvxtgUbBi3le4jS6KtwDrCjFvKtAII7KP8%2BH3%2FfGtoVKI1%2Fx4z2PJCqVPJpGaHWadAtWFKePNPvBnDc2FqwJJ4d%2FcCawaM%2F%2F6bZeOjLxVdBuj8IreOFq07NTv86m3Frx5bYuoqtxp00Co81wLJ5dFb3xaxsyqY%2B2X5z6N90f%2B91OHNW8SjFOLtsdml934zM6QS1TLQRvgyOx9gSNVzcxWEmnwJ0CeFyDr7sn39WnZbOcsMj%2FEk7BjVnzHOJQLs2mgFkNbrActHG4jLDbQKIbgO0GQ7PYyME3FcWVieTmi48wOEqIDjfGXxXVfY215jn%2BDHZbLpEIn6sSZV07HjJokf%2FGFF9SvPpla7%2FatH%2FEKutNa%2FhU1KXhwTaK%2FHlzp%2B8yzNjW4P48U9bCgiE91NZXDPo91Lom0Ov3ipjeSw3yBcQJb6cnq5dedjgijEL%2BSudTgzE6hIx8kj51MXSFt20jilgm0HDLvChb7ya5MT6D1aSNC7Au269y2oxiRg7JId0oDEH7k4r0XHfTOB5aYlrSCWJhjT%2Bcf%2BcdoNc3L1sp5srx0QCjgN%2Bz0lNnpIzVESshqnEzRw7aiCrlfugtg4LPp%2FU%2FqoKWarzYIYseyOf24w6zbVCi4JKHyv%2FtISqhe%2FonsC9B8RSRpIwEd1cwxvWdwQY6pgE1DkhfeyKZ7KPvxDPiPv9Q44xyqqN0bjyHczgA%2BVLm7hBk6r6%2BAGTIHYYoVzXlTtz257F6pAjW4ZuE8RW2QgeIJV1WPnDOV%2FmJLqlSdKpkVZRecK5wZ%2FSgMN6AiCpA0UyTn%2FZFhqcAU0kLxnhyVWp%2FXm5pukYRoO73ciIO3DsWPaOXBl9A2pBs4rQRIT%2Bh0mdW4SPACcKOr5KRunETyvDKMO7X0QCs&X-Amz-Signature=795824c21862feef2e17dd18595481be4055f9f7d9c3783c03bbad8c8a0d518e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
