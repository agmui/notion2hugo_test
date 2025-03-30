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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXL24SHZ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T131454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIGZREEcZp136Wou4NxshniGDkfweiI8f417Jz8NslKbpAiEA2Kw1ORgdCDF9SoEzGVOJJ2oT16IxHx43d0PYXCA6lmAqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEhX48nyX%2BHUjYKgCrcA8hw0r8Qq4cB7b8q6egBPmWqvxpsTkVB6ZFhU99pqF9BV6eNGLMmbhbGJRdcg3sFA2SPfYEqXrxUNrQVxecB%2F4hcVs685S6gFJSUutppaaKcWCZMRH8vyyoKdNWy0sRO8l6oDR0YPAFzUzqyD%2BuiLJ8Vx23nt9gNvOVR6GZkdThaN1PykjQGaQ6VkGnCZRmFpkyh48V1QMFh2ZY6fem%2FiyXRHu4YH%2Bw%2BiNAP4crro1i6mgqtsUj32WdHiR2bCD9o204vK03QKE6RPmgpqS5%2Bk9cnXZQVKjNit18EwfYYEZfN1lPrjUacw%2B320rl52PcJ6XsAj1l473iURrk02A0mheLd3p9Oxqzr8cO4eL1pmwwA%2BDw%2BKiHDkpEymTwkGl1CaFeXvChimpa8clUUNqgAWFZP2Ycqz4cXxp1VEbe06rGL9%2B4tmuQ8P7yQbDx4ItSjLWPbAZHMZtDBzX7vZgUKzItQMeSM2hCIbVQz1AXBiTILNCj406CkL%2FyxvgTvpb%2Bc%2FBfnFzQwe3lFXNbKX2YFUEmgoW6KujYdSkKYamAjl%2FbS0t2dtyy1eV2Gzkc6LytFkUzexyVJmHbWW%2FgVcvUn6CCwkY61we%2Fk7ic1U8COJrHrYKuEpfczjzIgRMyZMNvvo78GOqUB%2BOG6aZqUfGfRphqANF6Wrld%2BtMijV6pYgJ06ecfZv6kT0s8G07voB3YDlDdnlETasBtYFaYrZIz%2Bltqvny7L8svJwEP51JL9%2FBmc%2BvTbv2MnSo1AUQ5YURdeIXGA1EWB3rJa7Ul7StuNU%2BHuRRz2%2FjMa0xTx7JJllz0vS3koMDUtZTBFb53JIqb7dVdSsRbagHyRhSyCg7DGY%2FSExjmN4UuMhE10&X-Amz-Signature=397d6dd37dc33de169a1256992104e22636237f44cd9166832738c1056919b11&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXL24SHZ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T131454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIGZREEcZp136Wou4NxshniGDkfweiI8f417Jz8NslKbpAiEA2Kw1ORgdCDF9SoEzGVOJJ2oT16IxHx43d0PYXCA6lmAqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEhX48nyX%2BHUjYKgCrcA8hw0r8Qq4cB7b8q6egBPmWqvxpsTkVB6ZFhU99pqF9BV6eNGLMmbhbGJRdcg3sFA2SPfYEqXrxUNrQVxecB%2F4hcVs685S6gFJSUutppaaKcWCZMRH8vyyoKdNWy0sRO8l6oDR0YPAFzUzqyD%2BuiLJ8Vx23nt9gNvOVR6GZkdThaN1PykjQGaQ6VkGnCZRmFpkyh48V1QMFh2ZY6fem%2FiyXRHu4YH%2Bw%2BiNAP4crro1i6mgqtsUj32WdHiR2bCD9o204vK03QKE6RPmgpqS5%2Bk9cnXZQVKjNit18EwfYYEZfN1lPrjUacw%2B320rl52PcJ6XsAj1l473iURrk02A0mheLd3p9Oxqzr8cO4eL1pmwwA%2BDw%2BKiHDkpEymTwkGl1CaFeXvChimpa8clUUNqgAWFZP2Ycqz4cXxp1VEbe06rGL9%2B4tmuQ8P7yQbDx4ItSjLWPbAZHMZtDBzX7vZgUKzItQMeSM2hCIbVQz1AXBiTILNCj406CkL%2FyxvgTvpb%2Bc%2FBfnFzQwe3lFXNbKX2YFUEmgoW6KujYdSkKYamAjl%2FbS0t2dtyy1eV2Gzkc6LytFkUzexyVJmHbWW%2FgVcvUn6CCwkY61we%2Fk7ic1U8COJrHrYKuEpfczjzIgRMyZMNvvo78GOqUB%2BOG6aZqUfGfRphqANF6Wrld%2BtMijV6pYgJ06ecfZv6kT0s8G07voB3YDlDdnlETasBtYFaYrZIz%2Bltqvny7L8svJwEP51JL9%2FBmc%2BvTbv2MnSo1AUQ5YURdeIXGA1EWB3rJa7Ul7StuNU%2BHuRRz2%2FjMa0xTx7JJllz0vS3koMDUtZTBFb53JIqb7dVdSsRbagHyRhSyCg7DGY%2FSExjmN4UuMhE10&X-Amz-Signature=5732e9de32c0cff6bb49ede5d9555741b5e20aa840868d7c9336fc617b707e8c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXL24SHZ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T131454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIGZREEcZp136Wou4NxshniGDkfweiI8f417Jz8NslKbpAiEA2Kw1ORgdCDF9SoEzGVOJJ2oT16IxHx43d0PYXCA6lmAqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEhX48nyX%2BHUjYKgCrcA8hw0r8Qq4cB7b8q6egBPmWqvxpsTkVB6ZFhU99pqF9BV6eNGLMmbhbGJRdcg3sFA2SPfYEqXrxUNrQVxecB%2F4hcVs685S6gFJSUutppaaKcWCZMRH8vyyoKdNWy0sRO8l6oDR0YPAFzUzqyD%2BuiLJ8Vx23nt9gNvOVR6GZkdThaN1PykjQGaQ6VkGnCZRmFpkyh48V1QMFh2ZY6fem%2FiyXRHu4YH%2Bw%2BiNAP4crro1i6mgqtsUj32WdHiR2bCD9o204vK03QKE6RPmgpqS5%2Bk9cnXZQVKjNit18EwfYYEZfN1lPrjUacw%2B320rl52PcJ6XsAj1l473iURrk02A0mheLd3p9Oxqzr8cO4eL1pmwwA%2BDw%2BKiHDkpEymTwkGl1CaFeXvChimpa8clUUNqgAWFZP2Ycqz4cXxp1VEbe06rGL9%2B4tmuQ8P7yQbDx4ItSjLWPbAZHMZtDBzX7vZgUKzItQMeSM2hCIbVQz1AXBiTILNCj406CkL%2FyxvgTvpb%2Bc%2FBfnFzQwe3lFXNbKX2YFUEmgoW6KujYdSkKYamAjl%2FbS0t2dtyy1eV2Gzkc6LytFkUzexyVJmHbWW%2FgVcvUn6CCwkY61we%2Fk7ic1U8COJrHrYKuEpfczjzIgRMyZMNvvo78GOqUB%2BOG6aZqUfGfRphqANF6Wrld%2BtMijV6pYgJ06ecfZv6kT0s8G07voB3YDlDdnlETasBtYFaYrZIz%2Bltqvny7L8svJwEP51JL9%2FBmc%2BvTbv2MnSo1AUQ5YURdeIXGA1EWB3rJa7Ul7StuNU%2BHuRRz2%2FjMa0xTx7JJllz0vS3koMDUtZTBFb53JIqb7dVdSsRbagHyRhSyCg7DGY%2FSExjmN4UuMhE10&X-Amz-Signature=78deb1484d437f3779c562f549d13966a7179650003b29e049cc7f24c916f1e5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXL24SHZ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T131454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIGZREEcZp136Wou4NxshniGDkfweiI8f417Jz8NslKbpAiEA2Kw1ORgdCDF9SoEzGVOJJ2oT16IxHx43d0PYXCA6lmAqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEhX48nyX%2BHUjYKgCrcA8hw0r8Qq4cB7b8q6egBPmWqvxpsTkVB6ZFhU99pqF9BV6eNGLMmbhbGJRdcg3sFA2SPfYEqXrxUNrQVxecB%2F4hcVs685S6gFJSUutppaaKcWCZMRH8vyyoKdNWy0sRO8l6oDR0YPAFzUzqyD%2BuiLJ8Vx23nt9gNvOVR6GZkdThaN1PykjQGaQ6VkGnCZRmFpkyh48V1QMFh2ZY6fem%2FiyXRHu4YH%2Bw%2BiNAP4crro1i6mgqtsUj32WdHiR2bCD9o204vK03QKE6RPmgpqS5%2Bk9cnXZQVKjNit18EwfYYEZfN1lPrjUacw%2B320rl52PcJ6XsAj1l473iURrk02A0mheLd3p9Oxqzr8cO4eL1pmwwA%2BDw%2BKiHDkpEymTwkGl1CaFeXvChimpa8clUUNqgAWFZP2Ycqz4cXxp1VEbe06rGL9%2B4tmuQ8P7yQbDx4ItSjLWPbAZHMZtDBzX7vZgUKzItQMeSM2hCIbVQz1AXBiTILNCj406CkL%2FyxvgTvpb%2Bc%2FBfnFzQwe3lFXNbKX2YFUEmgoW6KujYdSkKYamAjl%2FbS0t2dtyy1eV2Gzkc6LytFkUzexyVJmHbWW%2FgVcvUn6CCwkY61we%2Fk7ic1U8COJrHrYKuEpfczjzIgRMyZMNvvo78GOqUB%2BOG6aZqUfGfRphqANF6Wrld%2BtMijV6pYgJ06ecfZv6kT0s8G07voB3YDlDdnlETasBtYFaYrZIz%2Bltqvny7L8svJwEP51JL9%2FBmc%2BvTbv2MnSo1AUQ5YURdeIXGA1EWB3rJa7Ul7StuNU%2BHuRRz2%2FjMa0xTx7JJllz0vS3koMDUtZTBFb53JIqb7dVdSsRbagHyRhSyCg7DGY%2FSExjmN4UuMhE10&X-Amz-Signature=b1a5e8ef029b599db12c6297f060b28a2e8d23e4365ed53020b7ef184d57cd7b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXL24SHZ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T131454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIGZREEcZp136Wou4NxshniGDkfweiI8f417Jz8NslKbpAiEA2Kw1ORgdCDF9SoEzGVOJJ2oT16IxHx43d0PYXCA6lmAqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEhX48nyX%2BHUjYKgCrcA8hw0r8Qq4cB7b8q6egBPmWqvxpsTkVB6ZFhU99pqF9BV6eNGLMmbhbGJRdcg3sFA2SPfYEqXrxUNrQVxecB%2F4hcVs685S6gFJSUutppaaKcWCZMRH8vyyoKdNWy0sRO8l6oDR0YPAFzUzqyD%2BuiLJ8Vx23nt9gNvOVR6GZkdThaN1PykjQGaQ6VkGnCZRmFpkyh48V1QMFh2ZY6fem%2FiyXRHu4YH%2Bw%2BiNAP4crro1i6mgqtsUj32WdHiR2bCD9o204vK03QKE6RPmgpqS5%2Bk9cnXZQVKjNit18EwfYYEZfN1lPrjUacw%2B320rl52PcJ6XsAj1l473iURrk02A0mheLd3p9Oxqzr8cO4eL1pmwwA%2BDw%2BKiHDkpEymTwkGl1CaFeXvChimpa8clUUNqgAWFZP2Ycqz4cXxp1VEbe06rGL9%2B4tmuQ8P7yQbDx4ItSjLWPbAZHMZtDBzX7vZgUKzItQMeSM2hCIbVQz1AXBiTILNCj406CkL%2FyxvgTvpb%2Bc%2FBfnFzQwe3lFXNbKX2YFUEmgoW6KujYdSkKYamAjl%2FbS0t2dtyy1eV2Gzkc6LytFkUzexyVJmHbWW%2FgVcvUn6CCwkY61we%2Fk7ic1U8COJrHrYKuEpfczjzIgRMyZMNvvo78GOqUB%2BOG6aZqUfGfRphqANF6Wrld%2BtMijV6pYgJ06ecfZv6kT0s8G07voB3YDlDdnlETasBtYFaYrZIz%2Bltqvny7L8svJwEP51JL9%2FBmc%2BvTbv2MnSo1AUQ5YURdeIXGA1EWB3rJa7Ul7StuNU%2BHuRRz2%2FjMa0xTx7JJllz0vS3koMDUtZTBFb53JIqb7dVdSsRbagHyRhSyCg7DGY%2FSExjmN4UuMhE10&X-Amz-Signature=315fd32562cb5b27e5a3f3e7c43236bd41cf266d5c8bbfb127e5068a867541de&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXL24SHZ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T131454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIGZREEcZp136Wou4NxshniGDkfweiI8f417Jz8NslKbpAiEA2Kw1ORgdCDF9SoEzGVOJJ2oT16IxHx43d0PYXCA6lmAqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEhX48nyX%2BHUjYKgCrcA8hw0r8Qq4cB7b8q6egBPmWqvxpsTkVB6ZFhU99pqF9BV6eNGLMmbhbGJRdcg3sFA2SPfYEqXrxUNrQVxecB%2F4hcVs685S6gFJSUutppaaKcWCZMRH8vyyoKdNWy0sRO8l6oDR0YPAFzUzqyD%2BuiLJ8Vx23nt9gNvOVR6GZkdThaN1PykjQGaQ6VkGnCZRmFpkyh48V1QMFh2ZY6fem%2FiyXRHu4YH%2Bw%2BiNAP4crro1i6mgqtsUj32WdHiR2bCD9o204vK03QKE6RPmgpqS5%2Bk9cnXZQVKjNit18EwfYYEZfN1lPrjUacw%2B320rl52PcJ6XsAj1l473iURrk02A0mheLd3p9Oxqzr8cO4eL1pmwwA%2BDw%2BKiHDkpEymTwkGl1CaFeXvChimpa8clUUNqgAWFZP2Ycqz4cXxp1VEbe06rGL9%2B4tmuQ8P7yQbDx4ItSjLWPbAZHMZtDBzX7vZgUKzItQMeSM2hCIbVQz1AXBiTILNCj406CkL%2FyxvgTvpb%2Bc%2FBfnFzQwe3lFXNbKX2YFUEmgoW6KujYdSkKYamAjl%2FbS0t2dtyy1eV2Gzkc6LytFkUzexyVJmHbWW%2FgVcvUn6CCwkY61we%2Fk7ic1U8COJrHrYKuEpfczjzIgRMyZMNvvo78GOqUB%2BOG6aZqUfGfRphqANF6Wrld%2BtMijV6pYgJ06ecfZv6kT0s8G07voB3YDlDdnlETasBtYFaYrZIz%2Bltqvny7L8svJwEP51JL9%2FBmc%2BvTbv2MnSo1AUQ5YURdeIXGA1EWB3rJa7Ul7StuNU%2BHuRRz2%2FjMa0xTx7JJllz0vS3koMDUtZTBFb53JIqb7dVdSsRbagHyRhSyCg7DGY%2FSExjmN4UuMhE10&X-Amz-Signature=902a33db5c64ac8458fae3adef3ba7636aae35e21bd2d8b41c235ee6f0173921&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXL24SHZ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T131454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIGZREEcZp136Wou4NxshniGDkfweiI8f417Jz8NslKbpAiEA2Kw1ORgdCDF9SoEzGVOJJ2oT16IxHx43d0PYXCA6lmAqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEhX48nyX%2BHUjYKgCrcA8hw0r8Qq4cB7b8q6egBPmWqvxpsTkVB6ZFhU99pqF9BV6eNGLMmbhbGJRdcg3sFA2SPfYEqXrxUNrQVxecB%2F4hcVs685S6gFJSUutppaaKcWCZMRH8vyyoKdNWy0sRO8l6oDR0YPAFzUzqyD%2BuiLJ8Vx23nt9gNvOVR6GZkdThaN1PykjQGaQ6VkGnCZRmFpkyh48V1QMFh2ZY6fem%2FiyXRHu4YH%2Bw%2BiNAP4crro1i6mgqtsUj32WdHiR2bCD9o204vK03QKE6RPmgpqS5%2Bk9cnXZQVKjNit18EwfYYEZfN1lPrjUacw%2B320rl52PcJ6XsAj1l473iURrk02A0mheLd3p9Oxqzr8cO4eL1pmwwA%2BDw%2BKiHDkpEymTwkGl1CaFeXvChimpa8clUUNqgAWFZP2Ycqz4cXxp1VEbe06rGL9%2B4tmuQ8P7yQbDx4ItSjLWPbAZHMZtDBzX7vZgUKzItQMeSM2hCIbVQz1AXBiTILNCj406CkL%2FyxvgTvpb%2Bc%2FBfnFzQwe3lFXNbKX2YFUEmgoW6KujYdSkKYamAjl%2FbS0t2dtyy1eV2Gzkc6LytFkUzexyVJmHbWW%2FgVcvUn6CCwkY61we%2Fk7ic1U8COJrHrYKuEpfczjzIgRMyZMNvvo78GOqUB%2BOG6aZqUfGfRphqANF6Wrld%2BtMijV6pYgJ06ecfZv6kT0s8G07voB3YDlDdnlETasBtYFaYrZIz%2Bltqvny7L8svJwEP51JL9%2FBmc%2BvTbv2MnSo1AUQ5YURdeIXGA1EWB3rJa7Ul7StuNU%2BHuRRz2%2FjMa0xTx7JJllz0vS3koMDUtZTBFb53JIqb7dVdSsRbagHyRhSyCg7DGY%2FSExjmN4UuMhE10&X-Amz-Signature=017f4c1f0833f423cb9044c5360f5751493b7b3592464574912f3b1df738e1a4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXL24SHZ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T131454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIGZREEcZp136Wou4NxshniGDkfweiI8f417Jz8NslKbpAiEA2Kw1ORgdCDF9SoEzGVOJJ2oT16IxHx43d0PYXCA6lmAqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEhX48nyX%2BHUjYKgCrcA8hw0r8Qq4cB7b8q6egBPmWqvxpsTkVB6ZFhU99pqF9BV6eNGLMmbhbGJRdcg3sFA2SPfYEqXrxUNrQVxecB%2F4hcVs685S6gFJSUutppaaKcWCZMRH8vyyoKdNWy0sRO8l6oDR0YPAFzUzqyD%2BuiLJ8Vx23nt9gNvOVR6GZkdThaN1PykjQGaQ6VkGnCZRmFpkyh48V1QMFh2ZY6fem%2FiyXRHu4YH%2Bw%2BiNAP4crro1i6mgqtsUj32WdHiR2bCD9o204vK03QKE6RPmgpqS5%2Bk9cnXZQVKjNit18EwfYYEZfN1lPrjUacw%2B320rl52PcJ6XsAj1l473iURrk02A0mheLd3p9Oxqzr8cO4eL1pmwwA%2BDw%2BKiHDkpEymTwkGl1CaFeXvChimpa8clUUNqgAWFZP2Ycqz4cXxp1VEbe06rGL9%2B4tmuQ8P7yQbDx4ItSjLWPbAZHMZtDBzX7vZgUKzItQMeSM2hCIbVQz1AXBiTILNCj406CkL%2FyxvgTvpb%2Bc%2FBfnFzQwe3lFXNbKX2YFUEmgoW6KujYdSkKYamAjl%2FbS0t2dtyy1eV2Gzkc6LytFkUzexyVJmHbWW%2FgVcvUn6CCwkY61we%2Fk7ic1U8COJrHrYKuEpfczjzIgRMyZMNvvo78GOqUB%2BOG6aZqUfGfRphqANF6Wrld%2BtMijV6pYgJ06ecfZv6kT0s8G07voB3YDlDdnlETasBtYFaYrZIz%2Bltqvny7L8svJwEP51JL9%2FBmc%2BvTbv2MnSo1AUQ5YURdeIXGA1EWB3rJa7Ul7StuNU%2BHuRRz2%2FjMa0xTx7JJllz0vS3koMDUtZTBFb53JIqb7dVdSsRbagHyRhSyCg7DGY%2FSExjmN4UuMhE10&X-Amz-Signature=c2cd2d6f9ebcecb52870da6b73196a0bef380ba7dd4b843e056866f9a32c21fd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
