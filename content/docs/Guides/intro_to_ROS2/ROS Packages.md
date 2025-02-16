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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRURNWIO%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T131149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC52gZ76zhOxu82Wx%2FNOAtBLLm8p1Hhalhe6KvxG1E8kQIgN2DCVH6CPdpiO3V5KqUC0ArWvZgqqnBmUKYfWPuZtjkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKSwu6PeYDypCKHBayrcAyKTpHCVew570LEUG93Y7%2F1vIdv%2BYW3r%2FFlT853v2Z63eyecq%2FzsRQR2zFalje%2ByBU05aQRf2qNMHuHLFCJdMmljaFUMJPPvnwPP8n%2B7cp%2F%2FhlkUy1pp83R4CpMoFKela5y9AJ6HeGpFiIV92Jslq72hYiwkqfgH9NH8p5shRkeHULYQMUmgf4MFq5Z16jcGWHZesMJwuprPg3yywcKKdbwyOiGEb9UNMpnn0PxtBItCpwAJbuWCKpqlVwD7loqCYQ5Zzj7KmS5OwVkAxjFlMGxK1%2FVm225OHH%2FrUqFtrDEbdv0q6y6Am6xfvNTysP8kJc%2BqJPWFez%2F6gsMKJ%2FGkpSO598mp1mP3DMeaiX%2F86J8lwyJFh9w8bsOKlXH8LlvD2%2FO1zxymLWitUfkEVP9GTF%2Badf7C2QscUxgxPHSZBW22WvXqLmtjZ5qpHrYXXxVd0i5SMcuLLeQEh2Hh91O4QnwzEZPsKhI4HVo%2BqONgyCSUfI6IlGSWxnxChwFMnXNtiGyJOUbceNaanNf8LI9RuPxgWEbIeNYYo134rhS2kKVfmmNJf57yAqi0%2FwTECBdlHSsnAW7QagKl675kQGDsZtY4vdtBoxRyjXerj%2BMDIqO1mu6EFgV2c11x%2FXwBMIKfx70GOqUBxoSa02k2AXQJdaXwVuLkhNSilRJchMutFqG4aoAiMGxKi9ugQN%2F2Qg5yKClBw6r1630zeqJlT94D8L3Y%2FBwj%2FBaIS2ggEL4UHlriFwKONbk0AQ0ha1vlbcCXOjtx0ONZlNKEG%2FHCTxNt700nEBK9ajONNkAAq%2F6j5%2FVRMWZoizRbgBDqFtpBTrKq2Rd88HvTB1YD2C9AlCNjDLn%2F0RQj6LjflAEc&X-Amz-Signature=5f2aae400f18b7acf820d8e3d350dfac59207d5899b76376ccdfbc549dc141e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRURNWIO%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T131149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC52gZ76zhOxu82Wx%2FNOAtBLLm8p1Hhalhe6KvxG1E8kQIgN2DCVH6CPdpiO3V5KqUC0ArWvZgqqnBmUKYfWPuZtjkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKSwu6PeYDypCKHBayrcAyKTpHCVew570LEUG93Y7%2F1vIdv%2BYW3r%2FFlT853v2Z63eyecq%2FzsRQR2zFalje%2ByBU05aQRf2qNMHuHLFCJdMmljaFUMJPPvnwPP8n%2B7cp%2F%2FhlkUy1pp83R4CpMoFKela5y9AJ6HeGpFiIV92Jslq72hYiwkqfgH9NH8p5shRkeHULYQMUmgf4MFq5Z16jcGWHZesMJwuprPg3yywcKKdbwyOiGEb9UNMpnn0PxtBItCpwAJbuWCKpqlVwD7loqCYQ5Zzj7KmS5OwVkAxjFlMGxK1%2FVm225OHH%2FrUqFtrDEbdv0q6y6Am6xfvNTysP8kJc%2BqJPWFez%2F6gsMKJ%2FGkpSO598mp1mP3DMeaiX%2F86J8lwyJFh9w8bsOKlXH8LlvD2%2FO1zxymLWitUfkEVP9GTF%2Badf7C2QscUxgxPHSZBW22WvXqLmtjZ5qpHrYXXxVd0i5SMcuLLeQEh2Hh91O4QnwzEZPsKhI4HVo%2BqONgyCSUfI6IlGSWxnxChwFMnXNtiGyJOUbceNaanNf8LI9RuPxgWEbIeNYYo134rhS2kKVfmmNJf57yAqi0%2FwTECBdlHSsnAW7QagKl675kQGDsZtY4vdtBoxRyjXerj%2BMDIqO1mu6EFgV2c11x%2FXwBMIKfx70GOqUBxoSa02k2AXQJdaXwVuLkhNSilRJchMutFqG4aoAiMGxKi9ugQN%2F2Qg5yKClBw6r1630zeqJlT94D8L3Y%2FBwj%2FBaIS2ggEL4UHlriFwKONbk0AQ0ha1vlbcCXOjtx0ONZlNKEG%2FHCTxNt700nEBK9ajONNkAAq%2F6j5%2FVRMWZoizRbgBDqFtpBTrKq2Rd88HvTB1YD2C9AlCNjDLn%2F0RQj6LjflAEc&X-Amz-Signature=577c6d5b987eda0746b6ff74241c2f30bfcfbd899032f8ffbb3d0619305a21c8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRURNWIO%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T131149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC52gZ76zhOxu82Wx%2FNOAtBLLm8p1Hhalhe6KvxG1E8kQIgN2DCVH6CPdpiO3V5KqUC0ArWvZgqqnBmUKYfWPuZtjkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKSwu6PeYDypCKHBayrcAyKTpHCVew570LEUG93Y7%2F1vIdv%2BYW3r%2FFlT853v2Z63eyecq%2FzsRQR2zFalje%2ByBU05aQRf2qNMHuHLFCJdMmljaFUMJPPvnwPP8n%2B7cp%2F%2FhlkUy1pp83R4CpMoFKela5y9AJ6HeGpFiIV92Jslq72hYiwkqfgH9NH8p5shRkeHULYQMUmgf4MFq5Z16jcGWHZesMJwuprPg3yywcKKdbwyOiGEb9UNMpnn0PxtBItCpwAJbuWCKpqlVwD7loqCYQ5Zzj7KmS5OwVkAxjFlMGxK1%2FVm225OHH%2FrUqFtrDEbdv0q6y6Am6xfvNTysP8kJc%2BqJPWFez%2F6gsMKJ%2FGkpSO598mp1mP3DMeaiX%2F86J8lwyJFh9w8bsOKlXH8LlvD2%2FO1zxymLWitUfkEVP9GTF%2Badf7C2QscUxgxPHSZBW22WvXqLmtjZ5qpHrYXXxVd0i5SMcuLLeQEh2Hh91O4QnwzEZPsKhI4HVo%2BqONgyCSUfI6IlGSWxnxChwFMnXNtiGyJOUbceNaanNf8LI9RuPxgWEbIeNYYo134rhS2kKVfmmNJf57yAqi0%2FwTECBdlHSsnAW7QagKl675kQGDsZtY4vdtBoxRyjXerj%2BMDIqO1mu6EFgV2c11x%2FXwBMIKfx70GOqUBxoSa02k2AXQJdaXwVuLkhNSilRJchMutFqG4aoAiMGxKi9ugQN%2F2Qg5yKClBw6r1630zeqJlT94D8L3Y%2FBwj%2FBaIS2ggEL4UHlriFwKONbk0AQ0ha1vlbcCXOjtx0ONZlNKEG%2FHCTxNt700nEBK9ajONNkAAq%2F6j5%2FVRMWZoizRbgBDqFtpBTrKq2Rd88HvTB1YD2C9AlCNjDLn%2F0RQj6LjflAEc&X-Amz-Signature=efc0b85e8e5b148885ad72e254ae747a6e45cc6fda635bad569c5ea84c1dfba5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRURNWIO%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T131149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC52gZ76zhOxu82Wx%2FNOAtBLLm8p1Hhalhe6KvxG1E8kQIgN2DCVH6CPdpiO3V5KqUC0ArWvZgqqnBmUKYfWPuZtjkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKSwu6PeYDypCKHBayrcAyKTpHCVew570LEUG93Y7%2F1vIdv%2BYW3r%2FFlT853v2Z63eyecq%2FzsRQR2zFalje%2ByBU05aQRf2qNMHuHLFCJdMmljaFUMJPPvnwPP8n%2B7cp%2F%2FhlkUy1pp83R4CpMoFKela5y9AJ6HeGpFiIV92Jslq72hYiwkqfgH9NH8p5shRkeHULYQMUmgf4MFq5Z16jcGWHZesMJwuprPg3yywcKKdbwyOiGEb9UNMpnn0PxtBItCpwAJbuWCKpqlVwD7loqCYQ5Zzj7KmS5OwVkAxjFlMGxK1%2FVm225OHH%2FrUqFtrDEbdv0q6y6Am6xfvNTysP8kJc%2BqJPWFez%2F6gsMKJ%2FGkpSO598mp1mP3DMeaiX%2F86J8lwyJFh9w8bsOKlXH8LlvD2%2FO1zxymLWitUfkEVP9GTF%2Badf7C2QscUxgxPHSZBW22WvXqLmtjZ5qpHrYXXxVd0i5SMcuLLeQEh2Hh91O4QnwzEZPsKhI4HVo%2BqONgyCSUfI6IlGSWxnxChwFMnXNtiGyJOUbceNaanNf8LI9RuPxgWEbIeNYYo134rhS2kKVfmmNJf57yAqi0%2FwTECBdlHSsnAW7QagKl675kQGDsZtY4vdtBoxRyjXerj%2BMDIqO1mu6EFgV2c11x%2FXwBMIKfx70GOqUBxoSa02k2AXQJdaXwVuLkhNSilRJchMutFqG4aoAiMGxKi9ugQN%2F2Qg5yKClBw6r1630zeqJlT94D8L3Y%2FBwj%2FBaIS2ggEL4UHlriFwKONbk0AQ0ha1vlbcCXOjtx0ONZlNKEG%2FHCTxNt700nEBK9ajONNkAAq%2F6j5%2FVRMWZoizRbgBDqFtpBTrKq2Rd88HvTB1YD2C9AlCNjDLn%2F0RQj6LjflAEc&X-Amz-Signature=d0b18723cc3d0675f792cd31f0bcba506defa1a1a3754fd08e0e9cf11b58aaf0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRURNWIO%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T131149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC52gZ76zhOxu82Wx%2FNOAtBLLm8p1Hhalhe6KvxG1E8kQIgN2DCVH6CPdpiO3V5KqUC0ArWvZgqqnBmUKYfWPuZtjkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKSwu6PeYDypCKHBayrcAyKTpHCVew570LEUG93Y7%2F1vIdv%2BYW3r%2FFlT853v2Z63eyecq%2FzsRQR2zFalje%2ByBU05aQRf2qNMHuHLFCJdMmljaFUMJPPvnwPP8n%2B7cp%2F%2FhlkUy1pp83R4CpMoFKela5y9AJ6HeGpFiIV92Jslq72hYiwkqfgH9NH8p5shRkeHULYQMUmgf4MFq5Z16jcGWHZesMJwuprPg3yywcKKdbwyOiGEb9UNMpnn0PxtBItCpwAJbuWCKpqlVwD7loqCYQ5Zzj7KmS5OwVkAxjFlMGxK1%2FVm225OHH%2FrUqFtrDEbdv0q6y6Am6xfvNTysP8kJc%2BqJPWFez%2F6gsMKJ%2FGkpSO598mp1mP3DMeaiX%2F86J8lwyJFh9w8bsOKlXH8LlvD2%2FO1zxymLWitUfkEVP9GTF%2Badf7C2QscUxgxPHSZBW22WvXqLmtjZ5qpHrYXXxVd0i5SMcuLLeQEh2Hh91O4QnwzEZPsKhI4HVo%2BqONgyCSUfI6IlGSWxnxChwFMnXNtiGyJOUbceNaanNf8LI9RuPxgWEbIeNYYo134rhS2kKVfmmNJf57yAqi0%2FwTECBdlHSsnAW7QagKl675kQGDsZtY4vdtBoxRyjXerj%2BMDIqO1mu6EFgV2c11x%2FXwBMIKfx70GOqUBxoSa02k2AXQJdaXwVuLkhNSilRJchMutFqG4aoAiMGxKi9ugQN%2F2Qg5yKClBw6r1630zeqJlT94D8L3Y%2FBwj%2FBaIS2ggEL4UHlriFwKONbk0AQ0ha1vlbcCXOjtx0ONZlNKEG%2FHCTxNt700nEBK9ajONNkAAq%2F6j5%2FVRMWZoizRbgBDqFtpBTrKq2Rd88HvTB1YD2C9AlCNjDLn%2F0RQj6LjflAEc&X-Amz-Signature=a60ab3e4d30de612f21141b1058cd5b38eddaf6061222c0a3aac4df77364d7ff&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRURNWIO%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T131149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC52gZ76zhOxu82Wx%2FNOAtBLLm8p1Hhalhe6KvxG1E8kQIgN2DCVH6CPdpiO3V5KqUC0ArWvZgqqnBmUKYfWPuZtjkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKSwu6PeYDypCKHBayrcAyKTpHCVew570LEUG93Y7%2F1vIdv%2BYW3r%2FFlT853v2Z63eyecq%2FzsRQR2zFalje%2ByBU05aQRf2qNMHuHLFCJdMmljaFUMJPPvnwPP8n%2B7cp%2F%2FhlkUy1pp83R4CpMoFKela5y9AJ6HeGpFiIV92Jslq72hYiwkqfgH9NH8p5shRkeHULYQMUmgf4MFq5Z16jcGWHZesMJwuprPg3yywcKKdbwyOiGEb9UNMpnn0PxtBItCpwAJbuWCKpqlVwD7loqCYQ5Zzj7KmS5OwVkAxjFlMGxK1%2FVm225OHH%2FrUqFtrDEbdv0q6y6Am6xfvNTysP8kJc%2BqJPWFez%2F6gsMKJ%2FGkpSO598mp1mP3DMeaiX%2F86J8lwyJFh9w8bsOKlXH8LlvD2%2FO1zxymLWitUfkEVP9GTF%2Badf7C2QscUxgxPHSZBW22WvXqLmtjZ5qpHrYXXxVd0i5SMcuLLeQEh2Hh91O4QnwzEZPsKhI4HVo%2BqONgyCSUfI6IlGSWxnxChwFMnXNtiGyJOUbceNaanNf8LI9RuPxgWEbIeNYYo134rhS2kKVfmmNJf57yAqi0%2FwTECBdlHSsnAW7QagKl675kQGDsZtY4vdtBoxRyjXerj%2BMDIqO1mu6EFgV2c11x%2FXwBMIKfx70GOqUBxoSa02k2AXQJdaXwVuLkhNSilRJchMutFqG4aoAiMGxKi9ugQN%2F2Qg5yKClBw6r1630zeqJlT94D8L3Y%2FBwj%2FBaIS2ggEL4UHlriFwKONbk0AQ0ha1vlbcCXOjtx0ONZlNKEG%2FHCTxNt700nEBK9ajONNkAAq%2F6j5%2FVRMWZoizRbgBDqFtpBTrKq2Rd88HvTB1YD2C9AlCNjDLn%2F0RQj6LjflAEc&X-Amz-Signature=9000313c01ec81e8036fe2ca08ec1c4a59dc198b5e59b4a48c99751c6b18b123&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRURNWIO%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T131149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC52gZ76zhOxu82Wx%2FNOAtBLLm8p1Hhalhe6KvxG1E8kQIgN2DCVH6CPdpiO3V5KqUC0ArWvZgqqnBmUKYfWPuZtjkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKSwu6PeYDypCKHBayrcAyKTpHCVew570LEUG93Y7%2F1vIdv%2BYW3r%2FFlT853v2Z63eyecq%2FzsRQR2zFalje%2ByBU05aQRf2qNMHuHLFCJdMmljaFUMJPPvnwPP8n%2B7cp%2F%2FhlkUy1pp83R4CpMoFKela5y9AJ6HeGpFiIV92Jslq72hYiwkqfgH9NH8p5shRkeHULYQMUmgf4MFq5Z16jcGWHZesMJwuprPg3yywcKKdbwyOiGEb9UNMpnn0PxtBItCpwAJbuWCKpqlVwD7loqCYQ5Zzj7KmS5OwVkAxjFlMGxK1%2FVm225OHH%2FrUqFtrDEbdv0q6y6Am6xfvNTysP8kJc%2BqJPWFez%2F6gsMKJ%2FGkpSO598mp1mP3DMeaiX%2F86J8lwyJFh9w8bsOKlXH8LlvD2%2FO1zxymLWitUfkEVP9GTF%2Badf7C2QscUxgxPHSZBW22WvXqLmtjZ5qpHrYXXxVd0i5SMcuLLeQEh2Hh91O4QnwzEZPsKhI4HVo%2BqONgyCSUfI6IlGSWxnxChwFMnXNtiGyJOUbceNaanNf8LI9RuPxgWEbIeNYYo134rhS2kKVfmmNJf57yAqi0%2FwTECBdlHSsnAW7QagKl675kQGDsZtY4vdtBoxRyjXerj%2BMDIqO1mu6EFgV2c11x%2FXwBMIKfx70GOqUBxoSa02k2AXQJdaXwVuLkhNSilRJchMutFqG4aoAiMGxKi9ugQN%2F2Qg5yKClBw6r1630zeqJlT94D8L3Y%2FBwj%2FBaIS2ggEL4UHlriFwKONbk0AQ0ha1vlbcCXOjtx0ONZlNKEG%2FHCTxNt700nEBK9ajONNkAAq%2F6j5%2FVRMWZoizRbgBDqFtpBTrKq2Rd88HvTB1YD2C9AlCNjDLn%2F0RQj6LjflAEc&X-Amz-Signature=1f79e44fe69aafc43e8354e7996bc44e654a4ceb90e820d878bc5ef7d1483cf3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
