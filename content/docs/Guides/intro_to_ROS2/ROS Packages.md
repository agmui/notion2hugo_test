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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X2GTQ47%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T070734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCmG3dfG7Yan31Bjng66g4UfXAJN1%2BkEGCWWl1ua6WMOQIhAPnuIEoDSLrgTk6uPSnh%2FYiosaEpVHhSa%2FDbacTuM3SgKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzZmwwZ1x8%2FmjYCwgq3AN2XDrYUjvI%2FWOc%2B5L1bUoqSVZ8dVhs%2Bfq%2Bk7ScXxcFDbeHkFIulXDXD4qAg7M6LHSIjmeb7RBiLKB8dL7ffDe7ZwlDRljotHOYIisNo3LaCePg2f2srJG77y%2FnZiiqrN75c4YeQbAQljTHPj0wdvPQlEcpzrUXk0GS6MW%2FzuolTYg00QKfjaE39ssYAd3H95bINPKzNNvZsJiQKpi%2FfqUIscNGb%2F8TyyPtH9cB7aXKJFOuf4C%2FLC1tpYXZotssNY4IjCdv6suiWsdiyUngUAvzVJYXbfC57LdKljymN4GsIlfT%2FRk7dcUkHbuPCsgEDNfmYJimNYpL4SgVUie7EVd0njL6fng%2B5Xf8RmoFI%2BpImotCGH%2Bb467g5uFnVTeNANQw7rHxvnwNHKxD8Vi19SrUDwjghBvYgeNd4MFSC6MEQ%2B7yf2t7yl0PgdAcs5vTSoBpDnzgo%2BSf3W0TKViUHiz89YKDYYweSu6bmZyWiGUBMLcILC9zD2ufkI5O5h11oN%2FO9Hvwts1L6b3AiExRhbbRK5iBmC4c1L0hx0ELMHsYiz5wwQifzrom7aJobaNL0pLtckpvXWOGXmPsg7tKevVGdjCoK%2BPOzvWrsRpHQvd9gMY%2ByUPhuZISVv9q3zCkkee8BjqkAZ%2BkoFmBXR3LEBevL9IblRBfJv43P6taPtPt1pnlB%2BUmkOm9VdVTQ9vrV6kWxnHOaimER8ZEiuLFToJM%2B1P3J%2BCXHgQDMR3bvTf74hIP%2BlbW8wPZtTwWBm9XeGlyEEI7AFQR98JJ9vNsl6HErbXejW9MnAJ%2B%2BrV8XwkS%2FCmQpoJ3abKHahdVc2h4yLW3EfAHQcTTJ%2BgbK9sav8zJTWOoLnzQE9Hq&X-Amz-Signature=39cdd345bc1562ca42a83c021fd5fb75b113292b3ad588acac08eb12a488310e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X2GTQ47%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T070734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCmG3dfG7Yan31Bjng66g4UfXAJN1%2BkEGCWWl1ua6WMOQIhAPnuIEoDSLrgTk6uPSnh%2FYiosaEpVHhSa%2FDbacTuM3SgKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzZmwwZ1x8%2FmjYCwgq3AN2XDrYUjvI%2FWOc%2B5L1bUoqSVZ8dVhs%2Bfq%2Bk7ScXxcFDbeHkFIulXDXD4qAg7M6LHSIjmeb7RBiLKB8dL7ffDe7ZwlDRljotHOYIisNo3LaCePg2f2srJG77y%2FnZiiqrN75c4YeQbAQljTHPj0wdvPQlEcpzrUXk0GS6MW%2FzuolTYg00QKfjaE39ssYAd3H95bINPKzNNvZsJiQKpi%2FfqUIscNGb%2F8TyyPtH9cB7aXKJFOuf4C%2FLC1tpYXZotssNY4IjCdv6suiWsdiyUngUAvzVJYXbfC57LdKljymN4GsIlfT%2FRk7dcUkHbuPCsgEDNfmYJimNYpL4SgVUie7EVd0njL6fng%2B5Xf8RmoFI%2BpImotCGH%2Bb467g5uFnVTeNANQw7rHxvnwNHKxD8Vi19SrUDwjghBvYgeNd4MFSC6MEQ%2B7yf2t7yl0PgdAcs5vTSoBpDnzgo%2BSf3W0TKViUHiz89YKDYYweSu6bmZyWiGUBMLcILC9zD2ufkI5O5h11oN%2FO9Hvwts1L6b3AiExRhbbRK5iBmC4c1L0hx0ELMHsYiz5wwQifzrom7aJobaNL0pLtckpvXWOGXmPsg7tKevVGdjCoK%2BPOzvWrsRpHQvd9gMY%2ByUPhuZISVv9q3zCkkee8BjqkAZ%2BkoFmBXR3LEBevL9IblRBfJv43P6taPtPt1pnlB%2BUmkOm9VdVTQ9vrV6kWxnHOaimER8ZEiuLFToJM%2B1P3J%2BCXHgQDMR3bvTf74hIP%2BlbW8wPZtTwWBm9XeGlyEEI7AFQR98JJ9vNsl6HErbXejW9MnAJ%2B%2BrV8XwkS%2FCmQpoJ3abKHahdVc2h4yLW3EfAHQcTTJ%2BgbK9sav8zJTWOoLnzQE9Hq&X-Amz-Signature=be7f75e692c78a51b9106382d5a0568f9fcfe9b6650a8cc06db26746c5f6a6e8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X2GTQ47%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T070734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCmG3dfG7Yan31Bjng66g4UfXAJN1%2BkEGCWWl1ua6WMOQIhAPnuIEoDSLrgTk6uPSnh%2FYiosaEpVHhSa%2FDbacTuM3SgKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzZmwwZ1x8%2FmjYCwgq3AN2XDrYUjvI%2FWOc%2B5L1bUoqSVZ8dVhs%2Bfq%2Bk7ScXxcFDbeHkFIulXDXD4qAg7M6LHSIjmeb7RBiLKB8dL7ffDe7ZwlDRljotHOYIisNo3LaCePg2f2srJG77y%2FnZiiqrN75c4YeQbAQljTHPj0wdvPQlEcpzrUXk0GS6MW%2FzuolTYg00QKfjaE39ssYAd3H95bINPKzNNvZsJiQKpi%2FfqUIscNGb%2F8TyyPtH9cB7aXKJFOuf4C%2FLC1tpYXZotssNY4IjCdv6suiWsdiyUngUAvzVJYXbfC57LdKljymN4GsIlfT%2FRk7dcUkHbuPCsgEDNfmYJimNYpL4SgVUie7EVd0njL6fng%2B5Xf8RmoFI%2BpImotCGH%2Bb467g5uFnVTeNANQw7rHxvnwNHKxD8Vi19SrUDwjghBvYgeNd4MFSC6MEQ%2B7yf2t7yl0PgdAcs5vTSoBpDnzgo%2BSf3W0TKViUHiz89YKDYYweSu6bmZyWiGUBMLcILC9zD2ufkI5O5h11oN%2FO9Hvwts1L6b3AiExRhbbRK5iBmC4c1L0hx0ELMHsYiz5wwQifzrom7aJobaNL0pLtckpvXWOGXmPsg7tKevVGdjCoK%2BPOzvWrsRpHQvd9gMY%2ByUPhuZISVv9q3zCkkee8BjqkAZ%2BkoFmBXR3LEBevL9IblRBfJv43P6taPtPt1pnlB%2BUmkOm9VdVTQ9vrV6kWxnHOaimER8ZEiuLFToJM%2B1P3J%2BCXHgQDMR3bvTf74hIP%2BlbW8wPZtTwWBm9XeGlyEEI7AFQR98JJ9vNsl6HErbXejW9MnAJ%2B%2BrV8XwkS%2FCmQpoJ3abKHahdVc2h4yLW3EfAHQcTTJ%2BgbK9sav8zJTWOoLnzQE9Hq&X-Amz-Signature=983daa542c6ff5f54e046a93c1e981e5c27b0b3d5eb9f239579b5df0a1c36e60&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X2GTQ47%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T070734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCmG3dfG7Yan31Bjng66g4UfXAJN1%2BkEGCWWl1ua6WMOQIhAPnuIEoDSLrgTk6uPSnh%2FYiosaEpVHhSa%2FDbacTuM3SgKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzZmwwZ1x8%2FmjYCwgq3AN2XDrYUjvI%2FWOc%2B5L1bUoqSVZ8dVhs%2Bfq%2Bk7ScXxcFDbeHkFIulXDXD4qAg7M6LHSIjmeb7RBiLKB8dL7ffDe7ZwlDRljotHOYIisNo3LaCePg2f2srJG77y%2FnZiiqrN75c4YeQbAQljTHPj0wdvPQlEcpzrUXk0GS6MW%2FzuolTYg00QKfjaE39ssYAd3H95bINPKzNNvZsJiQKpi%2FfqUIscNGb%2F8TyyPtH9cB7aXKJFOuf4C%2FLC1tpYXZotssNY4IjCdv6suiWsdiyUngUAvzVJYXbfC57LdKljymN4GsIlfT%2FRk7dcUkHbuPCsgEDNfmYJimNYpL4SgVUie7EVd0njL6fng%2B5Xf8RmoFI%2BpImotCGH%2Bb467g5uFnVTeNANQw7rHxvnwNHKxD8Vi19SrUDwjghBvYgeNd4MFSC6MEQ%2B7yf2t7yl0PgdAcs5vTSoBpDnzgo%2BSf3W0TKViUHiz89YKDYYweSu6bmZyWiGUBMLcILC9zD2ufkI5O5h11oN%2FO9Hvwts1L6b3AiExRhbbRK5iBmC4c1L0hx0ELMHsYiz5wwQifzrom7aJobaNL0pLtckpvXWOGXmPsg7tKevVGdjCoK%2BPOzvWrsRpHQvd9gMY%2ByUPhuZISVv9q3zCkkee8BjqkAZ%2BkoFmBXR3LEBevL9IblRBfJv43P6taPtPt1pnlB%2BUmkOm9VdVTQ9vrV6kWxnHOaimER8ZEiuLFToJM%2B1P3J%2BCXHgQDMR3bvTf74hIP%2BlbW8wPZtTwWBm9XeGlyEEI7AFQR98JJ9vNsl6HErbXejW9MnAJ%2B%2BrV8XwkS%2FCmQpoJ3abKHahdVc2h4yLW3EfAHQcTTJ%2BgbK9sav8zJTWOoLnzQE9Hq&X-Amz-Signature=efe36f18ae68edb773c695210188a8d3535b1624a63e6ddb3fcd6dc8aa578141&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X2GTQ47%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T070734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCmG3dfG7Yan31Bjng66g4UfXAJN1%2BkEGCWWl1ua6WMOQIhAPnuIEoDSLrgTk6uPSnh%2FYiosaEpVHhSa%2FDbacTuM3SgKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzZmwwZ1x8%2FmjYCwgq3AN2XDrYUjvI%2FWOc%2B5L1bUoqSVZ8dVhs%2Bfq%2Bk7ScXxcFDbeHkFIulXDXD4qAg7M6LHSIjmeb7RBiLKB8dL7ffDe7ZwlDRljotHOYIisNo3LaCePg2f2srJG77y%2FnZiiqrN75c4YeQbAQljTHPj0wdvPQlEcpzrUXk0GS6MW%2FzuolTYg00QKfjaE39ssYAd3H95bINPKzNNvZsJiQKpi%2FfqUIscNGb%2F8TyyPtH9cB7aXKJFOuf4C%2FLC1tpYXZotssNY4IjCdv6suiWsdiyUngUAvzVJYXbfC57LdKljymN4GsIlfT%2FRk7dcUkHbuPCsgEDNfmYJimNYpL4SgVUie7EVd0njL6fng%2B5Xf8RmoFI%2BpImotCGH%2Bb467g5uFnVTeNANQw7rHxvnwNHKxD8Vi19SrUDwjghBvYgeNd4MFSC6MEQ%2B7yf2t7yl0PgdAcs5vTSoBpDnzgo%2BSf3W0TKViUHiz89YKDYYweSu6bmZyWiGUBMLcILC9zD2ufkI5O5h11oN%2FO9Hvwts1L6b3AiExRhbbRK5iBmC4c1L0hx0ELMHsYiz5wwQifzrom7aJobaNL0pLtckpvXWOGXmPsg7tKevVGdjCoK%2BPOzvWrsRpHQvd9gMY%2ByUPhuZISVv9q3zCkkee8BjqkAZ%2BkoFmBXR3LEBevL9IblRBfJv43P6taPtPt1pnlB%2BUmkOm9VdVTQ9vrV6kWxnHOaimER8ZEiuLFToJM%2B1P3J%2BCXHgQDMR3bvTf74hIP%2BlbW8wPZtTwWBm9XeGlyEEI7AFQR98JJ9vNsl6HErbXejW9MnAJ%2B%2BrV8XwkS%2FCmQpoJ3abKHahdVc2h4yLW3EfAHQcTTJ%2BgbK9sav8zJTWOoLnzQE9Hq&X-Amz-Signature=4e61ad0cd8e929b7cb55521dd8a01eb38a1142f1a304199f4e1c8782253bebf9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X2GTQ47%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T070734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCmG3dfG7Yan31Bjng66g4UfXAJN1%2BkEGCWWl1ua6WMOQIhAPnuIEoDSLrgTk6uPSnh%2FYiosaEpVHhSa%2FDbacTuM3SgKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzZmwwZ1x8%2FmjYCwgq3AN2XDrYUjvI%2FWOc%2B5L1bUoqSVZ8dVhs%2Bfq%2Bk7ScXxcFDbeHkFIulXDXD4qAg7M6LHSIjmeb7RBiLKB8dL7ffDe7ZwlDRljotHOYIisNo3LaCePg2f2srJG77y%2FnZiiqrN75c4YeQbAQljTHPj0wdvPQlEcpzrUXk0GS6MW%2FzuolTYg00QKfjaE39ssYAd3H95bINPKzNNvZsJiQKpi%2FfqUIscNGb%2F8TyyPtH9cB7aXKJFOuf4C%2FLC1tpYXZotssNY4IjCdv6suiWsdiyUngUAvzVJYXbfC57LdKljymN4GsIlfT%2FRk7dcUkHbuPCsgEDNfmYJimNYpL4SgVUie7EVd0njL6fng%2B5Xf8RmoFI%2BpImotCGH%2Bb467g5uFnVTeNANQw7rHxvnwNHKxD8Vi19SrUDwjghBvYgeNd4MFSC6MEQ%2B7yf2t7yl0PgdAcs5vTSoBpDnzgo%2BSf3W0TKViUHiz89YKDYYweSu6bmZyWiGUBMLcILC9zD2ufkI5O5h11oN%2FO9Hvwts1L6b3AiExRhbbRK5iBmC4c1L0hx0ELMHsYiz5wwQifzrom7aJobaNL0pLtckpvXWOGXmPsg7tKevVGdjCoK%2BPOzvWrsRpHQvd9gMY%2ByUPhuZISVv9q3zCkkee8BjqkAZ%2BkoFmBXR3LEBevL9IblRBfJv43P6taPtPt1pnlB%2BUmkOm9VdVTQ9vrV6kWxnHOaimER8ZEiuLFToJM%2B1P3J%2BCXHgQDMR3bvTf74hIP%2BlbW8wPZtTwWBm9XeGlyEEI7AFQR98JJ9vNsl6HErbXejW9MnAJ%2B%2BrV8XwkS%2FCmQpoJ3abKHahdVc2h4yLW3EfAHQcTTJ%2BgbK9sav8zJTWOoLnzQE9Hq&X-Amz-Signature=6a52da3e96d42d4ccfdb736d6f9bdf0126b9e804800aa4437b445e2c4cc53e4f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X2GTQ47%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T070734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCmG3dfG7Yan31Bjng66g4UfXAJN1%2BkEGCWWl1ua6WMOQIhAPnuIEoDSLrgTk6uPSnh%2FYiosaEpVHhSa%2FDbacTuM3SgKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzZmwwZ1x8%2FmjYCwgq3AN2XDrYUjvI%2FWOc%2B5L1bUoqSVZ8dVhs%2Bfq%2Bk7ScXxcFDbeHkFIulXDXD4qAg7M6LHSIjmeb7RBiLKB8dL7ffDe7ZwlDRljotHOYIisNo3LaCePg2f2srJG77y%2FnZiiqrN75c4YeQbAQljTHPj0wdvPQlEcpzrUXk0GS6MW%2FzuolTYg00QKfjaE39ssYAd3H95bINPKzNNvZsJiQKpi%2FfqUIscNGb%2F8TyyPtH9cB7aXKJFOuf4C%2FLC1tpYXZotssNY4IjCdv6suiWsdiyUngUAvzVJYXbfC57LdKljymN4GsIlfT%2FRk7dcUkHbuPCsgEDNfmYJimNYpL4SgVUie7EVd0njL6fng%2B5Xf8RmoFI%2BpImotCGH%2Bb467g5uFnVTeNANQw7rHxvnwNHKxD8Vi19SrUDwjghBvYgeNd4MFSC6MEQ%2B7yf2t7yl0PgdAcs5vTSoBpDnzgo%2BSf3W0TKViUHiz89YKDYYweSu6bmZyWiGUBMLcILC9zD2ufkI5O5h11oN%2FO9Hvwts1L6b3AiExRhbbRK5iBmC4c1L0hx0ELMHsYiz5wwQifzrom7aJobaNL0pLtckpvXWOGXmPsg7tKevVGdjCoK%2BPOzvWrsRpHQvd9gMY%2ByUPhuZISVv9q3zCkkee8BjqkAZ%2BkoFmBXR3LEBevL9IblRBfJv43P6taPtPt1pnlB%2BUmkOm9VdVTQ9vrV6kWxnHOaimER8ZEiuLFToJM%2B1P3J%2BCXHgQDMR3bvTf74hIP%2BlbW8wPZtTwWBm9XeGlyEEI7AFQR98JJ9vNsl6HErbXejW9MnAJ%2B%2BrV8XwkS%2FCmQpoJ3abKHahdVc2h4yLW3EfAHQcTTJ%2BgbK9sav8zJTWOoLnzQE9Hq&X-Amz-Signature=b984cadc00d6bb48aaff969de0f722c45aea597b3fbecb126984cb86660e6a85&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
