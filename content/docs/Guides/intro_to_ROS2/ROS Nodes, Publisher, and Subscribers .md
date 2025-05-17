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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBOINBHB%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuISbKwgQpGFvvfHQ1rnQCH8AV2qzLFV9rmh%2BUY09i7AiEA2p7kkZ3agbL3lOUo9i%2BIQtHFYW3zIwbh8q1%2FtB%2FdKPgq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIsI%2B1YuHbyp87BiEircA6loQ2F1oS06dU9xtQ8bxHwaLC7fvzZxjHgsKc7%2FqYfVJrr%2B1gUybkEitmI1wMb%2F%2B5bCEiFaBHmWfKgI2Vdp%2BNLqiqLXYHy7GmGSXdXA%2B4Vwo2fm8J%2BtncB1NZHDWJStZGZ3p9igeh37wZKZY3LkIyu3zRh4sik0BnHkniR7km2FhgttBuaYEhOd70XFkC1w3J2A3iNgfTa2PfBMN5m0opxhLGtNw1PF8TRNidDEREwn8xYBldfvt9w0y9of4upXca5Qd5C463njWIYahjbi5%2BDsZXXt4q0QjnnB1HxDoXPzleOIvhi0xXaviezd4yY7Y3%2FEaJyD1ed9bqycFINmzs1zSvoS7Urk1Bq3lNKwuaOFn%2BL9QGrneVknoO5rAjihAILBreOYLOlLnfZzBI0wbvwShCsOYP3ByZFbaRpXIXbDVZ9AExD8qIyCUd5U3c8fJaWn%2B58wMMBWQrEq8iJfw%2FbEEdsgsKzAUepD0O2zgvJ799iRwLrTkzAPBfzYEUKhprnmqz4%2BLZs4DsvoXoCnrCPg5vdyKrsaF9J%2FOHrRF8rdGL10yAbOaGByo6eSzp4pSU5m%2BN9sxonXg7GBPuoHvYXcP6DEI7CYXKOJvAXzPDoDbwm9ZebUzT5esAbTMM%2B2osEGOqUB8wNx2j%2BSqmc1H%2BBetJTcKe%2BoU23UrnaDVj81WVzMcfiri1Xti8m9%2Fgd9VeIXqUBNns4626ZJB3R%2BL7jTST5Sf%2Bsw8b02rx5KuL6rJlz2TBPHnkiJ4y9kuSJm4sFE%2BRE6xXqG4uBRh7vp%2FTp%2BdMLJXibP35ab97PKe%2F3%2F6romE4lOLlToIpb1bTh5RRmjWA%2BLoC6z3K1bAkBWQLoQAiOJB%2FUodJ7O&X-Amz-Signature=df4b5d6ddf229656015e5c9f6312f74b7f8956796c0c84b3a1c3e6e066f54db8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBOINBHB%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuISbKwgQpGFvvfHQ1rnQCH8AV2qzLFV9rmh%2BUY09i7AiEA2p7kkZ3agbL3lOUo9i%2BIQtHFYW3zIwbh8q1%2FtB%2FdKPgq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIsI%2B1YuHbyp87BiEircA6loQ2F1oS06dU9xtQ8bxHwaLC7fvzZxjHgsKc7%2FqYfVJrr%2B1gUybkEitmI1wMb%2F%2B5bCEiFaBHmWfKgI2Vdp%2BNLqiqLXYHy7GmGSXdXA%2B4Vwo2fm8J%2BtncB1NZHDWJStZGZ3p9igeh37wZKZY3LkIyu3zRh4sik0BnHkniR7km2FhgttBuaYEhOd70XFkC1w3J2A3iNgfTa2PfBMN5m0opxhLGtNw1PF8TRNidDEREwn8xYBldfvt9w0y9of4upXca5Qd5C463njWIYahjbi5%2BDsZXXt4q0QjnnB1HxDoXPzleOIvhi0xXaviezd4yY7Y3%2FEaJyD1ed9bqycFINmzs1zSvoS7Urk1Bq3lNKwuaOFn%2BL9QGrneVknoO5rAjihAILBreOYLOlLnfZzBI0wbvwShCsOYP3ByZFbaRpXIXbDVZ9AExD8qIyCUd5U3c8fJaWn%2B58wMMBWQrEq8iJfw%2FbEEdsgsKzAUepD0O2zgvJ799iRwLrTkzAPBfzYEUKhprnmqz4%2BLZs4DsvoXoCnrCPg5vdyKrsaF9J%2FOHrRF8rdGL10yAbOaGByo6eSzp4pSU5m%2BN9sxonXg7GBPuoHvYXcP6DEI7CYXKOJvAXzPDoDbwm9ZebUzT5esAbTMM%2B2osEGOqUB8wNx2j%2BSqmc1H%2BBetJTcKe%2BoU23UrnaDVj81WVzMcfiri1Xti8m9%2Fgd9VeIXqUBNns4626ZJB3R%2BL7jTST5Sf%2Bsw8b02rx5KuL6rJlz2TBPHnkiJ4y9kuSJm4sFE%2BRE6xXqG4uBRh7vp%2FTp%2BdMLJXibP35ab97PKe%2F3%2F6romE4lOLlToIpb1bTh5RRmjWA%2BLoC6z3K1bAkBWQLoQAiOJB%2FUodJ7O&X-Amz-Signature=8f2142b2b45e54c8c41ae97a5b532efa6cbdfd7396122c264b28b00caed28efd&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBOINBHB%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuISbKwgQpGFvvfHQ1rnQCH8AV2qzLFV9rmh%2BUY09i7AiEA2p7kkZ3agbL3lOUo9i%2BIQtHFYW3zIwbh8q1%2FtB%2FdKPgq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIsI%2B1YuHbyp87BiEircA6loQ2F1oS06dU9xtQ8bxHwaLC7fvzZxjHgsKc7%2FqYfVJrr%2B1gUybkEitmI1wMb%2F%2B5bCEiFaBHmWfKgI2Vdp%2BNLqiqLXYHy7GmGSXdXA%2B4Vwo2fm8J%2BtncB1NZHDWJStZGZ3p9igeh37wZKZY3LkIyu3zRh4sik0BnHkniR7km2FhgttBuaYEhOd70XFkC1w3J2A3iNgfTa2PfBMN5m0opxhLGtNw1PF8TRNidDEREwn8xYBldfvt9w0y9of4upXca5Qd5C463njWIYahjbi5%2BDsZXXt4q0QjnnB1HxDoXPzleOIvhi0xXaviezd4yY7Y3%2FEaJyD1ed9bqycFINmzs1zSvoS7Urk1Bq3lNKwuaOFn%2BL9QGrneVknoO5rAjihAILBreOYLOlLnfZzBI0wbvwShCsOYP3ByZFbaRpXIXbDVZ9AExD8qIyCUd5U3c8fJaWn%2B58wMMBWQrEq8iJfw%2FbEEdsgsKzAUepD0O2zgvJ799iRwLrTkzAPBfzYEUKhprnmqz4%2BLZs4DsvoXoCnrCPg5vdyKrsaF9J%2FOHrRF8rdGL10yAbOaGByo6eSzp4pSU5m%2BN9sxonXg7GBPuoHvYXcP6DEI7CYXKOJvAXzPDoDbwm9ZebUzT5esAbTMM%2B2osEGOqUB8wNx2j%2BSqmc1H%2BBetJTcKe%2BoU23UrnaDVj81WVzMcfiri1Xti8m9%2Fgd9VeIXqUBNns4626ZJB3R%2BL7jTST5Sf%2Bsw8b02rx5KuL6rJlz2TBPHnkiJ4y9kuSJm4sFE%2BRE6xXqG4uBRh7vp%2FTp%2BdMLJXibP35ab97PKe%2F3%2F6romE4lOLlToIpb1bTh5RRmjWA%2BLoC6z3K1bAkBWQLoQAiOJB%2FUodJ7O&X-Amz-Signature=d721d26f619e6720445de73c872903a300520a4c81d44e2cc3dd806f69beaf24&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBOINBHB%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuISbKwgQpGFvvfHQ1rnQCH8AV2qzLFV9rmh%2BUY09i7AiEA2p7kkZ3agbL3lOUo9i%2BIQtHFYW3zIwbh8q1%2FtB%2FdKPgq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIsI%2B1YuHbyp87BiEircA6loQ2F1oS06dU9xtQ8bxHwaLC7fvzZxjHgsKc7%2FqYfVJrr%2B1gUybkEitmI1wMb%2F%2B5bCEiFaBHmWfKgI2Vdp%2BNLqiqLXYHy7GmGSXdXA%2B4Vwo2fm8J%2BtncB1NZHDWJStZGZ3p9igeh37wZKZY3LkIyu3zRh4sik0BnHkniR7km2FhgttBuaYEhOd70XFkC1w3J2A3iNgfTa2PfBMN5m0opxhLGtNw1PF8TRNidDEREwn8xYBldfvt9w0y9of4upXca5Qd5C463njWIYahjbi5%2BDsZXXt4q0QjnnB1HxDoXPzleOIvhi0xXaviezd4yY7Y3%2FEaJyD1ed9bqycFINmzs1zSvoS7Urk1Bq3lNKwuaOFn%2BL9QGrneVknoO5rAjihAILBreOYLOlLnfZzBI0wbvwShCsOYP3ByZFbaRpXIXbDVZ9AExD8qIyCUd5U3c8fJaWn%2B58wMMBWQrEq8iJfw%2FbEEdsgsKzAUepD0O2zgvJ799iRwLrTkzAPBfzYEUKhprnmqz4%2BLZs4DsvoXoCnrCPg5vdyKrsaF9J%2FOHrRF8rdGL10yAbOaGByo6eSzp4pSU5m%2BN9sxonXg7GBPuoHvYXcP6DEI7CYXKOJvAXzPDoDbwm9ZebUzT5esAbTMM%2B2osEGOqUB8wNx2j%2BSqmc1H%2BBetJTcKe%2BoU23UrnaDVj81WVzMcfiri1Xti8m9%2Fgd9VeIXqUBNns4626ZJB3R%2BL7jTST5Sf%2Bsw8b02rx5KuL6rJlz2TBPHnkiJ4y9kuSJm4sFE%2BRE6xXqG4uBRh7vp%2FTp%2BdMLJXibP35ab97PKe%2F3%2F6romE4lOLlToIpb1bTh5RRmjWA%2BLoC6z3K1bAkBWQLoQAiOJB%2FUodJ7O&X-Amz-Signature=d43d334337ceda5b033efa983b13812c9bf469db60712242e0403b974e101eec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBOINBHB%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuISbKwgQpGFvvfHQ1rnQCH8AV2qzLFV9rmh%2BUY09i7AiEA2p7kkZ3agbL3lOUo9i%2BIQtHFYW3zIwbh8q1%2FtB%2FdKPgq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIsI%2B1YuHbyp87BiEircA6loQ2F1oS06dU9xtQ8bxHwaLC7fvzZxjHgsKc7%2FqYfVJrr%2B1gUybkEitmI1wMb%2F%2B5bCEiFaBHmWfKgI2Vdp%2BNLqiqLXYHy7GmGSXdXA%2B4Vwo2fm8J%2BtncB1NZHDWJStZGZ3p9igeh37wZKZY3LkIyu3zRh4sik0BnHkniR7km2FhgttBuaYEhOd70XFkC1w3J2A3iNgfTa2PfBMN5m0opxhLGtNw1PF8TRNidDEREwn8xYBldfvt9w0y9of4upXca5Qd5C463njWIYahjbi5%2BDsZXXt4q0QjnnB1HxDoXPzleOIvhi0xXaviezd4yY7Y3%2FEaJyD1ed9bqycFINmzs1zSvoS7Urk1Bq3lNKwuaOFn%2BL9QGrneVknoO5rAjihAILBreOYLOlLnfZzBI0wbvwShCsOYP3ByZFbaRpXIXbDVZ9AExD8qIyCUd5U3c8fJaWn%2B58wMMBWQrEq8iJfw%2FbEEdsgsKzAUepD0O2zgvJ799iRwLrTkzAPBfzYEUKhprnmqz4%2BLZs4DsvoXoCnrCPg5vdyKrsaF9J%2FOHrRF8rdGL10yAbOaGByo6eSzp4pSU5m%2BN9sxonXg7GBPuoHvYXcP6DEI7CYXKOJvAXzPDoDbwm9ZebUzT5esAbTMM%2B2osEGOqUB8wNx2j%2BSqmc1H%2BBetJTcKe%2BoU23UrnaDVj81WVzMcfiri1Xti8m9%2Fgd9VeIXqUBNns4626ZJB3R%2BL7jTST5Sf%2Bsw8b02rx5KuL6rJlz2TBPHnkiJ4y9kuSJm4sFE%2BRE6xXqG4uBRh7vp%2FTp%2BdMLJXibP35ab97PKe%2F3%2F6romE4lOLlToIpb1bTh5RRmjWA%2BLoC6z3K1bAkBWQLoQAiOJB%2FUodJ7O&X-Amz-Signature=fda2bbfe70a070df4c9a91181a39a2d89ed8ed5e9c1190922f0df710d322e40d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBOINBHB%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuISbKwgQpGFvvfHQ1rnQCH8AV2qzLFV9rmh%2BUY09i7AiEA2p7kkZ3agbL3lOUo9i%2BIQtHFYW3zIwbh8q1%2FtB%2FdKPgq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIsI%2B1YuHbyp87BiEircA6loQ2F1oS06dU9xtQ8bxHwaLC7fvzZxjHgsKc7%2FqYfVJrr%2B1gUybkEitmI1wMb%2F%2B5bCEiFaBHmWfKgI2Vdp%2BNLqiqLXYHy7GmGSXdXA%2B4Vwo2fm8J%2BtncB1NZHDWJStZGZ3p9igeh37wZKZY3LkIyu3zRh4sik0BnHkniR7km2FhgttBuaYEhOd70XFkC1w3J2A3iNgfTa2PfBMN5m0opxhLGtNw1PF8TRNidDEREwn8xYBldfvt9w0y9of4upXca5Qd5C463njWIYahjbi5%2BDsZXXt4q0QjnnB1HxDoXPzleOIvhi0xXaviezd4yY7Y3%2FEaJyD1ed9bqycFINmzs1zSvoS7Urk1Bq3lNKwuaOFn%2BL9QGrneVknoO5rAjihAILBreOYLOlLnfZzBI0wbvwShCsOYP3ByZFbaRpXIXbDVZ9AExD8qIyCUd5U3c8fJaWn%2B58wMMBWQrEq8iJfw%2FbEEdsgsKzAUepD0O2zgvJ799iRwLrTkzAPBfzYEUKhprnmqz4%2BLZs4DsvoXoCnrCPg5vdyKrsaF9J%2FOHrRF8rdGL10yAbOaGByo6eSzp4pSU5m%2BN9sxonXg7GBPuoHvYXcP6DEI7CYXKOJvAXzPDoDbwm9ZebUzT5esAbTMM%2B2osEGOqUB8wNx2j%2BSqmc1H%2BBetJTcKe%2BoU23UrnaDVj81WVzMcfiri1Xti8m9%2Fgd9VeIXqUBNns4626ZJB3R%2BL7jTST5Sf%2Bsw8b02rx5KuL6rJlz2TBPHnkiJ4y9kuSJm4sFE%2BRE6xXqG4uBRh7vp%2FTp%2BdMLJXibP35ab97PKe%2F3%2F6romE4lOLlToIpb1bTh5RRmjWA%2BLoC6z3K1bAkBWQLoQAiOJB%2FUodJ7O&X-Amz-Signature=2d1ea21e6d73cce93e512f9ebd5cc0da4f65cb4ce96bbf223dc88287f0832f81&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBOINBHB%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuISbKwgQpGFvvfHQ1rnQCH8AV2qzLFV9rmh%2BUY09i7AiEA2p7kkZ3agbL3lOUo9i%2BIQtHFYW3zIwbh8q1%2FtB%2FdKPgq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIsI%2B1YuHbyp87BiEircA6loQ2F1oS06dU9xtQ8bxHwaLC7fvzZxjHgsKc7%2FqYfVJrr%2B1gUybkEitmI1wMb%2F%2B5bCEiFaBHmWfKgI2Vdp%2BNLqiqLXYHy7GmGSXdXA%2B4Vwo2fm8J%2BtncB1NZHDWJStZGZ3p9igeh37wZKZY3LkIyu3zRh4sik0BnHkniR7km2FhgttBuaYEhOd70XFkC1w3J2A3iNgfTa2PfBMN5m0opxhLGtNw1PF8TRNidDEREwn8xYBldfvt9w0y9of4upXca5Qd5C463njWIYahjbi5%2BDsZXXt4q0QjnnB1HxDoXPzleOIvhi0xXaviezd4yY7Y3%2FEaJyD1ed9bqycFINmzs1zSvoS7Urk1Bq3lNKwuaOFn%2BL9QGrneVknoO5rAjihAILBreOYLOlLnfZzBI0wbvwShCsOYP3ByZFbaRpXIXbDVZ9AExD8qIyCUd5U3c8fJaWn%2B58wMMBWQrEq8iJfw%2FbEEdsgsKzAUepD0O2zgvJ799iRwLrTkzAPBfzYEUKhprnmqz4%2BLZs4DsvoXoCnrCPg5vdyKrsaF9J%2FOHrRF8rdGL10yAbOaGByo6eSzp4pSU5m%2BN9sxonXg7GBPuoHvYXcP6DEI7CYXKOJvAXzPDoDbwm9ZebUzT5esAbTMM%2B2osEGOqUB8wNx2j%2BSqmc1H%2BBetJTcKe%2BoU23UrnaDVj81WVzMcfiri1Xti8m9%2Fgd9VeIXqUBNns4626ZJB3R%2BL7jTST5Sf%2Bsw8b02rx5KuL6rJlz2TBPHnkiJ4y9kuSJm4sFE%2BRE6xXqG4uBRh7vp%2FTp%2BdMLJXibP35ab97PKe%2F3%2F6romE4lOLlToIpb1bTh5RRmjWA%2BLoC6z3K1bAkBWQLoQAiOJB%2FUodJ7O&X-Amz-Signature=a7b1673258a732d97bbfca1ff88888c35445839c38abfd154cef5f4b877549b7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBOINBHB%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuISbKwgQpGFvvfHQ1rnQCH8AV2qzLFV9rmh%2BUY09i7AiEA2p7kkZ3agbL3lOUo9i%2BIQtHFYW3zIwbh8q1%2FtB%2FdKPgq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIsI%2B1YuHbyp87BiEircA6loQ2F1oS06dU9xtQ8bxHwaLC7fvzZxjHgsKc7%2FqYfVJrr%2B1gUybkEitmI1wMb%2F%2B5bCEiFaBHmWfKgI2Vdp%2BNLqiqLXYHy7GmGSXdXA%2B4Vwo2fm8J%2BtncB1NZHDWJStZGZ3p9igeh37wZKZY3LkIyu3zRh4sik0BnHkniR7km2FhgttBuaYEhOd70XFkC1w3J2A3iNgfTa2PfBMN5m0opxhLGtNw1PF8TRNidDEREwn8xYBldfvt9w0y9of4upXca5Qd5C463njWIYahjbi5%2BDsZXXt4q0QjnnB1HxDoXPzleOIvhi0xXaviezd4yY7Y3%2FEaJyD1ed9bqycFINmzs1zSvoS7Urk1Bq3lNKwuaOFn%2BL9QGrneVknoO5rAjihAILBreOYLOlLnfZzBI0wbvwShCsOYP3ByZFbaRpXIXbDVZ9AExD8qIyCUd5U3c8fJaWn%2B58wMMBWQrEq8iJfw%2FbEEdsgsKzAUepD0O2zgvJ799iRwLrTkzAPBfzYEUKhprnmqz4%2BLZs4DsvoXoCnrCPg5vdyKrsaF9J%2FOHrRF8rdGL10yAbOaGByo6eSzp4pSU5m%2BN9sxonXg7GBPuoHvYXcP6DEI7CYXKOJvAXzPDoDbwm9ZebUzT5esAbTMM%2B2osEGOqUB8wNx2j%2BSqmc1H%2BBetJTcKe%2BoU23UrnaDVj81WVzMcfiri1Xti8m9%2Fgd9VeIXqUBNns4626ZJB3R%2BL7jTST5Sf%2Bsw8b02rx5KuL6rJlz2TBPHnkiJ4y9kuSJm4sFE%2BRE6xXqG4uBRh7vp%2FTp%2BdMLJXibP35ab97PKe%2F3%2F6romE4lOLlToIpb1bTh5RRmjWA%2BLoC6z3K1bAkBWQLoQAiOJB%2FUodJ7O&X-Amz-Signature=7171e389b3e0f938c28465ef2f5c28ddc8a5a46f7cfd89176318bc3a8bb8aaca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
