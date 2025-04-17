---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROKSMOGY%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2LBwODzJyedG1PB6xAwDW3yJzaMXB1GKxalGTx0MY4AiB5F%2BHkLVBlOqjtLY2X5wmgLJbB2FTOtVAcOmnulTcuUSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMOmqPCgzohQT0Gb9nKtwD%2F012bFSEnhakBylUc8klmrTbNpPEcWzU8A%2BvOTMoJQ4Hi%2F%2FkD4ywJoZhzSu4rpftXcNo6b%2BZ4Gybrqyva62sERbwdQ2aubnVEbkxqtjnJlB0Hh0rBuMJaPAPZzdU3ljs7C1mWA3GKfUz6zIfvj0cSNbrNIpX1VndVqFix3%2FwdYi%2FlyKxnwd8FT0Fm3YJQy1He0IxyoeTHhFls3rdGuOEeLYIFnKJ0FrDR0XKzM5BhnjVcxeC9ILIzhniG3rJSA1T7ueuKI4IjX3ad3vyuwG%2BslK5%2FyGKXd%2B9aO4rJnE7DzF%2Bv146GO4lWJyRl%2BrrPgXjhJeX6DfNv9LYbF06mtcpnRjQDIxW2eYB%2FlDo2SpOG6lIbR4C262%2BFpN89PXfO0ia4UGTOYKujl2r3HuRaJYZCKa3dezV9x5xiO8PPotSb%2Br9qNbHYIlgN59SOg5aYFX%2BiujJb9N984tBXD1JxYaiBxAq5TVeg9YPPYzANXB33hMSZGE%2Bh%2FkfyH2By%2B1nnJQL51K9z2GlSEY7OSGfromGyBgL7vXrzbQMM4m0EJRq%2FuosTymlGrWRLkhDwZPeLQgrZYS66YUYT7MkdodrIVZd77rHMYERhZ9TKkCLstCaJ91W59KpkXumR5M57GYwmcuEwAY6pgE0IRxLMHCDZF5b7q3H2k9hdIgtOxgDjKpvsv9DK9t1kjZfSdyf0i3mkfr%2BOrHy0KclK1QfZvdbx0VmOMqP8nabSGTnct3wfhGgrEcfHcXbKpdL52ZQTMMaBHVOmEPy079t9RWHKotzMt4pBArgW5mCRI%2BoJ6DJj6GhkVasQCLyvI6bpUEz%2FfiNv5oSXMH1%2BaOEUqXRzqWP1ei3dE%2F8VB0TYJsRJPQ9&X-Amz-Signature=eabcb23bdc2013f32f3c09d919da8116d8fd62a1ebbeb77064bbeb7bb89de792&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROKSMOGY%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2LBwODzJyedG1PB6xAwDW3yJzaMXB1GKxalGTx0MY4AiB5F%2BHkLVBlOqjtLY2X5wmgLJbB2FTOtVAcOmnulTcuUSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMOmqPCgzohQT0Gb9nKtwD%2F012bFSEnhakBylUc8klmrTbNpPEcWzU8A%2BvOTMoJQ4Hi%2F%2FkD4ywJoZhzSu4rpftXcNo6b%2BZ4Gybrqyva62sERbwdQ2aubnVEbkxqtjnJlB0Hh0rBuMJaPAPZzdU3ljs7C1mWA3GKfUz6zIfvj0cSNbrNIpX1VndVqFix3%2FwdYi%2FlyKxnwd8FT0Fm3YJQy1He0IxyoeTHhFls3rdGuOEeLYIFnKJ0FrDR0XKzM5BhnjVcxeC9ILIzhniG3rJSA1T7ueuKI4IjX3ad3vyuwG%2BslK5%2FyGKXd%2B9aO4rJnE7DzF%2Bv146GO4lWJyRl%2BrrPgXjhJeX6DfNv9LYbF06mtcpnRjQDIxW2eYB%2FlDo2SpOG6lIbR4C262%2BFpN89PXfO0ia4UGTOYKujl2r3HuRaJYZCKa3dezV9x5xiO8PPotSb%2Br9qNbHYIlgN59SOg5aYFX%2BiujJb9N984tBXD1JxYaiBxAq5TVeg9YPPYzANXB33hMSZGE%2Bh%2FkfyH2By%2B1nnJQL51K9z2GlSEY7OSGfromGyBgL7vXrzbQMM4m0EJRq%2FuosTymlGrWRLkhDwZPeLQgrZYS66YUYT7MkdodrIVZd77rHMYERhZ9TKkCLstCaJ91W59KpkXumR5M57GYwmcuEwAY6pgE0IRxLMHCDZF5b7q3H2k9hdIgtOxgDjKpvsv9DK9t1kjZfSdyf0i3mkfr%2BOrHy0KclK1QfZvdbx0VmOMqP8nabSGTnct3wfhGgrEcfHcXbKpdL52ZQTMMaBHVOmEPy079t9RWHKotzMt4pBArgW5mCRI%2BoJ6DJj6GhkVasQCLyvI6bpUEz%2FfiNv5oSXMH1%2BaOEUqXRzqWP1ei3dE%2F8VB0TYJsRJPQ9&X-Amz-Signature=566e7b22c88f4dc4886a7fe377b73ab7f2d418afad3c872fea2bfea14e21d00e&X-Amz-SignedHeaders=host&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
