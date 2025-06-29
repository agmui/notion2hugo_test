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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO3CLQMX%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDtA%2BIUx%2FIZEWzvFjLIuj8AG%2BkPEsFwQ2HMnyDtppAPAiBt8MFeD2QO6o6X0GdFW%2B%2FO%2BGYdDWWg08idr95wmlqYGiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMGAjhjqa8CMzeBorKtwD2oTx7Ge0bUuXo5qIl6OAX8MQYINhdJtdcFrfuy%2FIQ6zW3pFDIh2Bmpw2a4Rxh9kEviq9k6cIXgk%2FctjO6tasAuEiDHAwvr%2FKpuBIp2XQ8Ngst5LkiVV1whkcX%2FE63uOcSqbWOF8GCPcE%2FaMjSk2kJSMAKvxl34qHekjc8GIxtPXFVXJWsWLeucN2HJ3pigKZUBfj10ECr0TItQBle3RNlJz43aMN2NzVnrEaScwFWROGCI%2FvnpLfN4bfKj4sQBwaxLH%2F8ZKSKOa1%2Ba5N7t%2BINU92pmFggcBKx%2FCV11spbYPlSAJSOQtDZaaIYMn7q2weKc1h5yN26k4rDxLoqqXLwNtZTNGvL0LvXdvKDpQbeDvKWaIARuZ6yWCmNFFPnN%2B1dJ7fSSsVbASU4fYzl%2FxAVP3xTSyX8ZiX%2BlxJLrz2na%2FyqFl9eSMVv6T4L8FgU%2BA7f%2FP0y0zplgZ90gIkEMteJC97CG8KBJxa35pRJBFrHXTDE9Q7Vw06nBLmJ4m9pQzXPucfPDKJ%2BdaWQXNvrh0ysO1%2BOzxlWgMuK%2B3514rzEA55neUfetpfxeLGKr6gCPll5LyZZFdpVzMxXGJGEmkGikwPHNqk716fN4LPE9CEQjWCN9H9325KzxDtl1Ywv9WEwwY6pgHbdf7FJn3r%2Bubz3aboqmhcw0J57QPkPPfavyfrgPEpPXkllliwRD%2BrrN3geNN6TXYzZRacCmvyfxy0c9KzWEcvIqJ0PZqihworENDBu7AMQoWrCId2nk6Xcwlr5LPbHpPDadi4A1dO9490Q5vekY2dzN4t2s0AzCPkxA%2B90ipK3dUKyrIr%2FGZdBvHg%2FgZElI1ACwqdBU4YoMvzCSQ%2F4ijzPoob73Rs&X-Amz-Signature=d92c2c29f84a4c0ef20ac29aee565af2c28787afe9249eaa49b92aed845af6ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO3CLQMX%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDtA%2BIUx%2FIZEWzvFjLIuj8AG%2BkPEsFwQ2HMnyDtppAPAiBt8MFeD2QO6o6X0GdFW%2B%2FO%2BGYdDWWg08idr95wmlqYGiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMGAjhjqa8CMzeBorKtwD2oTx7Ge0bUuXo5qIl6OAX8MQYINhdJtdcFrfuy%2FIQ6zW3pFDIh2Bmpw2a4Rxh9kEviq9k6cIXgk%2FctjO6tasAuEiDHAwvr%2FKpuBIp2XQ8Ngst5LkiVV1whkcX%2FE63uOcSqbWOF8GCPcE%2FaMjSk2kJSMAKvxl34qHekjc8GIxtPXFVXJWsWLeucN2HJ3pigKZUBfj10ECr0TItQBle3RNlJz43aMN2NzVnrEaScwFWROGCI%2FvnpLfN4bfKj4sQBwaxLH%2F8ZKSKOa1%2Ba5N7t%2BINU92pmFggcBKx%2FCV11spbYPlSAJSOQtDZaaIYMn7q2weKc1h5yN26k4rDxLoqqXLwNtZTNGvL0LvXdvKDpQbeDvKWaIARuZ6yWCmNFFPnN%2B1dJ7fSSsVbASU4fYzl%2FxAVP3xTSyX8ZiX%2BlxJLrz2na%2FyqFl9eSMVv6T4L8FgU%2BA7f%2FP0y0zplgZ90gIkEMteJC97CG8KBJxa35pRJBFrHXTDE9Q7Vw06nBLmJ4m9pQzXPucfPDKJ%2BdaWQXNvrh0ysO1%2BOzxlWgMuK%2B3514rzEA55neUfetpfxeLGKr6gCPll5LyZZFdpVzMxXGJGEmkGikwPHNqk716fN4LPE9CEQjWCN9H9325KzxDtl1Ywv9WEwwY6pgHbdf7FJn3r%2Bubz3aboqmhcw0J57QPkPPfavyfrgPEpPXkllliwRD%2BrrN3geNN6TXYzZRacCmvyfxy0c9KzWEcvIqJ0PZqihworENDBu7AMQoWrCId2nk6Xcwlr5LPbHpPDadi4A1dO9490Q5vekY2dzN4t2s0AzCPkxA%2B90ipK3dUKyrIr%2FGZdBvHg%2FgZElI1ACwqdBU4YoMvzCSQ%2F4ijzPoob73Rs&X-Amz-Signature=d9e87337ca44c8ff7b5a0cb27c7477947673bd272761b79f31836edb35b753f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO3CLQMX%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDtA%2BIUx%2FIZEWzvFjLIuj8AG%2BkPEsFwQ2HMnyDtppAPAiBt8MFeD2QO6o6X0GdFW%2B%2FO%2BGYdDWWg08idr95wmlqYGiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMGAjhjqa8CMzeBorKtwD2oTx7Ge0bUuXo5qIl6OAX8MQYINhdJtdcFrfuy%2FIQ6zW3pFDIh2Bmpw2a4Rxh9kEviq9k6cIXgk%2FctjO6tasAuEiDHAwvr%2FKpuBIp2XQ8Ngst5LkiVV1whkcX%2FE63uOcSqbWOF8GCPcE%2FaMjSk2kJSMAKvxl34qHekjc8GIxtPXFVXJWsWLeucN2HJ3pigKZUBfj10ECr0TItQBle3RNlJz43aMN2NzVnrEaScwFWROGCI%2FvnpLfN4bfKj4sQBwaxLH%2F8ZKSKOa1%2Ba5N7t%2BINU92pmFggcBKx%2FCV11spbYPlSAJSOQtDZaaIYMn7q2weKc1h5yN26k4rDxLoqqXLwNtZTNGvL0LvXdvKDpQbeDvKWaIARuZ6yWCmNFFPnN%2B1dJ7fSSsVbASU4fYzl%2FxAVP3xTSyX8ZiX%2BlxJLrz2na%2FyqFl9eSMVv6T4L8FgU%2BA7f%2FP0y0zplgZ90gIkEMteJC97CG8KBJxa35pRJBFrHXTDE9Q7Vw06nBLmJ4m9pQzXPucfPDKJ%2BdaWQXNvrh0ysO1%2BOzxlWgMuK%2B3514rzEA55neUfetpfxeLGKr6gCPll5LyZZFdpVzMxXGJGEmkGikwPHNqk716fN4LPE9CEQjWCN9H9325KzxDtl1Ywv9WEwwY6pgHbdf7FJn3r%2Bubz3aboqmhcw0J57QPkPPfavyfrgPEpPXkllliwRD%2BrrN3geNN6TXYzZRacCmvyfxy0c9KzWEcvIqJ0PZqihworENDBu7AMQoWrCId2nk6Xcwlr5LPbHpPDadi4A1dO9490Q5vekY2dzN4t2s0AzCPkxA%2B90ipK3dUKyrIr%2FGZdBvHg%2FgZElI1ACwqdBU4YoMvzCSQ%2F4ijzPoob73Rs&X-Amz-Signature=4db758f748cf6fbd12cf894f4f973672e3eb14d1e760c1cfd112fe17c14e7728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO3CLQMX%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDtA%2BIUx%2FIZEWzvFjLIuj8AG%2BkPEsFwQ2HMnyDtppAPAiBt8MFeD2QO6o6X0GdFW%2B%2FO%2BGYdDWWg08idr95wmlqYGiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMGAjhjqa8CMzeBorKtwD2oTx7Ge0bUuXo5qIl6OAX8MQYINhdJtdcFrfuy%2FIQ6zW3pFDIh2Bmpw2a4Rxh9kEviq9k6cIXgk%2FctjO6tasAuEiDHAwvr%2FKpuBIp2XQ8Ngst5LkiVV1whkcX%2FE63uOcSqbWOF8GCPcE%2FaMjSk2kJSMAKvxl34qHekjc8GIxtPXFVXJWsWLeucN2HJ3pigKZUBfj10ECr0TItQBle3RNlJz43aMN2NzVnrEaScwFWROGCI%2FvnpLfN4bfKj4sQBwaxLH%2F8ZKSKOa1%2Ba5N7t%2BINU92pmFggcBKx%2FCV11spbYPlSAJSOQtDZaaIYMn7q2weKc1h5yN26k4rDxLoqqXLwNtZTNGvL0LvXdvKDpQbeDvKWaIARuZ6yWCmNFFPnN%2B1dJ7fSSsVbASU4fYzl%2FxAVP3xTSyX8ZiX%2BlxJLrz2na%2FyqFl9eSMVv6T4L8FgU%2BA7f%2FP0y0zplgZ90gIkEMteJC97CG8KBJxa35pRJBFrHXTDE9Q7Vw06nBLmJ4m9pQzXPucfPDKJ%2BdaWQXNvrh0ysO1%2BOzxlWgMuK%2B3514rzEA55neUfetpfxeLGKr6gCPll5LyZZFdpVzMxXGJGEmkGikwPHNqk716fN4LPE9CEQjWCN9H9325KzxDtl1Ywv9WEwwY6pgHbdf7FJn3r%2Bubz3aboqmhcw0J57QPkPPfavyfrgPEpPXkllliwRD%2BrrN3geNN6TXYzZRacCmvyfxy0c9KzWEcvIqJ0PZqihworENDBu7AMQoWrCId2nk6Xcwlr5LPbHpPDadi4A1dO9490Q5vekY2dzN4t2s0AzCPkxA%2B90ipK3dUKyrIr%2FGZdBvHg%2FgZElI1ACwqdBU4YoMvzCSQ%2F4ijzPoob73Rs&X-Amz-Signature=83074b1b2cfb681352f5aa0211e973357c78e5ef532d60bd800b8340b7eac484&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO3CLQMX%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDtA%2BIUx%2FIZEWzvFjLIuj8AG%2BkPEsFwQ2HMnyDtppAPAiBt8MFeD2QO6o6X0GdFW%2B%2FO%2BGYdDWWg08idr95wmlqYGiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMGAjhjqa8CMzeBorKtwD2oTx7Ge0bUuXo5qIl6OAX8MQYINhdJtdcFrfuy%2FIQ6zW3pFDIh2Bmpw2a4Rxh9kEviq9k6cIXgk%2FctjO6tasAuEiDHAwvr%2FKpuBIp2XQ8Ngst5LkiVV1whkcX%2FE63uOcSqbWOF8GCPcE%2FaMjSk2kJSMAKvxl34qHekjc8GIxtPXFVXJWsWLeucN2HJ3pigKZUBfj10ECr0TItQBle3RNlJz43aMN2NzVnrEaScwFWROGCI%2FvnpLfN4bfKj4sQBwaxLH%2F8ZKSKOa1%2Ba5N7t%2BINU92pmFggcBKx%2FCV11spbYPlSAJSOQtDZaaIYMn7q2weKc1h5yN26k4rDxLoqqXLwNtZTNGvL0LvXdvKDpQbeDvKWaIARuZ6yWCmNFFPnN%2B1dJ7fSSsVbASU4fYzl%2FxAVP3xTSyX8ZiX%2BlxJLrz2na%2FyqFl9eSMVv6T4L8FgU%2BA7f%2FP0y0zplgZ90gIkEMteJC97CG8KBJxa35pRJBFrHXTDE9Q7Vw06nBLmJ4m9pQzXPucfPDKJ%2BdaWQXNvrh0ysO1%2BOzxlWgMuK%2B3514rzEA55neUfetpfxeLGKr6gCPll5LyZZFdpVzMxXGJGEmkGikwPHNqk716fN4LPE9CEQjWCN9H9325KzxDtl1Ywv9WEwwY6pgHbdf7FJn3r%2Bubz3aboqmhcw0J57QPkPPfavyfrgPEpPXkllliwRD%2BrrN3geNN6TXYzZRacCmvyfxy0c9KzWEcvIqJ0PZqihworENDBu7AMQoWrCId2nk6Xcwlr5LPbHpPDadi4A1dO9490Q5vekY2dzN4t2s0AzCPkxA%2B90ipK3dUKyrIr%2FGZdBvHg%2FgZElI1ACwqdBU4YoMvzCSQ%2F4ijzPoob73Rs&X-Amz-Signature=2d4c8cd7f8f27c7eeec262a92958baad6f9f44e2410eaede3558b2e8f2505a3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO3CLQMX%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDtA%2BIUx%2FIZEWzvFjLIuj8AG%2BkPEsFwQ2HMnyDtppAPAiBt8MFeD2QO6o6X0GdFW%2B%2FO%2BGYdDWWg08idr95wmlqYGiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMGAjhjqa8CMzeBorKtwD2oTx7Ge0bUuXo5qIl6OAX8MQYINhdJtdcFrfuy%2FIQ6zW3pFDIh2Bmpw2a4Rxh9kEviq9k6cIXgk%2FctjO6tasAuEiDHAwvr%2FKpuBIp2XQ8Ngst5LkiVV1whkcX%2FE63uOcSqbWOF8GCPcE%2FaMjSk2kJSMAKvxl34qHekjc8GIxtPXFVXJWsWLeucN2HJ3pigKZUBfj10ECr0TItQBle3RNlJz43aMN2NzVnrEaScwFWROGCI%2FvnpLfN4bfKj4sQBwaxLH%2F8ZKSKOa1%2Ba5N7t%2BINU92pmFggcBKx%2FCV11spbYPlSAJSOQtDZaaIYMn7q2weKc1h5yN26k4rDxLoqqXLwNtZTNGvL0LvXdvKDpQbeDvKWaIARuZ6yWCmNFFPnN%2B1dJ7fSSsVbASU4fYzl%2FxAVP3xTSyX8ZiX%2BlxJLrz2na%2FyqFl9eSMVv6T4L8FgU%2BA7f%2FP0y0zplgZ90gIkEMteJC97CG8KBJxa35pRJBFrHXTDE9Q7Vw06nBLmJ4m9pQzXPucfPDKJ%2BdaWQXNvrh0ysO1%2BOzxlWgMuK%2B3514rzEA55neUfetpfxeLGKr6gCPll5LyZZFdpVzMxXGJGEmkGikwPHNqk716fN4LPE9CEQjWCN9H9325KzxDtl1Ywv9WEwwY6pgHbdf7FJn3r%2Bubz3aboqmhcw0J57QPkPPfavyfrgPEpPXkllliwRD%2BrrN3geNN6TXYzZRacCmvyfxy0c9KzWEcvIqJ0PZqihworENDBu7AMQoWrCId2nk6Xcwlr5LPbHpPDadi4A1dO9490Q5vekY2dzN4t2s0AzCPkxA%2B90ipK3dUKyrIr%2FGZdBvHg%2FgZElI1ACwqdBU4YoMvzCSQ%2F4ijzPoob73Rs&X-Amz-Signature=48ade28d773a309e8d3669d618cbdfdbb6b15ac9cf04b66cae2fa514ef62f7e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO3CLQMX%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDtA%2BIUx%2FIZEWzvFjLIuj8AG%2BkPEsFwQ2HMnyDtppAPAiBt8MFeD2QO6o6X0GdFW%2B%2FO%2BGYdDWWg08idr95wmlqYGiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMGAjhjqa8CMzeBorKtwD2oTx7Ge0bUuXo5qIl6OAX8MQYINhdJtdcFrfuy%2FIQ6zW3pFDIh2Bmpw2a4Rxh9kEviq9k6cIXgk%2FctjO6tasAuEiDHAwvr%2FKpuBIp2XQ8Ngst5LkiVV1whkcX%2FE63uOcSqbWOF8GCPcE%2FaMjSk2kJSMAKvxl34qHekjc8GIxtPXFVXJWsWLeucN2HJ3pigKZUBfj10ECr0TItQBle3RNlJz43aMN2NzVnrEaScwFWROGCI%2FvnpLfN4bfKj4sQBwaxLH%2F8ZKSKOa1%2Ba5N7t%2BINU92pmFggcBKx%2FCV11spbYPlSAJSOQtDZaaIYMn7q2weKc1h5yN26k4rDxLoqqXLwNtZTNGvL0LvXdvKDpQbeDvKWaIARuZ6yWCmNFFPnN%2B1dJ7fSSsVbASU4fYzl%2FxAVP3xTSyX8ZiX%2BlxJLrz2na%2FyqFl9eSMVv6T4L8FgU%2BA7f%2FP0y0zplgZ90gIkEMteJC97CG8KBJxa35pRJBFrHXTDE9Q7Vw06nBLmJ4m9pQzXPucfPDKJ%2BdaWQXNvrh0ysO1%2BOzxlWgMuK%2B3514rzEA55neUfetpfxeLGKr6gCPll5LyZZFdpVzMxXGJGEmkGikwPHNqk716fN4LPE9CEQjWCN9H9325KzxDtl1Ywv9WEwwY6pgHbdf7FJn3r%2Bubz3aboqmhcw0J57QPkPPfavyfrgPEpPXkllliwRD%2BrrN3geNN6TXYzZRacCmvyfxy0c9KzWEcvIqJ0PZqihworENDBu7AMQoWrCId2nk6Xcwlr5LPbHpPDadi4A1dO9490Q5vekY2dzN4t2s0AzCPkxA%2B90ipK3dUKyrIr%2FGZdBvHg%2FgZElI1ACwqdBU4YoMvzCSQ%2F4ijzPoob73Rs&X-Amz-Signature=1c99a1d714a19d34f741379b50600f82351f7f467193e26dd4b64041403c6f7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO3CLQMX%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDtA%2BIUx%2FIZEWzvFjLIuj8AG%2BkPEsFwQ2HMnyDtppAPAiBt8MFeD2QO6o6X0GdFW%2B%2FO%2BGYdDWWg08idr95wmlqYGiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMGAjhjqa8CMzeBorKtwD2oTx7Ge0bUuXo5qIl6OAX8MQYINhdJtdcFrfuy%2FIQ6zW3pFDIh2Bmpw2a4Rxh9kEviq9k6cIXgk%2FctjO6tasAuEiDHAwvr%2FKpuBIp2XQ8Ngst5LkiVV1whkcX%2FE63uOcSqbWOF8GCPcE%2FaMjSk2kJSMAKvxl34qHekjc8GIxtPXFVXJWsWLeucN2HJ3pigKZUBfj10ECr0TItQBle3RNlJz43aMN2NzVnrEaScwFWROGCI%2FvnpLfN4bfKj4sQBwaxLH%2F8ZKSKOa1%2Ba5N7t%2BINU92pmFggcBKx%2FCV11spbYPlSAJSOQtDZaaIYMn7q2weKc1h5yN26k4rDxLoqqXLwNtZTNGvL0LvXdvKDpQbeDvKWaIARuZ6yWCmNFFPnN%2B1dJ7fSSsVbASU4fYzl%2FxAVP3xTSyX8ZiX%2BlxJLrz2na%2FyqFl9eSMVv6T4L8FgU%2BA7f%2FP0y0zplgZ90gIkEMteJC97CG8KBJxa35pRJBFrHXTDE9Q7Vw06nBLmJ4m9pQzXPucfPDKJ%2BdaWQXNvrh0ysO1%2BOzxlWgMuK%2B3514rzEA55neUfetpfxeLGKr6gCPll5LyZZFdpVzMxXGJGEmkGikwPHNqk716fN4LPE9CEQjWCN9H9325KzxDtl1Ywv9WEwwY6pgHbdf7FJn3r%2Bubz3aboqmhcw0J57QPkPPfavyfrgPEpPXkllliwRD%2BrrN3geNN6TXYzZRacCmvyfxy0c9KzWEcvIqJ0PZqihworENDBu7AMQoWrCId2nk6Xcwlr5LPbHpPDadi4A1dO9490Q5vekY2dzN4t2s0AzCPkxA%2B90ipK3dUKyrIr%2FGZdBvHg%2FgZElI1ACwqdBU4YoMvzCSQ%2F4ijzPoob73Rs&X-Amz-Signature=8be430a690bc6d19116df4bd03d7b85ec6fde4409c4b09f7024e1182bf459d13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
