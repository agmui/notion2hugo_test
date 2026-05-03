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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LWBMGEG%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgxjGLJdjxjZwxPhpHjUw5PQFXrUntYhclAb80KQpycgIhAMmREc2vDYyZGHA1s3jofjgNDvUJcr6q5jnV5IzCY4ImKv8DCEsQABoMNjM3NDIzMTgzODA1IgxC7rXwPIg7R9uE08kq3APDzynn3viN9bZjUTjg817rO%2F9JPDpPP00vS5G1c%2B%2F9FgMKG0fT0R%2FwdygGKVuJc1HUd65P7qJ5K2LfAtUylakL6biDuSXwX6sYlH%2BhUfZvVrPLB8Wi1kfeowpOCmQvalDBqO9anuWVas60fOxhxFeeVhaXiYVJh2i3nvelp4HliZvDMxWH3ZSUwIuIsdpmcMnBIoMs58tVQanaQ00%2BIvDndVxud1Pv%2FWgr2zSfEHUzcT4%2Bky61oa%2B%2BD0DAtx7NvpY%2BuPM58OC5AqlGFHeJxRGjPhWnqIjUENsK6ND9KsH1GLMXqyU69U9PifCenZCgexRTwVQ8MmMq3z%2Ff03FVHhi9TugMD1rinxb8jW1mvR1sXRVGyF0PFrW6QMYZjpBufl2obRrptCddmSs2WSYFMKrP8Spk15HbUnZLwQPycjIa4UQw6aToAgVvWYLSzngV5K%2FxN4V2l3yPfhuNQFhyFO6mo4nqq30BSAEYktTeMAVeq%2FXYNdiREQbNLr2lgG0rcUpbIaRlmGrv2z55P4R%2F1jhN7fIKMcZ6m6naN6QiF0Lnzqc9h%2B51bx6IU3hC%2B647IL7a0rvRshus%2FG3zEpgk3kFS%2FmJmaAAns7s7PMVtVMiUDFMm0Z9wDb9e5O55RzDf1trPBjqkAd7pfLm4sfT6QDGj80PWmQzTLWb1lKjBvFDrQiftBJ2fbKHIYCcqyN5d95XcRAVzEaQnwXBOrlN%2Fr1e4Fm1Xz8G34luGctTbi5lNzphpKueTTOHvXoK8%2FuLJHma%2Fz%2B7K4%2FCQhdKUfzAmk3Rsubg8Vmpo%2B2xaFT1Fdgc6Nb135CS4%2FXXDjk3VLNpf0DZyy6I8xWyIwfsnWcL7OeQXCyLsB3oWzu47&X-Amz-Signature=fa7fb6e2e4b2fcb04499496963290ee8a1823e71280f8461793c9e8e372e31d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LWBMGEG%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgxjGLJdjxjZwxPhpHjUw5PQFXrUntYhclAb80KQpycgIhAMmREc2vDYyZGHA1s3jofjgNDvUJcr6q5jnV5IzCY4ImKv8DCEsQABoMNjM3NDIzMTgzODA1IgxC7rXwPIg7R9uE08kq3APDzynn3viN9bZjUTjg817rO%2F9JPDpPP00vS5G1c%2B%2F9FgMKG0fT0R%2FwdygGKVuJc1HUd65P7qJ5K2LfAtUylakL6biDuSXwX6sYlH%2BhUfZvVrPLB8Wi1kfeowpOCmQvalDBqO9anuWVas60fOxhxFeeVhaXiYVJh2i3nvelp4HliZvDMxWH3ZSUwIuIsdpmcMnBIoMs58tVQanaQ00%2BIvDndVxud1Pv%2FWgr2zSfEHUzcT4%2Bky61oa%2B%2BD0DAtx7NvpY%2BuPM58OC5AqlGFHeJxRGjPhWnqIjUENsK6ND9KsH1GLMXqyU69U9PifCenZCgexRTwVQ8MmMq3z%2Ff03FVHhi9TugMD1rinxb8jW1mvR1sXRVGyF0PFrW6QMYZjpBufl2obRrptCddmSs2WSYFMKrP8Spk15HbUnZLwQPycjIa4UQw6aToAgVvWYLSzngV5K%2FxN4V2l3yPfhuNQFhyFO6mo4nqq30BSAEYktTeMAVeq%2FXYNdiREQbNLr2lgG0rcUpbIaRlmGrv2z55P4R%2F1jhN7fIKMcZ6m6naN6QiF0Lnzqc9h%2B51bx6IU3hC%2B647IL7a0rvRshus%2FG3zEpgk3kFS%2FmJmaAAns7s7PMVtVMiUDFMm0Z9wDb9e5O55RzDf1trPBjqkAd7pfLm4sfT6QDGj80PWmQzTLWb1lKjBvFDrQiftBJ2fbKHIYCcqyN5d95XcRAVzEaQnwXBOrlN%2Fr1e4Fm1Xz8G34luGctTbi5lNzphpKueTTOHvXoK8%2FuLJHma%2Fz%2B7K4%2FCQhdKUfzAmk3Rsubg8Vmpo%2B2xaFT1Fdgc6Nb135CS4%2FXXDjk3VLNpf0DZyy6I8xWyIwfsnWcL7OeQXCyLsB3oWzu47&X-Amz-Signature=0863980fcaa621825829f73ab94415270533c61bf73b04c6871db166d9f56b3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LWBMGEG%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgxjGLJdjxjZwxPhpHjUw5PQFXrUntYhclAb80KQpycgIhAMmREc2vDYyZGHA1s3jofjgNDvUJcr6q5jnV5IzCY4ImKv8DCEsQABoMNjM3NDIzMTgzODA1IgxC7rXwPIg7R9uE08kq3APDzynn3viN9bZjUTjg817rO%2F9JPDpPP00vS5G1c%2B%2F9FgMKG0fT0R%2FwdygGKVuJc1HUd65P7qJ5K2LfAtUylakL6biDuSXwX6sYlH%2BhUfZvVrPLB8Wi1kfeowpOCmQvalDBqO9anuWVas60fOxhxFeeVhaXiYVJh2i3nvelp4HliZvDMxWH3ZSUwIuIsdpmcMnBIoMs58tVQanaQ00%2BIvDndVxud1Pv%2FWgr2zSfEHUzcT4%2Bky61oa%2B%2BD0DAtx7NvpY%2BuPM58OC5AqlGFHeJxRGjPhWnqIjUENsK6ND9KsH1GLMXqyU69U9PifCenZCgexRTwVQ8MmMq3z%2Ff03FVHhi9TugMD1rinxb8jW1mvR1sXRVGyF0PFrW6QMYZjpBufl2obRrptCddmSs2WSYFMKrP8Spk15HbUnZLwQPycjIa4UQw6aToAgVvWYLSzngV5K%2FxN4V2l3yPfhuNQFhyFO6mo4nqq30BSAEYktTeMAVeq%2FXYNdiREQbNLr2lgG0rcUpbIaRlmGrv2z55P4R%2F1jhN7fIKMcZ6m6naN6QiF0Lnzqc9h%2B51bx6IU3hC%2B647IL7a0rvRshus%2FG3zEpgk3kFS%2FmJmaAAns7s7PMVtVMiUDFMm0Z9wDb9e5O55RzDf1trPBjqkAd7pfLm4sfT6QDGj80PWmQzTLWb1lKjBvFDrQiftBJ2fbKHIYCcqyN5d95XcRAVzEaQnwXBOrlN%2Fr1e4Fm1Xz8G34luGctTbi5lNzphpKueTTOHvXoK8%2FuLJHma%2Fz%2B7K4%2FCQhdKUfzAmk3Rsubg8Vmpo%2B2xaFT1Fdgc6Nb135CS4%2FXXDjk3VLNpf0DZyy6I8xWyIwfsnWcL7OeQXCyLsB3oWzu47&X-Amz-Signature=42afb09fea674cdec8d19b5b372a28838ee966922b906d69af05b355a12d7272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LWBMGEG%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgxjGLJdjxjZwxPhpHjUw5PQFXrUntYhclAb80KQpycgIhAMmREc2vDYyZGHA1s3jofjgNDvUJcr6q5jnV5IzCY4ImKv8DCEsQABoMNjM3NDIzMTgzODA1IgxC7rXwPIg7R9uE08kq3APDzynn3viN9bZjUTjg817rO%2F9JPDpPP00vS5G1c%2B%2F9FgMKG0fT0R%2FwdygGKVuJc1HUd65P7qJ5K2LfAtUylakL6biDuSXwX6sYlH%2BhUfZvVrPLB8Wi1kfeowpOCmQvalDBqO9anuWVas60fOxhxFeeVhaXiYVJh2i3nvelp4HliZvDMxWH3ZSUwIuIsdpmcMnBIoMs58tVQanaQ00%2BIvDndVxud1Pv%2FWgr2zSfEHUzcT4%2Bky61oa%2B%2BD0DAtx7NvpY%2BuPM58OC5AqlGFHeJxRGjPhWnqIjUENsK6ND9KsH1GLMXqyU69U9PifCenZCgexRTwVQ8MmMq3z%2Ff03FVHhi9TugMD1rinxb8jW1mvR1sXRVGyF0PFrW6QMYZjpBufl2obRrptCddmSs2WSYFMKrP8Spk15HbUnZLwQPycjIa4UQw6aToAgVvWYLSzngV5K%2FxN4V2l3yPfhuNQFhyFO6mo4nqq30BSAEYktTeMAVeq%2FXYNdiREQbNLr2lgG0rcUpbIaRlmGrv2z55P4R%2F1jhN7fIKMcZ6m6naN6QiF0Lnzqc9h%2B51bx6IU3hC%2B647IL7a0rvRshus%2FG3zEpgk3kFS%2FmJmaAAns7s7PMVtVMiUDFMm0Z9wDb9e5O55RzDf1trPBjqkAd7pfLm4sfT6QDGj80PWmQzTLWb1lKjBvFDrQiftBJ2fbKHIYCcqyN5d95XcRAVzEaQnwXBOrlN%2Fr1e4Fm1Xz8G34luGctTbi5lNzphpKueTTOHvXoK8%2FuLJHma%2Fz%2B7K4%2FCQhdKUfzAmk3Rsubg8Vmpo%2B2xaFT1Fdgc6Nb135CS4%2FXXDjk3VLNpf0DZyy6I8xWyIwfsnWcL7OeQXCyLsB3oWzu47&X-Amz-Signature=5bc762d236d99393bef76e47d45ad29dde6f0ea43e25da19e51135f38bee19a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LWBMGEG%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgxjGLJdjxjZwxPhpHjUw5PQFXrUntYhclAb80KQpycgIhAMmREc2vDYyZGHA1s3jofjgNDvUJcr6q5jnV5IzCY4ImKv8DCEsQABoMNjM3NDIzMTgzODA1IgxC7rXwPIg7R9uE08kq3APDzynn3viN9bZjUTjg817rO%2F9JPDpPP00vS5G1c%2B%2F9FgMKG0fT0R%2FwdygGKVuJc1HUd65P7qJ5K2LfAtUylakL6biDuSXwX6sYlH%2BhUfZvVrPLB8Wi1kfeowpOCmQvalDBqO9anuWVas60fOxhxFeeVhaXiYVJh2i3nvelp4HliZvDMxWH3ZSUwIuIsdpmcMnBIoMs58tVQanaQ00%2BIvDndVxud1Pv%2FWgr2zSfEHUzcT4%2Bky61oa%2B%2BD0DAtx7NvpY%2BuPM58OC5AqlGFHeJxRGjPhWnqIjUENsK6ND9KsH1GLMXqyU69U9PifCenZCgexRTwVQ8MmMq3z%2Ff03FVHhi9TugMD1rinxb8jW1mvR1sXRVGyF0PFrW6QMYZjpBufl2obRrptCddmSs2WSYFMKrP8Spk15HbUnZLwQPycjIa4UQw6aToAgVvWYLSzngV5K%2FxN4V2l3yPfhuNQFhyFO6mo4nqq30BSAEYktTeMAVeq%2FXYNdiREQbNLr2lgG0rcUpbIaRlmGrv2z55P4R%2F1jhN7fIKMcZ6m6naN6QiF0Lnzqc9h%2B51bx6IU3hC%2B647IL7a0rvRshus%2FG3zEpgk3kFS%2FmJmaAAns7s7PMVtVMiUDFMm0Z9wDb9e5O55RzDf1trPBjqkAd7pfLm4sfT6QDGj80PWmQzTLWb1lKjBvFDrQiftBJ2fbKHIYCcqyN5d95XcRAVzEaQnwXBOrlN%2Fr1e4Fm1Xz8G34luGctTbi5lNzphpKueTTOHvXoK8%2FuLJHma%2Fz%2B7K4%2FCQhdKUfzAmk3Rsubg8Vmpo%2B2xaFT1Fdgc6Nb135CS4%2FXXDjk3VLNpf0DZyy6I8xWyIwfsnWcL7OeQXCyLsB3oWzu47&X-Amz-Signature=428d683778174b14cd136d01b5dc36348c1f642f73c82a35f1108c1bd629df0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LWBMGEG%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgxjGLJdjxjZwxPhpHjUw5PQFXrUntYhclAb80KQpycgIhAMmREc2vDYyZGHA1s3jofjgNDvUJcr6q5jnV5IzCY4ImKv8DCEsQABoMNjM3NDIzMTgzODA1IgxC7rXwPIg7R9uE08kq3APDzynn3viN9bZjUTjg817rO%2F9JPDpPP00vS5G1c%2B%2F9FgMKG0fT0R%2FwdygGKVuJc1HUd65P7qJ5K2LfAtUylakL6biDuSXwX6sYlH%2BhUfZvVrPLB8Wi1kfeowpOCmQvalDBqO9anuWVas60fOxhxFeeVhaXiYVJh2i3nvelp4HliZvDMxWH3ZSUwIuIsdpmcMnBIoMs58tVQanaQ00%2BIvDndVxud1Pv%2FWgr2zSfEHUzcT4%2Bky61oa%2B%2BD0DAtx7NvpY%2BuPM58OC5AqlGFHeJxRGjPhWnqIjUENsK6ND9KsH1GLMXqyU69U9PifCenZCgexRTwVQ8MmMq3z%2Ff03FVHhi9TugMD1rinxb8jW1mvR1sXRVGyF0PFrW6QMYZjpBufl2obRrptCddmSs2WSYFMKrP8Spk15HbUnZLwQPycjIa4UQw6aToAgVvWYLSzngV5K%2FxN4V2l3yPfhuNQFhyFO6mo4nqq30BSAEYktTeMAVeq%2FXYNdiREQbNLr2lgG0rcUpbIaRlmGrv2z55P4R%2F1jhN7fIKMcZ6m6naN6QiF0Lnzqc9h%2B51bx6IU3hC%2B647IL7a0rvRshus%2FG3zEpgk3kFS%2FmJmaAAns7s7PMVtVMiUDFMm0Z9wDb9e5O55RzDf1trPBjqkAd7pfLm4sfT6QDGj80PWmQzTLWb1lKjBvFDrQiftBJ2fbKHIYCcqyN5d95XcRAVzEaQnwXBOrlN%2Fr1e4Fm1Xz8G34luGctTbi5lNzphpKueTTOHvXoK8%2FuLJHma%2Fz%2B7K4%2FCQhdKUfzAmk3Rsubg8Vmpo%2B2xaFT1Fdgc6Nb135CS4%2FXXDjk3VLNpf0DZyy6I8xWyIwfsnWcL7OeQXCyLsB3oWzu47&X-Amz-Signature=f123afd5fb5026f09a0954c5d5de9c4185c0138ff8ba8b41318b9cffadde8ecc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LWBMGEG%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgxjGLJdjxjZwxPhpHjUw5PQFXrUntYhclAb80KQpycgIhAMmREc2vDYyZGHA1s3jofjgNDvUJcr6q5jnV5IzCY4ImKv8DCEsQABoMNjM3NDIzMTgzODA1IgxC7rXwPIg7R9uE08kq3APDzynn3viN9bZjUTjg817rO%2F9JPDpPP00vS5G1c%2B%2F9FgMKG0fT0R%2FwdygGKVuJc1HUd65P7qJ5K2LfAtUylakL6biDuSXwX6sYlH%2BhUfZvVrPLB8Wi1kfeowpOCmQvalDBqO9anuWVas60fOxhxFeeVhaXiYVJh2i3nvelp4HliZvDMxWH3ZSUwIuIsdpmcMnBIoMs58tVQanaQ00%2BIvDndVxud1Pv%2FWgr2zSfEHUzcT4%2Bky61oa%2B%2BD0DAtx7NvpY%2BuPM58OC5AqlGFHeJxRGjPhWnqIjUENsK6ND9KsH1GLMXqyU69U9PifCenZCgexRTwVQ8MmMq3z%2Ff03FVHhi9TugMD1rinxb8jW1mvR1sXRVGyF0PFrW6QMYZjpBufl2obRrptCddmSs2WSYFMKrP8Spk15HbUnZLwQPycjIa4UQw6aToAgVvWYLSzngV5K%2FxN4V2l3yPfhuNQFhyFO6mo4nqq30BSAEYktTeMAVeq%2FXYNdiREQbNLr2lgG0rcUpbIaRlmGrv2z55P4R%2F1jhN7fIKMcZ6m6naN6QiF0Lnzqc9h%2B51bx6IU3hC%2B647IL7a0rvRshus%2FG3zEpgk3kFS%2FmJmaAAns7s7PMVtVMiUDFMm0Z9wDb9e5O55RzDf1trPBjqkAd7pfLm4sfT6QDGj80PWmQzTLWb1lKjBvFDrQiftBJ2fbKHIYCcqyN5d95XcRAVzEaQnwXBOrlN%2Fr1e4Fm1Xz8G34luGctTbi5lNzphpKueTTOHvXoK8%2FuLJHma%2Fz%2B7K4%2FCQhdKUfzAmk3Rsubg8Vmpo%2B2xaFT1Fdgc6Nb135CS4%2FXXDjk3VLNpf0DZyy6I8xWyIwfsnWcL7OeQXCyLsB3oWzu47&X-Amz-Signature=f9835f548357db212a0ef3ebc368c279c0f2b76710ddda92d8972cf3dab7aba2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LWBMGEG%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgxjGLJdjxjZwxPhpHjUw5PQFXrUntYhclAb80KQpycgIhAMmREc2vDYyZGHA1s3jofjgNDvUJcr6q5jnV5IzCY4ImKv8DCEsQABoMNjM3NDIzMTgzODA1IgxC7rXwPIg7R9uE08kq3APDzynn3viN9bZjUTjg817rO%2F9JPDpPP00vS5G1c%2B%2F9FgMKG0fT0R%2FwdygGKVuJc1HUd65P7qJ5K2LfAtUylakL6biDuSXwX6sYlH%2BhUfZvVrPLB8Wi1kfeowpOCmQvalDBqO9anuWVas60fOxhxFeeVhaXiYVJh2i3nvelp4HliZvDMxWH3ZSUwIuIsdpmcMnBIoMs58tVQanaQ00%2BIvDndVxud1Pv%2FWgr2zSfEHUzcT4%2Bky61oa%2B%2BD0DAtx7NvpY%2BuPM58OC5AqlGFHeJxRGjPhWnqIjUENsK6ND9KsH1GLMXqyU69U9PifCenZCgexRTwVQ8MmMq3z%2Ff03FVHhi9TugMD1rinxb8jW1mvR1sXRVGyF0PFrW6QMYZjpBufl2obRrptCddmSs2WSYFMKrP8Spk15HbUnZLwQPycjIa4UQw6aToAgVvWYLSzngV5K%2FxN4V2l3yPfhuNQFhyFO6mo4nqq30BSAEYktTeMAVeq%2FXYNdiREQbNLr2lgG0rcUpbIaRlmGrv2z55P4R%2F1jhN7fIKMcZ6m6naN6QiF0Lnzqc9h%2B51bx6IU3hC%2B647IL7a0rvRshus%2FG3zEpgk3kFS%2FmJmaAAns7s7PMVtVMiUDFMm0Z9wDb9e5O55RzDf1trPBjqkAd7pfLm4sfT6QDGj80PWmQzTLWb1lKjBvFDrQiftBJ2fbKHIYCcqyN5d95XcRAVzEaQnwXBOrlN%2Fr1e4Fm1Xz8G34luGctTbi5lNzphpKueTTOHvXoK8%2FuLJHma%2Fz%2B7K4%2FCQhdKUfzAmk3Rsubg8Vmpo%2B2xaFT1Fdgc6Nb135CS4%2FXXDjk3VLNpf0DZyy6I8xWyIwfsnWcL7OeQXCyLsB3oWzu47&X-Amz-Signature=10b1712b4a446de2ad2f7c589e135bc18c99498e559ea5b76a74c8e571228083&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
