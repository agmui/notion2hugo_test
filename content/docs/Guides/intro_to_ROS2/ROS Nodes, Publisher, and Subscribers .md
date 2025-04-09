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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR5MO5NL%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCM59jIt0hW%2BJ2LijH2g%2B7drLCxNmiEHrA4xsjt9hmmOQIgXovIjxKr8knrJrlut%2BDKFr4mkMzbc59ompGLV8zXRWIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnHTO2twP4NjjEBOircAzh%2FGZ%2FLb25eFLdRo6%2BD5yKQ1eoUgZOTTfq7kBphzSSQrhAZCPaY9hDo7ah1LOhIVW94AKoGtPpKL9UbRXFbTm3Wbx9jjrGznc9f%2Bi4IV7cGz%2FJeRpWJe6SDaze5urkIjuwC7%2BkrTNbRvc5EHgg2YU3GnYSuEQN1SmuPttb6PHY0FlsGEIvITPyXH8STJDYa7VLZKr7qtEvC7ZSBvJ4XJ3A%2BgD7Vuxh%2Bdh25BtgKtrhmTxN1GPsRyfIN%2FA1aqSmkuJUSJBekjvsO8QxXbfQTft8k00%2B27DtStDS4w%2BAR6HNuE5RJtjvd%2F3ADJKtQAJ3PwhuQn0j6wQv89HPOuL2qrh2SZr%2FaAYNLeesYHzAPvlNueEcM2pfMPGXBqhleH%2FmUwBpr85rtdOlvN8H7zCHNoZta01S%2BaDJkQ9uKbEJqMGLO42LMsIkBZcTksdvG%2FZ5pPnokS1W6CHArYebNr6qeVxdl1kVpguRjN56BOrZtRztqR572%2FCPYbl%2FXnOHvTjrB9Mab4JfvHjRGfrh%2B6pV%2FuQZyt%2FwkrnemPLE7V8pmt1JY7PyGiOJ%2B4QfYQOSEKLybC3VsnQ9xXEAOZTBHag6kZsXR%2BB22eluYlOvU8dezA6X6DMRwVJ7LHbGZbQU4MK%2FJ2r8GOqUBEOmOriSs2O%2FTLgaLE0kx9H%2BHXpvZKgqvdFftzim0upg3PIx%2Bp21AXZcb7BzA4c70dJdXhA7Cnk82%2FaHHzVixjeY5jsTodVqul5YCAcHVFdNnMt%2BpF7azosU8hWh9qcE04aS4FwI77uGlW%2FcUQIFZ6A%2B2ENwZzP6y6VnVEOyhgjmPbB4%2FAB0egbV%2B7SCXEdb1FusuP2w6krhwcYHzx11ZD%2BJdNzpD&X-Amz-Signature=4bf3cd1f0251ad4dfbd578e46c50721a64354dc6af2eb4c3ac4e3c436a6845fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR5MO5NL%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCM59jIt0hW%2BJ2LijH2g%2B7drLCxNmiEHrA4xsjt9hmmOQIgXovIjxKr8knrJrlut%2BDKFr4mkMzbc59ompGLV8zXRWIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnHTO2twP4NjjEBOircAzh%2FGZ%2FLb25eFLdRo6%2BD5yKQ1eoUgZOTTfq7kBphzSSQrhAZCPaY9hDo7ah1LOhIVW94AKoGtPpKL9UbRXFbTm3Wbx9jjrGznc9f%2Bi4IV7cGz%2FJeRpWJe6SDaze5urkIjuwC7%2BkrTNbRvc5EHgg2YU3GnYSuEQN1SmuPttb6PHY0FlsGEIvITPyXH8STJDYa7VLZKr7qtEvC7ZSBvJ4XJ3A%2BgD7Vuxh%2Bdh25BtgKtrhmTxN1GPsRyfIN%2FA1aqSmkuJUSJBekjvsO8QxXbfQTft8k00%2B27DtStDS4w%2BAR6HNuE5RJtjvd%2F3ADJKtQAJ3PwhuQn0j6wQv89HPOuL2qrh2SZr%2FaAYNLeesYHzAPvlNueEcM2pfMPGXBqhleH%2FmUwBpr85rtdOlvN8H7zCHNoZta01S%2BaDJkQ9uKbEJqMGLO42LMsIkBZcTksdvG%2FZ5pPnokS1W6CHArYebNr6qeVxdl1kVpguRjN56BOrZtRztqR572%2FCPYbl%2FXnOHvTjrB9Mab4JfvHjRGfrh%2B6pV%2FuQZyt%2FwkrnemPLE7V8pmt1JY7PyGiOJ%2B4QfYQOSEKLybC3VsnQ9xXEAOZTBHag6kZsXR%2BB22eluYlOvU8dezA6X6DMRwVJ7LHbGZbQU4MK%2FJ2r8GOqUBEOmOriSs2O%2FTLgaLE0kx9H%2BHXpvZKgqvdFftzim0upg3PIx%2Bp21AXZcb7BzA4c70dJdXhA7Cnk82%2FaHHzVixjeY5jsTodVqul5YCAcHVFdNnMt%2BpF7azosU8hWh9qcE04aS4FwI77uGlW%2FcUQIFZ6A%2B2ENwZzP6y6VnVEOyhgjmPbB4%2FAB0egbV%2B7SCXEdb1FusuP2w6krhwcYHzx11ZD%2BJdNzpD&X-Amz-Signature=038fa0bc45d455eead042e1717951ee6ea1eba2bdd66dd523177a654972d3590&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR5MO5NL%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCM59jIt0hW%2BJ2LijH2g%2B7drLCxNmiEHrA4xsjt9hmmOQIgXovIjxKr8knrJrlut%2BDKFr4mkMzbc59ompGLV8zXRWIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnHTO2twP4NjjEBOircAzh%2FGZ%2FLb25eFLdRo6%2BD5yKQ1eoUgZOTTfq7kBphzSSQrhAZCPaY9hDo7ah1LOhIVW94AKoGtPpKL9UbRXFbTm3Wbx9jjrGznc9f%2Bi4IV7cGz%2FJeRpWJe6SDaze5urkIjuwC7%2BkrTNbRvc5EHgg2YU3GnYSuEQN1SmuPttb6PHY0FlsGEIvITPyXH8STJDYa7VLZKr7qtEvC7ZSBvJ4XJ3A%2BgD7Vuxh%2Bdh25BtgKtrhmTxN1GPsRyfIN%2FA1aqSmkuJUSJBekjvsO8QxXbfQTft8k00%2B27DtStDS4w%2BAR6HNuE5RJtjvd%2F3ADJKtQAJ3PwhuQn0j6wQv89HPOuL2qrh2SZr%2FaAYNLeesYHzAPvlNueEcM2pfMPGXBqhleH%2FmUwBpr85rtdOlvN8H7zCHNoZta01S%2BaDJkQ9uKbEJqMGLO42LMsIkBZcTksdvG%2FZ5pPnokS1W6CHArYebNr6qeVxdl1kVpguRjN56BOrZtRztqR572%2FCPYbl%2FXnOHvTjrB9Mab4JfvHjRGfrh%2B6pV%2FuQZyt%2FwkrnemPLE7V8pmt1JY7PyGiOJ%2B4QfYQOSEKLybC3VsnQ9xXEAOZTBHag6kZsXR%2BB22eluYlOvU8dezA6X6DMRwVJ7LHbGZbQU4MK%2FJ2r8GOqUBEOmOriSs2O%2FTLgaLE0kx9H%2BHXpvZKgqvdFftzim0upg3PIx%2Bp21AXZcb7BzA4c70dJdXhA7Cnk82%2FaHHzVixjeY5jsTodVqul5YCAcHVFdNnMt%2BpF7azosU8hWh9qcE04aS4FwI77uGlW%2FcUQIFZ6A%2B2ENwZzP6y6VnVEOyhgjmPbB4%2FAB0egbV%2B7SCXEdb1FusuP2w6krhwcYHzx11ZD%2BJdNzpD&X-Amz-Signature=b0601b4abf64d562480926b4357ba5f4b3bab25c2f2d5d8938308e5022203300&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR5MO5NL%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCM59jIt0hW%2BJ2LijH2g%2B7drLCxNmiEHrA4xsjt9hmmOQIgXovIjxKr8knrJrlut%2BDKFr4mkMzbc59ompGLV8zXRWIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnHTO2twP4NjjEBOircAzh%2FGZ%2FLb25eFLdRo6%2BD5yKQ1eoUgZOTTfq7kBphzSSQrhAZCPaY9hDo7ah1LOhIVW94AKoGtPpKL9UbRXFbTm3Wbx9jjrGznc9f%2Bi4IV7cGz%2FJeRpWJe6SDaze5urkIjuwC7%2BkrTNbRvc5EHgg2YU3GnYSuEQN1SmuPttb6PHY0FlsGEIvITPyXH8STJDYa7VLZKr7qtEvC7ZSBvJ4XJ3A%2BgD7Vuxh%2Bdh25BtgKtrhmTxN1GPsRyfIN%2FA1aqSmkuJUSJBekjvsO8QxXbfQTft8k00%2B27DtStDS4w%2BAR6HNuE5RJtjvd%2F3ADJKtQAJ3PwhuQn0j6wQv89HPOuL2qrh2SZr%2FaAYNLeesYHzAPvlNueEcM2pfMPGXBqhleH%2FmUwBpr85rtdOlvN8H7zCHNoZta01S%2BaDJkQ9uKbEJqMGLO42LMsIkBZcTksdvG%2FZ5pPnokS1W6CHArYebNr6qeVxdl1kVpguRjN56BOrZtRztqR572%2FCPYbl%2FXnOHvTjrB9Mab4JfvHjRGfrh%2B6pV%2FuQZyt%2FwkrnemPLE7V8pmt1JY7PyGiOJ%2B4QfYQOSEKLybC3VsnQ9xXEAOZTBHag6kZsXR%2BB22eluYlOvU8dezA6X6DMRwVJ7LHbGZbQU4MK%2FJ2r8GOqUBEOmOriSs2O%2FTLgaLE0kx9H%2BHXpvZKgqvdFftzim0upg3PIx%2Bp21AXZcb7BzA4c70dJdXhA7Cnk82%2FaHHzVixjeY5jsTodVqul5YCAcHVFdNnMt%2BpF7azosU8hWh9qcE04aS4FwI77uGlW%2FcUQIFZ6A%2B2ENwZzP6y6VnVEOyhgjmPbB4%2FAB0egbV%2B7SCXEdb1FusuP2w6krhwcYHzx11ZD%2BJdNzpD&X-Amz-Signature=0d8a910aea6018dc35a18ab3ccf32723ec3e7dfd4ba2767b0daca8033f013357&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR5MO5NL%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCM59jIt0hW%2BJ2LijH2g%2B7drLCxNmiEHrA4xsjt9hmmOQIgXovIjxKr8knrJrlut%2BDKFr4mkMzbc59ompGLV8zXRWIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnHTO2twP4NjjEBOircAzh%2FGZ%2FLb25eFLdRo6%2BD5yKQ1eoUgZOTTfq7kBphzSSQrhAZCPaY9hDo7ah1LOhIVW94AKoGtPpKL9UbRXFbTm3Wbx9jjrGznc9f%2Bi4IV7cGz%2FJeRpWJe6SDaze5urkIjuwC7%2BkrTNbRvc5EHgg2YU3GnYSuEQN1SmuPttb6PHY0FlsGEIvITPyXH8STJDYa7VLZKr7qtEvC7ZSBvJ4XJ3A%2BgD7Vuxh%2Bdh25BtgKtrhmTxN1GPsRyfIN%2FA1aqSmkuJUSJBekjvsO8QxXbfQTft8k00%2B27DtStDS4w%2BAR6HNuE5RJtjvd%2F3ADJKtQAJ3PwhuQn0j6wQv89HPOuL2qrh2SZr%2FaAYNLeesYHzAPvlNueEcM2pfMPGXBqhleH%2FmUwBpr85rtdOlvN8H7zCHNoZta01S%2BaDJkQ9uKbEJqMGLO42LMsIkBZcTksdvG%2FZ5pPnokS1W6CHArYebNr6qeVxdl1kVpguRjN56BOrZtRztqR572%2FCPYbl%2FXnOHvTjrB9Mab4JfvHjRGfrh%2B6pV%2FuQZyt%2FwkrnemPLE7V8pmt1JY7PyGiOJ%2B4QfYQOSEKLybC3VsnQ9xXEAOZTBHag6kZsXR%2BB22eluYlOvU8dezA6X6DMRwVJ7LHbGZbQU4MK%2FJ2r8GOqUBEOmOriSs2O%2FTLgaLE0kx9H%2BHXpvZKgqvdFftzim0upg3PIx%2Bp21AXZcb7BzA4c70dJdXhA7Cnk82%2FaHHzVixjeY5jsTodVqul5YCAcHVFdNnMt%2BpF7azosU8hWh9qcE04aS4FwI77uGlW%2FcUQIFZ6A%2B2ENwZzP6y6VnVEOyhgjmPbB4%2FAB0egbV%2B7SCXEdb1FusuP2w6krhwcYHzx11ZD%2BJdNzpD&X-Amz-Signature=a7735932c5584e62dee8a8f48490d67483f4559507e694f7f23369bbc1706185&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR5MO5NL%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCM59jIt0hW%2BJ2LijH2g%2B7drLCxNmiEHrA4xsjt9hmmOQIgXovIjxKr8knrJrlut%2BDKFr4mkMzbc59ompGLV8zXRWIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnHTO2twP4NjjEBOircAzh%2FGZ%2FLb25eFLdRo6%2BD5yKQ1eoUgZOTTfq7kBphzSSQrhAZCPaY9hDo7ah1LOhIVW94AKoGtPpKL9UbRXFbTm3Wbx9jjrGznc9f%2Bi4IV7cGz%2FJeRpWJe6SDaze5urkIjuwC7%2BkrTNbRvc5EHgg2YU3GnYSuEQN1SmuPttb6PHY0FlsGEIvITPyXH8STJDYa7VLZKr7qtEvC7ZSBvJ4XJ3A%2BgD7Vuxh%2Bdh25BtgKtrhmTxN1GPsRyfIN%2FA1aqSmkuJUSJBekjvsO8QxXbfQTft8k00%2B27DtStDS4w%2BAR6HNuE5RJtjvd%2F3ADJKtQAJ3PwhuQn0j6wQv89HPOuL2qrh2SZr%2FaAYNLeesYHzAPvlNueEcM2pfMPGXBqhleH%2FmUwBpr85rtdOlvN8H7zCHNoZta01S%2BaDJkQ9uKbEJqMGLO42LMsIkBZcTksdvG%2FZ5pPnokS1W6CHArYebNr6qeVxdl1kVpguRjN56BOrZtRztqR572%2FCPYbl%2FXnOHvTjrB9Mab4JfvHjRGfrh%2B6pV%2FuQZyt%2FwkrnemPLE7V8pmt1JY7PyGiOJ%2B4QfYQOSEKLybC3VsnQ9xXEAOZTBHag6kZsXR%2BB22eluYlOvU8dezA6X6DMRwVJ7LHbGZbQU4MK%2FJ2r8GOqUBEOmOriSs2O%2FTLgaLE0kx9H%2BHXpvZKgqvdFftzim0upg3PIx%2Bp21AXZcb7BzA4c70dJdXhA7Cnk82%2FaHHzVixjeY5jsTodVqul5YCAcHVFdNnMt%2BpF7azosU8hWh9qcE04aS4FwI77uGlW%2FcUQIFZ6A%2B2ENwZzP6y6VnVEOyhgjmPbB4%2FAB0egbV%2B7SCXEdb1FusuP2w6krhwcYHzx11ZD%2BJdNzpD&X-Amz-Signature=8bbd351d3c960480c55e2695f05324631933e31f36acee85daf3e8e553b13298&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR5MO5NL%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCM59jIt0hW%2BJ2LijH2g%2B7drLCxNmiEHrA4xsjt9hmmOQIgXovIjxKr8knrJrlut%2BDKFr4mkMzbc59ompGLV8zXRWIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnHTO2twP4NjjEBOircAzh%2FGZ%2FLb25eFLdRo6%2BD5yKQ1eoUgZOTTfq7kBphzSSQrhAZCPaY9hDo7ah1LOhIVW94AKoGtPpKL9UbRXFbTm3Wbx9jjrGznc9f%2Bi4IV7cGz%2FJeRpWJe6SDaze5urkIjuwC7%2BkrTNbRvc5EHgg2YU3GnYSuEQN1SmuPttb6PHY0FlsGEIvITPyXH8STJDYa7VLZKr7qtEvC7ZSBvJ4XJ3A%2BgD7Vuxh%2Bdh25BtgKtrhmTxN1GPsRyfIN%2FA1aqSmkuJUSJBekjvsO8QxXbfQTft8k00%2B27DtStDS4w%2BAR6HNuE5RJtjvd%2F3ADJKtQAJ3PwhuQn0j6wQv89HPOuL2qrh2SZr%2FaAYNLeesYHzAPvlNueEcM2pfMPGXBqhleH%2FmUwBpr85rtdOlvN8H7zCHNoZta01S%2BaDJkQ9uKbEJqMGLO42LMsIkBZcTksdvG%2FZ5pPnokS1W6CHArYebNr6qeVxdl1kVpguRjN56BOrZtRztqR572%2FCPYbl%2FXnOHvTjrB9Mab4JfvHjRGfrh%2B6pV%2FuQZyt%2FwkrnemPLE7V8pmt1JY7PyGiOJ%2B4QfYQOSEKLybC3VsnQ9xXEAOZTBHag6kZsXR%2BB22eluYlOvU8dezA6X6DMRwVJ7LHbGZbQU4MK%2FJ2r8GOqUBEOmOriSs2O%2FTLgaLE0kx9H%2BHXpvZKgqvdFftzim0upg3PIx%2Bp21AXZcb7BzA4c70dJdXhA7Cnk82%2FaHHzVixjeY5jsTodVqul5YCAcHVFdNnMt%2BpF7azosU8hWh9qcE04aS4FwI77uGlW%2FcUQIFZ6A%2B2ENwZzP6y6VnVEOyhgjmPbB4%2FAB0egbV%2B7SCXEdb1FusuP2w6krhwcYHzx11ZD%2BJdNzpD&X-Amz-Signature=32307c78f658b259815ae9942423be8db27bb52b3c16d644f52fcf384f2f49d3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR5MO5NL%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCM59jIt0hW%2BJ2LijH2g%2B7drLCxNmiEHrA4xsjt9hmmOQIgXovIjxKr8knrJrlut%2BDKFr4mkMzbc59ompGLV8zXRWIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnHTO2twP4NjjEBOircAzh%2FGZ%2FLb25eFLdRo6%2BD5yKQ1eoUgZOTTfq7kBphzSSQrhAZCPaY9hDo7ah1LOhIVW94AKoGtPpKL9UbRXFbTm3Wbx9jjrGznc9f%2Bi4IV7cGz%2FJeRpWJe6SDaze5urkIjuwC7%2BkrTNbRvc5EHgg2YU3GnYSuEQN1SmuPttb6PHY0FlsGEIvITPyXH8STJDYa7VLZKr7qtEvC7ZSBvJ4XJ3A%2BgD7Vuxh%2Bdh25BtgKtrhmTxN1GPsRyfIN%2FA1aqSmkuJUSJBekjvsO8QxXbfQTft8k00%2B27DtStDS4w%2BAR6HNuE5RJtjvd%2F3ADJKtQAJ3PwhuQn0j6wQv89HPOuL2qrh2SZr%2FaAYNLeesYHzAPvlNueEcM2pfMPGXBqhleH%2FmUwBpr85rtdOlvN8H7zCHNoZta01S%2BaDJkQ9uKbEJqMGLO42LMsIkBZcTksdvG%2FZ5pPnokS1W6CHArYebNr6qeVxdl1kVpguRjN56BOrZtRztqR572%2FCPYbl%2FXnOHvTjrB9Mab4JfvHjRGfrh%2B6pV%2FuQZyt%2FwkrnemPLE7V8pmt1JY7PyGiOJ%2B4QfYQOSEKLybC3VsnQ9xXEAOZTBHag6kZsXR%2BB22eluYlOvU8dezA6X6DMRwVJ7LHbGZbQU4MK%2FJ2r8GOqUBEOmOriSs2O%2FTLgaLE0kx9H%2BHXpvZKgqvdFftzim0upg3PIx%2Bp21AXZcb7BzA4c70dJdXhA7Cnk82%2FaHHzVixjeY5jsTodVqul5YCAcHVFdNnMt%2BpF7azosU8hWh9qcE04aS4FwI77uGlW%2FcUQIFZ6A%2B2ENwZzP6y6VnVEOyhgjmPbB4%2FAB0egbV%2B7SCXEdb1FusuP2w6krhwcYHzx11ZD%2BJdNzpD&X-Amz-Signature=81d62e31d1c94a0c1c1196f97de075d9a154b7165c32ed825af5f0d980089f6d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
