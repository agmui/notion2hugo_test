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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEIA32PP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAT8dlKz0UaqV6Y6dAo0p6RIQlY8TD0NS09HuNtGmiydAiANr4Nqg%2Bgv8AZOlm8cQPn7tpyUOpXWCD7IxZAfTXbD8SqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlCzIMCoOyuOPXZpxKtwD36B775KMhv7P2ubIM2ueW6s3vZm%2FRI4Pfon8oyAHpTe973AoYvOmQgaOEFTxYL6eeKOWWs2MxAA7mZHHYEWroKni2Jc7fvEpXy0hoRlwbwzSy2ncgwHqd08WJ8HrEkomhPbrZM9MG%2Fq5WzM%2Fg%2B%2B2wumveioyGQxeymrnV6M7ue629ddaEcNghRWGlGoxWadxxtAOgLhv89XrmOY%2BkOgkHv6WfDYlOPXiVk36vzPXW%2FZmBY5UGeQccbu91MsPizG4zVTcOfrKdJelYv%2BfkQHCTYagsxiKklZNl5DmEte%2Ft0iaR15uCbU1X0cMYst1c94mLSSyP5tYmBRVD2oKfRcXcfW3mUu3cMzekPwfse3d%2F2DWP0Y2VZwRD8LAPPWWSnTNxMIX%2F0CRfvE7043%2FgNrkQmm6tkTrlN2WT33GasQAM%2FTyeQLLn5oC9nA1PtUFCvmBbGMH54SkcffM5gBQAYRcheRgC0if72ImpavN95vQ46fQME2jXABlBfLuBbn7HUvg98JeZnV62SCahBCiZ9ew0K%2FGJbSeMT929qVKEgk1svASVACLmv9FyGqFREFIlv3ehKiXB91x1y4EOCW5Fd8L3RpEQK7PjoDWvbP3ea7xDSucoZTXjhziskA3HX0w4OP0wAY6pgF4b%2F2VY8zAxpDnvRXhgItiXdILeh4DlJ0XBo0vWVt56ZiBXgkgH3lJgb8V7bRJq18ssjWGaEw5AYs6UU9XQ5UD9mHpwIj8H2NMPc7iQ1GGEeCKbPz7ZDbHWuGN9mMv%2FpW1%2B5mE2lee%2FoLf7llsU3tgRdkIBhe1coKAM0h9c39rIaZNOrueLDoseiRSRWE2FIUbipRJ%2Fob2UnwT7Ik4oF0q1gU7H6UN&X-Amz-Signature=c77b888d4246f5860d52a7c19a0867aeb2aab35e867448c64e3a33de7e5dffc7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEIA32PP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAT8dlKz0UaqV6Y6dAo0p6RIQlY8TD0NS09HuNtGmiydAiANr4Nqg%2Bgv8AZOlm8cQPn7tpyUOpXWCD7IxZAfTXbD8SqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlCzIMCoOyuOPXZpxKtwD36B775KMhv7P2ubIM2ueW6s3vZm%2FRI4Pfon8oyAHpTe973AoYvOmQgaOEFTxYL6eeKOWWs2MxAA7mZHHYEWroKni2Jc7fvEpXy0hoRlwbwzSy2ncgwHqd08WJ8HrEkomhPbrZM9MG%2Fq5WzM%2Fg%2B%2B2wumveioyGQxeymrnV6M7ue629ddaEcNghRWGlGoxWadxxtAOgLhv89XrmOY%2BkOgkHv6WfDYlOPXiVk36vzPXW%2FZmBY5UGeQccbu91MsPizG4zVTcOfrKdJelYv%2BfkQHCTYagsxiKklZNl5DmEte%2Ft0iaR15uCbU1X0cMYst1c94mLSSyP5tYmBRVD2oKfRcXcfW3mUu3cMzekPwfse3d%2F2DWP0Y2VZwRD8LAPPWWSnTNxMIX%2F0CRfvE7043%2FgNrkQmm6tkTrlN2WT33GasQAM%2FTyeQLLn5oC9nA1PtUFCvmBbGMH54SkcffM5gBQAYRcheRgC0if72ImpavN95vQ46fQME2jXABlBfLuBbn7HUvg98JeZnV62SCahBCiZ9ew0K%2FGJbSeMT929qVKEgk1svASVACLmv9FyGqFREFIlv3ehKiXB91x1y4EOCW5Fd8L3RpEQK7PjoDWvbP3ea7xDSucoZTXjhziskA3HX0w4OP0wAY6pgF4b%2F2VY8zAxpDnvRXhgItiXdILeh4DlJ0XBo0vWVt56ZiBXgkgH3lJgb8V7bRJq18ssjWGaEw5AYs6UU9XQ5UD9mHpwIj8H2NMPc7iQ1GGEeCKbPz7ZDbHWuGN9mMv%2FpW1%2B5mE2lee%2FoLf7llsU3tgRdkIBhe1coKAM0h9c39rIaZNOrueLDoseiRSRWE2FIUbipRJ%2Fob2UnwT7Ik4oF0q1gU7H6UN&X-Amz-Signature=640dbc6fbd5fdd33a1207e59b7e8331239e4ddbe2afc50d0d3575d290be0ada7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEIA32PP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAT8dlKz0UaqV6Y6dAo0p6RIQlY8TD0NS09HuNtGmiydAiANr4Nqg%2Bgv8AZOlm8cQPn7tpyUOpXWCD7IxZAfTXbD8SqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlCzIMCoOyuOPXZpxKtwD36B775KMhv7P2ubIM2ueW6s3vZm%2FRI4Pfon8oyAHpTe973AoYvOmQgaOEFTxYL6eeKOWWs2MxAA7mZHHYEWroKni2Jc7fvEpXy0hoRlwbwzSy2ncgwHqd08WJ8HrEkomhPbrZM9MG%2Fq5WzM%2Fg%2B%2B2wumveioyGQxeymrnV6M7ue629ddaEcNghRWGlGoxWadxxtAOgLhv89XrmOY%2BkOgkHv6WfDYlOPXiVk36vzPXW%2FZmBY5UGeQccbu91MsPizG4zVTcOfrKdJelYv%2BfkQHCTYagsxiKklZNl5DmEte%2Ft0iaR15uCbU1X0cMYst1c94mLSSyP5tYmBRVD2oKfRcXcfW3mUu3cMzekPwfse3d%2F2DWP0Y2VZwRD8LAPPWWSnTNxMIX%2F0CRfvE7043%2FgNrkQmm6tkTrlN2WT33GasQAM%2FTyeQLLn5oC9nA1PtUFCvmBbGMH54SkcffM5gBQAYRcheRgC0if72ImpavN95vQ46fQME2jXABlBfLuBbn7HUvg98JeZnV62SCahBCiZ9ew0K%2FGJbSeMT929qVKEgk1svASVACLmv9FyGqFREFIlv3ehKiXB91x1y4EOCW5Fd8L3RpEQK7PjoDWvbP3ea7xDSucoZTXjhziskA3HX0w4OP0wAY6pgF4b%2F2VY8zAxpDnvRXhgItiXdILeh4DlJ0XBo0vWVt56ZiBXgkgH3lJgb8V7bRJq18ssjWGaEw5AYs6UU9XQ5UD9mHpwIj8H2NMPc7iQ1GGEeCKbPz7ZDbHWuGN9mMv%2FpW1%2B5mE2lee%2FoLf7llsU3tgRdkIBhe1coKAM0h9c39rIaZNOrueLDoseiRSRWE2FIUbipRJ%2Fob2UnwT7Ik4oF0q1gU7H6UN&X-Amz-Signature=0bd67545063e2f239ca84f75b09978e8451d7a6909d9d13b269b3df664ffab1b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEIA32PP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAT8dlKz0UaqV6Y6dAo0p6RIQlY8TD0NS09HuNtGmiydAiANr4Nqg%2Bgv8AZOlm8cQPn7tpyUOpXWCD7IxZAfTXbD8SqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlCzIMCoOyuOPXZpxKtwD36B775KMhv7P2ubIM2ueW6s3vZm%2FRI4Pfon8oyAHpTe973AoYvOmQgaOEFTxYL6eeKOWWs2MxAA7mZHHYEWroKni2Jc7fvEpXy0hoRlwbwzSy2ncgwHqd08WJ8HrEkomhPbrZM9MG%2Fq5WzM%2Fg%2B%2B2wumveioyGQxeymrnV6M7ue629ddaEcNghRWGlGoxWadxxtAOgLhv89XrmOY%2BkOgkHv6WfDYlOPXiVk36vzPXW%2FZmBY5UGeQccbu91MsPizG4zVTcOfrKdJelYv%2BfkQHCTYagsxiKklZNl5DmEte%2Ft0iaR15uCbU1X0cMYst1c94mLSSyP5tYmBRVD2oKfRcXcfW3mUu3cMzekPwfse3d%2F2DWP0Y2VZwRD8LAPPWWSnTNxMIX%2F0CRfvE7043%2FgNrkQmm6tkTrlN2WT33GasQAM%2FTyeQLLn5oC9nA1PtUFCvmBbGMH54SkcffM5gBQAYRcheRgC0if72ImpavN95vQ46fQME2jXABlBfLuBbn7HUvg98JeZnV62SCahBCiZ9ew0K%2FGJbSeMT929qVKEgk1svASVACLmv9FyGqFREFIlv3ehKiXB91x1y4EOCW5Fd8L3RpEQK7PjoDWvbP3ea7xDSucoZTXjhziskA3HX0w4OP0wAY6pgF4b%2F2VY8zAxpDnvRXhgItiXdILeh4DlJ0XBo0vWVt56ZiBXgkgH3lJgb8V7bRJq18ssjWGaEw5AYs6UU9XQ5UD9mHpwIj8H2NMPc7iQ1GGEeCKbPz7ZDbHWuGN9mMv%2FpW1%2B5mE2lee%2FoLf7llsU3tgRdkIBhe1coKAM0h9c39rIaZNOrueLDoseiRSRWE2FIUbipRJ%2Fob2UnwT7Ik4oF0q1gU7H6UN&X-Amz-Signature=7420ab012e58dca1c1fd92a0ad42d17bc26c94dcb973bf0859bc51baf9667b76&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEIA32PP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAT8dlKz0UaqV6Y6dAo0p6RIQlY8TD0NS09HuNtGmiydAiANr4Nqg%2Bgv8AZOlm8cQPn7tpyUOpXWCD7IxZAfTXbD8SqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlCzIMCoOyuOPXZpxKtwD36B775KMhv7P2ubIM2ueW6s3vZm%2FRI4Pfon8oyAHpTe973AoYvOmQgaOEFTxYL6eeKOWWs2MxAA7mZHHYEWroKni2Jc7fvEpXy0hoRlwbwzSy2ncgwHqd08WJ8HrEkomhPbrZM9MG%2Fq5WzM%2Fg%2B%2B2wumveioyGQxeymrnV6M7ue629ddaEcNghRWGlGoxWadxxtAOgLhv89XrmOY%2BkOgkHv6WfDYlOPXiVk36vzPXW%2FZmBY5UGeQccbu91MsPizG4zVTcOfrKdJelYv%2BfkQHCTYagsxiKklZNl5DmEte%2Ft0iaR15uCbU1X0cMYst1c94mLSSyP5tYmBRVD2oKfRcXcfW3mUu3cMzekPwfse3d%2F2DWP0Y2VZwRD8LAPPWWSnTNxMIX%2F0CRfvE7043%2FgNrkQmm6tkTrlN2WT33GasQAM%2FTyeQLLn5oC9nA1PtUFCvmBbGMH54SkcffM5gBQAYRcheRgC0if72ImpavN95vQ46fQME2jXABlBfLuBbn7HUvg98JeZnV62SCahBCiZ9ew0K%2FGJbSeMT929qVKEgk1svASVACLmv9FyGqFREFIlv3ehKiXB91x1y4EOCW5Fd8L3RpEQK7PjoDWvbP3ea7xDSucoZTXjhziskA3HX0w4OP0wAY6pgF4b%2F2VY8zAxpDnvRXhgItiXdILeh4DlJ0XBo0vWVt56ZiBXgkgH3lJgb8V7bRJq18ssjWGaEw5AYs6UU9XQ5UD9mHpwIj8H2NMPc7iQ1GGEeCKbPz7ZDbHWuGN9mMv%2FpW1%2B5mE2lee%2FoLf7llsU3tgRdkIBhe1coKAM0h9c39rIaZNOrueLDoseiRSRWE2FIUbipRJ%2Fob2UnwT7Ik4oF0q1gU7H6UN&X-Amz-Signature=166b4c55d1d1e6cfd9a9167fce545809aa7038acd00ca61811e794a53d9e3bac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEIA32PP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAT8dlKz0UaqV6Y6dAo0p6RIQlY8TD0NS09HuNtGmiydAiANr4Nqg%2Bgv8AZOlm8cQPn7tpyUOpXWCD7IxZAfTXbD8SqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlCzIMCoOyuOPXZpxKtwD36B775KMhv7P2ubIM2ueW6s3vZm%2FRI4Pfon8oyAHpTe973AoYvOmQgaOEFTxYL6eeKOWWs2MxAA7mZHHYEWroKni2Jc7fvEpXy0hoRlwbwzSy2ncgwHqd08WJ8HrEkomhPbrZM9MG%2Fq5WzM%2Fg%2B%2B2wumveioyGQxeymrnV6M7ue629ddaEcNghRWGlGoxWadxxtAOgLhv89XrmOY%2BkOgkHv6WfDYlOPXiVk36vzPXW%2FZmBY5UGeQccbu91MsPizG4zVTcOfrKdJelYv%2BfkQHCTYagsxiKklZNl5DmEte%2Ft0iaR15uCbU1X0cMYst1c94mLSSyP5tYmBRVD2oKfRcXcfW3mUu3cMzekPwfse3d%2F2DWP0Y2VZwRD8LAPPWWSnTNxMIX%2F0CRfvE7043%2FgNrkQmm6tkTrlN2WT33GasQAM%2FTyeQLLn5oC9nA1PtUFCvmBbGMH54SkcffM5gBQAYRcheRgC0if72ImpavN95vQ46fQME2jXABlBfLuBbn7HUvg98JeZnV62SCahBCiZ9ew0K%2FGJbSeMT929qVKEgk1svASVACLmv9FyGqFREFIlv3ehKiXB91x1y4EOCW5Fd8L3RpEQK7PjoDWvbP3ea7xDSucoZTXjhziskA3HX0w4OP0wAY6pgF4b%2F2VY8zAxpDnvRXhgItiXdILeh4DlJ0XBo0vWVt56ZiBXgkgH3lJgb8V7bRJq18ssjWGaEw5AYs6UU9XQ5UD9mHpwIj8H2NMPc7iQ1GGEeCKbPz7ZDbHWuGN9mMv%2FpW1%2B5mE2lee%2FoLf7llsU3tgRdkIBhe1coKAM0h9c39rIaZNOrueLDoseiRSRWE2FIUbipRJ%2Fob2UnwT7Ik4oF0q1gU7H6UN&X-Amz-Signature=e30297e0972ee94077796787d3d3fb277340eda905d36ac47f8c0531595edd08&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEIA32PP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAT8dlKz0UaqV6Y6dAo0p6RIQlY8TD0NS09HuNtGmiydAiANr4Nqg%2Bgv8AZOlm8cQPn7tpyUOpXWCD7IxZAfTXbD8SqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlCzIMCoOyuOPXZpxKtwD36B775KMhv7P2ubIM2ueW6s3vZm%2FRI4Pfon8oyAHpTe973AoYvOmQgaOEFTxYL6eeKOWWs2MxAA7mZHHYEWroKni2Jc7fvEpXy0hoRlwbwzSy2ncgwHqd08WJ8HrEkomhPbrZM9MG%2Fq5WzM%2Fg%2B%2B2wumveioyGQxeymrnV6M7ue629ddaEcNghRWGlGoxWadxxtAOgLhv89XrmOY%2BkOgkHv6WfDYlOPXiVk36vzPXW%2FZmBY5UGeQccbu91MsPizG4zVTcOfrKdJelYv%2BfkQHCTYagsxiKklZNl5DmEte%2Ft0iaR15uCbU1X0cMYst1c94mLSSyP5tYmBRVD2oKfRcXcfW3mUu3cMzekPwfse3d%2F2DWP0Y2VZwRD8LAPPWWSnTNxMIX%2F0CRfvE7043%2FgNrkQmm6tkTrlN2WT33GasQAM%2FTyeQLLn5oC9nA1PtUFCvmBbGMH54SkcffM5gBQAYRcheRgC0if72ImpavN95vQ46fQME2jXABlBfLuBbn7HUvg98JeZnV62SCahBCiZ9ew0K%2FGJbSeMT929qVKEgk1svASVACLmv9FyGqFREFIlv3ehKiXB91x1y4EOCW5Fd8L3RpEQK7PjoDWvbP3ea7xDSucoZTXjhziskA3HX0w4OP0wAY6pgF4b%2F2VY8zAxpDnvRXhgItiXdILeh4DlJ0XBo0vWVt56ZiBXgkgH3lJgb8V7bRJq18ssjWGaEw5AYs6UU9XQ5UD9mHpwIj8H2NMPc7iQ1GGEeCKbPz7ZDbHWuGN9mMv%2FpW1%2B5mE2lee%2FoLf7llsU3tgRdkIBhe1coKAM0h9c39rIaZNOrueLDoseiRSRWE2FIUbipRJ%2Fob2UnwT7Ik4oF0q1gU7H6UN&X-Amz-Signature=ea95cb660db7e647fde1201d539ef30ad779c4be621e5ca0ba7d29bf8a3b52d7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEIA32PP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAT8dlKz0UaqV6Y6dAo0p6RIQlY8TD0NS09HuNtGmiydAiANr4Nqg%2Bgv8AZOlm8cQPn7tpyUOpXWCD7IxZAfTXbD8SqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlCzIMCoOyuOPXZpxKtwD36B775KMhv7P2ubIM2ueW6s3vZm%2FRI4Pfon8oyAHpTe973AoYvOmQgaOEFTxYL6eeKOWWs2MxAA7mZHHYEWroKni2Jc7fvEpXy0hoRlwbwzSy2ncgwHqd08WJ8HrEkomhPbrZM9MG%2Fq5WzM%2Fg%2B%2B2wumveioyGQxeymrnV6M7ue629ddaEcNghRWGlGoxWadxxtAOgLhv89XrmOY%2BkOgkHv6WfDYlOPXiVk36vzPXW%2FZmBY5UGeQccbu91MsPizG4zVTcOfrKdJelYv%2BfkQHCTYagsxiKklZNl5DmEte%2Ft0iaR15uCbU1X0cMYst1c94mLSSyP5tYmBRVD2oKfRcXcfW3mUu3cMzekPwfse3d%2F2DWP0Y2VZwRD8LAPPWWSnTNxMIX%2F0CRfvE7043%2FgNrkQmm6tkTrlN2WT33GasQAM%2FTyeQLLn5oC9nA1PtUFCvmBbGMH54SkcffM5gBQAYRcheRgC0if72ImpavN95vQ46fQME2jXABlBfLuBbn7HUvg98JeZnV62SCahBCiZ9ew0K%2FGJbSeMT929qVKEgk1svASVACLmv9FyGqFREFIlv3ehKiXB91x1y4EOCW5Fd8L3RpEQK7PjoDWvbP3ea7xDSucoZTXjhziskA3HX0w4OP0wAY6pgF4b%2F2VY8zAxpDnvRXhgItiXdILeh4DlJ0XBo0vWVt56ZiBXgkgH3lJgb8V7bRJq18ssjWGaEw5AYs6UU9XQ5UD9mHpwIj8H2NMPc7iQ1GGEeCKbPz7ZDbHWuGN9mMv%2FpW1%2B5mE2lee%2FoLf7llsU3tgRdkIBhe1coKAM0h9c39rIaZNOrueLDoseiRSRWE2FIUbipRJ%2Fob2UnwT7Ik4oF0q1gU7H6UN&X-Amz-Signature=dbd0cad1a31420ad47d98c484359eec91aa940d9a3afd36e8d00b32444068a65&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
