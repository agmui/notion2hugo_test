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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NOJC7DF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCtLGiG90uIXWiMsiVdQGdqRcGYqzc0aXqEROp697O7AIhAIEsxJte5G%2BDd%2BAZb3c96F6nNlT1MXkzIM5BFxyX5E78KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwodRUP56ZcwSbtftAq3AP17aYrMTwdQK3lbbI34ivWTw2cq50bHyE2jJXFDE82K1dBHrazpDoTeHtcRbFnQFTIlSvhA7Jwgoe0%2BU9T8eUoElpf%2BadvVkjiQhE6TZ%2FVjw4H4G9NRhXC3bACrRz3XAHn1pK5WQl2upFq79zve9LK4Pd5aBC8XbG3n8%2BxcaUA5D8iZyHdrMQM79lEm%2B%2BIFeclZbSLeGi3Rth7tnt6ZtDryA2mPNRfTBTB0b%2FUiECp2iRugJOokd4PBib5sHWAHNgwrBFU8hGLJyZHV4boRx4WhqDixpz1bd6g%2BVbM4miBr9q8gRi%2FGRItiU0NwaGmWbb%2BoULFXR2A8FMMp1evwy9F2KEWo4LjokNg1UtKQAV%2FEHj5WWTh4%2BWnKshH5%2B03PPy1lDWAg308bV3OBdUP6ELiZ9ULQEbcK0uRstgENkDu4wzG66IQTx9lZZLvt9R0lM%2FjGLUBvY1Scycisi0n%2BZZYEGzpfvQBirF63Dz167rMIxnvjm40GzB4oI%2BEUshMZY4ol7wndvatK%2BpntnbMf3nxtTMFE9j90%2BAC0YOBiYoA0bIdiKstz6ruk8LnmshlH9Cdq92FcBtfh%2BosVGStQZzKoJvStlIiLpds2u1%2BgLDmTZyeK%2B0CvvpvKWrIeTDdy%2BjBBjqkAS%2BXu8yq7dF7ZkpowSlxzq8t3N2fcdfzBCszbFvilpm7tRA%2Fsl7WJlzz7mXrijYCl8LvQwR6OFL6pA1Djco1%2BgAtD41Z%2BcBrK5N3TgpWJzy2azJfUEPxYiINAd4nvmXy2sA8B8%2F%2B246iOqh8AsCz8tDJZ1Lg6cOYb%2BcI9OzHg%2BjbAUary5fBWlxyFNvk%2B0do3w8dqWS%2FKs2nwsM2Mf%2Bm25RYSW4f&X-Amz-Signature=a20bb92cf2390e680551f7c0b43bd26d5c8e1143e7568476d291191c542277e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NOJC7DF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCtLGiG90uIXWiMsiVdQGdqRcGYqzc0aXqEROp697O7AIhAIEsxJte5G%2BDd%2BAZb3c96F6nNlT1MXkzIM5BFxyX5E78KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwodRUP56ZcwSbtftAq3AP17aYrMTwdQK3lbbI34ivWTw2cq50bHyE2jJXFDE82K1dBHrazpDoTeHtcRbFnQFTIlSvhA7Jwgoe0%2BU9T8eUoElpf%2BadvVkjiQhE6TZ%2FVjw4H4G9NRhXC3bACrRz3XAHn1pK5WQl2upFq79zve9LK4Pd5aBC8XbG3n8%2BxcaUA5D8iZyHdrMQM79lEm%2B%2BIFeclZbSLeGi3Rth7tnt6ZtDryA2mPNRfTBTB0b%2FUiECp2iRugJOokd4PBib5sHWAHNgwrBFU8hGLJyZHV4boRx4WhqDixpz1bd6g%2BVbM4miBr9q8gRi%2FGRItiU0NwaGmWbb%2BoULFXR2A8FMMp1evwy9F2KEWo4LjokNg1UtKQAV%2FEHj5WWTh4%2BWnKshH5%2B03PPy1lDWAg308bV3OBdUP6ELiZ9ULQEbcK0uRstgENkDu4wzG66IQTx9lZZLvt9R0lM%2FjGLUBvY1Scycisi0n%2BZZYEGzpfvQBirF63Dz167rMIxnvjm40GzB4oI%2BEUshMZY4ol7wndvatK%2BpntnbMf3nxtTMFE9j90%2BAC0YOBiYoA0bIdiKstz6ruk8LnmshlH9Cdq92FcBtfh%2BosVGStQZzKoJvStlIiLpds2u1%2BgLDmTZyeK%2B0CvvpvKWrIeTDdy%2BjBBjqkAS%2BXu8yq7dF7ZkpowSlxzq8t3N2fcdfzBCszbFvilpm7tRA%2Fsl7WJlzz7mXrijYCl8LvQwR6OFL6pA1Djco1%2BgAtD41Z%2BcBrK5N3TgpWJzy2azJfUEPxYiINAd4nvmXy2sA8B8%2F%2B246iOqh8AsCz8tDJZ1Lg6cOYb%2BcI9OzHg%2BjbAUary5fBWlxyFNvk%2B0do3w8dqWS%2FKs2nwsM2Mf%2Bm25RYSW4f&X-Amz-Signature=e75f5232528199433b275fac696cce099c6654212b3f99321afa0b8820455b99&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NOJC7DF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCtLGiG90uIXWiMsiVdQGdqRcGYqzc0aXqEROp697O7AIhAIEsxJte5G%2BDd%2BAZb3c96F6nNlT1MXkzIM5BFxyX5E78KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwodRUP56ZcwSbtftAq3AP17aYrMTwdQK3lbbI34ivWTw2cq50bHyE2jJXFDE82K1dBHrazpDoTeHtcRbFnQFTIlSvhA7Jwgoe0%2BU9T8eUoElpf%2BadvVkjiQhE6TZ%2FVjw4H4G9NRhXC3bACrRz3XAHn1pK5WQl2upFq79zve9LK4Pd5aBC8XbG3n8%2BxcaUA5D8iZyHdrMQM79lEm%2B%2BIFeclZbSLeGi3Rth7tnt6ZtDryA2mPNRfTBTB0b%2FUiECp2iRugJOokd4PBib5sHWAHNgwrBFU8hGLJyZHV4boRx4WhqDixpz1bd6g%2BVbM4miBr9q8gRi%2FGRItiU0NwaGmWbb%2BoULFXR2A8FMMp1evwy9F2KEWo4LjokNg1UtKQAV%2FEHj5WWTh4%2BWnKshH5%2B03PPy1lDWAg308bV3OBdUP6ELiZ9ULQEbcK0uRstgENkDu4wzG66IQTx9lZZLvt9R0lM%2FjGLUBvY1Scycisi0n%2BZZYEGzpfvQBirF63Dz167rMIxnvjm40GzB4oI%2BEUshMZY4ol7wndvatK%2BpntnbMf3nxtTMFE9j90%2BAC0YOBiYoA0bIdiKstz6ruk8LnmshlH9Cdq92FcBtfh%2BosVGStQZzKoJvStlIiLpds2u1%2BgLDmTZyeK%2B0CvvpvKWrIeTDdy%2BjBBjqkAS%2BXu8yq7dF7ZkpowSlxzq8t3N2fcdfzBCszbFvilpm7tRA%2Fsl7WJlzz7mXrijYCl8LvQwR6OFL6pA1Djco1%2BgAtD41Z%2BcBrK5N3TgpWJzy2azJfUEPxYiINAd4nvmXy2sA8B8%2F%2B246iOqh8AsCz8tDJZ1Lg6cOYb%2BcI9OzHg%2BjbAUary5fBWlxyFNvk%2B0do3w8dqWS%2FKs2nwsM2Mf%2Bm25RYSW4f&X-Amz-Signature=72b639327a33ce5786641315a61d14e509e75fc6267323d352ebb7670aeea15e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NOJC7DF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCtLGiG90uIXWiMsiVdQGdqRcGYqzc0aXqEROp697O7AIhAIEsxJte5G%2BDd%2BAZb3c96F6nNlT1MXkzIM5BFxyX5E78KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwodRUP56ZcwSbtftAq3AP17aYrMTwdQK3lbbI34ivWTw2cq50bHyE2jJXFDE82K1dBHrazpDoTeHtcRbFnQFTIlSvhA7Jwgoe0%2BU9T8eUoElpf%2BadvVkjiQhE6TZ%2FVjw4H4G9NRhXC3bACrRz3XAHn1pK5WQl2upFq79zve9LK4Pd5aBC8XbG3n8%2BxcaUA5D8iZyHdrMQM79lEm%2B%2BIFeclZbSLeGi3Rth7tnt6ZtDryA2mPNRfTBTB0b%2FUiECp2iRugJOokd4PBib5sHWAHNgwrBFU8hGLJyZHV4boRx4WhqDixpz1bd6g%2BVbM4miBr9q8gRi%2FGRItiU0NwaGmWbb%2BoULFXR2A8FMMp1evwy9F2KEWo4LjokNg1UtKQAV%2FEHj5WWTh4%2BWnKshH5%2B03PPy1lDWAg308bV3OBdUP6ELiZ9ULQEbcK0uRstgENkDu4wzG66IQTx9lZZLvt9R0lM%2FjGLUBvY1Scycisi0n%2BZZYEGzpfvQBirF63Dz167rMIxnvjm40GzB4oI%2BEUshMZY4ol7wndvatK%2BpntnbMf3nxtTMFE9j90%2BAC0YOBiYoA0bIdiKstz6ruk8LnmshlH9Cdq92FcBtfh%2BosVGStQZzKoJvStlIiLpds2u1%2BgLDmTZyeK%2B0CvvpvKWrIeTDdy%2BjBBjqkAS%2BXu8yq7dF7ZkpowSlxzq8t3N2fcdfzBCszbFvilpm7tRA%2Fsl7WJlzz7mXrijYCl8LvQwR6OFL6pA1Djco1%2BgAtD41Z%2BcBrK5N3TgpWJzy2azJfUEPxYiINAd4nvmXy2sA8B8%2F%2B246iOqh8AsCz8tDJZ1Lg6cOYb%2BcI9OzHg%2BjbAUary5fBWlxyFNvk%2B0do3w8dqWS%2FKs2nwsM2Mf%2Bm25RYSW4f&X-Amz-Signature=b45e084e10b41595daaff5f501178993a97463d713bec4cc52299643459cb8f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NOJC7DF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCtLGiG90uIXWiMsiVdQGdqRcGYqzc0aXqEROp697O7AIhAIEsxJte5G%2BDd%2BAZb3c96F6nNlT1MXkzIM5BFxyX5E78KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwodRUP56ZcwSbtftAq3AP17aYrMTwdQK3lbbI34ivWTw2cq50bHyE2jJXFDE82K1dBHrazpDoTeHtcRbFnQFTIlSvhA7Jwgoe0%2BU9T8eUoElpf%2BadvVkjiQhE6TZ%2FVjw4H4G9NRhXC3bACrRz3XAHn1pK5WQl2upFq79zve9LK4Pd5aBC8XbG3n8%2BxcaUA5D8iZyHdrMQM79lEm%2B%2BIFeclZbSLeGi3Rth7tnt6ZtDryA2mPNRfTBTB0b%2FUiECp2iRugJOokd4PBib5sHWAHNgwrBFU8hGLJyZHV4boRx4WhqDixpz1bd6g%2BVbM4miBr9q8gRi%2FGRItiU0NwaGmWbb%2BoULFXR2A8FMMp1evwy9F2KEWo4LjokNg1UtKQAV%2FEHj5WWTh4%2BWnKshH5%2B03PPy1lDWAg308bV3OBdUP6ELiZ9ULQEbcK0uRstgENkDu4wzG66IQTx9lZZLvt9R0lM%2FjGLUBvY1Scycisi0n%2BZZYEGzpfvQBirF63Dz167rMIxnvjm40GzB4oI%2BEUshMZY4ol7wndvatK%2BpntnbMf3nxtTMFE9j90%2BAC0YOBiYoA0bIdiKstz6ruk8LnmshlH9Cdq92FcBtfh%2BosVGStQZzKoJvStlIiLpds2u1%2BgLDmTZyeK%2B0CvvpvKWrIeTDdy%2BjBBjqkAS%2BXu8yq7dF7ZkpowSlxzq8t3N2fcdfzBCszbFvilpm7tRA%2Fsl7WJlzz7mXrijYCl8LvQwR6OFL6pA1Djco1%2BgAtD41Z%2BcBrK5N3TgpWJzy2azJfUEPxYiINAd4nvmXy2sA8B8%2F%2B246iOqh8AsCz8tDJZ1Lg6cOYb%2BcI9OzHg%2BjbAUary5fBWlxyFNvk%2B0do3w8dqWS%2FKs2nwsM2Mf%2Bm25RYSW4f&X-Amz-Signature=32c42313ef8dbc6cd1c6399f3a8eddd731ab3041e3d0a53a6984fb421f3f4e5f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NOJC7DF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCtLGiG90uIXWiMsiVdQGdqRcGYqzc0aXqEROp697O7AIhAIEsxJte5G%2BDd%2BAZb3c96F6nNlT1MXkzIM5BFxyX5E78KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwodRUP56ZcwSbtftAq3AP17aYrMTwdQK3lbbI34ivWTw2cq50bHyE2jJXFDE82K1dBHrazpDoTeHtcRbFnQFTIlSvhA7Jwgoe0%2BU9T8eUoElpf%2BadvVkjiQhE6TZ%2FVjw4H4G9NRhXC3bACrRz3XAHn1pK5WQl2upFq79zve9LK4Pd5aBC8XbG3n8%2BxcaUA5D8iZyHdrMQM79lEm%2B%2BIFeclZbSLeGi3Rth7tnt6ZtDryA2mPNRfTBTB0b%2FUiECp2iRugJOokd4PBib5sHWAHNgwrBFU8hGLJyZHV4boRx4WhqDixpz1bd6g%2BVbM4miBr9q8gRi%2FGRItiU0NwaGmWbb%2BoULFXR2A8FMMp1evwy9F2KEWo4LjokNg1UtKQAV%2FEHj5WWTh4%2BWnKshH5%2B03PPy1lDWAg308bV3OBdUP6ELiZ9ULQEbcK0uRstgENkDu4wzG66IQTx9lZZLvt9R0lM%2FjGLUBvY1Scycisi0n%2BZZYEGzpfvQBirF63Dz167rMIxnvjm40GzB4oI%2BEUshMZY4ol7wndvatK%2BpntnbMf3nxtTMFE9j90%2BAC0YOBiYoA0bIdiKstz6ruk8LnmshlH9Cdq92FcBtfh%2BosVGStQZzKoJvStlIiLpds2u1%2BgLDmTZyeK%2B0CvvpvKWrIeTDdy%2BjBBjqkAS%2BXu8yq7dF7ZkpowSlxzq8t3N2fcdfzBCszbFvilpm7tRA%2Fsl7WJlzz7mXrijYCl8LvQwR6OFL6pA1Djco1%2BgAtD41Z%2BcBrK5N3TgpWJzy2azJfUEPxYiINAd4nvmXy2sA8B8%2F%2B246iOqh8AsCz8tDJZ1Lg6cOYb%2BcI9OzHg%2BjbAUary5fBWlxyFNvk%2B0do3w8dqWS%2FKs2nwsM2Mf%2Bm25RYSW4f&X-Amz-Signature=1597aed5f8add27e33bb2d77c7bb18d318c670a0733c6a47253b6cba6f7fba9a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NOJC7DF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCtLGiG90uIXWiMsiVdQGdqRcGYqzc0aXqEROp697O7AIhAIEsxJte5G%2BDd%2BAZb3c96F6nNlT1MXkzIM5BFxyX5E78KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwodRUP56ZcwSbtftAq3AP17aYrMTwdQK3lbbI34ivWTw2cq50bHyE2jJXFDE82K1dBHrazpDoTeHtcRbFnQFTIlSvhA7Jwgoe0%2BU9T8eUoElpf%2BadvVkjiQhE6TZ%2FVjw4H4G9NRhXC3bACrRz3XAHn1pK5WQl2upFq79zve9LK4Pd5aBC8XbG3n8%2BxcaUA5D8iZyHdrMQM79lEm%2B%2BIFeclZbSLeGi3Rth7tnt6ZtDryA2mPNRfTBTB0b%2FUiECp2iRugJOokd4PBib5sHWAHNgwrBFU8hGLJyZHV4boRx4WhqDixpz1bd6g%2BVbM4miBr9q8gRi%2FGRItiU0NwaGmWbb%2BoULFXR2A8FMMp1evwy9F2KEWo4LjokNg1UtKQAV%2FEHj5WWTh4%2BWnKshH5%2B03PPy1lDWAg308bV3OBdUP6ELiZ9ULQEbcK0uRstgENkDu4wzG66IQTx9lZZLvt9R0lM%2FjGLUBvY1Scycisi0n%2BZZYEGzpfvQBirF63Dz167rMIxnvjm40GzB4oI%2BEUshMZY4ol7wndvatK%2BpntnbMf3nxtTMFE9j90%2BAC0YOBiYoA0bIdiKstz6ruk8LnmshlH9Cdq92FcBtfh%2BosVGStQZzKoJvStlIiLpds2u1%2BgLDmTZyeK%2B0CvvpvKWrIeTDdy%2BjBBjqkAS%2BXu8yq7dF7ZkpowSlxzq8t3N2fcdfzBCszbFvilpm7tRA%2Fsl7WJlzz7mXrijYCl8LvQwR6OFL6pA1Djco1%2BgAtD41Z%2BcBrK5N3TgpWJzy2azJfUEPxYiINAd4nvmXy2sA8B8%2F%2B246iOqh8AsCz8tDJZ1Lg6cOYb%2BcI9OzHg%2BjbAUary5fBWlxyFNvk%2B0do3w8dqWS%2FKs2nwsM2Mf%2Bm25RYSW4f&X-Amz-Signature=3e14bc83fb8dd222363359e1c42af24a6dad32bbbdbb3ad5632085aaf7ff8452&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NOJC7DF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCtLGiG90uIXWiMsiVdQGdqRcGYqzc0aXqEROp697O7AIhAIEsxJte5G%2BDd%2BAZb3c96F6nNlT1MXkzIM5BFxyX5E78KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwodRUP56ZcwSbtftAq3AP17aYrMTwdQK3lbbI34ivWTw2cq50bHyE2jJXFDE82K1dBHrazpDoTeHtcRbFnQFTIlSvhA7Jwgoe0%2BU9T8eUoElpf%2BadvVkjiQhE6TZ%2FVjw4H4G9NRhXC3bACrRz3XAHn1pK5WQl2upFq79zve9LK4Pd5aBC8XbG3n8%2BxcaUA5D8iZyHdrMQM79lEm%2B%2BIFeclZbSLeGi3Rth7tnt6ZtDryA2mPNRfTBTB0b%2FUiECp2iRugJOokd4PBib5sHWAHNgwrBFU8hGLJyZHV4boRx4WhqDixpz1bd6g%2BVbM4miBr9q8gRi%2FGRItiU0NwaGmWbb%2BoULFXR2A8FMMp1evwy9F2KEWo4LjokNg1UtKQAV%2FEHj5WWTh4%2BWnKshH5%2B03PPy1lDWAg308bV3OBdUP6ELiZ9ULQEbcK0uRstgENkDu4wzG66IQTx9lZZLvt9R0lM%2FjGLUBvY1Scycisi0n%2BZZYEGzpfvQBirF63Dz167rMIxnvjm40GzB4oI%2BEUshMZY4ol7wndvatK%2BpntnbMf3nxtTMFE9j90%2BAC0YOBiYoA0bIdiKstz6ruk8LnmshlH9Cdq92FcBtfh%2BosVGStQZzKoJvStlIiLpds2u1%2BgLDmTZyeK%2B0CvvpvKWrIeTDdy%2BjBBjqkAS%2BXu8yq7dF7ZkpowSlxzq8t3N2fcdfzBCszbFvilpm7tRA%2Fsl7WJlzz7mXrijYCl8LvQwR6OFL6pA1Djco1%2BgAtD41Z%2BcBrK5N3TgpWJzy2azJfUEPxYiINAd4nvmXy2sA8B8%2F%2B246iOqh8AsCz8tDJZ1Lg6cOYb%2BcI9OzHg%2BjbAUary5fBWlxyFNvk%2B0do3w8dqWS%2FKs2nwsM2Mf%2Bm25RYSW4f&X-Amz-Signature=7f2432d784fe705f1b13b13338143d67a3e31969b3db61208e4778cf049ea72a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
