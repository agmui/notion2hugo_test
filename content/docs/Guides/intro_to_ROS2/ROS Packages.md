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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVMV3ROV%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZc0IP%2Fegk0u9xUgGQtPR5F2o6RFwLyKJyEK9UCLOnmwIhAKGmEDzNDMbTUwyLw2KijBz9c9h4%2Br%2BhqYasn2PWkYHYKv8DCDQQABoMNjM3NDIzMTgzODA1IgyG6YPkbMnW4YfD8Xkq3AM6C73YUlxMAi86jd%2Fe88WDVp0iN4vE%2BLHtSlE1OWEHc%2Fgk3o7TlKBELXFAJV5YAs2rxVlgFCcirHOdeiaovJ9woX47XC08QFQXyeKB5AbVTJLQgAfj4fCv06dInya4%2FoOKSpgx2Vy97YWIspuW1%2B0YnVmqDFC0McuQ8qNpELQ3BqqB5OQwFWqmqsOE8fyV1I5SsCgmuHsqI3FDQg8pDdLPj8ZDfEeTwAYp3id%2BPMJFHoO%2FvFXxWHTUWm2jFCeOpiuCPC0sroTlJGo8F6E9jF6IDrtmFNzICFscgoyG0SIVs5bIpFbtL4YJ2X0tKngihecAM0soK0yMIxudLCUFrOZ67W6W%2F5JauJUxuMCNaT2uGxCK8gjTnmFdxC2Y7AjAIpwfjCxhdptiU%2BxcpkIrJS9A01d17x1exyQjNr6CDKJhyU7Q6WMyMIFMmn62NisQcBLexJ9fmwFKOCfgwXaz2C%2BcbNomHBKqiAoCIY4gGkl5A803x15FwRBPTQ90v7Fhs8W4Gywdw9XVGSkEIJa81My8rSmxhQFp1BmY%2F6LXKc0cU1rbXseMKNI%2BEi%2F3V%2BylqnbzxyQuZXjhmKJhM4XljMjQuxyEqjRpkwmO403%2BD2006MpjxToLeXU%2FIOqVmzCylZG%2FBjqkAd4aaUi7191%2FxNW7T4oYm71WwaJebdvIWuI65YA7VbOeHdLBZzp%2BnIy6mzhiN%2F3kb0PvaHOeksTk0EahGaE2w%2Bn5Oi7PcVsWIN82o7Ii5hK9YZbf5%2F1Qcf4N9IODejotPWYpmXwpMrcgTbgjtJ14ly8O5e2yTilS7VET8joX6oIaQ8RRmqYrB25rTQdGusCf4J1NAhil2m3XRp3Ske55XbxLcdeE&X-Amz-Signature=7a9aed738b55a875827eb0edbc27706271c26163810ef379f51710953d4cd723&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVMV3ROV%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZc0IP%2Fegk0u9xUgGQtPR5F2o6RFwLyKJyEK9UCLOnmwIhAKGmEDzNDMbTUwyLw2KijBz9c9h4%2Br%2BhqYasn2PWkYHYKv8DCDQQABoMNjM3NDIzMTgzODA1IgyG6YPkbMnW4YfD8Xkq3AM6C73YUlxMAi86jd%2Fe88WDVp0iN4vE%2BLHtSlE1OWEHc%2Fgk3o7TlKBELXFAJV5YAs2rxVlgFCcirHOdeiaovJ9woX47XC08QFQXyeKB5AbVTJLQgAfj4fCv06dInya4%2FoOKSpgx2Vy97YWIspuW1%2B0YnVmqDFC0McuQ8qNpELQ3BqqB5OQwFWqmqsOE8fyV1I5SsCgmuHsqI3FDQg8pDdLPj8ZDfEeTwAYp3id%2BPMJFHoO%2FvFXxWHTUWm2jFCeOpiuCPC0sroTlJGo8F6E9jF6IDrtmFNzICFscgoyG0SIVs5bIpFbtL4YJ2X0tKngihecAM0soK0yMIxudLCUFrOZ67W6W%2F5JauJUxuMCNaT2uGxCK8gjTnmFdxC2Y7AjAIpwfjCxhdptiU%2BxcpkIrJS9A01d17x1exyQjNr6CDKJhyU7Q6WMyMIFMmn62NisQcBLexJ9fmwFKOCfgwXaz2C%2BcbNomHBKqiAoCIY4gGkl5A803x15FwRBPTQ90v7Fhs8W4Gywdw9XVGSkEIJa81My8rSmxhQFp1BmY%2F6LXKc0cU1rbXseMKNI%2BEi%2F3V%2BylqnbzxyQuZXjhmKJhM4XljMjQuxyEqjRpkwmO403%2BD2006MpjxToLeXU%2FIOqVmzCylZG%2FBjqkAd4aaUi7191%2FxNW7T4oYm71WwaJebdvIWuI65YA7VbOeHdLBZzp%2BnIy6mzhiN%2F3kb0PvaHOeksTk0EahGaE2w%2Bn5Oi7PcVsWIN82o7Ii5hK9YZbf5%2F1Qcf4N9IODejotPWYpmXwpMrcgTbgjtJ14ly8O5e2yTilS7VET8joX6oIaQ8RRmqYrB25rTQdGusCf4J1NAhil2m3XRp3Ske55XbxLcdeE&X-Amz-Signature=34820ce26caff48c675ecb0097bcc260271f2f27cdb7afb686943a01a91fdf07&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVMV3ROV%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZc0IP%2Fegk0u9xUgGQtPR5F2o6RFwLyKJyEK9UCLOnmwIhAKGmEDzNDMbTUwyLw2KijBz9c9h4%2Br%2BhqYasn2PWkYHYKv8DCDQQABoMNjM3NDIzMTgzODA1IgyG6YPkbMnW4YfD8Xkq3AM6C73YUlxMAi86jd%2Fe88WDVp0iN4vE%2BLHtSlE1OWEHc%2Fgk3o7TlKBELXFAJV5YAs2rxVlgFCcirHOdeiaovJ9woX47XC08QFQXyeKB5AbVTJLQgAfj4fCv06dInya4%2FoOKSpgx2Vy97YWIspuW1%2B0YnVmqDFC0McuQ8qNpELQ3BqqB5OQwFWqmqsOE8fyV1I5SsCgmuHsqI3FDQg8pDdLPj8ZDfEeTwAYp3id%2BPMJFHoO%2FvFXxWHTUWm2jFCeOpiuCPC0sroTlJGo8F6E9jF6IDrtmFNzICFscgoyG0SIVs5bIpFbtL4YJ2X0tKngihecAM0soK0yMIxudLCUFrOZ67W6W%2F5JauJUxuMCNaT2uGxCK8gjTnmFdxC2Y7AjAIpwfjCxhdptiU%2BxcpkIrJS9A01d17x1exyQjNr6CDKJhyU7Q6WMyMIFMmn62NisQcBLexJ9fmwFKOCfgwXaz2C%2BcbNomHBKqiAoCIY4gGkl5A803x15FwRBPTQ90v7Fhs8W4Gywdw9XVGSkEIJa81My8rSmxhQFp1BmY%2F6LXKc0cU1rbXseMKNI%2BEi%2F3V%2BylqnbzxyQuZXjhmKJhM4XljMjQuxyEqjRpkwmO403%2BD2006MpjxToLeXU%2FIOqVmzCylZG%2FBjqkAd4aaUi7191%2FxNW7T4oYm71WwaJebdvIWuI65YA7VbOeHdLBZzp%2BnIy6mzhiN%2F3kb0PvaHOeksTk0EahGaE2w%2Bn5Oi7PcVsWIN82o7Ii5hK9YZbf5%2F1Qcf4N9IODejotPWYpmXwpMrcgTbgjtJ14ly8O5e2yTilS7VET8joX6oIaQ8RRmqYrB25rTQdGusCf4J1NAhil2m3XRp3Ske55XbxLcdeE&X-Amz-Signature=7df385706d9daae43d5bd87497da9504b59f7ae443a8c5f6143b364d662e3ace&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVMV3ROV%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZc0IP%2Fegk0u9xUgGQtPR5F2o6RFwLyKJyEK9UCLOnmwIhAKGmEDzNDMbTUwyLw2KijBz9c9h4%2Br%2BhqYasn2PWkYHYKv8DCDQQABoMNjM3NDIzMTgzODA1IgyG6YPkbMnW4YfD8Xkq3AM6C73YUlxMAi86jd%2Fe88WDVp0iN4vE%2BLHtSlE1OWEHc%2Fgk3o7TlKBELXFAJV5YAs2rxVlgFCcirHOdeiaovJ9woX47XC08QFQXyeKB5AbVTJLQgAfj4fCv06dInya4%2FoOKSpgx2Vy97YWIspuW1%2B0YnVmqDFC0McuQ8qNpELQ3BqqB5OQwFWqmqsOE8fyV1I5SsCgmuHsqI3FDQg8pDdLPj8ZDfEeTwAYp3id%2BPMJFHoO%2FvFXxWHTUWm2jFCeOpiuCPC0sroTlJGo8F6E9jF6IDrtmFNzICFscgoyG0SIVs5bIpFbtL4YJ2X0tKngihecAM0soK0yMIxudLCUFrOZ67W6W%2F5JauJUxuMCNaT2uGxCK8gjTnmFdxC2Y7AjAIpwfjCxhdptiU%2BxcpkIrJS9A01d17x1exyQjNr6CDKJhyU7Q6WMyMIFMmn62NisQcBLexJ9fmwFKOCfgwXaz2C%2BcbNomHBKqiAoCIY4gGkl5A803x15FwRBPTQ90v7Fhs8W4Gywdw9XVGSkEIJa81My8rSmxhQFp1BmY%2F6LXKc0cU1rbXseMKNI%2BEi%2F3V%2BylqnbzxyQuZXjhmKJhM4XljMjQuxyEqjRpkwmO403%2BD2006MpjxToLeXU%2FIOqVmzCylZG%2FBjqkAd4aaUi7191%2FxNW7T4oYm71WwaJebdvIWuI65YA7VbOeHdLBZzp%2BnIy6mzhiN%2F3kb0PvaHOeksTk0EahGaE2w%2Bn5Oi7PcVsWIN82o7Ii5hK9YZbf5%2F1Qcf4N9IODejotPWYpmXwpMrcgTbgjtJ14ly8O5e2yTilS7VET8joX6oIaQ8RRmqYrB25rTQdGusCf4J1NAhil2m3XRp3Ske55XbxLcdeE&X-Amz-Signature=cdf956031d339dcbd42295edbd78a46dc78047af2aec6e1aa2b3730eaabc30af&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVMV3ROV%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZc0IP%2Fegk0u9xUgGQtPR5F2o6RFwLyKJyEK9UCLOnmwIhAKGmEDzNDMbTUwyLw2KijBz9c9h4%2Br%2BhqYasn2PWkYHYKv8DCDQQABoMNjM3NDIzMTgzODA1IgyG6YPkbMnW4YfD8Xkq3AM6C73YUlxMAi86jd%2Fe88WDVp0iN4vE%2BLHtSlE1OWEHc%2Fgk3o7TlKBELXFAJV5YAs2rxVlgFCcirHOdeiaovJ9woX47XC08QFQXyeKB5AbVTJLQgAfj4fCv06dInya4%2FoOKSpgx2Vy97YWIspuW1%2B0YnVmqDFC0McuQ8qNpELQ3BqqB5OQwFWqmqsOE8fyV1I5SsCgmuHsqI3FDQg8pDdLPj8ZDfEeTwAYp3id%2BPMJFHoO%2FvFXxWHTUWm2jFCeOpiuCPC0sroTlJGo8F6E9jF6IDrtmFNzICFscgoyG0SIVs5bIpFbtL4YJ2X0tKngihecAM0soK0yMIxudLCUFrOZ67W6W%2F5JauJUxuMCNaT2uGxCK8gjTnmFdxC2Y7AjAIpwfjCxhdptiU%2BxcpkIrJS9A01d17x1exyQjNr6CDKJhyU7Q6WMyMIFMmn62NisQcBLexJ9fmwFKOCfgwXaz2C%2BcbNomHBKqiAoCIY4gGkl5A803x15FwRBPTQ90v7Fhs8W4Gywdw9XVGSkEIJa81My8rSmxhQFp1BmY%2F6LXKc0cU1rbXseMKNI%2BEi%2F3V%2BylqnbzxyQuZXjhmKJhM4XljMjQuxyEqjRpkwmO403%2BD2006MpjxToLeXU%2FIOqVmzCylZG%2FBjqkAd4aaUi7191%2FxNW7T4oYm71WwaJebdvIWuI65YA7VbOeHdLBZzp%2BnIy6mzhiN%2F3kb0PvaHOeksTk0EahGaE2w%2Bn5Oi7PcVsWIN82o7Ii5hK9YZbf5%2F1Qcf4N9IODejotPWYpmXwpMrcgTbgjtJ14ly8O5e2yTilS7VET8joX6oIaQ8RRmqYrB25rTQdGusCf4J1NAhil2m3XRp3Ske55XbxLcdeE&X-Amz-Signature=1fc181ba70ac8037789eef962a873335b3261065371b9dbdd5c36ef3ca4870ce&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVMV3ROV%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZc0IP%2Fegk0u9xUgGQtPR5F2o6RFwLyKJyEK9UCLOnmwIhAKGmEDzNDMbTUwyLw2KijBz9c9h4%2Br%2BhqYasn2PWkYHYKv8DCDQQABoMNjM3NDIzMTgzODA1IgyG6YPkbMnW4YfD8Xkq3AM6C73YUlxMAi86jd%2Fe88WDVp0iN4vE%2BLHtSlE1OWEHc%2Fgk3o7TlKBELXFAJV5YAs2rxVlgFCcirHOdeiaovJ9woX47XC08QFQXyeKB5AbVTJLQgAfj4fCv06dInya4%2FoOKSpgx2Vy97YWIspuW1%2B0YnVmqDFC0McuQ8qNpELQ3BqqB5OQwFWqmqsOE8fyV1I5SsCgmuHsqI3FDQg8pDdLPj8ZDfEeTwAYp3id%2BPMJFHoO%2FvFXxWHTUWm2jFCeOpiuCPC0sroTlJGo8F6E9jF6IDrtmFNzICFscgoyG0SIVs5bIpFbtL4YJ2X0tKngihecAM0soK0yMIxudLCUFrOZ67W6W%2F5JauJUxuMCNaT2uGxCK8gjTnmFdxC2Y7AjAIpwfjCxhdptiU%2BxcpkIrJS9A01d17x1exyQjNr6CDKJhyU7Q6WMyMIFMmn62NisQcBLexJ9fmwFKOCfgwXaz2C%2BcbNomHBKqiAoCIY4gGkl5A803x15FwRBPTQ90v7Fhs8W4Gywdw9XVGSkEIJa81My8rSmxhQFp1BmY%2F6LXKc0cU1rbXseMKNI%2BEi%2F3V%2BylqnbzxyQuZXjhmKJhM4XljMjQuxyEqjRpkwmO403%2BD2006MpjxToLeXU%2FIOqVmzCylZG%2FBjqkAd4aaUi7191%2FxNW7T4oYm71WwaJebdvIWuI65YA7VbOeHdLBZzp%2BnIy6mzhiN%2F3kb0PvaHOeksTk0EahGaE2w%2Bn5Oi7PcVsWIN82o7Ii5hK9YZbf5%2F1Qcf4N9IODejotPWYpmXwpMrcgTbgjtJ14ly8O5e2yTilS7VET8joX6oIaQ8RRmqYrB25rTQdGusCf4J1NAhil2m3XRp3Ske55XbxLcdeE&X-Amz-Signature=4ec12a259d73f260164f54f1396c349652c6b6157092bb5dcef4cbdc0b19e49c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVMV3ROV%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZc0IP%2Fegk0u9xUgGQtPR5F2o6RFwLyKJyEK9UCLOnmwIhAKGmEDzNDMbTUwyLw2KijBz9c9h4%2Br%2BhqYasn2PWkYHYKv8DCDQQABoMNjM3NDIzMTgzODA1IgyG6YPkbMnW4YfD8Xkq3AM6C73YUlxMAi86jd%2Fe88WDVp0iN4vE%2BLHtSlE1OWEHc%2Fgk3o7TlKBELXFAJV5YAs2rxVlgFCcirHOdeiaovJ9woX47XC08QFQXyeKB5AbVTJLQgAfj4fCv06dInya4%2FoOKSpgx2Vy97YWIspuW1%2B0YnVmqDFC0McuQ8qNpELQ3BqqB5OQwFWqmqsOE8fyV1I5SsCgmuHsqI3FDQg8pDdLPj8ZDfEeTwAYp3id%2BPMJFHoO%2FvFXxWHTUWm2jFCeOpiuCPC0sroTlJGo8F6E9jF6IDrtmFNzICFscgoyG0SIVs5bIpFbtL4YJ2X0tKngihecAM0soK0yMIxudLCUFrOZ67W6W%2F5JauJUxuMCNaT2uGxCK8gjTnmFdxC2Y7AjAIpwfjCxhdptiU%2BxcpkIrJS9A01d17x1exyQjNr6CDKJhyU7Q6WMyMIFMmn62NisQcBLexJ9fmwFKOCfgwXaz2C%2BcbNomHBKqiAoCIY4gGkl5A803x15FwRBPTQ90v7Fhs8W4Gywdw9XVGSkEIJa81My8rSmxhQFp1BmY%2F6LXKc0cU1rbXseMKNI%2BEi%2F3V%2BylqnbzxyQuZXjhmKJhM4XljMjQuxyEqjRpkwmO403%2BD2006MpjxToLeXU%2FIOqVmzCylZG%2FBjqkAd4aaUi7191%2FxNW7T4oYm71WwaJebdvIWuI65YA7VbOeHdLBZzp%2BnIy6mzhiN%2F3kb0PvaHOeksTk0EahGaE2w%2Bn5Oi7PcVsWIN82o7Ii5hK9YZbf5%2F1Qcf4N9IODejotPWYpmXwpMrcgTbgjtJ14ly8O5e2yTilS7VET8joX6oIaQ8RRmqYrB25rTQdGusCf4J1NAhil2m3XRp3Ske55XbxLcdeE&X-Amz-Signature=85e0427f59bfe74967b440846788506c77d9ee7dfc96d52af64841d866cff497&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
