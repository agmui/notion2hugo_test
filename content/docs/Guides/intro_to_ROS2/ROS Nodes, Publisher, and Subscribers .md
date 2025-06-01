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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZGALOA%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDUrhGZ29YlGPfc1BBclhh9UJSR5%2Bt%2BHCF4INZpuOQq9AiAFM7vDcNryaV34TLbV8dRfrwrCH%2Fb9V4s6uIFfNWtLCiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvL%2BMflEc3q7FiPhYKtwDvF8YwnJs5A5LX9Gw5FocOkq7PLjIQTHeOvNUDEv2JQ0D%2FgBAqGXzfXFuNNzANo1IJcr%2BkkCM092jgfjRZIIqrBsvp7e5UYnSFZGKrO%2FruJa7IzAEdR2g94mzEP0GVmmKewLeRVQbx2KD8TXh139BeT0h5YvhWvNE4WdzSmEFshkgdeLcXgZRvj8H0toqM3McCEMkoO%2FNl9RlevtOih4QvPayJdOBAT6DlXg14jBEkEHYYhwlRl562SRGWnUTTCAR25YhwdlRoqlLaviRqVmzzmLgAnRlH3oNtm1ewigqt%2B5XlT1fnfCxqOUW3cuVMcY5aZqc8uEsarp8gppMd1E4eXfKU%2BzQ3htYhumFW3vqJvyT%2FMc6enQ5o1LB1hgD1P2GN5fMxf04KfK220GWwIy7UHqEq2WKvqja6v8SCDrmr3eFlVR0ym9RIDFwJVcZKlF7ZaQoHZzaD4BwEiJUVUgq63YAG38Xa%2BqXGMIzMXPUqXRkS%2BjdemgKagt%2FP2eduLBUuF8zLnnLxigy1m1d%2BU6pkXSVGGfsg0NRzY9Vd0kMHiaJ9zYkQJmcMIOVBA45NEvVLqoK5y%2BP%2FCNtBy0wbhWZtsSI7OaQnikFRhTF2qRqhrrCeg7QpqFyyGRx86cw9d7wwQY6pgEkDXAstX3X%2BduobXemPp9wJ2Dtfin7sYGZRygtEOBEEjr%2BWjiQuUe9sK5RJaoa9pwd99lAMqmxCjK9GbZQ3xwSlO6AW69lxm3maz6KmpkpBiz6%2FkHHIYFB4DO6r3u8TbFg6ChQzts9VWsbU5ksSOPz3AhDUtaJI87oUczvvXivB3tcBhUf0Jn89A%2FEMI4tR7SnG2Fl2uIEhuxfhySNmujFrDSbQP5l&X-Amz-Signature=2c76c23619e577ea8e1f6c55fc59689ae8708c95401e97bbe113c2799009f150&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZGALOA%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDUrhGZ29YlGPfc1BBclhh9UJSR5%2Bt%2BHCF4INZpuOQq9AiAFM7vDcNryaV34TLbV8dRfrwrCH%2Fb9V4s6uIFfNWtLCiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvL%2BMflEc3q7FiPhYKtwDvF8YwnJs5A5LX9Gw5FocOkq7PLjIQTHeOvNUDEv2JQ0D%2FgBAqGXzfXFuNNzANo1IJcr%2BkkCM092jgfjRZIIqrBsvp7e5UYnSFZGKrO%2FruJa7IzAEdR2g94mzEP0GVmmKewLeRVQbx2KD8TXh139BeT0h5YvhWvNE4WdzSmEFshkgdeLcXgZRvj8H0toqM3McCEMkoO%2FNl9RlevtOih4QvPayJdOBAT6DlXg14jBEkEHYYhwlRl562SRGWnUTTCAR25YhwdlRoqlLaviRqVmzzmLgAnRlH3oNtm1ewigqt%2B5XlT1fnfCxqOUW3cuVMcY5aZqc8uEsarp8gppMd1E4eXfKU%2BzQ3htYhumFW3vqJvyT%2FMc6enQ5o1LB1hgD1P2GN5fMxf04KfK220GWwIy7UHqEq2WKvqja6v8SCDrmr3eFlVR0ym9RIDFwJVcZKlF7ZaQoHZzaD4BwEiJUVUgq63YAG38Xa%2BqXGMIzMXPUqXRkS%2BjdemgKagt%2FP2eduLBUuF8zLnnLxigy1m1d%2BU6pkXSVGGfsg0NRzY9Vd0kMHiaJ9zYkQJmcMIOVBA45NEvVLqoK5y%2BP%2FCNtBy0wbhWZtsSI7OaQnikFRhTF2qRqhrrCeg7QpqFyyGRx86cw9d7wwQY6pgEkDXAstX3X%2BduobXemPp9wJ2Dtfin7sYGZRygtEOBEEjr%2BWjiQuUe9sK5RJaoa9pwd99lAMqmxCjK9GbZQ3xwSlO6AW69lxm3maz6KmpkpBiz6%2FkHHIYFB4DO6r3u8TbFg6ChQzts9VWsbU5ksSOPz3AhDUtaJI87oUczvvXivB3tcBhUf0Jn89A%2FEMI4tR7SnG2Fl2uIEhuxfhySNmujFrDSbQP5l&X-Amz-Signature=b88aa49fc98dba924f79ca5548b6396274ee27992455213cad49b13e7614a6ea&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZGALOA%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDUrhGZ29YlGPfc1BBclhh9UJSR5%2Bt%2BHCF4INZpuOQq9AiAFM7vDcNryaV34TLbV8dRfrwrCH%2Fb9V4s6uIFfNWtLCiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvL%2BMflEc3q7FiPhYKtwDvF8YwnJs5A5LX9Gw5FocOkq7PLjIQTHeOvNUDEv2JQ0D%2FgBAqGXzfXFuNNzANo1IJcr%2BkkCM092jgfjRZIIqrBsvp7e5UYnSFZGKrO%2FruJa7IzAEdR2g94mzEP0GVmmKewLeRVQbx2KD8TXh139BeT0h5YvhWvNE4WdzSmEFshkgdeLcXgZRvj8H0toqM3McCEMkoO%2FNl9RlevtOih4QvPayJdOBAT6DlXg14jBEkEHYYhwlRl562SRGWnUTTCAR25YhwdlRoqlLaviRqVmzzmLgAnRlH3oNtm1ewigqt%2B5XlT1fnfCxqOUW3cuVMcY5aZqc8uEsarp8gppMd1E4eXfKU%2BzQ3htYhumFW3vqJvyT%2FMc6enQ5o1LB1hgD1P2GN5fMxf04KfK220GWwIy7UHqEq2WKvqja6v8SCDrmr3eFlVR0ym9RIDFwJVcZKlF7ZaQoHZzaD4BwEiJUVUgq63YAG38Xa%2BqXGMIzMXPUqXRkS%2BjdemgKagt%2FP2eduLBUuF8zLnnLxigy1m1d%2BU6pkXSVGGfsg0NRzY9Vd0kMHiaJ9zYkQJmcMIOVBA45NEvVLqoK5y%2BP%2FCNtBy0wbhWZtsSI7OaQnikFRhTF2qRqhrrCeg7QpqFyyGRx86cw9d7wwQY6pgEkDXAstX3X%2BduobXemPp9wJ2Dtfin7sYGZRygtEOBEEjr%2BWjiQuUe9sK5RJaoa9pwd99lAMqmxCjK9GbZQ3xwSlO6AW69lxm3maz6KmpkpBiz6%2FkHHIYFB4DO6r3u8TbFg6ChQzts9VWsbU5ksSOPz3AhDUtaJI87oUczvvXivB3tcBhUf0Jn89A%2FEMI4tR7SnG2Fl2uIEhuxfhySNmujFrDSbQP5l&X-Amz-Signature=e2436911224700039d2174e1c1508c89340354356d5519dd0e77086daaeae1fd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZGALOA%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDUrhGZ29YlGPfc1BBclhh9UJSR5%2Bt%2BHCF4INZpuOQq9AiAFM7vDcNryaV34TLbV8dRfrwrCH%2Fb9V4s6uIFfNWtLCiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvL%2BMflEc3q7FiPhYKtwDvF8YwnJs5A5LX9Gw5FocOkq7PLjIQTHeOvNUDEv2JQ0D%2FgBAqGXzfXFuNNzANo1IJcr%2BkkCM092jgfjRZIIqrBsvp7e5UYnSFZGKrO%2FruJa7IzAEdR2g94mzEP0GVmmKewLeRVQbx2KD8TXh139BeT0h5YvhWvNE4WdzSmEFshkgdeLcXgZRvj8H0toqM3McCEMkoO%2FNl9RlevtOih4QvPayJdOBAT6DlXg14jBEkEHYYhwlRl562SRGWnUTTCAR25YhwdlRoqlLaviRqVmzzmLgAnRlH3oNtm1ewigqt%2B5XlT1fnfCxqOUW3cuVMcY5aZqc8uEsarp8gppMd1E4eXfKU%2BzQ3htYhumFW3vqJvyT%2FMc6enQ5o1LB1hgD1P2GN5fMxf04KfK220GWwIy7UHqEq2WKvqja6v8SCDrmr3eFlVR0ym9RIDFwJVcZKlF7ZaQoHZzaD4BwEiJUVUgq63YAG38Xa%2BqXGMIzMXPUqXRkS%2BjdemgKagt%2FP2eduLBUuF8zLnnLxigy1m1d%2BU6pkXSVGGfsg0NRzY9Vd0kMHiaJ9zYkQJmcMIOVBA45NEvVLqoK5y%2BP%2FCNtBy0wbhWZtsSI7OaQnikFRhTF2qRqhrrCeg7QpqFyyGRx86cw9d7wwQY6pgEkDXAstX3X%2BduobXemPp9wJ2Dtfin7sYGZRygtEOBEEjr%2BWjiQuUe9sK5RJaoa9pwd99lAMqmxCjK9GbZQ3xwSlO6AW69lxm3maz6KmpkpBiz6%2FkHHIYFB4DO6r3u8TbFg6ChQzts9VWsbU5ksSOPz3AhDUtaJI87oUczvvXivB3tcBhUf0Jn89A%2FEMI4tR7SnG2Fl2uIEhuxfhySNmujFrDSbQP5l&X-Amz-Signature=4ccd719daea8d97fd57c370d58ba680800976b8c1b26a695c910d85a68f514c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZGALOA%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDUrhGZ29YlGPfc1BBclhh9UJSR5%2Bt%2BHCF4INZpuOQq9AiAFM7vDcNryaV34TLbV8dRfrwrCH%2Fb9V4s6uIFfNWtLCiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvL%2BMflEc3q7FiPhYKtwDvF8YwnJs5A5LX9Gw5FocOkq7PLjIQTHeOvNUDEv2JQ0D%2FgBAqGXzfXFuNNzANo1IJcr%2BkkCM092jgfjRZIIqrBsvp7e5UYnSFZGKrO%2FruJa7IzAEdR2g94mzEP0GVmmKewLeRVQbx2KD8TXh139BeT0h5YvhWvNE4WdzSmEFshkgdeLcXgZRvj8H0toqM3McCEMkoO%2FNl9RlevtOih4QvPayJdOBAT6DlXg14jBEkEHYYhwlRl562SRGWnUTTCAR25YhwdlRoqlLaviRqVmzzmLgAnRlH3oNtm1ewigqt%2B5XlT1fnfCxqOUW3cuVMcY5aZqc8uEsarp8gppMd1E4eXfKU%2BzQ3htYhumFW3vqJvyT%2FMc6enQ5o1LB1hgD1P2GN5fMxf04KfK220GWwIy7UHqEq2WKvqja6v8SCDrmr3eFlVR0ym9RIDFwJVcZKlF7ZaQoHZzaD4BwEiJUVUgq63YAG38Xa%2BqXGMIzMXPUqXRkS%2BjdemgKagt%2FP2eduLBUuF8zLnnLxigy1m1d%2BU6pkXSVGGfsg0NRzY9Vd0kMHiaJ9zYkQJmcMIOVBA45NEvVLqoK5y%2BP%2FCNtBy0wbhWZtsSI7OaQnikFRhTF2qRqhrrCeg7QpqFyyGRx86cw9d7wwQY6pgEkDXAstX3X%2BduobXemPp9wJ2Dtfin7sYGZRygtEOBEEjr%2BWjiQuUe9sK5RJaoa9pwd99lAMqmxCjK9GbZQ3xwSlO6AW69lxm3maz6KmpkpBiz6%2FkHHIYFB4DO6r3u8TbFg6ChQzts9VWsbU5ksSOPz3AhDUtaJI87oUczvvXivB3tcBhUf0Jn89A%2FEMI4tR7SnG2Fl2uIEhuxfhySNmujFrDSbQP5l&X-Amz-Signature=e02e1776f12e2a6139645a42d32ed704daf1ad6f0a4d8dc891fd06f181bee322&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZGALOA%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDUrhGZ29YlGPfc1BBclhh9UJSR5%2Bt%2BHCF4INZpuOQq9AiAFM7vDcNryaV34TLbV8dRfrwrCH%2Fb9V4s6uIFfNWtLCiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvL%2BMflEc3q7FiPhYKtwDvF8YwnJs5A5LX9Gw5FocOkq7PLjIQTHeOvNUDEv2JQ0D%2FgBAqGXzfXFuNNzANo1IJcr%2BkkCM092jgfjRZIIqrBsvp7e5UYnSFZGKrO%2FruJa7IzAEdR2g94mzEP0GVmmKewLeRVQbx2KD8TXh139BeT0h5YvhWvNE4WdzSmEFshkgdeLcXgZRvj8H0toqM3McCEMkoO%2FNl9RlevtOih4QvPayJdOBAT6DlXg14jBEkEHYYhwlRl562SRGWnUTTCAR25YhwdlRoqlLaviRqVmzzmLgAnRlH3oNtm1ewigqt%2B5XlT1fnfCxqOUW3cuVMcY5aZqc8uEsarp8gppMd1E4eXfKU%2BzQ3htYhumFW3vqJvyT%2FMc6enQ5o1LB1hgD1P2GN5fMxf04KfK220GWwIy7UHqEq2WKvqja6v8SCDrmr3eFlVR0ym9RIDFwJVcZKlF7ZaQoHZzaD4BwEiJUVUgq63YAG38Xa%2BqXGMIzMXPUqXRkS%2BjdemgKagt%2FP2eduLBUuF8zLnnLxigy1m1d%2BU6pkXSVGGfsg0NRzY9Vd0kMHiaJ9zYkQJmcMIOVBA45NEvVLqoK5y%2BP%2FCNtBy0wbhWZtsSI7OaQnikFRhTF2qRqhrrCeg7QpqFyyGRx86cw9d7wwQY6pgEkDXAstX3X%2BduobXemPp9wJ2Dtfin7sYGZRygtEOBEEjr%2BWjiQuUe9sK5RJaoa9pwd99lAMqmxCjK9GbZQ3xwSlO6AW69lxm3maz6KmpkpBiz6%2FkHHIYFB4DO6r3u8TbFg6ChQzts9VWsbU5ksSOPz3AhDUtaJI87oUczvvXivB3tcBhUf0Jn89A%2FEMI4tR7SnG2Fl2uIEhuxfhySNmujFrDSbQP5l&X-Amz-Signature=0e23ac1979d2eb1b5a00f36f1a80dee66c0e460745f289ec202427ac84df5c0a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZGALOA%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDUrhGZ29YlGPfc1BBclhh9UJSR5%2Bt%2BHCF4INZpuOQq9AiAFM7vDcNryaV34TLbV8dRfrwrCH%2Fb9V4s6uIFfNWtLCiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvL%2BMflEc3q7FiPhYKtwDvF8YwnJs5A5LX9Gw5FocOkq7PLjIQTHeOvNUDEv2JQ0D%2FgBAqGXzfXFuNNzANo1IJcr%2BkkCM092jgfjRZIIqrBsvp7e5UYnSFZGKrO%2FruJa7IzAEdR2g94mzEP0GVmmKewLeRVQbx2KD8TXh139BeT0h5YvhWvNE4WdzSmEFshkgdeLcXgZRvj8H0toqM3McCEMkoO%2FNl9RlevtOih4QvPayJdOBAT6DlXg14jBEkEHYYhwlRl562SRGWnUTTCAR25YhwdlRoqlLaviRqVmzzmLgAnRlH3oNtm1ewigqt%2B5XlT1fnfCxqOUW3cuVMcY5aZqc8uEsarp8gppMd1E4eXfKU%2BzQ3htYhumFW3vqJvyT%2FMc6enQ5o1LB1hgD1P2GN5fMxf04KfK220GWwIy7UHqEq2WKvqja6v8SCDrmr3eFlVR0ym9RIDFwJVcZKlF7ZaQoHZzaD4BwEiJUVUgq63YAG38Xa%2BqXGMIzMXPUqXRkS%2BjdemgKagt%2FP2eduLBUuF8zLnnLxigy1m1d%2BU6pkXSVGGfsg0NRzY9Vd0kMHiaJ9zYkQJmcMIOVBA45NEvVLqoK5y%2BP%2FCNtBy0wbhWZtsSI7OaQnikFRhTF2qRqhrrCeg7QpqFyyGRx86cw9d7wwQY6pgEkDXAstX3X%2BduobXemPp9wJ2Dtfin7sYGZRygtEOBEEjr%2BWjiQuUe9sK5RJaoa9pwd99lAMqmxCjK9GbZQ3xwSlO6AW69lxm3maz6KmpkpBiz6%2FkHHIYFB4DO6r3u8TbFg6ChQzts9VWsbU5ksSOPz3AhDUtaJI87oUczvvXivB3tcBhUf0Jn89A%2FEMI4tR7SnG2Fl2uIEhuxfhySNmujFrDSbQP5l&X-Amz-Signature=fcf6c0a330cab8d4e2cd748f36182faf70e3f45c0a3a7aab559513db2f2088ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZGALOA%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDUrhGZ29YlGPfc1BBclhh9UJSR5%2Bt%2BHCF4INZpuOQq9AiAFM7vDcNryaV34TLbV8dRfrwrCH%2Fb9V4s6uIFfNWtLCiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvL%2BMflEc3q7FiPhYKtwDvF8YwnJs5A5LX9Gw5FocOkq7PLjIQTHeOvNUDEv2JQ0D%2FgBAqGXzfXFuNNzANo1IJcr%2BkkCM092jgfjRZIIqrBsvp7e5UYnSFZGKrO%2FruJa7IzAEdR2g94mzEP0GVmmKewLeRVQbx2KD8TXh139BeT0h5YvhWvNE4WdzSmEFshkgdeLcXgZRvj8H0toqM3McCEMkoO%2FNl9RlevtOih4QvPayJdOBAT6DlXg14jBEkEHYYhwlRl562SRGWnUTTCAR25YhwdlRoqlLaviRqVmzzmLgAnRlH3oNtm1ewigqt%2B5XlT1fnfCxqOUW3cuVMcY5aZqc8uEsarp8gppMd1E4eXfKU%2BzQ3htYhumFW3vqJvyT%2FMc6enQ5o1LB1hgD1P2GN5fMxf04KfK220GWwIy7UHqEq2WKvqja6v8SCDrmr3eFlVR0ym9RIDFwJVcZKlF7ZaQoHZzaD4BwEiJUVUgq63YAG38Xa%2BqXGMIzMXPUqXRkS%2BjdemgKagt%2FP2eduLBUuF8zLnnLxigy1m1d%2BU6pkXSVGGfsg0NRzY9Vd0kMHiaJ9zYkQJmcMIOVBA45NEvVLqoK5y%2BP%2FCNtBy0wbhWZtsSI7OaQnikFRhTF2qRqhrrCeg7QpqFyyGRx86cw9d7wwQY6pgEkDXAstX3X%2BduobXemPp9wJ2Dtfin7sYGZRygtEOBEEjr%2BWjiQuUe9sK5RJaoa9pwd99lAMqmxCjK9GbZQ3xwSlO6AW69lxm3maz6KmpkpBiz6%2FkHHIYFB4DO6r3u8TbFg6ChQzts9VWsbU5ksSOPz3AhDUtaJI87oUczvvXivB3tcBhUf0Jn89A%2FEMI4tR7SnG2Fl2uIEhuxfhySNmujFrDSbQP5l&X-Amz-Signature=c06bfd39d1f399b047a5a9024228a526914758c584a194f9ec569ce34d39ce18&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
