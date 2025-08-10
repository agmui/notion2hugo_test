---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW3TWQIY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5nIJ8ozjJ%2BFqt46hp9ysrwXd88k28hKVNKEiqtlaYTwIhANLxcLHETltrTqcfA5%2F4KsxDIDABEiIfc58HnR7Zbwb7KogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY%2FVKD821kv7VeHRgq3AO%2BHc03G%2Bv36csnx%2BykZNS7YJNlctoirtmH%2BgFlJ%2BSZj8A%2BtZ5uwx4JV6fMcR%2B4vpY5Mq0uQSgTBjPb%2BUOrIJDaImEpHJ4uVpJAMoQAKXGUA0HTAErsfEsgILizKqOwQ8vRXcz7yY0ocbH1ozNadEzW8s1auiE3w54Ds4lZe9uSGUfN3dLmI7l9gc7%2BWVj7h0voEElH%2BMkIROJp5PiYOHKHH5D7msKBRqe%2BFJNp4%2Ftw5S%2Fez2IhkkI5FGMxHlyvQpMGTzG0YdwQx9dXQZkXMsiH9ivr%2BDwa83X6QnqMkFPIA36lT6wKCgwqSM%2BVec5TY489%2Butg4e%2F%2BnArA7TnI%2BttQCj3smzaqmoHnLnG28%2FP9fkm7%2BNI16ApAS5er8CN%2FKQuXooqS2Lync3yRZlX18nC3tuZHeEBOTShymsvm4DYW5viQHzzeGAkC%2FhCMc9%2BuYTdYzbjbL%2B85e8KocpQaAMgKNBxiraIi8FR1%2Bz7I2eCNLF0iXVJ9LGH74DrMEIM6F9cwAyCBgRIRk6MwuHtmceoedSQEdwLlLr8F%2FNxavyhI5sLwFTf%2BB3fQhQZfCTLzGLyHBroz05FHzlq0qo6wUM5q5iOTb%2F5bCK%2BAd1dZ7irG0nqjx5ecTrc1bpHQVzCXs9%2FEBjqkAUwNtndhQ6QDDTj9GlpSdDlf2V1b9lENmHVcD9WBgu0XWbTeFHL%2BXZSdP0QSpC86%2BsYtP5INO2xVehKo4Y1G3kCLN1h6QHO2ghVeWZajlsBPU7jOO0LmRqtwhruGNY2jm0KxTnwqHr0k6Ha3IkiyoBrZ62kJ0VXqBFVArawPml%2BxG2cXIbBolvPHFdp1Dp%2F3GItt2RVen3TCbIed3kyxxV7L42L%2B&X-Amz-Signature=025cc34d8eba846a6b76466a244ea77b1ee2a856b00adbf0cd1d433143c6948f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW3TWQIY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5nIJ8ozjJ%2BFqt46hp9ysrwXd88k28hKVNKEiqtlaYTwIhANLxcLHETltrTqcfA5%2F4KsxDIDABEiIfc58HnR7Zbwb7KogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY%2FVKD821kv7VeHRgq3AO%2BHc03G%2Bv36csnx%2BykZNS7YJNlctoirtmH%2BgFlJ%2BSZj8A%2BtZ5uwx4JV6fMcR%2B4vpY5Mq0uQSgTBjPb%2BUOrIJDaImEpHJ4uVpJAMoQAKXGUA0HTAErsfEsgILizKqOwQ8vRXcz7yY0ocbH1ozNadEzW8s1auiE3w54Ds4lZe9uSGUfN3dLmI7l9gc7%2BWVj7h0voEElH%2BMkIROJp5PiYOHKHH5D7msKBRqe%2BFJNp4%2Ftw5S%2Fez2IhkkI5FGMxHlyvQpMGTzG0YdwQx9dXQZkXMsiH9ivr%2BDwa83X6QnqMkFPIA36lT6wKCgwqSM%2BVec5TY489%2Butg4e%2F%2BnArA7TnI%2BttQCj3smzaqmoHnLnG28%2FP9fkm7%2BNI16ApAS5er8CN%2FKQuXooqS2Lync3yRZlX18nC3tuZHeEBOTShymsvm4DYW5viQHzzeGAkC%2FhCMc9%2BuYTdYzbjbL%2B85e8KocpQaAMgKNBxiraIi8FR1%2Bz7I2eCNLF0iXVJ9LGH74DrMEIM6F9cwAyCBgRIRk6MwuHtmceoedSQEdwLlLr8F%2FNxavyhI5sLwFTf%2BB3fQhQZfCTLzGLyHBroz05FHzlq0qo6wUM5q5iOTb%2F5bCK%2BAd1dZ7irG0nqjx5ecTrc1bpHQVzCXs9%2FEBjqkAUwNtndhQ6QDDTj9GlpSdDlf2V1b9lENmHVcD9WBgu0XWbTeFHL%2BXZSdP0QSpC86%2BsYtP5INO2xVehKo4Y1G3kCLN1h6QHO2ghVeWZajlsBPU7jOO0LmRqtwhruGNY2jm0KxTnwqHr0k6Ha3IkiyoBrZ62kJ0VXqBFVArawPml%2BxG2cXIbBolvPHFdp1Dp%2F3GItt2RVen3TCbIed3kyxxV7L42L%2B&X-Amz-Signature=a748929c9a06f32bb2032b8c4d5ca85c117d5ffd6a996ae9f99c55e1fc0e592a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW3TWQIY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5nIJ8ozjJ%2BFqt46hp9ysrwXd88k28hKVNKEiqtlaYTwIhANLxcLHETltrTqcfA5%2F4KsxDIDABEiIfc58HnR7Zbwb7KogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY%2FVKD821kv7VeHRgq3AO%2BHc03G%2Bv36csnx%2BykZNS7YJNlctoirtmH%2BgFlJ%2BSZj8A%2BtZ5uwx4JV6fMcR%2B4vpY5Mq0uQSgTBjPb%2BUOrIJDaImEpHJ4uVpJAMoQAKXGUA0HTAErsfEsgILizKqOwQ8vRXcz7yY0ocbH1ozNadEzW8s1auiE3w54Ds4lZe9uSGUfN3dLmI7l9gc7%2BWVj7h0voEElH%2BMkIROJp5PiYOHKHH5D7msKBRqe%2BFJNp4%2Ftw5S%2Fez2IhkkI5FGMxHlyvQpMGTzG0YdwQx9dXQZkXMsiH9ivr%2BDwa83X6QnqMkFPIA36lT6wKCgwqSM%2BVec5TY489%2Butg4e%2F%2BnArA7TnI%2BttQCj3smzaqmoHnLnG28%2FP9fkm7%2BNI16ApAS5er8CN%2FKQuXooqS2Lync3yRZlX18nC3tuZHeEBOTShymsvm4DYW5viQHzzeGAkC%2FhCMc9%2BuYTdYzbjbL%2B85e8KocpQaAMgKNBxiraIi8FR1%2Bz7I2eCNLF0iXVJ9LGH74DrMEIM6F9cwAyCBgRIRk6MwuHtmceoedSQEdwLlLr8F%2FNxavyhI5sLwFTf%2BB3fQhQZfCTLzGLyHBroz05FHzlq0qo6wUM5q5iOTb%2F5bCK%2BAd1dZ7irG0nqjx5ecTrc1bpHQVzCXs9%2FEBjqkAUwNtndhQ6QDDTj9GlpSdDlf2V1b9lENmHVcD9WBgu0XWbTeFHL%2BXZSdP0QSpC86%2BsYtP5INO2xVehKo4Y1G3kCLN1h6QHO2ghVeWZajlsBPU7jOO0LmRqtwhruGNY2jm0KxTnwqHr0k6Ha3IkiyoBrZ62kJ0VXqBFVArawPml%2BxG2cXIbBolvPHFdp1Dp%2F3GItt2RVen3TCbIed3kyxxV7L42L%2B&X-Amz-Signature=586b5b83de55a06c3a9b724436d81437d9759b40c74ab50a0322f4c7b7f219b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW3TWQIY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5nIJ8ozjJ%2BFqt46hp9ysrwXd88k28hKVNKEiqtlaYTwIhANLxcLHETltrTqcfA5%2F4KsxDIDABEiIfc58HnR7Zbwb7KogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY%2FVKD821kv7VeHRgq3AO%2BHc03G%2Bv36csnx%2BykZNS7YJNlctoirtmH%2BgFlJ%2BSZj8A%2BtZ5uwx4JV6fMcR%2B4vpY5Mq0uQSgTBjPb%2BUOrIJDaImEpHJ4uVpJAMoQAKXGUA0HTAErsfEsgILizKqOwQ8vRXcz7yY0ocbH1ozNadEzW8s1auiE3w54Ds4lZe9uSGUfN3dLmI7l9gc7%2BWVj7h0voEElH%2BMkIROJp5PiYOHKHH5D7msKBRqe%2BFJNp4%2Ftw5S%2Fez2IhkkI5FGMxHlyvQpMGTzG0YdwQx9dXQZkXMsiH9ivr%2BDwa83X6QnqMkFPIA36lT6wKCgwqSM%2BVec5TY489%2Butg4e%2F%2BnArA7TnI%2BttQCj3smzaqmoHnLnG28%2FP9fkm7%2BNI16ApAS5er8CN%2FKQuXooqS2Lync3yRZlX18nC3tuZHeEBOTShymsvm4DYW5viQHzzeGAkC%2FhCMc9%2BuYTdYzbjbL%2B85e8KocpQaAMgKNBxiraIi8FR1%2Bz7I2eCNLF0iXVJ9LGH74DrMEIM6F9cwAyCBgRIRk6MwuHtmceoedSQEdwLlLr8F%2FNxavyhI5sLwFTf%2BB3fQhQZfCTLzGLyHBroz05FHzlq0qo6wUM5q5iOTb%2F5bCK%2BAd1dZ7irG0nqjx5ecTrc1bpHQVzCXs9%2FEBjqkAUwNtndhQ6QDDTj9GlpSdDlf2V1b9lENmHVcD9WBgu0XWbTeFHL%2BXZSdP0QSpC86%2BsYtP5INO2xVehKo4Y1G3kCLN1h6QHO2ghVeWZajlsBPU7jOO0LmRqtwhruGNY2jm0KxTnwqHr0k6Ha3IkiyoBrZ62kJ0VXqBFVArawPml%2BxG2cXIbBolvPHFdp1Dp%2F3GItt2RVen3TCbIed3kyxxV7L42L%2B&X-Amz-Signature=f63c6fa392a61e52c0254f1546702d41312641fa300d9fae9360406ef8d22784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW3TWQIY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5nIJ8ozjJ%2BFqt46hp9ysrwXd88k28hKVNKEiqtlaYTwIhANLxcLHETltrTqcfA5%2F4KsxDIDABEiIfc58HnR7Zbwb7KogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY%2FVKD821kv7VeHRgq3AO%2BHc03G%2Bv36csnx%2BykZNS7YJNlctoirtmH%2BgFlJ%2BSZj8A%2BtZ5uwx4JV6fMcR%2B4vpY5Mq0uQSgTBjPb%2BUOrIJDaImEpHJ4uVpJAMoQAKXGUA0HTAErsfEsgILizKqOwQ8vRXcz7yY0ocbH1ozNadEzW8s1auiE3w54Ds4lZe9uSGUfN3dLmI7l9gc7%2BWVj7h0voEElH%2BMkIROJp5PiYOHKHH5D7msKBRqe%2BFJNp4%2Ftw5S%2Fez2IhkkI5FGMxHlyvQpMGTzG0YdwQx9dXQZkXMsiH9ivr%2BDwa83X6QnqMkFPIA36lT6wKCgwqSM%2BVec5TY489%2Butg4e%2F%2BnArA7TnI%2BttQCj3smzaqmoHnLnG28%2FP9fkm7%2BNI16ApAS5er8CN%2FKQuXooqS2Lync3yRZlX18nC3tuZHeEBOTShymsvm4DYW5viQHzzeGAkC%2FhCMc9%2BuYTdYzbjbL%2B85e8KocpQaAMgKNBxiraIi8FR1%2Bz7I2eCNLF0iXVJ9LGH74DrMEIM6F9cwAyCBgRIRk6MwuHtmceoedSQEdwLlLr8F%2FNxavyhI5sLwFTf%2BB3fQhQZfCTLzGLyHBroz05FHzlq0qo6wUM5q5iOTb%2F5bCK%2BAd1dZ7irG0nqjx5ecTrc1bpHQVzCXs9%2FEBjqkAUwNtndhQ6QDDTj9GlpSdDlf2V1b9lENmHVcD9WBgu0XWbTeFHL%2BXZSdP0QSpC86%2BsYtP5INO2xVehKo4Y1G3kCLN1h6QHO2ghVeWZajlsBPU7jOO0LmRqtwhruGNY2jm0KxTnwqHr0k6Ha3IkiyoBrZ62kJ0VXqBFVArawPml%2BxG2cXIbBolvPHFdp1Dp%2F3GItt2RVen3TCbIed3kyxxV7L42L%2B&X-Amz-Signature=85bdcb725446826eeab0bfeb89c969089458acc7a1c0da197abf440db362e331&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW3TWQIY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5nIJ8ozjJ%2BFqt46hp9ysrwXd88k28hKVNKEiqtlaYTwIhANLxcLHETltrTqcfA5%2F4KsxDIDABEiIfc58HnR7Zbwb7KogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY%2FVKD821kv7VeHRgq3AO%2BHc03G%2Bv36csnx%2BykZNS7YJNlctoirtmH%2BgFlJ%2BSZj8A%2BtZ5uwx4JV6fMcR%2B4vpY5Mq0uQSgTBjPb%2BUOrIJDaImEpHJ4uVpJAMoQAKXGUA0HTAErsfEsgILizKqOwQ8vRXcz7yY0ocbH1ozNadEzW8s1auiE3w54Ds4lZe9uSGUfN3dLmI7l9gc7%2BWVj7h0voEElH%2BMkIROJp5PiYOHKHH5D7msKBRqe%2BFJNp4%2Ftw5S%2Fez2IhkkI5FGMxHlyvQpMGTzG0YdwQx9dXQZkXMsiH9ivr%2BDwa83X6QnqMkFPIA36lT6wKCgwqSM%2BVec5TY489%2Butg4e%2F%2BnArA7TnI%2BttQCj3smzaqmoHnLnG28%2FP9fkm7%2BNI16ApAS5er8CN%2FKQuXooqS2Lync3yRZlX18nC3tuZHeEBOTShymsvm4DYW5viQHzzeGAkC%2FhCMc9%2BuYTdYzbjbL%2B85e8KocpQaAMgKNBxiraIi8FR1%2Bz7I2eCNLF0iXVJ9LGH74DrMEIM6F9cwAyCBgRIRk6MwuHtmceoedSQEdwLlLr8F%2FNxavyhI5sLwFTf%2BB3fQhQZfCTLzGLyHBroz05FHzlq0qo6wUM5q5iOTb%2F5bCK%2BAd1dZ7irG0nqjx5ecTrc1bpHQVzCXs9%2FEBjqkAUwNtndhQ6QDDTj9GlpSdDlf2V1b9lENmHVcD9WBgu0XWbTeFHL%2BXZSdP0QSpC86%2BsYtP5INO2xVehKo4Y1G3kCLN1h6QHO2ghVeWZajlsBPU7jOO0LmRqtwhruGNY2jm0KxTnwqHr0k6Ha3IkiyoBrZ62kJ0VXqBFVArawPml%2BxG2cXIbBolvPHFdp1Dp%2F3GItt2RVen3TCbIed3kyxxV7L42L%2B&X-Amz-Signature=f509e2452772d189e858b507b6d0976abd569a14f37f70b05e1360f17eb40aeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW3TWQIY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5nIJ8ozjJ%2BFqt46hp9ysrwXd88k28hKVNKEiqtlaYTwIhANLxcLHETltrTqcfA5%2F4KsxDIDABEiIfc58HnR7Zbwb7KogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY%2FVKD821kv7VeHRgq3AO%2BHc03G%2Bv36csnx%2BykZNS7YJNlctoirtmH%2BgFlJ%2BSZj8A%2BtZ5uwx4JV6fMcR%2B4vpY5Mq0uQSgTBjPb%2BUOrIJDaImEpHJ4uVpJAMoQAKXGUA0HTAErsfEsgILizKqOwQ8vRXcz7yY0ocbH1ozNadEzW8s1auiE3w54Ds4lZe9uSGUfN3dLmI7l9gc7%2BWVj7h0voEElH%2BMkIROJp5PiYOHKHH5D7msKBRqe%2BFJNp4%2Ftw5S%2Fez2IhkkI5FGMxHlyvQpMGTzG0YdwQx9dXQZkXMsiH9ivr%2BDwa83X6QnqMkFPIA36lT6wKCgwqSM%2BVec5TY489%2Butg4e%2F%2BnArA7TnI%2BttQCj3smzaqmoHnLnG28%2FP9fkm7%2BNI16ApAS5er8CN%2FKQuXooqS2Lync3yRZlX18nC3tuZHeEBOTShymsvm4DYW5viQHzzeGAkC%2FhCMc9%2BuYTdYzbjbL%2B85e8KocpQaAMgKNBxiraIi8FR1%2Bz7I2eCNLF0iXVJ9LGH74DrMEIM6F9cwAyCBgRIRk6MwuHtmceoedSQEdwLlLr8F%2FNxavyhI5sLwFTf%2BB3fQhQZfCTLzGLyHBroz05FHzlq0qo6wUM5q5iOTb%2F5bCK%2BAd1dZ7irG0nqjx5ecTrc1bpHQVzCXs9%2FEBjqkAUwNtndhQ6QDDTj9GlpSdDlf2V1b9lENmHVcD9WBgu0XWbTeFHL%2BXZSdP0QSpC86%2BsYtP5INO2xVehKo4Y1G3kCLN1h6QHO2ghVeWZajlsBPU7jOO0LmRqtwhruGNY2jm0KxTnwqHr0k6Ha3IkiyoBrZ62kJ0VXqBFVArawPml%2BxG2cXIbBolvPHFdp1Dp%2F3GItt2RVen3TCbIed3kyxxV7L42L%2B&X-Amz-Signature=55f6bbc29e68b5557171ff4f94ba36eacbd3699c5699aeabe0fb4ea9b8277f6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW3TWQIY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5nIJ8ozjJ%2BFqt46hp9ysrwXd88k28hKVNKEiqtlaYTwIhANLxcLHETltrTqcfA5%2F4KsxDIDABEiIfc58HnR7Zbwb7KogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY%2FVKD821kv7VeHRgq3AO%2BHc03G%2Bv36csnx%2BykZNS7YJNlctoirtmH%2BgFlJ%2BSZj8A%2BtZ5uwx4JV6fMcR%2B4vpY5Mq0uQSgTBjPb%2BUOrIJDaImEpHJ4uVpJAMoQAKXGUA0HTAErsfEsgILizKqOwQ8vRXcz7yY0ocbH1ozNadEzW8s1auiE3w54Ds4lZe9uSGUfN3dLmI7l9gc7%2BWVj7h0voEElH%2BMkIROJp5PiYOHKHH5D7msKBRqe%2BFJNp4%2Ftw5S%2Fez2IhkkI5FGMxHlyvQpMGTzG0YdwQx9dXQZkXMsiH9ivr%2BDwa83X6QnqMkFPIA36lT6wKCgwqSM%2BVec5TY489%2Butg4e%2F%2BnArA7TnI%2BttQCj3smzaqmoHnLnG28%2FP9fkm7%2BNI16ApAS5er8CN%2FKQuXooqS2Lync3yRZlX18nC3tuZHeEBOTShymsvm4DYW5viQHzzeGAkC%2FhCMc9%2BuYTdYzbjbL%2B85e8KocpQaAMgKNBxiraIi8FR1%2Bz7I2eCNLF0iXVJ9LGH74DrMEIM6F9cwAyCBgRIRk6MwuHtmceoedSQEdwLlLr8F%2FNxavyhI5sLwFTf%2BB3fQhQZfCTLzGLyHBroz05FHzlq0qo6wUM5q5iOTb%2F5bCK%2BAd1dZ7irG0nqjx5ecTrc1bpHQVzCXs9%2FEBjqkAUwNtndhQ6QDDTj9GlpSdDlf2V1b9lENmHVcD9WBgu0XWbTeFHL%2BXZSdP0QSpC86%2BsYtP5INO2xVehKo4Y1G3kCLN1h6QHO2ghVeWZajlsBPU7jOO0LmRqtwhruGNY2jm0KxTnwqHr0k6Ha3IkiyoBrZ62kJ0VXqBFVArawPml%2BxG2cXIbBolvPHFdp1Dp%2F3GItt2RVen3TCbIed3kyxxV7L42L%2B&X-Amz-Signature=3f3f65e901767228fb44b7b2232a2b3d660be532e086234c79b7901357b3b3d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
