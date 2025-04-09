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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWXWU7JK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDzV7e3%2B7ihei5WnrFJGXlm4CNjOFVkp%2BpS7CLlkhrSRAIhAOne22LwhynGXBZWN29HH5pckiz3YrRp%2FSkozP0ewQSgKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz800cjfEmLSABGohAq3AOd%2BowPHxwxxU4DSpL9wJ1LkY3D5sFEKuEk4ndzUCMdEfGx9VvOIxSf2EqCdW8IutcQIMQ3e5%2Brt39sP0yhGIN9FmnJvS5Dq02IZshNgTBc2Kl9G7ZaeqMfx1NFlLVZt4GF1g%2Bhu5L4e6N1DOUC21YD5fITOy8HSd1D8FfvmZWa31DMp%2BfxtxMlib20BZKUa0bbHdoZS6Zt7PnqvozGnHJaZLui6HP4HQCoqHQm5zy0eQY9yX81d2DrukVkG2rvgdWB2JN%2BClMgLwiK0Cys3wCyeNoDSKzgzeWhXeJ4Onhlh2bo5AX3wS5VDxProvc%2F4uUEiE89rT%2FuRseH2OhXBmpd%2FjzqrOO2NGq9f6BSmy%2FT9FHZjJaL%2BUHjOY8xlVn2YZVJp4IzpG4KEAf%2BV37m2KSCjkIp9waYevseM%2F48MNPxFO12G6LPW382XL%2BydR%2FAYBU4cI67dE804VxUvmCOJnoXzwzNGVF5gRWaD8KNN%2BuaJ1vqgP%2B%2BxvYQQfUpzrrG7EvBjgT2kTqIDHniSlPt9EPd0pLmH8KVr6fCCOHKYNUZ%2BxgoI0N5EmvWXAd9A%2B%2FDoYHin4Qv7uFCdLh%2BGLJAInxfTO0YW9XGiGvKH1ZKkrmOELn0s%2BXmSKtmLEORkzDNl9m%2FBjqkAQCoyHuqPFkHxKEZVizX9OCiSEVVEtTekXzd%2BvGYO0Y4ZxC4G2%2BSU51kSlgph48SkSpxY0OMoyIGgh6fnP%2B%2BEx%2B3qFkKUqFpB0hBdI2slvWvRaEzRzzN2Ejo92Rk%2BMkBcrCkkR0ygUh%2BBlP2KF2PXxQPRVuM8nPOMAllDHlK6NOFaaOpgh1sdKiab%2BC3Ja5b2h5XyF%2FVDSrJP3txJ0PdUO3tWvmr&X-Amz-Signature=7e8258054725855c4d9d711a45c8a68aaa85a6053a902623e4346733e40331ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWXWU7JK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDzV7e3%2B7ihei5WnrFJGXlm4CNjOFVkp%2BpS7CLlkhrSRAIhAOne22LwhynGXBZWN29HH5pckiz3YrRp%2FSkozP0ewQSgKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz800cjfEmLSABGohAq3AOd%2BowPHxwxxU4DSpL9wJ1LkY3D5sFEKuEk4ndzUCMdEfGx9VvOIxSf2EqCdW8IutcQIMQ3e5%2Brt39sP0yhGIN9FmnJvS5Dq02IZshNgTBc2Kl9G7ZaeqMfx1NFlLVZt4GF1g%2Bhu5L4e6N1DOUC21YD5fITOy8HSd1D8FfvmZWa31DMp%2BfxtxMlib20BZKUa0bbHdoZS6Zt7PnqvozGnHJaZLui6HP4HQCoqHQm5zy0eQY9yX81d2DrukVkG2rvgdWB2JN%2BClMgLwiK0Cys3wCyeNoDSKzgzeWhXeJ4Onhlh2bo5AX3wS5VDxProvc%2F4uUEiE89rT%2FuRseH2OhXBmpd%2FjzqrOO2NGq9f6BSmy%2FT9FHZjJaL%2BUHjOY8xlVn2YZVJp4IzpG4KEAf%2BV37m2KSCjkIp9waYevseM%2F48MNPxFO12G6LPW382XL%2BydR%2FAYBU4cI67dE804VxUvmCOJnoXzwzNGVF5gRWaD8KNN%2BuaJ1vqgP%2B%2BxvYQQfUpzrrG7EvBjgT2kTqIDHniSlPt9EPd0pLmH8KVr6fCCOHKYNUZ%2BxgoI0N5EmvWXAd9A%2B%2FDoYHin4Qv7uFCdLh%2BGLJAInxfTO0YW9XGiGvKH1ZKkrmOELn0s%2BXmSKtmLEORkzDNl9m%2FBjqkAQCoyHuqPFkHxKEZVizX9OCiSEVVEtTekXzd%2BvGYO0Y4ZxC4G2%2BSU51kSlgph48SkSpxY0OMoyIGgh6fnP%2B%2BEx%2B3qFkKUqFpB0hBdI2slvWvRaEzRzzN2Ejo92Rk%2BMkBcrCkkR0ygUh%2BBlP2KF2PXxQPRVuM8nPOMAllDHlK6NOFaaOpgh1sdKiab%2BC3Ja5b2h5XyF%2FVDSrJP3txJ0PdUO3tWvmr&X-Amz-Signature=ba85f20f8de3e44dee43ba65417ea1e0b14e0d74f931b9c358e38e502a81cb79&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWXWU7JK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDzV7e3%2B7ihei5WnrFJGXlm4CNjOFVkp%2BpS7CLlkhrSRAIhAOne22LwhynGXBZWN29HH5pckiz3YrRp%2FSkozP0ewQSgKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz800cjfEmLSABGohAq3AOd%2BowPHxwxxU4DSpL9wJ1LkY3D5sFEKuEk4ndzUCMdEfGx9VvOIxSf2EqCdW8IutcQIMQ3e5%2Brt39sP0yhGIN9FmnJvS5Dq02IZshNgTBc2Kl9G7ZaeqMfx1NFlLVZt4GF1g%2Bhu5L4e6N1DOUC21YD5fITOy8HSd1D8FfvmZWa31DMp%2BfxtxMlib20BZKUa0bbHdoZS6Zt7PnqvozGnHJaZLui6HP4HQCoqHQm5zy0eQY9yX81d2DrukVkG2rvgdWB2JN%2BClMgLwiK0Cys3wCyeNoDSKzgzeWhXeJ4Onhlh2bo5AX3wS5VDxProvc%2F4uUEiE89rT%2FuRseH2OhXBmpd%2FjzqrOO2NGq9f6BSmy%2FT9FHZjJaL%2BUHjOY8xlVn2YZVJp4IzpG4KEAf%2BV37m2KSCjkIp9waYevseM%2F48MNPxFO12G6LPW382XL%2BydR%2FAYBU4cI67dE804VxUvmCOJnoXzwzNGVF5gRWaD8KNN%2BuaJ1vqgP%2B%2BxvYQQfUpzrrG7EvBjgT2kTqIDHniSlPt9EPd0pLmH8KVr6fCCOHKYNUZ%2BxgoI0N5EmvWXAd9A%2B%2FDoYHin4Qv7uFCdLh%2BGLJAInxfTO0YW9XGiGvKH1ZKkrmOELn0s%2BXmSKtmLEORkzDNl9m%2FBjqkAQCoyHuqPFkHxKEZVizX9OCiSEVVEtTekXzd%2BvGYO0Y4ZxC4G2%2BSU51kSlgph48SkSpxY0OMoyIGgh6fnP%2B%2BEx%2B3qFkKUqFpB0hBdI2slvWvRaEzRzzN2Ejo92Rk%2BMkBcrCkkR0ygUh%2BBlP2KF2PXxQPRVuM8nPOMAllDHlK6NOFaaOpgh1sdKiab%2BC3Ja5b2h5XyF%2FVDSrJP3txJ0PdUO3tWvmr&X-Amz-Signature=eadaccc6fc192b362db8eccf9047a5531bb93f81073db55f4cb6078523f5a2b1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWXWU7JK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDzV7e3%2B7ihei5WnrFJGXlm4CNjOFVkp%2BpS7CLlkhrSRAIhAOne22LwhynGXBZWN29HH5pckiz3YrRp%2FSkozP0ewQSgKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz800cjfEmLSABGohAq3AOd%2BowPHxwxxU4DSpL9wJ1LkY3D5sFEKuEk4ndzUCMdEfGx9VvOIxSf2EqCdW8IutcQIMQ3e5%2Brt39sP0yhGIN9FmnJvS5Dq02IZshNgTBc2Kl9G7ZaeqMfx1NFlLVZt4GF1g%2Bhu5L4e6N1DOUC21YD5fITOy8HSd1D8FfvmZWa31DMp%2BfxtxMlib20BZKUa0bbHdoZS6Zt7PnqvozGnHJaZLui6HP4HQCoqHQm5zy0eQY9yX81d2DrukVkG2rvgdWB2JN%2BClMgLwiK0Cys3wCyeNoDSKzgzeWhXeJ4Onhlh2bo5AX3wS5VDxProvc%2F4uUEiE89rT%2FuRseH2OhXBmpd%2FjzqrOO2NGq9f6BSmy%2FT9FHZjJaL%2BUHjOY8xlVn2YZVJp4IzpG4KEAf%2BV37m2KSCjkIp9waYevseM%2F48MNPxFO12G6LPW382XL%2BydR%2FAYBU4cI67dE804VxUvmCOJnoXzwzNGVF5gRWaD8KNN%2BuaJ1vqgP%2B%2BxvYQQfUpzrrG7EvBjgT2kTqIDHniSlPt9EPd0pLmH8KVr6fCCOHKYNUZ%2BxgoI0N5EmvWXAd9A%2B%2FDoYHin4Qv7uFCdLh%2BGLJAInxfTO0YW9XGiGvKH1ZKkrmOELn0s%2BXmSKtmLEORkzDNl9m%2FBjqkAQCoyHuqPFkHxKEZVizX9OCiSEVVEtTekXzd%2BvGYO0Y4ZxC4G2%2BSU51kSlgph48SkSpxY0OMoyIGgh6fnP%2B%2BEx%2B3qFkKUqFpB0hBdI2slvWvRaEzRzzN2Ejo92Rk%2BMkBcrCkkR0ygUh%2BBlP2KF2PXxQPRVuM8nPOMAllDHlK6NOFaaOpgh1sdKiab%2BC3Ja5b2h5XyF%2FVDSrJP3txJ0PdUO3tWvmr&X-Amz-Signature=1955ba00e3f1cf9b25136f3b80c513b87ac0932ae1466a5151b20704120b1f7b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWXWU7JK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDzV7e3%2B7ihei5WnrFJGXlm4CNjOFVkp%2BpS7CLlkhrSRAIhAOne22LwhynGXBZWN29HH5pckiz3YrRp%2FSkozP0ewQSgKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz800cjfEmLSABGohAq3AOd%2BowPHxwxxU4DSpL9wJ1LkY3D5sFEKuEk4ndzUCMdEfGx9VvOIxSf2EqCdW8IutcQIMQ3e5%2Brt39sP0yhGIN9FmnJvS5Dq02IZshNgTBc2Kl9G7ZaeqMfx1NFlLVZt4GF1g%2Bhu5L4e6N1DOUC21YD5fITOy8HSd1D8FfvmZWa31DMp%2BfxtxMlib20BZKUa0bbHdoZS6Zt7PnqvozGnHJaZLui6HP4HQCoqHQm5zy0eQY9yX81d2DrukVkG2rvgdWB2JN%2BClMgLwiK0Cys3wCyeNoDSKzgzeWhXeJ4Onhlh2bo5AX3wS5VDxProvc%2F4uUEiE89rT%2FuRseH2OhXBmpd%2FjzqrOO2NGq9f6BSmy%2FT9FHZjJaL%2BUHjOY8xlVn2YZVJp4IzpG4KEAf%2BV37m2KSCjkIp9waYevseM%2F48MNPxFO12G6LPW382XL%2BydR%2FAYBU4cI67dE804VxUvmCOJnoXzwzNGVF5gRWaD8KNN%2BuaJ1vqgP%2B%2BxvYQQfUpzrrG7EvBjgT2kTqIDHniSlPt9EPd0pLmH8KVr6fCCOHKYNUZ%2BxgoI0N5EmvWXAd9A%2B%2FDoYHin4Qv7uFCdLh%2BGLJAInxfTO0YW9XGiGvKH1ZKkrmOELn0s%2BXmSKtmLEORkzDNl9m%2FBjqkAQCoyHuqPFkHxKEZVizX9OCiSEVVEtTekXzd%2BvGYO0Y4ZxC4G2%2BSU51kSlgph48SkSpxY0OMoyIGgh6fnP%2B%2BEx%2B3qFkKUqFpB0hBdI2slvWvRaEzRzzN2Ejo92Rk%2BMkBcrCkkR0ygUh%2BBlP2KF2PXxQPRVuM8nPOMAllDHlK6NOFaaOpgh1sdKiab%2BC3Ja5b2h5XyF%2FVDSrJP3txJ0PdUO3tWvmr&X-Amz-Signature=df61741bed1c2d8f8b98da364c468fd09e418c39e52965fd74aef97819e7e91d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWXWU7JK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDzV7e3%2B7ihei5WnrFJGXlm4CNjOFVkp%2BpS7CLlkhrSRAIhAOne22LwhynGXBZWN29HH5pckiz3YrRp%2FSkozP0ewQSgKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz800cjfEmLSABGohAq3AOd%2BowPHxwxxU4DSpL9wJ1LkY3D5sFEKuEk4ndzUCMdEfGx9VvOIxSf2EqCdW8IutcQIMQ3e5%2Brt39sP0yhGIN9FmnJvS5Dq02IZshNgTBc2Kl9G7ZaeqMfx1NFlLVZt4GF1g%2Bhu5L4e6N1DOUC21YD5fITOy8HSd1D8FfvmZWa31DMp%2BfxtxMlib20BZKUa0bbHdoZS6Zt7PnqvozGnHJaZLui6HP4HQCoqHQm5zy0eQY9yX81d2DrukVkG2rvgdWB2JN%2BClMgLwiK0Cys3wCyeNoDSKzgzeWhXeJ4Onhlh2bo5AX3wS5VDxProvc%2F4uUEiE89rT%2FuRseH2OhXBmpd%2FjzqrOO2NGq9f6BSmy%2FT9FHZjJaL%2BUHjOY8xlVn2YZVJp4IzpG4KEAf%2BV37m2KSCjkIp9waYevseM%2F48MNPxFO12G6LPW382XL%2BydR%2FAYBU4cI67dE804VxUvmCOJnoXzwzNGVF5gRWaD8KNN%2BuaJ1vqgP%2B%2BxvYQQfUpzrrG7EvBjgT2kTqIDHniSlPt9EPd0pLmH8KVr6fCCOHKYNUZ%2BxgoI0N5EmvWXAd9A%2B%2FDoYHin4Qv7uFCdLh%2BGLJAInxfTO0YW9XGiGvKH1ZKkrmOELn0s%2BXmSKtmLEORkzDNl9m%2FBjqkAQCoyHuqPFkHxKEZVizX9OCiSEVVEtTekXzd%2BvGYO0Y4ZxC4G2%2BSU51kSlgph48SkSpxY0OMoyIGgh6fnP%2B%2BEx%2B3qFkKUqFpB0hBdI2slvWvRaEzRzzN2Ejo92Rk%2BMkBcrCkkR0ygUh%2BBlP2KF2PXxQPRVuM8nPOMAllDHlK6NOFaaOpgh1sdKiab%2BC3Ja5b2h5XyF%2FVDSrJP3txJ0PdUO3tWvmr&X-Amz-Signature=9e845d04c89fb34fc6871454275e0c2be8980a209bf5d280d6d1035b30e780b0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWXWU7JK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDzV7e3%2B7ihei5WnrFJGXlm4CNjOFVkp%2BpS7CLlkhrSRAIhAOne22LwhynGXBZWN29HH5pckiz3YrRp%2FSkozP0ewQSgKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz800cjfEmLSABGohAq3AOd%2BowPHxwxxU4DSpL9wJ1LkY3D5sFEKuEk4ndzUCMdEfGx9VvOIxSf2EqCdW8IutcQIMQ3e5%2Brt39sP0yhGIN9FmnJvS5Dq02IZshNgTBc2Kl9G7ZaeqMfx1NFlLVZt4GF1g%2Bhu5L4e6N1DOUC21YD5fITOy8HSd1D8FfvmZWa31DMp%2BfxtxMlib20BZKUa0bbHdoZS6Zt7PnqvozGnHJaZLui6HP4HQCoqHQm5zy0eQY9yX81d2DrukVkG2rvgdWB2JN%2BClMgLwiK0Cys3wCyeNoDSKzgzeWhXeJ4Onhlh2bo5AX3wS5VDxProvc%2F4uUEiE89rT%2FuRseH2OhXBmpd%2FjzqrOO2NGq9f6BSmy%2FT9FHZjJaL%2BUHjOY8xlVn2YZVJp4IzpG4KEAf%2BV37m2KSCjkIp9waYevseM%2F48MNPxFO12G6LPW382XL%2BydR%2FAYBU4cI67dE804VxUvmCOJnoXzwzNGVF5gRWaD8KNN%2BuaJ1vqgP%2B%2BxvYQQfUpzrrG7EvBjgT2kTqIDHniSlPt9EPd0pLmH8KVr6fCCOHKYNUZ%2BxgoI0N5EmvWXAd9A%2B%2FDoYHin4Qv7uFCdLh%2BGLJAInxfTO0YW9XGiGvKH1ZKkrmOELn0s%2BXmSKtmLEORkzDNl9m%2FBjqkAQCoyHuqPFkHxKEZVizX9OCiSEVVEtTekXzd%2BvGYO0Y4ZxC4G2%2BSU51kSlgph48SkSpxY0OMoyIGgh6fnP%2B%2BEx%2B3qFkKUqFpB0hBdI2slvWvRaEzRzzN2Ejo92Rk%2BMkBcrCkkR0ygUh%2BBlP2KF2PXxQPRVuM8nPOMAllDHlK6NOFaaOpgh1sdKiab%2BC3Ja5b2h5XyF%2FVDSrJP3txJ0PdUO3tWvmr&X-Amz-Signature=b57e07934cf9b81bd91ceb34acfa2ad3bd82da8a53cb333204a646e141fb3a78&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
