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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBWPKZRO%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T033927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCypCnhsOiuYRFcklLFUE%2B5NWa3fFCk1L8qhJRvUU01ogIgFjpnvuNvPwhB6ymvg1rI27IPZK9gdWbBJ8kQEGRkrksqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrmpnAEp60yCd%2BlNCrcAzqKC7xkReLyrp%2FJglT1aEuxtHFI3HXXiFa%2BEegEXFlvIQXPPS05JgV%2BlxMyUBX7B9ocNFVOlm%2Bf9W%2FnNZMpxaLBV98h3RP%2F01tRqTeeeAcrooCqV8IMfgU6FRddPw9qnzRW%2FD7kMEKoLne1fTiVYvoTz%2FHRaiN8NAGkaaBatGbNCYLSqWcu6KvmO6Gio1gqJwgD2QTmWJsHquuoeULLP9N18u9WXlmIX4PDs7SYMVL%2FAE6zP7RKu9aXCHXvzzYSlYWXvTptlNJe7jEdERlFa1VXBji1Ti1BVTGXDU1FY91GODCrTlJ3PSAM1vygc%2FE56kTCwyfH0rGxgKv7n%2FNdfhjvylWlzGk8%2B1GWzdNjOQ77K3oyCGnYAycemJGwp0Fwit4%2FVZJiRbbh7%2FrSfJDjLmqPg5wkRQBFf%2BjfJUd8GRTihklqplyZlU5JPGKJ6gUcJfwAffvLMhRuOhYYIaY5NgBP2NnNUfq7GRKMY96cPdqdHqlsNMoZWkfq2jrdocPafVpbDH2yncOZLe9P43U6gG%2BMZ427nwxwG7bjQEQXuXf8KLYW1vFShAxYbvcKzQz%2BM44fVRxG9REx5MUbUg8o%2B3POR6ihY9Gl0u6N%2FNkQVLk5%2B%2BY87DpIKa6w31BFMMzE%2BcEGOqUBMKytE0WFmgxVnrcTVkJOWmwFRHJ3bGIdebS0m%2FFLrKglj16Ohg6Knmu3W%2BHuTQHZUnO06B%2BmjP5XgDp0aKCkIqRs8HabMm9zKyJ5AGu2x2yWHmfi1pn8DfroY2w91DLeTgHBWArIRzffeByKzYQqpN%2FOcjAoaYDK9AzIHCFMoNCVOM%2FMkp2NLu%2BqqKhoex8DAAvKJqjPy55IoVzir3iSIis5RU5w&X-Amz-Signature=d9f8d1aef11e01d381c45f93282555fef184b3e526d6295db9d90d28aab3efca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBWPKZRO%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T033927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCypCnhsOiuYRFcklLFUE%2B5NWa3fFCk1L8qhJRvUU01ogIgFjpnvuNvPwhB6ymvg1rI27IPZK9gdWbBJ8kQEGRkrksqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrmpnAEp60yCd%2BlNCrcAzqKC7xkReLyrp%2FJglT1aEuxtHFI3HXXiFa%2BEegEXFlvIQXPPS05JgV%2BlxMyUBX7B9ocNFVOlm%2Bf9W%2FnNZMpxaLBV98h3RP%2F01tRqTeeeAcrooCqV8IMfgU6FRddPw9qnzRW%2FD7kMEKoLne1fTiVYvoTz%2FHRaiN8NAGkaaBatGbNCYLSqWcu6KvmO6Gio1gqJwgD2QTmWJsHquuoeULLP9N18u9WXlmIX4PDs7SYMVL%2FAE6zP7RKu9aXCHXvzzYSlYWXvTptlNJe7jEdERlFa1VXBji1Ti1BVTGXDU1FY91GODCrTlJ3PSAM1vygc%2FE56kTCwyfH0rGxgKv7n%2FNdfhjvylWlzGk8%2B1GWzdNjOQ77K3oyCGnYAycemJGwp0Fwit4%2FVZJiRbbh7%2FrSfJDjLmqPg5wkRQBFf%2BjfJUd8GRTihklqplyZlU5JPGKJ6gUcJfwAffvLMhRuOhYYIaY5NgBP2NnNUfq7GRKMY96cPdqdHqlsNMoZWkfq2jrdocPafVpbDH2yncOZLe9P43U6gG%2BMZ427nwxwG7bjQEQXuXf8KLYW1vFShAxYbvcKzQz%2BM44fVRxG9REx5MUbUg8o%2B3POR6ihY9Gl0u6N%2FNkQVLk5%2B%2BY87DpIKa6w31BFMMzE%2BcEGOqUBMKytE0WFmgxVnrcTVkJOWmwFRHJ3bGIdebS0m%2FFLrKglj16Ohg6Knmu3W%2BHuTQHZUnO06B%2BmjP5XgDp0aKCkIqRs8HabMm9zKyJ5AGu2x2yWHmfi1pn8DfroY2w91DLeTgHBWArIRzffeByKzYQqpN%2FOcjAoaYDK9AzIHCFMoNCVOM%2FMkp2NLu%2BqqKhoex8DAAvKJqjPy55IoVzir3iSIis5RU5w&X-Amz-Signature=53025110bc64d85f99df9568dac3a74976784512634cdf15befae4cbfa3d8710&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBWPKZRO%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T033927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCypCnhsOiuYRFcklLFUE%2B5NWa3fFCk1L8qhJRvUU01ogIgFjpnvuNvPwhB6ymvg1rI27IPZK9gdWbBJ8kQEGRkrksqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrmpnAEp60yCd%2BlNCrcAzqKC7xkReLyrp%2FJglT1aEuxtHFI3HXXiFa%2BEegEXFlvIQXPPS05JgV%2BlxMyUBX7B9ocNFVOlm%2Bf9W%2FnNZMpxaLBV98h3RP%2F01tRqTeeeAcrooCqV8IMfgU6FRddPw9qnzRW%2FD7kMEKoLne1fTiVYvoTz%2FHRaiN8NAGkaaBatGbNCYLSqWcu6KvmO6Gio1gqJwgD2QTmWJsHquuoeULLP9N18u9WXlmIX4PDs7SYMVL%2FAE6zP7RKu9aXCHXvzzYSlYWXvTptlNJe7jEdERlFa1VXBji1Ti1BVTGXDU1FY91GODCrTlJ3PSAM1vygc%2FE56kTCwyfH0rGxgKv7n%2FNdfhjvylWlzGk8%2B1GWzdNjOQ77K3oyCGnYAycemJGwp0Fwit4%2FVZJiRbbh7%2FrSfJDjLmqPg5wkRQBFf%2BjfJUd8GRTihklqplyZlU5JPGKJ6gUcJfwAffvLMhRuOhYYIaY5NgBP2NnNUfq7GRKMY96cPdqdHqlsNMoZWkfq2jrdocPafVpbDH2yncOZLe9P43U6gG%2BMZ427nwxwG7bjQEQXuXf8KLYW1vFShAxYbvcKzQz%2BM44fVRxG9REx5MUbUg8o%2B3POR6ihY9Gl0u6N%2FNkQVLk5%2B%2BY87DpIKa6w31BFMMzE%2BcEGOqUBMKytE0WFmgxVnrcTVkJOWmwFRHJ3bGIdebS0m%2FFLrKglj16Ohg6Knmu3W%2BHuTQHZUnO06B%2BmjP5XgDp0aKCkIqRs8HabMm9zKyJ5AGu2x2yWHmfi1pn8DfroY2w91DLeTgHBWArIRzffeByKzYQqpN%2FOcjAoaYDK9AzIHCFMoNCVOM%2FMkp2NLu%2BqqKhoex8DAAvKJqjPy55IoVzir3iSIis5RU5w&X-Amz-Signature=3dfb8ea3ea83180d041f02d7ae3da0c0491f3f152f02b110f3158550e9cc9a84&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBWPKZRO%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T033927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCypCnhsOiuYRFcklLFUE%2B5NWa3fFCk1L8qhJRvUU01ogIgFjpnvuNvPwhB6ymvg1rI27IPZK9gdWbBJ8kQEGRkrksqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrmpnAEp60yCd%2BlNCrcAzqKC7xkReLyrp%2FJglT1aEuxtHFI3HXXiFa%2BEegEXFlvIQXPPS05JgV%2BlxMyUBX7B9ocNFVOlm%2Bf9W%2FnNZMpxaLBV98h3RP%2F01tRqTeeeAcrooCqV8IMfgU6FRddPw9qnzRW%2FD7kMEKoLne1fTiVYvoTz%2FHRaiN8NAGkaaBatGbNCYLSqWcu6KvmO6Gio1gqJwgD2QTmWJsHquuoeULLP9N18u9WXlmIX4PDs7SYMVL%2FAE6zP7RKu9aXCHXvzzYSlYWXvTptlNJe7jEdERlFa1VXBji1Ti1BVTGXDU1FY91GODCrTlJ3PSAM1vygc%2FE56kTCwyfH0rGxgKv7n%2FNdfhjvylWlzGk8%2B1GWzdNjOQ77K3oyCGnYAycemJGwp0Fwit4%2FVZJiRbbh7%2FrSfJDjLmqPg5wkRQBFf%2BjfJUd8GRTihklqplyZlU5JPGKJ6gUcJfwAffvLMhRuOhYYIaY5NgBP2NnNUfq7GRKMY96cPdqdHqlsNMoZWkfq2jrdocPafVpbDH2yncOZLe9P43U6gG%2BMZ427nwxwG7bjQEQXuXf8KLYW1vFShAxYbvcKzQz%2BM44fVRxG9REx5MUbUg8o%2B3POR6ihY9Gl0u6N%2FNkQVLk5%2B%2BY87DpIKa6w31BFMMzE%2BcEGOqUBMKytE0WFmgxVnrcTVkJOWmwFRHJ3bGIdebS0m%2FFLrKglj16Ohg6Knmu3W%2BHuTQHZUnO06B%2BmjP5XgDp0aKCkIqRs8HabMm9zKyJ5AGu2x2yWHmfi1pn8DfroY2w91DLeTgHBWArIRzffeByKzYQqpN%2FOcjAoaYDK9AzIHCFMoNCVOM%2FMkp2NLu%2BqqKhoex8DAAvKJqjPy55IoVzir3iSIis5RU5w&X-Amz-Signature=316540a6047fbd1c6886e83d4e52f27f5441f58d699d5d65831577ef971adac8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBWPKZRO%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T033927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCypCnhsOiuYRFcklLFUE%2B5NWa3fFCk1L8qhJRvUU01ogIgFjpnvuNvPwhB6ymvg1rI27IPZK9gdWbBJ8kQEGRkrksqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrmpnAEp60yCd%2BlNCrcAzqKC7xkReLyrp%2FJglT1aEuxtHFI3HXXiFa%2BEegEXFlvIQXPPS05JgV%2BlxMyUBX7B9ocNFVOlm%2Bf9W%2FnNZMpxaLBV98h3RP%2F01tRqTeeeAcrooCqV8IMfgU6FRddPw9qnzRW%2FD7kMEKoLne1fTiVYvoTz%2FHRaiN8NAGkaaBatGbNCYLSqWcu6KvmO6Gio1gqJwgD2QTmWJsHquuoeULLP9N18u9WXlmIX4PDs7SYMVL%2FAE6zP7RKu9aXCHXvzzYSlYWXvTptlNJe7jEdERlFa1VXBji1Ti1BVTGXDU1FY91GODCrTlJ3PSAM1vygc%2FE56kTCwyfH0rGxgKv7n%2FNdfhjvylWlzGk8%2B1GWzdNjOQ77K3oyCGnYAycemJGwp0Fwit4%2FVZJiRbbh7%2FrSfJDjLmqPg5wkRQBFf%2BjfJUd8GRTihklqplyZlU5JPGKJ6gUcJfwAffvLMhRuOhYYIaY5NgBP2NnNUfq7GRKMY96cPdqdHqlsNMoZWkfq2jrdocPafVpbDH2yncOZLe9P43U6gG%2BMZ427nwxwG7bjQEQXuXf8KLYW1vFShAxYbvcKzQz%2BM44fVRxG9REx5MUbUg8o%2B3POR6ihY9Gl0u6N%2FNkQVLk5%2B%2BY87DpIKa6w31BFMMzE%2BcEGOqUBMKytE0WFmgxVnrcTVkJOWmwFRHJ3bGIdebS0m%2FFLrKglj16Ohg6Knmu3W%2BHuTQHZUnO06B%2BmjP5XgDp0aKCkIqRs8HabMm9zKyJ5AGu2x2yWHmfi1pn8DfroY2w91DLeTgHBWArIRzffeByKzYQqpN%2FOcjAoaYDK9AzIHCFMoNCVOM%2FMkp2NLu%2BqqKhoex8DAAvKJqjPy55IoVzir3iSIis5RU5w&X-Amz-Signature=7a062ee53a3b9f617bfd050edc554c8aca1219029b3406e00b13ff41f278f2ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBWPKZRO%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T033927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCypCnhsOiuYRFcklLFUE%2B5NWa3fFCk1L8qhJRvUU01ogIgFjpnvuNvPwhB6ymvg1rI27IPZK9gdWbBJ8kQEGRkrksqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrmpnAEp60yCd%2BlNCrcAzqKC7xkReLyrp%2FJglT1aEuxtHFI3HXXiFa%2BEegEXFlvIQXPPS05JgV%2BlxMyUBX7B9ocNFVOlm%2Bf9W%2FnNZMpxaLBV98h3RP%2F01tRqTeeeAcrooCqV8IMfgU6FRddPw9qnzRW%2FD7kMEKoLne1fTiVYvoTz%2FHRaiN8NAGkaaBatGbNCYLSqWcu6KvmO6Gio1gqJwgD2QTmWJsHquuoeULLP9N18u9WXlmIX4PDs7SYMVL%2FAE6zP7RKu9aXCHXvzzYSlYWXvTptlNJe7jEdERlFa1VXBji1Ti1BVTGXDU1FY91GODCrTlJ3PSAM1vygc%2FE56kTCwyfH0rGxgKv7n%2FNdfhjvylWlzGk8%2B1GWzdNjOQ77K3oyCGnYAycemJGwp0Fwit4%2FVZJiRbbh7%2FrSfJDjLmqPg5wkRQBFf%2BjfJUd8GRTihklqplyZlU5JPGKJ6gUcJfwAffvLMhRuOhYYIaY5NgBP2NnNUfq7GRKMY96cPdqdHqlsNMoZWkfq2jrdocPafVpbDH2yncOZLe9P43U6gG%2BMZ427nwxwG7bjQEQXuXf8KLYW1vFShAxYbvcKzQz%2BM44fVRxG9REx5MUbUg8o%2B3POR6ihY9Gl0u6N%2FNkQVLk5%2B%2BY87DpIKa6w31BFMMzE%2BcEGOqUBMKytE0WFmgxVnrcTVkJOWmwFRHJ3bGIdebS0m%2FFLrKglj16Ohg6Knmu3W%2BHuTQHZUnO06B%2BmjP5XgDp0aKCkIqRs8HabMm9zKyJ5AGu2x2yWHmfi1pn8DfroY2w91DLeTgHBWArIRzffeByKzYQqpN%2FOcjAoaYDK9AzIHCFMoNCVOM%2FMkp2NLu%2BqqKhoex8DAAvKJqjPy55IoVzir3iSIis5RU5w&X-Amz-Signature=97049dd36cf898e6470eb13e2dc3b2e5aa64061bd465d8740052fb33ef36cc96&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBWPKZRO%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T033927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCypCnhsOiuYRFcklLFUE%2B5NWa3fFCk1L8qhJRvUU01ogIgFjpnvuNvPwhB6ymvg1rI27IPZK9gdWbBJ8kQEGRkrksqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrmpnAEp60yCd%2BlNCrcAzqKC7xkReLyrp%2FJglT1aEuxtHFI3HXXiFa%2BEegEXFlvIQXPPS05JgV%2BlxMyUBX7B9ocNFVOlm%2Bf9W%2FnNZMpxaLBV98h3RP%2F01tRqTeeeAcrooCqV8IMfgU6FRddPw9qnzRW%2FD7kMEKoLne1fTiVYvoTz%2FHRaiN8NAGkaaBatGbNCYLSqWcu6KvmO6Gio1gqJwgD2QTmWJsHquuoeULLP9N18u9WXlmIX4PDs7SYMVL%2FAE6zP7RKu9aXCHXvzzYSlYWXvTptlNJe7jEdERlFa1VXBji1Ti1BVTGXDU1FY91GODCrTlJ3PSAM1vygc%2FE56kTCwyfH0rGxgKv7n%2FNdfhjvylWlzGk8%2B1GWzdNjOQ77K3oyCGnYAycemJGwp0Fwit4%2FVZJiRbbh7%2FrSfJDjLmqPg5wkRQBFf%2BjfJUd8GRTihklqplyZlU5JPGKJ6gUcJfwAffvLMhRuOhYYIaY5NgBP2NnNUfq7GRKMY96cPdqdHqlsNMoZWkfq2jrdocPafVpbDH2yncOZLe9P43U6gG%2BMZ427nwxwG7bjQEQXuXf8KLYW1vFShAxYbvcKzQz%2BM44fVRxG9REx5MUbUg8o%2B3POR6ihY9Gl0u6N%2FNkQVLk5%2B%2BY87DpIKa6w31BFMMzE%2BcEGOqUBMKytE0WFmgxVnrcTVkJOWmwFRHJ3bGIdebS0m%2FFLrKglj16Ohg6Knmu3W%2BHuTQHZUnO06B%2BmjP5XgDp0aKCkIqRs8HabMm9zKyJ5AGu2x2yWHmfi1pn8DfroY2w91DLeTgHBWArIRzffeByKzYQqpN%2FOcjAoaYDK9AzIHCFMoNCVOM%2FMkp2NLu%2BqqKhoex8DAAvKJqjPy55IoVzir3iSIis5RU5w&X-Amz-Signature=32c3c2487d8f971fae6f4239eb73eb16ebff5a38663ba77d8fc558a40a52a65c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBWPKZRO%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T033927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCypCnhsOiuYRFcklLFUE%2B5NWa3fFCk1L8qhJRvUU01ogIgFjpnvuNvPwhB6ymvg1rI27IPZK9gdWbBJ8kQEGRkrksqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrmpnAEp60yCd%2BlNCrcAzqKC7xkReLyrp%2FJglT1aEuxtHFI3HXXiFa%2BEegEXFlvIQXPPS05JgV%2BlxMyUBX7B9ocNFVOlm%2Bf9W%2FnNZMpxaLBV98h3RP%2F01tRqTeeeAcrooCqV8IMfgU6FRddPw9qnzRW%2FD7kMEKoLne1fTiVYvoTz%2FHRaiN8NAGkaaBatGbNCYLSqWcu6KvmO6Gio1gqJwgD2QTmWJsHquuoeULLP9N18u9WXlmIX4PDs7SYMVL%2FAE6zP7RKu9aXCHXvzzYSlYWXvTptlNJe7jEdERlFa1VXBji1Ti1BVTGXDU1FY91GODCrTlJ3PSAM1vygc%2FE56kTCwyfH0rGxgKv7n%2FNdfhjvylWlzGk8%2B1GWzdNjOQ77K3oyCGnYAycemJGwp0Fwit4%2FVZJiRbbh7%2FrSfJDjLmqPg5wkRQBFf%2BjfJUd8GRTihklqplyZlU5JPGKJ6gUcJfwAffvLMhRuOhYYIaY5NgBP2NnNUfq7GRKMY96cPdqdHqlsNMoZWkfq2jrdocPafVpbDH2yncOZLe9P43U6gG%2BMZ427nwxwG7bjQEQXuXf8KLYW1vFShAxYbvcKzQz%2BM44fVRxG9REx5MUbUg8o%2B3POR6ihY9Gl0u6N%2FNkQVLk5%2B%2BY87DpIKa6w31BFMMzE%2BcEGOqUBMKytE0WFmgxVnrcTVkJOWmwFRHJ3bGIdebS0m%2FFLrKglj16Ohg6Knmu3W%2BHuTQHZUnO06B%2BmjP5XgDp0aKCkIqRs8HabMm9zKyJ5AGu2x2yWHmfi1pn8DfroY2w91DLeTgHBWArIRzffeByKzYQqpN%2FOcjAoaYDK9AzIHCFMoNCVOM%2FMkp2NLu%2BqqKhoex8DAAvKJqjPy55IoVzir3iSIis5RU5w&X-Amz-Signature=c810d92bca206c3fb287571730cb42edc3d98fc3bb4ca29f536c43ebb7efd284&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
