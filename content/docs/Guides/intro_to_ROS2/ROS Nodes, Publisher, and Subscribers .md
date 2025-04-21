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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4KGSKVE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T041142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCI1BdEiLy30B0jFRruB6uSObTV89yJVpgX%2FdnsnmkY2wIhAMSwGZqkCi6Dnux1X1ZARqss8%2BULqtVrTgX4XOsaOq5CKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSkVaHItas3iAgOxIq3AOSGKdOHyAiOUaaZU%2BBfGhlhx0EY6gizQdKs2MN%2BypNk05qQrXxUo%2BtNwR03%2FfBrJ7guhDOck%2B1LexzH0m7lTV%2FpXzZAqU3MmBdux2ehIc1ooBfM8fYNzHSBDvCWD0fKperHAhqRmbFPbLTQu6YjuyHE8B1S6FlVnYuFF4mhZLMX00YX8%2BI1%2F%2BbsUTfNANHe20jLES3HGBaUP4F7rp11%2BX1N0aq6xcMHoTJGp6nOFUS8KsKyHZIwhzdWv%2FX1badPY%2BuAxnVgmTzxgh%2BsffLd%2BTT4IUt9FZodKDhEpWjKQrLIdYzLUuzxC1oyrEz4NUA5TQ1XxIxApNIH9dN58LJCtpkrHTf0v2N0truDBkFieH%2BvHjjmifOk2%2FyvJIosYd%2Fb9TjE2gZFv%2BWTKWHHPMlZbWE9I0ijq7rv2fkKj%2F1yT91jGWu1cewKwkCZR3Z1ut76eOLO0rsVObnWc9H73fNUPe1S4T6Cz0sXCPHE%2FexBRVoN%2B6QexiSifvVpQ%2FP27vUPWnHOUNMow2CY9eBxhBEkKK3%2BAgTLWATAsKGHoFYKNbGDgiBIcLSr6psqeZhsPHmny88nI6BNhPISLQJI9h7spu6iN46Pcb%2FUPEsmLm5Wd8P819Ew0IL6dh0Osn1OjDbgZfABjqkATXkmW6MgBWKgyMPdg3leDSrM7ww4dvz7hSDuNlQ4KdcPiqjxrsnKHliWouXA5k3BqB16sBjyoEbREw4oJfsjH2cacfqYO7z4WHqfEvOp%2BtS4KSBSGqLbSzQgiciKmuaP3q%2BsAJK4fs6pzM%2FFs1rMFbmJB%2BWxA%2B1I%2FjCD5jO4U31E1mL6Csw7EEPfv8LI9NwKvHqkF9V9Slmn%2Fs9zXPm0M2gQIE8&X-Amz-Signature=97463751a259c7bd900e1daa796dafc9eae8eafb66b61ca0eb8291d2dd0936b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4KGSKVE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T041142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCI1BdEiLy30B0jFRruB6uSObTV89yJVpgX%2FdnsnmkY2wIhAMSwGZqkCi6Dnux1X1ZARqss8%2BULqtVrTgX4XOsaOq5CKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSkVaHItas3iAgOxIq3AOSGKdOHyAiOUaaZU%2BBfGhlhx0EY6gizQdKs2MN%2BypNk05qQrXxUo%2BtNwR03%2FfBrJ7guhDOck%2B1LexzH0m7lTV%2FpXzZAqU3MmBdux2ehIc1ooBfM8fYNzHSBDvCWD0fKperHAhqRmbFPbLTQu6YjuyHE8B1S6FlVnYuFF4mhZLMX00YX8%2BI1%2F%2BbsUTfNANHe20jLES3HGBaUP4F7rp11%2BX1N0aq6xcMHoTJGp6nOFUS8KsKyHZIwhzdWv%2FX1badPY%2BuAxnVgmTzxgh%2BsffLd%2BTT4IUt9FZodKDhEpWjKQrLIdYzLUuzxC1oyrEz4NUA5TQ1XxIxApNIH9dN58LJCtpkrHTf0v2N0truDBkFieH%2BvHjjmifOk2%2FyvJIosYd%2Fb9TjE2gZFv%2BWTKWHHPMlZbWE9I0ijq7rv2fkKj%2F1yT91jGWu1cewKwkCZR3Z1ut76eOLO0rsVObnWc9H73fNUPe1S4T6Cz0sXCPHE%2FexBRVoN%2B6QexiSifvVpQ%2FP27vUPWnHOUNMow2CY9eBxhBEkKK3%2BAgTLWATAsKGHoFYKNbGDgiBIcLSr6psqeZhsPHmny88nI6BNhPISLQJI9h7spu6iN46Pcb%2FUPEsmLm5Wd8P819Ew0IL6dh0Osn1OjDbgZfABjqkATXkmW6MgBWKgyMPdg3leDSrM7ww4dvz7hSDuNlQ4KdcPiqjxrsnKHliWouXA5k3BqB16sBjyoEbREw4oJfsjH2cacfqYO7z4WHqfEvOp%2BtS4KSBSGqLbSzQgiciKmuaP3q%2BsAJK4fs6pzM%2FFs1rMFbmJB%2BWxA%2B1I%2FjCD5jO4U31E1mL6Csw7EEPfv8LI9NwKvHqkF9V9Slmn%2Fs9zXPm0M2gQIE8&X-Amz-Signature=73ac6248392ae32d3ed9bf71a8b420538d61bbb3662e0698841fc5e496c94cc6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4KGSKVE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T041142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCI1BdEiLy30B0jFRruB6uSObTV89yJVpgX%2FdnsnmkY2wIhAMSwGZqkCi6Dnux1X1ZARqss8%2BULqtVrTgX4XOsaOq5CKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSkVaHItas3iAgOxIq3AOSGKdOHyAiOUaaZU%2BBfGhlhx0EY6gizQdKs2MN%2BypNk05qQrXxUo%2BtNwR03%2FfBrJ7guhDOck%2B1LexzH0m7lTV%2FpXzZAqU3MmBdux2ehIc1ooBfM8fYNzHSBDvCWD0fKperHAhqRmbFPbLTQu6YjuyHE8B1S6FlVnYuFF4mhZLMX00YX8%2BI1%2F%2BbsUTfNANHe20jLES3HGBaUP4F7rp11%2BX1N0aq6xcMHoTJGp6nOFUS8KsKyHZIwhzdWv%2FX1badPY%2BuAxnVgmTzxgh%2BsffLd%2BTT4IUt9FZodKDhEpWjKQrLIdYzLUuzxC1oyrEz4NUA5TQ1XxIxApNIH9dN58LJCtpkrHTf0v2N0truDBkFieH%2BvHjjmifOk2%2FyvJIosYd%2Fb9TjE2gZFv%2BWTKWHHPMlZbWE9I0ijq7rv2fkKj%2F1yT91jGWu1cewKwkCZR3Z1ut76eOLO0rsVObnWc9H73fNUPe1S4T6Cz0sXCPHE%2FexBRVoN%2B6QexiSifvVpQ%2FP27vUPWnHOUNMow2CY9eBxhBEkKK3%2BAgTLWATAsKGHoFYKNbGDgiBIcLSr6psqeZhsPHmny88nI6BNhPISLQJI9h7spu6iN46Pcb%2FUPEsmLm5Wd8P819Ew0IL6dh0Osn1OjDbgZfABjqkATXkmW6MgBWKgyMPdg3leDSrM7ww4dvz7hSDuNlQ4KdcPiqjxrsnKHliWouXA5k3BqB16sBjyoEbREw4oJfsjH2cacfqYO7z4WHqfEvOp%2BtS4KSBSGqLbSzQgiciKmuaP3q%2BsAJK4fs6pzM%2FFs1rMFbmJB%2BWxA%2B1I%2FjCD5jO4U31E1mL6Csw7EEPfv8LI9NwKvHqkF9V9Slmn%2Fs9zXPm0M2gQIE8&X-Amz-Signature=dc0d10b4fceb02b3d7309d7ce4e28879391d62b507dc23a2a72694bbe43f283c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4KGSKVE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T041142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCI1BdEiLy30B0jFRruB6uSObTV89yJVpgX%2FdnsnmkY2wIhAMSwGZqkCi6Dnux1X1ZARqss8%2BULqtVrTgX4XOsaOq5CKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSkVaHItas3iAgOxIq3AOSGKdOHyAiOUaaZU%2BBfGhlhx0EY6gizQdKs2MN%2BypNk05qQrXxUo%2BtNwR03%2FfBrJ7guhDOck%2B1LexzH0m7lTV%2FpXzZAqU3MmBdux2ehIc1ooBfM8fYNzHSBDvCWD0fKperHAhqRmbFPbLTQu6YjuyHE8B1S6FlVnYuFF4mhZLMX00YX8%2BI1%2F%2BbsUTfNANHe20jLES3HGBaUP4F7rp11%2BX1N0aq6xcMHoTJGp6nOFUS8KsKyHZIwhzdWv%2FX1badPY%2BuAxnVgmTzxgh%2BsffLd%2BTT4IUt9FZodKDhEpWjKQrLIdYzLUuzxC1oyrEz4NUA5TQ1XxIxApNIH9dN58LJCtpkrHTf0v2N0truDBkFieH%2BvHjjmifOk2%2FyvJIosYd%2Fb9TjE2gZFv%2BWTKWHHPMlZbWE9I0ijq7rv2fkKj%2F1yT91jGWu1cewKwkCZR3Z1ut76eOLO0rsVObnWc9H73fNUPe1S4T6Cz0sXCPHE%2FexBRVoN%2B6QexiSifvVpQ%2FP27vUPWnHOUNMow2CY9eBxhBEkKK3%2BAgTLWATAsKGHoFYKNbGDgiBIcLSr6psqeZhsPHmny88nI6BNhPISLQJI9h7spu6iN46Pcb%2FUPEsmLm5Wd8P819Ew0IL6dh0Osn1OjDbgZfABjqkATXkmW6MgBWKgyMPdg3leDSrM7ww4dvz7hSDuNlQ4KdcPiqjxrsnKHliWouXA5k3BqB16sBjyoEbREw4oJfsjH2cacfqYO7z4WHqfEvOp%2BtS4KSBSGqLbSzQgiciKmuaP3q%2BsAJK4fs6pzM%2FFs1rMFbmJB%2BWxA%2B1I%2FjCD5jO4U31E1mL6Csw7EEPfv8LI9NwKvHqkF9V9Slmn%2Fs9zXPm0M2gQIE8&X-Amz-Signature=47fd95349f6f3eced864a48da9495eb446554751b93c419b4e62217f23e021c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4KGSKVE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T041142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCI1BdEiLy30B0jFRruB6uSObTV89yJVpgX%2FdnsnmkY2wIhAMSwGZqkCi6Dnux1X1ZARqss8%2BULqtVrTgX4XOsaOq5CKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSkVaHItas3iAgOxIq3AOSGKdOHyAiOUaaZU%2BBfGhlhx0EY6gizQdKs2MN%2BypNk05qQrXxUo%2BtNwR03%2FfBrJ7guhDOck%2B1LexzH0m7lTV%2FpXzZAqU3MmBdux2ehIc1ooBfM8fYNzHSBDvCWD0fKperHAhqRmbFPbLTQu6YjuyHE8B1S6FlVnYuFF4mhZLMX00YX8%2BI1%2F%2BbsUTfNANHe20jLES3HGBaUP4F7rp11%2BX1N0aq6xcMHoTJGp6nOFUS8KsKyHZIwhzdWv%2FX1badPY%2BuAxnVgmTzxgh%2BsffLd%2BTT4IUt9FZodKDhEpWjKQrLIdYzLUuzxC1oyrEz4NUA5TQ1XxIxApNIH9dN58LJCtpkrHTf0v2N0truDBkFieH%2BvHjjmifOk2%2FyvJIosYd%2Fb9TjE2gZFv%2BWTKWHHPMlZbWE9I0ijq7rv2fkKj%2F1yT91jGWu1cewKwkCZR3Z1ut76eOLO0rsVObnWc9H73fNUPe1S4T6Cz0sXCPHE%2FexBRVoN%2B6QexiSifvVpQ%2FP27vUPWnHOUNMow2CY9eBxhBEkKK3%2BAgTLWATAsKGHoFYKNbGDgiBIcLSr6psqeZhsPHmny88nI6BNhPISLQJI9h7spu6iN46Pcb%2FUPEsmLm5Wd8P819Ew0IL6dh0Osn1OjDbgZfABjqkATXkmW6MgBWKgyMPdg3leDSrM7ww4dvz7hSDuNlQ4KdcPiqjxrsnKHliWouXA5k3BqB16sBjyoEbREw4oJfsjH2cacfqYO7z4WHqfEvOp%2BtS4KSBSGqLbSzQgiciKmuaP3q%2BsAJK4fs6pzM%2FFs1rMFbmJB%2BWxA%2B1I%2FjCD5jO4U31E1mL6Csw7EEPfv8LI9NwKvHqkF9V9Slmn%2Fs9zXPm0M2gQIE8&X-Amz-Signature=53946b02803b0b508b780033c38db9c8faa75ba9a02215a5c33d491b931dfcb2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4KGSKVE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T041142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCI1BdEiLy30B0jFRruB6uSObTV89yJVpgX%2FdnsnmkY2wIhAMSwGZqkCi6Dnux1X1ZARqss8%2BULqtVrTgX4XOsaOq5CKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSkVaHItas3iAgOxIq3AOSGKdOHyAiOUaaZU%2BBfGhlhx0EY6gizQdKs2MN%2BypNk05qQrXxUo%2BtNwR03%2FfBrJ7guhDOck%2B1LexzH0m7lTV%2FpXzZAqU3MmBdux2ehIc1ooBfM8fYNzHSBDvCWD0fKperHAhqRmbFPbLTQu6YjuyHE8B1S6FlVnYuFF4mhZLMX00YX8%2BI1%2F%2BbsUTfNANHe20jLES3HGBaUP4F7rp11%2BX1N0aq6xcMHoTJGp6nOFUS8KsKyHZIwhzdWv%2FX1badPY%2BuAxnVgmTzxgh%2BsffLd%2BTT4IUt9FZodKDhEpWjKQrLIdYzLUuzxC1oyrEz4NUA5TQ1XxIxApNIH9dN58LJCtpkrHTf0v2N0truDBkFieH%2BvHjjmifOk2%2FyvJIosYd%2Fb9TjE2gZFv%2BWTKWHHPMlZbWE9I0ijq7rv2fkKj%2F1yT91jGWu1cewKwkCZR3Z1ut76eOLO0rsVObnWc9H73fNUPe1S4T6Cz0sXCPHE%2FexBRVoN%2B6QexiSifvVpQ%2FP27vUPWnHOUNMow2CY9eBxhBEkKK3%2BAgTLWATAsKGHoFYKNbGDgiBIcLSr6psqeZhsPHmny88nI6BNhPISLQJI9h7spu6iN46Pcb%2FUPEsmLm5Wd8P819Ew0IL6dh0Osn1OjDbgZfABjqkATXkmW6MgBWKgyMPdg3leDSrM7ww4dvz7hSDuNlQ4KdcPiqjxrsnKHliWouXA5k3BqB16sBjyoEbREw4oJfsjH2cacfqYO7z4WHqfEvOp%2BtS4KSBSGqLbSzQgiciKmuaP3q%2BsAJK4fs6pzM%2FFs1rMFbmJB%2BWxA%2B1I%2FjCD5jO4U31E1mL6Csw7EEPfv8LI9NwKvHqkF9V9Slmn%2Fs9zXPm0M2gQIE8&X-Amz-Signature=7c30eb2ca03c6bd1f38ff009d10e54550af2ada5c58839744003477d350833ef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4KGSKVE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T041142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCI1BdEiLy30B0jFRruB6uSObTV89yJVpgX%2FdnsnmkY2wIhAMSwGZqkCi6Dnux1X1ZARqss8%2BULqtVrTgX4XOsaOq5CKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSkVaHItas3iAgOxIq3AOSGKdOHyAiOUaaZU%2BBfGhlhx0EY6gizQdKs2MN%2BypNk05qQrXxUo%2BtNwR03%2FfBrJ7guhDOck%2B1LexzH0m7lTV%2FpXzZAqU3MmBdux2ehIc1ooBfM8fYNzHSBDvCWD0fKperHAhqRmbFPbLTQu6YjuyHE8B1S6FlVnYuFF4mhZLMX00YX8%2BI1%2F%2BbsUTfNANHe20jLES3HGBaUP4F7rp11%2BX1N0aq6xcMHoTJGp6nOFUS8KsKyHZIwhzdWv%2FX1badPY%2BuAxnVgmTzxgh%2BsffLd%2BTT4IUt9FZodKDhEpWjKQrLIdYzLUuzxC1oyrEz4NUA5TQ1XxIxApNIH9dN58LJCtpkrHTf0v2N0truDBkFieH%2BvHjjmifOk2%2FyvJIosYd%2Fb9TjE2gZFv%2BWTKWHHPMlZbWE9I0ijq7rv2fkKj%2F1yT91jGWu1cewKwkCZR3Z1ut76eOLO0rsVObnWc9H73fNUPe1S4T6Cz0sXCPHE%2FexBRVoN%2B6QexiSifvVpQ%2FP27vUPWnHOUNMow2CY9eBxhBEkKK3%2BAgTLWATAsKGHoFYKNbGDgiBIcLSr6psqeZhsPHmny88nI6BNhPISLQJI9h7spu6iN46Pcb%2FUPEsmLm5Wd8P819Ew0IL6dh0Osn1OjDbgZfABjqkATXkmW6MgBWKgyMPdg3leDSrM7ww4dvz7hSDuNlQ4KdcPiqjxrsnKHliWouXA5k3BqB16sBjyoEbREw4oJfsjH2cacfqYO7z4WHqfEvOp%2BtS4KSBSGqLbSzQgiciKmuaP3q%2BsAJK4fs6pzM%2FFs1rMFbmJB%2BWxA%2B1I%2FjCD5jO4U31E1mL6Csw7EEPfv8LI9NwKvHqkF9V9Slmn%2Fs9zXPm0M2gQIE8&X-Amz-Signature=1bf28141c3067a9d6e81d555d51b64c3b200a6f3876fb163c4b1ef1fd8b3be79&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4KGSKVE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T041142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCI1BdEiLy30B0jFRruB6uSObTV89yJVpgX%2FdnsnmkY2wIhAMSwGZqkCi6Dnux1X1ZARqss8%2BULqtVrTgX4XOsaOq5CKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSkVaHItas3iAgOxIq3AOSGKdOHyAiOUaaZU%2BBfGhlhx0EY6gizQdKs2MN%2BypNk05qQrXxUo%2BtNwR03%2FfBrJ7guhDOck%2B1LexzH0m7lTV%2FpXzZAqU3MmBdux2ehIc1ooBfM8fYNzHSBDvCWD0fKperHAhqRmbFPbLTQu6YjuyHE8B1S6FlVnYuFF4mhZLMX00YX8%2BI1%2F%2BbsUTfNANHe20jLES3HGBaUP4F7rp11%2BX1N0aq6xcMHoTJGp6nOFUS8KsKyHZIwhzdWv%2FX1badPY%2BuAxnVgmTzxgh%2BsffLd%2BTT4IUt9FZodKDhEpWjKQrLIdYzLUuzxC1oyrEz4NUA5TQ1XxIxApNIH9dN58LJCtpkrHTf0v2N0truDBkFieH%2BvHjjmifOk2%2FyvJIosYd%2Fb9TjE2gZFv%2BWTKWHHPMlZbWE9I0ijq7rv2fkKj%2F1yT91jGWu1cewKwkCZR3Z1ut76eOLO0rsVObnWc9H73fNUPe1S4T6Cz0sXCPHE%2FexBRVoN%2B6QexiSifvVpQ%2FP27vUPWnHOUNMow2CY9eBxhBEkKK3%2BAgTLWATAsKGHoFYKNbGDgiBIcLSr6psqeZhsPHmny88nI6BNhPISLQJI9h7spu6iN46Pcb%2FUPEsmLm5Wd8P819Ew0IL6dh0Osn1OjDbgZfABjqkATXkmW6MgBWKgyMPdg3leDSrM7ww4dvz7hSDuNlQ4KdcPiqjxrsnKHliWouXA5k3BqB16sBjyoEbREw4oJfsjH2cacfqYO7z4WHqfEvOp%2BtS4KSBSGqLbSzQgiciKmuaP3q%2BsAJK4fs6pzM%2FFs1rMFbmJB%2BWxA%2B1I%2FjCD5jO4U31E1mL6Csw7EEPfv8LI9NwKvHqkF9V9Slmn%2Fs9zXPm0M2gQIE8&X-Amz-Signature=5f37e06b529b5e6fa474355312eadee3f501d87bea72d6af18923eb2302d8d30&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
