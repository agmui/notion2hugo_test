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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SOSY5E2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCybt1gtRTkffKj7NQmlo3n9V8FSv4HHrzlSpzRp7QRVQIhANo511nXuFKP%2BgTGdpytUJv9nl0rMfc5RujwrNYSITMwKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwYKZH4ITzxOW6WUgq3AP%2FvaXUT6stJzz73OJmPK%2BySs3Kt4%2BHpo%2BVjoDzTsXHGTggStMuYWUpRMX9MBy8CAWAr7bAxS%2BFsIFZNnW71vmizbWRAshWRTDip9HmPMZERm%2BvJ0XXHnfe36IDdgabMyEAnE%2BbcfSRZvuYsrnrD2qQyUs1KFvwJ8jAjNRQAL3zlmSN0GLcK3U9wU9E0YBLv9IjeUXu10rlGR9HYb6mzAskQKNmN1oNepGiyYrcHH48BflC2muXG3xjnDZ4Q8ZqvpwDoLqcSYkqfenoIa7A9drYwsSx8SeW4HZ0Ugaub6%2BW3Ko3n9A5sL9gyg2eWiEZek06psQaAp4KZLmIfXv%2BL1dOJyoWMapDXD2JwEbLNdJwwbOuHnl2t7BHHsnR88JOGAr2wcrX4OLUznB1%2B74KXNkJOfhAlNQnDUUYSTW7PeLXIv3vym4TVmrTxhad2WPw4CKLlj0dmuwvptL9xn6tShNSMDEAxuH8xlIhCndloXrrkn5YmqltQISjKkWXgSrYsZxzho%2F8IvMB%2FcLjaCLnGSdCJ8m0IWjQ%2BCXDV%2BpdoRaSCVci49kKcvYpYcmhcmLoRQlBWcQ9y1E6k9UXQOvL9TvfaEew%2BOBhOP%2BwdQWMoo330T7hmwtg1v%2Bn3pk1AzC48drABjqkARdFn5sVAcFYom99M3kdXcHfqKKB9PZuMBSbNRtsTJV3yiMjY23iIrqqsQI10NGvRpMacYX99c5xjdVzmnfrZ7JydzXNYt3aqUG92eKUfvEHQFQ4COQimJ9jARt0vy4GWBU1p0aNPm6Di97eRo0fjlncOW8vFvd2sq50WYd7rCTowikma4KzSRa5MSbb1QfbK05si3S%2FUj2QFxt8pK%2FZ7rhZ2uIQ&X-Amz-Signature=35d6b8cdc11439f382ae2220f0a9dac55fead46cd7fc52855090172b26dbb4ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SOSY5E2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCybt1gtRTkffKj7NQmlo3n9V8FSv4HHrzlSpzRp7QRVQIhANo511nXuFKP%2BgTGdpytUJv9nl0rMfc5RujwrNYSITMwKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwYKZH4ITzxOW6WUgq3AP%2FvaXUT6stJzz73OJmPK%2BySs3Kt4%2BHpo%2BVjoDzTsXHGTggStMuYWUpRMX9MBy8CAWAr7bAxS%2BFsIFZNnW71vmizbWRAshWRTDip9HmPMZERm%2BvJ0XXHnfe36IDdgabMyEAnE%2BbcfSRZvuYsrnrD2qQyUs1KFvwJ8jAjNRQAL3zlmSN0GLcK3U9wU9E0YBLv9IjeUXu10rlGR9HYb6mzAskQKNmN1oNepGiyYrcHH48BflC2muXG3xjnDZ4Q8ZqvpwDoLqcSYkqfenoIa7A9drYwsSx8SeW4HZ0Ugaub6%2BW3Ko3n9A5sL9gyg2eWiEZek06psQaAp4KZLmIfXv%2BL1dOJyoWMapDXD2JwEbLNdJwwbOuHnl2t7BHHsnR88JOGAr2wcrX4OLUznB1%2B74KXNkJOfhAlNQnDUUYSTW7PeLXIv3vym4TVmrTxhad2WPw4CKLlj0dmuwvptL9xn6tShNSMDEAxuH8xlIhCndloXrrkn5YmqltQISjKkWXgSrYsZxzho%2F8IvMB%2FcLjaCLnGSdCJ8m0IWjQ%2BCXDV%2BpdoRaSCVci49kKcvYpYcmhcmLoRQlBWcQ9y1E6k9UXQOvL9TvfaEew%2BOBhOP%2BwdQWMoo330T7hmwtg1v%2Bn3pk1AzC48drABjqkARdFn5sVAcFYom99M3kdXcHfqKKB9PZuMBSbNRtsTJV3yiMjY23iIrqqsQI10NGvRpMacYX99c5xjdVzmnfrZ7JydzXNYt3aqUG92eKUfvEHQFQ4COQimJ9jARt0vy4GWBU1p0aNPm6Di97eRo0fjlncOW8vFvd2sq50WYd7rCTowikma4KzSRa5MSbb1QfbK05si3S%2FUj2QFxt8pK%2FZ7rhZ2uIQ&X-Amz-Signature=fbdff5cccf19fcf5daafca23e47d274a2860cef5a6605648eaa13f99e54181fd&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SOSY5E2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCybt1gtRTkffKj7NQmlo3n9V8FSv4HHrzlSpzRp7QRVQIhANo511nXuFKP%2BgTGdpytUJv9nl0rMfc5RujwrNYSITMwKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwYKZH4ITzxOW6WUgq3AP%2FvaXUT6stJzz73OJmPK%2BySs3Kt4%2BHpo%2BVjoDzTsXHGTggStMuYWUpRMX9MBy8CAWAr7bAxS%2BFsIFZNnW71vmizbWRAshWRTDip9HmPMZERm%2BvJ0XXHnfe36IDdgabMyEAnE%2BbcfSRZvuYsrnrD2qQyUs1KFvwJ8jAjNRQAL3zlmSN0GLcK3U9wU9E0YBLv9IjeUXu10rlGR9HYb6mzAskQKNmN1oNepGiyYrcHH48BflC2muXG3xjnDZ4Q8ZqvpwDoLqcSYkqfenoIa7A9drYwsSx8SeW4HZ0Ugaub6%2BW3Ko3n9A5sL9gyg2eWiEZek06psQaAp4KZLmIfXv%2BL1dOJyoWMapDXD2JwEbLNdJwwbOuHnl2t7BHHsnR88JOGAr2wcrX4OLUznB1%2B74KXNkJOfhAlNQnDUUYSTW7PeLXIv3vym4TVmrTxhad2WPw4CKLlj0dmuwvptL9xn6tShNSMDEAxuH8xlIhCndloXrrkn5YmqltQISjKkWXgSrYsZxzho%2F8IvMB%2FcLjaCLnGSdCJ8m0IWjQ%2BCXDV%2BpdoRaSCVci49kKcvYpYcmhcmLoRQlBWcQ9y1E6k9UXQOvL9TvfaEew%2BOBhOP%2BwdQWMoo330T7hmwtg1v%2Bn3pk1AzC48drABjqkARdFn5sVAcFYom99M3kdXcHfqKKB9PZuMBSbNRtsTJV3yiMjY23iIrqqsQI10NGvRpMacYX99c5xjdVzmnfrZ7JydzXNYt3aqUG92eKUfvEHQFQ4COQimJ9jARt0vy4GWBU1p0aNPm6Di97eRo0fjlncOW8vFvd2sq50WYd7rCTowikma4KzSRa5MSbb1QfbK05si3S%2FUj2QFxt8pK%2FZ7rhZ2uIQ&X-Amz-Signature=db9c107c55b30d00d96a7c1c7dd53b24a72c2b742269cf27ee3e973c56214328&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SOSY5E2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCybt1gtRTkffKj7NQmlo3n9V8FSv4HHrzlSpzRp7QRVQIhANo511nXuFKP%2BgTGdpytUJv9nl0rMfc5RujwrNYSITMwKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwYKZH4ITzxOW6WUgq3AP%2FvaXUT6stJzz73OJmPK%2BySs3Kt4%2BHpo%2BVjoDzTsXHGTggStMuYWUpRMX9MBy8CAWAr7bAxS%2BFsIFZNnW71vmizbWRAshWRTDip9HmPMZERm%2BvJ0XXHnfe36IDdgabMyEAnE%2BbcfSRZvuYsrnrD2qQyUs1KFvwJ8jAjNRQAL3zlmSN0GLcK3U9wU9E0YBLv9IjeUXu10rlGR9HYb6mzAskQKNmN1oNepGiyYrcHH48BflC2muXG3xjnDZ4Q8ZqvpwDoLqcSYkqfenoIa7A9drYwsSx8SeW4HZ0Ugaub6%2BW3Ko3n9A5sL9gyg2eWiEZek06psQaAp4KZLmIfXv%2BL1dOJyoWMapDXD2JwEbLNdJwwbOuHnl2t7BHHsnR88JOGAr2wcrX4OLUznB1%2B74KXNkJOfhAlNQnDUUYSTW7PeLXIv3vym4TVmrTxhad2WPw4CKLlj0dmuwvptL9xn6tShNSMDEAxuH8xlIhCndloXrrkn5YmqltQISjKkWXgSrYsZxzho%2F8IvMB%2FcLjaCLnGSdCJ8m0IWjQ%2BCXDV%2BpdoRaSCVci49kKcvYpYcmhcmLoRQlBWcQ9y1E6k9UXQOvL9TvfaEew%2BOBhOP%2BwdQWMoo330T7hmwtg1v%2Bn3pk1AzC48drABjqkARdFn5sVAcFYom99M3kdXcHfqKKB9PZuMBSbNRtsTJV3yiMjY23iIrqqsQI10NGvRpMacYX99c5xjdVzmnfrZ7JydzXNYt3aqUG92eKUfvEHQFQ4COQimJ9jARt0vy4GWBU1p0aNPm6Di97eRo0fjlncOW8vFvd2sq50WYd7rCTowikma4KzSRa5MSbb1QfbK05si3S%2FUj2QFxt8pK%2FZ7rhZ2uIQ&X-Amz-Signature=0099b546e455443f3379f52bc60a3c926ab6f13cc3752e2f5b175f9ba69470b7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SOSY5E2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCybt1gtRTkffKj7NQmlo3n9V8FSv4HHrzlSpzRp7QRVQIhANo511nXuFKP%2BgTGdpytUJv9nl0rMfc5RujwrNYSITMwKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwYKZH4ITzxOW6WUgq3AP%2FvaXUT6stJzz73OJmPK%2BySs3Kt4%2BHpo%2BVjoDzTsXHGTggStMuYWUpRMX9MBy8CAWAr7bAxS%2BFsIFZNnW71vmizbWRAshWRTDip9HmPMZERm%2BvJ0XXHnfe36IDdgabMyEAnE%2BbcfSRZvuYsrnrD2qQyUs1KFvwJ8jAjNRQAL3zlmSN0GLcK3U9wU9E0YBLv9IjeUXu10rlGR9HYb6mzAskQKNmN1oNepGiyYrcHH48BflC2muXG3xjnDZ4Q8ZqvpwDoLqcSYkqfenoIa7A9drYwsSx8SeW4HZ0Ugaub6%2BW3Ko3n9A5sL9gyg2eWiEZek06psQaAp4KZLmIfXv%2BL1dOJyoWMapDXD2JwEbLNdJwwbOuHnl2t7BHHsnR88JOGAr2wcrX4OLUznB1%2B74KXNkJOfhAlNQnDUUYSTW7PeLXIv3vym4TVmrTxhad2WPw4CKLlj0dmuwvptL9xn6tShNSMDEAxuH8xlIhCndloXrrkn5YmqltQISjKkWXgSrYsZxzho%2F8IvMB%2FcLjaCLnGSdCJ8m0IWjQ%2BCXDV%2BpdoRaSCVci49kKcvYpYcmhcmLoRQlBWcQ9y1E6k9UXQOvL9TvfaEew%2BOBhOP%2BwdQWMoo330T7hmwtg1v%2Bn3pk1AzC48drABjqkARdFn5sVAcFYom99M3kdXcHfqKKB9PZuMBSbNRtsTJV3yiMjY23iIrqqsQI10NGvRpMacYX99c5xjdVzmnfrZ7JydzXNYt3aqUG92eKUfvEHQFQ4COQimJ9jARt0vy4GWBU1p0aNPm6Di97eRo0fjlncOW8vFvd2sq50WYd7rCTowikma4KzSRa5MSbb1QfbK05si3S%2FUj2QFxt8pK%2FZ7rhZ2uIQ&X-Amz-Signature=6e6b5e792cb7531af268a9599830573c10c1f0216e2b9d23e5983a6d56a80cb2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SOSY5E2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCybt1gtRTkffKj7NQmlo3n9V8FSv4HHrzlSpzRp7QRVQIhANo511nXuFKP%2BgTGdpytUJv9nl0rMfc5RujwrNYSITMwKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwYKZH4ITzxOW6WUgq3AP%2FvaXUT6stJzz73OJmPK%2BySs3Kt4%2BHpo%2BVjoDzTsXHGTggStMuYWUpRMX9MBy8CAWAr7bAxS%2BFsIFZNnW71vmizbWRAshWRTDip9HmPMZERm%2BvJ0XXHnfe36IDdgabMyEAnE%2BbcfSRZvuYsrnrD2qQyUs1KFvwJ8jAjNRQAL3zlmSN0GLcK3U9wU9E0YBLv9IjeUXu10rlGR9HYb6mzAskQKNmN1oNepGiyYrcHH48BflC2muXG3xjnDZ4Q8ZqvpwDoLqcSYkqfenoIa7A9drYwsSx8SeW4HZ0Ugaub6%2BW3Ko3n9A5sL9gyg2eWiEZek06psQaAp4KZLmIfXv%2BL1dOJyoWMapDXD2JwEbLNdJwwbOuHnl2t7BHHsnR88JOGAr2wcrX4OLUznB1%2B74KXNkJOfhAlNQnDUUYSTW7PeLXIv3vym4TVmrTxhad2WPw4CKLlj0dmuwvptL9xn6tShNSMDEAxuH8xlIhCndloXrrkn5YmqltQISjKkWXgSrYsZxzho%2F8IvMB%2FcLjaCLnGSdCJ8m0IWjQ%2BCXDV%2BpdoRaSCVci49kKcvYpYcmhcmLoRQlBWcQ9y1E6k9UXQOvL9TvfaEew%2BOBhOP%2BwdQWMoo330T7hmwtg1v%2Bn3pk1AzC48drABjqkARdFn5sVAcFYom99M3kdXcHfqKKB9PZuMBSbNRtsTJV3yiMjY23iIrqqsQI10NGvRpMacYX99c5xjdVzmnfrZ7JydzXNYt3aqUG92eKUfvEHQFQ4COQimJ9jARt0vy4GWBU1p0aNPm6Di97eRo0fjlncOW8vFvd2sq50WYd7rCTowikma4KzSRa5MSbb1QfbK05si3S%2FUj2QFxt8pK%2FZ7rhZ2uIQ&X-Amz-Signature=31484d1b410048d4cf2eda05b5e9aaf3365f44cc286057f51e7bafe3b8ad8f2c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SOSY5E2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCybt1gtRTkffKj7NQmlo3n9V8FSv4HHrzlSpzRp7QRVQIhANo511nXuFKP%2BgTGdpytUJv9nl0rMfc5RujwrNYSITMwKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwYKZH4ITzxOW6WUgq3AP%2FvaXUT6stJzz73OJmPK%2BySs3Kt4%2BHpo%2BVjoDzTsXHGTggStMuYWUpRMX9MBy8CAWAr7bAxS%2BFsIFZNnW71vmizbWRAshWRTDip9HmPMZERm%2BvJ0XXHnfe36IDdgabMyEAnE%2BbcfSRZvuYsrnrD2qQyUs1KFvwJ8jAjNRQAL3zlmSN0GLcK3U9wU9E0YBLv9IjeUXu10rlGR9HYb6mzAskQKNmN1oNepGiyYrcHH48BflC2muXG3xjnDZ4Q8ZqvpwDoLqcSYkqfenoIa7A9drYwsSx8SeW4HZ0Ugaub6%2BW3Ko3n9A5sL9gyg2eWiEZek06psQaAp4KZLmIfXv%2BL1dOJyoWMapDXD2JwEbLNdJwwbOuHnl2t7BHHsnR88JOGAr2wcrX4OLUznB1%2B74KXNkJOfhAlNQnDUUYSTW7PeLXIv3vym4TVmrTxhad2WPw4CKLlj0dmuwvptL9xn6tShNSMDEAxuH8xlIhCndloXrrkn5YmqltQISjKkWXgSrYsZxzho%2F8IvMB%2FcLjaCLnGSdCJ8m0IWjQ%2BCXDV%2BpdoRaSCVci49kKcvYpYcmhcmLoRQlBWcQ9y1E6k9UXQOvL9TvfaEew%2BOBhOP%2BwdQWMoo330T7hmwtg1v%2Bn3pk1AzC48drABjqkARdFn5sVAcFYom99M3kdXcHfqKKB9PZuMBSbNRtsTJV3yiMjY23iIrqqsQI10NGvRpMacYX99c5xjdVzmnfrZ7JydzXNYt3aqUG92eKUfvEHQFQ4COQimJ9jARt0vy4GWBU1p0aNPm6Di97eRo0fjlncOW8vFvd2sq50WYd7rCTowikma4KzSRa5MSbb1QfbK05si3S%2FUj2QFxt8pK%2FZ7rhZ2uIQ&X-Amz-Signature=d7901c45aa5c4432a037fa740466ca73c1ff56683b5b3b8d65330d0805408c3c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SOSY5E2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCybt1gtRTkffKj7NQmlo3n9V8FSv4HHrzlSpzRp7QRVQIhANo511nXuFKP%2BgTGdpytUJv9nl0rMfc5RujwrNYSITMwKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwYKZH4ITzxOW6WUgq3AP%2FvaXUT6stJzz73OJmPK%2BySs3Kt4%2BHpo%2BVjoDzTsXHGTggStMuYWUpRMX9MBy8CAWAr7bAxS%2BFsIFZNnW71vmizbWRAshWRTDip9HmPMZERm%2BvJ0XXHnfe36IDdgabMyEAnE%2BbcfSRZvuYsrnrD2qQyUs1KFvwJ8jAjNRQAL3zlmSN0GLcK3U9wU9E0YBLv9IjeUXu10rlGR9HYb6mzAskQKNmN1oNepGiyYrcHH48BflC2muXG3xjnDZ4Q8ZqvpwDoLqcSYkqfenoIa7A9drYwsSx8SeW4HZ0Ugaub6%2BW3Ko3n9A5sL9gyg2eWiEZek06psQaAp4KZLmIfXv%2BL1dOJyoWMapDXD2JwEbLNdJwwbOuHnl2t7BHHsnR88JOGAr2wcrX4OLUznB1%2B74KXNkJOfhAlNQnDUUYSTW7PeLXIv3vym4TVmrTxhad2WPw4CKLlj0dmuwvptL9xn6tShNSMDEAxuH8xlIhCndloXrrkn5YmqltQISjKkWXgSrYsZxzho%2F8IvMB%2FcLjaCLnGSdCJ8m0IWjQ%2BCXDV%2BpdoRaSCVci49kKcvYpYcmhcmLoRQlBWcQ9y1E6k9UXQOvL9TvfaEew%2BOBhOP%2BwdQWMoo330T7hmwtg1v%2Bn3pk1AzC48drABjqkARdFn5sVAcFYom99M3kdXcHfqKKB9PZuMBSbNRtsTJV3yiMjY23iIrqqsQI10NGvRpMacYX99c5xjdVzmnfrZ7JydzXNYt3aqUG92eKUfvEHQFQ4COQimJ9jARt0vy4GWBU1p0aNPm6Di97eRo0fjlncOW8vFvd2sq50WYd7rCTowikma4KzSRa5MSbb1QfbK05si3S%2FUj2QFxt8pK%2FZ7rhZ2uIQ&X-Amz-Signature=2fd11ab36c0d8616c77677f6dc415b33492ef951868869b1c9759226ed8be626&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
