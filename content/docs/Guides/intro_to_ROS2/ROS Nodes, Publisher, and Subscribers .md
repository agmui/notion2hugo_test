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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NCA6CFD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdq%2BfYOvWW1F136a9jcZTUjXWlwl5kPysD4qIhyHJJ4wIhALQoc%2F%2FzFU8MmgtYJroC7LzX6Qvzy9tg%2BwDThdkCimkcKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxs1pQve%2B4ISqAaVb0q3AMTBV46yNTDT3%2Bq0%2FdAwkI1NnVEP4ShpjNBfbMujYccsotvVfTzKljlKonbaD4x%2BWoqbhzV%2FT6cv0uSuLQzNOoYEMIFupneUmbcGHiazQbAEysas%2F12TC%2BiPfZ1%2B0lhG1HBVdB8MQGrcAsU%2F%2BL2EBz6odxbtLOiYin7WN4eBlz1RbPU8Y6yBMCdUWCwVh9sNHy4wj9IWCOHMY2lH2yXXWefGZ1wCRZyCmEgoZsp%2FzG%2Bnu9g7zA29s55xlm8jHxI0SpeKezE%2Fy5oGaLEJkZVIsyylqqsQvya216nr4GPEvTRY2L4q%2FPaq5ZyW4kPWWAhkhy3ZuG%2BlOoqmuKdqlU8UryYTnI26fheco%2B9tWAdwvsKQS9nsLZcAdDlNI%2BGqs26VgnHIKjHHQa7WcqHkl8QRvx%2FZy%2Fe6DQ%2BAwhVNC%2BQCIYOzEkr4upH01pkkeQdzHdDlKAT9PZBuh39vDMfeCCDFLst20lKk8Lg2t1%2F885ZCT6neouGVn8exDwYRrArrP0w901JfSxtLj6orqasY%2BcHqW9h4bVH9wX97zbGxrwt2VpBC%2F7fLJXlC%2F0c9KSSwQ83pd5Ma3%2F1%2BFeaEtpAGz%2FCuLD5psgXJOkxtk5uU0A%2FiIaDqUbpuLHmEjk%2F5DJ6kzDa6%2FrABjqkAV3kgkwyHl983%2F215s1FsOth2VWBvDqzSJLEnVzrOuoBBkqxL1w0fed0o9KYhRxG%2F73Jk0YZ3RVclDFYrabhvxIXfVVXjWyDn2uFQIYzY1Wj5ZGvFfXAUB%2Fx7NpUZzXI2%2FXTbkl7wObamHY3CrAOUWHH5rtlUvEPc3z6XI2WTmPNGD3Xypqf5utMVHjWwDejJQB1vwUBbgq5Y7N0B7L67VtJpxms&X-Amz-Signature=bfa875c2c41364160ad27258967601a30c02f2293a72744b58a22d629357a277&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NCA6CFD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdq%2BfYOvWW1F136a9jcZTUjXWlwl5kPysD4qIhyHJJ4wIhALQoc%2F%2FzFU8MmgtYJroC7LzX6Qvzy9tg%2BwDThdkCimkcKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxs1pQve%2B4ISqAaVb0q3AMTBV46yNTDT3%2Bq0%2FdAwkI1NnVEP4ShpjNBfbMujYccsotvVfTzKljlKonbaD4x%2BWoqbhzV%2FT6cv0uSuLQzNOoYEMIFupneUmbcGHiazQbAEysas%2F12TC%2BiPfZ1%2B0lhG1HBVdB8MQGrcAsU%2F%2BL2EBz6odxbtLOiYin7WN4eBlz1RbPU8Y6yBMCdUWCwVh9sNHy4wj9IWCOHMY2lH2yXXWefGZ1wCRZyCmEgoZsp%2FzG%2Bnu9g7zA29s55xlm8jHxI0SpeKezE%2Fy5oGaLEJkZVIsyylqqsQvya216nr4GPEvTRY2L4q%2FPaq5ZyW4kPWWAhkhy3ZuG%2BlOoqmuKdqlU8UryYTnI26fheco%2B9tWAdwvsKQS9nsLZcAdDlNI%2BGqs26VgnHIKjHHQa7WcqHkl8QRvx%2FZy%2Fe6DQ%2BAwhVNC%2BQCIYOzEkr4upH01pkkeQdzHdDlKAT9PZBuh39vDMfeCCDFLst20lKk8Lg2t1%2F885ZCT6neouGVn8exDwYRrArrP0w901JfSxtLj6orqasY%2BcHqW9h4bVH9wX97zbGxrwt2VpBC%2F7fLJXlC%2F0c9KSSwQ83pd5Ma3%2F1%2BFeaEtpAGz%2FCuLD5psgXJOkxtk5uU0A%2FiIaDqUbpuLHmEjk%2F5DJ6kzDa6%2FrABjqkAV3kgkwyHl983%2F215s1FsOth2VWBvDqzSJLEnVzrOuoBBkqxL1w0fed0o9KYhRxG%2F73Jk0YZ3RVclDFYrabhvxIXfVVXjWyDn2uFQIYzY1Wj5ZGvFfXAUB%2Fx7NpUZzXI2%2FXTbkl7wObamHY3CrAOUWHH5rtlUvEPc3z6XI2WTmPNGD3Xypqf5utMVHjWwDejJQB1vwUBbgq5Y7N0B7L67VtJpxms&X-Amz-Signature=3021540faff36e56c2e485d37a2c0d694f8d879bc6013dc7c4d60f2b5479a489&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NCA6CFD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdq%2BfYOvWW1F136a9jcZTUjXWlwl5kPysD4qIhyHJJ4wIhALQoc%2F%2FzFU8MmgtYJroC7LzX6Qvzy9tg%2BwDThdkCimkcKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxs1pQve%2B4ISqAaVb0q3AMTBV46yNTDT3%2Bq0%2FdAwkI1NnVEP4ShpjNBfbMujYccsotvVfTzKljlKonbaD4x%2BWoqbhzV%2FT6cv0uSuLQzNOoYEMIFupneUmbcGHiazQbAEysas%2F12TC%2BiPfZ1%2B0lhG1HBVdB8MQGrcAsU%2F%2BL2EBz6odxbtLOiYin7WN4eBlz1RbPU8Y6yBMCdUWCwVh9sNHy4wj9IWCOHMY2lH2yXXWefGZ1wCRZyCmEgoZsp%2FzG%2Bnu9g7zA29s55xlm8jHxI0SpeKezE%2Fy5oGaLEJkZVIsyylqqsQvya216nr4GPEvTRY2L4q%2FPaq5ZyW4kPWWAhkhy3ZuG%2BlOoqmuKdqlU8UryYTnI26fheco%2B9tWAdwvsKQS9nsLZcAdDlNI%2BGqs26VgnHIKjHHQa7WcqHkl8QRvx%2FZy%2Fe6DQ%2BAwhVNC%2BQCIYOzEkr4upH01pkkeQdzHdDlKAT9PZBuh39vDMfeCCDFLst20lKk8Lg2t1%2F885ZCT6neouGVn8exDwYRrArrP0w901JfSxtLj6orqasY%2BcHqW9h4bVH9wX97zbGxrwt2VpBC%2F7fLJXlC%2F0c9KSSwQ83pd5Ma3%2F1%2BFeaEtpAGz%2FCuLD5psgXJOkxtk5uU0A%2FiIaDqUbpuLHmEjk%2F5DJ6kzDa6%2FrABjqkAV3kgkwyHl983%2F215s1FsOth2VWBvDqzSJLEnVzrOuoBBkqxL1w0fed0o9KYhRxG%2F73Jk0YZ3RVclDFYrabhvxIXfVVXjWyDn2uFQIYzY1Wj5ZGvFfXAUB%2Fx7NpUZzXI2%2FXTbkl7wObamHY3CrAOUWHH5rtlUvEPc3z6XI2WTmPNGD3Xypqf5utMVHjWwDejJQB1vwUBbgq5Y7N0B7L67VtJpxms&X-Amz-Signature=6f32618e0f9d5814f3dc2450081e3dff8165d068c84e59732b98ec191caf28e3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NCA6CFD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdq%2BfYOvWW1F136a9jcZTUjXWlwl5kPysD4qIhyHJJ4wIhALQoc%2F%2FzFU8MmgtYJroC7LzX6Qvzy9tg%2BwDThdkCimkcKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxs1pQve%2B4ISqAaVb0q3AMTBV46yNTDT3%2Bq0%2FdAwkI1NnVEP4ShpjNBfbMujYccsotvVfTzKljlKonbaD4x%2BWoqbhzV%2FT6cv0uSuLQzNOoYEMIFupneUmbcGHiazQbAEysas%2F12TC%2BiPfZ1%2B0lhG1HBVdB8MQGrcAsU%2F%2BL2EBz6odxbtLOiYin7WN4eBlz1RbPU8Y6yBMCdUWCwVh9sNHy4wj9IWCOHMY2lH2yXXWefGZ1wCRZyCmEgoZsp%2FzG%2Bnu9g7zA29s55xlm8jHxI0SpeKezE%2Fy5oGaLEJkZVIsyylqqsQvya216nr4GPEvTRY2L4q%2FPaq5ZyW4kPWWAhkhy3ZuG%2BlOoqmuKdqlU8UryYTnI26fheco%2B9tWAdwvsKQS9nsLZcAdDlNI%2BGqs26VgnHIKjHHQa7WcqHkl8QRvx%2FZy%2Fe6DQ%2BAwhVNC%2BQCIYOzEkr4upH01pkkeQdzHdDlKAT9PZBuh39vDMfeCCDFLst20lKk8Lg2t1%2F885ZCT6neouGVn8exDwYRrArrP0w901JfSxtLj6orqasY%2BcHqW9h4bVH9wX97zbGxrwt2VpBC%2F7fLJXlC%2F0c9KSSwQ83pd5Ma3%2F1%2BFeaEtpAGz%2FCuLD5psgXJOkxtk5uU0A%2FiIaDqUbpuLHmEjk%2F5DJ6kzDa6%2FrABjqkAV3kgkwyHl983%2F215s1FsOth2VWBvDqzSJLEnVzrOuoBBkqxL1w0fed0o9KYhRxG%2F73Jk0YZ3RVclDFYrabhvxIXfVVXjWyDn2uFQIYzY1Wj5ZGvFfXAUB%2Fx7NpUZzXI2%2FXTbkl7wObamHY3CrAOUWHH5rtlUvEPc3z6XI2WTmPNGD3Xypqf5utMVHjWwDejJQB1vwUBbgq5Y7N0B7L67VtJpxms&X-Amz-Signature=f4b685168b28f484229f4a5925cd16ca7eb000c77383996febbcb5cc7db66726&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NCA6CFD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdq%2BfYOvWW1F136a9jcZTUjXWlwl5kPysD4qIhyHJJ4wIhALQoc%2F%2FzFU8MmgtYJroC7LzX6Qvzy9tg%2BwDThdkCimkcKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxs1pQve%2B4ISqAaVb0q3AMTBV46yNTDT3%2Bq0%2FdAwkI1NnVEP4ShpjNBfbMujYccsotvVfTzKljlKonbaD4x%2BWoqbhzV%2FT6cv0uSuLQzNOoYEMIFupneUmbcGHiazQbAEysas%2F12TC%2BiPfZ1%2B0lhG1HBVdB8MQGrcAsU%2F%2BL2EBz6odxbtLOiYin7WN4eBlz1RbPU8Y6yBMCdUWCwVh9sNHy4wj9IWCOHMY2lH2yXXWefGZ1wCRZyCmEgoZsp%2FzG%2Bnu9g7zA29s55xlm8jHxI0SpeKezE%2Fy5oGaLEJkZVIsyylqqsQvya216nr4GPEvTRY2L4q%2FPaq5ZyW4kPWWAhkhy3ZuG%2BlOoqmuKdqlU8UryYTnI26fheco%2B9tWAdwvsKQS9nsLZcAdDlNI%2BGqs26VgnHIKjHHQa7WcqHkl8QRvx%2FZy%2Fe6DQ%2BAwhVNC%2BQCIYOzEkr4upH01pkkeQdzHdDlKAT9PZBuh39vDMfeCCDFLst20lKk8Lg2t1%2F885ZCT6neouGVn8exDwYRrArrP0w901JfSxtLj6orqasY%2BcHqW9h4bVH9wX97zbGxrwt2VpBC%2F7fLJXlC%2F0c9KSSwQ83pd5Ma3%2F1%2BFeaEtpAGz%2FCuLD5psgXJOkxtk5uU0A%2FiIaDqUbpuLHmEjk%2F5DJ6kzDa6%2FrABjqkAV3kgkwyHl983%2F215s1FsOth2VWBvDqzSJLEnVzrOuoBBkqxL1w0fed0o9KYhRxG%2F73Jk0YZ3RVclDFYrabhvxIXfVVXjWyDn2uFQIYzY1Wj5ZGvFfXAUB%2Fx7NpUZzXI2%2FXTbkl7wObamHY3CrAOUWHH5rtlUvEPc3z6XI2WTmPNGD3Xypqf5utMVHjWwDejJQB1vwUBbgq5Y7N0B7L67VtJpxms&X-Amz-Signature=09f97e53421ae82b4bf781b1d8b20606cc217655ab72301bca91d6a60c94e32f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NCA6CFD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdq%2BfYOvWW1F136a9jcZTUjXWlwl5kPysD4qIhyHJJ4wIhALQoc%2F%2FzFU8MmgtYJroC7LzX6Qvzy9tg%2BwDThdkCimkcKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxs1pQve%2B4ISqAaVb0q3AMTBV46yNTDT3%2Bq0%2FdAwkI1NnVEP4ShpjNBfbMujYccsotvVfTzKljlKonbaD4x%2BWoqbhzV%2FT6cv0uSuLQzNOoYEMIFupneUmbcGHiazQbAEysas%2F12TC%2BiPfZ1%2B0lhG1HBVdB8MQGrcAsU%2F%2BL2EBz6odxbtLOiYin7WN4eBlz1RbPU8Y6yBMCdUWCwVh9sNHy4wj9IWCOHMY2lH2yXXWefGZ1wCRZyCmEgoZsp%2FzG%2Bnu9g7zA29s55xlm8jHxI0SpeKezE%2Fy5oGaLEJkZVIsyylqqsQvya216nr4GPEvTRY2L4q%2FPaq5ZyW4kPWWAhkhy3ZuG%2BlOoqmuKdqlU8UryYTnI26fheco%2B9tWAdwvsKQS9nsLZcAdDlNI%2BGqs26VgnHIKjHHQa7WcqHkl8QRvx%2FZy%2Fe6DQ%2BAwhVNC%2BQCIYOzEkr4upH01pkkeQdzHdDlKAT9PZBuh39vDMfeCCDFLst20lKk8Lg2t1%2F885ZCT6neouGVn8exDwYRrArrP0w901JfSxtLj6orqasY%2BcHqW9h4bVH9wX97zbGxrwt2VpBC%2F7fLJXlC%2F0c9KSSwQ83pd5Ma3%2F1%2BFeaEtpAGz%2FCuLD5psgXJOkxtk5uU0A%2FiIaDqUbpuLHmEjk%2F5DJ6kzDa6%2FrABjqkAV3kgkwyHl983%2F215s1FsOth2VWBvDqzSJLEnVzrOuoBBkqxL1w0fed0o9KYhRxG%2F73Jk0YZ3RVclDFYrabhvxIXfVVXjWyDn2uFQIYzY1Wj5ZGvFfXAUB%2Fx7NpUZzXI2%2FXTbkl7wObamHY3CrAOUWHH5rtlUvEPc3z6XI2WTmPNGD3Xypqf5utMVHjWwDejJQB1vwUBbgq5Y7N0B7L67VtJpxms&X-Amz-Signature=e74ca1ec23cf032bc5a75b6182c90e95c927f7a74d424ea1c956e932c0355ef8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NCA6CFD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdq%2BfYOvWW1F136a9jcZTUjXWlwl5kPysD4qIhyHJJ4wIhALQoc%2F%2FzFU8MmgtYJroC7LzX6Qvzy9tg%2BwDThdkCimkcKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxs1pQve%2B4ISqAaVb0q3AMTBV46yNTDT3%2Bq0%2FdAwkI1NnVEP4ShpjNBfbMujYccsotvVfTzKljlKonbaD4x%2BWoqbhzV%2FT6cv0uSuLQzNOoYEMIFupneUmbcGHiazQbAEysas%2F12TC%2BiPfZ1%2B0lhG1HBVdB8MQGrcAsU%2F%2BL2EBz6odxbtLOiYin7WN4eBlz1RbPU8Y6yBMCdUWCwVh9sNHy4wj9IWCOHMY2lH2yXXWefGZ1wCRZyCmEgoZsp%2FzG%2Bnu9g7zA29s55xlm8jHxI0SpeKezE%2Fy5oGaLEJkZVIsyylqqsQvya216nr4GPEvTRY2L4q%2FPaq5ZyW4kPWWAhkhy3ZuG%2BlOoqmuKdqlU8UryYTnI26fheco%2B9tWAdwvsKQS9nsLZcAdDlNI%2BGqs26VgnHIKjHHQa7WcqHkl8QRvx%2FZy%2Fe6DQ%2BAwhVNC%2BQCIYOzEkr4upH01pkkeQdzHdDlKAT9PZBuh39vDMfeCCDFLst20lKk8Lg2t1%2F885ZCT6neouGVn8exDwYRrArrP0w901JfSxtLj6orqasY%2BcHqW9h4bVH9wX97zbGxrwt2VpBC%2F7fLJXlC%2F0c9KSSwQ83pd5Ma3%2F1%2BFeaEtpAGz%2FCuLD5psgXJOkxtk5uU0A%2FiIaDqUbpuLHmEjk%2F5DJ6kzDa6%2FrABjqkAV3kgkwyHl983%2F215s1FsOth2VWBvDqzSJLEnVzrOuoBBkqxL1w0fed0o9KYhRxG%2F73Jk0YZ3RVclDFYrabhvxIXfVVXjWyDn2uFQIYzY1Wj5ZGvFfXAUB%2Fx7NpUZzXI2%2FXTbkl7wObamHY3CrAOUWHH5rtlUvEPc3z6XI2WTmPNGD3Xypqf5utMVHjWwDejJQB1vwUBbgq5Y7N0B7L67VtJpxms&X-Amz-Signature=b3f7ccccca4a77c27cc07f50e61521c7a3cb46c5a555acc3bb6325ef40398fe1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NCA6CFD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdq%2BfYOvWW1F136a9jcZTUjXWlwl5kPysD4qIhyHJJ4wIhALQoc%2F%2FzFU8MmgtYJroC7LzX6Qvzy9tg%2BwDThdkCimkcKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxs1pQve%2B4ISqAaVb0q3AMTBV46yNTDT3%2Bq0%2FdAwkI1NnVEP4ShpjNBfbMujYccsotvVfTzKljlKonbaD4x%2BWoqbhzV%2FT6cv0uSuLQzNOoYEMIFupneUmbcGHiazQbAEysas%2F12TC%2BiPfZ1%2B0lhG1HBVdB8MQGrcAsU%2F%2BL2EBz6odxbtLOiYin7WN4eBlz1RbPU8Y6yBMCdUWCwVh9sNHy4wj9IWCOHMY2lH2yXXWefGZ1wCRZyCmEgoZsp%2FzG%2Bnu9g7zA29s55xlm8jHxI0SpeKezE%2Fy5oGaLEJkZVIsyylqqsQvya216nr4GPEvTRY2L4q%2FPaq5ZyW4kPWWAhkhy3ZuG%2BlOoqmuKdqlU8UryYTnI26fheco%2B9tWAdwvsKQS9nsLZcAdDlNI%2BGqs26VgnHIKjHHQa7WcqHkl8QRvx%2FZy%2Fe6DQ%2BAwhVNC%2BQCIYOzEkr4upH01pkkeQdzHdDlKAT9PZBuh39vDMfeCCDFLst20lKk8Lg2t1%2F885ZCT6neouGVn8exDwYRrArrP0w901JfSxtLj6orqasY%2BcHqW9h4bVH9wX97zbGxrwt2VpBC%2F7fLJXlC%2F0c9KSSwQ83pd5Ma3%2F1%2BFeaEtpAGz%2FCuLD5psgXJOkxtk5uU0A%2FiIaDqUbpuLHmEjk%2F5DJ6kzDa6%2FrABjqkAV3kgkwyHl983%2F215s1FsOth2VWBvDqzSJLEnVzrOuoBBkqxL1w0fed0o9KYhRxG%2F73Jk0YZ3RVclDFYrabhvxIXfVVXjWyDn2uFQIYzY1Wj5ZGvFfXAUB%2Fx7NpUZzXI2%2FXTbkl7wObamHY3CrAOUWHH5rtlUvEPc3z6XI2WTmPNGD3Xypqf5utMVHjWwDejJQB1vwUBbgq5Y7N0B7L67VtJpxms&X-Amz-Signature=6c60b3dadd22dfca9c904431b9e62a3aebf9fa966118890f44e8713db84b6bcc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
