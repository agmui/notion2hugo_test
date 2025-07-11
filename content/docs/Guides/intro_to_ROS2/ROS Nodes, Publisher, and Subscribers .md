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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZDPW54G%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOvIUzcnQwBxdjL0AS3An5RD%2BXSkWbmZRpyNT7DshrzAiEA789Ww%2B8Gw6p6HRDpncX3uHqQXkid%2BuzTzKBIhXj1%2BN8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWHnP%2Fim0Go5m8Q8yrcA%2BRZezHSaVXuxbnqqPPVTy5NStZURw5g5KIwLLLGa7U1wlKqhnfTBlR2tUITSLY7hFtMZZuFn%2B2Ylfq0spIEee6N4TZxpLIj0C7AJnfQnriizPRPALQSOQHDJw0hPTc3Xc7NVWZZQOk0CVGvm7IwBASYsw%2Big2iXrwZd6Upc0g3hA3vjGm1X72iMyPonr532B%2FamwNaI5w9Sj2CgNgFjqXhWRGCL3NuZNLKbkf9T0n0wePOU1bBo20FFee34GwNVPFTbauKU24ux9a1qnesRAoNpFy2Icq9kjVStA6WGY9Q7zmga6iSch5A9fgxY%2FBVkER1QHUPKXoACcJ8beQHxxMFRfj7tJeTw6gB%2BUlz5cl6g%2FpBAlNt1jZBklwSmAFk2YtmzBYEoRZdcNaZnh747etIC6DWIT1Ky69CyU6rQ%2FDlFIOxioYr8%2BXkYedj5Uuggfe4CwDYCpMz4v6Kjao0I5Kb2zPgXNLdbR%2F8jkHFlFuLXUHkJzhb2jpRI3zsJYgyMZSIJRdYVpS%2FUWrwUsgwjdQ%2BdJoX2wisFfoJdcH08Sp5SacPVnLPUfnvT3CDc0M55VFQKZ7tGiggvdByDUcKG73EYHJAEG50nZSiyItkKnXS3A%2F7BJ%2FhDcg4ubGB2MLzUw8MGOqUBN8qTr%2B8bh2KkYbSS%2Bp3M%2Bwm%2B3NlbgLUV1Sl6BitJlDHLH2jfLrwA1lXZKkOVl8ePl3sH1lhWpCbkV9Etrf25DOfZCOSyjw1pGdzeKnYyu7C9IB3jiCqAGcxe4pfRUH1VibeORSXvIJlhjr6uGGw1bMXdXLGw45MUAyswxasTycPizOomFwiq1khM5NjuZJ6YGIelJS8C8rZ0ulAIKqfJiuqtG11S&X-Amz-Signature=58ed24eb40ba9680fd8503f100856b047f1e21e34e26417a7f1a8ba42b9428d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZDPW54G%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOvIUzcnQwBxdjL0AS3An5RD%2BXSkWbmZRpyNT7DshrzAiEA789Ww%2B8Gw6p6HRDpncX3uHqQXkid%2BuzTzKBIhXj1%2BN8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWHnP%2Fim0Go5m8Q8yrcA%2BRZezHSaVXuxbnqqPPVTy5NStZURw5g5KIwLLLGa7U1wlKqhnfTBlR2tUITSLY7hFtMZZuFn%2B2Ylfq0spIEee6N4TZxpLIj0C7AJnfQnriizPRPALQSOQHDJw0hPTc3Xc7NVWZZQOk0CVGvm7IwBASYsw%2Big2iXrwZd6Upc0g3hA3vjGm1X72iMyPonr532B%2FamwNaI5w9Sj2CgNgFjqXhWRGCL3NuZNLKbkf9T0n0wePOU1bBo20FFee34GwNVPFTbauKU24ux9a1qnesRAoNpFy2Icq9kjVStA6WGY9Q7zmga6iSch5A9fgxY%2FBVkER1QHUPKXoACcJ8beQHxxMFRfj7tJeTw6gB%2BUlz5cl6g%2FpBAlNt1jZBklwSmAFk2YtmzBYEoRZdcNaZnh747etIC6DWIT1Ky69CyU6rQ%2FDlFIOxioYr8%2BXkYedj5Uuggfe4CwDYCpMz4v6Kjao0I5Kb2zPgXNLdbR%2F8jkHFlFuLXUHkJzhb2jpRI3zsJYgyMZSIJRdYVpS%2FUWrwUsgwjdQ%2BdJoX2wisFfoJdcH08Sp5SacPVnLPUfnvT3CDc0M55VFQKZ7tGiggvdByDUcKG73EYHJAEG50nZSiyItkKnXS3A%2F7BJ%2FhDcg4ubGB2MLzUw8MGOqUBN8qTr%2B8bh2KkYbSS%2Bp3M%2Bwm%2B3NlbgLUV1Sl6BitJlDHLH2jfLrwA1lXZKkOVl8ePl3sH1lhWpCbkV9Etrf25DOfZCOSyjw1pGdzeKnYyu7C9IB3jiCqAGcxe4pfRUH1VibeORSXvIJlhjr6uGGw1bMXdXLGw45MUAyswxasTycPizOomFwiq1khM5NjuZJ6YGIelJS8C8rZ0ulAIKqfJiuqtG11S&X-Amz-Signature=278d5b3640815234d39358ca281c1e2c7d9d25660f9d978bb8c0426b4c95a759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZDPW54G%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOvIUzcnQwBxdjL0AS3An5RD%2BXSkWbmZRpyNT7DshrzAiEA789Ww%2B8Gw6p6HRDpncX3uHqQXkid%2BuzTzKBIhXj1%2BN8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWHnP%2Fim0Go5m8Q8yrcA%2BRZezHSaVXuxbnqqPPVTy5NStZURw5g5KIwLLLGa7U1wlKqhnfTBlR2tUITSLY7hFtMZZuFn%2B2Ylfq0spIEee6N4TZxpLIj0C7AJnfQnriizPRPALQSOQHDJw0hPTc3Xc7NVWZZQOk0CVGvm7IwBASYsw%2Big2iXrwZd6Upc0g3hA3vjGm1X72iMyPonr532B%2FamwNaI5w9Sj2CgNgFjqXhWRGCL3NuZNLKbkf9T0n0wePOU1bBo20FFee34GwNVPFTbauKU24ux9a1qnesRAoNpFy2Icq9kjVStA6WGY9Q7zmga6iSch5A9fgxY%2FBVkER1QHUPKXoACcJ8beQHxxMFRfj7tJeTw6gB%2BUlz5cl6g%2FpBAlNt1jZBklwSmAFk2YtmzBYEoRZdcNaZnh747etIC6DWIT1Ky69CyU6rQ%2FDlFIOxioYr8%2BXkYedj5Uuggfe4CwDYCpMz4v6Kjao0I5Kb2zPgXNLdbR%2F8jkHFlFuLXUHkJzhb2jpRI3zsJYgyMZSIJRdYVpS%2FUWrwUsgwjdQ%2BdJoX2wisFfoJdcH08Sp5SacPVnLPUfnvT3CDc0M55VFQKZ7tGiggvdByDUcKG73EYHJAEG50nZSiyItkKnXS3A%2F7BJ%2FhDcg4ubGB2MLzUw8MGOqUBN8qTr%2B8bh2KkYbSS%2Bp3M%2Bwm%2B3NlbgLUV1Sl6BitJlDHLH2jfLrwA1lXZKkOVl8ePl3sH1lhWpCbkV9Etrf25DOfZCOSyjw1pGdzeKnYyu7C9IB3jiCqAGcxe4pfRUH1VibeORSXvIJlhjr6uGGw1bMXdXLGw45MUAyswxasTycPizOomFwiq1khM5NjuZJ6YGIelJS8C8rZ0ulAIKqfJiuqtG11S&X-Amz-Signature=f10709d32e3f8e9a10337b2e8fb0998874deaa50f9b33da79cbf960cdb8cdeba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZDPW54G%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOvIUzcnQwBxdjL0AS3An5RD%2BXSkWbmZRpyNT7DshrzAiEA789Ww%2B8Gw6p6HRDpncX3uHqQXkid%2BuzTzKBIhXj1%2BN8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWHnP%2Fim0Go5m8Q8yrcA%2BRZezHSaVXuxbnqqPPVTy5NStZURw5g5KIwLLLGa7U1wlKqhnfTBlR2tUITSLY7hFtMZZuFn%2B2Ylfq0spIEee6N4TZxpLIj0C7AJnfQnriizPRPALQSOQHDJw0hPTc3Xc7NVWZZQOk0CVGvm7IwBASYsw%2Big2iXrwZd6Upc0g3hA3vjGm1X72iMyPonr532B%2FamwNaI5w9Sj2CgNgFjqXhWRGCL3NuZNLKbkf9T0n0wePOU1bBo20FFee34GwNVPFTbauKU24ux9a1qnesRAoNpFy2Icq9kjVStA6WGY9Q7zmga6iSch5A9fgxY%2FBVkER1QHUPKXoACcJ8beQHxxMFRfj7tJeTw6gB%2BUlz5cl6g%2FpBAlNt1jZBklwSmAFk2YtmzBYEoRZdcNaZnh747etIC6DWIT1Ky69CyU6rQ%2FDlFIOxioYr8%2BXkYedj5Uuggfe4CwDYCpMz4v6Kjao0I5Kb2zPgXNLdbR%2F8jkHFlFuLXUHkJzhb2jpRI3zsJYgyMZSIJRdYVpS%2FUWrwUsgwjdQ%2BdJoX2wisFfoJdcH08Sp5SacPVnLPUfnvT3CDc0M55VFQKZ7tGiggvdByDUcKG73EYHJAEG50nZSiyItkKnXS3A%2F7BJ%2FhDcg4ubGB2MLzUw8MGOqUBN8qTr%2B8bh2KkYbSS%2Bp3M%2Bwm%2B3NlbgLUV1Sl6BitJlDHLH2jfLrwA1lXZKkOVl8ePl3sH1lhWpCbkV9Etrf25DOfZCOSyjw1pGdzeKnYyu7C9IB3jiCqAGcxe4pfRUH1VibeORSXvIJlhjr6uGGw1bMXdXLGw45MUAyswxasTycPizOomFwiq1khM5NjuZJ6YGIelJS8C8rZ0ulAIKqfJiuqtG11S&X-Amz-Signature=36ae4f5ef0daf119797024b4d9aff56b2c5472b452d9d4fa11146710ece89831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZDPW54G%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOvIUzcnQwBxdjL0AS3An5RD%2BXSkWbmZRpyNT7DshrzAiEA789Ww%2B8Gw6p6HRDpncX3uHqQXkid%2BuzTzKBIhXj1%2BN8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWHnP%2Fim0Go5m8Q8yrcA%2BRZezHSaVXuxbnqqPPVTy5NStZURw5g5KIwLLLGa7U1wlKqhnfTBlR2tUITSLY7hFtMZZuFn%2B2Ylfq0spIEee6N4TZxpLIj0C7AJnfQnriizPRPALQSOQHDJw0hPTc3Xc7NVWZZQOk0CVGvm7IwBASYsw%2Big2iXrwZd6Upc0g3hA3vjGm1X72iMyPonr532B%2FamwNaI5w9Sj2CgNgFjqXhWRGCL3NuZNLKbkf9T0n0wePOU1bBo20FFee34GwNVPFTbauKU24ux9a1qnesRAoNpFy2Icq9kjVStA6WGY9Q7zmga6iSch5A9fgxY%2FBVkER1QHUPKXoACcJ8beQHxxMFRfj7tJeTw6gB%2BUlz5cl6g%2FpBAlNt1jZBklwSmAFk2YtmzBYEoRZdcNaZnh747etIC6DWIT1Ky69CyU6rQ%2FDlFIOxioYr8%2BXkYedj5Uuggfe4CwDYCpMz4v6Kjao0I5Kb2zPgXNLdbR%2F8jkHFlFuLXUHkJzhb2jpRI3zsJYgyMZSIJRdYVpS%2FUWrwUsgwjdQ%2BdJoX2wisFfoJdcH08Sp5SacPVnLPUfnvT3CDc0M55VFQKZ7tGiggvdByDUcKG73EYHJAEG50nZSiyItkKnXS3A%2F7BJ%2FhDcg4ubGB2MLzUw8MGOqUBN8qTr%2B8bh2KkYbSS%2Bp3M%2Bwm%2B3NlbgLUV1Sl6BitJlDHLH2jfLrwA1lXZKkOVl8ePl3sH1lhWpCbkV9Etrf25DOfZCOSyjw1pGdzeKnYyu7C9IB3jiCqAGcxe4pfRUH1VibeORSXvIJlhjr6uGGw1bMXdXLGw45MUAyswxasTycPizOomFwiq1khM5NjuZJ6YGIelJS8C8rZ0ulAIKqfJiuqtG11S&X-Amz-Signature=ed54794d50ef08572543c06247b3c28100e9291775249f8540d1eeed4d2532d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZDPW54G%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOvIUzcnQwBxdjL0AS3An5RD%2BXSkWbmZRpyNT7DshrzAiEA789Ww%2B8Gw6p6HRDpncX3uHqQXkid%2BuzTzKBIhXj1%2BN8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWHnP%2Fim0Go5m8Q8yrcA%2BRZezHSaVXuxbnqqPPVTy5NStZURw5g5KIwLLLGa7U1wlKqhnfTBlR2tUITSLY7hFtMZZuFn%2B2Ylfq0spIEee6N4TZxpLIj0C7AJnfQnriizPRPALQSOQHDJw0hPTc3Xc7NVWZZQOk0CVGvm7IwBASYsw%2Big2iXrwZd6Upc0g3hA3vjGm1X72iMyPonr532B%2FamwNaI5w9Sj2CgNgFjqXhWRGCL3NuZNLKbkf9T0n0wePOU1bBo20FFee34GwNVPFTbauKU24ux9a1qnesRAoNpFy2Icq9kjVStA6WGY9Q7zmga6iSch5A9fgxY%2FBVkER1QHUPKXoACcJ8beQHxxMFRfj7tJeTw6gB%2BUlz5cl6g%2FpBAlNt1jZBklwSmAFk2YtmzBYEoRZdcNaZnh747etIC6DWIT1Ky69CyU6rQ%2FDlFIOxioYr8%2BXkYedj5Uuggfe4CwDYCpMz4v6Kjao0I5Kb2zPgXNLdbR%2F8jkHFlFuLXUHkJzhb2jpRI3zsJYgyMZSIJRdYVpS%2FUWrwUsgwjdQ%2BdJoX2wisFfoJdcH08Sp5SacPVnLPUfnvT3CDc0M55VFQKZ7tGiggvdByDUcKG73EYHJAEG50nZSiyItkKnXS3A%2F7BJ%2FhDcg4ubGB2MLzUw8MGOqUBN8qTr%2B8bh2KkYbSS%2Bp3M%2Bwm%2B3NlbgLUV1Sl6BitJlDHLH2jfLrwA1lXZKkOVl8ePl3sH1lhWpCbkV9Etrf25DOfZCOSyjw1pGdzeKnYyu7C9IB3jiCqAGcxe4pfRUH1VibeORSXvIJlhjr6uGGw1bMXdXLGw45MUAyswxasTycPizOomFwiq1khM5NjuZJ6YGIelJS8C8rZ0ulAIKqfJiuqtG11S&X-Amz-Signature=d8666bc1e0bbcb6fe7814222464d4ebf7b227b8ca19a2d396d78d9f9a8f7ad8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZDPW54G%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOvIUzcnQwBxdjL0AS3An5RD%2BXSkWbmZRpyNT7DshrzAiEA789Ww%2B8Gw6p6HRDpncX3uHqQXkid%2BuzTzKBIhXj1%2BN8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWHnP%2Fim0Go5m8Q8yrcA%2BRZezHSaVXuxbnqqPPVTy5NStZURw5g5KIwLLLGa7U1wlKqhnfTBlR2tUITSLY7hFtMZZuFn%2B2Ylfq0spIEee6N4TZxpLIj0C7AJnfQnriizPRPALQSOQHDJw0hPTc3Xc7NVWZZQOk0CVGvm7IwBASYsw%2Big2iXrwZd6Upc0g3hA3vjGm1X72iMyPonr532B%2FamwNaI5w9Sj2CgNgFjqXhWRGCL3NuZNLKbkf9T0n0wePOU1bBo20FFee34GwNVPFTbauKU24ux9a1qnesRAoNpFy2Icq9kjVStA6WGY9Q7zmga6iSch5A9fgxY%2FBVkER1QHUPKXoACcJ8beQHxxMFRfj7tJeTw6gB%2BUlz5cl6g%2FpBAlNt1jZBklwSmAFk2YtmzBYEoRZdcNaZnh747etIC6DWIT1Ky69CyU6rQ%2FDlFIOxioYr8%2BXkYedj5Uuggfe4CwDYCpMz4v6Kjao0I5Kb2zPgXNLdbR%2F8jkHFlFuLXUHkJzhb2jpRI3zsJYgyMZSIJRdYVpS%2FUWrwUsgwjdQ%2BdJoX2wisFfoJdcH08Sp5SacPVnLPUfnvT3CDc0M55VFQKZ7tGiggvdByDUcKG73EYHJAEG50nZSiyItkKnXS3A%2F7BJ%2FhDcg4ubGB2MLzUw8MGOqUBN8qTr%2B8bh2KkYbSS%2Bp3M%2Bwm%2B3NlbgLUV1Sl6BitJlDHLH2jfLrwA1lXZKkOVl8ePl3sH1lhWpCbkV9Etrf25DOfZCOSyjw1pGdzeKnYyu7C9IB3jiCqAGcxe4pfRUH1VibeORSXvIJlhjr6uGGw1bMXdXLGw45MUAyswxasTycPizOomFwiq1khM5NjuZJ6YGIelJS8C8rZ0ulAIKqfJiuqtG11S&X-Amz-Signature=a3374afd9319280694835801bc69b9bce33acca41c25b9a71a0d42fc77d93bb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZDPW54G%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOvIUzcnQwBxdjL0AS3An5RD%2BXSkWbmZRpyNT7DshrzAiEA789Ww%2B8Gw6p6HRDpncX3uHqQXkid%2BuzTzKBIhXj1%2BN8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWHnP%2Fim0Go5m8Q8yrcA%2BRZezHSaVXuxbnqqPPVTy5NStZURw5g5KIwLLLGa7U1wlKqhnfTBlR2tUITSLY7hFtMZZuFn%2B2Ylfq0spIEee6N4TZxpLIj0C7AJnfQnriizPRPALQSOQHDJw0hPTc3Xc7NVWZZQOk0CVGvm7IwBASYsw%2Big2iXrwZd6Upc0g3hA3vjGm1X72iMyPonr532B%2FamwNaI5w9Sj2CgNgFjqXhWRGCL3NuZNLKbkf9T0n0wePOU1bBo20FFee34GwNVPFTbauKU24ux9a1qnesRAoNpFy2Icq9kjVStA6WGY9Q7zmga6iSch5A9fgxY%2FBVkER1QHUPKXoACcJ8beQHxxMFRfj7tJeTw6gB%2BUlz5cl6g%2FpBAlNt1jZBklwSmAFk2YtmzBYEoRZdcNaZnh747etIC6DWIT1Ky69CyU6rQ%2FDlFIOxioYr8%2BXkYedj5Uuggfe4CwDYCpMz4v6Kjao0I5Kb2zPgXNLdbR%2F8jkHFlFuLXUHkJzhb2jpRI3zsJYgyMZSIJRdYVpS%2FUWrwUsgwjdQ%2BdJoX2wisFfoJdcH08Sp5SacPVnLPUfnvT3CDc0M55VFQKZ7tGiggvdByDUcKG73EYHJAEG50nZSiyItkKnXS3A%2F7BJ%2FhDcg4ubGB2MLzUw8MGOqUBN8qTr%2B8bh2KkYbSS%2Bp3M%2Bwm%2B3NlbgLUV1Sl6BitJlDHLH2jfLrwA1lXZKkOVl8ePl3sH1lhWpCbkV9Etrf25DOfZCOSyjw1pGdzeKnYyu7C9IB3jiCqAGcxe4pfRUH1VibeORSXvIJlhjr6uGGw1bMXdXLGw45MUAyswxasTycPizOomFwiq1khM5NjuZJ6YGIelJS8C8rZ0ulAIKqfJiuqtG11S&X-Amz-Signature=db258fa151f7323e0cc6944813ae462fe0c2e7071d85a7ebbb46ffeeef579f3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
