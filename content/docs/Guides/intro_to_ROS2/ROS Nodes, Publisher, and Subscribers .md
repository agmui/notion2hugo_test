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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM2U76L2%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIETSIF%2BCnr%2F7pDSyYK8JH16paztas5HuvG1IaxCTIKDNAiAUGvnQ5mc2EC03kzILig0qtkaKZpS20L0Zgd9sNzUx3yr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMJKmn3Tu2yTJ0wjIjKtwDWeRdjz8BmkghNfCQtRC1Wt9yRJDF2RqjbVZXDdDAYZC8vbn4NGAQnJ1jkvkPenZtSxqUV24wwh5bFuqzWb4Va48ypcBkplvtNfZ4wSnQvkX6nDFfKvRBL90i8p90ig5RZbVN%2BP95aCyqoCt%2FXqmtGb32d4q9XzhczNx4eylzG63skZaJLPBPHG1m3MjC5PTdlOuQGALc%2BvMxIP2Q67XXsjZ0UruNpvmq9Al2p8EbBf4NZEKtuC2s%2BUyjG2yv6%2BHgfYBZaYKA6aMI3QuGy1VVCwGhrZKJjFULhehE0d%2B7uaWmmrIUvAZeHUPlYWCb%2BX80St5u3U3cfrSXGbFYY5dev2jHV%2B5BraAJCxWuZG2vCx5fBRrJTW7LYuAZuwneQH484%2Blhlc3v6uyWt0ayFD2s%2BQyE%2FLtCWgOViLPVBXc%2BdoNldTgziZ2CZCOmC0yvsYVNogQAlibAEEDb%2Bf1pNzfcgwXcmpFpKjcrrAfQLBEpEp3Ym3MZtL8RjtGZ4alsccRRH7TJ3Vv2rYRItOxKcG8gdCpYQajIjghdmFrg1IH%2FfBYvflk4Ftr9zL1WNEmtaM6p5AzEVdcyhKRvhJBYKJhP%2BKfR5XUmtmk0Bbm4nfQa77ePwbjeerzu3dm%2FJgMw3OC3vgY6pgHibszWwEaOL8lWxdIBrQnvWIFA0C3KDTj97%2BiSv1PBuLf4rENVkezuO0u2NWWkZcxnzoslZbIWn3vjHwQj5w6pQCAmYpNtKQtq37VONfgG4tJmMks7Wqgbs38V5mgKFXeVYMvxcSaIhDeErLolmVaX6PcwCuF7Qr7CnJMiSynB76JoaDf4YWDFa74TG8KyhQLu5QiwqYVepF2VKwoZUAn85uOlw7rx&X-Amz-Signature=a9bdddd9652d46f44c98ca08770b185ed9c0247a7e0b20d83d03f959fffadc42&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM2U76L2%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIETSIF%2BCnr%2F7pDSyYK8JH16paztas5HuvG1IaxCTIKDNAiAUGvnQ5mc2EC03kzILig0qtkaKZpS20L0Zgd9sNzUx3yr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMJKmn3Tu2yTJ0wjIjKtwDWeRdjz8BmkghNfCQtRC1Wt9yRJDF2RqjbVZXDdDAYZC8vbn4NGAQnJ1jkvkPenZtSxqUV24wwh5bFuqzWb4Va48ypcBkplvtNfZ4wSnQvkX6nDFfKvRBL90i8p90ig5RZbVN%2BP95aCyqoCt%2FXqmtGb32d4q9XzhczNx4eylzG63skZaJLPBPHG1m3MjC5PTdlOuQGALc%2BvMxIP2Q67XXsjZ0UruNpvmq9Al2p8EbBf4NZEKtuC2s%2BUyjG2yv6%2BHgfYBZaYKA6aMI3QuGy1VVCwGhrZKJjFULhehE0d%2B7uaWmmrIUvAZeHUPlYWCb%2BX80St5u3U3cfrSXGbFYY5dev2jHV%2B5BraAJCxWuZG2vCx5fBRrJTW7LYuAZuwneQH484%2Blhlc3v6uyWt0ayFD2s%2BQyE%2FLtCWgOViLPVBXc%2BdoNldTgziZ2CZCOmC0yvsYVNogQAlibAEEDb%2Bf1pNzfcgwXcmpFpKjcrrAfQLBEpEp3Ym3MZtL8RjtGZ4alsccRRH7TJ3Vv2rYRItOxKcG8gdCpYQajIjghdmFrg1IH%2FfBYvflk4Ftr9zL1WNEmtaM6p5AzEVdcyhKRvhJBYKJhP%2BKfR5XUmtmk0Bbm4nfQa77ePwbjeerzu3dm%2FJgMw3OC3vgY6pgHibszWwEaOL8lWxdIBrQnvWIFA0C3KDTj97%2BiSv1PBuLf4rENVkezuO0u2NWWkZcxnzoslZbIWn3vjHwQj5w6pQCAmYpNtKQtq37VONfgG4tJmMks7Wqgbs38V5mgKFXeVYMvxcSaIhDeErLolmVaX6PcwCuF7Qr7CnJMiSynB76JoaDf4YWDFa74TG8KyhQLu5QiwqYVepF2VKwoZUAn85uOlw7rx&X-Amz-Signature=6816b4b2d3549b23cca35940c898249118dac533c649ddb25689bd44acda8a1d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM2U76L2%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIETSIF%2BCnr%2F7pDSyYK8JH16paztas5HuvG1IaxCTIKDNAiAUGvnQ5mc2EC03kzILig0qtkaKZpS20L0Zgd9sNzUx3yr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMJKmn3Tu2yTJ0wjIjKtwDWeRdjz8BmkghNfCQtRC1Wt9yRJDF2RqjbVZXDdDAYZC8vbn4NGAQnJ1jkvkPenZtSxqUV24wwh5bFuqzWb4Va48ypcBkplvtNfZ4wSnQvkX6nDFfKvRBL90i8p90ig5RZbVN%2BP95aCyqoCt%2FXqmtGb32d4q9XzhczNx4eylzG63skZaJLPBPHG1m3MjC5PTdlOuQGALc%2BvMxIP2Q67XXsjZ0UruNpvmq9Al2p8EbBf4NZEKtuC2s%2BUyjG2yv6%2BHgfYBZaYKA6aMI3QuGy1VVCwGhrZKJjFULhehE0d%2B7uaWmmrIUvAZeHUPlYWCb%2BX80St5u3U3cfrSXGbFYY5dev2jHV%2B5BraAJCxWuZG2vCx5fBRrJTW7LYuAZuwneQH484%2Blhlc3v6uyWt0ayFD2s%2BQyE%2FLtCWgOViLPVBXc%2BdoNldTgziZ2CZCOmC0yvsYVNogQAlibAEEDb%2Bf1pNzfcgwXcmpFpKjcrrAfQLBEpEp3Ym3MZtL8RjtGZ4alsccRRH7TJ3Vv2rYRItOxKcG8gdCpYQajIjghdmFrg1IH%2FfBYvflk4Ftr9zL1WNEmtaM6p5AzEVdcyhKRvhJBYKJhP%2BKfR5XUmtmk0Bbm4nfQa77ePwbjeerzu3dm%2FJgMw3OC3vgY6pgHibszWwEaOL8lWxdIBrQnvWIFA0C3KDTj97%2BiSv1PBuLf4rENVkezuO0u2NWWkZcxnzoslZbIWn3vjHwQj5w6pQCAmYpNtKQtq37VONfgG4tJmMks7Wqgbs38V5mgKFXeVYMvxcSaIhDeErLolmVaX6PcwCuF7Qr7CnJMiSynB76JoaDf4YWDFa74TG8KyhQLu5QiwqYVepF2VKwoZUAn85uOlw7rx&X-Amz-Signature=34c8ec381af6bd5ee93d8b44eeb069af3c17c43fc0e96820a067de1244ee0898&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM2U76L2%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIETSIF%2BCnr%2F7pDSyYK8JH16paztas5HuvG1IaxCTIKDNAiAUGvnQ5mc2EC03kzILig0qtkaKZpS20L0Zgd9sNzUx3yr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMJKmn3Tu2yTJ0wjIjKtwDWeRdjz8BmkghNfCQtRC1Wt9yRJDF2RqjbVZXDdDAYZC8vbn4NGAQnJ1jkvkPenZtSxqUV24wwh5bFuqzWb4Va48ypcBkplvtNfZ4wSnQvkX6nDFfKvRBL90i8p90ig5RZbVN%2BP95aCyqoCt%2FXqmtGb32d4q9XzhczNx4eylzG63skZaJLPBPHG1m3MjC5PTdlOuQGALc%2BvMxIP2Q67XXsjZ0UruNpvmq9Al2p8EbBf4NZEKtuC2s%2BUyjG2yv6%2BHgfYBZaYKA6aMI3QuGy1VVCwGhrZKJjFULhehE0d%2B7uaWmmrIUvAZeHUPlYWCb%2BX80St5u3U3cfrSXGbFYY5dev2jHV%2B5BraAJCxWuZG2vCx5fBRrJTW7LYuAZuwneQH484%2Blhlc3v6uyWt0ayFD2s%2BQyE%2FLtCWgOViLPVBXc%2BdoNldTgziZ2CZCOmC0yvsYVNogQAlibAEEDb%2Bf1pNzfcgwXcmpFpKjcrrAfQLBEpEp3Ym3MZtL8RjtGZ4alsccRRH7TJ3Vv2rYRItOxKcG8gdCpYQajIjghdmFrg1IH%2FfBYvflk4Ftr9zL1WNEmtaM6p5AzEVdcyhKRvhJBYKJhP%2BKfR5XUmtmk0Bbm4nfQa77ePwbjeerzu3dm%2FJgMw3OC3vgY6pgHibszWwEaOL8lWxdIBrQnvWIFA0C3KDTj97%2BiSv1PBuLf4rENVkezuO0u2NWWkZcxnzoslZbIWn3vjHwQj5w6pQCAmYpNtKQtq37VONfgG4tJmMks7Wqgbs38V5mgKFXeVYMvxcSaIhDeErLolmVaX6PcwCuF7Qr7CnJMiSynB76JoaDf4YWDFa74TG8KyhQLu5QiwqYVepF2VKwoZUAn85uOlw7rx&X-Amz-Signature=2d70ec146f1eabf1945fdda88e81596d05d4886c3d1c90c8195143e12e2802be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM2U76L2%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIETSIF%2BCnr%2F7pDSyYK8JH16paztas5HuvG1IaxCTIKDNAiAUGvnQ5mc2EC03kzILig0qtkaKZpS20L0Zgd9sNzUx3yr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMJKmn3Tu2yTJ0wjIjKtwDWeRdjz8BmkghNfCQtRC1Wt9yRJDF2RqjbVZXDdDAYZC8vbn4NGAQnJ1jkvkPenZtSxqUV24wwh5bFuqzWb4Va48ypcBkplvtNfZ4wSnQvkX6nDFfKvRBL90i8p90ig5RZbVN%2BP95aCyqoCt%2FXqmtGb32d4q9XzhczNx4eylzG63skZaJLPBPHG1m3MjC5PTdlOuQGALc%2BvMxIP2Q67XXsjZ0UruNpvmq9Al2p8EbBf4NZEKtuC2s%2BUyjG2yv6%2BHgfYBZaYKA6aMI3QuGy1VVCwGhrZKJjFULhehE0d%2B7uaWmmrIUvAZeHUPlYWCb%2BX80St5u3U3cfrSXGbFYY5dev2jHV%2B5BraAJCxWuZG2vCx5fBRrJTW7LYuAZuwneQH484%2Blhlc3v6uyWt0ayFD2s%2BQyE%2FLtCWgOViLPVBXc%2BdoNldTgziZ2CZCOmC0yvsYVNogQAlibAEEDb%2Bf1pNzfcgwXcmpFpKjcrrAfQLBEpEp3Ym3MZtL8RjtGZ4alsccRRH7TJ3Vv2rYRItOxKcG8gdCpYQajIjghdmFrg1IH%2FfBYvflk4Ftr9zL1WNEmtaM6p5AzEVdcyhKRvhJBYKJhP%2BKfR5XUmtmk0Bbm4nfQa77ePwbjeerzu3dm%2FJgMw3OC3vgY6pgHibszWwEaOL8lWxdIBrQnvWIFA0C3KDTj97%2BiSv1PBuLf4rENVkezuO0u2NWWkZcxnzoslZbIWn3vjHwQj5w6pQCAmYpNtKQtq37VONfgG4tJmMks7Wqgbs38V5mgKFXeVYMvxcSaIhDeErLolmVaX6PcwCuF7Qr7CnJMiSynB76JoaDf4YWDFa74TG8KyhQLu5QiwqYVepF2VKwoZUAn85uOlw7rx&X-Amz-Signature=8ea30d19074a738f5f91f5ecf2487681844a1975f2d30b6885d91f9b58f8c495&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM2U76L2%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIETSIF%2BCnr%2F7pDSyYK8JH16paztas5HuvG1IaxCTIKDNAiAUGvnQ5mc2EC03kzILig0qtkaKZpS20L0Zgd9sNzUx3yr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMJKmn3Tu2yTJ0wjIjKtwDWeRdjz8BmkghNfCQtRC1Wt9yRJDF2RqjbVZXDdDAYZC8vbn4NGAQnJ1jkvkPenZtSxqUV24wwh5bFuqzWb4Va48ypcBkplvtNfZ4wSnQvkX6nDFfKvRBL90i8p90ig5RZbVN%2BP95aCyqoCt%2FXqmtGb32d4q9XzhczNx4eylzG63skZaJLPBPHG1m3MjC5PTdlOuQGALc%2BvMxIP2Q67XXsjZ0UruNpvmq9Al2p8EbBf4NZEKtuC2s%2BUyjG2yv6%2BHgfYBZaYKA6aMI3QuGy1VVCwGhrZKJjFULhehE0d%2B7uaWmmrIUvAZeHUPlYWCb%2BX80St5u3U3cfrSXGbFYY5dev2jHV%2B5BraAJCxWuZG2vCx5fBRrJTW7LYuAZuwneQH484%2Blhlc3v6uyWt0ayFD2s%2BQyE%2FLtCWgOViLPVBXc%2BdoNldTgziZ2CZCOmC0yvsYVNogQAlibAEEDb%2Bf1pNzfcgwXcmpFpKjcrrAfQLBEpEp3Ym3MZtL8RjtGZ4alsccRRH7TJ3Vv2rYRItOxKcG8gdCpYQajIjghdmFrg1IH%2FfBYvflk4Ftr9zL1WNEmtaM6p5AzEVdcyhKRvhJBYKJhP%2BKfR5XUmtmk0Bbm4nfQa77ePwbjeerzu3dm%2FJgMw3OC3vgY6pgHibszWwEaOL8lWxdIBrQnvWIFA0C3KDTj97%2BiSv1PBuLf4rENVkezuO0u2NWWkZcxnzoslZbIWn3vjHwQj5w6pQCAmYpNtKQtq37VONfgG4tJmMks7Wqgbs38V5mgKFXeVYMvxcSaIhDeErLolmVaX6PcwCuF7Qr7CnJMiSynB76JoaDf4YWDFa74TG8KyhQLu5QiwqYVepF2VKwoZUAn85uOlw7rx&X-Amz-Signature=39a63673f859f397588f0c534f62c6371d97fc7b9977d6474e068273e86e95ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM2U76L2%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIETSIF%2BCnr%2F7pDSyYK8JH16paztas5HuvG1IaxCTIKDNAiAUGvnQ5mc2EC03kzILig0qtkaKZpS20L0Zgd9sNzUx3yr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMJKmn3Tu2yTJ0wjIjKtwDWeRdjz8BmkghNfCQtRC1Wt9yRJDF2RqjbVZXDdDAYZC8vbn4NGAQnJ1jkvkPenZtSxqUV24wwh5bFuqzWb4Va48ypcBkplvtNfZ4wSnQvkX6nDFfKvRBL90i8p90ig5RZbVN%2BP95aCyqoCt%2FXqmtGb32d4q9XzhczNx4eylzG63skZaJLPBPHG1m3MjC5PTdlOuQGALc%2BvMxIP2Q67XXsjZ0UruNpvmq9Al2p8EbBf4NZEKtuC2s%2BUyjG2yv6%2BHgfYBZaYKA6aMI3QuGy1VVCwGhrZKJjFULhehE0d%2B7uaWmmrIUvAZeHUPlYWCb%2BX80St5u3U3cfrSXGbFYY5dev2jHV%2B5BraAJCxWuZG2vCx5fBRrJTW7LYuAZuwneQH484%2Blhlc3v6uyWt0ayFD2s%2BQyE%2FLtCWgOViLPVBXc%2BdoNldTgziZ2CZCOmC0yvsYVNogQAlibAEEDb%2Bf1pNzfcgwXcmpFpKjcrrAfQLBEpEp3Ym3MZtL8RjtGZ4alsccRRH7TJ3Vv2rYRItOxKcG8gdCpYQajIjghdmFrg1IH%2FfBYvflk4Ftr9zL1WNEmtaM6p5AzEVdcyhKRvhJBYKJhP%2BKfR5XUmtmk0Bbm4nfQa77ePwbjeerzu3dm%2FJgMw3OC3vgY6pgHibszWwEaOL8lWxdIBrQnvWIFA0C3KDTj97%2BiSv1PBuLf4rENVkezuO0u2NWWkZcxnzoslZbIWn3vjHwQj5w6pQCAmYpNtKQtq37VONfgG4tJmMks7Wqgbs38V5mgKFXeVYMvxcSaIhDeErLolmVaX6PcwCuF7Qr7CnJMiSynB76JoaDf4YWDFa74TG8KyhQLu5QiwqYVepF2VKwoZUAn85uOlw7rx&X-Amz-Signature=7a3d7ceb04e9641842f44dd9697fe921983d771991d2ab865c59fab59a79c3d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM2U76L2%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIETSIF%2BCnr%2F7pDSyYK8JH16paztas5HuvG1IaxCTIKDNAiAUGvnQ5mc2EC03kzILig0qtkaKZpS20L0Zgd9sNzUx3yr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMJKmn3Tu2yTJ0wjIjKtwDWeRdjz8BmkghNfCQtRC1Wt9yRJDF2RqjbVZXDdDAYZC8vbn4NGAQnJ1jkvkPenZtSxqUV24wwh5bFuqzWb4Va48ypcBkplvtNfZ4wSnQvkX6nDFfKvRBL90i8p90ig5RZbVN%2BP95aCyqoCt%2FXqmtGb32d4q9XzhczNx4eylzG63skZaJLPBPHG1m3MjC5PTdlOuQGALc%2BvMxIP2Q67XXsjZ0UruNpvmq9Al2p8EbBf4NZEKtuC2s%2BUyjG2yv6%2BHgfYBZaYKA6aMI3QuGy1VVCwGhrZKJjFULhehE0d%2B7uaWmmrIUvAZeHUPlYWCb%2BX80St5u3U3cfrSXGbFYY5dev2jHV%2B5BraAJCxWuZG2vCx5fBRrJTW7LYuAZuwneQH484%2Blhlc3v6uyWt0ayFD2s%2BQyE%2FLtCWgOViLPVBXc%2BdoNldTgziZ2CZCOmC0yvsYVNogQAlibAEEDb%2Bf1pNzfcgwXcmpFpKjcrrAfQLBEpEp3Ym3MZtL8RjtGZ4alsccRRH7TJ3Vv2rYRItOxKcG8gdCpYQajIjghdmFrg1IH%2FfBYvflk4Ftr9zL1WNEmtaM6p5AzEVdcyhKRvhJBYKJhP%2BKfR5XUmtmk0Bbm4nfQa77ePwbjeerzu3dm%2FJgMw3OC3vgY6pgHibszWwEaOL8lWxdIBrQnvWIFA0C3KDTj97%2BiSv1PBuLf4rENVkezuO0u2NWWkZcxnzoslZbIWn3vjHwQj5w6pQCAmYpNtKQtq37VONfgG4tJmMks7Wqgbs38V5mgKFXeVYMvxcSaIhDeErLolmVaX6PcwCuF7Qr7CnJMiSynB76JoaDf4YWDFa74TG8KyhQLu5QiwqYVepF2VKwoZUAn85uOlw7rx&X-Amz-Signature=cb6f77e155767bd9cd4dcc0d62ee4d4c86f3a22c0c694a9e0de49e2aabd59cf7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
