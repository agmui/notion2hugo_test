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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVFILB55%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIHnOLsuVdkuOrDDta8XFeaV%2FPLRr0MRKNaTGH9ahijkiAiEA2VCo%2FYonHeaclxEEDfcrUXuoU%2FzYFQKTLWrNSBg3Gkkq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGCgO29vE%2F2HN0TdgyrcA4c%2Bi1kqWv4uZIUDS8niAAWE3I5Iidq884xEbiGz%2FBZxEeSt2xUjDD%2FWc7O2OyUpUzU%2FKfXaSuGt6XKKSsg568XEWt%2BuMc0tXicULgfu5UQHJfJE8SK42LijevfeErXLiunTi05bwZsVFIhRXotA%2BVMFgQy%2BpC0CkV0StesD3IHScYieHFo95qJXNCMyxLPyWzhbAtkK1Lv1b1%2BiSZJ7ej%2BsKd3RbYr0DKMB8JuTCwXziiRVkb8wImcNEInMowYUUPbq0lNF3y3Rqu2L5hTb21NXrJO0TNQkSCd66EUmB4e4KloiCHseRG3GHw5I70F5fTRlEMwYxBQ4KmukWiqsyGIB9ifL%2FdoTji1dPb2cvqfoYAeQQn2x6mGQygoEZvZicoEk9tTpfgVAuMPRzhGuvKCAwJbNIye%2F4YZfhblVjzgDobruZpVhhPkd6GNLot9NMlOdAZ%2FGwg0sqhv1ogVQaJXVl5gPtuIMSB3RGGS4mSmJYZKQLOfWODpxeQvALugB7EjcW8gUJ%2FYDkicKW4DQZR8f23nqsNWPycyUZzLJJLzJB2qODNFcQcmrMbfzGUPGi6uNh0JRwDHXF%2F7enVmyO%2BoJmLXgZNqRxe76eorTAaoEm%2FXkAfWbO7aUrF8sMJuD9L0GOqUB47kkzexNzOziVUUCPE4xZtr5yLSwiq58YbH3hFT%2BtSpJMrNloQqN9TRv7Ppd41dKqXUmo5jMpJDdDgeeLromnjpoIreJDqOmLUpr818XcXuhSL7856MXZkJo3OeIB11K5I8SZi6ca7YGgLGG4gQkBqx5qbk41aDWaDIKoQT1I4YRWdgzVN16fAk96il2swBxLJMXDhyhg61xhlh%2B6cAe41fMNNqZ&X-Amz-Signature=8935bb9765166d5c66337af01a9049d0f928ba21bd3a9535ffd78ded5380f740&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVFILB55%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIHnOLsuVdkuOrDDta8XFeaV%2FPLRr0MRKNaTGH9ahijkiAiEA2VCo%2FYonHeaclxEEDfcrUXuoU%2FzYFQKTLWrNSBg3Gkkq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGCgO29vE%2F2HN0TdgyrcA4c%2Bi1kqWv4uZIUDS8niAAWE3I5Iidq884xEbiGz%2FBZxEeSt2xUjDD%2FWc7O2OyUpUzU%2FKfXaSuGt6XKKSsg568XEWt%2BuMc0tXicULgfu5UQHJfJE8SK42LijevfeErXLiunTi05bwZsVFIhRXotA%2BVMFgQy%2BpC0CkV0StesD3IHScYieHFo95qJXNCMyxLPyWzhbAtkK1Lv1b1%2BiSZJ7ej%2BsKd3RbYr0DKMB8JuTCwXziiRVkb8wImcNEInMowYUUPbq0lNF3y3Rqu2L5hTb21NXrJO0TNQkSCd66EUmB4e4KloiCHseRG3GHw5I70F5fTRlEMwYxBQ4KmukWiqsyGIB9ifL%2FdoTji1dPb2cvqfoYAeQQn2x6mGQygoEZvZicoEk9tTpfgVAuMPRzhGuvKCAwJbNIye%2F4YZfhblVjzgDobruZpVhhPkd6GNLot9NMlOdAZ%2FGwg0sqhv1ogVQaJXVl5gPtuIMSB3RGGS4mSmJYZKQLOfWODpxeQvALugB7EjcW8gUJ%2FYDkicKW4DQZR8f23nqsNWPycyUZzLJJLzJB2qODNFcQcmrMbfzGUPGi6uNh0JRwDHXF%2F7enVmyO%2BoJmLXgZNqRxe76eorTAaoEm%2FXkAfWbO7aUrF8sMJuD9L0GOqUB47kkzexNzOziVUUCPE4xZtr5yLSwiq58YbH3hFT%2BtSpJMrNloQqN9TRv7Ppd41dKqXUmo5jMpJDdDgeeLromnjpoIreJDqOmLUpr818XcXuhSL7856MXZkJo3OeIB11K5I8SZi6ca7YGgLGG4gQkBqx5qbk41aDWaDIKoQT1I4YRWdgzVN16fAk96il2swBxLJMXDhyhg61xhlh%2B6cAe41fMNNqZ&X-Amz-Signature=fda37f7e438aeb1d77c6ecf0c5e8e489f81594e8c0d8714041c965467388d4a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
