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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RPYLW6O%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDolJNeXxhfL1YG3aE3vEyhswHYYFB9AkCTIyWpZOQcvwIhAIr83VD4Mr6agwChcSHZknOsioH3z6zOJGAh0N3n0M5iKv8DCEgQABoMNjM3NDIzMTgzODA1IgxqqNmUPSCbxhdohYUq3APGHYxmJQd%2F4n4ODsUdEoT4kiiDXPoeoIEbfGREl6y%2FjsjctTlVdBxQk5MJgC1bv8Cf%2Bge4tZycecGUez3x6pdrtC%2F%2BklvswqLv8QlPv5bauQqpSWhoSoIswO5YW%2Bc8qEI5s7pzMcVNV1ht8Ga4%2Bv2AtYmONK65BC1QPQrg9nuveVvWAnkHZ69%2Bf1YX2opjpTblRW5XOTtOelM%2Bh01NPnv%2BCAs5FpRxJF%2BsTbKZZzLHy7lRgcnYSY1%2FEid5xRuLoTdPRssUaGLCSS%2BczCPfTI5h%2FxRyJgIJ1B9NTvppjl9eBvuvruBj3AdkL27MW9TjBKdU%2FZjoW%2BFRRBr6BoytcQvTmrquAoeABMkjmh3jymVT6ypyQg7P0d6sbh0fFTEUAvqy%2BJuaIqkmn5NR6Jj3g6JTF%2F1AfeFf4oY9EX6iaT6FRLyk7RF0CPPKFP8xSwc4EgonR07IYHNwjL6fyFzQprbswg8jdlICJOSnHtDOtLDWiWuhkUNenwUIS1lvIGX61AMu46iKRXqVj4CkccNOEIo86CRlYgie3PTRND1XAOMy0%2FRmabjseUWtQ1NNAnuGCRVL5Jh90DRXPaQD3GbWfsM%2FADMKSPBrSJyVvlltmgp2iPbuSffI%2BNgDz946azDpgY69BjqkAekCdD86YFrZWr1q46E5ZPkO%2B8OXNvb5JMgbirMJIEjmpwzlPCiZDSiTfc2r1EJPdToSZfQNbt%2F%2F4%2BuAj80nSMp%2B0L9TPCrRrBx0KvxK5uniKWt5BwSqOd%2BkT%2F2cHNgkb0Q5WFWYI74GPZCn%2BBaEEYmLx6GxhqXZOt46DlEfZb3y5G4u75N96JuW1iy1HPeGZRs%2FJ9R6qiDlroYOhVTpJC5l3MlE&X-Amz-Signature=839e219f228576c3f11b4ef749f6832da385c25f729b0a08757eaa802ba8814c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RPYLW6O%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDolJNeXxhfL1YG3aE3vEyhswHYYFB9AkCTIyWpZOQcvwIhAIr83VD4Mr6agwChcSHZknOsioH3z6zOJGAh0N3n0M5iKv8DCEgQABoMNjM3NDIzMTgzODA1IgxqqNmUPSCbxhdohYUq3APGHYxmJQd%2F4n4ODsUdEoT4kiiDXPoeoIEbfGREl6y%2FjsjctTlVdBxQk5MJgC1bv8Cf%2Bge4tZycecGUez3x6pdrtC%2F%2BklvswqLv8QlPv5bauQqpSWhoSoIswO5YW%2Bc8qEI5s7pzMcVNV1ht8Ga4%2Bv2AtYmONK65BC1QPQrg9nuveVvWAnkHZ69%2Bf1YX2opjpTblRW5XOTtOelM%2Bh01NPnv%2BCAs5FpRxJF%2BsTbKZZzLHy7lRgcnYSY1%2FEid5xRuLoTdPRssUaGLCSS%2BczCPfTI5h%2FxRyJgIJ1B9NTvppjl9eBvuvruBj3AdkL27MW9TjBKdU%2FZjoW%2BFRRBr6BoytcQvTmrquAoeABMkjmh3jymVT6ypyQg7P0d6sbh0fFTEUAvqy%2BJuaIqkmn5NR6Jj3g6JTF%2F1AfeFf4oY9EX6iaT6FRLyk7RF0CPPKFP8xSwc4EgonR07IYHNwjL6fyFzQprbswg8jdlICJOSnHtDOtLDWiWuhkUNenwUIS1lvIGX61AMu46iKRXqVj4CkccNOEIo86CRlYgie3PTRND1XAOMy0%2FRmabjseUWtQ1NNAnuGCRVL5Jh90DRXPaQD3GbWfsM%2FADMKSPBrSJyVvlltmgp2iPbuSffI%2BNgDz946azDpgY69BjqkAekCdD86YFrZWr1q46E5ZPkO%2B8OXNvb5JMgbirMJIEjmpwzlPCiZDSiTfc2r1EJPdToSZfQNbt%2F%2F4%2BuAj80nSMp%2B0L9TPCrRrBx0KvxK5uniKWt5BwSqOd%2BkT%2F2cHNgkb0Q5WFWYI74GPZCn%2BBaEEYmLx6GxhqXZOt46DlEfZb3y5G4u75N96JuW1iy1HPeGZRs%2FJ9R6qiDlroYOhVTpJC5l3MlE&X-Amz-Signature=5b35f780e6684e9fb2da4d17ed77530afcc34202e1b62d86f56e4204659475f3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RPYLW6O%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDolJNeXxhfL1YG3aE3vEyhswHYYFB9AkCTIyWpZOQcvwIhAIr83VD4Mr6agwChcSHZknOsioH3z6zOJGAh0N3n0M5iKv8DCEgQABoMNjM3NDIzMTgzODA1IgxqqNmUPSCbxhdohYUq3APGHYxmJQd%2F4n4ODsUdEoT4kiiDXPoeoIEbfGREl6y%2FjsjctTlVdBxQk5MJgC1bv8Cf%2Bge4tZycecGUez3x6pdrtC%2F%2BklvswqLv8QlPv5bauQqpSWhoSoIswO5YW%2Bc8qEI5s7pzMcVNV1ht8Ga4%2Bv2AtYmONK65BC1QPQrg9nuveVvWAnkHZ69%2Bf1YX2opjpTblRW5XOTtOelM%2Bh01NPnv%2BCAs5FpRxJF%2BsTbKZZzLHy7lRgcnYSY1%2FEid5xRuLoTdPRssUaGLCSS%2BczCPfTI5h%2FxRyJgIJ1B9NTvppjl9eBvuvruBj3AdkL27MW9TjBKdU%2FZjoW%2BFRRBr6BoytcQvTmrquAoeABMkjmh3jymVT6ypyQg7P0d6sbh0fFTEUAvqy%2BJuaIqkmn5NR6Jj3g6JTF%2F1AfeFf4oY9EX6iaT6FRLyk7RF0CPPKFP8xSwc4EgonR07IYHNwjL6fyFzQprbswg8jdlICJOSnHtDOtLDWiWuhkUNenwUIS1lvIGX61AMu46iKRXqVj4CkccNOEIo86CRlYgie3PTRND1XAOMy0%2FRmabjseUWtQ1NNAnuGCRVL5Jh90DRXPaQD3GbWfsM%2FADMKSPBrSJyVvlltmgp2iPbuSffI%2BNgDz946azDpgY69BjqkAekCdD86YFrZWr1q46E5ZPkO%2B8OXNvb5JMgbirMJIEjmpwzlPCiZDSiTfc2r1EJPdToSZfQNbt%2F%2F4%2BuAj80nSMp%2B0L9TPCrRrBx0KvxK5uniKWt5BwSqOd%2BkT%2F2cHNgkb0Q5WFWYI74GPZCn%2BBaEEYmLx6GxhqXZOt46DlEfZb3y5G4u75N96JuW1iy1HPeGZRs%2FJ9R6qiDlroYOhVTpJC5l3MlE&X-Amz-Signature=8fcdc3a3ddc59ca3aa4d8e5b8677c4497c4ea008dc703929e8d9580fc5e1a40a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RPYLW6O%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDolJNeXxhfL1YG3aE3vEyhswHYYFB9AkCTIyWpZOQcvwIhAIr83VD4Mr6agwChcSHZknOsioH3z6zOJGAh0N3n0M5iKv8DCEgQABoMNjM3NDIzMTgzODA1IgxqqNmUPSCbxhdohYUq3APGHYxmJQd%2F4n4ODsUdEoT4kiiDXPoeoIEbfGREl6y%2FjsjctTlVdBxQk5MJgC1bv8Cf%2Bge4tZycecGUez3x6pdrtC%2F%2BklvswqLv8QlPv5bauQqpSWhoSoIswO5YW%2Bc8qEI5s7pzMcVNV1ht8Ga4%2Bv2AtYmONK65BC1QPQrg9nuveVvWAnkHZ69%2Bf1YX2opjpTblRW5XOTtOelM%2Bh01NPnv%2BCAs5FpRxJF%2BsTbKZZzLHy7lRgcnYSY1%2FEid5xRuLoTdPRssUaGLCSS%2BczCPfTI5h%2FxRyJgIJ1B9NTvppjl9eBvuvruBj3AdkL27MW9TjBKdU%2FZjoW%2BFRRBr6BoytcQvTmrquAoeABMkjmh3jymVT6ypyQg7P0d6sbh0fFTEUAvqy%2BJuaIqkmn5NR6Jj3g6JTF%2F1AfeFf4oY9EX6iaT6FRLyk7RF0CPPKFP8xSwc4EgonR07IYHNwjL6fyFzQprbswg8jdlICJOSnHtDOtLDWiWuhkUNenwUIS1lvIGX61AMu46iKRXqVj4CkccNOEIo86CRlYgie3PTRND1XAOMy0%2FRmabjseUWtQ1NNAnuGCRVL5Jh90DRXPaQD3GbWfsM%2FADMKSPBrSJyVvlltmgp2iPbuSffI%2BNgDz946azDpgY69BjqkAekCdD86YFrZWr1q46E5ZPkO%2B8OXNvb5JMgbirMJIEjmpwzlPCiZDSiTfc2r1EJPdToSZfQNbt%2F%2F4%2BuAj80nSMp%2B0L9TPCrRrBx0KvxK5uniKWt5BwSqOd%2BkT%2F2cHNgkb0Q5WFWYI74GPZCn%2BBaEEYmLx6GxhqXZOt46DlEfZb3y5G4u75N96JuW1iy1HPeGZRs%2FJ9R6qiDlroYOhVTpJC5l3MlE&X-Amz-Signature=99465d9332446b38624fda2e47ec468ff371060c4400b4940031dfe047d61434&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RPYLW6O%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDolJNeXxhfL1YG3aE3vEyhswHYYFB9AkCTIyWpZOQcvwIhAIr83VD4Mr6agwChcSHZknOsioH3z6zOJGAh0N3n0M5iKv8DCEgQABoMNjM3NDIzMTgzODA1IgxqqNmUPSCbxhdohYUq3APGHYxmJQd%2F4n4ODsUdEoT4kiiDXPoeoIEbfGREl6y%2FjsjctTlVdBxQk5MJgC1bv8Cf%2Bge4tZycecGUez3x6pdrtC%2F%2BklvswqLv8QlPv5bauQqpSWhoSoIswO5YW%2Bc8qEI5s7pzMcVNV1ht8Ga4%2Bv2AtYmONK65BC1QPQrg9nuveVvWAnkHZ69%2Bf1YX2opjpTblRW5XOTtOelM%2Bh01NPnv%2BCAs5FpRxJF%2BsTbKZZzLHy7lRgcnYSY1%2FEid5xRuLoTdPRssUaGLCSS%2BczCPfTI5h%2FxRyJgIJ1B9NTvppjl9eBvuvruBj3AdkL27MW9TjBKdU%2FZjoW%2BFRRBr6BoytcQvTmrquAoeABMkjmh3jymVT6ypyQg7P0d6sbh0fFTEUAvqy%2BJuaIqkmn5NR6Jj3g6JTF%2F1AfeFf4oY9EX6iaT6FRLyk7RF0CPPKFP8xSwc4EgonR07IYHNwjL6fyFzQprbswg8jdlICJOSnHtDOtLDWiWuhkUNenwUIS1lvIGX61AMu46iKRXqVj4CkccNOEIo86CRlYgie3PTRND1XAOMy0%2FRmabjseUWtQ1NNAnuGCRVL5Jh90DRXPaQD3GbWfsM%2FADMKSPBrSJyVvlltmgp2iPbuSffI%2BNgDz946azDpgY69BjqkAekCdD86YFrZWr1q46E5ZPkO%2B8OXNvb5JMgbirMJIEjmpwzlPCiZDSiTfc2r1EJPdToSZfQNbt%2F%2F4%2BuAj80nSMp%2B0L9TPCrRrBx0KvxK5uniKWt5BwSqOd%2BkT%2F2cHNgkb0Q5WFWYI74GPZCn%2BBaEEYmLx6GxhqXZOt46DlEfZb3y5G4u75N96JuW1iy1HPeGZRs%2FJ9R6qiDlroYOhVTpJC5l3MlE&X-Amz-Signature=bc1f2c676dca5d1ec99a1c90315be56738ab74649ee37b8fbeacb2d0b59fc6cc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RPYLW6O%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDolJNeXxhfL1YG3aE3vEyhswHYYFB9AkCTIyWpZOQcvwIhAIr83VD4Mr6agwChcSHZknOsioH3z6zOJGAh0N3n0M5iKv8DCEgQABoMNjM3NDIzMTgzODA1IgxqqNmUPSCbxhdohYUq3APGHYxmJQd%2F4n4ODsUdEoT4kiiDXPoeoIEbfGREl6y%2FjsjctTlVdBxQk5MJgC1bv8Cf%2Bge4tZycecGUez3x6pdrtC%2F%2BklvswqLv8QlPv5bauQqpSWhoSoIswO5YW%2Bc8qEI5s7pzMcVNV1ht8Ga4%2Bv2AtYmONK65BC1QPQrg9nuveVvWAnkHZ69%2Bf1YX2opjpTblRW5XOTtOelM%2Bh01NPnv%2BCAs5FpRxJF%2BsTbKZZzLHy7lRgcnYSY1%2FEid5xRuLoTdPRssUaGLCSS%2BczCPfTI5h%2FxRyJgIJ1B9NTvppjl9eBvuvruBj3AdkL27MW9TjBKdU%2FZjoW%2BFRRBr6BoytcQvTmrquAoeABMkjmh3jymVT6ypyQg7P0d6sbh0fFTEUAvqy%2BJuaIqkmn5NR6Jj3g6JTF%2F1AfeFf4oY9EX6iaT6FRLyk7RF0CPPKFP8xSwc4EgonR07IYHNwjL6fyFzQprbswg8jdlICJOSnHtDOtLDWiWuhkUNenwUIS1lvIGX61AMu46iKRXqVj4CkccNOEIo86CRlYgie3PTRND1XAOMy0%2FRmabjseUWtQ1NNAnuGCRVL5Jh90DRXPaQD3GbWfsM%2FADMKSPBrSJyVvlltmgp2iPbuSffI%2BNgDz946azDpgY69BjqkAekCdD86YFrZWr1q46E5ZPkO%2B8OXNvb5JMgbirMJIEjmpwzlPCiZDSiTfc2r1EJPdToSZfQNbt%2F%2F4%2BuAj80nSMp%2B0L9TPCrRrBx0KvxK5uniKWt5BwSqOd%2BkT%2F2cHNgkb0Q5WFWYI74GPZCn%2BBaEEYmLx6GxhqXZOt46DlEfZb3y5G4u75N96JuW1iy1HPeGZRs%2FJ9R6qiDlroYOhVTpJC5l3MlE&X-Amz-Signature=0510449c46a81d3b475617c89a3a2d1f8436176362f3942131bea9158f30a6b2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RPYLW6O%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDolJNeXxhfL1YG3aE3vEyhswHYYFB9AkCTIyWpZOQcvwIhAIr83VD4Mr6agwChcSHZknOsioH3z6zOJGAh0N3n0M5iKv8DCEgQABoMNjM3NDIzMTgzODA1IgxqqNmUPSCbxhdohYUq3APGHYxmJQd%2F4n4ODsUdEoT4kiiDXPoeoIEbfGREl6y%2FjsjctTlVdBxQk5MJgC1bv8Cf%2Bge4tZycecGUez3x6pdrtC%2F%2BklvswqLv8QlPv5bauQqpSWhoSoIswO5YW%2Bc8qEI5s7pzMcVNV1ht8Ga4%2Bv2AtYmONK65BC1QPQrg9nuveVvWAnkHZ69%2Bf1YX2opjpTblRW5XOTtOelM%2Bh01NPnv%2BCAs5FpRxJF%2BsTbKZZzLHy7lRgcnYSY1%2FEid5xRuLoTdPRssUaGLCSS%2BczCPfTI5h%2FxRyJgIJ1B9NTvppjl9eBvuvruBj3AdkL27MW9TjBKdU%2FZjoW%2BFRRBr6BoytcQvTmrquAoeABMkjmh3jymVT6ypyQg7P0d6sbh0fFTEUAvqy%2BJuaIqkmn5NR6Jj3g6JTF%2F1AfeFf4oY9EX6iaT6FRLyk7RF0CPPKFP8xSwc4EgonR07IYHNwjL6fyFzQprbswg8jdlICJOSnHtDOtLDWiWuhkUNenwUIS1lvIGX61AMu46iKRXqVj4CkccNOEIo86CRlYgie3PTRND1XAOMy0%2FRmabjseUWtQ1NNAnuGCRVL5Jh90DRXPaQD3GbWfsM%2FADMKSPBrSJyVvlltmgp2iPbuSffI%2BNgDz946azDpgY69BjqkAekCdD86YFrZWr1q46E5ZPkO%2B8OXNvb5JMgbirMJIEjmpwzlPCiZDSiTfc2r1EJPdToSZfQNbt%2F%2F4%2BuAj80nSMp%2B0L9TPCrRrBx0KvxK5uniKWt5BwSqOd%2BkT%2F2cHNgkb0Q5WFWYI74GPZCn%2BBaEEYmLx6GxhqXZOt46DlEfZb3y5G4u75N96JuW1iy1HPeGZRs%2FJ9R6qiDlroYOhVTpJC5l3MlE&X-Amz-Signature=1e6ded33725190f9940700344b57e928e574c045d21551ca74f2dd8fc5268c6c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
