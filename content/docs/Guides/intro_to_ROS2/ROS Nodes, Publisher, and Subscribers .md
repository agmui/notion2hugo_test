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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NPFLOLL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDliXnlDjpx7E8oEXZ0MXuHRJMJSYWocvJkKBs2yCmOQwIhAPtemhqxr9xXsI0yycEWdxsqvdkUTCpzABLQXHyDKFTRKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzV6ChggMCVck0JyUYq3AMUWrxj4okpETINxNV%2BOAiNZY1O4YsZP6Nafi5QfBGvEe%2BBzskFAZkLJjpi%2Bremz3LIDJihC%2Bk%2BBDQh%2FmeX4VKv6zZaPfJzMOGm03158WQ43kw%2FlCvJnzDCDoay5bpq7%2FMoweA7oKSJlk0cYUrXywBabOi0V8%2FIv3IqH7AP1mCQWBzYqTc7tqiocirDUf448xug1kcHdE61sBtDJ7L1epLZJhpbMRh4isn8fcJ3A2IU9s%2BOTa%2Fs7k97W%2B3jsEGQS9smOz7PzcmCkxfkfDoJ9H2D0nnpHloR9WeCe6fbW2J5qbgzhV586flusE0ZgBtJlGlWgZ5WFqF0FplcFvtOo6EEZLbakcVN3NarrEK1bS1Z4rRCu%2F6W5PhDgCINruk%2FU%2Fps3kOLO1g7f5FBy6a1dwxB40Oj55gMEgRgxsGHVsXuJcoz2PlJjne4HkJTsYtx7qWCcMAFVXQJ3bEAJ%2BRR8j60jsiANwiXb8bFa7chDroCLlSxNZl9CyKoJLO3fUci9OH3xMzQRIhNFKSG8Oh9EWIISgCqcYzGmr443mu9OWymp9nzMqxqpQw3IjVGoftZO04Io0gOL9Hp%2BBfA%2F%2F9AR%2BSdoc5ywtA7Izqev%2FmBTQsF0aRLdFs%2BCbhqupb%2FrDD0g7G9BjqkAZzbnyPeEYkUHn2PSudIcpru1mGfCQ%2FT5ou%2B%2F9B6yLsfHExzrfoKFTRke%2FbFiIfYN9zyzads1qG63%2Bk0c4MYj4ie%2FQcjWgS%2BNajlKu6INSegzpA5AK389ucDaGZqFmHOBj064j%2B06gZQTbcJODCznkEnW8h35XegjlTU5Vx2gYNLJ%2Fn2jUWNDIp5FYtuyQ%2BLmb4cNFJvl1OItFeGc8Z94%2BGtjLLY&X-Amz-Signature=ea02ff5057d7b0ab7153da85f001bbdc93168457a82e35fc6279b422c720e64d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NPFLOLL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDliXnlDjpx7E8oEXZ0MXuHRJMJSYWocvJkKBs2yCmOQwIhAPtemhqxr9xXsI0yycEWdxsqvdkUTCpzABLQXHyDKFTRKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzV6ChggMCVck0JyUYq3AMUWrxj4okpETINxNV%2BOAiNZY1O4YsZP6Nafi5QfBGvEe%2BBzskFAZkLJjpi%2Bremz3LIDJihC%2Bk%2BBDQh%2FmeX4VKv6zZaPfJzMOGm03158WQ43kw%2FlCvJnzDCDoay5bpq7%2FMoweA7oKSJlk0cYUrXywBabOi0V8%2FIv3IqH7AP1mCQWBzYqTc7tqiocirDUf448xug1kcHdE61sBtDJ7L1epLZJhpbMRh4isn8fcJ3A2IU9s%2BOTa%2Fs7k97W%2B3jsEGQS9smOz7PzcmCkxfkfDoJ9H2D0nnpHloR9WeCe6fbW2J5qbgzhV586flusE0ZgBtJlGlWgZ5WFqF0FplcFvtOo6EEZLbakcVN3NarrEK1bS1Z4rRCu%2F6W5PhDgCINruk%2FU%2Fps3kOLO1g7f5FBy6a1dwxB40Oj55gMEgRgxsGHVsXuJcoz2PlJjne4HkJTsYtx7qWCcMAFVXQJ3bEAJ%2BRR8j60jsiANwiXb8bFa7chDroCLlSxNZl9CyKoJLO3fUci9OH3xMzQRIhNFKSG8Oh9EWIISgCqcYzGmr443mu9OWymp9nzMqxqpQw3IjVGoftZO04Io0gOL9Hp%2BBfA%2F%2F9AR%2BSdoc5ywtA7Izqev%2FmBTQsF0aRLdFs%2BCbhqupb%2FrDD0g7G9BjqkAZzbnyPeEYkUHn2PSudIcpru1mGfCQ%2FT5ou%2B%2F9B6yLsfHExzrfoKFTRke%2FbFiIfYN9zyzads1qG63%2Bk0c4MYj4ie%2FQcjWgS%2BNajlKu6INSegzpA5AK389ucDaGZqFmHOBj064j%2B06gZQTbcJODCznkEnW8h35XegjlTU5Vx2gYNLJ%2Fn2jUWNDIp5FYtuyQ%2BLmb4cNFJvl1OItFeGc8Z94%2BGtjLLY&X-Amz-Signature=bc178efb830e9316298e9a960b87b6ef58e5284752a7796b65a141407362f86b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NPFLOLL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDliXnlDjpx7E8oEXZ0MXuHRJMJSYWocvJkKBs2yCmOQwIhAPtemhqxr9xXsI0yycEWdxsqvdkUTCpzABLQXHyDKFTRKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzV6ChggMCVck0JyUYq3AMUWrxj4okpETINxNV%2BOAiNZY1O4YsZP6Nafi5QfBGvEe%2BBzskFAZkLJjpi%2Bremz3LIDJihC%2Bk%2BBDQh%2FmeX4VKv6zZaPfJzMOGm03158WQ43kw%2FlCvJnzDCDoay5bpq7%2FMoweA7oKSJlk0cYUrXywBabOi0V8%2FIv3IqH7AP1mCQWBzYqTc7tqiocirDUf448xug1kcHdE61sBtDJ7L1epLZJhpbMRh4isn8fcJ3A2IU9s%2BOTa%2Fs7k97W%2B3jsEGQS9smOz7PzcmCkxfkfDoJ9H2D0nnpHloR9WeCe6fbW2J5qbgzhV586flusE0ZgBtJlGlWgZ5WFqF0FplcFvtOo6EEZLbakcVN3NarrEK1bS1Z4rRCu%2F6W5PhDgCINruk%2FU%2Fps3kOLO1g7f5FBy6a1dwxB40Oj55gMEgRgxsGHVsXuJcoz2PlJjne4HkJTsYtx7qWCcMAFVXQJ3bEAJ%2BRR8j60jsiANwiXb8bFa7chDroCLlSxNZl9CyKoJLO3fUci9OH3xMzQRIhNFKSG8Oh9EWIISgCqcYzGmr443mu9OWymp9nzMqxqpQw3IjVGoftZO04Io0gOL9Hp%2BBfA%2F%2F9AR%2BSdoc5ywtA7Izqev%2FmBTQsF0aRLdFs%2BCbhqupb%2FrDD0g7G9BjqkAZzbnyPeEYkUHn2PSudIcpru1mGfCQ%2FT5ou%2B%2F9B6yLsfHExzrfoKFTRke%2FbFiIfYN9zyzads1qG63%2Bk0c4MYj4ie%2FQcjWgS%2BNajlKu6INSegzpA5AK389ucDaGZqFmHOBj064j%2B06gZQTbcJODCznkEnW8h35XegjlTU5Vx2gYNLJ%2Fn2jUWNDIp5FYtuyQ%2BLmb4cNFJvl1OItFeGc8Z94%2BGtjLLY&X-Amz-Signature=cb728cdc305639ded7665307c7ef8065ebfbb9a821d72c7a47c0dc8eacbfb18d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NPFLOLL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDliXnlDjpx7E8oEXZ0MXuHRJMJSYWocvJkKBs2yCmOQwIhAPtemhqxr9xXsI0yycEWdxsqvdkUTCpzABLQXHyDKFTRKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzV6ChggMCVck0JyUYq3AMUWrxj4okpETINxNV%2BOAiNZY1O4YsZP6Nafi5QfBGvEe%2BBzskFAZkLJjpi%2Bremz3LIDJihC%2Bk%2BBDQh%2FmeX4VKv6zZaPfJzMOGm03158WQ43kw%2FlCvJnzDCDoay5bpq7%2FMoweA7oKSJlk0cYUrXywBabOi0V8%2FIv3IqH7AP1mCQWBzYqTc7tqiocirDUf448xug1kcHdE61sBtDJ7L1epLZJhpbMRh4isn8fcJ3A2IU9s%2BOTa%2Fs7k97W%2B3jsEGQS9smOz7PzcmCkxfkfDoJ9H2D0nnpHloR9WeCe6fbW2J5qbgzhV586flusE0ZgBtJlGlWgZ5WFqF0FplcFvtOo6EEZLbakcVN3NarrEK1bS1Z4rRCu%2F6W5PhDgCINruk%2FU%2Fps3kOLO1g7f5FBy6a1dwxB40Oj55gMEgRgxsGHVsXuJcoz2PlJjne4HkJTsYtx7qWCcMAFVXQJ3bEAJ%2BRR8j60jsiANwiXb8bFa7chDroCLlSxNZl9CyKoJLO3fUci9OH3xMzQRIhNFKSG8Oh9EWIISgCqcYzGmr443mu9OWymp9nzMqxqpQw3IjVGoftZO04Io0gOL9Hp%2BBfA%2F%2F9AR%2BSdoc5ywtA7Izqev%2FmBTQsF0aRLdFs%2BCbhqupb%2FrDD0g7G9BjqkAZzbnyPeEYkUHn2PSudIcpru1mGfCQ%2FT5ou%2B%2F9B6yLsfHExzrfoKFTRke%2FbFiIfYN9zyzads1qG63%2Bk0c4MYj4ie%2FQcjWgS%2BNajlKu6INSegzpA5AK389ucDaGZqFmHOBj064j%2B06gZQTbcJODCznkEnW8h35XegjlTU5Vx2gYNLJ%2Fn2jUWNDIp5FYtuyQ%2BLmb4cNFJvl1OItFeGc8Z94%2BGtjLLY&X-Amz-Signature=022160c08948482c51683710e9f3932835503775e48c075abb97897e87d4e749&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NPFLOLL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDliXnlDjpx7E8oEXZ0MXuHRJMJSYWocvJkKBs2yCmOQwIhAPtemhqxr9xXsI0yycEWdxsqvdkUTCpzABLQXHyDKFTRKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzV6ChggMCVck0JyUYq3AMUWrxj4okpETINxNV%2BOAiNZY1O4YsZP6Nafi5QfBGvEe%2BBzskFAZkLJjpi%2Bremz3LIDJihC%2Bk%2BBDQh%2FmeX4VKv6zZaPfJzMOGm03158WQ43kw%2FlCvJnzDCDoay5bpq7%2FMoweA7oKSJlk0cYUrXywBabOi0V8%2FIv3IqH7AP1mCQWBzYqTc7tqiocirDUf448xug1kcHdE61sBtDJ7L1epLZJhpbMRh4isn8fcJ3A2IU9s%2BOTa%2Fs7k97W%2B3jsEGQS9smOz7PzcmCkxfkfDoJ9H2D0nnpHloR9WeCe6fbW2J5qbgzhV586flusE0ZgBtJlGlWgZ5WFqF0FplcFvtOo6EEZLbakcVN3NarrEK1bS1Z4rRCu%2F6W5PhDgCINruk%2FU%2Fps3kOLO1g7f5FBy6a1dwxB40Oj55gMEgRgxsGHVsXuJcoz2PlJjne4HkJTsYtx7qWCcMAFVXQJ3bEAJ%2BRR8j60jsiANwiXb8bFa7chDroCLlSxNZl9CyKoJLO3fUci9OH3xMzQRIhNFKSG8Oh9EWIISgCqcYzGmr443mu9OWymp9nzMqxqpQw3IjVGoftZO04Io0gOL9Hp%2BBfA%2F%2F9AR%2BSdoc5ywtA7Izqev%2FmBTQsF0aRLdFs%2BCbhqupb%2FrDD0g7G9BjqkAZzbnyPeEYkUHn2PSudIcpru1mGfCQ%2FT5ou%2B%2F9B6yLsfHExzrfoKFTRke%2FbFiIfYN9zyzads1qG63%2Bk0c4MYj4ie%2FQcjWgS%2BNajlKu6INSegzpA5AK389ucDaGZqFmHOBj064j%2B06gZQTbcJODCznkEnW8h35XegjlTU5Vx2gYNLJ%2Fn2jUWNDIp5FYtuyQ%2BLmb4cNFJvl1OItFeGc8Z94%2BGtjLLY&X-Amz-Signature=6e0481fcceac4df298f5344596fcee543d0cb79c686f7e77a07b77aad21f79ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NPFLOLL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDliXnlDjpx7E8oEXZ0MXuHRJMJSYWocvJkKBs2yCmOQwIhAPtemhqxr9xXsI0yycEWdxsqvdkUTCpzABLQXHyDKFTRKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzV6ChggMCVck0JyUYq3AMUWrxj4okpETINxNV%2BOAiNZY1O4YsZP6Nafi5QfBGvEe%2BBzskFAZkLJjpi%2Bremz3LIDJihC%2Bk%2BBDQh%2FmeX4VKv6zZaPfJzMOGm03158WQ43kw%2FlCvJnzDCDoay5bpq7%2FMoweA7oKSJlk0cYUrXywBabOi0V8%2FIv3IqH7AP1mCQWBzYqTc7tqiocirDUf448xug1kcHdE61sBtDJ7L1epLZJhpbMRh4isn8fcJ3A2IU9s%2BOTa%2Fs7k97W%2B3jsEGQS9smOz7PzcmCkxfkfDoJ9H2D0nnpHloR9WeCe6fbW2J5qbgzhV586flusE0ZgBtJlGlWgZ5WFqF0FplcFvtOo6EEZLbakcVN3NarrEK1bS1Z4rRCu%2F6W5PhDgCINruk%2FU%2Fps3kOLO1g7f5FBy6a1dwxB40Oj55gMEgRgxsGHVsXuJcoz2PlJjne4HkJTsYtx7qWCcMAFVXQJ3bEAJ%2BRR8j60jsiANwiXb8bFa7chDroCLlSxNZl9CyKoJLO3fUci9OH3xMzQRIhNFKSG8Oh9EWIISgCqcYzGmr443mu9OWymp9nzMqxqpQw3IjVGoftZO04Io0gOL9Hp%2BBfA%2F%2F9AR%2BSdoc5ywtA7Izqev%2FmBTQsF0aRLdFs%2BCbhqupb%2FrDD0g7G9BjqkAZzbnyPeEYkUHn2PSudIcpru1mGfCQ%2FT5ou%2B%2F9B6yLsfHExzrfoKFTRke%2FbFiIfYN9zyzads1qG63%2Bk0c4MYj4ie%2FQcjWgS%2BNajlKu6INSegzpA5AK389ucDaGZqFmHOBj064j%2B06gZQTbcJODCznkEnW8h35XegjlTU5Vx2gYNLJ%2Fn2jUWNDIp5FYtuyQ%2BLmb4cNFJvl1OItFeGc8Z94%2BGtjLLY&X-Amz-Signature=7220f4b6b9e59903988ca33a5135236d6e9c292e5bed35c9dbe920bdf70fc07c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NPFLOLL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDliXnlDjpx7E8oEXZ0MXuHRJMJSYWocvJkKBs2yCmOQwIhAPtemhqxr9xXsI0yycEWdxsqvdkUTCpzABLQXHyDKFTRKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzV6ChggMCVck0JyUYq3AMUWrxj4okpETINxNV%2BOAiNZY1O4YsZP6Nafi5QfBGvEe%2BBzskFAZkLJjpi%2Bremz3LIDJihC%2Bk%2BBDQh%2FmeX4VKv6zZaPfJzMOGm03158WQ43kw%2FlCvJnzDCDoay5bpq7%2FMoweA7oKSJlk0cYUrXywBabOi0V8%2FIv3IqH7AP1mCQWBzYqTc7tqiocirDUf448xug1kcHdE61sBtDJ7L1epLZJhpbMRh4isn8fcJ3A2IU9s%2BOTa%2Fs7k97W%2B3jsEGQS9smOz7PzcmCkxfkfDoJ9H2D0nnpHloR9WeCe6fbW2J5qbgzhV586flusE0ZgBtJlGlWgZ5WFqF0FplcFvtOo6EEZLbakcVN3NarrEK1bS1Z4rRCu%2F6W5PhDgCINruk%2FU%2Fps3kOLO1g7f5FBy6a1dwxB40Oj55gMEgRgxsGHVsXuJcoz2PlJjne4HkJTsYtx7qWCcMAFVXQJ3bEAJ%2BRR8j60jsiANwiXb8bFa7chDroCLlSxNZl9CyKoJLO3fUci9OH3xMzQRIhNFKSG8Oh9EWIISgCqcYzGmr443mu9OWymp9nzMqxqpQw3IjVGoftZO04Io0gOL9Hp%2BBfA%2F%2F9AR%2BSdoc5ywtA7Izqev%2FmBTQsF0aRLdFs%2BCbhqupb%2FrDD0g7G9BjqkAZzbnyPeEYkUHn2PSudIcpru1mGfCQ%2FT5ou%2B%2F9B6yLsfHExzrfoKFTRke%2FbFiIfYN9zyzads1qG63%2Bk0c4MYj4ie%2FQcjWgS%2BNajlKu6INSegzpA5AK389ucDaGZqFmHOBj064j%2B06gZQTbcJODCznkEnW8h35XegjlTU5Vx2gYNLJ%2Fn2jUWNDIp5FYtuyQ%2BLmb4cNFJvl1OItFeGc8Z94%2BGtjLLY&X-Amz-Signature=7a600d026b215c08c413344d0634fd99f82d506c7475551f84154dd321f8da83&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NPFLOLL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDliXnlDjpx7E8oEXZ0MXuHRJMJSYWocvJkKBs2yCmOQwIhAPtemhqxr9xXsI0yycEWdxsqvdkUTCpzABLQXHyDKFTRKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzV6ChggMCVck0JyUYq3AMUWrxj4okpETINxNV%2BOAiNZY1O4YsZP6Nafi5QfBGvEe%2BBzskFAZkLJjpi%2Bremz3LIDJihC%2Bk%2BBDQh%2FmeX4VKv6zZaPfJzMOGm03158WQ43kw%2FlCvJnzDCDoay5bpq7%2FMoweA7oKSJlk0cYUrXywBabOi0V8%2FIv3IqH7AP1mCQWBzYqTc7tqiocirDUf448xug1kcHdE61sBtDJ7L1epLZJhpbMRh4isn8fcJ3A2IU9s%2BOTa%2Fs7k97W%2B3jsEGQS9smOz7PzcmCkxfkfDoJ9H2D0nnpHloR9WeCe6fbW2J5qbgzhV586flusE0ZgBtJlGlWgZ5WFqF0FplcFvtOo6EEZLbakcVN3NarrEK1bS1Z4rRCu%2F6W5PhDgCINruk%2FU%2Fps3kOLO1g7f5FBy6a1dwxB40Oj55gMEgRgxsGHVsXuJcoz2PlJjne4HkJTsYtx7qWCcMAFVXQJ3bEAJ%2BRR8j60jsiANwiXb8bFa7chDroCLlSxNZl9CyKoJLO3fUci9OH3xMzQRIhNFKSG8Oh9EWIISgCqcYzGmr443mu9OWymp9nzMqxqpQw3IjVGoftZO04Io0gOL9Hp%2BBfA%2F%2F9AR%2BSdoc5ywtA7Izqev%2FmBTQsF0aRLdFs%2BCbhqupb%2FrDD0g7G9BjqkAZzbnyPeEYkUHn2PSudIcpru1mGfCQ%2FT5ou%2B%2F9B6yLsfHExzrfoKFTRke%2FbFiIfYN9zyzads1qG63%2Bk0c4MYj4ie%2FQcjWgS%2BNajlKu6INSegzpA5AK389ucDaGZqFmHOBj064j%2B06gZQTbcJODCznkEnW8h35XegjlTU5Vx2gYNLJ%2Fn2jUWNDIp5FYtuyQ%2BLmb4cNFJvl1OItFeGc8Z94%2BGtjLLY&X-Amz-Signature=058dc6fc45cdfcac315166a6efbd256e18376db637cdcd7b2075a9859fd21c4e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
