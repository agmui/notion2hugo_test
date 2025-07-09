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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOW44KA6%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8xZOAs7YsNSQ0w34B%2FOG1uiB3kypBuLYjSYcRVro4FAiAEGAclyzr3BtAc7JOk9%2F5CUEOGWqEo2SVEuwiR1SmeHCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMck6XsHpkcsH8IrUwKtwDA98AGXB1XwQI1kXXRR6H8cmX%2BB%2FS8eZy%2FRNkHwmpbFALfujv4RrRwkWshs9a8wTy5S4zpucIFYSRB%2FOvAGJQtkI2tBDhkIMLIS6QTSiH70%2BqMn1zFFmowB1gef7D6lix5LSq2eYwdn4IhdQ4zDXz%2Becd2R7jVce2S6kqU%2Bp2yVgVRjLkdtmqQfFEWhasc3zlv6RrbB%2BSSpfOqJMW2jXq%2BMPGbaVG6EXtZCImrHRyL9hiuHAXytbQVYZdbkfNn8GfI6La2jI2KJkju87LawiL%2BStn8OtNppJPDWXT%2F8nTX2Y5p5vvHB%2FEdV6olVNMwpyi%2FHHy9t%2FMF7npP1XN2y1XIdnkI3dJgQmOves71ZtrKkhcZqkHYB4jTptXRBdBVvaIONoyHNapUjiM9ICca9enqBmnAXztxEEGMrr0vbZFV3GGQHOuo6h411MCxMQ6DXG0n72VbTKP4Ist%2FOR2sOYBBQLvFvClzUUI6L64BlOwIYHMeS4OWmaKhL4LtBhe%2BoaVKNo7o6GmWYV78xrbD6%2BvvbiAQ4JNmPa0DhmT6u9Uz0IEvknFh3fgnUnc%2BuaKxLmT02IpDVlkCC6THQeWCNDEV3ZgOhGe0KoFnA%2BaTntPsNARksmL9O0VD%2BMIE9UwibS2wwY6pgGUln5xnKO7POvtJsUhOeNj0HtFFqWj1NTCkBeom10cjVqPneOURxsRfKxHS7Q5Gbfu114A0j2FbTi7gTXw5%2B2kHbSHpBJB9OdMI97duvcxCrfEJwc%2FtowXDFdKGdUvQfzpbB%2BA2xx1hawckLAW96SBx61I2YuSAhLWY7CScsGcVEA%2BWMLM%2FoMV07nxIUC1pwtbkI5D%2BSkiqfiMJTm8LUOL2seYO899&X-Amz-Signature=8724209417a9eeaeeab364e3102c67ce663c3f86e458a1c5155346ada46e65e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOW44KA6%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8xZOAs7YsNSQ0w34B%2FOG1uiB3kypBuLYjSYcRVro4FAiAEGAclyzr3BtAc7JOk9%2F5CUEOGWqEo2SVEuwiR1SmeHCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMck6XsHpkcsH8IrUwKtwDA98AGXB1XwQI1kXXRR6H8cmX%2BB%2FS8eZy%2FRNkHwmpbFALfujv4RrRwkWshs9a8wTy5S4zpucIFYSRB%2FOvAGJQtkI2tBDhkIMLIS6QTSiH70%2BqMn1zFFmowB1gef7D6lix5LSq2eYwdn4IhdQ4zDXz%2Becd2R7jVce2S6kqU%2Bp2yVgVRjLkdtmqQfFEWhasc3zlv6RrbB%2BSSpfOqJMW2jXq%2BMPGbaVG6EXtZCImrHRyL9hiuHAXytbQVYZdbkfNn8GfI6La2jI2KJkju87LawiL%2BStn8OtNppJPDWXT%2F8nTX2Y5p5vvHB%2FEdV6olVNMwpyi%2FHHy9t%2FMF7npP1XN2y1XIdnkI3dJgQmOves71ZtrKkhcZqkHYB4jTptXRBdBVvaIONoyHNapUjiM9ICca9enqBmnAXztxEEGMrr0vbZFV3GGQHOuo6h411MCxMQ6DXG0n72VbTKP4Ist%2FOR2sOYBBQLvFvClzUUI6L64BlOwIYHMeS4OWmaKhL4LtBhe%2BoaVKNo7o6GmWYV78xrbD6%2BvvbiAQ4JNmPa0DhmT6u9Uz0IEvknFh3fgnUnc%2BuaKxLmT02IpDVlkCC6THQeWCNDEV3ZgOhGe0KoFnA%2BaTntPsNARksmL9O0VD%2BMIE9UwibS2wwY6pgGUln5xnKO7POvtJsUhOeNj0HtFFqWj1NTCkBeom10cjVqPneOURxsRfKxHS7Q5Gbfu114A0j2FbTi7gTXw5%2B2kHbSHpBJB9OdMI97duvcxCrfEJwc%2FtowXDFdKGdUvQfzpbB%2BA2xx1hawckLAW96SBx61I2YuSAhLWY7CScsGcVEA%2BWMLM%2FoMV07nxIUC1pwtbkI5D%2BSkiqfiMJTm8LUOL2seYO899&X-Amz-Signature=fe20af4825e6d2d948341b492e9eaee0e783ddb02b12026557ef755502f0832e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOW44KA6%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8xZOAs7YsNSQ0w34B%2FOG1uiB3kypBuLYjSYcRVro4FAiAEGAclyzr3BtAc7JOk9%2F5CUEOGWqEo2SVEuwiR1SmeHCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMck6XsHpkcsH8IrUwKtwDA98AGXB1XwQI1kXXRR6H8cmX%2BB%2FS8eZy%2FRNkHwmpbFALfujv4RrRwkWshs9a8wTy5S4zpucIFYSRB%2FOvAGJQtkI2tBDhkIMLIS6QTSiH70%2BqMn1zFFmowB1gef7D6lix5LSq2eYwdn4IhdQ4zDXz%2Becd2R7jVce2S6kqU%2Bp2yVgVRjLkdtmqQfFEWhasc3zlv6RrbB%2BSSpfOqJMW2jXq%2BMPGbaVG6EXtZCImrHRyL9hiuHAXytbQVYZdbkfNn8GfI6La2jI2KJkju87LawiL%2BStn8OtNppJPDWXT%2F8nTX2Y5p5vvHB%2FEdV6olVNMwpyi%2FHHy9t%2FMF7npP1XN2y1XIdnkI3dJgQmOves71ZtrKkhcZqkHYB4jTptXRBdBVvaIONoyHNapUjiM9ICca9enqBmnAXztxEEGMrr0vbZFV3GGQHOuo6h411MCxMQ6DXG0n72VbTKP4Ist%2FOR2sOYBBQLvFvClzUUI6L64BlOwIYHMeS4OWmaKhL4LtBhe%2BoaVKNo7o6GmWYV78xrbD6%2BvvbiAQ4JNmPa0DhmT6u9Uz0IEvknFh3fgnUnc%2BuaKxLmT02IpDVlkCC6THQeWCNDEV3ZgOhGe0KoFnA%2BaTntPsNARksmL9O0VD%2BMIE9UwibS2wwY6pgGUln5xnKO7POvtJsUhOeNj0HtFFqWj1NTCkBeom10cjVqPneOURxsRfKxHS7Q5Gbfu114A0j2FbTi7gTXw5%2B2kHbSHpBJB9OdMI97duvcxCrfEJwc%2FtowXDFdKGdUvQfzpbB%2BA2xx1hawckLAW96SBx61I2YuSAhLWY7CScsGcVEA%2BWMLM%2FoMV07nxIUC1pwtbkI5D%2BSkiqfiMJTm8LUOL2seYO899&X-Amz-Signature=8887aead89cf1d0d5dfed77b590b7215468fb25535199dcf71d1fb25fe0dc566&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOW44KA6%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8xZOAs7YsNSQ0w34B%2FOG1uiB3kypBuLYjSYcRVro4FAiAEGAclyzr3BtAc7JOk9%2F5CUEOGWqEo2SVEuwiR1SmeHCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMck6XsHpkcsH8IrUwKtwDA98AGXB1XwQI1kXXRR6H8cmX%2BB%2FS8eZy%2FRNkHwmpbFALfujv4RrRwkWshs9a8wTy5S4zpucIFYSRB%2FOvAGJQtkI2tBDhkIMLIS6QTSiH70%2BqMn1zFFmowB1gef7D6lix5LSq2eYwdn4IhdQ4zDXz%2Becd2R7jVce2S6kqU%2Bp2yVgVRjLkdtmqQfFEWhasc3zlv6RrbB%2BSSpfOqJMW2jXq%2BMPGbaVG6EXtZCImrHRyL9hiuHAXytbQVYZdbkfNn8GfI6La2jI2KJkju87LawiL%2BStn8OtNppJPDWXT%2F8nTX2Y5p5vvHB%2FEdV6olVNMwpyi%2FHHy9t%2FMF7npP1XN2y1XIdnkI3dJgQmOves71ZtrKkhcZqkHYB4jTptXRBdBVvaIONoyHNapUjiM9ICca9enqBmnAXztxEEGMrr0vbZFV3GGQHOuo6h411MCxMQ6DXG0n72VbTKP4Ist%2FOR2sOYBBQLvFvClzUUI6L64BlOwIYHMeS4OWmaKhL4LtBhe%2BoaVKNo7o6GmWYV78xrbD6%2BvvbiAQ4JNmPa0DhmT6u9Uz0IEvknFh3fgnUnc%2BuaKxLmT02IpDVlkCC6THQeWCNDEV3ZgOhGe0KoFnA%2BaTntPsNARksmL9O0VD%2BMIE9UwibS2wwY6pgGUln5xnKO7POvtJsUhOeNj0HtFFqWj1NTCkBeom10cjVqPneOURxsRfKxHS7Q5Gbfu114A0j2FbTi7gTXw5%2B2kHbSHpBJB9OdMI97duvcxCrfEJwc%2FtowXDFdKGdUvQfzpbB%2BA2xx1hawckLAW96SBx61I2YuSAhLWY7CScsGcVEA%2BWMLM%2FoMV07nxIUC1pwtbkI5D%2BSkiqfiMJTm8LUOL2seYO899&X-Amz-Signature=4eb76dcbdf0d4d2a689bf028014768767f40db608501f937cab28b39d6685983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOW44KA6%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8xZOAs7YsNSQ0w34B%2FOG1uiB3kypBuLYjSYcRVro4FAiAEGAclyzr3BtAc7JOk9%2F5CUEOGWqEo2SVEuwiR1SmeHCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMck6XsHpkcsH8IrUwKtwDA98AGXB1XwQI1kXXRR6H8cmX%2BB%2FS8eZy%2FRNkHwmpbFALfujv4RrRwkWshs9a8wTy5S4zpucIFYSRB%2FOvAGJQtkI2tBDhkIMLIS6QTSiH70%2BqMn1zFFmowB1gef7D6lix5LSq2eYwdn4IhdQ4zDXz%2Becd2R7jVce2S6kqU%2Bp2yVgVRjLkdtmqQfFEWhasc3zlv6RrbB%2BSSpfOqJMW2jXq%2BMPGbaVG6EXtZCImrHRyL9hiuHAXytbQVYZdbkfNn8GfI6La2jI2KJkju87LawiL%2BStn8OtNppJPDWXT%2F8nTX2Y5p5vvHB%2FEdV6olVNMwpyi%2FHHy9t%2FMF7npP1XN2y1XIdnkI3dJgQmOves71ZtrKkhcZqkHYB4jTptXRBdBVvaIONoyHNapUjiM9ICca9enqBmnAXztxEEGMrr0vbZFV3GGQHOuo6h411MCxMQ6DXG0n72VbTKP4Ist%2FOR2sOYBBQLvFvClzUUI6L64BlOwIYHMeS4OWmaKhL4LtBhe%2BoaVKNo7o6GmWYV78xrbD6%2BvvbiAQ4JNmPa0DhmT6u9Uz0IEvknFh3fgnUnc%2BuaKxLmT02IpDVlkCC6THQeWCNDEV3ZgOhGe0KoFnA%2BaTntPsNARksmL9O0VD%2BMIE9UwibS2wwY6pgGUln5xnKO7POvtJsUhOeNj0HtFFqWj1NTCkBeom10cjVqPneOURxsRfKxHS7Q5Gbfu114A0j2FbTi7gTXw5%2B2kHbSHpBJB9OdMI97duvcxCrfEJwc%2FtowXDFdKGdUvQfzpbB%2BA2xx1hawckLAW96SBx61I2YuSAhLWY7CScsGcVEA%2BWMLM%2FoMV07nxIUC1pwtbkI5D%2BSkiqfiMJTm8LUOL2seYO899&X-Amz-Signature=7793609a44a8a481bf282bd36c807932d7d07c95696e4893bb4439602ebf44a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOW44KA6%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8xZOAs7YsNSQ0w34B%2FOG1uiB3kypBuLYjSYcRVro4FAiAEGAclyzr3BtAc7JOk9%2F5CUEOGWqEo2SVEuwiR1SmeHCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMck6XsHpkcsH8IrUwKtwDA98AGXB1XwQI1kXXRR6H8cmX%2BB%2FS8eZy%2FRNkHwmpbFALfujv4RrRwkWshs9a8wTy5S4zpucIFYSRB%2FOvAGJQtkI2tBDhkIMLIS6QTSiH70%2BqMn1zFFmowB1gef7D6lix5LSq2eYwdn4IhdQ4zDXz%2Becd2R7jVce2S6kqU%2Bp2yVgVRjLkdtmqQfFEWhasc3zlv6RrbB%2BSSpfOqJMW2jXq%2BMPGbaVG6EXtZCImrHRyL9hiuHAXytbQVYZdbkfNn8GfI6La2jI2KJkju87LawiL%2BStn8OtNppJPDWXT%2F8nTX2Y5p5vvHB%2FEdV6olVNMwpyi%2FHHy9t%2FMF7npP1XN2y1XIdnkI3dJgQmOves71ZtrKkhcZqkHYB4jTptXRBdBVvaIONoyHNapUjiM9ICca9enqBmnAXztxEEGMrr0vbZFV3GGQHOuo6h411MCxMQ6DXG0n72VbTKP4Ist%2FOR2sOYBBQLvFvClzUUI6L64BlOwIYHMeS4OWmaKhL4LtBhe%2BoaVKNo7o6GmWYV78xrbD6%2BvvbiAQ4JNmPa0DhmT6u9Uz0IEvknFh3fgnUnc%2BuaKxLmT02IpDVlkCC6THQeWCNDEV3ZgOhGe0KoFnA%2BaTntPsNARksmL9O0VD%2BMIE9UwibS2wwY6pgGUln5xnKO7POvtJsUhOeNj0HtFFqWj1NTCkBeom10cjVqPneOURxsRfKxHS7Q5Gbfu114A0j2FbTi7gTXw5%2B2kHbSHpBJB9OdMI97duvcxCrfEJwc%2FtowXDFdKGdUvQfzpbB%2BA2xx1hawckLAW96SBx61I2YuSAhLWY7CScsGcVEA%2BWMLM%2FoMV07nxIUC1pwtbkI5D%2BSkiqfiMJTm8LUOL2seYO899&X-Amz-Signature=496e95f268c84d9581a8aea4bb1d13e78fde12d5e320cc37a71bc0aa08c3c2ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOW44KA6%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8xZOAs7YsNSQ0w34B%2FOG1uiB3kypBuLYjSYcRVro4FAiAEGAclyzr3BtAc7JOk9%2F5CUEOGWqEo2SVEuwiR1SmeHCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMck6XsHpkcsH8IrUwKtwDA98AGXB1XwQI1kXXRR6H8cmX%2BB%2FS8eZy%2FRNkHwmpbFALfujv4RrRwkWshs9a8wTy5S4zpucIFYSRB%2FOvAGJQtkI2tBDhkIMLIS6QTSiH70%2BqMn1zFFmowB1gef7D6lix5LSq2eYwdn4IhdQ4zDXz%2Becd2R7jVce2S6kqU%2Bp2yVgVRjLkdtmqQfFEWhasc3zlv6RrbB%2BSSpfOqJMW2jXq%2BMPGbaVG6EXtZCImrHRyL9hiuHAXytbQVYZdbkfNn8GfI6La2jI2KJkju87LawiL%2BStn8OtNppJPDWXT%2F8nTX2Y5p5vvHB%2FEdV6olVNMwpyi%2FHHy9t%2FMF7npP1XN2y1XIdnkI3dJgQmOves71ZtrKkhcZqkHYB4jTptXRBdBVvaIONoyHNapUjiM9ICca9enqBmnAXztxEEGMrr0vbZFV3GGQHOuo6h411MCxMQ6DXG0n72VbTKP4Ist%2FOR2sOYBBQLvFvClzUUI6L64BlOwIYHMeS4OWmaKhL4LtBhe%2BoaVKNo7o6GmWYV78xrbD6%2BvvbiAQ4JNmPa0DhmT6u9Uz0IEvknFh3fgnUnc%2BuaKxLmT02IpDVlkCC6THQeWCNDEV3ZgOhGe0KoFnA%2BaTntPsNARksmL9O0VD%2BMIE9UwibS2wwY6pgGUln5xnKO7POvtJsUhOeNj0HtFFqWj1NTCkBeom10cjVqPneOURxsRfKxHS7Q5Gbfu114A0j2FbTi7gTXw5%2B2kHbSHpBJB9OdMI97duvcxCrfEJwc%2FtowXDFdKGdUvQfzpbB%2BA2xx1hawckLAW96SBx61I2YuSAhLWY7CScsGcVEA%2BWMLM%2FoMV07nxIUC1pwtbkI5D%2BSkiqfiMJTm8LUOL2seYO899&X-Amz-Signature=adfd98bcc28579452ce7133cc19b8f62213ee0c9e670ed3e4b55daf06a89c634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
