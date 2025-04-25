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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZUCRS4Z%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFcNbUm%2FJVTM1AoDu%2F2sqE5LgWMsFSWvo1luWVacJW5BAiA6IqrhejUen4LYUCjfnMDUGzfxVRm7MPPnpq7Y%2FSaTkyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMcDXEQu6OvfqNWPCsKtwDHrsa4rCAUZfreV2b85eKGiJB4zq4F5hinWN6avZhWmhnLwop3OHjcJVVNsWLRL%2BeJVu4T%2F6Im1cJHPlBMR8CwId58wram5OIqhUMRSoHFqYisHN%2BLdXHwq2wOPpYV59ufBW%2BTsoaoPAwypJwhmskKFgq6usOl8zfSW30QDc0inFQqPIMX284p%2Bd2c7mM%2B2b2X4gyO6sp3NP4VqzGquzFQ%2BOg1i6Ej0cB7W1Jq0tmajDH%2FfOTAWqQVsCQAWUE3SoQv4SjjbtRPLrDTcAZpvLTkA2CPa1V%2F7itXHeBXeUdKetrDc5SQOGNHV76%2FnDKeSqUVDWHVI6rFDI9NJe4ulKiPUQv4RXP2kVpjNf2JDt2eHzbH8Tny%2Fju6PjZvnNXJJu8R0q3b3fgxOcIhqtkWdyMiOIbIXzfKEJhuC9dz0IPvbWtdQJi9DfQo%2BJ7%2B2GkZwcBOaw27WUn84hbpUqrVopsQh9g35xvo15HBxba5GiTJ9M3TraSkHyM89JjRplsDZjJCTwwV4Qi%2BbV8gud%2FhlCv9A9bc14dmmOXodJonlg5Q%2BqDwJFqMDzU0B0q6sY1D9%2B4DROxhPUwRVp%2F1mQhjH03g2BV3ypgCHwh2F1D2iRcqMKIOil2Jc9fZJXiHo0wi%2BStwAY6pgGIF81OGx0vsqKaScbhAlfyaMu%2Bto%2FML%2Bd2CSADLHMjctimSZ5hY6xh6RgO4aGy8vp7%2B27qgKMnEm%2BXXD8V6p8WypGxQQHEV4JAWFhMO%2BBOqzYa8uTmJbspLKsGIJ5ZYqkEpiLiqyrWvdchDCA15e1RDwkU75Rl4cdtRaf7fybZd1Bpk4y%2Fuf%2F0X5loOLdsMJajeKABCn0fcgOw6hKYueUmSdiH67XN&X-Amz-Signature=499fc3c440a82258fe11acc24e2ec4f76049f02ac4bbd9addbec178426fe908c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZUCRS4Z%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFcNbUm%2FJVTM1AoDu%2F2sqE5LgWMsFSWvo1luWVacJW5BAiA6IqrhejUen4LYUCjfnMDUGzfxVRm7MPPnpq7Y%2FSaTkyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMcDXEQu6OvfqNWPCsKtwDHrsa4rCAUZfreV2b85eKGiJB4zq4F5hinWN6avZhWmhnLwop3OHjcJVVNsWLRL%2BeJVu4T%2F6Im1cJHPlBMR8CwId58wram5OIqhUMRSoHFqYisHN%2BLdXHwq2wOPpYV59ufBW%2BTsoaoPAwypJwhmskKFgq6usOl8zfSW30QDc0inFQqPIMX284p%2Bd2c7mM%2B2b2X4gyO6sp3NP4VqzGquzFQ%2BOg1i6Ej0cB7W1Jq0tmajDH%2FfOTAWqQVsCQAWUE3SoQv4SjjbtRPLrDTcAZpvLTkA2CPa1V%2F7itXHeBXeUdKetrDc5SQOGNHV76%2FnDKeSqUVDWHVI6rFDI9NJe4ulKiPUQv4RXP2kVpjNf2JDt2eHzbH8Tny%2Fju6PjZvnNXJJu8R0q3b3fgxOcIhqtkWdyMiOIbIXzfKEJhuC9dz0IPvbWtdQJi9DfQo%2BJ7%2B2GkZwcBOaw27WUn84hbpUqrVopsQh9g35xvo15HBxba5GiTJ9M3TraSkHyM89JjRplsDZjJCTwwV4Qi%2BbV8gud%2FhlCv9A9bc14dmmOXodJonlg5Q%2BqDwJFqMDzU0B0q6sY1D9%2B4DROxhPUwRVp%2F1mQhjH03g2BV3ypgCHwh2F1D2iRcqMKIOil2Jc9fZJXiHo0wi%2BStwAY6pgGIF81OGx0vsqKaScbhAlfyaMu%2Bto%2FML%2Bd2CSADLHMjctimSZ5hY6xh6RgO4aGy8vp7%2B27qgKMnEm%2BXXD8V6p8WypGxQQHEV4JAWFhMO%2BBOqzYa8uTmJbspLKsGIJ5ZYqkEpiLiqyrWvdchDCA15e1RDwkU75Rl4cdtRaf7fybZd1Bpk4y%2Fuf%2F0X5loOLdsMJajeKABCn0fcgOw6hKYueUmSdiH67XN&X-Amz-Signature=01b8d90a2da33e809c1f0663fdf544246d1a4192d4ea4ef9a8cd23c122ecb2c7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZUCRS4Z%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFcNbUm%2FJVTM1AoDu%2F2sqE5LgWMsFSWvo1luWVacJW5BAiA6IqrhejUen4LYUCjfnMDUGzfxVRm7MPPnpq7Y%2FSaTkyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMcDXEQu6OvfqNWPCsKtwDHrsa4rCAUZfreV2b85eKGiJB4zq4F5hinWN6avZhWmhnLwop3OHjcJVVNsWLRL%2BeJVu4T%2F6Im1cJHPlBMR8CwId58wram5OIqhUMRSoHFqYisHN%2BLdXHwq2wOPpYV59ufBW%2BTsoaoPAwypJwhmskKFgq6usOl8zfSW30QDc0inFQqPIMX284p%2Bd2c7mM%2B2b2X4gyO6sp3NP4VqzGquzFQ%2BOg1i6Ej0cB7W1Jq0tmajDH%2FfOTAWqQVsCQAWUE3SoQv4SjjbtRPLrDTcAZpvLTkA2CPa1V%2F7itXHeBXeUdKetrDc5SQOGNHV76%2FnDKeSqUVDWHVI6rFDI9NJe4ulKiPUQv4RXP2kVpjNf2JDt2eHzbH8Tny%2Fju6PjZvnNXJJu8R0q3b3fgxOcIhqtkWdyMiOIbIXzfKEJhuC9dz0IPvbWtdQJi9DfQo%2BJ7%2B2GkZwcBOaw27WUn84hbpUqrVopsQh9g35xvo15HBxba5GiTJ9M3TraSkHyM89JjRplsDZjJCTwwV4Qi%2BbV8gud%2FhlCv9A9bc14dmmOXodJonlg5Q%2BqDwJFqMDzU0B0q6sY1D9%2B4DROxhPUwRVp%2F1mQhjH03g2BV3ypgCHwh2F1D2iRcqMKIOil2Jc9fZJXiHo0wi%2BStwAY6pgGIF81OGx0vsqKaScbhAlfyaMu%2Bto%2FML%2Bd2CSADLHMjctimSZ5hY6xh6RgO4aGy8vp7%2B27qgKMnEm%2BXXD8V6p8WypGxQQHEV4JAWFhMO%2BBOqzYa8uTmJbspLKsGIJ5ZYqkEpiLiqyrWvdchDCA15e1RDwkU75Rl4cdtRaf7fybZd1Bpk4y%2Fuf%2F0X5loOLdsMJajeKABCn0fcgOw6hKYueUmSdiH67XN&X-Amz-Signature=c69aaf03f3c5826597d67d00c3e6b0d9e2944ea0dd50952865070302888f27f4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZUCRS4Z%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFcNbUm%2FJVTM1AoDu%2F2sqE5LgWMsFSWvo1luWVacJW5BAiA6IqrhejUen4LYUCjfnMDUGzfxVRm7MPPnpq7Y%2FSaTkyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMcDXEQu6OvfqNWPCsKtwDHrsa4rCAUZfreV2b85eKGiJB4zq4F5hinWN6avZhWmhnLwop3OHjcJVVNsWLRL%2BeJVu4T%2F6Im1cJHPlBMR8CwId58wram5OIqhUMRSoHFqYisHN%2BLdXHwq2wOPpYV59ufBW%2BTsoaoPAwypJwhmskKFgq6usOl8zfSW30QDc0inFQqPIMX284p%2Bd2c7mM%2B2b2X4gyO6sp3NP4VqzGquzFQ%2BOg1i6Ej0cB7W1Jq0tmajDH%2FfOTAWqQVsCQAWUE3SoQv4SjjbtRPLrDTcAZpvLTkA2CPa1V%2F7itXHeBXeUdKetrDc5SQOGNHV76%2FnDKeSqUVDWHVI6rFDI9NJe4ulKiPUQv4RXP2kVpjNf2JDt2eHzbH8Tny%2Fju6PjZvnNXJJu8R0q3b3fgxOcIhqtkWdyMiOIbIXzfKEJhuC9dz0IPvbWtdQJi9DfQo%2BJ7%2B2GkZwcBOaw27WUn84hbpUqrVopsQh9g35xvo15HBxba5GiTJ9M3TraSkHyM89JjRplsDZjJCTwwV4Qi%2BbV8gud%2FhlCv9A9bc14dmmOXodJonlg5Q%2BqDwJFqMDzU0B0q6sY1D9%2B4DROxhPUwRVp%2F1mQhjH03g2BV3ypgCHwh2F1D2iRcqMKIOil2Jc9fZJXiHo0wi%2BStwAY6pgGIF81OGx0vsqKaScbhAlfyaMu%2Bto%2FML%2Bd2CSADLHMjctimSZ5hY6xh6RgO4aGy8vp7%2B27qgKMnEm%2BXXD8V6p8WypGxQQHEV4JAWFhMO%2BBOqzYa8uTmJbspLKsGIJ5ZYqkEpiLiqyrWvdchDCA15e1RDwkU75Rl4cdtRaf7fybZd1Bpk4y%2Fuf%2F0X5loOLdsMJajeKABCn0fcgOw6hKYueUmSdiH67XN&X-Amz-Signature=c7f33ab521c56220528859ea19dc22f38c59dfd42d520b5fab53a087fb300f00&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZUCRS4Z%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFcNbUm%2FJVTM1AoDu%2F2sqE5LgWMsFSWvo1luWVacJW5BAiA6IqrhejUen4LYUCjfnMDUGzfxVRm7MPPnpq7Y%2FSaTkyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMcDXEQu6OvfqNWPCsKtwDHrsa4rCAUZfreV2b85eKGiJB4zq4F5hinWN6avZhWmhnLwop3OHjcJVVNsWLRL%2BeJVu4T%2F6Im1cJHPlBMR8CwId58wram5OIqhUMRSoHFqYisHN%2BLdXHwq2wOPpYV59ufBW%2BTsoaoPAwypJwhmskKFgq6usOl8zfSW30QDc0inFQqPIMX284p%2Bd2c7mM%2B2b2X4gyO6sp3NP4VqzGquzFQ%2BOg1i6Ej0cB7W1Jq0tmajDH%2FfOTAWqQVsCQAWUE3SoQv4SjjbtRPLrDTcAZpvLTkA2CPa1V%2F7itXHeBXeUdKetrDc5SQOGNHV76%2FnDKeSqUVDWHVI6rFDI9NJe4ulKiPUQv4RXP2kVpjNf2JDt2eHzbH8Tny%2Fju6PjZvnNXJJu8R0q3b3fgxOcIhqtkWdyMiOIbIXzfKEJhuC9dz0IPvbWtdQJi9DfQo%2BJ7%2B2GkZwcBOaw27WUn84hbpUqrVopsQh9g35xvo15HBxba5GiTJ9M3TraSkHyM89JjRplsDZjJCTwwV4Qi%2BbV8gud%2FhlCv9A9bc14dmmOXodJonlg5Q%2BqDwJFqMDzU0B0q6sY1D9%2B4DROxhPUwRVp%2F1mQhjH03g2BV3ypgCHwh2F1D2iRcqMKIOil2Jc9fZJXiHo0wi%2BStwAY6pgGIF81OGx0vsqKaScbhAlfyaMu%2Bto%2FML%2Bd2CSADLHMjctimSZ5hY6xh6RgO4aGy8vp7%2B27qgKMnEm%2BXXD8V6p8WypGxQQHEV4JAWFhMO%2BBOqzYa8uTmJbspLKsGIJ5ZYqkEpiLiqyrWvdchDCA15e1RDwkU75Rl4cdtRaf7fybZd1Bpk4y%2Fuf%2F0X5loOLdsMJajeKABCn0fcgOw6hKYueUmSdiH67XN&X-Amz-Signature=4e212dae3843c2f54c09d71a1990f701d8a273616581c73ff803e2bd3aaca61a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZUCRS4Z%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFcNbUm%2FJVTM1AoDu%2F2sqE5LgWMsFSWvo1luWVacJW5BAiA6IqrhejUen4LYUCjfnMDUGzfxVRm7MPPnpq7Y%2FSaTkyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMcDXEQu6OvfqNWPCsKtwDHrsa4rCAUZfreV2b85eKGiJB4zq4F5hinWN6avZhWmhnLwop3OHjcJVVNsWLRL%2BeJVu4T%2F6Im1cJHPlBMR8CwId58wram5OIqhUMRSoHFqYisHN%2BLdXHwq2wOPpYV59ufBW%2BTsoaoPAwypJwhmskKFgq6usOl8zfSW30QDc0inFQqPIMX284p%2Bd2c7mM%2B2b2X4gyO6sp3NP4VqzGquzFQ%2BOg1i6Ej0cB7W1Jq0tmajDH%2FfOTAWqQVsCQAWUE3SoQv4SjjbtRPLrDTcAZpvLTkA2CPa1V%2F7itXHeBXeUdKetrDc5SQOGNHV76%2FnDKeSqUVDWHVI6rFDI9NJe4ulKiPUQv4RXP2kVpjNf2JDt2eHzbH8Tny%2Fju6PjZvnNXJJu8R0q3b3fgxOcIhqtkWdyMiOIbIXzfKEJhuC9dz0IPvbWtdQJi9DfQo%2BJ7%2B2GkZwcBOaw27WUn84hbpUqrVopsQh9g35xvo15HBxba5GiTJ9M3TraSkHyM89JjRplsDZjJCTwwV4Qi%2BbV8gud%2FhlCv9A9bc14dmmOXodJonlg5Q%2BqDwJFqMDzU0B0q6sY1D9%2B4DROxhPUwRVp%2F1mQhjH03g2BV3ypgCHwh2F1D2iRcqMKIOil2Jc9fZJXiHo0wi%2BStwAY6pgGIF81OGx0vsqKaScbhAlfyaMu%2Bto%2FML%2Bd2CSADLHMjctimSZ5hY6xh6RgO4aGy8vp7%2B27qgKMnEm%2BXXD8V6p8WypGxQQHEV4JAWFhMO%2BBOqzYa8uTmJbspLKsGIJ5ZYqkEpiLiqyrWvdchDCA15e1RDwkU75Rl4cdtRaf7fybZd1Bpk4y%2Fuf%2F0X5loOLdsMJajeKABCn0fcgOw6hKYueUmSdiH67XN&X-Amz-Signature=05e08c93562c8fa96598c12d802570d0f89233f8bfc1192d3ceda9a1dfe5929a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZUCRS4Z%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFcNbUm%2FJVTM1AoDu%2F2sqE5LgWMsFSWvo1luWVacJW5BAiA6IqrhejUen4LYUCjfnMDUGzfxVRm7MPPnpq7Y%2FSaTkyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMcDXEQu6OvfqNWPCsKtwDHrsa4rCAUZfreV2b85eKGiJB4zq4F5hinWN6avZhWmhnLwop3OHjcJVVNsWLRL%2BeJVu4T%2F6Im1cJHPlBMR8CwId58wram5OIqhUMRSoHFqYisHN%2BLdXHwq2wOPpYV59ufBW%2BTsoaoPAwypJwhmskKFgq6usOl8zfSW30QDc0inFQqPIMX284p%2Bd2c7mM%2B2b2X4gyO6sp3NP4VqzGquzFQ%2BOg1i6Ej0cB7W1Jq0tmajDH%2FfOTAWqQVsCQAWUE3SoQv4SjjbtRPLrDTcAZpvLTkA2CPa1V%2F7itXHeBXeUdKetrDc5SQOGNHV76%2FnDKeSqUVDWHVI6rFDI9NJe4ulKiPUQv4RXP2kVpjNf2JDt2eHzbH8Tny%2Fju6PjZvnNXJJu8R0q3b3fgxOcIhqtkWdyMiOIbIXzfKEJhuC9dz0IPvbWtdQJi9DfQo%2BJ7%2B2GkZwcBOaw27WUn84hbpUqrVopsQh9g35xvo15HBxba5GiTJ9M3TraSkHyM89JjRplsDZjJCTwwV4Qi%2BbV8gud%2FhlCv9A9bc14dmmOXodJonlg5Q%2BqDwJFqMDzU0B0q6sY1D9%2B4DROxhPUwRVp%2F1mQhjH03g2BV3ypgCHwh2F1D2iRcqMKIOil2Jc9fZJXiHo0wi%2BStwAY6pgGIF81OGx0vsqKaScbhAlfyaMu%2Bto%2FML%2Bd2CSADLHMjctimSZ5hY6xh6RgO4aGy8vp7%2B27qgKMnEm%2BXXD8V6p8WypGxQQHEV4JAWFhMO%2BBOqzYa8uTmJbspLKsGIJ5ZYqkEpiLiqyrWvdchDCA15e1RDwkU75Rl4cdtRaf7fybZd1Bpk4y%2Fuf%2F0X5loOLdsMJajeKABCn0fcgOw6hKYueUmSdiH67XN&X-Amz-Signature=43a3727370c0e3e7f2fb0f1fbfc1bf8f0dbdd8d28efa1cca3b855a989e2f0ff3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
