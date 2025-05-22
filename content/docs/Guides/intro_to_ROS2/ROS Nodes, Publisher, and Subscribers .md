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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W5XKQ6F%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCvTqEle%2FqIfIUS%2FyGf8O4OBM6As48fUfK8IBp%2F0sRtbAIgc6j19%2BZxJpXXyThVdxfNRmyaBeT6KW%2BR9xrdJukR6AMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2jCZctd1hmICesGCrcAz%2F9P%2FQD7B9o8MbjRh1ble32H%2FfHrzvbpTsjiY1kMKh0C7BI15Nr4%2BOzQZRK9EIfNT%2Fel2M7TCGi7YVnYkju06rlkMswmPYx6ghBaVxf1yolRrv7tmtiwN0Yc5naM3E0sYbaod56%2FSaccCW0QW3Oj9XMHle5QBkpvMtrA7XwLr%2FM2NHrVSRaxr2dTqvc0w99Fyk%2BeGJua1IATP11i9c%2BvUd3e8wCwUyWC5f%2FRgvfo5dTg2iZXczkFrLm%2F4D2jEOK9l333g%2BcqKXaiv8wJQDbVPN2XomDx8EtYh3PGMPFmJwkbK6voEfxzFyQO5cpo2nr71a6REp1VaEfA%2FW0bhEJ0hWvnTaaW%2FiZssJNo2O0WoAv5WU941a3dGqF2%2Fm6N7DCVaLesUie70mDQ2liJLjksEhpQEkCEYm4ZJyOYX0X1H%2BnyZBjL7kRYdBtnOEMx6PBN1LppRpLU1aKyimztO2vmynU%2B%2BI%2F33L%2F5qbZ5Mudbb8fPXMs06iewi5gMNj4EwqEFyFRo%2BfNjg9%2FE%2B7rJgziRHIFbmhdePjbBoXF7V%2BDW80s6N0uPHVAxBo6QTHpKqMduRYpnCsJ9wR7XOiF0UbrSgtkDWEy%2Bb%2FDikflSYdFmg3b39MHAXYX0uul7i3aMIPhvMEGOqUBfXRKd%2Bq6nEavTRL6MYLeaoSJxntQrHDEn1FAYCERScv1j35tMyMMeDRbJ6VW%2BkNC%2BI4DMPxdwmW4O3GJS9F12SqkUHUbeu9jBCz9OwaNo1G9Wnmif1WysoK4nV87Y8o6Dtt8RMGlPsiL7mVgRpT9WX1qB68b3mDrbjPn6ADtgV3fEfHJFW7YBQotcMgD2r2PdzRcTMosutp3JkKZKmWsntmuQW%2Fj&X-Amz-Signature=d56f5aeeaaeb68a70121b0aef1ef1c0af6b0bbc2bf9611252bad49bb74be0ae7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W5XKQ6F%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCvTqEle%2FqIfIUS%2FyGf8O4OBM6As48fUfK8IBp%2F0sRtbAIgc6j19%2BZxJpXXyThVdxfNRmyaBeT6KW%2BR9xrdJukR6AMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2jCZctd1hmICesGCrcAz%2F9P%2FQD7B9o8MbjRh1ble32H%2FfHrzvbpTsjiY1kMKh0C7BI15Nr4%2BOzQZRK9EIfNT%2Fel2M7TCGi7YVnYkju06rlkMswmPYx6ghBaVxf1yolRrv7tmtiwN0Yc5naM3E0sYbaod56%2FSaccCW0QW3Oj9XMHle5QBkpvMtrA7XwLr%2FM2NHrVSRaxr2dTqvc0w99Fyk%2BeGJua1IATP11i9c%2BvUd3e8wCwUyWC5f%2FRgvfo5dTg2iZXczkFrLm%2F4D2jEOK9l333g%2BcqKXaiv8wJQDbVPN2XomDx8EtYh3PGMPFmJwkbK6voEfxzFyQO5cpo2nr71a6REp1VaEfA%2FW0bhEJ0hWvnTaaW%2FiZssJNo2O0WoAv5WU941a3dGqF2%2Fm6N7DCVaLesUie70mDQ2liJLjksEhpQEkCEYm4ZJyOYX0X1H%2BnyZBjL7kRYdBtnOEMx6PBN1LppRpLU1aKyimztO2vmynU%2B%2BI%2F33L%2F5qbZ5Mudbb8fPXMs06iewi5gMNj4EwqEFyFRo%2BfNjg9%2FE%2B7rJgziRHIFbmhdePjbBoXF7V%2BDW80s6N0uPHVAxBo6QTHpKqMduRYpnCsJ9wR7XOiF0UbrSgtkDWEy%2Bb%2FDikflSYdFmg3b39MHAXYX0uul7i3aMIPhvMEGOqUBfXRKd%2Bq6nEavTRL6MYLeaoSJxntQrHDEn1FAYCERScv1j35tMyMMeDRbJ6VW%2BkNC%2BI4DMPxdwmW4O3GJS9F12SqkUHUbeu9jBCz9OwaNo1G9Wnmif1WysoK4nV87Y8o6Dtt8RMGlPsiL7mVgRpT9WX1qB68b3mDrbjPn6ADtgV3fEfHJFW7YBQotcMgD2r2PdzRcTMosutp3JkKZKmWsntmuQW%2Fj&X-Amz-Signature=32d93e9c0da7e52620dd93e263ee389c88d7b2462b6418d536b7dbd59bc6fe81&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W5XKQ6F%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCvTqEle%2FqIfIUS%2FyGf8O4OBM6As48fUfK8IBp%2F0sRtbAIgc6j19%2BZxJpXXyThVdxfNRmyaBeT6KW%2BR9xrdJukR6AMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2jCZctd1hmICesGCrcAz%2F9P%2FQD7B9o8MbjRh1ble32H%2FfHrzvbpTsjiY1kMKh0C7BI15Nr4%2BOzQZRK9EIfNT%2Fel2M7TCGi7YVnYkju06rlkMswmPYx6ghBaVxf1yolRrv7tmtiwN0Yc5naM3E0sYbaod56%2FSaccCW0QW3Oj9XMHle5QBkpvMtrA7XwLr%2FM2NHrVSRaxr2dTqvc0w99Fyk%2BeGJua1IATP11i9c%2BvUd3e8wCwUyWC5f%2FRgvfo5dTg2iZXczkFrLm%2F4D2jEOK9l333g%2BcqKXaiv8wJQDbVPN2XomDx8EtYh3PGMPFmJwkbK6voEfxzFyQO5cpo2nr71a6REp1VaEfA%2FW0bhEJ0hWvnTaaW%2FiZssJNo2O0WoAv5WU941a3dGqF2%2Fm6N7DCVaLesUie70mDQ2liJLjksEhpQEkCEYm4ZJyOYX0X1H%2BnyZBjL7kRYdBtnOEMx6PBN1LppRpLU1aKyimztO2vmynU%2B%2BI%2F33L%2F5qbZ5Mudbb8fPXMs06iewi5gMNj4EwqEFyFRo%2BfNjg9%2FE%2B7rJgziRHIFbmhdePjbBoXF7V%2BDW80s6N0uPHVAxBo6QTHpKqMduRYpnCsJ9wR7XOiF0UbrSgtkDWEy%2Bb%2FDikflSYdFmg3b39MHAXYX0uul7i3aMIPhvMEGOqUBfXRKd%2Bq6nEavTRL6MYLeaoSJxntQrHDEn1FAYCERScv1j35tMyMMeDRbJ6VW%2BkNC%2BI4DMPxdwmW4O3GJS9F12SqkUHUbeu9jBCz9OwaNo1G9Wnmif1WysoK4nV87Y8o6Dtt8RMGlPsiL7mVgRpT9WX1qB68b3mDrbjPn6ADtgV3fEfHJFW7YBQotcMgD2r2PdzRcTMosutp3JkKZKmWsntmuQW%2Fj&X-Amz-Signature=4f1ff1f9043f9aee46aa33ae126528b16733f78deed59b5d9c9412452e164476&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W5XKQ6F%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCvTqEle%2FqIfIUS%2FyGf8O4OBM6As48fUfK8IBp%2F0sRtbAIgc6j19%2BZxJpXXyThVdxfNRmyaBeT6KW%2BR9xrdJukR6AMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2jCZctd1hmICesGCrcAz%2F9P%2FQD7B9o8MbjRh1ble32H%2FfHrzvbpTsjiY1kMKh0C7BI15Nr4%2BOzQZRK9EIfNT%2Fel2M7TCGi7YVnYkju06rlkMswmPYx6ghBaVxf1yolRrv7tmtiwN0Yc5naM3E0sYbaod56%2FSaccCW0QW3Oj9XMHle5QBkpvMtrA7XwLr%2FM2NHrVSRaxr2dTqvc0w99Fyk%2BeGJua1IATP11i9c%2BvUd3e8wCwUyWC5f%2FRgvfo5dTg2iZXczkFrLm%2F4D2jEOK9l333g%2BcqKXaiv8wJQDbVPN2XomDx8EtYh3PGMPFmJwkbK6voEfxzFyQO5cpo2nr71a6REp1VaEfA%2FW0bhEJ0hWvnTaaW%2FiZssJNo2O0WoAv5WU941a3dGqF2%2Fm6N7DCVaLesUie70mDQ2liJLjksEhpQEkCEYm4ZJyOYX0X1H%2BnyZBjL7kRYdBtnOEMx6PBN1LppRpLU1aKyimztO2vmynU%2B%2BI%2F33L%2F5qbZ5Mudbb8fPXMs06iewi5gMNj4EwqEFyFRo%2BfNjg9%2FE%2B7rJgziRHIFbmhdePjbBoXF7V%2BDW80s6N0uPHVAxBo6QTHpKqMduRYpnCsJ9wR7XOiF0UbrSgtkDWEy%2Bb%2FDikflSYdFmg3b39MHAXYX0uul7i3aMIPhvMEGOqUBfXRKd%2Bq6nEavTRL6MYLeaoSJxntQrHDEn1FAYCERScv1j35tMyMMeDRbJ6VW%2BkNC%2BI4DMPxdwmW4O3GJS9F12SqkUHUbeu9jBCz9OwaNo1G9Wnmif1WysoK4nV87Y8o6Dtt8RMGlPsiL7mVgRpT9WX1qB68b3mDrbjPn6ADtgV3fEfHJFW7YBQotcMgD2r2PdzRcTMosutp3JkKZKmWsntmuQW%2Fj&X-Amz-Signature=75189610ee55eb62862e904cf6ae39d06308b96b46d279b700352072284c61db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W5XKQ6F%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCvTqEle%2FqIfIUS%2FyGf8O4OBM6As48fUfK8IBp%2F0sRtbAIgc6j19%2BZxJpXXyThVdxfNRmyaBeT6KW%2BR9xrdJukR6AMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2jCZctd1hmICesGCrcAz%2F9P%2FQD7B9o8MbjRh1ble32H%2FfHrzvbpTsjiY1kMKh0C7BI15Nr4%2BOzQZRK9EIfNT%2Fel2M7TCGi7YVnYkju06rlkMswmPYx6ghBaVxf1yolRrv7tmtiwN0Yc5naM3E0sYbaod56%2FSaccCW0QW3Oj9XMHle5QBkpvMtrA7XwLr%2FM2NHrVSRaxr2dTqvc0w99Fyk%2BeGJua1IATP11i9c%2BvUd3e8wCwUyWC5f%2FRgvfo5dTg2iZXczkFrLm%2F4D2jEOK9l333g%2BcqKXaiv8wJQDbVPN2XomDx8EtYh3PGMPFmJwkbK6voEfxzFyQO5cpo2nr71a6REp1VaEfA%2FW0bhEJ0hWvnTaaW%2FiZssJNo2O0WoAv5WU941a3dGqF2%2Fm6N7DCVaLesUie70mDQ2liJLjksEhpQEkCEYm4ZJyOYX0X1H%2BnyZBjL7kRYdBtnOEMx6PBN1LppRpLU1aKyimztO2vmynU%2B%2BI%2F33L%2F5qbZ5Mudbb8fPXMs06iewi5gMNj4EwqEFyFRo%2BfNjg9%2FE%2B7rJgziRHIFbmhdePjbBoXF7V%2BDW80s6N0uPHVAxBo6QTHpKqMduRYpnCsJ9wR7XOiF0UbrSgtkDWEy%2Bb%2FDikflSYdFmg3b39MHAXYX0uul7i3aMIPhvMEGOqUBfXRKd%2Bq6nEavTRL6MYLeaoSJxntQrHDEn1FAYCERScv1j35tMyMMeDRbJ6VW%2BkNC%2BI4DMPxdwmW4O3GJS9F12SqkUHUbeu9jBCz9OwaNo1G9Wnmif1WysoK4nV87Y8o6Dtt8RMGlPsiL7mVgRpT9WX1qB68b3mDrbjPn6ADtgV3fEfHJFW7YBQotcMgD2r2PdzRcTMosutp3JkKZKmWsntmuQW%2Fj&X-Amz-Signature=94f0cbf0c9c326b4449d38e634464bc3f4781bda6d6d3496c19ee7c81fc8a1dd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W5XKQ6F%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCvTqEle%2FqIfIUS%2FyGf8O4OBM6As48fUfK8IBp%2F0sRtbAIgc6j19%2BZxJpXXyThVdxfNRmyaBeT6KW%2BR9xrdJukR6AMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2jCZctd1hmICesGCrcAz%2F9P%2FQD7B9o8MbjRh1ble32H%2FfHrzvbpTsjiY1kMKh0C7BI15Nr4%2BOzQZRK9EIfNT%2Fel2M7TCGi7YVnYkju06rlkMswmPYx6ghBaVxf1yolRrv7tmtiwN0Yc5naM3E0sYbaod56%2FSaccCW0QW3Oj9XMHle5QBkpvMtrA7XwLr%2FM2NHrVSRaxr2dTqvc0w99Fyk%2BeGJua1IATP11i9c%2BvUd3e8wCwUyWC5f%2FRgvfo5dTg2iZXczkFrLm%2F4D2jEOK9l333g%2BcqKXaiv8wJQDbVPN2XomDx8EtYh3PGMPFmJwkbK6voEfxzFyQO5cpo2nr71a6REp1VaEfA%2FW0bhEJ0hWvnTaaW%2FiZssJNo2O0WoAv5WU941a3dGqF2%2Fm6N7DCVaLesUie70mDQ2liJLjksEhpQEkCEYm4ZJyOYX0X1H%2BnyZBjL7kRYdBtnOEMx6PBN1LppRpLU1aKyimztO2vmynU%2B%2BI%2F33L%2F5qbZ5Mudbb8fPXMs06iewi5gMNj4EwqEFyFRo%2BfNjg9%2FE%2B7rJgziRHIFbmhdePjbBoXF7V%2BDW80s6N0uPHVAxBo6QTHpKqMduRYpnCsJ9wR7XOiF0UbrSgtkDWEy%2Bb%2FDikflSYdFmg3b39MHAXYX0uul7i3aMIPhvMEGOqUBfXRKd%2Bq6nEavTRL6MYLeaoSJxntQrHDEn1FAYCERScv1j35tMyMMeDRbJ6VW%2BkNC%2BI4DMPxdwmW4O3GJS9F12SqkUHUbeu9jBCz9OwaNo1G9Wnmif1WysoK4nV87Y8o6Dtt8RMGlPsiL7mVgRpT9WX1qB68b3mDrbjPn6ADtgV3fEfHJFW7YBQotcMgD2r2PdzRcTMosutp3JkKZKmWsntmuQW%2Fj&X-Amz-Signature=dd5260ec5859596d2f1c58420de2d1c7710c059518fde074af77e05faf7a92ef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W5XKQ6F%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCvTqEle%2FqIfIUS%2FyGf8O4OBM6As48fUfK8IBp%2F0sRtbAIgc6j19%2BZxJpXXyThVdxfNRmyaBeT6KW%2BR9xrdJukR6AMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2jCZctd1hmICesGCrcAz%2F9P%2FQD7B9o8MbjRh1ble32H%2FfHrzvbpTsjiY1kMKh0C7BI15Nr4%2BOzQZRK9EIfNT%2Fel2M7TCGi7YVnYkju06rlkMswmPYx6ghBaVxf1yolRrv7tmtiwN0Yc5naM3E0sYbaod56%2FSaccCW0QW3Oj9XMHle5QBkpvMtrA7XwLr%2FM2NHrVSRaxr2dTqvc0w99Fyk%2BeGJua1IATP11i9c%2BvUd3e8wCwUyWC5f%2FRgvfo5dTg2iZXczkFrLm%2F4D2jEOK9l333g%2BcqKXaiv8wJQDbVPN2XomDx8EtYh3PGMPFmJwkbK6voEfxzFyQO5cpo2nr71a6REp1VaEfA%2FW0bhEJ0hWvnTaaW%2FiZssJNo2O0WoAv5WU941a3dGqF2%2Fm6N7DCVaLesUie70mDQ2liJLjksEhpQEkCEYm4ZJyOYX0X1H%2BnyZBjL7kRYdBtnOEMx6PBN1LppRpLU1aKyimztO2vmynU%2B%2BI%2F33L%2F5qbZ5Mudbb8fPXMs06iewi5gMNj4EwqEFyFRo%2BfNjg9%2FE%2B7rJgziRHIFbmhdePjbBoXF7V%2BDW80s6N0uPHVAxBo6QTHpKqMduRYpnCsJ9wR7XOiF0UbrSgtkDWEy%2Bb%2FDikflSYdFmg3b39MHAXYX0uul7i3aMIPhvMEGOqUBfXRKd%2Bq6nEavTRL6MYLeaoSJxntQrHDEn1FAYCERScv1j35tMyMMeDRbJ6VW%2BkNC%2BI4DMPxdwmW4O3GJS9F12SqkUHUbeu9jBCz9OwaNo1G9Wnmif1WysoK4nV87Y8o6Dtt8RMGlPsiL7mVgRpT9WX1qB68b3mDrbjPn6ADtgV3fEfHJFW7YBQotcMgD2r2PdzRcTMosutp3JkKZKmWsntmuQW%2Fj&X-Amz-Signature=3869a22d50d4848cc944f05660b519906782d4135a85a70c4e7b5ab59d76dd6f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W5XKQ6F%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCvTqEle%2FqIfIUS%2FyGf8O4OBM6As48fUfK8IBp%2F0sRtbAIgc6j19%2BZxJpXXyThVdxfNRmyaBeT6KW%2BR9xrdJukR6AMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2jCZctd1hmICesGCrcAz%2F9P%2FQD7B9o8MbjRh1ble32H%2FfHrzvbpTsjiY1kMKh0C7BI15Nr4%2BOzQZRK9EIfNT%2Fel2M7TCGi7YVnYkju06rlkMswmPYx6ghBaVxf1yolRrv7tmtiwN0Yc5naM3E0sYbaod56%2FSaccCW0QW3Oj9XMHle5QBkpvMtrA7XwLr%2FM2NHrVSRaxr2dTqvc0w99Fyk%2BeGJua1IATP11i9c%2BvUd3e8wCwUyWC5f%2FRgvfo5dTg2iZXczkFrLm%2F4D2jEOK9l333g%2BcqKXaiv8wJQDbVPN2XomDx8EtYh3PGMPFmJwkbK6voEfxzFyQO5cpo2nr71a6REp1VaEfA%2FW0bhEJ0hWvnTaaW%2FiZssJNo2O0WoAv5WU941a3dGqF2%2Fm6N7DCVaLesUie70mDQ2liJLjksEhpQEkCEYm4ZJyOYX0X1H%2BnyZBjL7kRYdBtnOEMx6PBN1LppRpLU1aKyimztO2vmynU%2B%2BI%2F33L%2F5qbZ5Mudbb8fPXMs06iewi5gMNj4EwqEFyFRo%2BfNjg9%2FE%2B7rJgziRHIFbmhdePjbBoXF7V%2BDW80s6N0uPHVAxBo6QTHpKqMduRYpnCsJ9wR7XOiF0UbrSgtkDWEy%2Bb%2FDikflSYdFmg3b39MHAXYX0uul7i3aMIPhvMEGOqUBfXRKd%2Bq6nEavTRL6MYLeaoSJxntQrHDEn1FAYCERScv1j35tMyMMeDRbJ6VW%2BkNC%2BI4DMPxdwmW4O3GJS9F12SqkUHUbeu9jBCz9OwaNo1G9Wnmif1WysoK4nV87Y8o6Dtt8RMGlPsiL7mVgRpT9WX1qB68b3mDrbjPn6ADtgV3fEfHJFW7YBQotcMgD2r2PdzRcTMosutp3JkKZKmWsntmuQW%2Fj&X-Amz-Signature=18993aabbdee36a69a8daec1d7bcf871fd3785e6e17d3ea8d008f4a38558a861&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
