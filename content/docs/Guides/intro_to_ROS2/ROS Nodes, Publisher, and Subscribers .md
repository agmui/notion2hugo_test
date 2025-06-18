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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY2C3O7X%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg33Kk%2BWOU%2BAFU8CzLZh4NefDYRI4Xao2rGQy7KJXgtAIgUoknTx9Xq0C6j86Hx%2Fd9Vn%2FjOtzeJVkbXziSmu7ofR8qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmQ9qWqDD2SYwTdYircA13WHDVJ1odeQ3LFyYTQzJvtOckEelagkD3Lw%2BT9KbivhutfwITtQaerAjdHhL4n7GJ3keJicNM9xOUOxQ3kiqDhYhTMXtFjWKzFlpVFVuYag5Cj3Bc7lvWaZvUh5rqyPohtWjQgNsPX%2Bk3ynIc0y5bHpfnJ5WfULPNqHqCTGvhImAevtkH7Y5XhnYXqzsD5tWIbWKN9dl5JUSO5MNSZXXijXTMadJ6GSu6gj1qO%2Fc3o2IHWoUOs0KbVmJyYgZInxHRVLVXuqvh%2BO2Cdr9i%2FFDqbS%2F1PIgYgeUT5zNAaM%2FwnHIM6TFCGkf5dPOU4nWILoj1yJrdFZfKYzm7lb0lKzvzRWZRN3AnTqaDxrqEWrVjpj0iz6RAtuoaK2INZCQYWiqwvE%2BXg6APJk4wJq8L5%2FA3DLH2IN0RofBVsFFdgkrfjVqdzCkINGKxjpHneYeuKCqSuftp0SPFGihCugUPwIQuRseYpYnCGlJrVnVysx3t%2FhbhVbT8w9zNZhOZCxIGcZp%2FZ9P%2FGlTfldTObIdH1VTgyZEYgIlYmU%2F%2BloObt92NnNvWvnUbmQqnxWnTHn062Xx0bIow1BnwmoaCVrI5b02O8LEwljfZN9MV%2BylBquFfiMAFobqO3rblc98bdMNv7y8IGOqUBjQp2llPs%2BcsPTO%2BYdwS4bgVHeUA%2BKO24Rrvnc02wWjL5knBrjZb1tpH%2FA2sVbsCDS0kprlMs4BhzlcPJJquUikNQqiQ6kAhULLRmBl9KS%2F4eQclZoWWnpSoiqHXaNsLFM%2BAbaYQ0ktdYKn2MY24dHSrTsQUOeijAc%2Ff06R1TMB6pZmfJ%2BtpcUgTZliFg%2FgpEdtGDfx0MrLRlRZ9F2QdXeALNOyej&X-Amz-Signature=626e110d889eddfc968d79bac9ce898acefc0a03793c8cafa1d07dbd3594f089&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY2C3O7X%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg33Kk%2BWOU%2BAFU8CzLZh4NefDYRI4Xao2rGQy7KJXgtAIgUoknTx9Xq0C6j86Hx%2Fd9Vn%2FjOtzeJVkbXziSmu7ofR8qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmQ9qWqDD2SYwTdYircA13WHDVJ1odeQ3LFyYTQzJvtOckEelagkD3Lw%2BT9KbivhutfwITtQaerAjdHhL4n7GJ3keJicNM9xOUOxQ3kiqDhYhTMXtFjWKzFlpVFVuYag5Cj3Bc7lvWaZvUh5rqyPohtWjQgNsPX%2Bk3ynIc0y5bHpfnJ5WfULPNqHqCTGvhImAevtkH7Y5XhnYXqzsD5tWIbWKN9dl5JUSO5MNSZXXijXTMadJ6GSu6gj1qO%2Fc3o2IHWoUOs0KbVmJyYgZInxHRVLVXuqvh%2BO2Cdr9i%2FFDqbS%2F1PIgYgeUT5zNAaM%2FwnHIM6TFCGkf5dPOU4nWILoj1yJrdFZfKYzm7lb0lKzvzRWZRN3AnTqaDxrqEWrVjpj0iz6RAtuoaK2INZCQYWiqwvE%2BXg6APJk4wJq8L5%2FA3DLH2IN0RofBVsFFdgkrfjVqdzCkINGKxjpHneYeuKCqSuftp0SPFGihCugUPwIQuRseYpYnCGlJrVnVysx3t%2FhbhVbT8w9zNZhOZCxIGcZp%2FZ9P%2FGlTfldTObIdH1VTgyZEYgIlYmU%2F%2BloObt92NnNvWvnUbmQqnxWnTHn062Xx0bIow1BnwmoaCVrI5b02O8LEwljfZN9MV%2BylBquFfiMAFobqO3rblc98bdMNv7y8IGOqUBjQp2llPs%2BcsPTO%2BYdwS4bgVHeUA%2BKO24Rrvnc02wWjL5knBrjZb1tpH%2FA2sVbsCDS0kprlMs4BhzlcPJJquUikNQqiQ6kAhULLRmBl9KS%2F4eQclZoWWnpSoiqHXaNsLFM%2BAbaYQ0ktdYKn2MY24dHSrTsQUOeijAc%2Ff06R1TMB6pZmfJ%2BtpcUgTZliFg%2FgpEdtGDfx0MrLRlRZ9F2QdXeALNOyej&X-Amz-Signature=7e379e1e9c106fae6d3bcefecbe06cb67e784bd576fa66e815c2269a62b0bdd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY2C3O7X%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg33Kk%2BWOU%2BAFU8CzLZh4NefDYRI4Xao2rGQy7KJXgtAIgUoknTx9Xq0C6j86Hx%2Fd9Vn%2FjOtzeJVkbXziSmu7ofR8qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmQ9qWqDD2SYwTdYircA13WHDVJ1odeQ3LFyYTQzJvtOckEelagkD3Lw%2BT9KbivhutfwITtQaerAjdHhL4n7GJ3keJicNM9xOUOxQ3kiqDhYhTMXtFjWKzFlpVFVuYag5Cj3Bc7lvWaZvUh5rqyPohtWjQgNsPX%2Bk3ynIc0y5bHpfnJ5WfULPNqHqCTGvhImAevtkH7Y5XhnYXqzsD5tWIbWKN9dl5JUSO5MNSZXXijXTMadJ6GSu6gj1qO%2Fc3o2IHWoUOs0KbVmJyYgZInxHRVLVXuqvh%2BO2Cdr9i%2FFDqbS%2F1PIgYgeUT5zNAaM%2FwnHIM6TFCGkf5dPOU4nWILoj1yJrdFZfKYzm7lb0lKzvzRWZRN3AnTqaDxrqEWrVjpj0iz6RAtuoaK2INZCQYWiqwvE%2BXg6APJk4wJq8L5%2FA3DLH2IN0RofBVsFFdgkrfjVqdzCkINGKxjpHneYeuKCqSuftp0SPFGihCugUPwIQuRseYpYnCGlJrVnVysx3t%2FhbhVbT8w9zNZhOZCxIGcZp%2FZ9P%2FGlTfldTObIdH1VTgyZEYgIlYmU%2F%2BloObt92NnNvWvnUbmQqnxWnTHn062Xx0bIow1BnwmoaCVrI5b02O8LEwljfZN9MV%2BylBquFfiMAFobqO3rblc98bdMNv7y8IGOqUBjQp2llPs%2BcsPTO%2BYdwS4bgVHeUA%2BKO24Rrvnc02wWjL5knBrjZb1tpH%2FA2sVbsCDS0kprlMs4BhzlcPJJquUikNQqiQ6kAhULLRmBl9KS%2F4eQclZoWWnpSoiqHXaNsLFM%2BAbaYQ0ktdYKn2MY24dHSrTsQUOeijAc%2Ff06R1TMB6pZmfJ%2BtpcUgTZliFg%2FgpEdtGDfx0MrLRlRZ9F2QdXeALNOyej&X-Amz-Signature=47e930ec7920cf65402dc4af3a36965fc0665e89747bb916f06ac3b60eac5014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY2C3O7X%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg33Kk%2BWOU%2BAFU8CzLZh4NefDYRI4Xao2rGQy7KJXgtAIgUoknTx9Xq0C6j86Hx%2Fd9Vn%2FjOtzeJVkbXziSmu7ofR8qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmQ9qWqDD2SYwTdYircA13WHDVJ1odeQ3LFyYTQzJvtOckEelagkD3Lw%2BT9KbivhutfwITtQaerAjdHhL4n7GJ3keJicNM9xOUOxQ3kiqDhYhTMXtFjWKzFlpVFVuYag5Cj3Bc7lvWaZvUh5rqyPohtWjQgNsPX%2Bk3ynIc0y5bHpfnJ5WfULPNqHqCTGvhImAevtkH7Y5XhnYXqzsD5tWIbWKN9dl5JUSO5MNSZXXijXTMadJ6GSu6gj1qO%2Fc3o2IHWoUOs0KbVmJyYgZInxHRVLVXuqvh%2BO2Cdr9i%2FFDqbS%2F1PIgYgeUT5zNAaM%2FwnHIM6TFCGkf5dPOU4nWILoj1yJrdFZfKYzm7lb0lKzvzRWZRN3AnTqaDxrqEWrVjpj0iz6RAtuoaK2INZCQYWiqwvE%2BXg6APJk4wJq8L5%2FA3DLH2IN0RofBVsFFdgkrfjVqdzCkINGKxjpHneYeuKCqSuftp0SPFGihCugUPwIQuRseYpYnCGlJrVnVysx3t%2FhbhVbT8w9zNZhOZCxIGcZp%2FZ9P%2FGlTfldTObIdH1VTgyZEYgIlYmU%2F%2BloObt92NnNvWvnUbmQqnxWnTHn062Xx0bIow1BnwmoaCVrI5b02O8LEwljfZN9MV%2BylBquFfiMAFobqO3rblc98bdMNv7y8IGOqUBjQp2llPs%2BcsPTO%2BYdwS4bgVHeUA%2BKO24Rrvnc02wWjL5knBrjZb1tpH%2FA2sVbsCDS0kprlMs4BhzlcPJJquUikNQqiQ6kAhULLRmBl9KS%2F4eQclZoWWnpSoiqHXaNsLFM%2BAbaYQ0ktdYKn2MY24dHSrTsQUOeijAc%2Ff06R1TMB6pZmfJ%2BtpcUgTZliFg%2FgpEdtGDfx0MrLRlRZ9F2QdXeALNOyej&X-Amz-Signature=cdf2e2e8cf870744b114086a0c906c4b8e69e16c492ede499087831c7e22dbd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY2C3O7X%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg33Kk%2BWOU%2BAFU8CzLZh4NefDYRI4Xao2rGQy7KJXgtAIgUoknTx9Xq0C6j86Hx%2Fd9Vn%2FjOtzeJVkbXziSmu7ofR8qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmQ9qWqDD2SYwTdYircA13WHDVJ1odeQ3LFyYTQzJvtOckEelagkD3Lw%2BT9KbivhutfwITtQaerAjdHhL4n7GJ3keJicNM9xOUOxQ3kiqDhYhTMXtFjWKzFlpVFVuYag5Cj3Bc7lvWaZvUh5rqyPohtWjQgNsPX%2Bk3ynIc0y5bHpfnJ5WfULPNqHqCTGvhImAevtkH7Y5XhnYXqzsD5tWIbWKN9dl5JUSO5MNSZXXijXTMadJ6GSu6gj1qO%2Fc3o2IHWoUOs0KbVmJyYgZInxHRVLVXuqvh%2BO2Cdr9i%2FFDqbS%2F1PIgYgeUT5zNAaM%2FwnHIM6TFCGkf5dPOU4nWILoj1yJrdFZfKYzm7lb0lKzvzRWZRN3AnTqaDxrqEWrVjpj0iz6RAtuoaK2INZCQYWiqwvE%2BXg6APJk4wJq8L5%2FA3DLH2IN0RofBVsFFdgkrfjVqdzCkINGKxjpHneYeuKCqSuftp0SPFGihCugUPwIQuRseYpYnCGlJrVnVysx3t%2FhbhVbT8w9zNZhOZCxIGcZp%2FZ9P%2FGlTfldTObIdH1VTgyZEYgIlYmU%2F%2BloObt92NnNvWvnUbmQqnxWnTHn062Xx0bIow1BnwmoaCVrI5b02O8LEwljfZN9MV%2BylBquFfiMAFobqO3rblc98bdMNv7y8IGOqUBjQp2llPs%2BcsPTO%2BYdwS4bgVHeUA%2BKO24Rrvnc02wWjL5knBrjZb1tpH%2FA2sVbsCDS0kprlMs4BhzlcPJJquUikNQqiQ6kAhULLRmBl9KS%2F4eQclZoWWnpSoiqHXaNsLFM%2BAbaYQ0ktdYKn2MY24dHSrTsQUOeijAc%2Ff06R1TMB6pZmfJ%2BtpcUgTZliFg%2FgpEdtGDfx0MrLRlRZ9F2QdXeALNOyej&X-Amz-Signature=cd6d4372a7187049e38ae73753881e4e5702cdd00fa7c3cf8b65516e9214167a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY2C3O7X%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg33Kk%2BWOU%2BAFU8CzLZh4NefDYRI4Xao2rGQy7KJXgtAIgUoknTx9Xq0C6j86Hx%2Fd9Vn%2FjOtzeJVkbXziSmu7ofR8qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmQ9qWqDD2SYwTdYircA13WHDVJ1odeQ3LFyYTQzJvtOckEelagkD3Lw%2BT9KbivhutfwITtQaerAjdHhL4n7GJ3keJicNM9xOUOxQ3kiqDhYhTMXtFjWKzFlpVFVuYag5Cj3Bc7lvWaZvUh5rqyPohtWjQgNsPX%2Bk3ynIc0y5bHpfnJ5WfULPNqHqCTGvhImAevtkH7Y5XhnYXqzsD5tWIbWKN9dl5JUSO5MNSZXXijXTMadJ6GSu6gj1qO%2Fc3o2IHWoUOs0KbVmJyYgZInxHRVLVXuqvh%2BO2Cdr9i%2FFDqbS%2F1PIgYgeUT5zNAaM%2FwnHIM6TFCGkf5dPOU4nWILoj1yJrdFZfKYzm7lb0lKzvzRWZRN3AnTqaDxrqEWrVjpj0iz6RAtuoaK2INZCQYWiqwvE%2BXg6APJk4wJq8L5%2FA3DLH2IN0RofBVsFFdgkrfjVqdzCkINGKxjpHneYeuKCqSuftp0SPFGihCugUPwIQuRseYpYnCGlJrVnVysx3t%2FhbhVbT8w9zNZhOZCxIGcZp%2FZ9P%2FGlTfldTObIdH1VTgyZEYgIlYmU%2F%2BloObt92NnNvWvnUbmQqnxWnTHn062Xx0bIow1BnwmoaCVrI5b02O8LEwljfZN9MV%2BylBquFfiMAFobqO3rblc98bdMNv7y8IGOqUBjQp2llPs%2BcsPTO%2BYdwS4bgVHeUA%2BKO24Rrvnc02wWjL5knBrjZb1tpH%2FA2sVbsCDS0kprlMs4BhzlcPJJquUikNQqiQ6kAhULLRmBl9KS%2F4eQclZoWWnpSoiqHXaNsLFM%2BAbaYQ0ktdYKn2MY24dHSrTsQUOeijAc%2Ff06R1TMB6pZmfJ%2BtpcUgTZliFg%2FgpEdtGDfx0MrLRlRZ9F2QdXeALNOyej&X-Amz-Signature=fd22712e0942cf8f77cdda56a6994407fb7d94a78d8bec74af0bdad19748e194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY2C3O7X%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg33Kk%2BWOU%2BAFU8CzLZh4NefDYRI4Xao2rGQy7KJXgtAIgUoknTx9Xq0C6j86Hx%2Fd9Vn%2FjOtzeJVkbXziSmu7ofR8qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmQ9qWqDD2SYwTdYircA13WHDVJ1odeQ3LFyYTQzJvtOckEelagkD3Lw%2BT9KbivhutfwITtQaerAjdHhL4n7GJ3keJicNM9xOUOxQ3kiqDhYhTMXtFjWKzFlpVFVuYag5Cj3Bc7lvWaZvUh5rqyPohtWjQgNsPX%2Bk3ynIc0y5bHpfnJ5WfULPNqHqCTGvhImAevtkH7Y5XhnYXqzsD5tWIbWKN9dl5JUSO5MNSZXXijXTMadJ6GSu6gj1qO%2Fc3o2IHWoUOs0KbVmJyYgZInxHRVLVXuqvh%2BO2Cdr9i%2FFDqbS%2F1PIgYgeUT5zNAaM%2FwnHIM6TFCGkf5dPOU4nWILoj1yJrdFZfKYzm7lb0lKzvzRWZRN3AnTqaDxrqEWrVjpj0iz6RAtuoaK2INZCQYWiqwvE%2BXg6APJk4wJq8L5%2FA3DLH2IN0RofBVsFFdgkrfjVqdzCkINGKxjpHneYeuKCqSuftp0SPFGihCugUPwIQuRseYpYnCGlJrVnVysx3t%2FhbhVbT8w9zNZhOZCxIGcZp%2FZ9P%2FGlTfldTObIdH1VTgyZEYgIlYmU%2F%2BloObt92NnNvWvnUbmQqnxWnTHn062Xx0bIow1BnwmoaCVrI5b02O8LEwljfZN9MV%2BylBquFfiMAFobqO3rblc98bdMNv7y8IGOqUBjQp2llPs%2BcsPTO%2BYdwS4bgVHeUA%2BKO24Rrvnc02wWjL5knBrjZb1tpH%2FA2sVbsCDS0kprlMs4BhzlcPJJquUikNQqiQ6kAhULLRmBl9KS%2F4eQclZoWWnpSoiqHXaNsLFM%2BAbaYQ0ktdYKn2MY24dHSrTsQUOeijAc%2Ff06R1TMB6pZmfJ%2BtpcUgTZliFg%2FgpEdtGDfx0MrLRlRZ9F2QdXeALNOyej&X-Amz-Signature=f8d9135ac3076a3183a2001ad2cdd2be0b57bc47e092a5aa2095c0a6f631b75c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY2C3O7X%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg33Kk%2BWOU%2BAFU8CzLZh4NefDYRI4Xao2rGQy7KJXgtAIgUoknTx9Xq0C6j86Hx%2Fd9Vn%2FjOtzeJVkbXziSmu7ofR8qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmQ9qWqDD2SYwTdYircA13WHDVJ1odeQ3LFyYTQzJvtOckEelagkD3Lw%2BT9KbivhutfwITtQaerAjdHhL4n7GJ3keJicNM9xOUOxQ3kiqDhYhTMXtFjWKzFlpVFVuYag5Cj3Bc7lvWaZvUh5rqyPohtWjQgNsPX%2Bk3ynIc0y5bHpfnJ5WfULPNqHqCTGvhImAevtkH7Y5XhnYXqzsD5tWIbWKN9dl5JUSO5MNSZXXijXTMadJ6GSu6gj1qO%2Fc3o2IHWoUOs0KbVmJyYgZInxHRVLVXuqvh%2BO2Cdr9i%2FFDqbS%2F1PIgYgeUT5zNAaM%2FwnHIM6TFCGkf5dPOU4nWILoj1yJrdFZfKYzm7lb0lKzvzRWZRN3AnTqaDxrqEWrVjpj0iz6RAtuoaK2INZCQYWiqwvE%2BXg6APJk4wJq8L5%2FA3DLH2IN0RofBVsFFdgkrfjVqdzCkINGKxjpHneYeuKCqSuftp0SPFGihCugUPwIQuRseYpYnCGlJrVnVysx3t%2FhbhVbT8w9zNZhOZCxIGcZp%2FZ9P%2FGlTfldTObIdH1VTgyZEYgIlYmU%2F%2BloObt92NnNvWvnUbmQqnxWnTHn062Xx0bIow1BnwmoaCVrI5b02O8LEwljfZN9MV%2BylBquFfiMAFobqO3rblc98bdMNv7y8IGOqUBjQp2llPs%2BcsPTO%2BYdwS4bgVHeUA%2BKO24Rrvnc02wWjL5knBrjZb1tpH%2FA2sVbsCDS0kprlMs4BhzlcPJJquUikNQqiQ6kAhULLRmBl9KS%2F4eQclZoWWnpSoiqHXaNsLFM%2BAbaYQ0ktdYKn2MY24dHSrTsQUOeijAc%2Ff06R1TMB6pZmfJ%2BtpcUgTZliFg%2FgpEdtGDfx0MrLRlRZ9F2QdXeALNOyej&X-Amz-Signature=9351f5cd92c98efe436c36d11ca7da34f21dccda8e7795099e5c3c6329b920bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
