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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5DF45IS%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICS8mrylgZWbXV69J2QGXf6Idou3yhZpC%2FkN4tqmfcjNAiEAuU31O%2BA%2B30rOmMX51P4lSxbmkQcbZ9kNzKBvz5D4rBEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJc9jc3mrzLETA7GlCrcA6dSeir4HtWacM3s2a6r9tj5JZAuOMSLiuSMWbDDmzAv1LzQ9Us2XXZx2eZoqBJrJdGUpnk2HW%2Bo7OTasem%2FreT7dcB%2FDjoe8YQr%2F7XG9u4By9WOddoYBGSHdJhLA5WDklF7oxqwgDDuHMzPq%2FF%2FbqWAwBhJQpXdYLE2BMzPy8saj6vjlxakVWrwdtINyzOKTfJOq8r47twbiEHSqw%2FGQxmliWZd8M0T5X7cGZDt2X3Rbp6QCAipsF3VSAgLVl3B%2F2netPR6yxV04V5N90ggysVB9VZT4CNchh1Khj1W2XG09J7gkzGPWUfwPK5%2BvtHGfKKFNWkTO0PADphZIGh1m%2BH9D9TRc9Tab8GsaQuX2r7zvugquKGDIIw0NNuf83%2FVQ8Y7GKI%2F1x3%2BvZyI9NL4V9LTFnSns70Jva0oX7fek%2BGnBvwo2L5U32yX2P7PfokdjRyU%2FLwtEdJWxRLOg7kLuumvAEa%2F4U6%2Bz0YjGYBR36lm2c5%2B8nCUeSxpXPMKU2kzOtuW5NqhFBec63weJfeTxUoQZwxkOlWHa2nAM5RVqCjRYMkIGzfWeoCmYIF5HPYKhKm8sZ5cVyKf4aTGqs4aMWCcjzL9I0Xtxo9JSXfl4PHJqq0Eq2yK88HB2mhzMKy9%2Bb0GOqUBHpU%2BlIshbYnsh3T%2FTvKPYzv9oWJmPbaiDErsJe2tfRrAvIl3r2agaavCfz4oqPCAUTcvvoURiqnoSCJ%2F3%2BR%2BslPsFd5m%2FrA6FnVDRSEBWdIv8IWpkqt%2FEtHI6FFW63R53x3WDT6PKXZLpo3LrqT%2FtHMKjBhVOkIKWRzKXkMvn1uuUkNfzrdRou%2BwDoI3Wttst4fyiCLRAE00I0jvtdJF0foMNaU%2B&X-Amz-Signature=9ff4b8b864f832cb2cbc43442b5bd7a635e27f88affba142ed953b59acc8cc00&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5DF45IS%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICS8mrylgZWbXV69J2QGXf6Idou3yhZpC%2FkN4tqmfcjNAiEAuU31O%2BA%2B30rOmMX51P4lSxbmkQcbZ9kNzKBvz5D4rBEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJc9jc3mrzLETA7GlCrcA6dSeir4HtWacM3s2a6r9tj5JZAuOMSLiuSMWbDDmzAv1LzQ9Us2XXZx2eZoqBJrJdGUpnk2HW%2Bo7OTasem%2FreT7dcB%2FDjoe8YQr%2F7XG9u4By9WOddoYBGSHdJhLA5WDklF7oxqwgDDuHMzPq%2FF%2FbqWAwBhJQpXdYLE2BMzPy8saj6vjlxakVWrwdtINyzOKTfJOq8r47twbiEHSqw%2FGQxmliWZd8M0T5X7cGZDt2X3Rbp6QCAipsF3VSAgLVl3B%2F2netPR6yxV04V5N90ggysVB9VZT4CNchh1Khj1W2XG09J7gkzGPWUfwPK5%2BvtHGfKKFNWkTO0PADphZIGh1m%2BH9D9TRc9Tab8GsaQuX2r7zvugquKGDIIw0NNuf83%2FVQ8Y7GKI%2F1x3%2BvZyI9NL4V9LTFnSns70Jva0oX7fek%2BGnBvwo2L5U32yX2P7PfokdjRyU%2FLwtEdJWxRLOg7kLuumvAEa%2F4U6%2Bz0YjGYBR36lm2c5%2B8nCUeSxpXPMKU2kzOtuW5NqhFBec63weJfeTxUoQZwxkOlWHa2nAM5RVqCjRYMkIGzfWeoCmYIF5HPYKhKm8sZ5cVyKf4aTGqs4aMWCcjzL9I0Xtxo9JSXfl4PHJqq0Eq2yK88HB2mhzMKy9%2Bb0GOqUBHpU%2BlIshbYnsh3T%2FTvKPYzv9oWJmPbaiDErsJe2tfRrAvIl3r2agaavCfz4oqPCAUTcvvoURiqnoSCJ%2F3%2BR%2BslPsFd5m%2FrA6FnVDRSEBWdIv8IWpkqt%2FEtHI6FFW63R53x3WDT6PKXZLpo3LrqT%2FtHMKjBhVOkIKWRzKXkMvn1uuUkNfzrdRou%2BwDoI3Wttst4fyiCLRAE00I0jvtdJF0foMNaU%2B&X-Amz-Signature=9fd4699ae1216a8057792f5261b0d516243eeedea97c0c77fe57ea915860e000&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5DF45IS%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICS8mrylgZWbXV69J2QGXf6Idou3yhZpC%2FkN4tqmfcjNAiEAuU31O%2BA%2B30rOmMX51P4lSxbmkQcbZ9kNzKBvz5D4rBEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJc9jc3mrzLETA7GlCrcA6dSeir4HtWacM3s2a6r9tj5JZAuOMSLiuSMWbDDmzAv1LzQ9Us2XXZx2eZoqBJrJdGUpnk2HW%2Bo7OTasem%2FreT7dcB%2FDjoe8YQr%2F7XG9u4By9WOddoYBGSHdJhLA5WDklF7oxqwgDDuHMzPq%2FF%2FbqWAwBhJQpXdYLE2BMzPy8saj6vjlxakVWrwdtINyzOKTfJOq8r47twbiEHSqw%2FGQxmliWZd8M0T5X7cGZDt2X3Rbp6QCAipsF3VSAgLVl3B%2F2netPR6yxV04V5N90ggysVB9VZT4CNchh1Khj1W2XG09J7gkzGPWUfwPK5%2BvtHGfKKFNWkTO0PADphZIGh1m%2BH9D9TRc9Tab8GsaQuX2r7zvugquKGDIIw0NNuf83%2FVQ8Y7GKI%2F1x3%2BvZyI9NL4V9LTFnSns70Jva0oX7fek%2BGnBvwo2L5U32yX2P7PfokdjRyU%2FLwtEdJWxRLOg7kLuumvAEa%2F4U6%2Bz0YjGYBR36lm2c5%2B8nCUeSxpXPMKU2kzOtuW5NqhFBec63weJfeTxUoQZwxkOlWHa2nAM5RVqCjRYMkIGzfWeoCmYIF5HPYKhKm8sZ5cVyKf4aTGqs4aMWCcjzL9I0Xtxo9JSXfl4PHJqq0Eq2yK88HB2mhzMKy9%2Bb0GOqUBHpU%2BlIshbYnsh3T%2FTvKPYzv9oWJmPbaiDErsJe2tfRrAvIl3r2agaavCfz4oqPCAUTcvvoURiqnoSCJ%2F3%2BR%2BslPsFd5m%2FrA6FnVDRSEBWdIv8IWpkqt%2FEtHI6FFW63R53x3WDT6PKXZLpo3LrqT%2FtHMKjBhVOkIKWRzKXkMvn1uuUkNfzrdRou%2BwDoI3Wttst4fyiCLRAE00I0jvtdJF0foMNaU%2B&X-Amz-Signature=5ce376cccfadace9404559209291f7ac596274700f5148fb8a39a2ea41decc1d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5DF45IS%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICS8mrylgZWbXV69J2QGXf6Idou3yhZpC%2FkN4tqmfcjNAiEAuU31O%2BA%2B30rOmMX51P4lSxbmkQcbZ9kNzKBvz5D4rBEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJc9jc3mrzLETA7GlCrcA6dSeir4HtWacM3s2a6r9tj5JZAuOMSLiuSMWbDDmzAv1LzQ9Us2XXZx2eZoqBJrJdGUpnk2HW%2Bo7OTasem%2FreT7dcB%2FDjoe8YQr%2F7XG9u4By9WOddoYBGSHdJhLA5WDklF7oxqwgDDuHMzPq%2FF%2FbqWAwBhJQpXdYLE2BMzPy8saj6vjlxakVWrwdtINyzOKTfJOq8r47twbiEHSqw%2FGQxmliWZd8M0T5X7cGZDt2X3Rbp6QCAipsF3VSAgLVl3B%2F2netPR6yxV04V5N90ggysVB9VZT4CNchh1Khj1W2XG09J7gkzGPWUfwPK5%2BvtHGfKKFNWkTO0PADphZIGh1m%2BH9D9TRc9Tab8GsaQuX2r7zvugquKGDIIw0NNuf83%2FVQ8Y7GKI%2F1x3%2BvZyI9NL4V9LTFnSns70Jva0oX7fek%2BGnBvwo2L5U32yX2P7PfokdjRyU%2FLwtEdJWxRLOg7kLuumvAEa%2F4U6%2Bz0YjGYBR36lm2c5%2B8nCUeSxpXPMKU2kzOtuW5NqhFBec63weJfeTxUoQZwxkOlWHa2nAM5RVqCjRYMkIGzfWeoCmYIF5HPYKhKm8sZ5cVyKf4aTGqs4aMWCcjzL9I0Xtxo9JSXfl4PHJqq0Eq2yK88HB2mhzMKy9%2Bb0GOqUBHpU%2BlIshbYnsh3T%2FTvKPYzv9oWJmPbaiDErsJe2tfRrAvIl3r2agaavCfz4oqPCAUTcvvoURiqnoSCJ%2F3%2BR%2BslPsFd5m%2FrA6FnVDRSEBWdIv8IWpkqt%2FEtHI6FFW63R53x3WDT6PKXZLpo3LrqT%2FtHMKjBhVOkIKWRzKXkMvn1uuUkNfzrdRou%2BwDoI3Wttst4fyiCLRAE00I0jvtdJF0foMNaU%2B&X-Amz-Signature=4e0f839dbd1aee4cfa792563c655ac64fd5561133394be012ae70fece2c055a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5DF45IS%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICS8mrylgZWbXV69J2QGXf6Idou3yhZpC%2FkN4tqmfcjNAiEAuU31O%2BA%2B30rOmMX51P4lSxbmkQcbZ9kNzKBvz5D4rBEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJc9jc3mrzLETA7GlCrcA6dSeir4HtWacM3s2a6r9tj5JZAuOMSLiuSMWbDDmzAv1LzQ9Us2XXZx2eZoqBJrJdGUpnk2HW%2Bo7OTasem%2FreT7dcB%2FDjoe8YQr%2F7XG9u4By9WOddoYBGSHdJhLA5WDklF7oxqwgDDuHMzPq%2FF%2FbqWAwBhJQpXdYLE2BMzPy8saj6vjlxakVWrwdtINyzOKTfJOq8r47twbiEHSqw%2FGQxmliWZd8M0T5X7cGZDt2X3Rbp6QCAipsF3VSAgLVl3B%2F2netPR6yxV04V5N90ggysVB9VZT4CNchh1Khj1W2XG09J7gkzGPWUfwPK5%2BvtHGfKKFNWkTO0PADphZIGh1m%2BH9D9TRc9Tab8GsaQuX2r7zvugquKGDIIw0NNuf83%2FVQ8Y7GKI%2F1x3%2BvZyI9NL4V9LTFnSns70Jva0oX7fek%2BGnBvwo2L5U32yX2P7PfokdjRyU%2FLwtEdJWxRLOg7kLuumvAEa%2F4U6%2Bz0YjGYBR36lm2c5%2B8nCUeSxpXPMKU2kzOtuW5NqhFBec63weJfeTxUoQZwxkOlWHa2nAM5RVqCjRYMkIGzfWeoCmYIF5HPYKhKm8sZ5cVyKf4aTGqs4aMWCcjzL9I0Xtxo9JSXfl4PHJqq0Eq2yK88HB2mhzMKy9%2Bb0GOqUBHpU%2BlIshbYnsh3T%2FTvKPYzv9oWJmPbaiDErsJe2tfRrAvIl3r2agaavCfz4oqPCAUTcvvoURiqnoSCJ%2F3%2BR%2BslPsFd5m%2FrA6FnVDRSEBWdIv8IWpkqt%2FEtHI6FFW63R53x3WDT6PKXZLpo3LrqT%2FtHMKjBhVOkIKWRzKXkMvn1uuUkNfzrdRou%2BwDoI3Wttst4fyiCLRAE00I0jvtdJF0foMNaU%2B&X-Amz-Signature=2ee4d04e1bde4f0595894b8c8843ab99c52462183054d388357d8a06c78710ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5DF45IS%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICS8mrylgZWbXV69J2QGXf6Idou3yhZpC%2FkN4tqmfcjNAiEAuU31O%2BA%2B30rOmMX51P4lSxbmkQcbZ9kNzKBvz5D4rBEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJc9jc3mrzLETA7GlCrcA6dSeir4HtWacM3s2a6r9tj5JZAuOMSLiuSMWbDDmzAv1LzQ9Us2XXZx2eZoqBJrJdGUpnk2HW%2Bo7OTasem%2FreT7dcB%2FDjoe8YQr%2F7XG9u4By9WOddoYBGSHdJhLA5WDklF7oxqwgDDuHMzPq%2FF%2FbqWAwBhJQpXdYLE2BMzPy8saj6vjlxakVWrwdtINyzOKTfJOq8r47twbiEHSqw%2FGQxmliWZd8M0T5X7cGZDt2X3Rbp6QCAipsF3VSAgLVl3B%2F2netPR6yxV04V5N90ggysVB9VZT4CNchh1Khj1W2XG09J7gkzGPWUfwPK5%2BvtHGfKKFNWkTO0PADphZIGh1m%2BH9D9TRc9Tab8GsaQuX2r7zvugquKGDIIw0NNuf83%2FVQ8Y7GKI%2F1x3%2BvZyI9NL4V9LTFnSns70Jva0oX7fek%2BGnBvwo2L5U32yX2P7PfokdjRyU%2FLwtEdJWxRLOg7kLuumvAEa%2F4U6%2Bz0YjGYBR36lm2c5%2B8nCUeSxpXPMKU2kzOtuW5NqhFBec63weJfeTxUoQZwxkOlWHa2nAM5RVqCjRYMkIGzfWeoCmYIF5HPYKhKm8sZ5cVyKf4aTGqs4aMWCcjzL9I0Xtxo9JSXfl4PHJqq0Eq2yK88HB2mhzMKy9%2Bb0GOqUBHpU%2BlIshbYnsh3T%2FTvKPYzv9oWJmPbaiDErsJe2tfRrAvIl3r2agaavCfz4oqPCAUTcvvoURiqnoSCJ%2F3%2BR%2BslPsFd5m%2FrA6FnVDRSEBWdIv8IWpkqt%2FEtHI6FFW63R53x3WDT6PKXZLpo3LrqT%2FtHMKjBhVOkIKWRzKXkMvn1uuUkNfzrdRou%2BwDoI3Wttst4fyiCLRAE00I0jvtdJF0foMNaU%2B&X-Amz-Signature=923824940aec34ddffc8a3e422ea34a00b35ee968cfb9439b01700139f7e1d49&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5DF45IS%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICS8mrylgZWbXV69J2QGXf6Idou3yhZpC%2FkN4tqmfcjNAiEAuU31O%2BA%2B30rOmMX51P4lSxbmkQcbZ9kNzKBvz5D4rBEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJc9jc3mrzLETA7GlCrcA6dSeir4HtWacM3s2a6r9tj5JZAuOMSLiuSMWbDDmzAv1LzQ9Us2XXZx2eZoqBJrJdGUpnk2HW%2Bo7OTasem%2FreT7dcB%2FDjoe8YQr%2F7XG9u4By9WOddoYBGSHdJhLA5WDklF7oxqwgDDuHMzPq%2FF%2FbqWAwBhJQpXdYLE2BMzPy8saj6vjlxakVWrwdtINyzOKTfJOq8r47twbiEHSqw%2FGQxmliWZd8M0T5X7cGZDt2X3Rbp6QCAipsF3VSAgLVl3B%2F2netPR6yxV04V5N90ggysVB9VZT4CNchh1Khj1W2XG09J7gkzGPWUfwPK5%2BvtHGfKKFNWkTO0PADphZIGh1m%2BH9D9TRc9Tab8GsaQuX2r7zvugquKGDIIw0NNuf83%2FVQ8Y7GKI%2F1x3%2BvZyI9NL4V9LTFnSns70Jva0oX7fek%2BGnBvwo2L5U32yX2P7PfokdjRyU%2FLwtEdJWxRLOg7kLuumvAEa%2F4U6%2Bz0YjGYBR36lm2c5%2B8nCUeSxpXPMKU2kzOtuW5NqhFBec63weJfeTxUoQZwxkOlWHa2nAM5RVqCjRYMkIGzfWeoCmYIF5HPYKhKm8sZ5cVyKf4aTGqs4aMWCcjzL9I0Xtxo9JSXfl4PHJqq0Eq2yK88HB2mhzMKy9%2Bb0GOqUBHpU%2BlIshbYnsh3T%2FTvKPYzv9oWJmPbaiDErsJe2tfRrAvIl3r2agaavCfz4oqPCAUTcvvoURiqnoSCJ%2F3%2BR%2BslPsFd5m%2FrA6FnVDRSEBWdIv8IWpkqt%2FEtHI6FFW63R53x3WDT6PKXZLpo3LrqT%2FtHMKjBhVOkIKWRzKXkMvn1uuUkNfzrdRou%2BwDoI3Wttst4fyiCLRAE00I0jvtdJF0foMNaU%2B&X-Amz-Signature=ea6b47a51d179cdb5ea4fd47eb1a66866ff9b3c233e2c442c0cff5fb211d136d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5DF45IS%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICS8mrylgZWbXV69J2QGXf6Idou3yhZpC%2FkN4tqmfcjNAiEAuU31O%2BA%2B30rOmMX51P4lSxbmkQcbZ9kNzKBvz5D4rBEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJc9jc3mrzLETA7GlCrcA6dSeir4HtWacM3s2a6r9tj5JZAuOMSLiuSMWbDDmzAv1LzQ9Us2XXZx2eZoqBJrJdGUpnk2HW%2Bo7OTasem%2FreT7dcB%2FDjoe8YQr%2F7XG9u4By9WOddoYBGSHdJhLA5WDklF7oxqwgDDuHMzPq%2FF%2FbqWAwBhJQpXdYLE2BMzPy8saj6vjlxakVWrwdtINyzOKTfJOq8r47twbiEHSqw%2FGQxmliWZd8M0T5X7cGZDt2X3Rbp6QCAipsF3VSAgLVl3B%2F2netPR6yxV04V5N90ggysVB9VZT4CNchh1Khj1W2XG09J7gkzGPWUfwPK5%2BvtHGfKKFNWkTO0PADphZIGh1m%2BH9D9TRc9Tab8GsaQuX2r7zvugquKGDIIw0NNuf83%2FVQ8Y7GKI%2F1x3%2BvZyI9NL4V9LTFnSns70Jva0oX7fek%2BGnBvwo2L5U32yX2P7PfokdjRyU%2FLwtEdJWxRLOg7kLuumvAEa%2F4U6%2Bz0YjGYBR36lm2c5%2B8nCUeSxpXPMKU2kzOtuW5NqhFBec63weJfeTxUoQZwxkOlWHa2nAM5RVqCjRYMkIGzfWeoCmYIF5HPYKhKm8sZ5cVyKf4aTGqs4aMWCcjzL9I0Xtxo9JSXfl4PHJqq0Eq2yK88HB2mhzMKy9%2Bb0GOqUBHpU%2BlIshbYnsh3T%2FTvKPYzv9oWJmPbaiDErsJe2tfRrAvIl3r2agaavCfz4oqPCAUTcvvoURiqnoSCJ%2F3%2BR%2BslPsFd5m%2FrA6FnVDRSEBWdIv8IWpkqt%2FEtHI6FFW63R53x3WDT6PKXZLpo3LrqT%2FtHMKjBhVOkIKWRzKXkMvn1uuUkNfzrdRou%2BwDoI3Wttst4fyiCLRAE00I0jvtdJF0foMNaU%2B&X-Amz-Signature=65d2b1ea811587eb3b82f5359f3e4d350a321229c1d77a1f047fac451827c39d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
