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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTAU2UDW%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCG4Rxwn7q%2FC%2FzzYI5hQ8UvnV%2F6FcSlfg%2BGtCxSVSO47wIhAKt%2F%2B7%2BWLRMay1aEXwH7X11n7GlafFDvfWBEsGWoAGM1Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxTxazegsS1H9Wq7CIq3ANw9Oz4vES4bkABgZ2Rwq9vxzSetfjEEL7qdGwcF449ORJGNniMjM9ZF1RCzO9LAfO6tjcNb6zcc0HTzav2gdEzclt%2B%2B6SSVvOzV90ipuNi%2FnlGAFVMWhATKa5DrDCF1GcIWvCBnGRJ7hcJ5XW1OgvUcf%2FWWKXpcpHirdRX%2FHAuH%2FQOBA7Yl7Szy0sj4QlOnxuc7BGGDXmIZnQq3OhywtirKb1AcCHUFjARlQFubWCRnO0%2Fl8JjHziWKCa5L7jDJQmNp7k0JLeX27zff2OhxyLwIYF46kn0w2eEVZEbHdy8ntAMnQft2HBek%2BYyZp47RacW3TDG7DmTBa87RTMi3pdXRBuHo0DzZnym%2FybscvbkPSI9GlOXhQ3Q8dU9qHBFPleIzjf9t9H7dzGLKti1R7tmhANfdzVXlJp8HQsWJQ2Dm9UqdSgIJmMSVbyR6tuz392uls4PL1c0AKQfQCm%2FFNCNvfokxxPOuh3k1gNFbt2baepoiLwb05S%2B%2Frfy09s2Q2vvP%2B4mKcUoMswEl3H59xjG4Vx4xQg5HbbmaiminrDRL9klBZ%2FAr%2BwVEgcMZz0xzLWgvK40cr2LjX9HtrbY0DvN518PApnyRBTaWwm05AOnKbdcoShebXjk0oVKrjDA%2Fr3CBjqkAcfsmtEx6MIETQLagRK6GLAUtFO3KlN9GSlYkm3omo6hx3IzScce%2BcX%2B0m%2B%2BluY6QpkJR2XIcyzrEoRIyWOprWiJMQkJlT0V4c9ZNHb9mg%2BscIUL0gmJuzpE0uFpAk4c%2BhiGXXw%2F4Z7A0jEDOii5kMEKdmxwnwts22njNZuvnHj%2BUCvHxUqmF%2FGrnsazQ1bI5fC2B2PBWm3NTMjaYQX4%2BaSygksn&X-Amz-Signature=d017676eee65b6ceca606c80b4262756a2958736cc014aaaabaae75f031e13b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTAU2UDW%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCG4Rxwn7q%2FC%2FzzYI5hQ8UvnV%2F6FcSlfg%2BGtCxSVSO47wIhAKt%2F%2B7%2BWLRMay1aEXwH7X11n7GlafFDvfWBEsGWoAGM1Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxTxazegsS1H9Wq7CIq3ANw9Oz4vES4bkABgZ2Rwq9vxzSetfjEEL7qdGwcF449ORJGNniMjM9ZF1RCzO9LAfO6tjcNb6zcc0HTzav2gdEzclt%2B%2B6SSVvOzV90ipuNi%2FnlGAFVMWhATKa5DrDCF1GcIWvCBnGRJ7hcJ5XW1OgvUcf%2FWWKXpcpHirdRX%2FHAuH%2FQOBA7Yl7Szy0sj4QlOnxuc7BGGDXmIZnQq3OhywtirKb1AcCHUFjARlQFubWCRnO0%2Fl8JjHziWKCa5L7jDJQmNp7k0JLeX27zff2OhxyLwIYF46kn0w2eEVZEbHdy8ntAMnQft2HBek%2BYyZp47RacW3TDG7DmTBa87RTMi3pdXRBuHo0DzZnym%2FybscvbkPSI9GlOXhQ3Q8dU9qHBFPleIzjf9t9H7dzGLKti1R7tmhANfdzVXlJp8HQsWJQ2Dm9UqdSgIJmMSVbyR6tuz392uls4PL1c0AKQfQCm%2FFNCNvfokxxPOuh3k1gNFbt2baepoiLwb05S%2B%2Frfy09s2Q2vvP%2B4mKcUoMswEl3H59xjG4Vx4xQg5HbbmaiminrDRL9klBZ%2FAr%2BwVEgcMZz0xzLWgvK40cr2LjX9HtrbY0DvN518PApnyRBTaWwm05AOnKbdcoShebXjk0oVKrjDA%2Fr3CBjqkAcfsmtEx6MIETQLagRK6GLAUtFO3KlN9GSlYkm3omo6hx3IzScce%2BcX%2B0m%2B%2BluY6QpkJR2XIcyzrEoRIyWOprWiJMQkJlT0V4c9ZNHb9mg%2BscIUL0gmJuzpE0uFpAk4c%2BhiGXXw%2F4Z7A0jEDOii5kMEKdmxwnwts22njNZuvnHj%2BUCvHxUqmF%2FGrnsazQ1bI5fC2B2PBWm3NTMjaYQX4%2BaSygksn&X-Amz-Signature=6861b270864cc97e1d09f1c6bab466a97f33c8b688f5aee36db79362d5241dde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTAU2UDW%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCG4Rxwn7q%2FC%2FzzYI5hQ8UvnV%2F6FcSlfg%2BGtCxSVSO47wIhAKt%2F%2B7%2BWLRMay1aEXwH7X11n7GlafFDvfWBEsGWoAGM1Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxTxazegsS1H9Wq7CIq3ANw9Oz4vES4bkABgZ2Rwq9vxzSetfjEEL7qdGwcF449ORJGNniMjM9ZF1RCzO9LAfO6tjcNb6zcc0HTzav2gdEzclt%2B%2B6SSVvOzV90ipuNi%2FnlGAFVMWhATKa5DrDCF1GcIWvCBnGRJ7hcJ5XW1OgvUcf%2FWWKXpcpHirdRX%2FHAuH%2FQOBA7Yl7Szy0sj4QlOnxuc7BGGDXmIZnQq3OhywtirKb1AcCHUFjARlQFubWCRnO0%2Fl8JjHziWKCa5L7jDJQmNp7k0JLeX27zff2OhxyLwIYF46kn0w2eEVZEbHdy8ntAMnQft2HBek%2BYyZp47RacW3TDG7DmTBa87RTMi3pdXRBuHo0DzZnym%2FybscvbkPSI9GlOXhQ3Q8dU9qHBFPleIzjf9t9H7dzGLKti1R7tmhANfdzVXlJp8HQsWJQ2Dm9UqdSgIJmMSVbyR6tuz392uls4PL1c0AKQfQCm%2FFNCNvfokxxPOuh3k1gNFbt2baepoiLwb05S%2B%2Frfy09s2Q2vvP%2B4mKcUoMswEl3H59xjG4Vx4xQg5HbbmaiminrDRL9klBZ%2FAr%2BwVEgcMZz0xzLWgvK40cr2LjX9HtrbY0DvN518PApnyRBTaWwm05AOnKbdcoShebXjk0oVKrjDA%2Fr3CBjqkAcfsmtEx6MIETQLagRK6GLAUtFO3KlN9GSlYkm3omo6hx3IzScce%2BcX%2B0m%2B%2BluY6QpkJR2XIcyzrEoRIyWOprWiJMQkJlT0V4c9ZNHb9mg%2BscIUL0gmJuzpE0uFpAk4c%2BhiGXXw%2F4Z7A0jEDOii5kMEKdmxwnwts22njNZuvnHj%2BUCvHxUqmF%2FGrnsazQ1bI5fC2B2PBWm3NTMjaYQX4%2BaSygksn&X-Amz-Signature=21e9224581da59c4f7efc016154ffefe36f79db06b7add2511d6695a2da206f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTAU2UDW%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCG4Rxwn7q%2FC%2FzzYI5hQ8UvnV%2F6FcSlfg%2BGtCxSVSO47wIhAKt%2F%2B7%2BWLRMay1aEXwH7X11n7GlafFDvfWBEsGWoAGM1Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxTxazegsS1H9Wq7CIq3ANw9Oz4vES4bkABgZ2Rwq9vxzSetfjEEL7qdGwcF449ORJGNniMjM9ZF1RCzO9LAfO6tjcNb6zcc0HTzav2gdEzclt%2B%2B6SSVvOzV90ipuNi%2FnlGAFVMWhATKa5DrDCF1GcIWvCBnGRJ7hcJ5XW1OgvUcf%2FWWKXpcpHirdRX%2FHAuH%2FQOBA7Yl7Szy0sj4QlOnxuc7BGGDXmIZnQq3OhywtirKb1AcCHUFjARlQFubWCRnO0%2Fl8JjHziWKCa5L7jDJQmNp7k0JLeX27zff2OhxyLwIYF46kn0w2eEVZEbHdy8ntAMnQft2HBek%2BYyZp47RacW3TDG7DmTBa87RTMi3pdXRBuHo0DzZnym%2FybscvbkPSI9GlOXhQ3Q8dU9qHBFPleIzjf9t9H7dzGLKti1R7tmhANfdzVXlJp8HQsWJQ2Dm9UqdSgIJmMSVbyR6tuz392uls4PL1c0AKQfQCm%2FFNCNvfokxxPOuh3k1gNFbt2baepoiLwb05S%2B%2Frfy09s2Q2vvP%2B4mKcUoMswEl3H59xjG4Vx4xQg5HbbmaiminrDRL9klBZ%2FAr%2BwVEgcMZz0xzLWgvK40cr2LjX9HtrbY0DvN518PApnyRBTaWwm05AOnKbdcoShebXjk0oVKrjDA%2Fr3CBjqkAcfsmtEx6MIETQLagRK6GLAUtFO3KlN9GSlYkm3omo6hx3IzScce%2BcX%2B0m%2B%2BluY6QpkJR2XIcyzrEoRIyWOprWiJMQkJlT0V4c9ZNHb9mg%2BscIUL0gmJuzpE0uFpAk4c%2BhiGXXw%2F4Z7A0jEDOii5kMEKdmxwnwts22njNZuvnHj%2BUCvHxUqmF%2FGrnsazQ1bI5fC2B2PBWm3NTMjaYQX4%2BaSygksn&X-Amz-Signature=fd48bd12e67e389beeda7a599dd39254108cf439254c22f0fd7cec1e5b00e19e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTAU2UDW%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCG4Rxwn7q%2FC%2FzzYI5hQ8UvnV%2F6FcSlfg%2BGtCxSVSO47wIhAKt%2F%2B7%2BWLRMay1aEXwH7X11n7GlafFDvfWBEsGWoAGM1Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxTxazegsS1H9Wq7CIq3ANw9Oz4vES4bkABgZ2Rwq9vxzSetfjEEL7qdGwcF449ORJGNniMjM9ZF1RCzO9LAfO6tjcNb6zcc0HTzav2gdEzclt%2B%2B6SSVvOzV90ipuNi%2FnlGAFVMWhATKa5DrDCF1GcIWvCBnGRJ7hcJ5XW1OgvUcf%2FWWKXpcpHirdRX%2FHAuH%2FQOBA7Yl7Szy0sj4QlOnxuc7BGGDXmIZnQq3OhywtirKb1AcCHUFjARlQFubWCRnO0%2Fl8JjHziWKCa5L7jDJQmNp7k0JLeX27zff2OhxyLwIYF46kn0w2eEVZEbHdy8ntAMnQft2HBek%2BYyZp47RacW3TDG7DmTBa87RTMi3pdXRBuHo0DzZnym%2FybscvbkPSI9GlOXhQ3Q8dU9qHBFPleIzjf9t9H7dzGLKti1R7tmhANfdzVXlJp8HQsWJQ2Dm9UqdSgIJmMSVbyR6tuz392uls4PL1c0AKQfQCm%2FFNCNvfokxxPOuh3k1gNFbt2baepoiLwb05S%2B%2Frfy09s2Q2vvP%2B4mKcUoMswEl3H59xjG4Vx4xQg5HbbmaiminrDRL9klBZ%2FAr%2BwVEgcMZz0xzLWgvK40cr2LjX9HtrbY0DvN518PApnyRBTaWwm05AOnKbdcoShebXjk0oVKrjDA%2Fr3CBjqkAcfsmtEx6MIETQLagRK6GLAUtFO3KlN9GSlYkm3omo6hx3IzScce%2BcX%2B0m%2B%2BluY6QpkJR2XIcyzrEoRIyWOprWiJMQkJlT0V4c9ZNHb9mg%2BscIUL0gmJuzpE0uFpAk4c%2BhiGXXw%2F4Z7A0jEDOii5kMEKdmxwnwts22njNZuvnHj%2BUCvHxUqmF%2FGrnsazQ1bI5fC2B2PBWm3NTMjaYQX4%2BaSygksn&X-Amz-Signature=4e1daa19113cef169b57d3fb27423a802d1586f9d4b0de207a00e1a37c7b8005&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTAU2UDW%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCG4Rxwn7q%2FC%2FzzYI5hQ8UvnV%2F6FcSlfg%2BGtCxSVSO47wIhAKt%2F%2B7%2BWLRMay1aEXwH7X11n7GlafFDvfWBEsGWoAGM1Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxTxazegsS1H9Wq7CIq3ANw9Oz4vES4bkABgZ2Rwq9vxzSetfjEEL7qdGwcF449ORJGNniMjM9ZF1RCzO9LAfO6tjcNb6zcc0HTzav2gdEzclt%2B%2B6SSVvOzV90ipuNi%2FnlGAFVMWhATKa5DrDCF1GcIWvCBnGRJ7hcJ5XW1OgvUcf%2FWWKXpcpHirdRX%2FHAuH%2FQOBA7Yl7Szy0sj4QlOnxuc7BGGDXmIZnQq3OhywtirKb1AcCHUFjARlQFubWCRnO0%2Fl8JjHziWKCa5L7jDJQmNp7k0JLeX27zff2OhxyLwIYF46kn0w2eEVZEbHdy8ntAMnQft2HBek%2BYyZp47RacW3TDG7DmTBa87RTMi3pdXRBuHo0DzZnym%2FybscvbkPSI9GlOXhQ3Q8dU9qHBFPleIzjf9t9H7dzGLKti1R7tmhANfdzVXlJp8HQsWJQ2Dm9UqdSgIJmMSVbyR6tuz392uls4PL1c0AKQfQCm%2FFNCNvfokxxPOuh3k1gNFbt2baepoiLwb05S%2B%2Frfy09s2Q2vvP%2B4mKcUoMswEl3H59xjG4Vx4xQg5HbbmaiminrDRL9klBZ%2FAr%2BwVEgcMZz0xzLWgvK40cr2LjX9HtrbY0DvN518PApnyRBTaWwm05AOnKbdcoShebXjk0oVKrjDA%2Fr3CBjqkAcfsmtEx6MIETQLagRK6GLAUtFO3KlN9GSlYkm3omo6hx3IzScce%2BcX%2B0m%2B%2BluY6QpkJR2XIcyzrEoRIyWOprWiJMQkJlT0V4c9ZNHb9mg%2BscIUL0gmJuzpE0uFpAk4c%2BhiGXXw%2F4Z7A0jEDOii5kMEKdmxwnwts22njNZuvnHj%2BUCvHxUqmF%2FGrnsazQ1bI5fC2B2PBWm3NTMjaYQX4%2BaSygksn&X-Amz-Signature=bc2b58e6211808e91ea0649b776f0d70fd4ae58e680aac9de6f8ebd196790eab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTAU2UDW%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCG4Rxwn7q%2FC%2FzzYI5hQ8UvnV%2F6FcSlfg%2BGtCxSVSO47wIhAKt%2F%2B7%2BWLRMay1aEXwH7X11n7GlafFDvfWBEsGWoAGM1Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxTxazegsS1H9Wq7CIq3ANw9Oz4vES4bkABgZ2Rwq9vxzSetfjEEL7qdGwcF449ORJGNniMjM9ZF1RCzO9LAfO6tjcNb6zcc0HTzav2gdEzclt%2B%2B6SSVvOzV90ipuNi%2FnlGAFVMWhATKa5DrDCF1GcIWvCBnGRJ7hcJ5XW1OgvUcf%2FWWKXpcpHirdRX%2FHAuH%2FQOBA7Yl7Szy0sj4QlOnxuc7BGGDXmIZnQq3OhywtirKb1AcCHUFjARlQFubWCRnO0%2Fl8JjHziWKCa5L7jDJQmNp7k0JLeX27zff2OhxyLwIYF46kn0w2eEVZEbHdy8ntAMnQft2HBek%2BYyZp47RacW3TDG7DmTBa87RTMi3pdXRBuHo0DzZnym%2FybscvbkPSI9GlOXhQ3Q8dU9qHBFPleIzjf9t9H7dzGLKti1R7tmhANfdzVXlJp8HQsWJQ2Dm9UqdSgIJmMSVbyR6tuz392uls4PL1c0AKQfQCm%2FFNCNvfokxxPOuh3k1gNFbt2baepoiLwb05S%2B%2Frfy09s2Q2vvP%2B4mKcUoMswEl3H59xjG4Vx4xQg5HbbmaiminrDRL9klBZ%2FAr%2BwVEgcMZz0xzLWgvK40cr2LjX9HtrbY0DvN518PApnyRBTaWwm05AOnKbdcoShebXjk0oVKrjDA%2Fr3CBjqkAcfsmtEx6MIETQLagRK6GLAUtFO3KlN9GSlYkm3omo6hx3IzScce%2BcX%2B0m%2B%2BluY6QpkJR2XIcyzrEoRIyWOprWiJMQkJlT0V4c9ZNHb9mg%2BscIUL0gmJuzpE0uFpAk4c%2BhiGXXw%2F4Z7A0jEDOii5kMEKdmxwnwts22njNZuvnHj%2BUCvHxUqmF%2FGrnsazQ1bI5fC2B2PBWm3NTMjaYQX4%2BaSygksn&X-Amz-Signature=f8fa390b27709e6a8224d5de4d1244f42c4d6bf97a225c639d29ebe089b6cdd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
