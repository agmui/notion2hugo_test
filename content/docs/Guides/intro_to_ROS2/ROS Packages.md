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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XQIYHQ3%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BUUPFsUXpLk%2BeP73VR99B1abXx2aShSlowPjeJ9kWAAiEA%2FZkT7wGG4jiQHD7GSLfyOFN%2F%2BfXj1z6uEU0GMBrT4FMqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJzQtaYe3%2FBxmTb1CrcA9lrXA7yrI%2Fgr6Hj4ycVMjW7efJ7IGHQYnIgyBhNZTM%2Bzc385tkTFkaeHEeug1odWRk2bC%2F6rnWETXBCZKJ35%2FQDIjIVSeWjI4SvkAuiixe7xBTsbUbEQGiETFSVObkZgD%2B51KZSqIQZo7qF8dxilFMQ1p4nM5B2Y9cNuHgND7pQjJjco8xwdsC0S%2FtonoZbfzRGnZUUfohFfKfIPTBdIX0oK%2BCTxRQNJjStTqqxcf3XdmVrtmlEtN67BnpO2tZibxGSRbAyuaBo8y%2Bn8sLkVAMryS1BaMwsZ8gL7mSMPmTpYc1MsWOsYOz3AME95OtLcEnCqvQ4C7vIlYedx36j0CGABRbKInE1Qbtk5%2FNY1XjHcT1az0dj2R72jSxt7ZGE5JYdRRav7pVlJuWzs5J1s50RRCZWGf92dpiDa%2Bzq7PwYdXjbmgKWr1TSe50U9HHKaRLjsec0uU3cat68l8KR7uPgCFrWUxoXwqSdvF9tgwN4jUTcBr2Y1CS%2B4E%2BVeqkaZ0GawQflEzd4j7haaSffyTC%2BsH6g1Y48jgJjxX5DnD42GZCM0xxrJaPCQ4Ds3UinZ%2FmtvDJmFePDTLYCF6aC5RYKkLweVPNVcaAenhGXFGzTFKhWLdFPl2QLD9q%2BMNCFvL8GOqUBYBGKb8JSyfBkP61%2BHFftcX5zRXRycaSWX%2BkwNQAoUGsDWUAc25JXOpBhUlsQ%2BcYMC4KDLUB63JwFXO5%2F8PD9nrskzFI1oCHsujK4hhR2XqylVLiQcmO1Z9kCYtycwccOkYCo0OpgFAVCS0c%2FbN8GNbvamNVY8cA2d9VVheBN5vQa%2BcgrFTKN1qATpzIwQ%2Bk5bGXmWXk%2BmdbG97po%2BxhNK%2B382QCf&X-Amz-Signature=c3c6e140ce14e9ff5fec7aa7dc9c8c5606a39e0458f6ba4c299fee52d47e4ff8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XQIYHQ3%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BUUPFsUXpLk%2BeP73VR99B1abXx2aShSlowPjeJ9kWAAiEA%2FZkT7wGG4jiQHD7GSLfyOFN%2F%2BfXj1z6uEU0GMBrT4FMqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJzQtaYe3%2FBxmTb1CrcA9lrXA7yrI%2Fgr6Hj4ycVMjW7efJ7IGHQYnIgyBhNZTM%2Bzc385tkTFkaeHEeug1odWRk2bC%2F6rnWETXBCZKJ35%2FQDIjIVSeWjI4SvkAuiixe7xBTsbUbEQGiETFSVObkZgD%2B51KZSqIQZo7qF8dxilFMQ1p4nM5B2Y9cNuHgND7pQjJjco8xwdsC0S%2FtonoZbfzRGnZUUfohFfKfIPTBdIX0oK%2BCTxRQNJjStTqqxcf3XdmVrtmlEtN67BnpO2tZibxGSRbAyuaBo8y%2Bn8sLkVAMryS1BaMwsZ8gL7mSMPmTpYc1MsWOsYOz3AME95OtLcEnCqvQ4C7vIlYedx36j0CGABRbKInE1Qbtk5%2FNY1XjHcT1az0dj2R72jSxt7ZGE5JYdRRav7pVlJuWzs5J1s50RRCZWGf92dpiDa%2Bzq7PwYdXjbmgKWr1TSe50U9HHKaRLjsec0uU3cat68l8KR7uPgCFrWUxoXwqSdvF9tgwN4jUTcBr2Y1CS%2B4E%2BVeqkaZ0GawQflEzd4j7haaSffyTC%2BsH6g1Y48jgJjxX5DnD42GZCM0xxrJaPCQ4Ds3UinZ%2FmtvDJmFePDTLYCF6aC5RYKkLweVPNVcaAenhGXFGzTFKhWLdFPl2QLD9q%2BMNCFvL8GOqUBYBGKb8JSyfBkP61%2BHFftcX5zRXRycaSWX%2BkwNQAoUGsDWUAc25JXOpBhUlsQ%2BcYMC4KDLUB63JwFXO5%2F8PD9nrskzFI1oCHsujK4hhR2XqylVLiQcmO1Z9kCYtycwccOkYCo0OpgFAVCS0c%2FbN8GNbvamNVY8cA2d9VVheBN5vQa%2BcgrFTKN1qATpzIwQ%2Bk5bGXmWXk%2BmdbG97po%2BxhNK%2B382QCf&X-Amz-Signature=00eeddd317fa968a5a94a54842951037b5523a481682d3d257f39e20a43938e1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XQIYHQ3%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BUUPFsUXpLk%2BeP73VR99B1abXx2aShSlowPjeJ9kWAAiEA%2FZkT7wGG4jiQHD7GSLfyOFN%2F%2BfXj1z6uEU0GMBrT4FMqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJzQtaYe3%2FBxmTb1CrcA9lrXA7yrI%2Fgr6Hj4ycVMjW7efJ7IGHQYnIgyBhNZTM%2Bzc385tkTFkaeHEeug1odWRk2bC%2F6rnWETXBCZKJ35%2FQDIjIVSeWjI4SvkAuiixe7xBTsbUbEQGiETFSVObkZgD%2B51KZSqIQZo7qF8dxilFMQ1p4nM5B2Y9cNuHgND7pQjJjco8xwdsC0S%2FtonoZbfzRGnZUUfohFfKfIPTBdIX0oK%2BCTxRQNJjStTqqxcf3XdmVrtmlEtN67BnpO2tZibxGSRbAyuaBo8y%2Bn8sLkVAMryS1BaMwsZ8gL7mSMPmTpYc1MsWOsYOz3AME95OtLcEnCqvQ4C7vIlYedx36j0CGABRbKInE1Qbtk5%2FNY1XjHcT1az0dj2R72jSxt7ZGE5JYdRRav7pVlJuWzs5J1s50RRCZWGf92dpiDa%2Bzq7PwYdXjbmgKWr1TSe50U9HHKaRLjsec0uU3cat68l8KR7uPgCFrWUxoXwqSdvF9tgwN4jUTcBr2Y1CS%2B4E%2BVeqkaZ0GawQflEzd4j7haaSffyTC%2BsH6g1Y48jgJjxX5DnD42GZCM0xxrJaPCQ4Ds3UinZ%2FmtvDJmFePDTLYCF6aC5RYKkLweVPNVcaAenhGXFGzTFKhWLdFPl2QLD9q%2BMNCFvL8GOqUBYBGKb8JSyfBkP61%2BHFftcX5zRXRycaSWX%2BkwNQAoUGsDWUAc25JXOpBhUlsQ%2BcYMC4KDLUB63JwFXO5%2F8PD9nrskzFI1oCHsujK4hhR2XqylVLiQcmO1Z9kCYtycwccOkYCo0OpgFAVCS0c%2FbN8GNbvamNVY8cA2d9VVheBN5vQa%2BcgrFTKN1qATpzIwQ%2Bk5bGXmWXk%2BmdbG97po%2BxhNK%2B382QCf&X-Amz-Signature=5fca965e4f5ff12f54f77b45bc135e4bfcd945dc6caefce0b3721999884b57e0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XQIYHQ3%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BUUPFsUXpLk%2BeP73VR99B1abXx2aShSlowPjeJ9kWAAiEA%2FZkT7wGG4jiQHD7GSLfyOFN%2F%2BfXj1z6uEU0GMBrT4FMqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJzQtaYe3%2FBxmTb1CrcA9lrXA7yrI%2Fgr6Hj4ycVMjW7efJ7IGHQYnIgyBhNZTM%2Bzc385tkTFkaeHEeug1odWRk2bC%2F6rnWETXBCZKJ35%2FQDIjIVSeWjI4SvkAuiixe7xBTsbUbEQGiETFSVObkZgD%2B51KZSqIQZo7qF8dxilFMQ1p4nM5B2Y9cNuHgND7pQjJjco8xwdsC0S%2FtonoZbfzRGnZUUfohFfKfIPTBdIX0oK%2BCTxRQNJjStTqqxcf3XdmVrtmlEtN67BnpO2tZibxGSRbAyuaBo8y%2Bn8sLkVAMryS1BaMwsZ8gL7mSMPmTpYc1MsWOsYOz3AME95OtLcEnCqvQ4C7vIlYedx36j0CGABRbKInE1Qbtk5%2FNY1XjHcT1az0dj2R72jSxt7ZGE5JYdRRav7pVlJuWzs5J1s50RRCZWGf92dpiDa%2Bzq7PwYdXjbmgKWr1TSe50U9HHKaRLjsec0uU3cat68l8KR7uPgCFrWUxoXwqSdvF9tgwN4jUTcBr2Y1CS%2B4E%2BVeqkaZ0GawQflEzd4j7haaSffyTC%2BsH6g1Y48jgJjxX5DnD42GZCM0xxrJaPCQ4Ds3UinZ%2FmtvDJmFePDTLYCF6aC5RYKkLweVPNVcaAenhGXFGzTFKhWLdFPl2QLD9q%2BMNCFvL8GOqUBYBGKb8JSyfBkP61%2BHFftcX5zRXRycaSWX%2BkwNQAoUGsDWUAc25JXOpBhUlsQ%2BcYMC4KDLUB63JwFXO5%2F8PD9nrskzFI1oCHsujK4hhR2XqylVLiQcmO1Z9kCYtycwccOkYCo0OpgFAVCS0c%2FbN8GNbvamNVY8cA2d9VVheBN5vQa%2BcgrFTKN1qATpzIwQ%2Bk5bGXmWXk%2BmdbG97po%2BxhNK%2B382QCf&X-Amz-Signature=0b64a5404d8acd79e7c8f841f01131aa4269feb8f0222b0b05ab6487a8ae12a6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XQIYHQ3%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BUUPFsUXpLk%2BeP73VR99B1abXx2aShSlowPjeJ9kWAAiEA%2FZkT7wGG4jiQHD7GSLfyOFN%2F%2BfXj1z6uEU0GMBrT4FMqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJzQtaYe3%2FBxmTb1CrcA9lrXA7yrI%2Fgr6Hj4ycVMjW7efJ7IGHQYnIgyBhNZTM%2Bzc385tkTFkaeHEeug1odWRk2bC%2F6rnWETXBCZKJ35%2FQDIjIVSeWjI4SvkAuiixe7xBTsbUbEQGiETFSVObkZgD%2B51KZSqIQZo7qF8dxilFMQ1p4nM5B2Y9cNuHgND7pQjJjco8xwdsC0S%2FtonoZbfzRGnZUUfohFfKfIPTBdIX0oK%2BCTxRQNJjStTqqxcf3XdmVrtmlEtN67BnpO2tZibxGSRbAyuaBo8y%2Bn8sLkVAMryS1BaMwsZ8gL7mSMPmTpYc1MsWOsYOz3AME95OtLcEnCqvQ4C7vIlYedx36j0CGABRbKInE1Qbtk5%2FNY1XjHcT1az0dj2R72jSxt7ZGE5JYdRRav7pVlJuWzs5J1s50RRCZWGf92dpiDa%2Bzq7PwYdXjbmgKWr1TSe50U9HHKaRLjsec0uU3cat68l8KR7uPgCFrWUxoXwqSdvF9tgwN4jUTcBr2Y1CS%2B4E%2BVeqkaZ0GawQflEzd4j7haaSffyTC%2BsH6g1Y48jgJjxX5DnD42GZCM0xxrJaPCQ4Ds3UinZ%2FmtvDJmFePDTLYCF6aC5RYKkLweVPNVcaAenhGXFGzTFKhWLdFPl2QLD9q%2BMNCFvL8GOqUBYBGKb8JSyfBkP61%2BHFftcX5zRXRycaSWX%2BkwNQAoUGsDWUAc25JXOpBhUlsQ%2BcYMC4KDLUB63JwFXO5%2F8PD9nrskzFI1oCHsujK4hhR2XqylVLiQcmO1Z9kCYtycwccOkYCo0OpgFAVCS0c%2FbN8GNbvamNVY8cA2d9VVheBN5vQa%2BcgrFTKN1qATpzIwQ%2Bk5bGXmWXk%2BmdbG97po%2BxhNK%2B382QCf&X-Amz-Signature=25c548cbf4b0633cc0fd136671a81871f8f29ee6f01ead7658ebcffde677779c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XQIYHQ3%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BUUPFsUXpLk%2BeP73VR99B1abXx2aShSlowPjeJ9kWAAiEA%2FZkT7wGG4jiQHD7GSLfyOFN%2F%2BfXj1z6uEU0GMBrT4FMqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJzQtaYe3%2FBxmTb1CrcA9lrXA7yrI%2Fgr6Hj4ycVMjW7efJ7IGHQYnIgyBhNZTM%2Bzc385tkTFkaeHEeug1odWRk2bC%2F6rnWETXBCZKJ35%2FQDIjIVSeWjI4SvkAuiixe7xBTsbUbEQGiETFSVObkZgD%2B51KZSqIQZo7qF8dxilFMQ1p4nM5B2Y9cNuHgND7pQjJjco8xwdsC0S%2FtonoZbfzRGnZUUfohFfKfIPTBdIX0oK%2BCTxRQNJjStTqqxcf3XdmVrtmlEtN67BnpO2tZibxGSRbAyuaBo8y%2Bn8sLkVAMryS1BaMwsZ8gL7mSMPmTpYc1MsWOsYOz3AME95OtLcEnCqvQ4C7vIlYedx36j0CGABRbKInE1Qbtk5%2FNY1XjHcT1az0dj2R72jSxt7ZGE5JYdRRav7pVlJuWzs5J1s50RRCZWGf92dpiDa%2Bzq7PwYdXjbmgKWr1TSe50U9HHKaRLjsec0uU3cat68l8KR7uPgCFrWUxoXwqSdvF9tgwN4jUTcBr2Y1CS%2B4E%2BVeqkaZ0GawQflEzd4j7haaSffyTC%2BsH6g1Y48jgJjxX5DnD42GZCM0xxrJaPCQ4Ds3UinZ%2FmtvDJmFePDTLYCF6aC5RYKkLweVPNVcaAenhGXFGzTFKhWLdFPl2QLD9q%2BMNCFvL8GOqUBYBGKb8JSyfBkP61%2BHFftcX5zRXRycaSWX%2BkwNQAoUGsDWUAc25JXOpBhUlsQ%2BcYMC4KDLUB63JwFXO5%2F8PD9nrskzFI1oCHsujK4hhR2XqylVLiQcmO1Z9kCYtycwccOkYCo0OpgFAVCS0c%2FbN8GNbvamNVY8cA2d9VVheBN5vQa%2BcgrFTKN1qATpzIwQ%2Bk5bGXmWXk%2BmdbG97po%2BxhNK%2B382QCf&X-Amz-Signature=a797723850fc2c967b74b2231764f0116ebea0e405bc0153233268486786259b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XQIYHQ3%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BUUPFsUXpLk%2BeP73VR99B1abXx2aShSlowPjeJ9kWAAiEA%2FZkT7wGG4jiQHD7GSLfyOFN%2F%2BfXj1z6uEU0GMBrT4FMqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJzQtaYe3%2FBxmTb1CrcA9lrXA7yrI%2Fgr6Hj4ycVMjW7efJ7IGHQYnIgyBhNZTM%2Bzc385tkTFkaeHEeug1odWRk2bC%2F6rnWETXBCZKJ35%2FQDIjIVSeWjI4SvkAuiixe7xBTsbUbEQGiETFSVObkZgD%2B51KZSqIQZo7qF8dxilFMQ1p4nM5B2Y9cNuHgND7pQjJjco8xwdsC0S%2FtonoZbfzRGnZUUfohFfKfIPTBdIX0oK%2BCTxRQNJjStTqqxcf3XdmVrtmlEtN67BnpO2tZibxGSRbAyuaBo8y%2Bn8sLkVAMryS1BaMwsZ8gL7mSMPmTpYc1MsWOsYOz3AME95OtLcEnCqvQ4C7vIlYedx36j0CGABRbKInE1Qbtk5%2FNY1XjHcT1az0dj2R72jSxt7ZGE5JYdRRav7pVlJuWzs5J1s50RRCZWGf92dpiDa%2Bzq7PwYdXjbmgKWr1TSe50U9HHKaRLjsec0uU3cat68l8KR7uPgCFrWUxoXwqSdvF9tgwN4jUTcBr2Y1CS%2B4E%2BVeqkaZ0GawQflEzd4j7haaSffyTC%2BsH6g1Y48jgJjxX5DnD42GZCM0xxrJaPCQ4Ds3UinZ%2FmtvDJmFePDTLYCF6aC5RYKkLweVPNVcaAenhGXFGzTFKhWLdFPl2QLD9q%2BMNCFvL8GOqUBYBGKb8JSyfBkP61%2BHFftcX5zRXRycaSWX%2BkwNQAoUGsDWUAc25JXOpBhUlsQ%2BcYMC4KDLUB63JwFXO5%2F8PD9nrskzFI1oCHsujK4hhR2XqylVLiQcmO1Z9kCYtycwccOkYCo0OpgFAVCS0c%2FbN8GNbvamNVY8cA2d9VVheBN5vQa%2BcgrFTKN1qATpzIwQ%2Bk5bGXmWXk%2BmdbG97po%2BxhNK%2B382QCf&X-Amz-Signature=d233dcc60200a86d2e992d3de1b8552df9c06685e300359b62ccc18fa312aba0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
