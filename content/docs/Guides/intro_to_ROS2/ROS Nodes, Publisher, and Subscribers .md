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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UHN24YN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZjPIYYghqei8my%2BXX47Jzhgmj5jyTxsEIa%2BZACghNXAiEAjT4p8iV1biBfCvcNfPpAFXHEVYZoa3apiMDLhdAKtAIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDGfH7NBxIyj9AMICVCrcA0vSgFYhnAin6BKgUV9AxpY5PpEgvcR%2FeTfeET6jm1smOPZ%2FPVaKwCLzI4vrcJbgX1ZA7wBpuuaScypGk8qATC7ArmSw2ME1CqbqeNiBf4pn0axWH8IUU75MjQbV3sLUwVtzxwv8g1aElWtWD06m2JgoBbO25PQyrREHOUWwEqBbkn04Qj%2F1DA69YpD0uaUNo%2FtFlXRGrLAk8dlc3QuIX5tHel7XWh%2Boh2JMN5UWRNfnNx8aHKcbbioXhZRpBxBETWTAXDxWExF8q5MhCf5gBzfzmrJ1innB%2BJKcz3KaSs01VHx2%2Fe3%2F0zoIfukCw%2B%2BuZiB05R8tFosbDd53fxbJI32NodObFCRbymTRr6%2FBhd5eMTyZ1Hfwu0jWuvhkNDOV3LlUzKuLRIJj2ZQxZ4NfxyrU%2B2rW8IzNBn8k5u1y%2FhTxR2C0uqlvnztXQ5JjYw2n8zEY3sD33P60DBC473WDvBNvCQZsfVbnErpFlE1OJ6EuImCyQ74yRheOFXVPCZIH6G4LxTU7FrMrvUqVM0IvML9GK%2BXxbGuTBsRqneu%2FRHoY9iwuHIy%2BQoBRorYNsKT4hbSASeGCAtroMe9c723tYHNf0XDVpJ%2F2XgOSfhXM%2BdVu9AaqGa%2FZkpbSzYA1MMfms8AGOqUBGWd4UINO%2BYe2tI2KxrpiZix%2FU7k%2B3Pt9ijyNCBR4SST0Ti5ksTu%2FS0H0RjXRH2Mo8V%2F7fGlV3wq8DevVC%2FXIObtL2suE4jKITo8hSjcf2MQmRvF0XVU0gWtGlvrTjqXE1RFA2xg16JSZGbziosGQ5fKusyaNn%2Fsn8W8betQcBIMkjCtl3awBE%2BNwlyveCaowTqT4XIjo5M4Yrv0eb2XwNAIfU3tD&X-Amz-Signature=072092c63c1bc6cd8a9261d915efcc1ef4e579b5251a758e395e3fbe6003e159&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UHN24YN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZjPIYYghqei8my%2BXX47Jzhgmj5jyTxsEIa%2BZACghNXAiEAjT4p8iV1biBfCvcNfPpAFXHEVYZoa3apiMDLhdAKtAIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDGfH7NBxIyj9AMICVCrcA0vSgFYhnAin6BKgUV9AxpY5PpEgvcR%2FeTfeET6jm1smOPZ%2FPVaKwCLzI4vrcJbgX1ZA7wBpuuaScypGk8qATC7ArmSw2ME1CqbqeNiBf4pn0axWH8IUU75MjQbV3sLUwVtzxwv8g1aElWtWD06m2JgoBbO25PQyrREHOUWwEqBbkn04Qj%2F1DA69YpD0uaUNo%2FtFlXRGrLAk8dlc3QuIX5tHel7XWh%2Boh2JMN5UWRNfnNx8aHKcbbioXhZRpBxBETWTAXDxWExF8q5MhCf5gBzfzmrJ1innB%2BJKcz3KaSs01VHx2%2Fe3%2F0zoIfukCw%2B%2BuZiB05R8tFosbDd53fxbJI32NodObFCRbymTRr6%2FBhd5eMTyZ1Hfwu0jWuvhkNDOV3LlUzKuLRIJj2ZQxZ4NfxyrU%2B2rW8IzNBn8k5u1y%2FhTxR2C0uqlvnztXQ5JjYw2n8zEY3sD33P60DBC473WDvBNvCQZsfVbnErpFlE1OJ6EuImCyQ74yRheOFXVPCZIH6G4LxTU7FrMrvUqVM0IvML9GK%2BXxbGuTBsRqneu%2FRHoY9iwuHIy%2BQoBRorYNsKT4hbSASeGCAtroMe9c723tYHNf0XDVpJ%2F2XgOSfhXM%2BdVu9AaqGa%2FZkpbSzYA1MMfms8AGOqUBGWd4UINO%2BYe2tI2KxrpiZix%2FU7k%2B3Pt9ijyNCBR4SST0Ti5ksTu%2FS0H0RjXRH2Mo8V%2F7fGlV3wq8DevVC%2FXIObtL2suE4jKITo8hSjcf2MQmRvF0XVU0gWtGlvrTjqXE1RFA2xg16JSZGbziosGQ5fKusyaNn%2Fsn8W8betQcBIMkjCtl3awBE%2BNwlyveCaowTqT4XIjo5M4Yrv0eb2XwNAIfU3tD&X-Amz-Signature=443795a14caf9fd1816911dca17966d83786cec46f3d332c202149f30c41ddd3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UHN24YN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZjPIYYghqei8my%2BXX47Jzhgmj5jyTxsEIa%2BZACghNXAiEAjT4p8iV1biBfCvcNfPpAFXHEVYZoa3apiMDLhdAKtAIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDGfH7NBxIyj9AMICVCrcA0vSgFYhnAin6BKgUV9AxpY5PpEgvcR%2FeTfeET6jm1smOPZ%2FPVaKwCLzI4vrcJbgX1ZA7wBpuuaScypGk8qATC7ArmSw2ME1CqbqeNiBf4pn0axWH8IUU75MjQbV3sLUwVtzxwv8g1aElWtWD06m2JgoBbO25PQyrREHOUWwEqBbkn04Qj%2F1DA69YpD0uaUNo%2FtFlXRGrLAk8dlc3QuIX5tHel7XWh%2Boh2JMN5UWRNfnNx8aHKcbbioXhZRpBxBETWTAXDxWExF8q5MhCf5gBzfzmrJ1innB%2BJKcz3KaSs01VHx2%2Fe3%2F0zoIfukCw%2B%2BuZiB05R8tFosbDd53fxbJI32NodObFCRbymTRr6%2FBhd5eMTyZ1Hfwu0jWuvhkNDOV3LlUzKuLRIJj2ZQxZ4NfxyrU%2B2rW8IzNBn8k5u1y%2FhTxR2C0uqlvnztXQ5JjYw2n8zEY3sD33P60DBC473WDvBNvCQZsfVbnErpFlE1OJ6EuImCyQ74yRheOFXVPCZIH6G4LxTU7FrMrvUqVM0IvML9GK%2BXxbGuTBsRqneu%2FRHoY9iwuHIy%2BQoBRorYNsKT4hbSASeGCAtroMe9c723tYHNf0XDVpJ%2F2XgOSfhXM%2BdVu9AaqGa%2FZkpbSzYA1MMfms8AGOqUBGWd4UINO%2BYe2tI2KxrpiZix%2FU7k%2B3Pt9ijyNCBR4SST0Ti5ksTu%2FS0H0RjXRH2Mo8V%2F7fGlV3wq8DevVC%2FXIObtL2suE4jKITo8hSjcf2MQmRvF0XVU0gWtGlvrTjqXE1RFA2xg16JSZGbziosGQ5fKusyaNn%2Fsn8W8betQcBIMkjCtl3awBE%2BNwlyveCaowTqT4XIjo5M4Yrv0eb2XwNAIfU3tD&X-Amz-Signature=aff631b4594677c5775aa043d90b8ac1ff7f2b38b9b62b57da6aba2f929cd549&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UHN24YN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZjPIYYghqei8my%2BXX47Jzhgmj5jyTxsEIa%2BZACghNXAiEAjT4p8iV1biBfCvcNfPpAFXHEVYZoa3apiMDLhdAKtAIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDGfH7NBxIyj9AMICVCrcA0vSgFYhnAin6BKgUV9AxpY5PpEgvcR%2FeTfeET6jm1smOPZ%2FPVaKwCLzI4vrcJbgX1ZA7wBpuuaScypGk8qATC7ArmSw2ME1CqbqeNiBf4pn0axWH8IUU75MjQbV3sLUwVtzxwv8g1aElWtWD06m2JgoBbO25PQyrREHOUWwEqBbkn04Qj%2F1DA69YpD0uaUNo%2FtFlXRGrLAk8dlc3QuIX5tHel7XWh%2Boh2JMN5UWRNfnNx8aHKcbbioXhZRpBxBETWTAXDxWExF8q5MhCf5gBzfzmrJ1innB%2BJKcz3KaSs01VHx2%2Fe3%2F0zoIfukCw%2B%2BuZiB05R8tFosbDd53fxbJI32NodObFCRbymTRr6%2FBhd5eMTyZ1Hfwu0jWuvhkNDOV3LlUzKuLRIJj2ZQxZ4NfxyrU%2B2rW8IzNBn8k5u1y%2FhTxR2C0uqlvnztXQ5JjYw2n8zEY3sD33P60DBC473WDvBNvCQZsfVbnErpFlE1OJ6EuImCyQ74yRheOFXVPCZIH6G4LxTU7FrMrvUqVM0IvML9GK%2BXxbGuTBsRqneu%2FRHoY9iwuHIy%2BQoBRorYNsKT4hbSASeGCAtroMe9c723tYHNf0XDVpJ%2F2XgOSfhXM%2BdVu9AaqGa%2FZkpbSzYA1MMfms8AGOqUBGWd4UINO%2BYe2tI2KxrpiZix%2FU7k%2B3Pt9ijyNCBR4SST0Ti5ksTu%2FS0H0RjXRH2Mo8V%2F7fGlV3wq8DevVC%2FXIObtL2suE4jKITo8hSjcf2MQmRvF0XVU0gWtGlvrTjqXE1RFA2xg16JSZGbziosGQ5fKusyaNn%2Fsn8W8betQcBIMkjCtl3awBE%2BNwlyveCaowTqT4XIjo5M4Yrv0eb2XwNAIfU3tD&X-Amz-Signature=36da27a54806a167b4c6a6d3460c24ead6d382f5d928989f6fa4cd2f92a15cd6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UHN24YN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZjPIYYghqei8my%2BXX47Jzhgmj5jyTxsEIa%2BZACghNXAiEAjT4p8iV1biBfCvcNfPpAFXHEVYZoa3apiMDLhdAKtAIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDGfH7NBxIyj9AMICVCrcA0vSgFYhnAin6BKgUV9AxpY5PpEgvcR%2FeTfeET6jm1smOPZ%2FPVaKwCLzI4vrcJbgX1ZA7wBpuuaScypGk8qATC7ArmSw2ME1CqbqeNiBf4pn0axWH8IUU75MjQbV3sLUwVtzxwv8g1aElWtWD06m2JgoBbO25PQyrREHOUWwEqBbkn04Qj%2F1DA69YpD0uaUNo%2FtFlXRGrLAk8dlc3QuIX5tHel7XWh%2Boh2JMN5UWRNfnNx8aHKcbbioXhZRpBxBETWTAXDxWExF8q5MhCf5gBzfzmrJ1innB%2BJKcz3KaSs01VHx2%2Fe3%2F0zoIfukCw%2B%2BuZiB05R8tFosbDd53fxbJI32NodObFCRbymTRr6%2FBhd5eMTyZ1Hfwu0jWuvhkNDOV3LlUzKuLRIJj2ZQxZ4NfxyrU%2B2rW8IzNBn8k5u1y%2FhTxR2C0uqlvnztXQ5JjYw2n8zEY3sD33P60DBC473WDvBNvCQZsfVbnErpFlE1OJ6EuImCyQ74yRheOFXVPCZIH6G4LxTU7FrMrvUqVM0IvML9GK%2BXxbGuTBsRqneu%2FRHoY9iwuHIy%2BQoBRorYNsKT4hbSASeGCAtroMe9c723tYHNf0XDVpJ%2F2XgOSfhXM%2BdVu9AaqGa%2FZkpbSzYA1MMfms8AGOqUBGWd4UINO%2BYe2tI2KxrpiZix%2FU7k%2B3Pt9ijyNCBR4SST0Ti5ksTu%2FS0H0RjXRH2Mo8V%2F7fGlV3wq8DevVC%2FXIObtL2suE4jKITo8hSjcf2MQmRvF0XVU0gWtGlvrTjqXE1RFA2xg16JSZGbziosGQ5fKusyaNn%2Fsn8W8betQcBIMkjCtl3awBE%2BNwlyveCaowTqT4XIjo5M4Yrv0eb2XwNAIfU3tD&X-Amz-Signature=c37f83283848db0c344977c11fe642abaa733214c3e614d27037c68c9c4c2b4e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UHN24YN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZjPIYYghqei8my%2BXX47Jzhgmj5jyTxsEIa%2BZACghNXAiEAjT4p8iV1biBfCvcNfPpAFXHEVYZoa3apiMDLhdAKtAIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDGfH7NBxIyj9AMICVCrcA0vSgFYhnAin6BKgUV9AxpY5PpEgvcR%2FeTfeET6jm1smOPZ%2FPVaKwCLzI4vrcJbgX1ZA7wBpuuaScypGk8qATC7ArmSw2ME1CqbqeNiBf4pn0axWH8IUU75MjQbV3sLUwVtzxwv8g1aElWtWD06m2JgoBbO25PQyrREHOUWwEqBbkn04Qj%2F1DA69YpD0uaUNo%2FtFlXRGrLAk8dlc3QuIX5tHel7XWh%2Boh2JMN5UWRNfnNx8aHKcbbioXhZRpBxBETWTAXDxWExF8q5MhCf5gBzfzmrJ1innB%2BJKcz3KaSs01VHx2%2Fe3%2F0zoIfukCw%2B%2BuZiB05R8tFosbDd53fxbJI32NodObFCRbymTRr6%2FBhd5eMTyZ1Hfwu0jWuvhkNDOV3LlUzKuLRIJj2ZQxZ4NfxyrU%2B2rW8IzNBn8k5u1y%2FhTxR2C0uqlvnztXQ5JjYw2n8zEY3sD33P60DBC473WDvBNvCQZsfVbnErpFlE1OJ6EuImCyQ74yRheOFXVPCZIH6G4LxTU7FrMrvUqVM0IvML9GK%2BXxbGuTBsRqneu%2FRHoY9iwuHIy%2BQoBRorYNsKT4hbSASeGCAtroMe9c723tYHNf0XDVpJ%2F2XgOSfhXM%2BdVu9AaqGa%2FZkpbSzYA1MMfms8AGOqUBGWd4UINO%2BYe2tI2KxrpiZix%2FU7k%2B3Pt9ijyNCBR4SST0Ti5ksTu%2FS0H0RjXRH2Mo8V%2F7fGlV3wq8DevVC%2FXIObtL2suE4jKITo8hSjcf2MQmRvF0XVU0gWtGlvrTjqXE1RFA2xg16JSZGbziosGQ5fKusyaNn%2Fsn8W8betQcBIMkjCtl3awBE%2BNwlyveCaowTqT4XIjo5M4Yrv0eb2XwNAIfU3tD&X-Amz-Signature=aab36c6f73fd58f5efc70610bbed90945e52436f59da6c23bd7fa3964450f457&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UHN24YN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZjPIYYghqei8my%2BXX47Jzhgmj5jyTxsEIa%2BZACghNXAiEAjT4p8iV1biBfCvcNfPpAFXHEVYZoa3apiMDLhdAKtAIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDGfH7NBxIyj9AMICVCrcA0vSgFYhnAin6BKgUV9AxpY5PpEgvcR%2FeTfeET6jm1smOPZ%2FPVaKwCLzI4vrcJbgX1ZA7wBpuuaScypGk8qATC7ArmSw2ME1CqbqeNiBf4pn0axWH8IUU75MjQbV3sLUwVtzxwv8g1aElWtWD06m2JgoBbO25PQyrREHOUWwEqBbkn04Qj%2F1DA69YpD0uaUNo%2FtFlXRGrLAk8dlc3QuIX5tHel7XWh%2Boh2JMN5UWRNfnNx8aHKcbbioXhZRpBxBETWTAXDxWExF8q5MhCf5gBzfzmrJ1innB%2BJKcz3KaSs01VHx2%2Fe3%2F0zoIfukCw%2B%2BuZiB05R8tFosbDd53fxbJI32NodObFCRbymTRr6%2FBhd5eMTyZ1Hfwu0jWuvhkNDOV3LlUzKuLRIJj2ZQxZ4NfxyrU%2B2rW8IzNBn8k5u1y%2FhTxR2C0uqlvnztXQ5JjYw2n8zEY3sD33P60DBC473WDvBNvCQZsfVbnErpFlE1OJ6EuImCyQ74yRheOFXVPCZIH6G4LxTU7FrMrvUqVM0IvML9GK%2BXxbGuTBsRqneu%2FRHoY9iwuHIy%2BQoBRorYNsKT4hbSASeGCAtroMe9c723tYHNf0XDVpJ%2F2XgOSfhXM%2BdVu9AaqGa%2FZkpbSzYA1MMfms8AGOqUBGWd4UINO%2BYe2tI2KxrpiZix%2FU7k%2B3Pt9ijyNCBR4SST0Ti5ksTu%2FS0H0RjXRH2Mo8V%2F7fGlV3wq8DevVC%2FXIObtL2suE4jKITo8hSjcf2MQmRvF0XVU0gWtGlvrTjqXE1RFA2xg16JSZGbziosGQ5fKusyaNn%2Fsn8W8betQcBIMkjCtl3awBE%2BNwlyveCaowTqT4XIjo5M4Yrv0eb2XwNAIfU3tD&X-Amz-Signature=f5f2e8ad020618203e080ddaa0488bd6ddd66eb9b34adf2a2716e56e1fc12f77&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UHN24YN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZjPIYYghqei8my%2BXX47Jzhgmj5jyTxsEIa%2BZACghNXAiEAjT4p8iV1biBfCvcNfPpAFXHEVYZoa3apiMDLhdAKtAIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDGfH7NBxIyj9AMICVCrcA0vSgFYhnAin6BKgUV9AxpY5PpEgvcR%2FeTfeET6jm1smOPZ%2FPVaKwCLzI4vrcJbgX1ZA7wBpuuaScypGk8qATC7ArmSw2ME1CqbqeNiBf4pn0axWH8IUU75MjQbV3sLUwVtzxwv8g1aElWtWD06m2JgoBbO25PQyrREHOUWwEqBbkn04Qj%2F1DA69YpD0uaUNo%2FtFlXRGrLAk8dlc3QuIX5tHel7XWh%2Boh2JMN5UWRNfnNx8aHKcbbioXhZRpBxBETWTAXDxWExF8q5MhCf5gBzfzmrJ1innB%2BJKcz3KaSs01VHx2%2Fe3%2F0zoIfukCw%2B%2BuZiB05R8tFosbDd53fxbJI32NodObFCRbymTRr6%2FBhd5eMTyZ1Hfwu0jWuvhkNDOV3LlUzKuLRIJj2ZQxZ4NfxyrU%2B2rW8IzNBn8k5u1y%2FhTxR2C0uqlvnztXQ5JjYw2n8zEY3sD33P60DBC473WDvBNvCQZsfVbnErpFlE1OJ6EuImCyQ74yRheOFXVPCZIH6G4LxTU7FrMrvUqVM0IvML9GK%2BXxbGuTBsRqneu%2FRHoY9iwuHIy%2BQoBRorYNsKT4hbSASeGCAtroMe9c723tYHNf0XDVpJ%2F2XgOSfhXM%2BdVu9AaqGa%2FZkpbSzYA1MMfms8AGOqUBGWd4UINO%2BYe2tI2KxrpiZix%2FU7k%2B3Pt9ijyNCBR4SST0Ti5ksTu%2FS0H0RjXRH2Mo8V%2F7fGlV3wq8DevVC%2FXIObtL2suE4jKITo8hSjcf2MQmRvF0XVU0gWtGlvrTjqXE1RFA2xg16JSZGbziosGQ5fKusyaNn%2Fsn8W8betQcBIMkjCtl3awBE%2BNwlyveCaowTqT4XIjo5M4Yrv0eb2XwNAIfU3tD&X-Amz-Signature=1b5d4e0df62f6fa48cc31b77bac898db0517a435deba444f690763d12b82fc1d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
