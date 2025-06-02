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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRB3NE6K%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICkpnXZHWCiyPMm0rRDEttJLhATB2%2FMTx6PjVMTVdmLEAiEAopi3GX7580vqKxaEo4XJtUgPTNkzCUD79bHmUtnGCTgqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXZlzL65QGmUmM3%2ByrcAzEB3T9PUdkpZHGItZhaDsluLTtmBRPeQThTwk5%2BzSGmNW4NugRqUDQT%2B352nx%2BtasHZYEqXJmlVt%2FqTulqOwQFE1tu5fPD5S626xgPq1C1Ok4Rc%2BLtnm%2B0SPzKY2lSEKV58jICmYPYw%2BUc60inHkkNcWkrpfb13eFB5WbJ0RC2TZC9SA521s53Me6m1M2a20cF5MlcyTCpdFi%2BEUQm9omHDNoMoaep86A3sAzwW5JtF%2BJixOG2XpSjSeQltjUWJ%2FgjZE6l7GFUjaSrTafMtMQD7BBslPsLUjoKmmP7y%2F7LZeTggjpL5tTodbqzZdV1mRQ%2FrEvWhcMjfm3uL67QdbzSXi8IukSWP%2FyHRdRRMXJC4KgqmbXYiIEbOQmXE%2Ftk81kPTfb9LP%2BIGSCDy96P3bmVqJEM0yWW55qZ8ggD1p6mzza6chUQKrHhRNZDVppFU7aobAGIE%2Fx2jApggEqp8A449gPzkbzIHbM9GOJnxhbcSFlKH2P4lbHhvHDMWjFegQGkZOAklyw6xGPGvIeKH7OIxCx%2FKWzZ9nRxB%2BVJlia%2BtA9GKyL7xo9INI9Mc8SZbWrvb5bxh1pCcM%2Fm9IP9loy1Stxm8tOLK5nghmTKzkXtCzNTmrYRPnticfOkuMKCv9MEGOqUB6Xa3ODAAo9nhbLUvsgX61ITy2zwiVJVUKOSdco7hEro1slHzP%2FIhlC7oilWKbHNeCigYXezdEPL%2FCsq95ce3XsLZL8flS0qqGxSuggH%2FeRexsFseQAHJEHMt1lzlaoLlYFIrDKrvQ4qRaSKlWaoFHar64DpqmxmpoGfCu8u4U4ehKUUJYY9gBVseQsY%2BRpPN5r%2FhkR4sGek%2Fu5vWb6J5E36g3kiZ&X-Amz-Signature=4c135bb0315c81b718dbaa9134d1a91af4fee6997e652d7baf10b3a343b4401b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRB3NE6K%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICkpnXZHWCiyPMm0rRDEttJLhATB2%2FMTx6PjVMTVdmLEAiEAopi3GX7580vqKxaEo4XJtUgPTNkzCUD79bHmUtnGCTgqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXZlzL65QGmUmM3%2ByrcAzEB3T9PUdkpZHGItZhaDsluLTtmBRPeQThTwk5%2BzSGmNW4NugRqUDQT%2B352nx%2BtasHZYEqXJmlVt%2FqTulqOwQFE1tu5fPD5S626xgPq1C1Ok4Rc%2BLtnm%2B0SPzKY2lSEKV58jICmYPYw%2BUc60inHkkNcWkrpfb13eFB5WbJ0RC2TZC9SA521s53Me6m1M2a20cF5MlcyTCpdFi%2BEUQm9omHDNoMoaep86A3sAzwW5JtF%2BJixOG2XpSjSeQltjUWJ%2FgjZE6l7GFUjaSrTafMtMQD7BBslPsLUjoKmmP7y%2F7LZeTggjpL5tTodbqzZdV1mRQ%2FrEvWhcMjfm3uL67QdbzSXi8IukSWP%2FyHRdRRMXJC4KgqmbXYiIEbOQmXE%2Ftk81kPTfb9LP%2BIGSCDy96P3bmVqJEM0yWW55qZ8ggD1p6mzza6chUQKrHhRNZDVppFU7aobAGIE%2Fx2jApggEqp8A449gPzkbzIHbM9GOJnxhbcSFlKH2P4lbHhvHDMWjFegQGkZOAklyw6xGPGvIeKH7OIxCx%2FKWzZ9nRxB%2BVJlia%2BtA9GKyL7xo9INI9Mc8SZbWrvb5bxh1pCcM%2Fm9IP9loy1Stxm8tOLK5nghmTKzkXtCzNTmrYRPnticfOkuMKCv9MEGOqUB6Xa3ODAAo9nhbLUvsgX61ITy2zwiVJVUKOSdco7hEro1slHzP%2FIhlC7oilWKbHNeCigYXezdEPL%2FCsq95ce3XsLZL8flS0qqGxSuggH%2FeRexsFseQAHJEHMt1lzlaoLlYFIrDKrvQ4qRaSKlWaoFHar64DpqmxmpoGfCu8u4U4ehKUUJYY9gBVseQsY%2BRpPN5r%2FhkR4sGek%2Fu5vWb6J5E36g3kiZ&X-Amz-Signature=b36e280c0c4c8261b48916bb7b3d67e6ac67bd7d9fa9904d97b5b9ec8d1b098c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRB3NE6K%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICkpnXZHWCiyPMm0rRDEttJLhATB2%2FMTx6PjVMTVdmLEAiEAopi3GX7580vqKxaEo4XJtUgPTNkzCUD79bHmUtnGCTgqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXZlzL65QGmUmM3%2ByrcAzEB3T9PUdkpZHGItZhaDsluLTtmBRPeQThTwk5%2BzSGmNW4NugRqUDQT%2B352nx%2BtasHZYEqXJmlVt%2FqTulqOwQFE1tu5fPD5S626xgPq1C1Ok4Rc%2BLtnm%2B0SPzKY2lSEKV58jICmYPYw%2BUc60inHkkNcWkrpfb13eFB5WbJ0RC2TZC9SA521s53Me6m1M2a20cF5MlcyTCpdFi%2BEUQm9omHDNoMoaep86A3sAzwW5JtF%2BJixOG2XpSjSeQltjUWJ%2FgjZE6l7GFUjaSrTafMtMQD7BBslPsLUjoKmmP7y%2F7LZeTggjpL5tTodbqzZdV1mRQ%2FrEvWhcMjfm3uL67QdbzSXi8IukSWP%2FyHRdRRMXJC4KgqmbXYiIEbOQmXE%2Ftk81kPTfb9LP%2BIGSCDy96P3bmVqJEM0yWW55qZ8ggD1p6mzza6chUQKrHhRNZDVppFU7aobAGIE%2Fx2jApggEqp8A449gPzkbzIHbM9GOJnxhbcSFlKH2P4lbHhvHDMWjFegQGkZOAklyw6xGPGvIeKH7OIxCx%2FKWzZ9nRxB%2BVJlia%2BtA9GKyL7xo9INI9Mc8SZbWrvb5bxh1pCcM%2Fm9IP9loy1Stxm8tOLK5nghmTKzkXtCzNTmrYRPnticfOkuMKCv9MEGOqUB6Xa3ODAAo9nhbLUvsgX61ITy2zwiVJVUKOSdco7hEro1slHzP%2FIhlC7oilWKbHNeCigYXezdEPL%2FCsq95ce3XsLZL8flS0qqGxSuggH%2FeRexsFseQAHJEHMt1lzlaoLlYFIrDKrvQ4qRaSKlWaoFHar64DpqmxmpoGfCu8u4U4ehKUUJYY9gBVseQsY%2BRpPN5r%2FhkR4sGek%2Fu5vWb6J5E36g3kiZ&X-Amz-Signature=7a7f8dc9dc6b01ac4cad08e0128fd57d9503478377c91fe6c7b15b64461dea0f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRB3NE6K%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICkpnXZHWCiyPMm0rRDEttJLhATB2%2FMTx6PjVMTVdmLEAiEAopi3GX7580vqKxaEo4XJtUgPTNkzCUD79bHmUtnGCTgqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXZlzL65QGmUmM3%2ByrcAzEB3T9PUdkpZHGItZhaDsluLTtmBRPeQThTwk5%2BzSGmNW4NugRqUDQT%2B352nx%2BtasHZYEqXJmlVt%2FqTulqOwQFE1tu5fPD5S626xgPq1C1Ok4Rc%2BLtnm%2B0SPzKY2lSEKV58jICmYPYw%2BUc60inHkkNcWkrpfb13eFB5WbJ0RC2TZC9SA521s53Me6m1M2a20cF5MlcyTCpdFi%2BEUQm9omHDNoMoaep86A3sAzwW5JtF%2BJixOG2XpSjSeQltjUWJ%2FgjZE6l7GFUjaSrTafMtMQD7BBslPsLUjoKmmP7y%2F7LZeTggjpL5tTodbqzZdV1mRQ%2FrEvWhcMjfm3uL67QdbzSXi8IukSWP%2FyHRdRRMXJC4KgqmbXYiIEbOQmXE%2Ftk81kPTfb9LP%2BIGSCDy96P3bmVqJEM0yWW55qZ8ggD1p6mzza6chUQKrHhRNZDVppFU7aobAGIE%2Fx2jApggEqp8A449gPzkbzIHbM9GOJnxhbcSFlKH2P4lbHhvHDMWjFegQGkZOAklyw6xGPGvIeKH7OIxCx%2FKWzZ9nRxB%2BVJlia%2BtA9GKyL7xo9INI9Mc8SZbWrvb5bxh1pCcM%2Fm9IP9loy1Stxm8tOLK5nghmTKzkXtCzNTmrYRPnticfOkuMKCv9MEGOqUB6Xa3ODAAo9nhbLUvsgX61ITy2zwiVJVUKOSdco7hEro1slHzP%2FIhlC7oilWKbHNeCigYXezdEPL%2FCsq95ce3XsLZL8flS0qqGxSuggH%2FeRexsFseQAHJEHMt1lzlaoLlYFIrDKrvQ4qRaSKlWaoFHar64DpqmxmpoGfCu8u4U4ehKUUJYY9gBVseQsY%2BRpPN5r%2FhkR4sGek%2Fu5vWb6J5E36g3kiZ&X-Amz-Signature=c55f8c6d79455cf8c8689847ee16e315689edcf2d8c63aff35e00c0db95b891e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRB3NE6K%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICkpnXZHWCiyPMm0rRDEttJLhATB2%2FMTx6PjVMTVdmLEAiEAopi3GX7580vqKxaEo4XJtUgPTNkzCUD79bHmUtnGCTgqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXZlzL65QGmUmM3%2ByrcAzEB3T9PUdkpZHGItZhaDsluLTtmBRPeQThTwk5%2BzSGmNW4NugRqUDQT%2B352nx%2BtasHZYEqXJmlVt%2FqTulqOwQFE1tu5fPD5S626xgPq1C1Ok4Rc%2BLtnm%2B0SPzKY2lSEKV58jICmYPYw%2BUc60inHkkNcWkrpfb13eFB5WbJ0RC2TZC9SA521s53Me6m1M2a20cF5MlcyTCpdFi%2BEUQm9omHDNoMoaep86A3sAzwW5JtF%2BJixOG2XpSjSeQltjUWJ%2FgjZE6l7GFUjaSrTafMtMQD7BBslPsLUjoKmmP7y%2F7LZeTggjpL5tTodbqzZdV1mRQ%2FrEvWhcMjfm3uL67QdbzSXi8IukSWP%2FyHRdRRMXJC4KgqmbXYiIEbOQmXE%2Ftk81kPTfb9LP%2BIGSCDy96P3bmVqJEM0yWW55qZ8ggD1p6mzza6chUQKrHhRNZDVppFU7aobAGIE%2Fx2jApggEqp8A449gPzkbzIHbM9GOJnxhbcSFlKH2P4lbHhvHDMWjFegQGkZOAklyw6xGPGvIeKH7OIxCx%2FKWzZ9nRxB%2BVJlia%2BtA9GKyL7xo9INI9Mc8SZbWrvb5bxh1pCcM%2Fm9IP9loy1Stxm8tOLK5nghmTKzkXtCzNTmrYRPnticfOkuMKCv9MEGOqUB6Xa3ODAAo9nhbLUvsgX61ITy2zwiVJVUKOSdco7hEro1slHzP%2FIhlC7oilWKbHNeCigYXezdEPL%2FCsq95ce3XsLZL8flS0qqGxSuggH%2FeRexsFseQAHJEHMt1lzlaoLlYFIrDKrvQ4qRaSKlWaoFHar64DpqmxmpoGfCu8u4U4ehKUUJYY9gBVseQsY%2BRpPN5r%2FhkR4sGek%2Fu5vWb6J5E36g3kiZ&X-Amz-Signature=91e253856aa3bda51c93395fa38d8b4978521919542b1e7dcb931ca448ee8d47&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRB3NE6K%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICkpnXZHWCiyPMm0rRDEttJLhATB2%2FMTx6PjVMTVdmLEAiEAopi3GX7580vqKxaEo4XJtUgPTNkzCUD79bHmUtnGCTgqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXZlzL65QGmUmM3%2ByrcAzEB3T9PUdkpZHGItZhaDsluLTtmBRPeQThTwk5%2BzSGmNW4NugRqUDQT%2B352nx%2BtasHZYEqXJmlVt%2FqTulqOwQFE1tu5fPD5S626xgPq1C1Ok4Rc%2BLtnm%2B0SPzKY2lSEKV58jICmYPYw%2BUc60inHkkNcWkrpfb13eFB5WbJ0RC2TZC9SA521s53Me6m1M2a20cF5MlcyTCpdFi%2BEUQm9omHDNoMoaep86A3sAzwW5JtF%2BJixOG2XpSjSeQltjUWJ%2FgjZE6l7GFUjaSrTafMtMQD7BBslPsLUjoKmmP7y%2F7LZeTggjpL5tTodbqzZdV1mRQ%2FrEvWhcMjfm3uL67QdbzSXi8IukSWP%2FyHRdRRMXJC4KgqmbXYiIEbOQmXE%2Ftk81kPTfb9LP%2BIGSCDy96P3bmVqJEM0yWW55qZ8ggD1p6mzza6chUQKrHhRNZDVppFU7aobAGIE%2Fx2jApggEqp8A449gPzkbzIHbM9GOJnxhbcSFlKH2P4lbHhvHDMWjFegQGkZOAklyw6xGPGvIeKH7OIxCx%2FKWzZ9nRxB%2BVJlia%2BtA9GKyL7xo9INI9Mc8SZbWrvb5bxh1pCcM%2Fm9IP9loy1Stxm8tOLK5nghmTKzkXtCzNTmrYRPnticfOkuMKCv9MEGOqUB6Xa3ODAAo9nhbLUvsgX61ITy2zwiVJVUKOSdco7hEro1slHzP%2FIhlC7oilWKbHNeCigYXezdEPL%2FCsq95ce3XsLZL8flS0qqGxSuggH%2FeRexsFseQAHJEHMt1lzlaoLlYFIrDKrvQ4qRaSKlWaoFHar64DpqmxmpoGfCu8u4U4ehKUUJYY9gBVseQsY%2BRpPN5r%2FhkR4sGek%2Fu5vWb6J5E36g3kiZ&X-Amz-Signature=6cbdcbeba838769836d7935a06855fe3832de445492e4aa5bcc8c42f5c7daae7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRB3NE6K%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICkpnXZHWCiyPMm0rRDEttJLhATB2%2FMTx6PjVMTVdmLEAiEAopi3GX7580vqKxaEo4XJtUgPTNkzCUD79bHmUtnGCTgqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXZlzL65QGmUmM3%2ByrcAzEB3T9PUdkpZHGItZhaDsluLTtmBRPeQThTwk5%2BzSGmNW4NugRqUDQT%2B352nx%2BtasHZYEqXJmlVt%2FqTulqOwQFE1tu5fPD5S626xgPq1C1Ok4Rc%2BLtnm%2B0SPzKY2lSEKV58jICmYPYw%2BUc60inHkkNcWkrpfb13eFB5WbJ0RC2TZC9SA521s53Me6m1M2a20cF5MlcyTCpdFi%2BEUQm9omHDNoMoaep86A3sAzwW5JtF%2BJixOG2XpSjSeQltjUWJ%2FgjZE6l7GFUjaSrTafMtMQD7BBslPsLUjoKmmP7y%2F7LZeTggjpL5tTodbqzZdV1mRQ%2FrEvWhcMjfm3uL67QdbzSXi8IukSWP%2FyHRdRRMXJC4KgqmbXYiIEbOQmXE%2Ftk81kPTfb9LP%2BIGSCDy96P3bmVqJEM0yWW55qZ8ggD1p6mzza6chUQKrHhRNZDVppFU7aobAGIE%2Fx2jApggEqp8A449gPzkbzIHbM9GOJnxhbcSFlKH2P4lbHhvHDMWjFegQGkZOAklyw6xGPGvIeKH7OIxCx%2FKWzZ9nRxB%2BVJlia%2BtA9GKyL7xo9INI9Mc8SZbWrvb5bxh1pCcM%2Fm9IP9loy1Stxm8tOLK5nghmTKzkXtCzNTmrYRPnticfOkuMKCv9MEGOqUB6Xa3ODAAo9nhbLUvsgX61ITy2zwiVJVUKOSdco7hEro1slHzP%2FIhlC7oilWKbHNeCigYXezdEPL%2FCsq95ce3XsLZL8flS0qqGxSuggH%2FeRexsFseQAHJEHMt1lzlaoLlYFIrDKrvQ4qRaSKlWaoFHar64DpqmxmpoGfCu8u4U4ehKUUJYY9gBVseQsY%2BRpPN5r%2FhkR4sGek%2Fu5vWb6J5E36g3kiZ&X-Amz-Signature=0a064b1bc90f28c2ad20cbce2c67cb4f9465c04fd57ccd02b09c3a168a516e65&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRB3NE6K%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICkpnXZHWCiyPMm0rRDEttJLhATB2%2FMTx6PjVMTVdmLEAiEAopi3GX7580vqKxaEo4XJtUgPTNkzCUD79bHmUtnGCTgqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXZlzL65QGmUmM3%2ByrcAzEB3T9PUdkpZHGItZhaDsluLTtmBRPeQThTwk5%2BzSGmNW4NugRqUDQT%2B352nx%2BtasHZYEqXJmlVt%2FqTulqOwQFE1tu5fPD5S626xgPq1C1Ok4Rc%2BLtnm%2B0SPzKY2lSEKV58jICmYPYw%2BUc60inHkkNcWkrpfb13eFB5WbJ0RC2TZC9SA521s53Me6m1M2a20cF5MlcyTCpdFi%2BEUQm9omHDNoMoaep86A3sAzwW5JtF%2BJixOG2XpSjSeQltjUWJ%2FgjZE6l7GFUjaSrTafMtMQD7BBslPsLUjoKmmP7y%2F7LZeTggjpL5tTodbqzZdV1mRQ%2FrEvWhcMjfm3uL67QdbzSXi8IukSWP%2FyHRdRRMXJC4KgqmbXYiIEbOQmXE%2Ftk81kPTfb9LP%2BIGSCDy96P3bmVqJEM0yWW55qZ8ggD1p6mzza6chUQKrHhRNZDVppFU7aobAGIE%2Fx2jApggEqp8A449gPzkbzIHbM9GOJnxhbcSFlKH2P4lbHhvHDMWjFegQGkZOAklyw6xGPGvIeKH7OIxCx%2FKWzZ9nRxB%2BVJlia%2BtA9GKyL7xo9INI9Mc8SZbWrvb5bxh1pCcM%2Fm9IP9loy1Stxm8tOLK5nghmTKzkXtCzNTmrYRPnticfOkuMKCv9MEGOqUB6Xa3ODAAo9nhbLUvsgX61ITy2zwiVJVUKOSdco7hEro1slHzP%2FIhlC7oilWKbHNeCigYXezdEPL%2FCsq95ce3XsLZL8flS0qqGxSuggH%2FeRexsFseQAHJEHMt1lzlaoLlYFIrDKrvQ4qRaSKlWaoFHar64DpqmxmpoGfCu8u4U4ehKUUJYY9gBVseQsY%2BRpPN5r%2FhkR4sGek%2Fu5vWb6J5E36g3kiZ&X-Amz-Signature=2076ea1b57c6bc21c51ef033a221ce5653a66bf42117117081bc5fae5779dcb7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
