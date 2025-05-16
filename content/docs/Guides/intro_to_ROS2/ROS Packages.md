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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IVQV7PI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTgzZ26Jk3msMfMKFvAIGcEpG2jcO0i%2F7Ie1AMml1PBwIhAKdtIT8d9O7mUEovkiMPZsYqAMPemvNSLzwnlHX%2F%2F3fYKv8DCEwQABoMNjM3NDIzMTgzODA1IgzdBxb1vB0toWihSD0q3AOp0kWAklQc5TraJXNn67rTvzi5wNw0yGrSw2AxYa9WYaLOwSj4a2xReFoT9Qiql6Ie%2FhiOULju9jTfEglQjVhu5lpPhnolTjF4ydolH5DqkGEmHHi%2B9A32Zr9XYXzUZ9stI%2BvqPBhkWU3pGQGUVr%2F9VEOLrerIsoZLA8fXOV%2F40%2F5t%2FVaRsn80bbwjzd0bt%2BwkFuV2saFR4FzIPji%2FvskOwcvdGp3h%2FogGtAms59TQxQ6iGTmrPIIo3VYAcEqSILfwRbnXdqXSJVh652QVR0ro4syqJaz5g25wvQkXi6I%2FihuHEHjDZzOSKRdoNe6ZP9cCgrE%2FhiZgZSHBO7SRzunXSeTvjp3GczkxwB2thJKL6DBTaNNwyGVlqnErh4aCGUg5jnPjCWPOo8TYsxnQaa4%2BESVel2%2BI3yppC4NrfnMBG6gVgoy50zoIDSpSPXlTNEMc6aB1Zb5DVFhqpKdr6yu6P%2BB553mjQdGxbfP%2FEXh5Dl%2FPkVVv2VYrr5ZvFw5nS7LaD9FNctWtIajOHQKNfXjqpVAmOFfNAE8VDjK6hTHzCLAtigo3TNga%2BHP6ObFmL3q7TQUKxlWwvCLwxmQxQmNLiNZe1HRFS%2F1pl5RlaYvcH8GPoNahd2wNBVuEsjCQkJ7BBjqkARlrFXIi4uuQ1mUJltGuDRwXuPDWCpYQy0UsVPWgZBCSdSyZ50MIQBkjElpAi11uan3XCUOoIWEsiFERdtnWDfAaW%2B8I7En8NXwhg4mru1UQtBop1ieFTLG6MCqpSPRFX04LpS22cs7cqHyn2SKHBLlsaKPCvBoTkFp2D7zj5hLeNF79F0K3Pu7snErTBn8hOPptiTuUCuifBjbBUQ%2BWgaONapYn&X-Amz-Signature=901d79e9082ee6017bd4e845a5afaebd0d569803f0beefea5e21b0ca5206575a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IVQV7PI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTgzZ26Jk3msMfMKFvAIGcEpG2jcO0i%2F7Ie1AMml1PBwIhAKdtIT8d9O7mUEovkiMPZsYqAMPemvNSLzwnlHX%2F%2F3fYKv8DCEwQABoMNjM3NDIzMTgzODA1IgzdBxb1vB0toWihSD0q3AOp0kWAklQc5TraJXNn67rTvzi5wNw0yGrSw2AxYa9WYaLOwSj4a2xReFoT9Qiql6Ie%2FhiOULju9jTfEglQjVhu5lpPhnolTjF4ydolH5DqkGEmHHi%2B9A32Zr9XYXzUZ9stI%2BvqPBhkWU3pGQGUVr%2F9VEOLrerIsoZLA8fXOV%2F40%2F5t%2FVaRsn80bbwjzd0bt%2BwkFuV2saFR4FzIPji%2FvskOwcvdGp3h%2FogGtAms59TQxQ6iGTmrPIIo3VYAcEqSILfwRbnXdqXSJVh652QVR0ro4syqJaz5g25wvQkXi6I%2FihuHEHjDZzOSKRdoNe6ZP9cCgrE%2FhiZgZSHBO7SRzunXSeTvjp3GczkxwB2thJKL6DBTaNNwyGVlqnErh4aCGUg5jnPjCWPOo8TYsxnQaa4%2BESVel2%2BI3yppC4NrfnMBG6gVgoy50zoIDSpSPXlTNEMc6aB1Zb5DVFhqpKdr6yu6P%2BB553mjQdGxbfP%2FEXh5Dl%2FPkVVv2VYrr5ZvFw5nS7LaD9FNctWtIajOHQKNfXjqpVAmOFfNAE8VDjK6hTHzCLAtigo3TNga%2BHP6ObFmL3q7TQUKxlWwvCLwxmQxQmNLiNZe1HRFS%2F1pl5RlaYvcH8GPoNahd2wNBVuEsjCQkJ7BBjqkARlrFXIi4uuQ1mUJltGuDRwXuPDWCpYQy0UsVPWgZBCSdSyZ50MIQBkjElpAi11uan3XCUOoIWEsiFERdtnWDfAaW%2B8I7En8NXwhg4mru1UQtBop1ieFTLG6MCqpSPRFX04LpS22cs7cqHyn2SKHBLlsaKPCvBoTkFp2D7zj5hLeNF79F0K3Pu7snErTBn8hOPptiTuUCuifBjbBUQ%2BWgaONapYn&X-Amz-Signature=9db3e5c7063c12941a8b039d34beb058f6b944d1b48aa7c6fc0cb57f3bcb0886&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IVQV7PI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTgzZ26Jk3msMfMKFvAIGcEpG2jcO0i%2F7Ie1AMml1PBwIhAKdtIT8d9O7mUEovkiMPZsYqAMPemvNSLzwnlHX%2F%2F3fYKv8DCEwQABoMNjM3NDIzMTgzODA1IgzdBxb1vB0toWihSD0q3AOp0kWAklQc5TraJXNn67rTvzi5wNw0yGrSw2AxYa9WYaLOwSj4a2xReFoT9Qiql6Ie%2FhiOULju9jTfEglQjVhu5lpPhnolTjF4ydolH5DqkGEmHHi%2B9A32Zr9XYXzUZ9stI%2BvqPBhkWU3pGQGUVr%2F9VEOLrerIsoZLA8fXOV%2F40%2F5t%2FVaRsn80bbwjzd0bt%2BwkFuV2saFR4FzIPji%2FvskOwcvdGp3h%2FogGtAms59TQxQ6iGTmrPIIo3VYAcEqSILfwRbnXdqXSJVh652QVR0ro4syqJaz5g25wvQkXi6I%2FihuHEHjDZzOSKRdoNe6ZP9cCgrE%2FhiZgZSHBO7SRzunXSeTvjp3GczkxwB2thJKL6DBTaNNwyGVlqnErh4aCGUg5jnPjCWPOo8TYsxnQaa4%2BESVel2%2BI3yppC4NrfnMBG6gVgoy50zoIDSpSPXlTNEMc6aB1Zb5DVFhqpKdr6yu6P%2BB553mjQdGxbfP%2FEXh5Dl%2FPkVVv2VYrr5ZvFw5nS7LaD9FNctWtIajOHQKNfXjqpVAmOFfNAE8VDjK6hTHzCLAtigo3TNga%2BHP6ObFmL3q7TQUKxlWwvCLwxmQxQmNLiNZe1HRFS%2F1pl5RlaYvcH8GPoNahd2wNBVuEsjCQkJ7BBjqkARlrFXIi4uuQ1mUJltGuDRwXuPDWCpYQy0UsVPWgZBCSdSyZ50MIQBkjElpAi11uan3XCUOoIWEsiFERdtnWDfAaW%2B8I7En8NXwhg4mru1UQtBop1ieFTLG6MCqpSPRFX04LpS22cs7cqHyn2SKHBLlsaKPCvBoTkFp2D7zj5hLeNF79F0K3Pu7snErTBn8hOPptiTuUCuifBjbBUQ%2BWgaONapYn&X-Amz-Signature=987223f1713a4ae21feed4ff9c1f811c84282f4281e40b9928a3712d53b302c9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IVQV7PI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTgzZ26Jk3msMfMKFvAIGcEpG2jcO0i%2F7Ie1AMml1PBwIhAKdtIT8d9O7mUEovkiMPZsYqAMPemvNSLzwnlHX%2F%2F3fYKv8DCEwQABoMNjM3NDIzMTgzODA1IgzdBxb1vB0toWihSD0q3AOp0kWAklQc5TraJXNn67rTvzi5wNw0yGrSw2AxYa9WYaLOwSj4a2xReFoT9Qiql6Ie%2FhiOULju9jTfEglQjVhu5lpPhnolTjF4ydolH5DqkGEmHHi%2B9A32Zr9XYXzUZ9stI%2BvqPBhkWU3pGQGUVr%2F9VEOLrerIsoZLA8fXOV%2F40%2F5t%2FVaRsn80bbwjzd0bt%2BwkFuV2saFR4FzIPji%2FvskOwcvdGp3h%2FogGtAms59TQxQ6iGTmrPIIo3VYAcEqSILfwRbnXdqXSJVh652QVR0ro4syqJaz5g25wvQkXi6I%2FihuHEHjDZzOSKRdoNe6ZP9cCgrE%2FhiZgZSHBO7SRzunXSeTvjp3GczkxwB2thJKL6DBTaNNwyGVlqnErh4aCGUg5jnPjCWPOo8TYsxnQaa4%2BESVel2%2BI3yppC4NrfnMBG6gVgoy50zoIDSpSPXlTNEMc6aB1Zb5DVFhqpKdr6yu6P%2BB553mjQdGxbfP%2FEXh5Dl%2FPkVVv2VYrr5ZvFw5nS7LaD9FNctWtIajOHQKNfXjqpVAmOFfNAE8VDjK6hTHzCLAtigo3TNga%2BHP6ObFmL3q7TQUKxlWwvCLwxmQxQmNLiNZe1HRFS%2F1pl5RlaYvcH8GPoNahd2wNBVuEsjCQkJ7BBjqkARlrFXIi4uuQ1mUJltGuDRwXuPDWCpYQy0UsVPWgZBCSdSyZ50MIQBkjElpAi11uan3XCUOoIWEsiFERdtnWDfAaW%2B8I7En8NXwhg4mru1UQtBop1ieFTLG6MCqpSPRFX04LpS22cs7cqHyn2SKHBLlsaKPCvBoTkFp2D7zj5hLeNF79F0K3Pu7snErTBn8hOPptiTuUCuifBjbBUQ%2BWgaONapYn&X-Amz-Signature=10f0092ed8a5528da8400fe79e607f680b40b1ee1aaece9548e94ed355946b52&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IVQV7PI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTgzZ26Jk3msMfMKFvAIGcEpG2jcO0i%2F7Ie1AMml1PBwIhAKdtIT8d9O7mUEovkiMPZsYqAMPemvNSLzwnlHX%2F%2F3fYKv8DCEwQABoMNjM3NDIzMTgzODA1IgzdBxb1vB0toWihSD0q3AOp0kWAklQc5TraJXNn67rTvzi5wNw0yGrSw2AxYa9WYaLOwSj4a2xReFoT9Qiql6Ie%2FhiOULju9jTfEglQjVhu5lpPhnolTjF4ydolH5DqkGEmHHi%2B9A32Zr9XYXzUZ9stI%2BvqPBhkWU3pGQGUVr%2F9VEOLrerIsoZLA8fXOV%2F40%2F5t%2FVaRsn80bbwjzd0bt%2BwkFuV2saFR4FzIPji%2FvskOwcvdGp3h%2FogGtAms59TQxQ6iGTmrPIIo3VYAcEqSILfwRbnXdqXSJVh652QVR0ro4syqJaz5g25wvQkXi6I%2FihuHEHjDZzOSKRdoNe6ZP9cCgrE%2FhiZgZSHBO7SRzunXSeTvjp3GczkxwB2thJKL6DBTaNNwyGVlqnErh4aCGUg5jnPjCWPOo8TYsxnQaa4%2BESVel2%2BI3yppC4NrfnMBG6gVgoy50zoIDSpSPXlTNEMc6aB1Zb5DVFhqpKdr6yu6P%2BB553mjQdGxbfP%2FEXh5Dl%2FPkVVv2VYrr5ZvFw5nS7LaD9FNctWtIajOHQKNfXjqpVAmOFfNAE8VDjK6hTHzCLAtigo3TNga%2BHP6ObFmL3q7TQUKxlWwvCLwxmQxQmNLiNZe1HRFS%2F1pl5RlaYvcH8GPoNahd2wNBVuEsjCQkJ7BBjqkARlrFXIi4uuQ1mUJltGuDRwXuPDWCpYQy0UsVPWgZBCSdSyZ50MIQBkjElpAi11uan3XCUOoIWEsiFERdtnWDfAaW%2B8I7En8NXwhg4mru1UQtBop1ieFTLG6MCqpSPRFX04LpS22cs7cqHyn2SKHBLlsaKPCvBoTkFp2D7zj5hLeNF79F0K3Pu7snErTBn8hOPptiTuUCuifBjbBUQ%2BWgaONapYn&X-Amz-Signature=be04245cb7b9b5ecdbcc860392534e0628cf2f00f7b52674c67ed0c3289c24df&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IVQV7PI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTgzZ26Jk3msMfMKFvAIGcEpG2jcO0i%2F7Ie1AMml1PBwIhAKdtIT8d9O7mUEovkiMPZsYqAMPemvNSLzwnlHX%2F%2F3fYKv8DCEwQABoMNjM3NDIzMTgzODA1IgzdBxb1vB0toWihSD0q3AOp0kWAklQc5TraJXNn67rTvzi5wNw0yGrSw2AxYa9WYaLOwSj4a2xReFoT9Qiql6Ie%2FhiOULju9jTfEglQjVhu5lpPhnolTjF4ydolH5DqkGEmHHi%2B9A32Zr9XYXzUZ9stI%2BvqPBhkWU3pGQGUVr%2F9VEOLrerIsoZLA8fXOV%2F40%2F5t%2FVaRsn80bbwjzd0bt%2BwkFuV2saFR4FzIPji%2FvskOwcvdGp3h%2FogGtAms59TQxQ6iGTmrPIIo3VYAcEqSILfwRbnXdqXSJVh652QVR0ro4syqJaz5g25wvQkXi6I%2FihuHEHjDZzOSKRdoNe6ZP9cCgrE%2FhiZgZSHBO7SRzunXSeTvjp3GczkxwB2thJKL6DBTaNNwyGVlqnErh4aCGUg5jnPjCWPOo8TYsxnQaa4%2BESVel2%2BI3yppC4NrfnMBG6gVgoy50zoIDSpSPXlTNEMc6aB1Zb5DVFhqpKdr6yu6P%2BB553mjQdGxbfP%2FEXh5Dl%2FPkVVv2VYrr5ZvFw5nS7LaD9FNctWtIajOHQKNfXjqpVAmOFfNAE8VDjK6hTHzCLAtigo3TNga%2BHP6ObFmL3q7TQUKxlWwvCLwxmQxQmNLiNZe1HRFS%2F1pl5RlaYvcH8GPoNahd2wNBVuEsjCQkJ7BBjqkARlrFXIi4uuQ1mUJltGuDRwXuPDWCpYQy0UsVPWgZBCSdSyZ50MIQBkjElpAi11uan3XCUOoIWEsiFERdtnWDfAaW%2B8I7En8NXwhg4mru1UQtBop1ieFTLG6MCqpSPRFX04LpS22cs7cqHyn2SKHBLlsaKPCvBoTkFp2D7zj5hLeNF79F0K3Pu7snErTBn8hOPptiTuUCuifBjbBUQ%2BWgaONapYn&X-Amz-Signature=704f82a8b0a3bb3c18797f52bc081f24aa918b5e0f1ac59537fe570605f9c6ce&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IVQV7PI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTgzZ26Jk3msMfMKFvAIGcEpG2jcO0i%2F7Ie1AMml1PBwIhAKdtIT8d9O7mUEovkiMPZsYqAMPemvNSLzwnlHX%2F%2F3fYKv8DCEwQABoMNjM3NDIzMTgzODA1IgzdBxb1vB0toWihSD0q3AOp0kWAklQc5TraJXNn67rTvzi5wNw0yGrSw2AxYa9WYaLOwSj4a2xReFoT9Qiql6Ie%2FhiOULju9jTfEglQjVhu5lpPhnolTjF4ydolH5DqkGEmHHi%2B9A32Zr9XYXzUZ9stI%2BvqPBhkWU3pGQGUVr%2F9VEOLrerIsoZLA8fXOV%2F40%2F5t%2FVaRsn80bbwjzd0bt%2BwkFuV2saFR4FzIPji%2FvskOwcvdGp3h%2FogGtAms59TQxQ6iGTmrPIIo3VYAcEqSILfwRbnXdqXSJVh652QVR0ro4syqJaz5g25wvQkXi6I%2FihuHEHjDZzOSKRdoNe6ZP9cCgrE%2FhiZgZSHBO7SRzunXSeTvjp3GczkxwB2thJKL6DBTaNNwyGVlqnErh4aCGUg5jnPjCWPOo8TYsxnQaa4%2BESVel2%2BI3yppC4NrfnMBG6gVgoy50zoIDSpSPXlTNEMc6aB1Zb5DVFhqpKdr6yu6P%2BB553mjQdGxbfP%2FEXh5Dl%2FPkVVv2VYrr5ZvFw5nS7LaD9FNctWtIajOHQKNfXjqpVAmOFfNAE8VDjK6hTHzCLAtigo3TNga%2BHP6ObFmL3q7TQUKxlWwvCLwxmQxQmNLiNZe1HRFS%2F1pl5RlaYvcH8GPoNahd2wNBVuEsjCQkJ7BBjqkARlrFXIi4uuQ1mUJltGuDRwXuPDWCpYQy0UsVPWgZBCSdSyZ50MIQBkjElpAi11uan3XCUOoIWEsiFERdtnWDfAaW%2B8I7En8NXwhg4mru1UQtBop1ieFTLG6MCqpSPRFX04LpS22cs7cqHyn2SKHBLlsaKPCvBoTkFp2D7zj5hLeNF79F0K3Pu7snErTBn8hOPptiTuUCuifBjbBUQ%2BWgaONapYn&X-Amz-Signature=8dcd8866b5a6fa0769cba074763756e13fa8c69f20348de8500dd9ec064acd86&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
