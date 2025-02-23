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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI4MPOF3%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T061008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5xMJo9wgHbokk8g1ry0N3ib3Zq0EIjK2vuDpq%2Bl3WZQIgXUnDfHdmggjCfJWa4RwHOQLMkyLpSgPOQvflrNuhZzcqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSHuEL6pe9JrFN1SSrcA5aTVASPGvRT7meVUZkTiEAJ9uM4rneDBPazpnuTGhWz4N%2BqGqBFZvi9nYWDnf%2BLTeQRPNGP4rvbhaMGsNUb0Xk5GuncXKKSBNnJ78stD6CoGgn3burH9ZPZMe9y6T5TqPJRXdg7tYeVZSUMEpECWaovM3bu6nmrZ2XP6ZhqRgqiMlCwL3MqsDq755C%2BDCrT%2BdQUPgvqlIHU0TLQPTuWNCeYWWGPDo6EoARgO74S6sIi%2BV5AZ2inm3elPKNcKCu8Sep0HQsUBfq9g4ixcUeVhISplGMBn0MxXqkvDJohTVqukGFBSloFwmLPPE1fmeiLkpWp5qrdfoqYmA9y4LgEmvtcF%2FZ9bksR4S5WJFOWzynGr1iP95HJ%2Bo%2BS9GYzPg4iXqFY3iyZvF%2BktsuSx9%2B5fAtC8C6mN8hkpqZPnrCKJtGUJ8WPVI%2BaCirHyADqF%2FDFMMQu0hItmEwGyPtlBrj66VhiSqewZBHmA6dQvTnZaCOf5CWl56U%2Fs%2FugV8nKi4ha6JyW4H5qdqxU58%2Fq3MUWM4aoRhQp837LwgrsRyKMHjfWjQUtuw9yQVBJSPCR9PdfavUGKHSvoYMwdVaXIexcS%2BOOlGLr1xJuVc0ww38%2FWwlj3FbB5kQSkERf5RTcMP2J6r0GOqUBv62xwqbryi4%2FU%2BxqAvyPnMP%2BOfIR4lo9Y96fhlKg5o7esdhsnpjdbeD7JdZcArvX34Zqgatg%2FHc4ueZFaXKPOWXGA3yz345c%2FWkbGnzYtmbsPAHcgOCx68QplQjxF%2FUVO1z1JUB9IuRIHTIxv6NlpBVNqvMh7mW3oWmtfLwRhCbWoI75qwajxXB%2BgweO1STuWqAf0dHyWi02UuRiGZ9LQwZOfYjX&X-Amz-Signature=30d0f6e5b3c01e0de57209350b09e6f695e0151e8e1456cbebadf380b302649c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI4MPOF3%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T061008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5xMJo9wgHbokk8g1ry0N3ib3Zq0EIjK2vuDpq%2Bl3WZQIgXUnDfHdmggjCfJWa4RwHOQLMkyLpSgPOQvflrNuhZzcqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSHuEL6pe9JrFN1SSrcA5aTVASPGvRT7meVUZkTiEAJ9uM4rneDBPazpnuTGhWz4N%2BqGqBFZvi9nYWDnf%2BLTeQRPNGP4rvbhaMGsNUb0Xk5GuncXKKSBNnJ78stD6CoGgn3burH9ZPZMe9y6T5TqPJRXdg7tYeVZSUMEpECWaovM3bu6nmrZ2XP6ZhqRgqiMlCwL3MqsDq755C%2BDCrT%2BdQUPgvqlIHU0TLQPTuWNCeYWWGPDo6EoARgO74S6sIi%2BV5AZ2inm3elPKNcKCu8Sep0HQsUBfq9g4ixcUeVhISplGMBn0MxXqkvDJohTVqukGFBSloFwmLPPE1fmeiLkpWp5qrdfoqYmA9y4LgEmvtcF%2FZ9bksR4S5WJFOWzynGr1iP95HJ%2Bo%2BS9GYzPg4iXqFY3iyZvF%2BktsuSx9%2B5fAtC8C6mN8hkpqZPnrCKJtGUJ8WPVI%2BaCirHyADqF%2FDFMMQu0hItmEwGyPtlBrj66VhiSqewZBHmA6dQvTnZaCOf5CWl56U%2Fs%2FugV8nKi4ha6JyW4H5qdqxU58%2Fq3MUWM4aoRhQp837LwgrsRyKMHjfWjQUtuw9yQVBJSPCR9PdfavUGKHSvoYMwdVaXIexcS%2BOOlGLr1xJuVc0ww38%2FWwlj3FbB5kQSkERf5RTcMP2J6r0GOqUBv62xwqbryi4%2FU%2BxqAvyPnMP%2BOfIR4lo9Y96fhlKg5o7esdhsnpjdbeD7JdZcArvX34Zqgatg%2FHc4ueZFaXKPOWXGA3yz345c%2FWkbGnzYtmbsPAHcgOCx68QplQjxF%2FUVO1z1JUB9IuRIHTIxv6NlpBVNqvMh7mW3oWmtfLwRhCbWoI75qwajxXB%2BgweO1STuWqAf0dHyWi02UuRiGZ9LQwZOfYjX&X-Amz-Signature=4fa6c4d79933f84437c08624c063180a13aa69875969dd4bb2c790cc1214e81d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI4MPOF3%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T061008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5xMJo9wgHbokk8g1ry0N3ib3Zq0EIjK2vuDpq%2Bl3WZQIgXUnDfHdmggjCfJWa4RwHOQLMkyLpSgPOQvflrNuhZzcqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSHuEL6pe9JrFN1SSrcA5aTVASPGvRT7meVUZkTiEAJ9uM4rneDBPazpnuTGhWz4N%2BqGqBFZvi9nYWDnf%2BLTeQRPNGP4rvbhaMGsNUb0Xk5GuncXKKSBNnJ78stD6CoGgn3burH9ZPZMe9y6T5TqPJRXdg7tYeVZSUMEpECWaovM3bu6nmrZ2XP6ZhqRgqiMlCwL3MqsDq755C%2BDCrT%2BdQUPgvqlIHU0TLQPTuWNCeYWWGPDo6EoARgO74S6sIi%2BV5AZ2inm3elPKNcKCu8Sep0HQsUBfq9g4ixcUeVhISplGMBn0MxXqkvDJohTVqukGFBSloFwmLPPE1fmeiLkpWp5qrdfoqYmA9y4LgEmvtcF%2FZ9bksR4S5WJFOWzynGr1iP95HJ%2Bo%2BS9GYzPg4iXqFY3iyZvF%2BktsuSx9%2B5fAtC8C6mN8hkpqZPnrCKJtGUJ8WPVI%2BaCirHyADqF%2FDFMMQu0hItmEwGyPtlBrj66VhiSqewZBHmA6dQvTnZaCOf5CWl56U%2Fs%2FugV8nKi4ha6JyW4H5qdqxU58%2Fq3MUWM4aoRhQp837LwgrsRyKMHjfWjQUtuw9yQVBJSPCR9PdfavUGKHSvoYMwdVaXIexcS%2BOOlGLr1xJuVc0ww38%2FWwlj3FbB5kQSkERf5RTcMP2J6r0GOqUBv62xwqbryi4%2FU%2BxqAvyPnMP%2BOfIR4lo9Y96fhlKg5o7esdhsnpjdbeD7JdZcArvX34Zqgatg%2FHc4ueZFaXKPOWXGA3yz345c%2FWkbGnzYtmbsPAHcgOCx68QplQjxF%2FUVO1z1JUB9IuRIHTIxv6NlpBVNqvMh7mW3oWmtfLwRhCbWoI75qwajxXB%2BgweO1STuWqAf0dHyWi02UuRiGZ9LQwZOfYjX&X-Amz-Signature=3353a581fc797066b2f20cb0237e52a76044b303b0211f74fefc66fca03a571a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI4MPOF3%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T061008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5xMJo9wgHbokk8g1ry0N3ib3Zq0EIjK2vuDpq%2Bl3WZQIgXUnDfHdmggjCfJWa4RwHOQLMkyLpSgPOQvflrNuhZzcqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSHuEL6pe9JrFN1SSrcA5aTVASPGvRT7meVUZkTiEAJ9uM4rneDBPazpnuTGhWz4N%2BqGqBFZvi9nYWDnf%2BLTeQRPNGP4rvbhaMGsNUb0Xk5GuncXKKSBNnJ78stD6CoGgn3burH9ZPZMe9y6T5TqPJRXdg7tYeVZSUMEpECWaovM3bu6nmrZ2XP6ZhqRgqiMlCwL3MqsDq755C%2BDCrT%2BdQUPgvqlIHU0TLQPTuWNCeYWWGPDo6EoARgO74S6sIi%2BV5AZ2inm3elPKNcKCu8Sep0HQsUBfq9g4ixcUeVhISplGMBn0MxXqkvDJohTVqukGFBSloFwmLPPE1fmeiLkpWp5qrdfoqYmA9y4LgEmvtcF%2FZ9bksR4S5WJFOWzynGr1iP95HJ%2Bo%2BS9GYzPg4iXqFY3iyZvF%2BktsuSx9%2B5fAtC8C6mN8hkpqZPnrCKJtGUJ8WPVI%2BaCirHyADqF%2FDFMMQu0hItmEwGyPtlBrj66VhiSqewZBHmA6dQvTnZaCOf5CWl56U%2Fs%2FugV8nKi4ha6JyW4H5qdqxU58%2Fq3MUWM4aoRhQp837LwgrsRyKMHjfWjQUtuw9yQVBJSPCR9PdfavUGKHSvoYMwdVaXIexcS%2BOOlGLr1xJuVc0ww38%2FWwlj3FbB5kQSkERf5RTcMP2J6r0GOqUBv62xwqbryi4%2FU%2BxqAvyPnMP%2BOfIR4lo9Y96fhlKg5o7esdhsnpjdbeD7JdZcArvX34Zqgatg%2FHc4ueZFaXKPOWXGA3yz345c%2FWkbGnzYtmbsPAHcgOCx68QplQjxF%2FUVO1z1JUB9IuRIHTIxv6NlpBVNqvMh7mW3oWmtfLwRhCbWoI75qwajxXB%2BgweO1STuWqAf0dHyWi02UuRiGZ9LQwZOfYjX&X-Amz-Signature=b37bd4f26c9e6dae8b0239d180856769fc18cd916d956bbef2b059da9e6f6a58&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI4MPOF3%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T061008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5xMJo9wgHbokk8g1ry0N3ib3Zq0EIjK2vuDpq%2Bl3WZQIgXUnDfHdmggjCfJWa4RwHOQLMkyLpSgPOQvflrNuhZzcqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSHuEL6pe9JrFN1SSrcA5aTVASPGvRT7meVUZkTiEAJ9uM4rneDBPazpnuTGhWz4N%2BqGqBFZvi9nYWDnf%2BLTeQRPNGP4rvbhaMGsNUb0Xk5GuncXKKSBNnJ78stD6CoGgn3burH9ZPZMe9y6T5TqPJRXdg7tYeVZSUMEpECWaovM3bu6nmrZ2XP6ZhqRgqiMlCwL3MqsDq755C%2BDCrT%2BdQUPgvqlIHU0TLQPTuWNCeYWWGPDo6EoARgO74S6sIi%2BV5AZ2inm3elPKNcKCu8Sep0HQsUBfq9g4ixcUeVhISplGMBn0MxXqkvDJohTVqukGFBSloFwmLPPE1fmeiLkpWp5qrdfoqYmA9y4LgEmvtcF%2FZ9bksR4S5WJFOWzynGr1iP95HJ%2Bo%2BS9GYzPg4iXqFY3iyZvF%2BktsuSx9%2B5fAtC8C6mN8hkpqZPnrCKJtGUJ8WPVI%2BaCirHyADqF%2FDFMMQu0hItmEwGyPtlBrj66VhiSqewZBHmA6dQvTnZaCOf5CWl56U%2Fs%2FugV8nKi4ha6JyW4H5qdqxU58%2Fq3MUWM4aoRhQp837LwgrsRyKMHjfWjQUtuw9yQVBJSPCR9PdfavUGKHSvoYMwdVaXIexcS%2BOOlGLr1xJuVc0ww38%2FWwlj3FbB5kQSkERf5RTcMP2J6r0GOqUBv62xwqbryi4%2FU%2BxqAvyPnMP%2BOfIR4lo9Y96fhlKg5o7esdhsnpjdbeD7JdZcArvX34Zqgatg%2FHc4ueZFaXKPOWXGA3yz345c%2FWkbGnzYtmbsPAHcgOCx68QplQjxF%2FUVO1z1JUB9IuRIHTIxv6NlpBVNqvMh7mW3oWmtfLwRhCbWoI75qwajxXB%2BgweO1STuWqAf0dHyWi02UuRiGZ9LQwZOfYjX&X-Amz-Signature=a38beaf23429a17117735012a6019a8f6cbb53c8cbbac96388c073e3470bf826&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI4MPOF3%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T061008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5xMJo9wgHbokk8g1ry0N3ib3Zq0EIjK2vuDpq%2Bl3WZQIgXUnDfHdmggjCfJWa4RwHOQLMkyLpSgPOQvflrNuhZzcqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSHuEL6pe9JrFN1SSrcA5aTVASPGvRT7meVUZkTiEAJ9uM4rneDBPazpnuTGhWz4N%2BqGqBFZvi9nYWDnf%2BLTeQRPNGP4rvbhaMGsNUb0Xk5GuncXKKSBNnJ78stD6CoGgn3burH9ZPZMe9y6T5TqPJRXdg7tYeVZSUMEpECWaovM3bu6nmrZ2XP6ZhqRgqiMlCwL3MqsDq755C%2BDCrT%2BdQUPgvqlIHU0TLQPTuWNCeYWWGPDo6EoARgO74S6sIi%2BV5AZ2inm3elPKNcKCu8Sep0HQsUBfq9g4ixcUeVhISplGMBn0MxXqkvDJohTVqukGFBSloFwmLPPE1fmeiLkpWp5qrdfoqYmA9y4LgEmvtcF%2FZ9bksR4S5WJFOWzynGr1iP95HJ%2Bo%2BS9GYzPg4iXqFY3iyZvF%2BktsuSx9%2B5fAtC8C6mN8hkpqZPnrCKJtGUJ8WPVI%2BaCirHyADqF%2FDFMMQu0hItmEwGyPtlBrj66VhiSqewZBHmA6dQvTnZaCOf5CWl56U%2Fs%2FugV8nKi4ha6JyW4H5qdqxU58%2Fq3MUWM4aoRhQp837LwgrsRyKMHjfWjQUtuw9yQVBJSPCR9PdfavUGKHSvoYMwdVaXIexcS%2BOOlGLr1xJuVc0ww38%2FWwlj3FbB5kQSkERf5RTcMP2J6r0GOqUBv62xwqbryi4%2FU%2BxqAvyPnMP%2BOfIR4lo9Y96fhlKg5o7esdhsnpjdbeD7JdZcArvX34Zqgatg%2FHc4ueZFaXKPOWXGA3yz345c%2FWkbGnzYtmbsPAHcgOCx68QplQjxF%2FUVO1z1JUB9IuRIHTIxv6NlpBVNqvMh7mW3oWmtfLwRhCbWoI75qwajxXB%2BgweO1STuWqAf0dHyWi02UuRiGZ9LQwZOfYjX&X-Amz-Signature=59f63dcaaa5fde7ff766a84b6d9296194853360cedcdce69b0351813d300d20d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI4MPOF3%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T061008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5xMJo9wgHbokk8g1ry0N3ib3Zq0EIjK2vuDpq%2Bl3WZQIgXUnDfHdmggjCfJWa4RwHOQLMkyLpSgPOQvflrNuhZzcqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSHuEL6pe9JrFN1SSrcA5aTVASPGvRT7meVUZkTiEAJ9uM4rneDBPazpnuTGhWz4N%2BqGqBFZvi9nYWDnf%2BLTeQRPNGP4rvbhaMGsNUb0Xk5GuncXKKSBNnJ78stD6CoGgn3burH9ZPZMe9y6T5TqPJRXdg7tYeVZSUMEpECWaovM3bu6nmrZ2XP6ZhqRgqiMlCwL3MqsDq755C%2BDCrT%2BdQUPgvqlIHU0TLQPTuWNCeYWWGPDo6EoARgO74S6sIi%2BV5AZ2inm3elPKNcKCu8Sep0HQsUBfq9g4ixcUeVhISplGMBn0MxXqkvDJohTVqukGFBSloFwmLPPE1fmeiLkpWp5qrdfoqYmA9y4LgEmvtcF%2FZ9bksR4S5WJFOWzynGr1iP95HJ%2Bo%2BS9GYzPg4iXqFY3iyZvF%2BktsuSx9%2B5fAtC8C6mN8hkpqZPnrCKJtGUJ8WPVI%2BaCirHyADqF%2FDFMMQu0hItmEwGyPtlBrj66VhiSqewZBHmA6dQvTnZaCOf5CWl56U%2Fs%2FugV8nKi4ha6JyW4H5qdqxU58%2Fq3MUWM4aoRhQp837LwgrsRyKMHjfWjQUtuw9yQVBJSPCR9PdfavUGKHSvoYMwdVaXIexcS%2BOOlGLr1xJuVc0ww38%2FWwlj3FbB5kQSkERf5RTcMP2J6r0GOqUBv62xwqbryi4%2FU%2BxqAvyPnMP%2BOfIR4lo9Y96fhlKg5o7esdhsnpjdbeD7JdZcArvX34Zqgatg%2FHc4ueZFaXKPOWXGA3yz345c%2FWkbGnzYtmbsPAHcgOCx68QplQjxF%2FUVO1z1JUB9IuRIHTIxv6NlpBVNqvMh7mW3oWmtfLwRhCbWoI75qwajxXB%2BgweO1STuWqAf0dHyWi02UuRiGZ9LQwZOfYjX&X-Amz-Signature=1a40a175b888461062730fbd89b984ee9398cfe067c7262214339152a69a61bb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
