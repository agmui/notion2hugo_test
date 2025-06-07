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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG4F25JK%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8Ap3yca9gyfjdEpW7UtMbOunnBA7Y9ba7QC%2FMlAU5hAiAZquitEKFlsuTGWRptkME1yhHh3iT445JrMIOK7EQPiyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMcJ3LbS07yl8waKxuKtwDlwZhF%2BzPYi03HoR9RdYLzJvcxeU04UbtgA6eCCLGmmVYOJ9RSJ%2FrkLrOrTsSfeD%2B6yXDBOHYOT1MLIoNcwssaCN%2BAs3SMvYPYidMQoliUQFcQg6WQzjuxcjHzv84Pili7sI48cgEUAAcwwClJg9BaetPTO0gJrxc4RpggshqtWzuQLjKGaU9NQ8eLcSUE2WgA1Jx1QjH8nW1dLSljDPdMlz%2F5DV6QGNPlaYJxE4%2B7IH29rhVkkT3HKzT0TK%2BpVHBTCBaXHqWKkODHIvpgQ3e6%2FSSBUM0KAAzHURGpqgiRH%2BnNB8GHeFs2QZ8%2FFVGmwWOviL6muz8WSPuj%2BIZxbQfVfJLn34ypicPyPD%2BHrgfI2fmxUbCrFnhiAaBJO%2Bum1o2c8GRsp97MwZEJTt9cqZ0t%2BJTDuXGTTIjfmRlj1E96gSG4HaiVFiFz6lO9l12rGX45R68BhnQ2G87zJup0EMc%2F0ErwcIFLcXY5BzKZDbY6Xt97O9ntf85Tk%2FQSfYEscPJVu%2FFWN%2BT5h7YWKmzOGlOaIJQQ38pafmQHKc14UoIHyUIxVpeVDLanG4QIJFXo7YJH4tlxcGMb7gqQepxVihHOsbZZq5oVp5eS90chS6kW6iUXarmxVGXtXsZ%2ByMwtfqOwgY6pgGgYLYJEN7wRcmC2ZsdNXiP%2FmDZXfpxTAmwTz8NaJ5aAgIXCLq7fjmtzsktbyM1HyaoUBppQ%2BQOFclwVFR77swQjtwJvS9vwWVjsPAC8ZnoeR8cJqjyVvg5jO5eSqihtjegmz3%2BU9hDDj%2BKnDlIYVpqGnX03DML83xbiRoMyruDip0RaV05yNwAXBbSkWxkJeKPrb2z%2BHmy3wZlimfNng5yZU2lJkgO&X-Amz-Signature=449546f6c3aa06220656519c78abf0a45301dacb26c16c72b5c2afc7bd7b4753&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG4F25JK%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8Ap3yca9gyfjdEpW7UtMbOunnBA7Y9ba7QC%2FMlAU5hAiAZquitEKFlsuTGWRptkME1yhHh3iT445JrMIOK7EQPiyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMcJ3LbS07yl8waKxuKtwDlwZhF%2BzPYi03HoR9RdYLzJvcxeU04UbtgA6eCCLGmmVYOJ9RSJ%2FrkLrOrTsSfeD%2B6yXDBOHYOT1MLIoNcwssaCN%2BAs3SMvYPYidMQoliUQFcQg6WQzjuxcjHzv84Pili7sI48cgEUAAcwwClJg9BaetPTO0gJrxc4RpggshqtWzuQLjKGaU9NQ8eLcSUE2WgA1Jx1QjH8nW1dLSljDPdMlz%2F5DV6QGNPlaYJxE4%2B7IH29rhVkkT3HKzT0TK%2BpVHBTCBaXHqWKkODHIvpgQ3e6%2FSSBUM0KAAzHURGpqgiRH%2BnNB8GHeFs2QZ8%2FFVGmwWOviL6muz8WSPuj%2BIZxbQfVfJLn34ypicPyPD%2BHrgfI2fmxUbCrFnhiAaBJO%2Bum1o2c8GRsp97MwZEJTt9cqZ0t%2BJTDuXGTTIjfmRlj1E96gSG4HaiVFiFz6lO9l12rGX45R68BhnQ2G87zJup0EMc%2F0ErwcIFLcXY5BzKZDbY6Xt97O9ntf85Tk%2FQSfYEscPJVu%2FFWN%2BT5h7YWKmzOGlOaIJQQ38pafmQHKc14UoIHyUIxVpeVDLanG4QIJFXo7YJH4tlxcGMb7gqQepxVihHOsbZZq5oVp5eS90chS6kW6iUXarmxVGXtXsZ%2ByMwtfqOwgY6pgGgYLYJEN7wRcmC2ZsdNXiP%2FmDZXfpxTAmwTz8NaJ5aAgIXCLq7fjmtzsktbyM1HyaoUBppQ%2BQOFclwVFR77swQjtwJvS9vwWVjsPAC8ZnoeR8cJqjyVvg5jO5eSqihtjegmz3%2BU9hDDj%2BKnDlIYVpqGnX03DML83xbiRoMyruDip0RaV05yNwAXBbSkWxkJeKPrb2z%2BHmy3wZlimfNng5yZU2lJkgO&X-Amz-Signature=ce4631107ccca68fffeab17a17c759221f5b3a89843134ee4519923b853574e0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG4F25JK%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8Ap3yca9gyfjdEpW7UtMbOunnBA7Y9ba7QC%2FMlAU5hAiAZquitEKFlsuTGWRptkME1yhHh3iT445JrMIOK7EQPiyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMcJ3LbS07yl8waKxuKtwDlwZhF%2BzPYi03HoR9RdYLzJvcxeU04UbtgA6eCCLGmmVYOJ9RSJ%2FrkLrOrTsSfeD%2B6yXDBOHYOT1MLIoNcwssaCN%2BAs3SMvYPYidMQoliUQFcQg6WQzjuxcjHzv84Pili7sI48cgEUAAcwwClJg9BaetPTO0gJrxc4RpggshqtWzuQLjKGaU9NQ8eLcSUE2WgA1Jx1QjH8nW1dLSljDPdMlz%2F5DV6QGNPlaYJxE4%2B7IH29rhVkkT3HKzT0TK%2BpVHBTCBaXHqWKkODHIvpgQ3e6%2FSSBUM0KAAzHURGpqgiRH%2BnNB8GHeFs2QZ8%2FFVGmwWOviL6muz8WSPuj%2BIZxbQfVfJLn34ypicPyPD%2BHrgfI2fmxUbCrFnhiAaBJO%2Bum1o2c8GRsp97MwZEJTt9cqZ0t%2BJTDuXGTTIjfmRlj1E96gSG4HaiVFiFz6lO9l12rGX45R68BhnQ2G87zJup0EMc%2F0ErwcIFLcXY5BzKZDbY6Xt97O9ntf85Tk%2FQSfYEscPJVu%2FFWN%2BT5h7YWKmzOGlOaIJQQ38pafmQHKc14UoIHyUIxVpeVDLanG4QIJFXo7YJH4tlxcGMb7gqQepxVihHOsbZZq5oVp5eS90chS6kW6iUXarmxVGXtXsZ%2ByMwtfqOwgY6pgGgYLYJEN7wRcmC2ZsdNXiP%2FmDZXfpxTAmwTz8NaJ5aAgIXCLq7fjmtzsktbyM1HyaoUBppQ%2BQOFclwVFR77swQjtwJvS9vwWVjsPAC8ZnoeR8cJqjyVvg5jO5eSqihtjegmz3%2BU9hDDj%2BKnDlIYVpqGnX03DML83xbiRoMyruDip0RaV05yNwAXBbSkWxkJeKPrb2z%2BHmy3wZlimfNng5yZU2lJkgO&X-Amz-Signature=9c3cbc3edb96ff4a20e94a854b98e0a08e038c45d60cb015d8143ce244bc803f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG4F25JK%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8Ap3yca9gyfjdEpW7UtMbOunnBA7Y9ba7QC%2FMlAU5hAiAZquitEKFlsuTGWRptkME1yhHh3iT445JrMIOK7EQPiyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMcJ3LbS07yl8waKxuKtwDlwZhF%2BzPYi03HoR9RdYLzJvcxeU04UbtgA6eCCLGmmVYOJ9RSJ%2FrkLrOrTsSfeD%2B6yXDBOHYOT1MLIoNcwssaCN%2BAs3SMvYPYidMQoliUQFcQg6WQzjuxcjHzv84Pili7sI48cgEUAAcwwClJg9BaetPTO0gJrxc4RpggshqtWzuQLjKGaU9NQ8eLcSUE2WgA1Jx1QjH8nW1dLSljDPdMlz%2F5DV6QGNPlaYJxE4%2B7IH29rhVkkT3HKzT0TK%2BpVHBTCBaXHqWKkODHIvpgQ3e6%2FSSBUM0KAAzHURGpqgiRH%2BnNB8GHeFs2QZ8%2FFVGmwWOviL6muz8WSPuj%2BIZxbQfVfJLn34ypicPyPD%2BHrgfI2fmxUbCrFnhiAaBJO%2Bum1o2c8GRsp97MwZEJTt9cqZ0t%2BJTDuXGTTIjfmRlj1E96gSG4HaiVFiFz6lO9l12rGX45R68BhnQ2G87zJup0EMc%2F0ErwcIFLcXY5BzKZDbY6Xt97O9ntf85Tk%2FQSfYEscPJVu%2FFWN%2BT5h7YWKmzOGlOaIJQQ38pafmQHKc14UoIHyUIxVpeVDLanG4QIJFXo7YJH4tlxcGMb7gqQepxVihHOsbZZq5oVp5eS90chS6kW6iUXarmxVGXtXsZ%2ByMwtfqOwgY6pgGgYLYJEN7wRcmC2ZsdNXiP%2FmDZXfpxTAmwTz8NaJ5aAgIXCLq7fjmtzsktbyM1HyaoUBppQ%2BQOFclwVFR77swQjtwJvS9vwWVjsPAC8ZnoeR8cJqjyVvg5jO5eSqihtjegmz3%2BU9hDDj%2BKnDlIYVpqGnX03DML83xbiRoMyruDip0RaV05yNwAXBbSkWxkJeKPrb2z%2BHmy3wZlimfNng5yZU2lJkgO&X-Amz-Signature=6d9852ea78aae41888f19487268d37b95350ef6999964cf0393abe307eb41393&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG4F25JK%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8Ap3yca9gyfjdEpW7UtMbOunnBA7Y9ba7QC%2FMlAU5hAiAZquitEKFlsuTGWRptkME1yhHh3iT445JrMIOK7EQPiyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMcJ3LbS07yl8waKxuKtwDlwZhF%2BzPYi03HoR9RdYLzJvcxeU04UbtgA6eCCLGmmVYOJ9RSJ%2FrkLrOrTsSfeD%2B6yXDBOHYOT1MLIoNcwssaCN%2BAs3SMvYPYidMQoliUQFcQg6WQzjuxcjHzv84Pili7sI48cgEUAAcwwClJg9BaetPTO0gJrxc4RpggshqtWzuQLjKGaU9NQ8eLcSUE2WgA1Jx1QjH8nW1dLSljDPdMlz%2F5DV6QGNPlaYJxE4%2B7IH29rhVkkT3HKzT0TK%2BpVHBTCBaXHqWKkODHIvpgQ3e6%2FSSBUM0KAAzHURGpqgiRH%2BnNB8GHeFs2QZ8%2FFVGmwWOviL6muz8WSPuj%2BIZxbQfVfJLn34ypicPyPD%2BHrgfI2fmxUbCrFnhiAaBJO%2Bum1o2c8GRsp97MwZEJTt9cqZ0t%2BJTDuXGTTIjfmRlj1E96gSG4HaiVFiFz6lO9l12rGX45R68BhnQ2G87zJup0EMc%2F0ErwcIFLcXY5BzKZDbY6Xt97O9ntf85Tk%2FQSfYEscPJVu%2FFWN%2BT5h7YWKmzOGlOaIJQQ38pafmQHKc14UoIHyUIxVpeVDLanG4QIJFXo7YJH4tlxcGMb7gqQepxVihHOsbZZq5oVp5eS90chS6kW6iUXarmxVGXtXsZ%2ByMwtfqOwgY6pgGgYLYJEN7wRcmC2ZsdNXiP%2FmDZXfpxTAmwTz8NaJ5aAgIXCLq7fjmtzsktbyM1HyaoUBppQ%2BQOFclwVFR77swQjtwJvS9vwWVjsPAC8ZnoeR8cJqjyVvg5jO5eSqihtjegmz3%2BU9hDDj%2BKnDlIYVpqGnX03DML83xbiRoMyruDip0RaV05yNwAXBbSkWxkJeKPrb2z%2BHmy3wZlimfNng5yZU2lJkgO&X-Amz-Signature=31eea39dddc4f126dc3d07762d29963dacc50b5fd22fb4afc6414193e55b373f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG4F25JK%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8Ap3yca9gyfjdEpW7UtMbOunnBA7Y9ba7QC%2FMlAU5hAiAZquitEKFlsuTGWRptkME1yhHh3iT445JrMIOK7EQPiyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMcJ3LbS07yl8waKxuKtwDlwZhF%2BzPYi03HoR9RdYLzJvcxeU04UbtgA6eCCLGmmVYOJ9RSJ%2FrkLrOrTsSfeD%2B6yXDBOHYOT1MLIoNcwssaCN%2BAs3SMvYPYidMQoliUQFcQg6WQzjuxcjHzv84Pili7sI48cgEUAAcwwClJg9BaetPTO0gJrxc4RpggshqtWzuQLjKGaU9NQ8eLcSUE2WgA1Jx1QjH8nW1dLSljDPdMlz%2F5DV6QGNPlaYJxE4%2B7IH29rhVkkT3HKzT0TK%2BpVHBTCBaXHqWKkODHIvpgQ3e6%2FSSBUM0KAAzHURGpqgiRH%2BnNB8GHeFs2QZ8%2FFVGmwWOviL6muz8WSPuj%2BIZxbQfVfJLn34ypicPyPD%2BHrgfI2fmxUbCrFnhiAaBJO%2Bum1o2c8GRsp97MwZEJTt9cqZ0t%2BJTDuXGTTIjfmRlj1E96gSG4HaiVFiFz6lO9l12rGX45R68BhnQ2G87zJup0EMc%2F0ErwcIFLcXY5BzKZDbY6Xt97O9ntf85Tk%2FQSfYEscPJVu%2FFWN%2BT5h7YWKmzOGlOaIJQQ38pafmQHKc14UoIHyUIxVpeVDLanG4QIJFXo7YJH4tlxcGMb7gqQepxVihHOsbZZq5oVp5eS90chS6kW6iUXarmxVGXtXsZ%2ByMwtfqOwgY6pgGgYLYJEN7wRcmC2ZsdNXiP%2FmDZXfpxTAmwTz8NaJ5aAgIXCLq7fjmtzsktbyM1HyaoUBppQ%2BQOFclwVFR77swQjtwJvS9vwWVjsPAC8ZnoeR8cJqjyVvg5jO5eSqihtjegmz3%2BU9hDDj%2BKnDlIYVpqGnX03DML83xbiRoMyruDip0RaV05yNwAXBbSkWxkJeKPrb2z%2BHmy3wZlimfNng5yZU2lJkgO&X-Amz-Signature=f661b862204c4dfd6b2d0e98ee0788c7cc6138520c8da7a41ed1e1513e49103f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG4F25JK%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8Ap3yca9gyfjdEpW7UtMbOunnBA7Y9ba7QC%2FMlAU5hAiAZquitEKFlsuTGWRptkME1yhHh3iT445JrMIOK7EQPiyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMcJ3LbS07yl8waKxuKtwDlwZhF%2BzPYi03HoR9RdYLzJvcxeU04UbtgA6eCCLGmmVYOJ9RSJ%2FrkLrOrTsSfeD%2B6yXDBOHYOT1MLIoNcwssaCN%2BAs3SMvYPYidMQoliUQFcQg6WQzjuxcjHzv84Pili7sI48cgEUAAcwwClJg9BaetPTO0gJrxc4RpggshqtWzuQLjKGaU9NQ8eLcSUE2WgA1Jx1QjH8nW1dLSljDPdMlz%2F5DV6QGNPlaYJxE4%2B7IH29rhVkkT3HKzT0TK%2BpVHBTCBaXHqWKkODHIvpgQ3e6%2FSSBUM0KAAzHURGpqgiRH%2BnNB8GHeFs2QZ8%2FFVGmwWOviL6muz8WSPuj%2BIZxbQfVfJLn34ypicPyPD%2BHrgfI2fmxUbCrFnhiAaBJO%2Bum1o2c8GRsp97MwZEJTt9cqZ0t%2BJTDuXGTTIjfmRlj1E96gSG4HaiVFiFz6lO9l12rGX45R68BhnQ2G87zJup0EMc%2F0ErwcIFLcXY5BzKZDbY6Xt97O9ntf85Tk%2FQSfYEscPJVu%2FFWN%2BT5h7YWKmzOGlOaIJQQ38pafmQHKc14UoIHyUIxVpeVDLanG4QIJFXo7YJH4tlxcGMb7gqQepxVihHOsbZZq5oVp5eS90chS6kW6iUXarmxVGXtXsZ%2ByMwtfqOwgY6pgGgYLYJEN7wRcmC2ZsdNXiP%2FmDZXfpxTAmwTz8NaJ5aAgIXCLq7fjmtzsktbyM1HyaoUBppQ%2BQOFclwVFR77swQjtwJvS9vwWVjsPAC8ZnoeR8cJqjyVvg5jO5eSqihtjegmz3%2BU9hDDj%2BKnDlIYVpqGnX03DML83xbiRoMyruDip0RaV05yNwAXBbSkWxkJeKPrb2z%2BHmy3wZlimfNng5yZU2lJkgO&X-Amz-Signature=a327c21e30e56998da1fa7d1c2cf1965f3cd0d6bbba664f664204848a8eec117&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG4F25JK%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8Ap3yca9gyfjdEpW7UtMbOunnBA7Y9ba7QC%2FMlAU5hAiAZquitEKFlsuTGWRptkME1yhHh3iT445JrMIOK7EQPiyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMcJ3LbS07yl8waKxuKtwDlwZhF%2BzPYi03HoR9RdYLzJvcxeU04UbtgA6eCCLGmmVYOJ9RSJ%2FrkLrOrTsSfeD%2B6yXDBOHYOT1MLIoNcwssaCN%2BAs3SMvYPYidMQoliUQFcQg6WQzjuxcjHzv84Pili7sI48cgEUAAcwwClJg9BaetPTO0gJrxc4RpggshqtWzuQLjKGaU9NQ8eLcSUE2WgA1Jx1QjH8nW1dLSljDPdMlz%2F5DV6QGNPlaYJxE4%2B7IH29rhVkkT3HKzT0TK%2BpVHBTCBaXHqWKkODHIvpgQ3e6%2FSSBUM0KAAzHURGpqgiRH%2BnNB8GHeFs2QZ8%2FFVGmwWOviL6muz8WSPuj%2BIZxbQfVfJLn34ypicPyPD%2BHrgfI2fmxUbCrFnhiAaBJO%2Bum1o2c8GRsp97MwZEJTt9cqZ0t%2BJTDuXGTTIjfmRlj1E96gSG4HaiVFiFz6lO9l12rGX45R68BhnQ2G87zJup0EMc%2F0ErwcIFLcXY5BzKZDbY6Xt97O9ntf85Tk%2FQSfYEscPJVu%2FFWN%2BT5h7YWKmzOGlOaIJQQ38pafmQHKc14UoIHyUIxVpeVDLanG4QIJFXo7YJH4tlxcGMb7gqQepxVihHOsbZZq5oVp5eS90chS6kW6iUXarmxVGXtXsZ%2ByMwtfqOwgY6pgGgYLYJEN7wRcmC2ZsdNXiP%2FmDZXfpxTAmwTz8NaJ5aAgIXCLq7fjmtzsktbyM1HyaoUBppQ%2BQOFclwVFR77swQjtwJvS9vwWVjsPAC8ZnoeR8cJqjyVvg5jO5eSqihtjegmz3%2BU9hDDj%2BKnDlIYVpqGnX03DML83xbiRoMyruDip0RaV05yNwAXBbSkWxkJeKPrb2z%2BHmy3wZlimfNng5yZU2lJkgO&X-Amz-Signature=7dcef87e1dbabbd07f672e9497f607e9672dd36edd44010c86dc56ea5b764284&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
