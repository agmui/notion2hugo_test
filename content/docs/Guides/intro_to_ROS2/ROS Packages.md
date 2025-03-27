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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEISWOW%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKInNgIwxQdHzJLLLOFw9W7i3s6ngNunXgnAVOVYeiDAIgYDo5XJ8UFypQC6NRhA4IFNk2l5PpHXKfpPS9nYJ45hUq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDI7Ep7dSe5CgzIv37yrcA3ll11wR1O7bsmVFyPhVkcRA%2BD0TkoQXLrkTPnVEc7qNHx1NSqKcooEAIlQ9o2rBnvQlhR1PLx%2BwYSFLYkL5kYjIWqu8VUbvynq2zByVhhVvP%2FzMN2AY3nTTg2aCd%2BqpF9fQNthXjpUg7wU78h72la%2BQBfnmuJBMieRInUsIFu8Thxn5fgmQHcmNVGxGtICmUApU2Jfzs6sgEuV0RfChfx5FCP6%2Bd5R1idH57UBK%2BmgZuxAkmyrgbd%2BnoAWCi52vHS8eTuidHJmPOW8CST%2FsvTQWU6w%2Bwobal3l4TjNCNhwJpeAR5RSmTL3v8TeJ3vlxIRPt8R7xp0dN5ocZj5uoXi6jYtmagehSxZ5NDhTbGwEEtaja9QXhnlw6NoGuZ7ILeJB6kxztwAuUezTU%2F59sArLBxAi322Etv6m5x92ZkqkJruIMyKrh1Oj7vnBxxGx6WXZ7aza7xs4QyihgJJqgnZbIMhOMbRx7Z%2B%2Bv0L9ptD9P6w4CTodbK8WSpj9lC43zlY9Qdz%2FDuCXYHXZWGEff0hX6itkivz5Z8eibSycwuNx34rdiirxanxszP7dGUDcqgVTA5myrAK8qcq1%2Fe88yIeyDV1o5a9n473tFY9UJsJw1m48gwpVbaKphDBTyMJiil78GOqUBtfua1Y4XWL20V01NbzXG0G4S%2BzvDCMAuf9IPnm02jxMO9v5lpAoJc11Hcmr%2FcGR2f8GkEgGI%2BfyHLF8WWvBTQwiyiFB4EIQjIFTEyTB7sfnnLWPConJHMpSU8oXtdFLYEQWRClKoQUowrcCkBXkhOKM6MR4HJIUbmYVAh8qkO8ztsqjgwUs8PqsV4FBHX%2BYupOx954hr9SKuMfeWMG4sDHiLrxXc&X-Amz-Signature=3e4816b605c313fa2e6cb975d70a797860f0ed4629b11a3cff02bef32a652ce6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEISWOW%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKInNgIwxQdHzJLLLOFw9W7i3s6ngNunXgnAVOVYeiDAIgYDo5XJ8UFypQC6NRhA4IFNk2l5PpHXKfpPS9nYJ45hUq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDI7Ep7dSe5CgzIv37yrcA3ll11wR1O7bsmVFyPhVkcRA%2BD0TkoQXLrkTPnVEc7qNHx1NSqKcooEAIlQ9o2rBnvQlhR1PLx%2BwYSFLYkL5kYjIWqu8VUbvynq2zByVhhVvP%2FzMN2AY3nTTg2aCd%2BqpF9fQNthXjpUg7wU78h72la%2BQBfnmuJBMieRInUsIFu8Thxn5fgmQHcmNVGxGtICmUApU2Jfzs6sgEuV0RfChfx5FCP6%2Bd5R1idH57UBK%2BmgZuxAkmyrgbd%2BnoAWCi52vHS8eTuidHJmPOW8CST%2FsvTQWU6w%2Bwobal3l4TjNCNhwJpeAR5RSmTL3v8TeJ3vlxIRPt8R7xp0dN5ocZj5uoXi6jYtmagehSxZ5NDhTbGwEEtaja9QXhnlw6NoGuZ7ILeJB6kxztwAuUezTU%2F59sArLBxAi322Etv6m5x92ZkqkJruIMyKrh1Oj7vnBxxGx6WXZ7aza7xs4QyihgJJqgnZbIMhOMbRx7Z%2B%2Bv0L9ptD9P6w4CTodbK8WSpj9lC43zlY9Qdz%2FDuCXYHXZWGEff0hX6itkivz5Z8eibSycwuNx34rdiirxanxszP7dGUDcqgVTA5myrAK8qcq1%2Fe88yIeyDV1o5a9n473tFY9UJsJw1m48gwpVbaKphDBTyMJiil78GOqUBtfua1Y4XWL20V01NbzXG0G4S%2BzvDCMAuf9IPnm02jxMO9v5lpAoJc11Hcmr%2FcGR2f8GkEgGI%2BfyHLF8WWvBTQwiyiFB4EIQjIFTEyTB7sfnnLWPConJHMpSU8oXtdFLYEQWRClKoQUowrcCkBXkhOKM6MR4HJIUbmYVAh8qkO8ztsqjgwUs8PqsV4FBHX%2BYupOx954hr9SKuMfeWMG4sDHiLrxXc&X-Amz-Signature=b4882d299b229e1a6718dacbe40681ff3271f77aacc37f6652cd93d608511875&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEISWOW%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKInNgIwxQdHzJLLLOFw9W7i3s6ngNunXgnAVOVYeiDAIgYDo5XJ8UFypQC6NRhA4IFNk2l5PpHXKfpPS9nYJ45hUq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDI7Ep7dSe5CgzIv37yrcA3ll11wR1O7bsmVFyPhVkcRA%2BD0TkoQXLrkTPnVEc7qNHx1NSqKcooEAIlQ9o2rBnvQlhR1PLx%2BwYSFLYkL5kYjIWqu8VUbvynq2zByVhhVvP%2FzMN2AY3nTTg2aCd%2BqpF9fQNthXjpUg7wU78h72la%2BQBfnmuJBMieRInUsIFu8Thxn5fgmQHcmNVGxGtICmUApU2Jfzs6sgEuV0RfChfx5FCP6%2Bd5R1idH57UBK%2BmgZuxAkmyrgbd%2BnoAWCi52vHS8eTuidHJmPOW8CST%2FsvTQWU6w%2Bwobal3l4TjNCNhwJpeAR5RSmTL3v8TeJ3vlxIRPt8R7xp0dN5ocZj5uoXi6jYtmagehSxZ5NDhTbGwEEtaja9QXhnlw6NoGuZ7ILeJB6kxztwAuUezTU%2F59sArLBxAi322Etv6m5x92ZkqkJruIMyKrh1Oj7vnBxxGx6WXZ7aza7xs4QyihgJJqgnZbIMhOMbRx7Z%2B%2Bv0L9ptD9P6w4CTodbK8WSpj9lC43zlY9Qdz%2FDuCXYHXZWGEff0hX6itkivz5Z8eibSycwuNx34rdiirxanxszP7dGUDcqgVTA5myrAK8qcq1%2Fe88yIeyDV1o5a9n473tFY9UJsJw1m48gwpVbaKphDBTyMJiil78GOqUBtfua1Y4XWL20V01NbzXG0G4S%2BzvDCMAuf9IPnm02jxMO9v5lpAoJc11Hcmr%2FcGR2f8GkEgGI%2BfyHLF8WWvBTQwiyiFB4EIQjIFTEyTB7sfnnLWPConJHMpSU8oXtdFLYEQWRClKoQUowrcCkBXkhOKM6MR4HJIUbmYVAh8qkO8ztsqjgwUs8PqsV4FBHX%2BYupOx954hr9SKuMfeWMG4sDHiLrxXc&X-Amz-Signature=d8455056752d35cf77fa37644fa419d1650423cb2a9fabc2cca028bd64a27ea3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEISWOW%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKInNgIwxQdHzJLLLOFw9W7i3s6ngNunXgnAVOVYeiDAIgYDo5XJ8UFypQC6NRhA4IFNk2l5PpHXKfpPS9nYJ45hUq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDI7Ep7dSe5CgzIv37yrcA3ll11wR1O7bsmVFyPhVkcRA%2BD0TkoQXLrkTPnVEc7qNHx1NSqKcooEAIlQ9o2rBnvQlhR1PLx%2BwYSFLYkL5kYjIWqu8VUbvynq2zByVhhVvP%2FzMN2AY3nTTg2aCd%2BqpF9fQNthXjpUg7wU78h72la%2BQBfnmuJBMieRInUsIFu8Thxn5fgmQHcmNVGxGtICmUApU2Jfzs6sgEuV0RfChfx5FCP6%2Bd5R1idH57UBK%2BmgZuxAkmyrgbd%2BnoAWCi52vHS8eTuidHJmPOW8CST%2FsvTQWU6w%2Bwobal3l4TjNCNhwJpeAR5RSmTL3v8TeJ3vlxIRPt8R7xp0dN5ocZj5uoXi6jYtmagehSxZ5NDhTbGwEEtaja9QXhnlw6NoGuZ7ILeJB6kxztwAuUezTU%2F59sArLBxAi322Etv6m5x92ZkqkJruIMyKrh1Oj7vnBxxGx6WXZ7aza7xs4QyihgJJqgnZbIMhOMbRx7Z%2B%2Bv0L9ptD9P6w4CTodbK8WSpj9lC43zlY9Qdz%2FDuCXYHXZWGEff0hX6itkivz5Z8eibSycwuNx34rdiirxanxszP7dGUDcqgVTA5myrAK8qcq1%2Fe88yIeyDV1o5a9n473tFY9UJsJw1m48gwpVbaKphDBTyMJiil78GOqUBtfua1Y4XWL20V01NbzXG0G4S%2BzvDCMAuf9IPnm02jxMO9v5lpAoJc11Hcmr%2FcGR2f8GkEgGI%2BfyHLF8WWvBTQwiyiFB4EIQjIFTEyTB7sfnnLWPConJHMpSU8oXtdFLYEQWRClKoQUowrcCkBXkhOKM6MR4HJIUbmYVAh8qkO8ztsqjgwUs8PqsV4FBHX%2BYupOx954hr9SKuMfeWMG4sDHiLrxXc&X-Amz-Signature=f6f9cbc491aaeda03adf73457287327eea2b728797ab83d8904da9b7f9cd3854&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEISWOW%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKInNgIwxQdHzJLLLOFw9W7i3s6ngNunXgnAVOVYeiDAIgYDo5XJ8UFypQC6NRhA4IFNk2l5PpHXKfpPS9nYJ45hUq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDI7Ep7dSe5CgzIv37yrcA3ll11wR1O7bsmVFyPhVkcRA%2BD0TkoQXLrkTPnVEc7qNHx1NSqKcooEAIlQ9o2rBnvQlhR1PLx%2BwYSFLYkL5kYjIWqu8VUbvynq2zByVhhVvP%2FzMN2AY3nTTg2aCd%2BqpF9fQNthXjpUg7wU78h72la%2BQBfnmuJBMieRInUsIFu8Thxn5fgmQHcmNVGxGtICmUApU2Jfzs6sgEuV0RfChfx5FCP6%2Bd5R1idH57UBK%2BmgZuxAkmyrgbd%2BnoAWCi52vHS8eTuidHJmPOW8CST%2FsvTQWU6w%2Bwobal3l4TjNCNhwJpeAR5RSmTL3v8TeJ3vlxIRPt8R7xp0dN5ocZj5uoXi6jYtmagehSxZ5NDhTbGwEEtaja9QXhnlw6NoGuZ7ILeJB6kxztwAuUezTU%2F59sArLBxAi322Etv6m5x92ZkqkJruIMyKrh1Oj7vnBxxGx6WXZ7aza7xs4QyihgJJqgnZbIMhOMbRx7Z%2B%2Bv0L9ptD9P6w4CTodbK8WSpj9lC43zlY9Qdz%2FDuCXYHXZWGEff0hX6itkivz5Z8eibSycwuNx34rdiirxanxszP7dGUDcqgVTA5myrAK8qcq1%2Fe88yIeyDV1o5a9n473tFY9UJsJw1m48gwpVbaKphDBTyMJiil78GOqUBtfua1Y4XWL20V01NbzXG0G4S%2BzvDCMAuf9IPnm02jxMO9v5lpAoJc11Hcmr%2FcGR2f8GkEgGI%2BfyHLF8WWvBTQwiyiFB4EIQjIFTEyTB7sfnnLWPConJHMpSU8oXtdFLYEQWRClKoQUowrcCkBXkhOKM6MR4HJIUbmYVAh8qkO8ztsqjgwUs8PqsV4FBHX%2BYupOx954hr9SKuMfeWMG4sDHiLrxXc&X-Amz-Signature=99ddc7b751e944592d0ca54fa12c97be999032a6717b5a49a721ddf368aa3c6c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEISWOW%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKInNgIwxQdHzJLLLOFw9W7i3s6ngNunXgnAVOVYeiDAIgYDo5XJ8UFypQC6NRhA4IFNk2l5PpHXKfpPS9nYJ45hUq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDI7Ep7dSe5CgzIv37yrcA3ll11wR1O7bsmVFyPhVkcRA%2BD0TkoQXLrkTPnVEc7qNHx1NSqKcooEAIlQ9o2rBnvQlhR1PLx%2BwYSFLYkL5kYjIWqu8VUbvynq2zByVhhVvP%2FzMN2AY3nTTg2aCd%2BqpF9fQNthXjpUg7wU78h72la%2BQBfnmuJBMieRInUsIFu8Thxn5fgmQHcmNVGxGtICmUApU2Jfzs6sgEuV0RfChfx5FCP6%2Bd5R1idH57UBK%2BmgZuxAkmyrgbd%2BnoAWCi52vHS8eTuidHJmPOW8CST%2FsvTQWU6w%2Bwobal3l4TjNCNhwJpeAR5RSmTL3v8TeJ3vlxIRPt8R7xp0dN5ocZj5uoXi6jYtmagehSxZ5NDhTbGwEEtaja9QXhnlw6NoGuZ7ILeJB6kxztwAuUezTU%2F59sArLBxAi322Etv6m5x92ZkqkJruIMyKrh1Oj7vnBxxGx6WXZ7aza7xs4QyihgJJqgnZbIMhOMbRx7Z%2B%2Bv0L9ptD9P6w4CTodbK8WSpj9lC43zlY9Qdz%2FDuCXYHXZWGEff0hX6itkivz5Z8eibSycwuNx34rdiirxanxszP7dGUDcqgVTA5myrAK8qcq1%2Fe88yIeyDV1o5a9n473tFY9UJsJw1m48gwpVbaKphDBTyMJiil78GOqUBtfua1Y4XWL20V01NbzXG0G4S%2BzvDCMAuf9IPnm02jxMO9v5lpAoJc11Hcmr%2FcGR2f8GkEgGI%2BfyHLF8WWvBTQwiyiFB4EIQjIFTEyTB7sfnnLWPConJHMpSU8oXtdFLYEQWRClKoQUowrcCkBXkhOKM6MR4HJIUbmYVAh8qkO8ztsqjgwUs8PqsV4FBHX%2BYupOx954hr9SKuMfeWMG4sDHiLrxXc&X-Amz-Signature=d0abfbd7538fdb7055b8c6a485828dcc0e012aa99385be978af0276b1e7b3333&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEISWOW%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKInNgIwxQdHzJLLLOFw9W7i3s6ngNunXgnAVOVYeiDAIgYDo5XJ8UFypQC6NRhA4IFNk2l5PpHXKfpPS9nYJ45hUq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDI7Ep7dSe5CgzIv37yrcA3ll11wR1O7bsmVFyPhVkcRA%2BD0TkoQXLrkTPnVEc7qNHx1NSqKcooEAIlQ9o2rBnvQlhR1PLx%2BwYSFLYkL5kYjIWqu8VUbvynq2zByVhhVvP%2FzMN2AY3nTTg2aCd%2BqpF9fQNthXjpUg7wU78h72la%2BQBfnmuJBMieRInUsIFu8Thxn5fgmQHcmNVGxGtICmUApU2Jfzs6sgEuV0RfChfx5FCP6%2Bd5R1idH57UBK%2BmgZuxAkmyrgbd%2BnoAWCi52vHS8eTuidHJmPOW8CST%2FsvTQWU6w%2Bwobal3l4TjNCNhwJpeAR5RSmTL3v8TeJ3vlxIRPt8R7xp0dN5ocZj5uoXi6jYtmagehSxZ5NDhTbGwEEtaja9QXhnlw6NoGuZ7ILeJB6kxztwAuUezTU%2F59sArLBxAi322Etv6m5x92ZkqkJruIMyKrh1Oj7vnBxxGx6WXZ7aza7xs4QyihgJJqgnZbIMhOMbRx7Z%2B%2Bv0L9ptD9P6w4CTodbK8WSpj9lC43zlY9Qdz%2FDuCXYHXZWGEff0hX6itkivz5Z8eibSycwuNx34rdiirxanxszP7dGUDcqgVTA5myrAK8qcq1%2Fe88yIeyDV1o5a9n473tFY9UJsJw1m48gwpVbaKphDBTyMJiil78GOqUBtfua1Y4XWL20V01NbzXG0G4S%2BzvDCMAuf9IPnm02jxMO9v5lpAoJc11Hcmr%2FcGR2f8GkEgGI%2BfyHLF8WWvBTQwiyiFB4EIQjIFTEyTB7sfnnLWPConJHMpSU8oXtdFLYEQWRClKoQUowrcCkBXkhOKM6MR4HJIUbmYVAh8qkO8ztsqjgwUs8PqsV4FBHX%2BYupOx954hr9SKuMfeWMG4sDHiLrxXc&X-Amz-Signature=b800d9aa69a47f9436a9f94edbfecd9ffaffd39c71a12f3b7810b5eebc7b67f3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
