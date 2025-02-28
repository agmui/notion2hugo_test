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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTVVHZ3L%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIHgwfoSEghp3K1o83L%2BQzjFhEvKF9xNWoam9aVeCcyYrAiA4BFVLVF49A6o025raExnohlSmIBrguY%2BNDdqGR%2BMoICqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM21XEwI4K544AtjyEKtwDSX0%2FdAmOT3i2UPWFtDpQiQrT53Cya8EqK%2BugiXGZgPO0FU6r4C1O%2BCxi0kO9m2U2j8T8hluZJu5i0DP%2B%2FLCytb2Z7H7RTmsxOrzICmP3OaAHk6qYkBNp7EUbS8Q2Mwi2nzCrj6jDRuDPkrpPb3PNtXGANzKUrYqQgGWEuQrHJqCz8nBz5ozYjOoazwterEqsXzDXpQDql9GFTZhRNWVBdP%2B1JcY9jd7sqF%2B0rhEKUOtaEiToieElYowK%2FxYF%2FIeXglU1zm4edc6xu%2BW8ksnUoQoA9oPT5Qeibb94Arnm8Z8I%2BgI7%2FQv7%2BiTJcNKpxldxwh5ZlsR7ez8VIQFM6a8buPt2vE1NSFO7gKRn25VZ2MLKQVHExGQyLPkIvzncJ2J%2B%2BK7cI%2FzD6gnH7c1vGL1%2BK6u1oHz1WbsgNuAqGCXLv1CBcU61xldP%2B9fe5g%2BiotJbdoKjtiN9IC0zYFKwQVTkwb8CKRXp6bB1XAe7mQbtnG8pe118IS6IJNUbM22MGhbBGWZQMmx3UwNzZC5Ur30mG6mzPVYwkRi4CM7qkFIi%2FWul3VxCjJY43N4eJtV%2Bi0%2FjFoNos%2BwVDRvPQMZwzPy9xROTiX0wPftbPH1GV2NSg6zplgC%2FVUqefEp1W24wr%2FaDvgY6pgEIXVIjAC3pKrDj91TAaFjGe9Sk5YhUXk1YY8ziGiPsGReP1oXtP%2BvRB1nSwomRrX4LGGKKvaHz24nSxLmqrvIQRi5ntPTXvvfm30kx8DKU0%2FyTRvnwEEkIEEY9BD2l81s2bXEKC6UueOk0eFPd39nnZSMy2KfLnfEI%2FvohvFZl94wh8ggWJHDGebQBABulh90yEXh%2Fo%2BMNdg%2FlpYjXT1vlmt9D2FkM&X-Amz-Signature=84c38df84d1157fb4f1d3a375f1afec37ad0ffff8f0469aa8c1d8862ea771acf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTVVHZ3L%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIHgwfoSEghp3K1o83L%2BQzjFhEvKF9xNWoam9aVeCcyYrAiA4BFVLVF49A6o025raExnohlSmIBrguY%2BNDdqGR%2BMoICqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM21XEwI4K544AtjyEKtwDSX0%2FdAmOT3i2UPWFtDpQiQrT53Cya8EqK%2BugiXGZgPO0FU6r4C1O%2BCxi0kO9m2U2j8T8hluZJu5i0DP%2B%2FLCytb2Z7H7RTmsxOrzICmP3OaAHk6qYkBNp7EUbS8Q2Mwi2nzCrj6jDRuDPkrpPb3PNtXGANzKUrYqQgGWEuQrHJqCz8nBz5ozYjOoazwterEqsXzDXpQDql9GFTZhRNWVBdP%2B1JcY9jd7sqF%2B0rhEKUOtaEiToieElYowK%2FxYF%2FIeXglU1zm4edc6xu%2BW8ksnUoQoA9oPT5Qeibb94Arnm8Z8I%2BgI7%2FQv7%2BiTJcNKpxldxwh5ZlsR7ez8VIQFM6a8buPt2vE1NSFO7gKRn25VZ2MLKQVHExGQyLPkIvzncJ2J%2B%2BK7cI%2FzD6gnH7c1vGL1%2BK6u1oHz1WbsgNuAqGCXLv1CBcU61xldP%2B9fe5g%2BiotJbdoKjtiN9IC0zYFKwQVTkwb8CKRXp6bB1XAe7mQbtnG8pe118IS6IJNUbM22MGhbBGWZQMmx3UwNzZC5Ur30mG6mzPVYwkRi4CM7qkFIi%2FWul3VxCjJY43N4eJtV%2Bi0%2FjFoNos%2BwVDRvPQMZwzPy9xROTiX0wPftbPH1GV2NSg6zplgC%2FVUqefEp1W24wr%2FaDvgY6pgEIXVIjAC3pKrDj91TAaFjGe9Sk5YhUXk1YY8ziGiPsGReP1oXtP%2BvRB1nSwomRrX4LGGKKvaHz24nSxLmqrvIQRi5ntPTXvvfm30kx8DKU0%2FyTRvnwEEkIEEY9BD2l81s2bXEKC6UueOk0eFPd39nnZSMy2KfLnfEI%2FvohvFZl94wh8ggWJHDGebQBABulh90yEXh%2Fo%2BMNdg%2FlpYjXT1vlmt9D2FkM&X-Amz-Signature=3de6eca1fc6b85d265011fb747d49b64bf7dad5a0f7db14902506af2997fceaf&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTVVHZ3L%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIHgwfoSEghp3K1o83L%2BQzjFhEvKF9xNWoam9aVeCcyYrAiA4BFVLVF49A6o025raExnohlSmIBrguY%2BNDdqGR%2BMoICqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM21XEwI4K544AtjyEKtwDSX0%2FdAmOT3i2UPWFtDpQiQrT53Cya8EqK%2BugiXGZgPO0FU6r4C1O%2BCxi0kO9m2U2j8T8hluZJu5i0DP%2B%2FLCytb2Z7H7RTmsxOrzICmP3OaAHk6qYkBNp7EUbS8Q2Mwi2nzCrj6jDRuDPkrpPb3PNtXGANzKUrYqQgGWEuQrHJqCz8nBz5ozYjOoazwterEqsXzDXpQDql9GFTZhRNWVBdP%2B1JcY9jd7sqF%2B0rhEKUOtaEiToieElYowK%2FxYF%2FIeXglU1zm4edc6xu%2BW8ksnUoQoA9oPT5Qeibb94Arnm8Z8I%2BgI7%2FQv7%2BiTJcNKpxldxwh5ZlsR7ez8VIQFM6a8buPt2vE1NSFO7gKRn25VZ2MLKQVHExGQyLPkIvzncJ2J%2B%2BK7cI%2FzD6gnH7c1vGL1%2BK6u1oHz1WbsgNuAqGCXLv1CBcU61xldP%2B9fe5g%2BiotJbdoKjtiN9IC0zYFKwQVTkwb8CKRXp6bB1XAe7mQbtnG8pe118IS6IJNUbM22MGhbBGWZQMmx3UwNzZC5Ur30mG6mzPVYwkRi4CM7qkFIi%2FWul3VxCjJY43N4eJtV%2Bi0%2FjFoNos%2BwVDRvPQMZwzPy9xROTiX0wPftbPH1GV2NSg6zplgC%2FVUqefEp1W24wr%2FaDvgY6pgEIXVIjAC3pKrDj91TAaFjGe9Sk5YhUXk1YY8ziGiPsGReP1oXtP%2BvRB1nSwomRrX4LGGKKvaHz24nSxLmqrvIQRi5ntPTXvvfm30kx8DKU0%2FyTRvnwEEkIEEY9BD2l81s2bXEKC6UueOk0eFPd39nnZSMy2KfLnfEI%2FvohvFZl94wh8ggWJHDGebQBABulh90yEXh%2Fo%2BMNdg%2FlpYjXT1vlmt9D2FkM&X-Amz-Signature=f754dfde8dde0ee9e26a4f94f3d4a633ee4fa962c260dbff2d329eba1e102c0d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTVVHZ3L%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIHgwfoSEghp3K1o83L%2BQzjFhEvKF9xNWoam9aVeCcyYrAiA4BFVLVF49A6o025raExnohlSmIBrguY%2BNDdqGR%2BMoICqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM21XEwI4K544AtjyEKtwDSX0%2FdAmOT3i2UPWFtDpQiQrT53Cya8EqK%2BugiXGZgPO0FU6r4C1O%2BCxi0kO9m2U2j8T8hluZJu5i0DP%2B%2FLCytb2Z7H7RTmsxOrzICmP3OaAHk6qYkBNp7EUbS8Q2Mwi2nzCrj6jDRuDPkrpPb3PNtXGANzKUrYqQgGWEuQrHJqCz8nBz5ozYjOoazwterEqsXzDXpQDql9GFTZhRNWVBdP%2B1JcY9jd7sqF%2B0rhEKUOtaEiToieElYowK%2FxYF%2FIeXglU1zm4edc6xu%2BW8ksnUoQoA9oPT5Qeibb94Arnm8Z8I%2BgI7%2FQv7%2BiTJcNKpxldxwh5ZlsR7ez8VIQFM6a8buPt2vE1NSFO7gKRn25VZ2MLKQVHExGQyLPkIvzncJ2J%2B%2BK7cI%2FzD6gnH7c1vGL1%2BK6u1oHz1WbsgNuAqGCXLv1CBcU61xldP%2B9fe5g%2BiotJbdoKjtiN9IC0zYFKwQVTkwb8CKRXp6bB1XAe7mQbtnG8pe118IS6IJNUbM22MGhbBGWZQMmx3UwNzZC5Ur30mG6mzPVYwkRi4CM7qkFIi%2FWul3VxCjJY43N4eJtV%2Bi0%2FjFoNos%2BwVDRvPQMZwzPy9xROTiX0wPftbPH1GV2NSg6zplgC%2FVUqefEp1W24wr%2FaDvgY6pgEIXVIjAC3pKrDj91TAaFjGe9Sk5YhUXk1YY8ziGiPsGReP1oXtP%2BvRB1nSwomRrX4LGGKKvaHz24nSxLmqrvIQRi5ntPTXvvfm30kx8DKU0%2FyTRvnwEEkIEEY9BD2l81s2bXEKC6UueOk0eFPd39nnZSMy2KfLnfEI%2FvohvFZl94wh8ggWJHDGebQBABulh90yEXh%2Fo%2BMNdg%2FlpYjXT1vlmt9D2FkM&X-Amz-Signature=c73a02192309d3af7c6d2d95a432db3827d06ef5da78190f34081ba48ebe92ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTVVHZ3L%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIHgwfoSEghp3K1o83L%2BQzjFhEvKF9xNWoam9aVeCcyYrAiA4BFVLVF49A6o025raExnohlSmIBrguY%2BNDdqGR%2BMoICqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM21XEwI4K544AtjyEKtwDSX0%2FdAmOT3i2UPWFtDpQiQrT53Cya8EqK%2BugiXGZgPO0FU6r4C1O%2BCxi0kO9m2U2j8T8hluZJu5i0DP%2B%2FLCytb2Z7H7RTmsxOrzICmP3OaAHk6qYkBNp7EUbS8Q2Mwi2nzCrj6jDRuDPkrpPb3PNtXGANzKUrYqQgGWEuQrHJqCz8nBz5ozYjOoazwterEqsXzDXpQDql9GFTZhRNWVBdP%2B1JcY9jd7sqF%2B0rhEKUOtaEiToieElYowK%2FxYF%2FIeXglU1zm4edc6xu%2BW8ksnUoQoA9oPT5Qeibb94Arnm8Z8I%2BgI7%2FQv7%2BiTJcNKpxldxwh5ZlsR7ez8VIQFM6a8buPt2vE1NSFO7gKRn25VZ2MLKQVHExGQyLPkIvzncJ2J%2B%2BK7cI%2FzD6gnH7c1vGL1%2BK6u1oHz1WbsgNuAqGCXLv1CBcU61xldP%2B9fe5g%2BiotJbdoKjtiN9IC0zYFKwQVTkwb8CKRXp6bB1XAe7mQbtnG8pe118IS6IJNUbM22MGhbBGWZQMmx3UwNzZC5Ur30mG6mzPVYwkRi4CM7qkFIi%2FWul3VxCjJY43N4eJtV%2Bi0%2FjFoNos%2BwVDRvPQMZwzPy9xROTiX0wPftbPH1GV2NSg6zplgC%2FVUqefEp1W24wr%2FaDvgY6pgEIXVIjAC3pKrDj91TAaFjGe9Sk5YhUXk1YY8ziGiPsGReP1oXtP%2BvRB1nSwomRrX4LGGKKvaHz24nSxLmqrvIQRi5ntPTXvvfm30kx8DKU0%2FyTRvnwEEkIEEY9BD2l81s2bXEKC6UueOk0eFPd39nnZSMy2KfLnfEI%2FvohvFZl94wh8ggWJHDGebQBABulh90yEXh%2Fo%2BMNdg%2FlpYjXT1vlmt9D2FkM&X-Amz-Signature=210efbe6a378ba1e33f2271ac963c375352a766e2a5fb31b0ed8237a495e50d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTVVHZ3L%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIHgwfoSEghp3K1o83L%2BQzjFhEvKF9xNWoam9aVeCcyYrAiA4BFVLVF49A6o025raExnohlSmIBrguY%2BNDdqGR%2BMoICqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM21XEwI4K544AtjyEKtwDSX0%2FdAmOT3i2UPWFtDpQiQrT53Cya8EqK%2BugiXGZgPO0FU6r4C1O%2BCxi0kO9m2U2j8T8hluZJu5i0DP%2B%2FLCytb2Z7H7RTmsxOrzICmP3OaAHk6qYkBNp7EUbS8Q2Mwi2nzCrj6jDRuDPkrpPb3PNtXGANzKUrYqQgGWEuQrHJqCz8nBz5ozYjOoazwterEqsXzDXpQDql9GFTZhRNWVBdP%2B1JcY9jd7sqF%2B0rhEKUOtaEiToieElYowK%2FxYF%2FIeXglU1zm4edc6xu%2BW8ksnUoQoA9oPT5Qeibb94Arnm8Z8I%2BgI7%2FQv7%2BiTJcNKpxldxwh5ZlsR7ez8VIQFM6a8buPt2vE1NSFO7gKRn25VZ2MLKQVHExGQyLPkIvzncJ2J%2B%2BK7cI%2FzD6gnH7c1vGL1%2BK6u1oHz1WbsgNuAqGCXLv1CBcU61xldP%2B9fe5g%2BiotJbdoKjtiN9IC0zYFKwQVTkwb8CKRXp6bB1XAe7mQbtnG8pe118IS6IJNUbM22MGhbBGWZQMmx3UwNzZC5Ur30mG6mzPVYwkRi4CM7qkFIi%2FWul3VxCjJY43N4eJtV%2Bi0%2FjFoNos%2BwVDRvPQMZwzPy9xROTiX0wPftbPH1GV2NSg6zplgC%2FVUqefEp1W24wr%2FaDvgY6pgEIXVIjAC3pKrDj91TAaFjGe9Sk5YhUXk1YY8ziGiPsGReP1oXtP%2BvRB1nSwomRrX4LGGKKvaHz24nSxLmqrvIQRi5ntPTXvvfm30kx8DKU0%2FyTRvnwEEkIEEY9BD2l81s2bXEKC6UueOk0eFPd39nnZSMy2KfLnfEI%2FvohvFZl94wh8ggWJHDGebQBABulh90yEXh%2Fo%2BMNdg%2FlpYjXT1vlmt9D2FkM&X-Amz-Signature=d9693d8cc660a2b67206e1d098905e48744f3338c60f694271767d30d9f2a06b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTVVHZ3L%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIHgwfoSEghp3K1o83L%2BQzjFhEvKF9xNWoam9aVeCcyYrAiA4BFVLVF49A6o025raExnohlSmIBrguY%2BNDdqGR%2BMoICqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM21XEwI4K544AtjyEKtwDSX0%2FdAmOT3i2UPWFtDpQiQrT53Cya8EqK%2BugiXGZgPO0FU6r4C1O%2BCxi0kO9m2U2j8T8hluZJu5i0DP%2B%2FLCytb2Z7H7RTmsxOrzICmP3OaAHk6qYkBNp7EUbS8Q2Mwi2nzCrj6jDRuDPkrpPb3PNtXGANzKUrYqQgGWEuQrHJqCz8nBz5ozYjOoazwterEqsXzDXpQDql9GFTZhRNWVBdP%2B1JcY9jd7sqF%2B0rhEKUOtaEiToieElYowK%2FxYF%2FIeXglU1zm4edc6xu%2BW8ksnUoQoA9oPT5Qeibb94Arnm8Z8I%2BgI7%2FQv7%2BiTJcNKpxldxwh5ZlsR7ez8VIQFM6a8buPt2vE1NSFO7gKRn25VZ2MLKQVHExGQyLPkIvzncJ2J%2B%2BK7cI%2FzD6gnH7c1vGL1%2BK6u1oHz1WbsgNuAqGCXLv1CBcU61xldP%2B9fe5g%2BiotJbdoKjtiN9IC0zYFKwQVTkwb8CKRXp6bB1XAe7mQbtnG8pe118IS6IJNUbM22MGhbBGWZQMmx3UwNzZC5Ur30mG6mzPVYwkRi4CM7qkFIi%2FWul3VxCjJY43N4eJtV%2Bi0%2FjFoNos%2BwVDRvPQMZwzPy9xROTiX0wPftbPH1GV2NSg6zplgC%2FVUqefEp1W24wr%2FaDvgY6pgEIXVIjAC3pKrDj91TAaFjGe9Sk5YhUXk1YY8ziGiPsGReP1oXtP%2BvRB1nSwomRrX4LGGKKvaHz24nSxLmqrvIQRi5ntPTXvvfm30kx8DKU0%2FyTRvnwEEkIEEY9BD2l81s2bXEKC6UueOk0eFPd39nnZSMy2KfLnfEI%2FvohvFZl94wh8ggWJHDGebQBABulh90yEXh%2Fo%2BMNdg%2FlpYjXT1vlmt9D2FkM&X-Amz-Signature=1d78178d402cc1c34b3354dfe667acacde9feb827a264007165cd8e70f7f7e4e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTVVHZ3L%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIHgwfoSEghp3K1o83L%2BQzjFhEvKF9xNWoam9aVeCcyYrAiA4BFVLVF49A6o025raExnohlSmIBrguY%2BNDdqGR%2BMoICqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM21XEwI4K544AtjyEKtwDSX0%2FdAmOT3i2UPWFtDpQiQrT53Cya8EqK%2BugiXGZgPO0FU6r4C1O%2BCxi0kO9m2U2j8T8hluZJu5i0DP%2B%2FLCytb2Z7H7RTmsxOrzICmP3OaAHk6qYkBNp7EUbS8Q2Mwi2nzCrj6jDRuDPkrpPb3PNtXGANzKUrYqQgGWEuQrHJqCz8nBz5ozYjOoazwterEqsXzDXpQDql9GFTZhRNWVBdP%2B1JcY9jd7sqF%2B0rhEKUOtaEiToieElYowK%2FxYF%2FIeXglU1zm4edc6xu%2BW8ksnUoQoA9oPT5Qeibb94Arnm8Z8I%2BgI7%2FQv7%2BiTJcNKpxldxwh5ZlsR7ez8VIQFM6a8buPt2vE1NSFO7gKRn25VZ2MLKQVHExGQyLPkIvzncJ2J%2B%2BK7cI%2FzD6gnH7c1vGL1%2BK6u1oHz1WbsgNuAqGCXLv1CBcU61xldP%2B9fe5g%2BiotJbdoKjtiN9IC0zYFKwQVTkwb8CKRXp6bB1XAe7mQbtnG8pe118IS6IJNUbM22MGhbBGWZQMmx3UwNzZC5Ur30mG6mzPVYwkRi4CM7qkFIi%2FWul3VxCjJY43N4eJtV%2Bi0%2FjFoNos%2BwVDRvPQMZwzPy9xROTiX0wPftbPH1GV2NSg6zplgC%2FVUqefEp1W24wr%2FaDvgY6pgEIXVIjAC3pKrDj91TAaFjGe9Sk5YhUXk1YY8ziGiPsGReP1oXtP%2BvRB1nSwomRrX4LGGKKvaHz24nSxLmqrvIQRi5ntPTXvvfm30kx8DKU0%2FyTRvnwEEkIEEY9BD2l81s2bXEKC6UueOk0eFPd39nnZSMy2KfLnfEI%2FvohvFZl94wh8ggWJHDGebQBABulh90yEXh%2Fo%2BMNdg%2FlpYjXT1vlmt9D2FkM&X-Amz-Signature=2af572ebd3476000eabacf63327c41f1acd4e6c4cb6391e82da6a206cc673fe9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
