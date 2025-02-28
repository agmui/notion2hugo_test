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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QES5T3OA%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDkqmv%2FdkdSzl961i3oXoPE7%2BQpFFSkTZdqDrc01g7KLAiEAj1ar7%2B8uF3GEHcMiWjNaRl9MqSDhAUDWBXjJlx4OEpIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjDoPfnCAyLr9jCcSrcAyURNpjdQKUljHjEEf2TVgnbkshTA%2BDmSMltScXr72uoVMVYMN3dU7eK8sOcxpNROpmCaP%2FDVQM6l%2BqfMU0xu4OafqpGmYyf9xGTitGKkI1dkQjxAvCmzbztdNA9G4gYay%2FkqOozSVDVhCybw3NA%2B1Z9%2BasNu2pQEmVLRu2Qf243CxohbXcDK1U%2FEvu1RW2tX%2FGropMrg2us%2BYKqEILUNDhcJqujYaxwqsnAB1xY%2B%2BeQDKu%2FFoMGUp8mThgPoQeJh%2B1qYBdJT5NjqaR3lwqkw7g4zvmITyvhmxiOMmq5HFb8bruN9xIlNCmvwJXDUMjLf2f9y%2BIySpkpH9n45BpxzFefTB9tYtzFBbb%2BwN1Wc3aptfNX0Sbvr%2FK54DmWXyEl6twscyeqEmelADFr7ViWlQNPUerv0%2BtzRn%2Fe4HUsMIbEGJkm6TdGdFDyG1YpjM8pm9iLj1GXhh9JyFdm2h3zpx71sQYWQx%2BqAN5rH%2BcHkNB3CKaDxDIh3GySsStVV4r8yrUPQTxqeCKjzFxNkT19oCA%2Ft6nz9jSOa7C%2FWX5OXoMst9tSXoXLacJv3Jj0ah8wrhndcwM649ULeOxDDY3Jt0hJJqnkqPd4JsHxJGc0ms4PTm6pl7y6alP%2BN8ZwMOrRhL4GOqUB9c0T%2FwWP6%2FNiMWRBXMaTudqxZgTNtWSLui%2FjM2jR3CuH9w6UO%2F0efzGsfksl5TScaaDZ9%2FEs6j%2BA9UGAnbzX2ow1ezA8xPYTClEn7ESBbcSIb5BemUMQWnwsszRZWq2Y8uMtyP%2FfKfiU6Zl3u%2FegqwR2rHH9orRccYI87u8AVkCgi1FZSIMg14rzxva9AreSTPMyfI2pXVONMrSBzUPb%2FZG0zjdj&X-Amz-Signature=c7048abd3646dfe614263d84c09728ab0a846b3c6423887bff5f514fdbce5764&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QES5T3OA%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDkqmv%2FdkdSzl961i3oXoPE7%2BQpFFSkTZdqDrc01g7KLAiEAj1ar7%2B8uF3GEHcMiWjNaRl9MqSDhAUDWBXjJlx4OEpIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjDoPfnCAyLr9jCcSrcAyURNpjdQKUljHjEEf2TVgnbkshTA%2BDmSMltScXr72uoVMVYMN3dU7eK8sOcxpNROpmCaP%2FDVQM6l%2BqfMU0xu4OafqpGmYyf9xGTitGKkI1dkQjxAvCmzbztdNA9G4gYay%2FkqOozSVDVhCybw3NA%2B1Z9%2BasNu2pQEmVLRu2Qf243CxohbXcDK1U%2FEvu1RW2tX%2FGropMrg2us%2BYKqEILUNDhcJqujYaxwqsnAB1xY%2B%2BeQDKu%2FFoMGUp8mThgPoQeJh%2B1qYBdJT5NjqaR3lwqkw7g4zvmITyvhmxiOMmq5HFb8bruN9xIlNCmvwJXDUMjLf2f9y%2BIySpkpH9n45BpxzFefTB9tYtzFBbb%2BwN1Wc3aptfNX0Sbvr%2FK54DmWXyEl6twscyeqEmelADFr7ViWlQNPUerv0%2BtzRn%2Fe4HUsMIbEGJkm6TdGdFDyG1YpjM8pm9iLj1GXhh9JyFdm2h3zpx71sQYWQx%2BqAN5rH%2BcHkNB3CKaDxDIh3GySsStVV4r8yrUPQTxqeCKjzFxNkT19oCA%2Ft6nz9jSOa7C%2FWX5OXoMst9tSXoXLacJv3Jj0ah8wrhndcwM649ULeOxDDY3Jt0hJJqnkqPd4JsHxJGc0ms4PTm6pl7y6alP%2BN8ZwMOrRhL4GOqUB9c0T%2FwWP6%2FNiMWRBXMaTudqxZgTNtWSLui%2FjM2jR3CuH9w6UO%2F0efzGsfksl5TScaaDZ9%2FEs6j%2BA9UGAnbzX2ow1ezA8xPYTClEn7ESBbcSIb5BemUMQWnwsszRZWq2Y8uMtyP%2FfKfiU6Zl3u%2FegqwR2rHH9orRccYI87u8AVkCgi1FZSIMg14rzxva9AreSTPMyfI2pXVONMrSBzUPb%2FZG0zjdj&X-Amz-Signature=ae175fd21cc8c3219c95ec5418d1552e8334a72c3d213de3e0d8882e9dce4767&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QES5T3OA%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDkqmv%2FdkdSzl961i3oXoPE7%2BQpFFSkTZdqDrc01g7KLAiEAj1ar7%2B8uF3GEHcMiWjNaRl9MqSDhAUDWBXjJlx4OEpIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjDoPfnCAyLr9jCcSrcAyURNpjdQKUljHjEEf2TVgnbkshTA%2BDmSMltScXr72uoVMVYMN3dU7eK8sOcxpNROpmCaP%2FDVQM6l%2BqfMU0xu4OafqpGmYyf9xGTitGKkI1dkQjxAvCmzbztdNA9G4gYay%2FkqOozSVDVhCybw3NA%2B1Z9%2BasNu2pQEmVLRu2Qf243CxohbXcDK1U%2FEvu1RW2tX%2FGropMrg2us%2BYKqEILUNDhcJqujYaxwqsnAB1xY%2B%2BeQDKu%2FFoMGUp8mThgPoQeJh%2B1qYBdJT5NjqaR3lwqkw7g4zvmITyvhmxiOMmq5HFb8bruN9xIlNCmvwJXDUMjLf2f9y%2BIySpkpH9n45BpxzFefTB9tYtzFBbb%2BwN1Wc3aptfNX0Sbvr%2FK54DmWXyEl6twscyeqEmelADFr7ViWlQNPUerv0%2BtzRn%2Fe4HUsMIbEGJkm6TdGdFDyG1YpjM8pm9iLj1GXhh9JyFdm2h3zpx71sQYWQx%2BqAN5rH%2BcHkNB3CKaDxDIh3GySsStVV4r8yrUPQTxqeCKjzFxNkT19oCA%2Ft6nz9jSOa7C%2FWX5OXoMst9tSXoXLacJv3Jj0ah8wrhndcwM649ULeOxDDY3Jt0hJJqnkqPd4JsHxJGc0ms4PTm6pl7y6alP%2BN8ZwMOrRhL4GOqUB9c0T%2FwWP6%2FNiMWRBXMaTudqxZgTNtWSLui%2FjM2jR3CuH9w6UO%2F0efzGsfksl5TScaaDZ9%2FEs6j%2BA9UGAnbzX2ow1ezA8xPYTClEn7ESBbcSIb5BemUMQWnwsszRZWq2Y8uMtyP%2FfKfiU6Zl3u%2FegqwR2rHH9orRccYI87u8AVkCgi1FZSIMg14rzxva9AreSTPMyfI2pXVONMrSBzUPb%2FZG0zjdj&X-Amz-Signature=a21bbe027e6795f9c604d342972d05b388f923c8780a4774d14a56edf3547dbf&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QES5T3OA%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDkqmv%2FdkdSzl961i3oXoPE7%2BQpFFSkTZdqDrc01g7KLAiEAj1ar7%2B8uF3GEHcMiWjNaRl9MqSDhAUDWBXjJlx4OEpIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjDoPfnCAyLr9jCcSrcAyURNpjdQKUljHjEEf2TVgnbkshTA%2BDmSMltScXr72uoVMVYMN3dU7eK8sOcxpNROpmCaP%2FDVQM6l%2BqfMU0xu4OafqpGmYyf9xGTitGKkI1dkQjxAvCmzbztdNA9G4gYay%2FkqOozSVDVhCybw3NA%2B1Z9%2BasNu2pQEmVLRu2Qf243CxohbXcDK1U%2FEvu1RW2tX%2FGropMrg2us%2BYKqEILUNDhcJqujYaxwqsnAB1xY%2B%2BeQDKu%2FFoMGUp8mThgPoQeJh%2B1qYBdJT5NjqaR3lwqkw7g4zvmITyvhmxiOMmq5HFb8bruN9xIlNCmvwJXDUMjLf2f9y%2BIySpkpH9n45BpxzFefTB9tYtzFBbb%2BwN1Wc3aptfNX0Sbvr%2FK54DmWXyEl6twscyeqEmelADFr7ViWlQNPUerv0%2BtzRn%2Fe4HUsMIbEGJkm6TdGdFDyG1YpjM8pm9iLj1GXhh9JyFdm2h3zpx71sQYWQx%2BqAN5rH%2BcHkNB3CKaDxDIh3GySsStVV4r8yrUPQTxqeCKjzFxNkT19oCA%2Ft6nz9jSOa7C%2FWX5OXoMst9tSXoXLacJv3Jj0ah8wrhndcwM649ULeOxDDY3Jt0hJJqnkqPd4JsHxJGc0ms4PTm6pl7y6alP%2BN8ZwMOrRhL4GOqUB9c0T%2FwWP6%2FNiMWRBXMaTudqxZgTNtWSLui%2FjM2jR3CuH9w6UO%2F0efzGsfksl5TScaaDZ9%2FEs6j%2BA9UGAnbzX2ow1ezA8xPYTClEn7ESBbcSIb5BemUMQWnwsszRZWq2Y8uMtyP%2FfKfiU6Zl3u%2FegqwR2rHH9orRccYI87u8AVkCgi1FZSIMg14rzxva9AreSTPMyfI2pXVONMrSBzUPb%2FZG0zjdj&X-Amz-Signature=51ca3dd37be8cc5f9effa6f63d6a6189a0207ca2652147b9eecea420fc3b7beb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QES5T3OA%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDkqmv%2FdkdSzl961i3oXoPE7%2BQpFFSkTZdqDrc01g7KLAiEAj1ar7%2B8uF3GEHcMiWjNaRl9MqSDhAUDWBXjJlx4OEpIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjDoPfnCAyLr9jCcSrcAyURNpjdQKUljHjEEf2TVgnbkshTA%2BDmSMltScXr72uoVMVYMN3dU7eK8sOcxpNROpmCaP%2FDVQM6l%2BqfMU0xu4OafqpGmYyf9xGTitGKkI1dkQjxAvCmzbztdNA9G4gYay%2FkqOozSVDVhCybw3NA%2B1Z9%2BasNu2pQEmVLRu2Qf243CxohbXcDK1U%2FEvu1RW2tX%2FGropMrg2us%2BYKqEILUNDhcJqujYaxwqsnAB1xY%2B%2BeQDKu%2FFoMGUp8mThgPoQeJh%2B1qYBdJT5NjqaR3lwqkw7g4zvmITyvhmxiOMmq5HFb8bruN9xIlNCmvwJXDUMjLf2f9y%2BIySpkpH9n45BpxzFefTB9tYtzFBbb%2BwN1Wc3aptfNX0Sbvr%2FK54DmWXyEl6twscyeqEmelADFr7ViWlQNPUerv0%2BtzRn%2Fe4HUsMIbEGJkm6TdGdFDyG1YpjM8pm9iLj1GXhh9JyFdm2h3zpx71sQYWQx%2BqAN5rH%2BcHkNB3CKaDxDIh3GySsStVV4r8yrUPQTxqeCKjzFxNkT19oCA%2Ft6nz9jSOa7C%2FWX5OXoMst9tSXoXLacJv3Jj0ah8wrhndcwM649ULeOxDDY3Jt0hJJqnkqPd4JsHxJGc0ms4PTm6pl7y6alP%2BN8ZwMOrRhL4GOqUB9c0T%2FwWP6%2FNiMWRBXMaTudqxZgTNtWSLui%2FjM2jR3CuH9w6UO%2F0efzGsfksl5TScaaDZ9%2FEs6j%2BA9UGAnbzX2ow1ezA8xPYTClEn7ESBbcSIb5BemUMQWnwsszRZWq2Y8uMtyP%2FfKfiU6Zl3u%2FegqwR2rHH9orRccYI87u8AVkCgi1FZSIMg14rzxva9AreSTPMyfI2pXVONMrSBzUPb%2FZG0zjdj&X-Amz-Signature=d79ccc7fed3d5a98346a458b63c16267c9745316483da4743896bfbada3860e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QES5T3OA%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDkqmv%2FdkdSzl961i3oXoPE7%2BQpFFSkTZdqDrc01g7KLAiEAj1ar7%2B8uF3GEHcMiWjNaRl9MqSDhAUDWBXjJlx4OEpIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjDoPfnCAyLr9jCcSrcAyURNpjdQKUljHjEEf2TVgnbkshTA%2BDmSMltScXr72uoVMVYMN3dU7eK8sOcxpNROpmCaP%2FDVQM6l%2BqfMU0xu4OafqpGmYyf9xGTitGKkI1dkQjxAvCmzbztdNA9G4gYay%2FkqOozSVDVhCybw3NA%2B1Z9%2BasNu2pQEmVLRu2Qf243CxohbXcDK1U%2FEvu1RW2tX%2FGropMrg2us%2BYKqEILUNDhcJqujYaxwqsnAB1xY%2B%2BeQDKu%2FFoMGUp8mThgPoQeJh%2B1qYBdJT5NjqaR3lwqkw7g4zvmITyvhmxiOMmq5HFb8bruN9xIlNCmvwJXDUMjLf2f9y%2BIySpkpH9n45BpxzFefTB9tYtzFBbb%2BwN1Wc3aptfNX0Sbvr%2FK54DmWXyEl6twscyeqEmelADFr7ViWlQNPUerv0%2BtzRn%2Fe4HUsMIbEGJkm6TdGdFDyG1YpjM8pm9iLj1GXhh9JyFdm2h3zpx71sQYWQx%2BqAN5rH%2BcHkNB3CKaDxDIh3GySsStVV4r8yrUPQTxqeCKjzFxNkT19oCA%2Ft6nz9jSOa7C%2FWX5OXoMst9tSXoXLacJv3Jj0ah8wrhndcwM649ULeOxDDY3Jt0hJJqnkqPd4JsHxJGc0ms4PTm6pl7y6alP%2BN8ZwMOrRhL4GOqUB9c0T%2FwWP6%2FNiMWRBXMaTudqxZgTNtWSLui%2FjM2jR3CuH9w6UO%2F0efzGsfksl5TScaaDZ9%2FEs6j%2BA9UGAnbzX2ow1ezA8xPYTClEn7ESBbcSIb5BemUMQWnwsszRZWq2Y8uMtyP%2FfKfiU6Zl3u%2FegqwR2rHH9orRccYI87u8AVkCgi1FZSIMg14rzxva9AreSTPMyfI2pXVONMrSBzUPb%2FZG0zjdj&X-Amz-Signature=88e00669686dc8fa055d5c0491c678bed6a0b78206ecbd8b76cf6a4bb0762c4b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QES5T3OA%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDkqmv%2FdkdSzl961i3oXoPE7%2BQpFFSkTZdqDrc01g7KLAiEAj1ar7%2B8uF3GEHcMiWjNaRl9MqSDhAUDWBXjJlx4OEpIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjDoPfnCAyLr9jCcSrcAyURNpjdQKUljHjEEf2TVgnbkshTA%2BDmSMltScXr72uoVMVYMN3dU7eK8sOcxpNROpmCaP%2FDVQM6l%2BqfMU0xu4OafqpGmYyf9xGTitGKkI1dkQjxAvCmzbztdNA9G4gYay%2FkqOozSVDVhCybw3NA%2B1Z9%2BasNu2pQEmVLRu2Qf243CxohbXcDK1U%2FEvu1RW2tX%2FGropMrg2us%2BYKqEILUNDhcJqujYaxwqsnAB1xY%2B%2BeQDKu%2FFoMGUp8mThgPoQeJh%2B1qYBdJT5NjqaR3lwqkw7g4zvmITyvhmxiOMmq5HFb8bruN9xIlNCmvwJXDUMjLf2f9y%2BIySpkpH9n45BpxzFefTB9tYtzFBbb%2BwN1Wc3aptfNX0Sbvr%2FK54DmWXyEl6twscyeqEmelADFr7ViWlQNPUerv0%2BtzRn%2Fe4HUsMIbEGJkm6TdGdFDyG1YpjM8pm9iLj1GXhh9JyFdm2h3zpx71sQYWQx%2BqAN5rH%2BcHkNB3CKaDxDIh3GySsStVV4r8yrUPQTxqeCKjzFxNkT19oCA%2Ft6nz9jSOa7C%2FWX5OXoMst9tSXoXLacJv3Jj0ah8wrhndcwM649ULeOxDDY3Jt0hJJqnkqPd4JsHxJGc0ms4PTm6pl7y6alP%2BN8ZwMOrRhL4GOqUB9c0T%2FwWP6%2FNiMWRBXMaTudqxZgTNtWSLui%2FjM2jR3CuH9w6UO%2F0efzGsfksl5TScaaDZ9%2FEs6j%2BA9UGAnbzX2ow1ezA8xPYTClEn7ESBbcSIb5BemUMQWnwsszRZWq2Y8uMtyP%2FfKfiU6Zl3u%2FegqwR2rHH9orRccYI87u8AVkCgi1FZSIMg14rzxva9AreSTPMyfI2pXVONMrSBzUPb%2FZG0zjdj&X-Amz-Signature=df37eb4e71c74a809183d520f12108cc8d07cb4b888a46677a909e5244af824f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QES5T3OA%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDkqmv%2FdkdSzl961i3oXoPE7%2BQpFFSkTZdqDrc01g7KLAiEAj1ar7%2B8uF3GEHcMiWjNaRl9MqSDhAUDWBXjJlx4OEpIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjDoPfnCAyLr9jCcSrcAyURNpjdQKUljHjEEf2TVgnbkshTA%2BDmSMltScXr72uoVMVYMN3dU7eK8sOcxpNROpmCaP%2FDVQM6l%2BqfMU0xu4OafqpGmYyf9xGTitGKkI1dkQjxAvCmzbztdNA9G4gYay%2FkqOozSVDVhCybw3NA%2B1Z9%2BasNu2pQEmVLRu2Qf243CxohbXcDK1U%2FEvu1RW2tX%2FGropMrg2us%2BYKqEILUNDhcJqujYaxwqsnAB1xY%2B%2BeQDKu%2FFoMGUp8mThgPoQeJh%2B1qYBdJT5NjqaR3lwqkw7g4zvmITyvhmxiOMmq5HFb8bruN9xIlNCmvwJXDUMjLf2f9y%2BIySpkpH9n45BpxzFefTB9tYtzFBbb%2BwN1Wc3aptfNX0Sbvr%2FK54DmWXyEl6twscyeqEmelADFr7ViWlQNPUerv0%2BtzRn%2Fe4HUsMIbEGJkm6TdGdFDyG1YpjM8pm9iLj1GXhh9JyFdm2h3zpx71sQYWQx%2BqAN5rH%2BcHkNB3CKaDxDIh3GySsStVV4r8yrUPQTxqeCKjzFxNkT19oCA%2Ft6nz9jSOa7C%2FWX5OXoMst9tSXoXLacJv3Jj0ah8wrhndcwM649ULeOxDDY3Jt0hJJqnkqPd4JsHxJGc0ms4PTm6pl7y6alP%2BN8ZwMOrRhL4GOqUB9c0T%2FwWP6%2FNiMWRBXMaTudqxZgTNtWSLui%2FjM2jR3CuH9w6UO%2F0efzGsfksl5TScaaDZ9%2FEs6j%2BA9UGAnbzX2ow1ezA8xPYTClEn7ESBbcSIb5BemUMQWnwsszRZWq2Y8uMtyP%2FfKfiU6Zl3u%2FegqwR2rHH9orRccYI87u8AVkCgi1FZSIMg14rzxva9AreSTPMyfI2pXVONMrSBzUPb%2FZG0zjdj&X-Amz-Signature=dab20e714cb1bdf6ce2f5e37f05518efee4a97b0204c0757a56b2c62c1fbfde7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
