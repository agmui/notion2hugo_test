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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UANNNLT3%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn7qilcZlVqeg%2FrJy0Crw9N5ltn6AZQLGLcHYGAlYW%2BwIgB5892E%2FZE80gNr1NhRSPZmKwhGu3GozPQkzOa0AqpGQqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd4Ph5u0kSrNyZYSircAx%2B1cTKC5%2FW1hUNllMUQAjGoWRVGb4gSSEbALmTuQEMTZn4%2Bd9yPweiWCpFu1y%2B%2FfJ07yZcYiz%2FBhT%2FKS7gZmE4hPphNCqGIYj6yKc9otcHGOP5qEWpBj7XiVLNVewhXK3mmD%2B%2F7G6vc7CCOPzcWgzijvHLRU4Tc1fqlj%2FlUgyIJPT9S%2FeV7r0PeacS6HQTMTWBxFhfcpFhRwR2PiR41lTblSTjrRhUSMnOyqlyFFZ%2BiulrxYyfzS6u80%2BfIhAeu1yMxAlpFbcIeHxjQ8a%2BNut%2FeMILQhu%2F3cCJhwuybNSGpf8aGBAgmmc0FCXUgnUobnWQAKwwMawxwIyiUnOo8J1V5jEG%2FowOtw%2Fb3B1rfQN0jck8led3wkAS1k1dB6aCKxWYZIwuAVUVGU1jY31roQKjaYNBHmk2WTP%2FN4mYd%2FSimIZckQL6t7msKdskrsWl3AhiuzNu0ypNnvSHqGWBIEO91xJ1WB2QXRr%2FSvWcIr1MDsEIv9ypDuhQi6dw5YIvOTD1yLoTWqhcE3F5qXnWpp%2BLFCSp%2FcFhcskKTsMDsEwqncVdSB3kXSlWr9AOj8R%2FsIMQQL%2Ba8k4ZNdPLeo4PgQVEsmrgH%2B8Rwveo8M3Xn3uJhHJCEvesWZUNVOsbDMKqT0r4GOqUBR48mx48mlBKBniaXZyhLfHWD6I7f%2BMI0iF5ZU9F6ZnyxBkyAKjxLmSUgcvnUoUoE0pIwD05wGZ51F8LwlOkRq7M1gfBwjum3d676PyNKBTIEcMMMEnM8jPG%2BckDeGqp0cMLOAVTLz5Gid79TxngcjQoUqOz7381O6Qp4NZwgFr%2BWSPExfKxHzVWMM297VNytze90MUiQs%2B54HDGixJgJhV6inp%2B8&X-Amz-Signature=ed1cea252391340b032a8dbef0d687639fb96799cb476ff8feaab9ebc192786f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UANNNLT3%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn7qilcZlVqeg%2FrJy0Crw9N5ltn6AZQLGLcHYGAlYW%2BwIgB5892E%2FZE80gNr1NhRSPZmKwhGu3GozPQkzOa0AqpGQqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd4Ph5u0kSrNyZYSircAx%2B1cTKC5%2FW1hUNllMUQAjGoWRVGb4gSSEbALmTuQEMTZn4%2Bd9yPweiWCpFu1y%2B%2FfJ07yZcYiz%2FBhT%2FKS7gZmE4hPphNCqGIYj6yKc9otcHGOP5qEWpBj7XiVLNVewhXK3mmD%2B%2F7G6vc7CCOPzcWgzijvHLRU4Tc1fqlj%2FlUgyIJPT9S%2FeV7r0PeacS6HQTMTWBxFhfcpFhRwR2PiR41lTblSTjrRhUSMnOyqlyFFZ%2BiulrxYyfzS6u80%2BfIhAeu1yMxAlpFbcIeHxjQ8a%2BNut%2FeMILQhu%2F3cCJhwuybNSGpf8aGBAgmmc0FCXUgnUobnWQAKwwMawxwIyiUnOo8J1V5jEG%2FowOtw%2Fb3B1rfQN0jck8led3wkAS1k1dB6aCKxWYZIwuAVUVGU1jY31roQKjaYNBHmk2WTP%2FN4mYd%2FSimIZckQL6t7msKdskrsWl3AhiuzNu0ypNnvSHqGWBIEO91xJ1WB2QXRr%2FSvWcIr1MDsEIv9ypDuhQi6dw5YIvOTD1yLoTWqhcE3F5qXnWpp%2BLFCSp%2FcFhcskKTsMDsEwqncVdSB3kXSlWr9AOj8R%2FsIMQQL%2Ba8k4ZNdPLeo4PgQVEsmrgH%2B8Rwveo8M3Xn3uJhHJCEvesWZUNVOsbDMKqT0r4GOqUBR48mx48mlBKBniaXZyhLfHWD6I7f%2BMI0iF5ZU9F6ZnyxBkyAKjxLmSUgcvnUoUoE0pIwD05wGZ51F8LwlOkRq7M1gfBwjum3d676PyNKBTIEcMMMEnM8jPG%2BckDeGqp0cMLOAVTLz5Gid79TxngcjQoUqOz7381O6Qp4NZwgFr%2BWSPExfKxHzVWMM297VNytze90MUiQs%2B54HDGixJgJhV6inp%2B8&X-Amz-Signature=7a545cf41d775ff7709dae888afe429d75b8434fb081f8d97a02c951eda1ab4c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UANNNLT3%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn7qilcZlVqeg%2FrJy0Crw9N5ltn6AZQLGLcHYGAlYW%2BwIgB5892E%2FZE80gNr1NhRSPZmKwhGu3GozPQkzOa0AqpGQqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd4Ph5u0kSrNyZYSircAx%2B1cTKC5%2FW1hUNllMUQAjGoWRVGb4gSSEbALmTuQEMTZn4%2Bd9yPweiWCpFu1y%2B%2FfJ07yZcYiz%2FBhT%2FKS7gZmE4hPphNCqGIYj6yKc9otcHGOP5qEWpBj7XiVLNVewhXK3mmD%2B%2F7G6vc7CCOPzcWgzijvHLRU4Tc1fqlj%2FlUgyIJPT9S%2FeV7r0PeacS6HQTMTWBxFhfcpFhRwR2PiR41lTblSTjrRhUSMnOyqlyFFZ%2BiulrxYyfzS6u80%2BfIhAeu1yMxAlpFbcIeHxjQ8a%2BNut%2FeMILQhu%2F3cCJhwuybNSGpf8aGBAgmmc0FCXUgnUobnWQAKwwMawxwIyiUnOo8J1V5jEG%2FowOtw%2Fb3B1rfQN0jck8led3wkAS1k1dB6aCKxWYZIwuAVUVGU1jY31roQKjaYNBHmk2WTP%2FN4mYd%2FSimIZckQL6t7msKdskrsWl3AhiuzNu0ypNnvSHqGWBIEO91xJ1WB2QXRr%2FSvWcIr1MDsEIv9ypDuhQi6dw5YIvOTD1yLoTWqhcE3F5qXnWpp%2BLFCSp%2FcFhcskKTsMDsEwqncVdSB3kXSlWr9AOj8R%2FsIMQQL%2Ba8k4ZNdPLeo4PgQVEsmrgH%2B8Rwveo8M3Xn3uJhHJCEvesWZUNVOsbDMKqT0r4GOqUBR48mx48mlBKBniaXZyhLfHWD6I7f%2BMI0iF5ZU9F6ZnyxBkyAKjxLmSUgcvnUoUoE0pIwD05wGZ51F8LwlOkRq7M1gfBwjum3d676PyNKBTIEcMMMEnM8jPG%2BckDeGqp0cMLOAVTLz5Gid79TxngcjQoUqOz7381O6Qp4NZwgFr%2BWSPExfKxHzVWMM297VNytze90MUiQs%2B54HDGixJgJhV6inp%2B8&X-Amz-Signature=f2fdb428e7ea8ccb7b9e9efda7a6aefb8adcb1f4b31dcce543a3cc218e34e8c1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UANNNLT3%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn7qilcZlVqeg%2FrJy0Crw9N5ltn6AZQLGLcHYGAlYW%2BwIgB5892E%2FZE80gNr1NhRSPZmKwhGu3GozPQkzOa0AqpGQqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd4Ph5u0kSrNyZYSircAx%2B1cTKC5%2FW1hUNllMUQAjGoWRVGb4gSSEbALmTuQEMTZn4%2Bd9yPweiWCpFu1y%2B%2FfJ07yZcYiz%2FBhT%2FKS7gZmE4hPphNCqGIYj6yKc9otcHGOP5qEWpBj7XiVLNVewhXK3mmD%2B%2F7G6vc7CCOPzcWgzijvHLRU4Tc1fqlj%2FlUgyIJPT9S%2FeV7r0PeacS6HQTMTWBxFhfcpFhRwR2PiR41lTblSTjrRhUSMnOyqlyFFZ%2BiulrxYyfzS6u80%2BfIhAeu1yMxAlpFbcIeHxjQ8a%2BNut%2FeMILQhu%2F3cCJhwuybNSGpf8aGBAgmmc0FCXUgnUobnWQAKwwMawxwIyiUnOo8J1V5jEG%2FowOtw%2Fb3B1rfQN0jck8led3wkAS1k1dB6aCKxWYZIwuAVUVGU1jY31roQKjaYNBHmk2WTP%2FN4mYd%2FSimIZckQL6t7msKdskrsWl3AhiuzNu0ypNnvSHqGWBIEO91xJ1WB2QXRr%2FSvWcIr1MDsEIv9ypDuhQi6dw5YIvOTD1yLoTWqhcE3F5qXnWpp%2BLFCSp%2FcFhcskKTsMDsEwqncVdSB3kXSlWr9AOj8R%2FsIMQQL%2Ba8k4ZNdPLeo4PgQVEsmrgH%2B8Rwveo8M3Xn3uJhHJCEvesWZUNVOsbDMKqT0r4GOqUBR48mx48mlBKBniaXZyhLfHWD6I7f%2BMI0iF5ZU9F6ZnyxBkyAKjxLmSUgcvnUoUoE0pIwD05wGZ51F8LwlOkRq7M1gfBwjum3d676PyNKBTIEcMMMEnM8jPG%2BckDeGqp0cMLOAVTLz5Gid79TxngcjQoUqOz7381O6Qp4NZwgFr%2BWSPExfKxHzVWMM297VNytze90MUiQs%2B54HDGixJgJhV6inp%2B8&X-Amz-Signature=ed51c82c34709551a626e0c5b47a0520f2f71672db97b78d97aa15cb6808126f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UANNNLT3%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn7qilcZlVqeg%2FrJy0Crw9N5ltn6AZQLGLcHYGAlYW%2BwIgB5892E%2FZE80gNr1NhRSPZmKwhGu3GozPQkzOa0AqpGQqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd4Ph5u0kSrNyZYSircAx%2B1cTKC5%2FW1hUNllMUQAjGoWRVGb4gSSEbALmTuQEMTZn4%2Bd9yPweiWCpFu1y%2B%2FfJ07yZcYiz%2FBhT%2FKS7gZmE4hPphNCqGIYj6yKc9otcHGOP5qEWpBj7XiVLNVewhXK3mmD%2B%2F7G6vc7CCOPzcWgzijvHLRU4Tc1fqlj%2FlUgyIJPT9S%2FeV7r0PeacS6HQTMTWBxFhfcpFhRwR2PiR41lTblSTjrRhUSMnOyqlyFFZ%2BiulrxYyfzS6u80%2BfIhAeu1yMxAlpFbcIeHxjQ8a%2BNut%2FeMILQhu%2F3cCJhwuybNSGpf8aGBAgmmc0FCXUgnUobnWQAKwwMawxwIyiUnOo8J1V5jEG%2FowOtw%2Fb3B1rfQN0jck8led3wkAS1k1dB6aCKxWYZIwuAVUVGU1jY31roQKjaYNBHmk2WTP%2FN4mYd%2FSimIZckQL6t7msKdskrsWl3AhiuzNu0ypNnvSHqGWBIEO91xJ1WB2QXRr%2FSvWcIr1MDsEIv9ypDuhQi6dw5YIvOTD1yLoTWqhcE3F5qXnWpp%2BLFCSp%2FcFhcskKTsMDsEwqncVdSB3kXSlWr9AOj8R%2FsIMQQL%2Ba8k4ZNdPLeo4PgQVEsmrgH%2B8Rwveo8M3Xn3uJhHJCEvesWZUNVOsbDMKqT0r4GOqUBR48mx48mlBKBniaXZyhLfHWD6I7f%2BMI0iF5ZU9F6ZnyxBkyAKjxLmSUgcvnUoUoE0pIwD05wGZ51F8LwlOkRq7M1gfBwjum3d676PyNKBTIEcMMMEnM8jPG%2BckDeGqp0cMLOAVTLz5Gid79TxngcjQoUqOz7381O6Qp4NZwgFr%2BWSPExfKxHzVWMM297VNytze90MUiQs%2B54HDGixJgJhV6inp%2B8&X-Amz-Signature=463d3bd3a8d097867572619e7841a69be2c565add4a857f3cc959c64cc698467&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UANNNLT3%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn7qilcZlVqeg%2FrJy0Crw9N5ltn6AZQLGLcHYGAlYW%2BwIgB5892E%2FZE80gNr1NhRSPZmKwhGu3GozPQkzOa0AqpGQqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd4Ph5u0kSrNyZYSircAx%2B1cTKC5%2FW1hUNllMUQAjGoWRVGb4gSSEbALmTuQEMTZn4%2Bd9yPweiWCpFu1y%2B%2FfJ07yZcYiz%2FBhT%2FKS7gZmE4hPphNCqGIYj6yKc9otcHGOP5qEWpBj7XiVLNVewhXK3mmD%2B%2F7G6vc7CCOPzcWgzijvHLRU4Tc1fqlj%2FlUgyIJPT9S%2FeV7r0PeacS6HQTMTWBxFhfcpFhRwR2PiR41lTblSTjrRhUSMnOyqlyFFZ%2BiulrxYyfzS6u80%2BfIhAeu1yMxAlpFbcIeHxjQ8a%2BNut%2FeMILQhu%2F3cCJhwuybNSGpf8aGBAgmmc0FCXUgnUobnWQAKwwMawxwIyiUnOo8J1V5jEG%2FowOtw%2Fb3B1rfQN0jck8led3wkAS1k1dB6aCKxWYZIwuAVUVGU1jY31roQKjaYNBHmk2WTP%2FN4mYd%2FSimIZckQL6t7msKdskrsWl3AhiuzNu0ypNnvSHqGWBIEO91xJ1WB2QXRr%2FSvWcIr1MDsEIv9ypDuhQi6dw5YIvOTD1yLoTWqhcE3F5qXnWpp%2BLFCSp%2FcFhcskKTsMDsEwqncVdSB3kXSlWr9AOj8R%2FsIMQQL%2Ba8k4ZNdPLeo4PgQVEsmrgH%2B8Rwveo8M3Xn3uJhHJCEvesWZUNVOsbDMKqT0r4GOqUBR48mx48mlBKBniaXZyhLfHWD6I7f%2BMI0iF5ZU9F6ZnyxBkyAKjxLmSUgcvnUoUoE0pIwD05wGZ51F8LwlOkRq7M1gfBwjum3d676PyNKBTIEcMMMEnM8jPG%2BckDeGqp0cMLOAVTLz5Gid79TxngcjQoUqOz7381O6Qp4NZwgFr%2BWSPExfKxHzVWMM297VNytze90MUiQs%2B54HDGixJgJhV6inp%2B8&X-Amz-Signature=81bc9eb55bb630f9886ece4112f2340c8e2699d89bd22864fd2f970eb90530a7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UANNNLT3%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn7qilcZlVqeg%2FrJy0Crw9N5ltn6AZQLGLcHYGAlYW%2BwIgB5892E%2FZE80gNr1NhRSPZmKwhGu3GozPQkzOa0AqpGQqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd4Ph5u0kSrNyZYSircAx%2B1cTKC5%2FW1hUNllMUQAjGoWRVGb4gSSEbALmTuQEMTZn4%2Bd9yPweiWCpFu1y%2B%2FfJ07yZcYiz%2FBhT%2FKS7gZmE4hPphNCqGIYj6yKc9otcHGOP5qEWpBj7XiVLNVewhXK3mmD%2B%2F7G6vc7CCOPzcWgzijvHLRU4Tc1fqlj%2FlUgyIJPT9S%2FeV7r0PeacS6HQTMTWBxFhfcpFhRwR2PiR41lTblSTjrRhUSMnOyqlyFFZ%2BiulrxYyfzS6u80%2BfIhAeu1yMxAlpFbcIeHxjQ8a%2BNut%2FeMILQhu%2F3cCJhwuybNSGpf8aGBAgmmc0FCXUgnUobnWQAKwwMawxwIyiUnOo8J1V5jEG%2FowOtw%2Fb3B1rfQN0jck8led3wkAS1k1dB6aCKxWYZIwuAVUVGU1jY31roQKjaYNBHmk2WTP%2FN4mYd%2FSimIZckQL6t7msKdskrsWl3AhiuzNu0ypNnvSHqGWBIEO91xJ1WB2QXRr%2FSvWcIr1MDsEIv9ypDuhQi6dw5YIvOTD1yLoTWqhcE3F5qXnWpp%2BLFCSp%2FcFhcskKTsMDsEwqncVdSB3kXSlWr9AOj8R%2FsIMQQL%2Ba8k4ZNdPLeo4PgQVEsmrgH%2B8Rwveo8M3Xn3uJhHJCEvesWZUNVOsbDMKqT0r4GOqUBR48mx48mlBKBniaXZyhLfHWD6I7f%2BMI0iF5ZU9F6ZnyxBkyAKjxLmSUgcvnUoUoE0pIwD05wGZ51F8LwlOkRq7M1gfBwjum3d676PyNKBTIEcMMMEnM8jPG%2BckDeGqp0cMLOAVTLz5Gid79TxngcjQoUqOz7381O6Qp4NZwgFr%2BWSPExfKxHzVWMM297VNytze90MUiQs%2B54HDGixJgJhV6inp%2B8&X-Amz-Signature=c1d067169fd2caaa1568e996e29d66c8b7909c485709cc339889bf3e73ca92e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UANNNLT3%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn7qilcZlVqeg%2FrJy0Crw9N5ltn6AZQLGLcHYGAlYW%2BwIgB5892E%2FZE80gNr1NhRSPZmKwhGu3GozPQkzOa0AqpGQqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd4Ph5u0kSrNyZYSircAx%2B1cTKC5%2FW1hUNllMUQAjGoWRVGb4gSSEbALmTuQEMTZn4%2Bd9yPweiWCpFu1y%2B%2FfJ07yZcYiz%2FBhT%2FKS7gZmE4hPphNCqGIYj6yKc9otcHGOP5qEWpBj7XiVLNVewhXK3mmD%2B%2F7G6vc7CCOPzcWgzijvHLRU4Tc1fqlj%2FlUgyIJPT9S%2FeV7r0PeacS6HQTMTWBxFhfcpFhRwR2PiR41lTblSTjrRhUSMnOyqlyFFZ%2BiulrxYyfzS6u80%2BfIhAeu1yMxAlpFbcIeHxjQ8a%2BNut%2FeMILQhu%2F3cCJhwuybNSGpf8aGBAgmmc0FCXUgnUobnWQAKwwMawxwIyiUnOo8J1V5jEG%2FowOtw%2Fb3B1rfQN0jck8led3wkAS1k1dB6aCKxWYZIwuAVUVGU1jY31roQKjaYNBHmk2WTP%2FN4mYd%2FSimIZckQL6t7msKdskrsWl3AhiuzNu0ypNnvSHqGWBIEO91xJ1WB2QXRr%2FSvWcIr1MDsEIv9ypDuhQi6dw5YIvOTD1yLoTWqhcE3F5qXnWpp%2BLFCSp%2FcFhcskKTsMDsEwqncVdSB3kXSlWr9AOj8R%2FsIMQQL%2Ba8k4ZNdPLeo4PgQVEsmrgH%2B8Rwveo8M3Xn3uJhHJCEvesWZUNVOsbDMKqT0r4GOqUBR48mx48mlBKBniaXZyhLfHWD6I7f%2BMI0iF5ZU9F6ZnyxBkyAKjxLmSUgcvnUoUoE0pIwD05wGZ51F8LwlOkRq7M1gfBwjum3d676PyNKBTIEcMMMEnM8jPG%2BckDeGqp0cMLOAVTLz5Gid79TxngcjQoUqOz7381O6Qp4NZwgFr%2BWSPExfKxHzVWMM297VNytze90MUiQs%2B54HDGixJgJhV6inp%2B8&X-Amz-Signature=a012f781716577ed1bca5d2ec3bbdfe95ac0e3999c670876414a1d6a6b9bddd7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
