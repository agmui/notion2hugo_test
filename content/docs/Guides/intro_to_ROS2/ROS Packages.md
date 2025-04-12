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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRITQJZ4%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIDmQSWNeSzk9V1gbDcj4S58J1PsY%2FIGHJt6X93VSNPupAiAJ7mC5peKxSy7MGwk6QRivnFXmlAm4p0QtpPWNo1IIxyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwd40SK9V0HVFChvkKtwDzckhV5mQhU%2FdJJ3z9jcoOwamiE6krok4Wbj3I6TbwtcR45oB2LrHkTHd5L97fCvIxanifn3nzjQMe4kfyjfTPHzUrqMASbHQHLhtd2sqsfPb5xgYHMRkRcbHika6ez3EkwcdkGrm%2FtbcIx0dTrf688pLdjbpwhJ4tTpDZblM18dTp%2BLTiIeYSqsg77h0k82Im8YJeP9IqqhTLnFhqPknYBgNjlEAkH4eGY6u0W905p9TMq9fCjupfy40vhcgw%2Fmpoe5nsWc1mwMMmVYWg0rVD%2BSfGN%2FKif41bF%2BN%2F0Co%2B7iRbGsw7NAWHWh9vefWvhaSeWGfUg%2BcvqdFlhtJ%2Bnk4s5Xd%2FI1WOexzYw%2FX7gSa6EcG6CeLWbva75tPJATW%2FVA2ZNm7Y3bWnuN%2F1Z64rYiq0Di76cKFX1XXN%2BAdbl%2BIAZ6W7%2BfbGzlHnQykvfVrkpqMi6%2Fytxf2t5VTaVKbzY8zcf5FLcZt1b8UeC8k0tI%2B5HELv70Ej1qL%2Bq9PaSbjkHRg%2BIzMFJvBEOvG4dvcGyXPdd6s5fNcGNCqSK%2BQ2i395CoL8nQiGgfNFc5PcowlviYefO0I2TfpGz9wtRSgoWi2crbgW2ED5TLVOi%2F5hnYkdkc1YX1Jbni5HCVNWI0w7eznvwY6pgFMQBmrEPHoQk0fMs20nZeMEVshN383khAy7yD3VCYzBbO%2B3cJnF9XEfLcsojdm5svwRx7yU7DRsSVdUJJrMJQKfvX9UDjVSEN0BuVmRAKx08CS9d8JIIAgnajGc0eC%2FcOSgAUxpd7ZaKNTp%2BvhyvRAlZ8ZFXiTfpPuzdUlPx0oXFBVv0%2F11nfX2K%2F0oWVPqqNTRQmZNVz%2Fk2q8YWKIRCx%2Fl2JbcBim&X-Amz-Signature=138702384008f1c0314652c48c6a000374d059ed449d6f2bde92da3d5c12a1e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRITQJZ4%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIDmQSWNeSzk9V1gbDcj4S58J1PsY%2FIGHJt6X93VSNPupAiAJ7mC5peKxSy7MGwk6QRivnFXmlAm4p0QtpPWNo1IIxyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwd40SK9V0HVFChvkKtwDzckhV5mQhU%2FdJJ3z9jcoOwamiE6krok4Wbj3I6TbwtcR45oB2LrHkTHd5L97fCvIxanifn3nzjQMe4kfyjfTPHzUrqMASbHQHLhtd2sqsfPb5xgYHMRkRcbHika6ez3EkwcdkGrm%2FtbcIx0dTrf688pLdjbpwhJ4tTpDZblM18dTp%2BLTiIeYSqsg77h0k82Im8YJeP9IqqhTLnFhqPknYBgNjlEAkH4eGY6u0W905p9TMq9fCjupfy40vhcgw%2Fmpoe5nsWc1mwMMmVYWg0rVD%2BSfGN%2FKif41bF%2BN%2F0Co%2B7iRbGsw7NAWHWh9vefWvhaSeWGfUg%2BcvqdFlhtJ%2Bnk4s5Xd%2FI1WOexzYw%2FX7gSa6EcG6CeLWbva75tPJATW%2FVA2ZNm7Y3bWnuN%2F1Z64rYiq0Di76cKFX1XXN%2BAdbl%2BIAZ6W7%2BfbGzlHnQykvfVrkpqMi6%2Fytxf2t5VTaVKbzY8zcf5FLcZt1b8UeC8k0tI%2B5HELv70Ej1qL%2Bq9PaSbjkHRg%2BIzMFJvBEOvG4dvcGyXPdd6s5fNcGNCqSK%2BQ2i395CoL8nQiGgfNFc5PcowlviYefO0I2TfpGz9wtRSgoWi2crbgW2ED5TLVOi%2F5hnYkdkc1YX1Jbni5HCVNWI0w7eznvwY6pgFMQBmrEPHoQk0fMs20nZeMEVshN383khAy7yD3VCYzBbO%2B3cJnF9XEfLcsojdm5svwRx7yU7DRsSVdUJJrMJQKfvX9UDjVSEN0BuVmRAKx08CS9d8JIIAgnajGc0eC%2FcOSgAUxpd7ZaKNTp%2BvhyvRAlZ8ZFXiTfpPuzdUlPx0oXFBVv0%2F11nfX2K%2F0oWVPqqNTRQmZNVz%2Fk2q8YWKIRCx%2Fl2JbcBim&X-Amz-Signature=a3682b7ea1ae13d9835fbc4b3525b11a9612434664456efa1f51e7c80f9e5dda&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRITQJZ4%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIDmQSWNeSzk9V1gbDcj4S58J1PsY%2FIGHJt6X93VSNPupAiAJ7mC5peKxSy7MGwk6QRivnFXmlAm4p0QtpPWNo1IIxyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwd40SK9V0HVFChvkKtwDzckhV5mQhU%2FdJJ3z9jcoOwamiE6krok4Wbj3I6TbwtcR45oB2LrHkTHd5L97fCvIxanifn3nzjQMe4kfyjfTPHzUrqMASbHQHLhtd2sqsfPb5xgYHMRkRcbHika6ez3EkwcdkGrm%2FtbcIx0dTrf688pLdjbpwhJ4tTpDZblM18dTp%2BLTiIeYSqsg77h0k82Im8YJeP9IqqhTLnFhqPknYBgNjlEAkH4eGY6u0W905p9TMq9fCjupfy40vhcgw%2Fmpoe5nsWc1mwMMmVYWg0rVD%2BSfGN%2FKif41bF%2BN%2F0Co%2B7iRbGsw7NAWHWh9vefWvhaSeWGfUg%2BcvqdFlhtJ%2Bnk4s5Xd%2FI1WOexzYw%2FX7gSa6EcG6CeLWbva75tPJATW%2FVA2ZNm7Y3bWnuN%2F1Z64rYiq0Di76cKFX1XXN%2BAdbl%2BIAZ6W7%2BfbGzlHnQykvfVrkpqMi6%2Fytxf2t5VTaVKbzY8zcf5FLcZt1b8UeC8k0tI%2B5HELv70Ej1qL%2Bq9PaSbjkHRg%2BIzMFJvBEOvG4dvcGyXPdd6s5fNcGNCqSK%2BQ2i395CoL8nQiGgfNFc5PcowlviYefO0I2TfpGz9wtRSgoWi2crbgW2ED5TLVOi%2F5hnYkdkc1YX1Jbni5HCVNWI0w7eznvwY6pgFMQBmrEPHoQk0fMs20nZeMEVshN383khAy7yD3VCYzBbO%2B3cJnF9XEfLcsojdm5svwRx7yU7DRsSVdUJJrMJQKfvX9UDjVSEN0BuVmRAKx08CS9d8JIIAgnajGc0eC%2FcOSgAUxpd7ZaKNTp%2BvhyvRAlZ8ZFXiTfpPuzdUlPx0oXFBVv0%2F11nfX2K%2F0oWVPqqNTRQmZNVz%2Fk2q8YWKIRCx%2Fl2JbcBim&X-Amz-Signature=2c5525c9475054af628c79c701127c9a5711a45eaa15145840553508e4d518e2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRITQJZ4%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIDmQSWNeSzk9V1gbDcj4S58J1PsY%2FIGHJt6X93VSNPupAiAJ7mC5peKxSy7MGwk6QRivnFXmlAm4p0QtpPWNo1IIxyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwd40SK9V0HVFChvkKtwDzckhV5mQhU%2FdJJ3z9jcoOwamiE6krok4Wbj3I6TbwtcR45oB2LrHkTHd5L97fCvIxanifn3nzjQMe4kfyjfTPHzUrqMASbHQHLhtd2sqsfPb5xgYHMRkRcbHika6ez3EkwcdkGrm%2FtbcIx0dTrf688pLdjbpwhJ4tTpDZblM18dTp%2BLTiIeYSqsg77h0k82Im8YJeP9IqqhTLnFhqPknYBgNjlEAkH4eGY6u0W905p9TMq9fCjupfy40vhcgw%2Fmpoe5nsWc1mwMMmVYWg0rVD%2BSfGN%2FKif41bF%2BN%2F0Co%2B7iRbGsw7NAWHWh9vefWvhaSeWGfUg%2BcvqdFlhtJ%2Bnk4s5Xd%2FI1WOexzYw%2FX7gSa6EcG6CeLWbva75tPJATW%2FVA2ZNm7Y3bWnuN%2F1Z64rYiq0Di76cKFX1XXN%2BAdbl%2BIAZ6W7%2BfbGzlHnQykvfVrkpqMi6%2Fytxf2t5VTaVKbzY8zcf5FLcZt1b8UeC8k0tI%2B5HELv70Ej1qL%2Bq9PaSbjkHRg%2BIzMFJvBEOvG4dvcGyXPdd6s5fNcGNCqSK%2BQ2i395CoL8nQiGgfNFc5PcowlviYefO0I2TfpGz9wtRSgoWi2crbgW2ED5TLVOi%2F5hnYkdkc1YX1Jbni5HCVNWI0w7eznvwY6pgFMQBmrEPHoQk0fMs20nZeMEVshN383khAy7yD3VCYzBbO%2B3cJnF9XEfLcsojdm5svwRx7yU7DRsSVdUJJrMJQKfvX9UDjVSEN0BuVmRAKx08CS9d8JIIAgnajGc0eC%2FcOSgAUxpd7ZaKNTp%2BvhyvRAlZ8ZFXiTfpPuzdUlPx0oXFBVv0%2F11nfX2K%2F0oWVPqqNTRQmZNVz%2Fk2q8YWKIRCx%2Fl2JbcBim&X-Amz-Signature=b085a4bbc74bb1228f5ad02952f271b881bbb9f0f6095255a47bb12532c81188&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRITQJZ4%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIDmQSWNeSzk9V1gbDcj4S58J1PsY%2FIGHJt6X93VSNPupAiAJ7mC5peKxSy7MGwk6QRivnFXmlAm4p0QtpPWNo1IIxyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwd40SK9V0HVFChvkKtwDzckhV5mQhU%2FdJJ3z9jcoOwamiE6krok4Wbj3I6TbwtcR45oB2LrHkTHd5L97fCvIxanifn3nzjQMe4kfyjfTPHzUrqMASbHQHLhtd2sqsfPb5xgYHMRkRcbHika6ez3EkwcdkGrm%2FtbcIx0dTrf688pLdjbpwhJ4tTpDZblM18dTp%2BLTiIeYSqsg77h0k82Im8YJeP9IqqhTLnFhqPknYBgNjlEAkH4eGY6u0W905p9TMq9fCjupfy40vhcgw%2Fmpoe5nsWc1mwMMmVYWg0rVD%2BSfGN%2FKif41bF%2BN%2F0Co%2B7iRbGsw7NAWHWh9vefWvhaSeWGfUg%2BcvqdFlhtJ%2Bnk4s5Xd%2FI1WOexzYw%2FX7gSa6EcG6CeLWbva75tPJATW%2FVA2ZNm7Y3bWnuN%2F1Z64rYiq0Di76cKFX1XXN%2BAdbl%2BIAZ6W7%2BfbGzlHnQykvfVrkpqMi6%2Fytxf2t5VTaVKbzY8zcf5FLcZt1b8UeC8k0tI%2B5HELv70Ej1qL%2Bq9PaSbjkHRg%2BIzMFJvBEOvG4dvcGyXPdd6s5fNcGNCqSK%2BQ2i395CoL8nQiGgfNFc5PcowlviYefO0I2TfpGz9wtRSgoWi2crbgW2ED5TLVOi%2F5hnYkdkc1YX1Jbni5HCVNWI0w7eznvwY6pgFMQBmrEPHoQk0fMs20nZeMEVshN383khAy7yD3VCYzBbO%2B3cJnF9XEfLcsojdm5svwRx7yU7DRsSVdUJJrMJQKfvX9UDjVSEN0BuVmRAKx08CS9d8JIIAgnajGc0eC%2FcOSgAUxpd7ZaKNTp%2BvhyvRAlZ8ZFXiTfpPuzdUlPx0oXFBVv0%2F11nfX2K%2F0oWVPqqNTRQmZNVz%2Fk2q8YWKIRCx%2Fl2JbcBim&X-Amz-Signature=b69845bbe2294d19262f2e761540973f0a03318531b4aeacbb58a29b42895b83&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRITQJZ4%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIDmQSWNeSzk9V1gbDcj4S58J1PsY%2FIGHJt6X93VSNPupAiAJ7mC5peKxSy7MGwk6QRivnFXmlAm4p0QtpPWNo1IIxyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwd40SK9V0HVFChvkKtwDzckhV5mQhU%2FdJJ3z9jcoOwamiE6krok4Wbj3I6TbwtcR45oB2LrHkTHd5L97fCvIxanifn3nzjQMe4kfyjfTPHzUrqMASbHQHLhtd2sqsfPb5xgYHMRkRcbHika6ez3EkwcdkGrm%2FtbcIx0dTrf688pLdjbpwhJ4tTpDZblM18dTp%2BLTiIeYSqsg77h0k82Im8YJeP9IqqhTLnFhqPknYBgNjlEAkH4eGY6u0W905p9TMq9fCjupfy40vhcgw%2Fmpoe5nsWc1mwMMmVYWg0rVD%2BSfGN%2FKif41bF%2BN%2F0Co%2B7iRbGsw7NAWHWh9vefWvhaSeWGfUg%2BcvqdFlhtJ%2Bnk4s5Xd%2FI1WOexzYw%2FX7gSa6EcG6CeLWbva75tPJATW%2FVA2ZNm7Y3bWnuN%2F1Z64rYiq0Di76cKFX1XXN%2BAdbl%2BIAZ6W7%2BfbGzlHnQykvfVrkpqMi6%2Fytxf2t5VTaVKbzY8zcf5FLcZt1b8UeC8k0tI%2B5HELv70Ej1qL%2Bq9PaSbjkHRg%2BIzMFJvBEOvG4dvcGyXPdd6s5fNcGNCqSK%2BQ2i395CoL8nQiGgfNFc5PcowlviYefO0I2TfpGz9wtRSgoWi2crbgW2ED5TLVOi%2F5hnYkdkc1YX1Jbni5HCVNWI0w7eznvwY6pgFMQBmrEPHoQk0fMs20nZeMEVshN383khAy7yD3VCYzBbO%2B3cJnF9XEfLcsojdm5svwRx7yU7DRsSVdUJJrMJQKfvX9UDjVSEN0BuVmRAKx08CS9d8JIIAgnajGc0eC%2FcOSgAUxpd7ZaKNTp%2BvhyvRAlZ8ZFXiTfpPuzdUlPx0oXFBVv0%2F11nfX2K%2F0oWVPqqNTRQmZNVz%2Fk2q8YWKIRCx%2Fl2JbcBim&X-Amz-Signature=089ed8b7869b9832a71b490aeb4860ea86cc0d2b8aa7a93726071b7abcbc45cb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRITQJZ4%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIDmQSWNeSzk9V1gbDcj4S58J1PsY%2FIGHJt6X93VSNPupAiAJ7mC5peKxSy7MGwk6QRivnFXmlAm4p0QtpPWNo1IIxyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwd40SK9V0HVFChvkKtwDzckhV5mQhU%2FdJJ3z9jcoOwamiE6krok4Wbj3I6TbwtcR45oB2LrHkTHd5L97fCvIxanifn3nzjQMe4kfyjfTPHzUrqMASbHQHLhtd2sqsfPb5xgYHMRkRcbHika6ez3EkwcdkGrm%2FtbcIx0dTrf688pLdjbpwhJ4tTpDZblM18dTp%2BLTiIeYSqsg77h0k82Im8YJeP9IqqhTLnFhqPknYBgNjlEAkH4eGY6u0W905p9TMq9fCjupfy40vhcgw%2Fmpoe5nsWc1mwMMmVYWg0rVD%2BSfGN%2FKif41bF%2BN%2F0Co%2B7iRbGsw7NAWHWh9vefWvhaSeWGfUg%2BcvqdFlhtJ%2Bnk4s5Xd%2FI1WOexzYw%2FX7gSa6EcG6CeLWbva75tPJATW%2FVA2ZNm7Y3bWnuN%2F1Z64rYiq0Di76cKFX1XXN%2BAdbl%2BIAZ6W7%2BfbGzlHnQykvfVrkpqMi6%2Fytxf2t5VTaVKbzY8zcf5FLcZt1b8UeC8k0tI%2B5HELv70Ej1qL%2Bq9PaSbjkHRg%2BIzMFJvBEOvG4dvcGyXPdd6s5fNcGNCqSK%2BQ2i395CoL8nQiGgfNFc5PcowlviYefO0I2TfpGz9wtRSgoWi2crbgW2ED5TLVOi%2F5hnYkdkc1YX1Jbni5HCVNWI0w7eznvwY6pgFMQBmrEPHoQk0fMs20nZeMEVshN383khAy7yD3VCYzBbO%2B3cJnF9XEfLcsojdm5svwRx7yU7DRsSVdUJJrMJQKfvX9UDjVSEN0BuVmRAKx08CS9d8JIIAgnajGc0eC%2FcOSgAUxpd7ZaKNTp%2BvhyvRAlZ8ZFXiTfpPuzdUlPx0oXFBVv0%2F11nfX2K%2F0oWVPqqNTRQmZNVz%2Fk2q8YWKIRCx%2Fl2JbcBim&X-Amz-Signature=830ebdc4ae9c0f38fb350642ad0ac37fa9745ae897b4420802beaede6d9640b4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
