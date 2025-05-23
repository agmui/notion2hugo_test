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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2TZSJG4%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCWffPQqYgcGf%2FoQlmK45Kv1LPgkti7RL3xe%2F1plNfNtgIhAI8qW6ilyEt%2FjXYslDvQXfOuXdf2%2FPgCsAne1OMa0qhJKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyXLsF0JcmMsQNyicq3AO9iS%2B08CninAnQrI6PQWpT7xCXVMfl3eB0DBcJRhJ7eh49lTXLwHl%2FD5z%2FCGM3HlFPDsTUw3VAwlh9C5BYfX5sL4KN9kRwpw%2FOBdEZIJXBomsrDa%2BUmpMdtcVGAm6gfFCRmJaAIc9Veazf%2FoXjQZGBMnMvqBl3xfSwc1rZf5ReaQUeFNYueAHTT9g7ggn%2BgNol98Nd9e%2F%2BGP%2BT8RsNC4ZpFBzx%2BA%2Fn18ffiE4PayQkSZkdCBQMtHIvr7%2BNElkaBLWHotLXelRyPIr9ZzIvSaQybXBkFyHIvADLXg7h1fSbPdTua40Jm9Biu2UTfy6Rrhgjm20JblZpxEgC0FT2D%2FH5SqyxOqAc4xFEpyXsPLDaTl9h4ASMA4YLsjyM81QbgNQOGBvu3BMY6XkKS%2F1hlZFM4MAywZXWBW%2B6EXVZ6dLihywSNa1MTsNd58CnU3j2UDPzKWrqjM25TfhoU%2Fszu7lEy1GhYodLhrojy6kbVyQP5%2FaX2MGa7XNVNr1Gd1PMlkzcwJ%2Bq0Jfg%2BqpPsaeTugdaD3nwXmiXzRZAuax3j6vFjMK6a%2F1l1BRqIkuDBQiZvaZeSdmfpPBkAE%2BOhax8o%2FsbnXg%2FFlwp%2BgeOc5qM%2BRF9KtdZ6fxDvMgejtywKjCCwr%2FBBjqkAZgIg0XsAgJP4VQH8PbTuWPBvaVifV8waCnh5Nuc5TMyGis9N%2BIlWusQdbdb8tGbVwWWeAjr9nN2IMwTVVeVXWzQzdBIS9qT1xzyphT8rQpawuKiRcJUubUvs3O4%2Fux9JcEDXFWJcNB2yUf3%2FNOJV%2FP8CjKa%2BHQWAOPjNWLXqFQ2je%2FJlirsHVssL8t9g6kzp3lkUqtCo6A2Y7Vi2KmkPzETKluY&X-Amz-Signature=655441a150346c882e7f106da6d6a9afffc6bc021e31fdbe52b1f3f2822f29bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2TZSJG4%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCWffPQqYgcGf%2FoQlmK45Kv1LPgkti7RL3xe%2F1plNfNtgIhAI8qW6ilyEt%2FjXYslDvQXfOuXdf2%2FPgCsAne1OMa0qhJKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyXLsF0JcmMsQNyicq3AO9iS%2B08CninAnQrI6PQWpT7xCXVMfl3eB0DBcJRhJ7eh49lTXLwHl%2FD5z%2FCGM3HlFPDsTUw3VAwlh9C5BYfX5sL4KN9kRwpw%2FOBdEZIJXBomsrDa%2BUmpMdtcVGAm6gfFCRmJaAIc9Veazf%2FoXjQZGBMnMvqBl3xfSwc1rZf5ReaQUeFNYueAHTT9g7ggn%2BgNol98Nd9e%2F%2BGP%2BT8RsNC4ZpFBzx%2BA%2Fn18ffiE4PayQkSZkdCBQMtHIvr7%2BNElkaBLWHotLXelRyPIr9ZzIvSaQybXBkFyHIvADLXg7h1fSbPdTua40Jm9Biu2UTfy6Rrhgjm20JblZpxEgC0FT2D%2FH5SqyxOqAc4xFEpyXsPLDaTl9h4ASMA4YLsjyM81QbgNQOGBvu3BMY6XkKS%2F1hlZFM4MAywZXWBW%2B6EXVZ6dLihywSNa1MTsNd58CnU3j2UDPzKWrqjM25TfhoU%2Fszu7lEy1GhYodLhrojy6kbVyQP5%2FaX2MGa7XNVNr1Gd1PMlkzcwJ%2Bq0Jfg%2BqpPsaeTugdaD3nwXmiXzRZAuax3j6vFjMK6a%2F1l1BRqIkuDBQiZvaZeSdmfpPBkAE%2BOhax8o%2FsbnXg%2FFlwp%2BgeOc5qM%2BRF9KtdZ6fxDvMgejtywKjCCwr%2FBBjqkAZgIg0XsAgJP4VQH8PbTuWPBvaVifV8waCnh5Nuc5TMyGis9N%2BIlWusQdbdb8tGbVwWWeAjr9nN2IMwTVVeVXWzQzdBIS9qT1xzyphT8rQpawuKiRcJUubUvs3O4%2Fux9JcEDXFWJcNB2yUf3%2FNOJV%2FP8CjKa%2BHQWAOPjNWLXqFQ2je%2FJlirsHVssL8t9g6kzp3lkUqtCo6A2Y7Vi2KmkPzETKluY&X-Amz-Signature=dd4ed0e8d500ee95da6f5bc47fd774db8f7bf6c8c1a2dcb0a4e1aa82264cdbd6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2TZSJG4%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCWffPQqYgcGf%2FoQlmK45Kv1LPgkti7RL3xe%2F1plNfNtgIhAI8qW6ilyEt%2FjXYslDvQXfOuXdf2%2FPgCsAne1OMa0qhJKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyXLsF0JcmMsQNyicq3AO9iS%2B08CninAnQrI6PQWpT7xCXVMfl3eB0DBcJRhJ7eh49lTXLwHl%2FD5z%2FCGM3HlFPDsTUw3VAwlh9C5BYfX5sL4KN9kRwpw%2FOBdEZIJXBomsrDa%2BUmpMdtcVGAm6gfFCRmJaAIc9Veazf%2FoXjQZGBMnMvqBl3xfSwc1rZf5ReaQUeFNYueAHTT9g7ggn%2BgNol98Nd9e%2F%2BGP%2BT8RsNC4ZpFBzx%2BA%2Fn18ffiE4PayQkSZkdCBQMtHIvr7%2BNElkaBLWHotLXelRyPIr9ZzIvSaQybXBkFyHIvADLXg7h1fSbPdTua40Jm9Biu2UTfy6Rrhgjm20JblZpxEgC0FT2D%2FH5SqyxOqAc4xFEpyXsPLDaTl9h4ASMA4YLsjyM81QbgNQOGBvu3BMY6XkKS%2F1hlZFM4MAywZXWBW%2B6EXVZ6dLihywSNa1MTsNd58CnU3j2UDPzKWrqjM25TfhoU%2Fszu7lEy1GhYodLhrojy6kbVyQP5%2FaX2MGa7XNVNr1Gd1PMlkzcwJ%2Bq0Jfg%2BqpPsaeTugdaD3nwXmiXzRZAuax3j6vFjMK6a%2F1l1BRqIkuDBQiZvaZeSdmfpPBkAE%2BOhax8o%2FsbnXg%2FFlwp%2BgeOc5qM%2BRF9KtdZ6fxDvMgejtywKjCCwr%2FBBjqkAZgIg0XsAgJP4VQH8PbTuWPBvaVifV8waCnh5Nuc5TMyGis9N%2BIlWusQdbdb8tGbVwWWeAjr9nN2IMwTVVeVXWzQzdBIS9qT1xzyphT8rQpawuKiRcJUubUvs3O4%2Fux9JcEDXFWJcNB2yUf3%2FNOJV%2FP8CjKa%2BHQWAOPjNWLXqFQ2je%2FJlirsHVssL8t9g6kzp3lkUqtCo6A2Y7Vi2KmkPzETKluY&X-Amz-Signature=31139cfe01e0e14bfb5d699d235caf40ca3dcbb8cbcdd8b176f86cbd21ee4c81&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2TZSJG4%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCWffPQqYgcGf%2FoQlmK45Kv1LPgkti7RL3xe%2F1plNfNtgIhAI8qW6ilyEt%2FjXYslDvQXfOuXdf2%2FPgCsAne1OMa0qhJKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyXLsF0JcmMsQNyicq3AO9iS%2B08CninAnQrI6PQWpT7xCXVMfl3eB0DBcJRhJ7eh49lTXLwHl%2FD5z%2FCGM3HlFPDsTUw3VAwlh9C5BYfX5sL4KN9kRwpw%2FOBdEZIJXBomsrDa%2BUmpMdtcVGAm6gfFCRmJaAIc9Veazf%2FoXjQZGBMnMvqBl3xfSwc1rZf5ReaQUeFNYueAHTT9g7ggn%2BgNol98Nd9e%2F%2BGP%2BT8RsNC4ZpFBzx%2BA%2Fn18ffiE4PayQkSZkdCBQMtHIvr7%2BNElkaBLWHotLXelRyPIr9ZzIvSaQybXBkFyHIvADLXg7h1fSbPdTua40Jm9Biu2UTfy6Rrhgjm20JblZpxEgC0FT2D%2FH5SqyxOqAc4xFEpyXsPLDaTl9h4ASMA4YLsjyM81QbgNQOGBvu3BMY6XkKS%2F1hlZFM4MAywZXWBW%2B6EXVZ6dLihywSNa1MTsNd58CnU3j2UDPzKWrqjM25TfhoU%2Fszu7lEy1GhYodLhrojy6kbVyQP5%2FaX2MGa7XNVNr1Gd1PMlkzcwJ%2Bq0Jfg%2BqpPsaeTugdaD3nwXmiXzRZAuax3j6vFjMK6a%2F1l1BRqIkuDBQiZvaZeSdmfpPBkAE%2BOhax8o%2FsbnXg%2FFlwp%2BgeOc5qM%2BRF9KtdZ6fxDvMgejtywKjCCwr%2FBBjqkAZgIg0XsAgJP4VQH8PbTuWPBvaVifV8waCnh5Nuc5TMyGis9N%2BIlWusQdbdb8tGbVwWWeAjr9nN2IMwTVVeVXWzQzdBIS9qT1xzyphT8rQpawuKiRcJUubUvs3O4%2Fux9JcEDXFWJcNB2yUf3%2FNOJV%2FP8CjKa%2BHQWAOPjNWLXqFQ2je%2FJlirsHVssL8t9g6kzp3lkUqtCo6A2Y7Vi2KmkPzETKluY&X-Amz-Signature=9a7c5b2c29c8ea45462bd1eb41ef51a55b11dc8a2de594212af7e40e13f62522&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2TZSJG4%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCWffPQqYgcGf%2FoQlmK45Kv1LPgkti7RL3xe%2F1plNfNtgIhAI8qW6ilyEt%2FjXYslDvQXfOuXdf2%2FPgCsAne1OMa0qhJKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyXLsF0JcmMsQNyicq3AO9iS%2B08CninAnQrI6PQWpT7xCXVMfl3eB0DBcJRhJ7eh49lTXLwHl%2FD5z%2FCGM3HlFPDsTUw3VAwlh9C5BYfX5sL4KN9kRwpw%2FOBdEZIJXBomsrDa%2BUmpMdtcVGAm6gfFCRmJaAIc9Veazf%2FoXjQZGBMnMvqBl3xfSwc1rZf5ReaQUeFNYueAHTT9g7ggn%2BgNol98Nd9e%2F%2BGP%2BT8RsNC4ZpFBzx%2BA%2Fn18ffiE4PayQkSZkdCBQMtHIvr7%2BNElkaBLWHotLXelRyPIr9ZzIvSaQybXBkFyHIvADLXg7h1fSbPdTua40Jm9Biu2UTfy6Rrhgjm20JblZpxEgC0FT2D%2FH5SqyxOqAc4xFEpyXsPLDaTl9h4ASMA4YLsjyM81QbgNQOGBvu3BMY6XkKS%2F1hlZFM4MAywZXWBW%2B6EXVZ6dLihywSNa1MTsNd58CnU3j2UDPzKWrqjM25TfhoU%2Fszu7lEy1GhYodLhrojy6kbVyQP5%2FaX2MGa7XNVNr1Gd1PMlkzcwJ%2Bq0Jfg%2BqpPsaeTugdaD3nwXmiXzRZAuax3j6vFjMK6a%2F1l1BRqIkuDBQiZvaZeSdmfpPBkAE%2BOhax8o%2FsbnXg%2FFlwp%2BgeOc5qM%2BRF9KtdZ6fxDvMgejtywKjCCwr%2FBBjqkAZgIg0XsAgJP4VQH8PbTuWPBvaVifV8waCnh5Nuc5TMyGis9N%2BIlWusQdbdb8tGbVwWWeAjr9nN2IMwTVVeVXWzQzdBIS9qT1xzyphT8rQpawuKiRcJUubUvs3O4%2Fux9JcEDXFWJcNB2yUf3%2FNOJV%2FP8CjKa%2BHQWAOPjNWLXqFQ2je%2FJlirsHVssL8t9g6kzp3lkUqtCo6A2Y7Vi2KmkPzETKluY&X-Amz-Signature=00fda1c6ba07361cea11c797f1a813832bccc86d9ca772abb2b7e719af88e281&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2TZSJG4%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCWffPQqYgcGf%2FoQlmK45Kv1LPgkti7RL3xe%2F1plNfNtgIhAI8qW6ilyEt%2FjXYslDvQXfOuXdf2%2FPgCsAne1OMa0qhJKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyXLsF0JcmMsQNyicq3AO9iS%2B08CninAnQrI6PQWpT7xCXVMfl3eB0DBcJRhJ7eh49lTXLwHl%2FD5z%2FCGM3HlFPDsTUw3VAwlh9C5BYfX5sL4KN9kRwpw%2FOBdEZIJXBomsrDa%2BUmpMdtcVGAm6gfFCRmJaAIc9Veazf%2FoXjQZGBMnMvqBl3xfSwc1rZf5ReaQUeFNYueAHTT9g7ggn%2BgNol98Nd9e%2F%2BGP%2BT8RsNC4ZpFBzx%2BA%2Fn18ffiE4PayQkSZkdCBQMtHIvr7%2BNElkaBLWHotLXelRyPIr9ZzIvSaQybXBkFyHIvADLXg7h1fSbPdTua40Jm9Biu2UTfy6Rrhgjm20JblZpxEgC0FT2D%2FH5SqyxOqAc4xFEpyXsPLDaTl9h4ASMA4YLsjyM81QbgNQOGBvu3BMY6XkKS%2F1hlZFM4MAywZXWBW%2B6EXVZ6dLihywSNa1MTsNd58CnU3j2UDPzKWrqjM25TfhoU%2Fszu7lEy1GhYodLhrojy6kbVyQP5%2FaX2MGa7XNVNr1Gd1PMlkzcwJ%2Bq0Jfg%2BqpPsaeTugdaD3nwXmiXzRZAuax3j6vFjMK6a%2F1l1BRqIkuDBQiZvaZeSdmfpPBkAE%2BOhax8o%2FsbnXg%2FFlwp%2BgeOc5qM%2BRF9KtdZ6fxDvMgejtywKjCCwr%2FBBjqkAZgIg0XsAgJP4VQH8PbTuWPBvaVifV8waCnh5Nuc5TMyGis9N%2BIlWusQdbdb8tGbVwWWeAjr9nN2IMwTVVeVXWzQzdBIS9qT1xzyphT8rQpawuKiRcJUubUvs3O4%2Fux9JcEDXFWJcNB2yUf3%2FNOJV%2FP8CjKa%2BHQWAOPjNWLXqFQ2je%2FJlirsHVssL8t9g6kzp3lkUqtCo6A2Y7Vi2KmkPzETKluY&X-Amz-Signature=00868b88e3eed188b13d352cc1a5fec6e4be577cd020584d7c99d766988643e1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2TZSJG4%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCWffPQqYgcGf%2FoQlmK45Kv1LPgkti7RL3xe%2F1plNfNtgIhAI8qW6ilyEt%2FjXYslDvQXfOuXdf2%2FPgCsAne1OMa0qhJKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyXLsF0JcmMsQNyicq3AO9iS%2B08CninAnQrI6PQWpT7xCXVMfl3eB0DBcJRhJ7eh49lTXLwHl%2FD5z%2FCGM3HlFPDsTUw3VAwlh9C5BYfX5sL4KN9kRwpw%2FOBdEZIJXBomsrDa%2BUmpMdtcVGAm6gfFCRmJaAIc9Veazf%2FoXjQZGBMnMvqBl3xfSwc1rZf5ReaQUeFNYueAHTT9g7ggn%2BgNol98Nd9e%2F%2BGP%2BT8RsNC4ZpFBzx%2BA%2Fn18ffiE4PayQkSZkdCBQMtHIvr7%2BNElkaBLWHotLXelRyPIr9ZzIvSaQybXBkFyHIvADLXg7h1fSbPdTua40Jm9Biu2UTfy6Rrhgjm20JblZpxEgC0FT2D%2FH5SqyxOqAc4xFEpyXsPLDaTl9h4ASMA4YLsjyM81QbgNQOGBvu3BMY6XkKS%2F1hlZFM4MAywZXWBW%2B6EXVZ6dLihywSNa1MTsNd58CnU3j2UDPzKWrqjM25TfhoU%2Fszu7lEy1GhYodLhrojy6kbVyQP5%2FaX2MGa7XNVNr1Gd1PMlkzcwJ%2Bq0Jfg%2BqpPsaeTugdaD3nwXmiXzRZAuax3j6vFjMK6a%2F1l1BRqIkuDBQiZvaZeSdmfpPBkAE%2BOhax8o%2FsbnXg%2FFlwp%2BgeOc5qM%2BRF9KtdZ6fxDvMgejtywKjCCwr%2FBBjqkAZgIg0XsAgJP4VQH8PbTuWPBvaVifV8waCnh5Nuc5TMyGis9N%2BIlWusQdbdb8tGbVwWWeAjr9nN2IMwTVVeVXWzQzdBIS9qT1xzyphT8rQpawuKiRcJUubUvs3O4%2Fux9JcEDXFWJcNB2yUf3%2FNOJV%2FP8CjKa%2BHQWAOPjNWLXqFQ2je%2FJlirsHVssL8t9g6kzp3lkUqtCo6A2Y7Vi2KmkPzETKluY&X-Amz-Signature=d0e6daa98ad43ed380209e650ab78536956e047e741d9187b45b57f6f9f345e9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
