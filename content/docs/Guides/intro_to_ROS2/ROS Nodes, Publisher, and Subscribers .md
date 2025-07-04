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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HLQTSWB%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDvPO7d6XEaLix6prCafQPjSLB%2Bh8RhUpHHtDSI3ahcTgIgZaN59ApAK99O1ETRYzSOrFLbG1c%2Botycpdx7gVbmkooq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCeQPVD5Fx1fbH2tsircAwFad2JziokqMAr5Vpo9vNAB33WP7vVNN1joS2vkYgP7o1XPEa%2FMeFqnEqd2bHBFIlAzDYJlSwJG9raiT4QaHNneSalTgRa9%2B0xZDnUEMzCHwXGtrFDmZoQfQXQXukTQW7ijcNL1%2B4eaUllnX8HnpmdMjpKbKcsjnsgARu8bbmOrbn8D8%2BENxj39FrhqHyGA%2F1mvjYLBtU%2B8FtQOPsKh6vh3t%2FZKId4Benx010ZHKRqoo0y8jHLqp5fZxANxhHlGK7JQpsmwp2GEAvaWjNPzfyF2ZcgLtc5z1TeZNz1amAo7OnKNlBleJ9oHk9Jc5Q53AfOYsNxW4T%2BNKBGK4E1VU1o4xACbpVb3N1NP6ZdhvhzJfCbXchT3APVTaPL6TiVAaWXuZdFPJ7EX4JPP3%2BhtJcUFvocL%2BTB4ZhHt%2BhnxkAJss9X%2BmatNWEW2RcV%2BDdVwsfFuNw%2Bh5KrrEDXoKqZssxTcrDA77Wbh%2B5BEvcnMvnYOCR0hS7EfzXd8lnmXXr9ZkfSvZ2x2UxNZBxFLwa8hPZW0XEY0ULGePwQ5R%2FmXgjvAD5zimPw3ycc%2BTPBpZv3OTMp%2BJGPgF2jno4VTganYFRgk5GER6ROcOSHopkno0W3K6yAwl7tnt83TekmYMIS%2FoMMGOqUBKvv1tzvz31ak%2FAxI3ZwANF9hzZvOdkI21nyVsgKppKRYKalQWzTwu2e7tMITgC9BZXNmrx3kXfhiKBPaOTrPJVsCRNwgDK6E3DK1LYtGEgkdhr9gAJkrWbqL2vOEb53F1Byf8f1uLIunpzS1snVYXnzKFffZbpcn4UakwNNCLelDFQdlYyWDviQnZC04uL5uPgkYUvylxOSRyGJhyPaTUc5ZKnuC&X-Amz-Signature=389acbec4c5468f83d2b1081e3912f16e0c169034bad30a536f18c819dcc50c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HLQTSWB%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDvPO7d6XEaLix6prCafQPjSLB%2Bh8RhUpHHtDSI3ahcTgIgZaN59ApAK99O1ETRYzSOrFLbG1c%2Botycpdx7gVbmkooq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCeQPVD5Fx1fbH2tsircAwFad2JziokqMAr5Vpo9vNAB33WP7vVNN1joS2vkYgP7o1XPEa%2FMeFqnEqd2bHBFIlAzDYJlSwJG9raiT4QaHNneSalTgRa9%2B0xZDnUEMzCHwXGtrFDmZoQfQXQXukTQW7ijcNL1%2B4eaUllnX8HnpmdMjpKbKcsjnsgARu8bbmOrbn8D8%2BENxj39FrhqHyGA%2F1mvjYLBtU%2B8FtQOPsKh6vh3t%2FZKId4Benx010ZHKRqoo0y8jHLqp5fZxANxhHlGK7JQpsmwp2GEAvaWjNPzfyF2ZcgLtc5z1TeZNz1amAo7OnKNlBleJ9oHk9Jc5Q53AfOYsNxW4T%2BNKBGK4E1VU1o4xACbpVb3N1NP6ZdhvhzJfCbXchT3APVTaPL6TiVAaWXuZdFPJ7EX4JPP3%2BhtJcUFvocL%2BTB4ZhHt%2BhnxkAJss9X%2BmatNWEW2RcV%2BDdVwsfFuNw%2Bh5KrrEDXoKqZssxTcrDA77Wbh%2B5BEvcnMvnYOCR0hS7EfzXd8lnmXXr9ZkfSvZ2x2UxNZBxFLwa8hPZW0XEY0ULGePwQ5R%2FmXgjvAD5zimPw3ycc%2BTPBpZv3OTMp%2BJGPgF2jno4VTganYFRgk5GER6ROcOSHopkno0W3K6yAwl7tnt83TekmYMIS%2FoMMGOqUBKvv1tzvz31ak%2FAxI3ZwANF9hzZvOdkI21nyVsgKppKRYKalQWzTwu2e7tMITgC9BZXNmrx3kXfhiKBPaOTrPJVsCRNwgDK6E3DK1LYtGEgkdhr9gAJkrWbqL2vOEb53F1Byf8f1uLIunpzS1snVYXnzKFffZbpcn4UakwNNCLelDFQdlYyWDviQnZC04uL5uPgkYUvylxOSRyGJhyPaTUc5ZKnuC&X-Amz-Signature=94e240da7cac12639125e431865106b0370e84de2d1632703bccc77c7327616c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HLQTSWB%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDvPO7d6XEaLix6prCafQPjSLB%2Bh8RhUpHHtDSI3ahcTgIgZaN59ApAK99O1ETRYzSOrFLbG1c%2Botycpdx7gVbmkooq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCeQPVD5Fx1fbH2tsircAwFad2JziokqMAr5Vpo9vNAB33WP7vVNN1joS2vkYgP7o1XPEa%2FMeFqnEqd2bHBFIlAzDYJlSwJG9raiT4QaHNneSalTgRa9%2B0xZDnUEMzCHwXGtrFDmZoQfQXQXukTQW7ijcNL1%2B4eaUllnX8HnpmdMjpKbKcsjnsgARu8bbmOrbn8D8%2BENxj39FrhqHyGA%2F1mvjYLBtU%2B8FtQOPsKh6vh3t%2FZKId4Benx010ZHKRqoo0y8jHLqp5fZxANxhHlGK7JQpsmwp2GEAvaWjNPzfyF2ZcgLtc5z1TeZNz1amAo7OnKNlBleJ9oHk9Jc5Q53AfOYsNxW4T%2BNKBGK4E1VU1o4xACbpVb3N1NP6ZdhvhzJfCbXchT3APVTaPL6TiVAaWXuZdFPJ7EX4JPP3%2BhtJcUFvocL%2BTB4ZhHt%2BhnxkAJss9X%2BmatNWEW2RcV%2BDdVwsfFuNw%2Bh5KrrEDXoKqZssxTcrDA77Wbh%2B5BEvcnMvnYOCR0hS7EfzXd8lnmXXr9ZkfSvZ2x2UxNZBxFLwa8hPZW0XEY0ULGePwQ5R%2FmXgjvAD5zimPw3ycc%2BTPBpZv3OTMp%2BJGPgF2jno4VTganYFRgk5GER6ROcOSHopkno0W3K6yAwl7tnt83TekmYMIS%2FoMMGOqUBKvv1tzvz31ak%2FAxI3ZwANF9hzZvOdkI21nyVsgKppKRYKalQWzTwu2e7tMITgC9BZXNmrx3kXfhiKBPaOTrPJVsCRNwgDK6E3DK1LYtGEgkdhr9gAJkrWbqL2vOEb53F1Byf8f1uLIunpzS1snVYXnzKFffZbpcn4UakwNNCLelDFQdlYyWDviQnZC04uL5uPgkYUvylxOSRyGJhyPaTUc5ZKnuC&X-Amz-Signature=fa099996f8572fbda9eefc97662cee36c847369994979ead5ea93dd576de0b56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HLQTSWB%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDvPO7d6XEaLix6prCafQPjSLB%2Bh8RhUpHHtDSI3ahcTgIgZaN59ApAK99O1ETRYzSOrFLbG1c%2Botycpdx7gVbmkooq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCeQPVD5Fx1fbH2tsircAwFad2JziokqMAr5Vpo9vNAB33WP7vVNN1joS2vkYgP7o1XPEa%2FMeFqnEqd2bHBFIlAzDYJlSwJG9raiT4QaHNneSalTgRa9%2B0xZDnUEMzCHwXGtrFDmZoQfQXQXukTQW7ijcNL1%2B4eaUllnX8HnpmdMjpKbKcsjnsgARu8bbmOrbn8D8%2BENxj39FrhqHyGA%2F1mvjYLBtU%2B8FtQOPsKh6vh3t%2FZKId4Benx010ZHKRqoo0y8jHLqp5fZxANxhHlGK7JQpsmwp2GEAvaWjNPzfyF2ZcgLtc5z1TeZNz1amAo7OnKNlBleJ9oHk9Jc5Q53AfOYsNxW4T%2BNKBGK4E1VU1o4xACbpVb3N1NP6ZdhvhzJfCbXchT3APVTaPL6TiVAaWXuZdFPJ7EX4JPP3%2BhtJcUFvocL%2BTB4ZhHt%2BhnxkAJss9X%2BmatNWEW2RcV%2BDdVwsfFuNw%2Bh5KrrEDXoKqZssxTcrDA77Wbh%2B5BEvcnMvnYOCR0hS7EfzXd8lnmXXr9ZkfSvZ2x2UxNZBxFLwa8hPZW0XEY0ULGePwQ5R%2FmXgjvAD5zimPw3ycc%2BTPBpZv3OTMp%2BJGPgF2jno4VTganYFRgk5GER6ROcOSHopkno0W3K6yAwl7tnt83TekmYMIS%2FoMMGOqUBKvv1tzvz31ak%2FAxI3ZwANF9hzZvOdkI21nyVsgKppKRYKalQWzTwu2e7tMITgC9BZXNmrx3kXfhiKBPaOTrPJVsCRNwgDK6E3DK1LYtGEgkdhr9gAJkrWbqL2vOEb53F1Byf8f1uLIunpzS1snVYXnzKFffZbpcn4UakwNNCLelDFQdlYyWDviQnZC04uL5uPgkYUvylxOSRyGJhyPaTUc5ZKnuC&X-Amz-Signature=08237f69542a2a98365ee61180a10fd0e7267b53670bb4bddd9c9a97525c8cab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HLQTSWB%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDvPO7d6XEaLix6prCafQPjSLB%2Bh8RhUpHHtDSI3ahcTgIgZaN59ApAK99O1ETRYzSOrFLbG1c%2Botycpdx7gVbmkooq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCeQPVD5Fx1fbH2tsircAwFad2JziokqMAr5Vpo9vNAB33WP7vVNN1joS2vkYgP7o1XPEa%2FMeFqnEqd2bHBFIlAzDYJlSwJG9raiT4QaHNneSalTgRa9%2B0xZDnUEMzCHwXGtrFDmZoQfQXQXukTQW7ijcNL1%2B4eaUllnX8HnpmdMjpKbKcsjnsgARu8bbmOrbn8D8%2BENxj39FrhqHyGA%2F1mvjYLBtU%2B8FtQOPsKh6vh3t%2FZKId4Benx010ZHKRqoo0y8jHLqp5fZxANxhHlGK7JQpsmwp2GEAvaWjNPzfyF2ZcgLtc5z1TeZNz1amAo7OnKNlBleJ9oHk9Jc5Q53AfOYsNxW4T%2BNKBGK4E1VU1o4xACbpVb3N1NP6ZdhvhzJfCbXchT3APVTaPL6TiVAaWXuZdFPJ7EX4JPP3%2BhtJcUFvocL%2BTB4ZhHt%2BhnxkAJss9X%2BmatNWEW2RcV%2BDdVwsfFuNw%2Bh5KrrEDXoKqZssxTcrDA77Wbh%2B5BEvcnMvnYOCR0hS7EfzXd8lnmXXr9ZkfSvZ2x2UxNZBxFLwa8hPZW0XEY0ULGePwQ5R%2FmXgjvAD5zimPw3ycc%2BTPBpZv3OTMp%2BJGPgF2jno4VTganYFRgk5GER6ROcOSHopkno0W3K6yAwl7tnt83TekmYMIS%2FoMMGOqUBKvv1tzvz31ak%2FAxI3ZwANF9hzZvOdkI21nyVsgKppKRYKalQWzTwu2e7tMITgC9BZXNmrx3kXfhiKBPaOTrPJVsCRNwgDK6E3DK1LYtGEgkdhr9gAJkrWbqL2vOEb53F1Byf8f1uLIunpzS1snVYXnzKFffZbpcn4UakwNNCLelDFQdlYyWDviQnZC04uL5uPgkYUvylxOSRyGJhyPaTUc5ZKnuC&X-Amz-Signature=03e69094c263b95bf5b274074aaddd63dd346e10a8d9717430e7f90fb37e0f4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HLQTSWB%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDvPO7d6XEaLix6prCafQPjSLB%2Bh8RhUpHHtDSI3ahcTgIgZaN59ApAK99O1ETRYzSOrFLbG1c%2Botycpdx7gVbmkooq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCeQPVD5Fx1fbH2tsircAwFad2JziokqMAr5Vpo9vNAB33WP7vVNN1joS2vkYgP7o1XPEa%2FMeFqnEqd2bHBFIlAzDYJlSwJG9raiT4QaHNneSalTgRa9%2B0xZDnUEMzCHwXGtrFDmZoQfQXQXukTQW7ijcNL1%2B4eaUllnX8HnpmdMjpKbKcsjnsgARu8bbmOrbn8D8%2BENxj39FrhqHyGA%2F1mvjYLBtU%2B8FtQOPsKh6vh3t%2FZKId4Benx010ZHKRqoo0y8jHLqp5fZxANxhHlGK7JQpsmwp2GEAvaWjNPzfyF2ZcgLtc5z1TeZNz1amAo7OnKNlBleJ9oHk9Jc5Q53AfOYsNxW4T%2BNKBGK4E1VU1o4xACbpVb3N1NP6ZdhvhzJfCbXchT3APVTaPL6TiVAaWXuZdFPJ7EX4JPP3%2BhtJcUFvocL%2BTB4ZhHt%2BhnxkAJss9X%2BmatNWEW2RcV%2BDdVwsfFuNw%2Bh5KrrEDXoKqZssxTcrDA77Wbh%2B5BEvcnMvnYOCR0hS7EfzXd8lnmXXr9ZkfSvZ2x2UxNZBxFLwa8hPZW0XEY0ULGePwQ5R%2FmXgjvAD5zimPw3ycc%2BTPBpZv3OTMp%2BJGPgF2jno4VTganYFRgk5GER6ROcOSHopkno0W3K6yAwl7tnt83TekmYMIS%2FoMMGOqUBKvv1tzvz31ak%2FAxI3ZwANF9hzZvOdkI21nyVsgKppKRYKalQWzTwu2e7tMITgC9BZXNmrx3kXfhiKBPaOTrPJVsCRNwgDK6E3DK1LYtGEgkdhr9gAJkrWbqL2vOEb53F1Byf8f1uLIunpzS1snVYXnzKFffZbpcn4UakwNNCLelDFQdlYyWDviQnZC04uL5uPgkYUvylxOSRyGJhyPaTUc5ZKnuC&X-Amz-Signature=374a6353a5c49e5e3b09a2dcc3f2dfbbdda3d032d623d96c9e5ed58e600688ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HLQTSWB%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDvPO7d6XEaLix6prCafQPjSLB%2Bh8RhUpHHtDSI3ahcTgIgZaN59ApAK99O1ETRYzSOrFLbG1c%2Botycpdx7gVbmkooq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCeQPVD5Fx1fbH2tsircAwFad2JziokqMAr5Vpo9vNAB33WP7vVNN1joS2vkYgP7o1XPEa%2FMeFqnEqd2bHBFIlAzDYJlSwJG9raiT4QaHNneSalTgRa9%2B0xZDnUEMzCHwXGtrFDmZoQfQXQXukTQW7ijcNL1%2B4eaUllnX8HnpmdMjpKbKcsjnsgARu8bbmOrbn8D8%2BENxj39FrhqHyGA%2F1mvjYLBtU%2B8FtQOPsKh6vh3t%2FZKId4Benx010ZHKRqoo0y8jHLqp5fZxANxhHlGK7JQpsmwp2GEAvaWjNPzfyF2ZcgLtc5z1TeZNz1amAo7OnKNlBleJ9oHk9Jc5Q53AfOYsNxW4T%2BNKBGK4E1VU1o4xACbpVb3N1NP6ZdhvhzJfCbXchT3APVTaPL6TiVAaWXuZdFPJ7EX4JPP3%2BhtJcUFvocL%2BTB4ZhHt%2BhnxkAJss9X%2BmatNWEW2RcV%2BDdVwsfFuNw%2Bh5KrrEDXoKqZssxTcrDA77Wbh%2B5BEvcnMvnYOCR0hS7EfzXd8lnmXXr9ZkfSvZ2x2UxNZBxFLwa8hPZW0XEY0ULGePwQ5R%2FmXgjvAD5zimPw3ycc%2BTPBpZv3OTMp%2BJGPgF2jno4VTganYFRgk5GER6ROcOSHopkno0W3K6yAwl7tnt83TekmYMIS%2FoMMGOqUBKvv1tzvz31ak%2FAxI3ZwANF9hzZvOdkI21nyVsgKppKRYKalQWzTwu2e7tMITgC9BZXNmrx3kXfhiKBPaOTrPJVsCRNwgDK6E3DK1LYtGEgkdhr9gAJkrWbqL2vOEb53F1Byf8f1uLIunpzS1snVYXnzKFffZbpcn4UakwNNCLelDFQdlYyWDviQnZC04uL5uPgkYUvylxOSRyGJhyPaTUc5ZKnuC&X-Amz-Signature=f84618d181ba61a4b5ad6e86a3951c5da2b6de6082b2e6c343c497a0fc5c9a64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HLQTSWB%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDvPO7d6XEaLix6prCafQPjSLB%2Bh8RhUpHHtDSI3ahcTgIgZaN59ApAK99O1ETRYzSOrFLbG1c%2Botycpdx7gVbmkooq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCeQPVD5Fx1fbH2tsircAwFad2JziokqMAr5Vpo9vNAB33WP7vVNN1joS2vkYgP7o1XPEa%2FMeFqnEqd2bHBFIlAzDYJlSwJG9raiT4QaHNneSalTgRa9%2B0xZDnUEMzCHwXGtrFDmZoQfQXQXukTQW7ijcNL1%2B4eaUllnX8HnpmdMjpKbKcsjnsgARu8bbmOrbn8D8%2BENxj39FrhqHyGA%2F1mvjYLBtU%2B8FtQOPsKh6vh3t%2FZKId4Benx010ZHKRqoo0y8jHLqp5fZxANxhHlGK7JQpsmwp2GEAvaWjNPzfyF2ZcgLtc5z1TeZNz1amAo7OnKNlBleJ9oHk9Jc5Q53AfOYsNxW4T%2BNKBGK4E1VU1o4xACbpVb3N1NP6ZdhvhzJfCbXchT3APVTaPL6TiVAaWXuZdFPJ7EX4JPP3%2BhtJcUFvocL%2BTB4ZhHt%2BhnxkAJss9X%2BmatNWEW2RcV%2BDdVwsfFuNw%2Bh5KrrEDXoKqZssxTcrDA77Wbh%2B5BEvcnMvnYOCR0hS7EfzXd8lnmXXr9ZkfSvZ2x2UxNZBxFLwa8hPZW0XEY0ULGePwQ5R%2FmXgjvAD5zimPw3ycc%2BTPBpZv3OTMp%2BJGPgF2jno4VTganYFRgk5GER6ROcOSHopkno0W3K6yAwl7tnt83TekmYMIS%2FoMMGOqUBKvv1tzvz31ak%2FAxI3ZwANF9hzZvOdkI21nyVsgKppKRYKalQWzTwu2e7tMITgC9BZXNmrx3kXfhiKBPaOTrPJVsCRNwgDK6E3DK1LYtGEgkdhr9gAJkrWbqL2vOEb53F1Byf8f1uLIunpzS1snVYXnzKFffZbpcn4UakwNNCLelDFQdlYyWDviQnZC04uL5uPgkYUvylxOSRyGJhyPaTUc5ZKnuC&X-Amz-Signature=1f495c49152c95f9b437bead1752b0990200d311725f6f8308cc2f3c3ae407f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
