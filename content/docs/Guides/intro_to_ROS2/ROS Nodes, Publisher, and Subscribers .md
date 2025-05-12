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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXOXZ6CR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCuE2WJRl2lcwfbZDjL3mj3qOS3P7QNxdAt5wLuadSo5gIgC0F%2BCtQUm8gePNvsv7pXj2C%2FwBpv4WGmaGUihrPV5LEqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGG75aed18uH8ittryrcA%2B%2FcS1apPlZgOnZCQ5Y1mtFWiXSLS8HtSP6AUWl4y4zxVh4NelJdXC77DEOnmHL%2FdA3hzgugtZ%2FdWhIo39IAF25TBz2Bf53od5QB4LlVnwyQ0GK4Ltm%2BaEwfAln76dx5mYMIhlHXOB3q9Lds89g7WoiXhQXuKySGOYS9MasOEfCsWufoQP3x5vbctVJzgypPxWT%2FfyVKuEIfUZEcuUd7FiInI2g4i5Z98fEsTnPKoWZM%2BvxvidCj3%2BCwm73RGawHUjNEMlJ1gWfvQpTm3lFOzb4reXdTRTwMbdiEZtakWdRyk3E2zPwkJCX%2BbkMeedgFLjSGN%2Fm77m%2BMek1F6SRDf%2FfKd79tMpCg7cji2SP2P6Pwqa9l6gI3jgQFXlIzO%2FCIJGov1tWjjXVjPUowwDMNcRVBNb0v73FVwkiC5runjGLWSdkBUGmgZOKOrj0uTfZzjY%2FQqEaBMnrnFXWO5lNcastYSUGNjJO9isAG0IU%2FWmOoegwdfqgu5DEOt3d%2BQeLD24HbuAqsdQeS2mhovxy2rk%2FSZ03Ddv5c%2B8B6IGH%2FbIw7Tm%2BlFaw0Ncm6f1BOaZ418vj3kHc99L8LRufUtuSoqiEUxU1QwI4HrT3FZQH1J%2BU5zsxff7ro9JB1p1DRMKmFhcEGOqUBNi8kDA18BVDa5RWo8WxRGFrmxrjPByAKG6wFeq7gVhx%2BSX3TIJXvMhf3syosAPNidd2lDvx6CXFzEjS31vteXZZM8BxJtamo7tkt9%2FdafxGFZrSMz%2BCMimo6EDxqQa8%2BqDZtnxmb1KrLTr8pJah5yH32jFGYW9tqRV8nsBaDa2TkNf7SWQ3Wq%2BpW64%2F4WNKbulVrcrYoY%2FrvhDYZXBomqE%2B9f2cF&X-Amz-Signature=afbd64983d448216deb873a9013673d079b605e42ca53c1ef095b26bee64588b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXOXZ6CR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCuE2WJRl2lcwfbZDjL3mj3qOS3P7QNxdAt5wLuadSo5gIgC0F%2BCtQUm8gePNvsv7pXj2C%2FwBpv4WGmaGUihrPV5LEqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGG75aed18uH8ittryrcA%2B%2FcS1apPlZgOnZCQ5Y1mtFWiXSLS8HtSP6AUWl4y4zxVh4NelJdXC77DEOnmHL%2FdA3hzgugtZ%2FdWhIo39IAF25TBz2Bf53od5QB4LlVnwyQ0GK4Ltm%2BaEwfAln76dx5mYMIhlHXOB3q9Lds89g7WoiXhQXuKySGOYS9MasOEfCsWufoQP3x5vbctVJzgypPxWT%2FfyVKuEIfUZEcuUd7FiInI2g4i5Z98fEsTnPKoWZM%2BvxvidCj3%2BCwm73RGawHUjNEMlJ1gWfvQpTm3lFOzb4reXdTRTwMbdiEZtakWdRyk3E2zPwkJCX%2BbkMeedgFLjSGN%2Fm77m%2BMek1F6SRDf%2FfKd79tMpCg7cji2SP2P6Pwqa9l6gI3jgQFXlIzO%2FCIJGov1tWjjXVjPUowwDMNcRVBNb0v73FVwkiC5runjGLWSdkBUGmgZOKOrj0uTfZzjY%2FQqEaBMnrnFXWO5lNcastYSUGNjJO9isAG0IU%2FWmOoegwdfqgu5DEOt3d%2BQeLD24HbuAqsdQeS2mhovxy2rk%2FSZ03Ddv5c%2B8B6IGH%2FbIw7Tm%2BlFaw0Ncm6f1BOaZ418vj3kHc99L8LRufUtuSoqiEUxU1QwI4HrT3FZQH1J%2BU5zsxff7ro9JB1p1DRMKmFhcEGOqUBNi8kDA18BVDa5RWo8WxRGFrmxrjPByAKG6wFeq7gVhx%2BSX3TIJXvMhf3syosAPNidd2lDvx6CXFzEjS31vteXZZM8BxJtamo7tkt9%2FdafxGFZrSMz%2BCMimo6EDxqQa8%2BqDZtnxmb1KrLTr8pJah5yH32jFGYW9tqRV8nsBaDa2TkNf7SWQ3Wq%2BpW64%2F4WNKbulVrcrYoY%2FrvhDYZXBomqE%2B9f2cF&X-Amz-Signature=809742a43789812f7374ae218e32b7099c2fa42c369595937941ff403a388bdc&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXOXZ6CR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCuE2WJRl2lcwfbZDjL3mj3qOS3P7QNxdAt5wLuadSo5gIgC0F%2BCtQUm8gePNvsv7pXj2C%2FwBpv4WGmaGUihrPV5LEqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGG75aed18uH8ittryrcA%2B%2FcS1apPlZgOnZCQ5Y1mtFWiXSLS8HtSP6AUWl4y4zxVh4NelJdXC77DEOnmHL%2FdA3hzgugtZ%2FdWhIo39IAF25TBz2Bf53od5QB4LlVnwyQ0GK4Ltm%2BaEwfAln76dx5mYMIhlHXOB3q9Lds89g7WoiXhQXuKySGOYS9MasOEfCsWufoQP3x5vbctVJzgypPxWT%2FfyVKuEIfUZEcuUd7FiInI2g4i5Z98fEsTnPKoWZM%2BvxvidCj3%2BCwm73RGawHUjNEMlJ1gWfvQpTm3lFOzb4reXdTRTwMbdiEZtakWdRyk3E2zPwkJCX%2BbkMeedgFLjSGN%2Fm77m%2BMek1F6SRDf%2FfKd79tMpCg7cji2SP2P6Pwqa9l6gI3jgQFXlIzO%2FCIJGov1tWjjXVjPUowwDMNcRVBNb0v73FVwkiC5runjGLWSdkBUGmgZOKOrj0uTfZzjY%2FQqEaBMnrnFXWO5lNcastYSUGNjJO9isAG0IU%2FWmOoegwdfqgu5DEOt3d%2BQeLD24HbuAqsdQeS2mhovxy2rk%2FSZ03Ddv5c%2B8B6IGH%2FbIw7Tm%2BlFaw0Ncm6f1BOaZ418vj3kHc99L8LRufUtuSoqiEUxU1QwI4HrT3FZQH1J%2BU5zsxff7ro9JB1p1DRMKmFhcEGOqUBNi8kDA18BVDa5RWo8WxRGFrmxrjPByAKG6wFeq7gVhx%2BSX3TIJXvMhf3syosAPNidd2lDvx6CXFzEjS31vteXZZM8BxJtamo7tkt9%2FdafxGFZrSMz%2BCMimo6EDxqQa8%2BqDZtnxmb1KrLTr8pJah5yH32jFGYW9tqRV8nsBaDa2TkNf7SWQ3Wq%2BpW64%2F4WNKbulVrcrYoY%2FrvhDYZXBomqE%2B9f2cF&X-Amz-Signature=485c75e3d847d210ad2d1bc98294f59097e49a1f744dcbd345356e7849064699&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXOXZ6CR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCuE2WJRl2lcwfbZDjL3mj3qOS3P7QNxdAt5wLuadSo5gIgC0F%2BCtQUm8gePNvsv7pXj2C%2FwBpv4WGmaGUihrPV5LEqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGG75aed18uH8ittryrcA%2B%2FcS1apPlZgOnZCQ5Y1mtFWiXSLS8HtSP6AUWl4y4zxVh4NelJdXC77DEOnmHL%2FdA3hzgugtZ%2FdWhIo39IAF25TBz2Bf53od5QB4LlVnwyQ0GK4Ltm%2BaEwfAln76dx5mYMIhlHXOB3q9Lds89g7WoiXhQXuKySGOYS9MasOEfCsWufoQP3x5vbctVJzgypPxWT%2FfyVKuEIfUZEcuUd7FiInI2g4i5Z98fEsTnPKoWZM%2BvxvidCj3%2BCwm73RGawHUjNEMlJ1gWfvQpTm3lFOzb4reXdTRTwMbdiEZtakWdRyk3E2zPwkJCX%2BbkMeedgFLjSGN%2Fm77m%2BMek1F6SRDf%2FfKd79tMpCg7cji2SP2P6Pwqa9l6gI3jgQFXlIzO%2FCIJGov1tWjjXVjPUowwDMNcRVBNb0v73FVwkiC5runjGLWSdkBUGmgZOKOrj0uTfZzjY%2FQqEaBMnrnFXWO5lNcastYSUGNjJO9isAG0IU%2FWmOoegwdfqgu5DEOt3d%2BQeLD24HbuAqsdQeS2mhovxy2rk%2FSZ03Ddv5c%2B8B6IGH%2FbIw7Tm%2BlFaw0Ncm6f1BOaZ418vj3kHc99L8LRufUtuSoqiEUxU1QwI4HrT3FZQH1J%2BU5zsxff7ro9JB1p1DRMKmFhcEGOqUBNi8kDA18BVDa5RWo8WxRGFrmxrjPByAKG6wFeq7gVhx%2BSX3TIJXvMhf3syosAPNidd2lDvx6CXFzEjS31vteXZZM8BxJtamo7tkt9%2FdafxGFZrSMz%2BCMimo6EDxqQa8%2BqDZtnxmb1KrLTr8pJah5yH32jFGYW9tqRV8nsBaDa2TkNf7SWQ3Wq%2BpW64%2F4WNKbulVrcrYoY%2FrvhDYZXBomqE%2B9f2cF&X-Amz-Signature=0f6529cdb69bee3ee989dc29667439bdee601e9b1b4d1e500d39bbb41f17a2a7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXOXZ6CR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCuE2WJRl2lcwfbZDjL3mj3qOS3P7QNxdAt5wLuadSo5gIgC0F%2BCtQUm8gePNvsv7pXj2C%2FwBpv4WGmaGUihrPV5LEqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGG75aed18uH8ittryrcA%2B%2FcS1apPlZgOnZCQ5Y1mtFWiXSLS8HtSP6AUWl4y4zxVh4NelJdXC77DEOnmHL%2FdA3hzgugtZ%2FdWhIo39IAF25TBz2Bf53od5QB4LlVnwyQ0GK4Ltm%2BaEwfAln76dx5mYMIhlHXOB3q9Lds89g7WoiXhQXuKySGOYS9MasOEfCsWufoQP3x5vbctVJzgypPxWT%2FfyVKuEIfUZEcuUd7FiInI2g4i5Z98fEsTnPKoWZM%2BvxvidCj3%2BCwm73RGawHUjNEMlJ1gWfvQpTm3lFOzb4reXdTRTwMbdiEZtakWdRyk3E2zPwkJCX%2BbkMeedgFLjSGN%2Fm77m%2BMek1F6SRDf%2FfKd79tMpCg7cji2SP2P6Pwqa9l6gI3jgQFXlIzO%2FCIJGov1tWjjXVjPUowwDMNcRVBNb0v73FVwkiC5runjGLWSdkBUGmgZOKOrj0uTfZzjY%2FQqEaBMnrnFXWO5lNcastYSUGNjJO9isAG0IU%2FWmOoegwdfqgu5DEOt3d%2BQeLD24HbuAqsdQeS2mhovxy2rk%2FSZ03Ddv5c%2B8B6IGH%2FbIw7Tm%2BlFaw0Ncm6f1BOaZ418vj3kHc99L8LRufUtuSoqiEUxU1QwI4HrT3FZQH1J%2BU5zsxff7ro9JB1p1DRMKmFhcEGOqUBNi8kDA18BVDa5RWo8WxRGFrmxrjPByAKG6wFeq7gVhx%2BSX3TIJXvMhf3syosAPNidd2lDvx6CXFzEjS31vteXZZM8BxJtamo7tkt9%2FdafxGFZrSMz%2BCMimo6EDxqQa8%2BqDZtnxmb1KrLTr8pJah5yH32jFGYW9tqRV8nsBaDa2TkNf7SWQ3Wq%2BpW64%2F4WNKbulVrcrYoY%2FrvhDYZXBomqE%2B9f2cF&X-Amz-Signature=40238d3b2c292cbf2517dc3685c1eb462aa6c1584b6de6b493aec11201346800&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXOXZ6CR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCuE2WJRl2lcwfbZDjL3mj3qOS3P7QNxdAt5wLuadSo5gIgC0F%2BCtQUm8gePNvsv7pXj2C%2FwBpv4WGmaGUihrPV5LEqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGG75aed18uH8ittryrcA%2B%2FcS1apPlZgOnZCQ5Y1mtFWiXSLS8HtSP6AUWl4y4zxVh4NelJdXC77DEOnmHL%2FdA3hzgugtZ%2FdWhIo39IAF25TBz2Bf53od5QB4LlVnwyQ0GK4Ltm%2BaEwfAln76dx5mYMIhlHXOB3q9Lds89g7WoiXhQXuKySGOYS9MasOEfCsWufoQP3x5vbctVJzgypPxWT%2FfyVKuEIfUZEcuUd7FiInI2g4i5Z98fEsTnPKoWZM%2BvxvidCj3%2BCwm73RGawHUjNEMlJ1gWfvQpTm3lFOzb4reXdTRTwMbdiEZtakWdRyk3E2zPwkJCX%2BbkMeedgFLjSGN%2Fm77m%2BMek1F6SRDf%2FfKd79tMpCg7cji2SP2P6Pwqa9l6gI3jgQFXlIzO%2FCIJGov1tWjjXVjPUowwDMNcRVBNb0v73FVwkiC5runjGLWSdkBUGmgZOKOrj0uTfZzjY%2FQqEaBMnrnFXWO5lNcastYSUGNjJO9isAG0IU%2FWmOoegwdfqgu5DEOt3d%2BQeLD24HbuAqsdQeS2mhovxy2rk%2FSZ03Ddv5c%2B8B6IGH%2FbIw7Tm%2BlFaw0Ncm6f1BOaZ418vj3kHc99L8LRufUtuSoqiEUxU1QwI4HrT3FZQH1J%2BU5zsxff7ro9JB1p1DRMKmFhcEGOqUBNi8kDA18BVDa5RWo8WxRGFrmxrjPByAKG6wFeq7gVhx%2BSX3TIJXvMhf3syosAPNidd2lDvx6CXFzEjS31vteXZZM8BxJtamo7tkt9%2FdafxGFZrSMz%2BCMimo6EDxqQa8%2BqDZtnxmb1KrLTr8pJah5yH32jFGYW9tqRV8nsBaDa2TkNf7SWQ3Wq%2BpW64%2F4WNKbulVrcrYoY%2FrvhDYZXBomqE%2B9f2cF&X-Amz-Signature=190ce5c7326a51f40f289a541392a07739837d57ca9b73a10f4644a53794ea13&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXOXZ6CR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCuE2WJRl2lcwfbZDjL3mj3qOS3P7QNxdAt5wLuadSo5gIgC0F%2BCtQUm8gePNvsv7pXj2C%2FwBpv4WGmaGUihrPV5LEqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGG75aed18uH8ittryrcA%2B%2FcS1apPlZgOnZCQ5Y1mtFWiXSLS8HtSP6AUWl4y4zxVh4NelJdXC77DEOnmHL%2FdA3hzgugtZ%2FdWhIo39IAF25TBz2Bf53od5QB4LlVnwyQ0GK4Ltm%2BaEwfAln76dx5mYMIhlHXOB3q9Lds89g7WoiXhQXuKySGOYS9MasOEfCsWufoQP3x5vbctVJzgypPxWT%2FfyVKuEIfUZEcuUd7FiInI2g4i5Z98fEsTnPKoWZM%2BvxvidCj3%2BCwm73RGawHUjNEMlJ1gWfvQpTm3lFOzb4reXdTRTwMbdiEZtakWdRyk3E2zPwkJCX%2BbkMeedgFLjSGN%2Fm77m%2BMek1F6SRDf%2FfKd79tMpCg7cji2SP2P6Pwqa9l6gI3jgQFXlIzO%2FCIJGov1tWjjXVjPUowwDMNcRVBNb0v73FVwkiC5runjGLWSdkBUGmgZOKOrj0uTfZzjY%2FQqEaBMnrnFXWO5lNcastYSUGNjJO9isAG0IU%2FWmOoegwdfqgu5DEOt3d%2BQeLD24HbuAqsdQeS2mhovxy2rk%2FSZ03Ddv5c%2B8B6IGH%2FbIw7Tm%2BlFaw0Ncm6f1BOaZ418vj3kHc99L8LRufUtuSoqiEUxU1QwI4HrT3FZQH1J%2BU5zsxff7ro9JB1p1DRMKmFhcEGOqUBNi8kDA18BVDa5RWo8WxRGFrmxrjPByAKG6wFeq7gVhx%2BSX3TIJXvMhf3syosAPNidd2lDvx6CXFzEjS31vteXZZM8BxJtamo7tkt9%2FdafxGFZrSMz%2BCMimo6EDxqQa8%2BqDZtnxmb1KrLTr8pJah5yH32jFGYW9tqRV8nsBaDa2TkNf7SWQ3Wq%2BpW64%2F4WNKbulVrcrYoY%2FrvhDYZXBomqE%2B9f2cF&X-Amz-Signature=1ae5581629d5043203274ec04f5c0e5e9a0c8c31181cc9c196758cf4d51c8a20&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXOXZ6CR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCuE2WJRl2lcwfbZDjL3mj3qOS3P7QNxdAt5wLuadSo5gIgC0F%2BCtQUm8gePNvsv7pXj2C%2FwBpv4WGmaGUihrPV5LEqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGG75aed18uH8ittryrcA%2B%2FcS1apPlZgOnZCQ5Y1mtFWiXSLS8HtSP6AUWl4y4zxVh4NelJdXC77DEOnmHL%2FdA3hzgugtZ%2FdWhIo39IAF25TBz2Bf53od5QB4LlVnwyQ0GK4Ltm%2BaEwfAln76dx5mYMIhlHXOB3q9Lds89g7WoiXhQXuKySGOYS9MasOEfCsWufoQP3x5vbctVJzgypPxWT%2FfyVKuEIfUZEcuUd7FiInI2g4i5Z98fEsTnPKoWZM%2BvxvidCj3%2BCwm73RGawHUjNEMlJ1gWfvQpTm3lFOzb4reXdTRTwMbdiEZtakWdRyk3E2zPwkJCX%2BbkMeedgFLjSGN%2Fm77m%2BMek1F6SRDf%2FfKd79tMpCg7cji2SP2P6Pwqa9l6gI3jgQFXlIzO%2FCIJGov1tWjjXVjPUowwDMNcRVBNb0v73FVwkiC5runjGLWSdkBUGmgZOKOrj0uTfZzjY%2FQqEaBMnrnFXWO5lNcastYSUGNjJO9isAG0IU%2FWmOoegwdfqgu5DEOt3d%2BQeLD24HbuAqsdQeS2mhovxy2rk%2FSZ03Ddv5c%2B8B6IGH%2FbIw7Tm%2BlFaw0Ncm6f1BOaZ418vj3kHc99L8LRufUtuSoqiEUxU1QwI4HrT3FZQH1J%2BU5zsxff7ro9JB1p1DRMKmFhcEGOqUBNi8kDA18BVDa5RWo8WxRGFrmxrjPByAKG6wFeq7gVhx%2BSX3TIJXvMhf3syosAPNidd2lDvx6CXFzEjS31vteXZZM8BxJtamo7tkt9%2FdafxGFZrSMz%2BCMimo6EDxqQa8%2BqDZtnxmb1KrLTr8pJah5yH32jFGYW9tqRV8nsBaDa2TkNf7SWQ3Wq%2BpW64%2F4WNKbulVrcrYoY%2FrvhDYZXBomqE%2B9f2cF&X-Amz-Signature=ece3449ddb469d9eaae48905d7cde54c30f8017faaf4678a9525350b31a55e8e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
