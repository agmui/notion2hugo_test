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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXSUOWXJ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFPHI3NytJhpycGCOavfR8bXID7TBTExjHL7LYnmns3gAiB5RnwPH%2BAv7xgNiNqgXPP7j0PLjvmLVGpYlwX5WDvBYyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM3LWb27%2FW5bcng9ctKtwD5uOXkTABYk5xbPSzZIqN9ZCZ%2Fh2tf7w45q1DDkJzbj%2Bz1AZ04ooR6LD1q5uqAjqK7SjC4nu3F6b%2BvoEF5pL%2Bp2mvxaUpK9D76d%2F5220KsKC5N8uVqFkaMaJBZmkvrf57J76oZmUaO%2FzSvFyr1PWHHU6GOqkufPBO5t4MbeVX7gD3EYdpBtMOxr9EC7yp9dZdKl8WWkJgLVjUQJdoYXgmmvlOKACMlABdDDHmJuUqmm%2BT5Er1BKszzGmXNJZgJZ5xRNnkOKQ1G7PLAGR4W6OAB3UDyobqsgbU7mgANMmT8uCXW0rR95UfjddsFz%2BMRzbUQ7sT5ivmhFgYvwhcEYEEsCE3ONTnlFOMr5JXGVOAYGzD6UzaOLfr1XsSst%2FKAj3ZIAIdjkmwkCUA0S81SIFiK7qk%2BSFlOnnrAJ%2B9XhZUOvJaa7w2lIEaAhj5mjs0NHQ9SPvWkK0MtUQSL90IoPMzanMjEA6P%2BMEYDg%2FlJ%2BEKiGvWvGEYvDT8cSuqYQ%2BxJIWRFM4eqTWuhdPHx%2Fu3imRz7q28uMCVpmgNdqL6ajO40A5GXX8UaOrCiPr9xJoszAy7Xxh2ZYOIA8%2FrHbDl6SXKTYyc7LYfmV6NOfrd4faIoHmD%2Fa188%2FyyEsE4Ap8w%2FIyNvQY6pgG8ixOdwm75VNTrQPAhU5bMOJb1IMk5nsPvGfwpomOwOz6JcBtOjA3VWex57tHsttSKJkzmC5NGUcOIP5UsTHtId95PK3PulPyzZcItzlAQtSnl4JDe%2F%2B%2FzcEbF2x%2FVAH5mMrDRM17hlLuNc33JPqu%2BH%2BNA2Jgw84Ddz2YP8wIHbwC7lfl9BNfIPxWK953KsSSUXcG8wjUBCtpTJqx5abJ1NvSaO5Lu&X-Amz-Signature=3fd5924a6ec13a4844f3914f827ad6ccecb405c481f8a9828859ebcee2b06c3f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXSUOWXJ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFPHI3NytJhpycGCOavfR8bXID7TBTExjHL7LYnmns3gAiB5RnwPH%2BAv7xgNiNqgXPP7j0PLjvmLVGpYlwX5WDvBYyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM3LWb27%2FW5bcng9ctKtwD5uOXkTABYk5xbPSzZIqN9ZCZ%2Fh2tf7w45q1DDkJzbj%2Bz1AZ04ooR6LD1q5uqAjqK7SjC4nu3F6b%2BvoEF5pL%2Bp2mvxaUpK9D76d%2F5220KsKC5N8uVqFkaMaJBZmkvrf57J76oZmUaO%2FzSvFyr1PWHHU6GOqkufPBO5t4MbeVX7gD3EYdpBtMOxr9EC7yp9dZdKl8WWkJgLVjUQJdoYXgmmvlOKACMlABdDDHmJuUqmm%2BT5Er1BKszzGmXNJZgJZ5xRNnkOKQ1G7PLAGR4W6OAB3UDyobqsgbU7mgANMmT8uCXW0rR95UfjddsFz%2BMRzbUQ7sT5ivmhFgYvwhcEYEEsCE3ONTnlFOMr5JXGVOAYGzD6UzaOLfr1XsSst%2FKAj3ZIAIdjkmwkCUA0S81SIFiK7qk%2BSFlOnnrAJ%2B9XhZUOvJaa7w2lIEaAhj5mjs0NHQ9SPvWkK0MtUQSL90IoPMzanMjEA6P%2BMEYDg%2FlJ%2BEKiGvWvGEYvDT8cSuqYQ%2BxJIWRFM4eqTWuhdPHx%2Fu3imRz7q28uMCVpmgNdqL6ajO40A5GXX8UaOrCiPr9xJoszAy7Xxh2ZYOIA8%2FrHbDl6SXKTYyc7LYfmV6NOfrd4faIoHmD%2Fa188%2FyyEsE4Ap8w%2FIyNvQY6pgG8ixOdwm75VNTrQPAhU5bMOJb1IMk5nsPvGfwpomOwOz6JcBtOjA3VWex57tHsttSKJkzmC5NGUcOIP5UsTHtId95PK3PulPyzZcItzlAQtSnl4JDe%2F%2B%2FzcEbF2x%2FVAH5mMrDRM17hlLuNc33JPqu%2BH%2BNA2Jgw84Ddz2YP8wIHbwC7lfl9BNfIPxWK953KsSSUXcG8wjUBCtpTJqx5abJ1NvSaO5Lu&X-Amz-Signature=b47b2b77a473ef3a5e988cad6a96377052aff18c462f70dc1f6a5e998cce467f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXSUOWXJ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFPHI3NytJhpycGCOavfR8bXID7TBTExjHL7LYnmns3gAiB5RnwPH%2BAv7xgNiNqgXPP7j0PLjvmLVGpYlwX5WDvBYyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM3LWb27%2FW5bcng9ctKtwD5uOXkTABYk5xbPSzZIqN9ZCZ%2Fh2tf7w45q1DDkJzbj%2Bz1AZ04ooR6LD1q5uqAjqK7SjC4nu3F6b%2BvoEF5pL%2Bp2mvxaUpK9D76d%2F5220KsKC5N8uVqFkaMaJBZmkvrf57J76oZmUaO%2FzSvFyr1PWHHU6GOqkufPBO5t4MbeVX7gD3EYdpBtMOxr9EC7yp9dZdKl8WWkJgLVjUQJdoYXgmmvlOKACMlABdDDHmJuUqmm%2BT5Er1BKszzGmXNJZgJZ5xRNnkOKQ1G7PLAGR4W6OAB3UDyobqsgbU7mgANMmT8uCXW0rR95UfjddsFz%2BMRzbUQ7sT5ivmhFgYvwhcEYEEsCE3ONTnlFOMr5JXGVOAYGzD6UzaOLfr1XsSst%2FKAj3ZIAIdjkmwkCUA0S81SIFiK7qk%2BSFlOnnrAJ%2B9XhZUOvJaa7w2lIEaAhj5mjs0NHQ9SPvWkK0MtUQSL90IoPMzanMjEA6P%2BMEYDg%2FlJ%2BEKiGvWvGEYvDT8cSuqYQ%2BxJIWRFM4eqTWuhdPHx%2Fu3imRz7q28uMCVpmgNdqL6ajO40A5GXX8UaOrCiPr9xJoszAy7Xxh2ZYOIA8%2FrHbDl6SXKTYyc7LYfmV6NOfrd4faIoHmD%2Fa188%2FyyEsE4Ap8w%2FIyNvQY6pgG8ixOdwm75VNTrQPAhU5bMOJb1IMk5nsPvGfwpomOwOz6JcBtOjA3VWex57tHsttSKJkzmC5NGUcOIP5UsTHtId95PK3PulPyzZcItzlAQtSnl4JDe%2F%2B%2FzcEbF2x%2FVAH5mMrDRM17hlLuNc33JPqu%2BH%2BNA2Jgw84Ddz2YP8wIHbwC7lfl9BNfIPxWK953KsSSUXcG8wjUBCtpTJqx5abJ1NvSaO5Lu&X-Amz-Signature=3156910e557d3d1f9c24485392574f1e33a93bfce729479894acc08a73e49ae5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXSUOWXJ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFPHI3NytJhpycGCOavfR8bXID7TBTExjHL7LYnmns3gAiB5RnwPH%2BAv7xgNiNqgXPP7j0PLjvmLVGpYlwX5WDvBYyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM3LWb27%2FW5bcng9ctKtwD5uOXkTABYk5xbPSzZIqN9ZCZ%2Fh2tf7w45q1DDkJzbj%2Bz1AZ04ooR6LD1q5uqAjqK7SjC4nu3F6b%2BvoEF5pL%2Bp2mvxaUpK9D76d%2F5220KsKC5N8uVqFkaMaJBZmkvrf57J76oZmUaO%2FzSvFyr1PWHHU6GOqkufPBO5t4MbeVX7gD3EYdpBtMOxr9EC7yp9dZdKl8WWkJgLVjUQJdoYXgmmvlOKACMlABdDDHmJuUqmm%2BT5Er1BKszzGmXNJZgJZ5xRNnkOKQ1G7PLAGR4W6OAB3UDyobqsgbU7mgANMmT8uCXW0rR95UfjddsFz%2BMRzbUQ7sT5ivmhFgYvwhcEYEEsCE3ONTnlFOMr5JXGVOAYGzD6UzaOLfr1XsSst%2FKAj3ZIAIdjkmwkCUA0S81SIFiK7qk%2BSFlOnnrAJ%2B9XhZUOvJaa7w2lIEaAhj5mjs0NHQ9SPvWkK0MtUQSL90IoPMzanMjEA6P%2BMEYDg%2FlJ%2BEKiGvWvGEYvDT8cSuqYQ%2BxJIWRFM4eqTWuhdPHx%2Fu3imRz7q28uMCVpmgNdqL6ajO40A5GXX8UaOrCiPr9xJoszAy7Xxh2ZYOIA8%2FrHbDl6SXKTYyc7LYfmV6NOfrd4faIoHmD%2Fa188%2FyyEsE4Ap8w%2FIyNvQY6pgG8ixOdwm75VNTrQPAhU5bMOJb1IMk5nsPvGfwpomOwOz6JcBtOjA3VWex57tHsttSKJkzmC5NGUcOIP5UsTHtId95PK3PulPyzZcItzlAQtSnl4JDe%2F%2B%2FzcEbF2x%2FVAH5mMrDRM17hlLuNc33JPqu%2BH%2BNA2Jgw84Ddz2YP8wIHbwC7lfl9BNfIPxWK953KsSSUXcG8wjUBCtpTJqx5abJ1NvSaO5Lu&X-Amz-Signature=a3229143b092f9c04b295ef10044cbcdcf167d74ad698b54b0c779392e71212b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXSUOWXJ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFPHI3NytJhpycGCOavfR8bXID7TBTExjHL7LYnmns3gAiB5RnwPH%2BAv7xgNiNqgXPP7j0PLjvmLVGpYlwX5WDvBYyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM3LWb27%2FW5bcng9ctKtwD5uOXkTABYk5xbPSzZIqN9ZCZ%2Fh2tf7w45q1DDkJzbj%2Bz1AZ04ooR6LD1q5uqAjqK7SjC4nu3F6b%2BvoEF5pL%2Bp2mvxaUpK9D76d%2F5220KsKC5N8uVqFkaMaJBZmkvrf57J76oZmUaO%2FzSvFyr1PWHHU6GOqkufPBO5t4MbeVX7gD3EYdpBtMOxr9EC7yp9dZdKl8WWkJgLVjUQJdoYXgmmvlOKACMlABdDDHmJuUqmm%2BT5Er1BKszzGmXNJZgJZ5xRNnkOKQ1G7PLAGR4W6OAB3UDyobqsgbU7mgANMmT8uCXW0rR95UfjddsFz%2BMRzbUQ7sT5ivmhFgYvwhcEYEEsCE3ONTnlFOMr5JXGVOAYGzD6UzaOLfr1XsSst%2FKAj3ZIAIdjkmwkCUA0S81SIFiK7qk%2BSFlOnnrAJ%2B9XhZUOvJaa7w2lIEaAhj5mjs0NHQ9SPvWkK0MtUQSL90IoPMzanMjEA6P%2BMEYDg%2FlJ%2BEKiGvWvGEYvDT8cSuqYQ%2BxJIWRFM4eqTWuhdPHx%2Fu3imRz7q28uMCVpmgNdqL6ajO40A5GXX8UaOrCiPr9xJoszAy7Xxh2ZYOIA8%2FrHbDl6SXKTYyc7LYfmV6NOfrd4faIoHmD%2Fa188%2FyyEsE4Ap8w%2FIyNvQY6pgG8ixOdwm75VNTrQPAhU5bMOJb1IMk5nsPvGfwpomOwOz6JcBtOjA3VWex57tHsttSKJkzmC5NGUcOIP5UsTHtId95PK3PulPyzZcItzlAQtSnl4JDe%2F%2B%2FzcEbF2x%2FVAH5mMrDRM17hlLuNc33JPqu%2BH%2BNA2Jgw84Ddz2YP8wIHbwC7lfl9BNfIPxWK953KsSSUXcG8wjUBCtpTJqx5abJ1NvSaO5Lu&X-Amz-Signature=e0dc984ddb3566d24a41305a2a2217e1312f1e18e7bdeb38ff6c04dc0b337c3c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXSUOWXJ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFPHI3NytJhpycGCOavfR8bXID7TBTExjHL7LYnmns3gAiB5RnwPH%2BAv7xgNiNqgXPP7j0PLjvmLVGpYlwX5WDvBYyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM3LWb27%2FW5bcng9ctKtwD5uOXkTABYk5xbPSzZIqN9ZCZ%2Fh2tf7w45q1DDkJzbj%2Bz1AZ04ooR6LD1q5uqAjqK7SjC4nu3F6b%2BvoEF5pL%2Bp2mvxaUpK9D76d%2F5220KsKC5N8uVqFkaMaJBZmkvrf57J76oZmUaO%2FzSvFyr1PWHHU6GOqkufPBO5t4MbeVX7gD3EYdpBtMOxr9EC7yp9dZdKl8WWkJgLVjUQJdoYXgmmvlOKACMlABdDDHmJuUqmm%2BT5Er1BKszzGmXNJZgJZ5xRNnkOKQ1G7PLAGR4W6OAB3UDyobqsgbU7mgANMmT8uCXW0rR95UfjddsFz%2BMRzbUQ7sT5ivmhFgYvwhcEYEEsCE3ONTnlFOMr5JXGVOAYGzD6UzaOLfr1XsSst%2FKAj3ZIAIdjkmwkCUA0S81SIFiK7qk%2BSFlOnnrAJ%2B9XhZUOvJaa7w2lIEaAhj5mjs0NHQ9SPvWkK0MtUQSL90IoPMzanMjEA6P%2BMEYDg%2FlJ%2BEKiGvWvGEYvDT8cSuqYQ%2BxJIWRFM4eqTWuhdPHx%2Fu3imRz7q28uMCVpmgNdqL6ajO40A5GXX8UaOrCiPr9xJoszAy7Xxh2ZYOIA8%2FrHbDl6SXKTYyc7LYfmV6NOfrd4faIoHmD%2Fa188%2FyyEsE4Ap8w%2FIyNvQY6pgG8ixOdwm75VNTrQPAhU5bMOJb1IMk5nsPvGfwpomOwOz6JcBtOjA3VWex57tHsttSKJkzmC5NGUcOIP5UsTHtId95PK3PulPyzZcItzlAQtSnl4JDe%2F%2B%2FzcEbF2x%2FVAH5mMrDRM17hlLuNc33JPqu%2BH%2BNA2Jgw84Ddz2YP8wIHbwC7lfl9BNfIPxWK953KsSSUXcG8wjUBCtpTJqx5abJ1NvSaO5Lu&X-Amz-Signature=bd4887486845692ec862eb326d3400be1016fcc3cc0a2f4c1a3412d941ece107&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXSUOWXJ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFPHI3NytJhpycGCOavfR8bXID7TBTExjHL7LYnmns3gAiB5RnwPH%2BAv7xgNiNqgXPP7j0PLjvmLVGpYlwX5WDvBYyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM3LWb27%2FW5bcng9ctKtwD5uOXkTABYk5xbPSzZIqN9ZCZ%2Fh2tf7w45q1DDkJzbj%2Bz1AZ04ooR6LD1q5uqAjqK7SjC4nu3F6b%2BvoEF5pL%2Bp2mvxaUpK9D76d%2F5220KsKC5N8uVqFkaMaJBZmkvrf57J76oZmUaO%2FzSvFyr1PWHHU6GOqkufPBO5t4MbeVX7gD3EYdpBtMOxr9EC7yp9dZdKl8WWkJgLVjUQJdoYXgmmvlOKACMlABdDDHmJuUqmm%2BT5Er1BKszzGmXNJZgJZ5xRNnkOKQ1G7PLAGR4W6OAB3UDyobqsgbU7mgANMmT8uCXW0rR95UfjddsFz%2BMRzbUQ7sT5ivmhFgYvwhcEYEEsCE3ONTnlFOMr5JXGVOAYGzD6UzaOLfr1XsSst%2FKAj3ZIAIdjkmwkCUA0S81SIFiK7qk%2BSFlOnnrAJ%2B9XhZUOvJaa7w2lIEaAhj5mjs0NHQ9SPvWkK0MtUQSL90IoPMzanMjEA6P%2BMEYDg%2FlJ%2BEKiGvWvGEYvDT8cSuqYQ%2BxJIWRFM4eqTWuhdPHx%2Fu3imRz7q28uMCVpmgNdqL6ajO40A5GXX8UaOrCiPr9xJoszAy7Xxh2ZYOIA8%2FrHbDl6SXKTYyc7LYfmV6NOfrd4faIoHmD%2Fa188%2FyyEsE4Ap8w%2FIyNvQY6pgG8ixOdwm75VNTrQPAhU5bMOJb1IMk5nsPvGfwpomOwOz6JcBtOjA3VWex57tHsttSKJkzmC5NGUcOIP5UsTHtId95PK3PulPyzZcItzlAQtSnl4JDe%2F%2B%2FzcEbF2x%2FVAH5mMrDRM17hlLuNc33JPqu%2BH%2BNA2Jgw84Ddz2YP8wIHbwC7lfl9BNfIPxWK953KsSSUXcG8wjUBCtpTJqx5abJ1NvSaO5Lu&X-Amz-Signature=b863cc65e8f5289b5a6166cb53b6b3b4fa8a170148a8e5fbd058b44999effbf6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXSUOWXJ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFPHI3NytJhpycGCOavfR8bXID7TBTExjHL7LYnmns3gAiB5RnwPH%2BAv7xgNiNqgXPP7j0PLjvmLVGpYlwX5WDvBYyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM3LWb27%2FW5bcng9ctKtwD5uOXkTABYk5xbPSzZIqN9ZCZ%2Fh2tf7w45q1DDkJzbj%2Bz1AZ04ooR6LD1q5uqAjqK7SjC4nu3F6b%2BvoEF5pL%2Bp2mvxaUpK9D76d%2F5220KsKC5N8uVqFkaMaJBZmkvrf57J76oZmUaO%2FzSvFyr1PWHHU6GOqkufPBO5t4MbeVX7gD3EYdpBtMOxr9EC7yp9dZdKl8WWkJgLVjUQJdoYXgmmvlOKACMlABdDDHmJuUqmm%2BT5Er1BKszzGmXNJZgJZ5xRNnkOKQ1G7PLAGR4W6OAB3UDyobqsgbU7mgANMmT8uCXW0rR95UfjddsFz%2BMRzbUQ7sT5ivmhFgYvwhcEYEEsCE3ONTnlFOMr5JXGVOAYGzD6UzaOLfr1XsSst%2FKAj3ZIAIdjkmwkCUA0S81SIFiK7qk%2BSFlOnnrAJ%2B9XhZUOvJaa7w2lIEaAhj5mjs0NHQ9SPvWkK0MtUQSL90IoPMzanMjEA6P%2BMEYDg%2FlJ%2BEKiGvWvGEYvDT8cSuqYQ%2BxJIWRFM4eqTWuhdPHx%2Fu3imRz7q28uMCVpmgNdqL6ajO40A5GXX8UaOrCiPr9xJoszAy7Xxh2ZYOIA8%2FrHbDl6SXKTYyc7LYfmV6NOfrd4faIoHmD%2Fa188%2FyyEsE4Ap8w%2FIyNvQY6pgG8ixOdwm75VNTrQPAhU5bMOJb1IMk5nsPvGfwpomOwOz6JcBtOjA3VWex57tHsttSKJkzmC5NGUcOIP5UsTHtId95PK3PulPyzZcItzlAQtSnl4JDe%2F%2B%2FzcEbF2x%2FVAH5mMrDRM17hlLuNc33JPqu%2BH%2BNA2Jgw84Ddz2YP8wIHbwC7lfl9BNfIPxWK953KsSSUXcG8wjUBCtpTJqx5abJ1NvSaO5Lu&X-Amz-Signature=a18e1597fafc07c2a618efd09b676b7f8d318e01df0c89d5f7be031f8b6ebfa3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
