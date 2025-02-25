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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRUXWCLK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDqM%2B6FmkHKCHQicpPK95uoH96liMUuOr4OtGlPJlKm2AIhAKuW9WUr5XczhfAgkASHqRIK8pu3KFDUe5GJQ%2FqXlECnKv8DCE8QABoMNjM3NDIzMTgzODA1IgxY5ZFTMIyiWioDXpQq3AOkng%2BabNtz1nvin7hum%2BRbyKo4%2FFgXZwbjKYEZQFAf4JKOR6HfxRo7DGb04uJ0LGJz6ASBcK437H20f6ev6bX%2F75qA57lJYNFAbXf7uxvOrWqPUYKMLbLrplapDIg1u0D5NdzZaeGX7Nw4C4wvipN6%2FQWurH%2F45XdoksCUEmKn2vy6sC3ki72963Vkr1SonxqbT4kf6INJPge2HEn%2Blaf9TB81gOCLVRR%2BCq0qLdcydMDKmJT3gZkcKIT7XXyDfNuFHbM%2BsIxK1EzTKu4JSfKSDPOkWMf%2Bg%2Fkel6TLrHejNA0yOVpj6yLns9mXsM13oD7UMfplilaP7xKTXtOy6PuEn4tJbcRsniFmTQ8aDYI%2FsAKHr9qfWTkqdqLoDf%2FT0TEWKFwlxRHVsBKgpyPoKk1yi4kOEGAMB7r1K5AlPN80rtsOiqY%2FuxWTlW6%2Fek0UifQlmJd1CZfhBJfkYIjo98LqSnKAbqpQxWOS2MrLsal4S4ii%2Fb9vWzm342SYKNzCi0n6ma3d1YMNxsITpogmax7AjRLDu10WQUFt7VyQ2AJBdDjurq88PIeej4P5e%2BRQoCqP353cjB28g2CQ83e%2BqK%2BIpCPVyEeIIYfV9aWDhkJBZ4NxyIY1ydlSb5xXmTDagvm9BjqkAWFmtQB1JUbaYU0Onf12lwSlL0kOnt3aLqng5lFsrwoQSdQReITwOT3FPmq%2B3YXLCj6XmPKri9JksAM%2BF90OIokKcQ0AKirYZeRGu30aUpOYUtLsFHf55RycQSzPHkWGuRGJQ7xo6IlKejIdo0%2BPYJxQ2rVR9tIv4unpdCRLTymL8I%2FKKNMTBsw64OepzbmJCP6mFghBrjMSQFrO%2Br0gjmaD6qCo&X-Amz-Signature=6baa90525d046050d07e85b868e240c3acc3f43cc387d6c6f8ba57a9af0c79a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRUXWCLK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDqM%2B6FmkHKCHQicpPK95uoH96liMUuOr4OtGlPJlKm2AIhAKuW9WUr5XczhfAgkASHqRIK8pu3KFDUe5GJQ%2FqXlECnKv8DCE8QABoMNjM3NDIzMTgzODA1IgxY5ZFTMIyiWioDXpQq3AOkng%2BabNtz1nvin7hum%2BRbyKo4%2FFgXZwbjKYEZQFAf4JKOR6HfxRo7DGb04uJ0LGJz6ASBcK437H20f6ev6bX%2F75qA57lJYNFAbXf7uxvOrWqPUYKMLbLrplapDIg1u0D5NdzZaeGX7Nw4C4wvipN6%2FQWurH%2F45XdoksCUEmKn2vy6sC3ki72963Vkr1SonxqbT4kf6INJPge2HEn%2Blaf9TB81gOCLVRR%2BCq0qLdcydMDKmJT3gZkcKIT7XXyDfNuFHbM%2BsIxK1EzTKu4JSfKSDPOkWMf%2Bg%2Fkel6TLrHejNA0yOVpj6yLns9mXsM13oD7UMfplilaP7xKTXtOy6PuEn4tJbcRsniFmTQ8aDYI%2FsAKHr9qfWTkqdqLoDf%2FT0TEWKFwlxRHVsBKgpyPoKk1yi4kOEGAMB7r1K5AlPN80rtsOiqY%2FuxWTlW6%2Fek0UifQlmJd1CZfhBJfkYIjo98LqSnKAbqpQxWOS2MrLsal4S4ii%2Fb9vWzm342SYKNzCi0n6ma3d1YMNxsITpogmax7AjRLDu10WQUFt7VyQ2AJBdDjurq88PIeej4P5e%2BRQoCqP353cjB28g2CQ83e%2BqK%2BIpCPVyEeIIYfV9aWDhkJBZ4NxyIY1ydlSb5xXmTDagvm9BjqkAWFmtQB1JUbaYU0Onf12lwSlL0kOnt3aLqng5lFsrwoQSdQReITwOT3FPmq%2B3YXLCj6XmPKri9JksAM%2BF90OIokKcQ0AKirYZeRGu30aUpOYUtLsFHf55RycQSzPHkWGuRGJQ7xo6IlKejIdo0%2BPYJxQ2rVR9tIv4unpdCRLTymL8I%2FKKNMTBsw64OepzbmJCP6mFghBrjMSQFrO%2Br0gjmaD6qCo&X-Amz-Signature=d6ad898e54575b6b81d850600617256a58f33e406866154593170d9356086681&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRUXWCLK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDqM%2B6FmkHKCHQicpPK95uoH96liMUuOr4OtGlPJlKm2AIhAKuW9WUr5XczhfAgkASHqRIK8pu3KFDUe5GJQ%2FqXlECnKv8DCE8QABoMNjM3NDIzMTgzODA1IgxY5ZFTMIyiWioDXpQq3AOkng%2BabNtz1nvin7hum%2BRbyKo4%2FFgXZwbjKYEZQFAf4JKOR6HfxRo7DGb04uJ0LGJz6ASBcK437H20f6ev6bX%2F75qA57lJYNFAbXf7uxvOrWqPUYKMLbLrplapDIg1u0D5NdzZaeGX7Nw4C4wvipN6%2FQWurH%2F45XdoksCUEmKn2vy6sC3ki72963Vkr1SonxqbT4kf6INJPge2HEn%2Blaf9TB81gOCLVRR%2BCq0qLdcydMDKmJT3gZkcKIT7XXyDfNuFHbM%2BsIxK1EzTKu4JSfKSDPOkWMf%2Bg%2Fkel6TLrHejNA0yOVpj6yLns9mXsM13oD7UMfplilaP7xKTXtOy6PuEn4tJbcRsniFmTQ8aDYI%2FsAKHr9qfWTkqdqLoDf%2FT0TEWKFwlxRHVsBKgpyPoKk1yi4kOEGAMB7r1K5AlPN80rtsOiqY%2FuxWTlW6%2Fek0UifQlmJd1CZfhBJfkYIjo98LqSnKAbqpQxWOS2MrLsal4S4ii%2Fb9vWzm342SYKNzCi0n6ma3d1YMNxsITpogmax7AjRLDu10WQUFt7VyQ2AJBdDjurq88PIeej4P5e%2BRQoCqP353cjB28g2CQ83e%2BqK%2BIpCPVyEeIIYfV9aWDhkJBZ4NxyIY1ydlSb5xXmTDagvm9BjqkAWFmtQB1JUbaYU0Onf12lwSlL0kOnt3aLqng5lFsrwoQSdQReITwOT3FPmq%2B3YXLCj6XmPKri9JksAM%2BF90OIokKcQ0AKirYZeRGu30aUpOYUtLsFHf55RycQSzPHkWGuRGJQ7xo6IlKejIdo0%2BPYJxQ2rVR9tIv4unpdCRLTymL8I%2FKKNMTBsw64OepzbmJCP6mFghBrjMSQFrO%2Br0gjmaD6qCo&X-Amz-Signature=d3d67f54fe5991fa7c282ddb776f1ac600da22881ba5acbcfc36a06c2217e7fa&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRUXWCLK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDqM%2B6FmkHKCHQicpPK95uoH96liMUuOr4OtGlPJlKm2AIhAKuW9WUr5XczhfAgkASHqRIK8pu3KFDUe5GJQ%2FqXlECnKv8DCE8QABoMNjM3NDIzMTgzODA1IgxY5ZFTMIyiWioDXpQq3AOkng%2BabNtz1nvin7hum%2BRbyKo4%2FFgXZwbjKYEZQFAf4JKOR6HfxRo7DGb04uJ0LGJz6ASBcK437H20f6ev6bX%2F75qA57lJYNFAbXf7uxvOrWqPUYKMLbLrplapDIg1u0D5NdzZaeGX7Nw4C4wvipN6%2FQWurH%2F45XdoksCUEmKn2vy6sC3ki72963Vkr1SonxqbT4kf6INJPge2HEn%2Blaf9TB81gOCLVRR%2BCq0qLdcydMDKmJT3gZkcKIT7XXyDfNuFHbM%2BsIxK1EzTKu4JSfKSDPOkWMf%2Bg%2Fkel6TLrHejNA0yOVpj6yLns9mXsM13oD7UMfplilaP7xKTXtOy6PuEn4tJbcRsniFmTQ8aDYI%2FsAKHr9qfWTkqdqLoDf%2FT0TEWKFwlxRHVsBKgpyPoKk1yi4kOEGAMB7r1K5AlPN80rtsOiqY%2FuxWTlW6%2Fek0UifQlmJd1CZfhBJfkYIjo98LqSnKAbqpQxWOS2MrLsal4S4ii%2Fb9vWzm342SYKNzCi0n6ma3d1YMNxsITpogmax7AjRLDu10WQUFt7VyQ2AJBdDjurq88PIeej4P5e%2BRQoCqP353cjB28g2CQ83e%2BqK%2BIpCPVyEeIIYfV9aWDhkJBZ4NxyIY1ydlSb5xXmTDagvm9BjqkAWFmtQB1JUbaYU0Onf12lwSlL0kOnt3aLqng5lFsrwoQSdQReITwOT3FPmq%2B3YXLCj6XmPKri9JksAM%2BF90OIokKcQ0AKirYZeRGu30aUpOYUtLsFHf55RycQSzPHkWGuRGJQ7xo6IlKejIdo0%2BPYJxQ2rVR9tIv4unpdCRLTymL8I%2FKKNMTBsw64OepzbmJCP6mFghBrjMSQFrO%2Br0gjmaD6qCo&X-Amz-Signature=10540e4a95f9037b8904ae6211b0018f6dc266ff3c447b6c90f74397ce56e68e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRUXWCLK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDqM%2B6FmkHKCHQicpPK95uoH96liMUuOr4OtGlPJlKm2AIhAKuW9WUr5XczhfAgkASHqRIK8pu3KFDUe5GJQ%2FqXlECnKv8DCE8QABoMNjM3NDIzMTgzODA1IgxY5ZFTMIyiWioDXpQq3AOkng%2BabNtz1nvin7hum%2BRbyKo4%2FFgXZwbjKYEZQFAf4JKOR6HfxRo7DGb04uJ0LGJz6ASBcK437H20f6ev6bX%2F75qA57lJYNFAbXf7uxvOrWqPUYKMLbLrplapDIg1u0D5NdzZaeGX7Nw4C4wvipN6%2FQWurH%2F45XdoksCUEmKn2vy6sC3ki72963Vkr1SonxqbT4kf6INJPge2HEn%2Blaf9TB81gOCLVRR%2BCq0qLdcydMDKmJT3gZkcKIT7XXyDfNuFHbM%2BsIxK1EzTKu4JSfKSDPOkWMf%2Bg%2Fkel6TLrHejNA0yOVpj6yLns9mXsM13oD7UMfplilaP7xKTXtOy6PuEn4tJbcRsniFmTQ8aDYI%2FsAKHr9qfWTkqdqLoDf%2FT0TEWKFwlxRHVsBKgpyPoKk1yi4kOEGAMB7r1K5AlPN80rtsOiqY%2FuxWTlW6%2Fek0UifQlmJd1CZfhBJfkYIjo98LqSnKAbqpQxWOS2MrLsal4S4ii%2Fb9vWzm342SYKNzCi0n6ma3d1YMNxsITpogmax7AjRLDu10WQUFt7VyQ2AJBdDjurq88PIeej4P5e%2BRQoCqP353cjB28g2CQ83e%2BqK%2BIpCPVyEeIIYfV9aWDhkJBZ4NxyIY1ydlSb5xXmTDagvm9BjqkAWFmtQB1JUbaYU0Onf12lwSlL0kOnt3aLqng5lFsrwoQSdQReITwOT3FPmq%2B3YXLCj6XmPKri9JksAM%2BF90OIokKcQ0AKirYZeRGu30aUpOYUtLsFHf55RycQSzPHkWGuRGJQ7xo6IlKejIdo0%2BPYJxQ2rVR9tIv4unpdCRLTymL8I%2FKKNMTBsw64OepzbmJCP6mFghBrjMSQFrO%2Br0gjmaD6qCo&X-Amz-Signature=448122d93a5754782071c31eb309f903bc02bb2d555e4893b5be9860f0c13a92&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRUXWCLK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDqM%2B6FmkHKCHQicpPK95uoH96liMUuOr4OtGlPJlKm2AIhAKuW9WUr5XczhfAgkASHqRIK8pu3KFDUe5GJQ%2FqXlECnKv8DCE8QABoMNjM3NDIzMTgzODA1IgxY5ZFTMIyiWioDXpQq3AOkng%2BabNtz1nvin7hum%2BRbyKo4%2FFgXZwbjKYEZQFAf4JKOR6HfxRo7DGb04uJ0LGJz6ASBcK437H20f6ev6bX%2F75qA57lJYNFAbXf7uxvOrWqPUYKMLbLrplapDIg1u0D5NdzZaeGX7Nw4C4wvipN6%2FQWurH%2F45XdoksCUEmKn2vy6sC3ki72963Vkr1SonxqbT4kf6INJPge2HEn%2Blaf9TB81gOCLVRR%2BCq0qLdcydMDKmJT3gZkcKIT7XXyDfNuFHbM%2BsIxK1EzTKu4JSfKSDPOkWMf%2Bg%2Fkel6TLrHejNA0yOVpj6yLns9mXsM13oD7UMfplilaP7xKTXtOy6PuEn4tJbcRsniFmTQ8aDYI%2FsAKHr9qfWTkqdqLoDf%2FT0TEWKFwlxRHVsBKgpyPoKk1yi4kOEGAMB7r1K5AlPN80rtsOiqY%2FuxWTlW6%2Fek0UifQlmJd1CZfhBJfkYIjo98LqSnKAbqpQxWOS2MrLsal4S4ii%2Fb9vWzm342SYKNzCi0n6ma3d1YMNxsITpogmax7AjRLDu10WQUFt7VyQ2AJBdDjurq88PIeej4P5e%2BRQoCqP353cjB28g2CQ83e%2BqK%2BIpCPVyEeIIYfV9aWDhkJBZ4NxyIY1ydlSb5xXmTDagvm9BjqkAWFmtQB1JUbaYU0Onf12lwSlL0kOnt3aLqng5lFsrwoQSdQReITwOT3FPmq%2B3YXLCj6XmPKri9JksAM%2BF90OIokKcQ0AKirYZeRGu30aUpOYUtLsFHf55RycQSzPHkWGuRGJQ7xo6IlKejIdo0%2BPYJxQ2rVR9tIv4unpdCRLTymL8I%2FKKNMTBsw64OepzbmJCP6mFghBrjMSQFrO%2Br0gjmaD6qCo&X-Amz-Signature=7a083a5231202941974a2830974e0996a527283af7058037b500642ab07fccdd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRUXWCLK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDqM%2B6FmkHKCHQicpPK95uoH96liMUuOr4OtGlPJlKm2AIhAKuW9WUr5XczhfAgkASHqRIK8pu3KFDUe5GJQ%2FqXlECnKv8DCE8QABoMNjM3NDIzMTgzODA1IgxY5ZFTMIyiWioDXpQq3AOkng%2BabNtz1nvin7hum%2BRbyKo4%2FFgXZwbjKYEZQFAf4JKOR6HfxRo7DGb04uJ0LGJz6ASBcK437H20f6ev6bX%2F75qA57lJYNFAbXf7uxvOrWqPUYKMLbLrplapDIg1u0D5NdzZaeGX7Nw4C4wvipN6%2FQWurH%2F45XdoksCUEmKn2vy6sC3ki72963Vkr1SonxqbT4kf6INJPge2HEn%2Blaf9TB81gOCLVRR%2BCq0qLdcydMDKmJT3gZkcKIT7XXyDfNuFHbM%2BsIxK1EzTKu4JSfKSDPOkWMf%2Bg%2Fkel6TLrHejNA0yOVpj6yLns9mXsM13oD7UMfplilaP7xKTXtOy6PuEn4tJbcRsniFmTQ8aDYI%2FsAKHr9qfWTkqdqLoDf%2FT0TEWKFwlxRHVsBKgpyPoKk1yi4kOEGAMB7r1K5AlPN80rtsOiqY%2FuxWTlW6%2Fek0UifQlmJd1CZfhBJfkYIjo98LqSnKAbqpQxWOS2MrLsal4S4ii%2Fb9vWzm342SYKNzCi0n6ma3d1YMNxsITpogmax7AjRLDu10WQUFt7VyQ2AJBdDjurq88PIeej4P5e%2BRQoCqP353cjB28g2CQ83e%2BqK%2BIpCPVyEeIIYfV9aWDhkJBZ4NxyIY1ydlSb5xXmTDagvm9BjqkAWFmtQB1JUbaYU0Onf12lwSlL0kOnt3aLqng5lFsrwoQSdQReITwOT3FPmq%2B3YXLCj6XmPKri9JksAM%2BF90OIokKcQ0AKirYZeRGu30aUpOYUtLsFHf55RycQSzPHkWGuRGJQ7xo6IlKejIdo0%2BPYJxQ2rVR9tIv4unpdCRLTymL8I%2FKKNMTBsw64OepzbmJCP6mFghBrjMSQFrO%2Br0gjmaD6qCo&X-Amz-Signature=c59804f39c3ad9a309059984d2defc45fddd63495aa7d76090b99d9ba8d31686&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRUXWCLK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDqM%2B6FmkHKCHQicpPK95uoH96liMUuOr4OtGlPJlKm2AIhAKuW9WUr5XczhfAgkASHqRIK8pu3KFDUe5GJQ%2FqXlECnKv8DCE8QABoMNjM3NDIzMTgzODA1IgxY5ZFTMIyiWioDXpQq3AOkng%2BabNtz1nvin7hum%2BRbyKo4%2FFgXZwbjKYEZQFAf4JKOR6HfxRo7DGb04uJ0LGJz6ASBcK437H20f6ev6bX%2F75qA57lJYNFAbXf7uxvOrWqPUYKMLbLrplapDIg1u0D5NdzZaeGX7Nw4C4wvipN6%2FQWurH%2F45XdoksCUEmKn2vy6sC3ki72963Vkr1SonxqbT4kf6INJPge2HEn%2Blaf9TB81gOCLVRR%2BCq0qLdcydMDKmJT3gZkcKIT7XXyDfNuFHbM%2BsIxK1EzTKu4JSfKSDPOkWMf%2Bg%2Fkel6TLrHejNA0yOVpj6yLns9mXsM13oD7UMfplilaP7xKTXtOy6PuEn4tJbcRsniFmTQ8aDYI%2FsAKHr9qfWTkqdqLoDf%2FT0TEWKFwlxRHVsBKgpyPoKk1yi4kOEGAMB7r1K5AlPN80rtsOiqY%2FuxWTlW6%2Fek0UifQlmJd1CZfhBJfkYIjo98LqSnKAbqpQxWOS2MrLsal4S4ii%2Fb9vWzm342SYKNzCi0n6ma3d1YMNxsITpogmax7AjRLDu10WQUFt7VyQ2AJBdDjurq88PIeej4P5e%2BRQoCqP353cjB28g2CQ83e%2BqK%2BIpCPVyEeIIYfV9aWDhkJBZ4NxyIY1ydlSb5xXmTDagvm9BjqkAWFmtQB1JUbaYU0Onf12lwSlL0kOnt3aLqng5lFsrwoQSdQReITwOT3FPmq%2B3YXLCj6XmPKri9JksAM%2BF90OIokKcQ0AKirYZeRGu30aUpOYUtLsFHf55RycQSzPHkWGuRGJQ7xo6IlKejIdo0%2BPYJxQ2rVR9tIv4unpdCRLTymL8I%2FKKNMTBsw64OepzbmJCP6mFghBrjMSQFrO%2Br0gjmaD6qCo&X-Amz-Signature=8e745b1513a01a82c3d0ce0e21705271d9c3f9f2104a5d3d72765c622c889776&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
