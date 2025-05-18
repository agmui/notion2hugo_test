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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677P2X5WL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T110244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZVw74Jk2e1w%2BzC37exHQ%2BrgRCHmgbWzmjd%2FaE6WubwAiAdHNdROsyRrWWNDXfQ2weRQHe90xPTMeQOLfaoLDoN4yr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM%2BlciV8HFh6FRxV%2FtKtwD0Q3Nv%2FQ38KhDACeE34daFocJKzfJUj4DPSVRiIheOQy8MemUM9gin%2FFvPoCm4WphByeb4b47p7BboX23nth1MOzbIXHsiTVTHUcuXIPPkiinrwEL%2BOmh009MuDUmsWilCD0JCOHR2OukUjTksA8DtINPTg6AgSI3mp48awqiTh1nH1kAYa9ozrqRZc0Cwh2vPzzxM3XAdrGB9KalKMmjEDy0Z00mukkwr7Gg5B31efbQGMsTiyGejTJU%2Bj6AaA%2FwTaK%2FzzktRwG6k0wp1o66Zlhp2ayOMZX%2FGkM1TFc3E5uDaGmtGZajynZyEvgQQnqhgThIA%2BHbv52nK2LcYSgLyhczfq714Zlb8TMDq9X7Dj9H0kKz0Fa%2FYecOmWkGqUTw1KF%2FHNRE%2FZHQptlJTzB4r4khlSa7TSkq4HIGzZPfXekOQCmEa1fsif5BDdPcLor30z8E78yvdDdgQOf2OIUcdhcxE3WH4dyO2uivBMZ8nq7iAIf%2FoqC%2BxbbraXflEeM%2BB%2BMJO82wEE4gQ6LsnlZAR9XQyipNTdZncsKD84ZFwRAhUcdzJLgA5e85%2FauZncfV0RyQVQyLZSV4wKvyZkqs%2F4T%2FXBCNWRUsdD6oBKKSjp6PE615iIBHaEorWXwwp%2BKmwQY6pgF0Dqz4ixb9MTn3M7%2Fh6Bv702GL3gb%2BCFgqejkQIso4b%2BmHJO112wIUsYTYbXnZHgOw5N8mwMAU4Qb1loHZzqdqzKCir9LVgEHMRBU5JpI1tqZ9gOULVq1fqI3uyXfuYT6T9L626O1KUcEkZMYM00%2Bt7Wq6M0IMoK1BuiJaDVJ9EXNI%2BtRkSjCnf3eOFa4cZFwtupkLAYHbFwMHY8MzWLA6yvT7gZWj&X-Amz-Signature=0dc9358bb8ebf8299d3c752d6c93c3f9d917f4f46acd0afbfab1e52f74cea511&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677P2X5WL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T110245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZVw74Jk2e1w%2BzC37exHQ%2BrgRCHmgbWzmjd%2FaE6WubwAiAdHNdROsyRrWWNDXfQ2weRQHe90xPTMeQOLfaoLDoN4yr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM%2BlciV8HFh6FRxV%2FtKtwD0Q3Nv%2FQ38KhDACeE34daFocJKzfJUj4DPSVRiIheOQy8MemUM9gin%2FFvPoCm4WphByeb4b47p7BboX23nth1MOzbIXHsiTVTHUcuXIPPkiinrwEL%2BOmh009MuDUmsWilCD0JCOHR2OukUjTksA8DtINPTg6AgSI3mp48awqiTh1nH1kAYa9ozrqRZc0Cwh2vPzzxM3XAdrGB9KalKMmjEDy0Z00mukkwr7Gg5B31efbQGMsTiyGejTJU%2Bj6AaA%2FwTaK%2FzzktRwG6k0wp1o66Zlhp2ayOMZX%2FGkM1TFc3E5uDaGmtGZajynZyEvgQQnqhgThIA%2BHbv52nK2LcYSgLyhczfq714Zlb8TMDq9X7Dj9H0kKz0Fa%2FYecOmWkGqUTw1KF%2FHNRE%2FZHQptlJTzB4r4khlSa7TSkq4HIGzZPfXekOQCmEa1fsif5BDdPcLor30z8E78yvdDdgQOf2OIUcdhcxE3WH4dyO2uivBMZ8nq7iAIf%2FoqC%2BxbbraXflEeM%2BB%2BMJO82wEE4gQ6LsnlZAR9XQyipNTdZncsKD84ZFwRAhUcdzJLgA5e85%2FauZncfV0RyQVQyLZSV4wKvyZkqs%2F4T%2FXBCNWRUsdD6oBKKSjp6PE615iIBHaEorWXwwp%2BKmwQY6pgF0Dqz4ixb9MTn3M7%2Fh6Bv702GL3gb%2BCFgqejkQIso4b%2BmHJO112wIUsYTYbXnZHgOw5N8mwMAU4Qb1loHZzqdqzKCir9LVgEHMRBU5JpI1tqZ9gOULVq1fqI3uyXfuYT6T9L626O1KUcEkZMYM00%2Bt7Wq6M0IMoK1BuiJaDVJ9EXNI%2BtRkSjCnf3eOFa4cZFwtupkLAYHbFwMHY8MzWLA6yvT7gZWj&X-Amz-Signature=c5b168c4f8ab4c25e90c9008260debd0becca010a1c5020b80f0f755baedc1c3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677P2X5WL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T110244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZVw74Jk2e1w%2BzC37exHQ%2BrgRCHmgbWzmjd%2FaE6WubwAiAdHNdROsyRrWWNDXfQ2weRQHe90xPTMeQOLfaoLDoN4yr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM%2BlciV8HFh6FRxV%2FtKtwD0Q3Nv%2FQ38KhDACeE34daFocJKzfJUj4DPSVRiIheOQy8MemUM9gin%2FFvPoCm4WphByeb4b47p7BboX23nth1MOzbIXHsiTVTHUcuXIPPkiinrwEL%2BOmh009MuDUmsWilCD0JCOHR2OukUjTksA8DtINPTg6AgSI3mp48awqiTh1nH1kAYa9ozrqRZc0Cwh2vPzzxM3XAdrGB9KalKMmjEDy0Z00mukkwr7Gg5B31efbQGMsTiyGejTJU%2Bj6AaA%2FwTaK%2FzzktRwG6k0wp1o66Zlhp2ayOMZX%2FGkM1TFc3E5uDaGmtGZajynZyEvgQQnqhgThIA%2BHbv52nK2LcYSgLyhczfq714Zlb8TMDq9X7Dj9H0kKz0Fa%2FYecOmWkGqUTw1KF%2FHNRE%2FZHQptlJTzB4r4khlSa7TSkq4HIGzZPfXekOQCmEa1fsif5BDdPcLor30z8E78yvdDdgQOf2OIUcdhcxE3WH4dyO2uivBMZ8nq7iAIf%2FoqC%2BxbbraXflEeM%2BB%2BMJO82wEE4gQ6LsnlZAR9XQyipNTdZncsKD84ZFwRAhUcdzJLgA5e85%2FauZncfV0RyQVQyLZSV4wKvyZkqs%2F4T%2FXBCNWRUsdD6oBKKSjp6PE615iIBHaEorWXwwp%2BKmwQY6pgF0Dqz4ixb9MTn3M7%2Fh6Bv702GL3gb%2BCFgqejkQIso4b%2BmHJO112wIUsYTYbXnZHgOw5N8mwMAU4Qb1loHZzqdqzKCir9LVgEHMRBU5JpI1tqZ9gOULVq1fqI3uyXfuYT6T9L626O1KUcEkZMYM00%2Bt7Wq6M0IMoK1BuiJaDVJ9EXNI%2BtRkSjCnf3eOFa4cZFwtupkLAYHbFwMHY8MzWLA6yvT7gZWj&X-Amz-Signature=6b47c211cc3a178e584f34c0900dbe234807253fe7e4d3385409e3dfc00282b2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677P2X5WL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T110245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZVw74Jk2e1w%2BzC37exHQ%2BrgRCHmgbWzmjd%2FaE6WubwAiAdHNdROsyRrWWNDXfQ2weRQHe90xPTMeQOLfaoLDoN4yr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM%2BlciV8HFh6FRxV%2FtKtwD0Q3Nv%2FQ38KhDACeE34daFocJKzfJUj4DPSVRiIheOQy8MemUM9gin%2FFvPoCm4WphByeb4b47p7BboX23nth1MOzbIXHsiTVTHUcuXIPPkiinrwEL%2BOmh009MuDUmsWilCD0JCOHR2OukUjTksA8DtINPTg6AgSI3mp48awqiTh1nH1kAYa9ozrqRZc0Cwh2vPzzxM3XAdrGB9KalKMmjEDy0Z00mukkwr7Gg5B31efbQGMsTiyGejTJU%2Bj6AaA%2FwTaK%2FzzktRwG6k0wp1o66Zlhp2ayOMZX%2FGkM1TFc3E5uDaGmtGZajynZyEvgQQnqhgThIA%2BHbv52nK2LcYSgLyhczfq714Zlb8TMDq9X7Dj9H0kKz0Fa%2FYecOmWkGqUTw1KF%2FHNRE%2FZHQptlJTzB4r4khlSa7TSkq4HIGzZPfXekOQCmEa1fsif5BDdPcLor30z8E78yvdDdgQOf2OIUcdhcxE3WH4dyO2uivBMZ8nq7iAIf%2FoqC%2BxbbraXflEeM%2BB%2BMJO82wEE4gQ6LsnlZAR9XQyipNTdZncsKD84ZFwRAhUcdzJLgA5e85%2FauZncfV0RyQVQyLZSV4wKvyZkqs%2F4T%2FXBCNWRUsdD6oBKKSjp6PE615iIBHaEorWXwwp%2BKmwQY6pgF0Dqz4ixb9MTn3M7%2Fh6Bv702GL3gb%2BCFgqejkQIso4b%2BmHJO112wIUsYTYbXnZHgOw5N8mwMAU4Qb1loHZzqdqzKCir9LVgEHMRBU5JpI1tqZ9gOULVq1fqI3uyXfuYT6T9L626O1KUcEkZMYM00%2Bt7Wq6M0IMoK1BuiJaDVJ9EXNI%2BtRkSjCnf3eOFa4cZFwtupkLAYHbFwMHY8MzWLA6yvT7gZWj&X-Amz-Signature=1b4c7928e5952ccbe71d250b60aa4328a742bec72bdef1d557f5c329488f6635&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677P2X5WL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T110244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZVw74Jk2e1w%2BzC37exHQ%2BrgRCHmgbWzmjd%2FaE6WubwAiAdHNdROsyRrWWNDXfQ2weRQHe90xPTMeQOLfaoLDoN4yr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM%2BlciV8HFh6FRxV%2FtKtwD0Q3Nv%2FQ38KhDACeE34daFocJKzfJUj4DPSVRiIheOQy8MemUM9gin%2FFvPoCm4WphByeb4b47p7BboX23nth1MOzbIXHsiTVTHUcuXIPPkiinrwEL%2BOmh009MuDUmsWilCD0JCOHR2OukUjTksA8DtINPTg6AgSI3mp48awqiTh1nH1kAYa9ozrqRZc0Cwh2vPzzxM3XAdrGB9KalKMmjEDy0Z00mukkwr7Gg5B31efbQGMsTiyGejTJU%2Bj6AaA%2FwTaK%2FzzktRwG6k0wp1o66Zlhp2ayOMZX%2FGkM1TFc3E5uDaGmtGZajynZyEvgQQnqhgThIA%2BHbv52nK2LcYSgLyhczfq714Zlb8TMDq9X7Dj9H0kKz0Fa%2FYecOmWkGqUTw1KF%2FHNRE%2FZHQptlJTzB4r4khlSa7TSkq4HIGzZPfXekOQCmEa1fsif5BDdPcLor30z8E78yvdDdgQOf2OIUcdhcxE3WH4dyO2uivBMZ8nq7iAIf%2FoqC%2BxbbraXflEeM%2BB%2BMJO82wEE4gQ6LsnlZAR9XQyipNTdZncsKD84ZFwRAhUcdzJLgA5e85%2FauZncfV0RyQVQyLZSV4wKvyZkqs%2F4T%2FXBCNWRUsdD6oBKKSjp6PE615iIBHaEorWXwwp%2BKmwQY6pgF0Dqz4ixb9MTn3M7%2Fh6Bv702GL3gb%2BCFgqejkQIso4b%2BmHJO112wIUsYTYbXnZHgOw5N8mwMAU4Qb1loHZzqdqzKCir9LVgEHMRBU5JpI1tqZ9gOULVq1fqI3uyXfuYT6T9L626O1KUcEkZMYM00%2Bt7Wq6M0IMoK1BuiJaDVJ9EXNI%2BtRkSjCnf3eOFa4cZFwtupkLAYHbFwMHY8MzWLA6yvT7gZWj&X-Amz-Signature=4f64cc0b7356b8f9deb3d45ae282705f72eddf0b1f6cdc67358f2a35d0e3fec5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677P2X5WL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T110244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZVw74Jk2e1w%2BzC37exHQ%2BrgRCHmgbWzmjd%2FaE6WubwAiAdHNdROsyRrWWNDXfQ2weRQHe90xPTMeQOLfaoLDoN4yr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM%2BlciV8HFh6FRxV%2FtKtwD0Q3Nv%2FQ38KhDACeE34daFocJKzfJUj4DPSVRiIheOQy8MemUM9gin%2FFvPoCm4WphByeb4b47p7BboX23nth1MOzbIXHsiTVTHUcuXIPPkiinrwEL%2BOmh009MuDUmsWilCD0JCOHR2OukUjTksA8DtINPTg6AgSI3mp48awqiTh1nH1kAYa9ozrqRZc0Cwh2vPzzxM3XAdrGB9KalKMmjEDy0Z00mukkwr7Gg5B31efbQGMsTiyGejTJU%2Bj6AaA%2FwTaK%2FzzktRwG6k0wp1o66Zlhp2ayOMZX%2FGkM1TFc3E5uDaGmtGZajynZyEvgQQnqhgThIA%2BHbv52nK2LcYSgLyhczfq714Zlb8TMDq9X7Dj9H0kKz0Fa%2FYecOmWkGqUTw1KF%2FHNRE%2FZHQptlJTzB4r4khlSa7TSkq4HIGzZPfXekOQCmEa1fsif5BDdPcLor30z8E78yvdDdgQOf2OIUcdhcxE3WH4dyO2uivBMZ8nq7iAIf%2FoqC%2BxbbraXflEeM%2BB%2BMJO82wEE4gQ6LsnlZAR9XQyipNTdZncsKD84ZFwRAhUcdzJLgA5e85%2FauZncfV0RyQVQyLZSV4wKvyZkqs%2F4T%2FXBCNWRUsdD6oBKKSjp6PE615iIBHaEorWXwwp%2BKmwQY6pgF0Dqz4ixb9MTn3M7%2Fh6Bv702GL3gb%2BCFgqejkQIso4b%2BmHJO112wIUsYTYbXnZHgOw5N8mwMAU4Qb1loHZzqdqzKCir9LVgEHMRBU5JpI1tqZ9gOULVq1fqI3uyXfuYT6T9L626O1KUcEkZMYM00%2Bt7Wq6M0IMoK1BuiJaDVJ9EXNI%2BtRkSjCnf3eOFa4cZFwtupkLAYHbFwMHY8MzWLA6yvT7gZWj&X-Amz-Signature=5a2468af24e9ec6c16530e1cef30103b55990af3dda4ff9da5742c00c6ef8338&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677P2X5WL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T110245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZVw74Jk2e1w%2BzC37exHQ%2BrgRCHmgbWzmjd%2FaE6WubwAiAdHNdROsyRrWWNDXfQ2weRQHe90xPTMeQOLfaoLDoN4yr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM%2BlciV8HFh6FRxV%2FtKtwD0Q3Nv%2FQ38KhDACeE34daFocJKzfJUj4DPSVRiIheOQy8MemUM9gin%2FFvPoCm4WphByeb4b47p7BboX23nth1MOzbIXHsiTVTHUcuXIPPkiinrwEL%2BOmh009MuDUmsWilCD0JCOHR2OukUjTksA8DtINPTg6AgSI3mp48awqiTh1nH1kAYa9ozrqRZc0Cwh2vPzzxM3XAdrGB9KalKMmjEDy0Z00mukkwr7Gg5B31efbQGMsTiyGejTJU%2Bj6AaA%2FwTaK%2FzzktRwG6k0wp1o66Zlhp2ayOMZX%2FGkM1TFc3E5uDaGmtGZajynZyEvgQQnqhgThIA%2BHbv52nK2LcYSgLyhczfq714Zlb8TMDq9X7Dj9H0kKz0Fa%2FYecOmWkGqUTw1KF%2FHNRE%2FZHQptlJTzB4r4khlSa7TSkq4HIGzZPfXekOQCmEa1fsif5BDdPcLor30z8E78yvdDdgQOf2OIUcdhcxE3WH4dyO2uivBMZ8nq7iAIf%2FoqC%2BxbbraXflEeM%2BB%2BMJO82wEE4gQ6LsnlZAR9XQyipNTdZncsKD84ZFwRAhUcdzJLgA5e85%2FauZncfV0RyQVQyLZSV4wKvyZkqs%2F4T%2FXBCNWRUsdD6oBKKSjp6PE615iIBHaEorWXwwp%2BKmwQY6pgF0Dqz4ixb9MTn3M7%2Fh6Bv702GL3gb%2BCFgqejkQIso4b%2BmHJO112wIUsYTYbXnZHgOw5N8mwMAU4Qb1loHZzqdqzKCir9LVgEHMRBU5JpI1tqZ9gOULVq1fqI3uyXfuYT6T9L626O1KUcEkZMYM00%2Bt7Wq6M0IMoK1BuiJaDVJ9EXNI%2BtRkSjCnf3eOFa4cZFwtupkLAYHbFwMHY8MzWLA6yvT7gZWj&X-Amz-Signature=38419a73cadb9e6a55e31b292d2f251b7a93d4f7b9992372111c0a9aa1ac87da&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677P2X5WL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T110244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZVw74Jk2e1w%2BzC37exHQ%2BrgRCHmgbWzmjd%2FaE6WubwAiAdHNdROsyRrWWNDXfQ2weRQHe90xPTMeQOLfaoLDoN4yr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM%2BlciV8HFh6FRxV%2FtKtwD0Q3Nv%2FQ38KhDACeE34daFocJKzfJUj4DPSVRiIheOQy8MemUM9gin%2FFvPoCm4WphByeb4b47p7BboX23nth1MOzbIXHsiTVTHUcuXIPPkiinrwEL%2BOmh009MuDUmsWilCD0JCOHR2OukUjTksA8DtINPTg6AgSI3mp48awqiTh1nH1kAYa9ozrqRZc0Cwh2vPzzxM3XAdrGB9KalKMmjEDy0Z00mukkwr7Gg5B31efbQGMsTiyGejTJU%2Bj6AaA%2FwTaK%2FzzktRwG6k0wp1o66Zlhp2ayOMZX%2FGkM1TFc3E5uDaGmtGZajynZyEvgQQnqhgThIA%2BHbv52nK2LcYSgLyhczfq714Zlb8TMDq9X7Dj9H0kKz0Fa%2FYecOmWkGqUTw1KF%2FHNRE%2FZHQptlJTzB4r4khlSa7TSkq4HIGzZPfXekOQCmEa1fsif5BDdPcLor30z8E78yvdDdgQOf2OIUcdhcxE3WH4dyO2uivBMZ8nq7iAIf%2FoqC%2BxbbraXflEeM%2BB%2BMJO82wEE4gQ6LsnlZAR9XQyipNTdZncsKD84ZFwRAhUcdzJLgA5e85%2FauZncfV0RyQVQyLZSV4wKvyZkqs%2F4T%2FXBCNWRUsdD6oBKKSjp6PE615iIBHaEorWXwwp%2BKmwQY6pgF0Dqz4ixb9MTn3M7%2Fh6Bv702GL3gb%2BCFgqejkQIso4b%2BmHJO112wIUsYTYbXnZHgOw5N8mwMAU4Qb1loHZzqdqzKCir9LVgEHMRBU5JpI1tqZ9gOULVq1fqI3uyXfuYT6T9L626O1KUcEkZMYM00%2Bt7Wq6M0IMoK1BuiJaDVJ9EXNI%2BtRkSjCnf3eOFa4cZFwtupkLAYHbFwMHY8MzWLA6yvT7gZWj&X-Amz-Signature=8ae49621ba2b8b9fbe55fb304dc298d40f8faa61ee44f4d32166003ad790ad91&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
