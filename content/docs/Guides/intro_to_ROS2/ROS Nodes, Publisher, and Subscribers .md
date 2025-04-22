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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622AA66PC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIDfSgMkZyWCWjMA7CpbgXNNCyuBKoiB8LeblBzXYKxkXAiEAljupb%2By0%2FMTbSVPjfdvXxvdGUbWSM5HieC6B8i4DiycqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7Y8auS9Tr7CcQQFircA%2FC%2FmFg3HLwFwokNCtn54M6KSEBvglb5aUcgV8SMuZF1%2BNr2lgjJFP9snrWrfmhb%2FoMxVkB4FYH7AoBV3Ced8L6Yi2PhvkHyvc2FrSQTbDVNzip2kCCCsnhlyO5Pqlc9QiZinCgVgtui4wYs6eF4mojz5QBd4fjE2KhtfcKdcvRKXHkC9AOcKVUc7njDVW6mb20zWFQEyZ7EsEeMTprzxEKK3cmrH0MKa88wxMm%2F0OLICZgr4tdPVXfp6nmu7JDzMOxtGl480FxmQMw8ttR8N8PTXUTcIUJb%2BVOOv4%2FCHmk4sj42SzWCwj1ga2HtZf9qc%2F99oLkYMav9qs39493s5qTgpvx%2Fuov3xdOv9uZ8y9Fk%2BqnUiu7KB%2FToLL%2FIZW4PEfsNLxAL%2FneQQv%2F3g2jn75QtlJExby06Pky500Z6X9TaRaImv7K2wS7D8%2FlKgmO2%2BYmkqgYe63rBZ9OeszzA7vaUIB4KnneaMxqyg9AFgSG0WrMeEl76EAeZFYqzdty%2B2PdTpDhqTXsp217nXO%2Bk5O8iHCexro6bhXT3oErC%2BzWaXjpvlLNIFttQJT0FWXmvfpn0iIpGHmt5zdNXYCf9vLf7caIW4qvSx7lrVvL1wJlZnvHzwke%2BMcxamLXHMJ6qnsAGOqUBLwQZeoRJ5Oio0q2HDOIqR%2BysfrcrE3VyuGqDfCC6X1kSpJXd4%2FGJHQ5tjr8EFmw8rtK0ZlcxPKsQOFrOJkMDGtsvPycLKGz%2F1ZGjL8a%2FhJHzBgGcsnPB9AKPKPrvP47V6JOBQiWG7Q%2Fk%2BIshoIzfQdP4LJcAie34IusgLmSeCxSr%2BtZ%2FunU4wuiNJWFhl76TZKo4jMvmSbU%2BGPQS%2BdzsG7FZ69kk&X-Amz-Signature=30e30e967d093c1908ad91dd24a72f0755befde8596911be484b7b28af88f644&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622AA66PC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIDfSgMkZyWCWjMA7CpbgXNNCyuBKoiB8LeblBzXYKxkXAiEAljupb%2By0%2FMTbSVPjfdvXxvdGUbWSM5HieC6B8i4DiycqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7Y8auS9Tr7CcQQFircA%2FC%2FmFg3HLwFwokNCtn54M6KSEBvglb5aUcgV8SMuZF1%2BNr2lgjJFP9snrWrfmhb%2FoMxVkB4FYH7AoBV3Ced8L6Yi2PhvkHyvc2FrSQTbDVNzip2kCCCsnhlyO5Pqlc9QiZinCgVgtui4wYs6eF4mojz5QBd4fjE2KhtfcKdcvRKXHkC9AOcKVUc7njDVW6mb20zWFQEyZ7EsEeMTprzxEKK3cmrH0MKa88wxMm%2F0OLICZgr4tdPVXfp6nmu7JDzMOxtGl480FxmQMw8ttR8N8PTXUTcIUJb%2BVOOv4%2FCHmk4sj42SzWCwj1ga2HtZf9qc%2F99oLkYMav9qs39493s5qTgpvx%2Fuov3xdOv9uZ8y9Fk%2BqnUiu7KB%2FToLL%2FIZW4PEfsNLxAL%2FneQQv%2F3g2jn75QtlJExby06Pky500Z6X9TaRaImv7K2wS7D8%2FlKgmO2%2BYmkqgYe63rBZ9OeszzA7vaUIB4KnneaMxqyg9AFgSG0WrMeEl76EAeZFYqzdty%2B2PdTpDhqTXsp217nXO%2Bk5O8iHCexro6bhXT3oErC%2BzWaXjpvlLNIFttQJT0FWXmvfpn0iIpGHmt5zdNXYCf9vLf7caIW4qvSx7lrVvL1wJlZnvHzwke%2BMcxamLXHMJ6qnsAGOqUBLwQZeoRJ5Oio0q2HDOIqR%2BysfrcrE3VyuGqDfCC6X1kSpJXd4%2FGJHQ5tjr8EFmw8rtK0ZlcxPKsQOFrOJkMDGtsvPycLKGz%2F1ZGjL8a%2FhJHzBgGcsnPB9AKPKPrvP47V6JOBQiWG7Q%2Fk%2BIshoIzfQdP4LJcAie34IusgLmSeCxSr%2BtZ%2FunU4wuiNJWFhl76TZKo4jMvmSbU%2BGPQS%2BdzsG7FZ69kk&X-Amz-Signature=06f66d73d2f5157a83fa2e5b8eab589cff6f8e0650a3a993cf0bd829b84ca62a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622AA66PC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIDfSgMkZyWCWjMA7CpbgXNNCyuBKoiB8LeblBzXYKxkXAiEAljupb%2By0%2FMTbSVPjfdvXxvdGUbWSM5HieC6B8i4DiycqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7Y8auS9Tr7CcQQFircA%2FC%2FmFg3HLwFwokNCtn54M6KSEBvglb5aUcgV8SMuZF1%2BNr2lgjJFP9snrWrfmhb%2FoMxVkB4FYH7AoBV3Ced8L6Yi2PhvkHyvc2FrSQTbDVNzip2kCCCsnhlyO5Pqlc9QiZinCgVgtui4wYs6eF4mojz5QBd4fjE2KhtfcKdcvRKXHkC9AOcKVUc7njDVW6mb20zWFQEyZ7EsEeMTprzxEKK3cmrH0MKa88wxMm%2F0OLICZgr4tdPVXfp6nmu7JDzMOxtGl480FxmQMw8ttR8N8PTXUTcIUJb%2BVOOv4%2FCHmk4sj42SzWCwj1ga2HtZf9qc%2F99oLkYMav9qs39493s5qTgpvx%2Fuov3xdOv9uZ8y9Fk%2BqnUiu7KB%2FToLL%2FIZW4PEfsNLxAL%2FneQQv%2F3g2jn75QtlJExby06Pky500Z6X9TaRaImv7K2wS7D8%2FlKgmO2%2BYmkqgYe63rBZ9OeszzA7vaUIB4KnneaMxqyg9AFgSG0WrMeEl76EAeZFYqzdty%2B2PdTpDhqTXsp217nXO%2Bk5O8iHCexro6bhXT3oErC%2BzWaXjpvlLNIFttQJT0FWXmvfpn0iIpGHmt5zdNXYCf9vLf7caIW4qvSx7lrVvL1wJlZnvHzwke%2BMcxamLXHMJ6qnsAGOqUBLwQZeoRJ5Oio0q2HDOIqR%2BysfrcrE3VyuGqDfCC6X1kSpJXd4%2FGJHQ5tjr8EFmw8rtK0ZlcxPKsQOFrOJkMDGtsvPycLKGz%2F1ZGjL8a%2FhJHzBgGcsnPB9AKPKPrvP47V6JOBQiWG7Q%2Fk%2BIshoIzfQdP4LJcAie34IusgLmSeCxSr%2BtZ%2FunU4wuiNJWFhl76TZKo4jMvmSbU%2BGPQS%2BdzsG7FZ69kk&X-Amz-Signature=ef399921c2e398d44b19e5f525ad59766341d40a45976db1efdcc57103665a43&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622AA66PC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIDfSgMkZyWCWjMA7CpbgXNNCyuBKoiB8LeblBzXYKxkXAiEAljupb%2By0%2FMTbSVPjfdvXxvdGUbWSM5HieC6B8i4DiycqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7Y8auS9Tr7CcQQFircA%2FC%2FmFg3HLwFwokNCtn54M6KSEBvglb5aUcgV8SMuZF1%2BNr2lgjJFP9snrWrfmhb%2FoMxVkB4FYH7AoBV3Ced8L6Yi2PhvkHyvc2FrSQTbDVNzip2kCCCsnhlyO5Pqlc9QiZinCgVgtui4wYs6eF4mojz5QBd4fjE2KhtfcKdcvRKXHkC9AOcKVUc7njDVW6mb20zWFQEyZ7EsEeMTprzxEKK3cmrH0MKa88wxMm%2F0OLICZgr4tdPVXfp6nmu7JDzMOxtGl480FxmQMw8ttR8N8PTXUTcIUJb%2BVOOv4%2FCHmk4sj42SzWCwj1ga2HtZf9qc%2F99oLkYMav9qs39493s5qTgpvx%2Fuov3xdOv9uZ8y9Fk%2BqnUiu7KB%2FToLL%2FIZW4PEfsNLxAL%2FneQQv%2F3g2jn75QtlJExby06Pky500Z6X9TaRaImv7K2wS7D8%2FlKgmO2%2BYmkqgYe63rBZ9OeszzA7vaUIB4KnneaMxqyg9AFgSG0WrMeEl76EAeZFYqzdty%2B2PdTpDhqTXsp217nXO%2Bk5O8iHCexro6bhXT3oErC%2BzWaXjpvlLNIFttQJT0FWXmvfpn0iIpGHmt5zdNXYCf9vLf7caIW4qvSx7lrVvL1wJlZnvHzwke%2BMcxamLXHMJ6qnsAGOqUBLwQZeoRJ5Oio0q2HDOIqR%2BysfrcrE3VyuGqDfCC6X1kSpJXd4%2FGJHQ5tjr8EFmw8rtK0ZlcxPKsQOFrOJkMDGtsvPycLKGz%2F1ZGjL8a%2FhJHzBgGcsnPB9AKPKPrvP47V6JOBQiWG7Q%2Fk%2BIshoIzfQdP4LJcAie34IusgLmSeCxSr%2BtZ%2FunU4wuiNJWFhl76TZKo4jMvmSbU%2BGPQS%2BdzsG7FZ69kk&X-Amz-Signature=f2fc441f6d40b9a5ab8612798e74374991a51e6f74c9bbefbb8bda54d244ccad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622AA66PC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIDfSgMkZyWCWjMA7CpbgXNNCyuBKoiB8LeblBzXYKxkXAiEAljupb%2By0%2FMTbSVPjfdvXxvdGUbWSM5HieC6B8i4DiycqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7Y8auS9Tr7CcQQFircA%2FC%2FmFg3HLwFwokNCtn54M6KSEBvglb5aUcgV8SMuZF1%2BNr2lgjJFP9snrWrfmhb%2FoMxVkB4FYH7AoBV3Ced8L6Yi2PhvkHyvc2FrSQTbDVNzip2kCCCsnhlyO5Pqlc9QiZinCgVgtui4wYs6eF4mojz5QBd4fjE2KhtfcKdcvRKXHkC9AOcKVUc7njDVW6mb20zWFQEyZ7EsEeMTprzxEKK3cmrH0MKa88wxMm%2F0OLICZgr4tdPVXfp6nmu7JDzMOxtGl480FxmQMw8ttR8N8PTXUTcIUJb%2BVOOv4%2FCHmk4sj42SzWCwj1ga2HtZf9qc%2F99oLkYMav9qs39493s5qTgpvx%2Fuov3xdOv9uZ8y9Fk%2BqnUiu7KB%2FToLL%2FIZW4PEfsNLxAL%2FneQQv%2F3g2jn75QtlJExby06Pky500Z6X9TaRaImv7K2wS7D8%2FlKgmO2%2BYmkqgYe63rBZ9OeszzA7vaUIB4KnneaMxqyg9AFgSG0WrMeEl76EAeZFYqzdty%2B2PdTpDhqTXsp217nXO%2Bk5O8iHCexro6bhXT3oErC%2BzWaXjpvlLNIFttQJT0FWXmvfpn0iIpGHmt5zdNXYCf9vLf7caIW4qvSx7lrVvL1wJlZnvHzwke%2BMcxamLXHMJ6qnsAGOqUBLwQZeoRJ5Oio0q2HDOIqR%2BysfrcrE3VyuGqDfCC6X1kSpJXd4%2FGJHQ5tjr8EFmw8rtK0ZlcxPKsQOFrOJkMDGtsvPycLKGz%2F1ZGjL8a%2FhJHzBgGcsnPB9AKPKPrvP47V6JOBQiWG7Q%2Fk%2BIshoIzfQdP4LJcAie34IusgLmSeCxSr%2BtZ%2FunU4wuiNJWFhl76TZKo4jMvmSbU%2BGPQS%2BdzsG7FZ69kk&X-Amz-Signature=1400acbb9242d8036c96e456440b3a61cbff8dede60e77a4adf16055403a8eeb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622AA66PC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIDfSgMkZyWCWjMA7CpbgXNNCyuBKoiB8LeblBzXYKxkXAiEAljupb%2By0%2FMTbSVPjfdvXxvdGUbWSM5HieC6B8i4DiycqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7Y8auS9Tr7CcQQFircA%2FC%2FmFg3HLwFwokNCtn54M6KSEBvglb5aUcgV8SMuZF1%2BNr2lgjJFP9snrWrfmhb%2FoMxVkB4FYH7AoBV3Ced8L6Yi2PhvkHyvc2FrSQTbDVNzip2kCCCsnhlyO5Pqlc9QiZinCgVgtui4wYs6eF4mojz5QBd4fjE2KhtfcKdcvRKXHkC9AOcKVUc7njDVW6mb20zWFQEyZ7EsEeMTprzxEKK3cmrH0MKa88wxMm%2F0OLICZgr4tdPVXfp6nmu7JDzMOxtGl480FxmQMw8ttR8N8PTXUTcIUJb%2BVOOv4%2FCHmk4sj42SzWCwj1ga2HtZf9qc%2F99oLkYMav9qs39493s5qTgpvx%2Fuov3xdOv9uZ8y9Fk%2BqnUiu7KB%2FToLL%2FIZW4PEfsNLxAL%2FneQQv%2F3g2jn75QtlJExby06Pky500Z6X9TaRaImv7K2wS7D8%2FlKgmO2%2BYmkqgYe63rBZ9OeszzA7vaUIB4KnneaMxqyg9AFgSG0WrMeEl76EAeZFYqzdty%2B2PdTpDhqTXsp217nXO%2Bk5O8iHCexro6bhXT3oErC%2BzWaXjpvlLNIFttQJT0FWXmvfpn0iIpGHmt5zdNXYCf9vLf7caIW4qvSx7lrVvL1wJlZnvHzwke%2BMcxamLXHMJ6qnsAGOqUBLwQZeoRJ5Oio0q2HDOIqR%2BysfrcrE3VyuGqDfCC6X1kSpJXd4%2FGJHQ5tjr8EFmw8rtK0ZlcxPKsQOFrOJkMDGtsvPycLKGz%2F1ZGjL8a%2FhJHzBgGcsnPB9AKPKPrvP47V6JOBQiWG7Q%2Fk%2BIshoIzfQdP4LJcAie34IusgLmSeCxSr%2BtZ%2FunU4wuiNJWFhl76TZKo4jMvmSbU%2BGPQS%2BdzsG7FZ69kk&X-Amz-Signature=bb41bca6d313ffa858d1176be7a86a32ddb796ef74b30d31fa1b77e068f78876&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622AA66PC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIDfSgMkZyWCWjMA7CpbgXNNCyuBKoiB8LeblBzXYKxkXAiEAljupb%2By0%2FMTbSVPjfdvXxvdGUbWSM5HieC6B8i4DiycqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7Y8auS9Tr7CcQQFircA%2FC%2FmFg3HLwFwokNCtn54M6KSEBvglb5aUcgV8SMuZF1%2BNr2lgjJFP9snrWrfmhb%2FoMxVkB4FYH7AoBV3Ced8L6Yi2PhvkHyvc2FrSQTbDVNzip2kCCCsnhlyO5Pqlc9QiZinCgVgtui4wYs6eF4mojz5QBd4fjE2KhtfcKdcvRKXHkC9AOcKVUc7njDVW6mb20zWFQEyZ7EsEeMTprzxEKK3cmrH0MKa88wxMm%2F0OLICZgr4tdPVXfp6nmu7JDzMOxtGl480FxmQMw8ttR8N8PTXUTcIUJb%2BVOOv4%2FCHmk4sj42SzWCwj1ga2HtZf9qc%2F99oLkYMav9qs39493s5qTgpvx%2Fuov3xdOv9uZ8y9Fk%2BqnUiu7KB%2FToLL%2FIZW4PEfsNLxAL%2FneQQv%2F3g2jn75QtlJExby06Pky500Z6X9TaRaImv7K2wS7D8%2FlKgmO2%2BYmkqgYe63rBZ9OeszzA7vaUIB4KnneaMxqyg9AFgSG0WrMeEl76EAeZFYqzdty%2B2PdTpDhqTXsp217nXO%2Bk5O8iHCexro6bhXT3oErC%2BzWaXjpvlLNIFttQJT0FWXmvfpn0iIpGHmt5zdNXYCf9vLf7caIW4qvSx7lrVvL1wJlZnvHzwke%2BMcxamLXHMJ6qnsAGOqUBLwQZeoRJ5Oio0q2HDOIqR%2BysfrcrE3VyuGqDfCC6X1kSpJXd4%2FGJHQ5tjr8EFmw8rtK0ZlcxPKsQOFrOJkMDGtsvPycLKGz%2F1ZGjL8a%2FhJHzBgGcsnPB9AKPKPrvP47V6JOBQiWG7Q%2Fk%2BIshoIzfQdP4LJcAie34IusgLmSeCxSr%2BtZ%2FunU4wuiNJWFhl76TZKo4jMvmSbU%2BGPQS%2BdzsG7FZ69kk&X-Amz-Signature=6da567d09b337e9401bfec87bbfe55806d3e282b16aef629d7ede5033348b33b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622AA66PC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIDfSgMkZyWCWjMA7CpbgXNNCyuBKoiB8LeblBzXYKxkXAiEAljupb%2By0%2FMTbSVPjfdvXxvdGUbWSM5HieC6B8i4DiycqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7Y8auS9Tr7CcQQFircA%2FC%2FmFg3HLwFwokNCtn54M6KSEBvglb5aUcgV8SMuZF1%2BNr2lgjJFP9snrWrfmhb%2FoMxVkB4FYH7AoBV3Ced8L6Yi2PhvkHyvc2FrSQTbDVNzip2kCCCsnhlyO5Pqlc9QiZinCgVgtui4wYs6eF4mojz5QBd4fjE2KhtfcKdcvRKXHkC9AOcKVUc7njDVW6mb20zWFQEyZ7EsEeMTprzxEKK3cmrH0MKa88wxMm%2F0OLICZgr4tdPVXfp6nmu7JDzMOxtGl480FxmQMw8ttR8N8PTXUTcIUJb%2BVOOv4%2FCHmk4sj42SzWCwj1ga2HtZf9qc%2F99oLkYMav9qs39493s5qTgpvx%2Fuov3xdOv9uZ8y9Fk%2BqnUiu7KB%2FToLL%2FIZW4PEfsNLxAL%2FneQQv%2F3g2jn75QtlJExby06Pky500Z6X9TaRaImv7K2wS7D8%2FlKgmO2%2BYmkqgYe63rBZ9OeszzA7vaUIB4KnneaMxqyg9AFgSG0WrMeEl76EAeZFYqzdty%2B2PdTpDhqTXsp217nXO%2Bk5O8iHCexro6bhXT3oErC%2BzWaXjpvlLNIFttQJT0FWXmvfpn0iIpGHmt5zdNXYCf9vLf7caIW4qvSx7lrVvL1wJlZnvHzwke%2BMcxamLXHMJ6qnsAGOqUBLwQZeoRJ5Oio0q2HDOIqR%2BysfrcrE3VyuGqDfCC6X1kSpJXd4%2FGJHQ5tjr8EFmw8rtK0ZlcxPKsQOFrOJkMDGtsvPycLKGz%2F1ZGjL8a%2FhJHzBgGcsnPB9AKPKPrvP47V6JOBQiWG7Q%2Fk%2BIshoIzfQdP4LJcAie34IusgLmSeCxSr%2BtZ%2FunU4wuiNJWFhl76TZKo4jMvmSbU%2BGPQS%2BdzsG7FZ69kk&X-Amz-Signature=88554156587ef055418a25a57a10b2a38ed4947117058bd31fb2bfa400e10036&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
