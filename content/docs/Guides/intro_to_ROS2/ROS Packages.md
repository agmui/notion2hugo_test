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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR5ECVRY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCICfFBIqs%2BBnAN5BHqceWDnMtgDIM%2FwOetdUE4GUjIK8cAiAjU5KoKHHDIfN9o9TIMmPOyaYBvcG4HA9KsoB6LXnSYCqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt5W%2FdAfVB7WMjvK2KtwDY4Vyr1ILtrL3wOC1tpWT4vCNqg4r98gXVcOyEBpFd3D2J9kwt2IRjD11Lz0l1VHBhi5a1%2FWzjD99JxAXMkS9Rlv9lcO9W7AX3OwxRuN6%2F%2Fd269e8BzNpcvt0IUrTTUjrKaZWyyHKJ%2FFiry54IRsWks5m%2B1kM8VWSd1kpnkPmoZaILXnoze%2FcuA9ssx4BNmX49eluG6B3zYurCE0ER6RNvNMIVdXrjjLBg%2FzsWalnzopWHkyNzcaf9w5sg3oFB0NT%2FcpiygR4hWRfbsuqtQLmSN7mV6r35aJewHDqirWYmuQ9%2BaAGP9n3aoNd8QkIlFY2CYJy%2BHlLqaFDT%2FKBTK5y95m5ebH56lO%2FEoPBFEwtZ8%2FI6Wg2dNh1E2imZy86ZDEaITaXPebtjFcuS8Tr0%2FdpIilky3tTBkyoi9CLWI7l%2Fk3GQJDhO5B5%2BZFV31jwQDI8QUKcr9f7xyBuZKWKOJPFw%2BYKtOE4WugPGkGW7lOnnAvHGgOUMoKRYlxNAYIzKbMq%2Fk7TSbz9DGFIqxREdFU0mXflyvKiHGnkmPK1DdpjDalKV4cQAxMdNEsReV3hsIyWwo6ymFbuLVFLHcbDuA0G3DYMkMnFnTn1J3jYZrRnDuacc0lvMKzolLcAKykwtZP4wQY6pgGQteGeHBLiVoS0IYycdxJeW0KXVxwwSApg%2FjDMpZX61rE6LSuKSV6bicvbd%2FbgzOEndyik2o%2BOjiW0lZ49t0t7I05KE%2F44%2BGPSgmZ4lGIrU0cb31TBWAlq5kVsxmNTLXd%2BkSit%2Fnfax3qR1pJ%2FF8t5dBWhSy9Gz1tUlbmdUVCxpM6jnxZ%2Fgvf9Uf5PIT9eisWKMxiZeVKt3tHJyF6DLLaRLrd%2B%2BElM&X-Amz-Signature=1849b9a1ebcbfa1fe8e51be719b089b2eb76de39703952f256608551b4a63567&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR5ECVRY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCICfFBIqs%2BBnAN5BHqceWDnMtgDIM%2FwOetdUE4GUjIK8cAiAjU5KoKHHDIfN9o9TIMmPOyaYBvcG4HA9KsoB6LXnSYCqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt5W%2FdAfVB7WMjvK2KtwDY4Vyr1ILtrL3wOC1tpWT4vCNqg4r98gXVcOyEBpFd3D2J9kwt2IRjD11Lz0l1VHBhi5a1%2FWzjD99JxAXMkS9Rlv9lcO9W7AX3OwxRuN6%2F%2Fd269e8BzNpcvt0IUrTTUjrKaZWyyHKJ%2FFiry54IRsWks5m%2B1kM8VWSd1kpnkPmoZaILXnoze%2FcuA9ssx4BNmX49eluG6B3zYurCE0ER6RNvNMIVdXrjjLBg%2FzsWalnzopWHkyNzcaf9w5sg3oFB0NT%2FcpiygR4hWRfbsuqtQLmSN7mV6r35aJewHDqirWYmuQ9%2BaAGP9n3aoNd8QkIlFY2CYJy%2BHlLqaFDT%2FKBTK5y95m5ebH56lO%2FEoPBFEwtZ8%2FI6Wg2dNh1E2imZy86ZDEaITaXPebtjFcuS8Tr0%2FdpIilky3tTBkyoi9CLWI7l%2Fk3GQJDhO5B5%2BZFV31jwQDI8QUKcr9f7xyBuZKWKOJPFw%2BYKtOE4WugPGkGW7lOnnAvHGgOUMoKRYlxNAYIzKbMq%2Fk7TSbz9DGFIqxREdFU0mXflyvKiHGnkmPK1DdpjDalKV4cQAxMdNEsReV3hsIyWwo6ymFbuLVFLHcbDuA0G3DYMkMnFnTn1J3jYZrRnDuacc0lvMKzolLcAKykwtZP4wQY6pgGQteGeHBLiVoS0IYycdxJeW0KXVxwwSApg%2FjDMpZX61rE6LSuKSV6bicvbd%2FbgzOEndyik2o%2BOjiW0lZ49t0t7I05KE%2F44%2BGPSgmZ4lGIrU0cb31TBWAlq5kVsxmNTLXd%2BkSit%2Fnfax3qR1pJ%2FF8t5dBWhSy9Gz1tUlbmdUVCxpM6jnxZ%2Fgvf9Uf5PIT9eisWKMxiZeVKt3tHJyF6DLLaRLrd%2B%2BElM&X-Amz-Signature=ee3ef679199cfe07bd60062ac9e8e48f07d8f807feb15ee494a2a5900367b27b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR5ECVRY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCICfFBIqs%2BBnAN5BHqceWDnMtgDIM%2FwOetdUE4GUjIK8cAiAjU5KoKHHDIfN9o9TIMmPOyaYBvcG4HA9KsoB6LXnSYCqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt5W%2FdAfVB7WMjvK2KtwDY4Vyr1ILtrL3wOC1tpWT4vCNqg4r98gXVcOyEBpFd3D2J9kwt2IRjD11Lz0l1VHBhi5a1%2FWzjD99JxAXMkS9Rlv9lcO9W7AX3OwxRuN6%2F%2Fd269e8BzNpcvt0IUrTTUjrKaZWyyHKJ%2FFiry54IRsWks5m%2B1kM8VWSd1kpnkPmoZaILXnoze%2FcuA9ssx4BNmX49eluG6B3zYurCE0ER6RNvNMIVdXrjjLBg%2FzsWalnzopWHkyNzcaf9w5sg3oFB0NT%2FcpiygR4hWRfbsuqtQLmSN7mV6r35aJewHDqirWYmuQ9%2BaAGP9n3aoNd8QkIlFY2CYJy%2BHlLqaFDT%2FKBTK5y95m5ebH56lO%2FEoPBFEwtZ8%2FI6Wg2dNh1E2imZy86ZDEaITaXPebtjFcuS8Tr0%2FdpIilky3tTBkyoi9CLWI7l%2Fk3GQJDhO5B5%2BZFV31jwQDI8QUKcr9f7xyBuZKWKOJPFw%2BYKtOE4WugPGkGW7lOnnAvHGgOUMoKRYlxNAYIzKbMq%2Fk7TSbz9DGFIqxREdFU0mXflyvKiHGnkmPK1DdpjDalKV4cQAxMdNEsReV3hsIyWwo6ymFbuLVFLHcbDuA0G3DYMkMnFnTn1J3jYZrRnDuacc0lvMKzolLcAKykwtZP4wQY6pgGQteGeHBLiVoS0IYycdxJeW0KXVxwwSApg%2FjDMpZX61rE6LSuKSV6bicvbd%2FbgzOEndyik2o%2BOjiW0lZ49t0t7I05KE%2F44%2BGPSgmZ4lGIrU0cb31TBWAlq5kVsxmNTLXd%2BkSit%2Fnfax3qR1pJ%2FF8t5dBWhSy9Gz1tUlbmdUVCxpM6jnxZ%2Fgvf9Uf5PIT9eisWKMxiZeVKt3tHJyF6DLLaRLrd%2B%2BElM&X-Amz-Signature=94f40fa73b5f2403d763ecc9742aff4bc228589b07978c2d7cb20842c6af02c0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR5ECVRY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCICfFBIqs%2BBnAN5BHqceWDnMtgDIM%2FwOetdUE4GUjIK8cAiAjU5KoKHHDIfN9o9TIMmPOyaYBvcG4HA9KsoB6LXnSYCqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt5W%2FdAfVB7WMjvK2KtwDY4Vyr1ILtrL3wOC1tpWT4vCNqg4r98gXVcOyEBpFd3D2J9kwt2IRjD11Lz0l1VHBhi5a1%2FWzjD99JxAXMkS9Rlv9lcO9W7AX3OwxRuN6%2F%2Fd269e8BzNpcvt0IUrTTUjrKaZWyyHKJ%2FFiry54IRsWks5m%2B1kM8VWSd1kpnkPmoZaILXnoze%2FcuA9ssx4BNmX49eluG6B3zYurCE0ER6RNvNMIVdXrjjLBg%2FzsWalnzopWHkyNzcaf9w5sg3oFB0NT%2FcpiygR4hWRfbsuqtQLmSN7mV6r35aJewHDqirWYmuQ9%2BaAGP9n3aoNd8QkIlFY2CYJy%2BHlLqaFDT%2FKBTK5y95m5ebH56lO%2FEoPBFEwtZ8%2FI6Wg2dNh1E2imZy86ZDEaITaXPebtjFcuS8Tr0%2FdpIilky3tTBkyoi9CLWI7l%2Fk3GQJDhO5B5%2BZFV31jwQDI8QUKcr9f7xyBuZKWKOJPFw%2BYKtOE4WugPGkGW7lOnnAvHGgOUMoKRYlxNAYIzKbMq%2Fk7TSbz9DGFIqxREdFU0mXflyvKiHGnkmPK1DdpjDalKV4cQAxMdNEsReV3hsIyWwo6ymFbuLVFLHcbDuA0G3DYMkMnFnTn1J3jYZrRnDuacc0lvMKzolLcAKykwtZP4wQY6pgGQteGeHBLiVoS0IYycdxJeW0KXVxwwSApg%2FjDMpZX61rE6LSuKSV6bicvbd%2FbgzOEndyik2o%2BOjiW0lZ49t0t7I05KE%2F44%2BGPSgmZ4lGIrU0cb31TBWAlq5kVsxmNTLXd%2BkSit%2Fnfax3qR1pJ%2FF8t5dBWhSy9Gz1tUlbmdUVCxpM6jnxZ%2Fgvf9Uf5PIT9eisWKMxiZeVKt3tHJyF6DLLaRLrd%2B%2BElM&X-Amz-Signature=2327ec9c1d3e382440cbf12460c63ec81d9bfcd8d278268da568b02f7791031b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR5ECVRY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCICfFBIqs%2BBnAN5BHqceWDnMtgDIM%2FwOetdUE4GUjIK8cAiAjU5KoKHHDIfN9o9TIMmPOyaYBvcG4HA9KsoB6LXnSYCqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt5W%2FdAfVB7WMjvK2KtwDY4Vyr1ILtrL3wOC1tpWT4vCNqg4r98gXVcOyEBpFd3D2J9kwt2IRjD11Lz0l1VHBhi5a1%2FWzjD99JxAXMkS9Rlv9lcO9W7AX3OwxRuN6%2F%2Fd269e8BzNpcvt0IUrTTUjrKaZWyyHKJ%2FFiry54IRsWks5m%2B1kM8VWSd1kpnkPmoZaILXnoze%2FcuA9ssx4BNmX49eluG6B3zYurCE0ER6RNvNMIVdXrjjLBg%2FzsWalnzopWHkyNzcaf9w5sg3oFB0NT%2FcpiygR4hWRfbsuqtQLmSN7mV6r35aJewHDqirWYmuQ9%2BaAGP9n3aoNd8QkIlFY2CYJy%2BHlLqaFDT%2FKBTK5y95m5ebH56lO%2FEoPBFEwtZ8%2FI6Wg2dNh1E2imZy86ZDEaITaXPebtjFcuS8Tr0%2FdpIilky3tTBkyoi9CLWI7l%2Fk3GQJDhO5B5%2BZFV31jwQDI8QUKcr9f7xyBuZKWKOJPFw%2BYKtOE4WugPGkGW7lOnnAvHGgOUMoKRYlxNAYIzKbMq%2Fk7TSbz9DGFIqxREdFU0mXflyvKiHGnkmPK1DdpjDalKV4cQAxMdNEsReV3hsIyWwo6ymFbuLVFLHcbDuA0G3DYMkMnFnTn1J3jYZrRnDuacc0lvMKzolLcAKykwtZP4wQY6pgGQteGeHBLiVoS0IYycdxJeW0KXVxwwSApg%2FjDMpZX61rE6LSuKSV6bicvbd%2FbgzOEndyik2o%2BOjiW0lZ49t0t7I05KE%2F44%2BGPSgmZ4lGIrU0cb31TBWAlq5kVsxmNTLXd%2BkSit%2Fnfax3qR1pJ%2FF8t5dBWhSy9Gz1tUlbmdUVCxpM6jnxZ%2Fgvf9Uf5PIT9eisWKMxiZeVKt3tHJyF6DLLaRLrd%2B%2BElM&X-Amz-Signature=d49573239917ec685d8cc5e90fdcef7c18be36dbe6708694a1872f8fae2f7a7a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR5ECVRY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCICfFBIqs%2BBnAN5BHqceWDnMtgDIM%2FwOetdUE4GUjIK8cAiAjU5KoKHHDIfN9o9TIMmPOyaYBvcG4HA9KsoB6LXnSYCqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt5W%2FdAfVB7WMjvK2KtwDY4Vyr1ILtrL3wOC1tpWT4vCNqg4r98gXVcOyEBpFd3D2J9kwt2IRjD11Lz0l1VHBhi5a1%2FWzjD99JxAXMkS9Rlv9lcO9W7AX3OwxRuN6%2F%2Fd269e8BzNpcvt0IUrTTUjrKaZWyyHKJ%2FFiry54IRsWks5m%2B1kM8VWSd1kpnkPmoZaILXnoze%2FcuA9ssx4BNmX49eluG6B3zYurCE0ER6RNvNMIVdXrjjLBg%2FzsWalnzopWHkyNzcaf9w5sg3oFB0NT%2FcpiygR4hWRfbsuqtQLmSN7mV6r35aJewHDqirWYmuQ9%2BaAGP9n3aoNd8QkIlFY2CYJy%2BHlLqaFDT%2FKBTK5y95m5ebH56lO%2FEoPBFEwtZ8%2FI6Wg2dNh1E2imZy86ZDEaITaXPebtjFcuS8Tr0%2FdpIilky3tTBkyoi9CLWI7l%2Fk3GQJDhO5B5%2BZFV31jwQDI8QUKcr9f7xyBuZKWKOJPFw%2BYKtOE4WugPGkGW7lOnnAvHGgOUMoKRYlxNAYIzKbMq%2Fk7TSbz9DGFIqxREdFU0mXflyvKiHGnkmPK1DdpjDalKV4cQAxMdNEsReV3hsIyWwo6ymFbuLVFLHcbDuA0G3DYMkMnFnTn1J3jYZrRnDuacc0lvMKzolLcAKykwtZP4wQY6pgGQteGeHBLiVoS0IYycdxJeW0KXVxwwSApg%2FjDMpZX61rE6LSuKSV6bicvbd%2FbgzOEndyik2o%2BOjiW0lZ49t0t7I05KE%2F44%2BGPSgmZ4lGIrU0cb31TBWAlq5kVsxmNTLXd%2BkSit%2Fnfax3qR1pJ%2FF8t5dBWhSy9Gz1tUlbmdUVCxpM6jnxZ%2Fgvf9Uf5PIT9eisWKMxiZeVKt3tHJyF6DLLaRLrd%2B%2BElM&X-Amz-Signature=999c815f27ff9059f6ed23f448460e6c1ff0971556f71271f48cbd8d57eacdd9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR5ECVRY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCICfFBIqs%2BBnAN5BHqceWDnMtgDIM%2FwOetdUE4GUjIK8cAiAjU5KoKHHDIfN9o9TIMmPOyaYBvcG4HA9KsoB6LXnSYCqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt5W%2FdAfVB7WMjvK2KtwDY4Vyr1ILtrL3wOC1tpWT4vCNqg4r98gXVcOyEBpFd3D2J9kwt2IRjD11Lz0l1VHBhi5a1%2FWzjD99JxAXMkS9Rlv9lcO9W7AX3OwxRuN6%2F%2Fd269e8BzNpcvt0IUrTTUjrKaZWyyHKJ%2FFiry54IRsWks5m%2B1kM8VWSd1kpnkPmoZaILXnoze%2FcuA9ssx4BNmX49eluG6B3zYurCE0ER6RNvNMIVdXrjjLBg%2FzsWalnzopWHkyNzcaf9w5sg3oFB0NT%2FcpiygR4hWRfbsuqtQLmSN7mV6r35aJewHDqirWYmuQ9%2BaAGP9n3aoNd8QkIlFY2CYJy%2BHlLqaFDT%2FKBTK5y95m5ebH56lO%2FEoPBFEwtZ8%2FI6Wg2dNh1E2imZy86ZDEaITaXPebtjFcuS8Tr0%2FdpIilky3tTBkyoi9CLWI7l%2Fk3GQJDhO5B5%2BZFV31jwQDI8QUKcr9f7xyBuZKWKOJPFw%2BYKtOE4WugPGkGW7lOnnAvHGgOUMoKRYlxNAYIzKbMq%2Fk7TSbz9DGFIqxREdFU0mXflyvKiHGnkmPK1DdpjDalKV4cQAxMdNEsReV3hsIyWwo6ymFbuLVFLHcbDuA0G3DYMkMnFnTn1J3jYZrRnDuacc0lvMKzolLcAKykwtZP4wQY6pgGQteGeHBLiVoS0IYycdxJeW0KXVxwwSApg%2FjDMpZX61rE6LSuKSV6bicvbd%2FbgzOEndyik2o%2BOjiW0lZ49t0t7I05KE%2F44%2BGPSgmZ4lGIrU0cb31TBWAlq5kVsxmNTLXd%2BkSit%2Fnfax3qR1pJ%2FF8t5dBWhSy9Gz1tUlbmdUVCxpM6jnxZ%2Fgvf9Uf5PIT9eisWKMxiZeVKt3tHJyF6DLLaRLrd%2B%2BElM&X-Amz-Signature=d4c93029b3791cb5efa233f920b20ea318715bb83794e3f5cbcbdc8848929dc0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
