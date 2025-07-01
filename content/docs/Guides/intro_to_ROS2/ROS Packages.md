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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KNYXPQS%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoHaDn27Fj3UBhSJZbTBgUIjkph1S0nvGv0EBOmhJTMAiEA6ccS4qVT2fsJOjiqy36vFiy8Y3XPM79ZMpJ39IPsgxgqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBcINYQ%2F6ya6iNyEircA%2BJ6q0AWH3BmQ7%2BpOoHC%2Fh6DlZeO%2BqWmhWbql49GImg376Pxn%2BAqm0j1jUVxUnkVmCvm5JCY7vmOvPsiGQ%2BiN1M2Fsr4rItONHjX1g4frYDXq%2Fq1skti1HzJkrx59ydbVK7KjkU%2B3h7pGFDpLTy31Yn0APiP%2B99UTFi4n3%2BL3Y2wgGL1qnmAPrGz828pkI1e88x1JtGPjLRaPLNSEHZrFJadZbFboWpVt8e80TQRx2o2ZsVmgwo7wS1Q6HHgJyPQ4QB9fMt00zeV8uGjdUdT4GbZYqwU8WhKfytJ6qKeS6Z5Aj%2Fm05z7akkjc98v6XtakBQoDVgx2iACbDF2LDVDdnHRs1hHfJx5c9Q7kmXom%2BYIbYbHiip70gjeqn%2F%2Fg5bw2dmWzkTHjfoEbC2E9ReHGF21yph2X2PqCzM7XlQTiHMQ8TpeWXHY1wkDxKMa19wBUcG%2BWwFFNRU7pYifCJ9pCvH9Ule4e0E6i3a4rs6fZnog6eGVE0Y8AI%2BAwNnmHQhRbfn2yqx3VSICDgJqt%2FpWhLLyXpXQA15digr2ab6yD4pq2twpYuyZXPo4owFSw8sSMAaB2u0FtuRBBLzjh4133th3qhIt6t2Hd38w8VrFExmH7PgS7zCN1%2F467eUAMLzOjsMGOqUBf310HXvsf3vrMa%2FjcUNlxHwoGi1OO49IwI4U6ZwLPtfg%2FUZ528dvgheqItmmXej8KrySSqofqGRoB7%2BdhJg8F%2BUZQsLojwXhTvZ4GBibO4reA8384eAxbGR2PnlyS4c69zo%2BzegV6UnTpYGwFCfubOz9nVuhFxIl9SpIAEpNQvPYPzCBLbbAp8aiXborAt8V%2F1%2BM96eqguIhq5Of0jp%2FQIdg7QIG&X-Amz-Signature=ea4d68c25c1e80eaa010b5f96b7c553c93f567fdf5f1f650e6b2f24957b194c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KNYXPQS%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoHaDn27Fj3UBhSJZbTBgUIjkph1S0nvGv0EBOmhJTMAiEA6ccS4qVT2fsJOjiqy36vFiy8Y3XPM79ZMpJ39IPsgxgqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBcINYQ%2F6ya6iNyEircA%2BJ6q0AWH3BmQ7%2BpOoHC%2Fh6DlZeO%2BqWmhWbql49GImg376Pxn%2BAqm0j1jUVxUnkVmCvm5JCY7vmOvPsiGQ%2BiN1M2Fsr4rItONHjX1g4frYDXq%2Fq1skti1HzJkrx59ydbVK7KjkU%2B3h7pGFDpLTy31Yn0APiP%2B99UTFi4n3%2BL3Y2wgGL1qnmAPrGz828pkI1e88x1JtGPjLRaPLNSEHZrFJadZbFboWpVt8e80TQRx2o2ZsVmgwo7wS1Q6HHgJyPQ4QB9fMt00zeV8uGjdUdT4GbZYqwU8WhKfytJ6qKeS6Z5Aj%2Fm05z7akkjc98v6XtakBQoDVgx2iACbDF2LDVDdnHRs1hHfJx5c9Q7kmXom%2BYIbYbHiip70gjeqn%2F%2Fg5bw2dmWzkTHjfoEbC2E9ReHGF21yph2X2PqCzM7XlQTiHMQ8TpeWXHY1wkDxKMa19wBUcG%2BWwFFNRU7pYifCJ9pCvH9Ule4e0E6i3a4rs6fZnog6eGVE0Y8AI%2BAwNnmHQhRbfn2yqx3VSICDgJqt%2FpWhLLyXpXQA15digr2ab6yD4pq2twpYuyZXPo4owFSw8sSMAaB2u0FtuRBBLzjh4133th3qhIt6t2Hd38w8VrFExmH7PgS7zCN1%2F467eUAMLzOjsMGOqUBf310HXvsf3vrMa%2FjcUNlxHwoGi1OO49IwI4U6ZwLPtfg%2FUZ528dvgheqItmmXej8KrySSqofqGRoB7%2BdhJg8F%2BUZQsLojwXhTvZ4GBibO4reA8384eAxbGR2PnlyS4c69zo%2BzegV6UnTpYGwFCfubOz9nVuhFxIl9SpIAEpNQvPYPzCBLbbAp8aiXborAt8V%2F1%2BM96eqguIhq5Of0jp%2FQIdg7QIG&X-Amz-Signature=842bb661a75f52dbd925b6243e688a1dd2e415899b86658cb1704ec043b1d18f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KNYXPQS%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoHaDn27Fj3UBhSJZbTBgUIjkph1S0nvGv0EBOmhJTMAiEA6ccS4qVT2fsJOjiqy36vFiy8Y3XPM79ZMpJ39IPsgxgqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBcINYQ%2F6ya6iNyEircA%2BJ6q0AWH3BmQ7%2BpOoHC%2Fh6DlZeO%2BqWmhWbql49GImg376Pxn%2BAqm0j1jUVxUnkVmCvm5JCY7vmOvPsiGQ%2BiN1M2Fsr4rItONHjX1g4frYDXq%2Fq1skti1HzJkrx59ydbVK7KjkU%2B3h7pGFDpLTy31Yn0APiP%2B99UTFi4n3%2BL3Y2wgGL1qnmAPrGz828pkI1e88x1JtGPjLRaPLNSEHZrFJadZbFboWpVt8e80TQRx2o2ZsVmgwo7wS1Q6HHgJyPQ4QB9fMt00zeV8uGjdUdT4GbZYqwU8WhKfytJ6qKeS6Z5Aj%2Fm05z7akkjc98v6XtakBQoDVgx2iACbDF2LDVDdnHRs1hHfJx5c9Q7kmXom%2BYIbYbHiip70gjeqn%2F%2Fg5bw2dmWzkTHjfoEbC2E9ReHGF21yph2X2PqCzM7XlQTiHMQ8TpeWXHY1wkDxKMa19wBUcG%2BWwFFNRU7pYifCJ9pCvH9Ule4e0E6i3a4rs6fZnog6eGVE0Y8AI%2BAwNnmHQhRbfn2yqx3VSICDgJqt%2FpWhLLyXpXQA15digr2ab6yD4pq2twpYuyZXPo4owFSw8sSMAaB2u0FtuRBBLzjh4133th3qhIt6t2Hd38w8VrFExmH7PgS7zCN1%2F467eUAMLzOjsMGOqUBf310HXvsf3vrMa%2FjcUNlxHwoGi1OO49IwI4U6ZwLPtfg%2FUZ528dvgheqItmmXej8KrySSqofqGRoB7%2BdhJg8F%2BUZQsLojwXhTvZ4GBibO4reA8384eAxbGR2PnlyS4c69zo%2BzegV6UnTpYGwFCfubOz9nVuhFxIl9SpIAEpNQvPYPzCBLbbAp8aiXborAt8V%2F1%2BM96eqguIhq5Of0jp%2FQIdg7QIG&X-Amz-Signature=59e990f3429a901883cf0d6ef9816557c51b92f6f21a9f42db2fca091947adf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KNYXPQS%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoHaDn27Fj3UBhSJZbTBgUIjkph1S0nvGv0EBOmhJTMAiEA6ccS4qVT2fsJOjiqy36vFiy8Y3XPM79ZMpJ39IPsgxgqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBcINYQ%2F6ya6iNyEircA%2BJ6q0AWH3BmQ7%2BpOoHC%2Fh6DlZeO%2BqWmhWbql49GImg376Pxn%2BAqm0j1jUVxUnkVmCvm5JCY7vmOvPsiGQ%2BiN1M2Fsr4rItONHjX1g4frYDXq%2Fq1skti1HzJkrx59ydbVK7KjkU%2B3h7pGFDpLTy31Yn0APiP%2B99UTFi4n3%2BL3Y2wgGL1qnmAPrGz828pkI1e88x1JtGPjLRaPLNSEHZrFJadZbFboWpVt8e80TQRx2o2ZsVmgwo7wS1Q6HHgJyPQ4QB9fMt00zeV8uGjdUdT4GbZYqwU8WhKfytJ6qKeS6Z5Aj%2Fm05z7akkjc98v6XtakBQoDVgx2iACbDF2LDVDdnHRs1hHfJx5c9Q7kmXom%2BYIbYbHiip70gjeqn%2F%2Fg5bw2dmWzkTHjfoEbC2E9ReHGF21yph2X2PqCzM7XlQTiHMQ8TpeWXHY1wkDxKMa19wBUcG%2BWwFFNRU7pYifCJ9pCvH9Ule4e0E6i3a4rs6fZnog6eGVE0Y8AI%2BAwNnmHQhRbfn2yqx3VSICDgJqt%2FpWhLLyXpXQA15digr2ab6yD4pq2twpYuyZXPo4owFSw8sSMAaB2u0FtuRBBLzjh4133th3qhIt6t2Hd38w8VrFExmH7PgS7zCN1%2F467eUAMLzOjsMGOqUBf310HXvsf3vrMa%2FjcUNlxHwoGi1OO49IwI4U6ZwLPtfg%2FUZ528dvgheqItmmXej8KrySSqofqGRoB7%2BdhJg8F%2BUZQsLojwXhTvZ4GBibO4reA8384eAxbGR2PnlyS4c69zo%2BzegV6UnTpYGwFCfubOz9nVuhFxIl9SpIAEpNQvPYPzCBLbbAp8aiXborAt8V%2F1%2BM96eqguIhq5Of0jp%2FQIdg7QIG&X-Amz-Signature=d1a80665e6a961d3398231efce1cd9ddfd8b893913167bfd26dd9c26b02d76cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KNYXPQS%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoHaDn27Fj3UBhSJZbTBgUIjkph1S0nvGv0EBOmhJTMAiEA6ccS4qVT2fsJOjiqy36vFiy8Y3XPM79ZMpJ39IPsgxgqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBcINYQ%2F6ya6iNyEircA%2BJ6q0AWH3BmQ7%2BpOoHC%2Fh6DlZeO%2BqWmhWbql49GImg376Pxn%2BAqm0j1jUVxUnkVmCvm5JCY7vmOvPsiGQ%2BiN1M2Fsr4rItONHjX1g4frYDXq%2Fq1skti1HzJkrx59ydbVK7KjkU%2B3h7pGFDpLTy31Yn0APiP%2B99UTFi4n3%2BL3Y2wgGL1qnmAPrGz828pkI1e88x1JtGPjLRaPLNSEHZrFJadZbFboWpVt8e80TQRx2o2ZsVmgwo7wS1Q6HHgJyPQ4QB9fMt00zeV8uGjdUdT4GbZYqwU8WhKfytJ6qKeS6Z5Aj%2Fm05z7akkjc98v6XtakBQoDVgx2iACbDF2LDVDdnHRs1hHfJx5c9Q7kmXom%2BYIbYbHiip70gjeqn%2F%2Fg5bw2dmWzkTHjfoEbC2E9ReHGF21yph2X2PqCzM7XlQTiHMQ8TpeWXHY1wkDxKMa19wBUcG%2BWwFFNRU7pYifCJ9pCvH9Ule4e0E6i3a4rs6fZnog6eGVE0Y8AI%2BAwNnmHQhRbfn2yqx3VSICDgJqt%2FpWhLLyXpXQA15digr2ab6yD4pq2twpYuyZXPo4owFSw8sSMAaB2u0FtuRBBLzjh4133th3qhIt6t2Hd38w8VrFExmH7PgS7zCN1%2F467eUAMLzOjsMGOqUBf310HXvsf3vrMa%2FjcUNlxHwoGi1OO49IwI4U6ZwLPtfg%2FUZ528dvgheqItmmXej8KrySSqofqGRoB7%2BdhJg8F%2BUZQsLojwXhTvZ4GBibO4reA8384eAxbGR2PnlyS4c69zo%2BzegV6UnTpYGwFCfubOz9nVuhFxIl9SpIAEpNQvPYPzCBLbbAp8aiXborAt8V%2F1%2BM96eqguIhq5Of0jp%2FQIdg7QIG&X-Amz-Signature=2a07d4dadfda49ef53fda9333ee0347bdeb7d24f86780aeda22168ad411fc3f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KNYXPQS%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoHaDn27Fj3UBhSJZbTBgUIjkph1S0nvGv0EBOmhJTMAiEA6ccS4qVT2fsJOjiqy36vFiy8Y3XPM79ZMpJ39IPsgxgqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBcINYQ%2F6ya6iNyEircA%2BJ6q0AWH3BmQ7%2BpOoHC%2Fh6DlZeO%2BqWmhWbql49GImg376Pxn%2BAqm0j1jUVxUnkVmCvm5JCY7vmOvPsiGQ%2BiN1M2Fsr4rItONHjX1g4frYDXq%2Fq1skti1HzJkrx59ydbVK7KjkU%2B3h7pGFDpLTy31Yn0APiP%2B99UTFi4n3%2BL3Y2wgGL1qnmAPrGz828pkI1e88x1JtGPjLRaPLNSEHZrFJadZbFboWpVt8e80TQRx2o2ZsVmgwo7wS1Q6HHgJyPQ4QB9fMt00zeV8uGjdUdT4GbZYqwU8WhKfytJ6qKeS6Z5Aj%2Fm05z7akkjc98v6XtakBQoDVgx2iACbDF2LDVDdnHRs1hHfJx5c9Q7kmXom%2BYIbYbHiip70gjeqn%2F%2Fg5bw2dmWzkTHjfoEbC2E9ReHGF21yph2X2PqCzM7XlQTiHMQ8TpeWXHY1wkDxKMa19wBUcG%2BWwFFNRU7pYifCJ9pCvH9Ule4e0E6i3a4rs6fZnog6eGVE0Y8AI%2BAwNnmHQhRbfn2yqx3VSICDgJqt%2FpWhLLyXpXQA15digr2ab6yD4pq2twpYuyZXPo4owFSw8sSMAaB2u0FtuRBBLzjh4133th3qhIt6t2Hd38w8VrFExmH7PgS7zCN1%2F467eUAMLzOjsMGOqUBf310HXvsf3vrMa%2FjcUNlxHwoGi1OO49IwI4U6ZwLPtfg%2FUZ528dvgheqItmmXej8KrySSqofqGRoB7%2BdhJg8F%2BUZQsLojwXhTvZ4GBibO4reA8384eAxbGR2PnlyS4c69zo%2BzegV6UnTpYGwFCfubOz9nVuhFxIl9SpIAEpNQvPYPzCBLbbAp8aiXborAt8V%2F1%2BM96eqguIhq5Of0jp%2FQIdg7QIG&X-Amz-Signature=a3cd622520b74f829069017707aeb5233009ea38e569322e293e3822eb906c28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KNYXPQS%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoHaDn27Fj3UBhSJZbTBgUIjkph1S0nvGv0EBOmhJTMAiEA6ccS4qVT2fsJOjiqy36vFiy8Y3XPM79ZMpJ39IPsgxgqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBcINYQ%2F6ya6iNyEircA%2BJ6q0AWH3BmQ7%2BpOoHC%2Fh6DlZeO%2BqWmhWbql49GImg376Pxn%2BAqm0j1jUVxUnkVmCvm5JCY7vmOvPsiGQ%2BiN1M2Fsr4rItONHjX1g4frYDXq%2Fq1skti1HzJkrx59ydbVK7KjkU%2B3h7pGFDpLTy31Yn0APiP%2B99UTFi4n3%2BL3Y2wgGL1qnmAPrGz828pkI1e88x1JtGPjLRaPLNSEHZrFJadZbFboWpVt8e80TQRx2o2ZsVmgwo7wS1Q6HHgJyPQ4QB9fMt00zeV8uGjdUdT4GbZYqwU8WhKfytJ6qKeS6Z5Aj%2Fm05z7akkjc98v6XtakBQoDVgx2iACbDF2LDVDdnHRs1hHfJx5c9Q7kmXom%2BYIbYbHiip70gjeqn%2F%2Fg5bw2dmWzkTHjfoEbC2E9ReHGF21yph2X2PqCzM7XlQTiHMQ8TpeWXHY1wkDxKMa19wBUcG%2BWwFFNRU7pYifCJ9pCvH9Ule4e0E6i3a4rs6fZnog6eGVE0Y8AI%2BAwNnmHQhRbfn2yqx3VSICDgJqt%2FpWhLLyXpXQA15digr2ab6yD4pq2twpYuyZXPo4owFSw8sSMAaB2u0FtuRBBLzjh4133th3qhIt6t2Hd38w8VrFExmH7PgS7zCN1%2F467eUAMLzOjsMGOqUBf310HXvsf3vrMa%2FjcUNlxHwoGi1OO49IwI4U6ZwLPtfg%2FUZ528dvgheqItmmXej8KrySSqofqGRoB7%2BdhJg8F%2BUZQsLojwXhTvZ4GBibO4reA8384eAxbGR2PnlyS4c69zo%2BzegV6UnTpYGwFCfubOz9nVuhFxIl9SpIAEpNQvPYPzCBLbbAp8aiXborAt8V%2F1%2BM96eqguIhq5Of0jp%2FQIdg7QIG&X-Amz-Signature=5cacbf486a427618b33b3bc1d8039e569238f3ba20ea9ed4a09532b390667c9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
