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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BRZCGVF%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIHS8eJZ2ZBwTezoDSGbA%2BbnJscHHtndFtVjGjufUih5wAiAbBfTEhdwx0GabqkFJANPqaL41XugFAPnHIHwD3qDHAyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMZBMSzpn21YTwy6%2B%2FKtwDkMZfz38f90FIJJ2gOI6z9BZEcycFZtSAD7J7tVIOlMfXotmfSr0t%2F2h%2B2GFE%2B%2Fuh7Y3gvCpZ5DiddXjK9ZNLLlTTs4xm2MOFVdqaaE6gcaJMleOhDwLO8cj6RTJFIMEUHo1ZeXJcrKUSgkxURS8y59wBc13c%2FMjxGyH5ZWKoNhwu8fJ1IhZ7jf%2FhT5lP%2BgsAXYxNB3kizqicWswes0am44LfV9Ns%2FWWNOMdFKZlegYJlbxCSrlt8vLvE9rtb3mCFgCoj8LpBnr%2BIcHWMDmYIKRtidAPbbExzPifEiL6ZvsjfYed7BIHEn2f68oynjA%2Bb%2B%2Bvc7W1NSKuxGqAVGD%2Fie0%2FUf2Yn89clPK%2BHBhwKHibyA3Xu0MM%2B0j9UuZtkeCGzBFIyTFiy3MgXXH1egfgl6l5dJskV4P7K67ORlKWVCodPoVZGUwwIuSqdcld85OJ0nSZwOmu0Dl%2FVKlmwwuTh34pI9N%2Bz5OhWazFgC9ZB8CU%2FqtTdhpXHhJAWUqQ%2FM4BTFQ7aFY8v9qZq7KqLrCijDgsdmPtAvYzLn%2FukeQBUSK%2BJ%2Fi6EhWierlXJUg2IeKe1zVd3wMlpN%2BDv1M0OqAI7firqOLgbeMT6f0EA1I%2F3bWd2kjd8bBDfb7h14Pcw6o6pwwY6pgEQ8lWA6CxSe3wiaq5p5asiJDUoV3JNqXehDHSx1w%2Fq9R%2BHtiCt3TZGH37WzkcJYHEcA%2Bdtq0%2Fs9pZVfnPKzi%2F9o4J40GraI7w9EOOcKdLc%2FTxEnkIkO%2BIfJpwv6DkLFo7un%2FhBNFHwgEa1%2BvFyRWpYm%2FefOhzsHfXP40dmpSflsSOhf8ngPv2qiV1l6UajYa%2B8dEF7INIpPLVTlW%2Ft%2Bexom8WEBKTJ&X-Amz-Signature=41303b1b8b5f34b905b69c63a596bfc5f1faba5d256e39448f3a0e46093ffc85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BRZCGVF%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIHS8eJZ2ZBwTezoDSGbA%2BbnJscHHtndFtVjGjufUih5wAiAbBfTEhdwx0GabqkFJANPqaL41XugFAPnHIHwD3qDHAyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMZBMSzpn21YTwy6%2B%2FKtwDkMZfz38f90FIJJ2gOI6z9BZEcycFZtSAD7J7tVIOlMfXotmfSr0t%2F2h%2B2GFE%2B%2Fuh7Y3gvCpZ5DiddXjK9ZNLLlTTs4xm2MOFVdqaaE6gcaJMleOhDwLO8cj6RTJFIMEUHo1ZeXJcrKUSgkxURS8y59wBc13c%2FMjxGyH5ZWKoNhwu8fJ1IhZ7jf%2FhT5lP%2BgsAXYxNB3kizqicWswes0am44LfV9Ns%2FWWNOMdFKZlegYJlbxCSrlt8vLvE9rtb3mCFgCoj8LpBnr%2BIcHWMDmYIKRtidAPbbExzPifEiL6ZvsjfYed7BIHEn2f68oynjA%2Bb%2B%2Bvc7W1NSKuxGqAVGD%2Fie0%2FUf2Yn89clPK%2BHBhwKHibyA3Xu0MM%2B0j9UuZtkeCGzBFIyTFiy3MgXXH1egfgl6l5dJskV4P7K67ORlKWVCodPoVZGUwwIuSqdcld85OJ0nSZwOmu0Dl%2FVKlmwwuTh34pI9N%2Bz5OhWazFgC9ZB8CU%2FqtTdhpXHhJAWUqQ%2FM4BTFQ7aFY8v9qZq7KqLrCijDgsdmPtAvYzLn%2FukeQBUSK%2BJ%2Fi6EhWierlXJUg2IeKe1zVd3wMlpN%2BDv1M0OqAI7firqOLgbeMT6f0EA1I%2F3bWd2kjd8bBDfb7h14Pcw6o6pwwY6pgEQ8lWA6CxSe3wiaq5p5asiJDUoV3JNqXehDHSx1w%2Fq9R%2BHtiCt3TZGH37WzkcJYHEcA%2Bdtq0%2Fs9pZVfnPKzi%2F9o4J40GraI7w9EOOcKdLc%2FTxEnkIkO%2BIfJpwv6DkLFo7un%2FhBNFHwgEa1%2BvFyRWpYm%2FefOhzsHfXP40dmpSflsSOhf8ngPv2qiV1l6UajYa%2B8dEF7INIpPLVTlW%2Ft%2Bexom8WEBKTJ&X-Amz-Signature=2cb93ed6296b2b99480dcccf73a379b292c96831ea6ed340e5659017a9920bbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BRZCGVF%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIHS8eJZ2ZBwTezoDSGbA%2BbnJscHHtndFtVjGjufUih5wAiAbBfTEhdwx0GabqkFJANPqaL41XugFAPnHIHwD3qDHAyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMZBMSzpn21YTwy6%2B%2FKtwDkMZfz38f90FIJJ2gOI6z9BZEcycFZtSAD7J7tVIOlMfXotmfSr0t%2F2h%2B2GFE%2B%2Fuh7Y3gvCpZ5DiddXjK9ZNLLlTTs4xm2MOFVdqaaE6gcaJMleOhDwLO8cj6RTJFIMEUHo1ZeXJcrKUSgkxURS8y59wBc13c%2FMjxGyH5ZWKoNhwu8fJ1IhZ7jf%2FhT5lP%2BgsAXYxNB3kizqicWswes0am44LfV9Ns%2FWWNOMdFKZlegYJlbxCSrlt8vLvE9rtb3mCFgCoj8LpBnr%2BIcHWMDmYIKRtidAPbbExzPifEiL6ZvsjfYed7BIHEn2f68oynjA%2Bb%2B%2Bvc7W1NSKuxGqAVGD%2Fie0%2FUf2Yn89clPK%2BHBhwKHibyA3Xu0MM%2B0j9UuZtkeCGzBFIyTFiy3MgXXH1egfgl6l5dJskV4P7K67ORlKWVCodPoVZGUwwIuSqdcld85OJ0nSZwOmu0Dl%2FVKlmwwuTh34pI9N%2Bz5OhWazFgC9ZB8CU%2FqtTdhpXHhJAWUqQ%2FM4BTFQ7aFY8v9qZq7KqLrCijDgsdmPtAvYzLn%2FukeQBUSK%2BJ%2Fi6EhWierlXJUg2IeKe1zVd3wMlpN%2BDv1M0OqAI7firqOLgbeMT6f0EA1I%2F3bWd2kjd8bBDfb7h14Pcw6o6pwwY6pgEQ8lWA6CxSe3wiaq5p5asiJDUoV3JNqXehDHSx1w%2Fq9R%2BHtiCt3TZGH37WzkcJYHEcA%2Bdtq0%2Fs9pZVfnPKzi%2F9o4J40GraI7w9EOOcKdLc%2FTxEnkIkO%2BIfJpwv6DkLFo7un%2FhBNFHwgEa1%2BvFyRWpYm%2FefOhzsHfXP40dmpSflsSOhf8ngPv2qiV1l6UajYa%2B8dEF7INIpPLVTlW%2Ft%2Bexom8WEBKTJ&X-Amz-Signature=c3d8e8026a838a0d7533c6d92cefd756202bbf5057a9330616a854f94b679035&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BRZCGVF%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIHS8eJZ2ZBwTezoDSGbA%2BbnJscHHtndFtVjGjufUih5wAiAbBfTEhdwx0GabqkFJANPqaL41XugFAPnHIHwD3qDHAyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMZBMSzpn21YTwy6%2B%2FKtwDkMZfz38f90FIJJ2gOI6z9BZEcycFZtSAD7J7tVIOlMfXotmfSr0t%2F2h%2B2GFE%2B%2Fuh7Y3gvCpZ5DiddXjK9ZNLLlTTs4xm2MOFVdqaaE6gcaJMleOhDwLO8cj6RTJFIMEUHo1ZeXJcrKUSgkxURS8y59wBc13c%2FMjxGyH5ZWKoNhwu8fJ1IhZ7jf%2FhT5lP%2BgsAXYxNB3kizqicWswes0am44LfV9Ns%2FWWNOMdFKZlegYJlbxCSrlt8vLvE9rtb3mCFgCoj8LpBnr%2BIcHWMDmYIKRtidAPbbExzPifEiL6ZvsjfYed7BIHEn2f68oynjA%2Bb%2B%2Bvc7W1NSKuxGqAVGD%2Fie0%2FUf2Yn89clPK%2BHBhwKHibyA3Xu0MM%2B0j9UuZtkeCGzBFIyTFiy3MgXXH1egfgl6l5dJskV4P7K67ORlKWVCodPoVZGUwwIuSqdcld85OJ0nSZwOmu0Dl%2FVKlmwwuTh34pI9N%2Bz5OhWazFgC9ZB8CU%2FqtTdhpXHhJAWUqQ%2FM4BTFQ7aFY8v9qZq7KqLrCijDgsdmPtAvYzLn%2FukeQBUSK%2BJ%2Fi6EhWierlXJUg2IeKe1zVd3wMlpN%2BDv1M0OqAI7firqOLgbeMT6f0EA1I%2F3bWd2kjd8bBDfb7h14Pcw6o6pwwY6pgEQ8lWA6CxSe3wiaq5p5asiJDUoV3JNqXehDHSx1w%2Fq9R%2BHtiCt3TZGH37WzkcJYHEcA%2Bdtq0%2Fs9pZVfnPKzi%2F9o4J40GraI7w9EOOcKdLc%2FTxEnkIkO%2BIfJpwv6DkLFo7un%2FhBNFHwgEa1%2BvFyRWpYm%2FefOhzsHfXP40dmpSflsSOhf8ngPv2qiV1l6UajYa%2B8dEF7INIpPLVTlW%2Ft%2Bexom8WEBKTJ&X-Amz-Signature=964dd64b1b754d1874c4075de144ab90049830b69c22abef478242fe941153e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BRZCGVF%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIHS8eJZ2ZBwTezoDSGbA%2BbnJscHHtndFtVjGjufUih5wAiAbBfTEhdwx0GabqkFJANPqaL41XugFAPnHIHwD3qDHAyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMZBMSzpn21YTwy6%2B%2FKtwDkMZfz38f90FIJJ2gOI6z9BZEcycFZtSAD7J7tVIOlMfXotmfSr0t%2F2h%2B2GFE%2B%2Fuh7Y3gvCpZ5DiddXjK9ZNLLlTTs4xm2MOFVdqaaE6gcaJMleOhDwLO8cj6RTJFIMEUHo1ZeXJcrKUSgkxURS8y59wBc13c%2FMjxGyH5ZWKoNhwu8fJ1IhZ7jf%2FhT5lP%2BgsAXYxNB3kizqicWswes0am44LfV9Ns%2FWWNOMdFKZlegYJlbxCSrlt8vLvE9rtb3mCFgCoj8LpBnr%2BIcHWMDmYIKRtidAPbbExzPifEiL6ZvsjfYed7BIHEn2f68oynjA%2Bb%2B%2Bvc7W1NSKuxGqAVGD%2Fie0%2FUf2Yn89clPK%2BHBhwKHibyA3Xu0MM%2B0j9UuZtkeCGzBFIyTFiy3MgXXH1egfgl6l5dJskV4P7K67ORlKWVCodPoVZGUwwIuSqdcld85OJ0nSZwOmu0Dl%2FVKlmwwuTh34pI9N%2Bz5OhWazFgC9ZB8CU%2FqtTdhpXHhJAWUqQ%2FM4BTFQ7aFY8v9qZq7KqLrCijDgsdmPtAvYzLn%2FukeQBUSK%2BJ%2Fi6EhWierlXJUg2IeKe1zVd3wMlpN%2BDv1M0OqAI7firqOLgbeMT6f0EA1I%2F3bWd2kjd8bBDfb7h14Pcw6o6pwwY6pgEQ8lWA6CxSe3wiaq5p5asiJDUoV3JNqXehDHSx1w%2Fq9R%2BHtiCt3TZGH37WzkcJYHEcA%2Bdtq0%2Fs9pZVfnPKzi%2F9o4J40GraI7w9EOOcKdLc%2FTxEnkIkO%2BIfJpwv6DkLFo7un%2FhBNFHwgEa1%2BvFyRWpYm%2FefOhzsHfXP40dmpSflsSOhf8ngPv2qiV1l6UajYa%2B8dEF7INIpPLVTlW%2Ft%2Bexom8WEBKTJ&X-Amz-Signature=f13c28129b2bd279da94990d400b013b08cd0af0e813f0f07dc1454297844ef3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BRZCGVF%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIHS8eJZ2ZBwTezoDSGbA%2BbnJscHHtndFtVjGjufUih5wAiAbBfTEhdwx0GabqkFJANPqaL41XugFAPnHIHwD3qDHAyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMZBMSzpn21YTwy6%2B%2FKtwDkMZfz38f90FIJJ2gOI6z9BZEcycFZtSAD7J7tVIOlMfXotmfSr0t%2F2h%2B2GFE%2B%2Fuh7Y3gvCpZ5DiddXjK9ZNLLlTTs4xm2MOFVdqaaE6gcaJMleOhDwLO8cj6RTJFIMEUHo1ZeXJcrKUSgkxURS8y59wBc13c%2FMjxGyH5ZWKoNhwu8fJ1IhZ7jf%2FhT5lP%2BgsAXYxNB3kizqicWswes0am44LfV9Ns%2FWWNOMdFKZlegYJlbxCSrlt8vLvE9rtb3mCFgCoj8LpBnr%2BIcHWMDmYIKRtidAPbbExzPifEiL6ZvsjfYed7BIHEn2f68oynjA%2Bb%2B%2Bvc7W1NSKuxGqAVGD%2Fie0%2FUf2Yn89clPK%2BHBhwKHibyA3Xu0MM%2B0j9UuZtkeCGzBFIyTFiy3MgXXH1egfgl6l5dJskV4P7K67ORlKWVCodPoVZGUwwIuSqdcld85OJ0nSZwOmu0Dl%2FVKlmwwuTh34pI9N%2Bz5OhWazFgC9ZB8CU%2FqtTdhpXHhJAWUqQ%2FM4BTFQ7aFY8v9qZq7KqLrCijDgsdmPtAvYzLn%2FukeQBUSK%2BJ%2Fi6EhWierlXJUg2IeKe1zVd3wMlpN%2BDv1M0OqAI7firqOLgbeMT6f0EA1I%2F3bWd2kjd8bBDfb7h14Pcw6o6pwwY6pgEQ8lWA6CxSe3wiaq5p5asiJDUoV3JNqXehDHSx1w%2Fq9R%2BHtiCt3TZGH37WzkcJYHEcA%2Bdtq0%2Fs9pZVfnPKzi%2F9o4J40GraI7w9EOOcKdLc%2FTxEnkIkO%2BIfJpwv6DkLFo7un%2FhBNFHwgEa1%2BvFyRWpYm%2FefOhzsHfXP40dmpSflsSOhf8ngPv2qiV1l6UajYa%2B8dEF7INIpPLVTlW%2Ft%2Bexom8WEBKTJ&X-Amz-Signature=ea55ee853f53da9a40d801a230e7cefcbcb0847cb1ca8a332ac556aa9ce49496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BRZCGVF%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIHS8eJZ2ZBwTezoDSGbA%2BbnJscHHtndFtVjGjufUih5wAiAbBfTEhdwx0GabqkFJANPqaL41XugFAPnHIHwD3qDHAyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMZBMSzpn21YTwy6%2B%2FKtwDkMZfz38f90FIJJ2gOI6z9BZEcycFZtSAD7J7tVIOlMfXotmfSr0t%2F2h%2B2GFE%2B%2Fuh7Y3gvCpZ5DiddXjK9ZNLLlTTs4xm2MOFVdqaaE6gcaJMleOhDwLO8cj6RTJFIMEUHo1ZeXJcrKUSgkxURS8y59wBc13c%2FMjxGyH5ZWKoNhwu8fJ1IhZ7jf%2FhT5lP%2BgsAXYxNB3kizqicWswes0am44LfV9Ns%2FWWNOMdFKZlegYJlbxCSrlt8vLvE9rtb3mCFgCoj8LpBnr%2BIcHWMDmYIKRtidAPbbExzPifEiL6ZvsjfYed7BIHEn2f68oynjA%2Bb%2B%2Bvc7W1NSKuxGqAVGD%2Fie0%2FUf2Yn89clPK%2BHBhwKHibyA3Xu0MM%2B0j9UuZtkeCGzBFIyTFiy3MgXXH1egfgl6l5dJskV4P7K67ORlKWVCodPoVZGUwwIuSqdcld85OJ0nSZwOmu0Dl%2FVKlmwwuTh34pI9N%2Bz5OhWazFgC9ZB8CU%2FqtTdhpXHhJAWUqQ%2FM4BTFQ7aFY8v9qZq7KqLrCijDgsdmPtAvYzLn%2FukeQBUSK%2BJ%2Fi6EhWierlXJUg2IeKe1zVd3wMlpN%2BDv1M0OqAI7firqOLgbeMT6f0EA1I%2F3bWd2kjd8bBDfb7h14Pcw6o6pwwY6pgEQ8lWA6CxSe3wiaq5p5asiJDUoV3JNqXehDHSx1w%2Fq9R%2BHtiCt3TZGH37WzkcJYHEcA%2Bdtq0%2Fs9pZVfnPKzi%2F9o4J40GraI7w9EOOcKdLc%2FTxEnkIkO%2BIfJpwv6DkLFo7un%2FhBNFHwgEa1%2BvFyRWpYm%2FefOhzsHfXP40dmpSflsSOhf8ngPv2qiV1l6UajYa%2B8dEF7INIpPLVTlW%2Ft%2Bexom8WEBKTJ&X-Amz-Signature=4564d6622e9561baf9b34eb21ff6700d6906f6e674aa47cae6b041e934457433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
