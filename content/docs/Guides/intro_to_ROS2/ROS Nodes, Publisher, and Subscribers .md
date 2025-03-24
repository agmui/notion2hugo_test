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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2JUPTTB%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWiEjNd1vd8p%2B6ft9Xk9vBnC1Os1XjDSlxEnQorlcClAiEAm%2BS%2BiwJTjB%2BAnkGcJwy%2ByypcVj8vpd67n4cnSeVlx54qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYY6bYJA5hFxStTXircA839i5ZKr8GjF31OiVzapO5UY4c%2FB32voR3GYR0syVq%2B5I7yYrUV0Fjh2nCoWyWlUjpCMTf1sKIk9J95uNL2976BmnfYJ3jxwv2y%2FQWpBRjqkmVWHy3WopuxZyAKIJbSyI2Avf2%2BMCWCdSjiaSSGW1S7xlAijoiCMWYEvBu%2Fj9yUKkJql4Y%2BPjAnn1fjp9MuAWSIi3d5VYAkEe5Akzt%2BZLpXd4CCRQDh6CK9vYUDsHg1jw0n1p7fMmm9ElP97QmqdIZMuJPizieRtD6OjE8KOi4WWNCwyRJcXteXDIpq2v%2BEpt8rVGdJBKJ5oYIaXJsUFFUBypvgT%2Fjw6OaAiI3iOIkKefYcziCpTkH5LSSgx%2F6f2r8bqsUVEqg3nEBI9x03BY2hF542ykVBXhJtoqqZBjJ%2Fhf0a377Aa%2FUrhSJy4ydOXf%2BJ0KxU7%2FRYiI1h7uSKEkYVlXeLwg1fTZG467iamXe0oPZyrWOYzWjtyVyz7xTVixWBeF0RwEv3MlA5ie5MSM5Zg33fEGsjhhWWCeOBhi%2BEvYfISlBITMXU2Y1AhmN0X511YjmHOsxEe4E2z3tbdfBvSd2aOLJG%2BjI85LlxyFq%2FQBOxPwkF3KCnLFTnXSbXJ5gReNd4uIptgUofMMG4g78GOqUBvGeQal60iMeWJ5CdxfRxUf%2FxsjYQoydNPTy7Pb8c%2FLwY1GxL53gqzTiZYABf2RHJEXkHfP2TY8AQ6iY3LDTK%2FZabw1r7oqxAN3yqOWxgrla%2FNJlxSqoUmMUXtUlY56G5UvQBFG2EdAllH5ThJgpariH8%2Brf7p0A9RREUPPR8Rzzb2KB6aHsVjWthmV3ivR6L8SeDcjRq%2FsfEVi5yGWuNy7X2hhiw&X-Amz-Signature=e4439189d31291b53199e7d1a60a74adc04377301d097da564a8bff33a178a55&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2JUPTTB%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWiEjNd1vd8p%2B6ft9Xk9vBnC1Os1XjDSlxEnQorlcClAiEAm%2BS%2BiwJTjB%2BAnkGcJwy%2ByypcVj8vpd67n4cnSeVlx54qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYY6bYJA5hFxStTXircA839i5ZKr8GjF31OiVzapO5UY4c%2FB32voR3GYR0syVq%2B5I7yYrUV0Fjh2nCoWyWlUjpCMTf1sKIk9J95uNL2976BmnfYJ3jxwv2y%2FQWpBRjqkmVWHy3WopuxZyAKIJbSyI2Avf2%2BMCWCdSjiaSSGW1S7xlAijoiCMWYEvBu%2Fj9yUKkJql4Y%2BPjAnn1fjp9MuAWSIi3d5VYAkEe5Akzt%2BZLpXd4CCRQDh6CK9vYUDsHg1jw0n1p7fMmm9ElP97QmqdIZMuJPizieRtD6OjE8KOi4WWNCwyRJcXteXDIpq2v%2BEpt8rVGdJBKJ5oYIaXJsUFFUBypvgT%2Fjw6OaAiI3iOIkKefYcziCpTkH5LSSgx%2F6f2r8bqsUVEqg3nEBI9x03BY2hF542ykVBXhJtoqqZBjJ%2Fhf0a377Aa%2FUrhSJy4ydOXf%2BJ0KxU7%2FRYiI1h7uSKEkYVlXeLwg1fTZG467iamXe0oPZyrWOYzWjtyVyz7xTVixWBeF0RwEv3MlA5ie5MSM5Zg33fEGsjhhWWCeOBhi%2BEvYfISlBITMXU2Y1AhmN0X511YjmHOsxEe4E2z3tbdfBvSd2aOLJG%2BjI85LlxyFq%2FQBOxPwkF3KCnLFTnXSbXJ5gReNd4uIptgUofMMG4g78GOqUBvGeQal60iMeWJ5CdxfRxUf%2FxsjYQoydNPTy7Pb8c%2FLwY1GxL53gqzTiZYABf2RHJEXkHfP2TY8AQ6iY3LDTK%2FZabw1r7oqxAN3yqOWxgrla%2FNJlxSqoUmMUXtUlY56G5UvQBFG2EdAllH5ThJgpariH8%2Brf7p0A9RREUPPR8Rzzb2KB6aHsVjWthmV3ivR6L8SeDcjRq%2FsfEVi5yGWuNy7X2hhiw&X-Amz-Signature=6f24b884539e6307d54ec2196e91e3892055e614ec5fed202b0510a0cfb9b4ce&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2JUPTTB%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWiEjNd1vd8p%2B6ft9Xk9vBnC1Os1XjDSlxEnQorlcClAiEAm%2BS%2BiwJTjB%2BAnkGcJwy%2ByypcVj8vpd67n4cnSeVlx54qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYY6bYJA5hFxStTXircA839i5ZKr8GjF31OiVzapO5UY4c%2FB32voR3GYR0syVq%2B5I7yYrUV0Fjh2nCoWyWlUjpCMTf1sKIk9J95uNL2976BmnfYJ3jxwv2y%2FQWpBRjqkmVWHy3WopuxZyAKIJbSyI2Avf2%2BMCWCdSjiaSSGW1S7xlAijoiCMWYEvBu%2Fj9yUKkJql4Y%2BPjAnn1fjp9MuAWSIi3d5VYAkEe5Akzt%2BZLpXd4CCRQDh6CK9vYUDsHg1jw0n1p7fMmm9ElP97QmqdIZMuJPizieRtD6OjE8KOi4WWNCwyRJcXteXDIpq2v%2BEpt8rVGdJBKJ5oYIaXJsUFFUBypvgT%2Fjw6OaAiI3iOIkKefYcziCpTkH5LSSgx%2F6f2r8bqsUVEqg3nEBI9x03BY2hF542ykVBXhJtoqqZBjJ%2Fhf0a377Aa%2FUrhSJy4ydOXf%2BJ0KxU7%2FRYiI1h7uSKEkYVlXeLwg1fTZG467iamXe0oPZyrWOYzWjtyVyz7xTVixWBeF0RwEv3MlA5ie5MSM5Zg33fEGsjhhWWCeOBhi%2BEvYfISlBITMXU2Y1AhmN0X511YjmHOsxEe4E2z3tbdfBvSd2aOLJG%2BjI85LlxyFq%2FQBOxPwkF3KCnLFTnXSbXJ5gReNd4uIptgUofMMG4g78GOqUBvGeQal60iMeWJ5CdxfRxUf%2FxsjYQoydNPTy7Pb8c%2FLwY1GxL53gqzTiZYABf2RHJEXkHfP2TY8AQ6iY3LDTK%2FZabw1r7oqxAN3yqOWxgrla%2FNJlxSqoUmMUXtUlY56G5UvQBFG2EdAllH5ThJgpariH8%2Brf7p0A9RREUPPR8Rzzb2KB6aHsVjWthmV3ivR6L8SeDcjRq%2FsfEVi5yGWuNy7X2hhiw&X-Amz-Signature=cdb7ee23c0dfdda5bb7b334a15f989147cc556cd0442dfffa96299743a5f742e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2JUPTTB%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWiEjNd1vd8p%2B6ft9Xk9vBnC1Os1XjDSlxEnQorlcClAiEAm%2BS%2BiwJTjB%2BAnkGcJwy%2ByypcVj8vpd67n4cnSeVlx54qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYY6bYJA5hFxStTXircA839i5ZKr8GjF31OiVzapO5UY4c%2FB32voR3GYR0syVq%2B5I7yYrUV0Fjh2nCoWyWlUjpCMTf1sKIk9J95uNL2976BmnfYJ3jxwv2y%2FQWpBRjqkmVWHy3WopuxZyAKIJbSyI2Avf2%2BMCWCdSjiaSSGW1S7xlAijoiCMWYEvBu%2Fj9yUKkJql4Y%2BPjAnn1fjp9MuAWSIi3d5VYAkEe5Akzt%2BZLpXd4CCRQDh6CK9vYUDsHg1jw0n1p7fMmm9ElP97QmqdIZMuJPizieRtD6OjE8KOi4WWNCwyRJcXteXDIpq2v%2BEpt8rVGdJBKJ5oYIaXJsUFFUBypvgT%2Fjw6OaAiI3iOIkKefYcziCpTkH5LSSgx%2F6f2r8bqsUVEqg3nEBI9x03BY2hF542ykVBXhJtoqqZBjJ%2Fhf0a377Aa%2FUrhSJy4ydOXf%2BJ0KxU7%2FRYiI1h7uSKEkYVlXeLwg1fTZG467iamXe0oPZyrWOYzWjtyVyz7xTVixWBeF0RwEv3MlA5ie5MSM5Zg33fEGsjhhWWCeOBhi%2BEvYfISlBITMXU2Y1AhmN0X511YjmHOsxEe4E2z3tbdfBvSd2aOLJG%2BjI85LlxyFq%2FQBOxPwkF3KCnLFTnXSbXJ5gReNd4uIptgUofMMG4g78GOqUBvGeQal60iMeWJ5CdxfRxUf%2FxsjYQoydNPTy7Pb8c%2FLwY1GxL53gqzTiZYABf2RHJEXkHfP2TY8AQ6iY3LDTK%2FZabw1r7oqxAN3yqOWxgrla%2FNJlxSqoUmMUXtUlY56G5UvQBFG2EdAllH5ThJgpariH8%2Brf7p0A9RREUPPR8Rzzb2KB6aHsVjWthmV3ivR6L8SeDcjRq%2FsfEVi5yGWuNy7X2hhiw&X-Amz-Signature=74036f2d7efb4a8972d2866418c9e9b9f885daaa5f9e13e86f716f8cc1aff5d2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2JUPTTB%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWiEjNd1vd8p%2B6ft9Xk9vBnC1Os1XjDSlxEnQorlcClAiEAm%2BS%2BiwJTjB%2BAnkGcJwy%2ByypcVj8vpd67n4cnSeVlx54qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYY6bYJA5hFxStTXircA839i5ZKr8GjF31OiVzapO5UY4c%2FB32voR3GYR0syVq%2B5I7yYrUV0Fjh2nCoWyWlUjpCMTf1sKIk9J95uNL2976BmnfYJ3jxwv2y%2FQWpBRjqkmVWHy3WopuxZyAKIJbSyI2Avf2%2BMCWCdSjiaSSGW1S7xlAijoiCMWYEvBu%2Fj9yUKkJql4Y%2BPjAnn1fjp9MuAWSIi3d5VYAkEe5Akzt%2BZLpXd4CCRQDh6CK9vYUDsHg1jw0n1p7fMmm9ElP97QmqdIZMuJPizieRtD6OjE8KOi4WWNCwyRJcXteXDIpq2v%2BEpt8rVGdJBKJ5oYIaXJsUFFUBypvgT%2Fjw6OaAiI3iOIkKefYcziCpTkH5LSSgx%2F6f2r8bqsUVEqg3nEBI9x03BY2hF542ykVBXhJtoqqZBjJ%2Fhf0a377Aa%2FUrhSJy4ydOXf%2BJ0KxU7%2FRYiI1h7uSKEkYVlXeLwg1fTZG467iamXe0oPZyrWOYzWjtyVyz7xTVixWBeF0RwEv3MlA5ie5MSM5Zg33fEGsjhhWWCeOBhi%2BEvYfISlBITMXU2Y1AhmN0X511YjmHOsxEe4E2z3tbdfBvSd2aOLJG%2BjI85LlxyFq%2FQBOxPwkF3KCnLFTnXSbXJ5gReNd4uIptgUofMMG4g78GOqUBvGeQal60iMeWJ5CdxfRxUf%2FxsjYQoydNPTy7Pb8c%2FLwY1GxL53gqzTiZYABf2RHJEXkHfP2TY8AQ6iY3LDTK%2FZabw1r7oqxAN3yqOWxgrla%2FNJlxSqoUmMUXtUlY56G5UvQBFG2EdAllH5ThJgpariH8%2Brf7p0A9RREUPPR8Rzzb2KB6aHsVjWthmV3ivR6L8SeDcjRq%2FsfEVi5yGWuNy7X2hhiw&X-Amz-Signature=d9e4c3ff1b17b44c1ced7aded259e7e70a195a0a22c2bd15b5bb890b91cc52c9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2JUPTTB%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWiEjNd1vd8p%2B6ft9Xk9vBnC1Os1XjDSlxEnQorlcClAiEAm%2BS%2BiwJTjB%2BAnkGcJwy%2ByypcVj8vpd67n4cnSeVlx54qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYY6bYJA5hFxStTXircA839i5ZKr8GjF31OiVzapO5UY4c%2FB32voR3GYR0syVq%2B5I7yYrUV0Fjh2nCoWyWlUjpCMTf1sKIk9J95uNL2976BmnfYJ3jxwv2y%2FQWpBRjqkmVWHy3WopuxZyAKIJbSyI2Avf2%2BMCWCdSjiaSSGW1S7xlAijoiCMWYEvBu%2Fj9yUKkJql4Y%2BPjAnn1fjp9MuAWSIi3d5VYAkEe5Akzt%2BZLpXd4CCRQDh6CK9vYUDsHg1jw0n1p7fMmm9ElP97QmqdIZMuJPizieRtD6OjE8KOi4WWNCwyRJcXteXDIpq2v%2BEpt8rVGdJBKJ5oYIaXJsUFFUBypvgT%2Fjw6OaAiI3iOIkKefYcziCpTkH5LSSgx%2F6f2r8bqsUVEqg3nEBI9x03BY2hF542ykVBXhJtoqqZBjJ%2Fhf0a377Aa%2FUrhSJy4ydOXf%2BJ0KxU7%2FRYiI1h7uSKEkYVlXeLwg1fTZG467iamXe0oPZyrWOYzWjtyVyz7xTVixWBeF0RwEv3MlA5ie5MSM5Zg33fEGsjhhWWCeOBhi%2BEvYfISlBITMXU2Y1AhmN0X511YjmHOsxEe4E2z3tbdfBvSd2aOLJG%2BjI85LlxyFq%2FQBOxPwkF3KCnLFTnXSbXJ5gReNd4uIptgUofMMG4g78GOqUBvGeQal60iMeWJ5CdxfRxUf%2FxsjYQoydNPTy7Pb8c%2FLwY1GxL53gqzTiZYABf2RHJEXkHfP2TY8AQ6iY3LDTK%2FZabw1r7oqxAN3yqOWxgrla%2FNJlxSqoUmMUXtUlY56G5UvQBFG2EdAllH5ThJgpariH8%2Brf7p0A9RREUPPR8Rzzb2KB6aHsVjWthmV3ivR6L8SeDcjRq%2FsfEVi5yGWuNy7X2hhiw&X-Amz-Signature=5ca19b9387f87d6458975047117473b32d24ddb36cc6c2303239b30490883fc7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2JUPTTB%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWiEjNd1vd8p%2B6ft9Xk9vBnC1Os1XjDSlxEnQorlcClAiEAm%2BS%2BiwJTjB%2BAnkGcJwy%2ByypcVj8vpd67n4cnSeVlx54qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYY6bYJA5hFxStTXircA839i5ZKr8GjF31OiVzapO5UY4c%2FB32voR3GYR0syVq%2B5I7yYrUV0Fjh2nCoWyWlUjpCMTf1sKIk9J95uNL2976BmnfYJ3jxwv2y%2FQWpBRjqkmVWHy3WopuxZyAKIJbSyI2Avf2%2BMCWCdSjiaSSGW1S7xlAijoiCMWYEvBu%2Fj9yUKkJql4Y%2BPjAnn1fjp9MuAWSIi3d5VYAkEe5Akzt%2BZLpXd4CCRQDh6CK9vYUDsHg1jw0n1p7fMmm9ElP97QmqdIZMuJPizieRtD6OjE8KOi4WWNCwyRJcXteXDIpq2v%2BEpt8rVGdJBKJ5oYIaXJsUFFUBypvgT%2Fjw6OaAiI3iOIkKefYcziCpTkH5LSSgx%2F6f2r8bqsUVEqg3nEBI9x03BY2hF542ykVBXhJtoqqZBjJ%2Fhf0a377Aa%2FUrhSJy4ydOXf%2BJ0KxU7%2FRYiI1h7uSKEkYVlXeLwg1fTZG467iamXe0oPZyrWOYzWjtyVyz7xTVixWBeF0RwEv3MlA5ie5MSM5Zg33fEGsjhhWWCeOBhi%2BEvYfISlBITMXU2Y1AhmN0X511YjmHOsxEe4E2z3tbdfBvSd2aOLJG%2BjI85LlxyFq%2FQBOxPwkF3KCnLFTnXSbXJ5gReNd4uIptgUofMMG4g78GOqUBvGeQal60iMeWJ5CdxfRxUf%2FxsjYQoydNPTy7Pb8c%2FLwY1GxL53gqzTiZYABf2RHJEXkHfP2TY8AQ6iY3LDTK%2FZabw1r7oqxAN3yqOWxgrla%2FNJlxSqoUmMUXtUlY56G5UvQBFG2EdAllH5ThJgpariH8%2Brf7p0A9RREUPPR8Rzzb2KB6aHsVjWthmV3ivR6L8SeDcjRq%2FsfEVi5yGWuNy7X2hhiw&X-Amz-Signature=687fb58eb80aeee518847fae55a0b2129aed9d9ca9df7de6f4461bae4e9ddf22&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2JUPTTB%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWiEjNd1vd8p%2B6ft9Xk9vBnC1Os1XjDSlxEnQorlcClAiEAm%2BS%2BiwJTjB%2BAnkGcJwy%2ByypcVj8vpd67n4cnSeVlx54qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYY6bYJA5hFxStTXircA839i5ZKr8GjF31OiVzapO5UY4c%2FB32voR3GYR0syVq%2B5I7yYrUV0Fjh2nCoWyWlUjpCMTf1sKIk9J95uNL2976BmnfYJ3jxwv2y%2FQWpBRjqkmVWHy3WopuxZyAKIJbSyI2Avf2%2BMCWCdSjiaSSGW1S7xlAijoiCMWYEvBu%2Fj9yUKkJql4Y%2BPjAnn1fjp9MuAWSIi3d5VYAkEe5Akzt%2BZLpXd4CCRQDh6CK9vYUDsHg1jw0n1p7fMmm9ElP97QmqdIZMuJPizieRtD6OjE8KOi4WWNCwyRJcXteXDIpq2v%2BEpt8rVGdJBKJ5oYIaXJsUFFUBypvgT%2Fjw6OaAiI3iOIkKefYcziCpTkH5LSSgx%2F6f2r8bqsUVEqg3nEBI9x03BY2hF542ykVBXhJtoqqZBjJ%2Fhf0a377Aa%2FUrhSJy4ydOXf%2BJ0KxU7%2FRYiI1h7uSKEkYVlXeLwg1fTZG467iamXe0oPZyrWOYzWjtyVyz7xTVixWBeF0RwEv3MlA5ie5MSM5Zg33fEGsjhhWWCeOBhi%2BEvYfISlBITMXU2Y1AhmN0X511YjmHOsxEe4E2z3tbdfBvSd2aOLJG%2BjI85LlxyFq%2FQBOxPwkF3KCnLFTnXSbXJ5gReNd4uIptgUofMMG4g78GOqUBvGeQal60iMeWJ5CdxfRxUf%2FxsjYQoydNPTy7Pb8c%2FLwY1GxL53gqzTiZYABf2RHJEXkHfP2TY8AQ6iY3LDTK%2FZabw1r7oqxAN3yqOWxgrla%2FNJlxSqoUmMUXtUlY56G5UvQBFG2EdAllH5ThJgpariH8%2Brf7p0A9RREUPPR8Rzzb2KB6aHsVjWthmV3ivR6L8SeDcjRq%2FsfEVi5yGWuNy7X2hhiw&X-Amz-Signature=1a7293ee284b038d3fdcc2be51058fd0b634724edb9788c96538ffc1de25caa8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
