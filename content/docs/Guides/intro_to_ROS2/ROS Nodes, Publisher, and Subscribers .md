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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VYMGAG3%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPWc9wnkhSkVJnVBnUUB47p7cSjCPPUCrn%2FHhiTgnGRwIhAIJu5wNXzKqhoZjKZ5fqNbNY5WbbbSO5Mc31sJhEvTH2KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfdTLhEBJSgURQXfAq3AOxdJ%2FtqyhUVwuuQAMaKbLXz3BQPKn2JxlbGt05yT%2Fll5HvXTORq9lYnAaSvtLr3hWfoBB7Xq1NgdouDDur7woNtCraQ1vpB5QhUjpihA3bOycWa1RPz%2BFbJKYlrM1DyUmFNcH%2FmehCXiBc%2FGaSLBi9k%2FRjaM9X9W3FBvx7KKe7D63Hviucyl5cNw4zLlEJMeVWK5jB4djAzIb2e4TuwTFbnDkP0uZhNgE42hKYLZ1aUYgiZLxJXS38ll%2B3TMsEjrcGFAfK4CTB19DUez7E0Fy7Bu5IUw6MXVjuI%2BFh18iWY7pgaWhHH4s4lybiuTrJeiu1Ager8Ik8VV2uAk%2BOHixEF0xOoHp%2BZyEwgxgUWrU%2F65ossF6QoIJZWXxms6uXaSPYeGh%2B7kxor06%2FUQT9uhUjcdgsMkcC3YgPX37cgZsbhW5FhsaG6Wa%2Bllm7fNfHnOeglgSVk3sZM1xDxXV%2FFBPPx4tx0LFclm1JPMwTauiAo%2FOKb5w2GHrbZlfEbQQbRu5GJBr08yS8S8z46ekTCljf8QYWlCmzvrk29IiHYFfiNfBp5aIsao5AepGYyc%2Bb%2FAeN1q3C%2BDUKvDlnBaA%2F%2BLUSfEUag1rf70egM0cG%2FDxOjcO49AH6Y%2Bf6ifBTXjDN0Oq9BjqkAaMgZQM1kZtpRdxhZ6bq1sYSr3JevbSgo6rFjJrAc57XfAkzl9U26X3H4Up2jZhWG3ZTEKiTwYtib3c9aFi0W4QHByHttdjTfuEsw2htCwhJvktqDtJU92AzXsKOLb0iu%2FgXFil5Xn41yvt2MYAm%2B7e7v7x%2BbnsRksqYpZJZkQ8A0K8b5SXCBxj9fcvP7Qt1eUVRh0YwMM%2B6dPhjdqZtT%2FSChNqr&X-Amz-Signature=935a56c89b294def8273ed101895c8bdfd651577787f8b65c0c99a2e8b5b6f1f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VYMGAG3%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPWc9wnkhSkVJnVBnUUB47p7cSjCPPUCrn%2FHhiTgnGRwIhAIJu5wNXzKqhoZjKZ5fqNbNY5WbbbSO5Mc31sJhEvTH2KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfdTLhEBJSgURQXfAq3AOxdJ%2FtqyhUVwuuQAMaKbLXz3BQPKn2JxlbGt05yT%2Fll5HvXTORq9lYnAaSvtLr3hWfoBB7Xq1NgdouDDur7woNtCraQ1vpB5QhUjpihA3bOycWa1RPz%2BFbJKYlrM1DyUmFNcH%2FmehCXiBc%2FGaSLBi9k%2FRjaM9X9W3FBvx7KKe7D63Hviucyl5cNw4zLlEJMeVWK5jB4djAzIb2e4TuwTFbnDkP0uZhNgE42hKYLZ1aUYgiZLxJXS38ll%2B3TMsEjrcGFAfK4CTB19DUez7E0Fy7Bu5IUw6MXVjuI%2BFh18iWY7pgaWhHH4s4lybiuTrJeiu1Ager8Ik8VV2uAk%2BOHixEF0xOoHp%2BZyEwgxgUWrU%2F65ossF6QoIJZWXxms6uXaSPYeGh%2B7kxor06%2FUQT9uhUjcdgsMkcC3YgPX37cgZsbhW5FhsaG6Wa%2Bllm7fNfHnOeglgSVk3sZM1xDxXV%2FFBPPx4tx0LFclm1JPMwTauiAo%2FOKb5w2GHrbZlfEbQQbRu5GJBr08yS8S8z46ekTCljf8QYWlCmzvrk29IiHYFfiNfBp5aIsao5AepGYyc%2Bb%2FAeN1q3C%2BDUKvDlnBaA%2F%2BLUSfEUag1rf70egM0cG%2FDxOjcO49AH6Y%2Bf6ifBTXjDN0Oq9BjqkAaMgZQM1kZtpRdxhZ6bq1sYSr3JevbSgo6rFjJrAc57XfAkzl9U26X3H4Up2jZhWG3ZTEKiTwYtib3c9aFi0W4QHByHttdjTfuEsw2htCwhJvktqDtJU92AzXsKOLb0iu%2FgXFil5Xn41yvt2MYAm%2B7e7v7x%2BbnsRksqYpZJZkQ8A0K8b5SXCBxj9fcvP7Qt1eUVRh0YwMM%2B6dPhjdqZtT%2FSChNqr&X-Amz-Signature=359178c520ae1d83ece6bc71d1ed21f0545530f8b0d77ffcbb76c9f57060851b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VYMGAG3%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPWc9wnkhSkVJnVBnUUB47p7cSjCPPUCrn%2FHhiTgnGRwIhAIJu5wNXzKqhoZjKZ5fqNbNY5WbbbSO5Mc31sJhEvTH2KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfdTLhEBJSgURQXfAq3AOxdJ%2FtqyhUVwuuQAMaKbLXz3BQPKn2JxlbGt05yT%2Fll5HvXTORq9lYnAaSvtLr3hWfoBB7Xq1NgdouDDur7woNtCraQ1vpB5QhUjpihA3bOycWa1RPz%2BFbJKYlrM1DyUmFNcH%2FmehCXiBc%2FGaSLBi9k%2FRjaM9X9W3FBvx7KKe7D63Hviucyl5cNw4zLlEJMeVWK5jB4djAzIb2e4TuwTFbnDkP0uZhNgE42hKYLZ1aUYgiZLxJXS38ll%2B3TMsEjrcGFAfK4CTB19DUez7E0Fy7Bu5IUw6MXVjuI%2BFh18iWY7pgaWhHH4s4lybiuTrJeiu1Ager8Ik8VV2uAk%2BOHixEF0xOoHp%2BZyEwgxgUWrU%2F65ossF6QoIJZWXxms6uXaSPYeGh%2B7kxor06%2FUQT9uhUjcdgsMkcC3YgPX37cgZsbhW5FhsaG6Wa%2Bllm7fNfHnOeglgSVk3sZM1xDxXV%2FFBPPx4tx0LFclm1JPMwTauiAo%2FOKb5w2GHrbZlfEbQQbRu5GJBr08yS8S8z46ekTCljf8QYWlCmzvrk29IiHYFfiNfBp5aIsao5AepGYyc%2Bb%2FAeN1q3C%2BDUKvDlnBaA%2F%2BLUSfEUag1rf70egM0cG%2FDxOjcO49AH6Y%2Bf6ifBTXjDN0Oq9BjqkAaMgZQM1kZtpRdxhZ6bq1sYSr3JevbSgo6rFjJrAc57XfAkzl9U26X3H4Up2jZhWG3ZTEKiTwYtib3c9aFi0W4QHByHttdjTfuEsw2htCwhJvktqDtJU92AzXsKOLb0iu%2FgXFil5Xn41yvt2MYAm%2B7e7v7x%2BbnsRksqYpZJZkQ8A0K8b5SXCBxj9fcvP7Qt1eUVRh0YwMM%2B6dPhjdqZtT%2FSChNqr&X-Amz-Signature=6b7da6b8bf6184e94c5578d16ede3481fadcb451b452282ffd26629dd934a78b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VYMGAG3%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPWc9wnkhSkVJnVBnUUB47p7cSjCPPUCrn%2FHhiTgnGRwIhAIJu5wNXzKqhoZjKZ5fqNbNY5WbbbSO5Mc31sJhEvTH2KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfdTLhEBJSgURQXfAq3AOxdJ%2FtqyhUVwuuQAMaKbLXz3BQPKn2JxlbGt05yT%2Fll5HvXTORq9lYnAaSvtLr3hWfoBB7Xq1NgdouDDur7woNtCraQ1vpB5QhUjpihA3bOycWa1RPz%2BFbJKYlrM1DyUmFNcH%2FmehCXiBc%2FGaSLBi9k%2FRjaM9X9W3FBvx7KKe7D63Hviucyl5cNw4zLlEJMeVWK5jB4djAzIb2e4TuwTFbnDkP0uZhNgE42hKYLZ1aUYgiZLxJXS38ll%2B3TMsEjrcGFAfK4CTB19DUez7E0Fy7Bu5IUw6MXVjuI%2BFh18iWY7pgaWhHH4s4lybiuTrJeiu1Ager8Ik8VV2uAk%2BOHixEF0xOoHp%2BZyEwgxgUWrU%2F65ossF6QoIJZWXxms6uXaSPYeGh%2B7kxor06%2FUQT9uhUjcdgsMkcC3YgPX37cgZsbhW5FhsaG6Wa%2Bllm7fNfHnOeglgSVk3sZM1xDxXV%2FFBPPx4tx0LFclm1JPMwTauiAo%2FOKb5w2GHrbZlfEbQQbRu5GJBr08yS8S8z46ekTCljf8QYWlCmzvrk29IiHYFfiNfBp5aIsao5AepGYyc%2Bb%2FAeN1q3C%2BDUKvDlnBaA%2F%2BLUSfEUag1rf70egM0cG%2FDxOjcO49AH6Y%2Bf6ifBTXjDN0Oq9BjqkAaMgZQM1kZtpRdxhZ6bq1sYSr3JevbSgo6rFjJrAc57XfAkzl9U26X3H4Up2jZhWG3ZTEKiTwYtib3c9aFi0W4QHByHttdjTfuEsw2htCwhJvktqDtJU92AzXsKOLb0iu%2FgXFil5Xn41yvt2MYAm%2B7e7v7x%2BbnsRksqYpZJZkQ8A0K8b5SXCBxj9fcvP7Qt1eUVRh0YwMM%2B6dPhjdqZtT%2FSChNqr&X-Amz-Signature=da68b26d9e0632437ae3ccc6c055ff418cc8e3a36738d82925ff840771b21af4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VYMGAG3%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPWc9wnkhSkVJnVBnUUB47p7cSjCPPUCrn%2FHhiTgnGRwIhAIJu5wNXzKqhoZjKZ5fqNbNY5WbbbSO5Mc31sJhEvTH2KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfdTLhEBJSgURQXfAq3AOxdJ%2FtqyhUVwuuQAMaKbLXz3BQPKn2JxlbGt05yT%2Fll5HvXTORq9lYnAaSvtLr3hWfoBB7Xq1NgdouDDur7woNtCraQ1vpB5QhUjpihA3bOycWa1RPz%2BFbJKYlrM1DyUmFNcH%2FmehCXiBc%2FGaSLBi9k%2FRjaM9X9W3FBvx7KKe7D63Hviucyl5cNw4zLlEJMeVWK5jB4djAzIb2e4TuwTFbnDkP0uZhNgE42hKYLZ1aUYgiZLxJXS38ll%2B3TMsEjrcGFAfK4CTB19DUez7E0Fy7Bu5IUw6MXVjuI%2BFh18iWY7pgaWhHH4s4lybiuTrJeiu1Ager8Ik8VV2uAk%2BOHixEF0xOoHp%2BZyEwgxgUWrU%2F65ossF6QoIJZWXxms6uXaSPYeGh%2B7kxor06%2FUQT9uhUjcdgsMkcC3YgPX37cgZsbhW5FhsaG6Wa%2Bllm7fNfHnOeglgSVk3sZM1xDxXV%2FFBPPx4tx0LFclm1JPMwTauiAo%2FOKb5w2GHrbZlfEbQQbRu5GJBr08yS8S8z46ekTCljf8QYWlCmzvrk29IiHYFfiNfBp5aIsao5AepGYyc%2Bb%2FAeN1q3C%2BDUKvDlnBaA%2F%2BLUSfEUag1rf70egM0cG%2FDxOjcO49AH6Y%2Bf6ifBTXjDN0Oq9BjqkAaMgZQM1kZtpRdxhZ6bq1sYSr3JevbSgo6rFjJrAc57XfAkzl9U26X3H4Up2jZhWG3ZTEKiTwYtib3c9aFi0W4QHByHttdjTfuEsw2htCwhJvktqDtJU92AzXsKOLb0iu%2FgXFil5Xn41yvt2MYAm%2B7e7v7x%2BbnsRksqYpZJZkQ8A0K8b5SXCBxj9fcvP7Qt1eUVRh0YwMM%2B6dPhjdqZtT%2FSChNqr&X-Amz-Signature=fa9576babb181e8a1c2a6694bb08dcb3e633c62e212d4d0c2c93d429507e6c46&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VYMGAG3%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPWc9wnkhSkVJnVBnUUB47p7cSjCPPUCrn%2FHhiTgnGRwIhAIJu5wNXzKqhoZjKZ5fqNbNY5WbbbSO5Mc31sJhEvTH2KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfdTLhEBJSgURQXfAq3AOxdJ%2FtqyhUVwuuQAMaKbLXz3BQPKn2JxlbGt05yT%2Fll5HvXTORq9lYnAaSvtLr3hWfoBB7Xq1NgdouDDur7woNtCraQ1vpB5QhUjpihA3bOycWa1RPz%2BFbJKYlrM1DyUmFNcH%2FmehCXiBc%2FGaSLBi9k%2FRjaM9X9W3FBvx7KKe7D63Hviucyl5cNw4zLlEJMeVWK5jB4djAzIb2e4TuwTFbnDkP0uZhNgE42hKYLZ1aUYgiZLxJXS38ll%2B3TMsEjrcGFAfK4CTB19DUez7E0Fy7Bu5IUw6MXVjuI%2BFh18iWY7pgaWhHH4s4lybiuTrJeiu1Ager8Ik8VV2uAk%2BOHixEF0xOoHp%2BZyEwgxgUWrU%2F65ossF6QoIJZWXxms6uXaSPYeGh%2B7kxor06%2FUQT9uhUjcdgsMkcC3YgPX37cgZsbhW5FhsaG6Wa%2Bllm7fNfHnOeglgSVk3sZM1xDxXV%2FFBPPx4tx0LFclm1JPMwTauiAo%2FOKb5w2GHrbZlfEbQQbRu5GJBr08yS8S8z46ekTCljf8QYWlCmzvrk29IiHYFfiNfBp5aIsao5AepGYyc%2Bb%2FAeN1q3C%2BDUKvDlnBaA%2F%2BLUSfEUag1rf70egM0cG%2FDxOjcO49AH6Y%2Bf6ifBTXjDN0Oq9BjqkAaMgZQM1kZtpRdxhZ6bq1sYSr3JevbSgo6rFjJrAc57XfAkzl9U26X3H4Up2jZhWG3ZTEKiTwYtib3c9aFi0W4QHByHttdjTfuEsw2htCwhJvktqDtJU92AzXsKOLb0iu%2FgXFil5Xn41yvt2MYAm%2B7e7v7x%2BbnsRksqYpZJZkQ8A0K8b5SXCBxj9fcvP7Qt1eUVRh0YwMM%2B6dPhjdqZtT%2FSChNqr&X-Amz-Signature=f187a9ba0b0a35b4bcbc77d193184dec706addb91e3b247ed634a608dc6ec57a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VYMGAG3%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPWc9wnkhSkVJnVBnUUB47p7cSjCPPUCrn%2FHhiTgnGRwIhAIJu5wNXzKqhoZjKZ5fqNbNY5WbbbSO5Mc31sJhEvTH2KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfdTLhEBJSgURQXfAq3AOxdJ%2FtqyhUVwuuQAMaKbLXz3BQPKn2JxlbGt05yT%2Fll5HvXTORq9lYnAaSvtLr3hWfoBB7Xq1NgdouDDur7woNtCraQ1vpB5QhUjpihA3bOycWa1RPz%2BFbJKYlrM1DyUmFNcH%2FmehCXiBc%2FGaSLBi9k%2FRjaM9X9W3FBvx7KKe7D63Hviucyl5cNw4zLlEJMeVWK5jB4djAzIb2e4TuwTFbnDkP0uZhNgE42hKYLZ1aUYgiZLxJXS38ll%2B3TMsEjrcGFAfK4CTB19DUez7E0Fy7Bu5IUw6MXVjuI%2BFh18iWY7pgaWhHH4s4lybiuTrJeiu1Ager8Ik8VV2uAk%2BOHixEF0xOoHp%2BZyEwgxgUWrU%2F65ossF6QoIJZWXxms6uXaSPYeGh%2B7kxor06%2FUQT9uhUjcdgsMkcC3YgPX37cgZsbhW5FhsaG6Wa%2Bllm7fNfHnOeglgSVk3sZM1xDxXV%2FFBPPx4tx0LFclm1JPMwTauiAo%2FOKb5w2GHrbZlfEbQQbRu5GJBr08yS8S8z46ekTCljf8QYWlCmzvrk29IiHYFfiNfBp5aIsao5AepGYyc%2Bb%2FAeN1q3C%2BDUKvDlnBaA%2F%2BLUSfEUag1rf70egM0cG%2FDxOjcO49AH6Y%2Bf6ifBTXjDN0Oq9BjqkAaMgZQM1kZtpRdxhZ6bq1sYSr3JevbSgo6rFjJrAc57XfAkzl9U26X3H4Up2jZhWG3ZTEKiTwYtib3c9aFi0W4QHByHttdjTfuEsw2htCwhJvktqDtJU92AzXsKOLb0iu%2FgXFil5Xn41yvt2MYAm%2B7e7v7x%2BbnsRksqYpZJZkQ8A0K8b5SXCBxj9fcvP7Qt1eUVRh0YwMM%2B6dPhjdqZtT%2FSChNqr&X-Amz-Signature=6584c426e50078fa87ebb40b4da4a75322f493c0da4969131b50bac63c95474e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VYMGAG3%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPWc9wnkhSkVJnVBnUUB47p7cSjCPPUCrn%2FHhiTgnGRwIhAIJu5wNXzKqhoZjKZ5fqNbNY5WbbbSO5Mc31sJhEvTH2KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfdTLhEBJSgURQXfAq3AOxdJ%2FtqyhUVwuuQAMaKbLXz3BQPKn2JxlbGt05yT%2Fll5HvXTORq9lYnAaSvtLr3hWfoBB7Xq1NgdouDDur7woNtCraQ1vpB5QhUjpihA3bOycWa1RPz%2BFbJKYlrM1DyUmFNcH%2FmehCXiBc%2FGaSLBi9k%2FRjaM9X9W3FBvx7KKe7D63Hviucyl5cNw4zLlEJMeVWK5jB4djAzIb2e4TuwTFbnDkP0uZhNgE42hKYLZ1aUYgiZLxJXS38ll%2B3TMsEjrcGFAfK4CTB19DUez7E0Fy7Bu5IUw6MXVjuI%2BFh18iWY7pgaWhHH4s4lybiuTrJeiu1Ager8Ik8VV2uAk%2BOHixEF0xOoHp%2BZyEwgxgUWrU%2F65ossF6QoIJZWXxms6uXaSPYeGh%2B7kxor06%2FUQT9uhUjcdgsMkcC3YgPX37cgZsbhW5FhsaG6Wa%2Bllm7fNfHnOeglgSVk3sZM1xDxXV%2FFBPPx4tx0LFclm1JPMwTauiAo%2FOKb5w2GHrbZlfEbQQbRu5GJBr08yS8S8z46ekTCljf8QYWlCmzvrk29IiHYFfiNfBp5aIsao5AepGYyc%2Bb%2FAeN1q3C%2BDUKvDlnBaA%2F%2BLUSfEUag1rf70egM0cG%2FDxOjcO49AH6Y%2Bf6ifBTXjDN0Oq9BjqkAaMgZQM1kZtpRdxhZ6bq1sYSr3JevbSgo6rFjJrAc57XfAkzl9U26X3H4Up2jZhWG3ZTEKiTwYtib3c9aFi0W4QHByHttdjTfuEsw2htCwhJvktqDtJU92AzXsKOLb0iu%2FgXFil5Xn41yvt2MYAm%2B7e7v7x%2BbnsRksqYpZJZkQ8A0K8b5SXCBxj9fcvP7Qt1eUVRh0YwMM%2B6dPhjdqZtT%2FSChNqr&X-Amz-Signature=96a1058d9c261c1dec3c9628681a4f98f09e12a0972c50c5611721b265411925&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
