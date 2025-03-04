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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3ZU2IJS%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGJUWGPpJxRfg5vlj8bOTa%2FTWWS%2BmQIXjGTUmG89lq7AiBNUGHZtycykzkutfVbZXol5Hi9sCbS%2FZZS%2BwSavklMiiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5%2Fc%2BZnGWw2FAOKxuKtwDjK6KkJ5tcapyDbwfCDw3Zcsn9fWBhOVQ2sEK45SaDVoMN8SMrRcYHggeJo3resb5Z8AMEe%2BLFRvqvFuw274N4RSTSbznc7Vh8wyi%2FYi%2F6jI6RZy5n5N5M%2B6GPtEWy%2BEEbyq0j1zw600c0kC7tLYhZMST3mkQ5NtMKE%2Fc0nsJkS1mYbCvX98V3mQ2yDcHejSa0CmW2bc5gZrN8Wy1Qf0j%2By4IiPnIrVisoCkjADCd8xmXli0shAMULhm0KJoYHSjlrXr3N2G%2BLMk3%2BqOsysb48wM%2Ft6sR%2BO0xGL6gIQJsOUDJHiErqS9NfmVbl5rdf722xd5GuwkoSZh9d7g6mQ6fOKYKLdfaLPZplfvbXM%2BmP56oe7xfVUPCiVgtsK0pZjQc5pZrnNQJGcQzL%2Fy6ASLNoZyrJgBYjkZoahZQnCjX1FmR4qexjCzt87pGizAPc1YpEcsL6FNjNzMmZ6MarnP2wiAt2l6ra1ajsvzkrXxWQKQJ6jxBwk89JW0RY%2BsY4yMTXS9QXVWKqAiYezS3hS4saT8dI5S%2BnG8%2B%2BWeH9p4iyC31zaiD7dCM%2F%2FRKAAnuLvGiwhoyqSSA8HjhgkGS7CEz3lP0jbYPobHLS4qLUW7pgPb1UHrVuoKIEdS%2F0uYwpdOcvgY6pgGJ6PNtNpxD7I0yrrErFUGfeEBkNzGNcOLEzjtuF4bXEfn5%2B2791sVTvn1pIkpcM7LNQ%2Ft5o%2FbJZRBQq508nF4vNXip0MZRuwprQzqcbGH2sIipSezzEMwOYmglcoLGM8Mn9R7vWWLEzKdaH39EIm84MYjbiv4MWnn9%2BnDqF7070O2FZyq3wEvMpqmJCARMxbeErwwaE2O2bPuPVKDU6OJoIj5jQXiv&X-Amz-Signature=09ba8272390964fda6d6429ce332b9c3bf7b40bec75996cbec33fe8f3455aadc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3ZU2IJS%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGJUWGPpJxRfg5vlj8bOTa%2FTWWS%2BmQIXjGTUmG89lq7AiBNUGHZtycykzkutfVbZXol5Hi9sCbS%2FZZS%2BwSavklMiiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5%2Fc%2BZnGWw2FAOKxuKtwDjK6KkJ5tcapyDbwfCDw3Zcsn9fWBhOVQ2sEK45SaDVoMN8SMrRcYHggeJo3resb5Z8AMEe%2BLFRvqvFuw274N4RSTSbznc7Vh8wyi%2FYi%2F6jI6RZy5n5N5M%2B6GPtEWy%2BEEbyq0j1zw600c0kC7tLYhZMST3mkQ5NtMKE%2Fc0nsJkS1mYbCvX98V3mQ2yDcHejSa0CmW2bc5gZrN8Wy1Qf0j%2By4IiPnIrVisoCkjADCd8xmXli0shAMULhm0KJoYHSjlrXr3N2G%2BLMk3%2BqOsysb48wM%2Ft6sR%2BO0xGL6gIQJsOUDJHiErqS9NfmVbl5rdf722xd5GuwkoSZh9d7g6mQ6fOKYKLdfaLPZplfvbXM%2BmP56oe7xfVUPCiVgtsK0pZjQc5pZrnNQJGcQzL%2Fy6ASLNoZyrJgBYjkZoahZQnCjX1FmR4qexjCzt87pGizAPc1YpEcsL6FNjNzMmZ6MarnP2wiAt2l6ra1ajsvzkrXxWQKQJ6jxBwk89JW0RY%2BsY4yMTXS9QXVWKqAiYezS3hS4saT8dI5S%2BnG8%2B%2BWeH9p4iyC31zaiD7dCM%2F%2FRKAAnuLvGiwhoyqSSA8HjhgkGS7CEz3lP0jbYPobHLS4qLUW7pgPb1UHrVuoKIEdS%2F0uYwpdOcvgY6pgGJ6PNtNpxD7I0yrrErFUGfeEBkNzGNcOLEzjtuF4bXEfn5%2B2791sVTvn1pIkpcM7LNQ%2Ft5o%2FbJZRBQq508nF4vNXip0MZRuwprQzqcbGH2sIipSezzEMwOYmglcoLGM8Mn9R7vWWLEzKdaH39EIm84MYjbiv4MWnn9%2BnDqF7070O2FZyq3wEvMpqmJCARMxbeErwwaE2O2bPuPVKDU6OJoIj5jQXiv&X-Amz-Signature=9ca36d3a7ea7840b5cfff11b845f6ffb9c95725acc5b6d8b195eba24f7961947&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3ZU2IJS%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGJUWGPpJxRfg5vlj8bOTa%2FTWWS%2BmQIXjGTUmG89lq7AiBNUGHZtycykzkutfVbZXol5Hi9sCbS%2FZZS%2BwSavklMiiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5%2Fc%2BZnGWw2FAOKxuKtwDjK6KkJ5tcapyDbwfCDw3Zcsn9fWBhOVQ2sEK45SaDVoMN8SMrRcYHggeJo3resb5Z8AMEe%2BLFRvqvFuw274N4RSTSbznc7Vh8wyi%2FYi%2F6jI6RZy5n5N5M%2B6GPtEWy%2BEEbyq0j1zw600c0kC7tLYhZMST3mkQ5NtMKE%2Fc0nsJkS1mYbCvX98V3mQ2yDcHejSa0CmW2bc5gZrN8Wy1Qf0j%2By4IiPnIrVisoCkjADCd8xmXli0shAMULhm0KJoYHSjlrXr3N2G%2BLMk3%2BqOsysb48wM%2Ft6sR%2BO0xGL6gIQJsOUDJHiErqS9NfmVbl5rdf722xd5GuwkoSZh9d7g6mQ6fOKYKLdfaLPZplfvbXM%2BmP56oe7xfVUPCiVgtsK0pZjQc5pZrnNQJGcQzL%2Fy6ASLNoZyrJgBYjkZoahZQnCjX1FmR4qexjCzt87pGizAPc1YpEcsL6FNjNzMmZ6MarnP2wiAt2l6ra1ajsvzkrXxWQKQJ6jxBwk89JW0RY%2BsY4yMTXS9QXVWKqAiYezS3hS4saT8dI5S%2BnG8%2B%2BWeH9p4iyC31zaiD7dCM%2F%2FRKAAnuLvGiwhoyqSSA8HjhgkGS7CEz3lP0jbYPobHLS4qLUW7pgPb1UHrVuoKIEdS%2F0uYwpdOcvgY6pgGJ6PNtNpxD7I0yrrErFUGfeEBkNzGNcOLEzjtuF4bXEfn5%2B2791sVTvn1pIkpcM7LNQ%2Ft5o%2FbJZRBQq508nF4vNXip0MZRuwprQzqcbGH2sIipSezzEMwOYmglcoLGM8Mn9R7vWWLEzKdaH39EIm84MYjbiv4MWnn9%2BnDqF7070O2FZyq3wEvMpqmJCARMxbeErwwaE2O2bPuPVKDU6OJoIj5jQXiv&X-Amz-Signature=7f99054b3b6cbdf468329bc5a17f1309b9d5ddfb9d0e9f53055ccd123133e0f1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3ZU2IJS%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGJUWGPpJxRfg5vlj8bOTa%2FTWWS%2BmQIXjGTUmG89lq7AiBNUGHZtycykzkutfVbZXol5Hi9sCbS%2FZZS%2BwSavklMiiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5%2Fc%2BZnGWw2FAOKxuKtwDjK6KkJ5tcapyDbwfCDw3Zcsn9fWBhOVQ2sEK45SaDVoMN8SMrRcYHggeJo3resb5Z8AMEe%2BLFRvqvFuw274N4RSTSbznc7Vh8wyi%2FYi%2F6jI6RZy5n5N5M%2B6GPtEWy%2BEEbyq0j1zw600c0kC7tLYhZMST3mkQ5NtMKE%2Fc0nsJkS1mYbCvX98V3mQ2yDcHejSa0CmW2bc5gZrN8Wy1Qf0j%2By4IiPnIrVisoCkjADCd8xmXli0shAMULhm0KJoYHSjlrXr3N2G%2BLMk3%2BqOsysb48wM%2Ft6sR%2BO0xGL6gIQJsOUDJHiErqS9NfmVbl5rdf722xd5GuwkoSZh9d7g6mQ6fOKYKLdfaLPZplfvbXM%2BmP56oe7xfVUPCiVgtsK0pZjQc5pZrnNQJGcQzL%2Fy6ASLNoZyrJgBYjkZoahZQnCjX1FmR4qexjCzt87pGizAPc1YpEcsL6FNjNzMmZ6MarnP2wiAt2l6ra1ajsvzkrXxWQKQJ6jxBwk89JW0RY%2BsY4yMTXS9QXVWKqAiYezS3hS4saT8dI5S%2BnG8%2B%2BWeH9p4iyC31zaiD7dCM%2F%2FRKAAnuLvGiwhoyqSSA8HjhgkGS7CEz3lP0jbYPobHLS4qLUW7pgPb1UHrVuoKIEdS%2F0uYwpdOcvgY6pgGJ6PNtNpxD7I0yrrErFUGfeEBkNzGNcOLEzjtuF4bXEfn5%2B2791sVTvn1pIkpcM7LNQ%2Ft5o%2FbJZRBQq508nF4vNXip0MZRuwprQzqcbGH2sIipSezzEMwOYmglcoLGM8Mn9R7vWWLEzKdaH39EIm84MYjbiv4MWnn9%2BnDqF7070O2FZyq3wEvMpqmJCARMxbeErwwaE2O2bPuPVKDU6OJoIj5jQXiv&X-Amz-Signature=44b2e69504326a481a25e7ea394567997833b85e3db8a42d5d24ce73e1f86c00&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3ZU2IJS%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGJUWGPpJxRfg5vlj8bOTa%2FTWWS%2BmQIXjGTUmG89lq7AiBNUGHZtycykzkutfVbZXol5Hi9sCbS%2FZZS%2BwSavklMiiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5%2Fc%2BZnGWw2FAOKxuKtwDjK6KkJ5tcapyDbwfCDw3Zcsn9fWBhOVQ2sEK45SaDVoMN8SMrRcYHggeJo3resb5Z8AMEe%2BLFRvqvFuw274N4RSTSbznc7Vh8wyi%2FYi%2F6jI6RZy5n5N5M%2B6GPtEWy%2BEEbyq0j1zw600c0kC7tLYhZMST3mkQ5NtMKE%2Fc0nsJkS1mYbCvX98V3mQ2yDcHejSa0CmW2bc5gZrN8Wy1Qf0j%2By4IiPnIrVisoCkjADCd8xmXli0shAMULhm0KJoYHSjlrXr3N2G%2BLMk3%2BqOsysb48wM%2Ft6sR%2BO0xGL6gIQJsOUDJHiErqS9NfmVbl5rdf722xd5GuwkoSZh9d7g6mQ6fOKYKLdfaLPZplfvbXM%2BmP56oe7xfVUPCiVgtsK0pZjQc5pZrnNQJGcQzL%2Fy6ASLNoZyrJgBYjkZoahZQnCjX1FmR4qexjCzt87pGizAPc1YpEcsL6FNjNzMmZ6MarnP2wiAt2l6ra1ajsvzkrXxWQKQJ6jxBwk89JW0RY%2BsY4yMTXS9QXVWKqAiYezS3hS4saT8dI5S%2BnG8%2B%2BWeH9p4iyC31zaiD7dCM%2F%2FRKAAnuLvGiwhoyqSSA8HjhgkGS7CEz3lP0jbYPobHLS4qLUW7pgPb1UHrVuoKIEdS%2F0uYwpdOcvgY6pgGJ6PNtNpxD7I0yrrErFUGfeEBkNzGNcOLEzjtuF4bXEfn5%2B2791sVTvn1pIkpcM7LNQ%2Ft5o%2FbJZRBQq508nF4vNXip0MZRuwprQzqcbGH2sIipSezzEMwOYmglcoLGM8Mn9R7vWWLEzKdaH39EIm84MYjbiv4MWnn9%2BnDqF7070O2FZyq3wEvMpqmJCARMxbeErwwaE2O2bPuPVKDU6OJoIj5jQXiv&X-Amz-Signature=cadbc68bda5b14385e74a02c4ab220e03fd922b6f564a6b7960b40534e6233a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3ZU2IJS%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGJUWGPpJxRfg5vlj8bOTa%2FTWWS%2BmQIXjGTUmG89lq7AiBNUGHZtycykzkutfVbZXol5Hi9sCbS%2FZZS%2BwSavklMiiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5%2Fc%2BZnGWw2FAOKxuKtwDjK6KkJ5tcapyDbwfCDw3Zcsn9fWBhOVQ2sEK45SaDVoMN8SMrRcYHggeJo3resb5Z8AMEe%2BLFRvqvFuw274N4RSTSbznc7Vh8wyi%2FYi%2F6jI6RZy5n5N5M%2B6GPtEWy%2BEEbyq0j1zw600c0kC7tLYhZMST3mkQ5NtMKE%2Fc0nsJkS1mYbCvX98V3mQ2yDcHejSa0CmW2bc5gZrN8Wy1Qf0j%2By4IiPnIrVisoCkjADCd8xmXli0shAMULhm0KJoYHSjlrXr3N2G%2BLMk3%2BqOsysb48wM%2Ft6sR%2BO0xGL6gIQJsOUDJHiErqS9NfmVbl5rdf722xd5GuwkoSZh9d7g6mQ6fOKYKLdfaLPZplfvbXM%2BmP56oe7xfVUPCiVgtsK0pZjQc5pZrnNQJGcQzL%2Fy6ASLNoZyrJgBYjkZoahZQnCjX1FmR4qexjCzt87pGizAPc1YpEcsL6FNjNzMmZ6MarnP2wiAt2l6ra1ajsvzkrXxWQKQJ6jxBwk89JW0RY%2BsY4yMTXS9QXVWKqAiYezS3hS4saT8dI5S%2BnG8%2B%2BWeH9p4iyC31zaiD7dCM%2F%2FRKAAnuLvGiwhoyqSSA8HjhgkGS7CEz3lP0jbYPobHLS4qLUW7pgPb1UHrVuoKIEdS%2F0uYwpdOcvgY6pgGJ6PNtNpxD7I0yrrErFUGfeEBkNzGNcOLEzjtuF4bXEfn5%2B2791sVTvn1pIkpcM7LNQ%2Ft5o%2FbJZRBQq508nF4vNXip0MZRuwprQzqcbGH2sIipSezzEMwOYmglcoLGM8Mn9R7vWWLEzKdaH39EIm84MYjbiv4MWnn9%2BnDqF7070O2FZyq3wEvMpqmJCARMxbeErwwaE2O2bPuPVKDU6OJoIj5jQXiv&X-Amz-Signature=99d5c994ac63c4bd1e1fed6cdee37b57a99eb62de08d856c629acf6e0686e67e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3ZU2IJS%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGJUWGPpJxRfg5vlj8bOTa%2FTWWS%2BmQIXjGTUmG89lq7AiBNUGHZtycykzkutfVbZXol5Hi9sCbS%2FZZS%2BwSavklMiiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5%2Fc%2BZnGWw2FAOKxuKtwDjK6KkJ5tcapyDbwfCDw3Zcsn9fWBhOVQ2sEK45SaDVoMN8SMrRcYHggeJo3resb5Z8AMEe%2BLFRvqvFuw274N4RSTSbznc7Vh8wyi%2FYi%2F6jI6RZy5n5N5M%2B6GPtEWy%2BEEbyq0j1zw600c0kC7tLYhZMST3mkQ5NtMKE%2Fc0nsJkS1mYbCvX98V3mQ2yDcHejSa0CmW2bc5gZrN8Wy1Qf0j%2By4IiPnIrVisoCkjADCd8xmXli0shAMULhm0KJoYHSjlrXr3N2G%2BLMk3%2BqOsysb48wM%2Ft6sR%2BO0xGL6gIQJsOUDJHiErqS9NfmVbl5rdf722xd5GuwkoSZh9d7g6mQ6fOKYKLdfaLPZplfvbXM%2BmP56oe7xfVUPCiVgtsK0pZjQc5pZrnNQJGcQzL%2Fy6ASLNoZyrJgBYjkZoahZQnCjX1FmR4qexjCzt87pGizAPc1YpEcsL6FNjNzMmZ6MarnP2wiAt2l6ra1ajsvzkrXxWQKQJ6jxBwk89JW0RY%2BsY4yMTXS9QXVWKqAiYezS3hS4saT8dI5S%2BnG8%2B%2BWeH9p4iyC31zaiD7dCM%2F%2FRKAAnuLvGiwhoyqSSA8HjhgkGS7CEz3lP0jbYPobHLS4qLUW7pgPb1UHrVuoKIEdS%2F0uYwpdOcvgY6pgGJ6PNtNpxD7I0yrrErFUGfeEBkNzGNcOLEzjtuF4bXEfn5%2B2791sVTvn1pIkpcM7LNQ%2Ft5o%2FbJZRBQq508nF4vNXip0MZRuwprQzqcbGH2sIipSezzEMwOYmglcoLGM8Mn9R7vWWLEzKdaH39EIm84MYjbiv4MWnn9%2BnDqF7070O2FZyq3wEvMpqmJCARMxbeErwwaE2O2bPuPVKDU6OJoIj5jQXiv&X-Amz-Signature=55e4db241ed3bb795659fbdce540dd666dcc1c5b03715218cfce6907ec23a2fc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3ZU2IJS%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGJUWGPpJxRfg5vlj8bOTa%2FTWWS%2BmQIXjGTUmG89lq7AiBNUGHZtycykzkutfVbZXol5Hi9sCbS%2FZZS%2BwSavklMiiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5%2Fc%2BZnGWw2FAOKxuKtwDjK6KkJ5tcapyDbwfCDw3Zcsn9fWBhOVQ2sEK45SaDVoMN8SMrRcYHggeJo3resb5Z8AMEe%2BLFRvqvFuw274N4RSTSbznc7Vh8wyi%2FYi%2F6jI6RZy5n5N5M%2B6GPtEWy%2BEEbyq0j1zw600c0kC7tLYhZMST3mkQ5NtMKE%2Fc0nsJkS1mYbCvX98V3mQ2yDcHejSa0CmW2bc5gZrN8Wy1Qf0j%2By4IiPnIrVisoCkjADCd8xmXli0shAMULhm0KJoYHSjlrXr3N2G%2BLMk3%2BqOsysb48wM%2Ft6sR%2BO0xGL6gIQJsOUDJHiErqS9NfmVbl5rdf722xd5GuwkoSZh9d7g6mQ6fOKYKLdfaLPZplfvbXM%2BmP56oe7xfVUPCiVgtsK0pZjQc5pZrnNQJGcQzL%2Fy6ASLNoZyrJgBYjkZoahZQnCjX1FmR4qexjCzt87pGizAPc1YpEcsL6FNjNzMmZ6MarnP2wiAt2l6ra1ajsvzkrXxWQKQJ6jxBwk89JW0RY%2BsY4yMTXS9QXVWKqAiYezS3hS4saT8dI5S%2BnG8%2B%2BWeH9p4iyC31zaiD7dCM%2F%2FRKAAnuLvGiwhoyqSSA8HjhgkGS7CEz3lP0jbYPobHLS4qLUW7pgPb1UHrVuoKIEdS%2F0uYwpdOcvgY6pgGJ6PNtNpxD7I0yrrErFUGfeEBkNzGNcOLEzjtuF4bXEfn5%2B2791sVTvn1pIkpcM7LNQ%2Ft5o%2FbJZRBQq508nF4vNXip0MZRuwprQzqcbGH2sIipSezzEMwOYmglcoLGM8Mn9R7vWWLEzKdaH39EIm84MYjbiv4MWnn9%2BnDqF7070O2FZyq3wEvMpqmJCARMxbeErwwaE2O2bPuPVKDU6OJoIj5jQXiv&X-Amz-Signature=5b18f5c00cc1c288105ad9777da90cdaecf62df2f9f13915544506e0dfb8b279&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
