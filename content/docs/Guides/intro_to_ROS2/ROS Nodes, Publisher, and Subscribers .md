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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XCS6INJ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIDaOBmEEHH7p%2FgQGi%2BiFzX1lCg2xb529db%2Bw8hE5asQOAiEAl%2FGvAMvaDilBWtgZr%2B137rETn%2F%2Bg9ziyGWcUz4WqFF8qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsa%2FpdzZ9yItr0FtircAwFrniT05O%2FlpgGHlGVdxou6%2Frw2FKSc3JnT0x8XKH6omeLoGEgGul4qGA57q0wHU%2FJX%2BlSSwmZ9ZltDtTSb%2FG0hMrLSzolv3hqAJndaSmIZBv8G73SWnG7fdsDgApuCE4Uc22wIWVjsIbYe8aPWhF1%2BCBkIoVvGhrRjeivhAkMU2hxG%2B8OdXKsEw9JZew3XVIpDOInx%2BXf8%2BVLfDwi9Nio7pfAKpsOfkm7EUE5Ju7fVL9P5gl3zYFtoy2l0E3LhQs8YO3R5HZOPuTZgnspyBMOZ0Wbl94qrj%2FZHeV7FY5cbTVjS7tGbBWPr5oqlQsf82%2BILKQX0FjC%2B%2F5ZqhUqIb0SBeC08IOxdPBd%2B%2BxpHR5%2FN0RgWhX5beYuIkMpMhKk4wDzKJWAnjBmZKsQPUCS6YUl3%2BzWeUPcVFOVxdET1vyb8uBjU8rXsHmHd8bvqRTVx6g9C%2Bsuo5QAoQr7Jg1U9rPRMftXC22DgQ0iJbZC93ndbMl8Ky2bmwhw9SvbugHM8JQ9ud7F1eb8TzUonziH31cPlmqSz43nzg3YvTKBVhGsXkMmvPIt7k7FZQX05PLKiQl0OsC%2BATP0tXolqL8f%2BmRWswB4ZsPc%2BG02CwlvNxcAfkihE%2FSCJFzVqA02HMP366b8GOqUBzjTvfip0HpOhZmrnLX2MQVzXspo%2FFD0Sm6p2%2BPcWyTvNJwRKPlN1mcZNF4DvVPNGFFz%2BNZgiUagtNUdd6YHX2kO%2FilpAdzuGg4m9wgjaDiMAaKOQv%2FwHzeJM1aD8gIPlrYV0c2ENfakNp6RdlZ0LzM3uOTcqboWwAS%2B4eeHaHdwCxohdB6wvSfVDeMhfAuqGmGZ3K2QECx8e1XO0BbhH8G4TfqSq&X-Amz-Signature=56c2b55a5961d28ed490083a8a5d9e9657d96aac44416eeeebde031fe8dea681&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XCS6INJ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIDaOBmEEHH7p%2FgQGi%2BiFzX1lCg2xb529db%2Bw8hE5asQOAiEAl%2FGvAMvaDilBWtgZr%2B137rETn%2F%2Bg9ziyGWcUz4WqFF8qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsa%2FpdzZ9yItr0FtircAwFrniT05O%2FlpgGHlGVdxou6%2Frw2FKSc3JnT0x8XKH6omeLoGEgGul4qGA57q0wHU%2FJX%2BlSSwmZ9ZltDtTSb%2FG0hMrLSzolv3hqAJndaSmIZBv8G73SWnG7fdsDgApuCE4Uc22wIWVjsIbYe8aPWhF1%2BCBkIoVvGhrRjeivhAkMU2hxG%2B8OdXKsEw9JZew3XVIpDOInx%2BXf8%2BVLfDwi9Nio7pfAKpsOfkm7EUE5Ju7fVL9P5gl3zYFtoy2l0E3LhQs8YO3R5HZOPuTZgnspyBMOZ0Wbl94qrj%2FZHeV7FY5cbTVjS7tGbBWPr5oqlQsf82%2BILKQX0FjC%2B%2F5ZqhUqIb0SBeC08IOxdPBd%2B%2BxpHR5%2FN0RgWhX5beYuIkMpMhKk4wDzKJWAnjBmZKsQPUCS6YUl3%2BzWeUPcVFOVxdET1vyb8uBjU8rXsHmHd8bvqRTVx6g9C%2Bsuo5QAoQr7Jg1U9rPRMftXC22DgQ0iJbZC93ndbMl8Ky2bmwhw9SvbugHM8JQ9ud7F1eb8TzUonziH31cPlmqSz43nzg3YvTKBVhGsXkMmvPIt7k7FZQX05PLKiQl0OsC%2BATP0tXolqL8f%2BmRWswB4ZsPc%2BG02CwlvNxcAfkihE%2FSCJFzVqA02HMP366b8GOqUBzjTvfip0HpOhZmrnLX2MQVzXspo%2FFD0Sm6p2%2BPcWyTvNJwRKPlN1mcZNF4DvVPNGFFz%2BNZgiUagtNUdd6YHX2kO%2FilpAdzuGg4m9wgjaDiMAaKOQv%2FwHzeJM1aD8gIPlrYV0c2ENfakNp6RdlZ0LzM3uOTcqboWwAS%2B4eeHaHdwCxohdB6wvSfVDeMhfAuqGmGZ3K2QECx8e1XO0BbhH8G4TfqSq&X-Amz-Signature=a9627265b20fab498182bf4138b76913586522e6f821a9fc2358d9ef395719f8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XCS6INJ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIDaOBmEEHH7p%2FgQGi%2BiFzX1lCg2xb529db%2Bw8hE5asQOAiEAl%2FGvAMvaDilBWtgZr%2B137rETn%2F%2Bg9ziyGWcUz4WqFF8qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsa%2FpdzZ9yItr0FtircAwFrniT05O%2FlpgGHlGVdxou6%2Frw2FKSc3JnT0x8XKH6omeLoGEgGul4qGA57q0wHU%2FJX%2BlSSwmZ9ZltDtTSb%2FG0hMrLSzolv3hqAJndaSmIZBv8G73SWnG7fdsDgApuCE4Uc22wIWVjsIbYe8aPWhF1%2BCBkIoVvGhrRjeivhAkMU2hxG%2B8OdXKsEw9JZew3XVIpDOInx%2BXf8%2BVLfDwi9Nio7pfAKpsOfkm7EUE5Ju7fVL9P5gl3zYFtoy2l0E3LhQs8YO3R5HZOPuTZgnspyBMOZ0Wbl94qrj%2FZHeV7FY5cbTVjS7tGbBWPr5oqlQsf82%2BILKQX0FjC%2B%2F5ZqhUqIb0SBeC08IOxdPBd%2B%2BxpHR5%2FN0RgWhX5beYuIkMpMhKk4wDzKJWAnjBmZKsQPUCS6YUl3%2BzWeUPcVFOVxdET1vyb8uBjU8rXsHmHd8bvqRTVx6g9C%2Bsuo5QAoQr7Jg1U9rPRMftXC22DgQ0iJbZC93ndbMl8Ky2bmwhw9SvbugHM8JQ9ud7F1eb8TzUonziH31cPlmqSz43nzg3YvTKBVhGsXkMmvPIt7k7FZQX05PLKiQl0OsC%2BATP0tXolqL8f%2BmRWswB4ZsPc%2BG02CwlvNxcAfkihE%2FSCJFzVqA02HMP366b8GOqUBzjTvfip0HpOhZmrnLX2MQVzXspo%2FFD0Sm6p2%2BPcWyTvNJwRKPlN1mcZNF4DvVPNGFFz%2BNZgiUagtNUdd6YHX2kO%2FilpAdzuGg4m9wgjaDiMAaKOQv%2FwHzeJM1aD8gIPlrYV0c2ENfakNp6RdlZ0LzM3uOTcqboWwAS%2B4eeHaHdwCxohdB6wvSfVDeMhfAuqGmGZ3K2QECx8e1XO0BbhH8G4TfqSq&X-Amz-Signature=3f42a5b83dd3decc6fce464b592fd5808220719cb0013739ed38b53c9fd49fc0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XCS6INJ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIDaOBmEEHH7p%2FgQGi%2BiFzX1lCg2xb529db%2Bw8hE5asQOAiEAl%2FGvAMvaDilBWtgZr%2B137rETn%2F%2Bg9ziyGWcUz4WqFF8qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsa%2FpdzZ9yItr0FtircAwFrniT05O%2FlpgGHlGVdxou6%2Frw2FKSc3JnT0x8XKH6omeLoGEgGul4qGA57q0wHU%2FJX%2BlSSwmZ9ZltDtTSb%2FG0hMrLSzolv3hqAJndaSmIZBv8G73SWnG7fdsDgApuCE4Uc22wIWVjsIbYe8aPWhF1%2BCBkIoVvGhrRjeivhAkMU2hxG%2B8OdXKsEw9JZew3XVIpDOInx%2BXf8%2BVLfDwi9Nio7pfAKpsOfkm7EUE5Ju7fVL9P5gl3zYFtoy2l0E3LhQs8YO3R5HZOPuTZgnspyBMOZ0Wbl94qrj%2FZHeV7FY5cbTVjS7tGbBWPr5oqlQsf82%2BILKQX0FjC%2B%2F5ZqhUqIb0SBeC08IOxdPBd%2B%2BxpHR5%2FN0RgWhX5beYuIkMpMhKk4wDzKJWAnjBmZKsQPUCS6YUl3%2BzWeUPcVFOVxdET1vyb8uBjU8rXsHmHd8bvqRTVx6g9C%2Bsuo5QAoQr7Jg1U9rPRMftXC22DgQ0iJbZC93ndbMl8Ky2bmwhw9SvbugHM8JQ9ud7F1eb8TzUonziH31cPlmqSz43nzg3YvTKBVhGsXkMmvPIt7k7FZQX05PLKiQl0OsC%2BATP0tXolqL8f%2BmRWswB4ZsPc%2BG02CwlvNxcAfkihE%2FSCJFzVqA02HMP366b8GOqUBzjTvfip0HpOhZmrnLX2MQVzXspo%2FFD0Sm6p2%2BPcWyTvNJwRKPlN1mcZNF4DvVPNGFFz%2BNZgiUagtNUdd6YHX2kO%2FilpAdzuGg4m9wgjaDiMAaKOQv%2FwHzeJM1aD8gIPlrYV0c2ENfakNp6RdlZ0LzM3uOTcqboWwAS%2B4eeHaHdwCxohdB6wvSfVDeMhfAuqGmGZ3K2QECx8e1XO0BbhH8G4TfqSq&X-Amz-Signature=87e99e3a643623037a5252483149e2c137da8d7aabeeb2f2a8c2e3ebde314ee7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XCS6INJ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIDaOBmEEHH7p%2FgQGi%2BiFzX1lCg2xb529db%2Bw8hE5asQOAiEAl%2FGvAMvaDilBWtgZr%2B137rETn%2F%2Bg9ziyGWcUz4WqFF8qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsa%2FpdzZ9yItr0FtircAwFrniT05O%2FlpgGHlGVdxou6%2Frw2FKSc3JnT0x8XKH6omeLoGEgGul4qGA57q0wHU%2FJX%2BlSSwmZ9ZltDtTSb%2FG0hMrLSzolv3hqAJndaSmIZBv8G73SWnG7fdsDgApuCE4Uc22wIWVjsIbYe8aPWhF1%2BCBkIoVvGhrRjeivhAkMU2hxG%2B8OdXKsEw9JZew3XVIpDOInx%2BXf8%2BVLfDwi9Nio7pfAKpsOfkm7EUE5Ju7fVL9P5gl3zYFtoy2l0E3LhQs8YO3R5HZOPuTZgnspyBMOZ0Wbl94qrj%2FZHeV7FY5cbTVjS7tGbBWPr5oqlQsf82%2BILKQX0FjC%2B%2F5ZqhUqIb0SBeC08IOxdPBd%2B%2BxpHR5%2FN0RgWhX5beYuIkMpMhKk4wDzKJWAnjBmZKsQPUCS6YUl3%2BzWeUPcVFOVxdET1vyb8uBjU8rXsHmHd8bvqRTVx6g9C%2Bsuo5QAoQr7Jg1U9rPRMftXC22DgQ0iJbZC93ndbMl8Ky2bmwhw9SvbugHM8JQ9ud7F1eb8TzUonziH31cPlmqSz43nzg3YvTKBVhGsXkMmvPIt7k7FZQX05PLKiQl0OsC%2BATP0tXolqL8f%2BmRWswB4ZsPc%2BG02CwlvNxcAfkihE%2FSCJFzVqA02HMP366b8GOqUBzjTvfip0HpOhZmrnLX2MQVzXspo%2FFD0Sm6p2%2BPcWyTvNJwRKPlN1mcZNF4DvVPNGFFz%2BNZgiUagtNUdd6YHX2kO%2FilpAdzuGg4m9wgjaDiMAaKOQv%2FwHzeJM1aD8gIPlrYV0c2ENfakNp6RdlZ0LzM3uOTcqboWwAS%2B4eeHaHdwCxohdB6wvSfVDeMhfAuqGmGZ3K2QECx8e1XO0BbhH8G4TfqSq&X-Amz-Signature=c5edac0df60c1186fc0b472c8ab42ecbe0155a582c3407d3e9536330559fcda1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XCS6INJ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIDaOBmEEHH7p%2FgQGi%2BiFzX1lCg2xb529db%2Bw8hE5asQOAiEAl%2FGvAMvaDilBWtgZr%2B137rETn%2F%2Bg9ziyGWcUz4WqFF8qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsa%2FpdzZ9yItr0FtircAwFrniT05O%2FlpgGHlGVdxou6%2Frw2FKSc3JnT0x8XKH6omeLoGEgGul4qGA57q0wHU%2FJX%2BlSSwmZ9ZltDtTSb%2FG0hMrLSzolv3hqAJndaSmIZBv8G73SWnG7fdsDgApuCE4Uc22wIWVjsIbYe8aPWhF1%2BCBkIoVvGhrRjeivhAkMU2hxG%2B8OdXKsEw9JZew3XVIpDOInx%2BXf8%2BVLfDwi9Nio7pfAKpsOfkm7EUE5Ju7fVL9P5gl3zYFtoy2l0E3LhQs8YO3R5HZOPuTZgnspyBMOZ0Wbl94qrj%2FZHeV7FY5cbTVjS7tGbBWPr5oqlQsf82%2BILKQX0FjC%2B%2F5ZqhUqIb0SBeC08IOxdPBd%2B%2BxpHR5%2FN0RgWhX5beYuIkMpMhKk4wDzKJWAnjBmZKsQPUCS6YUl3%2BzWeUPcVFOVxdET1vyb8uBjU8rXsHmHd8bvqRTVx6g9C%2Bsuo5QAoQr7Jg1U9rPRMftXC22DgQ0iJbZC93ndbMl8Ky2bmwhw9SvbugHM8JQ9ud7F1eb8TzUonziH31cPlmqSz43nzg3YvTKBVhGsXkMmvPIt7k7FZQX05PLKiQl0OsC%2BATP0tXolqL8f%2BmRWswB4ZsPc%2BG02CwlvNxcAfkihE%2FSCJFzVqA02HMP366b8GOqUBzjTvfip0HpOhZmrnLX2MQVzXspo%2FFD0Sm6p2%2BPcWyTvNJwRKPlN1mcZNF4DvVPNGFFz%2BNZgiUagtNUdd6YHX2kO%2FilpAdzuGg4m9wgjaDiMAaKOQv%2FwHzeJM1aD8gIPlrYV0c2ENfakNp6RdlZ0LzM3uOTcqboWwAS%2B4eeHaHdwCxohdB6wvSfVDeMhfAuqGmGZ3K2QECx8e1XO0BbhH8G4TfqSq&X-Amz-Signature=2ca541feb079554f12bf75d524843b440e21bccfee1e58d69e85e3e6cf0ff838&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XCS6INJ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIDaOBmEEHH7p%2FgQGi%2BiFzX1lCg2xb529db%2Bw8hE5asQOAiEAl%2FGvAMvaDilBWtgZr%2B137rETn%2F%2Bg9ziyGWcUz4WqFF8qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsa%2FpdzZ9yItr0FtircAwFrniT05O%2FlpgGHlGVdxou6%2Frw2FKSc3JnT0x8XKH6omeLoGEgGul4qGA57q0wHU%2FJX%2BlSSwmZ9ZltDtTSb%2FG0hMrLSzolv3hqAJndaSmIZBv8G73SWnG7fdsDgApuCE4Uc22wIWVjsIbYe8aPWhF1%2BCBkIoVvGhrRjeivhAkMU2hxG%2B8OdXKsEw9JZew3XVIpDOInx%2BXf8%2BVLfDwi9Nio7pfAKpsOfkm7EUE5Ju7fVL9P5gl3zYFtoy2l0E3LhQs8YO3R5HZOPuTZgnspyBMOZ0Wbl94qrj%2FZHeV7FY5cbTVjS7tGbBWPr5oqlQsf82%2BILKQX0FjC%2B%2F5ZqhUqIb0SBeC08IOxdPBd%2B%2BxpHR5%2FN0RgWhX5beYuIkMpMhKk4wDzKJWAnjBmZKsQPUCS6YUl3%2BzWeUPcVFOVxdET1vyb8uBjU8rXsHmHd8bvqRTVx6g9C%2Bsuo5QAoQr7Jg1U9rPRMftXC22DgQ0iJbZC93ndbMl8Ky2bmwhw9SvbugHM8JQ9ud7F1eb8TzUonziH31cPlmqSz43nzg3YvTKBVhGsXkMmvPIt7k7FZQX05PLKiQl0OsC%2BATP0tXolqL8f%2BmRWswB4ZsPc%2BG02CwlvNxcAfkihE%2FSCJFzVqA02HMP366b8GOqUBzjTvfip0HpOhZmrnLX2MQVzXspo%2FFD0Sm6p2%2BPcWyTvNJwRKPlN1mcZNF4DvVPNGFFz%2BNZgiUagtNUdd6YHX2kO%2FilpAdzuGg4m9wgjaDiMAaKOQv%2FwHzeJM1aD8gIPlrYV0c2ENfakNp6RdlZ0LzM3uOTcqboWwAS%2B4eeHaHdwCxohdB6wvSfVDeMhfAuqGmGZ3K2QECx8e1XO0BbhH8G4TfqSq&X-Amz-Signature=06af997f1062b1af24d7025a5a84752b7206d794155532db63a7ccdada4005d3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XCS6INJ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIDaOBmEEHH7p%2FgQGi%2BiFzX1lCg2xb529db%2Bw8hE5asQOAiEAl%2FGvAMvaDilBWtgZr%2B137rETn%2F%2Bg9ziyGWcUz4WqFF8qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsa%2FpdzZ9yItr0FtircAwFrniT05O%2FlpgGHlGVdxou6%2Frw2FKSc3JnT0x8XKH6omeLoGEgGul4qGA57q0wHU%2FJX%2BlSSwmZ9ZltDtTSb%2FG0hMrLSzolv3hqAJndaSmIZBv8G73SWnG7fdsDgApuCE4Uc22wIWVjsIbYe8aPWhF1%2BCBkIoVvGhrRjeivhAkMU2hxG%2B8OdXKsEw9JZew3XVIpDOInx%2BXf8%2BVLfDwi9Nio7pfAKpsOfkm7EUE5Ju7fVL9P5gl3zYFtoy2l0E3LhQs8YO3R5HZOPuTZgnspyBMOZ0Wbl94qrj%2FZHeV7FY5cbTVjS7tGbBWPr5oqlQsf82%2BILKQX0FjC%2B%2F5ZqhUqIb0SBeC08IOxdPBd%2B%2BxpHR5%2FN0RgWhX5beYuIkMpMhKk4wDzKJWAnjBmZKsQPUCS6YUl3%2BzWeUPcVFOVxdET1vyb8uBjU8rXsHmHd8bvqRTVx6g9C%2Bsuo5QAoQr7Jg1U9rPRMftXC22DgQ0iJbZC93ndbMl8Ky2bmwhw9SvbugHM8JQ9ud7F1eb8TzUonziH31cPlmqSz43nzg3YvTKBVhGsXkMmvPIt7k7FZQX05PLKiQl0OsC%2BATP0tXolqL8f%2BmRWswB4ZsPc%2BG02CwlvNxcAfkihE%2FSCJFzVqA02HMP366b8GOqUBzjTvfip0HpOhZmrnLX2MQVzXspo%2FFD0Sm6p2%2BPcWyTvNJwRKPlN1mcZNF4DvVPNGFFz%2BNZgiUagtNUdd6YHX2kO%2FilpAdzuGg4m9wgjaDiMAaKOQv%2FwHzeJM1aD8gIPlrYV0c2ENfakNp6RdlZ0LzM3uOTcqboWwAS%2B4eeHaHdwCxohdB6wvSfVDeMhfAuqGmGZ3K2QECx8e1XO0BbhH8G4TfqSq&X-Amz-Signature=11e98e4bcf8c4e8855ce8ed2ce6d651a8496b094e21e8178b414371d26668946&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
