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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VK5YBTP%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIHHTXR7CUx4J6dqrQ91Nx22X2emUtvaW52I39tf0r0b%2BAiAeKYdpxkIwahLBu2uhnuqPmbF00BrrA7VhaWKkAjeZvyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzgmsQuDOAtGUUpoWKtwDSrt11PxEtFvck9ewwIsAgcjpZau3D41Yy3%2BggRP9HnJ9gJoEdDL5fkFti0v3zNEhmIGWABW%2Fr6TBEXhl7ChnOexKHNa9NZ9MtQ6E3SknEC22I5LW0Xeny5b1EpGrm%2BqIWY0LnYKebYjm7s5lVWDFrOG18%2Be0QsQ6UXfnES%2BdZfOM828DEGPVXaGXEoCLwdG1sr0lL0U6EIs92ZxQMzunWp%2B1UcOolfPtNOlmhrtez8nyJSOTWv9Zk75NtzWET8s%2Fqo7wVGfUTteKqwVwYQvwFanejUv6%2FMeXAsQ2ZV9Z8ZPJaH%2F51%2BRT%2Fo4qm2ocIvtQbhNw3Db%2BU4%2FmMqWU4OiftI26mptMLVTavWXzFg7FHPi%2BTaZqp5mpPFb75vzsj215NMslj9a8PcpkH4KQGVWuQduyBslFb4BaWczOdbHyT9XPT%2BPjW5S5EoghnjQ4sT409JfbtJBzrZj15CnPs%2BdLRkH9vi0UPL%2FBnKJfrBP2PsIt0PM8dJcvaPV3slN54kf3kpHRjk3Bb71h2E5oNeL5YFCxZJYw0eytOtHOB%2BgbPIgBhI%2BJYDdIe5okLujkunvT4ldPe%2FFguhkFYk36urHWOZJ3lFYo36NGASQUZkxDgvnyhMKzoa3f9eSZrBMwp7unvwY6pgG4D1Bt7V%2F8qcIoyGpL0gd9xOhhIo2cLEZ0OkVlUx6E0mPiR9isr%2BMLb9FPt2S0WcbKLrQMmz%2BP6GOQhkZlMXjPT8ZWvDCog%2BsOTKCYXXrzbMFVMeV%2B28ylxOKbnXTceNt4fSurtsjr5MkPkGX6PNzQrsB0GG%2FqeDlcvmNxGpnJpw0rabL8Ka0TuXRsQs4VA%2FF5HirQpTCRNvkV0EDVQawgvADCuhCo&X-Amz-Signature=626183ca888718b9ef51ec398bca16e73603f344cc5d46c4d9af0e654becc368&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VK5YBTP%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIHHTXR7CUx4J6dqrQ91Nx22X2emUtvaW52I39tf0r0b%2BAiAeKYdpxkIwahLBu2uhnuqPmbF00BrrA7VhaWKkAjeZvyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzgmsQuDOAtGUUpoWKtwDSrt11PxEtFvck9ewwIsAgcjpZau3D41Yy3%2BggRP9HnJ9gJoEdDL5fkFti0v3zNEhmIGWABW%2Fr6TBEXhl7ChnOexKHNa9NZ9MtQ6E3SknEC22I5LW0Xeny5b1EpGrm%2BqIWY0LnYKebYjm7s5lVWDFrOG18%2Be0QsQ6UXfnES%2BdZfOM828DEGPVXaGXEoCLwdG1sr0lL0U6EIs92ZxQMzunWp%2B1UcOolfPtNOlmhrtez8nyJSOTWv9Zk75NtzWET8s%2Fqo7wVGfUTteKqwVwYQvwFanejUv6%2FMeXAsQ2ZV9Z8ZPJaH%2F51%2BRT%2Fo4qm2ocIvtQbhNw3Db%2BU4%2FmMqWU4OiftI26mptMLVTavWXzFg7FHPi%2BTaZqp5mpPFb75vzsj215NMslj9a8PcpkH4KQGVWuQduyBslFb4BaWczOdbHyT9XPT%2BPjW5S5EoghnjQ4sT409JfbtJBzrZj15CnPs%2BdLRkH9vi0UPL%2FBnKJfrBP2PsIt0PM8dJcvaPV3slN54kf3kpHRjk3Bb71h2E5oNeL5YFCxZJYw0eytOtHOB%2BgbPIgBhI%2BJYDdIe5okLujkunvT4ldPe%2FFguhkFYk36urHWOZJ3lFYo36NGASQUZkxDgvnyhMKzoa3f9eSZrBMwp7unvwY6pgG4D1Bt7V%2F8qcIoyGpL0gd9xOhhIo2cLEZ0OkVlUx6E0mPiR9isr%2BMLb9FPt2S0WcbKLrQMmz%2BP6GOQhkZlMXjPT8ZWvDCog%2BsOTKCYXXrzbMFVMeV%2B28ylxOKbnXTceNt4fSurtsjr5MkPkGX6PNzQrsB0GG%2FqeDlcvmNxGpnJpw0rabL8Ka0TuXRsQs4VA%2FF5HirQpTCRNvkV0EDVQawgvADCuhCo&X-Amz-Signature=38bbf7adc3622bf64f851a845d021becd17c6bc6573a4d08b507720d65c3c3b5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VK5YBTP%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIHHTXR7CUx4J6dqrQ91Nx22X2emUtvaW52I39tf0r0b%2BAiAeKYdpxkIwahLBu2uhnuqPmbF00BrrA7VhaWKkAjeZvyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzgmsQuDOAtGUUpoWKtwDSrt11PxEtFvck9ewwIsAgcjpZau3D41Yy3%2BggRP9HnJ9gJoEdDL5fkFti0v3zNEhmIGWABW%2Fr6TBEXhl7ChnOexKHNa9NZ9MtQ6E3SknEC22I5LW0Xeny5b1EpGrm%2BqIWY0LnYKebYjm7s5lVWDFrOG18%2Be0QsQ6UXfnES%2BdZfOM828DEGPVXaGXEoCLwdG1sr0lL0U6EIs92ZxQMzunWp%2B1UcOolfPtNOlmhrtez8nyJSOTWv9Zk75NtzWET8s%2Fqo7wVGfUTteKqwVwYQvwFanejUv6%2FMeXAsQ2ZV9Z8ZPJaH%2F51%2BRT%2Fo4qm2ocIvtQbhNw3Db%2BU4%2FmMqWU4OiftI26mptMLVTavWXzFg7FHPi%2BTaZqp5mpPFb75vzsj215NMslj9a8PcpkH4KQGVWuQduyBslFb4BaWczOdbHyT9XPT%2BPjW5S5EoghnjQ4sT409JfbtJBzrZj15CnPs%2BdLRkH9vi0UPL%2FBnKJfrBP2PsIt0PM8dJcvaPV3slN54kf3kpHRjk3Bb71h2E5oNeL5YFCxZJYw0eytOtHOB%2BgbPIgBhI%2BJYDdIe5okLujkunvT4ldPe%2FFguhkFYk36urHWOZJ3lFYo36NGASQUZkxDgvnyhMKzoa3f9eSZrBMwp7unvwY6pgG4D1Bt7V%2F8qcIoyGpL0gd9xOhhIo2cLEZ0OkVlUx6E0mPiR9isr%2BMLb9FPt2S0WcbKLrQMmz%2BP6GOQhkZlMXjPT8ZWvDCog%2BsOTKCYXXrzbMFVMeV%2B28ylxOKbnXTceNt4fSurtsjr5MkPkGX6PNzQrsB0GG%2FqeDlcvmNxGpnJpw0rabL8Ka0TuXRsQs4VA%2FF5HirQpTCRNvkV0EDVQawgvADCuhCo&X-Amz-Signature=41bc9d469eeba494383cf37d512063ca1d5ba143be655cf286d7e05b6f57f68f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VK5YBTP%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIHHTXR7CUx4J6dqrQ91Nx22X2emUtvaW52I39tf0r0b%2BAiAeKYdpxkIwahLBu2uhnuqPmbF00BrrA7VhaWKkAjeZvyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzgmsQuDOAtGUUpoWKtwDSrt11PxEtFvck9ewwIsAgcjpZau3D41Yy3%2BggRP9HnJ9gJoEdDL5fkFti0v3zNEhmIGWABW%2Fr6TBEXhl7ChnOexKHNa9NZ9MtQ6E3SknEC22I5LW0Xeny5b1EpGrm%2BqIWY0LnYKebYjm7s5lVWDFrOG18%2Be0QsQ6UXfnES%2BdZfOM828DEGPVXaGXEoCLwdG1sr0lL0U6EIs92ZxQMzunWp%2B1UcOolfPtNOlmhrtez8nyJSOTWv9Zk75NtzWET8s%2Fqo7wVGfUTteKqwVwYQvwFanejUv6%2FMeXAsQ2ZV9Z8ZPJaH%2F51%2BRT%2Fo4qm2ocIvtQbhNw3Db%2BU4%2FmMqWU4OiftI26mptMLVTavWXzFg7FHPi%2BTaZqp5mpPFb75vzsj215NMslj9a8PcpkH4KQGVWuQduyBslFb4BaWczOdbHyT9XPT%2BPjW5S5EoghnjQ4sT409JfbtJBzrZj15CnPs%2BdLRkH9vi0UPL%2FBnKJfrBP2PsIt0PM8dJcvaPV3slN54kf3kpHRjk3Bb71h2E5oNeL5YFCxZJYw0eytOtHOB%2BgbPIgBhI%2BJYDdIe5okLujkunvT4ldPe%2FFguhkFYk36urHWOZJ3lFYo36NGASQUZkxDgvnyhMKzoa3f9eSZrBMwp7unvwY6pgG4D1Bt7V%2F8qcIoyGpL0gd9xOhhIo2cLEZ0OkVlUx6E0mPiR9isr%2BMLb9FPt2S0WcbKLrQMmz%2BP6GOQhkZlMXjPT8ZWvDCog%2BsOTKCYXXrzbMFVMeV%2B28ylxOKbnXTceNt4fSurtsjr5MkPkGX6PNzQrsB0GG%2FqeDlcvmNxGpnJpw0rabL8Ka0TuXRsQs4VA%2FF5HirQpTCRNvkV0EDVQawgvADCuhCo&X-Amz-Signature=9935a8e95fd335a50da56d7ae51d8fcf17455f6470ea59a78f5c83d87d9f2697&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VK5YBTP%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIHHTXR7CUx4J6dqrQ91Nx22X2emUtvaW52I39tf0r0b%2BAiAeKYdpxkIwahLBu2uhnuqPmbF00BrrA7VhaWKkAjeZvyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzgmsQuDOAtGUUpoWKtwDSrt11PxEtFvck9ewwIsAgcjpZau3D41Yy3%2BggRP9HnJ9gJoEdDL5fkFti0v3zNEhmIGWABW%2Fr6TBEXhl7ChnOexKHNa9NZ9MtQ6E3SknEC22I5LW0Xeny5b1EpGrm%2BqIWY0LnYKebYjm7s5lVWDFrOG18%2Be0QsQ6UXfnES%2BdZfOM828DEGPVXaGXEoCLwdG1sr0lL0U6EIs92ZxQMzunWp%2B1UcOolfPtNOlmhrtez8nyJSOTWv9Zk75NtzWET8s%2Fqo7wVGfUTteKqwVwYQvwFanejUv6%2FMeXAsQ2ZV9Z8ZPJaH%2F51%2BRT%2Fo4qm2ocIvtQbhNw3Db%2BU4%2FmMqWU4OiftI26mptMLVTavWXzFg7FHPi%2BTaZqp5mpPFb75vzsj215NMslj9a8PcpkH4KQGVWuQduyBslFb4BaWczOdbHyT9XPT%2BPjW5S5EoghnjQ4sT409JfbtJBzrZj15CnPs%2BdLRkH9vi0UPL%2FBnKJfrBP2PsIt0PM8dJcvaPV3slN54kf3kpHRjk3Bb71h2E5oNeL5YFCxZJYw0eytOtHOB%2BgbPIgBhI%2BJYDdIe5okLujkunvT4ldPe%2FFguhkFYk36urHWOZJ3lFYo36NGASQUZkxDgvnyhMKzoa3f9eSZrBMwp7unvwY6pgG4D1Bt7V%2F8qcIoyGpL0gd9xOhhIo2cLEZ0OkVlUx6E0mPiR9isr%2BMLb9FPt2S0WcbKLrQMmz%2BP6GOQhkZlMXjPT8ZWvDCog%2BsOTKCYXXrzbMFVMeV%2B28ylxOKbnXTceNt4fSurtsjr5MkPkGX6PNzQrsB0GG%2FqeDlcvmNxGpnJpw0rabL8Ka0TuXRsQs4VA%2FF5HirQpTCRNvkV0EDVQawgvADCuhCo&X-Amz-Signature=ba70f9a06bb734085796f0d21442dcc8d17afcfc5699b19fd4fa3a1710b99cb0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VK5YBTP%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIHHTXR7CUx4J6dqrQ91Nx22X2emUtvaW52I39tf0r0b%2BAiAeKYdpxkIwahLBu2uhnuqPmbF00BrrA7VhaWKkAjeZvyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzgmsQuDOAtGUUpoWKtwDSrt11PxEtFvck9ewwIsAgcjpZau3D41Yy3%2BggRP9HnJ9gJoEdDL5fkFti0v3zNEhmIGWABW%2Fr6TBEXhl7ChnOexKHNa9NZ9MtQ6E3SknEC22I5LW0Xeny5b1EpGrm%2BqIWY0LnYKebYjm7s5lVWDFrOG18%2Be0QsQ6UXfnES%2BdZfOM828DEGPVXaGXEoCLwdG1sr0lL0U6EIs92ZxQMzunWp%2B1UcOolfPtNOlmhrtez8nyJSOTWv9Zk75NtzWET8s%2Fqo7wVGfUTteKqwVwYQvwFanejUv6%2FMeXAsQ2ZV9Z8ZPJaH%2F51%2BRT%2Fo4qm2ocIvtQbhNw3Db%2BU4%2FmMqWU4OiftI26mptMLVTavWXzFg7FHPi%2BTaZqp5mpPFb75vzsj215NMslj9a8PcpkH4KQGVWuQduyBslFb4BaWczOdbHyT9XPT%2BPjW5S5EoghnjQ4sT409JfbtJBzrZj15CnPs%2BdLRkH9vi0UPL%2FBnKJfrBP2PsIt0PM8dJcvaPV3slN54kf3kpHRjk3Bb71h2E5oNeL5YFCxZJYw0eytOtHOB%2BgbPIgBhI%2BJYDdIe5okLujkunvT4ldPe%2FFguhkFYk36urHWOZJ3lFYo36NGASQUZkxDgvnyhMKzoa3f9eSZrBMwp7unvwY6pgG4D1Bt7V%2F8qcIoyGpL0gd9xOhhIo2cLEZ0OkVlUx6E0mPiR9isr%2BMLb9FPt2S0WcbKLrQMmz%2BP6GOQhkZlMXjPT8ZWvDCog%2BsOTKCYXXrzbMFVMeV%2B28ylxOKbnXTceNt4fSurtsjr5MkPkGX6PNzQrsB0GG%2FqeDlcvmNxGpnJpw0rabL8Ka0TuXRsQs4VA%2FF5HirQpTCRNvkV0EDVQawgvADCuhCo&X-Amz-Signature=70269dee525609a3350f18529774f4a71ab4ce876c5d37b46ed75d3dac1ed831&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VK5YBTP%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIHHTXR7CUx4J6dqrQ91Nx22X2emUtvaW52I39tf0r0b%2BAiAeKYdpxkIwahLBu2uhnuqPmbF00BrrA7VhaWKkAjeZvyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzgmsQuDOAtGUUpoWKtwDSrt11PxEtFvck9ewwIsAgcjpZau3D41Yy3%2BggRP9HnJ9gJoEdDL5fkFti0v3zNEhmIGWABW%2Fr6TBEXhl7ChnOexKHNa9NZ9MtQ6E3SknEC22I5LW0Xeny5b1EpGrm%2BqIWY0LnYKebYjm7s5lVWDFrOG18%2Be0QsQ6UXfnES%2BdZfOM828DEGPVXaGXEoCLwdG1sr0lL0U6EIs92ZxQMzunWp%2B1UcOolfPtNOlmhrtez8nyJSOTWv9Zk75NtzWET8s%2Fqo7wVGfUTteKqwVwYQvwFanejUv6%2FMeXAsQ2ZV9Z8ZPJaH%2F51%2BRT%2Fo4qm2ocIvtQbhNw3Db%2BU4%2FmMqWU4OiftI26mptMLVTavWXzFg7FHPi%2BTaZqp5mpPFb75vzsj215NMslj9a8PcpkH4KQGVWuQduyBslFb4BaWczOdbHyT9XPT%2BPjW5S5EoghnjQ4sT409JfbtJBzrZj15CnPs%2BdLRkH9vi0UPL%2FBnKJfrBP2PsIt0PM8dJcvaPV3slN54kf3kpHRjk3Bb71h2E5oNeL5YFCxZJYw0eytOtHOB%2BgbPIgBhI%2BJYDdIe5okLujkunvT4ldPe%2FFguhkFYk36urHWOZJ3lFYo36NGASQUZkxDgvnyhMKzoa3f9eSZrBMwp7unvwY6pgG4D1Bt7V%2F8qcIoyGpL0gd9xOhhIo2cLEZ0OkVlUx6E0mPiR9isr%2BMLb9FPt2S0WcbKLrQMmz%2BP6GOQhkZlMXjPT8ZWvDCog%2BsOTKCYXXrzbMFVMeV%2B28ylxOKbnXTceNt4fSurtsjr5MkPkGX6PNzQrsB0GG%2FqeDlcvmNxGpnJpw0rabL8Ka0TuXRsQs4VA%2FF5HirQpTCRNvkV0EDVQawgvADCuhCo&X-Amz-Signature=d178b2cb8240f3a232e2aaeb2f413dc2f7312cbaf6e0c815e62cc2855ec55e64&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VK5YBTP%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIHHTXR7CUx4J6dqrQ91Nx22X2emUtvaW52I39tf0r0b%2BAiAeKYdpxkIwahLBu2uhnuqPmbF00BrrA7VhaWKkAjeZvyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzgmsQuDOAtGUUpoWKtwDSrt11PxEtFvck9ewwIsAgcjpZau3D41Yy3%2BggRP9HnJ9gJoEdDL5fkFti0v3zNEhmIGWABW%2Fr6TBEXhl7ChnOexKHNa9NZ9MtQ6E3SknEC22I5LW0Xeny5b1EpGrm%2BqIWY0LnYKebYjm7s5lVWDFrOG18%2Be0QsQ6UXfnES%2BdZfOM828DEGPVXaGXEoCLwdG1sr0lL0U6EIs92ZxQMzunWp%2B1UcOolfPtNOlmhrtez8nyJSOTWv9Zk75NtzWET8s%2Fqo7wVGfUTteKqwVwYQvwFanejUv6%2FMeXAsQ2ZV9Z8ZPJaH%2F51%2BRT%2Fo4qm2ocIvtQbhNw3Db%2BU4%2FmMqWU4OiftI26mptMLVTavWXzFg7FHPi%2BTaZqp5mpPFb75vzsj215NMslj9a8PcpkH4KQGVWuQduyBslFb4BaWczOdbHyT9XPT%2BPjW5S5EoghnjQ4sT409JfbtJBzrZj15CnPs%2BdLRkH9vi0UPL%2FBnKJfrBP2PsIt0PM8dJcvaPV3slN54kf3kpHRjk3Bb71h2E5oNeL5YFCxZJYw0eytOtHOB%2BgbPIgBhI%2BJYDdIe5okLujkunvT4ldPe%2FFguhkFYk36urHWOZJ3lFYo36NGASQUZkxDgvnyhMKzoa3f9eSZrBMwp7unvwY6pgG4D1Bt7V%2F8qcIoyGpL0gd9xOhhIo2cLEZ0OkVlUx6E0mPiR9isr%2BMLb9FPt2S0WcbKLrQMmz%2BP6GOQhkZlMXjPT8ZWvDCog%2BsOTKCYXXrzbMFVMeV%2B28ylxOKbnXTceNt4fSurtsjr5MkPkGX6PNzQrsB0GG%2FqeDlcvmNxGpnJpw0rabL8Ka0TuXRsQs4VA%2FF5HirQpTCRNvkV0EDVQawgvADCuhCo&X-Amz-Signature=cd625d2a92249dd52d2129beb3033eb10d0ba95b5dfe9164c5639532d9c7fb5b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
