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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MJBWOXR%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIF%2F0CafPfpwbQ59j1Gwq473xsl6IA7YOyCGahuPzFDO1AiB1BY55Pg7cRv1YNmPchhTE9OvNBifqFAzBjBRNSFBMGSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM2spDF9wus3MaFOrkKtwDC%2Fo4ZcJWNFUo01Vp8VYIt5Poeslmzgfp5voyO9Zo3Z9pZITgZi2tCRnYNx35%2BAcPiyZl56H2fjn3LfjGgXH%2B2rWqqQVeiwRPDj88taLN4%2BEtLEI6Nt0Ihb8tnx7S6%2BLjcF1jFwQroiWjgxLonbfmLvhvjoeahAo2nUZUKykmIvrbakDz31LrRd3%2BfOm5pjZjXhub1%2Bj91RtVoPTUg0kNrRveSKHvUQKy4sNGFJsktGQIDO%2BguHNFpVWl6Cr0wk9Ckrt0Bt3H6W1DYBDn4cn9fISnZtCCAZhqaqxDwI7b3PeORf%2Ba0ADNLaMTehbjp0y92ZrzFiNQbxa3aIFEJPwufrkZSaNkR8zTrSju56mdXW%2FDMnHHwXv%2Bnk6wMb79xvO154oyUYAL0sxGqa5TcAf0fh45tK7%2FS%2BJzUnHK8FhpD0quVAb9fxkMVjJ%2F68ftXh0vrkuNigbK%2FNZTfyNTDCroBw5ZyfAoijbGSScVjpK3MYaZH99kBSvEQRtRQ27KTv%2BlL05%2B%2FMA7jawqSjwdpLlgf51uxzxNnbsUgthFNTHsJDEq0SwMlkaziD7m27dqKiknUnwGpjq0G8dRcPHqqZSFSX5pwMU62q3L%2FXrYwfG9VPsUHoMJWew1PbVSVUkwvOigwwY6pgGz%2Fs4G9hiBlhxA9oucxgo2KhOoa9EZRZHGLD4XqvCY1KiMtHR5GWbxLtxk5koQLPjDRW01JhztRsbkOMU3VPQ5v1zTJOBHTC2aqgu78WqpG%2BetWabEpJt52R7y5YgLSLE3qySRQKAUQbXUKrC3IQ0bRdaNnC4pR0LAxzWbq%2F5P2WNCnNQUxzsKm11UvKVtXpag0Lhx6t2s0WmUTRnON4X6HHkeOq2e&X-Amz-Signature=f23e3fe8a8d0d17511f2001834295fbe5f0b397972eb3f9e9b7ce4a423a6b651&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MJBWOXR%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIF%2F0CafPfpwbQ59j1Gwq473xsl6IA7YOyCGahuPzFDO1AiB1BY55Pg7cRv1YNmPchhTE9OvNBifqFAzBjBRNSFBMGSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM2spDF9wus3MaFOrkKtwDC%2Fo4ZcJWNFUo01Vp8VYIt5Poeslmzgfp5voyO9Zo3Z9pZITgZi2tCRnYNx35%2BAcPiyZl56H2fjn3LfjGgXH%2B2rWqqQVeiwRPDj88taLN4%2BEtLEI6Nt0Ihb8tnx7S6%2BLjcF1jFwQroiWjgxLonbfmLvhvjoeahAo2nUZUKykmIvrbakDz31LrRd3%2BfOm5pjZjXhub1%2Bj91RtVoPTUg0kNrRveSKHvUQKy4sNGFJsktGQIDO%2BguHNFpVWl6Cr0wk9Ckrt0Bt3H6W1DYBDn4cn9fISnZtCCAZhqaqxDwI7b3PeORf%2Ba0ADNLaMTehbjp0y92ZrzFiNQbxa3aIFEJPwufrkZSaNkR8zTrSju56mdXW%2FDMnHHwXv%2Bnk6wMb79xvO154oyUYAL0sxGqa5TcAf0fh45tK7%2FS%2BJzUnHK8FhpD0quVAb9fxkMVjJ%2F68ftXh0vrkuNigbK%2FNZTfyNTDCroBw5ZyfAoijbGSScVjpK3MYaZH99kBSvEQRtRQ27KTv%2BlL05%2B%2FMA7jawqSjwdpLlgf51uxzxNnbsUgthFNTHsJDEq0SwMlkaziD7m27dqKiknUnwGpjq0G8dRcPHqqZSFSX5pwMU62q3L%2FXrYwfG9VPsUHoMJWew1PbVSVUkwvOigwwY6pgGz%2Fs4G9hiBlhxA9oucxgo2KhOoa9EZRZHGLD4XqvCY1KiMtHR5GWbxLtxk5koQLPjDRW01JhztRsbkOMU3VPQ5v1zTJOBHTC2aqgu78WqpG%2BetWabEpJt52R7y5YgLSLE3qySRQKAUQbXUKrC3IQ0bRdaNnC4pR0LAxzWbq%2F5P2WNCnNQUxzsKm11UvKVtXpag0Lhx6t2s0WmUTRnON4X6HHkeOq2e&X-Amz-Signature=5b05e6a056dc1380c18d9f9ec7a986891e842632c8a7bcf0e90d7c9e8288b188&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MJBWOXR%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIF%2F0CafPfpwbQ59j1Gwq473xsl6IA7YOyCGahuPzFDO1AiB1BY55Pg7cRv1YNmPchhTE9OvNBifqFAzBjBRNSFBMGSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM2spDF9wus3MaFOrkKtwDC%2Fo4ZcJWNFUo01Vp8VYIt5Poeslmzgfp5voyO9Zo3Z9pZITgZi2tCRnYNx35%2BAcPiyZl56H2fjn3LfjGgXH%2B2rWqqQVeiwRPDj88taLN4%2BEtLEI6Nt0Ihb8tnx7S6%2BLjcF1jFwQroiWjgxLonbfmLvhvjoeahAo2nUZUKykmIvrbakDz31LrRd3%2BfOm5pjZjXhub1%2Bj91RtVoPTUg0kNrRveSKHvUQKy4sNGFJsktGQIDO%2BguHNFpVWl6Cr0wk9Ckrt0Bt3H6W1DYBDn4cn9fISnZtCCAZhqaqxDwI7b3PeORf%2Ba0ADNLaMTehbjp0y92ZrzFiNQbxa3aIFEJPwufrkZSaNkR8zTrSju56mdXW%2FDMnHHwXv%2Bnk6wMb79xvO154oyUYAL0sxGqa5TcAf0fh45tK7%2FS%2BJzUnHK8FhpD0quVAb9fxkMVjJ%2F68ftXh0vrkuNigbK%2FNZTfyNTDCroBw5ZyfAoijbGSScVjpK3MYaZH99kBSvEQRtRQ27KTv%2BlL05%2B%2FMA7jawqSjwdpLlgf51uxzxNnbsUgthFNTHsJDEq0SwMlkaziD7m27dqKiknUnwGpjq0G8dRcPHqqZSFSX5pwMU62q3L%2FXrYwfG9VPsUHoMJWew1PbVSVUkwvOigwwY6pgGz%2Fs4G9hiBlhxA9oucxgo2KhOoa9EZRZHGLD4XqvCY1KiMtHR5GWbxLtxk5koQLPjDRW01JhztRsbkOMU3VPQ5v1zTJOBHTC2aqgu78WqpG%2BetWabEpJt52R7y5YgLSLE3qySRQKAUQbXUKrC3IQ0bRdaNnC4pR0LAxzWbq%2F5P2WNCnNQUxzsKm11UvKVtXpag0Lhx6t2s0WmUTRnON4X6HHkeOq2e&X-Amz-Signature=728e8acaaa5f0746f2380f3e89cc1a152657679528342c9e24bd16aa3e205c2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MJBWOXR%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIF%2F0CafPfpwbQ59j1Gwq473xsl6IA7YOyCGahuPzFDO1AiB1BY55Pg7cRv1YNmPchhTE9OvNBifqFAzBjBRNSFBMGSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM2spDF9wus3MaFOrkKtwDC%2Fo4ZcJWNFUo01Vp8VYIt5Poeslmzgfp5voyO9Zo3Z9pZITgZi2tCRnYNx35%2BAcPiyZl56H2fjn3LfjGgXH%2B2rWqqQVeiwRPDj88taLN4%2BEtLEI6Nt0Ihb8tnx7S6%2BLjcF1jFwQroiWjgxLonbfmLvhvjoeahAo2nUZUKykmIvrbakDz31LrRd3%2BfOm5pjZjXhub1%2Bj91RtVoPTUg0kNrRveSKHvUQKy4sNGFJsktGQIDO%2BguHNFpVWl6Cr0wk9Ckrt0Bt3H6W1DYBDn4cn9fISnZtCCAZhqaqxDwI7b3PeORf%2Ba0ADNLaMTehbjp0y92ZrzFiNQbxa3aIFEJPwufrkZSaNkR8zTrSju56mdXW%2FDMnHHwXv%2Bnk6wMb79xvO154oyUYAL0sxGqa5TcAf0fh45tK7%2FS%2BJzUnHK8FhpD0quVAb9fxkMVjJ%2F68ftXh0vrkuNigbK%2FNZTfyNTDCroBw5ZyfAoijbGSScVjpK3MYaZH99kBSvEQRtRQ27KTv%2BlL05%2B%2FMA7jawqSjwdpLlgf51uxzxNnbsUgthFNTHsJDEq0SwMlkaziD7m27dqKiknUnwGpjq0G8dRcPHqqZSFSX5pwMU62q3L%2FXrYwfG9VPsUHoMJWew1PbVSVUkwvOigwwY6pgGz%2Fs4G9hiBlhxA9oucxgo2KhOoa9EZRZHGLD4XqvCY1KiMtHR5GWbxLtxk5koQLPjDRW01JhztRsbkOMU3VPQ5v1zTJOBHTC2aqgu78WqpG%2BetWabEpJt52R7y5YgLSLE3qySRQKAUQbXUKrC3IQ0bRdaNnC4pR0LAxzWbq%2F5P2WNCnNQUxzsKm11UvKVtXpag0Lhx6t2s0WmUTRnON4X6HHkeOq2e&X-Amz-Signature=b0efdb0314f8d46ba82cb3398435cadf92da97e14f525578a5b78eb0ea45b2ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MJBWOXR%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIF%2F0CafPfpwbQ59j1Gwq473xsl6IA7YOyCGahuPzFDO1AiB1BY55Pg7cRv1YNmPchhTE9OvNBifqFAzBjBRNSFBMGSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM2spDF9wus3MaFOrkKtwDC%2Fo4ZcJWNFUo01Vp8VYIt5Poeslmzgfp5voyO9Zo3Z9pZITgZi2tCRnYNx35%2BAcPiyZl56H2fjn3LfjGgXH%2B2rWqqQVeiwRPDj88taLN4%2BEtLEI6Nt0Ihb8tnx7S6%2BLjcF1jFwQroiWjgxLonbfmLvhvjoeahAo2nUZUKykmIvrbakDz31LrRd3%2BfOm5pjZjXhub1%2Bj91RtVoPTUg0kNrRveSKHvUQKy4sNGFJsktGQIDO%2BguHNFpVWl6Cr0wk9Ckrt0Bt3H6W1DYBDn4cn9fISnZtCCAZhqaqxDwI7b3PeORf%2Ba0ADNLaMTehbjp0y92ZrzFiNQbxa3aIFEJPwufrkZSaNkR8zTrSju56mdXW%2FDMnHHwXv%2Bnk6wMb79xvO154oyUYAL0sxGqa5TcAf0fh45tK7%2FS%2BJzUnHK8FhpD0quVAb9fxkMVjJ%2F68ftXh0vrkuNigbK%2FNZTfyNTDCroBw5ZyfAoijbGSScVjpK3MYaZH99kBSvEQRtRQ27KTv%2BlL05%2B%2FMA7jawqSjwdpLlgf51uxzxNnbsUgthFNTHsJDEq0SwMlkaziD7m27dqKiknUnwGpjq0G8dRcPHqqZSFSX5pwMU62q3L%2FXrYwfG9VPsUHoMJWew1PbVSVUkwvOigwwY6pgGz%2Fs4G9hiBlhxA9oucxgo2KhOoa9EZRZHGLD4XqvCY1KiMtHR5GWbxLtxk5koQLPjDRW01JhztRsbkOMU3VPQ5v1zTJOBHTC2aqgu78WqpG%2BetWabEpJt52R7y5YgLSLE3qySRQKAUQbXUKrC3IQ0bRdaNnC4pR0LAxzWbq%2F5P2WNCnNQUxzsKm11UvKVtXpag0Lhx6t2s0WmUTRnON4X6HHkeOq2e&X-Amz-Signature=8fdbf043f777f7b619054c309faf93d8f48f215e739d2a7a45dc07cd3d986300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MJBWOXR%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIF%2F0CafPfpwbQ59j1Gwq473xsl6IA7YOyCGahuPzFDO1AiB1BY55Pg7cRv1YNmPchhTE9OvNBifqFAzBjBRNSFBMGSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM2spDF9wus3MaFOrkKtwDC%2Fo4ZcJWNFUo01Vp8VYIt5Poeslmzgfp5voyO9Zo3Z9pZITgZi2tCRnYNx35%2BAcPiyZl56H2fjn3LfjGgXH%2B2rWqqQVeiwRPDj88taLN4%2BEtLEI6Nt0Ihb8tnx7S6%2BLjcF1jFwQroiWjgxLonbfmLvhvjoeahAo2nUZUKykmIvrbakDz31LrRd3%2BfOm5pjZjXhub1%2Bj91RtVoPTUg0kNrRveSKHvUQKy4sNGFJsktGQIDO%2BguHNFpVWl6Cr0wk9Ckrt0Bt3H6W1DYBDn4cn9fISnZtCCAZhqaqxDwI7b3PeORf%2Ba0ADNLaMTehbjp0y92ZrzFiNQbxa3aIFEJPwufrkZSaNkR8zTrSju56mdXW%2FDMnHHwXv%2Bnk6wMb79xvO154oyUYAL0sxGqa5TcAf0fh45tK7%2FS%2BJzUnHK8FhpD0quVAb9fxkMVjJ%2F68ftXh0vrkuNigbK%2FNZTfyNTDCroBw5ZyfAoijbGSScVjpK3MYaZH99kBSvEQRtRQ27KTv%2BlL05%2B%2FMA7jawqSjwdpLlgf51uxzxNnbsUgthFNTHsJDEq0SwMlkaziD7m27dqKiknUnwGpjq0G8dRcPHqqZSFSX5pwMU62q3L%2FXrYwfG9VPsUHoMJWew1PbVSVUkwvOigwwY6pgGz%2Fs4G9hiBlhxA9oucxgo2KhOoa9EZRZHGLD4XqvCY1KiMtHR5GWbxLtxk5koQLPjDRW01JhztRsbkOMU3VPQ5v1zTJOBHTC2aqgu78WqpG%2BetWabEpJt52R7y5YgLSLE3qySRQKAUQbXUKrC3IQ0bRdaNnC4pR0LAxzWbq%2F5P2WNCnNQUxzsKm11UvKVtXpag0Lhx6t2s0WmUTRnON4X6HHkeOq2e&X-Amz-Signature=5d233e88fff3f9df95a866780b209b944eaf9d84d4424f91acded05f28ec1402&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MJBWOXR%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIF%2F0CafPfpwbQ59j1Gwq473xsl6IA7YOyCGahuPzFDO1AiB1BY55Pg7cRv1YNmPchhTE9OvNBifqFAzBjBRNSFBMGSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM2spDF9wus3MaFOrkKtwDC%2Fo4ZcJWNFUo01Vp8VYIt5Poeslmzgfp5voyO9Zo3Z9pZITgZi2tCRnYNx35%2BAcPiyZl56H2fjn3LfjGgXH%2B2rWqqQVeiwRPDj88taLN4%2BEtLEI6Nt0Ihb8tnx7S6%2BLjcF1jFwQroiWjgxLonbfmLvhvjoeahAo2nUZUKykmIvrbakDz31LrRd3%2BfOm5pjZjXhub1%2Bj91RtVoPTUg0kNrRveSKHvUQKy4sNGFJsktGQIDO%2BguHNFpVWl6Cr0wk9Ckrt0Bt3H6W1DYBDn4cn9fISnZtCCAZhqaqxDwI7b3PeORf%2Ba0ADNLaMTehbjp0y92ZrzFiNQbxa3aIFEJPwufrkZSaNkR8zTrSju56mdXW%2FDMnHHwXv%2Bnk6wMb79xvO154oyUYAL0sxGqa5TcAf0fh45tK7%2FS%2BJzUnHK8FhpD0quVAb9fxkMVjJ%2F68ftXh0vrkuNigbK%2FNZTfyNTDCroBw5ZyfAoijbGSScVjpK3MYaZH99kBSvEQRtRQ27KTv%2BlL05%2B%2FMA7jawqSjwdpLlgf51uxzxNnbsUgthFNTHsJDEq0SwMlkaziD7m27dqKiknUnwGpjq0G8dRcPHqqZSFSX5pwMU62q3L%2FXrYwfG9VPsUHoMJWew1PbVSVUkwvOigwwY6pgGz%2Fs4G9hiBlhxA9oucxgo2KhOoa9EZRZHGLD4XqvCY1KiMtHR5GWbxLtxk5koQLPjDRW01JhztRsbkOMU3VPQ5v1zTJOBHTC2aqgu78WqpG%2BetWabEpJt52R7y5YgLSLE3qySRQKAUQbXUKrC3IQ0bRdaNnC4pR0LAxzWbq%2F5P2WNCnNQUxzsKm11UvKVtXpag0Lhx6t2s0WmUTRnON4X6HHkeOq2e&X-Amz-Signature=5f05f38b72e3db6ffb356c1bcfb5598455362606e4b764d0b36f99b7c59b049a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MJBWOXR%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIF%2F0CafPfpwbQ59j1Gwq473xsl6IA7YOyCGahuPzFDO1AiB1BY55Pg7cRv1YNmPchhTE9OvNBifqFAzBjBRNSFBMGSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM2spDF9wus3MaFOrkKtwDC%2Fo4ZcJWNFUo01Vp8VYIt5Poeslmzgfp5voyO9Zo3Z9pZITgZi2tCRnYNx35%2BAcPiyZl56H2fjn3LfjGgXH%2B2rWqqQVeiwRPDj88taLN4%2BEtLEI6Nt0Ihb8tnx7S6%2BLjcF1jFwQroiWjgxLonbfmLvhvjoeahAo2nUZUKykmIvrbakDz31LrRd3%2BfOm5pjZjXhub1%2Bj91RtVoPTUg0kNrRveSKHvUQKy4sNGFJsktGQIDO%2BguHNFpVWl6Cr0wk9Ckrt0Bt3H6W1DYBDn4cn9fISnZtCCAZhqaqxDwI7b3PeORf%2Ba0ADNLaMTehbjp0y92ZrzFiNQbxa3aIFEJPwufrkZSaNkR8zTrSju56mdXW%2FDMnHHwXv%2Bnk6wMb79xvO154oyUYAL0sxGqa5TcAf0fh45tK7%2FS%2BJzUnHK8FhpD0quVAb9fxkMVjJ%2F68ftXh0vrkuNigbK%2FNZTfyNTDCroBw5ZyfAoijbGSScVjpK3MYaZH99kBSvEQRtRQ27KTv%2BlL05%2B%2FMA7jawqSjwdpLlgf51uxzxNnbsUgthFNTHsJDEq0SwMlkaziD7m27dqKiknUnwGpjq0G8dRcPHqqZSFSX5pwMU62q3L%2FXrYwfG9VPsUHoMJWew1PbVSVUkwvOigwwY6pgGz%2Fs4G9hiBlhxA9oucxgo2KhOoa9EZRZHGLD4XqvCY1KiMtHR5GWbxLtxk5koQLPjDRW01JhztRsbkOMU3VPQ5v1zTJOBHTC2aqgu78WqpG%2BetWabEpJt52R7y5YgLSLE3qySRQKAUQbXUKrC3IQ0bRdaNnC4pR0LAxzWbq%2F5P2WNCnNQUxzsKm11UvKVtXpag0Lhx6t2s0WmUTRnON4X6HHkeOq2e&X-Amz-Signature=e4d9ea13c1b03f61b74f2f7d99d08235afa1e685d71ad1a1dcdb98404a6238d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
