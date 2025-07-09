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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW6GFC2F%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuB8uxbOoePvGXoSZCrk%2FKqyCR5YsE7MAumCu56gqPJwIhAPseL7%2B1cj1r9HhVS4kudsLZorl0D9eHOnwbze1pl8U5KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkVtZQBC0AKChZ5Dsq3APOWqCd74GbZO2lpiipKNHZS2Lx5SFyy1NUN4rJtWToUI9f6S2xae9Z7WQi%2BV3EDclloYp9Yltl1K1Z8XVeMDPx6sxJF3BsiMcdpMe1V3NUjv281OWVl9By63KLVzi6DYg%2BuCSgMSReLx9gHqp7hFFnKbuO0MDvkPcr8VZ4GrW3QZM0CxLMWngc2zk3yaz8kHlAghtW%2FYFkTH0PkeOHSgy3PhGqHVpNBW2BayAZFlLXMXR7cQJMQbz8dGy6Rf6BoN0afXXeUntIG0f8Tats%2FP4LAi37HONcTAg7XJauqFS1jn1f2GxXdgn9y2agX4nz762xRJdNnwzb9KV2OUVEgVlcMJ3h0v0MnXT%2BcHREKn9lM%2BZNLAtq%2Ff5N2vXrMS97J%2FzZD55MyFAc5Dm6BEKpTC3J4x9RYFuXZWGOOPTkXLCniU2KMdvNd%2Fi7RJph5hGVE%2FWdc6ycGCeeOVN%2B78lI3mwe7XUE8oB%2BdJ2rV3v0awoK0sq5f9bA0xf%2FA1ez%2F%2FEP1nRq5z8jDrSpGKxAdHdmh0peaCS88c5%2BPa0PBdihgkCIFVKDB6OfCveP%2B%2F3nz6%2Fzp95lkAY3ks4oBC15HOxB8n9MpBfMhd5yV11i5Fw3NKeoZuxo8hkmGtFnfTWDtzDUxbvDBjqkAYbwAHruNUTzthA28q%2Bw5nrjBfxnZv%2FPtKUYF8fQ55uTc32OT33R5BNh6ymtH9tBKIuRA%2FLHbSQeKtBzD01cI7EtKhpwxrkuWswbdXMAmgJOPphM%2B7HeK1%2BsaWVEy9am%2BUNQW8dbm42SaQyc%2Fnj2FhSD8rgLlYJHyvgF5VAtEs4Iabw43n4ePUY5Iv2QOYD3yodjvG1CfcpDwnH%2Fw8Pl2tWtDsTJ&X-Amz-Signature=f01edf15e437a32347e6c7bc46c8c7e737bae793ced8c017f5f6afb47ed54893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW6GFC2F%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuB8uxbOoePvGXoSZCrk%2FKqyCR5YsE7MAumCu56gqPJwIhAPseL7%2B1cj1r9HhVS4kudsLZorl0D9eHOnwbze1pl8U5KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkVtZQBC0AKChZ5Dsq3APOWqCd74GbZO2lpiipKNHZS2Lx5SFyy1NUN4rJtWToUI9f6S2xae9Z7WQi%2BV3EDclloYp9Yltl1K1Z8XVeMDPx6sxJF3BsiMcdpMe1V3NUjv281OWVl9By63KLVzi6DYg%2BuCSgMSReLx9gHqp7hFFnKbuO0MDvkPcr8VZ4GrW3QZM0CxLMWngc2zk3yaz8kHlAghtW%2FYFkTH0PkeOHSgy3PhGqHVpNBW2BayAZFlLXMXR7cQJMQbz8dGy6Rf6BoN0afXXeUntIG0f8Tats%2FP4LAi37HONcTAg7XJauqFS1jn1f2GxXdgn9y2agX4nz762xRJdNnwzb9KV2OUVEgVlcMJ3h0v0MnXT%2BcHREKn9lM%2BZNLAtq%2Ff5N2vXrMS97J%2FzZD55MyFAc5Dm6BEKpTC3J4x9RYFuXZWGOOPTkXLCniU2KMdvNd%2Fi7RJph5hGVE%2FWdc6ycGCeeOVN%2B78lI3mwe7XUE8oB%2BdJ2rV3v0awoK0sq5f9bA0xf%2FA1ez%2F%2FEP1nRq5z8jDrSpGKxAdHdmh0peaCS88c5%2BPa0PBdihgkCIFVKDB6OfCveP%2B%2F3nz6%2Fzp95lkAY3ks4oBC15HOxB8n9MpBfMhd5yV11i5Fw3NKeoZuxo8hkmGtFnfTWDtzDUxbvDBjqkAYbwAHruNUTzthA28q%2Bw5nrjBfxnZv%2FPtKUYF8fQ55uTc32OT33R5BNh6ymtH9tBKIuRA%2FLHbSQeKtBzD01cI7EtKhpwxrkuWswbdXMAmgJOPphM%2B7HeK1%2BsaWVEy9am%2BUNQW8dbm42SaQyc%2Fnj2FhSD8rgLlYJHyvgF5VAtEs4Iabw43n4ePUY5Iv2QOYD3yodjvG1CfcpDwnH%2Fw8Pl2tWtDsTJ&X-Amz-Signature=18836161e4f1e5eaa4798d7e4f5fb44f47fb5878aa768fb050e78ab7d6516fd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW6GFC2F%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuB8uxbOoePvGXoSZCrk%2FKqyCR5YsE7MAumCu56gqPJwIhAPseL7%2B1cj1r9HhVS4kudsLZorl0D9eHOnwbze1pl8U5KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkVtZQBC0AKChZ5Dsq3APOWqCd74GbZO2lpiipKNHZS2Lx5SFyy1NUN4rJtWToUI9f6S2xae9Z7WQi%2BV3EDclloYp9Yltl1K1Z8XVeMDPx6sxJF3BsiMcdpMe1V3NUjv281OWVl9By63KLVzi6DYg%2BuCSgMSReLx9gHqp7hFFnKbuO0MDvkPcr8VZ4GrW3QZM0CxLMWngc2zk3yaz8kHlAghtW%2FYFkTH0PkeOHSgy3PhGqHVpNBW2BayAZFlLXMXR7cQJMQbz8dGy6Rf6BoN0afXXeUntIG0f8Tats%2FP4LAi37HONcTAg7XJauqFS1jn1f2GxXdgn9y2agX4nz762xRJdNnwzb9KV2OUVEgVlcMJ3h0v0MnXT%2BcHREKn9lM%2BZNLAtq%2Ff5N2vXrMS97J%2FzZD55MyFAc5Dm6BEKpTC3J4x9RYFuXZWGOOPTkXLCniU2KMdvNd%2Fi7RJph5hGVE%2FWdc6ycGCeeOVN%2B78lI3mwe7XUE8oB%2BdJ2rV3v0awoK0sq5f9bA0xf%2FA1ez%2F%2FEP1nRq5z8jDrSpGKxAdHdmh0peaCS88c5%2BPa0PBdihgkCIFVKDB6OfCveP%2B%2F3nz6%2Fzp95lkAY3ks4oBC15HOxB8n9MpBfMhd5yV11i5Fw3NKeoZuxo8hkmGtFnfTWDtzDUxbvDBjqkAYbwAHruNUTzthA28q%2Bw5nrjBfxnZv%2FPtKUYF8fQ55uTc32OT33R5BNh6ymtH9tBKIuRA%2FLHbSQeKtBzD01cI7EtKhpwxrkuWswbdXMAmgJOPphM%2B7HeK1%2BsaWVEy9am%2BUNQW8dbm42SaQyc%2Fnj2FhSD8rgLlYJHyvgF5VAtEs4Iabw43n4ePUY5Iv2QOYD3yodjvG1CfcpDwnH%2Fw8Pl2tWtDsTJ&X-Amz-Signature=64b1fba3d7decb6baa0633fb725b23665964fbdf7cc1831abc6d26c3cd37c27c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW6GFC2F%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuB8uxbOoePvGXoSZCrk%2FKqyCR5YsE7MAumCu56gqPJwIhAPseL7%2B1cj1r9HhVS4kudsLZorl0D9eHOnwbze1pl8U5KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkVtZQBC0AKChZ5Dsq3APOWqCd74GbZO2lpiipKNHZS2Lx5SFyy1NUN4rJtWToUI9f6S2xae9Z7WQi%2BV3EDclloYp9Yltl1K1Z8XVeMDPx6sxJF3BsiMcdpMe1V3NUjv281OWVl9By63KLVzi6DYg%2BuCSgMSReLx9gHqp7hFFnKbuO0MDvkPcr8VZ4GrW3QZM0CxLMWngc2zk3yaz8kHlAghtW%2FYFkTH0PkeOHSgy3PhGqHVpNBW2BayAZFlLXMXR7cQJMQbz8dGy6Rf6BoN0afXXeUntIG0f8Tats%2FP4LAi37HONcTAg7XJauqFS1jn1f2GxXdgn9y2agX4nz762xRJdNnwzb9KV2OUVEgVlcMJ3h0v0MnXT%2BcHREKn9lM%2BZNLAtq%2Ff5N2vXrMS97J%2FzZD55MyFAc5Dm6BEKpTC3J4x9RYFuXZWGOOPTkXLCniU2KMdvNd%2Fi7RJph5hGVE%2FWdc6ycGCeeOVN%2B78lI3mwe7XUE8oB%2BdJ2rV3v0awoK0sq5f9bA0xf%2FA1ez%2F%2FEP1nRq5z8jDrSpGKxAdHdmh0peaCS88c5%2BPa0PBdihgkCIFVKDB6OfCveP%2B%2F3nz6%2Fzp95lkAY3ks4oBC15HOxB8n9MpBfMhd5yV11i5Fw3NKeoZuxo8hkmGtFnfTWDtzDUxbvDBjqkAYbwAHruNUTzthA28q%2Bw5nrjBfxnZv%2FPtKUYF8fQ55uTc32OT33R5BNh6ymtH9tBKIuRA%2FLHbSQeKtBzD01cI7EtKhpwxrkuWswbdXMAmgJOPphM%2B7HeK1%2BsaWVEy9am%2BUNQW8dbm42SaQyc%2Fnj2FhSD8rgLlYJHyvgF5VAtEs4Iabw43n4ePUY5Iv2QOYD3yodjvG1CfcpDwnH%2Fw8Pl2tWtDsTJ&X-Amz-Signature=e6c2aacfaa35e8c3585bbc111094c09cf3f8d7b833445bb74116f964b6017725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW6GFC2F%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuB8uxbOoePvGXoSZCrk%2FKqyCR5YsE7MAumCu56gqPJwIhAPseL7%2B1cj1r9HhVS4kudsLZorl0D9eHOnwbze1pl8U5KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkVtZQBC0AKChZ5Dsq3APOWqCd74GbZO2lpiipKNHZS2Lx5SFyy1NUN4rJtWToUI9f6S2xae9Z7WQi%2BV3EDclloYp9Yltl1K1Z8XVeMDPx6sxJF3BsiMcdpMe1V3NUjv281OWVl9By63KLVzi6DYg%2BuCSgMSReLx9gHqp7hFFnKbuO0MDvkPcr8VZ4GrW3QZM0CxLMWngc2zk3yaz8kHlAghtW%2FYFkTH0PkeOHSgy3PhGqHVpNBW2BayAZFlLXMXR7cQJMQbz8dGy6Rf6BoN0afXXeUntIG0f8Tats%2FP4LAi37HONcTAg7XJauqFS1jn1f2GxXdgn9y2agX4nz762xRJdNnwzb9KV2OUVEgVlcMJ3h0v0MnXT%2BcHREKn9lM%2BZNLAtq%2Ff5N2vXrMS97J%2FzZD55MyFAc5Dm6BEKpTC3J4x9RYFuXZWGOOPTkXLCniU2KMdvNd%2Fi7RJph5hGVE%2FWdc6ycGCeeOVN%2B78lI3mwe7XUE8oB%2BdJ2rV3v0awoK0sq5f9bA0xf%2FA1ez%2F%2FEP1nRq5z8jDrSpGKxAdHdmh0peaCS88c5%2BPa0PBdihgkCIFVKDB6OfCveP%2B%2F3nz6%2Fzp95lkAY3ks4oBC15HOxB8n9MpBfMhd5yV11i5Fw3NKeoZuxo8hkmGtFnfTWDtzDUxbvDBjqkAYbwAHruNUTzthA28q%2Bw5nrjBfxnZv%2FPtKUYF8fQ55uTc32OT33R5BNh6ymtH9tBKIuRA%2FLHbSQeKtBzD01cI7EtKhpwxrkuWswbdXMAmgJOPphM%2B7HeK1%2BsaWVEy9am%2BUNQW8dbm42SaQyc%2Fnj2FhSD8rgLlYJHyvgF5VAtEs4Iabw43n4ePUY5Iv2QOYD3yodjvG1CfcpDwnH%2Fw8Pl2tWtDsTJ&X-Amz-Signature=1098fda8013caa0108eaa36317f1ef5627145902dca4e93cad41f777c967db73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW6GFC2F%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuB8uxbOoePvGXoSZCrk%2FKqyCR5YsE7MAumCu56gqPJwIhAPseL7%2B1cj1r9HhVS4kudsLZorl0D9eHOnwbze1pl8U5KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkVtZQBC0AKChZ5Dsq3APOWqCd74GbZO2lpiipKNHZS2Lx5SFyy1NUN4rJtWToUI9f6S2xae9Z7WQi%2BV3EDclloYp9Yltl1K1Z8XVeMDPx6sxJF3BsiMcdpMe1V3NUjv281OWVl9By63KLVzi6DYg%2BuCSgMSReLx9gHqp7hFFnKbuO0MDvkPcr8VZ4GrW3QZM0CxLMWngc2zk3yaz8kHlAghtW%2FYFkTH0PkeOHSgy3PhGqHVpNBW2BayAZFlLXMXR7cQJMQbz8dGy6Rf6BoN0afXXeUntIG0f8Tats%2FP4LAi37HONcTAg7XJauqFS1jn1f2GxXdgn9y2agX4nz762xRJdNnwzb9KV2OUVEgVlcMJ3h0v0MnXT%2BcHREKn9lM%2BZNLAtq%2Ff5N2vXrMS97J%2FzZD55MyFAc5Dm6BEKpTC3J4x9RYFuXZWGOOPTkXLCniU2KMdvNd%2Fi7RJph5hGVE%2FWdc6ycGCeeOVN%2B78lI3mwe7XUE8oB%2BdJ2rV3v0awoK0sq5f9bA0xf%2FA1ez%2F%2FEP1nRq5z8jDrSpGKxAdHdmh0peaCS88c5%2BPa0PBdihgkCIFVKDB6OfCveP%2B%2F3nz6%2Fzp95lkAY3ks4oBC15HOxB8n9MpBfMhd5yV11i5Fw3NKeoZuxo8hkmGtFnfTWDtzDUxbvDBjqkAYbwAHruNUTzthA28q%2Bw5nrjBfxnZv%2FPtKUYF8fQ55uTc32OT33R5BNh6ymtH9tBKIuRA%2FLHbSQeKtBzD01cI7EtKhpwxrkuWswbdXMAmgJOPphM%2B7HeK1%2BsaWVEy9am%2BUNQW8dbm42SaQyc%2Fnj2FhSD8rgLlYJHyvgF5VAtEs4Iabw43n4ePUY5Iv2QOYD3yodjvG1CfcpDwnH%2Fw8Pl2tWtDsTJ&X-Amz-Signature=2ee82e06023ba6efbcae5de5b11d0856783a794d3ede4bed3305bc0d2c327026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW6GFC2F%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuB8uxbOoePvGXoSZCrk%2FKqyCR5YsE7MAumCu56gqPJwIhAPseL7%2B1cj1r9HhVS4kudsLZorl0D9eHOnwbze1pl8U5KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkVtZQBC0AKChZ5Dsq3APOWqCd74GbZO2lpiipKNHZS2Lx5SFyy1NUN4rJtWToUI9f6S2xae9Z7WQi%2BV3EDclloYp9Yltl1K1Z8XVeMDPx6sxJF3BsiMcdpMe1V3NUjv281OWVl9By63KLVzi6DYg%2BuCSgMSReLx9gHqp7hFFnKbuO0MDvkPcr8VZ4GrW3QZM0CxLMWngc2zk3yaz8kHlAghtW%2FYFkTH0PkeOHSgy3PhGqHVpNBW2BayAZFlLXMXR7cQJMQbz8dGy6Rf6BoN0afXXeUntIG0f8Tats%2FP4LAi37HONcTAg7XJauqFS1jn1f2GxXdgn9y2agX4nz762xRJdNnwzb9KV2OUVEgVlcMJ3h0v0MnXT%2BcHREKn9lM%2BZNLAtq%2Ff5N2vXrMS97J%2FzZD55MyFAc5Dm6BEKpTC3J4x9RYFuXZWGOOPTkXLCniU2KMdvNd%2Fi7RJph5hGVE%2FWdc6ycGCeeOVN%2B78lI3mwe7XUE8oB%2BdJ2rV3v0awoK0sq5f9bA0xf%2FA1ez%2F%2FEP1nRq5z8jDrSpGKxAdHdmh0peaCS88c5%2BPa0PBdihgkCIFVKDB6OfCveP%2B%2F3nz6%2Fzp95lkAY3ks4oBC15HOxB8n9MpBfMhd5yV11i5Fw3NKeoZuxo8hkmGtFnfTWDtzDUxbvDBjqkAYbwAHruNUTzthA28q%2Bw5nrjBfxnZv%2FPtKUYF8fQ55uTc32OT33R5BNh6ymtH9tBKIuRA%2FLHbSQeKtBzD01cI7EtKhpwxrkuWswbdXMAmgJOPphM%2B7HeK1%2BsaWVEy9am%2BUNQW8dbm42SaQyc%2Fnj2FhSD8rgLlYJHyvgF5VAtEs4Iabw43n4ePUY5Iv2QOYD3yodjvG1CfcpDwnH%2Fw8Pl2tWtDsTJ&X-Amz-Signature=67bf1b58c11a3d0f03f6241b5a271e6d0addee37e091deb62021ad2a2019743a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW6GFC2F%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuB8uxbOoePvGXoSZCrk%2FKqyCR5YsE7MAumCu56gqPJwIhAPseL7%2B1cj1r9HhVS4kudsLZorl0D9eHOnwbze1pl8U5KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkVtZQBC0AKChZ5Dsq3APOWqCd74GbZO2lpiipKNHZS2Lx5SFyy1NUN4rJtWToUI9f6S2xae9Z7WQi%2BV3EDclloYp9Yltl1K1Z8XVeMDPx6sxJF3BsiMcdpMe1V3NUjv281OWVl9By63KLVzi6DYg%2BuCSgMSReLx9gHqp7hFFnKbuO0MDvkPcr8VZ4GrW3QZM0CxLMWngc2zk3yaz8kHlAghtW%2FYFkTH0PkeOHSgy3PhGqHVpNBW2BayAZFlLXMXR7cQJMQbz8dGy6Rf6BoN0afXXeUntIG0f8Tats%2FP4LAi37HONcTAg7XJauqFS1jn1f2GxXdgn9y2agX4nz762xRJdNnwzb9KV2OUVEgVlcMJ3h0v0MnXT%2BcHREKn9lM%2BZNLAtq%2Ff5N2vXrMS97J%2FzZD55MyFAc5Dm6BEKpTC3J4x9RYFuXZWGOOPTkXLCniU2KMdvNd%2Fi7RJph5hGVE%2FWdc6ycGCeeOVN%2B78lI3mwe7XUE8oB%2BdJ2rV3v0awoK0sq5f9bA0xf%2FA1ez%2F%2FEP1nRq5z8jDrSpGKxAdHdmh0peaCS88c5%2BPa0PBdihgkCIFVKDB6OfCveP%2B%2F3nz6%2Fzp95lkAY3ks4oBC15HOxB8n9MpBfMhd5yV11i5Fw3NKeoZuxo8hkmGtFnfTWDtzDUxbvDBjqkAYbwAHruNUTzthA28q%2Bw5nrjBfxnZv%2FPtKUYF8fQ55uTc32OT33R5BNh6ymtH9tBKIuRA%2FLHbSQeKtBzD01cI7EtKhpwxrkuWswbdXMAmgJOPphM%2B7HeK1%2BsaWVEy9am%2BUNQW8dbm42SaQyc%2Fnj2FhSD8rgLlYJHyvgF5VAtEs4Iabw43n4ePUY5Iv2QOYD3yodjvG1CfcpDwnH%2Fw8Pl2tWtDsTJ&X-Amz-Signature=f5bb436a2d2596fb9658da995a05152fea86f07b3bb6cc1b327b87caefa95a27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
