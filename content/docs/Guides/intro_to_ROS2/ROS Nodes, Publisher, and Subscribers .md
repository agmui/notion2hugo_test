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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5DXXDVB%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIDBh33thjelrTpFaJ6hztfvrwyxBs4HumHAGquH5s%2BmPAiEAzaq8OlmfvxbFlY67M7PHPytKvterM9%2FaYqfuxnWzpPMq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDBP3WvfkBZsBFrt%2B5ircA6ali4zSRDJ%2BVJuc4zO8aFwqY66Faxhpu5Zz0TFv4Z0CR4RRLR5NLtyhIDmaU0okgr%2Fghgw6jlrAgaGQYUYiFhIHr4cg8S36wdZMrLGQwkpy7%2BVcS8zDKTKoxiuPAr9DgZ393SivhSkTVO%2FLPCYweurg6fUkyt1liLUi6xf4KoXemswVJWu2xSKUbzQasiIJJYOwPGvMTwyszppPCWlv%2BxnRHw3yYTtZNDtBgsUz6rsEOZm8pnMxfLOvUUdkrHWPpdyxmpIK2Keaqn1Ct50DqMT62ITLZ1H8QD17r27CnDvOZ%2B%2BKyqDKLfXgIr9BwpPubc00nw3AeZo43Rbztgwnr2IuIt8YZdiX7wIn57dbOTsku7rWlALYs8XJ%2BY6%2B9Cewc3PuLUPUzmxCwOQNTUFq4KcRKYJKNkV37p1IuYo1laV4y7YsVbOz3jZQJCkGInBSf9ZiaFa%2FqPxS0G9PtrrNrtyOFP3IKpTtQl84Uy3WmpQJlgEpgdel1WWxNyYNkPINeLZga4T3wz8vlCeA9x78UL6fKniMwOvi%2BqTS0SoV%2BkQupL83A2WCWaNT8kZ4%2FCqeoLq%2B1t1MUuKjkqH%2FQvV%2F2sb1WxlKxvvJz1asUBEPfdlEuvMi3Ev%2FwHSi9KksMKnz5MIGOqUBaMKbMl%2B%2BKHKyTh89q1hX333u9uzKolQpJ1bpspPfI0susFu8i0Ds4MO1wvR00r2bw7%2BQiEhiNHSNgw4sTc4Dbx8%2F1WBXMQe9HnJEx9tk2%2FTb3AqIVZ4yrO7Wsr%2FoORIiz0eV%2FrDCtNnxMbrOwO0LB4hnZN0nGqelFJH56DoKBPxPnfBZtp3FbGWUs1XvHBm1vMPlqlI7pna8Oha%2BKokztB1P5p2B&X-Amz-Signature=9c00cb2b1d88b56c7870a900390a18791c2e772a10a2112d5bff4f4c7704e87e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5DXXDVB%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIDBh33thjelrTpFaJ6hztfvrwyxBs4HumHAGquH5s%2BmPAiEAzaq8OlmfvxbFlY67M7PHPytKvterM9%2FaYqfuxnWzpPMq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDBP3WvfkBZsBFrt%2B5ircA6ali4zSRDJ%2BVJuc4zO8aFwqY66Faxhpu5Zz0TFv4Z0CR4RRLR5NLtyhIDmaU0okgr%2Fghgw6jlrAgaGQYUYiFhIHr4cg8S36wdZMrLGQwkpy7%2BVcS8zDKTKoxiuPAr9DgZ393SivhSkTVO%2FLPCYweurg6fUkyt1liLUi6xf4KoXemswVJWu2xSKUbzQasiIJJYOwPGvMTwyszppPCWlv%2BxnRHw3yYTtZNDtBgsUz6rsEOZm8pnMxfLOvUUdkrHWPpdyxmpIK2Keaqn1Ct50DqMT62ITLZ1H8QD17r27CnDvOZ%2B%2BKyqDKLfXgIr9BwpPubc00nw3AeZo43Rbztgwnr2IuIt8YZdiX7wIn57dbOTsku7rWlALYs8XJ%2BY6%2B9Cewc3PuLUPUzmxCwOQNTUFq4KcRKYJKNkV37p1IuYo1laV4y7YsVbOz3jZQJCkGInBSf9ZiaFa%2FqPxS0G9PtrrNrtyOFP3IKpTtQl84Uy3WmpQJlgEpgdel1WWxNyYNkPINeLZga4T3wz8vlCeA9x78UL6fKniMwOvi%2BqTS0SoV%2BkQupL83A2WCWaNT8kZ4%2FCqeoLq%2B1t1MUuKjkqH%2FQvV%2F2sb1WxlKxvvJz1asUBEPfdlEuvMi3Ev%2FwHSi9KksMKnz5MIGOqUBaMKbMl%2B%2BKHKyTh89q1hX333u9uzKolQpJ1bpspPfI0susFu8i0Ds4MO1wvR00r2bw7%2BQiEhiNHSNgw4sTc4Dbx8%2F1WBXMQe9HnJEx9tk2%2FTb3AqIVZ4yrO7Wsr%2FoORIiz0eV%2FrDCtNnxMbrOwO0LB4hnZN0nGqelFJH56DoKBPxPnfBZtp3FbGWUs1XvHBm1vMPlqlI7pna8Oha%2BKokztB1P5p2B&X-Amz-Signature=e37b06751a3af572b80dee2487529191796344a865ca8a0f29989046cfe2f2d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5DXXDVB%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIDBh33thjelrTpFaJ6hztfvrwyxBs4HumHAGquH5s%2BmPAiEAzaq8OlmfvxbFlY67M7PHPytKvterM9%2FaYqfuxnWzpPMq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDBP3WvfkBZsBFrt%2B5ircA6ali4zSRDJ%2BVJuc4zO8aFwqY66Faxhpu5Zz0TFv4Z0CR4RRLR5NLtyhIDmaU0okgr%2Fghgw6jlrAgaGQYUYiFhIHr4cg8S36wdZMrLGQwkpy7%2BVcS8zDKTKoxiuPAr9DgZ393SivhSkTVO%2FLPCYweurg6fUkyt1liLUi6xf4KoXemswVJWu2xSKUbzQasiIJJYOwPGvMTwyszppPCWlv%2BxnRHw3yYTtZNDtBgsUz6rsEOZm8pnMxfLOvUUdkrHWPpdyxmpIK2Keaqn1Ct50DqMT62ITLZ1H8QD17r27CnDvOZ%2B%2BKyqDKLfXgIr9BwpPubc00nw3AeZo43Rbztgwnr2IuIt8YZdiX7wIn57dbOTsku7rWlALYs8XJ%2BY6%2B9Cewc3PuLUPUzmxCwOQNTUFq4KcRKYJKNkV37p1IuYo1laV4y7YsVbOz3jZQJCkGInBSf9ZiaFa%2FqPxS0G9PtrrNrtyOFP3IKpTtQl84Uy3WmpQJlgEpgdel1WWxNyYNkPINeLZga4T3wz8vlCeA9x78UL6fKniMwOvi%2BqTS0SoV%2BkQupL83A2WCWaNT8kZ4%2FCqeoLq%2B1t1MUuKjkqH%2FQvV%2F2sb1WxlKxvvJz1asUBEPfdlEuvMi3Ev%2FwHSi9KksMKnz5MIGOqUBaMKbMl%2B%2BKHKyTh89q1hX333u9uzKolQpJ1bpspPfI0susFu8i0Ds4MO1wvR00r2bw7%2BQiEhiNHSNgw4sTc4Dbx8%2F1WBXMQe9HnJEx9tk2%2FTb3AqIVZ4yrO7Wsr%2FoORIiz0eV%2FrDCtNnxMbrOwO0LB4hnZN0nGqelFJH56DoKBPxPnfBZtp3FbGWUs1XvHBm1vMPlqlI7pna8Oha%2BKokztB1P5p2B&X-Amz-Signature=9cda5f75250e2a04dfb191494f7850765c2c22a077b0a993894ddb9b58c2737b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5DXXDVB%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIDBh33thjelrTpFaJ6hztfvrwyxBs4HumHAGquH5s%2BmPAiEAzaq8OlmfvxbFlY67M7PHPytKvterM9%2FaYqfuxnWzpPMq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDBP3WvfkBZsBFrt%2B5ircA6ali4zSRDJ%2BVJuc4zO8aFwqY66Faxhpu5Zz0TFv4Z0CR4RRLR5NLtyhIDmaU0okgr%2Fghgw6jlrAgaGQYUYiFhIHr4cg8S36wdZMrLGQwkpy7%2BVcS8zDKTKoxiuPAr9DgZ393SivhSkTVO%2FLPCYweurg6fUkyt1liLUi6xf4KoXemswVJWu2xSKUbzQasiIJJYOwPGvMTwyszppPCWlv%2BxnRHw3yYTtZNDtBgsUz6rsEOZm8pnMxfLOvUUdkrHWPpdyxmpIK2Keaqn1Ct50DqMT62ITLZ1H8QD17r27CnDvOZ%2B%2BKyqDKLfXgIr9BwpPubc00nw3AeZo43Rbztgwnr2IuIt8YZdiX7wIn57dbOTsku7rWlALYs8XJ%2BY6%2B9Cewc3PuLUPUzmxCwOQNTUFq4KcRKYJKNkV37p1IuYo1laV4y7YsVbOz3jZQJCkGInBSf9ZiaFa%2FqPxS0G9PtrrNrtyOFP3IKpTtQl84Uy3WmpQJlgEpgdel1WWxNyYNkPINeLZga4T3wz8vlCeA9x78UL6fKniMwOvi%2BqTS0SoV%2BkQupL83A2WCWaNT8kZ4%2FCqeoLq%2B1t1MUuKjkqH%2FQvV%2F2sb1WxlKxvvJz1asUBEPfdlEuvMi3Ev%2FwHSi9KksMKnz5MIGOqUBaMKbMl%2B%2BKHKyTh89q1hX333u9uzKolQpJ1bpspPfI0susFu8i0Ds4MO1wvR00r2bw7%2BQiEhiNHSNgw4sTc4Dbx8%2F1WBXMQe9HnJEx9tk2%2FTb3AqIVZ4yrO7Wsr%2FoORIiz0eV%2FrDCtNnxMbrOwO0LB4hnZN0nGqelFJH56DoKBPxPnfBZtp3FbGWUs1XvHBm1vMPlqlI7pna8Oha%2BKokztB1P5p2B&X-Amz-Signature=95443b5b8eb81a6060a14b73d9fc076e9f197afacebeb4191cc154931b8d2197&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5DXXDVB%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIDBh33thjelrTpFaJ6hztfvrwyxBs4HumHAGquH5s%2BmPAiEAzaq8OlmfvxbFlY67M7PHPytKvterM9%2FaYqfuxnWzpPMq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDBP3WvfkBZsBFrt%2B5ircA6ali4zSRDJ%2BVJuc4zO8aFwqY66Faxhpu5Zz0TFv4Z0CR4RRLR5NLtyhIDmaU0okgr%2Fghgw6jlrAgaGQYUYiFhIHr4cg8S36wdZMrLGQwkpy7%2BVcS8zDKTKoxiuPAr9DgZ393SivhSkTVO%2FLPCYweurg6fUkyt1liLUi6xf4KoXemswVJWu2xSKUbzQasiIJJYOwPGvMTwyszppPCWlv%2BxnRHw3yYTtZNDtBgsUz6rsEOZm8pnMxfLOvUUdkrHWPpdyxmpIK2Keaqn1Ct50DqMT62ITLZ1H8QD17r27CnDvOZ%2B%2BKyqDKLfXgIr9BwpPubc00nw3AeZo43Rbztgwnr2IuIt8YZdiX7wIn57dbOTsku7rWlALYs8XJ%2BY6%2B9Cewc3PuLUPUzmxCwOQNTUFq4KcRKYJKNkV37p1IuYo1laV4y7YsVbOz3jZQJCkGInBSf9ZiaFa%2FqPxS0G9PtrrNrtyOFP3IKpTtQl84Uy3WmpQJlgEpgdel1WWxNyYNkPINeLZga4T3wz8vlCeA9x78UL6fKniMwOvi%2BqTS0SoV%2BkQupL83A2WCWaNT8kZ4%2FCqeoLq%2B1t1MUuKjkqH%2FQvV%2F2sb1WxlKxvvJz1asUBEPfdlEuvMi3Ev%2FwHSi9KksMKnz5MIGOqUBaMKbMl%2B%2BKHKyTh89q1hX333u9uzKolQpJ1bpspPfI0susFu8i0Ds4MO1wvR00r2bw7%2BQiEhiNHSNgw4sTc4Dbx8%2F1WBXMQe9HnJEx9tk2%2FTb3AqIVZ4yrO7Wsr%2FoORIiz0eV%2FrDCtNnxMbrOwO0LB4hnZN0nGqelFJH56DoKBPxPnfBZtp3FbGWUs1XvHBm1vMPlqlI7pna8Oha%2BKokztB1P5p2B&X-Amz-Signature=69c1648b56cf71f14b456805b860c99fe9cd96285dfeb700a171d43c64dfdc18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5DXXDVB%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIDBh33thjelrTpFaJ6hztfvrwyxBs4HumHAGquH5s%2BmPAiEAzaq8OlmfvxbFlY67M7PHPytKvterM9%2FaYqfuxnWzpPMq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDBP3WvfkBZsBFrt%2B5ircA6ali4zSRDJ%2BVJuc4zO8aFwqY66Faxhpu5Zz0TFv4Z0CR4RRLR5NLtyhIDmaU0okgr%2Fghgw6jlrAgaGQYUYiFhIHr4cg8S36wdZMrLGQwkpy7%2BVcS8zDKTKoxiuPAr9DgZ393SivhSkTVO%2FLPCYweurg6fUkyt1liLUi6xf4KoXemswVJWu2xSKUbzQasiIJJYOwPGvMTwyszppPCWlv%2BxnRHw3yYTtZNDtBgsUz6rsEOZm8pnMxfLOvUUdkrHWPpdyxmpIK2Keaqn1Ct50DqMT62ITLZ1H8QD17r27CnDvOZ%2B%2BKyqDKLfXgIr9BwpPubc00nw3AeZo43Rbztgwnr2IuIt8YZdiX7wIn57dbOTsku7rWlALYs8XJ%2BY6%2B9Cewc3PuLUPUzmxCwOQNTUFq4KcRKYJKNkV37p1IuYo1laV4y7YsVbOz3jZQJCkGInBSf9ZiaFa%2FqPxS0G9PtrrNrtyOFP3IKpTtQl84Uy3WmpQJlgEpgdel1WWxNyYNkPINeLZga4T3wz8vlCeA9x78UL6fKniMwOvi%2BqTS0SoV%2BkQupL83A2WCWaNT8kZ4%2FCqeoLq%2B1t1MUuKjkqH%2FQvV%2F2sb1WxlKxvvJz1asUBEPfdlEuvMi3Ev%2FwHSi9KksMKnz5MIGOqUBaMKbMl%2B%2BKHKyTh89q1hX333u9uzKolQpJ1bpspPfI0susFu8i0Ds4MO1wvR00r2bw7%2BQiEhiNHSNgw4sTc4Dbx8%2F1WBXMQe9HnJEx9tk2%2FTb3AqIVZ4yrO7Wsr%2FoORIiz0eV%2FrDCtNnxMbrOwO0LB4hnZN0nGqelFJH56DoKBPxPnfBZtp3FbGWUs1XvHBm1vMPlqlI7pna8Oha%2BKokztB1P5p2B&X-Amz-Signature=364dc6e4c494b4ac7f309695d88036950a5daa4f82c8b6ce8de9e1b892345dfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5DXXDVB%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIDBh33thjelrTpFaJ6hztfvrwyxBs4HumHAGquH5s%2BmPAiEAzaq8OlmfvxbFlY67M7PHPytKvterM9%2FaYqfuxnWzpPMq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDBP3WvfkBZsBFrt%2B5ircA6ali4zSRDJ%2BVJuc4zO8aFwqY66Faxhpu5Zz0TFv4Z0CR4RRLR5NLtyhIDmaU0okgr%2Fghgw6jlrAgaGQYUYiFhIHr4cg8S36wdZMrLGQwkpy7%2BVcS8zDKTKoxiuPAr9DgZ393SivhSkTVO%2FLPCYweurg6fUkyt1liLUi6xf4KoXemswVJWu2xSKUbzQasiIJJYOwPGvMTwyszppPCWlv%2BxnRHw3yYTtZNDtBgsUz6rsEOZm8pnMxfLOvUUdkrHWPpdyxmpIK2Keaqn1Ct50DqMT62ITLZ1H8QD17r27CnDvOZ%2B%2BKyqDKLfXgIr9BwpPubc00nw3AeZo43Rbztgwnr2IuIt8YZdiX7wIn57dbOTsku7rWlALYs8XJ%2BY6%2B9Cewc3PuLUPUzmxCwOQNTUFq4KcRKYJKNkV37p1IuYo1laV4y7YsVbOz3jZQJCkGInBSf9ZiaFa%2FqPxS0G9PtrrNrtyOFP3IKpTtQl84Uy3WmpQJlgEpgdel1WWxNyYNkPINeLZga4T3wz8vlCeA9x78UL6fKniMwOvi%2BqTS0SoV%2BkQupL83A2WCWaNT8kZ4%2FCqeoLq%2B1t1MUuKjkqH%2FQvV%2F2sb1WxlKxvvJz1asUBEPfdlEuvMi3Ev%2FwHSi9KksMKnz5MIGOqUBaMKbMl%2B%2BKHKyTh89q1hX333u9uzKolQpJ1bpspPfI0susFu8i0Ds4MO1wvR00r2bw7%2BQiEhiNHSNgw4sTc4Dbx8%2F1WBXMQe9HnJEx9tk2%2FTb3AqIVZ4yrO7Wsr%2FoORIiz0eV%2FrDCtNnxMbrOwO0LB4hnZN0nGqelFJH56DoKBPxPnfBZtp3FbGWUs1XvHBm1vMPlqlI7pna8Oha%2BKokztB1P5p2B&X-Amz-Signature=4b97e854d829d3eee29f621bf5764b864a0aef02038a761b32f30161e645ccca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5DXXDVB%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIDBh33thjelrTpFaJ6hztfvrwyxBs4HumHAGquH5s%2BmPAiEAzaq8OlmfvxbFlY67M7PHPytKvterM9%2FaYqfuxnWzpPMq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDBP3WvfkBZsBFrt%2B5ircA6ali4zSRDJ%2BVJuc4zO8aFwqY66Faxhpu5Zz0TFv4Z0CR4RRLR5NLtyhIDmaU0okgr%2Fghgw6jlrAgaGQYUYiFhIHr4cg8S36wdZMrLGQwkpy7%2BVcS8zDKTKoxiuPAr9DgZ393SivhSkTVO%2FLPCYweurg6fUkyt1liLUi6xf4KoXemswVJWu2xSKUbzQasiIJJYOwPGvMTwyszppPCWlv%2BxnRHw3yYTtZNDtBgsUz6rsEOZm8pnMxfLOvUUdkrHWPpdyxmpIK2Keaqn1Ct50DqMT62ITLZ1H8QD17r27CnDvOZ%2B%2BKyqDKLfXgIr9BwpPubc00nw3AeZo43Rbztgwnr2IuIt8YZdiX7wIn57dbOTsku7rWlALYs8XJ%2BY6%2B9Cewc3PuLUPUzmxCwOQNTUFq4KcRKYJKNkV37p1IuYo1laV4y7YsVbOz3jZQJCkGInBSf9ZiaFa%2FqPxS0G9PtrrNrtyOFP3IKpTtQl84Uy3WmpQJlgEpgdel1WWxNyYNkPINeLZga4T3wz8vlCeA9x78UL6fKniMwOvi%2BqTS0SoV%2BkQupL83A2WCWaNT8kZ4%2FCqeoLq%2B1t1MUuKjkqH%2FQvV%2F2sb1WxlKxvvJz1asUBEPfdlEuvMi3Ev%2FwHSi9KksMKnz5MIGOqUBaMKbMl%2B%2BKHKyTh89q1hX333u9uzKolQpJ1bpspPfI0susFu8i0Ds4MO1wvR00r2bw7%2BQiEhiNHSNgw4sTc4Dbx8%2F1WBXMQe9HnJEx9tk2%2FTb3AqIVZ4yrO7Wsr%2FoORIiz0eV%2FrDCtNnxMbrOwO0LB4hnZN0nGqelFJH56DoKBPxPnfBZtp3FbGWUs1XvHBm1vMPlqlI7pna8Oha%2BKokztB1P5p2B&X-Amz-Signature=267a2560f1b9cf0486c3778dacd72203b29450070109c9b8fdf281f45cb4cf98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
