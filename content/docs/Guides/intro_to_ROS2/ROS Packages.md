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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXVCXNTH%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCTPRRhlgvKJ63dlkPfaJm2J%2B4rfU32xZG%2FL6UsTQ%2F5RQIhAJ4TMcT9mrqbbI995sXaCuX1uy9a5kn46Udg9AsGPvVFKv8DCCAQABoMNjM3NDIzMTgzODA1IgzPWtbMzJO2NEuzJsgq3APw1EQJWNcpKash3HZE4YzcYTMzI%2F7A3UEa4CSw9hJ4ryYNCS%2FckkK4BcD0YeS3q13kG2mrtwNiUD1th3fMiS1Hf1LbOUS0VsmelOSI2Qe8LCUxCIuQOAN4Jn%2FnIsmykPbGk3Jpo7ttfcgM8z3mdl4AUMrgl7NkI4i4lCgryv%2B0JBaNYk23IDAFPOJezlR6c%2F%2BLOPEsv%2B9CPzV7raxlsG%2BYkn%2BDoDS%2Brps0tv0fSGC4zZiL93HlmAAM%2FGT5eOilgvz%2FHwTGNY5pJfAstxFS5kcwezRY1CfHzDtwx8WwZDy1ScYxqU7nJhvExSE7jEduSSQWfP%2FnCN9Xxb1hDF0FM%2BID8A9ta0NHu3Nc38b1I536O6kZSmfhbCRe7XQX%2FjaD0vo4WDiyCaWEbWvvwpT26rvi9RRXx1nR20l9uVGizLrbzQLytGX9czIFzQLdR6PkeAjB93K2JDqPYLVwT46JlDs4swbIQuMjAJ0fXhX4ADAhTSSdDXTgih9YBKO8OJPiqlhOFRnLP5ylsSs9vw0jRLFATNJmsP4ZstmQsosowDZGnZOVE1%2BVstnXSmtMcF81PVDqVqGssxPmuVtsd6st%2B8zYPg1%2Br2tC40v7Y3m5wmP1RyIRZBXQA7GSEAWPGTCf%2BpTIBjqkAdZnHm3H99HJsZIrx%2FoKJ%2FgrikNGt8FpxnCNztzSASi0CnWgY4MCb2MDUjRTonY8ZhbRlgRsl5QKaDab%2BILoYEeTmLVb3zPO2N86SScyXQfAPF13r0AdgD1z%2Ba%2Bx0dzcgP08xhCk8223OS%2BhiDv8%2FHZD3oxxJeEfqpXu3J3of2zDuDmGwpVPzOuyqNgggQQbuAy9PKHk1vSBemd9c7op%2FQsHV0RM&X-Amz-Signature=29acf8a06f13f50567d08574be3f18d818a98eab94677bc1c960fcc33e6720ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXVCXNTH%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCTPRRhlgvKJ63dlkPfaJm2J%2B4rfU32xZG%2FL6UsTQ%2F5RQIhAJ4TMcT9mrqbbI995sXaCuX1uy9a5kn46Udg9AsGPvVFKv8DCCAQABoMNjM3NDIzMTgzODA1IgzPWtbMzJO2NEuzJsgq3APw1EQJWNcpKash3HZE4YzcYTMzI%2F7A3UEa4CSw9hJ4ryYNCS%2FckkK4BcD0YeS3q13kG2mrtwNiUD1th3fMiS1Hf1LbOUS0VsmelOSI2Qe8LCUxCIuQOAN4Jn%2FnIsmykPbGk3Jpo7ttfcgM8z3mdl4AUMrgl7NkI4i4lCgryv%2B0JBaNYk23IDAFPOJezlR6c%2F%2BLOPEsv%2B9CPzV7raxlsG%2BYkn%2BDoDS%2Brps0tv0fSGC4zZiL93HlmAAM%2FGT5eOilgvz%2FHwTGNY5pJfAstxFS5kcwezRY1CfHzDtwx8WwZDy1ScYxqU7nJhvExSE7jEduSSQWfP%2FnCN9Xxb1hDF0FM%2BID8A9ta0NHu3Nc38b1I536O6kZSmfhbCRe7XQX%2FjaD0vo4WDiyCaWEbWvvwpT26rvi9RRXx1nR20l9uVGizLrbzQLytGX9czIFzQLdR6PkeAjB93K2JDqPYLVwT46JlDs4swbIQuMjAJ0fXhX4ADAhTSSdDXTgih9YBKO8OJPiqlhOFRnLP5ylsSs9vw0jRLFATNJmsP4ZstmQsosowDZGnZOVE1%2BVstnXSmtMcF81PVDqVqGssxPmuVtsd6st%2B8zYPg1%2Br2tC40v7Y3m5wmP1RyIRZBXQA7GSEAWPGTCf%2BpTIBjqkAdZnHm3H99HJsZIrx%2FoKJ%2FgrikNGt8FpxnCNztzSASi0CnWgY4MCb2MDUjRTonY8ZhbRlgRsl5QKaDab%2BILoYEeTmLVb3zPO2N86SScyXQfAPF13r0AdgD1z%2Ba%2Bx0dzcgP08xhCk8223OS%2BhiDv8%2FHZD3oxxJeEfqpXu3J3of2zDuDmGwpVPzOuyqNgggQQbuAy9PKHk1vSBemd9c7op%2FQsHV0RM&X-Amz-Signature=7bb68385d6958d98884b54058c3fd1e49e1c700c1efeb2b938a37f41a08e1ba6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXVCXNTH%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCTPRRhlgvKJ63dlkPfaJm2J%2B4rfU32xZG%2FL6UsTQ%2F5RQIhAJ4TMcT9mrqbbI995sXaCuX1uy9a5kn46Udg9AsGPvVFKv8DCCAQABoMNjM3NDIzMTgzODA1IgzPWtbMzJO2NEuzJsgq3APw1EQJWNcpKash3HZE4YzcYTMzI%2F7A3UEa4CSw9hJ4ryYNCS%2FckkK4BcD0YeS3q13kG2mrtwNiUD1th3fMiS1Hf1LbOUS0VsmelOSI2Qe8LCUxCIuQOAN4Jn%2FnIsmykPbGk3Jpo7ttfcgM8z3mdl4AUMrgl7NkI4i4lCgryv%2B0JBaNYk23IDAFPOJezlR6c%2F%2BLOPEsv%2B9CPzV7raxlsG%2BYkn%2BDoDS%2Brps0tv0fSGC4zZiL93HlmAAM%2FGT5eOilgvz%2FHwTGNY5pJfAstxFS5kcwezRY1CfHzDtwx8WwZDy1ScYxqU7nJhvExSE7jEduSSQWfP%2FnCN9Xxb1hDF0FM%2BID8A9ta0NHu3Nc38b1I536O6kZSmfhbCRe7XQX%2FjaD0vo4WDiyCaWEbWvvwpT26rvi9RRXx1nR20l9uVGizLrbzQLytGX9czIFzQLdR6PkeAjB93K2JDqPYLVwT46JlDs4swbIQuMjAJ0fXhX4ADAhTSSdDXTgih9YBKO8OJPiqlhOFRnLP5ylsSs9vw0jRLFATNJmsP4ZstmQsosowDZGnZOVE1%2BVstnXSmtMcF81PVDqVqGssxPmuVtsd6st%2B8zYPg1%2Br2tC40v7Y3m5wmP1RyIRZBXQA7GSEAWPGTCf%2BpTIBjqkAdZnHm3H99HJsZIrx%2FoKJ%2FgrikNGt8FpxnCNztzSASi0CnWgY4MCb2MDUjRTonY8ZhbRlgRsl5QKaDab%2BILoYEeTmLVb3zPO2N86SScyXQfAPF13r0AdgD1z%2Ba%2Bx0dzcgP08xhCk8223OS%2BhiDv8%2FHZD3oxxJeEfqpXu3J3of2zDuDmGwpVPzOuyqNgggQQbuAy9PKHk1vSBemd9c7op%2FQsHV0RM&X-Amz-Signature=e47ffe04dd684b91a0b7773fa20db97901f6b5da29bd891ae4ef9d10a366e2d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXVCXNTH%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCTPRRhlgvKJ63dlkPfaJm2J%2B4rfU32xZG%2FL6UsTQ%2F5RQIhAJ4TMcT9mrqbbI995sXaCuX1uy9a5kn46Udg9AsGPvVFKv8DCCAQABoMNjM3NDIzMTgzODA1IgzPWtbMzJO2NEuzJsgq3APw1EQJWNcpKash3HZE4YzcYTMzI%2F7A3UEa4CSw9hJ4ryYNCS%2FckkK4BcD0YeS3q13kG2mrtwNiUD1th3fMiS1Hf1LbOUS0VsmelOSI2Qe8LCUxCIuQOAN4Jn%2FnIsmykPbGk3Jpo7ttfcgM8z3mdl4AUMrgl7NkI4i4lCgryv%2B0JBaNYk23IDAFPOJezlR6c%2F%2BLOPEsv%2B9CPzV7raxlsG%2BYkn%2BDoDS%2Brps0tv0fSGC4zZiL93HlmAAM%2FGT5eOilgvz%2FHwTGNY5pJfAstxFS5kcwezRY1CfHzDtwx8WwZDy1ScYxqU7nJhvExSE7jEduSSQWfP%2FnCN9Xxb1hDF0FM%2BID8A9ta0NHu3Nc38b1I536O6kZSmfhbCRe7XQX%2FjaD0vo4WDiyCaWEbWvvwpT26rvi9RRXx1nR20l9uVGizLrbzQLytGX9czIFzQLdR6PkeAjB93K2JDqPYLVwT46JlDs4swbIQuMjAJ0fXhX4ADAhTSSdDXTgih9YBKO8OJPiqlhOFRnLP5ylsSs9vw0jRLFATNJmsP4ZstmQsosowDZGnZOVE1%2BVstnXSmtMcF81PVDqVqGssxPmuVtsd6st%2B8zYPg1%2Br2tC40v7Y3m5wmP1RyIRZBXQA7GSEAWPGTCf%2BpTIBjqkAdZnHm3H99HJsZIrx%2FoKJ%2FgrikNGt8FpxnCNztzSASi0CnWgY4MCb2MDUjRTonY8ZhbRlgRsl5QKaDab%2BILoYEeTmLVb3zPO2N86SScyXQfAPF13r0AdgD1z%2Ba%2Bx0dzcgP08xhCk8223OS%2BhiDv8%2FHZD3oxxJeEfqpXu3J3of2zDuDmGwpVPzOuyqNgggQQbuAy9PKHk1vSBemd9c7op%2FQsHV0RM&X-Amz-Signature=c4f9d706b80ed0ba72c230a6a522587fa7b195a97d59614230594e7ad4480245&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXVCXNTH%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCTPRRhlgvKJ63dlkPfaJm2J%2B4rfU32xZG%2FL6UsTQ%2F5RQIhAJ4TMcT9mrqbbI995sXaCuX1uy9a5kn46Udg9AsGPvVFKv8DCCAQABoMNjM3NDIzMTgzODA1IgzPWtbMzJO2NEuzJsgq3APw1EQJWNcpKash3HZE4YzcYTMzI%2F7A3UEa4CSw9hJ4ryYNCS%2FckkK4BcD0YeS3q13kG2mrtwNiUD1th3fMiS1Hf1LbOUS0VsmelOSI2Qe8LCUxCIuQOAN4Jn%2FnIsmykPbGk3Jpo7ttfcgM8z3mdl4AUMrgl7NkI4i4lCgryv%2B0JBaNYk23IDAFPOJezlR6c%2F%2BLOPEsv%2B9CPzV7raxlsG%2BYkn%2BDoDS%2Brps0tv0fSGC4zZiL93HlmAAM%2FGT5eOilgvz%2FHwTGNY5pJfAstxFS5kcwezRY1CfHzDtwx8WwZDy1ScYxqU7nJhvExSE7jEduSSQWfP%2FnCN9Xxb1hDF0FM%2BID8A9ta0NHu3Nc38b1I536O6kZSmfhbCRe7XQX%2FjaD0vo4WDiyCaWEbWvvwpT26rvi9RRXx1nR20l9uVGizLrbzQLytGX9czIFzQLdR6PkeAjB93K2JDqPYLVwT46JlDs4swbIQuMjAJ0fXhX4ADAhTSSdDXTgih9YBKO8OJPiqlhOFRnLP5ylsSs9vw0jRLFATNJmsP4ZstmQsosowDZGnZOVE1%2BVstnXSmtMcF81PVDqVqGssxPmuVtsd6st%2B8zYPg1%2Br2tC40v7Y3m5wmP1RyIRZBXQA7GSEAWPGTCf%2BpTIBjqkAdZnHm3H99HJsZIrx%2FoKJ%2FgrikNGt8FpxnCNztzSASi0CnWgY4MCb2MDUjRTonY8ZhbRlgRsl5QKaDab%2BILoYEeTmLVb3zPO2N86SScyXQfAPF13r0AdgD1z%2Ba%2Bx0dzcgP08xhCk8223OS%2BhiDv8%2FHZD3oxxJeEfqpXu3J3of2zDuDmGwpVPzOuyqNgggQQbuAy9PKHk1vSBemd9c7op%2FQsHV0RM&X-Amz-Signature=2f20bf8ae25bddb31213adfa26c271863e3ce243c10f3e4171fd051c74841a2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXVCXNTH%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCTPRRhlgvKJ63dlkPfaJm2J%2B4rfU32xZG%2FL6UsTQ%2F5RQIhAJ4TMcT9mrqbbI995sXaCuX1uy9a5kn46Udg9AsGPvVFKv8DCCAQABoMNjM3NDIzMTgzODA1IgzPWtbMzJO2NEuzJsgq3APw1EQJWNcpKash3HZE4YzcYTMzI%2F7A3UEa4CSw9hJ4ryYNCS%2FckkK4BcD0YeS3q13kG2mrtwNiUD1th3fMiS1Hf1LbOUS0VsmelOSI2Qe8LCUxCIuQOAN4Jn%2FnIsmykPbGk3Jpo7ttfcgM8z3mdl4AUMrgl7NkI4i4lCgryv%2B0JBaNYk23IDAFPOJezlR6c%2F%2BLOPEsv%2B9CPzV7raxlsG%2BYkn%2BDoDS%2Brps0tv0fSGC4zZiL93HlmAAM%2FGT5eOilgvz%2FHwTGNY5pJfAstxFS5kcwezRY1CfHzDtwx8WwZDy1ScYxqU7nJhvExSE7jEduSSQWfP%2FnCN9Xxb1hDF0FM%2BID8A9ta0NHu3Nc38b1I536O6kZSmfhbCRe7XQX%2FjaD0vo4WDiyCaWEbWvvwpT26rvi9RRXx1nR20l9uVGizLrbzQLytGX9czIFzQLdR6PkeAjB93K2JDqPYLVwT46JlDs4swbIQuMjAJ0fXhX4ADAhTSSdDXTgih9YBKO8OJPiqlhOFRnLP5ylsSs9vw0jRLFATNJmsP4ZstmQsosowDZGnZOVE1%2BVstnXSmtMcF81PVDqVqGssxPmuVtsd6st%2B8zYPg1%2Br2tC40v7Y3m5wmP1RyIRZBXQA7GSEAWPGTCf%2BpTIBjqkAdZnHm3H99HJsZIrx%2FoKJ%2FgrikNGt8FpxnCNztzSASi0CnWgY4MCb2MDUjRTonY8ZhbRlgRsl5QKaDab%2BILoYEeTmLVb3zPO2N86SScyXQfAPF13r0AdgD1z%2Ba%2Bx0dzcgP08xhCk8223OS%2BhiDv8%2FHZD3oxxJeEfqpXu3J3of2zDuDmGwpVPzOuyqNgggQQbuAy9PKHk1vSBemd9c7op%2FQsHV0RM&X-Amz-Signature=6f0f39ba001fef71d35e3bc462083d84e7afc1857585dd19f7658204da89ae7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXVCXNTH%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCTPRRhlgvKJ63dlkPfaJm2J%2B4rfU32xZG%2FL6UsTQ%2F5RQIhAJ4TMcT9mrqbbI995sXaCuX1uy9a5kn46Udg9AsGPvVFKv8DCCAQABoMNjM3NDIzMTgzODA1IgzPWtbMzJO2NEuzJsgq3APw1EQJWNcpKash3HZE4YzcYTMzI%2F7A3UEa4CSw9hJ4ryYNCS%2FckkK4BcD0YeS3q13kG2mrtwNiUD1th3fMiS1Hf1LbOUS0VsmelOSI2Qe8LCUxCIuQOAN4Jn%2FnIsmykPbGk3Jpo7ttfcgM8z3mdl4AUMrgl7NkI4i4lCgryv%2B0JBaNYk23IDAFPOJezlR6c%2F%2BLOPEsv%2B9CPzV7raxlsG%2BYkn%2BDoDS%2Brps0tv0fSGC4zZiL93HlmAAM%2FGT5eOilgvz%2FHwTGNY5pJfAstxFS5kcwezRY1CfHzDtwx8WwZDy1ScYxqU7nJhvExSE7jEduSSQWfP%2FnCN9Xxb1hDF0FM%2BID8A9ta0NHu3Nc38b1I536O6kZSmfhbCRe7XQX%2FjaD0vo4WDiyCaWEbWvvwpT26rvi9RRXx1nR20l9uVGizLrbzQLytGX9czIFzQLdR6PkeAjB93K2JDqPYLVwT46JlDs4swbIQuMjAJ0fXhX4ADAhTSSdDXTgih9YBKO8OJPiqlhOFRnLP5ylsSs9vw0jRLFATNJmsP4ZstmQsosowDZGnZOVE1%2BVstnXSmtMcF81PVDqVqGssxPmuVtsd6st%2B8zYPg1%2Br2tC40v7Y3m5wmP1RyIRZBXQA7GSEAWPGTCf%2BpTIBjqkAdZnHm3H99HJsZIrx%2FoKJ%2FgrikNGt8FpxnCNztzSASi0CnWgY4MCb2MDUjRTonY8ZhbRlgRsl5QKaDab%2BILoYEeTmLVb3zPO2N86SScyXQfAPF13r0AdgD1z%2Ba%2Bx0dzcgP08xhCk8223OS%2BhiDv8%2FHZD3oxxJeEfqpXu3J3of2zDuDmGwpVPzOuyqNgggQQbuAy9PKHk1vSBemd9c7op%2FQsHV0RM&X-Amz-Signature=381824af2b85b3310a9ec6074ca74f444ae58c2b4edd3c0e963b20f4d5a4f59f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
