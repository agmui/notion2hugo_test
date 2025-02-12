---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-01-12T15:12:00.000Z"
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

They consist of a folder, `package.xml` file, and source code

```python
      cpp_package_1/
		      ... imagine much code files here ..
          package.xml
```

</details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVI3J2X7%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSssQsQOwSsfRpDRXSEVazJuIW8ute7TDCCHGVBrOnQAiBVX6sSQBwiASyjJV8N126rT%2BE80Rn%2FxAHsmuPWzqDRZSqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRTwiuUO2pzt7AFx7KtwDoZ1TiWJ3CsffLyctaZu13td%2BZG08ukA16fp5njQnZq1vKS0cZtfnPZVpYhih0%2FYx4GRPJIZQULJ%2F2hCXakamQ8bzI0vp0cUhRXOhQ4x3cnyXIQoz%2BT3CvA9LGoNdEXSHA6j%2F3HjlyPaoqqH5KQ6IybL%2FPZncLqcTO98PBKiBcAY5XT6aVUiWYay559%2BC26iyNPjQ3Zqor3Gl2PxafCs0Y3OR562PkkeThc7TcJ9ulV49E4kuFEEWptRfgXpyehOnzMxKcZsvNgMXbDnqP7nNjih67d4W5eHE%2FL7j8D4MrVCmvxKpoTc1pXEzV1JfrZUg3%2F3uYHroEXoi9Ggjhf6GCyxrAIxmKGDxsjXGoHOzkg9RapowrK9uUAbR8tu5IIqS99iYSv1Sk%2Bhxe0SjwrZUS8flPfDobYQJWzWhql3EbCykKVSQiWMoIQz%2B9WrEV%2Bw%2FO%2FR20aM%2BoOEwgo5uSZXO0JebxjhuKtfJw2r1Mmsu2jitFwPp%2F61y2iRierm6AIupGqnuxEPoj5KdUSJr4hhFqN3JyvhTKE2JYp9hGeRLxUrSCFlrLNGgQtdgyAXCESeUKyF%2BVpnX%2FJYGXI7lRlZQlu354GDe90Nq815E7ple3nn9lNpS6gyzRTvcYq4w%2FY6xvQY6pgGxIQN3T6CzdALslxGItR%2FJcpDbAhKEJ8GlOYceuh3l3bMDOEXbwiNRyq5g7cLKzNKm5DCQ2stzKzslnQnM6E6rqoys4mrMN9farVyPZV5zak0R9A5Pg4M3wZr4NrF9pGgniCARecLlIeq7lFqhQG4v7y8FBKmFUB5OaQAg9oelGUujnSUhGDvxbzCwi43zxM1G%2FHW4RU12Z5751VnesSOXqeuAhO8r&X-Amz-Signature=e8fa87d5c497e84361bb1ce4dc688c63c9aeffa4744c91e0b02f7105e54e2a49&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVI3J2X7%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSssQsQOwSsfRpDRXSEVazJuIW8ute7TDCCHGVBrOnQAiBVX6sSQBwiASyjJV8N126rT%2BE80Rn%2FxAHsmuPWzqDRZSqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRTwiuUO2pzt7AFx7KtwDoZ1TiWJ3CsffLyctaZu13td%2BZG08ukA16fp5njQnZq1vKS0cZtfnPZVpYhih0%2FYx4GRPJIZQULJ%2F2hCXakamQ8bzI0vp0cUhRXOhQ4x3cnyXIQoz%2BT3CvA9LGoNdEXSHA6j%2F3HjlyPaoqqH5KQ6IybL%2FPZncLqcTO98PBKiBcAY5XT6aVUiWYay559%2BC26iyNPjQ3Zqor3Gl2PxafCs0Y3OR562PkkeThc7TcJ9ulV49E4kuFEEWptRfgXpyehOnzMxKcZsvNgMXbDnqP7nNjih67d4W5eHE%2FL7j8D4MrVCmvxKpoTc1pXEzV1JfrZUg3%2F3uYHroEXoi9Ggjhf6GCyxrAIxmKGDxsjXGoHOzkg9RapowrK9uUAbR8tu5IIqS99iYSv1Sk%2Bhxe0SjwrZUS8flPfDobYQJWzWhql3EbCykKVSQiWMoIQz%2B9WrEV%2Bw%2FO%2FR20aM%2BoOEwgo5uSZXO0JebxjhuKtfJw2r1Mmsu2jitFwPp%2F61y2iRierm6AIupGqnuxEPoj5KdUSJr4hhFqN3JyvhTKE2JYp9hGeRLxUrSCFlrLNGgQtdgyAXCESeUKyF%2BVpnX%2FJYGXI7lRlZQlu354GDe90Nq815E7ple3nn9lNpS6gyzRTvcYq4w%2FY6xvQY6pgGxIQN3T6CzdALslxGItR%2FJcpDbAhKEJ8GlOYceuh3l3bMDOEXbwiNRyq5g7cLKzNKm5DCQ2stzKzslnQnM6E6rqoys4mrMN9farVyPZV5zak0R9A5Pg4M3wZr4NrF9pGgniCARecLlIeq7lFqhQG4v7y8FBKmFUB5OaQAg9oelGUujnSUhGDvxbzCwi43zxM1G%2FHW4RU12Z5751VnesSOXqeuAhO8r&X-Amz-Signature=06df21063f424fe6a3e5b31972d8746d22e4507ad29c044ab3261e324da05cc1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVI3J2X7%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSssQsQOwSsfRpDRXSEVazJuIW8ute7TDCCHGVBrOnQAiBVX6sSQBwiASyjJV8N126rT%2BE80Rn%2FxAHsmuPWzqDRZSqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRTwiuUO2pzt7AFx7KtwDoZ1TiWJ3CsffLyctaZu13td%2BZG08ukA16fp5njQnZq1vKS0cZtfnPZVpYhih0%2FYx4GRPJIZQULJ%2F2hCXakamQ8bzI0vp0cUhRXOhQ4x3cnyXIQoz%2BT3CvA9LGoNdEXSHA6j%2F3HjlyPaoqqH5KQ6IybL%2FPZncLqcTO98PBKiBcAY5XT6aVUiWYay559%2BC26iyNPjQ3Zqor3Gl2PxafCs0Y3OR562PkkeThc7TcJ9ulV49E4kuFEEWptRfgXpyehOnzMxKcZsvNgMXbDnqP7nNjih67d4W5eHE%2FL7j8D4MrVCmvxKpoTc1pXEzV1JfrZUg3%2F3uYHroEXoi9Ggjhf6GCyxrAIxmKGDxsjXGoHOzkg9RapowrK9uUAbR8tu5IIqS99iYSv1Sk%2Bhxe0SjwrZUS8flPfDobYQJWzWhql3EbCykKVSQiWMoIQz%2B9WrEV%2Bw%2FO%2FR20aM%2BoOEwgo5uSZXO0JebxjhuKtfJw2r1Mmsu2jitFwPp%2F61y2iRierm6AIupGqnuxEPoj5KdUSJr4hhFqN3JyvhTKE2JYp9hGeRLxUrSCFlrLNGgQtdgyAXCESeUKyF%2BVpnX%2FJYGXI7lRlZQlu354GDe90Nq815E7ple3nn9lNpS6gyzRTvcYq4w%2FY6xvQY6pgGxIQN3T6CzdALslxGItR%2FJcpDbAhKEJ8GlOYceuh3l3bMDOEXbwiNRyq5g7cLKzNKm5DCQ2stzKzslnQnM6E6rqoys4mrMN9farVyPZV5zak0R9A5Pg4M3wZr4NrF9pGgniCARecLlIeq7lFqhQG4v7y8FBKmFUB5OaQAg9oelGUujnSUhGDvxbzCwi43zxM1G%2FHW4RU12Z5751VnesSOXqeuAhO8r&X-Amz-Signature=e1ad0a724f6e8087d9eee22c5428bc04a3cfedb339230ac5dac461ea87c981e1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVI3J2X7%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSssQsQOwSsfRpDRXSEVazJuIW8ute7TDCCHGVBrOnQAiBVX6sSQBwiASyjJV8N126rT%2BE80Rn%2FxAHsmuPWzqDRZSqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRTwiuUO2pzt7AFx7KtwDoZ1TiWJ3CsffLyctaZu13td%2BZG08ukA16fp5njQnZq1vKS0cZtfnPZVpYhih0%2FYx4GRPJIZQULJ%2F2hCXakamQ8bzI0vp0cUhRXOhQ4x3cnyXIQoz%2BT3CvA9LGoNdEXSHA6j%2F3HjlyPaoqqH5KQ6IybL%2FPZncLqcTO98PBKiBcAY5XT6aVUiWYay559%2BC26iyNPjQ3Zqor3Gl2PxafCs0Y3OR562PkkeThc7TcJ9ulV49E4kuFEEWptRfgXpyehOnzMxKcZsvNgMXbDnqP7nNjih67d4W5eHE%2FL7j8D4MrVCmvxKpoTc1pXEzV1JfrZUg3%2F3uYHroEXoi9Ggjhf6GCyxrAIxmKGDxsjXGoHOzkg9RapowrK9uUAbR8tu5IIqS99iYSv1Sk%2Bhxe0SjwrZUS8flPfDobYQJWzWhql3EbCykKVSQiWMoIQz%2B9WrEV%2Bw%2FO%2FR20aM%2BoOEwgo5uSZXO0JebxjhuKtfJw2r1Mmsu2jitFwPp%2F61y2iRierm6AIupGqnuxEPoj5KdUSJr4hhFqN3JyvhTKE2JYp9hGeRLxUrSCFlrLNGgQtdgyAXCESeUKyF%2BVpnX%2FJYGXI7lRlZQlu354GDe90Nq815E7ple3nn9lNpS6gyzRTvcYq4w%2FY6xvQY6pgGxIQN3T6CzdALslxGItR%2FJcpDbAhKEJ8GlOYceuh3l3bMDOEXbwiNRyq5g7cLKzNKm5DCQ2stzKzslnQnM6E6rqoys4mrMN9farVyPZV5zak0R9A5Pg4M3wZr4NrF9pGgniCARecLlIeq7lFqhQG4v7y8FBKmFUB5OaQAg9oelGUujnSUhGDvxbzCwi43zxM1G%2FHW4RU12Z5751VnesSOXqeuAhO8r&X-Amz-Signature=4af4b00748ef5303ce2356f975c59c5e2aba0b6794dc6b8275f6ccf0c5eea976&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVI3J2X7%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSssQsQOwSsfRpDRXSEVazJuIW8ute7TDCCHGVBrOnQAiBVX6sSQBwiASyjJV8N126rT%2BE80Rn%2FxAHsmuPWzqDRZSqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRTwiuUO2pzt7AFx7KtwDoZ1TiWJ3CsffLyctaZu13td%2BZG08ukA16fp5njQnZq1vKS0cZtfnPZVpYhih0%2FYx4GRPJIZQULJ%2F2hCXakamQ8bzI0vp0cUhRXOhQ4x3cnyXIQoz%2BT3CvA9LGoNdEXSHA6j%2F3HjlyPaoqqH5KQ6IybL%2FPZncLqcTO98PBKiBcAY5XT6aVUiWYay559%2BC26iyNPjQ3Zqor3Gl2PxafCs0Y3OR562PkkeThc7TcJ9ulV49E4kuFEEWptRfgXpyehOnzMxKcZsvNgMXbDnqP7nNjih67d4W5eHE%2FL7j8D4MrVCmvxKpoTc1pXEzV1JfrZUg3%2F3uYHroEXoi9Ggjhf6GCyxrAIxmKGDxsjXGoHOzkg9RapowrK9uUAbR8tu5IIqS99iYSv1Sk%2Bhxe0SjwrZUS8flPfDobYQJWzWhql3EbCykKVSQiWMoIQz%2B9WrEV%2Bw%2FO%2FR20aM%2BoOEwgo5uSZXO0JebxjhuKtfJw2r1Mmsu2jitFwPp%2F61y2iRierm6AIupGqnuxEPoj5KdUSJr4hhFqN3JyvhTKE2JYp9hGeRLxUrSCFlrLNGgQtdgyAXCESeUKyF%2BVpnX%2FJYGXI7lRlZQlu354GDe90Nq815E7ple3nn9lNpS6gyzRTvcYq4w%2FY6xvQY6pgGxIQN3T6CzdALslxGItR%2FJcpDbAhKEJ8GlOYceuh3l3bMDOEXbwiNRyq5g7cLKzNKm5DCQ2stzKzslnQnM6E6rqoys4mrMN9farVyPZV5zak0R9A5Pg4M3wZr4NrF9pGgniCARecLlIeq7lFqhQG4v7y8FBKmFUB5OaQAg9oelGUujnSUhGDvxbzCwi43zxM1G%2FHW4RU12Z5751VnesSOXqeuAhO8r&X-Amz-Signature=7ce41e52ad9fa86f9f825610410c8fa6377cdbe17079e3c2001a10a515fcbfad&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVI3J2X7%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSssQsQOwSsfRpDRXSEVazJuIW8ute7TDCCHGVBrOnQAiBVX6sSQBwiASyjJV8N126rT%2BE80Rn%2FxAHsmuPWzqDRZSqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRTwiuUO2pzt7AFx7KtwDoZ1TiWJ3CsffLyctaZu13td%2BZG08ukA16fp5njQnZq1vKS0cZtfnPZVpYhih0%2FYx4GRPJIZQULJ%2F2hCXakamQ8bzI0vp0cUhRXOhQ4x3cnyXIQoz%2BT3CvA9LGoNdEXSHA6j%2F3HjlyPaoqqH5KQ6IybL%2FPZncLqcTO98PBKiBcAY5XT6aVUiWYay559%2BC26iyNPjQ3Zqor3Gl2PxafCs0Y3OR562PkkeThc7TcJ9ulV49E4kuFEEWptRfgXpyehOnzMxKcZsvNgMXbDnqP7nNjih67d4W5eHE%2FL7j8D4MrVCmvxKpoTc1pXEzV1JfrZUg3%2F3uYHroEXoi9Ggjhf6GCyxrAIxmKGDxsjXGoHOzkg9RapowrK9uUAbR8tu5IIqS99iYSv1Sk%2Bhxe0SjwrZUS8flPfDobYQJWzWhql3EbCykKVSQiWMoIQz%2B9WrEV%2Bw%2FO%2FR20aM%2BoOEwgo5uSZXO0JebxjhuKtfJw2r1Mmsu2jitFwPp%2F61y2iRierm6AIupGqnuxEPoj5KdUSJr4hhFqN3JyvhTKE2JYp9hGeRLxUrSCFlrLNGgQtdgyAXCESeUKyF%2BVpnX%2FJYGXI7lRlZQlu354GDe90Nq815E7ple3nn9lNpS6gyzRTvcYq4w%2FY6xvQY6pgGxIQN3T6CzdALslxGItR%2FJcpDbAhKEJ8GlOYceuh3l3bMDOEXbwiNRyq5g7cLKzNKm5DCQ2stzKzslnQnM6E6rqoys4mrMN9farVyPZV5zak0R9A5Pg4M3wZr4NrF9pGgniCARecLlIeq7lFqhQG4v7y8FBKmFUB5OaQAg9oelGUujnSUhGDvxbzCwi43zxM1G%2FHW4RU12Z5751VnesSOXqeuAhO8r&X-Amz-Signature=47bb0ebaf2ad44b9d87ee6a9e163e0d83e2865bf886ae9df5f52148bcb388e7d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVI3J2X7%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSssQsQOwSsfRpDRXSEVazJuIW8ute7TDCCHGVBrOnQAiBVX6sSQBwiASyjJV8N126rT%2BE80Rn%2FxAHsmuPWzqDRZSqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRTwiuUO2pzt7AFx7KtwDoZ1TiWJ3CsffLyctaZu13td%2BZG08ukA16fp5njQnZq1vKS0cZtfnPZVpYhih0%2FYx4GRPJIZQULJ%2F2hCXakamQ8bzI0vp0cUhRXOhQ4x3cnyXIQoz%2BT3CvA9LGoNdEXSHA6j%2F3HjlyPaoqqH5KQ6IybL%2FPZncLqcTO98PBKiBcAY5XT6aVUiWYay559%2BC26iyNPjQ3Zqor3Gl2PxafCs0Y3OR562PkkeThc7TcJ9ulV49E4kuFEEWptRfgXpyehOnzMxKcZsvNgMXbDnqP7nNjih67d4W5eHE%2FL7j8D4MrVCmvxKpoTc1pXEzV1JfrZUg3%2F3uYHroEXoi9Ggjhf6GCyxrAIxmKGDxsjXGoHOzkg9RapowrK9uUAbR8tu5IIqS99iYSv1Sk%2Bhxe0SjwrZUS8flPfDobYQJWzWhql3EbCykKVSQiWMoIQz%2B9WrEV%2Bw%2FO%2FR20aM%2BoOEwgo5uSZXO0JebxjhuKtfJw2r1Mmsu2jitFwPp%2F61y2iRierm6AIupGqnuxEPoj5KdUSJr4hhFqN3JyvhTKE2JYp9hGeRLxUrSCFlrLNGgQtdgyAXCESeUKyF%2BVpnX%2FJYGXI7lRlZQlu354GDe90Nq815E7ple3nn9lNpS6gyzRTvcYq4w%2FY6xvQY6pgGxIQN3T6CzdALslxGItR%2FJcpDbAhKEJ8GlOYceuh3l3bMDOEXbwiNRyq5g7cLKzNKm5DCQ2stzKzslnQnM6E6rqoys4mrMN9farVyPZV5zak0R9A5Pg4M3wZr4NrF9pGgniCARecLlIeq7lFqhQG4v7y8FBKmFUB5OaQAg9oelGUujnSUhGDvxbzCwi43zxM1G%2FHW4RU12Z5751VnesSOXqeuAhO8r&X-Amz-Signature=dffc9c514d6e07a0b8bae170f2a112a204778b3c37c3ab9e2adc6db5821708d7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
