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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FOARD7F%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T041019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKjrOmdjMzZkQkX1smgFeLU9htr%2FI7gniZtDXUEh%2FMfQIgIpoaI8tLqhk3PXtSx3NiTWxOQziwvxhS4uFzDUZc5mgq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDFmynDDu2DJ41xug1ircA4Va0CITi9WwAkW%2B3lKMZG4ikhTuatF6Ydjcoy8JJ4FGtml%2FvOgtL1qRJSTFDoqlVF6OSasDAkATZPYuAH153SsfIMNTyP9PnErrvsftzXEcW4wDF0Ja1eIY91ytox3AQodSic50l8KWKPh5qEIb2p5qddggeOUdKNi7JOtStaaSMmtVIrI4jZCrdoOh4g14hqFHzMVZkZJZAxwmimKJYGdRq650R918D%2FkHON2AJdALJK73Lg9wC9oR98yXT4WQ7n3JeuolmLBkSsExaUltDuD2Hn5J9vMmIcJM5RSB4cVfCE0XjJxbk%2BQZd1dqiCsL8lGjhiFMBqvR2H%2Fr52tR%2BRKFWWqpJihT%2FG5hmRBwOvlKacgud803rHMx%2FuB7OIs7XLvEiCYJ6Og9qsjQoCmc3xFyM3pFiLY1hsP1GUeTlQLZdQge4pI5ELGEp1OIN9q8AWVajGoC6DhImwfXgOZIQY4vdSxXv542bfCst%2B8f1ovxJwz69p28ubhScR7o6mme9varBgRT2%2BLHYAqyFleo1lj%2Bz0Q3ChO8rgRNYba%2BLa%2Bpizb6m8de0egF%2FrpoDQS1JCDizKRFv9SMCUZ%2FELmSvNtqwX9clGhLGQt%2BDJF2RivsrdWBjHyzFDUJQBodMLe5pL4GOqUBuMeHp%2Ffs1wKTUSEu3L8CUOQQ6I5CnNAt7pmpW90bZF1oMyE70TiKDdbEJQsewWwOASYaGfB%2BiGhZPogWb%2FhtpbSdc4MQKap5yQLto%2BYlYnK1faA3lq%2F38jH7lEGKpiarv7iItAt2oKOuYAuagzRcabK4tET0aTB7pQK6aNKcbfFsGDGF1h8l0zvarB3uVeWJpwgZFez%2F8dKHyoGMliBJLTKzpUYc&X-Amz-Signature=d2b22af00b27bc93f53dbad9d68b5dc2b289ddeba0a43962c90598c4652b546b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FOARD7F%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T041019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKjrOmdjMzZkQkX1smgFeLU9htr%2FI7gniZtDXUEh%2FMfQIgIpoaI8tLqhk3PXtSx3NiTWxOQziwvxhS4uFzDUZc5mgq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDFmynDDu2DJ41xug1ircA4Va0CITi9WwAkW%2B3lKMZG4ikhTuatF6Ydjcoy8JJ4FGtml%2FvOgtL1qRJSTFDoqlVF6OSasDAkATZPYuAH153SsfIMNTyP9PnErrvsftzXEcW4wDF0Ja1eIY91ytox3AQodSic50l8KWKPh5qEIb2p5qddggeOUdKNi7JOtStaaSMmtVIrI4jZCrdoOh4g14hqFHzMVZkZJZAxwmimKJYGdRq650R918D%2FkHON2AJdALJK73Lg9wC9oR98yXT4WQ7n3JeuolmLBkSsExaUltDuD2Hn5J9vMmIcJM5RSB4cVfCE0XjJxbk%2BQZd1dqiCsL8lGjhiFMBqvR2H%2Fr52tR%2BRKFWWqpJihT%2FG5hmRBwOvlKacgud803rHMx%2FuB7OIs7XLvEiCYJ6Og9qsjQoCmc3xFyM3pFiLY1hsP1GUeTlQLZdQge4pI5ELGEp1OIN9q8AWVajGoC6DhImwfXgOZIQY4vdSxXv542bfCst%2B8f1ovxJwz69p28ubhScR7o6mme9varBgRT2%2BLHYAqyFleo1lj%2Bz0Q3ChO8rgRNYba%2BLa%2Bpizb6m8de0egF%2FrpoDQS1JCDizKRFv9SMCUZ%2FELmSvNtqwX9clGhLGQt%2BDJF2RivsrdWBjHyzFDUJQBodMLe5pL4GOqUBuMeHp%2Ffs1wKTUSEu3L8CUOQQ6I5CnNAt7pmpW90bZF1oMyE70TiKDdbEJQsewWwOASYaGfB%2BiGhZPogWb%2FhtpbSdc4MQKap5yQLto%2BYlYnK1faA3lq%2F38jH7lEGKpiarv7iItAt2oKOuYAuagzRcabK4tET0aTB7pQK6aNKcbfFsGDGF1h8l0zvarB3uVeWJpwgZFez%2F8dKHyoGMliBJLTKzpUYc&X-Amz-Signature=40f11e341e309063664c1e46300921d0f383b37928768551be35092e1bd2bb72&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FOARD7F%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T041019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKjrOmdjMzZkQkX1smgFeLU9htr%2FI7gniZtDXUEh%2FMfQIgIpoaI8tLqhk3PXtSx3NiTWxOQziwvxhS4uFzDUZc5mgq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDFmynDDu2DJ41xug1ircA4Va0CITi9WwAkW%2B3lKMZG4ikhTuatF6Ydjcoy8JJ4FGtml%2FvOgtL1qRJSTFDoqlVF6OSasDAkATZPYuAH153SsfIMNTyP9PnErrvsftzXEcW4wDF0Ja1eIY91ytox3AQodSic50l8KWKPh5qEIb2p5qddggeOUdKNi7JOtStaaSMmtVIrI4jZCrdoOh4g14hqFHzMVZkZJZAxwmimKJYGdRq650R918D%2FkHON2AJdALJK73Lg9wC9oR98yXT4WQ7n3JeuolmLBkSsExaUltDuD2Hn5J9vMmIcJM5RSB4cVfCE0XjJxbk%2BQZd1dqiCsL8lGjhiFMBqvR2H%2Fr52tR%2BRKFWWqpJihT%2FG5hmRBwOvlKacgud803rHMx%2FuB7OIs7XLvEiCYJ6Og9qsjQoCmc3xFyM3pFiLY1hsP1GUeTlQLZdQge4pI5ELGEp1OIN9q8AWVajGoC6DhImwfXgOZIQY4vdSxXv542bfCst%2B8f1ovxJwz69p28ubhScR7o6mme9varBgRT2%2BLHYAqyFleo1lj%2Bz0Q3ChO8rgRNYba%2BLa%2Bpizb6m8de0egF%2FrpoDQS1JCDizKRFv9SMCUZ%2FELmSvNtqwX9clGhLGQt%2BDJF2RivsrdWBjHyzFDUJQBodMLe5pL4GOqUBuMeHp%2Ffs1wKTUSEu3L8CUOQQ6I5CnNAt7pmpW90bZF1oMyE70TiKDdbEJQsewWwOASYaGfB%2BiGhZPogWb%2FhtpbSdc4MQKap5yQLto%2BYlYnK1faA3lq%2F38jH7lEGKpiarv7iItAt2oKOuYAuagzRcabK4tET0aTB7pQK6aNKcbfFsGDGF1h8l0zvarB3uVeWJpwgZFez%2F8dKHyoGMliBJLTKzpUYc&X-Amz-Signature=9da1ed8fd8557d48ed5b7917529844d3f8cc2039a786725c9ae606aa352a0ac0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FOARD7F%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T041019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKjrOmdjMzZkQkX1smgFeLU9htr%2FI7gniZtDXUEh%2FMfQIgIpoaI8tLqhk3PXtSx3NiTWxOQziwvxhS4uFzDUZc5mgq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDFmynDDu2DJ41xug1ircA4Va0CITi9WwAkW%2B3lKMZG4ikhTuatF6Ydjcoy8JJ4FGtml%2FvOgtL1qRJSTFDoqlVF6OSasDAkATZPYuAH153SsfIMNTyP9PnErrvsftzXEcW4wDF0Ja1eIY91ytox3AQodSic50l8KWKPh5qEIb2p5qddggeOUdKNi7JOtStaaSMmtVIrI4jZCrdoOh4g14hqFHzMVZkZJZAxwmimKJYGdRq650R918D%2FkHON2AJdALJK73Lg9wC9oR98yXT4WQ7n3JeuolmLBkSsExaUltDuD2Hn5J9vMmIcJM5RSB4cVfCE0XjJxbk%2BQZd1dqiCsL8lGjhiFMBqvR2H%2Fr52tR%2BRKFWWqpJihT%2FG5hmRBwOvlKacgud803rHMx%2FuB7OIs7XLvEiCYJ6Og9qsjQoCmc3xFyM3pFiLY1hsP1GUeTlQLZdQge4pI5ELGEp1OIN9q8AWVajGoC6DhImwfXgOZIQY4vdSxXv542bfCst%2B8f1ovxJwz69p28ubhScR7o6mme9varBgRT2%2BLHYAqyFleo1lj%2Bz0Q3ChO8rgRNYba%2BLa%2Bpizb6m8de0egF%2FrpoDQS1JCDizKRFv9SMCUZ%2FELmSvNtqwX9clGhLGQt%2BDJF2RivsrdWBjHyzFDUJQBodMLe5pL4GOqUBuMeHp%2Ffs1wKTUSEu3L8CUOQQ6I5CnNAt7pmpW90bZF1oMyE70TiKDdbEJQsewWwOASYaGfB%2BiGhZPogWb%2FhtpbSdc4MQKap5yQLto%2BYlYnK1faA3lq%2F38jH7lEGKpiarv7iItAt2oKOuYAuagzRcabK4tET0aTB7pQK6aNKcbfFsGDGF1h8l0zvarB3uVeWJpwgZFez%2F8dKHyoGMliBJLTKzpUYc&X-Amz-Signature=74b9820c4f47a0e4eedc19ef130ff7d20f3249b126efa9264e7d16d945d2fa20&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FOARD7F%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T041019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKjrOmdjMzZkQkX1smgFeLU9htr%2FI7gniZtDXUEh%2FMfQIgIpoaI8tLqhk3PXtSx3NiTWxOQziwvxhS4uFzDUZc5mgq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDFmynDDu2DJ41xug1ircA4Va0CITi9WwAkW%2B3lKMZG4ikhTuatF6Ydjcoy8JJ4FGtml%2FvOgtL1qRJSTFDoqlVF6OSasDAkATZPYuAH153SsfIMNTyP9PnErrvsftzXEcW4wDF0Ja1eIY91ytox3AQodSic50l8KWKPh5qEIb2p5qddggeOUdKNi7JOtStaaSMmtVIrI4jZCrdoOh4g14hqFHzMVZkZJZAxwmimKJYGdRq650R918D%2FkHON2AJdALJK73Lg9wC9oR98yXT4WQ7n3JeuolmLBkSsExaUltDuD2Hn5J9vMmIcJM5RSB4cVfCE0XjJxbk%2BQZd1dqiCsL8lGjhiFMBqvR2H%2Fr52tR%2BRKFWWqpJihT%2FG5hmRBwOvlKacgud803rHMx%2FuB7OIs7XLvEiCYJ6Og9qsjQoCmc3xFyM3pFiLY1hsP1GUeTlQLZdQge4pI5ELGEp1OIN9q8AWVajGoC6DhImwfXgOZIQY4vdSxXv542bfCst%2B8f1ovxJwz69p28ubhScR7o6mme9varBgRT2%2BLHYAqyFleo1lj%2Bz0Q3ChO8rgRNYba%2BLa%2Bpizb6m8de0egF%2FrpoDQS1JCDizKRFv9SMCUZ%2FELmSvNtqwX9clGhLGQt%2BDJF2RivsrdWBjHyzFDUJQBodMLe5pL4GOqUBuMeHp%2Ffs1wKTUSEu3L8CUOQQ6I5CnNAt7pmpW90bZF1oMyE70TiKDdbEJQsewWwOASYaGfB%2BiGhZPogWb%2FhtpbSdc4MQKap5yQLto%2BYlYnK1faA3lq%2F38jH7lEGKpiarv7iItAt2oKOuYAuagzRcabK4tET0aTB7pQK6aNKcbfFsGDGF1h8l0zvarB3uVeWJpwgZFez%2F8dKHyoGMliBJLTKzpUYc&X-Amz-Signature=3d26cfb601e06f24c1d215f94f66fb56217723b3db68fec6536f9c0ad584b539&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FOARD7F%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T041019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKjrOmdjMzZkQkX1smgFeLU9htr%2FI7gniZtDXUEh%2FMfQIgIpoaI8tLqhk3PXtSx3NiTWxOQziwvxhS4uFzDUZc5mgq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDFmynDDu2DJ41xug1ircA4Va0CITi9WwAkW%2B3lKMZG4ikhTuatF6Ydjcoy8JJ4FGtml%2FvOgtL1qRJSTFDoqlVF6OSasDAkATZPYuAH153SsfIMNTyP9PnErrvsftzXEcW4wDF0Ja1eIY91ytox3AQodSic50l8KWKPh5qEIb2p5qddggeOUdKNi7JOtStaaSMmtVIrI4jZCrdoOh4g14hqFHzMVZkZJZAxwmimKJYGdRq650R918D%2FkHON2AJdALJK73Lg9wC9oR98yXT4WQ7n3JeuolmLBkSsExaUltDuD2Hn5J9vMmIcJM5RSB4cVfCE0XjJxbk%2BQZd1dqiCsL8lGjhiFMBqvR2H%2Fr52tR%2BRKFWWqpJihT%2FG5hmRBwOvlKacgud803rHMx%2FuB7OIs7XLvEiCYJ6Og9qsjQoCmc3xFyM3pFiLY1hsP1GUeTlQLZdQge4pI5ELGEp1OIN9q8AWVajGoC6DhImwfXgOZIQY4vdSxXv542bfCst%2B8f1ovxJwz69p28ubhScR7o6mme9varBgRT2%2BLHYAqyFleo1lj%2Bz0Q3ChO8rgRNYba%2BLa%2Bpizb6m8de0egF%2FrpoDQS1JCDizKRFv9SMCUZ%2FELmSvNtqwX9clGhLGQt%2BDJF2RivsrdWBjHyzFDUJQBodMLe5pL4GOqUBuMeHp%2Ffs1wKTUSEu3L8CUOQQ6I5CnNAt7pmpW90bZF1oMyE70TiKDdbEJQsewWwOASYaGfB%2BiGhZPogWb%2FhtpbSdc4MQKap5yQLto%2BYlYnK1faA3lq%2F38jH7lEGKpiarv7iItAt2oKOuYAuagzRcabK4tET0aTB7pQK6aNKcbfFsGDGF1h8l0zvarB3uVeWJpwgZFez%2F8dKHyoGMliBJLTKzpUYc&X-Amz-Signature=fcbaf26d0fc93240231446e0d903beb08db3e5a17e5628704c1f3484794ac87b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FOARD7F%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T041019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKjrOmdjMzZkQkX1smgFeLU9htr%2FI7gniZtDXUEh%2FMfQIgIpoaI8tLqhk3PXtSx3NiTWxOQziwvxhS4uFzDUZc5mgq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDFmynDDu2DJ41xug1ircA4Va0CITi9WwAkW%2B3lKMZG4ikhTuatF6Ydjcoy8JJ4FGtml%2FvOgtL1qRJSTFDoqlVF6OSasDAkATZPYuAH153SsfIMNTyP9PnErrvsftzXEcW4wDF0Ja1eIY91ytox3AQodSic50l8KWKPh5qEIb2p5qddggeOUdKNi7JOtStaaSMmtVIrI4jZCrdoOh4g14hqFHzMVZkZJZAxwmimKJYGdRq650R918D%2FkHON2AJdALJK73Lg9wC9oR98yXT4WQ7n3JeuolmLBkSsExaUltDuD2Hn5J9vMmIcJM5RSB4cVfCE0XjJxbk%2BQZd1dqiCsL8lGjhiFMBqvR2H%2Fr52tR%2BRKFWWqpJihT%2FG5hmRBwOvlKacgud803rHMx%2FuB7OIs7XLvEiCYJ6Og9qsjQoCmc3xFyM3pFiLY1hsP1GUeTlQLZdQge4pI5ELGEp1OIN9q8AWVajGoC6DhImwfXgOZIQY4vdSxXv542bfCst%2B8f1ovxJwz69p28ubhScR7o6mme9varBgRT2%2BLHYAqyFleo1lj%2Bz0Q3ChO8rgRNYba%2BLa%2Bpizb6m8de0egF%2FrpoDQS1JCDizKRFv9SMCUZ%2FELmSvNtqwX9clGhLGQt%2BDJF2RivsrdWBjHyzFDUJQBodMLe5pL4GOqUBuMeHp%2Ffs1wKTUSEu3L8CUOQQ6I5CnNAt7pmpW90bZF1oMyE70TiKDdbEJQsewWwOASYaGfB%2BiGhZPogWb%2FhtpbSdc4MQKap5yQLto%2BYlYnK1faA3lq%2F38jH7lEGKpiarv7iItAt2oKOuYAuagzRcabK4tET0aTB7pQK6aNKcbfFsGDGF1h8l0zvarB3uVeWJpwgZFez%2F8dKHyoGMliBJLTKzpUYc&X-Amz-Signature=e771891ac5ea67b3b7897612f6e6d1eb14e2ece2c7ddf6d7539d15bd004b9ee5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FOARD7F%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T041019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKjrOmdjMzZkQkX1smgFeLU9htr%2FI7gniZtDXUEh%2FMfQIgIpoaI8tLqhk3PXtSx3NiTWxOQziwvxhS4uFzDUZc5mgq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDFmynDDu2DJ41xug1ircA4Va0CITi9WwAkW%2B3lKMZG4ikhTuatF6Ydjcoy8JJ4FGtml%2FvOgtL1qRJSTFDoqlVF6OSasDAkATZPYuAH153SsfIMNTyP9PnErrvsftzXEcW4wDF0Ja1eIY91ytox3AQodSic50l8KWKPh5qEIb2p5qddggeOUdKNi7JOtStaaSMmtVIrI4jZCrdoOh4g14hqFHzMVZkZJZAxwmimKJYGdRq650R918D%2FkHON2AJdALJK73Lg9wC9oR98yXT4WQ7n3JeuolmLBkSsExaUltDuD2Hn5J9vMmIcJM5RSB4cVfCE0XjJxbk%2BQZd1dqiCsL8lGjhiFMBqvR2H%2Fr52tR%2BRKFWWqpJihT%2FG5hmRBwOvlKacgud803rHMx%2FuB7OIs7XLvEiCYJ6Og9qsjQoCmc3xFyM3pFiLY1hsP1GUeTlQLZdQge4pI5ELGEp1OIN9q8AWVajGoC6DhImwfXgOZIQY4vdSxXv542bfCst%2B8f1ovxJwz69p28ubhScR7o6mme9varBgRT2%2BLHYAqyFleo1lj%2Bz0Q3ChO8rgRNYba%2BLa%2Bpizb6m8de0egF%2FrpoDQS1JCDizKRFv9SMCUZ%2FELmSvNtqwX9clGhLGQt%2BDJF2RivsrdWBjHyzFDUJQBodMLe5pL4GOqUBuMeHp%2Ffs1wKTUSEu3L8CUOQQ6I5CnNAt7pmpW90bZF1oMyE70TiKDdbEJQsewWwOASYaGfB%2BiGhZPogWb%2FhtpbSdc4MQKap5yQLto%2BYlYnK1faA3lq%2F38jH7lEGKpiarv7iItAt2oKOuYAuagzRcabK4tET0aTB7pQK6aNKcbfFsGDGF1h8l0zvarB3uVeWJpwgZFez%2F8dKHyoGMliBJLTKzpUYc&X-Amz-Signature=d8fff140472d02d06ade09d3801912de24ffc09bf553b05ae513c2c1aa102e3f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
