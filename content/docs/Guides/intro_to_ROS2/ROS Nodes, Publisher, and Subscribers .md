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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRG75KGK%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd9s4l4j5C0dv8jSUBfHL6pgd0lzhpD8qrO%2Bs6YNo3RwIhAMT7%2FV9VaWaYV6wCt5X8kNEqbqtOpiz%2BLmUUlZb%2B2%2FMnKv8DCFYQABoMNjM3NDIzMTgzODA1Igwdrb%2FzuJ1uswa%2Bw94q3AM2eiLei%2FQCqXSKbT9LUfmQpBGoXKm15PignYKZkLYUOzpZHtL2b0pAOLHqXwPt%2F5prcz8HJr6njkBZd%2BVlnDrlJhsN%2BjnNkW7pihCEs3LzbHCVgju4ck4lCFHt6zqytokcWssJ5BskQzSnN%2BbT4yhRrvmVQFb9NU1KsrfY1HxUKk5POUwfolO%2BmVT49itcI%2FgdkGu9bbiZ7dMgXcDmZVMndJzDXv1un2kVa7RpvabtcoSvH6FYbB3xysaQHmk0swAJCfponotAsTlQnoV7IkmXd3HmUsPbcUEOsVrVNzRgAb94rWJHkzd%2FlZZaO65jQU%2F%2FXmmI8MJB6O6B4Zvz8l64bOSNqTUoPnH6Tc50c5Ab5fOPYOatmz9%2B%2BprnsJvo5wqWzot6r02k7Hm%2F%2BAeqm0VIfGIqJ%2BCkLKSd3DLKnhGK9syqirQxfqqyV0CXmgyeSC%2FYi1YevpeM3ZOQpXXRCvvt8%2Bde%2B%2BLPSDqEnOr2hi8p4Vr96EIlkdYazU9t8ACRGzmcPvGqH4HMwJF2YQJI5sj3lp3VNrybo6UDjAkwSt6wasHxaP3KyfJiNo8KViyLStEwVOuhtaOeeqZ1jwVJWNRjjZw%2BkZ9yqQOW71Nzlayu67lJ699rpK1GqY39%2FzCwkNXBBjqkASk033e1Cd4Aew1enkWmT%2FuFdqiDw9Ir6rTpNU3zWYnx4zRgtfAKwvif8PWVpL64vt4gzmeDh4R4jNsslsp%2BIRE2%2B9Es67%2B%2B0aDqzM%2FwwT2ByYNZtFYTAnM9wmta%2Btx23MeSbQNv3RUJNGRCg6ciGwCuU1KmiTAQizrpJ7fKsHCtnSQpe3QjdP6e4Ii8qwpd2RHsGyX8ZgwXU11UqCCPGIGwC9LU&X-Amz-Signature=ab53caeb856a0303164c7b7b7ee012ab294fae92f27ff6dd3a9d101b5ba812a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRG75KGK%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd9s4l4j5C0dv8jSUBfHL6pgd0lzhpD8qrO%2Bs6YNo3RwIhAMT7%2FV9VaWaYV6wCt5X8kNEqbqtOpiz%2BLmUUlZb%2B2%2FMnKv8DCFYQABoMNjM3NDIzMTgzODA1Igwdrb%2FzuJ1uswa%2Bw94q3AM2eiLei%2FQCqXSKbT9LUfmQpBGoXKm15PignYKZkLYUOzpZHtL2b0pAOLHqXwPt%2F5prcz8HJr6njkBZd%2BVlnDrlJhsN%2BjnNkW7pihCEs3LzbHCVgju4ck4lCFHt6zqytokcWssJ5BskQzSnN%2BbT4yhRrvmVQFb9NU1KsrfY1HxUKk5POUwfolO%2BmVT49itcI%2FgdkGu9bbiZ7dMgXcDmZVMndJzDXv1un2kVa7RpvabtcoSvH6FYbB3xysaQHmk0swAJCfponotAsTlQnoV7IkmXd3HmUsPbcUEOsVrVNzRgAb94rWJHkzd%2FlZZaO65jQU%2F%2FXmmI8MJB6O6B4Zvz8l64bOSNqTUoPnH6Tc50c5Ab5fOPYOatmz9%2B%2BprnsJvo5wqWzot6r02k7Hm%2F%2BAeqm0VIfGIqJ%2BCkLKSd3DLKnhGK9syqirQxfqqyV0CXmgyeSC%2FYi1YevpeM3ZOQpXXRCvvt8%2Bde%2B%2BLPSDqEnOr2hi8p4Vr96EIlkdYazU9t8ACRGzmcPvGqH4HMwJF2YQJI5sj3lp3VNrybo6UDjAkwSt6wasHxaP3KyfJiNo8KViyLStEwVOuhtaOeeqZ1jwVJWNRjjZw%2BkZ9yqQOW71Nzlayu67lJ699rpK1GqY39%2FzCwkNXBBjqkASk033e1Cd4Aew1enkWmT%2FuFdqiDw9Ir6rTpNU3zWYnx4zRgtfAKwvif8PWVpL64vt4gzmeDh4R4jNsslsp%2BIRE2%2B9Es67%2B%2B0aDqzM%2FwwT2ByYNZtFYTAnM9wmta%2Btx23MeSbQNv3RUJNGRCg6ciGwCuU1KmiTAQizrpJ7fKsHCtnSQpe3QjdP6e4Ii8qwpd2RHsGyX8ZgwXU11UqCCPGIGwC9LU&X-Amz-Signature=5c588726441e547924edc5f02095bd227f6dd84fc022227499e778014f5c7272&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRG75KGK%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd9s4l4j5C0dv8jSUBfHL6pgd0lzhpD8qrO%2Bs6YNo3RwIhAMT7%2FV9VaWaYV6wCt5X8kNEqbqtOpiz%2BLmUUlZb%2B2%2FMnKv8DCFYQABoMNjM3NDIzMTgzODA1Igwdrb%2FzuJ1uswa%2Bw94q3AM2eiLei%2FQCqXSKbT9LUfmQpBGoXKm15PignYKZkLYUOzpZHtL2b0pAOLHqXwPt%2F5prcz8HJr6njkBZd%2BVlnDrlJhsN%2BjnNkW7pihCEs3LzbHCVgju4ck4lCFHt6zqytokcWssJ5BskQzSnN%2BbT4yhRrvmVQFb9NU1KsrfY1HxUKk5POUwfolO%2BmVT49itcI%2FgdkGu9bbiZ7dMgXcDmZVMndJzDXv1un2kVa7RpvabtcoSvH6FYbB3xysaQHmk0swAJCfponotAsTlQnoV7IkmXd3HmUsPbcUEOsVrVNzRgAb94rWJHkzd%2FlZZaO65jQU%2F%2FXmmI8MJB6O6B4Zvz8l64bOSNqTUoPnH6Tc50c5Ab5fOPYOatmz9%2B%2BprnsJvo5wqWzot6r02k7Hm%2F%2BAeqm0VIfGIqJ%2BCkLKSd3DLKnhGK9syqirQxfqqyV0CXmgyeSC%2FYi1YevpeM3ZOQpXXRCvvt8%2Bde%2B%2BLPSDqEnOr2hi8p4Vr96EIlkdYazU9t8ACRGzmcPvGqH4HMwJF2YQJI5sj3lp3VNrybo6UDjAkwSt6wasHxaP3KyfJiNo8KViyLStEwVOuhtaOeeqZ1jwVJWNRjjZw%2BkZ9yqQOW71Nzlayu67lJ699rpK1GqY39%2FzCwkNXBBjqkASk033e1Cd4Aew1enkWmT%2FuFdqiDw9Ir6rTpNU3zWYnx4zRgtfAKwvif8PWVpL64vt4gzmeDh4R4jNsslsp%2BIRE2%2B9Es67%2B%2B0aDqzM%2FwwT2ByYNZtFYTAnM9wmta%2Btx23MeSbQNv3RUJNGRCg6ciGwCuU1KmiTAQizrpJ7fKsHCtnSQpe3QjdP6e4Ii8qwpd2RHsGyX8ZgwXU11UqCCPGIGwC9LU&X-Amz-Signature=d117a4b119eacbdc52cfbf012748bfa38576c3b2fed1db663fecf878aa1a12ad&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRG75KGK%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd9s4l4j5C0dv8jSUBfHL6pgd0lzhpD8qrO%2Bs6YNo3RwIhAMT7%2FV9VaWaYV6wCt5X8kNEqbqtOpiz%2BLmUUlZb%2B2%2FMnKv8DCFYQABoMNjM3NDIzMTgzODA1Igwdrb%2FzuJ1uswa%2Bw94q3AM2eiLei%2FQCqXSKbT9LUfmQpBGoXKm15PignYKZkLYUOzpZHtL2b0pAOLHqXwPt%2F5prcz8HJr6njkBZd%2BVlnDrlJhsN%2BjnNkW7pihCEs3LzbHCVgju4ck4lCFHt6zqytokcWssJ5BskQzSnN%2BbT4yhRrvmVQFb9NU1KsrfY1HxUKk5POUwfolO%2BmVT49itcI%2FgdkGu9bbiZ7dMgXcDmZVMndJzDXv1un2kVa7RpvabtcoSvH6FYbB3xysaQHmk0swAJCfponotAsTlQnoV7IkmXd3HmUsPbcUEOsVrVNzRgAb94rWJHkzd%2FlZZaO65jQU%2F%2FXmmI8MJB6O6B4Zvz8l64bOSNqTUoPnH6Tc50c5Ab5fOPYOatmz9%2B%2BprnsJvo5wqWzot6r02k7Hm%2F%2BAeqm0VIfGIqJ%2BCkLKSd3DLKnhGK9syqirQxfqqyV0CXmgyeSC%2FYi1YevpeM3ZOQpXXRCvvt8%2Bde%2B%2BLPSDqEnOr2hi8p4Vr96EIlkdYazU9t8ACRGzmcPvGqH4HMwJF2YQJI5sj3lp3VNrybo6UDjAkwSt6wasHxaP3KyfJiNo8KViyLStEwVOuhtaOeeqZ1jwVJWNRjjZw%2BkZ9yqQOW71Nzlayu67lJ699rpK1GqY39%2FzCwkNXBBjqkASk033e1Cd4Aew1enkWmT%2FuFdqiDw9Ir6rTpNU3zWYnx4zRgtfAKwvif8PWVpL64vt4gzmeDh4R4jNsslsp%2BIRE2%2B9Es67%2B%2B0aDqzM%2FwwT2ByYNZtFYTAnM9wmta%2Btx23MeSbQNv3RUJNGRCg6ciGwCuU1KmiTAQizrpJ7fKsHCtnSQpe3QjdP6e4Ii8qwpd2RHsGyX8ZgwXU11UqCCPGIGwC9LU&X-Amz-Signature=66a8eb515fef6b91b404c0ede2df4039537912a6925ac2ba03efaaad811d2fe1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRG75KGK%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd9s4l4j5C0dv8jSUBfHL6pgd0lzhpD8qrO%2Bs6YNo3RwIhAMT7%2FV9VaWaYV6wCt5X8kNEqbqtOpiz%2BLmUUlZb%2B2%2FMnKv8DCFYQABoMNjM3NDIzMTgzODA1Igwdrb%2FzuJ1uswa%2Bw94q3AM2eiLei%2FQCqXSKbT9LUfmQpBGoXKm15PignYKZkLYUOzpZHtL2b0pAOLHqXwPt%2F5prcz8HJr6njkBZd%2BVlnDrlJhsN%2BjnNkW7pihCEs3LzbHCVgju4ck4lCFHt6zqytokcWssJ5BskQzSnN%2BbT4yhRrvmVQFb9NU1KsrfY1HxUKk5POUwfolO%2BmVT49itcI%2FgdkGu9bbiZ7dMgXcDmZVMndJzDXv1un2kVa7RpvabtcoSvH6FYbB3xysaQHmk0swAJCfponotAsTlQnoV7IkmXd3HmUsPbcUEOsVrVNzRgAb94rWJHkzd%2FlZZaO65jQU%2F%2FXmmI8MJB6O6B4Zvz8l64bOSNqTUoPnH6Tc50c5Ab5fOPYOatmz9%2B%2BprnsJvo5wqWzot6r02k7Hm%2F%2BAeqm0VIfGIqJ%2BCkLKSd3DLKnhGK9syqirQxfqqyV0CXmgyeSC%2FYi1YevpeM3ZOQpXXRCvvt8%2Bde%2B%2BLPSDqEnOr2hi8p4Vr96EIlkdYazU9t8ACRGzmcPvGqH4HMwJF2YQJI5sj3lp3VNrybo6UDjAkwSt6wasHxaP3KyfJiNo8KViyLStEwVOuhtaOeeqZ1jwVJWNRjjZw%2BkZ9yqQOW71Nzlayu67lJ699rpK1GqY39%2FzCwkNXBBjqkASk033e1Cd4Aew1enkWmT%2FuFdqiDw9Ir6rTpNU3zWYnx4zRgtfAKwvif8PWVpL64vt4gzmeDh4R4jNsslsp%2BIRE2%2B9Es67%2B%2B0aDqzM%2FwwT2ByYNZtFYTAnM9wmta%2Btx23MeSbQNv3RUJNGRCg6ciGwCuU1KmiTAQizrpJ7fKsHCtnSQpe3QjdP6e4Ii8qwpd2RHsGyX8ZgwXU11UqCCPGIGwC9LU&X-Amz-Signature=956a7ac744441c4c9c292fa8dd5f55926c84ce607bc9028e56fe24802971a420&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRG75KGK%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd9s4l4j5C0dv8jSUBfHL6pgd0lzhpD8qrO%2Bs6YNo3RwIhAMT7%2FV9VaWaYV6wCt5X8kNEqbqtOpiz%2BLmUUlZb%2B2%2FMnKv8DCFYQABoMNjM3NDIzMTgzODA1Igwdrb%2FzuJ1uswa%2Bw94q3AM2eiLei%2FQCqXSKbT9LUfmQpBGoXKm15PignYKZkLYUOzpZHtL2b0pAOLHqXwPt%2F5prcz8HJr6njkBZd%2BVlnDrlJhsN%2BjnNkW7pihCEs3LzbHCVgju4ck4lCFHt6zqytokcWssJ5BskQzSnN%2BbT4yhRrvmVQFb9NU1KsrfY1HxUKk5POUwfolO%2BmVT49itcI%2FgdkGu9bbiZ7dMgXcDmZVMndJzDXv1un2kVa7RpvabtcoSvH6FYbB3xysaQHmk0swAJCfponotAsTlQnoV7IkmXd3HmUsPbcUEOsVrVNzRgAb94rWJHkzd%2FlZZaO65jQU%2F%2FXmmI8MJB6O6B4Zvz8l64bOSNqTUoPnH6Tc50c5Ab5fOPYOatmz9%2B%2BprnsJvo5wqWzot6r02k7Hm%2F%2BAeqm0VIfGIqJ%2BCkLKSd3DLKnhGK9syqirQxfqqyV0CXmgyeSC%2FYi1YevpeM3ZOQpXXRCvvt8%2Bde%2B%2BLPSDqEnOr2hi8p4Vr96EIlkdYazU9t8ACRGzmcPvGqH4HMwJF2YQJI5sj3lp3VNrybo6UDjAkwSt6wasHxaP3KyfJiNo8KViyLStEwVOuhtaOeeqZ1jwVJWNRjjZw%2BkZ9yqQOW71Nzlayu67lJ699rpK1GqY39%2FzCwkNXBBjqkASk033e1Cd4Aew1enkWmT%2FuFdqiDw9Ir6rTpNU3zWYnx4zRgtfAKwvif8PWVpL64vt4gzmeDh4R4jNsslsp%2BIRE2%2B9Es67%2B%2B0aDqzM%2FwwT2ByYNZtFYTAnM9wmta%2Btx23MeSbQNv3RUJNGRCg6ciGwCuU1KmiTAQizrpJ7fKsHCtnSQpe3QjdP6e4Ii8qwpd2RHsGyX8ZgwXU11UqCCPGIGwC9LU&X-Amz-Signature=818df285c1fe373b284635fb0b0dd8201cdab28fd96527c66ef8743827f246a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRG75KGK%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd9s4l4j5C0dv8jSUBfHL6pgd0lzhpD8qrO%2Bs6YNo3RwIhAMT7%2FV9VaWaYV6wCt5X8kNEqbqtOpiz%2BLmUUlZb%2B2%2FMnKv8DCFYQABoMNjM3NDIzMTgzODA1Igwdrb%2FzuJ1uswa%2Bw94q3AM2eiLei%2FQCqXSKbT9LUfmQpBGoXKm15PignYKZkLYUOzpZHtL2b0pAOLHqXwPt%2F5prcz8HJr6njkBZd%2BVlnDrlJhsN%2BjnNkW7pihCEs3LzbHCVgju4ck4lCFHt6zqytokcWssJ5BskQzSnN%2BbT4yhRrvmVQFb9NU1KsrfY1HxUKk5POUwfolO%2BmVT49itcI%2FgdkGu9bbiZ7dMgXcDmZVMndJzDXv1un2kVa7RpvabtcoSvH6FYbB3xysaQHmk0swAJCfponotAsTlQnoV7IkmXd3HmUsPbcUEOsVrVNzRgAb94rWJHkzd%2FlZZaO65jQU%2F%2FXmmI8MJB6O6B4Zvz8l64bOSNqTUoPnH6Tc50c5Ab5fOPYOatmz9%2B%2BprnsJvo5wqWzot6r02k7Hm%2F%2BAeqm0VIfGIqJ%2BCkLKSd3DLKnhGK9syqirQxfqqyV0CXmgyeSC%2FYi1YevpeM3ZOQpXXRCvvt8%2Bde%2B%2BLPSDqEnOr2hi8p4Vr96EIlkdYazU9t8ACRGzmcPvGqH4HMwJF2YQJI5sj3lp3VNrybo6UDjAkwSt6wasHxaP3KyfJiNo8KViyLStEwVOuhtaOeeqZ1jwVJWNRjjZw%2BkZ9yqQOW71Nzlayu67lJ699rpK1GqY39%2FzCwkNXBBjqkASk033e1Cd4Aew1enkWmT%2FuFdqiDw9Ir6rTpNU3zWYnx4zRgtfAKwvif8PWVpL64vt4gzmeDh4R4jNsslsp%2BIRE2%2B9Es67%2B%2B0aDqzM%2FwwT2ByYNZtFYTAnM9wmta%2Btx23MeSbQNv3RUJNGRCg6ciGwCuU1KmiTAQizrpJ7fKsHCtnSQpe3QjdP6e4Ii8qwpd2RHsGyX8ZgwXU11UqCCPGIGwC9LU&X-Amz-Signature=2e67e09e9b57b61866c28f40deb673e77ef1fbab263a82594f72509d641cca45&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRG75KGK%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd9s4l4j5C0dv8jSUBfHL6pgd0lzhpD8qrO%2Bs6YNo3RwIhAMT7%2FV9VaWaYV6wCt5X8kNEqbqtOpiz%2BLmUUlZb%2B2%2FMnKv8DCFYQABoMNjM3NDIzMTgzODA1Igwdrb%2FzuJ1uswa%2Bw94q3AM2eiLei%2FQCqXSKbT9LUfmQpBGoXKm15PignYKZkLYUOzpZHtL2b0pAOLHqXwPt%2F5prcz8HJr6njkBZd%2BVlnDrlJhsN%2BjnNkW7pihCEs3LzbHCVgju4ck4lCFHt6zqytokcWssJ5BskQzSnN%2BbT4yhRrvmVQFb9NU1KsrfY1HxUKk5POUwfolO%2BmVT49itcI%2FgdkGu9bbiZ7dMgXcDmZVMndJzDXv1un2kVa7RpvabtcoSvH6FYbB3xysaQHmk0swAJCfponotAsTlQnoV7IkmXd3HmUsPbcUEOsVrVNzRgAb94rWJHkzd%2FlZZaO65jQU%2F%2FXmmI8MJB6O6B4Zvz8l64bOSNqTUoPnH6Tc50c5Ab5fOPYOatmz9%2B%2BprnsJvo5wqWzot6r02k7Hm%2F%2BAeqm0VIfGIqJ%2BCkLKSd3DLKnhGK9syqirQxfqqyV0CXmgyeSC%2FYi1YevpeM3ZOQpXXRCvvt8%2Bde%2B%2BLPSDqEnOr2hi8p4Vr96EIlkdYazU9t8ACRGzmcPvGqH4HMwJF2YQJI5sj3lp3VNrybo6UDjAkwSt6wasHxaP3KyfJiNo8KViyLStEwVOuhtaOeeqZ1jwVJWNRjjZw%2BkZ9yqQOW71Nzlayu67lJ699rpK1GqY39%2FzCwkNXBBjqkASk033e1Cd4Aew1enkWmT%2FuFdqiDw9Ir6rTpNU3zWYnx4zRgtfAKwvif8PWVpL64vt4gzmeDh4R4jNsslsp%2BIRE2%2B9Es67%2B%2B0aDqzM%2FwwT2ByYNZtFYTAnM9wmta%2Btx23MeSbQNv3RUJNGRCg6ciGwCuU1KmiTAQizrpJ7fKsHCtnSQpe3QjdP6e4Ii8qwpd2RHsGyX8ZgwXU11UqCCPGIGwC9LU&X-Amz-Signature=4a9090d54de2c20e14beea6e8a24d0b1c784114cda9f586ae4e5211578f4c51f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
