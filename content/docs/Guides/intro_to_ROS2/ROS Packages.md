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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJDTSVS%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV%2F8LODmrjcoTjf4Qb838V8HNR05jEoy0FBO%2BrEK1a1AIgEOWOxU7%2Bpy%2FGjOC04HTXyOt7DeIOResrml8zejsFqlEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIm9Vixl7IUzujcgzircA4%2FTbVX0%2FcCeu5BIQSEEhLktKFgwGHsSwVe5YrBCETlrkZDDadpUF1HjaKs6SVi1HqtKs3BC3yO6j%2Fw%2FcHKrFscPZtwMe%2Bikblid2eNDSs0tLwD7A0YdJll8TCRtrK4DWcOIDOKjM0QggE2Eqn6mMt0C86WAQfLx%2FEdqPYM1m43WZpxKjKeDaPfO%2B78twpONmfJJJ0um1NdLKTZ01gqIijUSvml%2F1IzV6bbhyTAMpLQLKLxVkI8EHZ%2F3PXI0epHvZiqzbxMoo0NqEkXGGR15r%2B5OeaNfLvpCK%2B4%2F7uM2JhSxdQpFmhVpMcY2wwStxy4g5EEqq9KLn2WMnm5RbrFwLzsOYRy6Gs1Tw32Z4HAudbAw1qsFIefIvDCZxjnJB2vgfB%2Fn26mPKbAAtnSeHvgjUUUl5b1EPKuPadNuQXAOF%2BoF%2FP38Oqj2YC1gNyw%2B0BMxC9eMmSRNTK8ecsyV2zswRtV4AksxrgeUHIaTqdsERXJBDHpCRZVVVUYKFeq7cu%2FvL8u5gVqnMtKpe2aQ5NZtxDocI1ATaTq%2BWqR9SuqQUKTtIqAtv8z6dxnV1dPZ4yAdzh4kmqMj%2B7xTquRdk9XWZuJIXGuUGPmknzcpNbyYQ3eayjCb1mCVzMEKC4zTMNu0zL4GOqUBpTxf0H0zeqNTCuXTX9BjRV%2Fl6V3x3uck%2BWtyyBGkuVWs0utKwCZy38CO0NuxzfTBt7lMLcSb2zdfNqvvTF%2BwukX%2Bl3iXcSdJSFuxDe1CcVrEZywQCymBtR9NT8uZ8AGdN1nafCqZuDuvaazhIQsw8%2BhKsPMm8eD3jL6nZrQQMvQz44z6K04q6ZSsL7REJFOjRz3J9hTgor5dPq029V%2FRu8eE%2FGS3&X-Amz-Signature=132fafc4629cf61d7eecac1ceea8cb7bc2d73241b8af071fca13103e0cd9965e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJDTSVS%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV%2F8LODmrjcoTjf4Qb838V8HNR05jEoy0FBO%2BrEK1a1AIgEOWOxU7%2Bpy%2FGjOC04HTXyOt7DeIOResrml8zejsFqlEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIm9Vixl7IUzujcgzircA4%2FTbVX0%2FcCeu5BIQSEEhLktKFgwGHsSwVe5YrBCETlrkZDDadpUF1HjaKs6SVi1HqtKs3BC3yO6j%2Fw%2FcHKrFscPZtwMe%2Bikblid2eNDSs0tLwD7A0YdJll8TCRtrK4DWcOIDOKjM0QggE2Eqn6mMt0C86WAQfLx%2FEdqPYM1m43WZpxKjKeDaPfO%2B78twpONmfJJJ0um1NdLKTZ01gqIijUSvml%2F1IzV6bbhyTAMpLQLKLxVkI8EHZ%2F3PXI0epHvZiqzbxMoo0NqEkXGGR15r%2B5OeaNfLvpCK%2B4%2F7uM2JhSxdQpFmhVpMcY2wwStxy4g5EEqq9KLn2WMnm5RbrFwLzsOYRy6Gs1Tw32Z4HAudbAw1qsFIefIvDCZxjnJB2vgfB%2Fn26mPKbAAtnSeHvgjUUUl5b1EPKuPadNuQXAOF%2BoF%2FP38Oqj2YC1gNyw%2B0BMxC9eMmSRNTK8ecsyV2zswRtV4AksxrgeUHIaTqdsERXJBDHpCRZVVVUYKFeq7cu%2FvL8u5gVqnMtKpe2aQ5NZtxDocI1ATaTq%2BWqR9SuqQUKTtIqAtv8z6dxnV1dPZ4yAdzh4kmqMj%2B7xTquRdk9XWZuJIXGuUGPmknzcpNbyYQ3eayjCb1mCVzMEKC4zTMNu0zL4GOqUBpTxf0H0zeqNTCuXTX9BjRV%2Fl6V3x3uck%2BWtyyBGkuVWs0utKwCZy38CO0NuxzfTBt7lMLcSb2zdfNqvvTF%2BwukX%2Bl3iXcSdJSFuxDe1CcVrEZywQCymBtR9NT8uZ8AGdN1nafCqZuDuvaazhIQsw8%2BhKsPMm8eD3jL6nZrQQMvQz44z6K04q6ZSsL7REJFOjRz3J9hTgor5dPq029V%2FRu8eE%2FGS3&X-Amz-Signature=1834f1b3758e78cfd24f3f94f34d9659a61cc9b771852960f519c7495412a2d5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJDTSVS%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV%2F8LODmrjcoTjf4Qb838V8HNR05jEoy0FBO%2BrEK1a1AIgEOWOxU7%2Bpy%2FGjOC04HTXyOt7DeIOResrml8zejsFqlEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIm9Vixl7IUzujcgzircA4%2FTbVX0%2FcCeu5BIQSEEhLktKFgwGHsSwVe5YrBCETlrkZDDadpUF1HjaKs6SVi1HqtKs3BC3yO6j%2Fw%2FcHKrFscPZtwMe%2Bikblid2eNDSs0tLwD7A0YdJll8TCRtrK4DWcOIDOKjM0QggE2Eqn6mMt0C86WAQfLx%2FEdqPYM1m43WZpxKjKeDaPfO%2B78twpONmfJJJ0um1NdLKTZ01gqIijUSvml%2F1IzV6bbhyTAMpLQLKLxVkI8EHZ%2F3PXI0epHvZiqzbxMoo0NqEkXGGR15r%2B5OeaNfLvpCK%2B4%2F7uM2JhSxdQpFmhVpMcY2wwStxy4g5EEqq9KLn2WMnm5RbrFwLzsOYRy6Gs1Tw32Z4HAudbAw1qsFIefIvDCZxjnJB2vgfB%2Fn26mPKbAAtnSeHvgjUUUl5b1EPKuPadNuQXAOF%2BoF%2FP38Oqj2YC1gNyw%2B0BMxC9eMmSRNTK8ecsyV2zswRtV4AksxrgeUHIaTqdsERXJBDHpCRZVVVUYKFeq7cu%2FvL8u5gVqnMtKpe2aQ5NZtxDocI1ATaTq%2BWqR9SuqQUKTtIqAtv8z6dxnV1dPZ4yAdzh4kmqMj%2B7xTquRdk9XWZuJIXGuUGPmknzcpNbyYQ3eayjCb1mCVzMEKC4zTMNu0zL4GOqUBpTxf0H0zeqNTCuXTX9BjRV%2Fl6V3x3uck%2BWtyyBGkuVWs0utKwCZy38CO0NuxzfTBt7lMLcSb2zdfNqvvTF%2BwukX%2Bl3iXcSdJSFuxDe1CcVrEZywQCymBtR9NT8uZ8AGdN1nafCqZuDuvaazhIQsw8%2BhKsPMm8eD3jL6nZrQQMvQz44z6K04q6ZSsL7REJFOjRz3J9hTgor5dPq029V%2FRu8eE%2FGS3&X-Amz-Signature=abcfcf0fefed66e348e43d40759865f16ff02347c7b4309527d60bbb53e4df84&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJDTSVS%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV%2F8LODmrjcoTjf4Qb838V8HNR05jEoy0FBO%2BrEK1a1AIgEOWOxU7%2Bpy%2FGjOC04HTXyOt7DeIOResrml8zejsFqlEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIm9Vixl7IUzujcgzircA4%2FTbVX0%2FcCeu5BIQSEEhLktKFgwGHsSwVe5YrBCETlrkZDDadpUF1HjaKs6SVi1HqtKs3BC3yO6j%2Fw%2FcHKrFscPZtwMe%2Bikblid2eNDSs0tLwD7A0YdJll8TCRtrK4DWcOIDOKjM0QggE2Eqn6mMt0C86WAQfLx%2FEdqPYM1m43WZpxKjKeDaPfO%2B78twpONmfJJJ0um1NdLKTZ01gqIijUSvml%2F1IzV6bbhyTAMpLQLKLxVkI8EHZ%2F3PXI0epHvZiqzbxMoo0NqEkXGGR15r%2B5OeaNfLvpCK%2B4%2F7uM2JhSxdQpFmhVpMcY2wwStxy4g5EEqq9KLn2WMnm5RbrFwLzsOYRy6Gs1Tw32Z4HAudbAw1qsFIefIvDCZxjnJB2vgfB%2Fn26mPKbAAtnSeHvgjUUUl5b1EPKuPadNuQXAOF%2BoF%2FP38Oqj2YC1gNyw%2B0BMxC9eMmSRNTK8ecsyV2zswRtV4AksxrgeUHIaTqdsERXJBDHpCRZVVVUYKFeq7cu%2FvL8u5gVqnMtKpe2aQ5NZtxDocI1ATaTq%2BWqR9SuqQUKTtIqAtv8z6dxnV1dPZ4yAdzh4kmqMj%2B7xTquRdk9XWZuJIXGuUGPmknzcpNbyYQ3eayjCb1mCVzMEKC4zTMNu0zL4GOqUBpTxf0H0zeqNTCuXTX9BjRV%2Fl6V3x3uck%2BWtyyBGkuVWs0utKwCZy38CO0NuxzfTBt7lMLcSb2zdfNqvvTF%2BwukX%2Bl3iXcSdJSFuxDe1CcVrEZywQCymBtR9NT8uZ8AGdN1nafCqZuDuvaazhIQsw8%2BhKsPMm8eD3jL6nZrQQMvQz44z6K04q6ZSsL7REJFOjRz3J9hTgor5dPq029V%2FRu8eE%2FGS3&X-Amz-Signature=31aa56a42917bad5d1656ca0a6cca09f70f463ea375a5aaf188c01703c5e4adf&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJDTSVS%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV%2F8LODmrjcoTjf4Qb838V8HNR05jEoy0FBO%2BrEK1a1AIgEOWOxU7%2Bpy%2FGjOC04HTXyOt7DeIOResrml8zejsFqlEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIm9Vixl7IUzujcgzircA4%2FTbVX0%2FcCeu5BIQSEEhLktKFgwGHsSwVe5YrBCETlrkZDDadpUF1HjaKs6SVi1HqtKs3BC3yO6j%2Fw%2FcHKrFscPZtwMe%2Bikblid2eNDSs0tLwD7A0YdJll8TCRtrK4DWcOIDOKjM0QggE2Eqn6mMt0C86WAQfLx%2FEdqPYM1m43WZpxKjKeDaPfO%2B78twpONmfJJJ0um1NdLKTZ01gqIijUSvml%2F1IzV6bbhyTAMpLQLKLxVkI8EHZ%2F3PXI0epHvZiqzbxMoo0NqEkXGGR15r%2B5OeaNfLvpCK%2B4%2F7uM2JhSxdQpFmhVpMcY2wwStxy4g5EEqq9KLn2WMnm5RbrFwLzsOYRy6Gs1Tw32Z4HAudbAw1qsFIefIvDCZxjnJB2vgfB%2Fn26mPKbAAtnSeHvgjUUUl5b1EPKuPadNuQXAOF%2BoF%2FP38Oqj2YC1gNyw%2B0BMxC9eMmSRNTK8ecsyV2zswRtV4AksxrgeUHIaTqdsERXJBDHpCRZVVVUYKFeq7cu%2FvL8u5gVqnMtKpe2aQ5NZtxDocI1ATaTq%2BWqR9SuqQUKTtIqAtv8z6dxnV1dPZ4yAdzh4kmqMj%2B7xTquRdk9XWZuJIXGuUGPmknzcpNbyYQ3eayjCb1mCVzMEKC4zTMNu0zL4GOqUBpTxf0H0zeqNTCuXTX9BjRV%2Fl6V3x3uck%2BWtyyBGkuVWs0utKwCZy38CO0NuxzfTBt7lMLcSb2zdfNqvvTF%2BwukX%2Bl3iXcSdJSFuxDe1CcVrEZywQCymBtR9NT8uZ8AGdN1nafCqZuDuvaazhIQsw8%2BhKsPMm8eD3jL6nZrQQMvQz44z6K04q6ZSsL7REJFOjRz3J9hTgor5dPq029V%2FRu8eE%2FGS3&X-Amz-Signature=9b5871c243ef23d3c94fecd641877a79bc02420b396560a98bd8f4e05dede318&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJDTSVS%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV%2F8LODmrjcoTjf4Qb838V8HNR05jEoy0FBO%2BrEK1a1AIgEOWOxU7%2Bpy%2FGjOC04HTXyOt7DeIOResrml8zejsFqlEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIm9Vixl7IUzujcgzircA4%2FTbVX0%2FcCeu5BIQSEEhLktKFgwGHsSwVe5YrBCETlrkZDDadpUF1HjaKs6SVi1HqtKs3BC3yO6j%2Fw%2FcHKrFscPZtwMe%2Bikblid2eNDSs0tLwD7A0YdJll8TCRtrK4DWcOIDOKjM0QggE2Eqn6mMt0C86WAQfLx%2FEdqPYM1m43WZpxKjKeDaPfO%2B78twpONmfJJJ0um1NdLKTZ01gqIijUSvml%2F1IzV6bbhyTAMpLQLKLxVkI8EHZ%2F3PXI0epHvZiqzbxMoo0NqEkXGGR15r%2B5OeaNfLvpCK%2B4%2F7uM2JhSxdQpFmhVpMcY2wwStxy4g5EEqq9KLn2WMnm5RbrFwLzsOYRy6Gs1Tw32Z4HAudbAw1qsFIefIvDCZxjnJB2vgfB%2Fn26mPKbAAtnSeHvgjUUUl5b1EPKuPadNuQXAOF%2BoF%2FP38Oqj2YC1gNyw%2B0BMxC9eMmSRNTK8ecsyV2zswRtV4AksxrgeUHIaTqdsERXJBDHpCRZVVVUYKFeq7cu%2FvL8u5gVqnMtKpe2aQ5NZtxDocI1ATaTq%2BWqR9SuqQUKTtIqAtv8z6dxnV1dPZ4yAdzh4kmqMj%2B7xTquRdk9XWZuJIXGuUGPmknzcpNbyYQ3eayjCb1mCVzMEKC4zTMNu0zL4GOqUBpTxf0H0zeqNTCuXTX9BjRV%2Fl6V3x3uck%2BWtyyBGkuVWs0utKwCZy38CO0NuxzfTBt7lMLcSb2zdfNqvvTF%2BwukX%2Bl3iXcSdJSFuxDe1CcVrEZywQCymBtR9NT8uZ8AGdN1nafCqZuDuvaazhIQsw8%2BhKsPMm8eD3jL6nZrQQMvQz44z6K04q6ZSsL7REJFOjRz3J9hTgor5dPq029V%2FRu8eE%2FGS3&X-Amz-Signature=f51b6f634ab9674066d5f417cdfff751337797bc380c1bb6f846b19a106870e6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJDTSVS%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV%2F8LODmrjcoTjf4Qb838V8HNR05jEoy0FBO%2BrEK1a1AIgEOWOxU7%2Bpy%2FGjOC04HTXyOt7DeIOResrml8zejsFqlEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIm9Vixl7IUzujcgzircA4%2FTbVX0%2FcCeu5BIQSEEhLktKFgwGHsSwVe5YrBCETlrkZDDadpUF1HjaKs6SVi1HqtKs3BC3yO6j%2Fw%2FcHKrFscPZtwMe%2Bikblid2eNDSs0tLwD7A0YdJll8TCRtrK4DWcOIDOKjM0QggE2Eqn6mMt0C86WAQfLx%2FEdqPYM1m43WZpxKjKeDaPfO%2B78twpONmfJJJ0um1NdLKTZ01gqIijUSvml%2F1IzV6bbhyTAMpLQLKLxVkI8EHZ%2F3PXI0epHvZiqzbxMoo0NqEkXGGR15r%2B5OeaNfLvpCK%2B4%2F7uM2JhSxdQpFmhVpMcY2wwStxy4g5EEqq9KLn2WMnm5RbrFwLzsOYRy6Gs1Tw32Z4HAudbAw1qsFIefIvDCZxjnJB2vgfB%2Fn26mPKbAAtnSeHvgjUUUl5b1EPKuPadNuQXAOF%2BoF%2FP38Oqj2YC1gNyw%2B0BMxC9eMmSRNTK8ecsyV2zswRtV4AksxrgeUHIaTqdsERXJBDHpCRZVVVUYKFeq7cu%2FvL8u5gVqnMtKpe2aQ5NZtxDocI1ATaTq%2BWqR9SuqQUKTtIqAtv8z6dxnV1dPZ4yAdzh4kmqMj%2B7xTquRdk9XWZuJIXGuUGPmknzcpNbyYQ3eayjCb1mCVzMEKC4zTMNu0zL4GOqUBpTxf0H0zeqNTCuXTX9BjRV%2Fl6V3x3uck%2BWtyyBGkuVWs0utKwCZy38CO0NuxzfTBt7lMLcSb2zdfNqvvTF%2BwukX%2Bl3iXcSdJSFuxDe1CcVrEZywQCymBtR9NT8uZ8AGdN1nafCqZuDuvaazhIQsw8%2BhKsPMm8eD3jL6nZrQQMvQz44z6K04q6ZSsL7REJFOjRz3J9hTgor5dPq029V%2FRu8eE%2FGS3&X-Amz-Signature=36718a53b2a591f17d6b2c8e29e21d07f4c398815d858f6682fe0683ce74fdaa&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
