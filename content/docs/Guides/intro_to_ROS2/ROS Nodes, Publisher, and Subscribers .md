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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUX6ERW%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCICAO3%2FTKfI9Ad0YDVTTJZRK%2FPF01FUdCihbbVLmCCyfVAiBCqlWy%2FSzDok2obWUrLyWmJuv1A9KTSv3kUt1%2FTLfxXiqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrGAQoCHTdWQBOgCVKtwDkzXSrXHo7mfEwXjslpsQ1z2K1dRt1mEQKYJ1kekZZw7D%2FS6h2m9g6Pl0uXdT4JKCeIMaXp%2FhNotbMg%2B4a1O5xhk5ZhMEYZytovN1gfUvtwgkTbCUIIcZLTfCXYGWVElIjtW4XIAykFcLEgCF52NPZ%2FaouhNnsZcjfWqOhVzVez8UuoojoQ4NAfwh8vDiiCgszWeYUcd424StPHoTNcEQ1QvG6GNPuuBiAmmewnBfDnqgU1K4ZitIXRzoccDJi5jJ4kOtMdMihkp27Jvgebfu8tLO3SoDGksuKHbQ3IWxo3%2BLALFbynsB5T5Bh%2FjIE5bZp1bCLKjk7K5%2FQUZczSBqXrXZm2Z6ePckg7RlIDToOhrSKyujiCn9MAnYbIFkaFbanEsAlb6PPKn9SV275WfvD1FWMFkpj9BQu%2FTKzA3RkxAKTARXfi86NgAo%2BfDrX1Yikg0xfwhnUpz%2BMO%2Bf5CC9o5CGC3EDSeupJJAbQ6xFuV9JVTG7DAlc0ESMFgLrbzu3E9oiEe6Fw4wrzfevw16wA3kHd%2Bajqw3sufyEmmPctoIXCdIPpmn8wlPuC9G6d8M7%2BedCeTyItoW5XPuLrr0PRSjwloioFMAPmvj2c2GfYyA4eCUxtHUM1E2GLIQwzr2IwQY6pgFlwj4klUaPpXjen9DsbgzlZcq6mkFhrayZvRXy8oq1jECFMeemxGHuzyO%2Bq574bSxEzjG3aiGJdufTht6qmPbmiC4nRp4RblthT6FGXvA9MBt99O3zNmJcCp2H9kt3Bqo7A7MT5any9F4jO0C480RzitD5OVJ69LgmdaVUL%2FZj8Mw4wyAUXH%2BpqENoAxaJEEgWO2uHewFijjccfx9is5sGcwuE2lLn&X-Amz-Signature=079426fe032f204528b74468d74820cbecef8c23f2dd0de40bf636c73691741b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUX6ERW%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCICAO3%2FTKfI9Ad0YDVTTJZRK%2FPF01FUdCihbbVLmCCyfVAiBCqlWy%2FSzDok2obWUrLyWmJuv1A9KTSv3kUt1%2FTLfxXiqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrGAQoCHTdWQBOgCVKtwDkzXSrXHo7mfEwXjslpsQ1z2K1dRt1mEQKYJ1kekZZw7D%2FS6h2m9g6Pl0uXdT4JKCeIMaXp%2FhNotbMg%2B4a1O5xhk5ZhMEYZytovN1gfUvtwgkTbCUIIcZLTfCXYGWVElIjtW4XIAykFcLEgCF52NPZ%2FaouhNnsZcjfWqOhVzVez8UuoojoQ4NAfwh8vDiiCgszWeYUcd424StPHoTNcEQ1QvG6GNPuuBiAmmewnBfDnqgU1K4ZitIXRzoccDJi5jJ4kOtMdMihkp27Jvgebfu8tLO3SoDGksuKHbQ3IWxo3%2BLALFbynsB5T5Bh%2FjIE5bZp1bCLKjk7K5%2FQUZczSBqXrXZm2Z6ePckg7RlIDToOhrSKyujiCn9MAnYbIFkaFbanEsAlb6PPKn9SV275WfvD1FWMFkpj9BQu%2FTKzA3RkxAKTARXfi86NgAo%2BfDrX1Yikg0xfwhnUpz%2BMO%2Bf5CC9o5CGC3EDSeupJJAbQ6xFuV9JVTG7DAlc0ESMFgLrbzu3E9oiEe6Fw4wrzfevw16wA3kHd%2Bajqw3sufyEmmPctoIXCdIPpmn8wlPuC9G6d8M7%2BedCeTyItoW5XPuLrr0PRSjwloioFMAPmvj2c2GfYyA4eCUxtHUM1E2GLIQwzr2IwQY6pgFlwj4klUaPpXjen9DsbgzlZcq6mkFhrayZvRXy8oq1jECFMeemxGHuzyO%2Bq574bSxEzjG3aiGJdufTht6qmPbmiC4nRp4RblthT6FGXvA9MBt99O3zNmJcCp2H9kt3Bqo7A7MT5any9F4jO0C480RzitD5OVJ69LgmdaVUL%2FZj8Mw4wyAUXH%2BpqENoAxaJEEgWO2uHewFijjccfx9is5sGcwuE2lLn&X-Amz-Signature=96104fc5b5d5f44c9c895bfa3daf0b1dd8ea0a9eb6e540bd4f85646f3f8017fb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUX6ERW%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCICAO3%2FTKfI9Ad0YDVTTJZRK%2FPF01FUdCihbbVLmCCyfVAiBCqlWy%2FSzDok2obWUrLyWmJuv1A9KTSv3kUt1%2FTLfxXiqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrGAQoCHTdWQBOgCVKtwDkzXSrXHo7mfEwXjslpsQ1z2K1dRt1mEQKYJ1kekZZw7D%2FS6h2m9g6Pl0uXdT4JKCeIMaXp%2FhNotbMg%2B4a1O5xhk5ZhMEYZytovN1gfUvtwgkTbCUIIcZLTfCXYGWVElIjtW4XIAykFcLEgCF52NPZ%2FaouhNnsZcjfWqOhVzVez8UuoojoQ4NAfwh8vDiiCgszWeYUcd424StPHoTNcEQ1QvG6GNPuuBiAmmewnBfDnqgU1K4ZitIXRzoccDJi5jJ4kOtMdMihkp27Jvgebfu8tLO3SoDGksuKHbQ3IWxo3%2BLALFbynsB5T5Bh%2FjIE5bZp1bCLKjk7K5%2FQUZczSBqXrXZm2Z6ePckg7RlIDToOhrSKyujiCn9MAnYbIFkaFbanEsAlb6PPKn9SV275WfvD1FWMFkpj9BQu%2FTKzA3RkxAKTARXfi86NgAo%2BfDrX1Yikg0xfwhnUpz%2BMO%2Bf5CC9o5CGC3EDSeupJJAbQ6xFuV9JVTG7DAlc0ESMFgLrbzu3E9oiEe6Fw4wrzfevw16wA3kHd%2Bajqw3sufyEmmPctoIXCdIPpmn8wlPuC9G6d8M7%2BedCeTyItoW5XPuLrr0PRSjwloioFMAPmvj2c2GfYyA4eCUxtHUM1E2GLIQwzr2IwQY6pgFlwj4klUaPpXjen9DsbgzlZcq6mkFhrayZvRXy8oq1jECFMeemxGHuzyO%2Bq574bSxEzjG3aiGJdufTht6qmPbmiC4nRp4RblthT6FGXvA9MBt99O3zNmJcCp2H9kt3Bqo7A7MT5any9F4jO0C480RzitD5OVJ69LgmdaVUL%2FZj8Mw4wyAUXH%2BpqENoAxaJEEgWO2uHewFijjccfx9is5sGcwuE2lLn&X-Amz-Signature=810bcd0a88219a0da3450e1de1c06623a0a048af397163cf680ab5d9ccdd1842&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUX6ERW%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCICAO3%2FTKfI9Ad0YDVTTJZRK%2FPF01FUdCihbbVLmCCyfVAiBCqlWy%2FSzDok2obWUrLyWmJuv1A9KTSv3kUt1%2FTLfxXiqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrGAQoCHTdWQBOgCVKtwDkzXSrXHo7mfEwXjslpsQ1z2K1dRt1mEQKYJ1kekZZw7D%2FS6h2m9g6Pl0uXdT4JKCeIMaXp%2FhNotbMg%2B4a1O5xhk5ZhMEYZytovN1gfUvtwgkTbCUIIcZLTfCXYGWVElIjtW4XIAykFcLEgCF52NPZ%2FaouhNnsZcjfWqOhVzVez8UuoojoQ4NAfwh8vDiiCgszWeYUcd424StPHoTNcEQ1QvG6GNPuuBiAmmewnBfDnqgU1K4ZitIXRzoccDJi5jJ4kOtMdMihkp27Jvgebfu8tLO3SoDGksuKHbQ3IWxo3%2BLALFbynsB5T5Bh%2FjIE5bZp1bCLKjk7K5%2FQUZczSBqXrXZm2Z6ePckg7RlIDToOhrSKyujiCn9MAnYbIFkaFbanEsAlb6PPKn9SV275WfvD1FWMFkpj9BQu%2FTKzA3RkxAKTARXfi86NgAo%2BfDrX1Yikg0xfwhnUpz%2BMO%2Bf5CC9o5CGC3EDSeupJJAbQ6xFuV9JVTG7DAlc0ESMFgLrbzu3E9oiEe6Fw4wrzfevw16wA3kHd%2Bajqw3sufyEmmPctoIXCdIPpmn8wlPuC9G6d8M7%2BedCeTyItoW5XPuLrr0PRSjwloioFMAPmvj2c2GfYyA4eCUxtHUM1E2GLIQwzr2IwQY6pgFlwj4klUaPpXjen9DsbgzlZcq6mkFhrayZvRXy8oq1jECFMeemxGHuzyO%2Bq574bSxEzjG3aiGJdufTht6qmPbmiC4nRp4RblthT6FGXvA9MBt99O3zNmJcCp2H9kt3Bqo7A7MT5any9F4jO0C480RzitD5OVJ69LgmdaVUL%2FZj8Mw4wyAUXH%2BpqENoAxaJEEgWO2uHewFijjccfx9is5sGcwuE2lLn&X-Amz-Signature=a631572b907faf0c0b833326066a0155ba313cd618b396bf86308e9b080c3e19&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUX6ERW%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCICAO3%2FTKfI9Ad0YDVTTJZRK%2FPF01FUdCihbbVLmCCyfVAiBCqlWy%2FSzDok2obWUrLyWmJuv1A9KTSv3kUt1%2FTLfxXiqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrGAQoCHTdWQBOgCVKtwDkzXSrXHo7mfEwXjslpsQ1z2K1dRt1mEQKYJ1kekZZw7D%2FS6h2m9g6Pl0uXdT4JKCeIMaXp%2FhNotbMg%2B4a1O5xhk5ZhMEYZytovN1gfUvtwgkTbCUIIcZLTfCXYGWVElIjtW4XIAykFcLEgCF52NPZ%2FaouhNnsZcjfWqOhVzVez8UuoojoQ4NAfwh8vDiiCgszWeYUcd424StPHoTNcEQ1QvG6GNPuuBiAmmewnBfDnqgU1K4ZitIXRzoccDJi5jJ4kOtMdMihkp27Jvgebfu8tLO3SoDGksuKHbQ3IWxo3%2BLALFbynsB5T5Bh%2FjIE5bZp1bCLKjk7K5%2FQUZczSBqXrXZm2Z6ePckg7RlIDToOhrSKyujiCn9MAnYbIFkaFbanEsAlb6PPKn9SV275WfvD1FWMFkpj9BQu%2FTKzA3RkxAKTARXfi86NgAo%2BfDrX1Yikg0xfwhnUpz%2BMO%2Bf5CC9o5CGC3EDSeupJJAbQ6xFuV9JVTG7DAlc0ESMFgLrbzu3E9oiEe6Fw4wrzfevw16wA3kHd%2Bajqw3sufyEmmPctoIXCdIPpmn8wlPuC9G6d8M7%2BedCeTyItoW5XPuLrr0PRSjwloioFMAPmvj2c2GfYyA4eCUxtHUM1E2GLIQwzr2IwQY6pgFlwj4klUaPpXjen9DsbgzlZcq6mkFhrayZvRXy8oq1jECFMeemxGHuzyO%2Bq574bSxEzjG3aiGJdufTht6qmPbmiC4nRp4RblthT6FGXvA9MBt99O3zNmJcCp2H9kt3Bqo7A7MT5any9F4jO0C480RzitD5OVJ69LgmdaVUL%2FZj8Mw4wyAUXH%2BpqENoAxaJEEgWO2uHewFijjccfx9is5sGcwuE2lLn&X-Amz-Signature=e9c12e47047a40aa9f817eb1cde7678d3d71811d05794495d12ddebaa486c969&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUX6ERW%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCICAO3%2FTKfI9Ad0YDVTTJZRK%2FPF01FUdCihbbVLmCCyfVAiBCqlWy%2FSzDok2obWUrLyWmJuv1A9KTSv3kUt1%2FTLfxXiqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrGAQoCHTdWQBOgCVKtwDkzXSrXHo7mfEwXjslpsQ1z2K1dRt1mEQKYJ1kekZZw7D%2FS6h2m9g6Pl0uXdT4JKCeIMaXp%2FhNotbMg%2B4a1O5xhk5ZhMEYZytovN1gfUvtwgkTbCUIIcZLTfCXYGWVElIjtW4XIAykFcLEgCF52NPZ%2FaouhNnsZcjfWqOhVzVez8UuoojoQ4NAfwh8vDiiCgszWeYUcd424StPHoTNcEQ1QvG6GNPuuBiAmmewnBfDnqgU1K4ZitIXRzoccDJi5jJ4kOtMdMihkp27Jvgebfu8tLO3SoDGksuKHbQ3IWxo3%2BLALFbynsB5T5Bh%2FjIE5bZp1bCLKjk7K5%2FQUZczSBqXrXZm2Z6ePckg7RlIDToOhrSKyujiCn9MAnYbIFkaFbanEsAlb6PPKn9SV275WfvD1FWMFkpj9BQu%2FTKzA3RkxAKTARXfi86NgAo%2BfDrX1Yikg0xfwhnUpz%2BMO%2Bf5CC9o5CGC3EDSeupJJAbQ6xFuV9JVTG7DAlc0ESMFgLrbzu3E9oiEe6Fw4wrzfevw16wA3kHd%2Bajqw3sufyEmmPctoIXCdIPpmn8wlPuC9G6d8M7%2BedCeTyItoW5XPuLrr0PRSjwloioFMAPmvj2c2GfYyA4eCUxtHUM1E2GLIQwzr2IwQY6pgFlwj4klUaPpXjen9DsbgzlZcq6mkFhrayZvRXy8oq1jECFMeemxGHuzyO%2Bq574bSxEzjG3aiGJdufTht6qmPbmiC4nRp4RblthT6FGXvA9MBt99O3zNmJcCp2H9kt3Bqo7A7MT5any9F4jO0C480RzitD5OVJ69LgmdaVUL%2FZj8Mw4wyAUXH%2BpqENoAxaJEEgWO2uHewFijjccfx9is5sGcwuE2lLn&X-Amz-Signature=92d284c6fd7c2c1f516f801f85f0475b508f4797480aa823037c6008ae3df247&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUX6ERW%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCICAO3%2FTKfI9Ad0YDVTTJZRK%2FPF01FUdCihbbVLmCCyfVAiBCqlWy%2FSzDok2obWUrLyWmJuv1A9KTSv3kUt1%2FTLfxXiqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrGAQoCHTdWQBOgCVKtwDkzXSrXHo7mfEwXjslpsQ1z2K1dRt1mEQKYJ1kekZZw7D%2FS6h2m9g6Pl0uXdT4JKCeIMaXp%2FhNotbMg%2B4a1O5xhk5ZhMEYZytovN1gfUvtwgkTbCUIIcZLTfCXYGWVElIjtW4XIAykFcLEgCF52NPZ%2FaouhNnsZcjfWqOhVzVez8UuoojoQ4NAfwh8vDiiCgszWeYUcd424StPHoTNcEQ1QvG6GNPuuBiAmmewnBfDnqgU1K4ZitIXRzoccDJi5jJ4kOtMdMihkp27Jvgebfu8tLO3SoDGksuKHbQ3IWxo3%2BLALFbynsB5T5Bh%2FjIE5bZp1bCLKjk7K5%2FQUZczSBqXrXZm2Z6ePckg7RlIDToOhrSKyujiCn9MAnYbIFkaFbanEsAlb6PPKn9SV275WfvD1FWMFkpj9BQu%2FTKzA3RkxAKTARXfi86NgAo%2BfDrX1Yikg0xfwhnUpz%2BMO%2Bf5CC9o5CGC3EDSeupJJAbQ6xFuV9JVTG7DAlc0ESMFgLrbzu3E9oiEe6Fw4wrzfevw16wA3kHd%2Bajqw3sufyEmmPctoIXCdIPpmn8wlPuC9G6d8M7%2BedCeTyItoW5XPuLrr0PRSjwloioFMAPmvj2c2GfYyA4eCUxtHUM1E2GLIQwzr2IwQY6pgFlwj4klUaPpXjen9DsbgzlZcq6mkFhrayZvRXy8oq1jECFMeemxGHuzyO%2Bq574bSxEzjG3aiGJdufTht6qmPbmiC4nRp4RblthT6FGXvA9MBt99O3zNmJcCp2H9kt3Bqo7A7MT5any9F4jO0C480RzitD5OVJ69LgmdaVUL%2FZj8Mw4wyAUXH%2BpqENoAxaJEEgWO2uHewFijjccfx9is5sGcwuE2lLn&X-Amz-Signature=8bf90004a781b3da1e17735cdd1ff88f52c681027b93acd2dc9afdf1b425c63d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUX6ERW%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCICAO3%2FTKfI9Ad0YDVTTJZRK%2FPF01FUdCihbbVLmCCyfVAiBCqlWy%2FSzDok2obWUrLyWmJuv1A9KTSv3kUt1%2FTLfxXiqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrGAQoCHTdWQBOgCVKtwDkzXSrXHo7mfEwXjslpsQ1z2K1dRt1mEQKYJ1kekZZw7D%2FS6h2m9g6Pl0uXdT4JKCeIMaXp%2FhNotbMg%2B4a1O5xhk5ZhMEYZytovN1gfUvtwgkTbCUIIcZLTfCXYGWVElIjtW4XIAykFcLEgCF52NPZ%2FaouhNnsZcjfWqOhVzVez8UuoojoQ4NAfwh8vDiiCgszWeYUcd424StPHoTNcEQ1QvG6GNPuuBiAmmewnBfDnqgU1K4ZitIXRzoccDJi5jJ4kOtMdMihkp27Jvgebfu8tLO3SoDGksuKHbQ3IWxo3%2BLALFbynsB5T5Bh%2FjIE5bZp1bCLKjk7K5%2FQUZczSBqXrXZm2Z6ePckg7RlIDToOhrSKyujiCn9MAnYbIFkaFbanEsAlb6PPKn9SV275WfvD1FWMFkpj9BQu%2FTKzA3RkxAKTARXfi86NgAo%2BfDrX1Yikg0xfwhnUpz%2BMO%2Bf5CC9o5CGC3EDSeupJJAbQ6xFuV9JVTG7DAlc0ESMFgLrbzu3E9oiEe6Fw4wrzfevw16wA3kHd%2Bajqw3sufyEmmPctoIXCdIPpmn8wlPuC9G6d8M7%2BedCeTyItoW5XPuLrr0PRSjwloioFMAPmvj2c2GfYyA4eCUxtHUM1E2GLIQwzr2IwQY6pgFlwj4klUaPpXjen9DsbgzlZcq6mkFhrayZvRXy8oq1jECFMeemxGHuzyO%2Bq574bSxEzjG3aiGJdufTht6qmPbmiC4nRp4RblthT6FGXvA9MBt99O3zNmJcCp2H9kt3Bqo7A7MT5any9F4jO0C480RzitD5OVJ69LgmdaVUL%2FZj8Mw4wyAUXH%2BpqENoAxaJEEgWO2uHewFijjccfx9is5sGcwuE2lLn&X-Amz-Signature=31368a89cfdf56ad18aa525a22a08c942f7d519c9c389601673757dd703f80a2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
