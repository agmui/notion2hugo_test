---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 145
toc: false
icon: ""
---

**official guide:** [https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html](https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html)

So far we have made multiple files and our folder is getting messy.

Let's structure our project by using ROS Packages.

<details>
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.

They consist of a folder, `package.xml` file, and source code

```python
      cpp_package_1/
		      ... imagine much code files here ..
          package.xml
```

</details>



First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKSZQW6P%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDZR9PE2p4f2OVtnbQFT4%2F4d4K32yrvHHDRb9DiXOUuMwIhAIAwLM3JVYnXHQPUynkZ0L2Ww81jaDQ%2FdlFM4jsM6nkWKv8DCBsQABoMNjM3NDIzMTgzODA1IgyjfLiG%2FF%2FhTpEpYngq3APVZ%2Fg%2BLBTGSiuf%2BHxdsFsqUl%2BGy7%2FsZIRTW4uvz%2F3Fo2R0JooX1OI06sFeksc8%2Fn%2BMeWB%2BWn26e82%2FxXTKFS0ueJd8Emd3copTB3Qa2HM71rw1P5VrfdK4uiWon9NTVffvC8qwJcMlq248J0%2F3brW0o%2FL79rqKZ%2FPh%2BbB5IAA00tWZ30ybe%2F1i2yFb7M9NoegykwJKVqFL1YVRUgDYkUlqlj6OEGUg5DOkMbUjqZwsnbJ4aomogfC8l%2FND0ryLtzZbKq9TpJDQHpEu%2BdJ%2FCowi1Mb7Rws3AEvhuLCoBRjVu9HIPVMyOZcyP%2BHnxFdmkRXbDj%2Fy2s%2FSjwQzY66%2FqdHmh5puEx%2BlwzHEyksVE9N4DCJg%2FgpoAvHiCkwDmK35XVC9HE6W6WrfMxFH%2FTFiWU3IT%2FCU1s9a4CK1VsRxda3OEL265P71gQQxzlgaEGJJFLXjYjGtsGxoT3bJRvos3QfoE4qWoaW%2Fw2OhZENH5mRpnMpQsLufDHJXw905hbkXy0cWydi34IjUVc5LF7Wiu%2BIKKXwDMWcI%2FYp%2F%2B%2BAtswmrTK%2Fjf1CJn04SHOFYndoU9YgteTt91a2Y7JUqnsyykGPMrcbbgUC2GeGzqrEWp%2FrMAObZ97L7x0n5Y4Ey%2BDDI79XLBjqkAZ52zBwKoJRBbnZ92Pq%2FYsuqBxkWwGbUutXLZJjuCads%2Ba7FwY2C2%2FwaVmxu5vBaWIu54tnxmH4ebAqnOdkZ8xVrqRpB53StOmAeXvLFw9mGZ0HYJ0knHLZi8FcSLZ2DZG4G9ZwbK7nHZ0cwXePJyfTJxqVH1YT8nhoDYX2V0ZLMYh47ewoAC%2BWi3ODcAPMXMNIydrbVqeWZxT9iI5GIwootMyH4&X-Amz-Signature=b3933bd86758bfcb7ab52972e57cddd4a07e6c043d01a564203e62973a5a1b31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Then inside this `src` folder is where we put all of our packages.

```python
ros_ws/
    src/
      cpp_package_1/
		      ...
          package.xml

      py_package_1/
		      ...
          package.xml

      ...
      cpp_package_n/
		      ...
          package.xml

```

<details>
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
packages can be either `C++` or python.

the intern file structure is different for each but for this guide we will stick to creating python packages

</details>



# Creating a package

Let's go to the `src` folder to create the package

```bash
cd ros2_ws/src
```

to create a package we use this command:

```bash
ros2 pkg create --build-type ament_python --license Apache-2.0 --node-name my_node my_package
```

