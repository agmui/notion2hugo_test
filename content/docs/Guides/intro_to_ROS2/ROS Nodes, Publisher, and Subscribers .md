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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD523VXK%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCZevM3H8Hl2o0nBqIkAC3Y6Z65ptVi3j05SXwqXCsm6wIhAI8n3UrXhOZRH%2FWs4Q3jRz0YQLlthR2QY0A5jFiHZ0E3KogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIgbTnsjOtad%2BsL0Iq3AOUjWGmoIX%2BwQXBil%2FJekDnKzSWu7SmBz9oC2DnH1Xe%2BqHDSUwuCdStjeSnRp%2FTEP4DgFv371xtFyIJKuWnP8LxeHkxtFh%2BjuSVz669WFr67mY4BxtzC8MayaH2GqUfMNPezN1D6%2Fi82mLaR15tNLGOAomuOajdWQAEOoIuwoPY2eBcd%2Bc71eo%2BGgGTW9OsTwi0HvV7hszcFK4XoU3IKrJ%2B3iA3o%2FxSw0hDJQP9xtfgHwcz%2F7dlaPdBe%2BoelAywVkwv6mKYLs3mI8u4gqD4N%2F9JrYW3VZF78eH5PdqoVnMRlMjGM5ppTZSdAgbIDOQ8kmAam0EVnf1RXB5yLuGaLtA7nL7iXBkGlnqOhG6OGLDwWSxuXW%2Fbmxon%2B0y%2BACDN3MIBuLk8lABs6Zx1jRMyHvlA4M3l6D9pjk4dXDsEnieclW4p9pxw07oGiV8%2BXzc8EJJU5fpVenT6cy%2FUeMK5HyuoXiV5tXFXbj4LJjtwy%2F4Rfb%2Bmonfr902C8Wzc4cL1ham28RrntSuyX6RpudIHAoXW2DH5Y32PZuxulJO7ZzDGLvtuy0Bm58%2BheLYFYkjlrJTD1FoXlZvRVZbh8tpVHZKxbnvCmEonjaiWI2HE3xWrdBsZPzG1k5Qkg1qSDjCU16TABjqkAUz6lXZCI%2FMMAFulCblvhcRUUAQb8VPvo13ZWC7wC%2B42WVQ1BRP3NVaBW4AzH%2BvNEE1ptzAgRtRU3NH10mBntOgrq6DfUj%2FrUlTNSab3m94sPYqH0wlBbCmRTdT2eopmCN62N%2FZQqhI5OyNrLRHKNq%2FzBSfuIq81WTuHFvEe19dUtjDgeWsxwKxyN3CceoBNiZanX8sAqrcgAiFhWIt7Cc3yWmz3&X-Amz-Signature=2d98e3b209a308118a5f3fc66836f70902d4a0519b82ae93fe0a023368979325&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD523VXK%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCZevM3H8Hl2o0nBqIkAC3Y6Z65ptVi3j05SXwqXCsm6wIhAI8n3UrXhOZRH%2FWs4Q3jRz0YQLlthR2QY0A5jFiHZ0E3KogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIgbTnsjOtad%2BsL0Iq3AOUjWGmoIX%2BwQXBil%2FJekDnKzSWu7SmBz9oC2DnH1Xe%2BqHDSUwuCdStjeSnRp%2FTEP4DgFv371xtFyIJKuWnP8LxeHkxtFh%2BjuSVz669WFr67mY4BxtzC8MayaH2GqUfMNPezN1D6%2Fi82mLaR15tNLGOAomuOajdWQAEOoIuwoPY2eBcd%2Bc71eo%2BGgGTW9OsTwi0HvV7hszcFK4XoU3IKrJ%2B3iA3o%2FxSw0hDJQP9xtfgHwcz%2F7dlaPdBe%2BoelAywVkwv6mKYLs3mI8u4gqD4N%2F9JrYW3VZF78eH5PdqoVnMRlMjGM5ppTZSdAgbIDOQ8kmAam0EVnf1RXB5yLuGaLtA7nL7iXBkGlnqOhG6OGLDwWSxuXW%2Fbmxon%2B0y%2BACDN3MIBuLk8lABs6Zx1jRMyHvlA4M3l6D9pjk4dXDsEnieclW4p9pxw07oGiV8%2BXzc8EJJU5fpVenT6cy%2FUeMK5HyuoXiV5tXFXbj4LJjtwy%2F4Rfb%2Bmonfr902C8Wzc4cL1ham28RrntSuyX6RpudIHAoXW2DH5Y32PZuxulJO7ZzDGLvtuy0Bm58%2BheLYFYkjlrJTD1FoXlZvRVZbh8tpVHZKxbnvCmEonjaiWI2HE3xWrdBsZPzG1k5Qkg1qSDjCU16TABjqkAUz6lXZCI%2FMMAFulCblvhcRUUAQb8VPvo13ZWC7wC%2B42WVQ1BRP3NVaBW4AzH%2BvNEE1ptzAgRtRU3NH10mBntOgrq6DfUj%2FrUlTNSab3m94sPYqH0wlBbCmRTdT2eopmCN62N%2FZQqhI5OyNrLRHKNq%2FzBSfuIq81WTuHFvEe19dUtjDgeWsxwKxyN3CceoBNiZanX8sAqrcgAiFhWIt7Cc3yWmz3&X-Amz-Signature=c526fbea4090830660d70202f66154dd23e0b8f507932eae4244053831f49702&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD523VXK%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCZevM3H8Hl2o0nBqIkAC3Y6Z65ptVi3j05SXwqXCsm6wIhAI8n3UrXhOZRH%2FWs4Q3jRz0YQLlthR2QY0A5jFiHZ0E3KogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIgbTnsjOtad%2BsL0Iq3AOUjWGmoIX%2BwQXBil%2FJekDnKzSWu7SmBz9oC2DnH1Xe%2BqHDSUwuCdStjeSnRp%2FTEP4DgFv371xtFyIJKuWnP8LxeHkxtFh%2BjuSVz669WFr67mY4BxtzC8MayaH2GqUfMNPezN1D6%2Fi82mLaR15tNLGOAomuOajdWQAEOoIuwoPY2eBcd%2Bc71eo%2BGgGTW9OsTwi0HvV7hszcFK4XoU3IKrJ%2B3iA3o%2FxSw0hDJQP9xtfgHwcz%2F7dlaPdBe%2BoelAywVkwv6mKYLs3mI8u4gqD4N%2F9JrYW3VZF78eH5PdqoVnMRlMjGM5ppTZSdAgbIDOQ8kmAam0EVnf1RXB5yLuGaLtA7nL7iXBkGlnqOhG6OGLDwWSxuXW%2Fbmxon%2B0y%2BACDN3MIBuLk8lABs6Zx1jRMyHvlA4M3l6D9pjk4dXDsEnieclW4p9pxw07oGiV8%2BXzc8EJJU5fpVenT6cy%2FUeMK5HyuoXiV5tXFXbj4LJjtwy%2F4Rfb%2Bmonfr902C8Wzc4cL1ham28RrntSuyX6RpudIHAoXW2DH5Y32PZuxulJO7ZzDGLvtuy0Bm58%2BheLYFYkjlrJTD1FoXlZvRVZbh8tpVHZKxbnvCmEonjaiWI2HE3xWrdBsZPzG1k5Qkg1qSDjCU16TABjqkAUz6lXZCI%2FMMAFulCblvhcRUUAQb8VPvo13ZWC7wC%2B42WVQ1BRP3NVaBW4AzH%2BvNEE1ptzAgRtRU3NH10mBntOgrq6DfUj%2FrUlTNSab3m94sPYqH0wlBbCmRTdT2eopmCN62N%2FZQqhI5OyNrLRHKNq%2FzBSfuIq81WTuHFvEe19dUtjDgeWsxwKxyN3CceoBNiZanX8sAqrcgAiFhWIt7Cc3yWmz3&X-Amz-Signature=28bf5ae07f7698f20c44a10b967607c7fd5cd1cddf59d26ee34736dcf7865a43&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD523VXK%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCZevM3H8Hl2o0nBqIkAC3Y6Z65ptVi3j05SXwqXCsm6wIhAI8n3UrXhOZRH%2FWs4Q3jRz0YQLlthR2QY0A5jFiHZ0E3KogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIgbTnsjOtad%2BsL0Iq3AOUjWGmoIX%2BwQXBil%2FJekDnKzSWu7SmBz9oC2DnH1Xe%2BqHDSUwuCdStjeSnRp%2FTEP4DgFv371xtFyIJKuWnP8LxeHkxtFh%2BjuSVz669WFr67mY4BxtzC8MayaH2GqUfMNPezN1D6%2Fi82mLaR15tNLGOAomuOajdWQAEOoIuwoPY2eBcd%2Bc71eo%2BGgGTW9OsTwi0HvV7hszcFK4XoU3IKrJ%2B3iA3o%2FxSw0hDJQP9xtfgHwcz%2F7dlaPdBe%2BoelAywVkwv6mKYLs3mI8u4gqD4N%2F9JrYW3VZF78eH5PdqoVnMRlMjGM5ppTZSdAgbIDOQ8kmAam0EVnf1RXB5yLuGaLtA7nL7iXBkGlnqOhG6OGLDwWSxuXW%2Fbmxon%2B0y%2BACDN3MIBuLk8lABs6Zx1jRMyHvlA4M3l6D9pjk4dXDsEnieclW4p9pxw07oGiV8%2BXzc8EJJU5fpVenT6cy%2FUeMK5HyuoXiV5tXFXbj4LJjtwy%2F4Rfb%2Bmonfr902C8Wzc4cL1ham28RrntSuyX6RpudIHAoXW2DH5Y32PZuxulJO7ZzDGLvtuy0Bm58%2BheLYFYkjlrJTD1FoXlZvRVZbh8tpVHZKxbnvCmEonjaiWI2HE3xWrdBsZPzG1k5Qkg1qSDjCU16TABjqkAUz6lXZCI%2FMMAFulCblvhcRUUAQb8VPvo13ZWC7wC%2B42WVQ1BRP3NVaBW4AzH%2BvNEE1ptzAgRtRU3NH10mBntOgrq6DfUj%2FrUlTNSab3m94sPYqH0wlBbCmRTdT2eopmCN62N%2FZQqhI5OyNrLRHKNq%2FzBSfuIq81WTuHFvEe19dUtjDgeWsxwKxyN3CceoBNiZanX8sAqrcgAiFhWIt7Cc3yWmz3&X-Amz-Signature=8215d0efad441e406eeaf8b5d0271430d34fafd1ddd4fb9fd2330a3c9e74e5a7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD523VXK%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCZevM3H8Hl2o0nBqIkAC3Y6Z65ptVi3j05SXwqXCsm6wIhAI8n3UrXhOZRH%2FWs4Q3jRz0YQLlthR2QY0A5jFiHZ0E3KogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIgbTnsjOtad%2BsL0Iq3AOUjWGmoIX%2BwQXBil%2FJekDnKzSWu7SmBz9oC2DnH1Xe%2BqHDSUwuCdStjeSnRp%2FTEP4DgFv371xtFyIJKuWnP8LxeHkxtFh%2BjuSVz669WFr67mY4BxtzC8MayaH2GqUfMNPezN1D6%2Fi82mLaR15tNLGOAomuOajdWQAEOoIuwoPY2eBcd%2Bc71eo%2BGgGTW9OsTwi0HvV7hszcFK4XoU3IKrJ%2B3iA3o%2FxSw0hDJQP9xtfgHwcz%2F7dlaPdBe%2BoelAywVkwv6mKYLs3mI8u4gqD4N%2F9JrYW3VZF78eH5PdqoVnMRlMjGM5ppTZSdAgbIDOQ8kmAam0EVnf1RXB5yLuGaLtA7nL7iXBkGlnqOhG6OGLDwWSxuXW%2Fbmxon%2B0y%2BACDN3MIBuLk8lABs6Zx1jRMyHvlA4M3l6D9pjk4dXDsEnieclW4p9pxw07oGiV8%2BXzc8EJJU5fpVenT6cy%2FUeMK5HyuoXiV5tXFXbj4LJjtwy%2F4Rfb%2Bmonfr902C8Wzc4cL1ham28RrntSuyX6RpudIHAoXW2DH5Y32PZuxulJO7ZzDGLvtuy0Bm58%2BheLYFYkjlrJTD1FoXlZvRVZbh8tpVHZKxbnvCmEonjaiWI2HE3xWrdBsZPzG1k5Qkg1qSDjCU16TABjqkAUz6lXZCI%2FMMAFulCblvhcRUUAQb8VPvo13ZWC7wC%2B42WVQ1BRP3NVaBW4AzH%2BvNEE1ptzAgRtRU3NH10mBntOgrq6DfUj%2FrUlTNSab3m94sPYqH0wlBbCmRTdT2eopmCN62N%2FZQqhI5OyNrLRHKNq%2FzBSfuIq81WTuHFvEe19dUtjDgeWsxwKxyN3CceoBNiZanX8sAqrcgAiFhWIt7Cc3yWmz3&X-Amz-Signature=9ddaa0d1cdb9ea26e575418fa8cf729d6115db3fff35ad5c7aa549f5001eff45&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD523VXK%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCZevM3H8Hl2o0nBqIkAC3Y6Z65ptVi3j05SXwqXCsm6wIhAI8n3UrXhOZRH%2FWs4Q3jRz0YQLlthR2QY0A5jFiHZ0E3KogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIgbTnsjOtad%2BsL0Iq3AOUjWGmoIX%2BwQXBil%2FJekDnKzSWu7SmBz9oC2DnH1Xe%2BqHDSUwuCdStjeSnRp%2FTEP4DgFv371xtFyIJKuWnP8LxeHkxtFh%2BjuSVz669WFr67mY4BxtzC8MayaH2GqUfMNPezN1D6%2Fi82mLaR15tNLGOAomuOajdWQAEOoIuwoPY2eBcd%2Bc71eo%2BGgGTW9OsTwi0HvV7hszcFK4XoU3IKrJ%2B3iA3o%2FxSw0hDJQP9xtfgHwcz%2F7dlaPdBe%2BoelAywVkwv6mKYLs3mI8u4gqD4N%2F9JrYW3VZF78eH5PdqoVnMRlMjGM5ppTZSdAgbIDOQ8kmAam0EVnf1RXB5yLuGaLtA7nL7iXBkGlnqOhG6OGLDwWSxuXW%2Fbmxon%2B0y%2BACDN3MIBuLk8lABs6Zx1jRMyHvlA4M3l6D9pjk4dXDsEnieclW4p9pxw07oGiV8%2BXzc8EJJU5fpVenT6cy%2FUeMK5HyuoXiV5tXFXbj4LJjtwy%2F4Rfb%2Bmonfr902C8Wzc4cL1ham28RrntSuyX6RpudIHAoXW2DH5Y32PZuxulJO7ZzDGLvtuy0Bm58%2BheLYFYkjlrJTD1FoXlZvRVZbh8tpVHZKxbnvCmEonjaiWI2HE3xWrdBsZPzG1k5Qkg1qSDjCU16TABjqkAUz6lXZCI%2FMMAFulCblvhcRUUAQb8VPvo13ZWC7wC%2B42WVQ1BRP3NVaBW4AzH%2BvNEE1ptzAgRtRU3NH10mBntOgrq6DfUj%2FrUlTNSab3m94sPYqH0wlBbCmRTdT2eopmCN62N%2FZQqhI5OyNrLRHKNq%2FzBSfuIq81WTuHFvEe19dUtjDgeWsxwKxyN3CceoBNiZanX8sAqrcgAiFhWIt7Cc3yWmz3&X-Amz-Signature=6c01b2c08befff395064d369f113ee871790a5b1ae3a03ffdb6f7ffff037f1b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD523VXK%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCZevM3H8Hl2o0nBqIkAC3Y6Z65ptVi3j05SXwqXCsm6wIhAI8n3UrXhOZRH%2FWs4Q3jRz0YQLlthR2QY0A5jFiHZ0E3KogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIgbTnsjOtad%2BsL0Iq3AOUjWGmoIX%2BwQXBil%2FJekDnKzSWu7SmBz9oC2DnH1Xe%2BqHDSUwuCdStjeSnRp%2FTEP4DgFv371xtFyIJKuWnP8LxeHkxtFh%2BjuSVz669WFr67mY4BxtzC8MayaH2GqUfMNPezN1D6%2Fi82mLaR15tNLGOAomuOajdWQAEOoIuwoPY2eBcd%2Bc71eo%2BGgGTW9OsTwi0HvV7hszcFK4XoU3IKrJ%2B3iA3o%2FxSw0hDJQP9xtfgHwcz%2F7dlaPdBe%2BoelAywVkwv6mKYLs3mI8u4gqD4N%2F9JrYW3VZF78eH5PdqoVnMRlMjGM5ppTZSdAgbIDOQ8kmAam0EVnf1RXB5yLuGaLtA7nL7iXBkGlnqOhG6OGLDwWSxuXW%2Fbmxon%2B0y%2BACDN3MIBuLk8lABs6Zx1jRMyHvlA4M3l6D9pjk4dXDsEnieclW4p9pxw07oGiV8%2BXzc8EJJU5fpVenT6cy%2FUeMK5HyuoXiV5tXFXbj4LJjtwy%2F4Rfb%2Bmonfr902C8Wzc4cL1ham28RrntSuyX6RpudIHAoXW2DH5Y32PZuxulJO7ZzDGLvtuy0Bm58%2BheLYFYkjlrJTD1FoXlZvRVZbh8tpVHZKxbnvCmEonjaiWI2HE3xWrdBsZPzG1k5Qkg1qSDjCU16TABjqkAUz6lXZCI%2FMMAFulCblvhcRUUAQb8VPvo13ZWC7wC%2B42WVQ1BRP3NVaBW4AzH%2BvNEE1ptzAgRtRU3NH10mBntOgrq6DfUj%2FrUlTNSab3m94sPYqH0wlBbCmRTdT2eopmCN62N%2FZQqhI5OyNrLRHKNq%2FzBSfuIq81WTuHFvEe19dUtjDgeWsxwKxyN3CceoBNiZanX8sAqrcgAiFhWIt7Cc3yWmz3&X-Amz-Signature=bf0c601e6a2c2df85a2b0af4bd81be115a17512adf6b15f1a8b9e0292eb9f8aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD523VXK%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCZevM3H8Hl2o0nBqIkAC3Y6Z65ptVi3j05SXwqXCsm6wIhAI8n3UrXhOZRH%2FWs4Q3jRz0YQLlthR2QY0A5jFiHZ0E3KogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIgbTnsjOtad%2BsL0Iq3AOUjWGmoIX%2BwQXBil%2FJekDnKzSWu7SmBz9oC2DnH1Xe%2BqHDSUwuCdStjeSnRp%2FTEP4DgFv371xtFyIJKuWnP8LxeHkxtFh%2BjuSVz669WFr67mY4BxtzC8MayaH2GqUfMNPezN1D6%2Fi82mLaR15tNLGOAomuOajdWQAEOoIuwoPY2eBcd%2Bc71eo%2BGgGTW9OsTwi0HvV7hszcFK4XoU3IKrJ%2B3iA3o%2FxSw0hDJQP9xtfgHwcz%2F7dlaPdBe%2BoelAywVkwv6mKYLs3mI8u4gqD4N%2F9JrYW3VZF78eH5PdqoVnMRlMjGM5ppTZSdAgbIDOQ8kmAam0EVnf1RXB5yLuGaLtA7nL7iXBkGlnqOhG6OGLDwWSxuXW%2Fbmxon%2B0y%2BACDN3MIBuLk8lABs6Zx1jRMyHvlA4M3l6D9pjk4dXDsEnieclW4p9pxw07oGiV8%2BXzc8EJJU5fpVenT6cy%2FUeMK5HyuoXiV5tXFXbj4LJjtwy%2F4Rfb%2Bmonfr902C8Wzc4cL1ham28RrntSuyX6RpudIHAoXW2DH5Y32PZuxulJO7ZzDGLvtuy0Bm58%2BheLYFYkjlrJTD1FoXlZvRVZbh8tpVHZKxbnvCmEonjaiWI2HE3xWrdBsZPzG1k5Qkg1qSDjCU16TABjqkAUz6lXZCI%2FMMAFulCblvhcRUUAQb8VPvo13ZWC7wC%2B42WVQ1BRP3NVaBW4AzH%2BvNEE1ptzAgRtRU3NH10mBntOgrq6DfUj%2FrUlTNSab3m94sPYqH0wlBbCmRTdT2eopmCN62N%2FZQqhI5OyNrLRHKNq%2FzBSfuIq81WTuHFvEe19dUtjDgeWsxwKxyN3CceoBNiZanX8sAqrcgAiFhWIt7Cc3yWmz3&X-Amz-Signature=872351c912a98981e246635491109a7a4166c7b44d75b26988bbf520f4d6c027&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
