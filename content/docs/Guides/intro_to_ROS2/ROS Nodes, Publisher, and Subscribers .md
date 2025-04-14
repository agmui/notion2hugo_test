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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQG7P7VQ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BPhuclkDzOXFjVQpzFqEgKgQK5zVL%2Bw25hzr71bEsMAIhALcSg2lDWlxkt3YNBLaBg8wZGDp7RlL7gmOrofGejYcIKv8DCBcQABoMNjM3NDIzMTgzODA1Igy143ocdlzHoP%2F%2FYNsq3ANoUmtkmh4oqIH4ddkq1ZfYIpA4OVQqnxI95LXvfTh1pacLDtSu1Uu0LnVW%2FvXM4eRKtaX%2B6UHNc%2F2KsO68lwmP4MGg%2B4%2F%2Bs1X8ky7qQVEPC8zuWu2mnptyfRwQL8JGTs1c%2BbwlS1bOwMveEJsWqjeVT9wHKvoLb1bKUqUdki9hScOHNdQiWGO8XsqBy7L5V%2B8lwVFyNkDUnT%2B9WeA8X6oEMaKnqT%2BItq%2BPed53yTypT%2FlVJ9Bd5ZOn2HrbISRl7GmUvL8Euvp6cDcV83yeKS%2BiJ3aOswKGyv%2FRKjby43bp1rPABN0BmOWDCTRXIDfMh2GXKAgT0sy%2FagqtZ5134d34zKIarvu0yrrQyP16vV%2FdLHE%2Be0S5KStNNCnDxD8HH6gGjZQazvww4D%2BNkcHYPTkQE4FW%2BrBlnLEVC%2FxMu5CUCrG48z5jIHcMtokpJiPLZdeFTYoptdJCRUzvu5pRGfe5S%2B93Etld4y1oUL14XN8Ovn%2FvT24iw%2FmmGrw3gXIYKCu90MzKf4C%2FI1BGjpbcTvRuxpHkerR1%2BPLqSEkpj7IMP2XTIedIkIyK6ZEgAD8M4e%2F2j6ixK7IYgBlZItVTE7hcbhkhhqq0IFBBwGH3r8gmqb5fxLeyVIPWGniP3zCXqPS%2FBjqkATWMH%2BCBymmxvIdHPlua9NrgetgD0hhTVKxir6HmoyWmsBQ2WqimqiP1fcnCbhDWnLbPOSkpmx4I43jczVmgl5a4HkuIM%2F3gaX%2Byft3uCYU6JVTzIC324QA0dRCetsMUl%2FsQ4DWrAGxgJsHKKiPmYjkriaFq4mz9gNovbxD%2Bh%2F8017mtM%2F6cVJ%2B0vdGvBCGdCasTYow1QtBjV0jDybwlo%2B32ulce&X-Amz-Signature=77bfb97d5f89bc9cf36827d11bbb36e806a81f01d76a145333e572272092093a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQG7P7VQ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BPhuclkDzOXFjVQpzFqEgKgQK5zVL%2Bw25hzr71bEsMAIhALcSg2lDWlxkt3YNBLaBg8wZGDp7RlL7gmOrofGejYcIKv8DCBcQABoMNjM3NDIzMTgzODA1Igy143ocdlzHoP%2F%2FYNsq3ANoUmtkmh4oqIH4ddkq1ZfYIpA4OVQqnxI95LXvfTh1pacLDtSu1Uu0LnVW%2FvXM4eRKtaX%2B6UHNc%2F2KsO68lwmP4MGg%2B4%2F%2Bs1X8ky7qQVEPC8zuWu2mnptyfRwQL8JGTs1c%2BbwlS1bOwMveEJsWqjeVT9wHKvoLb1bKUqUdki9hScOHNdQiWGO8XsqBy7L5V%2B8lwVFyNkDUnT%2B9WeA8X6oEMaKnqT%2BItq%2BPed53yTypT%2FlVJ9Bd5ZOn2HrbISRl7GmUvL8Euvp6cDcV83yeKS%2BiJ3aOswKGyv%2FRKjby43bp1rPABN0BmOWDCTRXIDfMh2GXKAgT0sy%2FagqtZ5134d34zKIarvu0yrrQyP16vV%2FdLHE%2Be0S5KStNNCnDxD8HH6gGjZQazvww4D%2BNkcHYPTkQE4FW%2BrBlnLEVC%2FxMu5CUCrG48z5jIHcMtokpJiPLZdeFTYoptdJCRUzvu5pRGfe5S%2B93Etld4y1oUL14XN8Ovn%2FvT24iw%2FmmGrw3gXIYKCu90MzKf4C%2FI1BGjpbcTvRuxpHkerR1%2BPLqSEkpj7IMP2XTIedIkIyK6ZEgAD8M4e%2F2j6ixK7IYgBlZItVTE7hcbhkhhqq0IFBBwGH3r8gmqb5fxLeyVIPWGniP3zCXqPS%2FBjqkATWMH%2BCBymmxvIdHPlua9NrgetgD0hhTVKxir6HmoyWmsBQ2WqimqiP1fcnCbhDWnLbPOSkpmx4I43jczVmgl5a4HkuIM%2F3gaX%2Byft3uCYU6JVTzIC324QA0dRCetsMUl%2FsQ4DWrAGxgJsHKKiPmYjkriaFq4mz9gNovbxD%2Bh%2F8017mtM%2F6cVJ%2B0vdGvBCGdCasTYow1QtBjV0jDybwlo%2B32ulce&X-Amz-Signature=5b7404c284a52ee22b2555a457b1057cbfa84759884a5256bf93828593232eab&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQG7P7VQ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BPhuclkDzOXFjVQpzFqEgKgQK5zVL%2Bw25hzr71bEsMAIhALcSg2lDWlxkt3YNBLaBg8wZGDp7RlL7gmOrofGejYcIKv8DCBcQABoMNjM3NDIzMTgzODA1Igy143ocdlzHoP%2F%2FYNsq3ANoUmtkmh4oqIH4ddkq1ZfYIpA4OVQqnxI95LXvfTh1pacLDtSu1Uu0LnVW%2FvXM4eRKtaX%2B6UHNc%2F2KsO68lwmP4MGg%2B4%2F%2Bs1X8ky7qQVEPC8zuWu2mnptyfRwQL8JGTs1c%2BbwlS1bOwMveEJsWqjeVT9wHKvoLb1bKUqUdki9hScOHNdQiWGO8XsqBy7L5V%2B8lwVFyNkDUnT%2B9WeA8X6oEMaKnqT%2BItq%2BPed53yTypT%2FlVJ9Bd5ZOn2HrbISRl7GmUvL8Euvp6cDcV83yeKS%2BiJ3aOswKGyv%2FRKjby43bp1rPABN0BmOWDCTRXIDfMh2GXKAgT0sy%2FagqtZ5134d34zKIarvu0yrrQyP16vV%2FdLHE%2Be0S5KStNNCnDxD8HH6gGjZQazvww4D%2BNkcHYPTkQE4FW%2BrBlnLEVC%2FxMu5CUCrG48z5jIHcMtokpJiPLZdeFTYoptdJCRUzvu5pRGfe5S%2B93Etld4y1oUL14XN8Ovn%2FvT24iw%2FmmGrw3gXIYKCu90MzKf4C%2FI1BGjpbcTvRuxpHkerR1%2BPLqSEkpj7IMP2XTIedIkIyK6ZEgAD8M4e%2F2j6ixK7IYgBlZItVTE7hcbhkhhqq0IFBBwGH3r8gmqb5fxLeyVIPWGniP3zCXqPS%2FBjqkATWMH%2BCBymmxvIdHPlua9NrgetgD0hhTVKxir6HmoyWmsBQ2WqimqiP1fcnCbhDWnLbPOSkpmx4I43jczVmgl5a4HkuIM%2F3gaX%2Byft3uCYU6JVTzIC324QA0dRCetsMUl%2FsQ4DWrAGxgJsHKKiPmYjkriaFq4mz9gNovbxD%2Bh%2F8017mtM%2F6cVJ%2B0vdGvBCGdCasTYow1QtBjV0jDybwlo%2B32ulce&X-Amz-Signature=9e2fb51365391ee8434a0edad31cd18b2d0a39a0e52729ecb490d4687fb59983&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQG7P7VQ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BPhuclkDzOXFjVQpzFqEgKgQK5zVL%2Bw25hzr71bEsMAIhALcSg2lDWlxkt3YNBLaBg8wZGDp7RlL7gmOrofGejYcIKv8DCBcQABoMNjM3NDIzMTgzODA1Igy143ocdlzHoP%2F%2FYNsq3ANoUmtkmh4oqIH4ddkq1ZfYIpA4OVQqnxI95LXvfTh1pacLDtSu1Uu0LnVW%2FvXM4eRKtaX%2B6UHNc%2F2KsO68lwmP4MGg%2B4%2F%2Bs1X8ky7qQVEPC8zuWu2mnptyfRwQL8JGTs1c%2BbwlS1bOwMveEJsWqjeVT9wHKvoLb1bKUqUdki9hScOHNdQiWGO8XsqBy7L5V%2B8lwVFyNkDUnT%2B9WeA8X6oEMaKnqT%2BItq%2BPed53yTypT%2FlVJ9Bd5ZOn2HrbISRl7GmUvL8Euvp6cDcV83yeKS%2BiJ3aOswKGyv%2FRKjby43bp1rPABN0BmOWDCTRXIDfMh2GXKAgT0sy%2FagqtZ5134d34zKIarvu0yrrQyP16vV%2FdLHE%2Be0S5KStNNCnDxD8HH6gGjZQazvww4D%2BNkcHYPTkQE4FW%2BrBlnLEVC%2FxMu5CUCrG48z5jIHcMtokpJiPLZdeFTYoptdJCRUzvu5pRGfe5S%2B93Etld4y1oUL14XN8Ovn%2FvT24iw%2FmmGrw3gXIYKCu90MzKf4C%2FI1BGjpbcTvRuxpHkerR1%2BPLqSEkpj7IMP2XTIedIkIyK6ZEgAD8M4e%2F2j6ixK7IYgBlZItVTE7hcbhkhhqq0IFBBwGH3r8gmqb5fxLeyVIPWGniP3zCXqPS%2FBjqkATWMH%2BCBymmxvIdHPlua9NrgetgD0hhTVKxir6HmoyWmsBQ2WqimqiP1fcnCbhDWnLbPOSkpmx4I43jczVmgl5a4HkuIM%2F3gaX%2Byft3uCYU6JVTzIC324QA0dRCetsMUl%2FsQ4DWrAGxgJsHKKiPmYjkriaFq4mz9gNovbxD%2Bh%2F8017mtM%2F6cVJ%2B0vdGvBCGdCasTYow1QtBjV0jDybwlo%2B32ulce&X-Amz-Signature=0518cc9c779e70c9868e0029fb396b3aaae15e2ff675f8abfd9a2eecb5d8e369&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQG7P7VQ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BPhuclkDzOXFjVQpzFqEgKgQK5zVL%2Bw25hzr71bEsMAIhALcSg2lDWlxkt3YNBLaBg8wZGDp7RlL7gmOrofGejYcIKv8DCBcQABoMNjM3NDIzMTgzODA1Igy143ocdlzHoP%2F%2FYNsq3ANoUmtkmh4oqIH4ddkq1ZfYIpA4OVQqnxI95LXvfTh1pacLDtSu1Uu0LnVW%2FvXM4eRKtaX%2B6UHNc%2F2KsO68lwmP4MGg%2B4%2F%2Bs1X8ky7qQVEPC8zuWu2mnptyfRwQL8JGTs1c%2BbwlS1bOwMveEJsWqjeVT9wHKvoLb1bKUqUdki9hScOHNdQiWGO8XsqBy7L5V%2B8lwVFyNkDUnT%2B9WeA8X6oEMaKnqT%2BItq%2BPed53yTypT%2FlVJ9Bd5ZOn2HrbISRl7GmUvL8Euvp6cDcV83yeKS%2BiJ3aOswKGyv%2FRKjby43bp1rPABN0BmOWDCTRXIDfMh2GXKAgT0sy%2FagqtZ5134d34zKIarvu0yrrQyP16vV%2FdLHE%2Be0S5KStNNCnDxD8HH6gGjZQazvww4D%2BNkcHYPTkQE4FW%2BrBlnLEVC%2FxMu5CUCrG48z5jIHcMtokpJiPLZdeFTYoptdJCRUzvu5pRGfe5S%2B93Etld4y1oUL14XN8Ovn%2FvT24iw%2FmmGrw3gXIYKCu90MzKf4C%2FI1BGjpbcTvRuxpHkerR1%2BPLqSEkpj7IMP2XTIedIkIyK6ZEgAD8M4e%2F2j6ixK7IYgBlZItVTE7hcbhkhhqq0IFBBwGH3r8gmqb5fxLeyVIPWGniP3zCXqPS%2FBjqkATWMH%2BCBymmxvIdHPlua9NrgetgD0hhTVKxir6HmoyWmsBQ2WqimqiP1fcnCbhDWnLbPOSkpmx4I43jczVmgl5a4HkuIM%2F3gaX%2Byft3uCYU6JVTzIC324QA0dRCetsMUl%2FsQ4DWrAGxgJsHKKiPmYjkriaFq4mz9gNovbxD%2Bh%2F8017mtM%2F6cVJ%2B0vdGvBCGdCasTYow1QtBjV0jDybwlo%2B32ulce&X-Amz-Signature=1325a5fbb125efd3a1884c7c06d3966b75d72986a915a527979bba14f47d5a77&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQG7P7VQ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BPhuclkDzOXFjVQpzFqEgKgQK5zVL%2Bw25hzr71bEsMAIhALcSg2lDWlxkt3YNBLaBg8wZGDp7RlL7gmOrofGejYcIKv8DCBcQABoMNjM3NDIzMTgzODA1Igy143ocdlzHoP%2F%2FYNsq3ANoUmtkmh4oqIH4ddkq1ZfYIpA4OVQqnxI95LXvfTh1pacLDtSu1Uu0LnVW%2FvXM4eRKtaX%2B6UHNc%2F2KsO68lwmP4MGg%2B4%2F%2Bs1X8ky7qQVEPC8zuWu2mnptyfRwQL8JGTs1c%2BbwlS1bOwMveEJsWqjeVT9wHKvoLb1bKUqUdki9hScOHNdQiWGO8XsqBy7L5V%2B8lwVFyNkDUnT%2B9WeA8X6oEMaKnqT%2BItq%2BPed53yTypT%2FlVJ9Bd5ZOn2HrbISRl7GmUvL8Euvp6cDcV83yeKS%2BiJ3aOswKGyv%2FRKjby43bp1rPABN0BmOWDCTRXIDfMh2GXKAgT0sy%2FagqtZ5134d34zKIarvu0yrrQyP16vV%2FdLHE%2Be0S5KStNNCnDxD8HH6gGjZQazvww4D%2BNkcHYPTkQE4FW%2BrBlnLEVC%2FxMu5CUCrG48z5jIHcMtokpJiPLZdeFTYoptdJCRUzvu5pRGfe5S%2B93Etld4y1oUL14XN8Ovn%2FvT24iw%2FmmGrw3gXIYKCu90MzKf4C%2FI1BGjpbcTvRuxpHkerR1%2BPLqSEkpj7IMP2XTIedIkIyK6ZEgAD8M4e%2F2j6ixK7IYgBlZItVTE7hcbhkhhqq0IFBBwGH3r8gmqb5fxLeyVIPWGniP3zCXqPS%2FBjqkATWMH%2BCBymmxvIdHPlua9NrgetgD0hhTVKxir6HmoyWmsBQ2WqimqiP1fcnCbhDWnLbPOSkpmx4I43jczVmgl5a4HkuIM%2F3gaX%2Byft3uCYU6JVTzIC324QA0dRCetsMUl%2FsQ4DWrAGxgJsHKKiPmYjkriaFq4mz9gNovbxD%2Bh%2F8017mtM%2F6cVJ%2B0vdGvBCGdCasTYow1QtBjV0jDybwlo%2B32ulce&X-Amz-Signature=661770a5b98754ce565822f7011f8bfc26311b93210c1a7558a57d9fc318b2f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQG7P7VQ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BPhuclkDzOXFjVQpzFqEgKgQK5zVL%2Bw25hzr71bEsMAIhALcSg2lDWlxkt3YNBLaBg8wZGDp7RlL7gmOrofGejYcIKv8DCBcQABoMNjM3NDIzMTgzODA1Igy143ocdlzHoP%2F%2FYNsq3ANoUmtkmh4oqIH4ddkq1ZfYIpA4OVQqnxI95LXvfTh1pacLDtSu1Uu0LnVW%2FvXM4eRKtaX%2B6UHNc%2F2KsO68lwmP4MGg%2B4%2F%2Bs1X8ky7qQVEPC8zuWu2mnptyfRwQL8JGTs1c%2BbwlS1bOwMveEJsWqjeVT9wHKvoLb1bKUqUdki9hScOHNdQiWGO8XsqBy7L5V%2B8lwVFyNkDUnT%2B9WeA8X6oEMaKnqT%2BItq%2BPed53yTypT%2FlVJ9Bd5ZOn2HrbISRl7GmUvL8Euvp6cDcV83yeKS%2BiJ3aOswKGyv%2FRKjby43bp1rPABN0BmOWDCTRXIDfMh2GXKAgT0sy%2FagqtZ5134d34zKIarvu0yrrQyP16vV%2FdLHE%2Be0S5KStNNCnDxD8HH6gGjZQazvww4D%2BNkcHYPTkQE4FW%2BrBlnLEVC%2FxMu5CUCrG48z5jIHcMtokpJiPLZdeFTYoptdJCRUzvu5pRGfe5S%2B93Etld4y1oUL14XN8Ovn%2FvT24iw%2FmmGrw3gXIYKCu90MzKf4C%2FI1BGjpbcTvRuxpHkerR1%2BPLqSEkpj7IMP2XTIedIkIyK6ZEgAD8M4e%2F2j6ixK7IYgBlZItVTE7hcbhkhhqq0IFBBwGH3r8gmqb5fxLeyVIPWGniP3zCXqPS%2FBjqkATWMH%2BCBymmxvIdHPlua9NrgetgD0hhTVKxir6HmoyWmsBQ2WqimqiP1fcnCbhDWnLbPOSkpmx4I43jczVmgl5a4HkuIM%2F3gaX%2Byft3uCYU6JVTzIC324QA0dRCetsMUl%2FsQ4DWrAGxgJsHKKiPmYjkriaFq4mz9gNovbxD%2Bh%2F8017mtM%2F6cVJ%2B0vdGvBCGdCasTYow1QtBjV0jDybwlo%2B32ulce&X-Amz-Signature=69e90270cc31575180e77e0aa1719bdee1ecf27dffea5f577aa342954fa56583&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQG7P7VQ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BPhuclkDzOXFjVQpzFqEgKgQK5zVL%2Bw25hzr71bEsMAIhALcSg2lDWlxkt3YNBLaBg8wZGDp7RlL7gmOrofGejYcIKv8DCBcQABoMNjM3NDIzMTgzODA1Igy143ocdlzHoP%2F%2FYNsq3ANoUmtkmh4oqIH4ddkq1ZfYIpA4OVQqnxI95LXvfTh1pacLDtSu1Uu0LnVW%2FvXM4eRKtaX%2B6UHNc%2F2KsO68lwmP4MGg%2B4%2F%2Bs1X8ky7qQVEPC8zuWu2mnptyfRwQL8JGTs1c%2BbwlS1bOwMveEJsWqjeVT9wHKvoLb1bKUqUdki9hScOHNdQiWGO8XsqBy7L5V%2B8lwVFyNkDUnT%2B9WeA8X6oEMaKnqT%2BItq%2BPed53yTypT%2FlVJ9Bd5ZOn2HrbISRl7GmUvL8Euvp6cDcV83yeKS%2BiJ3aOswKGyv%2FRKjby43bp1rPABN0BmOWDCTRXIDfMh2GXKAgT0sy%2FagqtZ5134d34zKIarvu0yrrQyP16vV%2FdLHE%2Be0S5KStNNCnDxD8HH6gGjZQazvww4D%2BNkcHYPTkQE4FW%2BrBlnLEVC%2FxMu5CUCrG48z5jIHcMtokpJiPLZdeFTYoptdJCRUzvu5pRGfe5S%2B93Etld4y1oUL14XN8Ovn%2FvT24iw%2FmmGrw3gXIYKCu90MzKf4C%2FI1BGjpbcTvRuxpHkerR1%2BPLqSEkpj7IMP2XTIedIkIyK6ZEgAD8M4e%2F2j6ixK7IYgBlZItVTE7hcbhkhhqq0IFBBwGH3r8gmqb5fxLeyVIPWGniP3zCXqPS%2FBjqkATWMH%2BCBymmxvIdHPlua9NrgetgD0hhTVKxir6HmoyWmsBQ2WqimqiP1fcnCbhDWnLbPOSkpmx4I43jczVmgl5a4HkuIM%2F3gaX%2Byft3uCYU6JVTzIC324QA0dRCetsMUl%2FsQ4DWrAGxgJsHKKiPmYjkriaFq4mz9gNovbxD%2Bh%2F8017mtM%2F6cVJ%2B0vdGvBCGdCasTYow1QtBjV0jDybwlo%2B32ulce&X-Amz-Signature=c2d3cc3f50fd07615afa7dfb99ee6065e52f6d3d5fd24ee1d320392f7acf66e3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
