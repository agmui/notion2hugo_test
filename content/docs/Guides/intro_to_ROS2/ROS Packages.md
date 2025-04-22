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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6CCHXYU%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDu9FIZnGwSS6%2BwtLpoo6dpwTLEDhhyQLcW%2BkIlY626ZwIhANAUtqDrbkjZ77ApSdUAW8J6bA3an1Ybm8Gxgv7mfVZGKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsXOGmYbxhHHIEmwkq3AN35CXAREAx4CUMa7oCi5RBOgRVQTWjMWsB5nu1AqkYvpl6BS4nh12G3dzwaW6HuFNV6ZtR6i5yElW3irs5VV%2BQZebTpXVMzVp2Ob92A1PmQeaGzfrxDNYZps8AaAdJjUwGP8725RXjiJ9u7UHpp9MKCmEm4OFP2uoj6WHssmTJLO4%2F5C8GoWfL3YIVLbENqnW0MPJr538ll0vWsvKzo8epMIAVWNQhPhKndG%2BQozEgitoWUFp7OAHHTC8Gf%2BNxybcCxbXdmyl4Ke36xIpjsfXYGKwHcsI73dKGX9a0qP1ZNh874BAUW6QsgVY%2BzQgUMnQKlQ3x2DujLJbR5i5tDY9b5nWQAtNN07eDJbDk9mSywz8o%2BSEfIig2nNcU55MXKsv3umESnufX11ymtiqb17dY0IXsotQd5KgDRULwV5a3hX5IBv2SuW7q1G4nUN20kYFezQH1KGocj%2Bm1s3WtPA14YW7TE%2FmaG%2BhQ3dwfBPL8Bqfx7oZ5xGQ4eqehFblqILDuUQVdaLrBL6m7ckAwPM46W3EeQMUeAPkbGvgvMx6cKs69EJrMfENKj9qIyd70q%2BtaCWdjvAnGSQbiOSJiENM2ssw1fS5ITmyv6knoQbePmFxzptdpeuXACWyoXzDho6DABjqkAZdCzObrDstupFQGZ3DUB2K2eoMxhvog3Y3eEnGxy28gfnjUq3xmw5V26Zn4bH4Q4wWNnA2tiQWIxyUL3YSSSMu3QHeNdJivcftENqZd1KfTUF4NfsGlOBmqHunBb1x%2Fiy2tyNftnaXwN41OuHaRAJFFPE0iunAlYPRE7AO9PJA4Deu%2Foj%2FO3uzPi8azer%2B5T94MNnnbyaa%2BNxMKVQlDx4xle6up&X-Amz-Signature=0a889f56b4dd4949fea60073474f4ae0c589a45f101418a6f1149d572d3db229&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6CCHXYU%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDu9FIZnGwSS6%2BwtLpoo6dpwTLEDhhyQLcW%2BkIlY626ZwIhANAUtqDrbkjZ77ApSdUAW8J6bA3an1Ybm8Gxgv7mfVZGKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsXOGmYbxhHHIEmwkq3AN35CXAREAx4CUMa7oCi5RBOgRVQTWjMWsB5nu1AqkYvpl6BS4nh12G3dzwaW6HuFNV6ZtR6i5yElW3irs5VV%2BQZebTpXVMzVp2Ob92A1PmQeaGzfrxDNYZps8AaAdJjUwGP8725RXjiJ9u7UHpp9MKCmEm4OFP2uoj6WHssmTJLO4%2F5C8GoWfL3YIVLbENqnW0MPJr538ll0vWsvKzo8epMIAVWNQhPhKndG%2BQozEgitoWUFp7OAHHTC8Gf%2BNxybcCxbXdmyl4Ke36xIpjsfXYGKwHcsI73dKGX9a0qP1ZNh874BAUW6QsgVY%2BzQgUMnQKlQ3x2DujLJbR5i5tDY9b5nWQAtNN07eDJbDk9mSywz8o%2BSEfIig2nNcU55MXKsv3umESnufX11ymtiqb17dY0IXsotQd5KgDRULwV5a3hX5IBv2SuW7q1G4nUN20kYFezQH1KGocj%2Bm1s3WtPA14YW7TE%2FmaG%2BhQ3dwfBPL8Bqfx7oZ5xGQ4eqehFblqILDuUQVdaLrBL6m7ckAwPM46W3EeQMUeAPkbGvgvMx6cKs69EJrMfENKj9qIyd70q%2BtaCWdjvAnGSQbiOSJiENM2ssw1fS5ITmyv6knoQbePmFxzptdpeuXACWyoXzDho6DABjqkAZdCzObrDstupFQGZ3DUB2K2eoMxhvog3Y3eEnGxy28gfnjUq3xmw5V26Zn4bH4Q4wWNnA2tiQWIxyUL3YSSSMu3QHeNdJivcftENqZd1KfTUF4NfsGlOBmqHunBb1x%2Fiy2tyNftnaXwN41OuHaRAJFFPE0iunAlYPRE7AO9PJA4Deu%2Foj%2FO3uzPi8azer%2B5T94MNnnbyaa%2BNxMKVQlDx4xle6up&X-Amz-Signature=a9a188de296b14a94e6db51e55217b120f0a5b9c9ca136e0089c5f7c8f3dc7e6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6CCHXYU%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDu9FIZnGwSS6%2BwtLpoo6dpwTLEDhhyQLcW%2BkIlY626ZwIhANAUtqDrbkjZ77ApSdUAW8J6bA3an1Ybm8Gxgv7mfVZGKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsXOGmYbxhHHIEmwkq3AN35CXAREAx4CUMa7oCi5RBOgRVQTWjMWsB5nu1AqkYvpl6BS4nh12G3dzwaW6HuFNV6ZtR6i5yElW3irs5VV%2BQZebTpXVMzVp2Ob92A1PmQeaGzfrxDNYZps8AaAdJjUwGP8725RXjiJ9u7UHpp9MKCmEm4OFP2uoj6WHssmTJLO4%2F5C8GoWfL3YIVLbENqnW0MPJr538ll0vWsvKzo8epMIAVWNQhPhKndG%2BQozEgitoWUFp7OAHHTC8Gf%2BNxybcCxbXdmyl4Ke36xIpjsfXYGKwHcsI73dKGX9a0qP1ZNh874BAUW6QsgVY%2BzQgUMnQKlQ3x2DujLJbR5i5tDY9b5nWQAtNN07eDJbDk9mSywz8o%2BSEfIig2nNcU55MXKsv3umESnufX11ymtiqb17dY0IXsotQd5KgDRULwV5a3hX5IBv2SuW7q1G4nUN20kYFezQH1KGocj%2Bm1s3WtPA14YW7TE%2FmaG%2BhQ3dwfBPL8Bqfx7oZ5xGQ4eqehFblqILDuUQVdaLrBL6m7ckAwPM46W3EeQMUeAPkbGvgvMx6cKs69EJrMfENKj9qIyd70q%2BtaCWdjvAnGSQbiOSJiENM2ssw1fS5ITmyv6knoQbePmFxzptdpeuXACWyoXzDho6DABjqkAZdCzObrDstupFQGZ3DUB2K2eoMxhvog3Y3eEnGxy28gfnjUq3xmw5V26Zn4bH4Q4wWNnA2tiQWIxyUL3YSSSMu3QHeNdJivcftENqZd1KfTUF4NfsGlOBmqHunBb1x%2Fiy2tyNftnaXwN41OuHaRAJFFPE0iunAlYPRE7AO9PJA4Deu%2Foj%2FO3uzPi8azer%2B5T94MNnnbyaa%2BNxMKVQlDx4xle6up&X-Amz-Signature=752d1b1f7141927f587d21da911fc66788ec2ec5ff477d96eca0826fe2297a7e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6CCHXYU%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDu9FIZnGwSS6%2BwtLpoo6dpwTLEDhhyQLcW%2BkIlY626ZwIhANAUtqDrbkjZ77ApSdUAW8J6bA3an1Ybm8Gxgv7mfVZGKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsXOGmYbxhHHIEmwkq3AN35CXAREAx4CUMa7oCi5RBOgRVQTWjMWsB5nu1AqkYvpl6BS4nh12G3dzwaW6HuFNV6ZtR6i5yElW3irs5VV%2BQZebTpXVMzVp2Ob92A1PmQeaGzfrxDNYZps8AaAdJjUwGP8725RXjiJ9u7UHpp9MKCmEm4OFP2uoj6WHssmTJLO4%2F5C8GoWfL3YIVLbENqnW0MPJr538ll0vWsvKzo8epMIAVWNQhPhKndG%2BQozEgitoWUFp7OAHHTC8Gf%2BNxybcCxbXdmyl4Ke36xIpjsfXYGKwHcsI73dKGX9a0qP1ZNh874BAUW6QsgVY%2BzQgUMnQKlQ3x2DujLJbR5i5tDY9b5nWQAtNN07eDJbDk9mSywz8o%2BSEfIig2nNcU55MXKsv3umESnufX11ymtiqb17dY0IXsotQd5KgDRULwV5a3hX5IBv2SuW7q1G4nUN20kYFezQH1KGocj%2Bm1s3WtPA14YW7TE%2FmaG%2BhQ3dwfBPL8Bqfx7oZ5xGQ4eqehFblqILDuUQVdaLrBL6m7ckAwPM46W3EeQMUeAPkbGvgvMx6cKs69EJrMfENKj9qIyd70q%2BtaCWdjvAnGSQbiOSJiENM2ssw1fS5ITmyv6knoQbePmFxzptdpeuXACWyoXzDho6DABjqkAZdCzObrDstupFQGZ3DUB2K2eoMxhvog3Y3eEnGxy28gfnjUq3xmw5V26Zn4bH4Q4wWNnA2tiQWIxyUL3YSSSMu3QHeNdJivcftENqZd1KfTUF4NfsGlOBmqHunBb1x%2Fiy2tyNftnaXwN41OuHaRAJFFPE0iunAlYPRE7AO9PJA4Deu%2Foj%2FO3uzPi8azer%2B5T94MNnnbyaa%2BNxMKVQlDx4xle6up&X-Amz-Signature=5bd66525172b98bc3aa171a00d2218e0c740c9cc314bf040456cec5098ae7c83&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6CCHXYU%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDu9FIZnGwSS6%2BwtLpoo6dpwTLEDhhyQLcW%2BkIlY626ZwIhANAUtqDrbkjZ77ApSdUAW8J6bA3an1Ybm8Gxgv7mfVZGKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsXOGmYbxhHHIEmwkq3AN35CXAREAx4CUMa7oCi5RBOgRVQTWjMWsB5nu1AqkYvpl6BS4nh12G3dzwaW6HuFNV6ZtR6i5yElW3irs5VV%2BQZebTpXVMzVp2Ob92A1PmQeaGzfrxDNYZps8AaAdJjUwGP8725RXjiJ9u7UHpp9MKCmEm4OFP2uoj6WHssmTJLO4%2F5C8GoWfL3YIVLbENqnW0MPJr538ll0vWsvKzo8epMIAVWNQhPhKndG%2BQozEgitoWUFp7OAHHTC8Gf%2BNxybcCxbXdmyl4Ke36xIpjsfXYGKwHcsI73dKGX9a0qP1ZNh874BAUW6QsgVY%2BzQgUMnQKlQ3x2DujLJbR5i5tDY9b5nWQAtNN07eDJbDk9mSywz8o%2BSEfIig2nNcU55MXKsv3umESnufX11ymtiqb17dY0IXsotQd5KgDRULwV5a3hX5IBv2SuW7q1G4nUN20kYFezQH1KGocj%2Bm1s3WtPA14YW7TE%2FmaG%2BhQ3dwfBPL8Bqfx7oZ5xGQ4eqehFblqILDuUQVdaLrBL6m7ckAwPM46W3EeQMUeAPkbGvgvMx6cKs69EJrMfENKj9qIyd70q%2BtaCWdjvAnGSQbiOSJiENM2ssw1fS5ITmyv6knoQbePmFxzptdpeuXACWyoXzDho6DABjqkAZdCzObrDstupFQGZ3DUB2K2eoMxhvog3Y3eEnGxy28gfnjUq3xmw5V26Zn4bH4Q4wWNnA2tiQWIxyUL3YSSSMu3QHeNdJivcftENqZd1KfTUF4NfsGlOBmqHunBb1x%2Fiy2tyNftnaXwN41OuHaRAJFFPE0iunAlYPRE7AO9PJA4Deu%2Foj%2FO3uzPi8azer%2B5T94MNnnbyaa%2BNxMKVQlDx4xle6up&X-Amz-Signature=f539e4d470501b2eb670ed01950e5a4267eacb597dcf4d36c782d16f48309518&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6CCHXYU%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDu9FIZnGwSS6%2BwtLpoo6dpwTLEDhhyQLcW%2BkIlY626ZwIhANAUtqDrbkjZ77ApSdUAW8J6bA3an1Ybm8Gxgv7mfVZGKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsXOGmYbxhHHIEmwkq3AN35CXAREAx4CUMa7oCi5RBOgRVQTWjMWsB5nu1AqkYvpl6BS4nh12G3dzwaW6HuFNV6ZtR6i5yElW3irs5VV%2BQZebTpXVMzVp2Ob92A1PmQeaGzfrxDNYZps8AaAdJjUwGP8725RXjiJ9u7UHpp9MKCmEm4OFP2uoj6WHssmTJLO4%2F5C8GoWfL3YIVLbENqnW0MPJr538ll0vWsvKzo8epMIAVWNQhPhKndG%2BQozEgitoWUFp7OAHHTC8Gf%2BNxybcCxbXdmyl4Ke36xIpjsfXYGKwHcsI73dKGX9a0qP1ZNh874BAUW6QsgVY%2BzQgUMnQKlQ3x2DujLJbR5i5tDY9b5nWQAtNN07eDJbDk9mSywz8o%2BSEfIig2nNcU55MXKsv3umESnufX11ymtiqb17dY0IXsotQd5KgDRULwV5a3hX5IBv2SuW7q1G4nUN20kYFezQH1KGocj%2Bm1s3WtPA14YW7TE%2FmaG%2BhQ3dwfBPL8Bqfx7oZ5xGQ4eqehFblqILDuUQVdaLrBL6m7ckAwPM46W3EeQMUeAPkbGvgvMx6cKs69EJrMfENKj9qIyd70q%2BtaCWdjvAnGSQbiOSJiENM2ssw1fS5ITmyv6knoQbePmFxzptdpeuXACWyoXzDho6DABjqkAZdCzObrDstupFQGZ3DUB2K2eoMxhvog3Y3eEnGxy28gfnjUq3xmw5V26Zn4bH4Q4wWNnA2tiQWIxyUL3YSSSMu3QHeNdJivcftENqZd1KfTUF4NfsGlOBmqHunBb1x%2Fiy2tyNftnaXwN41OuHaRAJFFPE0iunAlYPRE7AO9PJA4Deu%2Foj%2FO3uzPi8azer%2B5T94MNnnbyaa%2BNxMKVQlDx4xle6up&X-Amz-Signature=09d81805f21028379e4c98e53916e55ae7899cd30d176a28fb241d31b9343983&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6CCHXYU%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDu9FIZnGwSS6%2BwtLpoo6dpwTLEDhhyQLcW%2BkIlY626ZwIhANAUtqDrbkjZ77ApSdUAW8J6bA3an1Ybm8Gxgv7mfVZGKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsXOGmYbxhHHIEmwkq3AN35CXAREAx4CUMa7oCi5RBOgRVQTWjMWsB5nu1AqkYvpl6BS4nh12G3dzwaW6HuFNV6ZtR6i5yElW3irs5VV%2BQZebTpXVMzVp2Ob92A1PmQeaGzfrxDNYZps8AaAdJjUwGP8725RXjiJ9u7UHpp9MKCmEm4OFP2uoj6WHssmTJLO4%2F5C8GoWfL3YIVLbENqnW0MPJr538ll0vWsvKzo8epMIAVWNQhPhKndG%2BQozEgitoWUFp7OAHHTC8Gf%2BNxybcCxbXdmyl4Ke36xIpjsfXYGKwHcsI73dKGX9a0qP1ZNh874BAUW6QsgVY%2BzQgUMnQKlQ3x2DujLJbR5i5tDY9b5nWQAtNN07eDJbDk9mSywz8o%2BSEfIig2nNcU55MXKsv3umESnufX11ymtiqb17dY0IXsotQd5KgDRULwV5a3hX5IBv2SuW7q1G4nUN20kYFezQH1KGocj%2Bm1s3WtPA14YW7TE%2FmaG%2BhQ3dwfBPL8Bqfx7oZ5xGQ4eqehFblqILDuUQVdaLrBL6m7ckAwPM46W3EeQMUeAPkbGvgvMx6cKs69EJrMfENKj9qIyd70q%2BtaCWdjvAnGSQbiOSJiENM2ssw1fS5ITmyv6knoQbePmFxzptdpeuXACWyoXzDho6DABjqkAZdCzObrDstupFQGZ3DUB2K2eoMxhvog3Y3eEnGxy28gfnjUq3xmw5V26Zn4bH4Q4wWNnA2tiQWIxyUL3YSSSMu3QHeNdJivcftENqZd1KfTUF4NfsGlOBmqHunBb1x%2Fiy2tyNftnaXwN41OuHaRAJFFPE0iunAlYPRE7AO9PJA4Deu%2Foj%2FO3uzPi8azer%2B5T94MNnnbyaa%2BNxMKVQlDx4xle6up&X-Amz-Signature=0c0208cc46b06c280e84dc9a74a14876370adf9ac018abe40af0510bfedd883e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
