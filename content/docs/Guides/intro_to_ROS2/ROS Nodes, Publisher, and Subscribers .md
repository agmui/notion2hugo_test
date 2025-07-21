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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRY6FNVN%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzt8oyj0kCMGajd%2BWGVLR3GY67B7WZvh6etPo%2BZd5hXAIhANGSJjQtut8BGTJLa1Qarbv%2FWNB7wr0AVG5%2BfIa8KANsKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTL7D1%2Ft8ZO1YoY%2FUq3AO8ywVZfS4JbKZAU60CQ1RK020osUJioqzjtHM7m469UHitrfgdDZMEO3UZ41bsu4egkhXn4jhTNJa1mpkoUdebvmdljDQ7G5cL7fc2cGCpghbgcnxz67oGcPYS5968KR%2FWJ22wLpymth8EgSkwXrMB%2FXCbbevU2SBOtj1oo8tejZ9otWjOmLO%2FthwkBN828Jdu4jtsxzx7rSDItU2%2BJmD8CRrplCfzNGobMIkoNzMhZHqspIsQ4mIMr7QGUHuLYZwTVaatPL2K65YRC18w3uhDPaSM3tvfWxsIg2tRCUu3nyF0tGok3MV9u%2BrcTFn1%2Fld3iT1blmY%2Bh8URWFXDSizZXYLcVjsyTS0Le3nMa0BJOfjepvoH3LSAKt8TUxXbGLHqGhwlMLgyMb%2BjobV0huWoxr78grWvewPIhPNutUCX96n4wYD5QeRplfuo3GAhAGvVlez12KGR5B9wTsdJIQfgiqzyYekcdud9%2BjLNvBsnEIHgL%2BHYvN9oB%2FUoksS0%2B39l0ijsuJ4yhTaQLqxWbC8n%2ByDafTNvrmvH80PJB6AsHqdY6PjkDnucHhwURWuHiUQCAmzRdBwCGZayYAO8TAbvz7L5X7Xdm%2BlSSikyXYc5Y4QTpybbg1qTap1TYjCck%2FfDBjqkAfgB600WKkHxTHhsYH5p4KVjGlduYJemzeH30isBOTOMZf%2BUzXITbh3P0niJpnGXy1fjaWr8IgJi9wuMCGWjxkeGM8wbNF1bCjYH8I%2BRfJgVPrY1sePiIEA30tnmPspEkSn87DRbpdPH%2Bs%2Bi8UgAULmfootrAbL357GMBy3O7Qnw%2By61dsUl3OZK%2BqD2k52Ri%2BKJUKENYZMP1fL07F7iJY889Jy%2B&X-Amz-Signature=a2079ff6fb5954176f4e6175699bc4c72cf554740e215db2d20d16b7264b3e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRY6FNVN%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzt8oyj0kCMGajd%2BWGVLR3GY67B7WZvh6etPo%2BZd5hXAIhANGSJjQtut8BGTJLa1Qarbv%2FWNB7wr0AVG5%2BfIa8KANsKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTL7D1%2Ft8ZO1YoY%2FUq3AO8ywVZfS4JbKZAU60CQ1RK020osUJioqzjtHM7m469UHitrfgdDZMEO3UZ41bsu4egkhXn4jhTNJa1mpkoUdebvmdljDQ7G5cL7fc2cGCpghbgcnxz67oGcPYS5968KR%2FWJ22wLpymth8EgSkwXrMB%2FXCbbevU2SBOtj1oo8tejZ9otWjOmLO%2FthwkBN828Jdu4jtsxzx7rSDItU2%2BJmD8CRrplCfzNGobMIkoNzMhZHqspIsQ4mIMr7QGUHuLYZwTVaatPL2K65YRC18w3uhDPaSM3tvfWxsIg2tRCUu3nyF0tGok3MV9u%2BrcTFn1%2Fld3iT1blmY%2Bh8URWFXDSizZXYLcVjsyTS0Le3nMa0BJOfjepvoH3LSAKt8TUxXbGLHqGhwlMLgyMb%2BjobV0huWoxr78grWvewPIhPNutUCX96n4wYD5QeRplfuo3GAhAGvVlez12KGR5B9wTsdJIQfgiqzyYekcdud9%2BjLNvBsnEIHgL%2BHYvN9oB%2FUoksS0%2B39l0ijsuJ4yhTaQLqxWbC8n%2ByDafTNvrmvH80PJB6AsHqdY6PjkDnucHhwURWuHiUQCAmzRdBwCGZayYAO8TAbvz7L5X7Xdm%2BlSSikyXYc5Y4QTpybbg1qTap1TYjCck%2FfDBjqkAfgB600WKkHxTHhsYH5p4KVjGlduYJemzeH30isBOTOMZf%2BUzXITbh3P0niJpnGXy1fjaWr8IgJi9wuMCGWjxkeGM8wbNF1bCjYH8I%2BRfJgVPrY1sePiIEA30tnmPspEkSn87DRbpdPH%2Bs%2Bi8UgAULmfootrAbL357GMBy3O7Qnw%2By61dsUl3OZK%2BqD2k52Ri%2BKJUKENYZMP1fL07F7iJY889Jy%2B&X-Amz-Signature=f1d17c8017888dea13830bbb21a57f350341ca5a1c0e21f8703f563bdffdeca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRY6FNVN%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzt8oyj0kCMGajd%2BWGVLR3GY67B7WZvh6etPo%2BZd5hXAIhANGSJjQtut8BGTJLa1Qarbv%2FWNB7wr0AVG5%2BfIa8KANsKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTL7D1%2Ft8ZO1YoY%2FUq3AO8ywVZfS4JbKZAU60CQ1RK020osUJioqzjtHM7m469UHitrfgdDZMEO3UZ41bsu4egkhXn4jhTNJa1mpkoUdebvmdljDQ7G5cL7fc2cGCpghbgcnxz67oGcPYS5968KR%2FWJ22wLpymth8EgSkwXrMB%2FXCbbevU2SBOtj1oo8tejZ9otWjOmLO%2FthwkBN828Jdu4jtsxzx7rSDItU2%2BJmD8CRrplCfzNGobMIkoNzMhZHqspIsQ4mIMr7QGUHuLYZwTVaatPL2K65YRC18w3uhDPaSM3tvfWxsIg2tRCUu3nyF0tGok3MV9u%2BrcTFn1%2Fld3iT1blmY%2Bh8URWFXDSizZXYLcVjsyTS0Le3nMa0BJOfjepvoH3LSAKt8TUxXbGLHqGhwlMLgyMb%2BjobV0huWoxr78grWvewPIhPNutUCX96n4wYD5QeRplfuo3GAhAGvVlez12KGR5B9wTsdJIQfgiqzyYekcdud9%2BjLNvBsnEIHgL%2BHYvN9oB%2FUoksS0%2B39l0ijsuJ4yhTaQLqxWbC8n%2ByDafTNvrmvH80PJB6AsHqdY6PjkDnucHhwURWuHiUQCAmzRdBwCGZayYAO8TAbvz7L5X7Xdm%2BlSSikyXYc5Y4QTpybbg1qTap1TYjCck%2FfDBjqkAfgB600WKkHxTHhsYH5p4KVjGlduYJemzeH30isBOTOMZf%2BUzXITbh3P0niJpnGXy1fjaWr8IgJi9wuMCGWjxkeGM8wbNF1bCjYH8I%2BRfJgVPrY1sePiIEA30tnmPspEkSn87DRbpdPH%2Bs%2Bi8UgAULmfootrAbL357GMBy3O7Qnw%2By61dsUl3OZK%2BqD2k52Ri%2BKJUKENYZMP1fL07F7iJY889Jy%2B&X-Amz-Signature=68410ab4ddacfa9ff284fa75a0cd5da8a1b209ebd0e0959b0c1eb4e79ebdb5f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRY6FNVN%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzt8oyj0kCMGajd%2BWGVLR3GY67B7WZvh6etPo%2BZd5hXAIhANGSJjQtut8BGTJLa1Qarbv%2FWNB7wr0AVG5%2BfIa8KANsKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTL7D1%2Ft8ZO1YoY%2FUq3AO8ywVZfS4JbKZAU60CQ1RK020osUJioqzjtHM7m469UHitrfgdDZMEO3UZ41bsu4egkhXn4jhTNJa1mpkoUdebvmdljDQ7G5cL7fc2cGCpghbgcnxz67oGcPYS5968KR%2FWJ22wLpymth8EgSkwXrMB%2FXCbbevU2SBOtj1oo8tejZ9otWjOmLO%2FthwkBN828Jdu4jtsxzx7rSDItU2%2BJmD8CRrplCfzNGobMIkoNzMhZHqspIsQ4mIMr7QGUHuLYZwTVaatPL2K65YRC18w3uhDPaSM3tvfWxsIg2tRCUu3nyF0tGok3MV9u%2BrcTFn1%2Fld3iT1blmY%2Bh8URWFXDSizZXYLcVjsyTS0Le3nMa0BJOfjepvoH3LSAKt8TUxXbGLHqGhwlMLgyMb%2BjobV0huWoxr78grWvewPIhPNutUCX96n4wYD5QeRplfuo3GAhAGvVlez12KGR5B9wTsdJIQfgiqzyYekcdud9%2BjLNvBsnEIHgL%2BHYvN9oB%2FUoksS0%2B39l0ijsuJ4yhTaQLqxWbC8n%2ByDafTNvrmvH80PJB6AsHqdY6PjkDnucHhwURWuHiUQCAmzRdBwCGZayYAO8TAbvz7L5X7Xdm%2BlSSikyXYc5Y4QTpybbg1qTap1TYjCck%2FfDBjqkAfgB600WKkHxTHhsYH5p4KVjGlduYJemzeH30isBOTOMZf%2BUzXITbh3P0niJpnGXy1fjaWr8IgJi9wuMCGWjxkeGM8wbNF1bCjYH8I%2BRfJgVPrY1sePiIEA30tnmPspEkSn87DRbpdPH%2Bs%2Bi8UgAULmfootrAbL357GMBy3O7Qnw%2By61dsUl3OZK%2BqD2k52Ri%2BKJUKENYZMP1fL07F7iJY889Jy%2B&X-Amz-Signature=cea7dcb22e254c4f11293fe7d69e9a62f8df69cd341e40462a758008e49f6c2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRY6FNVN%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzt8oyj0kCMGajd%2BWGVLR3GY67B7WZvh6etPo%2BZd5hXAIhANGSJjQtut8BGTJLa1Qarbv%2FWNB7wr0AVG5%2BfIa8KANsKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTL7D1%2Ft8ZO1YoY%2FUq3AO8ywVZfS4JbKZAU60CQ1RK020osUJioqzjtHM7m469UHitrfgdDZMEO3UZ41bsu4egkhXn4jhTNJa1mpkoUdebvmdljDQ7G5cL7fc2cGCpghbgcnxz67oGcPYS5968KR%2FWJ22wLpymth8EgSkwXrMB%2FXCbbevU2SBOtj1oo8tejZ9otWjOmLO%2FthwkBN828Jdu4jtsxzx7rSDItU2%2BJmD8CRrplCfzNGobMIkoNzMhZHqspIsQ4mIMr7QGUHuLYZwTVaatPL2K65YRC18w3uhDPaSM3tvfWxsIg2tRCUu3nyF0tGok3MV9u%2BrcTFn1%2Fld3iT1blmY%2Bh8URWFXDSizZXYLcVjsyTS0Le3nMa0BJOfjepvoH3LSAKt8TUxXbGLHqGhwlMLgyMb%2BjobV0huWoxr78grWvewPIhPNutUCX96n4wYD5QeRplfuo3GAhAGvVlez12KGR5B9wTsdJIQfgiqzyYekcdud9%2BjLNvBsnEIHgL%2BHYvN9oB%2FUoksS0%2B39l0ijsuJ4yhTaQLqxWbC8n%2ByDafTNvrmvH80PJB6AsHqdY6PjkDnucHhwURWuHiUQCAmzRdBwCGZayYAO8TAbvz7L5X7Xdm%2BlSSikyXYc5Y4QTpybbg1qTap1TYjCck%2FfDBjqkAfgB600WKkHxTHhsYH5p4KVjGlduYJemzeH30isBOTOMZf%2BUzXITbh3P0niJpnGXy1fjaWr8IgJi9wuMCGWjxkeGM8wbNF1bCjYH8I%2BRfJgVPrY1sePiIEA30tnmPspEkSn87DRbpdPH%2Bs%2Bi8UgAULmfootrAbL357GMBy3O7Qnw%2By61dsUl3OZK%2BqD2k52Ri%2BKJUKENYZMP1fL07F7iJY889Jy%2B&X-Amz-Signature=a3e0a799717b8aac6d89ee615cd163d56bdca91fb5ca4ec59c031ea5ca8fd713&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRY6FNVN%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzt8oyj0kCMGajd%2BWGVLR3GY67B7WZvh6etPo%2BZd5hXAIhANGSJjQtut8BGTJLa1Qarbv%2FWNB7wr0AVG5%2BfIa8KANsKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTL7D1%2Ft8ZO1YoY%2FUq3AO8ywVZfS4JbKZAU60CQ1RK020osUJioqzjtHM7m469UHitrfgdDZMEO3UZ41bsu4egkhXn4jhTNJa1mpkoUdebvmdljDQ7G5cL7fc2cGCpghbgcnxz67oGcPYS5968KR%2FWJ22wLpymth8EgSkwXrMB%2FXCbbevU2SBOtj1oo8tejZ9otWjOmLO%2FthwkBN828Jdu4jtsxzx7rSDItU2%2BJmD8CRrplCfzNGobMIkoNzMhZHqspIsQ4mIMr7QGUHuLYZwTVaatPL2K65YRC18w3uhDPaSM3tvfWxsIg2tRCUu3nyF0tGok3MV9u%2BrcTFn1%2Fld3iT1blmY%2Bh8URWFXDSizZXYLcVjsyTS0Le3nMa0BJOfjepvoH3LSAKt8TUxXbGLHqGhwlMLgyMb%2BjobV0huWoxr78grWvewPIhPNutUCX96n4wYD5QeRplfuo3GAhAGvVlez12KGR5B9wTsdJIQfgiqzyYekcdud9%2BjLNvBsnEIHgL%2BHYvN9oB%2FUoksS0%2B39l0ijsuJ4yhTaQLqxWbC8n%2ByDafTNvrmvH80PJB6AsHqdY6PjkDnucHhwURWuHiUQCAmzRdBwCGZayYAO8TAbvz7L5X7Xdm%2BlSSikyXYc5Y4QTpybbg1qTap1TYjCck%2FfDBjqkAfgB600WKkHxTHhsYH5p4KVjGlduYJemzeH30isBOTOMZf%2BUzXITbh3P0niJpnGXy1fjaWr8IgJi9wuMCGWjxkeGM8wbNF1bCjYH8I%2BRfJgVPrY1sePiIEA30tnmPspEkSn87DRbpdPH%2Bs%2Bi8UgAULmfootrAbL357GMBy3O7Qnw%2By61dsUl3OZK%2BqD2k52Ri%2BKJUKENYZMP1fL07F7iJY889Jy%2B&X-Amz-Signature=870ba9df7ed2dc1d9e806698febc747a28db4564af18a05276c4218963d5cede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRY6FNVN%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzt8oyj0kCMGajd%2BWGVLR3GY67B7WZvh6etPo%2BZd5hXAIhANGSJjQtut8BGTJLa1Qarbv%2FWNB7wr0AVG5%2BfIa8KANsKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTL7D1%2Ft8ZO1YoY%2FUq3AO8ywVZfS4JbKZAU60CQ1RK020osUJioqzjtHM7m469UHitrfgdDZMEO3UZ41bsu4egkhXn4jhTNJa1mpkoUdebvmdljDQ7G5cL7fc2cGCpghbgcnxz67oGcPYS5968KR%2FWJ22wLpymth8EgSkwXrMB%2FXCbbevU2SBOtj1oo8tejZ9otWjOmLO%2FthwkBN828Jdu4jtsxzx7rSDItU2%2BJmD8CRrplCfzNGobMIkoNzMhZHqspIsQ4mIMr7QGUHuLYZwTVaatPL2K65YRC18w3uhDPaSM3tvfWxsIg2tRCUu3nyF0tGok3MV9u%2BrcTFn1%2Fld3iT1blmY%2Bh8URWFXDSizZXYLcVjsyTS0Le3nMa0BJOfjepvoH3LSAKt8TUxXbGLHqGhwlMLgyMb%2BjobV0huWoxr78grWvewPIhPNutUCX96n4wYD5QeRplfuo3GAhAGvVlez12KGR5B9wTsdJIQfgiqzyYekcdud9%2BjLNvBsnEIHgL%2BHYvN9oB%2FUoksS0%2B39l0ijsuJ4yhTaQLqxWbC8n%2ByDafTNvrmvH80PJB6AsHqdY6PjkDnucHhwURWuHiUQCAmzRdBwCGZayYAO8TAbvz7L5X7Xdm%2BlSSikyXYc5Y4QTpybbg1qTap1TYjCck%2FfDBjqkAfgB600WKkHxTHhsYH5p4KVjGlduYJemzeH30isBOTOMZf%2BUzXITbh3P0niJpnGXy1fjaWr8IgJi9wuMCGWjxkeGM8wbNF1bCjYH8I%2BRfJgVPrY1sePiIEA30tnmPspEkSn87DRbpdPH%2Bs%2Bi8UgAULmfootrAbL357GMBy3O7Qnw%2By61dsUl3OZK%2BqD2k52Ri%2BKJUKENYZMP1fL07F7iJY889Jy%2B&X-Amz-Signature=e5c27f3eb93a04e69c4f1d8ee03734ed4e8a8affd86a68ab9ad04b11e0901e0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRY6FNVN%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzt8oyj0kCMGajd%2BWGVLR3GY67B7WZvh6etPo%2BZd5hXAIhANGSJjQtut8BGTJLa1Qarbv%2FWNB7wr0AVG5%2BfIa8KANsKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTL7D1%2Ft8ZO1YoY%2FUq3AO8ywVZfS4JbKZAU60CQ1RK020osUJioqzjtHM7m469UHitrfgdDZMEO3UZ41bsu4egkhXn4jhTNJa1mpkoUdebvmdljDQ7G5cL7fc2cGCpghbgcnxz67oGcPYS5968KR%2FWJ22wLpymth8EgSkwXrMB%2FXCbbevU2SBOtj1oo8tejZ9otWjOmLO%2FthwkBN828Jdu4jtsxzx7rSDItU2%2BJmD8CRrplCfzNGobMIkoNzMhZHqspIsQ4mIMr7QGUHuLYZwTVaatPL2K65YRC18w3uhDPaSM3tvfWxsIg2tRCUu3nyF0tGok3MV9u%2BrcTFn1%2Fld3iT1blmY%2Bh8URWFXDSizZXYLcVjsyTS0Le3nMa0BJOfjepvoH3LSAKt8TUxXbGLHqGhwlMLgyMb%2BjobV0huWoxr78grWvewPIhPNutUCX96n4wYD5QeRplfuo3GAhAGvVlez12KGR5B9wTsdJIQfgiqzyYekcdud9%2BjLNvBsnEIHgL%2BHYvN9oB%2FUoksS0%2B39l0ijsuJ4yhTaQLqxWbC8n%2ByDafTNvrmvH80PJB6AsHqdY6PjkDnucHhwURWuHiUQCAmzRdBwCGZayYAO8TAbvz7L5X7Xdm%2BlSSikyXYc5Y4QTpybbg1qTap1TYjCck%2FfDBjqkAfgB600WKkHxTHhsYH5p4KVjGlduYJemzeH30isBOTOMZf%2BUzXITbh3P0niJpnGXy1fjaWr8IgJi9wuMCGWjxkeGM8wbNF1bCjYH8I%2BRfJgVPrY1sePiIEA30tnmPspEkSn87DRbpdPH%2Bs%2Bi8UgAULmfootrAbL357GMBy3O7Qnw%2By61dsUl3OZK%2BqD2k52Ri%2BKJUKENYZMP1fL07F7iJY889Jy%2B&X-Amz-Signature=2f17679486794f6f4deddface672d3c52e001c619168d3e2b8360e7d05d3ead4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
