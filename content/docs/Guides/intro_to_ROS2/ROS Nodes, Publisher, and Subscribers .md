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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G4KYA62%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEg0GsWXeFiXLaT4Tr%2BOLcQ1EENc3xuL6hdUg%2B%2BHxoP7AiEApOGjP2WLI%2FFPFoYTgL9qXthCmf%2BdnY1nPI%2BViSUPhwoqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7bivZ2KA02Fr6l5yrcA%2FnZRkqUdWfIKSpF9ys3RwchNUWRRPiM8hyU1NZWgo%2F8LcAkdMhPZLJAcdJ%2FbJ1Db%2BZ02GOZJl21iTLkgtCL5ASfUWvvUanZeigozNdRbOuWu%2BhZYzrey2Y0TFgxi8aYUZW5LLSQ2CR1v09vhZf8162uf9xhF9rdXARoCoCJnej3%2FHjH1K53y4IwSHFB1T6rtV9Vj7iJxkQ6wtQR9Af72xSXZl0HzhGvaomFnK0sSUkYvQaJRjJ%2BmvkmLbQ8UjtIclHfkbPVRLo8ECnPpouOCvrXAJqJVdbs6%2BGdIC1fkeWfG9LONlgCLK185TmgeLIFTPcHHjYc6OI0hCa8JbyaZ2m6%2BQVIpWbhX5hY04J4l91Sbl%2BWDp%2FuVEkmMw3DKt7wiPcc3u%2BgD4atSAWX9nDhjD39CGbtuWeABadn5JPCfDs5gYS0ZtMIrZBLt9RBTO8%2Fr9G5Ibjzzeba3hlAy7iCcjJJGj2zK%2B1IBZrgz1OXT91irYaEptb3VYAGALoKKNlhxWZ6qu3aZhV2mp4omdIrncaMlncPbtYC%2FbTR6ReOwqGwGXJ4g7MflwHohstdVQ8no9v5UdG9zsc1dwnDPukmIEmKPdROLbCw%2B7fcSM97mH%2BmEff7QsEU8bjbd%2Fv7MIyLnL4GOqUBtBBviNfke4On3o5Zl3bahmj3N0Y1YBfgwmKfFPERFR0EWhCvZc82tM2nIgtWwnknIM618Eb%2B36zTLM%2Bgny%2BtQU2fkRsfh%2FRitEqY84sjJLV1sAYnSfV7LGiVsNmEebvmBOA8VP9X%2BWpdrd6PpWnCzz628NtNJwVshpAWRhkiEFJ5603k89RawU1YajtbQeYxsuCQhDylKOOMpgLew0S3%2F1VyUkb7&X-Amz-Signature=98c393e558fa3f16ee11e5c409ff8e27aa8dd0e01e36c33e0b1c9f6c9c41957b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G4KYA62%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEg0GsWXeFiXLaT4Tr%2BOLcQ1EENc3xuL6hdUg%2B%2BHxoP7AiEApOGjP2WLI%2FFPFoYTgL9qXthCmf%2BdnY1nPI%2BViSUPhwoqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7bivZ2KA02Fr6l5yrcA%2FnZRkqUdWfIKSpF9ys3RwchNUWRRPiM8hyU1NZWgo%2F8LcAkdMhPZLJAcdJ%2FbJ1Db%2BZ02GOZJl21iTLkgtCL5ASfUWvvUanZeigozNdRbOuWu%2BhZYzrey2Y0TFgxi8aYUZW5LLSQ2CR1v09vhZf8162uf9xhF9rdXARoCoCJnej3%2FHjH1K53y4IwSHFB1T6rtV9Vj7iJxkQ6wtQR9Af72xSXZl0HzhGvaomFnK0sSUkYvQaJRjJ%2BmvkmLbQ8UjtIclHfkbPVRLo8ECnPpouOCvrXAJqJVdbs6%2BGdIC1fkeWfG9LONlgCLK185TmgeLIFTPcHHjYc6OI0hCa8JbyaZ2m6%2BQVIpWbhX5hY04J4l91Sbl%2BWDp%2FuVEkmMw3DKt7wiPcc3u%2BgD4atSAWX9nDhjD39CGbtuWeABadn5JPCfDs5gYS0ZtMIrZBLt9RBTO8%2Fr9G5Ibjzzeba3hlAy7iCcjJJGj2zK%2B1IBZrgz1OXT91irYaEptb3VYAGALoKKNlhxWZ6qu3aZhV2mp4omdIrncaMlncPbtYC%2FbTR6ReOwqGwGXJ4g7MflwHohstdVQ8no9v5UdG9zsc1dwnDPukmIEmKPdROLbCw%2B7fcSM97mH%2BmEff7QsEU8bjbd%2Fv7MIyLnL4GOqUBtBBviNfke4On3o5Zl3bahmj3N0Y1YBfgwmKfFPERFR0EWhCvZc82tM2nIgtWwnknIM618Eb%2B36zTLM%2Bgny%2BtQU2fkRsfh%2FRitEqY84sjJLV1sAYnSfV7LGiVsNmEebvmBOA8VP9X%2BWpdrd6PpWnCzz628NtNJwVshpAWRhkiEFJ5603k89RawU1YajtbQeYxsuCQhDylKOOMpgLew0S3%2F1VyUkb7&X-Amz-Signature=33aa9c9b92bd916e2ff8e0581d26c39905f2df92d82152ef08c1d27ab5f880dc&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G4KYA62%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEg0GsWXeFiXLaT4Tr%2BOLcQ1EENc3xuL6hdUg%2B%2BHxoP7AiEApOGjP2WLI%2FFPFoYTgL9qXthCmf%2BdnY1nPI%2BViSUPhwoqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7bivZ2KA02Fr6l5yrcA%2FnZRkqUdWfIKSpF9ys3RwchNUWRRPiM8hyU1NZWgo%2F8LcAkdMhPZLJAcdJ%2FbJ1Db%2BZ02GOZJl21iTLkgtCL5ASfUWvvUanZeigozNdRbOuWu%2BhZYzrey2Y0TFgxi8aYUZW5LLSQ2CR1v09vhZf8162uf9xhF9rdXARoCoCJnej3%2FHjH1K53y4IwSHFB1T6rtV9Vj7iJxkQ6wtQR9Af72xSXZl0HzhGvaomFnK0sSUkYvQaJRjJ%2BmvkmLbQ8UjtIclHfkbPVRLo8ECnPpouOCvrXAJqJVdbs6%2BGdIC1fkeWfG9LONlgCLK185TmgeLIFTPcHHjYc6OI0hCa8JbyaZ2m6%2BQVIpWbhX5hY04J4l91Sbl%2BWDp%2FuVEkmMw3DKt7wiPcc3u%2BgD4atSAWX9nDhjD39CGbtuWeABadn5JPCfDs5gYS0ZtMIrZBLt9RBTO8%2Fr9G5Ibjzzeba3hlAy7iCcjJJGj2zK%2B1IBZrgz1OXT91irYaEptb3VYAGALoKKNlhxWZ6qu3aZhV2mp4omdIrncaMlncPbtYC%2FbTR6ReOwqGwGXJ4g7MflwHohstdVQ8no9v5UdG9zsc1dwnDPukmIEmKPdROLbCw%2B7fcSM97mH%2BmEff7QsEU8bjbd%2Fv7MIyLnL4GOqUBtBBviNfke4On3o5Zl3bahmj3N0Y1YBfgwmKfFPERFR0EWhCvZc82tM2nIgtWwnknIM618Eb%2B36zTLM%2Bgny%2BtQU2fkRsfh%2FRitEqY84sjJLV1sAYnSfV7LGiVsNmEebvmBOA8VP9X%2BWpdrd6PpWnCzz628NtNJwVshpAWRhkiEFJ5603k89RawU1YajtbQeYxsuCQhDylKOOMpgLew0S3%2F1VyUkb7&X-Amz-Signature=7762cf6de1a06daaf635f33e03783bcf380bdc97ab34e220bc7e2396d9d0b3d8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G4KYA62%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEg0GsWXeFiXLaT4Tr%2BOLcQ1EENc3xuL6hdUg%2B%2BHxoP7AiEApOGjP2WLI%2FFPFoYTgL9qXthCmf%2BdnY1nPI%2BViSUPhwoqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7bivZ2KA02Fr6l5yrcA%2FnZRkqUdWfIKSpF9ys3RwchNUWRRPiM8hyU1NZWgo%2F8LcAkdMhPZLJAcdJ%2FbJ1Db%2BZ02GOZJl21iTLkgtCL5ASfUWvvUanZeigozNdRbOuWu%2BhZYzrey2Y0TFgxi8aYUZW5LLSQ2CR1v09vhZf8162uf9xhF9rdXARoCoCJnej3%2FHjH1K53y4IwSHFB1T6rtV9Vj7iJxkQ6wtQR9Af72xSXZl0HzhGvaomFnK0sSUkYvQaJRjJ%2BmvkmLbQ8UjtIclHfkbPVRLo8ECnPpouOCvrXAJqJVdbs6%2BGdIC1fkeWfG9LONlgCLK185TmgeLIFTPcHHjYc6OI0hCa8JbyaZ2m6%2BQVIpWbhX5hY04J4l91Sbl%2BWDp%2FuVEkmMw3DKt7wiPcc3u%2BgD4atSAWX9nDhjD39CGbtuWeABadn5JPCfDs5gYS0ZtMIrZBLt9RBTO8%2Fr9G5Ibjzzeba3hlAy7iCcjJJGj2zK%2B1IBZrgz1OXT91irYaEptb3VYAGALoKKNlhxWZ6qu3aZhV2mp4omdIrncaMlncPbtYC%2FbTR6ReOwqGwGXJ4g7MflwHohstdVQ8no9v5UdG9zsc1dwnDPukmIEmKPdROLbCw%2B7fcSM97mH%2BmEff7QsEU8bjbd%2Fv7MIyLnL4GOqUBtBBviNfke4On3o5Zl3bahmj3N0Y1YBfgwmKfFPERFR0EWhCvZc82tM2nIgtWwnknIM618Eb%2B36zTLM%2Bgny%2BtQU2fkRsfh%2FRitEqY84sjJLV1sAYnSfV7LGiVsNmEebvmBOA8VP9X%2BWpdrd6PpWnCzz628NtNJwVshpAWRhkiEFJ5603k89RawU1YajtbQeYxsuCQhDylKOOMpgLew0S3%2F1VyUkb7&X-Amz-Signature=4059cf2759b79d0661e14e9b8d35352804ed6d1895b51e2af2f94b99fb7ec154&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G4KYA62%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEg0GsWXeFiXLaT4Tr%2BOLcQ1EENc3xuL6hdUg%2B%2BHxoP7AiEApOGjP2WLI%2FFPFoYTgL9qXthCmf%2BdnY1nPI%2BViSUPhwoqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7bivZ2KA02Fr6l5yrcA%2FnZRkqUdWfIKSpF9ys3RwchNUWRRPiM8hyU1NZWgo%2F8LcAkdMhPZLJAcdJ%2FbJ1Db%2BZ02GOZJl21iTLkgtCL5ASfUWvvUanZeigozNdRbOuWu%2BhZYzrey2Y0TFgxi8aYUZW5LLSQ2CR1v09vhZf8162uf9xhF9rdXARoCoCJnej3%2FHjH1K53y4IwSHFB1T6rtV9Vj7iJxkQ6wtQR9Af72xSXZl0HzhGvaomFnK0sSUkYvQaJRjJ%2BmvkmLbQ8UjtIclHfkbPVRLo8ECnPpouOCvrXAJqJVdbs6%2BGdIC1fkeWfG9LONlgCLK185TmgeLIFTPcHHjYc6OI0hCa8JbyaZ2m6%2BQVIpWbhX5hY04J4l91Sbl%2BWDp%2FuVEkmMw3DKt7wiPcc3u%2BgD4atSAWX9nDhjD39CGbtuWeABadn5JPCfDs5gYS0ZtMIrZBLt9RBTO8%2Fr9G5Ibjzzeba3hlAy7iCcjJJGj2zK%2B1IBZrgz1OXT91irYaEptb3VYAGALoKKNlhxWZ6qu3aZhV2mp4omdIrncaMlncPbtYC%2FbTR6ReOwqGwGXJ4g7MflwHohstdVQ8no9v5UdG9zsc1dwnDPukmIEmKPdROLbCw%2B7fcSM97mH%2BmEff7QsEU8bjbd%2Fv7MIyLnL4GOqUBtBBviNfke4On3o5Zl3bahmj3N0Y1YBfgwmKfFPERFR0EWhCvZc82tM2nIgtWwnknIM618Eb%2B36zTLM%2Bgny%2BtQU2fkRsfh%2FRitEqY84sjJLV1sAYnSfV7LGiVsNmEebvmBOA8VP9X%2BWpdrd6PpWnCzz628NtNJwVshpAWRhkiEFJ5603k89RawU1YajtbQeYxsuCQhDylKOOMpgLew0S3%2F1VyUkb7&X-Amz-Signature=51d24e6f2141ce4141d466cb71dcf8ee228bc2b4ac1322dc948ac414cab9874f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G4KYA62%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEg0GsWXeFiXLaT4Tr%2BOLcQ1EENc3xuL6hdUg%2B%2BHxoP7AiEApOGjP2WLI%2FFPFoYTgL9qXthCmf%2BdnY1nPI%2BViSUPhwoqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7bivZ2KA02Fr6l5yrcA%2FnZRkqUdWfIKSpF9ys3RwchNUWRRPiM8hyU1NZWgo%2F8LcAkdMhPZLJAcdJ%2FbJ1Db%2BZ02GOZJl21iTLkgtCL5ASfUWvvUanZeigozNdRbOuWu%2BhZYzrey2Y0TFgxi8aYUZW5LLSQ2CR1v09vhZf8162uf9xhF9rdXARoCoCJnej3%2FHjH1K53y4IwSHFB1T6rtV9Vj7iJxkQ6wtQR9Af72xSXZl0HzhGvaomFnK0sSUkYvQaJRjJ%2BmvkmLbQ8UjtIclHfkbPVRLo8ECnPpouOCvrXAJqJVdbs6%2BGdIC1fkeWfG9LONlgCLK185TmgeLIFTPcHHjYc6OI0hCa8JbyaZ2m6%2BQVIpWbhX5hY04J4l91Sbl%2BWDp%2FuVEkmMw3DKt7wiPcc3u%2BgD4atSAWX9nDhjD39CGbtuWeABadn5JPCfDs5gYS0ZtMIrZBLt9RBTO8%2Fr9G5Ibjzzeba3hlAy7iCcjJJGj2zK%2B1IBZrgz1OXT91irYaEptb3VYAGALoKKNlhxWZ6qu3aZhV2mp4omdIrncaMlncPbtYC%2FbTR6ReOwqGwGXJ4g7MflwHohstdVQ8no9v5UdG9zsc1dwnDPukmIEmKPdROLbCw%2B7fcSM97mH%2BmEff7QsEU8bjbd%2Fv7MIyLnL4GOqUBtBBviNfke4On3o5Zl3bahmj3N0Y1YBfgwmKfFPERFR0EWhCvZc82tM2nIgtWwnknIM618Eb%2B36zTLM%2Bgny%2BtQU2fkRsfh%2FRitEqY84sjJLV1sAYnSfV7LGiVsNmEebvmBOA8VP9X%2BWpdrd6PpWnCzz628NtNJwVshpAWRhkiEFJ5603k89RawU1YajtbQeYxsuCQhDylKOOMpgLew0S3%2F1VyUkb7&X-Amz-Signature=2f2b5937ce423ac505d9b7ed10962ea54366b1243a3d9d5d0cffd02227a711a9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G4KYA62%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEg0GsWXeFiXLaT4Tr%2BOLcQ1EENc3xuL6hdUg%2B%2BHxoP7AiEApOGjP2WLI%2FFPFoYTgL9qXthCmf%2BdnY1nPI%2BViSUPhwoqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7bivZ2KA02Fr6l5yrcA%2FnZRkqUdWfIKSpF9ys3RwchNUWRRPiM8hyU1NZWgo%2F8LcAkdMhPZLJAcdJ%2FbJ1Db%2BZ02GOZJl21iTLkgtCL5ASfUWvvUanZeigozNdRbOuWu%2BhZYzrey2Y0TFgxi8aYUZW5LLSQ2CR1v09vhZf8162uf9xhF9rdXARoCoCJnej3%2FHjH1K53y4IwSHFB1T6rtV9Vj7iJxkQ6wtQR9Af72xSXZl0HzhGvaomFnK0sSUkYvQaJRjJ%2BmvkmLbQ8UjtIclHfkbPVRLo8ECnPpouOCvrXAJqJVdbs6%2BGdIC1fkeWfG9LONlgCLK185TmgeLIFTPcHHjYc6OI0hCa8JbyaZ2m6%2BQVIpWbhX5hY04J4l91Sbl%2BWDp%2FuVEkmMw3DKt7wiPcc3u%2BgD4atSAWX9nDhjD39CGbtuWeABadn5JPCfDs5gYS0ZtMIrZBLt9RBTO8%2Fr9G5Ibjzzeba3hlAy7iCcjJJGj2zK%2B1IBZrgz1OXT91irYaEptb3VYAGALoKKNlhxWZ6qu3aZhV2mp4omdIrncaMlncPbtYC%2FbTR6ReOwqGwGXJ4g7MflwHohstdVQ8no9v5UdG9zsc1dwnDPukmIEmKPdROLbCw%2B7fcSM97mH%2BmEff7QsEU8bjbd%2Fv7MIyLnL4GOqUBtBBviNfke4On3o5Zl3bahmj3N0Y1YBfgwmKfFPERFR0EWhCvZc82tM2nIgtWwnknIM618Eb%2B36zTLM%2Bgny%2BtQU2fkRsfh%2FRitEqY84sjJLV1sAYnSfV7LGiVsNmEebvmBOA8VP9X%2BWpdrd6PpWnCzz628NtNJwVshpAWRhkiEFJ5603k89RawU1YajtbQeYxsuCQhDylKOOMpgLew0S3%2F1VyUkb7&X-Amz-Signature=99722ddbaa9a996f4bb954488f8b5db4e69dfb795199d1dcde845ddb670411d5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G4KYA62%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEg0GsWXeFiXLaT4Tr%2BOLcQ1EENc3xuL6hdUg%2B%2BHxoP7AiEApOGjP2WLI%2FFPFoYTgL9qXthCmf%2BdnY1nPI%2BViSUPhwoqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7bivZ2KA02Fr6l5yrcA%2FnZRkqUdWfIKSpF9ys3RwchNUWRRPiM8hyU1NZWgo%2F8LcAkdMhPZLJAcdJ%2FbJ1Db%2BZ02GOZJl21iTLkgtCL5ASfUWvvUanZeigozNdRbOuWu%2BhZYzrey2Y0TFgxi8aYUZW5LLSQ2CR1v09vhZf8162uf9xhF9rdXARoCoCJnej3%2FHjH1K53y4IwSHFB1T6rtV9Vj7iJxkQ6wtQR9Af72xSXZl0HzhGvaomFnK0sSUkYvQaJRjJ%2BmvkmLbQ8UjtIclHfkbPVRLo8ECnPpouOCvrXAJqJVdbs6%2BGdIC1fkeWfG9LONlgCLK185TmgeLIFTPcHHjYc6OI0hCa8JbyaZ2m6%2BQVIpWbhX5hY04J4l91Sbl%2BWDp%2FuVEkmMw3DKt7wiPcc3u%2BgD4atSAWX9nDhjD39CGbtuWeABadn5JPCfDs5gYS0ZtMIrZBLt9RBTO8%2Fr9G5Ibjzzeba3hlAy7iCcjJJGj2zK%2B1IBZrgz1OXT91irYaEptb3VYAGALoKKNlhxWZ6qu3aZhV2mp4omdIrncaMlncPbtYC%2FbTR6ReOwqGwGXJ4g7MflwHohstdVQ8no9v5UdG9zsc1dwnDPukmIEmKPdROLbCw%2B7fcSM97mH%2BmEff7QsEU8bjbd%2Fv7MIyLnL4GOqUBtBBviNfke4On3o5Zl3bahmj3N0Y1YBfgwmKfFPERFR0EWhCvZc82tM2nIgtWwnknIM618Eb%2B36zTLM%2Bgny%2BtQU2fkRsfh%2FRitEqY84sjJLV1sAYnSfV7LGiVsNmEebvmBOA8VP9X%2BWpdrd6PpWnCzz628NtNJwVshpAWRhkiEFJ5603k89RawU1YajtbQeYxsuCQhDylKOOMpgLew0S3%2F1VyUkb7&X-Amz-Signature=ddcd1d766ff4f84328545403170c55bdb621799d3a079ee4967ee07ec0e02713&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
