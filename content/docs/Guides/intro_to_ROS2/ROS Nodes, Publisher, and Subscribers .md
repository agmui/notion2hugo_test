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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHDUBSG7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAIHZ6x4E3V57vhBeXl24gCi3JRuzbd7vmVv9E3DCaoPAiEAyrs5wxZezdv0U%2BYuCZEDp2bYRKqC5uAmn92r%2FRXnij4q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDN4t9ALqUItro2LeXyrcAzZPqAJcCTksBqjOdmN2Vur8BFup%2BKlforZk6cANJTgCu7Gct7DT8TZWtv1K24M6ytvecUcExQ2%2FjyWF8PGKIk8UOVOBvdTvEdryqJrWAB3mgigLi2tez%2FkzxLxY63%2BPFXMVbjvU7CUOgFCOgcu1XjEPyCyRbixPYqRB7UxDoSHNxhuNuQyn%2F4sjL%2F%2FDHsiTtYra%2FUJshRc0GOU%2F96il1yaORj%2Bkx8IqQ18gjIolrca9V6AgbjorlIn1O%2B2nAK%2F7JhAztT2Kqv19Y8se9xExaCiqdmOVbJQQjJACaz8pdwwkatXmgBN37HoAgGpk7uKL087osXQL7Anthng7eWKFU9hZfLUqOwDETQsU4kXLG8G6O489KGpvNQmpMuydkf6YDwsc%2BXvGP%2FmBrkM%2F9dB7mVnkdYjWOWa8lK2geTmD26Tz1uRNU%2Fbx%2Bz1guE2dQjNFxndasIzBIdzanIC2CL2CSMCzJhOr68ZlTHLCju9OaC1G6knpE8dbG61RH9H82fxBVKfKTsMfYPx2VFPympsyIqTSFaOdLxp4%2BFknCtESybxs5tBOVXWq32amK2LH5eT0GF6jthAzTlWKglqZAIweJDSS1zSK1VZ%2FlyfNY9b8xk7Eig5S8ND8GJ%2FyBe0zMKK8tMIGOqUBCyurqHYWpZ56%2BE4A2eZ3BeRWK6GtDNv3%2BvSctvGVGXpyU2rctxQubPZIZxyrNZ6ArPHzS0N5QC26yLjQ52qbxQoOrOazytItpx1G4vbNubMWKM4FBHFaa00gG%2BNACvGVcYVibKTNjxVNm3HFLyLfFQGvt04hp%2BoKSY%2FS41HmNJZjsT0vdllt3muYCNek56mlfAV4j7yekT4gBspUzOZtuEB0WfAz&X-Amz-Signature=0077d9ac11c869b8e89d969752d087c4ccfa193720f7d0840e24e10618bd539f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHDUBSG7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAIHZ6x4E3V57vhBeXl24gCi3JRuzbd7vmVv9E3DCaoPAiEAyrs5wxZezdv0U%2BYuCZEDp2bYRKqC5uAmn92r%2FRXnij4q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDN4t9ALqUItro2LeXyrcAzZPqAJcCTksBqjOdmN2Vur8BFup%2BKlforZk6cANJTgCu7Gct7DT8TZWtv1K24M6ytvecUcExQ2%2FjyWF8PGKIk8UOVOBvdTvEdryqJrWAB3mgigLi2tez%2FkzxLxY63%2BPFXMVbjvU7CUOgFCOgcu1XjEPyCyRbixPYqRB7UxDoSHNxhuNuQyn%2F4sjL%2F%2FDHsiTtYra%2FUJshRc0GOU%2F96il1yaORj%2Bkx8IqQ18gjIolrca9V6AgbjorlIn1O%2B2nAK%2F7JhAztT2Kqv19Y8se9xExaCiqdmOVbJQQjJACaz8pdwwkatXmgBN37HoAgGpk7uKL087osXQL7Anthng7eWKFU9hZfLUqOwDETQsU4kXLG8G6O489KGpvNQmpMuydkf6YDwsc%2BXvGP%2FmBrkM%2F9dB7mVnkdYjWOWa8lK2geTmD26Tz1uRNU%2Fbx%2Bz1guE2dQjNFxndasIzBIdzanIC2CL2CSMCzJhOr68ZlTHLCju9OaC1G6knpE8dbG61RH9H82fxBVKfKTsMfYPx2VFPympsyIqTSFaOdLxp4%2BFknCtESybxs5tBOVXWq32amK2LH5eT0GF6jthAzTlWKglqZAIweJDSS1zSK1VZ%2FlyfNY9b8xk7Eig5S8ND8GJ%2FyBe0zMKK8tMIGOqUBCyurqHYWpZ56%2BE4A2eZ3BeRWK6GtDNv3%2BvSctvGVGXpyU2rctxQubPZIZxyrNZ6ArPHzS0N5QC26yLjQ52qbxQoOrOazytItpx1G4vbNubMWKM4FBHFaa00gG%2BNACvGVcYVibKTNjxVNm3HFLyLfFQGvt04hp%2BoKSY%2FS41HmNJZjsT0vdllt3muYCNek56mlfAV4j7yekT4gBspUzOZtuEB0WfAz&X-Amz-Signature=7bed444a8f6bfd3ae0129cc626dea9da6ce57bbf329a86264fb072ec2beac6a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHDUBSG7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAIHZ6x4E3V57vhBeXl24gCi3JRuzbd7vmVv9E3DCaoPAiEAyrs5wxZezdv0U%2BYuCZEDp2bYRKqC5uAmn92r%2FRXnij4q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDN4t9ALqUItro2LeXyrcAzZPqAJcCTksBqjOdmN2Vur8BFup%2BKlforZk6cANJTgCu7Gct7DT8TZWtv1K24M6ytvecUcExQ2%2FjyWF8PGKIk8UOVOBvdTvEdryqJrWAB3mgigLi2tez%2FkzxLxY63%2BPFXMVbjvU7CUOgFCOgcu1XjEPyCyRbixPYqRB7UxDoSHNxhuNuQyn%2F4sjL%2F%2FDHsiTtYra%2FUJshRc0GOU%2F96il1yaORj%2Bkx8IqQ18gjIolrca9V6AgbjorlIn1O%2B2nAK%2F7JhAztT2Kqv19Y8se9xExaCiqdmOVbJQQjJACaz8pdwwkatXmgBN37HoAgGpk7uKL087osXQL7Anthng7eWKFU9hZfLUqOwDETQsU4kXLG8G6O489KGpvNQmpMuydkf6YDwsc%2BXvGP%2FmBrkM%2F9dB7mVnkdYjWOWa8lK2geTmD26Tz1uRNU%2Fbx%2Bz1guE2dQjNFxndasIzBIdzanIC2CL2CSMCzJhOr68ZlTHLCju9OaC1G6knpE8dbG61RH9H82fxBVKfKTsMfYPx2VFPympsyIqTSFaOdLxp4%2BFknCtESybxs5tBOVXWq32amK2LH5eT0GF6jthAzTlWKglqZAIweJDSS1zSK1VZ%2FlyfNY9b8xk7Eig5S8ND8GJ%2FyBe0zMKK8tMIGOqUBCyurqHYWpZ56%2BE4A2eZ3BeRWK6GtDNv3%2BvSctvGVGXpyU2rctxQubPZIZxyrNZ6ArPHzS0N5QC26yLjQ52qbxQoOrOazytItpx1G4vbNubMWKM4FBHFaa00gG%2BNACvGVcYVibKTNjxVNm3HFLyLfFQGvt04hp%2BoKSY%2FS41HmNJZjsT0vdllt3muYCNek56mlfAV4j7yekT4gBspUzOZtuEB0WfAz&X-Amz-Signature=828c79caf68915fc0e4842b1e67c231326dd9514cab0f7d81ca120fd3fcf9c2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHDUBSG7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAIHZ6x4E3V57vhBeXl24gCi3JRuzbd7vmVv9E3DCaoPAiEAyrs5wxZezdv0U%2BYuCZEDp2bYRKqC5uAmn92r%2FRXnij4q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDN4t9ALqUItro2LeXyrcAzZPqAJcCTksBqjOdmN2Vur8BFup%2BKlforZk6cANJTgCu7Gct7DT8TZWtv1K24M6ytvecUcExQ2%2FjyWF8PGKIk8UOVOBvdTvEdryqJrWAB3mgigLi2tez%2FkzxLxY63%2BPFXMVbjvU7CUOgFCOgcu1XjEPyCyRbixPYqRB7UxDoSHNxhuNuQyn%2F4sjL%2F%2FDHsiTtYra%2FUJshRc0GOU%2F96il1yaORj%2Bkx8IqQ18gjIolrca9V6AgbjorlIn1O%2B2nAK%2F7JhAztT2Kqv19Y8se9xExaCiqdmOVbJQQjJACaz8pdwwkatXmgBN37HoAgGpk7uKL087osXQL7Anthng7eWKFU9hZfLUqOwDETQsU4kXLG8G6O489KGpvNQmpMuydkf6YDwsc%2BXvGP%2FmBrkM%2F9dB7mVnkdYjWOWa8lK2geTmD26Tz1uRNU%2Fbx%2Bz1guE2dQjNFxndasIzBIdzanIC2CL2CSMCzJhOr68ZlTHLCju9OaC1G6knpE8dbG61RH9H82fxBVKfKTsMfYPx2VFPympsyIqTSFaOdLxp4%2BFknCtESybxs5tBOVXWq32amK2LH5eT0GF6jthAzTlWKglqZAIweJDSS1zSK1VZ%2FlyfNY9b8xk7Eig5S8ND8GJ%2FyBe0zMKK8tMIGOqUBCyurqHYWpZ56%2BE4A2eZ3BeRWK6GtDNv3%2BvSctvGVGXpyU2rctxQubPZIZxyrNZ6ArPHzS0N5QC26yLjQ52qbxQoOrOazytItpx1G4vbNubMWKM4FBHFaa00gG%2BNACvGVcYVibKTNjxVNm3HFLyLfFQGvt04hp%2BoKSY%2FS41HmNJZjsT0vdllt3muYCNek56mlfAV4j7yekT4gBspUzOZtuEB0WfAz&X-Amz-Signature=8cf30dbb3da96cef61fefa180ea173aca70a52e586fe0d611cfdd24547731633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHDUBSG7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAIHZ6x4E3V57vhBeXl24gCi3JRuzbd7vmVv9E3DCaoPAiEAyrs5wxZezdv0U%2BYuCZEDp2bYRKqC5uAmn92r%2FRXnij4q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDN4t9ALqUItro2LeXyrcAzZPqAJcCTksBqjOdmN2Vur8BFup%2BKlforZk6cANJTgCu7Gct7DT8TZWtv1K24M6ytvecUcExQ2%2FjyWF8PGKIk8UOVOBvdTvEdryqJrWAB3mgigLi2tez%2FkzxLxY63%2BPFXMVbjvU7CUOgFCOgcu1XjEPyCyRbixPYqRB7UxDoSHNxhuNuQyn%2F4sjL%2F%2FDHsiTtYra%2FUJshRc0GOU%2F96il1yaORj%2Bkx8IqQ18gjIolrca9V6AgbjorlIn1O%2B2nAK%2F7JhAztT2Kqv19Y8se9xExaCiqdmOVbJQQjJACaz8pdwwkatXmgBN37HoAgGpk7uKL087osXQL7Anthng7eWKFU9hZfLUqOwDETQsU4kXLG8G6O489KGpvNQmpMuydkf6YDwsc%2BXvGP%2FmBrkM%2F9dB7mVnkdYjWOWa8lK2geTmD26Tz1uRNU%2Fbx%2Bz1guE2dQjNFxndasIzBIdzanIC2CL2CSMCzJhOr68ZlTHLCju9OaC1G6knpE8dbG61RH9H82fxBVKfKTsMfYPx2VFPympsyIqTSFaOdLxp4%2BFknCtESybxs5tBOVXWq32amK2LH5eT0GF6jthAzTlWKglqZAIweJDSS1zSK1VZ%2FlyfNY9b8xk7Eig5S8ND8GJ%2FyBe0zMKK8tMIGOqUBCyurqHYWpZ56%2BE4A2eZ3BeRWK6GtDNv3%2BvSctvGVGXpyU2rctxQubPZIZxyrNZ6ArPHzS0N5QC26yLjQ52qbxQoOrOazytItpx1G4vbNubMWKM4FBHFaa00gG%2BNACvGVcYVibKTNjxVNm3HFLyLfFQGvt04hp%2BoKSY%2FS41HmNJZjsT0vdllt3muYCNek56mlfAV4j7yekT4gBspUzOZtuEB0WfAz&X-Amz-Signature=a14f79d851b634a16c8cc15d5a70f33bbac3c773bbe3511f42c62581555695c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHDUBSG7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAIHZ6x4E3V57vhBeXl24gCi3JRuzbd7vmVv9E3DCaoPAiEAyrs5wxZezdv0U%2BYuCZEDp2bYRKqC5uAmn92r%2FRXnij4q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDN4t9ALqUItro2LeXyrcAzZPqAJcCTksBqjOdmN2Vur8BFup%2BKlforZk6cANJTgCu7Gct7DT8TZWtv1K24M6ytvecUcExQ2%2FjyWF8PGKIk8UOVOBvdTvEdryqJrWAB3mgigLi2tez%2FkzxLxY63%2BPFXMVbjvU7CUOgFCOgcu1XjEPyCyRbixPYqRB7UxDoSHNxhuNuQyn%2F4sjL%2F%2FDHsiTtYra%2FUJshRc0GOU%2F96il1yaORj%2Bkx8IqQ18gjIolrca9V6AgbjorlIn1O%2B2nAK%2F7JhAztT2Kqv19Y8se9xExaCiqdmOVbJQQjJACaz8pdwwkatXmgBN37HoAgGpk7uKL087osXQL7Anthng7eWKFU9hZfLUqOwDETQsU4kXLG8G6O489KGpvNQmpMuydkf6YDwsc%2BXvGP%2FmBrkM%2F9dB7mVnkdYjWOWa8lK2geTmD26Tz1uRNU%2Fbx%2Bz1guE2dQjNFxndasIzBIdzanIC2CL2CSMCzJhOr68ZlTHLCju9OaC1G6knpE8dbG61RH9H82fxBVKfKTsMfYPx2VFPympsyIqTSFaOdLxp4%2BFknCtESybxs5tBOVXWq32amK2LH5eT0GF6jthAzTlWKglqZAIweJDSS1zSK1VZ%2FlyfNY9b8xk7Eig5S8ND8GJ%2FyBe0zMKK8tMIGOqUBCyurqHYWpZ56%2BE4A2eZ3BeRWK6GtDNv3%2BvSctvGVGXpyU2rctxQubPZIZxyrNZ6ArPHzS0N5QC26yLjQ52qbxQoOrOazytItpx1G4vbNubMWKM4FBHFaa00gG%2BNACvGVcYVibKTNjxVNm3HFLyLfFQGvt04hp%2BoKSY%2FS41HmNJZjsT0vdllt3muYCNek56mlfAV4j7yekT4gBspUzOZtuEB0WfAz&X-Amz-Signature=8804bb1a27c7f198bd4901e87f07e6e9ff8d9260115db0b1f42ae81d1ac811ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHDUBSG7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAIHZ6x4E3V57vhBeXl24gCi3JRuzbd7vmVv9E3DCaoPAiEAyrs5wxZezdv0U%2BYuCZEDp2bYRKqC5uAmn92r%2FRXnij4q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDN4t9ALqUItro2LeXyrcAzZPqAJcCTksBqjOdmN2Vur8BFup%2BKlforZk6cANJTgCu7Gct7DT8TZWtv1K24M6ytvecUcExQ2%2FjyWF8PGKIk8UOVOBvdTvEdryqJrWAB3mgigLi2tez%2FkzxLxY63%2BPFXMVbjvU7CUOgFCOgcu1XjEPyCyRbixPYqRB7UxDoSHNxhuNuQyn%2F4sjL%2F%2FDHsiTtYra%2FUJshRc0GOU%2F96il1yaORj%2Bkx8IqQ18gjIolrca9V6AgbjorlIn1O%2B2nAK%2F7JhAztT2Kqv19Y8se9xExaCiqdmOVbJQQjJACaz8pdwwkatXmgBN37HoAgGpk7uKL087osXQL7Anthng7eWKFU9hZfLUqOwDETQsU4kXLG8G6O489KGpvNQmpMuydkf6YDwsc%2BXvGP%2FmBrkM%2F9dB7mVnkdYjWOWa8lK2geTmD26Tz1uRNU%2Fbx%2Bz1guE2dQjNFxndasIzBIdzanIC2CL2CSMCzJhOr68ZlTHLCju9OaC1G6knpE8dbG61RH9H82fxBVKfKTsMfYPx2VFPympsyIqTSFaOdLxp4%2BFknCtESybxs5tBOVXWq32amK2LH5eT0GF6jthAzTlWKglqZAIweJDSS1zSK1VZ%2FlyfNY9b8xk7Eig5S8ND8GJ%2FyBe0zMKK8tMIGOqUBCyurqHYWpZ56%2BE4A2eZ3BeRWK6GtDNv3%2BvSctvGVGXpyU2rctxQubPZIZxyrNZ6ArPHzS0N5QC26yLjQ52qbxQoOrOazytItpx1G4vbNubMWKM4FBHFaa00gG%2BNACvGVcYVibKTNjxVNm3HFLyLfFQGvt04hp%2BoKSY%2FS41HmNJZjsT0vdllt3muYCNek56mlfAV4j7yekT4gBspUzOZtuEB0WfAz&X-Amz-Signature=65682dcea60e56c794383619bc68dd7a4402bf77982be34ca786725afd1be024&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHDUBSG7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAIHZ6x4E3V57vhBeXl24gCi3JRuzbd7vmVv9E3DCaoPAiEAyrs5wxZezdv0U%2BYuCZEDp2bYRKqC5uAmn92r%2FRXnij4q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDN4t9ALqUItro2LeXyrcAzZPqAJcCTksBqjOdmN2Vur8BFup%2BKlforZk6cANJTgCu7Gct7DT8TZWtv1K24M6ytvecUcExQ2%2FjyWF8PGKIk8UOVOBvdTvEdryqJrWAB3mgigLi2tez%2FkzxLxY63%2BPFXMVbjvU7CUOgFCOgcu1XjEPyCyRbixPYqRB7UxDoSHNxhuNuQyn%2F4sjL%2F%2FDHsiTtYra%2FUJshRc0GOU%2F96il1yaORj%2Bkx8IqQ18gjIolrca9V6AgbjorlIn1O%2B2nAK%2F7JhAztT2Kqv19Y8se9xExaCiqdmOVbJQQjJACaz8pdwwkatXmgBN37HoAgGpk7uKL087osXQL7Anthng7eWKFU9hZfLUqOwDETQsU4kXLG8G6O489KGpvNQmpMuydkf6YDwsc%2BXvGP%2FmBrkM%2F9dB7mVnkdYjWOWa8lK2geTmD26Tz1uRNU%2Fbx%2Bz1guE2dQjNFxndasIzBIdzanIC2CL2CSMCzJhOr68ZlTHLCju9OaC1G6knpE8dbG61RH9H82fxBVKfKTsMfYPx2VFPympsyIqTSFaOdLxp4%2BFknCtESybxs5tBOVXWq32amK2LH5eT0GF6jthAzTlWKglqZAIweJDSS1zSK1VZ%2FlyfNY9b8xk7Eig5S8ND8GJ%2FyBe0zMKK8tMIGOqUBCyurqHYWpZ56%2BE4A2eZ3BeRWK6GtDNv3%2BvSctvGVGXpyU2rctxQubPZIZxyrNZ6ArPHzS0N5QC26yLjQ52qbxQoOrOazytItpx1G4vbNubMWKM4FBHFaa00gG%2BNACvGVcYVibKTNjxVNm3HFLyLfFQGvt04hp%2BoKSY%2FS41HmNJZjsT0vdllt3muYCNek56mlfAV4j7yekT4gBspUzOZtuEB0WfAz&X-Amz-Signature=be7622ca784d27abf21e20343fe20c6c7175ad276858d96619a002edccefe163&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
