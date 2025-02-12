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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDKOKA26%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApPDfz3G4I2pmKeYHwc3bN6qzXE92%2BxM%2FlPgaMNl4RKAiBzAPZJ%2Bx7QCfRQTw%2B2OBPNgMOo0Itf6eSvpV4kTdZp4CqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiihKKJt%2B9BRqmTYbKtwDtJ3OM70B2hVS21jsm2Ij4KJy1a84vkuZc23%2FynyUd2YWf%2FfT4%2F0NWLKO5DqwTMoKuBWHsT5PBcPJoU0QGNCakjdsE3i1cqBuV5iuW6j9w8yhfqKc1mfGBCgsiJj4KdNorG9z0MyAD1a68mD%2FwYT1JFhhODnhTCGsJQflxCMQ2FiqyMI5ap0IN5r6P9nDJiUc5aBJ%2BZ7ywUUnMVdpzgTQvzDSFX%2Bh1joSGoK9CT3hjqhbTePkk0DiPEDbzo3rU7gelcxY%2BMMWMLjwCGWMR82HkDhmxzKXp44geNMAD6Mxy96L1x5j58B5nvtUoEEOQTjdC1CHG3PCH4UssfJbnrrQPIBTwu2WCv2RVrpfIMZU0gsxoxTK5n7ETvwt1NGVgzbz9FDw0NXeH4nYnrKCT7QOR2dejmRqSOFmNvFi4gV3lynE6v%2F3r7Tol05h6RcnzGO%2BbqQ3HSfDN9Kvo46%2FLVtt32CH09PVAndvT8CxN144Du5TSPdPo1Q9z83kS%2Bo%2BgIAvKa4Wem7rCTAgB7hdo%2Fwp5n36Nl5eRQrb5hL6zjdTkHSR8QCA%2BydI6oOeEDfrJ53ysxTiYXOupnTuUXRRAzfRmH9LR%2Fs3b0st7vZP2GSBPbg48JcJz2SZNOLsp6UwyqmyvQY6pgEEuo75yVShOZr2XgV15GTeFtbnvSsSkjNxFoP20VrvQPUDMRaze2GJaZBk5zpkjV%2FN1I5oJdO7qQmrTjr1kJZ7BgkA8pCxRLhmp3%2F72LWQVhKGTBNL99E15gtGo2xzflvyFuE8a4gyDn6sWead95t37KgYQh4ejQbNiBnbaOQhT5MRaYNXuq7cxEJ5EkOMEaJCaDsMPX%2Fn9AC7R0tbcrsy1NUSo7VC&X-Amz-Signature=2eb6291d836f3ec18f93e2c3775218ff26ee8e5ddc3739030c0ea8a29acdf667&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDKOKA26%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApPDfz3G4I2pmKeYHwc3bN6qzXE92%2BxM%2FlPgaMNl4RKAiBzAPZJ%2Bx7QCfRQTw%2B2OBPNgMOo0Itf6eSvpV4kTdZp4CqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiihKKJt%2B9BRqmTYbKtwDtJ3OM70B2hVS21jsm2Ij4KJy1a84vkuZc23%2FynyUd2YWf%2FfT4%2F0NWLKO5DqwTMoKuBWHsT5PBcPJoU0QGNCakjdsE3i1cqBuV5iuW6j9w8yhfqKc1mfGBCgsiJj4KdNorG9z0MyAD1a68mD%2FwYT1JFhhODnhTCGsJQflxCMQ2FiqyMI5ap0IN5r6P9nDJiUc5aBJ%2BZ7ywUUnMVdpzgTQvzDSFX%2Bh1joSGoK9CT3hjqhbTePkk0DiPEDbzo3rU7gelcxY%2BMMWMLjwCGWMR82HkDhmxzKXp44geNMAD6Mxy96L1x5j58B5nvtUoEEOQTjdC1CHG3PCH4UssfJbnrrQPIBTwu2WCv2RVrpfIMZU0gsxoxTK5n7ETvwt1NGVgzbz9FDw0NXeH4nYnrKCT7QOR2dejmRqSOFmNvFi4gV3lynE6v%2F3r7Tol05h6RcnzGO%2BbqQ3HSfDN9Kvo46%2FLVtt32CH09PVAndvT8CxN144Du5TSPdPo1Q9z83kS%2Bo%2BgIAvKa4Wem7rCTAgB7hdo%2Fwp5n36Nl5eRQrb5hL6zjdTkHSR8QCA%2BydI6oOeEDfrJ53ysxTiYXOupnTuUXRRAzfRmH9LR%2Fs3b0st7vZP2GSBPbg48JcJz2SZNOLsp6UwyqmyvQY6pgEEuo75yVShOZr2XgV15GTeFtbnvSsSkjNxFoP20VrvQPUDMRaze2GJaZBk5zpkjV%2FN1I5oJdO7qQmrTjr1kJZ7BgkA8pCxRLhmp3%2F72LWQVhKGTBNL99E15gtGo2xzflvyFuE8a4gyDn6sWead95t37KgYQh4ejQbNiBnbaOQhT5MRaYNXuq7cxEJ5EkOMEaJCaDsMPX%2Fn9AC7R0tbcrsy1NUSo7VC&X-Amz-Signature=42f816046b6f3b66f5e80d9b3ea6dcee03bd3f42254867533d42c0187000d181&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDKOKA26%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApPDfz3G4I2pmKeYHwc3bN6qzXE92%2BxM%2FlPgaMNl4RKAiBzAPZJ%2Bx7QCfRQTw%2B2OBPNgMOo0Itf6eSvpV4kTdZp4CqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiihKKJt%2B9BRqmTYbKtwDtJ3OM70B2hVS21jsm2Ij4KJy1a84vkuZc23%2FynyUd2YWf%2FfT4%2F0NWLKO5DqwTMoKuBWHsT5PBcPJoU0QGNCakjdsE3i1cqBuV5iuW6j9w8yhfqKc1mfGBCgsiJj4KdNorG9z0MyAD1a68mD%2FwYT1JFhhODnhTCGsJQflxCMQ2FiqyMI5ap0IN5r6P9nDJiUc5aBJ%2BZ7ywUUnMVdpzgTQvzDSFX%2Bh1joSGoK9CT3hjqhbTePkk0DiPEDbzo3rU7gelcxY%2BMMWMLjwCGWMR82HkDhmxzKXp44geNMAD6Mxy96L1x5j58B5nvtUoEEOQTjdC1CHG3PCH4UssfJbnrrQPIBTwu2WCv2RVrpfIMZU0gsxoxTK5n7ETvwt1NGVgzbz9FDw0NXeH4nYnrKCT7QOR2dejmRqSOFmNvFi4gV3lynE6v%2F3r7Tol05h6RcnzGO%2BbqQ3HSfDN9Kvo46%2FLVtt32CH09PVAndvT8CxN144Du5TSPdPo1Q9z83kS%2Bo%2BgIAvKa4Wem7rCTAgB7hdo%2Fwp5n36Nl5eRQrb5hL6zjdTkHSR8QCA%2BydI6oOeEDfrJ53ysxTiYXOupnTuUXRRAzfRmH9LR%2Fs3b0st7vZP2GSBPbg48JcJz2SZNOLsp6UwyqmyvQY6pgEEuo75yVShOZr2XgV15GTeFtbnvSsSkjNxFoP20VrvQPUDMRaze2GJaZBk5zpkjV%2FN1I5oJdO7qQmrTjr1kJZ7BgkA8pCxRLhmp3%2F72LWQVhKGTBNL99E15gtGo2xzflvyFuE8a4gyDn6sWead95t37KgYQh4ejQbNiBnbaOQhT5MRaYNXuq7cxEJ5EkOMEaJCaDsMPX%2Fn9AC7R0tbcrsy1NUSo7VC&X-Amz-Signature=fef75ee519b554b9d85c99dd70f34ec714cedad552a35bcaa83d710cfe5faa04&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDKOKA26%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApPDfz3G4I2pmKeYHwc3bN6qzXE92%2BxM%2FlPgaMNl4RKAiBzAPZJ%2Bx7QCfRQTw%2B2OBPNgMOo0Itf6eSvpV4kTdZp4CqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiihKKJt%2B9BRqmTYbKtwDtJ3OM70B2hVS21jsm2Ij4KJy1a84vkuZc23%2FynyUd2YWf%2FfT4%2F0NWLKO5DqwTMoKuBWHsT5PBcPJoU0QGNCakjdsE3i1cqBuV5iuW6j9w8yhfqKc1mfGBCgsiJj4KdNorG9z0MyAD1a68mD%2FwYT1JFhhODnhTCGsJQflxCMQ2FiqyMI5ap0IN5r6P9nDJiUc5aBJ%2BZ7ywUUnMVdpzgTQvzDSFX%2Bh1joSGoK9CT3hjqhbTePkk0DiPEDbzo3rU7gelcxY%2BMMWMLjwCGWMR82HkDhmxzKXp44geNMAD6Mxy96L1x5j58B5nvtUoEEOQTjdC1CHG3PCH4UssfJbnrrQPIBTwu2WCv2RVrpfIMZU0gsxoxTK5n7ETvwt1NGVgzbz9FDw0NXeH4nYnrKCT7QOR2dejmRqSOFmNvFi4gV3lynE6v%2F3r7Tol05h6RcnzGO%2BbqQ3HSfDN9Kvo46%2FLVtt32CH09PVAndvT8CxN144Du5TSPdPo1Q9z83kS%2Bo%2BgIAvKa4Wem7rCTAgB7hdo%2Fwp5n36Nl5eRQrb5hL6zjdTkHSR8QCA%2BydI6oOeEDfrJ53ysxTiYXOupnTuUXRRAzfRmH9LR%2Fs3b0st7vZP2GSBPbg48JcJz2SZNOLsp6UwyqmyvQY6pgEEuo75yVShOZr2XgV15GTeFtbnvSsSkjNxFoP20VrvQPUDMRaze2GJaZBk5zpkjV%2FN1I5oJdO7qQmrTjr1kJZ7BgkA8pCxRLhmp3%2F72LWQVhKGTBNL99E15gtGo2xzflvyFuE8a4gyDn6sWead95t37KgYQh4ejQbNiBnbaOQhT5MRaYNXuq7cxEJ5EkOMEaJCaDsMPX%2Fn9AC7R0tbcrsy1NUSo7VC&X-Amz-Signature=fb8aeb04fa192eecff4d09f0040fc525c241e0b852cd2682974aff6468d3695f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDKOKA26%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApPDfz3G4I2pmKeYHwc3bN6qzXE92%2BxM%2FlPgaMNl4RKAiBzAPZJ%2Bx7QCfRQTw%2B2OBPNgMOo0Itf6eSvpV4kTdZp4CqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiihKKJt%2B9BRqmTYbKtwDtJ3OM70B2hVS21jsm2Ij4KJy1a84vkuZc23%2FynyUd2YWf%2FfT4%2F0NWLKO5DqwTMoKuBWHsT5PBcPJoU0QGNCakjdsE3i1cqBuV5iuW6j9w8yhfqKc1mfGBCgsiJj4KdNorG9z0MyAD1a68mD%2FwYT1JFhhODnhTCGsJQflxCMQ2FiqyMI5ap0IN5r6P9nDJiUc5aBJ%2BZ7ywUUnMVdpzgTQvzDSFX%2Bh1joSGoK9CT3hjqhbTePkk0DiPEDbzo3rU7gelcxY%2BMMWMLjwCGWMR82HkDhmxzKXp44geNMAD6Mxy96L1x5j58B5nvtUoEEOQTjdC1CHG3PCH4UssfJbnrrQPIBTwu2WCv2RVrpfIMZU0gsxoxTK5n7ETvwt1NGVgzbz9FDw0NXeH4nYnrKCT7QOR2dejmRqSOFmNvFi4gV3lynE6v%2F3r7Tol05h6RcnzGO%2BbqQ3HSfDN9Kvo46%2FLVtt32CH09PVAndvT8CxN144Du5TSPdPo1Q9z83kS%2Bo%2BgIAvKa4Wem7rCTAgB7hdo%2Fwp5n36Nl5eRQrb5hL6zjdTkHSR8QCA%2BydI6oOeEDfrJ53ysxTiYXOupnTuUXRRAzfRmH9LR%2Fs3b0st7vZP2GSBPbg48JcJz2SZNOLsp6UwyqmyvQY6pgEEuo75yVShOZr2XgV15GTeFtbnvSsSkjNxFoP20VrvQPUDMRaze2GJaZBk5zpkjV%2FN1I5oJdO7qQmrTjr1kJZ7BgkA8pCxRLhmp3%2F72LWQVhKGTBNL99E15gtGo2xzflvyFuE8a4gyDn6sWead95t37KgYQh4ejQbNiBnbaOQhT5MRaYNXuq7cxEJ5EkOMEaJCaDsMPX%2Fn9AC7R0tbcrsy1NUSo7VC&X-Amz-Signature=d259b720ded3be8e1ea3c794d741d759784b11716297baa5c8e0ee35f4d55f30&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDKOKA26%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApPDfz3G4I2pmKeYHwc3bN6qzXE92%2BxM%2FlPgaMNl4RKAiBzAPZJ%2Bx7QCfRQTw%2B2OBPNgMOo0Itf6eSvpV4kTdZp4CqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiihKKJt%2B9BRqmTYbKtwDtJ3OM70B2hVS21jsm2Ij4KJy1a84vkuZc23%2FynyUd2YWf%2FfT4%2F0NWLKO5DqwTMoKuBWHsT5PBcPJoU0QGNCakjdsE3i1cqBuV5iuW6j9w8yhfqKc1mfGBCgsiJj4KdNorG9z0MyAD1a68mD%2FwYT1JFhhODnhTCGsJQflxCMQ2FiqyMI5ap0IN5r6P9nDJiUc5aBJ%2BZ7ywUUnMVdpzgTQvzDSFX%2Bh1joSGoK9CT3hjqhbTePkk0DiPEDbzo3rU7gelcxY%2BMMWMLjwCGWMR82HkDhmxzKXp44geNMAD6Mxy96L1x5j58B5nvtUoEEOQTjdC1CHG3PCH4UssfJbnrrQPIBTwu2WCv2RVrpfIMZU0gsxoxTK5n7ETvwt1NGVgzbz9FDw0NXeH4nYnrKCT7QOR2dejmRqSOFmNvFi4gV3lynE6v%2F3r7Tol05h6RcnzGO%2BbqQ3HSfDN9Kvo46%2FLVtt32CH09PVAndvT8CxN144Du5TSPdPo1Q9z83kS%2Bo%2BgIAvKa4Wem7rCTAgB7hdo%2Fwp5n36Nl5eRQrb5hL6zjdTkHSR8QCA%2BydI6oOeEDfrJ53ysxTiYXOupnTuUXRRAzfRmH9LR%2Fs3b0st7vZP2GSBPbg48JcJz2SZNOLsp6UwyqmyvQY6pgEEuo75yVShOZr2XgV15GTeFtbnvSsSkjNxFoP20VrvQPUDMRaze2GJaZBk5zpkjV%2FN1I5oJdO7qQmrTjr1kJZ7BgkA8pCxRLhmp3%2F72LWQVhKGTBNL99E15gtGo2xzflvyFuE8a4gyDn6sWead95t37KgYQh4ejQbNiBnbaOQhT5MRaYNXuq7cxEJ5EkOMEaJCaDsMPX%2Fn9AC7R0tbcrsy1NUSo7VC&X-Amz-Signature=62c8dcb3576660d89f0b5df1e3a38051684c9871c297ca560f674624ea453516&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDKOKA26%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApPDfz3G4I2pmKeYHwc3bN6qzXE92%2BxM%2FlPgaMNl4RKAiBzAPZJ%2Bx7QCfRQTw%2B2OBPNgMOo0Itf6eSvpV4kTdZp4CqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiihKKJt%2B9BRqmTYbKtwDtJ3OM70B2hVS21jsm2Ij4KJy1a84vkuZc23%2FynyUd2YWf%2FfT4%2F0NWLKO5DqwTMoKuBWHsT5PBcPJoU0QGNCakjdsE3i1cqBuV5iuW6j9w8yhfqKc1mfGBCgsiJj4KdNorG9z0MyAD1a68mD%2FwYT1JFhhODnhTCGsJQflxCMQ2FiqyMI5ap0IN5r6P9nDJiUc5aBJ%2BZ7ywUUnMVdpzgTQvzDSFX%2Bh1joSGoK9CT3hjqhbTePkk0DiPEDbzo3rU7gelcxY%2BMMWMLjwCGWMR82HkDhmxzKXp44geNMAD6Mxy96L1x5j58B5nvtUoEEOQTjdC1CHG3PCH4UssfJbnrrQPIBTwu2WCv2RVrpfIMZU0gsxoxTK5n7ETvwt1NGVgzbz9FDw0NXeH4nYnrKCT7QOR2dejmRqSOFmNvFi4gV3lynE6v%2F3r7Tol05h6RcnzGO%2BbqQ3HSfDN9Kvo46%2FLVtt32CH09PVAndvT8CxN144Du5TSPdPo1Q9z83kS%2Bo%2BgIAvKa4Wem7rCTAgB7hdo%2Fwp5n36Nl5eRQrb5hL6zjdTkHSR8QCA%2BydI6oOeEDfrJ53ysxTiYXOupnTuUXRRAzfRmH9LR%2Fs3b0st7vZP2GSBPbg48JcJz2SZNOLsp6UwyqmyvQY6pgEEuo75yVShOZr2XgV15GTeFtbnvSsSkjNxFoP20VrvQPUDMRaze2GJaZBk5zpkjV%2FN1I5oJdO7qQmrTjr1kJZ7BgkA8pCxRLhmp3%2F72LWQVhKGTBNL99E15gtGo2xzflvyFuE8a4gyDn6sWead95t37KgYQh4ejQbNiBnbaOQhT5MRaYNXuq7cxEJ5EkOMEaJCaDsMPX%2Fn9AC7R0tbcrsy1NUSo7VC&X-Amz-Signature=3b886b17c45c42b1d8ff23021b7a384cfd74559e982c464993b268fc95c4b44e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDKOKA26%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApPDfz3G4I2pmKeYHwc3bN6qzXE92%2BxM%2FlPgaMNl4RKAiBzAPZJ%2Bx7QCfRQTw%2B2OBPNgMOo0Itf6eSvpV4kTdZp4CqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiihKKJt%2B9BRqmTYbKtwDtJ3OM70B2hVS21jsm2Ij4KJy1a84vkuZc23%2FynyUd2YWf%2FfT4%2F0NWLKO5DqwTMoKuBWHsT5PBcPJoU0QGNCakjdsE3i1cqBuV5iuW6j9w8yhfqKc1mfGBCgsiJj4KdNorG9z0MyAD1a68mD%2FwYT1JFhhODnhTCGsJQflxCMQ2FiqyMI5ap0IN5r6P9nDJiUc5aBJ%2BZ7ywUUnMVdpzgTQvzDSFX%2Bh1joSGoK9CT3hjqhbTePkk0DiPEDbzo3rU7gelcxY%2BMMWMLjwCGWMR82HkDhmxzKXp44geNMAD6Mxy96L1x5j58B5nvtUoEEOQTjdC1CHG3PCH4UssfJbnrrQPIBTwu2WCv2RVrpfIMZU0gsxoxTK5n7ETvwt1NGVgzbz9FDw0NXeH4nYnrKCT7QOR2dejmRqSOFmNvFi4gV3lynE6v%2F3r7Tol05h6RcnzGO%2BbqQ3HSfDN9Kvo46%2FLVtt32CH09PVAndvT8CxN144Du5TSPdPo1Q9z83kS%2Bo%2BgIAvKa4Wem7rCTAgB7hdo%2Fwp5n36Nl5eRQrb5hL6zjdTkHSR8QCA%2BydI6oOeEDfrJ53ysxTiYXOupnTuUXRRAzfRmH9LR%2Fs3b0st7vZP2GSBPbg48JcJz2SZNOLsp6UwyqmyvQY6pgEEuo75yVShOZr2XgV15GTeFtbnvSsSkjNxFoP20VrvQPUDMRaze2GJaZBk5zpkjV%2FN1I5oJdO7qQmrTjr1kJZ7BgkA8pCxRLhmp3%2F72LWQVhKGTBNL99E15gtGo2xzflvyFuE8a4gyDn6sWead95t37KgYQh4ejQbNiBnbaOQhT5MRaYNXuq7cxEJ5EkOMEaJCaDsMPX%2Fn9AC7R0tbcrsy1NUSo7VC&X-Amz-Signature=c3dc9afd06e69a9a33c3c76ed8724f67522a6247a8ac2948ee28c1324cd398b9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
