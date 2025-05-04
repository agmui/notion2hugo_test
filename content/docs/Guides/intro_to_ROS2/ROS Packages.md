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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO4FJBTW%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T150733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEka2ireMMTkM8%2Fu50baAnxfc4SXY4cUcacKdgTFbpfhAiEAgZ%2FFi%2BxaiHfxo9nyq00kpn5gvNMNdn46WEooXTjkGwwq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDIVSSBOSLuTguPbkyCrcA5bcYnRIxn03mlLBz4c1g3GQL5QDEGU%2BGzfV8HlTJDwHXv9NKN5JJKtU5qpr3euxkuroI5tzh5TUabklVIw3TMiisbtqNDO9AwpI525Zyd65D2Nr3N%2FHbdgTUTPzp%2BTmlZhr61u9YrsPWAT%2FAmwKZZr%2FDoTFyrcUn1sTQnpYWh%2FLzanBHY%2FlmEBs8L8W%2FPRCqo%2BPemBOsEa8GNcR5fF29g4aWh6EjzdAvt6b18ezg5y%2Flse1NqCWcQlGROiQfqiyuC0hvX6tWOGVYa8oH2qX6CVmzlaHne7%2BKadsJoEcHAtIF7V6vR%2BxUFzBUJKMEUT8LRpydojvh1sGYKgoByoRy3qc4iE1pTVEOHtDvCAcxsasTYR3nCeBXPJ5%2FAQdQkQRO37nrZ353j3%2FywLgwas7AJOuMJp6p5AXEzCS9j4iL3keqxQHwp55Hr1zlsNCj3tC%2FYB1njj8xq1npldQznvk%2F8GIQ8OYpIGJqunaLrbIc6d845%2Bs7PERSBMbH4U%2FykJ%2B2dg0bB3He4hYIR2I9UM9J7Ra7MdEnN4qzlDP%2FwG06Y6EJlSpkmZ6A9zbT9tRFt%2FDewXMfruxbs338o2YlLbIzXYn2clBdUusZIgqVWgz4uLgpw9FD%2F3vhTXu5XzkMKKG3cAGOqUBwGSBhoofv30DINDNfEBNKpVSUZJXOSdcnu0Ptw66N1ebYMdqPiWe20%2FCHT9zmCjO2AVVKdBOGcChi9RGlYkbyWiM9kTCNzSWt%2B4bBmmRUlsH395HzYTO%2FJ1XFSsRPSzl%2B4wLQS874GBa1sR316tp2F6%2FiW9rdjrwFygxPlr0mAcMk3EyZAHjUyI7uK6tWrDtsNJJoU1zFw12O2E6cDf7vlZgkHLg&X-Amz-Signature=b96b153a4b50f713c636a1ebd51b28ef0281d6cd24d23443c93460a2e4bac18a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO4FJBTW%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEka2ireMMTkM8%2Fu50baAnxfc4SXY4cUcacKdgTFbpfhAiEAgZ%2FFi%2BxaiHfxo9nyq00kpn5gvNMNdn46WEooXTjkGwwq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDIVSSBOSLuTguPbkyCrcA5bcYnRIxn03mlLBz4c1g3GQL5QDEGU%2BGzfV8HlTJDwHXv9NKN5JJKtU5qpr3euxkuroI5tzh5TUabklVIw3TMiisbtqNDO9AwpI525Zyd65D2Nr3N%2FHbdgTUTPzp%2BTmlZhr61u9YrsPWAT%2FAmwKZZr%2FDoTFyrcUn1sTQnpYWh%2FLzanBHY%2FlmEBs8L8W%2FPRCqo%2BPemBOsEa8GNcR5fF29g4aWh6EjzdAvt6b18ezg5y%2Flse1NqCWcQlGROiQfqiyuC0hvX6tWOGVYa8oH2qX6CVmzlaHne7%2BKadsJoEcHAtIF7V6vR%2BxUFzBUJKMEUT8LRpydojvh1sGYKgoByoRy3qc4iE1pTVEOHtDvCAcxsasTYR3nCeBXPJ5%2FAQdQkQRO37nrZ353j3%2FywLgwas7AJOuMJp6p5AXEzCS9j4iL3keqxQHwp55Hr1zlsNCj3tC%2FYB1njj8xq1npldQznvk%2F8GIQ8OYpIGJqunaLrbIc6d845%2Bs7PERSBMbH4U%2FykJ%2B2dg0bB3He4hYIR2I9UM9J7Ra7MdEnN4qzlDP%2FwG06Y6EJlSpkmZ6A9zbT9tRFt%2FDewXMfruxbs338o2YlLbIzXYn2clBdUusZIgqVWgz4uLgpw9FD%2F3vhTXu5XzkMKKG3cAGOqUBwGSBhoofv30DINDNfEBNKpVSUZJXOSdcnu0Ptw66N1ebYMdqPiWe20%2FCHT9zmCjO2AVVKdBOGcChi9RGlYkbyWiM9kTCNzSWt%2B4bBmmRUlsH395HzYTO%2FJ1XFSsRPSzl%2B4wLQS874GBa1sR316tp2F6%2FiW9rdjrwFygxPlr0mAcMk3EyZAHjUyI7uK6tWrDtsNJJoU1zFw12O2E6cDf7vlZgkHLg&X-Amz-Signature=d80ff68abf8d5083504ba5026d20e5f107f89450a7a2f28c413387f758744b34&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO4FJBTW%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEka2ireMMTkM8%2Fu50baAnxfc4SXY4cUcacKdgTFbpfhAiEAgZ%2FFi%2BxaiHfxo9nyq00kpn5gvNMNdn46WEooXTjkGwwq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDIVSSBOSLuTguPbkyCrcA5bcYnRIxn03mlLBz4c1g3GQL5QDEGU%2BGzfV8HlTJDwHXv9NKN5JJKtU5qpr3euxkuroI5tzh5TUabklVIw3TMiisbtqNDO9AwpI525Zyd65D2Nr3N%2FHbdgTUTPzp%2BTmlZhr61u9YrsPWAT%2FAmwKZZr%2FDoTFyrcUn1sTQnpYWh%2FLzanBHY%2FlmEBs8L8W%2FPRCqo%2BPemBOsEa8GNcR5fF29g4aWh6EjzdAvt6b18ezg5y%2Flse1NqCWcQlGROiQfqiyuC0hvX6tWOGVYa8oH2qX6CVmzlaHne7%2BKadsJoEcHAtIF7V6vR%2BxUFzBUJKMEUT8LRpydojvh1sGYKgoByoRy3qc4iE1pTVEOHtDvCAcxsasTYR3nCeBXPJ5%2FAQdQkQRO37nrZ353j3%2FywLgwas7AJOuMJp6p5AXEzCS9j4iL3keqxQHwp55Hr1zlsNCj3tC%2FYB1njj8xq1npldQznvk%2F8GIQ8OYpIGJqunaLrbIc6d845%2Bs7PERSBMbH4U%2FykJ%2B2dg0bB3He4hYIR2I9UM9J7Ra7MdEnN4qzlDP%2FwG06Y6EJlSpkmZ6A9zbT9tRFt%2FDewXMfruxbs338o2YlLbIzXYn2clBdUusZIgqVWgz4uLgpw9FD%2F3vhTXu5XzkMKKG3cAGOqUBwGSBhoofv30DINDNfEBNKpVSUZJXOSdcnu0Ptw66N1ebYMdqPiWe20%2FCHT9zmCjO2AVVKdBOGcChi9RGlYkbyWiM9kTCNzSWt%2B4bBmmRUlsH395HzYTO%2FJ1XFSsRPSzl%2B4wLQS874GBa1sR316tp2F6%2FiW9rdjrwFygxPlr0mAcMk3EyZAHjUyI7uK6tWrDtsNJJoU1zFw12O2E6cDf7vlZgkHLg&X-Amz-Signature=70a4ad003877d66e78282f5958f2e422c127f162c11df7ecc552caee6ba2815b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO4FJBTW%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEka2ireMMTkM8%2Fu50baAnxfc4SXY4cUcacKdgTFbpfhAiEAgZ%2FFi%2BxaiHfxo9nyq00kpn5gvNMNdn46WEooXTjkGwwq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDIVSSBOSLuTguPbkyCrcA5bcYnRIxn03mlLBz4c1g3GQL5QDEGU%2BGzfV8HlTJDwHXv9NKN5JJKtU5qpr3euxkuroI5tzh5TUabklVIw3TMiisbtqNDO9AwpI525Zyd65D2Nr3N%2FHbdgTUTPzp%2BTmlZhr61u9YrsPWAT%2FAmwKZZr%2FDoTFyrcUn1sTQnpYWh%2FLzanBHY%2FlmEBs8L8W%2FPRCqo%2BPemBOsEa8GNcR5fF29g4aWh6EjzdAvt6b18ezg5y%2Flse1NqCWcQlGROiQfqiyuC0hvX6tWOGVYa8oH2qX6CVmzlaHne7%2BKadsJoEcHAtIF7V6vR%2BxUFzBUJKMEUT8LRpydojvh1sGYKgoByoRy3qc4iE1pTVEOHtDvCAcxsasTYR3nCeBXPJ5%2FAQdQkQRO37nrZ353j3%2FywLgwas7AJOuMJp6p5AXEzCS9j4iL3keqxQHwp55Hr1zlsNCj3tC%2FYB1njj8xq1npldQznvk%2F8GIQ8OYpIGJqunaLrbIc6d845%2Bs7PERSBMbH4U%2FykJ%2B2dg0bB3He4hYIR2I9UM9J7Ra7MdEnN4qzlDP%2FwG06Y6EJlSpkmZ6A9zbT9tRFt%2FDewXMfruxbs338o2YlLbIzXYn2clBdUusZIgqVWgz4uLgpw9FD%2F3vhTXu5XzkMKKG3cAGOqUBwGSBhoofv30DINDNfEBNKpVSUZJXOSdcnu0Ptw66N1ebYMdqPiWe20%2FCHT9zmCjO2AVVKdBOGcChi9RGlYkbyWiM9kTCNzSWt%2B4bBmmRUlsH395HzYTO%2FJ1XFSsRPSzl%2B4wLQS874GBa1sR316tp2F6%2FiW9rdjrwFygxPlr0mAcMk3EyZAHjUyI7uK6tWrDtsNJJoU1zFw12O2E6cDf7vlZgkHLg&X-Amz-Signature=e2571fec75adfc737355a23cdf791b29c1ff58940dd07208a4588d9ce0f36a2a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO4FJBTW%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T150733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEka2ireMMTkM8%2Fu50baAnxfc4SXY4cUcacKdgTFbpfhAiEAgZ%2FFi%2BxaiHfxo9nyq00kpn5gvNMNdn46WEooXTjkGwwq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDIVSSBOSLuTguPbkyCrcA5bcYnRIxn03mlLBz4c1g3GQL5QDEGU%2BGzfV8HlTJDwHXv9NKN5JJKtU5qpr3euxkuroI5tzh5TUabklVIw3TMiisbtqNDO9AwpI525Zyd65D2Nr3N%2FHbdgTUTPzp%2BTmlZhr61u9YrsPWAT%2FAmwKZZr%2FDoTFyrcUn1sTQnpYWh%2FLzanBHY%2FlmEBs8L8W%2FPRCqo%2BPemBOsEa8GNcR5fF29g4aWh6EjzdAvt6b18ezg5y%2Flse1NqCWcQlGROiQfqiyuC0hvX6tWOGVYa8oH2qX6CVmzlaHne7%2BKadsJoEcHAtIF7V6vR%2BxUFzBUJKMEUT8LRpydojvh1sGYKgoByoRy3qc4iE1pTVEOHtDvCAcxsasTYR3nCeBXPJ5%2FAQdQkQRO37nrZ353j3%2FywLgwas7AJOuMJp6p5AXEzCS9j4iL3keqxQHwp55Hr1zlsNCj3tC%2FYB1njj8xq1npldQznvk%2F8GIQ8OYpIGJqunaLrbIc6d845%2Bs7PERSBMbH4U%2FykJ%2B2dg0bB3He4hYIR2I9UM9J7Ra7MdEnN4qzlDP%2FwG06Y6EJlSpkmZ6A9zbT9tRFt%2FDewXMfruxbs338o2YlLbIzXYn2clBdUusZIgqVWgz4uLgpw9FD%2F3vhTXu5XzkMKKG3cAGOqUBwGSBhoofv30DINDNfEBNKpVSUZJXOSdcnu0Ptw66N1ebYMdqPiWe20%2FCHT9zmCjO2AVVKdBOGcChi9RGlYkbyWiM9kTCNzSWt%2B4bBmmRUlsH395HzYTO%2FJ1XFSsRPSzl%2B4wLQS874GBa1sR316tp2F6%2FiW9rdjrwFygxPlr0mAcMk3EyZAHjUyI7uK6tWrDtsNJJoU1zFw12O2E6cDf7vlZgkHLg&X-Amz-Signature=e1b28ab122fbfd0b3e2756534b0112593c462cbcb0abac7301e8fd42cd78ad3b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO4FJBTW%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEka2ireMMTkM8%2Fu50baAnxfc4SXY4cUcacKdgTFbpfhAiEAgZ%2FFi%2BxaiHfxo9nyq00kpn5gvNMNdn46WEooXTjkGwwq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDIVSSBOSLuTguPbkyCrcA5bcYnRIxn03mlLBz4c1g3GQL5QDEGU%2BGzfV8HlTJDwHXv9NKN5JJKtU5qpr3euxkuroI5tzh5TUabklVIw3TMiisbtqNDO9AwpI525Zyd65D2Nr3N%2FHbdgTUTPzp%2BTmlZhr61u9YrsPWAT%2FAmwKZZr%2FDoTFyrcUn1sTQnpYWh%2FLzanBHY%2FlmEBs8L8W%2FPRCqo%2BPemBOsEa8GNcR5fF29g4aWh6EjzdAvt6b18ezg5y%2Flse1NqCWcQlGROiQfqiyuC0hvX6tWOGVYa8oH2qX6CVmzlaHne7%2BKadsJoEcHAtIF7V6vR%2BxUFzBUJKMEUT8LRpydojvh1sGYKgoByoRy3qc4iE1pTVEOHtDvCAcxsasTYR3nCeBXPJ5%2FAQdQkQRO37nrZ353j3%2FywLgwas7AJOuMJp6p5AXEzCS9j4iL3keqxQHwp55Hr1zlsNCj3tC%2FYB1njj8xq1npldQznvk%2F8GIQ8OYpIGJqunaLrbIc6d845%2Bs7PERSBMbH4U%2FykJ%2B2dg0bB3He4hYIR2I9UM9J7Ra7MdEnN4qzlDP%2FwG06Y6EJlSpkmZ6A9zbT9tRFt%2FDewXMfruxbs338o2YlLbIzXYn2clBdUusZIgqVWgz4uLgpw9FD%2F3vhTXu5XzkMKKG3cAGOqUBwGSBhoofv30DINDNfEBNKpVSUZJXOSdcnu0Ptw66N1ebYMdqPiWe20%2FCHT9zmCjO2AVVKdBOGcChi9RGlYkbyWiM9kTCNzSWt%2B4bBmmRUlsH395HzYTO%2FJ1XFSsRPSzl%2B4wLQS874GBa1sR316tp2F6%2FiW9rdjrwFygxPlr0mAcMk3EyZAHjUyI7uK6tWrDtsNJJoU1zFw12O2E6cDf7vlZgkHLg&X-Amz-Signature=427974b57f350a83b14bd38181a30dba76c354adf70764a743c81ee0ba3bbf75&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO4FJBTW%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEka2ireMMTkM8%2Fu50baAnxfc4SXY4cUcacKdgTFbpfhAiEAgZ%2FFi%2BxaiHfxo9nyq00kpn5gvNMNdn46WEooXTjkGwwq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDIVSSBOSLuTguPbkyCrcA5bcYnRIxn03mlLBz4c1g3GQL5QDEGU%2BGzfV8HlTJDwHXv9NKN5JJKtU5qpr3euxkuroI5tzh5TUabklVIw3TMiisbtqNDO9AwpI525Zyd65D2Nr3N%2FHbdgTUTPzp%2BTmlZhr61u9YrsPWAT%2FAmwKZZr%2FDoTFyrcUn1sTQnpYWh%2FLzanBHY%2FlmEBs8L8W%2FPRCqo%2BPemBOsEa8GNcR5fF29g4aWh6EjzdAvt6b18ezg5y%2Flse1NqCWcQlGROiQfqiyuC0hvX6tWOGVYa8oH2qX6CVmzlaHne7%2BKadsJoEcHAtIF7V6vR%2BxUFzBUJKMEUT8LRpydojvh1sGYKgoByoRy3qc4iE1pTVEOHtDvCAcxsasTYR3nCeBXPJ5%2FAQdQkQRO37nrZ353j3%2FywLgwas7AJOuMJp6p5AXEzCS9j4iL3keqxQHwp55Hr1zlsNCj3tC%2FYB1njj8xq1npldQznvk%2F8GIQ8OYpIGJqunaLrbIc6d845%2Bs7PERSBMbH4U%2FykJ%2B2dg0bB3He4hYIR2I9UM9J7Ra7MdEnN4qzlDP%2FwG06Y6EJlSpkmZ6A9zbT9tRFt%2FDewXMfruxbs338o2YlLbIzXYn2clBdUusZIgqVWgz4uLgpw9FD%2F3vhTXu5XzkMKKG3cAGOqUBwGSBhoofv30DINDNfEBNKpVSUZJXOSdcnu0Ptw66N1ebYMdqPiWe20%2FCHT9zmCjO2AVVKdBOGcChi9RGlYkbyWiM9kTCNzSWt%2B4bBmmRUlsH395HzYTO%2FJ1XFSsRPSzl%2B4wLQS874GBa1sR316tp2F6%2FiW9rdjrwFygxPlr0mAcMk3EyZAHjUyI7uK6tWrDtsNJJoU1zFw12O2E6cDf7vlZgkHLg&X-Amz-Signature=7b74b01ad797dafc9ab1f4b3cb1b77cc39da16c3b4a32efe63fa2e63aa95b2ee&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
