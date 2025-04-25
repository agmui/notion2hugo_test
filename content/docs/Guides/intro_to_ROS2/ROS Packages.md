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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VRLU2SM%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJyt8J3dF7JgMLjNsu5vrWVjzp50e%2B44rVUyiMwrCK%2BQIhAMHD%2B9Ngr2jkXqsilkM6NLtCu7xrFAEQApeQCL65gkIeKv8DCCoQABoMNjM3NDIzMTgzODA1IgxkvA7PGT2kjrUHshsq3APmeM92BkqRY55mf6JvbTAmak4Xl8%2FOKJfly5Pk7lV47H9fGgeN9RKu5Y9%2F0tNoR57yR4db22cD2MoaSuEubBHvVMJzGTq%2FltTAcLIcNGLYN23WJ3bQaYLR4swEnBQTl5WGH76RbAFRPfaR2lZc23IR%2FJx841k5tYOxwLHf5YMVAH701p%2ByDGDT24qADKAqABBKLpZ3ZCW6CeCVujndRN%2BhuAxRifWGrXIE%2FWMfg4cGnuHTsL0ygXNitmFqQJVP0cpPjM%2BSc3Q%2FpPYQsuCOaBTJgu5Af8mzymTmHip2Lm78e7Qekr%2FKCXV5g9qKbQe1O%2Ft0pQLWnUgI3vz8vTXFcqjr6yDUA%2BxZhXRiH1oRZyRnLCNKibADjf4zWGGTs8hyqnAhTTAQBkdw4DENQjMquN4WsYwgRX1Tbg6UGSqXasxHqOKbYxVidr9%2B%2B6XyLwfpL6t89bxUnquRfTITpUlsa3anjm1I7QR49T971bVgSlbm%2F7kQ3%2FaRy9zt%2B%2FiziCi0jvZ%2FA2YwxvubFWmFHP%2BcMUU2Vre%2BCMXmGdjpkOq11HRmW6eqVUHiOshrokvXxaW2qPCC%2BKHbpXC1ZKSfoVMElcnY%2FC8Rf2Nu%2FeWh2K3LoONA1qK6Q6R%2FSLTVimfq2jDJm63ABjqkATeXKQmmUXhLok%2FbHIUl1yjvlf9q9jBYyF9ofh1NpgtnGBrKKvAM5zCSQj3cwKwHf2Klw06E0WzkF6O6nvSs1Y21MR4E90KUJHc5PFwUacFF7V%2FfO6zrmorQsOmJsphbkrCHuKfjqrHlDs%2Bmx%2BSEFfiCpthDNob%2Fb%2FqKm5Iq6fKlC6jmGgwzKtxtg3YaLLOyul%2F148FqVIHhrd8%2BCjYOVp0JqZop&X-Amz-Signature=f992a5e832b86b5d9785c56054015f765069a992ff17e98e16feea24a4d61cdc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VRLU2SM%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJyt8J3dF7JgMLjNsu5vrWVjzp50e%2B44rVUyiMwrCK%2BQIhAMHD%2B9Ngr2jkXqsilkM6NLtCu7xrFAEQApeQCL65gkIeKv8DCCoQABoMNjM3NDIzMTgzODA1IgxkvA7PGT2kjrUHshsq3APmeM92BkqRY55mf6JvbTAmak4Xl8%2FOKJfly5Pk7lV47H9fGgeN9RKu5Y9%2F0tNoR57yR4db22cD2MoaSuEubBHvVMJzGTq%2FltTAcLIcNGLYN23WJ3bQaYLR4swEnBQTl5WGH76RbAFRPfaR2lZc23IR%2FJx841k5tYOxwLHf5YMVAH701p%2ByDGDT24qADKAqABBKLpZ3ZCW6CeCVujndRN%2BhuAxRifWGrXIE%2FWMfg4cGnuHTsL0ygXNitmFqQJVP0cpPjM%2BSc3Q%2FpPYQsuCOaBTJgu5Af8mzymTmHip2Lm78e7Qekr%2FKCXV5g9qKbQe1O%2Ft0pQLWnUgI3vz8vTXFcqjr6yDUA%2BxZhXRiH1oRZyRnLCNKibADjf4zWGGTs8hyqnAhTTAQBkdw4DENQjMquN4WsYwgRX1Tbg6UGSqXasxHqOKbYxVidr9%2B%2B6XyLwfpL6t89bxUnquRfTITpUlsa3anjm1I7QR49T971bVgSlbm%2F7kQ3%2FaRy9zt%2B%2FiziCi0jvZ%2FA2YwxvubFWmFHP%2BcMUU2Vre%2BCMXmGdjpkOq11HRmW6eqVUHiOshrokvXxaW2qPCC%2BKHbpXC1ZKSfoVMElcnY%2FC8Rf2Nu%2FeWh2K3LoONA1qK6Q6R%2FSLTVimfq2jDJm63ABjqkATeXKQmmUXhLok%2FbHIUl1yjvlf9q9jBYyF9ofh1NpgtnGBrKKvAM5zCSQj3cwKwHf2Klw06E0WzkF6O6nvSs1Y21MR4E90KUJHc5PFwUacFF7V%2FfO6zrmorQsOmJsphbkrCHuKfjqrHlDs%2Bmx%2BSEFfiCpthDNob%2Fb%2FqKm5Iq6fKlC6jmGgwzKtxtg3YaLLOyul%2F148FqVIHhrd8%2BCjYOVp0JqZop&X-Amz-Signature=4ac5689f4cef9be9a677931babcef921a11f334f8737302018f9bfd01d33e382&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VRLU2SM%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJyt8J3dF7JgMLjNsu5vrWVjzp50e%2B44rVUyiMwrCK%2BQIhAMHD%2B9Ngr2jkXqsilkM6NLtCu7xrFAEQApeQCL65gkIeKv8DCCoQABoMNjM3NDIzMTgzODA1IgxkvA7PGT2kjrUHshsq3APmeM92BkqRY55mf6JvbTAmak4Xl8%2FOKJfly5Pk7lV47H9fGgeN9RKu5Y9%2F0tNoR57yR4db22cD2MoaSuEubBHvVMJzGTq%2FltTAcLIcNGLYN23WJ3bQaYLR4swEnBQTl5WGH76RbAFRPfaR2lZc23IR%2FJx841k5tYOxwLHf5YMVAH701p%2ByDGDT24qADKAqABBKLpZ3ZCW6CeCVujndRN%2BhuAxRifWGrXIE%2FWMfg4cGnuHTsL0ygXNitmFqQJVP0cpPjM%2BSc3Q%2FpPYQsuCOaBTJgu5Af8mzymTmHip2Lm78e7Qekr%2FKCXV5g9qKbQe1O%2Ft0pQLWnUgI3vz8vTXFcqjr6yDUA%2BxZhXRiH1oRZyRnLCNKibADjf4zWGGTs8hyqnAhTTAQBkdw4DENQjMquN4WsYwgRX1Tbg6UGSqXasxHqOKbYxVidr9%2B%2B6XyLwfpL6t89bxUnquRfTITpUlsa3anjm1I7QR49T971bVgSlbm%2F7kQ3%2FaRy9zt%2B%2FiziCi0jvZ%2FA2YwxvubFWmFHP%2BcMUU2Vre%2BCMXmGdjpkOq11HRmW6eqVUHiOshrokvXxaW2qPCC%2BKHbpXC1ZKSfoVMElcnY%2FC8Rf2Nu%2FeWh2K3LoONA1qK6Q6R%2FSLTVimfq2jDJm63ABjqkATeXKQmmUXhLok%2FbHIUl1yjvlf9q9jBYyF9ofh1NpgtnGBrKKvAM5zCSQj3cwKwHf2Klw06E0WzkF6O6nvSs1Y21MR4E90KUJHc5PFwUacFF7V%2FfO6zrmorQsOmJsphbkrCHuKfjqrHlDs%2Bmx%2BSEFfiCpthDNob%2Fb%2FqKm5Iq6fKlC6jmGgwzKtxtg3YaLLOyul%2F148FqVIHhrd8%2BCjYOVp0JqZop&X-Amz-Signature=688edd6edab0e4a19720e32a2b2943b9ca4f1a80709020fbb99442cdd4cfd02a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VRLU2SM%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJyt8J3dF7JgMLjNsu5vrWVjzp50e%2B44rVUyiMwrCK%2BQIhAMHD%2B9Ngr2jkXqsilkM6NLtCu7xrFAEQApeQCL65gkIeKv8DCCoQABoMNjM3NDIzMTgzODA1IgxkvA7PGT2kjrUHshsq3APmeM92BkqRY55mf6JvbTAmak4Xl8%2FOKJfly5Pk7lV47H9fGgeN9RKu5Y9%2F0tNoR57yR4db22cD2MoaSuEubBHvVMJzGTq%2FltTAcLIcNGLYN23WJ3bQaYLR4swEnBQTl5WGH76RbAFRPfaR2lZc23IR%2FJx841k5tYOxwLHf5YMVAH701p%2ByDGDT24qADKAqABBKLpZ3ZCW6CeCVujndRN%2BhuAxRifWGrXIE%2FWMfg4cGnuHTsL0ygXNitmFqQJVP0cpPjM%2BSc3Q%2FpPYQsuCOaBTJgu5Af8mzymTmHip2Lm78e7Qekr%2FKCXV5g9qKbQe1O%2Ft0pQLWnUgI3vz8vTXFcqjr6yDUA%2BxZhXRiH1oRZyRnLCNKibADjf4zWGGTs8hyqnAhTTAQBkdw4DENQjMquN4WsYwgRX1Tbg6UGSqXasxHqOKbYxVidr9%2B%2B6XyLwfpL6t89bxUnquRfTITpUlsa3anjm1I7QR49T971bVgSlbm%2F7kQ3%2FaRy9zt%2B%2FiziCi0jvZ%2FA2YwxvubFWmFHP%2BcMUU2Vre%2BCMXmGdjpkOq11HRmW6eqVUHiOshrokvXxaW2qPCC%2BKHbpXC1ZKSfoVMElcnY%2FC8Rf2Nu%2FeWh2K3LoONA1qK6Q6R%2FSLTVimfq2jDJm63ABjqkATeXKQmmUXhLok%2FbHIUl1yjvlf9q9jBYyF9ofh1NpgtnGBrKKvAM5zCSQj3cwKwHf2Klw06E0WzkF6O6nvSs1Y21MR4E90KUJHc5PFwUacFF7V%2FfO6zrmorQsOmJsphbkrCHuKfjqrHlDs%2Bmx%2BSEFfiCpthDNob%2Fb%2FqKm5Iq6fKlC6jmGgwzKtxtg3YaLLOyul%2F148FqVIHhrd8%2BCjYOVp0JqZop&X-Amz-Signature=aa8c7d940cb5558748eb954a260efd1a391d35fa922388e0d33a2a4576612606&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VRLU2SM%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJyt8J3dF7JgMLjNsu5vrWVjzp50e%2B44rVUyiMwrCK%2BQIhAMHD%2B9Ngr2jkXqsilkM6NLtCu7xrFAEQApeQCL65gkIeKv8DCCoQABoMNjM3NDIzMTgzODA1IgxkvA7PGT2kjrUHshsq3APmeM92BkqRY55mf6JvbTAmak4Xl8%2FOKJfly5Pk7lV47H9fGgeN9RKu5Y9%2F0tNoR57yR4db22cD2MoaSuEubBHvVMJzGTq%2FltTAcLIcNGLYN23WJ3bQaYLR4swEnBQTl5WGH76RbAFRPfaR2lZc23IR%2FJx841k5tYOxwLHf5YMVAH701p%2ByDGDT24qADKAqABBKLpZ3ZCW6CeCVujndRN%2BhuAxRifWGrXIE%2FWMfg4cGnuHTsL0ygXNitmFqQJVP0cpPjM%2BSc3Q%2FpPYQsuCOaBTJgu5Af8mzymTmHip2Lm78e7Qekr%2FKCXV5g9qKbQe1O%2Ft0pQLWnUgI3vz8vTXFcqjr6yDUA%2BxZhXRiH1oRZyRnLCNKibADjf4zWGGTs8hyqnAhTTAQBkdw4DENQjMquN4WsYwgRX1Tbg6UGSqXasxHqOKbYxVidr9%2B%2B6XyLwfpL6t89bxUnquRfTITpUlsa3anjm1I7QR49T971bVgSlbm%2F7kQ3%2FaRy9zt%2B%2FiziCi0jvZ%2FA2YwxvubFWmFHP%2BcMUU2Vre%2BCMXmGdjpkOq11HRmW6eqVUHiOshrokvXxaW2qPCC%2BKHbpXC1ZKSfoVMElcnY%2FC8Rf2Nu%2FeWh2K3LoONA1qK6Q6R%2FSLTVimfq2jDJm63ABjqkATeXKQmmUXhLok%2FbHIUl1yjvlf9q9jBYyF9ofh1NpgtnGBrKKvAM5zCSQj3cwKwHf2Klw06E0WzkF6O6nvSs1Y21MR4E90KUJHc5PFwUacFF7V%2FfO6zrmorQsOmJsphbkrCHuKfjqrHlDs%2Bmx%2BSEFfiCpthDNob%2Fb%2FqKm5Iq6fKlC6jmGgwzKtxtg3YaLLOyul%2F148FqVIHhrd8%2BCjYOVp0JqZop&X-Amz-Signature=830b1d95cc0778a2fccaba6e1912d2d10389cccc73a2a54f5e1dbceb7d559257&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VRLU2SM%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJyt8J3dF7JgMLjNsu5vrWVjzp50e%2B44rVUyiMwrCK%2BQIhAMHD%2B9Ngr2jkXqsilkM6NLtCu7xrFAEQApeQCL65gkIeKv8DCCoQABoMNjM3NDIzMTgzODA1IgxkvA7PGT2kjrUHshsq3APmeM92BkqRY55mf6JvbTAmak4Xl8%2FOKJfly5Pk7lV47H9fGgeN9RKu5Y9%2F0tNoR57yR4db22cD2MoaSuEubBHvVMJzGTq%2FltTAcLIcNGLYN23WJ3bQaYLR4swEnBQTl5WGH76RbAFRPfaR2lZc23IR%2FJx841k5tYOxwLHf5YMVAH701p%2ByDGDT24qADKAqABBKLpZ3ZCW6CeCVujndRN%2BhuAxRifWGrXIE%2FWMfg4cGnuHTsL0ygXNitmFqQJVP0cpPjM%2BSc3Q%2FpPYQsuCOaBTJgu5Af8mzymTmHip2Lm78e7Qekr%2FKCXV5g9qKbQe1O%2Ft0pQLWnUgI3vz8vTXFcqjr6yDUA%2BxZhXRiH1oRZyRnLCNKibADjf4zWGGTs8hyqnAhTTAQBkdw4DENQjMquN4WsYwgRX1Tbg6UGSqXasxHqOKbYxVidr9%2B%2B6XyLwfpL6t89bxUnquRfTITpUlsa3anjm1I7QR49T971bVgSlbm%2F7kQ3%2FaRy9zt%2B%2FiziCi0jvZ%2FA2YwxvubFWmFHP%2BcMUU2Vre%2BCMXmGdjpkOq11HRmW6eqVUHiOshrokvXxaW2qPCC%2BKHbpXC1ZKSfoVMElcnY%2FC8Rf2Nu%2FeWh2K3LoONA1qK6Q6R%2FSLTVimfq2jDJm63ABjqkATeXKQmmUXhLok%2FbHIUl1yjvlf9q9jBYyF9ofh1NpgtnGBrKKvAM5zCSQj3cwKwHf2Klw06E0WzkF6O6nvSs1Y21MR4E90KUJHc5PFwUacFF7V%2FfO6zrmorQsOmJsphbkrCHuKfjqrHlDs%2Bmx%2BSEFfiCpthDNob%2Fb%2FqKm5Iq6fKlC6jmGgwzKtxtg3YaLLOyul%2F148FqVIHhrd8%2BCjYOVp0JqZop&X-Amz-Signature=9ba8c1f40918c55926a21af1f13fe8718d98d373330a2cbf3579d1241c27465f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VRLU2SM%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJyt8J3dF7JgMLjNsu5vrWVjzp50e%2B44rVUyiMwrCK%2BQIhAMHD%2B9Ngr2jkXqsilkM6NLtCu7xrFAEQApeQCL65gkIeKv8DCCoQABoMNjM3NDIzMTgzODA1IgxkvA7PGT2kjrUHshsq3APmeM92BkqRY55mf6JvbTAmak4Xl8%2FOKJfly5Pk7lV47H9fGgeN9RKu5Y9%2F0tNoR57yR4db22cD2MoaSuEubBHvVMJzGTq%2FltTAcLIcNGLYN23WJ3bQaYLR4swEnBQTl5WGH76RbAFRPfaR2lZc23IR%2FJx841k5tYOxwLHf5YMVAH701p%2ByDGDT24qADKAqABBKLpZ3ZCW6CeCVujndRN%2BhuAxRifWGrXIE%2FWMfg4cGnuHTsL0ygXNitmFqQJVP0cpPjM%2BSc3Q%2FpPYQsuCOaBTJgu5Af8mzymTmHip2Lm78e7Qekr%2FKCXV5g9qKbQe1O%2Ft0pQLWnUgI3vz8vTXFcqjr6yDUA%2BxZhXRiH1oRZyRnLCNKibADjf4zWGGTs8hyqnAhTTAQBkdw4DENQjMquN4WsYwgRX1Tbg6UGSqXasxHqOKbYxVidr9%2B%2B6XyLwfpL6t89bxUnquRfTITpUlsa3anjm1I7QR49T971bVgSlbm%2F7kQ3%2FaRy9zt%2B%2FiziCi0jvZ%2FA2YwxvubFWmFHP%2BcMUU2Vre%2BCMXmGdjpkOq11HRmW6eqVUHiOshrokvXxaW2qPCC%2BKHbpXC1ZKSfoVMElcnY%2FC8Rf2Nu%2FeWh2K3LoONA1qK6Q6R%2FSLTVimfq2jDJm63ABjqkATeXKQmmUXhLok%2FbHIUl1yjvlf9q9jBYyF9ofh1NpgtnGBrKKvAM5zCSQj3cwKwHf2Klw06E0WzkF6O6nvSs1Y21MR4E90KUJHc5PFwUacFF7V%2FfO6zrmorQsOmJsphbkrCHuKfjqrHlDs%2Bmx%2BSEFfiCpthDNob%2Fb%2FqKm5Iq6fKlC6jmGgwzKtxtg3YaLLOyul%2F148FqVIHhrd8%2BCjYOVp0JqZop&X-Amz-Signature=338ad882d95d8408acc928e19994396c38602de4904b55871f283d326cc87aec&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
