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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX7XJR7X%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDrdUBz4W8MEpzMvI37KKQlk%2BdGyc4QOrpG54wYN3iFpgIhANJOhK64jRellBFsUSQlLl5dkk0kIZ6t6fv%2BPF3%2FS%2BZ%2FKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfHF56iS8UK7njdxEq3AN8rSTM68Zl0hc6I%2B%2BSa6uLE%2BPMnOmng3ND0Z5nYhRWDC8tmSN%2FbwUcWtga8Dc3SqcEfdkhfPt%2F45DOf8BgZ6Y%2FLyizY4OYOHUibi6FSHs0z1fy5dHa4G9CG7%2BpYJ7ojiowQtHLqi9%2FYyAqLBlmvtjlltAsPWTOW%2F1NLtXezEmghHD4ZZ7aIUo6BSrIs9rY%2BthgvBAQcHwfkyjtF0XMs6kJnK5Yl%2FFCSQ47nneXVGChCAo4mdLGecp6KMlfnuOE%2BiRxzN1xQDy4Pg6FS7DSYBVrJXFik48Rl%2BjY4wLjvdDCirziNGtH6P3%2B1REUVx5EDzPmRuG4%2Fq%2FDxFBT86iXGEplnlP6PXSTbyME9b089GWZrbNtpU%2B5bIozoFZwZgFhHyvIvMtEr7JkB5BADT7nAEEEQ35rK9unbQNkAEV0OZtH8tql9FT88zQE8eECSMBDKdOzkCyAp3qyuEQwTfZ1PFOnI0Pi7ufAqZTqTR5FDznFKMuW5hmjDHHK6WjC0bsRJo9H1SHqXHFa6r22CWN0Hzrd6L%2B%2BE89BGp0Dy8TfrL%2Bn%2FJXKCUmcUWlLQxxzQ0tKJ9TD2v7P3d3cB2bMh2vBHawHk7c9NdA0GOcILKd%2BpXayxH27kSNmXO4H3wBUyTDrv8bABjqkAbAZ9wLUS%2FQaLMpiuwrMovJfs6pq56q%2B%2B%2B1NsMVHDprQFRVBPrXNiTjMe7fSJUqxoxQPKOdcAq4Aie7SxjlFVXyO6T21lx8z8V0fyQ0clAWhbKy15UZkvlzSYKN0PRFSyuPDBDNaKTcU0AHW1NIg3D4NduaLX5yMvksRXSDQPYp%2BMUNaVRf43%2Fx9c9NcGzjaw2gYv7F09GXkogLxLzpHrKi6X1yw&X-Amz-Signature=c32ba67286bbc3868b03e5a48c4f26f426851560efa3ec1a048f632b08c74ee4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX7XJR7X%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDrdUBz4W8MEpzMvI37KKQlk%2BdGyc4QOrpG54wYN3iFpgIhANJOhK64jRellBFsUSQlLl5dkk0kIZ6t6fv%2BPF3%2FS%2BZ%2FKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfHF56iS8UK7njdxEq3AN8rSTM68Zl0hc6I%2B%2BSa6uLE%2BPMnOmng3ND0Z5nYhRWDC8tmSN%2FbwUcWtga8Dc3SqcEfdkhfPt%2F45DOf8BgZ6Y%2FLyizY4OYOHUibi6FSHs0z1fy5dHa4G9CG7%2BpYJ7ojiowQtHLqi9%2FYyAqLBlmvtjlltAsPWTOW%2F1NLtXezEmghHD4ZZ7aIUo6BSrIs9rY%2BthgvBAQcHwfkyjtF0XMs6kJnK5Yl%2FFCSQ47nneXVGChCAo4mdLGecp6KMlfnuOE%2BiRxzN1xQDy4Pg6FS7DSYBVrJXFik48Rl%2BjY4wLjvdDCirziNGtH6P3%2B1REUVx5EDzPmRuG4%2Fq%2FDxFBT86iXGEplnlP6PXSTbyME9b089GWZrbNtpU%2B5bIozoFZwZgFhHyvIvMtEr7JkB5BADT7nAEEEQ35rK9unbQNkAEV0OZtH8tql9FT88zQE8eECSMBDKdOzkCyAp3qyuEQwTfZ1PFOnI0Pi7ufAqZTqTR5FDznFKMuW5hmjDHHK6WjC0bsRJo9H1SHqXHFa6r22CWN0Hzrd6L%2B%2BE89BGp0Dy8TfrL%2Bn%2FJXKCUmcUWlLQxxzQ0tKJ9TD2v7P3d3cB2bMh2vBHawHk7c9NdA0GOcILKd%2BpXayxH27kSNmXO4H3wBUyTDrv8bABjqkAbAZ9wLUS%2FQaLMpiuwrMovJfs6pq56q%2B%2B%2B1NsMVHDprQFRVBPrXNiTjMe7fSJUqxoxQPKOdcAq4Aie7SxjlFVXyO6T21lx8z8V0fyQ0clAWhbKy15UZkvlzSYKN0PRFSyuPDBDNaKTcU0AHW1NIg3D4NduaLX5yMvksRXSDQPYp%2BMUNaVRf43%2Fx9c9NcGzjaw2gYv7F09GXkogLxLzpHrKi6X1yw&X-Amz-Signature=c342f4b974bb8bfb3e1264876c1a5f69484d51d323710d38022986283d117a09&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX7XJR7X%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDrdUBz4W8MEpzMvI37KKQlk%2BdGyc4QOrpG54wYN3iFpgIhANJOhK64jRellBFsUSQlLl5dkk0kIZ6t6fv%2BPF3%2FS%2BZ%2FKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfHF56iS8UK7njdxEq3AN8rSTM68Zl0hc6I%2B%2BSa6uLE%2BPMnOmng3ND0Z5nYhRWDC8tmSN%2FbwUcWtga8Dc3SqcEfdkhfPt%2F45DOf8BgZ6Y%2FLyizY4OYOHUibi6FSHs0z1fy5dHa4G9CG7%2BpYJ7ojiowQtHLqi9%2FYyAqLBlmvtjlltAsPWTOW%2F1NLtXezEmghHD4ZZ7aIUo6BSrIs9rY%2BthgvBAQcHwfkyjtF0XMs6kJnK5Yl%2FFCSQ47nneXVGChCAo4mdLGecp6KMlfnuOE%2BiRxzN1xQDy4Pg6FS7DSYBVrJXFik48Rl%2BjY4wLjvdDCirziNGtH6P3%2B1REUVx5EDzPmRuG4%2Fq%2FDxFBT86iXGEplnlP6PXSTbyME9b089GWZrbNtpU%2B5bIozoFZwZgFhHyvIvMtEr7JkB5BADT7nAEEEQ35rK9unbQNkAEV0OZtH8tql9FT88zQE8eECSMBDKdOzkCyAp3qyuEQwTfZ1PFOnI0Pi7ufAqZTqTR5FDznFKMuW5hmjDHHK6WjC0bsRJo9H1SHqXHFa6r22CWN0Hzrd6L%2B%2BE89BGp0Dy8TfrL%2Bn%2FJXKCUmcUWlLQxxzQ0tKJ9TD2v7P3d3cB2bMh2vBHawHk7c9NdA0GOcILKd%2BpXayxH27kSNmXO4H3wBUyTDrv8bABjqkAbAZ9wLUS%2FQaLMpiuwrMovJfs6pq56q%2B%2B%2B1NsMVHDprQFRVBPrXNiTjMe7fSJUqxoxQPKOdcAq4Aie7SxjlFVXyO6T21lx8z8V0fyQ0clAWhbKy15UZkvlzSYKN0PRFSyuPDBDNaKTcU0AHW1NIg3D4NduaLX5yMvksRXSDQPYp%2BMUNaVRf43%2Fx9c9NcGzjaw2gYv7F09GXkogLxLzpHrKi6X1yw&X-Amz-Signature=5a6306ae87d0d1763ed41234925fd10cc9a17cec57b20758954b142663d75875&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX7XJR7X%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDrdUBz4W8MEpzMvI37KKQlk%2BdGyc4QOrpG54wYN3iFpgIhANJOhK64jRellBFsUSQlLl5dkk0kIZ6t6fv%2BPF3%2FS%2BZ%2FKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfHF56iS8UK7njdxEq3AN8rSTM68Zl0hc6I%2B%2BSa6uLE%2BPMnOmng3ND0Z5nYhRWDC8tmSN%2FbwUcWtga8Dc3SqcEfdkhfPt%2F45DOf8BgZ6Y%2FLyizY4OYOHUibi6FSHs0z1fy5dHa4G9CG7%2BpYJ7ojiowQtHLqi9%2FYyAqLBlmvtjlltAsPWTOW%2F1NLtXezEmghHD4ZZ7aIUo6BSrIs9rY%2BthgvBAQcHwfkyjtF0XMs6kJnK5Yl%2FFCSQ47nneXVGChCAo4mdLGecp6KMlfnuOE%2BiRxzN1xQDy4Pg6FS7DSYBVrJXFik48Rl%2BjY4wLjvdDCirziNGtH6P3%2B1REUVx5EDzPmRuG4%2Fq%2FDxFBT86iXGEplnlP6PXSTbyME9b089GWZrbNtpU%2B5bIozoFZwZgFhHyvIvMtEr7JkB5BADT7nAEEEQ35rK9unbQNkAEV0OZtH8tql9FT88zQE8eECSMBDKdOzkCyAp3qyuEQwTfZ1PFOnI0Pi7ufAqZTqTR5FDznFKMuW5hmjDHHK6WjC0bsRJo9H1SHqXHFa6r22CWN0Hzrd6L%2B%2BE89BGp0Dy8TfrL%2Bn%2FJXKCUmcUWlLQxxzQ0tKJ9TD2v7P3d3cB2bMh2vBHawHk7c9NdA0GOcILKd%2BpXayxH27kSNmXO4H3wBUyTDrv8bABjqkAbAZ9wLUS%2FQaLMpiuwrMovJfs6pq56q%2B%2B%2B1NsMVHDprQFRVBPrXNiTjMe7fSJUqxoxQPKOdcAq4Aie7SxjlFVXyO6T21lx8z8V0fyQ0clAWhbKy15UZkvlzSYKN0PRFSyuPDBDNaKTcU0AHW1NIg3D4NduaLX5yMvksRXSDQPYp%2BMUNaVRf43%2Fx9c9NcGzjaw2gYv7F09GXkogLxLzpHrKi6X1yw&X-Amz-Signature=3a894c17a01580afd18de41467a7c651a97132a7437f9d646a4e327aa7bb0d29&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX7XJR7X%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDrdUBz4W8MEpzMvI37KKQlk%2BdGyc4QOrpG54wYN3iFpgIhANJOhK64jRellBFsUSQlLl5dkk0kIZ6t6fv%2BPF3%2FS%2BZ%2FKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfHF56iS8UK7njdxEq3AN8rSTM68Zl0hc6I%2B%2BSa6uLE%2BPMnOmng3ND0Z5nYhRWDC8tmSN%2FbwUcWtga8Dc3SqcEfdkhfPt%2F45DOf8BgZ6Y%2FLyizY4OYOHUibi6FSHs0z1fy5dHa4G9CG7%2BpYJ7ojiowQtHLqi9%2FYyAqLBlmvtjlltAsPWTOW%2F1NLtXezEmghHD4ZZ7aIUo6BSrIs9rY%2BthgvBAQcHwfkyjtF0XMs6kJnK5Yl%2FFCSQ47nneXVGChCAo4mdLGecp6KMlfnuOE%2BiRxzN1xQDy4Pg6FS7DSYBVrJXFik48Rl%2BjY4wLjvdDCirziNGtH6P3%2B1REUVx5EDzPmRuG4%2Fq%2FDxFBT86iXGEplnlP6PXSTbyME9b089GWZrbNtpU%2B5bIozoFZwZgFhHyvIvMtEr7JkB5BADT7nAEEEQ35rK9unbQNkAEV0OZtH8tql9FT88zQE8eECSMBDKdOzkCyAp3qyuEQwTfZ1PFOnI0Pi7ufAqZTqTR5FDznFKMuW5hmjDHHK6WjC0bsRJo9H1SHqXHFa6r22CWN0Hzrd6L%2B%2BE89BGp0Dy8TfrL%2Bn%2FJXKCUmcUWlLQxxzQ0tKJ9TD2v7P3d3cB2bMh2vBHawHk7c9NdA0GOcILKd%2BpXayxH27kSNmXO4H3wBUyTDrv8bABjqkAbAZ9wLUS%2FQaLMpiuwrMovJfs6pq56q%2B%2B%2B1NsMVHDprQFRVBPrXNiTjMe7fSJUqxoxQPKOdcAq4Aie7SxjlFVXyO6T21lx8z8V0fyQ0clAWhbKy15UZkvlzSYKN0PRFSyuPDBDNaKTcU0AHW1NIg3D4NduaLX5yMvksRXSDQPYp%2BMUNaVRf43%2Fx9c9NcGzjaw2gYv7F09GXkogLxLzpHrKi6X1yw&X-Amz-Signature=7a92df83f890a1b8e71f504e35fee6c92dcd332010aa3b26a0faeeb86a87f79b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX7XJR7X%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDrdUBz4W8MEpzMvI37KKQlk%2BdGyc4QOrpG54wYN3iFpgIhANJOhK64jRellBFsUSQlLl5dkk0kIZ6t6fv%2BPF3%2FS%2BZ%2FKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfHF56iS8UK7njdxEq3AN8rSTM68Zl0hc6I%2B%2BSa6uLE%2BPMnOmng3ND0Z5nYhRWDC8tmSN%2FbwUcWtga8Dc3SqcEfdkhfPt%2F45DOf8BgZ6Y%2FLyizY4OYOHUibi6FSHs0z1fy5dHa4G9CG7%2BpYJ7ojiowQtHLqi9%2FYyAqLBlmvtjlltAsPWTOW%2F1NLtXezEmghHD4ZZ7aIUo6BSrIs9rY%2BthgvBAQcHwfkyjtF0XMs6kJnK5Yl%2FFCSQ47nneXVGChCAo4mdLGecp6KMlfnuOE%2BiRxzN1xQDy4Pg6FS7DSYBVrJXFik48Rl%2BjY4wLjvdDCirziNGtH6P3%2B1REUVx5EDzPmRuG4%2Fq%2FDxFBT86iXGEplnlP6PXSTbyME9b089GWZrbNtpU%2B5bIozoFZwZgFhHyvIvMtEr7JkB5BADT7nAEEEQ35rK9unbQNkAEV0OZtH8tql9FT88zQE8eECSMBDKdOzkCyAp3qyuEQwTfZ1PFOnI0Pi7ufAqZTqTR5FDznFKMuW5hmjDHHK6WjC0bsRJo9H1SHqXHFa6r22CWN0Hzrd6L%2B%2BE89BGp0Dy8TfrL%2Bn%2FJXKCUmcUWlLQxxzQ0tKJ9TD2v7P3d3cB2bMh2vBHawHk7c9NdA0GOcILKd%2BpXayxH27kSNmXO4H3wBUyTDrv8bABjqkAbAZ9wLUS%2FQaLMpiuwrMovJfs6pq56q%2B%2B%2B1NsMVHDprQFRVBPrXNiTjMe7fSJUqxoxQPKOdcAq4Aie7SxjlFVXyO6T21lx8z8V0fyQ0clAWhbKy15UZkvlzSYKN0PRFSyuPDBDNaKTcU0AHW1NIg3D4NduaLX5yMvksRXSDQPYp%2BMUNaVRf43%2Fx9c9NcGzjaw2gYv7F09GXkogLxLzpHrKi6X1yw&X-Amz-Signature=eb6f8405e800be87ea37b7db64d0e7e91380acdcccabbd6416ec14510dfecda2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX7XJR7X%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDrdUBz4W8MEpzMvI37KKQlk%2BdGyc4QOrpG54wYN3iFpgIhANJOhK64jRellBFsUSQlLl5dkk0kIZ6t6fv%2BPF3%2FS%2BZ%2FKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfHF56iS8UK7njdxEq3AN8rSTM68Zl0hc6I%2B%2BSa6uLE%2BPMnOmng3ND0Z5nYhRWDC8tmSN%2FbwUcWtga8Dc3SqcEfdkhfPt%2F45DOf8BgZ6Y%2FLyizY4OYOHUibi6FSHs0z1fy5dHa4G9CG7%2BpYJ7ojiowQtHLqi9%2FYyAqLBlmvtjlltAsPWTOW%2F1NLtXezEmghHD4ZZ7aIUo6BSrIs9rY%2BthgvBAQcHwfkyjtF0XMs6kJnK5Yl%2FFCSQ47nneXVGChCAo4mdLGecp6KMlfnuOE%2BiRxzN1xQDy4Pg6FS7DSYBVrJXFik48Rl%2BjY4wLjvdDCirziNGtH6P3%2B1REUVx5EDzPmRuG4%2Fq%2FDxFBT86iXGEplnlP6PXSTbyME9b089GWZrbNtpU%2B5bIozoFZwZgFhHyvIvMtEr7JkB5BADT7nAEEEQ35rK9unbQNkAEV0OZtH8tql9FT88zQE8eECSMBDKdOzkCyAp3qyuEQwTfZ1PFOnI0Pi7ufAqZTqTR5FDznFKMuW5hmjDHHK6WjC0bsRJo9H1SHqXHFa6r22CWN0Hzrd6L%2B%2BE89BGp0Dy8TfrL%2Bn%2FJXKCUmcUWlLQxxzQ0tKJ9TD2v7P3d3cB2bMh2vBHawHk7c9NdA0GOcILKd%2BpXayxH27kSNmXO4H3wBUyTDrv8bABjqkAbAZ9wLUS%2FQaLMpiuwrMovJfs6pq56q%2B%2B%2B1NsMVHDprQFRVBPrXNiTjMe7fSJUqxoxQPKOdcAq4Aie7SxjlFVXyO6T21lx8z8V0fyQ0clAWhbKy15UZkvlzSYKN0PRFSyuPDBDNaKTcU0AHW1NIg3D4NduaLX5yMvksRXSDQPYp%2BMUNaVRf43%2Fx9c9NcGzjaw2gYv7F09GXkogLxLzpHrKi6X1yw&X-Amz-Signature=e0790463de61523ed3db489797e1b493ea6c757bddab8b826fb7fe7469778003&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX7XJR7X%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDrdUBz4W8MEpzMvI37KKQlk%2BdGyc4QOrpG54wYN3iFpgIhANJOhK64jRellBFsUSQlLl5dkk0kIZ6t6fv%2BPF3%2FS%2BZ%2FKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfHF56iS8UK7njdxEq3AN8rSTM68Zl0hc6I%2B%2BSa6uLE%2BPMnOmng3ND0Z5nYhRWDC8tmSN%2FbwUcWtga8Dc3SqcEfdkhfPt%2F45DOf8BgZ6Y%2FLyizY4OYOHUibi6FSHs0z1fy5dHa4G9CG7%2BpYJ7ojiowQtHLqi9%2FYyAqLBlmvtjlltAsPWTOW%2F1NLtXezEmghHD4ZZ7aIUo6BSrIs9rY%2BthgvBAQcHwfkyjtF0XMs6kJnK5Yl%2FFCSQ47nneXVGChCAo4mdLGecp6KMlfnuOE%2BiRxzN1xQDy4Pg6FS7DSYBVrJXFik48Rl%2BjY4wLjvdDCirziNGtH6P3%2B1REUVx5EDzPmRuG4%2Fq%2FDxFBT86iXGEplnlP6PXSTbyME9b089GWZrbNtpU%2B5bIozoFZwZgFhHyvIvMtEr7JkB5BADT7nAEEEQ35rK9unbQNkAEV0OZtH8tql9FT88zQE8eECSMBDKdOzkCyAp3qyuEQwTfZ1PFOnI0Pi7ufAqZTqTR5FDznFKMuW5hmjDHHK6WjC0bsRJo9H1SHqXHFa6r22CWN0Hzrd6L%2B%2BE89BGp0Dy8TfrL%2Bn%2FJXKCUmcUWlLQxxzQ0tKJ9TD2v7P3d3cB2bMh2vBHawHk7c9NdA0GOcILKd%2BpXayxH27kSNmXO4H3wBUyTDrv8bABjqkAbAZ9wLUS%2FQaLMpiuwrMovJfs6pq56q%2B%2B%2B1NsMVHDprQFRVBPrXNiTjMe7fSJUqxoxQPKOdcAq4Aie7SxjlFVXyO6T21lx8z8V0fyQ0clAWhbKy15UZkvlzSYKN0PRFSyuPDBDNaKTcU0AHW1NIg3D4NduaLX5yMvksRXSDQPYp%2BMUNaVRf43%2Fx9c9NcGzjaw2gYv7F09GXkogLxLzpHrKi6X1yw&X-Amz-Signature=6ec987261fa4c6988ec6de53044aea68e38858b3849124efdc0f6ae6720dbd0b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
