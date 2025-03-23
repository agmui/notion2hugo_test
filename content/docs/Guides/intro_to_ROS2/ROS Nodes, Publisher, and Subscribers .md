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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SJTLURS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDmJqznq%2Fej1C9iOaL%2FEp5lk8qWTSKJzMcyZQhXLn0C%2BgIgSSmwn7GbKndc%2BiR0fPdrU7xE27NYxrFk70Fbzd%2FgepYqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyXxuM6aA3q5S5kGSrcA96yG1MGUGs2VLhLwadcwi4a3OkvfUQLi6Ov9AqmLhQ8NS8Rt8%2FRgIiyU8QV8p3Ju100viiCdbXGCEsYJpGisYUJgmG8L93iwVI6dj%2Brx1n4XPqKY6DzyEsHG0wX2xl7iR0jDfj0oujpMEtpRV5ud9usBRY%2Fy9RPaxAMJKgGkCJL3MJd60SIKlU5LlL5VD3F0XZCnogUVX8NeFxUlVHGys4fiOepMpEjzMJYD0aAJKmaLug2zu41CofvboXILXdT%2Bi9ii7qtMlbUHg%2FovkHqtR0NjEtqtWrB1jWXDmtZu7K1PZ0zE1u0U5%2FDEwkvG4Q4b82noPaQlWdp13Q37BBzqE5DAo1L9ra8AFxGCRxIEQTNkvga1P5J7bxGUBdJqeGb40MqjvdEnkUbPuhaQlI4XCD%2FKvNfzAvcgI5PQr5%2FHqilbA1hsXVN0D%2FNbUbRFfWM82IJingjwuayEgeQl%2FSW0VSnhkR2EwK5C8mSy7HGhs5wqjRcaTpOEWBmAGs3OiCM7DOKePT5SvEoSUZTwQi8reCPA40QXI1nFoxXPqinM3RGsWdaVMKoLXSah62zTlOg%2FYELCjgc22pQBRHCzxrrxg6dhBClmEoQ62cr4cfx54Dx5E%2BS0AytGoXEB6lSMIDj%2Fb4GOqUBDmrLdhtgEUNJJlTva%2BuZ%2Fo6QFv%2FAWooOW4nWPl0Hpok5gjyhf%2Bw7LKUz5YV9FMwGyO0g2i0WkQn8XwaF79qMLAMXtXVA55AS674sYxqPDeYc8xGh7QWcln3XFfBYVfZbzdgqhQzSHFDXo1%2F8%2BsxaC%2FlYW%2BJEj%2BhoyEmOdja3re4p6qiPwUi8wfeqv%2F4PaOFPPCZpF8NDX8bMauFTuXp914vRZay5&X-Amz-Signature=4348ee43093c0d9ba41e33f7c0d7b0b063dd741ab4363274454b5053bc1666c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SJTLURS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDmJqznq%2Fej1C9iOaL%2FEp5lk8qWTSKJzMcyZQhXLn0C%2BgIgSSmwn7GbKndc%2BiR0fPdrU7xE27NYxrFk70Fbzd%2FgepYqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyXxuM6aA3q5S5kGSrcA96yG1MGUGs2VLhLwadcwi4a3OkvfUQLi6Ov9AqmLhQ8NS8Rt8%2FRgIiyU8QV8p3Ju100viiCdbXGCEsYJpGisYUJgmG8L93iwVI6dj%2Brx1n4XPqKY6DzyEsHG0wX2xl7iR0jDfj0oujpMEtpRV5ud9usBRY%2Fy9RPaxAMJKgGkCJL3MJd60SIKlU5LlL5VD3F0XZCnogUVX8NeFxUlVHGys4fiOepMpEjzMJYD0aAJKmaLug2zu41CofvboXILXdT%2Bi9ii7qtMlbUHg%2FovkHqtR0NjEtqtWrB1jWXDmtZu7K1PZ0zE1u0U5%2FDEwkvG4Q4b82noPaQlWdp13Q37BBzqE5DAo1L9ra8AFxGCRxIEQTNkvga1P5J7bxGUBdJqeGb40MqjvdEnkUbPuhaQlI4XCD%2FKvNfzAvcgI5PQr5%2FHqilbA1hsXVN0D%2FNbUbRFfWM82IJingjwuayEgeQl%2FSW0VSnhkR2EwK5C8mSy7HGhs5wqjRcaTpOEWBmAGs3OiCM7DOKePT5SvEoSUZTwQi8reCPA40QXI1nFoxXPqinM3RGsWdaVMKoLXSah62zTlOg%2FYELCjgc22pQBRHCzxrrxg6dhBClmEoQ62cr4cfx54Dx5E%2BS0AytGoXEB6lSMIDj%2Fb4GOqUBDmrLdhtgEUNJJlTva%2BuZ%2Fo6QFv%2FAWooOW4nWPl0Hpok5gjyhf%2Bw7LKUz5YV9FMwGyO0g2i0WkQn8XwaF79qMLAMXtXVA55AS674sYxqPDeYc8xGh7QWcln3XFfBYVfZbzdgqhQzSHFDXo1%2F8%2BsxaC%2FlYW%2BJEj%2BhoyEmOdja3re4p6qiPwUi8wfeqv%2F4PaOFPPCZpF8NDX8bMauFTuXp914vRZay5&X-Amz-Signature=9fd50ffcf5e2904555a88aad959fe056d4bc5512c4b61ad6963cd640bc4204c2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SJTLURS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDmJqznq%2Fej1C9iOaL%2FEp5lk8qWTSKJzMcyZQhXLn0C%2BgIgSSmwn7GbKndc%2BiR0fPdrU7xE27NYxrFk70Fbzd%2FgepYqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyXxuM6aA3q5S5kGSrcA96yG1MGUGs2VLhLwadcwi4a3OkvfUQLi6Ov9AqmLhQ8NS8Rt8%2FRgIiyU8QV8p3Ju100viiCdbXGCEsYJpGisYUJgmG8L93iwVI6dj%2Brx1n4XPqKY6DzyEsHG0wX2xl7iR0jDfj0oujpMEtpRV5ud9usBRY%2Fy9RPaxAMJKgGkCJL3MJd60SIKlU5LlL5VD3F0XZCnogUVX8NeFxUlVHGys4fiOepMpEjzMJYD0aAJKmaLug2zu41CofvboXILXdT%2Bi9ii7qtMlbUHg%2FovkHqtR0NjEtqtWrB1jWXDmtZu7K1PZ0zE1u0U5%2FDEwkvG4Q4b82noPaQlWdp13Q37BBzqE5DAo1L9ra8AFxGCRxIEQTNkvga1P5J7bxGUBdJqeGb40MqjvdEnkUbPuhaQlI4XCD%2FKvNfzAvcgI5PQr5%2FHqilbA1hsXVN0D%2FNbUbRFfWM82IJingjwuayEgeQl%2FSW0VSnhkR2EwK5C8mSy7HGhs5wqjRcaTpOEWBmAGs3OiCM7DOKePT5SvEoSUZTwQi8reCPA40QXI1nFoxXPqinM3RGsWdaVMKoLXSah62zTlOg%2FYELCjgc22pQBRHCzxrrxg6dhBClmEoQ62cr4cfx54Dx5E%2BS0AytGoXEB6lSMIDj%2Fb4GOqUBDmrLdhtgEUNJJlTva%2BuZ%2Fo6QFv%2FAWooOW4nWPl0Hpok5gjyhf%2Bw7LKUz5YV9FMwGyO0g2i0WkQn8XwaF79qMLAMXtXVA55AS674sYxqPDeYc8xGh7QWcln3XFfBYVfZbzdgqhQzSHFDXo1%2F8%2BsxaC%2FlYW%2BJEj%2BhoyEmOdja3re4p6qiPwUi8wfeqv%2F4PaOFPPCZpF8NDX8bMauFTuXp914vRZay5&X-Amz-Signature=ddb4d2e0ce2c83ed9a7f76e97b1a5e6fe68b54b2ca1db7eccea1cd5b59b33b58&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SJTLURS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDmJqznq%2Fej1C9iOaL%2FEp5lk8qWTSKJzMcyZQhXLn0C%2BgIgSSmwn7GbKndc%2BiR0fPdrU7xE27NYxrFk70Fbzd%2FgepYqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyXxuM6aA3q5S5kGSrcA96yG1MGUGs2VLhLwadcwi4a3OkvfUQLi6Ov9AqmLhQ8NS8Rt8%2FRgIiyU8QV8p3Ju100viiCdbXGCEsYJpGisYUJgmG8L93iwVI6dj%2Brx1n4XPqKY6DzyEsHG0wX2xl7iR0jDfj0oujpMEtpRV5ud9usBRY%2Fy9RPaxAMJKgGkCJL3MJd60SIKlU5LlL5VD3F0XZCnogUVX8NeFxUlVHGys4fiOepMpEjzMJYD0aAJKmaLug2zu41CofvboXILXdT%2Bi9ii7qtMlbUHg%2FovkHqtR0NjEtqtWrB1jWXDmtZu7K1PZ0zE1u0U5%2FDEwkvG4Q4b82noPaQlWdp13Q37BBzqE5DAo1L9ra8AFxGCRxIEQTNkvga1P5J7bxGUBdJqeGb40MqjvdEnkUbPuhaQlI4XCD%2FKvNfzAvcgI5PQr5%2FHqilbA1hsXVN0D%2FNbUbRFfWM82IJingjwuayEgeQl%2FSW0VSnhkR2EwK5C8mSy7HGhs5wqjRcaTpOEWBmAGs3OiCM7DOKePT5SvEoSUZTwQi8reCPA40QXI1nFoxXPqinM3RGsWdaVMKoLXSah62zTlOg%2FYELCjgc22pQBRHCzxrrxg6dhBClmEoQ62cr4cfx54Dx5E%2BS0AytGoXEB6lSMIDj%2Fb4GOqUBDmrLdhtgEUNJJlTva%2BuZ%2Fo6QFv%2FAWooOW4nWPl0Hpok5gjyhf%2Bw7LKUz5YV9FMwGyO0g2i0WkQn8XwaF79qMLAMXtXVA55AS674sYxqPDeYc8xGh7QWcln3XFfBYVfZbzdgqhQzSHFDXo1%2F8%2BsxaC%2FlYW%2BJEj%2BhoyEmOdja3re4p6qiPwUi8wfeqv%2F4PaOFPPCZpF8NDX8bMauFTuXp914vRZay5&X-Amz-Signature=6cf53b7c6d582693b103cc64468e5d7d5bd38e42dec9a49fc0b195e9ab124c9a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SJTLURS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDmJqznq%2Fej1C9iOaL%2FEp5lk8qWTSKJzMcyZQhXLn0C%2BgIgSSmwn7GbKndc%2BiR0fPdrU7xE27NYxrFk70Fbzd%2FgepYqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyXxuM6aA3q5S5kGSrcA96yG1MGUGs2VLhLwadcwi4a3OkvfUQLi6Ov9AqmLhQ8NS8Rt8%2FRgIiyU8QV8p3Ju100viiCdbXGCEsYJpGisYUJgmG8L93iwVI6dj%2Brx1n4XPqKY6DzyEsHG0wX2xl7iR0jDfj0oujpMEtpRV5ud9usBRY%2Fy9RPaxAMJKgGkCJL3MJd60SIKlU5LlL5VD3F0XZCnogUVX8NeFxUlVHGys4fiOepMpEjzMJYD0aAJKmaLug2zu41CofvboXILXdT%2Bi9ii7qtMlbUHg%2FovkHqtR0NjEtqtWrB1jWXDmtZu7K1PZ0zE1u0U5%2FDEwkvG4Q4b82noPaQlWdp13Q37BBzqE5DAo1L9ra8AFxGCRxIEQTNkvga1P5J7bxGUBdJqeGb40MqjvdEnkUbPuhaQlI4XCD%2FKvNfzAvcgI5PQr5%2FHqilbA1hsXVN0D%2FNbUbRFfWM82IJingjwuayEgeQl%2FSW0VSnhkR2EwK5C8mSy7HGhs5wqjRcaTpOEWBmAGs3OiCM7DOKePT5SvEoSUZTwQi8reCPA40QXI1nFoxXPqinM3RGsWdaVMKoLXSah62zTlOg%2FYELCjgc22pQBRHCzxrrxg6dhBClmEoQ62cr4cfx54Dx5E%2BS0AytGoXEB6lSMIDj%2Fb4GOqUBDmrLdhtgEUNJJlTva%2BuZ%2Fo6QFv%2FAWooOW4nWPl0Hpok5gjyhf%2Bw7LKUz5YV9FMwGyO0g2i0WkQn8XwaF79qMLAMXtXVA55AS674sYxqPDeYc8xGh7QWcln3XFfBYVfZbzdgqhQzSHFDXo1%2F8%2BsxaC%2FlYW%2BJEj%2BhoyEmOdja3re4p6qiPwUi8wfeqv%2F4PaOFPPCZpF8NDX8bMauFTuXp914vRZay5&X-Amz-Signature=21c38f4b3b4b4ae206ee5a8838bba0561deb950948e27604e0b5ee436298cd77&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SJTLURS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDmJqznq%2Fej1C9iOaL%2FEp5lk8qWTSKJzMcyZQhXLn0C%2BgIgSSmwn7GbKndc%2BiR0fPdrU7xE27NYxrFk70Fbzd%2FgepYqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyXxuM6aA3q5S5kGSrcA96yG1MGUGs2VLhLwadcwi4a3OkvfUQLi6Ov9AqmLhQ8NS8Rt8%2FRgIiyU8QV8p3Ju100viiCdbXGCEsYJpGisYUJgmG8L93iwVI6dj%2Brx1n4XPqKY6DzyEsHG0wX2xl7iR0jDfj0oujpMEtpRV5ud9usBRY%2Fy9RPaxAMJKgGkCJL3MJd60SIKlU5LlL5VD3F0XZCnogUVX8NeFxUlVHGys4fiOepMpEjzMJYD0aAJKmaLug2zu41CofvboXILXdT%2Bi9ii7qtMlbUHg%2FovkHqtR0NjEtqtWrB1jWXDmtZu7K1PZ0zE1u0U5%2FDEwkvG4Q4b82noPaQlWdp13Q37BBzqE5DAo1L9ra8AFxGCRxIEQTNkvga1P5J7bxGUBdJqeGb40MqjvdEnkUbPuhaQlI4XCD%2FKvNfzAvcgI5PQr5%2FHqilbA1hsXVN0D%2FNbUbRFfWM82IJingjwuayEgeQl%2FSW0VSnhkR2EwK5C8mSy7HGhs5wqjRcaTpOEWBmAGs3OiCM7DOKePT5SvEoSUZTwQi8reCPA40QXI1nFoxXPqinM3RGsWdaVMKoLXSah62zTlOg%2FYELCjgc22pQBRHCzxrrxg6dhBClmEoQ62cr4cfx54Dx5E%2BS0AytGoXEB6lSMIDj%2Fb4GOqUBDmrLdhtgEUNJJlTva%2BuZ%2Fo6QFv%2FAWooOW4nWPl0Hpok5gjyhf%2Bw7LKUz5YV9FMwGyO0g2i0WkQn8XwaF79qMLAMXtXVA55AS674sYxqPDeYc8xGh7QWcln3XFfBYVfZbzdgqhQzSHFDXo1%2F8%2BsxaC%2FlYW%2BJEj%2BhoyEmOdja3re4p6qiPwUi8wfeqv%2F4PaOFPPCZpF8NDX8bMauFTuXp914vRZay5&X-Amz-Signature=8e8fc3d664df3cb142e04c7169705d6261bcfca6e33f036e2accf140031c5e8c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SJTLURS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDmJqznq%2Fej1C9iOaL%2FEp5lk8qWTSKJzMcyZQhXLn0C%2BgIgSSmwn7GbKndc%2BiR0fPdrU7xE27NYxrFk70Fbzd%2FgepYqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyXxuM6aA3q5S5kGSrcA96yG1MGUGs2VLhLwadcwi4a3OkvfUQLi6Ov9AqmLhQ8NS8Rt8%2FRgIiyU8QV8p3Ju100viiCdbXGCEsYJpGisYUJgmG8L93iwVI6dj%2Brx1n4XPqKY6DzyEsHG0wX2xl7iR0jDfj0oujpMEtpRV5ud9usBRY%2Fy9RPaxAMJKgGkCJL3MJd60SIKlU5LlL5VD3F0XZCnogUVX8NeFxUlVHGys4fiOepMpEjzMJYD0aAJKmaLug2zu41CofvboXILXdT%2Bi9ii7qtMlbUHg%2FovkHqtR0NjEtqtWrB1jWXDmtZu7K1PZ0zE1u0U5%2FDEwkvG4Q4b82noPaQlWdp13Q37BBzqE5DAo1L9ra8AFxGCRxIEQTNkvga1P5J7bxGUBdJqeGb40MqjvdEnkUbPuhaQlI4XCD%2FKvNfzAvcgI5PQr5%2FHqilbA1hsXVN0D%2FNbUbRFfWM82IJingjwuayEgeQl%2FSW0VSnhkR2EwK5C8mSy7HGhs5wqjRcaTpOEWBmAGs3OiCM7DOKePT5SvEoSUZTwQi8reCPA40QXI1nFoxXPqinM3RGsWdaVMKoLXSah62zTlOg%2FYELCjgc22pQBRHCzxrrxg6dhBClmEoQ62cr4cfx54Dx5E%2BS0AytGoXEB6lSMIDj%2Fb4GOqUBDmrLdhtgEUNJJlTva%2BuZ%2Fo6QFv%2FAWooOW4nWPl0Hpok5gjyhf%2Bw7LKUz5YV9FMwGyO0g2i0WkQn8XwaF79qMLAMXtXVA55AS674sYxqPDeYc8xGh7QWcln3XFfBYVfZbzdgqhQzSHFDXo1%2F8%2BsxaC%2FlYW%2BJEj%2BhoyEmOdja3re4p6qiPwUi8wfeqv%2F4PaOFPPCZpF8NDX8bMauFTuXp914vRZay5&X-Amz-Signature=4209a6eb241adc0ed148793b183726c889675fa19d317581f87f06040c0f34e2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SJTLURS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDmJqznq%2Fej1C9iOaL%2FEp5lk8qWTSKJzMcyZQhXLn0C%2BgIgSSmwn7GbKndc%2BiR0fPdrU7xE27NYxrFk70Fbzd%2FgepYqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyXxuM6aA3q5S5kGSrcA96yG1MGUGs2VLhLwadcwi4a3OkvfUQLi6Ov9AqmLhQ8NS8Rt8%2FRgIiyU8QV8p3Ju100viiCdbXGCEsYJpGisYUJgmG8L93iwVI6dj%2Brx1n4XPqKY6DzyEsHG0wX2xl7iR0jDfj0oujpMEtpRV5ud9usBRY%2Fy9RPaxAMJKgGkCJL3MJd60SIKlU5LlL5VD3F0XZCnogUVX8NeFxUlVHGys4fiOepMpEjzMJYD0aAJKmaLug2zu41CofvboXILXdT%2Bi9ii7qtMlbUHg%2FovkHqtR0NjEtqtWrB1jWXDmtZu7K1PZ0zE1u0U5%2FDEwkvG4Q4b82noPaQlWdp13Q37BBzqE5DAo1L9ra8AFxGCRxIEQTNkvga1P5J7bxGUBdJqeGb40MqjvdEnkUbPuhaQlI4XCD%2FKvNfzAvcgI5PQr5%2FHqilbA1hsXVN0D%2FNbUbRFfWM82IJingjwuayEgeQl%2FSW0VSnhkR2EwK5C8mSy7HGhs5wqjRcaTpOEWBmAGs3OiCM7DOKePT5SvEoSUZTwQi8reCPA40QXI1nFoxXPqinM3RGsWdaVMKoLXSah62zTlOg%2FYELCjgc22pQBRHCzxrrxg6dhBClmEoQ62cr4cfx54Dx5E%2BS0AytGoXEB6lSMIDj%2Fb4GOqUBDmrLdhtgEUNJJlTva%2BuZ%2Fo6QFv%2FAWooOW4nWPl0Hpok5gjyhf%2Bw7LKUz5YV9FMwGyO0g2i0WkQn8XwaF79qMLAMXtXVA55AS674sYxqPDeYc8xGh7QWcln3XFfBYVfZbzdgqhQzSHFDXo1%2F8%2BsxaC%2FlYW%2BJEj%2BhoyEmOdja3re4p6qiPwUi8wfeqv%2F4PaOFPPCZpF8NDX8bMauFTuXp914vRZay5&X-Amz-Signature=e00808dc5c9f340943388b6f9bb87a40e6c2018171746144f7f7ed1118de9ba8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
