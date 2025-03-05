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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WYKNZYY%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7U2BUbddWL9zajvZMwUzPTBp72v6sWo7%2BGdCDTJ7bBAIhAIDOF52%2FeK0UOCyrARRWidPoF%2BnsGw6Kr%2Bk120hxCKZVKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhmFkge5XnpBcrOL4q3AP2%2Fq711YDN0ierpE%2FHIdOW98JYw7IMzspGAq4u%2FSVDeGn9BBgNNaw8wr1MBOr6S7nLavoqYsvbLGBGvVXgwJQ6QKiq17rFzaDBxvYeaVXAJhVow3EGxEfLQ2CzuwojhmE8l1E5ydE68pP%2F2pVIZWwjsQYKe4ipzX0b%2BreLswonRGNOaAAn0kuORZXTjSzo1DT8eV%2FIHYUKlGnzU%2BI1BsS1Ec9kzXdzIMQDLnlV%2FNuIA3sm3xBCOMx%2FS%2BNk2kl7FwH3yD8P8GclCy7znu1kgJnncXP29V0CN8hxB5hMJwEaLHBHUIdGLZ%2F5OF%2FewC6Syn%2BnDjHPh5d6NYGVo8yt23%2BahRVIbiDlF6drk1bXr3W5caEt3Dd4uqsY2XwJXLaX27NkAMY5v56RrbzwGpSisukdRHVtJ1qb%2FLWQBw%2BY7edAyApcbzf2%2BbvAR5mv5bIJhBYZSU0cie%2BGnlt7AYMXQwFypC5GZRuKokvcUG%2FyVqhxLmv2kT2CS7o1pFiOVbQ0IaVsMw9U339NiNhXh76n7FButm%2FMiBkGRlosg3iPlJT4RUEP3o%2Fa7RU5mNoLq%2BFcRxFJ6hwFN1b%2FmiLlDXyf2IWGS9im4aOrMXFv%2ByfZzbLlTZSzsn7xz%2FvHAgiW9zCTxJ6%2BBjqkAWdddkc%2B53ea9IShD46n%2FNb34acSY1iQbjzeGaHNU6da6muqhJMnHDMi6Y5z1uV8atCjgb6Fj18XQiCC8Ry9ngoO84AqmeRRYMptNJm%2FEj4JVMzw0rGBCrHkFc9rbaoF1JLXcMJwi8Br2mM7fw38ovzcNn2G4Hja9BjdHpJUjdUmQHoSlkOhSAicbqiNSV1hh1TDNFxMYISMdaAmeY5eK45bi0U9&X-Amz-Signature=498ef41414e20a6af400ef6e95a1d0dc6e24e519443f9a566d7787805bd5846f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WYKNZYY%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7U2BUbddWL9zajvZMwUzPTBp72v6sWo7%2BGdCDTJ7bBAIhAIDOF52%2FeK0UOCyrARRWidPoF%2BnsGw6Kr%2Bk120hxCKZVKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhmFkge5XnpBcrOL4q3AP2%2Fq711YDN0ierpE%2FHIdOW98JYw7IMzspGAq4u%2FSVDeGn9BBgNNaw8wr1MBOr6S7nLavoqYsvbLGBGvVXgwJQ6QKiq17rFzaDBxvYeaVXAJhVow3EGxEfLQ2CzuwojhmE8l1E5ydE68pP%2F2pVIZWwjsQYKe4ipzX0b%2BreLswonRGNOaAAn0kuORZXTjSzo1DT8eV%2FIHYUKlGnzU%2BI1BsS1Ec9kzXdzIMQDLnlV%2FNuIA3sm3xBCOMx%2FS%2BNk2kl7FwH3yD8P8GclCy7znu1kgJnncXP29V0CN8hxB5hMJwEaLHBHUIdGLZ%2F5OF%2FewC6Syn%2BnDjHPh5d6NYGVo8yt23%2BahRVIbiDlF6drk1bXr3W5caEt3Dd4uqsY2XwJXLaX27NkAMY5v56RrbzwGpSisukdRHVtJ1qb%2FLWQBw%2BY7edAyApcbzf2%2BbvAR5mv5bIJhBYZSU0cie%2BGnlt7AYMXQwFypC5GZRuKokvcUG%2FyVqhxLmv2kT2CS7o1pFiOVbQ0IaVsMw9U339NiNhXh76n7FButm%2FMiBkGRlosg3iPlJT4RUEP3o%2Fa7RU5mNoLq%2BFcRxFJ6hwFN1b%2FmiLlDXyf2IWGS9im4aOrMXFv%2ByfZzbLlTZSzsn7xz%2FvHAgiW9zCTxJ6%2BBjqkAWdddkc%2B53ea9IShD46n%2FNb34acSY1iQbjzeGaHNU6da6muqhJMnHDMi6Y5z1uV8atCjgb6Fj18XQiCC8Ry9ngoO84AqmeRRYMptNJm%2FEj4JVMzw0rGBCrHkFc9rbaoF1JLXcMJwi8Br2mM7fw38ovzcNn2G4Hja9BjdHpJUjdUmQHoSlkOhSAicbqiNSV1hh1TDNFxMYISMdaAmeY5eK45bi0U9&X-Amz-Signature=86845f86295bd2f207d20b95064b7c5f9e346cc9f0f4544ee8ea20afdb9f3969&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WYKNZYY%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7U2BUbddWL9zajvZMwUzPTBp72v6sWo7%2BGdCDTJ7bBAIhAIDOF52%2FeK0UOCyrARRWidPoF%2BnsGw6Kr%2Bk120hxCKZVKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhmFkge5XnpBcrOL4q3AP2%2Fq711YDN0ierpE%2FHIdOW98JYw7IMzspGAq4u%2FSVDeGn9BBgNNaw8wr1MBOr6S7nLavoqYsvbLGBGvVXgwJQ6QKiq17rFzaDBxvYeaVXAJhVow3EGxEfLQ2CzuwojhmE8l1E5ydE68pP%2F2pVIZWwjsQYKe4ipzX0b%2BreLswonRGNOaAAn0kuORZXTjSzo1DT8eV%2FIHYUKlGnzU%2BI1BsS1Ec9kzXdzIMQDLnlV%2FNuIA3sm3xBCOMx%2FS%2BNk2kl7FwH3yD8P8GclCy7znu1kgJnncXP29V0CN8hxB5hMJwEaLHBHUIdGLZ%2F5OF%2FewC6Syn%2BnDjHPh5d6NYGVo8yt23%2BahRVIbiDlF6drk1bXr3W5caEt3Dd4uqsY2XwJXLaX27NkAMY5v56RrbzwGpSisukdRHVtJ1qb%2FLWQBw%2BY7edAyApcbzf2%2BbvAR5mv5bIJhBYZSU0cie%2BGnlt7AYMXQwFypC5GZRuKokvcUG%2FyVqhxLmv2kT2CS7o1pFiOVbQ0IaVsMw9U339NiNhXh76n7FButm%2FMiBkGRlosg3iPlJT4RUEP3o%2Fa7RU5mNoLq%2BFcRxFJ6hwFN1b%2FmiLlDXyf2IWGS9im4aOrMXFv%2ByfZzbLlTZSzsn7xz%2FvHAgiW9zCTxJ6%2BBjqkAWdddkc%2B53ea9IShD46n%2FNb34acSY1iQbjzeGaHNU6da6muqhJMnHDMi6Y5z1uV8atCjgb6Fj18XQiCC8Ry9ngoO84AqmeRRYMptNJm%2FEj4JVMzw0rGBCrHkFc9rbaoF1JLXcMJwi8Br2mM7fw38ovzcNn2G4Hja9BjdHpJUjdUmQHoSlkOhSAicbqiNSV1hh1TDNFxMYISMdaAmeY5eK45bi0U9&X-Amz-Signature=ff58deb24518ffca9528d61e4a2818bcfbc1b3c65b9bca165dcbba9742ee5430&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WYKNZYY%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7U2BUbddWL9zajvZMwUzPTBp72v6sWo7%2BGdCDTJ7bBAIhAIDOF52%2FeK0UOCyrARRWidPoF%2BnsGw6Kr%2Bk120hxCKZVKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhmFkge5XnpBcrOL4q3AP2%2Fq711YDN0ierpE%2FHIdOW98JYw7IMzspGAq4u%2FSVDeGn9BBgNNaw8wr1MBOr6S7nLavoqYsvbLGBGvVXgwJQ6QKiq17rFzaDBxvYeaVXAJhVow3EGxEfLQ2CzuwojhmE8l1E5ydE68pP%2F2pVIZWwjsQYKe4ipzX0b%2BreLswonRGNOaAAn0kuORZXTjSzo1DT8eV%2FIHYUKlGnzU%2BI1BsS1Ec9kzXdzIMQDLnlV%2FNuIA3sm3xBCOMx%2FS%2BNk2kl7FwH3yD8P8GclCy7znu1kgJnncXP29V0CN8hxB5hMJwEaLHBHUIdGLZ%2F5OF%2FewC6Syn%2BnDjHPh5d6NYGVo8yt23%2BahRVIbiDlF6drk1bXr3W5caEt3Dd4uqsY2XwJXLaX27NkAMY5v56RrbzwGpSisukdRHVtJ1qb%2FLWQBw%2BY7edAyApcbzf2%2BbvAR5mv5bIJhBYZSU0cie%2BGnlt7AYMXQwFypC5GZRuKokvcUG%2FyVqhxLmv2kT2CS7o1pFiOVbQ0IaVsMw9U339NiNhXh76n7FButm%2FMiBkGRlosg3iPlJT4RUEP3o%2Fa7RU5mNoLq%2BFcRxFJ6hwFN1b%2FmiLlDXyf2IWGS9im4aOrMXFv%2ByfZzbLlTZSzsn7xz%2FvHAgiW9zCTxJ6%2BBjqkAWdddkc%2B53ea9IShD46n%2FNb34acSY1iQbjzeGaHNU6da6muqhJMnHDMi6Y5z1uV8atCjgb6Fj18XQiCC8Ry9ngoO84AqmeRRYMptNJm%2FEj4JVMzw0rGBCrHkFc9rbaoF1JLXcMJwi8Br2mM7fw38ovzcNn2G4Hja9BjdHpJUjdUmQHoSlkOhSAicbqiNSV1hh1TDNFxMYISMdaAmeY5eK45bi0U9&X-Amz-Signature=6678428b66d11cabdd28f9800f2df79576a6ee7d4991fb290c239e4a66366904&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WYKNZYY%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7U2BUbddWL9zajvZMwUzPTBp72v6sWo7%2BGdCDTJ7bBAIhAIDOF52%2FeK0UOCyrARRWidPoF%2BnsGw6Kr%2Bk120hxCKZVKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhmFkge5XnpBcrOL4q3AP2%2Fq711YDN0ierpE%2FHIdOW98JYw7IMzspGAq4u%2FSVDeGn9BBgNNaw8wr1MBOr6S7nLavoqYsvbLGBGvVXgwJQ6QKiq17rFzaDBxvYeaVXAJhVow3EGxEfLQ2CzuwojhmE8l1E5ydE68pP%2F2pVIZWwjsQYKe4ipzX0b%2BreLswonRGNOaAAn0kuORZXTjSzo1DT8eV%2FIHYUKlGnzU%2BI1BsS1Ec9kzXdzIMQDLnlV%2FNuIA3sm3xBCOMx%2FS%2BNk2kl7FwH3yD8P8GclCy7znu1kgJnncXP29V0CN8hxB5hMJwEaLHBHUIdGLZ%2F5OF%2FewC6Syn%2BnDjHPh5d6NYGVo8yt23%2BahRVIbiDlF6drk1bXr3W5caEt3Dd4uqsY2XwJXLaX27NkAMY5v56RrbzwGpSisukdRHVtJ1qb%2FLWQBw%2BY7edAyApcbzf2%2BbvAR5mv5bIJhBYZSU0cie%2BGnlt7AYMXQwFypC5GZRuKokvcUG%2FyVqhxLmv2kT2CS7o1pFiOVbQ0IaVsMw9U339NiNhXh76n7FButm%2FMiBkGRlosg3iPlJT4RUEP3o%2Fa7RU5mNoLq%2BFcRxFJ6hwFN1b%2FmiLlDXyf2IWGS9im4aOrMXFv%2ByfZzbLlTZSzsn7xz%2FvHAgiW9zCTxJ6%2BBjqkAWdddkc%2B53ea9IShD46n%2FNb34acSY1iQbjzeGaHNU6da6muqhJMnHDMi6Y5z1uV8atCjgb6Fj18XQiCC8Ry9ngoO84AqmeRRYMptNJm%2FEj4JVMzw0rGBCrHkFc9rbaoF1JLXcMJwi8Br2mM7fw38ovzcNn2G4Hja9BjdHpJUjdUmQHoSlkOhSAicbqiNSV1hh1TDNFxMYISMdaAmeY5eK45bi0U9&X-Amz-Signature=d043be1fc18901255b92f016a8e5484f7c770025b5068568ad89d857192b7641&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WYKNZYY%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7U2BUbddWL9zajvZMwUzPTBp72v6sWo7%2BGdCDTJ7bBAIhAIDOF52%2FeK0UOCyrARRWidPoF%2BnsGw6Kr%2Bk120hxCKZVKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhmFkge5XnpBcrOL4q3AP2%2Fq711YDN0ierpE%2FHIdOW98JYw7IMzspGAq4u%2FSVDeGn9BBgNNaw8wr1MBOr6S7nLavoqYsvbLGBGvVXgwJQ6QKiq17rFzaDBxvYeaVXAJhVow3EGxEfLQ2CzuwojhmE8l1E5ydE68pP%2F2pVIZWwjsQYKe4ipzX0b%2BreLswonRGNOaAAn0kuORZXTjSzo1DT8eV%2FIHYUKlGnzU%2BI1BsS1Ec9kzXdzIMQDLnlV%2FNuIA3sm3xBCOMx%2FS%2BNk2kl7FwH3yD8P8GclCy7znu1kgJnncXP29V0CN8hxB5hMJwEaLHBHUIdGLZ%2F5OF%2FewC6Syn%2BnDjHPh5d6NYGVo8yt23%2BahRVIbiDlF6drk1bXr3W5caEt3Dd4uqsY2XwJXLaX27NkAMY5v56RrbzwGpSisukdRHVtJ1qb%2FLWQBw%2BY7edAyApcbzf2%2BbvAR5mv5bIJhBYZSU0cie%2BGnlt7AYMXQwFypC5GZRuKokvcUG%2FyVqhxLmv2kT2CS7o1pFiOVbQ0IaVsMw9U339NiNhXh76n7FButm%2FMiBkGRlosg3iPlJT4RUEP3o%2Fa7RU5mNoLq%2BFcRxFJ6hwFN1b%2FmiLlDXyf2IWGS9im4aOrMXFv%2ByfZzbLlTZSzsn7xz%2FvHAgiW9zCTxJ6%2BBjqkAWdddkc%2B53ea9IShD46n%2FNb34acSY1iQbjzeGaHNU6da6muqhJMnHDMi6Y5z1uV8atCjgb6Fj18XQiCC8Ry9ngoO84AqmeRRYMptNJm%2FEj4JVMzw0rGBCrHkFc9rbaoF1JLXcMJwi8Br2mM7fw38ovzcNn2G4Hja9BjdHpJUjdUmQHoSlkOhSAicbqiNSV1hh1TDNFxMYISMdaAmeY5eK45bi0U9&X-Amz-Signature=fd91ef55b20e491c6e6cf5122c95c6fcacd21e373925239530be4ad9240cb9fc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WYKNZYY%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7U2BUbddWL9zajvZMwUzPTBp72v6sWo7%2BGdCDTJ7bBAIhAIDOF52%2FeK0UOCyrARRWidPoF%2BnsGw6Kr%2Bk120hxCKZVKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhmFkge5XnpBcrOL4q3AP2%2Fq711YDN0ierpE%2FHIdOW98JYw7IMzspGAq4u%2FSVDeGn9BBgNNaw8wr1MBOr6S7nLavoqYsvbLGBGvVXgwJQ6QKiq17rFzaDBxvYeaVXAJhVow3EGxEfLQ2CzuwojhmE8l1E5ydE68pP%2F2pVIZWwjsQYKe4ipzX0b%2BreLswonRGNOaAAn0kuORZXTjSzo1DT8eV%2FIHYUKlGnzU%2BI1BsS1Ec9kzXdzIMQDLnlV%2FNuIA3sm3xBCOMx%2FS%2BNk2kl7FwH3yD8P8GclCy7znu1kgJnncXP29V0CN8hxB5hMJwEaLHBHUIdGLZ%2F5OF%2FewC6Syn%2BnDjHPh5d6NYGVo8yt23%2BahRVIbiDlF6drk1bXr3W5caEt3Dd4uqsY2XwJXLaX27NkAMY5v56RrbzwGpSisukdRHVtJ1qb%2FLWQBw%2BY7edAyApcbzf2%2BbvAR5mv5bIJhBYZSU0cie%2BGnlt7AYMXQwFypC5GZRuKokvcUG%2FyVqhxLmv2kT2CS7o1pFiOVbQ0IaVsMw9U339NiNhXh76n7FButm%2FMiBkGRlosg3iPlJT4RUEP3o%2Fa7RU5mNoLq%2BFcRxFJ6hwFN1b%2FmiLlDXyf2IWGS9im4aOrMXFv%2ByfZzbLlTZSzsn7xz%2FvHAgiW9zCTxJ6%2BBjqkAWdddkc%2B53ea9IShD46n%2FNb34acSY1iQbjzeGaHNU6da6muqhJMnHDMi6Y5z1uV8atCjgb6Fj18XQiCC8Ry9ngoO84AqmeRRYMptNJm%2FEj4JVMzw0rGBCrHkFc9rbaoF1JLXcMJwi8Br2mM7fw38ovzcNn2G4Hja9BjdHpJUjdUmQHoSlkOhSAicbqiNSV1hh1TDNFxMYISMdaAmeY5eK45bi0U9&X-Amz-Signature=698576db39a67df131e9097bb8e0abaf0eced7958cb87af30f176ec283903f07&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
