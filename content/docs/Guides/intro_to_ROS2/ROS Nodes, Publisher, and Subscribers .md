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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THTVGRLY%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQD7mbOLL2JqazGfImJNM6nRKTl8MbmMc77nN7S8ol9%2BywIhAJvHSSTuhghTyZTJYv5MfqIaRt9CEKEZGMg06d04yAoXKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igznpr%2BnUfYYcwepQCAq3AM3AIk1787TAOXBFp2bi8AyEi2Aidhoh4ArD1uKcrAgUz4NszksaCpb%2FM3cyTortJLMxQtoQv2EUozoGXtQHfnb9JX3zv9LfdGmlIejWj2XLuwqLE%2Be%2Fw9pqN4zjsdKkKcETCFodZUm1lAzS2AacX3yMOi5gHO89xh7ioVh%2BQMfF%2BhoU9Ihj1uVVa0CkBs4xHPiDyemIXL0H%2FbpizqcCP79E7sQTXCs7%2BPxnnx3VTBMyff7Y1Y4rHm6888eXu6pRYhHOevXFSZfL84twV7Jk1%2Fk2c8kgn7uYVUZ9UN6bf4c7JaHKo7XXSDdvgs0YK8FLc3JrxJd71lhlVjeMbXgioIkQ9BhZdDFcy5tKi1orsFTPlZo0ZOZNsCYKswtQruAVs1Wewfq0b%2FIXfKIjzHE3Tl6IQ74sMfFv6L3WpHq0WYKOlRkti1fTZWW7cwYjZ1pfa70Fnd0wmjtgzWgrJesbNLZmyq0hw8q6CfTWutXHIiLw6V25eqKmKm3ike4aVTk%2F7AIO9NFWXqXRliW2EV4GLxWsT5EE0OlUI3VjcpxbEHl1s0CvqLfqd0RzHUFHVPPGQNcUjJXB1GkYoNs%2B47AkoPyLCnZcNljUSic8YbO4xjRb3sKm6Lrlw1wC8NApDDTiPDBBjqkAcuops0t%2F0tCkXeJ9T07%2F5n2bCw%2BmI2ACVvb%2Fhs7vCe%2BKHMmfPprnehL02SrNkKrdkVu5PQ9Pq2O3LGW8pNqUMYyZ9SoI5p6Fo3RAmJAu6TlW%2Fn7XgQEZyorKctvJgsMrNYtogFAGP5fQC%2FkiQflqH8oQHlrbgbWqpGpesvJifj8NK07QSbgmdUthIwACZ2C%2FCTKpTTfEiHxM%2BOhZnnsgzrdLps7&X-Amz-Signature=8e11ae7e42beb9ab74a501bcea9f04c7c2718f852e923c8b3c0bf4c3041f40a7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THTVGRLY%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQD7mbOLL2JqazGfImJNM6nRKTl8MbmMc77nN7S8ol9%2BywIhAJvHSSTuhghTyZTJYv5MfqIaRt9CEKEZGMg06d04yAoXKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igznpr%2BnUfYYcwepQCAq3AM3AIk1787TAOXBFp2bi8AyEi2Aidhoh4ArD1uKcrAgUz4NszksaCpb%2FM3cyTortJLMxQtoQv2EUozoGXtQHfnb9JX3zv9LfdGmlIejWj2XLuwqLE%2Be%2Fw9pqN4zjsdKkKcETCFodZUm1lAzS2AacX3yMOi5gHO89xh7ioVh%2BQMfF%2BhoU9Ihj1uVVa0CkBs4xHPiDyemIXL0H%2FbpizqcCP79E7sQTXCs7%2BPxnnx3VTBMyff7Y1Y4rHm6888eXu6pRYhHOevXFSZfL84twV7Jk1%2Fk2c8kgn7uYVUZ9UN6bf4c7JaHKo7XXSDdvgs0YK8FLc3JrxJd71lhlVjeMbXgioIkQ9BhZdDFcy5tKi1orsFTPlZo0ZOZNsCYKswtQruAVs1Wewfq0b%2FIXfKIjzHE3Tl6IQ74sMfFv6L3WpHq0WYKOlRkti1fTZWW7cwYjZ1pfa70Fnd0wmjtgzWgrJesbNLZmyq0hw8q6CfTWutXHIiLw6V25eqKmKm3ike4aVTk%2F7AIO9NFWXqXRliW2EV4GLxWsT5EE0OlUI3VjcpxbEHl1s0CvqLfqd0RzHUFHVPPGQNcUjJXB1GkYoNs%2B47AkoPyLCnZcNljUSic8YbO4xjRb3sKm6Lrlw1wC8NApDDTiPDBBjqkAcuops0t%2F0tCkXeJ9T07%2F5n2bCw%2BmI2ACVvb%2Fhs7vCe%2BKHMmfPprnehL02SrNkKrdkVu5PQ9Pq2O3LGW8pNqUMYyZ9SoI5p6Fo3RAmJAu6TlW%2Fn7XgQEZyorKctvJgsMrNYtogFAGP5fQC%2FkiQflqH8oQHlrbgbWqpGpesvJifj8NK07QSbgmdUthIwACZ2C%2FCTKpTTfEiHxM%2BOhZnnsgzrdLps7&X-Amz-Signature=e42afbf005c4fe9c509a99bac46830276e311222df37f89b8312a6aabc3c1323&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THTVGRLY%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQD7mbOLL2JqazGfImJNM6nRKTl8MbmMc77nN7S8ol9%2BywIhAJvHSSTuhghTyZTJYv5MfqIaRt9CEKEZGMg06d04yAoXKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igznpr%2BnUfYYcwepQCAq3AM3AIk1787TAOXBFp2bi8AyEi2Aidhoh4ArD1uKcrAgUz4NszksaCpb%2FM3cyTortJLMxQtoQv2EUozoGXtQHfnb9JX3zv9LfdGmlIejWj2XLuwqLE%2Be%2Fw9pqN4zjsdKkKcETCFodZUm1lAzS2AacX3yMOi5gHO89xh7ioVh%2BQMfF%2BhoU9Ihj1uVVa0CkBs4xHPiDyemIXL0H%2FbpizqcCP79E7sQTXCs7%2BPxnnx3VTBMyff7Y1Y4rHm6888eXu6pRYhHOevXFSZfL84twV7Jk1%2Fk2c8kgn7uYVUZ9UN6bf4c7JaHKo7XXSDdvgs0YK8FLc3JrxJd71lhlVjeMbXgioIkQ9BhZdDFcy5tKi1orsFTPlZo0ZOZNsCYKswtQruAVs1Wewfq0b%2FIXfKIjzHE3Tl6IQ74sMfFv6L3WpHq0WYKOlRkti1fTZWW7cwYjZ1pfa70Fnd0wmjtgzWgrJesbNLZmyq0hw8q6CfTWutXHIiLw6V25eqKmKm3ike4aVTk%2F7AIO9NFWXqXRliW2EV4GLxWsT5EE0OlUI3VjcpxbEHl1s0CvqLfqd0RzHUFHVPPGQNcUjJXB1GkYoNs%2B47AkoPyLCnZcNljUSic8YbO4xjRb3sKm6Lrlw1wC8NApDDTiPDBBjqkAcuops0t%2F0tCkXeJ9T07%2F5n2bCw%2BmI2ACVvb%2Fhs7vCe%2BKHMmfPprnehL02SrNkKrdkVu5PQ9Pq2O3LGW8pNqUMYyZ9SoI5p6Fo3RAmJAu6TlW%2Fn7XgQEZyorKctvJgsMrNYtogFAGP5fQC%2FkiQflqH8oQHlrbgbWqpGpesvJifj8NK07QSbgmdUthIwACZ2C%2FCTKpTTfEiHxM%2BOhZnnsgzrdLps7&X-Amz-Signature=97786a5f10d915040f2a83bafaf4a2eb26f6aabed4b5702dcddef8baa9710310&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THTVGRLY%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQD7mbOLL2JqazGfImJNM6nRKTl8MbmMc77nN7S8ol9%2BywIhAJvHSSTuhghTyZTJYv5MfqIaRt9CEKEZGMg06d04yAoXKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igznpr%2BnUfYYcwepQCAq3AM3AIk1787TAOXBFp2bi8AyEi2Aidhoh4ArD1uKcrAgUz4NszksaCpb%2FM3cyTortJLMxQtoQv2EUozoGXtQHfnb9JX3zv9LfdGmlIejWj2XLuwqLE%2Be%2Fw9pqN4zjsdKkKcETCFodZUm1lAzS2AacX3yMOi5gHO89xh7ioVh%2BQMfF%2BhoU9Ihj1uVVa0CkBs4xHPiDyemIXL0H%2FbpizqcCP79E7sQTXCs7%2BPxnnx3VTBMyff7Y1Y4rHm6888eXu6pRYhHOevXFSZfL84twV7Jk1%2Fk2c8kgn7uYVUZ9UN6bf4c7JaHKo7XXSDdvgs0YK8FLc3JrxJd71lhlVjeMbXgioIkQ9BhZdDFcy5tKi1orsFTPlZo0ZOZNsCYKswtQruAVs1Wewfq0b%2FIXfKIjzHE3Tl6IQ74sMfFv6L3WpHq0WYKOlRkti1fTZWW7cwYjZ1pfa70Fnd0wmjtgzWgrJesbNLZmyq0hw8q6CfTWutXHIiLw6V25eqKmKm3ike4aVTk%2F7AIO9NFWXqXRliW2EV4GLxWsT5EE0OlUI3VjcpxbEHl1s0CvqLfqd0RzHUFHVPPGQNcUjJXB1GkYoNs%2B47AkoPyLCnZcNljUSic8YbO4xjRb3sKm6Lrlw1wC8NApDDTiPDBBjqkAcuops0t%2F0tCkXeJ9T07%2F5n2bCw%2BmI2ACVvb%2Fhs7vCe%2BKHMmfPprnehL02SrNkKrdkVu5PQ9Pq2O3LGW8pNqUMYyZ9SoI5p6Fo3RAmJAu6TlW%2Fn7XgQEZyorKctvJgsMrNYtogFAGP5fQC%2FkiQflqH8oQHlrbgbWqpGpesvJifj8NK07QSbgmdUthIwACZ2C%2FCTKpTTfEiHxM%2BOhZnnsgzrdLps7&X-Amz-Signature=36d0aeafea24b0969807bb946b820a4500e4be51fa974d877076d975e9c4d1a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THTVGRLY%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQD7mbOLL2JqazGfImJNM6nRKTl8MbmMc77nN7S8ol9%2BywIhAJvHSSTuhghTyZTJYv5MfqIaRt9CEKEZGMg06d04yAoXKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igznpr%2BnUfYYcwepQCAq3AM3AIk1787TAOXBFp2bi8AyEi2Aidhoh4ArD1uKcrAgUz4NszksaCpb%2FM3cyTortJLMxQtoQv2EUozoGXtQHfnb9JX3zv9LfdGmlIejWj2XLuwqLE%2Be%2Fw9pqN4zjsdKkKcETCFodZUm1lAzS2AacX3yMOi5gHO89xh7ioVh%2BQMfF%2BhoU9Ihj1uVVa0CkBs4xHPiDyemIXL0H%2FbpizqcCP79E7sQTXCs7%2BPxnnx3VTBMyff7Y1Y4rHm6888eXu6pRYhHOevXFSZfL84twV7Jk1%2Fk2c8kgn7uYVUZ9UN6bf4c7JaHKo7XXSDdvgs0YK8FLc3JrxJd71lhlVjeMbXgioIkQ9BhZdDFcy5tKi1orsFTPlZo0ZOZNsCYKswtQruAVs1Wewfq0b%2FIXfKIjzHE3Tl6IQ74sMfFv6L3WpHq0WYKOlRkti1fTZWW7cwYjZ1pfa70Fnd0wmjtgzWgrJesbNLZmyq0hw8q6CfTWutXHIiLw6V25eqKmKm3ike4aVTk%2F7AIO9NFWXqXRliW2EV4GLxWsT5EE0OlUI3VjcpxbEHl1s0CvqLfqd0RzHUFHVPPGQNcUjJXB1GkYoNs%2B47AkoPyLCnZcNljUSic8YbO4xjRb3sKm6Lrlw1wC8NApDDTiPDBBjqkAcuops0t%2F0tCkXeJ9T07%2F5n2bCw%2BmI2ACVvb%2Fhs7vCe%2BKHMmfPprnehL02SrNkKrdkVu5PQ9Pq2O3LGW8pNqUMYyZ9SoI5p6Fo3RAmJAu6TlW%2Fn7XgQEZyorKctvJgsMrNYtogFAGP5fQC%2FkiQflqH8oQHlrbgbWqpGpesvJifj8NK07QSbgmdUthIwACZ2C%2FCTKpTTfEiHxM%2BOhZnnsgzrdLps7&X-Amz-Signature=b7332e5c447a6d7df69246ff745f208eb31f62c72452f59c9d63eee0e00ca266&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THTVGRLY%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQD7mbOLL2JqazGfImJNM6nRKTl8MbmMc77nN7S8ol9%2BywIhAJvHSSTuhghTyZTJYv5MfqIaRt9CEKEZGMg06d04yAoXKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igznpr%2BnUfYYcwepQCAq3AM3AIk1787TAOXBFp2bi8AyEi2Aidhoh4ArD1uKcrAgUz4NszksaCpb%2FM3cyTortJLMxQtoQv2EUozoGXtQHfnb9JX3zv9LfdGmlIejWj2XLuwqLE%2Be%2Fw9pqN4zjsdKkKcETCFodZUm1lAzS2AacX3yMOi5gHO89xh7ioVh%2BQMfF%2BhoU9Ihj1uVVa0CkBs4xHPiDyemIXL0H%2FbpizqcCP79E7sQTXCs7%2BPxnnx3VTBMyff7Y1Y4rHm6888eXu6pRYhHOevXFSZfL84twV7Jk1%2Fk2c8kgn7uYVUZ9UN6bf4c7JaHKo7XXSDdvgs0YK8FLc3JrxJd71lhlVjeMbXgioIkQ9BhZdDFcy5tKi1orsFTPlZo0ZOZNsCYKswtQruAVs1Wewfq0b%2FIXfKIjzHE3Tl6IQ74sMfFv6L3WpHq0WYKOlRkti1fTZWW7cwYjZ1pfa70Fnd0wmjtgzWgrJesbNLZmyq0hw8q6CfTWutXHIiLw6V25eqKmKm3ike4aVTk%2F7AIO9NFWXqXRliW2EV4GLxWsT5EE0OlUI3VjcpxbEHl1s0CvqLfqd0RzHUFHVPPGQNcUjJXB1GkYoNs%2B47AkoPyLCnZcNljUSic8YbO4xjRb3sKm6Lrlw1wC8NApDDTiPDBBjqkAcuops0t%2F0tCkXeJ9T07%2F5n2bCw%2BmI2ACVvb%2Fhs7vCe%2BKHMmfPprnehL02SrNkKrdkVu5PQ9Pq2O3LGW8pNqUMYyZ9SoI5p6Fo3RAmJAu6TlW%2Fn7XgQEZyorKctvJgsMrNYtogFAGP5fQC%2FkiQflqH8oQHlrbgbWqpGpesvJifj8NK07QSbgmdUthIwACZ2C%2FCTKpTTfEiHxM%2BOhZnnsgzrdLps7&X-Amz-Signature=f80d5813ecd41c0411a96c28c53d41c2262cda0c2e76803358f0371207c318d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THTVGRLY%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQD7mbOLL2JqazGfImJNM6nRKTl8MbmMc77nN7S8ol9%2BywIhAJvHSSTuhghTyZTJYv5MfqIaRt9CEKEZGMg06d04yAoXKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igznpr%2BnUfYYcwepQCAq3AM3AIk1787TAOXBFp2bi8AyEi2Aidhoh4ArD1uKcrAgUz4NszksaCpb%2FM3cyTortJLMxQtoQv2EUozoGXtQHfnb9JX3zv9LfdGmlIejWj2XLuwqLE%2Be%2Fw9pqN4zjsdKkKcETCFodZUm1lAzS2AacX3yMOi5gHO89xh7ioVh%2BQMfF%2BhoU9Ihj1uVVa0CkBs4xHPiDyemIXL0H%2FbpizqcCP79E7sQTXCs7%2BPxnnx3VTBMyff7Y1Y4rHm6888eXu6pRYhHOevXFSZfL84twV7Jk1%2Fk2c8kgn7uYVUZ9UN6bf4c7JaHKo7XXSDdvgs0YK8FLc3JrxJd71lhlVjeMbXgioIkQ9BhZdDFcy5tKi1orsFTPlZo0ZOZNsCYKswtQruAVs1Wewfq0b%2FIXfKIjzHE3Tl6IQ74sMfFv6L3WpHq0WYKOlRkti1fTZWW7cwYjZ1pfa70Fnd0wmjtgzWgrJesbNLZmyq0hw8q6CfTWutXHIiLw6V25eqKmKm3ike4aVTk%2F7AIO9NFWXqXRliW2EV4GLxWsT5EE0OlUI3VjcpxbEHl1s0CvqLfqd0RzHUFHVPPGQNcUjJXB1GkYoNs%2B47AkoPyLCnZcNljUSic8YbO4xjRb3sKm6Lrlw1wC8NApDDTiPDBBjqkAcuops0t%2F0tCkXeJ9T07%2F5n2bCw%2BmI2ACVvb%2Fhs7vCe%2BKHMmfPprnehL02SrNkKrdkVu5PQ9Pq2O3LGW8pNqUMYyZ9SoI5p6Fo3RAmJAu6TlW%2Fn7XgQEZyorKctvJgsMrNYtogFAGP5fQC%2FkiQflqH8oQHlrbgbWqpGpesvJifj8NK07QSbgmdUthIwACZ2C%2FCTKpTTfEiHxM%2BOhZnnsgzrdLps7&X-Amz-Signature=17a60e05e1dfeb3ad9c8322bf60ae859f43987cbff14bc268ec3459859a3a2ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THTVGRLY%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQD7mbOLL2JqazGfImJNM6nRKTl8MbmMc77nN7S8ol9%2BywIhAJvHSSTuhghTyZTJYv5MfqIaRt9CEKEZGMg06d04yAoXKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igznpr%2BnUfYYcwepQCAq3AM3AIk1787TAOXBFp2bi8AyEi2Aidhoh4ArD1uKcrAgUz4NszksaCpb%2FM3cyTortJLMxQtoQv2EUozoGXtQHfnb9JX3zv9LfdGmlIejWj2XLuwqLE%2Be%2Fw9pqN4zjsdKkKcETCFodZUm1lAzS2AacX3yMOi5gHO89xh7ioVh%2BQMfF%2BhoU9Ihj1uVVa0CkBs4xHPiDyemIXL0H%2FbpizqcCP79E7sQTXCs7%2BPxnnx3VTBMyff7Y1Y4rHm6888eXu6pRYhHOevXFSZfL84twV7Jk1%2Fk2c8kgn7uYVUZ9UN6bf4c7JaHKo7XXSDdvgs0YK8FLc3JrxJd71lhlVjeMbXgioIkQ9BhZdDFcy5tKi1orsFTPlZo0ZOZNsCYKswtQruAVs1Wewfq0b%2FIXfKIjzHE3Tl6IQ74sMfFv6L3WpHq0WYKOlRkti1fTZWW7cwYjZ1pfa70Fnd0wmjtgzWgrJesbNLZmyq0hw8q6CfTWutXHIiLw6V25eqKmKm3ike4aVTk%2F7AIO9NFWXqXRliW2EV4GLxWsT5EE0OlUI3VjcpxbEHl1s0CvqLfqd0RzHUFHVPPGQNcUjJXB1GkYoNs%2B47AkoPyLCnZcNljUSic8YbO4xjRb3sKm6Lrlw1wC8NApDDTiPDBBjqkAcuops0t%2F0tCkXeJ9T07%2F5n2bCw%2BmI2ACVvb%2Fhs7vCe%2BKHMmfPprnehL02SrNkKrdkVu5PQ9Pq2O3LGW8pNqUMYyZ9SoI5p6Fo3RAmJAu6TlW%2Fn7XgQEZyorKctvJgsMrNYtogFAGP5fQC%2FkiQflqH8oQHlrbgbWqpGpesvJifj8NK07QSbgmdUthIwACZ2C%2FCTKpTTfEiHxM%2BOhZnnsgzrdLps7&X-Amz-Signature=fc0304bf1800e958f774e1a355dcf39024208c6ed0bd9956658183e55978de57&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
