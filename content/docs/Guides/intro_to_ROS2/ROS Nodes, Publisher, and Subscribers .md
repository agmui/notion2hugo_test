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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6NFAF7M%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBUWn49UNaEQl7Z1moevoRuObBT4H3ReevVRsnsWw8mdAiBLOyAviktndOXYDt77TG%2ByhfJmvi4xYY4KGaCJpKJkeSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9vJ5gE1Z1kLw1QnKKtwDrTnTLkOwWtzCIfg2FlML3aVV5uDrLnOrXAz%2BLyiDnxPBZ8hRDdz58iWp8q2crAusw8mb2ze9%2BrhyvJPLCIDrUZZLlQbt1xVE1Xb8Iaz9l%2FVwMEr3%2BjleUgAd2LKjJ4lk%2FfStE7tpY6tJPuft7wW0WhhHTVsLKcQfBSBJY7o%2B%2FwR%2BSBo2T7vcyFAkFrHZ0B5v6VZugpU3PQLvI16Tjyva0ylh2Kx2ErM8OaDypOc93HcFza%2BMZ%2FhCX%2BI8%2B0Pcp71rYM1FgjSZdspRdcbdvUjpptyPiApSWIe7JhhLcuonjnQxnstfophRx4AQTyQVpbKNcghtSu1PoJmiR4uoxugizsivL9WDIJCu1Czq%2FHPrNRYCqJys1BlAvu9qF3y0ghsMRzqsKUvykg%2FU%2BH1EKqPvW3G64qBbAJvNLjWrOO%2F%2B8QOQOzSGpVnxvwyuxL7szqC3XLCU7F7kYmFn%2FLZoPoe1soP8YP2T%2BXTslX3wXGphuadyxwiiNVJsKSeXlNrRcwACDHuaEzsDl4Ld7najpEH1%2FQnNL7fCiUnoO1CCDmSWl6G916zu3%2FuKXaKpsPniuPjhqi8OQOCdd%2FFO%2B0wMzD0LOeZxlOnvutFb6W%2ByuMZ3wHeT3jSNm%2BnKnijazNcwrrmBwQY6pgHXxlrbsDhgoiAY2%2Fl2y3rh12%2FU6EObbpsJIrcP4C0OpNFLMAkAcMc8Bt082lFNFZ4BL7LXYtnQfZ%2BkSbvQ9dEO5i4eBgD7Jhpz%2BdWjCsK%2FRKeztjKT7ecMBXVSvyKfIQfZbRSRgK4LvtP7GP3IfZ78%2FYeIAndonLibAAbAx5V2bwH70HAIJG1ue4%2FeT8DNYutnGoYsEOKpGo8SaMZzC27PMbEcJUPM&X-Amz-Signature=77bedd398de6c1fb0c73af7703886db09caaa619ac0271584196d4b9746455cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6NFAF7M%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBUWn49UNaEQl7Z1moevoRuObBT4H3ReevVRsnsWw8mdAiBLOyAviktndOXYDt77TG%2ByhfJmvi4xYY4KGaCJpKJkeSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9vJ5gE1Z1kLw1QnKKtwDrTnTLkOwWtzCIfg2FlML3aVV5uDrLnOrXAz%2BLyiDnxPBZ8hRDdz58iWp8q2crAusw8mb2ze9%2BrhyvJPLCIDrUZZLlQbt1xVE1Xb8Iaz9l%2FVwMEr3%2BjleUgAd2LKjJ4lk%2FfStE7tpY6tJPuft7wW0WhhHTVsLKcQfBSBJY7o%2B%2FwR%2BSBo2T7vcyFAkFrHZ0B5v6VZugpU3PQLvI16Tjyva0ylh2Kx2ErM8OaDypOc93HcFza%2BMZ%2FhCX%2BI8%2B0Pcp71rYM1FgjSZdspRdcbdvUjpptyPiApSWIe7JhhLcuonjnQxnstfophRx4AQTyQVpbKNcghtSu1PoJmiR4uoxugizsivL9WDIJCu1Czq%2FHPrNRYCqJys1BlAvu9qF3y0ghsMRzqsKUvykg%2FU%2BH1EKqPvW3G64qBbAJvNLjWrOO%2F%2B8QOQOzSGpVnxvwyuxL7szqC3XLCU7F7kYmFn%2FLZoPoe1soP8YP2T%2BXTslX3wXGphuadyxwiiNVJsKSeXlNrRcwACDHuaEzsDl4Ld7najpEH1%2FQnNL7fCiUnoO1CCDmSWl6G916zu3%2FuKXaKpsPniuPjhqi8OQOCdd%2FFO%2B0wMzD0LOeZxlOnvutFb6W%2ByuMZ3wHeT3jSNm%2BnKnijazNcwrrmBwQY6pgHXxlrbsDhgoiAY2%2Fl2y3rh12%2FU6EObbpsJIrcP4C0OpNFLMAkAcMc8Bt082lFNFZ4BL7LXYtnQfZ%2BkSbvQ9dEO5i4eBgD7Jhpz%2BdWjCsK%2FRKeztjKT7ecMBXVSvyKfIQfZbRSRgK4LvtP7GP3IfZ78%2FYeIAndonLibAAbAx5V2bwH70HAIJG1ue4%2FeT8DNYutnGoYsEOKpGo8SaMZzC27PMbEcJUPM&X-Amz-Signature=28a0bac241f76413adbbb97ba22f64a99c8c5a16e8cce0efc6b78ce661b6913b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6NFAF7M%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBUWn49UNaEQl7Z1moevoRuObBT4H3ReevVRsnsWw8mdAiBLOyAviktndOXYDt77TG%2ByhfJmvi4xYY4KGaCJpKJkeSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9vJ5gE1Z1kLw1QnKKtwDrTnTLkOwWtzCIfg2FlML3aVV5uDrLnOrXAz%2BLyiDnxPBZ8hRDdz58iWp8q2crAusw8mb2ze9%2BrhyvJPLCIDrUZZLlQbt1xVE1Xb8Iaz9l%2FVwMEr3%2BjleUgAd2LKjJ4lk%2FfStE7tpY6tJPuft7wW0WhhHTVsLKcQfBSBJY7o%2B%2FwR%2BSBo2T7vcyFAkFrHZ0B5v6VZugpU3PQLvI16Tjyva0ylh2Kx2ErM8OaDypOc93HcFza%2BMZ%2FhCX%2BI8%2B0Pcp71rYM1FgjSZdspRdcbdvUjpptyPiApSWIe7JhhLcuonjnQxnstfophRx4AQTyQVpbKNcghtSu1PoJmiR4uoxugizsivL9WDIJCu1Czq%2FHPrNRYCqJys1BlAvu9qF3y0ghsMRzqsKUvykg%2FU%2BH1EKqPvW3G64qBbAJvNLjWrOO%2F%2B8QOQOzSGpVnxvwyuxL7szqC3XLCU7F7kYmFn%2FLZoPoe1soP8YP2T%2BXTslX3wXGphuadyxwiiNVJsKSeXlNrRcwACDHuaEzsDl4Ld7najpEH1%2FQnNL7fCiUnoO1CCDmSWl6G916zu3%2FuKXaKpsPniuPjhqi8OQOCdd%2FFO%2B0wMzD0LOeZxlOnvutFb6W%2ByuMZ3wHeT3jSNm%2BnKnijazNcwrrmBwQY6pgHXxlrbsDhgoiAY2%2Fl2y3rh12%2FU6EObbpsJIrcP4C0OpNFLMAkAcMc8Bt082lFNFZ4BL7LXYtnQfZ%2BkSbvQ9dEO5i4eBgD7Jhpz%2BdWjCsK%2FRKeztjKT7ecMBXVSvyKfIQfZbRSRgK4LvtP7GP3IfZ78%2FYeIAndonLibAAbAx5V2bwH70HAIJG1ue4%2FeT8DNYutnGoYsEOKpGo8SaMZzC27PMbEcJUPM&X-Amz-Signature=6b0db5c0c1e8ff2bd11f49509ca19c93b1cb5e0198a682d1b6e483a8491c94b6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6NFAF7M%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBUWn49UNaEQl7Z1moevoRuObBT4H3ReevVRsnsWw8mdAiBLOyAviktndOXYDt77TG%2ByhfJmvi4xYY4KGaCJpKJkeSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9vJ5gE1Z1kLw1QnKKtwDrTnTLkOwWtzCIfg2FlML3aVV5uDrLnOrXAz%2BLyiDnxPBZ8hRDdz58iWp8q2crAusw8mb2ze9%2BrhyvJPLCIDrUZZLlQbt1xVE1Xb8Iaz9l%2FVwMEr3%2BjleUgAd2LKjJ4lk%2FfStE7tpY6tJPuft7wW0WhhHTVsLKcQfBSBJY7o%2B%2FwR%2BSBo2T7vcyFAkFrHZ0B5v6VZugpU3PQLvI16Tjyva0ylh2Kx2ErM8OaDypOc93HcFza%2BMZ%2FhCX%2BI8%2B0Pcp71rYM1FgjSZdspRdcbdvUjpptyPiApSWIe7JhhLcuonjnQxnstfophRx4AQTyQVpbKNcghtSu1PoJmiR4uoxugizsivL9WDIJCu1Czq%2FHPrNRYCqJys1BlAvu9qF3y0ghsMRzqsKUvykg%2FU%2BH1EKqPvW3G64qBbAJvNLjWrOO%2F%2B8QOQOzSGpVnxvwyuxL7szqC3XLCU7F7kYmFn%2FLZoPoe1soP8YP2T%2BXTslX3wXGphuadyxwiiNVJsKSeXlNrRcwACDHuaEzsDl4Ld7najpEH1%2FQnNL7fCiUnoO1CCDmSWl6G916zu3%2FuKXaKpsPniuPjhqi8OQOCdd%2FFO%2B0wMzD0LOeZxlOnvutFb6W%2ByuMZ3wHeT3jSNm%2BnKnijazNcwrrmBwQY6pgHXxlrbsDhgoiAY2%2Fl2y3rh12%2FU6EObbpsJIrcP4C0OpNFLMAkAcMc8Bt082lFNFZ4BL7LXYtnQfZ%2BkSbvQ9dEO5i4eBgD7Jhpz%2BdWjCsK%2FRKeztjKT7ecMBXVSvyKfIQfZbRSRgK4LvtP7GP3IfZ78%2FYeIAndonLibAAbAx5V2bwH70HAIJG1ue4%2FeT8DNYutnGoYsEOKpGo8SaMZzC27PMbEcJUPM&X-Amz-Signature=7f6b0a9c2b895f4e43d15ca32bff5e2d7e40687f9954ea8dacc275c65cf9a8df&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6NFAF7M%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBUWn49UNaEQl7Z1moevoRuObBT4H3ReevVRsnsWw8mdAiBLOyAviktndOXYDt77TG%2ByhfJmvi4xYY4KGaCJpKJkeSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9vJ5gE1Z1kLw1QnKKtwDrTnTLkOwWtzCIfg2FlML3aVV5uDrLnOrXAz%2BLyiDnxPBZ8hRDdz58iWp8q2crAusw8mb2ze9%2BrhyvJPLCIDrUZZLlQbt1xVE1Xb8Iaz9l%2FVwMEr3%2BjleUgAd2LKjJ4lk%2FfStE7tpY6tJPuft7wW0WhhHTVsLKcQfBSBJY7o%2B%2FwR%2BSBo2T7vcyFAkFrHZ0B5v6VZugpU3PQLvI16Tjyva0ylh2Kx2ErM8OaDypOc93HcFza%2BMZ%2FhCX%2BI8%2B0Pcp71rYM1FgjSZdspRdcbdvUjpptyPiApSWIe7JhhLcuonjnQxnstfophRx4AQTyQVpbKNcghtSu1PoJmiR4uoxugizsivL9WDIJCu1Czq%2FHPrNRYCqJys1BlAvu9qF3y0ghsMRzqsKUvykg%2FU%2BH1EKqPvW3G64qBbAJvNLjWrOO%2F%2B8QOQOzSGpVnxvwyuxL7szqC3XLCU7F7kYmFn%2FLZoPoe1soP8YP2T%2BXTslX3wXGphuadyxwiiNVJsKSeXlNrRcwACDHuaEzsDl4Ld7najpEH1%2FQnNL7fCiUnoO1CCDmSWl6G916zu3%2FuKXaKpsPniuPjhqi8OQOCdd%2FFO%2B0wMzD0LOeZxlOnvutFb6W%2ByuMZ3wHeT3jSNm%2BnKnijazNcwrrmBwQY6pgHXxlrbsDhgoiAY2%2Fl2y3rh12%2FU6EObbpsJIrcP4C0OpNFLMAkAcMc8Bt082lFNFZ4BL7LXYtnQfZ%2BkSbvQ9dEO5i4eBgD7Jhpz%2BdWjCsK%2FRKeztjKT7ecMBXVSvyKfIQfZbRSRgK4LvtP7GP3IfZ78%2FYeIAndonLibAAbAx5V2bwH70HAIJG1ue4%2FeT8DNYutnGoYsEOKpGo8SaMZzC27PMbEcJUPM&X-Amz-Signature=0cad950c5cc18a80b6c506170c54694fa8f62a4fb5672192bfd52c6b69407f52&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6NFAF7M%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBUWn49UNaEQl7Z1moevoRuObBT4H3ReevVRsnsWw8mdAiBLOyAviktndOXYDt77TG%2ByhfJmvi4xYY4KGaCJpKJkeSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9vJ5gE1Z1kLw1QnKKtwDrTnTLkOwWtzCIfg2FlML3aVV5uDrLnOrXAz%2BLyiDnxPBZ8hRDdz58iWp8q2crAusw8mb2ze9%2BrhyvJPLCIDrUZZLlQbt1xVE1Xb8Iaz9l%2FVwMEr3%2BjleUgAd2LKjJ4lk%2FfStE7tpY6tJPuft7wW0WhhHTVsLKcQfBSBJY7o%2B%2FwR%2BSBo2T7vcyFAkFrHZ0B5v6VZugpU3PQLvI16Tjyva0ylh2Kx2ErM8OaDypOc93HcFza%2BMZ%2FhCX%2BI8%2B0Pcp71rYM1FgjSZdspRdcbdvUjpptyPiApSWIe7JhhLcuonjnQxnstfophRx4AQTyQVpbKNcghtSu1PoJmiR4uoxugizsivL9WDIJCu1Czq%2FHPrNRYCqJys1BlAvu9qF3y0ghsMRzqsKUvykg%2FU%2BH1EKqPvW3G64qBbAJvNLjWrOO%2F%2B8QOQOzSGpVnxvwyuxL7szqC3XLCU7F7kYmFn%2FLZoPoe1soP8YP2T%2BXTslX3wXGphuadyxwiiNVJsKSeXlNrRcwACDHuaEzsDl4Ld7najpEH1%2FQnNL7fCiUnoO1CCDmSWl6G916zu3%2FuKXaKpsPniuPjhqi8OQOCdd%2FFO%2B0wMzD0LOeZxlOnvutFb6W%2ByuMZ3wHeT3jSNm%2BnKnijazNcwrrmBwQY6pgHXxlrbsDhgoiAY2%2Fl2y3rh12%2FU6EObbpsJIrcP4C0OpNFLMAkAcMc8Bt082lFNFZ4BL7LXYtnQfZ%2BkSbvQ9dEO5i4eBgD7Jhpz%2BdWjCsK%2FRKeztjKT7ecMBXVSvyKfIQfZbRSRgK4LvtP7GP3IfZ78%2FYeIAndonLibAAbAx5V2bwH70HAIJG1ue4%2FeT8DNYutnGoYsEOKpGo8SaMZzC27PMbEcJUPM&X-Amz-Signature=0dc962a9c4e665ca8f0717b08fe1325083411c4b2a44a9478c2750d62ee803d7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6NFAF7M%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBUWn49UNaEQl7Z1moevoRuObBT4H3ReevVRsnsWw8mdAiBLOyAviktndOXYDt77TG%2ByhfJmvi4xYY4KGaCJpKJkeSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9vJ5gE1Z1kLw1QnKKtwDrTnTLkOwWtzCIfg2FlML3aVV5uDrLnOrXAz%2BLyiDnxPBZ8hRDdz58iWp8q2crAusw8mb2ze9%2BrhyvJPLCIDrUZZLlQbt1xVE1Xb8Iaz9l%2FVwMEr3%2BjleUgAd2LKjJ4lk%2FfStE7tpY6tJPuft7wW0WhhHTVsLKcQfBSBJY7o%2B%2FwR%2BSBo2T7vcyFAkFrHZ0B5v6VZugpU3PQLvI16Tjyva0ylh2Kx2ErM8OaDypOc93HcFza%2BMZ%2FhCX%2BI8%2B0Pcp71rYM1FgjSZdspRdcbdvUjpptyPiApSWIe7JhhLcuonjnQxnstfophRx4AQTyQVpbKNcghtSu1PoJmiR4uoxugizsivL9WDIJCu1Czq%2FHPrNRYCqJys1BlAvu9qF3y0ghsMRzqsKUvykg%2FU%2BH1EKqPvW3G64qBbAJvNLjWrOO%2F%2B8QOQOzSGpVnxvwyuxL7szqC3XLCU7F7kYmFn%2FLZoPoe1soP8YP2T%2BXTslX3wXGphuadyxwiiNVJsKSeXlNrRcwACDHuaEzsDl4Ld7najpEH1%2FQnNL7fCiUnoO1CCDmSWl6G916zu3%2FuKXaKpsPniuPjhqi8OQOCdd%2FFO%2B0wMzD0LOeZxlOnvutFb6W%2ByuMZ3wHeT3jSNm%2BnKnijazNcwrrmBwQY6pgHXxlrbsDhgoiAY2%2Fl2y3rh12%2FU6EObbpsJIrcP4C0OpNFLMAkAcMc8Bt082lFNFZ4BL7LXYtnQfZ%2BkSbvQ9dEO5i4eBgD7Jhpz%2BdWjCsK%2FRKeztjKT7ecMBXVSvyKfIQfZbRSRgK4LvtP7GP3IfZ78%2FYeIAndonLibAAbAx5V2bwH70HAIJG1ue4%2FeT8DNYutnGoYsEOKpGo8SaMZzC27PMbEcJUPM&X-Amz-Signature=e27b522e46bc703a3b03a11caff01effd3b01015fc48cf6d65611b97b8081dd8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6NFAF7M%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBUWn49UNaEQl7Z1moevoRuObBT4H3ReevVRsnsWw8mdAiBLOyAviktndOXYDt77TG%2ByhfJmvi4xYY4KGaCJpKJkeSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9vJ5gE1Z1kLw1QnKKtwDrTnTLkOwWtzCIfg2FlML3aVV5uDrLnOrXAz%2BLyiDnxPBZ8hRDdz58iWp8q2crAusw8mb2ze9%2BrhyvJPLCIDrUZZLlQbt1xVE1Xb8Iaz9l%2FVwMEr3%2BjleUgAd2LKjJ4lk%2FfStE7tpY6tJPuft7wW0WhhHTVsLKcQfBSBJY7o%2B%2FwR%2BSBo2T7vcyFAkFrHZ0B5v6VZugpU3PQLvI16Tjyva0ylh2Kx2ErM8OaDypOc93HcFza%2BMZ%2FhCX%2BI8%2B0Pcp71rYM1FgjSZdspRdcbdvUjpptyPiApSWIe7JhhLcuonjnQxnstfophRx4AQTyQVpbKNcghtSu1PoJmiR4uoxugizsivL9WDIJCu1Czq%2FHPrNRYCqJys1BlAvu9qF3y0ghsMRzqsKUvykg%2FU%2BH1EKqPvW3G64qBbAJvNLjWrOO%2F%2B8QOQOzSGpVnxvwyuxL7szqC3XLCU7F7kYmFn%2FLZoPoe1soP8YP2T%2BXTslX3wXGphuadyxwiiNVJsKSeXlNrRcwACDHuaEzsDl4Ld7najpEH1%2FQnNL7fCiUnoO1CCDmSWl6G916zu3%2FuKXaKpsPniuPjhqi8OQOCdd%2FFO%2B0wMzD0LOeZxlOnvutFb6W%2ByuMZ3wHeT3jSNm%2BnKnijazNcwrrmBwQY6pgHXxlrbsDhgoiAY2%2Fl2y3rh12%2FU6EObbpsJIrcP4C0OpNFLMAkAcMc8Bt082lFNFZ4BL7LXYtnQfZ%2BkSbvQ9dEO5i4eBgD7Jhpz%2BdWjCsK%2FRKeztjKT7ecMBXVSvyKfIQfZbRSRgK4LvtP7GP3IfZ78%2FYeIAndonLibAAbAx5V2bwH70HAIJG1ue4%2FeT8DNYutnGoYsEOKpGo8SaMZzC27PMbEcJUPM&X-Amz-Signature=d93f7f7f66b97ab36639f3fa59446672e1fbfb9b52135c8b272b3e4eafdf8b54&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
