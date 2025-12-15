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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL5SEF5H%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDCfDVKREASijFK87%2FQ%2BEuEQo54cDJwFjBLVPqeNvB5nAIgVoN%2FMeN98oElJu0l%2B9NiDst8%2BQutQGHyfC3f8wSTDeoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDILlmz%2F0iRTTxikagSrcA%2FjaDfkKT4E6i5H4G0LwQ7%2FfoxkpuSvxoAD4PUHjMnWHfIN9vv6GirBTz7nUphH2RPqSdkNWrMMSGIfursuEY7p6TflSMUKtpGkJJNScwTvjs5ZP%2BaW%2BS6%2BbpV2RNpaFdQxEyjdgJ82ExYFmqtaaPFJ%2F%2BeHUH2de0rBgLIYBsgZhsNRQQWXuaQ44o%2FU4gg%2FvKhjF1f7sOHWuZAtOmTqwrQJyfcQAGBC6sMJx%2FBevA8KcPWHdbDa5u3Pok4fJ5MxEi%2FD0i2erTrwcmbDeXBpkQ0zEj2IbpUp97xa%2FbWFPpyRisIeATjeZ6FMqUMrI5UU3J7zOyy55FZBUdyVgUOwiqfH7PJ4TdrYT%2BidIrqlCb%2BTnrrCxffUk5WWkTkgZy0dgKIiwNkY5B1peNU3LGdGLDhDDBBZZ5HhQYqNDuL3C8OPvtZ2jF8254nIH7T9XRF7uLDAx2eqxbHPa3rwsqYCFH0IBTT7TAjQTRgyF0daNurPQmP9c9w%2FGA58TJ1pazbeiqkhjq74dne7t5iEmKgHvh%2FDpXuAbCslgIJoKf6hcDbIHYmOPyTE7rTt7jqBDmkoJ68%2F4l6l1L%2Fqm7yPo519byexhFbdzNWyu3CcxedjOumvPgqdygmBWr3zugBasMNra%2FMkGOqUBYVj8niw4ZpUJedTQI8gL4SSyPGnP%2Bo787%2BYYS6c4FFm4BAXwzTsJTZ4t%2BOdMevCq3UWKjpbflMX7f0RKlnzxJ0FZde7MEL9m88PkcJEPtusOUq%2BjqPV0Ov8wkWlZkO0nEGLVIhKWcYXIJtO8D8K92YYuyF6Da%2FOBLz9N0J38y128h5swJdWTjA1gTFGUpLhafi6Mg1X%2BDRoyGHnmwwDB4FhJLpkd&X-Amz-Signature=db7410ac4007282c54e83d61129b3bfeda9ed3be7830a20bf811f71ef868086b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL5SEF5H%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDCfDVKREASijFK87%2FQ%2BEuEQo54cDJwFjBLVPqeNvB5nAIgVoN%2FMeN98oElJu0l%2B9NiDst8%2BQutQGHyfC3f8wSTDeoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDILlmz%2F0iRTTxikagSrcA%2FjaDfkKT4E6i5H4G0LwQ7%2FfoxkpuSvxoAD4PUHjMnWHfIN9vv6GirBTz7nUphH2RPqSdkNWrMMSGIfursuEY7p6TflSMUKtpGkJJNScwTvjs5ZP%2BaW%2BS6%2BbpV2RNpaFdQxEyjdgJ82ExYFmqtaaPFJ%2F%2BeHUH2de0rBgLIYBsgZhsNRQQWXuaQ44o%2FU4gg%2FvKhjF1f7sOHWuZAtOmTqwrQJyfcQAGBC6sMJx%2FBevA8KcPWHdbDa5u3Pok4fJ5MxEi%2FD0i2erTrwcmbDeXBpkQ0zEj2IbpUp97xa%2FbWFPpyRisIeATjeZ6FMqUMrI5UU3J7zOyy55FZBUdyVgUOwiqfH7PJ4TdrYT%2BidIrqlCb%2BTnrrCxffUk5WWkTkgZy0dgKIiwNkY5B1peNU3LGdGLDhDDBBZZ5HhQYqNDuL3C8OPvtZ2jF8254nIH7T9XRF7uLDAx2eqxbHPa3rwsqYCFH0IBTT7TAjQTRgyF0daNurPQmP9c9w%2FGA58TJ1pazbeiqkhjq74dne7t5iEmKgHvh%2FDpXuAbCslgIJoKf6hcDbIHYmOPyTE7rTt7jqBDmkoJ68%2F4l6l1L%2Fqm7yPo519byexhFbdzNWyu3CcxedjOumvPgqdygmBWr3zugBasMNra%2FMkGOqUBYVj8niw4ZpUJedTQI8gL4SSyPGnP%2Bo787%2BYYS6c4FFm4BAXwzTsJTZ4t%2BOdMevCq3UWKjpbflMX7f0RKlnzxJ0FZde7MEL9m88PkcJEPtusOUq%2BjqPV0Ov8wkWlZkO0nEGLVIhKWcYXIJtO8D8K92YYuyF6Da%2FOBLz9N0J38y128h5swJdWTjA1gTFGUpLhafi6Mg1X%2BDRoyGHnmwwDB4FhJLpkd&X-Amz-Signature=54862d9a511449686451f7a3e46ef972b2ffbebd27aeeba0acf73f16152f898e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL5SEF5H%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDCfDVKREASijFK87%2FQ%2BEuEQo54cDJwFjBLVPqeNvB5nAIgVoN%2FMeN98oElJu0l%2B9NiDst8%2BQutQGHyfC3f8wSTDeoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDILlmz%2F0iRTTxikagSrcA%2FjaDfkKT4E6i5H4G0LwQ7%2FfoxkpuSvxoAD4PUHjMnWHfIN9vv6GirBTz7nUphH2RPqSdkNWrMMSGIfursuEY7p6TflSMUKtpGkJJNScwTvjs5ZP%2BaW%2BS6%2BbpV2RNpaFdQxEyjdgJ82ExYFmqtaaPFJ%2F%2BeHUH2de0rBgLIYBsgZhsNRQQWXuaQ44o%2FU4gg%2FvKhjF1f7sOHWuZAtOmTqwrQJyfcQAGBC6sMJx%2FBevA8KcPWHdbDa5u3Pok4fJ5MxEi%2FD0i2erTrwcmbDeXBpkQ0zEj2IbpUp97xa%2FbWFPpyRisIeATjeZ6FMqUMrI5UU3J7zOyy55FZBUdyVgUOwiqfH7PJ4TdrYT%2BidIrqlCb%2BTnrrCxffUk5WWkTkgZy0dgKIiwNkY5B1peNU3LGdGLDhDDBBZZ5HhQYqNDuL3C8OPvtZ2jF8254nIH7T9XRF7uLDAx2eqxbHPa3rwsqYCFH0IBTT7TAjQTRgyF0daNurPQmP9c9w%2FGA58TJ1pazbeiqkhjq74dne7t5iEmKgHvh%2FDpXuAbCslgIJoKf6hcDbIHYmOPyTE7rTt7jqBDmkoJ68%2F4l6l1L%2Fqm7yPo519byexhFbdzNWyu3CcxedjOumvPgqdygmBWr3zugBasMNra%2FMkGOqUBYVj8niw4ZpUJedTQI8gL4SSyPGnP%2Bo787%2BYYS6c4FFm4BAXwzTsJTZ4t%2BOdMevCq3UWKjpbflMX7f0RKlnzxJ0FZde7MEL9m88PkcJEPtusOUq%2BjqPV0Ov8wkWlZkO0nEGLVIhKWcYXIJtO8D8K92YYuyF6Da%2FOBLz9N0J38y128h5swJdWTjA1gTFGUpLhafi6Mg1X%2BDRoyGHnmwwDB4FhJLpkd&X-Amz-Signature=406de5e35c33104df3cedc01284e2fd9a5f20158c89ec1ca7640e96b587cb728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL5SEF5H%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDCfDVKREASijFK87%2FQ%2BEuEQo54cDJwFjBLVPqeNvB5nAIgVoN%2FMeN98oElJu0l%2B9NiDst8%2BQutQGHyfC3f8wSTDeoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDILlmz%2F0iRTTxikagSrcA%2FjaDfkKT4E6i5H4G0LwQ7%2FfoxkpuSvxoAD4PUHjMnWHfIN9vv6GirBTz7nUphH2RPqSdkNWrMMSGIfursuEY7p6TflSMUKtpGkJJNScwTvjs5ZP%2BaW%2BS6%2BbpV2RNpaFdQxEyjdgJ82ExYFmqtaaPFJ%2F%2BeHUH2de0rBgLIYBsgZhsNRQQWXuaQ44o%2FU4gg%2FvKhjF1f7sOHWuZAtOmTqwrQJyfcQAGBC6sMJx%2FBevA8KcPWHdbDa5u3Pok4fJ5MxEi%2FD0i2erTrwcmbDeXBpkQ0zEj2IbpUp97xa%2FbWFPpyRisIeATjeZ6FMqUMrI5UU3J7zOyy55FZBUdyVgUOwiqfH7PJ4TdrYT%2BidIrqlCb%2BTnrrCxffUk5WWkTkgZy0dgKIiwNkY5B1peNU3LGdGLDhDDBBZZ5HhQYqNDuL3C8OPvtZ2jF8254nIH7T9XRF7uLDAx2eqxbHPa3rwsqYCFH0IBTT7TAjQTRgyF0daNurPQmP9c9w%2FGA58TJ1pazbeiqkhjq74dne7t5iEmKgHvh%2FDpXuAbCslgIJoKf6hcDbIHYmOPyTE7rTt7jqBDmkoJ68%2F4l6l1L%2Fqm7yPo519byexhFbdzNWyu3CcxedjOumvPgqdygmBWr3zugBasMNra%2FMkGOqUBYVj8niw4ZpUJedTQI8gL4SSyPGnP%2Bo787%2BYYS6c4FFm4BAXwzTsJTZ4t%2BOdMevCq3UWKjpbflMX7f0RKlnzxJ0FZde7MEL9m88PkcJEPtusOUq%2BjqPV0Ov8wkWlZkO0nEGLVIhKWcYXIJtO8D8K92YYuyF6Da%2FOBLz9N0J38y128h5swJdWTjA1gTFGUpLhafi6Mg1X%2BDRoyGHnmwwDB4FhJLpkd&X-Amz-Signature=599d13e98a99947623b07663b8cc2bb007644830dd898532b34f0abc3bebfca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL5SEF5H%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDCfDVKREASijFK87%2FQ%2BEuEQo54cDJwFjBLVPqeNvB5nAIgVoN%2FMeN98oElJu0l%2B9NiDst8%2BQutQGHyfC3f8wSTDeoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDILlmz%2F0iRTTxikagSrcA%2FjaDfkKT4E6i5H4G0LwQ7%2FfoxkpuSvxoAD4PUHjMnWHfIN9vv6GirBTz7nUphH2RPqSdkNWrMMSGIfursuEY7p6TflSMUKtpGkJJNScwTvjs5ZP%2BaW%2BS6%2BbpV2RNpaFdQxEyjdgJ82ExYFmqtaaPFJ%2F%2BeHUH2de0rBgLIYBsgZhsNRQQWXuaQ44o%2FU4gg%2FvKhjF1f7sOHWuZAtOmTqwrQJyfcQAGBC6sMJx%2FBevA8KcPWHdbDa5u3Pok4fJ5MxEi%2FD0i2erTrwcmbDeXBpkQ0zEj2IbpUp97xa%2FbWFPpyRisIeATjeZ6FMqUMrI5UU3J7zOyy55FZBUdyVgUOwiqfH7PJ4TdrYT%2BidIrqlCb%2BTnrrCxffUk5WWkTkgZy0dgKIiwNkY5B1peNU3LGdGLDhDDBBZZ5HhQYqNDuL3C8OPvtZ2jF8254nIH7T9XRF7uLDAx2eqxbHPa3rwsqYCFH0IBTT7TAjQTRgyF0daNurPQmP9c9w%2FGA58TJ1pazbeiqkhjq74dne7t5iEmKgHvh%2FDpXuAbCslgIJoKf6hcDbIHYmOPyTE7rTt7jqBDmkoJ68%2F4l6l1L%2Fqm7yPo519byexhFbdzNWyu3CcxedjOumvPgqdygmBWr3zugBasMNra%2FMkGOqUBYVj8niw4ZpUJedTQI8gL4SSyPGnP%2Bo787%2BYYS6c4FFm4BAXwzTsJTZ4t%2BOdMevCq3UWKjpbflMX7f0RKlnzxJ0FZde7MEL9m88PkcJEPtusOUq%2BjqPV0Ov8wkWlZkO0nEGLVIhKWcYXIJtO8D8K92YYuyF6Da%2FOBLz9N0J38y128h5swJdWTjA1gTFGUpLhafi6Mg1X%2BDRoyGHnmwwDB4FhJLpkd&X-Amz-Signature=7d2c39bf32f93c0f7f7d462f0af10d65309c6c62ef77a2e2daa4bcbb1080a8da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL5SEF5H%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDCfDVKREASijFK87%2FQ%2BEuEQo54cDJwFjBLVPqeNvB5nAIgVoN%2FMeN98oElJu0l%2B9NiDst8%2BQutQGHyfC3f8wSTDeoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDILlmz%2F0iRTTxikagSrcA%2FjaDfkKT4E6i5H4G0LwQ7%2FfoxkpuSvxoAD4PUHjMnWHfIN9vv6GirBTz7nUphH2RPqSdkNWrMMSGIfursuEY7p6TflSMUKtpGkJJNScwTvjs5ZP%2BaW%2BS6%2BbpV2RNpaFdQxEyjdgJ82ExYFmqtaaPFJ%2F%2BeHUH2de0rBgLIYBsgZhsNRQQWXuaQ44o%2FU4gg%2FvKhjF1f7sOHWuZAtOmTqwrQJyfcQAGBC6sMJx%2FBevA8KcPWHdbDa5u3Pok4fJ5MxEi%2FD0i2erTrwcmbDeXBpkQ0zEj2IbpUp97xa%2FbWFPpyRisIeATjeZ6FMqUMrI5UU3J7zOyy55FZBUdyVgUOwiqfH7PJ4TdrYT%2BidIrqlCb%2BTnrrCxffUk5WWkTkgZy0dgKIiwNkY5B1peNU3LGdGLDhDDBBZZ5HhQYqNDuL3C8OPvtZ2jF8254nIH7T9XRF7uLDAx2eqxbHPa3rwsqYCFH0IBTT7TAjQTRgyF0daNurPQmP9c9w%2FGA58TJ1pazbeiqkhjq74dne7t5iEmKgHvh%2FDpXuAbCslgIJoKf6hcDbIHYmOPyTE7rTt7jqBDmkoJ68%2F4l6l1L%2Fqm7yPo519byexhFbdzNWyu3CcxedjOumvPgqdygmBWr3zugBasMNra%2FMkGOqUBYVj8niw4ZpUJedTQI8gL4SSyPGnP%2Bo787%2BYYS6c4FFm4BAXwzTsJTZ4t%2BOdMevCq3UWKjpbflMX7f0RKlnzxJ0FZde7MEL9m88PkcJEPtusOUq%2BjqPV0Ov8wkWlZkO0nEGLVIhKWcYXIJtO8D8K92YYuyF6Da%2FOBLz9N0J38y128h5swJdWTjA1gTFGUpLhafi6Mg1X%2BDRoyGHnmwwDB4FhJLpkd&X-Amz-Signature=23023120fef42c95984954c1cb31dc0e7045200570cb765ecb8c0b9d1e46b677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL5SEF5H%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDCfDVKREASijFK87%2FQ%2BEuEQo54cDJwFjBLVPqeNvB5nAIgVoN%2FMeN98oElJu0l%2B9NiDst8%2BQutQGHyfC3f8wSTDeoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDILlmz%2F0iRTTxikagSrcA%2FjaDfkKT4E6i5H4G0LwQ7%2FfoxkpuSvxoAD4PUHjMnWHfIN9vv6GirBTz7nUphH2RPqSdkNWrMMSGIfursuEY7p6TflSMUKtpGkJJNScwTvjs5ZP%2BaW%2BS6%2BbpV2RNpaFdQxEyjdgJ82ExYFmqtaaPFJ%2F%2BeHUH2de0rBgLIYBsgZhsNRQQWXuaQ44o%2FU4gg%2FvKhjF1f7sOHWuZAtOmTqwrQJyfcQAGBC6sMJx%2FBevA8KcPWHdbDa5u3Pok4fJ5MxEi%2FD0i2erTrwcmbDeXBpkQ0zEj2IbpUp97xa%2FbWFPpyRisIeATjeZ6FMqUMrI5UU3J7zOyy55FZBUdyVgUOwiqfH7PJ4TdrYT%2BidIrqlCb%2BTnrrCxffUk5WWkTkgZy0dgKIiwNkY5B1peNU3LGdGLDhDDBBZZ5HhQYqNDuL3C8OPvtZ2jF8254nIH7T9XRF7uLDAx2eqxbHPa3rwsqYCFH0IBTT7TAjQTRgyF0daNurPQmP9c9w%2FGA58TJ1pazbeiqkhjq74dne7t5iEmKgHvh%2FDpXuAbCslgIJoKf6hcDbIHYmOPyTE7rTt7jqBDmkoJ68%2F4l6l1L%2Fqm7yPo519byexhFbdzNWyu3CcxedjOumvPgqdygmBWr3zugBasMNra%2FMkGOqUBYVj8niw4ZpUJedTQI8gL4SSyPGnP%2Bo787%2BYYS6c4FFm4BAXwzTsJTZ4t%2BOdMevCq3UWKjpbflMX7f0RKlnzxJ0FZde7MEL9m88PkcJEPtusOUq%2BjqPV0Ov8wkWlZkO0nEGLVIhKWcYXIJtO8D8K92YYuyF6Da%2FOBLz9N0J38y128h5swJdWTjA1gTFGUpLhafi6Mg1X%2BDRoyGHnmwwDB4FhJLpkd&X-Amz-Signature=95747bddf2c60d31b4041349b9dd7a415205f6091b083a0a575c93d0c7ded396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL5SEF5H%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDCfDVKREASijFK87%2FQ%2BEuEQo54cDJwFjBLVPqeNvB5nAIgVoN%2FMeN98oElJu0l%2B9NiDst8%2BQutQGHyfC3f8wSTDeoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDILlmz%2F0iRTTxikagSrcA%2FjaDfkKT4E6i5H4G0LwQ7%2FfoxkpuSvxoAD4PUHjMnWHfIN9vv6GirBTz7nUphH2RPqSdkNWrMMSGIfursuEY7p6TflSMUKtpGkJJNScwTvjs5ZP%2BaW%2BS6%2BbpV2RNpaFdQxEyjdgJ82ExYFmqtaaPFJ%2F%2BeHUH2de0rBgLIYBsgZhsNRQQWXuaQ44o%2FU4gg%2FvKhjF1f7sOHWuZAtOmTqwrQJyfcQAGBC6sMJx%2FBevA8KcPWHdbDa5u3Pok4fJ5MxEi%2FD0i2erTrwcmbDeXBpkQ0zEj2IbpUp97xa%2FbWFPpyRisIeATjeZ6FMqUMrI5UU3J7zOyy55FZBUdyVgUOwiqfH7PJ4TdrYT%2BidIrqlCb%2BTnrrCxffUk5WWkTkgZy0dgKIiwNkY5B1peNU3LGdGLDhDDBBZZ5HhQYqNDuL3C8OPvtZ2jF8254nIH7T9XRF7uLDAx2eqxbHPa3rwsqYCFH0IBTT7TAjQTRgyF0daNurPQmP9c9w%2FGA58TJ1pazbeiqkhjq74dne7t5iEmKgHvh%2FDpXuAbCslgIJoKf6hcDbIHYmOPyTE7rTt7jqBDmkoJ68%2F4l6l1L%2Fqm7yPo519byexhFbdzNWyu3CcxedjOumvPgqdygmBWr3zugBasMNra%2FMkGOqUBYVj8niw4ZpUJedTQI8gL4SSyPGnP%2Bo787%2BYYS6c4FFm4BAXwzTsJTZ4t%2BOdMevCq3UWKjpbflMX7f0RKlnzxJ0FZde7MEL9m88PkcJEPtusOUq%2BjqPV0Ov8wkWlZkO0nEGLVIhKWcYXIJtO8D8K92YYuyF6Da%2FOBLz9N0J38y128h5swJdWTjA1gTFGUpLhafi6Mg1X%2BDRoyGHnmwwDB4FhJLpkd&X-Amz-Signature=b90081abfc7575fdab4bebaeea61dce3864b79dd4adb3040716f914f277ded59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
