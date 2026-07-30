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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHBWO6ZJ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCr9Zg%2Bu7MN4XWPIotobQnaFC9%2BEWWVc8fwJ82x3Pr6OgIgdF1uKal8B09R0SrAixFz0aZKYDcUTmeb%2FGqzGFneajkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE2chOFirh%2FSnKtQqircAy8fF9aFh5X59IU%2B6hVVRgI%2F76By9aTw389K17BI0fLX4Yu%2B5%2BbSKGzCL17pJn2WryybpjMhsSEfkJnwSpZpb0KqAz7E4axX6JKG%2FcyJRqffDe4ozyEVkr%2FTM9ckuB2VtOeYHLngc0%2BgJnTA%2Butj5FXSPTvk8Fdv59Vu5LgulCV69vV2e2g8Cqp3XsazyADEeqvr%2FpF9JP9fwSxA0khvQQTXzgfDLvhBADxRYmdfpdd%2FgliaC4NtgwVpwkOcNbEY4C4%2FiZcp554bjaFgsqLg9bONs9Q14W5eMaJXiID3h8iP3rGJJ50xvOQz%2FwvvMqZniBWXkP7afcCF4RVPr0R8lqH0eYQpx1eJcXFTkIYrGlfDolOjleJy07QpFBjSzqG7dUoQH96VQo3vzC7izxLPnUWBi9JNaaYyOHEyLw44WesO4Iyb1IuXqrYwksWk9NagYQpFbLSF4GiC8vQ6rAKDLPunNYVTwLxiaI%2BfiwnEsMByzLDL7BOL%2BKSdkLjNUrsuK21SnDk9Ez76Se9Syo8nT0ibywbnd6fyE6hUicDUBaBMq835ut24ITCQa68Cy3qYIFCIPbGi03BFtbPYOyeMbuO0S32q87PHdUF11vBlT7qarr5UNvUfxsnnlsfrMOffqtMGOqUBfOpGoniLjehIqVG296%2FRe%2F1lePujl1H9V9lcA6uRUlFTtONQQN9yJcM6GWQLo9CJmhFsUOLhrvThFGfYPPXRkj4YKHlF3ZuxFNiHz24kCNI4L%2FiPSHwPlH%2FUt5lHNgnvWp19eArox5UqXDRS774sRioaWyvTl42p7nTLHvr1PZu2HXH%2FSyAsFH9PlhdCyO2Y9%2BUFqnuAT8Rawljn4IOLzg%2BdPXQz&X-Amz-Signature=cea2562e63dfff64cfd3e5415077ad33737df6858cd3ccdc0d9260ad2ff19b5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHBWO6ZJ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCr9Zg%2Bu7MN4XWPIotobQnaFC9%2BEWWVc8fwJ82x3Pr6OgIgdF1uKal8B09R0SrAixFz0aZKYDcUTmeb%2FGqzGFneajkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE2chOFirh%2FSnKtQqircAy8fF9aFh5X59IU%2B6hVVRgI%2F76By9aTw389K17BI0fLX4Yu%2B5%2BbSKGzCL17pJn2WryybpjMhsSEfkJnwSpZpb0KqAz7E4axX6JKG%2FcyJRqffDe4ozyEVkr%2FTM9ckuB2VtOeYHLngc0%2BgJnTA%2Butj5FXSPTvk8Fdv59Vu5LgulCV69vV2e2g8Cqp3XsazyADEeqvr%2FpF9JP9fwSxA0khvQQTXzgfDLvhBADxRYmdfpdd%2FgliaC4NtgwVpwkOcNbEY4C4%2FiZcp554bjaFgsqLg9bONs9Q14W5eMaJXiID3h8iP3rGJJ50xvOQz%2FwvvMqZniBWXkP7afcCF4RVPr0R8lqH0eYQpx1eJcXFTkIYrGlfDolOjleJy07QpFBjSzqG7dUoQH96VQo3vzC7izxLPnUWBi9JNaaYyOHEyLw44WesO4Iyb1IuXqrYwksWk9NagYQpFbLSF4GiC8vQ6rAKDLPunNYVTwLxiaI%2BfiwnEsMByzLDL7BOL%2BKSdkLjNUrsuK21SnDk9Ez76Se9Syo8nT0ibywbnd6fyE6hUicDUBaBMq835ut24ITCQa68Cy3qYIFCIPbGi03BFtbPYOyeMbuO0S32q87PHdUF11vBlT7qarr5UNvUfxsnnlsfrMOffqtMGOqUBfOpGoniLjehIqVG296%2FRe%2F1lePujl1H9V9lcA6uRUlFTtONQQN9yJcM6GWQLo9CJmhFsUOLhrvThFGfYPPXRkj4YKHlF3ZuxFNiHz24kCNI4L%2FiPSHwPlH%2FUt5lHNgnvWp19eArox5UqXDRS774sRioaWyvTl42p7nTLHvr1PZu2HXH%2FSyAsFH9PlhdCyO2Y9%2BUFqnuAT8Rawljn4IOLzg%2BdPXQz&X-Amz-Signature=3e748f77f5dee543d2c8f42c4f75923b83c6aa298433c1bd71d31937ca18ae6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHBWO6ZJ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCr9Zg%2Bu7MN4XWPIotobQnaFC9%2BEWWVc8fwJ82x3Pr6OgIgdF1uKal8B09R0SrAixFz0aZKYDcUTmeb%2FGqzGFneajkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE2chOFirh%2FSnKtQqircAy8fF9aFh5X59IU%2B6hVVRgI%2F76By9aTw389K17BI0fLX4Yu%2B5%2BbSKGzCL17pJn2WryybpjMhsSEfkJnwSpZpb0KqAz7E4axX6JKG%2FcyJRqffDe4ozyEVkr%2FTM9ckuB2VtOeYHLngc0%2BgJnTA%2Butj5FXSPTvk8Fdv59Vu5LgulCV69vV2e2g8Cqp3XsazyADEeqvr%2FpF9JP9fwSxA0khvQQTXzgfDLvhBADxRYmdfpdd%2FgliaC4NtgwVpwkOcNbEY4C4%2FiZcp554bjaFgsqLg9bONs9Q14W5eMaJXiID3h8iP3rGJJ50xvOQz%2FwvvMqZniBWXkP7afcCF4RVPr0R8lqH0eYQpx1eJcXFTkIYrGlfDolOjleJy07QpFBjSzqG7dUoQH96VQo3vzC7izxLPnUWBi9JNaaYyOHEyLw44WesO4Iyb1IuXqrYwksWk9NagYQpFbLSF4GiC8vQ6rAKDLPunNYVTwLxiaI%2BfiwnEsMByzLDL7BOL%2BKSdkLjNUrsuK21SnDk9Ez76Se9Syo8nT0ibywbnd6fyE6hUicDUBaBMq835ut24ITCQa68Cy3qYIFCIPbGi03BFtbPYOyeMbuO0S32q87PHdUF11vBlT7qarr5UNvUfxsnnlsfrMOffqtMGOqUBfOpGoniLjehIqVG296%2FRe%2F1lePujl1H9V9lcA6uRUlFTtONQQN9yJcM6GWQLo9CJmhFsUOLhrvThFGfYPPXRkj4YKHlF3ZuxFNiHz24kCNI4L%2FiPSHwPlH%2FUt5lHNgnvWp19eArox5UqXDRS774sRioaWyvTl42p7nTLHvr1PZu2HXH%2FSyAsFH9PlhdCyO2Y9%2BUFqnuAT8Rawljn4IOLzg%2BdPXQz&X-Amz-Signature=88853d0bf243dd045bf688a9f9242ae8db10742e272a0a72f60d3071ea07c17b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHBWO6ZJ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCr9Zg%2Bu7MN4XWPIotobQnaFC9%2BEWWVc8fwJ82x3Pr6OgIgdF1uKal8B09R0SrAixFz0aZKYDcUTmeb%2FGqzGFneajkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE2chOFirh%2FSnKtQqircAy8fF9aFh5X59IU%2B6hVVRgI%2F76By9aTw389K17BI0fLX4Yu%2B5%2BbSKGzCL17pJn2WryybpjMhsSEfkJnwSpZpb0KqAz7E4axX6JKG%2FcyJRqffDe4ozyEVkr%2FTM9ckuB2VtOeYHLngc0%2BgJnTA%2Butj5FXSPTvk8Fdv59Vu5LgulCV69vV2e2g8Cqp3XsazyADEeqvr%2FpF9JP9fwSxA0khvQQTXzgfDLvhBADxRYmdfpdd%2FgliaC4NtgwVpwkOcNbEY4C4%2FiZcp554bjaFgsqLg9bONs9Q14W5eMaJXiID3h8iP3rGJJ50xvOQz%2FwvvMqZniBWXkP7afcCF4RVPr0R8lqH0eYQpx1eJcXFTkIYrGlfDolOjleJy07QpFBjSzqG7dUoQH96VQo3vzC7izxLPnUWBi9JNaaYyOHEyLw44WesO4Iyb1IuXqrYwksWk9NagYQpFbLSF4GiC8vQ6rAKDLPunNYVTwLxiaI%2BfiwnEsMByzLDL7BOL%2BKSdkLjNUrsuK21SnDk9Ez76Se9Syo8nT0ibywbnd6fyE6hUicDUBaBMq835ut24ITCQa68Cy3qYIFCIPbGi03BFtbPYOyeMbuO0S32q87PHdUF11vBlT7qarr5UNvUfxsnnlsfrMOffqtMGOqUBfOpGoniLjehIqVG296%2FRe%2F1lePujl1H9V9lcA6uRUlFTtONQQN9yJcM6GWQLo9CJmhFsUOLhrvThFGfYPPXRkj4YKHlF3ZuxFNiHz24kCNI4L%2FiPSHwPlH%2FUt5lHNgnvWp19eArox5UqXDRS774sRioaWyvTl42p7nTLHvr1PZu2HXH%2FSyAsFH9PlhdCyO2Y9%2BUFqnuAT8Rawljn4IOLzg%2BdPXQz&X-Amz-Signature=d5cbfd63192ffd74a8ba4e36cb06d623edeeabc30bdceb13cbe69147df1bf8fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHBWO6ZJ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCr9Zg%2Bu7MN4XWPIotobQnaFC9%2BEWWVc8fwJ82x3Pr6OgIgdF1uKal8B09R0SrAixFz0aZKYDcUTmeb%2FGqzGFneajkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE2chOFirh%2FSnKtQqircAy8fF9aFh5X59IU%2B6hVVRgI%2F76By9aTw389K17BI0fLX4Yu%2B5%2BbSKGzCL17pJn2WryybpjMhsSEfkJnwSpZpb0KqAz7E4axX6JKG%2FcyJRqffDe4ozyEVkr%2FTM9ckuB2VtOeYHLngc0%2BgJnTA%2Butj5FXSPTvk8Fdv59Vu5LgulCV69vV2e2g8Cqp3XsazyADEeqvr%2FpF9JP9fwSxA0khvQQTXzgfDLvhBADxRYmdfpdd%2FgliaC4NtgwVpwkOcNbEY4C4%2FiZcp554bjaFgsqLg9bONs9Q14W5eMaJXiID3h8iP3rGJJ50xvOQz%2FwvvMqZniBWXkP7afcCF4RVPr0R8lqH0eYQpx1eJcXFTkIYrGlfDolOjleJy07QpFBjSzqG7dUoQH96VQo3vzC7izxLPnUWBi9JNaaYyOHEyLw44WesO4Iyb1IuXqrYwksWk9NagYQpFbLSF4GiC8vQ6rAKDLPunNYVTwLxiaI%2BfiwnEsMByzLDL7BOL%2BKSdkLjNUrsuK21SnDk9Ez76Se9Syo8nT0ibywbnd6fyE6hUicDUBaBMq835ut24ITCQa68Cy3qYIFCIPbGi03BFtbPYOyeMbuO0S32q87PHdUF11vBlT7qarr5UNvUfxsnnlsfrMOffqtMGOqUBfOpGoniLjehIqVG296%2FRe%2F1lePujl1H9V9lcA6uRUlFTtONQQN9yJcM6GWQLo9CJmhFsUOLhrvThFGfYPPXRkj4YKHlF3ZuxFNiHz24kCNI4L%2FiPSHwPlH%2FUt5lHNgnvWp19eArox5UqXDRS774sRioaWyvTl42p7nTLHvr1PZu2HXH%2FSyAsFH9PlhdCyO2Y9%2BUFqnuAT8Rawljn4IOLzg%2BdPXQz&X-Amz-Signature=b45f4d44cf1a0a056125cdd94e854eba1898dfffbefd2bda8e545535428c1726&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHBWO6ZJ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCr9Zg%2Bu7MN4XWPIotobQnaFC9%2BEWWVc8fwJ82x3Pr6OgIgdF1uKal8B09R0SrAixFz0aZKYDcUTmeb%2FGqzGFneajkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE2chOFirh%2FSnKtQqircAy8fF9aFh5X59IU%2B6hVVRgI%2F76By9aTw389K17BI0fLX4Yu%2B5%2BbSKGzCL17pJn2WryybpjMhsSEfkJnwSpZpb0KqAz7E4axX6JKG%2FcyJRqffDe4ozyEVkr%2FTM9ckuB2VtOeYHLngc0%2BgJnTA%2Butj5FXSPTvk8Fdv59Vu5LgulCV69vV2e2g8Cqp3XsazyADEeqvr%2FpF9JP9fwSxA0khvQQTXzgfDLvhBADxRYmdfpdd%2FgliaC4NtgwVpwkOcNbEY4C4%2FiZcp554bjaFgsqLg9bONs9Q14W5eMaJXiID3h8iP3rGJJ50xvOQz%2FwvvMqZniBWXkP7afcCF4RVPr0R8lqH0eYQpx1eJcXFTkIYrGlfDolOjleJy07QpFBjSzqG7dUoQH96VQo3vzC7izxLPnUWBi9JNaaYyOHEyLw44WesO4Iyb1IuXqrYwksWk9NagYQpFbLSF4GiC8vQ6rAKDLPunNYVTwLxiaI%2BfiwnEsMByzLDL7BOL%2BKSdkLjNUrsuK21SnDk9Ez76Se9Syo8nT0ibywbnd6fyE6hUicDUBaBMq835ut24ITCQa68Cy3qYIFCIPbGi03BFtbPYOyeMbuO0S32q87PHdUF11vBlT7qarr5UNvUfxsnnlsfrMOffqtMGOqUBfOpGoniLjehIqVG296%2FRe%2F1lePujl1H9V9lcA6uRUlFTtONQQN9yJcM6GWQLo9CJmhFsUOLhrvThFGfYPPXRkj4YKHlF3ZuxFNiHz24kCNI4L%2FiPSHwPlH%2FUt5lHNgnvWp19eArox5UqXDRS774sRioaWyvTl42p7nTLHvr1PZu2HXH%2FSyAsFH9PlhdCyO2Y9%2BUFqnuAT8Rawljn4IOLzg%2BdPXQz&X-Amz-Signature=b3b308da96e5ee1158d5ef64039d95dcad6a9084933a2cfd302b672fcd49807b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHBWO6ZJ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCr9Zg%2Bu7MN4XWPIotobQnaFC9%2BEWWVc8fwJ82x3Pr6OgIgdF1uKal8B09R0SrAixFz0aZKYDcUTmeb%2FGqzGFneajkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE2chOFirh%2FSnKtQqircAy8fF9aFh5X59IU%2B6hVVRgI%2F76By9aTw389K17BI0fLX4Yu%2B5%2BbSKGzCL17pJn2WryybpjMhsSEfkJnwSpZpb0KqAz7E4axX6JKG%2FcyJRqffDe4ozyEVkr%2FTM9ckuB2VtOeYHLngc0%2BgJnTA%2Butj5FXSPTvk8Fdv59Vu5LgulCV69vV2e2g8Cqp3XsazyADEeqvr%2FpF9JP9fwSxA0khvQQTXzgfDLvhBADxRYmdfpdd%2FgliaC4NtgwVpwkOcNbEY4C4%2FiZcp554bjaFgsqLg9bONs9Q14W5eMaJXiID3h8iP3rGJJ50xvOQz%2FwvvMqZniBWXkP7afcCF4RVPr0R8lqH0eYQpx1eJcXFTkIYrGlfDolOjleJy07QpFBjSzqG7dUoQH96VQo3vzC7izxLPnUWBi9JNaaYyOHEyLw44WesO4Iyb1IuXqrYwksWk9NagYQpFbLSF4GiC8vQ6rAKDLPunNYVTwLxiaI%2BfiwnEsMByzLDL7BOL%2BKSdkLjNUrsuK21SnDk9Ez76Se9Syo8nT0ibywbnd6fyE6hUicDUBaBMq835ut24ITCQa68Cy3qYIFCIPbGi03BFtbPYOyeMbuO0S32q87PHdUF11vBlT7qarr5UNvUfxsnnlsfrMOffqtMGOqUBfOpGoniLjehIqVG296%2FRe%2F1lePujl1H9V9lcA6uRUlFTtONQQN9yJcM6GWQLo9CJmhFsUOLhrvThFGfYPPXRkj4YKHlF3ZuxFNiHz24kCNI4L%2FiPSHwPlH%2FUt5lHNgnvWp19eArox5UqXDRS774sRioaWyvTl42p7nTLHvr1PZu2HXH%2FSyAsFH9PlhdCyO2Y9%2BUFqnuAT8Rawljn4IOLzg%2BdPXQz&X-Amz-Signature=7c81a79bec0a1b821a6089cad2078bd6c042760a6eb0b73e5d0b2604d626eb58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHBWO6ZJ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCr9Zg%2Bu7MN4XWPIotobQnaFC9%2BEWWVc8fwJ82x3Pr6OgIgdF1uKal8B09R0SrAixFz0aZKYDcUTmeb%2FGqzGFneajkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE2chOFirh%2FSnKtQqircAy8fF9aFh5X59IU%2B6hVVRgI%2F76By9aTw389K17BI0fLX4Yu%2B5%2BbSKGzCL17pJn2WryybpjMhsSEfkJnwSpZpb0KqAz7E4axX6JKG%2FcyJRqffDe4ozyEVkr%2FTM9ckuB2VtOeYHLngc0%2BgJnTA%2Butj5FXSPTvk8Fdv59Vu5LgulCV69vV2e2g8Cqp3XsazyADEeqvr%2FpF9JP9fwSxA0khvQQTXzgfDLvhBADxRYmdfpdd%2FgliaC4NtgwVpwkOcNbEY4C4%2FiZcp554bjaFgsqLg9bONs9Q14W5eMaJXiID3h8iP3rGJJ50xvOQz%2FwvvMqZniBWXkP7afcCF4RVPr0R8lqH0eYQpx1eJcXFTkIYrGlfDolOjleJy07QpFBjSzqG7dUoQH96VQo3vzC7izxLPnUWBi9JNaaYyOHEyLw44WesO4Iyb1IuXqrYwksWk9NagYQpFbLSF4GiC8vQ6rAKDLPunNYVTwLxiaI%2BfiwnEsMByzLDL7BOL%2BKSdkLjNUrsuK21SnDk9Ez76Se9Syo8nT0ibywbnd6fyE6hUicDUBaBMq835ut24ITCQa68Cy3qYIFCIPbGi03BFtbPYOyeMbuO0S32q87PHdUF11vBlT7qarr5UNvUfxsnnlsfrMOffqtMGOqUBfOpGoniLjehIqVG296%2FRe%2F1lePujl1H9V9lcA6uRUlFTtONQQN9yJcM6GWQLo9CJmhFsUOLhrvThFGfYPPXRkj4YKHlF3ZuxFNiHz24kCNI4L%2FiPSHwPlH%2FUt5lHNgnvWp19eArox5UqXDRS774sRioaWyvTl42p7nTLHvr1PZu2HXH%2FSyAsFH9PlhdCyO2Y9%2BUFqnuAT8Rawljn4IOLzg%2BdPXQz&X-Amz-Signature=848d21ca05c8b5b33dff87033e6973a120f3d0edc21fe31e8d97e1bfb01059e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
