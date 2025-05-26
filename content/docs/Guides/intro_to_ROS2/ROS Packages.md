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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GQIFMXS%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFb7zANQJD73KvWGwVm43vBe%2Fwolfu8Qyjvy0OM5WDNZAiAe2SjrgKBzvv33YCzHkyclYlJ%2FoIihdyNKcA%2Bg%2BqOryyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMpkwrpJuAnnnDqdSGKtwDGbaC3N5UIPXZl6tGA40HbRXOQFreFnI%2BGu6MCldxsJNM9IuA337gXELvyG%2Fmw%2Fz6BMfLlK%2FnQCZeX9Dy8gZPpiX%2FCsbv%2BIQdzvgeevvL9t6TNQS4Xbcf247B1Ayk4%2FP62Aoqonm7Zz%2BYh26uEbMM2wdgx1eS5oaOZo9%2BLqQn9wLPtO5TU2sh61%2F%2BghE9qvh2sA1jpy2qoLOFniTYLdwZf2Joxvst1wzVDRT5Rt993SAv%2BT6WCHupBhmmR%2B1Gx%2BXuP4moQk%2FKIOBoN4IjRyXAtJWqO%2Fghkk%2FeyV93CcuTK4Zh3qtL3lw6pvWpithXbeyK8n02kY%2FPgi%2BHOuFSW4ipgSJPg97InqL6LoMWkbAM%2FBRguZuzh%2B%2BkDEElufYSEThLyOgVUPZ4cx56mQVPUraZFgHlSWLOgQfLsOsAMoAveKqukgRhG2LEqYrEZyyR4FTbR8HK1rgNWTLRiEHA3or8vz5KD0kNjWnJIJD0pLQ8SteDh1QtdHuABx01pSrFzAmmvhl96Jx6hC97vfjDSWb94tYe6gWsSHAZde0Jnlno1kWiwz7QtpPpdNkNOuQlLYkcPj%2B4fsfUcNpoqB%2BgNAP3eXHEsbI65RQ4a4SS9L3SlWKf%2Fhbt%2Fa6HhNB4eFkw56zTwQY6pgEkX8XSpi5UJfvewWageFZv1pBaT8anBXXsAGd1rfE73VAWkCrDkuV1k1gGrWwtVeGmIyUpShFTMNkJFek3Qmkv9WT0oA2XX3A%2Bt6TKGw9ZTrf3nxq5%2Ft%2FR1vCZKc8jKhjfFdoBY9PaXCr6nzsZqYKedxOqKaf4YZpOCVQHckwZowjMiGzw2tjEkLN4kaTe2u5cTDausuLFkBXXv%2Blgq8Ley1wyuGFm&X-Amz-Signature=324af0f6030f5374f42f26305d59d4b5f768c8a2e93fb5114d5de58f84331f51&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GQIFMXS%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFb7zANQJD73KvWGwVm43vBe%2Fwolfu8Qyjvy0OM5WDNZAiAe2SjrgKBzvv33YCzHkyclYlJ%2FoIihdyNKcA%2Bg%2BqOryyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMpkwrpJuAnnnDqdSGKtwDGbaC3N5UIPXZl6tGA40HbRXOQFreFnI%2BGu6MCldxsJNM9IuA337gXELvyG%2Fmw%2Fz6BMfLlK%2FnQCZeX9Dy8gZPpiX%2FCsbv%2BIQdzvgeevvL9t6TNQS4Xbcf247B1Ayk4%2FP62Aoqonm7Zz%2BYh26uEbMM2wdgx1eS5oaOZo9%2BLqQn9wLPtO5TU2sh61%2F%2BghE9qvh2sA1jpy2qoLOFniTYLdwZf2Joxvst1wzVDRT5Rt993SAv%2BT6WCHupBhmmR%2B1Gx%2BXuP4moQk%2FKIOBoN4IjRyXAtJWqO%2Fghkk%2FeyV93CcuTK4Zh3qtL3lw6pvWpithXbeyK8n02kY%2FPgi%2BHOuFSW4ipgSJPg97InqL6LoMWkbAM%2FBRguZuzh%2B%2BkDEElufYSEThLyOgVUPZ4cx56mQVPUraZFgHlSWLOgQfLsOsAMoAveKqukgRhG2LEqYrEZyyR4FTbR8HK1rgNWTLRiEHA3or8vz5KD0kNjWnJIJD0pLQ8SteDh1QtdHuABx01pSrFzAmmvhl96Jx6hC97vfjDSWb94tYe6gWsSHAZde0Jnlno1kWiwz7QtpPpdNkNOuQlLYkcPj%2B4fsfUcNpoqB%2BgNAP3eXHEsbI65RQ4a4SS9L3SlWKf%2Fhbt%2Fa6HhNB4eFkw56zTwQY6pgEkX8XSpi5UJfvewWageFZv1pBaT8anBXXsAGd1rfE73VAWkCrDkuV1k1gGrWwtVeGmIyUpShFTMNkJFek3Qmkv9WT0oA2XX3A%2Bt6TKGw9ZTrf3nxq5%2Ft%2FR1vCZKc8jKhjfFdoBY9PaXCr6nzsZqYKedxOqKaf4YZpOCVQHckwZowjMiGzw2tjEkLN4kaTe2u5cTDausuLFkBXXv%2Blgq8Ley1wyuGFm&X-Amz-Signature=ed547cba829f277a1b3817f30ce4aa2c5526e180b08c30408005748520090555&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GQIFMXS%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFb7zANQJD73KvWGwVm43vBe%2Fwolfu8Qyjvy0OM5WDNZAiAe2SjrgKBzvv33YCzHkyclYlJ%2FoIihdyNKcA%2Bg%2BqOryyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMpkwrpJuAnnnDqdSGKtwDGbaC3N5UIPXZl6tGA40HbRXOQFreFnI%2BGu6MCldxsJNM9IuA337gXELvyG%2Fmw%2Fz6BMfLlK%2FnQCZeX9Dy8gZPpiX%2FCsbv%2BIQdzvgeevvL9t6TNQS4Xbcf247B1Ayk4%2FP62Aoqonm7Zz%2BYh26uEbMM2wdgx1eS5oaOZo9%2BLqQn9wLPtO5TU2sh61%2F%2BghE9qvh2sA1jpy2qoLOFniTYLdwZf2Joxvst1wzVDRT5Rt993SAv%2BT6WCHupBhmmR%2B1Gx%2BXuP4moQk%2FKIOBoN4IjRyXAtJWqO%2Fghkk%2FeyV93CcuTK4Zh3qtL3lw6pvWpithXbeyK8n02kY%2FPgi%2BHOuFSW4ipgSJPg97InqL6LoMWkbAM%2FBRguZuzh%2B%2BkDEElufYSEThLyOgVUPZ4cx56mQVPUraZFgHlSWLOgQfLsOsAMoAveKqukgRhG2LEqYrEZyyR4FTbR8HK1rgNWTLRiEHA3or8vz5KD0kNjWnJIJD0pLQ8SteDh1QtdHuABx01pSrFzAmmvhl96Jx6hC97vfjDSWb94tYe6gWsSHAZde0Jnlno1kWiwz7QtpPpdNkNOuQlLYkcPj%2B4fsfUcNpoqB%2BgNAP3eXHEsbI65RQ4a4SS9L3SlWKf%2Fhbt%2Fa6HhNB4eFkw56zTwQY6pgEkX8XSpi5UJfvewWageFZv1pBaT8anBXXsAGd1rfE73VAWkCrDkuV1k1gGrWwtVeGmIyUpShFTMNkJFek3Qmkv9WT0oA2XX3A%2Bt6TKGw9ZTrf3nxq5%2Ft%2FR1vCZKc8jKhjfFdoBY9PaXCr6nzsZqYKedxOqKaf4YZpOCVQHckwZowjMiGzw2tjEkLN4kaTe2u5cTDausuLFkBXXv%2Blgq8Ley1wyuGFm&X-Amz-Signature=e98edfd265aef9009f7ef30da22b41d3c464f6dcd683aa95b3820b01ac7d7b65&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GQIFMXS%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFb7zANQJD73KvWGwVm43vBe%2Fwolfu8Qyjvy0OM5WDNZAiAe2SjrgKBzvv33YCzHkyclYlJ%2FoIihdyNKcA%2Bg%2BqOryyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMpkwrpJuAnnnDqdSGKtwDGbaC3N5UIPXZl6tGA40HbRXOQFreFnI%2BGu6MCldxsJNM9IuA337gXELvyG%2Fmw%2Fz6BMfLlK%2FnQCZeX9Dy8gZPpiX%2FCsbv%2BIQdzvgeevvL9t6TNQS4Xbcf247B1Ayk4%2FP62Aoqonm7Zz%2BYh26uEbMM2wdgx1eS5oaOZo9%2BLqQn9wLPtO5TU2sh61%2F%2BghE9qvh2sA1jpy2qoLOFniTYLdwZf2Joxvst1wzVDRT5Rt993SAv%2BT6WCHupBhmmR%2B1Gx%2BXuP4moQk%2FKIOBoN4IjRyXAtJWqO%2Fghkk%2FeyV93CcuTK4Zh3qtL3lw6pvWpithXbeyK8n02kY%2FPgi%2BHOuFSW4ipgSJPg97InqL6LoMWkbAM%2FBRguZuzh%2B%2BkDEElufYSEThLyOgVUPZ4cx56mQVPUraZFgHlSWLOgQfLsOsAMoAveKqukgRhG2LEqYrEZyyR4FTbR8HK1rgNWTLRiEHA3or8vz5KD0kNjWnJIJD0pLQ8SteDh1QtdHuABx01pSrFzAmmvhl96Jx6hC97vfjDSWb94tYe6gWsSHAZde0Jnlno1kWiwz7QtpPpdNkNOuQlLYkcPj%2B4fsfUcNpoqB%2BgNAP3eXHEsbI65RQ4a4SS9L3SlWKf%2Fhbt%2Fa6HhNB4eFkw56zTwQY6pgEkX8XSpi5UJfvewWageFZv1pBaT8anBXXsAGd1rfE73VAWkCrDkuV1k1gGrWwtVeGmIyUpShFTMNkJFek3Qmkv9WT0oA2XX3A%2Bt6TKGw9ZTrf3nxq5%2Ft%2FR1vCZKc8jKhjfFdoBY9PaXCr6nzsZqYKedxOqKaf4YZpOCVQHckwZowjMiGzw2tjEkLN4kaTe2u5cTDausuLFkBXXv%2Blgq8Ley1wyuGFm&X-Amz-Signature=5b3feaf73c6fbbd9de317058faf384f8c608d2b5b6f00cf71bc3eff1a10c444e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GQIFMXS%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFb7zANQJD73KvWGwVm43vBe%2Fwolfu8Qyjvy0OM5WDNZAiAe2SjrgKBzvv33YCzHkyclYlJ%2FoIihdyNKcA%2Bg%2BqOryyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMpkwrpJuAnnnDqdSGKtwDGbaC3N5UIPXZl6tGA40HbRXOQFreFnI%2BGu6MCldxsJNM9IuA337gXELvyG%2Fmw%2Fz6BMfLlK%2FnQCZeX9Dy8gZPpiX%2FCsbv%2BIQdzvgeevvL9t6TNQS4Xbcf247B1Ayk4%2FP62Aoqonm7Zz%2BYh26uEbMM2wdgx1eS5oaOZo9%2BLqQn9wLPtO5TU2sh61%2F%2BghE9qvh2sA1jpy2qoLOFniTYLdwZf2Joxvst1wzVDRT5Rt993SAv%2BT6WCHupBhmmR%2B1Gx%2BXuP4moQk%2FKIOBoN4IjRyXAtJWqO%2Fghkk%2FeyV93CcuTK4Zh3qtL3lw6pvWpithXbeyK8n02kY%2FPgi%2BHOuFSW4ipgSJPg97InqL6LoMWkbAM%2FBRguZuzh%2B%2BkDEElufYSEThLyOgVUPZ4cx56mQVPUraZFgHlSWLOgQfLsOsAMoAveKqukgRhG2LEqYrEZyyR4FTbR8HK1rgNWTLRiEHA3or8vz5KD0kNjWnJIJD0pLQ8SteDh1QtdHuABx01pSrFzAmmvhl96Jx6hC97vfjDSWb94tYe6gWsSHAZde0Jnlno1kWiwz7QtpPpdNkNOuQlLYkcPj%2B4fsfUcNpoqB%2BgNAP3eXHEsbI65RQ4a4SS9L3SlWKf%2Fhbt%2Fa6HhNB4eFkw56zTwQY6pgEkX8XSpi5UJfvewWageFZv1pBaT8anBXXsAGd1rfE73VAWkCrDkuV1k1gGrWwtVeGmIyUpShFTMNkJFek3Qmkv9WT0oA2XX3A%2Bt6TKGw9ZTrf3nxq5%2Ft%2FR1vCZKc8jKhjfFdoBY9PaXCr6nzsZqYKedxOqKaf4YZpOCVQHckwZowjMiGzw2tjEkLN4kaTe2u5cTDausuLFkBXXv%2Blgq8Ley1wyuGFm&X-Amz-Signature=52a6a16e4fb1a1a7f3729c94efc026468fb5bc91e420e0df97a52de84d763445&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GQIFMXS%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFb7zANQJD73KvWGwVm43vBe%2Fwolfu8Qyjvy0OM5WDNZAiAe2SjrgKBzvv33YCzHkyclYlJ%2FoIihdyNKcA%2Bg%2BqOryyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMpkwrpJuAnnnDqdSGKtwDGbaC3N5UIPXZl6tGA40HbRXOQFreFnI%2BGu6MCldxsJNM9IuA337gXELvyG%2Fmw%2Fz6BMfLlK%2FnQCZeX9Dy8gZPpiX%2FCsbv%2BIQdzvgeevvL9t6TNQS4Xbcf247B1Ayk4%2FP62Aoqonm7Zz%2BYh26uEbMM2wdgx1eS5oaOZo9%2BLqQn9wLPtO5TU2sh61%2F%2BghE9qvh2sA1jpy2qoLOFniTYLdwZf2Joxvst1wzVDRT5Rt993SAv%2BT6WCHupBhmmR%2B1Gx%2BXuP4moQk%2FKIOBoN4IjRyXAtJWqO%2Fghkk%2FeyV93CcuTK4Zh3qtL3lw6pvWpithXbeyK8n02kY%2FPgi%2BHOuFSW4ipgSJPg97InqL6LoMWkbAM%2FBRguZuzh%2B%2BkDEElufYSEThLyOgVUPZ4cx56mQVPUraZFgHlSWLOgQfLsOsAMoAveKqukgRhG2LEqYrEZyyR4FTbR8HK1rgNWTLRiEHA3or8vz5KD0kNjWnJIJD0pLQ8SteDh1QtdHuABx01pSrFzAmmvhl96Jx6hC97vfjDSWb94tYe6gWsSHAZde0Jnlno1kWiwz7QtpPpdNkNOuQlLYkcPj%2B4fsfUcNpoqB%2BgNAP3eXHEsbI65RQ4a4SS9L3SlWKf%2Fhbt%2Fa6HhNB4eFkw56zTwQY6pgEkX8XSpi5UJfvewWageFZv1pBaT8anBXXsAGd1rfE73VAWkCrDkuV1k1gGrWwtVeGmIyUpShFTMNkJFek3Qmkv9WT0oA2XX3A%2Bt6TKGw9ZTrf3nxq5%2Ft%2FR1vCZKc8jKhjfFdoBY9PaXCr6nzsZqYKedxOqKaf4YZpOCVQHckwZowjMiGzw2tjEkLN4kaTe2u5cTDausuLFkBXXv%2Blgq8Ley1wyuGFm&X-Amz-Signature=c7dbf09fbc5e9049893d0b49a7f7b58b661916fdadb1782ab7f7aca31d660738&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GQIFMXS%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFb7zANQJD73KvWGwVm43vBe%2Fwolfu8Qyjvy0OM5WDNZAiAe2SjrgKBzvv33YCzHkyclYlJ%2FoIihdyNKcA%2Bg%2BqOryyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMpkwrpJuAnnnDqdSGKtwDGbaC3N5UIPXZl6tGA40HbRXOQFreFnI%2BGu6MCldxsJNM9IuA337gXELvyG%2Fmw%2Fz6BMfLlK%2FnQCZeX9Dy8gZPpiX%2FCsbv%2BIQdzvgeevvL9t6TNQS4Xbcf247B1Ayk4%2FP62Aoqonm7Zz%2BYh26uEbMM2wdgx1eS5oaOZo9%2BLqQn9wLPtO5TU2sh61%2F%2BghE9qvh2sA1jpy2qoLOFniTYLdwZf2Joxvst1wzVDRT5Rt993SAv%2BT6WCHupBhmmR%2B1Gx%2BXuP4moQk%2FKIOBoN4IjRyXAtJWqO%2Fghkk%2FeyV93CcuTK4Zh3qtL3lw6pvWpithXbeyK8n02kY%2FPgi%2BHOuFSW4ipgSJPg97InqL6LoMWkbAM%2FBRguZuzh%2B%2BkDEElufYSEThLyOgVUPZ4cx56mQVPUraZFgHlSWLOgQfLsOsAMoAveKqukgRhG2LEqYrEZyyR4FTbR8HK1rgNWTLRiEHA3or8vz5KD0kNjWnJIJD0pLQ8SteDh1QtdHuABx01pSrFzAmmvhl96Jx6hC97vfjDSWb94tYe6gWsSHAZde0Jnlno1kWiwz7QtpPpdNkNOuQlLYkcPj%2B4fsfUcNpoqB%2BgNAP3eXHEsbI65RQ4a4SS9L3SlWKf%2Fhbt%2Fa6HhNB4eFkw56zTwQY6pgEkX8XSpi5UJfvewWageFZv1pBaT8anBXXsAGd1rfE73VAWkCrDkuV1k1gGrWwtVeGmIyUpShFTMNkJFek3Qmkv9WT0oA2XX3A%2Bt6TKGw9ZTrf3nxq5%2Ft%2FR1vCZKc8jKhjfFdoBY9PaXCr6nzsZqYKedxOqKaf4YZpOCVQHckwZowjMiGzw2tjEkLN4kaTe2u5cTDausuLFkBXXv%2Blgq8Ley1wyuGFm&X-Amz-Signature=91c1a03265079cd0ed1659449978311b6b85e8af1aa555d2526fc2c3ad13d3a1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
