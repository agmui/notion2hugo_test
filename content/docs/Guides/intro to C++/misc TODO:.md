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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO6OH4LM%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCJJfROsWoTPqiUU6yPq%2B%2FwJBj0FNFDRxGKNoGVlLqd5AIgefqcvyMV%2F%2FEMLCbNltPSognpB4d7%2FsufYO53EVxtuy0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2F711qja9A7zYuzIyrcA5T2Xpo6vsr4N72yK7%2BEjH1pLXhvX511tWqYY7YnfxdKsLqqDyYiuyC4cSWLjYWtWLIcVaqFCKx8rDemn6H4x4AoDT6FJ8CgM8%2BwXc5JkPAZL8acP%2Fi%2FuG%2B8gKRV5C%2Fe6lBUiR%2BVaxTIDMZXkpkJzybJlp8evWlaovzHs%2FAvdbkz1XwvYmHFl0cRzz%2FBDMBJFVwkmVnNdFmH35H2Ya083ET8sYzRU7BfjsfWDawzZx%2BwDSq3q6R4H8IjsF4DGpKBSOgOmGh5lIonKDnM1di2Vddu0zVWJAbFxdDP2ThpHCAq3y2QFQnYs6pvEoe36xkbQprwFQtZTkW1agJB3PHoO6FRxnzpcVpk4yzr2vlPF%2BI7Ie1LE7Xbh6Ba4Yl%2Bu8M5yJIrFIA25C9UeCXBl%2Bo38cFcMH3JksmM5MQctoaMDCToCxi9Ef2tPIz1%2FgwrzsUZyR%2BCYqIT8%2FGmc0hVS9%2B5HqdaoEcc5z5IVMkNJd3ominJP2OyswuGT9U%2BzzytD0LXtNIGo%2B4vcW1xoJeb8fr9NXshrmzyCnyuGYHJyAL0vFVVSIA3PqwPOKNAwOXZsPg%2BHZBF3uGlbAFa2CQpHQIKLlAoBBMIiKVbwbfbfbzYlqo5p%2Bi%2B9S8I3ISjoOXiMPfhvMEGOqUBLDckrdpiwVIs4aIianFLAvFUnDydhV8eTuXNdEWlVEGXw9djjI7ymjlLjWKqbTDa7n70xGOpZBkNfS%2BQgcvgT6o8qQQqRQMJDJgxGOiaMyECFAwr1SN9q92q5ytfJaI7f2SqVR9EtLUUop32VyUtjEYfHlry%2FOnzRB0%2Bnh4qi5ok2ATFbVMhoXYEy9VUWJak11Cxc3gs5Sme%2BQaEMZ8S7xXEhE4o&X-Amz-Signature=723bf7b6a571d38f828fd60142d766449550c4406f3a9c0c0b0359febd74a8e8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO6OH4LM%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCJJfROsWoTPqiUU6yPq%2B%2FwJBj0FNFDRxGKNoGVlLqd5AIgefqcvyMV%2F%2FEMLCbNltPSognpB4d7%2FsufYO53EVxtuy0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2F711qja9A7zYuzIyrcA5T2Xpo6vsr4N72yK7%2BEjH1pLXhvX511tWqYY7YnfxdKsLqqDyYiuyC4cSWLjYWtWLIcVaqFCKx8rDemn6H4x4AoDT6FJ8CgM8%2BwXc5JkPAZL8acP%2Fi%2FuG%2B8gKRV5C%2Fe6lBUiR%2BVaxTIDMZXkpkJzybJlp8evWlaovzHs%2FAvdbkz1XwvYmHFl0cRzz%2FBDMBJFVwkmVnNdFmH35H2Ya083ET8sYzRU7BfjsfWDawzZx%2BwDSq3q6R4H8IjsF4DGpKBSOgOmGh5lIonKDnM1di2Vddu0zVWJAbFxdDP2ThpHCAq3y2QFQnYs6pvEoe36xkbQprwFQtZTkW1agJB3PHoO6FRxnzpcVpk4yzr2vlPF%2BI7Ie1LE7Xbh6Ba4Yl%2Bu8M5yJIrFIA25C9UeCXBl%2Bo38cFcMH3JksmM5MQctoaMDCToCxi9Ef2tPIz1%2FgwrzsUZyR%2BCYqIT8%2FGmc0hVS9%2B5HqdaoEcc5z5IVMkNJd3ominJP2OyswuGT9U%2BzzytD0LXtNIGo%2B4vcW1xoJeb8fr9NXshrmzyCnyuGYHJyAL0vFVVSIA3PqwPOKNAwOXZsPg%2BHZBF3uGlbAFa2CQpHQIKLlAoBBMIiKVbwbfbfbzYlqo5p%2Bi%2B9S8I3ISjoOXiMPfhvMEGOqUBLDckrdpiwVIs4aIianFLAvFUnDydhV8eTuXNdEWlVEGXw9djjI7ymjlLjWKqbTDa7n70xGOpZBkNfS%2BQgcvgT6o8qQQqRQMJDJgxGOiaMyECFAwr1SN9q92q5ytfJaI7f2SqVR9EtLUUop32VyUtjEYfHlry%2FOnzRB0%2Bnh4qi5ok2ATFbVMhoXYEy9VUWJak11Cxc3gs5Sme%2BQaEMZ8S7xXEhE4o&X-Amz-Signature=f63782babc111709170477cd65e1ea33ece84a6bc8efb9ae80eb0c99cb716d42&X-Amz-SignedHeaders=host&x-id=GetObject)

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
