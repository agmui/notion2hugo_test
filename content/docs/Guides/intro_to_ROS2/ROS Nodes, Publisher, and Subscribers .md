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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPA2VBEN%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp9abxJKfMc8i9nO40dGt6ovrgHHicIZZd23Thvb5ujAIhANlrXOTG7npbGwlJgaVZd8ldah9YBYH3ISyS7WmJ%2BX4gKv8DCBEQABoMNjM3NDIzMTgzODA1IgzjxlMyMMD6d8I8GMAq3AOq%2FTJh5WY3GTNnFA1Jk4CcDbzltEE9b8noOaTyOItrIL2892e24sKsO24LxiuuZ7x4Pl3GHlCgpBuJrV1lntOwKm%2FLEMoz6%2F7mhGi5qc4vLURk2WC4B%2F6O3PN5QYbAvApbxSTLJ%2BdMQz68Nk4giVxRAidTplgWO0OFFaN6KfOOEwWBtDgwt9yO0gtub6812th1czM%2BNDNB7v58E%2F3B6ezOowIGrPtdSTo%2BSJET%2B0yZy0%2FcMbUzwihQYQkXjbEYimLDkkSvadmkjaTWVFSRAfQh38laguU%2BGOkMd1XT8hNCo64P1RSBpEPEJiWPr4kVTIbFKNpl0UKec5UHZezfBcvPGH%2Br4sPrF98ilno6%2F6ictPrUgzHTg%2BDfDuOEYHSfr0XCNr%2FL8RfiVrGLcxeE1AFLkmxZ4Lbon3UD3Kn0MUwgsxTnKPXc1l4TGk0raPPrX7bQEc006hMuKH4dz%2FPjfk1FEJl9gMdbVFeq9hUCqmmQ%2FeW%2FWgSJZ%2FvoG6A9xeLsPvOgM0V6wG%2BXGYOawnPq%2BQpuQekrDOmHZ0raDU3yfTkb0QhPJdG7TlK9jQJNw5kIh6TJpt4X5mCmKWxmS6xaObus4imTvmaQ0h2G0I4%2FUp3Tj9kkUAjGCPnfwOFaBTC14dS%2BBjqkAe0NSx%2B3lnHaMwYZGmGQ%2Bmuc9iASSyG%2BSFa6EXyOW3VeDbgbSgMiEhi1epdAVKXiUSRFmc6N9Tk46e2jHEW7Ai7kqAdD%2BHZ4AqmiVMnqxofrFsYgxa4%2Fj06YhEj%2FY5uvSptNSKY%2F0FEwmB3NeaiTt1ELbzmLI2wP3dvTyP%2BXMi6tpa4SVxEN%2FGhrzkcvsRz4ib6JwhEvmb8j5Qe%2FsR1q1003ISzx&X-Amz-Signature=307a64a46dc6a092fa15212e7c271a671ed8e2f134d527b128d8e556e36d7814&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPA2VBEN%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp9abxJKfMc8i9nO40dGt6ovrgHHicIZZd23Thvb5ujAIhANlrXOTG7npbGwlJgaVZd8ldah9YBYH3ISyS7WmJ%2BX4gKv8DCBEQABoMNjM3NDIzMTgzODA1IgzjxlMyMMD6d8I8GMAq3AOq%2FTJh5WY3GTNnFA1Jk4CcDbzltEE9b8noOaTyOItrIL2892e24sKsO24LxiuuZ7x4Pl3GHlCgpBuJrV1lntOwKm%2FLEMoz6%2F7mhGi5qc4vLURk2WC4B%2F6O3PN5QYbAvApbxSTLJ%2BdMQz68Nk4giVxRAidTplgWO0OFFaN6KfOOEwWBtDgwt9yO0gtub6812th1czM%2BNDNB7v58E%2F3B6ezOowIGrPtdSTo%2BSJET%2B0yZy0%2FcMbUzwihQYQkXjbEYimLDkkSvadmkjaTWVFSRAfQh38laguU%2BGOkMd1XT8hNCo64P1RSBpEPEJiWPr4kVTIbFKNpl0UKec5UHZezfBcvPGH%2Br4sPrF98ilno6%2F6ictPrUgzHTg%2BDfDuOEYHSfr0XCNr%2FL8RfiVrGLcxeE1AFLkmxZ4Lbon3UD3Kn0MUwgsxTnKPXc1l4TGk0raPPrX7bQEc006hMuKH4dz%2FPjfk1FEJl9gMdbVFeq9hUCqmmQ%2FeW%2FWgSJZ%2FvoG6A9xeLsPvOgM0V6wG%2BXGYOawnPq%2BQpuQekrDOmHZ0raDU3yfTkb0QhPJdG7TlK9jQJNw5kIh6TJpt4X5mCmKWxmS6xaObus4imTvmaQ0h2G0I4%2FUp3Tj9kkUAjGCPnfwOFaBTC14dS%2BBjqkAe0NSx%2B3lnHaMwYZGmGQ%2Bmuc9iASSyG%2BSFa6EXyOW3VeDbgbSgMiEhi1epdAVKXiUSRFmc6N9Tk46e2jHEW7Ai7kqAdD%2BHZ4AqmiVMnqxofrFsYgxa4%2Fj06YhEj%2FY5uvSptNSKY%2F0FEwmB3NeaiTt1ELbzmLI2wP3dvTyP%2BXMi6tpa4SVxEN%2FGhrzkcvsRz4ib6JwhEvmb8j5Qe%2FsR1q1003ISzx&X-Amz-Signature=deffb7f2938a6069bb4144866c94d2c75ea7a57401a8bc4a6888fd4b0f5a04d1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPA2VBEN%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp9abxJKfMc8i9nO40dGt6ovrgHHicIZZd23Thvb5ujAIhANlrXOTG7npbGwlJgaVZd8ldah9YBYH3ISyS7WmJ%2BX4gKv8DCBEQABoMNjM3NDIzMTgzODA1IgzjxlMyMMD6d8I8GMAq3AOq%2FTJh5WY3GTNnFA1Jk4CcDbzltEE9b8noOaTyOItrIL2892e24sKsO24LxiuuZ7x4Pl3GHlCgpBuJrV1lntOwKm%2FLEMoz6%2F7mhGi5qc4vLURk2WC4B%2F6O3PN5QYbAvApbxSTLJ%2BdMQz68Nk4giVxRAidTplgWO0OFFaN6KfOOEwWBtDgwt9yO0gtub6812th1czM%2BNDNB7v58E%2F3B6ezOowIGrPtdSTo%2BSJET%2B0yZy0%2FcMbUzwihQYQkXjbEYimLDkkSvadmkjaTWVFSRAfQh38laguU%2BGOkMd1XT8hNCo64P1RSBpEPEJiWPr4kVTIbFKNpl0UKec5UHZezfBcvPGH%2Br4sPrF98ilno6%2F6ictPrUgzHTg%2BDfDuOEYHSfr0XCNr%2FL8RfiVrGLcxeE1AFLkmxZ4Lbon3UD3Kn0MUwgsxTnKPXc1l4TGk0raPPrX7bQEc006hMuKH4dz%2FPjfk1FEJl9gMdbVFeq9hUCqmmQ%2FeW%2FWgSJZ%2FvoG6A9xeLsPvOgM0V6wG%2BXGYOawnPq%2BQpuQekrDOmHZ0raDU3yfTkb0QhPJdG7TlK9jQJNw5kIh6TJpt4X5mCmKWxmS6xaObus4imTvmaQ0h2G0I4%2FUp3Tj9kkUAjGCPnfwOFaBTC14dS%2BBjqkAe0NSx%2B3lnHaMwYZGmGQ%2Bmuc9iASSyG%2BSFa6EXyOW3VeDbgbSgMiEhi1epdAVKXiUSRFmc6N9Tk46e2jHEW7Ai7kqAdD%2BHZ4AqmiVMnqxofrFsYgxa4%2Fj06YhEj%2FY5uvSptNSKY%2F0FEwmB3NeaiTt1ELbzmLI2wP3dvTyP%2BXMi6tpa4SVxEN%2FGhrzkcvsRz4ib6JwhEvmb8j5Qe%2FsR1q1003ISzx&X-Amz-Signature=053ac5e8d835a01249a74cd07008e174e7fd7fbf3f9efc6bacffedfea8587b9d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPA2VBEN%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp9abxJKfMc8i9nO40dGt6ovrgHHicIZZd23Thvb5ujAIhANlrXOTG7npbGwlJgaVZd8ldah9YBYH3ISyS7WmJ%2BX4gKv8DCBEQABoMNjM3NDIzMTgzODA1IgzjxlMyMMD6d8I8GMAq3AOq%2FTJh5WY3GTNnFA1Jk4CcDbzltEE9b8noOaTyOItrIL2892e24sKsO24LxiuuZ7x4Pl3GHlCgpBuJrV1lntOwKm%2FLEMoz6%2F7mhGi5qc4vLURk2WC4B%2F6O3PN5QYbAvApbxSTLJ%2BdMQz68Nk4giVxRAidTplgWO0OFFaN6KfOOEwWBtDgwt9yO0gtub6812th1czM%2BNDNB7v58E%2F3B6ezOowIGrPtdSTo%2BSJET%2B0yZy0%2FcMbUzwihQYQkXjbEYimLDkkSvadmkjaTWVFSRAfQh38laguU%2BGOkMd1XT8hNCo64P1RSBpEPEJiWPr4kVTIbFKNpl0UKec5UHZezfBcvPGH%2Br4sPrF98ilno6%2F6ictPrUgzHTg%2BDfDuOEYHSfr0XCNr%2FL8RfiVrGLcxeE1AFLkmxZ4Lbon3UD3Kn0MUwgsxTnKPXc1l4TGk0raPPrX7bQEc006hMuKH4dz%2FPjfk1FEJl9gMdbVFeq9hUCqmmQ%2FeW%2FWgSJZ%2FvoG6A9xeLsPvOgM0V6wG%2BXGYOawnPq%2BQpuQekrDOmHZ0raDU3yfTkb0QhPJdG7TlK9jQJNw5kIh6TJpt4X5mCmKWxmS6xaObus4imTvmaQ0h2G0I4%2FUp3Tj9kkUAjGCPnfwOFaBTC14dS%2BBjqkAe0NSx%2B3lnHaMwYZGmGQ%2Bmuc9iASSyG%2BSFa6EXyOW3VeDbgbSgMiEhi1epdAVKXiUSRFmc6N9Tk46e2jHEW7Ai7kqAdD%2BHZ4AqmiVMnqxofrFsYgxa4%2Fj06YhEj%2FY5uvSptNSKY%2F0FEwmB3NeaiTt1ELbzmLI2wP3dvTyP%2BXMi6tpa4SVxEN%2FGhrzkcvsRz4ib6JwhEvmb8j5Qe%2FsR1q1003ISzx&X-Amz-Signature=07b31e8ea7e0f50df717152cd417f4556893bfa37ed357a7506793b0c2e32539&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPA2VBEN%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp9abxJKfMc8i9nO40dGt6ovrgHHicIZZd23Thvb5ujAIhANlrXOTG7npbGwlJgaVZd8ldah9YBYH3ISyS7WmJ%2BX4gKv8DCBEQABoMNjM3NDIzMTgzODA1IgzjxlMyMMD6d8I8GMAq3AOq%2FTJh5WY3GTNnFA1Jk4CcDbzltEE9b8noOaTyOItrIL2892e24sKsO24LxiuuZ7x4Pl3GHlCgpBuJrV1lntOwKm%2FLEMoz6%2F7mhGi5qc4vLURk2WC4B%2F6O3PN5QYbAvApbxSTLJ%2BdMQz68Nk4giVxRAidTplgWO0OFFaN6KfOOEwWBtDgwt9yO0gtub6812th1czM%2BNDNB7v58E%2F3B6ezOowIGrPtdSTo%2BSJET%2B0yZy0%2FcMbUzwihQYQkXjbEYimLDkkSvadmkjaTWVFSRAfQh38laguU%2BGOkMd1XT8hNCo64P1RSBpEPEJiWPr4kVTIbFKNpl0UKec5UHZezfBcvPGH%2Br4sPrF98ilno6%2F6ictPrUgzHTg%2BDfDuOEYHSfr0XCNr%2FL8RfiVrGLcxeE1AFLkmxZ4Lbon3UD3Kn0MUwgsxTnKPXc1l4TGk0raPPrX7bQEc006hMuKH4dz%2FPjfk1FEJl9gMdbVFeq9hUCqmmQ%2FeW%2FWgSJZ%2FvoG6A9xeLsPvOgM0V6wG%2BXGYOawnPq%2BQpuQekrDOmHZ0raDU3yfTkb0QhPJdG7TlK9jQJNw5kIh6TJpt4X5mCmKWxmS6xaObus4imTvmaQ0h2G0I4%2FUp3Tj9kkUAjGCPnfwOFaBTC14dS%2BBjqkAe0NSx%2B3lnHaMwYZGmGQ%2Bmuc9iASSyG%2BSFa6EXyOW3VeDbgbSgMiEhi1epdAVKXiUSRFmc6N9Tk46e2jHEW7Ai7kqAdD%2BHZ4AqmiVMnqxofrFsYgxa4%2Fj06YhEj%2FY5uvSptNSKY%2F0FEwmB3NeaiTt1ELbzmLI2wP3dvTyP%2BXMi6tpa4SVxEN%2FGhrzkcvsRz4ib6JwhEvmb8j5Qe%2FsR1q1003ISzx&X-Amz-Signature=4c9092cd432ae971a629bb93b72cb7a863ec662c25324f360760dc13330f2efa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPA2VBEN%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp9abxJKfMc8i9nO40dGt6ovrgHHicIZZd23Thvb5ujAIhANlrXOTG7npbGwlJgaVZd8ldah9YBYH3ISyS7WmJ%2BX4gKv8DCBEQABoMNjM3NDIzMTgzODA1IgzjxlMyMMD6d8I8GMAq3AOq%2FTJh5WY3GTNnFA1Jk4CcDbzltEE9b8noOaTyOItrIL2892e24sKsO24LxiuuZ7x4Pl3GHlCgpBuJrV1lntOwKm%2FLEMoz6%2F7mhGi5qc4vLURk2WC4B%2F6O3PN5QYbAvApbxSTLJ%2BdMQz68Nk4giVxRAidTplgWO0OFFaN6KfOOEwWBtDgwt9yO0gtub6812th1czM%2BNDNB7v58E%2F3B6ezOowIGrPtdSTo%2BSJET%2B0yZy0%2FcMbUzwihQYQkXjbEYimLDkkSvadmkjaTWVFSRAfQh38laguU%2BGOkMd1XT8hNCo64P1RSBpEPEJiWPr4kVTIbFKNpl0UKec5UHZezfBcvPGH%2Br4sPrF98ilno6%2F6ictPrUgzHTg%2BDfDuOEYHSfr0XCNr%2FL8RfiVrGLcxeE1AFLkmxZ4Lbon3UD3Kn0MUwgsxTnKPXc1l4TGk0raPPrX7bQEc006hMuKH4dz%2FPjfk1FEJl9gMdbVFeq9hUCqmmQ%2FeW%2FWgSJZ%2FvoG6A9xeLsPvOgM0V6wG%2BXGYOawnPq%2BQpuQekrDOmHZ0raDU3yfTkb0QhPJdG7TlK9jQJNw5kIh6TJpt4X5mCmKWxmS6xaObus4imTvmaQ0h2G0I4%2FUp3Tj9kkUAjGCPnfwOFaBTC14dS%2BBjqkAe0NSx%2B3lnHaMwYZGmGQ%2Bmuc9iASSyG%2BSFa6EXyOW3VeDbgbSgMiEhi1epdAVKXiUSRFmc6N9Tk46e2jHEW7Ai7kqAdD%2BHZ4AqmiVMnqxofrFsYgxa4%2Fj06YhEj%2FY5uvSptNSKY%2F0FEwmB3NeaiTt1ELbzmLI2wP3dvTyP%2BXMi6tpa4SVxEN%2FGhrzkcvsRz4ib6JwhEvmb8j5Qe%2FsR1q1003ISzx&X-Amz-Signature=58cd481db51be3e54164f533cf6a289915c17f2d4dfffd9866a697d08493a6a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPA2VBEN%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp9abxJKfMc8i9nO40dGt6ovrgHHicIZZd23Thvb5ujAIhANlrXOTG7npbGwlJgaVZd8ldah9YBYH3ISyS7WmJ%2BX4gKv8DCBEQABoMNjM3NDIzMTgzODA1IgzjxlMyMMD6d8I8GMAq3AOq%2FTJh5WY3GTNnFA1Jk4CcDbzltEE9b8noOaTyOItrIL2892e24sKsO24LxiuuZ7x4Pl3GHlCgpBuJrV1lntOwKm%2FLEMoz6%2F7mhGi5qc4vLURk2WC4B%2F6O3PN5QYbAvApbxSTLJ%2BdMQz68Nk4giVxRAidTplgWO0OFFaN6KfOOEwWBtDgwt9yO0gtub6812th1czM%2BNDNB7v58E%2F3B6ezOowIGrPtdSTo%2BSJET%2B0yZy0%2FcMbUzwihQYQkXjbEYimLDkkSvadmkjaTWVFSRAfQh38laguU%2BGOkMd1XT8hNCo64P1RSBpEPEJiWPr4kVTIbFKNpl0UKec5UHZezfBcvPGH%2Br4sPrF98ilno6%2F6ictPrUgzHTg%2BDfDuOEYHSfr0XCNr%2FL8RfiVrGLcxeE1AFLkmxZ4Lbon3UD3Kn0MUwgsxTnKPXc1l4TGk0raPPrX7bQEc006hMuKH4dz%2FPjfk1FEJl9gMdbVFeq9hUCqmmQ%2FeW%2FWgSJZ%2FvoG6A9xeLsPvOgM0V6wG%2BXGYOawnPq%2BQpuQekrDOmHZ0raDU3yfTkb0QhPJdG7TlK9jQJNw5kIh6TJpt4X5mCmKWxmS6xaObus4imTvmaQ0h2G0I4%2FUp3Tj9kkUAjGCPnfwOFaBTC14dS%2BBjqkAe0NSx%2B3lnHaMwYZGmGQ%2Bmuc9iASSyG%2BSFa6EXyOW3VeDbgbSgMiEhi1epdAVKXiUSRFmc6N9Tk46e2jHEW7Ai7kqAdD%2BHZ4AqmiVMnqxofrFsYgxa4%2Fj06YhEj%2FY5uvSptNSKY%2F0FEwmB3NeaiTt1ELbzmLI2wP3dvTyP%2BXMi6tpa4SVxEN%2FGhrzkcvsRz4ib6JwhEvmb8j5Qe%2FsR1q1003ISzx&X-Amz-Signature=db4df4ef5ce9f1fe98fd78814bfe07328aa2b55bf18370573dbee8cd6e4023fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPA2VBEN%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp9abxJKfMc8i9nO40dGt6ovrgHHicIZZd23Thvb5ujAIhANlrXOTG7npbGwlJgaVZd8ldah9YBYH3ISyS7WmJ%2BX4gKv8DCBEQABoMNjM3NDIzMTgzODA1IgzjxlMyMMD6d8I8GMAq3AOq%2FTJh5WY3GTNnFA1Jk4CcDbzltEE9b8noOaTyOItrIL2892e24sKsO24LxiuuZ7x4Pl3GHlCgpBuJrV1lntOwKm%2FLEMoz6%2F7mhGi5qc4vLURk2WC4B%2F6O3PN5QYbAvApbxSTLJ%2BdMQz68Nk4giVxRAidTplgWO0OFFaN6KfOOEwWBtDgwt9yO0gtub6812th1czM%2BNDNB7v58E%2F3B6ezOowIGrPtdSTo%2BSJET%2B0yZy0%2FcMbUzwihQYQkXjbEYimLDkkSvadmkjaTWVFSRAfQh38laguU%2BGOkMd1XT8hNCo64P1RSBpEPEJiWPr4kVTIbFKNpl0UKec5UHZezfBcvPGH%2Br4sPrF98ilno6%2F6ictPrUgzHTg%2BDfDuOEYHSfr0XCNr%2FL8RfiVrGLcxeE1AFLkmxZ4Lbon3UD3Kn0MUwgsxTnKPXc1l4TGk0raPPrX7bQEc006hMuKH4dz%2FPjfk1FEJl9gMdbVFeq9hUCqmmQ%2FeW%2FWgSJZ%2FvoG6A9xeLsPvOgM0V6wG%2BXGYOawnPq%2BQpuQekrDOmHZ0raDU3yfTkb0QhPJdG7TlK9jQJNw5kIh6TJpt4X5mCmKWxmS6xaObus4imTvmaQ0h2G0I4%2FUp3Tj9kkUAjGCPnfwOFaBTC14dS%2BBjqkAe0NSx%2B3lnHaMwYZGmGQ%2Bmuc9iASSyG%2BSFa6EXyOW3VeDbgbSgMiEhi1epdAVKXiUSRFmc6N9Tk46e2jHEW7Ai7kqAdD%2BHZ4AqmiVMnqxofrFsYgxa4%2Fj06YhEj%2FY5uvSptNSKY%2F0FEwmB3NeaiTt1ELbzmLI2wP3dvTyP%2BXMi6tpa4SVxEN%2FGhrzkcvsRz4ib6JwhEvmb8j5Qe%2FsR1q1003ISzx&X-Amz-Signature=e6f1bd9edbea7f3416d4485892c0e0bab7b80da86dec4c28b789728d9252ae74&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
