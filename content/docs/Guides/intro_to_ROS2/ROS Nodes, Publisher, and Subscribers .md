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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657YUA33A%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQD%2FbeYZkzL1HBG44wGe%2FeC01WGESP82E8m7lnXp%2BQfKPgIgOI0L7TXhSv%2F5sSX41MLgNrYO7%2B32EcRzU8NJ9%2BStG6AqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpgGiVoyM2C7oD14CrcAx1fXgLC7I5C99Ql%2F48pzRN8mEe0Zk92E%2BZS7OmgzpmMAETmObWU%2FWROPjnP1Fqa5uyrLgBTnzrp%2FV9bBMdYJgpOhw84613h6ABoClU0E%2FEErCg5VyzSvHLBleke0hbZ8cppf2Kl9x4vMckc7LMTg2P7V1%2Bahr9OIqj1HqgeIVYER2RqgTttM2auhn7eP8NQQw73VYNIhA2BcvUKKI9b%2FlmZ0EESPP9R%2FYLGMqNDncr83XRX6rMm%2FUgdXZ2IURDIkOl5VDBqbdKuA0z0UggFsgojPnjNC0aJ%2BkkFc0dx7wSjII5fbmQLDh1xcsYeMdMPGq6jCdRqnZB%2F0cKoar7RFr4KurTtLutLSWgxcVvfxe%2F%2B9c9WYpZLz7hTfXg8JZfS4YPTotKVHOhMCXHX2zuPBDiR17prGIOyI6WGm1pU49d8%2Bf5V%2B%2FXHAQNb9cKcyZu9KLq1yYFjDQibZ7ZjgLbS5TZuvDB8wtWdeYbGBTaVgcfuIImZRHzbWo2nJrCo0htaWiF%2BH2otXKGn8koXIU%2FlaEHoKV9D41ft7WR50PU7l6NyDPNQyP8gSuNOrw16Z3qinmX6x8wl4yz1cdEkJCT9WExMZKhS37aOvXvzs5Hwv6NrteLXFk%2BiEyOD%2BwFHMIjCjMEGOqUB17nXWYAMCYcBmzLg3j%2BTDaUSQ6WORVRFQCIbsBa8rdhh70myb1CwF5p0Zikk%2FXBLRrT%2FpauJkOOIy2F9lA9V6pIum4yIrS6Z5Y8MptFVMVle1Xm3sS6iC%2BqCc3wGMut3dP6qizMU9IyP1%2BUkZU8p6apZd8K78ItsBk0nZhsYNQ8RBUgOoLmDAsRGJnUa97Wby4YKYRtfZmt1qkVeCS9kiLrRiqcz&X-Amz-Signature=321e04a628321d35695a596ef28559cb3db8dd8cc555aae6c46cc5ac868c6699&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657YUA33A%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQD%2FbeYZkzL1HBG44wGe%2FeC01WGESP82E8m7lnXp%2BQfKPgIgOI0L7TXhSv%2F5sSX41MLgNrYO7%2B32EcRzU8NJ9%2BStG6AqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpgGiVoyM2C7oD14CrcAx1fXgLC7I5C99Ql%2F48pzRN8mEe0Zk92E%2BZS7OmgzpmMAETmObWU%2FWROPjnP1Fqa5uyrLgBTnzrp%2FV9bBMdYJgpOhw84613h6ABoClU0E%2FEErCg5VyzSvHLBleke0hbZ8cppf2Kl9x4vMckc7LMTg2P7V1%2Bahr9OIqj1HqgeIVYER2RqgTttM2auhn7eP8NQQw73VYNIhA2BcvUKKI9b%2FlmZ0EESPP9R%2FYLGMqNDncr83XRX6rMm%2FUgdXZ2IURDIkOl5VDBqbdKuA0z0UggFsgojPnjNC0aJ%2BkkFc0dx7wSjII5fbmQLDh1xcsYeMdMPGq6jCdRqnZB%2F0cKoar7RFr4KurTtLutLSWgxcVvfxe%2F%2B9c9WYpZLz7hTfXg8JZfS4YPTotKVHOhMCXHX2zuPBDiR17prGIOyI6WGm1pU49d8%2Bf5V%2B%2FXHAQNb9cKcyZu9KLq1yYFjDQibZ7ZjgLbS5TZuvDB8wtWdeYbGBTaVgcfuIImZRHzbWo2nJrCo0htaWiF%2BH2otXKGn8koXIU%2FlaEHoKV9D41ft7WR50PU7l6NyDPNQyP8gSuNOrw16Z3qinmX6x8wl4yz1cdEkJCT9WExMZKhS37aOvXvzs5Hwv6NrteLXFk%2BiEyOD%2BwFHMIjCjMEGOqUB17nXWYAMCYcBmzLg3j%2BTDaUSQ6WORVRFQCIbsBa8rdhh70myb1CwF5p0Zikk%2FXBLRrT%2FpauJkOOIy2F9lA9V6pIum4yIrS6Z5Y8MptFVMVle1Xm3sS6iC%2BqCc3wGMut3dP6qizMU9IyP1%2BUkZU8p6apZd8K78ItsBk0nZhsYNQ8RBUgOoLmDAsRGJnUa97Wby4YKYRtfZmt1qkVeCS9kiLrRiqcz&X-Amz-Signature=711ac37e671dfd1ebdce4406a5caf72321cbd3ecb14a431015474b217aa6a57d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657YUA33A%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQD%2FbeYZkzL1HBG44wGe%2FeC01WGESP82E8m7lnXp%2BQfKPgIgOI0L7TXhSv%2F5sSX41MLgNrYO7%2B32EcRzU8NJ9%2BStG6AqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpgGiVoyM2C7oD14CrcAx1fXgLC7I5C99Ql%2F48pzRN8mEe0Zk92E%2BZS7OmgzpmMAETmObWU%2FWROPjnP1Fqa5uyrLgBTnzrp%2FV9bBMdYJgpOhw84613h6ABoClU0E%2FEErCg5VyzSvHLBleke0hbZ8cppf2Kl9x4vMckc7LMTg2P7V1%2Bahr9OIqj1HqgeIVYER2RqgTttM2auhn7eP8NQQw73VYNIhA2BcvUKKI9b%2FlmZ0EESPP9R%2FYLGMqNDncr83XRX6rMm%2FUgdXZ2IURDIkOl5VDBqbdKuA0z0UggFsgojPnjNC0aJ%2BkkFc0dx7wSjII5fbmQLDh1xcsYeMdMPGq6jCdRqnZB%2F0cKoar7RFr4KurTtLutLSWgxcVvfxe%2F%2B9c9WYpZLz7hTfXg8JZfS4YPTotKVHOhMCXHX2zuPBDiR17prGIOyI6WGm1pU49d8%2Bf5V%2B%2FXHAQNb9cKcyZu9KLq1yYFjDQibZ7ZjgLbS5TZuvDB8wtWdeYbGBTaVgcfuIImZRHzbWo2nJrCo0htaWiF%2BH2otXKGn8koXIU%2FlaEHoKV9D41ft7WR50PU7l6NyDPNQyP8gSuNOrw16Z3qinmX6x8wl4yz1cdEkJCT9WExMZKhS37aOvXvzs5Hwv6NrteLXFk%2BiEyOD%2BwFHMIjCjMEGOqUB17nXWYAMCYcBmzLg3j%2BTDaUSQ6WORVRFQCIbsBa8rdhh70myb1CwF5p0Zikk%2FXBLRrT%2FpauJkOOIy2F9lA9V6pIum4yIrS6Z5Y8MptFVMVle1Xm3sS6iC%2BqCc3wGMut3dP6qizMU9IyP1%2BUkZU8p6apZd8K78ItsBk0nZhsYNQ8RBUgOoLmDAsRGJnUa97Wby4YKYRtfZmt1qkVeCS9kiLrRiqcz&X-Amz-Signature=6903fb548d9d1d035f866fb326a630e416220582bbbeeaabddda566b66a69117&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657YUA33A%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQD%2FbeYZkzL1HBG44wGe%2FeC01WGESP82E8m7lnXp%2BQfKPgIgOI0L7TXhSv%2F5sSX41MLgNrYO7%2B32EcRzU8NJ9%2BStG6AqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpgGiVoyM2C7oD14CrcAx1fXgLC7I5C99Ql%2F48pzRN8mEe0Zk92E%2BZS7OmgzpmMAETmObWU%2FWROPjnP1Fqa5uyrLgBTnzrp%2FV9bBMdYJgpOhw84613h6ABoClU0E%2FEErCg5VyzSvHLBleke0hbZ8cppf2Kl9x4vMckc7LMTg2P7V1%2Bahr9OIqj1HqgeIVYER2RqgTttM2auhn7eP8NQQw73VYNIhA2BcvUKKI9b%2FlmZ0EESPP9R%2FYLGMqNDncr83XRX6rMm%2FUgdXZ2IURDIkOl5VDBqbdKuA0z0UggFsgojPnjNC0aJ%2BkkFc0dx7wSjII5fbmQLDh1xcsYeMdMPGq6jCdRqnZB%2F0cKoar7RFr4KurTtLutLSWgxcVvfxe%2F%2B9c9WYpZLz7hTfXg8JZfS4YPTotKVHOhMCXHX2zuPBDiR17prGIOyI6WGm1pU49d8%2Bf5V%2B%2FXHAQNb9cKcyZu9KLq1yYFjDQibZ7ZjgLbS5TZuvDB8wtWdeYbGBTaVgcfuIImZRHzbWo2nJrCo0htaWiF%2BH2otXKGn8koXIU%2FlaEHoKV9D41ft7WR50PU7l6NyDPNQyP8gSuNOrw16Z3qinmX6x8wl4yz1cdEkJCT9WExMZKhS37aOvXvzs5Hwv6NrteLXFk%2BiEyOD%2BwFHMIjCjMEGOqUB17nXWYAMCYcBmzLg3j%2BTDaUSQ6WORVRFQCIbsBa8rdhh70myb1CwF5p0Zikk%2FXBLRrT%2FpauJkOOIy2F9lA9V6pIum4yIrS6Z5Y8MptFVMVle1Xm3sS6iC%2BqCc3wGMut3dP6qizMU9IyP1%2BUkZU8p6apZd8K78ItsBk0nZhsYNQ8RBUgOoLmDAsRGJnUa97Wby4YKYRtfZmt1qkVeCS9kiLrRiqcz&X-Amz-Signature=8224c4267d4a628463a384b633506ebd2edb47b91dbae5f1b2001ab7fc72742d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657YUA33A%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQD%2FbeYZkzL1HBG44wGe%2FeC01WGESP82E8m7lnXp%2BQfKPgIgOI0L7TXhSv%2F5sSX41MLgNrYO7%2B32EcRzU8NJ9%2BStG6AqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpgGiVoyM2C7oD14CrcAx1fXgLC7I5C99Ql%2F48pzRN8mEe0Zk92E%2BZS7OmgzpmMAETmObWU%2FWROPjnP1Fqa5uyrLgBTnzrp%2FV9bBMdYJgpOhw84613h6ABoClU0E%2FEErCg5VyzSvHLBleke0hbZ8cppf2Kl9x4vMckc7LMTg2P7V1%2Bahr9OIqj1HqgeIVYER2RqgTttM2auhn7eP8NQQw73VYNIhA2BcvUKKI9b%2FlmZ0EESPP9R%2FYLGMqNDncr83XRX6rMm%2FUgdXZ2IURDIkOl5VDBqbdKuA0z0UggFsgojPnjNC0aJ%2BkkFc0dx7wSjII5fbmQLDh1xcsYeMdMPGq6jCdRqnZB%2F0cKoar7RFr4KurTtLutLSWgxcVvfxe%2F%2B9c9WYpZLz7hTfXg8JZfS4YPTotKVHOhMCXHX2zuPBDiR17prGIOyI6WGm1pU49d8%2Bf5V%2B%2FXHAQNb9cKcyZu9KLq1yYFjDQibZ7ZjgLbS5TZuvDB8wtWdeYbGBTaVgcfuIImZRHzbWo2nJrCo0htaWiF%2BH2otXKGn8koXIU%2FlaEHoKV9D41ft7WR50PU7l6NyDPNQyP8gSuNOrw16Z3qinmX6x8wl4yz1cdEkJCT9WExMZKhS37aOvXvzs5Hwv6NrteLXFk%2BiEyOD%2BwFHMIjCjMEGOqUB17nXWYAMCYcBmzLg3j%2BTDaUSQ6WORVRFQCIbsBa8rdhh70myb1CwF5p0Zikk%2FXBLRrT%2FpauJkOOIy2F9lA9V6pIum4yIrS6Z5Y8MptFVMVle1Xm3sS6iC%2BqCc3wGMut3dP6qizMU9IyP1%2BUkZU8p6apZd8K78ItsBk0nZhsYNQ8RBUgOoLmDAsRGJnUa97Wby4YKYRtfZmt1qkVeCS9kiLrRiqcz&X-Amz-Signature=53e2af1fd1fec3a6489b0b10daa09ffe7caca136e18102d7134dc55fdb21b0aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657YUA33A%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQD%2FbeYZkzL1HBG44wGe%2FeC01WGESP82E8m7lnXp%2BQfKPgIgOI0L7TXhSv%2F5sSX41MLgNrYO7%2B32EcRzU8NJ9%2BStG6AqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpgGiVoyM2C7oD14CrcAx1fXgLC7I5C99Ql%2F48pzRN8mEe0Zk92E%2BZS7OmgzpmMAETmObWU%2FWROPjnP1Fqa5uyrLgBTnzrp%2FV9bBMdYJgpOhw84613h6ABoClU0E%2FEErCg5VyzSvHLBleke0hbZ8cppf2Kl9x4vMckc7LMTg2P7V1%2Bahr9OIqj1HqgeIVYER2RqgTttM2auhn7eP8NQQw73VYNIhA2BcvUKKI9b%2FlmZ0EESPP9R%2FYLGMqNDncr83XRX6rMm%2FUgdXZ2IURDIkOl5VDBqbdKuA0z0UggFsgojPnjNC0aJ%2BkkFc0dx7wSjII5fbmQLDh1xcsYeMdMPGq6jCdRqnZB%2F0cKoar7RFr4KurTtLutLSWgxcVvfxe%2F%2B9c9WYpZLz7hTfXg8JZfS4YPTotKVHOhMCXHX2zuPBDiR17prGIOyI6WGm1pU49d8%2Bf5V%2B%2FXHAQNb9cKcyZu9KLq1yYFjDQibZ7ZjgLbS5TZuvDB8wtWdeYbGBTaVgcfuIImZRHzbWo2nJrCo0htaWiF%2BH2otXKGn8koXIU%2FlaEHoKV9D41ft7WR50PU7l6NyDPNQyP8gSuNOrw16Z3qinmX6x8wl4yz1cdEkJCT9WExMZKhS37aOvXvzs5Hwv6NrteLXFk%2BiEyOD%2BwFHMIjCjMEGOqUB17nXWYAMCYcBmzLg3j%2BTDaUSQ6WORVRFQCIbsBa8rdhh70myb1CwF5p0Zikk%2FXBLRrT%2FpauJkOOIy2F9lA9V6pIum4yIrS6Z5Y8MptFVMVle1Xm3sS6iC%2BqCc3wGMut3dP6qizMU9IyP1%2BUkZU8p6apZd8K78ItsBk0nZhsYNQ8RBUgOoLmDAsRGJnUa97Wby4YKYRtfZmt1qkVeCS9kiLrRiqcz&X-Amz-Signature=0cfb92ea3071b0e192f076ae65cdfe3638e52dff08962ca89622373fbdb81ea3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657YUA33A%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQD%2FbeYZkzL1HBG44wGe%2FeC01WGESP82E8m7lnXp%2BQfKPgIgOI0L7TXhSv%2F5sSX41MLgNrYO7%2B32EcRzU8NJ9%2BStG6AqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpgGiVoyM2C7oD14CrcAx1fXgLC7I5C99Ql%2F48pzRN8mEe0Zk92E%2BZS7OmgzpmMAETmObWU%2FWROPjnP1Fqa5uyrLgBTnzrp%2FV9bBMdYJgpOhw84613h6ABoClU0E%2FEErCg5VyzSvHLBleke0hbZ8cppf2Kl9x4vMckc7LMTg2P7V1%2Bahr9OIqj1HqgeIVYER2RqgTttM2auhn7eP8NQQw73VYNIhA2BcvUKKI9b%2FlmZ0EESPP9R%2FYLGMqNDncr83XRX6rMm%2FUgdXZ2IURDIkOl5VDBqbdKuA0z0UggFsgojPnjNC0aJ%2BkkFc0dx7wSjII5fbmQLDh1xcsYeMdMPGq6jCdRqnZB%2F0cKoar7RFr4KurTtLutLSWgxcVvfxe%2F%2B9c9WYpZLz7hTfXg8JZfS4YPTotKVHOhMCXHX2zuPBDiR17prGIOyI6WGm1pU49d8%2Bf5V%2B%2FXHAQNb9cKcyZu9KLq1yYFjDQibZ7ZjgLbS5TZuvDB8wtWdeYbGBTaVgcfuIImZRHzbWo2nJrCo0htaWiF%2BH2otXKGn8koXIU%2FlaEHoKV9D41ft7WR50PU7l6NyDPNQyP8gSuNOrw16Z3qinmX6x8wl4yz1cdEkJCT9WExMZKhS37aOvXvzs5Hwv6NrteLXFk%2BiEyOD%2BwFHMIjCjMEGOqUB17nXWYAMCYcBmzLg3j%2BTDaUSQ6WORVRFQCIbsBa8rdhh70myb1CwF5p0Zikk%2FXBLRrT%2FpauJkOOIy2F9lA9V6pIum4yIrS6Z5Y8MptFVMVle1Xm3sS6iC%2BqCc3wGMut3dP6qizMU9IyP1%2BUkZU8p6apZd8K78ItsBk0nZhsYNQ8RBUgOoLmDAsRGJnUa97Wby4YKYRtfZmt1qkVeCS9kiLrRiqcz&X-Amz-Signature=60369d1dba86164a1d007c9f942afb576168e71d1adb7cb4d14150a55bcfd069&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657YUA33A%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQD%2FbeYZkzL1HBG44wGe%2FeC01WGESP82E8m7lnXp%2BQfKPgIgOI0L7TXhSv%2F5sSX41MLgNrYO7%2B32EcRzU8NJ9%2BStG6AqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpgGiVoyM2C7oD14CrcAx1fXgLC7I5C99Ql%2F48pzRN8mEe0Zk92E%2BZS7OmgzpmMAETmObWU%2FWROPjnP1Fqa5uyrLgBTnzrp%2FV9bBMdYJgpOhw84613h6ABoClU0E%2FEErCg5VyzSvHLBleke0hbZ8cppf2Kl9x4vMckc7LMTg2P7V1%2Bahr9OIqj1HqgeIVYER2RqgTttM2auhn7eP8NQQw73VYNIhA2BcvUKKI9b%2FlmZ0EESPP9R%2FYLGMqNDncr83XRX6rMm%2FUgdXZ2IURDIkOl5VDBqbdKuA0z0UggFsgojPnjNC0aJ%2BkkFc0dx7wSjII5fbmQLDh1xcsYeMdMPGq6jCdRqnZB%2F0cKoar7RFr4KurTtLutLSWgxcVvfxe%2F%2B9c9WYpZLz7hTfXg8JZfS4YPTotKVHOhMCXHX2zuPBDiR17prGIOyI6WGm1pU49d8%2Bf5V%2B%2FXHAQNb9cKcyZu9KLq1yYFjDQibZ7ZjgLbS5TZuvDB8wtWdeYbGBTaVgcfuIImZRHzbWo2nJrCo0htaWiF%2BH2otXKGn8koXIU%2FlaEHoKV9D41ft7WR50PU7l6NyDPNQyP8gSuNOrw16Z3qinmX6x8wl4yz1cdEkJCT9WExMZKhS37aOvXvzs5Hwv6NrteLXFk%2BiEyOD%2BwFHMIjCjMEGOqUB17nXWYAMCYcBmzLg3j%2BTDaUSQ6WORVRFQCIbsBa8rdhh70myb1CwF5p0Zikk%2FXBLRrT%2FpauJkOOIy2F9lA9V6pIum4yIrS6Z5Y8MptFVMVle1Xm3sS6iC%2BqCc3wGMut3dP6qizMU9IyP1%2BUkZU8p6apZd8K78ItsBk0nZhsYNQ8RBUgOoLmDAsRGJnUa97Wby4YKYRtfZmt1qkVeCS9kiLrRiqcz&X-Amz-Signature=51aef7b7fb57dc09376870254ab8d47c22e6fde01bd507b3ff0eb7529949b698&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
