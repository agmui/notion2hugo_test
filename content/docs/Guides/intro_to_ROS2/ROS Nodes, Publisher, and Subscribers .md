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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N7JAIP6%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVlDh6TCRKsWe%2Bh%2BtkBFHpR3NNkSBOy%2BcDMnZ0l%2BBL4gIhAN3kpd8SdGUh6OR6J5iA9ac4PP%2BK8ANJ6HzToNRJ%2BDQMKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWF96OLyxZ3YJkcRcq3APYZjHEX%2FYh938ilB9iz3Aa1NzyGD5TsxXAm%2B0Ik%2B8F%2B3GL5fcSApx%2BzWxn6Q214BOYnU%2Bua0L0TFTbqggcFLymo4u4cMQI%2FMoAtkt89sMrEHEraS2JM8G2PGw376J6DODA10cP8bxjQpqDLAnRwoem7dfvke%2FIKEV4%2BRap%2Ftzmeqpdz%2BJjHtGmC5JQGRfMMQsF5r3I3XJ%2FJ36gCug6PrtdcVpUAjxBBJGXfd5rlnWR58tvgBMe%2FMTZfXMvlRwLy%2BcLL59OaBKZi%2Fmb2EBSgX5GNY%2FHcU%2F8dTj5SycR09aZbNLVrH%2Flpjh3pkXD%2FuvW8CDlKMcJaTryc03XJFOKzM53bFm7uomfL%2FQBKuTjEvNl2xnzamb9YdLRPxnFLWIBs%2BH9ky3%2FGuVZsgeT3UIFmQQnP1FgdHuA%2FLy11wWjChGzEVoTIkf1nM0E3mCiRoPmjeh7T2lkJ36KKktXH8bBxcY7XrEDgFoslh%2Fuo9o2uraLfiQBrM9dvwzk%2BXR2BBoPQiMQ6xlX5IWF6BaFsrv4ZkQlwY5oLm0zjeP2bj9764RgGZCWrOxqNRY4VC6kwHtjqFgslPqkr55eu%2FjHOfDAngWNzLvj6PqHv9JL6LQS1%2B57oEjIPaZnffimw9mDGjCxwZXDBjqkARQLzcy6WU8fLxZjZo58972e9YLAeEhoZyzQlvhFKagjQOv%2FriK0yd8uCgbhTkj9EXP1Jg6YS%2F6bmkqOqU3LTfzhyFQbLRPWeUCoMlaS9d8eTIA4Ub22BSgCxZDJOtHdyuUzNzq%2FJu6UuB4b3Jismh8t0%2Bxrtx2FSXQ5QJ36yrOo3ZUcfuOOH13cjwgDuzUuFydiKyP4hEKP7YYvqwhHrBEFQ0WJ&X-Amz-Signature=497ad2b34a35960a018cae25deb318b729f35cded9f563fe9f1feba201773091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N7JAIP6%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVlDh6TCRKsWe%2Bh%2BtkBFHpR3NNkSBOy%2BcDMnZ0l%2BBL4gIhAN3kpd8SdGUh6OR6J5iA9ac4PP%2BK8ANJ6HzToNRJ%2BDQMKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWF96OLyxZ3YJkcRcq3APYZjHEX%2FYh938ilB9iz3Aa1NzyGD5TsxXAm%2B0Ik%2B8F%2B3GL5fcSApx%2BzWxn6Q214BOYnU%2Bua0L0TFTbqggcFLymo4u4cMQI%2FMoAtkt89sMrEHEraS2JM8G2PGw376J6DODA10cP8bxjQpqDLAnRwoem7dfvke%2FIKEV4%2BRap%2Ftzmeqpdz%2BJjHtGmC5JQGRfMMQsF5r3I3XJ%2FJ36gCug6PrtdcVpUAjxBBJGXfd5rlnWR58tvgBMe%2FMTZfXMvlRwLy%2BcLL59OaBKZi%2Fmb2EBSgX5GNY%2FHcU%2F8dTj5SycR09aZbNLVrH%2Flpjh3pkXD%2FuvW8CDlKMcJaTryc03XJFOKzM53bFm7uomfL%2FQBKuTjEvNl2xnzamb9YdLRPxnFLWIBs%2BH9ky3%2FGuVZsgeT3UIFmQQnP1FgdHuA%2FLy11wWjChGzEVoTIkf1nM0E3mCiRoPmjeh7T2lkJ36KKktXH8bBxcY7XrEDgFoslh%2Fuo9o2uraLfiQBrM9dvwzk%2BXR2BBoPQiMQ6xlX5IWF6BaFsrv4ZkQlwY5oLm0zjeP2bj9764RgGZCWrOxqNRY4VC6kwHtjqFgslPqkr55eu%2FjHOfDAngWNzLvj6PqHv9JL6LQS1%2B57oEjIPaZnffimw9mDGjCxwZXDBjqkARQLzcy6WU8fLxZjZo58972e9YLAeEhoZyzQlvhFKagjQOv%2FriK0yd8uCgbhTkj9EXP1Jg6YS%2F6bmkqOqU3LTfzhyFQbLRPWeUCoMlaS9d8eTIA4Ub22BSgCxZDJOtHdyuUzNzq%2FJu6UuB4b3Jismh8t0%2Bxrtx2FSXQ5QJ36yrOo3ZUcfuOOH13cjwgDuzUuFydiKyP4hEKP7YYvqwhHrBEFQ0WJ&X-Amz-Signature=ecb1f2b4e8bb4477ad8d534b1f3986dead0f3a3bef1fb99d772eaa1c2c8307cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N7JAIP6%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVlDh6TCRKsWe%2Bh%2BtkBFHpR3NNkSBOy%2BcDMnZ0l%2BBL4gIhAN3kpd8SdGUh6OR6J5iA9ac4PP%2BK8ANJ6HzToNRJ%2BDQMKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWF96OLyxZ3YJkcRcq3APYZjHEX%2FYh938ilB9iz3Aa1NzyGD5TsxXAm%2B0Ik%2B8F%2B3GL5fcSApx%2BzWxn6Q214BOYnU%2Bua0L0TFTbqggcFLymo4u4cMQI%2FMoAtkt89sMrEHEraS2JM8G2PGw376J6DODA10cP8bxjQpqDLAnRwoem7dfvke%2FIKEV4%2BRap%2Ftzmeqpdz%2BJjHtGmC5JQGRfMMQsF5r3I3XJ%2FJ36gCug6PrtdcVpUAjxBBJGXfd5rlnWR58tvgBMe%2FMTZfXMvlRwLy%2BcLL59OaBKZi%2Fmb2EBSgX5GNY%2FHcU%2F8dTj5SycR09aZbNLVrH%2Flpjh3pkXD%2FuvW8CDlKMcJaTryc03XJFOKzM53bFm7uomfL%2FQBKuTjEvNl2xnzamb9YdLRPxnFLWIBs%2BH9ky3%2FGuVZsgeT3UIFmQQnP1FgdHuA%2FLy11wWjChGzEVoTIkf1nM0E3mCiRoPmjeh7T2lkJ36KKktXH8bBxcY7XrEDgFoslh%2Fuo9o2uraLfiQBrM9dvwzk%2BXR2BBoPQiMQ6xlX5IWF6BaFsrv4ZkQlwY5oLm0zjeP2bj9764RgGZCWrOxqNRY4VC6kwHtjqFgslPqkr55eu%2FjHOfDAngWNzLvj6PqHv9JL6LQS1%2B57oEjIPaZnffimw9mDGjCxwZXDBjqkARQLzcy6WU8fLxZjZo58972e9YLAeEhoZyzQlvhFKagjQOv%2FriK0yd8uCgbhTkj9EXP1Jg6YS%2F6bmkqOqU3LTfzhyFQbLRPWeUCoMlaS9d8eTIA4Ub22BSgCxZDJOtHdyuUzNzq%2FJu6UuB4b3Jismh8t0%2Bxrtx2FSXQ5QJ36yrOo3ZUcfuOOH13cjwgDuzUuFydiKyP4hEKP7YYvqwhHrBEFQ0WJ&X-Amz-Signature=0513499caf33b25bbc21c0813c45660326585c6e4478ba0e3831814cb2ceed8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N7JAIP6%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVlDh6TCRKsWe%2Bh%2BtkBFHpR3NNkSBOy%2BcDMnZ0l%2BBL4gIhAN3kpd8SdGUh6OR6J5iA9ac4PP%2BK8ANJ6HzToNRJ%2BDQMKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWF96OLyxZ3YJkcRcq3APYZjHEX%2FYh938ilB9iz3Aa1NzyGD5TsxXAm%2B0Ik%2B8F%2B3GL5fcSApx%2BzWxn6Q214BOYnU%2Bua0L0TFTbqggcFLymo4u4cMQI%2FMoAtkt89sMrEHEraS2JM8G2PGw376J6DODA10cP8bxjQpqDLAnRwoem7dfvke%2FIKEV4%2BRap%2Ftzmeqpdz%2BJjHtGmC5JQGRfMMQsF5r3I3XJ%2FJ36gCug6PrtdcVpUAjxBBJGXfd5rlnWR58tvgBMe%2FMTZfXMvlRwLy%2BcLL59OaBKZi%2Fmb2EBSgX5GNY%2FHcU%2F8dTj5SycR09aZbNLVrH%2Flpjh3pkXD%2FuvW8CDlKMcJaTryc03XJFOKzM53bFm7uomfL%2FQBKuTjEvNl2xnzamb9YdLRPxnFLWIBs%2BH9ky3%2FGuVZsgeT3UIFmQQnP1FgdHuA%2FLy11wWjChGzEVoTIkf1nM0E3mCiRoPmjeh7T2lkJ36KKktXH8bBxcY7XrEDgFoslh%2Fuo9o2uraLfiQBrM9dvwzk%2BXR2BBoPQiMQ6xlX5IWF6BaFsrv4ZkQlwY5oLm0zjeP2bj9764RgGZCWrOxqNRY4VC6kwHtjqFgslPqkr55eu%2FjHOfDAngWNzLvj6PqHv9JL6LQS1%2B57oEjIPaZnffimw9mDGjCxwZXDBjqkARQLzcy6WU8fLxZjZo58972e9YLAeEhoZyzQlvhFKagjQOv%2FriK0yd8uCgbhTkj9EXP1Jg6YS%2F6bmkqOqU3LTfzhyFQbLRPWeUCoMlaS9d8eTIA4Ub22BSgCxZDJOtHdyuUzNzq%2FJu6UuB4b3Jismh8t0%2Bxrtx2FSXQ5QJ36yrOo3ZUcfuOOH13cjwgDuzUuFydiKyP4hEKP7YYvqwhHrBEFQ0WJ&X-Amz-Signature=28b889cce3a407671e16cabc0ffff775d25150fb5af732c56be03b24e1f11e11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N7JAIP6%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVlDh6TCRKsWe%2Bh%2BtkBFHpR3NNkSBOy%2BcDMnZ0l%2BBL4gIhAN3kpd8SdGUh6OR6J5iA9ac4PP%2BK8ANJ6HzToNRJ%2BDQMKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWF96OLyxZ3YJkcRcq3APYZjHEX%2FYh938ilB9iz3Aa1NzyGD5TsxXAm%2B0Ik%2B8F%2B3GL5fcSApx%2BzWxn6Q214BOYnU%2Bua0L0TFTbqggcFLymo4u4cMQI%2FMoAtkt89sMrEHEraS2JM8G2PGw376J6DODA10cP8bxjQpqDLAnRwoem7dfvke%2FIKEV4%2BRap%2Ftzmeqpdz%2BJjHtGmC5JQGRfMMQsF5r3I3XJ%2FJ36gCug6PrtdcVpUAjxBBJGXfd5rlnWR58tvgBMe%2FMTZfXMvlRwLy%2BcLL59OaBKZi%2Fmb2EBSgX5GNY%2FHcU%2F8dTj5SycR09aZbNLVrH%2Flpjh3pkXD%2FuvW8CDlKMcJaTryc03XJFOKzM53bFm7uomfL%2FQBKuTjEvNl2xnzamb9YdLRPxnFLWIBs%2BH9ky3%2FGuVZsgeT3UIFmQQnP1FgdHuA%2FLy11wWjChGzEVoTIkf1nM0E3mCiRoPmjeh7T2lkJ36KKktXH8bBxcY7XrEDgFoslh%2Fuo9o2uraLfiQBrM9dvwzk%2BXR2BBoPQiMQ6xlX5IWF6BaFsrv4ZkQlwY5oLm0zjeP2bj9764RgGZCWrOxqNRY4VC6kwHtjqFgslPqkr55eu%2FjHOfDAngWNzLvj6PqHv9JL6LQS1%2B57oEjIPaZnffimw9mDGjCxwZXDBjqkARQLzcy6WU8fLxZjZo58972e9YLAeEhoZyzQlvhFKagjQOv%2FriK0yd8uCgbhTkj9EXP1Jg6YS%2F6bmkqOqU3LTfzhyFQbLRPWeUCoMlaS9d8eTIA4Ub22BSgCxZDJOtHdyuUzNzq%2FJu6UuB4b3Jismh8t0%2Bxrtx2FSXQ5QJ36yrOo3ZUcfuOOH13cjwgDuzUuFydiKyP4hEKP7YYvqwhHrBEFQ0WJ&X-Amz-Signature=7cd8d21ac84567d6996828b9e42c44a2a4e2e8483c83b4705d117cd59f826ab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N7JAIP6%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVlDh6TCRKsWe%2Bh%2BtkBFHpR3NNkSBOy%2BcDMnZ0l%2BBL4gIhAN3kpd8SdGUh6OR6J5iA9ac4PP%2BK8ANJ6HzToNRJ%2BDQMKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWF96OLyxZ3YJkcRcq3APYZjHEX%2FYh938ilB9iz3Aa1NzyGD5TsxXAm%2B0Ik%2B8F%2B3GL5fcSApx%2BzWxn6Q214BOYnU%2Bua0L0TFTbqggcFLymo4u4cMQI%2FMoAtkt89sMrEHEraS2JM8G2PGw376J6DODA10cP8bxjQpqDLAnRwoem7dfvke%2FIKEV4%2BRap%2Ftzmeqpdz%2BJjHtGmC5JQGRfMMQsF5r3I3XJ%2FJ36gCug6PrtdcVpUAjxBBJGXfd5rlnWR58tvgBMe%2FMTZfXMvlRwLy%2BcLL59OaBKZi%2Fmb2EBSgX5GNY%2FHcU%2F8dTj5SycR09aZbNLVrH%2Flpjh3pkXD%2FuvW8CDlKMcJaTryc03XJFOKzM53bFm7uomfL%2FQBKuTjEvNl2xnzamb9YdLRPxnFLWIBs%2BH9ky3%2FGuVZsgeT3UIFmQQnP1FgdHuA%2FLy11wWjChGzEVoTIkf1nM0E3mCiRoPmjeh7T2lkJ36KKktXH8bBxcY7XrEDgFoslh%2Fuo9o2uraLfiQBrM9dvwzk%2BXR2BBoPQiMQ6xlX5IWF6BaFsrv4ZkQlwY5oLm0zjeP2bj9764RgGZCWrOxqNRY4VC6kwHtjqFgslPqkr55eu%2FjHOfDAngWNzLvj6PqHv9JL6LQS1%2B57oEjIPaZnffimw9mDGjCxwZXDBjqkARQLzcy6WU8fLxZjZo58972e9YLAeEhoZyzQlvhFKagjQOv%2FriK0yd8uCgbhTkj9EXP1Jg6YS%2F6bmkqOqU3LTfzhyFQbLRPWeUCoMlaS9d8eTIA4Ub22BSgCxZDJOtHdyuUzNzq%2FJu6UuB4b3Jismh8t0%2Bxrtx2FSXQ5QJ36yrOo3ZUcfuOOH13cjwgDuzUuFydiKyP4hEKP7YYvqwhHrBEFQ0WJ&X-Amz-Signature=2f432be5e3c8da8987e9f133e9d6ce1f5b7c87b8ac7048086c35c47c76ba03fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N7JAIP6%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVlDh6TCRKsWe%2Bh%2BtkBFHpR3NNkSBOy%2BcDMnZ0l%2BBL4gIhAN3kpd8SdGUh6OR6J5iA9ac4PP%2BK8ANJ6HzToNRJ%2BDQMKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWF96OLyxZ3YJkcRcq3APYZjHEX%2FYh938ilB9iz3Aa1NzyGD5TsxXAm%2B0Ik%2B8F%2B3GL5fcSApx%2BzWxn6Q214BOYnU%2Bua0L0TFTbqggcFLymo4u4cMQI%2FMoAtkt89sMrEHEraS2JM8G2PGw376J6DODA10cP8bxjQpqDLAnRwoem7dfvke%2FIKEV4%2BRap%2Ftzmeqpdz%2BJjHtGmC5JQGRfMMQsF5r3I3XJ%2FJ36gCug6PrtdcVpUAjxBBJGXfd5rlnWR58tvgBMe%2FMTZfXMvlRwLy%2BcLL59OaBKZi%2Fmb2EBSgX5GNY%2FHcU%2F8dTj5SycR09aZbNLVrH%2Flpjh3pkXD%2FuvW8CDlKMcJaTryc03XJFOKzM53bFm7uomfL%2FQBKuTjEvNl2xnzamb9YdLRPxnFLWIBs%2BH9ky3%2FGuVZsgeT3UIFmQQnP1FgdHuA%2FLy11wWjChGzEVoTIkf1nM0E3mCiRoPmjeh7T2lkJ36KKktXH8bBxcY7XrEDgFoslh%2Fuo9o2uraLfiQBrM9dvwzk%2BXR2BBoPQiMQ6xlX5IWF6BaFsrv4ZkQlwY5oLm0zjeP2bj9764RgGZCWrOxqNRY4VC6kwHtjqFgslPqkr55eu%2FjHOfDAngWNzLvj6PqHv9JL6LQS1%2B57oEjIPaZnffimw9mDGjCxwZXDBjqkARQLzcy6WU8fLxZjZo58972e9YLAeEhoZyzQlvhFKagjQOv%2FriK0yd8uCgbhTkj9EXP1Jg6YS%2F6bmkqOqU3LTfzhyFQbLRPWeUCoMlaS9d8eTIA4Ub22BSgCxZDJOtHdyuUzNzq%2FJu6UuB4b3Jismh8t0%2Bxrtx2FSXQ5QJ36yrOo3ZUcfuOOH13cjwgDuzUuFydiKyP4hEKP7YYvqwhHrBEFQ0WJ&X-Amz-Signature=19ade06484037b19126326a6130b617624d56854131bcd11749b4794f56aa8d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N7JAIP6%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVlDh6TCRKsWe%2Bh%2BtkBFHpR3NNkSBOy%2BcDMnZ0l%2BBL4gIhAN3kpd8SdGUh6OR6J5iA9ac4PP%2BK8ANJ6HzToNRJ%2BDQMKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWF96OLyxZ3YJkcRcq3APYZjHEX%2FYh938ilB9iz3Aa1NzyGD5TsxXAm%2B0Ik%2B8F%2B3GL5fcSApx%2BzWxn6Q214BOYnU%2Bua0L0TFTbqggcFLymo4u4cMQI%2FMoAtkt89sMrEHEraS2JM8G2PGw376J6DODA10cP8bxjQpqDLAnRwoem7dfvke%2FIKEV4%2BRap%2Ftzmeqpdz%2BJjHtGmC5JQGRfMMQsF5r3I3XJ%2FJ36gCug6PrtdcVpUAjxBBJGXfd5rlnWR58tvgBMe%2FMTZfXMvlRwLy%2BcLL59OaBKZi%2Fmb2EBSgX5GNY%2FHcU%2F8dTj5SycR09aZbNLVrH%2Flpjh3pkXD%2FuvW8CDlKMcJaTryc03XJFOKzM53bFm7uomfL%2FQBKuTjEvNl2xnzamb9YdLRPxnFLWIBs%2BH9ky3%2FGuVZsgeT3UIFmQQnP1FgdHuA%2FLy11wWjChGzEVoTIkf1nM0E3mCiRoPmjeh7T2lkJ36KKktXH8bBxcY7XrEDgFoslh%2Fuo9o2uraLfiQBrM9dvwzk%2BXR2BBoPQiMQ6xlX5IWF6BaFsrv4ZkQlwY5oLm0zjeP2bj9764RgGZCWrOxqNRY4VC6kwHtjqFgslPqkr55eu%2FjHOfDAngWNzLvj6PqHv9JL6LQS1%2B57oEjIPaZnffimw9mDGjCxwZXDBjqkARQLzcy6WU8fLxZjZo58972e9YLAeEhoZyzQlvhFKagjQOv%2FriK0yd8uCgbhTkj9EXP1Jg6YS%2F6bmkqOqU3LTfzhyFQbLRPWeUCoMlaS9d8eTIA4Ub22BSgCxZDJOtHdyuUzNzq%2FJu6UuB4b3Jismh8t0%2Bxrtx2FSXQ5QJ36yrOo3ZUcfuOOH13cjwgDuzUuFydiKyP4hEKP7YYvqwhHrBEFQ0WJ&X-Amz-Signature=30626791c928d1004dab330f7d78b7e4e116223dce738a34d57d6f22a292165e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
