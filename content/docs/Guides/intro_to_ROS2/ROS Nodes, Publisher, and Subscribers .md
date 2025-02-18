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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5DXMS5U%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICLlqyJm%2FeBCiJLoFtZ14%2FfAF6blk%2BG7iDGj55txAdlnAiAr%2FgmsOMaphNg%2BkZciS8QOBZ%2BVruc4ppthEOnPhOzViyqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMovXNyS2AclKn9DkYKtwDVpLoobcclMO4SGH4Tdy83vfONfZwMqCba3iNm1ZTfoq6itwiNEf0080%2Bn0dkGFYE9rozQHX4g62P7ms056HemuiP%2FwWTfG5vKI2%2Bd5QxFWFOvEewIWAst0u%2BeaaESrhDreU8gsSdMrKpCJQOmvZc%2BoFTriQUXNyrIXiBeMXlDDLKlHRmfmJBlk%2BtzEn7VdC3PxiX3avejxw1rrVx6Oak5f1Qip8lEOs5%2Bw7W8EfaxtzO1y53IHKj1PPZtDbakacX%2FLiMzhhc2QIkCCU8LMUVwvJwIuZqyhpxeDjNn1GUgrTybtX8Ixq1ECMvrAQi28rJdvZLYB3%2Fbzugszlbdk8lmXPOZMg3%2Bhmgj3V0PtlZX0rvn%2FavoWbGDTNFsCsguEAEzTsWCEqDepVErk6yCjSXVq9Z0sHLPbjrSU4ueH7gDJlgufs9SJnKzjXU9OreXESOS30KdDJCnlFmV8Jxcj2KSrwD0uH7WkktEQeU6YwKc76Zcj3rzllfWPw%2BlPKaAnzCkwXxOHyjS4oBU1cb20eJUIyZQ5QfwbHYmViouOh1xvtL3037npTvcC6t29hQaE8Oh7Qgd%2FTRLBkYgxVViarEIz4GD72KB%2BXoNgoq2xB4VlR3Q7U9nLcIb4Q6Gy8wn5LUvQY6pgEhSI99zykSUJD060vHn%2BpNPmsaN6dyjcK%2B4%2B71eTHB8jexVTYCaKiCXxXV2kCOVfGXWhC5KHi7gWIqL2Kj5TLkBBUKkrTlK29RvUcANxb8h80VCy7bh4Cm5RoM6VW8CTRlBJwZ%2FF6A4ipqpkzCEBme7NF8Lmjpafxl6yyVnVlFheShJCUcEoJ1xua3btxtLF33ToBdqf3rBnrvpdQGXS6bje4LagCX&X-Amz-Signature=84ae896bfbd91525726efbafe9bbe6c5c2430a3a517965733c0dc1914971c39a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5DXMS5U%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICLlqyJm%2FeBCiJLoFtZ14%2FfAF6blk%2BG7iDGj55txAdlnAiAr%2FgmsOMaphNg%2BkZciS8QOBZ%2BVruc4ppthEOnPhOzViyqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMovXNyS2AclKn9DkYKtwDVpLoobcclMO4SGH4Tdy83vfONfZwMqCba3iNm1ZTfoq6itwiNEf0080%2Bn0dkGFYE9rozQHX4g62P7ms056HemuiP%2FwWTfG5vKI2%2Bd5QxFWFOvEewIWAst0u%2BeaaESrhDreU8gsSdMrKpCJQOmvZc%2BoFTriQUXNyrIXiBeMXlDDLKlHRmfmJBlk%2BtzEn7VdC3PxiX3avejxw1rrVx6Oak5f1Qip8lEOs5%2Bw7W8EfaxtzO1y53IHKj1PPZtDbakacX%2FLiMzhhc2QIkCCU8LMUVwvJwIuZqyhpxeDjNn1GUgrTybtX8Ixq1ECMvrAQi28rJdvZLYB3%2Fbzugszlbdk8lmXPOZMg3%2Bhmgj3V0PtlZX0rvn%2FavoWbGDTNFsCsguEAEzTsWCEqDepVErk6yCjSXVq9Z0sHLPbjrSU4ueH7gDJlgufs9SJnKzjXU9OreXESOS30KdDJCnlFmV8Jxcj2KSrwD0uH7WkktEQeU6YwKc76Zcj3rzllfWPw%2BlPKaAnzCkwXxOHyjS4oBU1cb20eJUIyZQ5QfwbHYmViouOh1xvtL3037npTvcC6t29hQaE8Oh7Qgd%2FTRLBkYgxVViarEIz4GD72KB%2BXoNgoq2xB4VlR3Q7U9nLcIb4Q6Gy8wn5LUvQY6pgEhSI99zykSUJD060vHn%2BpNPmsaN6dyjcK%2B4%2B71eTHB8jexVTYCaKiCXxXV2kCOVfGXWhC5KHi7gWIqL2Kj5TLkBBUKkrTlK29RvUcANxb8h80VCy7bh4Cm5RoM6VW8CTRlBJwZ%2FF6A4ipqpkzCEBme7NF8Lmjpafxl6yyVnVlFheShJCUcEoJ1xua3btxtLF33ToBdqf3rBnrvpdQGXS6bje4LagCX&X-Amz-Signature=0f24ec0343d8175c01723da0f026e5a29e21ec925ec4044e07eab2873d3e0133&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5DXMS5U%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICLlqyJm%2FeBCiJLoFtZ14%2FfAF6blk%2BG7iDGj55txAdlnAiAr%2FgmsOMaphNg%2BkZciS8QOBZ%2BVruc4ppthEOnPhOzViyqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMovXNyS2AclKn9DkYKtwDVpLoobcclMO4SGH4Tdy83vfONfZwMqCba3iNm1ZTfoq6itwiNEf0080%2Bn0dkGFYE9rozQHX4g62P7ms056HemuiP%2FwWTfG5vKI2%2Bd5QxFWFOvEewIWAst0u%2BeaaESrhDreU8gsSdMrKpCJQOmvZc%2BoFTriQUXNyrIXiBeMXlDDLKlHRmfmJBlk%2BtzEn7VdC3PxiX3avejxw1rrVx6Oak5f1Qip8lEOs5%2Bw7W8EfaxtzO1y53IHKj1PPZtDbakacX%2FLiMzhhc2QIkCCU8LMUVwvJwIuZqyhpxeDjNn1GUgrTybtX8Ixq1ECMvrAQi28rJdvZLYB3%2Fbzugszlbdk8lmXPOZMg3%2Bhmgj3V0PtlZX0rvn%2FavoWbGDTNFsCsguEAEzTsWCEqDepVErk6yCjSXVq9Z0sHLPbjrSU4ueH7gDJlgufs9SJnKzjXU9OreXESOS30KdDJCnlFmV8Jxcj2KSrwD0uH7WkktEQeU6YwKc76Zcj3rzllfWPw%2BlPKaAnzCkwXxOHyjS4oBU1cb20eJUIyZQ5QfwbHYmViouOh1xvtL3037npTvcC6t29hQaE8Oh7Qgd%2FTRLBkYgxVViarEIz4GD72KB%2BXoNgoq2xB4VlR3Q7U9nLcIb4Q6Gy8wn5LUvQY6pgEhSI99zykSUJD060vHn%2BpNPmsaN6dyjcK%2B4%2B71eTHB8jexVTYCaKiCXxXV2kCOVfGXWhC5KHi7gWIqL2Kj5TLkBBUKkrTlK29RvUcANxb8h80VCy7bh4Cm5RoM6VW8CTRlBJwZ%2FF6A4ipqpkzCEBme7NF8Lmjpafxl6yyVnVlFheShJCUcEoJ1xua3btxtLF33ToBdqf3rBnrvpdQGXS6bje4LagCX&X-Amz-Signature=995e42f92a6e6b4b18b0e2f54bc8dd21a0cda5c05128f6c91ba215ea15c48af1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5DXMS5U%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICLlqyJm%2FeBCiJLoFtZ14%2FfAF6blk%2BG7iDGj55txAdlnAiAr%2FgmsOMaphNg%2BkZciS8QOBZ%2BVruc4ppthEOnPhOzViyqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMovXNyS2AclKn9DkYKtwDVpLoobcclMO4SGH4Tdy83vfONfZwMqCba3iNm1ZTfoq6itwiNEf0080%2Bn0dkGFYE9rozQHX4g62P7ms056HemuiP%2FwWTfG5vKI2%2Bd5QxFWFOvEewIWAst0u%2BeaaESrhDreU8gsSdMrKpCJQOmvZc%2BoFTriQUXNyrIXiBeMXlDDLKlHRmfmJBlk%2BtzEn7VdC3PxiX3avejxw1rrVx6Oak5f1Qip8lEOs5%2Bw7W8EfaxtzO1y53IHKj1PPZtDbakacX%2FLiMzhhc2QIkCCU8LMUVwvJwIuZqyhpxeDjNn1GUgrTybtX8Ixq1ECMvrAQi28rJdvZLYB3%2Fbzugszlbdk8lmXPOZMg3%2Bhmgj3V0PtlZX0rvn%2FavoWbGDTNFsCsguEAEzTsWCEqDepVErk6yCjSXVq9Z0sHLPbjrSU4ueH7gDJlgufs9SJnKzjXU9OreXESOS30KdDJCnlFmV8Jxcj2KSrwD0uH7WkktEQeU6YwKc76Zcj3rzllfWPw%2BlPKaAnzCkwXxOHyjS4oBU1cb20eJUIyZQ5QfwbHYmViouOh1xvtL3037npTvcC6t29hQaE8Oh7Qgd%2FTRLBkYgxVViarEIz4GD72KB%2BXoNgoq2xB4VlR3Q7U9nLcIb4Q6Gy8wn5LUvQY6pgEhSI99zykSUJD060vHn%2BpNPmsaN6dyjcK%2B4%2B71eTHB8jexVTYCaKiCXxXV2kCOVfGXWhC5KHi7gWIqL2Kj5TLkBBUKkrTlK29RvUcANxb8h80VCy7bh4Cm5RoM6VW8CTRlBJwZ%2FF6A4ipqpkzCEBme7NF8Lmjpafxl6yyVnVlFheShJCUcEoJ1xua3btxtLF33ToBdqf3rBnrvpdQGXS6bje4LagCX&X-Amz-Signature=b0441a7043ba1866ca75db779af597da908c25ef3bd9b6970d3fbfecd39effc5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5DXMS5U%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICLlqyJm%2FeBCiJLoFtZ14%2FfAF6blk%2BG7iDGj55txAdlnAiAr%2FgmsOMaphNg%2BkZciS8QOBZ%2BVruc4ppthEOnPhOzViyqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMovXNyS2AclKn9DkYKtwDVpLoobcclMO4SGH4Tdy83vfONfZwMqCba3iNm1ZTfoq6itwiNEf0080%2Bn0dkGFYE9rozQHX4g62P7ms056HemuiP%2FwWTfG5vKI2%2Bd5QxFWFOvEewIWAst0u%2BeaaESrhDreU8gsSdMrKpCJQOmvZc%2BoFTriQUXNyrIXiBeMXlDDLKlHRmfmJBlk%2BtzEn7VdC3PxiX3avejxw1rrVx6Oak5f1Qip8lEOs5%2Bw7W8EfaxtzO1y53IHKj1PPZtDbakacX%2FLiMzhhc2QIkCCU8LMUVwvJwIuZqyhpxeDjNn1GUgrTybtX8Ixq1ECMvrAQi28rJdvZLYB3%2Fbzugszlbdk8lmXPOZMg3%2Bhmgj3V0PtlZX0rvn%2FavoWbGDTNFsCsguEAEzTsWCEqDepVErk6yCjSXVq9Z0sHLPbjrSU4ueH7gDJlgufs9SJnKzjXU9OreXESOS30KdDJCnlFmV8Jxcj2KSrwD0uH7WkktEQeU6YwKc76Zcj3rzllfWPw%2BlPKaAnzCkwXxOHyjS4oBU1cb20eJUIyZQ5QfwbHYmViouOh1xvtL3037npTvcC6t29hQaE8Oh7Qgd%2FTRLBkYgxVViarEIz4GD72KB%2BXoNgoq2xB4VlR3Q7U9nLcIb4Q6Gy8wn5LUvQY6pgEhSI99zykSUJD060vHn%2BpNPmsaN6dyjcK%2B4%2B71eTHB8jexVTYCaKiCXxXV2kCOVfGXWhC5KHi7gWIqL2Kj5TLkBBUKkrTlK29RvUcANxb8h80VCy7bh4Cm5RoM6VW8CTRlBJwZ%2FF6A4ipqpkzCEBme7NF8Lmjpafxl6yyVnVlFheShJCUcEoJ1xua3btxtLF33ToBdqf3rBnrvpdQGXS6bje4LagCX&X-Amz-Signature=6388350ad6e73fea3990b513e8e55dc3376eeb6a97c141d7844c8868c5b82e26&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5DXMS5U%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICLlqyJm%2FeBCiJLoFtZ14%2FfAF6blk%2BG7iDGj55txAdlnAiAr%2FgmsOMaphNg%2BkZciS8QOBZ%2BVruc4ppthEOnPhOzViyqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMovXNyS2AclKn9DkYKtwDVpLoobcclMO4SGH4Tdy83vfONfZwMqCba3iNm1ZTfoq6itwiNEf0080%2Bn0dkGFYE9rozQHX4g62P7ms056HemuiP%2FwWTfG5vKI2%2Bd5QxFWFOvEewIWAst0u%2BeaaESrhDreU8gsSdMrKpCJQOmvZc%2BoFTriQUXNyrIXiBeMXlDDLKlHRmfmJBlk%2BtzEn7VdC3PxiX3avejxw1rrVx6Oak5f1Qip8lEOs5%2Bw7W8EfaxtzO1y53IHKj1PPZtDbakacX%2FLiMzhhc2QIkCCU8LMUVwvJwIuZqyhpxeDjNn1GUgrTybtX8Ixq1ECMvrAQi28rJdvZLYB3%2Fbzugszlbdk8lmXPOZMg3%2Bhmgj3V0PtlZX0rvn%2FavoWbGDTNFsCsguEAEzTsWCEqDepVErk6yCjSXVq9Z0sHLPbjrSU4ueH7gDJlgufs9SJnKzjXU9OreXESOS30KdDJCnlFmV8Jxcj2KSrwD0uH7WkktEQeU6YwKc76Zcj3rzllfWPw%2BlPKaAnzCkwXxOHyjS4oBU1cb20eJUIyZQ5QfwbHYmViouOh1xvtL3037npTvcC6t29hQaE8Oh7Qgd%2FTRLBkYgxVViarEIz4GD72KB%2BXoNgoq2xB4VlR3Q7U9nLcIb4Q6Gy8wn5LUvQY6pgEhSI99zykSUJD060vHn%2BpNPmsaN6dyjcK%2B4%2B71eTHB8jexVTYCaKiCXxXV2kCOVfGXWhC5KHi7gWIqL2Kj5TLkBBUKkrTlK29RvUcANxb8h80VCy7bh4Cm5RoM6VW8CTRlBJwZ%2FF6A4ipqpkzCEBme7NF8Lmjpafxl6yyVnVlFheShJCUcEoJ1xua3btxtLF33ToBdqf3rBnrvpdQGXS6bje4LagCX&X-Amz-Signature=d23c13a00748cf1bb59d9de3c08d0107ea0e76f3a3b5320a0c512c11c7f944c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5DXMS5U%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICLlqyJm%2FeBCiJLoFtZ14%2FfAF6blk%2BG7iDGj55txAdlnAiAr%2FgmsOMaphNg%2BkZciS8QOBZ%2BVruc4ppthEOnPhOzViyqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMovXNyS2AclKn9DkYKtwDVpLoobcclMO4SGH4Tdy83vfONfZwMqCba3iNm1ZTfoq6itwiNEf0080%2Bn0dkGFYE9rozQHX4g62P7ms056HemuiP%2FwWTfG5vKI2%2Bd5QxFWFOvEewIWAst0u%2BeaaESrhDreU8gsSdMrKpCJQOmvZc%2BoFTriQUXNyrIXiBeMXlDDLKlHRmfmJBlk%2BtzEn7VdC3PxiX3avejxw1rrVx6Oak5f1Qip8lEOs5%2Bw7W8EfaxtzO1y53IHKj1PPZtDbakacX%2FLiMzhhc2QIkCCU8LMUVwvJwIuZqyhpxeDjNn1GUgrTybtX8Ixq1ECMvrAQi28rJdvZLYB3%2Fbzugszlbdk8lmXPOZMg3%2Bhmgj3V0PtlZX0rvn%2FavoWbGDTNFsCsguEAEzTsWCEqDepVErk6yCjSXVq9Z0sHLPbjrSU4ueH7gDJlgufs9SJnKzjXU9OreXESOS30KdDJCnlFmV8Jxcj2KSrwD0uH7WkktEQeU6YwKc76Zcj3rzllfWPw%2BlPKaAnzCkwXxOHyjS4oBU1cb20eJUIyZQ5QfwbHYmViouOh1xvtL3037npTvcC6t29hQaE8Oh7Qgd%2FTRLBkYgxVViarEIz4GD72KB%2BXoNgoq2xB4VlR3Q7U9nLcIb4Q6Gy8wn5LUvQY6pgEhSI99zykSUJD060vHn%2BpNPmsaN6dyjcK%2B4%2B71eTHB8jexVTYCaKiCXxXV2kCOVfGXWhC5KHi7gWIqL2Kj5TLkBBUKkrTlK29RvUcANxb8h80VCy7bh4Cm5RoM6VW8CTRlBJwZ%2FF6A4ipqpkzCEBme7NF8Lmjpafxl6yyVnVlFheShJCUcEoJ1xua3btxtLF33ToBdqf3rBnrvpdQGXS6bje4LagCX&X-Amz-Signature=3fe59a4d52568d382b5c93a37e494a68195ef33ea7e1c4b8e3f8d4e8a2ba9ed5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5DXMS5U%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICLlqyJm%2FeBCiJLoFtZ14%2FfAF6blk%2BG7iDGj55txAdlnAiAr%2FgmsOMaphNg%2BkZciS8QOBZ%2BVruc4ppthEOnPhOzViyqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMovXNyS2AclKn9DkYKtwDVpLoobcclMO4SGH4Tdy83vfONfZwMqCba3iNm1ZTfoq6itwiNEf0080%2Bn0dkGFYE9rozQHX4g62P7ms056HemuiP%2FwWTfG5vKI2%2Bd5QxFWFOvEewIWAst0u%2BeaaESrhDreU8gsSdMrKpCJQOmvZc%2BoFTriQUXNyrIXiBeMXlDDLKlHRmfmJBlk%2BtzEn7VdC3PxiX3avejxw1rrVx6Oak5f1Qip8lEOs5%2Bw7W8EfaxtzO1y53IHKj1PPZtDbakacX%2FLiMzhhc2QIkCCU8LMUVwvJwIuZqyhpxeDjNn1GUgrTybtX8Ixq1ECMvrAQi28rJdvZLYB3%2Fbzugszlbdk8lmXPOZMg3%2Bhmgj3V0PtlZX0rvn%2FavoWbGDTNFsCsguEAEzTsWCEqDepVErk6yCjSXVq9Z0sHLPbjrSU4ueH7gDJlgufs9SJnKzjXU9OreXESOS30KdDJCnlFmV8Jxcj2KSrwD0uH7WkktEQeU6YwKc76Zcj3rzllfWPw%2BlPKaAnzCkwXxOHyjS4oBU1cb20eJUIyZQ5QfwbHYmViouOh1xvtL3037npTvcC6t29hQaE8Oh7Qgd%2FTRLBkYgxVViarEIz4GD72KB%2BXoNgoq2xB4VlR3Q7U9nLcIb4Q6Gy8wn5LUvQY6pgEhSI99zykSUJD060vHn%2BpNPmsaN6dyjcK%2B4%2B71eTHB8jexVTYCaKiCXxXV2kCOVfGXWhC5KHi7gWIqL2Kj5TLkBBUKkrTlK29RvUcANxb8h80VCy7bh4Cm5RoM6VW8CTRlBJwZ%2FF6A4ipqpkzCEBme7NF8Lmjpafxl6yyVnVlFheShJCUcEoJ1xua3btxtLF33ToBdqf3rBnrvpdQGXS6bje4LagCX&X-Amz-Signature=bcfe748b363404025aa21689f2edc3651a97037bb5d3739bf53cb31ba48e08b7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
