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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4NPKOFP%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyhzmMppVLib3ImP4%2FcgOXNH4PI8rIks4bkL2IfR5s%2FQIhAL7tYP42x1Cd5AY6Lcrwqs4KDqGRVewCCQCki7eneoa5Kv8DCHoQABoMNjM3NDIzMTgzODA1IgwN9IAxV4pZtNkiZEkq3ANFybWvkuKIwopWx6mGsx712oUFuvhBg6N%2B2QyA85SctwgBRlizqdWKhKi%2FVu8BXWANSgjeVZ7ZeoIWdU6%2By7hdrYeo7RolH%2ForwhvY448H%2FBJev3xEzXjdbbv6OoUADmyCBPM9OH9%2FbVUsY67GRetsEyuzGrrEq8YcXWCHl6MYe72sE2HjdRCD%2BOnayPqKqsxWiFOm%2BPi7yDi6fVaC62EXbCOtXutxaG4JOzg3bWtOqoLo5ZVYE5kL%2Bv%2BcMEbW3gHJxQInJD8J6pQyfWnm%2FaTU50cegkpb1BtyrshtCRUPTNHscyM3eobW%2Fqoh38dRKTvKD8k78b95WSxkVRVa0JAEHdEd8hgv6lMqexpjVPoEf8mXgZEIMC4ztCwXw%2F9N0AtCtD7hYtLQhGorhJBtEzYE845vFF9qTJJ6s%2Fci8Jk9SK%2Fqu%2BGDgLFtT7872%2BrqEi9Nwdm%2FzN8f2NP9xqezNv3zQzASCRhEntIJKLIcFaD7HgeSwNo4fwVrnI%2FFTbVq7gKfeEPTPqSoqUjo9o1kmDxkE2XPVOhUcDrx3LzS%2F9ChwnpzVcBFFaAAfUne12Ag93EqbVV%2Bfl8coKndnVj1uwKen4fqZrUi%2FgYhxNOv3vG0TEsnlkGwzGpvqIw6RjDM%2BNzBBjqkATZpGf%2FFuRvYaG7B9JGXWvB0Gd%2BDcaxDE%2BrDo8vpM%2BCIhsk94iRqHpnbrnhQeO1BNPBxHiSTJbxqspxgb6xY30%2FHxcgqJD4DD9emJ6WO2%2BPmAopolEh%2FuC3G4VY%2B1zKno47%2BGn7WY%2BL9JBmyzHCu%2BATu%2BLBovD27Ymy6N%2FBns0p8Q97wDMRvXIfkg9ZufjQR8yJWK6dEz8skAiSZCOsG4qQzg3DV&X-Amz-Signature=e2cbf6e10ed2fd00909251a996c195f0b06f4975bb2f824194f338ccda1cf8e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4NPKOFP%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyhzmMppVLib3ImP4%2FcgOXNH4PI8rIks4bkL2IfR5s%2FQIhAL7tYP42x1Cd5AY6Lcrwqs4KDqGRVewCCQCki7eneoa5Kv8DCHoQABoMNjM3NDIzMTgzODA1IgwN9IAxV4pZtNkiZEkq3ANFybWvkuKIwopWx6mGsx712oUFuvhBg6N%2B2QyA85SctwgBRlizqdWKhKi%2FVu8BXWANSgjeVZ7ZeoIWdU6%2By7hdrYeo7RolH%2ForwhvY448H%2FBJev3xEzXjdbbv6OoUADmyCBPM9OH9%2FbVUsY67GRetsEyuzGrrEq8YcXWCHl6MYe72sE2HjdRCD%2BOnayPqKqsxWiFOm%2BPi7yDi6fVaC62EXbCOtXutxaG4JOzg3bWtOqoLo5ZVYE5kL%2Bv%2BcMEbW3gHJxQInJD8J6pQyfWnm%2FaTU50cegkpb1BtyrshtCRUPTNHscyM3eobW%2Fqoh38dRKTvKD8k78b95WSxkVRVa0JAEHdEd8hgv6lMqexpjVPoEf8mXgZEIMC4ztCwXw%2F9N0AtCtD7hYtLQhGorhJBtEzYE845vFF9qTJJ6s%2Fci8Jk9SK%2Fqu%2BGDgLFtT7872%2BrqEi9Nwdm%2FzN8f2NP9xqezNv3zQzASCRhEntIJKLIcFaD7HgeSwNo4fwVrnI%2FFTbVq7gKfeEPTPqSoqUjo9o1kmDxkE2XPVOhUcDrx3LzS%2F9ChwnpzVcBFFaAAfUne12Ag93EqbVV%2Bfl8coKndnVj1uwKen4fqZrUi%2FgYhxNOv3vG0TEsnlkGwzGpvqIw6RjDM%2BNzBBjqkATZpGf%2FFuRvYaG7B9JGXWvB0Gd%2BDcaxDE%2BrDo8vpM%2BCIhsk94iRqHpnbrnhQeO1BNPBxHiSTJbxqspxgb6xY30%2FHxcgqJD4DD9emJ6WO2%2BPmAopolEh%2FuC3G4VY%2B1zKno47%2BGn7WY%2BL9JBmyzHCu%2BATu%2BLBovD27Ymy6N%2FBns0p8Q97wDMRvXIfkg9ZufjQR8yJWK6dEz8skAiSZCOsG4qQzg3DV&X-Amz-Signature=a447e1d0b70564751b60eca6f58f742246d6ee5bb69a7cc08c43495fb6bce2fb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4NPKOFP%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyhzmMppVLib3ImP4%2FcgOXNH4PI8rIks4bkL2IfR5s%2FQIhAL7tYP42x1Cd5AY6Lcrwqs4KDqGRVewCCQCki7eneoa5Kv8DCHoQABoMNjM3NDIzMTgzODA1IgwN9IAxV4pZtNkiZEkq3ANFybWvkuKIwopWx6mGsx712oUFuvhBg6N%2B2QyA85SctwgBRlizqdWKhKi%2FVu8BXWANSgjeVZ7ZeoIWdU6%2By7hdrYeo7RolH%2ForwhvY448H%2FBJev3xEzXjdbbv6OoUADmyCBPM9OH9%2FbVUsY67GRetsEyuzGrrEq8YcXWCHl6MYe72sE2HjdRCD%2BOnayPqKqsxWiFOm%2BPi7yDi6fVaC62EXbCOtXutxaG4JOzg3bWtOqoLo5ZVYE5kL%2Bv%2BcMEbW3gHJxQInJD8J6pQyfWnm%2FaTU50cegkpb1BtyrshtCRUPTNHscyM3eobW%2Fqoh38dRKTvKD8k78b95WSxkVRVa0JAEHdEd8hgv6lMqexpjVPoEf8mXgZEIMC4ztCwXw%2F9N0AtCtD7hYtLQhGorhJBtEzYE845vFF9qTJJ6s%2Fci8Jk9SK%2Fqu%2BGDgLFtT7872%2BrqEi9Nwdm%2FzN8f2NP9xqezNv3zQzASCRhEntIJKLIcFaD7HgeSwNo4fwVrnI%2FFTbVq7gKfeEPTPqSoqUjo9o1kmDxkE2XPVOhUcDrx3LzS%2F9ChwnpzVcBFFaAAfUne12Ag93EqbVV%2Bfl8coKndnVj1uwKen4fqZrUi%2FgYhxNOv3vG0TEsnlkGwzGpvqIw6RjDM%2BNzBBjqkATZpGf%2FFuRvYaG7B9JGXWvB0Gd%2BDcaxDE%2BrDo8vpM%2BCIhsk94iRqHpnbrnhQeO1BNPBxHiSTJbxqspxgb6xY30%2FHxcgqJD4DD9emJ6WO2%2BPmAopolEh%2FuC3G4VY%2B1zKno47%2BGn7WY%2BL9JBmyzHCu%2BATu%2BLBovD27Ymy6N%2FBns0p8Q97wDMRvXIfkg9ZufjQR8yJWK6dEz8skAiSZCOsG4qQzg3DV&X-Amz-Signature=68a7c88fc549cf961f36c7ab8d993fa574e74c93c997eaf78d7ee1013ea48157&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4NPKOFP%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyhzmMppVLib3ImP4%2FcgOXNH4PI8rIks4bkL2IfR5s%2FQIhAL7tYP42x1Cd5AY6Lcrwqs4KDqGRVewCCQCki7eneoa5Kv8DCHoQABoMNjM3NDIzMTgzODA1IgwN9IAxV4pZtNkiZEkq3ANFybWvkuKIwopWx6mGsx712oUFuvhBg6N%2B2QyA85SctwgBRlizqdWKhKi%2FVu8BXWANSgjeVZ7ZeoIWdU6%2By7hdrYeo7RolH%2ForwhvY448H%2FBJev3xEzXjdbbv6OoUADmyCBPM9OH9%2FbVUsY67GRetsEyuzGrrEq8YcXWCHl6MYe72sE2HjdRCD%2BOnayPqKqsxWiFOm%2BPi7yDi6fVaC62EXbCOtXutxaG4JOzg3bWtOqoLo5ZVYE5kL%2Bv%2BcMEbW3gHJxQInJD8J6pQyfWnm%2FaTU50cegkpb1BtyrshtCRUPTNHscyM3eobW%2Fqoh38dRKTvKD8k78b95WSxkVRVa0JAEHdEd8hgv6lMqexpjVPoEf8mXgZEIMC4ztCwXw%2F9N0AtCtD7hYtLQhGorhJBtEzYE845vFF9qTJJ6s%2Fci8Jk9SK%2Fqu%2BGDgLFtT7872%2BrqEi9Nwdm%2FzN8f2NP9xqezNv3zQzASCRhEntIJKLIcFaD7HgeSwNo4fwVrnI%2FFTbVq7gKfeEPTPqSoqUjo9o1kmDxkE2XPVOhUcDrx3LzS%2F9ChwnpzVcBFFaAAfUne12Ag93EqbVV%2Bfl8coKndnVj1uwKen4fqZrUi%2FgYhxNOv3vG0TEsnlkGwzGpvqIw6RjDM%2BNzBBjqkATZpGf%2FFuRvYaG7B9JGXWvB0Gd%2BDcaxDE%2BrDo8vpM%2BCIhsk94iRqHpnbrnhQeO1BNPBxHiSTJbxqspxgb6xY30%2FHxcgqJD4DD9emJ6WO2%2BPmAopolEh%2FuC3G4VY%2B1zKno47%2BGn7WY%2BL9JBmyzHCu%2BATu%2BLBovD27Ymy6N%2FBns0p8Q97wDMRvXIfkg9ZufjQR8yJWK6dEz8skAiSZCOsG4qQzg3DV&X-Amz-Signature=5cdffe8cd6feeedbd1ae2886a8c130324b05c33e541ca1c27549de84ac8b0df0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4NPKOFP%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyhzmMppVLib3ImP4%2FcgOXNH4PI8rIks4bkL2IfR5s%2FQIhAL7tYP42x1Cd5AY6Lcrwqs4KDqGRVewCCQCki7eneoa5Kv8DCHoQABoMNjM3NDIzMTgzODA1IgwN9IAxV4pZtNkiZEkq3ANFybWvkuKIwopWx6mGsx712oUFuvhBg6N%2B2QyA85SctwgBRlizqdWKhKi%2FVu8BXWANSgjeVZ7ZeoIWdU6%2By7hdrYeo7RolH%2ForwhvY448H%2FBJev3xEzXjdbbv6OoUADmyCBPM9OH9%2FbVUsY67GRetsEyuzGrrEq8YcXWCHl6MYe72sE2HjdRCD%2BOnayPqKqsxWiFOm%2BPi7yDi6fVaC62EXbCOtXutxaG4JOzg3bWtOqoLo5ZVYE5kL%2Bv%2BcMEbW3gHJxQInJD8J6pQyfWnm%2FaTU50cegkpb1BtyrshtCRUPTNHscyM3eobW%2Fqoh38dRKTvKD8k78b95WSxkVRVa0JAEHdEd8hgv6lMqexpjVPoEf8mXgZEIMC4ztCwXw%2F9N0AtCtD7hYtLQhGorhJBtEzYE845vFF9qTJJ6s%2Fci8Jk9SK%2Fqu%2BGDgLFtT7872%2BrqEi9Nwdm%2FzN8f2NP9xqezNv3zQzASCRhEntIJKLIcFaD7HgeSwNo4fwVrnI%2FFTbVq7gKfeEPTPqSoqUjo9o1kmDxkE2XPVOhUcDrx3LzS%2F9ChwnpzVcBFFaAAfUne12Ag93EqbVV%2Bfl8coKndnVj1uwKen4fqZrUi%2FgYhxNOv3vG0TEsnlkGwzGpvqIw6RjDM%2BNzBBjqkATZpGf%2FFuRvYaG7B9JGXWvB0Gd%2BDcaxDE%2BrDo8vpM%2BCIhsk94iRqHpnbrnhQeO1BNPBxHiSTJbxqspxgb6xY30%2FHxcgqJD4DD9emJ6WO2%2BPmAopolEh%2FuC3G4VY%2B1zKno47%2BGn7WY%2BL9JBmyzHCu%2BATu%2BLBovD27Ymy6N%2FBns0p8Q97wDMRvXIfkg9ZufjQR8yJWK6dEz8skAiSZCOsG4qQzg3DV&X-Amz-Signature=01117c45a22f418c76613d09ba508ceafa3df3b757eaf1161fa156ce6370eae9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4NPKOFP%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyhzmMppVLib3ImP4%2FcgOXNH4PI8rIks4bkL2IfR5s%2FQIhAL7tYP42x1Cd5AY6Lcrwqs4KDqGRVewCCQCki7eneoa5Kv8DCHoQABoMNjM3NDIzMTgzODA1IgwN9IAxV4pZtNkiZEkq3ANFybWvkuKIwopWx6mGsx712oUFuvhBg6N%2B2QyA85SctwgBRlizqdWKhKi%2FVu8BXWANSgjeVZ7ZeoIWdU6%2By7hdrYeo7RolH%2ForwhvY448H%2FBJev3xEzXjdbbv6OoUADmyCBPM9OH9%2FbVUsY67GRetsEyuzGrrEq8YcXWCHl6MYe72sE2HjdRCD%2BOnayPqKqsxWiFOm%2BPi7yDi6fVaC62EXbCOtXutxaG4JOzg3bWtOqoLo5ZVYE5kL%2Bv%2BcMEbW3gHJxQInJD8J6pQyfWnm%2FaTU50cegkpb1BtyrshtCRUPTNHscyM3eobW%2Fqoh38dRKTvKD8k78b95WSxkVRVa0JAEHdEd8hgv6lMqexpjVPoEf8mXgZEIMC4ztCwXw%2F9N0AtCtD7hYtLQhGorhJBtEzYE845vFF9qTJJ6s%2Fci8Jk9SK%2Fqu%2BGDgLFtT7872%2BrqEi9Nwdm%2FzN8f2NP9xqezNv3zQzASCRhEntIJKLIcFaD7HgeSwNo4fwVrnI%2FFTbVq7gKfeEPTPqSoqUjo9o1kmDxkE2XPVOhUcDrx3LzS%2F9ChwnpzVcBFFaAAfUne12Ag93EqbVV%2Bfl8coKndnVj1uwKen4fqZrUi%2FgYhxNOv3vG0TEsnlkGwzGpvqIw6RjDM%2BNzBBjqkATZpGf%2FFuRvYaG7B9JGXWvB0Gd%2BDcaxDE%2BrDo8vpM%2BCIhsk94iRqHpnbrnhQeO1BNPBxHiSTJbxqspxgb6xY30%2FHxcgqJD4DD9emJ6WO2%2BPmAopolEh%2FuC3G4VY%2B1zKno47%2BGn7WY%2BL9JBmyzHCu%2BATu%2BLBovD27Ymy6N%2FBns0p8Q97wDMRvXIfkg9ZufjQR8yJWK6dEz8skAiSZCOsG4qQzg3DV&X-Amz-Signature=ea1e2501716450794e594bdb788ce3a66f320ada69a4937ddf7f1ec96f297eb1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4NPKOFP%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyhzmMppVLib3ImP4%2FcgOXNH4PI8rIks4bkL2IfR5s%2FQIhAL7tYP42x1Cd5AY6Lcrwqs4KDqGRVewCCQCki7eneoa5Kv8DCHoQABoMNjM3NDIzMTgzODA1IgwN9IAxV4pZtNkiZEkq3ANFybWvkuKIwopWx6mGsx712oUFuvhBg6N%2B2QyA85SctwgBRlizqdWKhKi%2FVu8BXWANSgjeVZ7ZeoIWdU6%2By7hdrYeo7RolH%2ForwhvY448H%2FBJev3xEzXjdbbv6OoUADmyCBPM9OH9%2FbVUsY67GRetsEyuzGrrEq8YcXWCHl6MYe72sE2HjdRCD%2BOnayPqKqsxWiFOm%2BPi7yDi6fVaC62EXbCOtXutxaG4JOzg3bWtOqoLo5ZVYE5kL%2Bv%2BcMEbW3gHJxQInJD8J6pQyfWnm%2FaTU50cegkpb1BtyrshtCRUPTNHscyM3eobW%2Fqoh38dRKTvKD8k78b95WSxkVRVa0JAEHdEd8hgv6lMqexpjVPoEf8mXgZEIMC4ztCwXw%2F9N0AtCtD7hYtLQhGorhJBtEzYE845vFF9qTJJ6s%2Fci8Jk9SK%2Fqu%2BGDgLFtT7872%2BrqEi9Nwdm%2FzN8f2NP9xqezNv3zQzASCRhEntIJKLIcFaD7HgeSwNo4fwVrnI%2FFTbVq7gKfeEPTPqSoqUjo9o1kmDxkE2XPVOhUcDrx3LzS%2F9ChwnpzVcBFFaAAfUne12Ag93EqbVV%2Bfl8coKndnVj1uwKen4fqZrUi%2FgYhxNOv3vG0TEsnlkGwzGpvqIw6RjDM%2BNzBBjqkATZpGf%2FFuRvYaG7B9JGXWvB0Gd%2BDcaxDE%2BrDo8vpM%2BCIhsk94iRqHpnbrnhQeO1BNPBxHiSTJbxqspxgb6xY30%2FHxcgqJD4DD9emJ6WO2%2BPmAopolEh%2FuC3G4VY%2B1zKno47%2BGn7WY%2BL9JBmyzHCu%2BATu%2BLBovD27Ymy6N%2FBns0p8Q97wDMRvXIfkg9ZufjQR8yJWK6dEz8skAiSZCOsG4qQzg3DV&X-Amz-Signature=3d6c381de7f9f60e0f53df99548880242a2b7281621d1903f952742ab10311fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4NPKOFP%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyhzmMppVLib3ImP4%2FcgOXNH4PI8rIks4bkL2IfR5s%2FQIhAL7tYP42x1Cd5AY6Lcrwqs4KDqGRVewCCQCki7eneoa5Kv8DCHoQABoMNjM3NDIzMTgzODA1IgwN9IAxV4pZtNkiZEkq3ANFybWvkuKIwopWx6mGsx712oUFuvhBg6N%2B2QyA85SctwgBRlizqdWKhKi%2FVu8BXWANSgjeVZ7ZeoIWdU6%2By7hdrYeo7RolH%2ForwhvY448H%2FBJev3xEzXjdbbv6OoUADmyCBPM9OH9%2FbVUsY67GRetsEyuzGrrEq8YcXWCHl6MYe72sE2HjdRCD%2BOnayPqKqsxWiFOm%2BPi7yDi6fVaC62EXbCOtXutxaG4JOzg3bWtOqoLo5ZVYE5kL%2Bv%2BcMEbW3gHJxQInJD8J6pQyfWnm%2FaTU50cegkpb1BtyrshtCRUPTNHscyM3eobW%2Fqoh38dRKTvKD8k78b95WSxkVRVa0JAEHdEd8hgv6lMqexpjVPoEf8mXgZEIMC4ztCwXw%2F9N0AtCtD7hYtLQhGorhJBtEzYE845vFF9qTJJ6s%2Fci8Jk9SK%2Fqu%2BGDgLFtT7872%2BrqEi9Nwdm%2FzN8f2NP9xqezNv3zQzASCRhEntIJKLIcFaD7HgeSwNo4fwVrnI%2FFTbVq7gKfeEPTPqSoqUjo9o1kmDxkE2XPVOhUcDrx3LzS%2F9ChwnpzVcBFFaAAfUne12Ag93EqbVV%2Bfl8coKndnVj1uwKen4fqZrUi%2FgYhxNOv3vG0TEsnlkGwzGpvqIw6RjDM%2BNzBBjqkATZpGf%2FFuRvYaG7B9JGXWvB0Gd%2BDcaxDE%2BrDo8vpM%2BCIhsk94iRqHpnbrnhQeO1BNPBxHiSTJbxqspxgb6xY30%2FHxcgqJD4DD9emJ6WO2%2BPmAopolEh%2FuC3G4VY%2B1zKno47%2BGn7WY%2BL9JBmyzHCu%2BATu%2BLBovD27Ymy6N%2FBns0p8Q97wDMRvXIfkg9ZufjQR8yJWK6dEz8skAiSZCOsG4qQzg3DV&X-Amz-Signature=02bde1709866e5a535a4f4ca6497e3cf58ffac191c150845a6c4ebfa76c5e674&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
