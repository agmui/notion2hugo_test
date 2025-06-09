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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637Q27VG7%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSO0zJKi9Bxqf3177Dy4KAYrdnopjmw06goxCf9Hi1wAiBxAOuq2aVHXE%2FiW%2BJlWEch9PCAjMaVNqqdlenwrK6Y%2FyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaQSvc2vAJxp0P4mBKtwDSxLjlGDyzR5KJrJ9WZypsksYILlfxR2OCocdM%2FrJeZ4IXNrp%2B4XIDGUeadbVgpoTr4AIPHhXHoLMC5ldjdyauliPlfUDYNMscAk2AdsbXlZBc5foOm%2F09H5UIa8ZlQ16pWgdLMCmOCx733Bw7gBsUOyAZ%2FxNLjcKmrhKZf0bjeT41y3u4HBUkjDH%2FjM33PFNgICo4utTjaCvAuob2xVu9VdaVde2YM50K7oFJxldtQvcS3eNPdoqDyJirWfAQ5GoVmMtUCuv7DQMKVn9DPc2QwL9VC7ChzHHVebvG3XY%2FPQQwcm7vi549S3FOpcuP8Dcm9vLMsUDH0PIot9fE9xjEIpVzG22n73xb6Iz%2FLQVuyGfJlKWPJareYxUXo1tgNNviu%2FyulQxIST7gOX0VTkFSJTClwQS4Q2qIHKIBD1jx0P20onuqtOQEabJM%2FCGritV9ptQHh7pvfkPUDkPZUWbd9MjfgB8YPw9MJQ%2B%2BZxUPAT8r9zU%2Ba8oBwUWxeO6TeDrzyAtd4I5JmBTozIOI0PQgo8QvzzduwaKJwjyVNm5HMRW3VXceLR%2FT9azN9RE1e1TyyWTbZmoF%2F74at%2B3ylr4KualVnP3438RGBcOwA%2BSHC4IHvSu39%2FtGZx0Mg4wo%2B%2BYwgY6pgHsA8wbPSIS5xJpUK6mbUyEXbu5QNN%2Bxim7ioncc5IIL%2F3dUMH03QUBPsGzyFatWTBdLrfd26atj4TBvhmBqYLfDCbOcL9MCwWcqAZDigyhPuFNZ7E2KF9GWw1SiExbNNmJD%2Bjs%2FR0%2BduEhuGPPpjQTOxIUDLu6l%2FtB7Qvq6%2FGot3p33AvEmouxP3mGh%2BM43qpvLyBEl37IBRMDDJs98tT38QiVUG%2FT&X-Amz-Signature=c4d9fd73001faee98462b917259d2818035c55108bd5b0ba7937227af0ae2f27&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637Q27VG7%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSO0zJKi9Bxqf3177Dy4KAYrdnopjmw06goxCf9Hi1wAiBxAOuq2aVHXE%2FiW%2BJlWEch9PCAjMaVNqqdlenwrK6Y%2FyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaQSvc2vAJxp0P4mBKtwDSxLjlGDyzR5KJrJ9WZypsksYILlfxR2OCocdM%2FrJeZ4IXNrp%2B4XIDGUeadbVgpoTr4AIPHhXHoLMC5ldjdyauliPlfUDYNMscAk2AdsbXlZBc5foOm%2F09H5UIa8ZlQ16pWgdLMCmOCx733Bw7gBsUOyAZ%2FxNLjcKmrhKZf0bjeT41y3u4HBUkjDH%2FjM33PFNgICo4utTjaCvAuob2xVu9VdaVde2YM50K7oFJxldtQvcS3eNPdoqDyJirWfAQ5GoVmMtUCuv7DQMKVn9DPc2QwL9VC7ChzHHVebvG3XY%2FPQQwcm7vi549S3FOpcuP8Dcm9vLMsUDH0PIot9fE9xjEIpVzG22n73xb6Iz%2FLQVuyGfJlKWPJareYxUXo1tgNNviu%2FyulQxIST7gOX0VTkFSJTClwQS4Q2qIHKIBD1jx0P20onuqtOQEabJM%2FCGritV9ptQHh7pvfkPUDkPZUWbd9MjfgB8YPw9MJQ%2B%2BZxUPAT8r9zU%2Ba8oBwUWxeO6TeDrzyAtd4I5JmBTozIOI0PQgo8QvzzduwaKJwjyVNm5HMRW3VXceLR%2FT9azN9RE1e1TyyWTbZmoF%2F74at%2B3ylr4KualVnP3438RGBcOwA%2BSHC4IHvSu39%2FtGZx0Mg4wo%2B%2BYwgY6pgHsA8wbPSIS5xJpUK6mbUyEXbu5QNN%2Bxim7ioncc5IIL%2F3dUMH03QUBPsGzyFatWTBdLrfd26atj4TBvhmBqYLfDCbOcL9MCwWcqAZDigyhPuFNZ7E2KF9GWw1SiExbNNmJD%2Bjs%2FR0%2BduEhuGPPpjQTOxIUDLu6l%2FtB7Qvq6%2FGot3p33AvEmouxP3mGh%2BM43qpvLyBEl37IBRMDDJs98tT38QiVUG%2FT&X-Amz-Signature=ff678279596c9333eb019775b5e1398cf5d217d248138db500b94739999813d6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637Q27VG7%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSO0zJKi9Bxqf3177Dy4KAYrdnopjmw06goxCf9Hi1wAiBxAOuq2aVHXE%2FiW%2BJlWEch9PCAjMaVNqqdlenwrK6Y%2FyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaQSvc2vAJxp0P4mBKtwDSxLjlGDyzR5KJrJ9WZypsksYILlfxR2OCocdM%2FrJeZ4IXNrp%2B4XIDGUeadbVgpoTr4AIPHhXHoLMC5ldjdyauliPlfUDYNMscAk2AdsbXlZBc5foOm%2F09H5UIa8ZlQ16pWgdLMCmOCx733Bw7gBsUOyAZ%2FxNLjcKmrhKZf0bjeT41y3u4HBUkjDH%2FjM33PFNgICo4utTjaCvAuob2xVu9VdaVde2YM50K7oFJxldtQvcS3eNPdoqDyJirWfAQ5GoVmMtUCuv7DQMKVn9DPc2QwL9VC7ChzHHVebvG3XY%2FPQQwcm7vi549S3FOpcuP8Dcm9vLMsUDH0PIot9fE9xjEIpVzG22n73xb6Iz%2FLQVuyGfJlKWPJareYxUXo1tgNNviu%2FyulQxIST7gOX0VTkFSJTClwQS4Q2qIHKIBD1jx0P20onuqtOQEabJM%2FCGritV9ptQHh7pvfkPUDkPZUWbd9MjfgB8YPw9MJQ%2B%2BZxUPAT8r9zU%2Ba8oBwUWxeO6TeDrzyAtd4I5JmBTozIOI0PQgo8QvzzduwaKJwjyVNm5HMRW3VXceLR%2FT9azN9RE1e1TyyWTbZmoF%2F74at%2B3ylr4KualVnP3438RGBcOwA%2BSHC4IHvSu39%2FtGZx0Mg4wo%2B%2BYwgY6pgHsA8wbPSIS5xJpUK6mbUyEXbu5QNN%2Bxim7ioncc5IIL%2F3dUMH03QUBPsGzyFatWTBdLrfd26atj4TBvhmBqYLfDCbOcL9MCwWcqAZDigyhPuFNZ7E2KF9GWw1SiExbNNmJD%2Bjs%2FR0%2BduEhuGPPpjQTOxIUDLu6l%2FtB7Qvq6%2FGot3p33AvEmouxP3mGh%2BM43qpvLyBEl37IBRMDDJs98tT38QiVUG%2FT&X-Amz-Signature=89ad592ad16bb6c8bb6c35f65f316bbc7b7de60eeb4d2d94359e9ccdc0916ecb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637Q27VG7%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSO0zJKi9Bxqf3177Dy4KAYrdnopjmw06goxCf9Hi1wAiBxAOuq2aVHXE%2FiW%2BJlWEch9PCAjMaVNqqdlenwrK6Y%2FyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaQSvc2vAJxp0P4mBKtwDSxLjlGDyzR5KJrJ9WZypsksYILlfxR2OCocdM%2FrJeZ4IXNrp%2B4XIDGUeadbVgpoTr4AIPHhXHoLMC5ldjdyauliPlfUDYNMscAk2AdsbXlZBc5foOm%2F09H5UIa8ZlQ16pWgdLMCmOCx733Bw7gBsUOyAZ%2FxNLjcKmrhKZf0bjeT41y3u4HBUkjDH%2FjM33PFNgICo4utTjaCvAuob2xVu9VdaVde2YM50K7oFJxldtQvcS3eNPdoqDyJirWfAQ5GoVmMtUCuv7DQMKVn9DPc2QwL9VC7ChzHHVebvG3XY%2FPQQwcm7vi549S3FOpcuP8Dcm9vLMsUDH0PIot9fE9xjEIpVzG22n73xb6Iz%2FLQVuyGfJlKWPJareYxUXo1tgNNviu%2FyulQxIST7gOX0VTkFSJTClwQS4Q2qIHKIBD1jx0P20onuqtOQEabJM%2FCGritV9ptQHh7pvfkPUDkPZUWbd9MjfgB8YPw9MJQ%2B%2BZxUPAT8r9zU%2Ba8oBwUWxeO6TeDrzyAtd4I5JmBTozIOI0PQgo8QvzzduwaKJwjyVNm5HMRW3VXceLR%2FT9azN9RE1e1TyyWTbZmoF%2F74at%2B3ylr4KualVnP3438RGBcOwA%2BSHC4IHvSu39%2FtGZx0Mg4wo%2B%2BYwgY6pgHsA8wbPSIS5xJpUK6mbUyEXbu5QNN%2Bxim7ioncc5IIL%2F3dUMH03QUBPsGzyFatWTBdLrfd26atj4TBvhmBqYLfDCbOcL9MCwWcqAZDigyhPuFNZ7E2KF9GWw1SiExbNNmJD%2Bjs%2FR0%2BduEhuGPPpjQTOxIUDLu6l%2FtB7Qvq6%2FGot3p33AvEmouxP3mGh%2BM43qpvLyBEl37IBRMDDJs98tT38QiVUG%2FT&X-Amz-Signature=264e997ce6dddc7f0f3fd4ae94a8953897cd75efff16c6cb1d67ef16b8d28898&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637Q27VG7%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSO0zJKi9Bxqf3177Dy4KAYrdnopjmw06goxCf9Hi1wAiBxAOuq2aVHXE%2FiW%2BJlWEch9PCAjMaVNqqdlenwrK6Y%2FyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaQSvc2vAJxp0P4mBKtwDSxLjlGDyzR5KJrJ9WZypsksYILlfxR2OCocdM%2FrJeZ4IXNrp%2B4XIDGUeadbVgpoTr4AIPHhXHoLMC5ldjdyauliPlfUDYNMscAk2AdsbXlZBc5foOm%2F09H5UIa8ZlQ16pWgdLMCmOCx733Bw7gBsUOyAZ%2FxNLjcKmrhKZf0bjeT41y3u4HBUkjDH%2FjM33PFNgICo4utTjaCvAuob2xVu9VdaVde2YM50K7oFJxldtQvcS3eNPdoqDyJirWfAQ5GoVmMtUCuv7DQMKVn9DPc2QwL9VC7ChzHHVebvG3XY%2FPQQwcm7vi549S3FOpcuP8Dcm9vLMsUDH0PIot9fE9xjEIpVzG22n73xb6Iz%2FLQVuyGfJlKWPJareYxUXo1tgNNviu%2FyulQxIST7gOX0VTkFSJTClwQS4Q2qIHKIBD1jx0P20onuqtOQEabJM%2FCGritV9ptQHh7pvfkPUDkPZUWbd9MjfgB8YPw9MJQ%2B%2BZxUPAT8r9zU%2Ba8oBwUWxeO6TeDrzyAtd4I5JmBTozIOI0PQgo8QvzzduwaKJwjyVNm5HMRW3VXceLR%2FT9azN9RE1e1TyyWTbZmoF%2F74at%2B3ylr4KualVnP3438RGBcOwA%2BSHC4IHvSu39%2FtGZx0Mg4wo%2B%2BYwgY6pgHsA8wbPSIS5xJpUK6mbUyEXbu5QNN%2Bxim7ioncc5IIL%2F3dUMH03QUBPsGzyFatWTBdLrfd26atj4TBvhmBqYLfDCbOcL9MCwWcqAZDigyhPuFNZ7E2KF9GWw1SiExbNNmJD%2Bjs%2FR0%2BduEhuGPPpjQTOxIUDLu6l%2FtB7Qvq6%2FGot3p33AvEmouxP3mGh%2BM43qpvLyBEl37IBRMDDJs98tT38QiVUG%2FT&X-Amz-Signature=c026f69f2299ecaab30444534db1b86c049194167f85d9ffcef6ee492fc3853f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637Q27VG7%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSO0zJKi9Bxqf3177Dy4KAYrdnopjmw06goxCf9Hi1wAiBxAOuq2aVHXE%2FiW%2BJlWEch9PCAjMaVNqqdlenwrK6Y%2FyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaQSvc2vAJxp0P4mBKtwDSxLjlGDyzR5KJrJ9WZypsksYILlfxR2OCocdM%2FrJeZ4IXNrp%2B4XIDGUeadbVgpoTr4AIPHhXHoLMC5ldjdyauliPlfUDYNMscAk2AdsbXlZBc5foOm%2F09H5UIa8ZlQ16pWgdLMCmOCx733Bw7gBsUOyAZ%2FxNLjcKmrhKZf0bjeT41y3u4HBUkjDH%2FjM33PFNgICo4utTjaCvAuob2xVu9VdaVde2YM50K7oFJxldtQvcS3eNPdoqDyJirWfAQ5GoVmMtUCuv7DQMKVn9DPc2QwL9VC7ChzHHVebvG3XY%2FPQQwcm7vi549S3FOpcuP8Dcm9vLMsUDH0PIot9fE9xjEIpVzG22n73xb6Iz%2FLQVuyGfJlKWPJareYxUXo1tgNNviu%2FyulQxIST7gOX0VTkFSJTClwQS4Q2qIHKIBD1jx0P20onuqtOQEabJM%2FCGritV9ptQHh7pvfkPUDkPZUWbd9MjfgB8YPw9MJQ%2B%2BZxUPAT8r9zU%2Ba8oBwUWxeO6TeDrzyAtd4I5JmBTozIOI0PQgo8QvzzduwaKJwjyVNm5HMRW3VXceLR%2FT9azN9RE1e1TyyWTbZmoF%2F74at%2B3ylr4KualVnP3438RGBcOwA%2BSHC4IHvSu39%2FtGZx0Mg4wo%2B%2BYwgY6pgHsA8wbPSIS5xJpUK6mbUyEXbu5QNN%2Bxim7ioncc5IIL%2F3dUMH03QUBPsGzyFatWTBdLrfd26atj4TBvhmBqYLfDCbOcL9MCwWcqAZDigyhPuFNZ7E2KF9GWw1SiExbNNmJD%2Bjs%2FR0%2BduEhuGPPpjQTOxIUDLu6l%2FtB7Qvq6%2FGot3p33AvEmouxP3mGh%2BM43qpvLyBEl37IBRMDDJs98tT38QiVUG%2FT&X-Amz-Signature=fe9ddd0bb278e480914178980c282f29041736d10c0207e6c28bcfa866e6f82d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637Q27VG7%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSO0zJKi9Bxqf3177Dy4KAYrdnopjmw06goxCf9Hi1wAiBxAOuq2aVHXE%2FiW%2BJlWEch9PCAjMaVNqqdlenwrK6Y%2FyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaQSvc2vAJxp0P4mBKtwDSxLjlGDyzR5KJrJ9WZypsksYILlfxR2OCocdM%2FrJeZ4IXNrp%2B4XIDGUeadbVgpoTr4AIPHhXHoLMC5ldjdyauliPlfUDYNMscAk2AdsbXlZBc5foOm%2F09H5UIa8ZlQ16pWgdLMCmOCx733Bw7gBsUOyAZ%2FxNLjcKmrhKZf0bjeT41y3u4HBUkjDH%2FjM33PFNgICo4utTjaCvAuob2xVu9VdaVde2YM50K7oFJxldtQvcS3eNPdoqDyJirWfAQ5GoVmMtUCuv7DQMKVn9DPc2QwL9VC7ChzHHVebvG3XY%2FPQQwcm7vi549S3FOpcuP8Dcm9vLMsUDH0PIot9fE9xjEIpVzG22n73xb6Iz%2FLQVuyGfJlKWPJareYxUXo1tgNNviu%2FyulQxIST7gOX0VTkFSJTClwQS4Q2qIHKIBD1jx0P20onuqtOQEabJM%2FCGritV9ptQHh7pvfkPUDkPZUWbd9MjfgB8YPw9MJQ%2B%2BZxUPAT8r9zU%2Ba8oBwUWxeO6TeDrzyAtd4I5JmBTozIOI0PQgo8QvzzduwaKJwjyVNm5HMRW3VXceLR%2FT9azN9RE1e1TyyWTbZmoF%2F74at%2B3ylr4KualVnP3438RGBcOwA%2BSHC4IHvSu39%2FtGZx0Mg4wo%2B%2BYwgY6pgHsA8wbPSIS5xJpUK6mbUyEXbu5QNN%2Bxim7ioncc5IIL%2F3dUMH03QUBPsGzyFatWTBdLrfd26atj4TBvhmBqYLfDCbOcL9MCwWcqAZDigyhPuFNZ7E2KF9GWw1SiExbNNmJD%2Bjs%2FR0%2BduEhuGPPpjQTOxIUDLu6l%2FtB7Qvq6%2FGot3p33AvEmouxP3mGh%2BM43qpvLyBEl37IBRMDDJs98tT38QiVUG%2FT&X-Amz-Signature=00dfd9b4efad14097882a40a1721aff25dd00b0081e7310525ecb5e440d5899c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637Q27VG7%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSO0zJKi9Bxqf3177Dy4KAYrdnopjmw06goxCf9Hi1wAiBxAOuq2aVHXE%2FiW%2BJlWEch9PCAjMaVNqqdlenwrK6Y%2FyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaQSvc2vAJxp0P4mBKtwDSxLjlGDyzR5KJrJ9WZypsksYILlfxR2OCocdM%2FrJeZ4IXNrp%2B4XIDGUeadbVgpoTr4AIPHhXHoLMC5ldjdyauliPlfUDYNMscAk2AdsbXlZBc5foOm%2F09H5UIa8ZlQ16pWgdLMCmOCx733Bw7gBsUOyAZ%2FxNLjcKmrhKZf0bjeT41y3u4HBUkjDH%2FjM33PFNgICo4utTjaCvAuob2xVu9VdaVde2YM50K7oFJxldtQvcS3eNPdoqDyJirWfAQ5GoVmMtUCuv7DQMKVn9DPc2QwL9VC7ChzHHVebvG3XY%2FPQQwcm7vi549S3FOpcuP8Dcm9vLMsUDH0PIot9fE9xjEIpVzG22n73xb6Iz%2FLQVuyGfJlKWPJareYxUXo1tgNNviu%2FyulQxIST7gOX0VTkFSJTClwQS4Q2qIHKIBD1jx0P20onuqtOQEabJM%2FCGritV9ptQHh7pvfkPUDkPZUWbd9MjfgB8YPw9MJQ%2B%2BZxUPAT8r9zU%2Ba8oBwUWxeO6TeDrzyAtd4I5JmBTozIOI0PQgo8QvzzduwaKJwjyVNm5HMRW3VXceLR%2FT9azN9RE1e1TyyWTbZmoF%2F74at%2B3ylr4KualVnP3438RGBcOwA%2BSHC4IHvSu39%2FtGZx0Mg4wo%2B%2BYwgY6pgHsA8wbPSIS5xJpUK6mbUyEXbu5QNN%2Bxim7ioncc5IIL%2F3dUMH03QUBPsGzyFatWTBdLrfd26atj4TBvhmBqYLfDCbOcL9MCwWcqAZDigyhPuFNZ7E2KF9GWw1SiExbNNmJD%2Bjs%2FR0%2BduEhuGPPpjQTOxIUDLu6l%2FtB7Qvq6%2FGot3p33AvEmouxP3mGh%2BM43qpvLyBEl37IBRMDDJs98tT38QiVUG%2FT&X-Amz-Signature=d06d8af5ee9f5876adeee1b05b23bdc69250896bc603173e8b7a87f376c2c838&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
