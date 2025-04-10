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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBDV7M2M%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD65Cpkla7MVBPPNmK8Rjhhjg%2BQe5NK5QaMe0DMthj%2F3wIhAL25vkePOjj0MweQMb%2F9W%2FoVAwwa1vhDfybfRA1nGSb0KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAaGK8HdHrixRRhNgq3APrndqXminwpMQXwQlp%2FZfPWNdOEA0RZo6RHlKtCmzjGn9nTUyzuWcVR4KfoH8zoiy07JWSqCgCehw2a8Jcb%2BklnmmOqJcjdEaF7FzPKRZHjquGfdv3m91RVmOona3Y%2FfUgB3udUuWInPImw1iQZ2BuRcbmBi92BVeCq2MddCjcp%2FBddDz%2BLI0%2BVwgJkovGQX2Xy9b7w5W2kzJfU8kZEH%2BgvxHMmX688qcZECTFXaB5CtRtQ0ze7lFHPt0lDTKt9At0U8LmUbBr51YolDXg5sxgfvmU7b3jpLojoQpdO9DtVgR6MVYxYyApwEqpa6ojjqON6bGoHg0Z%2FcwmKDRpO0N5Z6UZjrUWSfkK9%2B97hOkhg%2BWy2MboXxy8FqzXCnc%2Bye6Xhq58YfbBP8vawujQuzc0i7z47eey%2F0FWkZduqOVQUxrXhgQsd268EA3aX8Rt2tEjTPvaaEcEhZLD5m6hxlZWwsrWUQTkloaQ2I6CckMN3LHRw5UkvK0pz6rAlt7YWVDSLndM2TIjzxGCz6h9GUWh1DQxkdQwxMz49fGzuHil%2BfXcviT6znAzUVsUqbld%2B9wUJ%2B3DCfExFEqy42ffcNmeyZd2cel8cxbK1Dp0FUQE17RMR09XgVDr8o5oTzD909%2B%2FBjqkAelgMvMixgPNhwISY2Zy6C8ifrkHGHc9BFL54vs9PevrGW1t52d4WLZmm6rl7ArNGn9Y2a0pWGnAlYK8kWpInxZvbm5usWAC7qczmDE9mhSRgDXCAo%2FI%2FyzXQ5122EPpdcj06JSKIaqvIowYJEprChOh1KFYwF%2BXlYPk5yEVad3u04kYTdiuUwUcJI%2BhFmOscw2surmqKKf%2FAl5TNyuoSWJXe%2FCd&X-Amz-Signature=26536e09f926756f499d98502d9792fda576f7b7fb99d33120b3f7bf9138e35b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBDV7M2M%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD65Cpkla7MVBPPNmK8Rjhhjg%2BQe5NK5QaMe0DMthj%2F3wIhAL25vkePOjj0MweQMb%2F9W%2FoVAwwa1vhDfybfRA1nGSb0KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAaGK8HdHrixRRhNgq3APrndqXminwpMQXwQlp%2FZfPWNdOEA0RZo6RHlKtCmzjGn9nTUyzuWcVR4KfoH8zoiy07JWSqCgCehw2a8Jcb%2BklnmmOqJcjdEaF7FzPKRZHjquGfdv3m91RVmOona3Y%2FfUgB3udUuWInPImw1iQZ2BuRcbmBi92BVeCq2MddCjcp%2FBddDz%2BLI0%2BVwgJkovGQX2Xy9b7w5W2kzJfU8kZEH%2BgvxHMmX688qcZECTFXaB5CtRtQ0ze7lFHPt0lDTKt9At0U8LmUbBr51YolDXg5sxgfvmU7b3jpLojoQpdO9DtVgR6MVYxYyApwEqpa6ojjqON6bGoHg0Z%2FcwmKDRpO0N5Z6UZjrUWSfkK9%2B97hOkhg%2BWy2MboXxy8FqzXCnc%2Bye6Xhq58YfbBP8vawujQuzc0i7z47eey%2F0FWkZduqOVQUxrXhgQsd268EA3aX8Rt2tEjTPvaaEcEhZLD5m6hxlZWwsrWUQTkloaQ2I6CckMN3LHRw5UkvK0pz6rAlt7YWVDSLndM2TIjzxGCz6h9GUWh1DQxkdQwxMz49fGzuHil%2BfXcviT6znAzUVsUqbld%2B9wUJ%2B3DCfExFEqy42ffcNmeyZd2cel8cxbK1Dp0FUQE17RMR09XgVDr8o5oTzD909%2B%2FBjqkAelgMvMixgPNhwISY2Zy6C8ifrkHGHc9BFL54vs9PevrGW1t52d4WLZmm6rl7ArNGn9Y2a0pWGnAlYK8kWpInxZvbm5usWAC7qczmDE9mhSRgDXCAo%2FI%2FyzXQ5122EPpdcj06JSKIaqvIowYJEprChOh1KFYwF%2BXlYPk5yEVad3u04kYTdiuUwUcJI%2BhFmOscw2surmqKKf%2FAl5TNyuoSWJXe%2FCd&X-Amz-Signature=a5b1ba8f1e63b4dbabd18efdc6c3c7a0ba574adee0bafa22eeb392e2a9554223&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBDV7M2M%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD65Cpkla7MVBPPNmK8Rjhhjg%2BQe5NK5QaMe0DMthj%2F3wIhAL25vkePOjj0MweQMb%2F9W%2FoVAwwa1vhDfybfRA1nGSb0KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAaGK8HdHrixRRhNgq3APrndqXminwpMQXwQlp%2FZfPWNdOEA0RZo6RHlKtCmzjGn9nTUyzuWcVR4KfoH8zoiy07JWSqCgCehw2a8Jcb%2BklnmmOqJcjdEaF7FzPKRZHjquGfdv3m91RVmOona3Y%2FfUgB3udUuWInPImw1iQZ2BuRcbmBi92BVeCq2MddCjcp%2FBddDz%2BLI0%2BVwgJkovGQX2Xy9b7w5W2kzJfU8kZEH%2BgvxHMmX688qcZECTFXaB5CtRtQ0ze7lFHPt0lDTKt9At0U8LmUbBr51YolDXg5sxgfvmU7b3jpLojoQpdO9DtVgR6MVYxYyApwEqpa6ojjqON6bGoHg0Z%2FcwmKDRpO0N5Z6UZjrUWSfkK9%2B97hOkhg%2BWy2MboXxy8FqzXCnc%2Bye6Xhq58YfbBP8vawujQuzc0i7z47eey%2F0FWkZduqOVQUxrXhgQsd268EA3aX8Rt2tEjTPvaaEcEhZLD5m6hxlZWwsrWUQTkloaQ2I6CckMN3LHRw5UkvK0pz6rAlt7YWVDSLndM2TIjzxGCz6h9GUWh1DQxkdQwxMz49fGzuHil%2BfXcviT6znAzUVsUqbld%2B9wUJ%2B3DCfExFEqy42ffcNmeyZd2cel8cxbK1Dp0FUQE17RMR09XgVDr8o5oTzD909%2B%2FBjqkAelgMvMixgPNhwISY2Zy6C8ifrkHGHc9BFL54vs9PevrGW1t52d4WLZmm6rl7ArNGn9Y2a0pWGnAlYK8kWpInxZvbm5usWAC7qczmDE9mhSRgDXCAo%2FI%2FyzXQ5122EPpdcj06JSKIaqvIowYJEprChOh1KFYwF%2BXlYPk5yEVad3u04kYTdiuUwUcJI%2BhFmOscw2surmqKKf%2FAl5TNyuoSWJXe%2FCd&X-Amz-Signature=a87976e20e30d94db1288919d97303215f21af70f95fdb493768f22d9cc65dee&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBDV7M2M%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD65Cpkla7MVBPPNmK8Rjhhjg%2BQe5NK5QaMe0DMthj%2F3wIhAL25vkePOjj0MweQMb%2F9W%2FoVAwwa1vhDfybfRA1nGSb0KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAaGK8HdHrixRRhNgq3APrndqXminwpMQXwQlp%2FZfPWNdOEA0RZo6RHlKtCmzjGn9nTUyzuWcVR4KfoH8zoiy07JWSqCgCehw2a8Jcb%2BklnmmOqJcjdEaF7FzPKRZHjquGfdv3m91RVmOona3Y%2FfUgB3udUuWInPImw1iQZ2BuRcbmBi92BVeCq2MddCjcp%2FBddDz%2BLI0%2BVwgJkovGQX2Xy9b7w5W2kzJfU8kZEH%2BgvxHMmX688qcZECTFXaB5CtRtQ0ze7lFHPt0lDTKt9At0U8LmUbBr51YolDXg5sxgfvmU7b3jpLojoQpdO9DtVgR6MVYxYyApwEqpa6ojjqON6bGoHg0Z%2FcwmKDRpO0N5Z6UZjrUWSfkK9%2B97hOkhg%2BWy2MboXxy8FqzXCnc%2Bye6Xhq58YfbBP8vawujQuzc0i7z47eey%2F0FWkZduqOVQUxrXhgQsd268EA3aX8Rt2tEjTPvaaEcEhZLD5m6hxlZWwsrWUQTkloaQ2I6CckMN3LHRw5UkvK0pz6rAlt7YWVDSLndM2TIjzxGCz6h9GUWh1DQxkdQwxMz49fGzuHil%2BfXcviT6znAzUVsUqbld%2B9wUJ%2B3DCfExFEqy42ffcNmeyZd2cel8cxbK1Dp0FUQE17RMR09XgVDr8o5oTzD909%2B%2FBjqkAelgMvMixgPNhwISY2Zy6C8ifrkHGHc9BFL54vs9PevrGW1t52d4WLZmm6rl7ArNGn9Y2a0pWGnAlYK8kWpInxZvbm5usWAC7qczmDE9mhSRgDXCAo%2FI%2FyzXQ5122EPpdcj06JSKIaqvIowYJEprChOh1KFYwF%2BXlYPk5yEVad3u04kYTdiuUwUcJI%2BhFmOscw2surmqKKf%2FAl5TNyuoSWJXe%2FCd&X-Amz-Signature=08b254e4db626dbd9faceb803e864ceb1c7b44d2e51e375310926d813815ca83&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBDV7M2M%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD65Cpkla7MVBPPNmK8Rjhhjg%2BQe5NK5QaMe0DMthj%2F3wIhAL25vkePOjj0MweQMb%2F9W%2FoVAwwa1vhDfybfRA1nGSb0KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAaGK8HdHrixRRhNgq3APrndqXminwpMQXwQlp%2FZfPWNdOEA0RZo6RHlKtCmzjGn9nTUyzuWcVR4KfoH8zoiy07JWSqCgCehw2a8Jcb%2BklnmmOqJcjdEaF7FzPKRZHjquGfdv3m91RVmOona3Y%2FfUgB3udUuWInPImw1iQZ2BuRcbmBi92BVeCq2MddCjcp%2FBddDz%2BLI0%2BVwgJkovGQX2Xy9b7w5W2kzJfU8kZEH%2BgvxHMmX688qcZECTFXaB5CtRtQ0ze7lFHPt0lDTKt9At0U8LmUbBr51YolDXg5sxgfvmU7b3jpLojoQpdO9DtVgR6MVYxYyApwEqpa6ojjqON6bGoHg0Z%2FcwmKDRpO0N5Z6UZjrUWSfkK9%2B97hOkhg%2BWy2MboXxy8FqzXCnc%2Bye6Xhq58YfbBP8vawujQuzc0i7z47eey%2F0FWkZduqOVQUxrXhgQsd268EA3aX8Rt2tEjTPvaaEcEhZLD5m6hxlZWwsrWUQTkloaQ2I6CckMN3LHRw5UkvK0pz6rAlt7YWVDSLndM2TIjzxGCz6h9GUWh1DQxkdQwxMz49fGzuHil%2BfXcviT6znAzUVsUqbld%2B9wUJ%2B3DCfExFEqy42ffcNmeyZd2cel8cxbK1Dp0FUQE17RMR09XgVDr8o5oTzD909%2B%2FBjqkAelgMvMixgPNhwISY2Zy6C8ifrkHGHc9BFL54vs9PevrGW1t52d4WLZmm6rl7ArNGn9Y2a0pWGnAlYK8kWpInxZvbm5usWAC7qczmDE9mhSRgDXCAo%2FI%2FyzXQ5122EPpdcj06JSKIaqvIowYJEprChOh1KFYwF%2BXlYPk5yEVad3u04kYTdiuUwUcJI%2BhFmOscw2surmqKKf%2FAl5TNyuoSWJXe%2FCd&X-Amz-Signature=4661e5c015cabec0a8fb77edc8a3bbbdb47d1f2bd083b6f56dec8ddf1590532c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBDV7M2M%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD65Cpkla7MVBPPNmK8Rjhhjg%2BQe5NK5QaMe0DMthj%2F3wIhAL25vkePOjj0MweQMb%2F9W%2FoVAwwa1vhDfybfRA1nGSb0KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAaGK8HdHrixRRhNgq3APrndqXminwpMQXwQlp%2FZfPWNdOEA0RZo6RHlKtCmzjGn9nTUyzuWcVR4KfoH8zoiy07JWSqCgCehw2a8Jcb%2BklnmmOqJcjdEaF7FzPKRZHjquGfdv3m91RVmOona3Y%2FfUgB3udUuWInPImw1iQZ2BuRcbmBi92BVeCq2MddCjcp%2FBddDz%2BLI0%2BVwgJkovGQX2Xy9b7w5W2kzJfU8kZEH%2BgvxHMmX688qcZECTFXaB5CtRtQ0ze7lFHPt0lDTKt9At0U8LmUbBr51YolDXg5sxgfvmU7b3jpLojoQpdO9DtVgR6MVYxYyApwEqpa6ojjqON6bGoHg0Z%2FcwmKDRpO0N5Z6UZjrUWSfkK9%2B97hOkhg%2BWy2MboXxy8FqzXCnc%2Bye6Xhq58YfbBP8vawujQuzc0i7z47eey%2F0FWkZduqOVQUxrXhgQsd268EA3aX8Rt2tEjTPvaaEcEhZLD5m6hxlZWwsrWUQTkloaQ2I6CckMN3LHRw5UkvK0pz6rAlt7YWVDSLndM2TIjzxGCz6h9GUWh1DQxkdQwxMz49fGzuHil%2BfXcviT6znAzUVsUqbld%2B9wUJ%2B3DCfExFEqy42ffcNmeyZd2cel8cxbK1Dp0FUQE17RMR09XgVDr8o5oTzD909%2B%2FBjqkAelgMvMixgPNhwISY2Zy6C8ifrkHGHc9BFL54vs9PevrGW1t52d4WLZmm6rl7ArNGn9Y2a0pWGnAlYK8kWpInxZvbm5usWAC7qczmDE9mhSRgDXCAo%2FI%2FyzXQ5122EPpdcj06JSKIaqvIowYJEprChOh1KFYwF%2BXlYPk5yEVad3u04kYTdiuUwUcJI%2BhFmOscw2surmqKKf%2FAl5TNyuoSWJXe%2FCd&X-Amz-Signature=529fe2f1ec1387ef4f0026c7061e957ca84541d1bd6c05a89fed7188ae91c5d7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBDV7M2M%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD65Cpkla7MVBPPNmK8Rjhhjg%2BQe5NK5QaMe0DMthj%2F3wIhAL25vkePOjj0MweQMb%2F9W%2FoVAwwa1vhDfybfRA1nGSb0KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAaGK8HdHrixRRhNgq3APrndqXminwpMQXwQlp%2FZfPWNdOEA0RZo6RHlKtCmzjGn9nTUyzuWcVR4KfoH8zoiy07JWSqCgCehw2a8Jcb%2BklnmmOqJcjdEaF7FzPKRZHjquGfdv3m91RVmOona3Y%2FfUgB3udUuWInPImw1iQZ2BuRcbmBi92BVeCq2MddCjcp%2FBddDz%2BLI0%2BVwgJkovGQX2Xy9b7w5W2kzJfU8kZEH%2BgvxHMmX688qcZECTFXaB5CtRtQ0ze7lFHPt0lDTKt9At0U8LmUbBr51YolDXg5sxgfvmU7b3jpLojoQpdO9DtVgR6MVYxYyApwEqpa6ojjqON6bGoHg0Z%2FcwmKDRpO0N5Z6UZjrUWSfkK9%2B97hOkhg%2BWy2MboXxy8FqzXCnc%2Bye6Xhq58YfbBP8vawujQuzc0i7z47eey%2F0FWkZduqOVQUxrXhgQsd268EA3aX8Rt2tEjTPvaaEcEhZLD5m6hxlZWwsrWUQTkloaQ2I6CckMN3LHRw5UkvK0pz6rAlt7YWVDSLndM2TIjzxGCz6h9GUWh1DQxkdQwxMz49fGzuHil%2BfXcviT6znAzUVsUqbld%2B9wUJ%2B3DCfExFEqy42ffcNmeyZd2cel8cxbK1Dp0FUQE17RMR09XgVDr8o5oTzD909%2B%2FBjqkAelgMvMixgPNhwISY2Zy6C8ifrkHGHc9BFL54vs9PevrGW1t52d4WLZmm6rl7ArNGn9Y2a0pWGnAlYK8kWpInxZvbm5usWAC7qczmDE9mhSRgDXCAo%2FI%2FyzXQ5122EPpdcj06JSKIaqvIowYJEprChOh1KFYwF%2BXlYPk5yEVad3u04kYTdiuUwUcJI%2BhFmOscw2surmqKKf%2FAl5TNyuoSWJXe%2FCd&X-Amz-Signature=b0d9097dca6bf8e8bf30589481de652702c7eef7d60304ab626373bae1a4eef6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBDV7M2M%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD65Cpkla7MVBPPNmK8Rjhhjg%2BQe5NK5QaMe0DMthj%2F3wIhAL25vkePOjj0MweQMb%2F9W%2FoVAwwa1vhDfybfRA1nGSb0KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAaGK8HdHrixRRhNgq3APrndqXminwpMQXwQlp%2FZfPWNdOEA0RZo6RHlKtCmzjGn9nTUyzuWcVR4KfoH8zoiy07JWSqCgCehw2a8Jcb%2BklnmmOqJcjdEaF7FzPKRZHjquGfdv3m91RVmOona3Y%2FfUgB3udUuWInPImw1iQZ2BuRcbmBi92BVeCq2MddCjcp%2FBddDz%2BLI0%2BVwgJkovGQX2Xy9b7w5W2kzJfU8kZEH%2BgvxHMmX688qcZECTFXaB5CtRtQ0ze7lFHPt0lDTKt9At0U8LmUbBr51YolDXg5sxgfvmU7b3jpLojoQpdO9DtVgR6MVYxYyApwEqpa6ojjqON6bGoHg0Z%2FcwmKDRpO0N5Z6UZjrUWSfkK9%2B97hOkhg%2BWy2MboXxy8FqzXCnc%2Bye6Xhq58YfbBP8vawujQuzc0i7z47eey%2F0FWkZduqOVQUxrXhgQsd268EA3aX8Rt2tEjTPvaaEcEhZLD5m6hxlZWwsrWUQTkloaQ2I6CckMN3LHRw5UkvK0pz6rAlt7YWVDSLndM2TIjzxGCz6h9GUWh1DQxkdQwxMz49fGzuHil%2BfXcviT6znAzUVsUqbld%2B9wUJ%2B3DCfExFEqy42ffcNmeyZd2cel8cxbK1Dp0FUQE17RMR09XgVDr8o5oTzD909%2B%2FBjqkAelgMvMixgPNhwISY2Zy6C8ifrkHGHc9BFL54vs9PevrGW1t52d4WLZmm6rl7ArNGn9Y2a0pWGnAlYK8kWpInxZvbm5usWAC7qczmDE9mhSRgDXCAo%2FI%2FyzXQ5122EPpdcj06JSKIaqvIowYJEprChOh1KFYwF%2BXlYPk5yEVad3u04kYTdiuUwUcJI%2BhFmOscw2surmqKKf%2FAl5TNyuoSWJXe%2FCd&X-Amz-Signature=df57aff2ccb9efdb4d65890c4b1cc4aa5f934aef6f68f1f464c562c6a07895df&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
