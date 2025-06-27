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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AMBV2AD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGVtHSAYG%2BSsa%2Fs16vL%2BOYQuqw%2BgcW1kVb8IU32BwI%2BLAiBUTZxVU9hBc0ixS5On2FmuIy0BOISR6IHBjIu9KgcAKyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMfNUUSC2Hpnmb8Q6tKtwDyeUPHWWR9iwYNPf2ATfZcA74wImp%2Bzce4YrUntBmOfrwfzWU2KbSlNLOcAWItsKIQe7UGj10mHfp%2FG5Yz2pqr9MS9JLEqsQD19lLlLnEYVW%2BW3zijuV2ApnxU4FeGZQfE1TNpH6qrwJejtgvaTfNij%2BXoPh5%2BGBHGxSm%2FxbaNCXlk4qu0U95VDwKUGhW5nb3kIG5KpKp5S%2F7ia1BvXWgWYy2dpiXFZFdnnx37SSpPSTs1ePgIcumnu4JzK3WL4J8q9J06xxFRwf9O4iZff5xo6oIqzzftpkj8XVkf5n1%2FINOlg8QWlSpnMNHQtLqWytlTP960yNcQRrqYd39%2BhRKusTrvSLCG%2FZothxrkVQAiYjDytxlUDNR%2BHGCS95lCOogjOagTBYhQm1jz2GD2p9LSfZFjMUp%2BovN2%2FhgqdIhSgBHlvB9LL0b3gJCI8dB5aqNuHVnC4pTmVTc2oBsSjNjkADET%2B4XxLokJwZo8ETXuKgPIPG%2FFYJM0zLh0JhT1diPDlxwyDRlsAjf1E78bH6e%2BZ0vUzeRSBGGPvXqiQefGRRqaASgBqV%2F3I8X5hMVnIT1ap6dUNygC2LgvRw%2BCqHXiV1eQrL5NFXD85YxH52jJUgjYyF0mGA3Dz21Fpcw3aX6wgY6pgGyrIVm76Rxaenoqs6PfJHt1LzLDQ4WRC6AhH%2FvEnwPIwvh7al%2FdyeNqGKUZpZqxWpfV6vOWEiYEsIWN3R0N%2B6jw1yzn0q%2BNSf%2FwshLTmEDOWZ8OIQbLWwJmx%2BCok77fP7lUU4vjQWa9ZsklBtNi0eVVG6I3ItsrhT77cnC9o8JqCVnOPOeJ7sawVfrYLRQRGofARYTDo7WuJo8BnpM3sCg1E3FhbGr&X-Amz-Signature=f8ebae68741ed4dc8fb1b0e6f4a483a6dd7a78861c1062d5a5d779ef3e5bfdf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AMBV2AD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGVtHSAYG%2BSsa%2Fs16vL%2BOYQuqw%2BgcW1kVb8IU32BwI%2BLAiBUTZxVU9hBc0ixS5On2FmuIy0BOISR6IHBjIu9KgcAKyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMfNUUSC2Hpnmb8Q6tKtwDyeUPHWWR9iwYNPf2ATfZcA74wImp%2Bzce4YrUntBmOfrwfzWU2KbSlNLOcAWItsKIQe7UGj10mHfp%2FG5Yz2pqr9MS9JLEqsQD19lLlLnEYVW%2BW3zijuV2ApnxU4FeGZQfE1TNpH6qrwJejtgvaTfNij%2BXoPh5%2BGBHGxSm%2FxbaNCXlk4qu0U95VDwKUGhW5nb3kIG5KpKp5S%2F7ia1BvXWgWYy2dpiXFZFdnnx37SSpPSTs1ePgIcumnu4JzK3WL4J8q9J06xxFRwf9O4iZff5xo6oIqzzftpkj8XVkf5n1%2FINOlg8QWlSpnMNHQtLqWytlTP960yNcQRrqYd39%2BhRKusTrvSLCG%2FZothxrkVQAiYjDytxlUDNR%2BHGCS95lCOogjOagTBYhQm1jz2GD2p9LSfZFjMUp%2BovN2%2FhgqdIhSgBHlvB9LL0b3gJCI8dB5aqNuHVnC4pTmVTc2oBsSjNjkADET%2B4XxLokJwZo8ETXuKgPIPG%2FFYJM0zLh0JhT1diPDlxwyDRlsAjf1E78bH6e%2BZ0vUzeRSBGGPvXqiQefGRRqaASgBqV%2F3I8X5hMVnIT1ap6dUNygC2LgvRw%2BCqHXiV1eQrL5NFXD85YxH52jJUgjYyF0mGA3Dz21Fpcw3aX6wgY6pgGyrIVm76Rxaenoqs6PfJHt1LzLDQ4WRC6AhH%2FvEnwPIwvh7al%2FdyeNqGKUZpZqxWpfV6vOWEiYEsIWN3R0N%2B6jw1yzn0q%2BNSf%2FwshLTmEDOWZ8OIQbLWwJmx%2BCok77fP7lUU4vjQWa9ZsklBtNi0eVVG6I3ItsrhT77cnC9o8JqCVnOPOeJ7sawVfrYLRQRGofARYTDo7WuJo8BnpM3sCg1E3FhbGr&X-Amz-Signature=874837f1adda19a63b07ca341eb02180d153689428314cbef57699955176d2eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AMBV2AD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGVtHSAYG%2BSsa%2Fs16vL%2BOYQuqw%2BgcW1kVb8IU32BwI%2BLAiBUTZxVU9hBc0ixS5On2FmuIy0BOISR6IHBjIu9KgcAKyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMfNUUSC2Hpnmb8Q6tKtwDyeUPHWWR9iwYNPf2ATfZcA74wImp%2Bzce4YrUntBmOfrwfzWU2KbSlNLOcAWItsKIQe7UGj10mHfp%2FG5Yz2pqr9MS9JLEqsQD19lLlLnEYVW%2BW3zijuV2ApnxU4FeGZQfE1TNpH6qrwJejtgvaTfNij%2BXoPh5%2BGBHGxSm%2FxbaNCXlk4qu0U95VDwKUGhW5nb3kIG5KpKp5S%2F7ia1BvXWgWYy2dpiXFZFdnnx37SSpPSTs1ePgIcumnu4JzK3WL4J8q9J06xxFRwf9O4iZff5xo6oIqzzftpkj8XVkf5n1%2FINOlg8QWlSpnMNHQtLqWytlTP960yNcQRrqYd39%2BhRKusTrvSLCG%2FZothxrkVQAiYjDytxlUDNR%2BHGCS95lCOogjOagTBYhQm1jz2GD2p9LSfZFjMUp%2BovN2%2FhgqdIhSgBHlvB9LL0b3gJCI8dB5aqNuHVnC4pTmVTc2oBsSjNjkADET%2B4XxLokJwZo8ETXuKgPIPG%2FFYJM0zLh0JhT1diPDlxwyDRlsAjf1E78bH6e%2BZ0vUzeRSBGGPvXqiQefGRRqaASgBqV%2F3I8X5hMVnIT1ap6dUNygC2LgvRw%2BCqHXiV1eQrL5NFXD85YxH52jJUgjYyF0mGA3Dz21Fpcw3aX6wgY6pgGyrIVm76Rxaenoqs6PfJHt1LzLDQ4WRC6AhH%2FvEnwPIwvh7al%2FdyeNqGKUZpZqxWpfV6vOWEiYEsIWN3R0N%2B6jw1yzn0q%2BNSf%2FwshLTmEDOWZ8OIQbLWwJmx%2BCok77fP7lUU4vjQWa9ZsklBtNi0eVVG6I3ItsrhT77cnC9o8JqCVnOPOeJ7sawVfrYLRQRGofARYTDo7WuJo8BnpM3sCg1E3FhbGr&X-Amz-Signature=1d1b31204826796af6ee7bc445d8515423b3876929cfb90c002bd6b55bddc3cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AMBV2AD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGVtHSAYG%2BSsa%2Fs16vL%2BOYQuqw%2BgcW1kVb8IU32BwI%2BLAiBUTZxVU9hBc0ixS5On2FmuIy0BOISR6IHBjIu9KgcAKyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMfNUUSC2Hpnmb8Q6tKtwDyeUPHWWR9iwYNPf2ATfZcA74wImp%2Bzce4YrUntBmOfrwfzWU2KbSlNLOcAWItsKIQe7UGj10mHfp%2FG5Yz2pqr9MS9JLEqsQD19lLlLnEYVW%2BW3zijuV2ApnxU4FeGZQfE1TNpH6qrwJejtgvaTfNij%2BXoPh5%2BGBHGxSm%2FxbaNCXlk4qu0U95VDwKUGhW5nb3kIG5KpKp5S%2F7ia1BvXWgWYy2dpiXFZFdnnx37SSpPSTs1ePgIcumnu4JzK3WL4J8q9J06xxFRwf9O4iZff5xo6oIqzzftpkj8XVkf5n1%2FINOlg8QWlSpnMNHQtLqWytlTP960yNcQRrqYd39%2BhRKusTrvSLCG%2FZothxrkVQAiYjDytxlUDNR%2BHGCS95lCOogjOagTBYhQm1jz2GD2p9LSfZFjMUp%2BovN2%2FhgqdIhSgBHlvB9LL0b3gJCI8dB5aqNuHVnC4pTmVTc2oBsSjNjkADET%2B4XxLokJwZo8ETXuKgPIPG%2FFYJM0zLh0JhT1diPDlxwyDRlsAjf1E78bH6e%2BZ0vUzeRSBGGPvXqiQefGRRqaASgBqV%2F3I8X5hMVnIT1ap6dUNygC2LgvRw%2BCqHXiV1eQrL5NFXD85YxH52jJUgjYyF0mGA3Dz21Fpcw3aX6wgY6pgGyrIVm76Rxaenoqs6PfJHt1LzLDQ4WRC6AhH%2FvEnwPIwvh7al%2FdyeNqGKUZpZqxWpfV6vOWEiYEsIWN3R0N%2B6jw1yzn0q%2BNSf%2FwshLTmEDOWZ8OIQbLWwJmx%2BCok77fP7lUU4vjQWa9ZsklBtNi0eVVG6I3ItsrhT77cnC9o8JqCVnOPOeJ7sawVfrYLRQRGofARYTDo7WuJo8BnpM3sCg1E3FhbGr&X-Amz-Signature=7f695a2624c000dba9da26a6f5c57b1b231b17d4714d9f7d5153bcefa4b75fb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AMBV2AD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGVtHSAYG%2BSsa%2Fs16vL%2BOYQuqw%2BgcW1kVb8IU32BwI%2BLAiBUTZxVU9hBc0ixS5On2FmuIy0BOISR6IHBjIu9KgcAKyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMfNUUSC2Hpnmb8Q6tKtwDyeUPHWWR9iwYNPf2ATfZcA74wImp%2Bzce4YrUntBmOfrwfzWU2KbSlNLOcAWItsKIQe7UGj10mHfp%2FG5Yz2pqr9MS9JLEqsQD19lLlLnEYVW%2BW3zijuV2ApnxU4FeGZQfE1TNpH6qrwJejtgvaTfNij%2BXoPh5%2BGBHGxSm%2FxbaNCXlk4qu0U95VDwKUGhW5nb3kIG5KpKp5S%2F7ia1BvXWgWYy2dpiXFZFdnnx37SSpPSTs1ePgIcumnu4JzK3WL4J8q9J06xxFRwf9O4iZff5xo6oIqzzftpkj8XVkf5n1%2FINOlg8QWlSpnMNHQtLqWytlTP960yNcQRrqYd39%2BhRKusTrvSLCG%2FZothxrkVQAiYjDytxlUDNR%2BHGCS95lCOogjOagTBYhQm1jz2GD2p9LSfZFjMUp%2BovN2%2FhgqdIhSgBHlvB9LL0b3gJCI8dB5aqNuHVnC4pTmVTc2oBsSjNjkADET%2B4XxLokJwZo8ETXuKgPIPG%2FFYJM0zLh0JhT1diPDlxwyDRlsAjf1E78bH6e%2BZ0vUzeRSBGGPvXqiQefGRRqaASgBqV%2F3I8X5hMVnIT1ap6dUNygC2LgvRw%2BCqHXiV1eQrL5NFXD85YxH52jJUgjYyF0mGA3Dz21Fpcw3aX6wgY6pgGyrIVm76Rxaenoqs6PfJHt1LzLDQ4WRC6AhH%2FvEnwPIwvh7al%2FdyeNqGKUZpZqxWpfV6vOWEiYEsIWN3R0N%2B6jw1yzn0q%2BNSf%2FwshLTmEDOWZ8OIQbLWwJmx%2BCok77fP7lUU4vjQWa9ZsklBtNi0eVVG6I3ItsrhT77cnC9o8JqCVnOPOeJ7sawVfrYLRQRGofARYTDo7WuJo8BnpM3sCg1E3FhbGr&X-Amz-Signature=d2239e23020ce6b54951bf487319308297f0e25974f1eb02ea111f68bd9451da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AMBV2AD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGVtHSAYG%2BSsa%2Fs16vL%2BOYQuqw%2BgcW1kVb8IU32BwI%2BLAiBUTZxVU9hBc0ixS5On2FmuIy0BOISR6IHBjIu9KgcAKyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMfNUUSC2Hpnmb8Q6tKtwDyeUPHWWR9iwYNPf2ATfZcA74wImp%2Bzce4YrUntBmOfrwfzWU2KbSlNLOcAWItsKIQe7UGj10mHfp%2FG5Yz2pqr9MS9JLEqsQD19lLlLnEYVW%2BW3zijuV2ApnxU4FeGZQfE1TNpH6qrwJejtgvaTfNij%2BXoPh5%2BGBHGxSm%2FxbaNCXlk4qu0U95VDwKUGhW5nb3kIG5KpKp5S%2F7ia1BvXWgWYy2dpiXFZFdnnx37SSpPSTs1ePgIcumnu4JzK3WL4J8q9J06xxFRwf9O4iZff5xo6oIqzzftpkj8XVkf5n1%2FINOlg8QWlSpnMNHQtLqWytlTP960yNcQRrqYd39%2BhRKusTrvSLCG%2FZothxrkVQAiYjDytxlUDNR%2BHGCS95lCOogjOagTBYhQm1jz2GD2p9LSfZFjMUp%2BovN2%2FhgqdIhSgBHlvB9LL0b3gJCI8dB5aqNuHVnC4pTmVTc2oBsSjNjkADET%2B4XxLokJwZo8ETXuKgPIPG%2FFYJM0zLh0JhT1diPDlxwyDRlsAjf1E78bH6e%2BZ0vUzeRSBGGPvXqiQefGRRqaASgBqV%2F3I8X5hMVnIT1ap6dUNygC2LgvRw%2BCqHXiV1eQrL5NFXD85YxH52jJUgjYyF0mGA3Dz21Fpcw3aX6wgY6pgGyrIVm76Rxaenoqs6PfJHt1LzLDQ4WRC6AhH%2FvEnwPIwvh7al%2FdyeNqGKUZpZqxWpfV6vOWEiYEsIWN3R0N%2B6jw1yzn0q%2BNSf%2FwshLTmEDOWZ8OIQbLWwJmx%2BCok77fP7lUU4vjQWa9ZsklBtNi0eVVG6I3ItsrhT77cnC9o8JqCVnOPOeJ7sawVfrYLRQRGofARYTDo7WuJo8BnpM3sCg1E3FhbGr&X-Amz-Signature=05564532271fdc42643c66c8e53cd388d49bcd9d2cc1f5891852c0fd03d2b0ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AMBV2AD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGVtHSAYG%2BSsa%2Fs16vL%2BOYQuqw%2BgcW1kVb8IU32BwI%2BLAiBUTZxVU9hBc0ixS5On2FmuIy0BOISR6IHBjIu9KgcAKyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMfNUUSC2Hpnmb8Q6tKtwDyeUPHWWR9iwYNPf2ATfZcA74wImp%2Bzce4YrUntBmOfrwfzWU2KbSlNLOcAWItsKIQe7UGj10mHfp%2FG5Yz2pqr9MS9JLEqsQD19lLlLnEYVW%2BW3zijuV2ApnxU4FeGZQfE1TNpH6qrwJejtgvaTfNij%2BXoPh5%2BGBHGxSm%2FxbaNCXlk4qu0U95VDwKUGhW5nb3kIG5KpKp5S%2F7ia1BvXWgWYy2dpiXFZFdnnx37SSpPSTs1ePgIcumnu4JzK3WL4J8q9J06xxFRwf9O4iZff5xo6oIqzzftpkj8XVkf5n1%2FINOlg8QWlSpnMNHQtLqWytlTP960yNcQRrqYd39%2BhRKusTrvSLCG%2FZothxrkVQAiYjDytxlUDNR%2BHGCS95lCOogjOagTBYhQm1jz2GD2p9LSfZFjMUp%2BovN2%2FhgqdIhSgBHlvB9LL0b3gJCI8dB5aqNuHVnC4pTmVTc2oBsSjNjkADET%2B4XxLokJwZo8ETXuKgPIPG%2FFYJM0zLh0JhT1diPDlxwyDRlsAjf1E78bH6e%2BZ0vUzeRSBGGPvXqiQefGRRqaASgBqV%2F3I8X5hMVnIT1ap6dUNygC2LgvRw%2BCqHXiV1eQrL5NFXD85YxH52jJUgjYyF0mGA3Dz21Fpcw3aX6wgY6pgGyrIVm76Rxaenoqs6PfJHt1LzLDQ4WRC6AhH%2FvEnwPIwvh7al%2FdyeNqGKUZpZqxWpfV6vOWEiYEsIWN3R0N%2B6jw1yzn0q%2BNSf%2FwshLTmEDOWZ8OIQbLWwJmx%2BCok77fP7lUU4vjQWa9ZsklBtNi0eVVG6I3ItsrhT77cnC9o8JqCVnOPOeJ7sawVfrYLRQRGofARYTDo7WuJo8BnpM3sCg1E3FhbGr&X-Amz-Signature=04f4882a77676c0ab80a90e9b7e81174a94ac39c173f937d28081a28e39843f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AMBV2AD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGVtHSAYG%2BSsa%2Fs16vL%2BOYQuqw%2BgcW1kVb8IU32BwI%2BLAiBUTZxVU9hBc0ixS5On2FmuIy0BOISR6IHBjIu9KgcAKyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMfNUUSC2Hpnmb8Q6tKtwDyeUPHWWR9iwYNPf2ATfZcA74wImp%2Bzce4YrUntBmOfrwfzWU2KbSlNLOcAWItsKIQe7UGj10mHfp%2FG5Yz2pqr9MS9JLEqsQD19lLlLnEYVW%2BW3zijuV2ApnxU4FeGZQfE1TNpH6qrwJejtgvaTfNij%2BXoPh5%2BGBHGxSm%2FxbaNCXlk4qu0U95VDwKUGhW5nb3kIG5KpKp5S%2F7ia1BvXWgWYy2dpiXFZFdnnx37SSpPSTs1ePgIcumnu4JzK3WL4J8q9J06xxFRwf9O4iZff5xo6oIqzzftpkj8XVkf5n1%2FINOlg8QWlSpnMNHQtLqWytlTP960yNcQRrqYd39%2BhRKusTrvSLCG%2FZothxrkVQAiYjDytxlUDNR%2BHGCS95lCOogjOagTBYhQm1jz2GD2p9LSfZFjMUp%2BovN2%2FhgqdIhSgBHlvB9LL0b3gJCI8dB5aqNuHVnC4pTmVTc2oBsSjNjkADET%2B4XxLokJwZo8ETXuKgPIPG%2FFYJM0zLh0JhT1diPDlxwyDRlsAjf1E78bH6e%2BZ0vUzeRSBGGPvXqiQefGRRqaASgBqV%2F3I8X5hMVnIT1ap6dUNygC2LgvRw%2BCqHXiV1eQrL5NFXD85YxH52jJUgjYyF0mGA3Dz21Fpcw3aX6wgY6pgGyrIVm76Rxaenoqs6PfJHt1LzLDQ4WRC6AhH%2FvEnwPIwvh7al%2FdyeNqGKUZpZqxWpfV6vOWEiYEsIWN3R0N%2B6jw1yzn0q%2BNSf%2FwshLTmEDOWZ8OIQbLWwJmx%2BCok77fP7lUU4vjQWa9ZsklBtNi0eVVG6I3ItsrhT77cnC9o8JqCVnOPOeJ7sawVfrYLRQRGofARYTDo7WuJo8BnpM3sCg1E3FhbGr&X-Amz-Signature=a5c4dcf250d0ef74fd44fa05422ee07e9223e0b06459a2aa2fcb5a0d5a5ece6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
