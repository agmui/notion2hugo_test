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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MQVTZAM%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7OrNg0tESge8qruw9Qri%2FLZlZ%2BYQ1B5GF%2FnD8YdcxFAiBKNXuBC0mLip5FlkkR%2FB7reBFfWCeAHHsxiPJSM2l%2FESqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7MN1t9Zi7Gg0v0CjKtwDd3Dg55mv7UmQUl9QQIX6DwPNfx6pSzd6ybLXIXuO0YZl6GIyhtWkn0F%2FkoFOvJ8VYeI1tvUgXuz0cp1bCe3Vi94K1VGOW7ZJ6Q7D03gxrXDHtAMWI%2BYy3ruhryfDi0rkV3YwzJ0Q7rtBtvzcbYV1brsyG2FlvS1Vid2YSXTslpqpbP2YR9xZq408kkTYOWsufsZrNsE21wTbdCOIEaXItTnnXejrcfO8lgk4yLZY5xnOkfXae8%2FrprwOO%2BTFiFV7XLu1wr0o8kEdA8N4hW8fqKObr3rhbmjE1X%2FGYASzmgGeBMfsVk03qAmla9Itai6puDryqVizZDBj4IoCAhggAWPl4egO%2BO3x6dkm7T%2FG5XyCD8uCqIqZT%2BI97xAEEWfvvT1mmhODg1H%2FE6bWpXfcgl4hfT5AfCrNtN%2BakN2JvoeWAn%2B%2F9%2FxDDWrn%2BjHwsUnthzrjm5%2BisqihrxpRbwltpd8to4jIlGd6T89o9qW3gsVrKuWzCHV%2FJ8poQ%2FuNEINcL8AgFFidARL1U4Gtvbo6O%2FUAPhblydPDJGEWym6zzVcvl6NIrKfE92%2Fl70CHrJvUOVpckzzSHuc2UrxBWOpB%2F4TdKMavQJwuxVxBIdkMBsMyqxeAXCpTjiDpsYUwp%2BP7vAY6pgEeEqGtWPIlpRrVYL6RSV%2Bn9o4GSEAflEPUuuGJB8KXGPvgBwS95eRsMWxsBFG4NgBX%2FaXlXonnU0%2FNMq5899JTByfJJ4Vt8CRDZdGE5L2Xg6MkiElxgh%2Fie5lN%2FWmXWAbId1CzmSGV4Q7MtmdK5Gp3IITv4AQoTJHOxO1qdiRoTBV2rSLDQUGQcEJva37adEJja2NzJ9wgfIl1vGzEUY%2BqNy6JHN0e&X-Amz-Signature=919a6c752170237dc81972315d802b61be07b5ded1f881bce068ea71d6200666&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MQVTZAM%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7OrNg0tESge8qruw9Qri%2FLZlZ%2BYQ1B5GF%2FnD8YdcxFAiBKNXuBC0mLip5FlkkR%2FB7reBFfWCeAHHsxiPJSM2l%2FESqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7MN1t9Zi7Gg0v0CjKtwDd3Dg55mv7UmQUl9QQIX6DwPNfx6pSzd6ybLXIXuO0YZl6GIyhtWkn0F%2FkoFOvJ8VYeI1tvUgXuz0cp1bCe3Vi94K1VGOW7ZJ6Q7D03gxrXDHtAMWI%2BYy3ruhryfDi0rkV3YwzJ0Q7rtBtvzcbYV1brsyG2FlvS1Vid2YSXTslpqpbP2YR9xZq408kkTYOWsufsZrNsE21wTbdCOIEaXItTnnXejrcfO8lgk4yLZY5xnOkfXae8%2FrprwOO%2BTFiFV7XLu1wr0o8kEdA8N4hW8fqKObr3rhbmjE1X%2FGYASzmgGeBMfsVk03qAmla9Itai6puDryqVizZDBj4IoCAhggAWPl4egO%2BO3x6dkm7T%2FG5XyCD8uCqIqZT%2BI97xAEEWfvvT1mmhODg1H%2FE6bWpXfcgl4hfT5AfCrNtN%2BakN2JvoeWAn%2B%2F9%2FxDDWrn%2BjHwsUnthzrjm5%2BisqihrxpRbwltpd8to4jIlGd6T89o9qW3gsVrKuWzCHV%2FJ8poQ%2FuNEINcL8AgFFidARL1U4Gtvbo6O%2FUAPhblydPDJGEWym6zzVcvl6NIrKfE92%2Fl70CHrJvUOVpckzzSHuc2UrxBWOpB%2F4TdKMavQJwuxVxBIdkMBsMyqxeAXCpTjiDpsYUwp%2BP7vAY6pgEeEqGtWPIlpRrVYL6RSV%2Bn9o4GSEAflEPUuuGJB8KXGPvgBwS95eRsMWxsBFG4NgBX%2FaXlXonnU0%2FNMq5899JTByfJJ4Vt8CRDZdGE5L2Xg6MkiElxgh%2Fie5lN%2FWmXWAbId1CzmSGV4Q7MtmdK5Gp3IITv4AQoTJHOxO1qdiRoTBV2rSLDQUGQcEJva37adEJja2NzJ9wgfIl1vGzEUY%2BqNy6JHN0e&X-Amz-Signature=0a71016ef407a0713735fb7d3b5e5617af235f462ea5a24daee427c5b667571c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MQVTZAM%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7OrNg0tESge8qruw9Qri%2FLZlZ%2BYQ1B5GF%2FnD8YdcxFAiBKNXuBC0mLip5FlkkR%2FB7reBFfWCeAHHsxiPJSM2l%2FESqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7MN1t9Zi7Gg0v0CjKtwDd3Dg55mv7UmQUl9QQIX6DwPNfx6pSzd6ybLXIXuO0YZl6GIyhtWkn0F%2FkoFOvJ8VYeI1tvUgXuz0cp1bCe3Vi94K1VGOW7ZJ6Q7D03gxrXDHtAMWI%2BYy3ruhryfDi0rkV3YwzJ0Q7rtBtvzcbYV1brsyG2FlvS1Vid2YSXTslpqpbP2YR9xZq408kkTYOWsufsZrNsE21wTbdCOIEaXItTnnXejrcfO8lgk4yLZY5xnOkfXae8%2FrprwOO%2BTFiFV7XLu1wr0o8kEdA8N4hW8fqKObr3rhbmjE1X%2FGYASzmgGeBMfsVk03qAmla9Itai6puDryqVizZDBj4IoCAhggAWPl4egO%2BO3x6dkm7T%2FG5XyCD8uCqIqZT%2BI97xAEEWfvvT1mmhODg1H%2FE6bWpXfcgl4hfT5AfCrNtN%2BakN2JvoeWAn%2B%2F9%2FxDDWrn%2BjHwsUnthzrjm5%2BisqihrxpRbwltpd8to4jIlGd6T89o9qW3gsVrKuWzCHV%2FJ8poQ%2FuNEINcL8AgFFidARL1U4Gtvbo6O%2FUAPhblydPDJGEWym6zzVcvl6NIrKfE92%2Fl70CHrJvUOVpckzzSHuc2UrxBWOpB%2F4TdKMavQJwuxVxBIdkMBsMyqxeAXCpTjiDpsYUwp%2BP7vAY6pgEeEqGtWPIlpRrVYL6RSV%2Bn9o4GSEAflEPUuuGJB8KXGPvgBwS95eRsMWxsBFG4NgBX%2FaXlXonnU0%2FNMq5899JTByfJJ4Vt8CRDZdGE5L2Xg6MkiElxgh%2Fie5lN%2FWmXWAbId1CzmSGV4Q7MtmdK5Gp3IITv4AQoTJHOxO1qdiRoTBV2rSLDQUGQcEJva37adEJja2NzJ9wgfIl1vGzEUY%2BqNy6JHN0e&X-Amz-Signature=dbaeb8c51ab33a491eb72a68c42d4feb9266e366e2ecd8b3462f161e2aca6117&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MQVTZAM%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7OrNg0tESge8qruw9Qri%2FLZlZ%2BYQ1B5GF%2FnD8YdcxFAiBKNXuBC0mLip5FlkkR%2FB7reBFfWCeAHHsxiPJSM2l%2FESqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7MN1t9Zi7Gg0v0CjKtwDd3Dg55mv7UmQUl9QQIX6DwPNfx6pSzd6ybLXIXuO0YZl6GIyhtWkn0F%2FkoFOvJ8VYeI1tvUgXuz0cp1bCe3Vi94K1VGOW7ZJ6Q7D03gxrXDHtAMWI%2BYy3ruhryfDi0rkV3YwzJ0Q7rtBtvzcbYV1brsyG2FlvS1Vid2YSXTslpqpbP2YR9xZq408kkTYOWsufsZrNsE21wTbdCOIEaXItTnnXejrcfO8lgk4yLZY5xnOkfXae8%2FrprwOO%2BTFiFV7XLu1wr0o8kEdA8N4hW8fqKObr3rhbmjE1X%2FGYASzmgGeBMfsVk03qAmla9Itai6puDryqVizZDBj4IoCAhggAWPl4egO%2BO3x6dkm7T%2FG5XyCD8uCqIqZT%2BI97xAEEWfvvT1mmhODg1H%2FE6bWpXfcgl4hfT5AfCrNtN%2BakN2JvoeWAn%2B%2F9%2FxDDWrn%2BjHwsUnthzrjm5%2BisqihrxpRbwltpd8to4jIlGd6T89o9qW3gsVrKuWzCHV%2FJ8poQ%2FuNEINcL8AgFFidARL1U4Gtvbo6O%2FUAPhblydPDJGEWym6zzVcvl6NIrKfE92%2Fl70CHrJvUOVpckzzSHuc2UrxBWOpB%2F4TdKMavQJwuxVxBIdkMBsMyqxeAXCpTjiDpsYUwp%2BP7vAY6pgEeEqGtWPIlpRrVYL6RSV%2Bn9o4GSEAflEPUuuGJB8KXGPvgBwS95eRsMWxsBFG4NgBX%2FaXlXonnU0%2FNMq5899JTByfJJ4Vt8CRDZdGE5L2Xg6MkiElxgh%2Fie5lN%2FWmXWAbId1CzmSGV4Q7MtmdK5Gp3IITv4AQoTJHOxO1qdiRoTBV2rSLDQUGQcEJva37adEJja2NzJ9wgfIl1vGzEUY%2BqNy6JHN0e&X-Amz-Signature=b983452dd4c7f6f76c5e7183490bfc7ebb0861bc012d95924f8991d02434d633&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MQVTZAM%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7OrNg0tESge8qruw9Qri%2FLZlZ%2BYQ1B5GF%2FnD8YdcxFAiBKNXuBC0mLip5FlkkR%2FB7reBFfWCeAHHsxiPJSM2l%2FESqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7MN1t9Zi7Gg0v0CjKtwDd3Dg55mv7UmQUl9QQIX6DwPNfx6pSzd6ybLXIXuO0YZl6GIyhtWkn0F%2FkoFOvJ8VYeI1tvUgXuz0cp1bCe3Vi94K1VGOW7ZJ6Q7D03gxrXDHtAMWI%2BYy3ruhryfDi0rkV3YwzJ0Q7rtBtvzcbYV1brsyG2FlvS1Vid2YSXTslpqpbP2YR9xZq408kkTYOWsufsZrNsE21wTbdCOIEaXItTnnXejrcfO8lgk4yLZY5xnOkfXae8%2FrprwOO%2BTFiFV7XLu1wr0o8kEdA8N4hW8fqKObr3rhbmjE1X%2FGYASzmgGeBMfsVk03qAmla9Itai6puDryqVizZDBj4IoCAhggAWPl4egO%2BO3x6dkm7T%2FG5XyCD8uCqIqZT%2BI97xAEEWfvvT1mmhODg1H%2FE6bWpXfcgl4hfT5AfCrNtN%2BakN2JvoeWAn%2B%2F9%2FxDDWrn%2BjHwsUnthzrjm5%2BisqihrxpRbwltpd8to4jIlGd6T89o9qW3gsVrKuWzCHV%2FJ8poQ%2FuNEINcL8AgFFidARL1U4Gtvbo6O%2FUAPhblydPDJGEWym6zzVcvl6NIrKfE92%2Fl70CHrJvUOVpckzzSHuc2UrxBWOpB%2F4TdKMavQJwuxVxBIdkMBsMyqxeAXCpTjiDpsYUwp%2BP7vAY6pgEeEqGtWPIlpRrVYL6RSV%2Bn9o4GSEAflEPUuuGJB8KXGPvgBwS95eRsMWxsBFG4NgBX%2FaXlXonnU0%2FNMq5899JTByfJJ4Vt8CRDZdGE5L2Xg6MkiElxgh%2Fie5lN%2FWmXWAbId1CzmSGV4Q7MtmdK5Gp3IITv4AQoTJHOxO1qdiRoTBV2rSLDQUGQcEJva37adEJja2NzJ9wgfIl1vGzEUY%2BqNy6JHN0e&X-Amz-Signature=2280b70cb0c173037fa47bd47d067710470e0a067c974484ba3670a42fbd62ab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MQVTZAM%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7OrNg0tESge8qruw9Qri%2FLZlZ%2BYQ1B5GF%2FnD8YdcxFAiBKNXuBC0mLip5FlkkR%2FB7reBFfWCeAHHsxiPJSM2l%2FESqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7MN1t9Zi7Gg0v0CjKtwDd3Dg55mv7UmQUl9QQIX6DwPNfx6pSzd6ybLXIXuO0YZl6GIyhtWkn0F%2FkoFOvJ8VYeI1tvUgXuz0cp1bCe3Vi94K1VGOW7ZJ6Q7D03gxrXDHtAMWI%2BYy3ruhryfDi0rkV3YwzJ0Q7rtBtvzcbYV1brsyG2FlvS1Vid2YSXTslpqpbP2YR9xZq408kkTYOWsufsZrNsE21wTbdCOIEaXItTnnXejrcfO8lgk4yLZY5xnOkfXae8%2FrprwOO%2BTFiFV7XLu1wr0o8kEdA8N4hW8fqKObr3rhbmjE1X%2FGYASzmgGeBMfsVk03qAmla9Itai6puDryqVizZDBj4IoCAhggAWPl4egO%2BO3x6dkm7T%2FG5XyCD8uCqIqZT%2BI97xAEEWfvvT1mmhODg1H%2FE6bWpXfcgl4hfT5AfCrNtN%2BakN2JvoeWAn%2B%2F9%2FxDDWrn%2BjHwsUnthzrjm5%2BisqihrxpRbwltpd8to4jIlGd6T89o9qW3gsVrKuWzCHV%2FJ8poQ%2FuNEINcL8AgFFidARL1U4Gtvbo6O%2FUAPhblydPDJGEWym6zzVcvl6NIrKfE92%2Fl70CHrJvUOVpckzzSHuc2UrxBWOpB%2F4TdKMavQJwuxVxBIdkMBsMyqxeAXCpTjiDpsYUwp%2BP7vAY6pgEeEqGtWPIlpRrVYL6RSV%2Bn9o4GSEAflEPUuuGJB8KXGPvgBwS95eRsMWxsBFG4NgBX%2FaXlXonnU0%2FNMq5899JTByfJJ4Vt8CRDZdGE5L2Xg6MkiElxgh%2Fie5lN%2FWmXWAbId1CzmSGV4Q7MtmdK5Gp3IITv4AQoTJHOxO1qdiRoTBV2rSLDQUGQcEJva37adEJja2NzJ9wgfIl1vGzEUY%2BqNy6JHN0e&X-Amz-Signature=4a34ebb1cc2fd33d0c331bc4f81dd7bc66d0b992c6298a9921e4741298b78829&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MQVTZAM%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7OrNg0tESge8qruw9Qri%2FLZlZ%2BYQ1B5GF%2FnD8YdcxFAiBKNXuBC0mLip5FlkkR%2FB7reBFfWCeAHHsxiPJSM2l%2FESqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7MN1t9Zi7Gg0v0CjKtwDd3Dg55mv7UmQUl9QQIX6DwPNfx6pSzd6ybLXIXuO0YZl6GIyhtWkn0F%2FkoFOvJ8VYeI1tvUgXuz0cp1bCe3Vi94K1VGOW7ZJ6Q7D03gxrXDHtAMWI%2BYy3ruhryfDi0rkV3YwzJ0Q7rtBtvzcbYV1brsyG2FlvS1Vid2YSXTslpqpbP2YR9xZq408kkTYOWsufsZrNsE21wTbdCOIEaXItTnnXejrcfO8lgk4yLZY5xnOkfXae8%2FrprwOO%2BTFiFV7XLu1wr0o8kEdA8N4hW8fqKObr3rhbmjE1X%2FGYASzmgGeBMfsVk03qAmla9Itai6puDryqVizZDBj4IoCAhggAWPl4egO%2BO3x6dkm7T%2FG5XyCD8uCqIqZT%2BI97xAEEWfvvT1mmhODg1H%2FE6bWpXfcgl4hfT5AfCrNtN%2BakN2JvoeWAn%2B%2F9%2FxDDWrn%2BjHwsUnthzrjm5%2BisqihrxpRbwltpd8to4jIlGd6T89o9qW3gsVrKuWzCHV%2FJ8poQ%2FuNEINcL8AgFFidARL1U4Gtvbo6O%2FUAPhblydPDJGEWym6zzVcvl6NIrKfE92%2Fl70CHrJvUOVpckzzSHuc2UrxBWOpB%2F4TdKMavQJwuxVxBIdkMBsMyqxeAXCpTjiDpsYUwp%2BP7vAY6pgEeEqGtWPIlpRrVYL6RSV%2Bn9o4GSEAflEPUuuGJB8KXGPvgBwS95eRsMWxsBFG4NgBX%2FaXlXonnU0%2FNMq5899JTByfJJ4Vt8CRDZdGE5L2Xg6MkiElxgh%2Fie5lN%2FWmXWAbId1CzmSGV4Q7MtmdK5Gp3IITv4AQoTJHOxO1qdiRoTBV2rSLDQUGQcEJva37adEJja2NzJ9wgfIl1vGzEUY%2BqNy6JHN0e&X-Amz-Signature=fa0ec851785cfd0615d13cb2a4abe55bb5b5ba2b3d77871bbde0040e52334f09&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MQVTZAM%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7OrNg0tESge8qruw9Qri%2FLZlZ%2BYQ1B5GF%2FnD8YdcxFAiBKNXuBC0mLip5FlkkR%2FB7reBFfWCeAHHsxiPJSM2l%2FESqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7MN1t9Zi7Gg0v0CjKtwDd3Dg55mv7UmQUl9QQIX6DwPNfx6pSzd6ybLXIXuO0YZl6GIyhtWkn0F%2FkoFOvJ8VYeI1tvUgXuz0cp1bCe3Vi94K1VGOW7ZJ6Q7D03gxrXDHtAMWI%2BYy3ruhryfDi0rkV3YwzJ0Q7rtBtvzcbYV1brsyG2FlvS1Vid2YSXTslpqpbP2YR9xZq408kkTYOWsufsZrNsE21wTbdCOIEaXItTnnXejrcfO8lgk4yLZY5xnOkfXae8%2FrprwOO%2BTFiFV7XLu1wr0o8kEdA8N4hW8fqKObr3rhbmjE1X%2FGYASzmgGeBMfsVk03qAmla9Itai6puDryqVizZDBj4IoCAhggAWPl4egO%2BO3x6dkm7T%2FG5XyCD8uCqIqZT%2BI97xAEEWfvvT1mmhODg1H%2FE6bWpXfcgl4hfT5AfCrNtN%2BakN2JvoeWAn%2B%2F9%2FxDDWrn%2BjHwsUnthzrjm5%2BisqihrxpRbwltpd8to4jIlGd6T89o9qW3gsVrKuWzCHV%2FJ8poQ%2FuNEINcL8AgFFidARL1U4Gtvbo6O%2FUAPhblydPDJGEWym6zzVcvl6NIrKfE92%2Fl70CHrJvUOVpckzzSHuc2UrxBWOpB%2F4TdKMavQJwuxVxBIdkMBsMyqxeAXCpTjiDpsYUwp%2BP7vAY6pgEeEqGtWPIlpRrVYL6RSV%2Bn9o4GSEAflEPUuuGJB8KXGPvgBwS95eRsMWxsBFG4NgBX%2FaXlXonnU0%2FNMq5899JTByfJJ4Vt8CRDZdGE5L2Xg6MkiElxgh%2Fie5lN%2FWmXWAbId1CzmSGV4Q7MtmdK5Gp3IITv4AQoTJHOxO1qdiRoTBV2rSLDQUGQcEJva37adEJja2NzJ9wgfIl1vGzEUY%2BqNy6JHN0e&X-Amz-Signature=bec6d259734afebf76f59c714a3403ac24475680ef069aff3e9a878f837372d8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
