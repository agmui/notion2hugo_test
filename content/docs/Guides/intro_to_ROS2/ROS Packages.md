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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QMBP7MJ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIHm%2FRqjUSmDcEcPnN64X3kIy3wSBoal20SnR5a11o41KAiBv1JZGwpGTbTz48ClCxSY57PcYnVdAwLG5p%2F%2BJVhKLKir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMEJKRv04H5fUwiyRpKtwDn9iTMg9TdZP75Du2%2FL77vCGi4APwubCR%2FCKKJTkuaJqfgh2x26D4jrIiEd3G1ssYFw9nutVlE5t4mZ6VEaOXF7zwZbyDEx45I5eqU4%2BC07t%2BoyuHkAGShpLBIc8YWbj928QdWgHll1N7aWi5eVM57pQO4%2F1veoz4IV66OF69drcU47W1mZEcCyxWcr2L9WFt2uImY0oHxqBs3f5oUha%2FleXZK3MHEB9UuBitdKLNVpWTQVBOgHUjOGU%2F8GmcRkQde03Axcln7dmCrFOxLXyFXLH6UESln71oqRaQNFdIdoLSsGwsS2CSlBs4fzkQKQ59AQ%2FwBmc%2BZJnfMjM1A1MECxOiT4xJM52FWXRtA7CamPybsgTbjmyCBHIqJPOplP1FP4J8rD%2FI4CFMs7pzR8IZHrxOFaODxrvM4%2Fzv55%2Fz9I%2BrwMXpYErkEWaAghhUze0k6fFe5FLTq45AeAPl8P6WkiaPmkRyMu1nlSFCODxqiO16Un6Km40vBhHKc%2BpZctfCJ%2BCm6lfS6CBEbj5bHvKOoLK7prxtiV2EUvTl72CV4OxoE%2FmWg6DoLTD%2BxpBKoV5mvGzbA8HiVb8Cvuyf3mwGhmGaN9w4fUgSUgx8Va5buvZmpDs%2BqFFequgR6nAw99SZvQY6pgHVlujBAxwRuzZzXZ21UFN0StFBbxDVYg97FA%2BUuOdN7ZNp%2BytSxGfGdGh1jNz4WSkHkwgM9Nr%2Bz3Icf7Nsyz6US92BMTwkgmtzWlH1F8WBvE3FA6Z7SZekt9oqO4OqKobSOGOU2jZUtZmjDCrDolcRzQTk9eNJZ8gCJsQGVnvhSTTejV8AkQPYQZYY2%2BAusZ7GoXtvp6vn3zhUjilU7FkRmyd%2Bdqy5&X-Amz-Signature=60f2b6c0c52a195bd5398a5d740cc56629e889f16b1905b09fdc7d03bd7f8e6d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QMBP7MJ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIHm%2FRqjUSmDcEcPnN64X3kIy3wSBoal20SnR5a11o41KAiBv1JZGwpGTbTz48ClCxSY57PcYnVdAwLG5p%2F%2BJVhKLKir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMEJKRv04H5fUwiyRpKtwDn9iTMg9TdZP75Du2%2FL77vCGi4APwubCR%2FCKKJTkuaJqfgh2x26D4jrIiEd3G1ssYFw9nutVlE5t4mZ6VEaOXF7zwZbyDEx45I5eqU4%2BC07t%2BoyuHkAGShpLBIc8YWbj928QdWgHll1N7aWi5eVM57pQO4%2F1veoz4IV66OF69drcU47W1mZEcCyxWcr2L9WFt2uImY0oHxqBs3f5oUha%2FleXZK3MHEB9UuBitdKLNVpWTQVBOgHUjOGU%2F8GmcRkQde03Axcln7dmCrFOxLXyFXLH6UESln71oqRaQNFdIdoLSsGwsS2CSlBs4fzkQKQ59AQ%2FwBmc%2BZJnfMjM1A1MECxOiT4xJM52FWXRtA7CamPybsgTbjmyCBHIqJPOplP1FP4J8rD%2FI4CFMs7pzR8IZHrxOFaODxrvM4%2Fzv55%2Fz9I%2BrwMXpYErkEWaAghhUze0k6fFe5FLTq45AeAPl8P6WkiaPmkRyMu1nlSFCODxqiO16Un6Km40vBhHKc%2BpZctfCJ%2BCm6lfS6CBEbj5bHvKOoLK7prxtiV2EUvTl72CV4OxoE%2FmWg6DoLTD%2BxpBKoV5mvGzbA8HiVb8Cvuyf3mwGhmGaN9w4fUgSUgx8Va5buvZmpDs%2BqFFequgR6nAw99SZvQY6pgHVlujBAxwRuzZzXZ21UFN0StFBbxDVYg97FA%2BUuOdN7ZNp%2BytSxGfGdGh1jNz4WSkHkwgM9Nr%2Bz3Icf7Nsyz6US92BMTwkgmtzWlH1F8WBvE3FA6Z7SZekt9oqO4OqKobSOGOU2jZUtZmjDCrDolcRzQTk9eNJZ8gCJsQGVnvhSTTejV8AkQPYQZYY2%2BAusZ7GoXtvp6vn3zhUjilU7FkRmyd%2Bdqy5&X-Amz-Signature=04618bc17a11dbc532b1268fe32df316a04f75f68908da688941acb5480a3612&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QMBP7MJ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIHm%2FRqjUSmDcEcPnN64X3kIy3wSBoal20SnR5a11o41KAiBv1JZGwpGTbTz48ClCxSY57PcYnVdAwLG5p%2F%2BJVhKLKir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMEJKRv04H5fUwiyRpKtwDn9iTMg9TdZP75Du2%2FL77vCGi4APwubCR%2FCKKJTkuaJqfgh2x26D4jrIiEd3G1ssYFw9nutVlE5t4mZ6VEaOXF7zwZbyDEx45I5eqU4%2BC07t%2BoyuHkAGShpLBIc8YWbj928QdWgHll1N7aWi5eVM57pQO4%2F1veoz4IV66OF69drcU47W1mZEcCyxWcr2L9WFt2uImY0oHxqBs3f5oUha%2FleXZK3MHEB9UuBitdKLNVpWTQVBOgHUjOGU%2F8GmcRkQde03Axcln7dmCrFOxLXyFXLH6UESln71oqRaQNFdIdoLSsGwsS2CSlBs4fzkQKQ59AQ%2FwBmc%2BZJnfMjM1A1MECxOiT4xJM52FWXRtA7CamPybsgTbjmyCBHIqJPOplP1FP4J8rD%2FI4CFMs7pzR8IZHrxOFaODxrvM4%2Fzv55%2Fz9I%2BrwMXpYErkEWaAghhUze0k6fFe5FLTq45AeAPl8P6WkiaPmkRyMu1nlSFCODxqiO16Un6Km40vBhHKc%2BpZctfCJ%2BCm6lfS6CBEbj5bHvKOoLK7prxtiV2EUvTl72CV4OxoE%2FmWg6DoLTD%2BxpBKoV5mvGzbA8HiVb8Cvuyf3mwGhmGaN9w4fUgSUgx8Va5buvZmpDs%2BqFFequgR6nAw99SZvQY6pgHVlujBAxwRuzZzXZ21UFN0StFBbxDVYg97FA%2BUuOdN7ZNp%2BytSxGfGdGh1jNz4WSkHkwgM9Nr%2Bz3Icf7Nsyz6US92BMTwkgmtzWlH1F8WBvE3FA6Z7SZekt9oqO4OqKobSOGOU2jZUtZmjDCrDolcRzQTk9eNJZ8gCJsQGVnvhSTTejV8AkQPYQZYY2%2BAusZ7GoXtvp6vn3zhUjilU7FkRmyd%2Bdqy5&X-Amz-Signature=7bf60b06dc2af8243d6b67a8ef371bd379adc523f0d28cbd87f6d9a8ed947131&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QMBP7MJ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIHm%2FRqjUSmDcEcPnN64X3kIy3wSBoal20SnR5a11o41KAiBv1JZGwpGTbTz48ClCxSY57PcYnVdAwLG5p%2F%2BJVhKLKir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMEJKRv04H5fUwiyRpKtwDn9iTMg9TdZP75Du2%2FL77vCGi4APwubCR%2FCKKJTkuaJqfgh2x26D4jrIiEd3G1ssYFw9nutVlE5t4mZ6VEaOXF7zwZbyDEx45I5eqU4%2BC07t%2BoyuHkAGShpLBIc8YWbj928QdWgHll1N7aWi5eVM57pQO4%2F1veoz4IV66OF69drcU47W1mZEcCyxWcr2L9WFt2uImY0oHxqBs3f5oUha%2FleXZK3MHEB9UuBitdKLNVpWTQVBOgHUjOGU%2F8GmcRkQde03Axcln7dmCrFOxLXyFXLH6UESln71oqRaQNFdIdoLSsGwsS2CSlBs4fzkQKQ59AQ%2FwBmc%2BZJnfMjM1A1MECxOiT4xJM52FWXRtA7CamPybsgTbjmyCBHIqJPOplP1FP4J8rD%2FI4CFMs7pzR8IZHrxOFaODxrvM4%2Fzv55%2Fz9I%2BrwMXpYErkEWaAghhUze0k6fFe5FLTq45AeAPl8P6WkiaPmkRyMu1nlSFCODxqiO16Un6Km40vBhHKc%2BpZctfCJ%2BCm6lfS6CBEbj5bHvKOoLK7prxtiV2EUvTl72CV4OxoE%2FmWg6DoLTD%2BxpBKoV5mvGzbA8HiVb8Cvuyf3mwGhmGaN9w4fUgSUgx8Va5buvZmpDs%2BqFFequgR6nAw99SZvQY6pgHVlujBAxwRuzZzXZ21UFN0StFBbxDVYg97FA%2BUuOdN7ZNp%2BytSxGfGdGh1jNz4WSkHkwgM9Nr%2Bz3Icf7Nsyz6US92BMTwkgmtzWlH1F8WBvE3FA6Z7SZekt9oqO4OqKobSOGOU2jZUtZmjDCrDolcRzQTk9eNJZ8gCJsQGVnvhSTTejV8AkQPYQZYY2%2BAusZ7GoXtvp6vn3zhUjilU7FkRmyd%2Bdqy5&X-Amz-Signature=d4d5a7cf8f69e4553b3e0605311b2109bb6cacb8403ffb95de29f7c3d0d430ab&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QMBP7MJ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIHm%2FRqjUSmDcEcPnN64X3kIy3wSBoal20SnR5a11o41KAiBv1JZGwpGTbTz48ClCxSY57PcYnVdAwLG5p%2F%2BJVhKLKir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMEJKRv04H5fUwiyRpKtwDn9iTMg9TdZP75Du2%2FL77vCGi4APwubCR%2FCKKJTkuaJqfgh2x26D4jrIiEd3G1ssYFw9nutVlE5t4mZ6VEaOXF7zwZbyDEx45I5eqU4%2BC07t%2BoyuHkAGShpLBIc8YWbj928QdWgHll1N7aWi5eVM57pQO4%2F1veoz4IV66OF69drcU47W1mZEcCyxWcr2L9WFt2uImY0oHxqBs3f5oUha%2FleXZK3MHEB9UuBitdKLNVpWTQVBOgHUjOGU%2F8GmcRkQde03Axcln7dmCrFOxLXyFXLH6UESln71oqRaQNFdIdoLSsGwsS2CSlBs4fzkQKQ59AQ%2FwBmc%2BZJnfMjM1A1MECxOiT4xJM52FWXRtA7CamPybsgTbjmyCBHIqJPOplP1FP4J8rD%2FI4CFMs7pzR8IZHrxOFaODxrvM4%2Fzv55%2Fz9I%2BrwMXpYErkEWaAghhUze0k6fFe5FLTq45AeAPl8P6WkiaPmkRyMu1nlSFCODxqiO16Un6Km40vBhHKc%2BpZctfCJ%2BCm6lfS6CBEbj5bHvKOoLK7prxtiV2EUvTl72CV4OxoE%2FmWg6DoLTD%2BxpBKoV5mvGzbA8HiVb8Cvuyf3mwGhmGaN9w4fUgSUgx8Va5buvZmpDs%2BqFFequgR6nAw99SZvQY6pgHVlujBAxwRuzZzXZ21UFN0StFBbxDVYg97FA%2BUuOdN7ZNp%2BytSxGfGdGh1jNz4WSkHkwgM9Nr%2Bz3Icf7Nsyz6US92BMTwkgmtzWlH1F8WBvE3FA6Z7SZekt9oqO4OqKobSOGOU2jZUtZmjDCrDolcRzQTk9eNJZ8gCJsQGVnvhSTTejV8AkQPYQZYY2%2BAusZ7GoXtvp6vn3zhUjilU7FkRmyd%2Bdqy5&X-Amz-Signature=15f1c80451ab980edddec8bdfbc83c3bf47650d7a5e5fbdfa03ce9d23fe97e05&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QMBP7MJ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIHm%2FRqjUSmDcEcPnN64X3kIy3wSBoal20SnR5a11o41KAiBv1JZGwpGTbTz48ClCxSY57PcYnVdAwLG5p%2F%2BJVhKLKir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMEJKRv04H5fUwiyRpKtwDn9iTMg9TdZP75Du2%2FL77vCGi4APwubCR%2FCKKJTkuaJqfgh2x26D4jrIiEd3G1ssYFw9nutVlE5t4mZ6VEaOXF7zwZbyDEx45I5eqU4%2BC07t%2BoyuHkAGShpLBIc8YWbj928QdWgHll1N7aWi5eVM57pQO4%2F1veoz4IV66OF69drcU47W1mZEcCyxWcr2L9WFt2uImY0oHxqBs3f5oUha%2FleXZK3MHEB9UuBitdKLNVpWTQVBOgHUjOGU%2F8GmcRkQde03Axcln7dmCrFOxLXyFXLH6UESln71oqRaQNFdIdoLSsGwsS2CSlBs4fzkQKQ59AQ%2FwBmc%2BZJnfMjM1A1MECxOiT4xJM52FWXRtA7CamPybsgTbjmyCBHIqJPOplP1FP4J8rD%2FI4CFMs7pzR8IZHrxOFaODxrvM4%2Fzv55%2Fz9I%2BrwMXpYErkEWaAghhUze0k6fFe5FLTq45AeAPl8P6WkiaPmkRyMu1nlSFCODxqiO16Un6Km40vBhHKc%2BpZctfCJ%2BCm6lfS6CBEbj5bHvKOoLK7prxtiV2EUvTl72CV4OxoE%2FmWg6DoLTD%2BxpBKoV5mvGzbA8HiVb8Cvuyf3mwGhmGaN9w4fUgSUgx8Va5buvZmpDs%2BqFFequgR6nAw99SZvQY6pgHVlujBAxwRuzZzXZ21UFN0StFBbxDVYg97FA%2BUuOdN7ZNp%2BytSxGfGdGh1jNz4WSkHkwgM9Nr%2Bz3Icf7Nsyz6US92BMTwkgmtzWlH1F8WBvE3FA6Z7SZekt9oqO4OqKobSOGOU2jZUtZmjDCrDolcRzQTk9eNJZ8gCJsQGVnvhSTTejV8AkQPYQZYY2%2BAusZ7GoXtvp6vn3zhUjilU7FkRmyd%2Bdqy5&X-Amz-Signature=e293b59bafcd934a0e40c3a7be4150f742ebe132e4a8b11c6171354b62266896&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QMBP7MJ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIHm%2FRqjUSmDcEcPnN64X3kIy3wSBoal20SnR5a11o41KAiBv1JZGwpGTbTz48ClCxSY57PcYnVdAwLG5p%2F%2BJVhKLKir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMEJKRv04H5fUwiyRpKtwDn9iTMg9TdZP75Du2%2FL77vCGi4APwubCR%2FCKKJTkuaJqfgh2x26D4jrIiEd3G1ssYFw9nutVlE5t4mZ6VEaOXF7zwZbyDEx45I5eqU4%2BC07t%2BoyuHkAGShpLBIc8YWbj928QdWgHll1N7aWi5eVM57pQO4%2F1veoz4IV66OF69drcU47W1mZEcCyxWcr2L9WFt2uImY0oHxqBs3f5oUha%2FleXZK3MHEB9UuBitdKLNVpWTQVBOgHUjOGU%2F8GmcRkQde03Axcln7dmCrFOxLXyFXLH6UESln71oqRaQNFdIdoLSsGwsS2CSlBs4fzkQKQ59AQ%2FwBmc%2BZJnfMjM1A1MECxOiT4xJM52FWXRtA7CamPybsgTbjmyCBHIqJPOplP1FP4J8rD%2FI4CFMs7pzR8IZHrxOFaODxrvM4%2Fzv55%2Fz9I%2BrwMXpYErkEWaAghhUze0k6fFe5FLTq45AeAPl8P6WkiaPmkRyMu1nlSFCODxqiO16Un6Km40vBhHKc%2BpZctfCJ%2BCm6lfS6CBEbj5bHvKOoLK7prxtiV2EUvTl72CV4OxoE%2FmWg6DoLTD%2BxpBKoV5mvGzbA8HiVb8Cvuyf3mwGhmGaN9w4fUgSUgx8Va5buvZmpDs%2BqFFequgR6nAw99SZvQY6pgHVlujBAxwRuzZzXZ21UFN0StFBbxDVYg97FA%2BUuOdN7ZNp%2BytSxGfGdGh1jNz4WSkHkwgM9Nr%2Bz3Icf7Nsyz6US92BMTwkgmtzWlH1F8WBvE3FA6Z7SZekt9oqO4OqKobSOGOU2jZUtZmjDCrDolcRzQTk9eNJZ8gCJsQGVnvhSTTejV8AkQPYQZYY2%2BAusZ7GoXtvp6vn3zhUjilU7FkRmyd%2Bdqy5&X-Amz-Signature=08b95895c550b0e3e71cd52bf08c5cc2560cc71b13630b19594127d8f7005bb6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
