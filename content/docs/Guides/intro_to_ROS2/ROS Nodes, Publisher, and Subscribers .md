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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQLSGB47%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCInQ%2BRHXjFCHZi1eTtS6kWb2Pr0J3%2BJ9O28uhfg7ETLQIgLLILwUjHEb4peErKipnxm9%2Be0BTUFwg%2FuwEADpv3Qroq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDJZUqQ5zyC6IU6f%2BfyrcAwZSxRevujlzqW0BB8AM8n5BlCSqQj9qmRmfyU9nIvxAe3CVfoMJ7neu7NvtjZKdSArEjBRk5IubCkgTe%2B8FV%2BVU7XQAxms5OiSP7rVTaWW%2B5hBahI1v%2FKlw2s5JyuozLMnS5SYJffrObyYLEMc58kvyZMnveMij%2BG7VxemWdVSTSQLRTLXbF5yPLAB0WRYMBZbNEIcCs1oEnE24iM%2B7uu3J%2FXuv9kWObvB3SPhXlSVfrUbudPS%2F3Sc2EvnBFEQr01bJKMsG7meslJoqxHxFrW%2Bo0cZcOO5AByag1mmSUuz6%2FSjBLTJDo98JllPxm3yixVeQ6JcVpzxYKrbYKhG5VEpr69Fq83LcCW1M24%2B95mjas2AGfaLa4dd8AGb0PKGvXvGBwCt7XnL%2FTAIYEPTkS76vPdzRuYOPOOVFKhHlGP3PNg900N%2Bm366jayrofD99vJOHjwd6qGwX%2FNOxPGdtwHjsI2DdF4%2F55E%2BN02bdLoBIF7YaMuT85hTPsM2iChBeTrvWk%2B6GCv2jzBTCQuH0xajlERLzOGoLW3UTlhVafQBilUgLtTDcVUoWRnI6lDSmKrNBZ7AcwdAEuws9kq7S1k4ebdSVg9JROG5TjKf%2Bv3vozlYsTd3H%2FQJauomRMLL2t8IGOqUBGEMQDJY%2FMr5NifDjONQTMCqFXDnlE7joUlS7S8VdVjvZ3wIJky52LIO4p74t7j4vBynpLsvCKogmT3bWb1qkPtcbJmMbZHP6ePMRHtSCxQdJ72k3UPP08YomEy7FqLz7yDksW58Nw2c0AGg537nWa5uq%2Ff8LR3b2VO6osf5DeXhnDbb%2Bj4fg6uSCawumy9KHqNm30R7EjMZmFOargZyMjkCg4G0g&X-Amz-Signature=a5f1e9cacf1dcdbdc3a540d5447ec1cb18d92b0b5a2702af157c227c14db20c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQLSGB47%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCInQ%2BRHXjFCHZi1eTtS6kWb2Pr0J3%2BJ9O28uhfg7ETLQIgLLILwUjHEb4peErKipnxm9%2Be0BTUFwg%2FuwEADpv3Qroq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDJZUqQ5zyC6IU6f%2BfyrcAwZSxRevujlzqW0BB8AM8n5BlCSqQj9qmRmfyU9nIvxAe3CVfoMJ7neu7NvtjZKdSArEjBRk5IubCkgTe%2B8FV%2BVU7XQAxms5OiSP7rVTaWW%2B5hBahI1v%2FKlw2s5JyuozLMnS5SYJffrObyYLEMc58kvyZMnveMij%2BG7VxemWdVSTSQLRTLXbF5yPLAB0WRYMBZbNEIcCs1oEnE24iM%2B7uu3J%2FXuv9kWObvB3SPhXlSVfrUbudPS%2F3Sc2EvnBFEQr01bJKMsG7meslJoqxHxFrW%2Bo0cZcOO5AByag1mmSUuz6%2FSjBLTJDo98JllPxm3yixVeQ6JcVpzxYKrbYKhG5VEpr69Fq83LcCW1M24%2B95mjas2AGfaLa4dd8AGb0PKGvXvGBwCt7XnL%2FTAIYEPTkS76vPdzRuYOPOOVFKhHlGP3PNg900N%2Bm366jayrofD99vJOHjwd6qGwX%2FNOxPGdtwHjsI2DdF4%2F55E%2BN02bdLoBIF7YaMuT85hTPsM2iChBeTrvWk%2B6GCv2jzBTCQuH0xajlERLzOGoLW3UTlhVafQBilUgLtTDcVUoWRnI6lDSmKrNBZ7AcwdAEuws9kq7S1k4ebdSVg9JROG5TjKf%2Bv3vozlYsTd3H%2FQJauomRMLL2t8IGOqUBGEMQDJY%2FMr5NifDjONQTMCqFXDnlE7joUlS7S8VdVjvZ3wIJky52LIO4p74t7j4vBynpLsvCKogmT3bWb1qkPtcbJmMbZHP6ePMRHtSCxQdJ72k3UPP08YomEy7FqLz7yDksW58Nw2c0AGg537nWa5uq%2Ff8LR3b2VO6osf5DeXhnDbb%2Bj4fg6uSCawumy9KHqNm30R7EjMZmFOargZyMjkCg4G0g&X-Amz-Signature=1d2936cd2906fe110d641b31fe4ea256eae2fba4eea64a6a14d0f7236a791fb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQLSGB47%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCInQ%2BRHXjFCHZi1eTtS6kWb2Pr0J3%2BJ9O28uhfg7ETLQIgLLILwUjHEb4peErKipnxm9%2Be0BTUFwg%2FuwEADpv3Qroq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDJZUqQ5zyC6IU6f%2BfyrcAwZSxRevujlzqW0BB8AM8n5BlCSqQj9qmRmfyU9nIvxAe3CVfoMJ7neu7NvtjZKdSArEjBRk5IubCkgTe%2B8FV%2BVU7XQAxms5OiSP7rVTaWW%2B5hBahI1v%2FKlw2s5JyuozLMnS5SYJffrObyYLEMc58kvyZMnveMij%2BG7VxemWdVSTSQLRTLXbF5yPLAB0WRYMBZbNEIcCs1oEnE24iM%2B7uu3J%2FXuv9kWObvB3SPhXlSVfrUbudPS%2F3Sc2EvnBFEQr01bJKMsG7meslJoqxHxFrW%2Bo0cZcOO5AByag1mmSUuz6%2FSjBLTJDo98JllPxm3yixVeQ6JcVpzxYKrbYKhG5VEpr69Fq83LcCW1M24%2B95mjas2AGfaLa4dd8AGb0PKGvXvGBwCt7XnL%2FTAIYEPTkS76vPdzRuYOPOOVFKhHlGP3PNg900N%2Bm366jayrofD99vJOHjwd6qGwX%2FNOxPGdtwHjsI2DdF4%2F55E%2BN02bdLoBIF7YaMuT85hTPsM2iChBeTrvWk%2B6GCv2jzBTCQuH0xajlERLzOGoLW3UTlhVafQBilUgLtTDcVUoWRnI6lDSmKrNBZ7AcwdAEuws9kq7S1k4ebdSVg9JROG5TjKf%2Bv3vozlYsTd3H%2FQJauomRMLL2t8IGOqUBGEMQDJY%2FMr5NifDjONQTMCqFXDnlE7joUlS7S8VdVjvZ3wIJky52LIO4p74t7j4vBynpLsvCKogmT3bWb1qkPtcbJmMbZHP6ePMRHtSCxQdJ72k3UPP08YomEy7FqLz7yDksW58Nw2c0AGg537nWa5uq%2Ff8LR3b2VO6osf5DeXhnDbb%2Bj4fg6uSCawumy9KHqNm30R7EjMZmFOargZyMjkCg4G0g&X-Amz-Signature=a3b64337878b14611c3dcb4e349d7a63eae391248a20c5daa251fbf716314105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQLSGB47%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCInQ%2BRHXjFCHZi1eTtS6kWb2Pr0J3%2BJ9O28uhfg7ETLQIgLLILwUjHEb4peErKipnxm9%2Be0BTUFwg%2FuwEADpv3Qroq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDJZUqQ5zyC6IU6f%2BfyrcAwZSxRevujlzqW0BB8AM8n5BlCSqQj9qmRmfyU9nIvxAe3CVfoMJ7neu7NvtjZKdSArEjBRk5IubCkgTe%2B8FV%2BVU7XQAxms5OiSP7rVTaWW%2B5hBahI1v%2FKlw2s5JyuozLMnS5SYJffrObyYLEMc58kvyZMnveMij%2BG7VxemWdVSTSQLRTLXbF5yPLAB0WRYMBZbNEIcCs1oEnE24iM%2B7uu3J%2FXuv9kWObvB3SPhXlSVfrUbudPS%2F3Sc2EvnBFEQr01bJKMsG7meslJoqxHxFrW%2Bo0cZcOO5AByag1mmSUuz6%2FSjBLTJDo98JllPxm3yixVeQ6JcVpzxYKrbYKhG5VEpr69Fq83LcCW1M24%2B95mjas2AGfaLa4dd8AGb0PKGvXvGBwCt7XnL%2FTAIYEPTkS76vPdzRuYOPOOVFKhHlGP3PNg900N%2Bm366jayrofD99vJOHjwd6qGwX%2FNOxPGdtwHjsI2DdF4%2F55E%2BN02bdLoBIF7YaMuT85hTPsM2iChBeTrvWk%2B6GCv2jzBTCQuH0xajlERLzOGoLW3UTlhVafQBilUgLtTDcVUoWRnI6lDSmKrNBZ7AcwdAEuws9kq7S1k4ebdSVg9JROG5TjKf%2Bv3vozlYsTd3H%2FQJauomRMLL2t8IGOqUBGEMQDJY%2FMr5NifDjONQTMCqFXDnlE7joUlS7S8VdVjvZ3wIJky52LIO4p74t7j4vBynpLsvCKogmT3bWb1qkPtcbJmMbZHP6ePMRHtSCxQdJ72k3UPP08YomEy7FqLz7yDksW58Nw2c0AGg537nWa5uq%2Ff8LR3b2VO6osf5DeXhnDbb%2Bj4fg6uSCawumy9KHqNm30R7EjMZmFOargZyMjkCg4G0g&X-Amz-Signature=c007a411321493f56622496e06ea5056c7a552383ee3c57a7424eb93de795329&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQLSGB47%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCInQ%2BRHXjFCHZi1eTtS6kWb2Pr0J3%2BJ9O28uhfg7ETLQIgLLILwUjHEb4peErKipnxm9%2Be0BTUFwg%2FuwEADpv3Qroq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDJZUqQ5zyC6IU6f%2BfyrcAwZSxRevujlzqW0BB8AM8n5BlCSqQj9qmRmfyU9nIvxAe3CVfoMJ7neu7NvtjZKdSArEjBRk5IubCkgTe%2B8FV%2BVU7XQAxms5OiSP7rVTaWW%2B5hBahI1v%2FKlw2s5JyuozLMnS5SYJffrObyYLEMc58kvyZMnveMij%2BG7VxemWdVSTSQLRTLXbF5yPLAB0WRYMBZbNEIcCs1oEnE24iM%2B7uu3J%2FXuv9kWObvB3SPhXlSVfrUbudPS%2F3Sc2EvnBFEQr01bJKMsG7meslJoqxHxFrW%2Bo0cZcOO5AByag1mmSUuz6%2FSjBLTJDo98JllPxm3yixVeQ6JcVpzxYKrbYKhG5VEpr69Fq83LcCW1M24%2B95mjas2AGfaLa4dd8AGb0PKGvXvGBwCt7XnL%2FTAIYEPTkS76vPdzRuYOPOOVFKhHlGP3PNg900N%2Bm366jayrofD99vJOHjwd6qGwX%2FNOxPGdtwHjsI2DdF4%2F55E%2BN02bdLoBIF7YaMuT85hTPsM2iChBeTrvWk%2B6GCv2jzBTCQuH0xajlERLzOGoLW3UTlhVafQBilUgLtTDcVUoWRnI6lDSmKrNBZ7AcwdAEuws9kq7S1k4ebdSVg9JROG5TjKf%2Bv3vozlYsTd3H%2FQJauomRMLL2t8IGOqUBGEMQDJY%2FMr5NifDjONQTMCqFXDnlE7joUlS7S8VdVjvZ3wIJky52LIO4p74t7j4vBynpLsvCKogmT3bWb1qkPtcbJmMbZHP6ePMRHtSCxQdJ72k3UPP08YomEy7FqLz7yDksW58Nw2c0AGg537nWa5uq%2Ff8LR3b2VO6osf5DeXhnDbb%2Bj4fg6uSCawumy9KHqNm30R7EjMZmFOargZyMjkCg4G0g&X-Amz-Signature=c4c7d6b88857c6f093a91aa01bf4459b284ca5313f7f5ef979e893d0159d2318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQLSGB47%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCInQ%2BRHXjFCHZi1eTtS6kWb2Pr0J3%2BJ9O28uhfg7ETLQIgLLILwUjHEb4peErKipnxm9%2Be0BTUFwg%2FuwEADpv3Qroq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDJZUqQ5zyC6IU6f%2BfyrcAwZSxRevujlzqW0BB8AM8n5BlCSqQj9qmRmfyU9nIvxAe3CVfoMJ7neu7NvtjZKdSArEjBRk5IubCkgTe%2B8FV%2BVU7XQAxms5OiSP7rVTaWW%2B5hBahI1v%2FKlw2s5JyuozLMnS5SYJffrObyYLEMc58kvyZMnveMij%2BG7VxemWdVSTSQLRTLXbF5yPLAB0WRYMBZbNEIcCs1oEnE24iM%2B7uu3J%2FXuv9kWObvB3SPhXlSVfrUbudPS%2F3Sc2EvnBFEQr01bJKMsG7meslJoqxHxFrW%2Bo0cZcOO5AByag1mmSUuz6%2FSjBLTJDo98JllPxm3yixVeQ6JcVpzxYKrbYKhG5VEpr69Fq83LcCW1M24%2B95mjas2AGfaLa4dd8AGb0PKGvXvGBwCt7XnL%2FTAIYEPTkS76vPdzRuYOPOOVFKhHlGP3PNg900N%2Bm366jayrofD99vJOHjwd6qGwX%2FNOxPGdtwHjsI2DdF4%2F55E%2BN02bdLoBIF7YaMuT85hTPsM2iChBeTrvWk%2B6GCv2jzBTCQuH0xajlERLzOGoLW3UTlhVafQBilUgLtTDcVUoWRnI6lDSmKrNBZ7AcwdAEuws9kq7S1k4ebdSVg9JROG5TjKf%2Bv3vozlYsTd3H%2FQJauomRMLL2t8IGOqUBGEMQDJY%2FMr5NifDjONQTMCqFXDnlE7joUlS7S8VdVjvZ3wIJky52LIO4p74t7j4vBynpLsvCKogmT3bWb1qkPtcbJmMbZHP6ePMRHtSCxQdJ72k3UPP08YomEy7FqLz7yDksW58Nw2c0AGg537nWa5uq%2Ff8LR3b2VO6osf5DeXhnDbb%2Bj4fg6uSCawumy9KHqNm30R7EjMZmFOargZyMjkCg4G0g&X-Amz-Signature=6ebe370177fcd73b606e7153c9a1ab716757374dc7ff9a17633db71f8028366e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQLSGB47%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCInQ%2BRHXjFCHZi1eTtS6kWb2Pr0J3%2BJ9O28uhfg7ETLQIgLLILwUjHEb4peErKipnxm9%2Be0BTUFwg%2FuwEADpv3Qroq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDJZUqQ5zyC6IU6f%2BfyrcAwZSxRevujlzqW0BB8AM8n5BlCSqQj9qmRmfyU9nIvxAe3CVfoMJ7neu7NvtjZKdSArEjBRk5IubCkgTe%2B8FV%2BVU7XQAxms5OiSP7rVTaWW%2B5hBahI1v%2FKlw2s5JyuozLMnS5SYJffrObyYLEMc58kvyZMnveMij%2BG7VxemWdVSTSQLRTLXbF5yPLAB0WRYMBZbNEIcCs1oEnE24iM%2B7uu3J%2FXuv9kWObvB3SPhXlSVfrUbudPS%2F3Sc2EvnBFEQr01bJKMsG7meslJoqxHxFrW%2Bo0cZcOO5AByag1mmSUuz6%2FSjBLTJDo98JllPxm3yixVeQ6JcVpzxYKrbYKhG5VEpr69Fq83LcCW1M24%2B95mjas2AGfaLa4dd8AGb0PKGvXvGBwCt7XnL%2FTAIYEPTkS76vPdzRuYOPOOVFKhHlGP3PNg900N%2Bm366jayrofD99vJOHjwd6qGwX%2FNOxPGdtwHjsI2DdF4%2F55E%2BN02bdLoBIF7YaMuT85hTPsM2iChBeTrvWk%2B6GCv2jzBTCQuH0xajlERLzOGoLW3UTlhVafQBilUgLtTDcVUoWRnI6lDSmKrNBZ7AcwdAEuws9kq7S1k4ebdSVg9JROG5TjKf%2Bv3vozlYsTd3H%2FQJauomRMLL2t8IGOqUBGEMQDJY%2FMr5NifDjONQTMCqFXDnlE7joUlS7S8VdVjvZ3wIJky52LIO4p74t7j4vBynpLsvCKogmT3bWb1qkPtcbJmMbZHP6ePMRHtSCxQdJ72k3UPP08YomEy7FqLz7yDksW58Nw2c0AGg537nWa5uq%2Ff8LR3b2VO6osf5DeXhnDbb%2Bj4fg6uSCawumy9KHqNm30R7EjMZmFOargZyMjkCg4G0g&X-Amz-Signature=787c443d2876151304df5192a1417c455a24ed2b9264d4f22e0b597ccf82cf16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQLSGB47%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCInQ%2BRHXjFCHZi1eTtS6kWb2Pr0J3%2BJ9O28uhfg7ETLQIgLLILwUjHEb4peErKipnxm9%2Be0BTUFwg%2FuwEADpv3Qroq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDJZUqQ5zyC6IU6f%2BfyrcAwZSxRevujlzqW0BB8AM8n5BlCSqQj9qmRmfyU9nIvxAe3CVfoMJ7neu7NvtjZKdSArEjBRk5IubCkgTe%2B8FV%2BVU7XQAxms5OiSP7rVTaWW%2B5hBahI1v%2FKlw2s5JyuozLMnS5SYJffrObyYLEMc58kvyZMnveMij%2BG7VxemWdVSTSQLRTLXbF5yPLAB0WRYMBZbNEIcCs1oEnE24iM%2B7uu3J%2FXuv9kWObvB3SPhXlSVfrUbudPS%2F3Sc2EvnBFEQr01bJKMsG7meslJoqxHxFrW%2Bo0cZcOO5AByag1mmSUuz6%2FSjBLTJDo98JllPxm3yixVeQ6JcVpzxYKrbYKhG5VEpr69Fq83LcCW1M24%2B95mjas2AGfaLa4dd8AGb0PKGvXvGBwCt7XnL%2FTAIYEPTkS76vPdzRuYOPOOVFKhHlGP3PNg900N%2Bm366jayrofD99vJOHjwd6qGwX%2FNOxPGdtwHjsI2DdF4%2F55E%2BN02bdLoBIF7YaMuT85hTPsM2iChBeTrvWk%2B6GCv2jzBTCQuH0xajlERLzOGoLW3UTlhVafQBilUgLtTDcVUoWRnI6lDSmKrNBZ7AcwdAEuws9kq7S1k4ebdSVg9JROG5TjKf%2Bv3vozlYsTd3H%2FQJauomRMLL2t8IGOqUBGEMQDJY%2FMr5NifDjONQTMCqFXDnlE7joUlS7S8VdVjvZ3wIJky52LIO4p74t7j4vBynpLsvCKogmT3bWb1qkPtcbJmMbZHP6ePMRHtSCxQdJ72k3UPP08YomEy7FqLz7yDksW58Nw2c0AGg537nWa5uq%2Ff8LR3b2VO6osf5DeXhnDbb%2Bj4fg6uSCawumy9KHqNm30R7EjMZmFOargZyMjkCg4G0g&X-Amz-Signature=4a643d71625af162b91efbd812afa2ee03cc658b0d94f65e256da8c0c26f17d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
