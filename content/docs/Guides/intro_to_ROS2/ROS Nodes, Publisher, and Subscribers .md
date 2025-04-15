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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LSZN6QL%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGh2vtwjxmKxtJXL5ClcyEdn%2FF1yQQyb5WsmQnDbKWBpAiAe99cvR2bONvazGQKNpOuJUG%2FulU%2BU106e3dKYf2ujoCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMCBxtvCpi7hPQ7xazKtwD206sFFzH3BHJBWj%2FVD4ad2loCvCT5lQsllO4CvzNedn0aTNJhIF6l4Aif7v%2FbB%2B8AiyoDtA8ZqLCQugLN7Gb1f%2B1p2tmJPyNXyT%2BgfbeiEKXk1i7nCxQ8mKZcojrSd0Kw7QVGg5Jrd%2FUrXInarAFhSHqhG9niFcKgICoLMHbq4WPKhSImeEuReRyCvWrQdG6JG2K9IGcBOn9vHbc91XcwOYwaSq7zga3041HOm33bgxNlnAVJMp76DPKxFQKHRgHgy2UoP46ICZbvIqLT5%2FSDjHBHU6T9N8%2BjZss73vL%2BuaEPzXw3%2F68XhBLO1zYpvbUoeXrPIHWCgfcw2HdU%2BpClvQsRHHrMyHhOdesvB1xzEClrr9%2F2qKSAnKuRP0Cy7fijXYjiHe8v74yhtiAfdNkUTwQvf%2Bx4QIfIWkZibUjRUqQog4ihu63NMSQ8Ef49cRdOVnXodckrwaoxPpo0gX7DcQo6PWM6Tg0jUQimykaBtOnRuxVJwqTukkErByqWYM84zxXn7%2FfBkSK7aAK%2FNm1EFvVktdCUrE5Czk%2BPeK4dpkhvoTh5xleo2fYFyijoal9BGRgEEHUluCcO9FdpzY2nluSGTgL6w0RHxNOcf%2BhZNWRtr%2F2aOrfqpQjo6Mwsen3vwY6pgHuQMTbMTYzWYID0Ib3nto%2BthwkE5prI%2F3f81ZhfZBSbRq12t7pLT7oIZOqD56WwD8S%2FBdx%2BUaYtFQR22ZQgaVYDtqzHtn1XZ%2BbBiqmwwNaCtJgWaMErnBUipBi7grP69GG5mZ4QE5omUUIdnb%2FdGB0S%2FzEUlqeX3cKZTZoHZWMRdKC4wYDjsvgrisyO0aRTlWl9pM%2FkOMfuAGi6BSxiHBGDMcP9BoZ&X-Amz-Signature=1e7c794e08d7ef1090c5a0023ac12beac5ff40da0778e3fd32a53c1a6f9a57c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LSZN6QL%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGh2vtwjxmKxtJXL5ClcyEdn%2FF1yQQyb5WsmQnDbKWBpAiAe99cvR2bONvazGQKNpOuJUG%2FulU%2BU106e3dKYf2ujoCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMCBxtvCpi7hPQ7xazKtwD206sFFzH3BHJBWj%2FVD4ad2loCvCT5lQsllO4CvzNedn0aTNJhIF6l4Aif7v%2FbB%2B8AiyoDtA8ZqLCQugLN7Gb1f%2B1p2tmJPyNXyT%2BgfbeiEKXk1i7nCxQ8mKZcojrSd0Kw7QVGg5Jrd%2FUrXInarAFhSHqhG9niFcKgICoLMHbq4WPKhSImeEuReRyCvWrQdG6JG2K9IGcBOn9vHbc91XcwOYwaSq7zga3041HOm33bgxNlnAVJMp76DPKxFQKHRgHgy2UoP46ICZbvIqLT5%2FSDjHBHU6T9N8%2BjZss73vL%2BuaEPzXw3%2F68XhBLO1zYpvbUoeXrPIHWCgfcw2HdU%2BpClvQsRHHrMyHhOdesvB1xzEClrr9%2F2qKSAnKuRP0Cy7fijXYjiHe8v74yhtiAfdNkUTwQvf%2Bx4QIfIWkZibUjRUqQog4ihu63NMSQ8Ef49cRdOVnXodckrwaoxPpo0gX7DcQo6PWM6Tg0jUQimykaBtOnRuxVJwqTukkErByqWYM84zxXn7%2FfBkSK7aAK%2FNm1EFvVktdCUrE5Czk%2BPeK4dpkhvoTh5xleo2fYFyijoal9BGRgEEHUluCcO9FdpzY2nluSGTgL6w0RHxNOcf%2BhZNWRtr%2F2aOrfqpQjo6Mwsen3vwY6pgHuQMTbMTYzWYID0Ib3nto%2BthwkE5prI%2F3f81ZhfZBSbRq12t7pLT7oIZOqD56WwD8S%2FBdx%2BUaYtFQR22ZQgaVYDtqzHtn1XZ%2BbBiqmwwNaCtJgWaMErnBUipBi7grP69GG5mZ4QE5omUUIdnb%2FdGB0S%2FzEUlqeX3cKZTZoHZWMRdKC4wYDjsvgrisyO0aRTlWl9pM%2FkOMfuAGi6BSxiHBGDMcP9BoZ&X-Amz-Signature=9e896a074100d7925a0f3932cc6d6cf3accdde6a70aa49a36fd613114d9a81cf&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LSZN6QL%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGh2vtwjxmKxtJXL5ClcyEdn%2FF1yQQyb5WsmQnDbKWBpAiAe99cvR2bONvazGQKNpOuJUG%2FulU%2BU106e3dKYf2ujoCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMCBxtvCpi7hPQ7xazKtwD206sFFzH3BHJBWj%2FVD4ad2loCvCT5lQsllO4CvzNedn0aTNJhIF6l4Aif7v%2FbB%2B8AiyoDtA8ZqLCQugLN7Gb1f%2B1p2tmJPyNXyT%2BgfbeiEKXk1i7nCxQ8mKZcojrSd0Kw7QVGg5Jrd%2FUrXInarAFhSHqhG9niFcKgICoLMHbq4WPKhSImeEuReRyCvWrQdG6JG2K9IGcBOn9vHbc91XcwOYwaSq7zga3041HOm33bgxNlnAVJMp76DPKxFQKHRgHgy2UoP46ICZbvIqLT5%2FSDjHBHU6T9N8%2BjZss73vL%2BuaEPzXw3%2F68XhBLO1zYpvbUoeXrPIHWCgfcw2HdU%2BpClvQsRHHrMyHhOdesvB1xzEClrr9%2F2qKSAnKuRP0Cy7fijXYjiHe8v74yhtiAfdNkUTwQvf%2Bx4QIfIWkZibUjRUqQog4ihu63NMSQ8Ef49cRdOVnXodckrwaoxPpo0gX7DcQo6PWM6Tg0jUQimykaBtOnRuxVJwqTukkErByqWYM84zxXn7%2FfBkSK7aAK%2FNm1EFvVktdCUrE5Czk%2BPeK4dpkhvoTh5xleo2fYFyijoal9BGRgEEHUluCcO9FdpzY2nluSGTgL6w0RHxNOcf%2BhZNWRtr%2F2aOrfqpQjo6Mwsen3vwY6pgHuQMTbMTYzWYID0Ib3nto%2BthwkE5prI%2F3f81ZhfZBSbRq12t7pLT7oIZOqD56WwD8S%2FBdx%2BUaYtFQR22ZQgaVYDtqzHtn1XZ%2BbBiqmwwNaCtJgWaMErnBUipBi7grP69GG5mZ4QE5omUUIdnb%2FdGB0S%2FzEUlqeX3cKZTZoHZWMRdKC4wYDjsvgrisyO0aRTlWl9pM%2FkOMfuAGi6BSxiHBGDMcP9BoZ&X-Amz-Signature=8e19b30a92ad521fd8c46315beaaa9925a53bb0cb3cb4872756b5b762ba70624&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LSZN6QL%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGh2vtwjxmKxtJXL5ClcyEdn%2FF1yQQyb5WsmQnDbKWBpAiAe99cvR2bONvazGQKNpOuJUG%2FulU%2BU106e3dKYf2ujoCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMCBxtvCpi7hPQ7xazKtwD206sFFzH3BHJBWj%2FVD4ad2loCvCT5lQsllO4CvzNedn0aTNJhIF6l4Aif7v%2FbB%2B8AiyoDtA8ZqLCQugLN7Gb1f%2B1p2tmJPyNXyT%2BgfbeiEKXk1i7nCxQ8mKZcojrSd0Kw7QVGg5Jrd%2FUrXInarAFhSHqhG9niFcKgICoLMHbq4WPKhSImeEuReRyCvWrQdG6JG2K9IGcBOn9vHbc91XcwOYwaSq7zga3041HOm33bgxNlnAVJMp76DPKxFQKHRgHgy2UoP46ICZbvIqLT5%2FSDjHBHU6T9N8%2BjZss73vL%2BuaEPzXw3%2F68XhBLO1zYpvbUoeXrPIHWCgfcw2HdU%2BpClvQsRHHrMyHhOdesvB1xzEClrr9%2F2qKSAnKuRP0Cy7fijXYjiHe8v74yhtiAfdNkUTwQvf%2Bx4QIfIWkZibUjRUqQog4ihu63NMSQ8Ef49cRdOVnXodckrwaoxPpo0gX7DcQo6PWM6Tg0jUQimykaBtOnRuxVJwqTukkErByqWYM84zxXn7%2FfBkSK7aAK%2FNm1EFvVktdCUrE5Czk%2BPeK4dpkhvoTh5xleo2fYFyijoal9BGRgEEHUluCcO9FdpzY2nluSGTgL6w0RHxNOcf%2BhZNWRtr%2F2aOrfqpQjo6Mwsen3vwY6pgHuQMTbMTYzWYID0Ib3nto%2BthwkE5prI%2F3f81ZhfZBSbRq12t7pLT7oIZOqD56WwD8S%2FBdx%2BUaYtFQR22ZQgaVYDtqzHtn1XZ%2BbBiqmwwNaCtJgWaMErnBUipBi7grP69GG5mZ4QE5omUUIdnb%2FdGB0S%2FzEUlqeX3cKZTZoHZWMRdKC4wYDjsvgrisyO0aRTlWl9pM%2FkOMfuAGi6BSxiHBGDMcP9BoZ&X-Amz-Signature=9cfd6cd156807e9ad73de676e7b1fe693ad3dc9ae186532df8d7adcf9967fa25&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LSZN6QL%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGh2vtwjxmKxtJXL5ClcyEdn%2FF1yQQyb5WsmQnDbKWBpAiAe99cvR2bONvazGQKNpOuJUG%2FulU%2BU106e3dKYf2ujoCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMCBxtvCpi7hPQ7xazKtwD206sFFzH3BHJBWj%2FVD4ad2loCvCT5lQsllO4CvzNedn0aTNJhIF6l4Aif7v%2FbB%2B8AiyoDtA8ZqLCQugLN7Gb1f%2B1p2tmJPyNXyT%2BgfbeiEKXk1i7nCxQ8mKZcojrSd0Kw7QVGg5Jrd%2FUrXInarAFhSHqhG9niFcKgICoLMHbq4WPKhSImeEuReRyCvWrQdG6JG2K9IGcBOn9vHbc91XcwOYwaSq7zga3041HOm33bgxNlnAVJMp76DPKxFQKHRgHgy2UoP46ICZbvIqLT5%2FSDjHBHU6T9N8%2BjZss73vL%2BuaEPzXw3%2F68XhBLO1zYpvbUoeXrPIHWCgfcw2HdU%2BpClvQsRHHrMyHhOdesvB1xzEClrr9%2F2qKSAnKuRP0Cy7fijXYjiHe8v74yhtiAfdNkUTwQvf%2Bx4QIfIWkZibUjRUqQog4ihu63NMSQ8Ef49cRdOVnXodckrwaoxPpo0gX7DcQo6PWM6Tg0jUQimykaBtOnRuxVJwqTukkErByqWYM84zxXn7%2FfBkSK7aAK%2FNm1EFvVktdCUrE5Czk%2BPeK4dpkhvoTh5xleo2fYFyijoal9BGRgEEHUluCcO9FdpzY2nluSGTgL6w0RHxNOcf%2BhZNWRtr%2F2aOrfqpQjo6Mwsen3vwY6pgHuQMTbMTYzWYID0Ib3nto%2BthwkE5prI%2F3f81ZhfZBSbRq12t7pLT7oIZOqD56WwD8S%2FBdx%2BUaYtFQR22ZQgaVYDtqzHtn1XZ%2BbBiqmwwNaCtJgWaMErnBUipBi7grP69GG5mZ4QE5omUUIdnb%2FdGB0S%2FzEUlqeX3cKZTZoHZWMRdKC4wYDjsvgrisyO0aRTlWl9pM%2FkOMfuAGi6BSxiHBGDMcP9BoZ&X-Amz-Signature=42f569679185e7b98d47bb39f45ceda6d685e2c199e9f661a1b169971efd2798&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LSZN6QL%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGh2vtwjxmKxtJXL5ClcyEdn%2FF1yQQyb5WsmQnDbKWBpAiAe99cvR2bONvazGQKNpOuJUG%2FulU%2BU106e3dKYf2ujoCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMCBxtvCpi7hPQ7xazKtwD206sFFzH3BHJBWj%2FVD4ad2loCvCT5lQsllO4CvzNedn0aTNJhIF6l4Aif7v%2FbB%2B8AiyoDtA8ZqLCQugLN7Gb1f%2B1p2tmJPyNXyT%2BgfbeiEKXk1i7nCxQ8mKZcojrSd0Kw7QVGg5Jrd%2FUrXInarAFhSHqhG9niFcKgICoLMHbq4WPKhSImeEuReRyCvWrQdG6JG2K9IGcBOn9vHbc91XcwOYwaSq7zga3041HOm33bgxNlnAVJMp76DPKxFQKHRgHgy2UoP46ICZbvIqLT5%2FSDjHBHU6T9N8%2BjZss73vL%2BuaEPzXw3%2F68XhBLO1zYpvbUoeXrPIHWCgfcw2HdU%2BpClvQsRHHrMyHhOdesvB1xzEClrr9%2F2qKSAnKuRP0Cy7fijXYjiHe8v74yhtiAfdNkUTwQvf%2Bx4QIfIWkZibUjRUqQog4ihu63NMSQ8Ef49cRdOVnXodckrwaoxPpo0gX7DcQo6PWM6Tg0jUQimykaBtOnRuxVJwqTukkErByqWYM84zxXn7%2FfBkSK7aAK%2FNm1EFvVktdCUrE5Czk%2BPeK4dpkhvoTh5xleo2fYFyijoal9BGRgEEHUluCcO9FdpzY2nluSGTgL6w0RHxNOcf%2BhZNWRtr%2F2aOrfqpQjo6Mwsen3vwY6pgHuQMTbMTYzWYID0Ib3nto%2BthwkE5prI%2F3f81ZhfZBSbRq12t7pLT7oIZOqD56WwD8S%2FBdx%2BUaYtFQR22ZQgaVYDtqzHtn1XZ%2BbBiqmwwNaCtJgWaMErnBUipBi7grP69GG5mZ4QE5omUUIdnb%2FdGB0S%2FzEUlqeX3cKZTZoHZWMRdKC4wYDjsvgrisyO0aRTlWl9pM%2FkOMfuAGi6BSxiHBGDMcP9BoZ&X-Amz-Signature=f82fee2173b9836fe0203129f4f276fa9e9dd981cd451036a9f120674464603b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LSZN6QL%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGh2vtwjxmKxtJXL5ClcyEdn%2FF1yQQyb5WsmQnDbKWBpAiAe99cvR2bONvazGQKNpOuJUG%2FulU%2BU106e3dKYf2ujoCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMCBxtvCpi7hPQ7xazKtwD206sFFzH3BHJBWj%2FVD4ad2loCvCT5lQsllO4CvzNedn0aTNJhIF6l4Aif7v%2FbB%2B8AiyoDtA8ZqLCQugLN7Gb1f%2B1p2tmJPyNXyT%2BgfbeiEKXk1i7nCxQ8mKZcojrSd0Kw7QVGg5Jrd%2FUrXInarAFhSHqhG9niFcKgICoLMHbq4WPKhSImeEuReRyCvWrQdG6JG2K9IGcBOn9vHbc91XcwOYwaSq7zga3041HOm33bgxNlnAVJMp76DPKxFQKHRgHgy2UoP46ICZbvIqLT5%2FSDjHBHU6T9N8%2BjZss73vL%2BuaEPzXw3%2F68XhBLO1zYpvbUoeXrPIHWCgfcw2HdU%2BpClvQsRHHrMyHhOdesvB1xzEClrr9%2F2qKSAnKuRP0Cy7fijXYjiHe8v74yhtiAfdNkUTwQvf%2Bx4QIfIWkZibUjRUqQog4ihu63NMSQ8Ef49cRdOVnXodckrwaoxPpo0gX7DcQo6PWM6Tg0jUQimykaBtOnRuxVJwqTukkErByqWYM84zxXn7%2FfBkSK7aAK%2FNm1EFvVktdCUrE5Czk%2BPeK4dpkhvoTh5xleo2fYFyijoal9BGRgEEHUluCcO9FdpzY2nluSGTgL6w0RHxNOcf%2BhZNWRtr%2F2aOrfqpQjo6Mwsen3vwY6pgHuQMTbMTYzWYID0Ib3nto%2BthwkE5prI%2F3f81ZhfZBSbRq12t7pLT7oIZOqD56WwD8S%2FBdx%2BUaYtFQR22ZQgaVYDtqzHtn1XZ%2BbBiqmwwNaCtJgWaMErnBUipBi7grP69GG5mZ4QE5omUUIdnb%2FdGB0S%2FzEUlqeX3cKZTZoHZWMRdKC4wYDjsvgrisyO0aRTlWl9pM%2FkOMfuAGi6BSxiHBGDMcP9BoZ&X-Amz-Signature=59b7121dd0cafa094305ed0296fb7370af7717050b1cdff97c643d72ab4a3d29&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LSZN6QL%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGh2vtwjxmKxtJXL5ClcyEdn%2FF1yQQyb5WsmQnDbKWBpAiAe99cvR2bONvazGQKNpOuJUG%2FulU%2BU106e3dKYf2ujoCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMCBxtvCpi7hPQ7xazKtwD206sFFzH3BHJBWj%2FVD4ad2loCvCT5lQsllO4CvzNedn0aTNJhIF6l4Aif7v%2FbB%2B8AiyoDtA8ZqLCQugLN7Gb1f%2B1p2tmJPyNXyT%2BgfbeiEKXk1i7nCxQ8mKZcojrSd0Kw7QVGg5Jrd%2FUrXInarAFhSHqhG9niFcKgICoLMHbq4WPKhSImeEuReRyCvWrQdG6JG2K9IGcBOn9vHbc91XcwOYwaSq7zga3041HOm33bgxNlnAVJMp76DPKxFQKHRgHgy2UoP46ICZbvIqLT5%2FSDjHBHU6T9N8%2BjZss73vL%2BuaEPzXw3%2F68XhBLO1zYpvbUoeXrPIHWCgfcw2HdU%2BpClvQsRHHrMyHhOdesvB1xzEClrr9%2F2qKSAnKuRP0Cy7fijXYjiHe8v74yhtiAfdNkUTwQvf%2Bx4QIfIWkZibUjRUqQog4ihu63NMSQ8Ef49cRdOVnXodckrwaoxPpo0gX7DcQo6PWM6Tg0jUQimykaBtOnRuxVJwqTukkErByqWYM84zxXn7%2FfBkSK7aAK%2FNm1EFvVktdCUrE5Czk%2BPeK4dpkhvoTh5xleo2fYFyijoal9BGRgEEHUluCcO9FdpzY2nluSGTgL6w0RHxNOcf%2BhZNWRtr%2F2aOrfqpQjo6Mwsen3vwY6pgHuQMTbMTYzWYID0Ib3nto%2BthwkE5prI%2F3f81ZhfZBSbRq12t7pLT7oIZOqD56WwD8S%2FBdx%2BUaYtFQR22ZQgaVYDtqzHtn1XZ%2BbBiqmwwNaCtJgWaMErnBUipBi7grP69GG5mZ4QE5omUUIdnb%2FdGB0S%2FzEUlqeX3cKZTZoHZWMRdKC4wYDjsvgrisyO0aRTlWl9pM%2FkOMfuAGi6BSxiHBGDMcP9BoZ&X-Amz-Signature=bb547c11dfe6c2a44608cf63e4f5e40dc964691cdd2bc62bc3940b773ad42193&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
