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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPZZFKEB%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6uzI1O6oTMwU9BKiswc2HekRFKtVHgScq7gur3ZWzbAiEAkaJTkAcLByKzjHrrhavF7AKtfHYYygjPQ7eS4PPvgUAq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDKTIQviKaIkrWT66YircAyK%2BBJABi%2FnyEdLdlcH1zhnh8Es%2ByPeJPzUyh6WOgEpcUYgysbZeoeNM33PVSwAjL6jyL6DQhS6fjR4p6gAHZsTPt3U%2FD%2BvsCcxvMPsuaSZXVc1LgzFKCbH5AEGBgygfPUVNemoooFjNiH2uFk21qQdpuR7xBK%2BuOQdIih2w8OW4WBkRzEj%2By4cBK2SjbOgXlcSkC4sk3fn6L6oCGF6%2B175lYl5q9xR9Oi6687SvcEYQtCz6TnWi3zUtJ9X5Ak5wI8XFKB9lK7CKYy6kr%2F7DA8ilfvMbbQH%2FD9%2F3Y%2FXsK5%2FZQy6jc7I78bBxRzyrUGQ22MdfbkH%2BB0IBga4xGnJxZ3MSj4XAwawWRS3mPOh3LtU%2Fbhpu82s%2Bal8kis9AHvtPTc6kCzdCXHcBfax3wgWwJjVYf4BrnRl1dQzaKM01z5%2BUgcg6YAK210WbCv4JkcdD1EZMjLdU%2FFWY1wDLSZmuaymDCzGBrrc6CiJO3EYQSnknldoNH6Uu49aA1UJSZo6qKHcJfiIjyPN91xyzjf%2FoIefAENuxNzfye5QCNhL9%2BlcRxLscI99BLL1sZmns5Ej8UIaYb1DJSdA6ch9BzM3ezXOOaSiHXEvHnW9cJqldT3cDEM60jwkGyJgbXT4BMLeI0L8GOqUBnEWQmvAcL0wPdDzvGB6q6pcprnK1Rw0HYvHwvoQW3fHlwN7ffzqlnq170sr2UlaHQibWdlLVggpzobGi5Zl5G3ONhRONnpGtWV5%2F%2B87wgydaH9t2Im3k9Vhlb6Yl%2FF4X4x3SADOgL7upEK6ZjppK14m0PEef2T9nt5Q6cQm13BAKD8QnZp%2BhjY04JKHQ3xRib%2BsknbOGH85pYksTK6l5I1P4V9yu&X-Amz-Signature=870bda9cafdb30f1fad87348374e1325321211e80cc7e4eadbd96545d8f5e993&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPZZFKEB%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6uzI1O6oTMwU9BKiswc2HekRFKtVHgScq7gur3ZWzbAiEAkaJTkAcLByKzjHrrhavF7AKtfHYYygjPQ7eS4PPvgUAq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDKTIQviKaIkrWT66YircAyK%2BBJABi%2FnyEdLdlcH1zhnh8Es%2ByPeJPzUyh6WOgEpcUYgysbZeoeNM33PVSwAjL6jyL6DQhS6fjR4p6gAHZsTPt3U%2FD%2BvsCcxvMPsuaSZXVc1LgzFKCbH5AEGBgygfPUVNemoooFjNiH2uFk21qQdpuR7xBK%2BuOQdIih2w8OW4WBkRzEj%2By4cBK2SjbOgXlcSkC4sk3fn6L6oCGF6%2B175lYl5q9xR9Oi6687SvcEYQtCz6TnWi3zUtJ9X5Ak5wI8XFKB9lK7CKYy6kr%2F7DA8ilfvMbbQH%2FD9%2F3Y%2FXsK5%2FZQy6jc7I78bBxRzyrUGQ22MdfbkH%2BB0IBga4xGnJxZ3MSj4XAwawWRS3mPOh3LtU%2Fbhpu82s%2Bal8kis9AHvtPTc6kCzdCXHcBfax3wgWwJjVYf4BrnRl1dQzaKM01z5%2BUgcg6YAK210WbCv4JkcdD1EZMjLdU%2FFWY1wDLSZmuaymDCzGBrrc6CiJO3EYQSnknldoNH6Uu49aA1UJSZo6qKHcJfiIjyPN91xyzjf%2FoIefAENuxNzfye5QCNhL9%2BlcRxLscI99BLL1sZmns5Ej8UIaYb1DJSdA6ch9BzM3ezXOOaSiHXEvHnW9cJqldT3cDEM60jwkGyJgbXT4BMLeI0L8GOqUBnEWQmvAcL0wPdDzvGB6q6pcprnK1Rw0HYvHwvoQW3fHlwN7ffzqlnq170sr2UlaHQibWdlLVggpzobGi5Zl5G3ONhRONnpGtWV5%2F%2B87wgydaH9t2Im3k9Vhlb6Yl%2FF4X4x3SADOgL7upEK6ZjppK14m0PEef2T9nt5Q6cQm13BAKD8QnZp%2BhjY04JKHQ3xRib%2BsknbOGH85pYksTK6l5I1P4V9yu&X-Amz-Signature=7a622c46717741d31a03a3ed397a60a87fdf495f9aa14fa28982e428bac393e3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPZZFKEB%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6uzI1O6oTMwU9BKiswc2HekRFKtVHgScq7gur3ZWzbAiEAkaJTkAcLByKzjHrrhavF7AKtfHYYygjPQ7eS4PPvgUAq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDKTIQviKaIkrWT66YircAyK%2BBJABi%2FnyEdLdlcH1zhnh8Es%2ByPeJPzUyh6WOgEpcUYgysbZeoeNM33PVSwAjL6jyL6DQhS6fjR4p6gAHZsTPt3U%2FD%2BvsCcxvMPsuaSZXVc1LgzFKCbH5AEGBgygfPUVNemoooFjNiH2uFk21qQdpuR7xBK%2BuOQdIih2w8OW4WBkRzEj%2By4cBK2SjbOgXlcSkC4sk3fn6L6oCGF6%2B175lYl5q9xR9Oi6687SvcEYQtCz6TnWi3zUtJ9X5Ak5wI8XFKB9lK7CKYy6kr%2F7DA8ilfvMbbQH%2FD9%2F3Y%2FXsK5%2FZQy6jc7I78bBxRzyrUGQ22MdfbkH%2BB0IBga4xGnJxZ3MSj4XAwawWRS3mPOh3LtU%2Fbhpu82s%2Bal8kis9AHvtPTc6kCzdCXHcBfax3wgWwJjVYf4BrnRl1dQzaKM01z5%2BUgcg6YAK210WbCv4JkcdD1EZMjLdU%2FFWY1wDLSZmuaymDCzGBrrc6CiJO3EYQSnknldoNH6Uu49aA1UJSZo6qKHcJfiIjyPN91xyzjf%2FoIefAENuxNzfye5QCNhL9%2BlcRxLscI99BLL1sZmns5Ej8UIaYb1DJSdA6ch9BzM3ezXOOaSiHXEvHnW9cJqldT3cDEM60jwkGyJgbXT4BMLeI0L8GOqUBnEWQmvAcL0wPdDzvGB6q6pcprnK1Rw0HYvHwvoQW3fHlwN7ffzqlnq170sr2UlaHQibWdlLVggpzobGi5Zl5G3ONhRONnpGtWV5%2F%2B87wgydaH9t2Im3k9Vhlb6Yl%2FF4X4x3SADOgL7upEK6ZjppK14m0PEef2T9nt5Q6cQm13BAKD8QnZp%2BhjY04JKHQ3xRib%2BsknbOGH85pYksTK6l5I1P4V9yu&X-Amz-Signature=3035150dfc55bc23335117b8690992e80522e36cbb646949374e37b1232b40f4&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPZZFKEB%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6uzI1O6oTMwU9BKiswc2HekRFKtVHgScq7gur3ZWzbAiEAkaJTkAcLByKzjHrrhavF7AKtfHYYygjPQ7eS4PPvgUAq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDKTIQviKaIkrWT66YircAyK%2BBJABi%2FnyEdLdlcH1zhnh8Es%2ByPeJPzUyh6WOgEpcUYgysbZeoeNM33PVSwAjL6jyL6DQhS6fjR4p6gAHZsTPt3U%2FD%2BvsCcxvMPsuaSZXVc1LgzFKCbH5AEGBgygfPUVNemoooFjNiH2uFk21qQdpuR7xBK%2BuOQdIih2w8OW4WBkRzEj%2By4cBK2SjbOgXlcSkC4sk3fn6L6oCGF6%2B175lYl5q9xR9Oi6687SvcEYQtCz6TnWi3zUtJ9X5Ak5wI8XFKB9lK7CKYy6kr%2F7DA8ilfvMbbQH%2FD9%2F3Y%2FXsK5%2FZQy6jc7I78bBxRzyrUGQ22MdfbkH%2BB0IBga4xGnJxZ3MSj4XAwawWRS3mPOh3LtU%2Fbhpu82s%2Bal8kis9AHvtPTc6kCzdCXHcBfax3wgWwJjVYf4BrnRl1dQzaKM01z5%2BUgcg6YAK210WbCv4JkcdD1EZMjLdU%2FFWY1wDLSZmuaymDCzGBrrc6CiJO3EYQSnknldoNH6Uu49aA1UJSZo6qKHcJfiIjyPN91xyzjf%2FoIefAENuxNzfye5QCNhL9%2BlcRxLscI99BLL1sZmns5Ej8UIaYb1DJSdA6ch9BzM3ezXOOaSiHXEvHnW9cJqldT3cDEM60jwkGyJgbXT4BMLeI0L8GOqUBnEWQmvAcL0wPdDzvGB6q6pcprnK1Rw0HYvHwvoQW3fHlwN7ffzqlnq170sr2UlaHQibWdlLVggpzobGi5Zl5G3ONhRONnpGtWV5%2F%2B87wgydaH9t2Im3k9Vhlb6Yl%2FF4X4x3SADOgL7upEK6ZjppK14m0PEef2T9nt5Q6cQm13BAKD8QnZp%2BhjY04JKHQ3xRib%2BsknbOGH85pYksTK6l5I1P4V9yu&X-Amz-Signature=aea18a7e62f344da9d824cefa5d62f1a84b1c9f6fd34793d1720a575e8f807c9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPZZFKEB%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6uzI1O6oTMwU9BKiswc2HekRFKtVHgScq7gur3ZWzbAiEAkaJTkAcLByKzjHrrhavF7AKtfHYYygjPQ7eS4PPvgUAq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDKTIQviKaIkrWT66YircAyK%2BBJABi%2FnyEdLdlcH1zhnh8Es%2ByPeJPzUyh6WOgEpcUYgysbZeoeNM33PVSwAjL6jyL6DQhS6fjR4p6gAHZsTPt3U%2FD%2BvsCcxvMPsuaSZXVc1LgzFKCbH5AEGBgygfPUVNemoooFjNiH2uFk21qQdpuR7xBK%2BuOQdIih2w8OW4WBkRzEj%2By4cBK2SjbOgXlcSkC4sk3fn6L6oCGF6%2B175lYl5q9xR9Oi6687SvcEYQtCz6TnWi3zUtJ9X5Ak5wI8XFKB9lK7CKYy6kr%2F7DA8ilfvMbbQH%2FD9%2F3Y%2FXsK5%2FZQy6jc7I78bBxRzyrUGQ22MdfbkH%2BB0IBga4xGnJxZ3MSj4XAwawWRS3mPOh3LtU%2Fbhpu82s%2Bal8kis9AHvtPTc6kCzdCXHcBfax3wgWwJjVYf4BrnRl1dQzaKM01z5%2BUgcg6YAK210WbCv4JkcdD1EZMjLdU%2FFWY1wDLSZmuaymDCzGBrrc6CiJO3EYQSnknldoNH6Uu49aA1UJSZo6qKHcJfiIjyPN91xyzjf%2FoIefAENuxNzfye5QCNhL9%2BlcRxLscI99BLL1sZmns5Ej8UIaYb1DJSdA6ch9BzM3ezXOOaSiHXEvHnW9cJqldT3cDEM60jwkGyJgbXT4BMLeI0L8GOqUBnEWQmvAcL0wPdDzvGB6q6pcprnK1Rw0HYvHwvoQW3fHlwN7ffzqlnq170sr2UlaHQibWdlLVggpzobGi5Zl5G3ONhRONnpGtWV5%2F%2B87wgydaH9t2Im3k9Vhlb6Yl%2FF4X4x3SADOgL7upEK6ZjppK14m0PEef2T9nt5Q6cQm13BAKD8QnZp%2BhjY04JKHQ3xRib%2BsknbOGH85pYksTK6l5I1P4V9yu&X-Amz-Signature=19be9c514c08a4e6f631e9ddccba020c95049c9d60da69fe40c250b8bbb0bb5a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPZZFKEB%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6uzI1O6oTMwU9BKiswc2HekRFKtVHgScq7gur3ZWzbAiEAkaJTkAcLByKzjHrrhavF7AKtfHYYygjPQ7eS4PPvgUAq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDKTIQviKaIkrWT66YircAyK%2BBJABi%2FnyEdLdlcH1zhnh8Es%2ByPeJPzUyh6WOgEpcUYgysbZeoeNM33PVSwAjL6jyL6DQhS6fjR4p6gAHZsTPt3U%2FD%2BvsCcxvMPsuaSZXVc1LgzFKCbH5AEGBgygfPUVNemoooFjNiH2uFk21qQdpuR7xBK%2BuOQdIih2w8OW4WBkRzEj%2By4cBK2SjbOgXlcSkC4sk3fn6L6oCGF6%2B175lYl5q9xR9Oi6687SvcEYQtCz6TnWi3zUtJ9X5Ak5wI8XFKB9lK7CKYy6kr%2F7DA8ilfvMbbQH%2FD9%2F3Y%2FXsK5%2FZQy6jc7I78bBxRzyrUGQ22MdfbkH%2BB0IBga4xGnJxZ3MSj4XAwawWRS3mPOh3LtU%2Fbhpu82s%2Bal8kis9AHvtPTc6kCzdCXHcBfax3wgWwJjVYf4BrnRl1dQzaKM01z5%2BUgcg6YAK210WbCv4JkcdD1EZMjLdU%2FFWY1wDLSZmuaymDCzGBrrc6CiJO3EYQSnknldoNH6Uu49aA1UJSZo6qKHcJfiIjyPN91xyzjf%2FoIefAENuxNzfye5QCNhL9%2BlcRxLscI99BLL1sZmns5Ej8UIaYb1DJSdA6ch9BzM3ezXOOaSiHXEvHnW9cJqldT3cDEM60jwkGyJgbXT4BMLeI0L8GOqUBnEWQmvAcL0wPdDzvGB6q6pcprnK1Rw0HYvHwvoQW3fHlwN7ffzqlnq170sr2UlaHQibWdlLVggpzobGi5Zl5G3ONhRONnpGtWV5%2F%2B87wgydaH9t2Im3k9Vhlb6Yl%2FF4X4x3SADOgL7upEK6ZjppK14m0PEef2T9nt5Q6cQm13BAKD8QnZp%2BhjY04JKHQ3xRib%2BsknbOGH85pYksTK6l5I1P4V9yu&X-Amz-Signature=7f55a796505e9e1c8f5ded786ed36d13c8e5abee0b5a9730eefedf012d57b1ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPZZFKEB%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6uzI1O6oTMwU9BKiswc2HekRFKtVHgScq7gur3ZWzbAiEAkaJTkAcLByKzjHrrhavF7AKtfHYYygjPQ7eS4PPvgUAq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDKTIQviKaIkrWT66YircAyK%2BBJABi%2FnyEdLdlcH1zhnh8Es%2ByPeJPzUyh6WOgEpcUYgysbZeoeNM33PVSwAjL6jyL6DQhS6fjR4p6gAHZsTPt3U%2FD%2BvsCcxvMPsuaSZXVc1LgzFKCbH5AEGBgygfPUVNemoooFjNiH2uFk21qQdpuR7xBK%2BuOQdIih2w8OW4WBkRzEj%2By4cBK2SjbOgXlcSkC4sk3fn6L6oCGF6%2B175lYl5q9xR9Oi6687SvcEYQtCz6TnWi3zUtJ9X5Ak5wI8XFKB9lK7CKYy6kr%2F7DA8ilfvMbbQH%2FD9%2F3Y%2FXsK5%2FZQy6jc7I78bBxRzyrUGQ22MdfbkH%2BB0IBga4xGnJxZ3MSj4XAwawWRS3mPOh3LtU%2Fbhpu82s%2Bal8kis9AHvtPTc6kCzdCXHcBfax3wgWwJjVYf4BrnRl1dQzaKM01z5%2BUgcg6YAK210WbCv4JkcdD1EZMjLdU%2FFWY1wDLSZmuaymDCzGBrrc6CiJO3EYQSnknldoNH6Uu49aA1UJSZo6qKHcJfiIjyPN91xyzjf%2FoIefAENuxNzfye5QCNhL9%2BlcRxLscI99BLL1sZmns5Ej8UIaYb1DJSdA6ch9BzM3ezXOOaSiHXEvHnW9cJqldT3cDEM60jwkGyJgbXT4BMLeI0L8GOqUBnEWQmvAcL0wPdDzvGB6q6pcprnK1Rw0HYvHwvoQW3fHlwN7ffzqlnq170sr2UlaHQibWdlLVggpzobGi5Zl5G3ONhRONnpGtWV5%2F%2B87wgydaH9t2Im3k9Vhlb6Yl%2FF4X4x3SADOgL7upEK6ZjppK14m0PEef2T9nt5Q6cQm13BAKD8QnZp%2BhjY04JKHQ3xRib%2BsknbOGH85pYksTK6l5I1P4V9yu&X-Amz-Signature=3ad016b83d750cc7b44107d907c2115710e2a6f221cc556189bd8538200861fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPZZFKEB%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6uzI1O6oTMwU9BKiswc2HekRFKtVHgScq7gur3ZWzbAiEAkaJTkAcLByKzjHrrhavF7AKtfHYYygjPQ7eS4PPvgUAq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDKTIQviKaIkrWT66YircAyK%2BBJABi%2FnyEdLdlcH1zhnh8Es%2ByPeJPzUyh6WOgEpcUYgysbZeoeNM33PVSwAjL6jyL6DQhS6fjR4p6gAHZsTPt3U%2FD%2BvsCcxvMPsuaSZXVc1LgzFKCbH5AEGBgygfPUVNemoooFjNiH2uFk21qQdpuR7xBK%2BuOQdIih2w8OW4WBkRzEj%2By4cBK2SjbOgXlcSkC4sk3fn6L6oCGF6%2B175lYl5q9xR9Oi6687SvcEYQtCz6TnWi3zUtJ9X5Ak5wI8XFKB9lK7CKYy6kr%2F7DA8ilfvMbbQH%2FD9%2F3Y%2FXsK5%2FZQy6jc7I78bBxRzyrUGQ22MdfbkH%2BB0IBga4xGnJxZ3MSj4XAwawWRS3mPOh3LtU%2Fbhpu82s%2Bal8kis9AHvtPTc6kCzdCXHcBfax3wgWwJjVYf4BrnRl1dQzaKM01z5%2BUgcg6YAK210WbCv4JkcdD1EZMjLdU%2FFWY1wDLSZmuaymDCzGBrrc6CiJO3EYQSnknldoNH6Uu49aA1UJSZo6qKHcJfiIjyPN91xyzjf%2FoIefAENuxNzfye5QCNhL9%2BlcRxLscI99BLL1sZmns5Ej8UIaYb1DJSdA6ch9BzM3ezXOOaSiHXEvHnW9cJqldT3cDEM60jwkGyJgbXT4BMLeI0L8GOqUBnEWQmvAcL0wPdDzvGB6q6pcprnK1Rw0HYvHwvoQW3fHlwN7ffzqlnq170sr2UlaHQibWdlLVggpzobGi5Zl5G3ONhRONnpGtWV5%2F%2B87wgydaH9t2Im3k9Vhlb6Yl%2FF4X4x3SADOgL7upEK6ZjppK14m0PEef2T9nt5Q6cQm13BAKD8QnZp%2BhjY04JKHQ3xRib%2BsknbOGH85pYksTK6l5I1P4V9yu&X-Amz-Signature=e8433b0c107fc81a1f19cbb5198edc1fe5e0e871d04b46d13135cce93f6cfade&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
