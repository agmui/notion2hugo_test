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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JIDRZVU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIHyjjRv08DtX7MsUxnzyWMwVIFektKBGU9aIZRltJNCJAiEAk59eIRVQDO3PrYl0gVFF2PTQ5L6N5ED9jcuxlWac1goq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMowX7vOL2ouLRYqvyrcA4avekWt9fHzWNLIVDcu9spAuJZQNvtZuKKgsSu%2BSypoGl6I%2FVX8KG42mQE%2FfFnTBuzILH4jSHhNjDRK864%2BeqnmBmWDPz3Rkgn6BIc0OcCZfMqa3fuJhTG%2BRfl%2BOlGw%2FGOifhEn%2Bpl4v6%2FmrhQV91lgh4Xd1O14ctTwfsil1F0X%2Fo1iq%2B%2FYakDdCEXDnr2HtZST%2Fledh6BOP5Rv6M1pkChtnafwuePmFTXM0WZC99sZZYLbYHbeCiFgPvoVa7yrTY6d7JK2OyvxBwO%2BoLxF5P%2FpLfVUBi4CUzgEbPipoeSZWKLxrgcOfLgqqzMFS353tWNh345OUYVILHqhkpHWnXPj7OL5cRHPEjz5vYKKnPqZE%2FFRXPiOu1ILpS08niCb4cyLsGZiCmKwSPn84eIhIP5bTkaxWb3KEJyDPuNnKJn5DlAwIlVkF49D0Gu13soI8AYfGYEvn7oxB3LtixL6eskhhvEG5afKNmQtfi8EdVozSLzDUAJG9vyj2wjEWr6kKmqFLdf2HZ1EDL2vMcvz4B5HYK02AN5Bv6Cy3MlZFwVhb3trVjU6mo3JEqNa6MimOFIHcoAoQVU5M1qSEsj4Uh4vR3bGcfchDwYsfJ%2Bh6WevmREk2GD00WMAjvEpMIj7lr0GOqUBVsjP3xV2yyyfzyTqeJ33yJQDTz2Ces2tIn7kyJmBhZwvNLCCb7KmVhKHr34dWuRZAGd7JsHqO%2BG9b2XxgUe2f8DxwXIxwwBjLI4M8Z2yBjwqCxGz8e8KgIm2E%2Fn73KAkq330%2FBWiGogUiL4%2F7rdh6WPqzoiThI0gXjeT1QDj2NnfezbAcqYuyzNH1r4eQQrtfEwwiB6tQaZDotddwWPn7llAjR97&X-Amz-Signature=7904a8f2055e1c1b09c3a811f6e2a6c4c594473a698540fe2f3248770b7767f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JIDRZVU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIHyjjRv08DtX7MsUxnzyWMwVIFektKBGU9aIZRltJNCJAiEAk59eIRVQDO3PrYl0gVFF2PTQ5L6N5ED9jcuxlWac1goq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMowX7vOL2ouLRYqvyrcA4avekWt9fHzWNLIVDcu9spAuJZQNvtZuKKgsSu%2BSypoGl6I%2FVX8KG42mQE%2FfFnTBuzILH4jSHhNjDRK864%2BeqnmBmWDPz3Rkgn6BIc0OcCZfMqa3fuJhTG%2BRfl%2BOlGw%2FGOifhEn%2Bpl4v6%2FmrhQV91lgh4Xd1O14ctTwfsil1F0X%2Fo1iq%2B%2FYakDdCEXDnr2HtZST%2Fledh6BOP5Rv6M1pkChtnafwuePmFTXM0WZC99sZZYLbYHbeCiFgPvoVa7yrTY6d7JK2OyvxBwO%2BoLxF5P%2FpLfVUBi4CUzgEbPipoeSZWKLxrgcOfLgqqzMFS353tWNh345OUYVILHqhkpHWnXPj7OL5cRHPEjz5vYKKnPqZE%2FFRXPiOu1ILpS08niCb4cyLsGZiCmKwSPn84eIhIP5bTkaxWb3KEJyDPuNnKJn5DlAwIlVkF49D0Gu13soI8AYfGYEvn7oxB3LtixL6eskhhvEG5afKNmQtfi8EdVozSLzDUAJG9vyj2wjEWr6kKmqFLdf2HZ1EDL2vMcvz4B5HYK02AN5Bv6Cy3MlZFwVhb3trVjU6mo3JEqNa6MimOFIHcoAoQVU5M1qSEsj4Uh4vR3bGcfchDwYsfJ%2Bh6WevmREk2GD00WMAjvEpMIj7lr0GOqUBVsjP3xV2yyyfzyTqeJ33yJQDTz2Ces2tIn7kyJmBhZwvNLCCb7KmVhKHr34dWuRZAGd7JsHqO%2BG9b2XxgUe2f8DxwXIxwwBjLI4M8Z2yBjwqCxGz8e8KgIm2E%2Fn73KAkq330%2FBWiGogUiL4%2F7rdh6WPqzoiThI0gXjeT1QDj2NnfezbAcqYuyzNH1r4eQQrtfEwwiB6tQaZDotddwWPn7llAjR97&X-Amz-Signature=68a72d74edbac254d4cab7efc88de0472705bd1e56ff713dbb781ca6e821f9c9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JIDRZVU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIHyjjRv08DtX7MsUxnzyWMwVIFektKBGU9aIZRltJNCJAiEAk59eIRVQDO3PrYl0gVFF2PTQ5L6N5ED9jcuxlWac1goq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMowX7vOL2ouLRYqvyrcA4avekWt9fHzWNLIVDcu9spAuJZQNvtZuKKgsSu%2BSypoGl6I%2FVX8KG42mQE%2FfFnTBuzILH4jSHhNjDRK864%2BeqnmBmWDPz3Rkgn6BIc0OcCZfMqa3fuJhTG%2BRfl%2BOlGw%2FGOifhEn%2Bpl4v6%2FmrhQV91lgh4Xd1O14ctTwfsil1F0X%2Fo1iq%2B%2FYakDdCEXDnr2HtZST%2Fledh6BOP5Rv6M1pkChtnafwuePmFTXM0WZC99sZZYLbYHbeCiFgPvoVa7yrTY6d7JK2OyvxBwO%2BoLxF5P%2FpLfVUBi4CUzgEbPipoeSZWKLxrgcOfLgqqzMFS353tWNh345OUYVILHqhkpHWnXPj7OL5cRHPEjz5vYKKnPqZE%2FFRXPiOu1ILpS08niCb4cyLsGZiCmKwSPn84eIhIP5bTkaxWb3KEJyDPuNnKJn5DlAwIlVkF49D0Gu13soI8AYfGYEvn7oxB3LtixL6eskhhvEG5afKNmQtfi8EdVozSLzDUAJG9vyj2wjEWr6kKmqFLdf2HZ1EDL2vMcvz4B5HYK02AN5Bv6Cy3MlZFwVhb3trVjU6mo3JEqNa6MimOFIHcoAoQVU5M1qSEsj4Uh4vR3bGcfchDwYsfJ%2Bh6WevmREk2GD00WMAjvEpMIj7lr0GOqUBVsjP3xV2yyyfzyTqeJ33yJQDTz2Ces2tIn7kyJmBhZwvNLCCb7KmVhKHr34dWuRZAGd7JsHqO%2BG9b2XxgUe2f8DxwXIxwwBjLI4M8Z2yBjwqCxGz8e8KgIm2E%2Fn73KAkq330%2FBWiGogUiL4%2F7rdh6WPqzoiThI0gXjeT1QDj2NnfezbAcqYuyzNH1r4eQQrtfEwwiB6tQaZDotddwWPn7llAjR97&X-Amz-Signature=3200fbc96c3918e9e6ec34c5f3ef87561eda4c6322ce879277751a513147461d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JIDRZVU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIHyjjRv08DtX7MsUxnzyWMwVIFektKBGU9aIZRltJNCJAiEAk59eIRVQDO3PrYl0gVFF2PTQ5L6N5ED9jcuxlWac1goq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMowX7vOL2ouLRYqvyrcA4avekWt9fHzWNLIVDcu9spAuJZQNvtZuKKgsSu%2BSypoGl6I%2FVX8KG42mQE%2FfFnTBuzILH4jSHhNjDRK864%2BeqnmBmWDPz3Rkgn6BIc0OcCZfMqa3fuJhTG%2BRfl%2BOlGw%2FGOifhEn%2Bpl4v6%2FmrhQV91lgh4Xd1O14ctTwfsil1F0X%2Fo1iq%2B%2FYakDdCEXDnr2HtZST%2Fledh6BOP5Rv6M1pkChtnafwuePmFTXM0WZC99sZZYLbYHbeCiFgPvoVa7yrTY6d7JK2OyvxBwO%2BoLxF5P%2FpLfVUBi4CUzgEbPipoeSZWKLxrgcOfLgqqzMFS353tWNh345OUYVILHqhkpHWnXPj7OL5cRHPEjz5vYKKnPqZE%2FFRXPiOu1ILpS08niCb4cyLsGZiCmKwSPn84eIhIP5bTkaxWb3KEJyDPuNnKJn5DlAwIlVkF49D0Gu13soI8AYfGYEvn7oxB3LtixL6eskhhvEG5afKNmQtfi8EdVozSLzDUAJG9vyj2wjEWr6kKmqFLdf2HZ1EDL2vMcvz4B5HYK02AN5Bv6Cy3MlZFwVhb3trVjU6mo3JEqNa6MimOFIHcoAoQVU5M1qSEsj4Uh4vR3bGcfchDwYsfJ%2Bh6WevmREk2GD00WMAjvEpMIj7lr0GOqUBVsjP3xV2yyyfzyTqeJ33yJQDTz2Ces2tIn7kyJmBhZwvNLCCb7KmVhKHr34dWuRZAGd7JsHqO%2BG9b2XxgUe2f8DxwXIxwwBjLI4M8Z2yBjwqCxGz8e8KgIm2E%2Fn73KAkq330%2FBWiGogUiL4%2F7rdh6WPqzoiThI0gXjeT1QDj2NnfezbAcqYuyzNH1r4eQQrtfEwwiB6tQaZDotddwWPn7llAjR97&X-Amz-Signature=abc4558c4abf84e5e9b0b4ef2f7f8477af99b0c83caf26ee3e671a68357bef51&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JIDRZVU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIHyjjRv08DtX7MsUxnzyWMwVIFektKBGU9aIZRltJNCJAiEAk59eIRVQDO3PrYl0gVFF2PTQ5L6N5ED9jcuxlWac1goq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMowX7vOL2ouLRYqvyrcA4avekWt9fHzWNLIVDcu9spAuJZQNvtZuKKgsSu%2BSypoGl6I%2FVX8KG42mQE%2FfFnTBuzILH4jSHhNjDRK864%2BeqnmBmWDPz3Rkgn6BIc0OcCZfMqa3fuJhTG%2BRfl%2BOlGw%2FGOifhEn%2Bpl4v6%2FmrhQV91lgh4Xd1O14ctTwfsil1F0X%2Fo1iq%2B%2FYakDdCEXDnr2HtZST%2Fledh6BOP5Rv6M1pkChtnafwuePmFTXM0WZC99sZZYLbYHbeCiFgPvoVa7yrTY6d7JK2OyvxBwO%2BoLxF5P%2FpLfVUBi4CUzgEbPipoeSZWKLxrgcOfLgqqzMFS353tWNh345OUYVILHqhkpHWnXPj7OL5cRHPEjz5vYKKnPqZE%2FFRXPiOu1ILpS08niCb4cyLsGZiCmKwSPn84eIhIP5bTkaxWb3KEJyDPuNnKJn5DlAwIlVkF49D0Gu13soI8AYfGYEvn7oxB3LtixL6eskhhvEG5afKNmQtfi8EdVozSLzDUAJG9vyj2wjEWr6kKmqFLdf2HZ1EDL2vMcvz4B5HYK02AN5Bv6Cy3MlZFwVhb3trVjU6mo3JEqNa6MimOFIHcoAoQVU5M1qSEsj4Uh4vR3bGcfchDwYsfJ%2Bh6WevmREk2GD00WMAjvEpMIj7lr0GOqUBVsjP3xV2yyyfzyTqeJ33yJQDTz2Ces2tIn7kyJmBhZwvNLCCb7KmVhKHr34dWuRZAGd7JsHqO%2BG9b2XxgUe2f8DxwXIxwwBjLI4M8Z2yBjwqCxGz8e8KgIm2E%2Fn73KAkq330%2FBWiGogUiL4%2F7rdh6WPqzoiThI0gXjeT1QDj2NnfezbAcqYuyzNH1r4eQQrtfEwwiB6tQaZDotddwWPn7llAjR97&X-Amz-Signature=6ba57036684266b41a6d348f075d2d94780c4bc1a3b1b1385092cbf3d94d19d2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JIDRZVU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIHyjjRv08DtX7MsUxnzyWMwVIFektKBGU9aIZRltJNCJAiEAk59eIRVQDO3PrYl0gVFF2PTQ5L6N5ED9jcuxlWac1goq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMowX7vOL2ouLRYqvyrcA4avekWt9fHzWNLIVDcu9spAuJZQNvtZuKKgsSu%2BSypoGl6I%2FVX8KG42mQE%2FfFnTBuzILH4jSHhNjDRK864%2BeqnmBmWDPz3Rkgn6BIc0OcCZfMqa3fuJhTG%2BRfl%2BOlGw%2FGOifhEn%2Bpl4v6%2FmrhQV91lgh4Xd1O14ctTwfsil1F0X%2Fo1iq%2B%2FYakDdCEXDnr2HtZST%2Fledh6BOP5Rv6M1pkChtnafwuePmFTXM0WZC99sZZYLbYHbeCiFgPvoVa7yrTY6d7JK2OyvxBwO%2BoLxF5P%2FpLfVUBi4CUzgEbPipoeSZWKLxrgcOfLgqqzMFS353tWNh345OUYVILHqhkpHWnXPj7OL5cRHPEjz5vYKKnPqZE%2FFRXPiOu1ILpS08niCb4cyLsGZiCmKwSPn84eIhIP5bTkaxWb3KEJyDPuNnKJn5DlAwIlVkF49D0Gu13soI8AYfGYEvn7oxB3LtixL6eskhhvEG5afKNmQtfi8EdVozSLzDUAJG9vyj2wjEWr6kKmqFLdf2HZ1EDL2vMcvz4B5HYK02AN5Bv6Cy3MlZFwVhb3trVjU6mo3JEqNa6MimOFIHcoAoQVU5M1qSEsj4Uh4vR3bGcfchDwYsfJ%2Bh6WevmREk2GD00WMAjvEpMIj7lr0GOqUBVsjP3xV2yyyfzyTqeJ33yJQDTz2Ces2tIn7kyJmBhZwvNLCCb7KmVhKHr34dWuRZAGd7JsHqO%2BG9b2XxgUe2f8DxwXIxwwBjLI4M8Z2yBjwqCxGz8e8KgIm2E%2Fn73KAkq330%2FBWiGogUiL4%2F7rdh6WPqzoiThI0gXjeT1QDj2NnfezbAcqYuyzNH1r4eQQrtfEwwiB6tQaZDotddwWPn7llAjR97&X-Amz-Signature=1bfa9451882a62031e7b263ac0fce5a3df52c0d64963218807dce98fdcc421ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JIDRZVU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIHyjjRv08DtX7MsUxnzyWMwVIFektKBGU9aIZRltJNCJAiEAk59eIRVQDO3PrYl0gVFF2PTQ5L6N5ED9jcuxlWac1goq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMowX7vOL2ouLRYqvyrcA4avekWt9fHzWNLIVDcu9spAuJZQNvtZuKKgsSu%2BSypoGl6I%2FVX8KG42mQE%2FfFnTBuzILH4jSHhNjDRK864%2BeqnmBmWDPz3Rkgn6BIc0OcCZfMqa3fuJhTG%2BRfl%2BOlGw%2FGOifhEn%2Bpl4v6%2FmrhQV91lgh4Xd1O14ctTwfsil1F0X%2Fo1iq%2B%2FYakDdCEXDnr2HtZST%2Fledh6BOP5Rv6M1pkChtnafwuePmFTXM0WZC99sZZYLbYHbeCiFgPvoVa7yrTY6d7JK2OyvxBwO%2BoLxF5P%2FpLfVUBi4CUzgEbPipoeSZWKLxrgcOfLgqqzMFS353tWNh345OUYVILHqhkpHWnXPj7OL5cRHPEjz5vYKKnPqZE%2FFRXPiOu1ILpS08niCb4cyLsGZiCmKwSPn84eIhIP5bTkaxWb3KEJyDPuNnKJn5DlAwIlVkF49D0Gu13soI8AYfGYEvn7oxB3LtixL6eskhhvEG5afKNmQtfi8EdVozSLzDUAJG9vyj2wjEWr6kKmqFLdf2HZ1EDL2vMcvz4B5HYK02AN5Bv6Cy3MlZFwVhb3trVjU6mo3JEqNa6MimOFIHcoAoQVU5M1qSEsj4Uh4vR3bGcfchDwYsfJ%2Bh6WevmREk2GD00WMAjvEpMIj7lr0GOqUBVsjP3xV2yyyfzyTqeJ33yJQDTz2Ces2tIn7kyJmBhZwvNLCCb7KmVhKHr34dWuRZAGd7JsHqO%2BG9b2XxgUe2f8DxwXIxwwBjLI4M8Z2yBjwqCxGz8e8KgIm2E%2Fn73KAkq330%2FBWiGogUiL4%2F7rdh6WPqzoiThI0gXjeT1QDj2NnfezbAcqYuyzNH1r4eQQrtfEwwiB6tQaZDotddwWPn7llAjR97&X-Amz-Signature=424b423a5e9b40e78aa7dc24e45f9f7c30e547c39f8ba57b9f384818447d3813&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JIDRZVU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIHyjjRv08DtX7MsUxnzyWMwVIFektKBGU9aIZRltJNCJAiEAk59eIRVQDO3PrYl0gVFF2PTQ5L6N5ED9jcuxlWac1goq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMowX7vOL2ouLRYqvyrcA4avekWt9fHzWNLIVDcu9spAuJZQNvtZuKKgsSu%2BSypoGl6I%2FVX8KG42mQE%2FfFnTBuzILH4jSHhNjDRK864%2BeqnmBmWDPz3Rkgn6BIc0OcCZfMqa3fuJhTG%2BRfl%2BOlGw%2FGOifhEn%2Bpl4v6%2FmrhQV91lgh4Xd1O14ctTwfsil1F0X%2Fo1iq%2B%2FYakDdCEXDnr2HtZST%2Fledh6BOP5Rv6M1pkChtnafwuePmFTXM0WZC99sZZYLbYHbeCiFgPvoVa7yrTY6d7JK2OyvxBwO%2BoLxF5P%2FpLfVUBi4CUzgEbPipoeSZWKLxrgcOfLgqqzMFS353tWNh345OUYVILHqhkpHWnXPj7OL5cRHPEjz5vYKKnPqZE%2FFRXPiOu1ILpS08niCb4cyLsGZiCmKwSPn84eIhIP5bTkaxWb3KEJyDPuNnKJn5DlAwIlVkF49D0Gu13soI8AYfGYEvn7oxB3LtixL6eskhhvEG5afKNmQtfi8EdVozSLzDUAJG9vyj2wjEWr6kKmqFLdf2HZ1EDL2vMcvz4B5HYK02AN5Bv6Cy3MlZFwVhb3trVjU6mo3JEqNa6MimOFIHcoAoQVU5M1qSEsj4Uh4vR3bGcfchDwYsfJ%2Bh6WevmREk2GD00WMAjvEpMIj7lr0GOqUBVsjP3xV2yyyfzyTqeJ33yJQDTz2Ces2tIn7kyJmBhZwvNLCCb7KmVhKHr34dWuRZAGd7JsHqO%2BG9b2XxgUe2f8DxwXIxwwBjLI4M8Z2yBjwqCxGz8e8KgIm2E%2Fn73KAkq330%2FBWiGogUiL4%2F7rdh6WPqzoiThI0gXjeT1QDj2NnfezbAcqYuyzNH1r4eQQrtfEwwiB6tQaZDotddwWPn7llAjR97&X-Amz-Signature=e89178373b4c3f476840ea7cc1f030182e6416304f2a52f6518683bf3c75526d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
