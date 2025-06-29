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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6GCLJAI%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T181043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp5JdjatZjCAsvX%2FKNAhA%2BZyKCwdwtjZruSRRH5Mt60gIhAOct9PIJrCP7OpUqJsLYIXZKP4xc9TSgVwLY7xoYJhylKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwxHG8UQkSAVvaoekq3AMGFbu2lBtcCbrElMYN7ssIyw9cLrN3VDEtzu%2BToC8VW4sc0UOnaUQkXJgqfQeZrzat%2FMTEae7hJqcUpw0dOQsvXGVwWSSCjFgY0Vvz%2FkIM6TP%2BPIZ6SwS3tzeTE5yxFdsGMQJkA3BTh65OOBYoFUnR09a%2FLYTnjW1rjR0j6Ag4eIGq%2Fsqi7rJJhjXup9WcYQX3JaqTmntRfZCSzSr5DdyyqI4r3fN8sGi5gWy%2FIigO5%2BLqLi1zC%2F7Zl7v%2FCD023rcBth7Wgnx%2FjAOl3eCZrKaJQ1pxUEP7H%2Ba8KZXryWrurmQzPk1%2BwfYhsmOA5BnNe5q9yTA34uiCLR5LSDhmxNUg4%2F8LNswxPGyqh9v8yqebIBeQCftdyu3cnHqq7QIJUi9ZSEM8UjpwF40vmx8uQYvUN9%2FhJVbynXQR6nmBpigfYYywIqLTPlBM3hCWYsQiBGb3ikoTJPka3N12g%2Bykawa%2FvVex67SG0nnwlWItmlVLqla0XhxNsVKV8zaUPATadfX5q7aWNG3i4%2FkQvX%2F2rv2HBswxVGQiLv2DXp6Hn77VAvVFTR7RxFnjS0EbPs6EHAUgo%2BsDsOGj0agRJXLRXxr5ORww3%2Fdj%2BKDGVXL%2B1Idh6yaCavWOGutDmtJWEjD8%2BoXDBjqkAQt5aOwqfgTojF823NLrynMFfgwM1okh2Tx6AB28DqZW03aj7hJCjv3DQPKJx8tukwPdTFl4YTN70%2FipmDMP%2F7DgVQ9B8Qk%2B6UVKOC7Atho6DrV6MF27Jt6%2Fax2EmA534ajlHJkce1EEYnbhDxRe64qa%2BDy2nC9jEBcnnd1kSKugPgmdRvW6x0j4PfqBmuFvzhHFuIivZmjTWzUSkt%2BWLR3oSSn1&X-Amz-Signature=e31fb9ab19de9e1c9c59e90e4d4aee50ecbbfda7f992121e2b1a9b3d31bd0f33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6GCLJAI%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T181043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp5JdjatZjCAsvX%2FKNAhA%2BZyKCwdwtjZruSRRH5Mt60gIhAOct9PIJrCP7OpUqJsLYIXZKP4xc9TSgVwLY7xoYJhylKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwxHG8UQkSAVvaoekq3AMGFbu2lBtcCbrElMYN7ssIyw9cLrN3VDEtzu%2BToC8VW4sc0UOnaUQkXJgqfQeZrzat%2FMTEae7hJqcUpw0dOQsvXGVwWSSCjFgY0Vvz%2FkIM6TP%2BPIZ6SwS3tzeTE5yxFdsGMQJkA3BTh65OOBYoFUnR09a%2FLYTnjW1rjR0j6Ag4eIGq%2Fsqi7rJJhjXup9WcYQX3JaqTmntRfZCSzSr5DdyyqI4r3fN8sGi5gWy%2FIigO5%2BLqLi1zC%2F7Zl7v%2FCD023rcBth7Wgnx%2FjAOl3eCZrKaJQ1pxUEP7H%2Ba8KZXryWrurmQzPk1%2BwfYhsmOA5BnNe5q9yTA34uiCLR5LSDhmxNUg4%2F8LNswxPGyqh9v8yqebIBeQCftdyu3cnHqq7QIJUi9ZSEM8UjpwF40vmx8uQYvUN9%2FhJVbynXQR6nmBpigfYYywIqLTPlBM3hCWYsQiBGb3ikoTJPka3N12g%2Bykawa%2FvVex67SG0nnwlWItmlVLqla0XhxNsVKV8zaUPATadfX5q7aWNG3i4%2FkQvX%2F2rv2HBswxVGQiLv2DXp6Hn77VAvVFTR7RxFnjS0EbPs6EHAUgo%2BsDsOGj0agRJXLRXxr5ORww3%2Fdj%2BKDGVXL%2B1Idh6yaCavWOGutDmtJWEjD8%2BoXDBjqkAQt5aOwqfgTojF823NLrynMFfgwM1okh2Tx6AB28DqZW03aj7hJCjv3DQPKJx8tukwPdTFl4YTN70%2FipmDMP%2F7DgVQ9B8Qk%2B6UVKOC7Atho6DrV6MF27Jt6%2Fax2EmA534ajlHJkce1EEYnbhDxRe64qa%2BDy2nC9jEBcnnd1kSKugPgmdRvW6x0j4PfqBmuFvzhHFuIivZmjTWzUSkt%2BWLR3oSSn1&X-Amz-Signature=5221bbdbc0e17d696ef67f9e06790c3e4f7eb8ae0e690f00bc3955ebb0610bbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6GCLJAI%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T181043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp5JdjatZjCAsvX%2FKNAhA%2BZyKCwdwtjZruSRRH5Mt60gIhAOct9PIJrCP7OpUqJsLYIXZKP4xc9TSgVwLY7xoYJhylKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwxHG8UQkSAVvaoekq3AMGFbu2lBtcCbrElMYN7ssIyw9cLrN3VDEtzu%2BToC8VW4sc0UOnaUQkXJgqfQeZrzat%2FMTEae7hJqcUpw0dOQsvXGVwWSSCjFgY0Vvz%2FkIM6TP%2BPIZ6SwS3tzeTE5yxFdsGMQJkA3BTh65OOBYoFUnR09a%2FLYTnjW1rjR0j6Ag4eIGq%2Fsqi7rJJhjXup9WcYQX3JaqTmntRfZCSzSr5DdyyqI4r3fN8sGi5gWy%2FIigO5%2BLqLi1zC%2F7Zl7v%2FCD023rcBth7Wgnx%2FjAOl3eCZrKaJQ1pxUEP7H%2Ba8KZXryWrurmQzPk1%2BwfYhsmOA5BnNe5q9yTA34uiCLR5LSDhmxNUg4%2F8LNswxPGyqh9v8yqebIBeQCftdyu3cnHqq7QIJUi9ZSEM8UjpwF40vmx8uQYvUN9%2FhJVbynXQR6nmBpigfYYywIqLTPlBM3hCWYsQiBGb3ikoTJPka3N12g%2Bykawa%2FvVex67SG0nnwlWItmlVLqla0XhxNsVKV8zaUPATadfX5q7aWNG3i4%2FkQvX%2F2rv2HBswxVGQiLv2DXp6Hn77VAvVFTR7RxFnjS0EbPs6EHAUgo%2BsDsOGj0agRJXLRXxr5ORww3%2Fdj%2BKDGVXL%2B1Idh6yaCavWOGutDmtJWEjD8%2BoXDBjqkAQt5aOwqfgTojF823NLrynMFfgwM1okh2Tx6AB28DqZW03aj7hJCjv3DQPKJx8tukwPdTFl4YTN70%2FipmDMP%2F7DgVQ9B8Qk%2B6UVKOC7Atho6DrV6MF27Jt6%2Fax2EmA534ajlHJkce1EEYnbhDxRe64qa%2BDy2nC9jEBcnnd1kSKugPgmdRvW6x0j4PfqBmuFvzhHFuIivZmjTWzUSkt%2BWLR3oSSn1&X-Amz-Signature=f74d9ce034652e56174ee4e465b823d11719b6c67d93cde43e64c932841c4756&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6GCLJAI%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T181043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp5JdjatZjCAsvX%2FKNAhA%2BZyKCwdwtjZruSRRH5Mt60gIhAOct9PIJrCP7OpUqJsLYIXZKP4xc9TSgVwLY7xoYJhylKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwxHG8UQkSAVvaoekq3AMGFbu2lBtcCbrElMYN7ssIyw9cLrN3VDEtzu%2BToC8VW4sc0UOnaUQkXJgqfQeZrzat%2FMTEae7hJqcUpw0dOQsvXGVwWSSCjFgY0Vvz%2FkIM6TP%2BPIZ6SwS3tzeTE5yxFdsGMQJkA3BTh65OOBYoFUnR09a%2FLYTnjW1rjR0j6Ag4eIGq%2Fsqi7rJJhjXup9WcYQX3JaqTmntRfZCSzSr5DdyyqI4r3fN8sGi5gWy%2FIigO5%2BLqLi1zC%2F7Zl7v%2FCD023rcBth7Wgnx%2FjAOl3eCZrKaJQ1pxUEP7H%2Ba8KZXryWrurmQzPk1%2BwfYhsmOA5BnNe5q9yTA34uiCLR5LSDhmxNUg4%2F8LNswxPGyqh9v8yqebIBeQCftdyu3cnHqq7QIJUi9ZSEM8UjpwF40vmx8uQYvUN9%2FhJVbynXQR6nmBpigfYYywIqLTPlBM3hCWYsQiBGb3ikoTJPka3N12g%2Bykawa%2FvVex67SG0nnwlWItmlVLqla0XhxNsVKV8zaUPATadfX5q7aWNG3i4%2FkQvX%2F2rv2HBswxVGQiLv2DXp6Hn77VAvVFTR7RxFnjS0EbPs6EHAUgo%2BsDsOGj0agRJXLRXxr5ORww3%2Fdj%2BKDGVXL%2B1Idh6yaCavWOGutDmtJWEjD8%2BoXDBjqkAQt5aOwqfgTojF823NLrynMFfgwM1okh2Tx6AB28DqZW03aj7hJCjv3DQPKJx8tukwPdTFl4YTN70%2FipmDMP%2F7DgVQ9B8Qk%2B6UVKOC7Atho6DrV6MF27Jt6%2Fax2EmA534ajlHJkce1EEYnbhDxRe64qa%2BDy2nC9jEBcnnd1kSKugPgmdRvW6x0j4PfqBmuFvzhHFuIivZmjTWzUSkt%2BWLR3oSSn1&X-Amz-Signature=1ee97f5f3736e0f5219b3b21a6348246dcef63236aebf83ac0a842d1063ce832&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6GCLJAI%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T181043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp5JdjatZjCAsvX%2FKNAhA%2BZyKCwdwtjZruSRRH5Mt60gIhAOct9PIJrCP7OpUqJsLYIXZKP4xc9TSgVwLY7xoYJhylKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwxHG8UQkSAVvaoekq3AMGFbu2lBtcCbrElMYN7ssIyw9cLrN3VDEtzu%2BToC8VW4sc0UOnaUQkXJgqfQeZrzat%2FMTEae7hJqcUpw0dOQsvXGVwWSSCjFgY0Vvz%2FkIM6TP%2BPIZ6SwS3tzeTE5yxFdsGMQJkA3BTh65OOBYoFUnR09a%2FLYTnjW1rjR0j6Ag4eIGq%2Fsqi7rJJhjXup9WcYQX3JaqTmntRfZCSzSr5DdyyqI4r3fN8sGi5gWy%2FIigO5%2BLqLi1zC%2F7Zl7v%2FCD023rcBth7Wgnx%2FjAOl3eCZrKaJQ1pxUEP7H%2Ba8KZXryWrurmQzPk1%2BwfYhsmOA5BnNe5q9yTA34uiCLR5LSDhmxNUg4%2F8LNswxPGyqh9v8yqebIBeQCftdyu3cnHqq7QIJUi9ZSEM8UjpwF40vmx8uQYvUN9%2FhJVbynXQR6nmBpigfYYywIqLTPlBM3hCWYsQiBGb3ikoTJPka3N12g%2Bykawa%2FvVex67SG0nnwlWItmlVLqla0XhxNsVKV8zaUPATadfX5q7aWNG3i4%2FkQvX%2F2rv2HBswxVGQiLv2DXp6Hn77VAvVFTR7RxFnjS0EbPs6EHAUgo%2BsDsOGj0agRJXLRXxr5ORww3%2Fdj%2BKDGVXL%2B1Idh6yaCavWOGutDmtJWEjD8%2BoXDBjqkAQt5aOwqfgTojF823NLrynMFfgwM1okh2Tx6AB28DqZW03aj7hJCjv3DQPKJx8tukwPdTFl4YTN70%2FipmDMP%2F7DgVQ9B8Qk%2B6UVKOC7Atho6DrV6MF27Jt6%2Fax2EmA534ajlHJkce1EEYnbhDxRe64qa%2BDy2nC9jEBcnnd1kSKugPgmdRvW6x0j4PfqBmuFvzhHFuIivZmjTWzUSkt%2BWLR3oSSn1&X-Amz-Signature=4c051e9699782b9f9b7d13a758dad96873956aa5bc736072f4e00af131ed164c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6GCLJAI%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T181043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp5JdjatZjCAsvX%2FKNAhA%2BZyKCwdwtjZruSRRH5Mt60gIhAOct9PIJrCP7OpUqJsLYIXZKP4xc9TSgVwLY7xoYJhylKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwxHG8UQkSAVvaoekq3AMGFbu2lBtcCbrElMYN7ssIyw9cLrN3VDEtzu%2BToC8VW4sc0UOnaUQkXJgqfQeZrzat%2FMTEae7hJqcUpw0dOQsvXGVwWSSCjFgY0Vvz%2FkIM6TP%2BPIZ6SwS3tzeTE5yxFdsGMQJkA3BTh65OOBYoFUnR09a%2FLYTnjW1rjR0j6Ag4eIGq%2Fsqi7rJJhjXup9WcYQX3JaqTmntRfZCSzSr5DdyyqI4r3fN8sGi5gWy%2FIigO5%2BLqLi1zC%2F7Zl7v%2FCD023rcBth7Wgnx%2FjAOl3eCZrKaJQ1pxUEP7H%2Ba8KZXryWrurmQzPk1%2BwfYhsmOA5BnNe5q9yTA34uiCLR5LSDhmxNUg4%2F8LNswxPGyqh9v8yqebIBeQCftdyu3cnHqq7QIJUi9ZSEM8UjpwF40vmx8uQYvUN9%2FhJVbynXQR6nmBpigfYYywIqLTPlBM3hCWYsQiBGb3ikoTJPka3N12g%2Bykawa%2FvVex67SG0nnwlWItmlVLqla0XhxNsVKV8zaUPATadfX5q7aWNG3i4%2FkQvX%2F2rv2HBswxVGQiLv2DXp6Hn77VAvVFTR7RxFnjS0EbPs6EHAUgo%2BsDsOGj0agRJXLRXxr5ORww3%2Fdj%2BKDGVXL%2B1Idh6yaCavWOGutDmtJWEjD8%2BoXDBjqkAQt5aOwqfgTojF823NLrynMFfgwM1okh2Tx6AB28DqZW03aj7hJCjv3DQPKJx8tukwPdTFl4YTN70%2FipmDMP%2F7DgVQ9B8Qk%2B6UVKOC7Atho6DrV6MF27Jt6%2Fax2EmA534ajlHJkce1EEYnbhDxRe64qa%2BDy2nC9jEBcnnd1kSKugPgmdRvW6x0j4PfqBmuFvzhHFuIivZmjTWzUSkt%2BWLR3oSSn1&X-Amz-Signature=792e6b76ca42d9edfcd93e78d46cda75a996848e9ed86a5c850d2a876cf48605&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6GCLJAI%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T181043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp5JdjatZjCAsvX%2FKNAhA%2BZyKCwdwtjZruSRRH5Mt60gIhAOct9PIJrCP7OpUqJsLYIXZKP4xc9TSgVwLY7xoYJhylKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwxHG8UQkSAVvaoekq3AMGFbu2lBtcCbrElMYN7ssIyw9cLrN3VDEtzu%2BToC8VW4sc0UOnaUQkXJgqfQeZrzat%2FMTEae7hJqcUpw0dOQsvXGVwWSSCjFgY0Vvz%2FkIM6TP%2BPIZ6SwS3tzeTE5yxFdsGMQJkA3BTh65OOBYoFUnR09a%2FLYTnjW1rjR0j6Ag4eIGq%2Fsqi7rJJhjXup9WcYQX3JaqTmntRfZCSzSr5DdyyqI4r3fN8sGi5gWy%2FIigO5%2BLqLi1zC%2F7Zl7v%2FCD023rcBth7Wgnx%2FjAOl3eCZrKaJQ1pxUEP7H%2Ba8KZXryWrurmQzPk1%2BwfYhsmOA5BnNe5q9yTA34uiCLR5LSDhmxNUg4%2F8LNswxPGyqh9v8yqebIBeQCftdyu3cnHqq7QIJUi9ZSEM8UjpwF40vmx8uQYvUN9%2FhJVbynXQR6nmBpigfYYywIqLTPlBM3hCWYsQiBGb3ikoTJPka3N12g%2Bykawa%2FvVex67SG0nnwlWItmlVLqla0XhxNsVKV8zaUPATadfX5q7aWNG3i4%2FkQvX%2F2rv2HBswxVGQiLv2DXp6Hn77VAvVFTR7RxFnjS0EbPs6EHAUgo%2BsDsOGj0agRJXLRXxr5ORww3%2Fdj%2BKDGVXL%2B1Idh6yaCavWOGutDmtJWEjD8%2BoXDBjqkAQt5aOwqfgTojF823NLrynMFfgwM1okh2Tx6AB28DqZW03aj7hJCjv3DQPKJx8tukwPdTFl4YTN70%2FipmDMP%2F7DgVQ9B8Qk%2B6UVKOC7Atho6DrV6MF27Jt6%2Fax2EmA534ajlHJkce1EEYnbhDxRe64qa%2BDy2nC9jEBcnnd1kSKugPgmdRvW6x0j4PfqBmuFvzhHFuIivZmjTWzUSkt%2BWLR3oSSn1&X-Amz-Signature=d88988572813642e29fdf7a1f421c0ef57521d9917c96e6b8e68f005bed5f9bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6GCLJAI%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T181043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp5JdjatZjCAsvX%2FKNAhA%2BZyKCwdwtjZruSRRH5Mt60gIhAOct9PIJrCP7OpUqJsLYIXZKP4xc9TSgVwLY7xoYJhylKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwxHG8UQkSAVvaoekq3AMGFbu2lBtcCbrElMYN7ssIyw9cLrN3VDEtzu%2BToC8VW4sc0UOnaUQkXJgqfQeZrzat%2FMTEae7hJqcUpw0dOQsvXGVwWSSCjFgY0Vvz%2FkIM6TP%2BPIZ6SwS3tzeTE5yxFdsGMQJkA3BTh65OOBYoFUnR09a%2FLYTnjW1rjR0j6Ag4eIGq%2Fsqi7rJJhjXup9WcYQX3JaqTmntRfZCSzSr5DdyyqI4r3fN8sGi5gWy%2FIigO5%2BLqLi1zC%2F7Zl7v%2FCD023rcBth7Wgnx%2FjAOl3eCZrKaJQ1pxUEP7H%2Ba8KZXryWrurmQzPk1%2BwfYhsmOA5BnNe5q9yTA34uiCLR5LSDhmxNUg4%2F8LNswxPGyqh9v8yqebIBeQCftdyu3cnHqq7QIJUi9ZSEM8UjpwF40vmx8uQYvUN9%2FhJVbynXQR6nmBpigfYYywIqLTPlBM3hCWYsQiBGb3ikoTJPka3N12g%2Bykawa%2FvVex67SG0nnwlWItmlVLqla0XhxNsVKV8zaUPATadfX5q7aWNG3i4%2FkQvX%2F2rv2HBswxVGQiLv2DXp6Hn77VAvVFTR7RxFnjS0EbPs6EHAUgo%2BsDsOGj0agRJXLRXxr5ORww3%2Fdj%2BKDGVXL%2B1Idh6yaCavWOGutDmtJWEjD8%2BoXDBjqkAQt5aOwqfgTojF823NLrynMFfgwM1okh2Tx6AB28DqZW03aj7hJCjv3DQPKJx8tukwPdTFl4YTN70%2FipmDMP%2F7DgVQ9B8Qk%2B6UVKOC7Atho6DrV6MF27Jt6%2Fax2EmA534ajlHJkce1EEYnbhDxRe64qa%2BDy2nC9jEBcnnd1kSKugPgmdRvW6x0j4PfqBmuFvzhHFuIivZmjTWzUSkt%2BWLR3oSSn1&X-Amz-Signature=2dbde12bb3e195cabac0e6f789532ee02b5ac377f79f4ae6e0e5cc2ba79c876f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
