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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ6SQOTS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICpE5I08OVI8rPggda8F7fOzQX8xge34M3r1i2w5UPojAiEAshRmB6toIR2FwwHVEHAa%2BOSfVd6%2FF5rP4MH6x63Gyw0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWFbwTWhvXG9mOo2ircAzcxdTf43bHVVtfDq5KBXm4vwiYP25g3SJQaI4RCn1zyiEO6pz2yAtH1gRxzuTFBjyV8vUMGEZ%2FNuZnnjLQujlHxSoGfA0DhNQ09JpPOrC3THm0TP%2FhelWjRA71CGm49BcXIoLUoG%2BhavwyB%2FFEwq%2BMrvfpLqXMHB%2BftGh9z3YhDQlVEW3E4cY0KDTWdO3xAuaU6vBucY0I1HRAed4Mh2IDufoDZaH4I%2Bpxy4Y1iCiyngsITluqpa6%2BqbDCUAuxuGLfR0xIlMFB1R24y5kFMv%2BxsGYJRlh1KuvdtYSg%2F4DeNh10CFWDqg6EtNfvUeq6m7oNqMGQP3%2FJk9kwzS1MzFXU9DjwoLjnoZ%2F8InMAdngOIbJf2y3Tn4INFy8Q1hxXZvmHdzyn78jIUilt3fdsill9IemdqhRx2Iz5GZrD35P0MtYd5sio5UNXhBDLeO%2FAHdZsU313cImzd%2FttmbZqsV2y7aU8u97aEA0u%2Bxrynk2JA3J8gIklFnw7HNQvBiVkaDvqmkIXFj3oXow23o0K9DNF2hDJ2i79U%2FC3DtJXsh5kQmVXnAylblA%2Bka%2FEc4bc%2BHZMykDWSE8k014679uxQfobE8KgQGWUVtMPLgsHYaZeaLACSzynU01UJTWljMK2vvr4GOqUBhybEhjeWWHrYiy6bhhkS20K0iOpUYaSonVMufejtsRFEOneBuo8pP54j%2FB3WgMbxJ1NE1jv53ELIHfVP1oPB8r4aL0rPdBOPUIVbMJloVI7CnbNbDPLDRJO%2FoUmQMHZ2o5BX%2BkH68Q43nBPcfs6fTBwG47QoznlDOYugnl4rbi6UDNyGjO9GfKw87R38E%2FFtVQExRNxAU7eS8FmTowEqM8UtycOh&X-Amz-Signature=f37bc2e59455a4a92c78856e3d45535435018811e4049e99a9659bb6f8e23231&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ6SQOTS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICpE5I08OVI8rPggda8F7fOzQX8xge34M3r1i2w5UPojAiEAshRmB6toIR2FwwHVEHAa%2BOSfVd6%2FF5rP4MH6x63Gyw0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWFbwTWhvXG9mOo2ircAzcxdTf43bHVVtfDq5KBXm4vwiYP25g3SJQaI4RCn1zyiEO6pz2yAtH1gRxzuTFBjyV8vUMGEZ%2FNuZnnjLQujlHxSoGfA0DhNQ09JpPOrC3THm0TP%2FhelWjRA71CGm49BcXIoLUoG%2BhavwyB%2FFEwq%2BMrvfpLqXMHB%2BftGh9z3YhDQlVEW3E4cY0KDTWdO3xAuaU6vBucY0I1HRAed4Mh2IDufoDZaH4I%2Bpxy4Y1iCiyngsITluqpa6%2BqbDCUAuxuGLfR0xIlMFB1R24y5kFMv%2BxsGYJRlh1KuvdtYSg%2F4DeNh10CFWDqg6EtNfvUeq6m7oNqMGQP3%2FJk9kwzS1MzFXU9DjwoLjnoZ%2F8InMAdngOIbJf2y3Tn4INFy8Q1hxXZvmHdzyn78jIUilt3fdsill9IemdqhRx2Iz5GZrD35P0MtYd5sio5UNXhBDLeO%2FAHdZsU313cImzd%2FttmbZqsV2y7aU8u97aEA0u%2Bxrynk2JA3J8gIklFnw7HNQvBiVkaDvqmkIXFj3oXow23o0K9DNF2hDJ2i79U%2FC3DtJXsh5kQmVXnAylblA%2Bka%2FEc4bc%2BHZMykDWSE8k014679uxQfobE8KgQGWUVtMPLgsHYaZeaLACSzynU01UJTWljMK2vvr4GOqUBhybEhjeWWHrYiy6bhhkS20K0iOpUYaSonVMufejtsRFEOneBuo8pP54j%2FB3WgMbxJ1NE1jv53ELIHfVP1oPB8r4aL0rPdBOPUIVbMJloVI7CnbNbDPLDRJO%2FoUmQMHZ2o5BX%2BkH68Q43nBPcfs6fTBwG47QoznlDOYugnl4rbi6UDNyGjO9GfKw87R38E%2FFtVQExRNxAU7eS8FmTowEqM8UtycOh&X-Amz-Signature=e8b96d21ab0445b9204624f6ca16950f81cf89758e9a8e412b72e08282d6835e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ6SQOTS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICpE5I08OVI8rPggda8F7fOzQX8xge34M3r1i2w5UPojAiEAshRmB6toIR2FwwHVEHAa%2BOSfVd6%2FF5rP4MH6x63Gyw0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWFbwTWhvXG9mOo2ircAzcxdTf43bHVVtfDq5KBXm4vwiYP25g3SJQaI4RCn1zyiEO6pz2yAtH1gRxzuTFBjyV8vUMGEZ%2FNuZnnjLQujlHxSoGfA0DhNQ09JpPOrC3THm0TP%2FhelWjRA71CGm49BcXIoLUoG%2BhavwyB%2FFEwq%2BMrvfpLqXMHB%2BftGh9z3YhDQlVEW3E4cY0KDTWdO3xAuaU6vBucY0I1HRAed4Mh2IDufoDZaH4I%2Bpxy4Y1iCiyngsITluqpa6%2BqbDCUAuxuGLfR0xIlMFB1R24y5kFMv%2BxsGYJRlh1KuvdtYSg%2F4DeNh10CFWDqg6EtNfvUeq6m7oNqMGQP3%2FJk9kwzS1MzFXU9DjwoLjnoZ%2F8InMAdngOIbJf2y3Tn4INFy8Q1hxXZvmHdzyn78jIUilt3fdsill9IemdqhRx2Iz5GZrD35P0MtYd5sio5UNXhBDLeO%2FAHdZsU313cImzd%2FttmbZqsV2y7aU8u97aEA0u%2Bxrynk2JA3J8gIklFnw7HNQvBiVkaDvqmkIXFj3oXow23o0K9DNF2hDJ2i79U%2FC3DtJXsh5kQmVXnAylblA%2Bka%2FEc4bc%2BHZMykDWSE8k014679uxQfobE8KgQGWUVtMPLgsHYaZeaLACSzynU01UJTWljMK2vvr4GOqUBhybEhjeWWHrYiy6bhhkS20K0iOpUYaSonVMufejtsRFEOneBuo8pP54j%2FB3WgMbxJ1NE1jv53ELIHfVP1oPB8r4aL0rPdBOPUIVbMJloVI7CnbNbDPLDRJO%2FoUmQMHZ2o5BX%2BkH68Q43nBPcfs6fTBwG47QoznlDOYugnl4rbi6UDNyGjO9GfKw87R38E%2FFtVQExRNxAU7eS8FmTowEqM8UtycOh&X-Amz-Signature=6a63762a77b7ada5450063a5174ffd046f746cf94a3a6aeedd5bffb8f3009936&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ6SQOTS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICpE5I08OVI8rPggda8F7fOzQX8xge34M3r1i2w5UPojAiEAshRmB6toIR2FwwHVEHAa%2BOSfVd6%2FF5rP4MH6x63Gyw0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWFbwTWhvXG9mOo2ircAzcxdTf43bHVVtfDq5KBXm4vwiYP25g3SJQaI4RCn1zyiEO6pz2yAtH1gRxzuTFBjyV8vUMGEZ%2FNuZnnjLQujlHxSoGfA0DhNQ09JpPOrC3THm0TP%2FhelWjRA71CGm49BcXIoLUoG%2BhavwyB%2FFEwq%2BMrvfpLqXMHB%2BftGh9z3YhDQlVEW3E4cY0KDTWdO3xAuaU6vBucY0I1HRAed4Mh2IDufoDZaH4I%2Bpxy4Y1iCiyngsITluqpa6%2BqbDCUAuxuGLfR0xIlMFB1R24y5kFMv%2BxsGYJRlh1KuvdtYSg%2F4DeNh10CFWDqg6EtNfvUeq6m7oNqMGQP3%2FJk9kwzS1MzFXU9DjwoLjnoZ%2F8InMAdngOIbJf2y3Tn4INFy8Q1hxXZvmHdzyn78jIUilt3fdsill9IemdqhRx2Iz5GZrD35P0MtYd5sio5UNXhBDLeO%2FAHdZsU313cImzd%2FttmbZqsV2y7aU8u97aEA0u%2Bxrynk2JA3J8gIklFnw7HNQvBiVkaDvqmkIXFj3oXow23o0K9DNF2hDJ2i79U%2FC3DtJXsh5kQmVXnAylblA%2Bka%2FEc4bc%2BHZMykDWSE8k014679uxQfobE8KgQGWUVtMPLgsHYaZeaLACSzynU01UJTWljMK2vvr4GOqUBhybEhjeWWHrYiy6bhhkS20K0iOpUYaSonVMufejtsRFEOneBuo8pP54j%2FB3WgMbxJ1NE1jv53ELIHfVP1oPB8r4aL0rPdBOPUIVbMJloVI7CnbNbDPLDRJO%2FoUmQMHZ2o5BX%2BkH68Q43nBPcfs6fTBwG47QoznlDOYugnl4rbi6UDNyGjO9GfKw87R38E%2FFtVQExRNxAU7eS8FmTowEqM8UtycOh&X-Amz-Signature=69c841bb2d399416e78acb61b4e2cf7a2c10807cf1bccf04ee6de878dd967a07&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ6SQOTS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICpE5I08OVI8rPggda8F7fOzQX8xge34M3r1i2w5UPojAiEAshRmB6toIR2FwwHVEHAa%2BOSfVd6%2FF5rP4MH6x63Gyw0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWFbwTWhvXG9mOo2ircAzcxdTf43bHVVtfDq5KBXm4vwiYP25g3SJQaI4RCn1zyiEO6pz2yAtH1gRxzuTFBjyV8vUMGEZ%2FNuZnnjLQujlHxSoGfA0DhNQ09JpPOrC3THm0TP%2FhelWjRA71CGm49BcXIoLUoG%2BhavwyB%2FFEwq%2BMrvfpLqXMHB%2BftGh9z3YhDQlVEW3E4cY0KDTWdO3xAuaU6vBucY0I1HRAed4Mh2IDufoDZaH4I%2Bpxy4Y1iCiyngsITluqpa6%2BqbDCUAuxuGLfR0xIlMFB1R24y5kFMv%2BxsGYJRlh1KuvdtYSg%2F4DeNh10CFWDqg6EtNfvUeq6m7oNqMGQP3%2FJk9kwzS1MzFXU9DjwoLjnoZ%2F8InMAdngOIbJf2y3Tn4INFy8Q1hxXZvmHdzyn78jIUilt3fdsill9IemdqhRx2Iz5GZrD35P0MtYd5sio5UNXhBDLeO%2FAHdZsU313cImzd%2FttmbZqsV2y7aU8u97aEA0u%2Bxrynk2JA3J8gIklFnw7HNQvBiVkaDvqmkIXFj3oXow23o0K9DNF2hDJ2i79U%2FC3DtJXsh5kQmVXnAylblA%2Bka%2FEc4bc%2BHZMykDWSE8k014679uxQfobE8KgQGWUVtMPLgsHYaZeaLACSzynU01UJTWljMK2vvr4GOqUBhybEhjeWWHrYiy6bhhkS20K0iOpUYaSonVMufejtsRFEOneBuo8pP54j%2FB3WgMbxJ1NE1jv53ELIHfVP1oPB8r4aL0rPdBOPUIVbMJloVI7CnbNbDPLDRJO%2FoUmQMHZ2o5BX%2BkH68Q43nBPcfs6fTBwG47QoznlDOYugnl4rbi6UDNyGjO9GfKw87R38E%2FFtVQExRNxAU7eS8FmTowEqM8UtycOh&X-Amz-Signature=0da071c0b7f5e29fc2b80de4aa00c3a97b8d7427b8296d8ccdfa95c3950195b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ6SQOTS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICpE5I08OVI8rPggda8F7fOzQX8xge34M3r1i2w5UPojAiEAshRmB6toIR2FwwHVEHAa%2BOSfVd6%2FF5rP4MH6x63Gyw0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWFbwTWhvXG9mOo2ircAzcxdTf43bHVVtfDq5KBXm4vwiYP25g3SJQaI4RCn1zyiEO6pz2yAtH1gRxzuTFBjyV8vUMGEZ%2FNuZnnjLQujlHxSoGfA0DhNQ09JpPOrC3THm0TP%2FhelWjRA71CGm49BcXIoLUoG%2BhavwyB%2FFEwq%2BMrvfpLqXMHB%2BftGh9z3YhDQlVEW3E4cY0KDTWdO3xAuaU6vBucY0I1HRAed4Mh2IDufoDZaH4I%2Bpxy4Y1iCiyngsITluqpa6%2BqbDCUAuxuGLfR0xIlMFB1R24y5kFMv%2BxsGYJRlh1KuvdtYSg%2F4DeNh10CFWDqg6EtNfvUeq6m7oNqMGQP3%2FJk9kwzS1MzFXU9DjwoLjnoZ%2F8InMAdngOIbJf2y3Tn4INFy8Q1hxXZvmHdzyn78jIUilt3fdsill9IemdqhRx2Iz5GZrD35P0MtYd5sio5UNXhBDLeO%2FAHdZsU313cImzd%2FttmbZqsV2y7aU8u97aEA0u%2Bxrynk2JA3J8gIklFnw7HNQvBiVkaDvqmkIXFj3oXow23o0K9DNF2hDJ2i79U%2FC3DtJXsh5kQmVXnAylblA%2Bka%2FEc4bc%2BHZMykDWSE8k014679uxQfobE8KgQGWUVtMPLgsHYaZeaLACSzynU01UJTWljMK2vvr4GOqUBhybEhjeWWHrYiy6bhhkS20K0iOpUYaSonVMufejtsRFEOneBuo8pP54j%2FB3WgMbxJ1NE1jv53ELIHfVP1oPB8r4aL0rPdBOPUIVbMJloVI7CnbNbDPLDRJO%2FoUmQMHZ2o5BX%2BkH68Q43nBPcfs6fTBwG47QoznlDOYugnl4rbi6UDNyGjO9GfKw87R38E%2FFtVQExRNxAU7eS8FmTowEqM8UtycOh&X-Amz-Signature=7171b3ac0dbf2c46b25e44fa23d7e2ff074be16fa11acfd72d447c832d9a4659&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ6SQOTS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICpE5I08OVI8rPggda8F7fOzQX8xge34M3r1i2w5UPojAiEAshRmB6toIR2FwwHVEHAa%2BOSfVd6%2FF5rP4MH6x63Gyw0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWFbwTWhvXG9mOo2ircAzcxdTf43bHVVtfDq5KBXm4vwiYP25g3SJQaI4RCn1zyiEO6pz2yAtH1gRxzuTFBjyV8vUMGEZ%2FNuZnnjLQujlHxSoGfA0DhNQ09JpPOrC3THm0TP%2FhelWjRA71CGm49BcXIoLUoG%2BhavwyB%2FFEwq%2BMrvfpLqXMHB%2BftGh9z3YhDQlVEW3E4cY0KDTWdO3xAuaU6vBucY0I1HRAed4Mh2IDufoDZaH4I%2Bpxy4Y1iCiyngsITluqpa6%2BqbDCUAuxuGLfR0xIlMFB1R24y5kFMv%2BxsGYJRlh1KuvdtYSg%2F4DeNh10CFWDqg6EtNfvUeq6m7oNqMGQP3%2FJk9kwzS1MzFXU9DjwoLjnoZ%2F8InMAdngOIbJf2y3Tn4INFy8Q1hxXZvmHdzyn78jIUilt3fdsill9IemdqhRx2Iz5GZrD35P0MtYd5sio5UNXhBDLeO%2FAHdZsU313cImzd%2FttmbZqsV2y7aU8u97aEA0u%2Bxrynk2JA3J8gIklFnw7HNQvBiVkaDvqmkIXFj3oXow23o0K9DNF2hDJ2i79U%2FC3DtJXsh5kQmVXnAylblA%2Bka%2FEc4bc%2BHZMykDWSE8k014679uxQfobE8KgQGWUVtMPLgsHYaZeaLACSzynU01UJTWljMK2vvr4GOqUBhybEhjeWWHrYiy6bhhkS20K0iOpUYaSonVMufejtsRFEOneBuo8pP54j%2FB3WgMbxJ1NE1jv53ELIHfVP1oPB8r4aL0rPdBOPUIVbMJloVI7CnbNbDPLDRJO%2FoUmQMHZ2o5BX%2BkH68Q43nBPcfs6fTBwG47QoznlDOYugnl4rbi6UDNyGjO9GfKw87R38E%2FFtVQExRNxAU7eS8FmTowEqM8UtycOh&X-Amz-Signature=791196063be99f7134eaac6fd320d35e492e5ef2f013cbf307af592160c24a49&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ6SQOTS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICpE5I08OVI8rPggda8F7fOzQX8xge34M3r1i2w5UPojAiEAshRmB6toIR2FwwHVEHAa%2BOSfVd6%2FF5rP4MH6x63Gyw0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWFbwTWhvXG9mOo2ircAzcxdTf43bHVVtfDq5KBXm4vwiYP25g3SJQaI4RCn1zyiEO6pz2yAtH1gRxzuTFBjyV8vUMGEZ%2FNuZnnjLQujlHxSoGfA0DhNQ09JpPOrC3THm0TP%2FhelWjRA71CGm49BcXIoLUoG%2BhavwyB%2FFEwq%2BMrvfpLqXMHB%2BftGh9z3YhDQlVEW3E4cY0KDTWdO3xAuaU6vBucY0I1HRAed4Mh2IDufoDZaH4I%2Bpxy4Y1iCiyngsITluqpa6%2BqbDCUAuxuGLfR0xIlMFB1R24y5kFMv%2BxsGYJRlh1KuvdtYSg%2F4DeNh10CFWDqg6EtNfvUeq6m7oNqMGQP3%2FJk9kwzS1MzFXU9DjwoLjnoZ%2F8InMAdngOIbJf2y3Tn4INFy8Q1hxXZvmHdzyn78jIUilt3fdsill9IemdqhRx2Iz5GZrD35P0MtYd5sio5UNXhBDLeO%2FAHdZsU313cImzd%2FttmbZqsV2y7aU8u97aEA0u%2Bxrynk2JA3J8gIklFnw7HNQvBiVkaDvqmkIXFj3oXow23o0K9DNF2hDJ2i79U%2FC3DtJXsh5kQmVXnAylblA%2Bka%2FEc4bc%2BHZMykDWSE8k014679uxQfobE8KgQGWUVtMPLgsHYaZeaLACSzynU01UJTWljMK2vvr4GOqUBhybEhjeWWHrYiy6bhhkS20K0iOpUYaSonVMufejtsRFEOneBuo8pP54j%2FB3WgMbxJ1NE1jv53ELIHfVP1oPB8r4aL0rPdBOPUIVbMJloVI7CnbNbDPLDRJO%2FoUmQMHZ2o5BX%2BkH68Q43nBPcfs6fTBwG47QoznlDOYugnl4rbi6UDNyGjO9GfKw87R38E%2FFtVQExRNxAU7eS8FmTowEqM8UtycOh&X-Amz-Signature=95274c50e77542e3dbdea1995cba4e98230359f07fccf0e680116f899598dcdf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
