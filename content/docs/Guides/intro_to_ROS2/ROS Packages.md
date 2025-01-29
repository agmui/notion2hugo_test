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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DP3BYVT%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZAmnMiDTPi8EK5q99NC6ZEfTA%2BqAzl%2F4IvUgnquo3VAiAZEz1NjqFUalBEythEFfLwaCu1MqPJk%2F6tLnh4tU9vACqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLUzjcE3IBcgt8OZAKtwDDBVnanOk7AKHNSbYUI41OVnMez6s%2B0W%2BrZurcdC13Me6xhWBb3XXcqTiCq%2BGfM40syeOSpS%2F7O82Y0c3Cwin%2FrVRAHyB81Yck7QxdSnRu3ucyNM0Xm5sEqMH5FGeyZMpuo%2Bbi%2FV4UmROXOgudTTxT52%2FjZvwnQ3nt%2FQnTDg65hMPXqmpsvFowm%2FjR5jP1Yuefx75t8dp2OBQ031h43jz14GmPaIUcT%2FqiMhRAkPyeJ6b4Hsfiomrwin799R%2BtSjBXDJ9xBsGNB5hoYls5oXzroPJN6q7%2FVEkeQsD%2B8RTeM%2FXkbXyeSpjZH1Cf6zB1KzJc6kd0DjAnDx9Q52EhyjEMuCtKaq6pjHhgJA8JbvLrt8tfG3V6NLraZyE3AEFleIYF343UlLfzCis49fuzFA6LQdbyEW%2FgIQmovjSPDDnO2ptkLtR9GXWtbZhGph5Fwr2OykwI5g1IzZcRYpdUSSbXeunFRGeKzZ274F51Imfch2Vi5IrKugMpqI7OKu48kYKXHfAiss%2F1FRfmirqmxZ0TvhUfSrDueEhpD3L%2BZMRxqSh9JNYZD84XCYXumlu%2FnwtxFSZrQkap7tCZvgiVKfwusLXctQ7GbXRBxzhj03C64EzUdHcyB5ZGmpFlzMwmMbqvAY6pgGMQSyecUnGigijVyKy5Vj4m696UqmoKZHCsd11gxoDMA7mnVRY%2FcUAwttjxxNcBBAGGQlrmB9OjbX%2BJUxoFdxJFrIrmk9k4ZbuMBZ4JOof8FlSxwHTK5qQu9N%2FFcWVQCCY6Gf7QRhlcfXAKAy%2B1IId35vH%2Bj%2B%2BYdC8KUw8KM189Qyiea46ZrvJBEN9J6y6g%2FawRkqrqNcx7QjlvPT6cTaiuQv1kyig&X-Amz-Signature=7124e2a8dfb62d33326846470e05b4e0fe0450b1292a6ff4543941878549df24&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DP3BYVT%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZAmnMiDTPi8EK5q99NC6ZEfTA%2BqAzl%2F4IvUgnquo3VAiAZEz1NjqFUalBEythEFfLwaCu1MqPJk%2F6tLnh4tU9vACqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLUzjcE3IBcgt8OZAKtwDDBVnanOk7AKHNSbYUI41OVnMez6s%2B0W%2BrZurcdC13Me6xhWBb3XXcqTiCq%2BGfM40syeOSpS%2F7O82Y0c3Cwin%2FrVRAHyB81Yck7QxdSnRu3ucyNM0Xm5sEqMH5FGeyZMpuo%2Bbi%2FV4UmROXOgudTTxT52%2FjZvwnQ3nt%2FQnTDg65hMPXqmpsvFowm%2FjR5jP1Yuefx75t8dp2OBQ031h43jz14GmPaIUcT%2FqiMhRAkPyeJ6b4Hsfiomrwin799R%2BtSjBXDJ9xBsGNB5hoYls5oXzroPJN6q7%2FVEkeQsD%2B8RTeM%2FXkbXyeSpjZH1Cf6zB1KzJc6kd0DjAnDx9Q52EhyjEMuCtKaq6pjHhgJA8JbvLrt8tfG3V6NLraZyE3AEFleIYF343UlLfzCis49fuzFA6LQdbyEW%2FgIQmovjSPDDnO2ptkLtR9GXWtbZhGph5Fwr2OykwI5g1IzZcRYpdUSSbXeunFRGeKzZ274F51Imfch2Vi5IrKugMpqI7OKu48kYKXHfAiss%2F1FRfmirqmxZ0TvhUfSrDueEhpD3L%2BZMRxqSh9JNYZD84XCYXumlu%2FnwtxFSZrQkap7tCZvgiVKfwusLXctQ7GbXRBxzhj03C64EzUdHcyB5ZGmpFlzMwmMbqvAY6pgGMQSyecUnGigijVyKy5Vj4m696UqmoKZHCsd11gxoDMA7mnVRY%2FcUAwttjxxNcBBAGGQlrmB9OjbX%2BJUxoFdxJFrIrmk9k4ZbuMBZ4JOof8FlSxwHTK5qQu9N%2FFcWVQCCY6Gf7QRhlcfXAKAy%2B1IId35vH%2Bj%2B%2BYdC8KUw8KM189Qyiea46ZrvJBEN9J6y6g%2FawRkqrqNcx7QjlvPT6cTaiuQv1kyig&X-Amz-Signature=895f22508a8d38558b003e31b16c38e9bb592170f16de7a94515a22ab943d1e4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DP3BYVT%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZAmnMiDTPi8EK5q99NC6ZEfTA%2BqAzl%2F4IvUgnquo3VAiAZEz1NjqFUalBEythEFfLwaCu1MqPJk%2F6tLnh4tU9vACqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLUzjcE3IBcgt8OZAKtwDDBVnanOk7AKHNSbYUI41OVnMez6s%2B0W%2BrZurcdC13Me6xhWBb3XXcqTiCq%2BGfM40syeOSpS%2F7O82Y0c3Cwin%2FrVRAHyB81Yck7QxdSnRu3ucyNM0Xm5sEqMH5FGeyZMpuo%2Bbi%2FV4UmROXOgudTTxT52%2FjZvwnQ3nt%2FQnTDg65hMPXqmpsvFowm%2FjR5jP1Yuefx75t8dp2OBQ031h43jz14GmPaIUcT%2FqiMhRAkPyeJ6b4Hsfiomrwin799R%2BtSjBXDJ9xBsGNB5hoYls5oXzroPJN6q7%2FVEkeQsD%2B8RTeM%2FXkbXyeSpjZH1Cf6zB1KzJc6kd0DjAnDx9Q52EhyjEMuCtKaq6pjHhgJA8JbvLrt8tfG3V6NLraZyE3AEFleIYF343UlLfzCis49fuzFA6LQdbyEW%2FgIQmovjSPDDnO2ptkLtR9GXWtbZhGph5Fwr2OykwI5g1IzZcRYpdUSSbXeunFRGeKzZ274F51Imfch2Vi5IrKugMpqI7OKu48kYKXHfAiss%2F1FRfmirqmxZ0TvhUfSrDueEhpD3L%2BZMRxqSh9JNYZD84XCYXumlu%2FnwtxFSZrQkap7tCZvgiVKfwusLXctQ7GbXRBxzhj03C64EzUdHcyB5ZGmpFlzMwmMbqvAY6pgGMQSyecUnGigijVyKy5Vj4m696UqmoKZHCsd11gxoDMA7mnVRY%2FcUAwttjxxNcBBAGGQlrmB9OjbX%2BJUxoFdxJFrIrmk9k4ZbuMBZ4JOof8FlSxwHTK5qQu9N%2FFcWVQCCY6Gf7QRhlcfXAKAy%2B1IId35vH%2Bj%2B%2BYdC8KUw8KM189Qyiea46ZrvJBEN9J6y6g%2FawRkqrqNcx7QjlvPT6cTaiuQv1kyig&X-Amz-Signature=9986a23002c71ef28b08229b247e41284f4c5a8d0c00c7f14998e8dfcb7a5b59&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DP3BYVT%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZAmnMiDTPi8EK5q99NC6ZEfTA%2BqAzl%2F4IvUgnquo3VAiAZEz1NjqFUalBEythEFfLwaCu1MqPJk%2F6tLnh4tU9vACqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLUzjcE3IBcgt8OZAKtwDDBVnanOk7AKHNSbYUI41OVnMez6s%2B0W%2BrZurcdC13Me6xhWBb3XXcqTiCq%2BGfM40syeOSpS%2F7O82Y0c3Cwin%2FrVRAHyB81Yck7QxdSnRu3ucyNM0Xm5sEqMH5FGeyZMpuo%2Bbi%2FV4UmROXOgudTTxT52%2FjZvwnQ3nt%2FQnTDg65hMPXqmpsvFowm%2FjR5jP1Yuefx75t8dp2OBQ031h43jz14GmPaIUcT%2FqiMhRAkPyeJ6b4Hsfiomrwin799R%2BtSjBXDJ9xBsGNB5hoYls5oXzroPJN6q7%2FVEkeQsD%2B8RTeM%2FXkbXyeSpjZH1Cf6zB1KzJc6kd0DjAnDx9Q52EhyjEMuCtKaq6pjHhgJA8JbvLrt8tfG3V6NLraZyE3AEFleIYF343UlLfzCis49fuzFA6LQdbyEW%2FgIQmovjSPDDnO2ptkLtR9GXWtbZhGph5Fwr2OykwI5g1IzZcRYpdUSSbXeunFRGeKzZ274F51Imfch2Vi5IrKugMpqI7OKu48kYKXHfAiss%2F1FRfmirqmxZ0TvhUfSrDueEhpD3L%2BZMRxqSh9JNYZD84XCYXumlu%2FnwtxFSZrQkap7tCZvgiVKfwusLXctQ7GbXRBxzhj03C64EzUdHcyB5ZGmpFlzMwmMbqvAY6pgGMQSyecUnGigijVyKy5Vj4m696UqmoKZHCsd11gxoDMA7mnVRY%2FcUAwttjxxNcBBAGGQlrmB9OjbX%2BJUxoFdxJFrIrmk9k4ZbuMBZ4JOof8FlSxwHTK5qQu9N%2FFcWVQCCY6Gf7QRhlcfXAKAy%2B1IId35vH%2Bj%2B%2BYdC8KUw8KM189Qyiea46ZrvJBEN9J6y6g%2FawRkqrqNcx7QjlvPT6cTaiuQv1kyig&X-Amz-Signature=a014f5f6464726d921cb605c72f8ead21331f8766135d3f53571198af06eace1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DP3BYVT%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZAmnMiDTPi8EK5q99NC6ZEfTA%2BqAzl%2F4IvUgnquo3VAiAZEz1NjqFUalBEythEFfLwaCu1MqPJk%2F6tLnh4tU9vACqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLUzjcE3IBcgt8OZAKtwDDBVnanOk7AKHNSbYUI41OVnMez6s%2B0W%2BrZurcdC13Me6xhWBb3XXcqTiCq%2BGfM40syeOSpS%2F7O82Y0c3Cwin%2FrVRAHyB81Yck7QxdSnRu3ucyNM0Xm5sEqMH5FGeyZMpuo%2Bbi%2FV4UmROXOgudTTxT52%2FjZvwnQ3nt%2FQnTDg65hMPXqmpsvFowm%2FjR5jP1Yuefx75t8dp2OBQ031h43jz14GmPaIUcT%2FqiMhRAkPyeJ6b4Hsfiomrwin799R%2BtSjBXDJ9xBsGNB5hoYls5oXzroPJN6q7%2FVEkeQsD%2B8RTeM%2FXkbXyeSpjZH1Cf6zB1KzJc6kd0DjAnDx9Q52EhyjEMuCtKaq6pjHhgJA8JbvLrt8tfG3V6NLraZyE3AEFleIYF343UlLfzCis49fuzFA6LQdbyEW%2FgIQmovjSPDDnO2ptkLtR9GXWtbZhGph5Fwr2OykwI5g1IzZcRYpdUSSbXeunFRGeKzZ274F51Imfch2Vi5IrKugMpqI7OKu48kYKXHfAiss%2F1FRfmirqmxZ0TvhUfSrDueEhpD3L%2BZMRxqSh9JNYZD84XCYXumlu%2FnwtxFSZrQkap7tCZvgiVKfwusLXctQ7GbXRBxzhj03C64EzUdHcyB5ZGmpFlzMwmMbqvAY6pgGMQSyecUnGigijVyKy5Vj4m696UqmoKZHCsd11gxoDMA7mnVRY%2FcUAwttjxxNcBBAGGQlrmB9OjbX%2BJUxoFdxJFrIrmk9k4ZbuMBZ4JOof8FlSxwHTK5qQu9N%2FFcWVQCCY6Gf7QRhlcfXAKAy%2B1IId35vH%2Bj%2B%2BYdC8KUw8KM189Qyiea46ZrvJBEN9J6y6g%2FawRkqrqNcx7QjlvPT6cTaiuQv1kyig&X-Amz-Signature=3c69b935f138c7d3f295b11a00d97707d148862672481ca4155540fd9ebd766f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DP3BYVT%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZAmnMiDTPi8EK5q99NC6ZEfTA%2BqAzl%2F4IvUgnquo3VAiAZEz1NjqFUalBEythEFfLwaCu1MqPJk%2F6tLnh4tU9vACqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLUzjcE3IBcgt8OZAKtwDDBVnanOk7AKHNSbYUI41OVnMez6s%2B0W%2BrZurcdC13Me6xhWBb3XXcqTiCq%2BGfM40syeOSpS%2F7O82Y0c3Cwin%2FrVRAHyB81Yck7QxdSnRu3ucyNM0Xm5sEqMH5FGeyZMpuo%2Bbi%2FV4UmROXOgudTTxT52%2FjZvwnQ3nt%2FQnTDg65hMPXqmpsvFowm%2FjR5jP1Yuefx75t8dp2OBQ031h43jz14GmPaIUcT%2FqiMhRAkPyeJ6b4Hsfiomrwin799R%2BtSjBXDJ9xBsGNB5hoYls5oXzroPJN6q7%2FVEkeQsD%2B8RTeM%2FXkbXyeSpjZH1Cf6zB1KzJc6kd0DjAnDx9Q52EhyjEMuCtKaq6pjHhgJA8JbvLrt8tfG3V6NLraZyE3AEFleIYF343UlLfzCis49fuzFA6LQdbyEW%2FgIQmovjSPDDnO2ptkLtR9GXWtbZhGph5Fwr2OykwI5g1IzZcRYpdUSSbXeunFRGeKzZ274F51Imfch2Vi5IrKugMpqI7OKu48kYKXHfAiss%2F1FRfmirqmxZ0TvhUfSrDueEhpD3L%2BZMRxqSh9JNYZD84XCYXumlu%2FnwtxFSZrQkap7tCZvgiVKfwusLXctQ7GbXRBxzhj03C64EzUdHcyB5ZGmpFlzMwmMbqvAY6pgGMQSyecUnGigijVyKy5Vj4m696UqmoKZHCsd11gxoDMA7mnVRY%2FcUAwttjxxNcBBAGGQlrmB9OjbX%2BJUxoFdxJFrIrmk9k4ZbuMBZ4JOof8FlSxwHTK5qQu9N%2FFcWVQCCY6Gf7QRhlcfXAKAy%2B1IId35vH%2Bj%2B%2BYdC8KUw8KM189Qyiea46ZrvJBEN9J6y6g%2FawRkqrqNcx7QjlvPT6cTaiuQv1kyig&X-Amz-Signature=b6d48b7917cc9e8d1aa32338ed268db46102aecee9649fb9eaca81b1abefd549&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DP3BYVT%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZAmnMiDTPi8EK5q99NC6ZEfTA%2BqAzl%2F4IvUgnquo3VAiAZEz1NjqFUalBEythEFfLwaCu1MqPJk%2F6tLnh4tU9vACqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLUzjcE3IBcgt8OZAKtwDDBVnanOk7AKHNSbYUI41OVnMez6s%2B0W%2BrZurcdC13Me6xhWBb3XXcqTiCq%2BGfM40syeOSpS%2F7O82Y0c3Cwin%2FrVRAHyB81Yck7QxdSnRu3ucyNM0Xm5sEqMH5FGeyZMpuo%2Bbi%2FV4UmROXOgudTTxT52%2FjZvwnQ3nt%2FQnTDg65hMPXqmpsvFowm%2FjR5jP1Yuefx75t8dp2OBQ031h43jz14GmPaIUcT%2FqiMhRAkPyeJ6b4Hsfiomrwin799R%2BtSjBXDJ9xBsGNB5hoYls5oXzroPJN6q7%2FVEkeQsD%2B8RTeM%2FXkbXyeSpjZH1Cf6zB1KzJc6kd0DjAnDx9Q52EhyjEMuCtKaq6pjHhgJA8JbvLrt8tfG3V6NLraZyE3AEFleIYF343UlLfzCis49fuzFA6LQdbyEW%2FgIQmovjSPDDnO2ptkLtR9GXWtbZhGph5Fwr2OykwI5g1IzZcRYpdUSSbXeunFRGeKzZ274F51Imfch2Vi5IrKugMpqI7OKu48kYKXHfAiss%2F1FRfmirqmxZ0TvhUfSrDueEhpD3L%2BZMRxqSh9JNYZD84XCYXumlu%2FnwtxFSZrQkap7tCZvgiVKfwusLXctQ7GbXRBxzhj03C64EzUdHcyB5ZGmpFlzMwmMbqvAY6pgGMQSyecUnGigijVyKy5Vj4m696UqmoKZHCsd11gxoDMA7mnVRY%2FcUAwttjxxNcBBAGGQlrmB9OjbX%2BJUxoFdxJFrIrmk9k4ZbuMBZ4JOof8FlSxwHTK5qQu9N%2FFcWVQCCY6Gf7QRhlcfXAKAy%2B1IId35vH%2Bj%2B%2BYdC8KUw8KM189Qyiea46ZrvJBEN9J6y6g%2FawRkqrqNcx7QjlvPT6cTaiuQv1kyig&X-Amz-Signature=4e62d7e59b6a2eec67b950e5a730e593ad55fad52cc1d2b6f715ae34aff0f36e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
