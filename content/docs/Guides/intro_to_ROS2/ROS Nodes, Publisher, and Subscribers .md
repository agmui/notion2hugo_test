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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK5OFEC4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCID9C4AqzCki%2BQgS5SWyzMusPoc7H2jlXxcRC9fLLGpUYAiBG3TEUxJByR5o3%2FXyfxbMrEXI900ZKyWXekaN6ztRSwyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMhhiAXlzKJtuKhkQRKtwDhSc4DD0HVtD8CP2nELyo3Du02tih%2FOb8qwxG6f9GoDJEjGpbk9FlLf%2FK%2FSCNuchj%2BlbKAcVoEvpXqHQv1bjNmR1XeE8awcFaKn0JHQIJA%2BHdIolmOGijWWR8Uqe1msr2HSOOYoUFiG9SEdwZI8c2vFFPDfym5D%2BydwDIi8ikqVLVJxnebArerQBqlowothkvhnDqRXmOUDANEgDOaLtsanXeWtsvAnMtev5ebBb63f2Ki0ljiujh8s319a9Phx8BrXbc8h34yTR5iIDdt4THuvHMXMBuB0G2lXhW3OU0NcDh29pvLGt7UagM1ghtMjzvlqOQTdRiYGfWKBp5jaj1A%2BBSjvb%2BZ54KYX3kQAm%2Bd%2BUQdJAekgkwNiEkff%2FefxYpEf%2FITebDt5vna7cvDr6MZudVwxB2lo6deSXr7klg7u0rSe7jB4%2BkuOHpKzuObSXF3xrL1Xdq7qJ3V2oPUdT%2FuBl2KFDX0e243BPbEAvHjIKNDA6%2Fg3ub7l8DrRvdyCW%2Be3LYYMQgwvnjXNRJq%2FbfC3LeLS%2FjaEeCuDuPqPev7kqui3NvyYatLBoXTdbCE6Q%2BhQqNfDOzmCj4s7x2KAfi9oNzPM2xUiY0oKe2Q3MsW293MXaUwFQ7A471cMww%2B%2F6UvQY6pgHMCoM8d62vbOw2KWbS0%2BFjV8lQalADj3Z4fEjS0gF1K%2FT78mKo%2FIz7OU1idjYnvba9kQG3FUx80IRMjfHXzp44ec4LOUTS%2F5gJmj0vZhZgVJjb4cLFl%2FnH82rQkrHX6YbijjrR8MXYKnW3SmreNkvumvbpl1aiRBWDvIJh0IcwuOuys4hwvjardpUjeIAZPszIbvNTRLVJ2fKT3gTpxdI54A%2FpgQYI&X-Amz-Signature=69f9b65c49f86f4d6a0b47344ff79f17b74d9aaa6296dc3c0b6b90e8032c7efb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK5OFEC4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCID9C4AqzCki%2BQgS5SWyzMusPoc7H2jlXxcRC9fLLGpUYAiBG3TEUxJByR5o3%2FXyfxbMrEXI900ZKyWXekaN6ztRSwyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMhhiAXlzKJtuKhkQRKtwDhSc4DD0HVtD8CP2nELyo3Du02tih%2FOb8qwxG6f9GoDJEjGpbk9FlLf%2FK%2FSCNuchj%2BlbKAcVoEvpXqHQv1bjNmR1XeE8awcFaKn0JHQIJA%2BHdIolmOGijWWR8Uqe1msr2HSOOYoUFiG9SEdwZI8c2vFFPDfym5D%2BydwDIi8ikqVLVJxnebArerQBqlowothkvhnDqRXmOUDANEgDOaLtsanXeWtsvAnMtev5ebBb63f2Ki0ljiujh8s319a9Phx8BrXbc8h34yTR5iIDdt4THuvHMXMBuB0G2lXhW3OU0NcDh29pvLGt7UagM1ghtMjzvlqOQTdRiYGfWKBp5jaj1A%2BBSjvb%2BZ54KYX3kQAm%2Bd%2BUQdJAekgkwNiEkff%2FefxYpEf%2FITebDt5vna7cvDr6MZudVwxB2lo6deSXr7klg7u0rSe7jB4%2BkuOHpKzuObSXF3xrL1Xdq7qJ3V2oPUdT%2FuBl2KFDX0e243BPbEAvHjIKNDA6%2Fg3ub7l8DrRvdyCW%2Be3LYYMQgwvnjXNRJq%2FbfC3LeLS%2FjaEeCuDuPqPev7kqui3NvyYatLBoXTdbCE6Q%2BhQqNfDOzmCj4s7x2KAfi9oNzPM2xUiY0oKe2Q3MsW293MXaUwFQ7A471cMww%2B%2F6UvQY6pgHMCoM8d62vbOw2KWbS0%2BFjV8lQalADj3Z4fEjS0gF1K%2FT78mKo%2FIz7OU1idjYnvba9kQG3FUx80IRMjfHXzp44ec4LOUTS%2F5gJmj0vZhZgVJjb4cLFl%2FnH82rQkrHX6YbijjrR8MXYKnW3SmreNkvumvbpl1aiRBWDvIJh0IcwuOuys4hwvjardpUjeIAZPszIbvNTRLVJ2fKT3gTpxdI54A%2FpgQYI&X-Amz-Signature=f15988915a20ad5ad0d03bd630abfa4bd4f88eb3eb76b8fec843eb19f37e1efd&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK5OFEC4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCID9C4AqzCki%2BQgS5SWyzMusPoc7H2jlXxcRC9fLLGpUYAiBG3TEUxJByR5o3%2FXyfxbMrEXI900ZKyWXekaN6ztRSwyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMhhiAXlzKJtuKhkQRKtwDhSc4DD0HVtD8CP2nELyo3Du02tih%2FOb8qwxG6f9GoDJEjGpbk9FlLf%2FK%2FSCNuchj%2BlbKAcVoEvpXqHQv1bjNmR1XeE8awcFaKn0JHQIJA%2BHdIolmOGijWWR8Uqe1msr2HSOOYoUFiG9SEdwZI8c2vFFPDfym5D%2BydwDIi8ikqVLVJxnebArerQBqlowothkvhnDqRXmOUDANEgDOaLtsanXeWtsvAnMtev5ebBb63f2Ki0ljiujh8s319a9Phx8BrXbc8h34yTR5iIDdt4THuvHMXMBuB0G2lXhW3OU0NcDh29pvLGt7UagM1ghtMjzvlqOQTdRiYGfWKBp5jaj1A%2BBSjvb%2BZ54KYX3kQAm%2Bd%2BUQdJAekgkwNiEkff%2FefxYpEf%2FITebDt5vna7cvDr6MZudVwxB2lo6deSXr7klg7u0rSe7jB4%2BkuOHpKzuObSXF3xrL1Xdq7qJ3V2oPUdT%2FuBl2KFDX0e243BPbEAvHjIKNDA6%2Fg3ub7l8DrRvdyCW%2Be3LYYMQgwvnjXNRJq%2FbfC3LeLS%2FjaEeCuDuPqPev7kqui3NvyYatLBoXTdbCE6Q%2BhQqNfDOzmCj4s7x2KAfi9oNzPM2xUiY0oKe2Q3MsW293MXaUwFQ7A471cMww%2B%2F6UvQY6pgHMCoM8d62vbOw2KWbS0%2BFjV8lQalADj3Z4fEjS0gF1K%2FT78mKo%2FIz7OU1idjYnvba9kQG3FUx80IRMjfHXzp44ec4LOUTS%2F5gJmj0vZhZgVJjb4cLFl%2FnH82rQkrHX6YbijjrR8MXYKnW3SmreNkvumvbpl1aiRBWDvIJh0IcwuOuys4hwvjardpUjeIAZPszIbvNTRLVJ2fKT3gTpxdI54A%2FpgQYI&X-Amz-Signature=cda9a9d511deca004b429c7c6c627b38cb755c2e9f28ecaaa3652348f3e5177e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK5OFEC4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCID9C4AqzCki%2BQgS5SWyzMusPoc7H2jlXxcRC9fLLGpUYAiBG3TEUxJByR5o3%2FXyfxbMrEXI900ZKyWXekaN6ztRSwyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMhhiAXlzKJtuKhkQRKtwDhSc4DD0HVtD8CP2nELyo3Du02tih%2FOb8qwxG6f9GoDJEjGpbk9FlLf%2FK%2FSCNuchj%2BlbKAcVoEvpXqHQv1bjNmR1XeE8awcFaKn0JHQIJA%2BHdIolmOGijWWR8Uqe1msr2HSOOYoUFiG9SEdwZI8c2vFFPDfym5D%2BydwDIi8ikqVLVJxnebArerQBqlowothkvhnDqRXmOUDANEgDOaLtsanXeWtsvAnMtev5ebBb63f2Ki0ljiujh8s319a9Phx8BrXbc8h34yTR5iIDdt4THuvHMXMBuB0G2lXhW3OU0NcDh29pvLGt7UagM1ghtMjzvlqOQTdRiYGfWKBp5jaj1A%2BBSjvb%2BZ54KYX3kQAm%2Bd%2BUQdJAekgkwNiEkff%2FefxYpEf%2FITebDt5vna7cvDr6MZudVwxB2lo6deSXr7klg7u0rSe7jB4%2BkuOHpKzuObSXF3xrL1Xdq7qJ3V2oPUdT%2FuBl2KFDX0e243BPbEAvHjIKNDA6%2Fg3ub7l8DrRvdyCW%2Be3LYYMQgwvnjXNRJq%2FbfC3LeLS%2FjaEeCuDuPqPev7kqui3NvyYatLBoXTdbCE6Q%2BhQqNfDOzmCj4s7x2KAfi9oNzPM2xUiY0oKe2Q3MsW293MXaUwFQ7A471cMww%2B%2F6UvQY6pgHMCoM8d62vbOw2KWbS0%2BFjV8lQalADj3Z4fEjS0gF1K%2FT78mKo%2FIz7OU1idjYnvba9kQG3FUx80IRMjfHXzp44ec4LOUTS%2F5gJmj0vZhZgVJjb4cLFl%2FnH82rQkrHX6YbijjrR8MXYKnW3SmreNkvumvbpl1aiRBWDvIJh0IcwuOuys4hwvjardpUjeIAZPszIbvNTRLVJ2fKT3gTpxdI54A%2FpgQYI&X-Amz-Signature=f466c3f6827fd2ba1567322dc7f7c65cdc7b34992f5c00ccb46a5b7256d028fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK5OFEC4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCID9C4AqzCki%2BQgS5SWyzMusPoc7H2jlXxcRC9fLLGpUYAiBG3TEUxJByR5o3%2FXyfxbMrEXI900ZKyWXekaN6ztRSwyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMhhiAXlzKJtuKhkQRKtwDhSc4DD0HVtD8CP2nELyo3Du02tih%2FOb8qwxG6f9GoDJEjGpbk9FlLf%2FK%2FSCNuchj%2BlbKAcVoEvpXqHQv1bjNmR1XeE8awcFaKn0JHQIJA%2BHdIolmOGijWWR8Uqe1msr2HSOOYoUFiG9SEdwZI8c2vFFPDfym5D%2BydwDIi8ikqVLVJxnebArerQBqlowothkvhnDqRXmOUDANEgDOaLtsanXeWtsvAnMtev5ebBb63f2Ki0ljiujh8s319a9Phx8BrXbc8h34yTR5iIDdt4THuvHMXMBuB0G2lXhW3OU0NcDh29pvLGt7UagM1ghtMjzvlqOQTdRiYGfWKBp5jaj1A%2BBSjvb%2BZ54KYX3kQAm%2Bd%2BUQdJAekgkwNiEkff%2FefxYpEf%2FITebDt5vna7cvDr6MZudVwxB2lo6deSXr7klg7u0rSe7jB4%2BkuOHpKzuObSXF3xrL1Xdq7qJ3V2oPUdT%2FuBl2KFDX0e243BPbEAvHjIKNDA6%2Fg3ub7l8DrRvdyCW%2Be3LYYMQgwvnjXNRJq%2FbfC3LeLS%2FjaEeCuDuPqPev7kqui3NvyYatLBoXTdbCE6Q%2BhQqNfDOzmCj4s7x2KAfi9oNzPM2xUiY0oKe2Q3MsW293MXaUwFQ7A471cMww%2B%2F6UvQY6pgHMCoM8d62vbOw2KWbS0%2BFjV8lQalADj3Z4fEjS0gF1K%2FT78mKo%2FIz7OU1idjYnvba9kQG3FUx80IRMjfHXzp44ec4LOUTS%2F5gJmj0vZhZgVJjb4cLFl%2FnH82rQkrHX6YbijjrR8MXYKnW3SmreNkvumvbpl1aiRBWDvIJh0IcwuOuys4hwvjardpUjeIAZPszIbvNTRLVJ2fKT3gTpxdI54A%2FpgQYI&X-Amz-Signature=d0fc34081016f99e1df39851a326d2848c1f1b63cc3c49eab1cf556ff483d409&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK5OFEC4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCID9C4AqzCki%2BQgS5SWyzMusPoc7H2jlXxcRC9fLLGpUYAiBG3TEUxJByR5o3%2FXyfxbMrEXI900ZKyWXekaN6ztRSwyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMhhiAXlzKJtuKhkQRKtwDhSc4DD0HVtD8CP2nELyo3Du02tih%2FOb8qwxG6f9GoDJEjGpbk9FlLf%2FK%2FSCNuchj%2BlbKAcVoEvpXqHQv1bjNmR1XeE8awcFaKn0JHQIJA%2BHdIolmOGijWWR8Uqe1msr2HSOOYoUFiG9SEdwZI8c2vFFPDfym5D%2BydwDIi8ikqVLVJxnebArerQBqlowothkvhnDqRXmOUDANEgDOaLtsanXeWtsvAnMtev5ebBb63f2Ki0ljiujh8s319a9Phx8BrXbc8h34yTR5iIDdt4THuvHMXMBuB0G2lXhW3OU0NcDh29pvLGt7UagM1ghtMjzvlqOQTdRiYGfWKBp5jaj1A%2BBSjvb%2BZ54KYX3kQAm%2Bd%2BUQdJAekgkwNiEkff%2FefxYpEf%2FITebDt5vna7cvDr6MZudVwxB2lo6deSXr7klg7u0rSe7jB4%2BkuOHpKzuObSXF3xrL1Xdq7qJ3V2oPUdT%2FuBl2KFDX0e243BPbEAvHjIKNDA6%2Fg3ub7l8DrRvdyCW%2Be3LYYMQgwvnjXNRJq%2FbfC3LeLS%2FjaEeCuDuPqPev7kqui3NvyYatLBoXTdbCE6Q%2BhQqNfDOzmCj4s7x2KAfi9oNzPM2xUiY0oKe2Q3MsW293MXaUwFQ7A471cMww%2B%2F6UvQY6pgHMCoM8d62vbOw2KWbS0%2BFjV8lQalADj3Z4fEjS0gF1K%2FT78mKo%2FIz7OU1idjYnvba9kQG3FUx80IRMjfHXzp44ec4LOUTS%2F5gJmj0vZhZgVJjb4cLFl%2FnH82rQkrHX6YbijjrR8MXYKnW3SmreNkvumvbpl1aiRBWDvIJh0IcwuOuys4hwvjardpUjeIAZPszIbvNTRLVJ2fKT3gTpxdI54A%2FpgQYI&X-Amz-Signature=289c982463d98d4c0f9e1e1bcf82d732760d7d7a11f8585352fb32b388534d81&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK5OFEC4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCID9C4AqzCki%2BQgS5SWyzMusPoc7H2jlXxcRC9fLLGpUYAiBG3TEUxJByR5o3%2FXyfxbMrEXI900ZKyWXekaN6ztRSwyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMhhiAXlzKJtuKhkQRKtwDhSc4DD0HVtD8CP2nELyo3Du02tih%2FOb8qwxG6f9GoDJEjGpbk9FlLf%2FK%2FSCNuchj%2BlbKAcVoEvpXqHQv1bjNmR1XeE8awcFaKn0JHQIJA%2BHdIolmOGijWWR8Uqe1msr2HSOOYoUFiG9SEdwZI8c2vFFPDfym5D%2BydwDIi8ikqVLVJxnebArerQBqlowothkvhnDqRXmOUDANEgDOaLtsanXeWtsvAnMtev5ebBb63f2Ki0ljiujh8s319a9Phx8BrXbc8h34yTR5iIDdt4THuvHMXMBuB0G2lXhW3OU0NcDh29pvLGt7UagM1ghtMjzvlqOQTdRiYGfWKBp5jaj1A%2BBSjvb%2BZ54KYX3kQAm%2Bd%2BUQdJAekgkwNiEkff%2FefxYpEf%2FITebDt5vna7cvDr6MZudVwxB2lo6deSXr7klg7u0rSe7jB4%2BkuOHpKzuObSXF3xrL1Xdq7qJ3V2oPUdT%2FuBl2KFDX0e243BPbEAvHjIKNDA6%2Fg3ub7l8DrRvdyCW%2Be3LYYMQgwvnjXNRJq%2FbfC3LeLS%2FjaEeCuDuPqPev7kqui3NvyYatLBoXTdbCE6Q%2BhQqNfDOzmCj4s7x2KAfi9oNzPM2xUiY0oKe2Q3MsW293MXaUwFQ7A471cMww%2B%2F6UvQY6pgHMCoM8d62vbOw2KWbS0%2BFjV8lQalADj3Z4fEjS0gF1K%2FT78mKo%2FIz7OU1idjYnvba9kQG3FUx80IRMjfHXzp44ec4LOUTS%2F5gJmj0vZhZgVJjb4cLFl%2FnH82rQkrHX6YbijjrR8MXYKnW3SmreNkvumvbpl1aiRBWDvIJh0IcwuOuys4hwvjardpUjeIAZPszIbvNTRLVJ2fKT3gTpxdI54A%2FpgQYI&X-Amz-Signature=0312762c09f31f5f01e5b5b143706f305187be0839526f6cb4552ab50fe26570&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK5OFEC4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCID9C4AqzCki%2BQgS5SWyzMusPoc7H2jlXxcRC9fLLGpUYAiBG3TEUxJByR5o3%2FXyfxbMrEXI900ZKyWXekaN6ztRSwyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMhhiAXlzKJtuKhkQRKtwDhSc4DD0HVtD8CP2nELyo3Du02tih%2FOb8qwxG6f9GoDJEjGpbk9FlLf%2FK%2FSCNuchj%2BlbKAcVoEvpXqHQv1bjNmR1XeE8awcFaKn0JHQIJA%2BHdIolmOGijWWR8Uqe1msr2HSOOYoUFiG9SEdwZI8c2vFFPDfym5D%2BydwDIi8ikqVLVJxnebArerQBqlowothkvhnDqRXmOUDANEgDOaLtsanXeWtsvAnMtev5ebBb63f2Ki0ljiujh8s319a9Phx8BrXbc8h34yTR5iIDdt4THuvHMXMBuB0G2lXhW3OU0NcDh29pvLGt7UagM1ghtMjzvlqOQTdRiYGfWKBp5jaj1A%2BBSjvb%2BZ54KYX3kQAm%2Bd%2BUQdJAekgkwNiEkff%2FefxYpEf%2FITebDt5vna7cvDr6MZudVwxB2lo6deSXr7klg7u0rSe7jB4%2BkuOHpKzuObSXF3xrL1Xdq7qJ3V2oPUdT%2FuBl2KFDX0e243BPbEAvHjIKNDA6%2Fg3ub7l8DrRvdyCW%2Be3LYYMQgwvnjXNRJq%2FbfC3LeLS%2FjaEeCuDuPqPev7kqui3NvyYatLBoXTdbCE6Q%2BhQqNfDOzmCj4s7x2KAfi9oNzPM2xUiY0oKe2Q3MsW293MXaUwFQ7A471cMww%2B%2F6UvQY6pgHMCoM8d62vbOw2KWbS0%2BFjV8lQalADj3Z4fEjS0gF1K%2FT78mKo%2FIz7OU1idjYnvba9kQG3FUx80IRMjfHXzp44ec4LOUTS%2F5gJmj0vZhZgVJjb4cLFl%2FnH82rQkrHX6YbijjrR8MXYKnW3SmreNkvumvbpl1aiRBWDvIJh0IcwuOuys4hwvjardpUjeIAZPszIbvNTRLVJ2fKT3gTpxdI54A%2FpgQYI&X-Amz-Signature=d25286ea74dedc1aae70c3f5724dde1c4a47d3319ae5bba11e540cfce5156011&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
