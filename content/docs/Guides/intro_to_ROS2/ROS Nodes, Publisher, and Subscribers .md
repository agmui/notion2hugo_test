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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NIUIQNY%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDXOKm3DjKybm9uodeD%2FBD7czDQ9Tnvp8FmVrf1Yq8M5AIgGYUHuXeQ5%2BfOj%2BmYqWslGFaLYQQHtWTgOS%2Bfd%2FrCrDgqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsbOYAppr2pO8k2NCrcA11Np7puRonqbn9MFX9GV9m8DEkJP89tmRf33yFvaqsFQTI0CRDJY0SeB8cJA6XjNu08lR6bLCsxrcgKB7lgMD9buWTYINAS0vjg1doyPUjRnpYMIFYP13VMC4yizaUA4Iw8Wlr%2FEcMdvIC2UIW2Yt3138bDuvFBhQeFApvanLMwwKlTRT0dELe3dtZpC%2BWZg6rU3rDxFZ9t2JgpEHi3RyAfrxKvzWJDkGqAkNMBgrxlv86mchWzXskMjpBfl3klgwR8ZkkQRbS4P8fLLwvedYy3zwUycfvU9kZ7lMD6STt7DeAOON8qUD1NcHvkcWVo2f%2FZlGN96NUvVNF%2B3KGDOuYsoojCy%2BhDprcE5jxWPSqiyP1yKl0H4DWVruPPPXqqCPbBuZkBJrwGrurat5O1FFdSKFeZ8sDC1l4WLRvZ%2BaJjEslfX935M7WsXBYMqrUJLC%2BvFNpKzk6ctoAmOY4V4N%2FWEj606nECQ4JxzF%2BjFn4ldpChI3nVh6nOAa1E2oYoFI602xKxIp6rzwZkGKMOzRB8gu40%2BB1V0z%2F7aoQEmYItAK6OvUrng1c%2BOhtmhMfTIHRG5UCPwcgvHKJPqW5tL5Vd1dATpnnpsKZB8wpfI6TaoKnILvmf8Gy8ouYUMMvalcAGOqUBJAUnZ02I40ZUlPshATEtrwoiIXNobrpMQEmIzRCGqFRKgPQoWjJ914w17eCJaSaMGyZ%2FoJyYs87E8e0X7bxHiO6eydPmiKguZjI4QFIi4DY9eiK3MXA4k6sMK8zNbVVakGjPVvUbVARZ7WTeoeupIDjTFL%2BK8419aDJ56qvJwVnKux5LsUgNsS5MLP1j%2FILiY%2BK7Oq%2FUtENkx2FNgv8X2EG4C3Fl&X-Amz-Signature=188591ff9ec29af0241d137ee54b1ebeff3178adfb8f6831c93ca5e8594a781a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NIUIQNY%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDXOKm3DjKybm9uodeD%2FBD7czDQ9Tnvp8FmVrf1Yq8M5AIgGYUHuXeQ5%2BfOj%2BmYqWslGFaLYQQHtWTgOS%2Bfd%2FrCrDgqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsbOYAppr2pO8k2NCrcA11Np7puRonqbn9MFX9GV9m8DEkJP89tmRf33yFvaqsFQTI0CRDJY0SeB8cJA6XjNu08lR6bLCsxrcgKB7lgMD9buWTYINAS0vjg1doyPUjRnpYMIFYP13VMC4yizaUA4Iw8Wlr%2FEcMdvIC2UIW2Yt3138bDuvFBhQeFApvanLMwwKlTRT0dELe3dtZpC%2BWZg6rU3rDxFZ9t2JgpEHi3RyAfrxKvzWJDkGqAkNMBgrxlv86mchWzXskMjpBfl3klgwR8ZkkQRbS4P8fLLwvedYy3zwUycfvU9kZ7lMD6STt7DeAOON8qUD1NcHvkcWVo2f%2FZlGN96NUvVNF%2B3KGDOuYsoojCy%2BhDprcE5jxWPSqiyP1yKl0H4DWVruPPPXqqCPbBuZkBJrwGrurat5O1FFdSKFeZ8sDC1l4WLRvZ%2BaJjEslfX935M7WsXBYMqrUJLC%2BvFNpKzk6ctoAmOY4V4N%2FWEj606nECQ4JxzF%2BjFn4ldpChI3nVh6nOAa1E2oYoFI602xKxIp6rzwZkGKMOzRB8gu40%2BB1V0z%2F7aoQEmYItAK6OvUrng1c%2BOhtmhMfTIHRG5UCPwcgvHKJPqW5tL5Vd1dATpnnpsKZB8wpfI6TaoKnILvmf8Gy8ouYUMMvalcAGOqUBJAUnZ02I40ZUlPshATEtrwoiIXNobrpMQEmIzRCGqFRKgPQoWjJ914w17eCJaSaMGyZ%2FoJyYs87E8e0X7bxHiO6eydPmiKguZjI4QFIi4DY9eiK3MXA4k6sMK8zNbVVakGjPVvUbVARZ7WTeoeupIDjTFL%2BK8419aDJ56qvJwVnKux5LsUgNsS5MLP1j%2FILiY%2BK7Oq%2FUtENkx2FNgv8X2EG4C3Fl&X-Amz-Signature=d1f3b4fe055e5d3b0f1faa2cd0aecda325cb5f2c92541387cf0fb93d5f1feb30&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NIUIQNY%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDXOKm3DjKybm9uodeD%2FBD7czDQ9Tnvp8FmVrf1Yq8M5AIgGYUHuXeQ5%2BfOj%2BmYqWslGFaLYQQHtWTgOS%2Bfd%2FrCrDgqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsbOYAppr2pO8k2NCrcA11Np7puRonqbn9MFX9GV9m8DEkJP89tmRf33yFvaqsFQTI0CRDJY0SeB8cJA6XjNu08lR6bLCsxrcgKB7lgMD9buWTYINAS0vjg1doyPUjRnpYMIFYP13VMC4yizaUA4Iw8Wlr%2FEcMdvIC2UIW2Yt3138bDuvFBhQeFApvanLMwwKlTRT0dELe3dtZpC%2BWZg6rU3rDxFZ9t2JgpEHi3RyAfrxKvzWJDkGqAkNMBgrxlv86mchWzXskMjpBfl3klgwR8ZkkQRbS4P8fLLwvedYy3zwUycfvU9kZ7lMD6STt7DeAOON8qUD1NcHvkcWVo2f%2FZlGN96NUvVNF%2B3KGDOuYsoojCy%2BhDprcE5jxWPSqiyP1yKl0H4DWVruPPPXqqCPbBuZkBJrwGrurat5O1FFdSKFeZ8sDC1l4WLRvZ%2BaJjEslfX935M7WsXBYMqrUJLC%2BvFNpKzk6ctoAmOY4V4N%2FWEj606nECQ4JxzF%2BjFn4ldpChI3nVh6nOAa1E2oYoFI602xKxIp6rzwZkGKMOzRB8gu40%2BB1V0z%2F7aoQEmYItAK6OvUrng1c%2BOhtmhMfTIHRG5UCPwcgvHKJPqW5tL5Vd1dATpnnpsKZB8wpfI6TaoKnILvmf8Gy8ouYUMMvalcAGOqUBJAUnZ02I40ZUlPshATEtrwoiIXNobrpMQEmIzRCGqFRKgPQoWjJ914w17eCJaSaMGyZ%2FoJyYs87E8e0X7bxHiO6eydPmiKguZjI4QFIi4DY9eiK3MXA4k6sMK8zNbVVakGjPVvUbVARZ7WTeoeupIDjTFL%2BK8419aDJ56qvJwVnKux5LsUgNsS5MLP1j%2FILiY%2BK7Oq%2FUtENkx2FNgv8X2EG4C3Fl&X-Amz-Signature=33f0b8e72e1720f050799d17fd0d347f8c74f732770eb4a8707b597a570c2903&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NIUIQNY%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDXOKm3DjKybm9uodeD%2FBD7czDQ9Tnvp8FmVrf1Yq8M5AIgGYUHuXeQ5%2BfOj%2BmYqWslGFaLYQQHtWTgOS%2Bfd%2FrCrDgqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsbOYAppr2pO8k2NCrcA11Np7puRonqbn9MFX9GV9m8DEkJP89tmRf33yFvaqsFQTI0CRDJY0SeB8cJA6XjNu08lR6bLCsxrcgKB7lgMD9buWTYINAS0vjg1doyPUjRnpYMIFYP13VMC4yizaUA4Iw8Wlr%2FEcMdvIC2UIW2Yt3138bDuvFBhQeFApvanLMwwKlTRT0dELe3dtZpC%2BWZg6rU3rDxFZ9t2JgpEHi3RyAfrxKvzWJDkGqAkNMBgrxlv86mchWzXskMjpBfl3klgwR8ZkkQRbS4P8fLLwvedYy3zwUycfvU9kZ7lMD6STt7DeAOON8qUD1NcHvkcWVo2f%2FZlGN96NUvVNF%2B3KGDOuYsoojCy%2BhDprcE5jxWPSqiyP1yKl0H4DWVruPPPXqqCPbBuZkBJrwGrurat5O1FFdSKFeZ8sDC1l4WLRvZ%2BaJjEslfX935M7WsXBYMqrUJLC%2BvFNpKzk6ctoAmOY4V4N%2FWEj606nECQ4JxzF%2BjFn4ldpChI3nVh6nOAa1E2oYoFI602xKxIp6rzwZkGKMOzRB8gu40%2BB1V0z%2F7aoQEmYItAK6OvUrng1c%2BOhtmhMfTIHRG5UCPwcgvHKJPqW5tL5Vd1dATpnnpsKZB8wpfI6TaoKnILvmf8Gy8ouYUMMvalcAGOqUBJAUnZ02I40ZUlPshATEtrwoiIXNobrpMQEmIzRCGqFRKgPQoWjJ914w17eCJaSaMGyZ%2FoJyYs87E8e0X7bxHiO6eydPmiKguZjI4QFIi4DY9eiK3MXA4k6sMK8zNbVVakGjPVvUbVARZ7WTeoeupIDjTFL%2BK8419aDJ56qvJwVnKux5LsUgNsS5MLP1j%2FILiY%2BK7Oq%2FUtENkx2FNgv8X2EG4C3Fl&X-Amz-Signature=57e796067ee16d78b6579041e6e19be58f33933522bf7ae79dd044229ff7b894&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NIUIQNY%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDXOKm3DjKybm9uodeD%2FBD7czDQ9Tnvp8FmVrf1Yq8M5AIgGYUHuXeQ5%2BfOj%2BmYqWslGFaLYQQHtWTgOS%2Bfd%2FrCrDgqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsbOYAppr2pO8k2NCrcA11Np7puRonqbn9MFX9GV9m8DEkJP89tmRf33yFvaqsFQTI0CRDJY0SeB8cJA6XjNu08lR6bLCsxrcgKB7lgMD9buWTYINAS0vjg1doyPUjRnpYMIFYP13VMC4yizaUA4Iw8Wlr%2FEcMdvIC2UIW2Yt3138bDuvFBhQeFApvanLMwwKlTRT0dELe3dtZpC%2BWZg6rU3rDxFZ9t2JgpEHi3RyAfrxKvzWJDkGqAkNMBgrxlv86mchWzXskMjpBfl3klgwR8ZkkQRbS4P8fLLwvedYy3zwUycfvU9kZ7lMD6STt7DeAOON8qUD1NcHvkcWVo2f%2FZlGN96NUvVNF%2B3KGDOuYsoojCy%2BhDprcE5jxWPSqiyP1yKl0H4DWVruPPPXqqCPbBuZkBJrwGrurat5O1FFdSKFeZ8sDC1l4WLRvZ%2BaJjEslfX935M7WsXBYMqrUJLC%2BvFNpKzk6ctoAmOY4V4N%2FWEj606nECQ4JxzF%2BjFn4ldpChI3nVh6nOAa1E2oYoFI602xKxIp6rzwZkGKMOzRB8gu40%2BB1V0z%2F7aoQEmYItAK6OvUrng1c%2BOhtmhMfTIHRG5UCPwcgvHKJPqW5tL5Vd1dATpnnpsKZB8wpfI6TaoKnILvmf8Gy8ouYUMMvalcAGOqUBJAUnZ02I40ZUlPshATEtrwoiIXNobrpMQEmIzRCGqFRKgPQoWjJ914w17eCJaSaMGyZ%2FoJyYs87E8e0X7bxHiO6eydPmiKguZjI4QFIi4DY9eiK3MXA4k6sMK8zNbVVakGjPVvUbVARZ7WTeoeupIDjTFL%2BK8419aDJ56qvJwVnKux5LsUgNsS5MLP1j%2FILiY%2BK7Oq%2FUtENkx2FNgv8X2EG4C3Fl&X-Amz-Signature=aee29de99dd776fada3b0b888c4e6dae6837a9c3db9b789dbf0f2af9a7946192&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NIUIQNY%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDXOKm3DjKybm9uodeD%2FBD7czDQ9Tnvp8FmVrf1Yq8M5AIgGYUHuXeQ5%2BfOj%2BmYqWslGFaLYQQHtWTgOS%2Bfd%2FrCrDgqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsbOYAppr2pO8k2NCrcA11Np7puRonqbn9MFX9GV9m8DEkJP89tmRf33yFvaqsFQTI0CRDJY0SeB8cJA6XjNu08lR6bLCsxrcgKB7lgMD9buWTYINAS0vjg1doyPUjRnpYMIFYP13VMC4yizaUA4Iw8Wlr%2FEcMdvIC2UIW2Yt3138bDuvFBhQeFApvanLMwwKlTRT0dELe3dtZpC%2BWZg6rU3rDxFZ9t2JgpEHi3RyAfrxKvzWJDkGqAkNMBgrxlv86mchWzXskMjpBfl3klgwR8ZkkQRbS4P8fLLwvedYy3zwUycfvU9kZ7lMD6STt7DeAOON8qUD1NcHvkcWVo2f%2FZlGN96NUvVNF%2B3KGDOuYsoojCy%2BhDprcE5jxWPSqiyP1yKl0H4DWVruPPPXqqCPbBuZkBJrwGrurat5O1FFdSKFeZ8sDC1l4WLRvZ%2BaJjEslfX935M7WsXBYMqrUJLC%2BvFNpKzk6ctoAmOY4V4N%2FWEj606nECQ4JxzF%2BjFn4ldpChI3nVh6nOAa1E2oYoFI602xKxIp6rzwZkGKMOzRB8gu40%2BB1V0z%2F7aoQEmYItAK6OvUrng1c%2BOhtmhMfTIHRG5UCPwcgvHKJPqW5tL5Vd1dATpnnpsKZB8wpfI6TaoKnILvmf8Gy8ouYUMMvalcAGOqUBJAUnZ02I40ZUlPshATEtrwoiIXNobrpMQEmIzRCGqFRKgPQoWjJ914w17eCJaSaMGyZ%2FoJyYs87E8e0X7bxHiO6eydPmiKguZjI4QFIi4DY9eiK3MXA4k6sMK8zNbVVakGjPVvUbVARZ7WTeoeupIDjTFL%2BK8419aDJ56qvJwVnKux5LsUgNsS5MLP1j%2FILiY%2BK7Oq%2FUtENkx2FNgv8X2EG4C3Fl&X-Amz-Signature=59be645602da74db623629d760c6f5201309c3f9339d7e0c91589119fb83030a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NIUIQNY%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDXOKm3DjKybm9uodeD%2FBD7czDQ9Tnvp8FmVrf1Yq8M5AIgGYUHuXeQ5%2BfOj%2BmYqWslGFaLYQQHtWTgOS%2Bfd%2FrCrDgqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsbOYAppr2pO8k2NCrcA11Np7puRonqbn9MFX9GV9m8DEkJP89tmRf33yFvaqsFQTI0CRDJY0SeB8cJA6XjNu08lR6bLCsxrcgKB7lgMD9buWTYINAS0vjg1doyPUjRnpYMIFYP13VMC4yizaUA4Iw8Wlr%2FEcMdvIC2UIW2Yt3138bDuvFBhQeFApvanLMwwKlTRT0dELe3dtZpC%2BWZg6rU3rDxFZ9t2JgpEHi3RyAfrxKvzWJDkGqAkNMBgrxlv86mchWzXskMjpBfl3klgwR8ZkkQRbS4P8fLLwvedYy3zwUycfvU9kZ7lMD6STt7DeAOON8qUD1NcHvkcWVo2f%2FZlGN96NUvVNF%2B3KGDOuYsoojCy%2BhDprcE5jxWPSqiyP1yKl0H4DWVruPPPXqqCPbBuZkBJrwGrurat5O1FFdSKFeZ8sDC1l4WLRvZ%2BaJjEslfX935M7WsXBYMqrUJLC%2BvFNpKzk6ctoAmOY4V4N%2FWEj606nECQ4JxzF%2BjFn4ldpChI3nVh6nOAa1E2oYoFI602xKxIp6rzwZkGKMOzRB8gu40%2BB1V0z%2F7aoQEmYItAK6OvUrng1c%2BOhtmhMfTIHRG5UCPwcgvHKJPqW5tL5Vd1dATpnnpsKZB8wpfI6TaoKnILvmf8Gy8ouYUMMvalcAGOqUBJAUnZ02I40ZUlPshATEtrwoiIXNobrpMQEmIzRCGqFRKgPQoWjJ914w17eCJaSaMGyZ%2FoJyYs87E8e0X7bxHiO6eydPmiKguZjI4QFIi4DY9eiK3MXA4k6sMK8zNbVVakGjPVvUbVARZ7WTeoeupIDjTFL%2BK8419aDJ56qvJwVnKux5LsUgNsS5MLP1j%2FILiY%2BK7Oq%2FUtENkx2FNgv8X2EG4C3Fl&X-Amz-Signature=cb07be85f50505206e71e71ce66eebe8786c28a631c2cdd7a41e1d8e00d3a5ef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NIUIQNY%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDXOKm3DjKybm9uodeD%2FBD7czDQ9Tnvp8FmVrf1Yq8M5AIgGYUHuXeQ5%2BfOj%2BmYqWslGFaLYQQHtWTgOS%2Bfd%2FrCrDgqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsbOYAppr2pO8k2NCrcA11Np7puRonqbn9MFX9GV9m8DEkJP89tmRf33yFvaqsFQTI0CRDJY0SeB8cJA6XjNu08lR6bLCsxrcgKB7lgMD9buWTYINAS0vjg1doyPUjRnpYMIFYP13VMC4yizaUA4Iw8Wlr%2FEcMdvIC2UIW2Yt3138bDuvFBhQeFApvanLMwwKlTRT0dELe3dtZpC%2BWZg6rU3rDxFZ9t2JgpEHi3RyAfrxKvzWJDkGqAkNMBgrxlv86mchWzXskMjpBfl3klgwR8ZkkQRbS4P8fLLwvedYy3zwUycfvU9kZ7lMD6STt7DeAOON8qUD1NcHvkcWVo2f%2FZlGN96NUvVNF%2B3KGDOuYsoojCy%2BhDprcE5jxWPSqiyP1yKl0H4DWVruPPPXqqCPbBuZkBJrwGrurat5O1FFdSKFeZ8sDC1l4WLRvZ%2BaJjEslfX935M7WsXBYMqrUJLC%2BvFNpKzk6ctoAmOY4V4N%2FWEj606nECQ4JxzF%2BjFn4ldpChI3nVh6nOAa1E2oYoFI602xKxIp6rzwZkGKMOzRB8gu40%2BB1V0z%2F7aoQEmYItAK6OvUrng1c%2BOhtmhMfTIHRG5UCPwcgvHKJPqW5tL5Vd1dATpnnpsKZB8wpfI6TaoKnILvmf8Gy8ouYUMMvalcAGOqUBJAUnZ02I40ZUlPshATEtrwoiIXNobrpMQEmIzRCGqFRKgPQoWjJ914w17eCJaSaMGyZ%2FoJyYs87E8e0X7bxHiO6eydPmiKguZjI4QFIi4DY9eiK3MXA4k6sMK8zNbVVakGjPVvUbVARZ7WTeoeupIDjTFL%2BK8419aDJ56qvJwVnKux5LsUgNsS5MLP1j%2FILiY%2BK7Oq%2FUtENkx2FNgv8X2EG4C3Fl&X-Amz-Signature=0322eb9e315eacbae852c53c1d950f8f2fe3e0272947756fea109bb45cd23791&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
