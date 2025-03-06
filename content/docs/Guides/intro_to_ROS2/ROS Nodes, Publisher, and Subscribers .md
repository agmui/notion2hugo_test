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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NSQENHH%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdgNgyuecJec%2BHab0Vd1bpwzSsXA74L%2FSrwxVNMzClTgIgODhEydzrVEmSx6qEhcXhfJ0f6ta49GALFrlSAi90kCQq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDFGPFDKuN9mVs5SDeCrcAy8as8qpVIfAr9cbJiVsc1TjACWJdmNBEDeOLq6D6ndpJi1hZfb5MJkXpqiGZW%2B%2BauRzxVJlJ%2Bj97Jf0FQ1kqphVsJutO8P1uJOLgtTRTC1c%2FsAMqKgOqVxsBst3eAdzs6sEajYlFUIZ8w7bNy407gq8MQ3KDJWmKbNBW548%2BGqQ3O5r1uBaTuAQa7DJmVaPUO16VxoK0nqMD%2BRK65Fqjh1fkSQ6kSoe%2BjqQFYkGbe%2B5y5orxWNRUujZZVQ8kdv5JnepvQivc0voXMliis2tksE8GpDjcYJsSDyn25PT2beHlOMuCeLLL9smLQbhWbN3b1WR6muzILaHW%2FqiaEkXvkIepjtOxpsGyt8E5XGj5Ya2pOuU3XyAy7ufeoP2AioqE3PWdfiIO%2F%2FNnbCzi8i5tC%2BekMIYgX4T74KlAUKRIBP1UoosYBnA10aj4uWHGCr%2FSU8XSQal3yCwvIr5a1fQ%2BiJaNxUi4gKiSBNpLQ9Vp8EWmH3qveQjPmQg4PWh9IsEVw73X6o58snGp1Fzk85PYscT1OidVZ5oak%2BGLxTuu4hT3nMQbM27pgx4N7ExSd%2BDgcX3bQ86lh58XEl7hAOSAtZzSrooMQCw2bi2Bu3iy00grefH1m08Qf1Z7p9CMKTxpr4GOqUB1dJi18A1egwYogd3eF7mmp7DTWwK9scqbMw2tMK16hyxEiQtmbvvPyu7xHZ2IeE0EWrWur78xbk5MYrTRsfn0YXAwaetQ%2Fqsh%2BlZrfquESTBys8UP3cX6L4dJzchwUL8RU3e5VxvQjEw9n86OWIINw1uTGCCsyEcmVLd8thinuaXHWkua08Lw8nKGkNuHBpzirQmoL%2Bt8ARfi5VcoOTQkCmuMUe%2F&X-Amz-Signature=f8e9d024909b23b4b96bcc2a03113b670cfe9ce1aa3b170e41e7bff5c87bc7a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NSQENHH%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdgNgyuecJec%2BHab0Vd1bpwzSsXA74L%2FSrwxVNMzClTgIgODhEydzrVEmSx6qEhcXhfJ0f6ta49GALFrlSAi90kCQq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDFGPFDKuN9mVs5SDeCrcAy8as8qpVIfAr9cbJiVsc1TjACWJdmNBEDeOLq6D6ndpJi1hZfb5MJkXpqiGZW%2B%2BauRzxVJlJ%2Bj97Jf0FQ1kqphVsJutO8P1uJOLgtTRTC1c%2FsAMqKgOqVxsBst3eAdzs6sEajYlFUIZ8w7bNy407gq8MQ3KDJWmKbNBW548%2BGqQ3O5r1uBaTuAQa7DJmVaPUO16VxoK0nqMD%2BRK65Fqjh1fkSQ6kSoe%2BjqQFYkGbe%2B5y5orxWNRUujZZVQ8kdv5JnepvQivc0voXMliis2tksE8GpDjcYJsSDyn25PT2beHlOMuCeLLL9smLQbhWbN3b1WR6muzILaHW%2FqiaEkXvkIepjtOxpsGyt8E5XGj5Ya2pOuU3XyAy7ufeoP2AioqE3PWdfiIO%2F%2FNnbCzi8i5tC%2BekMIYgX4T74KlAUKRIBP1UoosYBnA10aj4uWHGCr%2FSU8XSQal3yCwvIr5a1fQ%2BiJaNxUi4gKiSBNpLQ9Vp8EWmH3qveQjPmQg4PWh9IsEVw73X6o58snGp1Fzk85PYscT1OidVZ5oak%2BGLxTuu4hT3nMQbM27pgx4N7ExSd%2BDgcX3bQ86lh58XEl7hAOSAtZzSrooMQCw2bi2Bu3iy00grefH1m08Qf1Z7p9CMKTxpr4GOqUB1dJi18A1egwYogd3eF7mmp7DTWwK9scqbMw2tMK16hyxEiQtmbvvPyu7xHZ2IeE0EWrWur78xbk5MYrTRsfn0YXAwaetQ%2Fqsh%2BlZrfquESTBys8UP3cX6L4dJzchwUL8RU3e5VxvQjEw9n86OWIINw1uTGCCsyEcmVLd8thinuaXHWkua08Lw8nKGkNuHBpzirQmoL%2Bt8ARfi5VcoOTQkCmuMUe%2F&X-Amz-Signature=8086a1a5466331b9d0c00f7572efcfda5d704c8f13e187c3b2e15c7d09bfe8fc&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NSQENHH%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdgNgyuecJec%2BHab0Vd1bpwzSsXA74L%2FSrwxVNMzClTgIgODhEydzrVEmSx6qEhcXhfJ0f6ta49GALFrlSAi90kCQq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDFGPFDKuN9mVs5SDeCrcAy8as8qpVIfAr9cbJiVsc1TjACWJdmNBEDeOLq6D6ndpJi1hZfb5MJkXpqiGZW%2B%2BauRzxVJlJ%2Bj97Jf0FQ1kqphVsJutO8P1uJOLgtTRTC1c%2FsAMqKgOqVxsBst3eAdzs6sEajYlFUIZ8w7bNy407gq8MQ3KDJWmKbNBW548%2BGqQ3O5r1uBaTuAQa7DJmVaPUO16VxoK0nqMD%2BRK65Fqjh1fkSQ6kSoe%2BjqQFYkGbe%2B5y5orxWNRUujZZVQ8kdv5JnepvQivc0voXMliis2tksE8GpDjcYJsSDyn25PT2beHlOMuCeLLL9smLQbhWbN3b1WR6muzILaHW%2FqiaEkXvkIepjtOxpsGyt8E5XGj5Ya2pOuU3XyAy7ufeoP2AioqE3PWdfiIO%2F%2FNnbCzi8i5tC%2BekMIYgX4T74KlAUKRIBP1UoosYBnA10aj4uWHGCr%2FSU8XSQal3yCwvIr5a1fQ%2BiJaNxUi4gKiSBNpLQ9Vp8EWmH3qveQjPmQg4PWh9IsEVw73X6o58snGp1Fzk85PYscT1OidVZ5oak%2BGLxTuu4hT3nMQbM27pgx4N7ExSd%2BDgcX3bQ86lh58XEl7hAOSAtZzSrooMQCw2bi2Bu3iy00grefH1m08Qf1Z7p9CMKTxpr4GOqUB1dJi18A1egwYogd3eF7mmp7DTWwK9scqbMw2tMK16hyxEiQtmbvvPyu7xHZ2IeE0EWrWur78xbk5MYrTRsfn0YXAwaetQ%2Fqsh%2BlZrfquESTBys8UP3cX6L4dJzchwUL8RU3e5VxvQjEw9n86OWIINw1uTGCCsyEcmVLd8thinuaXHWkua08Lw8nKGkNuHBpzirQmoL%2Bt8ARfi5VcoOTQkCmuMUe%2F&X-Amz-Signature=d6f3e21fb83223a3cff6604ef8933d83bd01a640107bf257fe15d38b859a8ec4&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NSQENHH%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdgNgyuecJec%2BHab0Vd1bpwzSsXA74L%2FSrwxVNMzClTgIgODhEydzrVEmSx6qEhcXhfJ0f6ta49GALFrlSAi90kCQq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDFGPFDKuN9mVs5SDeCrcAy8as8qpVIfAr9cbJiVsc1TjACWJdmNBEDeOLq6D6ndpJi1hZfb5MJkXpqiGZW%2B%2BauRzxVJlJ%2Bj97Jf0FQ1kqphVsJutO8P1uJOLgtTRTC1c%2FsAMqKgOqVxsBst3eAdzs6sEajYlFUIZ8w7bNy407gq8MQ3KDJWmKbNBW548%2BGqQ3O5r1uBaTuAQa7DJmVaPUO16VxoK0nqMD%2BRK65Fqjh1fkSQ6kSoe%2BjqQFYkGbe%2B5y5orxWNRUujZZVQ8kdv5JnepvQivc0voXMliis2tksE8GpDjcYJsSDyn25PT2beHlOMuCeLLL9smLQbhWbN3b1WR6muzILaHW%2FqiaEkXvkIepjtOxpsGyt8E5XGj5Ya2pOuU3XyAy7ufeoP2AioqE3PWdfiIO%2F%2FNnbCzi8i5tC%2BekMIYgX4T74KlAUKRIBP1UoosYBnA10aj4uWHGCr%2FSU8XSQal3yCwvIr5a1fQ%2BiJaNxUi4gKiSBNpLQ9Vp8EWmH3qveQjPmQg4PWh9IsEVw73X6o58snGp1Fzk85PYscT1OidVZ5oak%2BGLxTuu4hT3nMQbM27pgx4N7ExSd%2BDgcX3bQ86lh58XEl7hAOSAtZzSrooMQCw2bi2Bu3iy00grefH1m08Qf1Z7p9CMKTxpr4GOqUB1dJi18A1egwYogd3eF7mmp7DTWwK9scqbMw2tMK16hyxEiQtmbvvPyu7xHZ2IeE0EWrWur78xbk5MYrTRsfn0YXAwaetQ%2Fqsh%2BlZrfquESTBys8UP3cX6L4dJzchwUL8RU3e5VxvQjEw9n86OWIINw1uTGCCsyEcmVLd8thinuaXHWkua08Lw8nKGkNuHBpzirQmoL%2Bt8ARfi5VcoOTQkCmuMUe%2F&X-Amz-Signature=c6dbb9b9248f255d8d2dd1c7a7a9e6cdec2e776eb4c935fb45055894b1f3e4c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NSQENHH%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdgNgyuecJec%2BHab0Vd1bpwzSsXA74L%2FSrwxVNMzClTgIgODhEydzrVEmSx6qEhcXhfJ0f6ta49GALFrlSAi90kCQq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDFGPFDKuN9mVs5SDeCrcAy8as8qpVIfAr9cbJiVsc1TjACWJdmNBEDeOLq6D6ndpJi1hZfb5MJkXpqiGZW%2B%2BauRzxVJlJ%2Bj97Jf0FQ1kqphVsJutO8P1uJOLgtTRTC1c%2FsAMqKgOqVxsBst3eAdzs6sEajYlFUIZ8w7bNy407gq8MQ3KDJWmKbNBW548%2BGqQ3O5r1uBaTuAQa7DJmVaPUO16VxoK0nqMD%2BRK65Fqjh1fkSQ6kSoe%2BjqQFYkGbe%2B5y5orxWNRUujZZVQ8kdv5JnepvQivc0voXMliis2tksE8GpDjcYJsSDyn25PT2beHlOMuCeLLL9smLQbhWbN3b1WR6muzILaHW%2FqiaEkXvkIepjtOxpsGyt8E5XGj5Ya2pOuU3XyAy7ufeoP2AioqE3PWdfiIO%2F%2FNnbCzi8i5tC%2BekMIYgX4T74KlAUKRIBP1UoosYBnA10aj4uWHGCr%2FSU8XSQal3yCwvIr5a1fQ%2BiJaNxUi4gKiSBNpLQ9Vp8EWmH3qveQjPmQg4PWh9IsEVw73X6o58snGp1Fzk85PYscT1OidVZ5oak%2BGLxTuu4hT3nMQbM27pgx4N7ExSd%2BDgcX3bQ86lh58XEl7hAOSAtZzSrooMQCw2bi2Bu3iy00grefH1m08Qf1Z7p9CMKTxpr4GOqUB1dJi18A1egwYogd3eF7mmp7DTWwK9scqbMw2tMK16hyxEiQtmbvvPyu7xHZ2IeE0EWrWur78xbk5MYrTRsfn0YXAwaetQ%2Fqsh%2BlZrfquESTBys8UP3cX6L4dJzchwUL8RU3e5VxvQjEw9n86OWIINw1uTGCCsyEcmVLd8thinuaXHWkua08Lw8nKGkNuHBpzirQmoL%2Bt8ARfi5VcoOTQkCmuMUe%2F&X-Amz-Signature=607357264d80eee03dd563f4f92272084df151b6783b2293433ca939830dd62f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NSQENHH%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdgNgyuecJec%2BHab0Vd1bpwzSsXA74L%2FSrwxVNMzClTgIgODhEydzrVEmSx6qEhcXhfJ0f6ta49GALFrlSAi90kCQq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDFGPFDKuN9mVs5SDeCrcAy8as8qpVIfAr9cbJiVsc1TjACWJdmNBEDeOLq6D6ndpJi1hZfb5MJkXpqiGZW%2B%2BauRzxVJlJ%2Bj97Jf0FQ1kqphVsJutO8P1uJOLgtTRTC1c%2FsAMqKgOqVxsBst3eAdzs6sEajYlFUIZ8w7bNy407gq8MQ3KDJWmKbNBW548%2BGqQ3O5r1uBaTuAQa7DJmVaPUO16VxoK0nqMD%2BRK65Fqjh1fkSQ6kSoe%2BjqQFYkGbe%2B5y5orxWNRUujZZVQ8kdv5JnepvQivc0voXMliis2tksE8GpDjcYJsSDyn25PT2beHlOMuCeLLL9smLQbhWbN3b1WR6muzILaHW%2FqiaEkXvkIepjtOxpsGyt8E5XGj5Ya2pOuU3XyAy7ufeoP2AioqE3PWdfiIO%2F%2FNnbCzi8i5tC%2BekMIYgX4T74KlAUKRIBP1UoosYBnA10aj4uWHGCr%2FSU8XSQal3yCwvIr5a1fQ%2BiJaNxUi4gKiSBNpLQ9Vp8EWmH3qveQjPmQg4PWh9IsEVw73X6o58snGp1Fzk85PYscT1OidVZ5oak%2BGLxTuu4hT3nMQbM27pgx4N7ExSd%2BDgcX3bQ86lh58XEl7hAOSAtZzSrooMQCw2bi2Bu3iy00grefH1m08Qf1Z7p9CMKTxpr4GOqUB1dJi18A1egwYogd3eF7mmp7DTWwK9scqbMw2tMK16hyxEiQtmbvvPyu7xHZ2IeE0EWrWur78xbk5MYrTRsfn0YXAwaetQ%2Fqsh%2BlZrfquESTBys8UP3cX6L4dJzchwUL8RU3e5VxvQjEw9n86OWIINw1uTGCCsyEcmVLd8thinuaXHWkua08Lw8nKGkNuHBpzirQmoL%2Bt8ARfi5VcoOTQkCmuMUe%2F&X-Amz-Signature=4adf3ffb2a98f0c018511b2ee850a946b18670280e44068065ff26303d08b053&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NSQENHH%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdgNgyuecJec%2BHab0Vd1bpwzSsXA74L%2FSrwxVNMzClTgIgODhEydzrVEmSx6qEhcXhfJ0f6ta49GALFrlSAi90kCQq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDFGPFDKuN9mVs5SDeCrcAy8as8qpVIfAr9cbJiVsc1TjACWJdmNBEDeOLq6D6ndpJi1hZfb5MJkXpqiGZW%2B%2BauRzxVJlJ%2Bj97Jf0FQ1kqphVsJutO8P1uJOLgtTRTC1c%2FsAMqKgOqVxsBst3eAdzs6sEajYlFUIZ8w7bNy407gq8MQ3KDJWmKbNBW548%2BGqQ3O5r1uBaTuAQa7DJmVaPUO16VxoK0nqMD%2BRK65Fqjh1fkSQ6kSoe%2BjqQFYkGbe%2B5y5orxWNRUujZZVQ8kdv5JnepvQivc0voXMliis2tksE8GpDjcYJsSDyn25PT2beHlOMuCeLLL9smLQbhWbN3b1WR6muzILaHW%2FqiaEkXvkIepjtOxpsGyt8E5XGj5Ya2pOuU3XyAy7ufeoP2AioqE3PWdfiIO%2F%2FNnbCzi8i5tC%2BekMIYgX4T74KlAUKRIBP1UoosYBnA10aj4uWHGCr%2FSU8XSQal3yCwvIr5a1fQ%2BiJaNxUi4gKiSBNpLQ9Vp8EWmH3qveQjPmQg4PWh9IsEVw73X6o58snGp1Fzk85PYscT1OidVZ5oak%2BGLxTuu4hT3nMQbM27pgx4N7ExSd%2BDgcX3bQ86lh58XEl7hAOSAtZzSrooMQCw2bi2Bu3iy00grefH1m08Qf1Z7p9CMKTxpr4GOqUB1dJi18A1egwYogd3eF7mmp7DTWwK9scqbMw2tMK16hyxEiQtmbvvPyu7xHZ2IeE0EWrWur78xbk5MYrTRsfn0YXAwaetQ%2Fqsh%2BlZrfquESTBys8UP3cX6L4dJzchwUL8RU3e5VxvQjEw9n86OWIINw1uTGCCsyEcmVLd8thinuaXHWkua08Lw8nKGkNuHBpzirQmoL%2Bt8ARfi5VcoOTQkCmuMUe%2F&X-Amz-Signature=d33f1b95a6539ca90912d5fc370bba9ba5448c3adad117b33bb5f7957b6c83ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NSQENHH%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdgNgyuecJec%2BHab0Vd1bpwzSsXA74L%2FSrwxVNMzClTgIgODhEydzrVEmSx6qEhcXhfJ0f6ta49GALFrlSAi90kCQq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDFGPFDKuN9mVs5SDeCrcAy8as8qpVIfAr9cbJiVsc1TjACWJdmNBEDeOLq6D6ndpJi1hZfb5MJkXpqiGZW%2B%2BauRzxVJlJ%2Bj97Jf0FQ1kqphVsJutO8P1uJOLgtTRTC1c%2FsAMqKgOqVxsBst3eAdzs6sEajYlFUIZ8w7bNy407gq8MQ3KDJWmKbNBW548%2BGqQ3O5r1uBaTuAQa7DJmVaPUO16VxoK0nqMD%2BRK65Fqjh1fkSQ6kSoe%2BjqQFYkGbe%2B5y5orxWNRUujZZVQ8kdv5JnepvQivc0voXMliis2tksE8GpDjcYJsSDyn25PT2beHlOMuCeLLL9smLQbhWbN3b1WR6muzILaHW%2FqiaEkXvkIepjtOxpsGyt8E5XGj5Ya2pOuU3XyAy7ufeoP2AioqE3PWdfiIO%2F%2FNnbCzi8i5tC%2BekMIYgX4T74KlAUKRIBP1UoosYBnA10aj4uWHGCr%2FSU8XSQal3yCwvIr5a1fQ%2BiJaNxUi4gKiSBNpLQ9Vp8EWmH3qveQjPmQg4PWh9IsEVw73X6o58snGp1Fzk85PYscT1OidVZ5oak%2BGLxTuu4hT3nMQbM27pgx4N7ExSd%2BDgcX3bQ86lh58XEl7hAOSAtZzSrooMQCw2bi2Bu3iy00grefH1m08Qf1Z7p9CMKTxpr4GOqUB1dJi18A1egwYogd3eF7mmp7DTWwK9scqbMw2tMK16hyxEiQtmbvvPyu7xHZ2IeE0EWrWur78xbk5MYrTRsfn0YXAwaetQ%2Fqsh%2BlZrfquESTBys8UP3cX6L4dJzchwUL8RU3e5VxvQjEw9n86OWIINw1uTGCCsyEcmVLd8thinuaXHWkua08Lw8nKGkNuHBpzirQmoL%2Bt8ARfi5VcoOTQkCmuMUe%2F&X-Amz-Signature=8d433919701b1e5f528b850a9efd9a8c467f4274262bc309837a2aa47a96510c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
