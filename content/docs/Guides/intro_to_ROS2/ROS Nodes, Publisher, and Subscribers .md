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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466542LITC4%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIGTAwbcqc7g07QbsfuxBgyHMggTBm9L19jWgHlSBUG0HAiBt1EJhZDrrRTv7y7pVi4QVqBaCGlypdl4hYGJZvWvS4yr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMIY7uBxJtwATffGfhKtwDUlWexcdzZIGfx2w8vz9kAhBIQtobn9TwYi1DKt15vP7MVxhlwpZEV%2FBDDKQqHJnZrX4aFSJhNYCCKxViGVMMYSl2JxxayE0lF2SsMZUAEHJodbrJBYcAH6iM7%2Bu7SDef84mU2gP9hna8HVpPgzvAXtYcnOYCWHmV%2BMzEdCjgGuqjTsQQPcgmK3mpRTRnfUFH%2BrR4Wk2qfU82JMMOpuPK%2FRzI4uI7ar%2Fm8J564PNsRStr8ICjMc66tgErdL3eb4VyBnw8Eo4PTm%2BV%2FfutRtR6WrD%2B71jn5ewd6fUVt9t15AZzLcjVQrNiLOZi3o2caMXt5vHOTBzgp%2FaybKVo35TikHonu5zRyBU4jO9G4wMQxvT9F4HM5saM7iVvBdoV%2B4BwRTa3d01lOk7ftrbwBtWICEmeNzdR4cVnjMgm9on66Ua7i7k284Onnjgh5wQYu0rDIitptkHfWnV%2FOc6gAjO0xl6NDBgoqMyDwhBEUfQ63fB3OHEMJRlk7n%2F36U8WPvi2Ua9CYCNPWIuPLPLDHFyC6bd2BFiG4Jtn%2BVT6nnIl8AcNc2egz8dm%2Bpgc6ehcnH%2FEjTAd2vbOcgQjRCX3P9ymxgG0gDlYRZpYWUqH%2FxDTImHTJJ6ggwQsK%2BwvAFUwzrTmvgY6pgHxZTttD3VU9aRJefPIrrSAtl2%2F%2Buvm%2BGvk4h8okJDbEguyzewT%2BmWZX9JOXy0AdDo0syXZgXSpNXCZkyQWrIn2RDHLfQkEFPdMttqDDca7izbRG04i5QvEJSzxeCrk2db8d71HzOD6a1FW77q9okrtIBFAx9isKA3dhJ2GeQvI8%2BG7WtIVOL6S6JEGYVIRYPuOSwphmkJ5t%2FKRnhJnsQX%2FUQlqycE9&X-Amz-Signature=78ae891c009554e7ee81c64e66ce9fdbc3157479028f935949edf438a1f4881e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466542LITC4%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIGTAwbcqc7g07QbsfuxBgyHMggTBm9L19jWgHlSBUG0HAiBt1EJhZDrrRTv7y7pVi4QVqBaCGlypdl4hYGJZvWvS4yr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMIY7uBxJtwATffGfhKtwDUlWexcdzZIGfx2w8vz9kAhBIQtobn9TwYi1DKt15vP7MVxhlwpZEV%2FBDDKQqHJnZrX4aFSJhNYCCKxViGVMMYSl2JxxayE0lF2SsMZUAEHJodbrJBYcAH6iM7%2Bu7SDef84mU2gP9hna8HVpPgzvAXtYcnOYCWHmV%2BMzEdCjgGuqjTsQQPcgmK3mpRTRnfUFH%2BrR4Wk2qfU82JMMOpuPK%2FRzI4uI7ar%2Fm8J564PNsRStr8ICjMc66tgErdL3eb4VyBnw8Eo4PTm%2BV%2FfutRtR6WrD%2B71jn5ewd6fUVt9t15AZzLcjVQrNiLOZi3o2caMXt5vHOTBzgp%2FaybKVo35TikHonu5zRyBU4jO9G4wMQxvT9F4HM5saM7iVvBdoV%2B4BwRTa3d01lOk7ftrbwBtWICEmeNzdR4cVnjMgm9on66Ua7i7k284Onnjgh5wQYu0rDIitptkHfWnV%2FOc6gAjO0xl6NDBgoqMyDwhBEUfQ63fB3OHEMJRlk7n%2F36U8WPvi2Ua9CYCNPWIuPLPLDHFyC6bd2BFiG4Jtn%2BVT6nnIl8AcNc2egz8dm%2Bpgc6ehcnH%2FEjTAd2vbOcgQjRCX3P9ymxgG0gDlYRZpYWUqH%2FxDTImHTJJ6ggwQsK%2BwvAFUwzrTmvgY6pgHxZTttD3VU9aRJefPIrrSAtl2%2F%2Buvm%2BGvk4h8okJDbEguyzewT%2BmWZX9JOXy0AdDo0syXZgXSpNXCZkyQWrIn2RDHLfQkEFPdMttqDDca7izbRG04i5QvEJSzxeCrk2db8d71HzOD6a1FW77q9okrtIBFAx9isKA3dhJ2GeQvI8%2BG7WtIVOL6S6JEGYVIRYPuOSwphmkJ5t%2FKRnhJnsQX%2FUQlqycE9&X-Amz-Signature=853f87d3ea82e2023f92a26c8dceb913306aefaa7cc8fc0294029ff7ce99c730&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466542LITC4%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIGTAwbcqc7g07QbsfuxBgyHMggTBm9L19jWgHlSBUG0HAiBt1EJhZDrrRTv7y7pVi4QVqBaCGlypdl4hYGJZvWvS4yr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMIY7uBxJtwATffGfhKtwDUlWexcdzZIGfx2w8vz9kAhBIQtobn9TwYi1DKt15vP7MVxhlwpZEV%2FBDDKQqHJnZrX4aFSJhNYCCKxViGVMMYSl2JxxayE0lF2SsMZUAEHJodbrJBYcAH6iM7%2Bu7SDef84mU2gP9hna8HVpPgzvAXtYcnOYCWHmV%2BMzEdCjgGuqjTsQQPcgmK3mpRTRnfUFH%2BrR4Wk2qfU82JMMOpuPK%2FRzI4uI7ar%2Fm8J564PNsRStr8ICjMc66tgErdL3eb4VyBnw8Eo4PTm%2BV%2FfutRtR6WrD%2B71jn5ewd6fUVt9t15AZzLcjVQrNiLOZi3o2caMXt5vHOTBzgp%2FaybKVo35TikHonu5zRyBU4jO9G4wMQxvT9F4HM5saM7iVvBdoV%2B4BwRTa3d01lOk7ftrbwBtWICEmeNzdR4cVnjMgm9on66Ua7i7k284Onnjgh5wQYu0rDIitptkHfWnV%2FOc6gAjO0xl6NDBgoqMyDwhBEUfQ63fB3OHEMJRlk7n%2F36U8WPvi2Ua9CYCNPWIuPLPLDHFyC6bd2BFiG4Jtn%2BVT6nnIl8AcNc2egz8dm%2Bpgc6ehcnH%2FEjTAd2vbOcgQjRCX3P9ymxgG0gDlYRZpYWUqH%2FxDTImHTJJ6ggwQsK%2BwvAFUwzrTmvgY6pgHxZTttD3VU9aRJefPIrrSAtl2%2F%2Buvm%2BGvk4h8okJDbEguyzewT%2BmWZX9JOXy0AdDo0syXZgXSpNXCZkyQWrIn2RDHLfQkEFPdMttqDDca7izbRG04i5QvEJSzxeCrk2db8d71HzOD6a1FW77q9okrtIBFAx9isKA3dhJ2GeQvI8%2BG7WtIVOL6S6JEGYVIRYPuOSwphmkJ5t%2FKRnhJnsQX%2FUQlqycE9&X-Amz-Signature=d0d9b64e3820368f36a8b33b6b190e67a89b677c1c7eda5ed75d7dbcfd3117a2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466542LITC4%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIGTAwbcqc7g07QbsfuxBgyHMggTBm9L19jWgHlSBUG0HAiBt1EJhZDrrRTv7y7pVi4QVqBaCGlypdl4hYGJZvWvS4yr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMIY7uBxJtwATffGfhKtwDUlWexcdzZIGfx2w8vz9kAhBIQtobn9TwYi1DKt15vP7MVxhlwpZEV%2FBDDKQqHJnZrX4aFSJhNYCCKxViGVMMYSl2JxxayE0lF2SsMZUAEHJodbrJBYcAH6iM7%2Bu7SDef84mU2gP9hna8HVpPgzvAXtYcnOYCWHmV%2BMzEdCjgGuqjTsQQPcgmK3mpRTRnfUFH%2BrR4Wk2qfU82JMMOpuPK%2FRzI4uI7ar%2Fm8J564PNsRStr8ICjMc66tgErdL3eb4VyBnw8Eo4PTm%2BV%2FfutRtR6WrD%2B71jn5ewd6fUVt9t15AZzLcjVQrNiLOZi3o2caMXt5vHOTBzgp%2FaybKVo35TikHonu5zRyBU4jO9G4wMQxvT9F4HM5saM7iVvBdoV%2B4BwRTa3d01lOk7ftrbwBtWICEmeNzdR4cVnjMgm9on66Ua7i7k284Onnjgh5wQYu0rDIitptkHfWnV%2FOc6gAjO0xl6NDBgoqMyDwhBEUfQ63fB3OHEMJRlk7n%2F36U8WPvi2Ua9CYCNPWIuPLPLDHFyC6bd2BFiG4Jtn%2BVT6nnIl8AcNc2egz8dm%2Bpgc6ehcnH%2FEjTAd2vbOcgQjRCX3P9ymxgG0gDlYRZpYWUqH%2FxDTImHTJJ6ggwQsK%2BwvAFUwzrTmvgY6pgHxZTttD3VU9aRJefPIrrSAtl2%2F%2Buvm%2BGvk4h8okJDbEguyzewT%2BmWZX9JOXy0AdDo0syXZgXSpNXCZkyQWrIn2RDHLfQkEFPdMttqDDca7izbRG04i5QvEJSzxeCrk2db8d71HzOD6a1FW77q9okrtIBFAx9isKA3dhJ2GeQvI8%2BG7WtIVOL6S6JEGYVIRYPuOSwphmkJ5t%2FKRnhJnsQX%2FUQlqycE9&X-Amz-Signature=3a5a3f48452863e307bb08fb53aa57bc65bc0eda3fe0118cf88dda25a7f16209&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466542LITC4%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIGTAwbcqc7g07QbsfuxBgyHMggTBm9L19jWgHlSBUG0HAiBt1EJhZDrrRTv7y7pVi4QVqBaCGlypdl4hYGJZvWvS4yr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMIY7uBxJtwATffGfhKtwDUlWexcdzZIGfx2w8vz9kAhBIQtobn9TwYi1DKt15vP7MVxhlwpZEV%2FBDDKQqHJnZrX4aFSJhNYCCKxViGVMMYSl2JxxayE0lF2SsMZUAEHJodbrJBYcAH6iM7%2Bu7SDef84mU2gP9hna8HVpPgzvAXtYcnOYCWHmV%2BMzEdCjgGuqjTsQQPcgmK3mpRTRnfUFH%2BrR4Wk2qfU82JMMOpuPK%2FRzI4uI7ar%2Fm8J564PNsRStr8ICjMc66tgErdL3eb4VyBnw8Eo4PTm%2BV%2FfutRtR6WrD%2B71jn5ewd6fUVt9t15AZzLcjVQrNiLOZi3o2caMXt5vHOTBzgp%2FaybKVo35TikHonu5zRyBU4jO9G4wMQxvT9F4HM5saM7iVvBdoV%2B4BwRTa3d01lOk7ftrbwBtWICEmeNzdR4cVnjMgm9on66Ua7i7k284Onnjgh5wQYu0rDIitptkHfWnV%2FOc6gAjO0xl6NDBgoqMyDwhBEUfQ63fB3OHEMJRlk7n%2F36U8WPvi2Ua9CYCNPWIuPLPLDHFyC6bd2BFiG4Jtn%2BVT6nnIl8AcNc2egz8dm%2Bpgc6ehcnH%2FEjTAd2vbOcgQjRCX3P9ymxgG0gDlYRZpYWUqH%2FxDTImHTJJ6ggwQsK%2BwvAFUwzrTmvgY6pgHxZTttD3VU9aRJefPIrrSAtl2%2F%2Buvm%2BGvk4h8okJDbEguyzewT%2BmWZX9JOXy0AdDo0syXZgXSpNXCZkyQWrIn2RDHLfQkEFPdMttqDDca7izbRG04i5QvEJSzxeCrk2db8d71HzOD6a1FW77q9okrtIBFAx9isKA3dhJ2GeQvI8%2BG7WtIVOL6S6JEGYVIRYPuOSwphmkJ5t%2FKRnhJnsQX%2FUQlqycE9&X-Amz-Signature=e89930f8b5600d6d7a138c3294f8156600f45c5ddb5ad0acc7981f330c5b5ccc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466542LITC4%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIGTAwbcqc7g07QbsfuxBgyHMggTBm9L19jWgHlSBUG0HAiBt1EJhZDrrRTv7y7pVi4QVqBaCGlypdl4hYGJZvWvS4yr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMIY7uBxJtwATffGfhKtwDUlWexcdzZIGfx2w8vz9kAhBIQtobn9TwYi1DKt15vP7MVxhlwpZEV%2FBDDKQqHJnZrX4aFSJhNYCCKxViGVMMYSl2JxxayE0lF2SsMZUAEHJodbrJBYcAH6iM7%2Bu7SDef84mU2gP9hna8HVpPgzvAXtYcnOYCWHmV%2BMzEdCjgGuqjTsQQPcgmK3mpRTRnfUFH%2BrR4Wk2qfU82JMMOpuPK%2FRzI4uI7ar%2Fm8J564PNsRStr8ICjMc66tgErdL3eb4VyBnw8Eo4PTm%2BV%2FfutRtR6WrD%2B71jn5ewd6fUVt9t15AZzLcjVQrNiLOZi3o2caMXt5vHOTBzgp%2FaybKVo35TikHonu5zRyBU4jO9G4wMQxvT9F4HM5saM7iVvBdoV%2B4BwRTa3d01lOk7ftrbwBtWICEmeNzdR4cVnjMgm9on66Ua7i7k284Onnjgh5wQYu0rDIitptkHfWnV%2FOc6gAjO0xl6NDBgoqMyDwhBEUfQ63fB3OHEMJRlk7n%2F36U8WPvi2Ua9CYCNPWIuPLPLDHFyC6bd2BFiG4Jtn%2BVT6nnIl8AcNc2egz8dm%2Bpgc6ehcnH%2FEjTAd2vbOcgQjRCX3P9ymxgG0gDlYRZpYWUqH%2FxDTImHTJJ6ggwQsK%2BwvAFUwzrTmvgY6pgHxZTttD3VU9aRJefPIrrSAtl2%2F%2Buvm%2BGvk4h8okJDbEguyzewT%2BmWZX9JOXy0AdDo0syXZgXSpNXCZkyQWrIn2RDHLfQkEFPdMttqDDca7izbRG04i5QvEJSzxeCrk2db8d71HzOD6a1FW77q9okrtIBFAx9isKA3dhJ2GeQvI8%2BG7WtIVOL6S6JEGYVIRYPuOSwphmkJ5t%2FKRnhJnsQX%2FUQlqycE9&X-Amz-Signature=16e8439b14286cb731c87a6aec54736e5c86261a2cdee5fe9b3e2d44a8e0c17a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466542LITC4%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIGTAwbcqc7g07QbsfuxBgyHMggTBm9L19jWgHlSBUG0HAiBt1EJhZDrrRTv7y7pVi4QVqBaCGlypdl4hYGJZvWvS4yr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMIY7uBxJtwATffGfhKtwDUlWexcdzZIGfx2w8vz9kAhBIQtobn9TwYi1DKt15vP7MVxhlwpZEV%2FBDDKQqHJnZrX4aFSJhNYCCKxViGVMMYSl2JxxayE0lF2SsMZUAEHJodbrJBYcAH6iM7%2Bu7SDef84mU2gP9hna8HVpPgzvAXtYcnOYCWHmV%2BMzEdCjgGuqjTsQQPcgmK3mpRTRnfUFH%2BrR4Wk2qfU82JMMOpuPK%2FRzI4uI7ar%2Fm8J564PNsRStr8ICjMc66tgErdL3eb4VyBnw8Eo4PTm%2BV%2FfutRtR6WrD%2B71jn5ewd6fUVt9t15AZzLcjVQrNiLOZi3o2caMXt5vHOTBzgp%2FaybKVo35TikHonu5zRyBU4jO9G4wMQxvT9F4HM5saM7iVvBdoV%2B4BwRTa3d01lOk7ftrbwBtWICEmeNzdR4cVnjMgm9on66Ua7i7k284Onnjgh5wQYu0rDIitptkHfWnV%2FOc6gAjO0xl6NDBgoqMyDwhBEUfQ63fB3OHEMJRlk7n%2F36U8WPvi2Ua9CYCNPWIuPLPLDHFyC6bd2BFiG4Jtn%2BVT6nnIl8AcNc2egz8dm%2Bpgc6ehcnH%2FEjTAd2vbOcgQjRCX3P9ymxgG0gDlYRZpYWUqH%2FxDTImHTJJ6ggwQsK%2BwvAFUwzrTmvgY6pgHxZTttD3VU9aRJefPIrrSAtl2%2F%2Buvm%2BGvk4h8okJDbEguyzewT%2BmWZX9JOXy0AdDo0syXZgXSpNXCZkyQWrIn2RDHLfQkEFPdMttqDDca7izbRG04i5QvEJSzxeCrk2db8d71HzOD6a1FW77q9okrtIBFAx9isKA3dhJ2GeQvI8%2BG7WtIVOL6S6JEGYVIRYPuOSwphmkJ5t%2FKRnhJnsQX%2FUQlqycE9&X-Amz-Signature=6a74c7f00d57b46bbc6bf25e4f2fd79685a70ac99fe81e654102876e0f8c0b5c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466542LITC4%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIGTAwbcqc7g07QbsfuxBgyHMggTBm9L19jWgHlSBUG0HAiBt1EJhZDrrRTv7y7pVi4QVqBaCGlypdl4hYGJZvWvS4yr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMIY7uBxJtwATffGfhKtwDUlWexcdzZIGfx2w8vz9kAhBIQtobn9TwYi1DKt15vP7MVxhlwpZEV%2FBDDKQqHJnZrX4aFSJhNYCCKxViGVMMYSl2JxxayE0lF2SsMZUAEHJodbrJBYcAH6iM7%2Bu7SDef84mU2gP9hna8HVpPgzvAXtYcnOYCWHmV%2BMzEdCjgGuqjTsQQPcgmK3mpRTRnfUFH%2BrR4Wk2qfU82JMMOpuPK%2FRzI4uI7ar%2Fm8J564PNsRStr8ICjMc66tgErdL3eb4VyBnw8Eo4PTm%2BV%2FfutRtR6WrD%2B71jn5ewd6fUVt9t15AZzLcjVQrNiLOZi3o2caMXt5vHOTBzgp%2FaybKVo35TikHonu5zRyBU4jO9G4wMQxvT9F4HM5saM7iVvBdoV%2B4BwRTa3d01lOk7ftrbwBtWICEmeNzdR4cVnjMgm9on66Ua7i7k284Onnjgh5wQYu0rDIitptkHfWnV%2FOc6gAjO0xl6NDBgoqMyDwhBEUfQ63fB3OHEMJRlk7n%2F36U8WPvi2Ua9CYCNPWIuPLPLDHFyC6bd2BFiG4Jtn%2BVT6nnIl8AcNc2egz8dm%2Bpgc6ehcnH%2FEjTAd2vbOcgQjRCX3P9ymxgG0gDlYRZpYWUqH%2FxDTImHTJJ6ggwQsK%2BwvAFUwzrTmvgY6pgHxZTttD3VU9aRJefPIrrSAtl2%2F%2Buvm%2BGvk4h8okJDbEguyzewT%2BmWZX9JOXy0AdDo0syXZgXSpNXCZkyQWrIn2RDHLfQkEFPdMttqDDca7izbRG04i5QvEJSzxeCrk2db8d71HzOD6a1FW77q9okrtIBFAx9isKA3dhJ2GeQvI8%2BG7WtIVOL6S6JEGYVIRYPuOSwphmkJ5t%2FKRnhJnsQX%2FUQlqycE9&X-Amz-Signature=4a5ba1da30b4397c3e3aa0e388e82fe9be1bb381e79bb20be864a739ba0fea90&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
