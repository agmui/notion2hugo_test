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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE6QUBJM%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIBG9wWJv9yZGhBmu41435JAGUd90P1TuNlV38LMkO4bGAiEAyn9h3tWh6LzbbdHZBIb%2Bi0g%2BewVLJUFDGTkG1M6A6KoqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGsJ72pGGUZBhxVKSrcA0FS2L7bMNlZcb3Jk6cbM37KVOvQjSOt4eEjoug9HLuErM8NEWOOMSVOletSxyGnZmcWGh1Wyb2xUnQfaHvBIMUyuhQb%2FHKCxGZVWGwNyTwNrIKhIdKzBDkrbcFDXzJQBPx%2F4nPPHO1thoaqcc8oSaGdf55I0sR7LBZ3S8qFSpD5D9Cv08E3XrmO0iMTVIO84vgYfZk8CQ0xr76sXzIVguAmx1tubHnAaHEGC0w%2BUfYHLxOY%2FbJ9Si%2Bsi3ZfTTa2gTx01bsK%2FBDOdGIJNa2oP8nyfs6qAx9ezHDZwYsyaIaZ3mh9Mdi4hr9jWr9IqQHChucPkMNvxq4QgwMHSmxygTKrpiNPZm43%2BpKwJktd0cam%2FlCDa7uy7buYH3d55Xghqmt4UU3PWeS9QFKUZtv8xkd6k0NtGqRqFeRV5AA1ziD2jMLWjCIZoWJighlzVgD5hJafahWHViEDDicpvIqeGjYKWpb6wYqFfhf2NNKCCQmwTZv30rrm2HusKKwHz7S5Yf1LIM%2Fa8TN96GaMEeZPN%2BSsoN2IFpH2O7Ne7JrMmY1DhWHkzM1%2B4p0fRDdAsfDRf8c%2Bzj%2BA5J%2BHg6Vl0uDK2Og24X2Q2Q2f81s3lwW4Ib0Kq4%2B0TC3Ltty2z6NOMNKGp78GOqUBTtF0bfWpgyV2S%2FzorQL5IsbaArcO%2BiFNxJvlMsb6fKvMStoTgY0ERY7xgo11ww0ZOVHvCKMXA8qCY1rIIY0%2F2g%2BxnegFRTtfo7maFi549NljJeg9PUspsApjB8Ifl145R%2FvTWlME2ifs6cnRgnc6jff5HqgLORdFdH1yyWEJhG3KYa3tH6JS2kVnmuWz8ZxZSewAh%2BsMxzuyDpEXVl%2BBsbcekQyC&X-Amz-Signature=b241acca86f03463827ec5afe8aa040eca53b921125159e24b03f2e9fd15ca33&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE6QUBJM%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIBG9wWJv9yZGhBmu41435JAGUd90P1TuNlV38LMkO4bGAiEAyn9h3tWh6LzbbdHZBIb%2Bi0g%2BewVLJUFDGTkG1M6A6KoqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGsJ72pGGUZBhxVKSrcA0FS2L7bMNlZcb3Jk6cbM37KVOvQjSOt4eEjoug9HLuErM8NEWOOMSVOletSxyGnZmcWGh1Wyb2xUnQfaHvBIMUyuhQb%2FHKCxGZVWGwNyTwNrIKhIdKzBDkrbcFDXzJQBPx%2F4nPPHO1thoaqcc8oSaGdf55I0sR7LBZ3S8qFSpD5D9Cv08E3XrmO0iMTVIO84vgYfZk8CQ0xr76sXzIVguAmx1tubHnAaHEGC0w%2BUfYHLxOY%2FbJ9Si%2Bsi3ZfTTa2gTx01bsK%2FBDOdGIJNa2oP8nyfs6qAx9ezHDZwYsyaIaZ3mh9Mdi4hr9jWr9IqQHChucPkMNvxq4QgwMHSmxygTKrpiNPZm43%2BpKwJktd0cam%2FlCDa7uy7buYH3d55Xghqmt4UU3PWeS9QFKUZtv8xkd6k0NtGqRqFeRV5AA1ziD2jMLWjCIZoWJighlzVgD5hJafahWHViEDDicpvIqeGjYKWpb6wYqFfhf2NNKCCQmwTZv30rrm2HusKKwHz7S5Yf1LIM%2Fa8TN96GaMEeZPN%2BSsoN2IFpH2O7Ne7JrMmY1DhWHkzM1%2B4p0fRDdAsfDRf8c%2Bzj%2BA5J%2BHg6Vl0uDK2Og24X2Q2Q2f81s3lwW4Ib0Kq4%2B0TC3Ltty2z6NOMNKGp78GOqUBTtF0bfWpgyV2S%2FzorQL5IsbaArcO%2BiFNxJvlMsb6fKvMStoTgY0ERY7xgo11ww0ZOVHvCKMXA8qCY1rIIY0%2F2g%2BxnegFRTtfo7maFi549NljJeg9PUspsApjB8Ifl145R%2FvTWlME2ifs6cnRgnc6jff5HqgLORdFdH1yyWEJhG3KYa3tH6JS2kVnmuWz8ZxZSewAh%2BsMxzuyDpEXVl%2BBsbcekQyC&X-Amz-Signature=3ea4f27cbb281c9810b663e6b9381663c9d44ef6e009ad3e2d02972b8f54b139&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE6QUBJM%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIBG9wWJv9yZGhBmu41435JAGUd90P1TuNlV38LMkO4bGAiEAyn9h3tWh6LzbbdHZBIb%2Bi0g%2BewVLJUFDGTkG1M6A6KoqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGsJ72pGGUZBhxVKSrcA0FS2L7bMNlZcb3Jk6cbM37KVOvQjSOt4eEjoug9HLuErM8NEWOOMSVOletSxyGnZmcWGh1Wyb2xUnQfaHvBIMUyuhQb%2FHKCxGZVWGwNyTwNrIKhIdKzBDkrbcFDXzJQBPx%2F4nPPHO1thoaqcc8oSaGdf55I0sR7LBZ3S8qFSpD5D9Cv08E3XrmO0iMTVIO84vgYfZk8CQ0xr76sXzIVguAmx1tubHnAaHEGC0w%2BUfYHLxOY%2FbJ9Si%2Bsi3ZfTTa2gTx01bsK%2FBDOdGIJNa2oP8nyfs6qAx9ezHDZwYsyaIaZ3mh9Mdi4hr9jWr9IqQHChucPkMNvxq4QgwMHSmxygTKrpiNPZm43%2BpKwJktd0cam%2FlCDa7uy7buYH3d55Xghqmt4UU3PWeS9QFKUZtv8xkd6k0NtGqRqFeRV5AA1ziD2jMLWjCIZoWJighlzVgD5hJafahWHViEDDicpvIqeGjYKWpb6wYqFfhf2NNKCCQmwTZv30rrm2HusKKwHz7S5Yf1LIM%2Fa8TN96GaMEeZPN%2BSsoN2IFpH2O7Ne7JrMmY1DhWHkzM1%2B4p0fRDdAsfDRf8c%2Bzj%2BA5J%2BHg6Vl0uDK2Og24X2Q2Q2f81s3lwW4Ib0Kq4%2B0TC3Ltty2z6NOMNKGp78GOqUBTtF0bfWpgyV2S%2FzorQL5IsbaArcO%2BiFNxJvlMsb6fKvMStoTgY0ERY7xgo11ww0ZOVHvCKMXA8qCY1rIIY0%2F2g%2BxnegFRTtfo7maFi549NljJeg9PUspsApjB8Ifl145R%2FvTWlME2ifs6cnRgnc6jff5HqgLORdFdH1yyWEJhG3KYa3tH6JS2kVnmuWz8ZxZSewAh%2BsMxzuyDpEXVl%2BBsbcekQyC&X-Amz-Signature=ef9091c06f497860ad4a13ea9e05525e42c9fe090598bb1501749f73fe7489fb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE6QUBJM%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIBG9wWJv9yZGhBmu41435JAGUd90P1TuNlV38LMkO4bGAiEAyn9h3tWh6LzbbdHZBIb%2Bi0g%2BewVLJUFDGTkG1M6A6KoqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGsJ72pGGUZBhxVKSrcA0FS2L7bMNlZcb3Jk6cbM37KVOvQjSOt4eEjoug9HLuErM8NEWOOMSVOletSxyGnZmcWGh1Wyb2xUnQfaHvBIMUyuhQb%2FHKCxGZVWGwNyTwNrIKhIdKzBDkrbcFDXzJQBPx%2F4nPPHO1thoaqcc8oSaGdf55I0sR7LBZ3S8qFSpD5D9Cv08E3XrmO0iMTVIO84vgYfZk8CQ0xr76sXzIVguAmx1tubHnAaHEGC0w%2BUfYHLxOY%2FbJ9Si%2Bsi3ZfTTa2gTx01bsK%2FBDOdGIJNa2oP8nyfs6qAx9ezHDZwYsyaIaZ3mh9Mdi4hr9jWr9IqQHChucPkMNvxq4QgwMHSmxygTKrpiNPZm43%2BpKwJktd0cam%2FlCDa7uy7buYH3d55Xghqmt4UU3PWeS9QFKUZtv8xkd6k0NtGqRqFeRV5AA1ziD2jMLWjCIZoWJighlzVgD5hJafahWHViEDDicpvIqeGjYKWpb6wYqFfhf2NNKCCQmwTZv30rrm2HusKKwHz7S5Yf1LIM%2Fa8TN96GaMEeZPN%2BSsoN2IFpH2O7Ne7JrMmY1DhWHkzM1%2B4p0fRDdAsfDRf8c%2Bzj%2BA5J%2BHg6Vl0uDK2Og24X2Q2Q2f81s3lwW4Ib0Kq4%2B0TC3Ltty2z6NOMNKGp78GOqUBTtF0bfWpgyV2S%2FzorQL5IsbaArcO%2BiFNxJvlMsb6fKvMStoTgY0ERY7xgo11ww0ZOVHvCKMXA8qCY1rIIY0%2F2g%2BxnegFRTtfo7maFi549NljJeg9PUspsApjB8Ifl145R%2FvTWlME2ifs6cnRgnc6jff5HqgLORdFdH1yyWEJhG3KYa3tH6JS2kVnmuWz8ZxZSewAh%2BsMxzuyDpEXVl%2BBsbcekQyC&X-Amz-Signature=d5c695b8573ae7a6310aa3c49c9b764d13ba3bf6bd1fe5655a4ca6a1dc73ac1b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE6QUBJM%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIBG9wWJv9yZGhBmu41435JAGUd90P1TuNlV38LMkO4bGAiEAyn9h3tWh6LzbbdHZBIb%2Bi0g%2BewVLJUFDGTkG1M6A6KoqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGsJ72pGGUZBhxVKSrcA0FS2L7bMNlZcb3Jk6cbM37KVOvQjSOt4eEjoug9HLuErM8NEWOOMSVOletSxyGnZmcWGh1Wyb2xUnQfaHvBIMUyuhQb%2FHKCxGZVWGwNyTwNrIKhIdKzBDkrbcFDXzJQBPx%2F4nPPHO1thoaqcc8oSaGdf55I0sR7LBZ3S8qFSpD5D9Cv08E3XrmO0iMTVIO84vgYfZk8CQ0xr76sXzIVguAmx1tubHnAaHEGC0w%2BUfYHLxOY%2FbJ9Si%2Bsi3ZfTTa2gTx01bsK%2FBDOdGIJNa2oP8nyfs6qAx9ezHDZwYsyaIaZ3mh9Mdi4hr9jWr9IqQHChucPkMNvxq4QgwMHSmxygTKrpiNPZm43%2BpKwJktd0cam%2FlCDa7uy7buYH3d55Xghqmt4UU3PWeS9QFKUZtv8xkd6k0NtGqRqFeRV5AA1ziD2jMLWjCIZoWJighlzVgD5hJafahWHViEDDicpvIqeGjYKWpb6wYqFfhf2NNKCCQmwTZv30rrm2HusKKwHz7S5Yf1LIM%2Fa8TN96GaMEeZPN%2BSsoN2IFpH2O7Ne7JrMmY1DhWHkzM1%2B4p0fRDdAsfDRf8c%2Bzj%2BA5J%2BHg6Vl0uDK2Og24X2Q2Q2f81s3lwW4Ib0Kq4%2B0TC3Ltty2z6NOMNKGp78GOqUBTtF0bfWpgyV2S%2FzorQL5IsbaArcO%2BiFNxJvlMsb6fKvMStoTgY0ERY7xgo11ww0ZOVHvCKMXA8qCY1rIIY0%2F2g%2BxnegFRTtfo7maFi549NljJeg9PUspsApjB8Ifl145R%2FvTWlME2ifs6cnRgnc6jff5HqgLORdFdH1yyWEJhG3KYa3tH6JS2kVnmuWz8ZxZSewAh%2BsMxzuyDpEXVl%2BBsbcekQyC&X-Amz-Signature=4f33d7b1a3e99828acdd836d6ff048c90750f08de6d7df84622ca10eac61386e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE6QUBJM%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIBG9wWJv9yZGhBmu41435JAGUd90P1TuNlV38LMkO4bGAiEAyn9h3tWh6LzbbdHZBIb%2Bi0g%2BewVLJUFDGTkG1M6A6KoqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGsJ72pGGUZBhxVKSrcA0FS2L7bMNlZcb3Jk6cbM37KVOvQjSOt4eEjoug9HLuErM8NEWOOMSVOletSxyGnZmcWGh1Wyb2xUnQfaHvBIMUyuhQb%2FHKCxGZVWGwNyTwNrIKhIdKzBDkrbcFDXzJQBPx%2F4nPPHO1thoaqcc8oSaGdf55I0sR7LBZ3S8qFSpD5D9Cv08E3XrmO0iMTVIO84vgYfZk8CQ0xr76sXzIVguAmx1tubHnAaHEGC0w%2BUfYHLxOY%2FbJ9Si%2Bsi3ZfTTa2gTx01bsK%2FBDOdGIJNa2oP8nyfs6qAx9ezHDZwYsyaIaZ3mh9Mdi4hr9jWr9IqQHChucPkMNvxq4QgwMHSmxygTKrpiNPZm43%2BpKwJktd0cam%2FlCDa7uy7buYH3d55Xghqmt4UU3PWeS9QFKUZtv8xkd6k0NtGqRqFeRV5AA1ziD2jMLWjCIZoWJighlzVgD5hJafahWHViEDDicpvIqeGjYKWpb6wYqFfhf2NNKCCQmwTZv30rrm2HusKKwHz7S5Yf1LIM%2Fa8TN96GaMEeZPN%2BSsoN2IFpH2O7Ne7JrMmY1DhWHkzM1%2B4p0fRDdAsfDRf8c%2Bzj%2BA5J%2BHg6Vl0uDK2Og24X2Q2Q2f81s3lwW4Ib0Kq4%2B0TC3Ltty2z6NOMNKGp78GOqUBTtF0bfWpgyV2S%2FzorQL5IsbaArcO%2BiFNxJvlMsb6fKvMStoTgY0ERY7xgo11ww0ZOVHvCKMXA8qCY1rIIY0%2F2g%2BxnegFRTtfo7maFi549NljJeg9PUspsApjB8Ifl145R%2FvTWlME2ifs6cnRgnc6jff5HqgLORdFdH1yyWEJhG3KYa3tH6JS2kVnmuWz8ZxZSewAh%2BsMxzuyDpEXVl%2BBsbcekQyC&X-Amz-Signature=dc2de115436d7d000f65897aa8d3dda56ecd6a155067a83ba760f1463a286f97&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE6QUBJM%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIBG9wWJv9yZGhBmu41435JAGUd90P1TuNlV38LMkO4bGAiEAyn9h3tWh6LzbbdHZBIb%2Bi0g%2BewVLJUFDGTkG1M6A6KoqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGsJ72pGGUZBhxVKSrcA0FS2L7bMNlZcb3Jk6cbM37KVOvQjSOt4eEjoug9HLuErM8NEWOOMSVOletSxyGnZmcWGh1Wyb2xUnQfaHvBIMUyuhQb%2FHKCxGZVWGwNyTwNrIKhIdKzBDkrbcFDXzJQBPx%2F4nPPHO1thoaqcc8oSaGdf55I0sR7LBZ3S8qFSpD5D9Cv08E3XrmO0iMTVIO84vgYfZk8CQ0xr76sXzIVguAmx1tubHnAaHEGC0w%2BUfYHLxOY%2FbJ9Si%2Bsi3ZfTTa2gTx01bsK%2FBDOdGIJNa2oP8nyfs6qAx9ezHDZwYsyaIaZ3mh9Mdi4hr9jWr9IqQHChucPkMNvxq4QgwMHSmxygTKrpiNPZm43%2BpKwJktd0cam%2FlCDa7uy7buYH3d55Xghqmt4UU3PWeS9QFKUZtv8xkd6k0NtGqRqFeRV5AA1ziD2jMLWjCIZoWJighlzVgD5hJafahWHViEDDicpvIqeGjYKWpb6wYqFfhf2NNKCCQmwTZv30rrm2HusKKwHz7S5Yf1LIM%2Fa8TN96GaMEeZPN%2BSsoN2IFpH2O7Ne7JrMmY1DhWHkzM1%2B4p0fRDdAsfDRf8c%2Bzj%2BA5J%2BHg6Vl0uDK2Og24X2Q2Q2f81s3lwW4Ib0Kq4%2B0TC3Ltty2z6NOMNKGp78GOqUBTtF0bfWpgyV2S%2FzorQL5IsbaArcO%2BiFNxJvlMsb6fKvMStoTgY0ERY7xgo11ww0ZOVHvCKMXA8qCY1rIIY0%2F2g%2BxnegFRTtfo7maFi549NljJeg9PUspsApjB8Ifl145R%2FvTWlME2ifs6cnRgnc6jff5HqgLORdFdH1yyWEJhG3KYa3tH6JS2kVnmuWz8ZxZSewAh%2BsMxzuyDpEXVl%2BBsbcekQyC&X-Amz-Signature=98ca7cbeb46732f2ff2dad48afaf5e38b636e675a443695247189686a26ea514&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
