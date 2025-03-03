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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3L34ZH4%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIBAEXJHj482c6kH%2FbB2zM0FLVG5ZZt8Mt0hAeld1k1AiEA3yEKSsCkvOnkNBsWQJFnuPNR1RgyONKC80C2cIsaLSIqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEATCiaWbaXjYBwyHyrcA7PB%2B1eUcTwX98R39LvJ3AUEAv3qjJygHXFf2L8w2NuXlIRF0UUbaZ6oR6NhV5rJnaM8kVOxucMu0qFF2MuyA3V8jrYqjFH6l9WxCf%2FlQXRL7TQg2gMNJZm5chel48dEB7jqLbiZXyIygfIt03VEHFcFfJUyOLIn5IH3wrAFd87RNcudXUUCJ7PCgRAUgcpXgVgnZFWuhv13nxx1l7wTvI2luDhL4bOZu7hXiHfnILbUfHQWXrtudlXLFmjsI9leLnoCm1xZRCbrGjW3PcMVYrB3rms7Geym9VqCYd%2B4NtLYvdyTJvl%2BYbfyOQxRWgcRtFkDJRgIbJBTUB8cojnaDJs0LeeeEcEdfyWWCKYNspQ%2FrNpbKzPc2KmpC20mchux2MN482rGW1VSYb0fhmNA3UHV3y%2B1syWc3pfJ7k%2BpJQiloOFNxa6gZ5ZnuavNE0w%2BTiCexOm8yjUhfdI8gGDOU4EBt%2BJVM1rj%2BKHyyxkZsdWT7dZ2nRaW1iESd2Mlg0C%2BiNh0opwiJ8z5cBVAmpvyLDbHVCwsyjURGKnvCpeWUzWnXpg7VeFTaCW0oHUHIJA%2BZd8c7VEYGrdixROOuLrB2rHLdUqJTV3P3E5srw%2BKJ9PV9K2nJMLt160PBDDFMKObl74GOqUBfsW5e1cyCzAaJeSBzUOym6Ma5e2H%2F9q1Du3bFNsiz4PSDnA5GnoX5aGk3gYtYLqwlOaJqJJwOGngf9Q3yJxRB3caPYfpYs%2BxLFh9MVCTPH1nvNnImEE3NQpDoHFpkyLkTEYUec9q28uCloS45K2LGios%2FoheSJt5VE8GpkaPmM68YpDLqnhUUyaFOxiE%2FMWJDdaal%2FaUc3sjbwPJGGkJTPna3sUj&X-Amz-Signature=15333f8e2d5a809c236f4e63ef8850afa509919f2403d7ab3693f1caf4a04a73&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3L34ZH4%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIBAEXJHj482c6kH%2FbB2zM0FLVG5ZZt8Mt0hAeld1k1AiEA3yEKSsCkvOnkNBsWQJFnuPNR1RgyONKC80C2cIsaLSIqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEATCiaWbaXjYBwyHyrcA7PB%2B1eUcTwX98R39LvJ3AUEAv3qjJygHXFf2L8w2NuXlIRF0UUbaZ6oR6NhV5rJnaM8kVOxucMu0qFF2MuyA3V8jrYqjFH6l9WxCf%2FlQXRL7TQg2gMNJZm5chel48dEB7jqLbiZXyIygfIt03VEHFcFfJUyOLIn5IH3wrAFd87RNcudXUUCJ7PCgRAUgcpXgVgnZFWuhv13nxx1l7wTvI2luDhL4bOZu7hXiHfnILbUfHQWXrtudlXLFmjsI9leLnoCm1xZRCbrGjW3PcMVYrB3rms7Geym9VqCYd%2B4NtLYvdyTJvl%2BYbfyOQxRWgcRtFkDJRgIbJBTUB8cojnaDJs0LeeeEcEdfyWWCKYNspQ%2FrNpbKzPc2KmpC20mchux2MN482rGW1VSYb0fhmNA3UHV3y%2B1syWc3pfJ7k%2BpJQiloOFNxa6gZ5ZnuavNE0w%2BTiCexOm8yjUhfdI8gGDOU4EBt%2BJVM1rj%2BKHyyxkZsdWT7dZ2nRaW1iESd2Mlg0C%2BiNh0opwiJ8z5cBVAmpvyLDbHVCwsyjURGKnvCpeWUzWnXpg7VeFTaCW0oHUHIJA%2BZd8c7VEYGrdixROOuLrB2rHLdUqJTV3P3E5srw%2BKJ9PV9K2nJMLt160PBDDFMKObl74GOqUBfsW5e1cyCzAaJeSBzUOym6Ma5e2H%2F9q1Du3bFNsiz4PSDnA5GnoX5aGk3gYtYLqwlOaJqJJwOGngf9Q3yJxRB3caPYfpYs%2BxLFh9MVCTPH1nvNnImEE3NQpDoHFpkyLkTEYUec9q28uCloS45K2LGios%2FoheSJt5VE8GpkaPmM68YpDLqnhUUyaFOxiE%2FMWJDdaal%2FaUc3sjbwPJGGkJTPna3sUj&X-Amz-Signature=1b6d86b71bcd9b3acaa89cb1eaf5b38a8d5da842ad0aff4eba69f620affe84ae&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3L34ZH4%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIBAEXJHj482c6kH%2FbB2zM0FLVG5ZZt8Mt0hAeld1k1AiEA3yEKSsCkvOnkNBsWQJFnuPNR1RgyONKC80C2cIsaLSIqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEATCiaWbaXjYBwyHyrcA7PB%2B1eUcTwX98R39LvJ3AUEAv3qjJygHXFf2L8w2NuXlIRF0UUbaZ6oR6NhV5rJnaM8kVOxucMu0qFF2MuyA3V8jrYqjFH6l9WxCf%2FlQXRL7TQg2gMNJZm5chel48dEB7jqLbiZXyIygfIt03VEHFcFfJUyOLIn5IH3wrAFd87RNcudXUUCJ7PCgRAUgcpXgVgnZFWuhv13nxx1l7wTvI2luDhL4bOZu7hXiHfnILbUfHQWXrtudlXLFmjsI9leLnoCm1xZRCbrGjW3PcMVYrB3rms7Geym9VqCYd%2B4NtLYvdyTJvl%2BYbfyOQxRWgcRtFkDJRgIbJBTUB8cojnaDJs0LeeeEcEdfyWWCKYNspQ%2FrNpbKzPc2KmpC20mchux2MN482rGW1VSYb0fhmNA3UHV3y%2B1syWc3pfJ7k%2BpJQiloOFNxa6gZ5ZnuavNE0w%2BTiCexOm8yjUhfdI8gGDOU4EBt%2BJVM1rj%2BKHyyxkZsdWT7dZ2nRaW1iESd2Mlg0C%2BiNh0opwiJ8z5cBVAmpvyLDbHVCwsyjURGKnvCpeWUzWnXpg7VeFTaCW0oHUHIJA%2BZd8c7VEYGrdixROOuLrB2rHLdUqJTV3P3E5srw%2BKJ9PV9K2nJMLt160PBDDFMKObl74GOqUBfsW5e1cyCzAaJeSBzUOym6Ma5e2H%2F9q1Du3bFNsiz4PSDnA5GnoX5aGk3gYtYLqwlOaJqJJwOGngf9Q3yJxRB3caPYfpYs%2BxLFh9MVCTPH1nvNnImEE3NQpDoHFpkyLkTEYUec9q28uCloS45K2LGios%2FoheSJt5VE8GpkaPmM68YpDLqnhUUyaFOxiE%2FMWJDdaal%2FaUc3sjbwPJGGkJTPna3sUj&X-Amz-Signature=111c56c22b5a7899716654b22304082d24ff30ec86f1fb57cfe953c5927ec494&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3L34ZH4%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIBAEXJHj482c6kH%2FbB2zM0FLVG5ZZt8Mt0hAeld1k1AiEA3yEKSsCkvOnkNBsWQJFnuPNR1RgyONKC80C2cIsaLSIqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEATCiaWbaXjYBwyHyrcA7PB%2B1eUcTwX98R39LvJ3AUEAv3qjJygHXFf2L8w2NuXlIRF0UUbaZ6oR6NhV5rJnaM8kVOxucMu0qFF2MuyA3V8jrYqjFH6l9WxCf%2FlQXRL7TQg2gMNJZm5chel48dEB7jqLbiZXyIygfIt03VEHFcFfJUyOLIn5IH3wrAFd87RNcudXUUCJ7PCgRAUgcpXgVgnZFWuhv13nxx1l7wTvI2luDhL4bOZu7hXiHfnILbUfHQWXrtudlXLFmjsI9leLnoCm1xZRCbrGjW3PcMVYrB3rms7Geym9VqCYd%2B4NtLYvdyTJvl%2BYbfyOQxRWgcRtFkDJRgIbJBTUB8cojnaDJs0LeeeEcEdfyWWCKYNspQ%2FrNpbKzPc2KmpC20mchux2MN482rGW1VSYb0fhmNA3UHV3y%2B1syWc3pfJ7k%2BpJQiloOFNxa6gZ5ZnuavNE0w%2BTiCexOm8yjUhfdI8gGDOU4EBt%2BJVM1rj%2BKHyyxkZsdWT7dZ2nRaW1iESd2Mlg0C%2BiNh0opwiJ8z5cBVAmpvyLDbHVCwsyjURGKnvCpeWUzWnXpg7VeFTaCW0oHUHIJA%2BZd8c7VEYGrdixROOuLrB2rHLdUqJTV3P3E5srw%2BKJ9PV9K2nJMLt160PBDDFMKObl74GOqUBfsW5e1cyCzAaJeSBzUOym6Ma5e2H%2F9q1Du3bFNsiz4PSDnA5GnoX5aGk3gYtYLqwlOaJqJJwOGngf9Q3yJxRB3caPYfpYs%2BxLFh9MVCTPH1nvNnImEE3NQpDoHFpkyLkTEYUec9q28uCloS45K2LGios%2FoheSJt5VE8GpkaPmM68YpDLqnhUUyaFOxiE%2FMWJDdaal%2FaUc3sjbwPJGGkJTPna3sUj&X-Amz-Signature=19ca2ad50562f6b73a01b62575a84c9628491dbf5776920b253271b0a6806d6f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3L34ZH4%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIBAEXJHj482c6kH%2FbB2zM0FLVG5ZZt8Mt0hAeld1k1AiEA3yEKSsCkvOnkNBsWQJFnuPNR1RgyONKC80C2cIsaLSIqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEATCiaWbaXjYBwyHyrcA7PB%2B1eUcTwX98R39LvJ3AUEAv3qjJygHXFf2L8w2NuXlIRF0UUbaZ6oR6NhV5rJnaM8kVOxucMu0qFF2MuyA3V8jrYqjFH6l9WxCf%2FlQXRL7TQg2gMNJZm5chel48dEB7jqLbiZXyIygfIt03VEHFcFfJUyOLIn5IH3wrAFd87RNcudXUUCJ7PCgRAUgcpXgVgnZFWuhv13nxx1l7wTvI2luDhL4bOZu7hXiHfnILbUfHQWXrtudlXLFmjsI9leLnoCm1xZRCbrGjW3PcMVYrB3rms7Geym9VqCYd%2B4NtLYvdyTJvl%2BYbfyOQxRWgcRtFkDJRgIbJBTUB8cojnaDJs0LeeeEcEdfyWWCKYNspQ%2FrNpbKzPc2KmpC20mchux2MN482rGW1VSYb0fhmNA3UHV3y%2B1syWc3pfJ7k%2BpJQiloOFNxa6gZ5ZnuavNE0w%2BTiCexOm8yjUhfdI8gGDOU4EBt%2BJVM1rj%2BKHyyxkZsdWT7dZ2nRaW1iESd2Mlg0C%2BiNh0opwiJ8z5cBVAmpvyLDbHVCwsyjURGKnvCpeWUzWnXpg7VeFTaCW0oHUHIJA%2BZd8c7VEYGrdixROOuLrB2rHLdUqJTV3P3E5srw%2BKJ9PV9K2nJMLt160PBDDFMKObl74GOqUBfsW5e1cyCzAaJeSBzUOym6Ma5e2H%2F9q1Du3bFNsiz4PSDnA5GnoX5aGk3gYtYLqwlOaJqJJwOGngf9Q3yJxRB3caPYfpYs%2BxLFh9MVCTPH1nvNnImEE3NQpDoHFpkyLkTEYUec9q28uCloS45K2LGios%2FoheSJt5VE8GpkaPmM68YpDLqnhUUyaFOxiE%2FMWJDdaal%2FaUc3sjbwPJGGkJTPna3sUj&X-Amz-Signature=e96e86ee9054d7958c85e67b446ca7407e8c0aa4e9a07463f3dfcddddbb7b11b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3L34ZH4%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIBAEXJHj482c6kH%2FbB2zM0FLVG5ZZt8Mt0hAeld1k1AiEA3yEKSsCkvOnkNBsWQJFnuPNR1RgyONKC80C2cIsaLSIqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEATCiaWbaXjYBwyHyrcA7PB%2B1eUcTwX98R39LvJ3AUEAv3qjJygHXFf2L8w2NuXlIRF0UUbaZ6oR6NhV5rJnaM8kVOxucMu0qFF2MuyA3V8jrYqjFH6l9WxCf%2FlQXRL7TQg2gMNJZm5chel48dEB7jqLbiZXyIygfIt03VEHFcFfJUyOLIn5IH3wrAFd87RNcudXUUCJ7PCgRAUgcpXgVgnZFWuhv13nxx1l7wTvI2luDhL4bOZu7hXiHfnILbUfHQWXrtudlXLFmjsI9leLnoCm1xZRCbrGjW3PcMVYrB3rms7Geym9VqCYd%2B4NtLYvdyTJvl%2BYbfyOQxRWgcRtFkDJRgIbJBTUB8cojnaDJs0LeeeEcEdfyWWCKYNspQ%2FrNpbKzPc2KmpC20mchux2MN482rGW1VSYb0fhmNA3UHV3y%2B1syWc3pfJ7k%2BpJQiloOFNxa6gZ5ZnuavNE0w%2BTiCexOm8yjUhfdI8gGDOU4EBt%2BJVM1rj%2BKHyyxkZsdWT7dZ2nRaW1iESd2Mlg0C%2BiNh0opwiJ8z5cBVAmpvyLDbHVCwsyjURGKnvCpeWUzWnXpg7VeFTaCW0oHUHIJA%2BZd8c7VEYGrdixROOuLrB2rHLdUqJTV3P3E5srw%2BKJ9PV9K2nJMLt160PBDDFMKObl74GOqUBfsW5e1cyCzAaJeSBzUOym6Ma5e2H%2F9q1Du3bFNsiz4PSDnA5GnoX5aGk3gYtYLqwlOaJqJJwOGngf9Q3yJxRB3caPYfpYs%2BxLFh9MVCTPH1nvNnImEE3NQpDoHFpkyLkTEYUec9q28uCloS45K2LGios%2FoheSJt5VE8GpkaPmM68YpDLqnhUUyaFOxiE%2FMWJDdaal%2FaUc3sjbwPJGGkJTPna3sUj&X-Amz-Signature=8348869d1b9fe0096569616136eb92befb37205774e1b8a7788b7b92f1c06a5f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3L34ZH4%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIBAEXJHj482c6kH%2FbB2zM0FLVG5ZZt8Mt0hAeld1k1AiEA3yEKSsCkvOnkNBsWQJFnuPNR1RgyONKC80C2cIsaLSIqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEATCiaWbaXjYBwyHyrcA7PB%2B1eUcTwX98R39LvJ3AUEAv3qjJygHXFf2L8w2NuXlIRF0UUbaZ6oR6NhV5rJnaM8kVOxucMu0qFF2MuyA3V8jrYqjFH6l9WxCf%2FlQXRL7TQg2gMNJZm5chel48dEB7jqLbiZXyIygfIt03VEHFcFfJUyOLIn5IH3wrAFd87RNcudXUUCJ7PCgRAUgcpXgVgnZFWuhv13nxx1l7wTvI2luDhL4bOZu7hXiHfnILbUfHQWXrtudlXLFmjsI9leLnoCm1xZRCbrGjW3PcMVYrB3rms7Geym9VqCYd%2B4NtLYvdyTJvl%2BYbfyOQxRWgcRtFkDJRgIbJBTUB8cojnaDJs0LeeeEcEdfyWWCKYNspQ%2FrNpbKzPc2KmpC20mchux2MN482rGW1VSYb0fhmNA3UHV3y%2B1syWc3pfJ7k%2BpJQiloOFNxa6gZ5ZnuavNE0w%2BTiCexOm8yjUhfdI8gGDOU4EBt%2BJVM1rj%2BKHyyxkZsdWT7dZ2nRaW1iESd2Mlg0C%2BiNh0opwiJ8z5cBVAmpvyLDbHVCwsyjURGKnvCpeWUzWnXpg7VeFTaCW0oHUHIJA%2BZd8c7VEYGrdixROOuLrB2rHLdUqJTV3P3E5srw%2BKJ9PV9K2nJMLt160PBDDFMKObl74GOqUBfsW5e1cyCzAaJeSBzUOym6Ma5e2H%2F9q1Du3bFNsiz4PSDnA5GnoX5aGk3gYtYLqwlOaJqJJwOGngf9Q3yJxRB3caPYfpYs%2BxLFh9MVCTPH1nvNnImEE3NQpDoHFpkyLkTEYUec9q28uCloS45K2LGios%2FoheSJt5VE8GpkaPmM68YpDLqnhUUyaFOxiE%2FMWJDdaal%2FaUc3sjbwPJGGkJTPna3sUj&X-Amz-Signature=2cb144ae0b2ee63a3aeac393709ce0134f04f1e802f017daf97d91d666c5ddef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3L34ZH4%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIBAEXJHj482c6kH%2FbB2zM0FLVG5ZZt8Mt0hAeld1k1AiEA3yEKSsCkvOnkNBsWQJFnuPNR1RgyONKC80C2cIsaLSIqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEATCiaWbaXjYBwyHyrcA7PB%2B1eUcTwX98R39LvJ3AUEAv3qjJygHXFf2L8w2NuXlIRF0UUbaZ6oR6NhV5rJnaM8kVOxucMu0qFF2MuyA3V8jrYqjFH6l9WxCf%2FlQXRL7TQg2gMNJZm5chel48dEB7jqLbiZXyIygfIt03VEHFcFfJUyOLIn5IH3wrAFd87RNcudXUUCJ7PCgRAUgcpXgVgnZFWuhv13nxx1l7wTvI2luDhL4bOZu7hXiHfnILbUfHQWXrtudlXLFmjsI9leLnoCm1xZRCbrGjW3PcMVYrB3rms7Geym9VqCYd%2B4NtLYvdyTJvl%2BYbfyOQxRWgcRtFkDJRgIbJBTUB8cojnaDJs0LeeeEcEdfyWWCKYNspQ%2FrNpbKzPc2KmpC20mchux2MN482rGW1VSYb0fhmNA3UHV3y%2B1syWc3pfJ7k%2BpJQiloOFNxa6gZ5ZnuavNE0w%2BTiCexOm8yjUhfdI8gGDOU4EBt%2BJVM1rj%2BKHyyxkZsdWT7dZ2nRaW1iESd2Mlg0C%2BiNh0opwiJ8z5cBVAmpvyLDbHVCwsyjURGKnvCpeWUzWnXpg7VeFTaCW0oHUHIJA%2BZd8c7VEYGrdixROOuLrB2rHLdUqJTV3P3E5srw%2BKJ9PV9K2nJMLt160PBDDFMKObl74GOqUBfsW5e1cyCzAaJeSBzUOym6Ma5e2H%2F9q1Du3bFNsiz4PSDnA5GnoX5aGk3gYtYLqwlOaJqJJwOGngf9Q3yJxRB3caPYfpYs%2BxLFh9MVCTPH1nvNnImEE3NQpDoHFpkyLkTEYUec9q28uCloS45K2LGios%2FoheSJt5VE8GpkaPmM68YpDLqnhUUyaFOxiE%2FMWJDdaal%2FaUc3sjbwPJGGkJTPna3sUj&X-Amz-Signature=3a46d8eda2309cf8752585c79778d42600737ac20df176cf281632269dc1465c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
