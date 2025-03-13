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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHO2VQKF%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdv85sFzIFR0%2Bu3WdvoMH1nnwOz%2Fr0Pypygjx0bOXEYAiBm%2BGvrr38gesgJPyB5ztJi7kdslvL2pf7%2FIJCC4AyCNCqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOfnF3%2Blrd502OBQdKtwDt%2Fn8ynJA3QsvuVNN3uD5Oexfj6xH%2FZF1LgLzbIgR3ZBMdp%2FrLDaVsTY23mOQuIUw%2BIGhm%2FcP%2BtBIRpCsY0APJK833r2%2FRRXop8IjalCC077hLKsbuxuQLPs7YmnQ2yPEAuX%2B6RqpjQ3zX1vil12Eh6tSBBX4otBxY8qX0O4KT%2F%2FbUkSEE2k3vWx%2FeTIpHwcJD94BeMFwf5vHdR6f1bTMAiDAdZMp9un3zerckFPKlIFrxPumZQRUBoL%2BYNkGeYxQPuo1elpGyF7ywIvarhfBR8%2FWHYnkI98ITyOSDS6RIcr1ClvWzlo7jEHSecKzFhOzjb%2BGP8MLj05fK524AW52%2BAX9d%2F5%2F9Z9BwOnLXwB%2Beuq6QZnSoc4swo4LA8bGK6nUcT1diE44OWt2HNv4pO7eddKJnSsKaT8sEZ800O8kROmCNogINa6kfh3DbzOHwnc3Hd5pQBEJgt%2B0OiL4YASF4hQSgG8uOCMulS%2BB0TA3YIYX%2F2gVJxqnPr3yv3hdbFHK%2FOW8DIpI0irAI3MiANFEqGo%2FDQCbZzBAEf8A8DkNYjx%2BDp6hMnFC6yQ%2BzJDnSqMgruK58y%2BCslCxLuCC6KgME57%2FIA5nym4md%2Byu2dTiyJfEhkKr0p9Vl2TUomwwyuDIvgY6pgH05HvmhLw1wtdLoRdF7iOqOkFTGJ94tvFovjSnnJ2LP81hNVJdUdzEgqaZJ0EDqGcX9cPotQS8YpHkJ5k4yNq8y%2Fcobk1OdqUfLXxqIwGV94GCbjYmRSDVt2R0L4V6Azsop%2FdwQXDruCGLzG0G%2FgsTKbXaySWFb48w5WC%2BGBN0mofZuqeIkx9TTu4WqpbxlJtE66RAMnRyUD4pdnVxAWlQZ1eHHQie&X-Amz-Signature=7794ff40d3a87558a3ce12ff666a4bd24ecbb6aaf6d976336a34902e76c27c85&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHO2VQKF%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdv85sFzIFR0%2Bu3WdvoMH1nnwOz%2Fr0Pypygjx0bOXEYAiBm%2BGvrr38gesgJPyB5ztJi7kdslvL2pf7%2FIJCC4AyCNCqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOfnF3%2Blrd502OBQdKtwDt%2Fn8ynJA3QsvuVNN3uD5Oexfj6xH%2FZF1LgLzbIgR3ZBMdp%2FrLDaVsTY23mOQuIUw%2BIGhm%2FcP%2BtBIRpCsY0APJK833r2%2FRRXop8IjalCC077hLKsbuxuQLPs7YmnQ2yPEAuX%2B6RqpjQ3zX1vil12Eh6tSBBX4otBxY8qX0O4KT%2F%2FbUkSEE2k3vWx%2FeTIpHwcJD94BeMFwf5vHdR6f1bTMAiDAdZMp9un3zerckFPKlIFrxPumZQRUBoL%2BYNkGeYxQPuo1elpGyF7ywIvarhfBR8%2FWHYnkI98ITyOSDS6RIcr1ClvWzlo7jEHSecKzFhOzjb%2BGP8MLj05fK524AW52%2BAX9d%2F5%2F9Z9BwOnLXwB%2Beuq6QZnSoc4swo4LA8bGK6nUcT1diE44OWt2HNv4pO7eddKJnSsKaT8sEZ800O8kROmCNogINa6kfh3DbzOHwnc3Hd5pQBEJgt%2B0OiL4YASF4hQSgG8uOCMulS%2BB0TA3YIYX%2F2gVJxqnPr3yv3hdbFHK%2FOW8DIpI0irAI3MiANFEqGo%2FDQCbZzBAEf8A8DkNYjx%2BDp6hMnFC6yQ%2BzJDnSqMgruK58y%2BCslCxLuCC6KgME57%2FIA5nym4md%2Byu2dTiyJfEhkKr0p9Vl2TUomwwyuDIvgY6pgH05HvmhLw1wtdLoRdF7iOqOkFTGJ94tvFovjSnnJ2LP81hNVJdUdzEgqaZJ0EDqGcX9cPotQS8YpHkJ5k4yNq8y%2Fcobk1OdqUfLXxqIwGV94GCbjYmRSDVt2R0L4V6Azsop%2FdwQXDruCGLzG0G%2FgsTKbXaySWFb48w5WC%2BGBN0mofZuqeIkx9TTu4WqpbxlJtE66RAMnRyUD4pdnVxAWlQZ1eHHQie&X-Amz-Signature=7be8e29c21cd85b1a3addbabeaefc2f866554a814df7f4aef8b1f8d5e6a1f459&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHO2VQKF%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdv85sFzIFR0%2Bu3WdvoMH1nnwOz%2Fr0Pypygjx0bOXEYAiBm%2BGvrr38gesgJPyB5ztJi7kdslvL2pf7%2FIJCC4AyCNCqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOfnF3%2Blrd502OBQdKtwDt%2Fn8ynJA3QsvuVNN3uD5Oexfj6xH%2FZF1LgLzbIgR3ZBMdp%2FrLDaVsTY23mOQuIUw%2BIGhm%2FcP%2BtBIRpCsY0APJK833r2%2FRRXop8IjalCC077hLKsbuxuQLPs7YmnQ2yPEAuX%2B6RqpjQ3zX1vil12Eh6tSBBX4otBxY8qX0O4KT%2F%2FbUkSEE2k3vWx%2FeTIpHwcJD94BeMFwf5vHdR6f1bTMAiDAdZMp9un3zerckFPKlIFrxPumZQRUBoL%2BYNkGeYxQPuo1elpGyF7ywIvarhfBR8%2FWHYnkI98ITyOSDS6RIcr1ClvWzlo7jEHSecKzFhOzjb%2BGP8MLj05fK524AW52%2BAX9d%2F5%2F9Z9BwOnLXwB%2Beuq6QZnSoc4swo4LA8bGK6nUcT1diE44OWt2HNv4pO7eddKJnSsKaT8sEZ800O8kROmCNogINa6kfh3DbzOHwnc3Hd5pQBEJgt%2B0OiL4YASF4hQSgG8uOCMulS%2BB0TA3YIYX%2F2gVJxqnPr3yv3hdbFHK%2FOW8DIpI0irAI3MiANFEqGo%2FDQCbZzBAEf8A8DkNYjx%2BDp6hMnFC6yQ%2BzJDnSqMgruK58y%2BCslCxLuCC6KgME57%2FIA5nym4md%2Byu2dTiyJfEhkKr0p9Vl2TUomwwyuDIvgY6pgH05HvmhLw1wtdLoRdF7iOqOkFTGJ94tvFovjSnnJ2LP81hNVJdUdzEgqaZJ0EDqGcX9cPotQS8YpHkJ5k4yNq8y%2Fcobk1OdqUfLXxqIwGV94GCbjYmRSDVt2R0L4V6Azsop%2FdwQXDruCGLzG0G%2FgsTKbXaySWFb48w5WC%2BGBN0mofZuqeIkx9TTu4WqpbxlJtE66RAMnRyUD4pdnVxAWlQZ1eHHQie&X-Amz-Signature=70d79c0676e2c64ae49f6294a5e01db111ad31461890030ea24673ea27aa508d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHO2VQKF%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdv85sFzIFR0%2Bu3WdvoMH1nnwOz%2Fr0Pypygjx0bOXEYAiBm%2BGvrr38gesgJPyB5ztJi7kdslvL2pf7%2FIJCC4AyCNCqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOfnF3%2Blrd502OBQdKtwDt%2Fn8ynJA3QsvuVNN3uD5Oexfj6xH%2FZF1LgLzbIgR3ZBMdp%2FrLDaVsTY23mOQuIUw%2BIGhm%2FcP%2BtBIRpCsY0APJK833r2%2FRRXop8IjalCC077hLKsbuxuQLPs7YmnQ2yPEAuX%2B6RqpjQ3zX1vil12Eh6tSBBX4otBxY8qX0O4KT%2F%2FbUkSEE2k3vWx%2FeTIpHwcJD94BeMFwf5vHdR6f1bTMAiDAdZMp9un3zerckFPKlIFrxPumZQRUBoL%2BYNkGeYxQPuo1elpGyF7ywIvarhfBR8%2FWHYnkI98ITyOSDS6RIcr1ClvWzlo7jEHSecKzFhOzjb%2BGP8MLj05fK524AW52%2BAX9d%2F5%2F9Z9BwOnLXwB%2Beuq6QZnSoc4swo4LA8bGK6nUcT1diE44OWt2HNv4pO7eddKJnSsKaT8sEZ800O8kROmCNogINa6kfh3DbzOHwnc3Hd5pQBEJgt%2B0OiL4YASF4hQSgG8uOCMulS%2BB0TA3YIYX%2F2gVJxqnPr3yv3hdbFHK%2FOW8DIpI0irAI3MiANFEqGo%2FDQCbZzBAEf8A8DkNYjx%2BDp6hMnFC6yQ%2BzJDnSqMgruK58y%2BCslCxLuCC6KgME57%2FIA5nym4md%2Byu2dTiyJfEhkKr0p9Vl2TUomwwyuDIvgY6pgH05HvmhLw1wtdLoRdF7iOqOkFTGJ94tvFovjSnnJ2LP81hNVJdUdzEgqaZJ0EDqGcX9cPotQS8YpHkJ5k4yNq8y%2Fcobk1OdqUfLXxqIwGV94GCbjYmRSDVt2R0L4V6Azsop%2FdwQXDruCGLzG0G%2FgsTKbXaySWFb48w5WC%2BGBN0mofZuqeIkx9TTu4WqpbxlJtE66RAMnRyUD4pdnVxAWlQZ1eHHQie&X-Amz-Signature=dec4e7db3032a7bc271d79953e3bf778df01625b94862acd6e3a79c83db37be0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHO2VQKF%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdv85sFzIFR0%2Bu3WdvoMH1nnwOz%2Fr0Pypygjx0bOXEYAiBm%2BGvrr38gesgJPyB5ztJi7kdslvL2pf7%2FIJCC4AyCNCqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOfnF3%2Blrd502OBQdKtwDt%2Fn8ynJA3QsvuVNN3uD5Oexfj6xH%2FZF1LgLzbIgR3ZBMdp%2FrLDaVsTY23mOQuIUw%2BIGhm%2FcP%2BtBIRpCsY0APJK833r2%2FRRXop8IjalCC077hLKsbuxuQLPs7YmnQ2yPEAuX%2B6RqpjQ3zX1vil12Eh6tSBBX4otBxY8qX0O4KT%2F%2FbUkSEE2k3vWx%2FeTIpHwcJD94BeMFwf5vHdR6f1bTMAiDAdZMp9un3zerckFPKlIFrxPumZQRUBoL%2BYNkGeYxQPuo1elpGyF7ywIvarhfBR8%2FWHYnkI98ITyOSDS6RIcr1ClvWzlo7jEHSecKzFhOzjb%2BGP8MLj05fK524AW52%2BAX9d%2F5%2F9Z9BwOnLXwB%2Beuq6QZnSoc4swo4LA8bGK6nUcT1diE44OWt2HNv4pO7eddKJnSsKaT8sEZ800O8kROmCNogINa6kfh3DbzOHwnc3Hd5pQBEJgt%2B0OiL4YASF4hQSgG8uOCMulS%2BB0TA3YIYX%2F2gVJxqnPr3yv3hdbFHK%2FOW8DIpI0irAI3MiANFEqGo%2FDQCbZzBAEf8A8DkNYjx%2BDp6hMnFC6yQ%2BzJDnSqMgruK58y%2BCslCxLuCC6KgME57%2FIA5nym4md%2Byu2dTiyJfEhkKr0p9Vl2TUomwwyuDIvgY6pgH05HvmhLw1wtdLoRdF7iOqOkFTGJ94tvFovjSnnJ2LP81hNVJdUdzEgqaZJ0EDqGcX9cPotQS8YpHkJ5k4yNq8y%2Fcobk1OdqUfLXxqIwGV94GCbjYmRSDVt2R0L4V6Azsop%2FdwQXDruCGLzG0G%2FgsTKbXaySWFb48w5WC%2BGBN0mofZuqeIkx9TTu4WqpbxlJtE66RAMnRyUD4pdnVxAWlQZ1eHHQie&X-Amz-Signature=1085be186cb83b61d32a3c9b83d584f2efacab95bf9b667db95644d64b6d6992&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHO2VQKF%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdv85sFzIFR0%2Bu3WdvoMH1nnwOz%2Fr0Pypygjx0bOXEYAiBm%2BGvrr38gesgJPyB5ztJi7kdslvL2pf7%2FIJCC4AyCNCqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOfnF3%2Blrd502OBQdKtwDt%2Fn8ynJA3QsvuVNN3uD5Oexfj6xH%2FZF1LgLzbIgR3ZBMdp%2FrLDaVsTY23mOQuIUw%2BIGhm%2FcP%2BtBIRpCsY0APJK833r2%2FRRXop8IjalCC077hLKsbuxuQLPs7YmnQ2yPEAuX%2B6RqpjQ3zX1vil12Eh6tSBBX4otBxY8qX0O4KT%2F%2FbUkSEE2k3vWx%2FeTIpHwcJD94BeMFwf5vHdR6f1bTMAiDAdZMp9un3zerckFPKlIFrxPumZQRUBoL%2BYNkGeYxQPuo1elpGyF7ywIvarhfBR8%2FWHYnkI98ITyOSDS6RIcr1ClvWzlo7jEHSecKzFhOzjb%2BGP8MLj05fK524AW52%2BAX9d%2F5%2F9Z9BwOnLXwB%2Beuq6QZnSoc4swo4LA8bGK6nUcT1diE44OWt2HNv4pO7eddKJnSsKaT8sEZ800O8kROmCNogINa6kfh3DbzOHwnc3Hd5pQBEJgt%2B0OiL4YASF4hQSgG8uOCMulS%2BB0TA3YIYX%2F2gVJxqnPr3yv3hdbFHK%2FOW8DIpI0irAI3MiANFEqGo%2FDQCbZzBAEf8A8DkNYjx%2BDp6hMnFC6yQ%2BzJDnSqMgruK58y%2BCslCxLuCC6KgME57%2FIA5nym4md%2Byu2dTiyJfEhkKr0p9Vl2TUomwwyuDIvgY6pgH05HvmhLw1wtdLoRdF7iOqOkFTGJ94tvFovjSnnJ2LP81hNVJdUdzEgqaZJ0EDqGcX9cPotQS8YpHkJ5k4yNq8y%2Fcobk1OdqUfLXxqIwGV94GCbjYmRSDVt2R0L4V6Azsop%2FdwQXDruCGLzG0G%2FgsTKbXaySWFb48w5WC%2BGBN0mofZuqeIkx9TTu4WqpbxlJtE66RAMnRyUD4pdnVxAWlQZ1eHHQie&X-Amz-Signature=cd2277c924fcda655300452ff9dcb03d09a2b59a6778a102340a24e1d08730b0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHO2VQKF%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdv85sFzIFR0%2Bu3WdvoMH1nnwOz%2Fr0Pypygjx0bOXEYAiBm%2BGvrr38gesgJPyB5ztJi7kdslvL2pf7%2FIJCC4AyCNCqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOfnF3%2Blrd502OBQdKtwDt%2Fn8ynJA3QsvuVNN3uD5Oexfj6xH%2FZF1LgLzbIgR3ZBMdp%2FrLDaVsTY23mOQuIUw%2BIGhm%2FcP%2BtBIRpCsY0APJK833r2%2FRRXop8IjalCC077hLKsbuxuQLPs7YmnQ2yPEAuX%2B6RqpjQ3zX1vil12Eh6tSBBX4otBxY8qX0O4KT%2F%2FbUkSEE2k3vWx%2FeTIpHwcJD94BeMFwf5vHdR6f1bTMAiDAdZMp9un3zerckFPKlIFrxPumZQRUBoL%2BYNkGeYxQPuo1elpGyF7ywIvarhfBR8%2FWHYnkI98ITyOSDS6RIcr1ClvWzlo7jEHSecKzFhOzjb%2BGP8MLj05fK524AW52%2BAX9d%2F5%2F9Z9BwOnLXwB%2Beuq6QZnSoc4swo4LA8bGK6nUcT1diE44OWt2HNv4pO7eddKJnSsKaT8sEZ800O8kROmCNogINa6kfh3DbzOHwnc3Hd5pQBEJgt%2B0OiL4YASF4hQSgG8uOCMulS%2BB0TA3YIYX%2F2gVJxqnPr3yv3hdbFHK%2FOW8DIpI0irAI3MiANFEqGo%2FDQCbZzBAEf8A8DkNYjx%2BDp6hMnFC6yQ%2BzJDnSqMgruK58y%2BCslCxLuCC6KgME57%2FIA5nym4md%2Byu2dTiyJfEhkKr0p9Vl2TUomwwyuDIvgY6pgH05HvmhLw1wtdLoRdF7iOqOkFTGJ94tvFovjSnnJ2LP81hNVJdUdzEgqaZJ0EDqGcX9cPotQS8YpHkJ5k4yNq8y%2Fcobk1OdqUfLXxqIwGV94GCbjYmRSDVt2R0L4V6Azsop%2FdwQXDruCGLzG0G%2FgsTKbXaySWFb48w5WC%2BGBN0mofZuqeIkx9TTu4WqpbxlJtE66RAMnRyUD4pdnVxAWlQZ1eHHQie&X-Amz-Signature=aed80d8f68217edac4b9204faf24fe066261b06e9cf7cc4625be9c9a925ee1ce&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
