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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2SQBY3U%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T121409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLoqHCr0wdJkOtaMc2XzL7cR1yiTZkPegn1TdniR0CLwIhAOoZIj8yBgfGT57ltjuUenfDAHepDRifxTXLR3mQZpSiKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO2ZSarRrHb%2FZVMj4q3AM0%2BI2sT1ZU3fvwC8YsRbdXMB5WY52LGrZ08j8KSUv0pL1QPG9C7k07lCiMUS2OJ29uIGvelFm3ZeM5UUD4IKXIQmtj6xwnXNfBqoDpFhFICP571XN4YQVWV62aNOFn16mYPYlJpDLV%2FNoJ0MEKI84ALxf4Blgd2Zqur8of9UAzRcNFBTNukM%2Bfi2qZmsytrFu6mfz2bHPP%2FbfSHw3v3wa6F8YUnP3LZVeIHGhlEEnDQcos0dndJiePsArV%2BtRKyEZxn8VjsCXOuXMKcUOU9hSgEO9xMJ8aBP4s1c7gu6MIuMJS%2B%2BsfQjyyS57SmBgpgXcg2kNG4%2BfU0nKClFfdjmAlI36H6USWm%2BtippsGNO%2BW%2BNHuGqYo1F2DsDH%2B4au83t%2BIlN3o%2FyO837jnJwcacTALitUc8oKNTOk5xrf8wnY5Qe7oJD6q9Oy7Mku8dLNOLmF4JA1y%2BKEyIqMpTMnNjV8d%2BcIC1yheOKFlG5AKvLLae7SJTH86HFXO2goIEt%2F8zcM80cFfSkSZeKgZNNy9oPYwQo8yZDOEKiEGg%2Bdx%2F9OvjOq1ODOh7PMeAde0AnY9Net78nlWI84Jt%2FzXjSs%2FOmpMUZxi6%2Bn3EYYvSBR6QSFJM6be6qCSVPdoYrb7qjCuhOvBBjqkAdiQ7%2F8dbtZW%2FRHl4LhJgIfQ%2Bs%2BNpKGfa0bgz8Ie9vMchrpWKXGI8c0dVkbQ5YPGo56VXNEE%2B2YZ78WGyiSpN94V8QHdcgciBpXywKqEZ6m50ntM1Dd%2FD4U0bM5%2FIpfmT8o%2BcPUFhzLQ34MJZx4cYEROCjZlwzf0t1y6%2FeBtabVxkvvVio%2BKgPVSFJ9rSdKXdQJGhiIWivslwDesOOesYArTwJ83&X-Amz-Signature=3d567321fe2d04f827a75ceb26319dde58ab5cea586fb578a6661b1b9a7a085e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2SQBY3U%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T121409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLoqHCr0wdJkOtaMc2XzL7cR1yiTZkPegn1TdniR0CLwIhAOoZIj8yBgfGT57ltjuUenfDAHepDRifxTXLR3mQZpSiKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO2ZSarRrHb%2FZVMj4q3AM0%2BI2sT1ZU3fvwC8YsRbdXMB5WY52LGrZ08j8KSUv0pL1QPG9C7k07lCiMUS2OJ29uIGvelFm3ZeM5UUD4IKXIQmtj6xwnXNfBqoDpFhFICP571XN4YQVWV62aNOFn16mYPYlJpDLV%2FNoJ0MEKI84ALxf4Blgd2Zqur8of9UAzRcNFBTNukM%2Bfi2qZmsytrFu6mfz2bHPP%2FbfSHw3v3wa6F8YUnP3LZVeIHGhlEEnDQcos0dndJiePsArV%2BtRKyEZxn8VjsCXOuXMKcUOU9hSgEO9xMJ8aBP4s1c7gu6MIuMJS%2B%2BsfQjyyS57SmBgpgXcg2kNG4%2BfU0nKClFfdjmAlI36H6USWm%2BtippsGNO%2BW%2BNHuGqYo1F2DsDH%2B4au83t%2BIlN3o%2FyO837jnJwcacTALitUc8oKNTOk5xrf8wnY5Qe7oJD6q9Oy7Mku8dLNOLmF4JA1y%2BKEyIqMpTMnNjV8d%2BcIC1yheOKFlG5AKvLLae7SJTH86HFXO2goIEt%2F8zcM80cFfSkSZeKgZNNy9oPYwQo8yZDOEKiEGg%2Bdx%2F9OvjOq1ODOh7PMeAde0AnY9Net78nlWI84Jt%2FzXjSs%2FOmpMUZxi6%2Bn3EYYvSBR6QSFJM6be6qCSVPdoYrb7qjCuhOvBBjqkAdiQ7%2F8dbtZW%2FRHl4LhJgIfQ%2Bs%2BNpKGfa0bgz8Ie9vMchrpWKXGI8c0dVkbQ5YPGo56VXNEE%2B2YZ78WGyiSpN94V8QHdcgciBpXywKqEZ6m50ntM1Dd%2FD4U0bM5%2FIpfmT8o%2BcPUFhzLQ34MJZx4cYEROCjZlwzf0t1y6%2FeBtabVxkvvVio%2BKgPVSFJ9rSdKXdQJGhiIWivslwDesOOesYArTwJ83&X-Amz-Signature=ef0d61dda3a6c30eaa8e988b41ab83833ffcc7b929e3639d3628e14850e9ff63&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2SQBY3U%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T121409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLoqHCr0wdJkOtaMc2XzL7cR1yiTZkPegn1TdniR0CLwIhAOoZIj8yBgfGT57ltjuUenfDAHepDRifxTXLR3mQZpSiKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO2ZSarRrHb%2FZVMj4q3AM0%2BI2sT1ZU3fvwC8YsRbdXMB5WY52LGrZ08j8KSUv0pL1QPG9C7k07lCiMUS2OJ29uIGvelFm3ZeM5UUD4IKXIQmtj6xwnXNfBqoDpFhFICP571XN4YQVWV62aNOFn16mYPYlJpDLV%2FNoJ0MEKI84ALxf4Blgd2Zqur8of9UAzRcNFBTNukM%2Bfi2qZmsytrFu6mfz2bHPP%2FbfSHw3v3wa6F8YUnP3LZVeIHGhlEEnDQcos0dndJiePsArV%2BtRKyEZxn8VjsCXOuXMKcUOU9hSgEO9xMJ8aBP4s1c7gu6MIuMJS%2B%2BsfQjyyS57SmBgpgXcg2kNG4%2BfU0nKClFfdjmAlI36H6USWm%2BtippsGNO%2BW%2BNHuGqYo1F2DsDH%2B4au83t%2BIlN3o%2FyO837jnJwcacTALitUc8oKNTOk5xrf8wnY5Qe7oJD6q9Oy7Mku8dLNOLmF4JA1y%2BKEyIqMpTMnNjV8d%2BcIC1yheOKFlG5AKvLLae7SJTH86HFXO2goIEt%2F8zcM80cFfSkSZeKgZNNy9oPYwQo8yZDOEKiEGg%2Bdx%2F9OvjOq1ODOh7PMeAde0AnY9Net78nlWI84Jt%2FzXjSs%2FOmpMUZxi6%2Bn3EYYvSBR6QSFJM6be6qCSVPdoYrb7qjCuhOvBBjqkAdiQ7%2F8dbtZW%2FRHl4LhJgIfQ%2Bs%2BNpKGfa0bgz8Ie9vMchrpWKXGI8c0dVkbQ5YPGo56VXNEE%2B2YZ78WGyiSpN94V8QHdcgciBpXywKqEZ6m50ntM1Dd%2FD4U0bM5%2FIpfmT8o%2BcPUFhzLQ34MJZx4cYEROCjZlwzf0t1y6%2FeBtabVxkvvVio%2BKgPVSFJ9rSdKXdQJGhiIWivslwDesOOesYArTwJ83&X-Amz-Signature=5780725c20affdcd833804b9074468119d1db303167b7ee78f7994ab2c736267&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2SQBY3U%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T121409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLoqHCr0wdJkOtaMc2XzL7cR1yiTZkPegn1TdniR0CLwIhAOoZIj8yBgfGT57ltjuUenfDAHepDRifxTXLR3mQZpSiKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO2ZSarRrHb%2FZVMj4q3AM0%2BI2sT1ZU3fvwC8YsRbdXMB5WY52LGrZ08j8KSUv0pL1QPG9C7k07lCiMUS2OJ29uIGvelFm3ZeM5UUD4IKXIQmtj6xwnXNfBqoDpFhFICP571XN4YQVWV62aNOFn16mYPYlJpDLV%2FNoJ0MEKI84ALxf4Blgd2Zqur8of9UAzRcNFBTNukM%2Bfi2qZmsytrFu6mfz2bHPP%2FbfSHw3v3wa6F8YUnP3LZVeIHGhlEEnDQcos0dndJiePsArV%2BtRKyEZxn8VjsCXOuXMKcUOU9hSgEO9xMJ8aBP4s1c7gu6MIuMJS%2B%2BsfQjyyS57SmBgpgXcg2kNG4%2BfU0nKClFfdjmAlI36H6USWm%2BtippsGNO%2BW%2BNHuGqYo1F2DsDH%2B4au83t%2BIlN3o%2FyO837jnJwcacTALitUc8oKNTOk5xrf8wnY5Qe7oJD6q9Oy7Mku8dLNOLmF4JA1y%2BKEyIqMpTMnNjV8d%2BcIC1yheOKFlG5AKvLLae7SJTH86HFXO2goIEt%2F8zcM80cFfSkSZeKgZNNy9oPYwQo8yZDOEKiEGg%2Bdx%2F9OvjOq1ODOh7PMeAde0AnY9Net78nlWI84Jt%2FzXjSs%2FOmpMUZxi6%2Bn3EYYvSBR6QSFJM6be6qCSVPdoYrb7qjCuhOvBBjqkAdiQ7%2F8dbtZW%2FRHl4LhJgIfQ%2Bs%2BNpKGfa0bgz8Ie9vMchrpWKXGI8c0dVkbQ5YPGo56VXNEE%2B2YZ78WGyiSpN94V8QHdcgciBpXywKqEZ6m50ntM1Dd%2FD4U0bM5%2FIpfmT8o%2BcPUFhzLQ34MJZx4cYEROCjZlwzf0t1y6%2FeBtabVxkvvVio%2BKgPVSFJ9rSdKXdQJGhiIWivslwDesOOesYArTwJ83&X-Amz-Signature=44fecd195f0bb2ef26a828d7d5866d79ffae2a06f856b2d761888127a678ddb9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2SQBY3U%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T121409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLoqHCr0wdJkOtaMc2XzL7cR1yiTZkPegn1TdniR0CLwIhAOoZIj8yBgfGT57ltjuUenfDAHepDRifxTXLR3mQZpSiKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO2ZSarRrHb%2FZVMj4q3AM0%2BI2sT1ZU3fvwC8YsRbdXMB5WY52LGrZ08j8KSUv0pL1QPG9C7k07lCiMUS2OJ29uIGvelFm3ZeM5UUD4IKXIQmtj6xwnXNfBqoDpFhFICP571XN4YQVWV62aNOFn16mYPYlJpDLV%2FNoJ0MEKI84ALxf4Blgd2Zqur8of9UAzRcNFBTNukM%2Bfi2qZmsytrFu6mfz2bHPP%2FbfSHw3v3wa6F8YUnP3LZVeIHGhlEEnDQcos0dndJiePsArV%2BtRKyEZxn8VjsCXOuXMKcUOU9hSgEO9xMJ8aBP4s1c7gu6MIuMJS%2B%2BsfQjyyS57SmBgpgXcg2kNG4%2BfU0nKClFfdjmAlI36H6USWm%2BtippsGNO%2BW%2BNHuGqYo1F2DsDH%2B4au83t%2BIlN3o%2FyO837jnJwcacTALitUc8oKNTOk5xrf8wnY5Qe7oJD6q9Oy7Mku8dLNOLmF4JA1y%2BKEyIqMpTMnNjV8d%2BcIC1yheOKFlG5AKvLLae7SJTH86HFXO2goIEt%2F8zcM80cFfSkSZeKgZNNy9oPYwQo8yZDOEKiEGg%2Bdx%2F9OvjOq1ODOh7PMeAde0AnY9Net78nlWI84Jt%2FzXjSs%2FOmpMUZxi6%2Bn3EYYvSBR6QSFJM6be6qCSVPdoYrb7qjCuhOvBBjqkAdiQ7%2F8dbtZW%2FRHl4LhJgIfQ%2Bs%2BNpKGfa0bgz8Ie9vMchrpWKXGI8c0dVkbQ5YPGo56VXNEE%2B2YZ78WGyiSpN94V8QHdcgciBpXywKqEZ6m50ntM1Dd%2FD4U0bM5%2FIpfmT8o%2BcPUFhzLQ34MJZx4cYEROCjZlwzf0t1y6%2FeBtabVxkvvVio%2BKgPVSFJ9rSdKXdQJGhiIWivslwDesOOesYArTwJ83&X-Amz-Signature=78eee0d8117c61312f6684c5f7281f2b562d66c2f8d9a49c8936e3c93825926e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2SQBY3U%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T121409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLoqHCr0wdJkOtaMc2XzL7cR1yiTZkPegn1TdniR0CLwIhAOoZIj8yBgfGT57ltjuUenfDAHepDRifxTXLR3mQZpSiKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO2ZSarRrHb%2FZVMj4q3AM0%2BI2sT1ZU3fvwC8YsRbdXMB5WY52LGrZ08j8KSUv0pL1QPG9C7k07lCiMUS2OJ29uIGvelFm3ZeM5UUD4IKXIQmtj6xwnXNfBqoDpFhFICP571XN4YQVWV62aNOFn16mYPYlJpDLV%2FNoJ0MEKI84ALxf4Blgd2Zqur8of9UAzRcNFBTNukM%2Bfi2qZmsytrFu6mfz2bHPP%2FbfSHw3v3wa6F8YUnP3LZVeIHGhlEEnDQcos0dndJiePsArV%2BtRKyEZxn8VjsCXOuXMKcUOU9hSgEO9xMJ8aBP4s1c7gu6MIuMJS%2B%2BsfQjyyS57SmBgpgXcg2kNG4%2BfU0nKClFfdjmAlI36H6USWm%2BtippsGNO%2BW%2BNHuGqYo1F2DsDH%2B4au83t%2BIlN3o%2FyO837jnJwcacTALitUc8oKNTOk5xrf8wnY5Qe7oJD6q9Oy7Mku8dLNOLmF4JA1y%2BKEyIqMpTMnNjV8d%2BcIC1yheOKFlG5AKvLLae7SJTH86HFXO2goIEt%2F8zcM80cFfSkSZeKgZNNy9oPYwQo8yZDOEKiEGg%2Bdx%2F9OvjOq1ODOh7PMeAde0AnY9Net78nlWI84Jt%2FzXjSs%2FOmpMUZxi6%2Bn3EYYvSBR6QSFJM6be6qCSVPdoYrb7qjCuhOvBBjqkAdiQ7%2F8dbtZW%2FRHl4LhJgIfQ%2Bs%2BNpKGfa0bgz8Ie9vMchrpWKXGI8c0dVkbQ5YPGo56VXNEE%2B2YZ78WGyiSpN94V8QHdcgciBpXywKqEZ6m50ntM1Dd%2FD4U0bM5%2FIpfmT8o%2BcPUFhzLQ34MJZx4cYEROCjZlwzf0t1y6%2FeBtabVxkvvVio%2BKgPVSFJ9rSdKXdQJGhiIWivslwDesOOesYArTwJ83&X-Amz-Signature=98c806cf1a7327159a44c9926d8017bd785541fc9032f92bdc43b3e88134e63d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2SQBY3U%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T121409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLoqHCr0wdJkOtaMc2XzL7cR1yiTZkPegn1TdniR0CLwIhAOoZIj8yBgfGT57ltjuUenfDAHepDRifxTXLR3mQZpSiKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO2ZSarRrHb%2FZVMj4q3AM0%2BI2sT1ZU3fvwC8YsRbdXMB5WY52LGrZ08j8KSUv0pL1QPG9C7k07lCiMUS2OJ29uIGvelFm3ZeM5UUD4IKXIQmtj6xwnXNfBqoDpFhFICP571XN4YQVWV62aNOFn16mYPYlJpDLV%2FNoJ0MEKI84ALxf4Blgd2Zqur8of9UAzRcNFBTNukM%2Bfi2qZmsytrFu6mfz2bHPP%2FbfSHw3v3wa6F8YUnP3LZVeIHGhlEEnDQcos0dndJiePsArV%2BtRKyEZxn8VjsCXOuXMKcUOU9hSgEO9xMJ8aBP4s1c7gu6MIuMJS%2B%2BsfQjyyS57SmBgpgXcg2kNG4%2BfU0nKClFfdjmAlI36H6USWm%2BtippsGNO%2BW%2BNHuGqYo1F2DsDH%2B4au83t%2BIlN3o%2FyO837jnJwcacTALitUc8oKNTOk5xrf8wnY5Qe7oJD6q9Oy7Mku8dLNOLmF4JA1y%2BKEyIqMpTMnNjV8d%2BcIC1yheOKFlG5AKvLLae7SJTH86HFXO2goIEt%2F8zcM80cFfSkSZeKgZNNy9oPYwQo8yZDOEKiEGg%2Bdx%2F9OvjOq1ODOh7PMeAde0AnY9Net78nlWI84Jt%2FzXjSs%2FOmpMUZxi6%2Bn3EYYvSBR6QSFJM6be6qCSVPdoYrb7qjCuhOvBBjqkAdiQ7%2F8dbtZW%2FRHl4LhJgIfQ%2Bs%2BNpKGfa0bgz8Ie9vMchrpWKXGI8c0dVkbQ5YPGo56VXNEE%2B2YZ78WGyiSpN94V8QHdcgciBpXywKqEZ6m50ntM1Dd%2FD4U0bM5%2FIpfmT8o%2BcPUFhzLQ34MJZx4cYEROCjZlwzf0t1y6%2FeBtabVxkvvVio%2BKgPVSFJ9rSdKXdQJGhiIWivslwDesOOesYArTwJ83&X-Amz-Signature=0446254b0be3ac6b8d261baa5227e3d1c043656489b528d0329bd8772b1946c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2SQBY3U%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T121409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLoqHCr0wdJkOtaMc2XzL7cR1yiTZkPegn1TdniR0CLwIhAOoZIj8yBgfGT57ltjuUenfDAHepDRifxTXLR3mQZpSiKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO2ZSarRrHb%2FZVMj4q3AM0%2BI2sT1ZU3fvwC8YsRbdXMB5WY52LGrZ08j8KSUv0pL1QPG9C7k07lCiMUS2OJ29uIGvelFm3ZeM5UUD4IKXIQmtj6xwnXNfBqoDpFhFICP571XN4YQVWV62aNOFn16mYPYlJpDLV%2FNoJ0MEKI84ALxf4Blgd2Zqur8of9UAzRcNFBTNukM%2Bfi2qZmsytrFu6mfz2bHPP%2FbfSHw3v3wa6F8YUnP3LZVeIHGhlEEnDQcos0dndJiePsArV%2BtRKyEZxn8VjsCXOuXMKcUOU9hSgEO9xMJ8aBP4s1c7gu6MIuMJS%2B%2BsfQjyyS57SmBgpgXcg2kNG4%2BfU0nKClFfdjmAlI36H6USWm%2BtippsGNO%2BW%2BNHuGqYo1F2DsDH%2B4au83t%2BIlN3o%2FyO837jnJwcacTALitUc8oKNTOk5xrf8wnY5Qe7oJD6q9Oy7Mku8dLNOLmF4JA1y%2BKEyIqMpTMnNjV8d%2BcIC1yheOKFlG5AKvLLae7SJTH86HFXO2goIEt%2F8zcM80cFfSkSZeKgZNNy9oPYwQo8yZDOEKiEGg%2Bdx%2F9OvjOq1ODOh7PMeAde0AnY9Net78nlWI84Jt%2FzXjSs%2FOmpMUZxi6%2Bn3EYYvSBR6QSFJM6be6qCSVPdoYrb7qjCuhOvBBjqkAdiQ7%2F8dbtZW%2FRHl4LhJgIfQ%2Bs%2BNpKGfa0bgz8Ie9vMchrpWKXGI8c0dVkbQ5YPGo56VXNEE%2B2YZ78WGyiSpN94V8QHdcgciBpXywKqEZ6m50ntM1Dd%2FD4U0bM5%2FIpfmT8o%2BcPUFhzLQ34MJZx4cYEROCjZlwzf0t1y6%2FeBtabVxkvvVio%2BKgPVSFJ9rSdKXdQJGhiIWivslwDesOOesYArTwJ83&X-Amz-Signature=f5416f5d8fca00e012708a8436fe0409b88ece4f3bc6d005ed8064ce9d3ab116&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
