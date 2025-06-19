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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRMAF5AZ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T132442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcrN3lAIDdbq8AlA%2FpPGfQJvB5I76yHRcLtABDOrA45QIgALIvk9MijHR%2BcFqXssuO3JeVDWOKN%2BlBMJlcLNzz%2FroqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTs2QhcPfiZjkXPbircAyTP75y5Fiv3TP9%2Fk4XXm%2F%2BYE1moshFB15THtFUuBEMhfcG6EU6Ng%2BiqMPGNTI8q%2BEuy7iR%2Bqd2TFDz3mfBoIIMAtt%2BvU4PmaxYUYBywZ9yt%2Bt4uFjSCN%2BDy%2FwRvLs6VHPVKA5QX%2BtlrbpFNGUh07j4w8cQbaWpFjS2be1U5lMG9tYfTjobgND8ksuUb%2BFHscIzUgOigVO3qvWfAeT3LKHX6vKodKGizgIiOP0%2FngVW5GkZGowfvmBVIJFcANU%2FJtMaauj4TZAiNpzx7RoupsBWqoLgUF0wn4B%2FEdhSyXFJ2vz6kxvoPng0puK5qmk4d6A3d%2Bq6LO2STQnRE5jGFj0YCV1Kb%2BRGjllfqydTsvkp4FZ%2F6XBi%2FJB%2B5VjaRkYk5HSumDxDP3a0UtW2fDxD6IKIhzkcX%2BZstVMnuiKdMWqweXCwa5eRTMRu%2FDhhOMxCbgf1BkBE5haJkgl4rmwbeikPI1QiSrrKkWAmrI8SsKi4io2%2FU6h8mCzaksxfAO7YJCA3Gfcj2i0JmouutO5Wba673XBuS0Whr3%2B%2FGZp%2FfbLr8q7LrJ4Sz3YSp6O79Zb%2FMk30jAkv4qYXepdBIdThAsZ6zNy5ld2nCBfmWtlvst1flLiFum72QsWL%2BM968MNGI0MIGOqUBbLlyyrAwAG2FtkOKTzyqm%2B6YaIZlm0GrrnDCPk6%2FRGaLehCcyv%2BEEVakfQd7rlLstPUbFwzXpH9gvpdKrW8quPvkI9Bl7qTrEY1c%2BAMQYlRM5MaSCsS%2Bn8km9%2FWFCnGLdXl3fqfkkHe9VtLcetCVTjAzz5571%2Fe78wRqAj8ORDxfGYEXbTrHRxpWUCCXBgZIstzS8nAsj24F3MxL9uIOEHJg8jeL&X-Amz-Signature=69688b7c606d3772ebc63463b4f589b63d0f41754988f9c129b692d724313947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRMAF5AZ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T132442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcrN3lAIDdbq8AlA%2FpPGfQJvB5I76yHRcLtABDOrA45QIgALIvk9MijHR%2BcFqXssuO3JeVDWOKN%2BlBMJlcLNzz%2FroqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTs2QhcPfiZjkXPbircAyTP75y5Fiv3TP9%2Fk4XXm%2F%2BYE1moshFB15THtFUuBEMhfcG6EU6Ng%2BiqMPGNTI8q%2BEuy7iR%2Bqd2TFDz3mfBoIIMAtt%2BvU4PmaxYUYBywZ9yt%2Bt4uFjSCN%2BDy%2FwRvLs6VHPVKA5QX%2BtlrbpFNGUh07j4w8cQbaWpFjS2be1U5lMG9tYfTjobgND8ksuUb%2BFHscIzUgOigVO3qvWfAeT3LKHX6vKodKGizgIiOP0%2FngVW5GkZGowfvmBVIJFcANU%2FJtMaauj4TZAiNpzx7RoupsBWqoLgUF0wn4B%2FEdhSyXFJ2vz6kxvoPng0puK5qmk4d6A3d%2Bq6LO2STQnRE5jGFj0YCV1Kb%2BRGjllfqydTsvkp4FZ%2F6XBi%2FJB%2B5VjaRkYk5HSumDxDP3a0UtW2fDxD6IKIhzkcX%2BZstVMnuiKdMWqweXCwa5eRTMRu%2FDhhOMxCbgf1BkBE5haJkgl4rmwbeikPI1QiSrrKkWAmrI8SsKi4io2%2FU6h8mCzaksxfAO7YJCA3Gfcj2i0JmouutO5Wba673XBuS0Whr3%2B%2FGZp%2FfbLr8q7LrJ4Sz3YSp6O79Zb%2FMk30jAkv4qYXepdBIdThAsZ6zNy5ld2nCBfmWtlvst1flLiFum72QsWL%2BM968MNGI0MIGOqUBbLlyyrAwAG2FtkOKTzyqm%2B6YaIZlm0GrrnDCPk6%2FRGaLehCcyv%2BEEVakfQd7rlLstPUbFwzXpH9gvpdKrW8quPvkI9Bl7qTrEY1c%2BAMQYlRM5MaSCsS%2Bn8km9%2FWFCnGLdXl3fqfkkHe9VtLcetCVTjAzz5571%2Fe78wRqAj8ORDxfGYEXbTrHRxpWUCCXBgZIstzS8nAsj24F3MxL9uIOEHJg8jeL&X-Amz-Signature=36fe4fa5d3da5a81f7a55bd3b5e65d19bc0f63a7fc843c0811b01839ac5a67a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRMAF5AZ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T132442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcrN3lAIDdbq8AlA%2FpPGfQJvB5I76yHRcLtABDOrA45QIgALIvk9MijHR%2BcFqXssuO3JeVDWOKN%2BlBMJlcLNzz%2FroqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTs2QhcPfiZjkXPbircAyTP75y5Fiv3TP9%2Fk4XXm%2F%2BYE1moshFB15THtFUuBEMhfcG6EU6Ng%2BiqMPGNTI8q%2BEuy7iR%2Bqd2TFDz3mfBoIIMAtt%2BvU4PmaxYUYBywZ9yt%2Bt4uFjSCN%2BDy%2FwRvLs6VHPVKA5QX%2BtlrbpFNGUh07j4w8cQbaWpFjS2be1U5lMG9tYfTjobgND8ksuUb%2BFHscIzUgOigVO3qvWfAeT3LKHX6vKodKGizgIiOP0%2FngVW5GkZGowfvmBVIJFcANU%2FJtMaauj4TZAiNpzx7RoupsBWqoLgUF0wn4B%2FEdhSyXFJ2vz6kxvoPng0puK5qmk4d6A3d%2Bq6LO2STQnRE5jGFj0YCV1Kb%2BRGjllfqydTsvkp4FZ%2F6XBi%2FJB%2B5VjaRkYk5HSumDxDP3a0UtW2fDxD6IKIhzkcX%2BZstVMnuiKdMWqweXCwa5eRTMRu%2FDhhOMxCbgf1BkBE5haJkgl4rmwbeikPI1QiSrrKkWAmrI8SsKi4io2%2FU6h8mCzaksxfAO7YJCA3Gfcj2i0JmouutO5Wba673XBuS0Whr3%2B%2FGZp%2FfbLr8q7LrJ4Sz3YSp6O79Zb%2FMk30jAkv4qYXepdBIdThAsZ6zNy5ld2nCBfmWtlvst1flLiFum72QsWL%2BM968MNGI0MIGOqUBbLlyyrAwAG2FtkOKTzyqm%2B6YaIZlm0GrrnDCPk6%2FRGaLehCcyv%2BEEVakfQd7rlLstPUbFwzXpH9gvpdKrW8quPvkI9Bl7qTrEY1c%2BAMQYlRM5MaSCsS%2Bn8km9%2FWFCnGLdXl3fqfkkHe9VtLcetCVTjAzz5571%2Fe78wRqAj8ORDxfGYEXbTrHRxpWUCCXBgZIstzS8nAsj24F3MxL9uIOEHJg8jeL&X-Amz-Signature=a35443372f59736d6ba139fb87434abada8fa928a978639c993d8f1a26d2502b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRMAF5AZ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T132442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcrN3lAIDdbq8AlA%2FpPGfQJvB5I76yHRcLtABDOrA45QIgALIvk9MijHR%2BcFqXssuO3JeVDWOKN%2BlBMJlcLNzz%2FroqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTs2QhcPfiZjkXPbircAyTP75y5Fiv3TP9%2Fk4XXm%2F%2BYE1moshFB15THtFUuBEMhfcG6EU6Ng%2BiqMPGNTI8q%2BEuy7iR%2Bqd2TFDz3mfBoIIMAtt%2BvU4PmaxYUYBywZ9yt%2Bt4uFjSCN%2BDy%2FwRvLs6VHPVKA5QX%2BtlrbpFNGUh07j4w8cQbaWpFjS2be1U5lMG9tYfTjobgND8ksuUb%2BFHscIzUgOigVO3qvWfAeT3LKHX6vKodKGizgIiOP0%2FngVW5GkZGowfvmBVIJFcANU%2FJtMaauj4TZAiNpzx7RoupsBWqoLgUF0wn4B%2FEdhSyXFJ2vz6kxvoPng0puK5qmk4d6A3d%2Bq6LO2STQnRE5jGFj0YCV1Kb%2BRGjllfqydTsvkp4FZ%2F6XBi%2FJB%2B5VjaRkYk5HSumDxDP3a0UtW2fDxD6IKIhzkcX%2BZstVMnuiKdMWqweXCwa5eRTMRu%2FDhhOMxCbgf1BkBE5haJkgl4rmwbeikPI1QiSrrKkWAmrI8SsKi4io2%2FU6h8mCzaksxfAO7YJCA3Gfcj2i0JmouutO5Wba673XBuS0Whr3%2B%2FGZp%2FfbLr8q7LrJ4Sz3YSp6O79Zb%2FMk30jAkv4qYXepdBIdThAsZ6zNy5ld2nCBfmWtlvst1flLiFum72QsWL%2BM968MNGI0MIGOqUBbLlyyrAwAG2FtkOKTzyqm%2B6YaIZlm0GrrnDCPk6%2FRGaLehCcyv%2BEEVakfQd7rlLstPUbFwzXpH9gvpdKrW8quPvkI9Bl7qTrEY1c%2BAMQYlRM5MaSCsS%2Bn8km9%2FWFCnGLdXl3fqfkkHe9VtLcetCVTjAzz5571%2Fe78wRqAj8ORDxfGYEXbTrHRxpWUCCXBgZIstzS8nAsj24F3MxL9uIOEHJg8jeL&X-Amz-Signature=03e095610f500d4d8e0aaeee7a18c73bb286dc31ab52afea4baf2407b5767fd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRMAF5AZ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T132442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcrN3lAIDdbq8AlA%2FpPGfQJvB5I76yHRcLtABDOrA45QIgALIvk9MijHR%2BcFqXssuO3JeVDWOKN%2BlBMJlcLNzz%2FroqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTs2QhcPfiZjkXPbircAyTP75y5Fiv3TP9%2Fk4XXm%2F%2BYE1moshFB15THtFUuBEMhfcG6EU6Ng%2BiqMPGNTI8q%2BEuy7iR%2Bqd2TFDz3mfBoIIMAtt%2BvU4PmaxYUYBywZ9yt%2Bt4uFjSCN%2BDy%2FwRvLs6VHPVKA5QX%2BtlrbpFNGUh07j4w8cQbaWpFjS2be1U5lMG9tYfTjobgND8ksuUb%2BFHscIzUgOigVO3qvWfAeT3LKHX6vKodKGizgIiOP0%2FngVW5GkZGowfvmBVIJFcANU%2FJtMaauj4TZAiNpzx7RoupsBWqoLgUF0wn4B%2FEdhSyXFJ2vz6kxvoPng0puK5qmk4d6A3d%2Bq6LO2STQnRE5jGFj0YCV1Kb%2BRGjllfqydTsvkp4FZ%2F6XBi%2FJB%2B5VjaRkYk5HSumDxDP3a0UtW2fDxD6IKIhzkcX%2BZstVMnuiKdMWqweXCwa5eRTMRu%2FDhhOMxCbgf1BkBE5haJkgl4rmwbeikPI1QiSrrKkWAmrI8SsKi4io2%2FU6h8mCzaksxfAO7YJCA3Gfcj2i0JmouutO5Wba673XBuS0Whr3%2B%2FGZp%2FfbLr8q7LrJ4Sz3YSp6O79Zb%2FMk30jAkv4qYXepdBIdThAsZ6zNy5ld2nCBfmWtlvst1flLiFum72QsWL%2BM968MNGI0MIGOqUBbLlyyrAwAG2FtkOKTzyqm%2B6YaIZlm0GrrnDCPk6%2FRGaLehCcyv%2BEEVakfQd7rlLstPUbFwzXpH9gvpdKrW8quPvkI9Bl7qTrEY1c%2BAMQYlRM5MaSCsS%2Bn8km9%2FWFCnGLdXl3fqfkkHe9VtLcetCVTjAzz5571%2Fe78wRqAj8ORDxfGYEXbTrHRxpWUCCXBgZIstzS8nAsj24F3MxL9uIOEHJg8jeL&X-Amz-Signature=e86b57a57e6c30ba19e569bd5a456d7b1e87383525e9f5e9f9e3b5031d5ffec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRMAF5AZ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T132442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcrN3lAIDdbq8AlA%2FpPGfQJvB5I76yHRcLtABDOrA45QIgALIvk9MijHR%2BcFqXssuO3JeVDWOKN%2BlBMJlcLNzz%2FroqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTs2QhcPfiZjkXPbircAyTP75y5Fiv3TP9%2Fk4XXm%2F%2BYE1moshFB15THtFUuBEMhfcG6EU6Ng%2BiqMPGNTI8q%2BEuy7iR%2Bqd2TFDz3mfBoIIMAtt%2BvU4PmaxYUYBywZ9yt%2Bt4uFjSCN%2BDy%2FwRvLs6VHPVKA5QX%2BtlrbpFNGUh07j4w8cQbaWpFjS2be1U5lMG9tYfTjobgND8ksuUb%2BFHscIzUgOigVO3qvWfAeT3LKHX6vKodKGizgIiOP0%2FngVW5GkZGowfvmBVIJFcANU%2FJtMaauj4TZAiNpzx7RoupsBWqoLgUF0wn4B%2FEdhSyXFJ2vz6kxvoPng0puK5qmk4d6A3d%2Bq6LO2STQnRE5jGFj0YCV1Kb%2BRGjllfqydTsvkp4FZ%2F6XBi%2FJB%2B5VjaRkYk5HSumDxDP3a0UtW2fDxD6IKIhzkcX%2BZstVMnuiKdMWqweXCwa5eRTMRu%2FDhhOMxCbgf1BkBE5haJkgl4rmwbeikPI1QiSrrKkWAmrI8SsKi4io2%2FU6h8mCzaksxfAO7YJCA3Gfcj2i0JmouutO5Wba673XBuS0Whr3%2B%2FGZp%2FfbLr8q7LrJ4Sz3YSp6O79Zb%2FMk30jAkv4qYXepdBIdThAsZ6zNy5ld2nCBfmWtlvst1flLiFum72QsWL%2BM968MNGI0MIGOqUBbLlyyrAwAG2FtkOKTzyqm%2B6YaIZlm0GrrnDCPk6%2FRGaLehCcyv%2BEEVakfQd7rlLstPUbFwzXpH9gvpdKrW8quPvkI9Bl7qTrEY1c%2BAMQYlRM5MaSCsS%2Bn8km9%2FWFCnGLdXl3fqfkkHe9VtLcetCVTjAzz5571%2Fe78wRqAj8ORDxfGYEXbTrHRxpWUCCXBgZIstzS8nAsj24F3MxL9uIOEHJg8jeL&X-Amz-Signature=b0ef5d20354edd176a7324075068694685d3e6f8d13d9fc53a124cac20f2cc97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRMAF5AZ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T132442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcrN3lAIDdbq8AlA%2FpPGfQJvB5I76yHRcLtABDOrA45QIgALIvk9MijHR%2BcFqXssuO3JeVDWOKN%2BlBMJlcLNzz%2FroqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTs2QhcPfiZjkXPbircAyTP75y5Fiv3TP9%2Fk4XXm%2F%2BYE1moshFB15THtFUuBEMhfcG6EU6Ng%2BiqMPGNTI8q%2BEuy7iR%2Bqd2TFDz3mfBoIIMAtt%2BvU4PmaxYUYBywZ9yt%2Bt4uFjSCN%2BDy%2FwRvLs6VHPVKA5QX%2BtlrbpFNGUh07j4w8cQbaWpFjS2be1U5lMG9tYfTjobgND8ksuUb%2BFHscIzUgOigVO3qvWfAeT3LKHX6vKodKGizgIiOP0%2FngVW5GkZGowfvmBVIJFcANU%2FJtMaauj4TZAiNpzx7RoupsBWqoLgUF0wn4B%2FEdhSyXFJ2vz6kxvoPng0puK5qmk4d6A3d%2Bq6LO2STQnRE5jGFj0YCV1Kb%2BRGjllfqydTsvkp4FZ%2F6XBi%2FJB%2B5VjaRkYk5HSumDxDP3a0UtW2fDxD6IKIhzkcX%2BZstVMnuiKdMWqweXCwa5eRTMRu%2FDhhOMxCbgf1BkBE5haJkgl4rmwbeikPI1QiSrrKkWAmrI8SsKi4io2%2FU6h8mCzaksxfAO7YJCA3Gfcj2i0JmouutO5Wba673XBuS0Whr3%2B%2FGZp%2FfbLr8q7LrJ4Sz3YSp6O79Zb%2FMk30jAkv4qYXepdBIdThAsZ6zNy5ld2nCBfmWtlvst1flLiFum72QsWL%2BM968MNGI0MIGOqUBbLlyyrAwAG2FtkOKTzyqm%2B6YaIZlm0GrrnDCPk6%2FRGaLehCcyv%2BEEVakfQd7rlLstPUbFwzXpH9gvpdKrW8quPvkI9Bl7qTrEY1c%2BAMQYlRM5MaSCsS%2Bn8km9%2FWFCnGLdXl3fqfkkHe9VtLcetCVTjAzz5571%2Fe78wRqAj8ORDxfGYEXbTrHRxpWUCCXBgZIstzS8nAsj24F3MxL9uIOEHJg8jeL&X-Amz-Signature=472f7771e5d8d66bc212cd92a839c2355cf3ec2db56354aa7353de06cabcca23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
