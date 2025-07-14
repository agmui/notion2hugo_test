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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ST7GVE6%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIGYBaveii%2B3uVIRhRQuYFHxDtMDwiqRoB70RqsN0JsH3AiEAhBYiQHDFfVrR5WvYC9qCyCMpahV%2FdqWyxkSCteK97Skq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLMeR%2BN2QbfbjC7UvSrcA4CCdUeg6%2FjMFcrXbqNkZ18Atg%2Bc2b%2Fk0RlixItNKghFU3MsX%2Fjl8r9AwVDzGiZC9cGgWdK6NaIIadENJJ%2FiYE7j2761%2BEeWdo3KiaU1BnYPst%2FEvMet%2BUr9orMNix2wb1Z6G4fqmWkF6YP%2BeplbXme2kn1RTjv0d8ptrgfNUZ8UrNzLUZD2Wt0KznwnfyI%2FT1LrgHRaO6BT%2BDQL5AagS%2FU35jOlyMOcxSivBmKPDsFk1VGaAh2DUceVG8ar3VzwUQeJh%2BCx7UNX%2Fy5LUkBvH80lyObDf6bx%2BrNG%2B8AcSm%2FkIKX46PANAeE%2BHHJtUv5%2BTtM9s4V%2Bpcv9qJe9Zy2lgfTIaLPHk%2FON8YFOWN905bgJq9g4HY7STa1Lu41QNdw7uT8jB9iF7GjlyieyiKe%2BbzKmLv7iNtiiLhfoLnhc3dE6UewEe1MQEYLDi81rmK6ckXBi5kBjiW29QFSU9Pc3OdhwX0YXdA2MFGdaHLVpldMFwapBkI8TpROkv2%2BDw0iscc%2B6YMRxIV5TnASOFAFqv40uU7XYlIYVvra9B4%2B%2FHKnPUj%2BZc8hihTZEvzMUK0cfS1nwbjtvKLi3jbtEdonRIlick8sPQCTq%2F%2BZzc2ITj0GoFJ15kAl95MyHYUl8MOOF1MMGOqUBHybLZgoHxGGnBlA7GmlJqVcvgTWsWfP6HNfqdVeDPzm5VXxUigOQ4hJkRp9MwFKrvN5KytVSAnC6kioFkNfTm9qpNUCiTLMH4xtlK7PLLShlq1Z3hN1R5j2DITk2Vwa6JPPVkDo7m70tmZ4Z%2BzuhgoqsC4iuniIBqt%2BA0gyvC%2F6FWPlTewmEPwm9mCe0Lnl4Y8MUGawJBS1c1A%2BTgZ7xRXY6B0%2BI&X-Amz-Signature=4fd25bfc09be1c2333e5741e7e0006e088edb969246cbd2c658c97c51a6a9534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ST7GVE6%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIGYBaveii%2B3uVIRhRQuYFHxDtMDwiqRoB70RqsN0JsH3AiEAhBYiQHDFfVrR5WvYC9qCyCMpahV%2FdqWyxkSCteK97Skq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLMeR%2BN2QbfbjC7UvSrcA4CCdUeg6%2FjMFcrXbqNkZ18Atg%2Bc2b%2Fk0RlixItNKghFU3MsX%2Fjl8r9AwVDzGiZC9cGgWdK6NaIIadENJJ%2FiYE7j2761%2BEeWdo3KiaU1BnYPst%2FEvMet%2BUr9orMNix2wb1Z6G4fqmWkF6YP%2BeplbXme2kn1RTjv0d8ptrgfNUZ8UrNzLUZD2Wt0KznwnfyI%2FT1LrgHRaO6BT%2BDQL5AagS%2FU35jOlyMOcxSivBmKPDsFk1VGaAh2DUceVG8ar3VzwUQeJh%2BCx7UNX%2Fy5LUkBvH80lyObDf6bx%2BrNG%2B8AcSm%2FkIKX46PANAeE%2BHHJtUv5%2BTtM9s4V%2Bpcv9qJe9Zy2lgfTIaLPHk%2FON8YFOWN905bgJq9g4HY7STa1Lu41QNdw7uT8jB9iF7GjlyieyiKe%2BbzKmLv7iNtiiLhfoLnhc3dE6UewEe1MQEYLDi81rmK6ckXBi5kBjiW29QFSU9Pc3OdhwX0YXdA2MFGdaHLVpldMFwapBkI8TpROkv2%2BDw0iscc%2B6YMRxIV5TnASOFAFqv40uU7XYlIYVvra9B4%2B%2FHKnPUj%2BZc8hihTZEvzMUK0cfS1nwbjtvKLi3jbtEdonRIlick8sPQCTq%2F%2BZzc2ITj0GoFJ15kAl95MyHYUl8MOOF1MMGOqUBHybLZgoHxGGnBlA7GmlJqVcvgTWsWfP6HNfqdVeDPzm5VXxUigOQ4hJkRp9MwFKrvN5KytVSAnC6kioFkNfTm9qpNUCiTLMH4xtlK7PLLShlq1Z3hN1R5j2DITk2Vwa6JPPVkDo7m70tmZ4Z%2BzuhgoqsC4iuniIBqt%2BA0gyvC%2F6FWPlTewmEPwm9mCe0Lnl4Y8MUGawJBS1c1A%2BTgZ7xRXY6B0%2BI&X-Amz-Signature=b4453015ca5141364710b150c9544020b62840bdaaa1fe4c3b73dfc9d00fbcad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ST7GVE6%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIGYBaveii%2B3uVIRhRQuYFHxDtMDwiqRoB70RqsN0JsH3AiEAhBYiQHDFfVrR5WvYC9qCyCMpahV%2FdqWyxkSCteK97Skq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLMeR%2BN2QbfbjC7UvSrcA4CCdUeg6%2FjMFcrXbqNkZ18Atg%2Bc2b%2Fk0RlixItNKghFU3MsX%2Fjl8r9AwVDzGiZC9cGgWdK6NaIIadENJJ%2FiYE7j2761%2BEeWdo3KiaU1BnYPst%2FEvMet%2BUr9orMNix2wb1Z6G4fqmWkF6YP%2BeplbXme2kn1RTjv0d8ptrgfNUZ8UrNzLUZD2Wt0KznwnfyI%2FT1LrgHRaO6BT%2BDQL5AagS%2FU35jOlyMOcxSivBmKPDsFk1VGaAh2DUceVG8ar3VzwUQeJh%2BCx7UNX%2Fy5LUkBvH80lyObDf6bx%2BrNG%2B8AcSm%2FkIKX46PANAeE%2BHHJtUv5%2BTtM9s4V%2Bpcv9qJe9Zy2lgfTIaLPHk%2FON8YFOWN905bgJq9g4HY7STa1Lu41QNdw7uT8jB9iF7GjlyieyiKe%2BbzKmLv7iNtiiLhfoLnhc3dE6UewEe1MQEYLDi81rmK6ckXBi5kBjiW29QFSU9Pc3OdhwX0YXdA2MFGdaHLVpldMFwapBkI8TpROkv2%2BDw0iscc%2B6YMRxIV5TnASOFAFqv40uU7XYlIYVvra9B4%2B%2FHKnPUj%2BZc8hihTZEvzMUK0cfS1nwbjtvKLi3jbtEdonRIlick8sPQCTq%2F%2BZzc2ITj0GoFJ15kAl95MyHYUl8MOOF1MMGOqUBHybLZgoHxGGnBlA7GmlJqVcvgTWsWfP6HNfqdVeDPzm5VXxUigOQ4hJkRp9MwFKrvN5KytVSAnC6kioFkNfTm9qpNUCiTLMH4xtlK7PLLShlq1Z3hN1R5j2DITk2Vwa6JPPVkDo7m70tmZ4Z%2BzuhgoqsC4iuniIBqt%2BA0gyvC%2F6FWPlTewmEPwm9mCe0Lnl4Y8MUGawJBS1c1A%2BTgZ7xRXY6B0%2BI&X-Amz-Signature=d886a07d5c847beecbf71acda87c6cc7bf0d9d0904706e8134ae70b91ab576f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ST7GVE6%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIGYBaveii%2B3uVIRhRQuYFHxDtMDwiqRoB70RqsN0JsH3AiEAhBYiQHDFfVrR5WvYC9qCyCMpahV%2FdqWyxkSCteK97Skq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLMeR%2BN2QbfbjC7UvSrcA4CCdUeg6%2FjMFcrXbqNkZ18Atg%2Bc2b%2Fk0RlixItNKghFU3MsX%2Fjl8r9AwVDzGiZC9cGgWdK6NaIIadENJJ%2FiYE7j2761%2BEeWdo3KiaU1BnYPst%2FEvMet%2BUr9orMNix2wb1Z6G4fqmWkF6YP%2BeplbXme2kn1RTjv0d8ptrgfNUZ8UrNzLUZD2Wt0KznwnfyI%2FT1LrgHRaO6BT%2BDQL5AagS%2FU35jOlyMOcxSivBmKPDsFk1VGaAh2DUceVG8ar3VzwUQeJh%2BCx7UNX%2Fy5LUkBvH80lyObDf6bx%2BrNG%2B8AcSm%2FkIKX46PANAeE%2BHHJtUv5%2BTtM9s4V%2Bpcv9qJe9Zy2lgfTIaLPHk%2FON8YFOWN905bgJq9g4HY7STa1Lu41QNdw7uT8jB9iF7GjlyieyiKe%2BbzKmLv7iNtiiLhfoLnhc3dE6UewEe1MQEYLDi81rmK6ckXBi5kBjiW29QFSU9Pc3OdhwX0YXdA2MFGdaHLVpldMFwapBkI8TpROkv2%2BDw0iscc%2B6YMRxIV5TnASOFAFqv40uU7XYlIYVvra9B4%2B%2FHKnPUj%2BZc8hihTZEvzMUK0cfS1nwbjtvKLi3jbtEdonRIlick8sPQCTq%2F%2BZzc2ITj0GoFJ15kAl95MyHYUl8MOOF1MMGOqUBHybLZgoHxGGnBlA7GmlJqVcvgTWsWfP6HNfqdVeDPzm5VXxUigOQ4hJkRp9MwFKrvN5KytVSAnC6kioFkNfTm9qpNUCiTLMH4xtlK7PLLShlq1Z3hN1R5j2DITk2Vwa6JPPVkDo7m70tmZ4Z%2BzuhgoqsC4iuniIBqt%2BA0gyvC%2F6FWPlTewmEPwm9mCe0Lnl4Y8MUGawJBS1c1A%2BTgZ7xRXY6B0%2BI&X-Amz-Signature=b8f268eb73ff5d1e8ab48124f874d9658c6d5e60541b6512fee8bae5edd360c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ST7GVE6%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIGYBaveii%2B3uVIRhRQuYFHxDtMDwiqRoB70RqsN0JsH3AiEAhBYiQHDFfVrR5WvYC9qCyCMpahV%2FdqWyxkSCteK97Skq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLMeR%2BN2QbfbjC7UvSrcA4CCdUeg6%2FjMFcrXbqNkZ18Atg%2Bc2b%2Fk0RlixItNKghFU3MsX%2Fjl8r9AwVDzGiZC9cGgWdK6NaIIadENJJ%2FiYE7j2761%2BEeWdo3KiaU1BnYPst%2FEvMet%2BUr9orMNix2wb1Z6G4fqmWkF6YP%2BeplbXme2kn1RTjv0d8ptrgfNUZ8UrNzLUZD2Wt0KznwnfyI%2FT1LrgHRaO6BT%2BDQL5AagS%2FU35jOlyMOcxSivBmKPDsFk1VGaAh2DUceVG8ar3VzwUQeJh%2BCx7UNX%2Fy5LUkBvH80lyObDf6bx%2BrNG%2B8AcSm%2FkIKX46PANAeE%2BHHJtUv5%2BTtM9s4V%2Bpcv9qJe9Zy2lgfTIaLPHk%2FON8YFOWN905bgJq9g4HY7STa1Lu41QNdw7uT8jB9iF7GjlyieyiKe%2BbzKmLv7iNtiiLhfoLnhc3dE6UewEe1MQEYLDi81rmK6ckXBi5kBjiW29QFSU9Pc3OdhwX0YXdA2MFGdaHLVpldMFwapBkI8TpROkv2%2BDw0iscc%2B6YMRxIV5TnASOFAFqv40uU7XYlIYVvra9B4%2B%2FHKnPUj%2BZc8hihTZEvzMUK0cfS1nwbjtvKLi3jbtEdonRIlick8sPQCTq%2F%2BZzc2ITj0GoFJ15kAl95MyHYUl8MOOF1MMGOqUBHybLZgoHxGGnBlA7GmlJqVcvgTWsWfP6HNfqdVeDPzm5VXxUigOQ4hJkRp9MwFKrvN5KytVSAnC6kioFkNfTm9qpNUCiTLMH4xtlK7PLLShlq1Z3hN1R5j2DITk2Vwa6JPPVkDo7m70tmZ4Z%2BzuhgoqsC4iuniIBqt%2BA0gyvC%2F6FWPlTewmEPwm9mCe0Lnl4Y8MUGawJBS1c1A%2BTgZ7xRXY6B0%2BI&X-Amz-Signature=e9030cf9b0b2c4e163ce2adc5a1a605bbf56f8e5f3a2d03ad8c70fda20be5343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ST7GVE6%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIGYBaveii%2B3uVIRhRQuYFHxDtMDwiqRoB70RqsN0JsH3AiEAhBYiQHDFfVrR5WvYC9qCyCMpahV%2FdqWyxkSCteK97Skq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLMeR%2BN2QbfbjC7UvSrcA4CCdUeg6%2FjMFcrXbqNkZ18Atg%2Bc2b%2Fk0RlixItNKghFU3MsX%2Fjl8r9AwVDzGiZC9cGgWdK6NaIIadENJJ%2FiYE7j2761%2BEeWdo3KiaU1BnYPst%2FEvMet%2BUr9orMNix2wb1Z6G4fqmWkF6YP%2BeplbXme2kn1RTjv0d8ptrgfNUZ8UrNzLUZD2Wt0KznwnfyI%2FT1LrgHRaO6BT%2BDQL5AagS%2FU35jOlyMOcxSivBmKPDsFk1VGaAh2DUceVG8ar3VzwUQeJh%2BCx7UNX%2Fy5LUkBvH80lyObDf6bx%2BrNG%2B8AcSm%2FkIKX46PANAeE%2BHHJtUv5%2BTtM9s4V%2Bpcv9qJe9Zy2lgfTIaLPHk%2FON8YFOWN905bgJq9g4HY7STa1Lu41QNdw7uT8jB9iF7GjlyieyiKe%2BbzKmLv7iNtiiLhfoLnhc3dE6UewEe1MQEYLDi81rmK6ckXBi5kBjiW29QFSU9Pc3OdhwX0YXdA2MFGdaHLVpldMFwapBkI8TpROkv2%2BDw0iscc%2B6YMRxIV5TnASOFAFqv40uU7XYlIYVvra9B4%2B%2FHKnPUj%2BZc8hihTZEvzMUK0cfS1nwbjtvKLi3jbtEdonRIlick8sPQCTq%2F%2BZzc2ITj0GoFJ15kAl95MyHYUl8MOOF1MMGOqUBHybLZgoHxGGnBlA7GmlJqVcvgTWsWfP6HNfqdVeDPzm5VXxUigOQ4hJkRp9MwFKrvN5KytVSAnC6kioFkNfTm9qpNUCiTLMH4xtlK7PLLShlq1Z3hN1R5j2DITk2Vwa6JPPVkDo7m70tmZ4Z%2BzuhgoqsC4iuniIBqt%2BA0gyvC%2F6FWPlTewmEPwm9mCe0Lnl4Y8MUGawJBS1c1A%2BTgZ7xRXY6B0%2BI&X-Amz-Signature=f8cfb68f926d178ea659c50c71e62c27ebd4092f9e3097905a886d8446f340b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ST7GVE6%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIGYBaveii%2B3uVIRhRQuYFHxDtMDwiqRoB70RqsN0JsH3AiEAhBYiQHDFfVrR5WvYC9qCyCMpahV%2FdqWyxkSCteK97Skq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLMeR%2BN2QbfbjC7UvSrcA4CCdUeg6%2FjMFcrXbqNkZ18Atg%2Bc2b%2Fk0RlixItNKghFU3MsX%2Fjl8r9AwVDzGiZC9cGgWdK6NaIIadENJJ%2FiYE7j2761%2BEeWdo3KiaU1BnYPst%2FEvMet%2BUr9orMNix2wb1Z6G4fqmWkF6YP%2BeplbXme2kn1RTjv0d8ptrgfNUZ8UrNzLUZD2Wt0KznwnfyI%2FT1LrgHRaO6BT%2BDQL5AagS%2FU35jOlyMOcxSivBmKPDsFk1VGaAh2DUceVG8ar3VzwUQeJh%2BCx7UNX%2Fy5LUkBvH80lyObDf6bx%2BrNG%2B8AcSm%2FkIKX46PANAeE%2BHHJtUv5%2BTtM9s4V%2Bpcv9qJe9Zy2lgfTIaLPHk%2FON8YFOWN905bgJq9g4HY7STa1Lu41QNdw7uT8jB9iF7GjlyieyiKe%2BbzKmLv7iNtiiLhfoLnhc3dE6UewEe1MQEYLDi81rmK6ckXBi5kBjiW29QFSU9Pc3OdhwX0YXdA2MFGdaHLVpldMFwapBkI8TpROkv2%2BDw0iscc%2B6YMRxIV5TnASOFAFqv40uU7XYlIYVvra9B4%2B%2FHKnPUj%2BZc8hihTZEvzMUK0cfS1nwbjtvKLi3jbtEdonRIlick8sPQCTq%2F%2BZzc2ITj0GoFJ15kAl95MyHYUl8MOOF1MMGOqUBHybLZgoHxGGnBlA7GmlJqVcvgTWsWfP6HNfqdVeDPzm5VXxUigOQ4hJkRp9MwFKrvN5KytVSAnC6kioFkNfTm9qpNUCiTLMH4xtlK7PLLShlq1Z3hN1R5j2DITk2Vwa6JPPVkDo7m70tmZ4Z%2BzuhgoqsC4iuniIBqt%2BA0gyvC%2F6FWPlTewmEPwm9mCe0Lnl4Y8MUGawJBS1c1A%2BTgZ7xRXY6B0%2BI&X-Amz-Signature=c4f5acce2d08e2ad634c68234dd48cd4d375dc4deae092ee593fa0124154a0ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ST7GVE6%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIGYBaveii%2B3uVIRhRQuYFHxDtMDwiqRoB70RqsN0JsH3AiEAhBYiQHDFfVrR5WvYC9qCyCMpahV%2FdqWyxkSCteK97Skq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLMeR%2BN2QbfbjC7UvSrcA4CCdUeg6%2FjMFcrXbqNkZ18Atg%2Bc2b%2Fk0RlixItNKghFU3MsX%2Fjl8r9AwVDzGiZC9cGgWdK6NaIIadENJJ%2FiYE7j2761%2BEeWdo3KiaU1BnYPst%2FEvMet%2BUr9orMNix2wb1Z6G4fqmWkF6YP%2BeplbXme2kn1RTjv0d8ptrgfNUZ8UrNzLUZD2Wt0KznwnfyI%2FT1LrgHRaO6BT%2BDQL5AagS%2FU35jOlyMOcxSivBmKPDsFk1VGaAh2DUceVG8ar3VzwUQeJh%2BCx7UNX%2Fy5LUkBvH80lyObDf6bx%2BrNG%2B8AcSm%2FkIKX46PANAeE%2BHHJtUv5%2BTtM9s4V%2Bpcv9qJe9Zy2lgfTIaLPHk%2FON8YFOWN905bgJq9g4HY7STa1Lu41QNdw7uT8jB9iF7GjlyieyiKe%2BbzKmLv7iNtiiLhfoLnhc3dE6UewEe1MQEYLDi81rmK6ckXBi5kBjiW29QFSU9Pc3OdhwX0YXdA2MFGdaHLVpldMFwapBkI8TpROkv2%2BDw0iscc%2B6YMRxIV5TnASOFAFqv40uU7XYlIYVvra9B4%2B%2FHKnPUj%2BZc8hihTZEvzMUK0cfS1nwbjtvKLi3jbtEdonRIlick8sPQCTq%2F%2BZzc2ITj0GoFJ15kAl95MyHYUl8MOOF1MMGOqUBHybLZgoHxGGnBlA7GmlJqVcvgTWsWfP6HNfqdVeDPzm5VXxUigOQ4hJkRp9MwFKrvN5KytVSAnC6kioFkNfTm9qpNUCiTLMH4xtlK7PLLShlq1Z3hN1R5j2DITk2Vwa6JPPVkDo7m70tmZ4Z%2BzuhgoqsC4iuniIBqt%2BA0gyvC%2F6FWPlTewmEPwm9mCe0Lnl4Y8MUGawJBS1c1A%2BTgZ7xRXY6B0%2BI&X-Amz-Signature=8ca7176da2e3a5478df2b5f0fa887047f87e3b6ff8da03a596ea86020543bb9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
