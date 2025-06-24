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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GKNJZKN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIFQUdR1ruUDeFwRHzSD6Y1FHINXiNOKmj4fLnjEVfr2RAiA9YySbCNvRWSwHAYMEol%2Bp9tjo7uQGX196EID5yP63vir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMHcUpZnZqsOtBQIGoKtwDraM2kg%2BJ0B1qs3MP6AeEIcm61bl8UA10HcwmvtFBhAmhMEpmFpQZbDrT9pfEVKoiiG9fpg%2BeV1PLqO9wiuRHrptkZ6O8Dyg6Gi423qkb68lXxv36ZOMzo7%2FKXtC30WbG7SVRXenoluWYvXOt5%2FOtZH0%2Bo%2B1vRvb5IXta6%2FHkFMbebmOeopyoVTEuimfyX%2FVp8tN0YCN2xJuVO7KE8WSZ2G0nhT9n41fef5r%2BQSVyrDl%2Fc4%2FBql4oWV1k3kK4ReBssSxzhSw9PdnXlz0H8Isl%2Fct2sN%2FOnEHKXb44UxDW7Lo39LtJN62CU2UtUYKiV%2Fe9HfLaWE%2F5sYWnITX8Rnc2uUMIeMFkBDtxwqaf%2FMjUT534a%2Fr367gf9Lti8398MwynbWzgr8N0GlG5gQRJO56hUVBNrxh%2FIAoAT3sBOgaFeT3URFiD0LGMWOjq6ULPiMHptPi6dEV9ZXZ0Z6kQb2nXv15LdC6NRcNDPrSQFlbCRj2h59Tw9SImjFw7TptKmCq3PeVK9GHTXvUMj5K7WEdWobFj3ZuS6TjHwUqdyNtP2QqWNBKeezd1fmYLlhvhir2rfus%2FmGqpYuANHleI2WGWNsrSXryradi4IXyIlbbUiL1W3OyjMw3wuxrCs%2BQwxrLpwgY6pgG4b625mr8rBEjB9G87nnEAHLduH%2FJM6hb6flX8LkuMSFMvXb5sXAoN3llj1TOJdUHMtuiKL6nfBjYCoyAMcy1UEdvqQOdZEUdRFkB9iFeLZlvQMPZR17YuwE3dzRNAz44JK6fNHONbk2R4f2Hkabxpdskj%2FvO98TCJuhw%2Ba1D9FT5taI%2BuRBRFopOinHbZFwT8ikujdfB560H0ThP8DpIWQ%2FfNS%2BHt&X-Amz-Signature=7d72208c2f72c1e3d6271954d154db898ac0bb501cb10554cfe4ac0ad1751081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GKNJZKN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIFQUdR1ruUDeFwRHzSD6Y1FHINXiNOKmj4fLnjEVfr2RAiA9YySbCNvRWSwHAYMEol%2Bp9tjo7uQGX196EID5yP63vir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMHcUpZnZqsOtBQIGoKtwDraM2kg%2BJ0B1qs3MP6AeEIcm61bl8UA10HcwmvtFBhAmhMEpmFpQZbDrT9pfEVKoiiG9fpg%2BeV1PLqO9wiuRHrptkZ6O8Dyg6Gi423qkb68lXxv36ZOMzo7%2FKXtC30WbG7SVRXenoluWYvXOt5%2FOtZH0%2Bo%2B1vRvb5IXta6%2FHkFMbebmOeopyoVTEuimfyX%2FVp8tN0YCN2xJuVO7KE8WSZ2G0nhT9n41fef5r%2BQSVyrDl%2Fc4%2FBql4oWV1k3kK4ReBssSxzhSw9PdnXlz0H8Isl%2Fct2sN%2FOnEHKXb44UxDW7Lo39LtJN62CU2UtUYKiV%2Fe9HfLaWE%2F5sYWnITX8Rnc2uUMIeMFkBDtxwqaf%2FMjUT534a%2Fr367gf9Lti8398MwynbWzgr8N0GlG5gQRJO56hUVBNrxh%2FIAoAT3sBOgaFeT3URFiD0LGMWOjq6ULPiMHptPi6dEV9ZXZ0Z6kQb2nXv15LdC6NRcNDPrSQFlbCRj2h59Tw9SImjFw7TptKmCq3PeVK9GHTXvUMj5K7WEdWobFj3ZuS6TjHwUqdyNtP2QqWNBKeezd1fmYLlhvhir2rfus%2FmGqpYuANHleI2WGWNsrSXryradi4IXyIlbbUiL1W3OyjMw3wuxrCs%2BQwxrLpwgY6pgG4b625mr8rBEjB9G87nnEAHLduH%2FJM6hb6flX8LkuMSFMvXb5sXAoN3llj1TOJdUHMtuiKL6nfBjYCoyAMcy1UEdvqQOdZEUdRFkB9iFeLZlvQMPZR17YuwE3dzRNAz44JK6fNHONbk2R4f2Hkabxpdskj%2FvO98TCJuhw%2Ba1D9FT5taI%2BuRBRFopOinHbZFwT8ikujdfB560H0ThP8DpIWQ%2FfNS%2BHt&X-Amz-Signature=97aa055a29050caa318dd53d23b9320b81613f78ac9661bd7de595e470b7f8ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GKNJZKN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIFQUdR1ruUDeFwRHzSD6Y1FHINXiNOKmj4fLnjEVfr2RAiA9YySbCNvRWSwHAYMEol%2Bp9tjo7uQGX196EID5yP63vir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMHcUpZnZqsOtBQIGoKtwDraM2kg%2BJ0B1qs3MP6AeEIcm61bl8UA10HcwmvtFBhAmhMEpmFpQZbDrT9pfEVKoiiG9fpg%2BeV1PLqO9wiuRHrptkZ6O8Dyg6Gi423qkb68lXxv36ZOMzo7%2FKXtC30WbG7SVRXenoluWYvXOt5%2FOtZH0%2Bo%2B1vRvb5IXta6%2FHkFMbebmOeopyoVTEuimfyX%2FVp8tN0YCN2xJuVO7KE8WSZ2G0nhT9n41fef5r%2BQSVyrDl%2Fc4%2FBql4oWV1k3kK4ReBssSxzhSw9PdnXlz0H8Isl%2Fct2sN%2FOnEHKXb44UxDW7Lo39LtJN62CU2UtUYKiV%2Fe9HfLaWE%2F5sYWnITX8Rnc2uUMIeMFkBDtxwqaf%2FMjUT534a%2Fr367gf9Lti8398MwynbWzgr8N0GlG5gQRJO56hUVBNrxh%2FIAoAT3sBOgaFeT3URFiD0LGMWOjq6ULPiMHptPi6dEV9ZXZ0Z6kQb2nXv15LdC6NRcNDPrSQFlbCRj2h59Tw9SImjFw7TptKmCq3PeVK9GHTXvUMj5K7WEdWobFj3ZuS6TjHwUqdyNtP2QqWNBKeezd1fmYLlhvhir2rfus%2FmGqpYuANHleI2WGWNsrSXryradi4IXyIlbbUiL1W3OyjMw3wuxrCs%2BQwxrLpwgY6pgG4b625mr8rBEjB9G87nnEAHLduH%2FJM6hb6flX8LkuMSFMvXb5sXAoN3llj1TOJdUHMtuiKL6nfBjYCoyAMcy1UEdvqQOdZEUdRFkB9iFeLZlvQMPZR17YuwE3dzRNAz44JK6fNHONbk2R4f2Hkabxpdskj%2FvO98TCJuhw%2Ba1D9FT5taI%2BuRBRFopOinHbZFwT8ikujdfB560H0ThP8DpIWQ%2FfNS%2BHt&X-Amz-Signature=e1c6ef75bdb1418586f6f6c558135ee64a49d8da3cf6ee9b198f0d730c2589a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GKNJZKN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIFQUdR1ruUDeFwRHzSD6Y1FHINXiNOKmj4fLnjEVfr2RAiA9YySbCNvRWSwHAYMEol%2Bp9tjo7uQGX196EID5yP63vir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMHcUpZnZqsOtBQIGoKtwDraM2kg%2BJ0B1qs3MP6AeEIcm61bl8UA10HcwmvtFBhAmhMEpmFpQZbDrT9pfEVKoiiG9fpg%2BeV1PLqO9wiuRHrptkZ6O8Dyg6Gi423qkb68lXxv36ZOMzo7%2FKXtC30WbG7SVRXenoluWYvXOt5%2FOtZH0%2Bo%2B1vRvb5IXta6%2FHkFMbebmOeopyoVTEuimfyX%2FVp8tN0YCN2xJuVO7KE8WSZ2G0nhT9n41fef5r%2BQSVyrDl%2Fc4%2FBql4oWV1k3kK4ReBssSxzhSw9PdnXlz0H8Isl%2Fct2sN%2FOnEHKXb44UxDW7Lo39LtJN62CU2UtUYKiV%2Fe9HfLaWE%2F5sYWnITX8Rnc2uUMIeMFkBDtxwqaf%2FMjUT534a%2Fr367gf9Lti8398MwynbWzgr8N0GlG5gQRJO56hUVBNrxh%2FIAoAT3sBOgaFeT3URFiD0LGMWOjq6ULPiMHptPi6dEV9ZXZ0Z6kQb2nXv15LdC6NRcNDPrSQFlbCRj2h59Tw9SImjFw7TptKmCq3PeVK9GHTXvUMj5K7WEdWobFj3ZuS6TjHwUqdyNtP2QqWNBKeezd1fmYLlhvhir2rfus%2FmGqpYuANHleI2WGWNsrSXryradi4IXyIlbbUiL1W3OyjMw3wuxrCs%2BQwxrLpwgY6pgG4b625mr8rBEjB9G87nnEAHLduH%2FJM6hb6flX8LkuMSFMvXb5sXAoN3llj1TOJdUHMtuiKL6nfBjYCoyAMcy1UEdvqQOdZEUdRFkB9iFeLZlvQMPZR17YuwE3dzRNAz44JK6fNHONbk2R4f2Hkabxpdskj%2FvO98TCJuhw%2Ba1D9FT5taI%2BuRBRFopOinHbZFwT8ikujdfB560H0ThP8DpIWQ%2FfNS%2BHt&X-Amz-Signature=a5f98a38b268ea68eea028206b5199b3fb1a16b1bda28cec5a7e759c2d1acbfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GKNJZKN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIFQUdR1ruUDeFwRHzSD6Y1FHINXiNOKmj4fLnjEVfr2RAiA9YySbCNvRWSwHAYMEol%2Bp9tjo7uQGX196EID5yP63vir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMHcUpZnZqsOtBQIGoKtwDraM2kg%2BJ0B1qs3MP6AeEIcm61bl8UA10HcwmvtFBhAmhMEpmFpQZbDrT9pfEVKoiiG9fpg%2BeV1PLqO9wiuRHrptkZ6O8Dyg6Gi423qkb68lXxv36ZOMzo7%2FKXtC30WbG7SVRXenoluWYvXOt5%2FOtZH0%2Bo%2B1vRvb5IXta6%2FHkFMbebmOeopyoVTEuimfyX%2FVp8tN0YCN2xJuVO7KE8WSZ2G0nhT9n41fef5r%2BQSVyrDl%2Fc4%2FBql4oWV1k3kK4ReBssSxzhSw9PdnXlz0H8Isl%2Fct2sN%2FOnEHKXb44UxDW7Lo39LtJN62CU2UtUYKiV%2Fe9HfLaWE%2F5sYWnITX8Rnc2uUMIeMFkBDtxwqaf%2FMjUT534a%2Fr367gf9Lti8398MwynbWzgr8N0GlG5gQRJO56hUVBNrxh%2FIAoAT3sBOgaFeT3URFiD0LGMWOjq6ULPiMHptPi6dEV9ZXZ0Z6kQb2nXv15LdC6NRcNDPrSQFlbCRj2h59Tw9SImjFw7TptKmCq3PeVK9GHTXvUMj5K7WEdWobFj3ZuS6TjHwUqdyNtP2QqWNBKeezd1fmYLlhvhir2rfus%2FmGqpYuANHleI2WGWNsrSXryradi4IXyIlbbUiL1W3OyjMw3wuxrCs%2BQwxrLpwgY6pgG4b625mr8rBEjB9G87nnEAHLduH%2FJM6hb6flX8LkuMSFMvXb5sXAoN3llj1TOJdUHMtuiKL6nfBjYCoyAMcy1UEdvqQOdZEUdRFkB9iFeLZlvQMPZR17YuwE3dzRNAz44JK6fNHONbk2R4f2Hkabxpdskj%2FvO98TCJuhw%2Ba1D9FT5taI%2BuRBRFopOinHbZFwT8ikujdfB560H0ThP8DpIWQ%2FfNS%2BHt&X-Amz-Signature=83ac5803fe354c39684065114dc3a2b583816262598f8f204cb8219dd0a80a03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GKNJZKN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIFQUdR1ruUDeFwRHzSD6Y1FHINXiNOKmj4fLnjEVfr2RAiA9YySbCNvRWSwHAYMEol%2Bp9tjo7uQGX196EID5yP63vir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMHcUpZnZqsOtBQIGoKtwDraM2kg%2BJ0B1qs3MP6AeEIcm61bl8UA10HcwmvtFBhAmhMEpmFpQZbDrT9pfEVKoiiG9fpg%2BeV1PLqO9wiuRHrptkZ6O8Dyg6Gi423qkb68lXxv36ZOMzo7%2FKXtC30WbG7SVRXenoluWYvXOt5%2FOtZH0%2Bo%2B1vRvb5IXta6%2FHkFMbebmOeopyoVTEuimfyX%2FVp8tN0YCN2xJuVO7KE8WSZ2G0nhT9n41fef5r%2BQSVyrDl%2Fc4%2FBql4oWV1k3kK4ReBssSxzhSw9PdnXlz0H8Isl%2Fct2sN%2FOnEHKXb44UxDW7Lo39LtJN62CU2UtUYKiV%2Fe9HfLaWE%2F5sYWnITX8Rnc2uUMIeMFkBDtxwqaf%2FMjUT534a%2Fr367gf9Lti8398MwynbWzgr8N0GlG5gQRJO56hUVBNrxh%2FIAoAT3sBOgaFeT3URFiD0LGMWOjq6ULPiMHptPi6dEV9ZXZ0Z6kQb2nXv15LdC6NRcNDPrSQFlbCRj2h59Tw9SImjFw7TptKmCq3PeVK9GHTXvUMj5K7WEdWobFj3ZuS6TjHwUqdyNtP2QqWNBKeezd1fmYLlhvhir2rfus%2FmGqpYuANHleI2WGWNsrSXryradi4IXyIlbbUiL1W3OyjMw3wuxrCs%2BQwxrLpwgY6pgG4b625mr8rBEjB9G87nnEAHLduH%2FJM6hb6flX8LkuMSFMvXb5sXAoN3llj1TOJdUHMtuiKL6nfBjYCoyAMcy1UEdvqQOdZEUdRFkB9iFeLZlvQMPZR17YuwE3dzRNAz44JK6fNHONbk2R4f2Hkabxpdskj%2FvO98TCJuhw%2Ba1D9FT5taI%2BuRBRFopOinHbZFwT8ikujdfB560H0ThP8DpIWQ%2FfNS%2BHt&X-Amz-Signature=513b4d3d65f3297cb430f4a391def56f55a8b729d4d409a6d7035ea18b6154f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GKNJZKN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIFQUdR1ruUDeFwRHzSD6Y1FHINXiNOKmj4fLnjEVfr2RAiA9YySbCNvRWSwHAYMEol%2Bp9tjo7uQGX196EID5yP63vir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMHcUpZnZqsOtBQIGoKtwDraM2kg%2BJ0B1qs3MP6AeEIcm61bl8UA10HcwmvtFBhAmhMEpmFpQZbDrT9pfEVKoiiG9fpg%2BeV1PLqO9wiuRHrptkZ6O8Dyg6Gi423qkb68lXxv36ZOMzo7%2FKXtC30WbG7SVRXenoluWYvXOt5%2FOtZH0%2Bo%2B1vRvb5IXta6%2FHkFMbebmOeopyoVTEuimfyX%2FVp8tN0YCN2xJuVO7KE8WSZ2G0nhT9n41fef5r%2BQSVyrDl%2Fc4%2FBql4oWV1k3kK4ReBssSxzhSw9PdnXlz0H8Isl%2Fct2sN%2FOnEHKXb44UxDW7Lo39LtJN62CU2UtUYKiV%2Fe9HfLaWE%2F5sYWnITX8Rnc2uUMIeMFkBDtxwqaf%2FMjUT534a%2Fr367gf9Lti8398MwynbWzgr8N0GlG5gQRJO56hUVBNrxh%2FIAoAT3sBOgaFeT3URFiD0LGMWOjq6ULPiMHptPi6dEV9ZXZ0Z6kQb2nXv15LdC6NRcNDPrSQFlbCRj2h59Tw9SImjFw7TptKmCq3PeVK9GHTXvUMj5K7WEdWobFj3ZuS6TjHwUqdyNtP2QqWNBKeezd1fmYLlhvhir2rfus%2FmGqpYuANHleI2WGWNsrSXryradi4IXyIlbbUiL1W3OyjMw3wuxrCs%2BQwxrLpwgY6pgG4b625mr8rBEjB9G87nnEAHLduH%2FJM6hb6flX8LkuMSFMvXb5sXAoN3llj1TOJdUHMtuiKL6nfBjYCoyAMcy1UEdvqQOdZEUdRFkB9iFeLZlvQMPZR17YuwE3dzRNAz44JK6fNHONbk2R4f2Hkabxpdskj%2FvO98TCJuhw%2Ba1D9FT5taI%2BuRBRFopOinHbZFwT8ikujdfB560H0ThP8DpIWQ%2FfNS%2BHt&X-Amz-Signature=05d959d5c133a6027f03a218cbed4d4b13f8fa7d5f3ca77007a76926aa69ddc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GKNJZKN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIFQUdR1ruUDeFwRHzSD6Y1FHINXiNOKmj4fLnjEVfr2RAiA9YySbCNvRWSwHAYMEol%2Bp9tjo7uQGX196EID5yP63vir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMHcUpZnZqsOtBQIGoKtwDraM2kg%2BJ0B1qs3MP6AeEIcm61bl8UA10HcwmvtFBhAmhMEpmFpQZbDrT9pfEVKoiiG9fpg%2BeV1PLqO9wiuRHrptkZ6O8Dyg6Gi423qkb68lXxv36ZOMzo7%2FKXtC30WbG7SVRXenoluWYvXOt5%2FOtZH0%2Bo%2B1vRvb5IXta6%2FHkFMbebmOeopyoVTEuimfyX%2FVp8tN0YCN2xJuVO7KE8WSZ2G0nhT9n41fef5r%2BQSVyrDl%2Fc4%2FBql4oWV1k3kK4ReBssSxzhSw9PdnXlz0H8Isl%2Fct2sN%2FOnEHKXb44UxDW7Lo39LtJN62CU2UtUYKiV%2Fe9HfLaWE%2F5sYWnITX8Rnc2uUMIeMFkBDtxwqaf%2FMjUT534a%2Fr367gf9Lti8398MwynbWzgr8N0GlG5gQRJO56hUVBNrxh%2FIAoAT3sBOgaFeT3URFiD0LGMWOjq6ULPiMHptPi6dEV9ZXZ0Z6kQb2nXv15LdC6NRcNDPrSQFlbCRj2h59Tw9SImjFw7TptKmCq3PeVK9GHTXvUMj5K7WEdWobFj3ZuS6TjHwUqdyNtP2QqWNBKeezd1fmYLlhvhir2rfus%2FmGqpYuANHleI2WGWNsrSXryradi4IXyIlbbUiL1W3OyjMw3wuxrCs%2BQwxrLpwgY6pgG4b625mr8rBEjB9G87nnEAHLduH%2FJM6hb6flX8LkuMSFMvXb5sXAoN3llj1TOJdUHMtuiKL6nfBjYCoyAMcy1UEdvqQOdZEUdRFkB9iFeLZlvQMPZR17YuwE3dzRNAz44JK6fNHONbk2R4f2Hkabxpdskj%2FvO98TCJuhw%2Ba1D9FT5taI%2BuRBRFopOinHbZFwT8ikujdfB560H0ThP8DpIWQ%2FfNS%2BHt&X-Amz-Signature=d089b911ab610a2388e0804fc819f98710348fd29a16b33c496d7ba7ed290338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
