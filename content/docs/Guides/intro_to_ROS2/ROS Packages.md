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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K5BOQ6H%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIDqOASJLP1AmiL2GBIROC4S7cV1x%2Fz4ANP5FeyrcVNYyAiB3uZ0uDvZ9OlyMg7Xai4BOGidvuqvstDSuu7JdDmoOviqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsDpE%2BJOlty7E%2FAtnKtwDq0b97maQoebTl1sGYvcJqSH77%2FdYvASDi5LC2fkLWPNCoNNy%2BYCzT9pE7j8lsr0GVpKGZDLDX8Y8e4Ht6dyh3HeD5xw%2FV6YHcnYg%2BTz4VYHXmw%2Fo1l9Rt0HKJANIGaPFpsfuNiJUrRiRGawwgoUZRzP73liekjrr17BbnGSDUBA6lKbqozdOGtkYOrom71nHUxFfzFfVQ%2B62ZkOjjrTW3QGotW7TQmhKo54q2zsAO6f%2BI55euGWSDCu2NXNQbCKY9l95A6lbUdfG%2FKaXavVQZSXyI07l1I4iFtwzoxEJob8cUt6WMM7GjIrAtHg5EhC1MgbOV8104%2FjXi8Ikc5tVuUMVzYOZtfURMZ2IhwC7zX5czTgwNoty4DD3njA6Q2qltX52jXv47T5GP07wp8rfZThHWNRwxhZZQ0d%2B13ldpDmbrTvibXPq8Sbw8M%2ByTxPrQNrMFviyUPLMM%2BBJfemP8ljy8ngbONiF0ui8ZFZ5BqyU9ftxs0waOUIM9EBkhD2%2FXjnDakvsVHvZG%2F%2FeEcX52GBz%2BBnQvorxSiFUnQXjID2WbVU3vPP2GkuxlJrJ%2BkCEX8G8MvWFOEfVWLc0uid%2FZnvAaWGRLLufweGYc3xwfkHS0R48uwFFIzrPr68woKHOwAY6pgF0%2BAsaDj%2BKthC8LpjO%2Bic1kn%2Fa1lO9v6OCyg19No2aQ%2Bwtc4PrFRas%2F9qYFORvCM%2B8nZC95NlV8O1VJBNAmhbQquLcQdr%2Ba%2Fuj%2F7DgRSKfNK0HMfxlmZyWQ3boo9wo1AftcsosxplaGckB2a2ycJw9hYawiz1qeVKjQPV0Jy%2FNim62%2FS21k3TLqGk%2FIA4m13z1OXbwI%2BA7UyZov4xTBMcLnGE6xkrj&X-Amz-Signature=944d7df667ca768fe1bf8312772f528ed14b122024e7165244bdbc0862203f5e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K5BOQ6H%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIDqOASJLP1AmiL2GBIROC4S7cV1x%2Fz4ANP5FeyrcVNYyAiB3uZ0uDvZ9OlyMg7Xai4BOGidvuqvstDSuu7JdDmoOviqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsDpE%2BJOlty7E%2FAtnKtwDq0b97maQoebTl1sGYvcJqSH77%2FdYvASDi5LC2fkLWPNCoNNy%2BYCzT9pE7j8lsr0GVpKGZDLDX8Y8e4Ht6dyh3HeD5xw%2FV6YHcnYg%2BTz4VYHXmw%2Fo1l9Rt0HKJANIGaPFpsfuNiJUrRiRGawwgoUZRzP73liekjrr17BbnGSDUBA6lKbqozdOGtkYOrom71nHUxFfzFfVQ%2B62ZkOjjrTW3QGotW7TQmhKo54q2zsAO6f%2BI55euGWSDCu2NXNQbCKY9l95A6lbUdfG%2FKaXavVQZSXyI07l1I4iFtwzoxEJob8cUt6WMM7GjIrAtHg5EhC1MgbOV8104%2FjXi8Ikc5tVuUMVzYOZtfURMZ2IhwC7zX5czTgwNoty4DD3njA6Q2qltX52jXv47T5GP07wp8rfZThHWNRwxhZZQ0d%2B13ldpDmbrTvibXPq8Sbw8M%2ByTxPrQNrMFviyUPLMM%2BBJfemP8ljy8ngbONiF0ui8ZFZ5BqyU9ftxs0waOUIM9EBkhD2%2FXjnDakvsVHvZG%2F%2FeEcX52GBz%2BBnQvorxSiFUnQXjID2WbVU3vPP2GkuxlJrJ%2BkCEX8G8MvWFOEfVWLc0uid%2FZnvAaWGRLLufweGYc3xwfkHS0R48uwFFIzrPr68woKHOwAY6pgF0%2BAsaDj%2BKthC8LpjO%2Bic1kn%2Fa1lO9v6OCyg19No2aQ%2Bwtc4PrFRas%2F9qYFORvCM%2B8nZC95NlV8O1VJBNAmhbQquLcQdr%2Ba%2Fuj%2F7DgRSKfNK0HMfxlmZyWQ3boo9wo1AftcsosxplaGckB2a2ycJw9hYawiz1qeVKjQPV0Jy%2FNim62%2FS21k3TLqGk%2FIA4m13z1OXbwI%2BA7UyZov4xTBMcLnGE6xkrj&X-Amz-Signature=594383dc4a6d7d3740c5caac31cde065f60aee19ac36b92630649a1c8f81068b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K5BOQ6H%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIDqOASJLP1AmiL2GBIROC4S7cV1x%2Fz4ANP5FeyrcVNYyAiB3uZ0uDvZ9OlyMg7Xai4BOGidvuqvstDSuu7JdDmoOviqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsDpE%2BJOlty7E%2FAtnKtwDq0b97maQoebTl1sGYvcJqSH77%2FdYvASDi5LC2fkLWPNCoNNy%2BYCzT9pE7j8lsr0GVpKGZDLDX8Y8e4Ht6dyh3HeD5xw%2FV6YHcnYg%2BTz4VYHXmw%2Fo1l9Rt0HKJANIGaPFpsfuNiJUrRiRGawwgoUZRzP73liekjrr17BbnGSDUBA6lKbqozdOGtkYOrom71nHUxFfzFfVQ%2B62ZkOjjrTW3QGotW7TQmhKo54q2zsAO6f%2BI55euGWSDCu2NXNQbCKY9l95A6lbUdfG%2FKaXavVQZSXyI07l1I4iFtwzoxEJob8cUt6WMM7GjIrAtHg5EhC1MgbOV8104%2FjXi8Ikc5tVuUMVzYOZtfURMZ2IhwC7zX5czTgwNoty4DD3njA6Q2qltX52jXv47T5GP07wp8rfZThHWNRwxhZZQ0d%2B13ldpDmbrTvibXPq8Sbw8M%2ByTxPrQNrMFviyUPLMM%2BBJfemP8ljy8ngbONiF0ui8ZFZ5BqyU9ftxs0waOUIM9EBkhD2%2FXjnDakvsVHvZG%2F%2FeEcX52GBz%2BBnQvorxSiFUnQXjID2WbVU3vPP2GkuxlJrJ%2BkCEX8G8MvWFOEfVWLc0uid%2FZnvAaWGRLLufweGYc3xwfkHS0R48uwFFIzrPr68woKHOwAY6pgF0%2BAsaDj%2BKthC8LpjO%2Bic1kn%2Fa1lO9v6OCyg19No2aQ%2Bwtc4PrFRas%2F9qYFORvCM%2B8nZC95NlV8O1VJBNAmhbQquLcQdr%2Ba%2Fuj%2F7DgRSKfNK0HMfxlmZyWQ3boo9wo1AftcsosxplaGckB2a2ycJw9hYawiz1qeVKjQPV0Jy%2FNim62%2FS21k3TLqGk%2FIA4m13z1OXbwI%2BA7UyZov4xTBMcLnGE6xkrj&X-Amz-Signature=d0e55e3d692e322fb1e6c2294c16807ca9bb602f7b1f0d37c3f0a495faba1cd4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K5BOQ6H%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIDqOASJLP1AmiL2GBIROC4S7cV1x%2Fz4ANP5FeyrcVNYyAiB3uZ0uDvZ9OlyMg7Xai4BOGidvuqvstDSuu7JdDmoOviqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsDpE%2BJOlty7E%2FAtnKtwDq0b97maQoebTl1sGYvcJqSH77%2FdYvASDi5LC2fkLWPNCoNNy%2BYCzT9pE7j8lsr0GVpKGZDLDX8Y8e4Ht6dyh3HeD5xw%2FV6YHcnYg%2BTz4VYHXmw%2Fo1l9Rt0HKJANIGaPFpsfuNiJUrRiRGawwgoUZRzP73liekjrr17BbnGSDUBA6lKbqozdOGtkYOrom71nHUxFfzFfVQ%2B62ZkOjjrTW3QGotW7TQmhKo54q2zsAO6f%2BI55euGWSDCu2NXNQbCKY9l95A6lbUdfG%2FKaXavVQZSXyI07l1I4iFtwzoxEJob8cUt6WMM7GjIrAtHg5EhC1MgbOV8104%2FjXi8Ikc5tVuUMVzYOZtfURMZ2IhwC7zX5czTgwNoty4DD3njA6Q2qltX52jXv47T5GP07wp8rfZThHWNRwxhZZQ0d%2B13ldpDmbrTvibXPq8Sbw8M%2ByTxPrQNrMFviyUPLMM%2BBJfemP8ljy8ngbONiF0ui8ZFZ5BqyU9ftxs0waOUIM9EBkhD2%2FXjnDakvsVHvZG%2F%2FeEcX52GBz%2BBnQvorxSiFUnQXjID2WbVU3vPP2GkuxlJrJ%2BkCEX8G8MvWFOEfVWLc0uid%2FZnvAaWGRLLufweGYc3xwfkHS0R48uwFFIzrPr68woKHOwAY6pgF0%2BAsaDj%2BKthC8LpjO%2Bic1kn%2Fa1lO9v6OCyg19No2aQ%2Bwtc4PrFRas%2F9qYFORvCM%2B8nZC95NlV8O1VJBNAmhbQquLcQdr%2Ba%2Fuj%2F7DgRSKfNK0HMfxlmZyWQ3boo9wo1AftcsosxplaGckB2a2ycJw9hYawiz1qeVKjQPV0Jy%2FNim62%2FS21k3TLqGk%2FIA4m13z1OXbwI%2BA7UyZov4xTBMcLnGE6xkrj&X-Amz-Signature=60d5d935994e276d0c6cd56b747d244895d23141e16c6a296ccdcadc66e80494&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K5BOQ6H%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIDqOASJLP1AmiL2GBIROC4S7cV1x%2Fz4ANP5FeyrcVNYyAiB3uZ0uDvZ9OlyMg7Xai4BOGidvuqvstDSuu7JdDmoOviqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsDpE%2BJOlty7E%2FAtnKtwDq0b97maQoebTl1sGYvcJqSH77%2FdYvASDi5LC2fkLWPNCoNNy%2BYCzT9pE7j8lsr0GVpKGZDLDX8Y8e4Ht6dyh3HeD5xw%2FV6YHcnYg%2BTz4VYHXmw%2Fo1l9Rt0HKJANIGaPFpsfuNiJUrRiRGawwgoUZRzP73liekjrr17BbnGSDUBA6lKbqozdOGtkYOrom71nHUxFfzFfVQ%2B62ZkOjjrTW3QGotW7TQmhKo54q2zsAO6f%2BI55euGWSDCu2NXNQbCKY9l95A6lbUdfG%2FKaXavVQZSXyI07l1I4iFtwzoxEJob8cUt6WMM7GjIrAtHg5EhC1MgbOV8104%2FjXi8Ikc5tVuUMVzYOZtfURMZ2IhwC7zX5czTgwNoty4DD3njA6Q2qltX52jXv47T5GP07wp8rfZThHWNRwxhZZQ0d%2B13ldpDmbrTvibXPq8Sbw8M%2ByTxPrQNrMFviyUPLMM%2BBJfemP8ljy8ngbONiF0ui8ZFZ5BqyU9ftxs0waOUIM9EBkhD2%2FXjnDakvsVHvZG%2F%2FeEcX52GBz%2BBnQvorxSiFUnQXjID2WbVU3vPP2GkuxlJrJ%2BkCEX8G8MvWFOEfVWLc0uid%2FZnvAaWGRLLufweGYc3xwfkHS0R48uwFFIzrPr68woKHOwAY6pgF0%2BAsaDj%2BKthC8LpjO%2Bic1kn%2Fa1lO9v6OCyg19No2aQ%2Bwtc4PrFRas%2F9qYFORvCM%2B8nZC95NlV8O1VJBNAmhbQquLcQdr%2Ba%2Fuj%2F7DgRSKfNK0HMfxlmZyWQ3boo9wo1AftcsosxplaGckB2a2ycJw9hYawiz1qeVKjQPV0Jy%2FNim62%2FS21k3TLqGk%2FIA4m13z1OXbwI%2BA7UyZov4xTBMcLnGE6xkrj&X-Amz-Signature=d56a9025808891bfb750194523ce30b82f671b220ca264cd0b4312466c2d4729&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K5BOQ6H%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIDqOASJLP1AmiL2GBIROC4S7cV1x%2Fz4ANP5FeyrcVNYyAiB3uZ0uDvZ9OlyMg7Xai4BOGidvuqvstDSuu7JdDmoOviqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsDpE%2BJOlty7E%2FAtnKtwDq0b97maQoebTl1sGYvcJqSH77%2FdYvASDi5LC2fkLWPNCoNNy%2BYCzT9pE7j8lsr0GVpKGZDLDX8Y8e4Ht6dyh3HeD5xw%2FV6YHcnYg%2BTz4VYHXmw%2Fo1l9Rt0HKJANIGaPFpsfuNiJUrRiRGawwgoUZRzP73liekjrr17BbnGSDUBA6lKbqozdOGtkYOrom71nHUxFfzFfVQ%2B62ZkOjjrTW3QGotW7TQmhKo54q2zsAO6f%2BI55euGWSDCu2NXNQbCKY9l95A6lbUdfG%2FKaXavVQZSXyI07l1I4iFtwzoxEJob8cUt6WMM7GjIrAtHg5EhC1MgbOV8104%2FjXi8Ikc5tVuUMVzYOZtfURMZ2IhwC7zX5czTgwNoty4DD3njA6Q2qltX52jXv47T5GP07wp8rfZThHWNRwxhZZQ0d%2B13ldpDmbrTvibXPq8Sbw8M%2ByTxPrQNrMFviyUPLMM%2BBJfemP8ljy8ngbONiF0ui8ZFZ5BqyU9ftxs0waOUIM9EBkhD2%2FXjnDakvsVHvZG%2F%2FeEcX52GBz%2BBnQvorxSiFUnQXjID2WbVU3vPP2GkuxlJrJ%2BkCEX8G8MvWFOEfVWLc0uid%2FZnvAaWGRLLufweGYc3xwfkHS0R48uwFFIzrPr68woKHOwAY6pgF0%2BAsaDj%2BKthC8LpjO%2Bic1kn%2Fa1lO9v6OCyg19No2aQ%2Bwtc4PrFRas%2F9qYFORvCM%2B8nZC95NlV8O1VJBNAmhbQquLcQdr%2Ba%2Fuj%2F7DgRSKfNK0HMfxlmZyWQ3boo9wo1AftcsosxplaGckB2a2ycJw9hYawiz1qeVKjQPV0Jy%2FNim62%2FS21k3TLqGk%2FIA4m13z1OXbwI%2BA7UyZov4xTBMcLnGE6xkrj&X-Amz-Signature=0d744df5e2e36dec53eba98c6fd917f7f25942b24f091a005fc755edd149c5a6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K5BOQ6H%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIDqOASJLP1AmiL2GBIROC4S7cV1x%2Fz4ANP5FeyrcVNYyAiB3uZ0uDvZ9OlyMg7Xai4BOGidvuqvstDSuu7JdDmoOviqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsDpE%2BJOlty7E%2FAtnKtwDq0b97maQoebTl1sGYvcJqSH77%2FdYvASDi5LC2fkLWPNCoNNy%2BYCzT9pE7j8lsr0GVpKGZDLDX8Y8e4Ht6dyh3HeD5xw%2FV6YHcnYg%2BTz4VYHXmw%2Fo1l9Rt0HKJANIGaPFpsfuNiJUrRiRGawwgoUZRzP73liekjrr17BbnGSDUBA6lKbqozdOGtkYOrom71nHUxFfzFfVQ%2B62ZkOjjrTW3QGotW7TQmhKo54q2zsAO6f%2BI55euGWSDCu2NXNQbCKY9l95A6lbUdfG%2FKaXavVQZSXyI07l1I4iFtwzoxEJob8cUt6WMM7GjIrAtHg5EhC1MgbOV8104%2FjXi8Ikc5tVuUMVzYOZtfURMZ2IhwC7zX5czTgwNoty4DD3njA6Q2qltX52jXv47T5GP07wp8rfZThHWNRwxhZZQ0d%2B13ldpDmbrTvibXPq8Sbw8M%2ByTxPrQNrMFviyUPLMM%2BBJfemP8ljy8ngbONiF0ui8ZFZ5BqyU9ftxs0waOUIM9EBkhD2%2FXjnDakvsVHvZG%2F%2FeEcX52GBz%2BBnQvorxSiFUnQXjID2WbVU3vPP2GkuxlJrJ%2BkCEX8G8MvWFOEfVWLc0uid%2FZnvAaWGRLLufweGYc3xwfkHS0R48uwFFIzrPr68woKHOwAY6pgF0%2BAsaDj%2BKthC8LpjO%2Bic1kn%2Fa1lO9v6OCyg19No2aQ%2Bwtc4PrFRas%2F9qYFORvCM%2B8nZC95NlV8O1VJBNAmhbQquLcQdr%2Ba%2Fuj%2F7DgRSKfNK0HMfxlmZyWQ3boo9wo1AftcsosxplaGckB2a2ycJw9hYawiz1qeVKjQPV0Jy%2FNim62%2FS21k3TLqGk%2FIA4m13z1OXbwI%2BA7UyZov4xTBMcLnGE6xkrj&X-Amz-Signature=caf0291a9dbf2ba1179f9e88d2829c905168d065a43228d09ef52d24d69f913c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
