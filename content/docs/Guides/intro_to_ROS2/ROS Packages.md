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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TR2X4U4%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0hE8VUvaYpw4joPHF0pjIywwv30sSs4qRcGvGLOOrFwIgaK3yD9mvi2WaYuLGvW%2BIRYW2pX2uEaHnHm1vm1WJhO4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOOOZAAfJnnh1ggPircA4jysvFlQOWd%2B33fcxUXVmKIUWW0O6NcwW%2BInKvW26ERn4c0y748ilErZcAlB9tYaNriZKjcZucPhLidQN8GXBl0is6aSZt%2Bl0vZsOvOq%2BP%2BBxafq5ySm2%2BxdsX4Dpoo5skuQSPI%2FFG3vVD7WpEe0Zcut9ti17XruBF%2BxyPgQXBaB5g18LR8V5pomWxfobK0QiY9LR1omS9QgLZvY4cnPskqa7ATLMUzdt%2BfnVfc8eo4hdie%2FL8KxSFEaH6yBfXxlCsIAT4XDpcaHaWWLeooQB2YDPOMDY1wh%2FEArpVU3Ijl7ySY5qeLnKmc%2Bx8rpdKXXwE4yDPL2ikykoqiil5KmEIWlh3OIM4nzdgLY7mKQzS1PP6kPY9NlpAGGNXfYVX4QRg2UrXdU1voyNOcQWNpr91bh1UcISJpojoEZNqBIKo7iT50qWN13dsLU2jErOyFD0r5CbfbhLg7cdJk7pK%2FozJT3cdLssdqLlkCqfXmQHIufGe5gerJxJrtXfcBY6bk5jJkI6FrykutG41AU%2Bg4Ao0LaN9Z7vfv3U0DtOXkVUL7KjUVriqXNH2UMO8f6jMKidxLwC0uwXxyC55EEVRev6fynVtRfw74HjdRzNNxtXMm9VQqbEjtmeeMx9WbMM2x5L0GOqUBo%2B%2FTcokawAVfGc6hJAgKxDcbPwtSYTQluRW7hHXrP%2FMenPc1xVGvDL%2FZgMe2HoMQ8GwtDtM0DFSSL7dNrn%2BNeqeN1woc7uUFAwK7b57RIGPlAszArpzgYwvvvYTjsEg5kBgBaINjv2SjGSvY86NT8w%2Bc0AnpdKIpIFCa7Z8w5DkjEnFkAZzwMEMkCF%2BQAKnV7yGtoRAREIxrldQ%2FEEV9916bidsc&X-Amz-Signature=4b513023054d80dd14cb6739396a723749fa7a6106724c3f3ffc20498bfbfcc4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TR2X4U4%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0hE8VUvaYpw4joPHF0pjIywwv30sSs4qRcGvGLOOrFwIgaK3yD9mvi2WaYuLGvW%2BIRYW2pX2uEaHnHm1vm1WJhO4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOOOZAAfJnnh1ggPircA4jysvFlQOWd%2B33fcxUXVmKIUWW0O6NcwW%2BInKvW26ERn4c0y748ilErZcAlB9tYaNriZKjcZucPhLidQN8GXBl0is6aSZt%2Bl0vZsOvOq%2BP%2BBxafq5ySm2%2BxdsX4Dpoo5skuQSPI%2FFG3vVD7WpEe0Zcut9ti17XruBF%2BxyPgQXBaB5g18LR8V5pomWxfobK0QiY9LR1omS9QgLZvY4cnPskqa7ATLMUzdt%2BfnVfc8eo4hdie%2FL8KxSFEaH6yBfXxlCsIAT4XDpcaHaWWLeooQB2YDPOMDY1wh%2FEArpVU3Ijl7ySY5qeLnKmc%2Bx8rpdKXXwE4yDPL2ikykoqiil5KmEIWlh3OIM4nzdgLY7mKQzS1PP6kPY9NlpAGGNXfYVX4QRg2UrXdU1voyNOcQWNpr91bh1UcISJpojoEZNqBIKo7iT50qWN13dsLU2jErOyFD0r5CbfbhLg7cdJk7pK%2FozJT3cdLssdqLlkCqfXmQHIufGe5gerJxJrtXfcBY6bk5jJkI6FrykutG41AU%2Bg4Ao0LaN9Z7vfv3U0DtOXkVUL7KjUVriqXNH2UMO8f6jMKidxLwC0uwXxyC55EEVRev6fynVtRfw74HjdRzNNxtXMm9VQqbEjtmeeMx9WbMM2x5L0GOqUBo%2B%2FTcokawAVfGc6hJAgKxDcbPwtSYTQluRW7hHXrP%2FMenPc1xVGvDL%2FZgMe2HoMQ8GwtDtM0DFSSL7dNrn%2BNeqeN1woc7uUFAwK7b57RIGPlAszArpzgYwvvvYTjsEg5kBgBaINjv2SjGSvY86NT8w%2Bc0AnpdKIpIFCa7Z8w5DkjEnFkAZzwMEMkCF%2BQAKnV7yGtoRAREIxrldQ%2FEEV9916bidsc&X-Amz-Signature=240fc91acbe3818c5c8b5ed3f9465452c84e78a024ab05414ea528ef697ff08f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TR2X4U4%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0hE8VUvaYpw4joPHF0pjIywwv30sSs4qRcGvGLOOrFwIgaK3yD9mvi2WaYuLGvW%2BIRYW2pX2uEaHnHm1vm1WJhO4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOOOZAAfJnnh1ggPircA4jysvFlQOWd%2B33fcxUXVmKIUWW0O6NcwW%2BInKvW26ERn4c0y748ilErZcAlB9tYaNriZKjcZucPhLidQN8GXBl0is6aSZt%2Bl0vZsOvOq%2BP%2BBxafq5ySm2%2BxdsX4Dpoo5skuQSPI%2FFG3vVD7WpEe0Zcut9ti17XruBF%2BxyPgQXBaB5g18LR8V5pomWxfobK0QiY9LR1omS9QgLZvY4cnPskqa7ATLMUzdt%2BfnVfc8eo4hdie%2FL8KxSFEaH6yBfXxlCsIAT4XDpcaHaWWLeooQB2YDPOMDY1wh%2FEArpVU3Ijl7ySY5qeLnKmc%2Bx8rpdKXXwE4yDPL2ikykoqiil5KmEIWlh3OIM4nzdgLY7mKQzS1PP6kPY9NlpAGGNXfYVX4QRg2UrXdU1voyNOcQWNpr91bh1UcISJpojoEZNqBIKo7iT50qWN13dsLU2jErOyFD0r5CbfbhLg7cdJk7pK%2FozJT3cdLssdqLlkCqfXmQHIufGe5gerJxJrtXfcBY6bk5jJkI6FrykutG41AU%2Bg4Ao0LaN9Z7vfv3U0DtOXkVUL7KjUVriqXNH2UMO8f6jMKidxLwC0uwXxyC55EEVRev6fynVtRfw74HjdRzNNxtXMm9VQqbEjtmeeMx9WbMM2x5L0GOqUBo%2B%2FTcokawAVfGc6hJAgKxDcbPwtSYTQluRW7hHXrP%2FMenPc1xVGvDL%2FZgMe2HoMQ8GwtDtM0DFSSL7dNrn%2BNeqeN1woc7uUFAwK7b57RIGPlAszArpzgYwvvvYTjsEg5kBgBaINjv2SjGSvY86NT8w%2Bc0AnpdKIpIFCa7Z8w5DkjEnFkAZzwMEMkCF%2BQAKnV7yGtoRAREIxrldQ%2FEEV9916bidsc&X-Amz-Signature=8eb88b39dc34cc06823721ed5c7497fa818a676087ef9b812d42e87fe0215e0e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TR2X4U4%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0hE8VUvaYpw4joPHF0pjIywwv30sSs4qRcGvGLOOrFwIgaK3yD9mvi2WaYuLGvW%2BIRYW2pX2uEaHnHm1vm1WJhO4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOOOZAAfJnnh1ggPircA4jysvFlQOWd%2B33fcxUXVmKIUWW0O6NcwW%2BInKvW26ERn4c0y748ilErZcAlB9tYaNriZKjcZucPhLidQN8GXBl0is6aSZt%2Bl0vZsOvOq%2BP%2BBxafq5ySm2%2BxdsX4Dpoo5skuQSPI%2FFG3vVD7WpEe0Zcut9ti17XruBF%2BxyPgQXBaB5g18LR8V5pomWxfobK0QiY9LR1omS9QgLZvY4cnPskqa7ATLMUzdt%2BfnVfc8eo4hdie%2FL8KxSFEaH6yBfXxlCsIAT4XDpcaHaWWLeooQB2YDPOMDY1wh%2FEArpVU3Ijl7ySY5qeLnKmc%2Bx8rpdKXXwE4yDPL2ikykoqiil5KmEIWlh3OIM4nzdgLY7mKQzS1PP6kPY9NlpAGGNXfYVX4QRg2UrXdU1voyNOcQWNpr91bh1UcISJpojoEZNqBIKo7iT50qWN13dsLU2jErOyFD0r5CbfbhLg7cdJk7pK%2FozJT3cdLssdqLlkCqfXmQHIufGe5gerJxJrtXfcBY6bk5jJkI6FrykutG41AU%2Bg4Ao0LaN9Z7vfv3U0DtOXkVUL7KjUVriqXNH2UMO8f6jMKidxLwC0uwXxyC55EEVRev6fynVtRfw74HjdRzNNxtXMm9VQqbEjtmeeMx9WbMM2x5L0GOqUBo%2B%2FTcokawAVfGc6hJAgKxDcbPwtSYTQluRW7hHXrP%2FMenPc1xVGvDL%2FZgMe2HoMQ8GwtDtM0DFSSL7dNrn%2BNeqeN1woc7uUFAwK7b57RIGPlAszArpzgYwvvvYTjsEg5kBgBaINjv2SjGSvY86NT8w%2Bc0AnpdKIpIFCa7Z8w5DkjEnFkAZzwMEMkCF%2BQAKnV7yGtoRAREIxrldQ%2FEEV9916bidsc&X-Amz-Signature=d2e922bd0cfd33e5fe50dff1d5036da193d2f22818e54e70f7c44ddf332efe25&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TR2X4U4%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0hE8VUvaYpw4joPHF0pjIywwv30sSs4qRcGvGLOOrFwIgaK3yD9mvi2WaYuLGvW%2BIRYW2pX2uEaHnHm1vm1WJhO4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOOOZAAfJnnh1ggPircA4jysvFlQOWd%2B33fcxUXVmKIUWW0O6NcwW%2BInKvW26ERn4c0y748ilErZcAlB9tYaNriZKjcZucPhLidQN8GXBl0is6aSZt%2Bl0vZsOvOq%2BP%2BBxafq5ySm2%2BxdsX4Dpoo5skuQSPI%2FFG3vVD7WpEe0Zcut9ti17XruBF%2BxyPgQXBaB5g18LR8V5pomWxfobK0QiY9LR1omS9QgLZvY4cnPskqa7ATLMUzdt%2BfnVfc8eo4hdie%2FL8KxSFEaH6yBfXxlCsIAT4XDpcaHaWWLeooQB2YDPOMDY1wh%2FEArpVU3Ijl7ySY5qeLnKmc%2Bx8rpdKXXwE4yDPL2ikykoqiil5KmEIWlh3OIM4nzdgLY7mKQzS1PP6kPY9NlpAGGNXfYVX4QRg2UrXdU1voyNOcQWNpr91bh1UcISJpojoEZNqBIKo7iT50qWN13dsLU2jErOyFD0r5CbfbhLg7cdJk7pK%2FozJT3cdLssdqLlkCqfXmQHIufGe5gerJxJrtXfcBY6bk5jJkI6FrykutG41AU%2Bg4Ao0LaN9Z7vfv3U0DtOXkVUL7KjUVriqXNH2UMO8f6jMKidxLwC0uwXxyC55EEVRev6fynVtRfw74HjdRzNNxtXMm9VQqbEjtmeeMx9WbMM2x5L0GOqUBo%2B%2FTcokawAVfGc6hJAgKxDcbPwtSYTQluRW7hHXrP%2FMenPc1xVGvDL%2FZgMe2HoMQ8GwtDtM0DFSSL7dNrn%2BNeqeN1woc7uUFAwK7b57RIGPlAszArpzgYwvvvYTjsEg5kBgBaINjv2SjGSvY86NT8w%2Bc0AnpdKIpIFCa7Z8w5DkjEnFkAZzwMEMkCF%2BQAKnV7yGtoRAREIxrldQ%2FEEV9916bidsc&X-Amz-Signature=f115cfe7eb8e110bc0b5e2eb15cc46b4e99866a19911423023772512634f41a9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TR2X4U4%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0hE8VUvaYpw4joPHF0pjIywwv30sSs4qRcGvGLOOrFwIgaK3yD9mvi2WaYuLGvW%2BIRYW2pX2uEaHnHm1vm1WJhO4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOOOZAAfJnnh1ggPircA4jysvFlQOWd%2B33fcxUXVmKIUWW0O6NcwW%2BInKvW26ERn4c0y748ilErZcAlB9tYaNriZKjcZucPhLidQN8GXBl0is6aSZt%2Bl0vZsOvOq%2BP%2BBxafq5ySm2%2BxdsX4Dpoo5skuQSPI%2FFG3vVD7WpEe0Zcut9ti17XruBF%2BxyPgQXBaB5g18LR8V5pomWxfobK0QiY9LR1omS9QgLZvY4cnPskqa7ATLMUzdt%2BfnVfc8eo4hdie%2FL8KxSFEaH6yBfXxlCsIAT4XDpcaHaWWLeooQB2YDPOMDY1wh%2FEArpVU3Ijl7ySY5qeLnKmc%2Bx8rpdKXXwE4yDPL2ikykoqiil5KmEIWlh3OIM4nzdgLY7mKQzS1PP6kPY9NlpAGGNXfYVX4QRg2UrXdU1voyNOcQWNpr91bh1UcISJpojoEZNqBIKo7iT50qWN13dsLU2jErOyFD0r5CbfbhLg7cdJk7pK%2FozJT3cdLssdqLlkCqfXmQHIufGe5gerJxJrtXfcBY6bk5jJkI6FrykutG41AU%2Bg4Ao0LaN9Z7vfv3U0DtOXkVUL7KjUVriqXNH2UMO8f6jMKidxLwC0uwXxyC55EEVRev6fynVtRfw74HjdRzNNxtXMm9VQqbEjtmeeMx9WbMM2x5L0GOqUBo%2B%2FTcokawAVfGc6hJAgKxDcbPwtSYTQluRW7hHXrP%2FMenPc1xVGvDL%2FZgMe2HoMQ8GwtDtM0DFSSL7dNrn%2BNeqeN1woc7uUFAwK7b57RIGPlAszArpzgYwvvvYTjsEg5kBgBaINjv2SjGSvY86NT8w%2Bc0AnpdKIpIFCa7Z8w5DkjEnFkAZzwMEMkCF%2BQAKnV7yGtoRAREIxrldQ%2FEEV9916bidsc&X-Amz-Signature=416e8ee00fedd95fdd28b3e1560a363a604f2d008d74257449077ba53b6e06c5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TR2X4U4%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0hE8VUvaYpw4joPHF0pjIywwv30sSs4qRcGvGLOOrFwIgaK3yD9mvi2WaYuLGvW%2BIRYW2pX2uEaHnHm1vm1WJhO4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOOOZAAfJnnh1ggPircA4jysvFlQOWd%2B33fcxUXVmKIUWW0O6NcwW%2BInKvW26ERn4c0y748ilErZcAlB9tYaNriZKjcZucPhLidQN8GXBl0is6aSZt%2Bl0vZsOvOq%2BP%2BBxafq5ySm2%2BxdsX4Dpoo5skuQSPI%2FFG3vVD7WpEe0Zcut9ti17XruBF%2BxyPgQXBaB5g18LR8V5pomWxfobK0QiY9LR1omS9QgLZvY4cnPskqa7ATLMUzdt%2BfnVfc8eo4hdie%2FL8KxSFEaH6yBfXxlCsIAT4XDpcaHaWWLeooQB2YDPOMDY1wh%2FEArpVU3Ijl7ySY5qeLnKmc%2Bx8rpdKXXwE4yDPL2ikykoqiil5KmEIWlh3OIM4nzdgLY7mKQzS1PP6kPY9NlpAGGNXfYVX4QRg2UrXdU1voyNOcQWNpr91bh1UcISJpojoEZNqBIKo7iT50qWN13dsLU2jErOyFD0r5CbfbhLg7cdJk7pK%2FozJT3cdLssdqLlkCqfXmQHIufGe5gerJxJrtXfcBY6bk5jJkI6FrykutG41AU%2Bg4Ao0LaN9Z7vfv3U0DtOXkVUL7KjUVriqXNH2UMO8f6jMKidxLwC0uwXxyC55EEVRev6fynVtRfw74HjdRzNNxtXMm9VQqbEjtmeeMx9WbMM2x5L0GOqUBo%2B%2FTcokawAVfGc6hJAgKxDcbPwtSYTQluRW7hHXrP%2FMenPc1xVGvDL%2FZgMe2HoMQ8GwtDtM0DFSSL7dNrn%2BNeqeN1woc7uUFAwK7b57RIGPlAszArpzgYwvvvYTjsEg5kBgBaINjv2SjGSvY86NT8w%2Bc0AnpdKIpIFCa7Z8w5DkjEnFkAZzwMEMkCF%2BQAKnV7yGtoRAREIxrldQ%2FEEV9916bidsc&X-Amz-Signature=9037185776dd829cb88fbfe09fba8a40e0bf105fcdd31bc1c84da968fd1ed173&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
