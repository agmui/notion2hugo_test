---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JUKIHHE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCtr5cIt2WDEhcfGTOFOLIv7RYj7Yyv0KSFM9wXVKNiKgIgDquYkw3iTYNrpCWNVGvcG%2BPEFvIc2QjyI2Bvt3WF1Nsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDrCZYSAKCCZlSrD3CrcA%2BbZKsdf%2FvQKHCtS1N6bFM5Y5mAcwmNga%2FqdeBoa3qLLIA6RbyFg0GbSkSBDFfVIXfw2yNXXD2McAYBG%2F54uz7mouR%2F2lFiegTPZCzvUH55Oqt7PGO1Hyldv9vIuSKMrEDiUd2fxf3Y3crC6FIsZ2FuXI%2FlOH82czeLYt7lBYK%2FgEftzyqTXnXlkTEKOhxRj4Oh5EAuuR0%2Bd2%2FjaNM7iIRFTo8jkauPqWXjPxmylaXnX332aLpdzuEr%2FGTqCHgLdzDzrl7aZ3H4s0Vz7iuAL01dFhzTcO2EiV%2BGC41FwRCBJEUckmZ0N%2FQ2lxvRS8dezKgvmhF3DNt9tCH4c4FAg1U31%2FCoi5wQAhZO9tlhIVaIIeRosyuNwds06pBVBGUV7IsYVfE6RJp95euUKyBNmf95VTbpoDx62dWQBF0%2FeBGJOXNIW6RDhhZTUftwVIx7DSg6PR9LCiY1Ek2TLTp%2Blc07QGUCLMsR5xKjBk42ksgfcSnppJEWtco2%2Ffy0Yn6ZUmKfd7zwWkG39%2BYlRrhz%2Fm8w3NCWK%2Fm2xiUmfz8DUYjdxUcMJxQ5RFlI67H8dYvkwc72SwafRDvz1pzkaK8nVdLomi0vNC3L1ckwz6bbb7lpXc1nqkMRUxCyZwzyIMLTUicQGOqUBkxxxAb6qHoMXssXArCAYvyabcT4974VMw%2FdJZntFq0HmKnHjb4zQ3y17n0vzhMPTu7W7CL5HmoyZXXAKpqQSMFuFtUk0HDejuMMYKH%2BdOaUKLg3GMXTv1QpLq73w9e64HrDJMec7T4lysx87kW6MglRHpfunqMYBmRBW99rcstHFO%2B%2FXiuscmWTcqmHc36Wg49b8G8b69Ml026iLHH7MZGe%2BYr4O&X-Amz-Signature=ed7fbb8b5c226371278801a57d17c0d8d76284ee4ef6844e2a90992b426560b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JUKIHHE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCtr5cIt2WDEhcfGTOFOLIv7RYj7Yyv0KSFM9wXVKNiKgIgDquYkw3iTYNrpCWNVGvcG%2BPEFvIc2QjyI2Bvt3WF1Nsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDrCZYSAKCCZlSrD3CrcA%2BbZKsdf%2FvQKHCtS1N6bFM5Y5mAcwmNga%2FqdeBoa3qLLIA6RbyFg0GbSkSBDFfVIXfw2yNXXD2McAYBG%2F54uz7mouR%2F2lFiegTPZCzvUH55Oqt7PGO1Hyldv9vIuSKMrEDiUd2fxf3Y3crC6FIsZ2FuXI%2FlOH82czeLYt7lBYK%2FgEftzyqTXnXlkTEKOhxRj4Oh5EAuuR0%2Bd2%2FjaNM7iIRFTo8jkauPqWXjPxmylaXnX332aLpdzuEr%2FGTqCHgLdzDzrl7aZ3H4s0Vz7iuAL01dFhzTcO2EiV%2BGC41FwRCBJEUckmZ0N%2FQ2lxvRS8dezKgvmhF3DNt9tCH4c4FAg1U31%2FCoi5wQAhZO9tlhIVaIIeRosyuNwds06pBVBGUV7IsYVfE6RJp95euUKyBNmf95VTbpoDx62dWQBF0%2FeBGJOXNIW6RDhhZTUftwVIx7DSg6PR9LCiY1Ek2TLTp%2Blc07QGUCLMsR5xKjBk42ksgfcSnppJEWtco2%2Ffy0Yn6ZUmKfd7zwWkG39%2BYlRrhz%2Fm8w3NCWK%2Fm2xiUmfz8DUYjdxUcMJxQ5RFlI67H8dYvkwc72SwafRDvz1pzkaK8nVdLomi0vNC3L1ckwz6bbb7lpXc1nqkMRUxCyZwzyIMLTUicQGOqUBkxxxAb6qHoMXssXArCAYvyabcT4974VMw%2FdJZntFq0HmKnHjb4zQ3y17n0vzhMPTu7W7CL5HmoyZXXAKpqQSMFuFtUk0HDejuMMYKH%2BdOaUKLg3GMXTv1QpLq73w9e64HrDJMec7T4lysx87kW6MglRHpfunqMYBmRBW99rcstHFO%2B%2FXiuscmWTcqmHc36Wg49b8G8b69Ml026iLHH7MZGe%2BYr4O&X-Amz-Signature=0dac9d96a2d0c8c833ac4a652f11ea6f8c08656712cbcbb6e1018c151cb395b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JUKIHHE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCtr5cIt2WDEhcfGTOFOLIv7RYj7Yyv0KSFM9wXVKNiKgIgDquYkw3iTYNrpCWNVGvcG%2BPEFvIc2QjyI2Bvt3WF1Nsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDrCZYSAKCCZlSrD3CrcA%2BbZKsdf%2FvQKHCtS1N6bFM5Y5mAcwmNga%2FqdeBoa3qLLIA6RbyFg0GbSkSBDFfVIXfw2yNXXD2McAYBG%2F54uz7mouR%2F2lFiegTPZCzvUH55Oqt7PGO1Hyldv9vIuSKMrEDiUd2fxf3Y3crC6FIsZ2FuXI%2FlOH82czeLYt7lBYK%2FgEftzyqTXnXlkTEKOhxRj4Oh5EAuuR0%2Bd2%2FjaNM7iIRFTo8jkauPqWXjPxmylaXnX332aLpdzuEr%2FGTqCHgLdzDzrl7aZ3H4s0Vz7iuAL01dFhzTcO2EiV%2BGC41FwRCBJEUckmZ0N%2FQ2lxvRS8dezKgvmhF3DNt9tCH4c4FAg1U31%2FCoi5wQAhZO9tlhIVaIIeRosyuNwds06pBVBGUV7IsYVfE6RJp95euUKyBNmf95VTbpoDx62dWQBF0%2FeBGJOXNIW6RDhhZTUftwVIx7DSg6PR9LCiY1Ek2TLTp%2Blc07QGUCLMsR5xKjBk42ksgfcSnppJEWtco2%2Ffy0Yn6ZUmKfd7zwWkG39%2BYlRrhz%2Fm8w3NCWK%2Fm2xiUmfz8DUYjdxUcMJxQ5RFlI67H8dYvkwc72SwafRDvz1pzkaK8nVdLomi0vNC3L1ckwz6bbb7lpXc1nqkMRUxCyZwzyIMLTUicQGOqUBkxxxAb6qHoMXssXArCAYvyabcT4974VMw%2FdJZntFq0HmKnHjb4zQ3y17n0vzhMPTu7W7CL5HmoyZXXAKpqQSMFuFtUk0HDejuMMYKH%2BdOaUKLg3GMXTv1QpLq73w9e64HrDJMec7T4lysx87kW6MglRHpfunqMYBmRBW99rcstHFO%2B%2FXiuscmWTcqmHc36Wg49b8G8b69Ml026iLHH7MZGe%2BYr4O&X-Amz-Signature=377d2ff1d781e098ed1894b744fed5e2d3ceb87d6914f69bcdec4f595322f256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JUKIHHE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCtr5cIt2WDEhcfGTOFOLIv7RYj7Yyv0KSFM9wXVKNiKgIgDquYkw3iTYNrpCWNVGvcG%2BPEFvIc2QjyI2Bvt3WF1Nsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDrCZYSAKCCZlSrD3CrcA%2BbZKsdf%2FvQKHCtS1N6bFM5Y5mAcwmNga%2FqdeBoa3qLLIA6RbyFg0GbSkSBDFfVIXfw2yNXXD2McAYBG%2F54uz7mouR%2F2lFiegTPZCzvUH55Oqt7PGO1Hyldv9vIuSKMrEDiUd2fxf3Y3crC6FIsZ2FuXI%2FlOH82czeLYt7lBYK%2FgEftzyqTXnXlkTEKOhxRj4Oh5EAuuR0%2Bd2%2FjaNM7iIRFTo8jkauPqWXjPxmylaXnX332aLpdzuEr%2FGTqCHgLdzDzrl7aZ3H4s0Vz7iuAL01dFhzTcO2EiV%2BGC41FwRCBJEUckmZ0N%2FQ2lxvRS8dezKgvmhF3DNt9tCH4c4FAg1U31%2FCoi5wQAhZO9tlhIVaIIeRosyuNwds06pBVBGUV7IsYVfE6RJp95euUKyBNmf95VTbpoDx62dWQBF0%2FeBGJOXNIW6RDhhZTUftwVIx7DSg6PR9LCiY1Ek2TLTp%2Blc07QGUCLMsR5xKjBk42ksgfcSnppJEWtco2%2Ffy0Yn6ZUmKfd7zwWkG39%2BYlRrhz%2Fm8w3NCWK%2Fm2xiUmfz8DUYjdxUcMJxQ5RFlI67H8dYvkwc72SwafRDvz1pzkaK8nVdLomi0vNC3L1ckwz6bbb7lpXc1nqkMRUxCyZwzyIMLTUicQGOqUBkxxxAb6qHoMXssXArCAYvyabcT4974VMw%2FdJZntFq0HmKnHjb4zQ3y17n0vzhMPTu7W7CL5HmoyZXXAKpqQSMFuFtUk0HDejuMMYKH%2BdOaUKLg3GMXTv1QpLq73w9e64HrDJMec7T4lysx87kW6MglRHpfunqMYBmRBW99rcstHFO%2B%2FXiuscmWTcqmHc36Wg49b8G8b69Ml026iLHH7MZGe%2BYr4O&X-Amz-Signature=2d0ea049289b84bf58b3cf4df6b041cc28580b355935517f3ad6550753643819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JUKIHHE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCtr5cIt2WDEhcfGTOFOLIv7RYj7Yyv0KSFM9wXVKNiKgIgDquYkw3iTYNrpCWNVGvcG%2BPEFvIc2QjyI2Bvt3WF1Nsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDrCZYSAKCCZlSrD3CrcA%2BbZKsdf%2FvQKHCtS1N6bFM5Y5mAcwmNga%2FqdeBoa3qLLIA6RbyFg0GbSkSBDFfVIXfw2yNXXD2McAYBG%2F54uz7mouR%2F2lFiegTPZCzvUH55Oqt7PGO1Hyldv9vIuSKMrEDiUd2fxf3Y3crC6FIsZ2FuXI%2FlOH82czeLYt7lBYK%2FgEftzyqTXnXlkTEKOhxRj4Oh5EAuuR0%2Bd2%2FjaNM7iIRFTo8jkauPqWXjPxmylaXnX332aLpdzuEr%2FGTqCHgLdzDzrl7aZ3H4s0Vz7iuAL01dFhzTcO2EiV%2BGC41FwRCBJEUckmZ0N%2FQ2lxvRS8dezKgvmhF3DNt9tCH4c4FAg1U31%2FCoi5wQAhZO9tlhIVaIIeRosyuNwds06pBVBGUV7IsYVfE6RJp95euUKyBNmf95VTbpoDx62dWQBF0%2FeBGJOXNIW6RDhhZTUftwVIx7DSg6PR9LCiY1Ek2TLTp%2Blc07QGUCLMsR5xKjBk42ksgfcSnppJEWtco2%2Ffy0Yn6ZUmKfd7zwWkG39%2BYlRrhz%2Fm8w3NCWK%2Fm2xiUmfz8DUYjdxUcMJxQ5RFlI67H8dYvkwc72SwafRDvz1pzkaK8nVdLomi0vNC3L1ckwz6bbb7lpXc1nqkMRUxCyZwzyIMLTUicQGOqUBkxxxAb6qHoMXssXArCAYvyabcT4974VMw%2FdJZntFq0HmKnHjb4zQ3y17n0vzhMPTu7W7CL5HmoyZXXAKpqQSMFuFtUk0HDejuMMYKH%2BdOaUKLg3GMXTv1QpLq73w9e64HrDJMec7T4lysx87kW6MglRHpfunqMYBmRBW99rcstHFO%2B%2FXiuscmWTcqmHc36Wg49b8G8b69Ml026iLHH7MZGe%2BYr4O&X-Amz-Signature=d413fecb20b0df0f5b986188b871e9a4ca38f1d5f54da32ee77f3486454cba11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JUKIHHE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCtr5cIt2WDEhcfGTOFOLIv7RYj7Yyv0KSFM9wXVKNiKgIgDquYkw3iTYNrpCWNVGvcG%2BPEFvIc2QjyI2Bvt3WF1Nsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDrCZYSAKCCZlSrD3CrcA%2BbZKsdf%2FvQKHCtS1N6bFM5Y5mAcwmNga%2FqdeBoa3qLLIA6RbyFg0GbSkSBDFfVIXfw2yNXXD2McAYBG%2F54uz7mouR%2F2lFiegTPZCzvUH55Oqt7PGO1Hyldv9vIuSKMrEDiUd2fxf3Y3crC6FIsZ2FuXI%2FlOH82czeLYt7lBYK%2FgEftzyqTXnXlkTEKOhxRj4Oh5EAuuR0%2Bd2%2FjaNM7iIRFTo8jkauPqWXjPxmylaXnX332aLpdzuEr%2FGTqCHgLdzDzrl7aZ3H4s0Vz7iuAL01dFhzTcO2EiV%2BGC41FwRCBJEUckmZ0N%2FQ2lxvRS8dezKgvmhF3DNt9tCH4c4FAg1U31%2FCoi5wQAhZO9tlhIVaIIeRosyuNwds06pBVBGUV7IsYVfE6RJp95euUKyBNmf95VTbpoDx62dWQBF0%2FeBGJOXNIW6RDhhZTUftwVIx7DSg6PR9LCiY1Ek2TLTp%2Blc07QGUCLMsR5xKjBk42ksgfcSnppJEWtco2%2Ffy0Yn6ZUmKfd7zwWkG39%2BYlRrhz%2Fm8w3NCWK%2Fm2xiUmfz8DUYjdxUcMJxQ5RFlI67H8dYvkwc72SwafRDvz1pzkaK8nVdLomi0vNC3L1ckwz6bbb7lpXc1nqkMRUxCyZwzyIMLTUicQGOqUBkxxxAb6qHoMXssXArCAYvyabcT4974VMw%2FdJZntFq0HmKnHjb4zQ3y17n0vzhMPTu7W7CL5HmoyZXXAKpqQSMFuFtUk0HDejuMMYKH%2BdOaUKLg3GMXTv1QpLq73w9e64HrDJMec7T4lysx87kW6MglRHpfunqMYBmRBW99rcstHFO%2B%2FXiuscmWTcqmHc36Wg49b8G8b69Ml026iLHH7MZGe%2BYr4O&X-Amz-Signature=d585d85297ffad358cbc4347d8af58223064c38bd5148e237eaaee0d2dc95151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JUKIHHE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCtr5cIt2WDEhcfGTOFOLIv7RYj7Yyv0KSFM9wXVKNiKgIgDquYkw3iTYNrpCWNVGvcG%2BPEFvIc2QjyI2Bvt3WF1Nsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDrCZYSAKCCZlSrD3CrcA%2BbZKsdf%2FvQKHCtS1N6bFM5Y5mAcwmNga%2FqdeBoa3qLLIA6RbyFg0GbSkSBDFfVIXfw2yNXXD2McAYBG%2F54uz7mouR%2F2lFiegTPZCzvUH55Oqt7PGO1Hyldv9vIuSKMrEDiUd2fxf3Y3crC6FIsZ2FuXI%2FlOH82czeLYt7lBYK%2FgEftzyqTXnXlkTEKOhxRj4Oh5EAuuR0%2Bd2%2FjaNM7iIRFTo8jkauPqWXjPxmylaXnX332aLpdzuEr%2FGTqCHgLdzDzrl7aZ3H4s0Vz7iuAL01dFhzTcO2EiV%2BGC41FwRCBJEUckmZ0N%2FQ2lxvRS8dezKgvmhF3DNt9tCH4c4FAg1U31%2FCoi5wQAhZO9tlhIVaIIeRosyuNwds06pBVBGUV7IsYVfE6RJp95euUKyBNmf95VTbpoDx62dWQBF0%2FeBGJOXNIW6RDhhZTUftwVIx7DSg6PR9LCiY1Ek2TLTp%2Blc07QGUCLMsR5xKjBk42ksgfcSnppJEWtco2%2Ffy0Yn6ZUmKfd7zwWkG39%2BYlRrhz%2Fm8w3NCWK%2Fm2xiUmfz8DUYjdxUcMJxQ5RFlI67H8dYvkwc72SwafRDvz1pzkaK8nVdLomi0vNC3L1ckwz6bbb7lpXc1nqkMRUxCyZwzyIMLTUicQGOqUBkxxxAb6qHoMXssXArCAYvyabcT4974VMw%2FdJZntFq0HmKnHjb4zQ3y17n0vzhMPTu7W7CL5HmoyZXXAKpqQSMFuFtUk0HDejuMMYKH%2BdOaUKLg3GMXTv1QpLq73w9e64HrDJMec7T4lysx87kW6MglRHpfunqMYBmRBW99rcstHFO%2B%2FXiuscmWTcqmHc36Wg49b8G8b69Ml026iLHH7MZGe%2BYr4O&X-Amz-Signature=d122f0c076fa34024920ab4e873cfceb050d0d751e29ebc6d7d6a8dc0c17f881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
