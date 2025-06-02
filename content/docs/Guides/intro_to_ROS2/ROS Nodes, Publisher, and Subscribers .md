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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T55JLCUY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC01wHjaZvRSHugygzyy8Ep%2FnbiEsiBIr0MmpRUVfXZbwIgB9fMrBDln4hgNNeTBjbTrROpcPpjpqnHt%2FuKYvnc0gYqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIhzgs7RcV6K%2FJh8CrcA%2FwYqpCJhYG%2FyZUjfhrLUWKEQpNKYlsjEKWPBJrCL0DXONUUmipNw6srr%2BzYclTscAVMDJ3EB2%2Bi0s7RlKXtTeP%2F2%2F%2BhKZLNDVV425P29QG%2BAVC6efQlk850X1xT61MlDc77RY%2B%2BKBk2it0bMfpo32Ts0rQK17iViepLdYbCp6Jq9EsVwbvB3g%2BSkqF3g4Hlb2X7TYMe78QzjS620kYwUq00YpmfrjF8PfzNEeqidEeU2Hnj88RlANnQpsLTxVuEdvB%2FX%2FFSaIK9Uky%2FFT2N4TBGssXBSgwvxlkYcxgq01LB%2BeyuR1L8PTX5H5SgUmhn2vSiN4J4jRc%2BcTveTMZ5JlhGuoAeO46SD19%2FqIW156sbu7dSsq8Gy9J6WEsYNBaYwSfHEKmbeojdTM5RXjJfxgqqal6sWQGcSzR%2BfmmxL9%2B5%2FXKtSFf1AcNEevDaBt5FefX6iZvb%2FOODn8i8XaJqVSp8opagrqTgGLsYSj2l0bJ9IfBg7tkJrRxfs%2BXO5yHSsrONpfj%2BMjOlCT%2F2Izrp7gJHKUl7D1Ygh%2F2JAOxViZBYxfiwUYk3NGJij4%2Bft3sfHoOWW7STxoOu5Kn%2BAw12zuEW7D04EyRFZ2hmLiuSo4L%2B%2Fk%2Fefm5Ne4Lpny3uMJ209sEGOqUBSo2f9tqMmjcBytwBF1wm01WHNkjYLZJvFXwbtt0ewsyButVWrjo%2FpTKyeLFCnkp5FFgfj7IeP4M%2Fz0M34%2BOWdNqcxKEs1Ee%2BiFYJIwXmgC4wKwuI2TQpVM%2Bhu2Pr2R5nXk5QMVrpRvm4yM7Jr322EzW9joKg6PwezXVe8Vuw%2Fbs6GsWhbvBo7JXPLgm8L9ySQoyuaTJE9yP%2BW7f51%2Ffd69JWmO6F&X-Amz-Signature=8bda5de0b0f79d87a648b74554445f0e3dd89a6d4fc22c5e7031fb737594b83e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T55JLCUY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC01wHjaZvRSHugygzyy8Ep%2FnbiEsiBIr0MmpRUVfXZbwIgB9fMrBDln4hgNNeTBjbTrROpcPpjpqnHt%2FuKYvnc0gYqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIhzgs7RcV6K%2FJh8CrcA%2FwYqpCJhYG%2FyZUjfhrLUWKEQpNKYlsjEKWPBJrCL0DXONUUmipNw6srr%2BzYclTscAVMDJ3EB2%2Bi0s7RlKXtTeP%2F2%2F%2BhKZLNDVV425P29QG%2BAVC6efQlk850X1xT61MlDc77RY%2B%2BKBk2it0bMfpo32Ts0rQK17iViepLdYbCp6Jq9EsVwbvB3g%2BSkqF3g4Hlb2X7TYMe78QzjS620kYwUq00YpmfrjF8PfzNEeqidEeU2Hnj88RlANnQpsLTxVuEdvB%2FX%2FFSaIK9Uky%2FFT2N4TBGssXBSgwvxlkYcxgq01LB%2BeyuR1L8PTX5H5SgUmhn2vSiN4J4jRc%2BcTveTMZ5JlhGuoAeO46SD19%2FqIW156sbu7dSsq8Gy9J6WEsYNBaYwSfHEKmbeojdTM5RXjJfxgqqal6sWQGcSzR%2BfmmxL9%2B5%2FXKtSFf1AcNEevDaBt5FefX6iZvb%2FOODn8i8XaJqVSp8opagrqTgGLsYSj2l0bJ9IfBg7tkJrRxfs%2BXO5yHSsrONpfj%2BMjOlCT%2F2Izrp7gJHKUl7D1Ygh%2F2JAOxViZBYxfiwUYk3NGJij4%2Bft3sfHoOWW7STxoOu5Kn%2BAw12zuEW7D04EyRFZ2hmLiuSo4L%2B%2Fk%2Fefm5Ne4Lpny3uMJ209sEGOqUBSo2f9tqMmjcBytwBF1wm01WHNkjYLZJvFXwbtt0ewsyButVWrjo%2FpTKyeLFCnkp5FFgfj7IeP4M%2Fz0M34%2BOWdNqcxKEs1Ee%2BiFYJIwXmgC4wKwuI2TQpVM%2Bhu2Pr2R5nXk5QMVrpRvm4yM7Jr322EzW9joKg6PwezXVe8Vuw%2Fbs6GsWhbvBo7JXPLgm8L9ySQoyuaTJE9yP%2BW7f51%2Ffd69JWmO6F&X-Amz-Signature=d37c082131e0a3f808598920b3a23f0668d09d9f013d4a93f55f5124c4b7879f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T55JLCUY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC01wHjaZvRSHugygzyy8Ep%2FnbiEsiBIr0MmpRUVfXZbwIgB9fMrBDln4hgNNeTBjbTrROpcPpjpqnHt%2FuKYvnc0gYqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIhzgs7RcV6K%2FJh8CrcA%2FwYqpCJhYG%2FyZUjfhrLUWKEQpNKYlsjEKWPBJrCL0DXONUUmipNw6srr%2BzYclTscAVMDJ3EB2%2Bi0s7RlKXtTeP%2F2%2F%2BhKZLNDVV425P29QG%2BAVC6efQlk850X1xT61MlDc77RY%2B%2BKBk2it0bMfpo32Ts0rQK17iViepLdYbCp6Jq9EsVwbvB3g%2BSkqF3g4Hlb2X7TYMe78QzjS620kYwUq00YpmfrjF8PfzNEeqidEeU2Hnj88RlANnQpsLTxVuEdvB%2FX%2FFSaIK9Uky%2FFT2N4TBGssXBSgwvxlkYcxgq01LB%2BeyuR1L8PTX5H5SgUmhn2vSiN4J4jRc%2BcTveTMZ5JlhGuoAeO46SD19%2FqIW156sbu7dSsq8Gy9J6WEsYNBaYwSfHEKmbeojdTM5RXjJfxgqqal6sWQGcSzR%2BfmmxL9%2B5%2FXKtSFf1AcNEevDaBt5FefX6iZvb%2FOODn8i8XaJqVSp8opagrqTgGLsYSj2l0bJ9IfBg7tkJrRxfs%2BXO5yHSsrONpfj%2BMjOlCT%2F2Izrp7gJHKUl7D1Ygh%2F2JAOxViZBYxfiwUYk3NGJij4%2Bft3sfHoOWW7STxoOu5Kn%2BAw12zuEW7D04EyRFZ2hmLiuSo4L%2B%2Fk%2Fefm5Ne4Lpny3uMJ209sEGOqUBSo2f9tqMmjcBytwBF1wm01WHNkjYLZJvFXwbtt0ewsyButVWrjo%2FpTKyeLFCnkp5FFgfj7IeP4M%2Fz0M34%2BOWdNqcxKEs1Ee%2BiFYJIwXmgC4wKwuI2TQpVM%2Bhu2Pr2R5nXk5QMVrpRvm4yM7Jr322EzW9joKg6PwezXVe8Vuw%2Fbs6GsWhbvBo7JXPLgm8L9ySQoyuaTJE9yP%2BW7f51%2Ffd69JWmO6F&X-Amz-Signature=2bc163c833f21039b4442d4a6c988d4fbd7bc4c7192b1a79a75761571968fa2c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T55JLCUY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC01wHjaZvRSHugygzyy8Ep%2FnbiEsiBIr0MmpRUVfXZbwIgB9fMrBDln4hgNNeTBjbTrROpcPpjpqnHt%2FuKYvnc0gYqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIhzgs7RcV6K%2FJh8CrcA%2FwYqpCJhYG%2FyZUjfhrLUWKEQpNKYlsjEKWPBJrCL0DXONUUmipNw6srr%2BzYclTscAVMDJ3EB2%2Bi0s7RlKXtTeP%2F2%2F%2BhKZLNDVV425P29QG%2BAVC6efQlk850X1xT61MlDc77RY%2B%2BKBk2it0bMfpo32Ts0rQK17iViepLdYbCp6Jq9EsVwbvB3g%2BSkqF3g4Hlb2X7TYMe78QzjS620kYwUq00YpmfrjF8PfzNEeqidEeU2Hnj88RlANnQpsLTxVuEdvB%2FX%2FFSaIK9Uky%2FFT2N4TBGssXBSgwvxlkYcxgq01LB%2BeyuR1L8PTX5H5SgUmhn2vSiN4J4jRc%2BcTveTMZ5JlhGuoAeO46SD19%2FqIW156sbu7dSsq8Gy9J6WEsYNBaYwSfHEKmbeojdTM5RXjJfxgqqal6sWQGcSzR%2BfmmxL9%2B5%2FXKtSFf1AcNEevDaBt5FefX6iZvb%2FOODn8i8XaJqVSp8opagrqTgGLsYSj2l0bJ9IfBg7tkJrRxfs%2BXO5yHSsrONpfj%2BMjOlCT%2F2Izrp7gJHKUl7D1Ygh%2F2JAOxViZBYxfiwUYk3NGJij4%2Bft3sfHoOWW7STxoOu5Kn%2BAw12zuEW7D04EyRFZ2hmLiuSo4L%2B%2Fk%2Fefm5Ne4Lpny3uMJ209sEGOqUBSo2f9tqMmjcBytwBF1wm01WHNkjYLZJvFXwbtt0ewsyButVWrjo%2FpTKyeLFCnkp5FFgfj7IeP4M%2Fz0M34%2BOWdNqcxKEs1Ee%2BiFYJIwXmgC4wKwuI2TQpVM%2Bhu2Pr2R5nXk5QMVrpRvm4yM7Jr322EzW9joKg6PwezXVe8Vuw%2Fbs6GsWhbvBo7JXPLgm8L9ySQoyuaTJE9yP%2BW7f51%2Ffd69JWmO6F&X-Amz-Signature=5e5004d085283ef835641293de8490684e856e592eaae1794ac106349b28c808&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T55JLCUY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC01wHjaZvRSHugygzyy8Ep%2FnbiEsiBIr0MmpRUVfXZbwIgB9fMrBDln4hgNNeTBjbTrROpcPpjpqnHt%2FuKYvnc0gYqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIhzgs7RcV6K%2FJh8CrcA%2FwYqpCJhYG%2FyZUjfhrLUWKEQpNKYlsjEKWPBJrCL0DXONUUmipNw6srr%2BzYclTscAVMDJ3EB2%2Bi0s7RlKXtTeP%2F2%2F%2BhKZLNDVV425P29QG%2BAVC6efQlk850X1xT61MlDc77RY%2B%2BKBk2it0bMfpo32Ts0rQK17iViepLdYbCp6Jq9EsVwbvB3g%2BSkqF3g4Hlb2X7TYMe78QzjS620kYwUq00YpmfrjF8PfzNEeqidEeU2Hnj88RlANnQpsLTxVuEdvB%2FX%2FFSaIK9Uky%2FFT2N4TBGssXBSgwvxlkYcxgq01LB%2BeyuR1L8PTX5H5SgUmhn2vSiN4J4jRc%2BcTveTMZ5JlhGuoAeO46SD19%2FqIW156sbu7dSsq8Gy9J6WEsYNBaYwSfHEKmbeojdTM5RXjJfxgqqal6sWQGcSzR%2BfmmxL9%2B5%2FXKtSFf1AcNEevDaBt5FefX6iZvb%2FOODn8i8XaJqVSp8opagrqTgGLsYSj2l0bJ9IfBg7tkJrRxfs%2BXO5yHSsrONpfj%2BMjOlCT%2F2Izrp7gJHKUl7D1Ygh%2F2JAOxViZBYxfiwUYk3NGJij4%2Bft3sfHoOWW7STxoOu5Kn%2BAw12zuEW7D04EyRFZ2hmLiuSo4L%2B%2Fk%2Fefm5Ne4Lpny3uMJ209sEGOqUBSo2f9tqMmjcBytwBF1wm01WHNkjYLZJvFXwbtt0ewsyButVWrjo%2FpTKyeLFCnkp5FFgfj7IeP4M%2Fz0M34%2BOWdNqcxKEs1Ee%2BiFYJIwXmgC4wKwuI2TQpVM%2Bhu2Pr2R5nXk5QMVrpRvm4yM7Jr322EzW9joKg6PwezXVe8Vuw%2Fbs6GsWhbvBo7JXPLgm8L9ySQoyuaTJE9yP%2BW7f51%2Ffd69JWmO6F&X-Amz-Signature=e1b5c3db127f809eb4cccc8435d728c6013df058350cd91274a7b398a023e81e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T55JLCUY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC01wHjaZvRSHugygzyy8Ep%2FnbiEsiBIr0MmpRUVfXZbwIgB9fMrBDln4hgNNeTBjbTrROpcPpjpqnHt%2FuKYvnc0gYqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIhzgs7RcV6K%2FJh8CrcA%2FwYqpCJhYG%2FyZUjfhrLUWKEQpNKYlsjEKWPBJrCL0DXONUUmipNw6srr%2BzYclTscAVMDJ3EB2%2Bi0s7RlKXtTeP%2F2%2F%2BhKZLNDVV425P29QG%2BAVC6efQlk850X1xT61MlDc77RY%2B%2BKBk2it0bMfpo32Ts0rQK17iViepLdYbCp6Jq9EsVwbvB3g%2BSkqF3g4Hlb2X7TYMe78QzjS620kYwUq00YpmfrjF8PfzNEeqidEeU2Hnj88RlANnQpsLTxVuEdvB%2FX%2FFSaIK9Uky%2FFT2N4TBGssXBSgwvxlkYcxgq01LB%2BeyuR1L8PTX5H5SgUmhn2vSiN4J4jRc%2BcTveTMZ5JlhGuoAeO46SD19%2FqIW156sbu7dSsq8Gy9J6WEsYNBaYwSfHEKmbeojdTM5RXjJfxgqqal6sWQGcSzR%2BfmmxL9%2B5%2FXKtSFf1AcNEevDaBt5FefX6iZvb%2FOODn8i8XaJqVSp8opagrqTgGLsYSj2l0bJ9IfBg7tkJrRxfs%2BXO5yHSsrONpfj%2BMjOlCT%2F2Izrp7gJHKUl7D1Ygh%2F2JAOxViZBYxfiwUYk3NGJij4%2Bft3sfHoOWW7STxoOu5Kn%2BAw12zuEW7D04EyRFZ2hmLiuSo4L%2B%2Fk%2Fefm5Ne4Lpny3uMJ209sEGOqUBSo2f9tqMmjcBytwBF1wm01WHNkjYLZJvFXwbtt0ewsyButVWrjo%2FpTKyeLFCnkp5FFgfj7IeP4M%2Fz0M34%2BOWdNqcxKEs1Ee%2BiFYJIwXmgC4wKwuI2TQpVM%2Bhu2Pr2R5nXk5QMVrpRvm4yM7Jr322EzW9joKg6PwezXVe8Vuw%2Fbs6GsWhbvBo7JXPLgm8L9ySQoyuaTJE9yP%2BW7f51%2Ffd69JWmO6F&X-Amz-Signature=af1a577feee73d63674feef11609a59797ec92dfe7fa801444358937d0d1ab0c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T55JLCUY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC01wHjaZvRSHugygzyy8Ep%2FnbiEsiBIr0MmpRUVfXZbwIgB9fMrBDln4hgNNeTBjbTrROpcPpjpqnHt%2FuKYvnc0gYqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIhzgs7RcV6K%2FJh8CrcA%2FwYqpCJhYG%2FyZUjfhrLUWKEQpNKYlsjEKWPBJrCL0DXONUUmipNw6srr%2BzYclTscAVMDJ3EB2%2Bi0s7RlKXtTeP%2F2%2F%2BhKZLNDVV425P29QG%2BAVC6efQlk850X1xT61MlDc77RY%2B%2BKBk2it0bMfpo32Ts0rQK17iViepLdYbCp6Jq9EsVwbvB3g%2BSkqF3g4Hlb2X7TYMe78QzjS620kYwUq00YpmfrjF8PfzNEeqidEeU2Hnj88RlANnQpsLTxVuEdvB%2FX%2FFSaIK9Uky%2FFT2N4TBGssXBSgwvxlkYcxgq01LB%2BeyuR1L8PTX5H5SgUmhn2vSiN4J4jRc%2BcTveTMZ5JlhGuoAeO46SD19%2FqIW156sbu7dSsq8Gy9J6WEsYNBaYwSfHEKmbeojdTM5RXjJfxgqqal6sWQGcSzR%2BfmmxL9%2B5%2FXKtSFf1AcNEevDaBt5FefX6iZvb%2FOODn8i8XaJqVSp8opagrqTgGLsYSj2l0bJ9IfBg7tkJrRxfs%2BXO5yHSsrONpfj%2BMjOlCT%2F2Izrp7gJHKUl7D1Ygh%2F2JAOxViZBYxfiwUYk3NGJij4%2Bft3sfHoOWW7STxoOu5Kn%2BAw12zuEW7D04EyRFZ2hmLiuSo4L%2B%2Fk%2Fefm5Ne4Lpny3uMJ209sEGOqUBSo2f9tqMmjcBytwBF1wm01WHNkjYLZJvFXwbtt0ewsyButVWrjo%2FpTKyeLFCnkp5FFgfj7IeP4M%2Fz0M34%2BOWdNqcxKEs1Ee%2BiFYJIwXmgC4wKwuI2TQpVM%2Bhu2Pr2R5nXk5QMVrpRvm4yM7Jr322EzW9joKg6PwezXVe8Vuw%2Fbs6GsWhbvBo7JXPLgm8L9ySQoyuaTJE9yP%2BW7f51%2Ffd69JWmO6F&X-Amz-Signature=845c724266df0e8bb9db364b99ba788e75c5977fb60283a130b32ea00395e0a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T55JLCUY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC01wHjaZvRSHugygzyy8Ep%2FnbiEsiBIr0MmpRUVfXZbwIgB9fMrBDln4hgNNeTBjbTrROpcPpjpqnHt%2FuKYvnc0gYqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIhzgs7RcV6K%2FJh8CrcA%2FwYqpCJhYG%2FyZUjfhrLUWKEQpNKYlsjEKWPBJrCL0DXONUUmipNw6srr%2BzYclTscAVMDJ3EB2%2Bi0s7RlKXtTeP%2F2%2F%2BhKZLNDVV425P29QG%2BAVC6efQlk850X1xT61MlDc77RY%2B%2BKBk2it0bMfpo32Ts0rQK17iViepLdYbCp6Jq9EsVwbvB3g%2BSkqF3g4Hlb2X7TYMe78QzjS620kYwUq00YpmfrjF8PfzNEeqidEeU2Hnj88RlANnQpsLTxVuEdvB%2FX%2FFSaIK9Uky%2FFT2N4TBGssXBSgwvxlkYcxgq01LB%2BeyuR1L8PTX5H5SgUmhn2vSiN4J4jRc%2BcTveTMZ5JlhGuoAeO46SD19%2FqIW156sbu7dSsq8Gy9J6WEsYNBaYwSfHEKmbeojdTM5RXjJfxgqqal6sWQGcSzR%2BfmmxL9%2B5%2FXKtSFf1AcNEevDaBt5FefX6iZvb%2FOODn8i8XaJqVSp8opagrqTgGLsYSj2l0bJ9IfBg7tkJrRxfs%2BXO5yHSsrONpfj%2BMjOlCT%2F2Izrp7gJHKUl7D1Ygh%2F2JAOxViZBYxfiwUYk3NGJij4%2Bft3sfHoOWW7STxoOu5Kn%2BAw12zuEW7D04EyRFZ2hmLiuSo4L%2B%2Fk%2Fefm5Ne4Lpny3uMJ209sEGOqUBSo2f9tqMmjcBytwBF1wm01WHNkjYLZJvFXwbtt0ewsyButVWrjo%2FpTKyeLFCnkp5FFgfj7IeP4M%2Fz0M34%2BOWdNqcxKEs1Ee%2BiFYJIwXmgC4wKwuI2TQpVM%2Bhu2Pr2R5nXk5QMVrpRvm4yM7Jr322EzW9joKg6PwezXVe8Vuw%2Fbs6GsWhbvBo7JXPLgm8L9ySQoyuaTJE9yP%2BW7f51%2Ffd69JWmO6F&X-Amz-Signature=58ad129dd1522dc2ae5804888c3b5acca027e797b517ac7961179a7ac7eec25b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
