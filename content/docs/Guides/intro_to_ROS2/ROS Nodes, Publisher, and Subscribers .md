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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRHKHAGC%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4okIVDy0kQLcRjH%2BJEQdN2Cf22v%2BrWX5V%2BBH61TiaGgIhAMkljk68IBvyv%2FU3qv9uuHMYNbYNYYkpf847Icj0xrNcKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQwzjohEINy67shh0q3APLdNigCiA5L50oSTG39Vu4Kqb%2BbER922MFz3MtOmc8jq1FyfFgbSx06UlfA9cfKA5DgwGwwRgyJP0OiYJ%2BSVRSNn4PZyBPYB7BadeHqg85m%2BCAqMywwQlZPDNWZGDGArBwdgASObRmk4aciw0SrLT1c2s9lE0LLToE0l1ZxIluSuq0bpM1PYfTMQuYFFGugNfEzp2cD2nH2bIAvwVREu3NGQ6OzuCBdvAHYaIlynvFszzLGwVwcjse98NK5vLmIXVkAhYZAtNwt6t79lq%2FJSpZXm0eqRZle3ZINlEVplRdTYdTvNDj535xXWYZSaAN0qqbmKxkPF1iNoL%2BlDgYXpvTIZtG4H3nCiWfe1hKeQD3zsXRWBwX87xfv0dqlo80behS7iB9VZUfSepkGds%2BrZUgKfWOXAqWNcoeqFSFH4RtjvEUA4dI9nNg45mbTFNJgHloz250Jp1LQZ8tNXCXmw%2F56kdc96gtlLYT4cAfuIl7cX9lMGI0DIly51UiDKiqDGjBPb76nWeYgt4rULOsti3HrJj8YPEVQYiwLMAuok%2FxUaHvHf7RSvP7bfZpWE25ra2CpUvhMLvdO8RM8mrCMYZ8W%2F%2Ba%2FM2EROLFOhw68Lz0SjpQjITgdspC5KtugDCXvdPCBjqkAZGKG2Z6ikRJUPN%2BFlTKU4o5EMxZcUV6Tnx44U3oiSNpRH%2FX7g5gS4V34gyHPlfxb%2FFERkcrcqmxcdEsLY1ER5W9Ocz3JZkGoEkUyHTso020eH%2FsJYs1NTw3GobM6js%2F4O957Mqb37XhO6OxocqQbqCepoeNBSgY%2FXfrkwPCQ2GLPa7YNU5gbfC%2BdVT6FMegj%2FO90TwqRu711nE0OwAG9Y%2FwWqk4&X-Amz-Signature=cb8f4da3ca823747480775f8e71f410d16dc33b9723f3c33bf56db41fc6af39d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRHKHAGC%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4okIVDy0kQLcRjH%2BJEQdN2Cf22v%2BrWX5V%2BBH61TiaGgIhAMkljk68IBvyv%2FU3qv9uuHMYNbYNYYkpf847Icj0xrNcKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQwzjohEINy67shh0q3APLdNigCiA5L50oSTG39Vu4Kqb%2BbER922MFz3MtOmc8jq1FyfFgbSx06UlfA9cfKA5DgwGwwRgyJP0OiYJ%2BSVRSNn4PZyBPYB7BadeHqg85m%2BCAqMywwQlZPDNWZGDGArBwdgASObRmk4aciw0SrLT1c2s9lE0LLToE0l1ZxIluSuq0bpM1PYfTMQuYFFGugNfEzp2cD2nH2bIAvwVREu3NGQ6OzuCBdvAHYaIlynvFszzLGwVwcjse98NK5vLmIXVkAhYZAtNwt6t79lq%2FJSpZXm0eqRZle3ZINlEVplRdTYdTvNDj535xXWYZSaAN0qqbmKxkPF1iNoL%2BlDgYXpvTIZtG4H3nCiWfe1hKeQD3zsXRWBwX87xfv0dqlo80behS7iB9VZUfSepkGds%2BrZUgKfWOXAqWNcoeqFSFH4RtjvEUA4dI9nNg45mbTFNJgHloz250Jp1LQZ8tNXCXmw%2F56kdc96gtlLYT4cAfuIl7cX9lMGI0DIly51UiDKiqDGjBPb76nWeYgt4rULOsti3HrJj8YPEVQYiwLMAuok%2FxUaHvHf7RSvP7bfZpWE25ra2CpUvhMLvdO8RM8mrCMYZ8W%2F%2Ba%2FM2EROLFOhw68Lz0SjpQjITgdspC5KtugDCXvdPCBjqkAZGKG2Z6ikRJUPN%2BFlTKU4o5EMxZcUV6Tnx44U3oiSNpRH%2FX7g5gS4V34gyHPlfxb%2FFERkcrcqmxcdEsLY1ER5W9Ocz3JZkGoEkUyHTso020eH%2FsJYs1NTw3GobM6js%2F4O957Mqb37XhO6OxocqQbqCepoeNBSgY%2FXfrkwPCQ2GLPa7YNU5gbfC%2BdVT6FMegj%2FO90TwqRu711nE0OwAG9Y%2FwWqk4&X-Amz-Signature=f27adb222e56b3a2ff96cf9f0707f35617a9bd3c4ee5b3bd89683bc4d319f9ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRHKHAGC%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4okIVDy0kQLcRjH%2BJEQdN2Cf22v%2BrWX5V%2BBH61TiaGgIhAMkljk68IBvyv%2FU3qv9uuHMYNbYNYYkpf847Icj0xrNcKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQwzjohEINy67shh0q3APLdNigCiA5L50oSTG39Vu4Kqb%2BbER922MFz3MtOmc8jq1FyfFgbSx06UlfA9cfKA5DgwGwwRgyJP0OiYJ%2BSVRSNn4PZyBPYB7BadeHqg85m%2BCAqMywwQlZPDNWZGDGArBwdgASObRmk4aciw0SrLT1c2s9lE0LLToE0l1ZxIluSuq0bpM1PYfTMQuYFFGugNfEzp2cD2nH2bIAvwVREu3NGQ6OzuCBdvAHYaIlynvFszzLGwVwcjse98NK5vLmIXVkAhYZAtNwt6t79lq%2FJSpZXm0eqRZle3ZINlEVplRdTYdTvNDj535xXWYZSaAN0qqbmKxkPF1iNoL%2BlDgYXpvTIZtG4H3nCiWfe1hKeQD3zsXRWBwX87xfv0dqlo80behS7iB9VZUfSepkGds%2BrZUgKfWOXAqWNcoeqFSFH4RtjvEUA4dI9nNg45mbTFNJgHloz250Jp1LQZ8tNXCXmw%2F56kdc96gtlLYT4cAfuIl7cX9lMGI0DIly51UiDKiqDGjBPb76nWeYgt4rULOsti3HrJj8YPEVQYiwLMAuok%2FxUaHvHf7RSvP7bfZpWE25ra2CpUvhMLvdO8RM8mrCMYZ8W%2F%2Ba%2FM2EROLFOhw68Lz0SjpQjITgdspC5KtugDCXvdPCBjqkAZGKG2Z6ikRJUPN%2BFlTKU4o5EMxZcUV6Tnx44U3oiSNpRH%2FX7g5gS4V34gyHPlfxb%2FFERkcrcqmxcdEsLY1ER5W9Ocz3JZkGoEkUyHTso020eH%2FsJYs1NTw3GobM6js%2F4O957Mqb37XhO6OxocqQbqCepoeNBSgY%2FXfrkwPCQ2GLPa7YNU5gbfC%2BdVT6FMegj%2FO90TwqRu711nE0OwAG9Y%2FwWqk4&X-Amz-Signature=68093091db4ef87a0cbfa0620723482a618575535ac5ae25e33a64e6df839fbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRHKHAGC%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4okIVDy0kQLcRjH%2BJEQdN2Cf22v%2BrWX5V%2BBH61TiaGgIhAMkljk68IBvyv%2FU3qv9uuHMYNbYNYYkpf847Icj0xrNcKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQwzjohEINy67shh0q3APLdNigCiA5L50oSTG39Vu4Kqb%2BbER922MFz3MtOmc8jq1FyfFgbSx06UlfA9cfKA5DgwGwwRgyJP0OiYJ%2BSVRSNn4PZyBPYB7BadeHqg85m%2BCAqMywwQlZPDNWZGDGArBwdgASObRmk4aciw0SrLT1c2s9lE0LLToE0l1ZxIluSuq0bpM1PYfTMQuYFFGugNfEzp2cD2nH2bIAvwVREu3NGQ6OzuCBdvAHYaIlynvFszzLGwVwcjse98NK5vLmIXVkAhYZAtNwt6t79lq%2FJSpZXm0eqRZle3ZINlEVplRdTYdTvNDj535xXWYZSaAN0qqbmKxkPF1iNoL%2BlDgYXpvTIZtG4H3nCiWfe1hKeQD3zsXRWBwX87xfv0dqlo80behS7iB9VZUfSepkGds%2BrZUgKfWOXAqWNcoeqFSFH4RtjvEUA4dI9nNg45mbTFNJgHloz250Jp1LQZ8tNXCXmw%2F56kdc96gtlLYT4cAfuIl7cX9lMGI0DIly51UiDKiqDGjBPb76nWeYgt4rULOsti3HrJj8YPEVQYiwLMAuok%2FxUaHvHf7RSvP7bfZpWE25ra2CpUvhMLvdO8RM8mrCMYZ8W%2F%2Ba%2FM2EROLFOhw68Lz0SjpQjITgdspC5KtugDCXvdPCBjqkAZGKG2Z6ikRJUPN%2BFlTKU4o5EMxZcUV6Tnx44U3oiSNpRH%2FX7g5gS4V34gyHPlfxb%2FFERkcrcqmxcdEsLY1ER5W9Ocz3JZkGoEkUyHTso020eH%2FsJYs1NTw3GobM6js%2F4O957Mqb37XhO6OxocqQbqCepoeNBSgY%2FXfrkwPCQ2GLPa7YNU5gbfC%2BdVT6FMegj%2FO90TwqRu711nE0OwAG9Y%2FwWqk4&X-Amz-Signature=6de845ea0a3f07c05543c0e7bfcbf4168b4a7623b22bc574c26cea19b50928c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRHKHAGC%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4okIVDy0kQLcRjH%2BJEQdN2Cf22v%2BrWX5V%2BBH61TiaGgIhAMkljk68IBvyv%2FU3qv9uuHMYNbYNYYkpf847Icj0xrNcKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQwzjohEINy67shh0q3APLdNigCiA5L50oSTG39Vu4Kqb%2BbER922MFz3MtOmc8jq1FyfFgbSx06UlfA9cfKA5DgwGwwRgyJP0OiYJ%2BSVRSNn4PZyBPYB7BadeHqg85m%2BCAqMywwQlZPDNWZGDGArBwdgASObRmk4aciw0SrLT1c2s9lE0LLToE0l1ZxIluSuq0bpM1PYfTMQuYFFGugNfEzp2cD2nH2bIAvwVREu3NGQ6OzuCBdvAHYaIlynvFszzLGwVwcjse98NK5vLmIXVkAhYZAtNwt6t79lq%2FJSpZXm0eqRZle3ZINlEVplRdTYdTvNDj535xXWYZSaAN0qqbmKxkPF1iNoL%2BlDgYXpvTIZtG4H3nCiWfe1hKeQD3zsXRWBwX87xfv0dqlo80behS7iB9VZUfSepkGds%2BrZUgKfWOXAqWNcoeqFSFH4RtjvEUA4dI9nNg45mbTFNJgHloz250Jp1LQZ8tNXCXmw%2F56kdc96gtlLYT4cAfuIl7cX9lMGI0DIly51UiDKiqDGjBPb76nWeYgt4rULOsti3HrJj8YPEVQYiwLMAuok%2FxUaHvHf7RSvP7bfZpWE25ra2CpUvhMLvdO8RM8mrCMYZ8W%2F%2Ba%2FM2EROLFOhw68Lz0SjpQjITgdspC5KtugDCXvdPCBjqkAZGKG2Z6ikRJUPN%2BFlTKU4o5EMxZcUV6Tnx44U3oiSNpRH%2FX7g5gS4V34gyHPlfxb%2FFERkcrcqmxcdEsLY1ER5W9Ocz3JZkGoEkUyHTso020eH%2FsJYs1NTw3GobM6js%2F4O957Mqb37XhO6OxocqQbqCepoeNBSgY%2FXfrkwPCQ2GLPa7YNU5gbfC%2BdVT6FMegj%2FO90TwqRu711nE0OwAG9Y%2FwWqk4&X-Amz-Signature=1d8e812c91b7271a0ac7fd191f5b9a2efafcd1ec6270a9656b7522c6cf12cbbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRHKHAGC%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4okIVDy0kQLcRjH%2BJEQdN2Cf22v%2BrWX5V%2BBH61TiaGgIhAMkljk68IBvyv%2FU3qv9uuHMYNbYNYYkpf847Icj0xrNcKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQwzjohEINy67shh0q3APLdNigCiA5L50oSTG39Vu4Kqb%2BbER922MFz3MtOmc8jq1FyfFgbSx06UlfA9cfKA5DgwGwwRgyJP0OiYJ%2BSVRSNn4PZyBPYB7BadeHqg85m%2BCAqMywwQlZPDNWZGDGArBwdgASObRmk4aciw0SrLT1c2s9lE0LLToE0l1ZxIluSuq0bpM1PYfTMQuYFFGugNfEzp2cD2nH2bIAvwVREu3NGQ6OzuCBdvAHYaIlynvFszzLGwVwcjse98NK5vLmIXVkAhYZAtNwt6t79lq%2FJSpZXm0eqRZle3ZINlEVplRdTYdTvNDj535xXWYZSaAN0qqbmKxkPF1iNoL%2BlDgYXpvTIZtG4H3nCiWfe1hKeQD3zsXRWBwX87xfv0dqlo80behS7iB9VZUfSepkGds%2BrZUgKfWOXAqWNcoeqFSFH4RtjvEUA4dI9nNg45mbTFNJgHloz250Jp1LQZ8tNXCXmw%2F56kdc96gtlLYT4cAfuIl7cX9lMGI0DIly51UiDKiqDGjBPb76nWeYgt4rULOsti3HrJj8YPEVQYiwLMAuok%2FxUaHvHf7RSvP7bfZpWE25ra2CpUvhMLvdO8RM8mrCMYZ8W%2F%2Ba%2FM2EROLFOhw68Lz0SjpQjITgdspC5KtugDCXvdPCBjqkAZGKG2Z6ikRJUPN%2BFlTKU4o5EMxZcUV6Tnx44U3oiSNpRH%2FX7g5gS4V34gyHPlfxb%2FFERkcrcqmxcdEsLY1ER5W9Ocz3JZkGoEkUyHTso020eH%2FsJYs1NTw3GobM6js%2F4O957Mqb37XhO6OxocqQbqCepoeNBSgY%2FXfrkwPCQ2GLPa7YNU5gbfC%2BdVT6FMegj%2FO90TwqRu711nE0OwAG9Y%2FwWqk4&X-Amz-Signature=cb972f9fa4c9ff980fe2abfbc4a64f046e5cf02c0143a8c9ffb65b020b3cb0c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRHKHAGC%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4okIVDy0kQLcRjH%2BJEQdN2Cf22v%2BrWX5V%2BBH61TiaGgIhAMkljk68IBvyv%2FU3qv9uuHMYNbYNYYkpf847Icj0xrNcKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQwzjohEINy67shh0q3APLdNigCiA5L50oSTG39Vu4Kqb%2BbER922MFz3MtOmc8jq1FyfFgbSx06UlfA9cfKA5DgwGwwRgyJP0OiYJ%2BSVRSNn4PZyBPYB7BadeHqg85m%2BCAqMywwQlZPDNWZGDGArBwdgASObRmk4aciw0SrLT1c2s9lE0LLToE0l1ZxIluSuq0bpM1PYfTMQuYFFGugNfEzp2cD2nH2bIAvwVREu3NGQ6OzuCBdvAHYaIlynvFszzLGwVwcjse98NK5vLmIXVkAhYZAtNwt6t79lq%2FJSpZXm0eqRZle3ZINlEVplRdTYdTvNDj535xXWYZSaAN0qqbmKxkPF1iNoL%2BlDgYXpvTIZtG4H3nCiWfe1hKeQD3zsXRWBwX87xfv0dqlo80behS7iB9VZUfSepkGds%2BrZUgKfWOXAqWNcoeqFSFH4RtjvEUA4dI9nNg45mbTFNJgHloz250Jp1LQZ8tNXCXmw%2F56kdc96gtlLYT4cAfuIl7cX9lMGI0DIly51UiDKiqDGjBPb76nWeYgt4rULOsti3HrJj8YPEVQYiwLMAuok%2FxUaHvHf7RSvP7bfZpWE25ra2CpUvhMLvdO8RM8mrCMYZ8W%2F%2Ba%2FM2EROLFOhw68Lz0SjpQjITgdspC5KtugDCXvdPCBjqkAZGKG2Z6ikRJUPN%2BFlTKU4o5EMxZcUV6Tnx44U3oiSNpRH%2FX7g5gS4V34gyHPlfxb%2FFERkcrcqmxcdEsLY1ER5W9Ocz3JZkGoEkUyHTso020eH%2FsJYs1NTw3GobM6js%2F4O957Mqb37XhO6OxocqQbqCepoeNBSgY%2FXfrkwPCQ2GLPa7YNU5gbfC%2BdVT6FMegj%2FO90TwqRu711nE0OwAG9Y%2FwWqk4&X-Amz-Signature=134b69ac8a812b3284536636bee34737ec87de4d4aee1c2aa18b57dd14ff304a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRHKHAGC%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4okIVDy0kQLcRjH%2BJEQdN2Cf22v%2BrWX5V%2BBH61TiaGgIhAMkljk68IBvyv%2FU3qv9uuHMYNbYNYYkpf847Icj0xrNcKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQwzjohEINy67shh0q3APLdNigCiA5L50oSTG39Vu4Kqb%2BbER922MFz3MtOmc8jq1FyfFgbSx06UlfA9cfKA5DgwGwwRgyJP0OiYJ%2BSVRSNn4PZyBPYB7BadeHqg85m%2BCAqMywwQlZPDNWZGDGArBwdgASObRmk4aciw0SrLT1c2s9lE0LLToE0l1ZxIluSuq0bpM1PYfTMQuYFFGugNfEzp2cD2nH2bIAvwVREu3NGQ6OzuCBdvAHYaIlynvFszzLGwVwcjse98NK5vLmIXVkAhYZAtNwt6t79lq%2FJSpZXm0eqRZle3ZINlEVplRdTYdTvNDj535xXWYZSaAN0qqbmKxkPF1iNoL%2BlDgYXpvTIZtG4H3nCiWfe1hKeQD3zsXRWBwX87xfv0dqlo80behS7iB9VZUfSepkGds%2BrZUgKfWOXAqWNcoeqFSFH4RtjvEUA4dI9nNg45mbTFNJgHloz250Jp1LQZ8tNXCXmw%2F56kdc96gtlLYT4cAfuIl7cX9lMGI0DIly51UiDKiqDGjBPb76nWeYgt4rULOsti3HrJj8YPEVQYiwLMAuok%2FxUaHvHf7RSvP7bfZpWE25ra2CpUvhMLvdO8RM8mrCMYZ8W%2F%2Ba%2FM2EROLFOhw68Lz0SjpQjITgdspC5KtugDCXvdPCBjqkAZGKG2Z6ikRJUPN%2BFlTKU4o5EMxZcUV6Tnx44U3oiSNpRH%2FX7g5gS4V34gyHPlfxb%2FFERkcrcqmxcdEsLY1ER5W9Ocz3JZkGoEkUyHTso020eH%2FsJYs1NTw3GobM6js%2F4O957Mqb37XhO6OxocqQbqCepoeNBSgY%2FXfrkwPCQ2GLPa7YNU5gbfC%2BdVT6FMegj%2FO90TwqRu711nE0OwAG9Y%2FwWqk4&X-Amz-Signature=728388ad512109f46382700fff79dc3db7952ac81d8cbff1d52fc5ce24dc0946&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
