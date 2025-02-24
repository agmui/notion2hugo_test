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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QLODZDO%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH09p1S0seLWtRutsQ6cLKYevjHgebUOvVj4GZfoi7RcAiEAtTXnRujGoNmMf5Rx83BjSORYbv1D3FiGwYj5Dl4qwV0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDG27s%2BoIH2PDRio4pyrcA9U9lopsgkLbhKu6WHR0tSHl6qgdbCYjfQSWt5hZvBTc8nbWChIqADOcBw2VMTdb%2F7J4q%2F9bHUizC48ZdIz42gmie3oCGLRcfq8vmGo43BJj0jDT5hZZaDS%2BsWtoTkWntqP2jruHFYHguKGjjI6gATadcwTIObEQa%2B1Yt8TghIbTBtsbeEKNxvepEkH7of0wSPoKjz8PCb3eWikvsOW7DzXgDlmOqd2EsPuDaSHkCAYV0Mab3KILQka03C1mMKzIgwCP9QbwyaGF2rdj01LDzgX0f%2BVcdMaibl6POYn9xLKgBtXerzJTphULRw9ttA%2B64Upig8EmLny9%2FVtCqkpaYadDNee6XNLLf6zu%2BKxYvt47JohjIkUxusy7x2cVXOOuGNhAOnEn597QhAhV3AxiSHEXnPbyNkqxuQQwJkicRWWbSMuWWLivgOsV1FfvyGS9vgvOkP4Snl4v0iMoMEj8aPy9xZjLsmlKKaVsffH51NZYaK8J3z4u%2FsdvwuJYG74NFYZxXOo%2BG4RypBr7j0FLGrGotd9IbltbrkUFJ3TY3qqpcitmSUeAJoGSkRnPnaaRInCarJzsjeLPCN6MzY0xbfeIf7uMfeQqDd7DAgkqosdnTvBoFKy6IajXyCh5MNi38b0GOqUBlLzB2ozzoidbgSbOfDlDAs4Zi4MIrGstSuSY%2Bj9DwF9V4QGaUtUb9idXAtsva%2FGAKgSEY4%2BgbAaRaudSYBOfbb08eq%2FDjO2QQxZjbe42ZDFbHAMjg0t95%2BkvBEwklnGgKhpUgP3Xk5fmH0AwxdFLtpOsdejVTm%2BfeWdoj6ieAlaKZKSYQJreeLcWW2RntGDSAtqHt52hXFow%2Bl4LcOUAOt%2F4XgEK&X-Amz-Signature=08444d2bcf963154882766db88bfe418cb1ed134578dc8eb2d84ffaad87eb13f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QLODZDO%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH09p1S0seLWtRutsQ6cLKYevjHgebUOvVj4GZfoi7RcAiEAtTXnRujGoNmMf5Rx83BjSORYbv1D3FiGwYj5Dl4qwV0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDG27s%2BoIH2PDRio4pyrcA9U9lopsgkLbhKu6WHR0tSHl6qgdbCYjfQSWt5hZvBTc8nbWChIqADOcBw2VMTdb%2F7J4q%2F9bHUizC48ZdIz42gmie3oCGLRcfq8vmGo43BJj0jDT5hZZaDS%2BsWtoTkWntqP2jruHFYHguKGjjI6gATadcwTIObEQa%2B1Yt8TghIbTBtsbeEKNxvepEkH7of0wSPoKjz8PCb3eWikvsOW7DzXgDlmOqd2EsPuDaSHkCAYV0Mab3KILQka03C1mMKzIgwCP9QbwyaGF2rdj01LDzgX0f%2BVcdMaibl6POYn9xLKgBtXerzJTphULRw9ttA%2B64Upig8EmLny9%2FVtCqkpaYadDNee6XNLLf6zu%2BKxYvt47JohjIkUxusy7x2cVXOOuGNhAOnEn597QhAhV3AxiSHEXnPbyNkqxuQQwJkicRWWbSMuWWLivgOsV1FfvyGS9vgvOkP4Snl4v0iMoMEj8aPy9xZjLsmlKKaVsffH51NZYaK8J3z4u%2FsdvwuJYG74NFYZxXOo%2BG4RypBr7j0FLGrGotd9IbltbrkUFJ3TY3qqpcitmSUeAJoGSkRnPnaaRInCarJzsjeLPCN6MzY0xbfeIf7uMfeQqDd7DAgkqosdnTvBoFKy6IajXyCh5MNi38b0GOqUBlLzB2ozzoidbgSbOfDlDAs4Zi4MIrGstSuSY%2Bj9DwF9V4QGaUtUb9idXAtsva%2FGAKgSEY4%2BgbAaRaudSYBOfbb08eq%2FDjO2QQxZjbe42ZDFbHAMjg0t95%2BkvBEwklnGgKhpUgP3Xk5fmH0AwxdFLtpOsdejVTm%2BfeWdoj6ieAlaKZKSYQJreeLcWW2RntGDSAtqHt52hXFow%2Bl4LcOUAOt%2F4XgEK&X-Amz-Signature=b56fd8df449141d13763dc7e0185236e215125f2d56011f3b24719feda7e25af&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QLODZDO%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH09p1S0seLWtRutsQ6cLKYevjHgebUOvVj4GZfoi7RcAiEAtTXnRujGoNmMf5Rx83BjSORYbv1D3FiGwYj5Dl4qwV0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDG27s%2BoIH2PDRio4pyrcA9U9lopsgkLbhKu6WHR0tSHl6qgdbCYjfQSWt5hZvBTc8nbWChIqADOcBw2VMTdb%2F7J4q%2F9bHUizC48ZdIz42gmie3oCGLRcfq8vmGo43BJj0jDT5hZZaDS%2BsWtoTkWntqP2jruHFYHguKGjjI6gATadcwTIObEQa%2B1Yt8TghIbTBtsbeEKNxvepEkH7of0wSPoKjz8PCb3eWikvsOW7DzXgDlmOqd2EsPuDaSHkCAYV0Mab3KILQka03C1mMKzIgwCP9QbwyaGF2rdj01LDzgX0f%2BVcdMaibl6POYn9xLKgBtXerzJTphULRw9ttA%2B64Upig8EmLny9%2FVtCqkpaYadDNee6XNLLf6zu%2BKxYvt47JohjIkUxusy7x2cVXOOuGNhAOnEn597QhAhV3AxiSHEXnPbyNkqxuQQwJkicRWWbSMuWWLivgOsV1FfvyGS9vgvOkP4Snl4v0iMoMEj8aPy9xZjLsmlKKaVsffH51NZYaK8J3z4u%2FsdvwuJYG74NFYZxXOo%2BG4RypBr7j0FLGrGotd9IbltbrkUFJ3TY3qqpcitmSUeAJoGSkRnPnaaRInCarJzsjeLPCN6MzY0xbfeIf7uMfeQqDd7DAgkqosdnTvBoFKy6IajXyCh5MNi38b0GOqUBlLzB2ozzoidbgSbOfDlDAs4Zi4MIrGstSuSY%2Bj9DwF9V4QGaUtUb9idXAtsva%2FGAKgSEY4%2BgbAaRaudSYBOfbb08eq%2FDjO2QQxZjbe42ZDFbHAMjg0t95%2BkvBEwklnGgKhpUgP3Xk5fmH0AwxdFLtpOsdejVTm%2BfeWdoj6ieAlaKZKSYQJreeLcWW2RntGDSAtqHt52hXFow%2Bl4LcOUAOt%2F4XgEK&X-Amz-Signature=c5d2fd71780010341b28afebd6c09e8ee1eba5ffa7b861c40e9ff7147603a389&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QLODZDO%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH09p1S0seLWtRutsQ6cLKYevjHgebUOvVj4GZfoi7RcAiEAtTXnRujGoNmMf5Rx83BjSORYbv1D3FiGwYj5Dl4qwV0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDG27s%2BoIH2PDRio4pyrcA9U9lopsgkLbhKu6WHR0tSHl6qgdbCYjfQSWt5hZvBTc8nbWChIqADOcBw2VMTdb%2F7J4q%2F9bHUizC48ZdIz42gmie3oCGLRcfq8vmGo43BJj0jDT5hZZaDS%2BsWtoTkWntqP2jruHFYHguKGjjI6gATadcwTIObEQa%2B1Yt8TghIbTBtsbeEKNxvepEkH7of0wSPoKjz8PCb3eWikvsOW7DzXgDlmOqd2EsPuDaSHkCAYV0Mab3KILQka03C1mMKzIgwCP9QbwyaGF2rdj01LDzgX0f%2BVcdMaibl6POYn9xLKgBtXerzJTphULRw9ttA%2B64Upig8EmLny9%2FVtCqkpaYadDNee6XNLLf6zu%2BKxYvt47JohjIkUxusy7x2cVXOOuGNhAOnEn597QhAhV3AxiSHEXnPbyNkqxuQQwJkicRWWbSMuWWLivgOsV1FfvyGS9vgvOkP4Snl4v0iMoMEj8aPy9xZjLsmlKKaVsffH51NZYaK8J3z4u%2FsdvwuJYG74NFYZxXOo%2BG4RypBr7j0FLGrGotd9IbltbrkUFJ3TY3qqpcitmSUeAJoGSkRnPnaaRInCarJzsjeLPCN6MzY0xbfeIf7uMfeQqDd7DAgkqosdnTvBoFKy6IajXyCh5MNi38b0GOqUBlLzB2ozzoidbgSbOfDlDAs4Zi4MIrGstSuSY%2Bj9DwF9V4QGaUtUb9idXAtsva%2FGAKgSEY4%2BgbAaRaudSYBOfbb08eq%2FDjO2QQxZjbe42ZDFbHAMjg0t95%2BkvBEwklnGgKhpUgP3Xk5fmH0AwxdFLtpOsdejVTm%2BfeWdoj6ieAlaKZKSYQJreeLcWW2RntGDSAtqHt52hXFow%2Bl4LcOUAOt%2F4XgEK&X-Amz-Signature=a1c18813e6b260b674e7baa721b4eab8ce578e7a6388206a28e6fd680b30f392&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QLODZDO%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH09p1S0seLWtRutsQ6cLKYevjHgebUOvVj4GZfoi7RcAiEAtTXnRujGoNmMf5Rx83BjSORYbv1D3FiGwYj5Dl4qwV0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDG27s%2BoIH2PDRio4pyrcA9U9lopsgkLbhKu6WHR0tSHl6qgdbCYjfQSWt5hZvBTc8nbWChIqADOcBw2VMTdb%2F7J4q%2F9bHUizC48ZdIz42gmie3oCGLRcfq8vmGo43BJj0jDT5hZZaDS%2BsWtoTkWntqP2jruHFYHguKGjjI6gATadcwTIObEQa%2B1Yt8TghIbTBtsbeEKNxvepEkH7of0wSPoKjz8PCb3eWikvsOW7DzXgDlmOqd2EsPuDaSHkCAYV0Mab3KILQka03C1mMKzIgwCP9QbwyaGF2rdj01LDzgX0f%2BVcdMaibl6POYn9xLKgBtXerzJTphULRw9ttA%2B64Upig8EmLny9%2FVtCqkpaYadDNee6XNLLf6zu%2BKxYvt47JohjIkUxusy7x2cVXOOuGNhAOnEn597QhAhV3AxiSHEXnPbyNkqxuQQwJkicRWWbSMuWWLivgOsV1FfvyGS9vgvOkP4Snl4v0iMoMEj8aPy9xZjLsmlKKaVsffH51NZYaK8J3z4u%2FsdvwuJYG74NFYZxXOo%2BG4RypBr7j0FLGrGotd9IbltbrkUFJ3TY3qqpcitmSUeAJoGSkRnPnaaRInCarJzsjeLPCN6MzY0xbfeIf7uMfeQqDd7DAgkqosdnTvBoFKy6IajXyCh5MNi38b0GOqUBlLzB2ozzoidbgSbOfDlDAs4Zi4MIrGstSuSY%2Bj9DwF9V4QGaUtUb9idXAtsva%2FGAKgSEY4%2BgbAaRaudSYBOfbb08eq%2FDjO2QQxZjbe42ZDFbHAMjg0t95%2BkvBEwklnGgKhpUgP3Xk5fmH0AwxdFLtpOsdejVTm%2BfeWdoj6ieAlaKZKSYQJreeLcWW2RntGDSAtqHt52hXFow%2Bl4LcOUAOt%2F4XgEK&X-Amz-Signature=a7beeefc3f5e8732c60065a1fb2065f73132f7112930a29d687c841d57ce3d0e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QLODZDO%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH09p1S0seLWtRutsQ6cLKYevjHgebUOvVj4GZfoi7RcAiEAtTXnRujGoNmMf5Rx83BjSORYbv1D3FiGwYj5Dl4qwV0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDG27s%2BoIH2PDRio4pyrcA9U9lopsgkLbhKu6WHR0tSHl6qgdbCYjfQSWt5hZvBTc8nbWChIqADOcBw2VMTdb%2F7J4q%2F9bHUizC48ZdIz42gmie3oCGLRcfq8vmGo43BJj0jDT5hZZaDS%2BsWtoTkWntqP2jruHFYHguKGjjI6gATadcwTIObEQa%2B1Yt8TghIbTBtsbeEKNxvepEkH7of0wSPoKjz8PCb3eWikvsOW7DzXgDlmOqd2EsPuDaSHkCAYV0Mab3KILQka03C1mMKzIgwCP9QbwyaGF2rdj01LDzgX0f%2BVcdMaibl6POYn9xLKgBtXerzJTphULRw9ttA%2B64Upig8EmLny9%2FVtCqkpaYadDNee6XNLLf6zu%2BKxYvt47JohjIkUxusy7x2cVXOOuGNhAOnEn597QhAhV3AxiSHEXnPbyNkqxuQQwJkicRWWbSMuWWLivgOsV1FfvyGS9vgvOkP4Snl4v0iMoMEj8aPy9xZjLsmlKKaVsffH51NZYaK8J3z4u%2FsdvwuJYG74NFYZxXOo%2BG4RypBr7j0FLGrGotd9IbltbrkUFJ3TY3qqpcitmSUeAJoGSkRnPnaaRInCarJzsjeLPCN6MzY0xbfeIf7uMfeQqDd7DAgkqosdnTvBoFKy6IajXyCh5MNi38b0GOqUBlLzB2ozzoidbgSbOfDlDAs4Zi4MIrGstSuSY%2Bj9DwF9V4QGaUtUb9idXAtsva%2FGAKgSEY4%2BgbAaRaudSYBOfbb08eq%2FDjO2QQxZjbe42ZDFbHAMjg0t95%2BkvBEwklnGgKhpUgP3Xk5fmH0AwxdFLtpOsdejVTm%2BfeWdoj6ieAlaKZKSYQJreeLcWW2RntGDSAtqHt52hXFow%2Bl4LcOUAOt%2F4XgEK&X-Amz-Signature=5ed9d496eec686ff22aa6491e0160d10912da41f1b6e99ffca632de46247a017&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QLODZDO%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH09p1S0seLWtRutsQ6cLKYevjHgebUOvVj4GZfoi7RcAiEAtTXnRujGoNmMf5Rx83BjSORYbv1D3FiGwYj5Dl4qwV0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDG27s%2BoIH2PDRio4pyrcA9U9lopsgkLbhKu6WHR0tSHl6qgdbCYjfQSWt5hZvBTc8nbWChIqADOcBw2VMTdb%2F7J4q%2F9bHUizC48ZdIz42gmie3oCGLRcfq8vmGo43BJj0jDT5hZZaDS%2BsWtoTkWntqP2jruHFYHguKGjjI6gATadcwTIObEQa%2B1Yt8TghIbTBtsbeEKNxvepEkH7of0wSPoKjz8PCb3eWikvsOW7DzXgDlmOqd2EsPuDaSHkCAYV0Mab3KILQka03C1mMKzIgwCP9QbwyaGF2rdj01LDzgX0f%2BVcdMaibl6POYn9xLKgBtXerzJTphULRw9ttA%2B64Upig8EmLny9%2FVtCqkpaYadDNee6XNLLf6zu%2BKxYvt47JohjIkUxusy7x2cVXOOuGNhAOnEn597QhAhV3AxiSHEXnPbyNkqxuQQwJkicRWWbSMuWWLivgOsV1FfvyGS9vgvOkP4Snl4v0iMoMEj8aPy9xZjLsmlKKaVsffH51NZYaK8J3z4u%2FsdvwuJYG74NFYZxXOo%2BG4RypBr7j0FLGrGotd9IbltbrkUFJ3TY3qqpcitmSUeAJoGSkRnPnaaRInCarJzsjeLPCN6MzY0xbfeIf7uMfeQqDd7DAgkqosdnTvBoFKy6IajXyCh5MNi38b0GOqUBlLzB2ozzoidbgSbOfDlDAs4Zi4MIrGstSuSY%2Bj9DwF9V4QGaUtUb9idXAtsva%2FGAKgSEY4%2BgbAaRaudSYBOfbb08eq%2FDjO2QQxZjbe42ZDFbHAMjg0t95%2BkvBEwklnGgKhpUgP3Xk5fmH0AwxdFLtpOsdejVTm%2BfeWdoj6ieAlaKZKSYQJreeLcWW2RntGDSAtqHt52hXFow%2Bl4LcOUAOt%2F4XgEK&X-Amz-Signature=4d26375a64bd5ffcc5c1be3799e401ea166b930a00debdd7ee94a457bf4e89ef&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
