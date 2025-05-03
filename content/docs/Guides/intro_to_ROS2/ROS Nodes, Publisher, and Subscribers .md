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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6GJNTW4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIBGGvq1%2BtXVWqQbyvzfSJ1LsTb54eZc0Rnh%2B64PDjuJoAiEAof7yg3pVJsrqDSnKmMLXrWu5N1yxY5SGlaZoq3qIKLcqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLmE83Le2tVsFe%2BCircAz797wOprcgxf3zzLHryaWjv3JQ22OqFkC2YCXBpqKJDHsqmdeYBf2GbUA4ZnYw%2B0W4tIZYv6Xo5GVZx%2BbLrAIA0BbO9%2FEQJmNH2FxHn3poOtgYMP5dta%2B7fovU8dCjq0HtcbgIxtcDNm%2BvLBJwyBUDXj87CdCJ2u63HL2F1ljQlOyU7CWTQGLzLok9TlBbRbquYrJJ0nVofcyIBP3SzlUbiVSG1susEX1tNvpnJAaPZqfSTVJwePLskMt%2BLkZOFoxBaUepLEzXMo79ut02j5Z%2Fvm5VE2Po6VqsH7hJc4R12d1vyNv3a8g2pdpNKIbkaBdjIA2hfABubzrKi7b4w3ChOUIPmXrAxKEUEk%2F2XXCGbmNhImFh0JWFtHfcM%2Be5pmVIseKR%2FdbHVu%2BlwBf98A3%2FawBbHJKbgIJVBsnqsCFfk6epHqkCRMqbfd2K5ZKak8yNgPZFDc%2Ft4%2BSYmoOQ0yBOGE6Hmr1pXdH%2BT76y4Tz1CnRZRsOUxzgmWxLRPsaMvdTubbqb%2FAbIaO97Soc9%2Bdxd6GJ9vWaGOZuL84v9DYWT%2B86P4g2rewZMR5Rzfo%2FuYJ%2BM8inbQ7SqGGlwhcF%2BklH%2BJvFuR1aOalOWagME6KmPeyhLR9h9JbXH%2F5m%2FzMMGq2cAGOqUBJBlSeRHt0XjD8Mv5vTlVJ6G9y1wxqbiFME0gosDdZpgg%2B2AzKugzAyFhfa5ZaQ1hz5CZR8NgQ5GhncEk8zvtjn1QE0HvgUnImeJJNKBqyDHhgZroYV7bFu5RWulkRDX%2F6KD7ulPSHNkxw8C7p1UIyrZJ0k9GIwp1PTrmrJ6RAhf3E6kf64wfSlMZlMLlD38LlmTgzMnp5TfUpzIE9ONd8uVdM%2FIt&X-Amz-Signature=f3d6dfaedf8dd24fb53da3a65e2c0ae3032038a3de19b47934ee95c96d5b157c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6GJNTW4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIBGGvq1%2BtXVWqQbyvzfSJ1LsTb54eZc0Rnh%2B64PDjuJoAiEAof7yg3pVJsrqDSnKmMLXrWu5N1yxY5SGlaZoq3qIKLcqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLmE83Le2tVsFe%2BCircAz797wOprcgxf3zzLHryaWjv3JQ22OqFkC2YCXBpqKJDHsqmdeYBf2GbUA4ZnYw%2B0W4tIZYv6Xo5GVZx%2BbLrAIA0BbO9%2FEQJmNH2FxHn3poOtgYMP5dta%2B7fovU8dCjq0HtcbgIxtcDNm%2BvLBJwyBUDXj87CdCJ2u63HL2F1ljQlOyU7CWTQGLzLok9TlBbRbquYrJJ0nVofcyIBP3SzlUbiVSG1susEX1tNvpnJAaPZqfSTVJwePLskMt%2BLkZOFoxBaUepLEzXMo79ut02j5Z%2Fvm5VE2Po6VqsH7hJc4R12d1vyNv3a8g2pdpNKIbkaBdjIA2hfABubzrKi7b4w3ChOUIPmXrAxKEUEk%2F2XXCGbmNhImFh0JWFtHfcM%2Be5pmVIseKR%2FdbHVu%2BlwBf98A3%2FawBbHJKbgIJVBsnqsCFfk6epHqkCRMqbfd2K5ZKak8yNgPZFDc%2Ft4%2BSYmoOQ0yBOGE6Hmr1pXdH%2BT76y4Tz1CnRZRsOUxzgmWxLRPsaMvdTubbqb%2FAbIaO97Soc9%2Bdxd6GJ9vWaGOZuL84v9DYWT%2B86P4g2rewZMR5Rzfo%2FuYJ%2BM8inbQ7SqGGlwhcF%2BklH%2BJvFuR1aOalOWagME6KmPeyhLR9h9JbXH%2F5m%2FzMMGq2cAGOqUBJBlSeRHt0XjD8Mv5vTlVJ6G9y1wxqbiFME0gosDdZpgg%2B2AzKugzAyFhfa5ZaQ1hz5CZR8NgQ5GhncEk8zvtjn1QE0HvgUnImeJJNKBqyDHhgZroYV7bFu5RWulkRDX%2F6KD7ulPSHNkxw8C7p1UIyrZJ0k9GIwp1PTrmrJ6RAhf3E6kf64wfSlMZlMLlD38LlmTgzMnp5TfUpzIE9ONd8uVdM%2FIt&X-Amz-Signature=046683947887f46847c904d533f598b7e2fc6ce84456d72817f531c5edddfe82&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6GJNTW4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIBGGvq1%2BtXVWqQbyvzfSJ1LsTb54eZc0Rnh%2B64PDjuJoAiEAof7yg3pVJsrqDSnKmMLXrWu5N1yxY5SGlaZoq3qIKLcqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLmE83Le2tVsFe%2BCircAz797wOprcgxf3zzLHryaWjv3JQ22OqFkC2YCXBpqKJDHsqmdeYBf2GbUA4ZnYw%2B0W4tIZYv6Xo5GVZx%2BbLrAIA0BbO9%2FEQJmNH2FxHn3poOtgYMP5dta%2B7fovU8dCjq0HtcbgIxtcDNm%2BvLBJwyBUDXj87CdCJ2u63HL2F1ljQlOyU7CWTQGLzLok9TlBbRbquYrJJ0nVofcyIBP3SzlUbiVSG1susEX1tNvpnJAaPZqfSTVJwePLskMt%2BLkZOFoxBaUepLEzXMo79ut02j5Z%2Fvm5VE2Po6VqsH7hJc4R12d1vyNv3a8g2pdpNKIbkaBdjIA2hfABubzrKi7b4w3ChOUIPmXrAxKEUEk%2F2XXCGbmNhImFh0JWFtHfcM%2Be5pmVIseKR%2FdbHVu%2BlwBf98A3%2FawBbHJKbgIJVBsnqsCFfk6epHqkCRMqbfd2K5ZKak8yNgPZFDc%2Ft4%2BSYmoOQ0yBOGE6Hmr1pXdH%2BT76y4Tz1CnRZRsOUxzgmWxLRPsaMvdTubbqb%2FAbIaO97Soc9%2Bdxd6GJ9vWaGOZuL84v9DYWT%2B86P4g2rewZMR5Rzfo%2FuYJ%2BM8inbQ7SqGGlwhcF%2BklH%2BJvFuR1aOalOWagME6KmPeyhLR9h9JbXH%2F5m%2FzMMGq2cAGOqUBJBlSeRHt0XjD8Mv5vTlVJ6G9y1wxqbiFME0gosDdZpgg%2B2AzKugzAyFhfa5ZaQ1hz5CZR8NgQ5GhncEk8zvtjn1QE0HvgUnImeJJNKBqyDHhgZroYV7bFu5RWulkRDX%2F6KD7ulPSHNkxw8C7p1UIyrZJ0k9GIwp1PTrmrJ6RAhf3E6kf64wfSlMZlMLlD38LlmTgzMnp5TfUpzIE9ONd8uVdM%2FIt&X-Amz-Signature=4a7e8278ffbcc83bc51eb11257296d042550b408715328a44a3946e2b31ff6c8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6GJNTW4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIBGGvq1%2BtXVWqQbyvzfSJ1LsTb54eZc0Rnh%2B64PDjuJoAiEAof7yg3pVJsrqDSnKmMLXrWu5N1yxY5SGlaZoq3qIKLcqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLmE83Le2tVsFe%2BCircAz797wOprcgxf3zzLHryaWjv3JQ22OqFkC2YCXBpqKJDHsqmdeYBf2GbUA4ZnYw%2B0W4tIZYv6Xo5GVZx%2BbLrAIA0BbO9%2FEQJmNH2FxHn3poOtgYMP5dta%2B7fovU8dCjq0HtcbgIxtcDNm%2BvLBJwyBUDXj87CdCJ2u63HL2F1ljQlOyU7CWTQGLzLok9TlBbRbquYrJJ0nVofcyIBP3SzlUbiVSG1susEX1tNvpnJAaPZqfSTVJwePLskMt%2BLkZOFoxBaUepLEzXMo79ut02j5Z%2Fvm5VE2Po6VqsH7hJc4R12d1vyNv3a8g2pdpNKIbkaBdjIA2hfABubzrKi7b4w3ChOUIPmXrAxKEUEk%2F2XXCGbmNhImFh0JWFtHfcM%2Be5pmVIseKR%2FdbHVu%2BlwBf98A3%2FawBbHJKbgIJVBsnqsCFfk6epHqkCRMqbfd2K5ZKak8yNgPZFDc%2Ft4%2BSYmoOQ0yBOGE6Hmr1pXdH%2BT76y4Tz1CnRZRsOUxzgmWxLRPsaMvdTubbqb%2FAbIaO97Soc9%2Bdxd6GJ9vWaGOZuL84v9DYWT%2B86P4g2rewZMR5Rzfo%2FuYJ%2BM8inbQ7SqGGlwhcF%2BklH%2BJvFuR1aOalOWagME6KmPeyhLR9h9JbXH%2F5m%2FzMMGq2cAGOqUBJBlSeRHt0XjD8Mv5vTlVJ6G9y1wxqbiFME0gosDdZpgg%2B2AzKugzAyFhfa5ZaQ1hz5CZR8NgQ5GhncEk8zvtjn1QE0HvgUnImeJJNKBqyDHhgZroYV7bFu5RWulkRDX%2F6KD7ulPSHNkxw8C7p1UIyrZJ0k9GIwp1PTrmrJ6RAhf3E6kf64wfSlMZlMLlD38LlmTgzMnp5TfUpzIE9ONd8uVdM%2FIt&X-Amz-Signature=bfe7e6d0043873349dd47ae9731bc65167ead2a7533ec61271e8c6acffc165fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6GJNTW4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIBGGvq1%2BtXVWqQbyvzfSJ1LsTb54eZc0Rnh%2B64PDjuJoAiEAof7yg3pVJsrqDSnKmMLXrWu5N1yxY5SGlaZoq3qIKLcqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLmE83Le2tVsFe%2BCircAz797wOprcgxf3zzLHryaWjv3JQ22OqFkC2YCXBpqKJDHsqmdeYBf2GbUA4ZnYw%2B0W4tIZYv6Xo5GVZx%2BbLrAIA0BbO9%2FEQJmNH2FxHn3poOtgYMP5dta%2B7fovU8dCjq0HtcbgIxtcDNm%2BvLBJwyBUDXj87CdCJ2u63HL2F1ljQlOyU7CWTQGLzLok9TlBbRbquYrJJ0nVofcyIBP3SzlUbiVSG1susEX1tNvpnJAaPZqfSTVJwePLskMt%2BLkZOFoxBaUepLEzXMo79ut02j5Z%2Fvm5VE2Po6VqsH7hJc4R12d1vyNv3a8g2pdpNKIbkaBdjIA2hfABubzrKi7b4w3ChOUIPmXrAxKEUEk%2F2XXCGbmNhImFh0JWFtHfcM%2Be5pmVIseKR%2FdbHVu%2BlwBf98A3%2FawBbHJKbgIJVBsnqsCFfk6epHqkCRMqbfd2K5ZKak8yNgPZFDc%2Ft4%2BSYmoOQ0yBOGE6Hmr1pXdH%2BT76y4Tz1CnRZRsOUxzgmWxLRPsaMvdTubbqb%2FAbIaO97Soc9%2Bdxd6GJ9vWaGOZuL84v9DYWT%2B86P4g2rewZMR5Rzfo%2FuYJ%2BM8inbQ7SqGGlwhcF%2BklH%2BJvFuR1aOalOWagME6KmPeyhLR9h9JbXH%2F5m%2FzMMGq2cAGOqUBJBlSeRHt0XjD8Mv5vTlVJ6G9y1wxqbiFME0gosDdZpgg%2B2AzKugzAyFhfa5ZaQ1hz5CZR8NgQ5GhncEk8zvtjn1QE0HvgUnImeJJNKBqyDHhgZroYV7bFu5RWulkRDX%2F6KD7ulPSHNkxw8C7p1UIyrZJ0k9GIwp1PTrmrJ6RAhf3E6kf64wfSlMZlMLlD38LlmTgzMnp5TfUpzIE9ONd8uVdM%2FIt&X-Amz-Signature=73d2d66d8629040417ca19f7cf256a6026d6f6a0a173c7c4387ed36efbedfd4c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6GJNTW4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIBGGvq1%2BtXVWqQbyvzfSJ1LsTb54eZc0Rnh%2B64PDjuJoAiEAof7yg3pVJsrqDSnKmMLXrWu5N1yxY5SGlaZoq3qIKLcqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLmE83Le2tVsFe%2BCircAz797wOprcgxf3zzLHryaWjv3JQ22OqFkC2YCXBpqKJDHsqmdeYBf2GbUA4ZnYw%2B0W4tIZYv6Xo5GVZx%2BbLrAIA0BbO9%2FEQJmNH2FxHn3poOtgYMP5dta%2B7fovU8dCjq0HtcbgIxtcDNm%2BvLBJwyBUDXj87CdCJ2u63HL2F1ljQlOyU7CWTQGLzLok9TlBbRbquYrJJ0nVofcyIBP3SzlUbiVSG1susEX1tNvpnJAaPZqfSTVJwePLskMt%2BLkZOFoxBaUepLEzXMo79ut02j5Z%2Fvm5VE2Po6VqsH7hJc4R12d1vyNv3a8g2pdpNKIbkaBdjIA2hfABubzrKi7b4w3ChOUIPmXrAxKEUEk%2F2XXCGbmNhImFh0JWFtHfcM%2Be5pmVIseKR%2FdbHVu%2BlwBf98A3%2FawBbHJKbgIJVBsnqsCFfk6epHqkCRMqbfd2K5ZKak8yNgPZFDc%2Ft4%2BSYmoOQ0yBOGE6Hmr1pXdH%2BT76y4Tz1CnRZRsOUxzgmWxLRPsaMvdTubbqb%2FAbIaO97Soc9%2Bdxd6GJ9vWaGOZuL84v9DYWT%2B86P4g2rewZMR5Rzfo%2FuYJ%2BM8inbQ7SqGGlwhcF%2BklH%2BJvFuR1aOalOWagME6KmPeyhLR9h9JbXH%2F5m%2FzMMGq2cAGOqUBJBlSeRHt0XjD8Mv5vTlVJ6G9y1wxqbiFME0gosDdZpgg%2B2AzKugzAyFhfa5ZaQ1hz5CZR8NgQ5GhncEk8zvtjn1QE0HvgUnImeJJNKBqyDHhgZroYV7bFu5RWulkRDX%2F6KD7ulPSHNkxw8C7p1UIyrZJ0k9GIwp1PTrmrJ6RAhf3E6kf64wfSlMZlMLlD38LlmTgzMnp5TfUpzIE9ONd8uVdM%2FIt&X-Amz-Signature=e92353f91051c49b294c0c8cd98cb5f11e4a8430fa91c1793c911151a748fdef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6GJNTW4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIBGGvq1%2BtXVWqQbyvzfSJ1LsTb54eZc0Rnh%2B64PDjuJoAiEAof7yg3pVJsrqDSnKmMLXrWu5N1yxY5SGlaZoq3qIKLcqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLmE83Le2tVsFe%2BCircAz797wOprcgxf3zzLHryaWjv3JQ22OqFkC2YCXBpqKJDHsqmdeYBf2GbUA4ZnYw%2B0W4tIZYv6Xo5GVZx%2BbLrAIA0BbO9%2FEQJmNH2FxHn3poOtgYMP5dta%2B7fovU8dCjq0HtcbgIxtcDNm%2BvLBJwyBUDXj87CdCJ2u63HL2F1ljQlOyU7CWTQGLzLok9TlBbRbquYrJJ0nVofcyIBP3SzlUbiVSG1susEX1tNvpnJAaPZqfSTVJwePLskMt%2BLkZOFoxBaUepLEzXMo79ut02j5Z%2Fvm5VE2Po6VqsH7hJc4R12d1vyNv3a8g2pdpNKIbkaBdjIA2hfABubzrKi7b4w3ChOUIPmXrAxKEUEk%2F2XXCGbmNhImFh0JWFtHfcM%2Be5pmVIseKR%2FdbHVu%2BlwBf98A3%2FawBbHJKbgIJVBsnqsCFfk6epHqkCRMqbfd2K5ZKak8yNgPZFDc%2Ft4%2BSYmoOQ0yBOGE6Hmr1pXdH%2BT76y4Tz1CnRZRsOUxzgmWxLRPsaMvdTubbqb%2FAbIaO97Soc9%2Bdxd6GJ9vWaGOZuL84v9DYWT%2B86P4g2rewZMR5Rzfo%2FuYJ%2BM8inbQ7SqGGlwhcF%2BklH%2BJvFuR1aOalOWagME6KmPeyhLR9h9JbXH%2F5m%2FzMMGq2cAGOqUBJBlSeRHt0XjD8Mv5vTlVJ6G9y1wxqbiFME0gosDdZpgg%2B2AzKugzAyFhfa5ZaQ1hz5CZR8NgQ5GhncEk8zvtjn1QE0HvgUnImeJJNKBqyDHhgZroYV7bFu5RWulkRDX%2F6KD7ulPSHNkxw8C7p1UIyrZJ0k9GIwp1PTrmrJ6RAhf3E6kf64wfSlMZlMLlD38LlmTgzMnp5TfUpzIE9ONd8uVdM%2FIt&X-Amz-Signature=454a46a2d7b84fee5caeb2873655bfe6f5f1722c7a04e677b2cd86ede94ead14&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6GJNTW4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIBGGvq1%2BtXVWqQbyvzfSJ1LsTb54eZc0Rnh%2B64PDjuJoAiEAof7yg3pVJsrqDSnKmMLXrWu5N1yxY5SGlaZoq3qIKLcqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLmE83Le2tVsFe%2BCircAz797wOprcgxf3zzLHryaWjv3JQ22OqFkC2YCXBpqKJDHsqmdeYBf2GbUA4ZnYw%2B0W4tIZYv6Xo5GVZx%2BbLrAIA0BbO9%2FEQJmNH2FxHn3poOtgYMP5dta%2B7fovU8dCjq0HtcbgIxtcDNm%2BvLBJwyBUDXj87CdCJ2u63HL2F1ljQlOyU7CWTQGLzLok9TlBbRbquYrJJ0nVofcyIBP3SzlUbiVSG1susEX1tNvpnJAaPZqfSTVJwePLskMt%2BLkZOFoxBaUepLEzXMo79ut02j5Z%2Fvm5VE2Po6VqsH7hJc4R12d1vyNv3a8g2pdpNKIbkaBdjIA2hfABubzrKi7b4w3ChOUIPmXrAxKEUEk%2F2XXCGbmNhImFh0JWFtHfcM%2Be5pmVIseKR%2FdbHVu%2BlwBf98A3%2FawBbHJKbgIJVBsnqsCFfk6epHqkCRMqbfd2K5ZKak8yNgPZFDc%2Ft4%2BSYmoOQ0yBOGE6Hmr1pXdH%2BT76y4Tz1CnRZRsOUxzgmWxLRPsaMvdTubbqb%2FAbIaO97Soc9%2Bdxd6GJ9vWaGOZuL84v9DYWT%2B86P4g2rewZMR5Rzfo%2FuYJ%2BM8inbQ7SqGGlwhcF%2BklH%2BJvFuR1aOalOWagME6KmPeyhLR9h9JbXH%2F5m%2FzMMGq2cAGOqUBJBlSeRHt0XjD8Mv5vTlVJ6G9y1wxqbiFME0gosDdZpgg%2B2AzKugzAyFhfa5ZaQ1hz5CZR8NgQ5GhncEk8zvtjn1QE0HvgUnImeJJNKBqyDHhgZroYV7bFu5RWulkRDX%2F6KD7ulPSHNkxw8C7p1UIyrZJ0k9GIwp1PTrmrJ6RAhf3E6kf64wfSlMZlMLlD38LlmTgzMnp5TfUpzIE9ONd8uVdM%2FIt&X-Amz-Signature=41f071e01918d9437769dc88ff5dcd304a5b1fdd050b1e12688dbcd773acb174&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
