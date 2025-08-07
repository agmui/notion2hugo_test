---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OVL3FO2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQD9Uqy4Px8LBNIE1xQe2v%2F4avWXXFADF3SgjOI%2FCyqmYwIhANx%2Fv3F6jbmmf1qFMoMQtUeoi8%2BqxBYyG9OzSw%2FvHg68KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOG7RYxRkrHokdxHgq3AMdpHjuyU2uZh95%2FK3WPADTKq3%2BGt%2BixcucpYxmmkhOwhpXxyG3kZy4%2BtsRplHxVWEsSA4spfa4iJinsPzy%2BzvFLQQR9o2q%2FPR85Wh%2BSYViCp0kfSpjwl0Pq0i7hFGiSPovrErI%2BQVs%2FPirX%2FTLw8C%2BGse5AfbxEaYXAobkoqvB1k0Q8pcZy5O14mc3NagBh9%2FVO4YyhQgfdvwrvoSFJDumE7UIBGbFxkwXZuOyqbPPgMAXVPjHj0Dw3jlTG6zXxCFeDmrJH9siIzrT1jGNpqzLEDkmEh9xThh%2BLB6p1jS7CR2jCdhMHF7%2Fw4hTc8flzsTzgrZgQVV%2FjfjpzPtWwzLaFhDTEG3jqit7UPY%2B%2FO7G74AkRqvrwBBBLpdzFHxLkof7tfdRyh%2Fe7mfnwq86KuUDN543KqnkIlWstSRY2UiA2XsGhKS5ew2Xdc129sDDF%2BXcVuI7PLQ2eUOZWO4HOTAAqSkQPNxjvaQUcVXagQxeAYqgaoaE52taL7CDOzGAF%2BhNkZ6wEC0s0g2dpR2Xl3DaBAgwTNgCDSpQEckeHgH5ksXbLBhTERLOiYWcookzzoynHFVcnvaaRqi8GCz0B01ulJamqsu0RlpMNFhO3celOEcnBSXWCO2B%2BKQXEzCVkNHEBjqkAeQ0eDGWCKN%2Bv6zzZGcpb3FZ10j793ctcaLn90dMZGEhBbfQrO2UAOGNK%2FmaDApYdIsBPS%2BnB9nslUWn2GggaMTfJaRs4JbURAYZytO3aEOLSosdPFkvNv1qckx5b7h4P%2F1v%2FDdEdl%2FscEd38L6q1LM%2FGxHxhsedJlYvGi%2Bb6vloQekYTM9EIWILmio%2BO74Pgjlbi7WrSXO%2Fx9ZctRd3EzUXjDSm&X-Amz-Signature=968ffa53b2dadc20eeb91cc02989f9034c02394428721b68de1bcbe54e750efc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OVL3FO2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQD9Uqy4Px8LBNIE1xQe2v%2F4avWXXFADF3SgjOI%2FCyqmYwIhANx%2Fv3F6jbmmf1qFMoMQtUeoi8%2BqxBYyG9OzSw%2FvHg68KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOG7RYxRkrHokdxHgq3AMdpHjuyU2uZh95%2FK3WPADTKq3%2BGt%2BixcucpYxmmkhOwhpXxyG3kZy4%2BtsRplHxVWEsSA4spfa4iJinsPzy%2BzvFLQQR9o2q%2FPR85Wh%2BSYViCp0kfSpjwl0Pq0i7hFGiSPovrErI%2BQVs%2FPirX%2FTLw8C%2BGse5AfbxEaYXAobkoqvB1k0Q8pcZy5O14mc3NagBh9%2FVO4YyhQgfdvwrvoSFJDumE7UIBGbFxkwXZuOyqbPPgMAXVPjHj0Dw3jlTG6zXxCFeDmrJH9siIzrT1jGNpqzLEDkmEh9xThh%2BLB6p1jS7CR2jCdhMHF7%2Fw4hTc8flzsTzgrZgQVV%2FjfjpzPtWwzLaFhDTEG3jqit7UPY%2B%2FO7G74AkRqvrwBBBLpdzFHxLkof7tfdRyh%2Fe7mfnwq86KuUDN543KqnkIlWstSRY2UiA2XsGhKS5ew2Xdc129sDDF%2BXcVuI7PLQ2eUOZWO4HOTAAqSkQPNxjvaQUcVXagQxeAYqgaoaE52taL7CDOzGAF%2BhNkZ6wEC0s0g2dpR2Xl3DaBAgwTNgCDSpQEckeHgH5ksXbLBhTERLOiYWcookzzoynHFVcnvaaRqi8GCz0B01ulJamqsu0RlpMNFhO3celOEcnBSXWCO2B%2BKQXEzCVkNHEBjqkAeQ0eDGWCKN%2Bv6zzZGcpb3FZ10j793ctcaLn90dMZGEhBbfQrO2UAOGNK%2FmaDApYdIsBPS%2BnB9nslUWn2GggaMTfJaRs4JbURAYZytO3aEOLSosdPFkvNv1qckx5b7h4P%2F1v%2FDdEdl%2FscEd38L6q1LM%2FGxHxhsedJlYvGi%2Bb6vloQekYTM9EIWILmio%2BO74Pgjlbi7WrSXO%2Fx9ZctRd3EzUXjDSm&X-Amz-Signature=55b4b9819e80f922e454e5c3f9ba81aa899ab344709866a494fb5e2f4a5c48e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OVL3FO2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQD9Uqy4Px8LBNIE1xQe2v%2F4avWXXFADF3SgjOI%2FCyqmYwIhANx%2Fv3F6jbmmf1qFMoMQtUeoi8%2BqxBYyG9OzSw%2FvHg68KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOG7RYxRkrHokdxHgq3AMdpHjuyU2uZh95%2FK3WPADTKq3%2BGt%2BixcucpYxmmkhOwhpXxyG3kZy4%2BtsRplHxVWEsSA4spfa4iJinsPzy%2BzvFLQQR9o2q%2FPR85Wh%2BSYViCp0kfSpjwl0Pq0i7hFGiSPovrErI%2BQVs%2FPirX%2FTLw8C%2BGse5AfbxEaYXAobkoqvB1k0Q8pcZy5O14mc3NagBh9%2FVO4YyhQgfdvwrvoSFJDumE7UIBGbFxkwXZuOyqbPPgMAXVPjHj0Dw3jlTG6zXxCFeDmrJH9siIzrT1jGNpqzLEDkmEh9xThh%2BLB6p1jS7CR2jCdhMHF7%2Fw4hTc8flzsTzgrZgQVV%2FjfjpzPtWwzLaFhDTEG3jqit7UPY%2B%2FO7G74AkRqvrwBBBLpdzFHxLkof7tfdRyh%2Fe7mfnwq86KuUDN543KqnkIlWstSRY2UiA2XsGhKS5ew2Xdc129sDDF%2BXcVuI7PLQ2eUOZWO4HOTAAqSkQPNxjvaQUcVXagQxeAYqgaoaE52taL7CDOzGAF%2BhNkZ6wEC0s0g2dpR2Xl3DaBAgwTNgCDSpQEckeHgH5ksXbLBhTERLOiYWcookzzoynHFVcnvaaRqi8GCz0B01ulJamqsu0RlpMNFhO3celOEcnBSXWCO2B%2BKQXEzCVkNHEBjqkAeQ0eDGWCKN%2Bv6zzZGcpb3FZ10j793ctcaLn90dMZGEhBbfQrO2UAOGNK%2FmaDApYdIsBPS%2BnB9nslUWn2GggaMTfJaRs4JbURAYZytO3aEOLSosdPFkvNv1qckx5b7h4P%2F1v%2FDdEdl%2FscEd38L6q1LM%2FGxHxhsedJlYvGi%2Bb6vloQekYTM9EIWILmio%2BO74Pgjlbi7WrSXO%2Fx9ZctRd3EzUXjDSm&X-Amz-Signature=4c12311402a401c4bbc4eecf375286f840e4dd21d74acbf4dda8b4aaa3d1b33c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OVL3FO2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQD9Uqy4Px8LBNIE1xQe2v%2F4avWXXFADF3SgjOI%2FCyqmYwIhANx%2Fv3F6jbmmf1qFMoMQtUeoi8%2BqxBYyG9OzSw%2FvHg68KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOG7RYxRkrHokdxHgq3AMdpHjuyU2uZh95%2FK3WPADTKq3%2BGt%2BixcucpYxmmkhOwhpXxyG3kZy4%2BtsRplHxVWEsSA4spfa4iJinsPzy%2BzvFLQQR9o2q%2FPR85Wh%2BSYViCp0kfSpjwl0Pq0i7hFGiSPovrErI%2BQVs%2FPirX%2FTLw8C%2BGse5AfbxEaYXAobkoqvB1k0Q8pcZy5O14mc3NagBh9%2FVO4YyhQgfdvwrvoSFJDumE7UIBGbFxkwXZuOyqbPPgMAXVPjHj0Dw3jlTG6zXxCFeDmrJH9siIzrT1jGNpqzLEDkmEh9xThh%2BLB6p1jS7CR2jCdhMHF7%2Fw4hTc8flzsTzgrZgQVV%2FjfjpzPtWwzLaFhDTEG3jqit7UPY%2B%2FO7G74AkRqvrwBBBLpdzFHxLkof7tfdRyh%2Fe7mfnwq86KuUDN543KqnkIlWstSRY2UiA2XsGhKS5ew2Xdc129sDDF%2BXcVuI7PLQ2eUOZWO4HOTAAqSkQPNxjvaQUcVXagQxeAYqgaoaE52taL7CDOzGAF%2BhNkZ6wEC0s0g2dpR2Xl3DaBAgwTNgCDSpQEckeHgH5ksXbLBhTERLOiYWcookzzoynHFVcnvaaRqi8GCz0B01ulJamqsu0RlpMNFhO3celOEcnBSXWCO2B%2BKQXEzCVkNHEBjqkAeQ0eDGWCKN%2Bv6zzZGcpb3FZ10j793ctcaLn90dMZGEhBbfQrO2UAOGNK%2FmaDApYdIsBPS%2BnB9nslUWn2GggaMTfJaRs4JbURAYZytO3aEOLSosdPFkvNv1qckx5b7h4P%2F1v%2FDdEdl%2FscEd38L6q1LM%2FGxHxhsedJlYvGi%2Bb6vloQekYTM9EIWILmio%2BO74Pgjlbi7WrSXO%2Fx9ZctRd3EzUXjDSm&X-Amz-Signature=992c92723682592e3a9422e28b2e94a516015d1c22c83744c015ab31355583ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OVL3FO2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQD9Uqy4Px8LBNIE1xQe2v%2F4avWXXFADF3SgjOI%2FCyqmYwIhANx%2Fv3F6jbmmf1qFMoMQtUeoi8%2BqxBYyG9OzSw%2FvHg68KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOG7RYxRkrHokdxHgq3AMdpHjuyU2uZh95%2FK3WPADTKq3%2BGt%2BixcucpYxmmkhOwhpXxyG3kZy4%2BtsRplHxVWEsSA4spfa4iJinsPzy%2BzvFLQQR9o2q%2FPR85Wh%2BSYViCp0kfSpjwl0Pq0i7hFGiSPovrErI%2BQVs%2FPirX%2FTLw8C%2BGse5AfbxEaYXAobkoqvB1k0Q8pcZy5O14mc3NagBh9%2FVO4YyhQgfdvwrvoSFJDumE7UIBGbFxkwXZuOyqbPPgMAXVPjHj0Dw3jlTG6zXxCFeDmrJH9siIzrT1jGNpqzLEDkmEh9xThh%2BLB6p1jS7CR2jCdhMHF7%2Fw4hTc8flzsTzgrZgQVV%2FjfjpzPtWwzLaFhDTEG3jqit7UPY%2B%2FO7G74AkRqvrwBBBLpdzFHxLkof7tfdRyh%2Fe7mfnwq86KuUDN543KqnkIlWstSRY2UiA2XsGhKS5ew2Xdc129sDDF%2BXcVuI7PLQ2eUOZWO4HOTAAqSkQPNxjvaQUcVXagQxeAYqgaoaE52taL7CDOzGAF%2BhNkZ6wEC0s0g2dpR2Xl3DaBAgwTNgCDSpQEckeHgH5ksXbLBhTERLOiYWcookzzoynHFVcnvaaRqi8GCz0B01ulJamqsu0RlpMNFhO3celOEcnBSXWCO2B%2BKQXEzCVkNHEBjqkAeQ0eDGWCKN%2Bv6zzZGcpb3FZ10j793ctcaLn90dMZGEhBbfQrO2UAOGNK%2FmaDApYdIsBPS%2BnB9nslUWn2GggaMTfJaRs4JbURAYZytO3aEOLSosdPFkvNv1qckx5b7h4P%2F1v%2FDdEdl%2FscEd38L6q1LM%2FGxHxhsedJlYvGi%2Bb6vloQekYTM9EIWILmio%2BO74Pgjlbi7WrSXO%2Fx9ZctRd3EzUXjDSm&X-Amz-Signature=7034fc258d864998a90b19ffd8bdd958bb95a49b0f86b6aebb433e4e8a4558de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OVL3FO2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQD9Uqy4Px8LBNIE1xQe2v%2F4avWXXFADF3SgjOI%2FCyqmYwIhANx%2Fv3F6jbmmf1qFMoMQtUeoi8%2BqxBYyG9OzSw%2FvHg68KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOG7RYxRkrHokdxHgq3AMdpHjuyU2uZh95%2FK3WPADTKq3%2BGt%2BixcucpYxmmkhOwhpXxyG3kZy4%2BtsRplHxVWEsSA4spfa4iJinsPzy%2BzvFLQQR9o2q%2FPR85Wh%2BSYViCp0kfSpjwl0Pq0i7hFGiSPovrErI%2BQVs%2FPirX%2FTLw8C%2BGse5AfbxEaYXAobkoqvB1k0Q8pcZy5O14mc3NagBh9%2FVO4YyhQgfdvwrvoSFJDumE7UIBGbFxkwXZuOyqbPPgMAXVPjHj0Dw3jlTG6zXxCFeDmrJH9siIzrT1jGNpqzLEDkmEh9xThh%2BLB6p1jS7CR2jCdhMHF7%2Fw4hTc8flzsTzgrZgQVV%2FjfjpzPtWwzLaFhDTEG3jqit7UPY%2B%2FO7G74AkRqvrwBBBLpdzFHxLkof7tfdRyh%2Fe7mfnwq86KuUDN543KqnkIlWstSRY2UiA2XsGhKS5ew2Xdc129sDDF%2BXcVuI7PLQ2eUOZWO4HOTAAqSkQPNxjvaQUcVXagQxeAYqgaoaE52taL7CDOzGAF%2BhNkZ6wEC0s0g2dpR2Xl3DaBAgwTNgCDSpQEckeHgH5ksXbLBhTERLOiYWcookzzoynHFVcnvaaRqi8GCz0B01ulJamqsu0RlpMNFhO3celOEcnBSXWCO2B%2BKQXEzCVkNHEBjqkAeQ0eDGWCKN%2Bv6zzZGcpb3FZ10j793ctcaLn90dMZGEhBbfQrO2UAOGNK%2FmaDApYdIsBPS%2BnB9nslUWn2GggaMTfJaRs4JbURAYZytO3aEOLSosdPFkvNv1qckx5b7h4P%2F1v%2FDdEdl%2FscEd38L6q1LM%2FGxHxhsedJlYvGi%2Bb6vloQekYTM9EIWILmio%2BO74Pgjlbi7WrSXO%2Fx9ZctRd3EzUXjDSm&X-Amz-Signature=660681115159f2ebcef4b2b0faa75ba59acb848d92618e95e44aa770ce42283b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OVL3FO2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQD9Uqy4Px8LBNIE1xQe2v%2F4avWXXFADF3SgjOI%2FCyqmYwIhANx%2Fv3F6jbmmf1qFMoMQtUeoi8%2BqxBYyG9OzSw%2FvHg68KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOG7RYxRkrHokdxHgq3AMdpHjuyU2uZh95%2FK3WPADTKq3%2BGt%2BixcucpYxmmkhOwhpXxyG3kZy4%2BtsRplHxVWEsSA4spfa4iJinsPzy%2BzvFLQQR9o2q%2FPR85Wh%2BSYViCp0kfSpjwl0Pq0i7hFGiSPovrErI%2BQVs%2FPirX%2FTLw8C%2BGse5AfbxEaYXAobkoqvB1k0Q8pcZy5O14mc3NagBh9%2FVO4YyhQgfdvwrvoSFJDumE7UIBGbFxkwXZuOyqbPPgMAXVPjHj0Dw3jlTG6zXxCFeDmrJH9siIzrT1jGNpqzLEDkmEh9xThh%2BLB6p1jS7CR2jCdhMHF7%2Fw4hTc8flzsTzgrZgQVV%2FjfjpzPtWwzLaFhDTEG3jqit7UPY%2B%2FO7G74AkRqvrwBBBLpdzFHxLkof7tfdRyh%2Fe7mfnwq86KuUDN543KqnkIlWstSRY2UiA2XsGhKS5ew2Xdc129sDDF%2BXcVuI7PLQ2eUOZWO4HOTAAqSkQPNxjvaQUcVXagQxeAYqgaoaE52taL7CDOzGAF%2BhNkZ6wEC0s0g2dpR2Xl3DaBAgwTNgCDSpQEckeHgH5ksXbLBhTERLOiYWcookzzoynHFVcnvaaRqi8GCz0B01ulJamqsu0RlpMNFhO3celOEcnBSXWCO2B%2BKQXEzCVkNHEBjqkAeQ0eDGWCKN%2Bv6zzZGcpb3FZ10j793ctcaLn90dMZGEhBbfQrO2UAOGNK%2FmaDApYdIsBPS%2BnB9nslUWn2GggaMTfJaRs4JbURAYZytO3aEOLSosdPFkvNv1qckx5b7h4P%2F1v%2FDdEdl%2FscEd38L6q1LM%2FGxHxhsedJlYvGi%2Bb6vloQekYTM9EIWILmio%2BO74Pgjlbi7WrSXO%2Fx9ZctRd3EzUXjDSm&X-Amz-Signature=f2e297f5feeb5a109b58f2afb049542295fc10de2ba5d6b47eeaf242e39219cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
