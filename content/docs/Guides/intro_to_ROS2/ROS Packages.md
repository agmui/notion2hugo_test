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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAROGNNL%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDfjl9y75rynTvplnwDDJQ2nbSGKIgIyXHJGsU5lgMf4QIgcnDShEjJy1c2hr0X34GqpueylzI8TuJJVuKohFLMSxkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2gUF0gGF2Sc3aE1yrcAyDTm8THMo5NYelFlNvQDvFJpL7EtklCnLzClnH66wvkOWU2CZtR%2BZngfpBKYefCHYHnjYDVy5pOk%2F51WCIEet2jVh0LaPlBsoQQ5aMiLX6Zi2uXSGQ%2F6Y8vbCCRtv0X7AlXBbFf4xV7njKupbHTyTbBRzupynWSQ%2FvlcSw2W2KH4FIguiljc461vIXE%2FKsAw6fG6OWEDGx28WvjT5tIPQUoEKX%2ByLSOYHQDUkwZ6XSEtF1eCRe615yvb8XtueLyP7cf7lTrRC0FjGvjE3TKfNbmwD%2F%2Fn%2B49A9XB7JG59K3d4UfXQA2BICcBVdXpj%2BpS%2F9TSIEZx4OSAX0A5sgzFlScLzpSAoG%2BEzIb4D8FSU5d%2BOMeOqxqblBillA9FPU7CRRHxQgNqOwZnV6D%2BWCwHhcm7o5gQkzV%2FHCaXdtwq%2BkFySDfOZaIT%2BZrX2JGeee4op3soK5sURhMMxXbSug3IFnkHyOyxsVR1CdoI7qxlAdDeLQ%2Fx%2FTBPHGrpwTnLSaXTrdQdg%2FFF4FbLBv%2BxJYokLd0sW5VGjxwl4OPqF62bHPt9O%2Fsv2%2FggmkXWdJdv9kk%2BLV8auIIObH6vYwYc5Rxdl5yflhTumS9noNLwSIRLCfIkGf6VwJG9SLQFqhpFML7P5L8GOqUBjTAY6FnQ2n5%2Fn761fBalGQ2uO%2BNejUSNy1OTjJBxbxX4wBZ975L%2FYybDnvg0fLDhNriuQdJnJl6Q6ylp1SrPyMDjbXfAxFMjnH%2BIEsq0u%2FrJYgWhOWEeCI1RKvvGXXp3GMMHi9EMqVSArfQBfE%2BGaU9Xg828lLl9nk5Yk5MJYuwtOOm35zF6G0j%2FOlZ%2Fyf3xUPOJXTBd1ipcepFbAlAgx4wsU8Iq&X-Amz-Signature=8f1891f202f11fe24bdf5556675f6246d0c6b8a69602a77046afe103f6ba5a7c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAROGNNL%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDfjl9y75rynTvplnwDDJQ2nbSGKIgIyXHJGsU5lgMf4QIgcnDShEjJy1c2hr0X34GqpueylzI8TuJJVuKohFLMSxkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2gUF0gGF2Sc3aE1yrcAyDTm8THMo5NYelFlNvQDvFJpL7EtklCnLzClnH66wvkOWU2CZtR%2BZngfpBKYefCHYHnjYDVy5pOk%2F51WCIEet2jVh0LaPlBsoQQ5aMiLX6Zi2uXSGQ%2F6Y8vbCCRtv0X7AlXBbFf4xV7njKupbHTyTbBRzupynWSQ%2FvlcSw2W2KH4FIguiljc461vIXE%2FKsAw6fG6OWEDGx28WvjT5tIPQUoEKX%2ByLSOYHQDUkwZ6XSEtF1eCRe615yvb8XtueLyP7cf7lTrRC0FjGvjE3TKfNbmwD%2F%2Fn%2B49A9XB7JG59K3d4UfXQA2BICcBVdXpj%2BpS%2F9TSIEZx4OSAX0A5sgzFlScLzpSAoG%2BEzIb4D8FSU5d%2BOMeOqxqblBillA9FPU7CRRHxQgNqOwZnV6D%2BWCwHhcm7o5gQkzV%2FHCaXdtwq%2BkFySDfOZaIT%2BZrX2JGeee4op3soK5sURhMMxXbSug3IFnkHyOyxsVR1CdoI7qxlAdDeLQ%2Fx%2FTBPHGrpwTnLSaXTrdQdg%2FFF4FbLBv%2BxJYokLd0sW5VGjxwl4OPqF62bHPt9O%2Fsv2%2FggmkXWdJdv9kk%2BLV8auIIObH6vYwYc5Rxdl5yflhTumS9noNLwSIRLCfIkGf6VwJG9SLQFqhpFML7P5L8GOqUBjTAY6FnQ2n5%2Fn761fBalGQ2uO%2BNejUSNy1OTjJBxbxX4wBZ975L%2FYybDnvg0fLDhNriuQdJnJl6Q6ylp1SrPyMDjbXfAxFMjnH%2BIEsq0u%2FrJYgWhOWEeCI1RKvvGXXp3GMMHi9EMqVSArfQBfE%2BGaU9Xg828lLl9nk5Yk5MJYuwtOOm35zF6G0j%2FOlZ%2Fyf3xUPOJXTBd1ipcepFbAlAgx4wsU8Iq&X-Amz-Signature=78be12cc32027a564caa7331aac900e44f4c9bf6ee946bba228b1bd2969fee45&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAROGNNL%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDfjl9y75rynTvplnwDDJQ2nbSGKIgIyXHJGsU5lgMf4QIgcnDShEjJy1c2hr0X34GqpueylzI8TuJJVuKohFLMSxkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2gUF0gGF2Sc3aE1yrcAyDTm8THMo5NYelFlNvQDvFJpL7EtklCnLzClnH66wvkOWU2CZtR%2BZngfpBKYefCHYHnjYDVy5pOk%2F51WCIEet2jVh0LaPlBsoQQ5aMiLX6Zi2uXSGQ%2F6Y8vbCCRtv0X7AlXBbFf4xV7njKupbHTyTbBRzupynWSQ%2FvlcSw2W2KH4FIguiljc461vIXE%2FKsAw6fG6OWEDGx28WvjT5tIPQUoEKX%2ByLSOYHQDUkwZ6XSEtF1eCRe615yvb8XtueLyP7cf7lTrRC0FjGvjE3TKfNbmwD%2F%2Fn%2B49A9XB7JG59K3d4UfXQA2BICcBVdXpj%2BpS%2F9TSIEZx4OSAX0A5sgzFlScLzpSAoG%2BEzIb4D8FSU5d%2BOMeOqxqblBillA9FPU7CRRHxQgNqOwZnV6D%2BWCwHhcm7o5gQkzV%2FHCaXdtwq%2BkFySDfOZaIT%2BZrX2JGeee4op3soK5sURhMMxXbSug3IFnkHyOyxsVR1CdoI7qxlAdDeLQ%2Fx%2FTBPHGrpwTnLSaXTrdQdg%2FFF4FbLBv%2BxJYokLd0sW5VGjxwl4OPqF62bHPt9O%2Fsv2%2FggmkXWdJdv9kk%2BLV8auIIObH6vYwYc5Rxdl5yflhTumS9noNLwSIRLCfIkGf6VwJG9SLQFqhpFML7P5L8GOqUBjTAY6FnQ2n5%2Fn761fBalGQ2uO%2BNejUSNy1OTjJBxbxX4wBZ975L%2FYybDnvg0fLDhNriuQdJnJl6Q6ylp1SrPyMDjbXfAxFMjnH%2BIEsq0u%2FrJYgWhOWEeCI1RKvvGXXp3GMMHi9EMqVSArfQBfE%2BGaU9Xg828lLl9nk5Yk5MJYuwtOOm35zF6G0j%2FOlZ%2Fyf3xUPOJXTBd1ipcepFbAlAgx4wsU8Iq&X-Amz-Signature=9213a7e445bf43983a298ef932d8bcd2de09988546a99c9487c0e0eddf9f0c83&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAROGNNL%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDfjl9y75rynTvplnwDDJQ2nbSGKIgIyXHJGsU5lgMf4QIgcnDShEjJy1c2hr0X34GqpueylzI8TuJJVuKohFLMSxkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2gUF0gGF2Sc3aE1yrcAyDTm8THMo5NYelFlNvQDvFJpL7EtklCnLzClnH66wvkOWU2CZtR%2BZngfpBKYefCHYHnjYDVy5pOk%2F51WCIEet2jVh0LaPlBsoQQ5aMiLX6Zi2uXSGQ%2F6Y8vbCCRtv0X7AlXBbFf4xV7njKupbHTyTbBRzupynWSQ%2FvlcSw2W2KH4FIguiljc461vIXE%2FKsAw6fG6OWEDGx28WvjT5tIPQUoEKX%2ByLSOYHQDUkwZ6XSEtF1eCRe615yvb8XtueLyP7cf7lTrRC0FjGvjE3TKfNbmwD%2F%2Fn%2B49A9XB7JG59K3d4UfXQA2BICcBVdXpj%2BpS%2F9TSIEZx4OSAX0A5sgzFlScLzpSAoG%2BEzIb4D8FSU5d%2BOMeOqxqblBillA9FPU7CRRHxQgNqOwZnV6D%2BWCwHhcm7o5gQkzV%2FHCaXdtwq%2BkFySDfOZaIT%2BZrX2JGeee4op3soK5sURhMMxXbSug3IFnkHyOyxsVR1CdoI7qxlAdDeLQ%2Fx%2FTBPHGrpwTnLSaXTrdQdg%2FFF4FbLBv%2BxJYokLd0sW5VGjxwl4OPqF62bHPt9O%2Fsv2%2FggmkXWdJdv9kk%2BLV8auIIObH6vYwYc5Rxdl5yflhTumS9noNLwSIRLCfIkGf6VwJG9SLQFqhpFML7P5L8GOqUBjTAY6FnQ2n5%2Fn761fBalGQ2uO%2BNejUSNy1OTjJBxbxX4wBZ975L%2FYybDnvg0fLDhNriuQdJnJl6Q6ylp1SrPyMDjbXfAxFMjnH%2BIEsq0u%2FrJYgWhOWEeCI1RKvvGXXp3GMMHi9EMqVSArfQBfE%2BGaU9Xg828lLl9nk5Yk5MJYuwtOOm35zF6G0j%2FOlZ%2Fyf3xUPOJXTBd1ipcepFbAlAgx4wsU8Iq&X-Amz-Signature=f337d1a5198abcaef1810e95c9a5c02b287355b236cd92d0234bac399579c967&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAROGNNL%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDfjl9y75rynTvplnwDDJQ2nbSGKIgIyXHJGsU5lgMf4QIgcnDShEjJy1c2hr0X34GqpueylzI8TuJJVuKohFLMSxkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2gUF0gGF2Sc3aE1yrcAyDTm8THMo5NYelFlNvQDvFJpL7EtklCnLzClnH66wvkOWU2CZtR%2BZngfpBKYefCHYHnjYDVy5pOk%2F51WCIEet2jVh0LaPlBsoQQ5aMiLX6Zi2uXSGQ%2F6Y8vbCCRtv0X7AlXBbFf4xV7njKupbHTyTbBRzupynWSQ%2FvlcSw2W2KH4FIguiljc461vIXE%2FKsAw6fG6OWEDGx28WvjT5tIPQUoEKX%2ByLSOYHQDUkwZ6XSEtF1eCRe615yvb8XtueLyP7cf7lTrRC0FjGvjE3TKfNbmwD%2F%2Fn%2B49A9XB7JG59K3d4UfXQA2BICcBVdXpj%2BpS%2F9TSIEZx4OSAX0A5sgzFlScLzpSAoG%2BEzIb4D8FSU5d%2BOMeOqxqblBillA9FPU7CRRHxQgNqOwZnV6D%2BWCwHhcm7o5gQkzV%2FHCaXdtwq%2BkFySDfOZaIT%2BZrX2JGeee4op3soK5sURhMMxXbSug3IFnkHyOyxsVR1CdoI7qxlAdDeLQ%2Fx%2FTBPHGrpwTnLSaXTrdQdg%2FFF4FbLBv%2BxJYokLd0sW5VGjxwl4OPqF62bHPt9O%2Fsv2%2FggmkXWdJdv9kk%2BLV8auIIObH6vYwYc5Rxdl5yflhTumS9noNLwSIRLCfIkGf6VwJG9SLQFqhpFML7P5L8GOqUBjTAY6FnQ2n5%2Fn761fBalGQ2uO%2BNejUSNy1OTjJBxbxX4wBZ975L%2FYybDnvg0fLDhNriuQdJnJl6Q6ylp1SrPyMDjbXfAxFMjnH%2BIEsq0u%2FrJYgWhOWEeCI1RKvvGXXp3GMMHi9EMqVSArfQBfE%2BGaU9Xg828lLl9nk5Yk5MJYuwtOOm35zF6G0j%2FOlZ%2Fyf3xUPOJXTBd1ipcepFbAlAgx4wsU8Iq&X-Amz-Signature=3ab1035965a37c41b2b4f60f752b867f46cfad98d3bc2d5d2f3a6d9b0e70f591&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAROGNNL%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDfjl9y75rynTvplnwDDJQ2nbSGKIgIyXHJGsU5lgMf4QIgcnDShEjJy1c2hr0X34GqpueylzI8TuJJVuKohFLMSxkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2gUF0gGF2Sc3aE1yrcAyDTm8THMo5NYelFlNvQDvFJpL7EtklCnLzClnH66wvkOWU2CZtR%2BZngfpBKYefCHYHnjYDVy5pOk%2F51WCIEet2jVh0LaPlBsoQQ5aMiLX6Zi2uXSGQ%2F6Y8vbCCRtv0X7AlXBbFf4xV7njKupbHTyTbBRzupynWSQ%2FvlcSw2W2KH4FIguiljc461vIXE%2FKsAw6fG6OWEDGx28WvjT5tIPQUoEKX%2ByLSOYHQDUkwZ6XSEtF1eCRe615yvb8XtueLyP7cf7lTrRC0FjGvjE3TKfNbmwD%2F%2Fn%2B49A9XB7JG59K3d4UfXQA2BICcBVdXpj%2BpS%2F9TSIEZx4OSAX0A5sgzFlScLzpSAoG%2BEzIb4D8FSU5d%2BOMeOqxqblBillA9FPU7CRRHxQgNqOwZnV6D%2BWCwHhcm7o5gQkzV%2FHCaXdtwq%2BkFySDfOZaIT%2BZrX2JGeee4op3soK5sURhMMxXbSug3IFnkHyOyxsVR1CdoI7qxlAdDeLQ%2Fx%2FTBPHGrpwTnLSaXTrdQdg%2FFF4FbLBv%2BxJYokLd0sW5VGjxwl4OPqF62bHPt9O%2Fsv2%2FggmkXWdJdv9kk%2BLV8auIIObH6vYwYc5Rxdl5yflhTumS9noNLwSIRLCfIkGf6VwJG9SLQFqhpFML7P5L8GOqUBjTAY6FnQ2n5%2Fn761fBalGQ2uO%2BNejUSNy1OTjJBxbxX4wBZ975L%2FYybDnvg0fLDhNriuQdJnJl6Q6ylp1SrPyMDjbXfAxFMjnH%2BIEsq0u%2FrJYgWhOWEeCI1RKvvGXXp3GMMHi9EMqVSArfQBfE%2BGaU9Xg828lLl9nk5Yk5MJYuwtOOm35zF6G0j%2FOlZ%2Fyf3xUPOJXTBd1ipcepFbAlAgx4wsU8Iq&X-Amz-Signature=f1e2a42b89f24991bd7350f867374d1440042090d58987639fbf7eac1e8a78d3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAROGNNL%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDfjl9y75rynTvplnwDDJQ2nbSGKIgIyXHJGsU5lgMf4QIgcnDShEjJy1c2hr0X34GqpueylzI8TuJJVuKohFLMSxkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2gUF0gGF2Sc3aE1yrcAyDTm8THMo5NYelFlNvQDvFJpL7EtklCnLzClnH66wvkOWU2CZtR%2BZngfpBKYefCHYHnjYDVy5pOk%2F51WCIEet2jVh0LaPlBsoQQ5aMiLX6Zi2uXSGQ%2F6Y8vbCCRtv0X7AlXBbFf4xV7njKupbHTyTbBRzupynWSQ%2FvlcSw2W2KH4FIguiljc461vIXE%2FKsAw6fG6OWEDGx28WvjT5tIPQUoEKX%2ByLSOYHQDUkwZ6XSEtF1eCRe615yvb8XtueLyP7cf7lTrRC0FjGvjE3TKfNbmwD%2F%2Fn%2B49A9XB7JG59K3d4UfXQA2BICcBVdXpj%2BpS%2F9TSIEZx4OSAX0A5sgzFlScLzpSAoG%2BEzIb4D8FSU5d%2BOMeOqxqblBillA9FPU7CRRHxQgNqOwZnV6D%2BWCwHhcm7o5gQkzV%2FHCaXdtwq%2BkFySDfOZaIT%2BZrX2JGeee4op3soK5sURhMMxXbSug3IFnkHyOyxsVR1CdoI7qxlAdDeLQ%2Fx%2FTBPHGrpwTnLSaXTrdQdg%2FFF4FbLBv%2BxJYokLd0sW5VGjxwl4OPqF62bHPt9O%2Fsv2%2FggmkXWdJdv9kk%2BLV8auIIObH6vYwYc5Rxdl5yflhTumS9noNLwSIRLCfIkGf6VwJG9SLQFqhpFML7P5L8GOqUBjTAY6FnQ2n5%2Fn761fBalGQ2uO%2BNejUSNy1OTjJBxbxX4wBZ975L%2FYybDnvg0fLDhNriuQdJnJl6Q6ylp1SrPyMDjbXfAxFMjnH%2BIEsq0u%2FrJYgWhOWEeCI1RKvvGXXp3GMMHi9EMqVSArfQBfE%2BGaU9Xg828lLl9nk5Yk5MJYuwtOOm35zF6G0j%2FOlZ%2Fyf3xUPOJXTBd1ipcepFbAlAgx4wsU8Iq&X-Amz-Signature=18fe6f1717bde1e3c29fdf94f554a0831cc31a0bfb5098663da84af3fda82a9c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
