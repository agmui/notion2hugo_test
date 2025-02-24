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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCDYSUSF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChWPkoLp22NCdAy%2BzMxJYdLYOyFRGxRpxw3MviEx5gVAIhAIkCB3ZqPaLSYPTPf7ctR4ftZDHhZhnINEyF3MrqLMK5Kv8DCCEQABoMNjM3NDIzMTgzODA1Igz%2FjfQ25NTdCpGC1QEq3APAG8WnsOCLGlo7Ay1yoM3RNy7KJJIGg6qfXjQ74Ly6UoYlST123XdYV5cuUe4Em0p5rakzDPYkdlZXRhfw%2Fj1Iz47JM6OTe6UTqgkRQ1D2Pck9UtkKXHkXpYYnI25ZUZeW6BFvJ5eRRNbgJOEyXDFHpYI14b73v2nCA1xdVry6L1F5eNP%2FIbO62nFbROwm1kfnDtJkafpqHVlhM2V%2Bkrhqv6YraBBWPJvRMKoup69PSkKhLJ%2F%2FLgfk5biX6yDA4iUnizviH5870sc5XEu5NH5SLrKMtnGGplpbj4ZyhLE1kCGKjvEJkofyPCVhBeMGtuRKYONNf8DTJ%2Fe5NBNRbV0lRCDkXpySM98BD2DAA40kabDl3JktjenuDnZlv0T2AAghudpNd2UtxJj4gukIcRSyMdJ8oKxsrFEB0XbRHhkci3zbtXNl3eRyRSV%2FsUz6JX%2FlP7BTrbx9xbizyxM%2FG6mehVwyHcjV9e6gal1b8ASYMeux0n7uPUcgQWLg%2FI7fvTXUng%2Bl1ijS7i4dC0ScW4aUf8lI9XwS%2ByED%2FYczEDlM56shjdeDTwSX6ZnO0pDPt4LKgvHIDvFvEo59jfMHJHuGYwpWNRE%2Bsq%2FGAGyBztEoh5h376uFxnWaKGfZfTCm8O69BjqkAQFRqDLzSvV0FqwUcI7iLpH73bEpDgE2HQ3PNfg3Mus719p9bvXVJvklVLnhWGAzAG6vhpB1pGU6jrAmWWl6JH9MfyAMZi5DLLajZw0Uo%2BHWZNYZcQxcHj6brO4xZEfhznk9koofGGJKWMFNJEj3Q%2Fww9xdTKSvVUF9Cn9GgFIGYQqvO%2FWcqtQ9%2FhIexPC5q3wz2iFj5KiMdK6rz9Ac0lU9PlUYT&X-Amz-Signature=77d6a4e539cc44a5d64087627562eb8f6d559999b7e39121b9d8f1ba2f7e39b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCDYSUSF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChWPkoLp22NCdAy%2BzMxJYdLYOyFRGxRpxw3MviEx5gVAIhAIkCB3ZqPaLSYPTPf7ctR4ftZDHhZhnINEyF3MrqLMK5Kv8DCCEQABoMNjM3NDIzMTgzODA1Igz%2FjfQ25NTdCpGC1QEq3APAG8WnsOCLGlo7Ay1yoM3RNy7KJJIGg6qfXjQ74Ly6UoYlST123XdYV5cuUe4Em0p5rakzDPYkdlZXRhfw%2Fj1Iz47JM6OTe6UTqgkRQ1D2Pck9UtkKXHkXpYYnI25ZUZeW6BFvJ5eRRNbgJOEyXDFHpYI14b73v2nCA1xdVry6L1F5eNP%2FIbO62nFbROwm1kfnDtJkafpqHVlhM2V%2Bkrhqv6YraBBWPJvRMKoup69PSkKhLJ%2F%2FLgfk5biX6yDA4iUnizviH5870sc5XEu5NH5SLrKMtnGGplpbj4ZyhLE1kCGKjvEJkofyPCVhBeMGtuRKYONNf8DTJ%2Fe5NBNRbV0lRCDkXpySM98BD2DAA40kabDl3JktjenuDnZlv0T2AAghudpNd2UtxJj4gukIcRSyMdJ8oKxsrFEB0XbRHhkci3zbtXNl3eRyRSV%2FsUz6JX%2FlP7BTrbx9xbizyxM%2FG6mehVwyHcjV9e6gal1b8ASYMeux0n7uPUcgQWLg%2FI7fvTXUng%2Bl1ijS7i4dC0ScW4aUf8lI9XwS%2ByED%2FYczEDlM56shjdeDTwSX6ZnO0pDPt4LKgvHIDvFvEo59jfMHJHuGYwpWNRE%2Bsq%2FGAGyBztEoh5h376uFxnWaKGfZfTCm8O69BjqkAQFRqDLzSvV0FqwUcI7iLpH73bEpDgE2HQ3PNfg3Mus719p9bvXVJvklVLnhWGAzAG6vhpB1pGU6jrAmWWl6JH9MfyAMZi5DLLajZw0Uo%2BHWZNYZcQxcHj6brO4xZEfhznk9koofGGJKWMFNJEj3Q%2Fww9xdTKSvVUF9Cn9GgFIGYQqvO%2FWcqtQ9%2FhIexPC5q3wz2iFj5KiMdK6rz9Ac0lU9PlUYT&X-Amz-Signature=3fdc85d3d9014ff3fae2e230fdfd649357484b7a05014a5f466628e789d47ea3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCDYSUSF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChWPkoLp22NCdAy%2BzMxJYdLYOyFRGxRpxw3MviEx5gVAIhAIkCB3ZqPaLSYPTPf7ctR4ftZDHhZhnINEyF3MrqLMK5Kv8DCCEQABoMNjM3NDIzMTgzODA1Igz%2FjfQ25NTdCpGC1QEq3APAG8WnsOCLGlo7Ay1yoM3RNy7KJJIGg6qfXjQ74Ly6UoYlST123XdYV5cuUe4Em0p5rakzDPYkdlZXRhfw%2Fj1Iz47JM6OTe6UTqgkRQ1D2Pck9UtkKXHkXpYYnI25ZUZeW6BFvJ5eRRNbgJOEyXDFHpYI14b73v2nCA1xdVry6L1F5eNP%2FIbO62nFbROwm1kfnDtJkafpqHVlhM2V%2Bkrhqv6YraBBWPJvRMKoup69PSkKhLJ%2F%2FLgfk5biX6yDA4iUnizviH5870sc5XEu5NH5SLrKMtnGGplpbj4ZyhLE1kCGKjvEJkofyPCVhBeMGtuRKYONNf8DTJ%2Fe5NBNRbV0lRCDkXpySM98BD2DAA40kabDl3JktjenuDnZlv0T2AAghudpNd2UtxJj4gukIcRSyMdJ8oKxsrFEB0XbRHhkci3zbtXNl3eRyRSV%2FsUz6JX%2FlP7BTrbx9xbizyxM%2FG6mehVwyHcjV9e6gal1b8ASYMeux0n7uPUcgQWLg%2FI7fvTXUng%2Bl1ijS7i4dC0ScW4aUf8lI9XwS%2ByED%2FYczEDlM56shjdeDTwSX6ZnO0pDPt4LKgvHIDvFvEo59jfMHJHuGYwpWNRE%2Bsq%2FGAGyBztEoh5h376uFxnWaKGfZfTCm8O69BjqkAQFRqDLzSvV0FqwUcI7iLpH73bEpDgE2HQ3PNfg3Mus719p9bvXVJvklVLnhWGAzAG6vhpB1pGU6jrAmWWl6JH9MfyAMZi5DLLajZw0Uo%2BHWZNYZcQxcHj6brO4xZEfhznk9koofGGJKWMFNJEj3Q%2Fww9xdTKSvVUF9Cn9GgFIGYQqvO%2FWcqtQ9%2FhIexPC5q3wz2iFj5KiMdK6rz9Ac0lU9PlUYT&X-Amz-Signature=a8fec10fb585aa14298efcce8d30cdf64b68fe1c6d3457045b3f14df6c791655&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCDYSUSF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChWPkoLp22NCdAy%2BzMxJYdLYOyFRGxRpxw3MviEx5gVAIhAIkCB3ZqPaLSYPTPf7ctR4ftZDHhZhnINEyF3MrqLMK5Kv8DCCEQABoMNjM3NDIzMTgzODA1Igz%2FjfQ25NTdCpGC1QEq3APAG8WnsOCLGlo7Ay1yoM3RNy7KJJIGg6qfXjQ74Ly6UoYlST123XdYV5cuUe4Em0p5rakzDPYkdlZXRhfw%2Fj1Iz47JM6OTe6UTqgkRQ1D2Pck9UtkKXHkXpYYnI25ZUZeW6BFvJ5eRRNbgJOEyXDFHpYI14b73v2nCA1xdVry6L1F5eNP%2FIbO62nFbROwm1kfnDtJkafpqHVlhM2V%2Bkrhqv6YraBBWPJvRMKoup69PSkKhLJ%2F%2FLgfk5biX6yDA4iUnizviH5870sc5XEu5NH5SLrKMtnGGplpbj4ZyhLE1kCGKjvEJkofyPCVhBeMGtuRKYONNf8DTJ%2Fe5NBNRbV0lRCDkXpySM98BD2DAA40kabDl3JktjenuDnZlv0T2AAghudpNd2UtxJj4gukIcRSyMdJ8oKxsrFEB0XbRHhkci3zbtXNl3eRyRSV%2FsUz6JX%2FlP7BTrbx9xbizyxM%2FG6mehVwyHcjV9e6gal1b8ASYMeux0n7uPUcgQWLg%2FI7fvTXUng%2Bl1ijS7i4dC0ScW4aUf8lI9XwS%2ByED%2FYczEDlM56shjdeDTwSX6ZnO0pDPt4LKgvHIDvFvEo59jfMHJHuGYwpWNRE%2Bsq%2FGAGyBztEoh5h376uFxnWaKGfZfTCm8O69BjqkAQFRqDLzSvV0FqwUcI7iLpH73bEpDgE2HQ3PNfg3Mus719p9bvXVJvklVLnhWGAzAG6vhpB1pGU6jrAmWWl6JH9MfyAMZi5DLLajZw0Uo%2BHWZNYZcQxcHj6brO4xZEfhznk9koofGGJKWMFNJEj3Q%2Fww9xdTKSvVUF9Cn9GgFIGYQqvO%2FWcqtQ9%2FhIexPC5q3wz2iFj5KiMdK6rz9Ac0lU9PlUYT&X-Amz-Signature=af32ceb23ed357db9759a061690f67faf3097c34f74a298642fad328a17144b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCDYSUSF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChWPkoLp22NCdAy%2BzMxJYdLYOyFRGxRpxw3MviEx5gVAIhAIkCB3ZqPaLSYPTPf7ctR4ftZDHhZhnINEyF3MrqLMK5Kv8DCCEQABoMNjM3NDIzMTgzODA1Igz%2FjfQ25NTdCpGC1QEq3APAG8WnsOCLGlo7Ay1yoM3RNy7KJJIGg6qfXjQ74Ly6UoYlST123XdYV5cuUe4Em0p5rakzDPYkdlZXRhfw%2Fj1Iz47JM6OTe6UTqgkRQ1D2Pck9UtkKXHkXpYYnI25ZUZeW6BFvJ5eRRNbgJOEyXDFHpYI14b73v2nCA1xdVry6L1F5eNP%2FIbO62nFbROwm1kfnDtJkafpqHVlhM2V%2Bkrhqv6YraBBWPJvRMKoup69PSkKhLJ%2F%2FLgfk5biX6yDA4iUnizviH5870sc5XEu5NH5SLrKMtnGGplpbj4ZyhLE1kCGKjvEJkofyPCVhBeMGtuRKYONNf8DTJ%2Fe5NBNRbV0lRCDkXpySM98BD2DAA40kabDl3JktjenuDnZlv0T2AAghudpNd2UtxJj4gukIcRSyMdJ8oKxsrFEB0XbRHhkci3zbtXNl3eRyRSV%2FsUz6JX%2FlP7BTrbx9xbizyxM%2FG6mehVwyHcjV9e6gal1b8ASYMeux0n7uPUcgQWLg%2FI7fvTXUng%2Bl1ijS7i4dC0ScW4aUf8lI9XwS%2ByED%2FYczEDlM56shjdeDTwSX6ZnO0pDPt4LKgvHIDvFvEo59jfMHJHuGYwpWNRE%2Bsq%2FGAGyBztEoh5h376uFxnWaKGfZfTCm8O69BjqkAQFRqDLzSvV0FqwUcI7iLpH73bEpDgE2HQ3PNfg3Mus719p9bvXVJvklVLnhWGAzAG6vhpB1pGU6jrAmWWl6JH9MfyAMZi5DLLajZw0Uo%2BHWZNYZcQxcHj6brO4xZEfhznk9koofGGJKWMFNJEj3Q%2Fww9xdTKSvVUF9Cn9GgFIGYQqvO%2FWcqtQ9%2FhIexPC5q3wz2iFj5KiMdK6rz9Ac0lU9PlUYT&X-Amz-Signature=ad8bfd0a1701a36b06d6c417278cb53efeb065c4ae6c27ba4f27d1688c6b6b52&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCDYSUSF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChWPkoLp22NCdAy%2BzMxJYdLYOyFRGxRpxw3MviEx5gVAIhAIkCB3ZqPaLSYPTPf7ctR4ftZDHhZhnINEyF3MrqLMK5Kv8DCCEQABoMNjM3NDIzMTgzODA1Igz%2FjfQ25NTdCpGC1QEq3APAG8WnsOCLGlo7Ay1yoM3RNy7KJJIGg6qfXjQ74Ly6UoYlST123XdYV5cuUe4Em0p5rakzDPYkdlZXRhfw%2Fj1Iz47JM6OTe6UTqgkRQ1D2Pck9UtkKXHkXpYYnI25ZUZeW6BFvJ5eRRNbgJOEyXDFHpYI14b73v2nCA1xdVry6L1F5eNP%2FIbO62nFbROwm1kfnDtJkafpqHVlhM2V%2Bkrhqv6YraBBWPJvRMKoup69PSkKhLJ%2F%2FLgfk5biX6yDA4iUnizviH5870sc5XEu5NH5SLrKMtnGGplpbj4ZyhLE1kCGKjvEJkofyPCVhBeMGtuRKYONNf8DTJ%2Fe5NBNRbV0lRCDkXpySM98BD2DAA40kabDl3JktjenuDnZlv0T2AAghudpNd2UtxJj4gukIcRSyMdJ8oKxsrFEB0XbRHhkci3zbtXNl3eRyRSV%2FsUz6JX%2FlP7BTrbx9xbizyxM%2FG6mehVwyHcjV9e6gal1b8ASYMeux0n7uPUcgQWLg%2FI7fvTXUng%2Bl1ijS7i4dC0ScW4aUf8lI9XwS%2ByED%2FYczEDlM56shjdeDTwSX6ZnO0pDPt4LKgvHIDvFvEo59jfMHJHuGYwpWNRE%2Bsq%2FGAGyBztEoh5h376uFxnWaKGfZfTCm8O69BjqkAQFRqDLzSvV0FqwUcI7iLpH73bEpDgE2HQ3PNfg3Mus719p9bvXVJvklVLnhWGAzAG6vhpB1pGU6jrAmWWl6JH9MfyAMZi5DLLajZw0Uo%2BHWZNYZcQxcHj6brO4xZEfhznk9koofGGJKWMFNJEj3Q%2Fww9xdTKSvVUF9Cn9GgFIGYQqvO%2FWcqtQ9%2FhIexPC5q3wz2iFj5KiMdK6rz9Ac0lU9PlUYT&X-Amz-Signature=53a5608e78ea15dbda7f26fc7de9669e323c68cd88bb1ceb23b1080703e95512&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCDYSUSF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChWPkoLp22NCdAy%2BzMxJYdLYOyFRGxRpxw3MviEx5gVAIhAIkCB3ZqPaLSYPTPf7ctR4ftZDHhZhnINEyF3MrqLMK5Kv8DCCEQABoMNjM3NDIzMTgzODA1Igz%2FjfQ25NTdCpGC1QEq3APAG8WnsOCLGlo7Ay1yoM3RNy7KJJIGg6qfXjQ74Ly6UoYlST123XdYV5cuUe4Em0p5rakzDPYkdlZXRhfw%2Fj1Iz47JM6OTe6UTqgkRQ1D2Pck9UtkKXHkXpYYnI25ZUZeW6BFvJ5eRRNbgJOEyXDFHpYI14b73v2nCA1xdVry6L1F5eNP%2FIbO62nFbROwm1kfnDtJkafpqHVlhM2V%2Bkrhqv6YraBBWPJvRMKoup69PSkKhLJ%2F%2FLgfk5biX6yDA4iUnizviH5870sc5XEu5NH5SLrKMtnGGplpbj4ZyhLE1kCGKjvEJkofyPCVhBeMGtuRKYONNf8DTJ%2Fe5NBNRbV0lRCDkXpySM98BD2DAA40kabDl3JktjenuDnZlv0T2AAghudpNd2UtxJj4gukIcRSyMdJ8oKxsrFEB0XbRHhkci3zbtXNl3eRyRSV%2FsUz6JX%2FlP7BTrbx9xbizyxM%2FG6mehVwyHcjV9e6gal1b8ASYMeux0n7uPUcgQWLg%2FI7fvTXUng%2Bl1ijS7i4dC0ScW4aUf8lI9XwS%2ByED%2FYczEDlM56shjdeDTwSX6ZnO0pDPt4LKgvHIDvFvEo59jfMHJHuGYwpWNRE%2Bsq%2FGAGyBztEoh5h376uFxnWaKGfZfTCm8O69BjqkAQFRqDLzSvV0FqwUcI7iLpH73bEpDgE2HQ3PNfg3Mus719p9bvXVJvklVLnhWGAzAG6vhpB1pGU6jrAmWWl6JH9MfyAMZi5DLLajZw0Uo%2BHWZNYZcQxcHj6brO4xZEfhznk9koofGGJKWMFNJEj3Q%2Fww9xdTKSvVUF9Cn9GgFIGYQqvO%2FWcqtQ9%2FhIexPC5q3wz2iFj5KiMdK6rz9Ac0lU9PlUYT&X-Amz-Signature=40d23735ebfe3b41f5327a3a46082b106e4a7acf02a3fb72ad9ee4d79e040e8a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCDYSUSF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChWPkoLp22NCdAy%2BzMxJYdLYOyFRGxRpxw3MviEx5gVAIhAIkCB3ZqPaLSYPTPf7ctR4ftZDHhZhnINEyF3MrqLMK5Kv8DCCEQABoMNjM3NDIzMTgzODA1Igz%2FjfQ25NTdCpGC1QEq3APAG8WnsOCLGlo7Ay1yoM3RNy7KJJIGg6qfXjQ74Ly6UoYlST123XdYV5cuUe4Em0p5rakzDPYkdlZXRhfw%2Fj1Iz47JM6OTe6UTqgkRQ1D2Pck9UtkKXHkXpYYnI25ZUZeW6BFvJ5eRRNbgJOEyXDFHpYI14b73v2nCA1xdVry6L1F5eNP%2FIbO62nFbROwm1kfnDtJkafpqHVlhM2V%2Bkrhqv6YraBBWPJvRMKoup69PSkKhLJ%2F%2FLgfk5biX6yDA4iUnizviH5870sc5XEu5NH5SLrKMtnGGplpbj4ZyhLE1kCGKjvEJkofyPCVhBeMGtuRKYONNf8DTJ%2Fe5NBNRbV0lRCDkXpySM98BD2DAA40kabDl3JktjenuDnZlv0T2AAghudpNd2UtxJj4gukIcRSyMdJ8oKxsrFEB0XbRHhkci3zbtXNl3eRyRSV%2FsUz6JX%2FlP7BTrbx9xbizyxM%2FG6mehVwyHcjV9e6gal1b8ASYMeux0n7uPUcgQWLg%2FI7fvTXUng%2Bl1ijS7i4dC0ScW4aUf8lI9XwS%2ByED%2FYczEDlM56shjdeDTwSX6ZnO0pDPt4LKgvHIDvFvEo59jfMHJHuGYwpWNRE%2Bsq%2FGAGyBztEoh5h376uFxnWaKGfZfTCm8O69BjqkAQFRqDLzSvV0FqwUcI7iLpH73bEpDgE2HQ3PNfg3Mus719p9bvXVJvklVLnhWGAzAG6vhpB1pGU6jrAmWWl6JH9MfyAMZi5DLLajZw0Uo%2BHWZNYZcQxcHj6brO4xZEfhznk9koofGGJKWMFNJEj3Q%2Fww9xdTKSvVUF9Cn9GgFIGYQqvO%2FWcqtQ9%2FhIexPC5q3wz2iFj5KiMdK6rz9Ac0lU9PlUYT&X-Amz-Signature=7f7a6a25566458afc9836ffd435b6a77dd9a7ee96c19c6f0332b2744e24f0e27&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
