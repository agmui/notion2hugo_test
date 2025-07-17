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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLE57YTL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDxJBQT0ak%2B3XmX8bjUlSTwizWqy7D2sjfImUGs1PiFqAIgNn00LTVMQCjQ%2F1dYGRKTplGfMQkdoQ3oO8n7%2FgXPHZEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDLbx4h8QAoCMXERKDyrcAxxpFIOZ6cwPDBxcvpxQroN09qtQdzsWXIvrP611izq%2FRklh4pOdX7fvJwYfMH63Ox4qtdL6QJGH3%2B2KXy%2FxlVFqt7V2np%2FiEFL6gMBUiyXJqtpCFG1se0HBEBpk8g50L%2B2q3EAWCXlkYCreYkrZfG81urVZPW%2Fj7SK%2B1CJ1Rt6iTeaX%2Fu9GLkka3%2Bmec9S5kXKH25nsmY7FJIQ9J3fMDag%2F46PuSs1gRCrZzjsJWhYnUjxVOKjIC%2BbnG%2F6G4q%2F3W6%2F0aAtVNmbhAXjw%2Bzw%2F6vzko9%2BiRv6sePDxfkY13ANXcRM0birNaMIXVadbmCtXpauwQhxSMCaCjuUrFpH1AyOP0iMzd%2BVLYomYzFOmYOetJnADoglznNRU%2FE48kAQPMkjDR7kD0DpnR10vc1Bz3yNyXkxt3lNIBNz2AwluWw3baE8NptZd71M6uhUjNC8xMXDG2nlbjgMe1Gdtee1Tb%2FBYeCVG4wQ%2BVvRLRdSIeW2h25HfKrc45FfinEldsBqB9GvhpIXp2KREnrhtnr1nfp6eo3wSeXOEC9Br1eaqSkjNyL86l6di5d5lSzSKQgEEy%2FWNvzvpAHs%2BL6SpR35FIRL%2FmDVq5%2FY%2F8EGYyeLbL1HE%2FV8zQJIwdqOAH02WMMfA4sMGOqUBLjxAUiOgXQQP1W32C%2F%2B%2BgNwONPFWK1%2BIOYMNB1q5abPwCBiZfPLdoKPdaJ96K7z5iBsZfLi%2FtDNQ4CRXs%2FE5MmINTMOoBgJQ5F9J56QP0GuwYJz%2FBUmHm4UMDWdW%2FaS7vwftInEepvHpvEy00KQe10Rrg8GCfwXc%2BsclUx5WpAJF%2BNlpeJ6%2FxJ5PJ6gmOK0oxfR9sTH44M8KZNfofYywo1snkdzy&X-Amz-Signature=d54d8cff2b82e8795fb1d4cfec0ece0acd01232b058036e13163ca03306182f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLE57YTL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDxJBQT0ak%2B3XmX8bjUlSTwizWqy7D2sjfImUGs1PiFqAIgNn00LTVMQCjQ%2F1dYGRKTplGfMQkdoQ3oO8n7%2FgXPHZEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDLbx4h8QAoCMXERKDyrcAxxpFIOZ6cwPDBxcvpxQroN09qtQdzsWXIvrP611izq%2FRklh4pOdX7fvJwYfMH63Ox4qtdL6QJGH3%2B2KXy%2FxlVFqt7V2np%2FiEFL6gMBUiyXJqtpCFG1se0HBEBpk8g50L%2B2q3EAWCXlkYCreYkrZfG81urVZPW%2Fj7SK%2B1CJ1Rt6iTeaX%2Fu9GLkka3%2Bmec9S5kXKH25nsmY7FJIQ9J3fMDag%2F46PuSs1gRCrZzjsJWhYnUjxVOKjIC%2BbnG%2F6G4q%2F3W6%2F0aAtVNmbhAXjw%2Bzw%2F6vzko9%2BiRv6sePDxfkY13ANXcRM0birNaMIXVadbmCtXpauwQhxSMCaCjuUrFpH1AyOP0iMzd%2BVLYomYzFOmYOetJnADoglznNRU%2FE48kAQPMkjDR7kD0DpnR10vc1Bz3yNyXkxt3lNIBNz2AwluWw3baE8NptZd71M6uhUjNC8xMXDG2nlbjgMe1Gdtee1Tb%2FBYeCVG4wQ%2BVvRLRdSIeW2h25HfKrc45FfinEldsBqB9GvhpIXp2KREnrhtnr1nfp6eo3wSeXOEC9Br1eaqSkjNyL86l6di5d5lSzSKQgEEy%2FWNvzvpAHs%2BL6SpR35FIRL%2FmDVq5%2FY%2F8EGYyeLbL1HE%2FV8zQJIwdqOAH02WMMfA4sMGOqUBLjxAUiOgXQQP1W32C%2F%2B%2BgNwONPFWK1%2BIOYMNB1q5abPwCBiZfPLdoKPdaJ96K7z5iBsZfLi%2FtDNQ4CRXs%2FE5MmINTMOoBgJQ5F9J56QP0GuwYJz%2FBUmHm4UMDWdW%2FaS7vwftInEepvHpvEy00KQe10Rrg8GCfwXc%2BsclUx5WpAJF%2BNlpeJ6%2FxJ5PJ6gmOK0oxfR9sTH44M8KZNfofYywo1snkdzy&X-Amz-Signature=21a7220355309499511961ed67be314c1752939bd825d713d0b59e88b96bf467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLE57YTL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDxJBQT0ak%2B3XmX8bjUlSTwizWqy7D2sjfImUGs1PiFqAIgNn00LTVMQCjQ%2F1dYGRKTplGfMQkdoQ3oO8n7%2FgXPHZEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDLbx4h8QAoCMXERKDyrcAxxpFIOZ6cwPDBxcvpxQroN09qtQdzsWXIvrP611izq%2FRklh4pOdX7fvJwYfMH63Ox4qtdL6QJGH3%2B2KXy%2FxlVFqt7V2np%2FiEFL6gMBUiyXJqtpCFG1se0HBEBpk8g50L%2B2q3EAWCXlkYCreYkrZfG81urVZPW%2Fj7SK%2B1CJ1Rt6iTeaX%2Fu9GLkka3%2Bmec9S5kXKH25nsmY7FJIQ9J3fMDag%2F46PuSs1gRCrZzjsJWhYnUjxVOKjIC%2BbnG%2F6G4q%2F3W6%2F0aAtVNmbhAXjw%2Bzw%2F6vzko9%2BiRv6sePDxfkY13ANXcRM0birNaMIXVadbmCtXpauwQhxSMCaCjuUrFpH1AyOP0iMzd%2BVLYomYzFOmYOetJnADoglznNRU%2FE48kAQPMkjDR7kD0DpnR10vc1Bz3yNyXkxt3lNIBNz2AwluWw3baE8NptZd71M6uhUjNC8xMXDG2nlbjgMe1Gdtee1Tb%2FBYeCVG4wQ%2BVvRLRdSIeW2h25HfKrc45FfinEldsBqB9GvhpIXp2KREnrhtnr1nfp6eo3wSeXOEC9Br1eaqSkjNyL86l6di5d5lSzSKQgEEy%2FWNvzvpAHs%2BL6SpR35FIRL%2FmDVq5%2FY%2F8EGYyeLbL1HE%2FV8zQJIwdqOAH02WMMfA4sMGOqUBLjxAUiOgXQQP1W32C%2F%2B%2BgNwONPFWK1%2BIOYMNB1q5abPwCBiZfPLdoKPdaJ96K7z5iBsZfLi%2FtDNQ4CRXs%2FE5MmINTMOoBgJQ5F9J56QP0GuwYJz%2FBUmHm4UMDWdW%2FaS7vwftInEepvHpvEy00KQe10Rrg8GCfwXc%2BsclUx5WpAJF%2BNlpeJ6%2FxJ5PJ6gmOK0oxfR9sTH44M8KZNfofYywo1snkdzy&X-Amz-Signature=31117513528a398758579e46bd675d0579a1ecea8f3c89f2694eade624a82465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLE57YTL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDxJBQT0ak%2B3XmX8bjUlSTwizWqy7D2sjfImUGs1PiFqAIgNn00LTVMQCjQ%2F1dYGRKTplGfMQkdoQ3oO8n7%2FgXPHZEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDLbx4h8QAoCMXERKDyrcAxxpFIOZ6cwPDBxcvpxQroN09qtQdzsWXIvrP611izq%2FRklh4pOdX7fvJwYfMH63Ox4qtdL6QJGH3%2B2KXy%2FxlVFqt7V2np%2FiEFL6gMBUiyXJqtpCFG1se0HBEBpk8g50L%2B2q3EAWCXlkYCreYkrZfG81urVZPW%2Fj7SK%2B1CJ1Rt6iTeaX%2Fu9GLkka3%2Bmec9S5kXKH25nsmY7FJIQ9J3fMDag%2F46PuSs1gRCrZzjsJWhYnUjxVOKjIC%2BbnG%2F6G4q%2F3W6%2F0aAtVNmbhAXjw%2Bzw%2F6vzko9%2BiRv6sePDxfkY13ANXcRM0birNaMIXVadbmCtXpauwQhxSMCaCjuUrFpH1AyOP0iMzd%2BVLYomYzFOmYOetJnADoglznNRU%2FE48kAQPMkjDR7kD0DpnR10vc1Bz3yNyXkxt3lNIBNz2AwluWw3baE8NptZd71M6uhUjNC8xMXDG2nlbjgMe1Gdtee1Tb%2FBYeCVG4wQ%2BVvRLRdSIeW2h25HfKrc45FfinEldsBqB9GvhpIXp2KREnrhtnr1nfp6eo3wSeXOEC9Br1eaqSkjNyL86l6di5d5lSzSKQgEEy%2FWNvzvpAHs%2BL6SpR35FIRL%2FmDVq5%2FY%2F8EGYyeLbL1HE%2FV8zQJIwdqOAH02WMMfA4sMGOqUBLjxAUiOgXQQP1W32C%2F%2B%2BgNwONPFWK1%2BIOYMNB1q5abPwCBiZfPLdoKPdaJ96K7z5iBsZfLi%2FtDNQ4CRXs%2FE5MmINTMOoBgJQ5F9J56QP0GuwYJz%2FBUmHm4UMDWdW%2FaS7vwftInEepvHpvEy00KQe10Rrg8GCfwXc%2BsclUx5WpAJF%2BNlpeJ6%2FxJ5PJ6gmOK0oxfR9sTH44M8KZNfofYywo1snkdzy&X-Amz-Signature=54111359c79eae1db2df41aac7f06b124baf8ea70dcae8ea41cbc3411b611d2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLE57YTL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDxJBQT0ak%2B3XmX8bjUlSTwizWqy7D2sjfImUGs1PiFqAIgNn00LTVMQCjQ%2F1dYGRKTplGfMQkdoQ3oO8n7%2FgXPHZEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDLbx4h8QAoCMXERKDyrcAxxpFIOZ6cwPDBxcvpxQroN09qtQdzsWXIvrP611izq%2FRklh4pOdX7fvJwYfMH63Ox4qtdL6QJGH3%2B2KXy%2FxlVFqt7V2np%2FiEFL6gMBUiyXJqtpCFG1se0HBEBpk8g50L%2B2q3EAWCXlkYCreYkrZfG81urVZPW%2Fj7SK%2B1CJ1Rt6iTeaX%2Fu9GLkka3%2Bmec9S5kXKH25nsmY7FJIQ9J3fMDag%2F46PuSs1gRCrZzjsJWhYnUjxVOKjIC%2BbnG%2F6G4q%2F3W6%2F0aAtVNmbhAXjw%2Bzw%2F6vzko9%2BiRv6sePDxfkY13ANXcRM0birNaMIXVadbmCtXpauwQhxSMCaCjuUrFpH1AyOP0iMzd%2BVLYomYzFOmYOetJnADoglznNRU%2FE48kAQPMkjDR7kD0DpnR10vc1Bz3yNyXkxt3lNIBNz2AwluWw3baE8NptZd71M6uhUjNC8xMXDG2nlbjgMe1Gdtee1Tb%2FBYeCVG4wQ%2BVvRLRdSIeW2h25HfKrc45FfinEldsBqB9GvhpIXp2KREnrhtnr1nfp6eo3wSeXOEC9Br1eaqSkjNyL86l6di5d5lSzSKQgEEy%2FWNvzvpAHs%2BL6SpR35FIRL%2FmDVq5%2FY%2F8EGYyeLbL1HE%2FV8zQJIwdqOAH02WMMfA4sMGOqUBLjxAUiOgXQQP1W32C%2F%2B%2BgNwONPFWK1%2BIOYMNB1q5abPwCBiZfPLdoKPdaJ96K7z5iBsZfLi%2FtDNQ4CRXs%2FE5MmINTMOoBgJQ5F9J56QP0GuwYJz%2FBUmHm4UMDWdW%2FaS7vwftInEepvHpvEy00KQe10Rrg8GCfwXc%2BsclUx5WpAJF%2BNlpeJ6%2FxJ5PJ6gmOK0oxfR9sTH44M8KZNfofYywo1snkdzy&X-Amz-Signature=366e3dad855bc5fd65caa7ca70766802c6ce024a2eaa8a1c66cb0140ea327232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLE57YTL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDxJBQT0ak%2B3XmX8bjUlSTwizWqy7D2sjfImUGs1PiFqAIgNn00LTVMQCjQ%2F1dYGRKTplGfMQkdoQ3oO8n7%2FgXPHZEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDLbx4h8QAoCMXERKDyrcAxxpFIOZ6cwPDBxcvpxQroN09qtQdzsWXIvrP611izq%2FRklh4pOdX7fvJwYfMH63Ox4qtdL6QJGH3%2B2KXy%2FxlVFqt7V2np%2FiEFL6gMBUiyXJqtpCFG1se0HBEBpk8g50L%2B2q3EAWCXlkYCreYkrZfG81urVZPW%2Fj7SK%2B1CJ1Rt6iTeaX%2Fu9GLkka3%2Bmec9S5kXKH25nsmY7FJIQ9J3fMDag%2F46PuSs1gRCrZzjsJWhYnUjxVOKjIC%2BbnG%2F6G4q%2F3W6%2F0aAtVNmbhAXjw%2Bzw%2F6vzko9%2BiRv6sePDxfkY13ANXcRM0birNaMIXVadbmCtXpauwQhxSMCaCjuUrFpH1AyOP0iMzd%2BVLYomYzFOmYOetJnADoglznNRU%2FE48kAQPMkjDR7kD0DpnR10vc1Bz3yNyXkxt3lNIBNz2AwluWw3baE8NptZd71M6uhUjNC8xMXDG2nlbjgMe1Gdtee1Tb%2FBYeCVG4wQ%2BVvRLRdSIeW2h25HfKrc45FfinEldsBqB9GvhpIXp2KREnrhtnr1nfp6eo3wSeXOEC9Br1eaqSkjNyL86l6di5d5lSzSKQgEEy%2FWNvzvpAHs%2BL6SpR35FIRL%2FmDVq5%2FY%2F8EGYyeLbL1HE%2FV8zQJIwdqOAH02WMMfA4sMGOqUBLjxAUiOgXQQP1W32C%2F%2B%2BgNwONPFWK1%2BIOYMNB1q5abPwCBiZfPLdoKPdaJ96K7z5iBsZfLi%2FtDNQ4CRXs%2FE5MmINTMOoBgJQ5F9J56QP0GuwYJz%2FBUmHm4UMDWdW%2FaS7vwftInEepvHpvEy00KQe10Rrg8GCfwXc%2BsclUx5WpAJF%2BNlpeJ6%2FxJ5PJ6gmOK0oxfR9sTH44M8KZNfofYywo1snkdzy&X-Amz-Signature=dc0f90758111626bb92c004ed5b64062214f52ab974b62a1f6d53fbc6bc4570e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLE57YTL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDxJBQT0ak%2B3XmX8bjUlSTwizWqy7D2sjfImUGs1PiFqAIgNn00LTVMQCjQ%2F1dYGRKTplGfMQkdoQ3oO8n7%2FgXPHZEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDLbx4h8QAoCMXERKDyrcAxxpFIOZ6cwPDBxcvpxQroN09qtQdzsWXIvrP611izq%2FRklh4pOdX7fvJwYfMH63Ox4qtdL6QJGH3%2B2KXy%2FxlVFqt7V2np%2FiEFL6gMBUiyXJqtpCFG1se0HBEBpk8g50L%2B2q3EAWCXlkYCreYkrZfG81urVZPW%2Fj7SK%2B1CJ1Rt6iTeaX%2Fu9GLkka3%2Bmec9S5kXKH25nsmY7FJIQ9J3fMDag%2F46PuSs1gRCrZzjsJWhYnUjxVOKjIC%2BbnG%2F6G4q%2F3W6%2F0aAtVNmbhAXjw%2Bzw%2F6vzko9%2BiRv6sePDxfkY13ANXcRM0birNaMIXVadbmCtXpauwQhxSMCaCjuUrFpH1AyOP0iMzd%2BVLYomYzFOmYOetJnADoglznNRU%2FE48kAQPMkjDR7kD0DpnR10vc1Bz3yNyXkxt3lNIBNz2AwluWw3baE8NptZd71M6uhUjNC8xMXDG2nlbjgMe1Gdtee1Tb%2FBYeCVG4wQ%2BVvRLRdSIeW2h25HfKrc45FfinEldsBqB9GvhpIXp2KREnrhtnr1nfp6eo3wSeXOEC9Br1eaqSkjNyL86l6di5d5lSzSKQgEEy%2FWNvzvpAHs%2BL6SpR35FIRL%2FmDVq5%2FY%2F8EGYyeLbL1HE%2FV8zQJIwdqOAH02WMMfA4sMGOqUBLjxAUiOgXQQP1W32C%2F%2B%2BgNwONPFWK1%2BIOYMNB1q5abPwCBiZfPLdoKPdaJ96K7z5iBsZfLi%2FtDNQ4CRXs%2FE5MmINTMOoBgJQ5F9J56QP0GuwYJz%2FBUmHm4UMDWdW%2FaS7vwftInEepvHpvEy00KQe10Rrg8GCfwXc%2BsclUx5WpAJF%2BNlpeJ6%2FxJ5PJ6gmOK0oxfR9sTH44M8KZNfofYywo1snkdzy&X-Amz-Signature=5ae9bd497ad456efad5c59bcf713f62afc8c4794b90621cb6ddf94e247535d64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLE57YTL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDxJBQT0ak%2B3XmX8bjUlSTwizWqy7D2sjfImUGs1PiFqAIgNn00LTVMQCjQ%2F1dYGRKTplGfMQkdoQ3oO8n7%2FgXPHZEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDLbx4h8QAoCMXERKDyrcAxxpFIOZ6cwPDBxcvpxQroN09qtQdzsWXIvrP611izq%2FRklh4pOdX7fvJwYfMH63Ox4qtdL6QJGH3%2B2KXy%2FxlVFqt7V2np%2FiEFL6gMBUiyXJqtpCFG1se0HBEBpk8g50L%2B2q3EAWCXlkYCreYkrZfG81urVZPW%2Fj7SK%2B1CJ1Rt6iTeaX%2Fu9GLkka3%2Bmec9S5kXKH25nsmY7FJIQ9J3fMDag%2F46PuSs1gRCrZzjsJWhYnUjxVOKjIC%2BbnG%2F6G4q%2F3W6%2F0aAtVNmbhAXjw%2Bzw%2F6vzko9%2BiRv6sePDxfkY13ANXcRM0birNaMIXVadbmCtXpauwQhxSMCaCjuUrFpH1AyOP0iMzd%2BVLYomYzFOmYOetJnADoglznNRU%2FE48kAQPMkjDR7kD0DpnR10vc1Bz3yNyXkxt3lNIBNz2AwluWw3baE8NptZd71M6uhUjNC8xMXDG2nlbjgMe1Gdtee1Tb%2FBYeCVG4wQ%2BVvRLRdSIeW2h25HfKrc45FfinEldsBqB9GvhpIXp2KREnrhtnr1nfp6eo3wSeXOEC9Br1eaqSkjNyL86l6di5d5lSzSKQgEEy%2FWNvzvpAHs%2BL6SpR35FIRL%2FmDVq5%2FY%2F8EGYyeLbL1HE%2FV8zQJIwdqOAH02WMMfA4sMGOqUBLjxAUiOgXQQP1W32C%2F%2B%2BgNwONPFWK1%2BIOYMNB1q5abPwCBiZfPLdoKPdaJ96K7z5iBsZfLi%2FtDNQ4CRXs%2FE5MmINTMOoBgJQ5F9J56QP0GuwYJz%2FBUmHm4UMDWdW%2FaS7vwftInEepvHpvEy00KQe10Rrg8GCfwXc%2BsclUx5WpAJF%2BNlpeJ6%2FxJ5PJ6gmOK0oxfR9sTH44M8KZNfofYywo1snkdzy&X-Amz-Signature=c3da2efaa5fdcc47e3a52dcec1a6d962bdb57b06a7f9749ea89a62237d3f03de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
