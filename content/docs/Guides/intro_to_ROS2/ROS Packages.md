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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKRXFSSZ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxdLY3WOP%2Bp5c63YFQ2bItwFArBuR6foS3NUoURgCRyAiBJfDWG9963p85mD%2FYPgTsmypmLVnioIRarT5mYFCPrVyqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNAfkp9xJM9wPqWKhKtwD4%2FM8EMMZ0Eq2t%2BOiCzRMGGp4q7aXk3Iwi%2BoOytkBwMLmkmEbTlkH0xuqoMKknLwpyUknIXL5CwYy0he5lS3TJ%2BHziRH73dVFCq%2Bt9CTLPStIZkM5GVa%2F23KPFJJPY0chonD%2BCOWAIR1Q3iD%2BGctFfHI0Ja8NkPcKsEm%2BLZaqKlYz19kqSuxecsGkALVUhIT0A7ExLCvqSfjC%2BiCErOeJMMaS7W56dsjVMSBDTXdC2WfvwM4laFPnJv%2BjVWt%2B8bJPBHB6VnO%2FGnCzfKeKQ%2FcFSlgYm8zsRqHc38RIVhQfuCJaG2g%2BimMo6OBlcm1ipfy2BOFgV68NasyDteUDmG5Q%2FBmkn5IrxAvFyOIxqhKzbDdLUGbmz9qmb3ThBNlTY4GjQmpMAn%2FCFbvjwYeMdJiAlsdYL1gs3SFQcRfklkK14oAiOqn%2BsTwT%2BQX8PGtAH1Uf0q9y%2F6BO4gHumSLw%2FKsFaIHnrV85vVa2DB78WhQovqUllFlPEcnYFQtmnUmcFIeIpHixekQJbH9%2BJn%2FTb20LzSqM7Eq1wZTFyLR8sMQ3nH1IqmDBlCsrFI4j0xstRUGQxKxI1ZNGQrwzCr49wRevfx%2BjThyPuLd7DukHoCmAYjlTRyyac4H14isSqd8whY%2F6wwY6pgEQGrVVAzxvpdu%2FJlqcFvBYnrxAGz%2BT%2BdS0EhvvcwTWqhkIQdO4jd7gcQjok9RTG%2BnhqTGy7eq%2BHbzzBQrk8Lt1u1gS7w0FNScmAQZtHzRAqN7gkoCEqBnQBBzOB3PD%2Boz2F9Rk113pN8ASq95OYh1qppGCPd7IW%2FH8CijNnI%2BLAaRh9gUf0n9gBMEODlNo%2B%2BkKFIlNgRtAk%2Fn2mMueJ4IXpNyRI8gd&X-Amz-Signature=d510783c850557d66dbe723f70aa7376708e9829117b425a6298af8da047bc40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKRXFSSZ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxdLY3WOP%2Bp5c63YFQ2bItwFArBuR6foS3NUoURgCRyAiBJfDWG9963p85mD%2FYPgTsmypmLVnioIRarT5mYFCPrVyqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNAfkp9xJM9wPqWKhKtwD4%2FM8EMMZ0Eq2t%2BOiCzRMGGp4q7aXk3Iwi%2BoOytkBwMLmkmEbTlkH0xuqoMKknLwpyUknIXL5CwYy0he5lS3TJ%2BHziRH73dVFCq%2Bt9CTLPStIZkM5GVa%2F23KPFJJPY0chonD%2BCOWAIR1Q3iD%2BGctFfHI0Ja8NkPcKsEm%2BLZaqKlYz19kqSuxecsGkALVUhIT0A7ExLCvqSfjC%2BiCErOeJMMaS7W56dsjVMSBDTXdC2WfvwM4laFPnJv%2BjVWt%2B8bJPBHB6VnO%2FGnCzfKeKQ%2FcFSlgYm8zsRqHc38RIVhQfuCJaG2g%2BimMo6OBlcm1ipfy2BOFgV68NasyDteUDmG5Q%2FBmkn5IrxAvFyOIxqhKzbDdLUGbmz9qmb3ThBNlTY4GjQmpMAn%2FCFbvjwYeMdJiAlsdYL1gs3SFQcRfklkK14oAiOqn%2BsTwT%2BQX8PGtAH1Uf0q9y%2F6BO4gHumSLw%2FKsFaIHnrV85vVa2DB78WhQovqUllFlPEcnYFQtmnUmcFIeIpHixekQJbH9%2BJn%2FTb20LzSqM7Eq1wZTFyLR8sMQ3nH1IqmDBlCsrFI4j0xstRUGQxKxI1ZNGQrwzCr49wRevfx%2BjThyPuLd7DukHoCmAYjlTRyyac4H14isSqd8whY%2F6wwY6pgEQGrVVAzxvpdu%2FJlqcFvBYnrxAGz%2BT%2BdS0EhvvcwTWqhkIQdO4jd7gcQjok9RTG%2BnhqTGy7eq%2BHbzzBQrk8Lt1u1gS7w0FNScmAQZtHzRAqN7gkoCEqBnQBBzOB3PD%2Boz2F9Rk113pN8ASq95OYh1qppGCPd7IW%2FH8CijNnI%2BLAaRh9gUf0n9gBMEODlNo%2B%2BkKFIlNgRtAk%2Fn2mMueJ4IXpNyRI8gd&X-Amz-Signature=d4b153cc0247e5e82a309ec16554c4c2910f14b22577d57b524fbe0f0ec088e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKRXFSSZ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxdLY3WOP%2Bp5c63YFQ2bItwFArBuR6foS3NUoURgCRyAiBJfDWG9963p85mD%2FYPgTsmypmLVnioIRarT5mYFCPrVyqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNAfkp9xJM9wPqWKhKtwD4%2FM8EMMZ0Eq2t%2BOiCzRMGGp4q7aXk3Iwi%2BoOytkBwMLmkmEbTlkH0xuqoMKknLwpyUknIXL5CwYy0he5lS3TJ%2BHziRH73dVFCq%2Bt9CTLPStIZkM5GVa%2F23KPFJJPY0chonD%2BCOWAIR1Q3iD%2BGctFfHI0Ja8NkPcKsEm%2BLZaqKlYz19kqSuxecsGkALVUhIT0A7ExLCvqSfjC%2BiCErOeJMMaS7W56dsjVMSBDTXdC2WfvwM4laFPnJv%2BjVWt%2B8bJPBHB6VnO%2FGnCzfKeKQ%2FcFSlgYm8zsRqHc38RIVhQfuCJaG2g%2BimMo6OBlcm1ipfy2BOFgV68NasyDteUDmG5Q%2FBmkn5IrxAvFyOIxqhKzbDdLUGbmz9qmb3ThBNlTY4GjQmpMAn%2FCFbvjwYeMdJiAlsdYL1gs3SFQcRfklkK14oAiOqn%2BsTwT%2BQX8PGtAH1Uf0q9y%2F6BO4gHumSLw%2FKsFaIHnrV85vVa2DB78WhQovqUllFlPEcnYFQtmnUmcFIeIpHixekQJbH9%2BJn%2FTb20LzSqM7Eq1wZTFyLR8sMQ3nH1IqmDBlCsrFI4j0xstRUGQxKxI1ZNGQrwzCr49wRevfx%2BjThyPuLd7DukHoCmAYjlTRyyac4H14isSqd8whY%2F6wwY6pgEQGrVVAzxvpdu%2FJlqcFvBYnrxAGz%2BT%2BdS0EhvvcwTWqhkIQdO4jd7gcQjok9RTG%2BnhqTGy7eq%2BHbzzBQrk8Lt1u1gS7w0FNScmAQZtHzRAqN7gkoCEqBnQBBzOB3PD%2Boz2F9Rk113pN8ASq95OYh1qppGCPd7IW%2FH8CijNnI%2BLAaRh9gUf0n9gBMEODlNo%2B%2BkKFIlNgRtAk%2Fn2mMueJ4IXpNyRI8gd&X-Amz-Signature=e7aae9556d960d7bc79b0738edb73a2da6c0287ef1abc864c38a95f2c2e43026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKRXFSSZ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxdLY3WOP%2Bp5c63YFQ2bItwFArBuR6foS3NUoURgCRyAiBJfDWG9963p85mD%2FYPgTsmypmLVnioIRarT5mYFCPrVyqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNAfkp9xJM9wPqWKhKtwD4%2FM8EMMZ0Eq2t%2BOiCzRMGGp4q7aXk3Iwi%2BoOytkBwMLmkmEbTlkH0xuqoMKknLwpyUknIXL5CwYy0he5lS3TJ%2BHziRH73dVFCq%2Bt9CTLPStIZkM5GVa%2F23KPFJJPY0chonD%2BCOWAIR1Q3iD%2BGctFfHI0Ja8NkPcKsEm%2BLZaqKlYz19kqSuxecsGkALVUhIT0A7ExLCvqSfjC%2BiCErOeJMMaS7W56dsjVMSBDTXdC2WfvwM4laFPnJv%2BjVWt%2B8bJPBHB6VnO%2FGnCzfKeKQ%2FcFSlgYm8zsRqHc38RIVhQfuCJaG2g%2BimMo6OBlcm1ipfy2BOFgV68NasyDteUDmG5Q%2FBmkn5IrxAvFyOIxqhKzbDdLUGbmz9qmb3ThBNlTY4GjQmpMAn%2FCFbvjwYeMdJiAlsdYL1gs3SFQcRfklkK14oAiOqn%2BsTwT%2BQX8PGtAH1Uf0q9y%2F6BO4gHumSLw%2FKsFaIHnrV85vVa2DB78WhQovqUllFlPEcnYFQtmnUmcFIeIpHixekQJbH9%2BJn%2FTb20LzSqM7Eq1wZTFyLR8sMQ3nH1IqmDBlCsrFI4j0xstRUGQxKxI1ZNGQrwzCr49wRevfx%2BjThyPuLd7DukHoCmAYjlTRyyac4H14isSqd8whY%2F6wwY6pgEQGrVVAzxvpdu%2FJlqcFvBYnrxAGz%2BT%2BdS0EhvvcwTWqhkIQdO4jd7gcQjok9RTG%2BnhqTGy7eq%2BHbzzBQrk8Lt1u1gS7w0FNScmAQZtHzRAqN7gkoCEqBnQBBzOB3PD%2Boz2F9Rk113pN8ASq95OYh1qppGCPd7IW%2FH8CijNnI%2BLAaRh9gUf0n9gBMEODlNo%2B%2BkKFIlNgRtAk%2Fn2mMueJ4IXpNyRI8gd&X-Amz-Signature=7d30a685d149607aeb0fe90118337a8d9a3aaf4b54818117b63c6acdc49adc72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKRXFSSZ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxdLY3WOP%2Bp5c63YFQ2bItwFArBuR6foS3NUoURgCRyAiBJfDWG9963p85mD%2FYPgTsmypmLVnioIRarT5mYFCPrVyqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNAfkp9xJM9wPqWKhKtwD4%2FM8EMMZ0Eq2t%2BOiCzRMGGp4q7aXk3Iwi%2BoOytkBwMLmkmEbTlkH0xuqoMKknLwpyUknIXL5CwYy0he5lS3TJ%2BHziRH73dVFCq%2Bt9CTLPStIZkM5GVa%2F23KPFJJPY0chonD%2BCOWAIR1Q3iD%2BGctFfHI0Ja8NkPcKsEm%2BLZaqKlYz19kqSuxecsGkALVUhIT0A7ExLCvqSfjC%2BiCErOeJMMaS7W56dsjVMSBDTXdC2WfvwM4laFPnJv%2BjVWt%2B8bJPBHB6VnO%2FGnCzfKeKQ%2FcFSlgYm8zsRqHc38RIVhQfuCJaG2g%2BimMo6OBlcm1ipfy2BOFgV68NasyDteUDmG5Q%2FBmkn5IrxAvFyOIxqhKzbDdLUGbmz9qmb3ThBNlTY4GjQmpMAn%2FCFbvjwYeMdJiAlsdYL1gs3SFQcRfklkK14oAiOqn%2BsTwT%2BQX8PGtAH1Uf0q9y%2F6BO4gHumSLw%2FKsFaIHnrV85vVa2DB78WhQovqUllFlPEcnYFQtmnUmcFIeIpHixekQJbH9%2BJn%2FTb20LzSqM7Eq1wZTFyLR8sMQ3nH1IqmDBlCsrFI4j0xstRUGQxKxI1ZNGQrwzCr49wRevfx%2BjThyPuLd7DukHoCmAYjlTRyyac4H14isSqd8whY%2F6wwY6pgEQGrVVAzxvpdu%2FJlqcFvBYnrxAGz%2BT%2BdS0EhvvcwTWqhkIQdO4jd7gcQjok9RTG%2BnhqTGy7eq%2BHbzzBQrk8Lt1u1gS7w0FNScmAQZtHzRAqN7gkoCEqBnQBBzOB3PD%2Boz2F9Rk113pN8ASq95OYh1qppGCPd7IW%2FH8CijNnI%2BLAaRh9gUf0n9gBMEODlNo%2B%2BkKFIlNgRtAk%2Fn2mMueJ4IXpNyRI8gd&X-Amz-Signature=26d1281331f0f14c5393a920b5e867e6aaa233c76a6d60b6027188df0fbb4ade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKRXFSSZ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxdLY3WOP%2Bp5c63YFQ2bItwFArBuR6foS3NUoURgCRyAiBJfDWG9963p85mD%2FYPgTsmypmLVnioIRarT5mYFCPrVyqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNAfkp9xJM9wPqWKhKtwD4%2FM8EMMZ0Eq2t%2BOiCzRMGGp4q7aXk3Iwi%2BoOytkBwMLmkmEbTlkH0xuqoMKknLwpyUknIXL5CwYy0he5lS3TJ%2BHziRH73dVFCq%2Bt9CTLPStIZkM5GVa%2F23KPFJJPY0chonD%2BCOWAIR1Q3iD%2BGctFfHI0Ja8NkPcKsEm%2BLZaqKlYz19kqSuxecsGkALVUhIT0A7ExLCvqSfjC%2BiCErOeJMMaS7W56dsjVMSBDTXdC2WfvwM4laFPnJv%2BjVWt%2B8bJPBHB6VnO%2FGnCzfKeKQ%2FcFSlgYm8zsRqHc38RIVhQfuCJaG2g%2BimMo6OBlcm1ipfy2BOFgV68NasyDteUDmG5Q%2FBmkn5IrxAvFyOIxqhKzbDdLUGbmz9qmb3ThBNlTY4GjQmpMAn%2FCFbvjwYeMdJiAlsdYL1gs3SFQcRfklkK14oAiOqn%2BsTwT%2BQX8PGtAH1Uf0q9y%2F6BO4gHumSLw%2FKsFaIHnrV85vVa2DB78WhQovqUllFlPEcnYFQtmnUmcFIeIpHixekQJbH9%2BJn%2FTb20LzSqM7Eq1wZTFyLR8sMQ3nH1IqmDBlCsrFI4j0xstRUGQxKxI1ZNGQrwzCr49wRevfx%2BjThyPuLd7DukHoCmAYjlTRyyac4H14isSqd8whY%2F6wwY6pgEQGrVVAzxvpdu%2FJlqcFvBYnrxAGz%2BT%2BdS0EhvvcwTWqhkIQdO4jd7gcQjok9RTG%2BnhqTGy7eq%2BHbzzBQrk8Lt1u1gS7w0FNScmAQZtHzRAqN7gkoCEqBnQBBzOB3PD%2Boz2F9Rk113pN8ASq95OYh1qppGCPd7IW%2FH8CijNnI%2BLAaRh9gUf0n9gBMEODlNo%2B%2BkKFIlNgRtAk%2Fn2mMueJ4IXpNyRI8gd&X-Amz-Signature=414938f01ff9ef8c24c138fb3d41cecb66feb664ea0802747b5e4362d129c7d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKRXFSSZ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxdLY3WOP%2Bp5c63YFQ2bItwFArBuR6foS3NUoURgCRyAiBJfDWG9963p85mD%2FYPgTsmypmLVnioIRarT5mYFCPrVyqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNAfkp9xJM9wPqWKhKtwD4%2FM8EMMZ0Eq2t%2BOiCzRMGGp4q7aXk3Iwi%2BoOytkBwMLmkmEbTlkH0xuqoMKknLwpyUknIXL5CwYy0he5lS3TJ%2BHziRH73dVFCq%2Bt9CTLPStIZkM5GVa%2F23KPFJJPY0chonD%2BCOWAIR1Q3iD%2BGctFfHI0Ja8NkPcKsEm%2BLZaqKlYz19kqSuxecsGkALVUhIT0A7ExLCvqSfjC%2BiCErOeJMMaS7W56dsjVMSBDTXdC2WfvwM4laFPnJv%2BjVWt%2B8bJPBHB6VnO%2FGnCzfKeKQ%2FcFSlgYm8zsRqHc38RIVhQfuCJaG2g%2BimMo6OBlcm1ipfy2BOFgV68NasyDteUDmG5Q%2FBmkn5IrxAvFyOIxqhKzbDdLUGbmz9qmb3ThBNlTY4GjQmpMAn%2FCFbvjwYeMdJiAlsdYL1gs3SFQcRfklkK14oAiOqn%2BsTwT%2BQX8PGtAH1Uf0q9y%2F6BO4gHumSLw%2FKsFaIHnrV85vVa2DB78WhQovqUllFlPEcnYFQtmnUmcFIeIpHixekQJbH9%2BJn%2FTb20LzSqM7Eq1wZTFyLR8sMQ3nH1IqmDBlCsrFI4j0xstRUGQxKxI1ZNGQrwzCr49wRevfx%2BjThyPuLd7DukHoCmAYjlTRyyac4H14isSqd8whY%2F6wwY6pgEQGrVVAzxvpdu%2FJlqcFvBYnrxAGz%2BT%2BdS0EhvvcwTWqhkIQdO4jd7gcQjok9RTG%2BnhqTGy7eq%2BHbzzBQrk8Lt1u1gS7w0FNScmAQZtHzRAqN7gkoCEqBnQBBzOB3PD%2Boz2F9Rk113pN8ASq95OYh1qppGCPd7IW%2FH8CijNnI%2BLAaRh9gUf0n9gBMEODlNo%2B%2BkKFIlNgRtAk%2Fn2mMueJ4IXpNyRI8gd&X-Amz-Signature=580aa5faec3d17fd82232201a156be0a36c1c39c4fa70a76ce9d8252f0c3d2de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
