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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4CIOFXO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T032419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFuKfDMZVF8sRxFNpMDyvzhRdg51xenRUz1yQkdtMWIgIhAJEGxUvLjMbSoihHtgWrgHpdavikowaIchUU0IwwULNfKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykGMiFdNNv6r%2BFePUq3APdVSMl5%2FTaOiOTQPRB58N1l4kddTQNFxIPcc8M34d1gk2xZ7%2BbCN53HE4ADYvnO2BUhcwKYd74MFayrDC9EiheGZnvDhkW%2FEm1xQPO%2Bye2jNzhA9f2fcZ1wost%2Bkm9P4t5Z%2BEAWRNZb1OXqmGJzvncaHAChJrEw5i%2FwUh%2F8xirmAry0eeXterxh3o7zNCCsfFBBLziiEQnPjj8mgOtkBeQSzTh%2BgdLoRrTP4XHJvIWwckzRFMJgxhIUiK47cZdfGOVgzBLN%2BthhNCb%2Fq1orfAhvMT9yQmfyClbl6tFa1Uu4ufHPv46hjoWnmfuCGmQwSLhozL1UY4ztchdlsKnNyyrDocttr330e4vZOuTUKRQs208ZLW3srv2V%2Bp18lLHs1ZcnDTVXO%2Ft0L2A%2FRIRvrJD%2FY2WiA8n8uY43KX3C1tAGoM8TVpu1fQRqh5%2BMiq5MveEXoPHWcdX8Rj1%2FfpZJJ7GZYyWxeDaVBke6nBUqtDSYJq2hmIm2NHOGAO8WOphELWhQuwx%2BON5WrlDR9k%2BjOlWrAD6KHTltx5Etahk69cY2j722HG4ul%2FDc1VbklwGDEFUPCG5tXirDMumW67zXB3biRRXjRVWFP6WS4MZthHWeh3VySGHnKed17f6%2BTCugr2%2FBjqkAbykYpRawkG%2Ft26Q05TboZkGl6VHGuXx37Mg3TK0S3Z33I7eLxLxA5gOjbE1tq01KqlXSDMOR0Iz6nwEeW807EyBc87d6uaDAHPhJJsCe41HRCw3WaHD6Pc01Hy2IywFqjWRaT6JzGTL%2B5cCA4tIMClgmVVBF1U1h5BU%2FU6bNC122C%2BReO3CjnL8oWsXdNHJ6Lw026u8YNrA02TQv%2FqeGj26j0W5&X-Amz-Signature=315fbfaff207197ec677e06d0a8e49b53c806fa29bde175f41b37981c00ecbac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4CIOFXO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T032419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFuKfDMZVF8sRxFNpMDyvzhRdg51xenRUz1yQkdtMWIgIhAJEGxUvLjMbSoihHtgWrgHpdavikowaIchUU0IwwULNfKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykGMiFdNNv6r%2BFePUq3APdVSMl5%2FTaOiOTQPRB58N1l4kddTQNFxIPcc8M34d1gk2xZ7%2BbCN53HE4ADYvnO2BUhcwKYd74MFayrDC9EiheGZnvDhkW%2FEm1xQPO%2Bye2jNzhA9f2fcZ1wost%2Bkm9P4t5Z%2BEAWRNZb1OXqmGJzvncaHAChJrEw5i%2FwUh%2F8xirmAry0eeXterxh3o7zNCCsfFBBLziiEQnPjj8mgOtkBeQSzTh%2BgdLoRrTP4XHJvIWwckzRFMJgxhIUiK47cZdfGOVgzBLN%2BthhNCb%2Fq1orfAhvMT9yQmfyClbl6tFa1Uu4ufHPv46hjoWnmfuCGmQwSLhozL1UY4ztchdlsKnNyyrDocttr330e4vZOuTUKRQs208ZLW3srv2V%2Bp18lLHs1ZcnDTVXO%2Ft0L2A%2FRIRvrJD%2FY2WiA8n8uY43KX3C1tAGoM8TVpu1fQRqh5%2BMiq5MveEXoPHWcdX8Rj1%2FfpZJJ7GZYyWxeDaVBke6nBUqtDSYJq2hmIm2NHOGAO8WOphELWhQuwx%2BON5WrlDR9k%2BjOlWrAD6KHTltx5Etahk69cY2j722HG4ul%2FDc1VbklwGDEFUPCG5tXirDMumW67zXB3biRRXjRVWFP6WS4MZthHWeh3VySGHnKed17f6%2BTCugr2%2FBjqkAbykYpRawkG%2Ft26Q05TboZkGl6VHGuXx37Mg3TK0S3Z33I7eLxLxA5gOjbE1tq01KqlXSDMOR0Iz6nwEeW807EyBc87d6uaDAHPhJJsCe41HRCw3WaHD6Pc01Hy2IywFqjWRaT6JzGTL%2B5cCA4tIMClgmVVBF1U1h5BU%2FU6bNC122C%2BReO3CjnL8oWsXdNHJ6Lw026u8YNrA02TQv%2FqeGj26j0W5&X-Amz-Signature=d0138cf9878ef757eac88aa4bee1f76a79f3ce5f0386aed0545ba42860d8b0b0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4CIOFXO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T032419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFuKfDMZVF8sRxFNpMDyvzhRdg51xenRUz1yQkdtMWIgIhAJEGxUvLjMbSoihHtgWrgHpdavikowaIchUU0IwwULNfKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykGMiFdNNv6r%2BFePUq3APdVSMl5%2FTaOiOTQPRB58N1l4kddTQNFxIPcc8M34d1gk2xZ7%2BbCN53HE4ADYvnO2BUhcwKYd74MFayrDC9EiheGZnvDhkW%2FEm1xQPO%2Bye2jNzhA9f2fcZ1wost%2Bkm9P4t5Z%2BEAWRNZb1OXqmGJzvncaHAChJrEw5i%2FwUh%2F8xirmAry0eeXterxh3o7zNCCsfFBBLziiEQnPjj8mgOtkBeQSzTh%2BgdLoRrTP4XHJvIWwckzRFMJgxhIUiK47cZdfGOVgzBLN%2BthhNCb%2Fq1orfAhvMT9yQmfyClbl6tFa1Uu4ufHPv46hjoWnmfuCGmQwSLhozL1UY4ztchdlsKnNyyrDocttr330e4vZOuTUKRQs208ZLW3srv2V%2Bp18lLHs1ZcnDTVXO%2Ft0L2A%2FRIRvrJD%2FY2WiA8n8uY43KX3C1tAGoM8TVpu1fQRqh5%2BMiq5MveEXoPHWcdX8Rj1%2FfpZJJ7GZYyWxeDaVBke6nBUqtDSYJq2hmIm2NHOGAO8WOphELWhQuwx%2BON5WrlDR9k%2BjOlWrAD6KHTltx5Etahk69cY2j722HG4ul%2FDc1VbklwGDEFUPCG5tXirDMumW67zXB3biRRXjRVWFP6WS4MZthHWeh3VySGHnKed17f6%2BTCugr2%2FBjqkAbykYpRawkG%2Ft26Q05TboZkGl6VHGuXx37Mg3TK0S3Z33I7eLxLxA5gOjbE1tq01KqlXSDMOR0Iz6nwEeW807EyBc87d6uaDAHPhJJsCe41HRCw3WaHD6Pc01Hy2IywFqjWRaT6JzGTL%2B5cCA4tIMClgmVVBF1U1h5BU%2FU6bNC122C%2BReO3CjnL8oWsXdNHJ6Lw026u8YNrA02TQv%2FqeGj26j0W5&X-Amz-Signature=a659934cdd1149d288417f1c20decd45714330e827240f48cde0740cb7a15b20&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4CIOFXO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T032419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFuKfDMZVF8sRxFNpMDyvzhRdg51xenRUz1yQkdtMWIgIhAJEGxUvLjMbSoihHtgWrgHpdavikowaIchUU0IwwULNfKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykGMiFdNNv6r%2BFePUq3APdVSMl5%2FTaOiOTQPRB58N1l4kddTQNFxIPcc8M34d1gk2xZ7%2BbCN53HE4ADYvnO2BUhcwKYd74MFayrDC9EiheGZnvDhkW%2FEm1xQPO%2Bye2jNzhA9f2fcZ1wost%2Bkm9P4t5Z%2BEAWRNZb1OXqmGJzvncaHAChJrEw5i%2FwUh%2F8xirmAry0eeXterxh3o7zNCCsfFBBLziiEQnPjj8mgOtkBeQSzTh%2BgdLoRrTP4XHJvIWwckzRFMJgxhIUiK47cZdfGOVgzBLN%2BthhNCb%2Fq1orfAhvMT9yQmfyClbl6tFa1Uu4ufHPv46hjoWnmfuCGmQwSLhozL1UY4ztchdlsKnNyyrDocttr330e4vZOuTUKRQs208ZLW3srv2V%2Bp18lLHs1ZcnDTVXO%2Ft0L2A%2FRIRvrJD%2FY2WiA8n8uY43KX3C1tAGoM8TVpu1fQRqh5%2BMiq5MveEXoPHWcdX8Rj1%2FfpZJJ7GZYyWxeDaVBke6nBUqtDSYJq2hmIm2NHOGAO8WOphELWhQuwx%2BON5WrlDR9k%2BjOlWrAD6KHTltx5Etahk69cY2j722HG4ul%2FDc1VbklwGDEFUPCG5tXirDMumW67zXB3biRRXjRVWFP6WS4MZthHWeh3VySGHnKed17f6%2BTCugr2%2FBjqkAbykYpRawkG%2Ft26Q05TboZkGl6VHGuXx37Mg3TK0S3Z33I7eLxLxA5gOjbE1tq01KqlXSDMOR0Iz6nwEeW807EyBc87d6uaDAHPhJJsCe41HRCw3WaHD6Pc01Hy2IywFqjWRaT6JzGTL%2B5cCA4tIMClgmVVBF1U1h5BU%2FU6bNC122C%2BReO3CjnL8oWsXdNHJ6Lw026u8YNrA02TQv%2FqeGj26j0W5&X-Amz-Signature=3467c852211f93b12f77ea36255376a7d8e5753d57065e8b70391cd9ebf30eb7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4CIOFXO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T032419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFuKfDMZVF8sRxFNpMDyvzhRdg51xenRUz1yQkdtMWIgIhAJEGxUvLjMbSoihHtgWrgHpdavikowaIchUU0IwwULNfKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykGMiFdNNv6r%2BFePUq3APdVSMl5%2FTaOiOTQPRB58N1l4kddTQNFxIPcc8M34d1gk2xZ7%2BbCN53HE4ADYvnO2BUhcwKYd74MFayrDC9EiheGZnvDhkW%2FEm1xQPO%2Bye2jNzhA9f2fcZ1wost%2Bkm9P4t5Z%2BEAWRNZb1OXqmGJzvncaHAChJrEw5i%2FwUh%2F8xirmAry0eeXterxh3o7zNCCsfFBBLziiEQnPjj8mgOtkBeQSzTh%2BgdLoRrTP4XHJvIWwckzRFMJgxhIUiK47cZdfGOVgzBLN%2BthhNCb%2Fq1orfAhvMT9yQmfyClbl6tFa1Uu4ufHPv46hjoWnmfuCGmQwSLhozL1UY4ztchdlsKnNyyrDocttr330e4vZOuTUKRQs208ZLW3srv2V%2Bp18lLHs1ZcnDTVXO%2Ft0L2A%2FRIRvrJD%2FY2WiA8n8uY43KX3C1tAGoM8TVpu1fQRqh5%2BMiq5MveEXoPHWcdX8Rj1%2FfpZJJ7GZYyWxeDaVBke6nBUqtDSYJq2hmIm2NHOGAO8WOphELWhQuwx%2BON5WrlDR9k%2BjOlWrAD6KHTltx5Etahk69cY2j722HG4ul%2FDc1VbklwGDEFUPCG5tXirDMumW67zXB3biRRXjRVWFP6WS4MZthHWeh3VySGHnKed17f6%2BTCugr2%2FBjqkAbykYpRawkG%2Ft26Q05TboZkGl6VHGuXx37Mg3TK0S3Z33I7eLxLxA5gOjbE1tq01KqlXSDMOR0Iz6nwEeW807EyBc87d6uaDAHPhJJsCe41HRCw3WaHD6Pc01Hy2IywFqjWRaT6JzGTL%2B5cCA4tIMClgmVVBF1U1h5BU%2FU6bNC122C%2BReO3CjnL8oWsXdNHJ6Lw026u8YNrA02TQv%2FqeGj26j0W5&X-Amz-Signature=a3f0e107223be910585410dae9cd94027aa565489f8f479797e4c98a513420a8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4CIOFXO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T032419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFuKfDMZVF8sRxFNpMDyvzhRdg51xenRUz1yQkdtMWIgIhAJEGxUvLjMbSoihHtgWrgHpdavikowaIchUU0IwwULNfKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykGMiFdNNv6r%2BFePUq3APdVSMl5%2FTaOiOTQPRB58N1l4kddTQNFxIPcc8M34d1gk2xZ7%2BbCN53HE4ADYvnO2BUhcwKYd74MFayrDC9EiheGZnvDhkW%2FEm1xQPO%2Bye2jNzhA9f2fcZ1wost%2Bkm9P4t5Z%2BEAWRNZb1OXqmGJzvncaHAChJrEw5i%2FwUh%2F8xirmAry0eeXterxh3o7zNCCsfFBBLziiEQnPjj8mgOtkBeQSzTh%2BgdLoRrTP4XHJvIWwckzRFMJgxhIUiK47cZdfGOVgzBLN%2BthhNCb%2Fq1orfAhvMT9yQmfyClbl6tFa1Uu4ufHPv46hjoWnmfuCGmQwSLhozL1UY4ztchdlsKnNyyrDocttr330e4vZOuTUKRQs208ZLW3srv2V%2Bp18lLHs1ZcnDTVXO%2Ft0L2A%2FRIRvrJD%2FY2WiA8n8uY43KX3C1tAGoM8TVpu1fQRqh5%2BMiq5MveEXoPHWcdX8Rj1%2FfpZJJ7GZYyWxeDaVBke6nBUqtDSYJq2hmIm2NHOGAO8WOphELWhQuwx%2BON5WrlDR9k%2BjOlWrAD6KHTltx5Etahk69cY2j722HG4ul%2FDc1VbklwGDEFUPCG5tXirDMumW67zXB3biRRXjRVWFP6WS4MZthHWeh3VySGHnKed17f6%2BTCugr2%2FBjqkAbykYpRawkG%2Ft26Q05TboZkGl6VHGuXx37Mg3TK0S3Z33I7eLxLxA5gOjbE1tq01KqlXSDMOR0Iz6nwEeW807EyBc87d6uaDAHPhJJsCe41HRCw3WaHD6Pc01Hy2IywFqjWRaT6JzGTL%2B5cCA4tIMClgmVVBF1U1h5BU%2FU6bNC122C%2BReO3CjnL8oWsXdNHJ6Lw026u8YNrA02TQv%2FqeGj26j0W5&X-Amz-Signature=ae9621ed27c76aa876d4ad47f6e05f1775b691608e1f45d218b7f729529f842f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4CIOFXO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T032419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFuKfDMZVF8sRxFNpMDyvzhRdg51xenRUz1yQkdtMWIgIhAJEGxUvLjMbSoihHtgWrgHpdavikowaIchUU0IwwULNfKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykGMiFdNNv6r%2BFePUq3APdVSMl5%2FTaOiOTQPRB58N1l4kddTQNFxIPcc8M34d1gk2xZ7%2BbCN53HE4ADYvnO2BUhcwKYd74MFayrDC9EiheGZnvDhkW%2FEm1xQPO%2Bye2jNzhA9f2fcZ1wost%2Bkm9P4t5Z%2BEAWRNZb1OXqmGJzvncaHAChJrEw5i%2FwUh%2F8xirmAry0eeXterxh3o7zNCCsfFBBLziiEQnPjj8mgOtkBeQSzTh%2BgdLoRrTP4XHJvIWwckzRFMJgxhIUiK47cZdfGOVgzBLN%2BthhNCb%2Fq1orfAhvMT9yQmfyClbl6tFa1Uu4ufHPv46hjoWnmfuCGmQwSLhozL1UY4ztchdlsKnNyyrDocttr330e4vZOuTUKRQs208ZLW3srv2V%2Bp18lLHs1ZcnDTVXO%2Ft0L2A%2FRIRvrJD%2FY2WiA8n8uY43KX3C1tAGoM8TVpu1fQRqh5%2BMiq5MveEXoPHWcdX8Rj1%2FfpZJJ7GZYyWxeDaVBke6nBUqtDSYJq2hmIm2NHOGAO8WOphELWhQuwx%2BON5WrlDR9k%2BjOlWrAD6KHTltx5Etahk69cY2j722HG4ul%2FDc1VbklwGDEFUPCG5tXirDMumW67zXB3biRRXjRVWFP6WS4MZthHWeh3VySGHnKed17f6%2BTCugr2%2FBjqkAbykYpRawkG%2Ft26Q05TboZkGl6VHGuXx37Mg3TK0S3Z33I7eLxLxA5gOjbE1tq01KqlXSDMOR0Iz6nwEeW807EyBc87d6uaDAHPhJJsCe41HRCw3WaHD6Pc01Hy2IywFqjWRaT6JzGTL%2B5cCA4tIMClgmVVBF1U1h5BU%2FU6bNC122C%2BReO3CjnL8oWsXdNHJ6Lw026u8YNrA02TQv%2FqeGj26j0W5&X-Amz-Signature=25844afd8e6da85d8646aa5a6e24b46eb0d348fb7d58fbc9ae57bc3c6e58d7ea&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
