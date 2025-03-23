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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZUUPT7C%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDc1Iy6f%2BZ5W5ttNHZgEYTdBuB6GmDRFb4nLno3FOR7lQIhAOj1T2cLOVNChh5lmstbng%2BnCMkPaETeo7w9VVDJsqPsKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwek%2F%2FqtRvlRzOOOyoq3AMy6vS6ffcEdCpNhNZ2Gdd4SlgogNhsMB%2BtlR%2FJsOjwPnLe6dHQ1GTjvqHyZCg5C72Da%2FaZOj0rb0EjELDXappvF7OnTECeYXs%2FE%2BsQG%2BFBYx9k6crHdfpeTklDtAj34LDmctFTmds6m7UDqsMrFCgQVD8Qtz5rpbkFD%2FJ9xukxchiDbaHWUGolS%2BxeNJKruujOgRIJH0FK90XrwOZg6QigHiZZ84A0PnZo3blgXc6mZlnNZQ%2Fxl2oQQOfDaLKQ4W3KdGPx0QajxBdKw66nVLzCuoXzNGN762LSt38sZ6XkyaJ6JZs%2F%2FE4sR5MA%2FAbqgiGT6vBy8EWTnq69TZgOqcMB5ocTVZrLdP0lZHv6ruRLi3kzIKtx9IRQFqfeg7z8igRlzQvTgQf8DmvpNVFQorSykE0yGL%2FvcUh0mqpFEgYOU8lKxPX2uo773YN5o7r6DaLAQYvErbjMlst7IOYv0bvkMrnW3rzj0TnDJWGT8GUvKwPLogSh0DFVx7CpV38i6dshEWb69%2FVv437y1p%2B7DXTCJy6b6YnsnoGfxhDfjLbQ0J3IqHNpCzaoQ6ct5x%2F1tImtHj%2F61Dh4QkGjwpwp23ogeJUvCzDDMFVf5fXI38fdmO%2BXpmnRLW%2F5tyLZazC44%2F2%2BBjqkAbozLCuiXyL1OxBLYv49ZC%2BgQLczR5uv0fkKvo%2B3iI3hv7%2BiuSFSozmNU%2BxgyYLz3oQrB9niXV9P1SEqqt9mNpPl0q1bEuf%2F19Qby9yESdnrzSp70Q%2Fa4E%2FIMtkhQK7ctVtEhZT%2FqaKYtX%2Bnmg46kpOmEd4016gAFfq9u13GSRgQPHvOoq4zuQ7K51qOeBApDq%2FqaKGuijJ26Zs27vCCi29yj9k8&X-Amz-Signature=4919339136f77686bd67617a3c8961bc52e3dfe170f32c639adaad513a04b284&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZUUPT7C%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDc1Iy6f%2BZ5W5ttNHZgEYTdBuB6GmDRFb4nLno3FOR7lQIhAOj1T2cLOVNChh5lmstbng%2BnCMkPaETeo7w9VVDJsqPsKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwek%2F%2FqtRvlRzOOOyoq3AMy6vS6ffcEdCpNhNZ2Gdd4SlgogNhsMB%2BtlR%2FJsOjwPnLe6dHQ1GTjvqHyZCg5C72Da%2FaZOj0rb0EjELDXappvF7OnTECeYXs%2FE%2BsQG%2BFBYx9k6crHdfpeTklDtAj34LDmctFTmds6m7UDqsMrFCgQVD8Qtz5rpbkFD%2FJ9xukxchiDbaHWUGolS%2BxeNJKruujOgRIJH0FK90XrwOZg6QigHiZZ84A0PnZo3blgXc6mZlnNZQ%2Fxl2oQQOfDaLKQ4W3KdGPx0QajxBdKw66nVLzCuoXzNGN762LSt38sZ6XkyaJ6JZs%2F%2FE4sR5MA%2FAbqgiGT6vBy8EWTnq69TZgOqcMB5ocTVZrLdP0lZHv6ruRLi3kzIKtx9IRQFqfeg7z8igRlzQvTgQf8DmvpNVFQorSykE0yGL%2FvcUh0mqpFEgYOU8lKxPX2uo773YN5o7r6DaLAQYvErbjMlst7IOYv0bvkMrnW3rzj0TnDJWGT8GUvKwPLogSh0DFVx7CpV38i6dshEWb69%2FVv437y1p%2B7DXTCJy6b6YnsnoGfxhDfjLbQ0J3IqHNpCzaoQ6ct5x%2F1tImtHj%2F61Dh4QkGjwpwp23ogeJUvCzDDMFVf5fXI38fdmO%2BXpmnRLW%2F5tyLZazC44%2F2%2BBjqkAbozLCuiXyL1OxBLYv49ZC%2BgQLczR5uv0fkKvo%2B3iI3hv7%2BiuSFSozmNU%2BxgyYLz3oQrB9niXV9P1SEqqt9mNpPl0q1bEuf%2F19Qby9yESdnrzSp70Q%2Fa4E%2FIMtkhQK7ctVtEhZT%2FqaKYtX%2Bnmg46kpOmEd4016gAFfq9u13GSRgQPHvOoq4zuQ7K51qOeBApDq%2FqaKGuijJ26Zs27vCCi29yj9k8&X-Amz-Signature=999843023d528c9a7d88900d2cd316c23541f027752f1fd5c7585c1e4384a8d1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZUUPT7C%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDc1Iy6f%2BZ5W5ttNHZgEYTdBuB6GmDRFb4nLno3FOR7lQIhAOj1T2cLOVNChh5lmstbng%2BnCMkPaETeo7w9VVDJsqPsKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwek%2F%2FqtRvlRzOOOyoq3AMy6vS6ffcEdCpNhNZ2Gdd4SlgogNhsMB%2BtlR%2FJsOjwPnLe6dHQ1GTjvqHyZCg5C72Da%2FaZOj0rb0EjELDXappvF7OnTECeYXs%2FE%2BsQG%2BFBYx9k6crHdfpeTklDtAj34LDmctFTmds6m7UDqsMrFCgQVD8Qtz5rpbkFD%2FJ9xukxchiDbaHWUGolS%2BxeNJKruujOgRIJH0FK90XrwOZg6QigHiZZ84A0PnZo3blgXc6mZlnNZQ%2Fxl2oQQOfDaLKQ4W3KdGPx0QajxBdKw66nVLzCuoXzNGN762LSt38sZ6XkyaJ6JZs%2F%2FE4sR5MA%2FAbqgiGT6vBy8EWTnq69TZgOqcMB5ocTVZrLdP0lZHv6ruRLi3kzIKtx9IRQFqfeg7z8igRlzQvTgQf8DmvpNVFQorSykE0yGL%2FvcUh0mqpFEgYOU8lKxPX2uo773YN5o7r6DaLAQYvErbjMlst7IOYv0bvkMrnW3rzj0TnDJWGT8GUvKwPLogSh0DFVx7CpV38i6dshEWb69%2FVv437y1p%2B7DXTCJy6b6YnsnoGfxhDfjLbQ0J3IqHNpCzaoQ6ct5x%2F1tImtHj%2F61Dh4QkGjwpwp23ogeJUvCzDDMFVf5fXI38fdmO%2BXpmnRLW%2F5tyLZazC44%2F2%2BBjqkAbozLCuiXyL1OxBLYv49ZC%2BgQLczR5uv0fkKvo%2B3iI3hv7%2BiuSFSozmNU%2BxgyYLz3oQrB9niXV9P1SEqqt9mNpPl0q1bEuf%2F19Qby9yESdnrzSp70Q%2Fa4E%2FIMtkhQK7ctVtEhZT%2FqaKYtX%2Bnmg46kpOmEd4016gAFfq9u13GSRgQPHvOoq4zuQ7K51qOeBApDq%2FqaKGuijJ26Zs27vCCi29yj9k8&X-Amz-Signature=92dc349e20adc70c4692ffb18bf34ee8b4616e0fba8d2508a31af850290ae45e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZUUPT7C%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDc1Iy6f%2BZ5W5ttNHZgEYTdBuB6GmDRFb4nLno3FOR7lQIhAOj1T2cLOVNChh5lmstbng%2BnCMkPaETeo7w9VVDJsqPsKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwek%2F%2FqtRvlRzOOOyoq3AMy6vS6ffcEdCpNhNZ2Gdd4SlgogNhsMB%2BtlR%2FJsOjwPnLe6dHQ1GTjvqHyZCg5C72Da%2FaZOj0rb0EjELDXappvF7OnTECeYXs%2FE%2BsQG%2BFBYx9k6crHdfpeTklDtAj34LDmctFTmds6m7UDqsMrFCgQVD8Qtz5rpbkFD%2FJ9xukxchiDbaHWUGolS%2BxeNJKruujOgRIJH0FK90XrwOZg6QigHiZZ84A0PnZo3blgXc6mZlnNZQ%2Fxl2oQQOfDaLKQ4W3KdGPx0QajxBdKw66nVLzCuoXzNGN762LSt38sZ6XkyaJ6JZs%2F%2FE4sR5MA%2FAbqgiGT6vBy8EWTnq69TZgOqcMB5ocTVZrLdP0lZHv6ruRLi3kzIKtx9IRQFqfeg7z8igRlzQvTgQf8DmvpNVFQorSykE0yGL%2FvcUh0mqpFEgYOU8lKxPX2uo773YN5o7r6DaLAQYvErbjMlst7IOYv0bvkMrnW3rzj0TnDJWGT8GUvKwPLogSh0DFVx7CpV38i6dshEWb69%2FVv437y1p%2B7DXTCJy6b6YnsnoGfxhDfjLbQ0J3IqHNpCzaoQ6ct5x%2F1tImtHj%2F61Dh4QkGjwpwp23ogeJUvCzDDMFVf5fXI38fdmO%2BXpmnRLW%2F5tyLZazC44%2F2%2BBjqkAbozLCuiXyL1OxBLYv49ZC%2BgQLczR5uv0fkKvo%2B3iI3hv7%2BiuSFSozmNU%2BxgyYLz3oQrB9niXV9P1SEqqt9mNpPl0q1bEuf%2F19Qby9yESdnrzSp70Q%2Fa4E%2FIMtkhQK7ctVtEhZT%2FqaKYtX%2Bnmg46kpOmEd4016gAFfq9u13GSRgQPHvOoq4zuQ7K51qOeBApDq%2FqaKGuijJ26Zs27vCCi29yj9k8&X-Amz-Signature=2a428c34563ac67214db9743e1f0ae68484f69018f9e9361e67f07a19084dfbf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZUUPT7C%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDc1Iy6f%2BZ5W5ttNHZgEYTdBuB6GmDRFb4nLno3FOR7lQIhAOj1T2cLOVNChh5lmstbng%2BnCMkPaETeo7w9VVDJsqPsKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwek%2F%2FqtRvlRzOOOyoq3AMy6vS6ffcEdCpNhNZ2Gdd4SlgogNhsMB%2BtlR%2FJsOjwPnLe6dHQ1GTjvqHyZCg5C72Da%2FaZOj0rb0EjELDXappvF7OnTECeYXs%2FE%2BsQG%2BFBYx9k6crHdfpeTklDtAj34LDmctFTmds6m7UDqsMrFCgQVD8Qtz5rpbkFD%2FJ9xukxchiDbaHWUGolS%2BxeNJKruujOgRIJH0FK90XrwOZg6QigHiZZ84A0PnZo3blgXc6mZlnNZQ%2Fxl2oQQOfDaLKQ4W3KdGPx0QajxBdKw66nVLzCuoXzNGN762LSt38sZ6XkyaJ6JZs%2F%2FE4sR5MA%2FAbqgiGT6vBy8EWTnq69TZgOqcMB5ocTVZrLdP0lZHv6ruRLi3kzIKtx9IRQFqfeg7z8igRlzQvTgQf8DmvpNVFQorSykE0yGL%2FvcUh0mqpFEgYOU8lKxPX2uo773YN5o7r6DaLAQYvErbjMlst7IOYv0bvkMrnW3rzj0TnDJWGT8GUvKwPLogSh0DFVx7CpV38i6dshEWb69%2FVv437y1p%2B7DXTCJy6b6YnsnoGfxhDfjLbQ0J3IqHNpCzaoQ6ct5x%2F1tImtHj%2F61Dh4QkGjwpwp23ogeJUvCzDDMFVf5fXI38fdmO%2BXpmnRLW%2F5tyLZazC44%2F2%2BBjqkAbozLCuiXyL1OxBLYv49ZC%2BgQLczR5uv0fkKvo%2B3iI3hv7%2BiuSFSozmNU%2BxgyYLz3oQrB9niXV9P1SEqqt9mNpPl0q1bEuf%2F19Qby9yESdnrzSp70Q%2Fa4E%2FIMtkhQK7ctVtEhZT%2FqaKYtX%2Bnmg46kpOmEd4016gAFfq9u13GSRgQPHvOoq4zuQ7K51qOeBApDq%2FqaKGuijJ26Zs27vCCi29yj9k8&X-Amz-Signature=6153b5d3733defb188b0724f92fabb85489b265f41a36d0b730d4c954a37c19d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZUUPT7C%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDc1Iy6f%2BZ5W5ttNHZgEYTdBuB6GmDRFb4nLno3FOR7lQIhAOj1T2cLOVNChh5lmstbng%2BnCMkPaETeo7w9VVDJsqPsKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwek%2F%2FqtRvlRzOOOyoq3AMy6vS6ffcEdCpNhNZ2Gdd4SlgogNhsMB%2BtlR%2FJsOjwPnLe6dHQ1GTjvqHyZCg5C72Da%2FaZOj0rb0EjELDXappvF7OnTECeYXs%2FE%2BsQG%2BFBYx9k6crHdfpeTklDtAj34LDmctFTmds6m7UDqsMrFCgQVD8Qtz5rpbkFD%2FJ9xukxchiDbaHWUGolS%2BxeNJKruujOgRIJH0FK90XrwOZg6QigHiZZ84A0PnZo3blgXc6mZlnNZQ%2Fxl2oQQOfDaLKQ4W3KdGPx0QajxBdKw66nVLzCuoXzNGN762LSt38sZ6XkyaJ6JZs%2F%2FE4sR5MA%2FAbqgiGT6vBy8EWTnq69TZgOqcMB5ocTVZrLdP0lZHv6ruRLi3kzIKtx9IRQFqfeg7z8igRlzQvTgQf8DmvpNVFQorSykE0yGL%2FvcUh0mqpFEgYOU8lKxPX2uo773YN5o7r6DaLAQYvErbjMlst7IOYv0bvkMrnW3rzj0TnDJWGT8GUvKwPLogSh0DFVx7CpV38i6dshEWb69%2FVv437y1p%2B7DXTCJy6b6YnsnoGfxhDfjLbQ0J3IqHNpCzaoQ6ct5x%2F1tImtHj%2F61Dh4QkGjwpwp23ogeJUvCzDDMFVf5fXI38fdmO%2BXpmnRLW%2F5tyLZazC44%2F2%2BBjqkAbozLCuiXyL1OxBLYv49ZC%2BgQLczR5uv0fkKvo%2B3iI3hv7%2BiuSFSozmNU%2BxgyYLz3oQrB9niXV9P1SEqqt9mNpPl0q1bEuf%2F19Qby9yESdnrzSp70Q%2Fa4E%2FIMtkhQK7ctVtEhZT%2FqaKYtX%2Bnmg46kpOmEd4016gAFfq9u13GSRgQPHvOoq4zuQ7K51qOeBApDq%2FqaKGuijJ26Zs27vCCi29yj9k8&X-Amz-Signature=d92494d37de3fdded1956946037e0e4d1723163b907bf972463bacc64d557e0c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZUUPT7C%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDc1Iy6f%2BZ5W5ttNHZgEYTdBuB6GmDRFb4nLno3FOR7lQIhAOj1T2cLOVNChh5lmstbng%2BnCMkPaETeo7w9VVDJsqPsKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwek%2F%2FqtRvlRzOOOyoq3AMy6vS6ffcEdCpNhNZ2Gdd4SlgogNhsMB%2BtlR%2FJsOjwPnLe6dHQ1GTjvqHyZCg5C72Da%2FaZOj0rb0EjELDXappvF7OnTECeYXs%2FE%2BsQG%2BFBYx9k6crHdfpeTklDtAj34LDmctFTmds6m7UDqsMrFCgQVD8Qtz5rpbkFD%2FJ9xukxchiDbaHWUGolS%2BxeNJKruujOgRIJH0FK90XrwOZg6QigHiZZ84A0PnZo3blgXc6mZlnNZQ%2Fxl2oQQOfDaLKQ4W3KdGPx0QajxBdKw66nVLzCuoXzNGN762LSt38sZ6XkyaJ6JZs%2F%2FE4sR5MA%2FAbqgiGT6vBy8EWTnq69TZgOqcMB5ocTVZrLdP0lZHv6ruRLi3kzIKtx9IRQFqfeg7z8igRlzQvTgQf8DmvpNVFQorSykE0yGL%2FvcUh0mqpFEgYOU8lKxPX2uo773YN5o7r6DaLAQYvErbjMlst7IOYv0bvkMrnW3rzj0TnDJWGT8GUvKwPLogSh0DFVx7CpV38i6dshEWb69%2FVv437y1p%2B7DXTCJy6b6YnsnoGfxhDfjLbQ0J3IqHNpCzaoQ6ct5x%2F1tImtHj%2F61Dh4QkGjwpwp23ogeJUvCzDDMFVf5fXI38fdmO%2BXpmnRLW%2F5tyLZazC44%2F2%2BBjqkAbozLCuiXyL1OxBLYv49ZC%2BgQLczR5uv0fkKvo%2B3iI3hv7%2BiuSFSozmNU%2BxgyYLz3oQrB9niXV9P1SEqqt9mNpPl0q1bEuf%2F19Qby9yESdnrzSp70Q%2Fa4E%2FIMtkhQK7ctVtEhZT%2FqaKYtX%2Bnmg46kpOmEd4016gAFfq9u13GSRgQPHvOoq4zuQ7K51qOeBApDq%2FqaKGuijJ26Zs27vCCi29yj9k8&X-Amz-Signature=9f817c3b6563552d87372e659a7600b7501da72a2c3821cb49e97de1e853a04b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZUUPT7C%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDc1Iy6f%2BZ5W5ttNHZgEYTdBuB6GmDRFb4nLno3FOR7lQIhAOj1T2cLOVNChh5lmstbng%2BnCMkPaETeo7w9VVDJsqPsKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwek%2F%2FqtRvlRzOOOyoq3AMy6vS6ffcEdCpNhNZ2Gdd4SlgogNhsMB%2BtlR%2FJsOjwPnLe6dHQ1GTjvqHyZCg5C72Da%2FaZOj0rb0EjELDXappvF7OnTECeYXs%2FE%2BsQG%2BFBYx9k6crHdfpeTklDtAj34LDmctFTmds6m7UDqsMrFCgQVD8Qtz5rpbkFD%2FJ9xukxchiDbaHWUGolS%2BxeNJKruujOgRIJH0FK90XrwOZg6QigHiZZ84A0PnZo3blgXc6mZlnNZQ%2Fxl2oQQOfDaLKQ4W3KdGPx0QajxBdKw66nVLzCuoXzNGN762LSt38sZ6XkyaJ6JZs%2F%2FE4sR5MA%2FAbqgiGT6vBy8EWTnq69TZgOqcMB5ocTVZrLdP0lZHv6ruRLi3kzIKtx9IRQFqfeg7z8igRlzQvTgQf8DmvpNVFQorSykE0yGL%2FvcUh0mqpFEgYOU8lKxPX2uo773YN5o7r6DaLAQYvErbjMlst7IOYv0bvkMrnW3rzj0TnDJWGT8GUvKwPLogSh0DFVx7CpV38i6dshEWb69%2FVv437y1p%2B7DXTCJy6b6YnsnoGfxhDfjLbQ0J3IqHNpCzaoQ6ct5x%2F1tImtHj%2F61Dh4QkGjwpwp23ogeJUvCzDDMFVf5fXI38fdmO%2BXpmnRLW%2F5tyLZazC44%2F2%2BBjqkAbozLCuiXyL1OxBLYv49ZC%2BgQLczR5uv0fkKvo%2B3iI3hv7%2BiuSFSozmNU%2BxgyYLz3oQrB9niXV9P1SEqqt9mNpPl0q1bEuf%2F19Qby9yESdnrzSp70Q%2Fa4E%2FIMtkhQK7ctVtEhZT%2FqaKYtX%2Bnmg46kpOmEd4016gAFfq9u13GSRgQPHvOoq4zuQ7K51qOeBApDq%2FqaKGuijJ26Zs27vCCi29yj9k8&X-Amz-Signature=868afa2b399d8e21364fb8df753bc8cdeb6f9d06bff2b5615560db1e506f0aeb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
