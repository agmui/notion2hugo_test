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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTXE5BDQ%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0K9vWgvmQ9%2BIwiasF6km0sw0vqpyRNkxUulOS%2BmGK4gIgTml1hc4L9p4zJ4PpspqVlR3iXB1BD97vke71FPwDCpMqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVZEZwl8KhZaKuRqSrcA7YuRz7Vmee8vkMXaTLUmOLDvjdpIo0MuWVj2HrUaFp0vklMXKjKQ5ojTxvfUEtJY2YJAdsZmF8vaE05GjH8upK%2Bs7ux6XCIbG3F0yXomr6cteqc3ewWsQvj2FRQTbReOk4kX7EErJT5%2FoOzDeem8YyDICOgcNls1Kpcr6lQz8DAeA55221CD3kFExPSgNn7aZ4rbixECkR3EYqsBmE6ISW%2BP50Sf3QzFpREHdywJTcx0NlC6IFWppRXORnaZJvjChGqsuZlghUs4oNi%2FUobs4hish1W3LNZh2Dklmq2efOp1f0kcVVAMgFSSenXHpaJWMhMvkOEFSDazdoqSYlF9lRPKR9kjbeHq2RBG%2Bk8Ui9QyScG2UADgOUVraseY%2FWODJYOMUBWr1Kk8dgy0KS%2FEiDX88KAP78JXo%2BrMbhcKfnjXzpQG9nCH4aPAQoI9%2BhNvBXEh8ZgE8Esbwqt5mZhpmjPvAlVrUGcNTVvRdljNzEU6ycN5hovr%2BJnRiu1%2FpYrgjOpjATN%2FvSE9YatQ%2FV9Y6iB3hdGAF7RDi5Qm3CukwTEVjaDfYYaSaZBkmNXYcg3yBs1mrEebSmDa86ootIfM57ORwzFR85Dwfvk%2B%2FUHnr%2B87%2BEpTu3bGoBGgjPOMOKezsUGOqUB%2BUoSYElGr4R7vQmANC4Aes%2Blr1jzfgmnYBA0Y9SQUBJZNQseHmYBMCkqYlKIAAkkzrB6c5sHFekaJPHA3C2BEnGrYJBG9mdXHfRHL%2B3S9MuZtKIGzbZphz9WPt9vO7sWW%2BUxSNcpyRNTri2QroHcTkIuFE7oLej4duw7koL%2BZpGPGLbe0%2BBX%2FsPUvtluS5%2Fp2oexu%2BrAC10ME%2BVIdyFX2KgJT2M5&X-Amz-Signature=34519157863ecc3e2222ccaca6ba530ded28baa14270dfa02747f0e5b62c9837&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTXE5BDQ%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0K9vWgvmQ9%2BIwiasF6km0sw0vqpyRNkxUulOS%2BmGK4gIgTml1hc4L9p4zJ4PpspqVlR3iXB1BD97vke71FPwDCpMqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVZEZwl8KhZaKuRqSrcA7YuRz7Vmee8vkMXaTLUmOLDvjdpIo0MuWVj2HrUaFp0vklMXKjKQ5ojTxvfUEtJY2YJAdsZmF8vaE05GjH8upK%2Bs7ux6XCIbG3F0yXomr6cteqc3ewWsQvj2FRQTbReOk4kX7EErJT5%2FoOzDeem8YyDICOgcNls1Kpcr6lQz8DAeA55221CD3kFExPSgNn7aZ4rbixECkR3EYqsBmE6ISW%2BP50Sf3QzFpREHdywJTcx0NlC6IFWppRXORnaZJvjChGqsuZlghUs4oNi%2FUobs4hish1W3LNZh2Dklmq2efOp1f0kcVVAMgFSSenXHpaJWMhMvkOEFSDazdoqSYlF9lRPKR9kjbeHq2RBG%2Bk8Ui9QyScG2UADgOUVraseY%2FWODJYOMUBWr1Kk8dgy0KS%2FEiDX88KAP78JXo%2BrMbhcKfnjXzpQG9nCH4aPAQoI9%2BhNvBXEh8ZgE8Esbwqt5mZhpmjPvAlVrUGcNTVvRdljNzEU6ycN5hovr%2BJnRiu1%2FpYrgjOpjATN%2FvSE9YatQ%2FV9Y6iB3hdGAF7RDi5Qm3CukwTEVjaDfYYaSaZBkmNXYcg3yBs1mrEebSmDa86ootIfM57ORwzFR85Dwfvk%2B%2FUHnr%2B87%2BEpTu3bGoBGgjPOMOKezsUGOqUB%2BUoSYElGr4R7vQmANC4Aes%2Blr1jzfgmnYBA0Y9SQUBJZNQseHmYBMCkqYlKIAAkkzrB6c5sHFekaJPHA3C2BEnGrYJBG9mdXHfRHL%2B3S9MuZtKIGzbZphz9WPt9vO7sWW%2BUxSNcpyRNTri2QroHcTkIuFE7oLej4duw7koL%2BZpGPGLbe0%2BBX%2FsPUvtluS5%2Fp2oexu%2BrAC10ME%2BVIdyFX2KgJT2M5&X-Amz-Signature=69969a743645d41027df65b2e9213706157b7ae277dc4b4ff8395c2f6f578166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTXE5BDQ%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0K9vWgvmQ9%2BIwiasF6km0sw0vqpyRNkxUulOS%2BmGK4gIgTml1hc4L9p4zJ4PpspqVlR3iXB1BD97vke71FPwDCpMqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVZEZwl8KhZaKuRqSrcA7YuRz7Vmee8vkMXaTLUmOLDvjdpIo0MuWVj2HrUaFp0vklMXKjKQ5ojTxvfUEtJY2YJAdsZmF8vaE05GjH8upK%2Bs7ux6XCIbG3F0yXomr6cteqc3ewWsQvj2FRQTbReOk4kX7EErJT5%2FoOzDeem8YyDICOgcNls1Kpcr6lQz8DAeA55221CD3kFExPSgNn7aZ4rbixECkR3EYqsBmE6ISW%2BP50Sf3QzFpREHdywJTcx0NlC6IFWppRXORnaZJvjChGqsuZlghUs4oNi%2FUobs4hish1W3LNZh2Dklmq2efOp1f0kcVVAMgFSSenXHpaJWMhMvkOEFSDazdoqSYlF9lRPKR9kjbeHq2RBG%2Bk8Ui9QyScG2UADgOUVraseY%2FWODJYOMUBWr1Kk8dgy0KS%2FEiDX88KAP78JXo%2BrMbhcKfnjXzpQG9nCH4aPAQoI9%2BhNvBXEh8ZgE8Esbwqt5mZhpmjPvAlVrUGcNTVvRdljNzEU6ycN5hovr%2BJnRiu1%2FpYrgjOpjATN%2FvSE9YatQ%2FV9Y6iB3hdGAF7RDi5Qm3CukwTEVjaDfYYaSaZBkmNXYcg3yBs1mrEebSmDa86ootIfM57ORwzFR85Dwfvk%2B%2FUHnr%2B87%2BEpTu3bGoBGgjPOMOKezsUGOqUB%2BUoSYElGr4R7vQmANC4Aes%2Blr1jzfgmnYBA0Y9SQUBJZNQseHmYBMCkqYlKIAAkkzrB6c5sHFekaJPHA3C2BEnGrYJBG9mdXHfRHL%2B3S9MuZtKIGzbZphz9WPt9vO7sWW%2BUxSNcpyRNTri2QroHcTkIuFE7oLej4duw7koL%2BZpGPGLbe0%2BBX%2FsPUvtluS5%2Fp2oexu%2BrAC10ME%2BVIdyFX2KgJT2M5&X-Amz-Signature=06c1ea3e0ccd4c78b3ca97d32b0a168e767eaae5b78adf8860ac0b89916538bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTXE5BDQ%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0K9vWgvmQ9%2BIwiasF6km0sw0vqpyRNkxUulOS%2BmGK4gIgTml1hc4L9p4zJ4PpspqVlR3iXB1BD97vke71FPwDCpMqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVZEZwl8KhZaKuRqSrcA7YuRz7Vmee8vkMXaTLUmOLDvjdpIo0MuWVj2HrUaFp0vklMXKjKQ5ojTxvfUEtJY2YJAdsZmF8vaE05GjH8upK%2Bs7ux6XCIbG3F0yXomr6cteqc3ewWsQvj2FRQTbReOk4kX7EErJT5%2FoOzDeem8YyDICOgcNls1Kpcr6lQz8DAeA55221CD3kFExPSgNn7aZ4rbixECkR3EYqsBmE6ISW%2BP50Sf3QzFpREHdywJTcx0NlC6IFWppRXORnaZJvjChGqsuZlghUs4oNi%2FUobs4hish1W3LNZh2Dklmq2efOp1f0kcVVAMgFSSenXHpaJWMhMvkOEFSDazdoqSYlF9lRPKR9kjbeHq2RBG%2Bk8Ui9QyScG2UADgOUVraseY%2FWODJYOMUBWr1Kk8dgy0KS%2FEiDX88KAP78JXo%2BrMbhcKfnjXzpQG9nCH4aPAQoI9%2BhNvBXEh8ZgE8Esbwqt5mZhpmjPvAlVrUGcNTVvRdljNzEU6ycN5hovr%2BJnRiu1%2FpYrgjOpjATN%2FvSE9YatQ%2FV9Y6iB3hdGAF7RDi5Qm3CukwTEVjaDfYYaSaZBkmNXYcg3yBs1mrEebSmDa86ootIfM57ORwzFR85Dwfvk%2B%2FUHnr%2B87%2BEpTu3bGoBGgjPOMOKezsUGOqUB%2BUoSYElGr4R7vQmANC4Aes%2Blr1jzfgmnYBA0Y9SQUBJZNQseHmYBMCkqYlKIAAkkzrB6c5sHFekaJPHA3C2BEnGrYJBG9mdXHfRHL%2B3S9MuZtKIGzbZphz9WPt9vO7sWW%2BUxSNcpyRNTri2QroHcTkIuFE7oLej4duw7koL%2BZpGPGLbe0%2BBX%2FsPUvtluS5%2Fp2oexu%2BrAC10ME%2BVIdyFX2KgJT2M5&X-Amz-Signature=cfb7825b22b44d2edaa7c21544ffeb1002e0079dd27f52b5ffbef641e3343473&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTXE5BDQ%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0K9vWgvmQ9%2BIwiasF6km0sw0vqpyRNkxUulOS%2BmGK4gIgTml1hc4L9p4zJ4PpspqVlR3iXB1BD97vke71FPwDCpMqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVZEZwl8KhZaKuRqSrcA7YuRz7Vmee8vkMXaTLUmOLDvjdpIo0MuWVj2HrUaFp0vklMXKjKQ5ojTxvfUEtJY2YJAdsZmF8vaE05GjH8upK%2Bs7ux6XCIbG3F0yXomr6cteqc3ewWsQvj2FRQTbReOk4kX7EErJT5%2FoOzDeem8YyDICOgcNls1Kpcr6lQz8DAeA55221CD3kFExPSgNn7aZ4rbixECkR3EYqsBmE6ISW%2BP50Sf3QzFpREHdywJTcx0NlC6IFWppRXORnaZJvjChGqsuZlghUs4oNi%2FUobs4hish1W3LNZh2Dklmq2efOp1f0kcVVAMgFSSenXHpaJWMhMvkOEFSDazdoqSYlF9lRPKR9kjbeHq2RBG%2Bk8Ui9QyScG2UADgOUVraseY%2FWODJYOMUBWr1Kk8dgy0KS%2FEiDX88KAP78JXo%2BrMbhcKfnjXzpQG9nCH4aPAQoI9%2BhNvBXEh8ZgE8Esbwqt5mZhpmjPvAlVrUGcNTVvRdljNzEU6ycN5hovr%2BJnRiu1%2FpYrgjOpjATN%2FvSE9YatQ%2FV9Y6iB3hdGAF7RDi5Qm3CukwTEVjaDfYYaSaZBkmNXYcg3yBs1mrEebSmDa86ootIfM57ORwzFR85Dwfvk%2B%2FUHnr%2B87%2BEpTu3bGoBGgjPOMOKezsUGOqUB%2BUoSYElGr4R7vQmANC4Aes%2Blr1jzfgmnYBA0Y9SQUBJZNQseHmYBMCkqYlKIAAkkzrB6c5sHFekaJPHA3C2BEnGrYJBG9mdXHfRHL%2B3S9MuZtKIGzbZphz9WPt9vO7sWW%2BUxSNcpyRNTri2QroHcTkIuFE7oLej4duw7koL%2BZpGPGLbe0%2BBX%2FsPUvtluS5%2Fp2oexu%2BrAC10ME%2BVIdyFX2KgJT2M5&X-Amz-Signature=a12678f34958aed4fb74f73c2d5a3e267a18c3d57da19f78ceab0d68916cfa5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTXE5BDQ%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0K9vWgvmQ9%2BIwiasF6km0sw0vqpyRNkxUulOS%2BmGK4gIgTml1hc4L9p4zJ4PpspqVlR3iXB1BD97vke71FPwDCpMqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVZEZwl8KhZaKuRqSrcA7YuRz7Vmee8vkMXaTLUmOLDvjdpIo0MuWVj2HrUaFp0vklMXKjKQ5ojTxvfUEtJY2YJAdsZmF8vaE05GjH8upK%2Bs7ux6XCIbG3F0yXomr6cteqc3ewWsQvj2FRQTbReOk4kX7EErJT5%2FoOzDeem8YyDICOgcNls1Kpcr6lQz8DAeA55221CD3kFExPSgNn7aZ4rbixECkR3EYqsBmE6ISW%2BP50Sf3QzFpREHdywJTcx0NlC6IFWppRXORnaZJvjChGqsuZlghUs4oNi%2FUobs4hish1W3LNZh2Dklmq2efOp1f0kcVVAMgFSSenXHpaJWMhMvkOEFSDazdoqSYlF9lRPKR9kjbeHq2RBG%2Bk8Ui9QyScG2UADgOUVraseY%2FWODJYOMUBWr1Kk8dgy0KS%2FEiDX88KAP78JXo%2BrMbhcKfnjXzpQG9nCH4aPAQoI9%2BhNvBXEh8ZgE8Esbwqt5mZhpmjPvAlVrUGcNTVvRdljNzEU6ycN5hovr%2BJnRiu1%2FpYrgjOpjATN%2FvSE9YatQ%2FV9Y6iB3hdGAF7RDi5Qm3CukwTEVjaDfYYaSaZBkmNXYcg3yBs1mrEebSmDa86ootIfM57ORwzFR85Dwfvk%2B%2FUHnr%2B87%2BEpTu3bGoBGgjPOMOKezsUGOqUB%2BUoSYElGr4R7vQmANC4Aes%2Blr1jzfgmnYBA0Y9SQUBJZNQseHmYBMCkqYlKIAAkkzrB6c5sHFekaJPHA3C2BEnGrYJBG9mdXHfRHL%2B3S9MuZtKIGzbZphz9WPt9vO7sWW%2BUxSNcpyRNTri2QroHcTkIuFE7oLej4duw7koL%2BZpGPGLbe0%2BBX%2FsPUvtluS5%2Fp2oexu%2BrAC10ME%2BVIdyFX2KgJT2M5&X-Amz-Signature=c3ac30d98482e0cea4a3e26c20b74240ed5b256518548d36dacc7a7cda2e9310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTXE5BDQ%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0K9vWgvmQ9%2BIwiasF6km0sw0vqpyRNkxUulOS%2BmGK4gIgTml1hc4L9p4zJ4PpspqVlR3iXB1BD97vke71FPwDCpMqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVZEZwl8KhZaKuRqSrcA7YuRz7Vmee8vkMXaTLUmOLDvjdpIo0MuWVj2HrUaFp0vklMXKjKQ5ojTxvfUEtJY2YJAdsZmF8vaE05GjH8upK%2Bs7ux6XCIbG3F0yXomr6cteqc3ewWsQvj2FRQTbReOk4kX7EErJT5%2FoOzDeem8YyDICOgcNls1Kpcr6lQz8DAeA55221CD3kFExPSgNn7aZ4rbixECkR3EYqsBmE6ISW%2BP50Sf3QzFpREHdywJTcx0NlC6IFWppRXORnaZJvjChGqsuZlghUs4oNi%2FUobs4hish1W3LNZh2Dklmq2efOp1f0kcVVAMgFSSenXHpaJWMhMvkOEFSDazdoqSYlF9lRPKR9kjbeHq2RBG%2Bk8Ui9QyScG2UADgOUVraseY%2FWODJYOMUBWr1Kk8dgy0KS%2FEiDX88KAP78JXo%2BrMbhcKfnjXzpQG9nCH4aPAQoI9%2BhNvBXEh8ZgE8Esbwqt5mZhpmjPvAlVrUGcNTVvRdljNzEU6ycN5hovr%2BJnRiu1%2FpYrgjOpjATN%2FvSE9YatQ%2FV9Y6iB3hdGAF7RDi5Qm3CukwTEVjaDfYYaSaZBkmNXYcg3yBs1mrEebSmDa86ootIfM57ORwzFR85Dwfvk%2B%2FUHnr%2B87%2BEpTu3bGoBGgjPOMOKezsUGOqUB%2BUoSYElGr4R7vQmANC4Aes%2Blr1jzfgmnYBA0Y9SQUBJZNQseHmYBMCkqYlKIAAkkzrB6c5sHFekaJPHA3C2BEnGrYJBG9mdXHfRHL%2B3S9MuZtKIGzbZphz9WPt9vO7sWW%2BUxSNcpyRNTri2QroHcTkIuFE7oLej4duw7koL%2BZpGPGLbe0%2BBX%2FsPUvtluS5%2Fp2oexu%2BrAC10ME%2BVIdyFX2KgJT2M5&X-Amz-Signature=f9cfada19644d1667e27e1729395a313f1c588534944e3212fdfb00cb1719b48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
