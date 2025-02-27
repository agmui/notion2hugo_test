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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGQNSDMM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIH81nQ2a7u5wpuaZYtbi29KC8EHbkTxFxsjb5MRvy4evAiEA%2BorfgPofv8iaKQVovWHXi%2Bl9IIYjsygNLDuvTo40EXUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcnBVQzAstw0iSA5SrcA29T53GqSlhDoL%2BXHbJ4uiKPY%2BPfnFtETB2Ho%2FY3iY9vZd0hVs%2B6%2FtYywMI3aNYyYmmfIwD4F4rX47dbUR7T6%2F8N%2B0USZyBSqncNnIkIjxSfSL2%2Bh3VinrFhH456pEh4cLHlrMgUovMPjSh%2BsmWzyWpNBkq5wvd6E0a5hQbRIsHaau6AYA0SqkD2Cmx%2Bjj4zrj%2FYIiRcSpMXJl2phhsqrf%2Bkn6YfO07btXaTAhu9EySwkyXFMrelBUr3VkVpwkNXQxIAPY047TChZhEI8zKO3KNg40hA2zD8ia2ZQmCDg3tsCeaOtcc2J7XfR9gHzy%2FOTG34M47Uv7yI60hrcZH0K6csh%2FwBSPxxMFsPPPnwVaW8uOCgzyC5zSBehWQRIHnD8m3PcWe26RXb3x9SZ%2BeYwlXupis%2BXnjx3Cls7ljJnnt6mCPCmGO%2BsScIAOENWLoorvE5vPcllf8GATDO5JeabAcu66Om0TJHfVpduLAGyTtguO4KIFKAe8UZZY5FYrobmvnx2bgKRvW95EawBgyPL7xBPqLKnu69l20Cnh0qrPBvrXES4vkyBiml0i2VoW6%2BPPMduoF%2B7P7LoeAzLx0hseIbtUOk8TjgO1ZSdhg4k9DxhFQh0jA0XHKSOTpnMP3Yg74GOqUBHrd10kSAluFJPXvFtFZ8kpOAR8BgosbYOigKP8h5e%2FOR9ANyJ1zKE0Hm4KC7Ifw8cBCCQVskMphGZzPwTQzLMV3ipkZPuMpA1bFQqhFQgWfTswNRA9l4IYeTTE264sTIDCm5b9fS1E1pS1zzNxaAPnbmlcVsiEkVh58Xp9ff9mEpsYb0jKwxrwX1QXJcZCixT5Lce6Hx62N9WIcRzL2m9%2FSffI9Y&X-Amz-Signature=419635e5016d4f873e042a2ba8d994ed811c9b06ccd444af69fcac8f2e6a8587&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGQNSDMM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIH81nQ2a7u5wpuaZYtbi29KC8EHbkTxFxsjb5MRvy4evAiEA%2BorfgPofv8iaKQVovWHXi%2Bl9IIYjsygNLDuvTo40EXUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcnBVQzAstw0iSA5SrcA29T53GqSlhDoL%2BXHbJ4uiKPY%2BPfnFtETB2Ho%2FY3iY9vZd0hVs%2B6%2FtYywMI3aNYyYmmfIwD4F4rX47dbUR7T6%2F8N%2B0USZyBSqncNnIkIjxSfSL2%2Bh3VinrFhH456pEh4cLHlrMgUovMPjSh%2BsmWzyWpNBkq5wvd6E0a5hQbRIsHaau6AYA0SqkD2Cmx%2Bjj4zrj%2FYIiRcSpMXJl2phhsqrf%2Bkn6YfO07btXaTAhu9EySwkyXFMrelBUr3VkVpwkNXQxIAPY047TChZhEI8zKO3KNg40hA2zD8ia2ZQmCDg3tsCeaOtcc2J7XfR9gHzy%2FOTG34M47Uv7yI60hrcZH0K6csh%2FwBSPxxMFsPPPnwVaW8uOCgzyC5zSBehWQRIHnD8m3PcWe26RXb3x9SZ%2BeYwlXupis%2BXnjx3Cls7ljJnnt6mCPCmGO%2BsScIAOENWLoorvE5vPcllf8GATDO5JeabAcu66Om0TJHfVpduLAGyTtguO4KIFKAe8UZZY5FYrobmvnx2bgKRvW95EawBgyPL7xBPqLKnu69l20Cnh0qrPBvrXES4vkyBiml0i2VoW6%2BPPMduoF%2B7P7LoeAzLx0hseIbtUOk8TjgO1ZSdhg4k9DxhFQh0jA0XHKSOTpnMP3Yg74GOqUBHrd10kSAluFJPXvFtFZ8kpOAR8BgosbYOigKP8h5e%2FOR9ANyJ1zKE0Hm4KC7Ifw8cBCCQVskMphGZzPwTQzLMV3ipkZPuMpA1bFQqhFQgWfTswNRA9l4IYeTTE264sTIDCm5b9fS1E1pS1zzNxaAPnbmlcVsiEkVh58Xp9ff9mEpsYb0jKwxrwX1QXJcZCixT5Lce6Hx62N9WIcRzL2m9%2FSffI9Y&X-Amz-Signature=1874a8adf227657c6ea7dd273ad1b1c2776de5b00adcab7fa385f1c5e805454c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGQNSDMM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIH81nQ2a7u5wpuaZYtbi29KC8EHbkTxFxsjb5MRvy4evAiEA%2BorfgPofv8iaKQVovWHXi%2Bl9IIYjsygNLDuvTo40EXUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcnBVQzAstw0iSA5SrcA29T53GqSlhDoL%2BXHbJ4uiKPY%2BPfnFtETB2Ho%2FY3iY9vZd0hVs%2B6%2FtYywMI3aNYyYmmfIwD4F4rX47dbUR7T6%2F8N%2B0USZyBSqncNnIkIjxSfSL2%2Bh3VinrFhH456pEh4cLHlrMgUovMPjSh%2BsmWzyWpNBkq5wvd6E0a5hQbRIsHaau6AYA0SqkD2Cmx%2Bjj4zrj%2FYIiRcSpMXJl2phhsqrf%2Bkn6YfO07btXaTAhu9EySwkyXFMrelBUr3VkVpwkNXQxIAPY047TChZhEI8zKO3KNg40hA2zD8ia2ZQmCDg3tsCeaOtcc2J7XfR9gHzy%2FOTG34M47Uv7yI60hrcZH0K6csh%2FwBSPxxMFsPPPnwVaW8uOCgzyC5zSBehWQRIHnD8m3PcWe26RXb3x9SZ%2BeYwlXupis%2BXnjx3Cls7ljJnnt6mCPCmGO%2BsScIAOENWLoorvE5vPcllf8GATDO5JeabAcu66Om0TJHfVpduLAGyTtguO4KIFKAe8UZZY5FYrobmvnx2bgKRvW95EawBgyPL7xBPqLKnu69l20Cnh0qrPBvrXES4vkyBiml0i2VoW6%2BPPMduoF%2B7P7LoeAzLx0hseIbtUOk8TjgO1ZSdhg4k9DxhFQh0jA0XHKSOTpnMP3Yg74GOqUBHrd10kSAluFJPXvFtFZ8kpOAR8BgosbYOigKP8h5e%2FOR9ANyJ1zKE0Hm4KC7Ifw8cBCCQVskMphGZzPwTQzLMV3ipkZPuMpA1bFQqhFQgWfTswNRA9l4IYeTTE264sTIDCm5b9fS1E1pS1zzNxaAPnbmlcVsiEkVh58Xp9ff9mEpsYb0jKwxrwX1QXJcZCixT5Lce6Hx62N9WIcRzL2m9%2FSffI9Y&X-Amz-Signature=e2e0dfe10fd81b8afbc8235ff4b9f70c014f84252f5765116e8d311ad73a4b00&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGQNSDMM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIH81nQ2a7u5wpuaZYtbi29KC8EHbkTxFxsjb5MRvy4evAiEA%2BorfgPofv8iaKQVovWHXi%2Bl9IIYjsygNLDuvTo40EXUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcnBVQzAstw0iSA5SrcA29T53GqSlhDoL%2BXHbJ4uiKPY%2BPfnFtETB2Ho%2FY3iY9vZd0hVs%2B6%2FtYywMI3aNYyYmmfIwD4F4rX47dbUR7T6%2F8N%2B0USZyBSqncNnIkIjxSfSL2%2Bh3VinrFhH456pEh4cLHlrMgUovMPjSh%2BsmWzyWpNBkq5wvd6E0a5hQbRIsHaau6AYA0SqkD2Cmx%2Bjj4zrj%2FYIiRcSpMXJl2phhsqrf%2Bkn6YfO07btXaTAhu9EySwkyXFMrelBUr3VkVpwkNXQxIAPY047TChZhEI8zKO3KNg40hA2zD8ia2ZQmCDg3tsCeaOtcc2J7XfR9gHzy%2FOTG34M47Uv7yI60hrcZH0K6csh%2FwBSPxxMFsPPPnwVaW8uOCgzyC5zSBehWQRIHnD8m3PcWe26RXb3x9SZ%2BeYwlXupis%2BXnjx3Cls7ljJnnt6mCPCmGO%2BsScIAOENWLoorvE5vPcllf8GATDO5JeabAcu66Om0TJHfVpduLAGyTtguO4KIFKAe8UZZY5FYrobmvnx2bgKRvW95EawBgyPL7xBPqLKnu69l20Cnh0qrPBvrXES4vkyBiml0i2VoW6%2BPPMduoF%2B7P7LoeAzLx0hseIbtUOk8TjgO1ZSdhg4k9DxhFQh0jA0XHKSOTpnMP3Yg74GOqUBHrd10kSAluFJPXvFtFZ8kpOAR8BgosbYOigKP8h5e%2FOR9ANyJ1zKE0Hm4KC7Ifw8cBCCQVskMphGZzPwTQzLMV3ipkZPuMpA1bFQqhFQgWfTswNRA9l4IYeTTE264sTIDCm5b9fS1E1pS1zzNxaAPnbmlcVsiEkVh58Xp9ff9mEpsYb0jKwxrwX1QXJcZCixT5Lce6Hx62N9WIcRzL2m9%2FSffI9Y&X-Amz-Signature=d1613627b72bbdd851e829ab530981c99aafd0a55d25092b782fc8317d0f3951&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGQNSDMM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIH81nQ2a7u5wpuaZYtbi29KC8EHbkTxFxsjb5MRvy4evAiEA%2BorfgPofv8iaKQVovWHXi%2Bl9IIYjsygNLDuvTo40EXUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcnBVQzAstw0iSA5SrcA29T53GqSlhDoL%2BXHbJ4uiKPY%2BPfnFtETB2Ho%2FY3iY9vZd0hVs%2B6%2FtYywMI3aNYyYmmfIwD4F4rX47dbUR7T6%2F8N%2B0USZyBSqncNnIkIjxSfSL2%2Bh3VinrFhH456pEh4cLHlrMgUovMPjSh%2BsmWzyWpNBkq5wvd6E0a5hQbRIsHaau6AYA0SqkD2Cmx%2Bjj4zrj%2FYIiRcSpMXJl2phhsqrf%2Bkn6YfO07btXaTAhu9EySwkyXFMrelBUr3VkVpwkNXQxIAPY047TChZhEI8zKO3KNg40hA2zD8ia2ZQmCDg3tsCeaOtcc2J7XfR9gHzy%2FOTG34M47Uv7yI60hrcZH0K6csh%2FwBSPxxMFsPPPnwVaW8uOCgzyC5zSBehWQRIHnD8m3PcWe26RXb3x9SZ%2BeYwlXupis%2BXnjx3Cls7ljJnnt6mCPCmGO%2BsScIAOENWLoorvE5vPcllf8GATDO5JeabAcu66Om0TJHfVpduLAGyTtguO4KIFKAe8UZZY5FYrobmvnx2bgKRvW95EawBgyPL7xBPqLKnu69l20Cnh0qrPBvrXES4vkyBiml0i2VoW6%2BPPMduoF%2B7P7LoeAzLx0hseIbtUOk8TjgO1ZSdhg4k9DxhFQh0jA0XHKSOTpnMP3Yg74GOqUBHrd10kSAluFJPXvFtFZ8kpOAR8BgosbYOigKP8h5e%2FOR9ANyJ1zKE0Hm4KC7Ifw8cBCCQVskMphGZzPwTQzLMV3ipkZPuMpA1bFQqhFQgWfTswNRA9l4IYeTTE264sTIDCm5b9fS1E1pS1zzNxaAPnbmlcVsiEkVh58Xp9ff9mEpsYb0jKwxrwX1QXJcZCixT5Lce6Hx62N9WIcRzL2m9%2FSffI9Y&X-Amz-Signature=95bfcaf0a8933554c6ec7db4cf5c248a8b32511ef617774f5cae68ffd795f624&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGQNSDMM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIH81nQ2a7u5wpuaZYtbi29KC8EHbkTxFxsjb5MRvy4evAiEA%2BorfgPofv8iaKQVovWHXi%2Bl9IIYjsygNLDuvTo40EXUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcnBVQzAstw0iSA5SrcA29T53GqSlhDoL%2BXHbJ4uiKPY%2BPfnFtETB2Ho%2FY3iY9vZd0hVs%2B6%2FtYywMI3aNYyYmmfIwD4F4rX47dbUR7T6%2F8N%2B0USZyBSqncNnIkIjxSfSL2%2Bh3VinrFhH456pEh4cLHlrMgUovMPjSh%2BsmWzyWpNBkq5wvd6E0a5hQbRIsHaau6AYA0SqkD2Cmx%2Bjj4zrj%2FYIiRcSpMXJl2phhsqrf%2Bkn6YfO07btXaTAhu9EySwkyXFMrelBUr3VkVpwkNXQxIAPY047TChZhEI8zKO3KNg40hA2zD8ia2ZQmCDg3tsCeaOtcc2J7XfR9gHzy%2FOTG34M47Uv7yI60hrcZH0K6csh%2FwBSPxxMFsPPPnwVaW8uOCgzyC5zSBehWQRIHnD8m3PcWe26RXb3x9SZ%2BeYwlXupis%2BXnjx3Cls7ljJnnt6mCPCmGO%2BsScIAOENWLoorvE5vPcllf8GATDO5JeabAcu66Om0TJHfVpduLAGyTtguO4KIFKAe8UZZY5FYrobmvnx2bgKRvW95EawBgyPL7xBPqLKnu69l20Cnh0qrPBvrXES4vkyBiml0i2VoW6%2BPPMduoF%2B7P7LoeAzLx0hseIbtUOk8TjgO1ZSdhg4k9DxhFQh0jA0XHKSOTpnMP3Yg74GOqUBHrd10kSAluFJPXvFtFZ8kpOAR8BgosbYOigKP8h5e%2FOR9ANyJ1zKE0Hm4KC7Ifw8cBCCQVskMphGZzPwTQzLMV3ipkZPuMpA1bFQqhFQgWfTswNRA9l4IYeTTE264sTIDCm5b9fS1E1pS1zzNxaAPnbmlcVsiEkVh58Xp9ff9mEpsYb0jKwxrwX1QXJcZCixT5Lce6Hx62N9WIcRzL2m9%2FSffI9Y&X-Amz-Signature=a8f8158a4d78e9b9de6f34191bc803f342a5084adcfa4b174fd4890157b3adcd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGQNSDMM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIH81nQ2a7u5wpuaZYtbi29KC8EHbkTxFxsjb5MRvy4evAiEA%2BorfgPofv8iaKQVovWHXi%2Bl9IIYjsygNLDuvTo40EXUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcnBVQzAstw0iSA5SrcA29T53GqSlhDoL%2BXHbJ4uiKPY%2BPfnFtETB2Ho%2FY3iY9vZd0hVs%2B6%2FtYywMI3aNYyYmmfIwD4F4rX47dbUR7T6%2F8N%2B0USZyBSqncNnIkIjxSfSL2%2Bh3VinrFhH456pEh4cLHlrMgUovMPjSh%2BsmWzyWpNBkq5wvd6E0a5hQbRIsHaau6AYA0SqkD2Cmx%2Bjj4zrj%2FYIiRcSpMXJl2phhsqrf%2Bkn6YfO07btXaTAhu9EySwkyXFMrelBUr3VkVpwkNXQxIAPY047TChZhEI8zKO3KNg40hA2zD8ia2ZQmCDg3tsCeaOtcc2J7XfR9gHzy%2FOTG34M47Uv7yI60hrcZH0K6csh%2FwBSPxxMFsPPPnwVaW8uOCgzyC5zSBehWQRIHnD8m3PcWe26RXb3x9SZ%2BeYwlXupis%2BXnjx3Cls7ljJnnt6mCPCmGO%2BsScIAOENWLoorvE5vPcllf8GATDO5JeabAcu66Om0TJHfVpduLAGyTtguO4KIFKAe8UZZY5FYrobmvnx2bgKRvW95EawBgyPL7xBPqLKnu69l20Cnh0qrPBvrXES4vkyBiml0i2VoW6%2BPPMduoF%2B7P7LoeAzLx0hseIbtUOk8TjgO1ZSdhg4k9DxhFQh0jA0XHKSOTpnMP3Yg74GOqUBHrd10kSAluFJPXvFtFZ8kpOAR8BgosbYOigKP8h5e%2FOR9ANyJ1zKE0Hm4KC7Ifw8cBCCQVskMphGZzPwTQzLMV3ipkZPuMpA1bFQqhFQgWfTswNRA9l4IYeTTE264sTIDCm5b9fS1E1pS1zzNxaAPnbmlcVsiEkVh58Xp9ff9mEpsYb0jKwxrwX1QXJcZCixT5Lce6Hx62N9WIcRzL2m9%2FSffI9Y&X-Amz-Signature=ea04b44480cc712b1061c32249ed2a64329fa8d2137252476f4fd69cc67ef723&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGQNSDMM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIH81nQ2a7u5wpuaZYtbi29KC8EHbkTxFxsjb5MRvy4evAiEA%2BorfgPofv8iaKQVovWHXi%2Bl9IIYjsygNLDuvTo40EXUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcnBVQzAstw0iSA5SrcA29T53GqSlhDoL%2BXHbJ4uiKPY%2BPfnFtETB2Ho%2FY3iY9vZd0hVs%2B6%2FtYywMI3aNYyYmmfIwD4F4rX47dbUR7T6%2F8N%2B0USZyBSqncNnIkIjxSfSL2%2Bh3VinrFhH456pEh4cLHlrMgUovMPjSh%2BsmWzyWpNBkq5wvd6E0a5hQbRIsHaau6AYA0SqkD2Cmx%2Bjj4zrj%2FYIiRcSpMXJl2phhsqrf%2Bkn6YfO07btXaTAhu9EySwkyXFMrelBUr3VkVpwkNXQxIAPY047TChZhEI8zKO3KNg40hA2zD8ia2ZQmCDg3tsCeaOtcc2J7XfR9gHzy%2FOTG34M47Uv7yI60hrcZH0K6csh%2FwBSPxxMFsPPPnwVaW8uOCgzyC5zSBehWQRIHnD8m3PcWe26RXb3x9SZ%2BeYwlXupis%2BXnjx3Cls7ljJnnt6mCPCmGO%2BsScIAOENWLoorvE5vPcllf8GATDO5JeabAcu66Om0TJHfVpduLAGyTtguO4KIFKAe8UZZY5FYrobmvnx2bgKRvW95EawBgyPL7xBPqLKnu69l20Cnh0qrPBvrXES4vkyBiml0i2VoW6%2BPPMduoF%2B7P7LoeAzLx0hseIbtUOk8TjgO1ZSdhg4k9DxhFQh0jA0XHKSOTpnMP3Yg74GOqUBHrd10kSAluFJPXvFtFZ8kpOAR8BgosbYOigKP8h5e%2FOR9ANyJ1zKE0Hm4KC7Ifw8cBCCQVskMphGZzPwTQzLMV3ipkZPuMpA1bFQqhFQgWfTswNRA9l4IYeTTE264sTIDCm5b9fS1E1pS1zzNxaAPnbmlcVsiEkVh58Xp9ff9mEpsYb0jKwxrwX1QXJcZCixT5Lce6Hx62N9WIcRzL2m9%2FSffI9Y&X-Amz-Signature=7a2236eb3df5a31dc9c4e03ed1cf1b20a13dc7b7485299be05239f9a2d4a2d3e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
