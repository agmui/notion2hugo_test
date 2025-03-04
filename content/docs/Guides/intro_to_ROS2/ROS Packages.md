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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZSH3YSX%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlSuR5Gn3O%2BAndyFY9xSL182gfygFEX97HHhAcRNo4JAiBYN8CWU8DV%2B73gdvdDk32ZjHi3Jg94WIqJbCS6Ut2ocyqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqPOlr92vpPYGqUq6KtwD77u4G9qcgky%2F1Vdteo1VjANbhWvpGdg%2Fhv58S4B0wlK%2FthutvkfdpOCaZWHP6fvThfmyn3hGn0V9Ay2vEFbqmL%2BPYNBH1jUSZmdwc6IBCnLGdJg0PtuDgL8lFdmBTiQ7%2BxSNsDH6oIk1lAVlrKyOIfVkhutZda1a6RuzKadyDE6L11m1h5sRfUMGub5j3nqIbLZVC%2BpEsOMkNokqtAdBiSB4I4vfKC%2FR4CeAVt3j8Grw8IucgvB3RIIvwAYPlrg8wpZQmxpDRBE0OM3Lr4Vn1H6EcOvurxGWYAJwuUe48%2FvLzByzauc8%2FF7F2b8MbL5WCHkP6Ph1K3Q9qWTz4l6j9NsdzQMAcNOyadWnKBavMeWPyQTGVqj5sYXBoo2NK4tW%2BpkA%2BP75CX%2FJiTT%2Fswa6G0C1Yz3nFqejNrE67EqgH0wLT%2B9CsiWg0Z3%2BnZA33tRanK%2BMJ4LwIy7MQlvoSaJ35kEGJUW%2BDsZckV2SD2RYoRfUlmJ2%2B89wXeBiwf0VRliZfvDm34WtCX5xoBbW1%2F5E3WcLoCfwyBSs4kBGEDrt%2FeDv%2Bql1Wc3sixCSHYNRR9GaD4Nh7PA7KxJrRKqCMMnDq2OtzRtJ2CQd9P%2F9bpBWWB0taQo3%2BUwTb55jNHAw0OKavgY6pgEVAcIZ8lNsi39BYkglL%2FQlxHd577QThCZhVrRGnLsDXozb%2FkrPbEWm9u81JlCzV%2F67chdvE%2F2S5N1tJprPn1bQ6ZbbNJ%2Ba4opyjJ%2BDFKHob6EGiShqZIsGFGrXC8%2FQGqtOA5aRLadWXIo6RVUELQ08t28GqBHWFChbq7DacFOujjqYZLtYyu%2FZY0Td4m%2FgSK4T%2FFE1%2Fuu3NF32cZRIViq%2BEmkWyO2o&X-Amz-Signature=a504c686201082361d6d9eef58fea9c66479025f8c376a0a98ffddcff0255eaf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZSH3YSX%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlSuR5Gn3O%2BAndyFY9xSL182gfygFEX97HHhAcRNo4JAiBYN8CWU8DV%2B73gdvdDk32ZjHi3Jg94WIqJbCS6Ut2ocyqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqPOlr92vpPYGqUq6KtwD77u4G9qcgky%2F1Vdteo1VjANbhWvpGdg%2Fhv58S4B0wlK%2FthutvkfdpOCaZWHP6fvThfmyn3hGn0V9Ay2vEFbqmL%2BPYNBH1jUSZmdwc6IBCnLGdJg0PtuDgL8lFdmBTiQ7%2BxSNsDH6oIk1lAVlrKyOIfVkhutZda1a6RuzKadyDE6L11m1h5sRfUMGub5j3nqIbLZVC%2BpEsOMkNokqtAdBiSB4I4vfKC%2FR4CeAVt3j8Grw8IucgvB3RIIvwAYPlrg8wpZQmxpDRBE0OM3Lr4Vn1H6EcOvurxGWYAJwuUe48%2FvLzByzauc8%2FF7F2b8MbL5WCHkP6Ph1K3Q9qWTz4l6j9NsdzQMAcNOyadWnKBavMeWPyQTGVqj5sYXBoo2NK4tW%2BpkA%2BP75CX%2FJiTT%2Fswa6G0C1Yz3nFqejNrE67EqgH0wLT%2B9CsiWg0Z3%2BnZA33tRanK%2BMJ4LwIy7MQlvoSaJ35kEGJUW%2BDsZckV2SD2RYoRfUlmJ2%2B89wXeBiwf0VRliZfvDm34WtCX5xoBbW1%2F5E3WcLoCfwyBSs4kBGEDrt%2FeDv%2Bql1Wc3sixCSHYNRR9GaD4Nh7PA7KxJrRKqCMMnDq2OtzRtJ2CQd9P%2F9bpBWWB0taQo3%2BUwTb55jNHAw0OKavgY6pgEVAcIZ8lNsi39BYkglL%2FQlxHd577QThCZhVrRGnLsDXozb%2FkrPbEWm9u81JlCzV%2F67chdvE%2F2S5N1tJprPn1bQ6ZbbNJ%2Ba4opyjJ%2BDFKHob6EGiShqZIsGFGrXC8%2FQGqtOA5aRLadWXIo6RVUELQ08t28GqBHWFChbq7DacFOujjqYZLtYyu%2FZY0Td4m%2FgSK4T%2FFE1%2Fuu3NF32cZRIViq%2BEmkWyO2o&X-Amz-Signature=5f16adf1c3428a145e277adc6073ca4eb7dc76ed374e3d83ab004b77b58b2761&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZSH3YSX%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlSuR5Gn3O%2BAndyFY9xSL182gfygFEX97HHhAcRNo4JAiBYN8CWU8DV%2B73gdvdDk32ZjHi3Jg94WIqJbCS6Ut2ocyqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqPOlr92vpPYGqUq6KtwD77u4G9qcgky%2F1Vdteo1VjANbhWvpGdg%2Fhv58S4B0wlK%2FthutvkfdpOCaZWHP6fvThfmyn3hGn0V9Ay2vEFbqmL%2BPYNBH1jUSZmdwc6IBCnLGdJg0PtuDgL8lFdmBTiQ7%2BxSNsDH6oIk1lAVlrKyOIfVkhutZda1a6RuzKadyDE6L11m1h5sRfUMGub5j3nqIbLZVC%2BpEsOMkNokqtAdBiSB4I4vfKC%2FR4CeAVt3j8Grw8IucgvB3RIIvwAYPlrg8wpZQmxpDRBE0OM3Lr4Vn1H6EcOvurxGWYAJwuUe48%2FvLzByzauc8%2FF7F2b8MbL5WCHkP6Ph1K3Q9qWTz4l6j9NsdzQMAcNOyadWnKBavMeWPyQTGVqj5sYXBoo2NK4tW%2BpkA%2BP75CX%2FJiTT%2Fswa6G0C1Yz3nFqejNrE67EqgH0wLT%2B9CsiWg0Z3%2BnZA33tRanK%2BMJ4LwIy7MQlvoSaJ35kEGJUW%2BDsZckV2SD2RYoRfUlmJ2%2B89wXeBiwf0VRliZfvDm34WtCX5xoBbW1%2F5E3WcLoCfwyBSs4kBGEDrt%2FeDv%2Bql1Wc3sixCSHYNRR9GaD4Nh7PA7KxJrRKqCMMnDq2OtzRtJ2CQd9P%2F9bpBWWB0taQo3%2BUwTb55jNHAw0OKavgY6pgEVAcIZ8lNsi39BYkglL%2FQlxHd577QThCZhVrRGnLsDXozb%2FkrPbEWm9u81JlCzV%2F67chdvE%2F2S5N1tJprPn1bQ6ZbbNJ%2Ba4opyjJ%2BDFKHob6EGiShqZIsGFGrXC8%2FQGqtOA5aRLadWXIo6RVUELQ08t28GqBHWFChbq7DacFOujjqYZLtYyu%2FZY0Td4m%2FgSK4T%2FFE1%2Fuu3NF32cZRIViq%2BEmkWyO2o&X-Amz-Signature=19033bf2cc65d2bd86648e10267ea270b9ade6cbbeb156dd17edf137ad8de528&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZSH3YSX%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlSuR5Gn3O%2BAndyFY9xSL182gfygFEX97HHhAcRNo4JAiBYN8CWU8DV%2B73gdvdDk32ZjHi3Jg94WIqJbCS6Ut2ocyqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqPOlr92vpPYGqUq6KtwD77u4G9qcgky%2F1Vdteo1VjANbhWvpGdg%2Fhv58S4B0wlK%2FthutvkfdpOCaZWHP6fvThfmyn3hGn0V9Ay2vEFbqmL%2BPYNBH1jUSZmdwc6IBCnLGdJg0PtuDgL8lFdmBTiQ7%2BxSNsDH6oIk1lAVlrKyOIfVkhutZda1a6RuzKadyDE6L11m1h5sRfUMGub5j3nqIbLZVC%2BpEsOMkNokqtAdBiSB4I4vfKC%2FR4CeAVt3j8Grw8IucgvB3RIIvwAYPlrg8wpZQmxpDRBE0OM3Lr4Vn1H6EcOvurxGWYAJwuUe48%2FvLzByzauc8%2FF7F2b8MbL5WCHkP6Ph1K3Q9qWTz4l6j9NsdzQMAcNOyadWnKBavMeWPyQTGVqj5sYXBoo2NK4tW%2BpkA%2BP75CX%2FJiTT%2Fswa6G0C1Yz3nFqejNrE67EqgH0wLT%2B9CsiWg0Z3%2BnZA33tRanK%2BMJ4LwIy7MQlvoSaJ35kEGJUW%2BDsZckV2SD2RYoRfUlmJ2%2B89wXeBiwf0VRliZfvDm34WtCX5xoBbW1%2F5E3WcLoCfwyBSs4kBGEDrt%2FeDv%2Bql1Wc3sixCSHYNRR9GaD4Nh7PA7KxJrRKqCMMnDq2OtzRtJ2CQd9P%2F9bpBWWB0taQo3%2BUwTb55jNHAw0OKavgY6pgEVAcIZ8lNsi39BYkglL%2FQlxHd577QThCZhVrRGnLsDXozb%2FkrPbEWm9u81JlCzV%2F67chdvE%2F2S5N1tJprPn1bQ6ZbbNJ%2Ba4opyjJ%2BDFKHob6EGiShqZIsGFGrXC8%2FQGqtOA5aRLadWXIo6RVUELQ08t28GqBHWFChbq7DacFOujjqYZLtYyu%2FZY0Td4m%2FgSK4T%2FFE1%2Fuu3NF32cZRIViq%2BEmkWyO2o&X-Amz-Signature=4125c708242f9f73c2bf4cc8a1f0ff52bc5b19d8a6bd1d89fd0d2f375e5187ad&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZSH3YSX%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlSuR5Gn3O%2BAndyFY9xSL182gfygFEX97HHhAcRNo4JAiBYN8CWU8DV%2B73gdvdDk32ZjHi3Jg94WIqJbCS6Ut2ocyqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqPOlr92vpPYGqUq6KtwD77u4G9qcgky%2F1Vdteo1VjANbhWvpGdg%2Fhv58S4B0wlK%2FthutvkfdpOCaZWHP6fvThfmyn3hGn0V9Ay2vEFbqmL%2BPYNBH1jUSZmdwc6IBCnLGdJg0PtuDgL8lFdmBTiQ7%2BxSNsDH6oIk1lAVlrKyOIfVkhutZda1a6RuzKadyDE6L11m1h5sRfUMGub5j3nqIbLZVC%2BpEsOMkNokqtAdBiSB4I4vfKC%2FR4CeAVt3j8Grw8IucgvB3RIIvwAYPlrg8wpZQmxpDRBE0OM3Lr4Vn1H6EcOvurxGWYAJwuUe48%2FvLzByzauc8%2FF7F2b8MbL5WCHkP6Ph1K3Q9qWTz4l6j9NsdzQMAcNOyadWnKBavMeWPyQTGVqj5sYXBoo2NK4tW%2BpkA%2BP75CX%2FJiTT%2Fswa6G0C1Yz3nFqejNrE67EqgH0wLT%2B9CsiWg0Z3%2BnZA33tRanK%2BMJ4LwIy7MQlvoSaJ35kEGJUW%2BDsZckV2SD2RYoRfUlmJ2%2B89wXeBiwf0VRliZfvDm34WtCX5xoBbW1%2F5E3WcLoCfwyBSs4kBGEDrt%2FeDv%2Bql1Wc3sixCSHYNRR9GaD4Nh7PA7KxJrRKqCMMnDq2OtzRtJ2CQd9P%2F9bpBWWB0taQo3%2BUwTb55jNHAw0OKavgY6pgEVAcIZ8lNsi39BYkglL%2FQlxHd577QThCZhVrRGnLsDXozb%2FkrPbEWm9u81JlCzV%2F67chdvE%2F2S5N1tJprPn1bQ6ZbbNJ%2Ba4opyjJ%2BDFKHob6EGiShqZIsGFGrXC8%2FQGqtOA5aRLadWXIo6RVUELQ08t28GqBHWFChbq7DacFOujjqYZLtYyu%2FZY0Td4m%2FgSK4T%2FFE1%2Fuu3NF32cZRIViq%2BEmkWyO2o&X-Amz-Signature=8aa780e51f70b74a42234f394329c44e16af149f01976690752dd8fc9628ded6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZSH3YSX%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlSuR5Gn3O%2BAndyFY9xSL182gfygFEX97HHhAcRNo4JAiBYN8CWU8DV%2B73gdvdDk32ZjHi3Jg94WIqJbCS6Ut2ocyqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqPOlr92vpPYGqUq6KtwD77u4G9qcgky%2F1Vdteo1VjANbhWvpGdg%2Fhv58S4B0wlK%2FthutvkfdpOCaZWHP6fvThfmyn3hGn0V9Ay2vEFbqmL%2BPYNBH1jUSZmdwc6IBCnLGdJg0PtuDgL8lFdmBTiQ7%2BxSNsDH6oIk1lAVlrKyOIfVkhutZda1a6RuzKadyDE6L11m1h5sRfUMGub5j3nqIbLZVC%2BpEsOMkNokqtAdBiSB4I4vfKC%2FR4CeAVt3j8Grw8IucgvB3RIIvwAYPlrg8wpZQmxpDRBE0OM3Lr4Vn1H6EcOvurxGWYAJwuUe48%2FvLzByzauc8%2FF7F2b8MbL5WCHkP6Ph1K3Q9qWTz4l6j9NsdzQMAcNOyadWnKBavMeWPyQTGVqj5sYXBoo2NK4tW%2BpkA%2BP75CX%2FJiTT%2Fswa6G0C1Yz3nFqejNrE67EqgH0wLT%2B9CsiWg0Z3%2BnZA33tRanK%2BMJ4LwIy7MQlvoSaJ35kEGJUW%2BDsZckV2SD2RYoRfUlmJ2%2B89wXeBiwf0VRliZfvDm34WtCX5xoBbW1%2F5E3WcLoCfwyBSs4kBGEDrt%2FeDv%2Bql1Wc3sixCSHYNRR9GaD4Nh7PA7KxJrRKqCMMnDq2OtzRtJ2CQd9P%2F9bpBWWB0taQo3%2BUwTb55jNHAw0OKavgY6pgEVAcIZ8lNsi39BYkglL%2FQlxHd577QThCZhVrRGnLsDXozb%2FkrPbEWm9u81JlCzV%2F67chdvE%2F2S5N1tJprPn1bQ6ZbbNJ%2Ba4opyjJ%2BDFKHob6EGiShqZIsGFGrXC8%2FQGqtOA5aRLadWXIo6RVUELQ08t28GqBHWFChbq7DacFOujjqYZLtYyu%2FZY0Td4m%2FgSK4T%2FFE1%2Fuu3NF32cZRIViq%2BEmkWyO2o&X-Amz-Signature=7cb2891103c2c70df8d9b9924de7c45a57d32c8655d166d46badf1f02cbda143&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZSH3YSX%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlSuR5Gn3O%2BAndyFY9xSL182gfygFEX97HHhAcRNo4JAiBYN8CWU8DV%2B73gdvdDk32ZjHi3Jg94WIqJbCS6Ut2ocyqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqPOlr92vpPYGqUq6KtwD77u4G9qcgky%2F1Vdteo1VjANbhWvpGdg%2Fhv58S4B0wlK%2FthutvkfdpOCaZWHP6fvThfmyn3hGn0V9Ay2vEFbqmL%2BPYNBH1jUSZmdwc6IBCnLGdJg0PtuDgL8lFdmBTiQ7%2BxSNsDH6oIk1lAVlrKyOIfVkhutZda1a6RuzKadyDE6L11m1h5sRfUMGub5j3nqIbLZVC%2BpEsOMkNokqtAdBiSB4I4vfKC%2FR4CeAVt3j8Grw8IucgvB3RIIvwAYPlrg8wpZQmxpDRBE0OM3Lr4Vn1H6EcOvurxGWYAJwuUe48%2FvLzByzauc8%2FF7F2b8MbL5WCHkP6Ph1K3Q9qWTz4l6j9NsdzQMAcNOyadWnKBavMeWPyQTGVqj5sYXBoo2NK4tW%2BpkA%2BP75CX%2FJiTT%2Fswa6G0C1Yz3nFqejNrE67EqgH0wLT%2B9CsiWg0Z3%2BnZA33tRanK%2BMJ4LwIy7MQlvoSaJ35kEGJUW%2BDsZckV2SD2RYoRfUlmJ2%2B89wXeBiwf0VRliZfvDm34WtCX5xoBbW1%2F5E3WcLoCfwyBSs4kBGEDrt%2FeDv%2Bql1Wc3sixCSHYNRR9GaD4Nh7PA7KxJrRKqCMMnDq2OtzRtJ2CQd9P%2F9bpBWWB0taQo3%2BUwTb55jNHAw0OKavgY6pgEVAcIZ8lNsi39BYkglL%2FQlxHd577QThCZhVrRGnLsDXozb%2FkrPbEWm9u81JlCzV%2F67chdvE%2F2S5N1tJprPn1bQ6ZbbNJ%2Ba4opyjJ%2BDFKHob6EGiShqZIsGFGrXC8%2FQGqtOA5aRLadWXIo6RVUELQ08t28GqBHWFChbq7DacFOujjqYZLtYyu%2FZY0Td4m%2FgSK4T%2FFE1%2Fuu3NF32cZRIViq%2BEmkWyO2o&X-Amz-Signature=ce7e120af3f0fee12cc14558220d58b0ab2df9f140ffa54f43e7a5b8dbefd062&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
