---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D64GS77%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIFNWkNOylerXXDl6ET9wCMcj%2FjjbPL1y6yKr7SF8x6tlAiATW7bDIpZcrIgH5C6JNWvq237l%2BSCGrh3PF%2F6XvOLZXyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaTLaj3sm%2FHu4%2Bx6tKtwDygdBYtYFUVKnpzY6VI1f%2BW5NMXt7eme1rMWyGVBCJ3MCFp5MOY1oi00DuOPqvcpQ7keHk5u10PHtdjLqjqDWJVaBMbhV0nV5wkiuFD7fzA6y5nRJ7V2L8Cfa8JrptL1487%2BOEaO61GQmU1YE%2Bbwut9KkQQfz8owXAE8ofu7a1nXVEgmtCA90bVlKRxpwTvWkcBhrx0zSc8BEK%2FkiAUM%2Fg5f2wHaNUh%2BaFwaTRdS0h8g8SeS0pwgDDxu7iE3sYtyraNipzj8dPeKDuAnddQPU5KEJnRYsKpZb9NDn2pnTyHl3KsDofbEA1pWJdGijMgAZYMZh1%2Fxd%2BUfcZYhhYTWlfEFR8gat2qmsfFeAONufSfR0XLNymqsmWqNIyVwc1tpBIdSEvnfC8mA3SUKAvH%2FZmmbZQrgWqfOp3NpwfPSuynyHTdqIB%2BukTD%2BMYkrhT0%2BvcV4Xu24StRt18V7MuZogrtraBZIgx06dHV%2B%2BajQnUJeJqHtE5HFLl67j1%2BPqtJ7H3HprkKSTh5SE7Fvo0NUKnaQ%2BBA2eV%2Fap8Y8AIJ%2BWk%2Fw5jGtKQ533NCeQwxp4gauZQVYwxeb%2FCSh0Keze8olBSjpeRjLRGk65UmkJBkOTrRpqEkEHE8lQNw%2F62OMwse7TxAY6pgEoRbLtOe1cnD95S6KL9XFMwTLKzGVNdv4d6AHNYwwxXqLlamsvfmJGTgbiWOzzGhsTLFqDI8w58EHg0dfHWWSA6eBZS9JyjKdd1mW%2B3G%2FoeRC%2B%2BEmN%2Buh77KQy1KlHgsUQVIlEeU9mchh%2FXodAevFyToF1Qw4t6OT07rhCnGTI0%2BTbqv7G3RhBBjfLILVmwYYpdVKf%2B%2FYr8vQJImUf4qe5wSgqjM0q&X-Amz-Signature=804dc6cce77ddb141f6cc2f4b121a7216b6836864091f3f10ba731ac28d26ede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D64GS77%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIFNWkNOylerXXDl6ET9wCMcj%2FjjbPL1y6yKr7SF8x6tlAiATW7bDIpZcrIgH5C6JNWvq237l%2BSCGrh3PF%2F6XvOLZXyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaTLaj3sm%2FHu4%2Bx6tKtwDygdBYtYFUVKnpzY6VI1f%2BW5NMXt7eme1rMWyGVBCJ3MCFp5MOY1oi00DuOPqvcpQ7keHk5u10PHtdjLqjqDWJVaBMbhV0nV5wkiuFD7fzA6y5nRJ7V2L8Cfa8JrptL1487%2BOEaO61GQmU1YE%2Bbwut9KkQQfz8owXAE8ofu7a1nXVEgmtCA90bVlKRxpwTvWkcBhrx0zSc8BEK%2FkiAUM%2Fg5f2wHaNUh%2BaFwaTRdS0h8g8SeS0pwgDDxu7iE3sYtyraNipzj8dPeKDuAnddQPU5KEJnRYsKpZb9NDn2pnTyHl3KsDofbEA1pWJdGijMgAZYMZh1%2Fxd%2BUfcZYhhYTWlfEFR8gat2qmsfFeAONufSfR0XLNymqsmWqNIyVwc1tpBIdSEvnfC8mA3SUKAvH%2FZmmbZQrgWqfOp3NpwfPSuynyHTdqIB%2BukTD%2BMYkrhT0%2BvcV4Xu24StRt18V7MuZogrtraBZIgx06dHV%2B%2BajQnUJeJqHtE5HFLl67j1%2BPqtJ7H3HprkKSTh5SE7Fvo0NUKnaQ%2BBA2eV%2Fap8Y8AIJ%2BWk%2Fw5jGtKQ533NCeQwxp4gauZQVYwxeb%2FCSh0Keze8olBSjpeRjLRGk65UmkJBkOTrRpqEkEHE8lQNw%2F62OMwse7TxAY6pgEoRbLtOe1cnD95S6KL9XFMwTLKzGVNdv4d6AHNYwwxXqLlamsvfmJGTgbiWOzzGhsTLFqDI8w58EHg0dfHWWSA6eBZS9JyjKdd1mW%2B3G%2FoeRC%2B%2BEmN%2Buh77KQy1KlHgsUQVIlEeU9mchh%2FXodAevFyToF1Qw4t6OT07rhCnGTI0%2BTbqv7G3RhBBjfLILVmwYYpdVKf%2B%2FYr8vQJImUf4qe5wSgqjM0q&X-Amz-Signature=d5eb3edad5f37ddd7047ccd09c871a189eb8abdf4f8a906897e427f26f45d969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D64GS77%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIFNWkNOylerXXDl6ET9wCMcj%2FjjbPL1y6yKr7SF8x6tlAiATW7bDIpZcrIgH5C6JNWvq237l%2BSCGrh3PF%2F6XvOLZXyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaTLaj3sm%2FHu4%2Bx6tKtwDygdBYtYFUVKnpzY6VI1f%2BW5NMXt7eme1rMWyGVBCJ3MCFp5MOY1oi00DuOPqvcpQ7keHk5u10PHtdjLqjqDWJVaBMbhV0nV5wkiuFD7fzA6y5nRJ7V2L8Cfa8JrptL1487%2BOEaO61GQmU1YE%2Bbwut9KkQQfz8owXAE8ofu7a1nXVEgmtCA90bVlKRxpwTvWkcBhrx0zSc8BEK%2FkiAUM%2Fg5f2wHaNUh%2BaFwaTRdS0h8g8SeS0pwgDDxu7iE3sYtyraNipzj8dPeKDuAnddQPU5KEJnRYsKpZb9NDn2pnTyHl3KsDofbEA1pWJdGijMgAZYMZh1%2Fxd%2BUfcZYhhYTWlfEFR8gat2qmsfFeAONufSfR0XLNymqsmWqNIyVwc1tpBIdSEvnfC8mA3SUKAvH%2FZmmbZQrgWqfOp3NpwfPSuynyHTdqIB%2BukTD%2BMYkrhT0%2BvcV4Xu24StRt18V7MuZogrtraBZIgx06dHV%2B%2BajQnUJeJqHtE5HFLl67j1%2BPqtJ7H3HprkKSTh5SE7Fvo0NUKnaQ%2BBA2eV%2Fap8Y8AIJ%2BWk%2Fw5jGtKQ533NCeQwxp4gauZQVYwxeb%2FCSh0Keze8olBSjpeRjLRGk65UmkJBkOTrRpqEkEHE8lQNw%2F62OMwse7TxAY6pgEoRbLtOe1cnD95S6KL9XFMwTLKzGVNdv4d6AHNYwwxXqLlamsvfmJGTgbiWOzzGhsTLFqDI8w58EHg0dfHWWSA6eBZS9JyjKdd1mW%2B3G%2FoeRC%2B%2BEmN%2Buh77KQy1KlHgsUQVIlEeU9mchh%2FXodAevFyToF1Qw4t6OT07rhCnGTI0%2BTbqv7G3RhBBjfLILVmwYYpdVKf%2B%2FYr8vQJImUf4qe5wSgqjM0q&X-Amz-Signature=2eb3fc793d06db0aac2828cacb42dc917d0cbcf08adf263da7f4d652a0b619de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D64GS77%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIFNWkNOylerXXDl6ET9wCMcj%2FjjbPL1y6yKr7SF8x6tlAiATW7bDIpZcrIgH5C6JNWvq237l%2BSCGrh3PF%2F6XvOLZXyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaTLaj3sm%2FHu4%2Bx6tKtwDygdBYtYFUVKnpzY6VI1f%2BW5NMXt7eme1rMWyGVBCJ3MCFp5MOY1oi00DuOPqvcpQ7keHk5u10PHtdjLqjqDWJVaBMbhV0nV5wkiuFD7fzA6y5nRJ7V2L8Cfa8JrptL1487%2BOEaO61GQmU1YE%2Bbwut9KkQQfz8owXAE8ofu7a1nXVEgmtCA90bVlKRxpwTvWkcBhrx0zSc8BEK%2FkiAUM%2Fg5f2wHaNUh%2BaFwaTRdS0h8g8SeS0pwgDDxu7iE3sYtyraNipzj8dPeKDuAnddQPU5KEJnRYsKpZb9NDn2pnTyHl3KsDofbEA1pWJdGijMgAZYMZh1%2Fxd%2BUfcZYhhYTWlfEFR8gat2qmsfFeAONufSfR0XLNymqsmWqNIyVwc1tpBIdSEvnfC8mA3SUKAvH%2FZmmbZQrgWqfOp3NpwfPSuynyHTdqIB%2BukTD%2BMYkrhT0%2BvcV4Xu24StRt18V7MuZogrtraBZIgx06dHV%2B%2BajQnUJeJqHtE5HFLl67j1%2BPqtJ7H3HprkKSTh5SE7Fvo0NUKnaQ%2BBA2eV%2Fap8Y8AIJ%2BWk%2Fw5jGtKQ533NCeQwxp4gauZQVYwxeb%2FCSh0Keze8olBSjpeRjLRGk65UmkJBkOTrRpqEkEHE8lQNw%2F62OMwse7TxAY6pgEoRbLtOe1cnD95S6KL9XFMwTLKzGVNdv4d6AHNYwwxXqLlamsvfmJGTgbiWOzzGhsTLFqDI8w58EHg0dfHWWSA6eBZS9JyjKdd1mW%2B3G%2FoeRC%2B%2BEmN%2Buh77KQy1KlHgsUQVIlEeU9mchh%2FXodAevFyToF1Qw4t6OT07rhCnGTI0%2BTbqv7G3RhBBjfLILVmwYYpdVKf%2B%2FYr8vQJImUf4qe5wSgqjM0q&X-Amz-Signature=d9da5679b5ca4b963d9ac6e4070c742328150bda0f9c6f9f3600c1c0dbfeea70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D64GS77%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIFNWkNOylerXXDl6ET9wCMcj%2FjjbPL1y6yKr7SF8x6tlAiATW7bDIpZcrIgH5C6JNWvq237l%2BSCGrh3PF%2F6XvOLZXyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaTLaj3sm%2FHu4%2Bx6tKtwDygdBYtYFUVKnpzY6VI1f%2BW5NMXt7eme1rMWyGVBCJ3MCFp5MOY1oi00DuOPqvcpQ7keHk5u10PHtdjLqjqDWJVaBMbhV0nV5wkiuFD7fzA6y5nRJ7V2L8Cfa8JrptL1487%2BOEaO61GQmU1YE%2Bbwut9KkQQfz8owXAE8ofu7a1nXVEgmtCA90bVlKRxpwTvWkcBhrx0zSc8BEK%2FkiAUM%2Fg5f2wHaNUh%2BaFwaTRdS0h8g8SeS0pwgDDxu7iE3sYtyraNipzj8dPeKDuAnddQPU5KEJnRYsKpZb9NDn2pnTyHl3KsDofbEA1pWJdGijMgAZYMZh1%2Fxd%2BUfcZYhhYTWlfEFR8gat2qmsfFeAONufSfR0XLNymqsmWqNIyVwc1tpBIdSEvnfC8mA3SUKAvH%2FZmmbZQrgWqfOp3NpwfPSuynyHTdqIB%2BukTD%2BMYkrhT0%2BvcV4Xu24StRt18V7MuZogrtraBZIgx06dHV%2B%2BajQnUJeJqHtE5HFLl67j1%2BPqtJ7H3HprkKSTh5SE7Fvo0NUKnaQ%2BBA2eV%2Fap8Y8AIJ%2BWk%2Fw5jGtKQ533NCeQwxp4gauZQVYwxeb%2FCSh0Keze8olBSjpeRjLRGk65UmkJBkOTrRpqEkEHE8lQNw%2F62OMwse7TxAY6pgEoRbLtOe1cnD95S6KL9XFMwTLKzGVNdv4d6AHNYwwxXqLlamsvfmJGTgbiWOzzGhsTLFqDI8w58EHg0dfHWWSA6eBZS9JyjKdd1mW%2B3G%2FoeRC%2B%2BEmN%2Buh77KQy1KlHgsUQVIlEeU9mchh%2FXodAevFyToF1Qw4t6OT07rhCnGTI0%2BTbqv7G3RhBBjfLILVmwYYpdVKf%2B%2FYr8vQJImUf4qe5wSgqjM0q&X-Amz-Signature=4c57feeca890114a9d658925a497fae5769f9b3ac7bca61c9fbb4c26e71588ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D64GS77%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIFNWkNOylerXXDl6ET9wCMcj%2FjjbPL1y6yKr7SF8x6tlAiATW7bDIpZcrIgH5C6JNWvq237l%2BSCGrh3PF%2F6XvOLZXyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaTLaj3sm%2FHu4%2Bx6tKtwDygdBYtYFUVKnpzY6VI1f%2BW5NMXt7eme1rMWyGVBCJ3MCFp5MOY1oi00DuOPqvcpQ7keHk5u10PHtdjLqjqDWJVaBMbhV0nV5wkiuFD7fzA6y5nRJ7V2L8Cfa8JrptL1487%2BOEaO61GQmU1YE%2Bbwut9KkQQfz8owXAE8ofu7a1nXVEgmtCA90bVlKRxpwTvWkcBhrx0zSc8BEK%2FkiAUM%2Fg5f2wHaNUh%2BaFwaTRdS0h8g8SeS0pwgDDxu7iE3sYtyraNipzj8dPeKDuAnddQPU5KEJnRYsKpZb9NDn2pnTyHl3KsDofbEA1pWJdGijMgAZYMZh1%2Fxd%2BUfcZYhhYTWlfEFR8gat2qmsfFeAONufSfR0XLNymqsmWqNIyVwc1tpBIdSEvnfC8mA3SUKAvH%2FZmmbZQrgWqfOp3NpwfPSuynyHTdqIB%2BukTD%2BMYkrhT0%2BvcV4Xu24StRt18V7MuZogrtraBZIgx06dHV%2B%2BajQnUJeJqHtE5HFLl67j1%2BPqtJ7H3HprkKSTh5SE7Fvo0NUKnaQ%2BBA2eV%2Fap8Y8AIJ%2BWk%2Fw5jGtKQ533NCeQwxp4gauZQVYwxeb%2FCSh0Keze8olBSjpeRjLRGk65UmkJBkOTrRpqEkEHE8lQNw%2F62OMwse7TxAY6pgEoRbLtOe1cnD95S6KL9XFMwTLKzGVNdv4d6AHNYwwxXqLlamsvfmJGTgbiWOzzGhsTLFqDI8w58EHg0dfHWWSA6eBZS9JyjKdd1mW%2B3G%2FoeRC%2B%2BEmN%2Buh77KQy1KlHgsUQVIlEeU9mchh%2FXodAevFyToF1Qw4t6OT07rhCnGTI0%2BTbqv7G3RhBBjfLILVmwYYpdVKf%2B%2FYr8vQJImUf4qe5wSgqjM0q&X-Amz-Signature=71253ae699f253dff2f2110a47943f2ac23c9080a1c9652c6fd523bbee457481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D64GS77%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIFNWkNOylerXXDl6ET9wCMcj%2FjjbPL1y6yKr7SF8x6tlAiATW7bDIpZcrIgH5C6JNWvq237l%2BSCGrh3PF%2F6XvOLZXyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaTLaj3sm%2FHu4%2Bx6tKtwDygdBYtYFUVKnpzY6VI1f%2BW5NMXt7eme1rMWyGVBCJ3MCFp5MOY1oi00DuOPqvcpQ7keHk5u10PHtdjLqjqDWJVaBMbhV0nV5wkiuFD7fzA6y5nRJ7V2L8Cfa8JrptL1487%2BOEaO61GQmU1YE%2Bbwut9KkQQfz8owXAE8ofu7a1nXVEgmtCA90bVlKRxpwTvWkcBhrx0zSc8BEK%2FkiAUM%2Fg5f2wHaNUh%2BaFwaTRdS0h8g8SeS0pwgDDxu7iE3sYtyraNipzj8dPeKDuAnddQPU5KEJnRYsKpZb9NDn2pnTyHl3KsDofbEA1pWJdGijMgAZYMZh1%2Fxd%2BUfcZYhhYTWlfEFR8gat2qmsfFeAONufSfR0XLNymqsmWqNIyVwc1tpBIdSEvnfC8mA3SUKAvH%2FZmmbZQrgWqfOp3NpwfPSuynyHTdqIB%2BukTD%2BMYkrhT0%2BvcV4Xu24StRt18V7MuZogrtraBZIgx06dHV%2B%2BajQnUJeJqHtE5HFLl67j1%2BPqtJ7H3HprkKSTh5SE7Fvo0NUKnaQ%2BBA2eV%2Fap8Y8AIJ%2BWk%2Fw5jGtKQ533NCeQwxp4gauZQVYwxeb%2FCSh0Keze8olBSjpeRjLRGk65UmkJBkOTrRpqEkEHE8lQNw%2F62OMwse7TxAY6pgEoRbLtOe1cnD95S6KL9XFMwTLKzGVNdv4d6AHNYwwxXqLlamsvfmJGTgbiWOzzGhsTLFqDI8w58EHg0dfHWWSA6eBZS9JyjKdd1mW%2B3G%2FoeRC%2B%2BEmN%2Buh77KQy1KlHgsUQVIlEeU9mchh%2FXodAevFyToF1Qw4t6OT07rhCnGTI0%2BTbqv7G3RhBBjfLILVmwYYpdVKf%2B%2FYr8vQJImUf4qe5wSgqjM0q&X-Amz-Signature=5fc404b440e8e7ef51cac2e700b8d6e9c58558e5be62d5f4eb3b3fa942aae9f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D64GS77%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIFNWkNOylerXXDl6ET9wCMcj%2FjjbPL1y6yKr7SF8x6tlAiATW7bDIpZcrIgH5C6JNWvq237l%2BSCGrh3PF%2F6XvOLZXyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaTLaj3sm%2FHu4%2Bx6tKtwDygdBYtYFUVKnpzY6VI1f%2BW5NMXt7eme1rMWyGVBCJ3MCFp5MOY1oi00DuOPqvcpQ7keHk5u10PHtdjLqjqDWJVaBMbhV0nV5wkiuFD7fzA6y5nRJ7V2L8Cfa8JrptL1487%2BOEaO61GQmU1YE%2Bbwut9KkQQfz8owXAE8ofu7a1nXVEgmtCA90bVlKRxpwTvWkcBhrx0zSc8BEK%2FkiAUM%2Fg5f2wHaNUh%2BaFwaTRdS0h8g8SeS0pwgDDxu7iE3sYtyraNipzj8dPeKDuAnddQPU5KEJnRYsKpZb9NDn2pnTyHl3KsDofbEA1pWJdGijMgAZYMZh1%2Fxd%2BUfcZYhhYTWlfEFR8gat2qmsfFeAONufSfR0XLNymqsmWqNIyVwc1tpBIdSEvnfC8mA3SUKAvH%2FZmmbZQrgWqfOp3NpwfPSuynyHTdqIB%2BukTD%2BMYkrhT0%2BvcV4Xu24StRt18V7MuZogrtraBZIgx06dHV%2B%2BajQnUJeJqHtE5HFLl67j1%2BPqtJ7H3HprkKSTh5SE7Fvo0NUKnaQ%2BBA2eV%2Fap8Y8AIJ%2BWk%2Fw5jGtKQ533NCeQwxp4gauZQVYwxeb%2FCSh0Keze8olBSjpeRjLRGk65UmkJBkOTrRpqEkEHE8lQNw%2F62OMwse7TxAY6pgEoRbLtOe1cnD95S6KL9XFMwTLKzGVNdv4d6AHNYwwxXqLlamsvfmJGTgbiWOzzGhsTLFqDI8w58EHg0dfHWWSA6eBZS9JyjKdd1mW%2B3G%2FoeRC%2B%2BEmN%2Buh77KQy1KlHgsUQVIlEeU9mchh%2FXodAevFyToF1Qw4t6OT07rhCnGTI0%2BTbqv7G3RhBBjfLILVmwYYpdVKf%2B%2FYr8vQJImUf4qe5wSgqjM0q&X-Amz-Signature=65b3d8728ff220f19feed9725890123ac8b9738f1f1a582832342c5550d38c82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
