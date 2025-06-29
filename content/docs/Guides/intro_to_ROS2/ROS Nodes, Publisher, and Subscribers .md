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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXVRWHB7%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLL6tr0adAOJvKZRYKcfynuBH1VC0AufjAQR1T8I6zoAiAZT3OKFZrJaMiaDidGhIBR0pmXRIlJVeWsKDol05HeCyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUoW3G65MplBlTN7qKtwD8uG9N%2BBqMpkjCHg96yDuzjv2XQEdjbcLRyHQIXJM8o6wDDOwLlJmY%2F9kU7y27Donu3DwaCMoLY4EqcKkd5d4TIcfjvT7iQdZIh1RHxk4qDSC9ZIDEe3hALT%2FJbuSOMHIxKbCc6JIjZHlc%2FWtsONuydGpo0s5usBex7vp%2Bc3prA5iOWiAD29aMhF3dyUHUQuGkGIhRfyIYklqmLcs6XMmbrp9WvJ3qoiAzuKN2EyFSOt2Qk9i6b4K185cH%2FulJQN4DpT7Nod7SY6Ur8kFLL7Ijqrn9sc5Q0HFLGFJdT10A3Y0G9Jg9sOCnB1DUNZNxgJpxZMzP53WPNo4hQLqbmjJBlO0SPulAp6ZE2WwpoARflqFnDtiQX7t2ncf0vPjtsM5pqrV2OdRC8i67pbiWWO4eoawzfHd9xdjE7tXHfUvq34oe5j%2FNAdEg%2BNJXah4tNILazkdCfMhUvT4HthCHqq456K8Os1KQEkkzBsGZFSHc%2Fl6cJhZogz9rd%2Bf4lFBPc1z2DgfJUQ9Kp99ATD4h%2BXauAvq7R8FvZA0oMd%2F93iA%2Bpk6TGaj8%2BgeD0ubA6B1klas49zonIlN0PeauZ8KYGWiW0W3k4eoF%2BQ2YO0JIICiDoUxwWM3vt0RveuWAogw7Y%2BCwwY6pgEK7vx6y223eWBiXwJ43PLk27wpr664lpl47ZKz%2Bi8UkXA%2FkjjFCVTpd1kCE9u0RSxqCdWZC6lDljNWvjd%2FiIBjigvDgWIpCyLL7DQLhgBHGun56AnKWDG7JXucZ9tnhiUW4SB6EM3EaazBG7I65X%2Bd4Qxc3Pc4H7X%2FlAJprt7SVUMXbJ6Nx6aG%2BZy80T3%2FxmMlmYsdBxRm%2B1EOzNVTPZu2vnGhVP%2Fk&X-Amz-Signature=7b209c595bb751dca00364fab1ec50cc42d512f24ca880a9ab43cdcbafe61b0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXVRWHB7%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLL6tr0adAOJvKZRYKcfynuBH1VC0AufjAQR1T8I6zoAiAZT3OKFZrJaMiaDidGhIBR0pmXRIlJVeWsKDol05HeCyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUoW3G65MplBlTN7qKtwD8uG9N%2BBqMpkjCHg96yDuzjv2XQEdjbcLRyHQIXJM8o6wDDOwLlJmY%2F9kU7y27Donu3DwaCMoLY4EqcKkd5d4TIcfjvT7iQdZIh1RHxk4qDSC9ZIDEe3hALT%2FJbuSOMHIxKbCc6JIjZHlc%2FWtsONuydGpo0s5usBex7vp%2Bc3prA5iOWiAD29aMhF3dyUHUQuGkGIhRfyIYklqmLcs6XMmbrp9WvJ3qoiAzuKN2EyFSOt2Qk9i6b4K185cH%2FulJQN4DpT7Nod7SY6Ur8kFLL7Ijqrn9sc5Q0HFLGFJdT10A3Y0G9Jg9sOCnB1DUNZNxgJpxZMzP53WPNo4hQLqbmjJBlO0SPulAp6ZE2WwpoARflqFnDtiQX7t2ncf0vPjtsM5pqrV2OdRC8i67pbiWWO4eoawzfHd9xdjE7tXHfUvq34oe5j%2FNAdEg%2BNJXah4tNILazkdCfMhUvT4HthCHqq456K8Os1KQEkkzBsGZFSHc%2Fl6cJhZogz9rd%2Bf4lFBPc1z2DgfJUQ9Kp99ATD4h%2BXauAvq7R8FvZA0oMd%2F93iA%2Bpk6TGaj8%2BgeD0ubA6B1klas49zonIlN0PeauZ8KYGWiW0W3k4eoF%2BQ2YO0JIICiDoUxwWM3vt0RveuWAogw7Y%2BCwwY6pgEK7vx6y223eWBiXwJ43PLk27wpr664lpl47ZKz%2Bi8UkXA%2FkjjFCVTpd1kCE9u0RSxqCdWZC6lDljNWvjd%2FiIBjigvDgWIpCyLL7DQLhgBHGun56AnKWDG7JXucZ9tnhiUW4SB6EM3EaazBG7I65X%2Bd4Qxc3Pc4H7X%2FlAJprt7SVUMXbJ6Nx6aG%2BZy80T3%2FxmMlmYsdBxRm%2B1EOzNVTPZu2vnGhVP%2Fk&X-Amz-Signature=7719d0cdf4b462808823f46f3128d784bcdd5e3766436c5fd66c28edf481d242&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXVRWHB7%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLL6tr0adAOJvKZRYKcfynuBH1VC0AufjAQR1T8I6zoAiAZT3OKFZrJaMiaDidGhIBR0pmXRIlJVeWsKDol05HeCyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUoW3G65MplBlTN7qKtwD8uG9N%2BBqMpkjCHg96yDuzjv2XQEdjbcLRyHQIXJM8o6wDDOwLlJmY%2F9kU7y27Donu3DwaCMoLY4EqcKkd5d4TIcfjvT7iQdZIh1RHxk4qDSC9ZIDEe3hALT%2FJbuSOMHIxKbCc6JIjZHlc%2FWtsONuydGpo0s5usBex7vp%2Bc3prA5iOWiAD29aMhF3dyUHUQuGkGIhRfyIYklqmLcs6XMmbrp9WvJ3qoiAzuKN2EyFSOt2Qk9i6b4K185cH%2FulJQN4DpT7Nod7SY6Ur8kFLL7Ijqrn9sc5Q0HFLGFJdT10A3Y0G9Jg9sOCnB1DUNZNxgJpxZMzP53WPNo4hQLqbmjJBlO0SPulAp6ZE2WwpoARflqFnDtiQX7t2ncf0vPjtsM5pqrV2OdRC8i67pbiWWO4eoawzfHd9xdjE7tXHfUvq34oe5j%2FNAdEg%2BNJXah4tNILazkdCfMhUvT4HthCHqq456K8Os1KQEkkzBsGZFSHc%2Fl6cJhZogz9rd%2Bf4lFBPc1z2DgfJUQ9Kp99ATD4h%2BXauAvq7R8FvZA0oMd%2F93iA%2Bpk6TGaj8%2BgeD0ubA6B1klas49zonIlN0PeauZ8KYGWiW0W3k4eoF%2BQ2YO0JIICiDoUxwWM3vt0RveuWAogw7Y%2BCwwY6pgEK7vx6y223eWBiXwJ43PLk27wpr664lpl47ZKz%2Bi8UkXA%2FkjjFCVTpd1kCE9u0RSxqCdWZC6lDljNWvjd%2FiIBjigvDgWIpCyLL7DQLhgBHGun56AnKWDG7JXucZ9tnhiUW4SB6EM3EaazBG7I65X%2Bd4Qxc3Pc4H7X%2FlAJprt7SVUMXbJ6Nx6aG%2BZy80T3%2FxmMlmYsdBxRm%2B1EOzNVTPZu2vnGhVP%2Fk&X-Amz-Signature=67ec2552baa28c208b88871f96593dfe652de733bfefc859619d09e4e4513a5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXVRWHB7%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLL6tr0adAOJvKZRYKcfynuBH1VC0AufjAQR1T8I6zoAiAZT3OKFZrJaMiaDidGhIBR0pmXRIlJVeWsKDol05HeCyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUoW3G65MplBlTN7qKtwD8uG9N%2BBqMpkjCHg96yDuzjv2XQEdjbcLRyHQIXJM8o6wDDOwLlJmY%2F9kU7y27Donu3DwaCMoLY4EqcKkd5d4TIcfjvT7iQdZIh1RHxk4qDSC9ZIDEe3hALT%2FJbuSOMHIxKbCc6JIjZHlc%2FWtsONuydGpo0s5usBex7vp%2Bc3prA5iOWiAD29aMhF3dyUHUQuGkGIhRfyIYklqmLcs6XMmbrp9WvJ3qoiAzuKN2EyFSOt2Qk9i6b4K185cH%2FulJQN4DpT7Nod7SY6Ur8kFLL7Ijqrn9sc5Q0HFLGFJdT10A3Y0G9Jg9sOCnB1DUNZNxgJpxZMzP53WPNo4hQLqbmjJBlO0SPulAp6ZE2WwpoARflqFnDtiQX7t2ncf0vPjtsM5pqrV2OdRC8i67pbiWWO4eoawzfHd9xdjE7tXHfUvq34oe5j%2FNAdEg%2BNJXah4tNILazkdCfMhUvT4HthCHqq456K8Os1KQEkkzBsGZFSHc%2Fl6cJhZogz9rd%2Bf4lFBPc1z2DgfJUQ9Kp99ATD4h%2BXauAvq7R8FvZA0oMd%2F93iA%2Bpk6TGaj8%2BgeD0ubA6B1klas49zonIlN0PeauZ8KYGWiW0W3k4eoF%2BQ2YO0JIICiDoUxwWM3vt0RveuWAogw7Y%2BCwwY6pgEK7vx6y223eWBiXwJ43PLk27wpr664lpl47ZKz%2Bi8UkXA%2FkjjFCVTpd1kCE9u0RSxqCdWZC6lDljNWvjd%2FiIBjigvDgWIpCyLL7DQLhgBHGun56AnKWDG7JXucZ9tnhiUW4SB6EM3EaazBG7I65X%2Bd4Qxc3Pc4H7X%2FlAJprt7SVUMXbJ6Nx6aG%2BZy80T3%2FxmMlmYsdBxRm%2B1EOzNVTPZu2vnGhVP%2Fk&X-Amz-Signature=5137152aeadcfb20d0d4ee0566e2a5968f41e796df2c1a5798e00c5a4d67e193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXVRWHB7%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLL6tr0adAOJvKZRYKcfynuBH1VC0AufjAQR1T8I6zoAiAZT3OKFZrJaMiaDidGhIBR0pmXRIlJVeWsKDol05HeCyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUoW3G65MplBlTN7qKtwD8uG9N%2BBqMpkjCHg96yDuzjv2XQEdjbcLRyHQIXJM8o6wDDOwLlJmY%2F9kU7y27Donu3DwaCMoLY4EqcKkd5d4TIcfjvT7iQdZIh1RHxk4qDSC9ZIDEe3hALT%2FJbuSOMHIxKbCc6JIjZHlc%2FWtsONuydGpo0s5usBex7vp%2Bc3prA5iOWiAD29aMhF3dyUHUQuGkGIhRfyIYklqmLcs6XMmbrp9WvJ3qoiAzuKN2EyFSOt2Qk9i6b4K185cH%2FulJQN4DpT7Nod7SY6Ur8kFLL7Ijqrn9sc5Q0HFLGFJdT10A3Y0G9Jg9sOCnB1DUNZNxgJpxZMzP53WPNo4hQLqbmjJBlO0SPulAp6ZE2WwpoARflqFnDtiQX7t2ncf0vPjtsM5pqrV2OdRC8i67pbiWWO4eoawzfHd9xdjE7tXHfUvq34oe5j%2FNAdEg%2BNJXah4tNILazkdCfMhUvT4HthCHqq456K8Os1KQEkkzBsGZFSHc%2Fl6cJhZogz9rd%2Bf4lFBPc1z2DgfJUQ9Kp99ATD4h%2BXauAvq7R8FvZA0oMd%2F93iA%2Bpk6TGaj8%2BgeD0ubA6B1klas49zonIlN0PeauZ8KYGWiW0W3k4eoF%2BQ2YO0JIICiDoUxwWM3vt0RveuWAogw7Y%2BCwwY6pgEK7vx6y223eWBiXwJ43PLk27wpr664lpl47ZKz%2Bi8UkXA%2FkjjFCVTpd1kCE9u0RSxqCdWZC6lDljNWvjd%2FiIBjigvDgWIpCyLL7DQLhgBHGun56AnKWDG7JXucZ9tnhiUW4SB6EM3EaazBG7I65X%2Bd4Qxc3Pc4H7X%2FlAJprt7SVUMXbJ6Nx6aG%2BZy80T3%2FxmMlmYsdBxRm%2B1EOzNVTPZu2vnGhVP%2Fk&X-Amz-Signature=feddfde3ffecc0f23b33a202c0eb5c3550e2972467666a3a3aae159a9e060388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXVRWHB7%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLL6tr0adAOJvKZRYKcfynuBH1VC0AufjAQR1T8I6zoAiAZT3OKFZrJaMiaDidGhIBR0pmXRIlJVeWsKDol05HeCyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUoW3G65MplBlTN7qKtwD8uG9N%2BBqMpkjCHg96yDuzjv2XQEdjbcLRyHQIXJM8o6wDDOwLlJmY%2F9kU7y27Donu3DwaCMoLY4EqcKkd5d4TIcfjvT7iQdZIh1RHxk4qDSC9ZIDEe3hALT%2FJbuSOMHIxKbCc6JIjZHlc%2FWtsONuydGpo0s5usBex7vp%2Bc3prA5iOWiAD29aMhF3dyUHUQuGkGIhRfyIYklqmLcs6XMmbrp9WvJ3qoiAzuKN2EyFSOt2Qk9i6b4K185cH%2FulJQN4DpT7Nod7SY6Ur8kFLL7Ijqrn9sc5Q0HFLGFJdT10A3Y0G9Jg9sOCnB1DUNZNxgJpxZMzP53WPNo4hQLqbmjJBlO0SPulAp6ZE2WwpoARflqFnDtiQX7t2ncf0vPjtsM5pqrV2OdRC8i67pbiWWO4eoawzfHd9xdjE7tXHfUvq34oe5j%2FNAdEg%2BNJXah4tNILazkdCfMhUvT4HthCHqq456K8Os1KQEkkzBsGZFSHc%2Fl6cJhZogz9rd%2Bf4lFBPc1z2DgfJUQ9Kp99ATD4h%2BXauAvq7R8FvZA0oMd%2F93iA%2Bpk6TGaj8%2BgeD0ubA6B1klas49zonIlN0PeauZ8KYGWiW0W3k4eoF%2BQ2YO0JIICiDoUxwWM3vt0RveuWAogw7Y%2BCwwY6pgEK7vx6y223eWBiXwJ43PLk27wpr664lpl47ZKz%2Bi8UkXA%2FkjjFCVTpd1kCE9u0RSxqCdWZC6lDljNWvjd%2FiIBjigvDgWIpCyLL7DQLhgBHGun56AnKWDG7JXucZ9tnhiUW4SB6EM3EaazBG7I65X%2Bd4Qxc3Pc4H7X%2FlAJprt7SVUMXbJ6Nx6aG%2BZy80T3%2FxmMlmYsdBxRm%2B1EOzNVTPZu2vnGhVP%2Fk&X-Amz-Signature=2028d1b94532b206250132ba11b205df769507e3976228270abd0e6fb7e85693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXVRWHB7%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLL6tr0adAOJvKZRYKcfynuBH1VC0AufjAQR1T8I6zoAiAZT3OKFZrJaMiaDidGhIBR0pmXRIlJVeWsKDol05HeCyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUoW3G65MplBlTN7qKtwD8uG9N%2BBqMpkjCHg96yDuzjv2XQEdjbcLRyHQIXJM8o6wDDOwLlJmY%2F9kU7y27Donu3DwaCMoLY4EqcKkd5d4TIcfjvT7iQdZIh1RHxk4qDSC9ZIDEe3hALT%2FJbuSOMHIxKbCc6JIjZHlc%2FWtsONuydGpo0s5usBex7vp%2Bc3prA5iOWiAD29aMhF3dyUHUQuGkGIhRfyIYklqmLcs6XMmbrp9WvJ3qoiAzuKN2EyFSOt2Qk9i6b4K185cH%2FulJQN4DpT7Nod7SY6Ur8kFLL7Ijqrn9sc5Q0HFLGFJdT10A3Y0G9Jg9sOCnB1DUNZNxgJpxZMzP53WPNo4hQLqbmjJBlO0SPulAp6ZE2WwpoARflqFnDtiQX7t2ncf0vPjtsM5pqrV2OdRC8i67pbiWWO4eoawzfHd9xdjE7tXHfUvq34oe5j%2FNAdEg%2BNJXah4tNILazkdCfMhUvT4HthCHqq456K8Os1KQEkkzBsGZFSHc%2Fl6cJhZogz9rd%2Bf4lFBPc1z2DgfJUQ9Kp99ATD4h%2BXauAvq7R8FvZA0oMd%2F93iA%2Bpk6TGaj8%2BgeD0ubA6B1klas49zonIlN0PeauZ8KYGWiW0W3k4eoF%2BQ2YO0JIICiDoUxwWM3vt0RveuWAogw7Y%2BCwwY6pgEK7vx6y223eWBiXwJ43PLk27wpr664lpl47ZKz%2Bi8UkXA%2FkjjFCVTpd1kCE9u0RSxqCdWZC6lDljNWvjd%2FiIBjigvDgWIpCyLL7DQLhgBHGun56AnKWDG7JXucZ9tnhiUW4SB6EM3EaazBG7I65X%2Bd4Qxc3Pc4H7X%2FlAJprt7SVUMXbJ6Nx6aG%2BZy80T3%2FxmMlmYsdBxRm%2B1EOzNVTPZu2vnGhVP%2Fk&X-Amz-Signature=9eb7265a1b278924d9af7397165606fec626d9f304a8c769d89a2d9f5541c906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXVRWHB7%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLL6tr0adAOJvKZRYKcfynuBH1VC0AufjAQR1T8I6zoAiAZT3OKFZrJaMiaDidGhIBR0pmXRIlJVeWsKDol05HeCyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUoW3G65MplBlTN7qKtwD8uG9N%2BBqMpkjCHg96yDuzjv2XQEdjbcLRyHQIXJM8o6wDDOwLlJmY%2F9kU7y27Donu3DwaCMoLY4EqcKkd5d4TIcfjvT7iQdZIh1RHxk4qDSC9ZIDEe3hALT%2FJbuSOMHIxKbCc6JIjZHlc%2FWtsONuydGpo0s5usBex7vp%2Bc3prA5iOWiAD29aMhF3dyUHUQuGkGIhRfyIYklqmLcs6XMmbrp9WvJ3qoiAzuKN2EyFSOt2Qk9i6b4K185cH%2FulJQN4DpT7Nod7SY6Ur8kFLL7Ijqrn9sc5Q0HFLGFJdT10A3Y0G9Jg9sOCnB1DUNZNxgJpxZMzP53WPNo4hQLqbmjJBlO0SPulAp6ZE2WwpoARflqFnDtiQX7t2ncf0vPjtsM5pqrV2OdRC8i67pbiWWO4eoawzfHd9xdjE7tXHfUvq34oe5j%2FNAdEg%2BNJXah4tNILazkdCfMhUvT4HthCHqq456K8Os1KQEkkzBsGZFSHc%2Fl6cJhZogz9rd%2Bf4lFBPc1z2DgfJUQ9Kp99ATD4h%2BXauAvq7R8FvZA0oMd%2F93iA%2Bpk6TGaj8%2BgeD0ubA6B1klas49zonIlN0PeauZ8KYGWiW0W3k4eoF%2BQ2YO0JIICiDoUxwWM3vt0RveuWAogw7Y%2BCwwY6pgEK7vx6y223eWBiXwJ43PLk27wpr664lpl47ZKz%2Bi8UkXA%2FkjjFCVTpd1kCE9u0RSxqCdWZC6lDljNWvjd%2FiIBjigvDgWIpCyLL7DQLhgBHGun56AnKWDG7JXucZ9tnhiUW4SB6EM3EaazBG7I65X%2Bd4Qxc3Pc4H7X%2FlAJprt7SVUMXbJ6Nx6aG%2BZy80T3%2FxmMlmYsdBxRm%2B1EOzNVTPZu2vnGhVP%2Fk&X-Amz-Signature=b5cf9d0007abacc7ee108f237940900e17474d64a0eb7c0c6208798bf3a66ebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
