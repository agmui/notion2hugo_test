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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRPENJWS%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHz%2Fui3dOImuSnwOdLcbWNIYUq3fhtLgxdzljpFe4DEaAiBleMHa6lWFAQ47g7u1m1ZFlJ5aUqkb%2BazHcIqV2fZ59iqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw9Ejle0QFPa5Qza8KtwDrb728LU8%2FMFsshgeRj8ARLVJbprsnHDX%2FCCGHpW8%2FdhDlxTb%2BdNnJoSCw7sx1hm20%2B5xRcu0LmxoC6IWNE%2Fok0loqlCGXpQu5pv%2BHETQGMExoNY2WZV87KUz6VbQXrAXMOjYrNTXCykD9KPwtt%2FbzPpsSWhoeoATUcz3%2BuKQi5e7kPK6oKfppOyWwWYKI81Whg8msmm3iInsmMKxnQ%2BIkKJujGj3R8UdI0FE%2Bm98cDmj2qcrJJNh1Kuof1M6E7zqIqtqaRzvrH%2BLwwSvt6oB0U6Tdx4oobb1HF5MY3aoeFITK%2FWZzTTQtEh439a%2F04uuGbVRyefejnTp5jJEbiKgDsA8sGIBsCRSuHb3jREI7na8sgRDd8c8pE7HmVdrpwVMQnDuMCU08vBO5REDJFpe7JCu15mIAxviLFOgufDUUagGP2Z0U6lneeZVCugIrXtoGHM0J9pNfGw50q5kU95jPv6xySPp%2FzHQA1v0bHfZIU2VJ8WTtUpBD6oyYNSJw%2B5fpVzl42oPohzaH%2F3bGmGSGrAE9DbGigYUPXOxh%2FEiaxGYSzCuPSTGIlHw%2FTKE3H2goOyKEmsyPqlXa9j9KThN0eYix20AeH692x9S6QLK%2BD9XLuoslS920jN24HswnuDtvAY6pgE5koSb6M1lEyXpj1EY5UOUTphoCP6THHEYSnBp2iZsWmYzj6f7NYcyEf9Z4Yw3u5saU8TDX%2BMHfLq66Z59rmyxuR0iemzM%2FHfvprA%2FYDZ8bmi%2B4mJyQmjpQOcrghtmZ6Sf1xD0W%2BHx38wLtaedcFVplEnqq%2Fkp2rV%2B%2BhZMZr1X9y%2FTsJK3t0%2FpNKziQtMXkeHetIcj9sDe%2Bu5x2phOZa86K9oHA9Oe&X-Amz-Signature=63d20b9d788af59d5c00207e7aa4ec60c65857402d0f62fb090198046567399b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRPENJWS%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHz%2Fui3dOImuSnwOdLcbWNIYUq3fhtLgxdzljpFe4DEaAiBleMHa6lWFAQ47g7u1m1ZFlJ5aUqkb%2BazHcIqV2fZ59iqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw9Ejle0QFPa5Qza8KtwDrb728LU8%2FMFsshgeRj8ARLVJbprsnHDX%2FCCGHpW8%2FdhDlxTb%2BdNnJoSCw7sx1hm20%2B5xRcu0LmxoC6IWNE%2Fok0loqlCGXpQu5pv%2BHETQGMExoNY2WZV87KUz6VbQXrAXMOjYrNTXCykD9KPwtt%2FbzPpsSWhoeoATUcz3%2BuKQi5e7kPK6oKfppOyWwWYKI81Whg8msmm3iInsmMKxnQ%2BIkKJujGj3R8UdI0FE%2Bm98cDmj2qcrJJNh1Kuof1M6E7zqIqtqaRzvrH%2BLwwSvt6oB0U6Tdx4oobb1HF5MY3aoeFITK%2FWZzTTQtEh439a%2F04uuGbVRyefejnTp5jJEbiKgDsA8sGIBsCRSuHb3jREI7na8sgRDd8c8pE7HmVdrpwVMQnDuMCU08vBO5REDJFpe7JCu15mIAxviLFOgufDUUagGP2Z0U6lneeZVCugIrXtoGHM0J9pNfGw50q5kU95jPv6xySPp%2FzHQA1v0bHfZIU2VJ8WTtUpBD6oyYNSJw%2B5fpVzl42oPohzaH%2F3bGmGSGrAE9DbGigYUPXOxh%2FEiaxGYSzCuPSTGIlHw%2FTKE3H2goOyKEmsyPqlXa9j9KThN0eYix20AeH692x9S6QLK%2BD9XLuoslS920jN24HswnuDtvAY6pgE5koSb6M1lEyXpj1EY5UOUTphoCP6THHEYSnBp2iZsWmYzj6f7NYcyEf9Z4Yw3u5saU8TDX%2BMHfLq66Z59rmyxuR0iemzM%2FHfvprA%2FYDZ8bmi%2B4mJyQmjpQOcrghtmZ6Sf1xD0W%2BHx38wLtaedcFVplEnqq%2Fkp2rV%2B%2BhZMZr1X9y%2FTsJK3t0%2FpNKziQtMXkeHetIcj9sDe%2Bu5x2phOZa86K9oHA9Oe&X-Amz-Signature=2101e4c7d5b35fc285b882707d6483e7d217c278b2179b8598c715001a6c95ae&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRPENJWS%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHz%2Fui3dOImuSnwOdLcbWNIYUq3fhtLgxdzljpFe4DEaAiBleMHa6lWFAQ47g7u1m1ZFlJ5aUqkb%2BazHcIqV2fZ59iqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw9Ejle0QFPa5Qza8KtwDrb728LU8%2FMFsshgeRj8ARLVJbprsnHDX%2FCCGHpW8%2FdhDlxTb%2BdNnJoSCw7sx1hm20%2B5xRcu0LmxoC6IWNE%2Fok0loqlCGXpQu5pv%2BHETQGMExoNY2WZV87KUz6VbQXrAXMOjYrNTXCykD9KPwtt%2FbzPpsSWhoeoATUcz3%2BuKQi5e7kPK6oKfppOyWwWYKI81Whg8msmm3iInsmMKxnQ%2BIkKJujGj3R8UdI0FE%2Bm98cDmj2qcrJJNh1Kuof1M6E7zqIqtqaRzvrH%2BLwwSvt6oB0U6Tdx4oobb1HF5MY3aoeFITK%2FWZzTTQtEh439a%2F04uuGbVRyefejnTp5jJEbiKgDsA8sGIBsCRSuHb3jREI7na8sgRDd8c8pE7HmVdrpwVMQnDuMCU08vBO5REDJFpe7JCu15mIAxviLFOgufDUUagGP2Z0U6lneeZVCugIrXtoGHM0J9pNfGw50q5kU95jPv6xySPp%2FzHQA1v0bHfZIU2VJ8WTtUpBD6oyYNSJw%2B5fpVzl42oPohzaH%2F3bGmGSGrAE9DbGigYUPXOxh%2FEiaxGYSzCuPSTGIlHw%2FTKE3H2goOyKEmsyPqlXa9j9KThN0eYix20AeH692x9S6QLK%2BD9XLuoslS920jN24HswnuDtvAY6pgE5koSb6M1lEyXpj1EY5UOUTphoCP6THHEYSnBp2iZsWmYzj6f7NYcyEf9Z4Yw3u5saU8TDX%2BMHfLq66Z59rmyxuR0iemzM%2FHfvprA%2FYDZ8bmi%2B4mJyQmjpQOcrghtmZ6Sf1xD0W%2BHx38wLtaedcFVplEnqq%2Fkp2rV%2B%2BhZMZr1X9y%2FTsJK3t0%2FpNKziQtMXkeHetIcj9sDe%2Bu5x2phOZa86K9oHA9Oe&X-Amz-Signature=79ee0001693da17c0d0a2267b97fa28eac3c3871c50045bf8e24b373b805fa4a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRPENJWS%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHz%2Fui3dOImuSnwOdLcbWNIYUq3fhtLgxdzljpFe4DEaAiBleMHa6lWFAQ47g7u1m1ZFlJ5aUqkb%2BazHcIqV2fZ59iqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw9Ejle0QFPa5Qza8KtwDrb728LU8%2FMFsshgeRj8ARLVJbprsnHDX%2FCCGHpW8%2FdhDlxTb%2BdNnJoSCw7sx1hm20%2B5xRcu0LmxoC6IWNE%2Fok0loqlCGXpQu5pv%2BHETQGMExoNY2WZV87KUz6VbQXrAXMOjYrNTXCykD9KPwtt%2FbzPpsSWhoeoATUcz3%2BuKQi5e7kPK6oKfppOyWwWYKI81Whg8msmm3iInsmMKxnQ%2BIkKJujGj3R8UdI0FE%2Bm98cDmj2qcrJJNh1Kuof1M6E7zqIqtqaRzvrH%2BLwwSvt6oB0U6Tdx4oobb1HF5MY3aoeFITK%2FWZzTTQtEh439a%2F04uuGbVRyefejnTp5jJEbiKgDsA8sGIBsCRSuHb3jREI7na8sgRDd8c8pE7HmVdrpwVMQnDuMCU08vBO5REDJFpe7JCu15mIAxviLFOgufDUUagGP2Z0U6lneeZVCugIrXtoGHM0J9pNfGw50q5kU95jPv6xySPp%2FzHQA1v0bHfZIU2VJ8WTtUpBD6oyYNSJw%2B5fpVzl42oPohzaH%2F3bGmGSGrAE9DbGigYUPXOxh%2FEiaxGYSzCuPSTGIlHw%2FTKE3H2goOyKEmsyPqlXa9j9KThN0eYix20AeH692x9S6QLK%2BD9XLuoslS920jN24HswnuDtvAY6pgE5koSb6M1lEyXpj1EY5UOUTphoCP6THHEYSnBp2iZsWmYzj6f7NYcyEf9Z4Yw3u5saU8TDX%2BMHfLq66Z59rmyxuR0iemzM%2FHfvprA%2FYDZ8bmi%2B4mJyQmjpQOcrghtmZ6Sf1xD0W%2BHx38wLtaedcFVplEnqq%2Fkp2rV%2B%2BhZMZr1X9y%2FTsJK3t0%2FpNKziQtMXkeHetIcj9sDe%2Bu5x2phOZa86K9oHA9Oe&X-Amz-Signature=cbf6fb40c7f6cbb6cdb0f3d58dd08d00346201485f5781eb58f71bda44985398&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRPENJWS%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHz%2Fui3dOImuSnwOdLcbWNIYUq3fhtLgxdzljpFe4DEaAiBleMHa6lWFAQ47g7u1m1ZFlJ5aUqkb%2BazHcIqV2fZ59iqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw9Ejle0QFPa5Qza8KtwDrb728LU8%2FMFsshgeRj8ARLVJbprsnHDX%2FCCGHpW8%2FdhDlxTb%2BdNnJoSCw7sx1hm20%2B5xRcu0LmxoC6IWNE%2Fok0loqlCGXpQu5pv%2BHETQGMExoNY2WZV87KUz6VbQXrAXMOjYrNTXCykD9KPwtt%2FbzPpsSWhoeoATUcz3%2BuKQi5e7kPK6oKfppOyWwWYKI81Whg8msmm3iInsmMKxnQ%2BIkKJujGj3R8UdI0FE%2Bm98cDmj2qcrJJNh1Kuof1M6E7zqIqtqaRzvrH%2BLwwSvt6oB0U6Tdx4oobb1HF5MY3aoeFITK%2FWZzTTQtEh439a%2F04uuGbVRyefejnTp5jJEbiKgDsA8sGIBsCRSuHb3jREI7na8sgRDd8c8pE7HmVdrpwVMQnDuMCU08vBO5REDJFpe7JCu15mIAxviLFOgufDUUagGP2Z0U6lneeZVCugIrXtoGHM0J9pNfGw50q5kU95jPv6xySPp%2FzHQA1v0bHfZIU2VJ8WTtUpBD6oyYNSJw%2B5fpVzl42oPohzaH%2F3bGmGSGrAE9DbGigYUPXOxh%2FEiaxGYSzCuPSTGIlHw%2FTKE3H2goOyKEmsyPqlXa9j9KThN0eYix20AeH692x9S6QLK%2BD9XLuoslS920jN24HswnuDtvAY6pgE5koSb6M1lEyXpj1EY5UOUTphoCP6THHEYSnBp2iZsWmYzj6f7NYcyEf9Z4Yw3u5saU8TDX%2BMHfLq66Z59rmyxuR0iemzM%2FHfvprA%2FYDZ8bmi%2B4mJyQmjpQOcrghtmZ6Sf1xD0W%2BHx38wLtaedcFVplEnqq%2Fkp2rV%2B%2BhZMZr1X9y%2FTsJK3t0%2FpNKziQtMXkeHetIcj9sDe%2Bu5x2phOZa86K9oHA9Oe&X-Amz-Signature=c337b5d57eb529dd524ac23fd6afc3a36a59b0f4936c9610512d0e1e5e6fa044&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRPENJWS%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHz%2Fui3dOImuSnwOdLcbWNIYUq3fhtLgxdzljpFe4DEaAiBleMHa6lWFAQ47g7u1m1ZFlJ5aUqkb%2BazHcIqV2fZ59iqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw9Ejle0QFPa5Qza8KtwDrb728LU8%2FMFsshgeRj8ARLVJbprsnHDX%2FCCGHpW8%2FdhDlxTb%2BdNnJoSCw7sx1hm20%2B5xRcu0LmxoC6IWNE%2Fok0loqlCGXpQu5pv%2BHETQGMExoNY2WZV87KUz6VbQXrAXMOjYrNTXCykD9KPwtt%2FbzPpsSWhoeoATUcz3%2BuKQi5e7kPK6oKfppOyWwWYKI81Whg8msmm3iInsmMKxnQ%2BIkKJujGj3R8UdI0FE%2Bm98cDmj2qcrJJNh1Kuof1M6E7zqIqtqaRzvrH%2BLwwSvt6oB0U6Tdx4oobb1HF5MY3aoeFITK%2FWZzTTQtEh439a%2F04uuGbVRyefejnTp5jJEbiKgDsA8sGIBsCRSuHb3jREI7na8sgRDd8c8pE7HmVdrpwVMQnDuMCU08vBO5REDJFpe7JCu15mIAxviLFOgufDUUagGP2Z0U6lneeZVCugIrXtoGHM0J9pNfGw50q5kU95jPv6xySPp%2FzHQA1v0bHfZIU2VJ8WTtUpBD6oyYNSJw%2B5fpVzl42oPohzaH%2F3bGmGSGrAE9DbGigYUPXOxh%2FEiaxGYSzCuPSTGIlHw%2FTKE3H2goOyKEmsyPqlXa9j9KThN0eYix20AeH692x9S6QLK%2BD9XLuoslS920jN24HswnuDtvAY6pgE5koSb6M1lEyXpj1EY5UOUTphoCP6THHEYSnBp2iZsWmYzj6f7NYcyEf9Z4Yw3u5saU8TDX%2BMHfLq66Z59rmyxuR0iemzM%2FHfvprA%2FYDZ8bmi%2B4mJyQmjpQOcrghtmZ6Sf1xD0W%2BHx38wLtaedcFVplEnqq%2Fkp2rV%2B%2BhZMZr1X9y%2FTsJK3t0%2FpNKziQtMXkeHetIcj9sDe%2Bu5x2phOZa86K9oHA9Oe&X-Amz-Signature=3ace0b7931b41d5927f0f370c47756efae6005ed4aa43dad482312fa2fba721e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRPENJWS%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHz%2Fui3dOImuSnwOdLcbWNIYUq3fhtLgxdzljpFe4DEaAiBleMHa6lWFAQ47g7u1m1ZFlJ5aUqkb%2BazHcIqV2fZ59iqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw9Ejle0QFPa5Qza8KtwDrb728LU8%2FMFsshgeRj8ARLVJbprsnHDX%2FCCGHpW8%2FdhDlxTb%2BdNnJoSCw7sx1hm20%2B5xRcu0LmxoC6IWNE%2Fok0loqlCGXpQu5pv%2BHETQGMExoNY2WZV87KUz6VbQXrAXMOjYrNTXCykD9KPwtt%2FbzPpsSWhoeoATUcz3%2BuKQi5e7kPK6oKfppOyWwWYKI81Whg8msmm3iInsmMKxnQ%2BIkKJujGj3R8UdI0FE%2Bm98cDmj2qcrJJNh1Kuof1M6E7zqIqtqaRzvrH%2BLwwSvt6oB0U6Tdx4oobb1HF5MY3aoeFITK%2FWZzTTQtEh439a%2F04uuGbVRyefejnTp5jJEbiKgDsA8sGIBsCRSuHb3jREI7na8sgRDd8c8pE7HmVdrpwVMQnDuMCU08vBO5REDJFpe7JCu15mIAxviLFOgufDUUagGP2Z0U6lneeZVCugIrXtoGHM0J9pNfGw50q5kU95jPv6xySPp%2FzHQA1v0bHfZIU2VJ8WTtUpBD6oyYNSJw%2B5fpVzl42oPohzaH%2F3bGmGSGrAE9DbGigYUPXOxh%2FEiaxGYSzCuPSTGIlHw%2FTKE3H2goOyKEmsyPqlXa9j9KThN0eYix20AeH692x9S6QLK%2BD9XLuoslS920jN24HswnuDtvAY6pgE5koSb6M1lEyXpj1EY5UOUTphoCP6THHEYSnBp2iZsWmYzj6f7NYcyEf9Z4Yw3u5saU8TDX%2BMHfLq66Z59rmyxuR0iemzM%2FHfvprA%2FYDZ8bmi%2B4mJyQmjpQOcrghtmZ6Sf1xD0W%2BHx38wLtaedcFVplEnqq%2Fkp2rV%2B%2BhZMZr1X9y%2FTsJK3t0%2FpNKziQtMXkeHetIcj9sDe%2Bu5x2phOZa86K9oHA9Oe&X-Amz-Signature=8dcc6ee0a0420c1d324a314bb068cc468b9d621c6312b85801ac64e6959dbd3b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
