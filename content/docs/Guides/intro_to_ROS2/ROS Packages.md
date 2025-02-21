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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PYQ42FT%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIvKPUJbelJoMWShVqrdxCUH%2BzELgfWCX1dcc0iNge4wIhAI7nkguWfv40lnyli9Rl4ETW2peBga38n4Kz9FErd5iwKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwItqhrqD2WjQQAEOoq3APmb9cwz348XBTNKACBDyfC8ZIRmnKX%2FqBL%2FuFXgPPCqTKiBerW0Pw8xgNjGoJL0IDrdcEn5W2aEIlnGbV2N02TTK8s6zbxjSjRS34Ye%2BgrxSToIx3yywhtpAwQYXllA6K6On%2B7tHJAd8sKeTRYNJVVx78wFKEE20meSNNjipkemFUHAcI%2Bx5USpWN1ex4M2MA1GvwIegS65SMY%2FeW60qhJ0fF9UQdG061F2bEEg7QWdMKWdaIX0sBj147zWoHahRDOLbAf1Wv15Rca0XwSQ6OTluQMV5qu%2Fn0Tzarp1Wym3ToBI7niB8DPq4yxTOA94S5iyiwcXdSbBE3bk3QaCV3k8RDwO0Q7OSSB5oY%2BuKPW9E1fqb1cLd%2FtwtD%2BJ6zE%2BE52a4vApTr5sEXkBLVIj2XakLhHrLBlC3P0VtF6pAzLvKL4qD36S8A4J0Upds5BHNu67JP00zVPiDtiFEsN1pMuXY4BlcdD9ROAvcW3QZZysyuLvcQ5fC6EHUkxGdM4X0PtoSX%2BwSfY2WUkLfoOFUJgxaiZtoVmJkuMk4RnVQ6WbsrdQ%2BirAx2Wb8kTBlphAxxdRpqH4T8DeoSF7oOAvesZkcGUDnv%2FeHQvdjDwDTSRd1Rp7c1TDkGA7VooejCcmeG9BjqkAdHyy35XqZnwswDGIo3qvbtp%2FpEa0XhYFw462wG5Z83DsdCerp0W20ABub0sTkTsbkSflzljIDa16ud6ih3s4ACK5N0sQGr2GWO7g3r%2F%2FiLavwq5vEt%2BC%2FTXgDiBIATBf9BT4N3pCRpZsbsa0D0dVHA9xuq3kNTl5%2BR7M6RiNGE0pmz16eAxfjExHohyCRGjLwaU8RF%2FO11L4%2FBoQ7SX2%2F6C02CR&X-Amz-Signature=44d9a9baba20b524ae90c07b211b5da02b43f5c34d961f1a2c110ae183bfc2ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PYQ42FT%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIvKPUJbelJoMWShVqrdxCUH%2BzELgfWCX1dcc0iNge4wIhAI7nkguWfv40lnyli9Rl4ETW2peBga38n4Kz9FErd5iwKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwItqhrqD2WjQQAEOoq3APmb9cwz348XBTNKACBDyfC8ZIRmnKX%2FqBL%2FuFXgPPCqTKiBerW0Pw8xgNjGoJL0IDrdcEn5W2aEIlnGbV2N02TTK8s6zbxjSjRS34Ye%2BgrxSToIx3yywhtpAwQYXllA6K6On%2B7tHJAd8sKeTRYNJVVx78wFKEE20meSNNjipkemFUHAcI%2Bx5USpWN1ex4M2MA1GvwIegS65SMY%2FeW60qhJ0fF9UQdG061F2bEEg7QWdMKWdaIX0sBj147zWoHahRDOLbAf1Wv15Rca0XwSQ6OTluQMV5qu%2Fn0Tzarp1Wym3ToBI7niB8DPq4yxTOA94S5iyiwcXdSbBE3bk3QaCV3k8RDwO0Q7OSSB5oY%2BuKPW9E1fqb1cLd%2FtwtD%2BJ6zE%2BE52a4vApTr5sEXkBLVIj2XakLhHrLBlC3P0VtF6pAzLvKL4qD36S8A4J0Upds5BHNu67JP00zVPiDtiFEsN1pMuXY4BlcdD9ROAvcW3QZZysyuLvcQ5fC6EHUkxGdM4X0PtoSX%2BwSfY2WUkLfoOFUJgxaiZtoVmJkuMk4RnVQ6WbsrdQ%2BirAx2Wb8kTBlphAxxdRpqH4T8DeoSF7oOAvesZkcGUDnv%2FeHQvdjDwDTSRd1Rp7c1TDkGA7VooejCcmeG9BjqkAdHyy35XqZnwswDGIo3qvbtp%2FpEa0XhYFw462wG5Z83DsdCerp0W20ABub0sTkTsbkSflzljIDa16ud6ih3s4ACK5N0sQGr2GWO7g3r%2F%2FiLavwq5vEt%2BC%2FTXgDiBIATBf9BT4N3pCRpZsbsa0D0dVHA9xuq3kNTl5%2BR7M6RiNGE0pmz16eAxfjExHohyCRGjLwaU8RF%2FO11L4%2FBoQ7SX2%2F6C02CR&X-Amz-Signature=12147f1d57c13740ae638a86d1ec7c3857d1368d5b550a8b07b9079fca4dd6c0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PYQ42FT%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIvKPUJbelJoMWShVqrdxCUH%2BzELgfWCX1dcc0iNge4wIhAI7nkguWfv40lnyli9Rl4ETW2peBga38n4Kz9FErd5iwKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwItqhrqD2WjQQAEOoq3APmb9cwz348XBTNKACBDyfC8ZIRmnKX%2FqBL%2FuFXgPPCqTKiBerW0Pw8xgNjGoJL0IDrdcEn5W2aEIlnGbV2N02TTK8s6zbxjSjRS34Ye%2BgrxSToIx3yywhtpAwQYXllA6K6On%2B7tHJAd8sKeTRYNJVVx78wFKEE20meSNNjipkemFUHAcI%2Bx5USpWN1ex4M2MA1GvwIegS65SMY%2FeW60qhJ0fF9UQdG061F2bEEg7QWdMKWdaIX0sBj147zWoHahRDOLbAf1Wv15Rca0XwSQ6OTluQMV5qu%2Fn0Tzarp1Wym3ToBI7niB8DPq4yxTOA94S5iyiwcXdSbBE3bk3QaCV3k8RDwO0Q7OSSB5oY%2BuKPW9E1fqb1cLd%2FtwtD%2BJ6zE%2BE52a4vApTr5sEXkBLVIj2XakLhHrLBlC3P0VtF6pAzLvKL4qD36S8A4J0Upds5BHNu67JP00zVPiDtiFEsN1pMuXY4BlcdD9ROAvcW3QZZysyuLvcQ5fC6EHUkxGdM4X0PtoSX%2BwSfY2WUkLfoOFUJgxaiZtoVmJkuMk4RnVQ6WbsrdQ%2BirAx2Wb8kTBlphAxxdRpqH4T8DeoSF7oOAvesZkcGUDnv%2FeHQvdjDwDTSRd1Rp7c1TDkGA7VooejCcmeG9BjqkAdHyy35XqZnwswDGIo3qvbtp%2FpEa0XhYFw462wG5Z83DsdCerp0W20ABub0sTkTsbkSflzljIDa16ud6ih3s4ACK5N0sQGr2GWO7g3r%2F%2FiLavwq5vEt%2BC%2FTXgDiBIATBf9BT4N3pCRpZsbsa0D0dVHA9xuq3kNTl5%2BR7M6RiNGE0pmz16eAxfjExHohyCRGjLwaU8RF%2FO11L4%2FBoQ7SX2%2F6C02CR&X-Amz-Signature=24d0c9fc1dc60afa0002ee334d90dcd9ca057ed6221262b4793cd704e3a9df33&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PYQ42FT%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIvKPUJbelJoMWShVqrdxCUH%2BzELgfWCX1dcc0iNge4wIhAI7nkguWfv40lnyli9Rl4ETW2peBga38n4Kz9FErd5iwKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwItqhrqD2WjQQAEOoq3APmb9cwz348XBTNKACBDyfC8ZIRmnKX%2FqBL%2FuFXgPPCqTKiBerW0Pw8xgNjGoJL0IDrdcEn5W2aEIlnGbV2N02TTK8s6zbxjSjRS34Ye%2BgrxSToIx3yywhtpAwQYXllA6K6On%2B7tHJAd8sKeTRYNJVVx78wFKEE20meSNNjipkemFUHAcI%2Bx5USpWN1ex4M2MA1GvwIegS65SMY%2FeW60qhJ0fF9UQdG061F2bEEg7QWdMKWdaIX0sBj147zWoHahRDOLbAf1Wv15Rca0XwSQ6OTluQMV5qu%2Fn0Tzarp1Wym3ToBI7niB8DPq4yxTOA94S5iyiwcXdSbBE3bk3QaCV3k8RDwO0Q7OSSB5oY%2BuKPW9E1fqb1cLd%2FtwtD%2BJ6zE%2BE52a4vApTr5sEXkBLVIj2XakLhHrLBlC3P0VtF6pAzLvKL4qD36S8A4J0Upds5BHNu67JP00zVPiDtiFEsN1pMuXY4BlcdD9ROAvcW3QZZysyuLvcQ5fC6EHUkxGdM4X0PtoSX%2BwSfY2WUkLfoOFUJgxaiZtoVmJkuMk4RnVQ6WbsrdQ%2BirAx2Wb8kTBlphAxxdRpqH4T8DeoSF7oOAvesZkcGUDnv%2FeHQvdjDwDTSRd1Rp7c1TDkGA7VooejCcmeG9BjqkAdHyy35XqZnwswDGIo3qvbtp%2FpEa0XhYFw462wG5Z83DsdCerp0W20ABub0sTkTsbkSflzljIDa16ud6ih3s4ACK5N0sQGr2GWO7g3r%2F%2FiLavwq5vEt%2BC%2FTXgDiBIATBf9BT4N3pCRpZsbsa0D0dVHA9xuq3kNTl5%2BR7M6RiNGE0pmz16eAxfjExHohyCRGjLwaU8RF%2FO11L4%2FBoQ7SX2%2F6C02CR&X-Amz-Signature=6bd9809c078509e537c8df94065d96cf92862a67c6376e016d0a090654d665c9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PYQ42FT%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIvKPUJbelJoMWShVqrdxCUH%2BzELgfWCX1dcc0iNge4wIhAI7nkguWfv40lnyli9Rl4ETW2peBga38n4Kz9FErd5iwKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwItqhrqD2WjQQAEOoq3APmb9cwz348XBTNKACBDyfC8ZIRmnKX%2FqBL%2FuFXgPPCqTKiBerW0Pw8xgNjGoJL0IDrdcEn5W2aEIlnGbV2N02TTK8s6zbxjSjRS34Ye%2BgrxSToIx3yywhtpAwQYXllA6K6On%2B7tHJAd8sKeTRYNJVVx78wFKEE20meSNNjipkemFUHAcI%2Bx5USpWN1ex4M2MA1GvwIegS65SMY%2FeW60qhJ0fF9UQdG061F2bEEg7QWdMKWdaIX0sBj147zWoHahRDOLbAf1Wv15Rca0XwSQ6OTluQMV5qu%2Fn0Tzarp1Wym3ToBI7niB8DPq4yxTOA94S5iyiwcXdSbBE3bk3QaCV3k8RDwO0Q7OSSB5oY%2BuKPW9E1fqb1cLd%2FtwtD%2BJ6zE%2BE52a4vApTr5sEXkBLVIj2XakLhHrLBlC3P0VtF6pAzLvKL4qD36S8A4J0Upds5BHNu67JP00zVPiDtiFEsN1pMuXY4BlcdD9ROAvcW3QZZysyuLvcQ5fC6EHUkxGdM4X0PtoSX%2BwSfY2WUkLfoOFUJgxaiZtoVmJkuMk4RnVQ6WbsrdQ%2BirAx2Wb8kTBlphAxxdRpqH4T8DeoSF7oOAvesZkcGUDnv%2FeHQvdjDwDTSRd1Rp7c1TDkGA7VooejCcmeG9BjqkAdHyy35XqZnwswDGIo3qvbtp%2FpEa0XhYFw462wG5Z83DsdCerp0W20ABub0sTkTsbkSflzljIDa16ud6ih3s4ACK5N0sQGr2GWO7g3r%2F%2FiLavwq5vEt%2BC%2FTXgDiBIATBf9BT4N3pCRpZsbsa0D0dVHA9xuq3kNTl5%2BR7M6RiNGE0pmz16eAxfjExHohyCRGjLwaU8RF%2FO11L4%2FBoQ7SX2%2F6C02CR&X-Amz-Signature=1c303b1d523d9697c394e93566feebdbd545f192ad56b6a87365706a8e4472b9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PYQ42FT%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIvKPUJbelJoMWShVqrdxCUH%2BzELgfWCX1dcc0iNge4wIhAI7nkguWfv40lnyli9Rl4ETW2peBga38n4Kz9FErd5iwKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwItqhrqD2WjQQAEOoq3APmb9cwz348XBTNKACBDyfC8ZIRmnKX%2FqBL%2FuFXgPPCqTKiBerW0Pw8xgNjGoJL0IDrdcEn5W2aEIlnGbV2N02TTK8s6zbxjSjRS34Ye%2BgrxSToIx3yywhtpAwQYXllA6K6On%2B7tHJAd8sKeTRYNJVVx78wFKEE20meSNNjipkemFUHAcI%2Bx5USpWN1ex4M2MA1GvwIegS65SMY%2FeW60qhJ0fF9UQdG061F2bEEg7QWdMKWdaIX0sBj147zWoHahRDOLbAf1Wv15Rca0XwSQ6OTluQMV5qu%2Fn0Tzarp1Wym3ToBI7niB8DPq4yxTOA94S5iyiwcXdSbBE3bk3QaCV3k8RDwO0Q7OSSB5oY%2BuKPW9E1fqb1cLd%2FtwtD%2BJ6zE%2BE52a4vApTr5sEXkBLVIj2XakLhHrLBlC3P0VtF6pAzLvKL4qD36S8A4J0Upds5BHNu67JP00zVPiDtiFEsN1pMuXY4BlcdD9ROAvcW3QZZysyuLvcQ5fC6EHUkxGdM4X0PtoSX%2BwSfY2WUkLfoOFUJgxaiZtoVmJkuMk4RnVQ6WbsrdQ%2BirAx2Wb8kTBlphAxxdRpqH4T8DeoSF7oOAvesZkcGUDnv%2FeHQvdjDwDTSRd1Rp7c1TDkGA7VooejCcmeG9BjqkAdHyy35XqZnwswDGIo3qvbtp%2FpEa0XhYFw462wG5Z83DsdCerp0W20ABub0sTkTsbkSflzljIDa16ud6ih3s4ACK5N0sQGr2GWO7g3r%2F%2FiLavwq5vEt%2BC%2FTXgDiBIATBf9BT4N3pCRpZsbsa0D0dVHA9xuq3kNTl5%2BR7M6RiNGE0pmz16eAxfjExHohyCRGjLwaU8RF%2FO11L4%2FBoQ7SX2%2F6C02CR&X-Amz-Signature=0437de4e7b74b9b27582a477323542f5d79143698c677af3b658adaa25dc6442&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PYQ42FT%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIvKPUJbelJoMWShVqrdxCUH%2BzELgfWCX1dcc0iNge4wIhAI7nkguWfv40lnyli9Rl4ETW2peBga38n4Kz9FErd5iwKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwItqhrqD2WjQQAEOoq3APmb9cwz348XBTNKACBDyfC8ZIRmnKX%2FqBL%2FuFXgPPCqTKiBerW0Pw8xgNjGoJL0IDrdcEn5W2aEIlnGbV2N02TTK8s6zbxjSjRS34Ye%2BgrxSToIx3yywhtpAwQYXllA6K6On%2B7tHJAd8sKeTRYNJVVx78wFKEE20meSNNjipkemFUHAcI%2Bx5USpWN1ex4M2MA1GvwIegS65SMY%2FeW60qhJ0fF9UQdG061F2bEEg7QWdMKWdaIX0sBj147zWoHahRDOLbAf1Wv15Rca0XwSQ6OTluQMV5qu%2Fn0Tzarp1Wym3ToBI7niB8DPq4yxTOA94S5iyiwcXdSbBE3bk3QaCV3k8RDwO0Q7OSSB5oY%2BuKPW9E1fqb1cLd%2FtwtD%2BJ6zE%2BE52a4vApTr5sEXkBLVIj2XakLhHrLBlC3P0VtF6pAzLvKL4qD36S8A4J0Upds5BHNu67JP00zVPiDtiFEsN1pMuXY4BlcdD9ROAvcW3QZZysyuLvcQ5fC6EHUkxGdM4X0PtoSX%2BwSfY2WUkLfoOFUJgxaiZtoVmJkuMk4RnVQ6WbsrdQ%2BirAx2Wb8kTBlphAxxdRpqH4T8DeoSF7oOAvesZkcGUDnv%2FeHQvdjDwDTSRd1Rp7c1TDkGA7VooejCcmeG9BjqkAdHyy35XqZnwswDGIo3qvbtp%2FpEa0XhYFw462wG5Z83DsdCerp0W20ABub0sTkTsbkSflzljIDa16ud6ih3s4ACK5N0sQGr2GWO7g3r%2F%2FiLavwq5vEt%2BC%2FTXgDiBIATBf9BT4N3pCRpZsbsa0D0dVHA9xuq3kNTl5%2BR7M6RiNGE0pmz16eAxfjExHohyCRGjLwaU8RF%2FO11L4%2FBoQ7SX2%2F6C02CR&X-Amz-Signature=a79a15ce48a20ea8ef2d510ede6f605f9bc094678551b84d0a396ebef66f4fd0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
