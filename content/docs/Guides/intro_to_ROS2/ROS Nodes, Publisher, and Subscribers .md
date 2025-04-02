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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FX7Y7C2%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAHGhWL%2Fe9X5hauNyk64kKdeyuclQ1L%2F4YijMYdRXScJAiEA110ssWoajTtX3a4ESyxwcLPjnEAC%2BA7HaYRy%2Bac4Z0YqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9la0RCZf%2Fxf9MNiSrcA%2FqDyE8VzEgYbzVVdOG2ZCC%2B23lYkYOG%2FnH%2BN6dWvH1uor2LPzBTwBw4Fi%2BYVPl9IkaX00LfmIbGeWQEG9D0soZSqW0tAybS4cyafRg6p%2FPSSTFJDBQyOXwvZh17ANVItmy7iXFmjvakXHx4XDTFqyg%2F0pE%2FcKSmB4mUVKADOzdnd29heK97TX9%2FIccEd%2FHbnC9E8MVDSMTNrm3FnNvOO2C7dZdhz1VubuILXUMF4cFScMuOHz2%2FtRfoWyHmn0o1Dzo4J%2FQQKYCNaP4mAhMoxyThsJdEMJNHi8zvuAX9X%2FVfunB%2FDzgR%2FMh2t9zY2aichS2RHcjogXRVs9itJlUuLreKXbd0GV8QDJuRzQyXB1dVYdNJMnDtybkeWMRjKnIJ2Ps%2BOzcS5STwj4FK9Bp1QRNtBlDUhuM56fc%2FPagBT0JO9qq6qdiU6VACH3pFZ29JOjkGMD8%2Bl9RUc1XZkjzLLbJgc6jdCKWGSjF357Ki1x4iHmmVl5WsDF0Xi0nPNADvPN%2FpfKch0MKZvUZQIqGLNPAxKOc19LbqfjmCmi1MldORXyEv42hDuOGlef9dvHVeREsSkotSQy5xRgAxXBJSG59bnUnxiwtKI6tEzDbh%2F4C92zYAn0HDj2D83qk%2FMNr7tL8GOqUBp3O68bM5n6Zbov3oXdUk0Te%2BHUMfNHnF8QquxayPULiaY98fxVdMvkaF8eIjTDr82UKGRniaO9uy%2FQDXRIxAGK6GHrKajafs5aGZU%2BeVnsmHNKij7RVEkdWPxmC4%2FrNtOHbE1Oyb%2FVFphs7Ea3sczYnOa2khJMrvqfUOSz8JR31EEw0w%2F5dP6KrQAlC5ni3hFiEdQ3HrYOA2TKxDFsgOLS8G2xC3&X-Amz-Signature=4eb98cb74e2b6ed0469c84dd70a1f8b25eeb1e803b7ee15ea598893397a3d7ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FX7Y7C2%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAHGhWL%2Fe9X5hauNyk64kKdeyuclQ1L%2F4YijMYdRXScJAiEA110ssWoajTtX3a4ESyxwcLPjnEAC%2BA7HaYRy%2Bac4Z0YqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9la0RCZf%2Fxf9MNiSrcA%2FqDyE8VzEgYbzVVdOG2ZCC%2B23lYkYOG%2FnH%2BN6dWvH1uor2LPzBTwBw4Fi%2BYVPl9IkaX00LfmIbGeWQEG9D0soZSqW0tAybS4cyafRg6p%2FPSSTFJDBQyOXwvZh17ANVItmy7iXFmjvakXHx4XDTFqyg%2F0pE%2FcKSmB4mUVKADOzdnd29heK97TX9%2FIccEd%2FHbnC9E8MVDSMTNrm3FnNvOO2C7dZdhz1VubuILXUMF4cFScMuOHz2%2FtRfoWyHmn0o1Dzo4J%2FQQKYCNaP4mAhMoxyThsJdEMJNHi8zvuAX9X%2FVfunB%2FDzgR%2FMh2t9zY2aichS2RHcjogXRVs9itJlUuLreKXbd0GV8QDJuRzQyXB1dVYdNJMnDtybkeWMRjKnIJ2Ps%2BOzcS5STwj4FK9Bp1QRNtBlDUhuM56fc%2FPagBT0JO9qq6qdiU6VACH3pFZ29JOjkGMD8%2Bl9RUc1XZkjzLLbJgc6jdCKWGSjF357Ki1x4iHmmVl5WsDF0Xi0nPNADvPN%2FpfKch0MKZvUZQIqGLNPAxKOc19LbqfjmCmi1MldORXyEv42hDuOGlef9dvHVeREsSkotSQy5xRgAxXBJSG59bnUnxiwtKI6tEzDbh%2F4C92zYAn0HDj2D83qk%2FMNr7tL8GOqUBp3O68bM5n6Zbov3oXdUk0Te%2BHUMfNHnF8QquxayPULiaY98fxVdMvkaF8eIjTDr82UKGRniaO9uy%2FQDXRIxAGK6GHrKajafs5aGZU%2BeVnsmHNKij7RVEkdWPxmC4%2FrNtOHbE1Oyb%2FVFphs7Ea3sczYnOa2khJMrvqfUOSz8JR31EEw0w%2F5dP6KrQAlC5ni3hFiEdQ3HrYOA2TKxDFsgOLS8G2xC3&X-Amz-Signature=f5342018ce735fca19775a1094bb2ccc018bec34d2f0ab2314a6469ad9b9648b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FX7Y7C2%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAHGhWL%2Fe9X5hauNyk64kKdeyuclQ1L%2F4YijMYdRXScJAiEA110ssWoajTtX3a4ESyxwcLPjnEAC%2BA7HaYRy%2Bac4Z0YqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9la0RCZf%2Fxf9MNiSrcA%2FqDyE8VzEgYbzVVdOG2ZCC%2B23lYkYOG%2FnH%2BN6dWvH1uor2LPzBTwBw4Fi%2BYVPl9IkaX00LfmIbGeWQEG9D0soZSqW0tAybS4cyafRg6p%2FPSSTFJDBQyOXwvZh17ANVItmy7iXFmjvakXHx4XDTFqyg%2F0pE%2FcKSmB4mUVKADOzdnd29heK97TX9%2FIccEd%2FHbnC9E8MVDSMTNrm3FnNvOO2C7dZdhz1VubuILXUMF4cFScMuOHz2%2FtRfoWyHmn0o1Dzo4J%2FQQKYCNaP4mAhMoxyThsJdEMJNHi8zvuAX9X%2FVfunB%2FDzgR%2FMh2t9zY2aichS2RHcjogXRVs9itJlUuLreKXbd0GV8QDJuRzQyXB1dVYdNJMnDtybkeWMRjKnIJ2Ps%2BOzcS5STwj4FK9Bp1QRNtBlDUhuM56fc%2FPagBT0JO9qq6qdiU6VACH3pFZ29JOjkGMD8%2Bl9RUc1XZkjzLLbJgc6jdCKWGSjF357Ki1x4iHmmVl5WsDF0Xi0nPNADvPN%2FpfKch0MKZvUZQIqGLNPAxKOc19LbqfjmCmi1MldORXyEv42hDuOGlef9dvHVeREsSkotSQy5xRgAxXBJSG59bnUnxiwtKI6tEzDbh%2F4C92zYAn0HDj2D83qk%2FMNr7tL8GOqUBp3O68bM5n6Zbov3oXdUk0Te%2BHUMfNHnF8QquxayPULiaY98fxVdMvkaF8eIjTDr82UKGRniaO9uy%2FQDXRIxAGK6GHrKajafs5aGZU%2BeVnsmHNKij7RVEkdWPxmC4%2FrNtOHbE1Oyb%2FVFphs7Ea3sczYnOa2khJMrvqfUOSz8JR31EEw0w%2F5dP6KrQAlC5ni3hFiEdQ3HrYOA2TKxDFsgOLS8G2xC3&X-Amz-Signature=7e5893c3967f823a1670b11bf4feb742566316a02f15b59df64f2e6bea628a71&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FX7Y7C2%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAHGhWL%2Fe9X5hauNyk64kKdeyuclQ1L%2F4YijMYdRXScJAiEA110ssWoajTtX3a4ESyxwcLPjnEAC%2BA7HaYRy%2Bac4Z0YqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9la0RCZf%2Fxf9MNiSrcA%2FqDyE8VzEgYbzVVdOG2ZCC%2B23lYkYOG%2FnH%2BN6dWvH1uor2LPzBTwBw4Fi%2BYVPl9IkaX00LfmIbGeWQEG9D0soZSqW0tAybS4cyafRg6p%2FPSSTFJDBQyOXwvZh17ANVItmy7iXFmjvakXHx4XDTFqyg%2F0pE%2FcKSmB4mUVKADOzdnd29heK97TX9%2FIccEd%2FHbnC9E8MVDSMTNrm3FnNvOO2C7dZdhz1VubuILXUMF4cFScMuOHz2%2FtRfoWyHmn0o1Dzo4J%2FQQKYCNaP4mAhMoxyThsJdEMJNHi8zvuAX9X%2FVfunB%2FDzgR%2FMh2t9zY2aichS2RHcjogXRVs9itJlUuLreKXbd0GV8QDJuRzQyXB1dVYdNJMnDtybkeWMRjKnIJ2Ps%2BOzcS5STwj4FK9Bp1QRNtBlDUhuM56fc%2FPagBT0JO9qq6qdiU6VACH3pFZ29JOjkGMD8%2Bl9RUc1XZkjzLLbJgc6jdCKWGSjF357Ki1x4iHmmVl5WsDF0Xi0nPNADvPN%2FpfKch0MKZvUZQIqGLNPAxKOc19LbqfjmCmi1MldORXyEv42hDuOGlef9dvHVeREsSkotSQy5xRgAxXBJSG59bnUnxiwtKI6tEzDbh%2F4C92zYAn0HDj2D83qk%2FMNr7tL8GOqUBp3O68bM5n6Zbov3oXdUk0Te%2BHUMfNHnF8QquxayPULiaY98fxVdMvkaF8eIjTDr82UKGRniaO9uy%2FQDXRIxAGK6GHrKajafs5aGZU%2BeVnsmHNKij7RVEkdWPxmC4%2FrNtOHbE1Oyb%2FVFphs7Ea3sczYnOa2khJMrvqfUOSz8JR31EEw0w%2F5dP6KrQAlC5ni3hFiEdQ3HrYOA2TKxDFsgOLS8G2xC3&X-Amz-Signature=2492b66a5759bba3cbd4f62595b4ad3e41ef9d1e02a174af83439164f2cef36b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FX7Y7C2%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAHGhWL%2Fe9X5hauNyk64kKdeyuclQ1L%2F4YijMYdRXScJAiEA110ssWoajTtX3a4ESyxwcLPjnEAC%2BA7HaYRy%2Bac4Z0YqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9la0RCZf%2Fxf9MNiSrcA%2FqDyE8VzEgYbzVVdOG2ZCC%2B23lYkYOG%2FnH%2BN6dWvH1uor2LPzBTwBw4Fi%2BYVPl9IkaX00LfmIbGeWQEG9D0soZSqW0tAybS4cyafRg6p%2FPSSTFJDBQyOXwvZh17ANVItmy7iXFmjvakXHx4XDTFqyg%2F0pE%2FcKSmB4mUVKADOzdnd29heK97TX9%2FIccEd%2FHbnC9E8MVDSMTNrm3FnNvOO2C7dZdhz1VubuILXUMF4cFScMuOHz2%2FtRfoWyHmn0o1Dzo4J%2FQQKYCNaP4mAhMoxyThsJdEMJNHi8zvuAX9X%2FVfunB%2FDzgR%2FMh2t9zY2aichS2RHcjogXRVs9itJlUuLreKXbd0GV8QDJuRzQyXB1dVYdNJMnDtybkeWMRjKnIJ2Ps%2BOzcS5STwj4FK9Bp1QRNtBlDUhuM56fc%2FPagBT0JO9qq6qdiU6VACH3pFZ29JOjkGMD8%2Bl9RUc1XZkjzLLbJgc6jdCKWGSjF357Ki1x4iHmmVl5WsDF0Xi0nPNADvPN%2FpfKch0MKZvUZQIqGLNPAxKOc19LbqfjmCmi1MldORXyEv42hDuOGlef9dvHVeREsSkotSQy5xRgAxXBJSG59bnUnxiwtKI6tEzDbh%2F4C92zYAn0HDj2D83qk%2FMNr7tL8GOqUBp3O68bM5n6Zbov3oXdUk0Te%2BHUMfNHnF8QquxayPULiaY98fxVdMvkaF8eIjTDr82UKGRniaO9uy%2FQDXRIxAGK6GHrKajafs5aGZU%2BeVnsmHNKij7RVEkdWPxmC4%2FrNtOHbE1Oyb%2FVFphs7Ea3sczYnOa2khJMrvqfUOSz8JR31EEw0w%2F5dP6KrQAlC5ni3hFiEdQ3HrYOA2TKxDFsgOLS8G2xC3&X-Amz-Signature=460dadfec26dfd8ef143bc09e8cf0d3c5dbbc198d4cd8bc24abd4c05fc477c1d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FX7Y7C2%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAHGhWL%2Fe9X5hauNyk64kKdeyuclQ1L%2F4YijMYdRXScJAiEA110ssWoajTtX3a4ESyxwcLPjnEAC%2BA7HaYRy%2Bac4Z0YqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9la0RCZf%2Fxf9MNiSrcA%2FqDyE8VzEgYbzVVdOG2ZCC%2B23lYkYOG%2FnH%2BN6dWvH1uor2LPzBTwBw4Fi%2BYVPl9IkaX00LfmIbGeWQEG9D0soZSqW0tAybS4cyafRg6p%2FPSSTFJDBQyOXwvZh17ANVItmy7iXFmjvakXHx4XDTFqyg%2F0pE%2FcKSmB4mUVKADOzdnd29heK97TX9%2FIccEd%2FHbnC9E8MVDSMTNrm3FnNvOO2C7dZdhz1VubuILXUMF4cFScMuOHz2%2FtRfoWyHmn0o1Dzo4J%2FQQKYCNaP4mAhMoxyThsJdEMJNHi8zvuAX9X%2FVfunB%2FDzgR%2FMh2t9zY2aichS2RHcjogXRVs9itJlUuLreKXbd0GV8QDJuRzQyXB1dVYdNJMnDtybkeWMRjKnIJ2Ps%2BOzcS5STwj4FK9Bp1QRNtBlDUhuM56fc%2FPagBT0JO9qq6qdiU6VACH3pFZ29JOjkGMD8%2Bl9RUc1XZkjzLLbJgc6jdCKWGSjF357Ki1x4iHmmVl5WsDF0Xi0nPNADvPN%2FpfKch0MKZvUZQIqGLNPAxKOc19LbqfjmCmi1MldORXyEv42hDuOGlef9dvHVeREsSkotSQy5xRgAxXBJSG59bnUnxiwtKI6tEzDbh%2F4C92zYAn0HDj2D83qk%2FMNr7tL8GOqUBp3O68bM5n6Zbov3oXdUk0Te%2BHUMfNHnF8QquxayPULiaY98fxVdMvkaF8eIjTDr82UKGRniaO9uy%2FQDXRIxAGK6GHrKajafs5aGZU%2BeVnsmHNKij7RVEkdWPxmC4%2FrNtOHbE1Oyb%2FVFphs7Ea3sczYnOa2khJMrvqfUOSz8JR31EEw0w%2F5dP6KrQAlC5ni3hFiEdQ3HrYOA2TKxDFsgOLS8G2xC3&X-Amz-Signature=41d4271e566c4a81e9d4caf52ad2778adf8421c03a8edc5f5a95c8746a37aa9a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FX7Y7C2%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAHGhWL%2Fe9X5hauNyk64kKdeyuclQ1L%2F4YijMYdRXScJAiEA110ssWoajTtX3a4ESyxwcLPjnEAC%2BA7HaYRy%2Bac4Z0YqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9la0RCZf%2Fxf9MNiSrcA%2FqDyE8VzEgYbzVVdOG2ZCC%2B23lYkYOG%2FnH%2BN6dWvH1uor2LPzBTwBw4Fi%2BYVPl9IkaX00LfmIbGeWQEG9D0soZSqW0tAybS4cyafRg6p%2FPSSTFJDBQyOXwvZh17ANVItmy7iXFmjvakXHx4XDTFqyg%2F0pE%2FcKSmB4mUVKADOzdnd29heK97TX9%2FIccEd%2FHbnC9E8MVDSMTNrm3FnNvOO2C7dZdhz1VubuILXUMF4cFScMuOHz2%2FtRfoWyHmn0o1Dzo4J%2FQQKYCNaP4mAhMoxyThsJdEMJNHi8zvuAX9X%2FVfunB%2FDzgR%2FMh2t9zY2aichS2RHcjogXRVs9itJlUuLreKXbd0GV8QDJuRzQyXB1dVYdNJMnDtybkeWMRjKnIJ2Ps%2BOzcS5STwj4FK9Bp1QRNtBlDUhuM56fc%2FPagBT0JO9qq6qdiU6VACH3pFZ29JOjkGMD8%2Bl9RUc1XZkjzLLbJgc6jdCKWGSjF357Ki1x4iHmmVl5WsDF0Xi0nPNADvPN%2FpfKch0MKZvUZQIqGLNPAxKOc19LbqfjmCmi1MldORXyEv42hDuOGlef9dvHVeREsSkotSQy5xRgAxXBJSG59bnUnxiwtKI6tEzDbh%2F4C92zYAn0HDj2D83qk%2FMNr7tL8GOqUBp3O68bM5n6Zbov3oXdUk0Te%2BHUMfNHnF8QquxayPULiaY98fxVdMvkaF8eIjTDr82UKGRniaO9uy%2FQDXRIxAGK6GHrKajafs5aGZU%2BeVnsmHNKij7RVEkdWPxmC4%2FrNtOHbE1Oyb%2FVFphs7Ea3sczYnOa2khJMrvqfUOSz8JR31EEw0w%2F5dP6KrQAlC5ni3hFiEdQ3HrYOA2TKxDFsgOLS8G2xC3&X-Amz-Signature=06ceb5cfb2f8c67dcc26db1bd5fab6a726ad7c97986d1f9cbfb19b3bcb69e38a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FX7Y7C2%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAHGhWL%2Fe9X5hauNyk64kKdeyuclQ1L%2F4YijMYdRXScJAiEA110ssWoajTtX3a4ESyxwcLPjnEAC%2BA7HaYRy%2Bac4Z0YqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9la0RCZf%2Fxf9MNiSrcA%2FqDyE8VzEgYbzVVdOG2ZCC%2B23lYkYOG%2FnH%2BN6dWvH1uor2LPzBTwBw4Fi%2BYVPl9IkaX00LfmIbGeWQEG9D0soZSqW0tAybS4cyafRg6p%2FPSSTFJDBQyOXwvZh17ANVItmy7iXFmjvakXHx4XDTFqyg%2F0pE%2FcKSmB4mUVKADOzdnd29heK97TX9%2FIccEd%2FHbnC9E8MVDSMTNrm3FnNvOO2C7dZdhz1VubuILXUMF4cFScMuOHz2%2FtRfoWyHmn0o1Dzo4J%2FQQKYCNaP4mAhMoxyThsJdEMJNHi8zvuAX9X%2FVfunB%2FDzgR%2FMh2t9zY2aichS2RHcjogXRVs9itJlUuLreKXbd0GV8QDJuRzQyXB1dVYdNJMnDtybkeWMRjKnIJ2Ps%2BOzcS5STwj4FK9Bp1QRNtBlDUhuM56fc%2FPagBT0JO9qq6qdiU6VACH3pFZ29JOjkGMD8%2Bl9RUc1XZkjzLLbJgc6jdCKWGSjF357Ki1x4iHmmVl5WsDF0Xi0nPNADvPN%2FpfKch0MKZvUZQIqGLNPAxKOc19LbqfjmCmi1MldORXyEv42hDuOGlef9dvHVeREsSkotSQy5xRgAxXBJSG59bnUnxiwtKI6tEzDbh%2F4C92zYAn0HDj2D83qk%2FMNr7tL8GOqUBp3O68bM5n6Zbov3oXdUk0Te%2BHUMfNHnF8QquxayPULiaY98fxVdMvkaF8eIjTDr82UKGRniaO9uy%2FQDXRIxAGK6GHrKajafs5aGZU%2BeVnsmHNKij7RVEkdWPxmC4%2FrNtOHbE1Oyb%2FVFphs7Ea3sczYnOa2khJMrvqfUOSz8JR31EEw0w%2F5dP6KrQAlC5ni3hFiEdQ3HrYOA2TKxDFsgOLS8G2xC3&X-Amz-Signature=3135357483e4f7d45043e147a68f1bfb6b3738b3d650dbe8a88f690bb28df8f7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
