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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5RTOJCW%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvtM3QKnKftGZeRpX0urIvoqAAgMUeM0nKCTSBxrb8gAiBIl23JEwO2ekp6D11wmx%2FOKsPg1%2F02vwoWnKR3EuGMQir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMd52y4NTIAAyDkIczKtwDrABZifAHhn6tmxJ9nEa%2Fu%2BaO2AMX9uOtE6GzI84bwlfutmVtLJWp5anoRM9K83sDZGXPWzch4DK71KM943dbiMURnsOl%2BwLIZ0S5iduxStnhoa9dZVbPBCjElgqndD%2BUj9dZOO38YOh1zdECty8gq9sgbZxrNXcFenAj57QgOtNIibk5%2BZVpr6xUteuEhPAsCUEWPGlVAeyKtpNwuxs%2FAXA%2BtJwvuhD%2F5ThUpZsnbUdbUcoEuUmlcqzekJlOvjqQSwnc8qUPNTo168Fr9g3PWnxRQEBQyuu1CvAHULqNI8Na1TM4OHMpRECXvdSwBSufEhqa0lIgoyY7cVdwti0NDSCxQ3MYDkreGelIS9d7u67MGyDXbLdIVOj6lhjNNhfB2YBhTFUfPPrEvECahwZAfHlaDuLP%2FN9%2B24ApUljevJr0fayEBCm463NkIpqIv7B43cKi6W%2F3BrcuSaLO4Fcs%2BpJJCYb2ki7%2FYhSfKq1GRBduZNd4nP9LwQcF9hgMNHeaLf1wQJ4CK%2FsPtKiRfXOPkip694xv%2F%2FRVYr9NMkHJtKjsii8HJar1YrNFYFWmjE83vmQdI89Ba%2BfeBC9YgiLYWCfDP%2BJbJ9AuKOrPcZy5l0eTNPtdUbAk9zHT3iUwy%2FjT0AY6pgHyvGGygLUW1DW%2Btq5GTzP5QXOEU83X5%2B%2Bvc%2Fz2BtR5Jew%2BKcY5U7irB9Li8NStklx2hjfnvsKT6Wku2PWUmQ3M%2BiqNfSYpZC4fjEo7pC2UoSyfKhWxC8G8iZFLlF%2BmfcGwq5Lib0GCtpUo1xeUNrSowOZ4D77ryXseUHyuKJQLCg%2Bf0h20tQhZN2XqhDjMlu1j7iPvjE%2BIO6w%2Fh5oU3fF2FGbCaSLI&X-Amz-Signature=8460f54638f33283d80b7487d83161c36ecfe03402efdb522d2a26db363ec7a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5RTOJCW%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvtM3QKnKftGZeRpX0urIvoqAAgMUeM0nKCTSBxrb8gAiBIl23JEwO2ekp6D11wmx%2FOKsPg1%2F02vwoWnKR3EuGMQir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMd52y4NTIAAyDkIczKtwDrABZifAHhn6tmxJ9nEa%2Fu%2BaO2AMX9uOtE6GzI84bwlfutmVtLJWp5anoRM9K83sDZGXPWzch4DK71KM943dbiMURnsOl%2BwLIZ0S5iduxStnhoa9dZVbPBCjElgqndD%2BUj9dZOO38YOh1zdECty8gq9sgbZxrNXcFenAj57QgOtNIibk5%2BZVpr6xUteuEhPAsCUEWPGlVAeyKtpNwuxs%2FAXA%2BtJwvuhD%2F5ThUpZsnbUdbUcoEuUmlcqzekJlOvjqQSwnc8qUPNTo168Fr9g3PWnxRQEBQyuu1CvAHULqNI8Na1TM4OHMpRECXvdSwBSufEhqa0lIgoyY7cVdwti0NDSCxQ3MYDkreGelIS9d7u67MGyDXbLdIVOj6lhjNNhfB2YBhTFUfPPrEvECahwZAfHlaDuLP%2FN9%2B24ApUljevJr0fayEBCm463NkIpqIv7B43cKi6W%2F3BrcuSaLO4Fcs%2BpJJCYb2ki7%2FYhSfKq1GRBduZNd4nP9LwQcF9hgMNHeaLf1wQJ4CK%2FsPtKiRfXOPkip694xv%2F%2FRVYr9NMkHJtKjsii8HJar1YrNFYFWmjE83vmQdI89Ba%2BfeBC9YgiLYWCfDP%2BJbJ9AuKOrPcZy5l0eTNPtdUbAk9zHT3iUwy%2FjT0AY6pgHyvGGygLUW1DW%2Btq5GTzP5QXOEU83X5%2B%2Bvc%2Fz2BtR5Jew%2BKcY5U7irB9Li8NStklx2hjfnvsKT6Wku2PWUmQ3M%2BiqNfSYpZC4fjEo7pC2UoSyfKhWxC8G8iZFLlF%2BmfcGwq5Lib0GCtpUo1xeUNrSowOZ4D77ryXseUHyuKJQLCg%2Bf0h20tQhZN2XqhDjMlu1j7iPvjE%2BIO6w%2Fh5oU3fF2FGbCaSLI&X-Amz-Signature=f3462971c4d8162c5260a4cf35180e7aea3e0afa079e99ece9792d9eeceea748&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5RTOJCW%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvtM3QKnKftGZeRpX0urIvoqAAgMUeM0nKCTSBxrb8gAiBIl23JEwO2ekp6D11wmx%2FOKsPg1%2F02vwoWnKR3EuGMQir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMd52y4NTIAAyDkIczKtwDrABZifAHhn6tmxJ9nEa%2Fu%2BaO2AMX9uOtE6GzI84bwlfutmVtLJWp5anoRM9K83sDZGXPWzch4DK71KM943dbiMURnsOl%2BwLIZ0S5iduxStnhoa9dZVbPBCjElgqndD%2BUj9dZOO38YOh1zdECty8gq9sgbZxrNXcFenAj57QgOtNIibk5%2BZVpr6xUteuEhPAsCUEWPGlVAeyKtpNwuxs%2FAXA%2BtJwvuhD%2F5ThUpZsnbUdbUcoEuUmlcqzekJlOvjqQSwnc8qUPNTo168Fr9g3PWnxRQEBQyuu1CvAHULqNI8Na1TM4OHMpRECXvdSwBSufEhqa0lIgoyY7cVdwti0NDSCxQ3MYDkreGelIS9d7u67MGyDXbLdIVOj6lhjNNhfB2YBhTFUfPPrEvECahwZAfHlaDuLP%2FN9%2B24ApUljevJr0fayEBCm463NkIpqIv7B43cKi6W%2F3BrcuSaLO4Fcs%2BpJJCYb2ki7%2FYhSfKq1GRBduZNd4nP9LwQcF9hgMNHeaLf1wQJ4CK%2FsPtKiRfXOPkip694xv%2F%2FRVYr9NMkHJtKjsii8HJar1YrNFYFWmjE83vmQdI89Ba%2BfeBC9YgiLYWCfDP%2BJbJ9AuKOrPcZy5l0eTNPtdUbAk9zHT3iUwy%2FjT0AY6pgHyvGGygLUW1DW%2Btq5GTzP5QXOEU83X5%2B%2Bvc%2Fz2BtR5Jew%2BKcY5U7irB9Li8NStklx2hjfnvsKT6Wku2PWUmQ3M%2BiqNfSYpZC4fjEo7pC2UoSyfKhWxC8G8iZFLlF%2BmfcGwq5Lib0GCtpUo1xeUNrSowOZ4D77ryXseUHyuKJQLCg%2Bf0h20tQhZN2XqhDjMlu1j7iPvjE%2BIO6w%2Fh5oU3fF2FGbCaSLI&X-Amz-Signature=4b38cd4461db785e55860be956d4aee009bc283484c9b8ea568da5117b414c3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5RTOJCW%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvtM3QKnKftGZeRpX0urIvoqAAgMUeM0nKCTSBxrb8gAiBIl23JEwO2ekp6D11wmx%2FOKsPg1%2F02vwoWnKR3EuGMQir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMd52y4NTIAAyDkIczKtwDrABZifAHhn6tmxJ9nEa%2Fu%2BaO2AMX9uOtE6GzI84bwlfutmVtLJWp5anoRM9K83sDZGXPWzch4DK71KM943dbiMURnsOl%2BwLIZ0S5iduxStnhoa9dZVbPBCjElgqndD%2BUj9dZOO38YOh1zdECty8gq9sgbZxrNXcFenAj57QgOtNIibk5%2BZVpr6xUteuEhPAsCUEWPGlVAeyKtpNwuxs%2FAXA%2BtJwvuhD%2F5ThUpZsnbUdbUcoEuUmlcqzekJlOvjqQSwnc8qUPNTo168Fr9g3PWnxRQEBQyuu1CvAHULqNI8Na1TM4OHMpRECXvdSwBSufEhqa0lIgoyY7cVdwti0NDSCxQ3MYDkreGelIS9d7u67MGyDXbLdIVOj6lhjNNhfB2YBhTFUfPPrEvECahwZAfHlaDuLP%2FN9%2B24ApUljevJr0fayEBCm463NkIpqIv7B43cKi6W%2F3BrcuSaLO4Fcs%2BpJJCYb2ki7%2FYhSfKq1GRBduZNd4nP9LwQcF9hgMNHeaLf1wQJ4CK%2FsPtKiRfXOPkip694xv%2F%2FRVYr9NMkHJtKjsii8HJar1YrNFYFWmjE83vmQdI89Ba%2BfeBC9YgiLYWCfDP%2BJbJ9AuKOrPcZy5l0eTNPtdUbAk9zHT3iUwy%2FjT0AY6pgHyvGGygLUW1DW%2Btq5GTzP5QXOEU83X5%2B%2Bvc%2Fz2BtR5Jew%2BKcY5U7irB9Li8NStklx2hjfnvsKT6Wku2PWUmQ3M%2BiqNfSYpZC4fjEo7pC2UoSyfKhWxC8G8iZFLlF%2BmfcGwq5Lib0GCtpUo1xeUNrSowOZ4D77ryXseUHyuKJQLCg%2Bf0h20tQhZN2XqhDjMlu1j7iPvjE%2BIO6w%2Fh5oU3fF2FGbCaSLI&X-Amz-Signature=6371ebba3e4f287642f9cc33f0662ff7efe9c7ea193e598ba6eaf747f2267460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5RTOJCW%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvtM3QKnKftGZeRpX0urIvoqAAgMUeM0nKCTSBxrb8gAiBIl23JEwO2ekp6D11wmx%2FOKsPg1%2F02vwoWnKR3EuGMQir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMd52y4NTIAAyDkIczKtwDrABZifAHhn6tmxJ9nEa%2Fu%2BaO2AMX9uOtE6GzI84bwlfutmVtLJWp5anoRM9K83sDZGXPWzch4DK71KM943dbiMURnsOl%2BwLIZ0S5iduxStnhoa9dZVbPBCjElgqndD%2BUj9dZOO38YOh1zdECty8gq9sgbZxrNXcFenAj57QgOtNIibk5%2BZVpr6xUteuEhPAsCUEWPGlVAeyKtpNwuxs%2FAXA%2BtJwvuhD%2F5ThUpZsnbUdbUcoEuUmlcqzekJlOvjqQSwnc8qUPNTo168Fr9g3PWnxRQEBQyuu1CvAHULqNI8Na1TM4OHMpRECXvdSwBSufEhqa0lIgoyY7cVdwti0NDSCxQ3MYDkreGelIS9d7u67MGyDXbLdIVOj6lhjNNhfB2YBhTFUfPPrEvECahwZAfHlaDuLP%2FN9%2B24ApUljevJr0fayEBCm463NkIpqIv7B43cKi6W%2F3BrcuSaLO4Fcs%2BpJJCYb2ki7%2FYhSfKq1GRBduZNd4nP9LwQcF9hgMNHeaLf1wQJ4CK%2FsPtKiRfXOPkip694xv%2F%2FRVYr9NMkHJtKjsii8HJar1YrNFYFWmjE83vmQdI89Ba%2BfeBC9YgiLYWCfDP%2BJbJ9AuKOrPcZy5l0eTNPtdUbAk9zHT3iUwy%2FjT0AY6pgHyvGGygLUW1DW%2Btq5GTzP5QXOEU83X5%2B%2Bvc%2Fz2BtR5Jew%2BKcY5U7irB9Li8NStklx2hjfnvsKT6Wku2PWUmQ3M%2BiqNfSYpZC4fjEo7pC2UoSyfKhWxC8G8iZFLlF%2BmfcGwq5Lib0GCtpUo1xeUNrSowOZ4D77ryXseUHyuKJQLCg%2Bf0h20tQhZN2XqhDjMlu1j7iPvjE%2BIO6w%2Fh5oU3fF2FGbCaSLI&X-Amz-Signature=dace2260f4e86248b14a4014a4fe6aa1283583ef87944c1536368985c8fdb075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5RTOJCW%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvtM3QKnKftGZeRpX0urIvoqAAgMUeM0nKCTSBxrb8gAiBIl23JEwO2ekp6D11wmx%2FOKsPg1%2F02vwoWnKR3EuGMQir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMd52y4NTIAAyDkIczKtwDrABZifAHhn6tmxJ9nEa%2Fu%2BaO2AMX9uOtE6GzI84bwlfutmVtLJWp5anoRM9K83sDZGXPWzch4DK71KM943dbiMURnsOl%2BwLIZ0S5iduxStnhoa9dZVbPBCjElgqndD%2BUj9dZOO38YOh1zdECty8gq9sgbZxrNXcFenAj57QgOtNIibk5%2BZVpr6xUteuEhPAsCUEWPGlVAeyKtpNwuxs%2FAXA%2BtJwvuhD%2F5ThUpZsnbUdbUcoEuUmlcqzekJlOvjqQSwnc8qUPNTo168Fr9g3PWnxRQEBQyuu1CvAHULqNI8Na1TM4OHMpRECXvdSwBSufEhqa0lIgoyY7cVdwti0NDSCxQ3MYDkreGelIS9d7u67MGyDXbLdIVOj6lhjNNhfB2YBhTFUfPPrEvECahwZAfHlaDuLP%2FN9%2B24ApUljevJr0fayEBCm463NkIpqIv7B43cKi6W%2F3BrcuSaLO4Fcs%2BpJJCYb2ki7%2FYhSfKq1GRBduZNd4nP9LwQcF9hgMNHeaLf1wQJ4CK%2FsPtKiRfXOPkip694xv%2F%2FRVYr9NMkHJtKjsii8HJar1YrNFYFWmjE83vmQdI89Ba%2BfeBC9YgiLYWCfDP%2BJbJ9AuKOrPcZy5l0eTNPtdUbAk9zHT3iUwy%2FjT0AY6pgHyvGGygLUW1DW%2Btq5GTzP5QXOEU83X5%2B%2Bvc%2Fz2BtR5Jew%2BKcY5U7irB9Li8NStklx2hjfnvsKT6Wku2PWUmQ3M%2BiqNfSYpZC4fjEo7pC2UoSyfKhWxC8G8iZFLlF%2BmfcGwq5Lib0GCtpUo1xeUNrSowOZ4D77ryXseUHyuKJQLCg%2Bf0h20tQhZN2XqhDjMlu1j7iPvjE%2BIO6w%2Fh5oU3fF2FGbCaSLI&X-Amz-Signature=420af0a0b2aca8958ae5158d2e13e09e766563f92bac0fed0cb5d2bc8fff1a68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5RTOJCW%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvtM3QKnKftGZeRpX0urIvoqAAgMUeM0nKCTSBxrb8gAiBIl23JEwO2ekp6D11wmx%2FOKsPg1%2F02vwoWnKR3EuGMQir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMd52y4NTIAAyDkIczKtwDrABZifAHhn6tmxJ9nEa%2Fu%2BaO2AMX9uOtE6GzI84bwlfutmVtLJWp5anoRM9K83sDZGXPWzch4DK71KM943dbiMURnsOl%2BwLIZ0S5iduxStnhoa9dZVbPBCjElgqndD%2BUj9dZOO38YOh1zdECty8gq9sgbZxrNXcFenAj57QgOtNIibk5%2BZVpr6xUteuEhPAsCUEWPGlVAeyKtpNwuxs%2FAXA%2BtJwvuhD%2F5ThUpZsnbUdbUcoEuUmlcqzekJlOvjqQSwnc8qUPNTo168Fr9g3PWnxRQEBQyuu1CvAHULqNI8Na1TM4OHMpRECXvdSwBSufEhqa0lIgoyY7cVdwti0NDSCxQ3MYDkreGelIS9d7u67MGyDXbLdIVOj6lhjNNhfB2YBhTFUfPPrEvECahwZAfHlaDuLP%2FN9%2B24ApUljevJr0fayEBCm463NkIpqIv7B43cKi6W%2F3BrcuSaLO4Fcs%2BpJJCYb2ki7%2FYhSfKq1GRBduZNd4nP9LwQcF9hgMNHeaLf1wQJ4CK%2FsPtKiRfXOPkip694xv%2F%2FRVYr9NMkHJtKjsii8HJar1YrNFYFWmjE83vmQdI89Ba%2BfeBC9YgiLYWCfDP%2BJbJ9AuKOrPcZy5l0eTNPtdUbAk9zHT3iUwy%2FjT0AY6pgHyvGGygLUW1DW%2Btq5GTzP5QXOEU83X5%2B%2Bvc%2Fz2BtR5Jew%2BKcY5U7irB9Li8NStklx2hjfnvsKT6Wku2PWUmQ3M%2BiqNfSYpZC4fjEo7pC2UoSyfKhWxC8G8iZFLlF%2BmfcGwq5Lib0GCtpUo1xeUNrSowOZ4D77ryXseUHyuKJQLCg%2Bf0h20tQhZN2XqhDjMlu1j7iPvjE%2BIO6w%2Fh5oU3fF2FGbCaSLI&X-Amz-Signature=65a560adfeddeabb6907171a5a1f205ab914408164d3a2516bb63a4d93a83bbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
