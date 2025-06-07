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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPTBBFJ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T131819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYLNrnTeJHUBZmmEEUMOWrUOx%2BW5hbLpT%2BXK8rh1IbsAIhAMQ06Y%2BmlQRqz90qJVSSiG2ZB%2BwQ%2FQWpkCnak9SCEJJvKv8DCHUQABoMNjM3NDIzMTgzODA1IgygSCWA2bpenadLDvcq3API1YOJDaIkcooiPaQ%2Bkjm6O5oXgKklAQR%2BH3MmdVgOHx2pnvPNIZ8apvaFi7TcXTkHlotAsegzPNn0s8cpIEYSonovFXhwgoQ%2Bt%2FTw%2FAON2irz4VHfYC3w1IsaWsjfQW0yBD38cbqtB76W53K9V55eQ51ew6OcxMzb8Wd8m%2FGQYU4uYPWVRgECJPZd4Sb%2BMTpjzx368W0EDYn59vQybpVweUAQWmg6HQ699Qblacdimneo8xiWuJyeoHH9DGIo2SBB1LR6nqUqxR5cIRDnAXF%2BcstVHf59yq%2Ba8ooENsTd1Mo%2FxG%2FcoVZRTIR9fm%2FdVYgHg%2BICpriOSSXoSRdUqHgWdsI5LeVIVbQ1uQ8TJqIC1gOIX06dNw3F30jFuEtfXJ2w1VjOplHskZQVbp29cpuVaiWuvsQ9IhPnBl2m8KpxM2R%2Bg9PZEzjLJMBlZd%2BzEI2PsnZlx5zeZoxAUcme7sKzeHopah3ByquQBcUw4f9gZAb47Jc5FTU5IBS3%2BkmE6dt%2BTNIimULgDitTff9vs8b6DngEdAX6nmTDxE6bWjb9sZYxOxHwuoaIJhZtDos%2BbI5ZRpsmQvM6nobnW9QF1yHSerxdNkT6w7eaDRXlZELn0B0RKe%2F29AgV8VzczzDyw5DCBjqkAYRQXx5PozbJLHteVrneInwnPmqY4Hr%2FwjGINQck9K8etpoAsGO%2BI2iUPeJ%2FslktlB2Jnw2qvROiy7N8sg3hAdT57t4%2BSNS7NwuRv%2BsGTHUc0yv3N46ajx6Pnn9dPG047b1zjvJB3C3VqEjeIYxi3KUySPSaN5Z%2BlM9M7YNJKJtX2kEWFsxY6HYVEkY%2FEa2bcGKYrApMtw%2FG57rnCWxYSSlq%2FHx8&X-Amz-Signature=d02bd1c2a64629cd562d5b8bd0e50eb046ecd151ee9dbdba7a1845d94788cc91&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPTBBFJ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T131819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYLNrnTeJHUBZmmEEUMOWrUOx%2BW5hbLpT%2BXK8rh1IbsAIhAMQ06Y%2BmlQRqz90qJVSSiG2ZB%2BwQ%2FQWpkCnak9SCEJJvKv8DCHUQABoMNjM3NDIzMTgzODA1IgygSCWA2bpenadLDvcq3API1YOJDaIkcooiPaQ%2Bkjm6O5oXgKklAQR%2BH3MmdVgOHx2pnvPNIZ8apvaFi7TcXTkHlotAsegzPNn0s8cpIEYSonovFXhwgoQ%2Bt%2FTw%2FAON2irz4VHfYC3w1IsaWsjfQW0yBD38cbqtB76W53K9V55eQ51ew6OcxMzb8Wd8m%2FGQYU4uYPWVRgECJPZd4Sb%2BMTpjzx368W0EDYn59vQybpVweUAQWmg6HQ699Qblacdimneo8xiWuJyeoHH9DGIo2SBB1LR6nqUqxR5cIRDnAXF%2BcstVHf59yq%2Ba8ooENsTd1Mo%2FxG%2FcoVZRTIR9fm%2FdVYgHg%2BICpriOSSXoSRdUqHgWdsI5LeVIVbQ1uQ8TJqIC1gOIX06dNw3F30jFuEtfXJ2w1VjOplHskZQVbp29cpuVaiWuvsQ9IhPnBl2m8KpxM2R%2Bg9PZEzjLJMBlZd%2BzEI2PsnZlx5zeZoxAUcme7sKzeHopah3ByquQBcUw4f9gZAb47Jc5FTU5IBS3%2BkmE6dt%2BTNIimULgDitTff9vs8b6DngEdAX6nmTDxE6bWjb9sZYxOxHwuoaIJhZtDos%2BbI5ZRpsmQvM6nobnW9QF1yHSerxdNkT6w7eaDRXlZELn0B0RKe%2F29AgV8VzczzDyw5DCBjqkAYRQXx5PozbJLHteVrneInwnPmqY4Hr%2FwjGINQck9K8etpoAsGO%2BI2iUPeJ%2FslktlB2Jnw2qvROiy7N8sg3hAdT57t4%2BSNS7NwuRv%2BsGTHUc0yv3N46ajx6Pnn9dPG047b1zjvJB3C3VqEjeIYxi3KUySPSaN5Z%2BlM9M7YNJKJtX2kEWFsxY6HYVEkY%2FEa2bcGKYrApMtw%2FG57rnCWxYSSlq%2FHx8&X-Amz-Signature=f059e670eff90f0f88f28e357efcbb00ca0a5de5bdeedf554e57f29ec806fd90&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPTBBFJ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T131819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYLNrnTeJHUBZmmEEUMOWrUOx%2BW5hbLpT%2BXK8rh1IbsAIhAMQ06Y%2BmlQRqz90qJVSSiG2ZB%2BwQ%2FQWpkCnak9SCEJJvKv8DCHUQABoMNjM3NDIzMTgzODA1IgygSCWA2bpenadLDvcq3API1YOJDaIkcooiPaQ%2Bkjm6O5oXgKklAQR%2BH3MmdVgOHx2pnvPNIZ8apvaFi7TcXTkHlotAsegzPNn0s8cpIEYSonovFXhwgoQ%2Bt%2FTw%2FAON2irz4VHfYC3w1IsaWsjfQW0yBD38cbqtB76W53K9V55eQ51ew6OcxMzb8Wd8m%2FGQYU4uYPWVRgECJPZd4Sb%2BMTpjzx368W0EDYn59vQybpVweUAQWmg6HQ699Qblacdimneo8xiWuJyeoHH9DGIo2SBB1LR6nqUqxR5cIRDnAXF%2BcstVHf59yq%2Ba8ooENsTd1Mo%2FxG%2FcoVZRTIR9fm%2FdVYgHg%2BICpriOSSXoSRdUqHgWdsI5LeVIVbQ1uQ8TJqIC1gOIX06dNw3F30jFuEtfXJ2w1VjOplHskZQVbp29cpuVaiWuvsQ9IhPnBl2m8KpxM2R%2Bg9PZEzjLJMBlZd%2BzEI2PsnZlx5zeZoxAUcme7sKzeHopah3ByquQBcUw4f9gZAb47Jc5FTU5IBS3%2BkmE6dt%2BTNIimULgDitTff9vs8b6DngEdAX6nmTDxE6bWjb9sZYxOxHwuoaIJhZtDos%2BbI5ZRpsmQvM6nobnW9QF1yHSerxdNkT6w7eaDRXlZELn0B0RKe%2F29AgV8VzczzDyw5DCBjqkAYRQXx5PozbJLHteVrneInwnPmqY4Hr%2FwjGINQck9K8etpoAsGO%2BI2iUPeJ%2FslktlB2Jnw2qvROiy7N8sg3hAdT57t4%2BSNS7NwuRv%2BsGTHUc0yv3N46ajx6Pnn9dPG047b1zjvJB3C3VqEjeIYxi3KUySPSaN5Z%2BlM9M7YNJKJtX2kEWFsxY6HYVEkY%2FEa2bcGKYrApMtw%2FG57rnCWxYSSlq%2FHx8&X-Amz-Signature=a494b182b4063aa39316e9ecc7f31b667447b74db4e8898ceda4188174e857fd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPTBBFJ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T131819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYLNrnTeJHUBZmmEEUMOWrUOx%2BW5hbLpT%2BXK8rh1IbsAIhAMQ06Y%2BmlQRqz90qJVSSiG2ZB%2BwQ%2FQWpkCnak9SCEJJvKv8DCHUQABoMNjM3NDIzMTgzODA1IgygSCWA2bpenadLDvcq3API1YOJDaIkcooiPaQ%2Bkjm6O5oXgKklAQR%2BH3MmdVgOHx2pnvPNIZ8apvaFi7TcXTkHlotAsegzPNn0s8cpIEYSonovFXhwgoQ%2Bt%2FTw%2FAON2irz4VHfYC3w1IsaWsjfQW0yBD38cbqtB76W53K9V55eQ51ew6OcxMzb8Wd8m%2FGQYU4uYPWVRgECJPZd4Sb%2BMTpjzx368W0EDYn59vQybpVweUAQWmg6HQ699Qblacdimneo8xiWuJyeoHH9DGIo2SBB1LR6nqUqxR5cIRDnAXF%2BcstVHf59yq%2Ba8ooENsTd1Mo%2FxG%2FcoVZRTIR9fm%2FdVYgHg%2BICpriOSSXoSRdUqHgWdsI5LeVIVbQ1uQ8TJqIC1gOIX06dNw3F30jFuEtfXJ2w1VjOplHskZQVbp29cpuVaiWuvsQ9IhPnBl2m8KpxM2R%2Bg9PZEzjLJMBlZd%2BzEI2PsnZlx5zeZoxAUcme7sKzeHopah3ByquQBcUw4f9gZAb47Jc5FTU5IBS3%2BkmE6dt%2BTNIimULgDitTff9vs8b6DngEdAX6nmTDxE6bWjb9sZYxOxHwuoaIJhZtDos%2BbI5ZRpsmQvM6nobnW9QF1yHSerxdNkT6w7eaDRXlZELn0B0RKe%2F29AgV8VzczzDyw5DCBjqkAYRQXx5PozbJLHteVrneInwnPmqY4Hr%2FwjGINQck9K8etpoAsGO%2BI2iUPeJ%2FslktlB2Jnw2qvROiy7N8sg3hAdT57t4%2BSNS7NwuRv%2BsGTHUc0yv3N46ajx6Pnn9dPG047b1zjvJB3C3VqEjeIYxi3KUySPSaN5Z%2BlM9M7YNJKJtX2kEWFsxY6HYVEkY%2FEa2bcGKYrApMtw%2FG57rnCWxYSSlq%2FHx8&X-Amz-Signature=3ee886eb871e255700831adc2b5883faa2deb0192f2d3862cc9a29079c9e297c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPTBBFJ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T131819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYLNrnTeJHUBZmmEEUMOWrUOx%2BW5hbLpT%2BXK8rh1IbsAIhAMQ06Y%2BmlQRqz90qJVSSiG2ZB%2BwQ%2FQWpkCnak9SCEJJvKv8DCHUQABoMNjM3NDIzMTgzODA1IgygSCWA2bpenadLDvcq3API1YOJDaIkcooiPaQ%2Bkjm6O5oXgKklAQR%2BH3MmdVgOHx2pnvPNIZ8apvaFi7TcXTkHlotAsegzPNn0s8cpIEYSonovFXhwgoQ%2Bt%2FTw%2FAON2irz4VHfYC3w1IsaWsjfQW0yBD38cbqtB76W53K9V55eQ51ew6OcxMzb8Wd8m%2FGQYU4uYPWVRgECJPZd4Sb%2BMTpjzx368W0EDYn59vQybpVweUAQWmg6HQ699Qblacdimneo8xiWuJyeoHH9DGIo2SBB1LR6nqUqxR5cIRDnAXF%2BcstVHf59yq%2Ba8ooENsTd1Mo%2FxG%2FcoVZRTIR9fm%2FdVYgHg%2BICpriOSSXoSRdUqHgWdsI5LeVIVbQ1uQ8TJqIC1gOIX06dNw3F30jFuEtfXJ2w1VjOplHskZQVbp29cpuVaiWuvsQ9IhPnBl2m8KpxM2R%2Bg9PZEzjLJMBlZd%2BzEI2PsnZlx5zeZoxAUcme7sKzeHopah3ByquQBcUw4f9gZAb47Jc5FTU5IBS3%2BkmE6dt%2BTNIimULgDitTff9vs8b6DngEdAX6nmTDxE6bWjb9sZYxOxHwuoaIJhZtDos%2BbI5ZRpsmQvM6nobnW9QF1yHSerxdNkT6w7eaDRXlZELn0B0RKe%2F29AgV8VzczzDyw5DCBjqkAYRQXx5PozbJLHteVrneInwnPmqY4Hr%2FwjGINQck9K8etpoAsGO%2BI2iUPeJ%2FslktlB2Jnw2qvROiy7N8sg3hAdT57t4%2BSNS7NwuRv%2BsGTHUc0yv3N46ajx6Pnn9dPG047b1zjvJB3C3VqEjeIYxi3KUySPSaN5Z%2BlM9M7YNJKJtX2kEWFsxY6HYVEkY%2FEa2bcGKYrApMtw%2FG57rnCWxYSSlq%2FHx8&X-Amz-Signature=08bec580960b96bfcc26a970f8288bfdfe46fc3ed8b2943e03e798c11984a4c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPTBBFJ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T131819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYLNrnTeJHUBZmmEEUMOWrUOx%2BW5hbLpT%2BXK8rh1IbsAIhAMQ06Y%2BmlQRqz90qJVSSiG2ZB%2BwQ%2FQWpkCnak9SCEJJvKv8DCHUQABoMNjM3NDIzMTgzODA1IgygSCWA2bpenadLDvcq3API1YOJDaIkcooiPaQ%2Bkjm6O5oXgKklAQR%2BH3MmdVgOHx2pnvPNIZ8apvaFi7TcXTkHlotAsegzPNn0s8cpIEYSonovFXhwgoQ%2Bt%2FTw%2FAON2irz4VHfYC3w1IsaWsjfQW0yBD38cbqtB76W53K9V55eQ51ew6OcxMzb8Wd8m%2FGQYU4uYPWVRgECJPZd4Sb%2BMTpjzx368W0EDYn59vQybpVweUAQWmg6HQ699Qblacdimneo8xiWuJyeoHH9DGIo2SBB1LR6nqUqxR5cIRDnAXF%2BcstVHf59yq%2Ba8ooENsTd1Mo%2FxG%2FcoVZRTIR9fm%2FdVYgHg%2BICpriOSSXoSRdUqHgWdsI5LeVIVbQ1uQ8TJqIC1gOIX06dNw3F30jFuEtfXJ2w1VjOplHskZQVbp29cpuVaiWuvsQ9IhPnBl2m8KpxM2R%2Bg9PZEzjLJMBlZd%2BzEI2PsnZlx5zeZoxAUcme7sKzeHopah3ByquQBcUw4f9gZAb47Jc5FTU5IBS3%2BkmE6dt%2BTNIimULgDitTff9vs8b6DngEdAX6nmTDxE6bWjb9sZYxOxHwuoaIJhZtDos%2BbI5ZRpsmQvM6nobnW9QF1yHSerxdNkT6w7eaDRXlZELn0B0RKe%2F29AgV8VzczzDyw5DCBjqkAYRQXx5PozbJLHteVrneInwnPmqY4Hr%2FwjGINQck9K8etpoAsGO%2BI2iUPeJ%2FslktlB2Jnw2qvROiy7N8sg3hAdT57t4%2BSNS7NwuRv%2BsGTHUc0yv3N46ajx6Pnn9dPG047b1zjvJB3C3VqEjeIYxi3KUySPSaN5Z%2BlM9M7YNJKJtX2kEWFsxY6HYVEkY%2FEa2bcGKYrApMtw%2FG57rnCWxYSSlq%2FHx8&X-Amz-Signature=4a643695985083d0dcb2143dbc2ec7416d46eb1b1ffbc58ee3c5040a92b878f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPTBBFJ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T131819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYLNrnTeJHUBZmmEEUMOWrUOx%2BW5hbLpT%2BXK8rh1IbsAIhAMQ06Y%2BmlQRqz90qJVSSiG2ZB%2BwQ%2FQWpkCnak9SCEJJvKv8DCHUQABoMNjM3NDIzMTgzODA1IgygSCWA2bpenadLDvcq3API1YOJDaIkcooiPaQ%2Bkjm6O5oXgKklAQR%2BH3MmdVgOHx2pnvPNIZ8apvaFi7TcXTkHlotAsegzPNn0s8cpIEYSonovFXhwgoQ%2Bt%2FTw%2FAON2irz4VHfYC3w1IsaWsjfQW0yBD38cbqtB76W53K9V55eQ51ew6OcxMzb8Wd8m%2FGQYU4uYPWVRgECJPZd4Sb%2BMTpjzx368W0EDYn59vQybpVweUAQWmg6HQ699Qblacdimneo8xiWuJyeoHH9DGIo2SBB1LR6nqUqxR5cIRDnAXF%2BcstVHf59yq%2Ba8ooENsTd1Mo%2FxG%2FcoVZRTIR9fm%2FdVYgHg%2BICpriOSSXoSRdUqHgWdsI5LeVIVbQ1uQ8TJqIC1gOIX06dNw3F30jFuEtfXJ2w1VjOplHskZQVbp29cpuVaiWuvsQ9IhPnBl2m8KpxM2R%2Bg9PZEzjLJMBlZd%2BzEI2PsnZlx5zeZoxAUcme7sKzeHopah3ByquQBcUw4f9gZAb47Jc5FTU5IBS3%2BkmE6dt%2BTNIimULgDitTff9vs8b6DngEdAX6nmTDxE6bWjb9sZYxOxHwuoaIJhZtDos%2BbI5ZRpsmQvM6nobnW9QF1yHSerxdNkT6w7eaDRXlZELn0B0RKe%2F29AgV8VzczzDyw5DCBjqkAYRQXx5PozbJLHteVrneInwnPmqY4Hr%2FwjGINQck9K8etpoAsGO%2BI2iUPeJ%2FslktlB2Jnw2qvROiy7N8sg3hAdT57t4%2BSNS7NwuRv%2BsGTHUc0yv3N46ajx6Pnn9dPG047b1zjvJB3C3VqEjeIYxi3KUySPSaN5Z%2BlM9M7YNJKJtX2kEWFsxY6HYVEkY%2FEa2bcGKYrApMtw%2FG57rnCWxYSSlq%2FHx8&X-Amz-Signature=45f8d9bc5147095bfff5e60c392eb706b1cd6d2416c03a7b323d46b8c49c1262&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPTBBFJ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T131819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYLNrnTeJHUBZmmEEUMOWrUOx%2BW5hbLpT%2BXK8rh1IbsAIhAMQ06Y%2BmlQRqz90qJVSSiG2ZB%2BwQ%2FQWpkCnak9SCEJJvKv8DCHUQABoMNjM3NDIzMTgzODA1IgygSCWA2bpenadLDvcq3API1YOJDaIkcooiPaQ%2Bkjm6O5oXgKklAQR%2BH3MmdVgOHx2pnvPNIZ8apvaFi7TcXTkHlotAsegzPNn0s8cpIEYSonovFXhwgoQ%2Bt%2FTw%2FAON2irz4VHfYC3w1IsaWsjfQW0yBD38cbqtB76W53K9V55eQ51ew6OcxMzb8Wd8m%2FGQYU4uYPWVRgECJPZd4Sb%2BMTpjzx368W0EDYn59vQybpVweUAQWmg6HQ699Qblacdimneo8xiWuJyeoHH9DGIo2SBB1LR6nqUqxR5cIRDnAXF%2BcstVHf59yq%2Ba8ooENsTd1Mo%2FxG%2FcoVZRTIR9fm%2FdVYgHg%2BICpriOSSXoSRdUqHgWdsI5LeVIVbQ1uQ8TJqIC1gOIX06dNw3F30jFuEtfXJ2w1VjOplHskZQVbp29cpuVaiWuvsQ9IhPnBl2m8KpxM2R%2Bg9PZEzjLJMBlZd%2BzEI2PsnZlx5zeZoxAUcme7sKzeHopah3ByquQBcUw4f9gZAb47Jc5FTU5IBS3%2BkmE6dt%2BTNIimULgDitTff9vs8b6DngEdAX6nmTDxE6bWjb9sZYxOxHwuoaIJhZtDos%2BbI5ZRpsmQvM6nobnW9QF1yHSerxdNkT6w7eaDRXlZELn0B0RKe%2F29AgV8VzczzDyw5DCBjqkAYRQXx5PozbJLHteVrneInwnPmqY4Hr%2FwjGINQck9K8etpoAsGO%2BI2iUPeJ%2FslktlB2Jnw2qvROiy7N8sg3hAdT57t4%2BSNS7NwuRv%2BsGTHUc0yv3N46ajx6Pnn9dPG047b1zjvJB3C3VqEjeIYxi3KUySPSaN5Z%2BlM9M7YNJKJtX2kEWFsxY6HYVEkY%2FEa2bcGKYrApMtw%2FG57rnCWxYSSlq%2FHx8&X-Amz-Signature=af54b930e53e04029645e7e52e0f7f5f5584d86a15c1b917b5b09778b9aec580&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
