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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ2G4L4H%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf0Mx1sFKKezSXrLeYASqG6VRx7YBdBWQ1D6QczS4JOwIhAJSGZ8kKYSWs3iHArqXzPa93zM3%2FhAdg2AoApNUAmsU7Kv8DCBsQABoMNjM3NDIzMTgzODA1IgyeLARIrZZtpsRxvUcq3AMMkaODryCaacyt1cm85cOjbgKIexloKaG%2BsxKSCX9Nu3WZL6KlxByqYsVceYuHv2QplvCx%2BLEkwq9IF%2F5U7aCuXixKjYTo%2Bq6F%2BtoGUDaq8zL0GOWarK1AZB7xhm8LkyW%2B4BJQiLbASoafshlMnYE%2BPA2SvNNkGAynaDRCAYiwac5umcjyccgzdBG7blhU8L4KlUgNGfQZPKEAVi474idWlbXRv6PmoxGqOpkNlOs85cx7Y7UzfgWUuUOlIlR1XI8o34EU8s42nr1AybvrEAf7sWX6GanpUrR%2BuK6hpXHr8v7r7QmFs4bNmkThfMw0VIcZUSI1z5iDjdV696Eb%2BSyGmI2AWOsmmLm8h7AhjWNAO%2Bcdh5IwvbA0SxpOzx9Btd%2FNYOVdoB3Fy5SFFTRbcxewJYy1ia%2FrdmRf%2BgExGTZC6FqXdjpOpkKH5QIL%2BXbzHtSwxO6uM0%2FDCA2mHOGsrj6xlr4YNJoI%2FsrWh5wolc7tQccQPDtlydbA0N7KLWdg5RfwV86zjeaOTE8qXUK72Sjyu7is%2FI%2F0ll%2FuQ3kMgeaATyXa9E03BRi4W7H7F1miJh7bsl%2BWu9lmPuYZIk%2BznGt9PPkkFW9DXiBtCNmjGQi3b7duCCqUe2wHL1vKLjD73ri9BjqkAfT9FVCEEdy2f9F5W2W5s162JNrrA%2FND2xBCJR%2BMhqVxmVB0idRWN8wxXHB%2Fu%2FsGfBOxqXsp4k3ZWIZvaAMwPg0RMYMH4MBSfSOug%2BJjH9KQqE7AsfpDskaZV4OVsw04eJ0efE7wwYSgJg%2FioHF7gEmXxgMu%2BSA1AIDL%2BX%2FL3b7PNRkisRK005MtBB02uO%2FcSKGabFZGEFcenFDqqTy3%2FmyhEvNw&X-Amz-Signature=76f08ee1538223e93fd2bb7079aad66a3f197e3b54b01e401e83469d90bbdbbe&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ2G4L4H%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf0Mx1sFKKezSXrLeYASqG6VRx7YBdBWQ1D6QczS4JOwIhAJSGZ8kKYSWs3iHArqXzPa93zM3%2FhAdg2AoApNUAmsU7Kv8DCBsQABoMNjM3NDIzMTgzODA1IgyeLARIrZZtpsRxvUcq3AMMkaODryCaacyt1cm85cOjbgKIexloKaG%2BsxKSCX9Nu3WZL6KlxByqYsVceYuHv2QplvCx%2BLEkwq9IF%2F5U7aCuXixKjYTo%2Bq6F%2BtoGUDaq8zL0GOWarK1AZB7xhm8LkyW%2B4BJQiLbASoafshlMnYE%2BPA2SvNNkGAynaDRCAYiwac5umcjyccgzdBG7blhU8L4KlUgNGfQZPKEAVi474idWlbXRv6PmoxGqOpkNlOs85cx7Y7UzfgWUuUOlIlR1XI8o34EU8s42nr1AybvrEAf7sWX6GanpUrR%2BuK6hpXHr8v7r7QmFs4bNmkThfMw0VIcZUSI1z5iDjdV696Eb%2BSyGmI2AWOsmmLm8h7AhjWNAO%2Bcdh5IwvbA0SxpOzx9Btd%2FNYOVdoB3Fy5SFFTRbcxewJYy1ia%2FrdmRf%2BgExGTZC6FqXdjpOpkKH5QIL%2BXbzHtSwxO6uM0%2FDCA2mHOGsrj6xlr4YNJoI%2FsrWh5wolc7tQccQPDtlydbA0N7KLWdg5RfwV86zjeaOTE8qXUK72Sjyu7is%2FI%2F0ll%2FuQ3kMgeaATyXa9E03BRi4W7H7F1miJh7bsl%2BWu9lmPuYZIk%2BznGt9PPkkFW9DXiBtCNmjGQi3b7duCCqUe2wHL1vKLjD73ri9BjqkAfT9FVCEEdy2f9F5W2W5s162JNrrA%2FND2xBCJR%2BMhqVxmVB0idRWN8wxXHB%2Fu%2FsGfBOxqXsp4k3ZWIZvaAMwPg0RMYMH4MBSfSOug%2BJjH9KQqE7AsfpDskaZV4OVsw04eJ0efE7wwYSgJg%2FioHF7gEmXxgMu%2BSA1AIDL%2BX%2FL3b7PNRkisRK005MtBB02uO%2FcSKGabFZGEFcenFDqqTy3%2FmyhEvNw&X-Amz-Signature=dc81208c6eb720e4775b54a9922f086e324cea243b17f5a7cad390f36808526e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
