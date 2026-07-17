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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE6LWT7O%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BkTDcqq0vMC9p81ZN4HfkhJcC72leimJogYdjWzFOtAiA4IVwEU3%2BESz3YJCOPbRBvgK9ZPxFBFiuu6CHTie7vnCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMJCtIh%2BhXlh8OUQkKKtwD6zW6i9Hxa%2Fss3m%2F8raY3jblOodqYQLIOCELcqj2CmMJx5KHEcQUPU%2BGGa1hZrjU5oG5VCbolb4Wl9MbM4aCjw%2FzaHxr63pR2WBn%2BraWipRVvcMZy4p46VXgcVEL9JVbiFTeqZc1uB6pmtugj8NmnuT2ZWHIT2cw1li13lVrMrn2xT0G2orDnRwUKEqGcW17IGLFYN6bNREP2itHRHbdFqffL2%2BKzKGbJ0bWOdpibNOzPxnrexTER%2BDXMQUjQU8ZGdPYrgnvMCHSUHty4HRYEF73yA8W%2B9GQGuL5%2FB4xf6ij5uksietLDHNE9WuRtlfqJXHgCi%2BLdjnmI%2Bi0C11BUop7uuM5Vhxk7psCrguNHsmomdLlkXWfG6eACqvxQSFpW5z5wDIMBak%2FWdGo%2Br6P5kbtH9FBD8iJtxJgJm7KNeBs2aP%2FV0H9qVL%2BOf7UWE%2Fpki0dB8ZHJrbwRxnIenIdoLjagH6iQW7YesoIQV0j2uoQLUovk6lyG4ggz86RZr75wTYjR8XtMfGS3Da7o%2FoqRZvzIt3CF6n5xF4Xk%2FEM%2BSjYVqUhW9essLoEt3D6OxnoQ4496Hw58snn%2F0IbZQgESiZsTxfbTKVB01ZX7EvdXYdMRXw1%2FrbaLQKeD4MQwuqbm0gY6pgEf9X8g9GiYiZMwBr6YcFU3wl9oX7yIwCK9tvMOdq7ZTwjhEtSj8LvCzKyR5o0kbRDlSRPmhehxPTGd%2F2D2n5S8P832mpOS1L4gWWoD%2FylR%2FoOGNPouxNtpZMNuKguL%2BL%2FqQDjxC707Q9nWmJonAtKhjAAGrlyDbCwMJ5ixw%2F2y2Zi1PgvNKtlP%2BIysnLu8ZV8htDezRhS1T%2FeC7CIUtRbF5JRZwWUG&X-Amz-Signature=8060e903e5b99cd140d75da2626760584d8e4e6f1bfc3d347d767f829d3e1a94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE6LWT7O%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BkTDcqq0vMC9p81ZN4HfkhJcC72leimJogYdjWzFOtAiA4IVwEU3%2BESz3YJCOPbRBvgK9ZPxFBFiuu6CHTie7vnCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMJCtIh%2BhXlh8OUQkKKtwD6zW6i9Hxa%2Fss3m%2F8raY3jblOodqYQLIOCELcqj2CmMJx5KHEcQUPU%2BGGa1hZrjU5oG5VCbolb4Wl9MbM4aCjw%2FzaHxr63pR2WBn%2BraWipRVvcMZy4p46VXgcVEL9JVbiFTeqZc1uB6pmtugj8NmnuT2ZWHIT2cw1li13lVrMrn2xT0G2orDnRwUKEqGcW17IGLFYN6bNREP2itHRHbdFqffL2%2BKzKGbJ0bWOdpibNOzPxnrexTER%2BDXMQUjQU8ZGdPYrgnvMCHSUHty4HRYEF73yA8W%2B9GQGuL5%2FB4xf6ij5uksietLDHNE9WuRtlfqJXHgCi%2BLdjnmI%2Bi0C11BUop7uuM5Vhxk7psCrguNHsmomdLlkXWfG6eACqvxQSFpW5z5wDIMBak%2FWdGo%2Br6P5kbtH9FBD8iJtxJgJm7KNeBs2aP%2FV0H9qVL%2BOf7UWE%2Fpki0dB8ZHJrbwRxnIenIdoLjagH6iQW7YesoIQV0j2uoQLUovk6lyG4ggz86RZr75wTYjR8XtMfGS3Da7o%2FoqRZvzIt3CF6n5xF4Xk%2FEM%2BSjYVqUhW9essLoEt3D6OxnoQ4496Hw58snn%2F0IbZQgESiZsTxfbTKVB01ZX7EvdXYdMRXw1%2FrbaLQKeD4MQwuqbm0gY6pgEf9X8g9GiYiZMwBr6YcFU3wl9oX7yIwCK9tvMOdq7ZTwjhEtSj8LvCzKyR5o0kbRDlSRPmhehxPTGd%2F2D2n5S8P832mpOS1L4gWWoD%2FylR%2FoOGNPouxNtpZMNuKguL%2BL%2FqQDjxC707Q9nWmJonAtKhjAAGrlyDbCwMJ5ixw%2F2y2Zi1PgvNKtlP%2BIysnLu8ZV8htDezRhS1T%2FeC7CIUtRbF5JRZwWUG&X-Amz-Signature=ea66879126c2a9d3a3625ae7caca2f72981b3bf7a4aa0642cf257d3d9296186d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE6LWT7O%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BkTDcqq0vMC9p81ZN4HfkhJcC72leimJogYdjWzFOtAiA4IVwEU3%2BESz3YJCOPbRBvgK9ZPxFBFiuu6CHTie7vnCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMJCtIh%2BhXlh8OUQkKKtwD6zW6i9Hxa%2Fss3m%2F8raY3jblOodqYQLIOCELcqj2CmMJx5KHEcQUPU%2BGGa1hZrjU5oG5VCbolb4Wl9MbM4aCjw%2FzaHxr63pR2WBn%2BraWipRVvcMZy4p46VXgcVEL9JVbiFTeqZc1uB6pmtugj8NmnuT2ZWHIT2cw1li13lVrMrn2xT0G2orDnRwUKEqGcW17IGLFYN6bNREP2itHRHbdFqffL2%2BKzKGbJ0bWOdpibNOzPxnrexTER%2BDXMQUjQU8ZGdPYrgnvMCHSUHty4HRYEF73yA8W%2B9GQGuL5%2FB4xf6ij5uksietLDHNE9WuRtlfqJXHgCi%2BLdjnmI%2Bi0C11BUop7uuM5Vhxk7psCrguNHsmomdLlkXWfG6eACqvxQSFpW5z5wDIMBak%2FWdGo%2Br6P5kbtH9FBD8iJtxJgJm7KNeBs2aP%2FV0H9qVL%2BOf7UWE%2Fpki0dB8ZHJrbwRxnIenIdoLjagH6iQW7YesoIQV0j2uoQLUovk6lyG4ggz86RZr75wTYjR8XtMfGS3Da7o%2FoqRZvzIt3CF6n5xF4Xk%2FEM%2BSjYVqUhW9essLoEt3D6OxnoQ4496Hw58snn%2F0IbZQgESiZsTxfbTKVB01ZX7EvdXYdMRXw1%2FrbaLQKeD4MQwuqbm0gY6pgEf9X8g9GiYiZMwBr6YcFU3wl9oX7yIwCK9tvMOdq7ZTwjhEtSj8LvCzKyR5o0kbRDlSRPmhehxPTGd%2F2D2n5S8P832mpOS1L4gWWoD%2FylR%2FoOGNPouxNtpZMNuKguL%2BL%2FqQDjxC707Q9nWmJonAtKhjAAGrlyDbCwMJ5ixw%2F2y2Zi1PgvNKtlP%2BIysnLu8ZV8htDezRhS1T%2FeC7CIUtRbF5JRZwWUG&X-Amz-Signature=27ec2ebde7052b7b7d006acf872d5c67631ee5d3752c3f1f761da9ce8e046bfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE6LWT7O%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BkTDcqq0vMC9p81ZN4HfkhJcC72leimJogYdjWzFOtAiA4IVwEU3%2BESz3YJCOPbRBvgK9ZPxFBFiuu6CHTie7vnCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMJCtIh%2BhXlh8OUQkKKtwD6zW6i9Hxa%2Fss3m%2F8raY3jblOodqYQLIOCELcqj2CmMJx5KHEcQUPU%2BGGa1hZrjU5oG5VCbolb4Wl9MbM4aCjw%2FzaHxr63pR2WBn%2BraWipRVvcMZy4p46VXgcVEL9JVbiFTeqZc1uB6pmtugj8NmnuT2ZWHIT2cw1li13lVrMrn2xT0G2orDnRwUKEqGcW17IGLFYN6bNREP2itHRHbdFqffL2%2BKzKGbJ0bWOdpibNOzPxnrexTER%2BDXMQUjQU8ZGdPYrgnvMCHSUHty4HRYEF73yA8W%2B9GQGuL5%2FB4xf6ij5uksietLDHNE9WuRtlfqJXHgCi%2BLdjnmI%2Bi0C11BUop7uuM5Vhxk7psCrguNHsmomdLlkXWfG6eACqvxQSFpW5z5wDIMBak%2FWdGo%2Br6P5kbtH9FBD8iJtxJgJm7KNeBs2aP%2FV0H9qVL%2BOf7UWE%2Fpki0dB8ZHJrbwRxnIenIdoLjagH6iQW7YesoIQV0j2uoQLUovk6lyG4ggz86RZr75wTYjR8XtMfGS3Da7o%2FoqRZvzIt3CF6n5xF4Xk%2FEM%2BSjYVqUhW9essLoEt3D6OxnoQ4496Hw58snn%2F0IbZQgESiZsTxfbTKVB01ZX7EvdXYdMRXw1%2FrbaLQKeD4MQwuqbm0gY6pgEf9X8g9GiYiZMwBr6YcFU3wl9oX7yIwCK9tvMOdq7ZTwjhEtSj8LvCzKyR5o0kbRDlSRPmhehxPTGd%2F2D2n5S8P832mpOS1L4gWWoD%2FylR%2FoOGNPouxNtpZMNuKguL%2BL%2FqQDjxC707Q9nWmJonAtKhjAAGrlyDbCwMJ5ixw%2F2y2Zi1PgvNKtlP%2BIysnLu8ZV8htDezRhS1T%2FeC7CIUtRbF5JRZwWUG&X-Amz-Signature=3e8c85ada7b792c789d3eecd3b86bad0f7314c012965fdb8450efb86bd1c4eb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE6LWT7O%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BkTDcqq0vMC9p81ZN4HfkhJcC72leimJogYdjWzFOtAiA4IVwEU3%2BESz3YJCOPbRBvgK9ZPxFBFiuu6CHTie7vnCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMJCtIh%2BhXlh8OUQkKKtwD6zW6i9Hxa%2Fss3m%2F8raY3jblOodqYQLIOCELcqj2CmMJx5KHEcQUPU%2BGGa1hZrjU5oG5VCbolb4Wl9MbM4aCjw%2FzaHxr63pR2WBn%2BraWipRVvcMZy4p46VXgcVEL9JVbiFTeqZc1uB6pmtugj8NmnuT2ZWHIT2cw1li13lVrMrn2xT0G2orDnRwUKEqGcW17IGLFYN6bNREP2itHRHbdFqffL2%2BKzKGbJ0bWOdpibNOzPxnrexTER%2BDXMQUjQU8ZGdPYrgnvMCHSUHty4HRYEF73yA8W%2B9GQGuL5%2FB4xf6ij5uksietLDHNE9WuRtlfqJXHgCi%2BLdjnmI%2Bi0C11BUop7uuM5Vhxk7psCrguNHsmomdLlkXWfG6eACqvxQSFpW5z5wDIMBak%2FWdGo%2Br6P5kbtH9FBD8iJtxJgJm7KNeBs2aP%2FV0H9qVL%2BOf7UWE%2Fpki0dB8ZHJrbwRxnIenIdoLjagH6iQW7YesoIQV0j2uoQLUovk6lyG4ggz86RZr75wTYjR8XtMfGS3Da7o%2FoqRZvzIt3CF6n5xF4Xk%2FEM%2BSjYVqUhW9essLoEt3D6OxnoQ4496Hw58snn%2F0IbZQgESiZsTxfbTKVB01ZX7EvdXYdMRXw1%2FrbaLQKeD4MQwuqbm0gY6pgEf9X8g9GiYiZMwBr6YcFU3wl9oX7yIwCK9tvMOdq7ZTwjhEtSj8LvCzKyR5o0kbRDlSRPmhehxPTGd%2F2D2n5S8P832mpOS1L4gWWoD%2FylR%2FoOGNPouxNtpZMNuKguL%2BL%2FqQDjxC707Q9nWmJonAtKhjAAGrlyDbCwMJ5ixw%2F2y2Zi1PgvNKtlP%2BIysnLu8ZV8htDezRhS1T%2FeC7CIUtRbF5JRZwWUG&X-Amz-Signature=a77a32d48ad2ae528a5bbfb46d2d8ad5c0be4966b4d0fb0289e9bd15e9692090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE6LWT7O%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BkTDcqq0vMC9p81ZN4HfkhJcC72leimJogYdjWzFOtAiA4IVwEU3%2BESz3YJCOPbRBvgK9ZPxFBFiuu6CHTie7vnCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMJCtIh%2BhXlh8OUQkKKtwD6zW6i9Hxa%2Fss3m%2F8raY3jblOodqYQLIOCELcqj2CmMJx5KHEcQUPU%2BGGa1hZrjU5oG5VCbolb4Wl9MbM4aCjw%2FzaHxr63pR2WBn%2BraWipRVvcMZy4p46VXgcVEL9JVbiFTeqZc1uB6pmtugj8NmnuT2ZWHIT2cw1li13lVrMrn2xT0G2orDnRwUKEqGcW17IGLFYN6bNREP2itHRHbdFqffL2%2BKzKGbJ0bWOdpibNOzPxnrexTER%2BDXMQUjQU8ZGdPYrgnvMCHSUHty4HRYEF73yA8W%2B9GQGuL5%2FB4xf6ij5uksietLDHNE9WuRtlfqJXHgCi%2BLdjnmI%2Bi0C11BUop7uuM5Vhxk7psCrguNHsmomdLlkXWfG6eACqvxQSFpW5z5wDIMBak%2FWdGo%2Br6P5kbtH9FBD8iJtxJgJm7KNeBs2aP%2FV0H9qVL%2BOf7UWE%2Fpki0dB8ZHJrbwRxnIenIdoLjagH6iQW7YesoIQV0j2uoQLUovk6lyG4ggz86RZr75wTYjR8XtMfGS3Da7o%2FoqRZvzIt3CF6n5xF4Xk%2FEM%2BSjYVqUhW9essLoEt3D6OxnoQ4496Hw58snn%2F0IbZQgESiZsTxfbTKVB01ZX7EvdXYdMRXw1%2FrbaLQKeD4MQwuqbm0gY6pgEf9X8g9GiYiZMwBr6YcFU3wl9oX7yIwCK9tvMOdq7ZTwjhEtSj8LvCzKyR5o0kbRDlSRPmhehxPTGd%2F2D2n5S8P832mpOS1L4gWWoD%2FylR%2FoOGNPouxNtpZMNuKguL%2BL%2FqQDjxC707Q9nWmJonAtKhjAAGrlyDbCwMJ5ixw%2F2y2Zi1PgvNKtlP%2BIysnLu8ZV8htDezRhS1T%2FeC7CIUtRbF5JRZwWUG&X-Amz-Signature=ad5c355cf79741ecf9dee34d6c9f5ed2adab9329f57d671529fd205a4f4121ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE6LWT7O%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BkTDcqq0vMC9p81ZN4HfkhJcC72leimJogYdjWzFOtAiA4IVwEU3%2BESz3YJCOPbRBvgK9ZPxFBFiuu6CHTie7vnCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMJCtIh%2BhXlh8OUQkKKtwD6zW6i9Hxa%2Fss3m%2F8raY3jblOodqYQLIOCELcqj2CmMJx5KHEcQUPU%2BGGa1hZrjU5oG5VCbolb4Wl9MbM4aCjw%2FzaHxr63pR2WBn%2BraWipRVvcMZy4p46VXgcVEL9JVbiFTeqZc1uB6pmtugj8NmnuT2ZWHIT2cw1li13lVrMrn2xT0G2orDnRwUKEqGcW17IGLFYN6bNREP2itHRHbdFqffL2%2BKzKGbJ0bWOdpibNOzPxnrexTER%2BDXMQUjQU8ZGdPYrgnvMCHSUHty4HRYEF73yA8W%2B9GQGuL5%2FB4xf6ij5uksietLDHNE9WuRtlfqJXHgCi%2BLdjnmI%2Bi0C11BUop7uuM5Vhxk7psCrguNHsmomdLlkXWfG6eACqvxQSFpW5z5wDIMBak%2FWdGo%2Br6P5kbtH9FBD8iJtxJgJm7KNeBs2aP%2FV0H9qVL%2BOf7UWE%2Fpki0dB8ZHJrbwRxnIenIdoLjagH6iQW7YesoIQV0j2uoQLUovk6lyG4ggz86RZr75wTYjR8XtMfGS3Da7o%2FoqRZvzIt3CF6n5xF4Xk%2FEM%2BSjYVqUhW9essLoEt3D6OxnoQ4496Hw58snn%2F0IbZQgESiZsTxfbTKVB01ZX7EvdXYdMRXw1%2FrbaLQKeD4MQwuqbm0gY6pgEf9X8g9GiYiZMwBr6YcFU3wl9oX7yIwCK9tvMOdq7ZTwjhEtSj8LvCzKyR5o0kbRDlSRPmhehxPTGd%2F2D2n5S8P832mpOS1L4gWWoD%2FylR%2FoOGNPouxNtpZMNuKguL%2BL%2FqQDjxC707Q9nWmJonAtKhjAAGrlyDbCwMJ5ixw%2F2y2Zi1PgvNKtlP%2BIysnLu8ZV8htDezRhS1T%2FeC7CIUtRbF5JRZwWUG&X-Amz-Signature=727485341c2aa3e42163c4867a93d7d21ee0cabb978cd7a7b387bc926638e10f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
