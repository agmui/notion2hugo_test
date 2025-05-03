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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UILSDNOW%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIEhlmIhLjg%2BwqVftXQB2g74WhzdHz7zX6r%2FPGdF0EnvHAiB7mTfmtdpbQx6sNhCyL5y2LHhc2nHNgv3fZp834u%2B1hyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGTzy2jQFKZfJnekZKtwD6ebd7RTj%2BOEqaHGbOeNc7J%2FZTg4OJGw33%2BeUnEzWwruNRWAz8GoTzqUizdijtb77gtyO9jgbWp0%2F0IKoS1yntiYKY1w9lLxlZkjXF04OOV54nH0je6vR8NPPVWaX7vA%2BzfzuQuHw5ReFcYIUmUaSCvmoXX%2BGb%2BlB7rChMBO1SFlxz7ApRkfv%2BERTYsomu5xCssV1boUT1JNKZuVsfyvs8FdazqxQPngscBWsnvk7Fjb8tXpmBRlpMBlhx%2B32%2F4e7BgOl3j23SzLd4AZitaJR3vKOtIN7PdmtGEejQL%2BI3T2Rl3jL8KV1TOk2HntG6G3yZtRUmJmJeLWP5AXyfQanfXK0UQuwoevQDRx9DVXWxQ4FFZGUdGtkj4x%2B7maS2nBkmEboDSKtWxd9qpInsTG3P0oNOBx%2B79dnWvOCqk4svXgNw89RLH%2F9gArLtkQrMa4K%2BSP0wrM4suNoFnGTqg5dKchefqdGN601SBTPDG4th95mzzZwwnxaUVw0zDjuXYZ4C2zvRTvfwaCewtV9EVsUIlSALhdYgiarSPH4wjMeBIG15fUvtg%2Fw33IonXD4%2BRhsB%2BX2Wm4BsEHUMiNkkgy9uTLhvdUrMV3yWFf81x5%2FQeM9lBXt2B4CdMi%2Fiu4w597XwAY6pgF%2BpCG59Nk%2B1QH%2BHtqu37%2FWZql4QrzjXxzjnjev9s3HP7USr08MEeKwLx8bzgtzIZkoIkYruaon0caFxQtGZyfNGX21SkJUEFSSYZeY9%2BLQncCiNDw440Y3GOk4ndjXkaW7M0WTnm4Cl2XJKRtobY1972wMrIKCnfX8CHW%2FVYQ19KVqOHXeCuGmfVVIIyzSfFdHRfDHBy9liz1uIPsDqsfk60R%2B1iVG&X-Amz-Signature=2dae73922f517768b90e92a2afa174a14a9553d471a615faba9dcae19ce5ea23&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UILSDNOW%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIEhlmIhLjg%2BwqVftXQB2g74WhzdHz7zX6r%2FPGdF0EnvHAiB7mTfmtdpbQx6sNhCyL5y2LHhc2nHNgv3fZp834u%2B1hyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGTzy2jQFKZfJnekZKtwD6ebd7RTj%2BOEqaHGbOeNc7J%2FZTg4OJGw33%2BeUnEzWwruNRWAz8GoTzqUizdijtb77gtyO9jgbWp0%2F0IKoS1yntiYKY1w9lLxlZkjXF04OOV54nH0je6vR8NPPVWaX7vA%2BzfzuQuHw5ReFcYIUmUaSCvmoXX%2BGb%2BlB7rChMBO1SFlxz7ApRkfv%2BERTYsomu5xCssV1boUT1JNKZuVsfyvs8FdazqxQPngscBWsnvk7Fjb8tXpmBRlpMBlhx%2B32%2F4e7BgOl3j23SzLd4AZitaJR3vKOtIN7PdmtGEejQL%2BI3T2Rl3jL8KV1TOk2HntG6G3yZtRUmJmJeLWP5AXyfQanfXK0UQuwoevQDRx9DVXWxQ4FFZGUdGtkj4x%2B7maS2nBkmEboDSKtWxd9qpInsTG3P0oNOBx%2B79dnWvOCqk4svXgNw89RLH%2F9gArLtkQrMa4K%2BSP0wrM4suNoFnGTqg5dKchefqdGN601SBTPDG4th95mzzZwwnxaUVw0zDjuXYZ4C2zvRTvfwaCewtV9EVsUIlSALhdYgiarSPH4wjMeBIG15fUvtg%2Fw33IonXD4%2BRhsB%2BX2Wm4BsEHUMiNkkgy9uTLhvdUrMV3yWFf81x5%2FQeM9lBXt2B4CdMi%2Fiu4w597XwAY6pgF%2BpCG59Nk%2B1QH%2BHtqu37%2FWZql4QrzjXxzjnjev9s3HP7USr08MEeKwLx8bzgtzIZkoIkYruaon0caFxQtGZyfNGX21SkJUEFSSYZeY9%2BLQncCiNDw440Y3GOk4ndjXkaW7M0WTnm4Cl2XJKRtobY1972wMrIKCnfX8CHW%2FVYQ19KVqOHXeCuGmfVVIIyzSfFdHRfDHBy9liz1uIPsDqsfk60R%2B1iVG&X-Amz-Signature=fecc83274a72ce77fa2aa0bdb59573bdccb3fa8bfe56abc636c0912ade47a32a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UILSDNOW%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIEhlmIhLjg%2BwqVftXQB2g74WhzdHz7zX6r%2FPGdF0EnvHAiB7mTfmtdpbQx6sNhCyL5y2LHhc2nHNgv3fZp834u%2B1hyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGTzy2jQFKZfJnekZKtwD6ebd7RTj%2BOEqaHGbOeNc7J%2FZTg4OJGw33%2BeUnEzWwruNRWAz8GoTzqUizdijtb77gtyO9jgbWp0%2F0IKoS1yntiYKY1w9lLxlZkjXF04OOV54nH0je6vR8NPPVWaX7vA%2BzfzuQuHw5ReFcYIUmUaSCvmoXX%2BGb%2BlB7rChMBO1SFlxz7ApRkfv%2BERTYsomu5xCssV1boUT1JNKZuVsfyvs8FdazqxQPngscBWsnvk7Fjb8tXpmBRlpMBlhx%2B32%2F4e7BgOl3j23SzLd4AZitaJR3vKOtIN7PdmtGEejQL%2BI3T2Rl3jL8KV1TOk2HntG6G3yZtRUmJmJeLWP5AXyfQanfXK0UQuwoevQDRx9DVXWxQ4FFZGUdGtkj4x%2B7maS2nBkmEboDSKtWxd9qpInsTG3P0oNOBx%2B79dnWvOCqk4svXgNw89RLH%2F9gArLtkQrMa4K%2BSP0wrM4suNoFnGTqg5dKchefqdGN601SBTPDG4th95mzzZwwnxaUVw0zDjuXYZ4C2zvRTvfwaCewtV9EVsUIlSALhdYgiarSPH4wjMeBIG15fUvtg%2Fw33IonXD4%2BRhsB%2BX2Wm4BsEHUMiNkkgy9uTLhvdUrMV3yWFf81x5%2FQeM9lBXt2B4CdMi%2Fiu4w597XwAY6pgF%2BpCG59Nk%2B1QH%2BHtqu37%2FWZql4QrzjXxzjnjev9s3HP7USr08MEeKwLx8bzgtzIZkoIkYruaon0caFxQtGZyfNGX21SkJUEFSSYZeY9%2BLQncCiNDw440Y3GOk4ndjXkaW7M0WTnm4Cl2XJKRtobY1972wMrIKCnfX8CHW%2FVYQ19KVqOHXeCuGmfVVIIyzSfFdHRfDHBy9liz1uIPsDqsfk60R%2B1iVG&X-Amz-Signature=55fe4f2bddae2f0226cb69977bf72cd99cdfc6c5bbe5385aea46c7167ef499ce&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UILSDNOW%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIEhlmIhLjg%2BwqVftXQB2g74WhzdHz7zX6r%2FPGdF0EnvHAiB7mTfmtdpbQx6sNhCyL5y2LHhc2nHNgv3fZp834u%2B1hyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGTzy2jQFKZfJnekZKtwD6ebd7RTj%2BOEqaHGbOeNc7J%2FZTg4OJGw33%2BeUnEzWwruNRWAz8GoTzqUizdijtb77gtyO9jgbWp0%2F0IKoS1yntiYKY1w9lLxlZkjXF04OOV54nH0je6vR8NPPVWaX7vA%2BzfzuQuHw5ReFcYIUmUaSCvmoXX%2BGb%2BlB7rChMBO1SFlxz7ApRkfv%2BERTYsomu5xCssV1boUT1JNKZuVsfyvs8FdazqxQPngscBWsnvk7Fjb8tXpmBRlpMBlhx%2B32%2F4e7BgOl3j23SzLd4AZitaJR3vKOtIN7PdmtGEejQL%2BI3T2Rl3jL8KV1TOk2HntG6G3yZtRUmJmJeLWP5AXyfQanfXK0UQuwoevQDRx9DVXWxQ4FFZGUdGtkj4x%2B7maS2nBkmEboDSKtWxd9qpInsTG3P0oNOBx%2B79dnWvOCqk4svXgNw89RLH%2F9gArLtkQrMa4K%2BSP0wrM4suNoFnGTqg5dKchefqdGN601SBTPDG4th95mzzZwwnxaUVw0zDjuXYZ4C2zvRTvfwaCewtV9EVsUIlSALhdYgiarSPH4wjMeBIG15fUvtg%2Fw33IonXD4%2BRhsB%2BX2Wm4BsEHUMiNkkgy9uTLhvdUrMV3yWFf81x5%2FQeM9lBXt2B4CdMi%2Fiu4w597XwAY6pgF%2BpCG59Nk%2B1QH%2BHtqu37%2FWZql4QrzjXxzjnjev9s3HP7USr08MEeKwLx8bzgtzIZkoIkYruaon0caFxQtGZyfNGX21SkJUEFSSYZeY9%2BLQncCiNDw440Y3GOk4ndjXkaW7M0WTnm4Cl2XJKRtobY1972wMrIKCnfX8CHW%2FVYQ19KVqOHXeCuGmfVVIIyzSfFdHRfDHBy9liz1uIPsDqsfk60R%2B1iVG&X-Amz-Signature=ceb19395f6cf11f4c30d21dbdd9c20c37e4a424225045ed65c8550d996132d34&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UILSDNOW%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIEhlmIhLjg%2BwqVftXQB2g74WhzdHz7zX6r%2FPGdF0EnvHAiB7mTfmtdpbQx6sNhCyL5y2LHhc2nHNgv3fZp834u%2B1hyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGTzy2jQFKZfJnekZKtwD6ebd7RTj%2BOEqaHGbOeNc7J%2FZTg4OJGw33%2BeUnEzWwruNRWAz8GoTzqUizdijtb77gtyO9jgbWp0%2F0IKoS1yntiYKY1w9lLxlZkjXF04OOV54nH0je6vR8NPPVWaX7vA%2BzfzuQuHw5ReFcYIUmUaSCvmoXX%2BGb%2BlB7rChMBO1SFlxz7ApRkfv%2BERTYsomu5xCssV1boUT1JNKZuVsfyvs8FdazqxQPngscBWsnvk7Fjb8tXpmBRlpMBlhx%2B32%2F4e7BgOl3j23SzLd4AZitaJR3vKOtIN7PdmtGEejQL%2BI3T2Rl3jL8KV1TOk2HntG6G3yZtRUmJmJeLWP5AXyfQanfXK0UQuwoevQDRx9DVXWxQ4FFZGUdGtkj4x%2B7maS2nBkmEboDSKtWxd9qpInsTG3P0oNOBx%2B79dnWvOCqk4svXgNw89RLH%2F9gArLtkQrMa4K%2BSP0wrM4suNoFnGTqg5dKchefqdGN601SBTPDG4th95mzzZwwnxaUVw0zDjuXYZ4C2zvRTvfwaCewtV9EVsUIlSALhdYgiarSPH4wjMeBIG15fUvtg%2Fw33IonXD4%2BRhsB%2BX2Wm4BsEHUMiNkkgy9uTLhvdUrMV3yWFf81x5%2FQeM9lBXt2B4CdMi%2Fiu4w597XwAY6pgF%2BpCG59Nk%2B1QH%2BHtqu37%2FWZql4QrzjXxzjnjev9s3HP7USr08MEeKwLx8bzgtzIZkoIkYruaon0caFxQtGZyfNGX21SkJUEFSSYZeY9%2BLQncCiNDw440Y3GOk4ndjXkaW7M0WTnm4Cl2XJKRtobY1972wMrIKCnfX8CHW%2FVYQ19KVqOHXeCuGmfVVIIyzSfFdHRfDHBy9liz1uIPsDqsfk60R%2B1iVG&X-Amz-Signature=429f2eaaffb8debb0828a4d8081dc587ce68ca7631e5a894e10cddab3930829b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UILSDNOW%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIEhlmIhLjg%2BwqVftXQB2g74WhzdHz7zX6r%2FPGdF0EnvHAiB7mTfmtdpbQx6sNhCyL5y2LHhc2nHNgv3fZp834u%2B1hyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGTzy2jQFKZfJnekZKtwD6ebd7RTj%2BOEqaHGbOeNc7J%2FZTg4OJGw33%2BeUnEzWwruNRWAz8GoTzqUizdijtb77gtyO9jgbWp0%2F0IKoS1yntiYKY1w9lLxlZkjXF04OOV54nH0je6vR8NPPVWaX7vA%2BzfzuQuHw5ReFcYIUmUaSCvmoXX%2BGb%2BlB7rChMBO1SFlxz7ApRkfv%2BERTYsomu5xCssV1boUT1JNKZuVsfyvs8FdazqxQPngscBWsnvk7Fjb8tXpmBRlpMBlhx%2B32%2F4e7BgOl3j23SzLd4AZitaJR3vKOtIN7PdmtGEejQL%2BI3T2Rl3jL8KV1TOk2HntG6G3yZtRUmJmJeLWP5AXyfQanfXK0UQuwoevQDRx9DVXWxQ4FFZGUdGtkj4x%2B7maS2nBkmEboDSKtWxd9qpInsTG3P0oNOBx%2B79dnWvOCqk4svXgNw89RLH%2F9gArLtkQrMa4K%2BSP0wrM4suNoFnGTqg5dKchefqdGN601SBTPDG4th95mzzZwwnxaUVw0zDjuXYZ4C2zvRTvfwaCewtV9EVsUIlSALhdYgiarSPH4wjMeBIG15fUvtg%2Fw33IonXD4%2BRhsB%2BX2Wm4BsEHUMiNkkgy9uTLhvdUrMV3yWFf81x5%2FQeM9lBXt2B4CdMi%2Fiu4w597XwAY6pgF%2BpCG59Nk%2B1QH%2BHtqu37%2FWZql4QrzjXxzjnjev9s3HP7USr08MEeKwLx8bzgtzIZkoIkYruaon0caFxQtGZyfNGX21SkJUEFSSYZeY9%2BLQncCiNDw440Y3GOk4ndjXkaW7M0WTnm4Cl2XJKRtobY1972wMrIKCnfX8CHW%2FVYQ19KVqOHXeCuGmfVVIIyzSfFdHRfDHBy9liz1uIPsDqsfk60R%2B1iVG&X-Amz-Signature=c0a30a830cd0b03d669db8704b7d1ecf7d7dee14f8487c680b53d13f4cf96dd3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UILSDNOW%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIEhlmIhLjg%2BwqVftXQB2g74WhzdHz7zX6r%2FPGdF0EnvHAiB7mTfmtdpbQx6sNhCyL5y2LHhc2nHNgv3fZp834u%2B1hyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGTzy2jQFKZfJnekZKtwD6ebd7RTj%2BOEqaHGbOeNc7J%2FZTg4OJGw33%2BeUnEzWwruNRWAz8GoTzqUizdijtb77gtyO9jgbWp0%2F0IKoS1yntiYKY1w9lLxlZkjXF04OOV54nH0je6vR8NPPVWaX7vA%2BzfzuQuHw5ReFcYIUmUaSCvmoXX%2BGb%2BlB7rChMBO1SFlxz7ApRkfv%2BERTYsomu5xCssV1boUT1JNKZuVsfyvs8FdazqxQPngscBWsnvk7Fjb8tXpmBRlpMBlhx%2B32%2F4e7BgOl3j23SzLd4AZitaJR3vKOtIN7PdmtGEejQL%2BI3T2Rl3jL8KV1TOk2HntG6G3yZtRUmJmJeLWP5AXyfQanfXK0UQuwoevQDRx9DVXWxQ4FFZGUdGtkj4x%2B7maS2nBkmEboDSKtWxd9qpInsTG3P0oNOBx%2B79dnWvOCqk4svXgNw89RLH%2F9gArLtkQrMa4K%2BSP0wrM4suNoFnGTqg5dKchefqdGN601SBTPDG4th95mzzZwwnxaUVw0zDjuXYZ4C2zvRTvfwaCewtV9EVsUIlSALhdYgiarSPH4wjMeBIG15fUvtg%2Fw33IonXD4%2BRhsB%2BX2Wm4BsEHUMiNkkgy9uTLhvdUrMV3yWFf81x5%2FQeM9lBXt2B4CdMi%2Fiu4w597XwAY6pgF%2BpCG59Nk%2B1QH%2BHtqu37%2FWZql4QrzjXxzjnjev9s3HP7USr08MEeKwLx8bzgtzIZkoIkYruaon0caFxQtGZyfNGX21SkJUEFSSYZeY9%2BLQncCiNDw440Y3GOk4ndjXkaW7M0WTnm4Cl2XJKRtobY1972wMrIKCnfX8CHW%2FVYQ19KVqOHXeCuGmfVVIIyzSfFdHRfDHBy9liz1uIPsDqsfk60R%2B1iVG&X-Amz-Signature=57da16584e0338c4a75e54554e10dae20c327942b2d610c3e32732b0552131f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UILSDNOW%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIEhlmIhLjg%2BwqVftXQB2g74WhzdHz7zX6r%2FPGdF0EnvHAiB7mTfmtdpbQx6sNhCyL5y2LHhc2nHNgv3fZp834u%2B1hyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGTzy2jQFKZfJnekZKtwD6ebd7RTj%2BOEqaHGbOeNc7J%2FZTg4OJGw33%2BeUnEzWwruNRWAz8GoTzqUizdijtb77gtyO9jgbWp0%2F0IKoS1yntiYKY1w9lLxlZkjXF04OOV54nH0je6vR8NPPVWaX7vA%2BzfzuQuHw5ReFcYIUmUaSCvmoXX%2BGb%2BlB7rChMBO1SFlxz7ApRkfv%2BERTYsomu5xCssV1boUT1JNKZuVsfyvs8FdazqxQPngscBWsnvk7Fjb8tXpmBRlpMBlhx%2B32%2F4e7BgOl3j23SzLd4AZitaJR3vKOtIN7PdmtGEejQL%2BI3T2Rl3jL8KV1TOk2HntG6G3yZtRUmJmJeLWP5AXyfQanfXK0UQuwoevQDRx9DVXWxQ4FFZGUdGtkj4x%2B7maS2nBkmEboDSKtWxd9qpInsTG3P0oNOBx%2B79dnWvOCqk4svXgNw89RLH%2F9gArLtkQrMa4K%2BSP0wrM4suNoFnGTqg5dKchefqdGN601SBTPDG4th95mzzZwwnxaUVw0zDjuXYZ4C2zvRTvfwaCewtV9EVsUIlSALhdYgiarSPH4wjMeBIG15fUvtg%2Fw33IonXD4%2BRhsB%2BX2Wm4BsEHUMiNkkgy9uTLhvdUrMV3yWFf81x5%2FQeM9lBXt2B4CdMi%2Fiu4w597XwAY6pgF%2BpCG59Nk%2B1QH%2BHtqu37%2FWZql4QrzjXxzjnjev9s3HP7USr08MEeKwLx8bzgtzIZkoIkYruaon0caFxQtGZyfNGX21SkJUEFSSYZeY9%2BLQncCiNDw440Y3GOk4ndjXkaW7M0WTnm4Cl2XJKRtobY1972wMrIKCnfX8CHW%2FVYQ19KVqOHXeCuGmfVVIIyzSfFdHRfDHBy9liz1uIPsDqsfk60R%2B1iVG&X-Amz-Signature=120ace758c28503f7f7ef2448d1c66428453bda8ae4cb04cf79fdf77b6c87811&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
