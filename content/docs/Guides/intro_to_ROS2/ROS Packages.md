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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKH43OVP%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByE74zUgLFUfuOdxtCyn7ZdxUnOBOMBzsloLqoX2RhEAiBb7S%2FyIaT7b0yWF6BBgb4yASgfwJWASRzTagMvsEiZ%2FyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoF2nQ53Oeq2sWViCKtwDEsxN41IHzhNq3ymhKFiScCYR7dgXwSKGI4JzyeILf7HiyZ7tzPlQgcl1yKIXqZ9G35NqqIAnhlhP1LfMmy8FqwQ1kMJLaV4GqswN%2FIGwqrJEuHgKOp8nGr0%2F2yDBbh6aT3lMxAA6ISG1BrjhXKaUi5PCNVQP2Hf3BLrTiKI4XzfHQ1xkliwmt1KsgGWQdRu%2B%2BkmnWjld1y647OFLceG2prbB%2FSmo1uzg9IKqFXEHQp%2FUUUORE9tzipw8urdxdpYu80B%2FYg5Z7%2BrtB04wOsJhf1ZjLX22xKm68ELHF3%2FwqYCQMwJBY0Ndjk6lgKUih0K0O2tdX5CSUBG%2F6AW02bEsUlFqaPw%2BYrpn7gAGnpWqi4GbTG%2F4UCqD0ngXTPR9Ky0vJKDU2zmF69tsYnVP882v9MdulCV8EvMGr8Z9fYp1LBdGmO52kwd3VhG0VPB%2FjXd3bv9bCR%2BodB3ZqCIduZZ%2BuNJCmVU8HDUCQO%2F9KvWq%2FLOSmrXmKobeUhVUtwqCMbPmxyA7aP5Sru7IvqqSsVoD5sGyTHTMv9jR0urkCuLSKbYGXdRTsKhwFDfPV2OjDapIC4bIjADk1u%2Bs4RmCHZbdJpamgmIIrskGP0%2BegSlsUOrnFF5aTMLTAeCQjZ0wqarqvAY6pgE2KDLj0lulYZsDgE7SpCa63N5clf2NylkKoqaW%2FL5B%2FcSSW0xCTm86Ue8J1%2Fu0cCY%2FCxUGsLm45lT8QlqVXqGaFN3h7XyvC2BmrRNGiLccr5QNPEO%2FuVF%2Bio4pvUexnl2H2zsAzVSsrD609paDpTBpX0hSPF%2FLI6CdIyKsxtVlR%2FojH5%2BkKgIx5I3XSA2bts9tvKfS0NqvIWAwZhplmkViKmXnlv9w&X-Amz-Signature=21b591ea76d43fe67feca471283fbb16b5a3d1d654308a57eeb448137e806899&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKH43OVP%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByE74zUgLFUfuOdxtCyn7ZdxUnOBOMBzsloLqoX2RhEAiBb7S%2FyIaT7b0yWF6BBgb4yASgfwJWASRzTagMvsEiZ%2FyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoF2nQ53Oeq2sWViCKtwDEsxN41IHzhNq3ymhKFiScCYR7dgXwSKGI4JzyeILf7HiyZ7tzPlQgcl1yKIXqZ9G35NqqIAnhlhP1LfMmy8FqwQ1kMJLaV4GqswN%2FIGwqrJEuHgKOp8nGr0%2F2yDBbh6aT3lMxAA6ISG1BrjhXKaUi5PCNVQP2Hf3BLrTiKI4XzfHQ1xkliwmt1KsgGWQdRu%2B%2BkmnWjld1y647OFLceG2prbB%2FSmo1uzg9IKqFXEHQp%2FUUUORE9tzipw8urdxdpYu80B%2FYg5Z7%2BrtB04wOsJhf1ZjLX22xKm68ELHF3%2FwqYCQMwJBY0Ndjk6lgKUih0K0O2tdX5CSUBG%2F6AW02bEsUlFqaPw%2BYrpn7gAGnpWqi4GbTG%2F4UCqD0ngXTPR9Ky0vJKDU2zmF69tsYnVP882v9MdulCV8EvMGr8Z9fYp1LBdGmO52kwd3VhG0VPB%2FjXd3bv9bCR%2BodB3ZqCIduZZ%2BuNJCmVU8HDUCQO%2F9KvWq%2FLOSmrXmKobeUhVUtwqCMbPmxyA7aP5Sru7IvqqSsVoD5sGyTHTMv9jR0urkCuLSKbYGXdRTsKhwFDfPV2OjDapIC4bIjADk1u%2Bs4RmCHZbdJpamgmIIrskGP0%2BegSlsUOrnFF5aTMLTAeCQjZ0wqarqvAY6pgE2KDLj0lulYZsDgE7SpCa63N5clf2NylkKoqaW%2FL5B%2FcSSW0xCTm86Ue8J1%2Fu0cCY%2FCxUGsLm45lT8QlqVXqGaFN3h7XyvC2BmrRNGiLccr5QNPEO%2FuVF%2Bio4pvUexnl2H2zsAzVSsrD609paDpTBpX0hSPF%2FLI6CdIyKsxtVlR%2FojH5%2BkKgIx5I3XSA2bts9tvKfS0NqvIWAwZhplmkViKmXnlv9w&X-Amz-Signature=834327d9d743cb09d303f7f94c39692cb2d10922a4e6ce87267d316d0ee073f0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKH43OVP%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByE74zUgLFUfuOdxtCyn7ZdxUnOBOMBzsloLqoX2RhEAiBb7S%2FyIaT7b0yWF6BBgb4yASgfwJWASRzTagMvsEiZ%2FyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoF2nQ53Oeq2sWViCKtwDEsxN41IHzhNq3ymhKFiScCYR7dgXwSKGI4JzyeILf7HiyZ7tzPlQgcl1yKIXqZ9G35NqqIAnhlhP1LfMmy8FqwQ1kMJLaV4GqswN%2FIGwqrJEuHgKOp8nGr0%2F2yDBbh6aT3lMxAA6ISG1BrjhXKaUi5PCNVQP2Hf3BLrTiKI4XzfHQ1xkliwmt1KsgGWQdRu%2B%2BkmnWjld1y647OFLceG2prbB%2FSmo1uzg9IKqFXEHQp%2FUUUORE9tzipw8urdxdpYu80B%2FYg5Z7%2BrtB04wOsJhf1ZjLX22xKm68ELHF3%2FwqYCQMwJBY0Ndjk6lgKUih0K0O2tdX5CSUBG%2F6AW02bEsUlFqaPw%2BYrpn7gAGnpWqi4GbTG%2F4UCqD0ngXTPR9Ky0vJKDU2zmF69tsYnVP882v9MdulCV8EvMGr8Z9fYp1LBdGmO52kwd3VhG0VPB%2FjXd3bv9bCR%2BodB3ZqCIduZZ%2BuNJCmVU8HDUCQO%2F9KvWq%2FLOSmrXmKobeUhVUtwqCMbPmxyA7aP5Sru7IvqqSsVoD5sGyTHTMv9jR0urkCuLSKbYGXdRTsKhwFDfPV2OjDapIC4bIjADk1u%2Bs4RmCHZbdJpamgmIIrskGP0%2BegSlsUOrnFF5aTMLTAeCQjZ0wqarqvAY6pgE2KDLj0lulYZsDgE7SpCa63N5clf2NylkKoqaW%2FL5B%2FcSSW0xCTm86Ue8J1%2Fu0cCY%2FCxUGsLm45lT8QlqVXqGaFN3h7XyvC2BmrRNGiLccr5QNPEO%2FuVF%2Bio4pvUexnl2H2zsAzVSsrD609paDpTBpX0hSPF%2FLI6CdIyKsxtVlR%2FojH5%2BkKgIx5I3XSA2bts9tvKfS0NqvIWAwZhplmkViKmXnlv9w&X-Amz-Signature=3948dfb7a57e44d8ad7e4543f4903f229ab52f95e68bb9ab3edae8f4d166d9dc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKH43OVP%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByE74zUgLFUfuOdxtCyn7ZdxUnOBOMBzsloLqoX2RhEAiBb7S%2FyIaT7b0yWF6BBgb4yASgfwJWASRzTagMvsEiZ%2FyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoF2nQ53Oeq2sWViCKtwDEsxN41IHzhNq3ymhKFiScCYR7dgXwSKGI4JzyeILf7HiyZ7tzPlQgcl1yKIXqZ9G35NqqIAnhlhP1LfMmy8FqwQ1kMJLaV4GqswN%2FIGwqrJEuHgKOp8nGr0%2F2yDBbh6aT3lMxAA6ISG1BrjhXKaUi5PCNVQP2Hf3BLrTiKI4XzfHQ1xkliwmt1KsgGWQdRu%2B%2BkmnWjld1y647OFLceG2prbB%2FSmo1uzg9IKqFXEHQp%2FUUUORE9tzipw8urdxdpYu80B%2FYg5Z7%2BrtB04wOsJhf1ZjLX22xKm68ELHF3%2FwqYCQMwJBY0Ndjk6lgKUih0K0O2tdX5CSUBG%2F6AW02bEsUlFqaPw%2BYrpn7gAGnpWqi4GbTG%2F4UCqD0ngXTPR9Ky0vJKDU2zmF69tsYnVP882v9MdulCV8EvMGr8Z9fYp1LBdGmO52kwd3VhG0VPB%2FjXd3bv9bCR%2BodB3ZqCIduZZ%2BuNJCmVU8HDUCQO%2F9KvWq%2FLOSmrXmKobeUhVUtwqCMbPmxyA7aP5Sru7IvqqSsVoD5sGyTHTMv9jR0urkCuLSKbYGXdRTsKhwFDfPV2OjDapIC4bIjADk1u%2Bs4RmCHZbdJpamgmIIrskGP0%2BegSlsUOrnFF5aTMLTAeCQjZ0wqarqvAY6pgE2KDLj0lulYZsDgE7SpCa63N5clf2NylkKoqaW%2FL5B%2FcSSW0xCTm86Ue8J1%2Fu0cCY%2FCxUGsLm45lT8QlqVXqGaFN3h7XyvC2BmrRNGiLccr5QNPEO%2FuVF%2Bio4pvUexnl2H2zsAzVSsrD609paDpTBpX0hSPF%2FLI6CdIyKsxtVlR%2FojH5%2BkKgIx5I3XSA2bts9tvKfS0NqvIWAwZhplmkViKmXnlv9w&X-Amz-Signature=46e1deb1f8283acd5b654fde09db75fad788494f1f0bdaa2d3fcb4efb8716cf8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKH43OVP%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByE74zUgLFUfuOdxtCyn7ZdxUnOBOMBzsloLqoX2RhEAiBb7S%2FyIaT7b0yWF6BBgb4yASgfwJWASRzTagMvsEiZ%2FyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoF2nQ53Oeq2sWViCKtwDEsxN41IHzhNq3ymhKFiScCYR7dgXwSKGI4JzyeILf7HiyZ7tzPlQgcl1yKIXqZ9G35NqqIAnhlhP1LfMmy8FqwQ1kMJLaV4GqswN%2FIGwqrJEuHgKOp8nGr0%2F2yDBbh6aT3lMxAA6ISG1BrjhXKaUi5PCNVQP2Hf3BLrTiKI4XzfHQ1xkliwmt1KsgGWQdRu%2B%2BkmnWjld1y647OFLceG2prbB%2FSmo1uzg9IKqFXEHQp%2FUUUORE9tzipw8urdxdpYu80B%2FYg5Z7%2BrtB04wOsJhf1ZjLX22xKm68ELHF3%2FwqYCQMwJBY0Ndjk6lgKUih0K0O2tdX5CSUBG%2F6AW02bEsUlFqaPw%2BYrpn7gAGnpWqi4GbTG%2F4UCqD0ngXTPR9Ky0vJKDU2zmF69tsYnVP882v9MdulCV8EvMGr8Z9fYp1LBdGmO52kwd3VhG0VPB%2FjXd3bv9bCR%2BodB3ZqCIduZZ%2BuNJCmVU8HDUCQO%2F9KvWq%2FLOSmrXmKobeUhVUtwqCMbPmxyA7aP5Sru7IvqqSsVoD5sGyTHTMv9jR0urkCuLSKbYGXdRTsKhwFDfPV2OjDapIC4bIjADk1u%2Bs4RmCHZbdJpamgmIIrskGP0%2BegSlsUOrnFF5aTMLTAeCQjZ0wqarqvAY6pgE2KDLj0lulYZsDgE7SpCa63N5clf2NylkKoqaW%2FL5B%2FcSSW0xCTm86Ue8J1%2Fu0cCY%2FCxUGsLm45lT8QlqVXqGaFN3h7XyvC2BmrRNGiLccr5QNPEO%2FuVF%2Bio4pvUexnl2H2zsAzVSsrD609paDpTBpX0hSPF%2FLI6CdIyKsxtVlR%2FojH5%2BkKgIx5I3XSA2bts9tvKfS0NqvIWAwZhplmkViKmXnlv9w&X-Amz-Signature=88aefb7a5e746e0d70efe787da841238dc34579ad91958f5cca128f2da7d317e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKH43OVP%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByE74zUgLFUfuOdxtCyn7ZdxUnOBOMBzsloLqoX2RhEAiBb7S%2FyIaT7b0yWF6BBgb4yASgfwJWASRzTagMvsEiZ%2FyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoF2nQ53Oeq2sWViCKtwDEsxN41IHzhNq3ymhKFiScCYR7dgXwSKGI4JzyeILf7HiyZ7tzPlQgcl1yKIXqZ9G35NqqIAnhlhP1LfMmy8FqwQ1kMJLaV4GqswN%2FIGwqrJEuHgKOp8nGr0%2F2yDBbh6aT3lMxAA6ISG1BrjhXKaUi5PCNVQP2Hf3BLrTiKI4XzfHQ1xkliwmt1KsgGWQdRu%2B%2BkmnWjld1y647OFLceG2prbB%2FSmo1uzg9IKqFXEHQp%2FUUUORE9tzipw8urdxdpYu80B%2FYg5Z7%2BrtB04wOsJhf1ZjLX22xKm68ELHF3%2FwqYCQMwJBY0Ndjk6lgKUih0K0O2tdX5CSUBG%2F6AW02bEsUlFqaPw%2BYrpn7gAGnpWqi4GbTG%2F4UCqD0ngXTPR9Ky0vJKDU2zmF69tsYnVP882v9MdulCV8EvMGr8Z9fYp1LBdGmO52kwd3VhG0VPB%2FjXd3bv9bCR%2BodB3ZqCIduZZ%2BuNJCmVU8HDUCQO%2F9KvWq%2FLOSmrXmKobeUhVUtwqCMbPmxyA7aP5Sru7IvqqSsVoD5sGyTHTMv9jR0urkCuLSKbYGXdRTsKhwFDfPV2OjDapIC4bIjADk1u%2Bs4RmCHZbdJpamgmIIrskGP0%2BegSlsUOrnFF5aTMLTAeCQjZ0wqarqvAY6pgE2KDLj0lulYZsDgE7SpCa63N5clf2NylkKoqaW%2FL5B%2FcSSW0xCTm86Ue8J1%2Fu0cCY%2FCxUGsLm45lT8QlqVXqGaFN3h7XyvC2BmrRNGiLccr5QNPEO%2FuVF%2Bio4pvUexnl2H2zsAzVSsrD609paDpTBpX0hSPF%2FLI6CdIyKsxtVlR%2FojH5%2BkKgIx5I3XSA2bts9tvKfS0NqvIWAwZhplmkViKmXnlv9w&X-Amz-Signature=716e02b92590674d5bf04af609b85b1e0bf98e16e6ee7e083aff5e8cfb848cd7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKH43OVP%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByE74zUgLFUfuOdxtCyn7ZdxUnOBOMBzsloLqoX2RhEAiBb7S%2FyIaT7b0yWF6BBgb4yASgfwJWASRzTagMvsEiZ%2FyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoF2nQ53Oeq2sWViCKtwDEsxN41IHzhNq3ymhKFiScCYR7dgXwSKGI4JzyeILf7HiyZ7tzPlQgcl1yKIXqZ9G35NqqIAnhlhP1LfMmy8FqwQ1kMJLaV4GqswN%2FIGwqrJEuHgKOp8nGr0%2F2yDBbh6aT3lMxAA6ISG1BrjhXKaUi5PCNVQP2Hf3BLrTiKI4XzfHQ1xkliwmt1KsgGWQdRu%2B%2BkmnWjld1y647OFLceG2prbB%2FSmo1uzg9IKqFXEHQp%2FUUUORE9tzipw8urdxdpYu80B%2FYg5Z7%2BrtB04wOsJhf1ZjLX22xKm68ELHF3%2FwqYCQMwJBY0Ndjk6lgKUih0K0O2tdX5CSUBG%2F6AW02bEsUlFqaPw%2BYrpn7gAGnpWqi4GbTG%2F4UCqD0ngXTPR9Ky0vJKDU2zmF69tsYnVP882v9MdulCV8EvMGr8Z9fYp1LBdGmO52kwd3VhG0VPB%2FjXd3bv9bCR%2BodB3ZqCIduZZ%2BuNJCmVU8HDUCQO%2F9KvWq%2FLOSmrXmKobeUhVUtwqCMbPmxyA7aP5Sru7IvqqSsVoD5sGyTHTMv9jR0urkCuLSKbYGXdRTsKhwFDfPV2OjDapIC4bIjADk1u%2Bs4RmCHZbdJpamgmIIrskGP0%2BegSlsUOrnFF5aTMLTAeCQjZ0wqarqvAY6pgE2KDLj0lulYZsDgE7SpCa63N5clf2NylkKoqaW%2FL5B%2FcSSW0xCTm86Ue8J1%2Fu0cCY%2FCxUGsLm45lT8QlqVXqGaFN3h7XyvC2BmrRNGiLccr5QNPEO%2FuVF%2Bio4pvUexnl2H2zsAzVSsrD609paDpTBpX0hSPF%2FLI6CdIyKsxtVlR%2FojH5%2BkKgIx5I3XSA2bts9tvKfS0NqvIWAwZhplmkViKmXnlv9w&X-Amz-Signature=989442eba98aaae98589e273e397465af89cffcf178bd6bd1651f4574c4e72e6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
