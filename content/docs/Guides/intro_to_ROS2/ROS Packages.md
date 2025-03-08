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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWKOZLMB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCgfzMVLWqvwNN3b15JcKl0cADC2kYCEWHAUU9FDcNieAIhALuq9MxMAiWijtCVaCpQt5vSf2bl4P58A00%2BJsajkI1wKv8DCFgQABoMNjM3NDIzMTgzODA1IgxQhq8Ebpog1JLsPKsq3AO923z19Z39fmwzIykB8MLSQZwLBx6BjV5ebe9uT2gnCWeCx1nOMTzoWjQbahOfQFStcHYW21PzIue%2FuZpfAsJ8eMI4P7%2BJv%2BMUg2cMdIO5HFbHgm4gFQO2beSFhrx1InhPd16TgAkUveU6EAWC%2B6lcDEDHg%2Baxr6q%2Bn30lUh%2BhQb94ayH%2BlL9neZJ5BiywTKMWodI8Y4osn3Wy6MEs7T0NOhQCnduGen7OiP4yIRq45dJgvpFUsYe9kTocLt0XKlcKP6JmQsO0KJYAPVbDYqyfrg1YKeWQn0Za0PfGWd7qsDSIDw0El6SHmqjqkqDBxkn%2Bx1a33TVtUbw8hM98P%2BcAT18PDaqrQRfhYxX%2BP5dXBiLzZ7NqdVGh2uQuB8LXHp2bGKbsVkwiWJ2FqT6ydY%2BLbAvmoPx7HkawWcHOQ7LqXRKzzGqRpXcANqQxEVWrlc9WTXhZaOb8bfFpym0QwqMfhrsJv31Z2aZypvSgVMbRCGdN0Hk1Azl2zLim7ozqKp44WjvzuQok1nDDxQC7UHpeeiMyMQhLhkI0%2BHuQzbzaWdUIpOmS7v4DHmqwsyydddLmhzwOeP%2Ftc9y96kEeaJBgaqDGPn%2FCZ%2BRBx2tPgSL4r6ENeuIThpaRREBAhjCz4K%2B%2BBjqkAX%2BJpZNv6Z1sKOL6DV6HrXVMUTa3zC3WjcBkpRWO%2BK%2Bt32tX6n3EjnDdPJB2fYJ670gGuiJtxAQDiAcqLsDK209omC4HOckUQmw9f%2Fru7F3Ons9HzseFQrXllqhddt9KBhEJQtXAs%2BKdVTwutSzJB4jNxYxC68tYynsUn2sjwettLyQ863db%2BGgeVN4eVzGxsx%2FQOTJKFpfCMalVjjOIWh0OW8rj&X-Amz-Signature=84db54f8e98737a08a9b60edf00a344d07996645eb071f361423f283bcc76814&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWKOZLMB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCgfzMVLWqvwNN3b15JcKl0cADC2kYCEWHAUU9FDcNieAIhALuq9MxMAiWijtCVaCpQt5vSf2bl4P58A00%2BJsajkI1wKv8DCFgQABoMNjM3NDIzMTgzODA1IgxQhq8Ebpog1JLsPKsq3AO923z19Z39fmwzIykB8MLSQZwLBx6BjV5ebe9uT2gnCWeCx1nOMTzoWjQbahOfQFStcHYW21PzIue%2FuZpfAsJ8eMI4P7%2BJv%2BMUg2cMdIO5HFbHgm4gFQO2beSFhrx1InhPd16TgAkUveU6EAWC%2B6lcDEDHg%2Baxr6q%2Bn30lUh%2BhQb94ayH%2BlL9neZJ5BiywTKMWodI8Y4osn3Wy6MEs7T0NOhQCnduGen7OiP4yIRq45dJgvpFUsYe9kTocLt0XKlcKP6JmQsO0KJYAPVbDYqyfrg1YKeWQn0Za0PfGWd7qsDSIDw0El6SHmqjqkqDBxkn%2Bx1a33TVtUbw8hM98P%2BcAT18PDaqrQRfhYxX%2BP5dXBiLzZ7NqdVGh2uQuB8LXHp2bGKbsVkwiWJ2FqT6ydY%2BLbAvmoPx7HkawWcHOQ7LqXRKzzGqRpXcANqQxEVWrlc9WTXhZaOb8bfFpym0QwqMfhrsJv31Z2aZypvSgVMbRCGdN0Hk1Azl2zLim7ozqKp44WjvzuQok1nDDxQC7UHpeeiMyMQhLhkI0%2BHuQzbzaWdUIpOmS7v4DHmqwsyydddLmhzwOeP%2Ftc9y96kEeaJBgaqDGPn%2FCZ%2BRBx2tPgSL4r6ENeuIThpaRREBAhjCz4K%2B%2BBjqkAX%2BJpZNv6Z1sKOL6DV6HrXVMUTa3zC3WjcBkpRWO%2BK%2Bt32tX6n3EjnDdPJB2fYJ670gGuiJtxAQDiAcqLsDK209omC4HOckUQmw9f%2Fru7F3Ons9HzseFQrXllqhddt9KBhEJQtXAs%2BKdVTwutSzJB4jNxYxC68tYynsUn2sjwettLyQ863db%2BGgeVN4eVzGxsx%2FQOTJKFpfCMalVjjOIWh0OW8rj&X-Amz-Signature=9156274ee0e9d1939ff9a71d262c5637678f42aa5ed4bb26e79ae72a4032b400&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWKOZLMB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCgfzMVLWqvwNN3b15JcKl0cADC2kYCEWHAUU9FDcNieAIhALuq9MxMAiWijtCVaCpQt5vSf2bl4P58A00%2BJsajkI1wKv8DCFgQABoMNjM3NDIzMTgzODA1IgxQhq8Ebpog1JLsPKsq3AO923z19Z39fmwzIykB8MLSQZwLBx6BjV5ebe9uT2gnCWeCx1nOMTzoWjQbahOfQFStcHYW21PzIue%2FuZpfAsJ8eMI4P7%2BJv%2BMUg2cMdIO5HFbHgm4gFQO2beSFhrx1InhPd16TgAkUveU6EAWC%2B6lcDEDHg%2Baxr6q%2Bn30lUh%2BhQb94ayH%2BlL9neZJ5BiywTKMWodI8Y4osn3Wy6MEs7T0NOhQCnduGen7OiP4yIRq45dJgvpFUsYe9kTocLt0XKlcKP6JmQsO0KJYAPVbDYqyfrg1YKeWQn0Za0PfGWd7qsDSIDw0El6SHmqjqkqDBxkn%2Bx1a33TVtUbw8hM98P%2BcAT18PDaqrQRfhYxX%2BP5dXBiLzZ7NqdVGh2uQuB8LXHp2bGKbsVkwiWJ2FqT6ydY%2BLbAvmoPx7HkawWcHOQ7LqXRKzzGqRpXcANqQxEVWrlc9WTXhZaOb8bfFpym0QwqMfhrsJv31Z2aZypvSgVMbRCGdN0Hk1Azl2zLim7ozqKp44WjvzuQok1nDDxQC7UHpeeiMyMQhLhkI0%2BHuQzbzaWdUIpOmS7v4DHmqwsyydddLmhzwOeP%2Ftc9y96kEeaJBgaqDGPn%2FCZ%2BRBx2tPgSL4r6ENeuIThpaRREBAhjCz4K%2B%2BBjqkAX%2BJpZNv6Z1sKOL6DV6HrXVMUTa3zC3WjcBkpRWO%2BK%2Bt32tX6n3EjnDdPJB2fYJ670gGuiJtxAQDiAcqLsDK209omC4HOckUQmw9f%2Fru7F3Ons9HzseFQrXllqhddt9KBhEJQtXAs%2BKdVTwutSzJB4jNxYxC68tYynsUn2sjwettLyQ863db%2BGgeVN4eVzGxsx%2FQOTJKFpfCMalVjjOIWh0OW8rj&X-Amz-Signature=1dbe9e101514a1d8c6c71859cf0a1c50f6bbfb6282852e8682f98a647402ae18&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWKOZLMB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCgfzMVLWqvwNN3b15JcKl0cADC2kYCEWHAUU9FDcNieAIhALuq9MxMAiWijtCVaCpQt5vSf2bl4P58A00%2BJsajkI1wKv8DCFgQABoMNjM3NDIzMTgzODA1IgxQhq8Ebpog1JLsPKsq3AO923z19Z39fmwzIykB8MLSQZwLBx6BjV5ebe9uT2gnCWeCx1nOMTzoWjQbahOfQFStcHYW21PzIue%2FuZpfAsJ8eMI4P7%2BJv%2BMUg2cMdIO5HFbHgm4gFQO2beSFhrx1InhPd16TgAkUveU6EAWC%2B6lcDEDHg%2Baxr6q%2Bn30lUh%2BhQb94ayH%2BlL9neZJ5BiywTKMWodI8Y4osn3Wy6MEs7T0NOhQCnduGen7OiP4yIRq45dJgvpFUsYe9kTocLt0XKlcKP6JmQsO0KJYAPVbDYqyfrg1YKeWQn0Za0PfGWd7qsDSIDw0El6SHmqjqkqDBxkn%2Bx1a33TVtUbw8hM98P%2BcAT18PDaqrQRfhYxX%2BP5dXBiLzZ7NqdVGh2uQuB8LXHp2bGKbsVkwiWJ2FqT6ydY%2BLbAvmoPx7HkawWcHOQ7LqXRKzzGqRpXcANqQxEVWrlc9WTXhZaOb8bfFpym0QwqMfhrsJv31Z2aZypvSgVMbRCGdN0Hk1Azl2zLim7ozqKp44WjvzuQok1nDDxQC7UHpeeiMyMQhLhkI0%2BHuQzbzaWdUIpOmS7v4DHmqwsyydddLmhzwOeP%2Ftc9y96kEeaJBgaqDGPn%2FCZ%2BRBx2tPgSL4r6ENeuIThpaRREBAhjCz4K%2B%2BBjqkAX%2BJpZNv6Z1sKOL6DV6HrXVMUTa3zC3WjcBkpRWO%2BK%2Bt32tX6n3EjnDdPJB2fYJ670gGuiJtxAQDiAcqLsDK209omC4HOckUQmw9f%2Fru7F3Ons9HzseFQrXllqhddt9KBhEJQtXAs%2BKdVTwutSzJB4jNxYxC68tYynsUn2sjwettLyQ863db%2BGgeVN4eVzGxsx%2FQOTJKFpfCMalVjjOIWh0OW8rj&X-Amz-Signature=893bf6f41665a5e404a5ee52c300436baf8dc395f766230eff49a34531254b51&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWKOZLMB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCgfzMVLWqvwNN3b15JcKl0cADC2kYCEWHAUU9FDcNieAIhALuq9MxMAiWijtCVaCpQt5vSf2bl4P58A00%2BJsajkI1wKv8DCFgQABoMNjM3NDIzMTgzODA1IgxQhq8Ebpog1JLsPKsq3AO923z19Z39fmwzIykB8MLSQZwLBx6BjV5ebe9uT2gnCWeCx1nOMTzoWjQbahOfQFStcHYW21PzIue%2FuZpfAsJ8eMI4P7%2BJv%2BMUg2cMdIO5HFbHgm4gFQO2beSFhrx1InhPd16TgAkUveU6EAWC%2B6lcDEDHg%2Baxr6q%2Bn30lUh%2BhQb94ayH%2BlL9neZJ5BiywTKMWodI8Y4osn3Wy6MEs7T0NOhQCnduGen7OiP4yIRq45dJgvpFUsYe9kTocLt0XKlcKP6JmQsO0KJYAPVbDYqyfrg1YKeWQn0Za0PfGWd7qsDSIDw0El6SHmqjqkqDBxkn%2Bx1a33TVtUbw8hM98P%2BcAT18PDaqrQRfhYxX%2BP5dXBiLzZ7NqdVGh2uQuB8LXHp2bGKbsVkwiWJ2FqT6ydY%2BLbAvmoPx7HkawWcHOQ7LqXRKzzGqRpXcANqQxEVWrlc9WTXhZaOb8bfFpym0QwqMfhrsJv31Z2aZypvSgVMbRCGdN0Hk1Azl2zLim7ozqKp44WjvzuQok1nDDxQC7UHpeeiMyMQhLhkI0%2BHuQzbzaWdUIpOmS7v4DHmqwsyydddLmhzwOeP%2Ftc9y96kEeaJBgaqDGPn%2FCZ%2BRBx2tPgSL4r6ENeuIThpaRREBAhjCz4K%2B%2BBjqkAX%2BJpZNv6Z1sKOL6DV6HrXVMUTa3zC3WjcBkpRWO%2BK%2Bt32tX6n3EjnDdPJB2fYJ670gGuiJtxAQDiAcqLsDK209omC4HOckUQmw9f%2Fru7F3Ons9HzseFQrXllqhddt9KBhEJQtXAs%2BKdVTwutSzJB4jNxYxC68tYynsUn2sjwettLyQ863db%2BGgeVN4eVzGxsx%2FQOTJKFpfCMalVjjOIWh0OW8rj&X-Amz-Signature=22553a05008ac32bcf2e81fa95ee196197915b9e2ba44fc04baaa61a8171dfd5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWKOZLMB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCgfzMVLWqvwNN3b15JcKl0cADC2kYCEWHAUU9FDcNieAIhALuq9MxMAiWijtCVaCpQt5vSf2bl4P58A00%2BJsajkI1wKv8DCFgQABoMNjM3NDIzMTgzODA1IgxQhq8Ebpog1JLsPKsq3AO923z19Z39fmwzIykB8MLSQZwLBx6BjV5ebe9uT2gnCWeCx1nOMTzoWjQbahOfQFStcHYW21PzIue%2FuZpfAsJ8eMI4P7%2BJv%2BMUg2cMdIO5HFbHgm4gFQO2beSFhrx1InhPd16TgAkUveU6EAWC%2B6lcDEDHg%2Baxr6q%2Bn30lUh%2BhQb94ayH%2BlL9neZJ5BiywTKMWodI8Y4osn3Wy6MEs7T0NOhQCnduGen7OiP4yIRq45dJgvpFUsYe9kTocLt0XKlcKP6JmQsO0KJYAPVbDYqyfrg1YKeWQn0Za0PfGWd7qsDSIDw0El6SHmqjqkqDBxkn%2Bx1a33TVtUbw8hM98P%2BcAT18PDaqrQRfhYxX%2BP5dXBiLzZ7NqdVGh2uQuB8LXHp2bGKbsVkwiWJ2FqT6ydY%2BLbAvmoPx7HkawWcHOQ7LqXRKzzGqRpXcANqQxEVWrlc9WTXhZaOb8bfFpym0QwqMfhrsJv31Z2aZypvSgVMbRCGdN0Hk1Azl2zLim7ozqKp44WjvzuQok1nDDxQC7UHpeeiMyMQhLhkI0%2BHuQzbzaWdUIpOmS7v4DHmqwsyydddLmhzwOeP%2Ftc9y96kEeaJBgaqDGPn%2FCZ%2BRBx2tPgSL4r6ENeuIThpaRREBAhjCz4K%2B%2BBjqkAX%2BJpZNv6Z1sKOL6DV6HrXVMUTa3zC3WjcBkpRWO%2BK%2Bt32tX6n3EjnDdPJB2fYJ670gGuiJtxAQDiAcqLsDK209omC4HOckUQmw9f%2Fru7F3Ons9HzseFQrXllqhddt9KBhEJQtXAs%2BKdVTwutSzJB4jNxYxC68tYynsUn2sjwettLyQ863db%2BGgeVN4eVzGxsx%2FQOTJKFpfCMalVjjOIWh0OW8rj&X-Amz-Signature=d0a3be9481fe62fd2bec92ef6a3d3702c3490aeb8c0d6b39d30bd8c6d03ed51d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWKOZLMB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCgfzMVLWqvwNN3b15JcKl0cADC2kYCEWHAUU9FDcNieAIhALuq9MxMAiWijtCVaCpQt5vSf2bl4P58A00%2BJsajkI1wKv8DCFgQABoMNjM3NDIzMTgzODA1IgxQhq8Ebpog1JLsPKsq3AO923z19Z39fmwzIykB8MLSQZwLBx6BjV5ebe9uT2gnCWeCx1nOMTzoWjQbahOfQFStcHYW21PzIue%2FuZpfAsJ8eMI4P7%2BJv%2BMUg2cMdIO5HFbHgm4gFQO2beSFhrx1InhPd16TgAkUveU6EAWC%2B6lcDEDHg%2Baxr6q%2Bn30lUh%2BhQb94ayH%2BlL9neZJ5BiywTKMWodI8Y4osn3Wy6MEs7T0NOhQCnduGen7OiP4yIRq45dJgvpFUsYe9kTocLt0XKlcKP6JmQsO0KJYAPVbDYqyfrg1YKeWQn0Za0PfGWd7qsDSIDw0El6SHmqjqkqDBxkn%2Bx1a33TVtUbw8hM98P%2BcAT18PDaqrQRfhYxX%2BP5dXBiLzZ7NqdVGh2uQuB8LXHp2bGKbsVkwiWJ2FqT6ydY%2BLbAvmoPx7HkawWcHOQ7LqXRKzzGqRpXcANqQxEVWrlc9WTXhZaOb8bfFpym0QwqMfhrsJv31Z2aZypvSgVMbRCGdN0Hk1Azl2zLim7ozqKp44WjvzuQok1nDDxQC7UHpeeiMyMQhLhkI0%2BHuQzbzaWdUIpOmS7v4DHmqwsyydddLmhzwOeP%2Ftc9y96kEeaJBgaqDGPn%2FCZ%2BRBx2tPgSL4r6ENeuIThpaRREBAhjCz4K%2B%2BBjqkAX%2BJpZNv6Z1sKOL6DV6HrXVMUTa3zC3WjcBkpRWO%2BK%2Bt32tX6n3EjnDdPJB2fYJ670gGuiJtxAQDiAcqLsDK209omC4HOckUQmw9f%2Fru7F3Ons9HzseFQrXllqhddt9KBhEJQtXAs%2BKdVTwutSzJB4jNxYxC68tYynsUn2sjwettLyQ863db%2BGgeVN4eVzGxsx%2FQOTJKFpfCMalVjjOIWh0OW8rj&X-Amz-Signature=9cdb3112d8a92587790c02f66eb0dffbebf637a0e45f70fd63882c9f1ab1050b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
