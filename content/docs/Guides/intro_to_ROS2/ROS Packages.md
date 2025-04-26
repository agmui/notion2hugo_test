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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDNY2IZ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEN9UOBOHtH7Ietj6EUu8LJgUEwLhdRdQwXx8JXQsu0LAiBqrrKpe5KlO7OAOVQAUHY0xXrHQuig7lEd%2FOp43Szrgyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMnVx%2FK5xQfcPnQcq6KtwDbZc353%2B7bC78bSY5tm9tfQcQbUta7OQvJkJoPaMXeBde9Eb%2BDBSaGLYzi18uIH6bpAqoxAArKkAKJndnrYhyomdN10aOzO0VtahXDBS9fJ1J%2Bj%2FxiHxuCghgxoPLuNsWPx%2B%2Fk%2ByCY1XbWCdCOWeGL%2FCO6zxo%2BV%2BkUiV2VjzDMa%2B0wWX37S4ozUDXO7Yq6lcsTwPtPvqA1ITpF2PCDP4MCqD9q8IuECfzA7S8WwJa4aQ%2Feoe5KTMBNxn%2Bu7q6Cv92SPeYIz8n9EchUHLYlfPFNXUE9XH0kKI2l%2BxV4AZC%2FlR9B6vy6RgmmFFEcS%2F8bAPAYage2rGz1fwiA5X4akThCyVATqLPrDyMugEh8%2BIKPxdPejRtFoDfUmbj5vksZ5zihfr0Xrtl8PDzNcy4ZlGCryQL1ilG7Khjvuowgz5dEotkHLYvAYRVwJGbIMZ0mFJC4HWPb0BidNtOcYLqk3aTOpEonMRwfJsFCybY2Jv7Vg02TmvhDqZnWRxhlrjowSZvUXr70fcZkq4T%2FK6HA5JU5GY7DN4noEwgYQtCYlNZTzyiMFhHQPdVwIpEPMNiBDk42OdYj%2BzLo3%2F%2BzeIKYxns6bC%2Fr0TYyHGxzNo8blURwGQrahreV0VLEfJBVBEwm6K1wAY6pgE3Yp1S6MgWnYbzHKOlXmLir%2FCpzs%2FdZ4mKQmFCULaeNXdQlhUSWmY9%2Fw9AQvq96oGrUz5MGR%2FVOMaI2nQvxejPl87pUfVYpywiKqGDA1dr38DkdjdVgQcf2W40yMjge83j3Er3iMWEcnGC9ywmHhsezLFygqKtpNIg46DGa5nQj0Cn4%2BiCrVK%2BlBiyvf2I7TbdBhrJq1X5RuRLYtUX0dZEx6K%2BZiVV&X-Amz-Signature=5c724bb39567fb1e4fda7445f324d0bd372bc4098685c9a988338bef1089eb08&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDNY2IZ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEN9UOBOHtH7Ietj6EUu8LJgUEwLhdRdQwXx8JXQsu0LAiBqrrKpe5KlO7OAOVQAUHY0xXrHQuig7lEd%2FOp43Szrgyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMnVx%2FK5xQfcPnQcq6KtwDbZc353%2B7bC78bSY5tm9tfQcQbUta7OQvJkJoPaMXeBde9Eb%2BDBSaGLYzi18uIH6bpAqoxAArKkAKJndnrYhyomdN10aOzO0VtahXDBS9fJ1J%2Bj%2FxiHxuCghgxoPLuNsWPx%2B%2Fk%2ByCY1XbWCdCOWeGL%2FCO6zxo%2BV%2BkUiV2VjzDMa%2B0wWX37S4ozUDXO7Yq6lcsTwPtPvqA1ITpF2PCDP4MCqD9q8IuECfzA7S8WwJa4aQ%2Feoe5KTMBNxn%2Bu7q6Cv92SPeYIz8n9EchUHLYlfPFNXUE9XH0kKI2l%2BxV4AZC%2FlR9B6vy6RgmmFFEcS%2F8bAPAYage2rGz1fwiA5X4akThCyVATqLPrDyMugEh8%2BIKPxdPejRtFoDfUmbj5vksZ5zihfr0Xrtl8PDzNcy4ZlGCryQL1ilG7Khjvuowgz5dEotkHLYvAYRVwJGbIMZ0mFJC4HWPb0BidNtOcYLqk3aTOpEonMRwfJsFCybY2Jv7Vg02TmvhDqZnWRxhlrjowSZvUXr70fcZkq4T%2FK6HA5JU5GY7DN4noEwgYQtCYlNZTzyiMFhHQPdVwIpEPMNiBDk42OdYj%2BzLo3%2F%2BzeIKYxns6bC%2Fr0TYyHGxzNo8blURwGQrahreV0VLEfJBVBEwm6K1wAY6pgE3Yp1S6MgWnYbzHKOlXmLir%2FCpzs%2FdZ4mKQmFCULaeNXdQlhUSWmY9%2Fw9AQvq96oGrUz5MGR%2FVOMaI2nQvxejPl87pUfVYpywiKqGDA1dr38DkdjdVgQcf2W40yMjge83j3Er3iMWEcnGC9ywmHhsezLFygqKtpNIg46DGa5nQj0Cn4%2BiCrVK%2BlBiyvf2I7TbdBhrJq1X5RuRLYtUX0dZEx6K%2BZiVV&X-Amz-Signature=bd37dd9b232c8eb2f245c909d439262f9e07bd1915fff8814ea3872cc9431cc0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDNY2IZ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEN9UOBOHtH7Ietj6EUu8LJgUEwLhdRdQwXx8JXQsu0LAiBqrrKpe5KlO7OAOVQAUHY0xXrHQuig7lEd%2FOp43Szrgyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMnVx%2FK5xQfcPnQcq6KtwDbZc353%2B7bC78bSY5tm9tfQcQbUta7OQvJkJoPaMXeBde9Eb%2BDBSaGLYzi18uIH6bpAqoxAArKkAKJndnrYhyomdN10aOzO0VtahXDBS9fJ1J%2Bj%2FxiHxuCghgxoPLuNsWPx%2B%2Fk%2ByCY1XbWCdCOWeGL%2FCO6zxo%2BV%2BkUiV2VjzDMa%2B0wWX37S4ozUDXO7Yq6lcsTwPtPvqA1ITpF2PCDP4MCqD9q8IuECfzA7S8WwJa4aQ%2Feoe5KTMBNxn%2Bu7q6Cv92SPeYIz8n9EchUHLYlfPFNXUE9XH0kKI2l%2BxV4AZC%2FlR9B6vy6RgmmFFEcS%2F8bAPAYage2rGz1fwiA5X4akThCyVATqLPrDyMugEh8%2BIKPxdPejRtFoDfUmbj5vksZ5zihfr0Xrtl8PDzNcy4ZlGCryQL1ilG7Khjvuowgz5dEotkHLYvAYRVwJGbIMZ0mFJC4HWPb0BidNtOcYLqk3aTOpEonMRwfJsFCybY2Jv7Vg02TmvhDqZnWRxhlrjowSZvUXr70fcZkq4T%2FK6HA5JU5GY7DN4noEwgYQtCYlNZTzyiMFhHQPdVwIpEPMNiBDk42OdYj%2BzLo3%2F%2BzeIKYxns6bC%2Fr0TYyHGxzNo8blURwGQrahreV0VLEfJBVBEwm6K1wAY6pgE3Yp1S6MgWnYbzHKOlXmLir%2FCpzs%2FdZ4mKQmFCULaeNXdQlhUSWmY9%2Fw9AQvq96oGrUz5MGR%2FVOMaI2nQvxejPl87pUfVYpywiKqGDA1dr38DkdjdVgQcf2W40yMjge83j3Er3iMWEcnGC9ywmHhsezLFygqKtpNIg46DGa5nQj0Cn4%2BiCrVK%2BlBiyvf2I7TbdBhrJq1X5RuRLYtUX0dZEx6K%2BZiVV&X-Amz-Signature=b0df353994c7b905a36c85ab59c9b745e3da9982b70e1fc1e7fc8fce46ec889c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDNY2IZ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEN9UOBOHtH7Ietj6EUu8LJgUEwLhdRdQwXx8JXQsu0LAiBqrrKpe5KlO7OAOVQAUHY0xXrHQuig7lEd%2FOp43Szrgyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMnVx%2FK5xQfcPnQcq6KtwDbZc353%2B7bC78bSY5tm9tfQcQbUta7OQvJkJoPaMXeBde9Eb%2BDBSaGLYzi18uIH6bpAqoxAArKkAKJndnrYhyomdN10aOzO0VtahXDBS9fJ1J%2Bj%2FxiHxuCghgxoPLuNsWPx%2B%2Fk%2ByCY1XbWCdCOWeGL%2FCO6zxo%2BV%2BkUiV2VjzDMa%2B0wWX37S4ozUDXO7Yq6lcsTwPtPvqA1ITpF2PCDP4MCqD9q8IuECfzA7S8WwJa4aQ%2Feoe5KTMBNxn%2Bu7q6Cv92SPeYIz8n9EchUHLYlfPFNXUE9XH0kKI2l%2BxV4AZC%2FlR9B6vy6RgmmFFEcS%2F8bAPAYage2rGz1fwiA5X4akThCyVATqLPrDyMugEh8%2BIKPxdPejRtFoDfUmbj5vksZ5zihfr0Xrtl8PDzNcy4ZlGCryQL1ilG7Khjvuowgz5dEotkHLYvAYRVwJGbIMZ0mFJC4HWPb0BidNtOcYLqk3aTOpEonMRwfJsFCybY2Jv7Vg02TmvhDqZnWRxhlrjowSZvUXr70fcZkq4T%2FK6HA5JU5GY7DN4noEwgYQtCYlNZTzyiMFhHQPdVwIpEPMNiBDk42OdYj%2BzLo3%2F%2BzeIKYxns6bC%2Fr0TYyHGxzNo8blURwGQrahreV0VLEfJBVBEwm6K1wAY6pgE3Yp1S6MgWnYbzHKOlXmLir%2FCpzs%2FdZ4mKQmFCULaeNXdQlhUSWmY9%2Fw9AQvq96oGrUz5MGR%2FVOMaI2nQvxejPl87pUfVYpywiKqGDA1dr38DkdjdVgQcf2W40yMjge83j3Er3iMWEcnGC9ywmHhsezLFygqKtpNIg46DGa5nQj0Cn4%2BiCrVK%2BlBiyvf2I7TbdBhrJq1X5RuRLYtUX0dZEx6K%2BZiVV&X-Amz-Signature=6378c39fd88e0594e66a6222f33a73b0b92bca8548e00ef974fe7e6ff8bd68a9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDNY2IZ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEN9UOBOHtH7Ietj6EUu8LJgUEwLhdRdQwXx8JXQsu0LAiBqrrKpe5KlO7OAOVQAUHY0xXrHQuig7lEd%2FOp43Szrgyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMnVx%2FK5xQfcPnQcq6KtwDbZc353%2B7bC78bSY5tm9tfQcQbUta7OQvJkJoPaMXeBde9Eb%2BDBSaGLYzi18uIH6bpAqoxAArKkAKJndnrYhyomdN10aOzO0VtahXDBS9fJ1J%2Bj%2FxiHxuCghgxoPLuNsWPx%2B%2Fk%2ByCY1XbWCdCOWeGL%2FCO6zxo%2BV%2BkUiV2VjzDMa%2B0wWX37S4ozUDXO7Yq6lcsTwPtPvqA1ITpF2PCDP4MCqD9q8IuECfzA7S8WwJa4aQ%2Feoe5KTMBNxn%2Bu7q6Cv92SPeYIz8n9EchUHLYlfPFNXUE9XH0kKI2l%2BxV4AZC%2FlR9B6vy6RgmmFFEcS%2F8bAPAYage2rGz1fwiA5X4akThCyVATqLPrDyMugEh8%2BIKPxdPejRtFoDfUmbj5vksZ5zihfr0Xrtl8PDzNcy4ZlGCryQL1ilG7Khjvuowgz5dEotkHLYvAYRVwJGbIMZ0mFJC4HWPb0BidNtOcYLqk3aTOpEonMRwfJsFCybY2Jv7Vg02TmvhDqZnWRxhlrjowSZvUXr70fcZkq4T%2FK6HA5JU5GY7DN4noEwgYQtCYlNZTzyiMFhHQPdVwIpEPMNiBDk42OdYj%2BzLo3%2F%2BzeIKYxns6bC%2Fr0TYyHGxzNo8blURwGQrahreV0VLEfJBVBEwm6K1wAY6pgE3Yp1S6MgWnYbzHKOlXmLir%2FCpzs%2FdZ4mKQmFCULaeNXdQlhUSWmY9%2Fw9AQvq96oGrUz5MGR%2FVOMaI2nQvxejPl87pUfVYpywiKqGDA1dr38DkdjdVgQcf2W40yMjge83j3Er3iMWEcnGC9ywmHhsezLFygqKtpNIg46DGa5nQj0Cn4%2BiCrVK%2BlBiyvf2I7TbdBhrJq1X5RuRLYtUX0dZEx6K%2BZiVV&X-Amz-Signature=a5240941c2cbcad965126c6d05400dbb73276ea5f1183c86541264102c4fb024&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDNY2IZ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEN9UOBOHtH7Ietj6EUu8LJgUEwLhdRdQwXx8JXQsu0LAiBqrrKpe5KlO7OAOVQAUHY0xXrHQuig7lEd%2FOp43Szrgyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMnVx%2FK5xQfcPnQcq6KtwDbZc353%2B7bC78bSY5tm9tfQcQbUta7OQvJkJoPaMXeBde9Eb%2BDBSaGLYzi18uIH6bpAqoxAArKkAKJndnrYhyomdN10aOzO0VtahXDBS9fJ1J%2Bj%2FxiHxuCghgxoPLuNsWPx%2B%2Fk%2ByCY1XbWCdCOWeGL%2FCO6zxo%2BV%2BkUiV2VjzDMa%2B0wWX37S4ozUDXO7Yq6lcsTwPtPvqA1ITpF2PCDP4MCqD9q8IuECfzA7S8WwJa4aQ%2Feoe5KTMBNxn%2Bu7q6Cv92SPeYIz8n9EchUHLYlfPFNXUE9XH0kKI2l%2BxV4AZC%2FlR9B6vy6RgmmFFEcS%2F8bAPAYage2rGz1fwiA5X4akThCyVATqLPrDyMugEh8%2BIKPxdPejRtFoDfUmbj5vksZ5zihfr0Xrtl8PDzNcy4ZlGCryQL1ilG7Khjvuowgz5dEotkHLYvAYRVwJGbIMZ0mFJC4HWPb0BidNtOcYLqk3aTOpEonMRwfJsFCybY2Jv7Vg02TmvhDqZnWRxhlrjowSZvUXr70fcZkq4T%2FK6HA5JU5GY7DN4noEwgYQtCYlNZTzyiMFhHQPdVwIpEPMNiBDk42OdYj%2BzLo3%2F%2BzeIKYxns6bC%2Fr0TYyHGxzNo8blURwGQrahreV0VLEfJBVBEwm6K1wAY6pgE3Yp1S6MgWnYbzHKOlXmLir%2FCpzs%2FdZ4mKQmFCULaeNXdQlhUSWmY9%2Fw9AQvq96oGrUz5MGR%2FVOMaI2nQvxejPl87pUfVYpywiKqGDA1dr38DkdjdVgQcf2W40yMjge83j3Er3iMWEcnGC9ywmHhsezLFygqKtpNIg46DGa5nQj0Cn4%2BiCrVK%2BlBiyvf2I7TbdBhrJq1X5RuRLYtUX0dZEx6K%2BZiVV&X-Amz-Signature=5c4f21094fd72d0e860760adbaa9a8efcfbec94f9c8db538bb77de866d2f7954&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDNY2IZ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEN9UOBOHtH7Ietj6EUu8LJgUEwLhdRdQwXx8JXQsu0LAiBqrrKpe5KlO7OAOVQAUHY0xXrHQuig7lEd%2FOp43Szrgyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMnVx%2FK5xQfcPnQcq6KtwDbZc353%2B7bC78bSY5tm9tfQcQbUta7OQvJkJoPaMXeBde9Eb%2BDBSaGLYzi18uIH6bpAqoxAArKkAKJndnrYhyomdN10aOzO0VtahXDBS9fJ1J%2Bj%2FxiHxuCghgxoPLuNsWPx%2B%2Fk%2ByCY1XbWCdCOWeGL%2FCO6zxo%2BV%2BkUiV2VjzDMa%2B0wWX37S4ozUDXO7Yq6lcsTwPtPvqA1ITpF2PCDP4MCqD9q8IuECfzA7S8WwJa4aQ%2Feoe5KTMBNxn%2Bu7q6Cv92SPeYIz8n9EchUHLYlfPFNXUE9XH0kKI2l%2BxV4AZC%2FlR9B6vy6RgmmFFEcS%2F8bAPAYage2rGz1fwiA5X4akThCyVATqLPrDyMugEh8%2BIKPxdPejRtFoDfUmbj5vksZ5zihfr0Xrtl8PDzNcy4ZlGCryQL1ilG7Khjvuowgz5dEotkHLYvAYRVwJGbIMZ0mFJC4HWPb0BidNtOcYLqk3aTOpEonMRwfJsFCybY2Jv7Vg02TmvhDqZnWRxhlrjowSZvUXr70fcZkq4T%2FK6HA5JU5GY7DN4noEwgYQtCYlNZTzyiMFhHQPdVwIpEPMNiBDk42OdYj%2BzLo3%2F%2BzeIKYxns6bC%2Fr0TYyHGxzNo8blURwGQrahreV0VLEfJBVBEwm6K1wAY6pgE3Yp1S6MgWnYbzHKOlXmLir%2FCpzs%2FdZ4mKQmFCULaeNXdQlhUSWmY9%2Fw9AQvq96oGrUz5MGR%2FVOMaI2nQvxejPl87pUfVYpywiKqGDA1dr38DkdjdVgQcf2W40yMjge83j3Er3iMWEcnGC9ywmHhsezLFygqKtpNIg46DGa5nQj0Cn4%2BiCrVK%2BlBiyvf2I7TbdBhrJq1X5RuRLYtUX0dZEx6K%2BZiVV&X-Amz-Signature=6c45bdeb7471556fd60bfe46e9cc8c40531fb611fe32a8b4fb1a9c4ef8ce3eb2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
