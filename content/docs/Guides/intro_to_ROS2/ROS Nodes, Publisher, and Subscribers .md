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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T63YLMBW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCERphU18Ak1kRBWDo%2F%2BNEYKgiMqZ9EsQXbvrW9FmfbsAIgJfNqN0MJIwzKICsv9LmD%2BqG%2FkUarwba1L7A%2FKJCXKwEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNZjOUI8g4DqAXhZFyrcA%2B9Y7IqwgNRQH6DeGe9zjtpYgUNMbW6UJiF95nZLnlXUA%2BRLVi25PFXOrlm5eYReKxulmaPGVIp6pYZ65j6qY7GhmoBm5pTqQq5Yui7D5CBs8JP8msRt5depY%2Fq5VEYDfwmZsMEIPy3hYPqyR2v3HdU1VnKEkNRYQzmknG1oc60fxLvhfyJKcJiBb5W5CLrEy0ZLxpyPIxlLrXp%2Bmc0%2Fdyqo6AbkbELcJqHsR%2BbBBQpmgc%2BnCCmoWHsw7VvhE%2FHEr5eNQgwbNFR6fKlIPgh00vec05QdCfeWkg6MCL%2FdmgGW5WANLTwWhA4UoA%2FMrmjQIi7vcpSKlwWp58TQ8f4zuyrvKGk94KhETL8PgBcYJoOJM0F%2Bv3QJgmC1RCsCQWil%2FqTGNLkIFIMHjP%2Fj3PRa6YJrHkbrXssIMWASlU9B9zWixJDBJVCDwitvyTqTwcSVPiCYfh30CLQb0YlUO%2FX45e5%2BDTgLaVQxo%2Fbxzr9l0FWX7Jj4hlMgoJdFVROxRQRk8mgU2Unz2s5cN2nBxDQU2YCkrSxX%2BOjyj9sn8WhD%2BaNA5qC1U%2BjNz7Lo7NopLWuxoRW2iHl9Suzt3wHAPTQFL73L%2FaLo12cbyZgHcD4xJk7FQt513CmkiCzTqQYNMNeC9L0GOqUBR32SGOlEy%2FRwZZ9fFuj4PTOjvwcbPIw%2Fhq3fP%2Fl5W20zHnLCYLEVbvp520a9UBbQF82lD43iySO6HbbyY6630pfBML%2FExxU9Z4pdL2ms1iSA3zxAdv7N7wln%2BM9wibfNKBhzxcXiI1b8gxHw01a76bMjqp6re4BP9HTyTwYn3DjnjjLYzXgE4HwCBlgTF%2FB4gtS8pMHf7ksUwoV2zqGM7Y3QR3H6&X-Amz-Signature=57fba3d6e6cc5abab705906bdf694ddd3c8ce2162c755429f0b826ff5639ca0c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T63YLMBW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCERphU18Ak1kRBWDo%2F%2BNEYKgiMqZ9EsQXbvrW9FmfbsAIgJfNqN0MJIwzKICsv9LmD%2BqG%2FkUarwba1L7A%2FKJCXKwEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNZjOUI8g4DqAXhZFyrcA%2B9Y7IqwgNRQH6DeGe9zjtpYgUNMbW6UJiF95nZLnlXUA%2BRLVi25PFXOrlm5eYReKxulmaPGVIp6pYZ65j6qY7GhmoBm5pTqQq5Yui7D5CBs8JP8msRt5depY%2Fq5VEYDfwmZsMEIPy3hYPqyR2v3HdU1VnKEkNRYQzmknG1oc60fxLvhfyJKcJiBb5W5CLrEy0ZLxpyPIxlLrXp%2Bmc0%2Fdyqo6AbkbELcJqHsR%2BbBBQpmgc%2BnCCmoWHsw7VvhE%2FHEr5eNQgwbNFR6fKlIPgh00vec05QdCfeWkg6MCL%2FdmgGW5WANLTwWhA4UoA%2FMrmjQIi7vcpSKlwWp58TQ8f4zuyrvKGk94KhETL8PgBcYJoOJM0F%2Bv3QJgmC1RCsCQWil%2FqTGNLkIFIMHjP%2Fj3PRa6YJrHkbrXssIMWASlU9B9zWixJDBJVCDwitvyTqTwcSVPiCYfh30CLQb0YlUO%2FX45e5%2BDTgLaVQxo%2Fbxzr9l0FWX7Jj4hlMgoJdFVROxRQRk8mgU2Unz2s5cN2nBxDQU2YCkrSxX%2BOjyj9sn8WhD%2BaNA5qC1U%2BjNz7Lo7NopLWuxoRW2iHl9Suzt3wHAPTQFL73L%2FaLo12cbyZgHcD4xJk7FQt513CmkiCzTqQYNMNeC9L0GOqUBR32SGOlEy%2FRwZZ9fFuj4PTOjvwcbPIw%2Fhq3fP%2Fl5W20zHnLCYLEVbvp520a9UBbQF82lD43iySO6HbbyY6630pfBML%2FExxU9Z4pdL2ms1iSA3zxAdv7N7wln%2BM9wibfNKBhzxcXiI1b8gxHw01a76bMjqp6re4BP9HTyTwYn3DjnjjLYzXgE4HwCBlgTF%2FB4gtS8pMHf7ksUwoV2zqGM7Y3QR3H6&X-Amz-Signature=05bed3f7ad6f28afb830319a1c5a916834fef2be18506d794f18e11a68011ce8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T63YLMBW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCERphU18Ak1kRBWDo%2F%2BNEYKgiMqZ9EsQXbvrW9FmfbsAIgJfNqN0MJIwzKICsv9LmD%2BqG%2FkUarwba1L7A%2FKJCXKwEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNZjOUI8g4DqAXhZFyrcA%2B9Y7IqwgNRQH6DeGe9zjtpYgUNMbW6UJiF95nZLnlXUA%2BRLVi25PFXOrlm5eYReKxulmaPGVIp6pYZ65j6qY7GhmoBm5pTqQq5Yui7D5CBs8JP8msRt5depY%2Fq5VEYDfwmZsMEIPy3hYPqyR2v3HdU1VnKEkNRYQzmknG1oc60fxLvhfyJKcJiBb5W5CLrEy0ZLxpyPIxlLrXp%2Bmc0%2Fdyqo6AbkbELcJqHsR%2BbBBQpmgc%2BnCCmoWHsw7VvhE%2FHEr5eNQgwbNFR6fKlIPgh00vec05QdCfeWkg6MCL%2FdmgGW5WANLTwWhA4UoA%2FMrmjQIi7vcpSKlwWp58TQ8f4zuyrvKGk94KhETL8PgBcYJoOJM0F%2Bv3QJgmC1RCsCQWil%2FqTGNLkIFIMHjP%2Fj3PRa6YJrHkbrXssIMWASlU9B9zWixJDBJVCDwitvyTqTwcSVPiCYfh30CLQb0YlUO%2FX45e5%2BDTgLaVQxo%2Fbxzr9l0FWX7Jj4hlMgoJdFVROxRQRk8mgU2Unz2s5cN2nBxDQU2YCkrSxX%2BOjyj9sn8WhD%2BaNA5qC1U%2BjNz7Lo7NopLWuxoRW2iHl9Suzt3wHAPTQFL73L%2FaLo12cbyZgHcD4xJk7FQt513CmkiCzTqQYNMNeC9L0GOqUBR32SGOlEy%2FRwZZ9fFuj4PTOjvwcbPIw%2Fhq3fP%2Fl5W20zHnLCYLEVbvp520a9UBbQF82lD43iySO6HbbyY6630pfBML%2FExxU9Z4pdL2ms1iSA3zxAdv7N7wln%2BM9wibfNKBhzxcXiI1b8gxHw01a76bMjqp6re4BP9HTyTwYn3DjnjjLYzXgE4HwCBlgTF%2FB4gtS8pMHf7ksUwoV2zqGM7Y3QR3H6&X-Amz-Signature=4df4bf1bfcfaa51b36084d19b7a1d0915caa4f8ef18bbcf053dee5eda491afa1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T63YLMBW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCERphU18Ak1kRBWDo%2F%2BNEYKgiMqZ9EsQXbvrW9FmfbsAIgJfNqN0MJIwzKICsv9LmD%2BqG%2FkUarwba1L7A%2FKJCXKwEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNZjOUI8g4DqAXhZFyrcA%2B9Y7IqwgNRQH6DeGe9zjtpYgUNMbW6UJiF95nZLnlXUA%2BRLVi25PFXOrlm5eYReKxulmaPGVIp6pYZ65j6qY7GhmoBm5pTqQq5Yui7D5CBs8JP8msRt5depY%2Fq5VEYDfwmZsMEIPy3hYPqyR2v3HdU1VnKEkNRYQzmknG1oc60fxLvhfyJKcJiBb5W5CLrEy0ZLxpyPIxlLrXp%2Bmc0%2Fdyqo6AbkbELcJqHsR%2BbBBQpmgc%2BnCCmoWHsw7VvhE%2FHEr5eNQgwbNFR6fKlIPgh00vec05QdCfeWkg6MCL%2FdmgGW5WANLTwWhA4UoA%2FMrmjQIi7vcpSKlwWp58TQ8f4zuyrvKGk94KhETL8PgBcYJoOJM0F%2Bv3QJgmC1RCsCQWil%2FqTGNLkIFIMHjP%2Fj3PRa6YJrHkbrXssIMWASlU9B9zWixJDBJVCDwitvyTqTwcSVPiCYfh30CLQb0YlUO%2FX45e5%2BDTgLaVQxo%2Fbxzr9l0FWX7Jj4hlMgoJdFVROxRQRk8mgU2Unz2s5cN2nBxDQU2YCkrSxX%2BOjyj9sn8WhD%2BaNA5qC1U%2BjNz7Lo7NopLWuxoRW2iHl9Suzt3wHAPTQFL73L%2FaLo12cbyZgHcD4xJk7FQt513CmkiCzTqQYNMNeC9L0GOqUBR32SGOlEy%2FRwZZ9fFuj4PTOjvwcbPIw%2Fhq3fP%2Fl5W20zHnLCYLEVbvp520a9UBbQF82lD43iySO6HbbyY6630pfBML%2FExxU9Z4pdL2ms1iSA3zxAdv7N7wln%2BM9wibfNKBhzxcXiI1b8gxHw01a76bMjqp6re4BP9HTyTwYn3DjnjjLYzXgE4HwCBlgTF%2FB4gtS8pMHf7ksUwoV2zqGM7Y3QR3H6&X-Amz-Signature=87ba459a78ef139decaab3feeb2cff40bcd241965c2c92574bca721ffd92c91e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T63YLMBW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCERphU18Ak1kRBWDo%2F%2BNEYKgiMqZ9EsQXbvrW9FmfbsAIgJfNqN0MJIwzKICsv9LmD%2BqG%2FkUarwba1L7A%2FKJCXKwEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNZjOUI8g4DqAXhZFyrcA%2B9Y7IqwgNRQH6DeGe9zjtpYgUNMbW6UJiF95nZLnlXUA%2BRLVi25PFXOrlm5eYReKxulmaPGVIp6pYZ65j6qY7GhmoBm5pTqQq5Yui7D5CBs8JP8msRt5depY%2Fq5VEYDfwmZsMEIPy3hYPqyR2v3HdU1VnKEkNRYQzmknG1oc60fxLvhfyJKcJiBb5W5CLrEy0ZLxpyPIxlLrXp%2Bmc0%2Fdyqo6AbkbELcJqHsR%2BbBBQpmgc%2BnCCmoWHsw7VvhE%2FHEr5eNQgwbNFR6fKlIPgh00vec05QdCfeWkg6MCL%2FdmgGW5WANLTwWhA4UoA%2FMrmjQIi7vcpSKlwWp58TQ8f4zuyrvKGk94KhETL8PgBcYJoOJM0F%2Bv3QJgmC1RCsCQWil%2FqTGNLkIFIMHjP%2Fj3PRa6YJrHkbrXssIMWASlU9B9zWixJDBJVCDwitvyTqTwcSVPiCYfh30CLQb0YlUO%2FX45e5%2BDTgLaVQxo%2Fbxzr9l0FWX7Jj4hlMgoJdFVROxRQRk8mgU2Unz2s5cN2nBxDQU2YCkrSxX%2BOjyj9sn8WhD%2BaNA5qC1U%2BjNz7Lo7NopLWuxoRW2iHl9Suzt3wHAPTQFL73L%2FaLo12cbyZgHcD4xJk7FQt513CmkiCzTqQYNMNeC9L0GOqUBR32SGOlEy%2FRwZZ9fFuj4PTOjvwcbPIw%2Fhq3fP%2Fl5W20zHnLCYLEVbvp520a9UBbQF82lD43iySO6HbbyY6630pfBML%2FExxU9Z4pdL2ms1iSA3zxAdv7N7wln%2BM9wibfNKBhzxcXiI1b8gxHw01a76bMjqp6re4BP9HTyTwYn3DjnjjLYzXgE4HwCBlgTF%2FB4gtS8pMHf7ksUwoV2zqGM7Y3QR3H6&X-Amz-Signature=656dd7d7ed1b23a7cfc2dc376b59603fd096951a24950e1cca5777806c4d0f5c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T63YLMBW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCERphU18Ak1kRBWDo%2F%2BNEYKgiMqZ9EsQXbvrW9FmfbsAIgJfNqN0MJIwzKICsv9LmD%2BqG%2FkUarwba1L7A%2FKJCXKwEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNZjOUI8g4DqAXhZFyrcA%2B9Y7IqwgNRQH6DeGe9zjtpYgUNMbW6UJiF95nZLnlXUA%2BRLVi25PFXOrlm5eYReKxulmaPGVIp6pYZ65j6qY7GhmoBm5pTqQq5Yui7D5CBs8JP8msRt5depY%2Fq5VEYDfwmZsMEIPy3hYPqyR2v3HdU1VnKEkNRYQzmknG1oc60fxLvhfyJKcJiBb5W5CLrEy0ZLxpyPIxlLrXp%2Bmc0%2Fdyqo6AbkbELcJqHsR%2BbBBQpmgc%2BnCCmoWHsw7VvhE%2FHEr5eNQgwbNFR6fKlIPgh00vec05QdCfeWkg6MCL%2FdmgGW5WANLTwWhA4UoA%2FMrmjQIi7vcpSKlwWp58TQ8f4zuyrvKGk94KhETL8PgBcYJoOJM0F%2Bv3QJgmC1RCsCQWil%2FqTGNLkIFIMHjP%2Fj3PRa6YJrHkbrXssIMWASlU9B9zWixJDBJVCDwitvyTqTwcSVPiCYfh30CLQb0YlUO%2FX45e5%2BDTgLaVQxo%2Fbxzr9l0FWX7Jj4hlMgoJdFVROxRQRk8mgU2Unz2s5cN2nBxDQU2YCkrSxX%2BOjyj9sn8WhD%2BaNA5qC1U%2BjNz7Lo7NopLWuxoRW2iHl9Suzt3wHAPTQFL73L%2FaLo12cbyZgHcD4xJk7FQt513CmkiCzTqQYNMNeC9L0GOqUBR32SGOlEy%2FRwZZ9fFuj4PTOjvwcbPIw%2Fhq3fP%2Fl5W20zHnLCYLEVbvp520a9UBbQF82lD43iySO6HbbyY6630pfBML%2FExxU9Z4pdL2ms1iSA3zxAdv7N7wln%2BM9wibfNKBhzxcXiI1b8gxHw01a76bMjqp6re4BP9HTyTwYn3DjnjjLYzXgE4HwCBlgTF%2FB4gtS8pMHf7ksUwoV2zqGM7Y3QR3H6&X-Amz-Signature=f13475d2d132fad58fd1efcce5303c100457402db020c2c5e7d8a1b95599f9b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T63YLMBW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCERphU18Ak1kRBWDo%2F%2BNEYKgiMqZ9EsQXbvrW9FmfbsAIgJfNqN0MJIwzKICsv9LmD%2BqG%2FkUarwba1L7A%2FKJCXKwEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNZjOUI8g4DqAXhZFyrcA%2B9Y7IqwgNRQH6DeGe9zjtpYgUNMbW6UJiF95nZLnlXUA%2BRLVi25PFXOrlm5eYReKxulmaPGVIp6pYZ65j6qY7GhmoBm5pTqQq5Yui7D5CBs8JP8msRt5depY%2Fq5VEYDfwmZsMEIPy3hYPqyR2v3HdU1VnKEkNRYQzmknG1oc60fxLvhfyJKcJiBb5W5CLrEy0ZLxpyPIxlLrXp%2Bmc0%2Fdyqo6AbkbELcJqHsR%2BbBBQpmgc%2BnCCmoWHsw7VvhE%2FHEr5eNQgwbNFR6fKlIPgh00vec05QdCfeWkg6MCL%2FdmgGW5WANLTwWhA4UoA%2FMrmjQIi7vcpSKlwWp58TQ8f4zuyrvKGk94KhETL8PgBcYJoOJM0F%2Bv3QJgmC1RCsCQWil%2FqTGNLkIFIMHjP%2Fj3PRa6YJrHkbrXssIMWASlU9B9zWixJDBJVCDwitvyTqTwcSVPiCYfh30CLQb0YlUO%2FX45e5%2BDTgLaVQxo%2Fbxzr9l0FWX7Jj4hlMgoJdFVROxRQRk8mgU2Unz2s5cN2nBxDQU2YCkrSxX%2BOjyj9sn8WhD%2BaNA5qC1U%2BjNz7Lo7NopLWuxoRW2iHl9Suzt3wHAPTQFL73L%2FaLo12cbyZgHcD4xJk7FQt513CmkiCzTqQYNMNeC9L0GOqUBR32SGOlEy%2FRwZZ9fFuj4PTOjvwcbPIw%2Fhq3fP%2Fl5W20zHnLCYLEVbvp520a9UBbQF82lD43iySO6HbbyY6630pfBML%2FExxU9Z4pdL2ms1iSA3zxAdv7N7wln%2BM9wibfNKBhzxcXiI1b8gxHw01a76bMjqp6re4BP9HTyTwYn3DjnjjLYzXgE4HwCBlgTF%2FB4gtS8pMHf7ksUwoV2zqGM7Y3QR3H6&X-Amz-Signature=e2c208d44c9e3219d98936996df4832900b7f7f7db275838470e000befb94c88&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T63YLMBW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCERphU18Ak1kRBWDo%2F%2BNEYKgiMqZ9EsQXbvrW9FmfbsAIgJfNqN0MJIwzKICsv9LmD%2BqG%2FkUarwba1L7A%2FKJCXKwEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNZjOUI8g4DqAXhZFyrcA%2B9Y7IqwgNRQH6DeGe9zjtpYgUNMbW6UJiF95nZLnlXUA%2BRLVi25PFXOrlm5eYReKxulmaPGVIp6pYZ65j6qY7GhmoBm5pTqQq5Yui7D5CBs8JP8msRt5depY%2Fq5VEYDfwmZsMEIPy3hYPqyR2v3HdU1VnKEkNRYQzmknG1oc60fxLvhfyJKcJiBb5W5CLrEy0ZLxpyPIxlLrXp%2Bmc0%2Fdyqo6AbkbELcJqHsR%2BbBBQpmgc%2BnCCmoWHsw7VvhE%2FHEr5eNQgwbNFR6fKlIPgh00vec05QdCfeWkg6MCL%2FdmgGW5WANLTwWhA4UoA%2FMrmjQIi7vcpSKlwWp58TQ8f4zuyrvKGk94KhETL8PgBcYJoOJM0F%2Bv3QJgmC1RCsCQWil%2FqTGNLkIFIMHjP%2Fj3PRa6YJrHkbrXssIMWASlU9B9zWixJDBJVCDwitvyTqTwcSVPiCYfh30CLQb0YlUO%2FX45e5%2BDTgLaVQxo%2Fbxzr9l0FWX7Jj4hlMgoJdFVROxRQRk8mgU2Unz2s5cN2nBxDQU2YCkrSxX%2BOjyj9sn8WhD%2BaNA5qC1U%2BjNz7Lo7NopLWuxoRW2iHl9Suzt3wHAPTQFL73L%2FaLo12cbyZgHcD4xJk7FQt513CmkiCzTqQYNMNeC9L0GOqUBR32SGOlEy%2FRwZZ9fFuj4PTOjvwcbPIw%2Fhq3fP%2Fl5W20zHnLCYLEVbvp520a9UBbQF82lD43iySO6HbbyY6630pfBML%2FExxU9Z4pdL2ms1iSA3zxAdv7N7wln%2BM9wibfNKBhzxcXiI1b8gxHw01a76bMjqp6re4BP9HTyTwYn3DjnjjLYzXgE4HwCBlgTF%2FB4gtS8pMHf7ksUwoV2zqGM7Y3QR3H6&X-Amz-Signature=6ea0106b69e720288d4fdfbc1c9ba85b5189e51bec5200d3db0b7c8004385f87&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
