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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVUAZP4B%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCeLIE6WHNTf3Zqz8Ry6ZClMPu7qb7L0%2B2FbJ18cQ2r5gIgUXdhmMfewsBLsmEdcYNxue7HWx0Q46wUzEIyq9lqm%2FIq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDN7dyW7PQ%2Bgkm4wQ2CrcA5Rf57ujFZVKrLCbDQKoPDzhn05SGoNjE0SScOTbHmdKFhq%2B9U02UUK%2B%2Bm9YNK4WW0jT6ZWfzmkdkKlRJO0G7rofdRtI%2B3%2Fr%2BoCuGewvLOn1oNDCVdlN531Ka19dhuuSCGtWEzQBNX4mnwPTjLXNdBgiVpvIATDuDMLna2Pq%2FZUEyz9LICOd%2FHcvge3gFXyIr0d0c8SeJVstx%2Fc8S4Jfos5E9QeltisWEmioyVsQUKHTdQBfbPSQ7xTvV753p3lvdjbVLWtZo1kywTMPyKZAW1bA%2FVH0BNNR4oAnvUQ869HNJXrlBXCmJUVBRBirGhjYlnkEBFgihQw%2FaJqdIxsLd55ovmoG13RrRcFU95iwQkYndCcw3cg%2B7bgyXBEdNPwHcOy8gm4xxQP9IXUviRnx7ye%2ByA1TAYXiz34JBu7Crpp%2Fzjg5u2QiL7SAsxzncFJMSF%2FOR4Be6ycXjdzporaq%2F2hJUpB7jzXAIEt9B5vJTfkh9cPIKK4E8Fb5fHz7%2FYqU2%2B6sQyKe6t%2FRnsRFdc7MI9GHsbTOKtGqxElUC0i6cRz8LHpR2EJofkGJs4ZCtfo4WdzIPQN2v9%2BOrt0Elp%2FfnTiof5q3yCPcpLURDFhrIe8WZ3kcOQirP1QfvQJZMMmEhL0GOqUBcTVqrmLPNqp9Dt6k3q3yHpVCTBPC%2BXV8oYIAnX4%2FR2fp4fYbKQ65aFrBUUieUA7FDtOZmAOzCft%2By2WKpMNCHaQkhTt9Ejh%2FpEKKrFj09DSDiXQQGzfHIu%2FRy1BfW5drX2iNOFhZYeEWn%2BKEtdxiZPyO52VqBu%2F4bxlHviog0exQgO%2BNbeJSrl%2FErJgZ0PWDEWwouKLH54BPOHHS8jdK2zln%2FoD%2F&X-Amz-Signature=8d9ed8184f522935f6e11fa45e12a8f0cdf165afe94a4479076ba32cb63ff0fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVUAZP4B%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCeLIE6WHNTf3Zqz8Ry6ZClMPu7qb7L0%2B2FbJ18cQ2r5gIgUXdhmMfewsBLsmEdcYNxue7HWx0Q46wUzEIyq9lqm%2FIq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDN7dyW7PQ%2Bgkm4wQ2CrcA5Rf57ujFZVKrLCbDQKoPDzhn05SGoNjE0SScOTbHmdKFhq%2B9U02UUK%2B%2Bm9YNK4WW0jT6ZWfzmkdkKlRJO0G7rofdRtI%2B3%2Fr%2BoCuGewvLOn1oNDCVdlN531Ka19dhuuSCGtWEzQBNX4mnwPTjLXNdBgiVpvIATDuDMLna2Pq%2FZUEyz9LICOd%2FHcvge3gFXyIr0d0c8SeJVstx%2Fc8S4Jfos5E9QeltisWEmioyVsQUKHTdQBfbPSQ7xTvV753p3lvdjbVLWtZo1kywTMPyKZAW1bA%2FVH0BNNR4oAnvUQ869HNJXrlBXCmJUVBRBirGhjYlnkEBFgihQw%2FaJqdIxsLd55ovmoG13RrRcFU95iwQkYndCcw3cg%2B7bgyXBEdNPwHcOy8gm4xxQP9IXUviRnx7ye%2ByA1TAYXiz34JBu7Crpp%2Fzjg5u2QiL7SAsxzncFJMSF%2FOR4Be6ycXjdzporaq%2F2hJUpB7jzXAIEt9B5vJTfkh9cPIKK4E8Fb5fHz7%2FYqU2%2B6sQyKe6t%2FRnsRFdc7MI9GHsbTOKtGqxElUC0i6cRz8LHpR2EJofkGJs4ZCtfo4WdzIPQN2v9%2BOrt0Elp%2FfnTiof5q3yCPcpLURDFhrIe8WZ3kcOQirP1QfvQJZMMmEhL0GOqUBcTVqrmLPNqp9Dt6k3q3yHpVCTBPC%2BXV8oYIAnX4%2FR2fp4fYbKQ65aFrBUUieUA7FDtOZmAOzCft%2By2WKpMNCHaQkhTt9Ejh%2FpEKKrFj09DSDiXQQGzfHIu%2FRy1BfW5drX2iNOFhZYeEWn%2BKEtdxiZPyO52VqBu%2F4bxlHviog0exQgO%2BNbeJSrl%2FErJgZ0PWDEWwouKLH54BPOHHS8jdK2zln%2FoD%2F&X-Amz-Signature=f7174c265c9694c729230955091fe1c25473878167a19f0160bc6e1067a96f67&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVUAZP4B%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCeLIE6WHNTf3Zqz8Ry6ZClMPu7qb7L0%2B2FbJ18cQ2r5gIgUXdhmMfewsBLsmEdcYNxue7HWx0Q46wUzEIyq9lqm%2FIq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDN7dyW7PQ%2Bgkm4wQ2CrcA5Rf57ujFZVKrLCbDQKoPDzhn05SGoNjE0SScOTbHmdKFhq%2B9U02UUK%2B%2Bm9YNK4WW0jT6ZWfzmkdkKlRJO0G7rofdRtI%2B3%2Fr%2BoCuGewvLOn1oNDCVdlN531Ka19dhuuSCGtWEzQBNX4mnwPTjLXNdBgiVpvIATDuDMLna2Pq%2FZUEyz9LICOd%2FHcvge3gFXyIr0d0c8SeJVstx%2Fc8S4Jfos5E9QeltisWEmioyVsQUKHTdQBfbPSQ7xTvV753p3lvdjbVLWtZo1kywTMPyKZAW1bA%2FVH0BNNR4oAnvUQ869HNJXrlBXCmJUVBRBirGhjYlnkEBFgihQw%2FaJqdIxsLd55ovmoG13RrRcFU95iwQkYndCcw3cg%2B7bgyXBEdNPwHcOy8gm4xxQP9IXUviRnx7ye%2ByA1TAYXiz34JBu7Crpp%2Fzjg5u2QiL7SAsxzncFJMSF%2FOR4Be6ycXjdzporaq%2F2hJUpB7jzXAIEt9B5vJTfkh9cPIKK4E8Fb5fHz7%2FYqU2%2B6sQyKe6t%2FRnsRFdc7MI9GHsbTOKtGqxElUC0i6cRz8LHpR2EJofkGJs4ZCtfo4WdzIPQN2v9%2BOrt0Elp%2FfnTiof5q3yCPcpLURDFhrIe8WZ3kcOQirP1QfvQJZMMmEhL0GOqUBcTVqrmLPNqp9Dt6k3q3yHpVCTBPC%2BXV8oYIAnX4%2FR2fp4fYbKQ65aFrBUUieUA7FDtOZmAOzCft%2By2WKpMNCHaQkhTt9Ejh%2FpEKKrFj09DSDiXQQGzfHIu%2FRy1BfW5drX2iNOFhZYeEWn%2BKEtdxiZPyO52VqBu%2F4bxlHviog0exQgO%2BNbeJSrl%2FErJgZ0PWDEWwouKLH54BPOHHS8jdK2zln%2FoD%2F&X-Amz-Signature=7638e380856cd9b5d8c20ff300167e7bb0c6e590cbe16fc155528dee4916cf04&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVUAZP4B%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCeLIE6WHNTf3Zqz8Ry6ZClMPu7qb7L0%2B2FbJ18cQ2r5gIgUXdhmMfewsBLsmEdcYNxue7HWx0Q46wUzEIyq9lqm%2FIq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDN7dyW7PQ%2Bgkm4wQ2CrcA5Rf57ujFZVKrLCbDQKoPDzhn05SGoNjE0SScOTbHmdKFhq%2B9U02UUK%2B%2Bm9YNK4WW0jT6ZWfzmkdkKlRJO0G7rofdRtI%2B3%2Fr%2BoCuGewvLOn1oNDCVdlN531Ka19dhuuSCGtWEzQBNX4mnwPTjLXNdBgiVpvIATDuDMLna2Pq%2FZUEyz9LICOd%2FHcvge3gFXyIr0d0c8SeJVstx%2Fc8S4Jfos5E9QeltisWEmioyVsQUKHTdQBfbPSQ7xTvV753p3lvdjbVLWtZo1kywTMPyKZAW1bA%2FVH0BNNR4oAnvUQ869HNJXrlBXCmJUVBRBirGhjYlnkEBFgihQw%2FaJqdIxsLd55ovmoG13RrRcFU95iwQkYndCcw3cg%2B7bgyXBEdNPwHcOy8gm4xxQP9IXUviRnx7ye%2ByA1TAYXiz34JBu7Crpp%2Fzjg5u2QiL7SAsxzncFJMSF%2FOR4Be6ycXjdzporaq%2F2hJUpB7jzXAIEt9B5vJTfkh9cPIKK4E8Fb5fHz7%2FYqU2%2B6sQyKe6t%2FRnsRFdc7MI9GHsbTOKtGqxElUC0i6cRz8LHpR2EJofkGJs4ZCtfo4WdzIPQN2v9%2BOrt0Elp%2FfnTiof5q3yCPcpLURDFhrIe8WZ3kcOQirP1QfvQJZMMmEhL0GOqUBcTVqrmLPNqp9Dt6k3q3yHpVCTBPC%2BXV8oYIAnX4%2FR2fp4fYbKQ65aFrBUUieUA7FDtOZmAOzCft%2By2WKpMNCHaQkhTt9Ejh%2FpEKKrFj09DSDiXQQGzfHIu%2FRy1BfW5drX2iNOFhZYeEWn%2BKEtdxiZPyO52VqBu%2F4bxlHviog0exQgO%2BNbeJSrl%2FErJgZ0PWDEWwouKLH54BPOHHS8jdK2zln%2FoD%2F&X-Amz-Signature=38ead5ac468c55015187a098939e10c90769ae5e1b216e5bc58b4d42ab5d584a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVUAZP4B%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCeLIE6WHNTf3Zqz8Ry6ZClMPu7qb7L0%2B2FbJ18cQ2r5gIgUXdhmMfewsBLsmEdcYNxue7HWx0Q46wUzEIyq9lqm%2FIq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDN7dyW7PQ%2Bgkm4wQ2CrcA5Rf57ujFZVKrLCbDQKoPDzhn05SGoNjE0SScOTbHmdKFhq%2B9U02UUK%2B%2Bm9YNK4WW0jT6ZWfzmkdkKlRJO0G7rofdRtI%2B3%2Fr%2BoCuGewvLOn1oNDCVdlN531Ka19dhuuSCGtWEzQBNX4mnwPTjLXNdBgiVpvIATDuDMLna2Pq%2FZUEyz9LICOd%2FHcvge3gFXyIr0d0c8SeJVstx%2Fc8S4Jfos5E9QeltisWEmioyVsQUKHTdQBfbPSQ7xTvV753p3lvdjbVLWtZo1kywTMPyKZAW1bA%2FVH0BNNR4oAnvUQ869HNJXrlBXCmJUVBRBirGhjYlnkEBFgihQw%2FaJqdIxsLd55ovmoG13RrRcFU95iwQkYndCcw3cg%2B7bgyXBEdNPwHcOy8gm4xxQP9IXUviRnx7ye%2ByA1TAYXiz34JBu7Crpp%2Fzjg5u2QiL7SAsxzncFJMSF%2FOR4Be6ycXjdzporaq%2F2hJUpB7jzXAIEt9B5vJTfkh9cPIKK4E8Fb5fHz7%2FYqU2%2B6sQyKe6t%2FRnsRFdc7MI9GHsbTOKtGqxElUC0i6cRz8LHpR2EJofkGJs4ZCtfo4WdzIPQN2v9%2BOrt0Elp%2FfnTiof5q3yCPcpLURDFhrIe8WZ3kcOQirP1QfvQJZMMmEhL0GOqUBcTVqrmLPNqp9Dt6k3q3yHpVCTBPC%2BXV8oYIAnX4%2FR2fp4fYbKQ65aFrBUUieUA7FDtOZmAOzCft%2By2WKpMNCHaQkhTt9Ejh%2FpEKKrFj09DSDiXQQGzfHIu%2FRy1BfW5drX2iNOFhZYeEWn%2BKEtdxiZPyO52VqBu%2F4bxlHviog0exQgO%2BNbeJSrl%2FErJgZ0PWDEWwouKLH54BPOHHS8jdK2zln%2FoD%2F&X-Amz-Signature=e5dd5c1113e73c5e9ded99e798b5cbab4f1aed22c9d3cdbb7817dd047524e3d9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVUAZP4B%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCeLIE6WHNTf3Zqz8Ry6ZClMPu7qb7L0%2B2FbJ18cQ2r5gIgUXdhmMfewsBLsmEdcYNxue7HWx0Q46wUzEIyq9lqm%2FIq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDN7dyW7PQ%2Bgkm4wQ2CrcA5Rf57ujFZVKrLCbDQKoPDzhn05SGoNjE0SScOTbHmdKFhq%2B9U02UUK%2B%2Bm9YNK4WW0jT6ZWfzmkdkKlRJO0G7rofdRtI%2B3%2Fr%2BoCuGewvLOn1oNDCVdlN531Ka19dhuuSCGtWEzQBNX4mnwPTjLXNdBgiVpvIATDuDMLna2Pq%2FZUEyz9LICOd%2FHcvge3gFXyIr0d0c8SeJVstx%2Fc8S4Jfos5E9QeltisWEmioyVsQUKHTdQBfbPSQ7xTvV753p3lvdjbVLWtZo1kywTMPyKZAW1bA%2FVH0BNNR4oAnvUQ869HNJXrlBXCmJUVBRBirGhjYlnkEBFgihQw%2FaJqdIxsLd55ovmoG13RrRcFU95iwQkYndCcw3cg%2B7bgyXBEdNPwHcOy8gm4xxQP9IXUviRnx7ye%2ByA1TAYXiz34JBu7Crpp%2Fzjg5u2QiL7SAsxzncFJMSF%2FOR4Be6ycXjdzporaq%2F2hJUpB7jzXAIEt9B5vJTfkh9cPIKK4E8Fb5fHz7%2FYqU2%2B6sQyKe6t%2FRnsRFdc7MI9GHsbTOKtGqxElUC0i6cRz8LHpR2EJofkGJs4ZCtfo4WdzIPQN2v9%2BOrt0Elp%2FfnTiof5q3yCPcpLURDFhrIe8WZ3kcOQirP1QfvQJZMMmEhL0GOqUBcTVqrmLPNqp9Dt6k3q3yHpVCTBPC%2BXV8oYIAnX4%2FR2fp4fYbKQ65aFrBUUieUA7FDtOZmAOzCft%2By2WKpMNCHaQkhTt9Ejh%2FpEKKrFj09DSDiXQQGzfHIu%2FRy1BfW5drX2iNOFhZYeEWn%2BKEtdxiZPyO52VqBu%2F4bxlHviog0exQgO%2BNbeJSrl%2FErJgZ0PWDEWwouKLH54BPOHHS8jdK2zln%2FoD%2F&X-Amz-Signature=92e33eadab9708e00dd979e233ade4c282ca884ecdacbdec6ba13a2ec12adc70&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVUAZP4B%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCeLIE6WHNTf3Zqz8Ry6ZClMPu7qb7L0%2B2FbJ18cQ2r5gIgUXdhmMfewsBLsmEdcYNxue7HWx0Q46wUzEIyq9lqm%2FIq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDN7dyW7PQ%2Bgkm4wQ2CrcA5Rf57ujFZVKrLCbDQKoPDzhn05SGoNjE0SScOTbHmdKFhq%2B9U02UUK%2B%2Bm9YNK4WW0jT6ZWfzmkdkKlRJO0G7rofdRtI%2B3%2Fr%2BoCuGewvLOn1oNDCVdlN531Ka19dhuuSCGtWEzQBNX4mnwPTjLXNdBgiVpvIATDuDMLna2Pq%2FZUEyz9LICOd%2FHcvge3gFXyIr0d0c8SeJVstx%2Fc8S4Jfos5E9QeltisWEmioyVsQUKHTdQBfbPSQ7xTvV753p3lvdjbVLWtZo1kywTMPyKZAW1bA%2FVH0BNNR4oAnvUQ869HNJXrlBXCmJUVBRBirGhjYlnkEBFgihQw%2FaJqdIxsLd55ovmoG13RrRcFU95iwQkYndCcw3cg%2B7bgyXBEdNPwHcOy8gm4xxQP9IXUviRnx7ye%2ByA1TAYXiz34JBu7Crpp%2Fzjg5u2QiL7SAsxzncFJMSF%2FOR4Be6ycXjdzporaq%2F2hJUpB7jzXAIEt9B5vJTfkh9cPIKK4E8Fb5fHz7%2FYqU2%2B6sQyKe6t%2FRnsRFdc7MI9GHsbTOKtGqxElUC0i6cRz8LHpR2EJofkGJs4ZCtfo4WdzIPQN2v9%2BOrt0Elp%2FfnTiof5q3yCPcpLURDFhrIe8WZ3kcOQirP1QfvQJZMMmEhL0GOqUBcTVqrmLPNqp9Dt6k3q3yHpVCTBPC%2BXV8oYIAnX4%2FR2fp4fYbKQ65aFrBUUieUA7FDtOZmAOzCft%2By2WKpMNCHaQkhTt9Ejh%2FpEKKrFj09DSDiXQQGzfHIu%2FRy1BfW5drX2iNOFhZYeEWn%2BKEtdxiZPyO52VqBu%2F4bxlHviog0exQgO%2BNbeJSrl%2FErJgZ0PWDEWwouKLH54BPOHHS8jdK2zln%2FoD%2F&X-Amz-Signature=d6c9cd4cc92fed06d4dcf9307afb7d083ca203a3b6e433361ce0c2dcfe9d9ec3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
