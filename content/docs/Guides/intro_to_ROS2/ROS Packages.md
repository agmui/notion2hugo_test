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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ4TVJ5U%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOt8lT%2Bf2myclg4yw7Hu%2F2%2BdBxxS%2FTOYDGFohm%2BcTGVQIhAIseTY2VstBf4ItjzkoE6BjtTRasTrR5oP83dt4OjWCoKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVb7MykxN8U1R8s48q3AP%2B7JWbCpnPhjL2TrsNbVDiLN8BbLMPDx7hKPmtw8NtxN3S%2Fy%2FNC5ZL72KfSaoGw2J3rsPvhC1MBd79fTX9DfREo8ZAXVYHsz82fONRFjCxzZUNHmYfIjs%2FYzCn3rstdHYqohZRdmiPHMiHFstPLslN5QTdUZ7TJ9xl9fkgbNB89N13ML%2Bbj8cY3ZQ7NpHC4kEJChCnyb%2B47e8My4b7srA59SPd6xNTXUGNKQIVEJ0CWa%2F0Ut99472a4pqq%2FxnFE17BLeJZfZ2e34lfjhgnRXTIgpAkCsUpmV17yDJb54meH0LnPv2sCwpn98sWfaqX40EuXB4z5iYK%2FkJ9WcicYBLHSHTI9%2FKu2J289acLZTN61mYDkS2SIjb5hpjxBdn0BFc2cdXBEjn9oRFpw4yI%2Bo7GfXH9LPhxIQH9CQkM25CRoKOv3LQ0H4dld6iZ9ubCo5jIBC00q%2FbBDwSiuyuZ9t9jMw84fM1jNa2xs8cGy9yff3CUgCDn3gnYa4eSeeYchqMhXHagIlMroZWtqGu3LWwoCZyl11U9d5nwrGWlS4EGSel60GgpxqxgRZPsYXz16yzvJvWq4FJjlSAYPJByf0pkHh3uZl0z4Wj20i8EG21SLPFQhLwfYx18w91%2BSDDInofDBjqkAdUTEXUQX%2B%2B%2BZERseN9zmipLzxcSAH9Q1clVr%2B%2FXfHfqz6r6ljo0d92yJml2Vpp9NLAv0jwYZMiLfprnaqmxyYH3YdmlQA1OO05ucDa%2FxOCr43E3SUm%2FTELHWYhooWF%2FSKLY1rY65NGRUPI8Sp%2FySmaKDy7q1likAL78N3zhwSJGkvSLrEl4D9hKFjndUMShMHNtFAOBGyY3bmoaju0qCAID6ejH&X-Amz-Signature=d20b21be5b29194d1a125a622d634f9bc0128409c4928e2fba46049cab5caddd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ4TVJ5U%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOt8lT%2Bf2myclg4yw7Hu%2F2%2BdBxxS%2FTOYDGFohm%2BcTGVQIhAIseTY2VstBf4ItjzkoE6BjtTRasTrR5oP83dt4OjWCoKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVb7MykxN8U1R8s48q3AP%2B7JWbCpnPhjL2TrsNbVDiLN8BbLMPDx7hKPmtw8NtxN3S%2Fy%2FNC5ZL72KfSaoGw2J3rsPvhC1MBd79fTX9DfREo8ZAXVYHsz82fONRFjCxzZUNHmYfIjs%2FYzCn3rstdHYqohZRdmiPHMiHFstPLslN5QTdUZ7TJ9xl9fkgbNB89N13ML%2Bbj8cY3ZQ7NpHC4kEJChCnyb%2B47e8My4b7srA59SPd6xNTXUGNKQIVEJ0CWa%2F0Ut99472a4pqq%2FxnFE17BLeJZfZ2e34lfjhgnRXTIgpAkCsUpmV17yDJb54meH0LnPv2sCwpn98sWfaqX40EuXB4z5iYK%2FkJ9WcicYBLHSHTI9%2FKu2J289acLZTN61mYDkS2SIjb5hpjxBdn0BFc2cdXBEjn9oRFpw4yI%2Bo7GfXH9LPhxIQH9CQkM25CRoKOv3LQ0H4dld6iZ9ubCo5jIBC00q%2FbBDwSiuyuZ9t9jMw84fM1jNa2xs8cGy9yff3CUgCDn3gnYa4eSeeYchqMhXHagIlMroZWtqGu3LWwoCZyl11U9d5nwrGWlS4EGSel60GgpxqxgRZPsYXz16yzvJvWq4FJjlSAYPJByf0pkHh3uZl0z4Wj20i8EG21SLPFQhLwfYx18w91%2BSDDInofDBjqkAdUTEXUQX%2B%2B%2BZERseN9zmipLzxcSAH9Q1clVr%2B%2FXfHfqz6r6ljo0d92yJml2Vpp9NLAv0jwYZMiLfprnaqmxyYH3YdmlQA1OO05ucDa%2FxOCr43E3SUm%2FTELHWYhooWF%2FSKLY1rY65NGRUPI8Sp%2FySmaKDy7q1likAL78N3zhwSJGkvSLrEl4D9hKFjndUMShMHNtFAOBGyY3bmoaju0qCAID6ejH&X-Amz-Signature=558ae8df251965d7f57b2ce037b45721ce64ba8801b7579a940b44e6a2cfce96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ4TVJ5U%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOt8lT%2Bf2myclg4yw7Hu%2F2%2BdBxxS%2FTOYDGFohm%2BcTGVQIhAIseTY2VstBf4ItjzkoE6BjtTRasTrR5oP83dt4OjWCoKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVb7MykxN8U1R8s48q3AP%2B7JWbCpnPhjL2TrsNbVDiLN8BbLMPDx7hKPmtw8NtxN3S%2Fy%2FNC5ZL72KfSaoGw2J3rsPvhC1MBd79fTX9DfREo8ZAXVYHsz82fONRFjCxzZUNHmYfIjs%2FYzCn3rstdHYqohZRdmiPHMiHFstPLslN5QTdUZ7TJ9xl9fkgbNB89N13ML%2Bbj8cY3ZQ7NpHC4kEJChCnyb%2B47e8My4b7srA59SPd6xNTXUGNKQIVEJ0CWa%2F0Ut99472a4pqq%2FxnFE17BLeJZfZ2e34lfjhgnRXTIgpAkCsUpmV17yDJb54meH0LnPv2sCwpn98sWfaqX40EuXB4z5iYK%2FkJ9WcicYBLHSHTI9%2FKu2J289acLZTN61mYDkS2SIjb5hpjxBdn0BFc2cdXBEjn9oRFpw4yI%2Bo7GfXH9LPhxIQH9CQkM25CRoKOv3LQ0H4dld6iZ9ubCo5jIBC00q%2FbBDwSiuyuZ9t9jMw84fM1jNa2xs8cGy9yff3CUgCDn3gnYa4eSeeYchqMhXHagIlMroZWtqGu3LWwoCZyl11U9d5nwrGWlS4EGSel60GgpxqxgRZPsYXz16yzvJvWq4FJjlSAYPJByf0pkHh3uZl0z4Wj20i8EG21SLPFQhLwfYx18w91%2BSDDInofDBjqkAdUTEXUQX%2B%2B%2BZERseN9zmipLzxcSAH9Q1clVr%2B%2FXfHfqz6r6ljo0d92yJml2Vpp9NLAv0jwYZMiLfprnaqmxyYH3YdmlQA1OO05ucDa%2FxOCr43E3SUm%2FTELHWYhooWF%2FSKLY1rY65NGRUPI8Sp%2FySmaKDy7q1likAL78N3zhwSJGkvSLrEl4D9hKFjndUMShMHNtFAOBGyY3bmoaju0qCAID6ejH&X-Amz-Signature=ef574eb1537315530adc3a7925b36b18b07c2df5a63d10bdd99ec31913505e72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ4TVJ5U%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOt8lT%2Bf2myclg4yw7Hu%2F2%2BdBxxS%2FTOYDGFohm%2BcTGVQIhAIseTY2VstBf4ItjzkoE6BjtTRasTrR5oP83dt4OjWCoKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVb7MykxN8U1R8s48q3AP%2B7JWbCpnPhjL2TrsNbVDiLN8BbLMPDx7hKPmtw8NtxN3S%2Fy%2FNC5ZL72KfSaoGw2J3rsPvhC1MBd79fTX9DfREo8ZAXVYHsz82fONRFjCxzZUNHmYfIjs%2FYzCn3rstdHYqohZRdmiPHMiHFstPLslN5QTdUZ7TJ9xl9fkgbNB89N13ML%2Bbj8cY3ZQ7NpHC4kEJChCnyb%2B47e8My4b7srA59SPd6xNTXUGNKQIVEJ0CWa%2F0Ut99472a4pqq%2FxnFE17BLeJZfZ2e34lfjhgnRXTIgpAkCsUpmV17yDJb54meH0LnPv2sCwpn98sWfaqX40EuXB4z5iYK%2FkJ9WcicYBLHSHTI9%2FKu2J289acLZTN61mYDkS2SIjb5hpjxBdn0BFc2cdXBEjn9oRFpw4yI%2Bo7GfXH9LPhxIQH9CQkM25CRoKOv3LQ0H4dld6iZ9ubCo5jIBC00q%2FbBDwSiuyuZ9t9jMw84fM1jNa2xs8cGy9yff3CUgCDn3gnYa4eSeeYchqMhXHagIlMroZWtqGu3LWwoCZyl11U9d5nwrGWlS4EGSel60GgpxqxgRZPsYXz16yzvJvWq4FJjlSAYPJByf0pkHh3uZl0z4Wj20i8EG21SLPFQhLwfYx18w91%2BSDDInofDBjqkAdUTEXUQX%2B%2B%2BZERseN9zmipLzxcSAH9Q1clVr%2B%2FXfHfqz6r6ljo0d92yJml2Vpp9NLAv0jwYZMiLfprnaqmxyYH3YdmlQA1OO05ucDa%2FxOCr43E3SUm%2FTELHWYhooWF%2FSKLY1rY65NGRUPI8Sp%2FySmaKDy7q1likAL78N3zhwSJGkvSLrEl4D9hKFjndUMShMHNtFAOBGyY3bmoaju0qCAID6ejH&X-Amz-Signature=3157dd599cee0ada81e02d05254368b2e69f930595faabd7be29ca893150ea1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ4TVJ5U%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOt8lT%2Bf2myclg4yw7Hu%2F2%2BdBxxS%2FTOYDGFohm%2BcTGVQIhAIseTY2VstBf4ItjzkoE6BjtTRasTrR5oP83dt4OjWCoKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVb7MykxN8U1R8s48q3AP%2B7JWbCpnPhjL2TrsNbVDiLN8BbLMPDx7hKPmtw8NtxN3S%2Fy%2FNC5ZL72KfSaoGw2J3rsPvhC1MBd79fTX9DfREo8ZAXVYHsz82fONRFjCxzZUNHmYfIjs%2FYzCn3rstdHYqohZRdmiPHMiHFstPLslN5QTdUZ7TJ9xl9fkgbNB89N13ML%2Bbj8cY3ZQ7NpHC4kEJChCnyb%2B47e8My4b7srA59SPd6xNTXUGNKQIVEJ0CWa%2F0Ut99472a4pqq%2FxnFE17BLeJZfZ2e34lfjhgnRXTIgpAkCsUpmV17yDJb54meH0LnPv2sCwpn98sWfaqX40EuXB4z5iYK%2FkJ9WcicYBLHSHTI9%2FKu2J289acLZTN61mYDkS2SIjb5hpjxBdn0BFc2cdXBEjn9oRFpw4yI%2Bo7GfXH9LPhxIQH9CQkM25CRoKOv3LQ0H4dld6iZ9ubCo5jIBC00q%2FbBDwSiuyuZ9t9jMw84fM1jNa2xs8cGy9yff3CUgCDn3gnYa4eSeeYchqMhXHagIlMroZWtqGu3LWwoCZyl11U9d5nwrGWlS4EGSel60GgpxqxgRZPsYXz16yzvJvWq4FJjlSAYPJByf0pkHh3uZl0z4Wj20i8EG21SLPFQhLwfYx18w91%2BSDDInofDBjqkAdUTEXUQX%2B%2B%2BZERseN9zmipLzxcSAH9Q1clVr%2B%2FXfHfqz6r6ljo0d92yJml2Vpp9NLAv0jwYZMiLfprnaqmxyYH3YdmlQA1OO05ucDa%2FxOCr43E3SUm%2FTELHWYhooWF%2FSKLY1rY65NGRUPI8Sp%2FySmaKDy7q1likAL78N3zhwSJGkvSLrEl4D9hKFjndUMShMHNtFAOBGyY3bmoaju0qCAID6ejH&X-Amz-Signature=0ab12f8ddd5cceb77edd08d57667755c6815776af8bce334c56ca4834a3aacf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ4TVJ5U%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOt8lT%2Bf2myclg4yw7Hu%2F2%2BdBxxS%2FTOYDGFohm%2BcTGVQIhAIseTY2VstBf4ItjzkoE6BjtTRasTrR5oP83dt4OjWCoKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVb7MykxN8U1R8s48q3AP%2B7JWbCpnPhjL2TrsNbVDiLN8BbLMPDx7hKPmtw8NtxN3S%2Fy%2FNC5ZL72KfSaoGw2J3rsPvhC1MBd79fTX9DfREo8ZAXVYHsz82fONRFjCxzZUNHmYfIjs%2FYzCn3rstdHYqohZRdmiPHMiHFstPLslN5QTdUZ7TJ9xl9fkgbNB89N13ML%2Bbj8cY3ZQ7NpHC4kEJChCnyb%2B47e8My4b7srA59SPd6xNTXUGNKQIVEJ0CWa%2F0Ut99472a4pqq%2FxnFE17BLeJZfZ2e34lfjhgnRXTIgpAkCsUpmV17yDJb54meH0LnPv2sCwpn98sWfaqX40EuXB4z5iYK%2FkJ9WcicYBLHSHTI9%2FKu2J289acLZTN61mYDkS2SIjb5hpjxBdn0BFc2cdXBEjn9oRFpw4yI%2Bo7GfXH9LPhxIQH9CQkM25CRoKOv3LQ0H4dld6iZ9ubCo5jIBC00q%2FbBDwSiuyuZ9t9jMw84fM1jNa2xs8cGy9yff3CUgCDn3gnYa4eSeeYchqMhXHagIlMroZWtqGu3LWwoCZyl11U9d5nwrGWlS4EGSel60GgpxqxgRZPsYXz16yzvJvWq4FJjlSAYPJByf0pkHh3uZl0z4Wj20i8EG21SLPFQhLwfYx18w91%2BSDDInofDBjqkAdUTEXUQX%2B%2B%2BZERseN9zmipLzxcSAH9Q1clVr%2B%2FXfHfqz6r6ljo0d92yJml2Vpp9NLAv0jwYZMiLfprnaqmxyYH3YdmlQA1OO05ucDa%2FxOCr43E3SUm%2FTELHWYhooWF%2FSKLY1rY65NGRUPI8Sp%2FySmaKDy7q1likAL78N3zhwSJGkvSLrEl4D9hKFjndUMShMHNtFAOBGyY3bmoaju0qCAID6ejH&X-Amz-Signature=fc6351cb3ea6576a43a84687b056cee2d30a6613f797f4a9fde835b1a3864624&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ4TVJ5U%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOt8lT%2Bf2myclg4yw7Hu%2F2%2BdBxxS%2FTOYDGFohm%2BcTGVQIhAIseTY2VstBf4ItjzkoE6BjtTRasTrR5oP83dt4OjWCoKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVb7MykxN8U1R8s48q3AP%2B7JWbCpnPhjL2TrsNbVDiLN8BbLMPDx7hKPmtw8NtxN3S%2Fy%2FNC5ZL72KfSaoGw2J3rsPvhC1MBd79fTX9DfREo8ZAXVYHsz82fONRFjCxzZUNHmYfIjs%2FYzCn3rstdHYqohZRdmiPHMiHFstPLslN5QTdUZ7TJ9xl9fkgbNB89N13ML%2Bbj8cY3ZQ7NpHC4kEJChCnyb%2B47e8My4b7srA59SPd6xNTXUGNKQIVEJ0CWa%2F0Ut99472a4pqq%2FxnFE17BLeJZfZ2e34lfjhgnRXTIgpAkCsUpmV17yDJb54meH0LnPv2sCwpn98sWfaqX40EuXB4z5iYK%2FkJ9WcicYBLHSHTI9%2FKu2J289acLZTN61mYDkS2SIjb5hpjxBdn0BFc2cdXBEjn9oRFpw4yI%2Bo7GfXH9LPhxIQH9CQkM25CRoKOv3LQ0H4dld6iZ9ubCo5jIBC00q%2FbBDwSiuyuZ9t9jMw84fM1jNa2xs8cGy9yff3CUgCDn3gnYa4eSeeYchqMhXHagIlMroZWtqGu3LWwoCZyl11U9d5nwrGWlS4EGSel60GgpxqxgRZPsYXz16yzvJvWq4FJjlSAYPJByf0pkHh3uZl0z4Wj20i8EG21SLPFQhLwfYx18w91%2BSDDInofDBjqkAdUTEXUQX%2B%2B%2BZERseN9zmipLzxcSAH9Q1clVr%2B%2FXfHfqz6r6ljo0d92yJml2Vpp9NLAv0jwYZMiLfprnaqmxyYH3YdmlQA1OO05ucDa%2FxOCr43E3SUm%2FTELHWYhooWF%2FSKLY1rY65NGRUPI8Sp%2FySmaKDy7q1likAL78N3zhwSJGkvSLrEl4D9hKFjndUMShMHNtFAOBGyY3bmoaju0qCAID6ejH&X-Amz-Signature=26fe06b2c7d618e36710d388efc8a7b951f4a171e473da574ca5781bee108ef2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
