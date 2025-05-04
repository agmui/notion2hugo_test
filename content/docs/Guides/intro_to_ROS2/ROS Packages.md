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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KX3ELQP%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDKYnPsssrt4g3k2c1s13tp%2BvB7Geg74kcIoIB9Fv696AIhAJHF97N5DtKCWNaMhrRvheUMPpXSuKLl3Ri5JXMj0PbZKv8DCBEQABoMNjM3NDIzMTgzODA1IgxTY04Gd9oYbWuiFiUq3AMVGoyF%2BAJtc9AfoTf5UQcwy7COEX%2FD1lo%2Bxvniomk6b1NYMemRkLrutavpBPtXeEOzhN%2FpcxZANWx5Y4Cc14rrD8VWLgBjrzKmCuo5wMDzsQCeBUWkyH%2BgN2UZMDBEJutkhVSnwIycwREgCvLRuQwS9UFHxM0dBv8lilBPhbI%2B1wnGsJS%2BL4zUWf1W6p2pAQUuYSEDUE3VUWQlUc3y0PMwVslLTaM1%2Fzn4h%2BIIaPhmnoNbR75s2VF973S78mA%2Fes7KYmp2e6goFkYHfqsqP%2B9eJq0vYwf9l0MidXJJW5ArUVI%2BscussDYLdM1wT3g3B8VUV7h7rRWYxpJtqRKwRWl0NfFqHx%2B0AEtWl1pRBLXj%2FOj5b6FSpMhpqqKsDtQnWihyd7PccsrvdL6aHI3bt4gAmN5g0KrVaLHPZghS4JoLLwknwbRqYec0bIsU%2BGcHAKAWKzHVty%2FuYlP5Yb24WxVdi7hriNeHyb8RxfHamXYeb1Ja6IzcoaBrauTstZxKlIfnuEDa%2Bix%2FhDhE2no07%2FUIyhSbcdTKdkYLZOjLy2r4BXAt5jgeF5NH4KP7GXytCbcAywEbS7RyWTftXd%2B%2FfJ1ZV7T9AIfD7d5x5JaFYjrMf6tp9czS%2F5wOmR8awDCGx9zABjqkAajwExcA4mYpvlLsEf1DiO49tE4WBoxgEAXokT6ICBpvznNfrMGhcqp6VgvAPbeRiQyEXJk87kF2zfNza9saHG%2BzjowmcfX0FG3aCHn9M8NbPILIhhB%2FN9JVAVkhbP6FcPoWKSR2eqH%2FUXxNKhbM1VTcduOI99McdD1oDA%2BQ0Eo442qWTNb10io%2FVWEtPgg2yiMDIsAkZBkQmpn8BvFcvRS25Uce&X-Amz-Signature=5faa5f733c057bfa88d44e3ecd39fc62cb1a401fcc557d90506e8b8cfaa49519&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KX3ELQP%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDKYnPsssrt4g3k2c1s13tp%2BvB7Geg74kcIoIB9Fv696AIhAJHF97N5DtKCWNaMhrRvheUMPpXSuKLl3Ri5JXMj0PbZKv8DCBEQABoMNjM3NDIzMTgzODA1IgxTY04Gd9oYbWuiFiUq3AMVGoyF%2BAJtc9AfoTf5UQcwy7COEX%2FD1lo%2Bxvniomk6b1NYMemRkLrutavpBPtXeEOzhN%2FpcxZANWx5Y4Cc14rrD8VWLgBjrzKmCuo5wMDzsQCeBUWkyH%2BgN2UZMDBEJutkhVSnwIycwREgCvLRuQwS9UFHxM0dBv8lilBPhbI%2B1wnGsJS%2BL4zUWf1W6p2pAQUuYSEDUE3VUWQlUc3y0PMwVslLTaM1%2Fzn4h%2BIIaPhmnoNbR75s2VF973S78mA%2Fes7KYmp2e6goFkYHfqsqP%2B9eJq0vYwf9l0MidXJJW5ArUVI%2BscussDYLdM1wT3g3B8VUV7h7rRWYxpJtqRKwRWl0NfFqHx%2B0AEtWl1pRBLXj%2FOj5b6FSpMhpqqKsDtQnWihyd7PccsrvdL6aHI3bt4gAmN5g0KrVaLHPZghS4JoLLwknwbRqYec0bIsU%2BGcHAKAWKzHVty%2FuYlP5Yb24WxVdi7hriNeHyb8RxfHamXYeb1Ja6IzcoaBrauTstZxKlIfnuEDa%2Bix%2FhDhE2no07%2FUIyhSbcdTKdkYLZOjLy2r4BXAt5jgeF5NH4KP7GXytCbcAywEbS7RyWTftXd%2B%2FfJ1ZV7T9AIfD7d5x5JaFYjrMf6tp9czS%2F5wOmR8awDCGx9zABjqkAajwExcA4mYpvlLsEf1DiO49tE4WBoxgEAXokT6ICBpvznNfrMGhcqp6VgvAPbeRiQyEXJk87kF2zfNza9saHG%2BzjowmcfX0FG3aCHn9M8NbPILIhhB%2FN9JVAVkhbP6FcPoWKSR2eqH%2FUXxNKhbM1VTcduOI99McdD1oDA%2BQ0Eo442qWTNb10io%2FVWEtPgg2yiMDIsAkZBkQmpn8BvFcvRS25Uce&X-Amz-Signature=58a47fbd6f1b9018c1c9b63a3600d0db90ad17ad26eaf49c08e57ceea3229e9d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KX3ELQP%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDKYnPsssrt4g3k2c1s13tp%2BvB7Geg74kcIoIB9Fv696AIhAJHF97N5DtKCWNaMhrRvheUMPpXSuKLl3Ri5JXMj0PbZKv8DCBEQABoMNjM3NDIzMTgzODA1IgxTY04Gd9oYbWuiFiUq3AMVGoyF%2BAJtc9AfoTf5UQcwy7COEX%2FD1lo%2Bxvniomk6b1NYMemRkLrutavpBPtXeEOzhN%2FpcxZANWx5Y4Cc14rrD8VWLgBjrzKmCuo5wMDzsQCeBUWkyH%2BgN2UZMDBEJutkhVSnwIycwREgCvLRuQwS9UFHxM0dBv8lilBPhbI%2B1wnGsJS%2BL4zUWf1W6p2pAQUuYSEDUE3VUWQlUc3y0PMwVslLTaM1%2Fzn4h%2BIIaPhmnoNbR75s2VF973S78mA%2Fes7KYmp2e6goFkYHfqsqP%2B9eJq0vYwf9l0MidXJJW5ArUVI%2BscussDYLdM1wT3g3B8VUV7h7rRWYxpJtqRKwRWl0NfFqHx%2B0AEtWl1pRBLXj%2FOj5b6FSpMhpqqKsDtQnWihyd7PccsrvdL6aHI3bt4gAmN5g0KrVaLHPZghS4JoLLwknwbRqYec0bIsU%2BGcHAKAWKzHVty%2FuYlP5Yb24WxVdi7hriNeHyb8RxfHamXYeb1Ja6IzcoaBrauTstZxKlIfnuEDa%2Bix%2FhDhE2no07%2FUIyhSbcdTKdkYLZOjLy2r4BXAt5jgeF5NH4KP7GXytCbcAywEbS7RyWTftXd%2B%2FfJ1ZV7T9AIfD7d5x5JaFYjrMf6tp9czS%2F5wOmR8awDCGx9zABjqkAajwExcA4mYpvlLsEf1DiO49tE4WBoxgEAXokT6ICBpvznNfrMGhcqp6VgvAPbeRiQyEXJk87kF2zfNza9saHG%2BzjowmcfX0FG3aCHn9M8NbPILIhhB%2FN9JVAVkhbP6FcPoWKSR2eqH%2FUXxNKhbM1VTcduOI99McdD1oDA%2BQ0Eo442qWTNb10io%2FVWEtPgg2yiMDIsAkZBkQmpn8BvFcvRS25Uce&X-Amz-Signature=0ffd3d58a1d9388b19179a94f73d6f17f55fb864309595c88f76f3dd5451b4c4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KX3ELQP%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDKYnPsssrt4g3k2c1s13tp%2BvB7Geg74kcIoIB9Fv696AIhAJHF97N5DtKCWNaMhrRvheUMPpXSuKLl3Ri5JXMj0PbZKv8DCBEQABoMNjM3NDIzMTgzODA1IgxTY04Gd9oYbWuiFiUq3AMVGoyF%2BAJtc9AfoTf5UQcwy7COEX%2FD1lo%2Bxvniomk6b1NYMemRkLrutavpBPtXeEOzhN%2FpcxZANWx5Y4Cc14rrD8VWLgBjrzKmCuo5wMDzsQCeBUWkyH%2BgN2UZMDBEJutkhVSnwIycwREgCvLRuQwS9UFHxM0dBv8lilBPhbI%2B1wnGsJS%2BL4zUWf1W6p2pAQUuYSEDUE3VUWQlUc3y0PMwVslLTaM1%2Fzn4h%2BIIaPhmnoNbR75s2VF973S78mA%2Fes7KYmp2e6goFkYHfqsqP%2B9eJq0vYwf9l0MidXJJW5ArUVI%2BscussDYLdM1wT3g3B8VUV7h7rRWYxpJtqRKwRWl0NfFqHx%2B0AEtWl1pRBLXj%2FOj5b6FSpMhpqqKsDtQnWihyd7PccsrvdL6aHI3bt4gAmN5g0KrVaLHPZghS4JoLLwknwbRqYec0bIsU%2BGcHAKAWKzHVty%2FuYlP5Yb24WxVdi7hriNeHyb8RxfHamXYeb1Ja6IzcoaBrauTstZxKlIfnuEDa%2Bix%2FhDhE2no07%2FUIyhSbcdTKdkYLZOjLy2r4BXAt5jgeF5NH4KP7GXytCbcAywEbS7RyWTftXd%2B%2FfJ1ZV7T9AIfD7d5x5JaFYjrMf6tp9czS%2F5wOmR8awDCGx9zABjqkAajwExcA4mYpvlLsEf1DiO49tE4WBoxgEAXokT6ICBpvznNfrMGhcqp6VgvAPbeRiQyEXJk87kF2zfNza9saHG%2BzjowmcfX0FG3aCHn9M8NbPILIhhB%2FN9JVAVkhbP6FcPoWKSR2eqH%2FUXxNKhbM1VTcduOI99McdD1oDA%2BQ0Eo442qWTNb10io%2FVWEtPgg2yiMDIsAkZBkQmpn8BvFcvRS25Uce&X-Amz-Signature=1270272758d5fda48d37c39f52616f1f0e1d33795a020848c0a2cfd646d71c69&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KX3ELQP%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDKYnPsssrt4g3k2c1s13tp%2BvB7Geg74kcIoIB9Fv696AIhAJHF97N5DtKCWNaMhrRvheUMPpXSuKLl3Ri5JXMj0PbZKv8DCBEQABoMNjM3NDIzMTgzODA1IgxTY04Gd9oYbWuiFiUq3AMVGoyF%2BAJtc9AfoTf5UQcwy7COEX%2FD1lo%2Bxvniomk6b1NYMemRkLrutavpBPtXeEOzhN%2FpcxZANWx5Y4Cc14rrD8VWLgBjrzKmCuo5wMDzsQCeBUWkyH%2BgN2UZMDBEJutkhVSnwIycwREgCvLRuQwS9UFHxM0dBv8lilBPhbI%2B1wnGsJS%2BL4zUWf1W6p2pAQUuYSEDUE3VUWQlUc3y0PMwVslLTaM1%2Fzn4h%2BIIaPhmnoNbR75s2VF973S78mA%2Fes7KYmp2e6goFkYHfqsqP%2B9eJq0vYwf9l0MidXJJW5ArUVI%2BscussDYLdM1wT3g3B8VUV7h7rRWYxpJtqRKwRWl0NfFqHx%2B0AEtWl1pRBLXj%2FOj5b6FSpMhpqqKsDtQnWihyd7PccsrvdL6aHI3bt4gAmN5g0KrVaLHPZghS4JoLLwknwbRqYec0bIsU%2BGcHAKAWKzHVty%2FuYlP5Yb24WxVdi7hriNeHyb8RxfHamXYeb1Ja6IzcoaBrauTstZxKlIfnuEDa%2Bix%2FhDhE2no07%2FUIyhSbcdTKdkYLZOjLy2r4BXAt5jgeF5NH4KP7GXytCbcAywEbS7RyWTftXd%2B%2FfJ1ZV7T9AIfD7d5x5JaFYjrMf6tp9czS%2F5wOmR8awDCGx9zABjqkAajwExcA4mYpvlLsEf1DiO49tE4WBoxgEAXokT6ICBpvznNfrMGhcqp6VgvAPbeRiQyEXJk87kF2zfNza9saHG%2BzjowmcfX0FG3aCHn9M8NbPILIhhB%2FN9JVAVkhbP6FcPoWKSR2eqH%2FUXxNKhbM1VTcduOI99McdD1oDA%2BQ0Eo442qWTNb10io%2FVWEtPgg2yiMDIsAkZBkQmpn8BvFcvRS25Uce&X-Amz-Signature=bf1af5479aa3c1b4f842cd719717c0173028cc8fb7e7972c19c435952c9a6f7d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KX3ELQP%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDKYnPsssrt4g3k2c1s13tp%2BvB7Geg74kcIoIB9Fv696AIhAJHF97N5DtKCWNaMhrRvheUMPpXSuKLl3Ri5JXMj0PbZKv8DCBEQABoMNjM3NDIzMTgzODA1IgxTY04Gd9oYbWuiFiUq3AMVGoyF%2BAJtc9AfoTf5UQcwy7COEX%2FD1lo%2Bxvniomk6b1NYMemRkLrutavpBPtXeEOzhN%2FpcxZANWx5Y4Cc14rrD8VWLgBjrzKmCuo5wMDzsQCeBUWkyH%2BgN2UZMDBEJutkhVSnwIycwREgCvLRuQwS9UFHxM0dBv8lilBPhbI%2B1wnGsJS%2BL4zUWf1W6p2pAQUuYSEDUE3VUWQlUc3y0PMwVslLTaM1%2Fzn4h%2BIIaPhmnoNbR75s2VF973S78mA%2Fes7KYmp2e6goFkYHfqsqP%2B9eJq0vYwf9l0MidXJJW5ArUVI%2BscussDYLdM1wT3g3B8VUV7h7rRWYxpJtqRKwRWl0NfFqHx%2B0AEtWl1pRBLXj%2FOj5b6FSpMhpqqKsDtQnWihyd7PccsrvdL6aHI3bt4gAmN5g0KrVaLHPZghS4JoLLwknwbRqYec0bIsU%2BGcHAKAWKzHVty%2FuYlP5Yb24WxVdi7hriNeHyb8RxfHamXYeb1Ja6IzcoaBrauTstZxKlIfnuEDa%2Bix%2FhDhE2no07%2FUIyhSbcdTKdkYLZOjLy2r4BXAt5jgeF5NH4KP7GXytCbcAywEbS7RyWTftXd%2B%2FfJ1ZV7T9AIfD7d5x5JaFYjrMf6tp9czS%2F5wOmR8awDCGx9zABjqkAajwExcA4mYpvlLsEf1DiO49tE4WBoxgEAXokT6ICBpvznNfrMGhcqp6VgvAPbeRiQyEXJk87kF2zfNza9saHG%2BzjowmcfX0FG3aCHn9M8NbPILIhhB%2FN9JVAVkhbP6FcPoWKSR2eqH%2FUXxNKhbM1VTcduOI99McdD1oDA%2BQ0Eo442qWTNb10io%2FVWEtPgg2yiMDIsAkZBkQmpn8BvFcvRS25Uce&X-Amz-Signature=a385711503e05b37d642f06bddfa4c64638ecbb1e9209bae9714fd6200f11d71&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KX3ELQP%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDKYnPsssrt4g3k2c1s13tp%2BvB7Geg74kcIoIB9Fv696AIhAJHF97N5DtKCWNaMhrRvheUMPpXSuKLl3Ri5JXMj0PbZKv8DCBEQABoMNjM3NDIzMTgzODA1IgxTY04Gd9oYbWuiFiUq3AMVGoyF%2BAJtc9AfoTf5UQcwy7COEX%2FD1lo%2Bxvniomk6b1NYMemRkLrutavpBPtXeEOzhN%2FpcxZANWx5Y4Cc14rrD8VWLgBjrzKmCuo5wMDzsQCeBUWkyH%2BgN2UZMDBEJutkhVSnwIycwREgCvLRuQwS9UFHxM0dBv8lilBPhbI%2B1wnGsJS%2BL4zUWf1W6p2pAQUuYSEDUE3VUWQlUc3y0PMwVslLTaM1%2Fzn4h%2BIIaPhmnoNbR75s2VF973S78mA%2Fes7KYmp2e6goFkYHfqsqP%2B9eJq0vYwf9l0MidXJJW5ArUVI%2BscussDYLdM1wT3g3B8VUV7h7rRWYxpJtqRKwRWl0NfFqHx%2B0AEtWl1pRBLXj%2FOj5b6FSpMhpqqKsDtQnWihyd7PccsrvdL6aHI3bt4gAmN5g0KrVaLHPZghS4JoLLwknwbRqYec0bIsU%2BGcHAKAWKzHVty%2FuYlP5Yb24WxVdi7hriNeHyb8RxfHamXYeb1Ja6IzcoaBrauTstZxKlIfnuEDa%2Bix%2FhDhE2no07%2FUIyhSbcdTKdkYLZOjLy2r4BXAt5jgeF5NH4KP7GXytCbcAywEbS7RyWTftXd%2B%2FfJ1ZV7T9AIfD7d5x5JaFYjrMf6tp9czS%2F5wOmR8awDCGx9zABjqkAajwExcA4mYpvlLsEf1DiO49tE4WBoxgEAXokT6ICBpvznNfrMGhcqp6VgvAPbeRiQyEXJk87kF2zfNza9saHG%2BzjowmcfX0FG3aCHn9M8NbPILIhhB%2FN9JVAVkhbP6FcPoWKSR2eqH%2FUXxNKhbM1VTcduOI99McdD1oDA%2BQ0Eo442qWTNb10io%2FVWEtPgg2yiMDIsAkZBkQmpn8BvFcvRS25Uce&X-Amz-Signature=e63ffa5b7687d92f4512fc8ea1aecae67cc11fd4e0da2593d775790e8fae1e32&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
