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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UHW7CRX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCyr3bmPXIqUccZAyTxqBcEtVMB%2F%2FZLDdZi2n4%2F6ts2NQIgK6k%2F4iiJ%2B6TdpKI1GNZ924gUPKWk8dZPmKm06A5HzWoqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKb976R7KdDjDrrSCrcA%2B3%2FEMQpreYyCDDqZuIW6WUXS6hV2Bf%2BXXG7ffshJaPx98TfXqU%2F9%2FJkrvu3Lz9yGHZN5YrZANKv8M7YW4fk1SR750%2BTNY17oV56xb5MN5NGVb%2Bc2%2BjRr%2FEmwAwdk7DMQRLFW8BsUS3CNJWk7UZpav7oQjmQaHKtO2VbcicsSASDZVtsfF0U3%2Bv%2B%2BSt3ZY3MIHvgtKFvIDOP2r1ZMHIlKHqmg9TZhzsR9IW774gmwDQ6Gn5Nv9BHbVrOwCBmY4g3ozFAS%2FH1JeJM7fI0dTKoNzC424zMRUl0Bdm3BSGCFVX8HcUlA%2BeqNVVUdw8CHJuPTohQXLT5dNpIuR%2BOcgbd5t%2BIsfrA8m9qPZwW%2BfLs7mAtMlTCYN%2BNXYuNwhE%2F8vjVr3t6HoDd166G6VYcItfUYFatTIbVbxEsuvP4rppfaFtjkW3l7avC9J2dCVlzDtwFRXTAHeS8X3HAplxi1sdEYUX5ReoQ%2B0sp7erSx4pZDqLBQgQtmCMbJdoonRCvJfRcIANYbqlWPxMP5UqmLOGjchmykggJS85sA9kFIDz66pUMYZGjjn%2Bbc1WMjABH719rVU4LemAsmZ8q1vZmSbWwy9BIwlpCfT1F5kFYqipBazSL4H9hhm1HSEiEjheaMIbztr8GOqUBkn68GSVkUU6uDswiY%2FugrZYaIkPH3pQ051JBaDfpLhLnd15C7yc1m9oRfjdpZFfRlwKYmt9S8OKvCobxXXksuOfU%2B47ZSQaeg%2BwlM%2BxcHPjIBrvC4iaF35pZneodmpaaGv4ZY9i9F5KBEFLS2c2FVSlRookU6Ao%2BBPqJOv0yi1UZhaqdZmFByBN%2B58KFqN39QKYfGPdb4Tj2lZco5nHBLLo%2BZBwW&X-Amz-Signature=b1e993e3d360b579c1981d5207ef6f6b34f8995ebabdda96f3eea7b425550c01&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UHW7CRX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCyr3bmPXIqUccZAyTxqBcEtVMB%2F%2FZLDdZi2n4%2F6ts2NQIgK6k%2F4iiJ%2B6TdpKI1GNZ924gUPKWk8dZPmKm06A5HzWoqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKb976R7KdDjDrrSCrcA%2B3%2FEMQpreYyCDDqZuIW6WUXS6hV2Bf%2BXXG7ffshJaPx98TfXqU%2F9%2FJkrvu3Lz9yGHZN5YrZANKv8M7YW4fk1SR750%2BTNY17oV56xb5MN5NGVb%2Bc2%2BjRr%2FEmwAwdk7DMQRLFW8BsUS3CNJWk7UZpav7oQjmQaHKtO2VbcicsSASDZVtsfF0U3%2Bv%2B%2BSt3ZY3MIHvgtKFvIDOP2r1ZMHIlKHqmg9TZhzsR9IW774gmwDQ6Gn5Nv9BHbVrOwCBmY4g3ozFAS%2FH1JeJM7fI0dTKoNzC424zMRUl0Bdm3BSGCFVX8HcUlA%2BeqNVVUdw8CHJuPTohQXLT5dNpIuR%2BOcgbd5t%2BIsfrA8m9qPZwW%2BfLs7mAtMlTCYN%2BNXYuNwhE%2F8vjVr3t6HoDd166G6VYcItfUYFatTIbVbxEsuvP4rppfaFtjkW3l7avC9J2dCVlzDtwFRXTAHeS8X3HAplxi1sdEYUX5ReoQ%2B0sp7erSx4pZDqLBQgQtmCMbJdoonRCvJfRcIANYbqlWPxMP5UqmLOGjchmykggJS85sA9kFIDz66pUMYZGjjn%2Bbc1WMjABH719rVU4LemAsmZ8q1vZmSbWwy9BIwlpCfT1F5kFYqipBazSL4H9hhm1HSEiEjheaMIbztr8GOqUBkn68GSVkUU6uDswiY%2FugrZYaIkPH3pQ051JBaDfpLhLnd15C7yc1m9oRfjdpZFfRlwKYmt9S8OKvCobxXXksuOfU%2B47ZSQaeg%2BwlM%2BxcHPjIBrvC4iaF35pZneodmpaaGv4ZY9i9F5KBEFLS2c2FVSlRookU6Ao%2BBPqJOv0yi1UZhaqdZmFByBN%2B58KFqN39QKYfGPdb4Tj2lZco5nHBLLo%2BZBwW&X-Amz-Signature=4e8f8565ed5b47ef5862402a6b12fd522d192df521fbf613816a4a25e86b8167&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UHW7CRX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCyr3bmPXIqUccZAyTxqBcEtVMB%2F%2FZLDdZi2n4%2F6ts2NQIgK6k%2F4iiJ%2B6TdpKI1GNZ924gUPKWk8dZPmKm06A5HzWoqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKb976R7KdDjDrrSCrcA%2B3%2FEMQpreYyCDDqZuIW6WUXS6hV2Bf%2BXXG7ffshJaPx98TfXqU%2F9%2FJkrvu3Lz9yGHZN5YrZANKv8M7YW4fk1SR750%2BTNY17oV56xb5MN5NGVb%2Bc2%2BjRr%2FEmwAwdk7DMQRLFW8BsUS3CNJWk7UZpav7oQjmQaHKtO2VbcicsSASDZVtsfF0U3%2Bv%2B%2BSt3ZY3MIHvgtKFvIDOP2r1ZMHIlKHqmg9TZhzsR9IW774gmwDQ6Gn5Nv9BHbVrOwCBmY4g3ozFAS%2FH1JeJM7fI0dTKoNzC424zMRUl0Bdm3BSGCFVX8HcUlA%2BeqNVVUdw8CHJuPTohQXLT5dNpIuR%2BOcgbd5t%2BIsfrA8m9qPZwW%2BfLs7mAtMlTCYN%2BNXYuNwhE%2F8vjVr3t6HoDd166G6VYcItfUYFatTIbVbxEsuvP4rppfaFtjkW3l7avC9J2dCVlzDtwFRXTAHeS8X3HAplxi1sdEYUX5ReoQ%2B0sp7erSx4pZDqLBQgQtmCMbJdoonRCvJfRcIANYbqlWPxMP5UqmLOGjchmykggJS85sA9kFIDz66pUMYZGjjn%2Bbc1WMjABH719rVU4LemAsmZ8q1vZmSbWwy9BIwlpCfT1F5kFYqipBazSL4H9hhm1HSEiEjheaMIbztr8GOqUBkn68GSVkUU6uDswiY%2FugrZYaIkPH3pQ051JBaDfpLhLnd15C7yc1m9oRfjdpZFfRlwKYmt9S8OKvCobxXXksuOfU%2B47ZSQaeg%2BwlM%2BxcHPjIBrvC4iaF35pZneodmpaaGv4ZY9i9F5KBEFLS2c2FVSlRookU6Ao%2BBPqJOv0yi1UZhaqdZmFByBN%2B58KFqN39QKYfGPdb4Tj2lZco5nHBLLo%2BZBwW&X-Amz-Signature=09e357e8543c71f3c2106b64729b65d36ced41163246e3a441c165b1ff60025e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UHW7CRX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCyr3bmPXIqUccZAyTxqBcEtVMB%2F%2FZLDdZi2n4%2F6ts2NQIgK6k%2F4iiJ%2B6TdpKI1GNZ924gUPKWk8dZPmKm06A5HzWoqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKb976R7KdDjDrrSCrcA%2B3%2FEMQpreYyCDDqZuIW6WUXS6hV2Bf%2BXXG7ffshJaPx98TfXqU%2F9%2FJkrvu3Lz9yGHZN5YrZANKv8M7YW4fk1SR750%2BTNY17oV56xb5MN5NGVb%2Bc2%2BjRr%2FEmwAwdk7DMQRLFW8BsUS3CNJWk7UZpav7oQjmQaHKtO2VbcicsSASDZVtsfF0U3%2Bv%2B%2BSt3ZY3MIHvgtKFvIDOP2r1ZMHIlKHqmg9TZhzsR9IW774gmwDQ6Gn5Nv9BHbVrOwCBmY4g3ozFAS%2FH1JeJM7fI0dTKoNzC424zMRUl0Bdm3BSGCFVX8HcUlA%2BeqNVVUdw8CHJuPTohQXLT5dNpIuR%2BOcgbd5t%2BIsfrA8m9qPZwW%2BfLs7mAtMlTCYN%2BNXYuNwhE%2F8vjVr3t6HoDd166G6VYcItfUYFatTIbVbxEsuvP4rppfaFtjkW3l7avC9J2dCVlzDtwFRXTAHeS8X3HAplxi1sdEYUX5ReoQ%2B0sp7erSx4pZDqLBQgQtmCMbJdoonRCvJfRcIANYbqlWPxMP5UqmLOGjchmykggJS85sA9kFIDz66pUMYZGjjn%2Bbc1WMjABH719rVU4LemAsmZ8q1vZmSbWwy9BIwlpCfT1F5kFYqipBazSL4H9hhm1HSEiEjheaMIbztr8GOqUBkn68GSVkUU6uDswiY%2FugrZYaIkPH3pQ051JBaDfpLhLnd15C7yc1m9oRfjdpZFfRlwKYmt9S8OKvCobxXXksuOfU%2B47ZSQaeg%2BwlM%2BxcHPjIBrvC4iaF35pZneodmpaaGv4ZY9i9F5KBEFLS2c2FVSlRookU6Ao%2BBPqJOv0yi1UZhaqdZmFByBN%2B58KFqN39QKYfGPdb4Tj2lZco5nHBLLo%2BZBwW&X-Amz-Signature=27a1e6f73eca34e8753a6bf87202d619fcf4ded5d9c8587e38a39a12dd2b70fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UHW7CRX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCyr3bmPXIqUccZAyTxqBcEtVMB%2F%2FZLDdZi2n4%2F6ts2NQIgK6k%2F4iiJ%2B6TdpKI1GNZ924gUPKWk8dZPmKm06A5HzWoqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKb976R7KdDjDrrSCrcA%2B3%2FEMQpreYyCDDqZuIW6WUXS6hV2Bf%2BXXG7ffshJaPx98TfXqU%2F9%2FJkrvu3Lz9yGHZN5YrZANKv8M7YW4fk1SR750%2BTNY17oV56xb5MN5NGVb%2Bc2%2BjRr%2FEmwAwdk7DMQRLFW8BsUS3CNJWk7UZpav7oQjmQaHKtO2VbcicsSASDZVtsfF0U3%2Bv%2B%2BSt3ZY3MIHvgtKFvIDOP2r1ZMHIlKHqmg9TZhzsR9IW774gmwDQ6Gn5Nv9BHbVrOwCBmY4g3ozFAS%2FH1JeJM7fI0dTKoNzC424zMRUl0Bdm3BSGCFVX8HcUlA%2BeqNVVUdw8CHJuPTohQXLT5dNpIuR%2BOcgbd5t%2BIsfrA8m9qPZwW%2BfLs7mAtMlTCYN%2BNXYuNwhE%2F8vjVr3t6HoDd166G6VYcItfUYFatTIbVbxEsuvP4rppfaFtjkW3l7avC9J2dCVlzDtwFRXTAHeS8X3HAplxi1sdEYUX5ReoQ%2B0sp7erSx4pZDqLBQgQtmCMbJdoonRCvJfRcIANYbqlWPxMP5UqmLOGjchmykggJS85sA9kFIDz66pUMYZGjjn%2Bbc1WMjABH719rVU4LemAsmZ8q1vZmSbWwy9BIwlpCfT1F5kFYqipBazSL4H9hhm1HSEiEjheaMIbztr8GOqUBkn68GSVkUU6uDswiY%2FugrZYaIkPH3pQ051JBaDfpLhLnd15C7yc1m9oRfjdpZFfRlwKYmt9S8OKvCobxXXksuOfU%2B47ZSQaeg%2BwlM%2BxcHPjIBrvC4iaF35pZneodmpaaGv4ZY9i9F5KBEFLS2c2FVSlRookU6Ao%2BBPqJOv0yi1UZhaqdZmFByBN%2B58KFqN39QKYfGPdb4Tj2lZco5nHBLLo%2BZBwW&X-Amz-Signature=fe08f3675d2099fbd8560f8bbd630bad4b9169ef86af9298e1c96804db76815c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UHW7CRX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCyr3bmPXIqUccZAyTxqBcEtVMB%2F%2FZLDdZi2n4%2F6ts2NQIgK6k%2F4iiJ%2B6TdpKI1GNZ924gUPKWk8dZPmKm06A5HzWoqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKb976R7KdDjDrrSCrcA%2B3%2FEMQpreYyCDDqZuIW6WUXS6hV2Bf%2BXXG7ffshJaPx98TfXqU%2F9%2FJkrvu3Lz9yGHZN5YrZANKv8M7YW4fk1SR750%2BTNY17oV56xb5MN5NGVb%2Bc2%2BjRr%2FEmwAwdk7DMQRLFW8BsUS3CNJWk7UZpav7oQjmQaHKtO2VbcicsSASDZVtsfF0U3%2Bv%2B%2BSt3ZY3MIHvgtKFvIDOP2r1ZMHIlKHqmg9TZhzsR9IW774gmwDQ6Gn5Nv9BHbVrOwCBmY4g3ozFAS%2FH1JeJM7fI0dTKoNzC424zMRUl0Bdm3BSGCFVX8HcUlA%2BeqNVVUdw8CHJuPTohQXLT5dNpIuR%2BOcgbd5t%2BIsfrA8m9qPZwW%2BfLs7mAtMlTCYN%2BNXYuNwhE%2F8vjVr3t6HoDd166G6VYcItfUYFatTIbVbxEsuvP4rppfaFtjkW3l7avC9J2dCVlzDtwFRXTAHeS8X3HAplxi1sdEYUX5ReoQ%2B0sp7erSx4pZDqLBQgQtmCMbJdoonRCvJfRcIANYbqlWPxMP5UqmLOGjchmykggJS85sA9kFIDz66pUMYZGjjn%2Bbc1WMjABH719rVU4LemAsmZ8q1vZmSbWwy9BIwlpCfT1F5kFYqipBazSL4H9hhm1HSEiEjheaMIbztr8GOqUBkn68GSVkUU6uDswiY%2FugrZYaIkPH3pQ051JBaDfpLhLnd15C7yc1m9oRfjdpZFfRlwKYmt9S8OKvCobxXXksuOfU%2B47ZSQaeg%2BwlM%2BxcHPjIBrvC4iaF35pZneodmpaaGv4ZY9i9F5KBEFLS2c2FVSlRookU6Ao%2BBPqJOv0yi1UZhaqdZmFByBN%2B58KFqN39QKYfGPdb4Tj2lZco5nHBLLo%2BZBwW&X-Amz-Signature=fc1369c63870c0821c0a51b546b2ef8d59c62f96779beb6eb6c4b869bdc6a40f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UHW7CRX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCyr3bmPXIqUccZAyTxqBcEtVMB%2F%2FZLDdZi2n4%2F6ts2NQIgK6k%2F4iiJ%2B6TdpKI1GNZ924gUPKWk8dZPmKm06A5HzWoqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKb976R7KdDjDrrSCrcA%2B3%2FEMQpreYyCDDqZuIW6WUXS6hV2Bf%2BXXG7ffshJaPx98TfXqU%2F9%2FJkrvu3Lz9yGHZN5YrZANKv8M7YW4fk1SR750%2BTNY17oV56xb5MN5NGVb%2Bc2%2BjRr%2FEmwAwdk7DMQRLFW8BsUS3CNJWk7UZpav7oQjmQaHKtO2VbcicsSASDZVtsfF0U3%2Bv%2B%2BSt3ZY3MIHvgtKFvIDOP2r1ZMHIlKHqmg9TZhzsR9IW774gmwDQ6Gn5Nv9BHbVrOwCBmY4g3ozFAS%2FH1JeJM7fI0dTKoNzC424zMRUl0Bdm3BSGCFVX8HcUlA%2BeqNVVUdw8CHJuPTohQXLT5dNpIuR%2BOcgbd5t%2BIsfrA8m9qPZwW%2BfLs7mAtMlTCYN%2BNXYuNwhE%2F8vjVr3t6HoDd166G6VYcItfUYFatTIbVbxEsuvP4rppfaFtjkW3l7avC9J2dCVlzDtwFRXTAHeS8X3HAplxi1sdEYUX5ReoQ%2B0sp7erSx4pZDqLBQgQtmCMbJdoonRCvJfRcIANYbqlWPxMP5UqmLOGjchmykggJS85sA9kFIDz66pUMYZGjjn%2Bbc1WMjABH719rVU4LemAsmZ8q1vZmSbWwy9BIwlpCfT1F5kFYqipBazSL4H9hhm1HSEiEjheaMIbztr8GOqUBkn68GSVkUU6uDswiY%2FugrZYaIkPH3pQ051JBaDfpLhLnd15C7yc1m9oRfjdpZFfRlwKYmt9S8OKvCobxXXksuOfU%2B47ZSQaeg%2BwlM%2BxcHPjIBrvC4iaF35pZneodmpaaGv4ZY9i9F5KBEFLS2c2FVSlRookU6Ao%2BBPqJOv0yi1UZhaqdZmFByBN%2B58KFqN39QKYfGPdb4Tj2lZco5nHBLLo%2BZBwW&X-Amz-Signature=b47df342bd03adcdf79e66a1b84707a4b3d69ef28a5938df06367cc2bad9dafe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UHW7CRX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCyr3bmPXIqUccZAyTxqBcEtVMB%2F%2FZLDdZi2n4%2F6ts2NQIgK6k%2F4iiJ%2B6TdpKI1GNZ924gUPKWk8dZPmKm06A5HzWoqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKb976R7KdDjDrrSCrcA%2B3%2FEMQpreYyCDDqZuIW6WUXS6hV2Bf%2BXXG7ffshJaPx98TfXqU%2F9%2FJkrvu3Lz9yGHZN5YrZANKv8M7YW4fk1SR750%2BTNY17oV56xb5MN5NGVb%2Bc2%2BjRr%2FEmwAwdk7DMQRLFW8BsUS3CNJWk7UZpav7oQjmQaHKtO2VbcicsSASDZVtsfF0U3%2Bv%2B%2BSt3ZY3MIHvgtKFvIDOP2r1ZMHIlKHqmg9TZhzsR9IW774gmwDQ6Gn5Nv9BHbVrOwCBmY4g3ozFAS%2FH1JeJM7fI0dTKoNzC424zMRUl0Bdm3BSGCFVX8HcUlA%2BeqNVVUdw8CHJuPTohQXLT5dNpIuR%2BOcgbd5t%2BIsfrA8m9qPZwW%2BfLs7mAtMlTCYN%2BNXYuNwhE%2F8vjVr3t6HoDd166G6VYcItfUYFatTIbVbxEsuvP4rppfaFtjkW3l7avC9J2dCVlzDtwFRXTAHeS8X3HAplxi1sdEYUX5ReoQ%2B0sp7erSx4pZDqLBQgQtmCMbJdoonRCvJfRcIANYbqlWPxMP5UqmLOGjchmykggJS85sA9kFIDz66pUMYZGjjn%2Bbc1WMjABH719rVU4LemAsmZ8q1vZmSbWwy9BIwlpCfT1F5kFYqipBazSL4H9hhm1HSEiEjheaMIbztr8GOqUBkn68GSVkUU6uDswiY%2FugrZYaIkPH3pQ051JBaDfpLhLnd15C7yc1m9oRfjdpZFfRlwKYmt9S8OKvCobxXXksuOfU%2B47ZSQaeg%2BwlM%2BxcHPjIBrvC4iaF35pZneodmpaaGv4ZY9i9F5KBEFLS2c2FVSlRookU6Ao%2BBPqJOv0yi1UZhaqdZmFByBN%2B58KFqN39QKYfGPdb4Tj2lZco5nHBLLo%2BZBwW&X-Amz-Signature=23e360344e07faecc8a8bd092f6574164b3261ab1e56addc99755563130b9b3a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
