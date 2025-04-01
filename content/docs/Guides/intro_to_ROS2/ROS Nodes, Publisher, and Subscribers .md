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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KK3FJFZ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIHk2T8BCvE9KHohutijr7OW8py58iXT5OSrNhCIDT20lAiEAgRJOFN7cxPjC6fhXnDN2G6hCE48nBBKRGRrsYUYzuOsqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGsA7%2BEJQYJU7rUzyrcA%2FQXstqZUd1FvwpE9optjCzzkYs18YBoGpUV1QkPPkxN%2BpXpDLxJTa7khwThBngGUUqZgHsqVnodaFrZuvB0jLxozt3TCmMJAxrPtaaJHzknwN9Vbcag61bnYLXQlllbMkux14LDlv30zoIr5IudPrtKp5PQeu66EZNG6zGVNNThpRHeNe2k%2FMS8krh6X0Y329WytzQS4nOFdf67YhQ7qBCuFovP9t4%2FKgg%2FUoCC9qgWQmApZbaic03MkEd20LFiklTBhbEuT1nDj30CyvV0vIj0nnXdeYl0vRjNSMqdrZEjCG%2FlqUZPSkdC3mWwtzS1WWsBc9HhdcfX91N9n3LljhZFUP0IIlhgVOxV6rejRIJnQxZi2TePPIFPWspZ39lmHbfui1f%2BRaypIVZJzljrPETZwPsHHiv8IKwnh4qj3pLHa9QJknUxSe3Dpt7E7362ObFgsFdxqeySAagMxg%2FnVnjEmTlhMrc3N9vbX%2Bv8A%2Bzx55%2FTQQ1kNwgta%2FUUe8QTjrE1v8Y0BMO5kYT8mXTUZEXV%2FPDu8%2F908EMDYwhPYOcA3ocWGwSP0bokYjvwRu7CfXl5WjD4In%2BIjJf1cM8ldZicuq6e0SghD6kBcz%2B5z5jpJosCyv3c4uLeh1yFMOWGsL8GOqUBXT0SeWBAOGSzl5hYHm27paHAJIHyNYHVdOFju2u8sq13bnBnObF%2BxbfHTWGp8rTcl6ufQeNd5iQZt6RoRBpyuBI1oIgO6%2F15158y%2Bt6joAViIarFgTI2CclkoG0IWGi49Do6%2FZaquzMZ9iBJPqWMXfxIoX8EVXs3WiR5C7g8t92E%2FFmutNOTE40WH3vNU%2FpKP9GxMuw5aKni8z4VfyqEACRLbTCo&X-Amz-Signature=9d05c9df6461df18a61014d20c62a6666f177c9e2e598d0998714c5f2b07cb07&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KK3FJFZ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIHk2T8BCvE9KHohutijr7OW8py58iXT5OSrNhCIDT20lAiEAgRJOFN7cxPjC6fhXnDN2G6hCE48nBBKRGRrsYUYzuOsqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGsA7%2BEJQYJU7rUzyrcA%2FQXstqZUd1FvwpE9optjCzzkYs18YBoGpUV1QkPPkxN%2BpXpDLxJTa7khwThBngGUUqZgHsqVnodaFrZuvB0jLxozt3TCmMJAxrPtaaJHzknwN9Vbcag61bnYLXQlllbMkux14LDlv30zoIr5IudPrtKp5PQeu66EZNG6zGVNNThpRHeNe2k%2FMS8krh6X0Y329WytzQS4nOFdf67YhQ7qBCuFovP9t4%2FKgg%2FUoCC9qgWQmApZbaic03MkEd20LFiklTBhbEuT1nDj30CyvV0vIj0nnXdeYl0vRjNSMqdrZEjCG%2FlqUZPSkdC3mWwtzS1WWsBc9HhdcfX91N9n3LljhZFUP0IIlhgVOxV6rejRIJnQxZi2TePPIFPWspZ39lmHbfui1f%2BRaypIVZJzljrPETZwPsHHiv8IKwnh4qj3pLHa9QJknUxSe3Dpt7E7362ObFgsFdxqeySAagMxg%2FnVnjEmTlhMrc3N9vbX%2Bv8A%2Bzx55%2FTQQ1kNwgta%2FUUe8QTjrE1v8Y0BMO5kYT8mXTUZEXV%2FPDu8%2F908EMDYwhPYOcA3ocWGwSP0bokYjvwRu7CfXl5WjD4In%2BIjJf1cM8ldZicuq6e0SghD6kBcz%2B5z5jpJosCyv3c4uLeh1yFMOWGsL8GOqUBXT0SeWBAOGSzl5hYHm27paHAJIHyNYHVdOFju2u8sq13bnBnObF%2BxbfHTWGp8rTcl6ufQeNd5iQZt6RoRBpyuBI1oIgO6%2F15158y%2Bt6joAViIarFgTI2CclkoG0IWGi49Do6%2FZaquzMZ9iBJPqWMXfxIoX8EVXs3WiR5C7g8t92E%2FFmutNOTE40WH3vNU%2FpKP9GxMuw5aKni8z4VfyqEACRLbTCo&X-Amz-Signature=46b4ed1729513c5ea23b4a6b212bcaf139bcb5b7da77cf573bdd4c122f1f3580&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KK3FJFZ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIHk2T8BCvE9KHohutijr7OW8py58iXT5OSrNhCIDT20lAiEAgRJOFN7cxPjC6fhXnDN2G6hCE48nBBKRGRrsYUYzuOsqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGsA7%2BEJQYJU7rUzyrcA%2FQXstqZUd1FvwpE9optjCzzkYs18YBoGpUV1QkPPkxN%2BpXpDLxJTa7khwThBngGUUqZgHsqVnodaFrZuvB0jLxozt3TCmMJAxrPtaaJHzknwN9Vbcag61bnYLXQlllbMkux14LDlv30zoIr5IudPrtKp5PQeu66EZNG6zGVNNThpRHeNe2k%2FMS8krh6X0Y329WytzQS4nOFdf67YhQ7qBCuFovP9t4%2FKgg%2FUoCC9qgWQmApZbaic03MkEd20LFiklTBhbEuT1nDj30CyvV0vIj0nnXdeYl0vRjNSMqdrZEjCG%2FlqUZPSkdC3mWwtzS1WWsBc9HhdcfX91N9n3LljhZFUP0IIlhgVOxV6rejRIJnQxZi2TePPIFPWspZ39lmHbfui1f%2BRaypIVZJzljrPETZwPsHHiv8IKwnh4qj3pLHa9QJknUxSe3Dpt7E7362ObFgsFdxqeySAagMxg%2FnVnjEmTlhMrc3N9vbX%2Bv8A%2Bzx55%2FTQQ1kNwgta%2FUUe8QTjrE1v8Y0BMO5kYT8mXTUZEXV%2FPDu8%2F908EMDYwhPYOcA3ocWGwSP0bokYjvwRu7CfXl5WjD4In%2BIjJf1cM8ldZicuq6e0SghD6kBcz%2B5z5jpJosCyv3c4uLeh1yFMOWGsL8GOqUBXT0SeWBAOGSzl5hYHm27paHAJIHyNYHVdOFju2u8sq13bnBnObF%2BxbfHTWGp8rTcl6ufQeNd5iQZt6RoRBpyuBI1oIgO6%2F15158y%2Bt6joAViIarFgTI2CclkoG0IWGi49Do6%2FZaquzMZ9iBJPqWMXfxIoX8EVXs3WiR5C7g8t92E%2FFmutNOTE40WH3vNU%2FpKP9GxMuw5aKni8z4VfyqEACRLbTCo&X-Amz-Signature=cafbb9ee9d5a5cb7761a609ea2da0529b9e7219aa8c715bf574c6d4c39c7f2be&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KK3FJFZ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIHk2T8BCvE9KHohutijr7OW8py58iXT5OSrNhCIDT20lAiEAgRJOFN7cxPjC6fhXnDN2G6hCE48nBBKRGRrsYUYzuOsqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGsA7%2BEJQYJU7rUzyrcA%2FQXstqZUd1FvwpE9optjCzzkYs18YBoGpUV1QkPPkxN%2BpXpDLxJTa7khwThBngGUUqZgHsqVnodaFrZuvB0jLxozt3TCmMJAxrPtaaJHzknwN9Vbcag61bnYLXQlllbMkux14LDlv30zoIr5IudPrtKp5PQeu66EZNG6zGVNNThpRHeNe2k%2FMS8krh6X0Y329WytzQS4nOFdf67YhQ7qBCuFovP9t4%2FKgg%2FUoCC9qgWQmApZbaic03MkEd20LFiklTBhbEuT1nDj30CyvV0vIj0nnXdeYl0vRjNSMqdrZEjCG%2FlqUZPSkdC3mWwtzS1WWsBc9HhdcfX91N9n3LljhZFUP0IIlhgVOxV6rejRIJnQxZi2TePPIFPWspZ39lmHbfui1f%2BRaypIVZJzljrPETZwPsHHiv8IKwnh4qj3pLHa9QJknUxSe3Dpt7E7362ObFgsFdxqeySAagMxg%2FnVnjEmTlhMrc3N9vbX%2Bv8A%2Bzx55%2FTQQ1kNwgta%2FUUe8QTjrE1v8Y0BMO5kYT8mXTUZEXV%2FPDu8%2F908EMDYwhPYOcA3ocWGwSP0bokYjvwRu7CfXl5WjD4In%2BIjJf1cM8ldZicuq6e0SghD6kBcz%2B5z5jpJosCyv3c4uLeh1yFMOWGsL8GOqUBXT0SeWBAOGSzl5hYHm27paHAJIHyNYHVdOFju2u8sq13bnBnObF%2BxbfHTWGp8rTcl6ufQeNd5iQZt6RoRBpyuBI1oIgO6%2F15158y%2Bt6joAViIarFgTI2CclkoG0IWGi49Do6%2FZaquzMZ9iBJPqWMXfxIoX8EVXs3WiR5C7g8t92E%2FFmutNOTE40WH3vNU%2FpKP9GxMuw5aKni8z4VfyqEACRLbTCo&X-Amz-Signature=809525f24800d6a55baade78d3dd4f5e767a3b75edd090f3e2dd8dc6f8ff4821&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KK3FJFZ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIHk2T8BCvE9KHohutijr7OW8py58iXT5OSrNhCIDT20lAiEAgRJOFN7cxPjC6fhXnDN2G6hCE48nBBKRGRrsYUYzuOsqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGsA7%2BEJQYJU7rUzyrcA%2FQXstqZUd1FvwpE9optjCzzkYs18YBoGpUV1QkPPkxN%2BpXpDLxJTa7khwThBngGUUqZgHsqVnodaFrZuvB0jLxozt3TCmMJAxrPtaaJHzknwN9Vbcag61bnYLXQlllbMkux14LDlv30zoIr5IudPrtKp5PQeu66EZNG6zGVNNThpRHeNe2k%2FMS8krh6X0Y329WytzQS4nOFdf67YhQ7qBCuFovP9t4%2FKgg%2FUoCC9qgWQmApZbaic03MkEd20LFiklTBhbEuT1nDj30CyvV0vIj0nnXdeYl0vRjNSMqdrZEjCG%2FlqUZPSkdC3mWwtzS1WWsBc9HhdcfX91N9n3LljhZFUP0IIlhgVOxV6rejRIJnQxZi2TePPIFPWspZ39lmHbfui1f%2BRaypIVZJzljrPETZwPsHHiv8IKwnh4qj3pLHa9QJknUxSe3Dpt7E7362ObFgsFdxqeySAagMxg%2FnVnjEmTlhMrc3N9vbX%2Bv8A%2Bzx55%2FTQQ1kNwgta%2FUUe8QTjrE1v8Y0BMO5kYT8mXTUZEXV%2FPDu8%2F908EMDYwhPYOcA3ocWGwSP0bokYjvwRu7CfXl5WjD4In%2BIjJf1cM8ldZicuq6e0SghD6kBcz%2B5z5jpJosCyv3c4uLeh1yFMOWGsL8GOqUBXT0SeWBAOGSzl5hYHm27paHAJIHyNYHVdOFju2u8sq13bnBnObF%2BxbfHTWGp8rTcl6ufQeNd5iQZt6RoRBpyuBI1oIgO6%2F15158y%2Bt6joAViIarFgTI2CclkoG0IWGi49Do6%2FZaquzMZ9iBJPqWMXfxIoX8EVXs3WiR5C7g8t92E%2FFmutNOTE40WH3vNU%2FpKP9GxMuw5aKni8z4VfyqEACRLbTCo&X-Amz-Signature=d74fccaf8ffe0192fa476daf08336f16ececca6abe7742e4674f2ddfe29505d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KK3FJFZ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIHk2T8BCvE9KHohutijr7OW8py58iXT5OSrNhCIDT20lAiEAgRJOFN7cxPjC6fhXnDN2G6hCE48nBBKRGRrsYUYzuOsqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGsA7%2BEJQYJU7rUzyrcA%2FQXstqZUd1FvwpE9optjCzzkYs18YBoGpUV1QkPPkxN%2BpXpDLxJTa7khwThBngGUUqZgHsqVnodaFrZuvB0jLxozt3TCmMJAxrPtaaJHzknwN9Vbcag61bnYLXQlllbMkux14LDlv30zoIr5IudPrtKp5PQeu66EZNG6zGVNNThpRHeNe2k%2FMS8krh6X0Y329WytzQS4nOFdf67YhQ7qBCuFovP9t4%2FKgg%2FUoCC9qgWQmApZbaic03MkEd20LFiklTBhbEuT1nDj30CyvV0vIj0nnXdeYl0vRjNSMqdrZEjCG%2FlqUZPSkdC3mWwtzS1WWsBc9HhdcfX91N9n3LljhZFUP0IIlhgVOxV6rejRIJnQxZi2TePPIFPWspZ39lmHbfui1f%2BRaypIVZJzljrPETZwPsHHiv8IKwnh4qj3pLHa9QJknUxSe3Dpt7E7362ObFgsFdxqeySAagMxg%2FnVnjEmTlhMrc3N9vbX%2Bv8A%2Bzx55%2FTQQ1kNwgta%2FUUe8QTjrE1v8Y0BMO5kYT8mXTUZEXV%2FPDu8%2F908EMDYwhPYOcA3ocWGwSP0bokYjvwRu7CfXl5WjD4In%2BIjJf1cM8ldZicuq6e0SghD6kBcz%2B5z5jpJosCyv3c4uLeh1yFMOWGsL8GOqUBXT0SeWBAOGSzl5hYHm27paHAJIHyNYHVdOFju2u8sq13bnBnObF%2BxbfHTWGp8rTcl6ufQeNd5iQZt6RoRBpyuBI1oIgO6%2F15158y%2Bt6joAViIarFgTI2CclkoG0IWGi49Do6%2FZaquzMZ9iBJPqWMXfxIoX8EVXs3WiR5C7g8t92E%2FFmutNOTE40WH3vNU%2FpKP9GxMuw5aKni8z4VfyqEACRLbTCo&X-Amz-Signature=6c8fa9ff0b1f86780c07800ca76d5c32cf1eb68fad3d778aabfd312a3e5bbcfe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KK3FJFZ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIHk2T8BCvE9KHohutijr7OW8py58iXT5OSrNhCIDT20lAiEAgRJOFN7cxPjC6fhXnDN2G6hCE48nBBKRGRrsYUYzuOsqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGsA7%2BEJQYJU7rUzyrcA%2FQXstqZUd1FvwpE9optjCzzkYs18YBoGpUV1QkPPkxN%2BpXpDLxJTa7khwThBngGUUqZgHsqVnodaFrZuvB0jLxozt3TCmMJAxrPtaaJHzknwN9Vbcag61bnYLXQlllbMkux14LDlv30zoIr5IudPrtKp5PQeu66EZNG6zGVNNThpRHeNe2k%2FMS8krh6X0Y329WytzQS4nOFdf67YhQ7qBCuFovP9t4%2FKgg%2FUoCC9qgWQmApZbaic03MkEd20LFiklTBhbEuT1nDj30CyvV0vIj0nnXdeYl0vRjNSMqdrZEjCG%2FlqUZPSkdC3mWwtzS1WWsBc9HhdcfX91N9n3LljhZFUP0IIlhgVOxV6rejRIJnQxZi2TePPIFPWspZ39lmHbfui1f%2BRaypIVZJzljrPETZwPsHHiv8IKwnh4qj3pLHa9QJknUxSe3Dpt7E7362ObFgsFdxqeySAagMxg%2FnVnjEmTlhMrc3N9vbX%2Bv8A%2Bzx55%2FTQQ1kNwgta%2FUUe8QTjrE1v8Y0BMO5kYT8mXTUZEXV%2FPDu8%2F908EMDYwhPYOcA3ocWGwSP0bokYjvwRu7CfXl5WjD4In%2BIjJf1cM8ldZicuq6e0SghD6kBcz%2B5z5jpJosCyv3c4uLeh1yFMOWGsL8GOqUBXT0SeWBAOGSzl5hYHm27paHAJIHyNYHVdOFju2u8sq13bnBnObF%2BxbfHTWGp8rTcl6ufQeNd5iQZt6RoRBpyuBI1oIgO6%2F15158y%2Bt6joAViIarFgTI2CclkoG0IWGi49Do6%2FZaquzMZ9iBJPqWMXfxIoX8EVXs3WiR5C7g8t92E%2FFmutNOTE40WH3vNU%2FpKP9GxMuw5aKni8z4VfyqEACRLbTCo&X-Amz-Signature=ad876f3a5a092b72fc23736d2ea44bb90e68e0fdce035634154efddebe92bf5e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KK3FJFZ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIHk2T8BCvE9KHohutijr7OW8py58iXT5OSrNhCIDT20lAiEAgRJOFN7cxPjC6fhXnDN2G6hCE48nBBKRGRrsYUYzuOsqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGsA7%2BEJQYJU7rUzyrcA%2FQXstqZUd1FvwpE9optjCzzkYs18YBoGpUV1QkPPkxN%2BpXpDLxJTa7khwThBngGUUqZgHsqVnodaFrZuvB0jLxozt3TCmMJAxrPtaaJHzknwN9Vbcag61bnYLXQlllbMkux14LDlv30zoIr5IudPrtKp5PQeu66EZNG6zGVNNThpRHeNe2k%2FMS8krh6X0Y329WytzQS4nOFdf67YhQ7qBCuFovP9t4%2FKgg%2FUoCC9qgWQmApZbaic03MkEd20LFiklTBhbEuT1nDj30CyvV0vIj0nnXdeYl0vRjNSMqdrZEjCG%2FlqUZPSkdC3mWwtzS1WWsBc9HhdcfX91N9n3LljhZFUP0IIlhgVOxV6rejRIJnQxZi2TePPIFPWspZ39lmHbfui1f%2BRaypIVZJzljrPETZwPsHHiv8IKwnh4qj3pLHa9QJknUxSe3Dpt7E7362ObFgsFdxqeySAagMxg%2FnVnjEmTlhMrc3N9vbX%2Bv8A%2Bzx55%2FTQQ1kNwgta%2FUUe8QTjrE1v8Y0BMO5kYT8mXTUZEXV%2FPDu8%2F908EMDYwhPYOcA3ocWGwSP0bokYjvwRu7CfXl5WjD4In%2BIjJf1cM8ldZicuq6e0SghD6kBcz%2B5z5jpJosCyv3c4uLeh1yFMOWGsL8GOqUBXT0SeWBAOGSzl5hYHm27paHAJIHyNYHVdOFju2u8sq13bnBnObF%2BxbfHTWGp8rTcl6ufQeNd5iQZt6RoRBpyuBI1oIgO6%2F15158y%2Bt6joAViIarFgTI2CclkoG0IWGi49Do6%2FZaquzMZ9iBJPqWMXfxIoX8EVXs3WiR5C7g8t92E%2FFmutNOTE40WH3vNU%2FpKP9GxMuw5aKni8z4VfyqEACRLbTCo&X-Amz-Signature=4f5a65dc1311cf47ec764b523d97ed3167c396491ca243e9520f7effbb47ed80&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
