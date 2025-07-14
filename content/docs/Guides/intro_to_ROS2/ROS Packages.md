---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMRC7G5B%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDvrZyGcC3v4izP5oFA5lH%2FCKf9N9telgKS5PU4QWFebAIhAIBjG87L7uHuXetFLm0c4NkAcGU865ht4GrNbYGWZUwYKv8DCCMQABoMNjM3NDIzMTgzODA1Igyws8Poawxxg%2BCtptUq3ANfCk0b2tNOouyeYn9B9Qj6VAUlCVsVMysUGDrOHFurXP5oyz341eSOs6NzTbdtDnYbGLLcFWWp2lVtb9yYNLw9SAXb3teqw9Gf%2B0sz2EHz9VUlPBjZ2L1xTfAWFDCUKMSK0MOm%2F4NB7ORyok4FsjM%2F8bhQBXpSBrtFNq3QgFXI7aEp7Sw4vib90TscIOo%2BSA7ZOQHqJsHpJE01iymfJa3WEqMJKeqMtvW5%2BXpEN%2FonyP%2BoLdZQXePtsvjX3rX8zUxdltGYPXw75zOUrlytqzCXcArBEvhszrsncOpiXM8RmHyn7RxwNSh2igwIlqJDifVGnR2Bygvn%2F3MkeA0WWnnMN%2Bhwc9MjHB%2BD1ZBztdnDsnNWzurSh0R4YfrXSduMWexQKOW0ZeJdNTQhbG0GydMFEx6OZMD43BnbwMLbRyVkjv5RgBWRvU%2FxSVSLg52RMuH6kcyFej8KChjlczF5abeB68Nkaqke9tfFVVtck4OCrvTVAKN4cpWLMZ2NMqsrybjY6SLeDkS4QYPPqYlbD0iR%2BOnG5AYUFrgBdBHAHUL4sEzxKMgX4aLqGpr1hbJmoqyphVqxxi71Gb7lHLG2P3BwJr%2BH93VkY77zEgbuu19ftlmAStXZl2jR0ejEEjCYzdHDBjqkASb64FELdtkgpOfhNzmNVFPwokd%2BwxxGiudWLvPn7d0zYD1iM8zncCu0IdXd8yJsxOQQaNDjVcRxiSYrgTkThZNMKC7M5lTxTVkrDZYdQ2cxddw%2F58m1QhuPnEgj7RObpUWE2Q7O%2B724vBRqH8MinWydgg5gq2HOfWj8JXqgMQ%2F3xBHQjcZrqFkiGfLllCMGScFtCDPGDZh4FLYrIgVBBZCeILm5&X-Amz-Signature=2c1fcfa45d84dd235e0d5272e0bed2bcb1dfa0e2e4451918a792e1b3fdbfbd19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMRC7G5B%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDvrZyGcC3v4izP5oFA5lH%2FCKf9N9telgKS5PU4QWFebAIhAIBjG87L7uHuXetFLm0c4NkAcGU865ht4GrNbYGWZUwYKv8DCCMQABoMNjM3NDIzMTgzODA1Igyws8Poawxxg%2BCtptUq3ANfCk0b2tNOouyeYn9B9Qj6VAUlCVsVMysUGDrOHFurXP5oyz341eSOs6NzTbdtDnYbGLLcFWWp2lVtb9yYNLw9SAXb3teqw9Gf%2B0sz2EHz9VUlPBjZ2L1xTfAWFDCUKMSK0MOm%2F4NB7ORyok4FsjM%2F8bhQBXpSBrtFNq3QgFXI7aEp7Sw4vib90TscIOo%2BSA7ZOQHqJsHpJE01iymfJa3WEqMJKeqMtvW5%2BXpEN%2FonyP%2BoLdZQXePtsvjX3rX8zUxdltGYPXw75zOUrlytqzCXcArBEvhszrsncOpiXM8RmHyn7RxwNSh2igwIlqJDifVGnR2Bygvn%2F3MkeA0WWnnMN%2Bhwc9MjHB%2BD1ZBztdnDsnNWzurSh0R4YfrXSduMWexQKOW0ZeJdNTQhbG0GydMFEx6OZMD43BnbwMLbRyVkjv5RgBWRvU%2FxSVSLg52RMuH6kcyFej8KChjlczF5abeB68Nkaqke9tfFVVtck4OCrvTVAKN4cpWLMZ2NMqsrybjY6SLeDkS4QYPPqYlbD0iR%2BOnG5AYUFrgBdBHAHUL4sEzxKMgX4aLqGpr1hbJmoqyphVqxxi71Gb7lHLG2P3BwJr%2BH93VkY77zEgbuu19ftlmAStXZl2jR0ejEEjCYzdHDBjqkASb64FELdtkgpOfhNzmNVFPwokd%2BwxxGiudWLvPn7d0zYD1iM8zncCu0IdXd8yJsxOQQaNDjVcRxiSYrgTkThZNMKC7M5lTxTVkrDZYdQ2cxddw%2F58m1QhuPnEgj7RObpUWE2Q7O%2B724vBRqH8MinWydgg5gq2HOfWj8JXqgMQ%2F3xBHQjcZrqFkiGfLllCMGScFtCDPGDZh4FLYrIgVBBZCeILm5&X-Amz-Signature=d16ed7fb140b91183312edfa158ad8638931437655d847796989a078aa427611&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMRC7G5B%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDvrZyGcC3v4izP5oFA5lH%2FCKf9N9telgKS5PU4QWFebAIhAIBjG87L7uHuXetFLm0c4NkAcGU865ht4GrNbYGWZUwYKv8DCCMQABoMNjM3NDIzMTgzODA1Igyws8Poawxxg%2BCtptUq3ANfCk0b2tNOouyeYn9B9Qj6VAUlCVsVMysUGDrOHFurXP5oyz341eSOs6NzTbdtDnYbGLLcFWWp2lVtb9yYNLw9SAXb3teqw9Gf%2B0sz2EHz9VUlPBjZ2L1xTfAWFDCUKMSK0MOm%2F4NB7ORyok4FsjM%2F8bhQBXpSBrtFNq3QgFXI7aEp7Sw4vib90TscIOo%2BSA7ZOQHqJsHpJE01iymfJa3WEqMJKeqMtvW5%2BXpEN%2FonyP%2BoLdZQXePtsvjX3rX8zUxdltGYPXw75zOUrlytqzCXcArBEvhszrsncOpiXM8RmHyn7RxwNSh2igwIlqJDifVGnR2Bygvn%2F3MkeA0WWnnMN%2Bhwc9MjHB%2BD1ZBztdnDsnNWzurSh0R4YfrXSduMWexQKOW0ZeJdNTQhbG0GydMFEx6OZMD43BnbwMLbRyVkjv5RgBWRvU%2FxSVSLg52RMuH6kcyFej8KChjlczF5abeB68Nkaqke9tfFVVtck4OCrvTVAKN4cpWLMZ2NMqsrybjY6SLeDkS4QYPPqYlbD0iR%2BOnG5AYUFrgBdBHAHUL4sEzxKMgX4aLqGpr1hbJmoqyphVqxxi71Gb7lHLG2P3BwJr%2BH93VkY77zEgbuu19ftlmAStXZl2jR0ejEEjCYzdHDBjqkASb64FELdtkgpOfhNzmNVFPwokd%2BwxxGiudWLvPn7d0zYD1iM8zncCu0IdXd8yJsxOQQaNDjVcRxiSYrgTkThZNMKC7M5lTxTVkrDZYdQ2cxddw%2F58m1QhuPnEgj7RObpUWE2Q7O%2B724vBRqH8MinWydgg5gq2HOfWj8JXqgMQ%2F3xBHQjcZrqFkiGfLllCMGScFtCDPGDZh4FLYrIgVBBZCeILm5&X-Amz-Signature=b00212b248c0179752224babf91b1df7be78671b419003925013978cef77e35e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMRC7G5B%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDvrZyGcC3v4izP5oFA5lH%2FCKf9N9telgKS5PU4QWFebAIhAIBjG87L7uHuXetFLm0c4NkAcGU865ht4GrNbYGWZUwYKv8DCCMQABoMNjM3NDIzMTgzODA1Igyws8Poawxxg%2BCtptUq3ANfCk0b2tNOouyeYn9B9Qj6VAUlCVsVMysUGDrOHFurXP5oyz341eSOs6NzTbdtDnYbGLLcFWWp2lVtb9yYNLw9SAXb3teqw9Gf%2B0sz2EHz9VUlPBjZ2L1xTfAWFDCUKMSK0MOm%2F4NB7ORyok4FsjM%2F8bhQBXpSBrtFNq3QgFXI7aEp7Sw4vib90TscIOo%2BSA7ZOQHqJsHpJE01iymfJa3WEqMJKeqMtvW5%2BXpEN%2FonyP%2BoLdZQXePtsvjX3rX8zUxdltGYPXw75zOUrlytqzCXcArBEvhszrsncOpiXM8RmHyn7RxwNSh2igwIlqJDifVGnR2Bygvn%2F3MkeA0WWnnMN%2Bhwc9MjHB%2BD1ZBztdnDsnNWzurSh0R4YfrXSduMWexQKOW0ZeJdNTQhbG0GydMFEx6OZMD43BnbwMLbRyVkjv5RgBWRvU%2FxSVSLg52RMuH6kcyFej8KChjlczF5abeB68Nkaqke9tfFVVtck4OCrvTVAKN4cpWLMZ2NMqsrybjY6SLeDkS4QYPPqYlbD0iR%2BOnG5AYUFrgBdBHAHUL4sEzxKMgX4aLqGpr1hbJmoqyphVqxxi71Gb7lHLG2P3BwJr%2BH93VkY77zEgbuu19ftlmAStXZl2jR0ejEEjCYzdHDBjqkASb64FELdtkgpOfhNzmNVFPwokd%2BwxxGiudWLvPn7d0zYD1iM8zncCu0IdXd8yJsxOQQaNDjVcRxiSYrgTkThZNMKC7M5lTxTVkrDZYdQ2cxddw%2F58m1QhuPnEgj7RObpUWE2Q7O%2B724vBRqH8MinWydgg5gq2HOfWj8JXqgMQ%2F3xBHQjcZrqFkiGfLllCMGScFtCDPGDZh4FLYrIgVBBZCeILm5&X-Amz-Signature=2faf65aab6fabeaf5bb0c86c7fefbfa25db203cfdaea16a97a00b7393e79ef59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMRC7G5B%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDvrZyGcC3v4izP5oFA5lH%2FCKf9N9telgKS5PU4QWFebAIhAIBjG87L7uHuXetFLm0c4NkAcGU865ht4GrNbYGWZUwYKv8DCCMQABoMNjM3NDIzMTgzODA1Igyws8Poawxxg%2BCtptUq3ANfCk0b2tNOouyeYn9B9Qj6VAUlCVsVMysUGDrOHFurXP5oyz341eSOs6NzTbdtDnYbGLLcFWWp2lVtb9yYNLw9SAXb3teqw9Gf%2B0sz2EHz9VUlPBjZ2L1xTfAWFDCUKMSK0MOm%2F4NB7ORyok4FsjM%2F8bhQBXpSBrtFNq3QgFXI7aEp7Sw4vib90TscIOo%2BSA7ZOQHqJsHpJE01iymfJa3WEqMJKeqMtvW5%2BXpEN%2FonyP%2BoLdZQXePtsvjX3rX8zUxdltGYPXw75zOUrlytqzCXcArBEvhszrsncOpiXM8RmHyn7RxwNSh2igwIlqJDifVGnR2Bygvn%2F3MkeA0WWnnMN%2Bhwc9MjHB%2BD1ZBztdnDsnNWzurSh0R4YfrXSduMWexQKOW0ZeJdNTQhbG0GydMFEx6OZMD43BnbwMLbRyVkjv5RgBWRvU%2FxSVSLg52RMuH6kcyFej8KChjlczF5abeB68Nkaqke9tfFVVtck4OCrvTVAKN4cpWLMZ2NMqsrybjY6SLeDkS4QYPPqYlbD0iR%2BOnG5AYUFrgBdBHAHUL4sEzxKMgX4aLqGpr1hbJmoqyphVqxxi71Gb7lHLG2P3BwJr%2BH93VkY77zEgbuu19ftlmAStXZl2jR0ejEEjCYzdHDBjqkASb64FELdtkgpOfhNzmNVFPwokd%2BwxxGiudWLvPn7d0zYD1iM8zncCu0IdXd8yJsxOQQaNDjVcRxiSYrgTkThZNMKC7M5lTxTVkrDZYdQ2cxddw%2F58m1QhuPnEgj7RObpUWE2Q7O%2B724vBRqH8MinWydgg5gq2HOfWj8JXqgMQ%2F3xBHQjcZrqFkiGfLllCMGScFtCDPGDZh4FLYrIgVBBZCeILm5&X-Amz-Signature=f440ed4d900dd9fa3e5db23f8ac242ec7c8b02e133b0c525d02ab1c33cf3051f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMRC7G5B%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDvrZyGcC3v4izP5oFA5lH%2FCKf9N9telgKS5PU4QWFebAIhAIBjG87L7uHuXetFLm0c4NkAcGU865ht4GrNbYGWZUwYKv8DCCMQABoMNjM3NDIzMTgzODA1Igyws8Poawxxg%2BCtptUq3ANfCk0b2tNOouyeYn9B9Qj6VAUlCVsVMysUGDrOHFurXP5oyz341eSOs6NzTbdtDnYbGLLcFWWp2lVtb9yYNLw9SAXb3teqw9Gf%2B0sz2EHz9VUlPBjZ2L1xTfAWFDCUKMSK0MOm%2F4NB7ORyok4FsjM%2F8bhQBXpSBrtFNq3QgFXI7aEp7Sw4vib90TscIOo%2BSA7ZOQHqJsHpJE01iymfJa3WEqMJKeqMtvW5%2BXpEN%2FonyP%2BoLdZQXePtsvjX3rX8zUxdltGYPXw75zOUrlytqzCXcArBEvhszrsncOpiXM8RmHyn7RxwNSh2igwIlqJDifVGnR2Bygvn%2F3MkeA0WWnnMN%2Bhwc9MjHB%2BD1ZBztdnDsnNWzurSh0R4YfrXSduMWexQKOW0ZeJdNTQhbG0GydMFEx6OZMD43BnbwMLbRyVkjv5RgBWRvU%2FxSVSLg52RMuH6kcyFej8KChjlczF5abeB68Nkaqke9tfFVVtck4OCrvTVAKN4cpWLMZ2NMqsrybjY6SLeDkS4QYPPqYlbD0iR%2BOnG5AYUFrgBdBHAHUL4sEzxKMgX4aLqGpr1hbJmoqyphVqxxi71Gb7lHLG2P3BwJr%2BH93VkY77zEgbuu19ftlmAStXZl2jR0ejEEjCYzdHDBjqkASb64FELdtkgpOfhNzmNVFPwokd%2BwxxGiudWLvPn7d0zYD1iM8zncCu0IdXd8yJsxOQQaNDjVcRxiSYrgTkThZNMKC7M5lTxTVkrDZYdQ2cxddw%2F58m1QhuPnEgj7RObpUWE2Q7O%2B724vBRqH8MinWydgg5gq2HOfWj8JXqgMQ%2F3xBHQjcZrqFkiGfLllCMGScFtCDPGDZh4FLYrIgVBBZCeILm5&X-Amz-Signature=9a2189da4b74ad2d4f8d9c87b4dab8c80ea1b86a61b38d8a46e64002dbfa734f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMRC7G5B%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDvrZyGcC3v4izP5oFA5lH%2FCKf9N9telgKS5PU4QWFebAIhAIBjG87L7uHuXetFLm0c4NkAcGU865ht4GrNbYGWZUwYKv8DCCMQABoMNjM3NDIzMTgzODA1Igyws8Poawxxg%2BCtptUq3ANfCk0b2tNOouyeYn9B9Qj6VAUlCVsVMysUGDrOHFurXP5oyz341eSOs6NzTbdtDnYbGLLcFWWp2lVtb9yYNLw9SAXb3teqw9Gf%2B0sz2EHz9VUlPBjZ2L1xTfAWFDCUKMSK0MOm%2F4NB7ORyok4FsjM%2F8bhQBXpSBrtFNq3QgFXI7aEp7Sw4vib90TscIOo%2BSA7ZOQHqJsHpJE01iymfJa3WEqMJKeqMtvW5%2BXpEN%2FonyP%2BoLdZQXePtsvjX3rX8zUxdltGYPXw75zOUrlytqzCXcArBEvhszrsncOpiXM8RmHyn7RxwNSh2igwIlqJDifVGnR2Bygvn%2F3MkeA0WWnnMN%2Bhwc9MjHB%2BD1ZBztdnDsnNWzurSh0R4YfrXSduMWexQKOW0ZeJdNTQhbG0GydMFEx6OZMD43BnbwMLbRyVkjv5RgBWRvU%2FxSVSLg52RMuH6kcyFej8KChjlczF5abeB68Nkaqke9tfFVVtck4OCrvTVAKN4cpWLMZ2NMqsrybjY6SLeDkS4QYPPqYlbD0iR%2BOnG5AYUFrgBdBHAHUL4sEzxKMgX4aLqGpr1hbJmoqyphVqxxi71Gb7lHLG2P3BwJr%2BH93VkY77zEgbuu19ftlmAStXZl2jR0ejEEjCYzdHDBjqkASb64FELdtkgpOfhNzmNVFPwokd%2BwxxGiudWLvPn7d0zYD1iM8zncCu0IdXd8yJsxOQQaNDjVcRxiSYrgTkThZNMKC7M5lTxTVkrDZYdQ2cxddw%2F58m1QhuPnEgj7RObpUWE2Q7O%2B724vBRqH8MinWydgg5gq2HOfWj8JXqgMQ%2F3xBHQjcZrqFkiGfLllCMGScFtCDPGDZh4FLYrIgVBBZCeILm5&X-Amz-Signature=831cfcd5687da44d45cb3e326ee217150da4b48e7c15440404367295c632e113&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
