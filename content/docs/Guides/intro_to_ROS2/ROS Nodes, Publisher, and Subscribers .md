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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQWFV3KM%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXycGH6nF%2FOX4v%2BV6MGTkBoXJ%2FSDhJMCmPs0VZCIMSwgIgA%2F7tuQzNDlpSE9on0VZ8rVQZMMQyBFOqcILhr6UJTmwq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDBNUBxEEixpqYclryCrcA%2BbRWSQUniF6aaNBaBE%2FR5LwjKgE5KJWcVcxlmRvuM9%2F5i1oDhZOV5UNo8D0MMmjrEzNgkmzwoa7p%2B%2FBh2JwXWrEZQuO5ONHj1%2BhUEgR6rCvH2FgYksFyZgyPAgvfOhfBPm3LxcLCwMMsvnYUKQS%2FkppHGwed1vD9n8JxHVdYpoef7MnMczVerkY7OJOSTWwS5b1LDFzGAtM%2FTP7yKwNoWCvrlLdKQ2ZyhzBiljwPPi6VkMbrR8KyTVEhuczRcSzKw3%2FElghLJxmO4qCDlYoA%2F0ZcptA%2BIjO9EGoMUGdd0%2Bf3M5elep2NUmrEpWW3IdjxCky9QG9peQ2hNDr4gpdzbJCxQTC%2FijPrtk0cbw0TgS4QgTmGLITmddZFMplwTqgPxZqUClLRLOQYLqEbZOkJmhSCmTgSAMMxhB8095fQwHkhx4tqEtiuBqQcVE%2FpaLDcwTeyZkErVSE7GwevK65%2BvYYkZPqK00UbljbrL8IsG7fPruJx06N16TY1gyIJX5bY4a9aZL99fkNOAhrgNtSCD5q48mYNPN4Zl8sgZ3XKYnwrUNsKHWVHjTp6dlc03bc4ZIqFu2KgHIxHaFVR2nCqN2ha35Son4eCpKtlEYcLrOezK3%2Fxa7xzyirjUkvMMLK%2B8IGOqUBh4WxI7EaS9VH0gpyGiZNu8G966OCmlSaJrIJHgGIjZPrxqUaqVGaxanAyQ0neqwf84FYMcM0vx38RIob2dsyTiTiKgBm%2BsgSmnTzNFXE7m2CUtX2VlLUOuDAvoI%2BQOXMFaLArmoLie4iTuNXdwO39iH00WXfp%2B926IyF%2Fp5QxvjvQ4cshpRgsKPkNHUaklO49R2WHFbG0cJpA2vmXT%2BWm2Nml7Rr&X-Amz-Signature=e0e3261c21a2d443f5644f79a577f2b4ac4dce1fecfbe5fb883ea718014ee3ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQWFV3KM%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXycGH6nF%2FOX4v%2BV6MGTkBoXJ%2FSDhJMCmPs0VZCIMSwgIgA%2F7tuQzNDlpSE9on0VZ8rVQZMMQyBFOqcILhr6UJTmwq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDBNUBxEEixpqYclryCrcA%2BbRWSQUniF6aaNBaBE%2FR5LwjKgE5KJWcVcxlmRvuM9%2F5i1oDhZOV5UNo8D0MMmjrEzNgkmzwoa7p%2B%2FBh2JwXWrEZQuO5ONHj1%2BhUEgR6rCvH2FgYksFyZgyPAgvfOhfBPm3LxcLCwMMsvnYUKQS%2FkppHGwed1vD9n8JxHVdYpoef7MnMczVerkY7OJOSTWwS5b1LDFzGAtM%2FTP7yKwNoWCvrlLdKQ2ZyhzBiljwPPi6VkMbrR8KyTVEhuczRcSzKw3%2FElghLJxmO4qCDlYoA%2F0ZcptA%2BIjO9EGoMUGdd0%2Bf3M5elep2NUmrEpWW3IdjxCky9QG9peQ2hNDr4gpdzbJCxQTC%2FijPrtk0cbw0TgS4QgTmGLITmddZFMplwTqgPxZqUClLRLOQYLqEbZOkJmhSCmTgSAMMxhB8095fQwHkhx4tqEtiuBqQcVE%2FpaLDcwTeyZkErVSE7GwevK65%2BvYYkZPqK00UbljbrL8IsG7fPruJx06N16TY1gyIJX5bY4a9aZL99fkNOAhrgNtSCD5q48mYNPN4Zl8sgZ3XKYnwrUNsKHWVHjTp6dlc03bc4ZIqFu2KgHIxHaFVR2nCqN2ha35Son4eCpKtlEYcLrOezK3%2Fxa7xzyirjUkvMMLK%2B8IGOqUBh4WxI7EaS9VH0gpyGiZNu8G966OCmlSaJrIJHgGIjZPrxqUaqVGaxanAyQ0neqwf84FYMcM0vx38RIob2dsyTiTiKgBm%2BsgSmnTzNFXE7m2CUtX2VlLUOuDAvoI%2BQOXMFaLArmoLie4iTuNXdwO39iH00WXfp%2B926IyF%2Fp5QxvjvQ4cshpRgsKPkNHUaklO49R2WHFbG0cJpA2vmXT%2BWm2Nml7Rr&X-Amz-Signature=dde09a0445e9184b7c4a1a8b7f1d0f474dc56eb604ae4129e0f88cd48476a257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQWFV3KM%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXycGH6nF%2FOX4v%2BV6MGTkBoXJ%2FSDhJMCmPs0VZCIMSwgIgA%2F7tuQzNDlpSE9on0VZ8rVQZMMQyBFOqcILhr6UJTmwq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDBNUBxEEixpqYclryCrcA%2BbRWSQUniF6aaNBaBE%2FR5LwjKgE5KJWcVcxlmRvuM9%2F5i1oDhZOV5UNo8D0MMmjrEzNgkmzwoa7p%2B%2FBh2JwXWrEZQuO5ONHj1%2BhUEgR6rCvH2FgYksFyZgyPAgvfOhfBPm3LxcLCwMMsvnYUKQS%2FkppHGwed1vD9n8JxHVdYpoef7MnMczVerkY7OJOSTWwS5b1LDFzGAtM%2FTP7yKwNoWCvrlLdKQ2ZyhzBiljwPPi6VkMbrR8KyTVEhuczRcSzKw3%2FElghLJxmO4qCDlYoA%2F0ZcptA%2BIjO9EGoMUGdd0%2Bf3M5elep2NUmrEpWW3IdjxCky9QG9peQ2hNDr4gpdzbJCxQTC%2FijPrtk0cbw0TgS4QgTmGLITmddZFMplwTqgPxZqUClLRLOQYLqEbZOkJmhSCmTgSAMMxhB8095fQwHkhx4tqEtiuBqQcVE%2FpaLDcwTeyZkErVSE7GwevK65%2BvYYkZPqK00UbljbrL8IsG7fPruJx06N16TY1gyIJX5bY4a9aZL99fkNOAhrgNtSCD5q48mYNPN4Zl8sgZ3XKYnwrUNsKHWVHjTp6dlc03bc4ZIqFu2KgHIxHaFVR2nCqN2ha35Son4eCpKtlEYcLrOezK3%2Fxa7xzyirjUkvMMLK%2B8IGOqUBh4WxI7EaS9VH0gpyGiZNu8G966OCmlSaJrIJHgGIjZPrxqUaqVGaxanAyQ0neqwf84FYMcM0vx38RIob2dsyTiTiKgBm%2BsgSmnTzNFXE7m2CUtX2VlLUOuDAvoI%2BQOXMFaLArmoLie4iTuNXdwO39iH00WXfp%2B926IyF%2Fp5QxvjvQ4cshpRgsKPkNHUaklO49R2WHFbG0cJpA2vmXT%2BWm2Nml7Rr&X-Amz-Signature=903a095214a968002c45b90b9172c1e246db5bf51a95cafa51fc88eedfe4f0e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQWFV3KM%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXycGH6nF%2FOX4v%2BV6MGTkBoXJ%2FSDhJMCmPs0VZCIMSwgIgA%2F7tuQzNDlpSE9on0VZ8rVQZMMQyBFOqcILhr6UJTmwq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDBNUBxEEixpqYclryCrcA%2BbRWSQUniF6aaNBaBE%2FR5LwjKgE5KJWcVcxlmRvuM9%2F5i1oDhZOV5UNo8D0MMmjrEzNgkmzwoa7p%2B%2FBh2JwXWrEZQuO5ONHj1%2BhUEgR6rCvH2FgYksFyZgyPAgvfOhfBPm3LxcLCwMMsvnYUKQS%2FkppHGwed1vD9n8JxHVdYpoef7MnMczVerkY7OJOSTWwS5b1LDFzGAtM%2FTP7yKwNoWCvrlLdKQ2ZyhzBiljwPPi6VkMbrR8KyTVEhuczRcSzKw3%2FElghLJxmO4qCDlYoA%2F0ZcptA%2BIjO9EGoMUGdd0%2Bf3M5elep2NUmrEpWW3IdjxCky9QG9peQ2hNDr4gpdzbJCxQTC%2FijPrtk0cbw0TgS4QgTmGLITmddZFMplwTqgPxZqUClLRLOQYLqEbZOkJmhSCmTgSAMMxhB8095fQwHkhx4tqEtiuBqQcVE%2FpaLDcwTeyZkErVSE7GwevK65%2BvYYkZPqK00UbljbrL8IsG7fPruJx06N16TY1gyIJX5bY4a9aZL99fkNOAhrgNtSCD5q48mYNPN4Zl8sgZ3XKYnwrUNsKHWVHjTp6dlc03bc4ZIqFu2KgHIxHaFVR2nCqN2ha35Son4eCpKtlEYcLrOezK3%2Fxa7xzyirjUkvMMLK%2B8IGOqUBh4WxI7EaS9VH0gpyGiZNu8G966OCmlSaJrIJHgGIjZPrxqUaqVGaxanAyQ0neqwf84FYMcM0vx38RIob2dsyTiTiKgBm%2BsgSmnTzNFXE7m2CUtX2VlLUOuDAvoI%2BQOXMFaLArmoLie4iTuNXdwO39iH00WXfp%2B926IyF%2Fp5QxvjvQ4cshpRgsKPkNHUaklO49R2WHFbG0cJpA2vmXT%2BWm2Nml7Rr&X-Amz-Signature=59be80ac7b6ebfeb6cf9248c78e8ddded03577953d97634da772876685aaf0e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQWFV3KM%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXycGH6nF%2FOX4v%2BV6MGTkBoXJ%2FSDhJMCmPs0VZCIMSwgIgA%2F7tuQzNDlpSE9on0VZ8rVQZMMQyBFOqcILhr6UJTmwq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDBNUBxEEixpqYclryCrcA%2BbRWSQUniF6aaNBaBE%2FR5LwjKgE5KJWcVcxlmRvuM9%2F5i1oDhZOV5UNo8D0MMmjrEzNgkmzwoa7p%2B%2FBh2JwXWrEZQuO5ONHj1%2BhUEgR6rCvH2FgYksFyZgyPAgvfOhfBPm3LxcLCwMMsvnYUKQS%2FkppHGwed1vD9n8JxHVdYpoef7MnMczVerkY7OJOSTWwS5b1LDFzGAtM%2FTP7yKwNoWCvrlLdKQ2ZyhzBiljwPPi6VkMbrR8KyTVEhuczRcSzKw3%2FElghLJxmO4qCDlYoA%2F0ZcptA%2BIjO9EGoMUGdd0%2Bf3M5elep2NUmrEpWW3IdjxCky9QG9peQ2hNDr4gpdzbJCxQTC%2FijPrtk0cbw0TgS4QgTmGLITmddZFMplwTqgPxZqUClLRLOQYLqEbZOkJmhSCmTgSAMMxhB8095fQwHkhx4tqEtiuBqQcVE%2FpaLDcwTeyZkErVSE7GwevK65%2BvYYkZPqK00UbljbrL8IsG7fPruJx06N16TY1gyIJX5bY4a9aZL99fkNOAhrgNtSCD5q48mYNPN4Zl8sgZ3XKYnwrUNsKHWVHjTp6dlc03bc4ZIqFu2KgHIxHaFVR2nCqN2ha35Son4eCpKtlEYcLrOezK3%2Fxa7xzyirjUkvMMLK%2B8IGOqUBh4WxI7EaS9VH0gpyGiZNu8G966OCmlSaJrIJHgGIjZPrxqUaqVGaxanAyQ0neqwf84FYMcM0vx38RIob2dsyTiTiKgBm%2BsgSmnTzNFXE7m2CUtX2VlLUOuDAvoI%2BQOXMFaLArmoLie4iTuNXdwO39iH00WXfp%2B926IyF%2Fp5QxvjvQ4cshpRgsKPkNHUaklO49R2WHFbG0cJpA2vmXT%2BWm2Nml7Rr&X-Amz-Signature=c15578993dd76adc90d7b195bb43704c250b6cffa36d54b3d91bcad2feb3b260&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQWFV3KM%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXycGH6nF%2FOX4v%2BV6MGTkBoXJ%2FSDhJMCmPs0VZCIMSwgIgA%2F7tuQzNDlpSE9on0VZ8rVQZMMQyBFOqcILhr6UJTmwq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDBNUBxEEixpqYclryCrcA%2BbRWSQUniF6aaNBaBE%2FR5LwjKgE5KJWcVcxlmRvuM9%2F5i1oDhZOV5UNo8D0MMmjrEzNgkmzwoa7p%2B%2FBh2JwXWrEZQuO5ONHj1%2BhUEgR6rCvH2FgYksFyZgyPAgvfOhfBPm3LxcLCwMMsvnYUKQS%2FkppHGwed1vD9n8JxHVdYpoef7MnMczVerkY7OJOSTWwS5b1LDFzGAtM%2FTP7yKwNoWCvrlLdKQ2ZyhzBiljwPPi6VkMbrR8KyTVEhuczRcSzKw3%2FElghLJxmO4qCDlYoA%2F0ZcptA%2BIjO9EGoMUGdd0%2Bf3M5elep2NUmrEpWW3IdjxCky9QG9peQ2hNDr4gpdzbJCxQTC%2FijPrtk0cbw0TgS4QgTmGLITmddZFMplwTqgPxZqUClLRLOQYLqEbZOkJmhSCmTgSAMMxhB8095fQwHkhx4tqEtiuBqQcVE%2FpaLDcwTeyZkErVSE7GwevK65%2BvYYkZPqK00UbljbrL8IsG7fPruJx06N16TY1gyIJX5bY4a9aZL99fkNOAhrgNtSCD5q48mYNPN4Zl8sgZ3XKYnwrUNsKHWVHjTp6dlc03bc4ZIqFu2KgHIxHaFVR2nCqN2ha35Son4eCpKtlEYcLrOezK3%2Fxa7xzyirjUkvMMLK%2B8IGOqUBh4WxI7EaS9VH0gpyGiZNu8G966OCmlSaJrIJHgGIjZPrxqUaqVGaxanAyQ0neqwf84FYMcM0vx38RIob2dsyTiTiKgBm%2BsgSmnTzNFXE7m2CUtX2VlLUOuDAvoI%2BQOXMFaLArmoLie4iTuNXdwO39iH00WXfp%2B926IyF%2Fp5QxvjvQ4cshpRgsKPkNHUaklO49R2WHFbG0cJpA2vmXT%2BWm2Nml7Rr&X-Amz-Signature=10858d4fc9576fa159f086e818c8de97a0c9aaf4b9e4be7ff63efb25e1d8a53b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQWFV3KM%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXycGH6nF%2FOX4v%2BV6MGTkBoXJ%2FSDhJMCmPs0VZCIMSwgIgA%2F7tuQzNDlpSE9on0VZ8rVQZMMQyBFOqcILhr6UJTmwq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDBNUBxEEixpqYclryCrcA%2BbRWSQUniF6aaNBaBE%2FR5LwjKgE5KJWcVcxlmRvuM9%2F5i1oDhZOV5UNo8D0MMmjrEzNgkmzwoa7p%2B%2FBh2JwXWrEZQuO5ONHj1%2BhUEgR6rCvH2FgYksFyZgyPAgvfOhfBPm3LxcLCwMMsvnYUKQS%2FkppHGwed1vD9n8JxHVdYpoef7MnMczVerkY7OJOSTWwS5b1LDFzGAtM%2FTP7yKwNoWCvrlLdKQ2ZyhzBiljwPPi6VkMbrR8KyTVEhuczRcSzKw3%2FElghLJxmO4qCDlYoA%2F0ZcptA%2BIjO9EGoMUGdd0%2Bf3M5elep2NUmrEpWW3IdjxCky9QG9peQ2hNDr4gpdzbJCxQTC%2FijPrtk0cbw0TgS4QgTmGLITmddZFMplwTqgPxZqUClLRLOQYLqEbZOkJmhSCmTgSAMMxhB8095fQwHkhx4tqEtiuBqQcVE%2FpaLDcwTeyZkErVSE7GwevK65%2BvYYkZPqK00UbljbrL8IsG7fPruJx06N16TY1gyIJX5bY4a9aZL99fkNOAhrgNtSCD5q48mYNPN4Zl8sgZ3XKYnwrUNsKHWVHjTp6dlc03bc4ZIqFu2KgHIxHaFVR2nCqN2ha35Son4eCpKtlEYcLrOezK3%2Fxa7xzyirjUkvMMLK%2B8IGOqUBh4WxI7EaS9VH0gpyGiZNu8G966OCmlSaJrIJHgGIjZPrxqUaqVGaxanAyQ0neqwf84FYMcM0vx38RIob2dsyTiTiKgBm%2BsgSmnTzNFXE7m2CUtX2VlLUOuDAvoI%2BQOXMFaLArmoLie4iTuNXdwO39iH00WXfp%2B926IyF%2Fp5QxvjvQ4cshpRgsKPkNHUaklO49R2WHFbG0cJpA2vmXT%2BWm2Nml7Rr&X-Amz-Signature=887146bf1b884da426d70fbe66f0b26cc389d419ddd5b5cb0ccf7314ef24ad1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQWFV3KM%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXycGH6nF%2FOX4v%2BV6MGTkBoXJ%2FSDhJMCmPs0VZCIMSwgIgA%2F7tuQzNDlpSE9on0VZ8rVQZMMQyBFOqcILhr6UJTmwq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDBNUBxEEixpqYclryCrcA%2BbRWSQUniF6aaNBaBE%2FR5LwjKgE5KJWcVcxlmRvuM9%2F5i1oDhZOV5UNo8D0MMmjrEzNgkmzwoa7p%2B%2FBh2JwXWrEZQuO5ONHj1%2BhUEgR6rCvH2FgYksFyZgyPAgvfOhfBPm3LxcLCwMMsvnYUKQS%2FkppHGwed1vD9n8JxHVdYpoef7MnMczVerkY7OJOSTWwS5b1LDFzGAtM%2FTP7yKwNoWCvrlLdKQ2ZyhzBiljwPPi6VkMbrR8KyTVEhuczRcSzKw3%2FElghLJxmO4qCDlYoA%2F0ZcptA%2BIjO9EGoMUGdd0%2Bf3M5elep2NUmrEpWW3IdjxCky9QG9peQ2hNDr4gpdzbJCxQTC%2FijPrtk0cbw0TgS4QgTmGLITmddZFMplwTqgPxZqUClLRLOQYLqEbZOkJmhSCmTgSAMMxhB8095fQwHkhx4tqEtiuBqQcVE%2FpaLDcwTeyZkErVSE7GwevK65%2BvYYkZPqK00UbljbrL8IsG7fPruJx06N16TY1gyIJX5bY4a9aZL99fkNOAhrgNtSCD5q48mYNPN4Zl8sgZ3XKYnwrUNsKHWVHjTp6dlc03bc4ZIqFu2KgHIxHaFVR2nCqN2ha35Son4eCpKtlEYcLrOezK3%2Fxa7xzyirjUkvMMLK%2B8IGOqUBh4WxI7EaS9VH0gpyGiZNu8G966OCmlSaJrIJHgGIjZPrxqUaqVGaxanAyQ0neqwf84FYMcM0vx38RIob2dsyTiTiKgBm%2BsgSmnTzNFXE7m2CUtX2VlLUOuDAvoI%2BQOXMFaLArmoLie4iTuNXdwO39iH00WXfp%2B926IyF%2Fp5QxvjvQ4cshpRgsKPkNHUaklO49R2WHFbG0cJpA2vmXT%2BWm2Nml7Rr&X-Amz-Signature=0bc658e549e0dd980cdf172d3fac650f942e5e12a059385dee936dd56a7d27e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
