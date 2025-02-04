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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIVBC3KT%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIDBEdb2mq%2Fj01RIQ7b78RpFuPVxhoQJA8eyLtos6OVZqAiAoerQdssMMZ16zvt75hhH9tpdleMF%2Fv8FdbofIDTXbYCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMYMdqwnynVWvpTKYaKtwDVXNQTrcXOSPKTvxGc5QQd1%2FWE3Eqb3afEkUSXq%2FT%2BSprITRkYMGt%2Fq7azHXwbEIL5S5B6tEAEgGxqeUn1lR78rDTgKonX%2FLKENSaKG8QAL6r29tWrU%2F4x3ROBtrfApQy7V%2FZCbzibbLSTxWJyPVDVwCPXJuI8FDvggOBi1kWgcVTqo68Cs14fhYsPf47nq3jQ9LmQ8%2Be9ScAuusHudK2artsU39wXMVgyMzUQ1IElLPhsSHJh9C47Axe03HvEick9A%2FTXNIYKfzyPqscFkuA9H3or8bgOixv26UaskYvdDRvvK6vsWmnUMXTDVYZ3a0D8%2BTj8rY6J%2FnrKYq30kUM2szhoJXvYo94SNP5kaD706yrqGnRTFFn6i7uIDnwmdky9eGtyIr5SIEpG9%2FP%2Fg%2FUJhOCOc4phwZd2o9cgDsWD4qZGhFCK0OZmnz6qzqHWuhGdr6Fnl9mASyLRKWgfxPS2UMW0ZYLqoGrzHPHKLnQs0ZO8SByGpLcW4WFBdrWb3yuQMnkjCJvgNtup1dzHiUaKOs4eQdgaSD9eLIZaWjHgJ7i47znb8jK5HDh1NV01UhjDOROpatoN2lysgnB8r%2FkFwHsQMEQs%2F2xq2yT9FCBu713YQ8JjH%2FR0Nq0sJ8wwMuHvQY6pgF6LZhVCo5BdeUa%2BDgvyfobqxWhQBKwGG%2B8tdayGB%2F0JF%2FMF23wIdCq6p1kOC23DOzDUdvpKC43XYuEcD2jZc4IkADuq5ZC7Z2RUYUmdXPrUhYe9Duj3ENGEyDPskrNFyaE87BmLqO4ihUVDjjsEOFDHoOdB%2Fqa%2FiHqRK8XdbInUnoPMEP96xk84AZDmE%2FxDJMZtANKGGaU4695M2cUGoeJXEoJ8mXO&X-Amz-Signature=3c3831466f9aa95aacda4aba03904c7069701125596eadd2885d20480db988ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIVBC3KT%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIDBEdb2mq%2Fj01RIQ7b78RpFuPVxhoQJA8eyLtos6OVZqAiAoerQdssMMZ16zvt75hhH9tpdleMF%2Fv8FdbofIDTXbYCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMYMdqwnynVWvpTKYaKtwDVXNQTrcXOSPKTvxGc5QQd1%2FWE3Eqb3afEkUSXq%2FT%2BSprITRkYMGt%2Fq7azHXwbEIL5S5B6tEAEgGxqeUn1lR78rDTgKonX%2FLKENSaKG8QAL6r29tWrU%2F4x3ROBtrfApQy7V%2FZCbzibbLSTxWJyPVDVwCPXJuI8FDvggOBi1kWgcVTqo68Cs14fhYsPf47nq3jQ9LmQ8%2Be9ScAuusHudK2artsU39wXMVgyMzUQ1IElLPhsSHJh9C47Axe03HvEick9A%2FTXNIYKfzyPqscFkuA9H3or8bgOixv26UaskYvdDRvvK6vsWmnUMXTDVYZ3a0D8%2BTj8rY6J%2FnrKYq30kUM2szhoJXvYo94SNP5kaD706yrqGnRTFFn6i7uIDnwmdky9eGtyIr5SIEpG9%2FP%2Fg%2FUJhOCOc4phwZd2o9cgDsWD4qZGhFCK0OZmnz6qzqHWuhGdr6Fnl9mASyLRKWgfxPS2UMW0ZYLqoGrzHPHKLnQs0ZO8SByGpLcW4WFBdrWb3yuQMnkjCJvgNtup1dzHiUaKOs4eQdgaSD9eLIZaWjHgJ7i47znb8jK5HDh1NV01UhjDOROpatoN2lysgnB8r%2FkFwHsQMEQs%2F2xq2yT9FCBu713YQ8JjH%2FR0Nq0sJ8wwMuHvQY6pgF6LZhVCo5BdeUa%2BDgvyfobqxWhQBKwGG%2B8tdayGB%2F0JF%2FMF23wIdCq6p1kOC23DOzDUdvpKC43XYuEcD2jZc4IkADuq5ZC7Z2RUYUmdXPrUhYe9Duj3ENGEyDPskrNFyaE87BmLqO4ihUVDjjsEOFDHoOdB%2Fqa%2FiHqRK8XdbInUnoPMEP96xk84AZDmE%2FxDJMZtANKGGaU4695M2cUGoeJXEoJ8mXO&X-Amz-Signature=4c5a670c94e787de08795d5f1bc5d02d3d6f18de2d4d84a4f47c27d2a2289635&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIVBC3KT%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIDBEdb2mq%2Fj01RIQ7b78RpFuPVxhoQJA8eyLtos6OVZqAiAoerQdssMMZ16zvt75hhH9tpdleMF%2Fv8FdbofIDTXbYCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMYMdqwnynVWvpTKYaKtwDVXNQTrcXOSPKTvxGc5QQd1%2FWE3Eqb3afEkUSXq%2FT%2BSprITRkYMGt%2Fq7azHXwbEIL5S5B6tEAEgGxqeUn1lR78rDTgKonX%2FLKENSaKG8QAL6r29tWrU%2F4x3ROBtrfApQy7V%2FZCbzibbLSTxWJyPVDVwCPXJuI8FDvggOBi1kWgcVTqo68Cs14fhYsPf47nq3jQ9LmQ8%2Be9ScAuusHudK2artsU39wXMVgyMzUQ1IElLPhsSHJh9C47Axe03HvEick9A%2FTXNIYKfzyPqscFkuA9H3or8bgOixv26UaskYvdDRvvK6vsWmnUMXTDVYZ3a0D8%2BTj8rY6J%2FnrKYq30kUM2szhoJXvYo94SNP5kaD706yrqGnRTFFn6i7uIDnwmdky9eGtyIr5SIEpG9%2FP%2Fg%2FUJhOCOc4phwZd2o9cgDsWD4qZGhFCK0OZmnz6qzqHWuhGdr6Fnl9mASyLRKWgfxPS2UMW0ZYLqoGrzHPHKLnQs0ZO8SByGpLcW4WFBdrWb3yuQMnkjCJvgNtup1dzHiUaKOs4eQdgaSD9eLIZaWjHgJ7i47znb8jK5HDh1NV01UhjDOROpatoN2lysgnB8r%2FkFwHsQMEQs%2F2xq2yT9FCBu713YQ8JjH%2FR0Nq0sJ8wwMuHvQY6pgF6LZhVCo5BdeUa%2BDgvyfobqxWhQBKwGG%2B8tdayGB%2F0JF%2FMF23wIdCq6p1kOC23DOzDUdvpKC43XYuEcD2jZc4IkADuq5ZC7Z2RUYUmdXPrUhYe9Duj3ENGEyDPskrNFyaE87BmLqO4ihUVDjjsEOFDHoOdB%2Fqa%2FiHqRK8XdbInUnoPMEP96xk84AZDmE%2FxDJMZtANKGGaU4695M2cUGoeJXEoJ8mXO&X-Amz-Signature=86581d83978fe1f36f7fcf1c6d8bfe1fd0d56720385ca3b31863568e2a227ca2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIVBC3KT%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIDBEdb2mq%2Fj01RIQ7b78RpFuPVxhoQJA8eyLtos6OVZqAiAoerQdssMMZ16zvt75hhH9tpdleMF%2Fv8FdbofIDTXbYCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMYMdqwnynVWvpTKYaKtwDVXNQTrcXOSPKTvxGc5QQd1%2FWE3Eqb3afEkUSXq%2FT%2BSprITRkYMGt%2Fq7azHXwbEIL5S5B6tEAEgGxqeUn1lR78rDTgKonX%2FLKENSaKG8QAL6r29tWrU%2F4x3ROBtrfApQy7V%2FZCbzibbLSTxWJyPVDVwCPXJuI8FDvggOBi1kWgcVTqo68Cs14fhYsPf47nq3jQ9LmQ8%2Be9ScAuusHudK2artsU39wXMVgyMzUQ1IElLPhsSHJh9C47Axe03HvEick9A%2FTXNIYKfzyPqscFkuA9H3or8bgOixv26UaskYvdDRvvK6vsWmnUMXTDVYZ3a0D8%2BTj8rY6J%2FnrKYq30kUM2szhoJXvYo94SNP5kaD706yrqGnRTFFn6i7uIDnwmdky9eGtyIr5SIEpG9%2FP%2Fg%2FUJhOCOc4phwZd2o9cgDsWD4qZGhFCK0OZmnz6qzqHWuhGdr6Fnl9mASyLRKWgfxPS2UMW0ZYLqoGrzHPHKLnQs0ZO8SByGpLcW4WFBdrWb3yuQMnkjCJvgNtup1dzHiUaKOs4eQdgaSD9eLIZaWjHgJ7i47znb8jK5HDh1NV01UhjDOROpatoN2lysgnB8r%2FkFwHsQMEQs%2F2xq2yT9FCBu713YQ8JjH%2FR0Nq0sJ8wwMuHvQY6pgF6LZhVCo5BdeUa%2BDgvyfobqxWhQBKwGG%2B8tdayGB%2F0JF%2FMF23wIdCq6p1kOC23DOzDUdvpKC43XYuEcD2jZc4IkADuq5ZC7Z2RUYUmdXPrUhYe9Duj3ENGEyDPskrNFyaE87BmLqO4ihUVDjjsEOFDHoOdB%2Fqa%2FiHqRK8XdbInUnoPMEP96xk84AZDmE%2FxDJMZtANKGGaU4695M2cUGoeJXEoJ8mXO&X-Amz-Signature=2b577d305eff9b6764f829803d323ff1682bfbb0feb9abbb81654e1cdaf8c1ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIVBC3KT%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIDBEdb2mq%2Fj01RIQ7b78RpFuPVxhoQJA8eyLtos6OVZqAiAoerQdssMMZ16zvt75hhH9tpdleMF%2Fv8FdbofIDTXbYCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMYMdqwnynVWvpTKYaKtwDVXNQTrcXOSPKTvxGc5QQd1%2FWE3Eqb3afEkUSXq%2FT%2BSprITRkYMGt%2Fq7azHXwbEIL5S5B6tEAEgGxqeUn1lR78rDTgKonX%2FLKENSaKG8QAL6r29tWrU%2F4x3ROBtrfApQy7V%2FZCbzibbLSTxWJyPVDVwCPXJuI8FDvggOBi1kWgcVTqo68Cs14fhYsPf47nq3jQ9LmQ8%2Be9ScAuusHudK2artsU39wXMVgyMzUQ1IElLPhsSHJh9C47Axe03HvEick9A%2FTXNIYKfzyPqscFkuA9H3or8bgOixv26UaskYvdDRvvK6vsWmnUMXTDVYZ3a0D8%2BTj8rY6J%2FnrKYq30kUM2szhoJXvYo94SNP5kaD706yrqGnRTFFn6i7uIDnwmdky9eGtyIr5SIEpG9%2FP%2Fg%2FUJhOCOc4phwZd2o9cgDsWD4qZGhFCK0OZmnz6qzqHWuhGdr6Fnl9mASyLRKWgfxPS2UMW0ZYLqoGrzHPHKLnQs0ZO8SByGpLcW4WFBdrWb3yuQMnkjCJvgNtup1dzHiUaKOs4eQdgaSD9eLIZaWjHgJ7i47znb8jK5HDh1NV01UhjDOROpatoN2lysgnB8r%2FkFwHsQMEQs%2F2xq2yT9FCBu713YQ8JjH%2FR0Nq0sJ8wwMuHvQY6pgF6LZhVCo5BdeUa%2BDgvyfobqxWhQBKwGG%2B8tdayGB%2F0JF%2FMF23wIdCq6p1kOC23DOzDUdvpKC43XYuEcD2jZc4IkADuq5ZC7Z2RUYUmdXPrUhYe9Duj3ENGEyDPskrNFyaE87BmLqO4ihUVDjjsEOFDHoOdB%2Fqa%2FiHqRK8XdbInUnoPMEP96xk84AZDmE%2FxDJMZtANKGGaU4695M2cUGoeJXEoJ8mXO&X-Amz-Signature=e0c1add7bd483b7e21905747e50def455c83656c13986d37e04ebd285fad7f55&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIVBC3KT%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIDBEdb2mq%2Fj01RIQ7b78RpFuPVxhoQJA8eyLtos6OVZqAiAoerQdssMMZ16zvt75hhH9tpdleMF%2Fv8FdbofIDTXbYCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMYMdqwnynVWvpTKYaKtwDVXNQTrcXOSPKTvxGc5QQd1%2FWE3Eqb3afEkUSXq%2FT%2BSprITRkYMGt%2Fq7azHXwbEIL5S5B6tEAEgGxqeUn1lR78rDTgKonX%2FLKENSaKG8QAL6r29tWrU%2F4x3ROBtrfApQy7V%2FZCbzibbLSTxWJyPVDVwCPXJuI8FDvggOBi1kWgcVTqo68Cs14fhYsPf47nq3jQ9LmQ8%2Be9ScAuusHudK2artsU39wXMVgyMzUQ1IElLPhsSHJh9C47Axe03HvEick9A%2FTXNIYKfzyPqscFkuA9H3or8bgOixv26UaskYvdDRvvK6vsWmnUMXTDVYZ3a0D8%2BTj8rY6J%2FnrKYq30kUM2szhoJXvYo94SNP5kaD706yrqGnRTFFn6i7uIDnwmdky9eGtyIr5SIEpG9%2FP%2Fg%2FUJhOCOc4phwZd2o9cgDsWD4qZGhFCK0OZmnz6qzqHWuhGdr6Fnl9mASyLRKWgfxPS2UMW0ZYLqoGrzHPHKLnQs0ZO8SByGpLcW4WFBdrWb3yuQMnkjCJvgNtup1dzHiUaKOs4eQdgaSD9eLIZaWjHgJ7i47znb8jK5HDh1NV01UhjDOROpatoN2lysgnB8r%2FkFwHsQMEQs%2F2xq2yT9FCBu713YQ8JjH%2FR0Nq0sJ8wwMuHvQY6pgF6LZhVCo5BdeUa%2BDgvyfobqxWhQBKwGG%2B8tdayGB%2F0JF%2FMF23wIdCq6p1kOC23DOzDUdvpKC43XYuEcD2jZc4IkADuq5ZC7Z2RUYUmdXPrUhYe9Duj3ENGEyDPskrNFyaE87BmLqO4ihUVDjjsEOFDHoOdB%2Fqa%2FiHqRK8XdbInUnoPMEP96xk84AZDmE%2FxDJMZtANKGGaU4695M2cUGoeJXEoJ8mXO&X-Amz-Signature=5b500227f52c5d1f11fec6acd57548c75f26cf4787930b32a3658d1ca9effbef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIVBC3KT%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIDBEdb2mq%2Fj01RIQ7b78RpFuPVxhoQJA8eyLtos6OVZqAiAoerQdssMMZ16zvt75hhH9tpdleMF%2Fv8FdbofIDTXbYCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMYMdqwnynVWvpTKYaKtwDVXNQTrcXOSPKTvxGc5QQd1%2FWE3Eqb3afEkUSXq%2FT%2BSprITRkYMGt%2Fq7azHXwbEIL5S5B6tEAEgGxqeUn1lR78rDTgKonX%2FLKENSaKG8QAL6r29tWrU%2F4x3ROBtrfApQy7V%2FZCbzibbLSTxWJyPVDVwCPXJuI8FDvggOBi1kWgcVTqo68Cs14fhYsPf47nq3jQ9LmQ8%2Be9ScAuusHudK2artsU39wXMVgyMzUQ1IElLPhsSHJh9C47Axe03HvEick9A%2FTXNIYKfzyPqscFkuA9H3or8bgOixv26UaskYvdDRvvK6vsWmnUMXTDVYZ3a0D8%2BTj8rY6J%2FnrKYq30kUM2szhoJXvYo94SNP5kaD706yrqGnRTFFn6i7uIDnwmdky9eGtyIr5SIEpG9%2FP%2Fg%2FUJhOCOc4phwZd2o9cgDsWD4qZGhFCK0OZmnz6qzqHWuhGdr6Fnl9mASyLRKWgfxPS2UMW0ZYLqoGrzHPHKLnQs0ZO8SByGpLcW4WFBdrWb3yuQMnkjCJvgNtup1dzHiUaKOs4eQdgaSD9eLIZaWjHgJ7i47znb8jK5HDh1NV01UhjDOROpatoN2lysgnB8r%2FkFwHsQMEQs%2F2xq2yT9FCBu713YQ8JjH%2FR0Nq0sJ8wwMuHvQY6pgF6LZhVCo5BdeUa%2BDgvyfobqxWhQBKwGG%2B8tdayGB%2F0JF%2FMF23wIdCq6p1kOC23DOzDUdvpKC43XYuEcD2jZc4IkADuq5ZC7Z2RUYUmdXPrUhYe9Duj3ENGEyDPskrNFyaE87BmLqO4ihUVDjjsEOFDHoOdB%2Fqa%2FiHqRK8XdbInUnoPMEP96xk84AZDmE%2FxDJMZtANKGGaU4695M2cUGoeJXEoJ8mXO&X-Amz-Signature=3dcbda3ae8c6ead956e6957fc72d897130e8a1bae6eb32df88d45e27ef37e5c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIVBC3KT%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIDBEdb2mq%2Fj01RIQ7b78RpFuPVxhoQJA8eyLtos6OVZqAiAoerQdssMMZ16zvt75hhH9tpdleMF%2Fv8FdbofIDTXbYCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMYMdqwnynVWvpTKYaKtwDVXNQTrcXOSPKTvxGc5QQd1%2FWE3Eqb3afEkUSXq%2FT%2BSprITRkYMGt%2Fq7azHXwbEIL5S5B6tEAEgGxqeUn1lR78rDTgKonX%2FLKENSaKG8QAL6r29tWrU%2F4x3ROBtrfApQy7V%2FZCbzibbLSTxWJyPVDVwCPXJuI8FDvggOBi1kWgcVTqo68Cs14fhYsPf47nq3jQ9LmQ8%2Be9ScAuusHudK2artsU39wXMVgyMzUQ1IElLPhsSHJh9C47Axe03HvEick9A%2FTXNIYKfzyPqscFkuA9H3or8bgOixv26UaskYvdDRvvK6vsWmnUMXTDVYZ3a0D8%2BTj8rY6J%2FnrKYq30kUM2szhoJXvYo94SNP5kaD706yrqGnRTFFn6i7uIDnwmdky9eGtyIr5SIEpG9%2FP%2Fg%2FUJhOCOc4phwZd2o9cgDsWD4qZGhFCK0OZmnz6qzqHWuhGdr6Fnl9mASyLRKWgfxPS2UMW0ZYLqoGrzHPHKLnQs0ZO8SByGpLcW4WFBdrWb3yuQMnkjCJvgNtup1dzHiUaKOs4eQdgaSD9eLIZaWjHgJ7i47znb8jK5HDh1NV01UhjDOROpatoN2lysgnB8r%2FkFwHsQMEQs%2F2xq2yT9FCBu713YQ8JjH%2FR0Nq0sJ8wwMuHvQY6pgF6LZhVCo5BdeUa%2BDgvyfobqxWhQBKwGG%2B8tdayGB%2F0JF%2FMF23wIdCq6p1kOC23DOzDUdvpKC43XYuEcD2jZc4IkADuq5ZC7Z2RUYUmdXPrUhYe9Duj3ENGEyDPskrNFyaE87BmLqO4ihUVDjjsEOFDHoOdB%2Fqa%2FiHqRK8XdbInUnoPMEP96xk84AZDmE%2FxDJMZtANKGGaU4695M2cUGoeJXEoJ8mXO&X-Amz-Signature=57da4c3ed41fe2c4d4f37552567cc6586d6dc76be81a9fba073ed688678357fe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
