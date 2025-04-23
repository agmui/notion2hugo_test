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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXUAERSP%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T004013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD%2F5V6Wo49bPWtx09y27goYoB8cIVRH92wsWxRyDJSIqwIhAPDjUGLkfHa1MA4Cr54NC1S8I2PVwg%2FQwFrym2HFm%2BpMKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWBSE7vYiEu521Dlkq3APxSaDrqS0X8oZ%2F%2FF2IPJjkkwPANTFQd26Vhwzp2FBHNvIQXWYvoL257xnS2f45qmAauEZ8LDXo5gieEKkb%2B7Q2c1wZ71ovVVcGIRc1Ccm%2FdWCqvwQfw7RhYkQ2AW7Sbja7wHt9KxiHlINWuaJtmVYn%2FC8EQFfmGIp3zBRb25t9PM9iUbcLci9komc7XeJHBG2Wn9Gu4%2FrHFqBkEbq%2Bw%2FT%2FIdmKlLSSde2PG0%2FpYqL9WCP%2B5LLuAcix4avsqWxyG6ypRI%2BvtLse%2F0g89Rvv%2B0YLCy8hPPhQrEeamWMbeNUiyOa6z5K4kBiFWz%2FTkl7fBzXD8UgcFwPFrMfOhfyw2bD5FczjpPo2uDf9oirDOxS1rUG7jI8skloYcDsMMG5zCAYCZ2gay%2BI2YYlJwoWEzJBO%2BR7KMs%2Fpd4yES%2F0C1x1dPHSKpTUE%2FqPH7VVZTF3i%2FEfXpVOtRkOVPR2SKj6lLEaufYh613CxAdlZQD%2Bn9KUx8aM5o12OjBSXLKlqyvaZjTz1SE1ESunHm2zCEGyQsGgdt%2FbjmKLo2%2FDhiW0h%2FqD33OnkKGRYyW9iryv5bU6N9TWs18CDtWIv%2F8Cti6tBVxuszy6fPu8yoi%2FQBp18s%2Fg4%2Fp3XquNK0bAFIAmN3DCt2KDABjqkARBMMHegEu8pugJ31vbwKCqtNL%2BlkRbSOcxUKZO8l7oGv4bSb5MiT0mM%2FiM8FMyTNWUO7E%2F3imtBtAv4uuu0wxrohYL5DoCBiysZ5HhU4fV7E%2B%2Ff7rbf7LkEnRVMDNm1hPRea65C%2BH%2BLZck5rcAFoVsr96ANbBrj6L2TVl34k9RwFu%2F46Hn6QBu5P5F8nrQgks0TYVDTL%2BrqNbtVWkZLiZkl2h7I&X-Amz-Signature=441d22b2452cbabe94843c6167dafd8f9ff2d973c35f0f47c9d1de5e596ebab6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXUAERSP%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T004013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD%2F5V6Wo49bPWtx09y27goYoB8cIVRH92wsWxRyDJSIqwIhAPDjUGLkfHa1MA4Cr54NC1S8I2PVwg%2FQwFrym2HFm%2BpMKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWBSE7vYiEu521Dlkq3APxSaDrqS0X8oZ%2F%2FF2IPJjkkwPANTFQd26Vhwzp2FBHNvIQXWYvoL257xnS2f45qmAauEZ8LDXo5gieEKkb%2B7Q2c1wZ71ovVVcGIRc1Ccm%2FdWCqvwQfw7RhYkQ2AW7Sbja7wHt9KxiHlINWuaJtmVYn%2FC8EQFfmGIp3zBRb25t9PM9iUbcLci9komc7XeJHBG2Wn9Gu4%2FrHFqBkEbq%2Bw%2FT%2FIdmKlLSSde2PG0%2FpYqL9WCP%2B5LLuAcix4avsqWxyG6ypRI%2BvtLse%2F0g89Rvv%2B0YLCy8hPPhQrEeamWMbeNUiyOa6z5K4kBiFWz%2FTkl7fBzXD8UgcFwPFrMfOhfyw2bD5FczjpPo2uDf9oirDOxS1rUG7jI8skloYcDsMMG5zCAYCZ2gay%2BI2YYlJwoWEzJBO%2BR7KMs%2Fpd4yES%2F0C1x1dPHSKpTUE%2FqPH7VVZTF3i%2FEfXpVOtRkOVPR2SKj6lLEaufYh613CxAdlZQD%2Bn9KUx8aM5o12OjBSXLKlqyvaZjTz1SE1ESunHm2zCEGyQsGgdt%2FbjmKLo2%2FDhiW0h%2FqD33OnkKGRYyW9iryv5bU6N9TWs18CDtWIv%2F8Cti6tBVxuszy6fPu8yoi%2FQBp18s%2Fg4%2Fp3XquNK0bAFIAmN3DCt2KDABjqkARBMMHegEu8pugJ31vbwKCqtNL%2BlkRbSOcxUKZO8l7oGv4bSb5MiT0mM%2FiM8FMyTNWUO7E%2F3imtBtAv4uuu0wxrohYL5DoCBiysZ5HhU4fV7E%2B%2Ff7rbf7LkEnRVMDNm1hPRea65C%2BH%2BLZck5rcAFoVsr96ANbBrj6L2TVl34k9RwFu%2F46Hn6QBu5P5F8nrQgks0TYVDTL%2BrqNbtVWkZLiZkl2h7I&X-Amz-Signature=d97b8afeacc93b67ceeb4b688be340f9ce77047bf75134645beada9fced62777&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXUAERSP%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T004013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD%2F5V6Wo49bPWtx09y27goYoB8cIVRH92wsWxRyDJSIqwIhAPDjUGLkfHa1MA4Cr54NC1S8I2PVwg%2FQwFrym2HFm%2BpMKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWBSE7vYiEu521Dlkq3APxSaDrqS0X8oZ%2F%2FF2IPJjkkwPANTFQd26Vhwzp2FBHNvIQXWYvoL257xnS2f45qmAauEZ8LDXo5gieEKkb%2B7Q2c1wZ71ovVVcGIRc1Ccm%2FdWCqvwQfw7RhYkQ2AW7Sbja7wHt9KxiHlINWuaJtmVYn%2FC8EQFfmGIp3zBRb25t9PM9iUbcLci9komc7XeJHBG2Wn9Gu4%2FrHFqBkEbq%2Bw%2FT%2FIdmKlLSSde2PG0%2FpYqL9WCP%2B5LLuAcix4avsqWxyG6ypRI%2BvtLse%2F0g89Rvv%2B0YLCy8hPPhQrEeamWMbeNUiyOa6z5K4kBiFWz%2FTkl7fBzXD8UgcFwPFrMfOhfyw2bD5FczjpPo2uDf9oirDOxS1rUG7jI8skloYcDsMMG5zCAYCZ2gay%2BI2YYlJwoWEzJBO%2BR7KMs%2Fpd4yES%2F0C1x1dPHSKpTUE%2FqPH7VVZTF3i%2FEfXpVOtRkOVPR2SKj6lLEaufYh613CxAdlZQD%2Bn9KUx8aM5o12OjBSXLKlqyvaZjTz1SE1ESunHm2zCEGyQsGgdt%2FbjmKLo2%2FDhiW0h%2FqD33OnkKGRYyW9iryv5bU6N9TWs18CDtWIv%2F8Cti6tBVxuszy6fPu8yoi%2FQBp18s%2Fg4%2Fp3XquNK0bAFIAmN3DCt2KDABjqkARBMMHegEu8pugJ31vbwKCqtNL%2BlkRbSOcxUKZO8l7oGv4bSb5MiT0mM%2FiM8FMyTNWUO7E%2F3imtBtAv4uuu0wxrohYL5DoCBiysZ5HhU4fV7E%2B%2Ff7rbf7LkEnRVMDNm1hPRea65C%2BH%2BLZck5rcAFoVsr96ANbBrj6L2TVl34k9RwFu%2F46Hn6QBu5P5F8nrQgks0TYVDTL%2BrqNbtVWkZLiZkl2h7I&X-Amz-Signature=c3b982b4b050ae9d9c1f83fdd5e6e80c91614beaa3bb02461f4e2ef8de5718bb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXUAERSP%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T004013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD%2F5V6Wo49bPWtx09y27goYoB8cIVRH92wsWxRyDJSIqwIhAPDjUGLkfHa1MA4Cr54NC1S8I2PVwg%2FQwFrym2HFm%2BpMKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWBSE7vYiEu521Dlkq3APxSaDrqS0X8oZ%2F%2FF2IPJjkkwPANTFQd26Vhwzp2FBHNvIQXWYvoL257xnS2f45qmAauEZ8LDXo5gieEKkb%2B7Q2c1wZ71ovVVcGIRc1Ccm%2FdWCqvwQfw7RhYkQ2AW7Sbja7wHt9KxiHlINWuaJtmVYn%2FC8EQFfmGIp3zBRb25t9PM9iUbcLci9komc7XeJHBG2Wn9Gu4%2FrHFqBkEbq%2Bw%2FT%2FIdmKlLSSde2PG0%2FpYqL9WCP%2B5LLuAcix4avsqWxyG6ypRI%2BvtLse%2F0g89Rvv%2B0YLCy8hPPhQrEeamWMbeNUiyOa6z5K4kBiFWz%2FTkl7fBzXD8UgcFwPFrMfOhfyw2bD5FczjpPo2uDf9oirDOxS1rUG7jI8skloYcDsMMG5zCAYCZ2gay%2BI2YYlJwoWEzJBO%2BR7KMs%2Fpd4yES%2F0C1x1dPHSKpTUE%2FqPH7VVZTF3i%2FEfXpVOtRkOVPR2SKj6lLEaufYh613CxAdlZQD%2Bn9KUx8aM5o12OjBSXLKlqyvaZjTz1SE1ESunHm2zCEGyQsGgdt%2FbjmKLo2%2FDhiW0h%2FqD33OnkKGRYyW9iryv5bU6N9TWs18CDtWIv%2F8Cti6tBVxuszy6fPu8yoi%2FQBp18s%2Fg4%2Fp3XquNK0bAFIAmN3DCt2KDABjqkARBMMHegEu8pugJ31vbwKCqtNL%2BlkRbSOcxUKZO8l7oGv4bSb5MiT0mM%2FiM8FMyTNWUO7E%2F3imtBtAv4uuu0wxrohYL5DoCBiysZ5HhU4fV7E%2B%2Ff7rbf7LkEnRVMDNm1hPRea65C%2BH%2BLZck5rcAFoVsr96ANbBrj6L2TVl34k9RwFu%2F46Hn6QBu5P5F8nrQgks0TYVDTL%2BrqNbtVWkZLiZkl2h7I&X-Amz-Signature=10ec8d28e04657d8ad5581795d45d10f2299db6b7a8924f7948c0a6631dc536d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXUAERSP%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T004013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD%2F5V6Wo49bPWtx09y27goYoB8cIVRH92wsWxRyDJSIqwIhAPDjUGLkfHa1MA4Cr54NC1S8I2PVwg%2FQwFrym2HFm%2BpMKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWBSE7vYiEu521Dlkq3APxSaDrqS0X8oZ%2F%2FF2IPJjkkwPANTFQd26Vhwzp2FBHNvIQXWYvoL257xnS2f45qmAauEZ8LDXo5gieEKkb%2B7Q2c1wZ71ovVVcGIRc1Ccm%2FdWCqvwQfw7RhYkQ2AW7Sbja7wHt9KxiHlINWuaJtmVYn%2FC8EQFfmGIp3zBRb25t9PM9iUbcLci9komc7XeJHBG2Wn9Gu4%2FrHFqBkEbq%2Bw%2FT%2FIdmKlLSSde2PG0%2FpYqL9WCP%2B5LLuAcix4avsqWxyG6ypRI%2BvtLse%2F0g89Rvv%2B0YLCy8hPPhQrEeamWMbeNUiyOa6z5K4kBiFWz%2FTkl7fBzXD8UgcFwPFrMfOhfyw2bD5FczjpPo2uDf9oirDOxS1rUG7jI8skloYcDsMMG5zCAYCZ2gay%2BI2YYlJwoWEzJBO%2BR7KMs%2Fpd4yES%2F0C1x1dPHSKpTUE%2FqPH7VVZTF3i%2FEfXpVOtRkOVPR2SKj6lLEaufYh613CxAdlZQD%2Bn9KUx8aM5o12OjBSXLKlqyvaZjTz1SE1ESunHm2zCEGyQsGgdt%2FbjmKLo2%2FDhiW0h%2FqD33OnkKGRYyW9iryv5bU6N9TWs18CDtWIv%2F8Cti6tBVxuszy6fPu8yoi%2FQBp18s%2Fg4%2Fp3XquNK0bAFIAmN3DCt2KDABjqkARBMMHegEu8pugJ31vbwKCqtNL%2BlkRbSOcxUKZO8l7oGv4bSb5MiT0mM%2FiM8FMyTNWUO7E%2F3imtBtAv4uuu0wxrohYL5DoCBiysZ5HhU4fV7E%2B%2Ff7rbf7LkEnRVMDNm1hPRea65C%2BH%2BLZck5rcAFoVsr96ANbBrj6L2TVl34k9RwFu%2F46Hn6QBu5P5F8nrQgks0TYVDTL%2BrqNbtVWkZLiZkl2h7I&X-Amz-Signature=b089758c21bd54d56b056fb90e470fc470a5330b81eaab2c6d0df77f74cd8711&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXUAERSP%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T004013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD%2F5V6Wo49bPWtx09y27goYoB8cIVRH92wsWxRyDJSIqwIhAPDjUGLkfHa1MA4Cr54NC1S8I2PVwg%2FQwFrym2HFm%2BpMKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWBSE7vYiEu521Dlkq3APxSaDrqS0X8oZ%2F%2FF2IPJjkkwPANTFQd26Vhwzp2FBHNvIQXWYvoL257xnS2f45qmAauEZ8LDXo5gieEKkb%2B7Q2c1wZ71ovVVcGIRc1Ccm%2FdWCqvwQfw7RhYkQ2AW7Sbja7wHt9KxiHlINWuaJtmVYn%2FC8EQFfmGIp3zBRb25t9PM9iUbcLci9komc7XeJHBG2Wn9Gu4%2FrHFqBkEbq%2Bw%2FT%2FIdmKlLSSde2PG0%2FpYqL9WCP%2B5LLuAcix4avsqWxyG6ypRI%2BvtLse%2F0g89Rvv%2B0YLCy8hPPhQrEeamWMbeNUiyOa6z5K4kBiFWz%2FTkl7fBzXD8UgcFwPFrMfOhfyw2bD5FczjpPo2uDf9oirDOxS1rUG7jI8skloYcDsMMG5zCAYCZ2gay%2BI2YYlJwoWEzJBO%2BR7KMs%2Fpd4yES%2F0C1x1dPHSKpTUE%2FqPH7VVZTF3i%2FEfXpVOtRkOVPR2SKj6lLEaufYh613CxAdlZQD%2Bn9KUx8aM5o12OjBSXLKlqyvaZjTz1SE1ESunHm2zCEGyQsGgdt%2FbjmKLo2%2FDhiW0h%2FqD33OnkKGRYyW9iryv5bU6N9TWs18CDtWIv%2F8Cti6tBVxuszy6fPu8yoi%2FQBp18s%2Fg4%2Fp3XquNK0bAFIAmN3DCt2KDABjqkARBMMHegEu8pugJ31vbwKCqtNL%2BlkRbSOcxUKZO8l7oGv4bSb5MiT0mM%2FiM8FMyTNWUO7E%2F3imtBtAv4uuu0wxrohYL5DoCBiysZ5HhU4fV7E%2B%2Ff7rbf7LkEnRVMDNm1hPRea65C%2BH%2BLZck5rcAFoVsr96ANbBrj6L2TVl34k9RwFu%2F46Hn6QBu5P5F8nrQgks0TYVDTL%2BrqNbtVWkZLiZkl2h7I&X-Amz-Signature=3ff9a9e429287d31bb3a08fb04abc8fd431c753eae20a46c4ce613b1d4745b60&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXUAERSP%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T004013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD%2F5V6Wo49bPWtx09y27goYoB8cIVRH92wsWxRyDJSIqwIhAPDjUGLkfHa1MA4Cr54NC1S8I2PVwg%2FQwFrym2HFm%2BpMKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWBSE7vYiEu521Dlkq3APxSaDrqS0X8oZ%2F%2FF2IPJjkkwPANTFQd26Vhwzp2FBHNvIQXWYvoL257xnS2f45qmAauEZ8LDXo5gieEKkb%2B7Q2c1wZ71ovVVcGIRc1Ccm%2FdWCqvwQfw7RhYkQ2AW7Sbja7wHt9KxiHlINWuaJtmVYn%2FC8EQFfmGIp3zBRb25t9PM9iUbcLci9komc7XeJHBG2Wn9Gu4%2FrHFqBkEbq%2Bw%2FT%2FIdmKlLSSde2PG0%2FpYqL9WCP%2B5LLuAcix4avsqWxyG6ypRI%2BvtLse%2F0g89Rvv%2B0YLCy8hPPhQrEeamWMbeNUiyOa6z5K4kBiFWz%2FTkl7fBzXD8UgcFwPFrMfOhfyw2bD5FczjpPo2uDf9oirDOxS1rUG7jI8skloYcDsMMG5zCAYCZ2gay%2BI2YYlJwoWEzJBO%2BR7KMs%2Fpd4yES%2F0C1x1dPHSKpTUE%2FqPH7VVZTF3i%2FEfXpVOtRkOVPR2SKj6lLEaufYh613CxAdlZQD%2Bn9KUx8aM5o12OjBSXLKlqyvaZjTz1SE1ESunHm2zCEGyQsGgdt%2FbjmKLo2%2FDhiW0h%2FqD33OnkKGRYyW9iryv5bU6N9TWs18CDtWIv%2F8Cti6tBVxuszy6fPu8yoi%2FQBp18s%2Fg4%2Fp3XquNK0bAFIAmN3DCt2KDABjqkARBMMHegEu8pugJ31vbwKCqtNL%2BlkRbSOcxUKZO8l7oGv4bSb5MiT0mM%2FiM8FMyTNWUO7E%2F3imtBtAv4uuu0wxrohYL5DoCBiysZ5HhU4fV7E%2B%2Ff7rbf7LkEnRVMDNm1hPRea65C%2BH%2BLZck5rcAFoVsr96ANbBrj6L2TVl34k9RwFu%2F46Hn6QBu5P5F8nrQgks0TYVDTL%2BrqNbtVWkZLiZkl2h7I&X-Amz-Signature=4d1cef73496bc1be60c74b53e146c99670cd8635d03463dcdab2e4472efedfb7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXUAERSP%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T004013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD%2F5V6Wo49bPWtx09y27goYoB8cIVRH92wsWxRyDJSIqwIhAPDjUGLkfHa1MA4Cr54NC1S8I2PVwg%2FQwFrym2HFm%2BpMKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWBSE7vYiEu521Dlkq3APxSaDrqS0X8oZ%2F%2FF2IPJjkkwPANTFQd26Vhwzp2FBHNvIQXWYvoL257xnS2f45qmAauEZ8LDXo5gieEKkb%2B7Q2c1wZ71ovVVcGIRc1Ccm%2FdWCqvwQfw7RhYkQ2AW7Sbja7wHt9KxiHlINWuaJtmVYn%2FC8EQFfmGIp3zBRb25t9PM9iUbcLci9komc7XeJHBG2Wn9Gu4%2FrHFqBkEbq%2Bw%2FT%2FIdmKlLSSde2PG0%2FpYqL9WCP%2B5LLuAcix4avsqWxyG6ypRI%2BvtLse%2F0g89Rvv%2B0YLCy8hPPhQrEeamWMbeNUiyOa6z5K4kBiFWz%2FTkl7fBzXD8UgcFwPFrMfOhfyw2bD5FczjpPo2uDf9oirDOxS1rUG7jI8skloYcDsMMG5zCAYCZ2gay%2BI2YYlJwoWEzJBO%2BR7KMs%2Fpd4yES%2F0C1x1dPHSKpTUE%2FqPH7VVZTF3i%2FEfXpVOtRkOVPR2SKj6lLEaufYh613CxAdlZQD%2Bn9KUx8aM5o12OjBSXLKlqyvaZjTz1SE1ESunHm2zCEGyQsGgdt%2FbjmKLo2%2FDhiW0h%2FqD33OnkKGRYyW9iryv5bU6N9TWs18CDtWIv%2F8Cti6tBVxuszy6fPu8yoi%2FQBp18s%2Fg4%2Fp3XquNK0bAFIAmN3DCt2KDABjqkARBMMHegEu8pugJ31vbwKCqtNL%2BlkRbSOcxUKZO8l7oGv4bSb5MiT0mM%2FiM8FMyTNWUO7E%2F3imtBtAv4uuu0wxrohYL5DoCBiysZ5HhU4fV7E%2B%2Ff7rbf7LkEnRVMDNm1hPRea65C%2BH%2BLZck5rcAFoVsr96ANbBrj6L2TVl34k9RwFu%2F46Hn6QBu5P5F8nrQgks0TYVDTL%2BrqNbtVWkZLiZkl2h7I&X-Amz-Signature=3a798185a2142042a193dbcbaff358efd03bdd733455a836a96f443811def598&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
