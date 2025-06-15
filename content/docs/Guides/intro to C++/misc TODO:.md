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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MSWONAL%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T004819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIGlLIN825HDtvy9kbBwUmvBF8QYtIkpCtiwLpSVxFr0mAiAKoz2tPG36s%2F2bpWEJk0OpikIOOlnA5WJZ39KQwg66zSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMjwn6NQUezbpDPmqCKtwDTiLJ8wLFEa0W6n5Nl5wH3ULs0mnZ8zGlhJAosMA54qAarv5qRkL9yPYeYZ8y1%2BozHXlUFZcbiURtiPYcnuX49XFE79RKDwrdO67s9mKjVMN4mG%2FH9iZKILT1%2FF47HlhVPFP84G2e79ZwdZ4p5%2BhEGtoNKPtr2aRRXRFEzdTmYaA2nYOr2Y%2Fmcf%2F%2BH%2Ba4q6YnHs7fKCDVLFQj7r4AK%2FWbG6m9neIN7ca%2BBgA1%2FUQRlemuu3I5MSatz3%2B1OL6hAAdjVgIiosuoiSC6EWQOGSJb6GVCiU98Z%2B0olL4QNwjaY7DF5UnEcghOXc6q7SNzCzwMDtINbCaviPg%2BmGhDTYaN6AZPnlFyH%2FhePYZnl42o3XLO50Wt0%2FiiiApKec%2BKFWNzjYiWo3IvYDhz8C%2FqGV4AwScoxF8YwfqaTYRACLmd%2BRyhugqP3K81%2FunRPUmjwgBPeqDX8xPIB0cLoRoK4QQPut44tQqQ%2BFJeZMf7HlqNF6%2FSL7ga1eIehxnRMXMx60WNhfoGNzCK2%2Fq2nrkWbWZpP9P2DRYlTqKexlcMCKbRJvYTlXk6g9dz8SlS1Ys%2FayyDq5LUKefF%2FcH1HOjlpNO5fpXzO9ih4wojo06Tw5xln2oL%2B%2BPIIUFa%2Bee%2BNUIwt6K4wgY6pgGF9VfF33R9jqW5pp%2F36FzZp%2FPdSuIIb%2FsUrNe1gA6q%2FftEHkH01jalUJ2ZbOIHDpwwZ665uLwhBAnHAIK3Gx25175WInngnzGOFRGZwqJYSw%2Fz2YlXXXkxV5koEF80dUxkbjhv%2FmzjQhtmK%2BzjHbKdB%2BcvSkezccCCjCo9O4VOlFoyTPkYBNROnebrnB7D1wVUZYQapX%2FKQim9XeZ58cR5C%2F4uZ8qx&X-Amz-Signature=5ae278068c8733136f05d709b619c23718a215b180fccf18df277c79d1fcfe37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MSWONAL%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T004819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIGlLIN825HDtvy9kbBwUmvBF8QYtIkpCtiwLpSVxFr0mAiAKoz2tPG36s%2F2bpWEJk0OpikIOOlnA5WJZ39KQwg66zSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMjwn6NQUezbpDPmqCKtwDTiLJ8wLFEa0W6n5Nl5wH3ULs0mnZ8zGlhJAosMA54qAarv5qRkL9yPYeYZ8y1%2BozHXlUFZcbiURtiPYcnuX49XFE79RKDwrdO67s9mKjVMN4mG%2FH9iZKILT1%2FF47HlhVPFP84G2e79ZwdZ4p5%2BhEGtoNKPtr2aRRXRFEzdTmYaA2nYOr2Y%2Fmcf%2F%2BH%2Ba4q6YnHs7fKCDVLFQj7r4AK%2FWbG6m9neIN7ca%2BBgA1%2FUQRlemuu3I5MSatz3%2B1OL6hAAdjVgIiosuoiSC6EWQOGSJb6GVCiU98Z%2B0olL4QNwjaY7DF5UnEcghOXc6q7SNzCzwMDtINbCaviPg%2BmGhDTYaN6AZPnlFyH%2FhePYZnl42o3XLO50Wt0%2FiiiApKec%2BKFWNzjYiWo3IvYDhz8C%2FqGV4AwScoxF8YwfqaTYRACLmd%2BRyhugqP3K81%2FunRPUmjwgBPeqDX8xPIB0cLoRoK4QQPut44tQqQ%2BFJeZMf7HlqNF6%2FSL7ga1eIehxnRMXMx60WNhfoGNzCK2%2Fq2nrkWbWZpP9P2DRYlTqKexlcMCKbRJvYTlXk6g9dz8SlS1Ys%2FayyDq5LUKefF%2FcH1HOjlpNO5fpXzO9ih4wojo06Tw5xln2oL%2B%2BPIIUFa%2Bee%2BNUIwt6K4wgY6pgGF9VfF33R9jqW5pp%2F36FzZp%2FPdSuIIb%2FsUrNe1gA6q%2FftEHkH01jalUJ2ZbOIHDpwwZ665uLwhBAnHAIK3Gx25175WInngnzGOFRGZwqJYSw%2Fz2YlXXXkxV5koEF80dUxkbjhv%2FmzjQhtmK%2BzjHbKdB%2BcvSkezccCCjCo9O4VOlFoyTPkYBNROnebrnB7D1wVUZYQapX%2FKQim9XeZ58cR5C%2F4uZ8qx&X-Amz-Signature=03db9af0c61c0978a5e43a5c34ca54adffa6285c54d7bcb31cc6493cfad1418f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
