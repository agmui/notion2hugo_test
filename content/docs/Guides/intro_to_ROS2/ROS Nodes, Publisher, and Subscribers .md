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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWOFA5NA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDWJ%2B6j6Q4EA%2FnB8mQDc3desi%2FkkqWrRnSmyLxgowxK1AIhAKQj96%2BURvcAOScpqdFntFE011F6avQWvM0tiL8e51bzKv8DCFcQABoMNjM3NDIzMTgzODA1IgwGGB6mhZa3mctH974q3ANHtnJkoHG4KRgTGONzX6A33wh81BFsB067wnx7gX2upwAtDgnIAXuoMjh5hwotmJv8JEwfNS%2F7pNnu2yC2%2Fb04N2h7PsI1s84nk3OzoL5bN5xosWc%2F4pE0n6i0K6qe3QXBHggLaQQX%2F4tgrATplZaVOA%2BY3HU0aJNrW4%2BcseMzjko5Lm8sdyuxCMvE9h6b4HpwW%2F6djPBRoAfdc%2FMhdLGHwfQMTiewBHRXEf5qTMBsGLjMt8cWXEwtFydkNTZhvN12xSkoiE9wdltA%2FkmNsMk284Be7toyh2XLWW7JNNPNYJ8L9Fc2nzUq%2FTh%2BM%2BzCnIvQG5G69uUWAr5Nlo%2F46BnWjLdEXlpax6z%2BHPDWr9qb5su1dFyDqZQRJAItjmnAkWN8jn27Xua6bQ0ClSAkPcZGYyGp0T2fER80VIjWedaNoS68V9wwLumvu5u9ltvwTrdybW20ykEwmurv%2F547Ax%2FSb5dEwPsHsh8IhpDtwxNOcIbcv%2BCACVxKNY8SqvMQYaBA5Pyza%2F7GgyC9uuUTI9ig7VO%2Fs%2BrslrDA7VYYCUp9z8bMox%2BgM0PMSp7Vqr%2FchK2VTJ3eua%2Fu3%2Bbki%2B%2FMvesrmaxxFqJ3zauvCwSTMm7upYlZCXkUTaHm0NpYezCA%2FsW9BjqkAVl%2B5Yi7eeZt4F85ka9Y7NHkXBc8xidOGYAE3BilaBDY3AFZd1FmspQG35uBCkE%2F3u7vCpQEbWig5j7p89GKPSYUay3bs8Wc8f8QOhTVXw%2BJ4u%2FsdnpvaO7mRSdL5gA3nEH%2BUIAwtbiXSjbcUFAVYaFqWbsXxW6eqkcQF04tTOWhODj6tBLo4Y%2FanDFndUh3Kc%2FXvD7aDvGBmZf%2BJwJWurSxSvdP&X-Amz-Signature=6070711e1009911828c9d102f38a00088b7a180b6c496dccc40e37cfd24edf0e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWOFA5NA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDWJ%2B6j6Q4EA%2FnB8mQDc3desi%2FkkqWrRnSmyLxgowxK1AIhAKQj96%2BURvcAOScpqdFntFE011F6avQWvM0tiL8e51bzKv8DCFcQABoMNjM3NDIzMTgzODA1IgwGGB6mhZa3mctH974q3ANHtnJkoHG4KRgTGONzX6A33wh81BFsB067wnx7gX2upwAtDgnIAXuoMjh5hwotmJv8JEwfNS%2F7pNnu2yC2%2Fb04N2h7PsI1s84nk3OzoL5bN5xosWc%2F4pE0n6i0K6qe3QXBHggLaQQX%2F4tgrATplZaVOA%2BY3HU0aJNrW4%2BcseMzjko5Lm8sdyuxCMvE9h6b4HpwW%2F6djPBRoAfdc%2FMhdLGHwfQMTiewBHRXEf5qTMBsGLjMt8cWXEwtFydkNTZhvN12xSkoiE9wdltA%2FkmNsMk284Be7toyh2XLWW7JNNPNYJ8L9Fc2nzUq%2FTh%2BM%2BzCnIvQG5G69uUWAr5Nlo%2F46BnWjLdEXlpax6z%2BHPDWr9qb5su1dFyDqZQRJAItjmnAkWN8jn27Xua6bQ0ClSAkPcZGYyGp0T2fER80VIjWedaNoS68V9wwLumvu5u9ltvwTrdybW20ykEwmurv%2F547Ax%2FSb5dEwPsHsh8IhpDtwxNOcIbcv%2BCACVxKNY8SqvMQYaBA5Pyza%2F7GgyC9uuUTI9ig7VO%2Fs%2BrslrDA7VYYCUp9z8bMox%2BgM0PMSp7Vqr%2FchK2VTJ3eua%2Fu3%2Bbki%2B%2FMvesrmaxxFqJ3zauvCwSTMm7upYlZCXkUTaHm0NpYezCA%2FsW9BjqkAVl%2B5Yi7eeZt4F85ka9Y7NHkXBc8xidOGYAE3BilaBDY3AFZd1FmspQG35uBCkE%2F3u7vCpQEbWig5j7p89GKPSYUay3bs8Wc8f8QOhTVXw%2BJ4u%2FsdnpvaO7mRSdL5gA3nEH%2BUIAwtbiXSjbcUFAVYaFqWbsXxW6eqkcQF04tTOWhODj6tBLo4Y%2FanDFndUh3Kc%2FXvD7aDvGBmZf%2BJwJWurSxSvdP&X-Amz-Signature=28e3d088de1767ba65f0eb81b6de78976676d0d8db321ed33169ebffc60bfeef&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWOFA5NA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDWJ%2B6j6Q4EA%2FnB8mQDc3desi%2FkkqWrRnSmyLxgowxK1AIhAKQj96%2BURvcAOScpqdFntFE011F6avQWvM0tiL8e51bzKv8DCFcQABoMNjM3NDIzMTgzODA1IgwGGB6mhZa3mctH974q3ANHtnJkoHG4KRgTGONzX6A33wh81BFsB067wnx7gX2upwAtDgnIAXuoMjh5hwotmJv8JEwfNS%2F7pNnu2yC2%2Fb04N2h7PsI1s84nk3OzoL5bN5xosWc%2F4pE0n6i0K6qe3QXBHggLaQQX%2F4tgrATplZaVOA%2BY3HU0aJNrW4%2BcseMzjko5Lm8sdyuxCMvE9h6b4HpwW%2F6djPBRoAfdc%2FMhdLGHwfQMTiewBHRXEf5qTMBsGLjMt8cWXEwtFydkNTZhvN12xSkoiE9wdltA%2FkmNsMk284Be7toyh2XLWW7JNNPNYJ8L9Fc2nzUq%2FTh%2BM%2BzCnIvQG5G69uUWAr5Nlo%2F46BnWjLdEXlpax6z%2BHPDWr9qb5su1dFyDqZQRJAItjmnAkWN8jn27Xua6bQ0ClSAkPcZGYyGp0T2fER80VIjWedaNoS68V9wwLumvu5u9ltvwTrdybW20ykEwmurv%2F547Ax%2FSb5dEwPsHsh8IhpDtwxNOcIbcv%2BCACVxKNY8SqvMQYaBA5Pyza%2F7GgyC9uuUTI9ig7VO%2Fs%2BrslrDA7VYYCUp9z8bMox%2BgM0PMSp7Vqr%2FchK2VTJ3eua%2Fu3%2Bbki%2B%2FMvesrmaxxFqJ3zauvCwSTMm7upYlZCXkUTaHm0NpYezCA%2FsW9BjqkAVl%2B5Yi7eeZt4F85ka9Y7NHkXBc8xidOGYAE3BilaBDY3AFZd1FmspQG35uBCkE%2F3u7vCpQEbWig5j7p89GKPSYUay3bs8Wc8f8QOhTVXw%2BJ4u%2FsdnpvaO7mRSdL5gA3nEH%2BUIAwtbiXSjbcUFAVYaFqWbsXxW6eqkcQF04tTOWhODj6tBLo4Y%2FanDFndUh3Kc%2FXvD7aDvGBmZf%2BJwJWurSxSvdP&X-Amz-Signature=df0513e58bc3bf72243b052c94bd3246764caf654bc4909b0cbad5fd19ae63a6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWOFA5NA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDWJ%2B6j6Q4EA%2FnB8mQDc3desi%2FkkqWrRnSmyLxgowxK1AIhAKQj96%2BURvcAOScpqdFntFE011F6avQWvM0tiL8e51bzKv8DCFcQABoMNjM3NDIzMTgzODA1IgwGGB6mhZa3mctH974q3ANHtnJkoHG4KRgTGONzX6A33wh81BFsB067wnx7gX2upwAtDgnIAXuoMjh5hwotmJv8JEwfNS%2F7pNnu2yC2%2Fb04N2h7PsI1s84nk3OzoL5bN5xosWc%2F4pE0n6i0K6qe3QXBHggLaQQX%2F4tgrATplZaVOA%2BY3HU0aJNrW4%2BcseMzjko5Lm8sdyuxCMvE9h6b4HpwW%2F6djPBRoAfdc%2FMhdLGHwfQMTiewBHRXEf5qTMBsGLjMt8cWXEwtFydkNTZhvN12xSkoiE9wdltA%2FkmNsMk284Be7toyh2XLWW7JNNPNYJ8L9Fc2nzUq%2FTh%2BM%2BzCnIvQG5G69uUWAr5Nlo%2F46BnWjLdEXlpax6z%2BHPDWr9qb5su1dFyDqZQRJAItjmnAkWN8jn27Xua6bQ0ClSAkPcZGYyGp0T2fER80VIjWedaNoS68V9wwLumvu5u9ltvwTrdybW20ykEwmurv%2F547Ax%2FSb5dEwPsHsh8IhpDtwxNOcIbcv%2BCACVxKNY8SqvMQYaBA5Pyza%2F7GgyC9uuUTI9ig7VO%2Fs%2BrslrDA7VYYCUp9z8bMox%2BgM0PMSp7Vqr%2FchK2VTJ3eua%2Fu3%2Bbki%2B%2FMvesrmaxxFqJ3zauvCwSTMm7upYlZCXkUTaHm0NpYezCA%2FsW9BjqkAVl%2B5Yi7eeZt4F85ka9Y7NHkXBc8xidOGYAE3BilaBDY3AFZd1FmspQG35uBCkE%2F3u7vCpQEbWig5j7p89GKPSYUay3bs8Wc8f8QOhTVXw%2BJ4u%2FsdnpvaO7mRSdL5gA3nEH%2BUIAwtbiXSjbcUFAVYaFqWbsXxW6eqkcQF04tTOWhODj6tBLo4Y%2FanDFndUh3Kc%2FXvD7aDvGBmZf%2BJwJWurSxSvdP&X-Amz-Signature=dede9f06b3b9ca59c3e71d1244a901ed80298d0ad5e132b4aa1b2b32010ad024&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWOFA5NA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDWJ%2B6j6Q4EA%2FnB8mQDc3desi%2FkkqWrRnSmyLxgowxK1AIhAKQj96%2BURvcAOScpqdFntFE011F6avQWvM0tiL8e51bzKv8DCFcQABoMNjM3NDIzMTgzODA1IgwGGB6mhZa3mctH974q3ANHtnJkoHG4KRgTGONzX6A33wh81BFsB067wnx7gX2upwAtDgnIAXuoMjh5hwotmJv8JEwfNS%2F7pNnu2yC2%2Fb04N2h7PsI1s84nk3OzoL5bN5xosWc%2F4pE0n6i0K6qe3QXBHggLaQQX%2F4tgrATplZaVOA%2BY3HU0aJNrW4%2BcseMzjko5Lm8sdyuxCMvE9h6b4HpwW%2F6djPBRoAfdc%2FMhdLGHwfQMTiewBHRXEf5qTMBsGLjMt8cWXEwtFydkNTZhvN12xSkoiE9wdltA%2FkmNsMk284Be7toyh2XLWW7JNNPNYJ8L9Fc2nzUq%2FTh%2BM%2BzCnIvQG5G69uUWAr5Nlo%2F46BnWjLdEXlpax6z%2BHPDWr9qb5su1dFyDqZQRJAItjmnAkWN8jn27Xua6bQ0ClSAkPcZGYyGp0T2fER80VIjWedaNoS68V9wwLumvu5u9ltvwTrdybW20ykEwmurv%2F547Ax%2FSb5dEwPsHsh8IhpDtwxNOcIbcv%2BCACVxKNY8SqvMQYaBA5Pyza%2F7GgyC9uuUTI9ig7VO%2Fs%2BrslrDA7VYYCUp9z8bMox%2BgM0PMSp7Vqr%2FchK2VTJ3eua%2Fu3%2Bbki%2B%2FMvesrmaxxFqJ3zauvCwSTMm7upYlZCXkUTaHm0NpYezCA%2FsW9BjqkAVl%2B5Yi7eeZt4F85ka9Y7NHkXBc8xidOGYAE3BilaBDY3AFZd1FmspQG35uBCkE%2F3u7vCpQEbWig5j7p89GKPSYUay3bs8Wc8f8QOhTVXw%2BJ4u%2FsdnpvaO7mRSdL5gA3nEH%2BUIAwtbiXSjbcUFAVYaFqWbsXxW6eqkcQF04tTOWhODj6tBLo4Y%2FanDFndUh3Kc%2FXvD7aDvGBmZf%2BJwJWurSxSvdP&X-Amz-Signature=a1c2790eec23e3ddd55fbac44c600cff24dfebca3e89ea7489f74c368b4c69b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWOFA5NA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDWJ%2B6j6Q4EA%2FnB8mQDc3desi%2FkkqWrRnSmyLxgowxK1AIhAKQj96%2BURvcAOScpqdFntFE011F6avQWvM0tiL8e51bzKv8DCFcQABoMNjM3NDIzMTgzODA1IgwGGB6mhZa3mctH974q3ANHtnJkoHG4KRgTGONzX6A33wh81BFsB067wnx7gX2upwAtDgnIAXuoMjh5hwotmJv8JEwfNS%2F7pNnu2yC2%2Fb04N2h7PsI1s84nk3OzoL5bN5xosWc%2F4pE0n6i0K6qe3QXBHggLaQQX%2F4tgrATplZaVOA%2BY3HU0aJNrW4%2BcseMzjko5Lm8sdyuxCMvE9h6b4HpwW%2F6djPBRoAfdc%2FMhdLGHwfQMTiewBHRXEf5qTMBsGLjMt8cWXEwtFydkNTZhvN12xSkoiE9wdltA%2FkmNsMk284Be7toyh2XLWW7JNNPNYJ8L9Fc2nzUq%2FTh%2BM%2BzCnIvQG5G69uUWAr5Nlo%2F46BnWjLdEXlpax6z%2BHPDWr9qb5su1dFyDqZQRJAItjmnAkWN8jn27Xua6bQ0ClSAkPcZGYyGp0T2fER80VIjWedaNoS68V9wwLumvu5u9ltvwTrdybW20ykEwmurv%2F547Ax%2FSb5dEwPsHsh8IhpDtwxNOcIbcv%2BCACVxKNY8SqvMQYaBA5Pyza%2F7GgyC9uuUTI9ig7VO%2Fs%2BrslrDA7VYYCUp9z8bMox%2BgM0PMSp7Vqr%2FchK2VTJ3eua%2Fu3%2Bbki%2B%2FMvesrmaxxFqJ3zauvCwSTMm7upYlZCXkUTaHm0NpYezCA%2FsW9BjqkAVl%2B5Yi7eeZt4F85ka9Y7NHkXBc8xidOGYAE3BilaBDY3AFZd1FmspQG35uBCkE%2F3u7vCpQEbWig5j7p89GKPSYUay3bs8Wc8f8QOhTVXw%2BJ4u%2FsdnpvaO7mRSdL5gA3nEH%2BUIAwtbiXSjbcUFAVYaFqWbsXxW6eqkcQF04tTOWhODj6tBLo4Y%2FanDFndUh3Kc%2FXvD7aDvGBmZf%2BJwJWurSxSvdP&X-Amz-Signature=68f4c1972aca50056b04a2419f54046ca526c537081879b0c4ece3c48fede352&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWOFA5NA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDWJ%2B6j6Q4EA%2FnB8mQDc3desi%2FkkqWrRnSmyLxgowxK1AIhAKQj96%2BURvcAOScpqdFntFE011F6avQWvM0tiL8e51bzKv8DCFcQABoMNjM3NDIzMTgzODA1IgwGGB6mhZa3mctH974q3ANHtnJkoHG4KRgTGONzX6A33wh81BFsB067wnx7gX2upwAtDgnIAXuoMjh5hwotmJv8JEwfNS%2F7pNnu2yC2%2Fb04N2h7PsI1s84nk3OzoL5bN5xosWc%2F4pE0n6i0K6qe3QXBHggLaQQX%2F4tgrATplZaVOA%2BY3HU0aJNrW4%2BcseMzjko5Lm8sdyuxCMvE9h6b4HpwW%2F6djPBRoAfdc%2FMhdLGHwfQMTiewBHRXEf5qTMBsGLjMt8cWXEwtFydkNTZhvN12xSkoiE9wdltA%2FkmNsMk284Be7toyh2XLWW7JNNPNYJ8L9Fc2nzUq%2FTh%2BM%2BzCnIvQG5G69uUWAr5Nlo%2F46BnWjLdEXlpax6z%2BHPDWr9qb5su1dFyDqZQRJAItjmnAkWN8jn27Xua6bQ0ClSAkPcZGYyGp0T2fER80VIjWedaNoS68V9wwLumvu5u9ltvwTrdybW20ykEwmurv%2F547Ax%2FSb5dEwPsHsh8IhpDtwxNOcIbcv%2BCACVxKNY8SqvMQYaBA5Pyza%2F7GgyC9uuUTI9ig7VO%2Fs%2BrslrDA7VYYCUp9z8bMox%2BgM0PMSp7Vqr%2FchK2VTJ3eua%2Fu3%2Bbki%2B%2FMvesrmaxxFqJ3zauvCwSTMm7upYlZCXkUTaHm0NpYezCA%2FsW9BjqkAVl%2B5Yi7eeZt4F85ka9Y7NHkXBc8xidOGYAE3BilaBDY3AFZd1FmspQG35uBCkE%2F3u7vCpQEbWig5j7p89GKPSYUay3bs8Wc8f8QOhTVXw%2BJ4u%2FsdnpvaO7mRSdL5gA3nEH%2BUIAwtbiXSjbcUFAVYaFqWbsXxW6eqkcQF04tTOWhODj6tBLo4Y%2FanDFndUh3Kc%2FXvD7aDvGBmZf%2BJwJWurSxSvdP&X-Amz-Signature=30cbfad3ee788942cebc0e2798297831a2f515020188b455b60df61be144eecf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWOFA5NA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDWJ%2B6j6Q4EA%2FnB8mQDc3desi%2FkkqWrRnSmyLxgowxK1AIhAKQj96%2BURvcAOScpqdFntFE011F6avQWvM0tiL8e51bzKv8DCFcQABoMNjM3NDIzMTgzODA1IgwGGB6mhZa3mctH974q3ANHtnJkoHG4KRgTGONzX6A33wh81BFsB067wnx7gX2upwAtDgnIAXuoMjh5hwotmJv8JEwfNS%2F7pNnu2yC2%2Fb04N2h7PsI1s84nk3OzoL5bN5xosWc%2F4pE0n6i0K6qe3QXBHggLaQQX%2F4tgrATplZaVOA%2BY3HU0aJNrW4%2BcseMzjko5Lm8sdyuxCMvE9h6b4HpwW%2F6djPBRoAfdc%2FMhdLGHwfQMTiewBHRXEf5qTMBsGLjMt8cWXEwtFydkNTZhvN12xSkoiE9wdltA%2FkmNsMk284Be7toyh2XLWW7JNNPNYJ8L9Fc2nzUq%2FTh%2BM%2BzCnIvQG5G69uUWAr5Nlo%2F46BnWjLdEXlpax6z%2BHPDWr9qb5su1dFyDqZQRJAItjmnAkWN8jn27Xua6bQ0ClSAkPcZGYyGp0T2fER80VIjWedaNoS68V9wwLumvu5u9ltvwTrdybW20ykEwmurv%2F547Ax%2FSb5dEwPsHsh8IhpDtwxNOcIbcv%2BCACVxKNY8SqvMQYaBA5Pyza%2F7GgyC9uuUTI9ig7VO%2Fs%2BrslrDA7VYYCUp9z8bMox%2BgM0PMSp7Vqr%2FchK2VTJ3eua%2Fu3%2Bbki%2B%2FMvesrmaxxFqJ3zauvCwSTMm7upYlZCXkUTaHm0NpYezCA%2FsW9BjqkAVl%2B5Yi7eeZt4F85ka9Y7NHkXBc8xidOGYAE3BilaBDY3AFZd1FmspQG35uBCkE%2F3u7vCpQEbWig5j7p89GKPSYUay3bs8Wc8f8QOhTVXw%2BJ4u%2FsdnpvaO7mRSdL5gA3nEH%2BUIAwtbiXSjbcUFAVYaFqWbsXxW6eqkcQF04tTOWhODj6tBLo4Y%2FanDFndUh3Kc%2FXvD7aDvGBmZf%2BJwJWurSxSvdP&X-Amz-Signature=1a6a496216df3846170533afb72c32073684991667b22d07b6cc7178ad7e0a0c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
