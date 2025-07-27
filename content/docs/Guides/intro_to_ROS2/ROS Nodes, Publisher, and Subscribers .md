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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXROS4SP%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCn2h4CAkkWv9ZmuXa%2FESZQ4BJ0yyjjUnloOwyTyw447gIgOHBl55Sq%2BSnwbXQ6M5k%2FRyd%2BZh0fZeT15naJgK9Nf7Uq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIHY8zsVl4ohXnAlYircA%2Foxo0tnWe2ZHFlYSLnYMzkIJNIsWm7AN2q71PC4fhrY1ZuVKC%2BSNrqkWGPpw0Y3VkzoE1hFTQcuoBsv7MKpJRb8MAi64f5XkKzvkwZjtCJDbCLsillnQYbT%2BT1gYeFuajuM4Sx4cdaIvfXcV%2BFk9alFFFikYrY3lk1KwqD53IB328jn24C0gloIztnls%2FcN15kvQQfokfwYgeJAiemPI0ydTtnJIyWcg7RTmzCtN%2BYuJfHFJa3qz%2F0tsguiEzJh7PcOrtSaYaJqXeqZRjzKMKeowTrnhDSHvbs%2FdQlNfyOuJiZ6YKlPJDsrtj3m0qBr1fs7spWY6n%2B5x6CqsI37QkR1ZPnxFHfFFwuOabq9B6cpWiRg%2FxYf5q6Qh6Y9GpIfUYSmf%2Fl4l7o74IE%2BEF0QgjEKQtevjroQNEq%2F2BHo3ZFqBlT%2BzCZtyrJsVslpLNolzN9VOkeZZErXZyUlO7U%2F4i54hX8n2p9YHN7jCfmquTWpDYV5rPTLlXsvjTRYAzpritdkY2Gg9zFIjjteNoMRFQIH1MlMYIH5CoEPUa4tNc9gdgecUPw6ngvnF7aPiv8IvOIQFB3%2BFhrn9tkDMN8JM%2B%2FhVj%2BF4zRibHHHWC7MkpvXPKURFeJBP41NqLueMNDimMQGOqUBB5Yev5G%2BMYgpCjf4ju3MmiCYWn8zzNBOKBIarHOqr9gwd8wb9jyMIp%2FTPAEO45arnm81X9UTBVtOyLdTwn4FyWOUGsd1QlaPbEIjuNldV49giZA7tp%2FKk44vQ02Xeq6dUEOv1wxMgJ%2FRmxm8tvNUAylpa6HuSD0oORJ%2F3fvGKojFHEBdkvr%2Fhn5qkYhJ334fVC9R1xKdp9wfixdurrpLNpBKTKhb&X-Amz-Signature=a19486f9a36f40e5761205f2082d1e826c0d43a796bffa1cb7fe4eb56cba84c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXROS4SP%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCn2h4CAkkWv9ZmuXa%2FESZQ4BJ0yyjjUnloOwyTyw447gIgOHBl55Sq%2BSnwbXQ6M5k%2FRyd%2BZh0fZeT15naJgK9Nf7Uq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIHY8zsVl4ohXnAlYircA%2Foxo0tnWe2ZHFlYSLnYMzkIJNIsWm7AN2q71PC4fhrY1ZuVKC%2BSNrqkWGPpw0Y3VkzoE1hFTQcuoBsv7MKpJRb8MAi64f5XkKzvkwZjtCJDbCLsillnQYbT%2BT1gYeFuajuM4Sx4cdaIvfXcV%2BFk9alFFFikYrY3lk1KwqD53IB328jn24C0gloIztnls%2FcN15kvQQfokfwYgeJAiemPI0ydTtnJIyWcg7RTmzCtN%2BYuJfHFJa3qz%2F0tsguiEzJh7PcOrtSaYaJqXeqZRjzKMKeowTrnhDSHvbs%2FdQlNfyOuJiZ6YKlPJDsrtj3m0qBr1fs7spWY6n%2B5x6CqsI37QkR1ZPnxFHfFFwuOabq9B6cpWiRg%2FxYf5q6Qh6Y9GpIfUYSmf%2Fl4l7o74IE%2BEF0QgjEKQtevjroQNEq%2F2BHo3ZFqBlT%2BzCZtyrJsVslpLNolzN9VOkeZZErXZyUlO7U%2F4i54hX8n2p9YHN7jCfmquTWpDYV5rPTLlXsvjTRYAzpritdkY2Gg9zFIjjteNoMRFQIH1MlMYIH5CoEPUa4tNc9gdgecUPw6ngvnF7aPiv8IvOIQFB3%2BFhrn9tkDMN8JM%2B%2FhVj%2BF4zRibHHHWC7MkpvXPKURFeJBP41NqLueMNDimMQGOqUBB5Yev5G%2BMYgpCjf4ju3MmiCYWn8zzNBOKBIarHOqr9gwd8wb9jyMIp%2FTPAEO45arnm81X9UTBVtOyLdTwn4FyWOUGsd1QlaPbEIjuNldV49giZA7tp%2FKk44vQ02Xeq6dUEOv1wxMgJ%2FRmxm8tvNUAylpa6HuSD0oORJ%2F3fvGKojFHEBdkvr%2Fhn5qkYhJ334fVC9R1xKdp9wfixdurrpLNpBKTKhb&X-Amz-Signature=6a1b868b2161b7f9fabf3accfcbe42ebef2f3694c5396ea051cf47f84e643b26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXROS4SP%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCn2h4CAkkWv9ZmuXa%2FESZQ4BJ0yyjjUnloOwyTyw447gIgOHBl55Sq%2BSnwbXQ6M5k%2FRyd%2BZh0fZeT15naJgK9Nf7Uq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIHY8zsVl4ohXnAlYircA%2Foxo0tnWe2ZHFlYSLnYMzkIJNIsWm7AN2q71PC4fhrY1ZuVKC%2BSNrqkWGPpw0Y3VkzoE1hFTQcuoBsv7MKpJRb8MAi64f5XkKzvkwZjtCJDbCLsillnQYbT%2BT1gYeFuajuM4Sx4cdaIvfXcV%2BFk9alFFFikYrY3lk1KwqD53IB328jn24C0gloIztnls%2FcN15kvQQfokfwYgeJAiemPI0ydTtnJIyWcg7RTmzCtN%2BYuJfHFJa3qz%2F0tsguiEzJh7PcOrtSaYaJqXeqZRjzKMKeowTrnhDSHvbs%2FdQlNfyOuJiZ6YKlPJDsrtj3m0qBr1fs7spWY6n%2B5x6CqsI37QkR1ZPnxFHfFFwuOabq9B6cpWiRg%2FxYf5q6Qh6Y9GpIfUYSmf%2Fl4l7o74IE%2BEF0QgjEKQtevjroQNEq%2F2BHo3ZFqBlT%2BzCZtyrJsVslpLNolzN9VOkeZZErXZyUlO7U%2F4i54hX8n2p9YHN7jCfmquTWpDYV5rPTLlXsvjTRYAzpritdkY2Gg9zFIjjteNoMRFQIH1MlMYIH5CoEPUa4tNc9gdgecUPw6ngvnF7aPiv8IvOIQFB3%2BFhrn9tkDMN8JM%2B%2FhVj%2BF4zRibHHHWC7MkpvXPKURFeJBP41NqLueMNDimMQGOqUBB5Yev5G%2BMYgpCjf4ju3MmiCYWn8zzNBOKBIarHOqr9gwd8wb9jyMIp%2FTPAEO45arnm81X9UTBVtOyLdTwn4FyWOUGsd1QlaPbEIjuNldV49giZA7tp%2FKk44vQ02Xeq6dUEOv1wxMgJ%2FRmxm8tvNUAylpa6HuSD0oORJ%2F3fvGKojFHEBdkvr%2Fhn5qkYhJ334fVC9R1xKdp9wfixdurrpLNpBKTKhb&X-Amz-Signature=45fee74beca84ae42589572dd371a8558680c8243d34b83a9ee4e748516b29d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXROS4SP%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCn2h4CAkkWv9ZmuXa%2FESZQ4BJ0yyjjUnloOwyTyw447gIgOHBl55Sq%2BSnwbXQ6M5k%2FRyd%2BZh0fZeT15naJgK9Nf7Uq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIHY8zsVl4ohXnAlYircA%2Foxo0tnWe2ZHFlYSLnYMzkIJNIsWm7AN2q71PC4fhrY1ZuVKC%2BSNrqkWGPpw0Y3VkzoE1hFTQcuoBsv7MKpJRb8MAi64f5XkKzvkwZjtCJDbCLsillnQYbT%2BT1gYeFuajuM4Sx4cdaIvfXcV%2BFk9alFFFikYrY3lk1KwqD53IB328jn24C0gloIztnls%2FcN15kvQQfokfwYgeJAiemPI0ydTtnJIyWcg7RTmzCtN%2BYuJfHFJa3qz%2F0tsguiEzJh7PcOrtSaYaJqXeqZRjzKMKeowTrnhDSHvbs%2FdQlNfyOuJiZ6YKlPJDsrtj3m0qBr1fs7spWY6n%2B5x6CqsI37QkR1ZPnxFHfFFwuOabq9B6cpWiRg%2FxYf5q6Qh6Y9GpIfUYSmf%2Fl4l7o74IE%2BEF0QgjEKQtevjroQNEq%2F2BHo3ZFqBlT%2BzCZtyrJsVslpLNolzN9VOkeZZErXZyUlO7U%2F4i54hX8n2p9YHN7jCfmquTWpDYV5rPTLlXsvjTRYAzpritdkY2Gg9zFIjjteNoMRFQIH1MlMYIH5CoEPUa4tNc9gdgecUPw6ngvnF7aPiv8IvOIQFB3%2BFhrn9tkDMN8JM%2B%2FhVj%2BF4zRibHHHWC7MkpvXPKURFeJBP41NqLueMNDimMQGOqUBB5Yev5G%2BMYgpCjf4ju3MmiCYWn8zzNBOKBIarHOqr9gwd8wb9jyMIp%2FTPAEO45arnm81X9UTBVtOyLdTwn4FyWOUGsd1QlaPbEIjuNldV49giZA7tp%2FKk44vQ02Xeq6dUEOv1wxMgJ%2FRmxm8tvNUAylpa6HuSD0oORJ%2F3fvGKojFHEBdkvr%2Fhn5qkYhJ334fVC9R1xKdp9wfixdurrpLNpBKTKhb&X-Amz-Signature=28f8ea9db95af9f128ea5b60fd620f2ad47bd048709492d905ee098f3ecc7f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXROS4SP%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCn2h4CAkkWv9ZmuXa%2FESZQ4BJ0yyjjUnloOwyTyw447gIgOHBl55Sq%2BSnwbXQ6M5k%2FRyd%2BZh0fZeT15naJgK9Nf7Uq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIHY8zsVl4ohXnAlYircA%2Foxo0tnWe2ZHFlYSLnYMzkIJNIsWm7AN2q71PC4fhrY1ZuVKC%2BSNrqkWGPpw0Y3VkzoE1hFTQcuoBsv7MKpJRb8MAi64f5XkKzvkwZjtCJDbCLsillnQYbT%2BT1gYeFuajuM4Sx4cdaIvfXcV%2BFk9alFFFikYrY3lk1KwqD53IB328jn24C0gloIztnls%2FcN15kvQQfokfwYgeJAiemPI0ydTtnJIyWcg7RTmzCtN%2BYuJfHFJa3qz%2F0tsguiEzJh7PcOrtSaYaJqXeqZRjzKMKeowTrnhDSHvbs%2FdQlNfyOuJiZ6YKlPJDsrtj3m0qBr1fs7spWY6n%2B5x6CqsI37QkR1ZPnxFHfFFwuOabq9B6cpWiRg%2FxYf5q6Qh6Y9GpIfUYSmf%2Fl4l7o74IE%2BEF0QgjEKQtevjroQNEq%2F2BHo3ZFqBlT%2BzCZtyrJsVslpLNolzN9VOkeZZErXZyUlO7U%2F4i54hX8n2p9YHN7jCfmquTWpDYV5rPTLlXsvjTRYAzpritdkY2Gg9zFIjjteNoMRFQIH1MlMYIH5CoEPUa4tNc9gdgecUPw6ngvnF7aPiv8IvOIQFB3%2BFhrn9tkDMN8JM%2B%2FhVj%2BF4zRibHHHWC7MkpvXPKURFeJBP41NqLueMNDimMQGOqUBB5Yev5G%2BMYgpCjf4ju3MmiCYWn8zzNBOKBIarHOqr9gwd8wb9jyMIp%2FTPAEO45arnm81X9UTBVtOyLdTwn4FyWOUGsd1QlaPbEIjuNldV49giZA7tp%2FKk44vQ02Xeq6dUEOv1wxMgJ%2FRmxm8tvNUAylpa6HuSD0oORJ%2F3fvGKojFHEBdkvr%2Fhn5qkYhJ334fVC9R1xKdp9wfixdurrpLNpBKTKhb&X-Amz-Signature=ce1ef99aedde949929746e4a2878700a99ec6d945a8fdeb6d52ef9a9a13e5d77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXROS4SP%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCn2h4CAkkWv9ZmuXa%2FESZQ4BJ0yyjjUnloOwyTyw447gIgOHBl55Sq%2BSnwbXQ6M5k%2FRyd%2BZh0fZeT15naJgK9Nf7Uq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIHY8zsVl4ohXnAlYircA%2Foxo0tnWe2ZHFlYSLnYMzkIJNIsWm7AN2q71PC4fhrY1ZuVKC%2BSNrqkWGPpw0Y3VkzoE1hFTQcuoBsv7MKpJRb8MAi64f5XkKzvkwZjtCJDbCLsillnQYbT%2BT1gYeFuajuM4Sx4cdaIvfXcV%2BFk9alFFFikYrY3lk1KwqD53IB328jn24C0gloIztnls%2FcN15kvQQfokfwYgeJAiemPI0ydTtnJIyWcg7RTmzCtN%2BYuJfHFJa3qz%2F0tsguiEzJh7PcOrtSaYaJqXeqZRjzKMKeowTrnhDSHvbs%2FdQlNfyOuJiZ6YKlPJDsrtj3m0qBr1fs7spWY6n%2B5x6CqsI37QkR1ZPnxFHfFFwuOabq9B6cpWiRg%2FxYf5q6Qh6Y9GpIfUYSmf%2Fl4l7o74IE%2BEF0QgjEKQtevjroQNEq%2F2BHo3ZFqBlT%2BzCZtyrJsVslpLNolzN9VOkeZZErXZyUlO7U%2F4i54hX8n2p9YHN7jCfmquTWpDYV5rPTLlXsvjTRYAzpritdkY2Gg9zFIjjteNoMRFQIH1MlMYIH5CoEPUa4tNc9gdgecUPw6ngvnF7aPiv8IvOIQFB3%2BFhrn9tkDMN8JM%2B%2FhVj%2BF4zRibHHHWC7MkpvXPKURFeJBP41NqLueMNDimMQGOqUBB5Yev5G%2BMYgpCjf4ju3MmiCYWn8zzNBOKBIarHOqr9gwd8wb9jyMIp%2FTPAEO45arnm81X9UTBVtOyLdTwn4FyWOUGsd1QlaPbEIjuNldV49giZA7tp%2FKk44vQ02Xeq6dUEOv1wxMgJ%2FRmxm8tvNUAylpa6HuSD0oORJ%2F3fvGKojFHEBdkvr%2Fhn5qkYhJ334fVC9R1xKdp9wfixdurrpLNpBKTKhb&X-Amz-Signature=abcffc82ed81953b02f4a5065603ea8345406bd05169726e050d9a3f89802bbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXROS4SP%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCn2h4CAkkWv9ZmuXa%2FESZQ4BJ0yyjjUnloOwyTyw447gIgOHBl55Sq%2BSnwbXQ6M5k%2FRyd%2BZh0fZeT15naJgK9Nf7Uq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIHY8zsVl4ohXnAlYircA%2Foxo0tnWe2ZHFlYSLnYMzkIJNIsWm7AN2q71PC4fhrY1ZuVKC%2BSNrqkWGPpw0Y3VkzoE1hFTQcuoBsv7MKpJRb8MAi64f5XkKzvkwZjtCJDbCLsillnQYbT%2BT1gYeFuajuM4Sx4cdaIvfXcV%2BFk9alFFFikYrY3lk1KwqD53IB328jn24C0gloIztnls%2FcN15kvQQfokfwYgeJAiemPI0ydTtnJIyWcg7RTmzCtN%2BYuJfHFJa3qz%2F0tsguiEzJh7PcOrtSaYaJqXeqZRjzKMKeowTrnhDSHvbs%2FdQlNfyOuJiZ6YKlPJDsrtj3m0qBr1fs7spWY6n%2B5x6CqsI37QkR1ZPnxFHfFFwuOabq9B6cpWiRg%2FxYf5q6Qh6Y9GpIfUYSmf%2Fl4l7o74IE%2BEF0QgjEKQtevjroQNEq%2F2BHo3ZFqBlT%2BzCZtyrJsVslpLNolzN9VOkeZZErXZyUlO7U%2F4i54hX8n2p9YHN7jCfmquTWpDYV5rPTLlXsvjTRYAzpritdkY2Gg9zFIjjteNoMRFQIH1MlMYIH5CoEPUa4tNc9gdgecUPw6ngvnF7aPiv8IvOIQFB3%2BFhrn9tkDMN8JM%2B%2FhVj%2BF4zRibHHHWC7MkpvXPKURFeJBP41NqLueMNDimMQGOqUBB5Yev5G%2BMYgpCjf4ju3MmiCYWn8zzNBOKBIarHOqr9gwd8wb9jyMIp%2FTPAEO45arnm81X9UTBVtOyLdTwn4FyWOUGsd1QlaPbEIjuNldV49giZA7tp%2FKk44vQ02Xeq6dUEOv1wxMgJ%2FRmxm8tvNUAylpa6HuSD0oORJ%2F3fvGKojFHEBdkvr%2Fhn5qkYhJ334fVC9R1xKdp9wfixdurrpLNpBKTKhb&X-Amz-Signature=0997ead5b86f41aa9b21eab2c73408843064f52456069ca1c1a9de15d85579b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXROS4SP%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCn2h4CAkkWv9ZmuXa%2FESZQ4BJ0yyjjUnloOwyTyw447gIgOHBl55Sq%2BSnwbXQ6M5k%2FRyd%2BZh0fZeT15naJgK9Nf7Uq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIHY8zsVl4ohXnAlYircA%2Foxo0tnWe2ZHFlYSLnYMzkIJNIsWm7AN2q71PC4fhrY1ZuVKC%2BSNrqkWGPpw0Y3VkzoE1hFTQcuoBsv7MKpJRb8MAi64f5XkKzvkwZjtCJDbCLsillnQYbT%2BT1gYeFuajuM4Sx4cdaIvfXcV%2BFk9alFFFikYrY3lk1KwqD53IB328jn24C0gloIztnls%2FcN15kvQQfokfwYgeJAiemPI0ydTtnJIyWcg7RTmzCtN%2BYuJfHFJa3qz%2F0tsguiEzJh7PcOrtSaYaJqXeqZRjzKMKeowTrnhDSHvbs%2FdQlNfyOuJiZ6YKlPJDsrtj3m0qBr1fs7spWY6n%2B5x6CqsI37QkR1ZPnxFHfFFwuOabq9B6cpWiRg%2FxYf5q6Qh6Y9GpIfUYSmf%2Fl4l7o74IE%2BEF0QgjEKQtevjroQNEq%2F2BHo3ZFqBlT%2BzCZtyrJsVslpLNolzN9VOkeZZErXZyUlO7U%2F4i54hX8n2p9YHN7jCfmquTWpDYV5rPTLlXsvjTRYAzpritdkY2Gg9zFIjjteNoMRFQIH1MlMYIH5CoEPUa4tNc9gdgecUPw6ngvnF7aPiv8IvOIQFB3%2BFhrn9tkDMN8JM%2B%2FhVj%2BF4zRibHHHWC7MkpvXPKURFeJBP41NqLueMNDimMQGOqUBB5Yev5G%2BMYgpCjf4ju3MmiCYWn8zzNBOKBIarHOqr9gwd8wb9jyMIp%2FTPAEO45arnm81X9UTBVtOyLdTwn4FyWOUGsd1QlaPbEIjuNldV49giZA7tp%2FKk44vQ02Xeq6dUEOv1wxMgJ%2FRmxm8tvNUAylpa6HuSD0oORJ%2F3fvGKojFHEBdkvr%2Fhn5qkYhJ334fVC9R1xKdp9wfixdurrpLNpBKTKhb&X-Amz-Signature=551622f77e602381766dfde00e25babab06fa6c85f79a3eb4138421e69f9a48f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
