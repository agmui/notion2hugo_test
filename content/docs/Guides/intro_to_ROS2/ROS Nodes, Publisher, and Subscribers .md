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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOBVUCVX%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDp1qDanEUzV5XjkCge5NbKjmaNUJRezo3udupW9AdVUAIhAP7h86%2F7j%2F893XFf8Ux%2BonDQKWK2z1qyRYsrsLzITgGiKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7WHRUMgGvWwyh92kq3AMzSU4rQI4IwtIiYqWbz%2FV8PuJVW8Ho3o%2BMN%2BoTXMXUcuk8%2FvJQvKVHq0co4rq%2FoPLum%2Fzt4uCdf5VUKddCAVm%2FkCxqPgCc8LlMd0Q8Nui6Sfj7pUxg3nlMJKDT0Yo5XX4GzBD52cQSeJeyJ77nuHQgeop2bAzuBvBSYgz%2FaMgcV5cF4EsZ%2FMe%2BIuA9S%2FgiOY%2BF%2Ftg9Pu6a8dROS1%2B5EAwzJoCaIAHh0dLFtbQZ50VcIEGG4Q6qc6SuxSCgu4vohbSGWUUzlahQ7ogVntUer7fwMhUZWblo4CcJi%2FI8%2B6%2F9wkKDrN%2F8SBWK0Eoun5ZvAyR8jYQwWyYM7I3tW08H2oBNi7P8BjsXNxYAvjpvOZI9ACLfefPLcySj%2FhbJwzxuLz6jR45MiuGxqSUk3%2FWG7gMCteHdTn1VUZEm9JuV58aLyjioPOz2AqIJyicd4AC84RdmnSgfiFKuClP7OtwqIoTnzekmCto3VGesPM8cvy4Ltznl09AtCQGAt9%2BPbKVKvvDCjQ41SUc0nAxuwVSo0gbGE1uR3lCoz6MLrtmpTZNK%2BQLee1nSdwF3V1nn%2B8O9DyC%2Bcq1Glh0%2FHg9l8gfFZ5WdJKMwhsC2uFxWRXDlsj%2FyPDpiHwpdl7uHUbL%2F5jDoi6W%2FBjqkAbGyiJWEDv%2F5Y1rAvxXLdz%2F6yZ3RZxa0PLHKnctnfVXiawZlDQN8mCJ7YcFC8b7SL0Pvz48Ac6tELNXtQg3HIN3f9qu1euuaJFDBSq3ITI3kVS64JvhOnZ6sDiaiy372tGyOqS%2BWitkdtNcX5VsL7fdczaRIFmrdSA9UIf1WXRUzDwbB8U3cJSgyrUcN7mOlPiNma8Q2dqoUFKvEcrJjNfnBPrjC&X-Amz-Signature=dd8e8f3ef024af24822fbfe36c5462ede18d4946a1e70c793239423c68af6446&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOBVUCVX%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDp1qDanEUzV5XjkCge5NbKjmaNUJRezo3udupW9AdVUAIhAP7h86%2F7j%2F893XFf8Ux%2BonDQKWK2z1qyRYsrsLzITgGiKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7WHRUMgGvWwyh92kq3AMzSU4rQI4IwtIiYqWbz%2FV8PuJVW8Ho3o%2BMN%2BoTXMXUcuk8%2FvJQvKVHq0co4rq%2FoPLum%2Fzt4uCdf5VUKddCAVm%2FkCxqPgCc8LlMd0Q8Nui6Sfj7pUxg3nlMJKDT0Yo5XX4GzBD52cQSeJeyJ77nuHQgeop2bAzuBvBSYgz%2FaMgcV5cF4EsZ%2FMe%2BIuA9S%2FgiOY%2BF%2Ftg9Pu6a8dROS1%2B5EAwzJoCaIAHh0dLFtbQZ50VcIEGG4Q6qc6SuxSCgu4vohbSGWUUzlahQ7ogVntUer7fwMhUZWblo4CcJi%2FI8%2B6%2F9wkKDrN%2F8SBWK0Eoun5ZvAyR8jYQwWyYM7I3tW08H2oBNi7P8BjsXNxYAvjpvOZI9ACLfefPLcySj%2FhbJwzxuLz6jR45MiuGxqSUk3%2FWG7gMCteHdTn1VUZEm9JuV58aLyjioPOz2AqIJyicd4AC84RdmnSgfiFKuClP7OtwqIoTnzekmCto3VGesPM8cvy4Ltznl09AtCQGAt9%2BPbKVKvvDCjQ41SUc0nAxuwVSo0gbGE1uR3lCoz6MLrtmpTZNK%2BQLee1nSdwF3V1nn%2B8O9DyC%2Bcq1Glh0%2FHg9l8gfFZ5WdJKMwhsC2uFxWRXDlsj%2FyPDpiHwpdl7uHUbL%2F5jDoi6W%2FBjqkAbGyiJWEDv%2F5Y1rAvxXLdz%2F6yZ3RZxa0PLHKnctnfVXiawZlDQN8mCJ7YcFC8b7SL0Pvz48Ac6tELNXtQg3HIN3f9qu1euuaJFDBSq3ITI3kVS64JvhOnZ6sDiaiy372tGyOqS%2BWitkdtNcX5VsL7fdczaRIFmrdSA9UIf1WXRUzDwbB8U3cJSgyrUcN7mOlPiNma8Q2dqoUFKvEcrJjNfnBPrjC&X-Amz-Signature=6ab45306f3d9ead72246c1de046ea2c1e1f90795dc8d8ab58d59e9c22693f0f4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOBVUCVX%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDp1qDanEUzV5XjkCge5NbKjmaNUJRezo3udupW9AdVUAIhAP7h86%2F7j%2F893XFf8Ux%2BonDQKWK2z1qyRYsrsLzITgGiKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7WHRUMgGvWwyh92kq3AMzSU4rQI4IwtIiYqWbz%2FV8PuJVW8Ho3o%2BMN%2BoTXMXUcuk8%2FvJQvKVHq0co4rq%2FoPLum%2Fzt4uCdf5VUKddCAVm%2FkCxqPgCc8LlMd0Q8Nui6Sfj7pUxg3nlMJKDT0Yo5XX4GzBD52cQSeJeyJ77nuHQgeop2bAzuBvBSYgz%2FaMgcV5cF4EsZ%2FMe%2BIuA9S%2FgiOY%2BF%2Ftg9Pu6a8dROS1%2B5EAwzJoCaIAHh0dLFtbQZ50VcIEGG4Q6qc6SuxSCgu4vohbSGWUUzlahQ7ogVntUer7fwMhUZWblo4CcJi%2FI8%2B6%2F9wkKDrN%2F8SBWK0Eoun5ZvAyR8jYQwWyYM7I3tW08H2oBNi7P8BjsXNxYAvjpvOZI9ACLfefPLcySj%2FhbJwzxuLz6jR45MiuGxqSUk3%2FWG7gMCteHdTn1VUZEm9JuV58aLyjioPOz2AqIJyicd4AC84RdmnSgfiFKuClP7OtwqIoTnzekmCto3VGesPM8cvy4Ltznl09AtCQGAt9%2BPbKVKvvDCjQ41SUc0nAxuwVSo0gbGE1uR3lCoz6MLrtmpTZNK%2BQLee1nSdwF3V1nn%2B8O9DyC%2Bcq1Glh0%2FHg9l8gfFZ5WdJKMwhsC2uFxWRXDlsj%2FyPDpiHwpdl7uHUbL%2F5jDoi6W%2FBjqkAbGyiJWEDv%2F5Y1rAvxXLdz%2F6yZ3RZxa0PLHKnctnfVXiawZlDQN8mCJ7YcFC8b7SL0Pvz48Ac6tELNXtQg3HIN3f9qu1euuaJFDBSq3ITI3kVS64JvhOnZ6sDiaiy372tGyOqS%2BWitkdtNcX5VsL7fdczaRIFmrdSA9UIf1WXRUzDwbB8U3cJSgyrUcN7mOlPiNma8Q2dqoUFKvEcrJjNfnBPrjC&X-Amz-Signature=ba488256d9f20804add8ceaa82a6db2cd4d66654ac2ef23f40888376e2d93e64&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOBVUCVX%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDp1qDanEUzV5XjkCge5NbKjmaNUJRezo3udupW9AdVUAIhAP7h86%2F7j%2F893XFf8Ux%2BonDQKWK2z1qyRYsrsLzITgGiKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7WHRUMgGvWwyh92kq3AMzSU4rQI4IwtIiYqWbz%2FV8PuJVW8Ho3o%2BMN%2BoTXMXUcuk8%2FvJQvKVHq0co4rq%2FoPLum%2Fzt4uCdf5VUKddCAVm%2FkCxqPgCc8LlMd0Q8Nui6Sfj7pUxg3nlMJKDT0Yo5XX4GzBD52cQSeJeyJ77nuHQgeop2bAzuBvBSYgz%2FaMgcV5cF4EsZ%2FMe%2BIuA9S%2FgiOY%2BF%2Ftg9Pu6a8dROS1%2B5EAwzJoCaIAHh0dLFtbQZ50VcIEGG4Q6qc6SuxSCgu4vohbSGWUUzlahQ7ogVntUer7fwMhUZWblo4CcJi%2FI8%2B6%2F9wkKDrN%2F8SBWK0Eoun5ZvAyR8jYQwWyYM7I3tW08H2oBNi7P8BjsXNxYAvjpvOZI9ACLfefPLcySj%2FhbJwzxuLz6jR45MiuGxqSUk3%2FWG7gMCteHdTn1VUZEm9JuV58aLyjioPOz2AqIJyicd4AC84RdmnSgfiFKuClP7OtwqIoTnzekmCto3VGesPM8cvy4Ltznl09AtCQGAt9%2BPbKVKvvDCjQ41SUc0nAxuwVSo0gbGE1uR3lCoz6MLrtmpTZNK%2BQLee1nSdwF3V1nn%2B8O9DyC%2Bcq1Glh0%2FHg9l8gfFZ5WdJKMwhsC2uFxWRXDlsj%2FyPDpiHwpdl7uHUbL%2F5jDoi6W%2FBjqkAbGyiJWEDv%2F5Y1rAvxXLdz%2F6yZ3RZxa0PLHKnctnfVXiawZlDQN8mCJ7YcFC8b7SL0Pvz48Ac6tELNXtQg3HIN3f9qu1euuaJFDBSq3ITI3kVS64JvhOnZ6sDiaiy372tGyOqS%2BWitkdtNcX5VsL7fdczaRIFmrdSA9UIf1WXRUzDwbB8U3cJSgyrUcN7mOlPiNma8Q2dqoUFKvEcrJjNfnBPrjC&X-Amz-Signature=fb21f7bb0d197c4cbb4baf7a73032436cd9bc823cb54301715695b76ccd00c54&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOBVUCVX%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDp1qDanEUzV5XjkCge5NbKjmaNUJRezo3udupW9AdVUAIhAP7h86%2F7j%2F893XFf8Ux%2BonDQKWK2z1qyRYsrsLzITgGiKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7WHRUMgGvWwyh92kq3AMzSU4rQI4IwtIiYqWbz%2FV8PuJVW8Ho3o%2BMN%2BoTXMXUcuk8%2FvJQvKVHq0co4rq%2FoPLum%2Fzt4uCdf5VUKddCAVm%2FkCxqPgCc8LlMd0Q8Nui6Sfj7pUxg3nlMJKDT0Yo5XX4GzBD52cQSeJeyJ77nuHQgeop2bAzuBvBSYgz%2FaMgcV5cF4EsZ%2FMe%2BIuA9S%2FgiOY%2BF%2Ftg9Pu6a8dROS1%2B5EAwzJoCaIAHh0dLFtbQZ50VcIEGG4Q6qc6SuxSCgu4vohbSGWUUzlahQ7ogVntUer7fwMhUZWblo4CcJi%2FI8%2B6%2F9wkKDrN%2F8SBWK0Eoun5ZvAyR8jYQwWyYM7I3tW08H2oBNi7P8BjsXNxYAvjpvOZI9ACLfefPLcySj%2FhbJwzxuLz6jR45MiuGxqSUk3%2FWG7gMCteHdTn1VUZEm9JuV58aLyjioPOz2AqIJyicd4AC84RdmnSgfiFKuClP7OtwqIoTnzekmCto3VGesPM8cvy4Ltznl09AtCQGAt9%2BPbKVKvvDCjQ41SUc0nAxuwVSo0gbGE1uR3lCoz6MLrtmpTZNK%2BQLee1nSdwF3V1nn%2B8O9DyC%2Bcq1Glh0%2FHg9l8gfFZ5WdJKMwhsC2uFxWRXDlsj%2FyPDpiHwpdl7uHUbL%2F5jDoi6W%2FBjqkAbGyiJWEDv%2F5Y1rAvxXLdz%2F6yZ3RZxa0PLHKnctnfVXiawZlDQN8mCJ7YcFC8b7SL0Pvz48Ac6tELNXtQg3HIN3f9qu1euuaJFDBSq3ITI3kVS64JvhOnZ6sDiaiy372tGyOqS%2BWitkdtNcX5VsL7fdczaRIFmrdSA9UIf1WXRUzDwbB8U3cJSgyrUcN7mOlPiNma8Q2dqoUFKvEcrJjNfnBPrjC&X-Amz-Signature=05f2d4be85bfec53833a074e44285ce89e22a66b5ba082b4f9d7e019dad583f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOBVUCVX%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDp1qDanEUzV5XjkCge5NbKjmaNUJRezo3udupW9AdVUAIhAP7h86%2F7j%2F893XFf8Ux%2BonDQKWK2z1qyRYsrsLzITgGiKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7WHRUMgGvWwyh92kq3AMzSU4rQI4IwtIiYqWbz%2FV8PuJVW8Ho3o%2BMN%2BoTXMXUcuk8%2FvJQvKVHq0co4rq%2FoPLum%2Fzt4uCdf5VUKddCAVm%2FkCxqPgCc8LlMd0Q8Nui6Sfj7pUxg3nlMJKDT0Yo5XX4GzBD52cQSeJeyJ77nuHQgeop2bAzuBvBSYgz%2FaMgcV5cF4EsZ%2FMe%2BIuA9S%2FgiOY%2BF%2Ftg9Pu6a8dROS1%2B5EAwzJoCaIAHh0dLFtbQZ50VcIEGG4Q6qc6SuxSCgu4vohbSGWUUzlahQ7ogVntUer7fwMhUZWblo4CcJi%2FI8%2B6%2F9wkKDrN%2F8SBWK0Eoun5ZvAyR8jYQwWyYM7I3tW08H2oBNi7P8BjsXNxYAvjpvOZI9ACLfefPLcySj%2FhbJwzxuLz6jR45MiuGxqSUk3%2FWG7gMCteHdTn1VUZEm9JuV58aLyjioPOz2AqIJyicd4AC84RdmnSgfiFKuClP7OtwqIoTnzekmCto3VGesPM8cvy4Ltznl09AtCQGAt9%2BPbKVKvvDCjQ41SUc0nAxuwVSo0gbGE1uR3lCoz6MLrtmpTZNK%2BQLee1nSdwF3V1nn%2B8O9DyC%2Bcq1Glh0%2FHg9l8gfFZ5WdJKMwhsC2uFxWRXDlsj%2FyPDpiHwpdl7uHUbL%2F5jDoi6W%2FBjqkAbGyiJWEDv%2F5Y1rAvxXLdz%2F6yZ3RZxa0PLHKnctnfVXiawZlDQN8mCJ7YcFC8b7SL0Pvz48Ac6tELNXtQg3HIN3f9qu1euuaJFDBSq3ITI3kVS64JvhOnZ6sDiaiy372tGyOqS%2BWitkdtNcX5VsL7fdczaRIFmrdSA9UIf1WXRUzDwbB8U3cJSgyrUcN7mOlPiNma8Q2dqoUFKvEcrJjNfnBPrjC&X-Amz-Signature=d8cfad4c33b3b8fa4c626a4499b1f52f182e654ae3a147fea8b5e93a3e8e519b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOBVUCVX%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDp1qDanEUzV5XjkCge5NbKjmaNUJRezo3udupW9AdVUAIhAP7h86%2F7j%2F893XFf8Ux%2BonDQKWK2z1qyRYsrsLzITgGiKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7WHRUMgGvWwyh92kq3AMzSU4rQI4IwtIiYqWbz%2FV8PuJVW8Ho3o%2BMN%2BoTXMXUcuk8%2FvJQvKVHq0co4rq%2FoPLum%2Fzt4uCdf5VUKddCAVm%2FkCxqPgCc8LlMd0Q8Nui6Sfj7pUxg3nlMJKDT0Yo5XX4GzBD52cQSeJeyJ77nuHQgeop2bAzuBvBSYgz%2FaMgcV5cF4EsZ%2FMe%2BIuA9S%2FgiOY%2BF%2Ftg9Pu6a8dROS1%2B5EAwzJoCaIAHh0dLFtbQZ50VcIEGG4Q6qc6SuxSCgu4vohbSGWUUzlahQ7ogVntUer7fwMhUZWblo4CcJi%2FI8%2B6%2F9wkKDrN%2F8SBWK0Eoun5ZvAyR8jYQwWyYM7I3tW08H2oBNi7P8BjsXNxYAvjpvOZI9ACLfefPLcySj%2FhbJwzxuLz6jR45MiuGxqSUk3%2FWG7gMCteHdTn1VUZEm9JuV58aLyjioPOz2AqIJyicd4AC84RdmnSgfiFKuClP7OtwqIoTnzekmCto3VGesPM8cvy4Ltznl09AtCQGAt9%2BPbKVKvvDCjQ41SUc0nAxuwVSo0gbGE1uR3lCoz6MLrtmpTZNK%2BQLee1nSdwF3V1nn%2B8O9DyC%2Bcq1Glh0%2FHg9l8gfFZ5WdJKMwhsC2uFxWRXDlsj%2FyPDpiHwpdl7uHUbL%2F5jDoi6W%2FBjqkAbGyiJWEDv%2F5Y1rAvxXLdz%2F6yZ3RZxa0PLHKnctnfVXiawZlDQN8mCJ7YcFC8b7SL0Pvz48Ac6tELNXtQg3HIN3f9qu1euuaJFDBSq3ITI3kVS64JvhOnZ6sDiaiy372tGyOqS%2BWitkdtNcX5VsL7fdczaRIFmrdSA9UIf1WXRUzDwbB8U3cJSgyrUcN7mOlPiNma8Q2dqoUFKvEcrJjNfnBPrjC&X-Amz-Signature=72a7a6ae950adb775b5fbfab22681e5e54d191a62f7f67afe3ea85f94e20dc08&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOBVUCVX%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDp1qDanEUzV5XjkCge5NbKjmaNUJRezo3udupW9AdVUAIhAP7h86%2F7j%2F893XFf8Ux%2BonDQKWK2z1qyRYsrsLzITgGiKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7WHRUMgGvWwyh92kq3AMzSU4rQI4IwtIiYqWbz%2FV8PuJVW8Ho3o%2BMN%2BoTXMXUcuk8%2FvJQvKVHq0co4rq%2FoPLum%2Fzt4uCdf5VUKddCAVm%2FkCxqPgCc8LlMd0Q8Nui6Sfj7pUxg3nlMJKDT0Yo5XX4GzBD52cQSeJeyJ77nuHQgeop2bAzuBvBSYgz%2FaMgcV5cF4EsZ%2FMe%2BIuA9S%2FgiOY%2BF%2Ftg9Pu6a8dROS1%2B5EAwzJoCaIAHh0dLFtbQZ50VcIEGG4Q6qc6SuxSCgu4vohbSGWUUzlahQ7ogVntUer7fwMhUZWblo4CcJi%2FI8%2B6%2F9wkKDrN%2F8SBWK0Eoun5ZvAyR8jYQwWyYM7I3tW08H2oBNi7P8BjsXNxYAvjpvOZI9ACLfefPLcySj%2FhbJwzxuLz6jR45MiuGxqSUk3%2FWG7gMCteHdTn1VUZEm9JuV58aLyjioPOz2AqIJyicd4AC84RdmnSgfiFKuClP7OtwqIoTnzekmCto3VGesPM8cvy4Ltznl09AtCQGAt9%2BPbKVKvvDCjQ41SUc0nAxuwVSo0gbGE1uR3lCoz6MLrtmpTZNK%2BQLee1nSdwF3V1nn%2B8O9DyC%2Bcq1Glh0%2FHg9l8gfFZ5WdJKMwhsC2uFxWRXDlsj%2FyPDpiHwpdl7uHUbL%2F5jDoi6W%2FBjqkAbGyiJWEDv%2F5Y1rAvxXLdz%2F6yZ3RZxa0PLHKnctnfVXiawZlDQN8mCJ7YcFC8b7SL0Pvz48Ac6tELNXtQg3HIN3f9qu1euuaJFDBSq3ITI3kVS64JvhOnZ6sDiaiy372tGyOqS%2BWitkdtNcX5VsL7fdczaRIFmrdSA9UIf1WXRUzDwbB8U3cJSgyrUcN7mOlPiNma8Q2dqoUFKvEcrJjNfnBPrjC&X-Amz-Signature=f761ca6ede47a806435ba640733d19ddb1c6180f22897e3b24b5b7c353900369&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
