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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WOMECVP%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD7nCQ9W6LUVr9R8feKepYL%2FDEOP6k7vWUnfGIRFfkSCQIhAJi1TvSFI6k1X61TU8ZXZFLPKWTrhncPlDP2t4hE%2FEw5KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxeu9GSqF1BVjeCAeYq3AMUe1BVEQMNYB5hbsYEGL4oCsrugXWAztGC2Fe8ehGrREvh%2BPEeVB5rQm93xow8p%2FrXQEGkPmdAphF6ldtehQWQSj16osE8%2BFk2zswuVbxYkuBZVjdiqCewkM79iFh%2FMBE6zve7DJV9anidD1tJZXzhCeKSWIwohIZEOHEssKs7va%2B6UWwQ5NRGmEJ1fU2%2Bi1GIlNvatYIgr%2BXMyDHGOTG1iA7vjYdXqb6RrLhwemwTPiY8j0GnS7Di7xZwOFwcugg0p8S%2FKx7nqavlSL1AutgUomDq8X9DPHGdBOnFZeV1L8KQCN6w8ZnvaA5dtJM9qnU6S7qTJLuF9ThqdaGqnFJEgIkNSEy6ui%2F8AUOyzcZWM8On%2FQw%2FGy3AzMeTUZ%2BsrZKIeepgQdrRA60BPWDDi1BPKs4gLoPb%2BGH9mLq9rIa2NDwG%2BezAJzq%2F01i1SctmW4vz%2FXVE0o10grMJcoltTGYXIqYrkHoe8l1DJ8dRbX1LLAtQmzaQNXl05JI3cetOgUvSLvlj5Y1GLCq3T75MHKXUnjnGDL4XjtffuW%2Blhzi8jtdpDvjpya7gvV6WgPVliOBzqYifBO5aEE6zY%2BiBedaj6qdTEtJDiaKdRRNmCjccowPFw3jIE79qc5bTnDCMpu%2B%2BBjqkAdbKengN8Js46y9MKnA4WvJ59qls6efP%2Ffw2urb6iejsNJy4yciiS0C0E66lQ%2FiVEkU4F%2FZi%2F1ECt0g2gEUtXE1bJyV9b3hIMzxrVUu6zB8zMKHohESh%2BI%2Fsecar6bNII4QVgmqwI0qfKPzuC9hy9r4FQBkmbKaTxdReNC6GakJ3U6qeWC7BiuhMFCHFr%2FKI6vLH0MQ9az5gYJjVnc1gvPNLZ%2FcL&X-Amz-Signature=086b6970ea92533928555b2a7f5bbb39b02bd34c02ba01f6a9cd6edbe099158e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WOMECVP%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD7nCQ9W6LUVr9R8feKepYL%2FDEOP6k7vWUnfGIRFfkSCQIhAJi1TvSFI6k1X61TU8ZXZFLPKWTrhncPlDP2t4hE%2FEw5KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxeu9GSqF1BVjeCAeYq3AMUe1BVEQMNYB5hbsYEGL4oCsrugXWAztGC2Fe8ehGrREvh%2BPEeVB5rQm93xow8p%2FrXQEGkPmdAphF6ldtehQWQSj16osE8%2BFk2zswuVbxYkuBZVjdiqCewkM79iFh%2FMBE6zve7DJV9anidD1tJZXzhCeKSWIwohIZEOHEssKs7va%2B6UWwQ5NRGmEJ1fU2%2Bi1GIlNvatYIgr%2BXMyDHGOTG1iA7vjYdXqb6RrLhwemwTPiY8j0GnS7Di7xZwOFwcugg0p8S%2FKx7nqavlSL1AutgUomDq8X9DPHGdBOnFZeV1L8KQCN6w8ZnvaA5dtJM9qnU6S7qTJLuF9ThqdaGqnFJEgIkNSEy6ui%2F8AUOyzcZWM8On%2FQw%2FGy3AzMeTUZ%2BsrZKIeepgQdrRA60BPWDDi1BPKs4gLoPb%2BGH9mLq9rIa2NDwG%2BezAJzq%2F01i1SctmW4vz%2FXVE0o10grMJcoltTGYXIqYrkHoe8l1DJ8dRbX1LLAtQmzaQNXl05JI3cetOgUvSLvlj5Y1GLCq3T75MHKXUnjnGDL4XjtffuW%2Blhzi8jtdpDvjpya7gvV6WgPVliOBzqYifBO5aEE6zY%2BiBedaj6qdTEtJDiaKdRRNmCjccowPFw3jIE79qc5bTnDCMpu%2B%2BBjqkAdbKengN8Js46y9MKnA4WvJ59qls6efP%2Ffw2urb6iejsNJy4yciiS0C0E66lQ%2FiVEkU4F%2FZi%2F1ECt0g2gEUtXE1bJyV9b3hIMzxrVUu6zB8zMKHohESh%2BI%2Fsecar6bNII4QVgmqwI0qfKPzuC9hy9r4FQBkmbKaTxdReNC6GakJ3U6qeWC7BiuhMFCHFr%2FKI6vLH0MQ9az5gYJjVnc1gvPNLZ%2FcL&X-Amz-Signature=5f75fd19c6f6cce8de428aab9fd943a24a22d6013afaba1fa33d8d69872f3c06&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WOMECVP%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD7nCQ9W6LUVr9R8feKepYL%2FDEOP6k7vWUnfGIRFfkSCQIhAJi1TvSFI6k1X61TU8ZXZFLPKWTrhncPlDP2t4hE%2FEw5KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxeu9GSqF1BVjeCAeYq3AMUe1BVEQMNYB5hbsYEGL4oCsrugXWAztGC2Fe8ehGrREvh%2BPEeVB5rQm93xow8p%2FrXQEGkPmdAphF6ldtehQWQSj16osE8%2BFk2zswuVbxYkuBZVjdiqCewkM79iFh%2FMBE6zve7DJV9anidD1tJZXzhCeKSWIwohIZEOHEssKs7va%2B6UWwQ5NRGmEJ1fU2%2Bi1GIlNvatYIgr%2BXMyDHGOTG1iA7vjYdXqb6RrLhwemwTPiY8j0GnS7Di7xZwOFwcugg0p8S%2FKx7nqavlSL1AutgUomDq8X9DPHGdBOnFZeV1L8KQCN6w8ZnvaA5dtJM9qnU6S7qTJLuF9ThqdaGqnFJEgIkNSEy6ui%2F8AUOyzcZWM8On%2FQw%2FGy3AzMeTUZ%2BsrZKIeepgQdrRA60BPWDDi1BPKs4gLoPb%2BGH9mLq9rIa2NDwG%2BezAJzq%2F01i1SctmW4vz%2FXVE0o10grMJcoltTGYXIqYrkHoe8l1DJ8dRbX1LLAtQmzaQNXl05JI3cetOgUvSLvlj5Y1GLCq3T75MHKXUnjnGDL4XjtffuW%2Blhzi8jtdpDvjpya7gvV6WgPVliOBzqYifBO5aEE6zY%2BiBedaj6qdTEtJDiaKdRRNmCjccowPFw3jIE79qc5bTnDCMpu%2B%2BBjqkAdbKengN8Js46y9MKnA4WvJ59qls6efP%2Ffw2urb6iejsNJy4yciiS0C0E66lQ%2FiVEkU4F%2FZi%2F1ECt0g2gEUtXE1bJyV9b3hIMzxrVUu6zB8zMKHohESh%2BI%2Fsecar6bNII4QVgmqwI0qfKPzuC9hy9r4FQBkmbKaTxdReNC6GakJ3U6qeWC7BiuhMFCHFr%2FKI6vLH0MQ9az5gYJjVnc1gvPNLZ%2FcL&X-Amz-Signature=832228db77a19d42f7f666cfbbafae36eb460e9b83f0d7bfdaf7d8d9bf8391d4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WOMECVP%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD7nCQ9W6LUVr9R8feKepYL%2FDEOP6k7vWUnfGIRFfkSCQIhAJi1TvSFI6k1X61TU8ZXZFLPKWTrhncPlDP2t4hE%2FEw5KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxeu9GSqF1BVjeCAeYq3AMUe1BVEQMNYB5hbsYEGL4oCsrugXWAztGC2Fe8ehGrREvh%2BPEeVB5rQm93xow8p%2FrXQEGkPmdAphF6ldtehQWQSj16osE8%2BFk2zswuVbxYkuBZVjdiqCewkM79iFh%2FMBE6zve7DJV9anidD1tJZXzhCeKSWIwohIZEOHEssKs7va%2B6UWwQ5NRGmEJ1fU2%2Bi1GIlNvatYIgr%2BXMyDHGOTG1iA7vjYdXqb6RrLhwemwTPiY8j0GnS7Di7xZwOFwcugg0p8S%2FKx7nqavlSL1AutgUomDq8X9DPHGdBOnFZeV1L8KQCN6w8ZnvaA5dtJM9qnU6S7qTJLuF9ThqdaGqnFJEgIkNSEy6ui%2F8AUOyzcZWM8On%2FQw%2FGy3AzMeTUZ%2BsrZKIeepgQdrRA60BPWDDi1BPKs4gLoPb%2BGH9mLq9rIa2NDwG%2BezAJzq%2F01i1SctmW4vz%2FXVE0o10grMJcoltTGYXIqYrkHoe8l1DJ8dRbX1LLAtQmzaQNXl05JI3cetOgUvSLvlj5Y1GLCq3T75MHKXUnjnGDL4XjtffuW%2Blhzi8jtdpDvjpya7gvV6WgPVliOBzqYifBO5aEE6zY%2BiBedaj6qdTEtJDiaKdRRNmCjccowPFw3jIE79qc5bTnDCMpu%2B%2BBjqkAdbKengN8Js46y9MKnA4WvJ59qls6efP%2Ffw2urb6iejsNJy4yciiS0C0E66lQ%2FiVEkU4F%2FZi%2F1ECt0g2gEUtXE1bJyV9b3hIMzxrVUu6zB8zMKHohESh%2BI%2Fsecar6bNII4QVgmqwI0qfKPzuC9hy9r4FQBkmbKaTxdReNC6GakJ3U6qeWC7BiuhMFCHFr%2FKI6vLH0MQ9az5gYJjVnc1gvPNLZ%2FcL&X-Amz-Signature=0c57da4cdb7fc1e79bd2f29ad240c13c3a91b1c4ebfc050883c0901636a31dc1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WOMECVP%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD7nCQ9W6LUVr9R8feKepYL%2FDEOP6k7vWUnfGIRFfkSCQIhAJi1TvSFI6k1X61TU8ZXZFLPKWTrhncPlDP2t4hE%2FEw5KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxeu9GSqF1BVjeCAeYq3AMUe1BVEQMNYB5hbsYEGL4oCsrugXWAztGC2Fe8ehGrREvh%2BPEeVB5rQm93xow8p%2FrXQEGkPmdAphF6ldtehQWQSj16osE8%2BFk2zswuVbxYkuBZVjdiqCewkM79iFh%2FMBE6zve7DJV9anidD1tJZXzhCeKSWIwohIZEOHEssKs7va%2B6UWwQ5NRGmEJ1fU2%2Bi1GIlNvatYIgr%2BXMyDHGOTG1iA7vjYdXqb6RrLhwemwTPiY8j0GnS7Di7xZwOFwcugg0p8S%2FKx7nqavlSL1AutgUomDq8X9DPHGdBOnFZeV1L8KQCN6w8ZnvaA5dtJM9qnU6S7qTJLuF9ThqdaGqnFJEgIkNSEy6ui%2F8AUOyzcZWM8On%2FQw%2FGy3AzMeTUZ%2BsrZKIeepgQdrRA60BPWDDi1BPKs4gLoPb%2BGH9mLq9rIa2NDwG%2BezAJzq%2F01i1SctmW4vz%2FXVE0o10grMJcoltTGYXIqYrkHoe8l1DJ8dRbX1LLAtQmzaQNXl05JI3cetOgUvSLvlj5Y1GLCq3T75MHKXUnjnGDL4XjtffuW%2Blhzi8jtdpDvjpya7gvV6WgPVliOBzqYifBO5aEE6zY%2BiBedaj6qdTEtJDiaKdRRNmCjccowPFw3jIE79qc5bTnDCMpu%2B%2BBjqkAdbKengN8Js46y9MKnA4WvJ59qls6efP%2Ffw2urb6iejsNJy4yciiS0C0E66lQ%2FiVEkU4F%2FZi%2F1ECt0g2gEUtXE1bJyV9b3hIMzxrVUu6zB8zMKHohESh%2BI%2Fsecar6bNII4QVgmqwI0qfKPzuC9hy9r4FQBkmbKaTxdReNC6GakJ3U6qeWC7BiuhMFCHFr%2FKI6vLH0MQ9az5gYJjVnc1gvPNLZ%2FcL&X-Amz-Signature=61b203849d4fcf62af6b8ea820e007d097e4d28f138358c9291dbcf6065970ed&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WOMECVP%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD7nCQ9W6LUVr9R8feKepYL%2FDEOP6k7vWUnfGIRFfkSCQIhAJi1TvSFI6k1X61TU8ZXZFLPKWTrhncPlDP2t4hE%2FEw5KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxeu9GSqF1BVjeCAeYq3AMUe1BVEQMNYB5hbsYEGL4oCsrugXWAztGC2Fe8ehGrREvh%2BPEeVB5rQm93xow8p%2FrXQEGkPmdAphF6ldtehQWQSj16osE8%2BFk2zswuVbxYkuBZVjdiqCewkM79iFh%2FMBE6zve7DJV9anidD1tJZXzhCeKSWIwohIZEOHEssKs7va%2B6UWwQ5NRGmEJ1fU2%2Bi1GIlNvatYIgr%2BXMyDHGOTG1iA7vjYdXqb6RrLhwemwTPiY8j0GnS7Di7xZwOFwcugg0p8S%2FKx7nqavlSL1AutgUomDq8X9DPHGdBOnFZeV1L8KQCN6w8ZnvaA5dtJM9qnU6S7qTJLuF9ThqdaGqnFJEgIkNSEy6ui%2F8AUOyzcZWM8On%2FQw%2FGy3AzMeTUZ%2BsrZKIeepgQdrRA60BPWDDi1BPKs4gLoPb%2BGH9mLq9rIa2NDwG%2BezAJzq%2F01i1SctmW4vz%2FXVE0o10grMJcoltTGYXIqYrkHoe8l1DJ8dRbX1LLAtQmzaQNXl05JI3cetOgUvSLvlj5Y1GLCq3T75MHKXUnjnGDL4XjtffuW%2Blhzi8jtdpDvjpya7gvV6WgPVliOBzqYifBO5aEE6zY%2BiBedaj6qdTEtJDiaKdRRNmCjccowPFw3jIE79qc5bTnDCMpu%2B%2BBjqkAdbKengN8Js46y9MKnA4WvJ59qls6efP%2Ffw2urb6iejsNJy4yciiS0C0E66lQ%2FiVEkU4F%2FZi%2F1ECt0g2gEUtXE1bJyV9b3hIMzxrVUu6zB8zMKHohESh%2BI%2Fsecar6bNII4QVgmqwI0qfKPzuC9hy9r4FQBkmbKaTxdReNC6GakJ3U6qeWC7BiuhMFCHFr%2FKI6vLH0MQ9az5gYJjVnc1gvPNLZ%2FcL&X-Amz-Signature=8922f3c8fa3ae331bf3fc7be94a32d75383f835289d3b6622194f992de8a5ecd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WOMECVP%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD7nCQ9W6LUVr9R8feKepYL%2FDEOP6k7vWUnfGIRFfkSCQIhAJi1TvSFI6k1X61TU8ZXZFLPKWTrhncPlDP2t4hE%2FEw5KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxeu9GSqF1BVjeCAeYq3AMUe1BVEQMNYB5hbsYEGL4oCsrugXWAztGC2Fe8ehGrREvh%2BPEeVB5rQm93xow8p%2FrXQEGkPmdAphF6ldtehQWQSj16osE8%2BFk2zswuVbxYkuBZVjdiqCewkM79iFh%2FMBE6zve7DJV9anidD1tJZXzhCeKSWIwohIZEOHEssKs7va%2B6UWwQ5NRGmEJ1fU2%2Bi1GIlNvatYIgr%2BXMyDHGOTG1iA7vjYdXqb6RrLhwemwTPiY8j0GnS7Di7xZwOFwcugg0p8S%2FKx7nqavlSL1AutgUomDq8X9DPHGdBOnFZeV1L8KQCN6w8ZnvaA5dtJM9qnU6S7qTJLuF9ThqdaGqnFJEgIkNSEy6ui%2F8AUOyzcZWM8On%2FQw%2FGy3AzMeTUZ%2BsrZKIeepgQdrRA60BPWDDi1BPKs4gLoPb%2BGH9mLq9rIa2NDwG%2BezAJzq%2F01i1SctmW4vz%2FXVE0o10grMJcoltTGYXIqYrkHoe8l1DJ8dRbX1LLAtQmzaQNXl05JI3cetOgUvSLvlj5Y1GLCq3T75MHKXUnjnGDL4XjtffuW%2Blhzi8jtdpDvjpya7gvV6WgPVliOBzqYifBO5aEE6zY%2BiBedaj6qdTEtJDiaKdRRNmCjccowPFw3jIE79qc5bTnDCMpu%2B%2BBjqkAdbKengN8Js46y9MKnA4WvJ59qls6efP%2Ffw2urb6iejsNJy4yciiS0C0E66lQ%2FiVEkU4F%2FZi%2F1ECt0g2gEUtXE1bJyV9b3hIMzxrVUu6zB8zMKHohESh%2BI%2Fsecar6bNII4QVgmqwI0qfKPzuC9hy9r4FQBkmbKaTxdReNC6GakJ3U6qeWC7BiuhMFCHFr%2FKI6vLH0MQ9az5gYJjVnc1gvPNLZ%2FcL&X-Amz-Signature=3d36f5f8fec88b44add995ee8b643718e730d7bf7ee916b6e56720a19b2b4584&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