a bunch of text should have been printed out but the result should look something like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKSZQW6P%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDZR9PE2p4f2OVtnbQFT4%2F4d4K32yrvHHDRb9DiXOUuMwIhAIAwLM3JVYnXHQPUynkZ0L2Ww81jaDQ%2FdlFM4jsM6nkWKv8DCBsQABoMNjM3NDIzMTgzODA1IgyjfLiG%2FF%2FhTpEpYngq3APVZ%2Fg%2BLBTGSiuf%2BHxdsFsqUl%2BGy7%2FsZIRTW4uvz%2F3Fo2R0JooX1OI06sFeksc8%2Fn%2BMeWB%2BWn26e82%2FxXTKFS0ueJd8Emd3copTB3Qa2HM71rw1P5VrfdK4uiWon9NTVffvC8qwJcMlq248J0%2F3brW0o%2FL79rqKZ%2FPh%2BbB5IAA00tWZ30ybe%2F1i2yFb7M9NoegykwJKVqFL1YVRUgDYkUlqlj6OEGUg5DOkMbUjqZwsnbJ4aomogfC8l%2FND0ryLtzZbKq9TpJDQHpEu%2BdJ%2FCowi1Mb7Rws3AEvhuLCoBRjVu9HIPVMyOZcyP%2BHnxFdmkRXbDj%2Fy2s%2FSjwQzY66%2FqdHmh5puEx%2BlwzHEyksVE9N4DCJg%2FgpoAvHiCkwDmK35XVC9HE6W6WrfMxFH%2FTFiWU3IT%2FCU1s9a4CK1VsRxda3OEL265P71gQQxzlgaEGJJFLXjYjGtsGxoT3bJRvos3QfoE4qWoaW%2Fw2OhZENH5mRpnMpQsLufDHJXw905hbkXy0cWydi34IjUVc5LF7Wiu%2BIKKXwDMWcI%2FYp%2F%2B%2BAtswmrTK%2Fjf1CJn04SHOFYndoU9YgteTt91a2Y7JUqnsyykGPMrcbbgUC2GeGzqrEWp%2FrMAObZ97L7x0n5Y4Ey%2BDDI79XLBjqkAZ52zBwKoJRBbnZ92Pq%2FYsuqBxkWwGbUutXLZJjuCads%2Ba7FwY2C2%2FwaVmxu5vBaWIu54tnxmH4ebAqnOdkZ8xVrqRpB53StOmAeXvLFw9mGZ0HYJ0knHLZi8FcSLZ2DZG4G9ZwbK7nHZ0cwXePJyfTJxqVH1YT8nhoDYX2V0ZLMYh47ewoAC%2BWi3ODcAPMXMNIydrbVqeWZxT9iI5GIwootMyH4&X-Amz-Signature=54e4e54c9a420b6dee8cecfb3f8b24e6b72abc8be22124572bbe84baf1698a8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKSZQW6P%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDZR9PE2p4f2OVtnbQFT4%2F4d4K32yrvHHDRb9DiXOUuMwIhAIAwLM3JVYnXHQPUynkZ0L2Ww81jaDQ%2FdlFM4jsM6nkWKv8DCBsQABoMNjM3NDIzMTgzODA1IgyjfLiG%2FF%2FhTpEpYngq3APVZ%2Fg%2BLBTGSiuf%2BHxdsFsqUl%2BGy7%2FsZIRTW4uvz%2F3Fo2R0JooX1OI06sFeksc8%2Fn%2BMeWB%2BWn26e82%2FxXTKFS0ueJd8Emd3copTB3Qa2HM71rw1P5VrfdK4uiWon9NTVffvC8qwJcMlq248J0%2F3brW0o%2FL79rqKZ%2FPh%2BbB5IAA00tWZ30ybe%2F1i2yFb7M9NoegykwJKVqFL1YVRUgDYkUlqlj6OEGUg5DOkMbUjqZwsnbJ4aomogfC8l%2FND0ryLtzZbKq9TpJDQHpEu%2BdJ%2FCowi1Mb7Rws3AEvhuLCoBRjVu9HIPVMyOZcyP%2BHnxFdmkRXbDj%2Fy2s%2FSjwQzY66%2FqdHmh5puEx%2BlwzHEyksVE9N4DCJg%2FgpoAvHiCkwDmK35XVC9HE6W6WrfMxFH%2FTFiWU3IT%2FCU1s9a4CK1VsRxda3OEL265P71gQQxzlgaEGJJFLXjYjGtsGxoT3bJRvos3QfoE4qWoaW%2Fw2OhZENH5mRpnMpQsLufDHJXw905hbkXy0cWydi34IjUVc5LF7Wiu%2BIKKXwDMWcI%2FYp%2F%2B%2BAtswmrTK%2Fjf1CJn04SHOFYndoU9YgteTt91a2Y7JUqnsyykGPMrcbbgUC2GeGzqrEWp%2FrMAObZ97L7x0n5Y4Ey%2BDDI79XLBjqkAZ52zBwKoJRBbnZ92Pq%2FYsuqBxkWwGbUutXLZJjuCads%2Ba7FwY2C2%2FwaVmxu5vBaWIu54tnxmH4ebAqnOdkZ8xVrqRpB53StOmAeXvLFw9mGZ0HYJ0knHLZi8FcSLZ2DZG4G9ZwbK7nHZ0cwXePJyfTJxqVH1YT8nhoDYX2V0ZLMYh47ewoAC%2BWi3ODcAPMXMNIydrbVqeWZxT9iI5GIwootMyH4&X-Amz-Signature=ebc8975fd020d6ac2cb2d640f000602b828a874103b184e2e049660d6678820f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKSZQW6P%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDZR9PE2p4f2OVtnbQFT4%2F4d4K32yrvHHDRb9DiXOUuMwIhAIAwLM3JVYnXHQPUynkZ0L2Ww81jaDQ%2FdlFM4jsM6nkWKv8DCBsQABoMNjM3NDIzMTgzODA1IgyjfLiG%2FF%2FhTpEpYngq3APVZ%2Fg%2BLBTGSiuf%2BHxdsFsqUl%2BGy7%2FsZIRTW4uvz%2F3Fo2R0JooX1OI06sFeksc8%2Fn%2BMeWB%2BWn26e82%2FxXTKFS0ueJd8Emd3copTB3Qa2HM71rw1P5VrfdK4uiWon9NTVffvC8qwJcMlq248J0%2F3brW0o%2FL79rqKZ%2FPh%2BbB5IAA00tWZ30ybe%2F1i2yFb7M9NoegykwJKVqFL1YVRUgDYkUlqlj6OEGUg5DOkMbUjqZwsnbJ4aomogfC8l%2FND0ryLtzZbKq9TpJDQHpEu%2BdJ%2FCowi1Mb7Rws3AEvhuLCoBRjVu9HIPVMyOZcyP%2BHnxFdmkRXbDj%2Fy2s%2FSjwQzY66%2FqdHmh5puEx%2BlwzHEyksVE9N4DCJg%2FgpoAvHiCkwDmK35XVC9HE6W6WrfMxFH%2FTFiWU3IT%2FCU1s9a4CK1VsRxda3OEL265P71gQQxzlgaEGJJFLXjYjGtsGxoT3bJRvos3QfoE4qWoaW%2Fw2OhZENH5mRpnMpQsLufDHJXw905hbkXy0cWydi34IjUVc5LF7Wiu%2BIKKXwDMWcI%2FYp%2F%2B%2BAtswmrTK%2Fjf1CJn04SHOFYndoU9YgteTt91a2Y7JUqnsyykGPMrcbbgUC2GeGzqrEWp%2FrMAObZ97L7x0n5Y4Ey%2BDDI79XLBjqkAZ52zBwKoJRBbnZ92Pq%2FYsuqBxkWwGbUutXLZJjuCads%2Ba7FwY2C2%2FwaVmxu5vBaWIu54tnxmH4ebAqnOdkZ8xVrqRpB53StOmAeXvLFw9mGZ0HYJ0knHLZi8FcSLZ2DZG4G9ZwbK7nHZ0cwXePJyfTJxqVH1YT8nhoDYX2V0ZLMYh47ewoAC%2BWi3ODcAPMXMNIydrbVqeWZxT9iI5GIwootMyH4&X-Amz-Signature=4e61f3fbead0a98fb5ada681418694d039486a260c033854c05bcad3bc587e30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKSZQW6P%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDZR9PE2p4f2OVtnbQFT4%2F4d4K32yrvHHDRb9DiXOUuMwIhAIAwLM3JVYnXHQPUynkZ0L2Ww81jaDQ%2FdlFM4jsM6nkWKv8DCBsQABoMNjM3NDIzMTgzODA1IgyjfLiG%2FF%2FhTpEpYngq3APVZ%2Fg%2BLBTGSiuf%2BHxdsFsqUl%2BGy7%2FsZIRTW4uvz%2F3Fo2R0JooX1OI06sFeksc8%2Fn%2BMeWB%2BWn26e82%2FxXTKFS0ueJd8Emd3copTB3Qa2HM71rw1P5VrfdK4uiWon9NTVffvC8qwJcMlq248J0%2F3brW0o%2FL79rqKZ%2FPh%2BbB5IAA00tWZ30ybe%2F1i2yFb7M9NoegykwJKVqFL1YVRUgDYkUlqlj6OEGUg5DOkMbUjqZwsnbJ4aomogfC8l%2FND0ryLtzZbKq9TpJDQHpEu%2BdJ%2FCowi1Mb7Rws3AEvhuLCoBRjVu9HIPVMyOZcyP%2BHnxFdmkRXbDj%2Fy2s%2FSjwQzY66%2FqdHmh5puEx%2BlwzHEyksVE9N4DCJg%2FgpoAvHiCkwDmK35XVC9HE6W6WrfMxFH%2FTFiWU3IT%2FCU1s9a4CK1VsRxda3OEL265P71gQQxzlgaEGJJFLXjYjGtsGxoT3bJRvos3QfoE4qWoaW%2Fw2OhZENH5mRpnMpQsLufDHJXw905hbkXy0cWydi34IjUVc5LF7Wiu%2BIKKXwDMWcI%2FYp%2F%2B%2BAtswmrTK%2Fjf1CJn04SHOFYndoU9YgteTt91a2Y7JUqnsyykGPMrcbbgUC2GeGzqrEWp%2FrMAObZ97L7x0n5Y4Ey%2BDDI79XLBjqkAZ52zBwKoJRBbnZ92Pq%2FYsuqBxkWwGbUutXLZJjuCads%2Ba7FwY2C2%2FwaVmxu5vBaWIu54tnxmH4ebAqnOdkZ8xVrqRpB53StOmAeXvLFw9mGZ0HYJ0knHLZi8FcSLZ2DZG4G9ZwbK7nHZ0cwXePJyfTJxqVH1YT8nhoDYX2V0ZLMYh47ewoAC%2BWi3ODcAPMXMNIydrbVqeWZxT9iI5GIwootMyH4&X-Amz-Signature=18b2cf5276647e0839039cdcbc0c22cfa3859a37034362f051482c47b3c6721d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKSZQW6P%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDZR9PE2p4f2OVtnbQFT4%2F4d4K32yrvHHDRb9DiXOUuMwIhAIAwLM3JVYnXHQPUynkZ0L2Ww81jaDQ%2FdlFM4jsM6nkWKv8DCBsQABoMNjM3NDIzMTgzODA1IgyjfLiG%2FF%2FhTpEpYngq3APVZ%2Fg%2BLBTGSiuf%2BHxdsFsqUl%2BGy7%2FsZIRTW4uvz%2F3Fo2R0JooX1OI06sFeksc8%2Fn%2BMeWB%2BWn26e82%2FxXTKFS0ueJd8Emd3copTB3Qa2HM71rw1P5VrfdK4uiWon9NTVffvC8qwJcMlq248J0%2F3brW0o%2FL79rqKZ%2FPh%2BbB5IAA00tWZ30ybe%2F1i2yFb7M9NoegykwJKVqFL1YVRUgDYkUlqlj6OEGUg5DOkMbUjqZwsnbJ4aomogfC8l%2FND0ryLtzZbKq9TpJDQHpEu%2BdJ%2FCowi1Mb7Rws3AEvhuLCoBRjVu9HIPVMyOZcyP%2BHnxFdmkRXbDj%2Fy2s%2FSjwQzY66%2FqdHmh5puEx%2BlwzHEyksVE9N4DCJg%2FgpoAvHiCkwDmK35XVC9HE6W6WrfMxFH%2FTFiWU3IT%2FCU1s9a4CK1VsRxda3OEL265P71gQQxzlgaEGJJFLXjYjGtsGxoT3bJRvos3QfoE4qWoaW%2Fw2OhZENH5mRpnMpQsLufDHJXw905hbkXy0cWydi34IjUVc5LF7Wiu%2BIKKXwDMWcI%2FYp%2F%2B%2BAtswmrTK%2Fjf1CJn04SHOFYndoU9YgteTt91a2Y7JUqnsyykGPMrcbbgUC2GeGzqrEWp%2FrMAObZ97L7x0n5Y4Ey%2BDDI79XLBjqkAZ52zBwKoJRBbnZ92Pq%2FYsuqBxkWwGbUutXLZJjuCads%2Ba7FwY2C2%2FwaVmxu5vBaWIu54tnxmH4ebAqnOdkZ8xVrqRpB53StOmAeXvLFw9mGZ0HYJ0knHLZi8FcSLZ2DZG4G9ZwbK7nHZ0cwXePJyfTJxqVH1YT8nhoDYX2V0ZLMYh47ewoAC%2BWi3ODcAPMXMNIydrbVqeWZxT9iI5GIwootMyH4&X-Amz-Signature=40fc290cb5445628df80e8ceda447ab0898fdedaf680df839f541a2e7ef08d6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKSZQW6P%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDZR9PE2p4f2OVtnbQFT4%2F4d4K32yrvHHDRb9DiXOUuMwIhAIAwLM3JVYnXHQPUynkZ0L2Ww81jaDQ%2FdlFM4jsM6nkWKv8DCBsQABoMNjM3NDIzMTgzODA1IgyjfLiG%2FF%2FhTpEpYngq3APVZ%2Fg%2BLBTGSiuf%2BHxdsFsqUl%2BGy7%2FsZIRTW4uvz%2F3Fo2R0JooX1OI06sFeksc8%2Fn%2BMeWB%2BWn26e82%2FxXTKFS0ueJd8Emd3copTB3Qa2HM71rw1P5VrfdK4uiWon9NTVffvC8qwJcMlq248J0%2F3brW0o%2FL79rqKZ%2FPh%2BbB5IAA00tWZ30ybe%2F1i2yFb7M9NoegykwJKVqFL1YVRUgDYkUlqlj6OEGUg5DOkMbUjqZwsnbJ4aomogfC8l%2FND0ryLtzZbKq9TpJDQHpEu%2BdJ%2FCowi1Mb7Rws3AEvhuLCoBRjVu9HIPVMyOZcyP%2BHnxFdmkRXbDj%2Fy2s%2FSjwQzY66%2FqdHmh5puEx%2BlwzHEyksVE9N4DCJg%2FgpoAvHiCkwDmK35XVC9HE6W6WrfMxFH%2FTFiWU3IT%2FCU1s9a4CK1VsRxda3OEL265P71gQQxzlgaEGJJFLXjYjGtsGxoT3bJRvos3QfoE4qWoaW%2Fw2OhZENH5mRpnMpQsLufDHJXw905hbkXy0cWydi34IjUVc5LF7Wiu%2BIKKXwDMWcI%2FYp%2F%2B%2BAtswmrTK%2Fjf1CJn04SHOFYndoU9YgteTt91a2Y7JUqnsyykGPMrcbbgUC2GeGzqrEWp%2FrMAObZ97L7x0n5Y4Ey%2BDDI79XLBjqkAZ52zBwKoJRBbnZ92Pq%2FYsuqBxkWwGbUutXLZJjuCads%2Ba7FwY2C2%2FwaVmxu5vBaWIu54tnxmH4ebAqnOdkZ8xVrqRpB53StOmAeXvLFw9mGZ0HYJ0knHLZi8FcSLZ2DZG4G9ZwbK7nHZ0cwXePJyfTJxqVH1YT8nhoDYX2V0ZLMYh47ewoAC%2BWi3ODcAPMXMNIydrbVqeWZxT9iI5GIwootMyH4&X-Amz-Signature=d77008129b2b40a31ab8814a6811c4f2a863d91a0ce89d89e1cfbe9091137ab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
