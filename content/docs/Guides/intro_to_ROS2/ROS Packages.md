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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GH4V3C4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa39MlLyJORPLmOv4Ao0bE6V9FCrg1EtZ7WoGZ3wYCVAIgTwA0LIketem2y4uzLREAejRNkkZSd1BImb52Kh1pdIkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEKsi4SwYJ60EFstJCrcAz980%2Fq0S0cxk4nQgxykw7cen3GyL7P2YIF27Yxy8ppRa5FDTz8JXKb3Y9jH3aGewqFmJx9yt0wLKXagUYO0IhN9P8wJbzhDuavecpULGaqehKFn6c%2BNQPTnpjj4%2FgYgrdPqHkTZnHPunnQ0djDuQQ%2FZrdODbfq4T5JhVLb75Uy8mO0WsrUg%2BT1UvCKReMUPAm2ghiBhfO6k%2FLHaGdUgMUemsGNatKlZiWhUbmye9c9EuGSFqLDFzEeLQ8eymE8nc0LVw%2F9NnDR8fD2lYsmU6YNxycOPciyCxuPOUpqk%2BcdOTvYHApekLgp9Bhlo49NpKqd33T4gbiEkRTiqrRWhSf4aJSoCMX6yKo3FdnqzA6FLdPadkDUBvQCdNIDYNn2gjSn3GxVka%2F5k%2F7IAApiFID74ZJ0kwNRgScVupV15UOhjrm0aQSvaKArzwvyF4R3y7goHU6jjDHwj2mg4TMDpTEQY1KSyRi98FL2n42Fk5n9seRMdbysad4BTDgjw60QnqeS7iQNFW7w0z1iT7YRTvYknJa4%2BSEa6MiDMk6EK7uLNV9Xoe0Z%2BnodoxFN5bty5j7NJVSQFHIIphnfxkRg9g8EJaxDg16hWS1S1SUDTBDoGMQ3a5A8L%2B5nemHe9MKGa7cAGOqUBzhjh9xTdHmmiNeC3kBPRow5ADUl4yUIe3xOuGZna0NlzVVeaAP64Ly1KUWzXHo3pfl%2B7lBvnsqFr92G8ep22l86Cw6vkz7z4HzCT%2F0c20ECz%2BzzqJ3Lw6NPnm2RTdTFzbT380wdihbgirr6cOftiApI05lMzYhZHOTG5XePR3b7IlVeCRvr1yC%2F%2BFrau%2F5La607q%2BmdzGSBzBadvzM3u41xJvIuf&X-Amz-Signature=85a7bb06a61ef34f3af687c7d07df5507bf035441b795252e8dd8dc93ce421b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GH4V3C4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa39MlLyJORPLmOv4Ao0bE6V9FCrg1EtZ7WoGZ3wYCVAIgTwA0LIketem2y4uzLREAejRNkkZSd1BImb52Kh1pdIkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEKsi4SwYJ60EFstJCrcAz980%2Fq0S0cxk4nQgxykw7cen3GyL7P2YIF27Yxy8ppRa5FDTz8JXKb3Y9jH3aGewqFmJx9yt0wLKXagUYO0IhN9P8wJbzhDuavecpULGaqehKFn6c%2BNQPTnpjj4%2FgYgrdPqHkTZnHPunnQ0djDuQQ%2FZrdODbfq4T5JhVLb75Uy8mO0WsrUg%2BT1UvCKReMUPAm2ghiBhfO6k%2FLHaGdUgMUemsGNatKlZiWhUbmye9c9EuGSFqLDFzEeLQ8eymE8nc0LVw%2F9NnDR8fD2lYsmU6YNxycOPciyCxuPOUpqk%2BcdOTvYHApekLgp9Bhlo49NpKqd33T4gbiEkRTiqrRWhSf4aJSoCMX6yKo3FdnqzA6FLdPadkDUBvQCdNIDYNn2gjSn3GxVka%2F5k%2F7IAApiFID74ZJ0kwNRgScVupV15UOhjrm0aQSvaKArzwvyF4R3y7goHU6jjDHwj2mg4TMDpTEQY1KSyRi98FL2n42Fk5n9seRMdbysad4BTDgjw60QnqeS7iQNFW7w0z1iT7YRTvYknJa4%2BSEa6MiDMk6EK7uLNV9Xoe0Z%2BnodoxFN5bty5j7NJVSQFHIIphnfxkRg9g8EJaxDg16hWS1S1SUDTBDoGMQ3a5A8L%2B5nemHe9MKGa7cAGOqUBzhjh9xTdHmmiNeC3kBPRow5ADUl4yUIe3xOuGZna0NlzVVeaAP64Ly1KUWzXHo3pfl%2B7lBvnsqFr92G8ep22l86Cw6vkz7z4HzCT%2F0c20ECz%2BzzqJ3Lw6NPnm2RTdTFzbT380wdihbgirr6cOftiApI05lMzYhZHOTG5XePR3b7IlVeCRvr1yC%2F%2BFrau%2F5La607q%2BmdzGSBzBadvzM3u41xJvIuf&X-Amz-Signature=53f07516dda7bfdd3ed74dfc41cd96215a649067a838bccf0202944c84739be2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GH4V3C4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa39MlLyJORPLmOv4Ao0bE6V9FCrg1EtZ7WoGZ3wYCVAIgTwA0LIketem2y4uzLREAejRNkkZSd1BImb52Kh1pdIkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEKsi4SwYJ60EFstJCrcAz980%2Fq0S0cxk4nQgxykw7cen3GyL7P2YIF27Yxy8ppRa5FDTz8JXKb3Y9jH3aGewqFmJx9yt0wLKXagUYO0IhN9P8wJbzhDuavecpULGaqehKFn6c%2BNQPTnpjj4%2FgYgrdPqHkTZnHPunnQ0djDuQQ%2FZrdODbfq4T5JhVLb75Uy8mO0WsrUg%2BT1UvCKReMUPAm2ghiBhfO6k%2FLHaGdUgMUemsGNatKlZiWhUbmye9c9EuGSFqLDFzEeLQ8eymE8nc0LVw%2F9NnDR8fD2lYsmU6YNxycOPciyCxuPOUpqk%2BcdOTvYHApekLgp9Bhlo49NpKqd33T4gbiEkRTiqrRWhSf4aJSoCMX6yKo3FdnqzA6FLdPadkDUBvQCdNIDYNn2gjSn3GxVka%2F5k%2F7IAApiFID74ZJ0kwNRgScVupV15UOhjrm0aQSvaKArzwvyF4R3y7goHU6jjDHwj2mg4TMDpTEQY1KSyRi98FL2n42Fk5n9seRMdbysad4BTDgjw60QnqeS7iQNFW7w0z1iT7YRTvYknJa4%2BSEa6MiDMk6EK7uLNV9Xoe0Z%2BnodoxFN5bty5j7NJVSQFHIIphnfxkRg9g8EJaxDg16hWS1S1SUDTBDoGMQ3a5A8L%2B5nemHe9MKGa7cAGOqUBzhjh9xTdHmmiNeC3kBPRow5ADUl4yUIe3xOuGZna0NlzVVeaAP64Ly1KUWzXHo3pfl%2B7lBvnsqFr92G8ep22l86Cw6vkz7z4HzCT%2F0c20ECz%2BzzqJ3Lw6NPnm2RTdTFzbT380wdihbgirr6cOftiApI05lMzYhZHOTG5XePR3b7IlVeCRvr1yC%2F%2BFrau%2F5La607q%2BmdzGSBzBadvzM3u41xJvIuf&X-Amz-Signature=7aee233c34038dfc862f304182a13bd30393b6b45ee2b7560acaf6172bf87821&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GH4V3C4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa39MlLyJORPLmOv4Ao0bE6V9FCrg1EtZ7WoGZ3wYCVAIgTwA0LIketem2y4uzLREAejRNkkZSd1BImb52Kh1pdIkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEKsi4SwYJ60EFstJCrcAz980%2Fq0S0cxk4nQgxykw7cen3GyL7P2YIF27Yxy8ppRa5FDTz8JXKb3Y9jH3aGewqFmJx9yt0wLKXagUYO0IhN9P8wJbzhDuavecpULGaqehKFn6c%2BNQPTnpjj4%2FgYgrdPqHkTZnHPunnQ0djDuQQ%2FZrdODbfq4T5JhVLb75Uy8mO0WsrUg%2BT1UvCKReMUPAm2ghiBhfO6k%2FLHaGdUgMUemsGNatKlZiWhUbmye9c9EuGSFqLDFzEeLQ8eymE8nc0LVw%2F9NnDR8fD2lYsmU6YNxycOPciyCxuPOUpqk%2BcdOTvYHApekLgp9Bhlo49NpKqd33T4gbiEkRTiqrRWhSf4aJSoCMX6yKo3FdnqzA6FLdPadkDUBvQCdNIDYNn2gjSn3GxVka%2F5k%2F7IAApiFID74ZJ0kwNRgScVupV15UOhjrm0aQSvaKArzwvyF4R3y7goHU6jjDHwj2mg4TMDpTEQY1KSyRi98FL2n42Fk5n9seRMdbysad4BTDgjw60QnqeS7iQNFW7w0z1iT7YRTvYknJa4%2BSEa6MiDMk6EK7uLNV9Xoe0Z%2BnodoxFN5bty5j7NJVSQFHIIphnfxkRg9g8EJaxDg16hWS1S1SUDTBDoGMQ3a5A8L%2B5nemHe9MKGa7cAGOqUBzhjh9xTdHmmiNeC3kBPRow5ADUl4yUIe3xOuGZna0NlzVVeaAP64Ly1KUWzXHo3pfl%2B7lBvnsqFr92G8ep22l86Cw6vkz7z4HzCT%2F0c20ECz%2BzzqJ3Lw6NPnm2RTdTFzbT380wdihbgirr6cOftiApI05lMzYhZHOTG5XePR3b7IlVeCRvr1yC%2F%2BFrau%2F5La607q%2BmdzGSBzBadvzM3u41xJvIuf&X-Amz-Signature=2ab7a53213f2e6f95a2f5e6d6be97eb7f4480ebb43df07cd7b92cc91976492b1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GH4V3C4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa39MlLyJORPLmOv4Ao0bE6V9FCrg1EtZ7WoGZ3wYCVAIgTwA0LIketem2y4uzLREAejRNkkZSd1BImb52Kh1pdIkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEKsi4SwYJ60EFstJCrcAz980%2Fq0S0cxk4nQgxykw7cen3GyL7P2YIF27Yxy8ppRa5FDTz8JXKb3Y9jH3aGewqFmJx9yt0wLKXagUYO0IhN9P8wJbzhDuavecpULGaqehKFn6c%2BNQPTnpjj4%2FgYgrdPqHkTZnHPunnQ0djDuQQ%2FZrdODbfq4T5JhVLb75Uy8mO0WsrUg%2BT1UvCKReMUPAm2ghiBhfO6k%2FLHaGdUgMUemsGNatKlZiWhUbmye9c9EuGSFqLDFzEeLQ8eymE8nc0LVw%2F9NnDR8fD2lYsmU6YNxycOPciyCxuPOUpqk%2BcdOTvYHApekLgp9Bhlo49NpKqd33T4gbiEkRTiqrRWhSf4aJSoCMX6yKo3FdnqzA6FLdPadkDUBvQCdNIDYNn2gjSn3GxVka%2F5k%2F7IAApiFID74ZJ0kwNRgScVupV15UOhjrm0aQSvaKArzwvyF4R3y7goHU6jjDHwj2mg4TMDpTEQY1KSyRi98FL2n42Fk5n9seRMdbysad4BTDgjw60QnqeS7iQNFW7w0z1iT7YRTvYknJa4%2BSEa6MiDMk6EK7uLNV9Xoe0Z%2BnodoxFN5bty5j7NJVSQFHIIphnfxkRg9g8EJaxDg16hWS1S1SUDTBDoGMQ3a5A8L%2B5nemHe9MKGa7cAGOqUBzhjh9xTdHmmiNeC3kBPRow5ADUl4yUIe3xOuGZna0NlzVVeaAP64Ly1KUWzXHo3pfl%2B7lBvnsqFr92G8ep22l86Cw6vkz7z4HzCT%2F0c20ECz%2BzzqJ3Lw6NPnm2RTdTFzbT380wdihbgirr6cOftiApI05lMzYhZHOTG5XePR3b7IlVeCRvr1yC%2F%2BFrau%2F5La607q%2BmdzGSBzBadvzM3u41xJvIuf&X-Amz-Signature=00a9b168bf16f2c635d6240cf616a22b1cbcd51a7841e5e25ef70d0b172178bc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GH4V3C4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa39MlLyJORPLmOv4Ao0bE6V9FCrg1EtZ7WoGZ3wYCVAIgTwA0LIketem2y4uzLREAejRNkkZSd1BImb52Kh1pdIkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEKsi4SwYJ60EFstJCrcAz980%2Fq0S0cxk4nQgxykw7cen3GyL7P2YIF27Yxy8ppRa5FDTz8JXKb3Y9jH3aGewqFmJx9yt0wLKXagUYO0IhN9P8wJbzhDuavecpULGaqehKFn6c%2BNQPTnpjj4%2FgYgrdPqHkTZnHPunnQ0djDuQQ%2FZrdODbfq4T5JhVLb75Uy8mO0WsrUg%2BT1UvCKReMUPAm2ghiBhfO6k%2FLHaGdUgMUemsGNatKlZiWhUbmye9c9EuGSFqLDFzEeLQ8eymE8nc0LVw%2F9NnDR8fD2lYsmU6YNxycOPciyCxuPOUpqk%2BcdOTvYHApekLgp9Bhlo49NpKqd33T4gbiEkRTiqrRWhSf4aJSoCMX6yKo3FdnqzA6FLdPadkDUBvQCdNIDYNn2gjSn3GxVka%2F5k%2F7IAApiFID74ZJ0kwNRgScVupV15UOhjrm0aQSvaKArzwvyF4R3y7goHU6jjDHwj2mg4TMDpTEQY1KSyRi98FL2n42Fk5n9seRMdbysad4BTDgjw60QnqeS7iQNFW7w0z1iT7YRTvYknJa4%2BSEa6MiDMk6EK7uLNV9Xoe0Z%2BnodoxFN5bty5j7NJVSQFHIIphnfxkRg9g8EJaxDg16hWS1S1SUDTBDoGMQ3a5A8L%2B5nemHe9MKGa7cAGOqUBzhjh9xTdHmmiNeC3kBPRow5ADUl4yUIe3xOuGZna0NlzVVeaAP64Ly1KUWzXHo3pfl%2B7lBvnsqFr92G8ep22l86Cw6vkz7z4HzCT%2F0c20ECz%2BzzqJ3Lw6NPnm2RTdTFzbT380wdihbgirr6cOftiApI05lMzYhZHOTG5XePR3b7IlVeCRvr1yC%2F%2BFrau%2F5La607q%2BmdzGSBzBadvzM3u41xJvIuf&X-Amz-Signature=0cb9a65ad6ebfa7a32256348d71c76f83ac6ee2b9ba19d2fd0c7fe93fa07dba4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GH4V3C4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa39MlLyJORPLmOv4Ao0bE6V9FCrg1EtZ7WoGZ3wYCVAIgTwA0LIketem2y4uzLREAejRNkkZSd1BImb52Kh1pdIkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEKsi4SwYJ60EFstJCrcAz980%2Fq0S0cxk4nQgxykw7cen3GyL7P2YIF27Yxy8ppRa5FDTz8JXKb3Y9jH3aGewqFmJx9yt0wLKXagUYO0IhN9P8wJbzhDuavecpULGaqehKFn6c%2BNQPTnpjj4%2FgYgrdPqHkTZnHPunnQ0djDuQQ%2FZrdODbfq4T5JhVLb75Uy8mO0WsrUg%2BT1UvCKReMUPAm2ghiBhfO6k%2FLHaGdUgMUemsGNatKlZiWhUbmye9c9EuGSFqLDFzEeLQ8eymE8nc0LVw%2F9NnDR8fD2lYsmU6YNxycOPciyCxuPOUpqk%2BcdOTvYHApekLgp9Bhlo49NpKqd33T4gbiEkRTiqrRWhSf4aJSoCMX6yKo3FdnqzA6FLdPadkDUBvQCdNIDYNn2gjSn3GxVka%2F5k%2F7IAApiFID74ZJ0kwNRgScVupV15UOhjrm0aQSvaKArzwvyF4R3y7goHU6jjDHwj2mg4TMDpTEQY1KSyRi98FL2n42Fk5n9seRMdbysad4BTDgjw60QnqeS7iQNFW7w0z1iT7YRTvYknJa4%2BSEa6MiDMk6EK7uLNV9Xoe0Z%2BnodoxFN5bty5j7NJVSQFHIIphnfxkRg9g8EJaxDg16hWS1S1SUDTBDoGMQ3a5A8L%2B5nemHe9MKGa7cAGOqUBzhjh9xTdHmmiNeC3kBPRow5ADUl4yUIe3xOuGZna0NlzVVeaAP64Ly1KUWzXHo3pfl%2B7lBvnsqFr92G8ep22l86Cw6vkz7z4HzCT%2F0c20ECz%2BzzqJ3Lw6NPnm2RTdTFzbT380wdihbgirr6cOftiApI05lMzYhZHOTG5XePR3b7IlVeCRvr1yC%2F%2BFrau%2F5La607q%2BmdzGSBzBadvzM3u41xJvIuf&X-Amz-Signature=16508a3bf01ffa6f0aa10bfd64174dd5bdfd8e40fdb191b9ff7f7e7ef21249d7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
