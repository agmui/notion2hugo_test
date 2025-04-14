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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH44ED47%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCNgLz30OzmoZi5sfL2eo%2FXML2wdgT1lEJ3nI6SMR6SCwIfaGeQ7W9VjV%2F%2FTucNJXk78lCZgV47%2FzDxZzMncoNvuSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMVROBhFAYrnwhjshBKtwDeSgMCKKMGAzasTR4bT3BqM3%2FdbT5uGc90OyNks5y1gG4ps0ahnUj%2F%2FsujEn30pL3MDkmn3c0vnXfioxnndK83pO85s%2BTBYUP%2FTv8M85UcM7g7hYspjfisNcttr8huBwyYeDQhduQiLNM%2FpYkNea3HVq%2FkZD6L0DZb8COzmZ15X%2FRf4a5k%2B%2FKEvjtIP9wXPghq0bB3w4GBBtTIV%2FOBeG62Sv9vQhWbRSsjNlNksZBYj6bTQRLFJI4P2%2B4IJZYnRKoLrJ01HFUow%2FHmK39rQ1nLgxKmY%2FCGD4RiRVhxtKI2rMLP26TaBIM%2B15ZCORj5hgZP44Nrwcha70NFc%2BmIQcItLSOFryHZgtAy3Op7arvamxYcbMbNKVMQdHPVwgBND7DdaW3Oidmq1ZfDEGdWnwGuCKC%2BAXY9m21Pne1dNrvcNOw6n9IMTehiDvQRLENlAk690EK3mk%2FzRZF8KhoNzuvLzmcCIUHcOuK3Q9TTsyfJhaOFIXoYaOd3cmu1jDFPtWd3sjgbds%2ByJKFjgsevWzMmsVBUDcGOqA4zq7cKWTOQ7LiZRVtjuInBh2x5EgE0Gj3NrnR93nooXu37O8qJVvYw5tpDrKoEjBSK52EdZ4AWTW4Ac5OIXs%2BivsjwNEwwfr0vwY6pgHHptcEDbjPsLDplb5FoJR4de8DXmVfP7mGz4Wgniep2NoevWTgEJWd7hLwmtQ%2Fvmmo3zizDi8myGuj5KmIuhDZFQgiw7DpQRXDScvFJW1DnCVzeCJh4W%2FaDDRP5x%2FUFaeIvO0X%2ByGFxyhQ1YdOtT1l039FGbCUMxo6CJ1sHyIMl7Ns3YzW8RLZq8B1oLvOg8ejHb%2BUS%2BrIERt%2B4d0q%2BjKrmh40C5VT&X-Amz-Signature=f933f86e2dbcaedc9735d7d63692138eb317b37d5cc25cea6a31423839d35091&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH44ED47%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCNgLz30OzmoZi5sfL2eo%2FXML2wdgT1lEJ3nI6SMR6SCwIfaGeQ7W9VjV%2F%2FTucNJXk78lCZgV47%2FzDxZzMncoNvuSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMVROBhFAYrnwhjshBKtwDeSgMCKKMGAzasTR4bT3BqM3%2FdbT5uGc90OyNks5y1gG4ps0ahnUj%2F%2FsujEn30pL3MDkmn3c0vnXfioxnndK83pO85s%2BTBYUP%2FTv8M85UcM7g7hYspjfisNcttr8huBwyYeDQhduQiLNM%2FpYkNea3HVq%2FkZD6L0DZb8COzmZ15X%2FRf4a5k%2B%2FKEvjtIP9wXPghq0bB3w4GBBtTIV%2FOBeG62Sv9vQhWbRSsjNlNksZBYj6bTQRLFJI4P2%2B4IJZYnRKoLrJ01HFUow%2FHmK39rQ1nLgxKmY%2FCGD4RiRVhxtKI2rMLP26TaBIM%2B15ZCORj5hgZP44Nrwcha70NFc%2BmIQcItLSOFryHZgtAy3Op7arvamxYcbMbNKVMQdHPVwgBND7DdaW3Oidmq1ZfDEGdWnwGuCKC%2BAXY9m21Pne1dNrvcNOw6n9IMTehiDvQRLENlAk690EK3mk%2FzRZF8KhoNzuvLzmcCIUHcOuK3Q9TTsyfJhaOFIXoYaOd3cmu1jDFPtWd3sjgbds%2ByJKFjgsevWzMmsVBUDcGOqA4zq7cKWTOQ7LiZRVtjuInBh2x5EgE0Gj3NrnR93nooXu37O8qJVvYw5tpDrKoEjBSK52EdZ4AWTW4Ac5OIXs%2BivsjwNEwwfr0vwY6pgHHptcEDbjPsLDplb5FoJR4de8DXmVfP7mGz4Wgniep2NoevWTgEJWd7hLwmtQ%2Fvmmo3zizDi8myGuj5KmIuhDZFQgiw7DpQRXDScvFJW1DnCVzeCJh4W%2FaDDRP5x%2FUFaeIvO0X%2ByGFxyhQ1YdOtT1l039FGbCUMxo6CJ1sHyIMl7Ns3YzW8RLZq8B1oLvOg8ejHb%2BUS%2BrIERt%2B4d0q%2BjKrmh40C5VT&X-Amz-Signature=2c8782a7f5d353a5f34998f7e1fe6019739cf8a55dd7b68c269b74f54661c5ff&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH44ED47%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCNgLz30OzmoZi5sfL2eo%2FXML2wdgT1lEJ3nI6SMR6SCwIfaGeQ7W9VjV%2F%2FTucNJXk78lCZgV47%2FzDxZzMncoNvuSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMVROBhFAYrnwhjshBKtwDeSgMCKKMGAzasTR4bT3BqM3%2FdbT5uGc90OyNks5y1gG4ps0ahnUj%2F%2FsujEn30pL3MDkmn3c0vnXfioxnndK83pO85s%2BTBYUP%2FTv8M85UcM7g7hYspjfisNcttr8huBwyYeDQhduQiLNM%2FpYkNea3HVq%2FkZD6L0DZb8COzmZ15X%2FRf4a5k%2B%2FKEvjtIP9wXPghq0bB3w4GBBtTIV%2FOBeG62Sv9vQhWbRSsjNlNksZBYj6bTQRLFJI4P2%2B4IJZYnRKoLrJ01HFUow%2FHmK39rQ1nLgxKmY%2FCGD4RiRVhxtKI2rMLP26TaBIM%2B15ZCORj5hgZP44Nrwcha70NFc%2BmIQcItLSOFryHZgtAy3Op7arvamxYcbMbNKVMQdHPVwgBND7DdaW3Oidmq1ZfDEGdWnwGuCKC%2BAXY9m21Pne1dNrvcNOw6n9IMTehiDvQRLENlAk690EK3mk%2FzRZF8KhoNzuvLzmcCIUHcOuK3Q9TTsyfJhaOFIXoYaOd3cmu1jDFPtWd3sjgbds%2ByJKFjgsevWzMmsVBUDcGOqA4zq7cKWTOQ7LiZRVtjuInBh2x5EgE0Gj3NrnR93nooXu37O8qJVvYw5tpDrKoEjBSK52EdZ4AWTW4Ac5OIXs%2BivsjwNEwwfr0vwY6pgHHptcEDbjPsLDplb5FoJR4de8DXmVfP7mGz4Wgniep2NoevWTgEJWd7hLwmtQ%2Fvmmo3zizDi8myGuj5KmIuhDZFQgiw7DpQRXDScvFJW1DnCVzeCJh4W%2FaDDRP5x%2FUFaeIvO0X%2ByGFxyhQ1YdOtT1l039FGbCUMxo6CJ1sHyIMl7Ns3YzW8RLZq8B1oLvOg8ejHb%2BUS%2BrIERt%2B4d0q%2BjKrmh40C5VT&X-Amz-Signature=a6d2fdaffb5ee458c88a3e1b6c92eb35177934b06488e24dc9197c0ce997aabf&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH44ED47%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCNgLz30OzmoZi5sfL2eo%2FXML2wdgT1lEJ3nI6SMR6SCwIfaGeQ7W9VjV%2F%2FTucNJXk78lCZgV47%2FzDxZzMncoNvuSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMVROBhFAYrnwhjshBKtwDeSgMCKKMGAzasTR4bT3BqM3%2FdbT5uGc90OyNks5y1gG4ps0ahnUj%2F%2FsujEn30pL3MDkmn3c0vnXfioxnndK83pO85s%2BTBYUP%2FTv8M85UcM7g7hYspjfisNcttr8huBwyYeDQhduQiLNM%2FpYkNea3HVq%2FkZD6L0DZb8COzmZ15X%2FRf4a5k%2B%2FKEvjtIP9wXPghq0bB3w4GBBtTIV%2FOBeG62Sv9vQhWbRSsjNlNksZBYj6bTQRLFJI4P2%2B4IJZYnRKoLrJ01HFUow%2FHmK39rQ1nLgxKmY%2FCGD4RiRVhxtKI2rMLP26TaBIM%2B15ZCORj5hgZP44Nrwcha70NFc%2BmIQcItLSOFryHZgtAy3Op7arvamxYcbMbNKVMQdHPVwgBND7DdaW3Oidmq1ZfDEGdWnwGuCKC%2BAXY9m21Pne1dNrvcNOw6n9IMTehiDvQRLENlAk690EK3mk%2FzRZF8KhoNzuvLzmcCIUHcOuK3Q9TTsyfJhaOFIXoYaOd3cmu1jDFPtWd3sjgbds%2ByJKFjgsevWzMmsVBUDcGOqA4zq7cKWTOQ7LiZRVtjuInBh2x5EgE0Gj3NrnR93nooXu37O8qJVvYw5tpDrKoEjBSK52EdZ4AWTW4Ac5OIXs%2BivsjwNEwwfr0vwY6pgHHptcEDbjPsLDplb5FoJR4de8DXmVfP7mGz4Wgniep2NoevWTgEJWd7hLwmtQ%2Fvmmo3zizDi8myGuj5KmIuhDZFQgiw7DpQRXDScvFJW1DnCVzeCJh4W%2FaDDRP5x%2FUFaeIvO0X%2ByGFxyhQ1YdOtT1l039FGbCUMxo6CJ1sHyIMl7Ns3YzW8RLZq8B1oLvOg8ejHb%2BUS%2BrIERt%2B4d0q%2BjKrmh40C5VT&X-Amz-Signature=9ca59cc2d8587efbe74775d29b621ba104f2482f62e7c7c42df22acf027d6521&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH44ED47%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCNgLz30OzmoZi5sfL2eo%2FXML2wdgT1lEJ3nI6SMR6SCwIfaGeQ7W9VjV%2F%2FTucNJXk78lCZgV47%2FzDxZzMncoNvuSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMVROBhFAYrnwhjshBKtwDeSgMCKKMGAzasTR4bT3BqM3%2FdbT5uGc90OyNks5y1gG4ps0ahnUj%2F%2FsujEn30pL3MDkmn3c0vnXfioxnndK83pO85s%2BTBYUP%2FTv8M85UcM7g7hYspjfisNcttr8huBwyYeDQhduQiLNM%2FpYkNea3HVq%2FkZD6L0DZb8COzmZ15X%2FRf4a5k%2B%2FKEvjtIP9wXPghq0bB3w4GBBtTIV%2FOBeG62Sv9vQhWbRSsjNlNksZBYj6bTQRLFJI4P2%2B4IJZYnRKoLrJ01HFUow%2FHmK39rQ1nLgxKmY%2FCGD4RiRVhxtKI2rMLP26TaBIM%2B15ZCORj5hgZP44Nrwcha70NFc%2BmIQcItLSOFryHZgtAy3Op7arvamxYcbMbNKVMQdHPVwgBND7DdaW3Oidmq1ZfDEGdWnwGuCKC%2BAXY9m21Pne1dNrvcNOw6n9IMTehiDvQRLENlAk690EK3mk%2FzRZF8KhoNzuvLzmcCIUHcOuK3Q9TTsyfJhaOFIXoYaOd3cmu1jDFPtWd3sjgbds%2ByJKFjgsevWzMmsVBUDcGOqA4zq7cKWTOQ7LiZRVtjuInBh2x5EgE0Gj3NrnR93nooXu37O8qJVvYw5tpDrKoEjBSK52EdZ4AWTW4Ac5OIXs%2BivsjwNEwwfr0vwY6pgHHptcEDbjPsLDplb5FoJR4de8DXmVfP7mGz4Wgniep2NoevWTgEJWd7hLwmtQ%2Fvmmo3zizDi8myGuj5KmIuhDZFQgiw7DpQRXDScvFJW1DnCVzeCJh4W%2FaDDRP5x%2FUFaeIvO0X%2ByGFxyhQ1YdOtT1l039FGbCUMxo6CJ1sHyIMl7Ns3YzW8RLZq8B1oLvOg8ejHb%2BUS%2BrIERt%2B4d0q%2BjKrmh40C5VT&X-Amz-Signature=b9251ad7da11a582d249e83546381aa4a227481e89b30578d9bae611655ce981&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH44ED47%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCNgLz30OzmoZi5sfL2eo%2FXML2wdgT1lEJ3nI6SMR6SCwIfaGeQ7W9VjV%2F%2FTucNJXk78lCZgV47%2FzDxZzMncoNvuSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMVROBhFAYrnwhjshBKtwDeSgMCKKMGAzasTR4bT3BqM3%2FdbT5uGc90OyNks5y1gG4ps0ahnUj%2F%2FsujEn30pL3MDkmn3c0vnXfioxnndK83pO85s%2BTBYUP%2FTv8M85UcM7g7hYspjfisNcttr8huBwyYeDQhduQiLNM%2FpYkNea3HVq%2FkZD6L0DZb8COzmZ15X%2FRf4a5k%2B%2FKEvjtIP9wXPghq0bB3w4GBBtTIV%2FOBeG62Sv9vQhWbRSsjNlNksZBYj6bTQRLFJI4P2%2B4IJZYnRKoLrJ01HFUow%2FHmK39rQ1nLgxKmY%2FCGD4RiRVhxtKI2rMLP26TaBIM%2B15ZCORj5hgZP44Nrwcha70NFc%2BmIQcItLSOFryHZgtAy3Op7arvamxYcbMbNKVMQdHPVwgBND7DdaW3Oidmq1ZfDEGdWnwGuCKC%2BAXY9m21Pne1dNrvcNOw6n9IMTehiDvQRLENlAk690EK3mk%2FzRZF8KhoNzuvLzmcCIUHcOuK3Q9TTsyfJhaOFIXoYaOd3cmu1jDFPtWd3sjgbds%2ByJKFjgsevWzMmsVBUDcGOqA4zq7cKWTOQ7LiZRVtjuInBh2x5EgE0Gj3NrnR93nooXu37O8qJVvYw5tpDrKoEjBSK52EdZ4AWTW4Ac5OIXs%2BivsjwNEwwfr0vwY6pgHHptcEDbjPsLDplb5FoJR4de8DXmVfP7mGz4Wgniep2NoevWTgEJWd7hLwmtQ%2Fvmmo3zizDi8myGuj5KmIuhDZFQgiw7DpQRXDScvFJW1DnCVzeCJh4W%2FaDDRP5x%2FUFaeIvO0X%2ByGFxyhQ1YdOtT1l039FGbCUMxo6CJ1sHyIMl7Ns3YzW8RLZq8B1oLvOg8ejHb%2BUS%2BrIERt%2B4d0q%2BjKrmh40C5VT&X-Amz-Signature=8cb0f26c9e22227b1ad5ab67171a6d9164b3e2132762861cb5ef7c81d45af4f8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH44ED47%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCNgLz30OzmoZi5sfL2eo%2FXML2wdgT1lEJ3nI6SMR6SCwIfaGeQ7W9VjV%2F%2FTucNJXk78lCZgV47%2FzDxZzMncoNvuSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMVROBhFAYrnwhjshBKtwDeSgMCKKMGAzasTR4bT3BqM3%2FdbT5uGc90OyNks5y1gG4ps0ahnUj%2F%2FsujEn30pL3MDkmn3c0vnXfioxnndK83pO85s%2BTBYUP%2FTv8M85UcM7g7hYspjfisNcttr8huBwyYeDQhduQiLNM%2FpYkNea3HVq%2FkZD6L0DZb8COzmZ15X%2FRf4a5k%2B%2FKEvjtIP9wXPghq0bB3w4GBBtTIV%2FOBeG62Sv9vQhWbRSsjNlNksZBYj6bTQRLFJI4P2%2B4IJZYnRKoLrJ01HFUow%2FHmK39rQ1nLgxKmY%2FCGD4RiRVhxtKI2rMLP26TaBIM%2B15ZCORj5hgZP44Nrwcha70NFc%2BmIQcItLSOFryHZgtAy3Op7arvamxYcbMbNKVMQdHPVwgBND7DdaW3Oidmq1ZfDEGdWnwGuCKC%2BAXY9m21Pne1dNrvcNOw6n9IMTehiDvQRLENlAk690EK3mk%2FzRZF8KhoNzuvLzmcCIUHcOuK3Q9TTsyfJhaOFIXoYaOd3cmu1jDFPtWd3sjgbds%2ByJKFjgsevWzMmsVBUDcGOqA4zq7cKWTOQ7LiZRVtjuInBh2x5EgE0Gj3NrnR93nooXu37O8qJVvYw5tpDrKoEjBSK52EdZ4AWTW4Ac5OIXs%2BivsjwNEwwfr0vwY6pgHHptcEDbjPsLDplb5FoJR4de8DXmVfP7mGz4Wgniep2NoevWTgEJWd7hLwmtQ%2Fvmmo3zizDi8myGuj5KmIuhDZFQgiw7DpQRXDScvFJW1DnCVzeCJh4W%2FaDDRP5x%2FUFaeIvO0X%2ByGFxyhQ1YdOtT1l039FGbCUMxo6CJ1sHyIMl7Ns3YzW8RLZq8B1oLvOg8ejHb%2BUS%2BrIERt%2B4d0q%2BjKrmh40C5VT&X-Amz-Signature=4f3d0c5210c5de9b18c46f03d36de9f9aea2eb4b23e8371bb5e257b5c7aa2dfd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH44ED47%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCNgLz30OzmoZi5sfL2eo%2FXML2wdgT1lEJ3nI6SMR6SCwIfaGeQ7W9VjV%2F%2FTucNJXk78lCZgV47%2FzDxZzMncoNvuSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMVROBhFAYrnwhjshBKtwDeSgMCKKMGAzasTR4bT3BqM3%2FdbT5uGc90OyNks5y1gG4ps0ahnUj%2F%2FsujEn30pL3MDkmn3c0vnXfioxnndK83pO85s%2BTBYUP%2FTv8M85UcM7g7hYspjfisNcttr8huBwyYeDQhduQiLNM%2FpYkNea3HVq%2FkZD6L0DZb8COzmZ15X%2FRf4a5k%2B%2FKEvjtIP9wXPghq0bB3w4GBBtTIV%2FOBeG62Sv9vQhWbRSsjNlNksZBYj6bTQRLFJI4P2%2B4IJZYnRKoLrJ01HFUow%2FHmK39rQ1nLgxKmY%2FCGD4RiRVhxtKI2rMLP26TaBIM%2B15ZCORj5hgZP44Nrwcha70NFc%2BmIQcItLSOFryHZgtAy3Op7arvamxYcbMbNKVMQdHPVwgBND7DdaW3Oidmq1ZfDEGdWnwGuCKC%2BAXY9m21Pne1dNrvcNOw6n9IMTehiDvQRLENlAk690EK3mk%2FzRZF8KhoNzuvLzmcCIUHcOuK3Q9TTsyfJhaOFIXoYaOd3cmu1jDFPtWd3sjgbds%2ByJKFjgsevWzMmsVBUDcGOqA4zq7cKWTOQ7LiZRVtjuInBh2x5EgE0Gj3NrnR93nooXu37O8qJVvYw5tpDrKoEjBSK52EdZ4AWTW4Ac5OIXs%2BivsjwNEwwfr0vwY6pgHHptcEDbjPsLDplb5FoJR4de8DXmVfP7mGz4Wgniep2NoevWTgEJWd7hLwmtQ%2Fvmmo3zizDi8myGuj5KmIuhDZFQgiw7DpQRXDScvFJW1DnCVzeCJh4W%2FaDDRP5x%2FUFaeIvO0X%2ByGFxyhQ1YdOtT1l039FGbCUMxo6CJ1sHyIMl7Ns3YzW8RLZq8B1oLvOg8ejHb%2BUS%2BrIERt%2B4d0q%2BjKrmh40C5VT&X-Amz-Signature=66b1ff5159f00f94bae24e015fd753668308ed0c8ec908964e967e5128a70c9a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
