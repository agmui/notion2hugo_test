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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5I5BOCX%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDKg2ej372bMyyfjHQnvYEGKWATdcw22gtK0bopwgCLYAIhAIox1PnWitKjuOBuT30cgN4gK5Vgd4fSARSzu3K%2FdIjqKv8DCC4QABoMNjM3NDIzMTgzODA1IgwPGL6CvjIDO9RdooEq3ANgUaqgvJ9IykIn7A5DLeOhWWRe%2BgZSOOA4xKbUQtids73Mifiq99HOBHeq1OYLn0AIa1RKrSgvX4ovQZI%2F5gIAa8pe%2Fl41ZCK4%2FqGA79Pp%2B%2BaJ9odmMrucLnNjOGXMNFqSQfBLUq%2FenPr7ChCgMutJZxwYHpbcGbjDZ0RNllZUIgyl49EvgEZenlYsjLpnut3rBn3bOpkAHZs1NIcBuJyaFGq4fb%2F6GNINLpRbG7jCFavsedKcAmUk84DiH4RmVNksEHO4Lgj9hkXJMV4hyaLXEHRYKEBx0S6Rfh73DHlZ6CpiXCHdogfKpceQskLp2CUL9Vb2EW5Ak1xeOXEX9M3wZ65lh66JYcBLP242Fn%2B%2BSrapmFdeQoa0boUB6soN8M%2FMuN3qlR5Db2we3rCPoSGi4t2i%2B6TBe%2FtYBCPU9kVxl3jLBJeQjn8lkakUjRxp9hd1PvFZbVSQ2RLhF2Z2YIe812IrI4lMr5aEqlCllA%2FYjkNmcxiHMjksU%2BrfDQ1OrgHnhwvhuzUSBaeN7zy%2F8X2e27C%2BIfg9f5bci6%2FFSHCrTV6Y%2Fl209U5QMZTcB%2FH2F9AgIhMag4ucnGsUnIayRrsVMSD86QASTrkqdqQiyIXJw%2BqGTN3Zql76pLZaUDDUhNTDBjqkAZchgC%2BsaUrJPkveFRgIjlh2Q3z9598ll5FxmE1Va%2Bn9Pc7VMrv27kB3SxWsDgYupMWOKJ6dXbwaeQjEEtXnAIOBybpo0YWK0wQWDgaccW4Yr3PzDDBrDpFD9xFAT5gZlSm%2BQW9WPdRqBzOJDuNsMlEuydCpdL2zcRBhKthMj%2FJ5ktJHvwDkiRJ8Xe19JeeLghZF6HcRRfsl7avBaIJl8jec2DLy&X-Amz-Signature=b7dfa7b593b08d64c24dbaad6fcde75f3a8d58eedaa24343c7b4a07fe5e45c89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5I5BOCX%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDKg2ej372bMyyfjHQnvYEGKWATdcw22gtK0bopwgCLYAIhAIox1PnWitKjuOBuT30cgN4gK5Vgd4fSARSzu3K%2FdIjqKv8DCC4QABoMNjM3NDIzMTgzODA1IgwPGL6CvjIDO9RdooEq3ANgUaqgvJ9IykIn7A5DLeOhWWRe%2BgZSOOA4xKbUQtids73Mifiq99HOBHeq1OYLn0AIa1RKrSgvX4ovQZI%2F5gIAa8pe%2Fl41ZCK4%2FqGA79Pp%2B%2BaJ9odmMrucLnNjOGXMNFqSQfBLUq%2FenPr7ChCgMutJZxwYHpbcGbjDZ0RNllZUIgyl49EvgEZenlYsjLpnut3rBn3bOpkAHZs1NIcBuJyaFGq4fb%2F6GNINLpRbG7jCFavsedKcAmUk84DiH4RmVNksEHO4Lgj9hkXJMV4hyaLXEHRYKEBx0S6Rfh73DHlZ6CpiXCHdogfKpceQskLp2CUL9Vb2EW5Ak1xeOXEX9M3wZ65lh66JYcBLP242Fn%2B%2BSrapmFdeQoa0boUB6soN8M%2FMuN3qlR5Db2we3rCPoSGi4t2i%2B6TBe%2FtYBCPU9kVxl3jLBJeQjn8lkakUjRxp9hd1PvFZbVSQ2RLhF2Z2YIe812IrI4lMr5aEqlCllA%2FYjkNmcxiHMjksU%2BrfDQ1OrgHnhwvhuzUSBaeN7zy%2F8X2e27C%2BIfg9f5bci6%2FFSHCrTV6Y%2Fl209U5QMZTcB%2FH2F9AgIhMag4ucnGsUnIayRrsVMSD86QASTrkqdqQiyIXJw%2BqGTN3Zql76pLZaUDDUhNTDBjqkAZchgC%2BsaUrJPkveFRgIjlh2Q3z9598ll5FxmE1Va%2Bn9Pc7VMrv27kB3SxWsDgYupMWOKJ6dXbwaeQjEEtXnAIOBybpo0YWK0wQWDgaccW4Yr3PzDDBrDpFD9xFAT5gZlSm%2BQW9WPdRqBzOJDuNsMlEuydCpdL2zcRBhKthMj%2FJ5ktJHvwDkiRJ8Xe19JeeLghZF6HcRRfsl7avBaIJl8jec2DLy&X-Amz-Signature=ff435468f08e657019510d8bfc32df709483a37c42398d9767da031b5c36b117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
