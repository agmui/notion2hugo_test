---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FY4FEAY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcZKyQUB3LtGZooTSL6pvWRxY8cx8TfAyYocWEp4%2FIuAIgE%2FKUfmcV5wJta1XyM%2FOfM3U%2Byue6JgFXsebOkJIZfh4q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDJ6%2B%2ByXG3S3MWBH5AircA4QTJOYfaVClY0%2Bm90NeWWJgL0oUPqVjH7h1C9BKPvd5NWLvHahvW89aN0gilhKCktZ4vNm1tSIOHAd%2BQkJZFhwRhWk2O%2F3a9%2FoL9qRkgxwQCmoKlR5gIFh%2FPeon4m0BjtW73ZNzee6CkWmNHh6cnuPKPkM4hmPMgyMNA0taqK%2Fcc8chysWIy0Ej4PJ380F740lRvVkwXX7b2fGX5SHbrjiV4eQSFedGigpP0BA95npWEOgeZSRHIStoOYXDHuR48%2BECcrzmRv5f%2BcDdK%2Bmom8cG0P%2BYX4TjnFYBKKh0L69RV%2Bmn4we9MIf46DY4mz2sNq5JWh0HHuDfH37jHGghonPHztef9%2F%2FZtpepKN5NPAgDvFpfgxgD4nxaAdEonC3pI7Gq1RlMpbrrwEbvbUOgLnUtbkpQXx%2FZOY1l9Rvd4DbAlaPVl5SZFLjVnSXuHEhDaDMte4IP2FiItHPsgK%2B%2ByOJSUOPhVPtY5ZrJVY2P28pQJCfw0%2Bhp5%2FvYnmuQ%2Bs1MfPEJvRdiicI1fEIhJf%2FM0HEnXls6YqykqsaFJbmcNl11SWDGD57gYRkAyGciw%2BRm59sLONOG2Y8r3DeZ4LtpREW6x%2BMOBGJNHQcrOpUxnqi4DdfCGMiTzvcEN9fdMMWE98QGOqUB0%2B0Hgq%2FY6VWoY0wQ3Ofl6p7W2KSu1M01lfxIKoLtS9yQgjV%2FpfScsjRG%2FFGxHSfegpelzZSSJQ3juxAVcsApJpG3iHyC%2BXwpKjZqDIyFzB%2Fzmi3DwGplQaNJOsWaQ1XTlNxirt8OiW4Goh5YQc9NwI5VBXQma66obBMRlhu8gUveD7V05huX%2BO0Lc99EJWfmm0RoZdqNfP09nxfGNBTCA2SSGwXc&X-Amz-Signature=95e6033a9447dfd8535e1a909f809a544697d1ecce357e6696eac46dcaa3e7f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FY4FEAY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcZKyQUB3LtGZooTSL6pvWRxY8cx8TfAyYocWEp4%2FIuAIgE%2FKUfmcV5wJta1XyM%2FOfM3U%2Byue6JgFXsebOkJIZfh4q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDJ6%2B%2ByXG3S3MWBH5AircA4QTJOYfaVClY0%2Bm90NeWWJgL0oUPqVjH7h1C9BKPvd5NWLvHahvW89aN0gilhKCktZ4vNm1tSIOHAd%2BQkJZFhwRhWk2O%2F3a9%2FoL9qRkgxwQCmoKlR5gIFh%2FPeon4m0BjtW73ZNzee6CkWmNHh6cnuPKPkM4hmPMgyMNA0taqK%2Fcc8chysWIy0Ej4PJ380F740lRvVkwXX7b2fGX5SHbrjiV4eQSFedGigpP0BA95npWEOgeZSRHIStoOYXDHuR48%2BECcrzmRv5f%2BcDdK%2Bmom8cG0P%2BYX4TjnFYBKKh0L69RV%2Bmn4we9MIf46DY4mz2sNq5JWh0HHuDfH37jHGghonPHztef9%2F%2FZtpepKN5NPAgDvFpfgxgD4nxaAdEonC3pI7Gq1RlMpbrrwEbvbUOgLnUtbkpQXx%2FZOY1l9Rvd4DbAlaPVl5SZFLjVnSXuHEhDaDMte4IP2FiItHPsgK%2B%2ByOJSUOPhVPtY5ZrJVY2P28pQJCfw0%2Bhp5%2FvYnmuQ%2Bs1MfPEJvRdiicI1fEIhJf%2FM0HEnXls6YqykqsaFJbmcNl11SWDGD57gYRkAyGciw%2BRm59sLONOG2Y8r3DeZ4LtpREW6x%2BMOBGJNHQcrOpUxnqi4DdfCGMiTzvcEN9fdMMWE98QGOqUB0%2B0Hgq%2FY6VWoY0wQ3Ofl6p7W2KSu1M01lfxIKoLtS9yQgjV%2FpfScsjRG%2FFGxHSfegpelzZSSJQ3juxAVcsApJpG3iHyC%2BXwpKjZqDIyFzB%2Fzmi3DwGplQaNJOsWaQ1XTlNxirt8OiW4Goh5YQc9NwI5VBXQma66obBMRlhu8gUveD7V05huX%2BO0Lc99EJWfmm0RoZdqNfP09nxfGNBTCA2SSGwXc&X-Amz-Signature=8aa0849c43cf9b667fd42c6c261f83afa963e3c7f0302f11cb9952e6d8a8b555&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FY4FEAY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcZKyQUB3LtGZooTSL6pvWRxY8cx8TfAyYocWEp4%2FIuAIgE%2FKUfmcV5wJta1XyM%2FOfM3U%2Byue6JgFXsebOkJIZfh4q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDJ6%2B%2ByXG3S3MWBH5AircA4QTJOYfaVClY0%2Bm90NeWWJgL0oUPqVjH7h1C9BKPvd5NWLvHahvW89aN0gilhKCktZ4vNm1tSIOHAd%2BQkJZFhwRhWk2O%2F3a9%2FoL9qRkgxwQCmoKlR5gIFh%2FPeon4m0BjtW73ZNzee6CkWmNHh6cnuPKPkM4hmPMgyMNA0taqK%2Fcc8chysWIy0Ej4PJ380F740lRvVkwXX7b2fGX5SHbrjiV4eQSFedGigpP0BA95npWEOgeZSRHIStoOYXDHuR48%2BECcrzmRv5f%2BcDdK%2Bmom8cG0P%2BYX4TjnFYBKKh0L69RV%2Bmn4we9MIf46DY4mz2sNq5JWh0HHuDfH37jHGghonPHztef9%2F%2FZtpepKN5NPAgDvFpfgxgD4nxaAdEonC3pI7Gq1RlMpbrrwEbvbUOgLnUtbkpQXx%2FZOY1l9Rvd4DbAlaPVl5SZFLjVnSXuHEhDaDMte4IP2FiItHPsgK%2B%2ByOJSUOPhVPtY5ZrJVY2P28pQJCfw0%2Bhp5%2FvYnmuQ%2Bs1MfPEJvRdiicI1fEIhJf%2FM0HEnXls6YqykqsaFJbmcNl11SWDGD57gYRkAyGciw%2BRm59sLONOG2Y8r3DeZ4LtpREW6x%2BMOBGJNHQcrOpUxnqi4DdfCGMiTzvcEN9fdMMWE98QGOqUB0%2B0Hgq%2FY6VWoY0wQ3Ofl6p7W2KSu1M01lfxIKoLtS9yQgjV%2FpfScsjRG%2FFGxHSfegpelzZSSJQ3juxAVcsApJpG3iHyC%2BXwpKjZqDIyFzB%2Fzmi3DwGplQaNJOsWaQ1XTlNxirt8OiW4Goh5YQc9NwI5VBXQma66obBMRlhu8gUveD7V05huX%2BO0Lc99EJWfmm0RoZdqNfP09nxfGNBTCA2SSGwXc&X-Amz-Signature=a1b1953a1650a48f5303dfcb6e40cf5b0c2f20f0393ae72a12e05881046aa2ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FY4FEAY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcZKyQUB3LtGZooTSL6pvWRxY8cx8TfAyYocWEp4%2FIuAIgE%2FKUfmcV5wJta1XyM%2FOfM3U%2Byue6JgFXsebOkJIZfh4q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDJ6%2B%2ByXG3S3MWBH5AircA4QTJOYfaVClY0%2Bm90NeWWJgL0oUPqVjH7h1C9BKPvd5NWLvHahvW89aN0gilhKCktZ4vNm1tSIOHAd%2BQkJZFhwRhWk2O%2F3a9%2FoL9qRkgxwQCmoKlR5gIFh%2FPeon4m0BjtW73ZNzee6CkWmNHh6cnuPKPkM4hmPMgyMNA0taqK%2Fcc8chysWIy0Ej4PJ380F740lRvVkwXX7b2fGX5SHbrjiV4eQSFedGigpP0BA95npWEOgeZSRHIStoOYXDHuR48%2BECcrzmRv5f%2BcDdK%2Bmom8cG0P%2BYX4TjnFYBKKh0L69RV%2Bmn4we9MIf46DY4mz2sNq5JWh0HHuDfH37jHGghonPHztef9%2F%2FZtpepKN5NPAgDvFpfgxgD4nxaAdEonC3pI7Gq1RlMpbrrwEbvbUOgLnUtbkpQXx%2FZOY1l9Rvd4DbAlaPVl5SZFLjVnSXuHEhDaDMte4IP2FiItHPsgK%2B%2ByOJSUOPhVPtY5ZrJVY2P28pQJCfw0%2Bhp5%2FvYnmuQ%2Bs1MfPEJvRdiicI1fEIhJf%2FM0HEnXls6YqykqsaFJbmcNl11SWDGD57gYRkAyGciw%2BRm59sLONOG2Y8r3DeZ4LtpREW6x%2BMOBGJNHQcrOpUxnqi4DdfCGMiTzvcEN9fdMMWE98QGOqUB0%2B0Hgq%2FY6VWoY0wQ3Ofl6p7W2KSu1M01lfxIKoLtS9yQgjV%2FpfScsjRG%2FFGxHSfegpelzZSSJQ3juxAVcsApJpG3iHyC%2BXwpKjZqDIyFzB%2Fzmi3DwGplQaNJOsWaQ1XTlNxirt8OiW4Goh5YQc9NwI5VBXQma66obBMRlhu8gUveD7V05huX%2BO0Lc99EJWfmm0RoZdqNfP09nxfGNBTCA2SSGwXc&X-Amz-Signature=2e1cf74dbc470f1f1aa0a390d0cdae824c92e51a454c5e6869a60310b9309b26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FY4FEAY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcZKyQUB3LtGZooTSL6pvWRxY8cx8TfAyYocWEp4%2FIuAIgE%2FKUfmcV5wJta1XyM%2FOfM3U%2Byue6JgFXsebOkJIZfh4q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDJ6%2B%2ByXG3S3MWBH5AircA4QTJOYfaVClY0%2Bm90NeWWJgL0oUPqVjH7h1C9BKPvd5NWLvHahvW89aN0gilhKCktZ4vNm1tSIOHAd%2BQkJZFhwRhWk2O%2F3a9%2FoL9qRkgxwQCmoKlR5gIFh%2FPeon4m0BjtW73ZNzee6CkWmNHh6cnuPKPkM4hmPMgyMNA0taqK%2Fcc8chysWIy0Ej4PJ380F740lRvVkwXX7b2fGX5SHbrjiV4eQSFedGigpP0BA95npWEOgeZSRHIStoOYXDHuR48%2BECcrzmRv5f%2BcDdK%2Bmom8cG0P%2BYX4TjnFYBKKh0L69RV%2Bmn4we9MIf46DY4mz2sNq5JWh0HHuDfH37jHGghonPHztef9%2F%2FZtpepKN5NPAgDvFpfgxgD4nxaAdEonC3pI7Gq1RlMpbrrwEbvbUOgLnUtbkpQXx%2FZOY1l9Rvd4DbAlaPVl5SZFLjVnSXuHEhDaDMte4IP2FiItHPsgK%2B%2ByOJSUOPhVPtY5ZrJVY2P28pQJCfw0%2Bhp5%2FvYnmuQ%2Bs1MfPEJvRdiicI1fEIhJf%2FM0HEnXls6YqykqsaFJbmcNl11SWDGD57gYRkAyGciw%2BRm59sLONOG2Y8r3DeZ4LtpREW6x%2BMOBGJNHQcrOpUxnqi4DdfCGMiTzvcEN9fdMMWE98QGOqUB0%2B0Hgq%2FY6VWoY0wQ3Ofl6p7W2KSu1M01lfxIKoLtS9yQgjV%2FpfScsjRG%2FFGxHSfegpelzZSSJQ3juxAVcsApJpG3iHyC%2BXwpKjZqDIyFzB%2Fzmi3DwGplQaNJOsWaQ1XTlNxirt8OiW4Goh5YQc9NwI5VBXQma66obBMRlhu8gUveD7V05huX%2BO0Lc99EJWfmm0RoZdqNfP09nxfGNBTCA2SSGwXc&X-Amz-Signature=a8ddb815bafcf01f92a3226c89abd4c716d3e22ee786ca4f350c6c0d2170baaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FY4FEAY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcZKyQUB3LtGZooTSL6pvWRxY8cx8TfAyYocWEp4%2FIuAIgE%2FKUfmcV5wJta1XyM%2FOfM3U%2Byue6JgFXsebOkJIZfh4q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDJ6%2B%2ByXG3S3MWBH5AircA4QTJOYfaVClY0%2Bm90NeWWJgL0oUPqVjH7h1C9BKPvd5NWLvHahvW89aN0gilhKCktZ4vNm1tSIOHAd%2BQkJZFhwRhWk2O%2F3a9%2FoL9qRkgxwQCmoKlR5gIFh%2FPeon4m0BjtW73ZNzee6CkWmNHh6cnuPKPkM4hmPMgyMNA0taqK%2Fcc8chysWIy0Ej4PJ380F740lRvVkwXX7b2fGX5SHbrjiV4eQSFedGigpP0BA95npWEOgeZSRHIStoOYXDHuR48%2BECcrzmRv5f%2BcDdK%2Bmom8cG0P%2BYX4TjnFYBKKh0L69RV%2Bmn4we9MIf46DY4mz2sNq5JWh0HHuDfH37jHGghonPHztef9%2F%2FZtpepKN5NPAgDvFpfgxgD4nxaAdEonC3pI7Gq1RlMpbrrwEbvbUOgLnUtbkpQXx%2FZOY1l9Rvd4DbAlaPVl5SZFLjVnSXuHEhDaDMte4IP2FiItHPsgK%2B%2ByOJSUOPhVPtY5ZrJVY2P28pQJCfw0%2Bhp5%2FvYnmuQ%2Bs1MfPEJvRdiicI1fEIhJf%2FM0HEnXls6YqykqsaFJbmcNl11SWDGD57gYRkAyGciw%2BRm59sLONOG2Y8r3DeZ4LtpREW6x%2BMOBGJNHQcrOpUxnqi4DdfCGMiTzvcEN9fdMMWE98QGOqUB0%2B0Hgq%2FY6VWoY0wQ3Ofl6p7W2KSu1M01lfxIKoLtS9yQgjV%2FpfScsjRG%2FFGxHSfegpelzZSSJQ3juxAVcsApJpG3iHyC%2BXwpKjZqDIyFzB%2Fzmi3DwGplQaNJOsWaQ1XTlNxirt8OiW4Goh5YQc9NwI5VBXQma66obBMRlhu8gUveD7V05huX%2BO0Lc99EJWfmm0RoZdqNfP09nxfGNBTCA2SSGwXc&X-Amz-Signature=a52cead87cfb8dd7ab584366b53dedbf5407f10000f3dfe1df6977322e7bbd69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FY4FEAY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcZKyQUB3LtGZooTSL6pvWRxY8cx8TfAyYocWEp4%2FIuAIgE%2FKUfmcV5wJta1XyM%2FOfM3U%2Byue6JgFXsebOkJIZfh4q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDJ6%2B%2ByXG3S3MWBH5AircA4QTJOYfaVClY0%2Bm90NeWWJgL0oUPqVjH7h1C9BKPvd5NWLvHahvW89aN0gilhKCktZ4vNm1tSIOHAd%2BQkJZFhwRhWk2O%2F3a9%2FoL9qRkgxwQCmoKlR5gIFh%2FPeon4m0BjtW73ZNzee6CkWmNHh6cnuPKPkM4hmPMgyMNA0taqK%2Fcc8chysWIy0Ej4PJ380F740lRvVkwXX7b2fGX5SHbrjiV4eQSFedGigpP0BA95npWEOgeZSRHIStoOYXDHuR48%2BECcrzmRv5f%2BcDdK%2Bmom8cG0P%2BYX4TjnFYBKKh0L69RV%2Bmn4we9MIf46DY4mz2sNq5JWh0HHuDfH37jHGghonPHztef9%2F%2FZtpepKN5NPAgDvFpfgxgD4nxaAdEonC3pI7Gq1RlMpbrrwEbvbUOgLnUtbkpQXx%2FZOY1l9Rvd4DbAlaPVl5SZFLjVnSXuHEhDaDMte4IP2FiItHPsgK%2B%2ByOJSUOPhVPtY5ZrJVY2P28pQJCfw0%2Bhp5%2FvYnmuQ%2Bs1MfPEJvRdiicI1fEIhJf%2FM0HEnXls6YqykqsaFJbmcNl11SWDGD57gYRkAyGciw%2BRm59sLONOG2Y8r3DeZ4LtpREW6x%2BMOBGJNHQcrOpUxnqi4DdfCGMiTzvcEN9fdMMWE98QGOqUB0%2B0Hgq%2FY6VWoY0wQ3Ofl6p7W2KSu1M01lfxIKoLtS9yQgjV%2FpfScsjRG%2FFGxHSfegpelzZSSJQ3juxAVcsApJpG3iHyC%2BXwpKjZqDIyFzB%2Fzmi3DwGplQaNJOsWaQ1XTlNxirt8OiW4Goh5YQc9NwI5VBXQma66obBMRlhu8gUveD7V05huX%2BO0Lc99EJWfmm0RoZdqNfP09nxfGNBTCA2SSGwXc&X-Amz-Signature=5849b68c697bd9d0a676bf98a9e75262ab34b3e6e736d2758447bdac1721a0a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
