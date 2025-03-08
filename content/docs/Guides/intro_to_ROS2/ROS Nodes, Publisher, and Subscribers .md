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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653KLOMOM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCOp5T09TN9cgehxzvLFf51Vb1Z042eQiFk7wsFLK17MQIhAO93u5nIVcn3ALpfza33WZ3gqVeZV6cEKmOLF66TTWp4Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxPY%2F9TxZ16JI68QaIq3APoYUneMdIG76ce3q968Pt1t%2B0kvlQ1CLnZh%2FVdZp8VDcDy0%2BvO9pptlNVaqEm3DOQPhPC%2FiNafDSHB18c0XrOjV4VTnAay2lgbeeaSVpdfE8NlAOCk0Y9y%2FXUkJY7jliWQ9B4ImqXie5PB%2FCePhN6H9gtv9xl6w%2BzM80tp0ygvyKP7Zly5wtoueRCM6JfSnCYp%2FBSeLxPemH4QSeT5kwPh9v67jtvm6N5gnQroCfKGNK39ppemO%2FtcWReClJMaduD06RIwJuYpCff%2FutGlG0%2B%2FSnr8uMGQjEdM17qFNs%2B8QVGQoG1UBlwAdNAj4vZRO7%2Fz%2Bjr3BQ3xakN%2BMtnZJxy6zIfuiXawYph8pCoLpU6r56E7YDkSQFiTAYmNE1D9HG6eDn2r%2FClSCFYHRHFk%2BVdQ1LCFvvsC%2BQGw%2FQTUyMmfKPuNI23ryWQt7KJslahNgc3AH9DWe6co1r%2BScjBZfWa9Ed5%2FEczDFbPHNnlEhNthGvpAnZgY%2FXZokCair49q5ScCD8ocN9SAsELnhEbpnHv1KXFqF%2Be3fIMBkNdj5yl7BVQSuaOugH0X69TAOwXPa47kBlExM4JE4SGgsZ%2BHePeNH30efCFslD0BCw7XUlBIQfE%2BxD2YtHBoR7%2B3FDCzva6%2BBjqkAZOAoHfdtfdal8PQYZXV2cglMjJfV%2FsEryFJJyR5S0MNc%2BORxlPjg%2F8v8GwTFXW%2Ff0uRB6oHT9bVK6hPUqhXztZgLGJbKDLZYqSYPEiY%2BsHJuBkX%2FLO21R6YrnvZecJshsZWsyHIwM57RMA1hBBU%2B2nrbnSSl3LQss0qtHixpUYegKPcAhdK%2BUNuqCJLjOpNhq28jx5vp9jsPUhBpSmQ2pA7yJmU&X-Amz-Signature=5ba6d7418add9e7a9a1e16d9fc685bd88179fe8210974f1866e7701c9a701879&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653KLOMOM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCOp5T09TN9cgehxzvLFf51Vb1Z042eQiFk7wsFLK17MQIhAO93u5nIVcn3ALpfza33WZ3gqVeZV6cEKmOLF66TTWp4Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxPY%2F9TxZ16JI68QaIq3APoYUneMdIG76ce3q968Pt1t%2B0kvlQ1CLnZh%2FVdZp8VDcDy0%2BvO9pptlNVaqEm3DOQPhPC%2FiNafDSHB18c0XrOjV4VTnAay2lgbeeaSVpdfE8NlAOCk0Y9y%2FXUkJY7jliWQ9B4ImqXie5PB%2FCePhN6H9gtv9xl6w%2BzM80tp0ygvyKP7Zly5wtoueRCM6JfSnCYp%2FBSeLxPemH4QSeT5kwPh9v67jtvm6N5gnQroCfKGNK39ppemO%2FtcWReClJMaduD06RIwJuYpCff%2FutGlG0%2B%2FSnr8uMGQjEdM17qFNs%2B8QVGQoG1UBlwAdNAj4vZRO7%2Fz%2Bjr3BQ3xakN%2BMtnZJxy6zIfuiXawYph8pCoLpU6r56E7YDkSQFiTAYmNE1D9HG6eDn2r%2FClSCFYHRHFk%2BVdQ1LCFvvsC%2BQGw%2FQTUyMmfKPuNI23ryWQt7KJslahNgc3AH9DWe6co1r%2BScjBZfWa9Ed5%2FEczDFbPHNnlEhNthGvpAnZgY%2FXZokCair49q5ScCD8ocN9SAsELnhEbpnHv1KXFqF%2Be3fIMBkNdj5yl7BVQSuaOugH0X69TAOwXPa47kBlExM4JE4SGgsZ%2BHePeNH30efCFslD0BCw7XUlBIQfE%2BxD2YtHBoR7%2B3FDCzva6%2BBjqkAZOAoHfdtfdal8PQYZXV2cglMjJfV%2FsEryFJJyR5S0MNc%2BORxlPjg%2F8v8GwTFXW%2Ff0uRB6oHT9bVK6hPUqhXztZgLGJbKDLZYqSYPEiY%2BsHJuBkX%2FLO21R6YrnvZecJshsZWsyHIwM57RMA1hBBU%2B2nrbnSSl3LQss0qtHixpUYegKPcAhdK%2BUNuqCJLjOpNhq28jx5vp9jsPUhBpSmQ2pA7yJmU&X-Amz-Signature=7881db8981a15575ec2202249210ba11c1d42f6639315c35dce7b328088b6bb7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653KLOMOM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCOp5T09TN9cgehxzvLFf51Vb1Z042eQiFk7wsFLK17MQIhAO93u5nIVcn3ALpfza33WZ3gqVeZV6cEKmOLF66TTWp4Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxPY%2F9TxZ16JI68QaIq3APoYUneMdIG76ce3q968Pt1t%2B0kvlQ1CLnZh%2FVdZp8VDcDy0%2BvO9pptlNVaqEm3DOQPhPC%2FiNafDSHB18c0XrOjV4VTnAay2lgbeeaSVpdfE8NlAOCk0Y9y%2FXUkJY7jliWQ9B4ImqXie5PB%2FCePhN6H9gtv9xl6w%2BzM80tp0ygvyKP7Zly5wtoueRCM6JfSnCYp%2FBSeLxPemH4QSeT5kwPh9v67jtvm6N5gnQroCfKGNK39ppemO%2FtcWReClJMaduD06RIwJuYpCff%2FutGlG0%2B%2FSnr8uMGQjEdM17qFNs%2B8QVGQoG1UBlwAdNAj4vZRO7%2Fz%2Bjr3BQ3xakN%2BMtnZJxy6zIfuiXawYph8pCoLpU6r56E7YDkSQFiTAYmNE1D9HG6eDn2r%2FClSCFYHRHFk%2BVdQ1LCFvvsC%2BQGw%2FQTUyMmfKPuNI23ryWQt7KJslahNgc3AH9DWe6co1r%2BScjBZfWa9Ed5%2FEczDFbPHNnlEhNthGvpAnZgY%2FXZokCair49q5ScCD8ocN9SAsELnhEbpnHv1KXFqF%2Be3fIMBkNdj5yl7BVQSuaOugH0X69TAOwXPa47kBlExM4JE4SGgsZ%2BHePeNH30efCFslD0BCw7XUlBIQfE%2BxD2YtHBoR7%2B3FDCzva6%2BBjqkAZOAoHfdtfdal8PQYZXV2cglMjJfV%2FsEryFJJyR5S0MNc%2BORxlPjg%2F8v8GwTFXW%2Ff0uRB6oHT9bVK6hPUqhXztZgLGJbKDLZYqSYPEiY%2BsHJuBkX%2FLO21R6YrnvZecJshsZWsyHIwM57RMA1hBBU%2B2nrbnSSl3LQss0qtHixpUYegKPcAhdK%2BUNuqCJLjOpNhq28jx5vp9jsPUhBpSmQ2pA7yJmU&X-Amz-Signature=2d7494198a4a6647abbf81fb46ccf5f10b70ff00edde40494624cbca6d643f99&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653KLOMOM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCOp5T09TN9cgehxzvLFf51Vb1Z042eQiFk7wsFLK17MQIhAO93u5nIVcn3ALpfza33WZ3gqVeZV6cEKmOLF66TTWp4Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxPY%2F9TxZ16JI68QaIq3APoYUneMdIG76ce3q968Pt1t%2B0kvlQ1CLnZh%2FVdZp8VDcDy0%2BvO9pptlNVaqEm3DOQPhPC%2FiNafDSHB18c0XrOjV4VTnAay2lgbeeaSVpdfE8NlAOCk0Y9y%2FXUkJY7jliWQ9B4ImqXie5PB%2FCePhN6H9gtv9xl6w%2BzM80tp0ygvyKP7Zly5wtoueRCM6JfSnCYp%2FBSeLxPemH4QSeT5kwPh9v67jtvm6N5gnQroCfKGNK39ppemO%2FtcWReClJMaduD06RIwJuYpCff%2FutGlG0%2B%2FSnr8uMGQjEdM17qFNs%2B8QVGQoG1UBlwAdNAj4vZRO7%2Fz%2Bjr3BQ3xakN%2BMtnZJxy6zIfuiXawYph8pCoLpU6r56E7YDkSQFiTAYmNE1D9HG6eDn2r%2FClSCFYHRHFk%2BVdQ1LCFvvsC%2BQGw%2FQTUyMmfKPuNI23ryWQt7KJslahNgc3AH9DWe6co1r%2BScjBZfWa9Ed5%2FEczDFbPHNnlEhNthGvpAnZgY%2FXZokCair49q5ScCD8ocN9SAsELnhEbpnHv1KXFqF%2Be3fIMBkNdj5yl7BVQSuaOugH0X69TAOwXPa47kBlExM4JE4SGgsZ%2BHePeNH30efCFslD0BCw7XUlBIQfE%2BxD2YtHBoR7%2B3FDCzva6%2BBjqkAZOAoHfdtfdal8PQYZXV2cglMjJfV%2FsEryFJJyR5S0MNc%2BORxlPjg%2F8v8GwTFXW%2Ff0uRB6oHT9bVK6hPUqhXztZgLGJbKDLZYqSYPEiY%2BsHJuBkX%2FLO21R6YrnvZecJshsZWsyHIwM57RMA1hBBU%2B2nrbnSSl3LQss0qtHixpUYegKPcAhdK%2BUNuqCJLjOpNhq28jx5vp9jsPUhBpSmQ2pA7yJmU&X-Amz-Signature=0652edb10fa6232461365b99b0c42ea4bc25d9943c99a76a2a9bddf15f04317f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653KLOMOM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCOp5T09TN9cgehxzvLFf51Vb1Z042eQiFk7wsFLK17MQIhAO93u5nIVcn3ALpfza33WZ3gqVeZV6cEKmOLF66TTWp4Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxPY%2F9TxZ16JI68QaIq3APoYUneMdIG76ce3q968Pt1t%2B0kvlQ1CLnZh%2FVdZp8VDcDy0%2BvO9pptlNVaqEm3DOQPhPC%2FiNafDSHB18c0XrOjV4VTnAay2lgbeeaSVpdfE8NlAOCk0Y9y%2FXUkJY7jliWQ9B4ImqXie5PB%2FCePhN6H9gtv9xl6w%2BzM80tp0ygvyKP7Zly5wtoueRCM6JfSnCYp%2FBSeLxPemH4QSeT5kwPh9v67jtvm6N5gnQroCfKGNK39ppemO%2FtcWReClJMaduD06RIwJuYpCff%2FutGlG0%2B%2FSnr8uMGQjEdM17qFNs%2B8QVGQoG1UBlwAdNAj4vZRO7%2Fz%2Bjr3BQ3xakN%2BMtnZJxy6zIfuiXawYph8pCoLpU6r56E7YDkSQFiTAYmNE1D9HG6eDn2r%2FClSCFYHRHFk%2BVdQ1LCFvvsC%2BQGw%2FQTUyMmfKPuNI23ryWQt7KJslahNgc3AH9DWe6co1r%2BScjBZfWa9Ed5%2FEczDFbPHNnlEhNthGvpAnZgY%2FXZokCair49q5ScCD8ocN9SAsELnhEbpnHv1KXFqF%2Be3fIMBkNdj5yl7BVQSuaOugH0X69TAOwXPa47kBlExM4JE4SGgsZ%2BHePeNH30efCFslD0BCw7XUlBIQfE%2BxD2YtHBoR7%2B3FDCzva6%2BBjqkAZOAoHfdtfdal8PQYZXV2cglMjJfV%2FsEryFJJyR5S0MNc%2BORxlPjg%2F8v8GwTFXW%2Ff0uRB6oHT9bVK6hPUqhXztZgLGJbKDLZYqSYPEiY%2BsHJuBkX%2FLO21R6YrnvZecJshsZWsyHIwM57RMA1hBBU%2B2nrbnSSl3LQss0qtHixpUYegKPcAhdK%2BUNuqCJLjOpNhq28jx5vp9jsPUhBpSmQ2pA7yJmU&X-Amz-Signature=470668be1ae8882729dd1adbda202379782ef105602ac6782bb4a02930093ec1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653KLOMOM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCOp5T09TN9cgehxzvLFf51Vb1Z042eQiFk7wsFLK17MQIhAO93u5nIVcn3ALpfza33WZ3gqVeZV6cEKmOLF66TTWp4Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxPY%2F9TxZ16JI68QaIq3APoYUneMdIG76ce3q968Pt1t%2B0kvlQ1CLnZh%2FVdZp8VDcDy0%2BvO9pptlNVaqEm3DOQPhPC%2FiNafDSHB18c0XrOjV4VTnAay2lgbeeaSVpdfE8NlAOCk0Y9y%2FXUkJY7jliWQ9B4ImqXie5PB%2FCePhN6H9gtv9xl6w%2BzM80tp0ygvyKP7Zly5wtoueRCM6JfSnCYp%2FBSeLxPemH4QSeT5kwPh9v67jtvm6N5gnQroCfKGNK39ppemO%2FtcWReClJMaduD06RIwJuYpCff%2FutGlG0%2B%2FSnr8uMGQjEdM17qFNs%2B8QVGQoG1UBlwAdNAj4vZRO7%2Fz%2Bjr3BQ3xakN%2BMtnZJxy6zIfuiXawYph8pCoLpU6r56E7YDkSQFiTAYmNE1D9HG6eDn2r%2FClSCFYHRHFk%2BVdQ1LCFvvsC%2BQGw%2FQTUyMmfKPuNI23ryWQt7KJslahNgc3AH9DWe6co1r%2BScjBZfWa9Ed5%2FEczDFbPHNnlEhNthGvpAnZgY%2FXZokCair49q5ScCD8ocN9SAsELnhEbpnHv1KXFqF%2Be3fIMBkNdj5yl7BVQSuaOugH0X69TAOwXPa47kBlExM4JE4SGgsZ%2BHePeNH30efCFslD0BCw7XUlBIQfE%2BxD2YtHBoR7%2B3FDCzva6%2BBjqkAZOAoHfdtfdal8PQYZXV2cglMjJfV%2FsEryFJJyR5S0MNc%2BORxlPjg%2F8v8GwTFXW%2Ff0uRB6oHT9bVK6hPUqhXztZgLGJbKDLZYqSYPEiY%2BsHJuBkX%2FLO21R6YrnvZecJshsZWsyHIwM57RMA1hBBU%2B2nrbnSSl3LQss0qtHixpUYegKPcAhdK%2BUNuqCJLjOpNhq28jx5vp9jsPUhBpSmQ2pA7yJmU&X-Amz-Signature=90dc0abf607962f4401eac3f44e6790d71c335b3b79a5ff6c1f8abfe8c5a9441&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653KLOMOM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCOp5T09TN9cgehxzvLFf51Vb1Z042eQiFk7wsFLK17MQIhAO93u5nIVcn3ALpfza33WZ3gqVeZV6cEKmOLF66TTWp4Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxPY%2F9TxZ16JI68QaIq3APoYUneMdIG76ce3q968Pt1t%2B0kvlQ1CLnZh%2FVdZp8VDcDy0%2BvO9pptlNVaqEm3DOQPhPC%2FiNafDSHB18c0XrOjV4VTnAay2lgbeeaSVpdfE8NlAOCk0Y9y%2FXUkJY7jliWQ9B4ImqXie5PB%2FCePhN6H9gtv9xl6w%2BzM80tp0ygvyKP7Zly5wtoueRCM6JfSnCYp%2FBSeLxPemH4QSeT5kwPh9v67jtvm6N5gnQroCfKGNK39ppemO%2FtcWReClJMaduD06RIwJuYpCff%2FutGlG0%2B%2FSnr8uMGQjEdM17qFNs%2B8QVGQoG1UBlwAdNAj4vZRO7%2Fz%2Bjr3BQ3xakN%2BMtnZJxy6zIfuiXawYph8pCoLpU6r56E7YDkSQFiTAYmNE1D9HG6eDn2r%2FClSCFYHRHFk%2BVdQ1LCFvvsC%2BQGw%2FQTUyMmfKPuNI23ryWQt7KJslahNgc3AH9DWe6co1r%2BScjBZfWa9Ed5%2FEczDFbPHNnlEhNthGvpAnZgY%2FXZokCair49q5ScCD8ocN9SAsELnhEbpnHv1KXFqF%2Be3fIMBkNdj5yl7BVQSuaOugH0X69TAOwXPa47kBlExM4JE4SGgsZ%2BHePeNH30efCFslD0BCw7XUlBIQfE%2BxD2YtHBoR7%2B3FDCzva6%2BBjqkAZOAoHfdtfdal8PQYZXV2cglMjJfV%2FsEryFJJyR5S0MNc%2BORxlPjg%2F8v8GwTFXW%2Ff0uRB6oHT9bVK6hPUqhXztZgLGJbKDLZYqSYPEiY%2BsHJuBkX%2FLO21R6YrnvZecJshsZWsyHIwM57RMA1hBBU%2B2nrbnSSl3LQss0qtHixpUYegKPcAhdK%2BUNuqCJLjOpNhq28jx5vp9jsPUhBpSmQ2pA7yJmU&X-Amz-Signature=597cedcb8bcba1ed7148770ff2109badd80d1c5a31eeddfd33337e56e66da900&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653KLOMOM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCOp5T09TN9cgehxzvLFf51Vb1Z042eQiFk7wsFLK17MQIhAO93u5nIVcn3ALpfza33WZ3gqVeZV6cEKmOLF66TTWp4Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxPY%2F9TxZ16JI68QaIq3APoYUneMdIG76ce3q968Pt1t%2B0kvlQ1CLnZh%2FVdZp8VDcDy0%2BvO9pptlNVaqEm3DOQPhPC%2FiNafDSHB18c0XrOjV4VTnAay2lgbeeaSVpdfE8NlAOCk0Y9y%2FXUkJY7jliWQ9B4ImqXie5PB%2FCePhN6H9gtv9xl6w%2BzM80tp0ygvyKP7Zly5wtoueRCM6JfSnCYp%2FBSeLxPemH4QSeT5kwPh9v67jtvm6N5gnQroCfKGNK39ppemO%2FtcWReClJMaduD06RIwJuYpCff%2FutGlG0%2B%2FSnr8uMGQjEdM17qFNs%2B8QVGQoG1UBlwAdNAj4vZRO7%2Fz%2Bjr3BQ3xakN%2BMtnZJxy6zIfuiXawYph8pCoLpU6r56E7YDkSQFiTAYmNE1D9HG6eDn2r%2FClSCFYHRHFk%2BVdQ1LCFvvsC%2BQGw%2FQTUyMmfKPuNI23ryWQt7KJslahNgc3AH9DWe6co1r%2BScjBZfWa9Ed5%2FEczDFbPHNnlEhNthGvpAnZgY%2FXZokCair49q5ScCD8ocN9SAsELnhEbpnHv1KXFqF%2Be3fIMBkNdj5yl7BVQSuaOugH0X69TAOwXPa47kBlExM4JE4SGgsZ%2BHePeNH30efCFslD0BCw7XUlBIQfE%2BxD2YtHBoR7%2B3FDCzva6%2BBjqkAZOAoHfdtfdal8PQYZXV2cglMjJfV%2FsEryFJJyR5S0MNc%2BORxlPjg%2F8v8GwTFXW%2Ff0uRB6oHT9bVK6hPUqhXztZgLGJbKDLZYqSYPEiY%2BsHJuBkX%2FLO21R6YrnvZecJshsZWsyHIwM57RMA1hBBU%2B2nrbnSSl3LQss0qtHixpUYegKPcAhdK%2BUNuqCJLjOpNhq28jx5vp9jsPUhBpSmQ2pA7yJmU&X-Amz-Signature=54b62fd7fc119296085f8a4afae8c37fa610423c9eeeaea950b98870563c09d2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
