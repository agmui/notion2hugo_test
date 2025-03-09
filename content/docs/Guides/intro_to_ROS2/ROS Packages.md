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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVVWSU5S%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIGpc1NxdKfeYO%2FS2sdqY6WPT9YuwwWkTK%2Bqsa%2Fa%2FUlp%2FAiEA5UcLBSRnrHD4lQ7dg%2F7H7tci1xbzdEnYSAJAJNt6nh8q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDB4gq0L6fqcg1wTYMyrcA7PTpmhIphYVoM9e1BXLKxm4yslB6TyAlqnPKL4nU8tO%2FEl%2B7EbS5nIqnJx3fX0lNRxHCluiQAnZef7ZJkQRriY67pvuw8lFrfEnJTiA6W3gj81uW5Bo%2F%2B8MeM6Fq9KijrUVSHneV7IN5ciKvyI%2BJJEdCXw92DbSsLKeH4og1klYXZvWmvnglcCIT1zJOMrvqHZIz3G2r7vINIn0KgkFTvTwcKtIDIHrDP1wmHF%2FaSIzHnAQlpAid2j7uMyTmQOITFNSeqCUnF1n6FtC3jBN1AtbS2XXyrM8t85Uv5XrheQ7RKSQGgUqtRuIZ0%2FhzUGilWyDfiGxL3TUyN0wkOeOCHA3D4l22R7FHZO28thDcca9xJywwIfXcVFu0zHjLqGscG%2FbXJx99LP%2BnppKYLL18BOzJ0Bzvt79gSAjoBjygJzRufFYPixKbt5dCdxwxmCW1xdoY1JkkpqXX1UOAKEJ%2BbUZWYbfWRo3qe7zGRJ%2BdZu3ne4tZclmm7Jj5P1DwMw2gNqNloC3XwIHNyZxM5L6JIoqWomOwAUpuHvTe9LxF0ANhkeceDcxXp4AyZElCBgvgrSXNPt7iBTswUhyaYUxXdvijs1CLKKmmJivqntE%2FR2pNQETQMfovaT3f4BvMJ%2FItr4GOqUB0wYrvTg6Rg9lXNX9ZduaHTvueKZguciJKz2ee3BS7PF4GsYkkKpdFsatuR5Snt8MHQphg9YmpsHm8n%2BdDrBOhVeeWkigmIc9KkMeLNyAvCgrtVKjCfV1J3x8vw8g%2F2h%2BOGOSvgl8hzpF%2F34WLUvEk%2F5ccYlGKEV4YKEeOioRN3Op%2F2M1tsJi6jQGh3S3%2FWUYZrWue1iNFRdShFOb89Q9VGL47a55&X-Amz-Signature=3ee41c0d5949a01c0610af52a899d9c481b76e37a43b5288b9add45f95abb7fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVVWSU5S%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIGpc1NxdKfeYO%2FS2sdqY6WPT9YuwwWkTK%2Bqsa%2Fa%2FUlp%2FAiEA5UcLBSRnrHD4lQ7dg%2F7H7tci1xbzdEnYSAJAJNt6nh8q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDB4gq0L6fqcg1wTYMyrcA7PTpmhIphYVoM9e1BXLKxm4yslB6TyAlqnPKL4nU8tO%2FEl%2B7EbS5nIqnJx3fX0lNRxHCluiQAnZef7ZJkQRriY67pvuw8lFrfEnJTiA6W3gj81uW5Bo%2F%2B8MeM6Fq9KijrUVSHneV7IN5ciKvyI%2BJJEdCXw92DbSsLKeH4og1klYXZvWmvnglcCIT1zJOMrvqHZIz3G2r7vINIn0KgkFTvTwcKtIDIHrDP1wmHF%2FaSIzHnAQlpAid2j7uMyTmQOITFNSeqCUnF1n6FtC3jBN1AtbS2XXyrM8t85Uv5XrheQ7RKSQGgUqtRuIZ0%2FhzUGilWyDfiGxL3TUyN0wkOeOCHA3D4l22R7FHZO28thDcca9xJywwIfXcVFu0zHjLqGscG%2FbXJx99LP%2BnppKYLL18BOzJ0Bzvt79gSAjoBjygJzRufFYPixKbt5dCdxwxmCW1xdoY1JkkpqXX1UOAKEJ%2BbUZWYbfWRo3qe7zGRJ%2BdZu3ne4tZclmm7Jj5P1DwMw2gNqNloC3XwIHNyZxM5L6JIoqWomOwAUpuHvTe9LxF0ANhkeceDcxXp4AyZElCBgvgrSXNPt7iBTswUhyaYUxXdvijs1CLKKmmJivqntE%2FR2pNQETQMfovaT3f4BvMJ%2FItr4GOqUB0wYrvTg6Rg9lXNX9ZduaHTvueKZguciJKz2ee3BS7PF4GsYkkKpdFsatuR5Snt8MHQphg9YmpsHm8n%2BdDrBOhVeeWkigmIc9KkMeLNyAvCgrtVKjCfV1J3x8vw8g%2F2h%2BOGOSvgl8hzpF%2F34WLUvEk%2F5ccYlGKEV4YKEeOioRN3Op%2F2M1tsJi6jQGh3S3%2FWUYZrWue1iNFRdShFOb89Q9VGL47a55&X-Amz-Signature=e3312d9a03d35cf6aa46c41a5d9483359bb37d4187bec5a75db271cb85a2abf4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVVWSU5S%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIGpc1NxdKfeYO%2FS2sdqY6WPT9YuwwWkTK%2Bqsa%2Fa%2FUlp%2FAiEA5UcLBSRnrHD4lQ7dg%2F7H7tci1xbzdEnYSAJAJNt6nh8q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDB4gq0L6fqcg1wTYMyrcA7PTpmhIphYVoM9e1BXLKxm4yslB6TyAlqnPKL4nU8tO%2FEl%2B7EbS5nIqnJx3fX0lNRxHCluiQAnZef7ZJkQRriY67pvuw8lFrfEnJTiA6W3gj81uW5Bo%2F%2B8MeM6Fq9KijrUVSHneV7IN5ciKvyI%2BJJEdCXw92DbSsLKeH4og1klYXZvWmvnglcCIT1zJOMrvqHZIz3G2r7vINIn0KgkFTvTwcKtIDIHrDP1wmHF%2FaSIzHnAQlpAid2j7uMyTmQOITFNSeqCUnF1n6FtC3jBN1AtbS2XXyrM8t85Uv5XrheQ7RKSQGgUqtRuIZ0%2FhzUGilWyDfiGxL3TUyN0wkOeOCHA3D4l22R7FHZO28thDcca9xJywwIfXcVFu0zHjLqGscG%2FbXJx99LP%2BnppKYLL18BOzJ0Bzvt79gSAjoBjygJzRufFYPixKbt5dCdxwxmCW1xdoY1JkkpqXX1UOAKEJ%2BbUZWYbfWRo3qe7zGRJ%2BdZu3ne4tZclmm7Jj5P1DwMw2gNqNloC3XwIHNyZxM5L6JIoqWomOwAUpuHvTe9LxF0ANhkeceDcxXp4AyZElCBgvgrSXNPt7iBTswUhyaYUxXdvijs1CLKKmmJivqntE%2FR2pNQETQMfovaT3f4BvMJ%2FItr4GOqUB0wYrvTg6Rg9lXNX9ZduaHTvueKZguciJKz2ee3BS7PF4GsYkkKpdFsatuR5Snt8MHQphg9YmpsHm8n%2BdDrBOhVeeWkigmIc9KkMeLNyAvCgrtVKjCfV1J3x8vw8g%2F2h%2BOGOSvgl8hzpF%2F34WLUvEk%2F5ccYlGKEV4YKEeOioRN3Op%2F2M1tsJi6jQGh3S3%2FWUYZrWue1iNFRdShFOb89Q9VGL47a55&X-Amz-Signature=d192b973b20703240954c4a04ef4e8aed2bfae22deaa03d664b3238d9d54fa16&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVVWSU5S%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIGpc1NxdKfeYO%2FS2sdqY6WPT9YuwwWkTK%2Bqsa%2Fa%2FUlp%2FAiEA5UcLBSRnrHD4lQ7dg%2F7H7tci1xbzdEnYSAJAJNt6nh8q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDB4gq0L6fqcg1wTYMyrcA7PTpmhIphYVoM9e1BXLKxm4yslB6TyAlqnPKL4nU8tO%2FEl%2B7EbS5nIqnJx3fX0lNRxHCluiQAnZef7ZJkQRriY67pvuw8lFrfEnJTiA6W3gj81uW5Bo%2F%2B8MeM6Fq9KijrUVSHneV7IN5ciKvyI%2BJJEdCXw92DbSsLKeH4og1klYXZvWmvnglcCIT1zJOMrvqHZIz3G2r7vINIn0KgkFTvTwcKtIDIHrDP1wmHF%2FaSIzHnAQlpAid2j7uMyTmQOITFNSeqCUnF1n6FtC3jBN1AtbS2XXyrM8t85Uv5XrheQ7RKSQGgUqtRuIZ0%2FhzUGilWyDfiGxL3TUyN0wkOeOCHA3D4l22R7FHZO28thDcca9xJywwIfXcVFu0zHjLqGscG%2FbXJx99LP%2BnppKYLL18BOzJ0Bzvt79gSAjoBjygJzRufFYPixKbt5dCdxwxmCW1xdoY1JkkpqXX1UOAKEJ%2BbUZWYbfWRo3qe7zGRJ%2BdZu3ne4tZclmm7Jj5P1DwMw2gNqNloC3XwIHNyZxM5L6JIoqWomOwAUpuHvTe9LxF0ANhkeceDcxXp4AyZElCBgvgrSXNPt7iBTswUhyaYUxXdvijs1CLKKmmJivqntE%2FR2pNQETQMfovaT3f4BvMJ%2FItr4GOqUB0wYrvTg6Rg9lXNX9ZduaHTvueKZguciJKz2ee3BS7PF4GsYkkKpdFsatuR5Snt8MHQphg9YmpsHm8n%2BdDrBOhVeeWkigmIc9KkMeLNyAvCgrtVKjCfV1J3x8vw8g%2F2h%2BOGOSvgl8hzpF%2F34WLUvEk%2F5ccYlGKEV4YKEeOioRN3Op%2F2M1tsJi6jQGh3S3%2FWUYZrWue1iNFRdShFOb89Q9VGL47a55&X-Amz-Signature=14bde5d90886bab1a4b0f9afd9f4df8fc70e53309a70e238629387c47669e6af&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVVWSU5S%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIGpc1NxdKfeYO%2FS2sdqY6WPT9YuwwWkTK%2Bqsa%2Fa%2FUlp%2FAiEA5UcLBSRnrHD4lQ7dg%2F7H7tci1xbzdEnYSAJAJNt6nh8q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDB4gq0L6fqcg1wTYMyrcA7PTpmhIphYVoM9e1BXLKxm4yslB6TyAlqnPKL4nU8tO%2FEl%2B7EbS5nIqnJx3fX0lNRxHCluiQAnZef7ZJkQRriY67pvuw8lFrfEnJTiA6W3gj81uW5Bo%2F%2B8MeM6Fq9KijrUVSHneV7IN5ciKvyI%2BJJEdCXw92DbSsLKeH4og1klYXZvWmvnglcCIT1zJOMrvqHZIz3G2r7vINIn0KgkFTvTwcKtIDIHrDP1wmHF%2FaSIzHnAQlpAid2j7uMyTmQOITFNSeqCUnF1n6FtC3jBN1AtbS2XXyrM8t85Uv5XrheQ7RKSQGgUqtRuIZ0%2FhzUGilWyDfiGxL3TUyN0wkOeOCHA3D4l22R7FHZO28thDcca9xJywwIfXcVFu0zHjLqGscG%2FbXJx99LP%2BnppKYLL18BOzJ0Bzvt79gSAjoBjygJzRufFYPixKbt5dCdxwxmCW1xdoY1JkkpqXX1UOAKEJ%2BbUZWYbfWRo3qe7zGRJ%2BdZu3ne4tZclmm7Jj5P1DwMw2gNqNloC3XwIHNyZxM5L6JIoqWomOwAUpuHvTe9LxF0ANhkeceDcxXp4AyZElCBgvgrSXNPt7iBTswUhyaYUxXdvijs1CLKKmmJivqntE%2FR2pNQETQMfovaT3f4BvMJ%2FItr4GOqUB0wYrvTg6Rg9lXNX9ZduaHTvueKZguciJKz2ee3BS7PF4GsYkkKpdFsatuR5Snt8MHQphg9YmpsHm8n%2BdDrBOhVeeWkigmIc9KkMeLNyAvCgrtVKjCfV1J3x8vw8g%2F2h%2BOGOSvgl8hzpF%2F34WLUvEk%2F5ccYlGKEV4YKEeOioRN3Op%2F2M1tsJi6jQGh3S3%2FWUYZrWue1iNFRdShFOb89Q9VGL47a55&X-Amz-Signature=03b43ed32aa0d249088f85feaa61bfde141bae0f21d510e2feca16347947ee12&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVVWSU5S%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIGpc1NxdKfeYO%2FS2sdqY6WPT9YuwwWkTK%2Bqsa%2Fa%2FUlp%2FAiEA5UcLBSRnrHD4lQ7dg%2F7H7tci1xbzdEnYSAJAJNt6nh8q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDB4gq0L6fqcg1wTYMyrcA7PTpmhIphYVoM9e1BXLKxm4yslB6TyAlqnPKL4nU8tO%2FEl%2B7EbS5nIqnJx3fX0lNRxHCluiQAnZef7ZJkQRriY67pvuw8lFrfEnJTiA6W3gj81uW5Bo%2F%2B8MeM6Fq9KijrUVSHneV7IN5ciKvyI%2BJJEdCXw92DbSsLKeH4og1klYXZvWmvnglcCIT1zJOMrvqHZIz3G2r7vINIn0KgkFTvTwcKtIDIHrDP1wmHF%2FaSIzHnAQlpAid2j7uMyTmQOITFNSeqCUnF1n6FtC3jBN1AtbS2XXyrM8t85Uv5XrheQ7RKSQGgUqtRuIZ0%2FhzUGilWyDfiGxL3TUyN0wkOeOCHA3D4l22R7FHZO28thDcca9xJywwIfXcVFu0zHjLqGscG%2FbXJx99LP%2BnppKYLL18BOzJ0Bzvt79gSAjoBjygJzRufFYPixKbt5dCdxwxmCW1xdoY1JkkpqXX1UOAKEJ%2BbUZWYbfWRo3qe7zGRJ%2BdZu3ne4tZclmm7Jj5P1DwMw2gNqNloC3XwIHNyZxM5L6JIoqWomOwAUpuHvTe9LxF0ANhkeceDcxXp4AyZElCBgvgrSXNPt7iBTswUhyaYUxXdvijs1CLKKmmJivqntE%2FR2pNQETQMfovaT3f4BvMJ%2FItr4GOqUB0wYrvTg6Rg9lXNX9ZduaHTvueKZguciJKz2ee3BS7PF4GsYkkKpdFsatuR5Snt8MHQphg9YmpsHm8n%2BdDrBOhVeeWkigmIc9KkMeLNyAvCgrtVKjCfV1J3x8vw8g%2F2h%2BOGOSvgl8hzpF%2F34WLUvEk%2F5ccYlGKEV4YKEeOioRN3Op%2F2M1tsJi6jQGh3S3%2FWUYZrWue1iNFRdShFOb89Q9VGL47a55&X-Amz-Signature=d76093261ba8f6c9a45ff37b87a39fa121a1a9cc359f799eef5e5dd7aa64dfe1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVVWSU5S%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIGpc1NxdKfeYO%2FS2sdqY6WPT9YuwwWkTK%2Bqsa%2Fa%2FUlp%2FAiEA5UcLBSRnrHD4lQ7dg%2F7H7tci1xbzdEnYSAJAJNt6nh8q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDB4gq0L6fqcg1wTYMyrcA7PTpmhIphYVoM9e1BXLKxm4yslB6TyAlqnPKL4nU8tO%2FEl%2B7EbS5nIqnJx3fX0lNRxHCluiQAnZef7ZJkQRriY67pvuw8lFrfEnJTiA6W3gj81uW5Bo%2F%2B8MeM6Fq9KijrUVSHneV7IN5ciKvyI%2BJJEdCXw92DbSsLKeH4og1klYXZvWmvnglcCIT1zJOMrvqHZIz3G2r7vINIn0KgkFTvTwcKtIDIHrDP1wmHF%2FaSIzHnAQlpAid2j7uMyTmQOITFNSeqCUnF1n6FtC3jBN1AtbS2XXyrM8t85Uv5XrheQ7RKSQGgUqtRuIZ0%2FhzUGilWyDfiGxL3TUyN0wkOeOCHA3D4l22R7FHZO28thDcca9xJywwIfXcVFu0zHjLqGscG%2FbXJx99LP%2BnppKYLL18BOzJ0Bzvt79gSAjoBjygJzRufFYPixKbt5dCdxwxmCW1xdoY1JkkpqXX1UOAKEJ%2BbUZWYbfWRo3qe7zGRJ%2BdZu3ne4tZclmm7Jj5P1DwMw2gNqNloC3XwIHNyZxM5L6JIoqWomOwAUpuHvTe9LxF0ANhkeceDcxXp4AyZElCBgvgrSXNPt7iBTswUhyaYUxXdvijs1CLKKmmJivqntE%2FR2pNQETQMfovaT3f4BvMJ%2FItr4GOqUB0wYrvTg6Rg9lXNX9ZduaHTvueKZguciJKz2ee3BS7PF4GsYkkKpdFsatuR5Snt8MHQphg9YmpsHm8n%2BdDrBOhVeeWkigmIc9KkMeLNyAvCgrtVKjCfV1J3x8vw8g%2F2h%2BOGOSvgl8hzpF%2F34WLUvEk%2F5ccYlGKEV4YKEeOioRN3Op%2F2M1tsJi6jQGh3S3%2FWUYZrWue1iNFRdShFOb89Q9VGL47a55&X-Amz-Signature=281c442a4a043aa95e448bb24d762d5033e365fa3cfaaf40c01cd95a8267a1fa&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
