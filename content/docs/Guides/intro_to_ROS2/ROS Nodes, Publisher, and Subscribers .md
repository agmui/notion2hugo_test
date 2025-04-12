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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLUJ2FZF%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDDaD3i%2BBhvFnLMshM7mkJyO%2FndyD%2FRmr1ngvpnfasxCwIgYs08lBY62yspjQ4X6G3LmdceKqr88kyqOpss%2BDrmte4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFX0U%2BurRrlDpTs1ircA1%2FVNP4ZIEXltwMkSeBTDwYpxvQ5F%2BcvJ2bijr2GzidFSuUhhSN8nFE1lrV9bv0ch7rhKT2vf%2Bb5rsQuja6%2FCePsIT9OnI0p3%2BznIJbGQ0bVT3rLwJWstwt6yonJerEXDQj0dkRAhnUYQY5RK9V0kkpxJAq8A3xH0RXY250nz4qLNL8TKRH9HQTzxDbX8fP8miOY13flOSPzt6xKM5RdcTB4gkGMGgUOIbPRJegoBYU5QJpO%2F39eYWuVEQBC3%2BSkLSCqAWTh3E4s75Afm4f8JS5rNsZULJgdgq1U0phVC5okgFzokzbHySmQhuYh844WZdMqEanCsgMwrPN7mew9dW2gp%2FgYVkeTCxueguKrYBiSlGAE8FGkogTn17reYO7xJ1hDjSt9y%2BHcUPVCm8U2fGKLN4WGin%2BcWNmXM97epmforobGXiUCeROc%2FELYcRfB9oWEuJFX0cR1jBLIYwuyRc2aQieJEVJ7wxVe03dl9qzWsrmAom6db4cvmpyCxjUc6XfNSCJQQRwpKENuyoIifAjB83W1OzG%2FNxEoord7KUv5g%2FOch0LhJ0MUuK%2FwEAr8opB%2Fk0sBPXzCIdoGmb5EGOjx31ZxQZnj%2B2ddg7QcA71mJTtt512lWIm2XqayMOCE578GOqUBMixr80PJq2RFHYyAPtbQxUh9j7NsOBrFe23fkc9b0NcpCU0dXz27EzwWgn68Rb0dOpIJSpK05ENgnpoK%2Bc%2Bgu4eyo1NufuwqrzkQuoiJ3mVy7P9X3u7naRG6vevBFjW4TungJ73mEswwiGAdgal2I95GWTkSm0JrtwX6iAeOBNvQfS58spJQYjAQ284iNdTr09m7V9MWqwmXjUeJwSxx%2Bv%2Fozc%2Fb&X-Amz-Signature=4d3fa3544578f643c99362114c9363c7f70c48774a3652d0386f2ca32831aeca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLUJ2FZF%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDDaD3i%2BBhvFnLMshM7mkJyO%2FndyD%2FRmr1ngvpnfasxCwIgYs08lBY62yspjQ4X6G3LmdceKqr88kyqOpss%2BDrmte4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFX0U%2BurRrlDpTs1ircA1%2FVNP4ZIEXltwMkSeBTDwYpxvQ5F%2BcvJ2bijr2GzidFSuUhhSN8nFE1lrV9bv0ch7rhKT2vf%2Bb5rsQuja6%2FCePsIT9OnI0p3%2BznIJbGQ0bVT3rLwJWstwt6yonJerEXDQj0dkRAhnUYQY5RK9V0kkpxJAq8A3xH0RXY250nz4qLNL8TKRH9HQTzxDbX8fP8miOY13flOSPzt6xKM5RdcTB4gkGMGgUOIbPRJegoBYU5QJpO%2F39eYWuVEQBC3%2BSkLSCqAWTh3E4s75Afm4f8JS5rNsZULJgdgq1U0phVC5okgFzokzbHySmQhuYh844WZdMqEanCsgMwrPN7mew9dW2gp%2FgYVkeTCxueguKrYBiSlGAE8FGkogTn17reYO7xJ1hDjSt9y%2BHcUPVCm8U2fGKLN4WGin%2BcWNmXM97epmforobGXiUCeROc%2FELYcRfB9oWEuJFX0cR1jBLIYwuyRc2aQieJEVJ7wxVe03dl9qzWsrmAom6db4cvmpyCxjUc6XfNSCJQQRwpKENuyoIifAjB83W1OzG%2FNxEoord7KUv5g%2FOch0LhJ0MUuK%2FwEAr8opB%2Fk0sBPXzCIdoGmb5EGOjx31ZxQZnj%2B2ddg7QcA71mJTtt512lWIm2XqayMOCE578GOqUBMixr80PJq2RFHYyAPtbQxUh9j7NsOBrFe23fkc9b0NcpCU0dXz27EzwWgn68Rb0dOpIJSpK05ENgnpoK%2Bc%2Bgu4eyo1NufuwqrzkQuoiJ3mVy7P9X3u7naRG6vevBFjW4TungJ73mEswwiGAdgal2I95GWTkSm0JrtwX6iAeOBNvQfS58spJQYjAQ284iNdTr09m7V9MWqwmXjUeJwSxx%2Bv%2Fozc%2Fb&X-Amz-Signature=08f48c4737ccf52f35e0b40a33e25048533cb54a96812faa29a668c1f1e1a90e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLUJ2FZF%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDDaD3i%2BBhvFnLMshM7mkJyO%2FndyD%2FRmr1ngvpnfasxCwIgYs08lBY62yspjQ4X6G3LmdceKqr88kyqOpss%2BDrmte4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFX0U%2BurRrlDpTs1ircA1%2FVNP4ZIEXltwMkSeBTDwYpxvQ5F%2BcvJ2bijr2GzidFSuUhhSN8nFE1lrV9bv0ch7rhKT2vf%2Bb5rsQuja6%2FCePsIT9OnI0p3%2BznIJbGQ0bVT3rLwJWstwt6yonJerEXDQj0dkRAhnUYQY5RK9V0kkpxJAq8A3xH0RXY250nz4qLNL8TKRH9HQTzxDbX8fP8miOY13flOSPzt6xKM5RdcTB4gkGMGgUOIbPRJegoBYU5QJpO%2F39eYWuVEQBC3%2BSkLSCqAWTh3E4s75Afm4f8JS5rNsZULJgdgq1U0phVC5okgFzokzbHySmQhuYh844WZdMqEanCsgMwrPN7mew9dW2gp%2FgYVkeTCxueguKrYBiSlGAE8FGkogTn17reYO7xJ1hDjSt9y%2BHcUPVCm8U2fGKLN4WGin%2BcWNmXM97epmforobGXiUCeROc%2FELYcRfB9oWEuJFX0cR1jBLIYwuyRc2aQieJEVJ7wxVe03dl9qzWsrmAom6db4cvmpyCxjUc6XfNSCJQQRwpKENuyoIifAjB83W1OzG%2FNxEoord7KUv5g%2FOch0LhJ0MUuK%2FwEAr8opB%2Fk0sBPXzCIdoGmb5EGOjx31ZxQZnj%2B2ddg7QcA71mJTtt512lWIm2XqayMOCE578GOqUBMixr80PJq2RFHYyAPtbQxUh9j7NsOBrFe23fkc9b0NcpCU0dXz27EzwWgn68Rb0dOpIJSpK05ENgnpoK%2Bc%2Bgu4eyo1NufuwqrzkQuoiJ3mVy7P9X3u7naRG6vevBFjW4TungJ73mEswwiGAdgal2I95GWTkSm0JrtwX6iAeOBNvQfS58spJQYjAQ284iNdTr09m7V9MWqwmXjUeJwSxx%2Bv%2Fozc%2Fb&X-Amz-Signature=b2722b4c7e63652599daeb68e6afe958fe7b550ecda8697463a3e6d2e67dcc38&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLUJ2FZF%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDDaD3i%2BBhvFnLMshM7mkJyO%2FndyD%2FRmr1ngvpnfasxCwIgYs08lBY62yspjQ4X6G3LmdceKqr88kyqOpss%2BDrmte4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFX0U%2BurRrlDpTs1ircA1%2FVNP4ZIEXltwMkSeBTDwYpxvQ5F%2BcvJ2bijr2GzidFSuUhhSN8nFE1lrV9bv0ch7rhKT2vf%2Bb5rsQuja6%2FCePsIT9OnI0p3%2BznIJbGQ0bVT3rLwJWstwt6yonJerEXDQj0dkRAhnUYQY5RK9V0kkpxJAq8A3xH0RXY250nz4qLNL8TKRH9HQTzxDbX8fP8miOY13flOSPzt6xKM5RdcTB4gkGMGgUOIbPRJegoBYU5QJpO%2F39eYWuVEQBC3%2BSkLSCqAWTh3E4s75Afm4f8JS5rNsZULJgdgq1U0phVC5okgFzokzbHySmQhuYh844WZdMqEanCsgMwrPN7mew9dW2gp%2FgYVkeTCxueguKrYBiSlGAE8FGkogTn17reYO7xJ1hDjSt9y%2BHcUPVCm8U2fGKLN4WGin%2BcWNmXM97epmforobGXiUCeROc%2FELYcRfB9oWEuJFX0cR1jBLIYwuyRc2aQieJEVJ7wxVe03dl9qzWsrmAom6db4cvmpyCxjUc6XfNSCJQQRwpKENuyoIifAjB83W1OzG%2FNxEoord7KUv5g%2FOch0LhJ0MUuK%2FwEAr8opB%2Fk0sBPXzCIdoGmb5EGOjx31ZxQZnj%2B2ddg7QcA71mJTtt512lWIm2XqayMOCE578GOqUBMixr80PJq2RFHYyAPtbQxUh9j7NsOBrFe23fkc9b0NcpCU0dXz27EzwWgn68Rb0dOpIJSpK05ENgnpoK%2Bc%2Bgu4eyo1NufuwqrzkQuoiJ3mVy7P9X3u7naRG6vevBFjW4TungJ73mEswwiGAdgal2I95GWTkSm0JrtwX6iAeOBNvQfS58spJQYjAQ284iNdTr09m7V9MWqwmXjUeJwSxx%2Bv%2Fozc%2Fb&X-Amz-Signature=79dc53375ee39ac08d0eff13507a7c736383b23f15ee705f871941b2a42802b3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLUJ2FZF%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDDaD3i%2BBhvFnLMshM7mkJyO%2FndyD%2FRmr1ngvpnfasxCwIgYs08lBY62yspjQ4X6G3LmdceKqr88kyqOpss%2BDrmte4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFX0U%2BurRrlDpTs1ircA1%2FVNP4ZIEXltwMkSeBTDwYpxvQ5F%2BcvJ2bijr2GzidFSuUhhSN8nFE1lrV9bv0ch7rhKT2vf%2Bb5rsQuja6%2FCePsIT9OnI0p3%2BznIJbGQ0bVT3rLwJWstwt6yonJerEXDQj0dkRAhnUYQY5RK9V0kkpxJAq8A3xH0RXY250nz4qLNL8TKRH9HQTzxDbX8fP8miOY13flOSPzt6xKM5RdcTB4gkGMGgUOIbPRJegoBYU5QJpO%2F39eYWuVEQBC3%2BSkLSCqAWTh3E4s75Afm4f8JS5rNsZULJgdgq1U0phVC5okgFzokzbHySmQhuYh844WZdMqEanCsgMwrPN7mew9dW2gp%2FgYVkeTCxueguKrYBiSlGAE8FGkogTn17reYO7xJ1hDjSt9y%2BHcUPVCm8U2fGKLN4WGin%2BcWNmXM97epmforobGXiUCeROc%2FELYcRfB9oWEuJFX0cR1jBLIYwuyRc2aQieJEVJ7wxVe03dl9qzWsrmAom6db4cvmpyCxjUc6XfNSCJQQRwpKENuyoIifAjB83W1OzG%2FNxEoord7KUv5g%2FOch0LhJ0MUuK%2FwEAr8opB%2Fk0sBPXzCIdoGmb5EGOjx31ZxQZnj%2B2ddg7QcA71mJTtt512lWIm2XqayMOCE578GOqUBMixr80PJq2RFHYyAPtbQxUh9j7NsOBrFe23fkc9b0NcpCU0dXz27EzwWgn68Rb0dOpIJSpK05ENgnpoK%2Bc%2Bgu4eyo1NufuwqrzkQuoiJ3mVy7P9X3u7naRG6vevBFjW4TungJ73mEswwiGAdgal2I95GWTkSm0JrtwX6iAeOBNvQfS58spJQYjAQ284iNdTr09m7V9MWqwmXjUeJwSxx%2Bv%2Fozc%2Fb&X-Amz-Signature=9479a2974e65b2e75b758abf793ee4d2a2497808d9beac0fde8354dd21393679&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLUJ2FZF%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDDaD3i%2BBhvFnLMshM7mkJyO%2FndyD%2FRmr1ngvpnfasxCwIgYs08lBY62yspjQ4X6G3LmdceKqr88kyqOpss%2BDrmte4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFX0U%2BurRrlDpTs1ircA1%2FVNP4ZIEXltwMkSeBTDwYpxvQ5F%2BcvJ2bijr2GzidFSuUhhSN8nFE1lrV9bv0ch7rhKT2vf%2Bb5rsQuja6%2FCePsIT9OnI0p3%2BznIJbGQ0bVT3rLwJWstwt6yonJerEXDQj0dkRAhnUYQY5RK9V0kkpxJAq8A3xH0RXY250nz4qLNL8TKRH9HQTzxDbX8fP8miOY13flOSPzt6xKM5RdcTB4gkGMGgUOIbPRJegoBYU5QJpO%2F39eYWuVEQBC3%2BSkLSCqAWTh3E4s75Afm4f8JS5rNsZULJgdgq1U0phVC5okgFzokzbHySmQhuYh844WZdMqEanCsgMwrPN7mew9dW2gp%2FgYVkeTCxueguKrYBiSlGAE8FGkogTn17reYO7xJ1hDjSt9y%2BHcUPVCm8U2fGKLN4WGin%2BcWNmXM97epmforobGXiUCeROc%2FELYcRfB9oWEuJFX0cR1jBLIYwuyRc2aQieJEVJ7wxVe03dl9qzWsrmAom6db4cvmpyCxjUc6XfNSCJQQRwpKENuyoIifAjB83W1OzG%2FNxEoord7KUv5g%2FOch0LhJ0MUuK%2FwEAr8opB%2Fk0sBPXzCIdoGmb5EGOjx31ZxQZnj%2B2ddg7QcA71mJTtt512lWIm2XqayMOCE578GOqUBMixr80PJq2RFHYyAPtbQxUh9j7NsOBrFe23fkc9b0NcpCU0dXz27EzwWgn68Rb0dOpIJSpK05ENgnpoK%2Bc%2Bgu4eyo1NufuwqrzkQuoiJ3mVy7P9X3u7naRG6vevBFjW4TungJ73mEswwiGAdgal2I95GWTkSm0JrtwX6iAeOBNvQfS58spJQYjAQ284iNdTr09m7V9MWqwmXjUeJwSxx%2Bv%2Fozc%2Fb&X-Amz-Signature=123093fc96b83746f4e9ea1ef22250df31b0ea5332a1d542fb86a4decb845d0c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLUJ2FZF%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDDaD3i%2BBhvFnLMshM7mkJyO%2FndyD%2FRmr1ngvpnfasxCwIgYs08lBY62yspjQ4X6G3LmdceKqr88kyqOpss%2BDrmte4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFX0U%2BurRrlDpTs1ircA1%2FVNP4ZIEXltwMkSeBTDwYpxvQ5F%2BcvJ2bijr2GzidFSuUhhSN8nFE1lrV9bv0ch7rhKT2vf%2Bb5rsQuja6%2FCePsIT9OnI0p3%2BznIJbGQ0bVT3rLwJWstwt6yonJerEXDQj0dkRAhnUYQY5RK9V0kkpxJAq8A3xH0RXY250nz4qLNL8TKRH9HQTzxDbX8fP8miOY13flOSPzt6xKM5RdcTB4gkGMGgUOIbPRJegoBYU5QJpO%2F39eYWuVEQBC3%2BSkLSCqAWTh3E4s75Afm4f8JS5rNsZULJgdgq1U0phVC5okgFzokzbHySmQhuYh844WZdMqEanCsgMwrPN7mew9dW2gp%2FgYVkeTCxueguKrYBiSlGAE8FGkogTn17reYO7xJ1hDjSt9y%2BHcUPVCm8U2fGKLN4WGin%2BcWNmXM97epmforobGXiUCeROc%2FELYcRfB9oWEuJFX0cR1jBLIYwuyRc2aQieJEVJ7wxVe03dl9qzWsrmAom6db4cvmpyCxjUc6XfNSCJQQRwpKENuyoIifAjB83W1OzG%2FNxEoord7KUv5g%2FOch0LhJ0MUuK%2FwEAr8opB%2Fk0sBPXzCIdoGmb5EGOjx31ZxQZnj%2B2ddg7QcA71mJTtt512lWIm2XqayMOCE578GOqUBMixr80PJq2RFHYyAPtbQxUh9j7NsOBrFe23fkc9b0NcpCU0dXz27EzwWgn68Rb0dOpIJSpK05ENgnpoK%2Bc%2Bgu4eyo1NufuwqrzkQuoiJ3mVy7P9X3u7naRG6vevBFjW4TungJ73mEswwiGAdgal2I95GWTkSm0JrtwX6iAeOBNvQfS58spJQYjAQ284iNdTr09m7V9MWqwmXjUeJwSxx%2Bv%2Fozc%2Fb&X-Amz-Signature=9c9eba69dd3c7b89435b269c1174aee77d8bd275f9057fbfafbdf71778f04a4d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLUJ2FZF%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDDaD3i%2BBhvFnLMshM7mkJyO%2FndyD%2FRmr1ngvpnfasxCwIgYs08lBY62yspjQ4X6G3LmdceKqr88kyqOpss%2BDrmte4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFX0U%2BurRrlDpTs1ircA1%2FVNP4ZIEXltwMkSeBTDwYpxvQ5F%2BcvJ2bijr2GzidFSuUhhSN8nFE1lrV9bv0ch7rhKT2vf%2Bb5rsQuja6%2FCePsIT9OnI0p3%2BznIJbGQ0bVT3rLwJWstwt6yonJerEXDQj0dkRAhnUYQY5RK9V0kkpxJAq8A3xH0RXY250nz4qLNL8TKRH9HQTzxDbX8fP8miOY13flOSPzt6xKM5RdcTB4gkGMGgUOIbPRJegoBYU5QJpO%2F39eYWuVEQBC3%2BSkLSCqAWTh3E4s75Afm4f8JS5rNsZULJgdgq1U0phVC5okgFzokzbHySmQhuYh844WZdMqEanCsgMwrPN7mew9dW2gp%2FgYVkeTCxueguKrYBiSlGAE8FGkogTn17reYO7xJ1hDjSt9y%2BHcUPVCm8U2fGKLN4WGin%2BcWNmXM97epmforobGXiUCeROc%2FELYcRfB9oWEuJFX0cR1jBLIYwuyRc2aQieJEVJ7wxVe03dl9qzWsrmAom6db4cvmpyCxjUc6XfNSCJQQRwpKENuyoIifAjB83W1OzG%2FNxEoord7KUv5g%2FOch0LhJ0MUuK%2FwEAr8opB%2Fk0sBPXzCIdoGmb5EGOjx31ZxQZnj%2B2ddg7QcA71mJTtt512lWIm2XqayMOCE578GOqUBMixr80PJq2RFHYyAPtbQxUh9j7NsOBrFe23fkc9b0NcpCU0dXz27EzwWgn68Rb0dOpIJSpK05ENgnpoK%2Bc%2Bgu4eyo1NufuwqrzkQuoiJ3mVy7P9X3u7naRG6vevBFjW4TungJ73mEswwiGAdgal2I95GWTkSm0JrtwX6iAeOBNvQfS58spJQYjAQ284iNdTr09m7V9MWqwmXjUeJwSxx%2Bv%2Fozc%2Fb&X-Amz-Signature=c6af225c41e87590374d3ed76831ce846f044401d21c7199d409ad170b101e9a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
