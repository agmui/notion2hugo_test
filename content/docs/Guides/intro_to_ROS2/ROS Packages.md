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
      <summary>What are ROS Packages?</summary>
      ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRP64PIX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDpInuzkypxt0s2UcpTwtpv96PnhcHVQ0RFY6lmVO4tQQIhAPmHDEqOa6kBuwnszOBIo8bragbK8GxFd%2F9PGG%2FHvsP7Kv8DCGEQABoMNjM3NDIzMTgzODA1Igz%2B7kLV28H5UgQwTHMq3ANI0j8L6Yle%2BvIc4UZIa5Z%2Fyi5JsTPNcDoyh%2Buz8XTyrqGFJUoQmqGPavUNPxwboEDv%2Bu0Zg3KovFTpnubUJjecp6Gq8dB92CVi9apVsZCrPOXqhTZlzH5ZKHTpQS8i%2BcCE1XSzcu25Ka7lZxJI28vYqu7egLnJ0Zf8wRghExDZLjm2d3TmWvrj7B7QWou5wpq3aPzxm7vAxpeNKy3qKWULuJEpAJIy0JoBM4CF9B4CFvPhb7C1ByPNTujqH8DrnFjl0FPd8dM9knwlzGoSSIZt25Yl6dDGueyq9bb8hUbh7sBBcUM%2BFRY9WHMkNItGD4X%2BQSMRUBfbS8DSy9ZVaE4flYDJ8QXHGvamINt1FOTte1iJav7JrkfQ2kg5YNKrmqMAjjmpMLgAlx9az%2BTniAyBlhJqWWkFYdtVMVMojmmgertCeHK9xihsFS2LzAYt1TCndtJCbS35acD7p8c4dkcYmcfCQtMSOwiMe9QmuF5KnwANC3tMVetGVCDuMmY%2BBfrqAjB3%2F%2FpHdJIIECRCtrHiLM8KEhZ6m%2FxvM1rffAGcLvF5LA72t8%2BgjbJ9HKxZjnAcZRzUOY6nG21fy92HvBY%2FsHotRzbEO8G0lS9YatmisDpFcQOCbmlpevogADCutf3EBjqkAVIFqJgswQ5HQHadhDq%2B23gNQ%2BotdX1qdtOE%2B%2Bn7dv4%2FrEdd5MHYpOpLgQHp%2F6HWrtH5eR0%2FDQrUrTF2GgmTABZeSYRQ70bEZr7%2Fr8Gh1M9SXEULQHHobzdigZ6dqd7LmozqCWA61OYmXbzaXLP9nPC4o1PRLBn39s%2FrXsP9EKJ0lqG%2FDL8STcUOZ9LorCemnFpM%2F9RtMfDlRtBG8hZr0CoFFbCK&X-Amz-Signature=cd003734e260b656f0437cb39b62c169314ff6b8f3f032230aef422e6317ab20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
      <summary>package types</summary>
      packages can be either `C++` or python.
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRP64PIX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDpInuzkypxt0s2UcpTwtpv96PnhcHVQ0RFY6lmVO4tQQIhAPmHDEqOa6kBuwnszOBIo8bragbK8GxFd%2F9PGG%2FHvsP7Kv8DCGEQABoMNjM3NDIzMTgzODA1Igz%2B7kLV28H5UgQwTHMq3ANI0j8L6Yle%2BvIc4UZIa5Z%2Fyi5JsTPNcDoyh%2Buz8XTyrqGFJUoQmqGPavUNPxwboEDv%2Bu0Zg3KovFTpnubUJjecp6Gq8dB92CVi9apVsZCrPOXqhTZlzH5ZKHTpQS8i%2BcCE1XSzcu25Ka7lZxJI28vYqu7egLnJ0Zf8wRghExDZLjm2d3TmWvrj7B7QWou5wpq3aPzxm7vAxpeNKy3qKWULuJEpAJIy0JoBM4CF9B4CFvPhb7C1ByPNTujqH8DrnFjl0FPd8dM9knwlzGoSSIZt25Yl6dDGueyq9bb8hUbh7sBBcUM%2BFRY9WHMkNItGD4X%2BQSMRUBfbS8DSy9ZVaE4flYDJ8QXHGvamINt1FOTte1iJav7JrkfQ2kg5YNKrmqMAjjmpMLgAlx9az%2BTniAyBlhJqWWkFYdtVMVMojmmgertCeHK9xihsFS2LzAYt1TCndtJCbS35acD7p8c4dkcYmcfCQtMSOwiMe9QmuF5KnwANC3tMVetGVCDuMmY%2BBfrqAjB3%2F%2FpHdJIIECRCtrHiLM8KEhZ6m%2FxvM1rffAGcLvF5LA72t8%2BgjbJ9HKxZjnAcZRzUOY6nG21fy92HvBY%2FsHotRzbEO8G0lS9YatmisDpFcQOCbmlpevogADCutf3EBjqkAVIFqJgswQ5HQHadhDq%2B23gNQ%2BotdX1qdtOE%2B%2Bn7dv4%2FrEdd5MHYpOpLgQHp%2F6HWrtH5eR0%2FDQrUrTF2GgmTABZeSYRQ70bEZr7%2Fr8Gh1M9SXEULQHHobzdigZ6dqd7LmozqCWA61OYmXbzaXLP9nPC4o1PRLBn39s%2FrXsP9EKJ0lqG%2FDL8STcUOZ9LorCemnFpM%2F9RtMfDlRtBG8hZr0CoFFbCK&X-Amz-Signature=7f820828bd57f661e6f3169fcfe0b1d9ca2795a67991e77fa7eed8221daf1da0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRP64PIX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDpInuzkypxt0s2UcpTwtpv96PnhcHVQ0RFY6lmVO4tQQIhAPmHDEqOa6kBuwnszOBIo8bragbK8GxFd%2F9PGG%2FHvsP7Kv8DCGEQABoMNjM3NDIzMTgzODA1Igz%2B7kLV28H5UgQwTHMq3ANI0j8L6Yle%2BvIc4UZIa5Z%2Fyi5JsTPNcDoyh%2Buz8XTyrqGFJUoQmqGPavUNPxwboEDv%2Bu0Zg3KovFTpnubUJjecp6Gq8dB92CVi9apVsZCrPOXqhTZlzH5ZKHTpQS8i%2BcCE1XSzcu25Ka7lZxJI28vYqu7egLnJ0Zf8wRghExDZLjm2d3TmWvrj7B7QWou5wpq3aPzxm7vAxpeNKy3qKWULuJEpAJIy0JoBM4CF9B4CFvPhb7C1ByPNTujqH8DrnFjl0FPd8dM9knwlzGoSSIZt25Yl6dDGueyq9bb8hUbh7sBBcUM%2BFRY9WHMkNItGD4X%2BQSMRUBfbS8DSy9ZVaE4flYDJ8QXHGvamINt1FOTte1iJav7JrkfQ2kg5YNKrmqMAjjmpMLgAlx9az%2BTniAyBlhJqWWkFYdtVMVMojmmgertCeHK9xihsFS2LzAYt1TCndtJCbS35acD7p8c4dkcYmcfCQtMSOwiMe9QmuF5KnwANC3tMVetGVCDuMmY%2BBfrqAjB3%2F%2FpHdJIIECRCtrHiLM8KEhZ6m%2FxvM1rffAGcLvF5LA72t8%2BgjbJ9HKxZjnAcZRzUOY6nG21fy92HvBY%2FsHotRzbEO8G0lS9YatmisDpFcQOCbmlpevogADCutf3EBjqkAVIFqJgswQ5HQHadhDq%2B23gNQ%2BotdX1qdtOE%2B%2Bn7dv4%2FrEdd5MHYpOpLgQHp%2F6HWrtH5eR0%2FDQrUrTF2GgmTABZeSYRQ70bEZr7%2Fr8Gh1M9SXEULQHHobzdigZ6dqd7LmozqCWA61OYmXbzaXLP9nPC4o1PRLBn39s%2FrXsP9EKJ0lqG%2FDL8STcUOZ9LorCemnFpM%2F9RtMfDlRtBG8hZr0CoFFbCK&X-Amz-Signature=c898ee9bba33d6cbcf4e2f8409d9048de9741258f72c5c56a146750fb0b2bee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRP64PIX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDpInuzkypxt0s2UcpTwtpv96PnhcHVQ0RFY6lmVO4tQQIhAPmHDEqOa6kBuwnszOBIo8bragbK8GxFd%2F9PGG%2FHvsP7Kv8DCGEQABoMNjM3NDIzMTgzODA1Igz%2B7kLV28H5UgQwTHMq3ANI0j8L6Yle%2BvIc4UZIa5Z%2Fyi5JsTPNcDoyh%2Buz8XTyrqGFJUoQmqGPavUNPxwboEDv%2Bu0Zg3KovFTpnubUJjecp6Gq8dB92CVi9apVsZCrPOXqhTZlzH5ZKHTpQS8i%2BcCE1XSzcu25Ka7lZxJI28vYqu7egLnJ0Zf8wRghExDZLjm2d3TmWvrj7B7QWou5wpq3aPzxm7vAxpeNKy3qKWULuJEpAJIy0JoBM4CF9B4CFvPhb7C1ByPNTujqH8DrnFjl0FPd8dM9knwlzGoSSIZt25Yl6dDGueyq9bb8hUbh7sBBcUM%2BFRY9WHMkNItGD4X%2BQSMRUBfbS8DSy9ZVaE4flYDJ8QXHGvamINt1FOTte1iJav7JrkfQ2kg5YNKrmqMAjjmpMLgAlx9az%2BTniAyBlhJqWWkFYdtVMVMojmmgertCeHK9xihsFS2LzAYt1TCndtJCbS35acD7p8c4dkcYmcfCQtMSOwiMe9QmuF5KnwANC3tMVetGVCDuMmY%2BBfrqAjB3%2F%2FpHdJIIECRCtrHiLM8KEhZ6m%2FxvM1rffAGcLvF5LA72t8%2BgjbJ9HKxZjnAcZRzUOY6nG21fy92HvBY%2FsHotRzbEO8G0lS9YatmisDpFcQOCbmlpevogADCutf3EBjqkAVIFqJgswQ5HQHadhDq%2B23gNQ%2BotdX1qdtOE%2B%2Bn7dv4%2FrEdd5MHYpOpLgQHp%2F6HWrtH5eR0%2FDQrUrTF2GgmTABZeSYRQ70bEZr7%2Fr8Gh1M9SXEULQHHobzdigZ6dqd7LmozqCWA61OYmXbzaXLP9nPC4o1PRLBn39s%2FrXsP9EKJ0lqG%2FDL8STcUOZ9LorCemnFpM%2F9RtMfDlRtBG8hZr0CoFFbCK&X-Amz-Signature=b4d7bcd296b696af0a1355e371f37ffe3e29f7ba2873410bfdf8b01f3b62452b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRP64PIX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDpInuzkypxt0s2UcpTwtpv96PnhcHVQ0RFY6lmVO4tQQIhAPmHDEqOa6kBuwnszOBIo8bragbK8GxFd%2F9PGG%2FHvsP7Kv8DCGEQABoMNjM3NDIzMTgzODA1Igz%2B7kLV28H5UgQwTHMq3ANI0j8L6Yle%2BvIc4UZIa5Z%2Fyi5JsTPNcDoyh%2Buz8XTyrqGFJUoQmqGPavUNPxwboEDv%2Bu0Zg3KovFTpnubUJjecp6Gq8dB92CVi9apVsZCrPOXqhTZlzH5ZKHTpQS8i%2BcCE1XSzcu25Ka7lZxJI28vYqu7egLnJ0Zf8wRghExDZLjm2d3TmWvrj7B7QWou5wpq3aPzxm7vAxpeNKy3qKWULuJEpAJIy0JoBM4CF9B4CFvPhb7C1ByPNTujqH8DrnFjl0FPd8dM9knwlzGoSSIZt25Yl6dDGueyq9bb8hUbh7sBBcUM%2BFRY9WHMkNItGD4X%2BQSMRUBfbS8DSy9ZVaE4flYDJ8QXHGvamINt1FOTte1iJav7JrkfQ2kg5YNKrmqMAjjmpMLgAlx9az%2BTniAyBlhJqWWkFYdtVMVMojmmgertCeHK9xihsFS2LzAYt1TCndtJCbS35acD7p8c4dkcYmcfCQtMSOwiMe9QmuF5KnwANC3tMVetGVCDuMmY%2BBfrqAjB3%2F%2FpHdJIIECRCtrHiLM8KEhZ6m%2FxvM1rffAGcLvF5LA72t8%2BgjbJ9HKxZjnAcZRzUOY6nG21fy92HvBY%2FsHotRzbEO8G0lS9YatmisDpFcQOCbmlpevogADCutf3EBjqkAVIFqJgswQ5HQHadhDq%2B23gNQ%2BotdX1qdtOE%2B%2Bn7dv4%2FrEdd5MHYpOpLgQHp%2F6HWrtH5eR0%2FDQrUrTF2GgmTABZeSYRQ70bEZr7%2Fr8Gh1M9SXEULQHHobzdigZ6dqd7LmozqCWA61OYmXbzaXLP9nPC4o1PRLBn39s%2FrXsP9EKJ0lqG%2FDL8STcUOZ9LorCemnFpM%2F9RtMfDlRtBG8hZr0CoFFbCK&X-Amz-Signature=f1856e212820286b9bbbeccae083b438ad506789006a8866b447e082d405cb65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRP64PIX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDpInuzkypxt0s2UcpTwtpv96PnhcHVQ0RFY6lmVO4tQQIhAPmHDEqOa6kBuwnszOBIo8bragbK8GxFd%2F9PGG%2FHvsP7Kv8DCGEQABoMNjM3NDIzMTgzODA1Igz%2B7kLV28H5UgQwTHMq3ANI0j8L6Yle%2BvIc4UZIa5Z%2Fyi5JsTPNcDoyh%2Buz8XTyrqGFJUoQmqGPavUNPxwboEDv%2Bu0Zg3KovFTpnubUJjecp6Gq8dB92CVi9apVsZCrPOXqhTZlzH5ZKHTpQS8i%2BcCE1XSzcu25Ka7lZxJI28vYqu7egLnJ0Zf8wRghExDZLjm2d3TmWvrj7B7QWou5wpq3aPzxm7vAxpeNKy3qKWULuJEpAJIy0JoBM4CF9B4CFvPhb7C1ByPNTujqH8DrnFjl0FPd8dM9knwlzGoSSIZt25Yl6dDGueyq9bb8hUbh7sBBcUM%2BFRY9WHMkNItGD4X%2BQSMRUBfbS8DSy9ZVaE4flYDJ8QXHGvamINt1FOTte1iJav7JrkfQ2kg5YNKrmqMAjjmpMLgAlx9az%2BTniAyBlhJqWWkFYdtVMVMojmmgertCeHK9xihsFS2LzAYt1TCndtJCbS35acD7p8c4dkcYmcfCQtMSOwiMe9QmuF5KnwANC3tMVetGVCDuMmY%2BBfrqAjB3%2F%2FpHdJIIECRCtrHiLM8KEhZ6m%2FxvM1rffAGcLvF5LA72t8%2BgjbJ9HKxZjnAcZRzUOY6nG21fy92HvBY%2FsHotRzbEO8G0lS9YatmisDpFcQOCbmlpevogADCutf3EBjqkAVIFqJgswQ5HQHadhDq%2B23gNQ%2BotdX1qdtOE%2B%2Bn7dv4%2FrEdd5MHYpOpLgQHp%2F6HWrtH5eR0%2FDQrUrTF2GgmTABZeSYRQ70bEZr7%2Fr8Gh1M9SXEULQHHobzdigZ6dqd7LmozqCWA61OYmXbzaXLP9nPC4o1PRLBn39s%2FrXsP9EKJ0lqG%2FDL8STcUOZ9LorCemnFpM%2F9RtMfDlRtBG8hZr0CoFFbCK&X-Amz-Signature=c05ee5059c0a6e5054ed42cc0f7516670baeed0667e8bd18c9b8a886cd066ba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRP64PIX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDpInuzkypxt0s2UcpTwtpv96PnhcHVQ0RFY6lmVO4tQQIhAPmHDEqOa6kBuwnszOBIo8bragbK8GxFd%2F9PGG%2FHvsP7Kv8DCGEQABoMNjM3NDIzMTgzODA1Igz%2B7kLV28H5UgQwTHMq3ANI0j8L6Yle%2BvIc4UZIa5Z%2Fyi5JsTPNcDoyh%2Buz8XTyrqGFJUoQmqGPavUNPxwboEDv%2Bu0Zg3KovFTpnubUJjecp6Gq8dB92CVi9apVsZCrPOXqhTZlzH5ZKHTpQS8i%2BcCE1XSzcu25Ka7lZxJI28vYqu7egLnJ0Zf8wRghExDZLjm2d3TmWvrj7B7QWou5wpq3aPzxm7vAxpeNKy3qKWULuJEpAJIy0JoBM4CF9B4CFvPhb7C1ByPNTujqH8DrnFjl0FPd8dM9knwlzGoSSIZt25Yl6dDGueyq9bb8hUbh7sBBcUM%2BFRY9WHMkNItGD4X%2BQSMRUBfbS8DSy9ZVaE4flYDJ8QXHGvamINt1FOTte1iJav7JrkfQ2kg5YNKrmqMAjjmpMLgAlx9az%2BTniAyBlhJqWWkFYdtVMVMojmmgertCeHK9xihsFS2LzAYt1TCndtJCbS35acD7p8c4dkcYmcfCQtMSOwiMe9QmuF5KnwANC3tMVetGVCDuMmY%2BBfrqAjB3%2F%2FpHdJIIECRCtrHiLM8KEhZ6m%2FxvM1rffAGcLvF5LA72t8%2BgjbJ9HKxZjnAcZRzUOY6nG21fy92HvBY%2FsHotRzbEO8G0lS9YatmisDpFcQOCbmlpevogADCutf3EBjqkAVIFqJgswQ5HQHadhDq%2B23gNQ%2BotdX1qdtOE%2B%2Bn7dv4%2FrEdd5MHYpOpLgQHp%2F6HWrtH5eR0%2FDQrUrTF2GgmTABZeSYRQ70bEZr7%2Fr8Gh1M9SXEULQHHobzdigZ6dqd7LmozqCWA61OYmXbzaXLP9nPC4o1PRLBn39s%2FrXsP9EKJ0lqG%2FDL8STcUOZ9LorCemnFpM%2F9RtMfDlRtBG8hZr0CoFFbCK&X-Amz-Signature=2c7d9a82e5c0763fcbc6049995c11b34271bacb9d79f3f07afa1de9ff3c3cdad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
