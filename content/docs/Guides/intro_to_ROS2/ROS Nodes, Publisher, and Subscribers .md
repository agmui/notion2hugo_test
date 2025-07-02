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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S34NWOPN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T061421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9Q64OETB3Y%2Bmd%2FPWMTAS7XrIzzT2P%2B1irJAk4cmwYzQIhAM%2FdqbOjOWz3i1y4QzouSEmJsp%2Bmp%2BbRsGakgCZdm8J3KogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQdR%2BNn2cFUhpjcPcq3AMbzT0KurkD2ww3Ylrmah%2FIX0E%2B1wwLgzAxbQfIDXC%2FHbVCUmN%2FND%2B4pF311BPBbWQmBr4r2qyrek6Sw6CFsptegyryN6CmLfdC3M4dF35IOoAIAnsSjKaFZj32rzz9PLF1FZfgi1wk53he2IZ5up%2Fr8aue9vu0%2FoXCIwLkxSzya6wcJa0SGqFcvIJ%2BXwfR8arIu2zDbJUaCxRBpP6eilTPv5H5VxtLXqKO2iOAJTORgwt7TbcAmvZQ7cFOAt3iIH70q7WzCnwlBDAd74crte10cY%2BlTfvFqRdeHj9SWF%2FbVTXf2SxQUW%2FSBpzQ0KkyGHYx0CNIXkZgjk0A%2Fb99JsN2nF5IWtQbmESShgXDKV1YsvbiSw86b3y5T5oM3a21qB1VgxBGLoT5gtl5zPvmCvuRZcY63Iy2srXjLTYRmhr9OdW%2BPI%2FSYk416gacaM3aXTMpNPoTL5288B2%2B8X9vx06cMySVQYFnc9RrkCtHe6dnWNdJhO87Ib4Uo3yGpW9EjeIL2BKZXtrHCBdbXqp2gJT%2BlLGsl0iaKRG3BKkxcnEc2TKZBLTAwdPLzSoUtvCQrDUtK5fsAWESTMqNqIB%2BAj5Eh5lWcAUU%2F17qd5huURfpTXYVFqMuTv32FtdSPTDAipPDBjqkAdHE1YVFS9FYbHfj98lFU5838%2Fcy9QqiyvUJNWm1hMm4uGAu7Py1VOq0uPqwEdm5pYOOGLM209XATBGyuDRdMP1c9cO2X3%2FsG5UrexKHoUBCiN9ivXBGQytXbOG3%2Bedv0v7Qu5T1u5hbR4oQpKNz%2Ba0udF2uDoifVcbOUPq7YwJYk2cC40QWmKroVmV7WkBRlfjviLnBfV9SIzKGdGyYDbNFUtBd&X-Amz-Signature=434a3fb6c1dcdc0e6ff7145d8bef4f58db16b96709e86ad6a59e5003fb101686&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S34NWOPN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T061421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9Q64OETB3Y%2Bmd%2FPWMTAS7XrIzzT2P%2B1irJAk4cmwYzQIhAM%2FdqbOjOWz3i1y4QzouSEmJsp%2Bmp%2BbRsGakgCZdm8J3KogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQdR%2BNn2cFUhpjcPcq3AMbzT0KurkD2ww3Ylrmah%2FIX0E%2B1wwLgzAxbQfIDXC%2FHbVCUmN%2FND%2B4pF311BPBbWQmBr4r2qyrek6Sw6CFsptegyryN6CmLfdC3M4dF35IOoAIAnsSjKaFZj32rzz9PLF1FZfgi1wk53he2IZ5up%2Fr8aue9vu0%2FoXCIwLkxSzya6wcJa0SGqFcvIJ%2BXwfR8arIu2zDbJUaCxRBpP6eilTPv5H5VxtLXqKO2iOAJTORgwt7TbcAmvZQ7cFOAt3iIH70q7WzCnwlBDAd74crte10cY%2BlTfvFqRdeHj9SWF%2FbVTXf2SxQUW%2FSBpzQ0KkyGHYx0CNIXkZgjk0A%2Fb99JsN2nF5IWtQbmESShgXDKV1YsvbiSw86b3y5T5oM3a21qB1VgxBGLoT5gtl5zPvmCvuRZcY63Iy2srXjLTYRmhr9OdW%2BPI%2FSYk416gacaM3aXTMpNPoTL5288B2%2B8X9vx06cMySVQYFnc9RrkCtHe6dnWNdJhO87Ib4Uo3yGpW9EjeIL2BKZXtrHCBdbXqp2gJT%2BlLGsl0iaKRG3BKkxcnEc2TKZBLTAwdPLzSoUtvCQrDUtK5fsAWESTMqNqIB%2BAj5Eh5lWcAUU%2F17qd5huURfpTXYVFqMuTv32FtdSPTDAipPDBjqkAdHE1YVFS9FYbHfj98lFU5838%2Fcy9QqiyvUJNWm1hMm4uGAu7Py1VOq0uPqwEdm5pYOOGLM209XATBGyuDRdMP1c9cO2X3%2FsG5UrexKHoUBCiN9ivXBGQytXbOG3%2Bedv0v7Qu5T1u5hbR4oQpKNz%2Ba0udF2uDoifVcbOUPq7YwJYk2cC40QWmKroVmV7WkBRlfjviLnBfV9SIzKGdGyYDbNFUtBd&X-Amz-Signature=75c3b4df59a4eadca194b81a9dbc2047df0feb08f270bd8316a6400fbf13eecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S34NWOPN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T061421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9Q64OETB3Y%2Bmd%2FPWMTAS7XrIzzT2P%2B1irJAk4cmwYzQIhAM%2FdqbOjOWz3i1y4QzouSEmJsp%2Bmp%2BbRsGakgCZdm8J3KogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQdR%2BNn2cFUhpjcPcq3AMbzT0KurkD2ww3Ylrmah%2FIX0E%2B1wwLgzAxbQfIDXC%2FHbVCUmN%2FND%2B4pF311BPBbWQmBr4r2qyrek6Sw6CFsptegyryN6CmLfdC3M4dF35IOoAIAnsSjKaFZj32rzz9PLF1FZfgi1wk53he2IZ5up%2Fr8aue9vu0%2FoXCIwLkxSzya6wcJa0SGqFcvIJ%2BXwfR8arIu2zDbJUaCxRBpP6eilTPv5H5VxtLXqKO2iOAJTORgwt7TbcAmvZQ7cFOAt3iIH70q7WzCnwlBDAd74crte10cY%2BlTfvFqRdeHj9SWF%2FbVTXf2SxQUW%2FSBpzQ0KkyGHYx0CNIXkZgjk0A%2Fb99JsN2nF5IWtQbmESShgXDKV1YsvbiSw86b3y5T5oM3a21qB1VgxBGLoT5gtl5zPvmCvuRZcY63Iy2srXjLTYRmhr9OdW%2BPI%2FSYk416gacaM3aXTMpNPoTL5288B2%2B8X9vx06cMySVQYFnc9RrkCtHe6dnWNdJhO87Ib4Uo3yGpW9EjeIL2BKZXtrHCBdbXqp2gJT%2BlLGsl0iaKRG3BKkxcnEc2TKZBLTAwdPLzSoUtvCQrDUtK5fsAWESTMqNqIB%2BAj5Eh5lWcAUU%2F17qd5huURfpTXYVFqMuTv32FtdSPTDAipPDBjqkAdHE1YVFS9FYbHfj98lFU5838%2Fcy9QqiyvUJNWm1hMm4uGAu7Py1VOq0uPqwEdm5pYOOGLM209XATBGyuDRdMP1c9cO2X3%2FsG5UrexKHoUBCiN9ivXBGQytXbOG3%2Bedv0v7Qu5T1u5hbR4oQpKNz%2Ba0udF2uDoifVcbOUPq7YwJYk2cC40QWmKroVmV7WkBRlfjviLnBfV9SIzKGdGyYDbNFUtBd&X-Amz-Signature=2009f2c23607f40ae57c250534d8eead3cb95a8749dfb168817243ed0f64c84b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S34NWOPN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T061421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9Q64OETB3Y%2Bmd%2FPWMTAS7XrIzzT2P%2B1irJAk4cmwYzQIhAM%2FdqbOjOWz3i1y4QzouSEmJsp%2Bmp%2BbRsGakgCZdm8J3KogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQdR%2BNn2cFUhpjcPcq3AMbzT0KurkD2ww3Ylrmah%2FIX0E%2B1wwLgzAxbQfIDXC%2FHbVCUmN%2FND%2B4pF311BPBbWQmBr4r2qyrek6Sw6CFsptegyryN6CmLfdC3M4dF35IOoAIAnsSjKaFZj32rzz9PLF1FZfgi1wk53he2IZ5up%2Fr8aue9vu0%2FoXCIwLkxSzya6wcJa0SGqFcvIJ%2BXwfR8arIu2zDbJUaCxRBpP6eilTPv5H5VxtLXqKO2iOAJTORgwt7TbcAmvZQ7cFOAt3iIH70q7WzCnwlBDAd74crte10cY%2BlTfvFqRdeHj9SWF%2FbVTXf2SxQUW%2FSBpzQ0KkyGHYx0CNIXkZgjk0A%2Fb99JsN2nF5IWtQbmESShgXDKV1YsvbiSw86b3y5T5oM3a21qB1VgxBGLoT5gtl5zPvmCvuRZcY63Iy2srXjLTYRmhr9OdW%2BPI%2FSYk416gacaM3aXTMpNPoTL5288B2%2B8X9vx06cMySVQYFnc9RrkCtHe6dnWNdJhO87Ib4Uo3yGpW9EjeIL2BKZXtrHCBdbXqp2gJT%2BlLGsl0iaKRG3BKkxcnEc2TKZBLTAwdPLzSoUtvCQrDUtK5fsAWESTMqNqIB%2BAj5Eh5lWcAUU%2F17qd5huURfpTXYVFqMuTv32FtdSPTDAipPDBjqkAdHE1YVFS9FYbHfj98lFU5838%2Fcy9QqiyvUJNWm1hMm4uGAu7Py1VOq0uPqwEdm5pYOOGLM209XATBGyuDRdMP1c9cO2X3%2FsG5UrexKHoUBCiN9ivXBGQytXbOG3%2Bedv0v7Qu5T1u5hbR4oQpKNz%2Ba0udF2uDoifVcbOUPq7YwJYk2cC40QWmKroVmV7WkBRlfjviLnBfV9SIzKGdGyYDbNFUtBd&X-Amz-Signature=e35ba8b1a70b5c185daaf5a9008ff7c9b30208c519d9653d89772e664867a6f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S34NWOPN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T061421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9Q64OETB3Y%2Bmd%2FPWMTAS7XrIzzT2P%2B1irJAk4cmwYzQIhAM%2FdqbOjOWz3i1y4QzouSEmJsp%2Bmp%2BbRsGakgCZdm8J3KogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQdR%2BNn2cFUhpjcPcq3AMbzT0KurkD2ww3Ylrmah%2FIX0E%2B1wwLgzAxbQfIDXC%2FHbVCUmN%2FND%2B4pF311BPBbWQmBr4r2qyrek6Sw6CFsptegyryN6CmLfdC3M4dF35IOoAIAnsSjKaFZj32rzz9PLF1FZfgi1wk53he2IZ5up%2Fr8aue9vu0%2FoXCIwLkxSzya6wcJa0SGqFcvIJ%2BXwfR8arIu2zDbJUaCxRBpP6eilTPv5H5VxtLXqKO2iOAJTORgwt7TbcAmvZQ7cFOAt3iIH70q7WzCnwlBDAd74crte10cY%2BlTfvFqRdeHj9SWF%2FbVTXf2SxQUW%2FSBpzQ0KkyGHYx0CNIXkZgjk0A%2Fb99JsN2nF5IWtQbmESShgXDKV1YsvbiSw86b3y5T5oM3a21qB1VgxBGLoT5gtl5zPvmCvuRZcY63Iy2srXjLTYRmhr9OdW%2BPI%2FSYk416gacaM3aXTMpNPoTL5288B2%2B8X9vx06cMySVQYFnc9RrkCtHe6dnWNdJhO87Ib4Uo3yGpW9EjeIL2BKZXtrHCBdbXqp2gJT%2BlLGsl0iaKRG3BKkxcnEc2TKZBLTAwdPLzSoUtvCQrDUtK5fsAWESTMqNqIB%2BAj5Eh5lWcAUU%2F17qd5huURfpTXYVFqMuTv32FtdSPTDAipPDBjqkAdHE1YVFS9FYbHfj98lFU5838%2Fcy9QqiyvUJNWm1hMm4uGAu7Py1VOq0uPqwEdm5pYOOGLM209XATBGyuDRdMP1c9cO2X3%2FsG5UrexKHoUBCiN9ivXBGQytXbOG3%2Bedv0v7Qu5T1u5hbR4oQpKNz%2Ba0udF2uDoifVcbOUPq7YwJYk2cC40QWmKroVmV7WkBRlfjviLnBfV9SIzKGdGyYDbNFUtBd&X-Amz-Signature=781d44955a6f7f368aa68d7c6490fce4299b2a665493055624bdf3b4546e9ac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S34NWOPN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T061421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9Q64OETB3Y%2Bmd%2FPWMTAS7XrIzzT2P%2B1irJAk4cmwYzQIhAM%2FdqbOjOWz3i1y4QzouSEmJsp%2Bmp%2BbRsGakgCZdm8J3KogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQdR%2BNn2cFUhpjcPcq3AMbzT0KurkD2ww3Ylrmah%2FIX0E%2B1wwLgzAxbQfIDXC%2FHbVCUmN%2FND%2B4pF311BPBbWQmBr4r2qyrek6Sw6CFsptegyryN6CmLfdC3M4dF35IOoAIAnsSjKaFZj32rzz9PLF1FZfgi1wk53he2IZ5up%2Fr8aue9vu0%2FoXCIwLkxSzya6wcJa0SGqFcvIJ%2BXwfR8arIu2zDbJUaCxRBpP6eilTPv5H5VxtLXqKO2iOAJTORgwt7TbcAmvZQ7cFOAt3iIH70q7WzCnwlBDAd74crte10cY%2BlTfvFqRdeHj9SWF%2FbVTXf2SxQUW%2FSBpzQ0KkyGHYx0CNIXkZgjk0A%2Fb99JsN2nF5IWtQbmESShgXDKV1YsvbiSw86b3y5T5oM3a21qB1VgxBGLoT5gtl5zPvmCvuRZcY63Iy2srXjLTYRmhr9OdW%2BPI%2FSYk416gacaM3aXTMpNPoTL5288B2%2B8X9vx06cMySVQYFnc9RrkCtHe6dnWNdJhO87Ib4Uo3yGpW9EjeIL2BKZXtrHCBdbXqp2gJT%2BlLGsl0iaKRG3BKkxcnEc2TKZBLTAwdPLzSoUtvCQrDUtK5fsAWESTMqNqIB%2BAj5Eh5lWcAUU%2F17qd5huURfpTXYVFqMuTv32FtdSPTDAipPDBjqkAdHE1YVFS9FYbHfj98lFU5838%2Fcy9QqiyvUJNWm1hMm4uGAu7Py1VOq0uPqwEdm5pYOOGLM209XATBGyuDRdMP1c9cO2X3%2FsG5UrexKHoUBCiN9ivXBGQytXbOG3%2Bedv0v7Qu5T1u5hbR4oQpKNz%2Ba0udF2uDoifVcbOUPq7YwJYk2cC40QWmKroVmV7WkBRlfjviLnBfV9SIzKGdGyYDbNFUtBd&X-Amz-Signature=a10bb83ae9564023e393689a5c69c5173dda7e0a2cca16659137db3ad500f643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S34NWOPN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T061421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9Q64OETB3Y%2Bmd%2FPWMTAS7XrIzzT2P%2B1irJAk4cmwYzQIhAM%2FdqbOjOWz3i1y4QzouSEmJsp%2Bmp%2BbRsGakgCZdm8J3KogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQdR%2BNn2cFUhpjcPcq3AMbzT0KurkD2ww3Ylrmah%2FIX0E%2B1wwLgzAxbQfIDXC%2FHbVCUmN%2FND%2B4pF311BPBbWQmBr4r2qyrek6Sw6CFsptegyryN6CmLfdC3M4dF35IOoAIAnsSjKaFZj32rzz9PLF1FZfgi1wk53he2IZ5up%2Fr8aue9vu0%2FoXCIwLkxSzya6wcJa0SGqFcvIJ%2BXwfR8arIu2zDbJUaCxRBpP6eilTPv5H5VxtLXqKO2iOAJTORgwt7TbcAmvZQ7cFOAt3iIH70q7WzCnwlBDAd74crte10cY%2BlTfvFqRdeHj9SWF%2FbVTXf2SxQUW%2FSBpzQ0KkyGHYx0CNIXkZgjk0A%2Fb99JsN2nF5IWtQbmESShgXDKV1YsvbiSw86b3y5T5oM3a21qB1VgxBGLoT5gtl5zPvmCvuRZcY63Iy2srXjLTYRmhr9OdW%2BPI%2FSYk416gacaM3aXTMpNPoTL5288B2%2B8X9vx06cMySVQYFnc9RrkCtHe6dnWNdJhO87Ib4Uo3yGpW9EjeIL2BKZXtrHCBdbXqp2gJT%2BlLGsl0iaKRG3BKkxcnEc2TKZBLTAwdPLzSoUtvCQrDUtK5fsAWESTMqNqIB%2BAj5Eh5lWcAUU%2F17qd5huURfpTXYVFqMuTv32FtdSPTDAipPDBjqkAdHE1YVFS9FYbHfj98lFU5838%2Fcy9QqiyvUJNWm1hMm4uGAu7Py1VOq0uPqwEdm5pYOOGLM209XATBGyuDRdMP1c9cO2X3%2FsG5UrexKHoUBCiN9ivXBGQytXbOG3%2Bedv0v7Qu5T1u5hbR4oQpKNz%2Ba0udF2uDoifVcbOUPq7YwJYk2cC40QWmKroVmV7WkBRlfjviLnBfV9SIzKGdGyYDbNFUtBd&X-Amz-Signature=4f158ffa7fd805e786961610dc817f040461982361058c14fb207197dea8e84a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S34NWOPN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T061421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9Q64OETB3Y%2Bmd%2FPWMTAS7XrIzzT2P%2B1irJAk4cmwYzQIhAM%2FdqbOjOWz3i1y4QzouSEmJsp%2Bmp%2BbRsGakgCZdm8J3KogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQdR%2BNn2cFUhpjcPcq3AMbzT0KurkD2ww3Ylrmah%2FIX0E%2B1wwLgzAxbQfIDXC%2FHbVCUmN%2FND%2B4pF311BPBbWQmBr4r2qyrek6Sw6CFsptegyryN6CmLfdC3M4dF35IOoAIAnsSjKaFZj32rzz9PLF1FZfgi1wk53he2IZ5up%2Fr8aue9vu0%2FoXCIwLkxSzya6wcJa0SGqFcvIJ%2BXwfR8arIu2zDbJUaCxRBpP6eilTPv5H5VxtLXqKO2iOAJTORgwt7TbcAmvZQ7cFOAt3iIH70q7WzCnwlBDAd74crte10cY%2BlTfvFqRdeHj9SWF%2FbVTXf2SxQUW%2FSBpzQ0KkyGHYx0CNIXkZgjk0A%2Fb99JsN2nF5IWtQbmESShgXDKV1YsvbiSw86b3y5T5oM3a21qB1VgxBGLoT5gtl5zPvmCvuRZcY63Iy2srXjLTYRmhr9OdW%2BPI%2FSYk416gacaM3aXTMpNPoTL5288B2%2B8X9vx06cMySVQYFnc9RrkCtHe6dnWNdJhO87Ib4Uo3yGpW9EjeIL2BKZXtrHCBdbXqp2gJT%2BlLGsl0iaKRG3BKkxcnEc2TKZBLTAwdPLzSoUtvCQrDUtK5fsAWESTMqNqIB%2BAj5Eh5lWcAUU%2F17qd5huURfpTXYVFqMuTv32FtdSPTDAipPDBjqkAdHE1YVFS9FYbHfj98lFU5838%2Fcy9QqiyvUJNWm1hMm4uGAu7Py1VOq0uPqwEdm5pYOOGLM209XATBGyuDRdMP1c9cO2X3%2FsG5UrexKHoUBCiN9ivXBGQytXbOG3%2Bedv0v7Qu5T1u5hbR4oQpKNz%2Ba0udF2uDoifVcbOUPq7YwJYk2cC40QWmKroVmV7WkBRlfjviLnBfV9SIzKGdGyYDbNFUtBd&X-Amz-Signature=aaf9acd3ca36c026e900f70cede2ac62cfd0c1b883c037824760ec8efaf1edc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
