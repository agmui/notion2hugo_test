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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D7ZUZXA%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Fbl9qgVYxfePo2XMT43k1wdgcW%2B7MA8ybtcx6zj5G3wIgQ9VLyqO7rqoiuRJihTcYvPSadISynBPJI3JmD7JcY5cq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKn%2F%2BmGqcY6yH16fhyrcA7kQBc7qGNW1HUQG%2Fnn4vxHAGTsO%2FMPJCOwzZHMCwZJAOTo%2FOnZ1Cj0uOK%2Bb26izkcXK6alN9%2FrJtE%2BheQaKI0gNq0BR%2FQlHejJ4LKxFO7uuKrIMup0oPSla5wtFIYyRD%2FhiO3kUTTkWBxk1oDNrrrn%2BuoRloOHbwZAnbe%2BIWcLH6KQje2oVVi1BRCgb5Q5A792lpTFOmuqmk%2B4unMnmV6ur5RDT9gcbyfMgakmhS4Gn7pNcHpc4YIRr7ooFp%2F4ETSUouLe9csxdILy5CStIdT1U6gtaFkG%2BcvYkBC80KTBfSYrjdJ86%2FOdV%2BonD0RCK5tbgf3Pgq0rGoJaNmXU3oMlxx2SmCts%2Fq9C1%2Bc5SAOR2%2FLy5ztLQ%2B0gMbJ%2BSLiKuvIYqFvD%2FkARKAFyfXPubc7MwPI2MZ9wkhF7VEt4wPFe6gFzUUtOWddYwShv0ioY9qblOSugY4cGvMnagt%2FKZm1CT7KFJ14Wvb0t1xY0Je8A99w95UVv7okIvEGgr6Vga3qQ5iexFeRhU2aKah8fW8%2B%2BtkTN%2B%2BTZER9i091%2BMKZf0%2B6ln7c9HZYmO2xsQ6YEU8j6Qw68WIEym1RgIwdTeXyjbptcybaIAIq1Qq5LNMtgIzxbVz%2F2QiPk1CgOpMMOxpr4GOqUBKlxxD6Hw8Q%2BXu%2FOsBCEwcNHfyVoZJdiYFzlQsFeehS7i2pp%2FqkvIUWxvI0gXVbTjfG8YtEW3vJ9qfoJq4QzDmaDRG4M93pPBYFKm%2FIZHo6tTlOcWnajTyOdTefkzhlPtaIbLBg61Je7%2BAqa2QgiCyXuqBQOKG6ZcskL9aeJrYmlX9zGOctuPpjrc1Cgfgc9d55vVa9u9hte3spDcYwJX%2BZoh8gJq&X-Amz-Signature=fb614ee9539fa8ac261971d4a6a00c3ce0185b818a0aa14eb8367f63ba74a929&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D7ZUZXA%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Fbl9qgVYxfePo2XMT43k1wdgcW%2B7MA8ybtcx6zj5G3wIgQ9VLyqO7rqoiuRJihTcYvPSadISynBPJI3JmD7JcY5cq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKn%2F%2BmGqcY6yH16fhyrcA7kQBc7qGNW1HUQG%2Fnn4vxHAGTsO%2FMPJCOwzZHMCwZJAOTo%2FOnZ1Cj0uOK%2Bb26izkcXK6alN9%2FrJtE%2BheQaKI0gNq0BR%2FQlHejJ4LKxFO7uuKrIMup0oPSla5wtFIYyRD%2FhiO3kUTTkWBxk1oDNrrrn%2BuoRloOHbwZAnbe%2BIWcLH6KQje2oVVi1BRCgb5Q5A792lpTFOmuqmk%2B4unMnmV6ur5RDT9gcbyfMgakmhS4Gn7pNcHpc4YIRr7ooFp%2F4ETSUouLe9csxdILy5CStIdT1U6gtaFkG%2BcvYkBC80KTBfSYrjdJ86%2FOdV%2BonD0RCK5tbgf3Pgq0rGoJaNmXU3oMlxx2SmCts%2Fq9C1%2Bc5SAOR2%2FLy5ztLQ%2B0gMbJ%2BSLiKuvIYqFvD%2FkARKAFyfXPubc7MwPI2MZ9wkhF7VEt4wPFe6gFzUUtOWddYwShv0ioY9qblOSugY4cGvMnagt%2FKZm1CT7KFJ14Wvb0t1xY0Je8A99w95UVv7okIvEGgr6Vga3qQ5iexFeRhU2aKah8fW8%2B%2BtkTN%2B%2BTZER9i091%2BMKZf0%2B6ln7c9HZYmO2xsQ6YEU8j6Qw68WIEym1RgIwdTeXyjbptcybaIAIq1Qq5LNMtgIzxbVz%2F2QiPk1CgOpMMOxpr4GOqUBKlxxD6Hw8Q%2BXu%2FOsBCEwcNHfyVoZJdiYFzlQsFeehS7i2pp%2FqkvIUWxvI0gXVbTjfG8YtEW3vJ9qfoJq4QzDmaDRG4M93pPBYFKm%2FIZHo6tTlOcWnajTyOdTefkzhlPtaIbLBg61Je7%2BAqa2QgiCyXuqBQOKG6ZcskL9aeJrYmlX9zGOctuPpjrc1Cgfgc9d55vVa9u9hte3spDcYwJX%2BZoh8gJq&X-Amz-Signature=d2cc390454ad320f8a87a985647eaf57f9dacbdebf28c9daa1dbfb3fd7b8bcfa&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D7ZUZXA%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Fbl9qgVYxfePo2XMT43k1wdgcW%2B7MA8ybtcx6zj5G3wIgQ9VLyqO7rqoiuRJihTcYvPSadISynBPJI3JmD7JcY5cq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKn%2F%2BmGqcY6yH16fhyrcA7kQBc7qGNW1HUQG%2Fnn4vxHAGTsO%2FMPJCOwzZHMCwZJAOTo%2FOnZ1Cj0uOK%2Bb26izkcXK6alN9%2FrJtE%2BheQaKI0gNq0BR%2FQlHejJ4LKxFO7uuKrIMup0oPSla5wtFIYyRD%2FhiO3kUTTkWBxk1oDNrrrn%2BuoRloOHbwZAnbe%2BIWcLH6KQje2oVVi1BRCgb5Q5A792lpTFOmuqmk%2B4unMnmV6ur5RDT9gcbyfMgakmhS4Gn7pNcHpc4YIRr7ooFp%2F4ETSUouLe9csxdILy5CStIdT1U6gtaFkG%2BcvYkBC80KTBfSYrjdJ86%2FOdV%2BonD0RCK5tbgf3Pgq0rGoJaNmXU3oMlxx2SmCts%2Fq9C1%2Bc5SAOR2%2FLy5ztLQ%2B0gMbJ%2BSLiKuvIYqFvD%2FkARKAFyfXPubc7MwPI2MZ9wkhF7VEt4wPFe6gFzUUtOWddYwShv0ioY9qblOSugY4cGvMnagt%2FKZm1CT7KFJ14Wvb0t1xY0Je8A99w95UVv7okIvEGgr6Vga3qQ5iexFeRhU2aKah8fW8%2B%2BtkTN%2B%2BTZER9i091%2BMKZf0%2B6ln7c9HZYmO2xsQ6YEU8j6Qw68WIEym1RgIwdTeXyjbptcybaIAIq1Qq5LNMtgIzxbVz%2F2QiPk1CgOpMMOxpr4GOqUBKlxxD6Hw8Q%2BXu%2FOsBCEwcNHfyVoZJdiYFzlQsFeehS7i2pp%2FqkvIUWxvI0gXVbTjfG8YtEW3vJ9qfoJq4QzDmaDRG4M93pPBYFKm%2FIZHo6tTlOcWnajTyOdTefkzhlPtaIbLBg61Je7%2BAqa2QgiCyXuqBQOKG6ZcskL9aeJrYmlX9zGOctuPpjrc1Cgfgc9d55vVa9u9hte3spDcYwJX%2BZoh8gJq&X-Amz-Signature=648aeb9ab899c9c2121702ddf866bd2144c6cea88645d461842ee83c96fdfdb5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D7ZUZXA%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Fbl9qgVYxfePo2XMT43k1wdgcW%2B7MA8ybtcx6zj5G3wIgQ9VLyqO7rqoiuRJihTcYvPSadISynBPJI3JmD7JcY5cq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKn%2F%2BmGqcY6yH16fhyrcA7kQBc7qGNW1HUQG%2Fnn4vxHAGTsO%2FMPJCOwzZHMCwZJAOTo%2FOnZ1Cj0uOK%2Bb26izkcXK6alN9%2FrJtE%2BheQaKI0gNq0BR%2FQlHejJ4LKxFO7uuKrIMup0oPSla5wtFIYyRD%2FhiO3kUTTkWBxk1oDNrrrn%2BuoRloOHbwZAnbe%2BIWcLH6KQje2oVVi1BRCgb5Q5A792lpTFOmuqmk%2B4unMnmV6ur5RDT9gcbyfMgakmhS4Gn7pNcHpc4YIRr7ooFp%2F4ETSUouLe9csxdILy5CStIdT1U6gtaFkG%2BcvYkBC80KTBfSYrjdJ86%2FOdV%2BonD0RCK5tbgf3Pgq0rGoJaNmXU3oMlxx2SmCts%2Fq9C1%2Bc5SAOR2%2FLy5ztLQ%2B0gMbJ%2BSLiKuvIYqFvD%2FkARKAFyfXPubc7MwPI2MZ9wkhF7VEt4wPFe6gFzUUtOWddYwShv0ioY9qblOSugY4cGvMnagt%2FKZm1CT7KFJ14Wvb0t1xY0Je8A99w95UVv7okIvEGgr6Vga3qQ5iexFeRhU2aKah8fW8%2B%2BtkTN%2B%2BTZER9i091%2BMKZf0%2B6ln7c9HZYmO2xsQ6YEU8j6Qw68WIEym1RgIwdTeXyjbptcybaIAIq1Qq5LNMtgIzxbVz%2F2QiPk1CgOpMMOxpr4GOqUBKlxxD6Hw8Q%2BXu%2FOsBCEwcNHfyVoZJdiYFzlQsFeehS7i2pp%2FqkvIUWxvI0gXVbTjfG8YtEW3vJ9qfoJq4QzDmaDRG4M93pPBYFKm%2FIZHo6tTlOcWnajTyOdTefkzhlPtaIbLBg61Je7%2BAqa2QgiCyXuqBQOKG6ZcskL9aeJrYmlX9zGOctuPpjrc1Cgfgc9d55vVa9u9hte3spDcYwJX%2BZoh8gJq&X-Amz-Signature=897f82a7260a922d416326fc14ed6ce4635b47ac4c364856e18254f70c1c9725&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D7ZUZXA%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Fbl9qgVYxfePo2XMT43k1wdgcW%2B7MA8ybtcx6zj5G3wIgQ9VLyqO7rqoiuRJihTcYvPSadISynBPJI3JmD7JcY5cq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKn%2F%2BmGqcY6yH16fhyrcA7kQBc7qGNW1HUQG%2Fnn4vxHAGTsO%2FMPJCOwzZHMCwZJAOTo%2FOnZ1Cj0uOK%2Bb26izkcXK6alN9%2FrJtE%2BheQaKI0gNq0BR%2FQlHejJ4LKxFO7uuKrIMup0oPSla5wtFIYyRD%2FhiO3kUTTkWBxk1oDNrrrn%2BuoRloOHbwZAnbe%2BIWcLH6KQje2oVVi1BRCgb5Q5A792lpTFOmuqmk%2B4unMnmV6ur5RDT9gcbyfMgakmhS4Gn7pNcHpc4YIRr7ooFp%2F4ETSUouLe9csxdILy5CStIdT1U6gtaFkG%2BcvYkBC80KTBfSYrjdJ86%2FOdV%2BonD0RCK5tbgf3Pgq0rGoJaNmXU3oMlxx2SmCts%2Fq9C1%2Bc5SAOR2%2FLy5ztLQ%2B0gMbJ%2BSLiKuvIYqFvD%2FkARKAFyfXPubc7MwPI2MZ9wkhF7VEt4wPFe6gFzUUtOWddYwShv0ioY9qblOSugY4cGvMnagt%2FKZm1CT7KFJ14Wvb0t1xY0Je8A99w95UVv7okIvEGgr6Vga3qQ5iexFeRhU2aKah8fW8%2B%2BtkTN%2B%2BTZER9i091%2BMKZf0%2B6ln7c9HZYmO2xsQ6YEU8j6Qw68WIEym1RgIwdTeXyjbptcybaIAIq1Qq5LNMtgIzxbVz%2F2QiPk1CgOpMMOxpr4GOqUBKlxxD6Hw8Q%2BXu%2FOsBCEwcNHfyVoZJdiYFzlQsFeehS7i2pp%2FqkvIUWxvI0gXVbTjfG8YtEW3vJ9qfoJq4QzDmaDRG4M93pPBYFKm%2FIZHo6tTlOcWnajTyOdTefkzhlPtaIbLBg61Je7%2BAqa2QgiCyXuqBQOKG6ZcskL9aeJrYmlX9zGOctuPpjrc1Cgfgc9d55vVa9u9hte3spDcYwJX%2BZoh8gJq&X-Amz-Signature=1c232295e8266c90fb848a8e567e5261ae27d7b89ba2d86caddc563ba6f13a73&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D7ZUZXA%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Fbl9qgVYxfePo2XMT43k1wdgcW%2B7MA8ybtcx6zj5G3wIgQ9VLyqO7rqoiuRJihTcYvPSadISynBPJI3JmD7JcY5cq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKn%2F%2BmGqcY6yH16fhyrcA7kQBc7qGNW1HUQG%2Fnn4vxHAGTsO%2FMPJCOwzZHMCwZJAOTo%2FOnZ1Cj0uOK%2Bb26izkcXK6alN9%2FrJtE%2BheQaKI0gNq0BR%2FQlHejJ4LKxFO7uuKrIMup0oPSla5wtFIYyRD%2FhiO3kUTTkWBxk1oDNrrrn%2BuoRloOHbwZAnbe%2BIWcLH6KQje2oVVi1BRCgb5Q5A792lpTFOmuqmk%2B4unMnmV6ur5RDT9gcbyfMgakmhS4Gn7pNcHpc4YIRr7ooFp%2F4ETSUouLe9csxdILy5CStIdT1U6gtaFkG%2BcvYkBC80KTBfSYrjdJ86%2FOdV%2BonD0RCK5tbgf3Pgq0rGoJaNmXU3oMlxx2SmCts%2Fq9C1%2Bc5SAOR2%2FLy5ztLQ%2B0gMbJ%2BSLiKuvIYqFvD%2FkARKAFyfXPubc7MwPI2MZ9wkhF7VEt4wPFe6gFzUUtOWddYwShv0ioY9qblOSugY4cGvMnagt%2FKZm1CT7KFJ14Wvb0t1xY0Je8A99w95UVv7okIvEGgr6Vga3qQ5iexFeRhU2aKah8fW8%2B%2BtkTN%2B%2BTZER9i091%2BMKZf0%2B6ln7c9HZYmO2xsQ6YEU8j6Qw68WIEym1RgIwdTeXyjbptcybaIAIq1Qq5LNMtgIzxbVz%2F2QiPk1CgOpMMOxpr4GOqUBKlxxD6Hw8Q%2BXu%2FOsBCEwcNHfyVoZJdiYFzlQsFeehS7i2pp%2FqkvIUWxvI0gXVbTjfG8YtEW3vJ9qfoJq4QzDmaDRG4M93pPBYFKm%2FIZHo6tTlOcWnajTyOdTefkzhlPtaIbLBg61Je7%2BAqa2QgiCyXuqBQOKG6ZcskL9aeJrYmlX9zGOctuPpjrc1Cgfgc9d55vVa9u9hte3spDcYwJX%2BZoh8gJq&X-Amz-Signature=cdc85535ef502d81be079f2a1688c4c01d89637faa0e8abed7ac2107f48ad007&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D7ZUZXA%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Fbl9qgVYxfePo2XMT43k1wdgcW%2B7MA8ybtcx6zj5G3wIgQ9VLyqO7rqoiuRJihTcYvPSadISynBPJI3JmD7JcY5cq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKn%2F%2BmGqcY6yH16fhyrcA7kQBc7qGNW1HUQG%2Fnn4vxHAGTsO%2FMPJCOwzZHMCwZJAOTo%2FOnZ1Cj0uOK%2Bb26izkcXK6alN9%2FrJtE%2BheQaKI0gNq0BR%2FQlHejJ4LKxFO7uuKrIMup0oPSla5wtFIYyRD%2FhiO3kUTTkWBxk1oDNrrrn%2BuoRloOHbwZAnbe%2BIWcLH6KQje2oVVi1BRCgb5Q5A792lpTFOmuqmk%2B4unMnmV6ur5RDT9gcbyfMgakmhS4Gn7pNcHpc4YIRr7ooFp%2F4ETSUouLe9csxdILy5CStIdT1U6gtaFkG%2BcvYkBC80KTBfSYrjdJ86%2FOdV%2BonD0RCK5tbgf3Pgq0rGoJaNmXU3oMlxx2SmCts%2Fq9C1%2Bc5SAOR2%2FLy5ztLQ%2B0gMbJ%2BSLiKuvIYqFvD%2FkARKAFyfXPubc7MwPI2MZ9wkhF7VEt4wPFe6gFzUUtOWddYwShv0ioY9qblOSugY4cGvMnagt%2FKZm1CT7KFJ14Wvb0t1xY0Je8A99w95UVv7okIvEGgr6Vga3qQ5iexFeRhU2aKah8fW8%2B%2BtkTN%2B%2BTZER9i091%2BMKZf0%2B6ln7c9HZYmO2xsQ6YEU8j6Qw68WIEym1RgIwdTeXyjbptcybaIAIq1Qq5LNMtgIzxbVz%2F2QiPk1CgOpMMOxpr4GOqUBKlxxD6Hw8Q%2BXu%2FOsBCEwcNHfyVoZJdiYFzlQsFeehS7i2pp%2FqkvIUWxvI0gXVbTjfG8YtEW3vJ9qfoJq4QzDmaDRG4M93pPBYFKm%2FIZHo6tTlOcWnajTyOdTefkzhlPtaIbLBg61Je7%2BAqa2QgiCyXuqBQOKG6ZcskL9aeJrYmlX9zGOctuPpjrc1Cgfgc9d55vVa9u9hte3spDcYwJX%2BZoh8gJq&X-Amz-Signature=22e0f522f1e8cfbfe33967f5cf0ca79318383aa90c4cde4aa25dc3897b254e3e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D7ZUZXA%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Fbl9qgVYxfePo2XMT43k1wdgcW%2B7MA8ybtcx6zj5G3wIgQ9VLyqO7rqoiuRJihTcYvPSadISynBPJI3JmD7JcY5cq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKn%2F%2BmGqcY6yH16fhyrcA7kQBc7qGNW1HUQG%2Fnn4vxHAGTsO%2FMPJCOwzZHMCwZJAOTo%2FOnZ1Cj0uOK%2Bb26izkcXK6alN9%2FrJtE%2BheQaKI0gNq0BR%2FQlHejJ4LKxFO7uuKrIMup0oPSla5wtFIYyRD%2FhiO3kUTTkWBxk1oDNrrrn%2BuoRloOHbwZAnbe%2BIWcLH6KQje2oVVi1BRCgb5Q5A792lpTFOmuqmk%2B4unMnmV6ur5RDT9gcbyfMgakmhS4Gn7pNcHpc4YIRr7ooFp%2F4ETSUouLe9csxdILy5CStIdT1U6gtaFkG%2BcvYkBC80KTBfSYrjdJ86%2FOdV%2BonD0RCK5tbgf3Pgq0rGoJaNmXU3oMlxx2SmCts%2Fq9C1%2Bc5SAOR2%2FLy5ztLQ%2B0gMbJ%2BSLiKuvIYqFvD%2FkARKAFyfXPubc7MwPI2MZ9wkhF7VEt4wPFe6gFzUUtOWddYwShv0ioY9qblOSugY4cGvMnagt%2FKZm1CT7KFJ14Wvb0t1xY0Je8A99w95UVv7okIvEGgr6Vga3qQ5iexFeRhU2aKah8fW8%2B%2BtkTN%2B%2BTZER9i091%2BMKZf0%2B6ln7c9HZYmO2xsQ6YEU8j6Qw68WIEym1RgIwdTeXyjbptcybaIAIq1Qq5LNMtgIzxbVz%2F2QiPk1CgOpMMOxpr4GOqUBKlxxD6Hw8Q%2BXu%2FOsBCEwcNHfyVoZJdiYFzlQsFeehS7i2pp%2FqkvIUWxvI0gXVbTjfG8YtEW3vJ9qfoJq4QzDmaDRG4M93pPBYFKm%2FIZHo6tTlOcWnajTyOdTefkzhlPtaIbLBg61Je7%2BAqa2QgiCyXuqBQOKG6ZcskL9aeJrYmlX9zGOctuPpjrc1Cgfgc9d55vVa9u9hte3spDcYwJX%2BZoh8gJq&X-Amz-Signature=de302fb9c91e052e2ebb44d5f6cfc6f764fe5a694ec2490f998ab62d4d51424b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
