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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O4VKFNN%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQChIEA0qfkxtpfzKVSxrqGPh%2FXYHVSLO24b3r2%2FsF%2BlpQIgcQ3ZcalvdaCUs7%2F5sQevYS7K6RDTWhkT%2Bh4V7EoUIWQq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDGgY5YX6Zk1%2Fz9q%2FTCrcA57hSUlK96hAzSZNSsDwWUQEMxlQX9yp8QmN4pIXRSw2uOd0W33mP23y1rx3F60%2B8qAinE%2Fz6OjOuSxUKSSnAT77sWdzKQN3zWe4AIAeZ7Yz2r2K7fxEG0SQJZI557Rpf3YkV3nNWNU9Vc%2BOduIr1%2F539cge%2BlqMF8oGqUYpwlwrG31rWfU%2BaJmlxEPjaETPnpFHYEvTHVLjTdGq5hybGoJk4VKuVs8zJbowlq87lZR6zenOMpBp48XCCtfewfg1o67pxmqnl99UNLSWAJxFM81t%2BFUET0scs96%2B9JSRGxvNu2WcchgO%2FEfJiwVD2KRbX7Fc%2B13qcw4btKPLkl0JRuQHQQAUausvQUTgtH2V2CBi36H3gWJz4vbp9Nm%2FiS3vFDB2Zhh07QJaMZXRb37UZd00Fe%2BsEi4hDU6RrQ5Z3w9puIKR1j6qmpC4zAViwf4hkqvV3o8rM5oVy5Gw6UEEhvLWMZ7Z3wqXcLtbZ4qJKlLQsAmsgAktFfvPWLm8B%2Bs4G1f7JetT4sTylKQbLLOhFVY92L4YP2M6eTZ6FEAzo5qX7TwXNQI7iLZ%2FH14r6NVBPqp7GvC7vIUvbAADarnzY8EFsYUOajGZ%2FwFhmAyYjvAUt21qfBNJciq44h50MI%2B2ncMGOqUB7rHarmJkQStoUtwLC6RlOFXEezJ%2FH63Jy6sxEcHO14zpAsY%2FZOsshwooGK%2FKjsY0KZIZEPYe3czuuG0HZ0dAFkP6XuPrHSyZjvjFuj7qspRHoVYf6kTnmBdobaQMGpUfmRnshx8%2BdjT1yEc%2BihkXlTXS%2BwyfwDQ8CwCIIZkbKV9u7lgOrUI6jZVTVQoRzDrqaJgsJMW%2Bqkvke85Ee2RefMEp46yS&X-Amz-Signature=8aca525aeb82a2c660f8c4a7e816d90db29002c6fe744b9d00d01274955b7218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O4VKFNN%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQChIEA0qfkxtpfzKVSxrqGPh%2FXYHVSLO24b3r2%2FsF%2BlpQIgcQ3ZcalvdaCUs7%2F5sQevYS7K6RDTWhkT%2Bh4V7EoUIWQq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDGgY5YX6Zk1%2Fz9q%2FTCrcA57hSUlK96hAzSZNSsDwWUQEMxlQX9yp8QmN4pIXRSw2uOd0W33mP23y1rx3F60%2B8qAinE%2Fz6OjOuSxUKSSnAT77sWdzKQN3zWe4AIAeZ7Yz2r2K7fxEG0SQJZI557Rpf3YkV3nNWNU9Vc%2BOduIr1%2F539cge%2BlqMF8oGqUYpwlwrG31rWfU%2BaJmlxEPjaETPnpFHYEvTHVLjTdGq5hybGoJk4VKuVs8zJbowlq87lZR6zenOMpBp48XCCtfewfg1o67pxmqnl99UNLSWAJxFM81t%2BFUET0scs96%2B9JSRGxvNu2WcchgO%2FEfJiwVD2KRbX7Fc%2B13qcw4btKPLkl0JRuQHQQAUausvQUTgtH2V2CBi36H3gWJz4vbp9Nm%2FiS3vFDB2Zhh07QJaMZXRb37UZd00Fe%2BsEi4hDU6RrQ5Z3w9puIKR1j6qmpC4zAViwf4hkqvV3o8rM5oVy5Gw6UEEhvLWMZ7Z3wqXcLtbZ4qJKlLQsAmsgAktFfvPWLm8B%2Bs4G1f7JetT4sTylKQbLLOhFVY92L4YP2M6eTZ6FEAzo5qX7TwXNQI7iLZ%2FH14r6NVBPqp7GvC7vIUvbAADarnzY8EFsYUOajGZ%2FwFhmAyYjvAUt21qfBNJciq44h50MI%2B2ncMGOqUB7rHarmJkQStoUtwLC6RlOFXEezJ%2FH63Jy6sxEcHO14zpAsY%2FZOsshwooGK%2FKjsY0KZIZEPYe3czuuG0HZ0dAFkP6XuPrHSyZjvjFuj7qspRHoVYf6kTnmBdobaQMGpUfmRnshx8%2BdjT1yEc%2BihkXlTXS%2BwyfwDQ8CwCIIZkbKV9u7lgOrUI6jZVTVQoRzDrqaJgsJMW%2Bqkvke85Ee2RefMEp46yS&X-Amz-Signature=0a76c80d4ad80013f7556fed115b92c0610c3268d186252b2dddb41a5c1d004b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O4VKFNN%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQChIEA0qfkxtpfzKVSxrqGPh%2FXYHVSLO24b3r2%2FsF%2BlpQIgcQ3ZcalvdaCUs7%2F5sQevYS7K6RDTWhkT%2Bh4V7EoUIWQq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDGgY5YX6Zk1%2Fz9q%2FTCrcA57hSUlK96hAzSZNSsDwWUQEMxlQX9yp8QmN4pIXRSw2uOd0W33mP23y1rx3F60%2B8qAinE%2Fz6OjOuSxUKSSnAT77sWdzKQN3zWe4AIAeZ7Yz2r2K7fxEG0SQJZI557Rpf3YkV3nNWNU9Vc%2BOduIr1%2F539cge%2BlqMF8oGqUYpwlwrG31rWfU%2BaJmlxEPjaETPnpFHYEvTHVLjTdGq5hybGoJk4VKuVs8zJbowlq87lZR6zenOMpBp48XCCtfewfg1o67pxmqnl99UNLSWAJxFM81t%2BFUET0scs96%2B9JSRGxvNu2WcchgO%2FEfJiwVD2KRbX7Fc%2B13qcw4btKPLkl0JRuQHQQAUausvQUTgtH2V2CBi36H3gWJz4vbp9Nm%2FiS3vFDB2Zhh07QJaMZXRb37UZd00Fe%2BsEi4hDU6RrQ5Z3w9puIKR1j6qmpC4zAViwf4hkqvV3o8rM5oVy5Gw6UEEhvLWMZ7Z3wqXcLtbZ4qJKlLQsAmsgAktFfvPWLm8B%2Bs4G1f7JetT4sTylKQbLLOhFVY92L4YP2M6eTZ6FEAzo5qX7TwXNQI7iLZ%2FH14r6NVBPqp7GvC7vIUvbAADarnzY8EFsYUOajGZ%2FwFhmAyYjvAUt21qfBNJciq44h50MI%2B2ncMGOqUB7rHarmJkQStoUtwLC6RlOFXEezJ%2FH63Jy6sxEcHO14zpAsY%2FZOsshwooGK%2FKjsY0KZIZEPYe3czuuG0HZ0dAFkP6XuPrHSyZjvjFuj7qspRHoVYf6kTnmBdobaQMGpUfmRnshx8%2BdjT1yEc%2BihkXlTXS%2BwyfwDQ8CwCIIZkbKV9u7lgOrUI6jZVTVQoRzDrqaJgsJMW%2Bqkvke85Ee2RefMEp46yS&X-Amz-Signature=f7cc3e82835496685b2f6233c5e150ede7a43405dbb73f0ac851ec4bddf94a4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O4VKFNN%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQChIEA0qfkxtpfzKVSxrqGPh%2FXYHVSLO24b3r2%2FsF%2BlpQIgcQ3ZcalvdaCUs7%2F5sQevYS7K6RDTWhkT%2Bh4V7EoUIWQq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDGgY5YX6Zk1%2Fz9q%2FTCrcA57hSUlK96hAzSZNSsDwWUQEMxlQX9yp8QmN4pIXRSw2uOd0W33mP23y1rx3F60%2B8qAinE%2Fz6OjOuSxUKSSnAT77sWdzKQN3zWe4AIAeZ7Yz2r2K7fxEG0SQJZI557Rpf3YkV3nNWNU9Vc%2BOduIr1%2F539cge%2BlqMF8oGqUYpwlwrG31rWfU%2BaJmlxEPjaETPnpFHYEvTHVLjTdGq5hybGoJk4VKuVs8zJbowlq87lZR6zenOMpBp48XCCtfewfg1o67pxmqnl99UNLSWAJxFM81t%2BFUET0scs96%2B9JSRGxvNu2WcchgO%2FEfJiwVD2KRbX7Fc%2B13qcw4btKPLkl0JRuQHQQAUausvQUTgtH2V2CBi36H3gWJz4vbp9Nm%2FiS3vFDB2Zhh07QJaMZXRb37UZd00Fe%2BsEi4hDU6RrQ5Z3w9puIKR1j6qmpC4zAViwf4hkqvV3o8rM5oVy5Gw6UEEhvLWMZ7Z3wqXcLtbZ4qJKlLQsAmsgAktFfvPWLm8B%2Bs4G1f7JetT4sTylKQbLLOhFVY92L4YP2M6eTZ6FEAzo5qX7TwXNQI7iLZ%2FH14r6NVBPqp7GvC7vIUvbAADarnzY8EFsYUOajGZ%2FwFhmAyYjvAUt21qfBNJciq44h50MI%2B2ncMGOqUB7rHarmJkQStoUtwLC6RlOFXEezJ%2FH63Jy6sxEcHO14zpAsY%2FZOsshwooGK%2FKjsY0KZIZEPYe3czuuG0HZ0dAFkP6XuPrHSyZjvjFuj7qspRHoVYf6kTnmBdobaQMGpUfmRnshx8%2BdjT1yEc%2BihkXlTXS%2BwyfwDQ8CwCIIZkbKV9u7lgOrUI6jZVTVQoRzDrqaJgsJMW%2Bqkvke85Ee2RefMEp46yS&X-Amz-Signature=7748735e99562b96d819b9f5ab0de9b63932a0b592543fd0e23a1f6b96968671&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O4VKFNN%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQChIEA0qfkxtpfzKVSxrqGPh%2FXYHVSLO24b3r2%2FsF%2BlpQIgcQ3ZcalvdaCUs7%2F5sQevYS7K6RDTWhkT%2Bh4V7EoUIWQq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDGgY5YX6Zk1%2Fz9q%2FTCrcA57hSUlK96hAzSZNSsDwWUQEMxlQX9yp8QmN4pIXRSw2uOd0W33mP23y1rx3F60%2B8qAinE%2Fz6OjOuSxUKSSnAT77sWdzKQN3zWe4AIAeZ7Yz2r2K7fxEG0SQJZI557Rpf3YkV3nNWNU9Vc%2BOduIr1%2F539cge%2BlqMF8oGqUYpwlwrG31rWfU%2BaJmlxEPjaETPnpFHYEvTHVLjTdGq5hybGoJk4VKuVs8zJbowlq87lZR6zenOMpBp48XCCtfewfg1o67pxmqnl99UNLSWAJxFM81t%2BFUET0scs96%2B9JSRGxvNu2WcchgO%2FEfJiwVD2KRbX7Fc%2B13qcw4btKPLkl0JRuQHQQAUausvQUTgtH2V2CBi36H3gWJz4vbp9Nm%2FiS3vFDB2Zhh07QJaMZXRb37UZd00Fe%2BsEi4hDU6RrQ5Z3w9puIKR1j6qmpC4zAViwf4hkqvV3o8rM5oVy5Gw6UEEhvLWMZ7Z3wqXcLtbZ4qJKlLQsAmsgAktFfvPWLm8B%2Bs4G1f7JetT4sTylKQbLLOhFVY92L4YP2M6eTZ6FEAzo5qX7TwXNQI7iLZ%2FH14r6NVBPqp7GvC7vIUvbAADarnzY8EFsYUOajGZ%2FwFhmAyYjvAUt21qfBNJciq44h50MI%2B2ncMGOqUB7rHarmJkQStoUtwLC6RlOFXEezJ%2FH63Jy6sxEcHO14zpAsY%2FZOsshwooGK%2FKjsY0KZIZEPYe3czuuG0HZ0dAFkP6XuPrHSyZjvjFuj7qspRHoVYf6kTnmBdobaQMGpUfmRnshx8%2BdjT1yEc%2BihkXlTXS%2BwyfwDQ8CwCIIZkbKV9u7lgOrUI6jZVTVQoRzDrqaJgsJMW%2Bqkvke85Ee2RefMEp46yS&X-Amz-Signature=8687b7550a980d12a6a89a4b0c8edb17e163be314bd9889a86e7e60227a659ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O4VKFNN%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQChIEA0qfkxtpfzKVSxrqGPh%2FXYHVSLO24b3r2%2FsF%2BlpQIgcQ3ZcalvdaCUs7%2F5sQevYS7K6RDTWhkT%2Bh4V7EoUIWQq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDGgY5YX6Zk1%2Fz9q%2FTCrcA57hSUlK96hAzSZNSsDwWUQEMxlQX9yp8QmN4pIXRSw2uOd0W33mP23y1rx3F60%2B8qAinE%2Fz6OjOuSxUKSSnAT77sWdzKQN3zWe4AIAeZ7Yz2r2K7fxEG0SQJZI557Rpf3YkV3nNWNU9Vc%2BOduIr1%2F539cge%2BlqMF8oGqUYpwlwrG31rWfU%2BaJmlxEPjaETPnpFHYEvTHVLjTdGq5hybGoJk4VKuVs8zJbowlq87lZR6zenOMpBp48XCCtfewfg1o67pxmqnl99UNLSWAJxFM81t%2BFUET0scs96%2B9JSRGxvNu2WcchgO%2FEfJiwVD2KRbX7Fc%2B13qcw4btKPLkl0JRuQHQQAUausvQUTgtH2V2CBi36H3gWJz4vbp9Nm%2FiS3vFDB2Zhh07QJaMZXRb37UZd00Fe%2BsEi4hDU6RrQ5Z3w9puIKR1j6qmpC4zAViwf4hkqvV3o8rM5oVy5Gw6UEEhvLWMZ7Z3wqXcLtbZ4qJKlLQsAmsgAktFfvPWLm8B%2Bs4G1f7JetT4sTylKQbLLOhFVY92L4YP2M6eTZ6FEAzo5qX7TwXNQI7iLZ%2FH14r6NVBPqp7GvC7vIUvbAADarnzY8EFsYUOajGZ%2FwFhmAyYjvAUt21qfBNJciq44h50MI%2B2ncMGOqUB7rHarmJkQStoUtwLC6RlOFXEezJ%2FH63Jy6sxEcHO14zpAsY%2FZOsshwooGK%2FKjsY0KZIZEPYe3czuuG0HZ0dAFkP6XuPrHSyZjvjFuj7qspRHoVYf6kTnmBdobaQMGpUfmRnshx8%2BdjT1yEc%2BihkXlTXS%2BwyfwDQ8CwCIIZkbKV9u7lgOrUI6jZVTVQoRzDrqaJgsJMW%2Bqkvke85Ee2RefMEp46yS&X-Amz-Signature=10a8bbf0ea5eeed1e7441f7085969eb720d20880a40c370b0e4d012d7c4ebefd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O4VKFNN%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQChIEA0qfkxtpfzKVSxrqGPh%2FXYHVSLO24b3r2%2FsF%2BlpQIgcQ3ZcalvdaCUs7%2F5sQevYS7K6RDTWhkT%2Bh4V7EoUIWQq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDGgY5YX6Zk1%2Fz9q%2FTCrcA57hSUlK96hAzSZNSsDwWUQEMxlQX9yp8QmN4pIXRSw2uOd0W33mP23y1rx3F60%2B8qAinE%2Fz6OjOuSxUKSSnAT77sWdzKQN3zWe4AIAeZ7Yz2r2K7fxEG0SQJZI557Rpf3YkV3nNWNU9Vc%2BOduIr1%2F539cge%2BlqMF8oGqUYpwlwrG31rWfU%2BaJmlxEPjaETPnpFHYEvTHVLjTdGq5hybGoJk4VKuVs8zJbowlq87lZR6zenOMpBp48XCCtfewfg1o67pxmqnl99UNLSWAJxFM81t%2BFUET0scs96%2B9JSRGxvNu2WcchgO%2FEfJiwVD2KRbX7Fc%2B13qcw4btKPLkl0JRuQHQQAUausvQUTgtH2V2CBi36H3gWJz4vbp9Nm%2FiS3vFDB2Zhh07QJaMZXRb37UZd00Fe%2BsEi4hDU6RrQ5Z3w9puIKR1j6qmpC4zAViwf4hkqvV3o8rM5oVy5Gw6UEEhvLWMZ7Z3wqXcLtbZ4qJKlLQsAmsgAktFfvPWLm8B%2Bs4G1f7JetT4sTylKQbLLOhFVY92L4YP2M6eTZ6FEAzo5qX7TwXNQI7iLZ%2FH14r6NVBPqp7GvC7vIUvbAADarnzY8EFsYUOajGZ%2FwFhmAyYjvAUt21qfBNJciq44h50MI%2B2ncMGOqUB7rHarmJkQStoUtwLC6RlOFXEezJ%2FH63Jy6sxEcHO14zpAsY%2FZOsshwooGK%2FKjsY0KZIZEPYe3czuuG0HZ0dAFkP6XuPrHSyZjvjFuj7qspRHoVYf6kTnmBdobaQMGpUfmRnshx8%2BdjT1yEc%2BihkXlTXS%2BwyfwDQ8CwCIIZkbKV9u7lgOrUI6jZVTVQoRzDrqaJgsJMW%2Bqkvke85Ee2RefMEp46yS&X-Amz-Signature=39b06225146a498bc1afb142d0baa12c5b9bcb7e8714801545d47a58d5484904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
