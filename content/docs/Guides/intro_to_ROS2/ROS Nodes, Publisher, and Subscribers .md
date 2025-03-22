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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHTC27Q2%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCrcvRyj4EVyHbPusZ4EILcKWQl8qMuPPu6sHqLl%2FL33QIhAM7p2aEpPOpZ%2B1y0i8UiLboleR9oS7ujU0lyJ4kLwctGKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDnGzmuAHdXi7xhIAq3AP2BVzRFPt1du2e%2F4nmIBUWTocleY5k6vx6gP61exnvyGHY6tdPrHeFk0ikY1o2lg95gTpH5JCW5LhMiqci%2BIccdT4C6soPI4m0Rrrhw88lcEKwObEDRktCK9I%2FMx0CyUwmjHBc%2BLxWa%2FOqN%2BOqJPCTb7JX3VGeIJkck%2FrVuuFcRsZLMitNgC6HZX3zviqDigtA0DrnTNnHfSEvkrcsiv6lZz7FPKPe4K89HDfVnjz3KtrpNUMKRay8HYxl75UkcbrVpw3pxknXNMCb4EgC6ctnoVSAb29PWwabsPhecCbc84pRe28Cb1N1qUlZtzBfCtBH7Xog8NqdvEMIf7tNXY3w%2BQ0FCJjeH%2FZkxwkZ4DJobQrBNaO6wC7LuL4a9qqAnbQvBciYlbKwWoJQYz%2FAldx9sXSB%2FvgUXT2hpgQAiccVwGtz5nYuGcxi3t%2BpMvVIkyim81%2BnZqvaCu2JUISvqqwwfHa1VHKDR2vKXUnyy%2BeqUwb8gBrfrUnm%2BTDFvjzetVj9BfDC0GxlAV0OZz4Ppx%2B%2BsRRtH%2Bp7MpuDEI1xv5QWu0mE53rjHPF8ZRsrzleM1ELDomR3bsMXUKNFnLrJqe9S%2FfVCsiLebUGaqqHMYH%2FYyiLgMGsAE%2Fb3p%2FFfNDDamfi%2BBjqkAa48%2FYqnk78fTUcMJmGHznjeeOekSfg9qoy28JLHzpHpoqXwloVfdg1FmOqkKZH63Jy8UaEO%2F%2FZXMKUytUYkdFGmplc4ZTujAZ9fFVlLAkOb0QgvflXEfwpG%2BXYJTBYWdqSyB2xWQHq8yB%2F1y8PC3D9B2pk39Q6KhIsuUIghdcVE%2BUeKjLr3x6QeMycWNN%2BGe%2BubtQl8tkpw6XkPY6Qpb%2BLyxmQn&X-Amz-Signature=9b104a10d5c45c10b39f0f3515549ac460f2906ab311d0cc9710104b16d650e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHTC27Q2%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCrcvRyj4EVyHbPusZ4EILcKWQl8qMuPPu6sHqLl%2FL33QIhAM7p2aEpPOpZ%2B1y0i8UiLboleR9oS7ujU0lyJ4kLwctGKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDnGzmuAHdXi7xhIAq3AP2BVzRFPt1du2e%2F4nmIBUWTocleY5k6vx6gP61exnvyGHY6tdPrHeFk0ikY1o2lg95gTpH5JCW5LhMiqci%2BIccdT4C6soPI4m0Rrrhw88lcEKwObEDRktCK9I%2FMx0CyUwmjHBc%2BLxWa%2FOqN%2BOqJPCTb7JX3VGeIJkck%2FrVuuFcRsZLMitNgC6HZX3zviqDigtA0DrnTNnHfSEvkrcsiv6lZz7FPKPe4K89HDfVnjz3KtrpNUMKRay8HYxl75UkcbrVpw3pxknXNMCb4EgC6ctnoVSAb29PWwabsPhecCbc84pRe28Cb1N1qUlZtzBfCtBH7Xog8NqdvEMIf7tNXY3w%2BQ0FCJjeH%2FZkxwkZ4DJobQrBNaO6wC7LuL4a9qqAnbQvBciYlbKwWoJQYz%2FAldx9sXSB%2FvgUXT2hpgQAiccVwGtz5nYuGcxi3t%2BpMvVIkyim81%2BnZqvaCu2JUISvqqwwfHa1VHKDR2vKXUnyy%2BeqUwb8gBrfrUnm%2BTDFvjzetVj9BfDC0GxlAV0OZz4Ppx%2B%2BsRRtH%2Bp7MpuDEI1xv5QWu0mE53rjHPF8ZRsrzleM1ELDomR3bsMXUKNFnLrJqe9S%2FfVCsiLebUGaqqHMYH%2FYyiLgMGsAE%2Fb3p%2FFfNDDamfi%2BBjqkAa48%2FYqnk78fTUcMJmGHznjeeOekSfg9qoy28JLHzpHpoqXwloVfdg1FmOqkKZH63Jy8UaEO%2F%2FZXMKUytUYkdFGmplc4ZTujAZ9fFVlLAkOb0QgvflXEfwpG%2BXYJTBYWdqSyB2xWQHq8yB%2F1y8PC3D9B2pk39Q6KhIsuUIghdcVE%2BUeKjLr3x6QeMycWNN%2BGe%2BubtQl8tkpw6XkPY6Qpb%2BLyxmQn&X-Amz-Signature=ce8322e914fb9c0c5d0a10b3937a191b37c7c970ba8bae0f9995591f2e7a1798&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHTC27Q2%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCrcvRyj4EVyHbPusZ4EILcKWQl8qMuPPu6sHqLl%2FL33QIhAM7p2aEpPOpZ%2B1y0i8UiLboleR9oS7ujU0lyJ4kLwctGKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDnGzmuAHdXi7xhIAq3AP2BVzRFPt1du2e%2F4nmIBUWTocleY5k6vx6gP61exnvyGHY6tdPrHeFk0ikY1o2lg95gTpH5JCW5LhMiqci%2BIccdT4C6soPI4m0Rrrhw88lcEKwObEDRktCK9I%2FMx0CyUwmjHBc%2BLxWa%2FOqN%2BOqJPCTb7JX3VGeIJkck%2FrVuuFcRsZLMitNgC6HZX3zviqDigtA0DrnTNnHfSEvkrcsiv6lZz7FPKPe4K89HDfVnjz3KtrpNUMKRay8HYxl75UkcbrVpw3pxknXNMCb4EgC6ctnoVSAb29PWwabsPhecCbc84pRe28Cb1N1qUlZtzBfCtBH7Xog8NqdvEMIf7tNXY3w%2BQ0FCJjeH%2FZkxwkZ4DJobQrBNaO6wC7LuL4a9qqAnbQvBciYlbKwWoJQYz%2FAldx9sXSB%2FvgUXT2hpgQAiccVwGtz5nYuGcxi3t%2BpMvVIkyim81%2BnZqvaCu2JUISvqqwwfHa1VHKDR2vKXUnyy%2BeqUwb8gBrfrUnm%2BTDFvjzetVj9BfDC0GxlAV0OZz4Ppx%2B%2BsRRtH%2Bp7MpuDEI1xv5QWu0mE53rjHPF8ZRsrzleM1ELDomR3bsMXUKNFnLrJqe9S%2FfVCsiLebUGaqqHMYH%2FYyiLgMGsAE%2Fb3p%2FFfNDDamfi%2BBjqkAa48%2FYqnk78fTUcMJmGHznjeeOekSfg9qoy28JLHzpHpoqXwloVfdg1FmOqkKZH63Jy8UaEO%2F%2FZXMKUytUYkdFGmplc4ZTujAZ9fFVlLAkOb0QgvflXEfwpG%2BXYJTBYWdqSyB2xWQHq8yB%2F1y8PC3D9B2pk39Q6KhIsuUIghdcVE%2BUeKjLr3x6QeMycWNN%2BGe%2BubtQl8tkpw6XkPY6Qpb%2BLyxmQn&X-Amz-Signature=8a39aadd7088fdd325ff7e7b3e1d98cc3149e4b6d40a14cffcda49e2691c8be8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHTC27Q2%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCrcvRyj4EVyHbPusZ4EILcKWQl8qMuPPu6sHqLl%2FL33QIhAM7p2aEpPOpZ%2B1y0i8UiLboleR9oS7ujU0lyJ4kLwctGKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDnGzmuAHdXi7xhIAq3AP2BVzRFPt1du2e%2F4nmIBUWTocleY5k6vx6gP61exnvyGHY6tdPrHeFk0ikY1o2lg95gTpH5JCW5LhMiqci%2BIccdT4C6soPI4m0Rrrhw88lcEKwObEDRktCK9I%2FMx0CyUwmjHBc%2BLxWa%2FOqN%2BOqJPCTb7JX3VGeIJkck%2FrVuuFcRsZLMitNgC6HZX3zviqDigtA0DrnTNnHfSEvkrcsiv6lZz7FPKPe4K89HDfVnjz3KtrpNUMKRay8HYxl75UkcbrVpw3pxknXNMCb4EgC6ctnoVSAb29PWwabsPhecCbc84pRe28Cb1N1qUlZtzBfCtBH7Xog8NqdvEMIf7tNXY3w%2BQ0FCJjeH%2FZkxwkZ4DJobQrBNaO6wC7LuL4a9qqAnbQvBciYlbKwWoJQYz%2FAldx9sXSB%2FvgUXT2hpgQAiccVwGtz5nYuGcxi3t%2BpMvVIkyim81%2BnZqvaCu2JUISvqqwwfHa1VHKDR2vKXUnyy%2BeqUwb8gBrfrUnm%2BTDFvjzetVj9BfDC0GxlAV0OZz4Ppx%2B%2BsRRtH%2Bp7MpuDEI1xv5QWu0mE53rjHPF8ZRsrzleM1ELDomR3bsMXUKNFnLrJqe9S%2FfVCsiLebUGaqqHMYH%2FYyiLgMGsAE%2Fb3p%2FFfNDDamfi%2BBjqkAa48%2FYqnk78fTUcMJmGHznjeeOekSfg9qoy28JLHzpHpoqXwloVfdg1FmOqkKZH63Jy8UaEO%2F%2FZXMKUytUYkdFGmplc4ZTujAZ9fFVlLAkOb0QgvflXEfwpG%2BXYJTBYWdqSyB2xWQHq8yB%2F1y8PC3D9B2pk39Q6KhIsuUIghdcVE%2BUeKjLr3x6QeMycWNN%2BGe%2BubtQl8tkpw6XkPY6Qpb%2BLyxmQn&X-Amz-Signature=1520179b23962440de3352c70c3efc44507ae3b8d5a1383a48c780be6136350d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHTC27Q2%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCrcvRyj4EVyHbPusZ4EILcKWQl8qMuPPu6sHqLl%2FL33QIhAM7p2aEpPOpZ%2B1y0i8UiLboleR9oS7ujU0lyJ4kLwctGKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDnGzmuAHdXi7xhIAq3AP2BVzRFPt1du2e%2F4nmIBUWTocleY5k6vx6gP61exnvyGHY6tdPrHeFk0ikY1o2lg95gTpH5JCW5LhMiqci%2BIccdT4C6soPI4m0Rrrhw88lcEKwObEDRktCK9I%2FMx0CyUwmjHBc%2BLxWa%2FOqN%2BOqJPCTb7JX3VGeIJkck%2FrVuuFcRsZLMitNgC6HZX3zviqDigtA0DrnTNnHfSEvkrcsiv6lZz7FPKPe4K89HDfVnjz3KtrpNUMKRay8HYxl75UkcbrVpw3pxknXNMCb4EgC6ctnoVSAb29PWwabsPhecCbc84pRe28Cb1N1qUlZtzBfCtBH7Xog8NqdvEMIf7tNXY3w%2BQ0FCJjeH%2FZkxwkZ4DJobQrBNaO6wC7LuL4a9qqAnbQvBciYlbKwWoJQYz%2FAldx9sXSB%2FvgUXT2hpgQAiccVwGtz5nYuGcxi3t%2BpMvVIkyim81%2BnZqvaCu2JUISvqqwwfHa1VHKDR2vKXUnyy%2BeqUwb8gBrfrUnm%2BTDFvjzetVj9BfDC0GxlAV0OZz4Ppx%2B%2BsRRtH%2Bp7MpuDEI1xv5QWu0mE53rjHPF8ZRsrzleM1ELDomR3bsMXUKNFnLrJqe9S%2FfVCsiLebUGaqqHMYH%2FYyiLgMGsAE%2Fb3p%2FFfNDDamfi%2BBjqkAa48%2FYqnk78fTUcMJmGHznjeeOekSfg9qoy28JLHzpHpoqXwloVfdg1FmOqkKZH63Jy8UaEO%2F%2FZXMKUytUYkdFGmplc4ZTujAZ9fFVlLAkOb0QgvflXEfwpG%2BXYJTBYWdqSyB2xWQHq8yB%2F1y8PC3D9B2pk39Q6KhIsuUIghdcVE%2BUeKjLr3x6QeMycWNN%2BGe%2BubtQl8tkpw6XkPY6Qpb%2BLyxmQn&X-Amz-Signature=1d25f97614644c6ae36c02ab59ab56e0f8cf5eb77ed908fbdb8cb7edd5f6bb9f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHTC27Q2%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCrcvRyj4EVyHbPusZ4EILcKWQl8qMuPPu6sHqLl%2FL33QIhAM7p2aEpPOpZ%2B1y0i8UiLboleR9oS7ujU0lyJ4kLwctGKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDnGzmuAHdXi7xhIAq3AP2BVzRFPt1du2e%2F4nmIBUWTocleY5k6vx6gP61exnvyGHY6tdPrHeFk0ikY1o2lg95gTpH5JCW5LhMiqci%2BIccdT4C6soPI4m0Rrrhw88lcEKwObEDRktCK9I%2FMx0CyUwmjHBc%2BLxWa%2FOqN%2BOqJPCTb7JX3VGeIJkck%2FrVuuFcRsZLMitNgC6HZX3zviqDigtA0DrnTNnHfSEvkrcsiv6lZz7FPKPe4K89HDfVnjz3KtrpNUMKRay8HYxl75UkcbrVpw3pxknXNMCb4EgC6ctnoVSAb29PWwabsPhecCbc84pRe28Cb1N1qUlZtzBfCtBH7Xog8NqdvEMIf7tNXY3w%2BQ0FCJjeH%2FZkxwkZ4DJobQrBNaO6wC7LuL4a9qqAnbQvBciYlbKwWoJQYz%2FAldx9sXSB%2FvgUXT2hpgQAiccVwGtz5nYuGcxi3t%2BpMvVIkyim81%2BnZqvaCu2JUISvqqwwfHa1VHKDR2vKXUnyy%2BeqUwb8gBrfrUnm%2BTDFvjzetVj9BfDC0GxlAV0OZz4Ppx%2B%2BsRRtH%2Bp7MpuDEI1xv5QWu0mE53rjHPF8ZRsrzleM1ELDomR3bsMXUKNFnLrJqe9S%2FfVCsiLebUGaqqHMYH%2FYyiLgMGsAE%2Fb3p%2FFfNDDamfi%2BBjqkAa48%2FYqnk78fTUcMJmGHznjeeOekSfg9qoy28JLHzpHpoqXwloVfdg1FmOqkKZH63Jy8UaEO%2F%2FZXMKUytUYkdFGmplc4ZTujAZ9fFVlLAkOb0QgvflXEfwpG%2BXYJTBYWdqSyB2xWQHq8yB%2F1y8PC3D9B2pk39Q6KhIsuUIghdcVE%2BUeKjLr3x6QeMycWNN%2BGe%2BubtQl8tkpw6XkPY6Qpb%2BLyxmQn&X-Amz-Signature=b5e8ff051b59b299141247a364410e95d848f61a4164200125c8932003a16e79&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHTC27Q2%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCrcvRyj4EVyHbPusZ4EILcKWQl8qMuPPu6sHqLl%2FL33QIhAM7p2aEpPOpZ%2B1y0i8UiLboleR9oS7ujU0lyJ4kLwctGKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDnGzmuAHdXi7xhIAq3AP2BVzRFPt1du2e%2F4nmIBUWTocleY5k6vx6gP61exnvyGHY6tdPrHeFk0ikY1o2lg95gTpH5JCW5LhMiqci%2BIccdT4C6soPI4m0Rrrhw88lcEKwObEDRktCK9I%2FMx0CyUwmjHBc%2BLxWa%2FOqN%2BOqJPCTb7JX3VGeIJkck%2FrVuuFcRsZLMitNgC6HZX3zviqDigtA0DrnTNnHfSEvkrcsiv6lZz7FPKPe4K89HDfVnjz3KtrpNUMKRay8HYxl75UkcbrVpw3pxknXNMCb4EgC6ctnoVSAb29PWwabsPhecCbc84pRe28Cb1N1qUlZtzBfCtBH7Xog8NqdvEMIf7tNXY3w%2BQ0FCJjeH%2FZkxwkZ4DJobQrBNaO6wC7LuL4a9qqAnbQvBciYlbKwWoJQYz%2FAldx9sXSB%2FvgUXT2hpgQAiccVwGtz5nYuGcxi3t%2BpMvVIkyim81%2BnZqvaCu2JUISvqqwwfHa1VHKDR2vKXUnyy%2BeqUwb8gBrfrUnm%2BTDFvjzetVj9BfDC0GxlAV0OZz4Ppx%2B%2BsRRtH%2Bp7MpuDEI1xv5QWu0mE53rjHPF8ZRsrzleM1ELDomR3bsMXUKNFnLrJqe9S%2FfVCsiLebUGaqqHMYH%2FYyiLgMGsAE%2Fb3p%2FFfNDDamfi%2BBjqkAa48%2FYqnk78fTUcMJmGHznjeeOekSfg9qoy28JLHzpHpoqXwloVfdg1FmOqkKZH63Jy8UaEO%2F%2FZXMKUytUYkdFGmplc4ZTujAZ9fFVlLAkOb0QgvflXEfwpG%2BXYJTBYWdqSyB2xWQHq8yB%2F1y8PC3D9B2pk39Q6KhIsuUIghdcVE%2BUeKjLr3x6QeMycWNN%2BGe%2BubtQl8tkpw6XkPY6Qpb%2BLyxmQn&X-Amz-Signature=b6aefdcfb9a20844e1c18c77be9b691ee6d9ab9c6f48c901b27425e5fbd381a7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHTC27Q2%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCrcvRyj4EVyHbPusZ4EILcKWQl8qMuPPu6sHqLl%2FL33QIhAM7p2aEpPOpZ%2B1y0i8UiLboleR9oS7ujU0lyJ4kLwctGKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDnGzmuAHdXi7xhIAq3AP2BVzRFPt1du2e%2F4nmIBUWTocleY5k6vx6gP61exnvyGHY6tdPrHeFk0ikY1o2lg95gTpH5JCW5LhMiqci%2BIccdT4C6soPI4m0Rrrhw88lcEKwObEDRktCK9I%2FMx0CyUwmjHBc%2BLxWa%2FOqN%2BOqJPCTb7JX3VGeIJkck%2FrVuuFcRsZLMitNgC6HZX3zviqDigtA0DrnTNnHfSEvkrcsiv6lZz7FPKPe4K89HDfVnjz3KtrpNUMKRay8HYxl75UkcbrVpw3pxknXNMCb4EgC6ctnoVSAb29PWwabsPhecCbc84pRe28Cb1N1qUlZtzBfCtBH7Xog8NqdvEMIf7tNXY3w%2BQ0FCJjeH%2FZkxwkZ4DJobQrBNaO6wC7LuL4a9qqAnbQvBciYlbKwWoJQYz%2FAldx9sXSB%2FvgUXT2hpgQAiccVwGtz5nYuGcxi3t%2BpMvVIkyim81%2BnZqvaCu2JUISvqqwwfHa1VHKDR2vKXUnyy%2BeqUwb8gBrfrUnm%2BTDFvjzetVj9BfDC0GxlAV0OZz4Ppx%2B%2BsRRtH%2Bp7MpuDEI1xv5QWu0mE53rjHPF8ZRsrzleM1ELDomR3bsMXUKNFnLrJqe9S%2FfVCsiLebUGaqqHMYH%2FYyiLgMGsAE%2Fb3p%2FFfNDDamfi%2BBjqkAa48%2FYqnk78fTUcMJmGHznjeeOekSfg9qoy28JLHzpHpoqXwloVfdg1FmOqkKZH63Jy8UaEO%2F%2FZXMKUytUYkdFGmplc4ZTujAZ9fFVlLAkOb0QgvflXEfwpG%2BXYJTBYWdqSyB2xWQHq8yB%2F1y8PC3D9B2pk39Q6KhIsuUIghdcVE%2BUeKjLr3x6QeMycWNN%2BGe%2BubtQl8tkpw6XkPY6Qpb%2BLyxmQn&X-Amz-Signature=ab439e4ff2b37fc141fe458824a228d9428dd4e4705b8433bf51e02111632cae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
