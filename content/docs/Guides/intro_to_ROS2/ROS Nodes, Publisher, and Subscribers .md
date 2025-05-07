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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YNPPT7W%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEF8F2E%2FMgkLnq%2BzecNzvqRFKF5EQ3s2NP5lh22CHljnAiBN%2B0XzTzGFYibSrZEhKtJ29LO1Nw16sTMPq83aZczi5ir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM2w0Pr5aeX7CgFhKqKtwDhmX7EHYkCzzo%2FIOXWhyKK0G7b2Fi6UrCcj7Hl2UZ0JaxNtUh5%2BLMpYhh%2FJ1o4noMSwZFTFBR82r36amUH3ubVHq9o70Z%2B51oqsnJXGrkGVe4EV57zHaMSfZhwoOSpFqmJjaYcW5cPDbkzinj1P6i9d64Wzpn%2BQq86qJgwu1J9Njl7buYOli%2B4cxT%2BVNlwGHls77OKLs6WsReyU2sojZIoOMAKOYrzK4gZZaT8DWrnSBnBWvTI9S%2FWqunG3TgiKTQBw3Z0JJ%2BjC4nmg%2Fgi5fsSuMiMy%2B7WotLJ5uqCuCuoyYKMbD8pPrCh4ns%2Fm6levCAZLYH61DhHRIHrnJsvd9AqLXLnUSmqejZknHnHPRUQwbON3jKvxFt9xZKBya3StCvcBzYzS9EfuaQTCfLDiXT97SQv%2BWItF4WDXHSMmFgnhh%2BIqc%2FJTG%2B58hCBcyA0Xu7O06mfPcCYvCYcm9qAX0zoboXXudERmd%2F2RzO8burlmHkfcr3D7msJn7ad1kXuWgVbmak5jiRTWKVi98Tk4si44n%2BDV1PQEc%2FJU3FtMXULcfneOhvucwBpVWAa5cjr22%2Bn8F%2FZlJYudimJB3eIZfZrTouYwcrGOfdUOsBDQAgCJ7OqFf6LPUjTkSsahQw%2Fq7qwAY6pgG4XFtRgRIaNRGs2OnudLRiaim1LwHV9FpEHVZbFDtGU5TaIBUKauaUgejyTCTRsReyAhBoLrCulKcv8EiRR7eZe%2FqRF5cNiDH0FteArG9OhF3vrlSBQ0St7O4rBWS4WFynivg86y89G8xSvJ9fwwxsO58%2FgBlvzJ2eNyam1dQGLwh0gDuNtmnu7uSPW8uMihlSLGaSmL6MuchekfCpi5FI%2Fwi7To%2B%2F&X-Amz-Signature=53e32f2088f777b6c7495fcca07cc29968d843b86a032bacc259b796d147346e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YNPPT7W%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEF8F2E%2FMgkLnq%2BzecNzvqRFKF5EQ3s2NP5lh22CHljnAiBN%2B0XzTzGFYibSrZEhKtJ29LO1Nw16sTMPq83aZczi5ir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM2w0Pr5aeX7CgFhKqKtwDhmX7EHYkCzzo%2FIOXWhyKK0G7b2Fi6UrCcj7Hl2UZ0JaxNtUh5%2BLMpYhh%2FJ1o4noMSwZFTFBR82r36amUH3ubVHq9o70Z%2B51oqsnJXGrkGVe4EV57zHaMSfZhwoOSpFqmJjaYcW5cPDbkzinj1P6i9d64Wzpn%2BQq86qJgwu1J9Njl7buYOli%2B4cxT%2BVNlwGHls77OKLs6WsReyU2sojZIoOMAKOYrzK4gZZaT8DWrnSBnBWvTI9S%2FWqunG3TgiKTQBw3Z0JJ%2BjC4nmg%2Fgi5fsSuMiMy%2B7WotLJ5uqCuCuoyYKMbD8pPrCh4ns%2Fm6levCAZLYH61DhHRIHrnJsvd9AqLXLnUSmqejZknHnHPRUQwbON3jKvxFt9xZKBya3StCvcBzYzS9EfuaQTCfLDiXT97SQv%2BWItF4WDXHSMmFgnhh%2BIqc%2FJTG%2B58hCBcyA0Xu7O06mfPcCYvCYcm9qAX0zoboXXudERmd%2F2RzO8burlmHkfcr3D7msJn7ad1kXuWgVbmak5jiRTWKVi98Tk4si44n%2BDV1PQEc%2FJU3FtMXULcfneOhvucwBpVWAa5cjr22%2Bn8F%2FZlJYudimJB3eIZfZrTouYwcrGOfdUOsBDQAgCJ7OqFf6LPUjTkSsahQw%2Fq7qwAY6pgG4XFtRgRIaNRGs2OnudLRiaim1LwHV9FpEHVZbFDtGU5TaIBUKauaUgejyTCTRsReyAhBoLrCulKcv8EiRR7eZe%2FqRF5cNiDH0FteArG9OhF3vrlSBQ0St7O4rBWS4WFynivg86y89G8xSvJ9fwwxsO58%2FgBlvzJ2eNyam1dQGLwh0gDuNtmnu7uSPW8uMihlSLGaSmL6MuchekfCpi5FI%2Fwi7To%2B%2F&X-Amz-Signature=08dfd0decc7f080d0eb68969350a492c2ea4b2aa0a30db776a983d96ce99117b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YNPPT7W%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEF8F2E%2FMgkLnq%2BzecNzvqRFKF5EQ3s2NP5lh22CHljnAiBN%2B0XzTzGFYibSrZEhKtJ29LO1Nw16sTMPq83aZczi5ir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM2w0Pr5aeX7CgFhKqKtwDhmX7EHYkCzzo%2FIOXWhyKK0G7b2Fi6UrCcj7Hl2UZ0JaxNtUh5%2BLMpYhh%2FJ1o4noMSwZFTFBR82r36amUH3ubVHq9o70Z%2B51oqsnJXGrkGVe4EV57zHaMSfZhwoOSpFqmJjaYcW5cPDbkzinj1P6i9d64Wzpn%2BQq86qJgwu1J9Njl7buYOli%2B4cxT%2BVNlwGHls77OKLs6WsReyU2sojZIoOMAKOYrzK4gZZaT8DWrnSBnBWvTI9S%2FWqunG3TgiKTQBw3Z0JJ%2BjC4nmg%2Fgi5fsSuMiMy%2B7WotLJ5uqCuCuoyYKMbD8pPrCh4ns%2Fm6levCAZLYH61DhHRIHrnJsvd9AqLXLnUSmqejZknHnHPRUQwbON3jKvxFt9xZKBya3StCvcBzYzS9EfuaQTCfLDiXT97SQv%2BWItF4WDXHSMmFgnhh%2BIqc%2FJTG%2B58hCBcyA0Xu7O06mfPcCYvCYcm9qAX0zoboXXudERmd%2F2RzO8burlmHkfcr3D7msJn7ad1kXuWgVbmak5jiRTWKVi98Tk4si44n%2BDV1PQEc%2FJU3FtMXULcfneOhvucwBpVWAa5cjr22%2Bn8F%2FZlJYudimJB3eIZfZrTouYwcrGOfdUOsBDQAgCJ7OqFf6LPUjTkSsahQw%2Fq7qwAY6pgG4XFtRgRIaNRGs2OnudLRiaim1LwHV9FpEHVZbFDtGU5TaIBUKauaUgejyTCTRsReyAhBoLrCulKcv8EiRR7eZe%2FqRF5cNiDH0FteArG9OhF3vrlSBQ0St7O4rBWS4WFynivg86y89G8xSvJ9fwwxsO58%2FgBlvzJ2eNyam1dQGLwh0gDuNtmnu7uSPW8uMihlSLGaSmL6MuchekfCpi5FI%2Fwi7To%2B%2F&X-Amz-Signature=c298273f9b526506349a1c86c8c55e92d2a4b006c876ab8e74108d7163177bfa&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YNPPT7W%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEF8F2E%2FMgkLnq%2BzecNzvqRFKF5EQ3s2NP5lh22CHljnAiBN%2B0XzTzGFYibSrZEhKtJ29LO1Nw16sTMPq83aZczi5ir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM2w0Pr5aeX7CgFhKqKtwDhmX7EHYkCzzo%2FIOXWhyKK0G7b2Fi6UrCcj7Hl2UZ0JaxNtUh5%2BLMpYhh%2FJ1o4noMSwZFTFBR82r36amUH3ubVHq9o70Z%2B51oqsnJXGrkGVe4EV57zHaMSfZhwoOSpFqmJjaYcW5cPDbkzinj1P6i9d64Wzpn%2BQq86qJgwu1J9Njl7buYOli%2B4cxT%2BVNlwGHls77OKLs6WsReyU2sojZIoOMAKOYrzK4gZZaT8DWrnSBnBWvTI9S%2FWqunG3TgiKTQBw3Z0JJ%2BjC4nmg%2Fgi5fsSuMiMy%2B7WotLJ5uqCuCuoyYKMbD8pPrCh4ns%2Fm6levCAZLYH61DhHRIHrnJsvd9AqLXLnUSmqejZknHnHPRUQwbON3jKvxFt9xZKBya3StCvcBzYzS9EfuaQTCfLDiXT97SQv%2BWItF4WDXHSMmFgnhh%2BIqc%2FJTG%2B58hCBcyA0Xu7O06mfPcCYvCYcm9qAX0zoboXXudERmd%2F2RzO8burlmHkfcr3D7msJn7ad1kXuWgVbmak5jiRTWKVi98Tk4si44n%2BDV1PQEc%2FJU3FtMXULcfneOhvucwBpVWAa5cjr22%2Bn8F%2FZlJYudimJB3eIZfZrTouYwcrGOfdUOsBDQAgCJ7OqFf6LPUjTkSsahQw%2Fq7qwAY6pgG4XFtRgRIaNRGs2OnudLRiaim1LwHV9FpEHVZbFDtGU5TaIBUKauaUgejyTCTRsReyAhBoLrCulKcv8EiRR7eZe%2FqRF5cNiDH0FteArG9OhF3vrlSBQ0St7O4rBWS4WFynivg86y89G8xSvJ9fwwxsO58%2FgBlvzJ2eNyam1dQGLwh0gDuNtmnu7uSPW8uMihlSLGaSmL6MuchekfCpi5FI%2Fwi7To%2B%2F&X-Amz-Signature=41a5076b40f0ab2e4a7a490c4858214ebfb11feba02d542f31e928d7e415f96e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YNPPT7W%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEF8F2E%2FMgkLnq%2BzecNzvqRFKF5EQ3s2NP5lh22CHljnAiBN%2B0XzTzGFYibSrZEhKtJ29LO1Nw16sTMPq83aZczi5ir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM2w0Pr5aeX7CgFhKqKtwDhmX7EHYkCzzo%2FIOXWhyKK0G7b2Fi6UrCcj7Hl2UZ0JaxNtUh5%2BLMpYhh%2FJ1o4noMSwZFTFBR82r36amUH3ubVHq9o70Z%2B51oqsnJXGrkGVe4EV57zHaMSfZhwoOSpFqmJjaYcW5cPDbkzinj1P6i9d64Wzpn%2BQq86qJgwu1J9Njl7buYOli%2B4cxT%2BVNlwGHls77OKLs6WsReyU2sojZIoOMAKOYrzK4gZZaT8DWrnSBnBWvTI9S%2FWqunG3TgiKTQBw3Z0JJ%2BjC4nmg%2Fgi5fsSuMiMy%2B7WotLJ5uqCuCuoyYKMbD8pPrCh4ns%2Fm6levCAZLYH61DhHRIHrnJsvd9AqLXLnUSmqejZknHnHPRUQwbON3jKvxFt9xZKBya3StCvcBzYzS9EfuaQTCfLDiXT97SQv%2BWItF4WDXHSMmFgnhh%2BIqc%2FJTG%2B58hCBcyA0Xu7O06mfPcCYvCYcm9qAX0zoboXXudERmd%2F2RzO8burlmHkfcr3D7msJn7ad1kXuWgVbmak5jiRTWKVi98Tk4si44n%2BDV1PQEc%2FJU3FtMXULcfneOhvucwBpVWAa5cjr22%2Bn8F%2FZlJYudimJB3eIZfZrTouYwcrGOfdUOsBDQAgCJ7OqFf6LPUjTkSsahQw%2Fq7qwAY6pgG4XFtRgRIaNRGs2OnudLRiaim1LwHV9FpEHVZbFDtGU5TaIBUKauaUgejyTCTRsReyAhBoLrCulKcv8EiRR7eZe%2FqRF5cNiDH0FteArG9OhF3vrlSBQ0St7O4rBWS4WFynivg86y89G8xSvJ9fwwxsO58%2FgBlvzJ2eNyam1dQGLwh0gDuNtmnu7uSPW8uMihlSLGaSmL6MuchekfCpi5FI%2Fwi7To%2B%2F&X-Amz-Signature=5349d286d7e116285332bbc7370934e6b488d8ae7a57bba4b01c5341f9da961d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YNPPT7W%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEF8F2E%2FMgkLnq%2BzecNzvqRFKF5EQ3s2NP5lh22CHljnAiBN%2B0XzTzGFYibSrZEhKtJ29LO1Nw16sTMPq83aZczi5ir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM2w0Pr5aeX7CgFhKqKtwDhmX7EHYkCzzo%2FIOXWhyKK0G7b2Fi6UrCcj7Hl2UZ0JaxNtUh5%2BLMpYhh%2FJ1o4noMSwZFTFBR82r36amUH3ubVHq9o70Z%2B51oqsnJXGrkGVe4EV57zHaMSfZhwoOSpFqmJjaYcW5cPDbkzinj1P6i9d64Wzpn%2BQq86qJgwu1J9Njl7buYOli%2B4cxT%2BVNlwGHls77OKLs6WsReyU2sojZIoOMAKOYrzK4gZZaT8DWrnSBnBWvTI9S%2FWqunG3TgiKTQBw3Z0JJ%2BjC4nmg%2Fgi5fsSuMiMy%2B7WotLJ5uqCuCuoyYKMbD8pPrCh4ns%2Fm6levCAZLYH61DhHRIHrnJsvd9AqLXLnUSmqejZknHnHPRUQwbON3jKvxFt9xZKBya3StCvcBzYzS9EfuaQTCfLDiXT97SQv%2BWItF4WDXHSMmFgnhh%2BIqc%2FJTG%2B58hCBcyA0Xu7O06mfPcCYvCYcm9qAX0zoboXXudERmd%2F2RzO8burlmHkfcr3D7msJn7ad1kXuWgVbmak5jiRTWKVi98Tk4si44n%2BDV1PQEc%2FJU3FtMXULcfneOhvucwBpVWAa5cjr22%2Bn8F%2FZlJYudimJB3eIZfZrTouYwcrGOfdUOsBDQAgCJ7OqFf6LPUjTkSsahQw%2Fq7qwAY6pgG4XFtRgRIaNRGs2OnudLRiaim1LwHV9FpEHVZbFDtGU5TaIBUKauaUgejyTCTRsReyAhBoLrCulKcv8EiRR7eZe%2FqRF5cNiDH0FteArG9OhF3vrlSBQ0St7O4rBWS4WFynivg86y89G8xSvJ9fwwxsO58%2FgBlvzJ2eNyam1dQGLwh0gDuNtmnu7uSPW8uMihlSLGaSmL6MuchekfCpi5FI%2Fwi7To%2B%2F&X-Amz-Signature=96e7e4e32135d9f420e7bd9d3bc820557d0e1d5ce8106cd40913ecd4a1297710&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YNPPT7W%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEF8F2E%2FMgkLnq%2BzecNzvqRFKF5EQ3s2NP5lh22CHljnAiBN%2B0XzTzGFYibSrZEhKtJ29LO1Nw16sTMPq83aZczi5ir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM2w0Pr5aeX7CgFhKqKtwDhmX7EHYkCzzo%2FIOXWhyKK0G7b2Fi6UrCcj7Hl2UZ0JaxNtUh5%2BLMpYhh%2FJ1o4noMSwZFTFBR82r36amUH3ubVHq9o70Z%2B51oqsnJXGrkGVe4EV57zHaMSfZhwoOSpFqmJjaYcW5cPDbkzinj1P6i9d64Wzpn%2BQq86qJgwu1J9Njl7buYOli%2B4cxT%2BVNlwGHls77OKLs6WsReyU2sojZIoOMAKOYrzK4gZZaT8DWrnSBnBWvTI9S%2FWqunG3TgiKTQBw3Z0JJ%2BjC4nmg%2Fgi5fsSuMiMy%2B7WotLJ5uqCuCuoyYKMbD8pPrCh4ns%2Fm6levCAZLYH61DhHRIHrnJsvd9AqLXLnUSmqejZknHnHPRUQwbON3jKvxFt9xZKBya3StCvcBzYzS9EfuaQTCfLDiXT97SQv%2BWItF4WDXHSMmFgnhh%2BIqc%2FJTG%2B58hCBcyA0Xu7O06mfPcCYvCYcm9qAX0zoboXXudERmd%2F2RzO8burlmHkfcr3D7msJn7ad1kXuWgVbmak5jiRTWKVi98Tk4si44n%2BDV1PQEc%2FJU3FtMXULcfneOhvucwBpVWAa5cjr22%2Bn8F%2FZlJYudimJB3eIZfZrTouYwcrGOfdUOsBDQAgCJ7OqFf6LPUjTkSsahQw%2Fq7qwAY6pgG4XFtRgRIaNRGs2OnudLRiaim1LwHV9FpEHVZbFDtGU5TaIBUKauaUgejyTCTRsReyAhBoLrCulKcv8EiRR7eZe%2FqRF5cNiDH0FteArG9OhF3vrlSBQ0St7O4rBWS4WFynivg86y89G8xSvJ9fwwxsO58%2FgBlvzJ2eNyam1dQGLwh0gDuNtmnu7uSPW8uMihlSLGaSmL6MuchekfCpi5FI%2Fwi7To%2B%2F&X-Amz-Signature=7dcbdbad6fe28f6992fbb01c4ba9ec59ddb2afd21dc40105b9bd06e32bee8b80&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YNPPT7W%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEF8F2E%2FMgkLnq%2BzecNzvqRFKF5EQ3s2NP5lh22CHljnAiBN%2B0XzTzGFYibSrZEhKtJ29LO1Nw16sTMPq83aZczi5ir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM2w0Pr5aeX7CgFhKqKtwDhmX7EHYkCzzo%2FIOXWhyKK0G7b2Fi6UrCcj7Hl2UZ0JaxNtUh5%2BLMpYhh%2FJ1o4noMSwZFTFBR82r36amUH3ubVHq9o70Z%2B51oqsnJXGrkGVe4EV57zHaMSfZhwoOSpFqmJjaYcW5cPDbkzinj1P6i9d64Wzpn%2BQq86qJgwu1J9Njl7buYOli%2B4cxT%2BVNlwGHls77OKLs6WsReyU2sojZIoOMAKOYrzK4gZZaT8DWrnSBnBWvTI9S%2FWqunG3TgiKTQBw3Z0JJ%2BjC4nmg%2Fgi5fsSuMiMy%2B7WotLJ5uqCuCuoyYKMbD8pPrCh4ns%2Fm6levCAZLYH61DhHRIHrnJsvd9AqLXLnUSmqejZknHnHPRUQwbON3jKvxFt9xZKBya3StCvcBzYzS9EfuaQTCfLDiXT97SQv%2BWItF4WDXHSMmFgnhh%2BIqc%2FJTG%2B58hCBcyA0Xu7O06mfPcCYvCYcm9qAX0zoboXXudERmd%2F2RzO8burlmHkfcr3D7msJn7ad1kXuWgVbmak5jiRTWKVi98Tk4si44n%2BDV1PQEc%2FJU3FtMXULcfneOhvucwBpVWAa5cjr22%2Bn8F%2FZlJYudimJB3eIZfZrTouYwcrGOfdUOsBDQAgCJ7OqFf6LPUjTkSsahQw%2Fq7qwAY6pgG4XFtRgRIaNRGs2OnudLRiaim1LwHV9FpEHVZbFDtGU5TaIBUKauaUgejyTCTRsReyAhBoLrCulKcv8EiRR7eZe%2FqRF5cNiDH0FteArG9OhF3vrlSBQ0St7O4rBWS4WFynivg86y89G8xSvJ9fwwxsO58%2FgBlvzJ2eNyam1dQGLwh0gDuNtmnu7uSPW8uMihlSLGaSmL6MuchekfCpi5FI%2Fwi7To%2B%2F&X-Amz-Signature=569b87065295725a2f21c8d7c2bb0ef6f2ffb70f2b6dde61fea2d9a0e6c6c56f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
