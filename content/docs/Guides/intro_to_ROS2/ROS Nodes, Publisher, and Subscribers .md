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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJOQXSIX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1bvbb0jKpaqDHES8GsLG6TWQU85Hy6IoY3AwuyV%2BprQIhAM4S1RR3569AhtgjOz%2Fsa15JdeUa5F1iYhFKVuEshpo8Kv8DCEsQABoMNjM3NDIzMTgzODA1Igxhs36B1sMPLjC7jugq3AO1WE0KACl6JikW596l%2BOVyII6NT5pBfmZoVFr%2B45K6w3%2Br97ORf7paRL6R5jyTk3UezfnbLbvwk25uRwPTtChMiht6kcPLSddFdSQ2uKRTQ1Pe3gbBVe8zirYJoiXHdSkm12kTCkdQnIkB2wyHHLmXghd1ZDiFUdkz45x3HcJG4dhPADehtxIf3nwtx2p0vHwKzbKn9Wwqbvw1HoKmqQFd111F0HZh7EGWULPkN8kt1aV9tPHO5qG1ISn7Lc2STjinmkxe1w89OJGYVpXtL4GPkTOjMDfOZXxBga0y2uvISAhuXg66bAxQT1AXpZRWEODx%2B%2FambQjy0kJ9MRYfIpHbqfqaKkR8JsM7DshTOSoRFpm%2BwGNvrpGc%2FCKh4fHHxUQOHFWhqYKX12n%2Fkg7aT2PuDct5%2F2OCrDKtylDRBf6VymPaqU%2FbNYKMgCoiQj9ZF9ta2luNO%2Fcy4fF09Dq6JsKtzlEsxQSrOqi7JRKwPy%2FvDjgQ2%2FKw7%2BSq2LbP1%2BhJLVVF7oQf%2Bq%2FjNZ4XI6xzxfI7Y7%2FSzVHY5NaWMRwzkWF3wXFroD9NGZqJHdv13psHnR39b%2Fg%2F1dQgwcG8Mpkm%2Fv2v4XzHcjiHA6YG8F6K%2Fa8f7d7LpHJVw8hYBh4M5jDAxeG%2BBjqkAfv0zIBYulwh32EGhy82fleDi4t4tsWE2ABrDIqfynQnwDlVZG4WXD%2FJMkszZ9S4f1YigVmgZwAg0gc7oCBhNrTAxuAXl9MdD2l6bRXOOTCMPDDghBWzQiIyNwVKB%2Bing3DzVncjKOY%2BYfg04MnY4lOV0SKMNdQrhfBJF%2Fc61D3XkjhgYNR2vyLBZ3p9bdWOIM4tP9Yfifipn90Umpv9%2Bod%2F1755&X-Amz-Signature=160be847331c66af9d38e7e8487ca41d1347811fa2a7df0c4517eff72816fe3e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJOQXSIX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1bvbb0jKpaqDHES8GsLG6TWQU85Hy6IoY3AwuyV%2BprQIhAM4S1RR3569AhtgjOz%2Fsa15JdeUa5F1iYhFKVuEshpo8Kv8DCEsQABoMNjM3NDIzMTgzODA1Igxhs36B1sMPLjC7jugq3AO1WE0KACl6JikW596l%2BOVyII6NT5pBfmZoVFr%2B45K6w3%2Br97ORf7paRL6R5jyTk3UezfnbLbvwk25uRwPTtChMiht6kcPLSddFdSQ2uKRTQ1Pe3gbBVe8zirYJoiXHdSkm12kTCkdQnIkB2wyHHLmXghd1ZDiFUdkz45x3HcJG4dhPADehtxIf3nwtx2p0vHwKzbKn9Wwqbvw1HoKmqQFd111F0HZh7EGWULPkN8kt1aV9tPHO5qG1ISn7Lc2STjinmkxe1w89OJGYVpXtL4GPkTOjMDfOZXxBga0y2uvISAhuXg66bAxQT1AXpZRWEODx%2B%2FambQjy0kJ9MRYfIpHbqfqaKkR8JsM7DshTOSoRFpm%2BwGNvrpGc%2FCKh4fHHxUQOHFWhqYKX12n%2Fkg7aT2PuDct5%2F2OCrDKtylDRBf6VymPaqU%2FbNYKMgCoiQj9ZF9ta2luNO%2Fcy4fF09Dq6JsKtzlEsxQSrOqi7JRKwPy%2FvDjgQ2%2FKw7%2BSq2LbP1%2BhJLVVF7oQf%2Bq%2FjNZ4XI6xzxfI7Y7%2FSzVHY5NaWMRwzkWF3wXFroD9NGZqJHdv13psHnR39b%2Fg%2F1dQgwcG8Mpkm%2Fv2v4XzHcjiHA6YG8F6K%2Fa8f7d7LpHJVw8hYBh4M5jDAxeG%2BBjqkAfv0zIBYulwh32EGhy82fleDi4t4tsWE2ABrDIqfynQnwDlVZG4WXD%2FJMkszZ9S4f1YigVmgZwAg0gc7oCBhNrTAxuAXl9MdD2l6bRXOOTCMPDDghBWzQiIyNwVKB%2Bing3DzVncjKOY%2BYfg04MnY4lOV0SKMNdQrhfBJF%2Fc61D3XkjhgYNR2vyLBZ3p9bdWOIM4tP9Yfifipn90Umpv9%2Bod%2F1755&X-Amz-Signature=875f294b2215f3e6647446d727c8dea21fdc8e4f9b52c80439f434256f197813&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJOQXSIX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1bvbb0jKpaqDHES8GsLG6TWQU85Hy6IoY3AwuyV%2BprQIhAM4S1RR3569AhtgjOz%2Fsa15JdeUa5F1iYhFKVuEshpo8Kv8DCEsQABoMNjM3NDIzMTgzODA1Igxhs36B1sMPLjC7jugq3AO1WE0KACl6JikW596l%2BOVyII6NT5pBfmZoVFr%2B45K6w3%2Br97ORf7paRL6R5jyTk3UezfnbLbvwk25uRwPTtChMiht6kcPLSddFdSQ2uKRTQ1Pe3gbBVe8zirYJoiXHdSkm12kTCkdQnIkB2wyHHLmXghd1ZDiFUdkz45x3HcJG4dhPADehtxIf3nwtx2p0vHwKzbKn9Wwqbvw1HoKmqQFd111F0HZh7EGWULPkN8kt1aV9tPHO5qG1ISn7Lc2STjinmkxe1w89OJGYVpXtL4GPkTOjMDfOZXxBga0y2uvISAhuXg66bAxQT1AXpZRWEODx%2B%2FambQjy0kJ9MRYfIpHbqfqaKkR8JsM7DshTOSoRFpm%2BwGNvrpGc%2FCKh4fHHxUQOHFWhqYKX12n%2Fkg7aT2PuDct5%2F2OCrDKtylDRBf6VymPaqU%2FbNYKMgCoiQj9ZF9ta2luNO%2Fcy4fF09Dq6JsKtzlEsxQSrOqi7JRKwPy%2FvDjgQ2%2FKw7%2BSq2LbP1%2BhJLVVF7oQf%2Bq%2FjNZ4XI6xzxfI7Y7%2FSzVHY5NaWMRwzkWF3wXFroD9NGZqJHdv13psHnR39b%2Fg%2F1dQgwcG8Mpkm%2Fv2v4XzHcjiHA6YG8F6K%2Fa8f7d7LpHJVw8hYBh4M5jDAxeG%2BBjqkAfv0zIBYulwh32EGhy82fleDi4t4tsWE2ABrDIqfynQnwDlVZG4WXD%2FJMkszZ9S4f1YigVmgZwAg0gc7oCBhNrTAxuAXl9MdD2l6bRXOOTCMPDDghBWzQiIyNwVKB%2Bing3DzVncjKOY%2BYfg04MnY4lOV0SKMNdQrhfBJF%2Fc61D3XkjhgYNR2vyLBZ3p9bdWOIM4tP9Yfifipn90Umpv9%2Bod%2F1755&X-Amz-Signature=1c376a6cd0e075d13ee367001274449f8555e5cec4992ea6941fb95143dfb4c2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJOQXSIX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1bvbb0jKpaqDHES8GsLG6TWQU85Hy6IoY3AwuyV%2BprQIhAM4S1RR3569AhtgjOz%2Fsa15JdeUa5F1iYhFKVuEshpo8Kv8DCEsQABoMNjM3NDIzMTgzODA1Igxhs36B1sMPLjC7jugq3AO1WE0KACl6JikW596l%2BOVyII6NT5pBfmZoVFr%2B45K6w3%2Br97ORf7paRL6R5jyTk3UezfnbLbvwk25uRwPTtChMiht6kcPLSddFdSQ2uKRTQ1Pe3gbBVe8zirYJoiXHdSkm12kTCkdQnIkB2wyHHLmXghd1ZDiFUdkz45x3HcJG4dhPADehtxIf3nwtx2p0vHwKzbKn9Wwqbvw1HoKmqQFd111F0HZh7EGWULPkN8kt1aV9tPHO5qG1ISn7Lc2STjinmkxe1w89OJGYVpXtL4GPkTOjMDfOZXxBga0y2uvISAhuXg66bAxQT1AXpZRWEODx%2B%2FambQjy0kJ9MRYfIpHbqfqaKkR8JsM7DshTOSoRFpm%2BwGNvrpGc%2FCKh4fHHxUQOHFWhqYKX12n%2Fkg7aT2PuDct5%2F2OCrDKtylDRBf6VymPaqU%2FbNYKMgCoiQj9ZF9ta2luNO%2Fcy4fF09Dq6JsKtzlEsxQSrOqi7JRKwPy%2FvDjgQ2%2FKw7%2BSq2LbP1%2BhJLVVF7oQf%2Bq%2FjNZ4XI6xzxfI7Y7%2FSzVHY5NaWMRwzkWF3wXFroD9NGZqJHdv13psHnR39b%2Fg%2F1dQgwcG8Mpkm%2Fv2v4XzHcjiHA6YG8F6K%2Fa8f7d7LpHJVw8hYBh4M5jDAxeG%2BBjqkAfv0zIBYulwh32EGhy82fleDi4t4tsWE2ABrDIqfynQnwDlVZG4WXD%2FJMkszZ9S4f1YigVmgZwAg0gc7oCBhNrTAxuAXl9MdD2l6bRXOOTCMPDDghBWzQiIyNwVKB%2Bing3DzVncjKOY%2BYfg04MnY4lOV0SKMNdQrhfBJF%2Fc61D3XkjhgYNR2vyLBZ3p9bdWOIM4tP9Yfifipn90Umpv9%2Bod%2F1755&X-Amz-Signature=62f3978509c8c3832114a56dec19bc9ccc94e2877d10b2d28d49d20a8dcc1799&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJOQXSIX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1bvbb0jKpaqDHES8GsLG6TWQU85Hy6IoY3AwuyV%2BprQIhAM4S1RR3569AhtgjOz%2Fsa15JdeUa5F1iYhFKVuEshpo8Kv8DCEsQABoMNjM3NDIzMTgzODA1Igxhs36B1sMPLjC7jugq3AO1WE0KACl6JikW596l%2BOVyII6NT5pBfmZoVFr%2B45K6w3%2Br97ORf7paRL6R5jyTk3UezfnbLbvwk25uRwPTtChMiht6kcPLSddFdSQ2uKRTQ1Pe3gbBVe8zirYJoiXHdSkm12kTCkdQnIkB2wyHHLmXghd1ZDiFUdkz45x3HcJG4dhPADehtxIf3nwtx2p0vHwKzbKn9Wwqbvw1HoKmqQFd111F0HZh7EGWULPkN8kt1aV9tPHO5qG1ISn7Lc2STjinmkxe1w89OJGYVpXtL4GPkTOjMDfOZXxBga0y2uvISAhuXg66bAxQT1AXpZRWEODx%2B%2FambQjy0kJ9MRYfIpHbqfqaKkR8JsM7DshTOSoRFpm%2BwGNvrpGc%2FCKh4fHHxUQOHFWhqYKX12n%2Fkg7aT2PuDct5%2F2OCrDKtylDRBf6VymPaqU%2FbNYKMgCoiQj9ZF9ta2luNO%2Fcy4fF09Dq6JsKtzlEsxQSrOqi7JRKwPy%2FvDjgQ2%2FKw7%2BSq2LbP1%2BhJLVVF7oQf%2Bq%2FjNZ4XI6xzxfI7Y7%2FSzVHY5NaWMRwzkWF3wXFroD9NGZqJHdv13psHnR39b%2Fg%2F1dQgwcG8Mpkm%2Fv2v4XzHcjiHA6YG8F6K%2Fa8f7d7LpHJVw8hYBh4M5jDAxeG%2BBjqkAfv0zIBYulwh32EGhy82fleDi4t4tsWE2ABrDIqfynQnwDlVZG4WXD%2FJMkszZ9S4f1YigVmgZwAg0gc7oCBhNrTAxuAXl9MdD2l6bRXOOTCMPDDghBWzQiIyNwVKB%2Bing3DzVncjKOY%2BYfg04MnY4lOV0SKMNdQrhfBJF%2Fc61D3XkjhgYNR2vyLBZ3p9bdWOIM4tP9Yfifipn90Umpv9%2Bod%2F1755&X-Amz-Signature=8ffde11a19c02d5867ead78745d9c163ce6897eb24ea2ee2a6e1c9e764a15420&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJOQXSIX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1bvbb0jKpaqDHES8GsLG6TWQU85Hy6IoY3AwuyV%2BprQIhAM4S1RR3569AhtgjOz%2Fsa15JdeUa5F1iYhFKVuEshpo8Kv8DCEsQABoMNjM3NDIzMTgzODA1Igxhs36B1sMPLjC7jugq3AO1WE0KACl6JikW596l%2BOVyII6NT5pBfmZoVFr%2B45K6w3%2Br97ORf7paRL6R5jyTk3UezfnbLbvwk25uRwPTtChMiht6kcPLSddFdSQ2uKRTQ1Pe3gbBVe8zirYJoiXHdSkm12kTCkdQnIkB2wyHHLmXghd1ZDiFUdkz45x3HcJG4dhPADehtxIf3nwtx2p0vHwKzbKn9Wwqbvw1HoKmqQFd111F0HZh7EGWULPkN8kt1aV9tPHO5qG1ISn7Lc2STjinmkxe1w89OJGYVpXtL4GPkTOjMDfOZXxBga0y2uvISAhuXg66bAxQT1AXpZRWEODx%2B%2FambQjy0kJ9MRYfIpHbqfqaKkR8JsM7DshTOSoRFpm%2BwGNvrpGc%2FCKh4fHHxUQOHFWhqYKX12n%2Fkg7aT2PuDct5%2F2OCrDKtylDRBf6VymPaqU%2FbNYKMgCoiQj9ZF9ta2luNO%2Fcy4fF09Dq6JsKtzlEsxQSrOqi7JRKwPy%2FvDjgQ2%2FKw7%2BSq2LbP1%2BhJLVVF7oQf%2Bq%2FjNZ4XI6xzxfI7Y7%2FSzVHY5NaWMRwzkWF3wXFroD9NGZqJHdv13psHnR39b%2Fg%2F1dQgwcG8Mpkm%2Fv2v4XzHcjiHA6YG8F6K%2Fa8f7d7LpHJVw8hYBh4M5jDAxeG%2BBjqkAfv0zIBYulwh32EGhy82fleDi4t4tsWE2ABrDIqfynQnwDlVZG4WXD%2FJMkszZ9S4f1YigVmgZwAg0gc7oCBhNrTAxuAXl9MdD2l6bRXOOTCMPDDghBWzQiIyNwVKB%2Bing3DzVncjKOY%2BYfg04MnY4lOV0SKMNdQrhfBJF%2Fc61D3XkjhgYNR2vyLBZ3p9bdWOIM4tP9Yfifipn90Umpv9%2Bod%2F1755&X-Amz-Signature=6f1b109b39be879b21b6bfd2b6fbf9198a4d9e33d6208b96437ed03640682f31&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJOQXSIX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1bvbb0jKpaqDHES8GsLG6TWQU85Hy6IoY3AwuyV%2BprQIhAM4S1RR3569AhtgjOz%2Fsa15JdeUa5F1iYhFKVuEshpo8Kv8DCEsQABoMNjM3NDIzMTgzODA1Igxhs36B1sMPLjC7jugq3AO1WE0KACl6JikW596l%2BOVyII6NT5pBfmZoVFr%2B45K6w3%2Br97ORf7paRL6R5jyTk3UezfnbLbvwk25uRwPTtChMiht6kcPLSddFdSQ2uKRTQ1Pe3gbBVe8zirYJoiXHdSkm12kTCkdQnIkB2wyHHLmXghd1ZDiFUdkz45x3HcJG4dhPADehtxIf3nwtx2p0vHwKzbKn9Wwqbvw1HoKmqQFd111F0HZh7EGWULPkN8kt1aV9tPHO5qG1ISn7Lc2STjinmkxe1w89OJGYVpXtL4GPkTOjMDfOZXxBga0y2uvISAhuXg66bAxQT1AXpZRWEODx%2B%2FambQjy0kJ9MRYfIpHbqfqaKkR8JsM7DshTOSoRFpm%2BwGNvrpGc%2FCKh4fHHxUQOHFWhqYKX12n%2Fkg7aT2PuDct5%2F2OCrDKtylDRBf6VymPaqU%2FbNYKMgCoiQj9ZF9ta2luNO%2Fcy4fF09Dq6JsKtzlEsxQSrOqi7JRKwPy%2FvDjgQ2%2FKw7%2BSq2LbP1%2BhJLVVF7oQf%2Bq%2FjNZ4XI6xzxfI7Y7%2FSzVHY5NaWMRwzkWF3wXFroD9NGZqJHdv13psHnR39b%2Fg%2F1dQgwcG8Mpkm%2Fv2v4XzHcjiHA6YG8F6K%2Fa8f7d7LpHJVw8hYBh4M5jDAxeG%2BBjqkAfv0zIBYulwh32EGhy82fleDi4t4tsWE2ABrDIqfynQnwDlVZG4WXD%2FJMkszZ9S4f1YigVmgZwAg0gc7oCBhNrTAxuAXl9MdD2l6bRXOOTCMPDDghBWzQiIyNwVKB%2Bing3DzVncjKOY%2BYfg04MnY4lOV0SKMNdQrhfBJF%2Fc61D3XkjhgYNR2vyLBZ3p9bdWOIM4tP9Yfifipn90Umpv9%2Bod%2F1755&X-Amz-Signature=86c125176901aea82f75e1ac6400d4c93f2cce9372b402d80c816637f120bccc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJOQXSIX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1bvbb0jKpaqDHES8GsLG6TWQU85Hy6IoY3AwuyV%2BprQIhAM4S1RR3569AhtgjOz%2Fsa15JdeUa5F1iYhFKVuEshpo8Kv8DCEsQABoMNjM3NDIzMTgzODA1Igxhs36B1sMPLjC7jugq3AO1WE0KACl6JikW596l%2BOVyII6NT5pBfmZoVFr%2B45K6w3%2Br97ORf7paRL6R5jyTk3UezfnbLbvwk25uRwPTtChMiht6kcPLSddFdSQ2uKRTQ1Pe3gbBVe8zirYJoiXHdSkm12kTCkdQnIkB2wyHHLmXghd1ZDiFUdkz45x3HcJG4dhPADehtxIf3nwtx2p0vHwKzbKn9Wwqbvw1HoKmqQFd111F0HZh7EGWULPkN8kt1aV9tPHO5qG1ISn7Lc2STjinmkxe1w89OJGYVpXtL4GPkTOjMDfOZXxBga0y2uvISAhuXg66bAxQT1AXpZRWEODx%2B%2FambQjy0kJ9MRYfIpHbqfqaKkR8JsM7DshTOSoRFpm%2BwGNvrpGc%2FCKh4fHHxUQOHFWhqYKX12n%2Fkg7aT2PuDct5%2F2OCrDKtylDRBf6VymPaqU%2FbNYKMgCoiQj9ZF9ta2luNO%2Fcy4fF09Dq6JsKtzlEsxQSrOqi7JRKwPy%2FvDjgQ2%2FKw7%2BSq2LbP1%2BhJLVVF7oQf%2Bq%2FjNZ4XI6xzxfI7Y7%2FSzVHY5NaWMRwzkWF3wXFroD9NGZqJHdv13psHnR39b%2Fg%2F1dQgwcG8Mpkm%2Fv2v4XzHcjiHA6YG8F6K%2Fa8f7d7LpHJVw8hYBh4M5jDAxeG%2BBjqkAfv0zIBYulwh32EGhy82fleDi4t4tsWE2ABrDIqfynQnwDlVZG4WXD%2FJMkszZ9S4f1YigVmgZwAg0gc7oCBhNrTAxuAXl9MdD2l6bRXOOTCMPDDghBWzQiIyNwVKB%2Bing3DzVncjKOY%2BYfg04MnY4lOV0SKMNdQrhfBJF%2Fc61D3XkjhgYNR2vyLBZ3p9bdWOIM4tP9Yfifipn90Umpv9%2Bod%2F1755&X-Amz-Signature=b7515d91be1a78b6b2c0fa0ad192d2206acc70bddf0e63b5be44b3781e1c6267&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
