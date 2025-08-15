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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635ZPIYK5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEht0L%2B4%2BYbFQBcx50NOCaaSkw9lD2xPh9rP93K5GTPsAiEA1R7%2BFZNorYo%2B%2FhEUmkn8LJ4D1rJxgiADlK8ar9pvP%2FUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDPahc%2FhGyXRNhlC3BSrcA9Si5JTZgtNpaMsGqhPHJ6B2rUkorhEmjwzDhTSHKoONKVx%2BpCgrLQKSFRR9N9jfIaXYGpe2wlM%2B2L059HG0JPbvVgp2wJFQ6IGYWZsqvO7lM8W4lPv6%2B%2B6si03ujylOiJnw32o8dUcukPrKLPElUQOTsuEuWu1LLaGGDU9A0K97Zm1MuHmvY%2BfDGJsiDbcR7Y4JkQICbTdzH%2Bh4t631EOWGSuKDQIK%2FMw6%2BSYqUuT40nluS%2FaQMTT9M43LJ7KNvlqv1XgqX1WBrDWsDL7XLXEVf6YZg6%2BHkSerQc1fRNrmX1LGC%2B5XNVH%2BR41nwD91JPsjFALhxI15P92YuLOBqFnNG0gafalPpLI35Kq97TisMAbvUIa%2FpMkbmWqbfd%2Fuf%2BAbbxs7h6agXbkghn4tgPtZPGkhi4z%2BRZqzko4OZM01SrPKyUY4wL%2BDcHti%2FooMK1QlpeWvkEQaC%2BKq8%2Bxt%2Fj0Cjo16eGz0gZ3OT8tTlAL1ErNuuT2ZzQjoUGsH8h%2FwewykMQ%2FXpd2brXVKiGmJzzkBRFHn1Tdz59LwkiKgV7mmHv95q9CIwLL87UqhmTAM%2BLbSyRy%2BW4CWhx8ySGWqaUZxMqP8YS4IW8QhiL6HhFQSYHj3qhK%2FWWilHG%2BxBMKCj%2BsQGOqUBh9KBMhTPEm%2BJZz4Vf1B0yd1tQAby6ko4mia4KvK7Tn2Ll8kIIi0wrYIrjvOAy3P%2Bth01umiQEEdNM51igbweO6WJjwTq2eQ48rfxIfuhiREO%2Bl9uuSEHS7WUDedg%2Fpe%2BCQ8VmMJefuNuPI0Ta%2FgsJZ1%2FPdYi3ly0l%2B62OljEOiIJWDjrSAjmylLYwTKSBoXQ%2BAHPdLkEWoqJG4j6gdJvu5Rlw3RB&X-Amz-Signature=e947ba9edc872478681805a1decc8f8fc1dfbd04736f01958ab155f23c87b935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635ZPIYK5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEht0L%2B4%2BYbFQBcx50NOCaaSkw9lD2xPh9rP93K5GTPsAiEA1R7%2BFZNorYo%2B%2FhEUmkn8LJ4D1rJxgiADlK8ar9pvP%2FUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDPahc%2FhGyXRNhlC3BSrcA9Si5JTZgtNpaMsGqhPHJ6B2rUkorhEmjwzDhTSHKoONKVx%2BpCgrLQKSFRR9N9jfIaXYGpe2wlM%2B2L059HG0JPbvVgp2wJFQ6IGYWZsqvO7lM8W4lPv6%2B%2B6si03ujylOiJnw32o8dUcukPrKLPElUQOTsuEuWu1LLaGGDU9A0K97Zm1MuHmvY%2BfDGJsiDbcR7Y4JkQICbTdzH%2Bh4t631EOWGSuKDQIK%2FMw6%2BSYqUuT40nluS%2FaQMTT9M43LJ7KNvlqv1XgqX1WBrDWsDL7XLXEVf6YZg6%2BHkSerQc1fRNrmX1LGC%2B5XNVH%2BR41nwD91JPsjFALhxI15P92YuLOBqFnNG0gafalPpLI35Kq97TisMAbvUIa%2FpMkbmWqbfd%2Fuf%2BAbbxs7h6agXbkghn4tgPtZPGkhi4z%2BRZqzko4OZM01SrPKyUY4wL%2BDcHti%2FooMK1QlpeWvkEQaC%2BKq8%2Bxt%2Fj0Cjo16eGz0gZ3OT8tTlAL1ErNuuT2ZzQjoUGsH8h%2FwewykMQ%2FXpd2brXVKiGmJzzkBRFHn1Tdz59LwkiKgV7mmHv95q9CIwLL87UqhmTAM%2BLbSyRy%2BW4CWhx8ySGWqaUZxMqP8YS4IW8QhiL6HhFQSYHj3qhK%2FWWilHG%2BxBMKCj%2BsQGOqUBh9KBMhTPEm%2BJZz4Vf1B0yd1tQAby6ko4mia4KvK7Tn2Ll8kIIi0wrYIrjvOAy3P%2Bth01umiQEEdNM51igbweO6WJjwTq2eQ48rfxIfuhiREO%2Bl9uuSEHS7WUDedg%2Fpe%2BCQ8VmMJefuNuPI0Ta%2FgsJZ1%2FPdYi3ly0l%2B62OljEOiIJWDjrSAjmylLYwTKSBoXQ%2BAHPdLkEWoqJG4j6gdJvu5Rlw3RB&X-Amz-Signature=da8340193b002bf95ba9d2b3423461642d5d66f72fba3c8de7bd49a9ea2bac9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635ZPIYK5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEht0L%2B4%2BYbFQBcx50NOCaaSkw9lD2xPh9rP93K5GTPsAiEA1R7%2BFZNorYo%2B%2FhEUmkn8LJ4D1rJxgiADlK8ar9pvP%2FUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDPahc%2FhGyXRNhlC3BSrcA9Si5JTZgtNpaMsGqhPHJ6B2rUkorhEmjwzDhTSHKoONKVx%2BpCgrLQKSFRR9N9jfIaXYGpe2wlM%2B2L059HG0JPbvVgp2wJFQ6IGYWZsqvO7lM8W4lPv6%2B%2B6si03ujylOiJnw32o8dUcukPrKLPElUQOTsuEuWu1LLaGGDU9A0K97Zm1MuHmvY%2BfDGJsiDbcR7Y4JkQICbTdzH%2Bh4t631EOWGSuKDQIK%2FMw6%2BSYqUuT40nluS%2FaQMTT9M43LJ7KNvlqv1XgqX1WBrDWsDL7XLXEVf6YZg6%2BHkSerQc1fRNrmX1LGC%2B5XNVH%2BR41nwD91JPsjFALhxI15P92YuLOBqFnNG0gafalPpLI35Kq97TisMAbvUIa%2FpMkbmWqbfd%2Fuf%2BAbbxs7h6agXbkghn4tgPtZPGkhi4z%2BRZqzko4OZM01SrPKyUY4wL%2BDcHti%2FooMK1QlpeWvkEQaC%2BKq8%2Bxt%2Fj0Cjo16eGz0gZ3OT8tTlAL1ErNuuT2ZzQjoUGsH8h%2FwewykMQ%2FXpd2brXVKiGmJzzkBRFHn1Tdz59LwkiKgV7mmHv95q9CIwLL87UqhmTAM%2BLbSyRy%2BW4CWhx8ySGWqaUZxMqP8YS4IW8QhiL6HhFQSYHj3qhK%2FWWilHG%2BxBMKCj%2BsQGOqUBh9KBMhTPEm%2BJZz4Vf1B0yd1tQAby6ko4mia4KvK7Tn2Ll8kIIi0wrYIrjvOAy3P%2Bth01umiQEEdNM51igbweO6WJjwTq2eQ48rfxIfuhiREO%2Bl9uuSEHS7WUDedg%2Fpe%2BCQ8VmMJefuNuPI0Ta%2FgsJZ1%2FPdYi3ly0l%2B62OljEOiIJWDjrSAjmylLYwTKSBoXQ%2BAHPdLkEWoqJG4j6gdJvu5Rlw3RB&X-Amz-Signature=b77761d16d5bc58c14dfa2ae567f028da86b00b987198177a64e9da87d2cfb33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635ZPIYK5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEht0L%2B4%2BYbFQBcx50NOCaaSkw9lD2xPh9rP93K5GTPsAiEA1R7%2BFZNorYo%2B%2FhEUmkn8LJ4D1rJxgiADlK8ar9pvP%2FUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDPahc%2FhGyXRNhlC3BSrcA9Si5JTZgtNpaMsGqhPHJ6B2rUkorhEmjwzDhTSHKoONKVx%2BpCgrLQKSFRR9N9jfIaXYGpe2wlM%2B2L059HG0JPbvVgp2wJFQ6IGYWZsqvO7lM8W4lPv6%2B%2B6si03ujylOiJnw32o8dUcukPrKLPElUQOTsuEuWu1LLaGGDU9A0K97Zm1MuHmvY%2BfDGJsiDbcR7Y4JkQICbTdzH%2Bh4t631EOWGSuKDQIK%2FMw6%2BSYqUuT40nluS%2FaQMTT9M43LJ7KNvlqv1XgqX1WBrDWsDL7XLXEVf6YZg6%2BHkSerQc1fRNrmX1LGC%2B5XNVH%2BR41nwD91JPsjFALhxI15P92YuLOBqFnNG0gafalPpLI35Kq97TisMAbvUIa%2FpMkbmWqbfd%2Fuf%2BAbbxs7h6agXbkghn4tgPtZPGkhi4z%2BRZqzko4OZM01SrPKyUY4wL%2BDcHti%2FooMK1QlpeWvkEQaC%2BKq8%2Bxt%2Fj0Cjo16eGz0gZ3OT8tTlAL1ErNuuT2ZzQjoUGsH8h%2FwewykMQ%2FXpd2brXVKiGmJzzkBRFHn1Tdz59LwkiKgV7mmHv95q9CIwLL87UqhmTAM%2BLbSyRy%2BW4CWhx8ySGWqaUZxMqP8YS4IW8QhiL6HhFQSYHj3qhK%2FWWilHG%2BxBMKCj%2BsQGOqUBh9KBMhTPEm%2BJZz4Vf1B0yd1tQAby6ko4mia4KvK7Tn2Ll8kIIi0wrYIrjvOAy3P%2Bth01umiQEEdNM51igbweO6WJjwTq2eQ48rfxIfuhiREO%2Bl9uuSEHS7WUDedg%2Fpe%2BCQ8VmMJefuNuPI0Ta%2FgsJZ1%2FPdYi3ly0l%2B62OljEOiIJWDjrSAjmylLYwTKSBoXQ%2BAHPdLkEWoqJG4j6gdJvu5Rlw3RB&X-Amz-Signature=04926eb97bb848a15b74478bb4debe76996f2ea3419b20ac88f5861d00273fc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635ZPIYK5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEht0L%2B4%2BYbFQBcx50NOCaaSkw9lD2xPh9rP93K5GTPsAiEA1R7%2BFZNorYo%2B%2FhEUmkn8LJ4D1rJxgiADlK8ar9pvP%2FUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDPahc%2FhGyXRNhlC3BSrcA9Si5JTZgtNpaMsGqhPHJ6B2rUkorhEmjwzDhTSHKoONKVx%2BpCgrLQKSFRR9N9jfIaXYGpe2wlM%2B2L059HG0JPbvVgp2wJFQ6IGYWZsqvO7lM8W4lPv6%2B%2B6si03ujylOiJnw32o8dUcukPrKLPElUQOTsuEuWu1LLaGGDU9A0K97Zm1MuHmvY%2BfDGJsiDbcR7Y4JkQICbTdzH%2Bh4t631EOWGSuKDQIK%2FMw6%2BSYqUuT40nluS%2FaQMTT9M43LJ7KNvlqv1XgqX1WBrDWsDL7XLXEVf6YZg6%2BHkSerQc1fRNrmX1LGC%2B5XNVH%2BR41nwD91JPsjFALhxI15P92YuLOBqFnNG0gafalPpLI35Kq97TisMAbvUIa%2FpMkbmWqbfd%2Fuf%2BAbbxs7h6agXbkghn4tgPtZPGkhi4z%2BRZqzko4OZM01SrPKyUY4wL%2BDcHti%2FooMK1QlpeWvkEQaC%2BKq8%2Bxt%2Fj0Cjo16eGz0gZ3OT8tTlAL1ErNuuT2ZzQjoUGsH8h%2FwewykMQ%2FXpd2brXVKiGmJzzkBRFHn1Tdz59LwkiKgV7mmHv95q9CIwLL87UqhmTAM%2BLbSyRy%2BW4CWhx8ySGWqaUZxMqP8YS4IW8QhiL6HhFQSYHj3qhK%2FWWilHG%2BxBMKCj%2BsQGOqUBh9KBMhTPEm%2BJZz4Vf1B0yd1tQAby6ko4mia4KvK7Tn2Ll8kIIi0wrYIrjvOAy3P%2Bth01umiQEEdNM51igbweO6WJjwTq2eQ48rfxIfuhiREO%2Bl9uuSEHS7WUDedg%2Fpe%2BCQ8VmMJefuNuPI0Ta%2FgsJZ1%2FPdYi3ly0l%2B62OljEOiIJWDjrSAjmylLYwTKSBoXQ%2BAHPdLkEWoqJG4j6gdJvu5Rlw3RB&X-Amz-Signature=a4ffd937eb3687f5b933e01294b72bafaa9e402ea9d27292fb4cf10e60913705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635ZPIYK5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEht0L%2B4%2BYbFQBcx50NOCaaSkw9lD2xPh9rP93K5GTPsAiEA1R7%2BFZNorYo%2B%2FhEUmkn8LJ4D1rJxgiADlK8ar9pvP%2FUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDPahc%2FhGyXRNhlC3BSrcA9Si5JTZgtNpaMsGqhPHJ6B2rUkorhEmjwzDhTSHKoONKVx%2BpCgrLQKSFRR9N9jfIaXYGpe2wlM%2B2L059HG0JPbvVgp2wJFQ6IGYWZsqvO7lM8W4lPv6%2B%2B6si03ujylOiJnw32o8dUcukPrKLPElUQOTsuEuWu1LLaGGDU9A0K97Zm1MuHmvY%2BfDGJsiDbcR7Y4JkQICbTdzH%2Bh4t631EOWGSuKDQIK%2FMw6%2BSYqUuT40nluS%2FaQMTT9M43LJ7KNvlqv1XgqX1WBrDWsDL7XLXEVf6YZg6%2BHkSerQc1fRNrmX1LGC%2B5XNVH%2BR41nwD91JPsjFALhxI15P92YuLOBqFnNG0gafalPpLI35Kq97TisMAbvUIa%2FpMkbmWqbfd%2Fuf%2BAbbxs7h6agXbkghn4tgPtZPGkhi4z%2BRZqzko4OZM01SrPKyUY4wL%2BDcHti%2FooMK1QlpeWvkEQaC%2BKq8%2Bxt%2Fj0Cjo16eGz0gZ3OT8tTlAL1ErNuuT2ZzQjoUGsH8h%2FwewykMQ%2FXpd2brXVKiGmJzzkBRFHn1Tdz59LwkiKgV7mmHv95q9CIwLL87UqhmTAM%2BLbSyRy%2BW4CWhx8ySGWqaUZxMqP8YS4IW8QhiL6HhFQSYHj3qhK%2FWWilHG%2BxBMKCj%2BsQGOqUBh9KBMhTPEm%2BJZz4Vf1B0yd1tQAby6ko4mia4KvK7Tn2Ll8kIIi0wrYIrjvOAy3P%2Bth01umiQEEdNM51igbweO6WJjwTq2eQ48rfxIfuhiREO%2Bl9uuSEHS7WUDedg%2Fpe%2BCQ8VmMJefuNuPI0Ta%2FgsJZ1%2FPdYi3ly0l%2B62OljEOiIJWDjrSAjmylLYwTKSBoXQ%2BAHPdLkEWoqJG4j6gdJvu5Rlw3RB&X-Amz-Signature=611cd6d71f426272662114fea1c32c968ecc7e6a2655738392dad990c3f0d231&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635ZPIYK5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEht0L%2B4%2BYbFQBcx50NOCaaSkw9lD2xPh9rP93K5GTPsAiEA1R7%2BFZNorYo%2B%2FhEUmkn8LJ4D1rJxgiADlK8ar9pvP%2FUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDPahc%2FhGyXRNhlC3BSrcA9Si5JTZgtNpaMsGqhPHJ6B2rUkorhEmjwzDhTSHKoONKVx%2BpCgrLQKSFRR9N9jfIaXYGpe2wlM%2B2L059HG0JPbvVgp2wJFQ6IGYWZsqvO7lM8W4lPv6%2B%2B6si03ujylOiJnw32o8dUcukPrKLPElUQOTsuEuWu1LLaGGDU9A0K97Zm1MuHmvY%2BfDGJsiDbcR7Y4JkQICbTdzH%2Bh4t631EOWGSuKDQIK%2FMw6%2BSYqUuT40nluS%2FaQMTT9M43LJ7KNvlqv1XgqX1WBrDWsDL7XLXEVf6YZg6%2BHkSerQc1fRNrmX1LGC%2B5XNVH%2BR41nwD91JPsjFALhxI15P92YuLOBqFnNG0gafalPpLI35Kq97TisMAbvUIa%2FpMkbmWqbfd%2Fuf%2BAbbxs7h6agXbkghn4tgPtZPGkhi4z%2BRZqzko4OZM01SrPKyUY4wL%2BDcHti%2FooMK1QlpeWvkEQaC%2BKq8%2Bxt%2Fj0Cjo16eGz0gZ3OT8tTlAL1ErNuuT2ZzQjoUGsH8h%2FwewykMQ%2FXpd2brXVKiGmJzzkBRFHn1Tdz59LwkiKgV7mmHv95q9CIwLL87UqhmTAM%2BLbSyRy%2BW4CWhx8ySGWqaUZxMqP8YS4IW8QhiL6HhFQSYHj3qhK%2FWWilHG%2BxBMKCj%2BsQGOqUBh9KBMhTPEm%2BJZz4Vf1B0yd1tQAby6ko4mia4KvK7Tn2Ll8kIIi0wrYIrjvOAy3P%2Bth01umiQEEdNM51igbweO6WJjwTq2eQ48rfxIfuhiREO%2Bl9uuSEHS7WUDedg%2Fpe%2BCQ8VmMJefuNuPI0Ta%2FgsJZ1%2FPdYi3ly0l%2B62OljEOiIJWDjrSAjmylLYwTKSBoXQ%2BAHPdLkEWoqJG4j6gdJvu5Rlw3RB&X-Amz-Signature=74a3fb6306e33495e32243061b5408758b46945cde84a9a26d08f8b8ed4b84c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
