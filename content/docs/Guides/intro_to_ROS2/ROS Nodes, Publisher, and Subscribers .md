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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677K7I6JN%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoCVOR4cg%2BLQBllVt1pGOptFgDurevyoZH3ksyk6gtRAiEArFcRbrJrh4JLqsmKJygEX%2FmxtOCUG5WiITddp2z3%2FZUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEF35q3YQLis9SHzayrcA6YK7khs7pGfW%2Bb83%2FoDVmDG5PomZKkJBm0SOcq9xpWoFOA9Ov8z%2BCtsabGB62YsuhhVAMvwrujq9SMIy%2BF8CcrkYvHuXEe0jHZR2W9v7LOz%2FHBKXUuog5AD6MGAt9E3sqDuhISo1%2Bhwqp5t9svZIRYCF2eC8UfArkCpNiSf4%2BE%2BZ2Yd9HerxCM89jf8NlwUM4xIti9OMYrFUD1cBe%2BvIdQjXHkBIlll%2B4rto3pj3xtjHnpsM6WvbrhBahqXwdUihFK2ONWlhAqdhXcu6aswSlEY9rTWVyHqg5aVcTvq%2FMHAqyHidnAPWB464kIuauyE0LOoljPFiV1iQindiXZXLwQC%2FTTTI04VtpiZvJ39RqQ7zxUs6Qh%2BzD%2BXgB5XL3UH0w3NEt36EwOxYFK7fooNcHvomZ9g9%2FKNPR5RyZoNX755W4xNSbIElUca%2BDFnxQSnaufXpcnQ4W2e1jVvlcU%2BQghMbps5FOtp3MZfttatEEKYf4DzQNAgjcBc5tiCBGWyi7hWQpEW%2F6XriGPsrbWTyHmJhXr2Z5oyPAsQH0XvHpGQkhqsxY0kDntpc8enwwYncbjQkHy0v%2FO3ncTJi6Uc2Hi43aQYsjk16vtlLqQWAeoWpE6SoR4qxm4dxN57MIf7j78GOqUBfAkntBDHWF9TC%2FwDVOAFO31GmGEyE0%2BH1uaHiCIxdcqldzubpWTqnwJC8BbixPySar4mBAQxrAcYEX94qqmyO4Uli%2FVtx2Fdaj5TDY9TBEsQ8ssROWDy%2FTanXuvMC2qMGo2nw4Pku%2F%2BKEhiAwIl86nWWtiNmgW0tvta17zzSLBoYZhmy%2FDsoIBd%2FC2MBMH31j6MJsC%2FsuQT7dLmqfmtsg0Z7oQJl&X-Amz-Signature=78c1c0e473488d6c72cb99cc7fbbaa67d00c19b10bfdb315c7f74d5d0ae0ca84&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677K7I6JN%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoCVOR4cg%2BLQBllVt1pGOptFgDurevyoZH3ksyk6gtRAiEArFcRbrJrh4JLqsmKJygEX%2FmxtOCUG5WiITddp2z3%2FZUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEF35q3YQLis9SHzayrcA6YK7khs7pGfW%2Bb83%2FoDVmDG5PomZKkJBm0SOcq9xpWoFOA9Ov8z%2BCtsabGB62YsuhhVAMvwrujq9SMIy%2BF8CcrkYvHuXEe0jHZR2W9v7LOz%2FHBKXUuog5AD6MGAt9E3sqDuhISo1%2Bhwqp5t9svZIRYCF2eC8UfArkCpNiSf4%2BE%2BZ2Yd9HerxCM89jf8NlwUM4xIti9OMYrFUD1cBe%2BvIdQjXHkBIlll%2B4rto3pj3xtjHnpsM6WvbrhBahqXwdUihFK2ONWlhAqdhXcu6aswSlEY9rTWVyHqg5aVcTvq%2FMHAqyHidnAPWB464kIuauyE0LOoljPFiV1iQindiXZXLwQC%2FTTTI04VtpiZvJ39RqQ7zxUs6Qh%2BzD%2BXgB5XL3UH0w3NEt36EwOxYFK7fooNcHvomZ9g9%2FKNPR5RyZoNX755W4xNSbIElUca%2BDFnxQSnaufXpcnQ4W2e1jVvlcU%2BQghMbps5FOtp3MZfttatEEKYf4DzQNAgjcBc5tiCBGWyi7hWQpEW%2F6XriGPsrbWTyHmJhXr2Z5oyPAsQH0XvHpGQkhqsxY0kDntpc8enwwYncbjQkHy0v%2FO3ncTJi6Uc2Hi43aQYsjk16vtlLqQWAeoWpE6SoR4qxm4dxN57MIf7j78GOqUBfAkntBDHWF9TC%2FwDVOAFO31GmGEyE0%2BH1uaHiCIxdcqldzubpWTqnwJC8BbixPySar4mBAQxrAcYEX94qqmyO4Uli%2FVtx2Fdaj5TDY9TBEsQ8ssROWDy%2FTanXuvMC2qMGo2nw4Pku%2F%2BKEhiAwIl86nWWtiNmgW0tvta17zzSLBoYZhmy%2FDsoIBd%2FC2MBMH31j6MJsC%2FsuQT7dLmqfmtsg0Z7oQJl&X-Amz-Signature=40c5fd35b4438167e90e223d0db24728926013349c1a37bfe7e0abbdcedd80fb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677K7I6JN%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoCVOR4cg%2BLQBllVt1pGOptFgDurevyoZH3ksyk6gtRAiEArFcRbrJrh4JLqsmKJygEX%2FmxtOCUG5WiITddp2z3%2FZUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEF35q3YQLis9SHzayrcA6YK7khs7pGfW%2Bb83%2FoDVmDG5PomZKkJBm0SOcq9xpWoFOA9Ov8z%2BCtsabGB62YsuhhVAMvwrujq9SMIy%2BF8CcrkYvHuXEe0jHZR2W9v7LOz%2FHBKXUuog5AD6MGAt9E3sqDuhISo1%2Bhwqp5t9svZIRYCF2eC8UfArkCpNiSf4%2BE%2BZ2Yd9HerxCM89jf8NlwUM4xIti9OMYrFUD1cBe%2BvIdQjXHkBIlll%2B4rto3pj3xtjHnpsM6WvbrhBahqXwdUihFK2ONWlhAqdhXcu6aswSlEY9rTWVyHqg5aVcTvq%2FMHAqyHidnAPWB464kIuauyE0LOoljPFiV1iQindiXZXLwQC%2FTTTI04VtpiZvJ39RqQ7zxUs6Qh%2BzD%2BXgB5XL3UH0w3NEt36EwOxYFK7fooNcHvomZ9g9%2FKNPR5RyZoNX755W4xNSbIElUca%2BDFnxQSnaufXpcnQ4W2e1jVvlcU%2BQghMbps5FOtp3MZfttatEEKYf4DzQNAgjcBc5tiCBGWyi7hWQpEW%2F6XriGPsrbWTyHmJhXr2Z5oyPAsQH0XvHpGQkhqsxY0kDntpc8enwwYncbjQkHy0v%2FO3ncTJi6Uc2Hi43aQYsjk16vtlLqQWAeoWpE6SoR4qxm4dxN57MIf7j78GOqUBfAkntBDHWF9TC%2FwDVOAFO31GmGEyE0%2BH1uaHiCIxdcqldzubpWTqnwJC8BbixPySar4mBAQxrAcYEX94qqmyO4Uli%2FVtx2Fdaj5TDY9TBEsQ8ssROWDy%2FTanXuvMC2qMGo2nw4Pku%2F%2BKEhiAwIl86nWWtiNmgW0tvta17zzSLBoYZhmy%2FDsoIBd%2FC2MBMH31j6MJsC%2FsuQT7dLmqfmtsg0Z7oQJl&X-Amz-Signature=98aad2c1ed575948caafb146d9a0e5728d498d0bb9cfdfb3107796f9c5a4c343&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677K7I6JN%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoCVOR4cg%2BLQBllVt1pGOptFgDurevyoZH3ksyk6gtRAiEArFcRbrJrh4JLqsmKJygEX%2FmxtOCUG5WiITddp2z3%2FZUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEF35q3YQLis9SHzayrcA6YK7khs7pGfW%2Bb83%2FoDVmDG5PomZKkJBm0SOcq9xpWoFOA9Ov8z%2BCtsabGB62YsuhhVAMvwrujq9SMIy%2BF8CcrkYvHuXEe0jHZR2W9v7LOz%2FHBKXUuog5AD6MGAt9E3sqDuhISo1%2Bhwqp5t9svZIRYCF2eC8UfArkCpNiSf4%2BE%2BZ2Yd9HerxCM89jf8NlwUM4xIti9OMYrFUD1cBe%2BvIdQjXHkBIlll%2B4rto3pj3xtjHnpsM6WvbrhBahqXwdUihFK2ONWlhAqdhXcu6aswSlEY9rTWVyHqg5aVcTvq%2FMHAqyHidnAPWB464kIuauyE0LOoljPFiV1iQindiXZXLwQC%2FTTTI04VtpiZvJ39RqQ7zxUs6Qh%2BzD%2BXgB5XL3UH0w3NEt36EwOxYFK7fooNcHvomZ9g9%2FKNPR5RyZoNX755W4xNSbIElUca%2BDFnxQSnaufXpcnQ4W2e1jVvlcU%2BQghMbps5FOtp3MZfttatEEKYf4DzQNAgjcBc5tiCBGWyi7hWQpEW%2F6XriGPsrbWTyHmJhXr2Z5oyPAsQH0XvHpGQkhqsxY0kDntpc8enwwYncbjQkHy0v%2FO3ncTJi6Uc2Hi43aQYsjk16vtlLqQWAeoWpE6SoR4qxm4dxN57MIf7j78GOqUBfAkntBDHWF9TC%2FwDVOAFO31GmGEyE0%2BH1uaHiCIxdcqldzubpWTqnwJC8BbixPySar4mBAQxrAcYEX94qqmyO4Uli%2FVtx2Fdaj5TDY9TBEsQ8ssROWDy%2FTanXuvMC2qMGo2nw4Pku%2F%2BKEhiAwIl86nWWtiNmgW0tvta17zzSLBoYZhmy%2FDsoIBd%2FC2MBMH31j6MJsC%2FsuQT7dLmqfmtsg0Z7oQJl&X-Amz-Signature=72e81c021542cb8cdee9af68dc801391c5418bb44dfb780d62bce6f6075f0f09&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677K7I6JN%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoCVOR4cg%2BLQBllVt1pGOptFgDurevyoZH3ksyk6gtRAiEArFcRbrJrh4JLqsmKJygEX%2FmxtOCUG5WiITddp2z3%2FZUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEF35q3YQLis9SHzayrcA6YK7khs7pGfW%2Bb83%2FoDVmDG5PomZKkJBm0SOcq9xpWoFOA9Ov8z%2BCtsabGB62YsuhhVAMvwrujq9SMIy%2BF8CcrkYvHuXEe0jHZR2W9v7LOz%2FHBKXUuog5AD6MGAt9E3sqDuhISo1%2Bhwqp5t9svZIRYCF2eC8UfArkCpNiSf4%2BE%2BZ2Yd9HerxCM89jf8NlwUM4xIti9OMYrFUD1cBe%2BvIdQjXHkBIlll%2B4rto3pj3xtjHnpsM6WvbrhBahqXwdUihFK2ONWlhAqdhXcu6aswSlEY9rTWVyHqg5aVcTvq%2FMHAqyHidnAPWB464kIuauyE0LOoljPFiV1iQindiXZXLwQC%2FTTTI04VtpiZvJ39RqQ7zxUs6Qh%2BzD%2BXgB5XL3UH0w3NEt36EwOxYFK7fooNcHvomZ9g9%2FKNPR5RyZoNX755W4xNSbIElUca%2BDFnxQSnaufXpcnQ4W2e1jVvlcU%2BQghMbps5FOtp3MZfttatEEKYf4DzQNAgjcBc5tiCBGWyi7hWQpEW%2F6XriGPsrbWTyHmJhXr2Z5oyPAsQH0XvHpGQkhqsxY0kDntpc8enwwYncbjQkHy0v%2FO3ncTJi6Uc2Hi43aQYsjk16vtlLqQWAeoWpE6SoR4qxm4dxN57MIf7j78GOqUBfAkntBDHWF9TC%2FwDVOAFO31GmGEyE0%2BH1uaHiCIxdcqldzubpWTqnwJC8BbixPySar4mBAQxrAcYEX94qqmyO4Uli%2FVtx2Fdaj5TDY9TBEsQ8ssROWDy%2FTanXuvMC2qMGo2nw4Pku%2F%2BKEhiAwIl86nWWtiNmgW0tvta17zzSLBoYZhmy%2FDsoIBd%2FC2MBMH31j6MJsC%2FsuQT7dLmqfmtsg0Z7oQJl&X-Amz-Signature=1998a5d297a886b2f85ea265cefa52e13af6e141e64c2cb558712d1b77085fe0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677K7I6JN%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoCVOR4cg%2BLQBllVt1pGOptFgDurevyoZH3ksyk6gtRAiEArFcRbrJrh4JLqsmKJygEX%2FmxtOCUG5WiITddp2z3%2FZUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEF35q3YQLis9SHzayrcA6YK7khs7pGfW%2Bb83%2FoDVmDG5PomZKkJBm0SOcq9xpWoFOA9Ov8z%2BCtsabGB62YsuhhVAMvwrujq9SMIy%2BF8CcrkYvHuXEe0jHZR2W9v7LOz%2FHBKXUuog5AD6MGAt9E3sqDuhISo1%2Bhwqp5t9svZIRYCF2eC8UfArkCpNiSf4%2BE%2BZ2Yd9HerxCM89jf8NlwUM4xIti9OMYrFUD1cBe%2BvIdQjXHkBIlll%2B4rto3pj3xtjHnpsM6WvbrhBahqXwdUihFK2ONWlhAqdhXcu6aswSlEY9rTWVyHqg5aVcTvq%2FMHAqyHidnAPWB464kIuauyE0LOoljPFiV1iQindiXZXLwQC%2FTTTI04VtpiZvJ39RqQ7zxUs6Qh%2BzD%2BXgB5XL3UH0w3NEt36EwOxYFK7fooNcHvomZ9g9%2FKNPR5RyZoNX755W4xNSbIElUca%2BDFnxQSnaufXpcnQ4W2e1jVvlcU%2BQghMbps5FOtp3MZfttatEEKYf4DzQNAgjcBc5tiCBGWyi7hWQpEW%2F6XriGPsrbWTyHmJhXr2Z5oyPAsQH0XvHpGQkhqsxY0kDntpc8enwwYncbjQkHy0v%2FO3ncTJi6Uc2Hi43aQYsjk16vtlLqQWAeoWpE6SoR4qxm4dxN57MIf7j78GOqUBfAkntBDHWF9TC%2FwDVOAFO31GmGEyE0%2BH1uaHiCIxdcqldzubpWTqnwJC8BbixPySar4mBAQxrAcYEX94qqmyO4Uli%2FVtx2Fdaj5TDY9TBEsQ8ssROWDy%2FTanXuvMC2qMGo2nw4Pku%2F%2BKEhiAwIl86nWWtiNmgW0tvta17zzSLBoYZhmy%2FDsoIBd%2FC2MBMH31j6MJsC%2FsuQT7dLmqfmtsg0Z7oQJl&X-Amz-Signature=ad83317e069873382904f44f79c670065b1f7541f5d1f9608dbc288d910ac97e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677K7I6JN%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoCVOR4cg%2BLQBllVt1pGOptFgDurevyoZH3ksyk6gtRAiEArFcRbrJrh4JLqsmKJygEX%2FmxtOCUG5WiITddp2z3%2FZUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEF35q3YQLis9SHzayrcA6YK7khs7pGfW%2Bb83%2FoDVmDG5PomZKkJBm0SOcq9xpWoFOA9Ov8z%2BCtsabGB62YsuhhVAMvwrujq9SMIy%2BF8CcrkYvHuXEe0jHZR2W9v7LOz%2FHBKXUuog5AD6MGAt9E3sqDuhISo1%2Bhwqp5t9svZIRYCF2eC8UfArkCpNiSf4%2BE%2BZ2Yd9HerxCM89jf8NlwUM4xIti9OMYrFUD1cBe%2BvIdQjXHkBIlll%2B4rto3pj3xtjHnpsM6WvbrhBahqXwdUihFK2ONWlhAqdhXcu6aswSlEY9rTWVyHqg5aVcTvq%2FMHAqyHidnAPWB464kIuauyE0LOoljPFiV1iQindiXZXLwQC%2FTTTI04VtpiZvJ39RqQ7zxUs6Qh%2BzD%2BXgB5XL3UH0w3NEt36EwOxYFK7fooNcHvomZ9g9%2FKNPR5RyZoNX755W4xNSbIElUca%2BDFnxQSnaufXpcnQ4W2e1jVvlcU%2BQghMbps5FOtp3MZfttatEEKYf4DzQNAgjcBc5tiCBGWyi7hWQpEW%2F6XriGPsrbWTyHmJhXr2Z5oyPAsQH0XvHpGQkhqsxY0kDntpc8enwwYncbjQkHy0v%2FO3ncTJi6Uc2Hi43aQYsjk16vtlLqQWAeoWpE6SoR4qxm4dxN57MIf7j78GOqUBfAkntBDHWF9TC%2FwDVOAFO31GmGEyE0%2BH1uaHiCIxdcqldzubpWTqnwJC8BbixPySar4mBAQxrAcYEX94qqmyO4Uli%2FVtx2Fdaj5TDY9TBEsQ8ssROWDy%2FTanXuvMC2qMGo2nw4Pku%2F%2BKEhiAwIl86nWWtiNmgW0tvta17zzSLBoYZhmy%2FDsoIBd%2FC2MBMH31j6MJsC%2FsuQT7dLmqfmtsg0Z7oQJl&X-Amz-Signature=535a2e409a6e950a2f7d9e233db57c51bc5a0a731aa25ffd796e5d2f6ad8b24c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677K7I6JN%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoCVOR4cg%2BLQBllVt1pGOptFgDurevyoZH3ksyk6gtRAiEArFcRbrJrh4JLqsmKJygEX%2FmxtOCUG5WiITddp2z3%2FZUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEF35q3YQLis9SHzayrcA6YK7khs7pGfW%2Bb83%2FoDVmDG5PomZKkJBm0SOcq9xpWoFOA9Ov8z%2BCtsabGB62YsuhhVAMvwrujq9SMIy%2BF8CcrkYvHuXEe0jHZR2W9v7LOz%2FHBKXUuog5AD6MGAt9E3sqDuhISo1%2Bhwqp5t9svZIRYCF2eC8UfArkCpNiSf4%2BE%2BZ2Yd9HerxCM89jf8NlwUM4xIti9OMYrFUD1cBe%2BvIdQjXHkBIlll%2B4rto3pj3xtjHnpsM6WvbrhBahqXwdUihFK2ONWlhAqdhXcu6aswSlEY9rTWVyHqg5aVcTvq%2FMHAqyHidnAPWB464kIuauyE0LOoljPFiV1iQindiXZXLwQC%2FTTTI04VtpiZvJ39RqQ7zxUs6Qh%2BzD%2BXgB5XL3UH0w3NEt36EwOxYFK7fooNcHvomZ9g9%2FKNPR5RyZoNX755W4xNSbIElUca%2BDFnxQSnaufXpcnQ4W2e1jVvlcU%2BQghMbps5FOtp3MZfttatEEKYf4DzQNAgjcBc5tiCBGWyi7hWQpEW%2F6XriGPsrbWTyHmJhXr2Z5oyPAsQH0XvHpGQkhqsxY0kDntpc8enwwYncbjQkHy0v%2FO3ncTJi6Uc2Hi43aQYsjk16vtlLqQWAeoWpE6SoR4qxm4dxN57MIf7j78GOqUBfAkntBDHWF9TC%2FwDVOAFO31GmGEyE0%2BH1uaHiCIxdcqldzubpWTqnwJC8BbixPySar4mBAQxrAcYEX94qqmyO4Uli%2FVtx2Fdaj5TDY9TBEsQ8ssROWDy%2FTanXuvMC2qMGo2nw4Pku%2F%2BKEhiAwIl86nWWtiNmgW0tvta17zzSLBoYZhmy%2FDsoIBd%2FC2MBMH31j6MJsC%2FsuQT7dLmqfmtsg0Z7oQJl&X-Amz-Signature=1e030f282c9861273fd021f1c63ebeee581df2f6a07f6e10cdda6520ea24be98&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
