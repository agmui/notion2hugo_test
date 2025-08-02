---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GORCXGL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW8CVai4H5HSps6jjlYlEmJkEeUlEJUJywG34ctHLFZQIgfY85ntaRvfEEP0hlkHFmZTVpJYV2b2%2BfEws8DBA3BA0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDOuYTnAgiM8r608OkircAwDK%2FyIXyxAG%2FjNN8v0QESLrMoj32oOJFL6PVerPasdKOfreasjhqJUmdU%2BvZFqkSMChl7WcNTLLAgeY0KXu1UE5Eh8yIl4%2FkQs26eOLOOvK0%2FURZmXyqk7Mkkv1PO4z6Fq8v%2BlPd5dknIjKWypzo5KjUje%2Fdo%2F%2BRZ7iAhUdNiDt0YOvtVYgAafO31Ny9aBWk8GJHnObqGvN%2BwRZcDyOjRi79QHp2%2FACJQb5xJb6cJZ40CQylFbXyGbT7mc2DFpn8ZUVgmdOE8Ta%2BNn69oZhTvwp5K1cqGF%2FGDKQfJXFWrMS6rwuJ3GsMwUFk05DCLIq1GetJ23M8klaRszkR81BZhVc6uPB87iz2hLNQaIM%2Fb0otqGlUPoUV5Vz1N%2BzqfZmYwZzloBJ6znRiOZff%2Fp4wXPC8P0n%2BXo%2BgTW9opeO9dQ%2Fg5USOKezXunKvBq8fsF9MSIPheeZVDOyGOimAlA5V0%2BoSZXM9cJGk1EtN63ts4uyn7bTNqXFRD%2FMnvQGBp%2FcPYsvSdIIL3RjxNCFiDF2djaPemlFdNFpAxd7eNI%2Fakwcxwl3YgJ2Owdi%2F07c3OYfIMRwhG57OjsHxgB4eqIuXL9Zhx%2BDPAw4WHLt22Przk9Yk6XYl%2FRM2cJssQn%2BMMueucQGOqUBTs25HtG6qmjra89Sg1jaar%2FINUELGKssvR2mh%2B64gDEg%2Fxn7mWfaeeNRmS8c6lwj9yii2QLZI3IvPabWH4u5fyGDTTHPF6vpEydIZOHwpRoe3bs%2Bnq1yNhHyUu%2Fq2djBlNDqjPvuIpw3%2F6CW1KKSMWkpgTF6ROzRL2mEaPiKiHVAqKGzbVi8HhYo6%2FaCFVi%2FCwgF%2F2vkAKTIiMt%2FnD6gmhcsU41t&X-Amz-Signature=4f145cfa5aa5f1989d262043591c497d7308ed72759365d91a4b42b95fed565e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GORCXGL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW8CVai4H5HSps6jjlYlEmJkEeUlEJUJywG34ctHLFZQIgfY85ntaRvfEEP0hlkHFmZTVpJYV2b2%2BfEws8DBA3BA0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDOuYTnAgiM8r608OkircAwDK%2FyIXyxAG%2FjNN8v0QESLrMoj32oOJFL6PVerPasdKOfreasjhqJUmdU%2BvZFqkSMChl7WcNTLLAgeY0KXu1UE5Eh8yIl4%2FkQs26eOLOOvK0%2FURZmXyqk7Mkkv1PO4z6Fq8v%2BlPd5dknIjKWypzo5KjUje%2Fdo%2F%2BRZ7iAhUdNiDt0YOvtVYgAafO31Ny9aBWk8GJHnObqGvN%2BwRZcDyOjRi79QHp2%2FACJQb5xJb6cJZ40CQylFbXyGbT7mc2DFpn8ZUVgmdOE8Ta%2BNn69oZhTvwp5K1cqGF%2FGDKQfJXFWrMS6rwuJ3GsMwUFk05DCLIq1GetJ23M8klaRszkR81BZhVc6uPB87iz2hLNQaIM%2Fb0otqGlUPoUV5Vz1N%2BzqfZmYwZzloBJ6znRiOZff%2Fp4wXPC8P0n%2BXo%2BgTW9opeO9dQ%2Fg5USOKezXunKvBq8fsF9MSIPheeZVDOyGOimAlA5V0%2BoSZXM9cJGk1EtN63ts4uyn7bTNqXFRD%2FMnvQGBp%2FcPYsvSdIIL3RjxNCFiDF2djaPemlFdNFpAxd7eNI%2Fakwcxwl3YgJ2Owdi%2F07c3OYfIMRwhG57OjsHxgB4eqIuXL9Zhx%2BDPAw4WHLt22Przk9Yk6XYl%2FRM2cJssQn%2BMMueucQGOqUBTs25HtG6qmjra89Sg1jaar%2FINUELGKssvR2mh%2B64gDEg%2Fxn7mWfaeeNRmS8c6lwj9yii2QLZI3IvPabWH4u5fyGDTTHPF6vpEydIZOHwpRoe3bs%2Bnq1yNhHyUu%2Fq2djBlNDqjPvuIpw3%2F6CW1KKSMWkpgTF6ROzRL2mEaPiKiHVAqKGzbVi8HhYo6%2FaCFVi%2FCwgF%2F2vkAKTIiMt%2FnD6gmhcsU41t&X-Amz-Signature=3c1e94cffad03296799aff092a58e688443fb9f773afd0219f17a927173a80d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GORCXGL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW8CVai4H5HSps6jjlYlEmJkEeUlEJUJywG34ctHLFZQIgfY85ntaRvfEEP0hlkHFmZTVpJYV2b2%2BfEws8DBA3BA0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDOuYTnAgiM8r608OkircAwDK%2FyIXyxAG%2FjNN8v0QESLrMoj32oOJFL6PVerPasdKOfreasjhqJUmdU%2BvZFqkSMChl7WcNTLLAgeY0KXu1UE5Eh8yIl4%2FkQs26eOLOOvK0%2FURZmXyqk7Mkkv1PO4z6Fq8v%2BlPd5dknIjKWypzo5KjUje%2Fdo%2F%2BRZ7iAhUdNiDt0YOvtVYgAafO31Ny9aBWk8GJHnObqGvN%2BwRZcDyOjRi79QHp2%2FACJQb5xJb6cJZ40CQylFbXyGbT7mc2DFpn8ZUVgmdOE8Ta%2BNn69oZhTvwp5K1cqGF%2FGDKQfJXFWrMS6rwuJ3GsMwUFk05DCLIq1GetJ23M8klaRszkR81BZhVc6uPB87iz2hLNQaIM%2Fb0otqGlUPoUV5Vz1N%2BzqfZmYwZzloBJ6znRiOZff%2Fp4wXPC8P0n%2BXo%2BgTW9opeO9dQ%2Fg5USOKezXunKvBq8fsF9MSIPheeZVDOyGOimAlA5V0%2BoSZXM9cJGk1EtN63ts4uyn7bTNqXFRD%2FMnvQGBp%2FcPYsvSdIIL3RjxNCFiDF2djaPemlFdNFpAxd7eNI%2Fakwcxwl3YgJ2Owdi%2F07c3OYfIMRwhG57OjsHxgB4eqIuXL9Zhx%2BDPAw4WHLt22Przk9Yk6XYl%2FRM2cJssQn%2BMMueucQGOqUBTs25HtG6qmjra89Sg1jaar%2FINUELGKssvR2mh%2B64gDEg%2Fxn7mWfaeeNRmS8c6lwj9yii2QLZI3IvPabWH4u5fyGDTTHPF6vpEydIZOHwpRoe3bs%2Bnq1yNhHyUu%2Fq2djBlNDqjPvuIpw3%2F6CW1KKSMWkpgTF6ROzRL2mEaPiKiHVAqKGzbVi8HhYo6%2FaCFVi%2FCwgF%2F2vkAKTIiMt%2FnD6gmhcsU41t&X-Amz-Signature=ca77e8681df3bd545b8d1b901116e1cdea4064875f5f7e8b76d27133f2f20209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GORCXGL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW8CVai4H5HSps6jjlYlEmJkEeUlEJUJywG34ctHLFZQIgfY85ntaRvfEEP0hlkHFmZTVpJYV2b2%2BfEws8DBA3BA0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDOuYTnAgiM8r608OkircAwDK%2FyIXyxAG%2FjNN8v0QESLrMoj32oOJFL6PVerPasdKOfreasjhqJUmdU%2BvZFqkSMChl7WcNTLLAgeY0KXu1UE5Eh8yIl4%2FkQs26eOLOOvK0%2FURZmXyqk7Mkkv1PO4z6Fq8v%2BlPd5dknIjKWypzo5KjUje%2Fdo%2F%2BRZ7iAhUdNiDt0YOvtVYgAafO31Ny9aBWk8GJHnObqGvN%2BwRZcDyOjRi79QHp2%2FACJQb5xJb6cJZ40CQylFbXyGbT7mc2DFpn8ZUVgmdOE8Ta%2BNn69oZhTvwp5K1cqGF%2FGDKQfJXFWrMS6rwuJ3GsMwUFk05DCLIq1GetJ23M8klaRszkR81BZhVc6uPB87iz2hLNQaIM%2Fb0otqGlUPoUV5Vz1N%2BzqfZmYwZzloBJ6znRiOZff%2Fp4wXPC8P0n%2BXo%2BgTW9opeO9dQ%2Fg5USOKezXunKvBq8fsF9MSIPheeZVDOyGOimAlA5V0%2BoSZXM9cJGk1EtN63ts4uyn7bTNqXFRD%2FMnvQGBp%2FcPYsvSdIIL3RjxNCFiDF2djaPemlFdNFpAxd7eNI%2Fakwcxwl3YgJ2Owdi%2F07c3OYfIMRwhG57OjsHxgB4eqIuXL9Zhx%2BDPAw4WHLt22Przk9Yk6XYl%2FRM2cJssQn%2BMMueucQGOqUBTs25HtG6qmjra89Sg1jaar%2FINUELGKssvR2mh%2B64gDEg%2Fxn7mWfaeeNRmS8c6lwj9yii2QLZI3IvPabWH4u5fyGDTTHPF6vpEydIZOHwpRoe3bs%2Bnq1yNhHyUu%2Fq2djBlNDqjPvuIpw3%2F6CW1KKSMWkpgTF6ROzRL2mEaPiKiHVAqKGzbVi8HhYo6%2FaCFVi%2FCwgF%2F2vkAKTIiMt%2FnD6gmhcsU41t&X-Amz-Signature=74a46e2501a8b3db98e575c12781bd6638f8712d3fe5c7196e5c64690cde898c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GORCXGL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW8CVai4H5HSps6jjlYlEmJkEeUlEJUJywG34ctHLFZQIgfY85ntaRvfEEP0hlkHFmZTVpJYV2b2%2BfEws8DBA3BA0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDOuYTnAgiM8r608OkircAwDK%2FyIXyxAG%2FjNN8v0QESLrMoj32oOJFL6PVerPasdKOfreasjhqJUmdU%2BvZFqkSMChl7WcNTLLAgeY0KXu1UE5Eh8yIl4%2FkQs26eOLOOvK0%2FURZmXyqk7Mkkv1PO4z6Fq8v%2BlPd5dknIjKWypzo5KjUje%2Fdo%2F%2BRZ7iAhUdNiDt0YOvtVYgAafO31Ny9aBWk8GJHnObqGvN%2BwRZcDyOjRi79QHp2%2FACJQb5xJb6cJZ40CQylFbXyGbT7mc2DFpn8ZUVgmdOE8Ta%2BNn69oZhTvwp5K1cqGF%2FGDKQfJXFWrMS6rwuJ3GsMwUFk05DCLIq1GetJ23M8klaRszkR81BZhVc6uPB87iz2hLNQaIM%2Fb0otqGlUPoUV5Vz1N%2BzqfZmYwZzloBJ6znRiOZff%2Fp4wXPC8P0n%2BXo%2BgTW9opeO9dQ%2Fg5USOKezXunKvBq8fsF9MSIPheeZVDOyGOimAlA5V0%2BoSZXM9cJGk1EtN63ts4uyn7bTNqXFRD%2FMnvQGBp%2FcPYsvSdIIL3RjxNCFiDF2djaPemlFdNFpAxd7eNI%2Fakwcxwl3YgJ2Owdi%2F07c3OYfIMRwhG57OjsHxgB4eqIuXL9Zhx%2BDPAw4WHLt22Przk9Yk6XYl%2FRM2cJssQn%2BMMueucQGOqUBTs25HtG6qmjra89Sg1jaar%2FINUELGKssvR2mh%2B64gDEg%2Fxn7mWfaeeNRmS8c6lwj9yii2QLZI3IvPabWH4u5fyGDTTHPF6vpEydIZOHwpRoe3bs%2Bnq1yNhHyUu%2Fq2djBlNDqjPvuIpw3%2F6CW1KKSMWkpgTF6ROzRL2mEaPiKiHVAqKGzbVi8HhYo6%2FaCFVi%2FCwgF%2F2vkAKTIiMt%2FnD6gmhcsU41t&X-Amz-Signature=b8741c8c893cafdca6c267fd42584bf975d764ef2ad43f073d89f6f213fada06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GORCXGL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW8CVai4H5HSps6jjlYlEmJkEeUlEJUJywG34ctHLFZQIgfY85ntaRvfEEP0hlkHFmZTVpJYV2b2%2BfEws8DBA3BA0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDOuYTnAgiM8r608OkircAwDK%2FyIXyxAG%2FjNN8v0QESLrMoj32oOJFL6PVerPasdKOfreasjhqJUmdU%2BvZFqkSMChl7WcNTLLAgeY0KXu1UE5Eh8yIl4%2FkQs26eOLOOvK0%2FURZmXyqk7Mkkv1PO4z6Fq8v%2BlPd5dknIjKWypzo5KjUje%2Fdo%2F%2BRZ7iAhUdNiDt0YOvtVYgAafO31Ny9aBWk8GJHnObqGvN%2BwRZcDyOjRi79QHp2%2FACJQb5xJb6cJZ40CQylFbXyGbT7mc2DFpn8ZUVgmdOE8Ta%2BNn69oZhTvwp5K1cqGF%2FGDKQfJXFWrMS6rwuJ3GsMwUFk05DCLIq1GetJ23M8klaRszkR81BZhVc6uPB87iz2hLNQaIM%2Fb0otqGlUPoUV5Vz1N%2BzqfZmYwZzloBJ6znRiOZff%2Fp4wXPC8P0n%2BXo%2BgTW9opeO9dQ%2Fg5USOKezXunKvBq8fsF9MSIPheeZVDOyGOimAlA5V0%2BoSZXM9cJGk1EtN63ts4uyn7bTNqXFRD%2FMnvQGBp%2FcPYsvSdIIL3RjxNCFiDF2djaPemlFdNFpAxd7eNI%2Fakwcxwl3YgJ2Owdi%2F07c3OYfIMRwhG57OjsHxgB4eqIuXL9Zhx%2BDPAw4WHLt22Przk9Yk6XYl%2FRM2cJssQn%2BMMueucQGOqUBTs25HtG6qmjra89Sg1jaar%2FINUELGKssvR2mh%2B64gDEg%2Fxn7mWfaeeNRmS8c6lwj9yii2QLZI3IvPabWH4u5fyGDTTHPF6vpEydIZOHwpRoe3bs%2Bnq1yNhHyUu%2Fq2djBlNDqjPvuIpw3%2F6CW1KKSMWkpgTF6ROzRL2mEaPiKiHVAqKGzbVi8HhYo6%2FaCFVi%2FCwgF%2F2vkAKTIiMt%2FnD6gmhcsU41t&X-Amz-Signature=336de0b083ea953461aeea93f17af6710db790328c51d6e5987e4f419aa1197f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GORCXGL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW8CVai4H5HSps6jjlYlEmJkEeUlEJUJywG34ctHLFZQIgfY85ntaRvfEEP0hlkHFmZTVpJYV2b2%2BfEws8DBA3BA0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDOuYTnAgiM8r608OkircAwDK%2FyIXyxAG%2FjNN8v0QESLrMoj32oOJFL6PVerPasdKOfreasjhqJUmdU%2BvZFqkSMChl7WcNTLLAgeY0KXu1UE5Eh8yIl4%2FkQs26eOLOOvK0%2FURZmXyqk7Mkkv1PO4z6Fq8v%2BlPd5dknIjKWypzo5KjUje%2Fdo%2F%2BRZ7iAhUdNiDt0YOvtVYgAafO31Ny9aBWk8GJHnObqGvN%2BwRZcDyOjRi79QHp2%2FACJQb5xJb6cJZ40CQylFbXyGbT7mc2DFpn8ZUVgmdOE8Ta%2BNn69oZhTvwp5K1cqGF%2FGDKQfJXFWrMS6rwuJ3GsMwUFk05DCLIq1GetJ23M8klaRszkR81BZhVc6uPB87iz2hLNQaIM%2Fb0otqGlUPoUV5Vz1N%2BzqfZmYwZzloBJ6znRiOZff%2Fp4wXPC8P0n%2BXo%2BgTW9opeO9dQ%2Fg5USOKezXunKvBq8fsF9MSIPheeZVDOyGOimAlA5V0%2BoSZXM9cJGk1EtN63ts4uyn7bTNqXFRD%2FMnvQGBp%2FcPYsvSdIIL3RjxNCFiDF2djaPemlFdNFpAxd7eNI%2Fakwcxwl3YgJ2Owdi%2F07c3OYfIMRwhG57OjsHxgB4eqIuXL9Zhx%2BDPAw4WHLt22Przk9Yk6XYl%2FRM2cJssQn%2BMMueucQGOqUBTs25HtG6qmjra89Sg1jaar%2FINUELGKssvR2mh%2B64gDEg%2Fxn7mWfaeeNRmS8c6lwj9yii2QLZI3IvPabWH4u5fyGDTTHPF6vpEydIZOHwpRoe3bs%2Bnq1yNhHyUu%2Fq2djBlNDqjPvuIpw3%2F6CW1KKSMWkpgTF6ROzRL2mEaPiKiHVAqKGzbVi8HhYo6%2FaCFVi%2FCwgF%2F2vkAKTIiMt%2FnD6gmhcsU41t&X-Amz-Signature=aa306a9305c9cead8a3fb9a7502763b112b74d2823e8f1e093f98674dd340cad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GORCXGL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW8CVai4H5HSps6jjlYlEmJkEeUlEJUJywG34ctHLFZQIgfY85ntaRvfEEP0hlkHFmZTVpJYV2b2%2BfEws8DBA3BA0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDOuYTnAgiM8r608OkircAwDK%2FyIXyxAG%2FjNN8v0QESLrMoj32oOJFL6PVerPasdKOfreasjhqJUmdU%2BvZFqkSMChl7WcNTLLAgeY0KXu1UE5Eh8yIl4%2FkQs26eOLOOvK0%2FURZmXyqk7Mkkv1PO4z6Fq8v%2BlPd5dknIjKWypzo5KjUje%2Fdo%2F%2BRZ7iAhUdNiDt0YOvtVYgAafO31Ny9aBWk8GJHnObqGvN%2BwRZcDyOjRi79QHp2%2FACJQb5xJb6cJZ40CQylFbXyGbT7mc2DFpn8ZUVgmdOE8Ta%2BNn69oZhTvwp5K1cqGF%2FGDKQfJXFWrMS6rwuJ3GsMwUFk05DCLIq1GetJ23M8klaRszkR81BZhVc6uPB87iz2hLNQaIM%2Fb0otqGlUPoUV5Vz1N%2BzqfZmYwZzloBJ6znRiOZff%2Fp4wXPC8P0n%2BXo%2BgTW9opeO9dQ%2Fg5USOKezXunKvBq8fsF9MSIPheeZVDOyGOimAlA5V0%2BoSZXM9cJGk1EtN63ts4uyn7bTNqXFRD%2FMnvQGBp%2FcPYsvSdIIL3RjxNCFiDF2djaPemlFdNFpAxd7eNI%2Fakwcxwl3YgJ2Owdi%2F07c3OYfIMRwhG57OjsHxgB4eqIuXL9Zhx%2BDPAw4WHLt22Przk9Yk6XYl%2FRM2cJssQn%2BMMueucQGOqUBTs25HtG6qmjra89Sg1jaar%2FINUELGKssvR2mh%2B64gDEg%2Fxn7mWfaeeNRmS8c6lwj9yii2QLZI3IvPabWH4u5fyGDTTHPF6vpEydIZOHwpRoe3bs%2Bnq1yNhHyUu%2Fq2djBlNDqjPvuIpw3%2F6CW1KKSMWkpgTF6ROzRL2mEaPiKiHVAqKGzbVi8HhYo6%2FaCFVi%2FCwgF%2F2vkAKTIiMt%2FnD6gmhcsU41t&X-Amz-Signature=b9d3e235aca52c95a06297e068416d58c8f200a516b9f09f2a3af15cac3bd199&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
