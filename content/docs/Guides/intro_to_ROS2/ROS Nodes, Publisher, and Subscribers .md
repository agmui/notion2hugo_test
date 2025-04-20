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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQGUW575%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIEoKXx6TIPbbosWVsWdVFOCnuppmXj5a1nvlfz9W1mFXAiB9gz%2FqzEyz7cRu%2Fy2a8aGQop1%2BRBpH03%2F2%2F7lEctRRWCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6IHEJVsGJfZqjokUKtwDLppaIfBQtuSUyiqEYjHpySiAS2pUA%2F0lLXMEMFn8D25pUY2QpryCwmxyMVfymd8%2BYiCvHq%2BrP4uysscPK04BWu0ZuoBU38FXdczUy1yQQdFKzJfi71U%2Ba9t8pfNYkLe7q%2FLHpyLeV2jKP%2FbWOB1YAMCe8tRxYR07wgPj3zJVWw9%2FX1NMePCm%2FDuOtVDVCgXY21lOvDKQKn7PQB%2FX4s8uD%2FumkgT4J0Qpkm%2Fyq7ki16xykrQX4qRkuictGb5Ev0nEdskZOZBzop2owdZldn%2B6wWebroz4pM1p0eHEL%2B65%2FLFf%2FzFx46XMwQCDr30xqTLhgDdHMNNol6XgzyDPEc6s4H6JO1E4RfRH4xlLWejHvLZEXM9C7djVu2ABCOfP7JJQU0ZJ02iobYXUXL8hFKOqNVytD9tJ0rBzevKHS5u7olHAc7bpCtKixfxXHP8dnyNqVbDDbo1D2ZWVj6X%2BEbKVKv%2FBItguos83EjIwBA4r04iMo9UX6ZNLY8R9EsnJ6iSpO9z3soNqKqnVKwW1EOxEGasyiwK1Py1YdoUTYQeJrUUYAbPTGiegXCIBCN9zPamx9zgSxVf4t3OSIP4zpACdvec2SHh6kDbdH20vtaBjNXG9PhFhr0ektOzWuSww%2FKOSwAY6pgGmU%2B8VDMXtcWsAs4ugikQ%2Fb448UurK1qDpJfnnAvcBZ%2FX%2Fm0xqghdLCcv%2BYZmy4G0qAI5OutRl4yGIAeTcqFQ0K%2FQaun5KgOM%2F49%2FTwTUqzS4Dt59QtSft89pzLDhs1bOYWUB76eu4l6%2BG1YTk%2Bcb%2BpiaAo7bvZnLS4Eo1XRsDnea3Is8EBHg0Vtk02jiME8LTr%2F%2FOwUsDgaKDZidkDUQSiZcKtM4k&X-Amz-Signature=9f4c03fb23cf4e7e60feb30d4f15c06c1ad2458a7a5de280f6b73cd8ed6af4bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQGUW575%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIEoKXx6TIPbbosWVsWdVFOCnuppmXj5a1nvlfz9W1mFXAiB9gz%2FqzEyz7cRu%2Fy2a8aGQop1%2BRBpH03%2F2%2F7lEctRRWCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6IHEJVsGJfZqjokUKtwDLppaIfBQtuSUyiqEYjHpySiAS2pUA%2F0lLXMEMFn8D25pUY2QpryCwmxyMVfymd8%2BYiCvHq%2BrP4uysscPK04BWu0ZuoBU38FXdczUy1yQQdFKzJfi71U%2Ba9t8pfNYkLe7q%2FLHpyLeV2jKP%2FbWOB1YAMCe8tRxYR07wgPj3zJVWw9%2FX1NMePCm%2FDuOtVDVCgXY21lOvDKQKn7PQB%2FX4s8uD%2FumkgT4J0Qpkm%2Fyq7ki16xykrQX4qRkuictGb5Ev0nEdskZOZBzop2owdZldn%2B6wWebroz4pM1p0eHEL%2B65%2FLFf%2FzFx46XMwQCDr30xqTLhgDdHMNNol6XgzyDPEc6s4H6JO1E4RfRH4xlLWejHvLZEXM9C7djVu2ABCOfP7JJQU0ZJ02iobYXUXL8hFKOqNVytD9tJ0rBzevKHS5u7olHAc7bpCtKixfxXHP8dnyNqVbDDbo1D2ZWVj6X%2BEbKVKv%2FBItguos83EjIwBA4r04iMo9UX6ZNLY8R9EsnJ6iSpO9z3soNqKqnVKwW1EOxEGasyiwK1Py1YdoUTYQeJrUUYAbPTGiegXCIBCN9zPamx9zgSxVf4t3OSIP4zpACdvec2SHh6kDbdH20vtaBjNXG9PhFhr0ektOzWuSww%2FKOSwAY6pgGmU%2B8VDMXtcWsAs4ugikQ%2Fb448UurK1qDpJfnnAvcBZ%2FX%2Fm0xqghdLCcv%2BYZmy4G0qAI5OutRl4yGIAeTcqFQ0K%2FQaun5KgOM%2F49%2FTwTUqzS4Dt59QtSft89pzLDhs1bOYWUB76eu4l6%2BG1YTk%2Bcb%2BpiaAo7bvZnLS4Eo1XRsDnea3Is8EBHg0Vtk02jiME8LTr%2F%2FOwUsDgaKDZidkDUQSiZcKtM4k&X-Amz-Signature=e40435ca183740f936ee1b29d09543452b8ae65233dde0f641adb133e4808597&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQGUW575%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIEoKXx6TIPbbosWVsWdVFOCnuppmXj5a1nvlfz9W1mFXAiB9gz%2FqzEyz7cRu%2Fy2a8aGQop1%2BRBpH03%2F2%2F7lEctRRWCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6IHEJVsGJfZqjokUKtwDLppaIfBQtuSUyiqEYjHpySiAS2pUA%2F0lLXMEMFn8D25pUY2QpryCwmxyMVfymd8%2BYiCvHq%2BrP4uysscPK04BWu0ZuoBU38FXdczUy1yQQdFKzJfi71U%2Ba9t8pfNYkLe7q%2FLHpyLeV2jKP%2FbWOB1YAMCe8tRxYR07wgPj3zJVWw9%2FX1NMePCm%2FDuOtVDVCgXY21lOvDKQKn7PQB%2FX4s8uD%2FumkgT4J0Qpkm%2Fyq7ki16xykrQX4qRkuictGb5Ev0nEdskZOZBzop2owdZldn%2B6wWebroz4pM1p0eHEL%2B65%2FLFf%2FzFx46XMwQCDr30xqTLhgDdHMNNol6XgzyDPEc6s4H6JO1E4RfRH4xlLWejHvLZEXM9C7djVu2ABCOfP7JJQU0ZJ02iobYXUXL8hFKOqNVytD9tJ0rBzevKHS5u7olHAc7bpCtKixfxXHP8dnyNqVbDDbo1D2ZWVj6X%2BEbKVKv%2FBItguos83EjIwBA4r04iMo9UX6ZNLY8R9EsnJ6iSpO9z3soNqKqnVKwW1EOxEGasyiwK1Py1YdoUTYQeJrUUYAbPTGiegXCIBCN9zPamx9zgSxVf4t3OSIP4zpACdvec2SHh6kDbdH20vtaBjNXG9PhFhr0ektOzWuSww%2FKOSwAY6pgGmU%2B8VDMXtcWsAs4ugikQ%2Fb448UurK1qDpJfnnAvcBZ%2FX%2Fm0xqghdLCcv%2BYZmy4G0qAI5OutRl4yGIAeTcqFQ0K%2FQaun5KgOM%2F49%2FTwTUqzS4Dt59QtSft89pzLDhs1bOYWUB76eu4l6%2BG1YTk%2Bcb%2BpiaAo7bvZnLS4Eo1XRsDnea3Is8EBHg0Vtk02jiME8LTr%2F%2FOwUsDgaKDZidkDUQSiZcKtM4k&X-Amz-Signature=d1bd07410627de1427f4f04562ccea4a0b76811dbd5233906af806668f5d0468&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQGUW575%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIEoKXx6TIPbbosWVsWdVFOCnuppmXj5a1nvlfz9W1mFXAiB9gz%2FqzEyz7cRu%2Fy2a8aGQop1%2BRBpH03%2F2%2F7lEctRRWCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6IHEJVsGJfZqjokUKtwDLppaIfBQtuSUyiqEYjHpySiAS2pUA%2F0lLXMEMFn8D25pUY2QpryCwmxyMVfymd8%2BYiCvHq%2BrP4uysscPK04BWu0ZuoBU38FXdczUy1yQQdFKzJfi71U%2Ba9t8pfNYkLe7q%2FLHpyLeV2jKP%2FbWOB1YAMCe8tRxYR07wgPj3zJVWw9%2FX1NMePCm%2FDuOtVDVCgXY21lOvDKQKn7PQB%2FX4s8uD%2FumkgT4J0Qpkm%2Fyq7ki16xykrQX4qRkuictGb5Ev0nEdskZOZBzop2owdZldn%2B6wWebroz4pM1p0eHEL%2B65%2FLFf%2FzFx46XMwQCDr30xqTLhgDdHMNNol6XgzyDPEc6s4H6JO1E4RfRH4xlLWejHvLZEXM9C7djVu2ABCOfP7JJQU0ZJ02iobYXUXL8hFKOqNVytD9tJ0rBzevKHS5u7olHAc7bpCtKixfxXHP8dnyNqVbDDbo1D2ZWVj6X%2BEbKVKv%2FBItguos83EjIwBA4r04iMo9UX6ZNLY8R9EsnJ6iSpO9z3soNqKqnVKwW1EOxEGasyiwK1Py1YdoUTYQeJrUUYAbPTGiegXCIBCN9zPamx9zgSxVf4t3OSIP4zpACdvec2SHh6kDbdH20vtaBjNXG9PhFhr0ektOzWuSww%2FKOSwAY6pgGmU%2B8VDMXtcWsAs4ugikQ%2Fb448UurK1qDpJfnnAvcBZ%2FX%2Fm0xqghdLCcv%2BYZmy4G0qAI5OutRl4yGIAeTcqFQ0K%2FQaun5KgOM%2F49%2FTwTUqzS4Dt59QtSft89pzLDhs1bOYWUB76eu4l6%2BG1YTk%2Bcb%2BpiaAo7bvZnLS4Eo1XRsDnea3Is8EBHg0Vtk02jiME8LTr%2F%2FOwUsDgaKDZidkDUQSiZcKtM4k&X-Amz-Signature=ba8f4d9c4669c0bc7e80f33d6fab87de61e2e4f8cc02192d32c465e3e3359889&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQGUW575%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIEoKXx6TIPbbosWVsWdVFOCnuppmXj5a1nvlfz9W1mFXAiB9gz%2FqzEyz7cRu%2Fy2a8aGQop1%2BRBpH03%2F2%2F7lEctRRWCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6IHEJVsGJfZqjokUKtwDLppaIfBQtuSUyiqEYjHpySiAS2pUA%2F0lLXMEMFn8D25pUY2QpryCwmxyMVfymd8%2BYiCvHq%2BrP4uysscPK04BWu0ZuoBU38FXdczUy1yQQdFKzJfi71U%2Ba9t8pfNYkLe7q%2FLHpyLeV2jKP%2FbWOB1YAMCe8tRxYR07wgPj3zJVWw9%2FX1NMePCm%2FDuOtVDVCgXY21lOvDKQKn7PQB%2FX4s8uD%2FumkgT4J0Qpkm%2Fyq7ki16xykrQX4qRkuictGb5Ev0nEdskZOZBzop2owdZldn%2B6wWebroz4pM1p0eHEL%2B65%2FLFf%2FzFx46XMwQCDr30xqTLhgDdHMNNol6XgzyDPEc6s4H6JO1E4RfRH4xlLWejHvLZEXM9C7djVu2ABCOfP7JJQU0ZJ02iobYXUXL8hFKOqNVytD9tJ0rBzevKHS5u7olHAc7bpCtKixfxXHP8dnyNqVbDDbo1D2ZWVj6X%2BEbKVKv%2FBItguos83EjIwBA4r04iMo9UX6ZNLY8R9EsnJ6iSpO9z3soNqKqnVKwW1EOxEGasyiwK1Py1YdoUTYQeJrUUYAbPTGiegXCIBCN9zPamx9zgSxVf4t3OSIP4zpACdvec2SHh6kDbdH20vtaBjNXG9PhFhr0ektOzWuSww%2FKOSwAY6pgGmU%2B8VDMXtcWsAs4ugikQ%2Fb448UurK1qDpJfnnAvcBZ%2FX%2Fm0xqghdLCcv%2BYZmy4G0qAI5OutRl4yGIAeTcqFQ0K%2FQaun5KgOM%2F49%2FTwTUqzS4Dt59QtSft89pzLDhs1bOYWUB76eu4l6%2BG1YTk%2Bcb%2BpiaAo7bvZnLS4Eo1XRsDnea3Is8EBHg0Vtk02jiME8LTr%2F%2FOwUsDgaKDZidkDUQSiZcKtM4k&X-Amz-Signature=c39e19498999827701273661f5a0494a5b47709f50f32603bd82afff48cea02d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQGUW575%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIEoKXx6TIPbbosWVsWdVFOCnuppmXj5a1nvlfz9W1mFXAiB9gz%2FqzEyz7cRu%2Fy2a8aGQop1%2BRBpH03%2F2%2F7lEctRRWCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6IHEJVsGJfZqjokUKtwDLppaIfBQtuSUyiqEYjHpySiAS2pUA%2F0lLXMEMFn8D25pUY2QpryCwmxyMVfymd8%2BYiCvHq%2BrP4uysscPK04BWu0ZuoBU38FXdczUy1yQQdFKzJfi71U%2Ba9t8pfNYkLe7q%2FLHpyLeV2jKP%2FbWOB1YAMCe8tRxYR07wgPj3zJVWw9%2FX1NMePCm%2FDuOtVDVCgXY21lOvDKQKn7PQB%2FX4s8uD%2FumkgT4J0Qpkm%2Fyq7ki16xykrQX4qRkuictGb5Ev0nEdskZOZBzop2owdZldn%2B6wWebroz4pM1p0eHEL%2B65%2FLFf%2FzFx46XMwQCDr30xqTLhgDdHMNNol6XgzyDPEc6s4H6JO1E4RfRH4xlLWejHvLZEXM9C7djVu2ABCOfP7JJQU0ZJ02iobYXUXL8hFKOqNVytD9tJ0rBzevKHS5u7olHAc7bpCtKixfxXHP8dnyNqVbDDbo1D2ZWVj6X%2BEbKVKv%2FBItguos83EjIwBA4r04iMo9UX6ZNLY8R9EsnJ6iSpO9z3soNqKqnVKwW1EOxEGasyiwK1Py1YdoUTYQeJrUUYAbPTGiegXCIBCN9zPamx9zgSxVf4t3OSIP4zpACdvec2SHh6kDbdH20vtaBjNXG9PhFhr0ektOzWuSww%2FKOSwAY6pgGmU%2B8VDMXtcWsAs4ugikQ%2Fb448UurK1qDpJfnnAvcBZ%2FX%2Fm0xqghdLCcv%2BYZmy4G0qAI5OutRl4yGIAeTcqFQ0K%2FQaun5KgOM%2F49%2FTwTUqzS4Dt59QtSft89pzLDhs1bOYWUB76eu4l6%2BG1YTk%2Bcb%2BpiaAo7bvZnLS4Eo1XRsDnea3Is8EBHg0Vtk02jiME8LTr%2F%2FOwUsDgaKDZidkDUQSiZcKtM4k&X-Amz-Signature=8885dc30cc6f48c18f6403f262a91462a34d2344f55fe09a0f1ecc3b3d685ecb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQGUW575%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIEoKXx6TIPbbosWVsWdVFOCnuppmXj5a1nvlfz9W1mFXAiB9gz%2FqzEyz7cRu%2Fy2a8aGQop1%2BRBpH03%2F2%2F7lEctRRWCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6IHEJVsGJfZqjokUKtwDLppaIfBQtuSUyiqEYjHpySiAS2pUA%2F0lLXMEMFn8D25pUY2QpryCwmxyMVfymd8%2BYiCvHq%2BrP4uysscPK04BWu0ZuoBU38FXdczUy1yQQdFKzJfi71U%2Ba9t8pfNYkLe7q%2FLHpyLeV2jKP%2FbWOB1YAMCe8tRxYR07wgPj3zJVWw9%2FX1NMePCm%2FDuOtVDVCgXY21lOvDKQKn7PQB%2FX4s8uD%2FumkgT4J0Qpkm%2Fyq7ki16xykrQX4qRkuictGb5Ev0nEdskZOZBzop2owdZldn%2B6wWebroz4pM1p0eHEL%2B65%2FLFf%2FzFx46XMwQCDr30xqTLhgDdHMNNol6XgzyDPEc6s4H6JO1E4RfRH4xlLWejHvLZEXM9C7djVu2ABCOfP7JJQU0ZJ02iobYXUXL8hFKOqNVytD9tJ0rBzevKHS5u7olHAc7bpCtKixfxXHP8dnyNqVbDDbo1D2ZWVj6X%2BEbKVKv%2FBItguos83EjIwBA4r04iMo9UX6ZNLY8R9EsnJ6iSpO9z3soNqKqnVKwW1EOxEGasyiwK1Py1YdoUTYQeJrUUYAbPTGiegXCIBCN9zPamx9zgSxVf4t3OSIP4zpACdvec2SHh6kDbdH20vtaBjNXG9PhFhr0ektOzWuSww%2FKOSwAY6pgGmU%2B8VDMXtcWsAs4ugikQ%2Fb448UurK1qDpJfnnAvcBZ%2FX%2Fm0xqghdLCcv%2BYZmy4G0qAI5OutRl4yGIAeTcqFQ0K%2FQaun5KgOM%2F49%2FTwTUqzS4Dt59QtSft89pzLDhs1bOYWUB76eu4l6%2BG1YTk%2Bcb%2BpiaAo7bvZnLS4Eo1XRsDnea3Is8EBHg0Vtk02jiME8LTr%2F%2FOwUsDgaKDZidkDUQSiZcKtM4k&X-Amz-Signature=4f2949de889d6c2b0da92540470e34f37903fe8758135f5238d3374cead8ee6d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQGUW575%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIEoKXx6TIPbbosWVsWdVFOCnuppmXj5a1nvlfz9W1mFXAiB9gz%2FqzEyz7cRu%2Fy2a8aGQop1%2BRBpH03%2F2%2F7lEctRRWCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6IHEJVsGJfZqjokUKtwDLppaIfBQtuSUyiqEYjHpySiAS2pUA%2F0lLXMEMFn8D25pUY2QpryCwmxyMVfymd8%2BYiCvHq%2BrP4uysscPK04BWu0ZuoBU38FXdczUy1yQQdFKzJfi71U%2Ba9t8pfNYkLe7q%2FLHpyLeV2jKP%2FbWOB1YAMCe8tRxYR07wgPj3zJVWw9%2FX1NMePCm%2FDuOtVDVCgXY21lOvDKQKn7PQB%2FX4s8uD%2FumkgT4J0Qpkm%2Fyq7ki16xykrQX4qRkuictGb5Ev0nEdskZOZBzop2owdZldn%2B6wWebroz4pM1p0eHEL%2B65%2FLFf%2FzFx46XMwQCDr30xqTLhgDdHMNNol6XgzyDPEc6s4H6JO1E4RfRH4xlLWejHvLZEXM9C7djVu2ABCOfP7JJQU0ZJ02iobYXUXL8hFKOqNVytD9tJ0rBzevKHS5u7olHAc7bpCtKixfxXHP8dnyNqVbDDbo1D2ZWVj6X%2BEbKVKv%2FBItguos83EjIwBA4r04iMo9UX6ZNLY8R9EsnJ6iSpO9z3soNqKqnVKwW1EOxEGasyiwK1Py1YdoUTYQeJrUUYAbPTGiegXCIBCN9zPamx9zgSxVf4t3OSIP4zpACdvec2SHh6kDbdH20vtaBjNXG9PhFhr0ektOzWuSww%2FKOSwAY6pgGmU%2B8VDMXtcWsAs4ugikQ%2Fb448UurK1qDpJfnnAvcBZ%2FX%2Fm0xqghdLCcv%2BYZmy4G0qAI5OutRl4yGIAeTcqFQ0K%2FQaun5KgOM%2F49%2FTwTUqzS4Dt59QtSft89pzLDhs1bOYWUB76eu4l6%2BG1YTk%2Bcb%2BpiaAo7bvZnLS4Eo1XRsDnea3Is8EBHg0Vtk02jiME8LTr%2F%2FOwUsDgaKDZidkDUQSiZcKtM4k&X-Amz-Signature=4143eaa805aa6d91e9c2556f9c657b187ec27bb6a113d865f3594ba8b29bfc06&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
