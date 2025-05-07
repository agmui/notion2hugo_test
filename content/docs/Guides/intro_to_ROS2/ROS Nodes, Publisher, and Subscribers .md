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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QAUPNE7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICq4kqTYglHvZWNRzPhZjwrtQLeht%2F47B7TTmkFVsBEXAiAWKM%2FpTmNiBcY5fOwtiNsqJHNtKOGJx6xqxBFCUwlZAyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMRc5Qkn77mM8LX593KtwDyyCsCiCP5adAMdvTWvs8P%2FjY0YzcTWRc4hQRMun6MDJrpSw9MeIOAG2yUEPraNajYOWzLXZzl2MSQQbsJn6YAnXbbT1G5VVUgzJ1E%2BK%2F6kFXd6m%2FEOcqKVHNR%2FJxR8JQn9Ow6zHNeIsAGeVgKL0kQSAcc2K%2BOoAfU12mt3qyr5HsoJgjPjWy%2F0LskiEhfApppZBeGxxvJ21vQdoc%2FAn7zplSO8IHbvwGSch6vYbFZVoddUOoHoQzVBKRkb8brMuVoJgMjEPVwxTpSJnTS7Lgh0Xy26N73vKWo5xnPuOHQR3vt4i3uA4EgjWYyW3wGzY6F6iAKCroqPH7aqMohdohRauItPg8Lqm2rCgHI1DVh3AWOsLo90ti%2Bf%2FaMh5ITgu4zwR2psF0U%2B8CqbXKAWA4POE2eFNggBtYysln2f7D514l8Gf9aYwE6RaMpxP6ddOpq9ZuQSUSlTGuWIu7s0xGlooSwEOw7uCAkoWQnvonxNt6BUy0%2BkMpxhsJOTJ2gRyngQDYhVvi3UFJtM8OKxpKtw7I9twYcnO4doQtbAUQuDX48z5G1S87%2BbdY8lM6Si%2BSbcvnQuKlHB2zUMvjaHI2gHZPQwreub748Z5EfFRl6O2y1HnbiIJ0WX1RlkUwzLLswAY6pgE2rilpe%2FSg8v%2BrTwpA2Ga%2Fbb9j9SICX0HzOqrzRTdetNigSCcE0BaYiK1%2FelDCmx43jMg0CQgYEWHiGrFfBxRnxlvR15O3NnwyfI9MNkCqBttDrs%2B56GDCU9BmtOtYFeN0t1bB3qL6kvY5xEjv7zoPg2rPKbWsumxvvIrAZuefeVGyMO6Cxd1JK6clPpVh7U0gOu%2FHcLP8u0GrP8pPXWSw3NB4nmQS&X-Amz-Signature=e19c5ccecbd8c7e9b39d6ff1a356014d2adf3ed557d9326d7d19402999d9d898&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QAUPNE7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICq4kqTYglHvZWNRzPhZjwrtQLeht%2F47B7TTmkFVsBEXAiAWKM%2FpTmNiBcY5fOwtiNsqJHNtKOGJx6xqxBFCUwlZAyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMRc5Qkn77mM8LX593KtwDyyCsCiCP5adAMdvTWvs8P%2FjY0YzcTWRc4hQRMun6MDJrpSw9MeIOAG2yUEPraNajYOWzLXZzl2MSQQbsJn6YAnXbbT1G5VVUgzJ1E%2BK%2F6kFXd6m%2FEOcqKVHNR%2FJxR8JQn9Ow6zHNeIsAGeVgKL0kQSAcc2K%2BOoAfU12mt3qyr5HsoJgjPjWy%2F0LskiEhfApppZBeGxxvJ21vQdoc%2FAn7zplSO8IHbvwGSch6vYbFZVoddUOoHoQzVBKRkb8brMuVoJgMjEPVwxTpSJnTS7Lgh0Xy26N73vKWo5xnPuOHQR3vt4i3uA4EgjWYyW3wGzY6F6iAKCroqPH7aqMohdohRauItPg8Lqm2rCgHI1DVh3AWOsLo90ti%2Bf%2FaMh5ITgu4zwR2psF0U%2B8CqbXKAWA4POE2eFNggBtYysln2f7D514l8Gf9aYwE6RaMpxP6ddOpq9ZuQSUSlTGuWIu7s0xGlooSwEOw7uCAkoWQnvonxNt6BUy0%2BkMpxhsJOTJ2gRyngQDYhVvi3UFJtM8OKxpKtw7I9twYcnO4doQtbAUQuDX48z5G1S87%2BbdY8lM6Si%2BSbcvnQuKlHB2zUMvjaHI2gHZPQwreub748Z5EfFRl6O2y1HnbiIJ0WX1RlkUwzLLswAY6pgE2rilpe%2FSg8v%2BrTwpA2Ga%2Fbb9j9SICX0HzOqrzRTdetNigSCcE0BaYiK1%2FelDCmx43jMg0CQgYEWHiGrFfBxRnxlvR15O3NnwyfI9MNkCqBttDrs%2B56GDCU9BmtOtYFeN0t1bB3qL6kvY5xEjv7zoPg2rPKbWsumxvvIrAZuefeVGyMO6Cxd1JK6clPpVh7U0gOu%2FHcLP8u0GrP8pPXWSw3NB4nmQS&X-Amz-Signature=78de949194af3aec141be27b04cea1bf37abdb559680c44f72827b3f63d1da3e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QAUPNE7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICq4kqTYglHvZWNRzPhZjwrtQLeht%2F47B7TTmkFVsBEXAiAWKM%2FpTmNiBcY5fOwtiNsqJHNtKOGJx6xqxBFCUwlZAyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMRc5Qkn77mM8LX593KtwDyyCsCiCP5adAMdvTWvs8P%2FjY0YzcTWRc4hQRMun6MDJrpSw9MeIOAG2yUEPraNajYOWzLXZzl2MSQQbsJn6YAnXbbT1G5VVUgzJ1E%2BK%2F6kFXd6m%2FEOcqKVHNR%2FJxR8JQn9Ow6zHNeIsAGeVgKL0kQSAcc2K%2BOoAfU12mt3qyr5HsoJgjPjWy%2F0LskiEhfApppZBeGxxvJ21vQdoc%2FAn7zplSO8IHbvwGSch6vYbFZVoddUOoHoQzVBKRkb8brMuVoJgMjEPVwxTpSJnTS7Lgh0Xy26N73vKWo5xnPuOHQR3vt4i3uA4EgjWYyW3wGzY6F6iAKCroqPH7aqMohdohRauItPg8Lqm2rCgHI1DVh3AWOsLo90ti%2Bf%2FaMh5ITgu4zwR2psF0U%2B8CqbXKAWA4POE2eFNggBtYysln2f7D514l8Gf9aYwE6RaMpxP6ddOpq9ZuQSUSlTGuWIu7s0xGlooSwEOw7uCAkoWQnvonxNt6BUy0%2BkMpxhsJOTJ2gRyngQDYhVvi3UFJtM8OKxpKtw7I9twYcnO4doQtbAUQuDX48z5G1S87%2BbdY8lM6Si%2BSbcvnQuKlHB2zUMvjaHI2gHZPQwreub748Z5EfFRl6O2y1HnbiIJ0WX1RlkUwzLLswAY6pgE2rilpe%2FSg8v%2BrTwpA2Ga%2Fbb9j9SICX0HzOqrzRTdetNigSCcE0BaYiK1%2FelDCmx43jMg0CQgYEWHiGrFfBxRnxlvR15O3NnwyfI9MNkCqBttDrs%2B56GDCU9BmtOtYFeN0t1bB3qL6kvY5xEjv7zoPg2rPKbWsumxvvIrAZuefeVGyMO6Cxd1JK6clPpVh7U0gOu%2FHcLP8u0GrP8pPXWSw3NB4nmQS&X-Amz-Signature=0b3c5c6d02c6e02dd73c4794e583907b73bd69df6cffe5c064b344ad089b2323&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QAUPNE7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICq4kqTYglHvZWNRzPhZjwrtQLeht%2F47B7TTmkFVsBEXAiAWKM%2FpTmNiBcY5fOwtiNsqJHNtKOGJx6xqxBFCUwlZAyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMRc5Qkn77mM8LX593KtwDyyCsCiCP5adAMdvTWvs8P%2FjY0YzcTWRc4hQRMun6MDJrpSw9MeIOAG2yUEPraNajYOWzLXZzl2MSQQbsJn6YAnXbbT1G5VVUgzJ1E%2BK%2F6kFXd6m%2FEOcqKVHNR%2FJxR8JQn9Ow6zHNeIsAGeVgKL0kQSAcc2K%2BOoAfU12mt3qyr5HsoJgjPjWy%2F0LskiEhfApppZBeGxxvJ21vQdoc%2FAn7zplSO8IHbvwGSch6vYbFZVoddUOoHoQzVBKRkb8brMuVoJgMjEPVwxTpSJnTS7Lgh0Xy26N73vKWo5xnPuOHQR3vt4i3uA4EgjWYyW3wGzY6F6iAKCroqPH7aqMohdohRauItPg8Lqm2rCgHI1DVh3AWOsLo90ti%2Bf%2FaMh5ITgu4zwR2psF0U%2B8CqbXKAWA4POE2eFNggBtYysln2f7D514l8Gf9aYwE6RaMpxP6ddOpq9ZuQSUSlTGuWIu7s0xGlooSwEOw7uCAkoWQnvonxNt6BUy0%2BkMpxhsJOTJ2gRyngQDYhVvi3UFJtM8OKxpKtw7I9twYcnO4doQtbAUQuDX48z5G1S87%2BbdY8lM6Si%2BSbcvnQuKlHB2zUMvjaHI2gHZPQwreub748Z5EfFRl6O2y1HnbiIJ0WX1RlkUwzLLswAY6pgE2rilpe%2FSg8v%2BrTwpA2Ga%2Fbb9j9SICX0HzOqrzRTdetNigSCcE0BaYiK1%2FelDCmx43jMg0CQgYEWHiGrFfBxRnxlvR15O3NnwyfI9MNkCqBttDrs%2B56GDCU9BmtOtYFeN0t1bB3qL6kvY5xEjv7zoPg2rPKbWsumxvvIrAZuefeVGyMO6Cxd1JK6clPpVh7U0gOu%2FHcLP8u0GrP8pPXWSw3NB4nmQS&X-Amz-Signature=6464b418aeb62dbef841d0da7c8d8fc8983187533ce665cafa55509ce71728e2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QAUPNE7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICq4kqTYglHvZWNRzPhZjwrtQLeht%2F47B7TTmkFVsBEXAiAWKM%2FpTmNiBcY5fOwtiNsqJHNtKOGJx6xqxBFCUwlZAyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMRc5Qkn77mM8LX593KtwDyyCsCiCP5adAMdvTWvs8P%2FjY0YzcTWRc4hQRMun6MDJrpSw9MeIOAG2yUEPraNajYOWzLXZzl2MSQQbsJn6YAnXbbT1G5VVUgzJ1E%2BK%2F6kFXd6m%2FEOcqKVHNR%2FJxR8JQn9Ow6zHNeIsAGeVgKL0kQSAcc2K%2BOoAfU12mt3qyr5HsoJgjPjWy%2F0LskiEhfApppZBeGxxvJ21vQdoc%2FAn7zplSO8IHbvwGSch6vYbFZVoddUOoHoQzVBKRkb8brMuVoJgMjEPVwxTpSJnTS7Lgh0Xy26N73vKWo5xnPuOHQR3vt4i3uA4EgjWYyW3wGzY6F6iAKCroqPH7aqMohdohRauItPg8Lqm2rCgHI1DVh3AWOsLo90ti%2Bf%2FaMh5ITgu4zwR2psF0U%2B8CqbXKAWA4POE2eFNggBtYysln2f7D514l8Gf9aYwE6RaMpxP6ddOpq9ZuQSUSlTGuWIu7s0xGlooSwEOw7uCAkoWQnvonxNt6BUy0%2BkMpxhsJOTJ2gRyngQDYhVvi3UFJtM8OKxpKtw7I9twYcnO4doQtbAUQuDX48z5G1S87%2BbdY8lM6Si%2BSbcvnQuKlHB2zUMvjaHI2gHZPQwreub748Z5EfFRl6O2y1HnbiIJ0WX1RlkUwzLLswAY6pgE2rilpe%2FSg8v%2BrTwpA2Ga%2Fbb9j9SICX0HzOqrzRTdetNigSCcE0BaYiK1%2FelDCmx43jMg0CQgYEWHiGrFfBxRnxlvR15O3NnwyfI9MNkCqBttDrs%2B56GDCU9BmtOtYFeN0t1bB3qL6kvY5xEjv7zoPg2rPKbWsumxvvIrAZuefeVGyMO6Cxd1JK6clPpVh7U0gOu%2FHcLP8u0GrP8pPXWSw3NB4nmQS&X-Amz-Signature=56bfb197010c38405c42ac11bb6d3f408d05ff89bd40a4b57ecea486e1977e62&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QAUPNE7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICq4kqTYglHvZWNRzPhZjwrtQLeht%2F47B7TTmkFVsBEXAiAWKM%2FpTmNiBcY5fOwtiNsqJHNtKOGJx6xqxBFCUwlZAyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMRc5Qkn77mM8LX593KtwDyyCsCiCP5adAMdvTWvs8P%2FjY0YzcTWRc4hQRMun6MDJrpSw9MeIOAG2yUEPraNajYOWzLXZzl2MSQQbsJn6YAnXbbT1G5VVUgzJ1E%2BK%2F6kFXd6m%2FEOcqKVHNR%2FJxR8JQn9Ow6zHNeIsAGeVgKL0kQSAcc2K%2BOoAfU12mt3qyr5HsoJgjPjWy%2F0LskiEhfApppZBeGxxvJ21vQdoc%2FAn7zplSO8IHbvwGSch6vYbFZVoddUOoHoQzVBKRkb8brMuVoJgMjEPVwxTpSJnTS7Lgh0Xy26N73vKWo5xnPuOHQR3vt4i3uA4EgjWYyW3wGzY6F6iAKCroqPH7aqMohdohRauItPg8Lqm2rCgHI1DVh3AWOsLo90ti%2Bf%2FaMh5ITgu4zwR2psF0U%2B8CqbXKAWA4POE2eFNggBtYysln2f7D514l8Gf9aYwE6RaMpxP6ddOpq9ZuQSUSlTGuWIu7s0xGlooSwEOw7uCAkoWQnvonxNt6BUy0%2BkMpxhsJOTJ2gRyngQDYhVvi3UFJtM8OKxpKtw7I9twYcnO4doQtbAUQuDX48z5G1S87%2BbdY8lM6Si%2BSbcvnQuKlHB2zUMvjaHI2gHZPQwreub748Z5EfFRl6O2y1HnbiIJ0WX1RlkUwzLLswAY6pgE2rilpe%2FSg8v%2BrTwpA2Ga%2Fbb9j9SICX0HzOqrzRTdetNigSCcE0BaYiK1%2FelDCmx43jMg0CQgYEWHiGrFfBxRnxlvR15O3NnwyfI9MNkCqBttDrs%2B56GDCU9BmtOtYFeN0t1bB3qL6kvY5xEjv7zoPg2rPKbWsumxvvIrAZuefeVGyMO6Cxd1JK6clPpVh7U0gOu%2FHcLP8u0GrP8pPXWSw3NB4nmQS&X-Amz-Signature=610b947feea5d76ce4c064039250fa310e45697c6e38d50181c76972a804c751&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QAUPNE7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICq4kqTYglHvZWNRzPhZjwrtQLeht%2F47B7TTmkFVsBEXAiAWKM%2FpTmNiBcY5fOwtiNsqJHNtKOGJx6xqxBFCUwlZAyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMRc5Qkn77mM8LX593KtwDyyCsCiCP5adAMdvTWvs8P%2FjY0YzcTWRc4hQRMun6MDJrpSw9MeIOAG2yUEPraNajYOWzLXZzl2MSQQbsJn6YAnXbbT1G5VVUgzJ1E%2BK%2F6kFXd6m%2FEOcqKVHNR%2FJxR8JQn9Ow6zHNeIsAGeVgKL0kQSAcc2K%2BOoAfU12mt3qyr5HsoJgjPjWy%2F0LskiEhfApppZBeGxxvJ21vQdoc%2FAn7zplSO8IHbvwGSch6vYbFZVoddUOoHoQzVBKRkb8brMuVoJgMjEPVwxTpSJnTS7Lgh0Xy26N73vKWo5xnPuOHQR3vt4i3uA4EgjWYyW3wGzY6F6iAKCroqPH7aqMohdohRauItPg8Lqm2rCgHI1DVh3AWOsLo90ti%2Bf%2FaMh5ITgu4zwR2psF0U%2B8CqbXKAWA4POE2eFNggBtYysln2f7D514l8Gf9aYwE6RaMpxP6ddOpq9ZuQSUSlTGuWIu7s0xGlooSwEOw7uCAkoWQnvonxNt6BUy0%2BkMpxhsJOTJ2gRyngQDYhVvi3UFJtM8OKxpKtw7I9twYcnO4doQtbAUQuDX48z5G1S87%2BbdY8lM6Si%2BSbcvnQuKlHB2zUMvjaHI2gHZPQwreub748Z5EfFRl6O2y1HnbiIJ0WX1RlkUwzLLswAY6pgE2rilpe%2FSg8v%2BrTwpA2Ga%2Fbb9j9SICX0HzOqrzRTdetNigSCcE0BaYiK1%2FelDCmx43jMg0CQgYEWHiGrFfBxRnxlvR15O3NnwyfI9MNkCqBttDrs%2B56GDCU9BmtOtYFeN0t1bB3qL6kvY5xEjv7zoPg2rPKbWsumxvvIrAZuefeVGyMO6Cxd1JK6clPpVh7U0gOu%2FHcLP8u0GrP8pPXWSw3NB4nmQS&X-Amz-Signature=b0a0f3172c212f32c5745029416b8d9ea9df0ad71e300ac8992ad10fa5e52f31&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QAUPNE7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICq4kqTYglHvZWNRzPhZjwrtQLeht%2F47B7TTmkFVsBEXAiAWKM%2FpTmNiBcY5fOwtiNsqJHNtKOGJx6xqxBFCUwlZAyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMRc5Qkn77mM8LX593KtwDyyCsCiCP5adAMdvTWvs8P%2FjY0YzcTWRc4hQRMun6MDJrpSw9MeIOAG2yUEPraNajYOWzLXZzl2MSQQbsJn6YAnXbbT1G5VVUgzJ1E%2BK%2F6kFXd6m%2FEOcqKVHNR%2FJxR8JQn9Ow6zHNeIsAGeVgKL0kQSAcc2K%2BOoAfU12mt3qyr5HsoJgjPjWy%2F0LskiEhfApppZBeGxxvJ21vQdoc%2FAn7zplSO8IHbvwGSch6vYbFZVoddUOoHoQzVBKRkb8brMuVoJgMjEPVwxTpSJnTS7Lgh0Xy26N73vKWo5xnPuOHQR3vt4i3uA4EgjWYyW3wGzY6F6iAKCroqPH7aqMohdohRauItPg8Lqm2rCgHI1DVh3AWOsLo90ti%2Bf%2FaMh5ITgu4zwR2psF0U%2B8CqbXKAWA4POE2eFNggBtYysln2f7D514l8Gf9aYwE6RaMpxP6ddOpq9ZuQSUSlTGuWIu7s0xGlooSwEOw7uCAkoWQnvonxNt6BUy0%2BkMpxhsJOTJ2gRyngQDYhVvi3UFJtM8OKxpKtw7I9twYcnO4doQtbAUQuDX48z5G1S87%2BbdY8lM6Si%2BSbcvnQuKlHB2zUMvjaHI2gHZPQwreub748Z5EfFRl6O2y1HnbiIJ0WX1RlkUwzLLswAY6pgE2rilpe%2FSg8v%2BrTwpA2Ga%2Fbb9j9SICX0HzOqrzRTdetNigSCcE0BaYiK1%2FelDCmx43jMg0CQgYEWHiGrFfBxRnxlvR15O3NnwyfI9MNkCqBttDrs%2B56GDCU9BmtOtYFeN0t1bB3qL6kvY5xEjv7zoPg2rPKbWsumxvvIrAZuefeVGyMO6Cxd1JK6clPpVh7U0gOu%2FHcLP8u0GrP8pPXWSw3NB4nmQS&X-Amz-Signature=3afc219760e855c09b0cf6246774652cd2514bbd53545087e43e4c81bffca240&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
