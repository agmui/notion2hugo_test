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
      <summary>What are ROS Packages?</summary>
      ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO2FU5NJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDpKPxLMfKaif6n6OQ2frOUrba7XlKGktWtC1LA6e3bCAiA1%2FDi7DnTCa6a8iBKvx%2Fbfus%2F4%2BVZu2%2BU6J3pPWMgitCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMC5yxqs4KwlJ1h6aiKtwDCljiuaZu6ORuChuv8RPZBAXw2%2FdKGVJ5hBN1Dv2LbepI05FL%2F6F7ZZjqmN1aRRAZeUfTEy5r2Y6VBv11bUW4KYIyYo1MLoQg8lyWLy%2Bq%2BZoRTnt4%2FV%2B2P4VLQve5%2Bio14uvyFT8u%2BIHOKaJqnzHvHg%2BG1QjNIYz2iHA6gW%2F7A8zkLQhfKbh2rMrfFYNF8rrYWr6G25NBE1J5gSpCg9UNpwnERCrK65Hnb3E99gSFyZrfos1vGEtWkr8B8mmDdcWQOXTV49shdoeFcv8fhnJOIqCglEpW3cWz%2BvvwJqIGA13lidJ%2BqZTShvI6vtLS%2BoWRJBrdgNxUie8KF6x3ebsUXx8T26SK9f%2BLw%2FFJaC%2Ft7U3BnR2J9JtdUB1kJNxQ%2FGrFsmb1CtXHmvZwJ1aMbi8QU%2FIE7L2n0fRMzxjSCspeEBKjS3M7TI%2BjXOmKoEmUOVQWVI1Sz5RVR7LSOfRD3n2D21jAYr40DFvXFGWVqq9OlrMJop6HgqGdMMM9KkvL%2B2M%2FhJr5J52pBLBg6ohV9YYoyzcuUrfdbL6oIR9byUCzFHt3%2B2P9tRMENf%2F0CjQCyU3%2FUNr9RC2AyT6XP38Ss5kTmCUYYsEqccqBcszKNJP4BjnivdhHOtAgtlFUWkIw5df%2BxAY6pgGem4CF4MbF%2FkIkVkVWH8W7iaMSiQgeQt4ZIPbLOjSr%2FpKTRwzs0iM%2F%2BBxNw%2FTZiziydqY9AjkXFBS%2FaEuLiEtTbGTcmzYNqmUDOG%2BBNJ1pzqScog3JpbJ0bYHNsZOWuWhXN4YE%2BtI4umAroLamNTQipmHYjgEgSKtQOYsAcIhpmVCRl4oSeLD8%2BW%2B4IBsk%2BsLFDasmYX%2BaP6swdDsJBbdeTSpT0LId&X-Amz-Signature=2383761a5d3769fa092a63dbf64d88fccf816c0537a3db84af6c07e49faab084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO2FU5NJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDpKPxLMfKaif6n6OQ2frOUrba7XlKGktWtC1LA6e3bCAiA1%2FDi7DnTCa6a8iBKvx%2Fbfus%2F4%2BVZu2%2BU6J3pPWMgitCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMC5yxqs4KwlJ1h6aiKtwDCljiuaZu6ORuChuv8RPZBAXw2%2FdKGVJ5hBN1Dv2LbepI05FL%2F6F7ZZjqmN1aRRAZeUfTEy5r2Y6VBv11bUW4KYIyYo1MLoQg8lyWLy%2Bq%2BZoRTnt4%2FV%2B2P4VLQve5%2Bio14uvyFT8u%2BIHOKaJqnzHvHg%2BG1QjNIYz2iHA6gW%2F7A8zkLQhfKbh2rMrfFYNF8rrYWr6G25NBE1J5gSpCg9UNpwnERCrK65Hnb3E99gSFyZrfos1vGEtWkr8B8mmDdcWQOXTV49shdoeFcv8fhnJOIqCglEpW3cWz%2BvvwJqIGA13lidJ%2BqZTShvI6vtLS%2BoWRJBrdgNxUie8KF6x3ebsUXx8T26SK9f%2BLw%2FFJaC%2Ft7U3BnR2J9JtdUB1kJNxQ%2FGrFsmb1CtXHmvZwJ1aMbi8QU%2FIE7L2n0fRMzxjSCspeEBKjS3M7TI%2BjXOmKoEmUOVQWVI1Sz5RVR7LSOfRD3n2D21jAYr40DFvXFGWVqq9OlrMJop6HgqGdMMM9KkvL%2B2M%2FhJr5J52pBLBg6ohV9YYoyzcuUrfdbL6oIR9byUCzFHt3%2B2P9tRMENf%2F0CjQCyU3%2FUNr9RC2AyT6XP38Ss5kTmCUYYsEqccqBcszKNJP4BjnivdhHOtAgtlFUWkIw5df%2BxAY6pgGem4CF4MbF%2FkIkVkVWH8W7iaMSiQgeQt4ZIPbLOjSr%2FpKTRwzs0iM%2F%2BBxNw%2FTZiziydqY9AjkXFBS%2FaEuLiEtTbGTcmzYNqmUDOG%2BBNJ1pzqScog3JpbJ0bYHNsZOWuWhXN4YE%2BtI4umAroLamNTQipmHYjgEgSKtQOYsAcIhpmVCRl4oSeLD8%2BW%2B4IBsk%2BsLFDasmYX%2BaP6swdDsJBbdeTSpT0LId&X-Amz-Signature=70cab20f1f0210b1e960e6d879359a4aee0e55fc97b8c1800308c08616014f66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO2FU5NJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDpKPxLMfKaif6n6OQ2frOUrba7XlKGktWtC1LA6e3bCAiA1%2FDi7DnTCa6a8iBKvx%2Fbfus%2F4%2BVZu2%2BU6J3pPWMgitCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMC5yxqs4KwlJ1h6aiKtwDCljiuaZu6ORuChuv8RPZBAXw2%2FdKGVJ5hBN1Dv2LbepI05FL%2F6F7ZZjqmN1aRRAZeUfTEy5r2Y6VBv11bUW4KYIyYo1MLoQg8lyWLy%2Bq%2BZoRTnt4%2FV%2B2P4VLQve5%2Bio14uvyFT8u%2BIHOKaJqnzHvHg%2BG1QjNIYz2iHA6gW%2F7A8zkLQhfKbh2rMrfFYNF8rrYWr6G25NBE1J5gSpCg9UNpwnERCrK65Hnb3E99gSFyZrfos1vGEtWkr8B8mmDdcWQOXTV49shdoeFcv8fhnJOIqCglEpW3cWz%2BvvwJqIGA13lidJ%2BqZTShvI6vtLS%2BoWRJBrdgNxUie8KF6x3ebsUXx8T26SK9f%2BLw%2FFJaC%2Ft7U3BnR2J9JtdUB1kJNxQ%2FGrFsmb1CtXHmvZwJ1aMbi8QU%2FIE7L2n0fRMzxjSCspeEBKjS3M7TI%2BjXOmKoEmUOVQWVI1Sz5RVR7LSOfRD3n2D21jAYr40DFvXFGWVqq9OlrMJop6HgqGdMMM9KkvL%2B2M%2FhJr5J52pBLBg6ohV9YYoyzcuUrfdbL6oIR9byUCzFHt3%2B2P9tRMENf%2F0CjQCyU3%2FUNr9RC2AyT6XP38Ss5kTmCUYYsEqccqBcszKNJP4BjnivdhHOtAgtlFUWkIw5df%2BxAY6pgGem4CF4MbF%2FkIkVkVWH8W7iaMSiQgeQt4ZIPbLOjSr%2FpKTRwzs0iM%2F%2BBxNw%2FTZiziydqY9AjkXFBS%2FaEuLiEtTbGTcmzYNqmUDOG%2BBNJ1pzqScog3JpbJ0bYHNsZOWuWhXN4YE%2BtI4umAroLamNTQipmHYjgEgSKtQOYsAcIhpmVCRl4oSeLD8%2BW%2B4IBsk%2BsLFDasmYX%2BaP6swdDsJBbdeTSpT0LId&X-Amz-Signature=8be1bbe54a56a337fb7f3d3d128b9f85705c47e62bfb228fe1641b1a93a99276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO2FU5NJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDpKPxLMfKaif6n6OQ2frOUrba7XlKGktWtC1LA6e3bCAiA1%2FDi7DnTCa6a8iBKvx%2Fbfus%2F4%2BVZu2%2BU6J3pPWMgitCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMC5yxqs4KwlJ1h6aiKtwDCljiuaZu6ORuChuv8RPZBAXw2%2FdKGVJ5hBN1Dv2LbepI05FL%2F6F7ZZjqmN1aRRAZeUfTEy5r2Y6VBv11bUW4KYIyYo1MLoQg8lyWLy%2Bq%2BZoRTnt4%2FV%2B2P4VLQve5%2Bio14uvyFT8u%2BIHOKaJqnzHvHg%2BG1QjNIYz2iHA6gW%2F7A8zkLQhfKbh2rMrfFYNF8rrYWr6G25NBE1J5gSpCg9UNpwnERCrK65Hnb3E99gSFyZrfos1vGEtWkr8B8mmDdcWQOXTV49shdoeFcv8fhnJOIqCglEpW3cWz%2BvvwJqIGA13lidJ%2BqZTShvI6vtLS%2BoWRJBrdgNxUie8KF6x3ebsUXx8T26SK9f%2BLw%2FFJaC%2Ft7U3BnR2J9JtdUB1kJNxQ%2FGrFsmb1CtXHmvZwJ1aMbi8QU%2FIE7L2n0fRMzxjSCspeEBKjS3M7TI%2BjXOmKoEmUOVQWVI1Sz5RVR7LSOfRD3n2D21jAYr40DFvXFGWVqq9OlrMJop6HgqGdMMM9KkvL%2B2M%2FhJr5J52pBLBg6ohV9YYoyzcuUrfdbL6oIR9byUCzFHt3%2B2P9tRMENf%2F0CjQCyU3%2FUNr9RC2AyT6XP38Ss5kTmCUYYsEqccqBcszKNJP4BjnivdhHOtAgtlFUWkIw5df%2BxAY6pgGem4CF4MbF%2FkIkVkVWH8W7iaMSiQgeQt4ZIPbLOjSr%2FpKTRwzs0iM%2F%2BBxNw%2FTZiziydqY9AjkXFBS%2FaEuLiEtTbGTcmzYNqmUDOG%2BBNJ1pzqScog3JpbJ0bYHNsZOWuWhXN4YE%2BtI4umAroLamNTQipmHYjgEgSKtQOYsAcIhpmVCRl4oSeLD8%2BW%2B4IBsk%2BsLFDasmYX%2BaP6swdDsJBbdeTSpT0LId&X-Amz-Signature=c877b37b64816222ab660029f7eebcd5db917c8a8244a594523238e7c3ead424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO2FU5NJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDpKPxLMfKaif6n6OQ2frOUrba7XlKGktWtC1LA6e3bCAiA1%2FDi7DnTCa6a8iBKvx%2Fbfus%2F4%2BVZu2%2BU6J3pPWMgitCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMC5yxqs4KwlJ1h6aiKtwDCljiuaZu6ORuChuv8RPZBAXw2%2FdKGVJ5hBN1Dv2LbepI05FL%2F6F7ZZjqmN1aRRAZeUfTEy5r2Y6VBv11bUW4KYIyYo1MLoQg8lyWLy%2Bq%2BZoRTnt4%2FV%2B2P4VLQve5%2Bio14uvyFT8u%2BIHOKaJqnzHvHg%2BG1QjNIYz2iHA6gW%2F7A8zkLQhfKbh2rMrfFYNF8rrYWr6G25NBE1J5gSpCg9UNpwnERCrK65Hnb3E99gSFyZrfos1vGEtWkr8B8mmDdcWQOXTV49shdoeFcv8fhnJOIqCglEpW3cWz%2BvvwJqIGA13lidJ%2BqZTShvI6vtLS%2BoWRJBrdgNxUie8KF6x3ebsUXx8T26SK9f%2BLw%2FFJaC%2Ft7U3BnR2J9JtdUB1kJNxQ%2FGrFsmb1CtXHmvZwJ1aMbi8QU%2FIE7L2n0fRMzxjSCspeEBKjS3M7TI%2BjXOmKoEmUOVQWVI1Sz5RVR7LSOfRD3n2D21jAYr40DFvXFGWVqq9OlrMJop6HgqGdMMM9KkvL%2B2M%2FhJr5J52pBLBg6ohV9YYoyzcuUrfdbL6oIR9byUCzFHt3%2B2P9tRMENf%2F0CjQCyU3%2FUNr9RC2AyT6XP38Ss5kTmCUYYsEqccqBcszKNJP4BjnivdhHOtAgtlFUWkIw5df%2BxAY6pgGem4CF4MbF%2FkIkVkVWH8W7iaMSiQgeQt4ZIPbLOjSr%2FpKTRwzs0iM%2F%2BBxNw%2FTZiziydqY9AjkXFBS%2FaEuLiEtTbGTcmzYNqmUDOG%2BBNJ1pzqScog3JpbJ0bYHNsZOWuWhXN4YE%2BtI4umAroLamNTQipmHYjgEgSKtQOYsAcIhpmVCRl4oSeLD8%2BW%2B4IBsk%2BsLFDasmYX%2BaP6swdDsJBbdeTSpT0LId&X-Amz-Signature=8e267a25daa83c4331d26b1e4aa0dded522d437d14185d5e43c0b3fca72a6291&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO2FU5NJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDpKPxLMfKaif6n6OQ2frOUrba7XlKGktWtC1LA6e3bCAiA1%2FDi7DnTCa6a8iBKvx%2Fbfus%2F4%2BVZu2%2BU6J3pPWMgitCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMC5yxqs4KwlJ1h6aiKtwDCljiuaZu6ORuChuv8RPZBAXw2%2FdKGVJ5hBN1Dv2LbepI05FL%2F6F7ZZjqmN1aRRAZeUfTEy5r2Y6VBv11bUW4KYIyYo1MLoQg8lyWLy%2Bq%2BZoRTnt4%2FV%2B2P4VLQve5%2Bio14uvyFT8u%2BIHOKaJqnzHvHg%2BG1QjNIYz2iHA6gW%2F7A8zkLQhfKbh2rMrfFYNF8rrYWr6G25NBE1J5gSpCg9UNpwnERCrK65Hnb3E99gSFyZrfos1vGEtWkr8B8mmDdcWQOXTV49shdoeFcv8fhnJOIqCglEpW3cWz%2BvvwJqIGA13lidJ%2BqZTShvI6vtLS%2BoWRJBrdgNxUie8KF6x3ebsUXx8T26SK9f%2BLw%2FFJaC%2Ft7U3BnR2J9JtdUB1kJNxQ%2FGrFsmb1CtXHmvZwJ1aMbi8QU%2FIE7L2n0fRMzxjSCspeEBKjS3M7TI%2BjXOmKoEmUOVQWVI1Sz5RVR7LSOfRD3n2D21jAYr40DFvXFGWVqq9OlrMJop6HgqGdMMM9KkvL%2B2M%2FhJr5J52pBLBg6ohV9YYoyzcuUrfdbL6oIR9byUCzFHt3%2B2P9tRMENf%2F0CjQCyU3%2FUNr9RC2AyT6XP38Ss5kTmCUYYsEqccqBcszKNJP4BjnivdhHOtAgtlFUWkIw5df%2BxAY6pgGem4CF4MbF%2FkIkVkVWH8W7iaMSiQgeQt4ZIPbLOjSr%2FpKTRwzs0iM%2F%2BBxNw%2FTZiziydqY9AjkXFBS%2FaEuLiEtTbGTcmzYNqmUDOG%2BBNJ1pzqScog3JpbJ0bYHNsZOWuWhXN4YE%2BtI4umAroLamNTQipmHYjgEgSKtQOYsAcIhpmVCRl4oSeLD8%2BW%2B4IBsk%2BsLFDasmYX%2BaP6swdDsJBbdeTSpT0LId&X-Amz-Signature=9658fc9fe32c2baa49900fee25fad518f21a5c9258786c0d4732eac777d478ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO2FU5NJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDpKPxLMfKaif6n6OQ2frOUrba7XlKGktWtC1LA6e3bCAiA1%2FDi7DnTCa6a8iBKvx%2Fbfus%2F4%2BVZu2%2BU6J3pPWMgitCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMC5yxqs4KwlJ1h6aiKtwDCljiuaZu6ORuChuv8RPZBAXw2%2FdKGVJ5hBN1Dv2LbepI05FL%2F6F7ZZjqmN1aRRAZeUfTEy5r2Y6VBv11bUW4KYIyYo1MLoQg8lyWLy%2Bq%2BZoRTnt4%2FV%2B2P4VLQve5%2Bio14uvyFT8u%2BIHOKaJqnzHvHg%2BG1QjNIYz2iHA6gW%2F7A8zkLQhfKbh2rMrfFYNF8rrYWr6G25NBE1J5gSpCg9UNpwnERCrK65Hnb3E99gSFyZrfos1vGEtWkr8B8mmDdcWQOXTV49shdoeFcv8fhnJOIqCglEpW3cWz%2BvvwJqIGA13lidJ%2BqZTShvI6vtLS%2BoWRJBrdgNxUie8KF6x3ebsUXx8T26SK9f%2BLw%2FFJaC%2Ft7U3BnR2J9JtdUB1kJNxQ%2FGrFsmb1CtXHmvZwJ1aMbi8QU%2FIE7L2n0fRMzxjSCspeEBKjS3M7TI%2BjXOmKoEmUOVQWVI1Sz5RVR7LSOfRD3n2D21jAYr40DFvXFGWVqq9OlrMJop6HgqGdMMM9KkvL%2B2M%2FhJr5J52pBLBg6ohV9YYoyzcuUrfdbL6oIR9byUCzFHt3%2B2P9tRMENf%2F0CjQCyU3%2FUNr9RC2AyT6XP38Ss5kTmCUYYsEqccqBcszKNJP4BjnivdhHOtAgtlFUWkIw5df%2BxAY6pgGem4CF4MbF%2FkIkVkVWH8W7iaMSiQgeQt4ZIPbLOjSr%2FpKTRwzs0iM%2F%2BBxNw%2FTZiziydqY9AjkXFBS%2FaEuLiEtTbGTcmzYNqmUDOG%2BBNJ1pzqScog3JpbJ0bYHNsZOWuWhXN4YE%2BtI4umAroLamNTQipmHYjgEgSKtQOYsAcIhpmVCRl4oSeLD8%2BW%2B4IBsk%2BsLFDasmYX%2BaP6swdDsJBbdeTSpT0LId&X-Amz-Signature=4581f5fa9cbf42565efa7dc6de06d5248ace648fb663646c3fa1b4377f0cd35d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
