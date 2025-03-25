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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQHOSX3U%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqSaZ10j1tsIAQymrT1mZwuwKoVp8eXoPa9df5F2D9ugIhAMC1RmUEjOwAdw38d0qbD8uxahLx%2BX8%2BecDurMBRD5YIKv8DCBcQABoMNjM3NDIzMTgzODA1IgwErdizAZ86OBkDU%2Bwq3AOYA24ugSIsXWom1DJvY%2Fny2iBIrNcURpUtYiziRevzjaMfOJ5J22E8l9FGiwFGIsPg4EBSA9gvm3cnnn%2Bf0J18FwtoNKKubdkl2An4je5aWWBsjJ2aTZdZK%2F6qKFdBnpIF7XAosfX5lE5dXD1MQzcS7yQg5P2%2FUSgyJqH%2BtBn1jvVwoziQlfYPZFN9AbGnM3YPshSngqAaKwk97iOmY8XftpNXaXxFfS7kbg0X5ck7YZkNEvjZPR27W7D1qzNbx7Pfy0Ivd7l4dWYHv%2BtsLBXPorfIYAvPP0q3IVKE3qOYe5nyZ4QfEAfsUqQOjK82DWeEm2Q6Gh5PGWD6xr%2F90K8DM1DBBqIvpHo0v3SdsF8iCtMpjgnkj8XzRJ%2BEgaYUbT8pXH81q1csVQuch%2FJNaps2b%2FTOdYaneSrPrwC1nBsoKRTcZp9k9pKVganndAQ%2BKP0jHXoasqWIpKFkT%2FVFXOeZReP051Bi7uW7O0UkBdpvklpmtdT7lT14nR8pE2b2bmqqtfl%2FfJRBqJSJlVcbiQg1XlPW07vnuq9AiuDvYG7Le8MCWmSA9EVYATm3stFMkEITiWUY%2B26XCFEiCR4dUhqNjzcMJq12efkSRyyzVVASSEIE2d50HfYKyU29NTCr5Iq%2FBjqkAUYbhzREF%2BG1OeNMQizKpYp5nH8Y7pfSuQ1GMYcX8uq02pbCPtaLJxW4DXLWilj5Al%2FxDyXkdTcap%2FJR5SpMLk6Yrb335IWnXf%2F%2FYQaTgb4q6ZinW6gSrf%2Bg0I979vfVOcJ0BqeTh2SZRGXSaoYoCpls2w1xJH18nIrNT4Za5UEExwnp7816gBSymJ0HyVYdqilIrrHHPGW8dYkBWsXw9LZzpq8z&X-Amz-Signature=d9255d6dbf97617d96c0b03c14eb4ab79b0ad220e0abfa3fb1804350d123a84d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQHOSX3U%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqSaZ10j1tsIAQymrT1mZwuwKoVp8eXoPa9df5F2D9ugIhAMC1RmUEjOwAdw38d0qbD8uxahLx%2BX8%2BecDurMBRD5YIKv8DCBcQABoMNjM3NDIzMTgzODA1IgwErdizAZ86OBkDU%2Bwq3AOYA24ugSIsXWom1DJvY%2Fny2iBIrNcURpUtYiziRevzjaMfOJ5J22E8l9FGiwFGIsPg4EBSA9gvm3cnnn%2Bf0J18FwtoNKKubdkl2An4je5aWWBsjJ2aTZdZK%2F6qKFdBnpIF7XAosfX5lE5dXD1MQzcS7yQg5P2%2FUSgyJqH%2BtBn1jvVwoziQlfYPZFN9AbGnM3YPshSngqAaKwk97iOmY8XftpNXaXxFfS7kbg0X5ck7YZkNEvjZPR27W7D1qzNbx7Pfy0Ivd7l4dWYHv%2BtsLBXPorfIYAvPP0q3IVKE3qOYe5nyZ4QfEAfsUqQOjK82DWeEm2Q6Gh5PGWD6xr%2F90K8DM1DBBqIvpHo0v3SdsF8iCtMpjgnkj8XzRJ%2BEgaYUbT8pXH81q1csVQuch%2FJNaps2b%2FTOdYaneSrPrwC1nBsoKRTcZp9k9pKVganndAQ%2BKP0jHXoasqWIpKFkT%2FVFXOeZReP051Bi7uW7O0UkBdpvklpmtdT7lT14nR8pE2b2bmqqtfl%2FfJRBqJSJlVcbiQg1XlPW07vnuq9AiuDvYG7Le8MCWmSA9EVYATm3stFMkEITiWUY%2B26XCFEiCR4dUhqNjzcMJq12efkSRyyzVVASSEIE2d50HfYKyU29NTCr5Iq%2FBjqkAUYbhzREF%2BG1OeNMQizKpYp5nH8Y7pfSuQ1GMYcX8uq02pbCPtaLJxW4DXLWilj5Al%2FxDyXkdTcap%2FJR5SpMLk6Yrb335IWnXf%2F%2FYQaTgb4q6ZinW6gSrf%2Bg0I979vfVOcJ0BqeTh2SZRGXSaoYoCpls2w1xJH18nIrNT4Za5UEExwnp7816gBSymJ0HyVYdqilIrrHHPGW8dYkBWsXw9LZzpq8z&X-Amz-Signature=cb63202e3d71284107fd0d779c470520ebd97814d89064ef1a8f1b220c2b6647&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQHOSX3U%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqSaZ10j1tsIAQymrT1mZwuwKoVp8eXoPa9df5F2D9ugIhAMC1RmUEjOwAdw38d0qbD8uxahLx%2BX8%2BecDurMBRD5YIKv8DCBcQABoMNjM3NDIzMTgzODA1IgwErdizAZ86OBkDU%2Bwq3AOYA24ugSIsXWom1DJvY%2Fny2iBIrNcURpUtYiziRevzjaMfOJ5J22E8l9FGiwFGIsPg4EBSA9gvm3cnnn%2Bf0J18FwtoNKKubdkl2An4je5aWWBsjJ2aTZdZK%2F6qKFdBnpIF7XAosfX5lE5dXD1MQzcS7yQg5P2%2FUSgyJqH%2BtBn1jvVwoziQlfYPZFN9AbGnM3YPshSngqAaKwk97iOmY8XftpNXaXxFfS7kbg0X5ck7YZkNEvjZPR27W7D1qzNbx7Pfy0Ivd7l4dWYHv%2BtsLBXPorfIYAvPP0q3IVKE3qOYe5nyZ4QfEAfsUqQOjK82DWeEm2Q6Gh5PGWD6xr%2F90K8DM1DBBqIvpHo0v3SdsF8iCtMpjgnkj8XzRJ%2BEgaYUbT8pXH81q1csVQuch%2FJNaps2b%2FTOdYaneSrPrwC1nBsoKRTcZp9k9pKVganndAQ%2BKP0jHXoasqWIpKFkT%2FVFXOeZReP051Bi7uW7O0UkBdpvklpmtdT7lT14nR8pE2b2bmqqtfl%2FfJRBqJSJlVcbiQg1XlPW07vnuq9AiuDvYG7Le8MCWmSA9EVYATm3stFMkEITiWUY%2B26XCFEiCR4dUhqNjzcMJq12efkSRyyzVVASSEIE2d50HfYKyU29NTCr5Iq%2FBjqkAUYbhzREF%2BG1OeNMQizKpYp5nH8Y7pfSuQ1GMYcX8uq02pbCPtaLJxW4DXLWilj5Al%2FxDyXkdTcap%2FJR5SpMLk6Yrb335IWnXf%2F%2FYQaTgb4q6ZinW6gSrf%2Bg0I979vfVOcJ0BqeTh2SZRGXSaoYoCpls2w1xJH18nIrNT4Za5UEExwnp7816gBSymJ0HyVYdqilIrrHHPGW8dYkBWsXw9LZzpq8z&X-Amz-Signature=b97fac5a74e10527b2f0a933d27b2659e1d48a9de31617d365705ecf752b4b21&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQHOSX3U%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqSaZ10j1tsIAQymrT1mZwuwKoVp8eXoPa9df5F2D9ugIhAMC1RmUEjOwAdw38d0qbD8uxahLx%2BX8%2BecDurMBRD5YIKv8DCBcQABoMNjM3NDIzMTgzODA1IgwErdizAZ86OBkDU%2Bwq3AOYA24ugSIsXWom1DJvY%2Fny2iBIrNcURpUtYiziRevzjaMfOJ5J22E8l9FGiwFGIsPg4EBSA9gvm3cnnn%2Bf0J18FwtoNKKubdkl2An4je5aWWBsjJ2aTZdZK%2F6qKFdBnpIF7XAosfX5lE5dXD1MQzcS7yQg5P2%2FUSgyJqH%2BtBn1jvVwoziQlfYPZFN9AbGnM3YPshSngqAaKwk97iOmY8XftpNXaXxFfS7kbg0X5ck7YZkNEvjZPR27W7D1qzNbx7Pfy0Ivd7l4dWYHv%2BtsLBXPorfIYAvPP0q3IVKE3qOYe5nyZ4QfEAfsUqQOjK82DWeEm2Q6Gh5PGWD6xr%2F90K8DM1DBBqIvpHo0v3SdsF8iCtMpjgnkj8XzRJ%2BEgaYUbT8pXH81q1csVQuch%2FJNaps2b%2FTOdYaneSrPrwC1nBsoKRTcZp9k9pKVganndAQ%2BKP0jHXoasqWIpKFkT%2FVFXOeZReP051Bi7uW7O0UkBdpvklpmtdT7lT14nR8pE2b2bmqqtfl%2FfJRBqJSJlVcbiQg1XlPW07vnuq9AiuDvYG7Le8MCWmSA9EVYATm3stFMkEITiWUY%2B26XCFEiCR4dUhqNjzcMJq12efkSRyyzVVASSEIE2d50HfYKyU29NTCr5Iq%2FBjqkAUYbhzREF%2BG1OeNMQizKpYp5nH8Y7pfSuQ1GMYcX8uq02pbCPtaLJxW4DXLWilj5Al%2FxDyXkdTcap%2FJR5SpMLk6Yrb335IWnXf%2F%2FYQaTgb4q6ZinW6gSrf%2Bg0I979vfVOcJ0BqeTh2SZRGXSaoYoCpls2w1xJH18nIrNT4Za5UEExwnp7816gBSymJ0HyVYdqilIrrHHPGW8dYkBWsXw9LZzpq8z&X-Amz-Signature=16b4927888ad51cb0eabc77f7972ba0cb9b141bc0779b112b33c2152bfe5b350&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQHOSX3U%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqSaZ10j1tsIAQymrT1mZwuwKoVp8eXoPa9df5F2D9ugIhAMC1RmUEjOwAdw38d0qbD8uxahLx%2BX8%2BecDurMBRD5YIKv8DCBcQABoMNjM3NDIzMTgzODA1IgwErdizAZ86OBkDU%2Bwq3AOYA24ugSIsXWom1DJvY%2Fny2iBIrNcURpUtYiziRevzjaMfOJ5J22E8l9FGiwFGIsPg4EBSA9gvm3cnnn%2Bf0J18FwtoNKKubdkl2An4je5aWWBsjJ2aTZdZK%2F6qKFdBnpIF7XAosfX5lE5dXD1MQzcS7yQg5P2%2FUSgyJqH%2BtBn1jvVwoziQlfYPZFN9AbGnM3YPshSngqAaKwk97iOmY8XftpNXaXxFfS7kbg0X5ck7YZkNEvjZPR27W7D1qzNbx7Pfy0Ivd7l4dWYHv%2BtsLBXPorfIYAvPP0q3IVKE3qOYe5nyZ4QfEAfsUqQOjK82DWeEm2Q6Gh5PGWD6xr%2F90K8DM1DBBqIvpHo0v3SdsF8iCtMpjgnkj8XzRJ%2BEgaYUbT8pXH81q1csVQuch%2FJNaps2b%2FTOdYaneSrPrwC1nBsoKRTcZp9k9pKVganndAQ%2BKP0jHXoasqWIpKFkT%2FVFXOeZReP051Bi7uW7O0UkBdpvklpmtdT7lT14nR8pE2b2bmqqtfl%2FfJRBqJSJlVcbiQg1XlPW07vnuq9AiuDvYG7Le8MCWmSA9EVYATm3stFMkEITiWUY%2B26XCFEiCR4dUhqNjzcMJq12efkSRyyzVVASSEIE2d50HfYKyU29NTCr5Iq%2FBjqkAUYbhzREF%2BG1OeNMQizKpYp5nH8Y7pfSuQ1GMYcX8uq02pbCPtaLJxW4DXLWilj5Al%2FxDyXkdTcap%2FJR5SpMLk6Yrb335IWnXf%2F%2FYQaTgb4q6ZinW6gSrf%2Bg0I979vfVOcJ0BqeTh2SZRGXSaoYoCpls2w1xJH18nIrNT4Za5UEExwnp7816gBSymJ0HyVYdqilIrrHHPGW8dYkBWsXw9LZzpq8z&X-Amz-Signature=b5ae8558d03609ce0f6896ff20262456a87369361a4b6dd57bbb3e46bcd7236f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQHOSX3U%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqSaZ10j1tsIAQymrT1mZwuwKoVp8eXoPa9df5F2D9ugIhAMC1RmUEjOwAdw38d0qbD8uxahLx%2BX8%2BecDurMBRD5YIKv8DCBcQABoMNjM3NDIzMTgzODA1IgwErdizAZ86OBkDU%2Bwq3AOYA24ugSIsXWom1DJvY%2Fny2iBIrNcURpUtYiziRevzjaMfOJ5J22E8l9FGiwFGIsPg4EBSA9gvm3cnnn%2Bf0J18FwtoNKKubdkl2An4je5aWWBsjJ2aTZdZK%2F6qKFdBnpIF7XAosfX5lE5dXD1MQzcS7yQg5P2%2FUSgyJqH%2BtBn1jvVwoziQlfYPZFN9AbGnM3YPshSngqAaKwk97iOmY8XftpNXaXxFfS7kbg0X5ck7YZkNEvjZPR27W7D1qzNbx7Pfy0Ivd7l4dWYHv%2BtsLBXPorfIYAvPP0q3IVKE3qOYe5nyZ4QfEAfsUqQOjK82DWeEm2Q6Gh5PGWD6xr%2F90K8DM1DBBqIvpHo0v3SdsF8iCtMpjgnkj8XzRJ%2BEgaYUbT8pXH81q1csVQuch%2FJNaps2b%2FTOdYaneSrPrwC1nBsoKRTcZp9k9pKVganndAQ%2BKP0jHXoasqWIpKFkT%2FVFXOeZReP051Bi7uW7O0UkBdpvklpmtdT7lT14nR8pE2b2bmqqtfl%2FfJRBqJSJlVcbiQg1XlPW07vnuq9AiuDvYG7Le8MCWmSA9EVYATm3stFMkEITiWUY%2B26XCFEiCR4dUhqNjzcMJq12efkSRyyzVVASSEIE2d50HfYKyU29NTCr5Iq%2FBjqkAUYbhzREF%2BG1OeNMQizKpYp5nH8Y7pfSuQ1GMYcX8uq02pbCPtaLJxW4DXLWilj5Al%2FxDyXkdTcap%2FJR5SpMLk6Yrb335IWnXf%2F%2FYQaTgb4q6ZinW6gSrf%2Bg0I979vfVOcJ0BqeTh2SZRGXSaoYoCpls2w1xJH18nIrNT4Za5UEExwnp7816gBSymJ0HyVYdqilIrrHHPGW8dYkBWsXw9LZzpq8z&X-Amz-Signature=bc7f6ec52ed888eecf9794b14d07e294e87ae67268ecdbcffe34aa77a3084711&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQHOSX3U%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqSaZ10j1tsIAQymrT1mZwuwKoVp8eXoPa9df5F2D9ugIhAMC1RmUEjOwAdw38d0qbD8uxahLx%2BX8%2BecDurMBRD5YIKv8DCBcQABoMNjM3NDIzMTgzODA1IgwErdizAZ86OBkDU%2Bwq3AOYA24ugSIsXWom1DJvY%2Fny2iBIrNcURpUtYiziRevzjaMfOJ5J22E8l9FGiwFGIsPg4EBSA9gvm3cnnn%2Bf0J18FwtoNKKubdkl2An4je5aWWBsjJ2aTZdZK%2F6qKFdBnpIF7XAosfX5lE5dXD1MQzcS7yQg5P2%2FUSgyJqH%2BtBn1jvVwoziQlfYPZFN9AbGnM3YPshSngqAaKwk97iOmY8XftpNXaXxFfS7kbg0X5ck7YZkNEvjZPR27W7D1qzNbx7Pfy0Ivd7l4dWYHv%2BtsLBXPorfIYAvPP0q3IVKE3qOYe5nyZ4QfEAfsUqQOjK82DWeEm2Q6Gh5PGWD6xr%2F90K8DM1DBBqIvpHo0v3SdsF8iCtMpjgnkj8XzRJ%2BEgaYUbT8pXH81q1csVQuch%2FJNaps2b%2FTOdYaneSrPrwC1nBsoKRTcZp9k9pKVganndAQ%2BKP0jHXoasqWIpKFkT%2FVFXOeZReP051Bi7uW7O0UkBdpvklpmtdT7lT14nR8pE2b2bmqqtfl%2FfJRBqJSJlVcbiQg1XlPW07vnuq9AiuDvYG7Le8MCWmSA9EVYATm3stFMkEITiWUY%2B26XCFEiCR4dUhqNjzcMJq12efkSRyyzVVASSEIE2d50HfYKyU29NTCr5Iq%2FBjqkAUYbhzREF%2BG1OeNMQizKpYp5nH8Y7pfSuQ1GMYcX8uq02pbCPtaLJxW4DXLWilj5Al%2FxDyXkdTcap%2FJR5SpMLk6Yrb335IWnXf%2F%2FYQaTgb4q6ZinW6gSrf%2Bg0I979vfVOcJ0BqeTh2SZRGXSaoYoCpls2w1xJH18nIrNT4Za5UEExwnp7816gBSymJ0HyVYdqilIrrHHPGW8dYkBWsXw9LZzpq8z&X-Amz-Signature=998ed0098ba147323be08bbdaa7f7c98621a272e6120aff6f0cc9f45f6b57fd7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQHOSX3U%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqSaZ10j1tsIAQymrT1mZwuwKoVp8eXoPa9df5F2D9ugIhAMC1RmUEjOwAdw38d0qbD8uxahLx%2BX8%2BecDurMBRD5YIKv8DCBcQABoMNjM3NDIzMTgzODA1IgwErdizAZ86OBkDU%2Bwq3AOYA24ugSIsXWom1DJvY%2Fny2iBIrNcURpUtYiziRevzjaMfOJ5J22E8l9FGiwFGIsPg4EBSA9gvm3cnnn%2Bf0J18FwtoNKKubdkl2An4je5aWWBsjJ2aTZdZK%2F6qKFdBnpIF7XAosfX5lE5dXD1MQzcS7yQg5P2%2FUSgyJqH%2BtBn1jvVwoziQlfYPZFN9AbGnM3YPshSngqAaKwk97iOmY8XftpNXaXxFfS7kbg0X5ck7YZkNEvjZPR27W7D1qzNbx7Pfy0Ivd7l4dWYHv%2BtsLBXPorfIYAvPP0q3IVKE3qOYe5nyZ4QfEAfsUqQOjK82DWeEm2Q6Gh5PGWD6xr%2F90K8DM1DBBqIvpHo0v3SdsF8iCtMpjgnkj8XzRJ%2BEgaYUbT8pXH81q1csVQuch%2FJNaps2b%2FTOdYaneSrPrwC1nBsoKRTcZp9k9pKVganndAQ%2BKP0jHXoasqWIpKFkT%2FVFXOeZReP051Bi7uW7O0UkBdpvklpmtdT7lT14nR8pE2b2bmqqtfl%2FfJRBqJSJlVcbiQg1XlPW07vnuq9AiuDvYG7Le8MCWmSA9EVYATm3stFMkEITiWUY%2B26XCFEiCR4dUhqNjzcMJq12efkSRyyzVVASSEIE2d50HfYKyU29NTCr5Iq%2FBjqkAUYbhzREF%2BG1OeNMQizKpYp5nH8Y7pfSuQ1GMYcX8uq02pbCPtaLJxW4DXLWilj5Al%2FxDyXkdTcap%2FJR5SpMLk6Yrb335IWnXf%2F%2FYQaTgb4q6ZinW6gSrf%2Bg0I979vfVOcJ0BqeTh2SZRGXSaoYoCpls2w1xJH18nIrNT4Za5UEExwnp7816gBSymJ0HyVYdqilIrrHHPGW8dYkBWsXw9LZzpq8z&X-Amz-Signature=16671d963dc710e3df2e74871b778cab5e1333d5865bd43e81fba5b5f25a8b7b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
