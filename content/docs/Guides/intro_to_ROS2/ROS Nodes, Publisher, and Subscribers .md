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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7GOPVN4%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESK3tLrc%2FIB%2FSK46d3GkufyVoXPPpTskAd4g5JqjPLQAiEArrp3hdw3JbNPqU6PlQJPqE1b3LGFoA0RL0sPBzjHCTcq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJtPCP%2Fzjg1wwJMVZCrcA0kp3%2B1khUqk6NoPGr%2BgbS%2B7Os1Ek4DisTn7ou701ISdQIgdoR0k1wdqa5MslfVtqWMUePOaLrSdRxf9RkM0ukrTMabFGjdu4aXCMu7OgYaxVprY7tjz7aZ%2BJyOuSLdm3MLbt6oBUHXc86%2FLzn58a79GV9gKwclplHcINqa6zPWGWcD6sDraTolGarfwqIV3wNif3majNgvQjE2Ce3fTM40QCF8Za%2FYaVY2xEXJbgLM8EhZKkGDhJ%2FQi%2FRrTYM721KAfwSk%2FDLnu0Md2%2FntfWsXmqC9tQz8xk5z9kDNF%2FRzZkMC9SF1vozI5MkJfxS5%2FEiYp5deKHlboe9KXtfR2Zlh2s0888d3iQQt7Ub0sO8Nx%2FQxI1BRN8rRXtP2Bkf5Gu57AJuVi7A4L3jvsRLPKVF39C4rDo9ZnYpxkBl4gtKaVwZrvOJIrHoC3xy2h4QJkqvDHZu%2BBqrQPVcCqw%2FBbh6hQFaVJDs4MlwX84QETM9SluqsHNU68eOZXqp8YeAfMFVuk%2Fj6TOkg%2BYdXY7gXS%2BHPEzOPR%2FCbbnhg6YobPMJleTpV1fjAW0tlwvqA%2B1BHBhDHicMKeyYZKhCtgLDuyPPty3bZaGud6uDnHJjn09u%2F%2FB%2BwHQtnw6gh0T6JHMNzejcIGOqUBxqUpP0fwE%2Fv6Ef%2FvkNJoggKb3R49E%2Bs2x35XXys0XMAn3EXGEoO3HcBmgMD3ZSZw6h%2BfRVlSYKxDPyM9czq5fWr0llCl67V1yJ9t7Y1muIfCVfmofA80gr9kNL91q1U%2BZZTlLuot8pp8rs2ii0oMQUq9vCPQZfQlz0Xc7rgCCiFAfD0Rl%2FN7xx71giCI%2Fc4niioK8tC%2BTd5ohJKn4OgTR%2Bhc6kEK&X-Amz-Signature=2c41ceea3fa9162077dcaf8c36f8a1aea4d7b15d9687efdf89d18fce54d46562&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7GOPVN4%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESK3tLrc%2FIB%2FSK46d3GkufyVoXPPpTskAd4g5JqjPLQAiEArrp3hdw3JbNPqU6PlQJPqE1b3LGFoA0RL0sPBzjHCTcq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJtPCP%2Fzjg1wwJMVZCrcA0kp3%2B1khUqk6NoPGr%2BgbS%2B7Os1Ek4DisTn7ou701ISdQIgdoR0k1wdqa5MslfVtqWMUePOaLrSdRxf9RkM0ukrTMabFGjdu4aXCMu7OgYaxVprY7tjz7aZ%2BJyOuSLdm3MLbt6oBUHXc86%2FLzn58a79GV9gKwclplHcINqa6zPWGWcD6sDraTolGarfwqIV3wNif3majNgvQjE2Ce3fTM40QCF8Za%2FYaVY2xEXJbgLM8EhZKkGDhJ%2FQi%2FRrTYM721KAfwSk%2FDLnu0Md2%2FntfWsXmqC9tQz8xk5z9kDNF%2FRzZkMC9SF1vozI5MkJfxS5%2FEiYp5deKHlboe9KXtfR2Zlh2s0888d3iQQt7Ub0sO8Nx%2FQxI1BRN8rRXtP2Bkf5Gu57AJuVi7A4L3jvsRLPKVF39C4rDo9ZnYpxkBl4gtKaVwZrvOJIrHoC3xy2h4QJkqvDHZu%2BBqrQPVcCqw%2FBbh6hQFaVJDs4MlwX84QETM9SluqsHNU68eOZXqp8YeAfMFVuk%2Fj6TOkg%2BYdXY7gXS%2BHPEzOPR%2FCbbnhg6YobPMJleTpV1fjAW0tlwvqA%2B1BHBhDHicMKeyYZKhCtgLDuyPPty3bZaGud6uDnHJjn09u%2F%2FB%2BwHQtnw6gh0T6JHMNzejcIGOqUBxqUpP0fwE%2Fv6Ef%2FvkNJoggKb3R49E%2Bs2x35XXys0XMAn3EXGEoO3HcBmgMD3ZSZw6h%2BfRVlSYKxDPyM9czq5fWr0llCl67V1yJ9t7Y1muIfCVfmofA80gr9kNL91q1U%2BZZTlLuot8pp8rs2ii0oMQUq9vCPQZfQlz0Xc7rgCCiFAfD0Rl%2FN7xx71giCI%2Fc4niioK8tC%2BTd5ohJKn4OgTR%2Bhc6kEK&X-Amz-Signature=bb0e415e86653492eefc630b8bc7c002662a568b639b8fec2d5ae3d0f73812a2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7GOPVN4%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESK3tLrc%2FIB%2FSK46d3GkufyVoXPPpTskAd4g5JqjPLQAiEArrp3hdw3JbNPqU6PlQJPqE1b3LGFoA0RL0sPBzjHCTcq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJtPCP%2Fzjg1wwJMVZCrcA0kp3%2B1khUqk6NoPGr%2BgbS%2B7Os1Ek4DisTn7ou701ISdQIgdoR0k1wdqa5MslfVtqWMUePOaLrSdRxf9RkM0ukrTMabFGjdu4aXCMu7OgYaxVprY7tjz7aZ%2BJyOuSLdm3MLbt6oBUHXc86%2FLzn58a79GV9gKwclplHcINqa6zPWGWcD6sDraTolGarfwqIV3wNif3majNgvQjE2Ce3fTM40QCF8Za%2FYaVY2xEXJbgLM8EhZKkGDhJ%2FQi%2FRrTYM721KAfwSk%2FDLnu0Md2%2FntfWsXmqC9tQz8xk5z9kDNF%2FRzZkMC9SF1vozI5MkJfxS5%2FEiYp5deKHlboe9KXtfR2Zlh2s0888d3iQQt7Ub0sO8Nx%2FQxI1BRN8rRXtP2Bkf5Gu57AJuVi7A4L3jvsRLPKVF39C4rDo9ZnYpxkBl4gtKaVwZrvOJIrHoC3xy2h4QJkqvDHZu%2BBqrQPVcCqw%2FBbh6hQFaVJDs4MlwX84QETM9SluqsHNU68eOZXqp8YeAfMFVuk%2Fj6TOkg%2BYdXY7gXS%2BHPEzOPR%2FCbbnhg6YobPMJleTpV1fjAW0tlwvqA%2B1BHBhDHicMKeyYZKhCtgLDuyPPty3bZaGud6uDnHJjn09u%2F%2FB%2BwHQtnw6gh0T6JHMNzejcIGOqUBxqUpP0fwE%2Fv6Ef%2FvkNJoggKb3R49E%2Bs2x35XXys0XMAn3EXGEoO3HcBmgMD3ZSZw6h%2BfRVlSYKxDPyM9czq5fWr0llCl67V1yJ9t7Y1muIfCVfmofA80gr9kNL91q1U%2BZZTlLuot8pp8rs2ii0oMQUq9vCPQZfQlz0Xc7rgCCiFAfD0Rl%2FN7xx71giCI%2Fc4niioK8tC%2BTd5ohJKn4OgTR%2Bhc6kEK&X-Amz-Signature=852969a9c4ac7d9bc07d6e3256605b9e2a03cc09450e3a17362381ed80e78b70&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7GOPVN4%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESK3tLrc%2FIB%2FSK46d3GkufyVoXPPpTskAd4g5JqjPLQAiEArrp3hdw3JbNPqU6PlQJPqE1b3LGFoA0RL0sPBzjHCTcq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJtPCP%2Fzjg1wwJMVZCrcA0kp3%2B1khUqk6NoPGr%2BgbS%2B7Os1Ek4DisTn7ou701ISdQIgdoR0k1wdqa5MslfVtqWMUePOaLrSdRxf9RkM0ukrTMabFGjdu4aXCMu7OgYaxVprY7tjz7aZ%2BJyOuSLdm3MLbt6oBUHXc86%2FLzn58a79GV9gKwclplHcINqa6zPWGWcD6sDraTolGarfwqIV3wNif3majNgvQjE2Ce3fTM40QCF8Za%2FYaVY2xEXJbgLM8EhZKkGDhJ%2FQi%2FRrTYM721KAfwSk%2FDLnu0Md2%2FntfWsXmqC9tQz8xk5z9kDNF%2FRzZkMC9SF1vozI5MkJfxS5%2FEiYp5deKHlboe9KXtfR2Zlh2s0888d3iQQt7Ub0sO8Nx%2FQxI1BRN8rRXtP2Bkf5Gu57AJuVi7A4L3jvsRLPKVF39C4rDo9ZnYpxkBl4gtKaVwZrvOJIrHoC3xy2h4QJkqvDHZu%2BBqrQPVcCqw%2FBbh6hQFaVJDs4MlwX84QETM9SluqsHNU68eOZXqp8YeAfMFVuk%2Fj6TOkg%2BYdXY7gXS%2BHPEzOPR%2FCbbnhg6YobPMJleTpV1fjAW0tlwvqA%2B1BHBhDHicMKeyYZKhCtgLDuyPPty3bZaGud6uDnHJjn09u%2F%2FB%2BwHQtnw6gh0T6JHMNzejcIGOqUBxqUpP0fwE%2Fv6Ef%2FvkNJoggKb3R49E%2Bs2x35XXys0XMAn3EXGEoO3HcBmgMD3ZSZw6h%2BfRVlSYKxDPyM9czq5fWr0llCl67V1yJ9t7Y1muIfCVfmofA80gr9kNL91q1U%2BZZTlLuot8pp8rs2ii0oMQUq9vCPQZfQlz0Xc7rgCCiFAfD0Rl%2FN7xx71giCI%2Fc4niioK8tC%2BTd5ohJKn4OgTR%2Bhc6kEK&X-Amz-Signature=7dd79e4c063f2e538540b06385c7526d3d8d379a108cdf5890cbffb4a663e7bc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7GOPVN4%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESK3tLrc%2FIB%2FSK46d3GkufyVoXPPpTskAd4g5JqjPLQAiEArrp3hdw3JbNPqU6PlQJPqE1b3LGFoA0RL0sPBzjHCTcq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJtPCP%2Fzjg1wwJMVZCrcA0kp3%2B1khUqk6NoPGr%2BgbS%2B7Os1Ek4DisTn7ou701ISdQIgdoR0k1wdqa5MslfVtqWMUePOaLrSdRxf9RkM0ukrTMabFGjdu4aXCMu7OgYaxVprY7tjz7aZ%2BJyOuSLdm3MLbt6oBUHXc86%2FLzn58a79GV9gKwclplHcINqa6zPWGWcD6sDraTolGarfwqIV3wNif3majNgvQjE2Ce3fTM40QCF8Za%2FYaVY2xEXJbgLM8EhZKkGDhJ%2FQi%2FRrTYM721KAfwSk%2FDLnu0Md2%2FntfWsXmqC9tQz8xk5z9kDNF%2FRzZkMC9SF1vozI5MkJfxS5%2FEiYp5deKHlboe9KXtfR2Zlh2s0888d3iQQt7Ub0sO8Nx%2FQxI1BRN8rRXtP2Bkf5Gu57AJuVi7A4L3jvsRLPKVF39C4rDo9ZnYpxkBl4gtKaVwZrvOJIrHoC3xy2h4QJkqvDHZu%2BBqrQPVcCqw%2FBbh6hQFaVJDs4MlwX84QETM9SluqsHNU68eOZXqp8YeAfMFVuk%2Fj6TOkg%2BYdXY7gXS%2BHPEzOPR%2FCbbnhg6YobPMJleTpV1fjAW0tlwvqA%2B1BHBhDHicMKeyYZKhCtgLDuyPPty3bZaGud6uDnHJjn09u%2F%2FB%2BwHQtnw6gh0T6JHMNzejcIGOqUBxqUpP0fwE%2Fv6Ef%2FvkNJoggKb3R49E%2Bs2x35XXys0XMAn3EXGEoO3HcBmgMD3ZSZw6h%2BfRVlSYKxDPyM9czq5fWr0llCl67V1yJ9t7Y1muIfCVfmofA80gr9kNL91q1U%2BZZTlLuot8pp8rs2ii0oMQUq9vCPQZfQlz0Xc7rgCCiFAfD0Rl%2FN7xx71giCI%2Fc4niioK8tC%2BTd5ohJKn4OgTR%2Bhc6kEK&X-Amz-Signature=b1cbe29636abd23649171513d231f360f3832b86db86638b54849c7d9abc0af9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7GOPVN4%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESK3tLrc%2FIB%2FSK46d3GkufyVoXPPpTskAd4g5JqjPLQAiEArrp3hdw3JbNPqU6PlQJPqE1b3LGFoA0RL0sPBzjHCTcq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJtPCP%2Fzjg1wwJMVZCrcA0kp3%2B1khUqk6NoPGr%2BgbS%2B7Os1Ek4DisTn7ou701ISdQIgdoR0k1wdqa5MslfVtqWMUePOaLrSdRxf9RkM0ukrTMabFGjdu4aXCMu7OgYaxVprY7tjz7aZ%2BJyOuSLdm3MLbt6oBUHXc86%2FLzn58a79GV9gKwclplHcINqa6zPWGWcD6sDraTolGarfwqIV3wNif3majNgvQjE2Ce3fTM40QCF8Za%2FYaVY2xEXJbgLM8EhZKkGDhJ%2FQi%2FRrTYM721KAfwSk%2FDLnu0Md2%2FntfWsXmqC9tQz8xk5z9kDNF%2FRzZkMC9SF1vozI5MkJfxS5%2FEiYp5deKHlboe9KXtfR2Zlh2s0888d3iQQt7Ub0sO8Nx%2FQxI1BRN8rRXtP2Bkf5Gu57AJuVi7A4L3jvsRLPKVF39C4rDo9ZnYpxkBl4gtKaVwZrvOJIrHoC3xy2h4QJkqvDHZu%2BBqrQPVcCqw%2FBbh6hQFaVJDs4MlwX84QETM9SluqsHNU68eOZXqp8YeAfMFVuk%2Fj6TOkg%2BYdXY7gXS%2BHPEzOPR%2FCbbnhg6YobPMJleTpV1fjAW0tlwvqA%2B1BHBhDHicMKeyYZKhCtgLDuyPPty3bZaGud6uDnHJjn09u%2F%2FB%2BwHQtnw6gh0T6JHMNzejcIGOqUBxqUpP0fwE%2Fv6Ef%2FvkNJoggKb3R49E%2Bs2x35XXys0XMAn3EXGEoO3HcBmgMD3ZSZw6h%2BfRVlSYKxDPyM9czq5fWr0llCl67V1yJ9t7Y1muIfCVfmofA80gr9kNL91q1U%2BZZTlLuot8pp8rs2ii0oMQUq9vCPQZfQlz0Xc7rgCCiFAfD0Rl%2FN7xx71giCI%2Fc4niioK8tC%2BTd5ohJKn4OgTR%2Bhc6kEK&X-Amz-Signature=775ed5634f0a2b84100e0795656f6e0f1d8e227d782167b279f60397864fda8c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7GOPVN4%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESK3tLrc%2FIB%2FSK46d3GkufyVoXPPpTskAd4g5JqjPLQAiEArrp3hdw3JbNPqU6PlQJPqE1b3LGFoA0RL0sPBzjHCTcq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJtPCP%2Fzjg1wwJMVZCrcA0kp3%2B1khUqk6NoPGr%2BgbS%2B7Os1Ek4DisTn7ou701ISdQIgdoR0k1wdqa5MslfVtqWMUePOaLrSdRxf9RkM0ukrTMabFGjdu4aXCMu7OgYaxVprY7tjz7aZ%2BJyOuSLdm3MLbt6oBUHXc86%2FLzn58a79GV9gKwclplHcINqa6zPWGWcD6sDraTolGarfwqIV3wNif3majNgvQjE2Ce3fTM40QCF8Za%2FYaVY2xEXJbgLM8EhZKkGDhJ%2FQi%2FRrTYM721KAfwSk%2FDLnu0Md2%2FntfWsXmqC9tQz8xk5z9kDNF%2FRzZkMC9SF1vozI5MkJfxS5%2FEiYp5deKHlboe9KXtfR2Zlh2s0888d3iQQt7Ub0sO8Nx%2FQxI1BRN8rRXtP2Bkf5Gu57AJuVi7A4L3jvsRLPKVF39C4rDo9ZnYpxkBl4gtKaVwZrvOJIrHoC3xy2h4QJkqvDHZu%2BBqrQPVcCqw%2FBbh6hQFaVJDs4MlwX84QETM9SluqsHNU68eOZXqp8YeAfMFVuk%2Fj6TOkg%2BYdXY7gXS%2BHPEzOPR%2FCbbnhg6YobPMJleTpV1fjAW0tlwvqA%2B1BHBhDHicMKeyYZKhCtgLDuyPPty3bZaGud6uDnHJjn09u%2F%2FB%2BwHQtnw6gh0T6JHMNzejcIGOqUBxqUpP0fwE%2Fv6Ef%2FvkNJoggKb3R49E%2Bs2x35XXys0XMAn3EXGEoO3HcBmgMD3ZSZw6h%2BfRVlSYKxDPyM9czq5fWr0llCl67V1yJ9t7Y1muIfCVfmofA80gr9kNL91q1U%2BZZTlLuot8pp8rs2ii0oMQUq9vCPQZfQlz0Xc7rgCCiFAfD0Rl%2FN7xx71giCI%2Fc4niioK8tC%2BTd5ohJKn4OgTR%2Bhc6kEK&X-Amz-Signature=70e80ade4be9ca502cd9150785602ca7e1b0791c35ecea0164e278c2432e35ab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7GOPVN4%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESK3tLrc%2FIB%2FSK46d3GkufyVoXPPpTskAd4g5JqjPLQAiEArrp3hdw3JbNPqU6PlQJPqE1b3LGFoA0RL0sPBzjHCTcq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJtPCP%2Fzjg1wwJMVZCrcA0kp3%2B1khUqk6NoPGr%2BgbS%2B7Os1Ek4DisTn7ou701ISdQIgdoR0k1wdqa5MslfVtqWMUePOaLrSdRxf9RkM0ukrTMabFGjdu4aXCMu7OgYaxVprY7tjz7aZ%2BJyOuSLdm3MLbt6oBUHXc86%2FLzn58a79GV9gKwclplHcINqa6zPWGWcD6sDraTolGarfwqIV3wNif3majNgvQjE2Ce3fTM40QCF8Za%2FYaVY2xEXJbgLM8EhZKkGDhJ%2FQi%2FRrTYM721KAfwSk%2FDLnu0Md2%2FntfWsXmqC9tQz8xk5z9kDNF%2FRzZkMC9SF1vozI5MkJfxS5%2FEiYp5deKHlboe9KXtfR2Zlh2s0888d3iQQt7Ub0sO8Nx%2FQxI1BRN8rRXtP2Bkf5Gu57AJuVi7A4L3jvsRLPKVF39C4rDo9ZnYpxkBl4gtKaVwZrvOJIrHoC3xy2h4QJkqvDHZu%2BBqrQPVcCqw%2FBbh6hQFaVJDs4MlwX84QETM9SluqsHNU68eOZXqp8YeAfMFVuk%2Fj6TOkg%2BYdXY7gXS%2BHPEzOPR%2FCbbnhg6YobPMJleTpV1fjAW0tlwvqA%2B1BHBhDHicMKeyYZKhCtgLDuyPPty3bZaGud6uDnHJjn09u%2F%2FB%2BwHQtnw6gh0T6JHMNzejcIGOqUBxqUpP0fwE%2Fv6Ef%2FvkNJoggKb3R49E%2Bs2x35XXys0XMAn3EXGEoO3HcBmgMD3ZSZw6h%2BfRVlSYKxDPyM9czq5fWr0llCl67V1yJ9t7Y1muIfCVfmofA80gr9kNL91q1U%2BZZTlLuot8pp8rs2ii0oMQUq9vCPQZfQlz0Xc7rgCCiFAfD0Rl%2FN7xx71giCI%2Fc4niioK8tC%2BTd5ohJKn4OgTR%2Bhc6kEK&X-Amz-Signature=9f0407219519a02260741cfed33bc59f5363725e7a342427b55561c6fcdbe44c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
