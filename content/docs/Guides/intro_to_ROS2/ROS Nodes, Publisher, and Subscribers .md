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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676BJW7YC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T003746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDkKqoBwYWFnzDnF9wPX1oNZTISIIdrTfbGde4mer9mgIgXQwrshKki7PRSEBq3M4evoKeoizq1324lxG5xg%2FkMc4q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDLXDNNYbqn70YooYRCrcA1AvbbgX7qTkCGlUFcaKlX5BYaoX1TfKWAMLcVtFWq3zFlVWpZN9obJhZff2kpsgpU4dkdgMgRF7Zhy2xjfcE3jO61bdGsBD%2FPjxc2oq6QsfQm6zSuvctLtEPlQNHsnzfQU1%2FlHYaVGOr2bt2IhDaHb%2BMcaRu0pjP1EXhHLglUapoKCKMADd8KDcgk93fJfSgo3JU2a5rynBrnxM%2B0rxyTAQV5%2FzdDyyQeY8Z3tjh0j7yAwg%2F0IiG7skwH1cyojspUlf20TSW%2FSunt3wZUQNPGDX2Q0LQpUtJE4544MEMKFU%2BAJQadbXfRsmCA5FAsCvzbV%2BziJb9ZSsYcy0o%2F65Fme9ukD%2By6kW75zmFMkiV%2BTxduUMfQUdsB8h4ttj%2Bj0bt1wPq1EaZ%2BRg4OSh0jbBBwrkCfFw%2BwI4DUReiJXJmSauhbiYMQ4iVA1%2FhV9j7huzYf%2BNSLqjTBgqtCmbkmTdzTHGTJ%2BHoGmYE4WWDAGoX75m9i37twDapCXJeCl29TgasLGiAGvOjr3TcpiH9SbZT7nTzz%2FgVfVvgWKu%2Fuf13CJqH6eXRz1yv4NUQORFQQL%2F8hMC%2BRQEg3Xs6SMK8PQ0Qd4U6DNw4WelFKIqvwmT2VL24kh88QooednsbIK8ML%2FGo74GOqUBZ3wcIlT0s0zTUrdTP3lneRzA62u5sOxaX7Zd9JjUbhtFCSeCyYRkzOVaj2wwVFuj1ml4c3lviuhsK2I7Z71GwP2w6PBcpzdXIAGhi0EXJjAoEVN587b9J3pEqSfcMO4F28VoMJqUAVSmMzjfgSwwieq6wDubWw13TvtlMjFkLNyK7bQvFh%2FISimY%2BU4tUCds51cnk8Zakf7zdm5GlHxgUqY0cGEi&X-Amz-Signature=34ac425d3783e03353942c0619eaa371d0de4ce2df4384aade267bd1069d3029&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676BJW7YC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T003746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDkKqoBwYWFnzDnF9wPX1oNZTISIIdrTfbGde4mer9mgIgXQwrshKki7PRSEBq3M4evoKeoizq1324lxG5xg%2FkMc4q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDLXDNNYbqn70YooYRCrcA1AvbbgX7qTkCGlUFcaKlX5BYaoX1TfKWAMLcVtFWq3zFlVWpZN9obJhZff2kpsgpU4dkdgMgRF7Zhy2xjfcE3jO61bdGsBD%2FPjxc2oq6QsfQm6zSuvctLtEPlQNHsnzfQU1%2FlHYaVGOr2bt2IhDaHb%2BMcaRu0pjP1EXhHLglUapoKCKMADd8KDcgk93fJfSgo3JU2a5rynBrnxM%2B0rxyTAQV5%2FzdDyyQeY8Z3tjh0j7yAwg%2F0IiG7skwH1cyojspUlf20TSW%2FSunt3wZUQNPGDX2Q0LQpUtJE4544MEMKFU%2BAJQadbXfRsmCA5FAsCvzbV%2BziJb9ZSsYcy0o%2F65Fme9ukD%2By6kW75zmFMkiV%2BTxduUMfQUdsB8h4ttj%2Bj0bt1wPq1EaZ%2BRg4OSh0jbBBwrkCfFw%2BwI4DUReiJXJmSauhbiYMQ4iVA1%2FhV9j7huzYf%2BNSLqjTBgqtCmbkmTdzTHGTJ%2BHoGmYE4WWDAGoX75m9i37twDapCXJeCl29TgasLGiAGvOjr3TcpiH9SbZT7nTzz%2FgVfVvgWKu%2Fuf13CJqH6eXRz1yv4NUQORFQQL%2F8hMC%2BRQEg3Xs6SMK8PQ0Qd4U6DNw4WelFKIqvwmT2VL24kh88QooednsbIK8ML%2FGo74GOqUBZ3wcIlT0s0zTUrdTP3lneRzA62u5sOxaX7Zd9JjUbhtFCSeCyYRkzOVaj2wwVFuj1ml4c3lviuhsK2I7Z71GwP2w6PBcpzdXIAGhi0EXJjAoEVN587b9J3pEqSfcMO4F28VoMJqUAVSmMzjfgSwwieq6wDubWw13TvtlMjFkLNyK7bQvFh%2FISimY%2BU4tUCds51cnk8Zakf7zdm5GlHxgUqY0cGEi&X-Amz-Signature=a77e5a74a07c98d9791ce54630152f0bcfd72878a5da526ee3ff76311370e736&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676BJW7YC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T003746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDkKqoBwYWFnzDnF9wPX1oNZTISIIdrTfbGde4mer9mgIgXQwrshKki7PRSEBq3M4evoKeoizq1324lxG5xg%2FkMc4q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDLXDNNYbqn70YooYRCrcA1AvbbgX7qTkCGlUFcaKlX5BYaoX1TfKWAMLcVtFWq3zFlVWpZN9obJhZff2kpsgpU4dkdgMgRF7Zhy2xjfcE3jO61bdGsBD%2FPjxc2oq6QsfQm6zSuvctLtEPlQNHsnzfQU1%2FlHYaVGOr2bt2IhDaHb%2BMcaRu0pjP1EXhHLglUapoKCKMADd8KDcgk93fJfSgo3JU2a5rynBrnxM%2B0rxyTAQV5%2FzdDyyQeY8Z3tjh0j7yAwg%2F0IiG7skwH1cyojspUlf20TSW%2FSunt3wZUQNPGDX2Q0LQpUtJE4544MEMKFU%2BAJQadbXfRsmCA5FAsCvzbV%2BziJb9ZSsYcy0o%2F65Fme9ukD%2By6kW75zmFMkiV%2BTxduUMfQUdsB8h4ttj%2Bj0bt1wPq1EaZ%2BRg4OSh0jbBBwrkCfFw%2BwI4DUReiJXJmSauhbiYMQ4iVA1%2FhV9j7huzYf%2BNSLqjTBgqtCmbkmTdzTHGTJ%2BHoGmYE4WWDAGoX75m9i37twDapCXJeCl29TgasLGiAGvOjr3TcpiH9SbZT7nTzz%2FgVfVvgWKu%2Fuf13CJqH6eXRz1yv4NUQORFQQL%2F8hMC%2BRQEg3Xs6SMK8PQ0Qd4U6DNw4WelFKIqvwmT2VL24kh88QooednsbIK8ML%2FGo74GOqUBZ3wcIlT0s0zTUrdTP3lneRzA62u5sOxaX7Zd9JjUbhtFCSeCyYRkzOVaj2wwVFuj1ml4c3lviuhsK2I7Z71GwP2w6PBcpzdXIAGhi0EXJjAoEVN587b9J3pEqSfcMO4F28VoMJqUAVSmMzjfgSwwieq6wDubWw13TvtlMjFkLNyK7bQvFh%2FISimY%2BU4tUCds51cnk8Zakf7zdm5GlHxgUqY0cGEi&X-Amz-Signature=f30a382fb5c4c3c16907ff4ae45bf65f63eae152f6beb87b08a38f215005c4de&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676BJW7YC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T003746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDkKqoBwYWFnzDnF9wPX1oNZTISIIdrTfbGde4mer9mgIgXQwrshKki7PRSEBq3M4evoKeoizq1324lxG5xg%2FkMc4q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDLXDNNYbqn70YooYRCrcA1AvbbgX7qTkCGlUFcaKlX5BYaoX1TfKWAMLcVtFWq3zFlVWpZN9obJhZff2kpsgpU4dkdgMgRF7Zhy2xjfcE3jO61bdGsBD%2FPjxc2oq6QsfQm6zSuvctLtEPlQNHsnzfQU1%2FlHYaVGOr2bt2IhDaHb%2BMcaRu0pjP1EXhHLglUapoKCKMADd8KDcgk93fJfSgo3JU2a5rynBrnxM%2B0rxyTAQV5%2FzdDyyQeY8Z3tjh0j7yAwg%2F0IiG7skwH1cyojspUlf20TSW%2FSunt3wZUQNPGDX2Q0LQpUtJE4544MEMKFU%2BAJQadbXfRsmCA5FAsCvzbV%2BziJb9ZSsYcy0o%2F65Fme9ukD%2By6kW75zmFMkiV%2BTxduUMfQUdsB8h4ttj%2Bj0bt1wPq1EaZ%2BRg4OSh0jbBBwrkCfFw%2BwI4DUReiJXJmSauhbiYMQ4iVA1%2FhV9j7huzYf%2BNSLqjTBgqtCmbkmTdzTHGTJ%2BHoGmYE4WWDAGoX75m9i37twDapCXJeCl29TgasLGiAGvOjr3TcpiH9SbZT7nTzz%2FgVfVvgWKu%2Fuf13CJqH6eXRz1yv4NUQORFQQL%2F8hMC%2BRQEg3Xs6SMK8PQ0Qd4U6DNw4WelFKIqvwmT2VL24kh88QooednsbIK8ML%2FGo74GOqUBZ3wcIlT0s0zTUrdTP3lneRzA62u5sOxaX7Zd9JjUbhtFCSeCyYRkzOVaj2wwVFuj1ml4c3lviuhsK2I7Z71GwP2w6PBcpzdXIAGhi0EXJjAoEVN587b9J3pEqSfcMO4F28VoMJqUAVSmMzjfgSwwieq6wDubWw13TvtlMjFkLNyK7bQvFh%2FISimY%2BU4tUCds51cnk8Zakf7zdm5GlHxgUqY0cGEi&X-Amz-Signature=1ad3931e6ab6f4f9fc79e08549a310a7fa1268232f839af2bba4bd34623d1bc6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676BJW7YC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T003746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDkKqoBwYWFnzDnF9wPX1oNZTISIIdrTfbGde4mer9mgIgXQwrshKki7PRSEBq3M4evoKeoizq1324lxG5xg%2FkMc4q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDLXDNNYbqn70YooYRCrcA1AvbbgX7qTkCGlUFcaKlX5BYaoX1TfKWAMLcVtFWq3zFlVWpZN9obJhZff2kpsgpU4dkdgMgRF7Zhy2xjfcE3jO61bdGsBD%2FPjxc2oq6QsfQm6zSuvctLtEPlQNHsnzfQU1%2FlHYaVGOr2bt2IhDaHb%2BMcaRu0pjP1EXhHLglUapoKCKMADd8KDcgk93fJfSgo3JU2a5rynBrnxM%2B0rxyTAQV5%2FzdDyyQeY8Z3tjh0j7yAwg%2F0IiG7skwH1cyojspUlf20TSW%2FSunt3wZUQNPGDX2Q0LQpUtJE4544MEMKFU%2BAJQadbXfRsmCA5FAsCvzbV%2BziJb9ZSsYcy0o%2F65Fme9ukD%2By6kW75zmFMkiV%2BTxduUMfQUdsB8h4ttj%2Bj0bt1wPq1EaZ%2BRg4OSh0jbBBwrkCfFw%2BwI4DUReiJXJmSauhbiYMQ4iVA1%2FhV9j7huzYf%2BNSLqjTBgqtCmbkmTdzTHGTJ%2BHoGmYE4WWDAGoX75m9i37twDapCXJeCl29TgasLGiAGvOjr3TcpiH9SbZT7nTzz%2FgVfVvgWKu%2Fuf13CJqH6eXRz1yv4NUQORFQQL%2F8hMC%2BRQEg3Xs6SMK8PQ0Qd4U6DNw4WelFKIqvwmT2VL24kh88QooednsbIK8ML%2FGo74GOqUBZ3wcIlT0s0zTUrdTP3lneRzA62u5sOxaX7Zd9JjUbhtFCSeCyYRkzOVaj2wwVFuj1ml4c3lviuhsK2I7Z71GwP2w6PBcpzdXIAGhi0EXJjAoEVN587b9J3pEqSfcMO4F28VoMJqUAVSmMzjfgSwwieq6wDubWw13TvtlMjFkLNyK7bQvFh%2FISimY%2BU4tUCds51cnk8Zakf7zdm5GlHxgUqY0cGEi&X-Amz-Signature=d7492b0fe545a2f81474a2564edbed125c546b8af85863f127d50c7b92ba044c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676BJW7YC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T003746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDkKqoBwYWFnzDnF9wPX1oNZTISIIdrTfbGde4mer9mgIgXQwrshKki7PRSEBq3M4evoKeoizq1324lxG5xg%2FkMc4q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDLXDNNYbqn70YooYRCrcA1AvbbgX7qTkCGlUFcaKlX5BYaoX1TfKWAMLcVtFWq3zFlVWpZN9obJhZff2kpsgpU4dkdgMgRF7Zhy2xjfcE3jO61bdGsBD%2FPjxc2oq6QsfQm6zSuvctLtEPlQNHsnzfQU1%2FlHYaVGOr2bt2IhDaHb%2BMcaRu0pjP1EXhHLglUapoKCKMADd8KDcgk93fJfSgo3JU2a5rynBrnxM%2B0rxyTAQV5%2FzdDyyQeY8Z3tjh0j7yAwg%2F0IiG7skwH1cyojspUlf20TSW%2FSunt3wZUQNPGDX2Q0LQpUtJE4544MEMKFU%2BAJQadbXfRsmCA5FAsCvzbV%2BziJb9ZSsYcy0o%2F65Fme9ukD%2By6kW75zmFMkiV%2BTxduUMfQUdsB8h4ttj%2Bj0bt1wPq1EaZ%2BRg4OSh0jbBBwrkCfFw%2BwI4DUReiJXJmSauhbiYMQ4iVA1%2FhV9j7huzYf%2BNSLqjTBgqtCmbkmTdzTHGTJ%2BHoGmYE4WWDAGoX75m9i37twDapCXJeCl29TgasLGiAGvOjr3TcpiH9SbZT7nTzz%2FgVfVvgWKu%2Fuf13CJqH6eXRz1yv4NUQORFQQL%2F8hMC%2BRQEg3Xs6SMK8PQ0Qd4U6DNw4WelFKIqvwmT2VL24kh88QooednsbIK8ML%2FGo74GOqUBZ3wcIlT0s0zTUrdTP3lneRzA62u5sOxaX7Zd9JjUbhtFCSeCyYRkzOVaj2wwVFuj1ml4c3lviuhsK2I7Z71GwP2w6PBcpzdXIAGhi0EXJjAoEVN587b9J3pEqSfcMO4F28VoMJqUAVSmMzjfgSwwieq6wDubWw13TvtlMjFkLNyK7bQvFh%2FISimY%2BU4tUCds51cnk8Zakf7zdm5GlHxgUqY0cGEi&X-Amz-Signature=a89b5fd067f9540a96bff3f5f6c6b0377cf780bc78819b3c11ee89b2f1a708dc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676BJW7YC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T003746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDkKqoBwYWFnzDnF9wPX1oNZTISIIdrTfbGde4mer9mgIgXQwrshKki7PRSEBq3M4evoKeoizq1324lxG5xg%2FkMc4q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDLXDNNYbqn70YooYRCrcA1AvbbgX7qTkCGlUFcaKlX5BYaoX1TfKWAMLcVtFWq3zFlVWpZN9obJhZff2kpsgpU4dkdgMgRF7Zhy2xjfcE3jO61bdGsBD%2FPjxc2oq6QsfQm6zSuvctLtEPlQNHsnzfQU1%2FlHYaVGOr2bt2IhDaHb%2BMcaRu0pjP1EXhHLglUapoKCKMADd8KDcgk93fJfSgo3JU2a5rynBrnxM%2B0rxyTAQV5%2FzdDyyQeY8Z3tjh0j7yAwg%2F0IiG7skwH1cyojspUlf20TSW%2FSunt3wZUQNPGDX2Q0LQpUtJE4544MEMKFU%2BAJQadbXfRsmCA5FAsCvzbV%2BziJb9ZSsYcy0o%2F65Fme9ukD%2By6kW75zmFMkiV%2BTxduUMfQUdsB8h4ttj%2Bj0bt1wPq1EaZ%2BRg4OSh0jbBBwrkCfFw%2BwI4DUReiJXJmSauhbiYMQ4iVA1%2FhV9j7huzYf%2BNSLqjTBgqtCmbkmTdzTHGTJ%2BHoGmYE4WWDAGoX75m9i37twDapCXJeCl29TgasLGiAGvOjr3TcpiH9SbZT7nTzz%2FgVfVvgWKu%2Fuf13CJqH6eXRz1yv4NUQORFQQL%2F8hMC%2BRQEg3Xs6SMK8PQ0Qd4U6DNw4WelFKIqvwmT2VL24kh88QooednsbIK8ML%2FGo74GOqUBZ3wcIlT0s0zTUrdTP3lneRzA62u5sOxaX7Zd9JjUbhtFCSeCyYRkzOVaj2wwVFuj1ml4c3lviuhsK2I7Z71GwP2w6PBcpzdXIAGhi0EXJjAoEVN587b9J3pEqSfcMO4F28VoMJqUAVSmMzjfgSwwieq6wDubWw13TvtlMjFkLNyK7bQvFh%2FISimY%2BU4tUCds51cnk8Zakf7zdm5GlHxgUqY0cGEi&X-Amz-Signature=f95f5936878e4f24d5dd8774369881f1b51de71c97a3c94229cc8f91ffe1899d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676BJW7YC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T003746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDkKqoBwYWFnzDnF9wPX1oNZTISIIdrTfbGde4mer9mgIgXQwrshKki7PRSEBq3M4evoKeoizq1324lxG5xg%2FkMc4q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDLXDNNYbqn70YooYRCrcA1AvbbgX7qTkCGlUFcaKlX5BYaoX1TfKWAMLcVtFWq3zFlVWpZN9obJhZff2kpsgpU4dkdgMgRF7Zhy2xjfcE3jO61bdGsBD%2FPjxc2oq6QsfQm6zSuvctLtEPlQNHsnzfQU1%2FlHYaVGOr2bt2IhDaHb%2BMcaRu0pjP1EXhHLglUapoKCKMADd8KDcgk93fJfSgo3JU2a5rynBrnxM%2B0rxyTAQV5%2FzdDyyQeY8Z3tjh0j7yAwg%2F0IiG7skwH1cyojspUlf20TSW%2FSunt3wZUQNPGDX2Q0LQpUtJE4544MEMKFU%2BAJQadbXfRsmCA5FAsCvzbV%2BziJb9ZSsYcy0o%2F65Fme9ukD%2By6kW75zmFMkiV%2BTxduUMfQUdsB8h4ttj%2Bj0bt1wPq1EaZ%2BRg4OSh0jbBBwrkCfFw%2BwI4DUReiJXJmSauhbiYMQ4iVA1%2FhV9j7huzYf%2BNSLqjTBgqtCmbkmTdzTHGTJ%2BHoGmYE4WWDAGoX75m9i37twDapCXJeCl29TgasLGiAGvOjr3TcpiH9SbZT7nTzz%2FgVfVvgWKu%2Fuf13CJqH6eXRz1yv4NUQORFQQL%2F8hMC%2BRQEg3Xs6SMK8PQ0Qd4U6DNw4WelFKIqvwmT2VL24kh88QooednsbIK8ML%2FGo74GOqUBZ3wcIlT0s0zTUrdTP3lneRzA62u5sOxaX7Zd9JjUbhtFCSeCyYRkzOVaj2wwVFuj1ml4c3lviuhsK2I7Z71GwP2w6PBcpzdXIAGhi0EXJjAoEVN587b9J3pEqSfcMO4F28VoMJqUAVSmMzjfgSwwieq6wDubWw13TvtlMjFkLNyK7bQvFh%2FISimY%2BU4tUCds51cnk8Zakf7zdm5GlHxgUqY0cGEi&X-Amz-Signature=a2187a817030fd4966e29423c5faba87f3d60f0c6f3bf707067c98851d8f9343&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
