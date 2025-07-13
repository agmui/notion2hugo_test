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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3RUANN%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDUnIaerQqIRRB5FFB8Pd31dULY5yZkDUTANaM7OQeN2AIgIijoP83%2FaZ9%2BTYgzVNjXXaD0vg4e7GZ9tzYy67gvVFcq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDHZpsg9Qfg3enlIBGircA1u%2Bg%2FLq8D%2BCyZz2hjukPiiCapKEH8l7UCwc6oprQn8F%2FAqr590RjZu3IkKI%2FsUksusEryitPJrOubltk3iBKnAB4CWltGZ74RgkH1y67lUqvM27BUcrCWZGIDnHlFk0TzA3fVgMh1WkLeOqXFuwJWHlk1r8O2OsyJAyal%2BWmVMkc7Y3bJ0caUbtNwLoxM5lQVT5u3YzHk19vefRecFHhO4VSKg44XD7cY6rzBIXiyX45xIKfIDs0AcGb9va6v5swHeoulaOWhvX7o75ZmqyXFbI%2FkhNaYkGv6H3vIBpW%2BV2zKEBZ5hYbE1TB6Ly1dQYDqmsFEjNgKYEHoXvPrUuJxE5Yl71t6zgrwxc1SLvYvm47dA7JOVbAJWNuGimxamwmYN0ZQfR0afKNOt5LngvhfBV4xnpXswqN8c4COjHc6yA%2BirW6S%2BMze%2B7yco3%2FBnnsMEYwnOVqF3tmtY7JUrwpJylnvHMawQyL1kN7R67NLGHMEs7b%2B10IEv17G1Q092r%2FywnpwembwY09hyX3MQ7dATrEkLOveukcpxj6q2LOWnHSwt1M084LHRVbTrJ1AOascD%2Bf1%2BaPi2sweyiwU3tqtt5wttggvHAhXWBYLoYWUPKlIQWCFM211qj1ZVyMK%2FI0MMGOqUB11ZFUOmEzdjlWE0hUAnpdgqeho3H1zDj88VYom3ht%2Bkeqhs9zHZMiIXEDvM4i7KK8bqTgRoyhnBjZ9xBI3%2FkBM62DhRFAABf%2BfiPL5AGCGy2JQ9q56xZ57Fw2vfsbOqkR48fZTYsp8EtqM3UorvB7Qk95mX8EID8reT2NH5qoPKp8a9KICxjEqzK6Vq9EQeV7hk%2FO4P4lIMINO%2FCs1lhjcGLAPnO&X-Amz-Signature=c5864e8c5763d67b5ac46ddc5c9da0994259d63f408b7a9616928fc5c0871ea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3RUANN%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDUnIaerQqIRRB5FFB8Pd31dULY5yZkDUTANaM7OQeN2AIgIijoP83%2FaZ9%2BTYgzVNjXXaD0vg4e7GZ9tzYy67gvVFcq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDHZpsg9Qfg3enlIBGircA1u%2Bg%2FLq8D%2BCyZz2hjukPiiCapKEH8l7UCwc6oprQn8F%2FAqr590RjZu3IkKI%2FsUksusEryitPJrOubltk3iBKnAB4CWltGZ74RgkH1y67lUqvM27BUcrCWZGIDnHlFk0TzA3fVgMh1WkLeOqXFuwJWHlk1r8O2OsyJAyal%2BWmVMkc7Y3bJ0caUbtNwLoxM5lQVT5u3YzHk19vefRecFHhO4VSKg44XD7cY6rzBIXiyX45xIKfIDs0AcGb9va6v5swHeoulaOWhvX7o75ZmqyXFbI%2FkhNaYkGv6H3vIBpW%2BV2zKEBZ5hYbE1TB6Ly1dQYDqmsFEjNgKYEHoXvPrUuJxE5Yl71t6zgrwxc1SLvYvm47dA7JOVbAJWNuGimxamwmYN0ZQfR0afKNOt5LngvhfBV4xnpXswqN8c4COjHc6yA%2BirW6S%2BMze%2B7yco3%2FBnnsMEYwnOVqF3tmtY7JUrwpJylnvHMawQyL1kN7R67NLGHMEs7b%2B10IEv17G1Q092r%2FywnpwembwY09hyX3MQ7dATrEkLOveukcpxj6q2LOWnHSwt1M084LHRVbTrJ1AOascD%2Bf1%2BaPi2sweyiwU3tqtt5wttggvHAhXWBYLoYWUPKlIQWCFM211qj1ZVyMK%2FI0MMGOqUB11ZFUOmEzdjlWE0hUAnpdgqeho3H1zDj88VYom3ht%2Bkeqhs9zHZMiIXEDvM4i7KK8bqTgRoyhnBjZ9xBI3%2FkBM62DhRFAABf%2BfiPL5AGCGy2JQ9q56xZ57Fw2vfsbOqkR48fZTYsp8EtqM3UorvB7Qk95mX8EID8reT2NH5qoPKp8a9KICxjEqzK6Vq9EQeV7hk%2FO4P4lIMINO%2FCs1lhjcGLAPnO&X-Amz-Signature=ab9919a74309c5ff45c97616ed7fb29a481a148514cbd866adda41edd9f7bf14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3RUANN%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDUnIaerQqIRRB5FFB8Pd31dULY5yZkDUTANaM7OQeN2AIgIijoP83%2FaZ9%2BTYgzVNjXXaD0vg4e7GZ9tzYy67gvVFcq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDHZpsg9Qfg3enlIBGircA1u%2Bg%2FLq8D%2BCyZz2hjukPiiCapKEH8l7UCwc6oprQn8F%2FAqr590RjZu3IkKI%2FsUksusEryitPJrOubltk3iBKnAB4CWltGZ74RgkH1y67lUqvM27BUcrCWZGIDnHlFk0TzA3fVgMh1WkLeOqXFuwJWHlk1r8O2OsyJAyal%2BWmVMkc7Y3bJ0caUbtNwLoxM5lQVT5u3YzHk19vefRecFHhO4VSKg44XD7cY6rzBIXiyX45xIKfIDs0AcGb9va6v5swHeoulaOWhvX7o75ZmqyXFbI%2FkhNaYkGv6H3vIBpW%2BV2zKEBZ5hYbE1TB6Ly1dQYDqmsFEjNgKYEHoXvPrUuJxE5Yl71t6zgrwxc1SLvYvm47dA7JOVbAJWNuGimxamwmYN0ZQfR0afKNOt5LngvhfBV4xnpXswqN8c4COjHc6yA%2BirW6S%2BMze%2B7yco3%2FBnnsMEYwnOVqF3tmtY7JUrwpJylnvHMawQyL1kN7R67NLGHMEs7b%2B10IEv17G1Q092r%2FywnpwembwY09hyX3MQ7dATrEkLOveukcpxj6q2LOWnHSwt1M084LHRVbTrJ1AOascD%2Bf1%2BaPi2sweyiwU3tqtt5wttggvHAhXWBYLoYWUPKlIQWCFM211qj1ZVyMK%2FI0MMGOqUB11ZFUOmEzdjlWE0hUAnpdgqeho3H1zDj88VYom3ht%2Bkeqhs9zHZMiIXEDvM4i7KK8bqTgRoyhnBjZ9xBI3%2FkBM62DhRFAABf%2BfiPL5AGCGy2JQ9q56xZ57Fw2vfsbOqkR48fZTYsp8EtqM3UorvB7Qk95mX8EID8reT2NH5qoPKp8a9KICxjEqzK6Vq9EQeV7hk%2FO4P4lIMINO%2FCs1lhjcGLAPnO&X-Amz-Signature=44239a14173817d2bb50d736d36ba5b970419ff4719b9a8709e3c5d1b7943519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3RUANN%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDUnIaerQqIRRB5FFB8Pd31dULY5yZkDUTANaM7OQeN2AIgIijoP83%2FaZ9%2BTYgzVNjXXaD0vg4e7GZ9tzYy67gvVFcq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDHZpsg9Qfg3enlIBGircA1u%2Bg%2FLq8D%2BCyZz2hjukPiiCapKEH8l7UCwc6oprQn8F%2FAqr590RjZu3IkKI%2FsUksusEryitPJrOubltk3iBKnAB4CWltGZ74RgkH1y67lUqvM27BUcrCWZGIDnHlFk0TzA3fVgMh1WkLeOqXFuwJWHlk1r8O2OsyJAyal%2BWmVMkc7Y3bJ0caUbtNwLoxM5lQVT5u3YzHk19vefRecFHhO4VSKg44XD7cY6rzBIXiyX45xIKfIDs0AcGb9va6v5swHeoulaOWhvX7o75ZmqyXFbI%2FkhNaYkGv6H3vIBpW%2BV2zKEBZ5hYbE1TB6Ly1dQYDqmsFEjNgKYEHoXvPrUuJxE5Yl71t6zgrwxc1SLvYvm47dA7JOVbAJWNuGimxamwmYN0ZQfR0afKNOt5LngvhfBV4xnpXswqN8c4COjHc6yA%2BirW6S%2BMze%2B7yco3%2FBnnsMEYwnOVqF3tmtY7JUrwpJylnvHMawQyL1kN7R67NLGHMEs7b%2B10IEv17G1Q092r%2FywnpwembwY09hyX3MQ7dATrEkLOveukcpxj6q2LOWnHSwt1M084LHRVbTrJ1AOascD%2Bf1%2BaPi2sweyiwU3tqtt5wttggvHAhXWBYLoYWUPKlIQWCFM211qj1ZVyMK%2FI0MMGOqUB11ZFUOmEzdjlWE0hUAnpdgqeho3H1zDj88VYom3ht%2Bkeqhs9zHZMiIXEDvM4i7KK8bqTgRoyhnBjZ9xBI3%2FkBM62DhRFAABf%2BfiPL5AGCGy2JQ9q56xZ57Fw2vfsbOqkR48fZTYsp8EtqM3UorvB7Qk95mX8EID8reT2NH5qoPKp8a9KICxjEqzK6Vq9EQeV7hk%2FO4P4lIMINO%2FCs1lhjcGLAPnO&X-Amz-Signature=cee9b27ace8104746ec7fdeb60fbee68a2e280feac7fa7513d861ba3405400a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3RUANN%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDUnIaerQqIRRB5FFB8Pd31dULY5yZkDUTANaM7OQeN2AIgIijoP83%2FaZ9%2BTYgzVNjXXaD0vg4e7GZ9tzYy67gvVFcq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDHZpsg9Qfg3enlIBGircA1u%2Bg%2FLq8D%2BCyZz2hjukPiiCapKEH8l7UCwc6oprQn8F%2FAqr590RjZu3IkKI%2FsUksusEryitPJrOubltk3iBKnAB4CWltGZ74RgkH1y67lUqvM27BUcrCWZGIDnHlFk0TzA3fVgMh1WkLeOqXFuwJWHlk1r8O2OsyJAyal%2BWmVMkc7Y3bJ0caUbtNwLoxM5lQVT5u3YzHk19vefRecFHhO4VSKg44XD7cY6rzBIXiyX45xIKfIDs0AcGb9va6v5swHeoulaOWhvX7o75ZmqyXFbI%2FkhNaYkGv6H3vIBpW%2BV2zKEBZ5hYbE1TB6Ly1dQYDqmsFEjNgKYEHoXvPrUuJxE5Yl71t6zgrwxc1SLvYvm47dA7JOVbAJWNuGimxamwmYN0ZQfR0afKNOt5LngvhfBV4xnpXswqN8c4COjHc6yA%2BirW6S%2BMze%2B7yco3%2FBnnsMEYwnOVqF3tmtY7JUrwpJylnvHMawQyL1kN7R67NLGHMEs7b%2B10IEv17G1Q092r%2FywnpwembwY09hyX3MQ7dATrEkLOveukcpxj6q2LOWnHSwt1M084LHRVbTrJ1AOascD%2Bf1%2BaPi2sweyiwU3tqtt5wttggvHAhXWBYLoYWUPKlIQWCFM211qj1ZVyMK%2FI0MMGOqUB11ZFUOmEzdjlWE0hUAnpdgqeho3H1zDj88VYom3ht%2Bkeqhs9zHZMiIXEDvM4i7KK8bqTgRoyhnBjZ9xBI3%2FkBM62DhRFAABf%2BfiPL5AGCGy2JQ9q56xZ57Fw2vfsbOqkR48fZTYsp8EtqM3UorvB7Qk95mX8EID8reT2NH5qoPKp8a9KICxjEqzK6Vq9EQeV7hk%2FO4P4lIMINO%2FCs1lhjcGLAPnO&X-Amz-Signature=56b9915813399bdecec185b576988345b6c39704f823824ffeb2493e0885876c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3RUANN%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDUnIaerQqIRRB5FFB8Pd31dULY5yZkDUTANaM7OQeN2AIgIijoP83%2FaZ9%2BTYgzVNjXXaD0vg4e7GZ9tzYy67gvVFcq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDHZpsg9Qfg3enlIBGircA1u%2Bg%2FLq8D%2BCyZz2hjukPiiCapKEH8l7UCwc6oprQn8F%2FAqr590RjZu3IkKI%2FsUksusEryitPJrOubltk3iBKnAB4CWltGZ74RgkH1y67lUqvM27BUcrCWZGIDnHlFk0TzA3fVgMh1WkLeOqXFuwJWHlk1r8O2OsyJAyal%2BWmVMkc7Y3bJ0caUbtNwLoxM5lQVT5u3YzHk19vefRecFHhO4VSKg44XD7cY6rzBIXiyX45xIKfIDs0AcGb9va6v5swHeoulaOWhvX7o75ZmqyXFbI%2FkhNaYkGv6H3vIBpW%2BV2zKEBZ5hYbE1TB6Ly1dQYDqmsFEjNgKYEHoXvPrUuJxE5Yl71t6zgrwxc1SLvYvm47dA7JOVbAJWNuGimxamwmYN0ZQfR0afKNOt5LngvhfBV4xnpXswqN8c4COjHc6yA%2BirW6S%2BMze%2B7yco3%2FBnnsMEYwnOVqF3tmtY7JUrwpJylnvHMawQyL1kN7R67NLGHMEs7b%2B10IEv17G1Q092r%2FywnpwembwY09hyX3MQ7dATrEkLOveukcpxj6q2LOWnHSwt1M084LHRVbTrJ1AOascD%2Bf1%2BaPi2sweyiwU3tqtt5wttggvHAhXWBYLoYWUPKlIQWCFM211qj1ZVyMK%2FI0MMGOqUB11ZFUOmEzdjlWE0hUAnpdgqeho3H1zDj88VYom3ht%2Bkeqhs9zHZMiIXEDvM4i7KK8bqTgRoyhnBjZ9xBI3%2FkBM62DhRFAABf%2BfiPL5AGCGy2JQ9q56xZ57Fw2vfsbOqkR48fZTYsp8EtqM3UorvB7Qk95mX8EID8reT2NH5qoPKp8a9KICxjEqzK6Vq9EQeV7hk%2FO4P4lIMINO%2FCs1lhjcGLAPnO&X-Amz-Signature=88c65d479a150ca4adeab86c85aabaf9dda24803b45401fbdf98eeab8357dd36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3RUANN%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDUnIaerQqIRRB5FFB8Pd31dULY5yZkDUTANaM7OQeN2AIgIijoP83%2FaZ9%2BTYgzVNjXXaD0vg4e7GZ9tzYy67gvVFcq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDHZpsg9Qfg3enlIBGircA1u%2Bg%2FLq8D%2BCyZz2hjukPiiCapKEH8l7UCwc6oprQn8F%2FAqr590RjZu3IkKI%2FsUksusEryitPJrOubltk3iBKnAB4CWltGZ74RgkH1y67lUqvM27BUcrCWZGIDnHlFk0TzA3fVgMh1WkLeOqXFuwJWHlk1r8O2OsyJAyal%2BWmVMkc7Y3bJ0caUbtNwLoxM5lQVT5u3YzHk19vefRecFHhO4VSKg44XD7cY6rzBIXiyX45xIKfIDs0AcGb9va6v5swHeoulaOWhvX7o75ZmqyXFbI%2FkhNaYkGv6H3vIBpW%2BV2zKEBZ5hYbE1TB6Ly1dQYDqmsFEjNgKYEHoXvPrUuJxE5Yl71t6zgrwxc1SLvYvm47dA7JOVbAJWNuGimxamwmYN0ZQfR0afKNOt5LngvhfBV4xnpXswqN8c4COjHc6yA%2BirW6S%2BMze%2B7yco3%2FBnnsMEYwnOVqF3tmtY7JUrwpJylnvHMawQyL1kN7R67NLGHMEs7b%2B10IEv17G1Q092r%2FywnpwembwY09hyX3MQ7dATrEkLOveukcpxj6q2LOWnHSwt1M084LHRVbTrJ1AOascD%2Bf1%2BaPi2sweyiwU3tqtt5wttggvHAhXWBYLoYWUPKlIQWCFM211qj1ZVyMK%2FI0MMGOqUB11ZFUOmEzdjlWE0hUAnpdgqeho3H1zDj88VYom3ht%2Bkeqhs9zHZMiIXEDvM4i7KK8bqTgRoyhnBjZ9xBI3%2FkBM62DhRFAABf%2BfiPL5AGCGy2JQ9q56xZ57Fw2vfsbOqkR48fZTYsp8EtqM3UorvB7Qk95mX8EID8reT2NH5qoPKp8a9KICxjEqzK6Vq9EQeV7hk%2FO4P4lIMINO%2FCs1lhjcGLAPnO&X-Amz-Signature=f5138e6abeff6c450465c2ee9a0aa1a1002c2808590ccc2baa49e1a467f6561b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3RUANN%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDUnIaerQqIRRB5FFB8Pd31dULY5yZkDUTANaM7OQeN2AIgIijoP83%2FaZ9%2BTYgzVNjXXaD0vg4e7GZ9tzYy67gvVFcq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDHZpsg9Qfg3enlIBGircA1u%2Bg%2FLq8D%2BCyZz2hjukPiiCapKEH8l7UCwc6oprQn8F%2FAqr590RjZu3IkKI%2FsUksusEryitPJrOubltk3iBKnAB4CWltGZ74RgkH1y67lUqvM27BUcrCWZGIDnHlFk0TzA3fVgMh1WkLeOqXFuwJWHlk1r8O2OsyJAyal%2BWmVMkc7Y3bJ0caUbtNwLoxM5lQVT5u3YzHk19vefRecFHhO4VSKg44XD7cY6rzBIXiyX45xIKfIDs0AcGb9va6v5swHeoulaOWhvX7o75ZmqyXFbI%2FkhNaYkGv6H3vIBpW%2BV2zKEBZ5hYbE1TB6Ly1dQYDqmsFEjNgKYEHoXvPrUuJxE5Yl71t6zgrwxc1SLvYvm47dA7JOVbAJWNuGimxamwmYN0ZQfR0afKNOt5LngvhfBV4xnpXswqN8c4COjHc6yA%2BirW6S%2BMze%2B7yco3%2FBnnsMEYwnOVqF3tmtY7JUrwpJylnvHMawQyL1kN7R67NLGHMEs7b%2B10IEv17G1Q092r%2FywnpwembwY09hyX3MQ7dATrEkLOveukcpxj6q2LOWnHSwt1M084LHRVbTrJ1AOascD%2Bf1%2BaPi2sweyiwU3tqtt5wttggvHAhXWBYLoYWUPKlIQWCFM211qj1ZVyMK%2FI0MMGOqUB11ZFUOmEzdjlWE0hUAnpdgqeho3H1zDj88VYom3ht%2Bkeqhs9zHZMiIXEDvM4i7KK8bqTgRoyhnBjZ9xBI3%2FkBM62DhRFAABf%2BfiPL5AGCGy2JQ9q56xZ57Fw2vfsbOqkR48fZTYsp8EtqM3UorvB7Qk95mX8EID8reT2NH5qoPKp8a9KICxjEqzK6Vq9EQeV7hk%2FO4P4lIMINO%2FCs1lhjcGLAPnO&X-Amz-Signature=e7e3218194a518a66281614fe918df032e4ad0dad6beb6de0682b4af740ab91d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
