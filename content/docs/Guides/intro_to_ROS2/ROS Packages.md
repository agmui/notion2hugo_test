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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L2RFHAX%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFunLJnoh5iUmhzezDO%2BjF0mipJFp5EyeNQJzI8qyBJPAiB2CLBkt9rIuZtftc1JOP%2F%2B48YVXSsEuzFGjhpa2vuKMir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMTdpKPlBni1HZaVKbKtwDTI5Wx4o6dHF%2FO406VC4ow2AIKR1wmuOf3C4UiZgufdtFkZWvmvdSjjX3T8kAeXPbN3joLCMQGaJmbZoa1O%2FkBodkaZpp8AMvaQGNGshweEnzlgzp%2F8IFj5GQLXiYSI85Lxy0tpAnIJFDD6u97qOkZ9AHYniCMpN1XmuarTFwIUFDG4106HoGC4rEc0rtU9edN5%2Fg90toMVjEEcu04Rx0xutxilBttp%2BktIxlMgYTi8dRD7voVemwHk6MYk7vP2AfZBDpOCSKSs0h8%2FbfknQGwohtVRAAWaHmL7Aua0IGH0pj983mn%2FrdrxcpMxZLLgxmnZswIe7%2BCdCh71qKclkAgjQpFqxqJ2V9id%2B01rNsL1sP1%2Fye2v1vpjEorO29sqjtFiJJO0EYSqX77YvW%2B1rqm3e9q66xu2E3MxoENG5WDMuhfynGg6Ak2fWeODTuA%2F2tAdvs6U2gJTH0QcJ1isZr9azFZ0GqeD0ElHeIkR6w%2BAzdivplu8N9PXF0iZrusbd4EhvtD72mio26O8l4%2FfnKw3AdEULp2mqPb5SSNROBhK2ayM1tmz%2BrIM3JL4wbe9Rbqcn%2FKdi0Gnu5CcHy9u8PE3%2FX3Nr4fqtdKYb8UX00JWZ%2FosFFYsJha1Wr8Vgwzv3cvgY6pgHJ6NlE37X5e1gJZEVWyKT9wMqEF87hRrWy%2FGv3ZZHxFxcm%2BVMcnT5mz%2BRWuhR0CYfx%2F4wF7kTlPMyypspYlt8teBat6LQfphNscQGS50%2Bya8Rnkcz9i%2BOmBPXO3vBeabFl18pqrB%2BRPWr8aI32DK%2FdHBKFCf89BE1VlSZ5SBpbVG3ZXr2J08Er0Lirhl81M1GzMaAc9LHdnXyWck%2FhHo77wrqUQCTE&X-Amz-Signature=b2f88e4aa0715abe0efa478c2fca65e2ede67a70184ad31ceb41c25d4a5e7081&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L2RFHAX%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFunLJnoh5iUmhzezDO%2BjF0mipJFp5EyeNQJzI8qyBJPAiB2CLBkt9rIuZtftc1JOP%2F%2B48YVXSsEuzFGjhpa2vuKMir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMTdpKPlBni1HZaVKbKtwDTI5Wx4o6dHF%2FO406VC4ow2AIKR1wmuOf3C4UiZgufdtFkZWvmvdSjjX3T8kAeXPbN3joLCMQGaJmbZoa1O%2FkBodkaZpp8AMvaQGNGshweEnzlgzp%2F8IFj5GQLXiYSI85Lxy0tpAnIJFDD6u97qOkZ9AHYniCMpN1XmuarTFwIUFDG4106HoGC4rEc0rtU9edN5%2Fg90toMVjEEcu04Rx0xutxilBttp%2BktIxlMgYTi8dRD7voVemwHk6MYk7vP2AfZBDpOCSKSs0h8%2FbfknQGwohtVRAAWaHmL7Aua0IGH0pj983mn%2FrdrxcpMxZLLgxmnZswIe7%2BCdCh71qKclkAgjQpFqxqJ2V9id%2B01rNsL1sP1%2Fye2v1vpjEorO29sqjtFiJJO0EYSqX77YvW%2B1rqm3e9q66xu2E3MxoENG5WDMuhfynGg6Ak2fWeODTuA%2F2tAdvs6U2gJTH0QcJ1isZr9azFZ0GqeD0ElHeIkR6w%2BAzdivplu8N9PXF0iZrusbd4EhvtD72mio26O8l4%2FfnKw3AdEULp2mqPb5SSNROBhK2ayM1tmz%2BrIM3JL4wbe9Rbqcn%2FKdi0Gnu5CcHy9u8PE3%2FX3Nr4fqtdKYb8UX00JWZ%2FosFFYsJha1Wr8Vgwzv3cvgY6pgHJ6NlE37X5e1gJZEVWyKT9wMqEF87hRrWy%2FGv3ZZHxFxcm%2BVMcnT5mz%2BRWuhR0CYfx%2F4wF7kTlPMyypspYlt8teBat6LQfphNscQGS50%2Bya8Rnkcz9i%2BOmBPXO3vBeabFl18pqrB%2BRPWr8aI32DK%2FdHBKFCf89BE1VlSZ5SBpbVG3ZXr2J08Er0Lirhl81M1GzMaAc9LHdnXyWck%2FhHo77wrqUQCTE&X-Amz-Signature=0167e7e80786ab20eb7b6368224c1ae0e2fcbba4324eb348d0a6fe8a07df475f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L2RFHAX%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFunLJnoh5iUmhzezDO%2BjF0mipJFp5EyeNQJzI8qyBJPAiB2CLBkt9rIuZtftc1JOP%2F%2B48YVXSsEuzFGjhpa2vuKMir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMTdpKPlBni1HZaVKbKtwDTI5Wx4o6dHF%2FO406VC4ow2AIKR1wmuOf3C4UiZgufdtFkZWvmvdSjjX3T8kAeXPbN3joLCMQGaJmbZoa1O%2FkBodkaZpp8AMvaQGNGshweEnzlgzp%2F8IFj5GQLXiYSI85Lxy0tpAnIJFDD6u97qOkZ9AHYniCMpN1XmuarTFwIUFDG4106HoGC4rEc0rtU9edN5%2Fg90toMVjEEcu04Rx0xutxilBttp%2BktIxlMgYTi8dRD7voVemwHk6MYk7vP2AfZBDpOCSKSs0h8%2FbfknQGwohtVRAAWaHmL7Aua0IGH0pj983mn%2FrdrxcpMxZLLgxmnZswIe7%2BCdCh71qKclkAgjQpFqxqJ2V9id%2B01rNsL1sP1%2Fye2v1vpjEorO29sqjtFiJJO0EYSqX77YvW%2B1rqm3e9q66xu2E3MxoENG5WDMuhfynGg6Ak2fWeODTuA%2F2tAdvs6U2gJTH0QcJ1isZr9azFZ0GqeD0ElHeIkR6w%2BAzdivplu8N9PXF0iZrusbd4EhvtD72mio26O8l4%2FfnKw3AdEULp2mqPb5SSNROBhK2ayM1tmz%2BrIM3JL4wbe9Rbqcn%2FKdi0Gnu5CcHy9u8PE3%2FX3Nr4fqtdKYb8UX00JWZ%2FosFFYsJha1Wr8Vgwzv3cvgY6pgHJ6NlE37X5e1gJZEVWyKT9wMqEF87hRrWy%2FGv3ZZHxFxcm%2BVMcnT5mz%2BRWuhR0CYfx%2F4wF7kTlPMyypspYlt8teBat6LQfphNscQGS50%2Bya8Rnkcz9i%2BOmBPXO3vBeabFl18pqrB%2BRPWr8aI32DK%2FdHBKFCf89BE1VlSZ5SBpbVG3ZXr2J08Er0Lirhl81M1GzMaAc9LHdnXyWck%2FhHo77wrqUQCTE&X-Amz-Signature=3b97515d2cdcfe07f151752522419888bc84d88be5876d68b744ae5d50d95de1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L2RFHAX%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFunLJnoh5iUmhzezDO%2BjF0mipJFp5EyeNQJzI8qyBJPAiB2CLBkt9rIuZtftc1JOP%2F%2B48YVXSsEuzFGjhpa2vuKMir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMTdpKPlBni1HZaVKbKtwDTI5Wx4o6dHF%2FO406VC4ow2AIKR1wmuOf3C4UiZgufdtFkZWvmvdSjjX3T8kAeXPbN3joLCMQGaJmbZoa1O%2FkBodkaZpp8AMvaQGNGshweEnzlgzp%2F8IFj5GQLXiYSI85Lxy0tpAnIJFDD6u97qOkZ9AHYniCMpN1XmuarTFwIUFDG4106HoGC4rEc0rtU9edN5%2Fg90toMVjEEcu04Rx0xutxilBttp%2BktIxlMgYTi8dRD7voVemwHk6MYk7vP2AfZBDpOCSKSs0h8%2FbfknQGwohtVRAAWaHmL7Aua0IGH0pj983mn%2FrdrxcpMxZLLgxmnZswIe7%2BCdCh71qKclkAgjQpFqxqJ2V9id%2B01rNsL1sP1%2Fye2v1vpjEorO29sqjtFiJJO0EYSqX77YvW%2B1rqm3e9q66xu2E3MxoENG5WDMuhfynGg6Ak2fWeODTuA%2F2tAdvs6U2gJTH0QcJ1isZr9azFZ0GqeD0ElHeIkR6w%2BAzdivplu8N9PXF0iZrusbd4EhvtD72mio26O8l4%2FfnKw3AdEULp2mqPb5SSNROBhK2ayM1tmz%2BrIM3JL4wbe9Rbqcn%2FKdi0Gnu5CcHy9u8PE3%2FX3Nr4fqtdKYb8UX00JWZ%2FosFFYsJha1Wr8Vgwzv3cvgY6pgHJ6NlE37X5e1gJZEVWyKT9wMqEF87hRrWy%2FGv3ZZHxFxcm%2BVMcnT5mz%2BRWuhR0CYfx%2F4wF7kTlPMyypspYlt8teBat6LQfphNscQGS50%2Bya8Rnkcz9i%2BOmBPXO3vBeabFl18pqrB%2BRPWr8aI32DK%2FdHBKFCf89BE1VlSZ5SBpbVG3ZXr2J08Er0Lirhl81M1GzMaAc9LHdnXyWck%2FhHo77wrqUQCTE&X-Amz-Signature=e1a918cc8ef346aa3a792a086e33a818bd3917a12aa292b5fa57f3f95e572dea&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L2RFHAX%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFunLJnoh5iUmhzezDO%2BjF0mipJFp5EyeNQJzI8qyBJPAiB2CLBkt9rIuZtftc1JOP%2F%2B48YVXSsEuzFGjhpa2vuKMir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMTdpKPlBni1HZaVKbKtwDTI5Wx4o6dHF%2FO406VC4ow2AIKR1wmuOf3C4UiZgufdtFkZWvmvdSjjX3T8kAeXPbN3joLCMQGaJmbZoa1O%2FkBodkaZpp8AMvaQGNGshweEnzlgzp%2F8IFj5GQLXiYSI85Lxy0tpAnIJFDD6u97qOkZ9AHYniCMpN1XmuarTFwIUFDG4106HoGC4rEc0rtU9edN5%2Fg90toMVjEEcu04Rx0xutxilBttp%2BktIxlMgYTi8dRD7voVemwHk6MYk7vP2AfZBDpOCSKSs0h8%2FbfknQGwohtVRAAWaHmL7Aua0IGH0pj983mn%2FrdrxcpMxZLLgxmnZswIe7%2BCdCh71qKclkAgjQpFqxqJ2V9id%2B01rNsL1sP1%2Fye2v1vpjEorO29sqjtFiJJO0EYSqX77YvW%2B1rqm3e9q66xu2E3MxoENG5WDMuhfynGg6Ak2fWeODTuA%2F2tAdvs6U2gJTH0QcJ1isZr9azFZ0GqeD0ElHeIkR6w%2BAzdivplu8N9PXF0iZrusbd4EhvtD72mio26O8l4%2FfnKw3AdEULp2mqPb5SSNROBhK2ayM1tmz%2BrIM3JL4wbe9Rbqcn%2FKdi0Gnu5CcHy9u8PE3%2FX3Nr4fqtdKYb8UX00JWZ%2FosFFYsJha1Wr8Vgwzv3cvgY6pgHJ6NlE37X5e1gJZEVWyKT9wMqEF87hRrWy%2FGv3ZZHxFxcm%2BVMcnT5mz%2BRWuhR0CYfx%2F4wF7kTlPMyypspYlt8teBat6LQfphNscQGS50%2Bya8Rnkcz9i%2BOmBPXO3vBeabFl18pqrB%2BRPWr8aI32DK%2FdHBKFCf89BE1VlSZ5SBpbVG3ZXr2J08Er0Lirhl81M1GzMaAc9LHdnXyWck%2FhHo77wrqUQCTE&X-Amz-Signature=61bb38190107fb0c8d0727dbde3094fd650b2dea5faecce0b759a4f653a82bd3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L2RFHAX%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFunLJnoh5iUmhzezDO%2BjF0mipJFp5EyeNQJzI8qyBJPAiB2CLBkt9rIuZtftc1JOP%2F%2B48YVXSsEuzFGjhpa2vuKMir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMTdpKPlBni1HZaVKbKtwDTI5Wx4o6dHF%2FO406VC4ow2AIKR1wmuOf3C4UiZgufdtFkZWvmvdSjjX3T8kAeXPbN3joLCMQGaJmbZoa1O%2FkBodkaZpp8AMvaQGNGshweEnzlgzp%2F8IFj5GQLXiYSI85Lxy0tpAnIJFDD6u97qOkZ9AHYniCMpN1XmuarTFwIUFDG4106HoGC4rEc0rtU9edN5%2Fg90toMVjEEcu04Rx0xutxilBttp%2BktIxlMgYTi8dRD7voVemwHk6MYk7vP2AfZBDpOCSKSs0h8%2FbfknQGwohtVRAAWaHmL7Aua0IGH0pj983mn%2FrdrxcpMxZLLgxmnZswIe7%2BCdCh71qKclkAgjQpFqxqJ2V9id%2B01rNsL1sP1%2Fye2v1vpjEorO29sqjtFiJJO0EYSqX77YvW%2B1rqm3e9q66xu2E3MxoENG5WDMuhfynGg6Ak2fWeODTuA%2F2tAdvs6U2gJTH0QcJ1isZr9azFZ0GqeD0ElHeIkR6w%2BAzdivplu8N9PXF0iZrusbd4EhvtD72mio26O8l4%2FfnKw3AdEULp2mqPb5SSNROBhK2ayM1tmz%2BrIM3JL4wbe9Rbqcn%2FKdi0Gnu5CcHy9u8PE3%2FX3Nr4fqtdKYb8UX00JWZ%2FosFFYsJha1Wr8Vgwzv3cvgY6pgHJ6NlE37X5e1gJZEVWyKT9wMqEF87hRrWy%2FGv3ZZHxFxcm%2BVMcnT5mz%2BRWuhR0CYfx%2F4wF7kTlPMyypspYlt8teBat6LQfphNscQGS50%2Bya8Rnkcz9i%2BOmBPXO3vBeabFl18pqrB%2BRPWr8aI32DK%2FdHBKFCf89BE1VlSZ5SBpbVG3ZXr2J08Er0Lirhl81M1GzMaAc9LHdnXyWck%2FhHo77wrqUQCTE&X-Amz-Signature=b22b8ded99408a094f070c5b4156ea390ca1e47c3141da73631c000ade61e642&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L2RFHAX%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFunLJnoh5iUmhzezDO%2BjF0mipJFp5EyeNQJzI8qyBJPAiB2CLBkt9rIuZtftc1JOP%2F%2B48YVXSsEuzFGjhpa2vuKMir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMTdpKPlBni1HZaVKbKtwDTI5Wx4o6dHF%2FO406VC4ow2AIKR1wmuOf3C4UiZgufdtFkZWvmvdSjjX3T8kAeXPbN3joLCMQGaJmbZoa1O%2FkBodkaZpp8AMvaQGNGshweEnzlgzp%2F8IFj5GQLXiYSI85Lxy0tpAnIJFDD6u97qOkZ9AHYniCMpN1XmuarTFwIUFDG4106HoGC4rEc0rtU9edN5%2Fg90toMVjEEcu04Rx0xutxilBttp%2BktIxlMgYTi8dRD7voVemwHk6MYk7vP2AfZBDpOCSKSs0h8%2FbfknQGwohtVRAAWaHmL7Aua0IGH0pj983mn%2FrdrxcpMxZLLgxmnZswIe7%2BCdCh71qKclkAgjQpFqxqJ2V9id%2B01rNsL1sP1%2Fye2v1vpjEorO29sqjtFiJJO0EYSqX77YvW%2B1rqm3e9q66xu2E3MxoENG5WDMuhfynGg6Ak2fWeODTuA%2F2tAdvs6U2gJTH0QcJ1isZr9azFZ0GqeD0ElHeIkR6w%2BAzdivplu8N9PXF0iZrusbd4EhvtD72mio26O8l4%2FfnKw3AdEULp2mqPb5SSNROBhK2ayM1tmz%2BrIM3JL4wbe9Rbqcn%2FKdi0Gnu5CcHy9u8PE3%2FX3Nr4fqtdKYb8UX00JWZ%2FosFFYsJha1Wr8Vgwzv3cvgY6pgHJ6NlE37X5e1gJZEVWyKT9wMqEF87hRrWy%2FGv3ZZHxFxcm%2BVMcnT5mz%2BRWuhR0CYfx%2F4wF7kTlPMyypspYlt8teBat6LQfphNscQGS50%2Bya8Rnkcz9i%2BOmBPXO3vBeabFl18pqrB%2BRPWr8aI32DK%2FdHBKFCf89BE1VlSZ5SBpbVG3ZXr2J08Er0Lirhl81M1GzMaAc9LHdnXyWck%2FhHo77wrqUQCTE&X-Amz-Signature=84f94672c07bf7e6f64282f5775571ddb0920d8cf5cfbd4ce8687534b75c9773&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
