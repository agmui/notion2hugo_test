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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UBGX2KL%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T051026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ypFw0ykz0KZIRgKVyGdcjB%2FRTfqUko1ldyoqB%2BSVGAIhAMQ0jYjjGeL37gP9LF2NMdPY6nkTOP7m%2FEoVD9PM6bCyKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaOFz7ew7mZZll8oIq3AMVv6P%2BcZUOUy9Bm61e5i46W2%2Bd94SJ9iTeGZjZrmFQxpBOyvgUaApUjFSGb1h4IEr1KMTlCJ5hZaTZPVaQj39M%2FS866f5qP4gPFFX7U6ZvYthKBRYtk8%2FHztFVoh7imXwSTyleQnzgfjgYRc10q38gH03T51KGuc51ISLgp6CuGt8Ih1iTv%2BtZGBSgfpQ8Fn22WHP4xX0nqc%2Fos13WDBMDbdrJVOYlZEd3GxFAnEs1WTxVZJemotBfjBgJlig5NyS8MjEpeoTF5PRmxKxQ5Ekd23D7xPmUaJ5FYRqj0AQe2%2F0IIoHo%2BRWE%2BXpSEKGC0w%2Bu2xun%2BL%2FugKTTLeenC2UnSVKab22W5DslNVRAns54uz%2BveSL%2FJkmgZIjK%2BtyTM0UfStlyZauIVqdbAt1XHv5aw5HgYz40CVsuTnH%2FLI35wgfC5nMK4ub21WyZtmlYcwSRSFoG%2BEUjkmJhx4bFKVoWpZwJ42IrFf%2Fu37igf5S2jHvkf1RY77dS5wTfFUOAkA2hXZQYlPSafNOo%2BJzaLz7PqoE%2BGz%2FXFvmR7MhrICH7XVvnWl3qzAAEnqRul1gVG491C5%2BgNPYRT96WIdE96MZTG3OYU0y22tG%2Fmp5DGf7l3DanwscvGqs3g0dlQzDgs87CBjqkAVX3o7fJNsrmEZrhv1WO29F3PkiClZk1fcj2GgrH5vA1pzUAM6vz7awXQ%2FoY%2FLQMDfmh4JfnZUoY3VLH%2F9HtaAnC5NafztsNX7VCqa73lsX1Yn2DU2eQ4lF%2B7KqgdXZPVin65f4WSGlK3jUd98o942akFhNpoMp7V8yIkEsxANrFbVLcOuZS7B1KDa9jTDs4hlJ4zRy1KDUOt4q4ke70cku%2B7Wn%2B&X-Amz-Signature=927a496f2e52e95f83613b8f6e6e9d72e1e23a8b7c5b197a3369cf2d606d7c6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UBGX2KL%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T051026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ypFw0ykz0KZIRgKVyGdcjB%2FRTfqUko1ldyoqB%2BSVGAIhAMQ0jYjjGeL37gP9LF2NMdPY6nkTOP7m%2FEoVD9PM6bCyKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaOFz7ew7mZZll8oIq3AMVv6P%2BcZUOUy9Bm61e5i46W2%2Bd94SJ9iTeGZjZrmFQxpBOyvgUaApUjFSGb1h4IEr1KMTlCJ5hZaTZPVaQj39M%2FS866f5qP4gPFFX7U6ZvYthKBRYtk8%2FHztFVoh7imXwSTyleQnzgfjgYRc10q38gH03T51KGuc51ISLgp6CuGt8Ih1iTv%2BtZGBSgfpQ8Fn22WHP4xX0nqc%2Fos13WDBMDbdrJVOYlZEd3GxFAnEs1WTxVZJemotBfjBgJlig5NyS8MjEpeoTF5PRmxKxQ5Ekd23D7xPmUaJ5FYRqj0AQe2%2F0IIoHo%2BRWE%2BXpSEKGC0w%2Bu2xun%2BL%2FugKTTLeenC2UnSVKab22W5DslNVRAns54uz%2BveSL%2FJkmgZIjK%2BtyTM0UfStlyZauIVqdbAt1XHv5aw5HgYz40CVsuTnH%2FLI35wgfC5nMK4ub21WyZtmlYcwSRSFoG%2BEUjkmJhx4bFKVoWpZwJ42IrFf%2Fu37igf5S2jHvkf1RY77dS5wTfFUOAkA2hXZQYlPSafNOo%2BJzaLz7PqoE%2BGz%2FXFvmR7MhrICH7XVvnWl3qzAAEnqRul1gVG491C5%2BgNPYRT96WIdE96MZTG3OYU0y22tG%2Fmp5DGf7l3DanwscvGqs3g0dlQzDgs87CBjqkAVX3o7fJNsrmEZrhv1WO29F3PkiClZk1fcj2GgrH5vA1pzUAM6vz7awXQ%2FoY%2FLQMDfmh4JfnZUoY3VLH%2F9HtaAnC5NafztsNX7VCqa73lsX1Yn2DU2eQ4lF%2B7KqgdXZPVin65f4WSGlK3jUd98o942akFhNpoMp7V8yIkEsxANrFbVLcOuZS7B1KDa9jTDs4hlJ4zRy1KDUOt4q4ke70cku%2B7Wn%2B&X-Amz-Signature=e40071f5a96167e39cc0916e8c1cfe4687da42e5cde995439adde382610d6a5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UBGX2KL%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T051026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ypFw0ykz0KZIRgKVyGdcjB%2FRTfqUko1ldyoqB%2BSVGAIhAMQ0jYjjGeL37gP9LF2NMdPY6nkTOP7m%2FEoVD9PM6bCyKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaOFz7ew7mZZll8oIq3AMVv6P%2BcZUOUy9Bm61e5i46W2%2Bd94SJ9iTeGZjZrmFQxpBOyvgUaApUjFSGb1h4IEr1KMTlCJ5hZaTZPVaQj39M%2FS866f5qP4gPFFX7U6ZvYthKBRYtk8%2FHztFVoh7imXwSTyleQnzgfjgYRc10q38gH03T51KGuc51ISLgp6CuGt8Ih1iTv%2BtZGBSgfpQ8Fn22WHP4xX0nqc%2Fos13WDBMDbdrJVOYlZEd3GxFAnEs1WTxVZJemotBfjBgJlig5NyS8MjEpeoTF5PRmxKxQ5Ekd23D7xPmUaJ5FYRqj0AQe2%2F0IIoHo%2BRWE%2BXpSEKGC0w%2Bu2xun%2BL%2FugKTTLeenC2UnSVKab22W5DslNVRAns54uz%2BveSL%2FJkmgZIjK%2BtyTM0UfStlyZauIVqdbAt1XHv5aw5HgYz40CVsuTnH%2FLI35wgfC5nMK4ub21WyZtmlYcwSRSFoG%2BEUjkmJhx4bFKVoWpZwJ42IrFf%2Fu37igf5S2jHvkf1RY77dS5wTfFUOAkA2hXZQYlPSafNOo%2BJzaLz7PqoE%2BGz%2FXFvmR7MhrICH7XVvnWl3qzAAEnqRul1gVG491C5%2BgNPYRT96WIdE96MZTG3OYU0y22tG%2Fmp5DGf7l3DanwscvGqs3g0dlQzDgs87CBjqkAVX3o7fJNsrmEZrhv1WO29F3PkiClZk1fcj2GgrH5vA1pzUAM6vz7awXQ%2FoY%2FLQMDfmh4JfnZUoY3VLH%2F9HtaAnC5NafztsNX7VCqa73lsX1Yn2DU2eQ4lF%2B7KqgdXZPVin65f4WSGlK3jUd98o942akFhNpoMp7V8yIkEsxANrFbVLcOuZS7B1KDa9jTDs4hlJ4zRy1KDUOt4q4ke70cku%2B7Wn%2B&X-Amz-Signature=802764642dfeb0d5ecae95d48961fc9973e8d26a23e65403b9e76feaeebacc53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UBGX2KL%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T051026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ypFw0ykz0KZIRgKVyGdcjB%2FRTfqUko1ldyoqB%2BSVGAIhAMQ0jYjjGeL37gP9LF2NMdPY6nkTOP7m%2FEoVD9PM6bCyKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaOFz7ew7mZZll8oIq3AMVv6P%2BcZUOUy9Bm61e5i46W2%2Bd94SJ9iTeGZjZrmFQxpBOyvgUaApUjFSGb1h4IEr1KMTlCJ5hZaTZPVaQj39M%2FS866f5qP4gPFFX7U6ZvYthKBRYtk8%2FHztFVoh7imXwSTyleQnzgfjgYRc10q38gH03T51KGuc51ISLgp6CuGt8Ih1iTv%2BtZGBSgfpQ8Fn22WHP4xX0nqc%2Fos13WDBMDbdrJVOYlZEd3GxFAnEs1WTxVZJemotBfjBgJlig5NyS8MjEpeoTF5PRmxKxQ5Ekd23D7xPmUaJ5FYRqj0AQe2%2F0IIoHo%2BRWE%2BXpSEKGC0w%2Bu2xun%2BL%2FugKTTLeenC2UnSVKab22W5DslNVRAns54uz%2BveSL%2FJkmgZIjK%2BtyTM0UfStlyZauIVqdbAt1XHv5aw5HgYz40CVsuTnH%2FLI35wgfC5nMK4ub21WyZtmlYcwSRSFoG%2BEUjkmJhx4bFKVoWpZwJ42IrFf%2Fu37igf5S2jHvkf1RY77dS5wTfFUOAkA2hXZQYlPSafNOo%2BJzaLz7PqoE%2BGz%2FXFvmR7MhrICH7XVvnWl3qzAAEnqRul1gVG491C5%2BgNPYRT96WIdE96MZTG3OYU0y22tG%2Fmp5DGf7l3DanwscvGqs3g0dlQzDgs87CBjqkAVX3o7fJNsrmEZrhv1WO29F3PkiClZk1fcj2GgrH5vA1pzUAM6vz7awXQ%2FoY%2FLQMDfmh4JfnZUoY3VLH%2F9HtaAnC5NafztsNX7VCqa73lsX1Yn2DU2eQ4lF%2B7KqgdXZPVin65f4WSGlK3jUd98o942akFhNpoMp7V8yIkEsxANrFbVLcOuZS7B1KDa9jTDs4hlJ4zRy1KDUOt4q4ke70cku%2B7Wn%2B&X-Amz-Signature=387175a9fab32633b6b8839b497daf04d47468c7af9904751854292821ff2cc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UBGX2KL%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T051026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ypFw0ykz0KZIRgKVyGdcjB%2FRTfqUko1ldyoqB%2BSVGAIhAMQ0jYjjGeL37gP9LF2NMdPY6nkTOP7m%2FEoVD9PM6bCyKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaOFz7ew7mZZll8oIq3AMVv6P%2BcZUOUy9Bm61e5i46W2%2Bd94SJ9iTeGZjZrmFQxpBOyvgUaApUjFSGb1h4IEr1KMTlCJ5hZaTZPVaQj39M%2FS866f5qP4gPFFX7U6ZvYthKBRYtk8%2FHztFVoh7imXwSTyleQnzgfjgYRc10q38gH03T51KGuc51ISLgp6CuGt8Ih1iTv%2BtZGBSgfpQ8Fn22WHP4xX0nqc%2Fos13WDBMDbdrJVOYlZEd3GxFAnEs1WTxVZJemotBfjBgJlig5NyS8MjEpeoTF5PRmxKxQ5Ekd23D7xPmUaJ5FYRqj0AQe2%2F0IIoHo%2BRWE%2BXpSEKGC0w%2Bu2xun%2BL%2FugKTTLeenC2UnSVKab22W5DslNVRAns54uz%2BveSL%2FJkmgZIjK%2BtyTM0UfStlyZauIVqdbAt1XHv5aw5HgYz40CVsuTnH%2FLI35wgfC5nMK4ub21WyZtmlYcwSRSFoG%2BEUjkmJhx4bFKVoWpZwJ42IrFf%2Fu37igf5S2jHvkf1RY77dS5wTfFUOAkA2hXZQYlPSafNOo%2BJzaLz7PqoE%2BGz%2FXFvmR7MhrICH7XVvnWl3qzAAEnqRul1gVG491C5%2BgNPYRT96WIdE96MZTG3OYU0y22tG%2Fmp5DGf7l3DanwscvGqs3g0dlQzDgs87CBjqkAVX3o7fJNsrmEZrhv1WO29F3PkiClZk1fcj2GgrH5vA1pzUAM6vz7awXQ%2FoY%2FLQMDfmh4JfnZUoY3VLH%2F9HtaAnC5NafztsNX7VCqa73lsX1Yn2DU2eQ4lF%2B7KqgdXZPVin65f4WSGlK3jUd98o942akFhNpoMp7V8yIkEsxANrFbVLcOuZS7B1KDa9jTDs4hlJ4zRy1KDUOt4q4ke70cku%2B7Wn%2B&X-Amz-Signature=d283e188a234a082e81d800c143d882eff758eb089f89cf7e16a23615df5c02e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UBGX2KL%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T051026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ypFw0ykz0KZIRgKVyGdcjB%2FRTfqUko1ldyoqB%2BSVGAIhAMQ0jYjjGeL37gP9LF2NMdPY6nkTOP7m%2FEoVD9PM6bCyKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaOFz7ew7mZZll8oIq3AMVv6P%2BcZUOUy9Bm61e5i46W2%2Bd94SJ9iTeGZjZrmFQxpBOyvgUaApUjFSGb1h4IEr1KMTlCJ5hZaTZPVaQj39M%2FS866f5qP4gPFFX7U6ZvYthKBRYtk8%2FHztFVoh7imXwSTyleQnzgfjgYRc10q38gH03T51KGuc51ISLgp6CuGt8Ih1iTv%2BtZGBSgfpQ8Fn22WHP4xX0nqc%2Fos13WDBMDbdrJVOYlZEd3GxFAnEs1WTxVZJemotBfjBgJlig5NyS8MjEpeoTF5PRmxKxQ5Ekd23D7xPmUaJ5FYRqj0AQe2%2F0IIoHo%2BRWE%2BXpSEKGC0w%2Bu2xun%2BL%2FugKTTLeenC2UnSVKab22W5DslNVRAns54uz%2BveSL%2FJkmgZIjK%2BtyTM0UfStlyZauIVqdbAt1XHv5aw5HgYz40CVsuTnH%2FLI35wgfC5nMK4ub21WyZtmlYcwSRSFoG%2BEUjkmJhx4bFKVoWpZwJ42IrFf%2Fu37igf5S2jHvkf1RY77dS5wTfFUOAkA2hXZQYlPSafNOo%2BJzaLz7PqoE%2BGz%2FXFvmR7MhrICH7XVvnWl3qzAAEnqRul1gVG491C5%2BgNPYRT96WIdE96MZTG3OYU0y22tG%2Fmp5DGf7l3DanwscvGqs3g0dlQzDgs87CBjqkAVX3o7fJNsrmEZrhv1WO29F3PkiClZk1fcj2GgrH5vA1pzUAM6vz7awXQ%2FoY%2FLQMDfmh4JfnZUoY3VLH%2F9HtaAnC5NafztsNX7VCqa73lsX1Yn2DU2eQ4lF%2B7KqgdXZPVin65f4WSGlK3jUd98o942akFhNpoMp7V8yIkEsxANrFbVLcOuZS7B1KDa9jTDs4hlJ4zRy1KDUOt4q4ke70cku%2B7Wn%2B&X-Amz-Signature=e2db53288fb3cfec7e6fd3feebf092f0d17ffecc2b2f61ae0ffa7d32c7a6ceae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UBGX2KL%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T051026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ypFw0ykz0KZIRgKVyGdcjB%2FRTfqUko1ldyoqB%2BSVGAIhAMQ0jYjjGeL37gP9LF2NMdPY6nkTOP7m%2FEoVD9PM6bCyKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaOFz7ew7mZZll8oIq3AMVv6P%2BcZUOUy9Bm61e5i46W2%2Bd94SJ9iTeGZjZrmFQxpBOyvgUaApUjFSGb1h4IEr1KMTlCJ5hZaTZPVaQj39M%2FS866f5qP4gPFFX7U6ZvYthKBRYtk8%2FHztFVoh7imXwSTyleQnzgfjgYRc10q38gH03T51KGuc51ISLgp6CuGt8Ih1iTv%2BtZGBSgfpQ8Fn22WHP4xX0nqc%2Fos13WDBMDbdrJVOYlZEd3GxFAnEs1WTxVZJemotBfjBgJlig5NyS8MjEpeoTF5PRmxKxQ5Ekd23D7xPmUaJ5FYRqj0AQe2%2F0IIoHo%2BRWE%2BXpSEKGC0w%2Bu2xun%2BL%2FugKTTLeenC2UnSVKab22W5DslNVRAns54uz%2BveSL%2FJkmgZIjK%2BtyTM0UfStlyZauIVqdbAt1XHv5aw5HgYz40CVsuTnH%2FLI35wgfC5nMK4ub21WyZtmlYcwSRSFoG%2BEUjkmJhx4bFKVoWpZwJ42IrFf%2Fu37igf5S2jHvkf1RY77dS5wTfFUOAkA2hXZQYlPSafNOo%2BJzaLz7PqoE%2BGz%2FXFvmR7MhrICH7XVvnWl3qzAAEnqRul1gVG491C5%2BgNPYRT96WIdE96MZTG3OYU0y22tG%2Fmp5DGf7l3DanwscvGqs3g0dlQzDgs87CBjqkAVX3o7fJNsrmEZrhv1WO29F3PkiClZk1fcj2GgrH5vA1pzUAM6vz7awXQ%2FoY%2FLQMDfmh4JfnZUoY3VLH%2F9HtaAnC5NafztsNX7VCqa73lsX1Yn2DU2eQ4lF%2B7KqgdXZPVin65f4WSGlK3jUd98o942akFhNpoMp7V8yIkEsxANrFbVLcOuZS7B1KDa9jTDs4hlJ4zRy1KDUOt4q4ke70cku%2B7Wn%2B&X-Amz-Signature=4cb696146b468689affa0be46c7327d07888824a58f54791b4d2ef6fd38a2ffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UBGX2KL%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T051026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ypFw0ykz0KZIRgKVyGdcjB%2FRTfqUko1ldyoqB%2BSVGAIhAMQ0jYjjGeL37gP9LF2NMdPY6nkTOP7m%2FEoVD9PM6bCyKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaOFz7ew7mZZll8oIq3AMVv6P%2BcZUOUy9Bm61e5i46W2%2Bd94SJ9iTeGZjZrmFQxpBOyvgUaApUjFSGb1h4IEr1KMTlCJ5hZaTZPVaQj39M%2FS866f5qP4gPFFX7U6ZvYthKBRYtk8%2FHztFVoh7imXwSTyleQnzgfjgYRc10q38gH03T51KGuc51ISLgp6CuGt8Ih1iTv%2BtZGBSgfpQ8Fn22WHP4xX0nqc%2Fos13WDBMDbdrJVOYlZEd3GxFAnEs1WTxVZJemotBfjBgJlig5NyS8MjEpeoTF5PRmxKxQ5Ekd23D7xPmUaJ5FYRqj0AQe2%2F0IIoHo%2BRWE%2BXpSEKGC0w%2Bu2xun%2BL%2FugKTTLeenC2UnSVKab22W5DslNVRAns54uz%2BveSL%2FJkmgZIjK%2BtyTM0UfStlyZauIVqdbAt1XHv5aw5HgYz40CVsuTnH%2FLI35wgfC5nMK4ub21WyZtmlYcwSRSFoG%2BEUjkmJhx4bFKVoWpZwJ42IrFf%2Fu37igf5S2jHvkf1RY77dS5wTfFUOAkA2hXZQYlPSafNOo%2BJzaLz7PqoE%2BGz%2FXFvmR7MhrICH7XVvnWl3qzAAEnqRul1gVG491C5%2BgNPYRT96WIdE96MZTG3OYU0y22tG%2Fmp5DGf7l3DanwscvGqs3g0dlQzDgs87CBjqkAVX3o7fJNsrmEZrhv1WO29F3PkiClZk1fcj2GgrH5vA1pzUAM6vz7awXQ%2FoY%2FLQMDfmh4JfnZUoY3VLH%2F9HtaAnC5NafztsNX7VCqa73lsX1Yn2DU2eQ4lF%2B7KqgdXZPVin65f4WSGlK3jUd98o942akFhNpoMp7V8yIkEsxANrFbVLcOuZS7B1KDa9jTDs4hlJ4zRy1KDUOt4q4ke70cku%2B7Wn%2B&X-Amz-Signature=ce0ae7bb05901ab13d09823bc28eb91d3374a20706f542f9fa0fa4ac72598fb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
