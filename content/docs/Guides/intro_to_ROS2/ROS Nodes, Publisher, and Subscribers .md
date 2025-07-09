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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYUTCZSQ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T091221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYwUO72z%2B2nYvRoA%2FeudOBCk4Nq7%2FY22rd7m5oLNXhKAiBFs0P66Z43pNFzYWUeipFvV4l1yGK6b4048kwMlCERxSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEb68NvvoTwyMOcn7KtwDJrjdbll%2Bubn8s%2BKUCTTOXj0pFp3FWZwY4BP8f2ShVpgpuqcCUKHkpQuXdDWGf2fnjpEc4nJR6JSM7yaqezYgyD6xjX6LOm8dP%2BaGmHhaLluwkU54Zne%2FoJm53fKi%2BHtAmzHd2bgGdEYwGpo%2F2b4WDqHovX%2Baz5gBi1HTkOQGQf3mE6bhSboWUTAt%2BfnOUkL%2B%2BoXFS%2FgHtDV%2B8EjMCIAL%2Fi9p7T5%2BuNEPb9qsGo5KAOwBazdg15KE%2BC7ZUh76Vfk8BAkz35DMcw3ogceHxXfrcctXa2zlmvApOS9BaxOvrEiyMp16TPTY2RwGE%2Fe%2BRtgC8FxyXHzllkLed7xLh1xNUVj289tybKuwavNekNBmRqcVVDf4F4Jr8YHWfYL64%2B1W%2BFeulUMaEtDIBQ0J1WZKBTahwm3LKz51N53AfFvMsRjstmuT0c6ka5aAH0ut7v8YPTi4IvBwJGLOQzVl72dHlDOxgupX6rvhm2c8IURJn04cXMy%2BNiJyri4dQ9uBoyL5F6hQLmqq491auqZoNrMkZ5yJjmVjuVhoRQP%2Brei7PHkOG2zt6g1z4xUDJTh68hdA2nzjHLCZ5B3%2FUsyYySpC7i4EEoKGUkVhJ86k3%2Fm37GsQIBE%2FNHb6mrNOGOsw8tG4wwY6pgGfFaG4Pi%2FcdwhL1B3MgzuUesUkJ73GQ0JglGXCQDhzLKQmUcy8RZaLcpwFePqL3yEPBl5Mwe1i23nz2JKMG%2Bkzy7FnHK6F2LN41QVTsKR3efMzA1P9w6k8c74pabFhyFuHx%2BpcBNZcQ93nzK4vPoSrQFmBmJDnykc4OgWXAivLUH4RdIu1SWKYLxJMi2r5TcvAd9sx51mMUKG2%2BvqGEbQkG5Zx%2FaUY&X-Amz-Signature=c83de0004fbb9c5d3e84e8cb70711fa2da4ec93a5127ec54c5d89a1e9db35716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYUTCZSQ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T091221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYwUO72z%2B2nYvRoA%2FeudOBCk4Nq7%2FY22rd7m5oLNXhKAiBFs0P66Z43pNFzYWUeipFvV4l1yGK6b4048kwMlCERxSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEb68NvvoTwyMOcn7KtwDJrjdbll%2Bubn8s%2BKUCTTOXj0pFp3FWZwY4BP8f2ShVpgpuqcCUKHkpQuXdDWGf2fnjpEc4nJR6JSM7yaqezYgyD6xjX6LOm8dP%2BaGmHhaLluwkU54Zne%2FoJm53fKi%2BHtAmzHd2bgGdEYwGpo%2F2b4WDqHovX%2Baz5gBi1HTkOQGQf3mE6bhSboWUTAt%2BfnOUkL%2B%2BoXFS%2FgHtDV%2B8EjMCIAL%2Fi9p7T5%2BuNEPb9qsGo5KAOwBazdg15KE%2BC7ZUh76Vfk8BAkz35DMcw3ogceHxXfrcctXa2zlmvApOS9BaxOvrEiyMp16TPTY2RwGE%2Fe%2BRtgC8FxyXHzllkLed7xLh1xNUVj289tybKuwavNekNBmRqcVVDf4F4Jr8YHWfYL64%2B1W%2BFeulUMaEtDIBQ0J1WZKBTahwm3LKz51N53AfFvMsRjstmuT0c6ka5aAH0ut7v8YPTi4IvBwJGLOQzVl72dHlDOxgupX6rvhm2c8IURJn04cXMy%2BNiJyri4dQ9uBoyL5F6hQLmqq491auqZoNrMkZ5yJjmVjuVhoRQP%2Brei7PHkOG2zt6g1z4xUDJTh68hdA2nzjHLCZ5B3%2FUsyYySpC7i4EEoKGUkVhJ86k3%2Fm37GsQIBE%2FNHb6mrNOGOsw8tG4wwY6pgGfFaG4Pi%2FcdwhL1B3MgzuUesUkJ73GQ0JglGXCQDhzLKQmUcy8RZaLcpwFePqL3yEPBl5Mwe1i23nz2JKMG%2Bkzy7FnHK6F2LN41QVTsKR3efMzA1P9w6k8c74pabFhyFuHx%2BpcBNZcQ93nzK4vPoSrQFmBmJDnykc4OgWXAivLUH4RdIu1SWKYLxJMi2r5TcvAd9sx51mMUKG2%2BvqGEbQkG5Zx%2FaUY&X-Amz-Signature=d86f711156a6c0103c63db6a1ce1639af83ca5e06f5f4f45df3cf5da038b2957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYUTCZSQ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T091221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYwUO72z%2B2nYvRoA%2FeudOBCk4Nq7%2FY22rd7m5oLNXhKAiBFs0P66Z43pNFzYWUeipFvV4l1yGK6b4048kwMlCERxSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEb68NvvoTwyMOcn7KtwDJrjdbll%2Bubn8s%2BKUCTTOXj0pFp3FWZwY4BP8f2ShVpgpuqcCUKHkpQuXdDWGf2fnjpEc4nJR6JSM7yaqezYgyD6xjX6LOm8dP%2BaGmHhaLluwkU54Zne%2FoJm53fKi%2BHtAmzHd2bgGdEYwGpo%2F2b4WDqHovX%2Baz5gBi1HTkOQGQf3mE6bhSboWUTAt%2BfnOUkL%2B%2BoXFS%2FgHtDV%2B8EjMCIAL%2Fi9p7T5%2BuNEPb9qsGo5KAOwBazdg15KE%2BC7ZUh76Vfk8BAkz35DMcw3ogceHxXfrcctXa2zlmvApOS9BaxOvrEiyMp16TPTY2RwGE%2Fe%2BRtgC8FxyXHzllkLed7xLh1xNUVj289tybKuwavNekNBmRqcVVDf4F4Jr8YHWfYL64%2B1W%2BFeulUMaEtDIBQ0J1WZKBTahwm3LKz51N53AfFvMsRjstmuT0c6ka5aAH0ut7v8YPTi4IvBwJGLOQzVl72dHlDOxgupX6rvhm2c8IURJn04cXMy%2BNiJyri4dQ9uBoyL5F6hQLmqq491auqZoNrMkZ5yJjmVjuVhoRQP%2Brei7PHkOG2zt6g1z4xUDJTh68hdA2nzjHLCZ5B3%2FUsyYySpC7i4EEoKGUkVhJ86k3%2Fm37GsQIBE%2FNHb6mrNOGOsw8tG4wwY6pgGfFaG4Pi%2FcdwhL1B3MgzuUesUkJ73GQ0JglGXCQDhzLKQmUcy8RZaLcpwFePqL3yEPBl5Mwe1i23nz2JKMG%2Bkzy7FnHK6F2LN41QVTsKR3efMzA1P9w6k8c74pabFhyFuHx%2BpcBNZcQ93nzK4vPoSrQFmBmJDnykc4OgWXAivLUH4RdIu1SWKYLxJMi2r5TcvAd9sx51mMUKG2%2BvqGEbQkG5Zx%2FaUY&X-Amz-Signature=c63a341727cb73885e3550fb77ce7d163dc53ddc2af598a9e684c9b0cc039b68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYUTCZSQ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T091221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYwUO72z%2B2nYvRoA%2FeudOBCk4Nq7%2FY22rd7m5oLNXhKAiBFs0P66Z43pNFzYWUeipFvV4l1yGK6b4048kwMlCERxSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEb68NvvoTwyMOcn7KtwDJrjdbll%2Bubn8s%2BKUCTTOXj0pFp3FWZwY4BP8f2ShVpgpuqcCUKHkpQuXdDWGf2fnjpEc4nJR6JSM7yaqezYgyD6xjX6LOm8dP%2BaGmHhaLluwkU54Zne%2FoJm53fKi%2BHtAmzHd2bgGdEYwGpo%2F2b4WDqHovX%2Baz5gBi1HTkOQGQf3mE6bhSboWUTAt%2BfnOUkL%2B%2BoXFS%2FgHtDV%2B8EjMCIAL%2Fi9p7T5%2BuNEPb9qsGo5KAOwBazdg15KE%2BC7ZUh76Vfk8BAkz35DMcw3ogceHxXfrcctXa2zlmvApOS9BaxOvrEiyMp16TPTY2RwGE%2Fe%2BRtgC8FxyXHzllkLed7xLh1xNUVj289tybKuwavNekNBmRqcVVDf4F4Jr8YHWfYL64%2B1W%2BFeulUMaEtDIBQ0J1WZKBTahwm3LKz51N53AfFvMsRjstmuT0c6ka5aAH0ut7v8YPTi4IvBwJGLOQzVl72dHlDOxgupX6rvhm2c8IURJn04cXMy%2BNiJyri4dQ9uBoyL5F6hQLmqq491auqZoNrMkZ5yJjmVjuVhoRQP%2Brei7PHkOG2zt6g1z4xUDJTh68hdA2nzjHLCZ5B3%2FUsyYySpC7i4EEoKGUkVhJ86k3%2Fm37GsQIBE%2FNHb6mrNOGOsw8tG4wwY6pgGfFaG4Pi%2FcdwhL1B3MgzuUesUkJ73GQ0JglGXCQDhzLKQmUcy8RZaLcpwFePqL3yEPBl5Mwe1i23nz2JKMG%2Bkzy7FnHK6F2LN41QVTsKR3efMzA1P9w6k8c74pabFhyFuHx%2BpcBNZcQ93nzK4vPoSrQFmBmJDnykc4OgWXAivLUH4RdIu1SWKYLxJMi2r5TcvAd9sx51mMUKG2%2BvqGEbQkG5Zx%2FaUY&X-Amz-Signature=efd4ebd5bc8e680f14e8cc78351ac206c75a7289554b71e9b26ff484cbb6d840&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYUTCZSQ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T091221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYwUO72z%2B2nYvRoA%2FeudOBCk4Nq7%2FY22rd7m5oLNXhKAiBFs0P66Z43pNFzYWUeipFvV4l1yGK6b4048kwMlCERxSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEb68NvvoTwyMOcn7KtwDJrjdbll%2Bubn8s%2BKUCTTOXj0pFp3FWZwY4BP8f2ShVpgpuqcCUKHkpQuXdDWGf2fnjpEc4nJR6JSM7yaqezYgyD6xjX6LOm8dP%2BaGmHhaLluwkU54Zne%2FoJm53fKi%2BHtAmzHd2bgGdEYwGpo%2F2b4WDqHovX%2Baz5gBi1HTkOQGQf3mE6bhSboWUTAt%2BfnOUkL%2B%2BoXFS%2FgHtDV%2B8EjMCIAL%2Fi9p7T5%2BuNEPb9qsGo5KAOwBazdg15KE%2BC7ZUh76Vfk8BAkz35DMcw3ogceHxXfrcctXa2zlmvApOS9BaxOvrEiyMp16TPTY2RwGE%2Fe%2BRtgC8FxyXHzllkLed7xLh1xNUVj289tybKuwavNekNBmRqcVVDf4F4Jr8YHWfYL64%2B1W%2BFeulUMaEtDIBQ0J1WZKBTahwm3LKz51N53AfFvMsRjstmuT0c6ka5aAH0ut7v8YPTi4IvBwJGLOQzVl72dHlDOxgupX6rvhm2c8IURJn04cXMy%2BNiJyri4dQ9uBoyL5F6hQLmqq491auqZoNrMkZ5yJjmVjuVhoRQP%2Brei7PHkOG2zt6g1z4xUDJTh68hdA2nzjHLCZ5B3%2FUsyYySpC7i4EEoKGUkVhJ86k3%2Fm37GsQIBE%2FNHb6mrNOGOsw8tG4wwY6pgGfFaG4Pi%2FcdwhL1B3MgzuUesUkJ73GQ0JglGXCQDhzLKQmUcy8RZaLcpwFePqL3yEPBl5Mwe1i23nz2JKMG%2Bkzy7FnHK6F2LN41QVTsKR3efMzA1P9w6k8c74pabFhyFuHx%2BpcBNZcQ93nzK4vPoSrQFmBmJDnykc4OgWXAivLUH4RdIu1SWKYLxJMi2r5TcvAd9sx51mMUKG2%2BvqGEbQkG5Zx%2FaUY&X-Amz-Signature=53118b4b6524a20fb53b6fb1ceecc4275c953671ada56cc136ce2a28bc49735c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYUTCZSQ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T091221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYwUO72z%2B2nYvRoA%2FeudOBCk4Nq7%2FY22rd7m5oLNXhKAiBFs0P66Z43pNFzYWUeipFvV4l1yGK6b4048kwMlCERxSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEb68NvvoTwyMOcn7KtwDJrjdbll%2Bubn8s%2BKUCTTOXj0pFp3FWZwY4BP8f2ShVpgpuqcCUKHkpQuXdDWGf2fnjpEc4nJR6JSM7yaqezYgyD6xjX6LOm8dP%2BaGmHhaLluwkU54Zne%2FoJm53fKi%2BHtAmzHd2bgGdEYwGpo%2F2b4WDqHovX%2Baz5gBi1HTkOQGQf3mE6bhSboWUTAt%2BfnOUkL%2B%2BoXFS%2FgHtDV%2B8EjMCIAL%2Fi9p7T5%2BuNEPb9qsGo5KAOwBazdg15KE%2BC7ZUh76Vfk8BAkz35DMcw3ogceHxXfrcctXa2zlmvApOS9BaxOvrEiyMp16TPTY2RwGE%2Fe%2BRtgC8FxyXHzllkLed7xLh1xNUVj289tybKuwavNekNBmRqcVVDf4F4Jr8YHWfYL64%2B1W%2BFeulUMaEtDIBQ0J1WZKBTahwm3LKz51N53AfFvMsRjstmuT0c6ka5aAH0ut7v8YPTi4IvBwJGLOQzVl72dHlDOxgupX6rvhm2c8IURJn04cXMy%2BNiJyri4dQ9uBoyL5F6hQLmqq491auqZoNrMkZ5yJjmVjuVhoRQP%2Brei7PHkOG2zt6g1z4xUDJTh68hdA2nzjHLCZ5B3%2FUsyYySpC7i4EEoKGUkVhJ86k3%2Fm37GsQIBE%2FNHb6mrNOGOsw8tG4wwY6pgGfFaG4Pi%2FcdwhL1B3MgzuUesUkJ73GQ0JglGXCQDhzLKQmUcy8RZaLcpwFePqL3yEPBl5Mwe1i23nz2JKMG%2Bkzy7FnHK6F2LN41QVTsKR3efMzA1P9w6k8c74pabFhyFuHx%2BpcBNZcQ93nzK4vPoSrQFmBmJDnykc4OgWXAivLUH4RdIu1SWKYLxJMi2r5TcvAd9sx51mMUKG2%2BvqGEbQkG5Zx%2FaUY&X-Amz-Signature=9e5b4940c92e91f4d4a9933915f58a8f7ab79c5485fe15759054855a02ee7841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYUTCZSQ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T091221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYwUO72z%2B2nYvRoA%2FeudOBCk4Nq7%2FY22rd7m5oLNXhKAiBFs0P66Z43pNFzYWUeipFvV4l1yGK6b4048kwMlCERxSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEb68NvvoTwyMOcn7KtwDJrjdbll%2Bubn8s%2BKUCTTOXj0pFp3FWZwY4BP8f2ShVpgpuqcCUKHkpQuXdDWGf2fnjpEc4nJR6JSM7yaqezYgyD6xjX6LOm8dP%2BaGmHhaLluwkU54Zne%2FoJm53fKi%2BHtAmzHd2bgGdEYwGpo%2F2b4WDqHovX%2Baz5gBi1HTkOQGQf3mE6bhSboWUTAt%2BfnOUkL%2B%2BoXFS%2FgHtDV%2B8EjMCIAL%2Fi9p7T5%2BuNEPb9qsGo5KAOwBazdg15KE%2BC7ZUh76Vfk8BAkz35DMcw3ogceHxXfrcctXa2zlmvApOS9BaxOvrEiyMp16TPTY2RwGE%2Fe%2BRtgC8FxyXHzllkLed7xLh1xNUVj289tybKuwavNekNBmRqcVVDf4F4Jr8YHWfYL64%2B1W%2BFeulUMaEtDIBQ0J1WZKBTahwm3LKz51N53AfFvMsRjstmuT0c6ka5aAH0ut7v8YPTi4IvBwJGLOQzVl72dHlDOxgupX6rvhm2c8IURJn04cXMy%2BNiJyri4dQ9uBoyL5F6hQLmqq491auqZoNrMkZ5yJjmVjuVhoRQP%2Brei7PHkOG2zt6g1z4xUDJTh68hdA2nzjHLCZ5B3%2FUsyYySpC7i4EEoKGUkVhJ86k3%2Fm37GsQIBE%2FNHb6mrNOGOsw8tG4wwY6pgGfFaG4Pi%2FcdwhL1B3MgzuUesUkJ73GQ0JglGXCQDhzLKQmUcy8RZaLcpwFePqL3yEPBl5Mwe1i23nz2JKMG%2Bkzy7FnHK6F2LN41QVTsKR3efMzA1P9w6k8c74pabFhyFuHx%2BpcBNZcQ93nzK4vPoSrQFmBmJDnykc4OgWXAivLUH4RdIu1SWKYLxJMi2r5TcvAd9sx51mMUKG2%2BvqGEbQkG5Zx%2FaUY&X-Amz-Signature=7d939533817f1a2d11cfd68982a8e4095d100bdf760a8719ad4a15d5249843c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYUTCZSQ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T091221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYwUO72z%2B2nYvRoA%2FeudOBCk4Nq7%2FY22rd7m5oLNXhKAiBFs0P66Z43pNFzYWUeipFvV4l1yGK6b4048kwMlCERxSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEb68NvvoTwyMOcn7KtwDJrjdbll%2Bubn8s%2BKUCTTOXj0pFp3FWZwY4BP8f2ShVpgpuqcCUKHkpQuXdDWGf2fnjpEc4nJR6JSM7yaqezYgyD6xjX6LOm8dP%2BaGmHhaLluwkU54Zne%2FoJm53fKi%2BHtAmzHd2bgGdEYwGpo%2F2b4WDqHovX%2Baz5gBi1HTkOQGQf3mE6bhSboWUTAt%2BfnOUkL%2B%2BoXFS%2FgHtDV%2B8EjMCIAL%2Fi9p7T5%2BuNEPb9qsGo5KAOwBazdg15KE%2BC7ZUh76Vfk8BAkz35DMcw3ogceHxXfrcctXa2zlmvApOS9BaxOvrEiyMp16TPTY2RwGE%2Fe%2BRtgC8FxyXHzllkLed7xLh1xNUVj289tybKuwavNekNBmRqcVVDf4F4Jr8YHWfYL64%2B1W%2BFeulUMaEtDIBQ0J1WZKBTahwm3LKz51N53AfFvMsRjstmuT0c6ka5aAH0ut7v8YPTi4IvBwJGLOQzVl72dHlDOxgupX6rvhm2c8IURJn04cXMy%2BNiJyri4dQ9uBoyL5F6hQLmqq491auqZoNrMkZ5yJjmVjuVhoRQP%2Brei7PHkOG2zt6g1z4xUDJTh68hdA2nzjHLCZ5B3%2FUsyYySpC7i4EEoKGUkVhJ86k3%2Fm37GsQIBE%2FNHb6mrNOGOsw8tG4wwY6pgGfFaG4Pi%2FcdwhL1B3MgzuUesUkJ73GQ0JglGXCQDhzLKQmUcy8RZaLcpwFePqL3yEPBl5Mwe1i23nz2JKMG%2Bkzy7FnHK6F2LN41QVTsKR3efMzA1P9w6k8c74pabFhyFuHx%2BpcBNZcQ93nzK4vPoSrQFmBmJDnykc4OgWXAivLUH4RdIu1SWKYLxJMi2r5TcvAd9sx51mMUKG2%2BvqGEbQkG5Zx%2FaUY&X-Amz-Signature=5f0e8042afdd8f38ab0875c0ec934aa7e5dd112574f2b7a9edab197b9a22312d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
