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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAN2Z5SZ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIE87FqrmRGk2F0ynHJ%2Bh6q664IspJfcmFV9VRUC%2F919BAiBzJpm4PhAVgVnff9TPXIWO9fpOdpooIiRrizxpnqA9iSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo3hF0O7BsOemWsWSKtwDEebO5IBPjniGj41YrGp7itLZjXi9YXXxeERwtPyAogPa261484%2Bm%2F67ycEDGeVoCSpEBfwK8v14wsn3R1aujrVd8aJmFhU%2BvgdZYzBo3t35tuNzbyzUS739RKEP6Slt4G304YQWyUL0Nqlhu9KGvQPoDohJfucxQq7f7Y5T8QZvDgbfyARCqtOZKSOfvph0PQSs2xUNrkzuA1NOqUm1tHnKq3Z2xtHgaXhMA%2B3JNRyjOD31sHXs1n%2FZx%2FxLpJuJzW4zEeE5GqMWtdMnnBrEKbpdYeP1sDIYILKf%2FwzH1Ps1hcJAzJD5L6dgIrQudZJml4COErNbLGsdqTx5GFnXOE8nDR224t1PLxXPOAn21QKQ9HZh9LzV0VEy3zISGnxfq3wuOZhayjrUDlskE1GyE5dtdRAw34vf4HE8NvnGYrwZUhKSM%2BMZjP0vDscxu6qCz4UWvr3DSA3brX%2FZQLqtX5QyWLAQXYgheRuBYDmFeK1b0XYuGYwyGBsiXEp9NwoKJ31406uc%2BYRnX0cpLDjpS42jsQMoBbV12tgJ4MwOBnBnbePoArv1apGtA3CuqeFIyu%2FWdLgMlXVYoHa%2BdbBtuIaEDKSulYXwi70MO%2FdSGNifiXQq2JXB6Ds%2B2s2Qw7emcxAY6pgF0JLwHP0%2BXoRhfgSKSnkMExJaoBTIrgVC4ENKYqMZB2SqpT6pLUZpCuSC6eIxn79%2BX40dOG6CA%2FXNL3cj6f9jN%2F2vBNGOczGJsX92l%2FydGoIWpneDhXkxqVFj93dggy6YDjjOwr4BX%2FtnDMwu3V9pwyp9OOT8LqcW7YsYIivMyGY9Eg%2FE1ykX0JI5i59t1jUirtj4gbYUG8TkmGl037i2cPb%2Bp1XMM&X-Amz-Signature=bece1517016b1f7049855dd9d5f22a8b37b55e4190f7be817df1df137f51883f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAN2Z5SZ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIE87FqrmRGk2F0ynHJ%2Bh6q664IspJfcmFV9VRUC%2F919BAiBzJpm4PhAVgVnff9TPXIWO9fpOdpooIiRrizxpnqA9iSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo3hF0O7BsOemWsWSKtwDEebO5IBPjniGj41YrGp7itLZjXi9YXXxeERwtPyAogPa261484%2Bm%2F67ycEDGeVoCSpEBfwK8v14wsn3R1aujrVd8aJmFhU%2BvgdZYzBo3t35tuNzbyzUS739RKEP6Slt4G304YQWyUL0Nqlhu9KGvQPoDohJfucxQq7f7Y5T8QZvDgbfyARCqtOZKSOfvph0PQSs2xUNrkzuA1NOqUm1tHnKq3Z2xtHgaXhMA%2B3JNRyjOD31sHXs1n%2FZx%2FxLpJuJzW4zEeE5GqMWtdMnnBrEKbpdYeP1sDIYILKf%2FwzH1Ps1hcJAzJD5L6dgIrQudZJml4COErNbLGsdqTx5GFnXOE8nDR224t1PLxXPOAn21QKQ9HZh9LzV0VEy3zISGnxfq3wuOZhayjrUDlskE1GyE5dtdRAw34vf4HE8NvnGYrwZUhKSM%2BMZjP0vDscxu6qCz4UWvr3DSA3brX%2FZQLqtX5QyWLAQXYgheRuBYDmFeK1b0XYuGYwyGBsiXEp9NwoKJ31406uc%2BYRnX0cpLDjpS42jsQMoBbV12tgJ4MwOBnBnbePoArv1apGtA3CuqeFIyu%2FWdLgMlXVYoHa%2BdbBtuIaEDKSulYXwi70MO%2FdSGNifiXQq2JXB6Ds%2B2s2Qw7emcxAY6pgF0JLwHP0%2BXoRhfgSKSnkMExJaoBTIrgVC4ENKYqMZB2SqpT6pLUZpCuSC6eIxn79%2BX40dOG6CA%2FXNL3cj6f9jN%2F2vBNGOczGJsX92l%2FydGoIWpneDhXkxqVFj93dggy6YDjjOwr4BX%2FtnDMwu3V9pwyp9OOT8LqcW7YsYIivMyGY9Eg%2FE1ykX0JI5i59t1jUirtj4gbYUG8TkmGl037i2cPb%2Bp1XMM&X-Amz-Signature=bc4bd07ef6b434b2fdcb6d9f554695fb7969189cd7670c24f7a0f128ac48d198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAN2Z5SZ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIE87FqrmRGk2F0ynHJ%2Bh6q664IspJfcmFV9VRUC%2F919BAiBzJpm4PhAVgVnff9TPXIWO9fpOdpooIiRrizxpnqA9iSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo3hF0O7BsOemWsWSKtwDEebO5IBPjniGj41YrGp7itLZjXi9YXXxeERwtPyAogPa261484%2Bm%2F67ycEDGeVoCSpEBfwK8v14wsn3R1aujrVd8aJmFhU%2BvgdZYzBo3t35tuNzbyzUS739RKEP6Slt4G304YQWyUL0Nqlhu9KGvQPoDohJfucxQq7f7Y5T8QZvDgbfyARCqtOZKSOfvph0PQSs2xUNrkzuA1NOqUm1tHnKq3Z2xtHgaXhMA%2B3JNRyjOD31sHXs1n%2FZx%2FxLpJuJzW4zEeE5GqMWtdMnnBrEKbpdYeP1sDIYILKf%2FwzH1Ps1hcJAzJD5L6dgIrQudZJml4COErNbLGsdqTx5GFnXOE8nDR224t1PLxXPOAn21QKQ9HZh9LzV0VEy3zISGnxfq3wuOZhayjrUDlskE1GyE5dtdRAw34vf4HE8NvnGYrwZUhKSM%2BMZjP0vDscxu6qCz4UWvr3DSA3brX%2FZQLqtX5QyWLAQXYgheRuBYDmFeK1b0XYuGYwyGBsiXEp9NwoKJ31406uc%2BYRnX0cpLDjpS42jsQMoBbV12tgJ4MwOBnBnbePoArv1apGtA3CuqeFIyu%2FWdLgMlXVYoHa%2BdbBtuIaEDKSulYXwi70MO%2FdSGNifiXQq2JXB6Ds%2B2s2Qw7emcxAY6pgF0JLwHP0%2BXoRhfgSKSnkMExJaoBTIrgVC4ENKYqMZB2SqpT6pLUZpCuSC6eIxn79%2BX40dOG6CA%2FXNL3cj6f9jN%2F2vBNGOczGJsX92l%2FydGoIWpneDhXkxqVFj93dggy6YDjjOwr4BX%2FtnDMwu3V9pwyp9OOT8LqcW7YsYIivMyGY9Eg%2FE1ykX0JI5i59t1jUirtj4gbYUG8TkmGl037i2cPb%2Bp1XMM&X-Amz-Signature=8162ae2335aa312d58b5b784ca39b3ec8bdade19b1defc3add95b717ed7351ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAN2Z5SZ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIE87FqrmRGk2F0ynHJ%2Bh6q664IspJfcmFV9VRUC%2F919BAiBzJpm4PhAVgVnff9TPXIWO9fpOdpooIiRrizxpnqA9iSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo3hF0O7BsOemWsWSKtwDEebO5IBPjniGj41YrGp7itLZjXi9YXXxeERwtPyAogPa261484%2Bm%2F67ycEDGeVoCSpEBfwK8v14wsn3R1aujrVd8aJmFhU%2BvgdZYzBo3t35tuNzbyzUS739RKEP6Slt4G304YQWyUL0Nqlhu9KGvQPoDohJfucxQq7f7Y5T8QZvDgbfyARCqtOZKSOfvph0PQSs2xUNrkzuA1NOqUm1tHnKq3Z2xtHgaXhMA%2B3JNRyjOD31sHXs1n%2FZx%2FxLpJuJzW4zEeE5GqMWtdMnnBrEKbpdYeP1sDIYILKf%2FwzH1Ps1hcJAzJD5L6dgIrQudZJml4COErNbLGsdqTx5GFnXOE8nDR224t1PLxXPOAn21QKQ9HZh9LzV0VEy3zISGnxfq3wuOZhayjrUDlskE1GyE5dtdRAw34vf4HE8NvnGYrwZUhKSM%2BMZjP0vDscxu6qCz4UWvr3DSA3brX%2FZQLqtX5QyWLAQXYgheRuBYDmFeK1b0XYuGYwyGBsiXEp9NwoKJ31406uc%2BYRnX0cpLDjpS42jsQMoBbV12tgJ4MwOBnBnbePoArv1apGtA3CuqeFIyu%2FWdLgMlXVYoHa%2BdbBtuIaEDKSulYXwi70MO%2FdSGNifiXQq2JXB6Ds%2B2s2Qw7emcxAY6pgF0JLwHP0%2BXoRhfgSKSnkMExJaoBTIrgVC4ENKYqMZB2SqpT6pLUZpCuSC6eIxn79%2BX40dOG6CA%2FXNL3cj6f9jN%2F2vBNGOczGJsX92l%2FydGoIWpneDhXkxqVFj93dggy6YDjjOwr4BX%2FtnDMwu3V9pwyp9OOT8LqcW7YsYIivMyGY9Eg%2FE1ykX0JI5i59t1jUirtj4gbYUG8TkmGl037i2cPb%2Bp1XMM&X-Amz-Signature=1332403836edfdc03b786321c0cd127859133c271a44d57c82e28e87bc604ba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAN2Z5SZ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIE87FqrmRGk2F0ynHJ%2Bh6q664IspJfcmFV9VRUC%2F919BAiBzJpm4PhAVgVnff9TPXIWO9fpOdpooIiRrizxpnqA9iSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo3hF0O7BsOemWsWSKtwDEebO5IBPjniGj41YrGp7itLZjXi9YXXxeERwtPyAogPa261484%2Bm%2F67ycEDGeVoCSpEBfwK8v14wsn3R1aujrVd8aJmFhU%2BvgdZYzBo3t35tuNzbyzUS739RKEP6Slt4G304YQWyUL0Nqlhu9KGvQPoDohJfucxQq7f7Y5T8QZvDgbfyARCqtOZKSOfvph0PQSs2xUNrkzuA1NOqUm1tHnKq3Z2xtHgaXhMA%2B3JNRyjOD31sHXs1n%2FZx%2FxLpJuJzW4zEeE5GqMWtdMnnBrEKbpdYeP1sDIYILKf%2FwzH1Ps1hcJAzJD5L6dgIrQudZJml4COErNbLGsdqTx5GFnXOE8nDR224t1PLxXPOAn21QKQ9HZh9LzV0VEy3zISGnxfq3wuOZhayjrUDlskE1GyE5dtdRAw34vf4HE8NvnGYrwZUhKSM%2BMZjP0vDscxu6qCz4UWvr3DSA3brX%2FZQLqtX5QyWLAQXYgheRuBYDmFeK1b0XYuGYwyGBsiXEp9NwoKJ31406uc%2BYRnX0cpLDjpS42jsQMoBbV12tgJ4MwOBnBnbePoArv1apGtA3CuqeFIyu%2FWdLgMlXVYoHa%2BdbBtuIaEDKSulYXwi70MO%2FdSGNifiXQq2JXB6Ds%2B2s2Qw7emcxAY6pgF0JLwHP0%2BXoRhfgSKSnkMExJaoBTIrgVC4ENKYqMZB2SqpT6pLUZpCuSC6eIxn79%2BX40dOG6CA%2FXNL3cj6f9jN%2F2vBNGOczGJsX92l%2FydGoIWpneDhXkxqVFj93dggy6YDjjOwr4BX%2FtnDMwu3V9pwyp9OOT8LqcW7YsYIivMyGY9Eg%2FE1ykX0JI5i59t1jUirtj4gbYUG8TkmGl037i2cPb%2Bp1XMM&X-Amz-Signature=38c5253db2acc8afdad488afd03e3c9189e280025e7f347146ba3900ba81e6f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAN2Z5SZ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIE87FqrmRGk2F0ynHJ%2Bh6q664IspJfcmFV9VRUC%2F919BAiBzJpm4PhAVgVnff9TPXIWO9fpOdpooIiRrizxpnqA9iSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo3hF0O7BsOemWsWSKtwDEebO5IBPjniGj41YrGp7itLZjXi9YXXxeERwtPyAogPa261484%2Bm%2F67ycEDGeVoCSpEBfwK8v14wsn3R1aujrVd8aJmFhU%2BvgdZYzBo3t35tuNzbyzUS739RKEP6Slt4G304YQWyUL0Nqlhu9KGvQPoDohJfucxQq7f7Y5T8QZvDgbfyARCqtOZKSOfvph0PQSs2xUNrkzuA1NOqUm1tHnKq3Z2xtHgaXhMA%2B3JNRyjOD31sHXs1n%2FZx%2FxLpJuJzW4zEeE5GqMWtdMnnBrEKbpdYeP1sDIYILKf%2FwzH1Ps1hcJAzJD5L6dgIrQudZJml4COErNbLGsdqTx5GFnXOE8nDR224t1PLxXPOAn21QKQ9HZh9LzV0VEy3zISGnxfq3wuOZhayjrUDlskE1GyE5dtdRAw34vf4HE8NvnGYrwZUhKSM%2BMZjP0vDscxu6qCz4UWvr3DSA3brX%2FZQLqtX5QyWLAQXYgheRuBYDmFeK1b0XYuGYwyGBsiXEp9NwoKJ31406uc%2BYRnX0cpLDjpS42jsQMoBbV12tgJ4MwOBnBnbePoArv1apGtA3CuqeFIyu%2FWdLgMlXVYoHa%2BdbBtuIaEDKSulYXwi70MO%2FdSGNifiXQq2JXB6Ds%2B2s2Qw7emcxAY6pgF0JLwHP0%2BXoRhfgSKSnkMExJaoBTIrgVC4ENKYqMZB2SqpT6pLUZpCuSC6eIxn79%2BX40dOG6CA%2FXNL3cj6f9jN%2F2vBNGOczGJsX92l%2FydGoIWpneDhXkxqVFj93dggy6YDjjOwr4BX%2FtnDMwu3V9pwyp9OOT8LqcW7YsYIivMyGY9Eg%2FE1ykX0JI5i59t1jUirtj4gbYUG8TkmGl037i2cPb%2Bp1XMM&X-Amz-Signature=c13b06319cbf84f4c75aaf602937f13866eccda6c5a807b414928bfafc05baa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAN2Z5SZ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIE87FqrmRGk2F0ynHJ%2Bh6q664IspJfcmFV9VRUC%2F919BAiBzJpm4PhAVgVnff9TPXIWO9fpOdpooIiRrizxpnqA9iSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo3hF0O7BsOemWsWSKtwDEebO5IBPjniGj41YrGp7itLZjXi9YXXxeERwtPyAogPa261484%2Bm%2F67ycEDGeVoCSpEBfwK8v14wsn3R1aujrVd8aJmFhU%2BvgdZYzBo3t35tuNzbyzUS739RKEP6Slt4G304YQWyUL0Nqlhu9KGvQPoDohJfucxQq7f7Y5T8QZvDgbfyARCqtOZKSOfvph0PQSs2xUNrkzuA1NOqUm1tHnKq3Z2xtHgaXhMA%2B3JNRyjOD31sHXs1n%2FZx%2FxLpJuJzW4zEeE5GqMWtdMnnBrEKbpdYeP1sDIYILKf%2FwzH1Ps1hcJAzJD5L6dgIrQudZJml4COErNbLGsdqTx5GFnXOE8nDR224t1PLxXPOAn21QKQ9HZh9LzV0VEy3zISGnxfq3wuOZhayjrUDlskE1GyE5dtdRAw34vf4HE8NvnGYrwZUhKSM%2BMZjP0vDscxu6qCz4UWvr3DSA3brX%2FZQLqtX5QyWLAQXYgheRuBYDmFeK1b0XYuGYwyGBsiXEp9NwoKJ31406uc%2BYRnX0cpLDjpS42jsQMoBbV12tgJ4MwOBnBnbePoArv1apGtA3CuqeFIyu%2FWdLgMlXVYoHa%2BdbBtuIaEDKSulYXwi70MO%2FdSGNifiXQq2JXB6Ds%2B2s2Qw7emcxAY6pgF0JLwHP0%2BXoRhfgSKSnkMExJaoBTIrgVC4ENKYqMZB2SqpT6pLUZpCuSC6eIxn79%2BX40dOG6CA%2FXNL3cj6f9jN%2F2vBNGOczGJsX92l%2FydGoIWpneDhXkxqVFj93dggy6YDjjOwr4BX%2FtnDMwu3V9pwyp9OOT8LqcW7YsYIivMyGY9Eg%2FE1ykX0JI5i59t1jUirtj4gbYUG8TkmGl037i2cPb%2Bp1XMM&X-Amz-Signature=17b4daabcd634fbf3f29278ace1395271d64e18b100642a0a3e61003eb5aa85e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAN2Z5SZ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIE87FqrmRGk2F0ynHJ%2Bh6q664IspJfcmFV9VRUC%2F919BAiBzJpm4PhAVgVnff9TPXIWO9fpOdpooIiRrizxpnqA9iSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo3hF0O7BsOemWsWSKtwDEebO5IBPjniGj41YrGp7itLZjXi9YXXxeERwtPyAogPa261484%2Bm%2F67ycEDGeVoCSpEBfwK8v14wsn3R1aujrVd8aJmFhU%2BvgdZYzBo3t35tuNzbyzUS739RKEP6Slt4G304YQWyUL0Nqlhu9KGvQPoDohJfucxQq7f7Y5T8QZvDgbfyARCqtOZKSOfvph0PQSs2xUNrkzuA1NOqUm1tHnKq3Z2xtHgaXhMA%2B3JNRyjOD31sHXs1n%2FZx%2FxLpJuJzW4zEeE5GqMWtdMnnBrEKbpdYeP1sDIYILKf%2FwzH1Ps1hcJAzJD5L6dgIrQudZJml4COErNbLGsdqTx5GFnXOE8nDR224t1PLxXPOAn21QKQ9HZh9LzV0VEy3zISGnxfq3wuOZhayjrUDlskE1GyE5dtdRAw34vf4HE8NvnGYrwZUhKSM%2BMZjP0vDscxu6qCz4UWvr3DSA3brX%2FZQLqtX5QyWLAQXYgheRuBYDmFeK1b0XYuGYwyGBsiXEp9NwoKJ31406uc%2BYRnX0cpLDjpS42jsQMoBbV12tgJ4MwOBnBnbePoArv1apGtA3CuqeFIyu%2FWdLgMlXVYoHa%2BdbBtuIaEDKSulYXwi70MO%2FdSGNifiXQq2JXB6Ds%2B2s2Qw7emcxAY6pgF0JLwHP0%2BXoRhfgSKSnkMExJaoBTIrgVC4ENKYqMZB2SqpT6pLUZpCuSC6eIxn79%2BX40dOG6CA%2FXNL3cj6f9jN%2F2vBNGOczGJsX92l%2FydGoIWpneDhXkxqVFj93dggy6YDjjOwr4BX%2FtnDMwu3V9pwyp9OOT8LqcW7YsYIivMyGY9Eg%2FE1ykX0JI5i59t1jUirtj4gbYUG8TkmGl037i2cPb%2Bp1XMM&X-Amz-Signature=5d3f9bb7856f381f1d8c4abb56a9c048edb55235294e6347300651d11e7b898d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
