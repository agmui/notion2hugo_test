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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BKQ47CR%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIGuHsdE6xlSYKSxKxlQ3BVynfrQrImc5mhLtmGVzdHw3AiAQ%2B4vQC49vNkJAFMIkubGPFycTSt2DGuuIzIjJwaeYpSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6vFm0pP6%2FqdDoxiHKtwDsb3%2FnQHqTHyfrOxT%2FoopavxcWso4baMcQJnLtNJhOOCE3odzLAe3FzgP5ofldTvNouKBv66qQwJgrPWXZDcWvPJFJtDdBZiYb3FPny75%2B%2BHk7HAwc09mtF57w4Mtc7ZY%2B%2BmKzmsglzWLLdF%2Fo3ouGXgXBcC3UmB11AP3PbHFmMV6538DvQGt9joet8Fgcy9j69OwkC%2F4PExvbXoHGOwCt6c2sQ5E9H2UlDrv%2FQM%2Bs11AtUXMTPOzVhIUfVgngz4HeOPRdeIO%2FBs%2FE542gaDPDNGPwxzBJWvBDJSTcfYzQNTWDkLA3GrKiThWfZYHgd0%2F18Pi7H4dFw4DHN75Dr8kAPqJJNXCKFPIBQXAVx1%2Fp4OSDruWIKBd5cntTVDn6fm0I7D1cV7Vxi%2Ba4SlBY0AklxiBAn%2BS51TBMDCJIupJv7QxjBqAdCubiTsYj8db23Try1MbdmWtNKsO7T1Je6gNFbmU3g%2BYXWsDipa%2FysPTaSoHw3ZH9ycodv3%2FgdoRxj%2BSV0u2sQwZdZN3PRzMLJw6ngTHyIrd%2BFnCV70vsfeOQImH2Na2iQNU3SfHw8rQ7K5YggBcWqIRx7Hb5JunzRkozB2KxZtXAjZwlWJOw8rE1ViCIzD8v0A5pL4Fr9EwgMjhwgY6pgF5yU7jtG9WEoPGyVAESL%2BkzDFsraAzreFtBDcQ2umiaVRBAPf7KmJmxuWb7EFHzNA2kWfWD6iQ7ZZfL22m6mFs4K9wR8JgQnqXb3B4OXy6ZACkdFgpPN2eANZ%2B%2FV4x53sUGeSl0Un%2Ba%2FKmoyP4WXoJO%2FZzewhfewHZIsyvofCHfR84CR2esSgFTPlnYVs%2FzB%2F0WpZwA793GVkJdgljdYKMqFAKdZE1&X-Amz-Signature=30a201f81276ba62345e502745848cbae4b64b3acf0df87dd13f2e2e4462a8bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BKQ47CR%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIGuHsdE6xlSYKSxKxlQ3BVynfrQrImc5mhLtmGVzdHw3AiAQ%2B4vQC49vNkJAFMIkubGPFycTSt2DGuuIzIjJwaeYpSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6vFm0pP6%2FqdDoxiHKtwDsb3%2FnQHqTHyfrOxT%2FoopavxcWso4baMcQJnLtNJhOOCE3odzLAe3FzgP5ofldTvNouKBv66qQwJgrPWXZDcWvPJFJtDdBZiYb3FPny75%2B%2BHk7HAwc09mtF57w4Mtc7ZY%2B%2BmKzmsglzWLLdF%2Fo3ouGXgXBcC3UmB11AP3PbHFmMV6538DvQGt9joet8Fgcy9j69OwkC%2F4PExvbXoHGOwCt6c2sQ5E9H2UlDrv%2FQM%2Bs11AtUXMTPOzVhIUfVgngz4HeOPRdeIO%2FBs%2FE542gaDPDNGPwxzBJWvBDJSTcfYzQNTWDkLA3GrKiThWfZYHgd0%2F18Pi7H4dFw4DHN75Dr8kAPqJJNXCKFPIBQXAVx1%2Fp4OSDruWIKBd5cntTVDn6fm0I7D1cV7Vxi%2Ba4SlBY0AklxiBAn%2BS51TBMDCJIupJv7QxjBqAdCubiTsYj8db23Try1MbdmWtNKsO7T1Je6gNFbmU3g%2BYXWsDipa%2FysPTaSoHw3ZH9ycodv3%2FgdoRxj%2BSV0u2sQwZdZN3PRzMLJw6ngTHyIrd%2BFnCV70vsfeOQImH2Na2iQNU3SfHw8rQ7K5YggBcWqIRx7Hb5JunzRkozB2KxZtXAjZwlWJOw8rE1ViCIzD8v0A5pL4Fr9EwgMjhwgY6pgF5yU7jtG9WEoPGyVAESL%2BkzDFsraAzreFtBDcQ2umiaVRBAPf7KmJmxuWb7EFHzNA2kWfWD6iQ7ZZfL22m6mFs4K9wR8JgQnqXb3B4OXy6ZACkdFgpPN2eANZ%2B%2FV4x53sUGeSl0Un%2Ba%2FKmoyP4WXoJO%2FZzewhfewHZIsyvofCHfR84CR2esSgFTPlnYVs%2FzB%2F0WpZwA793GVkJdgljdYKMqFAKdZE1&X-Amz-Signature=a2ca1237e91cdfcd32e530d3ab8b9d3749cf679f992e95d2d125656c7f330055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
