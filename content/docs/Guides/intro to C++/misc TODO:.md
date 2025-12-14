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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJVWBXCP%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIHp4srkbHxc3MgndJYr6Q%2BiY8O75668i6gvB1Rs7xfo%2BAiEAnOg%2FNOjqAmpMML7KA3fxKE4qLhbOKELTJEaIKDsSf8wq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHw%2BnJ5vweISQJXGcCrcA6LnbAQabrUmeXomn3mO0WBpVC6tqECxeLx%2BXK%2F7nuSYXnouT42U3%2Fj%2FVD4xReLCQOA92X4yPG5XNiu6gWABp7NP7u6Xczhv5toRGgEnPtR0bK%2FbAtklWz8r4KGCT49EvkA8x7ks%2FLu6szK1mAHe%2BFcTEhu2jK8EvAD9HGtbeozQalipGrkOITZ5LYFluCFCLPrdDo0syIOY4FslLk665FSIzm2xRLpcNxVwUfoxFJzUCRehpfhCSQ%2FNi9DRRi64Hww90RvpMhZi62YjHeBRwdOLyqrwQnQOdtfjzhgSP1Jb0uA1A%2B8S6bgLD36OqW4LXSlDjcQrehuqt%2FnQ%2FAOjd01IUkCDy99usdHCYVkT1Ib7VVu5Bvy%2BwmPE2t1drx52jolosdodDu0UOLXlRx89Ujpp5bHcZpG%2B0OxgZiJHqTbwq9D4vQ%2FtpX5A3SVDhfAvOTIoxSwyrHUvbL2J9RapcSYO3pW2cCdwqh%2FXmuo66WqPDtahRtHDbyk4hQcRml4kIuz6iEXuk8WAoBY8z9TmpFamiieoWJNxMP2HTNmpEzokpFihsw1Ku3I0j1APz%2FhWeKHzQoVzsEJvRw0fz12Jgol46VxEUeRgxkUIjxVNQ%2BFvcLMnkk8V6pVLjwebMImW%2BMkGOqUBF6w6hhUT%2FyrDsekRWMrkr%2FscWn%2FPHP0Y5Pst93u73D5IeO8iHcFKDtQ4VhiDPPCqcler%2BhHawI%2FBvVFiiyjurMpivh4iahTmKAJgPjI1ma%2FqwwB7h61QMIOM0Y0P8fb8NouvR1%2FBQix9i8iAs6gEDm4tSQdCMRTimU4UXSdwkJ3C2Rb4a82gjbyMJeAUixxQJ4WoHE3GZ%2BaGCBj%2Fw8jA4Bu%2Fb%2Fbu&X-Amz-Signature=bc8342e0e1fee0fa428a4641d75b2c556781c9851d0abb77ae2805fe9db3a949&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJVWBXCP%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIHp4srkbHxc3MgndJYr6Q%2BiY8O75668i6gvB1Rs7xfo%2BAiEAnOg%2FNOjqAmpMML7KA3fxKE4qLhbOKELTJEaIKDsSf8wq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHw%2BnJ5vweISQJXGcCrcA6LnbAQabrUmeXomn3mO0WBpVC6tqECxeLx%2BXK%2F7nuSYXnouT42U3%2Fj%2FVD4xReLCQOA92X4yPG5XNiu6gWABp7NP7u6Xczhv5toRGgEnPtR0bK%2FbAtklWz8r4KGCT49EvkA8x7ks%2FLu6szK1mAHe%2BFcTEhu2jK8EvAD9HGtbeozQalipGrkOITZ5LYFluCFCLPrdDo0syIOY4FslLk665FSIzm2xRLpcNxVwUfoxFJzUCRehpfhCSQ%2FNi9DRRi64Hww90RvpMhZi62YjHeBRwdOLyqrwQnQOdtfjzhgSP1Jb0uA1A%2B8S6bgLD36OqW4LXSlDjcQrehuqt%2FnQ%2FAOjd01IUkCDy99usdHCYVkT1Ib7VVu5Bvy%2BwmPE2t1drx52jolosdodDu0UOLXlRx89Ujpp5bHcZpG%2B0OxgZiJHqTbwq9D4vQ%2FtpX5A3SVDhfAvOTIoxSwyrHUvbL2J9RapcSYO3pW2cCdwqh%2FXmuo66WqPDtahRtHDbyk4hQcRml4kIuz6iEXuk8WAoBY8z9TmpFamiieoWJNxMP2HTNmpEzokpFihsw1Ku3I0j1APz%2FhWeKHzQoVzsEJvRw0fz12Jgol46VxEUeRgxkUIjxVNQ%2BFvcLMnkk8V6pVLjwebMImW%2BMkGOqUBF6w6hhUT%2FyrDsekRWMrkr%2FscWn%2FPHP0Y5Pst93u73D5IeO8iHcFKDtQ4VhiDPPCqcler%2BhHawI%2FBvVFiiyjurMpivh4iahTmKAJgPjI1ma%2FqwwB7h61QMIOM0Y0P8fb8NouvR1%2FBQix9i8iAs6gEDm4tSQdCMRTimU4UXSdwkJ3C2Rb4a82gjbyMJeAUixxQJ4WoHE3GZ%2BaGCBj%2Fw8jA4Bu%2Fb%2Fbu&X-Amz-Signature=fa3df7747fafada71747a342fd6cc2572556de0bb28cbb934c29c94cc100959c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
